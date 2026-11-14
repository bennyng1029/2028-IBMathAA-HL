# Audit 3: random-sample accuracy check (119 questions, 7 per topic)

Method: each stem (and options) was solved independently in python3 (sympy/scipy/numpy) before the stored answer was read; numeric answers were compared to full precision, short answers against every model-answer and markscheme value; every numeric item was run through `S1.math.checkNumeric` with the value a student would type (3 s.f. with trailing zeros kept, or the `answerInput` exact form), plus a few near-miss inputs. Challenge items' first hint was checked for "Decode:".

Script: `sample.py` (output: `sample-out.txt`, one line per id: `id  mine  stored  OK|FIXED|PROBLEM`).

Sample composition: 74 numeric, 31 short, 13 mcq, 1 order.

## Problems found

| id | severity | problem | fix |
|---|---|---|---|
| t4-1-q055 | Major | Answer is a count (n = 11) but spec had `sigfigs: '1-2'`, so the checker accepted "10" (11 to 1 s.f.) as correct. | Removed `sigfigs`; integer must now be typed exactly ("10" now wrong, "11" correct). |
| t4-2-q006 | Minor | Answer is a whole number of attempts (n = 9) but spec had `tolerance: 0.01, sigfigs: '1-3'`, so "8.99" was accepted. | Removed both fields; integer must now be typed exactly. |

No i18n overlay was touched (only format fields changed, not strings).

## Error rates (n = 119)

| severity | count | rate |
|---|---|---|
| Critical (wrong answer/key, unsolvable) | 0 | 0.0% |
| Major (ambiguous / mislabelled / wrong format) | 1 | 0.84% |
| Minor (wording / lax format) | 1 | 0.84% |
| Any | 2 | 1.7% |

## Notes (not counted as errors)

- All 119 stored answers / keys / orders matched the independent solutions; all model-answer and markscheme values checked for the 31 short items were right (e.g. t5-4-q028 solver value 1.2530 confirmed by RK45: 1.25302).
- All exact-form `answerInput`s evaluate to the stored value and return `correct`; alternative exact forms (e.g. `ln8/ln2.5`, `3ln2/(ln5-ln2)`, `sqrt(28)`) are also accepted, decimals return `exact`.
- Every challenge item's first hint starts with "Decode:".
- Paper and syllabus labels were plausible throughout.
- Pool-wide convention: several integer answers carry `tolerance: {abs: 0.01}` (e.g. t1-1-q059), which accepts e.g. 8729.01. This is harmless and was left alone.
