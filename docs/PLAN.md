# Master Plan — Analysis Lab: IB Mathematics AA HL (May 2028)

## 1. Mission & Pedagogical Goals

This open-source static web application (**Analysis Lab**) is built for students preparing for the **IB Diploma Programme Mathematics: Analysis and Approaches Higher Level (AA HL)** examination in **May 2028**.

### Target Student Profile & Core Problem Solved
- The student has already learned the foundational mechanics in Year 10, so pure mechanical manipulation is not the main barrier.
- **The main barrier is question decoding and practical application**: recognizing *which* mathematical technique a question is asking for when the exam disguises it in words, real-world modelling contexts, or multi-part *"Hence, or otherwise"* chains.
- The student is a non-native English speaker who will sit the exam in **English**, and benefits from plain, direct English explanations paired with optional **Hong Kong Traditional Chinese (`zh-Hant`)**, **Japanese (`ja`)**, and **Korean (`ko`)** language overlays (with zero auto-switching; English is always default, and key terms, exam tips, command terms, and the markscheme points and model answers of quiz questions stay visible in English).
- Many students today use AI tools to study, which frequently introduce university-level or out-of-syllabus methods (e.g., matrices/determinants for $3\times 3$ systems, $\varepsilon$-$\delta$ limit proofs, integration of $\sec x$, Taylor series around $x = a \neq 0$, second-order differential equations, chi-squared tests from AI syllabus). Every topic page explicitly flags **Not needed for IB** (`callout--scope`) boundaries.

---

## 2. Curriculum Verification: Why the 2021–2028 Guide Governs May 2028

- **Official IB schedule**: The current *Mathematics: analysis and approaches guide* (Published February 2019, **First assessment May 2021**) has its **final assessment in November 2028**.
- The next AA course begins first teaching in August 2027 for **first assessment in May 2029**.
- Therefore, **May 2028** candidates are examined 100% under the **First Assessment 2021 syllabus** (Topics 1–5: SL core + AHL extensions) and the current AA formula booklet (first examinations 2021), plus the 5-criterion Mathematical Exploration IA.
- The 2029 course may change or drop some content; for May 2028 everything in the current guide is examinable, so the site teaches all of it in full and does not speculate about the 2029 content.

### Assessment Blueprint (May 2028 HL)

| Component | Technology | Duration | Marks | Weighting | Structure |
|---|---|---:|---:|---:|---|
| **Paper 1** | **No calculator** (Formula booklet provided) | 2 h | 110 | 30% | Section A: compulsory short-response; Section B: compulsory extended-response (SL & AHL) |
| **Paper 2** | **GDC required** (Formula booklet provided) | 2 h | 110 | 30% | Section A: compulsory short-response; Section B: compulsory extended-response (SL & AHL) |
| **Paper 3** | **GDC required** (Formula booklet provided) | 1 h | 55 | 20% | 2 compulsory extended investigative problem-solving questions (HL) |
| **Internal Assessment** | Exploration | 30 h (toolkit and exploration, class time) | 20 | 20% | Individual Mathematical Exploration marked on Criteria A–E |

---

## 3. Site Architecture & Design System (Referenced from `2028-ibchemistry-HL`)

The site follows the exact battle-tested static architecture of `bennyng1029/2028-ibchemistry-HL`:
- **100% Static**: Works directly from `file://` and from a GitHub Pages subpath (`https://bennyng1029.github.io/2028-IBMathAA-HL/`). No bundler, no `fetch`, no external runtime dependencies (only Google Fonts with graceful system fallbacks).
- **Single Global Namespace**: `window.S1` so all shared components (`data-s1-header`, `data-s1-footer`, `data-s1-tile`, `data-s1-toc`, `data-s1-checklist`, `data-s1-worked`, `data-s1-numeric`, `data-s1-quiz`, `data-s1-widget`, `data-s1-practice`, `data-s1-reset`, `data-level="ahl"`) and translation tools (`tools/i18n-extract.js`, `tools/i18n-check.js`) work seamlessly.
- **Typography & Theme**: `Bricolage Grotesque` (display), `Atkinson Hyperlegible` (body), `JetBrains Mono` (working/numbers), plus CJK font stacks (`Noto Sans TC`, `Noto Sans JP`, `Noto Sans KR`). Full Light and Dark theme support with semantic CSS tokens (`--paper`, `--surface`, `--ink`, `--accent`, `--ahl`, `--amber`, `--ok`, `--bad`).
- **Math Engine (`assets/js/math.js`)**: Replaces/extends `chem.js` (while keeping `S1.chem` alias for full compatibility with `core.js`, `quiz.js`, and `tools/i18n-*.js`) with:
  - Clean mathematical expression and unit formatting (`.math`, `.chem`, `.unit`, fractions, vectors, integrals, limits, matrices/systems, binomial coefficients, exact radicals/$\pi$ parser)
  - Numeric answer checker supporting standard decimals, scientific notation, fractions (`3/4`), exact $\pi$ and surd expressions (`pi/3`, `sqrt(3)/2`), significant figures (IB 3 s.f. rule!), and tolerances
  - Interactive 2D function/calculus/statistics plotter and 3D vector/plane canvas helpers (`assets/js/chart.js` + `assets/js/geom.js`)
  - Formula booklet metadata (`S1.math.booklet` in `assets/js/math.js`, with the formulas students must memorize in `S1.math.memorize`)

