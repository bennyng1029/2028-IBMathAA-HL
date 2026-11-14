# Pass 2: examiner review of exam authenticity (question banks and worked examples)

**Scope.** I read all 300 items in `data/questions-*.js` (extracted with a node loader) and every worked example and question-decoder row in `topics/*.html`. I checked them against the 2019 AA guide's command terms, paper rules, markscheme conventions and notation list. I did not re-check arithmetic. Findings already in the first-pass reports (`t*-*.md`) are left out, apart from one-line cross-references where a new finding extends one.

Line numbers point to the item's `id:` line (file:line) unless a different line is given.

---

## Distribution (per topic: paper × tier)

The `paper` field uses four formats: `Paper 1 (No GDC)`, `P1`, `Paper 1`, and missing. Here they are normalised. "GDC-real" counts P2 items where a GDC is actually needed (the rest can be done fully by hand).

| Topic | Level | n | P1 | P2 | P2 GDC-real | P3 | no label | Found. | Exam | Chall. |
|---|---|---|---|---|---|---|---|---|---|---|
| t1-1 | SL | 17 | 13 | 4 | 4 | 0 | 0 | 6 | 8 | 3 |
| t1-2 | SL | 17 | 16 | 1 | 0 | 0 | 0 | 6 | 8 | 3 |
| t1-3 | AHL | 18 | 16 | 1 | 0 | 1 | 0 | 6 | 8 | 4 |
| t1-4 | AHL | 18 | 15 | 1 | 1 | 2 | 0 | 4 | 11 | 3 |
| t1-5 | SL+AHL | 18 | 17 | **0** | 0 | 1 (MCQ) | 0 | 5 | 11 | 2 |
| t2-1 | SL | 18 | 17 | 1 | 1 | 0 | 0 | 5 | 10 | 3 |
| t2-2 | SL | 18 | 15 | 3 | 3 | 0 | 0 | 5 | 9 | 4 |
| t2-3 | SL+AHL | 18 | 18 | **0** | 0 | **0** | 0 | 5 | 9 | 4 |
| t3-1 | SL | 18 | (3 in stem) | (1 in stem) | – | 0 | **18** | 6 | 8 | 4 |
| t3-2 | SL+AHL | 17 | (12 in stem) | **0** | 0 | **0** | **17** | 6 | 8 | 3 |
| t3-3 | AHL | 18 | 16 | 1 | 1 | 1 | 0 | 6 | 8 | 4 |
| t4-1 | SL | 18 | 14 | 4 | 1 | 0 | 0 | 5 | 10 | 3 |
| t4-2 | SL+AHL | 18 | 14 | 4 | 4 | **0** | 0 | 5 | 11 | 2 |
| t5-1 | SL | 17 | 16 | 1 | 1 | 0 | 0 | 4 | 9 | 4 |
| t5-2 | SL | 17 | 15 | 2 | 2 | 0 | 0 | 4 | 9 | 4 |
| t5-3 | AHL | 17 | 15 | 1 | 0 | 1 | 0 | 6 | 8 | 3 |
| t5-4 | AHL | 18 | 16 | 1 | 1 | 1 | 0 | 6 | 8 | 4 |
| **Total** | | **300** | **233 (+15 in stem)** | **25 (+1)** | **≈19** | **7** | **35** | 90 | 153 | 57 |

Topics with gaps:
- **No Paper 2 item:** t1-5, t2-3, t3-2. t3-1 has no `paper` field at all; only q008 carries "[Paper 2 — GDC]" in its stem text.
- **Only one P2 item, and it needs no GDC:** t1-2, t1-3, t5-3.
- **HL content but no Paper 3-style item:** t2-3 (AHL 2.12–2.16), t3-2 (AHL 3.9–3.11) and t4-2 (AHL 4.13–4.14). t1-5's only "P3" item is an MCQ.
- **No SL-tagged item is placed on Paper 3.** Good.

---

## Major

