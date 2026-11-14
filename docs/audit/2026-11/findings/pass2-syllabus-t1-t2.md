# Pass 2: syllabus fidelity audit for Topics 1 and 2 (t1-1 to t1-5, t2-1 to t2-3)

This audit was read-only. No repo file was changed.

**Scope.** I read these files:
- `topics/t1-1…t1-5.html` and `topics/t2-1…t2-3.html` (text and `data-level` markup)
- all 141 questions in `data/questions-t1-*.js` and `data/questions-t2-*.js`, by id, level, paper and syllabus tag (dumped with node)
- `docs/research/syllabus-topics-1-2.md`
- the registry in `assets/js/core.js:35-42`
- `README.md:5-6, 29-36`
- every page's "Formula Booklet" and "Not needed for IB" callout

**Earlier findings not repeated.** These are already in `t1-1_to_t1-3.md`, `t1-4_t1-5.md` and `t2-1_to_t2-3.md`, and I do not list them again:
- the inflation formula (t1-1 M2)
- the SL 1.5/1.7 tags on t1-2 q001/q006
- the AHL 1.11 tags on extended-binomial questions
- improper partial fractions presented as required (t1-3 M7)
- the 1.12/1.14 tags on conjugate-root questions
- the "must use Gaussian elimination" wording (5-m6)
- AHL decoder rows not marked `data-level` (t1-5, t2-3)
- the midpoint formula being in the booklet
- the SL 1.7 tags on t2-2 q015/q017
- the 2.15/2.16 tags on t2-3 q016/q018

Where one of these has a root cause in the research doc, I only add the research-doc line.

**Confidence key.**
- **[C]** I am confident of the 2019 AA guide or booklet wording.
- **[U]** I am unsure: verify against the guide or booklet before acting.

---

## 0. Reference: 2019 AA guide content for Topics 1 and 2, as I recall it

### Topic 1: Number and algebra (SL 19 h, HL 39 h) [C]

| Sub-topic | Content | Guidance and limits |
|---|---|---|
| SL 1.1 | Operations with numbers in the form a × 10^k, 1 ≤ a < 10, k ∈ ℤ [C] | Calculator scientific-mode use [U] |
| SL 1.2 | Arithmetic sequences and series. Formulae for u_n and S_n. Sigma notation for arithmetic sums. Applications [C] | Analysis, interpretation and prediction where a model is not perfectly arithmetic in real life [C] |
| SL 1.3 | Geometric sequences and series. Formulae for u_n and S_n. Sigma notation for geometric sums. Applications [C] | |
| SL 1.4 | Financial applications of geometric sequences and series: **compound interest** and **annual depreciation** [C] | Use technology, including built-in financial packages (TVM). Simple interest may be used only as an introduction. **Calculate the real value of an investment with an interest rate and an inflation rate** [C]. Compounding yearly, half-yearly, quarterly or monthly. Questions asking students to derive the formula will not be set [C]. **Annuities and amortisation are not AA content**: they are in AI SL 1.7 [C] |
| SL 1.5 | Laws of exponents with **integer** exponents. Introduction to logarithms with base 10 and e. **Numerical evaluation of logarithms using technology** [C] | a^x = b ⇔ x = log_a b (a, b > 0, a ≠ 1) [C] |
| SL 1.6 | Simple deductive proof, numerical and algebraic. How to lay out a LHS-to-RHS proof. **The symbols and notation for equality and identity** (= and ≡) [C] | |
| SL 1.7 | Laws of exponents with **rational** exponents. Laws of logarithms. Change of base. Solving exponential equations, including using logs [C] | Link to SL 2.9 [C] |
| SL 1.8 | Sum of infinite convergent geometric sequences [C] | \|r\| < 1 |
| SL 1.9 | Binomial theorem: expansion of (a + b)^n, n ∈ ℕ. Pascal's triangle and nCr [C] | Find nCr by both formula and technology [C] |
| AHL 1.10 | Counting principles, including permutations and combinations. **Extension of the binomial theorem to fractional and negative indices (n ∈ ℚ)** [C] | Find nPr and nCr by formula and technology. **Not required: permutations where some objects are identical; circular arrangements** [C/U on exact wording] |
| AHL 1.11 | Partial fractions [C] | **Maximum of two distinct linear terms in the denominator, with degree of numerator less than degree of denominator** [C] |
| AHL 1.12 | Complex numbers: i, i² = −1. Cartesian form a + bi. Real part, imaginary part, conjugate, modulus, argument. The complex plane [C] | Complex roots of quadratics ax² + bx + c = 0 with real coefficients and b² − 4ac < 0 [C] |
| AHL 1.13 | Modulus–argument (polar) form r(cos θ + i sin θ) = r cis θ. Euler form re^{iθ}. **Sums, products and quotients** in Cartesian, polar or Euler forms, **and their geometric interpretation** [C] | |
| AHL 1.14 | Complex conjugate roots of quadratic and polynomial equations with real coefficients. De Moivre's theorem and its extension to rational exponents. Powers and roots of complex numbers [C] | **Proof of De Moivre by induction for n ∈ ℤ⁺** [U, fairly confident]. Use of De Moivre to obtain trig identities (e.g. cos 3θ) [C] |
| AHL 1.15 | Proof by mathematical induction. Proof by contradiction. Use of a counterexample to show that a statement is not always true [C] | Induction contexts: sums, divisibility, De Moivre, derivatives, recurrence [U]. Inequalities: [U] |
| AHL 1.16 | Solutions of systems of linear equations, a maximum of three equations in three unknowns, including unique, infinite and no-solution cases [C] | **Solved using both algebraic and technological methods, e.g. row reduction** [C]. Infinite solutions given in parametric form [U]. Matrices are not in AA [C] |

