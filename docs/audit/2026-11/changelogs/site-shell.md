# Fixes: site shell (README, docs, index/practice, core.js registry/strings, math.js booklet + describeCheck, ui/home/practice overlays)

Sources: audit/site-shell.md (M3–M10, M12, M13, Minor 6–22), audit/i18n.md X-2, audit/pass2-syllabus-t1-t2.md §5, audit/pass2-syllabus-t3-t5.md (research-doc list, README range), audit/pass2-examiner.md (tier/paper description).
Booklet checked against scratchpad/dl/b.pdf (AA formula booklet v1.0, pdftotext -layout).

## Fixed

### site-shell.md Major
- **M3** Topic 4 hours → "27 SL hrs + 6 AHL hrs = 33 HL hrs" — docs/research/syllabus-topics-3-4-5.md:188.
- **M4** Improper partial fractions: AHL 1.11 now says "maximum of two distinct linear terms, numerator degree less than denominator degree; improper fractions not required"; the scope box no longer lists improper fractions as included — docs/research/syllabus-topics-1-2.md (AHL 1.11 bullet ~l.152; scope box ~l.183). Also split the mislabelled "AHL 1.11 extended binomial" into AHL 1.10.
- **M5** AI content in SL 1.4: annuities/amortization/PMT removed (marked "AI, not AA"), "derivation of formula not required" added; decoder rows at ~l.82 and ~l.87 rewritten without PMT/deposits — syllabus-topics-1-2.md:52, 82, 87.
- **M6** Composite/identity moved from "booklet" to "Not in Formula Booklet"; heading now "Section 2.1" — syllabus-topics-1-2.md ~l.297–305. `a = v dv/ds` removed from the booklet block and the l.376 claim replaced by "not in the booklet and could not be confirmed in the AA guide" — syllabus-topics-3-4-5.md:376, 391.
- **M7** `booklet` in assets/js/math.js:29–110 rebuilt line by line from the booklet (added Prior learning, 1.14, 2.9 a^x = e^{x ln a}, 3.5, full 4.13/4.14, 5.5 "where f(x) > 0", 5.17 |x|; removed non-booklet items). Non-booklet items moved to new `memorize` object (math.js:112–123) and exported as `S1.math.memorize` (one added line, math.js:766). Exported key `booklet` kept; field names (title/level/formulas) unchanged. Grep: nothing in the repo reads `S1.math.booklet` (only chem.js's own copy). AHL 1.10 extended binomial line kept with a comment that it is in later booklet versions, not v1.0. AUTHORING.md:14 now names `S1.math.booklet` / `S1.math.memorize`; PLAN.md:43 likewise (also Minor 9).
- **M8** "Topics A–E" and all "retiring in 2029" lists removed; neutral wording ("the 2029 course may change or drop some content; for May 2028 everything in this guide is examinable") — docs/PLAN.md:18–20; syllabus-topics-1-2.md:13–15, 52, 242; syllabus-topics-3-4-5.md:206, 478.
- **M9** index.html:142 scope-box text → "Nothing inside it needs to be learned for your exam. If it ever appears, the question will give it to you or guide you through it." (+ ja/ko/zh home.js).
- **M10** docs/AUTHORING.md:251 Try-it template `data-answer="162"`.
- **M12** index.html:160 IA cells → "30 h (toolkit and exploration, class time) · 20 marks · 20%"; index.html:168 "30 h for the toolkit and the mathematical exploration"; PLAN.md:29. Translations updated.
- **M13** SL 4.11 rewritten to the guide's formal-definition wording (syllabus-topics-3-4-5.md:246); AHL 3.11 now "relationships between trig functions and symmetry properties", inverse trig moved to AHL 3.9 (l.76, l.102).

### site-shell.md Minor
- **6** core.js:1075 help example `6.02e23` → `1.5e-3` (new ui.js key added in all 3 languages; old key kept because quiz.js:19 still has the old string — see Needs shared change).
- **7** math.js:521 describeCheck → "Check your decimal point or the power of 10." (ui.js key + ja/ko/zh updated).
- **8** README.md:65 chem.js described accurately (full older copy of math.js, not loaded; keep in sync or remove). chem.js itself untouched per lead.
- **9** PLAN.md:43 formula-data.js reference → `S1.math.booklet` / `S1.math.memorize` in math.js.
- **10** README.md:60 home description matches index.html.
- **11** Paper 3 tier: data confirm P3 items are all in `challenge` (practice.html was right). README.md:19 and PLAN.md:79 now say Exam style = Paper 1/2, Challenge = synthesis + HL Paper 3 style (also covers pass2-examiner consistency request).
- **12** "17 modules" → "17 topics": index.html:27, practice.html:20 (+ ja/ko/zh home.js, practice.js; ja value for "across all 17 topics" changed モジュール → トピック).
- **13** core.js:52 t5-4 blurb no longer starts with "Slope fields" (ui.js key/translations updated).
- **14** core.js:690 language-select aria-label adds 언어.
- **15** 3-4-5.md:30 pyramid/cone/sphere relabelled booklet SL 3.1; prior-learning list stated.
- **16** 3-4-5.md:24 SL 3.1: angle between two lines or line and plane; two planes = AHL 3.18.
- **17** 3-4-5.md:26 bearings 000°–359°.
- **18** 3-4-5.md:332 SL 5.3 n ∈ ℤ (rational n is SL 5.6).
- **19** 3-4-5.md:518 integrating-factor example now consistent with x y′ + 2y = x³ (x²y = x⁵/5 + C, y = x³/5 + C/x²).
- **20** "BecausePart" spacing (3-4-5.md:537), "Solve" → "Evaluate" (3-4-5.md:116), "cusps" → corners (1-2.md ~l.405), heading "Non-linear (curved) asymptotes from a degree difference ≥ 2" (1-2.md ~l.431).
- **21** TRANSLATING.md:84 拐點 and 轉向點 listed separately with meanings.
- **22** "Version 1.3" claims replaced by "current … formula booklet (first examinations 2021)": README.md:103, AUTHORING.md:14, PLAN.md:19, both research docs l.4 (and 1-2.md:14).
- Also: 3-4-5.md booklet heading for 5.5/5.10 corrected (l.380–381).

### M11 (site numbering vs IB subtopics)
Not renumbered. Added `syl` (IB syllabus range) to every `S1.topics` entry (core.js:35–52) and the index topic cells now show it under the blurb (core.js:803; no CSS change, uses existing `mono small muted`). Codes are untranslated by design. Checked with Playwright: renders in en and ja, no console errors, no horizontal scroll at 390px.

### i18n.md X-2
README.md:21, TRANSLATING.md §2 item 3 (l.60), PLAN.md:10 and :80 now say what stays in English (key terms, exam tips, command terms, quiz markscheme points and model answers) and that worked examples, hints and solutions are translated; TRANSLATING mentions `data-i18n="both"`.

### pass2-syllabus-t1-t2.md §5 (syllabus-topics-1-2.md)
l.4 version; l.13/15 2029 claims; l.28 AG "zero marks" → final mark(s) lost; l.52 annuities + "derivation not required"; l.105/106 SL 1.5 (integer exponents, logs base 10/e, a^x = b ⇔ log, technology) vs SL 1.7 (rational exponents, log laws); l.121 a^{log_a x} = x noted as booklet SL 2.9; l.149–152 1.10/1.11 split; l.152/184 improper PF; l.162 circular arrangements → not required (moved to scope box); l.192 conjugate roots moved 1.12 → 1.14 (1.12 now "complex roots of quadratics"); l.238 SL 1.6 adds = and ≡; l.243/246/271 1.16 now "algebraic and technological methods (row reduction)", "any valid method earns credit"; l.266 "for all k" → cautious "can cost marks (typically the hypothesis mark)" [U]; l.292 domain restriction → AHL 2.14; l.293 SL 2.3 guide content; l.302–305 composite/identity → not in booklet; l.309 self-inverse tagged AHL 2.14; l.314 decoder row tagged AHL 2.14; l.329 attribution to AHL 2.14 removed [U]; l.338 SL 2.8 self-inverse of 1/x only; l.342 booklet 2.9 added; l.367 "zero marks on every markscheme" softened; l.382–384 AHL 2.14 (inverse with domain restriction, self-inverse), 2.15 (technology), 2.16 (f(ax+b), cautious [U]). l.194/240 De Moivre induction already correct (page gap, not doc).

### pass2-syllabus-t3-t5.md research list (syllabus-topics-3-4-5.md)
l.4 version; l.15 t3-1 map adds "+ SL 3.5 ambiguous case"; l.24/25/70 ambiguous case placed in SL 3.5, symmetry identities → AHL 3.11; l.76 AHL 3.11; l.135 angle between lines → 3.14, shortest distances flagged as applications [U]; l.206/478 retiring notes; l.246 SL 4.11; l.330 tangents/normals → SL 5.4; l.335–336 max/min/inflexion moved to SL 5.8; l.376/391 v dv/ds; l.381 heading; l.420 first-principles scope phrased cautiously, induction labelled AHL 1.15 link [U]; l.421 0·∞ / ∞−∞ flagged beyond guide, x → ∞ added [U]; l.423–424 partial fractions moved 5.16 → 5.15, "composites with a linear function" added. README.md:37 t3-1 range adds "(+ SL 3.5 ambiguous case)"; README.md:38 t3-2 AHL 3.11 left as is (t3 fixer adding 3.11).

## Verification
- node --check: assets/js/math.js, assets/js/core.js, i18n/{ja,ko,zh-Hant}/{ui,home,practice}.js — all OK.
- `node tools/i18n-check.js <lang> {ui,home,practice} --no-manifest` for ja, ko, zh-Hant: all "missing 0 stale 0 lint 0".
- Playwright on index.html (en, ja; 1300px and 390px): cells show syllabus ranges, no errors, no horizontal scroll.

## Skipped (why)
- C1–C3, M1, M2, Minor 1–5: already fixed in the checker by the lead.
- Minor 8 chem.js file itself: lead will re-sync from math.js (README description fixed).
- Research-doc items in pass2 lists that are page gaps rather than doc errors (De Moivre induction proof on t1-4, ∫a^x on t5-3, expected occurrences on t4-2, 3.12 vector proofs, 4.1 outliers interpretation, 4.2/4.4 omissions): left; doc text not wrong, or outside the listed fixes.
- index.html static fallback list (`1.1 Sequences…` inside `data-s1-topics`, replaced by JS at load) left unchanged.

## Needs shared change
- **assets/js/quiz.js:19** `STD_FORM_HELP` still says `6.02e23`. Change to `1.5e-3` to match core.js:1075; then the old ui.js key "…standard form (<span class=\"mono\">6.02e23</span>)." in i18n/{ja,ko,zh-Hant}/ui.js becomes stale and should be deleted (the new 1.5e-3 key is already translated).
- **assets/js/chem.js**: re-sync from math.js (booklet, memorize export, describeCheck string).

## Needs topic change
- **topics/t1-1.html:302** "Financial mathematics (SL 1.4) is examined in full in May 2028 (it is only retiring in the 2029 syllabus revision)" — unverified 2029 claim; reword to e.g. "is examined in full in May 2028 (the 2029 course may change it, but that does not affect you)". Same line also mentions annuity/mortgage formulas and the GDC Finance Solver (annuities are AI, not AA); topics/t1-1.html:42 checklist "regular savings … GDC Finance Solver" likewise. Update i18n/*/t1-1.js keys.
- topics/t1-5.html: pass2 t1-t2 F2 cites l.245 for a "retiring" note, but the current file has no "retir"/"2029" text (already fixed by the topic fixer, or the line moved). Nothing to do.