### X1. The banks are almost entirely Paper 1. Paper 2 is about 6% of items; the real exam weights it equally with Paper 1.
- 233 items are P1 (248 counting stem labels). 25 are P2, and only about 19 of those actually need a GDC. In HL, Paper 1 and Paper 2 are each 30% of the grade.
- Statistics (t4-1) is the topic most reliant on the GDC, yet it has one item that genuinely needs a GDC (q007 has the exact answer 7; q015 and q016 are hand arithmetic). No item in the bank asks the student to compute r, a regression line, σ or a normal probability from raw data on a GDC.
- Trigonometry (t3-1, t3-2) has no P2 items at all. Sine/cosine rule, bearing and segment questions with 3 s.f. answers are classic P2 material, but they are unlabelled.
- **Fix:** relabel the GDC-dependent t3-1 items as P2 (see X2). Add 3–5 genuine P2 items per SL topic: GDC intersection, regression and r from data, normal/binomial cdf, numerical integration, and table search for n.

### X2. t3-1 and t3-2 have no `paper` field, so 35 items show no paper tag.
- `data/questions-t3-1.js` (all 18) and `data/questions-t3-2.js` (all 17) leave the field out. `quiz.js:95` only shows a tag when `q.paper` is set.
- 15 stems embed "[Paper 1 — No GDC]" in the question text instead. 20 items give no indication either way.
- Some unlabelled items cannot be done without a GDC, so a student might attempt them as non-calculator:
  - t3-1-q011 (`:200`): segment area needs sin 2.1.
  - t3-1-q016 (`:291`): 24π − 18√3 to 3 s.f.
  - t3-1-q010 (`:185`): √379 to 3 s.f.
- **Fix:** add `paper:` to every item, and move the stem prefixes into the field. Use one label format across all 17 files. Today the files mix `Paper 1 (No GDC)`, `P1` and `Paper 1`.

### X3. Items labelled "Paper 3 (Investigation)" are not investigations.
Paper 3 is two extended, scaffolded problems (about 25–30 marks each) that lead from a pattern to a conjecture, a proof and a generalisation. The items below are single-step or unrelated mini-parts:
- `data/questions-t1-3.js:282` (q017): two unrelated parts, a telescoping sum and √0.98 by binomial expansion. **Fix:** make it one thread, e.g. (a) partial fractions of 1/(r(r+1)); (b) compute S₁…S₄ and conjecture Sₙ; (c) prove the conjecture; (d) extend to 1/(r(r+1)(r+2)). Otherwise relabel it P1.
- `data/questions-t1-4.js:328` (q015): "State the exact value of K", 5 marks, a single answer. Relabel P1, or extend it to cosⁿθ in general and an integral application.
- `data/questions-t1-4.js:347` (q016): the stem supplies every step, and the student only has to read off −1/2. Relabel P1 and lower the tier (see X9).
- `data/questions-t1-5.js:347` (q016): an MCQ on a flawed proof, 4 marks. Relabel P1.
- Borderline:
  - `data/questions-t5-3.js:384` (q017): a reduction formula.
  - `data/questions-t5-4.js:406` (q018): an IF plus Maclaurin series.
  - Both are Section-B style rather than investigations. Adding a "conjecture a closed form for Iₙ / for the coefficient of x²ⁿ⁺¹ and prove it" part would make them authentic P3.
- (`t3-3-q018` was flagged in pass 1.)
- No item models P3's length or structure. Suggestion: one genuine 25-mark P3 per HL topic (t1-5, t2-3, t3-3, t4-2, t5-3, t5-4).

### X4. "Exact" answers are accepted as decimals, and P1 items invite 3 s.f. decimals.
- In IB, if "exact" is asked for, a decimal loses the final A1. The checker (`assets/js/chem.js:389`) accepts any decimal within tolerance (default 1%). So these items teach that 4.31 earns the mark when the question says "exact".
- Several are also P1 items that offer "or a 3 s.f. decimal", which cannot be obtained without a calculator. Examples: (2e^π + 1)/5, 2 ln(8/5).
- Affected items:
  - `data/questions-t5-3.js:182` (q008), `:202` (q009), `:250` (q011), `:344` (q015), `:364` (q016)
  - `data/questions-t5-4.js:112` (q005), `:267` (q012), `:339` (q015), `:359` (q016)
  - `data/questions-t4-2.js:324` (q016), `:343` (q017)
  - `data/questions-t3-1.js:107` (q006: "exact length of side c", accepts 7.55)
  - `data/questions-t1-2.js:10` (q001: "exact fraction or decimal", accepts 0.111 for 1/9)
  - `data/questions-t3-2.js:32` (q002: "exact value … as a decimal")
  - `data/questions-t4-1.js:349` (q017: P1, no accuracy instruction in the stem, but `sigfigs: 3` and the key is 0.267 for 4/15)
