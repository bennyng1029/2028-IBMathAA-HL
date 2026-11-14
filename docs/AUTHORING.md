# Authoring Guide — Analysis Lab (IB Mathematics AA HL 2028)

This is the contract between the shared shell (`assets/`) and the 17 topic pages.
If you build a topic page, you should only need this file, `docs/research/syllabus-topics-*.md`, and `topics/t1-1.html` (the reference template).

**Rules that never bend**

- **Static files only**: Must work directly from `file://` and from a GitHub Pages subpath (`https://bennyng1029.github.io/2028-IBMathAA-HL/`). No `fetch`, no ES modules, no build step, no external runtime scripts. Relative URLs only.
- **One global namespace**: `window.S1`. Do not add other globals. (`S1.math` is the mathematics engine, with `S1.chem` aliased to `S1.math` for 100% compatibility with `core.js`, `quiz.js`, and `tools/i18n-*.js`.)
- **Do not edit core shell files**: Never edit `assets/css/site.css`, `assets/js/core.js`, `assets/js/quiz.js`, `assets/js/math.js`, `assets/js/chart.js`, or `assets/js/geom.js` from a topic task.
- **Topic builders own exactly three files per topic page** (`<id>` is the topic id, see table below):
  `topics/<id>.html`, `data/questions-<id>.js`, `assets/js/widgets-<id>.js`.
- **Every visible string in a widget goes through `t("…")`** (see Section 7). English is the only language you write in topic files; translations live in separate overlay files (`docs/TRANSLATING.md`).
- **Accuracy first**: Strictly follow the **IB Mathematics: Analysis and Approaches Guide (First assessment 2021, Final assessment Nov 2028, governing May 2028)** and the **Version 1.3 AA Formula Booklet** (`S1.math.formulas`, `S1.math.constants`). Follow IB 3 significant figures (3 s.f.) and exact value conventions.
- **Originality**: All worked examples, Try-it problems, and question banks must be 100% original. Never copy or closely paraphrase copyrighted IB past papers.

---

## 0. Complete Topic ID Registry (17 Pages across 5 Strands)

| ID | Strand (`group`) | Code (`num`) | Level | Sym | Title | Syllabus Subtopics |
|---|---|---|---|---|---|---|
| `t1-1` | `t1` (Topic 1) | 1.1 | `sl` (SL+HL) | Sq | Sequences, series and financial models | SL 1.1–1.4, 1.8 |
| `t1-2` | `t1` (Topic 1) | 1.2 | `sl` (SL+HL) | Lg | Exponents, logarithms and the binomial theorem | SL 1.5, 1.7, 1.9 |
| `t1-3` | `t1` (Topic 1) | 1.3 | `ahl` (AHL) | Pc | Counting, partial fractions and extended binomials | AHL 1.10–1.11 |
| `t1-4` | `t1` (Topic 1) | 1.4 | `ahl` (AHL) | Cx | Complex numbers and De Moivre's theorem | AHL 1.12–1.14 |
| `t1-5` | `t1` (Topic 1) | 1.5 | `sl` (SL+HL) | Pf | Mathematical proof and systems of linear equations | SL 1.6 + AHL 1.15–1.16 |
| `t2-1` | `t2` (Topic 2) | 2.1 | `sl` (SL+HL) | Fn | Lines, functions, domains, inverses and composites | SL 2.1–2.5 |
| `t2-2` | `t2` (Topic 2) | 2.2 | `sl` (SL+HL) | Qd | Quadratics, rational, exponential and log models | SL 2.6–2.10 |
| `t2-3` | `t2` (Topic 2) | 2.3 | `sl` (SL+HL) | Tr | Transformations, polynomials and modulus functions | SL 2.11 + AHL 2.12–2.16 |
| `t3-1` | `t3` (Topic 3) | 3.1 | `sl` (SL+HL) | Gm | 3D geometry, triangle trigonometry and radians | SL 3.1–3.4 |
| `t3-2` | `t3` (Topic 3) | 3.2 | `sl` (SL+HL) | Tg | The unit circle, trig identities and periodic models | SL 3.5–3.8 + AHL 3.9–3.11 |
| `t3-3` | `t3` (Topic 3) | 3.3 | `ahl` (AHL) | Vc | Vectors, lines and planes in 3D space | AHL 3.12–3.18 |
| `t4-1` | `t4` (Topic 4) | 4.1 | `sl` (SL+HL) | St | Descriptive statistics, correlation and regression | SL 4.1–4.4, 4.10 |
| `t4-2` | `t4` (Topic 4) | 4.2 | `sl` (SL+HL) | Pb | Probability, distributions, Bayes and continuous RVs | SL 4.5–4.9, 4.11–4.12 + AHL 4.13–4.14 |
| `t5-1` | `t5` (Topic 5) | 5.1 | `sl` (SL+HL) | Df | Differentiation, curve analysis and optimization | SL 5.1–5.4, 5.6–5.8 |
| `t5-2` | `t5` (Topic 5) | 5.2 | `sl` (SL+HL) | In | Integration, areas between curves and kinematics | SL 5.5, 5.9–5.11 |
| `t5-3` | `t5` (Topic 5) | 5.3 | `ahl` (AHL) | Ca | First principles, L'Hôpital, implicit, parts and volumes | AHL 5.12–5.17 |
| `t5-4` | `t5` (Topic 5) | 5.4 | `ahl` (AHL) | De | Differential equations and Maclaurin series | AHL 5.18–5.19 |

