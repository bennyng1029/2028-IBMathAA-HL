# Question bank expansion, November 2026

The question banks were expanded from 321 to **1010 original questions**, weighted towards exam-style and Paper 2 (GDC) work. There are many more challenge questions, and each one trains *decoding*: working out what an unfamiliar, wordy question is really asking.

The questions are modelled on the **structure** of IB AA papers: Section A and B formats, mark allocations, command terms and typical contexts. None reproduces or paraphrases a real past-paper question; see "Originality" in `docs/AUTHORING.md`.

## The pool now

| | Before | After |
|---|---|---|
| Questions | 321 | **1010** (59–60 per topic) |
| Paper 1 (No GDC) | 284 (88%) | 546 (54%) |
| Paper 2 (GDC) | 35 (11%) | **432 (43%)** |
| Paper 3 (HL Investigation) | 2 | 32 (AHL topics only) |
| Foundation / Exam / Challenge | 96 / 174 / 51 | 151 / 543 / **316** |
| Auto-marked numeric | — | 581 |

Every challenge question opens with a `Decode:` hint that restates, in plain words, what is being asked. Its solution names the decoding step before the maths.

## How accuracy was checked

1. **Writer:** each topic's writer recomputed every new answer independently of their own solution, using sympy, scipy and numpy (`writer-notes/`).
2. **Independent auditor:** a separate agent for each topic recomputed **every** question in the bank, old and new, from the stem alone, before reading the stored solution. It also checked:
   - every MCQ distractor;
   - every value in each markscheme;
   - paper, level and syllabus labels;
   - answer formats;
   - originality.

   It then fixed what it found (`topic-audits/`).
3. **Random sample:** a third agent re-solved a stratified random sample of 119 questions, 7 per topic (`sample-audit.md`).

### Results

- **Wrong answer keys:** none in any audit or in the random sample.
- **Problems fixed by the topic auditors:** about 110. The commonest kinds were:
  - **Wrong worked values:** an intermediate number in the working was wrong, though the key was right. Examples: arcsin(3/√29) = 0.59087, not 0.59128; tan 0.78 = 0.98926; one markscheme angle should be 119.4°.
  - **Wrong claims in stems:** for example "meet at three points" where the curves meet at five.
  - **Out-of-scope content:** a 3×3 system in an SL fit, and r² = a·c regression shortcuts.
  - **Accuracy rules:** stems that didn't say which value to carry forward.
  - **Feedback:** notes that didn't match their option.
  - **Markschemes:** marks given for an AG line, and A marks without their M mark.
  - **Labels and hints:** tier and syllabus labels, and older challenge items missing a Decode hint.
- **Random sample (119 questions):** 0 Critical, 1 Major and 1 Minor problem, both fixed. Both were whole-number answers whose checker settings accepted a near-miss.
- **Checker bugs found along the way, both fixed in `assets/js/math.js`:**
  - "120" for 120.4 was flagged as a significant-figures error.
  - A whole-number answer with no tolerance accepted anything within 1%, so 26.9 passed for 27.

## Other changes in this round

- **Answer checker:** `exact: true` mode (a close decimal gets "right value, give it exactly") and `dp` mode (money to 2 d.p.).
- **HL-only pages:** in "SL core only" mode they now explain why the checklist and questions are hidden, with a "Show HL content" button.
- **Older items:**
  - MCQs are capped at 2 marks.
  - "Combined answer" items (x + y, sum of solutions) now ask for one value.
  - Exact-answer items use `exact: true`; money items use `dp: 2`.
  - Command terms are corrected.
- **Topic pages:** each page gains foundation, exam and challenge practice blocks, so the new questions are reachable, plus prerequisite links to the topics it relies on.
- **Translations:** all 1010 questions are translated into Traditional Chinese (Hong Kong terms), Japanese and Korean.
  - `tools/i18n-check.js` reports 100% translated, nothing stale and no lint errors.
  - A maths-preservation check over all 34,570 English–translation pairs found no changed numbers, signs, maths spans or tags.
- **Phone layout:** widget labels now wrap on phones. Long Japanese labels had made the 5.3 and 5.4 pages scroll sideways, and that was already happening before this round.

## Still worth doing

- A teacher's read of a sample of the new Paper 3 investigations, for pacing and difficulty.
- Spelling consistency (centre/center, factorise/factorize), which is still mixed.
- The topics' worked examples are unchanged; some pages could gain a Paper 2 worked example to match the new emphasis.
