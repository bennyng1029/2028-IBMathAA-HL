/* ==========================================================================
   Analysis Lab — questions-t5-4.js
   Original question bank for Topic 5.4 (AHL 5.18–5.19):
   Differential equations and Maclaurin series.
   ========================================================================== */
(function () {
  'use strict';
  if (!window.S1 || !window.S1.questions) return;

  window.S1.questions.register('t5-4', [
    /* --- Foundation --- */
    {
      id: 't5-4-q001',
      topic: 't5-4',
      level: 'ahl',
      tier: 'foundation',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.18',
      marks: 3,
      stem: '<p>Given <span class="chem">dy/dx = 2x - y</span> with initial condition <span class="chem">y(0) = 2</span>, use Euler’s method with step size <span class="chem">h = 0.2</span> to approximate <span class="chem">y(0.4)</span>.</p>',
      answer: 1.36,
      tolerance: '0.005',
      sigfigs: 3,
      hints: [
        'First step (<span class="chem">x_0 = 0, y_0 = 2</span>): <span class="chem">y_1 = 2 + 0.2(2(0) - 2) = 1.6</span> at <span class="chem">x_1 = 0.2</span>.',
        'Second step (<span class="chem">x_1 = 0.2, y_1 = 1.6</span>): <span class="chem">y_2 = 1.6 + 0.2(2(0.2) - 1.6)</span>.'
      ],
      solution: '<p>Step 1: <span class="chem">y_1 = 2 + 0.2(0 - 2) = 1.6</span> at <span class="chem">x_1 = 0.2</span>. Step 2: <span class="chem">y_2 = 1.6 + 0.2(0.4 - 1.6) = 1.6 - 0.24 = 1.36</span>.</p>'
    },
    {
      id: 't5-4-q002',
      topic: 't5-4',
      level: 'ahl',
      tier: 'foundation',
      type: 'mcq',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.18',
      marks: 2,
      stem: '<p>A solution curve <span class="chem">y = f(x)</span> is <strong>concave down</strong> (<span class="chem">d^2y/dx^2 &lt; 0</span>) on the interval <span class="chem">[0, 1]</span>. What can be concluded about an Euler’s method approximation of <span class="chem">f(1)</span> starting from <span class="chem">(0, f(0))</span>?</p>',
      options: [
        'It gives an <strong>overestimate</strong> because the tangent lines lie above the curve.',
        'It gives an <strong>underestimate</strong> because the tangent lines lie below the curve.',
        'It gives the exact value because Euler’s method is independent of concavity.',
        'It gives an <strong>underestimate</strong> whenever <span class="chem">dy/dx &gt; 0</span> and an overestimate whenever <span class="chem">dy/dx &lt; 0</span>.'
      ],
      answer: 0,
      misconception: {
        1: 'Tangent lines lie below a curve only when it is concave <em>up</em> (<span class="chem">d^2y/dx^2 &gt; 0</span>).',
        2: 'Euler’s method follows straight tangent segments, so curvature (<span class="chem">d^2y/dx^2 != 0</span>) always introduces truncation error.',
        3: 'The direction of the bias depends on the sign of the second derivative (concavity), not the first derivative.'
      },
      hints: [
        'Sketch a concave-down curve (shaped like an arch) and draw its tangent line at the starting point.'
      ],
      solution: '<p>When <span class="chem">d^2y/dx^2 &lt; 0</span>, the gradient is decreasing, so every tangent line sits above the curve. Stepping along tangent lines therefore produces an overestimate.</p>'
    },
    {
      id: 't5-4-q003',
      topic: 't5-4',
      level: 'ahl',
      tier: 'foundation',
      type: 'mcq',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.18',
      marks: 2,
      stem: '<p>Solve the separable differential equation <span class="chem">dy/dx = 2y / x</span> (<span class="chem">x &gt; 0, y &gt; 0</span>) given that <span class="chem">y(1) = 3</span>.</p>',
      options: [
        '<span class="chem">y = 3x^2</span>',
        '<span class="chem">y = x^2 + 2</span>',
        '<span class="chem">y = 3e^{2x}</span>',
        '<span class="chem">y = 3 sqrt(x)</span>'
      ],
      answer: 0,
      misconception: {
        1: 'After integrating <span class="chem">ln y = 2 ln x + C</span>, exponentiating gives <span class="chem">y = A x^2</span> (a multiplicative constant), not <span class="chem">x^2 + C</span>.',
        2: 'The right-hand side is <span class="chem">int (2/x) dx = 2 ln x</span>, not <span class="chem">2x</span>.',
        3: 'Notice <span class="chem">2 ln x = ln(x^2)</span>, not <span class="chem">ln(x^{1/2})</span>.'
      },
      hints: [
        'Separate variables: <span class="chem">int (1/y) dy = int (2/x) dx</span>.',
        'Use <span class="chem">2 ln x = ln(x^2)</span> before exponentiating both sides.'
      ],
      solution: '<p><span class="chem">int (1/y) dy = int (2/x) dx => ln y = 2 ln x + C => y = A x^2</span>. Since <span class="chem">y(1) = 3</span>, <span class="chem">A = 3</span>, giving <span class="chem">y = 3x^2</span>.</p>'
    },
    {
      id: 't5-4-q004',
      topic: 't5-4',
      level: 'ahl',
      tier: 'foundation',
      type: 'multi',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.18–5.19',
      marks: 3,
      stem: '<p>Select <strong>all</strong> statements that are true in the IB Math AA HL syllabus.</p>',
      options: [
        'The integrating factor for <span class="chem">dy/dx + P(x)y = Q(x)</span> is <span class="chem">I(x) = e^{int P(x) dx}</span>.',
        'The substitution <span class="chem">y = vx</span> transforms any homogeneous DE <span class="chem">dy/dx = F(y/x)</span> into a separable DE in <span class="chem">v</span> and <span class="chem">x</span>.',
        'In the Maclaurin series for <span class="chem">ln(1 + x)</span>, the <span class="chem">x^n</span> term has denominator <span class="chem">n</span>, not <span class="chem">n!</span>.',
        'In the Maclaurin series for <span class="chem">arctan x</span>, the <span class="chem">x^3</span> term is <span class="chem">-x^3 / 3!</span>.'
      ],
      answer: [0, 1, 2],
      misconception: {
        3: '<span class="chem">arctan x = x - x^3/3 + x^5/5 - ...</span> divides by <span class="chem">3</span>, not <span class="chem">3! = 6</span>.'
      },
      hints: [
        'Check the Formula Booklet expansions for <span class="chem">ln(1 + x)</span> and <span class="chem">arctan x</span> carefully.'
      ],
      solution: '<p>The first three statements are all true. For <span class="chem">arctan x</span>, the denominators are odd integers <span class="chem">1, 3, 5, ...</span> without factorials.</p>'
    },
    {
      id: 't5-4-q005',
      topic: 't5-4',
      level: 'ahl',
      tier: 'foundation',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.19',
      marks: 2,
      stem: '<p>Find the exact coefficient of <span class="chem">x^3</span> in the Maclaurin series expansion of <span class="chem">f(x) = sin(2x)</span>. (You can enter an exact fraction like <span class="mono">-5/7</span>.)</p>',
      answer: -4 / 3,
      answerDisplay: '−4/3 ≈ −1.33',
      exact: true,
      answerInput: '-4/3',
      hints: [
        'Substitute <span class="chem">u = 2x</span> into the standard Formula Booklet series <span class="chem">sin u = u - u^3/3! + ...</span>.'
      ],
      solution: '<p><span class="chem">sin(2x) = 2x - (2x)^3 / 6 + ... = 2x - (8/6)x^3 + ... = 2x - (4/3)x^3 + ...</span>, so the coefficient of <span class="chem">x^3</span> is <span class="chem">-4/3</span>.</p>'
    },
    {
      id: 't5-4-q006',
      topic: 't5-4',
      level: 'ahl',
      tier: 'foundation',
      type: 'mcq',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.18',
      marks: 2,
      stem: '<p>To solve the linear differential equation <span class="chem">x^2 (dy/dx) + 3xy = e^x</span> (<span class="chem">x &gt; 0</span>) using an integrating factor, what is <span class="chem">P(x)</span> in the standard form <span class="chem">dy/dx + P(x)y = Q(x)</span>?</p>',
      options: [
        '<span class="chem">3 / x</span>',
        '<span class="chem">3x</span>',
        '<span class="chem">3 / x^2</span>',
        '<span class="chem">e^x / x^2</span>'
      ],
      answer: 0,
      misconception: {
        1: 'You must divide the entire equation by the leading coefficient <span class="chem">x^2</span> before reading off <span class="chem">P(x)</span>.',
        2: '<span class="chem">(3x) / x^2</span> simplifies to <span class="chem">3 / x</span>, not <span class="chem">3 / x^2</span>.',
        3: '<span class="chem">e^x / x^2</span> is <span class="chem">Q(x)</span> on the right-hand side, not <span class="chem">P(x)</span>.'
      },
      hints: [
        'Divide every term by <span class="chem">x^2</span> so the coefficient of <span class="chem">dy/dx</span> is <span class="chem">1</span>.'
      ],
      solution: '<p>Dividing by <span class="chem">x^2</span> gives <span class="chem">dy/dx + (3/x)y = e^x / x^2</span>, so <span class="chem">P(x) = 3/x</span>.</p>'
    },

    /* --- Exam style --- */
    {
      id: 't5-4-q007',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'order',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.18',
      marks: 4,
      stem: '<p>Arrange the steps in the correct logical order to solve a homogeneous differential equation <span class="chem">dy/dx = F(y/x)</span>.</p>',
      options: [
        'Introduce the substitution <span class="chem">y = vx</span> and differentiate using the product rule to get <span class="chem">dy/dx = v + x(dv/dx)</span>.',
        'Substitute both expressions into the DE to obtain <span class="chem">v + x(dv/dx) = F(v)</span>, so <span class="chem">x(dv/dx) = F(v) - v</span>.',
        'Separate variables to integrate <span class="chem">int 1/(F(v) - v) dv = int (1/x) dx</span>.',
        'Replace <span class="chem">v = y/x</span> and apply the initial condition to find the particular solution.'
      ],
      answer: [0, 1, 2, 3],
      hints: [
        'Start by defining <span class="chem">y = vx</span> and differentiating it before substituting into the DE.'
      ],
      solution: '<p>Define <span class="chem">y = vx</span> and <span class="chem">dy/dx = v + x(dv/dx)</span>, substitute to isolate <span class="chem">x(dv/dx) = F(v) - v</span>, separate variables and integrate, and finally substitute <span class="chem">v = y/x</span> back.</p>'
    },
    {
      id: 't5-4-q008',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.18',
      marks: 5,
      stem: '<p>Solve the homogeneous differential equation <span class="chem">dy/dx = (x + 2y) / x</span> (<span class="chem">x &gt; 0</span>) given that <span class="chem">y(1) = 1</span>, and find the exact value of <span class="chem">y(2)</span>.</p>',
      answer: 6,
      exact: true,
      answerInput: '6',
      hints: [
        'Let <span class="chem">y = vx</span> so <span class="chem">v + x(dv/dx) = 1 + 2v => x(dv/dx) = 1 + v</span>.',
        'Separate variables: <span class="chem">int 1/(1 + v) dv = int (1/x) dx => 1 + v = A x</span>. Use <span class="chem">y(1) = 1</span> (<span class="chem">v = 1</span>) to find <span class="chem">A = 2</span>.'
      ],
      solution: '<p>With <span class="chem">y = vx</span>, <span class="chem">v + x(dv/dx) = 1 + 2v => x(dv/dx) = 1 + v</span>. Integrating gives <span class="chem">ln|1 + v| = ln x + C => 1 + y/x = A x</span>. Using <span class="chem">y(1) = 1</span> gives <span class="chem">A = 2</span>, so <span class="chem">y = 2x^2 - x</span>. Thus <span class="chem">y(2) = 2(4) - 2 = 6</span>.</p>'
    },
    {
      id: 't5-4-q009',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.18',
      marks: 5,
      stem: '<p>Solve the differential equation <span class="chem">dy/dx + 2y = 6e^x</span> given that <span class="chem">y(0) = 5</span>, and find the exact value of <span class="chem">y(ln 2)</span>.</p>',
      answer: 4.75,
      exact: true,
      answerInput: '19/4',
      hints: [
        'The integrating factor is <span class="chem">I(x) = e^{int 2 dx} = e^{2x}</span>.',
        'Multiply through to get <span class="chem">d/dx(y e^{2x}) = 6 e^{3x} => y e^{2x} = 2 e^{3x} + C</span>. Apply <span class="chem">y(0) = 5</span> to find <span class="chem">C = 3</span>.'
      ],
      solution: '<p>Multiplying by <span class="chem">I(x) = e^{2x}</span> gives <span class="chem">d/dx(y e^{2x}) = 6 e^{3x}</span>, so <span class="chem">y e^{2x} = 2 e^{3x} + C</span>. At <span class="chem">(0, 5)</span>: <span class="chem">5 = 2 + C => C = 3</span>, giving <span class="chem">y = 2e^x + 3e^{-2x}</span>. At <span class="chem">x = ln 2</span>: <span class="chem">y = 2(2) + 3(1/4) = 4.75</span>.</p>'
    },
    {
      id: 't5-4-q010',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'mcq',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.19',
      marks: 2,
      stem: '<p>What are the first two non-zero terms in the Maclaurin series expansion of <span class="chem">f(x) = ln(1 + 2x) - 2x</span>?</p>',
      options: [
        '<span class="chem">-2x^2 + (8/3)x^3</span>',
        '<span class="chem">-x^2 + (2/3)x^3</span>',
        '<span class="chem">-2x^2 + (4/3)x^3</span>',
        '<span class="chem">2x^2 - (8/3)x^3</span>'
      ],
      answer: 0,
      misconception: {
        1: 'Remember to replace <span class="chem">x</span> with <span class="chem">2x</span> inside the brackets: <span class="chem">(2x)^2/2 = 2x^2</span> and <span class="chem">(2x)^3/3 = (8/3)x^3</span>.',
        2: 'In <span class="chem">ln(1 + u)</span>, the <span class="chem">u^3</span> term is divided by <span class="chem">3</span>, not <span class="chem">3! = 6</span>.',
        3: 'The signs in <span class="chem">ln(1 + u) = u - u^2/2 + u^3/3 - ...</span> alternate starting with <span class="chem">+u</span>, so the <span class="chem">x^2</span> term is negative.'
      },
      hints: [
        'Substitute <span class="chem">u = 2x</span> into <span class="chem">ln(1 + u) = u - u^2/2 + u^3/3 - ...</span>, then subtract <span class="chem">2x</span>.'
      ],
      solution: '<p><span class="chem">ln(1 + 2x) - 2x = (2x - (2x)^2/2 + (2x)^3/3 - ...) - 2x = -2x^2 + (8/3)x^3 - ...</span>.</p>'
    },
    {
      id: 't5-4-q011',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.18',
      marks: 5,
      stem: '<p>A fish population <span class="chem">P(t)</span> satisfies the logistic differential equation <span class="chem">dP/dt = 0.002 P(500 - P)</span>, where <span class="chem">t</span> is in years and <span class="chem">P(0) = 100</span>. Find the population <span class="chem">P(2)</span> correct to 3 significant figures.</p>',
      answer: 324.39282214,
      answerDisplay: '324',
      tolerance: '0.5%',
      sigfigs: 3,
      hints: [
        'Use partial fractions <span class="chem">500 / (P(500 - P)) = 1/P + 1/(500 - P)</span> to separate variables: <span class="chem">int (1/P + 1/(500 - P)) dP = int 1 dt</span>.',
        'Solve to get <span class="chem">P(t) = 500 / (1 + A e^{-t})</span>, find <span class="chem">A = 4</span> from <span class="chem">P(0) = 100</span>, and evaluate at <span class="chem">t = 2</span>.'
      ],
      solution: '<p>Separating variables gives <span class="chem">ln(P / (500 - P)) = t + C => P(t) = 500 / (1 + A e^{-t})</span>. With <span class="chem">P(0) = 100</span>, <span class="chem">1 + A = 5 => A = 4</span>. Thus <span class="chem">P(2) = 500 / (1 + 4e^{-2}) ≈ 324</span>.</p>'
    },
    {
      id: 't5-4-q012',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.19',
      marks: 4,
      stem: '<p>Find the exact coefficient of <span class="chem">x^3</span> in the Maclaurin series expansion of <span class="chem">g(x) = e^{2x} sin(x)</span>. (You can enter an exact fraction like <span class="mono">7/4</span>.)</p>',
      answer: 11 / 6,
      answerDisplay: '11/6 ≈ 1.83',
      exact: true,
      answerInput: '11/6',
      hints: [
        'Write <span class="chem">e^{2x} = 1 + 2x + 2x^2 + (4/3)x^3 + ...</span> and <span class="chem">sin x = x - x^3/6 + ...</span>.',
        'Multiply the two polynomials and collect all terms that give <span class="chem">x^3</span>.'
      ],
      solution: '<p><span class="chem">e^{2x} sin x = (1 + 2x + 2x^2 + ...)(x - x^3/6 + ...)</span>. The <span class="chem">x^3</span> coefficient is <span class="chem">1(-1/6) + 2(1) = 11/6 ≈ 1.83</span>.</p>'
    },
    {
      id: 't5-4-q013',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'mcq',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.19',
      marks: 2,
      stem: '<p>Use the Maclaurin series for <span class="chem">sin x</span> to evaluate <span class="chem">lim_{x->0} (sin x - x + x^3/6) / x^5</span>.</p>',
      options: [
        '<span class="chem">1 / 120</span>',
        '<span class="chem">-1 / 120</span>',
        '<span class="chem">1 / 24</span>',
        '<span class="chem">0</span>'
      ],
      answer: 0,
      misconception: {
        1: 'The signs in <span class="chem">sin x = x - x^3/3! + x^5/5! - ...</span> alternate, so the <span class="chem">x^5</span> term is positive (<span class="chem">+x^5/120</span>).',
        2: '<span class="chem">5! = 120</span>, whereas <span class="chem">4! = 24</span>.',
        3: 'After <span class="chem">x</span> and <span class="chem">-x^3/6</span> cancel, the leading term in the numerator is <span class="chem">x^5/120</span>, which cancels <span class="chem">x^5</span> in the denominator.'
      },
      hints: [
        'Substitute <span class="chem">sin x = x - x^3/6 + x^5/120 - ...</span> into the numerator.'
      ],
      solution: '<p><span class="chem">sin x - x + x^3/6 = x^5/120 - x^7/5040 + ...</span>. Dividing by <span class="chem">x^5</span> and letting <span class="chem">x -> 0</span> gives <span class="chem">1/120</span>.</p>'
    },
    {
      id: 't5-4-q014',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.18',
      marks: 7,
      stem: '<p>Consider the differential equation <span class="chem">x (dy/dx) - 2y = x^3 cos(x)</span> for <span class="chem">x &gt; 0</span>, with <span class="chem">y(pi) = 0</span>.</p><p>(a) Find the integrating factor for this differential equation. <strong>[3 marks]</strong></p><p>(b) Hence solve the differential equation to find <span class="chem">y</span> in terms of <span class="chem">x</span>. <strong>[4 marks]</strong></p>',
      answer: '<p>(a) Dividing by <span class="chem">x</span> gives <span class="chem">dy/dx - (2/x)y = x^2 cos(x)</span>, so <span class="chem">P(x) = -2/x</span>. The integrating factor is <span class="chem">I(x) = e^{int (-2/x) dx} = e^{-2 ln x} = x^{-2}</span>.</p><p>(b) Multiplying by <span class="chem">x^{-2}</span> gives <span class="chem">d/dx(x^{-2} y) = cos(x)</span>. Integrating gives <span class="chem">x^{-2} y = sin(x) + C</span>. Since <span class="chem">y(pi) = 0</span>, <span class="chem">0 = sin(pi) + C => C = 0</span>, so <span class="chem">y = x^2 sin(x)</span>.</p>',
      markscheme: [
        'M1: divides by <span class="chem">x</span> to write <span class="chem">dy/dx - (2/x)y = x^2 cos x</span>.',
        'M1: uses <span class="chem">I(x) = e^{int -2/x dx} = e^{-2 ln x}</span>.',
        'A1: <span class="chem">I(x) = x^{-2}</span> (or <span class="chem">1/x^2</span>).',
        'M1: writes <span class="chem">d/dx(x^{-2} y) = cos x</span>.',
        'A1: integrates to <span class="chem">x^{-2} y = sin x + C</span> (must include <span class="chem">+ C</span>).',
        'M1: substitutes <span class="chem">x = pi, y = 0</span> to find <span class="chem">C = 0</span>.',
        'A1: <span class="chem">y = x^2 sin x</span>.'
      ],
      hints: [
        'Divide by <span class="chem">x</span> first so the coefficient of <span class="chem">dy/dx</span> is <span class="chem">1</span>.',
        'Use <span class="chem">e^{-2 ln x} = e^{ln(x^{-2})} = x^{-2}</span>.'
      ]
    },

    /* --- Challenge --- */
    {
      id: 't5-4-q015',
      topic: 't5-4',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.19',
      marks: 5,
      stem: '<p>Let <span class="chem">y(x)</span> be the solution to <span class="chem">dy/dx = y^2 - x</span> with <span class="chem">y(0) = 1</span>. Find the exact coefficient of <span class="chem">x^3</span> in the Maclaurin series expansion of <span class="chem">y(x)</span>. (You can enter an exact fraction like <span class="mono">3/5</span>.)</p>',
      answer: 2 / 3,
      answerDisplay: '2/3 ≈ 0.667',
      exact: true,
      answerInput: '2/3',
      hints: [
        'Decode: the DE gives the derivatives of <span class="chem">y</span> at <span class="chem">x = 0</span> one after another, so build the Maclaurin coefficients from <span class="chem">y(0)</span>, <span class="chem">y\'(0)</span>, <span class="chem">y\'\'(0)</span> and <span class="chem">y\'\'\'(0)</span> by implicit differentiation. The <span class="chem">x^3</span> coefficient is <span class="chem">y\'\'\'(0)/3!</span>.',
        'Find <span class="chem">y\'(0) = 1^2 - 0 = 1</span>, then differentiate implicitly: <span class="chem">y\'\' = 2y y\' - 1</span>.',
        'Differentiate again: <span class="chem">y\'\'\' = 2(y\')^2 + 2y y\'\'</span>, evaluate <span class="chem">y\'\'\'(0)</span>, and divide by <span class="chem">3! = 6</span>.'
      ],
      solution: '<p><span class="chem">y(0) = 1</span> and <span class="chem">y\'(0) = 1</span>. Differentiating gives <span class="chem">y\'\' = 2y y\' - 1 => y\'\'(0) = 2(1)(1) - 1 = 1</span>, and <span class="chem">y\'\'\' = 2(y\')^2 + 2y y\'\' => y\'\'\'(0) = 2(1)^2 + 2(1)(1) = 4</span>. The coefficient of <span class="chem">x^3</span> is <span class="chem">4 / 3! = 2/3</span>.</p>'
    },
    {
      id: 't5-4-q016',
      topic: 't5-4',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.18',
      marks: 6,
      stem: '<p>Solve the homogeneous differential equation <span class="chem">dy/dx = (x^2 + y^2) / (2xy)</span> (<span class="chem">x &gt; 0, y &gt; 0</span>) given <span class="chem">y(1) = 2</span>, and find the exact value of <span class="chem">y(4)</span>. (Enter an exact expression such as <span class="mono">3*sqrt(2)</span>.)</p>',
      answer: 2 * Math.sqrt(7),
      answerDisplay: '2√7 ≈ 5.29',
      exact: true,
      answerInput: '2*sqrt(7)',
      hints: [
        'Decode: divide the top and bottom by <span class="chem">x^2</span>: the right-hand side depends only on <span class="chem">y/x</span>, so the DE is homogeneous and the substitution <span class="chem">y = vx</span> works.',
        'Substitute <span class="chem">y = vx</span>: <span class="chem">v + x(dv/dx) = (1 + v^2)/(2v) => x(dv/dx) = (1 - v^2)/(2v)</span>.',
        'Separate variables: <span class="chem">int 2v / (1 - v^2) dv = int (1/x) dx => -ln|1 - v^2| = ln x + C</span>.'
      ],
      solution: '<p>Setting <span class="chem">y = vx</span> gives <span class="chem">x(dv/dx) = (1 - v^2)/(2v)</span>, so <span class="chem">int 2v/(v^2 - 1) dv = int (-1/x) dx => ln|v^2 - 1| = -ln x + C => v^2 - 1 = A/x</span>. At <span class="chem">(1, 2)</span>, <span class="chem">v = 2 => A = 3</span>, giving <span class="chem">y^2 = x^2 + 3x</span>. Hence <span class="chem">y(4) = sqrt(16 + 12) = 2 sqrt(7) ≈ 5.29</span>.</p>'
    },
    {
      id: 't5-4-q017',
      topic: 't5-4',
      level: 'ahl',
      tier: 'challenge',
      type: 'mcq',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.19',
      marks: 2,
      stem: '<p>Find the Maclaurin series expansion of <span class="chem">f(x) = e^{sin x}</span> up to and including the term in <span class="chem">x^3</span>.</p>',
      options: [
        '<span class="chem">1 + x + (1/2)x^2</span> (the <span class="chem">x^3</span> coefficient is <span class="chem">0</span>)',
        '<span class="chem">1 + x + (1/2)x^2 + (1/6)x^3</span>',
        '<span class="chem">1 + x + (1/2)x^2 - (1/6)x^3</span>',
        '<span class="chem">1 + x + (1/2)x^2 + (1/3)x^3</span>'
      ],
      answer: 0,
      misconception: {
        1: 'You forgot the <span class="chem">-x^3/6</span> term inside <span class="chem">sin x = x - x^3/6 + ...</span>, which cancels <span class="chem">+x^3/6</span> from <span class="chem">u^3/3!</span>.',
        2: 'You included <span class="chem">-x^3/6</span> from <span class="chem">sin x</span> but forgot <span class="chem">+u^3/3!</span> from the exponential series.',
        3: 'Check the sign: <span class="chem">-1/6 + 1/6 = 0</span>, not <span class="chem">1/3</span>.'
      },
      hints: [
        'Decode: <span class="chem">e^{sin x}</span> is a composite function, so substitute one known series into another (<span class="chem">e^u</span> with <span class="chem">u = sin x</span>) instead of differentiating three times.',
        'Substitute <span class="chem">u = sin x = x - x^3/6 + ...</span> into <span class="chem">e^u = 1 + u + u^2/2! + u^3/3! + ...</span> and drop terms above <span class="chem">x^3</span>.'
      ],
      solution: '<p><span class="chem">e^{sin x} = 1 + (x - x^3/6) + (x - ...)^2/2 + (x - ...)^3/6 + ... = 1 + x + (1/2)x^2 + (-1/6 + 1/6)x^3 + ... = 1 + x + (1/2)x^2</span> up to <span class="chem">x^3</span>.</p>'
    },
    {
      id: 't5-4-q018',
      topic: 't5-4',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.18–5.19',
      marks: 8,
      stem: '<p>Consider the differential equation <span class="chem">dy/dx + 2xy = 1</span> with <span class="chem">y(0) = 0</span>.</p><p>(a) Using an integrating factor, show that <span class="chem">y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>. <strong>[3 marks]</strong></p><p>(b) By using the Maclaurin series for <span class="chem">e^{t^2}</span> (or by implicit differentiation of the DE), find the Maclaurin series for <span class="chem">y(x)</span> up to and including the term in <span class="chem">x^5</span>. <strong>[5 marks]</strong></p>',
      answer: '<p>(a) The integrating factor is <span class="chem">I(x) = e^{int 2x dx} = e^{x^2}</span>. Multiplying gives <span class="chem">d/dx(y e^{x^2}) = e^{x^2}</span>. Integrating from <span class="chem">0</span> to <span class="chem">x</span> using <span class="chem">y(0) = 0</span> gives <span class="chem">y(x) e^{x^2} = int_0^x e^{t^2} dt => y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>.</p><p>(b) <span class="chem">int_0^x e^{t^2} dt = int_0^x (1 + t^2 + t^4/2 + ...) dt = x + x^3/3 + x^5/10 + ...</span>. Multiplying by <span class="chem">e^{-x^2} = 1 - x^2 + x^4/2 - ...</span> gives <span class="chem">y(x) = x + (1/3 - 1)x^3 + (1/10 - 1/3 + 1/2)x^5 + ... = x - (2/3)x^3 + (4/15)x^5 + ...</span>.</p>',
      markscheme: [
        'M1: integrating factor <span class="chem">I(x) = e^{int 2x dx} = e^{x^2}</span>.',
        'A1: <span class="chem">d/dx(y e^{x^2}) = e^{x^2}</span>.',
        'A1: integrates from <span class="chem">0</span> to <span class="chem">x</span> using <span class="chem">y(0) = 0</span>: <span class="chem">y(x) e^{x^2} = int_0^x e^{t^2} dt</span>. AG: <span class="chem">y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>; the given line itself earns no mark.',
        'M1: expands <span class="chem">e^{t^2} = 1 + t^2 + t^4/2 + ...</span> and integrates term by term to <span class="chem">x + x^3/3 + x^5/10</span> (or differentiates DE implicitly up to <span class="chem">y^{(5)}(0)</span>).',
        'M1: multiplies by <span class="chem">e^{-x^2} = 1 - x^2 + x^4/2 - ...</span> (or substitutes derivatives into Maclaurin formula).',
        'A1: first term <span class="chem">x</span>.',
        'A1: <span class="chem">-(2/3)x^3</span>.',
        'A1: <span class="chem">(4/15)x^5</span>.'
      ],
      hints: [
        'Decode: (a) is a linear DE, so use an integrating factor. In (b), the solution is <span class="chem">e^{-x^2}</span> times an integral that cannot be found exactly, so write both factors as series and multiply.',
        'In part (a), integrating <span class="chem">d/dt(y(t) e^{t^2}) = e^{t^2}</span> from <span class="chem">t = 0</span> to <span class="chem">t = x</span> immediately incorporates <span class="chem">y(0) = 0</span>.',
        'In part (b), you can either integrate the series for <span class="chem">e^{t^2}</span> and multiply by <span class="chem">e^{-x^2}</span>, or differentiate <span class="chem">y\' = 1 - 2xy</span> repeatedly at <span class="chem">x = 0</span>.'
      ]
    },
    {
      id: 't5-4-q019',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.19',
      marks: 4,
      stem: '<p>Use the Maclaurin series for <span class="chem">(1 + x)^p</span> to find the coefficient of <span class="chem">x^2</span> in the Maclaurin series of <span class="chem">f(x) = sqrt(1 + 4x)</span>.</p>',
      answer: -2,
      exact: true,
      answerInput: '-2',
      hints: [
        'Write <span class="chem">sqrt(1 + 4x) = (1 + u)^{1/2}</span> with <span class="chem">u = 4x</span>.',
        'Use <span class="chem">(1 + u)^p = 1 + pu + (p(p - 1)/2!) u^2 + ...</span> with <span class="chem">p = 1/2</span>.'
      ],
      solution: '<p>With <span class="chem">p = 1/2</span> and <span class="chem">u = 4x</span>, the <span class="chem">x^2</span> term is <span class="chem">((1/2)(-1/2)/2!)(4x)^2 = (-1/8)(16x^2) = -2x^2</span>, so the coefficient is <span class="chem">-2</span>. The series <span class="chem">1 + 2x - 2x^2 + ...</span> is valid for <span class="chem">|4x| &lt; 1</span>, that is <span class="chem">|x| &lt; 1/4</span>.</p>'
    },
    /* --- New items (2026-11): Paper 2 (GDC) --- */
    {
      id: 't5-4-q020',
      topic: 't5-4',
      level: 'ahl',
      tier: 'foundation',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.18',
      marks: 3,
      stem: '<p>The function <span class="chem">y(x)</span> satisfies <span class="chem">dy/dx = sqrt(x + y)</span> with <span class="chem">y(1) = 2</span>. Use Euler’s method with step size <span class="chem">h = 0.1</span> to estimate <span class="chem">y(1.5)</span>. Carry full calculator accuracy from one step to the next and give your answer correct to 3 significant figures.</p>',
      answer: 2.9421130787,
      sigfigs: 3,
      hints: [
        'Five steps take you from <span class="chem">x = 1</span> to <span class="chem">x = 1.5</span>. Each step is <span class="chem">y_{n+1} = y_n + 0.1 sqrt(x_n + y_n)</span>, <span class="chem">x_{n+1} = x_n + 0.1</span>.',
        'On the GDC, store the values: start with <span class="chem">x = 1, y = 2</span>, then repeat “<span class="chem">y + 0.1 sqrt(x + y) -> y</span>, <span class="chem">x + 0.1 -> x</span>” five times. The first step gives <span class="chem">y_1 = 2 + 0.1 sqrt(3) = 2.1732…</span>'
      ],
      solution: '<p>With <span class="chem">y_{n+1} = y_n + 0.1 sqrt(x_n + y_n)</span>:</p><p><span class="chem">x = 1.1: y_1 = 2.17321</span>; <span class="chem">x = 1.2: y_2 = 2.35413</span>; <span class="chem">x = 1.3: y_3 = 2.54265</span>; <span class="chem">x = 1.4: y_4 = 2.73868</span>; <span class="chem">x = 1.5: y_5 = 2.94211</span> (values shown to 5 d.p., full accuracy carried).</p><p>So <span class="chem">y(1.5) ≈ 2.94</span>.</p>'
    },
    {
      id: 't5-4-q021',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.18',
      marks: 12,
      stem: '<p>Consider the differential equation <span class="chem">dy/dx = x e^{-y}</span> with <span class="chem">y(0) = 0</span>.</p><p>(a) Use Euler’s method with step size <span class="chem">h = 0.2</span> to estimate <span class="chem">y(1)</span>. Write each <span class="chem">y_n</span> correct to 4 decimal places, but use full calculator accuracy in the next step. <strong>[4 marks]</strong></p><p>(b) Solve the differential equation to find <span class="chem">y</span> in terms of <span class="chem">x</span>. <strong>[4 marks]</strong></p><p>(c) Find the percentage error of your estimate in part (a). <strong>[2 marks]</strong></p><p>(d) By finding <span class="chem">d^2y/dx^2</span>, explain why the Euler estimate is an underestimate. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">y_{n+1} = y_n + 0.2 x_n e^{-y_n}</span>. Table: <span class="chem">x = 0.2: y_1 = 0</span>; <span class="chem">x = 0.4: y_2 = 0.0400</span>; <span class="chem">x = 0.6: y_3 = 0.1169</span>; <span class="chem">x = 0.8: y_4 = 0.2236</span>; <span class="chem">x = 1: y_5 = 0.3516</span>. So <span class="chem">y(1) ≈ 0.352</span>.</p><p>(b) <span class="chem">int e^y dy = int x dx => e^y = x^2/2 + C</span>. At <span class="chem">(0, 0)</span>, <span class="chem">C = 1</span>, so <span class="chem">y = ln(1 + x^2/2)</span>.</p><p>(c) Exact <span class="chem">y(1) = ln 1.5 = 0.405465…</span>. Percentage error <span class="chem">= |0.351566 - 0.405465| / 0.405465 × 100 ≈ 13.3%</span>.</p><p>(d) <span class="chem">d^2y/dx^2 = e^{-y} - x e^{-y} (dy/dx) = e^{-y}(1 - x^2 e^{-y})</span>. On the solution curve <span class="chem">x^2 e^{-y} = x^2/(1 + x^2/2) &lt; 1</span> for <span class="chem">0 &lt;= x &lt;= 1</span>, so <span class="chem">d^2y/dx^2 &gt; 0</span>: the curve is concave up, its tangent lines lie below it, and each Euler step lands below the curve.</p>',
      markscheme: [
        'M1: uses <span class="chem">y_{n+1} = y_n + 0.2 x_n e^{-y_n}</span> with <span class="chem">x_{n+1} = x_n + 0.2</span>.',
        'A1: <span class="chem">y_1 = 0</span> and <span class="chem">y_2 = 0.0400</span>.',
        'A1: <span class="chem">y_3 = 0.1169</span> and <span class="chem">y_4 = 0.2236</span>.',
        'A1: <span class="chem">y(1) ≈ 0.3516</span> (accept 0.352).',
        'M1: separates variables: <span class="chem">int e^y dy = int x dx</span>.',
        'A1: <span class="chem">e^y = x^2/2 + C</span>.',
        'M1: uses <span class="chem">y(0) = 0</span> to get <span class="chem">C = 1</span>.',
        'A1: <span class="chem">y = ln(1 + x^2/2)</span>.',
        'M1: exact value <span class="chem">ln 1.5 = 0.405…</span> used in <span class="chem">|approx - exact| / exact × 100</span>.',
        'A1: <span class="chem">13.3%</span>.',
        'A1: <span class="chem">d^2y/dx^2 = e^{-y}(1 - x^2 e^{-y})</span> (or equivalent).',
        'R1: <span class="chem">d^2y/dx^2 &gt; 0</span> on <span class="chem">[0, 1]</span>, so the curve is concave up and the tangent steps lie below it.'
      ],
      hints: [
        'Decode: (a) is a GDC Euler table, (b) is a separable DE, (c) compares the two, and (d) asks for the sign of the second derivative (concavity).',
        'For (b), multiply both sides by <span class="chem">e^y</span>: <span class="chem">e^y (dy/dx) = x</span>.',
        'For (d), differentiate <span class="chem">x e^{-y}</span> with the product rule and the chain rule, then substitute <span class="chem">dy/dx = x e^{-y}</span>.'
      ]
    },
    {
      id: 't5-4-q022',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.18',
      marks: 5,
      stem: '<p>A pie is taken out of an oven at <span class="chem">90</span> °C and left in a kitchen kept at <span class="chem">20</span> °C. Its temperature <span class="chem">T</span> °C after <span class="chem">t</span> minutes falls at a rate proportional to the difference between its temperature and the kitchen temperature. After 5 minutes the pie is at <span class="chem">70</span> °C. Find how many minutes after it leaves the oven the pie reaches <span class="chem">40</span> °C. Give your answer correct to 3 significant figures.</p>',
      answer: 18.616141722,
      sigfigs: 3,
      hints: [
        'Decode: “rate proportional to the difference” means <span class="chem">dT/dt = -k(T - 20)</span> with <span class="chem">k &gt; 0</span>. This is a separable DE; use the two data points to find the constant and <span class="chem">k</span>.',
        'Separating gives <span class="chem">ln|T - 20| = -kt + C</span>, so <span class="chem">T = 20 + 70 e^{-kt}</span>.',
        'Use <span class="chem">T(5) = 70</span>: <span class="chem">50 = 70 e^{-5k}</span>, so <span class="chem">k = (1/5) ln 1.4</span>. Then solve <span class="chem">20 + 70 e^{-kt} = 40</span>.'
      ],
      solution: '<p><span class="chem">dT/dt = -k(T - 20) => int 1/(T - 20) dT = int -k dt => T = 20 + A e^{-kt}</span>. From <span class="chem">T(0) = 90</span>, <span class="chem">A = 70</span>. From <span class="chem">T(5) = 70</span>, <span class="chem">e^{-5k} = 5/7</span>, so <span class="chem">k = (1/5) ln(7/5) = 0.067294…</span>.</p><p>Then <span class="chem">70 e^{-kt} = 20 => t = ln(3.5)/k = 5 ln 3.5 / ln 1.4 ≈ 18.6</span> minutes.</p>'
    },
    {
      id: 't5-4-q023',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.18',
      marks: 14,
      stem: '<p>The number of rabbits <span class="chem">N</span> on an island <span class="chem">t</span> years after 150 were released is modelled by <span class="chem">dN/dt = 0.4N(1 - N/2000)</span>, <span class="chem">N(0) = 150</span>.</p><p>(a) Show that <span class="chem">N = 2000 / (1 + A e^{-0.4t})</span>, and find the exact value of <span class="chem">A</span>. <strong>[5 marks]</strong></p><p>(b) Find the time at which the number of rabbits reaches 1500. <strong>[2 marks]</strong></p><p>(c) Find the value of <span class="chem">N</span> at which the population grows fastest, and the time at which this happens. <strong>[3 marks]</strong></p><p>(d) Use Euler’s method with <span class="chem">h = 0.5</span> to estimate <span class="chem">N(1)</span>, and find the percentage error of this estimate. Carry full calculator accuracy throughout. <strong>[4 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">dN/dt = 0.4N(2000 - N)/2000</span>, so <span class="chem">int 2000/(N(2000 - N)) dN = int 0.4 dt</span>. Since <span class="chem">2000/(N(2000 - N)) = 1/N + 1/(2000 - N)</span>, <span class="chem">ln(N/(2000 - N)) = 0.4t + C</span>. So <span class="chem">(2000 - N)/N = A e^{-0.4t}</span>, giving <span class="chem">N = 2000/(1 + A e^{-0.4t})</span>. At <span class="chem">t = 0</span>: <span class="chem">150 = 2000/(1 + A)</span>, so <span class="chem">A = 37/3</span>.</p><p>(b) <span class="chem">1 + (37/3)e^{-0.4t} = 4/3 => e^{-0.4t} = 1/37 => t = ln(37)/0.4 ≈ 9.03</span> years.</p><p>(c) <span class="chem">dN/dt = 0.4N - 0.0002N^2</span> is a quadratic in <span class="chem">N</span> with its maximum at <span class="chem">N = 1000</span>. Then <span class="chem">(37/3)e^{-0.4t} = 1 => t = ln(37/3)/0.4 ≈ 6.28</span> years.</p><p>(d) <span class="chem">N_1 = 150 + 0.5(0.4)(150)(1 - 150/2000) = 177.75</span>; <span class="chem">N_2 = 177.75 + 0.5(0.4)(177.75)(1 - 177.75/2000) = 210.14…</span>. So <span class="chem">N(1) ≈ 210</span>. Exact <span class="chem">N(1) = 2000/(1 + (37/3)e^{-0.4}) = 215.81…</span>, so the percentage error is <span class="chem">≈ 2.63%</span>.</p>',
      markscheme: [
        'M1: separates variables: <span class="chem">int 1/(N(1 - N/2000)) dN = int 0.4 dt</span> (or equivalent).',
        'M1: uses partial fractions <span class="chem">1/N + 1/(2000 - N)</span>.',
        'A1: <span class="chem">ln N - ln(2000 - N) = 0.4t + C</span>.',
        'A1: rearranges to <span class="chem">(2000 - N)/N = A e^{-0.4t}</span>. AG: <span class="chem">N = 2000/(1 + A e^{-0.4t})</span>; the given line itself earns no mark.',
        'A1: <span class="chem">A = 37/3</span> from <span class="chem">N(0) = 150</span>.',
        'M1: sets <span class="chem">2000/(1 + (37/3)e^{-0.4t}) = 1500</span> (or uses a GDC intersection).',
        'A1: <span class="chem">t = 9.03</span> years.',
        'R1: <span class="chem">dN/dt</span> is a quadratic in <span class="chem">N</span> (concave down) with vertex at the midpoint of its roots <span class="chem">0</span> and <span class="chem">2000</span>.',
        'A1: <span class="chem">N = 1000</span>.',
        'A1: <span class="chem">t = 6.28</span> years.',
        'M1: one correct Euler step: <span class="chem">N_1 = 177.75</span>.',
        'A1: <span class="chem">N(1) ≈ 210</span> (210.14).',
        'M1: exact <span class="chem">N(1) = 215.8…</span> used in the percentage error formula.',
        'A1: <span class="chem">2.63%</span> (accept 2.69% from the rounded estimate 210).'
      ],
      hints: [
        'Decode: this is the logistic model. (a) is a separable DE needing partial fractions; (c) means “maximise <span class="chem">dN/dt</span>”, not “maximise <span class="chem">N</span>”.',
        'Write <span class="chem">1/(N(1 - N/2000)) = 2000/(N(2000 - N))</span> and split it into partial fractions.',
        'In (c), <span class="chem">dN/dt</span> as a function of <span class="chem">N</span> is a downward parabola: where is its vertex?'
      ]
    },
    {
      id: 't5-4-q024',
      topic: 't5-4',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.18',
      marks: 7,
      stem: '<p>A patient is given a drug through a drip. At time <span class="chem">t</span> hours after the drip starts, the drip delivers the drug at a rate of <span class="chem">4e^{-0.05t}</span> mg per hour, and the body removes the drug at a rate of <span class="chem">0.25A</span> mg per hour, where <span class="chem">A</span> mg is the amount of drug in the body. There is no drug in the body at the start. Find the greatest amount of the drug in the body, in mg, correct to 3 significant figures.</p>',
      answer: 10.699844880,
      sigfigs: 3,
      hints: [
        'Decode: “rate in minus rate out” gives the DE <span class="chem">dA/dt = 4e^{-0.05t} - 0.25A</span>, <span class="chem">A(0) = 0</span>. It is linear, so use an integrating factor; then maximise <span class="chem">A(t)</span>.',
        'Write <span class="chem">dA/dt + 0.25A = 4e^{-0.05t}</span>. The integrating factor is <span class="chem">e^{0.25t}</span>, so <span class="chem">d/dt(A e^{0.25t}) = 4e^{0.2t}</span>.',
        'You should get <span class="chem">A = 20(e^{-0.05t} - e^{-0.25t})</span>. Find its maximum with the GDC, or solve <span class="chem">dA/dt = 0</span>.'
      ],
      solution: '<p><strong>Decode:</strong> the amount changes at (rate in) − (rate out), so <span class="chem">dA/dt = 4e^{-0.05t} - 0.25A</span>, a linear first-order DE; “greatest amount” means maximise its solution.</p><p>Integrating factor <span class="chem">e^{0.25t}</span>: <span class="chem">d/dt(A e^{0.25t}) = 4e^{0.2t} => A e^{0.25t} = 20e^{0.2t} + C</span>. With <span class="chem">A(0) = 0</span>, <span class="chem">C = -20</span>, so <span class="chem">A = 20(e^{-0.05t} - e^{-0.25t})</span>.</p><p><span class="chem">dA/dt = 0 => 0.05e^{-0.05t} = 0.25e^{-0.25t} => e^{0.2t} = 5 => t = 5 ln 5 ≈ 8.05</span> h. Then <span class="chem">A = 20(5^{-1/4} - 5^{-5/4}) = 16 × 5^{-1/4} ≈ 10.7</span> mg.</p>'
    },
    {
      id: 't5-4-q025',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.19',
      marks: 7,
      stem: '<p>(a) Use the Maclaurin series for <span class="chem">e^x</span> to write down the Maclaurin series for <span class="chem">e^{-x^2}</span> up to and including the term in <span class="chem">x^6</span>. <strong>[2 marks]</strong></p><p>(b) Hence find an approximate value for <span class="chem">int_0^{0.8} e^{-x^2} dx</span>, giving your answer correct to 4 decimal places. <strong>[3 marks]</strong></p><p>(c) Use your GDC to find the percentage error of your approximation in part (b). <strong>[2 marks]</strong></p>',
      answer: '<p>(a) Replacing <span class="chem">x</span> by <span class="chem">-x^2</span>: <span class="chem">e^{-x^2} = 1 - x^2 + x^4/2 - x^6/6 + …</span></p><p>(b) <span class="chem">int_0^{0.8} (1 - x^2 + x^4/2 - x^6/6) dx = [x - x^3/3 + x^5/10 - x^7/42]_0^{0.8} = 0.8 - 0.170667 + 0.032768 - 0.004993 = 0.6571</span> (4 d.p.).</p><p>(c) GDC: <span class="chem">int_0^{0.8} e^{-x^2} dx = 0.657670…</span>. Percentage error <span class="chem">= |0.657108 - 0.657670| / 0.657670 × 100 ≈ 0.0854%</span>.</p>',
      markscheme: [
        'M1: substitutes <span class="chem">-x^2</span> for <span class="chem">x</span> in the series for <span class="chem">e^x</span>.',
        'A1: <span class="chem">1 - x^2 + x^4/2 - x^6/6</span>.',
        'M1: integrates the polynomial term by term.',
        'A1: <span class="chem">[x - x^3/3 + x^5/10 - x^7/42]_0^{0.8}</span>.',
        'A1: <span class="chem">0.6571</span>.',
        'A1: GDC value <span class="chem">0.657670…</span>.',
        'A1: percentage error <span class="chem">0.0854%</span> (accept 0.085%, or 0.0866% from the rounded estimate 0.6571).'
      ],
      hints: [
        'Decode: you cannot integrate <span class="chem">e^{-x^2}</span> by hand, so turn it into a polynomial first and integrate that.',
        'Put <span class="chem">u = -x^2</span> in <span class="chem">e^u = 1 + u + u^2/2! + u^3/3! + …</span>.',
        'Percentage error <span class="chem">= |approximate - exact| / exact × 100</span>, with the GDC value as “exact”.'
      ]
    },
    {
      id: 't5-4-q026',
      topic: 't5-4',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.19',
      marks: 5,
      stem: '<p>An engineer models small angles by replacing <span class="chem">cos x</span> with the quadratic <span class="chem">1 - x^2/2</span>, where <span class="chem">x</span> is in radians. She will accept the model only while the error <span class="chem">|cos x - (1 - x^2/2)|</span> is less than <span class="chem">0.001</span>. Find the largest value of <span class="chem">a</span> such that the error is less than <span class="chem">0.001</span> for all <span class="chem">0 &lt; x &lt; a</span>. Give your answer correct to 3 significant figures.</p>',
      answer: 0.39410761905,
      sigfigs: 3,
      hints: [
        'Decode: <span class="chem">1 - x^2/2</span> is the degree-2 Maclaurin polynomial of <span class="chem">cos x</span>. You need the first positive <span class="chem">x</span> at which the error reaches <span class="chem">0.001</span>.',
        'The next term of the series is <span class="chem">x^4/24</span>, so the error is about <span class="chem">x^4/24</span>. This gives a first estimate <span class="chem">x ≈ (0.024)^{1/4}</span>.',
        'Now solve <span class="chem">cos x - 1 + x^2/2 = 0.001</span> with the GDC (graph both sides and find the intersection). The error increases for <span class="chem">x &gt; 0</span>, so the first intersection is the answer.'
      ],
      solution: '<p><strong>Decode:</strong> “largest <span class="chem">a</span> with error below 0.001 for all <span class="chem">0 &lt; x &lt; a</span>” means the first positive solution of error = 0.001. Here <span class="chem">1 - x^2/2</span> is the Maclaurin polynomial of degree 2.</p><p>Since <span class="chem">cos x = 1 - x^2/2 + x^4/24 - …</span>, the error <span class="chem">cos x - (1 - x^2/2) ≈ x^4/24</span>, which is positive and increasing for small <span class="chem">x &gt; 0</span>. Estimate: <span class="chem">x^4/24 = 0.001 => x ≈ 0.394</span>.</p><p>GDC: solving <span class="chem">cos x - 1 + x^2/2 = 0.001</span> gives <span class="chem">x = 0.394108…</span>, so <span class="chem">a ≈ 0.394</span>.</p>'
    },
    {
      id: 't5-4-q027',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.18',
      marks: 10,
      stem: '<p>Consider <span class="chem">dy/dx = y/x + x/y</span> for <span class="chem">x &gt; 0, y &gt; 0</span>, with <span class="chem">y(1) = 1</span>.</p><p>(a) Use Euler’s method with <span class="chem">h = 0.1</span> to estimate <span class="chem">y(1.5)</span>. Carry full calculator accuracy and give your answer correct to 4 significant figures. <strong>[3 marks]</strong></p><p>(b) Use the substitution <span class="chem">y = vx</span> to show that <span class="chem">y = x sqrt(2 ln x + 1)</span>. <strong>[5 marks]</strong></p><p>(c) Find the percentage error of your estimate in part (a), using its unrounded value. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">y_{n+1} = y_n + 0.1(y_n/x_n + x_n/y_n)</span>: <span class="chem">y_1 = 1.2</span>, <span class="chem">y_2 = 1.40076</span>, <span class="chem">y_3 = 1.60316</span>, <span class="chem">y_4 = 1.80757</span>, <span class="chem">y_5 = 2.01413</span>. So <span class="chem">y(1.5) ≈ 2.014</span>.</p><p>(b) <span class="chem">y = vx => dy/dx = v + x(dv/dx)</span>. Then <span class="chem">v + x(dv/dx) = v + 1/v => v (dv/dx) = 1/x</span>. Integrating, <span class="chem">v^2/2 = ln x + C</span>. At <span class="chem">(1, 1)</span>, <span class="chem">v = 1</span>, so <span class="chem">C = 1/2</span>. Then <span class="chem">y^2/x^2 = 2 ln x + 1</span>, and since <span class="chem">x, y &gt; 0</span>, <span class="chem">y = x sqrt(2 ln x + 1)</span>.</p><p>(c) Exact <span class="chem">y(1.5) = 1.5 sqrt(2 ln 1.5 + 1) = 2.018562…</span>. Percentage error <span class="chem">= |2.014129 - 2.018562| / 2.018562 × 100 ≈ 0.220%</span>.</p>',
      markscheme: [
        'M1: uses <span class="chem">y_{n+1} = y_n + 0.1(y_n/x_n + x_n/y_n)</span>.',
        'A1: at least two correct intermediate values (e.g. <span class="chem">y_1 = 1.2</span>, <span class="chem">y_2 = 1.4008</span>).',
        'A1: <span class="chem">y(1.5) ≈ 2.014</span>.',
        'M1: substitutes <span class="chem">y = vx</span> and <span class="chem">dy/dx = v + x(dv/dx)</span>.',
        'A1: <span class="chem">x(dv/dx) = 1/v</span>.',
        'M1: separates and integrates: <span class="chem">int v dv = int (1/x) dx</span>.',
        'A1: <span class="chem">v^2/2 = ln x + C</span>.',
        'A1: <span class="chem">C = 1/2</span> from <span class="chem">y(1) = 1</span>, giving <span class="chem">y^2 = x^2(2 ln x + 1)</span>. AG: <span class="chem">y = x sqrt(2 ln x + 1)</span>; the given line itself earns no mark.',
        'M1: exact value <span class="chem">2.0186</span> used in the percentage error formula.',
        'A1: <span class="chem">0.220%</span> (accept 0.226% from the rounded value 2.014).'
      ],
      hints: [
        'Decode: the right-hand side depends only on <span class="chem">y/x</span>, so the DE is homogeneous: (b) is the <span class="chem">y = vx</span> method, and (a) is a GDC Euler table.',
        'After substituting, the <span class="chem">v</span> terms cancel and you are left with <span class="chem">x(dv/dx) = 1/v</span>.'
      ]
    },
    {
      id: 't5-4-q028',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.18, 5.19',
      marks: 11,
      stem: '<p>The function <span class="chem">y(x)</span> satisfies <span class="chem">dy/dx = x^2 + y^2</span> and <span class="chem">y(0) = 1</span>.</p><p>(a) Find the Maclaurin series for <span class="chem">y(x)</span> up to and including the term in <span class="chem">x^3</span>. <strong>[5 marks]</strong></p><p>(b) Hence estimate <span class="chem">y(0.2)</span>. <strong>[1 mark]</strong></p><p>(c) Use Euler’s method with <span class="chem">h = 0.1</span> to estimate <span class="chem">y(0.2)</span>. <strong>[3 marks]</strong></p><p>(d) A numerical solver gives <span class="chem">y(0.2) = 1.2530</span> to 4 decimal places. State which estimate is more accurate, and give a reason for the size of the Euler error. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">y\'(0) = 0 + 1 = 1</span>. <span class="chem">y\'\' = 2x + 2y y\'</span>, so <span class="chem">y\'\'(0) = 2</span>. <span class="chem">y\'\'\' = 2 + 2(y\')^2 + 2y y\'\'</span>, so <span class="chem">y\'\'\'(0) = 2 + 2 + 4 = 8</span>. Hence <span class="chem">y ≈ 1 + x + (2/2!)x^2 + (8/3!)x^3 = 1 + x + x^2 + (4/3)x^3</span>.</p><p>(b) <span class="chem">y(0.2) ≈ 1 + 0.2 + 0.04 + (4/3)(0.008) = 1.2507</span> (to 4 d.p.).</p><p>(c) <span class="chem">y_1 = 1 + 0.1(0 + 1) = 1.1</span>; <span class="chem">y_2 = 1.1 + 0.1(0.01 + 1.21) = 1.222</span>.</p><p>(d) The series estimate (error about 0.002) is more accurate than Euler (error about 0.031). Euler follows tangent lines; the solution is concave up (<span class="chem">y\'\' &gt; 0</span>) and steep, so the tangent steps fall below the curve, and with only two large steps the error builds up.</p>',
      markscheme: [
        'A1: <span class="chem">y\'(0) = 1</span>.',
        'M1: differentiates implicitly: <span class="chem">y\'\' = 2x + 2y y\'</span>.',
        'A1: <span class="chem">y\'\'(0) = 2</span>.',
        'A1: <span class="chem">y\'\'\'(0) = 8</span> (from <span class="chem">y\'\'\' = 2 + 2(y\')^2 + 2y y\'\'</span>).',
        'A1: <span class="chem">1 + x + x^2 + (4/3)x^3</span>.',
        'A1: <span class="chem">y(0.2) ≈ 1.2507</span> (accept 1.25).',
        'M1: uses <span class="chem">y_{n+1} = y_n + 0.1(x_n^2 + y_n^2)</span>.',
        'A1: <span class="chem">y_1 = 1.1</span>.',
        'A1: <span class="chem">y_2 = 1.222</span>.',
        'A1: states that the Maclaurin estimate is more accurate.',
        'R1: the solution is concave up, so the Euler tangent steps lie below the curve (underestimate), and the error grows with the step size.'
      ],
      hints: [
        'Decode: (a) is a Maclaurin series built from the DE by repeated implicit differentiation; (c) is Euler with two steps.',
        'Differentiate <span class="chem">y\' = x^2 + y^2</span> with respect to <span class="chem">x</span>: <span class="chem">d/dx(y^2) = 2y y\'</span>.',
        'For <span class="chem">y\'\'\'</span>, differentiate <span class="chem">2y y\'</span> with the product rule.'
      ]
    },
    {
      id: 't5-4-q029',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.18',
      marks: 5,
      stem: '<p>The function <span class="chem">y(x)</span> satisfies <span class="chem">dy/dx = (1 + y^2) e^{-x}</span> and <span class="chem">y(0) = 0</span>. Find <span class="chem">y(2)</span>, giving your answer correct to 3 significant figures.</p>',
      answer: 1.1725740464,
      sigfigs: 3,
      hints: [
        'The DE is separable: <span class="chem">int 1/(1 + y^2) dy = int e^{-x} dx</span>.',
        'This gives <span class="chem">arctan y = -e^{-x} + C</span>. Use <span class="chem">y(0) = 0</span> to find <span class="chem">C</span>.',
        'Make sure your GDC is in radian mode when you evaluate <span class="chem">tan</span>.'
      ],
      solution: '<p><span class="chem">int 1/(1 + y^2) dy = int e^{-x} dx => arctan y = -e^{-x} + C</span>. At <span class="chem">(0, 0)</span>: <span class="chem">0 = -1 + C => C = 1</span>. So <span class="chem">y = tan(1 - e^{-x})</span>, and <span class="chem">y(2) = tan(1 - e^{-2}) ≈ 1.17</span> (radians).</p>'
    },
    {
      id: 't5-4-q030',
      topic: 't5-4',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.18',
      marks: 6,
      stem: '<p>An upright cylindrical water tank has internal radius <span class="chem">0.8</span> m. Water leaks from a small hole in its base, so that the volume of water in the tank decreases at a rate of <span class="chem">0.04 sqrt(h)</span> m<sup>3</sup> per minute, where <span class="chem">h</span> m is the depth of the water. At first the water is <span class="chem">1.8</span> m deep. Find the time, in minutes, for the depth of the water to fall to half its initial value. Give your answer correct to 3 significant figures.</p>',
      answer: 39.504395484,
      sigfigs: 3,
      hints: [
        'Decode: the rate is given for the volume <span class="chem">V</span>, but the question is about the depth <span class="chem">h</span>. Write <span class="chem">V = pi (0.8)^2 h</span>, turn <span class="chem">dV/dt</span> into <span class="chem">dh/dt</span>, then solve a separable DE.',
        '<span class="chem">dV/dt = 0.64 pi (dh/dt) = -0.04 sqrt(h)</span>, so <span class="chem">dh/dt = -sqrt(h)/(16 pi)</span>.',
        'Separate: <span class="chem">int h^{-1/2} dh = int -1/(16 pi) dt</span>, giving <span class="chem">2 sqrt(h) = -t/(16 pi) + C</span>. Find <span class="chem">C</span> from <span class="chem">h(0) = 1.8</span>, then set <span class="chem">h = 0.9</span>.'
      ],
      solution: '<p><strong>Decode:</strong> the given rate is <span class="chem">dV/dt</span> (and it is a decrease, so it is negative); the question asks about <span class="chem">h</span>, and “half its initial value” means <span class="chem">h = 0.9</span>.</p><p><span class="chem">V = 0.64 pi h => 0.64 pi (dh/dt) = -0.04 sqrt(h) => dh/dt = -sqrt(h)/(16 pi)</span>.</p><p><span class="chem">int h^{-1/2} dh = -int 1/(16 pi) dt => 2 sqrt(h) = 2 sqrt(1.8) - t/(16 pi)</span>.</p><p>At <span class="chem">h = 0.9</span>: <span class="chem">t = 32 pi (sqrt(1.8) - sqrt(0.9)) ≈ 39.5</span> minutes.</p>'
    },
    {
      id: 't5-4-q031',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.18',
      marks: 6,
      stem: '<p>The function <span class="chem">y(x)</span> satisfies <span class="chem">dy/dx + y = sin x</span> and <span class="chem">y(0) = 1</span>. You may use the result <span class="chem">int e^x sin x dx = (1/2) e^x (sin x - cos x) + C</span>. Find the smallest positive value of <span class="chem">x</span> for which <span class="chem">y = 0</span>. Give your answer correct to 3 significant figures.</p>',
      answer: 3.9671523817,
      sigfigs: 3,
      hints: [
        'The integrating factor is <span class="chem">e^{int 1 dx} = e^x</span>, so <span class="chem">d/dx(y e^x) = e^x sin x</span>.',
        'Use the given integral, then <span class="chem">y(0) = 1</span>. You should reach <span class="chem">y = (1/2)(sin x - cos x) + (3/2)e^{-x}</span>.',
        'Graph <span class="chem">y</span> on the GDC for <span class="chem">x &gt; 0</span> and find the first zero.'
      ],
      solution: '<p>With the integrating factor <span class="chem">e^x</span>: <span class="chem">y e^x = (1/2)e^x(sin x - cos x) + C</span>. At <span class="chem">x = 0</span>: <span class="chem">1 = -1/2 + C => C = 3/2</span>. So <span class="chem">y = (1/2)(sin x - cos x) + (3/2)e^{-x}</span>.</p><p>GDC: the first positive zero is <span class="chem">x = 3.96715… ≈ 3.97</span>.</p>'
    },
    {
      id: 't5-4-q032',
      topic: 't5-4',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.18',
      marks: 12,
      stem: '<p>A skydiver jumps from a helicopter that is not moving. Her downward speed <span class="chem">v</span> m s<sup>−1</sup> after <span class="chem">t</span> seconds is modelled by <span class="chem">dv/dt = 9 - 0.0036v^2</span>, with <span class="chem">v(0) = 0</span>.</p><p>(a) Write down the speed she approaches as <span class="chem">t</span> increases (her terminal speed). <strong>[1 mark]</strong></p><p>(b) Show that <span class="chem">int 1/(2500 - v^2) dv = (1/100) ln((50 + v)/(50 - v)) + C</span> for <span class="chem">0 &lt;= v &lt; 50</span>. <strong>[3 marks]</strong></p><p>(c) Hence show that <span class="chem">v = 50(1 - e^{-0.36t})/(1 + e^{-0.36t})</span>. <strong>[4 marks]</strong></p><p>(d) Find the time taken to reach 90% of her terminal speed. <strong>[2 marks]</strong></p><p>(e) Find the distance she falls in this time. <strong>[2 marks]</strong></p>',
      answer: '<p><strong>Decode:</strong> “terminal speed” is where the speed stops changing, <span class="chem">dv/dt = 0</span>; the DE is separable with a partial-fraction integral; distance is the integral of speed.</p><p>(a) <span class="chem">9 - 0.0036v^2 = 0 => v = 50</span> m s<sup>−1</sup>.</p><p>(b) <span class="chem">1/(2500 - v^2) = 1/((50 - v)(50 + v)) = (1/100)(1/(50 - v) + 1/(50 + v))</span>. Integrating: <span class="chem">(1/100)(-ln(50 - v) + ln(50 + v)) + C = (1/100) ln((50 + v)/(50 - v)) + C</span>.</p><p>(c) <span class="chem">dv/dt = 0.0036(2500 - v^2)</span>, so <span class="chem">int 1/(2500 - v^2) dv = int 0.0036 dt</span>: <span class="chem">(1/100) ln((50 + v)/(50 - v)) = 0.0036t + C</span>, and <span class="chem">v(0) = 0</span> gives <span class="chem">C = 0</span>. So <span class="chem">(50 + v)/(50 - v) = e^{0.36t}</span>, <span class="chem">v(1 + e^{0.36t}) = 50(e^{0.36t} - 1)</span>, and dividing top and bottom by <span class="chem">e^{0.36t}</span> gives the result.</p><p>(d) <span class="chem">v = 45 => (95/5) = e^{0.36t} => t = ln(19)/0.36 ≈ 8.18</span> s.</p><p>(e) <span class="chem">int_0^{8.179} v dt ≈ 231</span> m (GDC).</p>',
      markscheme: [
        'A1: <span class="chem">v = 50</span> m s<sup>−1</sup>.',
        'M1: factorises <span class="chem">2500 - v^2 = (50 - v)(50 + v)</span> and writes partial fractions.',
        'A1: <span class="chem">(1/100)(1/(50 - v) + 1/(50 + v))</span>.',
        'A1: integrates to <span class="chem">(1/100)(ln(50 + v) - ln(50 - v))</span>, including the sign from <span class="chem">int 1/(50 - v) dv = -ln(50 - v)</span>. AG: <span class="chem">(1/100) ln((50 + v)/(50 - v)) + C</span>; the given line itself earns no mark.',
        'M1: writes <span class="chem">dv/dt = 0.0036(2500 - v^2)</span> and separates variables.',
        'A1: <span class="chem">(1/100) ln((50 + v)/(50 - v)) = 0.0036t + C</span> with <span class="chem">C = 0</span>.',
        'M1: exponentiates: <span class="chem">(50 + v)/(50 - v) = e^{0.36t}</span>.',
        'A1: rearranges to <span class="chem">v = 50(e^{0.36t} - 1)/(e^{0.36t} + 1)</span>. AG: <span class="chem">v = 50(1 - e^{-0.36t})/(1 + e^{-0.36t})</span>; the given line itself earns no mark.',
        'M1: sets <span class="chem">v = 45</span>.',
        'A1: <span class="chem">t = 8.18</span> s.',
        'M1: distance <span class="chem">= int_0^{8.18} v dt</span>.',
        'A1: <span class="chem">231</span> m.'
      ],
      hints: [
        'Decode: “terminal speed” means the speed at which <span class="chem">dv/dt = 0</span>; “distance fallen” means integrate the speed.',
        'Take out the factor: <span class="chem">9 - 0.0036v^2 = 0.0036(2500 - v^2)</span>.',
        'For (e), use the GDC to integrate <span class="chem">v(t)</span> from <span class="chem">0</span> to your answer to (d) (use its unrounded value).'
      ]
    },
    {
      id: 't5-4-q033',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.19',
      marks: 5,
      stem: '<p>The cube root of 10 can be written as <span class="chem">10^{1/3} = 2(1 + 1/4)^{1/3}</span>. Use the first three terms of the Maclaurin series for <span class="chem">(1 + x)^{1/3}</span> to estimate <span class="chem">10^{1/3}</span>. Find the percentage error of this estimate compared with the GDC value of <span class="chem">10^{1/3}</span>, correct to 3 significant figures.</p>',
      answer: 0.076907054169,
      sigfigs: 3,
      unit: '%',
      hints: [
        'Decode: you need two numbers, the series estimate and the calculator value, and then the percentage error between them. The factor 2 appears because <span class="chem">10 = 8 × 1.25</span>.',
        'Use <span class="chem">(1 + x)^p = 1 + px + (p(p - 1)/2!)x^2 + …</span> with <span class="chem">p = 1/3</span> and <span class="chem">x = 1/4</span>.',
        'You should get the estimate <span class="chem">2(1 + 1/12 - 1/144) = 2.15278</span>. Compare it with the GDC value of <span class="chem">10^{1/3}</span>.'
      ],
      solution: '<p><span class="chem">(1 + x)^{1/3} ≈ 1 + (1/3)x + ((1/3)(-2/3)/2)x^2 = 1 + x/3 - x^2/9</span>. With <span class="chem">x = 1/4</span>: <span class="chem">1 + 1/12 - 1/144 = 155/144</span>, so the estimate is <span class="chem">2 × 155/144 = 2.152778</span>.</p><p>GDC: <span class="chem">10^{1/3} = 2.154435</span>. Percentage error <span class="chem">= |2.152778 - 2.154435| / 2.154435 × 100 ≈ 0.0769%</span>.</p>'
    },
    {
      id: 't5-4-q034',
      topic: 't5-4',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.18',
      marks: 6,
      stem: '<p>The differential equation <span class="chem">dy/dx = -y</span>, <span class="chem">y(0) = 1</span>, is solved approximately with Euler’s method, using <span class="chem">n</span> equal steps from <span class="chem">x = 0</span> to <span class="chem">x = 1</span>. Find the least value of <span class="chem">n</span> for which the Euler estimate of <span class="chem">y(1)</span> is within <span class="chem">0.005</span> of the exact value.</p>',
      answer: 38,
      hints: [
        'Decode: you need a formula for the Euler estimate in terms of <span class="chem">n</span> (with <span class="chem">h = 1/n</span>), the exact value <span class="chem">y(1)</span>, and then the least integer <span class="chem">n</span> that meets the condition.',
        'Each step is <span class="chem">y_{k+1} = y_k + h(-y_k) = (1 - h)y_k</span>, so after <span class="chem">n</span> steps the estimate is <span class="chem">(1 - 1/n)^n</span>. The exact solution is <span class="chem">y = e^{-x}</span>.',
        'Tabulate <span class="chem">e^{-1} - (1 - 1/n)^n</span> on the GDC and find the first <span class="chem">n</span> for which it is less than <span class="chem">0.005</span>.'
      ],
      solution: '<p><strong>Decode:</strong> Euler’s steps here form a geometric sequence, so the estimate has a closed form in <span class="chem">n</span>; “least <span class="chem">n</span>” means search a GDC table.</p><p><span class="chem">y_{k+1} = (1 - 1/n)y_k => y_n = (1 - 1/n)^n</span>. Exact: <span class="chem">y(1) = e^{-1} = 0.367879…</span>.</p><p>GDC table of <span class="chem">e^{-1} - (1 - 1/n)^n</span>: <span class="chem">n = 37</span> gives <span class="chem">0.005028…</span> (too big), <span class="chem">n = 38</span> gives <span class="chem">0.004894…</span>. So the least <span class="chem">n</span> is <span class="chem">38</span>.</p>'
    },
    {
      id: 't5-4-q035',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.19',
      marks: 4,
      stem: '<p>Since <span class="chem">arctan(1/sqrt(3)) = pi/6</span>, it follows that <span class="chem">pi = 6 arctan(1/sqrt(3))</span>. Use the first four non-zero terms of the Maclaurin series for <span class="chem">arctan x</span> to find an estimate for <span class="chem">pi</span>, correct to 5 significant figures.</p>',
      answer: 3.1378528916,
      sigfigs: 5,
      hints: [
        'The first four non-zero terms are <span class="chem">x - x^3/3 + x^5/5 - x^7/7</span>.',
        'Substitute <span class="chem">x = 1/sqrt(3)</span> (store it in the GDC), then multiply the result by 6.'
      ],
      solution: '<p>With <span class="chem">x = 1/sqrt(3) = 0.577350…</span>: <span class="chem">x - x^3/3 + x^5/5 - x^7/7 = 0.577350 - 0.064150 + 0.012830 - 0.003055 = 0.522975…</span>. Multiplying by 6 gives <span class="chem">pi ≈ 3.1379</span> (5 s.f.).</p>'
    },
    {
      id: 't5-4-q036',
      topic: 't5-4',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.18',
      marks: 11,
      stem: '<p>A cup of coffee at <span class="chem">85</span> °C is placed in a room whose heating has just been switched on. The room temperature <span class="chem">t</span> minutes later is <span class="chem">(18 + 0.5t)</span> °C. The coffee’s temperature <span class="chem">T</span> °C changes at a rate equal to <span class="chem">0.2</span> times the difference between the room temperature and the coffee temperature.</p><p>(a) Show that <span class="chem">dT/dt + 0.2T = 3.6 + 0.1t</span>. <strong>[1 mark]</strong></p><p>(b) Use an integrating factor to show that <span class="chem">T = 15.5 + 0.5t + 69.5e^{-0.2t}</span>. <strong>[6 marks]</strong></p><p>(c) Find the time at which the coffee reaches <span class="chem">50</span> °C. <strong>[2 marks]</strong></p><p>(d) Find the time at which the coffee and the room are at the same temperature. <strong>[2 marks]</strong></p>',
      answer: '<p><strong>Decode:</strong> the room temperature is not constant, so this is not the usual separable cooling model: it becomes a linear DE that needs an integrating factor and integration by parts.</p><p>(a) <span class="chem">dT/dt = 0.2((18 + 0.5t) - T) = 3.6 + 0.1t - 0.2T</span>, which rearranges to the result.</p><p>(b) IF <span class="chem">= e^{0.2t}</span>: <span class="chem">d/dt(T e^{0.2t}) = (3.6 + 0.1t)e^{0.2t}</span>. <span class="chem">int 3.6e^{0.2t} dt = 18e^{0.2t}</span>; by parts, <span class="chem">int 0.1t e^{0.2t} dt = 0.5t e^{0.2t} - 2.5e^{0.2t}</span>. So <span class="chem">T e^{0.2t} = (15.5 + 0.5t)e^{0.2t} + C</span>, <span class="chem">T = 15.5 + 0.5t + C e^{-0.2t}</span>, and <span class="chem">T(0) = 85</span> gives <span class="chem">C = 69.5</span>.</p><p>(c) GDC: <span class="chem">15.5 + 0.5t + 69.5e^{-0.2t} = 50 => t ≈ 3.78</span> minutes.</p><p>(d) <span class="chem">T - (18 + 0.5t) = 69.5e^{-0.2t} - 2.5 = 0 => t = 5 ln(27.8) ≈ 16.6</span> minutes.</p>',
      markscheme: [
        'A1: writes <span class="chem">dT/dt = 0.2(18 + 0.5t - T)</span> and expands. AG: <span class="chem">dT/dt + 0.2T = 3.6 + 0.1t</span>; the given line itself earns no mark.',
        'M1: integrating factor <span class="chem">e^{int 0.2 dt} = e^{0.2t}</span>.',
        'A1: <span class="chem">d/dt(T e^{0.2t}) = (3.6 + 0.1t)e^{0.2t}</span>.',
        'M1: uses integration by parts on <span class="chem">int t e^{0.2t} dt</span>.',
        'A1: <span class="chem">int 0.1t e^{0.2t} dt = 0.5t e^{0.2t} - 2.5e^{0.2t}</span>.',
        'A1: <span class="chem">T e^{0.2t} = (15.5 + 0.5t)e^{0.2t} + C</span>.',
        'A1: <span class="chem">C = 69.5</span> from <span class="chem">T(0) = 85</span>. AG: <span class="chem">T = 15.5 + 0.5t + 69.5e^{-0.2t}</span>; the given line itself earns no mark.',
        'M1: sets <span class="chem">T = 50</span> and solves with the GDC.',
        'A1: <span class="chem">t = 3.78</span> minutes.',
        'M1: sets <span class="chem">T = 18 + 0.5t</span>, i.e. <span class="chem">69.5e^{-0.2t} = 2.5</span>.',
        'A1: <span class="chem">t = 16.6</span> minutes.'
      ],
      hints: [
        'Decode: “rate equal to 0.2 times (room − coffee)” gives <span class="chem">dT/dt = 0.2(18 + 0.5t - T)</span>. Because the room temperature depends on <span class="chem">t</span>, use the integrating factor method.',
        'The integrating factor is <span class="chem">e^{0.2t}</span>. You need <span class="chem">int t e^{0.2t} dt</span> by parts, with <span class="chem">u = t</span>.',
        'For (d), set <span class="chem">T = 18 + 0.5t</span>: the <span class="chem">0.5t</span> terms cancel.'
      ]
    },
    {
      id: 't5-4-q037',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.18',
      marks: 6,
      stem: '<p>In a chemical reaction, the amount <span class="chem">x</span> grams of product formed after <span class="chem">t</span> minutes satisfies <span class="chem">dx/dt = 0.02(5 - x)(3 - x)</span>, with <span class="chem">x(0) = 0</span>. You may use <span class="chem">1/((5 - x)(3 - x)) = (1/2)(1/(3 - x) - 1/(5 - x))</span>. Find the amount of product after 10 minutes, correct to 3 significant figures.</p>',
      answer: 1.6544440817,
      sigfigs: 3,
      hints: [
        'Decode: this is a separable DE; the partial fractions are given. While <span class="chem">0 &lt;= x &lt; 3</span>, both <span class="chem">5 - x</span> and <span class="chem">3 - x</span> are positive.',
        'Integrating gives <span class="chem">(1/2) ln((5 - x)/(3 - x)) = 0.02t + C</span>, with <span class="chem">C = (1/2) ln(5/3)</span>.',
        'So <span class="chem">(5 - x)/(3 - x) = (5/3)e^{0.04t}</span>. Put <span class="chem">t = 10</span> and solve for <span class="chem">x</span>.'
      ],
      solution: '<p><span class="chem">int 1/((5 - x)(3 - x)) dx = int 0.02 dt => (1/2)(-ln(3 - x) + ln(5 - x)) = 0.02t + C</span>. At <span class="chem">t = 0, x = 0</span>: <span class="chem">C = (1/2) ln(5/3)</span>. So <span class="chem">(5 - x)/(3 - x) = (5/3)e^{0.04t}</span>.</p><p>At <span class="chem">t = 10</span>, let <span class="chem">K = (5/3)e^{0.4} = 2.48654…</span>. Then <span class="chem">5 - x = K(3 - x) => x = (3K - 5)/(K - 1) ≈ 1.65</span> g.</p>'
    },
    {
      id: 't5-4-q038',
      topic: 't5-4',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.19',
      marks: 5,
      stem: '<p>A student estimates <span class="chem">sqrt(e)</span> by adding terms of the Maclaurin series for <span class="chem">e^x</span>. Let <span class="chem">P_n(x)</span> be the Maclaurin polynomial of <span class="chem">e^x</span> of degree <span class="chem">n</span>. Find the least value of <span class="chem">n</span> for which <span class="chem">|sqrt(e) - P_n(0.5)| &lt; 10^{-6}</span>.</p>',
      answer: 7,
      hints: [
        'Decode: <span class="chem">sqrt(e) = e^{0.5}</span>, so this asks how many terms of <span class="chem">1 + x + x^2/2! + …</span> at <span class="chem">x = 0.5</span> you need to get within <span class="chem">10^{-6}</span>. Degree <span class="chem">n</span> means the last term is <span class="chem">x^n/n!</span>.',
        'Compute <span class="chem">P_n(0.5) = sum_{k=0}^{n} 0.5^k/k!</span> for increasing <span class="chem">n</span> (a GDC sum or table helps) and compare with the GDC value of <span class="chem">e^{0.5}</span>.',
        'The error is roughly the first term left out, <span class="chem">0.5^{n+1}/(n + 1)!</span>.'
      ],
      solution: '<p><strong>Decode:</strong> <span class="chem">sqrt(e) = e^{0.5}</span>, and “degree <span class="chem">n</span>” means the polynomial stops at <span class="chem">x^n/n!</span>; we need the least <span class="chem">n</span> giving error below <span class="chem">10^{-6}</span>.</p><p>GDC: <span class="chem">e^{0.5} - P_6(0.5) = 1.65 × 10^{-6}</span> (not enough) and <span class="chem">e^{0.5} - P_7(0.5) = 1.03 × 10^{-7}</span>. So <span class="chem">n = 7</span>.</p>'
    },
    {
      id: 't5-4-q039',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.18',
      marks: 9,
      stem: '<p>Consider <span class="chem">dy/dx = x - y^2</span> with <span class="chem">y(0) = 1</span>. In this question, carry full calculator accuracy between steps and give final answers correct to 4 decimal places.</p><p>(a) Use Euler’s method with <span class="chem">h = 0.2</span> to estimate <span class="chem">y(1)</span>. <strong>[3 marks]</strong></p><p>(b) Use Euler’s method with <span class="chem">h = 0.1</span> to estimate <span class="chem">y(1)</span>. <strong>[2 marks]</strong></p><p>(c) A numerical solver gives <span class="chem">y(1) = 0.8334</span> to 4 decimal places. Find the error in each estimate. <strong>[2 marks]</strong></p><p>(d) Comment on how the error changes when the step size is halved. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">y_{n+1} = y_n + 0.2(x_n - y_n^2)</span>: <span class="chem">0.8, 0.712, 0.690611, 0.715222, 0.772914</span>. So <span class="chem">y(1) ≈ 0.7729</span>.</p><p>(b) Ten steps of <span class="chem">y_{n+1} = y_n + 0.1(x_n - y_n^2)</span> give <span class="chem">y(1) ≈ 0.8054</span> (0.805354).</p><p>(c) Errors: <span class="chem">0.8334 - 0.7729 = 0.0605</span> and <span class="chem">0.8334 - 0.8054 = 0.0280</span>.</p><p>(d) Halving <span class="chem">h</span> roughly halves the error (<span class="chem">0.0605/0.0280 ≈ 2.2</span>): the Euler error is roughly proportional to <span class="chem">h</span>. Both estimates are too low.</p>',
      markscheme: [
        'M1: uses <span class="chem">y_{n+1} = y_n + 0.2(x_n - y_n^2)</span>.',
        'A1: correct intermediate values (e.g. <span class="chem">y_1 = 0.8</span>, <span class="chem">y_2 = 0.712</span>).',
        'A1: <span class="chem">y(1) ≈ 0.7729</span>.',
        'M1: ten steps with <span class="chem">h = 0.1</span>.',
        'A1: <span class="chem">y(1) ≈ 0.8054</span>.',
        'A1: error <span class="chem">0.0605</span> for <span class="chem">h = 0.2</span>.',
        'A1: error <span class="chem">0.0280</span> for <span class="chem">h = 0.1</span>.',
        'A1: the error is roughly halved (ratio about 2).',
        'R1: so the error is approximately proportional to the step size <span class="chem">h</span>.'
      ],
      hints: [
        'Decode: two GDC Euler tables (5 steps and 10 steps), then compare each with the given accurate value.',
        'Store <span class="chem">x</span> and <span class="chem">y</span> on the GDC and repeat <span class="chem">y + h(x - y^2) -> y</span>, <span class="chem">x + h -> x</span>.',
        'For (d), divide the larger error by the smaller one.'
      ]
    },
    {
      id: 't5-4-q040',
      topic: 't5-4',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.18',
      marks: 5,
      stem: '<p>A fish farm models the number <span class="chem">P</span> of fish in a lake by <span class="chem">dP/dt = 0.5P(1 - P/1000) - 60</span>, where <span class="chem">t</span> is in years and 60 fish per year are caught. There is a critical starting population <span class="chem">P_c</span>: if <span class="chem">P(0) &lt; P_c</span> the fish eventually die out, and if <span class="chem">P(0)</span> is a little more than <span class="chem">P_c</span> the population survives. Find <span class="chem">P_c</span>, correct to 3 significant figures.</p>',
      answer: 139.44487245,
      sigfigs: 3,
      hints: [
        'Decode: you do not need to solve the DE. Find the constant (equilibrium) solutions, where <span class="chem">dP/dt = 0</span>, and look at the sign of <span class="chem">dP/dt</span> between them.',
        '<span class="chem">dP/dt = 0 => 0.5P - 0.0005P^2 - 60 = 0 => P^2 - 1000P + 120000 = 0</span>. Solve this with the GDC.',
        'Below the smaller root, <span class="chem">dP/dt &lt; 0</span>, so the population keeps falling. Between the roots, <span class="chem">dP/dt &gt; 0</span>.'
      ],
      solution: '<p><strong>Decode:</strong> “critical starting population” is the boundary between falling and rising populations, that is, an equilibrium where <span class="chem">dP/dt = 0</span>.</p><p><span class="chem">P^2 - 1000P + 120000 = 0 => P = 139.44…</span> or <span class="chem">P = 860.55…</span>. <span class="chem">dP/dt</span> is a downward parabola in <span class="chem">P</span>, so <span class="chem">dP/dt &lt; 0</span> for <span class="chem">P &lt; 139.4</span> (decline to extinction) and <span class="chem">dP/dt &gt; 0</span> for <span class="chem">139.4 &lt; P &lt; 860.6</span> (growth towards 860.6). So <span class="chem">P_c ≈ 139</span>.</p>'
    },
    {
      id: 't5-4-q041',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.19',
      marks: 5,
      stem: '<p>Use the first three non-zero terms of the Maclaurin series for <span class="chem">sin x</span> to find a polynomial approximation to <span class="chem">(sin x)/x</span>. Hence estimate <span class="chem">int_0^2 (sin x)/x dx</span>, and find the percentage error of this estimate compared with the value given by your GDC. Give the percentage error correct to 3 significant figures.</p>',
      answer: 0.21651202129,
      sigfigs: 3,
      unit: '%',
      hints: [
        'Divide <span class="chem">x - x^3/6 + x^5/120</span> by <span class="chem">x</span>: <span class="chem">(sin x)/x ≈ 1 - x^2/6 + x^4/120</span>.',
        'Integrate from <span class="chem">0</span> to <span class="chem">2</span>: <span class="chem">[x - x^3/18 + x^5/600]_0^2</span>.',
        'Find the integral of <span class="chem">(sin x)/x</span> with the GDC, then use <span class="chem">|approx - exact| / exact × 100</span>.'
      ],
      solution: '<p><span class="chem">int_0^2 (1 - x^2/6 + x^4/120) dx = 2 - 8/18 + 32/600 = 1.608889</span>. GDC: <span class="chem">int_0^2 (sin x)/x dx = 1.605413</span>. Percentage error <span class="chem">= 0.003476/1.605413 × 100 ≈ 0.217%</span>.</p>'
    },

    /* --- New items (2026-11): Paper 1 (No GDC) --- */
    {
      id: 't5-4-q042',
      topic: 't5-4',
      level: 'ahl',
      tier: 'foundation',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.18',
      marks: 3,
      stem: '<p>The function <span class="chem">y(x)</span> satisfies <span class="chem">dy/dx = xy</span> with <span class="chem">y(1) = 2</span>. Use Euler’s method with step size <span class="chem">h = 0.5</span> to find an estimate for <span class="chem">y(2)</span>.</p>',
      answer: 5.25,
      sigfigs: 3,
      hints: [
        'Two steps of <span class="chem">0.5</span> take you from <span class="chem">x = 1</span> to <span class="chem">x = 2</span>. Use <span class="chem">y_{n+1} = y_n + 0.5 x_n y_n</span>.',
        'First step: <span class="chem">y_1 = 2 + 0.5(1)(2) = 3</span> at <span class="chem">x_1 = 1.5</span>.'
      ],
      solution: '<p><span class="chem">y_1 = 2 + 0.5(1)(2) = 3</span> at <span class="chem">x = 1.5</span>. <span class="chem">y_2 = 3 + 0.5(1.5)(3) = 3 + 2.25 = 5.25</span> at <span class="chem">x = 2</span>. So <span class="chem">y(2) ≈ 5.25</span>.</p>'
    },
    {
      id: 't5-4-q043',
      topic: 't5-4',
      level: 'ahl',
      tier: 'foundation',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.19',
      marks: 2,
      stem: '<p>Find the exact coefficient of <span class="chem">x^4</span> in the Maclaurin series for <span class="chem">cos(3x)</span>.</p>',
      answer: 27 / 8,
      exact: true,
      answerInput: '27/8',
      hints: [
        'Substitute <span class="chem">u = 3x</span> into <span class="chem">cos u = 1 - u^2/2! + u^4/4! - …</span>.',
        'The <span class="chem">x^4</span> term is <span class="chem">(3x)^4/4!</span>. Simplify the fraction.'
      ],
      solution: '<p><span class="chem">(3x)^4/4! = 81x^4/24 = (27/8)x^4</span>, so the coefficient is <span class="chem">27/8</span>.</p>'
    },
    {
      id: 't5-4-q044',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.18',
      marks: 6,
      stem: '<p>Consider the differential equation <span class="chem">dy/dx = e^{x + y}</span> with <span class="chem">y(0) = 0</span>.</p><p>(a) Show that <span class="chem">y = -ln(2 - e^x)</span>. <strong>[4 marks]</strong></p><p>(b) State the largest interval containing <span class="chem">x = 0</span> on which this solution is defined, and justify your answer. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">e^{x + y} = e^x e^y</span>, so <span class="chem">int e^{-y} dy = int e^x dx => -e^{-y} = e^x + C</span>. At <span class="chem">(0, 0)</span>: <span class="chem">-1 = 1 + C => C = -2</span>. So <span class="chem">e^{-y} = 2 - e^x</span>, and <span class="chem">-y = ln(2 - e^x)</span>, giving <span class="chem">y = -ln(2 - e^x)</span>.</p><p>(b) The logarithm needs <span class="chem">2 - e^x &gt; 0</span>, that is <span class="chem">e^x &lt; 2</span>, so <span class="chem">x &lt; ln 2</span>. The interval is <span class="chem">-inf &lt; x &lt; ln 2</span> (as <span class="chem">x -> ln 2</span>, <span class="chem">y -> inf</span>).</p>',
      markscheme: [
        'M1: writes <span class="chem">e^{x + y} = e^x e^y</span> and separates: <span class="chem">int e^{-y} dy = int e^x dx</span>.',
        'A1: <span class="chem">-e^{-y} = e^x + C</span>.',
        'M1: uses <span class="chem">y(0) = 0</span> to find <span class="chem">C = -2</span>.',
        'A1: <span class="chem">e^{-y} = 2 - e^x</span>. AG: <span class="chem">y = -ln(2 - e^x)</span>; the given line itself earns no mark.',
        'R1: requires <span class="chem">2 - e^x &gt; 0</span>.',
        'A1: <span class="chem">x &lt; ln 2</span>.'
      ],
      hints: [
        'Use the index law <span class="chem">e^{x + y} = e^x × e^y</span> to separate the variables.',
        'Remember <span class="chem">int e^{-y} dy = -e^{-y}</span>.'
      ]
    },
    {
      id: 't5-4-q045',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.18',
      marks: 6,
      stem: '<p>The function <span class="chem">y(x)</span>, where <span class="chem">x &gt; 1/2</span> and <span class="chem">y &gt; 0</span>, satisfies <span class="chem">dy/dx = (x^2 + 3y^2)/(2xy)</span> and <span class="chem">y(1) = 1</span>. Find the exact value of <span class="chem">y(2)</span>.</p>',
      answer: 2 * Math.sqrt(3),
      exact: true,
      answerInput: '2*sqrt(3)',
      hints: [
        'Divide the top and bottom by <span class="chem">x^2</span>: the right-hand side depends only on <span class="chem">v = y/x</span>. Substitute <span class="chem">y = vx</span>.',
        'You should get <span class="chem">x(dv/dx) = (1 + v^2)/(2v)</span>.',
        'Separate and integrate: <span class="chem">int 2v/(1 + v^2) dv = int (1/x) dx</span>, so <span class="chem">1 + v^2 = Ax</span>.'
      ],
      solution: '<p><span class="chem">y = vx</span>: <span class="chem">v + x(dv/dx) = (1 + 3v^2)/(2v) => x(dv/dx) = (1 + 3v^2 - 2v^2)/(2v) = (1 + v^2)/(2v)</span>.</p><p><span class="chem">int 2v/(1 + v^2) dv = int (1/x) dx => ln(1 + v^2) = ln x + C => 1 + v^2 = Ax</span>. At <span class="chem">(1, 1)</span>: <span class="chem">A = 2</span>. So <span class="chem">y^2 = x^2(2x - 1)</span>.</p><p><span class="chem">y(2) = sqrt(4 × 3) = 2 sqrt(3)</span>.</p>'
    },
    {
      id: 't5-4-q046',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.18',
      marks: 6,
      stem: '<p>The function <span class="chem">y(x)</span>, for <span class="chem">-pi/2 &lt; x &lt; pi/2</span>, satisfies <span class="chem">dy/dx + y tan x = cos^2 x</span> and <span class="chem">y(0) = 2</span>. Find the exact value of <span class="chem">y(pi/3)</span>.</p>',
      answer: 1 + Math.sqrt(3) / 4,
      exact: true,
      answerInput: '1 + sqrt(3)/4',
      hints: [
        'The integrating factor is <span class="chem">e^{int tan x dx} = e^{-ln(cos x)}</span>. Simplify it.',
        'With <span class="chem">I(x) = sec x</span>: <span class="chem">d/dx(y sec x) = cos^2 x sec x = cos x</span>.',
        'So <span class="chem">y sec x = sin x + C</span>. Find <span class="chem">C</span>, then substitute <span class="chem">x = pi/3</span>.'
      ],
      solution: '<p><span class="chem">I(x) = e^{int tan x dx} = e^{-ln(cos x)} = sec x</span> (since <span class="chem">cos x &gt; 0</span>). Then <span class="chem">d/dx(y sec x) = cos x => y sec x = sin x + C</span>. At <span class="chem">x = 0</span>: <span class="chem">2 = C</span>. So <span class="chem">y = sin x cos x + 2 cos x</span>.</p><p><span class="chem">y(pi/3) = (sqrt(3)/2)(1/2) + 2(1/2) = 1 + sqrt(3)/4</span>.</p>'
    },
    {
      id: 't5-4-q047',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.13, 5.19',
      marks: 6,
      stem: '<p>(a) By substituting the Maclaurin series for <span class="chem">sin x</span> into the series for <span class="chem">ln(1 + u)</span>, show that the Maclaurin series for <span class="chem">ln(1 + sin x)</span> up to and including the term in <span class="chem">x^3</span> is <span class="chem">x - x^2/2 + x^3/6</span>. <strong>[4 marks]</strong></p><p>(b) Hence find <span class="chem">lim_{x->0} (ln(1 + sin x) - x)/x^2</span>. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) With <span class="chem">u = sin x = x - x^3/6 + …</span>: <span class="chem">u^2 = x^2 + …</span> and <span class="chem">u^3 = x^3 + …</span> (up to <span class="chem">x^3</span>). So <span class="chem">ln(1 + sin x) = u - u^2/2 + u^3/3 - … = (x - x^3/6) - x^2/2 + x^3/3 + … = x - x^2/2 + (1/3 - 1/6)x^3 = x - x^2/2 + x^3/6</span>.</p><p>(b) <span class="chem">(ln(1 + sin x) - x)/x^2 = (-x^2/2 + x^3/6 + …)/x^2 = -1/2 + x/6 + … -> -1/2</span>.</p>',
      markscheme: [
        'M1: substitutes <span class="chem">u = sin x</span> into <span class="chem">u - u^2/2 + u^3/3</span>.',
        'A1: <span class="chem">u^2 = x^2 + …</span> (no <span class="chem">x^3</span> term) and <span class="chem">u^3 = x^3 + …</span>.',
        'A1: <span class="chem">x^3</span> terms <span class="chem">-1/6 + 1/3</span> collected.',
        'A1: collects <span class="chem">x - x^2/2 + (1/6)x^3</span> correctly. AG: the given series; the given line itself earns no mark.',
        'M1: substitutes the series and divides by <span class="chem">x^2</span>.',
        'A1: <span class="chem">-1/2</span>.'
      ],
      hints: [
        'Only keep terms up to <span class="chem">x^3</span>: <span class="chem">sin^2 x = x^2 - (1/3)x^4 + …</span>, so its <span class="chem">x^3</span> coefficient is 0.',
        'In (b), the <span class="chem">x</span> terms cancel; what is left starts with <span class="chem">-x^2/2</span>.'
      ]
    },
    {
      id: 't5-4-q048',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.19',
      marks: 7,
      stem: '<p>(a) Use the series for <span class="chem">(1 + x)^p</span> to write down the Maclaurin series for <span class="chem">(1 - x)^{-1}</span>, and state the values of <span class="chem">x</span> for which it is valid. <strong>[2 marks]</strong></p><p>(b) By differentiating your series term by term, show that <span class="chem">(1 - x)^{-2} = 1 + 2x + 3x^2 + … + n x^{n - 1} + …</span>. <strong>[2 marks]</strong></p><p>(c) Hence find the exact value of <span class="chem">sum_{n=1}^{inf} n/3^n</span>. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">p = -1</span>, <span class="chem">x</span> replaced by <span class="chem">-x</span>: <span class="chem">(1 - x)^{-1} = 1 + x + x^2 + x^3 + … + x^n + …</span>, valid for <span class="chem">|x| &lt; 1</span>.</p><p>(b) <span class="chem">d/dx (1 - x)^{-1} = (1 - x)^{-2}</span>, and differentiating each term <span class="chem">x^n</span> gives <span class="chem">n x^{n - 1}</span>: <span class="chem">(1 - x)^{-2} = 1 + 2x + 3x^2 + … + n x^{n - 1} + …</span>.</p><p>(c) <span class="chem">sum_{n=1}^{inf} n/3^n = (1/3) sum_{n=1}^{inf} n (1/3)^{n - 1} = (1/3)(1 - 1/3)^{-2} = (1/3)(9/4) = 3/4</span>, using <span class="chem">x = 1/3</span>, which satisfies <span class="chem">|x| &lt; 1</span>.</p>',
      markscheme: [
        'A1: <span class="chem">1 + x + x^2 + x^3 + …</span>.',
        'A1: valid for <span class="chem">|x| &lt; 1</span>.',
        'M1: differentiates the left side: <span class="chem">d/dx (1 - x)^{-1} = (1 - x)^{-2}</span>.',
        'A1: differentiates each term <span class="chem">x^n -> n x^{n - 1}</span>. AG: the given series; the given line itself earns no mark.',
        'M1: writes <span class="chem">n/3^n = (1/3) n (1/3)^{n - 1}</span>.',
        'M1: substitutes <span class="chem">x = 1/3</span> into <span class="chem">(1 - x)^{-2}</span> (with <span class="chem">|1/3| &lt; 1</span>).',
        'A1: <span class="chem">3/4</span>.'
      ],
      hints: [
        'Decode: (c) looks like a series question from Topic 1, but it is the differentiated series in (b) evaluated at a particular <span class="chem">x</span>.',
        'In <span class="chem">(1 + u)^p = 1 + pu + p(p - 1)u^2/2! + …</span>, put <span class="chem">p = -1</span> and <span class="chem">u = -x</span>.',
        'Take out a factor <span class="chem">1/3</span>: <span class="chem">n/3^n = (1/3) × n (1/3)^{n - 1}</span>.'
      ]
    },
    {
      id: 't5-4-q049',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.19',
      marks: 4,
      stem: '<p>Let <span class="chem">F(x) = int_0^x ln(1 + t)/t dt</span>. By integrating a series term by term, find the exact coefficient of <span class="chem">x^4</span> in the Maclaurin series for <span class="chem">F(x)</span>.</p>',
      answer: -1 / 16,
      exact: true,
      answerInput: '-1/16',
      hints: [
        'Divide the series <span class="chem">ln(1 + t) = t - t^2/2 + t^3/3 - t^4/4 + …</span> by <span class="chem">t</span>.',
        'Then integrate each term from <span class="chem">0</span> to <span class="chem">x</span>. The <span class="chem">x^4</span> term comes from the <span class="chem">t^3</span> term.'
      ],
      solution: '<p><span class="chem">ln(1 + t)/t = 1 - t/2 + t^2/3 - t^3/4 + …</span>. Integrating from 0 to <span class="chem">x</span>: <span class="chem">F(x) = x - x^2/4 + x^3/9 - x^4/16 + …</span>. The coefficient of <span class="chem">x^4</span> is <span class="chem">-1/16</span>.</p>'
    },
    {
      id: 't5-4-q050',
      topic: 't5-4',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.19',
      marks: 6,
      stem: '<p>A curve passes through the origin. At every point <span class="chem">(x, y)</span> on the curve, the gradient is equal to the sum of the <span class="chem">x</span>-coordinate and the sine of the <span class="chem">y</span>-coordinate. Find the exact coefficient of <span class="chem">x^4</span> in the Maclaurin series of the curve’s equation <span class="chem">y = f(x)</span>.</p>',
      answer: 1 / 24,
      exact: true,
      answerInput: '1/24',
      hints: [
        'Decode: the words describe the DE <span class="chem">dy/dx = x + sin y</span> with <span class="chem">y(0) = 0</span>. You need <span class="chem">f^{(4)}(0)/4!</span>, found by repeated implicit differentiation.',
        '<span class="chem">y\'(0) = 0 + sin 0 = 0</span>. Differentiate: <span class="chem">y\'\' = 1 + cos y × y\'</span>, so <span class="chem">y\'\'(0) = 1</span>.',
        'Next, <span class="chem">y\'\'\' = -sin y (y\')^2 + cos y × y\'\'</span>. Differentiate once more, and at <span class="chem">x = 0</span> use <span class="chem">y = 0, y\' = 0</span>: most terms vanish.'
      ],
      solution: '<p><strong>Decode:</strong> “gradient equals <span class="chem">x</span> plus sine of <span class="chem">y</span>” is <span class="chem">dy/dx = x + sin y</span>; “passes through the origin” is <span class="chem">y(0) = 0</span>. Build the series from derivatives at 0.</p><p><span class="chem">y\'(0) = 0</span>. <span class="chem">y\'\' = 1 + cos y y\' => y\'\'(0) = 1</span>. <span class="chem">y\'\'\' = -sin y (y\')^2 + cos y y\'\' => y\'\'\'(0) = 1</span>.</p><p><span class="chem">y^{(4)} = -cos y (y\')^3 - 3 sin y y\' y\'\' + cos y y\'\'\'</span>, so <span class="chem">y^{(4)}(0) = 0 - 0 + 1 = 1</span>.</p><p>The coefficient of <span class="chem">x^4</span> is <span class="chem">1/4! = 1/24</span>.</p>'
    },
    {
      id: 't5-4-q051',
      topic: 't5-4',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.18',
      marks: 9,
      stem: '<p>A curve in the region <span class="chem">x &gt; 0</span> passes through <span class="chem">(1, 0)</span>. At each point <span class="chem">(x, y)</span> of the curve with <span class="chem">x != y</span>, its gradient is <span class="chem">(x + y)/(x - y)</span>.</p><p>(a) Use the substitution <span class="chem">y = vx</span> to show that <span class="chem">int (1 - v)/(1 + v^2) dv = int (1/x) dx</span>. <strong>[3 marks]</strong></p><p>(b) Hence show that the curve has equation <span class="chem">arctan(y/x) = ln sqrt(x^2 + y^2)</span>. <strong>[4 marks]</strong></p><p>(c) The curve meets the line <span class="chem">y = x/sqrt(3)</span> at the point <span class="chem">P</span> in the first quadrant. Find the exact distance from the origin <span class="chem">O</span> to <span class="chem">P</span>. <strong>[2 marks]</strong></p>',
      answer: '<p><strong>Decode:</strong> the gradient is a function of <span class="chem">y/x</span>, so the DE is homogeneous. In (c), <span class="chem">arctan(y/x)</span> is the angle <span class="chem">OP</span> makes with the <span class="chem">x</span>-axis and <span class="chem">sqrt(x^2 + y^2)</span> is the distance <span class="chem">OP</span>.</p><p>(a) <span class="chem">v + x(dv/dx) = (1 + v)/(1 - v) => x(dv/dx) = (1 + v - v + v^2)/(1 - v) = (1 + v^2)/(1 - v)</span>, so <span class="chem">int (1 - v)/(1 + v^2) dv = int (1/x) dx</span>.</p><p>(b) <span class="chem">int 1/(1 + v^2) dv - int v/(1 + v^2) dv = arctan v - (1/2) ln(1 + v^2)</span>. So <span class="chem">arctan v - (1/2) ln(1 + v^2) = ln x + C</span>. At <span class="chem">(1, 0)</span>, <span class="chem">v = 0</span>, so <span class="chem">C = 0</span>. Then <span class="chem">arctan(y/x) = ln x + (1/2) ln((x^2 + y^2)/x^2) = (1/2) ln(x^2 + y^2) = ln sqrt(x^2 + y^2)</span>.</p><p>(c) On <span class="chem">y = x/sqrt(3)</span>, <span class="chem">arctan(y/x) = arctan(1/sqrt(3)) = pi/6</span>. So <span class="chem">ln OP = pi/6</span> and <span class="chem">OP = e^{pi/6}</span>.</p>',
      markscheme: [
        'M1: substitutes <span class="chem">y = vx</span>, <span class="chem">dy/dx = v + x(dv/dx)</span> and divides top and bottom by <span class="chem">x</span>.',
        'A1: <span class="chem">x(dv/dx) = (1 + v^2)/(1 - v)</span>.',
        'A1: separates variables correctly. AG: <span class="chem">int (1 - v)/(1 + v^2) dv = int (1/x) dx</span>; the given line itself earns no mark.',
        'M1: splits into <span class="chem">1/(1 + v^2) - v/(1 + v^2)</span>.',
        'A1: <span class="chem">arctan v - (1/2) ln(1 + v^2) = ln x + C</span>.',
        'A1: <span class="chem">C = 0</span> from <span class="chem">(1, 0)</span>.',
        'A1: combines the logarithms: <span class="chem">ln x + (1/2) ln(1 + y^2/x^2) = (1/2) ln(x^2 + y^2)</span>. AG: <span class="chem">arctan(y/x) = ln sqrt(x^2 + y^2)</span>; the given line itself earns no mark.',
        'M1: uses <span class="chem">y/x = 1/sqrt(3)</span>, so <span class="chem">arctan(y/x) = pi/6</span>, and <span class="chem">OP = sqrt(x^2 + y^2)</span>.',
        'A1: <span class="chem">OP = e^{pi/6}</span>.'
      ],
      hints: [
        'Decode: divide the top and bottom of <span class="chem">(x + y)/(x - y)</span> by <span class="chem">x</span>: the DE is homogeneous, so use <span class="chem">y = vx</span>. In (c), notice what <span class="chem">arctan(y/x)</span> and <span class="chem">sqrt(x^2 + y^2)</span> mean geometrically.',
        'After substituting, subtract <span class="chem">v</span> from both sides and simplify over the common denominator <span class="chem">1 - v</span>.',
        'For <span class="chem">int v/(1 + v^2) dv</span>, the numerator is half the derivative of the denominator.'
      ]
    },
    {
      id: 't5-4-q052',
      topic: 't5-4',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.18',
      marks: 6,
      stem: '<p>A function <span class="chem">f</span> satisfies <span class="chem">f(x) = 1 + int_0^x (f(t) + e^t) dt</span> for all <span class="chem">x ∈ ℝ</span>. Find the exact value of <span class="chem">f(1)</span>.</p>',
      answer: 2 * Math.E,
      exact: true,
      answerInput: '2e',
      hints: [
        'Decode: this is a differential equation in disguise. Differentiate both sides (fundamental theorem of calculus) to get a DE, and put <span class="chem">x = 0</span> to get the initial condition.',
        'Differentiating gives <span class="chem">f\'(x) = f(x) + e^x</span>; at <span class="chem">x = 0</span> the integral is zero, so <span class="chem">f(0) = 1</span>.',
        'Solve <span class="chem">dy/dx - y = e^x</span> with the integrating factor <span class="chem">e^{-x}</span>.'
      ],
      solution: '<p><strong>Decode:</strong> an equation with <span class="chem">f</span> inside an integral with variable upper limit becomes a DE after differentiating; the initial value comes from putting <span class="chem">x = 0</span>.</p><p><span class="chem">f\'(x) = f(x) + e^x</span> and <span class="chem">f(0) = 1 + 0 = 1</span>. With <span class="chem">y = f(x)</span>: <span class="chem">dy/dx - y = e^x</span>, IF <span class="chem">e^{-x}</span>: <span class="chem">d/dx(y e^{-x}) = 1 => y e^{-x} = x + C</span>. <span class="chem">f(0) = 1 => C = 1</span>, so <span class="chem">f(x) = (x + 1)e^x</span>.</p><p><span class="chem">f(1) = 2e</span>.</p>'
    },
    {
      id: 't5-4-q053',
      topic: 't5-4',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.13, 5.19',
      marks: 5,
      stem: '<p>Find the exact value of <span class="chem">lim_{x->inf} x^2 (1 - x sin(1/x))</span>.</p>',
      answer: 1 / 6,
      exact: true,
      answerInput: '1/6',
      hints: [
        'Decode: this is a limit as <span class="chem">x -> inf</span>, but the substitution <span class="chem">u = 1/x</span> turns it into a limit as <span class="chem">u -> 0^+</span>, where Maclaurin series work.',
        'With <span class="chem">u = 1/x</span>: <span class="chem">x^2(1 - x sin(1/x)) = (1 - (sin u)/u)/u^2</span>.',
        'Use <span class="chem">sin u = u - u^3/6 + u^5/120 - …</span>, so <span class="chem">(sin u)/u = 1 - u^2/6 + …</span>.'
      ],
      solution: '<p><strong>Decode:</strong> Maclaurin series only work near 0, so first rewrite the limit at infinity with <span class="chem">u = 1/x -> 0</span>.</p><p><span class="chem">x^2(1 - x sin(1/x)) = (1 - (sin u)/u)/u^2 = (1 - (1 - u^2/6 + u^4/120 - …))/u^2 = 1/6 - u^2/120 + … -> 1/6</span>.</p>'
    },
    {
      id: 't5-4-q054',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.18',
      marks: 12,
      stem: '<p>Consider the differential equation <span class="chem">dy/dx = x^2 - y</span> with <span class="chem">y(0) = 1</span>.</p><p>(a) Use Euler’s method with step size <span class="chem">h = 0.5</span> to find an estimate for <span class="chem">y(1)</span>. <strong>[3 marks]</strong></p><p>(b) Show that <span class="chem">d^2y/dx^2 = 2x - x^2 + y</span>. <strong>[2 marks]</strong></p><p>(c) Hence explain whether the first Euler step gives an overestimate or an underestimate. <strong>[2 marks]</strong></p><p>(d) Use an integrating factor to solve the differential equation, and hence find the exact value of <span class="chem">y(1)</span>. <strong>[5 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">y_1 = 1 + 0.5(0 - 1) = 0.5</span> at <span class="chem">x = 0.5</span>; <span class="chem">y_2 = 0.5 + 0.5(0.25 - 0.5) = 0.375</span>. So <span class="chem">y(1) ≈ 0.375</span>.</p><p>(b) <span class="chem">d^2y/dx^2 = 2x - dy/dx = 2x - (x^2 - y) = 2x - x^2 + y</span>.</p><p>(c) At <span class="chem">(0, 1)</span>, <span class="chem">d^2y/dx^2 = 1 &gt; 0</span>, so the curve is concave up there and lies above its tangent: the first Euler step is an underestimate.</p><p>(d) <span class="chem">dy/dx + y = x^2</span>, IF <span class="chem">e^x</span>: <span class="chem">d/dx(y e^x) = x^2 e^x</span>. By parts twice, <span class="chem">int x^2 e^x dx = (x^2 - 2x + 2)e^x + C</span>. So <span class="chem">y = x^2 - 2x + 2 + C e^{-x}</span>; <span class="chem">y(0) = 1 => C = -1</span>. <span class="chem">y(1) = 1 - 2 + 2 - e^{-1} = 1 - 1/e</span>.</p>',
      markscheme: [
        'M1: uses <span class="chem">y_{n+1} = y_n + 0.5(x_n^2 - y_n)</span>.',
        'A1: <span class="chem">y_1 = 0.5</span>.',
        'A1: <span class="chem">y(1) ≈ 0.375</span>.',
        'M1: differentiates the DE: <span class="chem">d^2y/dx^2 = 2x - dy/dx</span>.',
        'A1: substitutes <span class="chem">dy/dx = x^2 - y</span>. AG: <span class="chem">d^2y/dx^2 = 2x - x^2 + y</span>; the given line itself earns no mark.',
        'A1: <span class="chem">d^2y/dx^2 = 1 &gt; 0</span> at <span class="chem">(0, 1)</span>.',
        'R1: concave up, so the tangent lies below the curve and the step underestimates.',
        'M1: integrating factor <span class="chem">e^x</span> for <span class="chem">dy/dx + y = x^2</span>.',
        'M1: integration by parts (twice) on <span class="chem">int x^2 e^x dx</span>.',
        'A1: <span class="chem">y e^x = (x^2 - 2x + 2)e^x + C</span>.',
        'A1: <span class="chem">C = -1</span>.',
        'A1: <span class="chem">y(1) = 1 - 1/e</span>.'
      ],
      hints: [
        'Decode: (a) is Euler by hand, (b)–(c) use concavity to predict the error, and (d) is a linear DE (integrating factor) needing integration by parts.',
        'In (b), differentiate both sides of <span class="chem">dy/dx = x^2 - y</span> with respect to <span class="chem">x</span>.',
        'In (d), rewrite the DE as <span class="chem">dy/dx + y = x^2</span>. For <span class="chem">int x^2 e^x dx</span>, use parts with <span class="chem">u = x^2</span>, then again with <span class="chem">u = x</span>.'
      ]
    },
    {
      id: 't5-4-q055',
      topic: 't5-4',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.19',
      marks: 4,
      stem: '<p>Find the coefficient of <span class="chem">x^2</span> in the Maclaurin series for <span class="chem">sqrt(1 + 2x) e^{-x}</span>.</p>',
      answer: -1,
      exact: true,
      answerInput: '-1',
      hints: [
        'Use <span class="chem">(1 + u)^{1/2} = 1 + u/2 - u^2/8 + …</span> with <span class="chem">u = 2x</span>: <span class="chem">sqrt(1 + 2x) = 1 + x - x^2/2 + …</span>.',
        'Multiply by <span class="chem">e^{-x} = 1 - x + x^2/2 - …</span> and collect the three products that give <span class="chem">x^2</span>.'
      ],
      solution: '<p><span class="chem">sqrt(1 + 2x) = 1 + x + ((1/2)(-1/2)/2)(2x)^2 + … = 1 + x - x^2/2 + …</span>. Then <span class="chem">(1 + x - x^2/2)(1 - x + x^2/2)</span> has <span class="chem">x^2</span> coefficient <span class="chem">1(1/2) + 1(-1) + (-1/2)(1) = -1</span>.</p>'
    },

    /* --- New items (2026-11): Paper 3 (HL investigations) --- */
    {
      id: 't5-4-q056',
      topic: 't5-4',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 3 (HL Investigation)',
      syllabus: 'AHL 5.18, 5.19',
      marks: 17,
      stem: '<p><strong>How fast does Euler’s method converge?</strong> This investigation looks at the error of Euler’s method for <span class="chem">dy/dx = y</span>, <span class="chem">y(0) = 1</span>, whose exact solution is <span class="chem">y = e^x</span>.</p><p>(a) Euler’s method is used with <span class="chem">n</span> equal steps of size <span class="chem">h = 1/n</span> from <span class="chem">x = 0</span> to <span class="chem">x = 1</span>. Show that the Euler estimate of <span class="chem">y(1)</span> is <span class="chem">(1 + 1/n)^n</span>. <strong>[3 marks]</strong></p><p>Let <span class="chem">E_n = e - (1 + 1/n)^n</span> be the error.</p><p>(b) Use your GDC to calculate <span class="chem">E_n</span> for <span class="chem">n = 10, 100</span> and <span class="chem">1000</span>, giving answers correct to 4 significant figures. <strong>[3 marks]</strong></p><p>(c) Calculate <span class="chem">nE_n</span> for each of these values of <span class="chem">n</span>, and suggest a value for <span class="chem">lim_{n->inf} nE_n</span>. <strong>[2 marks]</strong></p><p>(d) Use the Maclaurin series for <span class="chem">ln(1 + x)</span> to show that <span class="chem">n ln(1 + 1/n) = 1 - 1/(2n) + 1/(3n^2) - …</span>. <strong>[2 marks]</strong></p><p>(e) Hence, by using the Maclaurin series for <span class="chem">e^x</span>, show that <span class="chem">(1 + 1/n)^n = e(1 - 1/(2n) + 11/(24n^2) - …)</span>, and deduce the exact value of <span class="chem">lim_{n->inf} nE_n</span>. <strong>[4 marks]</strong></p><p>(f) Use the approximation <span class="chem">E_n ≈ e/(2n)</span> to estimate the least <span class="chem">n</span> for which <span class="chem">E_n &lt; 0.0005</span>. Use your GDC to find the true least value of <span class="chem">n</span>, and explain the difference using part (e). <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">y_{k+1} = y_k + h y_k = (1 + h) y_k</span>, so <span class="chem">y_k = (1 + h)^k y_0 = (1 + h)^k</span>. After <span class="chem">n</span> steps of <span class="chem">1/n</span> we reach <span class="chem">x = 1</span>: <span class="chem">y(1) ≈ (1 + 1/n)^n</span>.</p><p>(b) <span class="chem">E_{10} = 0.1245</span>, <span class="chem">E_{100} = 0.01347</span>, <span class="chem">E_{1000} = 0.001358</span>.</p><p>(c) <span class="chem">nE_n = 1.245, 1.347, 1.358</span>. The limit appears to be about <span class="chem">1.36</span> (perhaps <span class="chem">e/2 = 1.359…</span>).</p><p>(d) With <span class="chem">x = 1/n</span>: <span class="chem">ln(1 + 1/n) = 1/n - 1/(2n^2) + 1/(3n^3) - …</span>; multiplying by <span class="chem">n</span> gives the result.</p><p>(e) <span class="chem">(1 + 1/n)^n = e^{n ln(1 + 1/n)} = e × e^u</span> with <span class="chem">u = -1/(2n) + 1/(3n^2) - …</span>. <span class="chem">e^u = 1 + u + u^2/2 + … = 1 - 1/(2n) + (1/3 + 1/8)(1/n^2) + … = 1 - 1/(2n) + 11/(24n^2) - …</span>. So <span class="chem">E_n = e/(2n) - 11e/(24n^2) + …</span> and <span class="chem">nE_n = e/2 - 11e/(24n) + … -> e/2</span>.</p><p>(f) <span class="chem">e/(2n) &lt; 0.0005 => n &gt; 1000e = 2718.28…</span>, so the estimate is <span class="chem">n = 2719</span>. GDC: <span class="chem">E_{2718} = 0.00049988… &lt; 0.0005</span> and <span class="chem">E_{2717} &gt; 0.0005</span>, so the true least value is <span class="chem">n = 2718</span>. The next term <span class="chem">-11e/(24n^2)</span> is negative, so <span class="chem">E_n</span> is slightly less than <span class="chem">e/(2n)</span>, and a slightly smaller <span class="chem">n</span> is enough.</p>',
      markscheme: [
        'M1: <span class="chem">y_{k+1} = y_k + h y_k = (1 + h) y_k</span>.',
        'A1: recognises a geometric sequence: <span class="chem">y_k = (1 + h)^k</span>.',
        'A1: <span class="chem">n</span> steps of size <span class="chem">1/n</span> reach <span class="chem">x = 1</span>. AG: <span class="chem">y(1) ≈ (1 + 1/n)^n</span>; the given line itself earns no mark.',
        'A1: <span class="chem">E_{10} = 0.1245</span>.',
        'A1: <span class="chem">E_{100} = 0.01347</span>.',
        'A1: <span class="chem">E_{1000} = 0.001358</span>.',
        'A1: <span class="chem">nE_n = 1.245, 1.347, 1.358</span>.',
        'A1: suggests a limit of about <span class="chem">1.36</span> (accept any value in [1.35, 1.37]).',
        'M1: substitutes <span class="chem">x = 1/n</span> into <span class="chem">x - x^2/2 + x^3/3 - …</span>.',
        'A1: multiplies by <span class="chem">n</span> correctly. AG: <span class="chem">1 - 1/(2n) + 1/(3n^2) - …</span>; the given line itself earns no mark.',
        'M1: writes <span class="chem">(1 + 1/n)^n = e^{n ln(1 + 1/n)} = e × e^u</span>.',
        'M1: expands <span class="chem">e^u = 1 + u + u^2/2 + …</span> and keeps terms to <span class="chem">1/n^2</span>.',
        'A1: <span class="chem">1/(3n^2) + 1/(8n^2) = 11/(24n^2)</span>. AG: the given expansion; the given line itself earns no mark.',
        'A1: <span class="chem">nE_n = e/2 - 11e/(24n) + … -> e/2</span>.',
        'A1: estimate <span class="chem">n = 2719</span> (from <span class="chem">n &gt; 1000e</span>).',
        'A1: true least value <span class="chem">n = 2718</span>.',
        'R1: the <span class="chem">-11e/(24n^2)</span> term makes <span class="chem">E_n</span> a little smaller than <span class="chem">e/(2n)</span>.'
      ],
      hints: [
        'Decode: this is a guided discovery — compute, spot a pattern, then prove it with series. The Euler steps form a geometric sequence, and the proof uses <span class="chem">a^b = e^{b ln a}</span>.',
        'In (e), write <span class="chem">(1 + 1/n)^n = e^{n ln(1 + 1/n)}</span> and use (d). You need <span class="chem">u^2/2</span> only up to the <span class="chem">1/n^2</span> term: <span class="chem">u^2 = 1/(4n^2) + …</span>.',
        'In (f), list <span class="chem">E_n</span> in a GDC table near <span class="chem">n = 2718</span>.'
      ]
    },
    {
      id: 't5-4-q057',
      topic: 't5-4',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 3 (HL Investigation)',
      syllabus: 'AHL 5.18, 5.19',
      marks: 17,
      stem: '<p><strong>A series for tan x from its differential equation.</strong> The Formula Booklet does not give a series for <span class="chem">tan x</span>. This investigation builds one.</p><p>(a) Show that <span class="chem">y = tan x</span> satisfies the differential equation <span class="chem">dy/dx = 1 + y^2</span> with <span class="chem">y(0) = 0</span>. <strong>[2 marks]</strong></p><p>(b) Show that <span class="chem">d^2y/dx^2 = 2y(1 + y^2)</span> and <span class="chem">d^3y/dx^3 = 2(1 + y^2)(1 + 3y^2)</span>. <strong>[4 marks]</strong></p><p>(c) Hence find the Maclaurin series for <span class="chem">tan x</span> up to and including the term in <span class="chem">x^3</span>. <strong>[2 marks]</strong></p><p>(d) Explain why the Maclaurin series for <span class="chem">tan x</span> contains only odd powers of <span class="chem">x</span>. <strong>[1 mark]</strong></p><p>(e) Let <span class="chem">tan x = x + (1/3)x^3 + ax^5 + bx^7 + …</span>. By substituting this series into <span class="chem">dy/dx = 1 + y^2</span> and comparing coefficients, find the exact values of <span class="chem">a</span> and <span class="chem">b</span>. <strong>[5 marks]</strong></p><p>(f) Use the four terms of the series to estimate <span class="chem">tan 0.5</span>, and find the percentage error compared with the GDC value. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">d/dx(tan x) = sec^2 x = 1 + tan^2 x</span>, so <span class="chem">dy/dx = 1 + y^2</span>; and <span class="chem">tan 0 = 0</span>.</p><p>(b) <span class="chem">y\'\' = 2y y\' = 2y(1 + y^2)</span>. Writing <span class="chem">y\'\' = 2y + 2y^3</span>: <span class="chem">y\'\'\' = (2 + 6y^2) y\' = 2(1 + 3y^2)(1 + y^2)</span>.</p><p>(c) <span class="chem">y(0) = 0</span>, <span class="chem">y\'(0) = 1</span>, <span class="chem">y\'\'(0) = 0</span>, <span class="chem">y\'\'\'(0) = 2</span>, so <span class="chem">tan x = x + (2/3!)x^3 + … = x + x^3/3 + …</span>.</p><p>(d) <span class="chem">tan(-x) = -tan x</span>: tan is an odd function, so every even-power coefficient must be zero.</p><p>(e) <span class="chem">dy/dx = 1 + x^2 + 5ax^4 + 7bx^6 + …</span>; <span class="chem">y^2 = x^2 + (2/3)x^4 + (1/9 + 2a)x^6 + …</span>. Comparing <span class="chem">x^4</span>: <span class="chem">5a = 2/3 => a = 2/15</span>. Comparing <span class="chem">x^6</span>: <span class="chem">7b = 1/9 + 4/15 = 17/45 => b = 17/315</span>.</p><p>(f) <span class="chem">0.5 + 0.125/3 + (2/15)(0.03125) + (17/315)(0.0078125) = 0.546255</span>. GDC: <span class="chem">tan 0.5 = 0.546302</span>. Percentage error <span class="chem">≈ 0.00870%</span>.</p>',
      markscheme: [
        'M1: <span class="chem">d/dx(tan x) = sec^2 x</span>.',
        'A1: uses <span class="chem">sec^2 x = 1 + tan^2 x</span> and <span class="chem">tan 0 = 0</span>. AG: <span class="chem">dy/dx = 1 + y^2</span>, <span class="chem">y(0) = 0</span>; the given line itself earns no mark.',
        'M1: chain rule: <span class="chem">d/dx(y^2) = 2y (dy/dx)</span>.',
        'A1: <span class="chem">y\'\' = 2y(1 + y^2)</span>.',
        'M1: differentiates <span class="chem">2y + 2y^3</span> to <span class="chem">(2 + 6y^2) y\'</span>.',
        'A1: substitutes <span class="chem">y\' = 1 + y^2</span>. AG: <span class="chem">y\'\'\' = 2(1 + y^2)(1 + 3y^2)</span>; the given line itself earns no mark.',
        'A1: <span class="chem">y\'(0) = 1</span>, <span class="chem">y\'\'(0) = 0</span>, <span class="chem">y\'\'\'(0) = 2</span>.',
        'A1: <span class="chem">x + x^3/3</span>.',
        'R1: <span class="chem">tan x</span> is an odd function (<span class="chem">tan(-x) = -tan x</span>), so even-power coefficients are zero.',
        'M1: differentiates the series term by term.',
        'M1: squares the series, keeping terms up to <span class="chem">x^6</span>.',
        'A1: <span class="chem">y^2 = x^2 + (2/3)x^4 + (1/9 + 2a)x^6 + …</span>.',
        'A1: <span class="chem">a = 2/15</span>.',
        'A1: <span class="chem">b = 17/315</span>.',
        'A1: estimate <span class="chem">0.546255</span> (accept 0.5463).',
        'A1: GDC value <span class="chem">0.546302</span>.',
        'A1: percentage error <span class="chem">0.00870%</span> (accept 0.0087% or 0.00869% from the rounded estimate).'
      ],
      hints: [
        'Decode: a series is built from a DE in two ways here: by repeated differentiation in (b)–(c), and by comparing coefficients in (e).',
        'In (b), write <span class="chem">y\'\' = 2y + 2y^3</span> before differentiating again, and replace each <span class="chem">y\'</span> by <span class="chem">1 + y^2</span>.',
        'In (e), the <span class="chem">x^6</span> term of <span class="chem">y^2</span> comes from <span class="chem">(x^3/3)^2</span> and from <span class="chem">2 × x × ax^5</span>.'
      ]
    },
    {
      id: 't5-4-q058',
      topic: 't5-4',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 3 (HL Investigation)',
      syllabus: 'AHL 5.18',
      marks: 18,
      stem: '<p><strong>Two families of circles that cross at right angles.</strong> In this investigation, <span class="chem">x &gt; 0</span> and <span class="chem">y &gt; 0</span>.</p><p>(a) Use the substitution <span class="chem">y = vx</span> to show that the general solution of <span class="chem">dy/dx = (y^2 - x^2)/(2xy)</span> is <span class="chem">x^2 + y^2 = Cx</span>, where <span class="chem">C</span> is a constant. <strong>[5 marks]</strong></p><p>(b) Describe the curves <span class="chem">x^2 + y^2 = Cx</span> geometrically, giving the centre and radius in terms of <span class="chem">C</span>. <strong>[2 marks]</strong></p><p>A second family of curves satisfies <span class="chem">dy/dx = 2xy/(x^2 - y^2)</span>, for <span class="chem">x != y</span>.</p><p>(c) Show that, at any point where both are defined, a curve of the first family and a curve of the second family cross at right angles. <strong>[2 marks]</strong></p><p>(d) You are given that <span class="chem">(1 - v^2)/(v(1 + v^2)) = 1/v - 2v/(1 + v^2)</span>. Use the substitution <span class="chem">y = vx</span> to show that the second family is <span class="chem">x^2 + y^2 = Ky</span>, where <span class="chem">K</span> is a constant. <strong>[6 marks]</strong></p><p>(e) Find the members of each family that pass through the point <span class="chem">(3, 1)</span>, and verify that their gradients there have product <span class="chem">-1</span>. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">v + x(dv/dx) = (v^2 - 1)/(2v) => x(dv/dx) = -(1 + v^2)/(2v)</span>. Then <span class="chem">int 2v/(1 + v^2) dv = -int (1/x) dx => ln(1 + v^2) = -ln x + c</span>, so <span class="chem">1 + v^2 = C/x</span>. Multiplying by <span class="chem">x^2</span>: <span class="chem">x^2 + y^2 = Cx</span>.</p><p>(b) <span class="chem">(x - C/2)^2 + y^2 = C^2/4</span>: circles with centre <span class="chem">(C/2, 0)</span> on the <span class="chem">x</span>-axis and radius <span class="chem">C/2</span>, all passing through the origin (and touching the <span class="chem">y</span>-axis there).</p><p>(c) <span class="chem">((y^2 - x^2)/(2xy)) × (2xy/(x^2 - y^2)) = -1</span>, so the tangents are perpendicular.</p><p>(d) <span class="chem">v + x(dv/dx) = 2v/(1 - v^2) => x(dv/dx) = (2v - v + v^3)/(1 - v^2) = v(1 + v^2)/(1 - v^2)</span>. So <span class="chem">int (1/v - 2v/(1 + v^2)) dv = int (1/x) dx => ln v - ln(1 + v^2) = ln x + c</span>, so <span class="chem">v/(1 + v^2) = Ax</span>. With <span class="chem">v = y/x</span>: <span class="chem">xy/(x^2 + y^2) = Ax</span>, so <span class="chem">x^2 + y^2 = Ky</span> with <span class="chem">K = 1/A</span>.</p><p>(e) <span class="chem">10 = 3C => C = 10/3</span>: <span class="chem">x^2 + y^2 = (10/3)x</span>. <span class="chem">10 = K</span>: <span class="chem">x^2 + y^2 = 10y</span>. Gradients at <span class="chem">(3, 1)</span>: <span class="chem">(1 - 9)/6 = -4/3</span> and <span class="chem">6/(9 - 1) = 3/4</span>; product <span class="chem">-1</span>.</p>',
      markscheme: [
        'M1: substitutes <span class="chem">y = vx</span> and <span class="chem">dy/dx = v + x(dv/dx)</span>.',
        'A1: <span class="chem">x(dv/dx) = -(1 + v^2)/(2v)</span>.',
        'M1: separates: <span class="chem">int 2v/(1 + v^2) dv = -int (1/x) dx</span>.',
        'A1: <span class="chem">ln(1 + v^2) = -ln x + c</span>.',
        'A1: <span class="chem">1 + y^2/x^2 = C/x</span>. AG: <span class="chem">x^2 + y^2 = Cx</span>; the given line itself earns no mark.',
        'M1: completes the square: <span class="chem">(x - C/2)^2 + y^2 = (C/2)^2</span>.',
        'A1: circles, centre <span class="chem">(C/2, 0)</span>, radius <span class="chem">C/2</span> (through the origin).',
        'M1: multiplies the two gradient expressions.',
        'A1: product <span class="chem">= -1</span>, so the curves are perpendicular where they cross.',
        'M1: substitutes <span class="chem">y = vx</span> into the second DE.',
        'A1: <span class="chem">x(dv/dx) = v(1 + v^2)/(1 - v^2)</span>.',
        'M1: separates and uses the given partial fractions.',
        'A1: <span class="chem">ln v - ln(1 + v^2) = ln x + c</span>.',
        'M1: removes logarithms: <span class="chem">v/(1 + v^2) = Ax</span>.',
        'A1: substitutes <span class="chem">v = y/x</span> and simplifies to <span class="chem">xy/(x^2 + y^2) = Ax</span>. AG: <span class="chem">x^2 + y^2 = Ky</span>; the given line itself earns no mark.',
        'A1: <span class="chem">C = 10/3</span>.',
        'A1: <span class="chem">K = 10</span>.',
        'A1: gradients <span class="chem">-4/3</span> and <span class="chem">3/4</span>, product <span class="chem">-1</span>.'
      ],
      hints: [
        'Decode: both DEs are homogeneous (each is a function of <span class="chem">y/x</span>), so each part is the <span class="chem">y = vx</span> method; (c) is about perpendicular gradients <span class="chem">m_1 m_2 = -1</span>.',
        'In (a), after substituting, <span class="chem">(v^2 - 1)/(2v) - v = (v^2 - 1 - 2v^2)/(2v)</span>.',
        'In (b), complete the square in <span class="chem">x</span>. In (e), substitute <span class="chem">(3, 1)</span> into each family, and into each DE for the gradients.'
      ]
    },
    {
      id: 't5-4-q059',
      topic: 't5-4',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 3 (HL Investigation)',
      syllabus: 'AHL 5.18',
      marks: 18,
      stem: '<p><strong>A family of linear differential equations.</strong> For each integer <span class="chem">n &gt;= 0</span>, let <span class="chem">y_n(x)</span> be the solution of <span class="chem">dy/dx + y = x^n</span> with <span class="chem">y(0) = 0</span>.</p><p>(a) Use an integrating factor to find <span class="chem">y_0(x)</span> and <span class="chem">y_1(x)</span>. <strong>[4 marks]</strong></p><p>(b) Show that <span class="chem">y_2(x) = x^2 - 2x + 2 - 2e^{-x}</span>. <strong>[3 marks]</strong></p><p>(c) By differentiating the equation <span class="chem">dy_n/dx + y_n = x^n</span>, show that, for <span class="chem">n &gt;= 1</span>, the function <span class="chem">z = (1/n)(dy_n/dx)</span> satisfies <span class="chem">dz/dx + z = x^{n - 1}</span> with <span class="chem">z(0) = 0</span>. Deduce that <span class="chem">dy_n/dx = n y_{n - 1}</span>, and verify this for <span class="chem">n = 2</span>. <strong>[3 marks]</strong></p><p>(d) Conjecture an expression for <span class="chem">y_3(x)</span>, and verify it by substituting into the differential equation. <strong>[4 marks]</strong></p><p>(e) Explain why <span class="chem">y_n(x) = e^{-x} int_0^x t^n e^t dt</span>. Use this and your GDC to find <span class="chem">y_3(1)</span>, and check that it agrees with your answer to (d). <strong>[2 marks]</strong></p><p>(f) Show that <span class="chem">0 &lt; y_n(1) &lt; 1/(n + 1)</span> for <span class="chem">n &gt;= 1</span>. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) IF <span class="chem">e^x</span>: <span class="chem">d/dx(y e^x) = x^n e^x</span>. For <span class="chem">n = 0</span>: <span class="chem">y e^x = e^x + C</span>, <span class="chem">C = -1</span>, so <span class="chem">y_0 = 1 - e^{-x}</span>. For <span class="chem">n = 1</span>: by parts <span class="chem">int x e^x dx = (x - 1)e^x + C</span>, <span class="chem">C = 1</span>, so <span class="chem">y_1 = x - 1 + e^{-x}</span>.</p><p>(b) <span class="chem">int x^2 e^x dx = x^2 e^x - 2 int x e^x dx = (x^2 - 2x + 2)e^x + C</span>; <span class="chem">y(0) = 0 => C = -2</span>, so <span class="chem">y_2 = x^2 - 2x + 2 - 2e^{-x}</span>.</p><p>(c) Differentiating: <span class="chem">y_n\'\' + y_n\' = n x^{n - 1}</span>; dividing by <span class="chem">n</span>: <span class="chem">z\' + z = x^{n - 1}</span>. From the DE at <span class="chem">x = 0</span>: <span class="chem">y_n\'(0) = 0^n - y_n(0) = 0</span> for <span class="chem">n &gt;= 1</span>, so <span class="chem">z(0) = 0</span>. Then <span class="chem">z</span> solves the same initial value problem as <span class="chem">y_{n - 1}</span>, so <span class="chem">z = y_{n - 1}</span> and <span class="chem">y_n\' = n y_{n - 1}</span>. Check: <span class="chem">y_2\' = 2x - 2 + 2e^{-x} = 2y_1</span>.</p><p>(d) Pattern: <span class="chem">y_3 = x^3 - 3x^2 + 6x - 6 + 6e^{-x}</span>. Then <span class="chem">y_3\' = 3x^2 - 6x + 6 - 6e^{-x}</span>, and <span class="chem">y_3\' + y_3 = x^3</span>; <span class="chem">y_3(0) = -6 + 6 = 0</span>. (Also <span class="chem">y_3\' = 3y_2</span>.)</p><p>(e) Multiplying by the IF <span class="chem">e^x</span> and integrating <span class="chem">d/dt(y e^t) = t^n e^t</span> from 0 to <span class="chem">x</span> with <span class="chem">y(0) = 0</span> gives <span class="chem">y_n(x) e^x = int_0^x t^n e^t dt</span>. GDC: <span class="chem">e^{-1} int_0^1 t^3 e^t dt = 0.207277</span>, and (d) gives <span class="chem">y_3(1) = 1 - 3 + 6 - 6 + 6e^{-1} = 6/e - 2 = 0.207277</span>.</p><p>(f) On <span class="chem">0 &lt; t &lt; 1</span>, <span class="chem">0 &lt; t^n e^t &lt; e t^n</span>. So <span class="chem">0 &lt; y_n(1) = e^{-1} int_0^1 t^n e^t dt &lt; e^{-1} × e int_0^1 t^n dt = 1/(n + 1)</span>.</p>',
      markscheme: [
        'M1: integrating factor <span class="chem">e^x</span>: <span class="chem">d/dx(y e^x) = x^n e^x</span>.',
        'A1: <span class="chem">y_0 = 1 - e^{-x}</span>.',
        'M1: integration by parts for <span class="chem">int x e^x dx</span>.',
        'A1: <span class="chem">y_1 = x - 1 + e^{-x}</span>.',
        'M1: integration by parts on <span class="chem">int x^2 e^x dx</span>.',
        'A1: <span class="chem">int x^2 e^x dx = (x^2 - 2x + 2)e^x + C</span>.',
        'A1: <span class="chem">C = -2</span>. AG: <span class="chem">y_2 = x^2 - 2x + 2 - 2e^{-x}</span>; the given line itself earns no mark.',
        'M1: differentiates the DE and divides by <span class="chem">n</span>.',
        'R1: <span class="chem">z(0) = (1/n)(0^n - y_n(0)) = 0</span>, so <span class="chem">z</span> and <span class="chem">y_{n - 1}</span> solve the same initial value problem.',
        'A1: verifies <span class="chem">y_2\' = 2x - 2 + 2e^{-x} = 2y_1</span>.',
        'A1: conjecture <span class="chem">y_3 = x^3 - 3x^2 + 6x - 6 + 6e^{-x}</span>.',
        'M1: differentiates the conjecture.',
        'A1: shows <span class="chem">y_3\' + y_3 = x^3</span>.',
        'A1: checks <span class="chem">y_3(0) = 0</span>.',
        'R1: integrating <span class="chem">d/dt(y e^t) = t^n e^t</span> from 0 to <span class="chem">x</span> with <span class="chem">y(0) = 0</span>.',
        'A1: <span class="chem">y_3(1) = 0.207277</span> from both methods (<span class="chem">6/e - 2</span>).',
        'M1: uses <span class="chem">0 &lt; e^t &lt; e</span> on <span class="chem">(0, 1)</span>.',
        'A1: <span class="chem">int_0^1 t^n dt = 1/(n + 1)</span>, giving the bounds.'
      ],
      hints: [
        'Decode: one method (integrating factor) for a whole family of DEs; the aim is to spot the pattern and prove it, not to solve each one from scratch.',
        'The integrating factor is always <span class="chem">e^x</span>. For (d), use <span class="chem">y_3\' = 3y_2</span> from (c): integrate <span class="chem">3y_2</span> and choose the constant so that <span class="chem">y_3(0) = 0</span>.',
        'For (f), compare <span class="chem">t^n e^t</span> with <span class="chem">t^n e</span> on <span class="chem">0 &lt; t &lt; 1</span>.'
      ]
    }
  ]);
})();