The registry is `S1.topics` in `assets/js/core.js` (`id, group, ready, level, num, sym, short, title, blurb, href`), grouped by `S1.groups` (`t1`, `t2`, `t3`, `t4`, `t5`).
- A topic with `level: 'ahl'` (`t1-3`, `t1-4`, `t3-3`, `t5-3`, `t5-4`) gets the violet HL tag and is hidden in "SL core only" mode. On an AHL-only page, do **not** mark every individual `<section>` with `data-level="ahl"`—the entire page is already AHL.
- On mixed SL+HL pages (`t1-5`, `t2-3`, `t3-2`, `t4-2`), mark AHL sections, callouts, worked examples, and checklist items with `data-level="ahl"`.
- Question IDs strictly follow the page ID: `t1-1-q001`, `t3-3-q015`, etc.

---

## 1. Page Skeleton (Copy This)

```html
<!DOCTYPE html>
<html lang="en" data-root="../">            <!-- "" for root pages, "../" for /topics/ -->
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>1.1 Sequences, series and financial models | Analysis Lab</title>
<meta name="description" content="Master arithmetic and geometric sequences, sigma notation, infinite geometric series, and compound interest for IB Math AA HL.">
<meta name="color-scheme" content="light dark">
<script>(function(){try{var d=document.documentElement,t=localStorage.getItem('s1.theme'),l=localStorage.getItem('s1.level');if(t==='light'||t==='dark')d.setAttribute('data-theme',t);if(l==='sl')d.setAttribute('data-show','sl');}catch(e){}})();</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&amp;family=Bricolage+Grotesque:opsz,wght@12..96,500..800&amp;family=JetBrains+Mono:wght@400;600&amp;display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/css/site.css">
</head>
<body data-page="t1-1">                      <!-- t1-1 … t5-4 | home | practice -->
<div data-s1-header></div>
<noscript><p class="noscript-note">This site needs JavaScript for its menu, quizzes and interactive diagrams. The explanations below still work without it. <a href="../index.html">Home</a></p></noscript>
<main id="main">

  <header class="topic-hero wrap">
    <div data-s1-tile="t1-1"></div>
    <div class="topic-hero__text">
      <p class="eyebrow">Topic 1.1 · SL 1.1–1.4, 1.8</p>
      <h1>Sequences, series and financial models</h1>
      <p class="guiding"><span class="guiding__label">Guiding question</span>How do we model patterns that grow by a fixed step versus a fixed percentage, and when does an infinite sum reach a finite limit?</p>
    </div>
  </header>

  <div class="topic-layout wrap">
    <nav data-s1-toc aria-label="On this page"></nav>
    <div class="topic-content">

      <section class="topic-section" id="goals" data-toc="Checklist">
        <h2>What you need to be able to do</h2>
        <ul class="checklist" data-s1-checklist="t1-1"> … </ul>
      </section>

      <section class="topic-section" id="decoder" data-toc="Question decoder">
        <h2>Question decoder: spotting which technique to use</h2>
        …
      </section>

      <section class="topic-section" id="arithmetic" data-toc="Arithmetic">
        <span class="section-code">SL 1.2</span>
        <h2>Arithmetic sequences and series</h2>
        …
      </section>

      <div data-s1-pager></div>
    </div>
  </div>
</main>
<div data-s1-footer></div>
<script src="../assets/js/math.js"></script>
<script src="../assets/js/core.js"></script>
<script src="../assets/js/quiz.js"></script>
<script src="../assets/js/chart.js"></script>      <!-- 2D function/calculus/stats plotter -->
<script src="../assets/js/geom.js"></script>       <!-- 3D vector/plane/unit-circle figures (if used) -->
<script src="../data/questions-t1-1.js"></script>
<script src="../assets/js/widgets-t1-1.js"></script>
</body>
</html>
```