---

## 4. Complete Topic Map (All 5 IB Strands, 17 Topic Pages)

| ID | Strand | Code | Level | Sym | Title | Syllabus Coverage |
|---|---|---|---|---|---|---|
| `t1-1` | Topic 1 | 1.1 | SL+HL | Sq | Sequences, series and financial models | SL 1.1–1.4, 1.8: Standard form, arithmetic & geometric sequences/series, $\Sigma$ notation, $S_\infty$, compound interest & depreciation |
| `t1-2` | Topic 1 | 1.2 | SL+HL | Lg | Exponents, logarithms and the binomial theorem | SL 1.5, 1.7, 1.9: Exponent & log laws, change of base, exponential/log equations, Pascal's triangle & $(a+b)^n$ for $n \in \mathbb{Z}^+$ |
| `t1-3` | Topic 1 | 1.3 | AHL | Pc | Counting, partial fractions and extended binomials | AHL 1.10–1.11: Permutations ${}^nP_r$, combinations ${}^nC_r$, $(1+x)^n$ for $n \in \mathbb{Q}$, partial fractions |
| `t1-4` | Topic 1 | 1.4 | AHL | Cx | Complex numbers and De Moivre's theorem | AHL 1.12–1.14: Cartesian $a+bi$, Argand plane, polar $r\,\text{cis}\,\theta$ & Euler $re^{i\theta}$, De Moivre's theorem, $n$-th roots & conjugate roots of polynomials |
| `t1-5` | Topic 1 | 1.5 | SL+HL | Pf | Mathematical proof and systems of linear equations | SL 1.6 + AHL 1.15–1.16: Algebraic proof, proof by induction, proof by contradiction, counterexamples, $3\times 3$ linear systems (unique, none, infinite) |
| `t2-1` | Topic 2 | 2.1 | SL+HL | Fn | Lines, functions, domains, inverses and composites | SL 2.1–2.5: Straight lines, function notation, domain & range, composite $(f\circ g)(x)$, inverse $f^{-1}(x)$ as reflection in $y=x$, graph features |
| `t2-2` | Topic 2 | 2.2 | SL+HL | Qd | Quadratics, rational, exponential and log models | SL 2.6–2.10: Vertex/intercept forms, completing the square, discriminant $\Delta = b^2-4ac$, reciprocal/rational $\frac{ax+b}{cx+d}$, exp/log models, GDC intersections |
| `t2-3` | Topic 2 | 2.3 | SL+HL | Tr | Transformations, polynomials and modulus functions | SL 2.11 + AHL 2.12–2.16: Graph transformations, factor & remainder theorems, Vieta's root relations, rational functions, odd/even, $|f(x)|$, $f(|x|)$, $\frac{1}{f(x)}$ & inequalities |
| `t3-1` | Topic 3 | 3.1 | SL+HL | Gm | 3D geometry, triangle trigonometry and radians | SL 3.1–3.4: 3D distance/midpoint, pyramids/cones/spheres, sine & cosine rules, ambiguous case, triangle area, bearings, radians, arc length & sector area |
| `t3-2` | Topic 3 | 3.2 | SL+HL | Tg | The unit circle, trig identities and periodic models | SL 3.5–3.8 + AHL 3.9–3.11: Unit circle & exact values, Pythagorean & double-angle identities, sinusoidal modelling, trig equations; AHL $\sec,\operatorname{cosec},\cot$, inverse trig & compound angles |
| `t3-3` | Topic 3 | 3.3 | AHL | Vc | Vectors, lines and planes in 3D space | AHL 3.12–3.18: Vector operations, scalar (dot) product $\mathbf{v}\cdot\mathbf{w}$, vector equations of lines, skew/intersecting lines, vector (cross) product $\mathbf{v}\times\mathbf{w}$, planes, line-plane & plane-plane intersections/angles |
| `t4-1` | Topic 4 | 4.1 | SL+HL | St | Descriptive statistics, correlation and regression | SL 4.1–4.4, 4.10: Sampling & bias, histograms, cumulative frequency & box plots, IQR & outliers, $\bar{x}$ & $\sigma$, Pearson's $r$, regression $y$ on $x$ vs $x$ on $y$ |
| `t4-2` | Topic 4 | 4.2 | SL+HL | Pb | Probability, distributions, Bayes and continuous RVs | SL 4.5–4.9, 4.11–4.12 + AHL 4.13–4.14: Venn/tree diagrams, conditional probability & independence, discrete RVs, Binomial $B(n,p)$, Normal $N(\mu,\sigma^2)$ & $z$-scores; AHL Bayes' theorem, $\operatorname{Var}(X)$, $aX+b$, continuous PDFs |
| `t5-1` | Topic 5 | 5.1 | SL+HL | Df | Differentiation, curve analysis and optimization | SL 5.1–5.4, 5.6–5.8: Limits, gradient & rate of change, tangents & normals, chain/product/quotient rules, $f, f', f''$ connections, stationary points, inflexion points & optimization |
| `t5-2` | Topic 5 | 5.2 | SL+HL | In | Integration, areas between curves and kinematics | SL 5.5, 5.9–5.11: Anti-differentiation & boundary conditions, reverse chain rule & substitution, definite integrals, area under/between curves, kinematics $s, v, a$ & total distance $\int |v|\,dt$ |
| `t5-3` | Topic 5 | 5.3 | AHL | Ca | First principles, L'Hôpital, implicit, parts and volumes | AHL 5.12–5.17: First principles, L'Hôpital's rule, implicit differentiation, related rates, inverse/reciprocal trig calculus, integration by substitution, parts & partial fractions, volumes of revolution |
| `t5-4` | Topic 5 | 5.4 | AHL | De | Differential equations and Maclaurin series | AHL 5.18–5.19: Euler's method, separable DEs, homogeneous DEs ($y=vx$), integrating factor $e^{\int P\,dx}$, Maclaurin series expansions & DE series solutions |