- (Pass 1 already covers t3-3-q015, t3-2-q015 and t5-1-q012.)
- **Fix:** drop "or a 3 s.f. decimal" from every P1 stem. Set a tight `tolerance` (e.g. `{abs: 1e-6}`) so that only exact expressions, or terminating exact decimals, pass. Add a "Give an exact answer" feedback note when a rounded decimal is typed.

### X5. Exact answers are rejected as "wrong significant figures".
This is the same mechanism as pass-1 t3-2 #2, in new places:
- `data/questions-t5-3.js:68` (q003): the answer is exactly 9/2. Typing `4.5` returns `sigfig` because `sigfigs: 3` is set.
- `data/questions-t5-3.js:270` (q012): the answer is exactly 40. Typing `40` returns `sigfig`, and only `40.0` passes.
- By the IB default rule ("exact or 3 s.f."), both are fully correct.
- **Fix:** delete `sigfigs` on both, or use `'1-3'`.

### X6. Markschemes award an A1 for writing the given (AG) line.
- In IB markschemes, the AG line earns nothing. The last A mark belongs to the step before it.
- These items put "A1: … to obtain the given answer (AG)" on the AG line itself:
  - `data/questions-t2-2.js:277` (q013 a), `:301` (q014 a), `:386` (q018 a)
  - `data/questions-t3-3.js:319` (q014 a: "A1: substitutes … to obtain x + y = 2 (AG)")
  - `data/questions-t5-3.js:318` (q014 a), `:384` (q017 b)
  - `data/questions-t5-4.js:406` (q018 a)
- In a self-marked "short" item, the student ticks that A1 simply for copying the given result.
- **Fix:** move the A1 to the last line before the result (e.g. "A1: k² − 6k − 7 (or (k+1)(k+1−8))"), then write a separate "AG" line with no mark.
- (Pass 1 already covers t3-2, t4-2-q018, t5-1-q016 and the t4-2/t5-1 worked examples.)

### X7. An out-of-syllabus technique is examined on Paper 1: r² = (gradient of y on x) × (coefficient of x on y), and a = r·σ_y/σ_x.
- AA SL 4.4/4.10 only needs r found by technology and the use of the two regression lines. Neither identity is in the guide or the formula booklet.
- Affected:
  - `data/questions-t4-1.js:209` (q010, 4 marks: "Find the exact value of Pearson's r", solution "r² = a · c")
  - `data/questions-t4-1.js:349` (q017, 5 marks, `a = r(σ_y/σ_x)`)
  - `topics/t4-1.html:321-322` (worked example 3(b), 2 marks: "Use a · c = r²")
- A student would revise a method that IB never examines.
- **Fix:** label these "beyond the guide (enrichment)", or replace them, e.g. "the GDC gives r = …; interpret", or "explain why the lines coincide only if |r| = 1".