**Formula booklet, Topic 1** [C unless marked]:
- 1.2: u_n and S_n (both forms)
- 1.3: u_n and S_n
- 1.4: FV = PV(1 + r/(100k))^{kn}
- 1.5: a^x = b ⇔ x = log_a b
- 1.7: the three log laws and change of base
- 1.8: S∞
- 1.9: (a + b)^n and nCr
- 1.10: nPr, and the extended binomial in the form a^n(1 + n(b/a) + n(n−1)/2!·(b/a)² + …). The booklet does not print a (1 + x)^n form with "|x| < 1" [U].
- 1.12: z = a + bi
- 1.13: z = r(cos θ + i sin θ) = re^{iθ} = r cis θ
- 1.14: De Moivre
- Not in the booklet: exponent laws, Pascal's triangle, T_{r+1}, partial-fraction forms, the conjugate-root theorem, n-th root formula.

### Topic 2: Functions (SL 21 h, HL 32 h) [C]

| Sub-topic | Content | Guidance and limits |
|---|---|---|
| SL 2.1 | Forms of the equation of a straight line. Gradient; intercepts. Parallel m₁ = m₂, perpendicular m₁m₂ = −1 [C] | |
| SL 2.2 | Concept of function, domain, range and graph. Function notation. **Function as a mathematical model**. Informal concept of an inverse reversing a function; inverse as reflection in y = x; f⁻¹ notation [C] | |
| SL 2.3 | The graph of a function y = f(x). **Creating a sketch from information given or a context, including transferring a graph from screen to paper. Using technology to graph functions including their sums and differences** [C] | |
| SL 2.4 | Key features of graphs: max/min, intercepts, horizontal and vertical asymptotes, symmetry, vertex, zeros/roots. **Intersection of two curves using technology** [C] | |
| SL 2.5 | Composite functions. Identity function. (f ∘ f⁻¹)(x) = x. Finding f⁻¹(x) [C] | Inverse exists only for one-to-one functions [U]. **Domain restriction is AHL 2.14** [C that it is listed in 2.14] |
| SL 2.6 | Quadratic function: graph, y-intercept, axis of symmetry. Forms a(x − p)(x − q) and a(x − h)² + k [C] | |
| SL 2.7 | Solution of quadratic equations and inequalities. Quadratic formula. Discriminant and nature of roots [C] | |
| SL 2.8 | **Reciprocal function 1/x: its graph and self-inverse nature**. Rational functions (ax + b)/(cx + d) and their graphs; vertical and horizontal asymptotes [C] | |
| SL 2.9 | Exponential functions a^x, e^x; logarithmic functions log_a x, ln x, and their graphs [C] | a^x = e^{x ln a}; log_a a^x = x = a^{log_a x} (booklet 2.9) [C/U] |
| SL 2.10 | Solving equations analytically and graphically; technology for equations with no analytic approach [C] | |
| SL 2.11 | Transformations: translations, reflections in both axes, vertical stretch p f(x), horizontal stretch f(qx) with scale factor 1/q, composite transformations [C] | |
| AHL 2.12 | Polynomial functions, their graphs and equations; zeros, roots and factors. Factor and remainder theorems. Sums and products of roots [C] | Booklet: sum −a_{n−1}/a_n, product (−1)^n a_0/a_n [C] |
| AHL 2.13 | Rational functions (ax + b)/(cx² + dx + e) and (ax² + bx + c)/(dx + e) [C] | Oblique asymptotes |
| AHL 2.14 | Odd and even functions. **Finding f⁻¹(x), including domain restriction. Self-inverse functions** [C] | |
| AHL 2.15 | Solutions of g(x) ≥ f(x), **both graphically and analytically** [C] | Technology for inequalities with no analytic method; analytic for polynomial and rational [U] |
| AHL 2.16 | Graphs of y = \|f(x)\|, y = f(\|x\|), y = 1/f(x), **y = f(ax + b)**, y = [f(x)]². **Solution of modulus equations and inequalities** [C, except f(ax + b) [U, fairly confident]] | |

