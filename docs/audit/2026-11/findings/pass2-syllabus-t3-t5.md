# Pass 2: syllabus fidelity audit, Topics 3, 4 and 5 (AA HL, 2019 guide)

**Scope.** I read these files:
- `topics/t3-1…t5-4.html`: checklists, decoders, section tags, booklet callouts and scope callouts. Body text was read where it bears on coverage.
- `data/questions-t[345]-*.js`: every stem and syllabus tag. I dumped them with node.
- the topic registry in `assets/js/core.js:43-51` and `README.md:7-9,37-45`
- `docs/research/syllabus-topics-3-4-5.md` (all of it)

**Not repeated here.** Findings already in the first-pass reports (`t3-1_to_t3-3.md`, `t4-1_t4-2.md`, `t5-1_t5-2.md`, `t5-3_t5-4.md`) are left out. These include:
- the ambiguous case belongs to SL 3.5 (t3-1 WE2, q012)
- inverse trig belongs to AHL 3.9
- the Bayes decoder row is missing its AHL marking
- the t5-1 tags q001, q007, q009, q013 and q017
- the t5-2 booklet label "SL 5.5" and the tags q001, q004, q005 and q015
- partial fractions belongs to AHL 5.15 (on the page and in q011)
- ∫tan x is not in the booklet
- the checklist wording for 5.15 integrals
- the "such as …" giveaways in t5-3/t5-4
- the Prior-Learning booklet location and the 000°–360° bearings

Where one of those has the same root cause in the research doc, I mention it in one line only.

**Confidence notation.** **[C]** means I am confident of the 2019 AA guide wording. **[U]** means I am unsure: verify against the guide before acting.

---

## A. Reference: 2019 AA guide content, from recollection

### Topic 3: Geometry and trigonometry
| Sub | Content (with key clarifications) | Conf. |
|---|---|---|
| SL 3.1 | Distance between two points in 3D, and their midpoint. Volume and surface area of 3D solids: right pyramid, right cone, sphere, hemisphere and combinations. Size of the angle between two intersecting lines, or between a line and a plane. | C |
| SL 3.2 | Right-angled trig (sin, cos, tan). Sine rule, cosine rule, area ½ab sin C. | C |
| SL 3.3 | Applications of right-angled and non-right-angled trig, including Pythagoras. Angles of elevation and depression. Construction of labelled diagrams from written statements. Bearings are examined in practice (I am not sure the word appears in the AA content/guidance). | C / bearings U |
| SL 3.4 | The circle: radian measure, arc length, sector area. | C |
| SL 3.5 | Unit-circle definitions of cos θ and sin θ. tan θ = sin θ/cos θ. Exact values at 0, π/6, π/4, π/3, π/2 and their multiples. **Extension of the sine rule to the ambiguous case.** | C |
| SL 3.6 | cos²θ + sin²θ = 1. Double-angle identities for sin and cos. Relationships between trig ratios (e.g. given sin θ, find tan θ without finding θ). | C |
| SL 3.7 | The circular functions sin x, cos x, **tan x**: amplitude, periodic nature and their graphs. Composite functions f(x) = a sin(b(x + c)) + d. Transformations. Real-life contexts. | C |
| SL 3.8 | Solving trig equations in a finite interval, graphically and analytically. Equations leading to quadratics in sin x, cos x or tan x. (General solutions not required.) | C |
| AHL 3.9 | Reciprocal ratios sec, cosec, cot. Pythagorean identities 1 + tan² = sec² and 1 + cot² = cosec². Inverse functions arcsin, arccos, arctan: their domains, ranges and **graphs**. | C |
| AHL 3.10 | Compound-angle identities. Double-angle identity for tan. | C |
| AHL 3.11 | **Relationships between trigonometric functions and the symmetry properties of their graphs** (e.g. sin(π − θ) = sin θ, cos(−θ) = cos θ, sin(π/2 − θ) = cos θ). | C |
| AHL 3.12 | Vectors: position and displacement vectors, directed line segments, base vectors i, j, k, components. Algebraic and geometric approaches to sum/difference, zero vector, scalar multiple, magnitude and unit vector. Rescaled vectors (velocity). **Proofs of geometrical properties using vectors.** | C |
| AHL 3.13 | Scalar product. Angle between two vectors. Perpendicular and parallel vectors. | C |
| AHL 3.14 | Vector equation of a line in 2D and 3D, r = a + λb, plus the parametric and Cartesian forms. **The angle between two lines.** Simple kinematics with constant velocity. | C |
| AHL 3.15 | Coincident, parallel, intersecting and skew lines. Points of intersection. (Shortest distances are not named in the content, but are routinely examined as applications.) | C / distances U |
| AHL 3.16 | Vector product, its properties, and the geometric interpretation of \|v × w\| (area of parallelogram/triangle). | C |
| AHL 3.17 | Vector equations of a plane: r = a + λb + μc and r·n = a·n. Cartesian form ax + by + cz = d. | C |
| AHL 3.18 | Intersections of a line with a plane, two planes, and three planes. Angle between a line and a plane, and between two planes. | C |

