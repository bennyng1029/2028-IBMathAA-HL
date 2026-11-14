# Pass 2: the student's view and cross-page consistency

**Angle.** A 16–17-year-old using the site in a browser, and consistency between pages. I left out findings already in the pass-1 reports (`t*.md`) and the other pass-2 reports (`site-shell.md`, `pass2-examiner.md`, `pass2-syllabus-*.md`, `i18n.md`). Where a finding builds on one of those, I name it.

**The repository changed while I worked.** At the start HEAD was `4c95162`. Commit `6cd7994` ("maths-symbol rendering") landed during the audit, and other agents kept editing the working tree (84 modified files at the end). So I rendered three snapshots:

| Snapshot | What it is |
|---|---|
| A | `4c95162` (start of audit), exported with `git archive` |
| B | `6cd7994` (latest commit), exported with `git archive` |
| C | the working tree at about 15:10 UTC (uncommitted edits in progress) |

Unless I say otherwise, findings and file:line refer to **B/C**: they were still present in the working tree at the end. The line numbers are from the working tree.

**Method.** I used Playwright with Chromium at 1280×900 and at 390×844, deviceScaleFactor 1. For each of the 19 pages I clicked every "Show all steps" button, opened every `<details>`, and walked every visible text node for raw markup. I rendered all 305 bank questions through `S1.enhance`: stem, options, hints, solution, model answer, markscheme and misconception notes. I checked mounted widgets, empty boxes and horizontal overflow. I loaded "SL core only" mode by setting `localStorage s1.level=sl` before page load, so that the quizzes rebuild. A separate HTML-level check looked for one-letter sub/superscripts glued to words (`m_perp` → m<sub>p</sub>erp).

Scripts, JSON and screenshots are in `(scratch file, not kept)`: `scan.js`, `glue.js`, `sl.js`, `intcount.js` and `words.js`, with `headout/`, `fixout/` and `wtout/` holding the per-snapshot `report.json`, `qreport.json`, `text_*.txt` and `shots/*.png`.

---

## 1. Rendered view

### 1.1 Console errors, widgets, phone width — clean (with one process warning)

- **No console errors or page errors** on any page in snapshots A, B or C. Every one of the 34 widgets mounts, has height, and shows its controls or readouts. `t1-2.binomial-finder` and `t1-3.perm-comb` are text and HTML widgets, so they have no SVG; that is expected.
- **Phone width (390 px): no horizontal page scroll on any page** in A, B or C. Wide tables sit inside `.table-scroll`.
- **Process warning (Major while it lasted).** During the `math.js` edit, one intermediate state threw `pageerror: GREEK is not defined` (t1-4, t1-5) and `sqrtSymbols is not defined` (t2-1, t2-2). In that state **8 widgets on 4 pages failed to mount**, and long `.chem` equations overflowed at 390 px (t1-4 scrollWidth 481, t1-5 538). It was fixed before `6cd7994` was committed. The fix is cheap: run a headless load of all 19 pages, failing on any `pageerror`, before each commit. `scan.js` does this in about 60 s.

### 1.2 Raw-markup counts per page

These are occurrences visible to a student. A run of matches in one text node counts once. **Excluded:** the deliberate "type it like this" hints (`.mono` / `<code>`: `pi/3`, `sqrt(3)/2`, `5*pi/6`, `8*pi`); English uses of "sigma notation" and "epsilon-delta"; set braces `{A, B, C}`; and the conjugate star `z*` in prose.