**Formula booklet, Topic 2** [C unless marked]:
- 2.1: the three line forms and the gradient formula. The parallel/perpendicular relations are not printed [U, fairly confident].
- 2.6: axis of symmetry x = −b/2a
- 2.7: quadratic formula and Δ
- 2.9: a^x = e^{x ln a} and log_a a^x = x = a^{log_a x}
- 2.12: sum and product of roots
- Not in the booklet [U, fairly confident]: (f ∘ g)(x) = f(g(x)) and (f ∘ f⁻¹)(x) = x. Also not printed: remainder/factor theorem and asymptote rules.

---

## 1. Per-subtopic coverage table

**Key**
- Taught: ✔ = taught, ◐ = partial, ✘ = absent.
- Practised: the question ids that practise the item.
- Tag OK?: whether the question syllabus tags are right.

| Sub-topic | Taught (where) | Practised | Gaps / over-reach | Tag OK? |
|---|---|---|---|---|
| SL 1.1 | ✔ t1-1.html:102-120 | q001 | – | ✔ |
| SL 1.2 | ✔ t1-1:126-189 | q002, q003, q007, q008, q014 | "Model not perfectly arithmetic in real life" is not taught or practised (Minor) | ✔ |
| SL 1.3 | ✔ t1-1:198-258 | q009, q010, q015 (finite Σ for geometric sums only implicitly) | Finite geometric sigma notation is not practised (Minor) | ✔ |
| SL 1.4 | ◐ t1-1:271-302 | q005 (compound), q012 (depreciation), q016 (annuity-due) | **Real value with inflation is not practised** (formula already flagged). **Annuities/amortisation presented as SL 1.4 content** (Major, F1). Unverified "retiring 2029" claim (Minor, F2). | ✔ |
| SL 1.5 | ◐ t1-2:90-104 (combined with 1.7) | q001/q006 (but these are 1.7 content) | **Integer-exponent laws are not taught as a separate item. "Numerical evaluation of logs using technology" is absent; there is no GDC log question** (Major, F3) | prior |
| SL 1.6 | ✔ t1-5:95-150 | q001-q004 | "Symbols and notation for equality and identity" is mentioned only once (t1-5:98, as raw "==") and never practised (Minor, F4) | ✔ |
| SL 1.7 | ✔ t1-2:90-148 | q002, q003, q005, q007-q009, q014, q015, q017 | – | ✔ |
| SL 1.8 | ✔ t1-1:198-263 | q004, q006, q011, q013, q017 | – | ✔ |
| SL 1.9 | ✔ t1-2:157-221 | q004, q010-q013, q016 | Booklet callout includes T_{r+1}, which is not printed (Minor, F5) | ✔ |
| AHL 1.10 counting | ✔ t1-3:95-163 | q001, q002, q007-q009, q015, q018 | "Not required" note omits circular arrangements (Minor, F6) | ✔ |
| AHL 1.10 extended binomial | ✔ t1-3:231-288 | q004, q006, q010, q012-q014, q016, q017 | Booklet form misquoted (Minor, F7). Mis-tags already reported | prior |
| AHL 1.11 | ✔ t1-3:172-224 | q003, q005, q011, q012, q013, q017 | Improper fractions already reported | ✔ |
| AHL 1.12 | ◐ t1-4:97-162 | q001, q002, q004 | **Complex roots of real quadratics with Δ < 0 are not taught in 1.12** and appear only inside q018 (Minor, F8) | prior (q008/q014) |
| AHL 1.13 | ✔ t1-4:169-284 (sum = vector addition at :126) | q003, q005, q017 | Geometric meaning of subtraction/sums is only one sentence (OK) | ✔ |
| AHL 1.14 | ◐ t1-4:291-368 | q006, q007, q009-q013, q015, q016, q018 | **No induction proof of De Moivre for n ∈ ℤ⁺** anywhere (t1-4 or t1-5) [U] (Major, F9) | ✔ |
| AHL 1.15 | ✔ t1-5:157-282 | q005-q009, q014-q017 | – | ✔ |
| AHL 1.16 | ◐ t1-5:288-382 | q010-q013, q018 (all Paper 1) | **Technological method (GDC system solver / rref) is not taught or practised, and "RREF" is listed as Not needed** (Major, F10) | ✔ |
| SL 2.1 | ✔ t2-1:100-166 | q001, q002, q014 | – | ✔ |
| SL 2.2 | ✔ t2-1:172-220, 243-256 | q003, q004, q006, q008 | "Function as a model" is not covered (Minor) | ✔ |
| SL 2.3 | ✘ (header only, t2-1:172) | none | **Sketch from context, transfer from screen to paper, sums/differences of functions with technology: absent** (Major, F11) | – |
| SL 2.4 | ◐ t2-1:172-220 (domain/range only); asymptotes/vertex in t2-2; intersections in t2-2 SL 2.10 | q013 | Symmetry/zeros as "key features" are not taught on the page that claims 2.4 (Minor) | ✔ |
| SL 2.5 | ✔ t2-1:225-294 | q005, q007, q009-q011, q015, q017 | **AHL 2.14 items (domain restriction, self-inverse) taught/tagged as SL 2.2/2.5** (Major, F12) | ✘ q012, q016, q018 |
| SL 2.6 | ✔ t2-2:105-146 | q001, q002 | – | ✔ |
| SL 2.7 | ✔ t2-2:105-185 | q003-q005, q009, q013, q016 | Quadratic formula never stated, only in a dfn tooltip; no booklet callout for 2.6/2.7 (Minor, F13) | ✔ (q015 prior) |
| SL 2.8 | ◐ t2-2:191-240 | q006, q007, q012, q018 | **"Reciprocal function 1/x … self-inverse nature" is not taught** (Minor, F14) | ✔ |
| SL 2.9 | ◐ t2-2:246-311 | q008, q010, q014 | a^x = e^{x ln a} and booklet 2.9 identities are absent (Minor, F15) | ✔ (q017 prior) |
| SL 2.10 | ✔ t2-2:286, 315-321 | q011 (key wrong, already reported) | Only one practice item, and its key is wrong | ✔ |
| SL 2.11 | ✔ t2-3:105-208 | q001-q003 | – | ✔ |
| AHL 2.12 | ✔ t2-3:214-277 | q004-q008 | Polynomial graphs/multiplicity (t2-3:221) are not practised (Minor, F16) | ✔ |
| AHL 2.13 | ✔ t2-3:282-363 | q009, q010, q017 | – | ✔ |
| AHL 2.14 | ✔ t2-3:311-316 | q011, q012 (+ t2-1 q016/q018, mis-tagged) | No self-inverse practice on this page (covered only by mis-tagged t2-1 q016) | ✔ |
| AHL 2.15 | ◐ t2-3:368-435 | q015, q018 (all Paper 1) | **Graphical/technology solution of g(x) ≥ f(x) is not practised, and there is no Paper 2 inequality question; polynomial (cubic) inequalities are absent** (Major, F17) | prior |
| AHL 2.16 | ◐ t2-3:368-445 | q013 (\|f\|), q014 (1/f), q016 and q018 (modulus) | **[f(x)]² has no question. y = f(ax + b) is not listed** [U] (Minor, F18) | prior |