### Topic 4: Statistics and probability
| Sub | Content | Conf. |
|---|---|---|
| SL 4.1 | Population, sample, random sample, discrete and continuous data. Reliability of data sources and bias in sampling. **Interpretation of outliers.** Sampling techniques (simple random, convenience, systematic, quota, stratified) and their effectiveness. | C |
| SL 4.2 | Presentation of data: frequency tables, **histograms** (equal class intervals), cumulative frequency graphs (median, quartiles, percentiles, range, IQR), box-and-whisker diagrams, outlier = more than 1.5 × IQR from the nearest quartile, **using box plots to compare distributions**. | C |
| SL 4.3 | Mean, median, mode. Estimate of the mean from grouped data. Modal class. IQR, standard deviation, variance (σ, by technology). Effect of constant changes. Quartiles of discrete data. | C |
| SL 4.4 | Pearson's r (by technology). Scatter diagrams. **Lines of best fit by eye through the mean point.** Regression line of y on x. Use for prediction (interpolation/extrapolation). **Interpret the meaning of the parameters a and b of y = ax + b.** | C |
| SL 4.5 | Trial, outcome, equally likely outcomes, relative frequency, sample space, event. P(A) = n(A)/n(U). Complementary events. **Expected number of occurrences.** | C |
| SL 4.6 | Venn diagrams, tree diagrams, sample-space diagrams and tables of outcomes. Combined events. Mutually exclusive events. Conditional probability. Independent events. | C |
| SL 4.7 | Discrete random variables and their distributions. E(X) and its applications. Fair games (E = 0). | C |
| SL 4.8 | Binomial distribution, its mean and variance (probabilities by technology in the guidance; the P(X = r) formula is not in the booklet). | C / technology note U |
| SL 4.9 | Normal distribution and curve, its properties, diagrams, normal probability calculations, inverse normal (μ and σ known). | C |
| SL 4.10 | Regression line of x on y, used only to predict x from y. | C |
| SL 4.11 | **Formal definition and use of the formulae** P(A\|B) = P(A ∩ B)/P(B), and **P(A\|B) = P(A) = P(A\|B′) for independent events.** | C |
| SL 4.12 | Standardisation (z). Inverse normal with unknown μ and/or σ. | C |
| AHL 4.13 | Bayes' theorem for a maximum of three events. | C |
| AHL 4.14 | Variance of a discrete RV. Continuous RVs and PDFs. Mode and median of continuous RVs. Mean, variance and SD of discrete and continuous RVs. Effect of linear transformations of X: E(aX + b), Var(aX + b). | C |

### Topic 5: Calculus
| Sub | Content | Conf. |
|---|---|---|
| SL 5.1 | Introduction to the concept of a limit. Derivative as gradient function and as rate of change. | C |
| SL 5.2 | Increasing/decreasing functions; f′ > 0, = 0, < 0. | C |
| SL 5.3 | Derivative of axⁿ for **n ∈ ℤ**, and sums of such terms. | C |
| SL 5.4 | Tangents and normals at a given point, and their equations. | C |
| SL 5.5 | Anti-differentiation of axⁿ + … for n ∈ ℤ, n ≠ −1. Definite integrals **using technology**. Area between the curve and the x-axis where f > 0. Boundary condition to find C. | C |
| SL 5.6 | Derivatives of xⁿ (n ∈ ℚ), sin, cos, eˣ, ln x. Sums and multiples. Chain, product and quotient rules. | C |
| SL 5.7 | The second derivative. Graphical behaviour of f, f′ and f″. | C |
| SL 5.8 | Local max/min points. Testing for max/min. Optimisation. Points of inflexion with zero and non-zero gradients. | C |
| SL 5.9 | Kinematics: s, v, a, and total distance travelled. | C |
| SL 5.10 | Indefinite integrals of xⁿ (n ∈ ℚ), sin, cos, 1/x, eˣ, and composites with ax + b. Inspection/substitution for ∫k g′(x) f(g(x)) dx. | C |
| SL 5.11 | Definite integrals done analytically. Area with f positive or negative, without technology. Area between curves. | C |
| AHL 5.12 | Informal continuity and differentiability at a point. **Limits (convergence and divergence).** First principles (guidance may restrict this to polynomials). Higher derivatives. | C; "polynomials only" U |
| AHL 5.13 | lim f(x)/g(x) as x → a **and as x → ∞**, by l'Hôpital or Maclaurin series. Repeated l'Hôpital. | C |
| AHL 5.14 | Implicit differentiation. Related rates. Optimisation. | C |
| AHL 5.15 | Derivatives of tan, sec, cosec, cot, aˣ, logₐx, arcsin, arccos, arctan. Indefinite integrals of their derivatives, and composites with linear functions. **Partial fractions to rearrange the integrand.** Booklet: ∫aˣ dx, ∫1/(a² + x²), ∫1/√(a² − x²). | C |
| AHL 5.16 | Substitution, parts, repeated parts. | C |
| AHL 5.17 | Area between a curve and the y-axis. Volumes of revolution about the x-axis or the y-axis. | C |
| AHL 5.18 | First-order DEs: Euler's method; separable; homogeneous via y = vx; integrating factor for y′ + P(x)y = Q(x). (I do not recall slope fields in the AA statement; they appear in AI HL.) | C; slope fields U |
| AHL 5.19 | Maclaurin series for eˣ, sin x, cos x, ln(1 + x), (1 + x)^p (p ∈ ℚ). Substitution, products, integration and differentiation. Maclaurin series from DEs. (The booklet also prints arctan x.) | C |