| Page | A: page text | A: bank | **B: page text** | **B: bank** | C: page text | C: bank |
|---|---|---|---|---|---|---|
| index | 9 | – | **9** | – | 9 | – |
| practice | 0 | – | **0** | – | 0 | – |
| t1-1 | 2 | 21 | **2** | **16** | 2 | 0 |
| t1-2 | 11 | 19 | **10** | **15** | 10 | 17 |
| t1-3 | 2 | 8 | **2** | **6** | 2 | 6 |
| t1-4 | 40 | 107 | **12** | **31** | 4 | 6 |
| t1-5 | 21 | 40 | **6** | **33** | 0 | 0 |
| t2-1 | 7 | 31 | **0** | **14** | 0 | 14 |
| t2-2 | 3 | 17 | **2** | **3** | 2 | 3 |
| t2-3 | 18 | 21 | **3** | **1** | 3 | 1 |
| t3-1 | 23 | 34 | **6** | **23** | 6 | 23 |
| t3-2 | 14 | 43 | **3** | **21** | 5 | 21 |
| t3-3 | 16 | 68 | **7** | **0** | 8 | **179** (see R2) |
| t4-1 | 0 | 1 | **0** | **0** | 0 | 0 |
| t4-2 | 1 | 4 | **1** | **4** | 1 | 4 |
| t5-1 | 13 | 23 | **10** | **7** | 10 | 7 |
| t5-2 | 6 | 2 | **5** (+70 `int`) | **2** (+82 `int`) | 5 (+70) | 2 (+82) |
| t5-3 | 13 | 17 | **4** (+41 `int`) | **0** (+35 `int`) | 4 (+41) | 0 (+35) |
| t5-4 | 12 | 5 | **12** (+16 `int`) | **2** (+19 `int`) | 12 (+16) | 2 (+19) |
| **Total** | 211 | 461 | **94 (+127 `int`)** | **178 (+136 `int`)** | 83 (+127) | 285 (+136) |

The bare word `int` (meant to be ∫) was not caught by the generic scan, so I counted it separately with `intcount.js` and show it in brackets. It is the same in A, B and C.

Examples of what is still visible in B/C, by kind (the new findings are R1–R6):

- index: `(a + b)^n`, `re^{iθ}`, `f^{-1}(x)`, `Δ = b^2 − 4ac` in the tile blurbs (R6).
- t1-2: widget `log_{2.00}(4.00) = 2.00`, `x^{2(2) + (-1)(4)}`, `General term T_{r+1}`; step titles `log_x(8)`, `T_{r+1}` (R4, R5).
- t1-4: widget readouts `1.50 e^{i(π/6)}`, `r^{1/n}`, `1^{1/5}` (pass-1 X2); answer box `2e^{iπ/4}, 2e^{11πi/12}` at the end of WE3 (`topics/t1-4.html`, the `.worked__answer` of the roots example).
- t1-5 (B): `Σ_{r=1}^{3} r²` in the widget; `5^(2k)` in the WE "why" lines; bank `x in mathbb{R}` ×12 (R2).
- t3-1, t3-2, t3-3: `2*π*r`, `r*θ`, `cos(4*π/3)`, `λ*b`, `t*v`, `v . w`, `n = u x v` (R3).
- t5-1: `m_T`, `m_N`, `u = e^{2x−2}` in WE1 step title and "why" (R5); widget `Tangent m_T = f'(x₀)` (R4).
- t5-2/t5-3/t5-4: `int x^n dx`, `intab f(x) dx`, `π intab y2 dx`, `int u dv = uv - int v du` (R1).
- t5-4: widget `P_3(x) = x − x^3/3!`, `Error |f(x) − P_n(x)|`, `Euler estimate y_n(1.5)`; why lines `y_{n+1} = y_n + 0.2(2 x_n y_n²)`, `e^{2 ln x}` (R4, R5).

### 1.3 Raw-markup findings (new)

**R1 (Major). `int` is never turned into ∫, so every integral on the three calculus pages reads "int".**
`assets/js/math.js` `formula()` (B and C) converts Greek letters, `sqrt(`, `\in` and so on, but not `int`. `int_a^b` therefore renders as "int" + subscript a + superscript b, which reads "intab".
- Counts: t5-2 has 70 page and 82 bank occurrences, t5-3 has 41 and 35, t5-4 has 16 and 19. Some appear in prominent places: the **formula-booklet callout** `topics/t5-2.html:97` ("int xⁿ dx = …"), the definite-integral properties `t5-2:189-196`, the checklist, the t5-3 decoder and the volume formulas `t5-3:390-396`.
- See the screenshot `p2/fixout/shots/ph_mid.png`.
- **Fix:** in `formula()`, map a standalone `int` to `∫`, e.g. `s.replace(/(^|[^A-Za-z])int(?=[\s_^(]|$)/g, '$1∫')`. Do this before the sub/sup pass, so that `∫_a^b` gets its limits. Alternatively, replace `int` with `∫` in the sources (math.js booklet metadata already uses `∫`).