**Registry and README ranges** (`core.js:35-42`, `README.md:29-36`, page headers line 23) are all consistent with the page content. All SL/AHL levels in the registry are right: t1-3 and t1-4 are `ahl`; the others are mixed. Only one small inconsistency: the t1-4 header says "· Additional HL" and the t1-3 header does not (`topics/t1-3.html:23`) (Minor).

---

## 2. Findings

No **Critical** items: I found no page telling students that an examinable item is not needed. F10 comes closest.

### Major

**F1. SL 1.4: annuities and loan amortisation are presented as SL 1.4 content.**

Where:
- `topics/t1-1.html:42` "Calculate compound interest, annual depreciation, and regular savings using the formula booklet and GDC Finance Solver."
- `:298` "Finance Solver (for compound interest, regular savings annuities, or loan amortization)"
- `:302` "you do not need to memorize closed-form annuity or mortgage amortization formulas—use either the sum of a geometric series or your GDC Finance Solver"

Problem: AA SL 1.4 is compound interest, depreciation and real value [C]. Annuities and amortisation are AI SL 1.7 [C]. Telling AA students to prepare loan amortisation on TVM is over-reach presented as required. Regular deposits (q016) are fine as a geometric-series application, but they should not be framed as an SL 1.4 TVM topic.

Seeded by: `docs/research/syllabus-topics-1-2.md:52` "Use of GDC TVM / Finance Solver for annuities, regular savings plans, and loan amortization", and `:87`.

Fix:
- Checklist `:42` should read "…compound interest, annual depreciation and real (inflation-adjusted) value…".
- In `:298` drop "regular savings annuities, or loan amortization".
- `:302` should read: "Annuities and loan amortisation are Math AI topics, not AA SL 1.4; regular-deposit problems can still appear as geometric-series applications."