---

## 5. Pedagogical Features on Every Topic Page

1. **Checklist ("What you need to be able to do")**: Actionable SL and AHL learning outcomes tied to progress tracking.
2. **Question Decoder ("When to use which technique")**: A plain-English table/guide translating exam trigger phrases (e.g., *"at least one"*, *"touches the x-axis"*, *"initially at rest"*, *"changes direction"*, *"shortest distance from a point to a line"*) into the exact mathematical setup.
3. **Interactive Visual Models (Widgets)**: 2–3 interactive canvas/SVG models per topic page so the student can drag sliders, see graphs/vectors/areas respond in real time, and build geometric intuition.
4. **Step-by-Step Worked Examples (`data-s1-worked`)**: Reveal one step at a time, with explicit *"Why this step"* explanations and IB markscheme tags (`M1`, `A1`, `R1`).
5. **"Try it" Interactive Calculations (`data-s1-numeric`)**: Immediate practice with progressive hints and 3 s.f. / exact value feedback.
6. **IB Scope Guardrails (`callout--scope`)**: Explicit warnings on what AI tutors or non-IB websites teach that is **not** in the IB Math AA HL exam.
7. **Original Multi-Tier Question Bank (`data/questions-<id>.js`)**: Foundation, Exam-style (Paper 1 No-GDC, Paper 2 GDC), and Challenge (multi-topic synthesis and HL Paper 3 style) questions across `mcq`, `numeric`, `multi`, `order`, and `short` (self-marked against IB-style M1/A1 markschemes).
8. **4-Language Support (`en`, `zh-Hant` HK, `ja`, `ko`)**: Manual language selector in the header (no auto-switching), keeping key terms, exam tips, command terms, and quiz markscheme points and model answers visible in English alongside the translation (worked examples, hints and solutions are shown in the translation only).