Two cross-topic limits matter below. Both are **[U]**:
- AHL 1.11 partial fractions: at most two distinct linear factors in the denominator, with the numerator's degree less than the denominator's.
- AHL 1.10 extended binomial: fractional and negative indices.

---

## B. Per-subtopic coverage table

Key: ✔ means taught and practised. ◐ means taught but not practised in the bank (or practised only in a Try-it). ✘ means not taught.

| Sub | Taught (where) | Practised (bank) | Status / gap |
|---|---|---|---|
| SL 3.1 | t3-1 §SL 3.1 (l.99-197) | q001, q002, q003, q013, q017 | ✔ The angle between **two intersecting lines** in a solid is not explicitly taught or practised (Minor). The extra "(between two planes)" was reported in pass 1. |
| SL 3.2 | t3-1 l.200-269 | q006, q007, q010 (cos rule) | ◐ ½ab sin C appears only in a Try-it (l.259-260). No bank question (Minor). |
| SL 3.3 | t3-1 l.250-253 | q009, q010, q018 | ✔ |
| SL 3.4 | t3-1 l.271-335 | q004, q005, q011, q014, q016 | ✔ |
| SL 3.5 | unit circle: t3-2 l.92-198. Ambiguous case: t3-1 l.211-247 | q001 (t3-2). q008, q012, q015 (t3-1) | ✔ coverage. Tags: see C1. |
| SL 3.6 | t3-2 l.97-101, WE1 | q002, q014 | ✔ |
| SL 3.7 | t3-2 l.203-219 | q003, q007, q009 | ◐ **The graph of tan x (period π, asymptotes) is never taught.** Only sinusoids appear in the text and widget (Major gap, G1). |
| SL 3.8 | t3-2 WE2, decoder l.66-78 | q004, q008, q013 | ✔ |
| AHL 3.9 | t3-2 l.261-357 | q005, q006, q011, q012 | ◐ The checklist (l.43) promises "sketch their graphs", but **no graph of arcsin/arccos/arctan** appears on the page or in a widget (Minor, G2). |
| AHL 3.10 | t3-2 l.268-270, WE3 | q010, q015, q016, q017 | ✔ |
| AHL 3.11 | **nowhere.** The label is used for inverse trig instead. | none | ✘ **Symmetry properties of trig graphs are not covered** (Major, G3). |
| AHL 3.12 | t3-3 l.94-108 | q001 | ◐ **Proofs of geometric properties using vectors** are not taught or practised. Collinearity/parallel tests are only implicit (Major, G4). |
| AHL 3.13 | t3-3 l.99-140 | q002, q004, q008 | ✔ |
| AHL 3.14 | t3-3 l.147-162 | q003, q009 | ◐ **The angle between two lines** appears only as a decoder bullet (l.84). No worked example or question (Minor, G5). |
| AHL 3.15 | t3-3 l.164-200 | q007, q010, q018 | ✔ |
| AHL 3.16 | t3-3 l.210-224 | q004, q005, q014 | ✔ |
| AHL 3.17 | t3-3 l.218 (one line) | q006, q014 | ◐ **Vector parametric form r = a + λb + μc** is stated but never converted or practised (Minor, G6). |
| AHL 3.18 | t3-3 l.227-270 | q011, q012, q013, q015, q016, q017 | ✔ |
| SL 4.1 | t4-1 l.100-140 | q001, q002 | ◐ **Interpretation of outliers** (error vs genuine value, whether to exclude) and reliability of data sources are thin (Minor). |
| SL 4.2 | t4-1 l.145-205, widget | q003, q004, q015, q018 | ◐ **Histograms**: one sentence (l.146), no question. No question reads an actual cumulative-frequency graph. **Comparing two distributions with box plots** is not covered (Major, G7). |
| SL 4.3 | t4-1 l.209-272 | q005, q006, q007, q013, q014, q018 | ✔ Modal class is not mentioned (Minor). |
| SL 4.4 | t4-1 l.276-345 | q008, q009, q010, q011, q012, q016, q017 | ◐ **Not covered:** scatter diagrams and line of best fit by eye through the mean point; **interpreting a and b in context**; computing r and y = ax + b from raw data on a GDC (every question supplies summary lines). (Major, G8.) See also O3. |
| SL 4.5 | t4-2 §"SL 4.5, 4.6, 4.11" (l.100) | none tagged | ◐ **Expected number of occurrences (n·P(A))**, relative frequency and sample space are not taught. No 4.5 question (Major, G9). |
| SL 4.6 | t4-2 l.101-140 | q001, q002, q009 | ✔ No two-way-table or sample-space-diagram question (Minor). |
| SL 4.7 | t4-2 l.155-166 | q003 | ◐ Fair game is taught (l.37, l.164) but never practised (Minor). |
| SL 4.8 | t4-2 l.168-225 | q004, q005, q006, q010, q011 | ✔ |
| SL 4.9 | t4-2 l.227-247 | q007, q011 | ✔ |
| SL 4.10 | t4-1 l.286-345 | q008, q009, q016, q017 | ✔ |
| SL 4.11 | t4-2 l.62, l.115-138 | q011(b), q018(b) | ◐ The test P(A\|B) = P(A) = P(A\|B′) for independence is stated in the decoder only (l.62). It is not practised (Minor). |
| SL 4.12 | t4-2 l.249-283 | q008 | ✔ |
| AHL 4.13 | t4-2 l.286-300 | q014 | ✔ |
| AHL 4.14 | t4-2 l.302-357 | q012, q013, q015, q016, q017, q018 | ✔ Discrete variance is never computed from a probability table (q013 gives E(X²)). E(aX + b) is never practised (Minor). |
| SL 5.1 | t5-1 l.96-100 | none tagged | ◐ The limit concept and rate-of-change interpretation are not practised (Minor, G10). |
| SL 5.2 | t5-1 l.223 ff. | q007 | ✔ |
| SL 5.3 | t5-1 l.101-115 | (q001 is really 5.6) | ✔ |
| SL 5.4 | t5-1 l.124-135 | q002, q006, q014 | ✔ |
| SL 5.5 | t5-2 l.89-200 | q002, q014 | ✔ |
| SL 5.6 | t5-1 | q001, q003, q004, q005, q012, q015 | ✔ |
| SL 5.7 | t5-1 l.223 ff. | q008, q009 | ✔ |
| SL 5.8 | t5-1 l.223-400 | q010, q011, q013, q016, q017 | ✔ |
| SL 5.9 | t5-2 l.248-318 | q010, q011, q012, q017 | ✔ |
| SL 5.10 | t5-2 l.89-172 | q001, q003, q006, q013 | ✔ |
| SL 5.11 | t5-2 l.173-247 | q007, q008, q009, q016 | ✔ |
| AHL 5.12 | t5-3 l.129-158 | q001 | ◐ **Continuity/differentiability** is taught (l.132-135) but never practised; there is no piecewise "find a, b so that f is differentiable" item. Higher derivatives f⁽ⁿ⁾ are never practised. Convergence/divergence of limits is not taught. (Major, G11.) |
| AHL 5.13 | t5-3 l.159-210 | q002, q003, q016, t5-4 q013 | ◐ **lim as x → ∞ (∞/∞)** is mentioned but has no example or question; every item is x → 0 (Minor, G12). |
| AHL 5.14 | t5-3 l.214-289 | q005, q012, q014 | ✔ |
| AHL 5.15 | t5-3 l.243-305 | q004, q006, q010, (q011) | ◐ **No question differentiates tan/sec/cosec/cot, aˣ, logₐx, arccos or arctan.** Only arcsin(3x) (q004) is practised. **∫aˣ dx = aˣ/ln a (a booklet formula) is not taught anywhere** (Major, G13). |
| AHL 5.16 | t5-3 l.306-370 | q006, q007, q008, q009, q015, q017 | ✔ |
| AHL 5.17 | t5-3 l.373-437 | q013, q017 | ◐ **Area between a curve and the y-axis** gets one sentence (l.376), with no example and no question. Volume about the y-axis appears only in a Try-it (l.428), with no bank item. (Major, G14.) |
| AHL 5.18 | t5-4 l.116-265 | q001–q003, q006–q009, q011, q014, q016, q018 | ✔ (slope fields: see O1) |
| AHL 5.19 | t5-4 l.266-348 | q004, q005, q010, q012, q013, q015, q017, q018 | ✔ There is no question using the (1 + x)^p series or term-by-term differentiation (Minor). |