**F2 (moved to Minor, see below).**

**F3. SL 1.5: "numerical evaluation of logarithms using technology" is missing, and integer exponent laws are not taught as an item.**

Where: `topics/t1-2.html:37, 90-104`. The bank has no Paper 2 log evaluation; all 17 t1-2 questions except q013 are Paper 1. The checklist line 37 merges integer and fractional exponents.

Fix:
- Add a GDC item, e.g. "Use technology to evaluate log₇ 50 and ln 0.3 to 3 s.f."
- Add one integer-exponent-laws line under an "SL 1.5" sub-head before the rational exponents of 1.7.

**F9. AHL 1.14: no induction proof of De Moivre's theorem.** [U: I am fairly confident the 1.14 guidance asks for a proof by induction for n ∈ ℤ⁺.]

Where: `topics/t1-4.html:294` asserts the theorem by "repeatedly multiplying". The induction section `topics/t1-5.html:176-181` lists four induction types (series, divisibility, derivatives, inequalities) but not De Moivre. The research doc `:194` and `:240` list it, but it never reached a page.

Fix: add a De Moivre induction worked example or order question to t1-5, or a short proof in t1-4. It needs the compound-angle identities, which are SL 3.6 / AHL 3.10 content.

**F10. AHL 1.16: the technological method is missing and partly ruled out.**

Where:
- `topics/t1-5.html:333` "Not needed for IB Math AA HL: Matrix algebra, 3 × 3 determinants …, Cramer's rule, eigenvalues, and **Gauss-Jordan RREF matrix notation** are not in the IB Math AA HL syllabus"
- `t1-5:40` "Solve up to 3 × 3 systems … by Gaussian elimination"
- all five AHL 1.16 questions (q010-q013, q018) are Paper 1

Problem: the guide says systems are "solved using both algebraic and technological methods, e.g. row reduction" [C]. A Paper 2 student is expected to use the GDC simultaneous-equation solver or rref. Listing RREF as "not needed" points students away from a legitimate method. (The prior report 5-m6 covers only the "must" wording, not this coverage gap.)

Seeded by: research doc `:243` and `:271` ("row reduction is what the IB AA HL markscheme rewards").

Fix:
- Remove "Gauss-Jordan RREF matrix notation" from the Not-needed list.
- Add: "On Paper 2, use your GDC's system solver / rref to solve or check a system. With a parameter, you still need elimination to separate no solution from infinitely many."
- Add one Paper 2 question.

**F11. SL 2.3 is essentially absent.**

Where: `topics/t2-1.html:172` has the section badge "SL 2.2 · SL 2.3 · SL 2.4", but the section (`:174-220`) only covers vertical/horizontal line tests, natural domain and range. Nothing teaches:
- sketching from given information or a context
- transferring a GDC graph to paper (axes, scale, intercepts and asymptotes labelled)
- graphing sums and differences of functions with technology

No question practises any of these.

Fix: add a short SL 2.3 sub-section ("Sketch vs draw; what a sketch must show") and one Paper 2 sketch question. For example, sketch y = eˣ − x² for −2 ≤ x ≤ 3 and label the intercepts and the turning point.

**F12. AHL 2.14 content (domain restriction, self-inverse) is taught and tagged as SL on t2-1.**

These questions have `level: 'sl'`:
- `data/questions-t2-1.js:260` q012, `syllabus: 'SL 2.2'`: "Find the smallest possible value of k such that the inverse function f^{-1} exists."
- `:342` q016, `syllabus: 'SL 2.5'`: "f(x) = (kx + 5)/(2x − 6) … is a self-inverse function … Find k."
- `:386` q018, `syllabus: 'SL 2.5'`: "(a) … find the largest possible value of a such that f^{-1} exists."

Problem:
- In the 2019 guide, "Finding the inverse function f⁻¹(x), including domain restriction. Self-inverse functions" is AHL 2.14 [C].
- The site contradicts itself: t2-3 q012 (`questions-t2-3.js:266`) is the same task type as t2-1 q012, and is tagged `AHL 2.14` with `level: 'ahl'`. t2-3 also teaches both items under AHL 2.14 (`topics/t2-3.html:40, 311-316`).
- In "SL core only" mode, SL students are given these three questions as SL.

Seeded by: research doc `:292` (puts "horizontal line test and domain restrictions to make a function invertible" in SL 2.2) and `:309` (self-inverse listed for t2-1).

Fix: set q012, q016 and q018 to `level: 'ahl'`, `syllabus: 'AHL 2.14'` (q018: 'SL 2.5 / AHL 2.14'). Also check that the page filter applies to question level.

**F17. AHL 2.15: graphical/technology solution of inequalities is not practised.**

