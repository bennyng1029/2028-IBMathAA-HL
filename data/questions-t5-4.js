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
      paper: 'P1',
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
      paper: 'P1',
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
      paper: 'P1',
      syllabus: 'AHL 5.18',
      marks: 3,
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
      paper: 'P1',
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
      paper: 'P1',
      syllabus: 'AHL 5.19',
      marks: 2,
      stem: '<p>Find the exact coefficient of <span class="chem">x^3</span> in the Maclaurin series expansion of <span class="chem">f(x) = sin(2x)</span>. (You can enter an exact fraction like <span class="mono">-5/7</span>.)</p>',
      answer: -4 / 3,
      answerDisplay: '−4/3 ≈ −1.33',
      tolerance: '1%',
      sigfigs: 3,
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
      paper: 'P1',
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
      paper: 'P1',
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
      paper: 'P1',
      syllabus: 'AHL 5.18',
      marks: 5,
      stem: '<p>Solve the homogeneous differential equation <span class="chem">dy/dx = (x + 2y) / x</span> (<span class="chem">x &gt; 0</span>) given that <span class="chem">y(1) = 1</span>, and find the exact value of <span class="chem">y(2)</span>.</p>',
      answer: 6,
      tolerance: '0.01',
      sigfigs: 1,
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
      paper: 'P1',
      syllabus: 'AHL 5.18',
      marks: 5,
      stem: '<p>Solve the differential equation <span class="chem">dy/dx + 2y = 6e^x</span> given that <span class="chem">y(0) = 5</span>, and find the exact value of <span class="chem">y(ln 2)</span>.</p>',
      answer: 4.75,
      tolerance: '0.01',
      sigfigs: 3,
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
      paper: 'P1',
      syllabus: 'AHL 5.19',
      marks: 3,
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
      paper: 'P2',
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
      paper: 'P1',
      syllabus: 'AHL 5.19',
      marks: 4,
      stem: '<p>Find the exact coefficient of <span class="chem">x^3</span> in the Maclaurin series expansion of <span class="chem">g(x) = e^{2x} sin(x)</span>. (You can enter an exact fraction like <span class="mono">7/4</span>.)</p>',
      answer: 11 / 6,
      answerDisplay: '11/6 ≈ 1.83',
      tolerance: '1%',
      sigfigs: 3,
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
      paper: 'P1',
      syllabus: 'AHL 5.19',
      marks: 3,
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
      paper: 'P1',
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
      paper: 'P1',
      syllabus: 'AHL 5.19',
      marks: 5,
      stem: '<p>Let <span class="chem">y(x)</span> be the solution to <span class="chem">dy/dx = y^2 - x</span> with <span class="chem">y(0) = 1</span>. Find the exact coefficient of <span class="chem">x^3</span> in the Maclaurin series expansion of <span class="chem">y(x)</span>. (You can enter an exact fraction like <span class="mono">3/5</span>.)</p>',
      answer: 2 / 3,
      answerDisplay: '2/3 ≈ 0.667',
      tolerance: '1%',
      sigfigs: 3,
      hints: [
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
      paper: 'P1',
      syllabus: 'AHL 5.18',
      marks: 6,
      stem: '<p>Solve the homogeneous differential equation <span class="chem">dy/dx = (x^2 + y^2) / (2xy)</span> (<span class="chem">x &gt; 0, y &gt; 0</span>) given <span class="chem">y(1) = 2</span>, and find the exact value of <span class="chem">y(4)</span>. (Enter an exact expression such as <span class="mono">3*sqrt(2)</span>.)</p>',
      answer: 2 * Math.sqrt(7),
      answerDisplay: '2√7 ≈ 5.29',
      tolerance: { abs: 1e-6 },
      hints: [
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
      paper: 'P1',
      syllabus: 'AHL 5.19',
      marks: 5,
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
      paper: 'P3',
      syllabus: 'AHL 5.18–5.19',
      marks: 8,
      stem: '<p>Consider the differential equation <span class="chem">dy/dx + 2xy = 1</span> with <span class="chem">y(0) = 0</span>.</p><p>(a) Using an integrating factor, show that <span class="chem">y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>. <strong>[3 marks]</strong></p><p>(b) By using the Maclaurin series for <span class="chem">e^{t^2}</span> (or by implicit differentiation of the DE), find the Maclaurin series for <span class="chem">y(x)</span> up to and including the term in <span class="chem">x^5</span>. <strong>[5 marks]</strong></p>',
      answer: '<p>(a) The integrating factor is <span class="chem">I(x) = e^{int 2x dx} = e^{x^2}</span>. Multiplying gives <span class="chem">d/dx(y e^{x^2}) = e^{x^2}</span>. Integrating from <span class="chem">0</span> to <span class="chem">x</span> using <span class="chem">y(0) = 0</span> gives <span class="chem">y(x) e^{x^2} = int_0^x e^{t^2} dt => y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>.</p><p>(b) <span class="chem">int_0^x e^{t^2} dt = int_0^x (1 + t^2 + t^4/2 + ...) dt = x + x^3/3 + x^5/10 + ...</span>. Multiplying by <span class="chem">e^{-x^2} = 1 - x^2 + x^4/2 - ...</span> gives <span class="chem">y(x) = x + (1/3 - 1)x^3 + (1/10 - 1/3 + 1/2)x^5 + ... = x - (2/3)x^3 + (4/15)x^5 + ...</span>.</p>',
      markscheme: [
        'M1: integrating factor <span class="chem">I(x) = e^{int 2x dx} = e^{x^2}</span>.',
        'A1: <span class="chem">d/dx(y e^{x^2}) = e^{x^2}</span>.',
        'A1: integrates from <span class="chem">0</span> to <span class="chem">x</span> using <span class="chem">y(0) = 0</span>: <span class="chem">y(x) e^{x^2} = int_0^x e^{t^2} dt</span>, leading to the given result AG (no mark for the given line).',
        'M1: expands <span class="chem">e^{t^2} = 1 + t^2 + t^4/2 + ...</span> and integrates term by term to <span class="chem">x + x^3/3 + x^5/10</span> (or differentiates DE implicitly up to <span class="chem">y^{(5)}(0)</span>).',
        'M1: multiplies by <span class="chem">e^{-x^2} = 1 - x^2 + x^4/2 - ...</span> (or substitutes derivatives into Maclaurin formula).',
        'A1: first term <span class="chem">x</span>.',
        'A1: <span class="chem">-(2/3)x^3</span>.',
        'A1: <span class="chem">(4/15)x^5</span>.'
      ],
      hints: [
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
      paper: 'P1',
      syllabus: 'AHL 5.19',
      marks: 4,
      stem: '<p>Use the Maclaurin series for <span class="chem">(1 + x)^p</span> to find the coefficient of <span class="chem">x^2</span> in the Maclaurin series of <span class="chem">f(x) = sqrt(1 + 4x)</span>.</p>',
      answer: -2,
      tolerance: { abs: 1e-6 },
      hints: [
        'Write <span class="chem">sqrt(1 + 4x) = (1 + u)^{1/2}</span> with <span class="chem">u = 4x</span>.',
        'Use <span class="chem">(1 + u)^p = 1 + pu + (p(p - 1)/2!) u^2 + ...</span> with <span class="chem">p = 1/2</span>.'
      ],
      solution: '<p>With <span class="chem">p = 1/2</span> and <span class="chem">u = 4x</span>, the <span class="chem">x^2</span> term is <span class="chem">((1/2)(-1/2)/2!)(4x)^2 = (-1/8)(16x^2) = -2x^2</span>, so the coefficient is <span class="chem">-2</span>. The series <span class="chem">1 + 2x - 2x^2 + ...</span> is valid for <span class="chem">|4x| &lt; 1</span>, that is <span class="chem">|x| &lt; 1/4</span>.</p>'
    }
  ]);
})();