---

## C. Findings

### Critical
None. No page states something false about the syllabus that a student would rely on and lose marks for, beyond what pass 1 already reported. The closest are G3 and O1.

### Major

**G3. AHL 3.11 (symmetry properties of trig graphs) is not covered, and the README/research doc claim it is.**
- `topics/t3-2.html:261` reads "AHL 3.9–3.11". `README.md:38` reads "SL 3.5–3.8 + AHL 3.9–3.11". `docs/research/syllabus-topics-3-4-5.md:16,76`.
- The page has no material on sin(π − θ) = sin θ, cos(π − θ) = −cos θ, sin(−θ) = −sin θ, sin(π/2 − θ) = cos θ, tan(π + θ) = tan θ, or reading them from graph symmetry. Pass 1 relabelled the inverse-trig content to 3.9, which leaves 3.11 with nothing.
- Fix: add a short AHL 3.11 block (with `data-level="ahl"`) covering the symmetry identities derived from the unit circle and from the graphs, plus one question (e.g. "Given sin x = k, express sin(π + x) + cos(π/2 − x) in terms of k").

**G1. The tan x graph (SL 3.7) is missing.** `topics/t3-2.html:39` (checklist) and l.203-219 deal only with a sin/cos models. Students need period π, the asymptotes at x = π/2 + kπ, and tan-equation solution spacing. Fix: add a tan x sketch or table row and one question (e.g. the number of solutions of tan 2x = √3 on [0, 2π]).