**R2 (Major). Backslash commands inside JavaScript string literals lose their backslash: `'\mathbb{R}'` → "mathbb{R}" and `'\in'` → "in".**
In a single-quoted JS string, `\m`, `\i` and `\c` are escape sequences that drop the backslash. So the new `\mathbb` / `\in` / `\circ` support in `formula()` never sees them. A student reads "for all x in mathbb{R}" or "sumr=1n".
- In B: `data/questions-t1-5.js` has 24 strings (q001–q009, q015, q017, q018) and `data/questions-t1-4.js` has 3 (q007, q008, q018), plus `10 sin(72circ)` in t1-4-q010.
- **This is being re-introduced right now.** In the working-tree `data/questions-t3-3.js`, someone is converting vectors to `\mathbf{…}` with single backslashes (about 200 occurrences). The rendered stems show "mathbf{AB}", and the t3-3 bank count jumped from 0 to 179 (snapshot C). pass2-examiner m6 recommended writing `\mathbf{u} \cdot \mathbf{v}`, which must be written `'\\mathbf{u} \\cdot \\mathbf{v}'` in these files.
- **Fix:** double every backslash in `data/*.js` (or use the plain-word forms `formula()` already maps: `x ∈ ℝ`, `theta`, `°`). Add a lint to `tools/` that fails on `/[^\\]\\(?:mathbb|mathbf|in|circ|cdot|times|lambda)\b/` in `data/*.js` and `assets/js/widgets-*.js`.

**R3 (Minor). Programmer and plain-text operators remain in `.chem` spans after the fix: `*` for multiplication, `.` for the dot product, the letter `x` for the cross product, `in R` for ∈ ℝ.**
- `*`: t3-1 `2*π*r`, `r*θ` (`topics/t3-1.html:285, 326`, decoder), t3-2 `cos(4*π/3)`, `2*π`, t3-3 `λ*b`, `t*v`, `k*b`, t5-1 and t5-2 one each. The banks carry about 40 more: t3-1 q003/q004/q005/q014/q016/q017/q018 (MCQ options read `90*π` and so on) and t3-2 q001/q003/q005/q007/q008/q012.
- `.` and `x`: t3-3 page `v . w` (`:38, :103`), `n = u x v`, `AB x AC` (`:69`). This sits next to bold **v** · **w** in the eq-blocks of the same page. pass2-examiner m6 covers the bank only.
- `in R`: t2-1 (3), t2-2 (6), t2-3, t3-2, t3-3, t5-1, t5-4 (3).
- **Fix:** in `formula()`, render ` * ` / `*` between operands as nothing or `·`, ` . ` as ` · `, a spaced ` x ` between vector names as ` × `, and ` in [RZQNC]` as `∈ ℝ…`. Or edit the sources. The MCQ options in the t3-1/t3-2 banks are the most visible case.

**R4 (Minor). Widget readouts are inserted as text, so `^`, `_` and `{}` show raw on pages beyond those in pass 1.**
New pages: t5-1 (`Tangent m_T = f'(x₀)`, `Normal m_N = −1/m_T`), t5-4 (`Polynomial P_n(x)`, `P_3(x) = x − x^3/3!`, `Error |f(x) − P_n(x)|`, `Euler estimate y_n(1.5)`), t4-2 (`z_a = −1.00, z_b = 1.50`), t1-2 slider label `Exponent x (so b = a^x)` (`assets/js/widgets-t1-2.js:16`).
- **Fix:** pass readout strings through `S1.chem.formula()` and set them as HTML. Or use Unicode (mₜ, Pₙ(x), x³).

**R5 (Minor). Worked-example step titles (`data-title`) and "Why this step" lines are not formatted.**
- Titles: `t1-1:172` `S_k`, `t1-2:127` `log_x(8)`, `t1-2:200` `T_{r+1}`, `t2-2:311` `e^(−0.08t)`, `t2-3:341` `Δ_x`, `t5-1:196` `m_T`/`m_N`, `t5-2:222` `y_top`/`y_bottom`, `t5-3:417` `y_outer²`.
- Why lines: `t1-2:136`, `t2-2:307`, `t5-1:193, 197`, `t5-3:418`, `t5-4:164, 240`, t1-5 WE (`5^(2k)`).
- pass 1 reported only t2-3's `x_new`.
- **Fix:** in `initWorked` (`assets/js/core.js:1009-1017`), run the title through the formatter, or wrap maths in `<span class="chem">` in the why paragraphs.

