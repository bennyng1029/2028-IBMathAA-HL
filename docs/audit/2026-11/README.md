# Content audit, November 2026

An audit of the whole site for mathematical accuracy, fit to the IB Mathematics: Analysis and Approaches guide (first assessment 2021, last assessment November 2028), and clear communication. The audit started from commit `4c95162`; the fixes are on branch `claude/practical-clarke-663kgp`.

Two kinds of files sit next to this summary:
- `findings/`: the reviewers' reports. Their file:line references point to the files as they were at `4c95162`, before any fix.
- `changelogs/`: what each fixer changed, finding by finding: fixed, skipped (with the reason), or handed on.

## How the audit was done

| Pass | Angle | Scope | Report |
|---|---|---|---|
| 1 | Maths, syllabus labels, wording | Topics 1.1–1.3, 1.4–1.5, 2.1–2.3, 3.1–3.3, 4.1–4.2, 5.1–5.2, 5.3–5.4 | `findings/t*.md` |
| 1 | Answer checker, formula booklet data, exam facts, docs | `index.html`, `practice.html`, `math.js`, `core.js`, `quiz.js`, README, docs | `findings/site-shell.md` |
| 1 | Translations (zh-Hant, ja, ko) | all overlays, including the Topic 5 overlays added in `4c95162` | `findings/i18n.md` |
| 2 | Syllabus coverage, subtopic by subtopic | SL 1.1 – AHL 2.16 | `findings/pass2-syllabus-t1-t2.md` |
| 2 | Syllabus coverage, subtopic by subtopic | SL 3.1 – AHL 5.19 | `findings/pass2-syllabus-t3-t5.md` |
| 2 | IB examiner view | all question banks, worked examples and decoders | `findings/pass2-examiner.md` |
| 2 | Student view in a real browser, cross-page consistency | every page, English and SL-only mode | `findings/pass2-student.md` |

Every answer key, worked example and Try-it was recomputed with sympy, scipy or numpy rather than read. The site's own answer checker was then run against every numeric item.

## What was wrong, and what was fixed

### Wrong answer keys (all fixed)
- **t1-1 q014:** the expected equation 3n² + 5n − 256 = 0 has no whole-number solution. The question is rebuilt with u₁ = 9, d = 2, giving n = 8.
- **t1-2 Try-it:** the key was 135; the answer is 15 × 81 × 1 = 1215.
- **t2-2 q011:** the key was 2.79; the root of ln(x + 2) = 4 − x is 2.4967, so 2.50. The hint and solution still contained draft notes; both are rewritten.
- **t4-2 q010:** one option showed 0.0799; the correct value is 0.0803.

### Answer checker (all fixed, in `assets/js/math.js`)
- **Exact answers rejected:** a correct exact answer typed with fewer than 3 s.f., such as 0.75, 2, 0 or 4.5, was marked as a significant-figures error.
- **Wrong answers accepted:** an answer one unit off in the 3rd significant figure passed, because the tolerance was checked before rounding. This affected 43 of 139 numeric questions: 0.868 passed for 0.866, and 22/7 passed as exact π.
- **Misread input:**
  - −2² was read as +4;
  - `2e^3` was read as 2 and `3atan(1)` as 3;
  - `1,500` was read as 1.5;
  - `arctan` and `ln2` were rejected.

### Maths shown as raw text (fixed site-wide in the formatter)
About 500 maths spans showed `theta`, `\in \mathbb{Z}^+`, `sqrt(…)`, `3pi`, `S_infty`, `^\circ` or `==` as literal text. Another ~260 showed `int` for ∫. In the question banks, JavaScript had also removed the backslashes, so students read "x in mathbb{R}" and, in one correct answer, "4 mid 2". All of these now render as symbols.

### Syllabus labels and scope (fixed)
- **Wrong subtopic numbers:**
  - ambiguous case is SL 3.5, not 3.2;
  - inverse trig is AHL 3.9, not 3.11;
  - conjugate roots are AHL 1.14;
  - the extended binomial is AHL 1.10;
  - rational exponents are SL 1.7;
  - rational powers in differentiation are SL 5.6;
  - classifying stationary points and inflexion is SL 5.8;
  - standard integrals are SL 5.10 and areas SL 5.11;
  - partial fractions in integration are AHL 5.15;
  - domain restriction and self-inverse functions are AHL 2.14.
- **HL content showing in "SL core only" mode:** decoder rows on 1.5, 2.3, 3.2 and 4.2 were not marked as HL.
- **Content outside AA presented as AA content:**
  - annuities and loan amortisation (Math AI);
  - slope fields (Math AI HL);
  - r² = a·c and a = rσy/σx;
  - improper partial fractions.

  These are now labelled as beyond the AA guide.
- **Examinable content in "Not needed for IB" boxes:**
  - row reduction or GDC solving of systems (AHL 1.16);
  - "never square the difference" for washers;
  - financial applications.

  These have moved out of the boxes. The home page no longer says scoped content "will never be tested".

### Coverage gaps closed (new teaching text and questions, translated)
- **Topic 1:**
  - SL 1.4: real value with inflation;
  - SL 1.5: evaluating logs with technology;
  - AHL 1.12: complex roots of quadratics;
  - AHL 1.14: De Moivre's theorem proved by induction;
  - AHL 1.16: a GDC system question.