**G4. AHL 3.12 "proofs of geometrical properties using vectors" is absent.** `topics/t3-3.html:94-140`. No example of the kind "show that the diagonals of a rhombus are perpendicular" or "show that ABCD is a parallelogram". Fix: add one worked example and one "show that" question.

**G7. SL 4.2 histograms and box-plot comparison are not covered.** `topics/t4-1.html:146` gives histograms one sentence. No question asks students to draw or read a histogram, read a cumulative-frequency curve, or compare two box plots (e.g. "compare the medians and IQRs of the two classes").

**G8. Several SL 4.4 items are missing.** `topics/t4-1.html:276-345`:
- (a) Interpreting the gradient a and intercept b in context is an explicit guide item and appears nowhere.
- (b) Scatter diagrams and the line of best fit by eye through (x̄, ȳ) are absent.
- (c) No Paper 2 item has raw bivariate data to put into a GDC (LinReg, r); every question gives the lines.

Fix: add a raw-data P2 question with parts (r, line, interpret a, predict, comment on reliability).

**G9. SL 4.5 has no content beyond a section tag.** `topics/t4-2.html:100` tags "SL 4.5", but "expected number of occurrences", relative frequency and sample space are not taught, and no question is tagged 4.5. Fix: add a short paragraph ("expected number = n·P(A)") and one question.

**G11. AHL 5.12 continuity, differentiability and higher derivatives are never practised.** Taught at `topics/t5-3.html:132-157`. There is no bank item. A typical IB item is a piecewise f with unknowns a and b chosen to make f continuous and differentiable at a point. Add one. "Understanding of limits (convergence and divergence)" is not addressed either.

**G13. AHL 5.15 practice is very narrow, and ∫aˣ dx is missing.**
- `topics/t5-3.html:243-249` lists the nine derivatives, but the bank practises only d/dx arcsin(3x) (q004). The rest of 5.15 practice is the arctan/arcsin integrals.
- The booklet integral ∫aˣ dx = aˣ/ln a + C is taught nowhere. `topics/t5-3.html:295` says "The Formula Booklet gives two essential inverse trigonometric integrals" and omits the third AHL 5.15 booklet integral.
- Fix: add ∫aˣ to l.295-300. Add one MCQ/multi covering d/dx of sec(2x), 3ˣ, log₂x and arccos x, and ∫sec²x / ∫sec x tan x.

**G14. AHL 5.17 area with the y-axis has no example or question.** `topics/t5-3.html:376` is the only mention. The y-axis volume is a Try-it only (l.428). Fix: add one bank item, e.g. "area between x = y² − 4 and the y-axis" plus a volume about the y-axis.

**O1. Slope fields are presented as AA content without a label.** **[U: verify]**
- `topics/t5-4.html:36`: checklist "interpret slope fields". Also l.117 (section title "Slope fields, Euler's method…"), l.119.
- Registry blurb `assets/js/core.js:51`: "Slope fields, Euler's method…".
- My recollection is that slope fields are listed in **AI HL** (5.17/5.18 area), and the AA 5.18 content lists only Euler, separable, homogeneous and integrating factor.
- If that is right, the checklist and registry present non-AA content as required, and it heads the blurb.
- Fix (if confirmed): keep the field as a visual aid in the widget, drop it from the checklist and blurb, and add "Slope fields are an AI HL topic; here they only visualise Euler's method". If the guide does list them, no change.