**R6 (Minor). Home-page tile blurbs show raw `^`/`{}`.**
`(a + b)^n`, `(1 + x)^n`, `re^{iθ}`, `f^{-1}(x)`, `b^2` (index tiles 1.2, 1.3, 1.4, 2.1, 2.2). They come from `S1.topics[].blurb` (`assets/js/core.js:35-51`), which is rendered as plain text. This is the first thing a student sees.
- **Fix:** write them with Unicode (`(a + b)ⁿ`, `re^iθ` → `re^{iθ}` via the formatter, `f⁻¹(x)`, `b²`), or format the blurb.

**Glued multi-letter subscripts still present in C.** t2-3 `x_new`/`y_new` (pass 1), and **t5-2 `y_top`/`y_bottom`** (`topics/t5-2.html:39, 199`, rendered "ytop − ybottom"; new). In B, t3-1 `A_segment`/`P_sector`, t3-2 `y_max`/`y_min` and t3-3-q018 `nhat` were also glued; they are already fixed in the working tree.

**Short questions with an empty "Model answer" box:** t1-3-q013, **t1-3-q017**, t2-3-q008, t2-3-q018. Pass 1 named t2-3's two and "one" of t1-3's. Both t1-3 items are affected.

---

## 2. "SL core only" mode: what an SL student still sees

I set the mode before page load, so the quizzes use the SL filter. Quizzes correctly drop AHL questions on every page, and the header nav and pager skip AHL-only pages. Leaks follow.

### Mixed pages

| Page | Still visible in SL mode | Status |
|---|---|---|
| **t1-5** | Decoder rows for induction, contradiction, counterexample and 3×3 systems (`topics/t1-5.html` decoder, 4 rows, each labelled "(AHL 1.15/1.16)") | pass 1 (5-m5) |
| **t2-3** | 7 of the 8 decoder rows (Factor/Remainder, Vieta, oblique asymptote, odd/even, \|f(x)\|, 1/f(x), inequalities); they show no AHL label at all | pass 1 (M1) |
| **t3-2** | Decoder row "[AHL] Simplify cos(arcsin x)…" (`:80`) | pass 1 |
| **t3-2** | Practice intro "…and AHL reciprocal/compound/inverse trigonometry" | new, Minor |
| **t3-2** | The **"3.2 challenge" quiz shows "No questions match this selection yet."** All challenge items are AHL, so "yet" wrongly suggests questions are coming. | new, Minor |
| **t4-2** | Decoder row "Stage 1 priors … find P(B_i \| A)" (Bayes, `:71`) | pass 1 |
| **t4-2** | Scope box `:95` mentions "AA HL 4.14 … aX + b" | new, Minor: harmless, but it is AHL wording on an SL view |
| t2-1 (SL page) | Domain restriction / self-inverse (AHL 2.14) taught and tagged SL | pass2-syllabus F12 |
| t1-2 | Scope box `:221` points to AHL (a+bx)ⁿ, n ∈ ℚ, with a link | acceptable signpost |

### AHL-only pages (t1-3, t1-4, t3-3, t5-3, t5-4) opened directly or from a bookmark (new, Minor)

- The whole page stays visible, with **no banner** saying "This page is HL only".
- The checklist shows **"0 of 5 ticked" with no items**, because every `<li>` has `data-level="ahl"`.
- Every quiz says **"No questions match this selection yet."**
- See the screenshot `p2/headout/shots/sl_t1-3.png`.

**Fix:**
- In SL mode, add a top-of-page notice on `level: 'ahl'` pages: "This page is Additional HL. You are in SL-only mode — switch to SL + HL to see its checklist and questions."
- Hide the empty checklist counter.
- Change `quiz.js:376` so that, when the pool is empty only because of the level filter, it says "These questions are HL only (switch to SL + HL)". Drop "yet".

---

## 3. Cross-page consistency

**C1 (Major). "Topic X.Y" in body text means two different numbering systems, and two references point to pages that do not exist.**
This extends site-shell M11 (which covers labels and tiles) to the running text.
- `topics/t1-1.html:263`: "Maclaurin power series in **Topic 5.19**". There is no 5.19 page; it means syllabus AHL 5.19, which is site page 5.4.
- `topics/t1-5.html:292` and `:310` (table header): "three planes … (**Topic 3.18**)". There is no 3.18 page; it means AHL 3.18, which is site page 3.3.
- `topics/t5-3.html:335` "(from **Topic 1.3** / AHL 1.11)" and `t1-2.html:221` "(**Topic 1.3**)" use **site** numbering.

A student who looks for "Topic 5.19" in the nav finds nothing.
- **Fix:** write site pages as links with their title, e.g. "(see [5.4 Differential equations and Maclaurin series](t5-4.html), syllabus AHL 5.19)". Never write "Topic" before a syllabus code; use "AHL 3.18" / "SL 1.4".