Where: `topics/t2-3.html:368-435`. The method text says "On Paper 2, check your intervals against a GDC plot" (`:97`). Every t2-3 question is Paper 1 (q015 and q018 analytic). There is no polynomial inequality beyond quadratics, and none with no analytic approach (e.g. 2ˣ ≥ x + 3 or x³ − 4x > 1).

The guide states "both graphically and analytically" [C].

Fix: add a Paper 2 inequality solved with GDC intersections, and a Paper 1 cubic inequality using factorisation and a sign diagram.

### Minor

**F2. Speculative statements about the next curriculum.**
- `topics/t1-1.html:302` "(it is only retiring in the 2029 syllabus revision)"
- `topics/t1-5.html:245` "(Note: Proof by counterexample remains fully examinable…)"
- Seeded by research doc `:13`, `:15`, `:52`, `:242`: "Topics A–E, first teaching August 2027", and "Financial Mathematics SL 1.4 or Proof by Counterexample AHL 1.15" retiring.

These describe the next guide's content, which I cannot verify [U]. Students do not need them. Fix: keep "examined in May 2028" and delete the claims about 2029.

**F4. SL 1.6: the notation for equality vs identity (= vs ≡) is barely taught.**
- `t1-5:98` "An identity (LHS == RHS)…". The `==` renders raw, as already reported.
- q003's stem uses it, but no item asks students to recognise or use ≡.

Fix: add one sentence, "≡ means 'identically equal for all x'; = in an equation holds only for particular x", and use ≡ in the worked proof.

**F5. A non-booklet formula is shown inside a booklet callout.**

`topics/t1-2.html:161-167`: the callout "Section 1.9 of your Formula Booklet gives…" is followed by `T_{r+1} = nCr a^{n−r} b^r` on the same line as nCr. T_{r+1} is not in the booklet [C]. The research doc (`:122`) correctly lists it as "must memorize", so the page contradicts its own source.

Fix: move T_{r+1} out of the booklet `eq` block, or label it "(not in booklet)".

**F6. AHL 1.10: the "Not needed" note omits circular arrangements.**

`topics/t1-3.html:131` lists identical objects, stars-and-bars and derangements. The guide's "not required" list also names circular arrangements [U on exact wording]. The research doc `:162` goes further and says "Circular arrangements (if tested): (n−1)!", which contradicts the guide.

Fix: add circular arrangements to the page's note, and delete research doc `:162`'s circular line.

**F7. The extended-binomial booklet form is misquoted.**

`topics/t1-3.html:236-240`: "Section 1.10 … gives the extended binomial series for n ∈ ℚ and |x| < 1: (1 + x)^n = 1 + nx + …". The booklet prints (a + b)^n = a^n(1 + n(b/a) + n(n−1)/2!·(b/a)² + …), n ∈ ℚ [C]. I recall no |x| < 1 condition and no (1 + x)^n form there [U]. The research doc `:159` has it right.

Fix: show the booklet's a^n(1 + b/a)^n form in the booklet block, and give (1 + x)^n with |x| < 1 as a derived special case.

**F8. AHL 1.12: complex solutions of real quadratics with Δ < 0 are not taught.**

The intro at t1-4:100 mentions x² + 1 = 0. No worked line solves, e.g., z² − 4z + 13 = 0 with the formula. The only practice is inside q018(a).

Fix: add one line or a Try-it under AHL 1.12.

**F13. SL 2.6/2.7: the booklet formulas are not signposted.**

t2-2 has no booklet callout:
- the quadratic formula is never written, only inside a `dfn` tooltip at :146
- the axis of symmetry and Δ are not marked as booklet formulas

Every other page signposts its booklet section. The quiz hint at `questions-t2-1.js:272` does say x = −b/2a is in the booklet, which is correct.

Fix: add a callout, "Formula Booklet SL 2.6–2.7: x = −b/2a; x = (−b ± √(b² − 4ac))/2a; Δ = b² − 4ac".

**F14. SL 2.8: "the reciprocal function 1/x, its graph and self-inverse nature" is not taught.**

`t2-2:193` mentions 1/x only as the parent hyperbola. Fix: one sentence: "f(x) = 1/x is self-inverse: f(f(x)) = x, and its graph is symmetric in y = x".

**F15. SL 2.9: the booklet identities are absent.**

The page does not give a^x = e^{x ln a} or log_a a^x = x = a^{log_a x}, which are booklet SL 2.9 [C/U]. Also, `topics/t1-2.html:104` tells students to "memorize … a^{log_a x} = x", but it is printed in booklet 2.9. Research doc `:121` has the same error.

Fix: add a 2.9 booklet callout in t2-2, and drop a^{log_a x} = x from the "memorize" list.