**O2. t4-2 q016 and q017 give away the answer in the input hint.** This is not in the pass-1 t4 report.
- `data/questions-t4-2.js:331` (q016): "you may type an exact radical such as sqrt(8)". The answer is 2√2 = √8 (`answer: 2.828427`, l.332).
- `data/questions-t4-2.js:350` (q017): "type an exact fraction such as 3/80". The answer is 3/80 (`answer: 0.0375`, l.351).
- Fix: use neutral examples (sqrt(5), 2/7).

**C1. The ambiguous case is still tagged SL 3.2 in two more questions.** Pass 1 caught only q012.
- `data/questions-t3-1.js:149` (q008, "Given that angle ACB is obtuse") is SSA with the obtuse branch.
- `data/questions-t3-1.js:278` (q015, "There are two possible values for the length of AC") is the cosine-rule quadratic form of the ambiguous case.
- Fix: `syllabus: 'SL 3.2, 3.5'` for both.

**D1. The research doc puts max/min testing and inflexion points under SL 5.7 instead of SL 5.8.** `docs/research/syllabus-topics-3-4-5.md:335-336`. Line 335 lists "testing for local maxima and minima … points of inflexion … horizontal vs non-horizontal" under SL 5.7. Line 336 gives SL 5.8 as just "Optimization". The guide places local max/min, testing for them, and points of inflexion with zero/non-zero gradient in **SL 5.8**; 5.7 is "second derivative; graphical relationships of f, f′, f″". This is the root cause of the t5-1 tag errors in pass 1. Fix: move those items into 5.8.

**D2. The research doc paraphrases SL 4.11 wrongly.** `docs/research/syllabus-topics-3-4-5.md:246` reads "SL 4.11 Conditional probability in context: Reversing tree branches and combining Binomial/Normal probabilities…". The guide's 4.11 is "Formal definition and use of the formulae P(A\|B) = P(A ∩ B)/P(B) and P(A\|B) = P(A) = P(A\|B′) for independent events". "Reversing tree branches" is Bayes-like (AHL 4.13). Fix: replace with the guide wording.

### Minor

**Labels and tags**
- `data/questions-t5-2.js:275` (q013), `'SL 5.5, 5.10'`. It differentiates x e^{2x} (SL 5.6) and evaluates a definite integral analytically (SL 5.11). SL 5.5 covers only xⁿ, n ∈ ℤ. → `'SL 5.6, 5.10, 5.11'`.
- `data/questions-t5-2.js:121` (q006), `'SL 5.10'`. It is an analytic definite integral → `'SL 5.10, 5.11'`.
- `data/questions-t5-1.js:259` (q012), `'SL 5.6'`. It asks for the maximum value of (ln x)/x → `'SL 5.6, 5.8'`.
- `README.md:37` and `docs/research/…:15`: "t3-1 … SL 3.1–3.4: … ambiguous case". The ambiguous case is SL 3.5 and sits on t3-1, so the coverage range should read "SL 3.1–3.4 (+ SL 3.5 ambiguous case)". The t3-2 range claims 3.5 in full.
- `topics/t3-1.html:199` section tag "SL 3.2–3.3" over "Triangle trigonometry, the ambiguous case and bearings" → "SL 3.2–3.3, 3.5". The WE kicker was already reported; the section tag has the same problem.
- `topics/t5-3.html:39` and `:40` (checklist): partial fractions is placed under the "integrate using substitution, parts…" item (5.16). Pass 1 fixed the decoder row and q011 only; the checklist item needs the same move to 5.15.

**Over-reach without a label**
- **O3.** Regression-coefficient algebra beyond the guide. **[U]**
  - Where: `topics/t4-1.html:299` "a · c = r²", also `a = r(σ_y/σ_x)`. Used by the WE (l.322-323), `data/questions-t4-1.js` q010 (r from two lines) and q017 (c from σ_y = 3σ_x and a).
  - The guide has r and the lines found by technology. These identities are not in the guide or booklet.
  - Finding (x̄, ȳ) from two lines is fair. Deriving r or c from the coefficients is enrichment.
  - Fix: label the box "Extension — not required by the AA guide" and mark q010 and q017 as challenge/extension.
- **O4.** First principles beyond polynomials. **[U]**
  - Where: `topics/t5-3.html:149-153` ("Three algebraic techniques handle every first-principles proof in IB AA HL: polynomials, 1/x, √x") and q001 (3/x).
  - I believe the 5.12 guidance limits first-principles work to polynomial functions; verify.
  - If confirmed, label 1/x and √x as extension and retag or relabel q001. Also soften "every first-principles proof in IB AA HL".
  - The research doc's "polynomials (up to degree 3) and simple functions (1/x, √x, sin x, cos x)" (l.420) is not guide wording either way.
