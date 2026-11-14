# Audit: site shell (index, practice, core.js, math.js, quiz.js, README, docs)

Repo state audited: `4c95162` (after the fast-forward). The repo was not modified: `git status` is clean, and running `tools/i18n-check.js` wrote nothing.

## How the checks were done
- I loaded `assets/js/math.js` in node and ran about 140 inputs through `S1.math.checkNumeric` and `parseNumber`. The scripts are `scratchpad/audit/t.js`, `t2.js` and `t3.js`. `t3.js` loads all 17 question banks (139 numeric questions) and tests the checker against their real `answer`/`tolerance`/`sigfigs` specs.
- I compared the formula booklet metadata (`booklet` in math.js) and the research docs against the text of the official *Mathematics: analysis and approaches formula booklet, First examinations 2021*. The copy I could get is Version 1.0 (dp.uwcea.org mirror, extracted with pdftotext). The section layout is the same as later versions, but I could not check differences that are specific to v1.3. pdftotext drops modulus bars, so I did not use it to check any |…| claim.
- Next-curriculum dates: IBO's "Mathematics: analysis and approaches updates" page (seen via search snippet; direct fetch returned 403) says the new AA course is launched Feb 2027, with first teaching Aug 2027 and first assessment May 2029. This **confirms** the dates in PLAN.md:18 and research 1-2:13.
- Translation coverage: `node tools/i18n-check.js {ko,ja,zh-Hant} --stats` all end "All translated, nothing stale, all lints pass". The updated COORDINATION.md ("L1 ✅ Completed", t1-1 to t5-4) and the i18n file listing now agree. **No finding.**
- Links: every relative `href`/`src` in index.html, practice.html, README.md, docs/*.md and docs/research/*.md resolves. core.js links (`root + index.html/practice.html/LICENSE`, pager, `i18n/<lang>/*.js`) resolve. The pages.yml copy list matches the README description, including `.nojekyll`. **No broken links.**
- Facts confirmed correct (no finding): HL P1/P2 2 h, 110 marks, 30%; P3 1 h, 55 marks, 20%; IA 20 marks, 20%; SL P1/P2 1 h 30, 80 marks, 40%; IA 12–20 pages; HL hours 39/32/51/33/55/30 = 240; SL hours 19/21/25/27/28/30 = 150. The SL/AHL subtopic ranges in README, PLAN, AUTHORING and core.js agree with each other and with the 2019 guide numbering (1.1–1.9/1.10–1.16, 2.1–2.11/2.12–2.16, 3.1–3.8/3.9–3.18, 4.1–4.12/4.13–4.14, 5.1–5.11/5.12–5.19). Topic titles are identical across README, PLAN, AUTHORING, index.html and `S1.topics`.

Counts: **Critical 3 · Major 13 · Minor 22**

---

## Critical

### C1. Exact answers with fewer than 3 s.f. are never fully accepted, and an answer of 0 can never be accepted at all
- **Where:** `assets/js/math.js:397` (`var sfOK = p.exact || !range || (p.sfMax >= range[0] && p.sfMin <= range[1]);`), with `countSigFigs` (around line 205) and `describeCheck` (around line 418).
- **What is wrong:** a typed decimal is always treated as rounded (`exact: false`). If its s.f. count is below `sigfigs`, the result is "Right value — Now check your significant figures. Give your answer to 3 significant figures", even when it is the exact answer. IB accepts "exact or to 3 s.f.", so 0.75, 2 and 0.0015 are full-mark answers.
- **Evidence (sigfigs 3):**
  - `0.75` for 0.75 → sigfig, while `3/4` → correct
  - `0.0015` → sigfig; `1.5e-3` → sigfig
  - `2` for 2 → sigfig (but `100` for 100 → correct)
  - `0` and `0.00` for 0 → sigfig. `countSigFigs('0.00')` returns 1, so a zero answer can only pass as an expression.
  - In the real banks, typing the stored exact value is rejected for t2-2-q010 (7.7), t5-1-q011 (4.3), t5-3-q003 (4.5), t5-3-q012 (40) and t3-2-q006 (1.5625).
- **Effect:** students are told their correct exact answer is incorrectly rounded, and in the quiz the question is not locked as correct.
- **Fix:**
  - If a typed decimal equals the answer exactly (relative difference ≤ 1e-12) and the answer can be written in no more than the required s.f., accept it as exact.
  - Treat 0 specially.
  - Optionally add a per-question `exact: true` flag.

### C2. The tolerance is checked before 3 s.f. rounding, so wrongly rounded 3 s.f. answers are accepted
- **Where:** `assets/js/math.js:396–399` (`within` decides "correct" whenever the s.f. count matches); `parseTolerance` gives a default of 1%.
- **Evidence:**
  - √3/2 = 0.866… with tolerance 0.5%: `0.868` and `0.862` are accepted as **correct**.
  - 1/3 with the default tolerance: `0.334`, `0.332` and `0.330` are **correct**.
  - 100 with 0.5%: `99.5` is **correct**.
  - In the banks (t3.js), 43 of 139 numeric questions accept a value that is one unit off in the 3rd s.f. For example, t3-1-q001 (8.7178) accepts 8.73, t3-3-q015 (4.2426) accepts 4.25, t1-1-q005 (5990) accepts 6000, and t4-1-q006 (2) accepts 2.01.
  - Exact expressions get the same loose tolerance: `22/7` is accepted as **correct** for π at 0.5%.
- **Effect:** under IB marking these are A0 answers, and the site teaches the 3 s.f. rule while marking them right.
- **Fix:**
  - When `sigfigs` is set and the input is not exact, mark it correct only if `roundSig(input, n) === roundSig(answer, n)` for an allowed n. Use the tolerance only for questions that are deliberately approximate.
  - For exact inputs, use a tight relative tolerance (such as 1e-9) unless the question opts out.

### C3. Unary minus binds tighter than `^`, so `-2^2` evaluates to +4
- **Where:** `assets/js/math.js:261–272` (`parsePower` calls `parseUnary`, which applies `-` before `^`).
- **Evidence:** `parseNumber('-2^2')` gives 4 (marked "wrong, sign" for the answer −4); `-3^2` gives 9. Mathematically and on every GDC, −3² = −9.
- **Fix:** handle unary minus above the power level, so that `parseUnary` → `-parsePower()`. Keep `2^-1` working by allowing a unary minus in the exponent.

---

## Major

### M1. Input after a leading number is silently treated as a "unit" and dropped, which changes the value
- **Where:** `assets/js/math.js:342–343`. The regex for a plain decimal plus a trailing unit excludes only `pi|sqrt|ln|log|sin|cos|tan|exp`.
- **Evidence:** `2e^3` → 2; `2e` → 2; `3atan(1)` → 3; `2asin(1)` → 2; `1e` → 1; `2x` → 2.
- **Effect:** a right exact answer such as `2e^3` is marked wrong. If the answer happens to equal the leading digits, wrong input is read as that number.
- **Fix:**
  - Only strip a trailing unit if it is a known unit token (cm, m, s, rad, °, …) separated from the number.
  - Otherwise send the whole string to `evalMathExpr` (which already handles implicit multiplication such as `2pi`).
  - Add `e` (followed by `^` or end of input), `atan`, `asin`, `acos` and `arc…` to the exclusion list.

### M2. Thousands separators are read as decimal commas
- **Where:** `assets/js/math.js:333–336`.
- **Evidence:** `1,500` → 1.5 and `12,345` → 12.345. The feedback then says "the power of ten is off", which is misleading.
- **Fix:** treat `,` followed by exactly 3 digits (and no `.`) as a thousands separator. Alternatively, reject the input as ambiguous with a clear message.

### M3. The research doc gives the wrong hours for Topic 4, contradicting index.html
- **Where:** `docs/research/syllabus-topics-3-4-5.md:188`. Quote: "## 4. Topic 4: Statistics and Probability (27 SL hrs + 9 AHL hrs = 36 HL hrs)".
- **What is wrong:** the 2019 guide gives HL 33 h (SL 27 + AHL 6). index.html:168 correctly says 33 h. With 36 the HL topics plus 30 h of toolkit would total 243, not 240.
- **Fix:** "27 SL hrs + 6 AHL hrs = 33 HL hrs".

### M4. Improper partial fractions are presented as in the syllabus
- **Where:**
  - `docs/research/syllabus-topics-1-2.md:152` — "(or degree of numerator equal to degree of denominator requiring polynomial division/inspection first)"
  - `docs/research/syllabus-topics-1-2.md:184` — "(plus improper fractions of the form (px²+qx+r)/((ax+b)(cx+d)) = A + …)"
- **What is wrong:** the AA guide AHL 1.11 says "Maximum of two distinct linear terms in the denominator, with degree of numerator less than the degree of the denominator". I am quoting this guide wording from memory; confirm it against the guide PDF.
- **Fix:** state that the numerator degree must be less than the denominator degree, and move improper cases to "not required".

### M5. Applications & Interpretation (AI) content is listed under AA SL 1.4
- **Where:** `docs/research/syllabus-topics-1-2.md:52`. Quote: "Use of GDC TVM / Finance Solver for annuities, regular savings plans, and loan amortization."
- **Also:** line 87 ("Deposits $P at the start/end of each year … `PMT`").
- **What is wrong:** amortization and annuities are AI SL 1.8. AA 1.4 is "compound interest, annual depreciation" (its guidance includes the real value of an investment with inflation, and technology use).
- **Fix:** remove annuities, amortization and PMT from the AA scope, or move them to a "Not needed for AA" note.

### M6. Formulas listed as "in the booklet" that are not in it
- **Where and what:**
  - `docs/research/syllabus-topics-1-2.md:297–305` lists "Composite function (f∘g)(x) = f(g(x))" and "Identity and inverse relation" under "Exact IB Formula Booklet Formulas (Section 2.1, 2.5)". The booklet's Topic 2 SL entries are only 2.1 (line equations, gradient), 2.6, 2.7 and 2.9.
  - `docs/research/syllabus-topics-3-4-5.md:389–391` lists "Acceleration a = dv/dt = d²s/dt² = v dv/ds" under booklet SL 5.9. The booklet has only a = dv/dt = d²s/dt². The same doc at line 376 says v dv/ds is AHL, so the doc contradicts itself. I could not confirm v dv/ds is in the AA guide at all.
- **Fix:** move these to "Not in Formula Booklet (must memorize)", and drop v dv/ds unless it is confirmed in the guide.

### M7. The formula booklet metadata in math.js does not match the booklet
- **Where:** `assets/js/math.js:29–91`.
- **Context:** AUTHORING.md:14 calls this "the Version 1.3 AA Formula Booklet". It is not rendered anywhere on the site (no page reads `S1.math.booklet`), so for now the problems are latent.
  - `:42` `'2.6'` includes `f(x) = a(x - p)(x - q)` and `f(x) = a(x - h)^2 + k`. These are not in the booklet; the research doc (1-2:349–351) itself lists them as "Not in Formula Booklet".
  - `:44` `'2.9'` is `'f(x) = a^x, g(x) = log_a x'`. The booklet gives `a^x = e^{x ln a}` and `log_a a^x = x = a^{log_a x}`.
  - `:40` `'1.13'` includes `'|z| = sqrt(a^2 + b^2)'` and `'arg z = θ'`, which are not in the booklet. De Moivre's theorem is booklet 1.14, not 1.13.
  - `:50` `'3.9'` includes `'cot θ = 1/tan θ'`. Booklet 3.9 lists only sec and cosec.
  - `:49` `'3.6'` includes `tan θ = sin θ/cos θ`, which is booklet 3.5.
  - `:55` `'3.16'` includes `'A_triangle = (1/2)|v × w|'`. The booklet gives only the parallelogram, as research 3-4-5:157 correctly says.
  - `:82` `'5.17'` is `'A = ∫_a^b x dy'`. It is missing the modulus that its own `'5.11'` entry has (`|y|`) and that research 3-4-5:447 has (`|x|`). The formula is wrong where x < 0.
  - `:67` `'5.5'` is `'A = ∫_a^b y dx'`. It drops the booklet's condition "where f(x) > 0".
  - `:38` `'1.10'` uses the `(1+x)^n … |x|<1` form; the booklet uses `(a+b)^n = a^n(1 + n(b/a) + …)` with no validity condition.
  - `:65` `'4.14'` omits the continuous-variance and frequency-form variance formulas that the booklet gives.
- **Also:** the task brief and AUTHORING.md:14 refer to `S1.math.formulas`, which does not exist. The exported key is `booklet`.
- **Fix:** rebuild the metadata line by line from the booklet, move non-booklet items to a separate `memorize` list, and fix the AUTHORING reference.

### M8. Unverified claims about "retiring" content and the next syllabus structure
- **Where:**
  - `docs/PLAN.md:18` — "The revised IB Mathematics curriculum (Topics A–E) …"
  - `docs/PLAN.md:20` — "topics are being retired after November 2028 (e.g., financial applications SL 1.4, proof by counterexample AHL 1.15, bivariate regression x on y SL 4.10, Euler's method AHL 5.18)"
  - `docs/research/syllabus-topics-1-2.md:13, 15, 52, 242`
  - `docs/research/syllabus-topics-3-4-5.md:206, 478`
  - These also reach students: topics/t1-1.html says "it is only retiring in the 2029 syllabus revision" (another reviewer owns that page).
- **Status:** the 2027/2029 dates are confirmed (IBO). The "Topics A–E" structure and the list of removed subtopics are **unverified**: I found no IB source, and the new guide is not public.
- **Needed to confirm:** the IB *Mathematics: analysis and approaches subject brief, first assessment 2029* (ibo.org PDF) or the new guide.
- **Fix:** until confirmed, remove the claims, or reword to "may change in the 2029 course".

### M9. The home page claims nothing in a scope box can be tested
- **Where:** `index.html:142`. Quote: "Nothing inside it will be tested in your exam."
- **What is wrong:** the scope boxes themselves say several items can appear when they are given or scaffolded:
  - t3-2: "Not required **from memory**" (factor formulas)
  - research 1-2:97: "unless scaffolded step-by-step in Paper 3"
  - research 3-4-5:124, 183
- **Effect:** a student could skip something that can appear on Paper 3.
- **Fix:** "Nothing inside it needs to be learned for your exam. If it ever appears, the question will give or guide it."

### M10. The AUTHORING Try-it template has the wrong answer key
- **Where:** `docs/AUTHORING.md:251`. Quote: `data-answer="81"`.
- **What is wrong:** the problem in the same template (u₁ = 54, u₃ = 24) has the answer 162, as the template's own solution at line 259 shows. The 81 belongs to the earlier worked example.
- **Effect:** anyone copying the template gets a Try-it box that marks the right answer wrong. topics/t1-1.html:250 already uses 162.
- **Fix:** `data-answer="162"`.

### M11. Site topic numbers collide with IB syllabus subtopic numbers
- **Where:** `S1.topics` `num` values (`assets/js/core.js:35–51`), index.html:47–107 ("1.1 Sequences…", "1.4 Complex numbers…", "5.3 First principles…"), and hero eyebrows ("Topic 1.1 · SL 1.1–1.4, 1.8", AUTHORING.md:73).
- **What is wrong:** "1.4" is IB subtopic 1.4 (financial applications), "1.3" is geometric sequences and "4.2" is presentation of data. Students who look up "Topic 1.4" in the guide or a past-paper index will find something else. The pages also use real syllabus codes ("SL 1.2") right next to the site numbers.
- **Fix:** use a distinct label (for example "Module 1A" or "1-4"), or always show the page number together with its syllabus range.

### M12. The home page "Exploration" hours and "IA … 30 h" are misleading
- **Where:**
  - `index.html:160` — `30 h · 20 marks · 20%` in the "HL Time / Marks / Weight" column
  - `index.html:168` — "30 h for the Exploration"
  - `docs/PLAN.md:29` — "30 h (inc. inquiry)"
- **What is wrong:** in the guide the 30 hours are for "the toolkit and mathematical exploration" together, not the IA alone. In a "Time" column, students may also read 30 h as the length of an assessment session.
- **Fix:** "30 h (toolkit and exploration, class time)".

### M13. The research doc misdescribes the content of SL 4.11 and AHL 3.11
- **SL 4.11:** `docs/research/syllabus-topics-3-4-5.md:246` says "SL 4.11 Conditional probability in context: Reversing tree branches and combining Binomial/Normal probabilities". In the guide, SL 4.11 is the formal definition and use of the formulae P(A|B) = P(A∩B)/P(B) and, for independent events, P(A|B) = P(A) = P(A|B′).
- **AHL 3.11:** lines 76 and 102 put inverse trig functions (arcsin, arccos, arctan) in AHL 3.11. In the guide they are AHL 3.9; 3.11 is "relationships between trigonometric functions and the symmetry properties of their graphs".
- **Fix:** correct the descriptions. The site ranges (3.9–3.11, 4.11–4.12) are unaffected.

---

## Minor

1. **Arc-function names and unbracketed functions are rejected.** `assets/js/math.js:247` (`allowed` set): `arctan(1)`, `arcsin`, `arccos` are invalid, although these are the IB notation; only `asin/acos/atan` work. `ln2`, `sqrt2` and `3sqrt2` are also invalid (`√2` works). Add `arcsin|arccos|arctan` aliases and bare-argument forms.
2. **Trailing units only work after decimals.** `math.js:316` claims "Trailing units (0.25 rad, 12.4 cm^2, 45°)", but `3/4 cm` and `sqrt(3)/2 rad` → invalid. `45°` is read as 45 with no degree-to-radian conversion, so `60°` is "wrong" for π/3 with no hint.
3. **Mixed numbers and ambiguous fractions.** `2 1/2` → 10.5 (spaces are stripped before parsing). `1/2pi` → π/2 (students often mean 1/(2π)). Consider rejecting a space between numbers, and showing the interpreted value back to the student.
4. **Percentages.** `5%` for 0.05 → "wrong, power of ten". Probability answers given as percentages are common; either accept them or explain.
5. **More-precise answers are flagged.** `0.8660` for 3 s.f. → "Right value, check s.f.". IB markschemes usually accept more accurate answers unless the question states the accuracy. This is unverified against the current markscheme instructions; confirm and relax if needed.
6. **Chemistry wording in the help text.** `assets/js/core.js:1074` uses the example "standard form (6.02e23)", which is Avogadro's number from the chemistry site. Use a maths example such as `1.5e-3`.
7. **Chemistry wording in feedback.** `assets/js/math.js:427`: "Check your unit conversions or decimal point." Unit conversions rarely apply in AA; say "Check your decimal point or powers of 10."
8. **chem.js is described wrongly.** `README.md:65` says `assets/js/chem.js` is a "compatibility loader/alias for S1.chem / S1.math". It is a full 705-line duplicate of math.js (identical apart from the last 5 lines), including its own copy of the booklet, and no page loads it. Delete it or describe it accurately; otherwise future fixes may land in only one copy.
9. **Missing file referenced.** `docs/PLAN.md:43` says "Official IB AA Formula Booklet reference database (`assets/js/formula-data.js`)", but the file does not exist; the data is `booklet` in math.js.
10. **README describes a home-page section that does not exist.** `README.md:60` says "home: … question decoding guide, exam facts, progress". index.html has no decoding-guide section, only the "Decode" step in "How to study".
11. **Paper 3 tier placement is inconsistent.** README.md:19 and PLAN.md:79 put "Paper 3 Investigation" in the Exam-style tier; practice.html:37–38 puts Paper 3 style under **Challenge**, and Exam style is only Paper 1/2.
12. **"Modules" vs "topics".** index.html:27 and practice.html:20 say "17 modules"; index.html:122, the README and core.js say "17 topics". Pick one term.
13. **Slope fields.** `assets/js/core.js:51` t5-4 blurb starts "Slope fields, …". Slope fields are not in README, PLAN or research coverage for AHL 5.18, and I am not sure they are in the AA guide (they are in AI HL). Unverified; confirm or remove.
14. **Korean missing from the language selector's label.** `assets/js/core.js:686`: `aria-label="Language / 言語 / 語言"` has no Korean (언어), although Korean is offered.
15. **Pyramid, cone and sphere formulas mislabelled as "Prior learning".** `docs/research/syllabus-topics-3-4-5.md:30–33`: "Prior Learning (Page 2 of Booklet)" lists them, but these are booklet SL 3.1. Prior learning is parallelogram, triangle, trapezoid, circle, cuboid, cylinder, prism and the 2D distance and midpoint formulas.
16. **SL 3.1 scope.** `syllabus-topics-3-4-5.md:24` says "angle between a line and a plane, and between two planes". SL 3.1 covers the angle between two intersecting lines or between a line and a plane; the angle between two planes is AHL 3.18.
17. **Bearings range.** `syllabus-topics-3-4-5.md:26`: "000° to 360°" should be 000° to 359° (360° is 000°).
18. **SL 5.3 exponent set.** `syllabus-topics-3-4-5.md:332`: "SL 5.3 Derivative of xⁿ (n ∈ ℚ)". In the guide, 5.3 is n ∈ ℤ; rational n is SL 5.6.
19. **Integrating-factor example uses two different equations.** `syllabus-topics-3-4-5.md:517–518`. Line 517 uses x y′ + 2y = x³, which gives x²y = x⁵/5 + C; line 518 continues with "x²y = ¼x⁴ + C", which comes from x y′ + 2y = x².
20. **Typos and wording in the research docs.**
    - `syllabus-topics-3-4-5.md:537`: "BecausePart" is missing a space.
    - `:116`: "Solve arctan(1/2) + arctan(1/3)" should be "Evaluate".
    - `syllabus-topics-1-2.md:405`: "Sharp corners (cusps)" — these are corners, not cusps.
    - `:431`: the heading "Oblique asymptotes of degree difference ≥ 2" names non-oblique asymptotes.
21. **Glossary pair in TRANSLATING.md.** `docs/TRANSLATING.md:84` lists "拐點/轉向點" as one pair. In HK usage 轉向點 means *turning point*, not *point of inflexion* (拐點); listing them together risks mistranslation.
22. **Booklet version claim (unverified, plausible).** `README.md:103` and others say the "Version 1.3 … governs the May 2028 examination". A v1.3 file for first examinations 2021 exists on mirrors; the copy I could read was v1.0 (dp.uwcea.org). I could not reach ibo.org (403). To confirm, check the current booklet on the IB Programme Resource Centre. Suggest the wording "the current version of the formula booklet (first examinations 2021)" so the site does not go stale.

Sources: [IBO AA curriculum updates](https://ibo.org/university-admission/latest-curriculum-updates/dp-mathematics-analysis-and-approaches-updates/), [IBO AA subject brief, first assessment 2029](https://www.ibo.org/globalassets/new-structure/programmes/dp/pdfs/sb_maths_analysis_en.pdf), [AA formula booklet mirror (v1.0)](https://dp.uwcea.org/docs/Mathematics%20Analysis%20and%20Approaches%20Formula%20Booklet.pdf), [AA formula booklet mirror (v1.3)](https://www.fjuhsd.org/cms/lib/CA02000098/Centricity/Domain/233/Formula%20booklet%20SL%20and%20HL%20May%202021.pdf).