**F16. AHL 2.12: polynomial graphs (multiplicity, end behaviour) are taught at t2-3:221 but never practised.**

Fix: add an MCQ asking students to match a sketch to a factored form such as (x + 1)²(x − 3).

**F18. AHL 2.16 is incomplete.**
- No question uses [f(x)]², which is taught at t2-3:399-401.
- y = f(ax + b) is listed in 2.16 [U]. It is not listed on the page or in research doc `:384`, although SL 2.11 covers the skill.

Fix: add a [f(x)]² question (invariant points, roots becoming tangent minima), and mention f(ax + b) in the AHL 2.16 table.

**F19. SL 1.2 / SL 2.2: modelling items are not covered.**
- SL 1.2 "a model that is not perfectly arithmetic in real life" (e.g. judging a near-arithmetic data set)
- SL 2.2 "function as a mathematical model"

Fix: one short context question each.

**F20. Header inconsistency.** `topics/t1-3.html:23` "Topic 1.3 · AHL 1.10–1.11" lacks the "· Additional HL" suffix that t1-4 uses. Cosmetic.

---

## 3. Formula-booklet claims checked

| Page claim | Verdict |
|---|---|
| t1-1:131 "Section 1.2 gives u_n and both S_n" | ✔ [C] |
| t1-1:203 "Sections 1.3 and 1.8" | ✔ [C] |
| t1-1:276 "Section 1.4 gives FV = PV(1 + r/100k)^{kn}" | ✔ [C] |
| t1-2:95 "1.5 and 1.7: a^x = b ⇔ …, three log laws, change of base" | ✔ [C] |
| t1-2:104 "memorize … a^{log_a x} = x" | ✘ It is in booklet SL 2.9 (F15) |
| t1-2:161-167 booklet block includes T_{r+1} | ✘ Not in booklet (F5) |
| t1-3:100 "1.10 gives nPr alongside nCr from 1.9" | ✔ [C] |
| t1-3:236-240 "1.10 gives (1 + x)^n … \|x\| < 1" | ✘ The booklet gives the a^n(1 + n(b/a) + …) form (F7) [U on the \|x\| wording] |
| t1-4:179 "Booklet AHL 1.12–1.13: z = a + bi = r cis θ = re^{iθ}" | ✔ [C] |
| t2-1:115 "gradient formula and three line forms printed; memorize parallel/perpendicular" | ✔ [U, fairly confident]. The midpoint part is already reported. |
| t2-3:225 "Section 2.12: sum −a_{n−1}/a_n, product (−1)^n a_0/a_n" | ✔ [C] |
| t2-2 (no booklet callout for 2.6/2.7/2.9) | Gap (F13, F15) |
| questions-t2-1.js:272 "Use x = −b/(2a) from your Formula Booklet" | ✔ [C] |

## 4. "Not needed for IB" callouts checked

| Callout | Verdict |
|---|---|
| t1-1:263 convergence tests | ✔ |
| t1-2:221 multinomial | ✔ |
| t1-3:131 identical objects, stars-and-bars, derangements | ✔ but incomplete: add circular arrangements (F6) |
| t1-3:191 repeated/quadratic factors | ✔. Improper fractions should also be listed (already reported) |
| t1-4:330 loci, matrix representation, complex logs/trig | ✔ [U on loci, fairly confident] |
| t1-5:333 matrices/determinants/Cramer | ✔. **But "Gauss-Jordan RREF" ✘** (F10) |
| t2-1:299 set-theoretic surjectivity | ✔ |
| t2-2:326 conics, Lambert W | ✔ |
| t2-3:277 Rational Root Theorem proofs | ✔ |
| t2-3:363 cubic/linear asymptotes | ✔ |

No callout labels an examinable item "Not needed", except the RREF wording in F10.

---

## 5. Research doc `docs/research/syllabus-topics-1-2.md`: errors

Items marked "prior" were already in the pass-1 reports. They are included here only so the list is complete.