- **O5.** Partial fractions with improper fractions. **[U]**
  - Where: `topics/t5-3.html:73`: "If the degree of the numerator is ≥ the denominator (e.g. x²/(x² − 1)), perform polynomial long division first!"
  - AHL 1.11 (as I recall) limits partial fractions to two distinct linear factors with the numerator's degree below the denominator's. Long division before partial fractions goes beyond that.
  - Fix: label it "beyond the guide; would be scaffolded in an exam".
- **O6.** Other indeterminate forms. `topics/t5-3.html:170` ("If you have a product 0 × ∞ (such as x ln x), rewrite it…") and research doc l.421 ("rewriting 0·∞ or ∞ − ∞"). The guide specifies the f(x)/g(x) forms only. This is reasonable enrichment but should be flagged "(beyond the guide's f/g forms)". **[U]**
- **O7.** Washers. `topics/t5-3.html:41` (checklist "including hollow washers") and l.388-395, WE l.406. The guide says only "volumes of revolution about the x- or y-axis" and does not exclude regions between two curves. AA papers have used them, so I would **not** call this over-reach. I note it only because the brief asked. **[U]**
- **O8.** `topics/t4-1.html:282`: the r strength cut-offs (0.85 / 0.5) are presented as a fixed "Strength guide". The IB guide gives no numeric thresholds. Add "(rule of thumb, not IB-defined)". This is separate from pass 1's internal-consistency point.
- **O9.** `topics/t4-1.html:95`: "calculating Pearson's r or regression slopes by hand from summation formulas belong to IB Math AI or legacy syllabuses". AI also uses technology for r. The accurate statement is "not required in AA (use technology)". Remove "belong to IB Math AI".

**Scope callouts checked and correct:**
- t3-2 l.342: factor formulas and t-substitution are not in AA.
- t3-3 l.274: triple products are not in AA.
- t4-1 l.95: χ², t/z tests, Spearman and s_{n−1} are AI, not AA.
- t4-2 l.95: Poisson, CLT, confidence intervals and aX + bY are AI HL.
- t5-1 l.356: multivariable optimisation.
- t5-2 l.202: the trapezoidal rule is AI.
- t5-3 l.396: shells.
- t5-4 l.300-304: second-order DEs, coupled systems (AI HL), Taylor about a ≠ 0, Lagrange remainder.

**Nothing examinable is wrongly labelled "Not needed".**

**Smaller coverage gaps** (no fix text needed beyond "add one item"):
- SL 3.1: angle between two intersecting lines in a solid
- SL 3.2: ½ab sin C in the bank
- AHL 3.9: graphs of the inverse functions (checklist l.43 promises them)
- AHL 3.14: angle between two lines
- AHL 3.17: vector-form plane conversion
- SL 4.3: modal class
- SL 4.6: two-way table / sample-space diagram
- SL 4.7: fair game
- SL 4.11: P(A\|B) = P(A\|B′) independence test
- AHL 4.14: discrete variance computed from a table; E(aX + b)
- SL 5.1: limit / rate of change
- AHL 5.13: x → ∞
- AHL 5.19: (1 + x)^p and term-by-term differentiation

**Formula booklet statements**

Checked and correct (as far as I recall the booklet):
- t3-1 l.201: sine rule, cosine rule and area are in the booklet.
- t3-1 l.285: arc and sector are in the booklet; segment and chord are not.
- t3-2 l.106: exact values are not in the booklet.
- t4-1 l.164: IQR is in the booklet; the 1.5 × IQR fences are not.
- t4-2 l.103: the addition rule and conditional probability are in the booklet.
- t5-1 l.110: SL 5.3 and 5.6 standard derivatives.
- t5-3 l.139: the first-principles definition is printed.
- t5-3 l.245: the 5.15 derivatives.
- t5-3 l.315: integration by parts (5.16).
- t5-4 l.68, l.204: y = vx is not in the booklet.
- t5-4 l.72, l.77: integrating factor and Euler (5.18).
- t5-4 l.280-287: Maclaurin series (5.19), with (1 + x)^p from 1.10.

Problems:
- t5-3 l.295 omits ∫aˣ dx (see G13).
- Pass 1 already covered t3-1 l.112/116, t5-2 l.95 and t5-3 l.61-62.
- I did not verify whether the booklet prints validity intervals for the Maclaurin series (t5-4 l.282-287). It does not matter for marks.

### Research doc (`docs/research/syllabus-topics-3-4-5.md`): further errors
Each item gives the line, then the problem. Severity is Minor unless noted.