**Script order matters**: `math.js`, `core.js`, `quiz.js`, `chart.js`, `geom.js`, `questions-<id>.js`, `widgets-<id>.js`.
All scripts go at the end of `<body>`, without `defer` or `async`.

---

## 2. Level System (SL vs Additional HL)

Unmarked content is SL core. Mark Additional HL content on mixed SL+HL pages with `data-level="ahl"` on a block element (`section`, `div`, `aside`, `figure`, or `article`):

```html
<section class="topic-section" id="induction" data-level="ahl" data-toc="Induction"> … </section>
<aside class="callout callout--key" data-level="ahl"><p>…</p></aside>
<div class="worked" data-s1-worked data-level="ahl"> … </div>
```

The violet edge and "Additional HL" badge are added automatically (add `data-no-badge` to suppress the badge on nested blocks). Violet (`--ahl`) means AHL and nothing else.

---

## 3. Components & Math Formatting

### 3.1 Checklist ("What you need to be able to do")

```html
<ul class="checklist" data-s1-checklist="t1-1">
  <li data-id="arith-nth" data-level="sl">Find the <i>n</i>-th term and sum of the first <i>n</i> terms of an arithmetic sequence.</li>
  <li data-id="geom-inf" data-level="sl">Test for convergence (<span class="chem">|r| &lt; 1</span>) and find the sum to infinity <span class="chem">S_inf = u_1 / (1 - r)</span>.</li>
</ul>
```

### 3.2 Mandatory "Question Decoder" Table (`#decoder`)

Every topic page **must** include a "Question decoder" section (`id="decoder"`) right after the checklist (or integrated into each section) that translates exam trigger phrases into the exact mathematical setup and compares Paper 1 (No-GDC) vs Paper 2 (GDC) approaches:

```html
<div class="table-scroll">
  <table class="data">
    <caption>Question decoder — Sequences and series</caption>
    <thead>
      <tr>
        <th scope="col">What the exam question says</th>
        <th scope="col">What it means (formula &amp; setup)</th>
        <th scope="col">Paper 1 (No GDC) vs Paper 2 (GDC)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">“Increases by a fixed amount each year”</th>
        <td>Arithmetic sequence with constant difference <span class="chem">d = u_2 - u_1</span>.</td>
        <td>Substitute <span class="chem">u_1</span> and <span class="chem">d</span> into <span class="chem">u_n = u_1 + (n - 1)d</span>.</td>
      </tr>
    </tbody>
  </table>
</div>
```

### 3.3 Callouts

```html
<aside class="callout callout--key"><p>…</p></aside>       <!-- Key idea -->
<aside class="callout callout--mistake"><p>…</p></aside>   <!-- Common mistake (amber) -->
<aside class="callout callout--exam"><p>…</p></aside>      <!-- Exam tip: what the markscheme wants -->
<aside class="callout callout--scope"><p>…</p></aside>     <!-- Not needed for IB -->
<aside class="callout callout--booklet"><p>…</p></aside>   <!-- In your formula booklet -->
```