- **Topic 2:**
  - SL 2.3: sketching graphs with a GDC;
  - AHL 2.12: matching polynomial graphs;
  - AHL 2.15: a GDC cubic inequality;
  - AHL 2.16: the graph of [f(x)]².
- **Topic 3:**
  - SL 3.7: the graph of tan x;
  - AHL 3.11: symmetry of trig graphs (previously untaught);
  - AHL 3.12: a vector proof;
  - AHL 3.9: graphs of the inverse trig functions.
- **Topic 4:**
  - SL 4.2: comparing box plots;
  - SL 4.4: regression from raw data and interpreting a and b;
  - SL 4.5: expected number of occurrences.
- **Topic 5:**
  - SL 5.1: rate of change as a limit;
  - AHL 5.12: continuity and differentiability;
  - AHL 5.13: limits at infinity;
  - AHL 5.15: ∫aˣ dx and arctan;
  - AHL 5.17: area against the y-axis and volume about the y-axis;
  - AHL 5.19: the (1 + x)^p series.

The banks grew from 300 to 321 questions.

### Communication (fixed)
- **Feedback notes:** about 15 explained a different wrong answer from the one they were attached to.
- **Answer giveaways:** about 20 "type it like this" examples were the answer itself.
- **Mark schemes:**
  - mark totals did not match the stated marks;
  - self-marked questions could not reach full marks, because one line was worth two marks;
  - A1 was awarded for copying a given ("show that") result instead of AG.
- **Questions:**
  - ordering questions had more than one valid order;
  - some model answers were empty;
  - "State" was used for multi-step derivations;
  - one currency answer asked for 3 s.f. instead of 2 d.p.
- **Widgets:**
  - the f/f′/f″ widget labelled points near a stationary inflexion as a maximum or minimum;
  - the regression widget's lines did not match its points;
  - the roots-polygon showed wrong angle labels such as 17π/60 for 2π/7;
  - the Euler readout showed the wrong x;
  - the ln(1 + x) validity interval was wrong.
- **Paper labels:** missing on all 35 Topic 3.1–3.2 questions, and written in three different styles across the banks. Now there is one style.
- **Mark codes:** M1/A1/R1/AG are now explained on the home page.
- **Formula booklet metadata:** rebuilt against the booklet. Formulas that are not in the booklet are now in a separate list.
- **Docs:** research notes that had seeded several of the wrong labels are corrected. Unverified claims about the 2029 course and the booklet version are now worded cautiously.

### Translations
The project's own check (`tools/i18n-check.js`) reports 100% translated, nothing stale and no lint errors for zh-Hant, ja and ko on every page. Every English string changed in this work was re-translated. An automated comparison of the numbers, symbols and tags in all 16,162 English–translation pairs found no translation that changes the mathematics.

## Checks run on the final branch
- **Answer checker:** 45 edge-case tests pass. Every numeric question and Try-it accepts its own key, typed exactly or correctly rounded. The only rejections are deliberate: rounded decimals on Paper 1 exact-answer items.
- **Translations:** `i18n-check` is clean in all three languages.
- **Page loads:** all 19 pages load headlessly with no console errors and no sideways scrolling at 390 px width. Every widget renders, and sweeping their sliders throws no errors.

## Still open (recommendations, not changed in this work)
1. **Paper balance.** 284 questions are Paper 1 (no calculator), 35 Paper 2 and 2 Paper 3. HL Papers 1 and 2 carry equal weight, so the banks under-train GDC work. Paper 3 also needs at least one realistic multi-part investigation per HL topic.
2. **IB command terms.** "Write down", "sketch", "hence or otherwise", "verify" and "deduce" almost never appear. Rewording stems to use them would better match the exam.
3. **Question formats.** Multiple-choice items carry up to 6 marks, although AA papers have no multiple choice. Several items ask for a combined value such as "x + y" or "sum of the solutions" instead of each answer.
4. **"SL core only" mode on HL-only pages** (1.3, 1.4, 3.3, 5.3, 5.4). The page still shows, with an empty checklist ("0 of 5 ticked") and quizzes saying "No questions … yet". An "HL only" notice would help; this needs a change in `core.js`.
5. **Links between topics.** For example, 1.4 needs radians and compound angles, 4.2 needs integration, and 2.3 uses f′(x) = 0. There is almost no cross-linking.
6. **Answer checker:**
   - a decimal-places setting would suit currency answers better than `sigfigs: 6`;
   - the help line under every numeric box mentions "3 s.f. decimal", even on exact-answer items.
7. **Smaller coverage gaps:**
   - modal class;
   - two-way tables;
   - fair games;
   - the P(A|B) = P(A|B′) test;
   - variance from a table;
   - angle between two lines;
   - a ½ab sin C question;
   - the vector form of a plane.
8. **Spelling.** British and American spellings are mixed (centre/center, factorise/factorize).
9. **To confirm against the official guide.** The reviewers could not open the IB's own PDF. They worked from their knowledge of the guide and from a mirrored copy of the formula booklet (v1.0; a v1.3 copy also exists on mirrors). Please confirm:
   - the AHL 1.11 partial-fraction limits (proper fractions, at most two distinct linear factors);
   - that AHL 1.14 asks for the induction proof of De Moivre's theorem;
   - the AHL 5.12 first-principles scope;
   - whether a = v dv/ds is in AA;
   - the current booklet version number.