**C2 (Minor). Paper labels use three styles.**
`'Paper 1 (No GDC)'`/`'Paper 2 (GDC)'`/`'Paper 3 (Investigation)'` (t1-1 to t1-5), `'P1'`/`'P2'`/`'P3'` (t2-1, t2-2, t2-3, t3-3, t5-3, t5-4) and `'Paper 1'`/`'Paper 2'` (t4-1, t4-2, t5-1, t5-2). In Practice they appear side by side. A missing tag on t3-1/t3-2 is pass2-examiner X2.
- **Fix:** store `P1`/`P2`/`P3` and map them to one display label in `quiz.js` ("Paper 1 · no calculator").

**C3 (Minor). The HL label has six spellings.**
"HL" (tiles, practice chips), "AHL" (question badge, "[AHL · Paper 1]" stem prefixes on t3-2), "Additional HL" (section flag, home stats), "Additional Higher Level" (t3-3 checklist), "SL and AHL" (practice Level select) and "HL only" (Paper 3 row). The eyebrows of the AHL-only pages also differ: t1-4 "AHL 1.12–1.14 · Additional HL", t3-3 "Additional HL · AHL 3.12–3.18", and t1-3/t5-3/t5-4 with no "Additional HL" (pass2-syllabus F20 noted t1-3 only).
- **Fix:** use "AHL" for content tags and "HL" only for the course. Use one eyebrow pattern: "Topic n.m · AHL a–b · HL only".

**C4 (Minor). Combinations notation changes within one page.**
`t1-2.html:159-177` shows the booklet's ⁿCᵣ in the eq-block, but `nCr`, `6C2` and `6C3 × 4C2` in the text around it. The same happens on t1-3 (`:37, :65, :127, :160`) and t4-2 (`:77-78, :172`). "4C2" can read as 4·C·2. pass2-examiner m7 covers one bank item only.
- **Fix:** use ⁿCᵣ (or `^{n}C_{r}` in `.chem`) everywhere outside calculator-input hints. Add one sentence at the first use: "ⁿCᵣ (your GDC writes nCr)".

**C5 (Minor). Vectors look different on the same page.**
The t3-3 eq-blocks use bold **u**, **v**, **n**. The `.chem` text on that page uses plain `u`, `v`, `n`, with `.` and `x` for the products (R3). t1-5 linear systems uses `\mathbf{r}` (bold in B), and the bank uses row triples. Students are told on t3-3 that bold matters.
- **Fix:** use one convention, as in R3 or pass2-examiner m6.

**C6 (Minor). British and US spelling is mixed, even within a page.**
- "centre" (t1-4 `:356`, t3-1 `:155, 162, 212, 272, 296`, t3-2 `:94`, t4-1 `:208`, t5-4 `:269, 304`, bank t3-1) vs "center/centered" (t1-4 `:351`, t4-1 `:25, 213, 215`, t4-2 `:231`, bank t1-4 `:227`). t1-4 and t4-1 each use both.
- "factorise/factorising" (t2-3 `:37, :277`) vs "factorize" (t1-4 `:42, :387`, banks t1-1/t1-4/t1-5); "recognising" (bank t2-3 `:177`) vs "recognize" elsewhere.
- Otherwise the site follows Oxford spelling consistently (-ize plus modelling/travelled, "inflexion" ×50 with no "inflection", "practise" as the verb). Keep that and change the -ise and center outliers.

**C7 (Minor). The home page says exact answers are a Paper 1 thing.**
`index.html:165`: "give non-exact numerical answers to 3 significant figures (or exact values on Paper 1)". The IB instruction applies to both papers: "exactly or correct to three significant figures".
- **Fix:** "Unless the question says otherwise, give answers exactly or correct to 3 significant figures (on Paper 1 you will usually leave them exact)."

**C8 (Minor). Calculator-brand command names are given without explanation.**
`binomcdf`, `invNorm` (t4-2 `:197, :218, :238, :257-259`) and `fnInt` (t5-2 `:203`) are TI names. Only `t4-2:182` mentions Casio. Casio and Nspire users see different names.
- **Fix:** at first use per page, add "(TI: invNorm; Casio: InvNormCD; or use your GDC's inverse normal)".