- **l.4**: "Version 1.3 AA Formula Booklet". I cannot confirm this version label. **[U]** Cite the booklet by its publication or first-assessment date instead.
- **l.24**: SL 3.1 includes "between two planes". Not in SL 3.1 (same root cause as the t3-1 l.39 point in pass 1).
- **l.25 / l.70**: the ambiguous case is listed under 3.2 and missing from 3.5. Already reported in pass 1. l.70 also gives SL 3.5 "supplementary/complementary symmetry identities", which are AHL 3.11 content; move them there, which also addresses G3.
- **l.72**: SL 3.7 lists the graphs of sin, cos and tan, but the page never teaches tan (G1). The doc is right; the page is wrong.
- **l.76**: AHL 3.11 is described as inverse trig only (pass 1). The real 3.11 content (symmetry) is absent from the doc.
- **l.135**: "finding the acute angle between two lines" is placed under 3.15. The guide has it in **3.14**. "Shortest distance from a point to a line (and between skew lines)" and l.138 "shortest distance from a point to a plane" are not named in the guide content. They are fair as applications but should not be listed as content. **[U]**
- **l.203–205**: SL 4.2 omits comparing distributions with box plots. SL 4.4 omits "line of best fit by eye through the mean point", "interpret a and b" and "technology" (G7, G8).
- **l.206 and l.478**: "Examinable in full in May 2028; retiring in May 2029" (for SL 4.10 and Euler's method). This is not in the 2019 guide and I cannot verify it. It is irrelevant to a May 2028 candidate. **[U]** Delete it, or cite a source.
- **l.241**: SL 4.5 is fine, but the site never teaches its "expected number of occurrences" (G9).
- **l.246**: SL 4.11 paraphrase is wrong (D2, Major).
- **l.330**: SL 5.1 includes "equations of tangents and normals", which belong to SL 5.4 (l.333 repeats them).
- **l.332**: n ∈ ℚ at 5.3. Already reported in pass 1.
- **l.335–336**: SL 5.7/5.8 split is wrong (D1, Major).
- **l.376 vs l.389-391**: inconsistent. l.376 says "a = v dv/ds in AHL", but l.391 prints v dv/ds under the SL 5.9 booklet formulas. **[U]** I do not recall v dv/ds in the 2019 AA booklet or guide at all. Verify, and remove it if absent. It is not used on t5-2, so the site is unaffected.
- **l.381**: SL 5.5 booklet heading. Same root cause as pass 1's t5-2 l.95 point.
- **l.420**: AHL 5.12 scope "polynomials (up to degree 3) and simple functions (1/x, √x, sin x, cos x); … induction proofs for f⁽ⁿ⁾(x)". This is invented scope (O4). Induction is AHL 1.15 applied to 5.12, so label it as a cross-topic link.
- **l.421**: 0·∞ and ∞ − ∞ forms (O6). Also, the x → ∞ case of 5.13 should be stated explicitly.
- **l.423–424**: partial fractions is listed under 5.16 and omitted from 5.15. Pass 1 reported the page; the doc is the source. Also add "composites with a linear function" to 5.15.
- **l.425**: "region between two curves" is acceptable (O7), but it is not guide wording.
- **l.440–443**: ∫aˣ dx is correctly listed here, but the page omits it (G13).
- **l.483**: the Maclaurin list mixes guide content and booklet content. arctan x is in the booklet but not in the guide's list. Harmless.
- **l.506**: the M, N homogeneous row. Already reported in pass 1 (page).
- **Missing from the doc**: AHL 3.12 "proofs using vectors" (G4); SL 4.1 "interpretation of outliers"; AHL 5.12 "convergence and divergence".

**Registry / README**
- `assets/js/core.js:51`: t5-4 blurb leads with "Slope fields" (O1).
- `README.md:38`: t3-2 "AHL 3.9–3.11" (G3 — 3.11 is claimed but not delivered).
- `README.md:37`: t3-1 range (see Labels above).
- The other ranges (Topic 3 SL 3.1–3.8 & AHL 3.9–3.18; Topic 4 SL 4.1–4.12 & AHL 4.13–4.14; Topic 5 SL 5.1–5.11 & AHL 5.12–5.19) are correct, and every subtopic number maps to a page.

**data-level="ahl" on mixed pages**
- t3-2: the AHL checklist items (l.41-43), section l.260, WE3 and the scope callout are marked. The decoder row l.80 is unmarked (pass 1). The bank AHL items are q005, q006, q010, q011, q012, q015, q016 and q017, all `level: 'ahl'`.
- t4-2: the AHL items are marked apart from decoder l.70 (pass 1).
- t5-1 and t5-2 contain no AHL content, so there is nothing to mark.

---

## D. Summary counts (new findings only)
| Severity | Count | Items |
|---|---|---|
| Critical | 0 | |
| Major | 15 | G1, G3, G4, G7, G8, G9, G11, G13, G14, O1 [U], O2, C1, D1, D2 + README/registry 3.11 claim (with G3) |
| Minor | about 30 | tags (q013/q006/q012 t5; t3-1 section tag and README range; t5-3 checklist), O3–O9, small coverage gaps, research-doc lines |