### X8. Currency to 3 s.f.: the IB-correct 2 d.p. answer is marked wrong.
- `data/questions-t1-1.js:82` (q005): "Calculate the value of her investment … Give your answer to 3 significant figures", `unit: 'USD'`, `sigfigs: 3`.
- IB financial questions ask for the nearest whole unit or 2 d.p. Typing `5991.63` (the solution's own 2 d.p. value) returns `sigfig`.
- **Fix:** "Give your answer correct to the nearest dollar" with `answer: 5992, tolerance: {abs: 1}`. Alternatively ask for 2 d.p. and drop `sigfigs`.

### X9. The command term "state" (and "enter") is used for multi-mark derived work.
- In IB, "state" means a value or statement with no working, usually 1–2 marks. These items attach 4–5 marks to it:
  - `data/questions-t1-4.js:328` (q015): "State the exact value of K", 5 marks. It needs the expansion of (z + z⁻¹)⁴. Change to "Find" (or "Show that … and hence find K").
  - `data/questions-t1-5.js:162` (q007): "State the integer value of A", 4 marks. The working is given in the stem, so this is a 1-mark "write down".
  - `data/questions-t1-5.js:180` (q008): "Enter the integer value of B", 4 marks. Same problem.
- **Fix:** use "Write down" with marks: 1 for q007/q008, or rewrite each as a full induction step worth 4 marks.

### X10. IB command terms are barely used in the banks.
- Across 300 stems:
  - "write down": 0
  - "sketch": 0
  - "verify": 0
  - "deduce": 0
  - "hence or otherwise": 1
  - "determine": 3
  - "justify": 3
  - "explain": 1
  - "find": 172
- Students get no practice in reading the commands that set mark expectations: "write down" means 1 mark and no working; "hence" rules out other methods; "hence or otherwise" allows them.
- The topic decoders (e.g. `topics/t1-5.html:59`, `t2-2.html:89`) explain the terms, but the banks never use them.
- **Fix:** add at least 1–2 "write down", "hence or otherwise" and "justify/verify" items per topic. A "write down" fits as part (a) of existing short items, e.g. t2-2-q014(a) "Write down M₀".

---

## Minor

### m1. Solution mark tags do not add up to the stated marks (numeric/MCQ items; not in pass 1)
| Item | file:line | marks | tags sum |
|---|---|---|---|
| t1-1-q009 | `data/questions-t1-1.js:157` | 5 | 6 (M1 A1 M1 A1 R1 A1) |
| t1-1-q011 | `:183` | 6 | 5 |
| t1-1-q015 | `:247` | 6 | 5 |
| t1-1-q016 | `:260` | 7 | 4 |
| t1-2-q007 | `data/questions-t1-2.js:111` | 5 | 4 |
| t1-2-q009 | `:147` | 6 | 5 |
| t1-2-q013 | `:203` | 5 | 3 |
| t1-2-q015 | `:237` | 6 | 4 |
| t5-2-q017 (markscheme) | `data/questions-t5-2.js:355` | 8 | 7 (also short-item cap: best score 7/8) |

Fix: add the missing marks (e.g. an R1 for rejecting a root, or a final A1), or change `marks`.

### m2. Marks and tier are inflated relative to the work involved
- **t5-1/t5-2 foundation items average 4.3–4.5 marks.** Every other topic averages 2.0–3.2. Examples:
  - t5-1-q001 (`:12`), a power-rule MCQ: 4 marks
  - t5-1-q003 (`:56`), d/dx ln(3x²+5): 4 marks
  - t5-1-q002 (`:39`): 5 marks
  - t5-2-q001 (`:12`): 4 marks
  - t5-2-q003 (`:56`): 4 marks
  - IB would give 2–3 for each.
- **"Challenge" items that are routine:**
  - t1-5-q015 (`data/questions-t1-5.js:329`): substitution into a given formula, 5 marks
  - t1-4-q016 (`data/questions-t1-4.js:347`): every step is given
  - t5-1-q015 (`data/questions-t5-1.js:313`): chain rule from a table, MCQ, 6 marks
  - t1-3-q018 (`data/questions-t1-3.js:299`): 4!·2⁴, MCQ, 6 marks
  - t2-2-q017 (`data/questions-t2-2.js:369`): the same type as t1-2-q008, which is tagged "exam"
  - t2-2-q015 (`:325`)
  - t2-3-q016 (`data/questions-t2-3.js:359`): 3 marks
  - t3-2-q016 (`data/questions-t3-2.js:303`): cos 15°, MCQ, 5 marks
- **Over-marked single step:** t4-2-q012 (`data/questions-t4-2.js:242`): Var(3X − 7), "M1 A2" for one line. IB would give 2 marks.
- Fix: re-tier these as foundation/exam and scale the marks to about one mark per distinct step.

### m3. R marks used for things that are not reasoning
- `data/questions-t1-3.js:222` (q013): "R1: State validity |x| < 1". This is an A1.
- `data/questions-t2-2.js:277` (q013 b): "R1: States the condition Δ > 0". This is an M1.
- `data/questions-t1-5.js:375` (q017): base case marked R1. IB induction schemes give A1 for verifying P(1); R1 is for the final conclusion.

### m4. "Paper 2 (GDC)" items with nothing for the GDC to do
- `data/questions-t1-2.js:203` (q013): "exact value of k", pure algebra.
- `data/questions-t1-3.js:240` (q014): pure algebra.
- `data/questions-t5-3.js:270` (q012): related rates, exact answer 40.
- `data/questions-t4-1.js:146` (q007), `:308` (q015), `:328` (q016): hand arithmetic only.
- This is acceptable (P2 contains such parts), but these items are often a topic's only P2 item (see X1). Relabel them P1, or add GDC-dependent parts.

### m5. Composite-answer artefacts that IB would never ask
- `data/questions-t1-4.js:86` (q004): "Enter the value of x + y"
- `data/questions-t1-5.js:249` (q011): "x + 2y + 3z"
- `data/questions-t1-3.js:186` (q011): "A + B + C"
- `data/questions-t1-4.js:282` (q013): "A + B + C"
- `data/questions-t1-5.js:42` (q002): "A + B"
- `data/questions-t5-1.js:83` (q004): "a + b"
- `data/questions-t2-2.js:325` (q015) and `data/questions-t2-3.js:359` (q016): "sum of all real solutions"
- IB asks for each value, and a correct sum can hide a wrong pair.
- Fix: use a `multi`/`short` format, or ask for one named value and state that the others are found on the way.

### m6. Vector notation in the t3-3 bank
- Stems write `u . v`, `u x v` (the letter x), `AB x AC` and `b_1 x b_2`, all in non-bold type, with vectors as row triples such as `u = (k, 2, -3)`. Examples: `data/questions-t3-3.js:41` (q002), `:87` (q004), `:113` (q005), `:319` (q014), `:411` (q018).
- IB uses bold or arrowed vectors, column vectors, · and ×. The row triples also look the same as points (e.g. A(1, 0, 1)).
- The topic page already uses `<b>u</b>`.
- Fix: write `\mathbf{u} \cdot \mathbf{v}` and `\times` (both supported by `math.js:137`), and use column vectors where possible.

### m7. Other notation
- `data/questions-t1-2.js:186` (q012) writes `6Cr` and `6C3`. The IB forms are ⁶Cᵣ or (6 r).

### m8. MCQ items carry IB-style marks up to 6
- AA papers have no multiple choice. MCQs worth 5–6 marks (t1-3-q018, t5-1-q015 and 12 others) suggest that the answer alone earns those marks.
- Suggestion: show MCQ marks as "(practice: written version worth n marks)", or cap MCQs at 2–3.

### m9. Unsupported "Paper 3 favourite" claims
- `topics/t1-4.html:301` ("Euler bridge identities … (Paper 3 favourite)")
- `topics/t5-4.html:297` ("Implicit differentiation of a differential equation (Paper 3 favourite!)")
- `topics/t3-3.html:49` ("… one of the highest-weighted AHL topics")
- With only a handful of P3 papers set so far, none of these can be substantiated. Fix: "This style suits Paper 3."

### m10. Graphical command terms cannot be practised
- "Sketch", "draw" and "label" items (e.g. |f(x)|, 1/f(x), y = f′(x) from y = f(x)) are core to t2-3 and t5-1. The decoder covers them (`topics/t2-3.html:89`), but the bank has none.
- Suggestion: add `short` items with a sketch-checklist markscheme (A1 shape, A1 intercepts, A1 asymptotes labelled).

---

## Checked and acceptable (no action)
- Every "show that" stem has a given result. I found no "show that" with an answer that is not given, and none that works backwards.
- Every "hence" part genuinely uses the previous part: t1-2-q017, t1-3-q013, t1-4-q017/q018, t2-2-q013/q018, t2-3-q018, t3-3-q014/q018, t4-1-q018, t5-2-q013, t5-3-q014/q017, t5-4-q014.
- No SL-tagged item is on Paper 3.
- No P1 item requires a normal or binomial cdf. t4-2-q008 gives the z-values, which is the correct P1 style.
- Distribution notation is IB-standard: X ~ B(n, p), N(μ, σ²), P(A | B), z*, cis, r e^{iθ}, f^{(n)}, arcsin/arctan and ln are used correctly.
- The worked-example mark tags add up to the stated marks, apart from the two pass-1 cases (t1-4 WE2, t5-1 box WE).