**Checked and consistent (no action):**
- The strong/moderate/weak thresholds for r appear only on t4-1 (pass-1 M1 covers the 0.849 clash). No other page contradicts them.
- The radians-vs-degrees advice agrees between `index.html:165`, `t3-1:90` and `t5-1:120`.
- `f^{-1}` notation is uniform. `r cis θ` / `re^{iθ}` are used consistently on t1-4. `ln` / `log_a` are uniform, and the base-10 convention is stated once (`t1-2:104`).
- Page `<title>`, `<h1>`, `S1.topics.title` and the README table agree for all 17 pages. The short labels (nav, tiles, practice chips) come from one source and agree with each other. "Modules vs topics" and "slope fields" are in site-shell (minor 12, 13).

---

## 4. Pedagogy

**P1 (Major). The home page says "Work through each strand in order" (`index.html:37`), but several pages need later strands, and the site has only one cross-page link (`t1-2:221` → t1-3).**

| Page | Needs, without a link | Where |
|---|---|---|
| t1-4 | Radians, unit circle and exact values (t3-1, t3-2); compound-angle formulas (t3-2 AHL) for the "exact value of cos(π/12)" decoder row and WE | `t1-4:77`, `:175`, `:254` |
| t1-5 | Derivatives and product rule (t5-1) for "induction on f⁽ⁿ⁾(x)"; planes in 3D (t3-3) for the systems table | `:37`, `:180`, `:292-310`; bank q016 |
| t2-3 | f′(x) = 0 to find turning points when restricting a domain (Topic 5) | `:86`, `:316` |
| t4-2 | Integration (t5-2) for continuous PDFs; f′(x) = 0 for the mode | `:303-317` |
| t5-3 | Partial fractions (t1-3), limits and chain rule (t5-1) | `:335` (text reference only) |
| t5-4 | Integration by parts and partial fractions (t5-3); Σ notation and S∞ (t1-1) | separable/IF/Maclaurin sections |

A student following the stated order meets integrals on t4-2 and derivatives on t1-5 and t2-3 with no pointer.
- **Fix:** add a "Before this page" line under each hero, linking the prerequisite pages (for t1-4: "radians and the unit circle — 3.1, 3.2"). Change the home text to "Topics can be studied in any order; each page lists what it assumes." Consider a reading order for HL (e.g. t3-1 → t3-2 before t1-4).

**P2 (Major). The markscheme codes M1, A1, R1 and AG are never explained, though every worked example and every self-marked question depends on them.**
- The home page tells students to "check the markscheme tags" (`index.html:120`). The first worked example on t1-1 uses [M1]/[A1] without definition.
- Short questions ask students to "Tick each point you made" against lines such as "M1 A1: …".
- The only definition anywhere is AG on `t1-5:115`. There is no `data-def` on any tag. A student cannot tell that an A1 normally depends on its M1, or that R1 needs a written reason.
- **Fix:** add a "How IB marks your working" box on the home page (M = method, A = accuracy (usually depends on the preceding M), R = reasoning, AG = answer given, FT = follow-through). Link it from the quiz self-marking legend, and add `data-def` tooltips to the first `[M1]`/`[A1]` on each page.

**P3 (Minor). Jargon is used without a definition.**
Each item below lacks a `data-def` or explanation:
- "priors", "posterior", "partitioned" (t4-2 `:71`, `:290`, widget title `:300`)
- "codomain", "surjectivity" (`t2-1` scope box)
- "Vieta's formulas" (t2-3 ×10; the booklet calls these the sum and product of roots, so say so once)
- "archetypes" (`t5-4:47`)
- "principal argument" (t1-4 ×8, no dfn)
- "interpolation/extrapolation" (t4-1)
- "separable" (t5-4)
- "TVM / Finance Solver" (t1-1)
- "multiplicity" (t2-3)

The fix is a short `data-def` at first use, e.g. "posterior = the updated probability after the evidence".

**P4 (Minor). `t4-2:112` defines P(A | B) as "probability of A occurring given that B has *already occurred*".**
"Already" suggests a time order. In Bayes questions (same page, `:71`) the conditioning event is usually the *later* one, such as a test result. A student who takes "already occurred" literally gets stuck.
- **Fix:** "probability of A, given that we know B happens (B is true)".