| Line | Quote / content | Problem | Seeded |
|---|---|---|---|
| 4 | "Version 1.3 AA Formula Booklet" | Version number unverified [U] | – |
| 13, 15 | "Topics A–E, first teaching August 2027"; "Financial Mathematics SL 1.4 or Proof by Counterexample AHL 1.15 … retiring in 2029" | Unverifiable claims about the next guide's content [U]. Remove them. | t1-1:302, t1-5:245 (F2) |
| 28 | AG: "The markscheme awards **zero marks** if the student skips the algebraic bridge…" | Overstated: it is the final A mark that is lost, not "zero marks" | t1-5:115 |
| 52 | SL 1.4 "Use of GDC TVM … for annuities, regular savings plans, and loan amortization" | Annuities/amortisation are AI SL 1.7, not AA [C]. The doc also omits "derivation of formula not required". | t1-1:42, 298, 302 (F1) |
| 105 | "SL 1.5 Laws of exponents with integer **and rational** exponents" | Rational exponents are SL 1.7 (prior). The doc also omits "numerical evaluation of logs using technology" [C]. | t1-2 q001/q006 (prior); F3 |
| 106 | SL 1.7 "real exponents"; puts a^x = b ⇔ x = log_a b in 1.7 | The guide says *rational* exponents. The equivalence is SL 1.5 [C]. | – |
| 121 | "Not in booklet: … a^{log_a x} = x" | It is in booklet SL 2.9 [C/U] | t1-2:104 (F15) |
| 149-152 | 1.10 without the extended binomial; 1.11 = extended binomial + partial fractions | Prior. The extended binomial is 1.10 [C]. | prior |
| 152, 184 | "(or degree of numerator equal to degree of denominator requiring polynomial division…)"; "(plus improper fractions of the form (px² + qx + r)/((ax + b)(cx + d)) = A + …)" | The guide limits 1.11 to "degree of numerator less than the degree of the denominator" [C] | t1-3:39, 178, 183, 197; q011 (prior M7) |
| 162 | "Circular arrangements (if tested): (n−1)!" | Circular arrangements are "not required" [U on wording] | (F6) |
| 192 | Conjugate-root theorem in 1.12 | Prior: it is 1.14 [C] | prior |
| 194 / 240 | De Moivre proof by induction listed | Correct, but it never made it to a page | F9 |
| 238 | SL 1.6 content | Omits "symbols and notation for equality and identity" [C] | F4 |
| 243, 271 | "Gaussian elimination"; "only Gaussian row reduction … is what the IB AA HL markscheme rewards" | The guide says "both algebraic and technological methods, e.g. row reduction" [C]. Any valid method earns credit. | t1-5:333, 40 (F10, prior 5-m6) |
| 266 | "for all k" loses "the final **R1**" | In IB markschemes the wrong hypothesis wording usually costs the M1 for the assumption, not the final R1 [U] | t1-5:72, 173 |
| 292 | SL 2.2 includes "horizontal line test and domain restrictions to make a function invertible" | Domain restriction is AHL 2.14 [C] | t2-1 q012/q016/q018 (F12) |
| 293 | SL 2.3 = "Sketching graphs showing key features" | Omits sketching from context, screen-to-paper transfer, and sums/differences with technology [C] | F11 |
| 302-305 | "Exact IB Formula Booklet Formulas (Section 2.1, 2.5)": (f ∘ g)(x) = f(g(x)), (f ∘ f⁻¹)(x) = x | Not printed in the booklet [U, fairly confident]. Not repeated on the page. | – |
| 309 | Self-inverse functions placed on t2-1 (SL) | Self-inverse functions are AHL 2.14 [C] (the reciprocal 1/x's self-inverse nature is SL 2.8) | t2-1 q016 (F12) |
| 329 | "AHL 2.14 mentions the words one-to-one and many-to-one" | Unverified attribution [U] | – |
| 338 | SL 2.8 "self-inverse condition" for (ax + b)/(cx + d) | The general condition is AHL 2.14. SL 2.8 only has "1/x … self-inverse nature" [C] | – |
| 342 | Booklet list for t2-2 covers only 2.6 and 2.7 | Omits booklet 2.9 (a^x = e^{x ln a}, log_a a^x = x = a^{log_a x}) | F15 |
| 367 | "zero marks on every IB markscheme" | Prior (overclaim) | prior |
| 382 | AHL 2.14 summary | Omits "finding f⁻¹ including domain restriction" and "self-inverse functions" as listed 2.14 items | F12 |
| 383 | AHL 2.15 summary | Omits technology/graphical solution | F17 |
| 384 | AHL 2.16 list | Omits y = f(ax + b) [U] | F18 |

---

## 6. Summary

| | Critical | Major | Minor |
|---|---|---|---|
| New in this pass | 0 | 7 (F1, F3, F9, F10, F11, F12, F17) | 14 (F2, F4-F8, F13-F16, F18-F20) |
| Research-doc errors | | 25 rows in the table above (5 already reported) | |

Biggest problems:
1. **Over-reach:** annuities and loan amortisation on t1-1, which are Math AI content.
2. **Mislabels:** three AHL 2.14 questions labelled SL on t2-1.
3. **Coverage gaps:** SL 2.3, the technology parts of SL 1.5, AHL 1.16 and AHL 2.15, and the De Moivre induction proof.
4. **Wrong "Not needed":** "RREF" is listed as not needed, although the guide asks for technological methods for linear systems.