- **`callout--scope` is essential**: Students frequently use AI tools that introduce out-of-syllabus methods (matrices/Cramer's rule in 1.16, partial fractions with repeated/quadratic factors in 1.11, $\chi^2$/hypothesis testing in Topic 4, shell method for volumes in 5.17, second-order ODEs in 5.18). State plainly in 1–2 sentences what is **not** required in IB Math AA HL so students don't waste study time.

### 3.4 Inline Math, Definitions & Units (`.chem`, `.unit`, `<dfn>`)

To maintain 100% compatibility with `core.js`, `quiz.js`, and the i18n toolchain (`tools/i18n-extract.js` and `tools/i18n-check.js`), inline mathematical expressions use `<span class="chem">…</span>` (or `<span class="math">…</span>`, formatted by `S1.math.formula`, aliased as `S1.chem.formula`), and units use `<span class="unit">…</span>`:

```html
<dfn data-def="A sequence in which each term minus the previous term is a constant common difference d.">arithmetic sequence</dfn>

<span class="chem">u_n = u_1 + (n - 1)d</span>
<span class="chem">f'(x) = 3x^2 - 6x + 2</span>
<span class="chem">Delta = b^2 - 4ac &gt;= 0</span>
<span class="chem">int_0^pi sin(2x) dx = 0</span>
<span class="unit">m s-1</span>                     <!-- auto: m s⁻¹ -->
<span class="unit">cm3 s-1</span>                   <!-- auto: cm³ s⁻¹ -->
<span class="mono">1.036 × 10<sup>4</sup></span>
```

**How `S1.math.formula` formats `<span class="chem">…</span>`**:
- Subscripts: `u_1`, `u_{n-1}`, `S_inf` ($\to S_\infty$), `log_2`, `log_a`.
- Superscripts: `x^2`, `r^{n-1}`, `e^{-kt}`, `f^{-1}(x)`.
- Greek & math symbols: `pi` ($\pi$), `theta` ($\theta$), `alpha` ($\alpha$), `beta` ($\beta$), `gamma` ($\gamma$), `lambda` ($\lambda$), `mu` ($\mu$), `sigma` ($\sigma$), `Delta` ($\Delta$), `inf` ($\infty$), `<=` ($\le$), `>=` ($\ge$), `!=` ($\neq$), `+-` ($\pm$), `->` ($\to$), `<=>` ($\iff$), `sqrt(x)` ($\sqrt{x}$).
- If a `.chem` element already contains child HTML tags (`<i>`, `<sub>`, `<sup>`, `<span class="frac">`), it is left untouched so you can write rich HTML math whenever needed!

### 3.5 Equation Block (`.eq`)

```html
<div class="eq">
  <div class="eq__formula"><i>S</i><sub><i>n</i></sub> = <span class="frac"><span><i>n</i></span><span>2</span></span>(2<i>u</i><sub>1</sub> + (<i>n</i> − 1)<i>d</i>) = <span class="frac"><span><i>n</i></span><span>2</span></span>(<i>u</i><sub>1</sub> + <i>u</i><sub><i>n</i></sub>)</div>
  <dl class="eq__legend">
    <div><dt>S<sub>n</sub></dt><dd>sum of the first <i>n</i> terms</dd></div>
    <div><dt>u<sub>1</sub></dt><dd>first term</dd></div>
    <div><dt>u<sub>n</sub></dt><dd><i>n</i>-th term</dd></div>
    <div><dt>d</dt><dd>common difference</dd></div>
  </dl>
</div>
```

### 3.6 Worked Example Stepper (`data-s1-worked`)

```html
<div class="worked" data-s1-worked>
  <h3 class="worked__title">Finding the first term and common ratio from two non-consecutive terms</h3>
  <div class="worked__problem">
    <p>In a convergent geometric series with positive terms, the second term is 18 and the fourth term is 8. Find the sum to infinity <span class="chem">S_inf</span>. <strong>[5 marks]</strong></p>
  </div>
  <ol class="worked__steps">
    <li data-title="Write both given terms using the n-th term formula">
      <p class="worked__why">Translating words into equations with u₁ and r gives a system we can divide to eliminate u₁.</p>
      <div class="worked__math"><i>u</i><sub>2</sub> = <i>u</i><sub>1</sub><i>r</i> = 18   and   <i>u</i><sub>4</sub> = <i>u</i><sub>1</sub><i>r</i><sup>3</sup> = 8   <b>[M1]</b></div>
    </li>
    <li data-title="Divide u₄ by u₂ to solve for r">
      <p class="worked__why">Dividing cancels u₁ and leaves r². Since all terms are positive, reject the negative root.</p>
      <div class="worked__math"><i>r</i><sup>2</sup> = <span class="frac"><span>8</span><span>18</span></span> = <span class="frac"><span>4</span><span>9</span></span>  ⇒  <i>r</i> = <span class="frac"><span>2</span><span>3</span></span>   (since <i>r</i> &gt; 0, |<i>r</i>| &lt; 1)   <b>[A1 R1]</b></div>
    </li>
    <li data-title="Back-substitute r to find u₁ and compute S∞">
      <p class="worked__why">Now that we have both u₁ and r, substitute into the Formula Booklet sum to infinity formula.</p>
      <div class="worked__math"><i>u</i><sub>1</sub> = <span class="frac"><span>18</span><span>2/3</span></span> = 27   <b>[A1]</b></div>
      <div class="worked__math"><i>S</i><sub>∞</sub> = <span class="frac"><span>27</span><span>1 − 2/3</span></span> = <b>81</b>   <b>[A1]</b></div>
    </li>
  </ol>
  <div class="worked__answer"><p>81</p></div>
</div>
```

- Always include IB markscheme tags (`[M1]`, `[A1]`, `[R1]`) in `.worked__math` so students see exactly where marks are earned.

### 3.7 "Try it" Numeric Check (`data-s1-numeric`)

```html
<div data-s1-numeric data-answer="81" data-tolerance="0.5%" data-sigfigs="3">
  <div class="tryit__q"><p>A convergent geometric series has first term <span class="chem">u_1 = 54</span> and third term <span class="chem">u_3 = 24</span>, with all terms positive. Calculate <span class="chem">S_inf</span>.</p></div>
  <ol class="tryit__hints">
    <li>Use <span class="chem">u_3 / u_1 = r^2</span> to find the positive common ratio <span class="chem">r</span>.</li>
    <li>You should get <span class="chem">r = 2/3</span>. Now substitute <span class="chem">u_1 = 54</span> and <span class="chem">r = 2/3</span> into <span class="chem">S_inf = u_1 / (1 - r)</span>.</li>
  </ol>
  <div class="tryit__solution">
    <div class="worked__math"><i>r</i><sup>2</sup> = 24 / 54 = 4 / 9  ⇒  <i>r</i> = 2 / 3</div>
    <div class="worked__math"><i>S</i><sub>∞</sub> = 54 / (1 − 2/3) = <b>162</b></div>
  </div>
</div>
```

**Supported Student Inputs in `S1.math.parseNumber` / `S1.math.checkNumeric`**:
- Decimals and scientific notation: `0.250`, `1.25e-3`, `1.25 × 10^-3`.
- Exact fractions: `3/4`, `-5/12`.
- Exact $\pi$ and radical expressions: `pi/3`, `2*pi/3`, `sqrt(3)/2`, `-1/sqrt(2)` (evaluated numerically and exempted from 3 s.f. penalties when exact!).

---

## 4. Interactive Visual Helpers (`chart.js` and `geom.js`)

### 4.1 2D Function, Calculus & Statistics Plotter (`S1.chart`)

Load `assets/js/chart.js` after `core.js`. Besides `S1.chart.plot(el, spec)` for general line/scatter/bar/histogram charts, `chart.js` provides `S1.chart.funcPlot(el, spec)` for interactive mathematical graphing:

```js
S1.chart.funcPlot(el, {
  label: 'Graph of f(x) and its tangent line at x = a',
  height: 280,
  x: { label: 'x', min: -4, max: 4, step: 1 },
  y: { label: 'y', min: -5, max: 10, step: 2 },
  OriginAxes: true,                     // draws bold x=0 and y=0 axes with gridlines
  shadedArea: { fn1: function(x){ return 4 - x*x; }, fn2: 0, from: -2, to: 2 }, // definite integral shading
  asymptotes: [{ x: 2, label: 'x = 2' }, { y: 1, label: 'y = 1' }],             // dashed asymptotes
  functions: [
    { fn: function(x){ return x*x - 2*x - 1; }, color: '--accent', name: 'f(x)', width: 2.5 },
    { fn: function(x){ return 2*x - 5; }, color: '--ink-2', dashed: true, name: 'Tangent' }
  ],
  points: [
    { x: 2, y: -1, label: 'P(2, −1)', color: '--accent' }
  ]
});
```

### 4.2 3D Vectors, Lines, Planes & Unit Circle (`S1.geom` / `S1.chart.vec3d`)

Load `assets/js/geom.js` after `core.js`.
- `S1.geom.vec3d(el, spec)` (also aliased as `S1.chart.vec3d`): Interactive rotatable 3D coordinate space showing $x, y, z$ axes, vectors (`arrows: [{from, to, label, color}]`), 3D lines (`lines: [{point, dir, label, color}]`), 3D planes (`planes: [{normal, d, label, color}]`), points, and angle arcs.
- `S1.geom.unitCircle(el, spec)`: Interactive unit circle and Argand plane diagram with angle $\theta$, $(\cos\theta, \sin\theta)$ projections, or $n$-th roots of unity polygon.

---

## 5. Question Banks (`data/questions-<id>.js`)

One file per topic: `data/questions-<id>.js`, calling:
```js
S1.questions.register('t1-1', [ { …question… }, … ]);
```
- **Target count per topic page**: At least 15–20 original questions spanning `foundation`, `exam` (Paper 1 No-GDC, Paper 2 GDC, Paper 3 Investigation style), and `challenge`, across all 5 question types (`mcq`, `numeric`, `multi`, `order`, `short`).
- Every `mcq` distractor must have a tailored `misconception` entry explaining the exact algebraic/conceptual slip that produces that wrong option.
- Every `short` question must have `markscheme` points starting with IB mark tags (`M1: …`, `A1: …`, `R1: …`).