**P5 (Minor). `t2-3:277` says "any root needed to start factorising a cubic or quartic is either a small integer (±1, ±2, ±3) or guided by the question".**
The same page teaches the Remainder Theorem at P(b/a) (`:37`), and Paper 1 cubics often have a root such as x = 1/2. Students may stop testing fractions. "+-1" also shows raw here.
- **Fix:** "usually a small integer factor of the constant term, or a simple fraction p/q (p divides the constant, q divides the leading coefficient)".

---

## 5. "Not needed for IB" callouts

**N1 (Major). Examinable content sits inside scope boxes, which the home page tells students to read once and then leave ("Nothing inside it will be tested in your exam", `index.html:142`).**
site-shell M9 covers the home-page sentence. These boxes break it from the other side:
- `topics/t5-3.html:392-396`: the box is headed "Classic mistake & IB syllabus boundary", and its first bullet is "**Never square the difference!** … the most common volume mistake in IB HL exams". That is core examinable advice in a skip-me box.
- `topics/t1-1.html:301-303`: "May 2028 syllabus note: Financial applications (SL 1.4) **are examinable in May 2028** … SL 1.4 covers compound interest, annual depreciation and real value with inflation." It describes examinable content.
- `topics/t1-5.html:333`: "…you must use Gaussian elimination to g(k)z = h(k)…". The wording is pass 1 5-m6; the placement is new.
- `topics/t2-3.html:277`: the second sentence is exam technique (see P5).

**Fix:** move each examinable sentence into a `callout--mistake` or `callout--exam` box, and keep scope boxes strictly to "you do not need X".

**N2 (Minor). Headings and tone vary across 20 scope boxes.**
The headings used are:
- "What is NOT needed for IB:" (t1-1, t1-2, t1-3)
- "Not needed for IB Math AA HL:" (t1-4, t1-5, t5-4)
- "Not needed for IB:" (t2-1, t2-2, t2-3)
- "Not required from memory in IB Math AA HL:" (t3-2)
- "Not required in IB Math AA HL:" (t3-3)
- "What is NOT in the IB Math AA HL syllabus:" (t4-1, t4-2)
- "Not needed for IB (Scope boundary):" (t5-1, t5-2)
- "Classic mistake & IB syllabus boundary:" (t5-3)
- "Extension (beyond the AA guide)" (t4-1:308)
- "May 2028 syllabus note" (t1-1:302)

t3-1 has no scope box at all. Some end with "!" (t5-2:203). There are also two different "AI"s:
- "Math AI" (the other IB course): t1-5:333, t4-1:95, t4-2:95, t5-2:203.
- "AI tools" (chatbots): t1-3:191, index:140.

A 16-year-old meeting "belongs to IB Math AI" one box after "AI tools often include them" may not realise the first is a course.
- **Fix:** use one heading, "Not needed for IB Math AA". Always write "Math AI (Applications and Interpretation)" for the course, and "chatbots or online tools" for the other.

**N3 (Minor). The scope boxes on SL-core pages say "IB Math AA HL".**
Examples: t2-1:299, t4-1:95, t4-2:95 and t5-1:357 ("not in the IB Math AA syllabus" is fine). An SL student may think SL rules differ.
- **Fix:** "IB Math AA (SL and HL)" on SL pages.

**Accuracy.** I agree with pass2-syllabus that no box labels an examinable *topic* as "not needed". I checked the t1-3:131 identical-objects note against the guide's "not required" list, and it is right. The problems are the placement in N1 and the advice in P5.

---

## Summary

| Area | Major | Minor |
|---|---|---|
| Rendering | R1 (`int`), R2 (backslashes lost in JS strings, now spreading in t3-3); transient breakage warning | R3–R6, glued subscripts on t5-2, empty model answers |
| SL mode | – | AHL-only pages show empty checklist and "No questions … yet"; t3-2 challenge empty; t3-2/t4-2 AHL wording |
| Consistency | C1 ("Topic 5.19", "Topic 3.18" point nowhere) | C2–C8 |
| Pedagogy | P1 (prerequisites, "in order"), P2 (mark codes unexplained) | P3–P5 |
| Scope boxes | N1 (examinable content inside skip-me boxes) | N2, N3 |

**SL-mode leak list (mixed pages):**
- t1-5: 4 decoder rows (known).
- t2-3: 7 decoder rows (known).
- t3-2: decoder row `:80` (known), practice intro text, empty "challenge" quiz (new).
- t4-2: Bayes decoder row `:71` (known), AHL 4.14 wording in scope box `:95` (new).
- t2-1: AHL 2.14 content tagged SL (pass2-syllabus F12).
