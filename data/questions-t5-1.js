/* ==========================================================================
   Analysis Lab — questions-t5-1.js
   Question bank for Topic 5.1: Differentiation, curve analysis and optimization
   (SL 5.1–5.4, 5.6–5.8)
   ========================================================================== */
(function () {
  'use strict';
  if (!window.S1 || !window.S1.questions) return;

  window.S1.questions.register('t5-1', [
    {
      id: 't5-1-q001',
      level: 'sl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.3, 5.6',
      type: 'mcq',
      marks: 2,
      stem: '<p>Let <span class="chem">f(x) = 6 sqrt(x) - 4 / x^2 + 5</span> for <span class="chem">x &gt; 0</span>. Find <span class="chem">f\'(x)</span>.</p>',
      options: [
        '<span class="chem">3 / sqrt(x) + 8 / x^3</span>',
        '<span class="chem">3 / sqrt(x) - 8 / x^3</span>',
        '<span class="chem">3 sqrt(x) + 8 / x^3 + 5</span>',
        '<span class="chem">6 / (2 sqrt(x)) - 4 / (2x)</span>'
      ],
      answer: 0,
      misconception: {
        1: 'When differentiating −4x⁻², multiplying −4 by the negative exponent −2 gives +8x⁻³, not −8x⁻³.',
        2: 'Subtracting 1 from the exponent 1/2 gives −1/2 (so x⁻¹/² = 1/√x), and the derivative of the constant +5 is 0.',
        3: 'Rewrite −4/x² as −4x⁻² before differentiating; you cannot differentiate the denominator x² by itself.'
      },
      hints: [
        'Rewrite each term using rational or negative exponents first: <span class="chem">f(x) = 6x^{1/2} - 4x^{-2} + 5</span>.',
        'Apply the power rule <span class="chem">d/dx (x^n) = n x^{n-1}</span> to each term and remember that a standalone constant differentiates to <span class="chem">0</span>.'
      ],
      solution: '<p>Rewrite in index form: <span class="chem">f(x) = 6x^{1/2} - 4x^{-2} + 5</span>. Differentiating term by term gives <span class="chem">f\'(x) = 6(1/2)x^{-1/2} - 4(-2)x^{-3} + 0 = 3 / sqrt(x) + 8 / x^3</span>.</p>'
    },
    {
      id: 't5-1-q002',
      level: 'sl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.4',
      type: 'numeric',
      marks: 4,
      stem: '<p>Consider the curve <span class="chem">y = x^3 - 5x^2 + 8x - 1</span>. The normal to the curve at <span class="chem">x = 1</span> has equation <span class="chem">y = m x + c</span>. Find the value of <span class="chem">c</span>.</p>',
      answer: 4,
      hints: [
        'First find the <span class="chem">y</span>-coordinate at <span class="chem">x = 1</span> and evaluate the derivative <span class="chem">dy/dx = 3x^2 - 10x + 8</span> at <span class="chem">x = 1</span>.',
        'Take the negative reciprocal <span class="chem">m_N = -1 / m_T</span> and substitute <span class="chem">(1, 3)</span> into <span class="chem">y - y_1 = m_N(x - 1)</span>.'
      ],
      solution: '<p>At <span class="chem">x = 1</span>, <span class="chem">y(1) = 1 - 5 + 8 - 1 = 3</span>. Differentiating gives <span class="chem">dy/dx = 3x^2 - 10x + 8</span>, so <span class="chem">m_T = 3 - 10 + 8 = 1</span> and the normal gradient is <span class="chem">m_N = -1 / 1 = -1</span>. Thus the normal is <span class="chem">y - 3 = -1(x - 1) =&gt; y = -x + 4</span>, giving <span class="chem">c = 4</span>.</p>'
    },
    {
      id: 't5-1-q003',
      level: 'sl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.6',
      type: 'mcq',
      marks: 2,
      stem: '<p>Find the derivative of <span class="chem">f(x) = ln(3x^2 + 5)</span>.</p>',
      options: [
        '<span class="chem">6x / (3x^2 + 5)</span>',
        '<span class="chem">1 / (3x^2 + 5)</span>',
        '<span class="chem">1 / (6x)</span>',
        '<span class="chem">6x ln(3x^2 + 5)</span>'
      ],
      answer: 0,
      misconception: {
        1: 'You differentiated the outer function ln(u) to 1/u, but forgot to multiply by the derivative of the inner function u\' = 6x (chain rule).',
        2: 'The denominator of d/dx[ln(u)] is the entire inner function u = 3x² + 5, not its derivative.',
        3: 'The derivative of ln(u) is u\'/u, not u\' ln(u).'
      },
      hints: [
        'Use the chain rule on <span class="chem">f(x) = ln(u)</span> where <span class="chem">u = 3x^2 + 5</span>.',
        'Since <span class="chem">d/du (ln u) = 1/u</span> and <span class="chem">du/dx = 6x</span>, multiply them together.'
      ],
      solution: '<p>By the chain rule, <span class="chem">f\'(x) = (1 / (3x^2 + 5)) * d/dx(3x^2 + 5) = 6x / (3x^2 + 5)</span>.</p>'
    },
    {
      id: 't5-1-q004',
      level: 'sl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.6',
      type: 'numeric',
      marks: 3,
      stem: '<p>Let <span class="chem">f(x) = x^2 e^{3x}</span>. The derivative <span class="chem">f\'(x)</span> can be written in the form <span class="chem">x e^{3x}(a x + b)</span>, where <span class="chem">a</span> and <span class="chem">b</span> are integers. Find the value of <span class="chem">b</span>.</p>',
      answer: 2,
      hints: [
        'Use the product rule <span class="chem">(u v)\' = u v\' + v u\'</span> with <span class="chem">u = x^2</span> and <span class="chem">v = e^{3x}</span>.',
        'Remember the chain rule when differentiating <span class="chem">e^{3x}</span>: <span class="chem">v\' = 3e^{3x}</span>. Then factor out <span class="chem">x e^{3x}</span>.'
      ],
      solution: '<p>By the product rule, <span class="chem">f\'(x) = x^2(3e^{3x}) + e^{3x}(2x) = x e^{3x}(3x + 2)</span>. Comparing with <span class="chem">x e^{3x}(a x + b)</span> gives <span class="chem">a = 3</span> and <span class="chem">b = 2</span>.</p>'
    },
    {
      id: 't5-1-q005',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.6',
      type: 'mcq',
      marks: 2,
      stem: '<p>Consider <span class="chem">f(x) = cos(2x) / e^x</span>. Which expression equals <span class="chem">f\'(x)</span>?</p>',
      options: [
        '<span class="chem">-(2 sin(2x) + cos(2x)) / e^x</span>',
        '<span class="chem">(2 sin(2x) - cos(2x)) / e^x</span>',
        '<span class="chem">-2 sin(2x) / e^x</span>',
        '<span class="chem">(-sin(2x) - cos(2x)) / e^{2x}</span>'
      ],
      answer: 0,
      misconception: {
        1: 'The derivative of cos(2x) is −2 sin(2x) (with a minus sign), not +2 sin(2x).',
        2: 'You cannot differentiate the numerator and denominator separately; you must apply the quotient rule (v u\' − u v\') / v².',
        3: 'By the chain rule, d/dx[cos(2x)] = −2 sin(2x), and you can cancel one factor of e^x from numerator and denominator.'
      },
      hints: [
        'Apply the quotient rule with <span class="chem">u = cos(2x)</span> (<span class="chem">u\' = -2 sin(2x)</span>) and <span class="chem">v = e^x</span> (<span class="chem">v\' = e^x</span>).',
        'Factor out <span class="chem">e^x</span> in the numerator and cancel with one factor of <span class="chem">e^x</span> in <span class="chem">(e^x)^2</span>.'
      ],
      solution: '<p>Using the quotient rule: <span class="chem">f\'(x) = (e^x(-2 sin(2x)) - cos(2x)(e^x)) / (e^x)^2 = -(2 sin(2x) + cos(2x)) / e^x</span>.</p>'
    },
    {
      id: 't5-1-q006',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.4',
      type: 'numeric',
      marks: 4,
      stem: '<p>The tangent to the curve <span class="chem">f(x) = k x^2 + 3x - 2</span> at the point where <span class="chem">x = 2</span> is parallel to the line <span class="chem">y = 11x - 5</span>. Find the value of <span class="chem">k</span>.</p>',
      answer: 2,
      hints: [
        'Parallel lines have the same gradient, so the tangent gradient at <span class="chem">x = 2</span> is <span class="chem">f\'(2) = 11</span>.',
        'Differentiate <span class="chem">f(x)</span> to get <span class="chem">f\'(x) = 2k x + 3</span>, substitute <span class="chem">x = 2</span>, and solve <span class="chem">4k + 3 = 11</span>.'
      ],
      solution: '<p>Since the tangent at <span class="chem">x = 2</span> is parallel to <span class="chem">y = 11x - 5</span>, we have <span class="chem">f\'(2) = 11</span>. Differentiating gives <span class="chem">f\'(x) = 2k x + 3</span>, so <span class="chem">f\'(2) = 4k + 3 = 11 =&gt; 4k = 8 =&gt; k = 2</span>.</p>'
    },
    {
      id: 't5-1-q007',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.2, 5.8',
      type: 'multi',
      marks: 5,
      stem: '<p>A twice-differentiable function <span class="chem">y = f(x)</span> has derivative <span class="chem">f\'(x) = (x + 2)^2 (x - 3)</span>. Select <strong>all</strong> true statements about the graph of <span class="chem">y = f(x)</span>.</p>',
      options: [
        '<span class="chem">f(x)</span> has a stationary point of inflexion at <span class="chem">x = -2</span>.',
        '<span class="chem">f(x)</span> has a local minimum at <span class="chem">x = 3</span>.',
        '<span class="chem">f(x)</span> is increasing on the interval <span class="chem">-2 &lt; x &lt; 3</span>.',
        '<span class="chem">f(x)</span> has a local maximum at <span class="chem">x = -2</span>.'
      ],
      answer: [0, 1],
      misconception: {
        2: 'For x < 3 (with x ≠ −2), (x + 2)² > 0 and (x − 3) < 0, so f\'(x) < 0 and f(x) is decreasing on −2 < x < 3.',
        3: 'At x = −2, the factor (x + 2)² is squared, so f\'(x) does not change sign (it goes from − to 0 to −). That makes x = −2 a stationary point of inflexion, not a local maximum.'
      },
      hints: [
        'Find the sign of <span class="chem">f\'(x) = (x + 2)^2 (x - 3)</span> in the three intervals <span class="chem">x &lt; -2</span>, <span class="chem">-2 &lt; x &lt; 3</span>, and <span class="chem">x &gt; 3</span>.',
        'Notice that <span class="chem">(x + 2)^2 &gt;= 0</span> for all <span class="chem">x</span>, so the sign of <span class="chem">f\'(x)</span> is controlled by <span class="chem">(x - 3)</span>.'
      ],
      solution: '<p>The roots of <span class="chem">f\'(x) = 0</span> are <span class="chem">x = -2</span> and <span class="chem">x = 3</span>. Because <span class="chem">(x + 2)^2 &gt; 0</span> for all <span class="chem">x != -2</span>, <span class="chem">f\'(x) &lt; 0</span> for <span class="chem">x &lt; -2</span> and for <span class="chem">-2 &lt; x &lt; 3</span>, while <span class="chem">f\'(x) &gt; 0</span> for <span class="chem">x &gt; 3</span>. Thus <span class="chem">x = -2</span> is a stationary point of inflexion (sign <span class="chem">- -&gt; 0 -&gt; -</span>) and <span class="chem">x = 3</span> is a local minimum (sign <span class="chem">- -&gt; 0 -&gt; +</span>).</p>'
    },
    {
      id: 't5-1-q008',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.7',
      type: 'mcq',
      marks: 2,
      stem: '<p>The graph of the <strong>derivative</strong> <span class="chem">y = f\'(x)</span> is drawn for <span class="chem">-3 &lt;= x &lt;= 5</span>. The graph of <span class="chem">f\'(x)</span> crosses the <span class="chem">x</span>-axis at <span class="chem">x = -1</span> and <span class="chem">x = 4</span>, and its only turning point is a local maximum at <span class="chem">(1.5, 6)</span>. At which value of <span class="chem">x</span> does the original curve <span class="chem">y = f(x)</span> have a point of inflexion?</p>',
      options: [
        '<span class="chem">x = 1.5</span>',
        '<span class="chem">x = -1</span> and <span class="chem">x = 4</span>',
        '<span class="chem">x = 6</span>',
        'Where the graph of <span class="chem">f\'(x)</span> is concave down'
      ],
      answer: 0,
      misconception: {
        1: 'x = −1 and x = 4 are the x-intercepts of f\'(x), where f\'(x) = 0 and changes sign; those are the local extrema (turning points) of f(x), not its points of inflexion.',
        2: 'y = 6 is the maximum value of the gradient f\'(1.5), not an x-coordinate.',
        3: 'A point of inflexion of f(x) occurs at a specific x-value where f\'\'(x) = 0 and changes sign—which is a turning point (local max or min) of the graph of f\'(x).'
      },
      hints: [
        'A point of inflexion of <span class="chem">f(x)</span> occurs where <span class="chem">f\'\'(x) = 0</span> and <span class="chem">f\'\'(x)</span> changes sign.',
        'Since <span class="chem">f\'\'(x)</span> is the gradient of <span class="chem">f\'(x)</span>, where on the graph of <span class="chem">y = f\'(x)</span> does its gradient equal zero and change sign?'
      ],
      solution: '<p>A point of inflexion on <span class="chem">y = f(x)</span> occurs where <span class="chem">f\'\'(x) = 0</span> and changes sign. Since <span class="chem">f\'\'(x)</span> is the derivative of <span class="chem">f\'(x)</span>, this corresponds to a local maximum or minimum (turning point) on the graph of <span class="chem">y = f\'(x)</span>, which is at <span class="chem">x = 1.5</span>.</p>'
    },
    {
      id: 't5-1-q009',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.7, 5.8',
      type: 'numeric',
      marks: 6,
      stem: '<p>Let <span class="chem">f(x) = x e^{-x}</span> for <span class="chem">x in R</span>. Find the <span class="chem">x</span>-coordinate of the point of inflexion on the graph of <span class="chem">f</span>.</p>',
      answer: 2,
      hints: [
        'Use the product rule to find <span class="chem">f\'(x) = e^{-x} - x e^{-x} = (1 - x)e^{-x}</span>.',
        'Differentiate a second time to find <span class="chem">f\'\'(x)</span>, factor out <span class="chem">e^{-x}</span>, and solve <span class="chem">f\'\'(x) = 0</span>.'
      ],
      solution: '<p>First derivative: <span class="chem">f\'(x) = (1)e^{-x} + x(-e^{-x}) = (1 - x)e^{-x}</span>.<br>Second derivative: <span class="chem">f\'\'(x) = (-1)e^{-x} + (1 - x)(-e^{-x}) = (x - 2)e^{-x}</span>.<br>Since <span class="chem">e^{-x} &gt; 0</span> for all <span class="chem">x</span>, <span class="chem">f\'\'(x) = 0 &lt;=&gt; x = 2</span>, and <span class="chem">f\'\'(x)</span> changes sign from negative (<span class="chem">x &lt; 2</span>) to positive (<span class="chem">x &gt; 2</span>) at <span class="chem">x = 2</span>.</p>'
    },
    {
      id: 't5-1-q010',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.8',
      type: 'order',
      marks: 4,
      stem: '<p>Arrange the steps in the correct logical order to find and justify the minimum surface area of a closed cylinder of fixed volume <span class="chem">V = 128 pi</span> <span class="unit">cm3</span>.</p>',
      options: [
        'Use the volume constraint <span class="chem">pi r^2 h = 128 pi</span> to write <span class="chem">h = 128 / r^2</span>.',
        'Substitute <span class="chem">h = 128 / r^2</span> into <span class="chem">A = 2 pi r^2 + 2 pi r h</span> to obtain <span class="chem">A(r) = 2 pi r^2 + 256 pi r^{-1}</span>.',
        'Differentiate with respect to <span class="chem">r</span> and solve <span class="chem">A\'(r) = 4 pi r - 256 pi r^{-2} = 0</span> to find <span class="chem">r = 4</span> <span class="unit">cm</span>.',
        'Evaluate <span class="chem">A\'\'(4) = 4 pi + 512 pi / 4^3 = 12 pi &gt; 0</span> to justify a minimum, then compute <span class="chem">A(4) = 96 pi</span> <span class="unit">cm2</span>.'
      ],
      answer: [0, 1, 2, 3],
      hints: [
        'Start by isolating the second variable <span class="chem">h</span> from the constraint equation before substituting into the objective function <span class="chem">A</span>.',
        'Differentiate the single-variable function <span class="chem">A(r)</span> to find the stationary point <span class="chem">r = 4</span>, and finish with the second-derivative justification and minimum value.'
      ],
      solution: '<p>In any optimization problem: (1) isolate the second variable from the constraint, (2) substitute into the objective function to get one variable, (3) solve <span class="chem">A\'(r) = 0</span>, and (4) verify <span class="chem">A\'\'(r) &gt; 0</span> and evaluate the minimum value.</p>'
    },
    {
      id: 't5-1-q011',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.8',
      type: 'numeric',
      marks: 6,
      stem: '<p>A closed cylindrical can has radius <span class="chem">r</span> <span class="unit">cm</span>, height <span class="chem">h</span> <span class="unit">cm</span>, and fixed volume <span class="chem">500</span> <span class="unit">cm3</span>. Calculate the value of <span class="chem">r</span> (in <span class="unit">cm</span>, to 3 s.f.) that minimizes the total external surface area <span class="chem">A = 2 pi r^2 + 2 pi r h</span>.</p>',
      answer: 4.3012700691404975,
      sigfigs: 3,
      unit: 'cm',
      hints: [
        'From <span class="chem">pi r^2 h = 500</span>, substitute <span class="chem">h = 500 / (pi r^2)</span> into <span class="chem">A</span> to get <span class="chem">A(r) = 2 pi r^2 + 1000 / r</span>.',
        'Solve <span class="chem">A\'(r) = 4 pi r - 1000 / r^2 = 0 =&gt; r^3 = 250 / pi</span>.'
      ],
      solution: '<p>Substituting <span class="chem">h = 500 / (pi r^2)</span> gives <span class="chem">A(r) = 2 pi r^2 + 1000 r^{-1}</span>. Setting <span class="chem">A\'(r) = 4 pi r - 1000 r^{-2} = 0</span> gives <span class="chem">r^3 = 250 / pi ≈ 79.5775</span>, so <span class="chem">r = (250 / pi)^{1/3} ≈ 4.30</span> <span class="unit">cm</span> (3 s.f.).</p>'
    },
    {
      id: 't5-1-q012',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.6, 5.8',
      type: 'numeric',
      marks: 6,
      stem: '<p>Consider <span class="chem">f(x) = (ln x) / x</span> for <span class="chem">x &gt; 0</span>. Find the exact maximum value of <span class="chem">f(x)</span>.</p>',
      answer: 0.36787944117144233,
      exact: true,
      answerInput: '1/e',
      hints: [
        'Differentiate using the quotient rule: <span class="chem">f\'(x) = (x(1/x) - (ln x)(1)) / x^2 = (1 - ln x) / x^2</span>.',
        'Set <span class="chem">f\'(x) = 0</span> to find <span class="chem">ln x = 1 =&gt; x = e</span>, then evaluate <span class="chem">f(e)</span> exactly, using <span class="chem">ln e = 1</span>.'
      ],
      solution: '<p>By the quotient rule, <span class="chem">f\'(x) = (1 - ln x) / x^2 = 0 =&gt; ln x = 1 =&gt; x = e</span>. For <span class="chem">0 &lt; x &lt; e</span>, <span class="chem">f\'(x) &gt; 0</span>, and for <span class="chem">x &gt; e</span>, <span class="chem">f\'(x) &lt; 0</span>, confirming a global maximum. The maximum value is <span class="chem">f(e) = (ln e) / e = 1 / e</span>.</p>'
    },
    {
      id: 't5-1-q013',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.7, 5.8',
      type: 'short',
      marks: 7,
      stem: '<p>Let <span class="chem">f(x) = x^3 - 3x^2 - 9x + 11</span> for <span class="chem">x in R</span>.<br>(a) Find the coordinates of the two stationary points on the graph of <span class="chem">f</span>, and determine the nature of each point using the second derivative. <strong>[5 marks]</strong><br>(b) Find the coordinates of the point of inflexion and state the set of values of <span class="chem">x</span> for which the graph of <span class="chem">f</span> is concave down. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) Local maximum at <span class="chem">(-1, 16)</span>; local minimum at <span class="chem">(3, -16)</span>.<br>(b) Point of inflexion at <span class="chem">(1, 0)</span>; concave down for <span class="chem">x &lt; 1</span>.</p>',
      markscheme: [
        'M1: Differentiate: <span class="chem">f\'(x) = 3x^2 - 6x - 9</span>.',
        'A1: Solve <span class="chem">f\'(x) = 3(x - 3)(x + 1) = 0</span> to get <span class="chem">x = -1</span> and <span class="chem">x = 3</span>.',
        'A1: Find both stationary points: <span class="chem">(-1, 16)</span> and <span class="chem">(3, -16)</span>.',
        'M1: Find <span class="chem">f\'\'(x) = 6x - 6</span> and evaluate it at both stationary points.',
        'R1: Since <span class="chem">f\'\'(-1) = -12 &lt; 0</span>, <span class="chem">(-1, 16)</span> is a local maximum, and since <span class="chem">f\'\'(3) = 12 &gt; 0</span>, <span class="chem">(3, -16)</span> is a local minimum.',
        'A1: Solve <span class="chem">f\'\'(x) = 6x - 6 = 0 =&gt; x = 1</span>, giving point of inflexion <span class="chem">(1, 0)</span>.',
        'A1: State that <span class="chem">f</span> is concave down (<span class="chem">f\'\'(x) &lt; 0</span>) for <span class="chem">x &lt; 1</span>.'
      ],
      hints: [
        'For part (a), factor <span class="chem">3x^2 - 6x - 9 = 0</span> by dividing through by <span class="chem">3</span> first.',
        'For part (b), solve <span class="chem">f\'\'(x) &lt; 0</span> for concave down.'
      ],
      solution: '<p>(a) <span class="chem">f\'(x) = 3x^2 - 6x - 9 = 3(x - 3)(x + 1) = 0 =&gt; x = -1, 3</span>. Substituting into <span class="chem">f(x)</span> gives <span class="chem">f(-1) = -1 - 3 + 9 + 11 = 16</span> and <span class="chem">f(3) = 27 - 27 - 27 + 11 = -16</span>. Using <span class="chem">f\'\'(x) = 6x - 6</span>, <span class="chem">f\'\'(-1) = -12 &lt; 0</span> (local maximum at <span class="chem">(-1, 16)</span>) and <span class="chem">f\'\'(3) = 12 &gt; 0</span> (local minimum at <span class="chem">(3, -16)</span>).<br>(b) <span class="chem">f\'\'(x) = 6x - 6 = 0 =&gt; x = 1</span>, <span class="chem">f(1) = 1 - 3 - 9 + 11 = 0</span>, and <span class="chem">f\'\'(x)</span> changes sign at <span class="chem">x = 1</span>, so the point of inflexion is <span class="chem">(1, 0)</span>. Since <span class="chem">6x - 6 &lt; 0 &lt;=&gt; x &lt; 1</span>, <span class="chem">f</span> is concave down for <span class="chem">x &lt; 1</span>.</p>'
    },
    {
      id: 't5-1-q014',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.4',
      type: 'numeric',
      marks: 7,
      stem: '<p>A tangent to the parabola <span class="chem">y = x^2 + 5</span> at a point <span class="chem">P(a, a^2 + 5)</span> in the first quadrant (<span class="chem">a &gt; 0</span>) passes through the point <span class="chem">(0, -4)</span>. Find the value of <span class="chem">a</span>.</p>',
      answer: 3,
      hints: [
        'Decode: “passes through <span class="chem">(0, -4)</span>” means that the point <span class="chem">(0, -4)</span> satisfies the equation of the tangent at <span class="chem">P</span>. So write that tangent in terms of <span class="chem">a</span> first, then substitute <span class="chem">x = 0</span>, <span class="chem">y = -4</span> to get an equation in <span class="chem">a</span>.',
        'At <span class="chem">P(a, a^2 + 5)</span>, the gradient of the tangent is <span class="chem">dy/dx = 2a</span>, so the tangent equation is <span class="chem">y - (a^2 + 5) = 2a(x - a)</span>.',
        'Substitute the external point <span class="chem">(x, y) = (0, -4)</span> into the tangent equation and solve for <span class="chem">a &gt; 0</span>.'
      ],
      solution: '<p>At <span class="chem">P(a, a^2 + 5)</span>, <span class="chem">m_T = 2a</span>, so the tangent line is <span class="chem">y - (a^2 + 5) = 2a(x - a) =&gt; y = 2a x - a^2 + 5</span>. Since it passes through <span class="chem">(0, -4)</span>, substituting <span class="chem">x = 0, y = -4</span> gives <span class="chem">-4 = -a^2 + 5 =&gt; a^2 = 9</span>. Since <span class="chem">a &gt; 0</span>, <span class="chem">a = 3</span>.</p>'
    },
    {
      id: 't5-1-q015',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.6',
      type: 'mcq',
      marks: 2,
      stem: '<p>Given the table of values at <span class="chem">x = 2</span> and <span class="chem">x = 5</span>:<br><span class="chem">g(2) = 5, g\'(2) = -3, f(2) = 4, f\'(2) = 7, f(5) = -1, f\'(5) = 6</span>.<br>If <span class="chem">h(x) = f(g(x))</span>, find <span class="chem">h\'(2)</span>.</p>',
      options: [
        '<span class="chem">-18</span>',
        '<span class="chem">-21</span>',
        '<span class="chem">42</span>',
        '<span class="chem">15</span>'
      ],
      answer: 0,
      misconception: {
        1: '−21 comes from computing f\'(2) × g\'(2) = 7 × (−3). In the chain rule h\'(2) = f\'(g(2)) · g\'(2), f\' must be evaluated at g(2) = 5, not at 2!',
        2: '42 comes from multiplying f\'(2) × f\'(5) = 7 × 6 instead of f\'(g(2)) × g\'(2).',
        3: '15 comes from multiplying g(2) × (−g\'(2)); use h\'(2) = f\'(g(2)) · g\'(2).'
      },
      hints: [
        'Write down the chain rule carefully: <span class="chem">h\'(x) = f\'(g(x)) * g\'(x)</span>.',
        'At <span class="chem">x = 2</span>, <span class="chem">h\'(2) = f\'(g(2)) * g\'(2)</span>. Look up <span class="chem">g(2) = 5</span> first, then find <span class="chem">f\'(5)</span>.'
      ],
      solution: '<p>By the chain rule, <span class="chem">h\'(2) = f\'(g(2)) * g\'(2) = f\'(5) * (-3) = 6 * (-3) = -18</span>.</p>'
    },
    {
      id: 't5-1-q016',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.8',
      type: 'short',
      marks: 8,
      stem: '<p>A lifeguard is at point <span class="chem">A</span> on a straight shoreline. A swimmer in distress is at point <span class="chem">B</span> in the water, <span class="chem">60</span> <span class="unit">m</span> perpendicular from a point <span class="chem">C</span> on the shoreline, where the distance <span class="chem">AC = 100</span> <span class="unit">m</span>. The lifeguard runs along the shore from <span class="chem">A</span> to a point <span class="chem">P</span> at a distance <span class="chem">x</span> <span class="unit">m</span> from <span class="chem">C</span> (<span class="chem">0 &lt;= x &lt;= 100</span>) at <span class="chem">5</span> <span class="unit">m s-1</span>, and then swims in a straight line from <span class="chem">P</span> to <span class="chem">B</span> at <span class="chem">3</span> <span class="unit">m s-1</span>.<br>(a) Show that the total time <span class="chem">T</span> seconds taken to reach the swimmer is <span class="chem">T(x) = (100 - x)/5 + sqrt(x^2 + 3600)/3</span>. <strong>[2 marks]</strong><br>(b) Find the value of <span class="chem">x</span> that minimizes <span class="chem">T(x)</span>, and calculate the minimum time required. <strong>[6 marks]</strong></p>',
      answer: '<p><span class="chem">x = 45</span> <span class="unit">m</span>; minimum time <span class="chem">T = 36</span> <span class="unit">s</span>.</p>',
      markscheme: [
        'M1: Use Pythagoras\' theorem for the swimming distance: <span class="chem">PB = sqrt(x^2 + 60^2)</span>.',
        'A1: Correct distances <span class="chem">AP = 100 - x</span> and <span class="chem">PB = sqrt(x^2 + 3600)</span>; dividing each by its speed gives <span class="chem">T(x) = (100 - x)/5 + sqrt(x^2 + 3600)/3</span> AG.',
        'M1: Differentiate using the chain rule.',
        'A1: <span class="chem">T\'(x) = -1/5 + x / (3 sqrt(x^2 + 3600))</span>.',
        'M1: Set <span class="chem">T\'(x) = 0 =&gt; 5x = 3 sqrt(x^2 + 3600)</span> and square both sides: <span class="chem">25x^2 = 9(x^2 + 3600)</span>.',
        'A1: Solve <span class="chem">16x^2 = 9 * 3600 =&gt; 4x = 3 * 60 =&gt; x = 45</span> <span class="unit">m</span>.',
        'R1: Justify the minimum: <span class="chem">T\'(x)</span> changes sign from <span class="chem">-</span> to <span class="chem">+</span> at <span class="chem">x = 45</span> (or compare <span class="chem">T(45) = 36</span> with the endpoint values <span class="chem">T(0) = 40</span> and <span class="chem">T(100) ≈ 38.9</span>).',
        'A1: Substitute <span class="chem">x = 45</span> into <span class="chem">T(x)</span>: <span class="chem">T(45) = 55/5 + sqrt(2025 + 3600)/3 = 11 + 75/3 = 36</span> <span class="unit">s</span>.'
      ],
      hints: [
        'Decode: the route has two legs at different speeds, so the total time is the sum of distance / speed for each leg. Then minimise <span class="chem">T(x)</span> on the closed interval <span class="chem">0 &lt;= x &lt;= 100</span>: compare the stationary value with the values at the endpoints.',
        'For part (a), use <span class="chem">time = distance / speed</span> for the shore segment <span class="chem">AP = 100 - x</span> and the water hypotenuse <span class="chem">PB = sqrt(x^2 + 60^2)</span>.',
        'For part (b), write <span class="chem">sqrt(x^2 + 3600) = (x^2 + 3600)^{1/2}</span> and use the chain rule to differentiate.'
      ],
      solution: '<p>(a) The shore distance is <span class="chem">AP = 100 - x</span> at <span class="chem">5</span> <span class="unit">m s-1</span>, taking <span class="chem">(100 - x)/5</span> seconds. By Pythagoras in right triangle <span class="chem">PCB</span>, <span class="chem">PB = sqrt(x^2 + 60^2) = sqrt(x^2 + 3600)</span> at <span class="chem">3</span> <span class="unit">m s-1</span>, giving <span class="chem">T(x) = (100 - x)/5 + sqrt(x^2 + 3600)/3</span>.<br>(b) Differentiating gives <span class="chem">T\'(x) = -1/5 + (1/3) * (2x) / (2 sqrt(x^2 + 3600)) = 0 =&gt; 5x = 3 sqrt(x^2 + 3600)</span>. Squaring gives <span class="chem">25x^2 = 9x^2 + 32400 =&gt; 16x^2 = 32400 =&gt; x^2 = 2025 =&gt; x = 45</span> <span class="unit">m</span> (with <span class="chem">T\'(x)</span> changing from <span class="chem">-</span> to <span class="chem">+</span>). Then <span class="chem">T(45) = (100 - 45)/5 + sqrt(2025 + 3600)/3 = 11 + 75/3 = 36</span> <span class="unit">s</span>.</p>'
    },
    {
      id: 't5-1-q017',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.7, 5.8',
      type: 'numeric',
      marks: 6,
      stem: '<p>The cubic curve <span class="chem">f(x) = a x^3 + b x^2 + c x + d</span> has a local maximum at <span class="chem">(0, 4)</span> and a point of inflexion at <span class="chem">(1, 2)</span>. Find the value of <span class="chem">a</span>.</p>',
      answer: 1,
      hints: [
        'Decode: each fact gives equations. A local maximum at <span class="chem">(0, 4)</span> gives <span class="chem">f(0) = 4</span> and <span class="chem">f\'(0) = 0</span>; a point of inflexion at <span class="chem">(1, 2)</span> gives <span class="chem">f(1) = 2</span> and <span class="chem">f\'\'(1) = 0</span>. That is four equations for the four unknowns <span class="chem">a, b, c, d</span>.',
        'Use <span class="chem">f(0) = 4</span> and <span class="chem">f\'(0) = 0</span> to find <span class="chem">d = 4</span> and <span class="chem">c = 0</span> immediately!',
        'Next use <span class="chem">f\'\'(1) = 6a(1) + 2b = 0 =&gt; b = -3a</span>, and substitute into <span class="chem">f(1) = a + b + 4 = 2</span>.'
      ],
      solution: '<p>We have <span class="chem">f\'(x) = 3a x^2 + 2b x + c</span> and <span class="chem">f\'\'(x) = 6a x + 2b</span>. Since <span class="chem">(0, 4)</span> is a local maximum, <span class="chem">f(0) = d = 4</span> and <span class="chem">f\'(0) = c = 0</span>. Since <span class="chem">(1, 2)</span> is a point of inflexion, <span class="chem">f\'\'(1) = 6a + 2b = 0 =&gt; b = -3a</span>, and <span class="chem">f(1) = a + b + 4 = 2 =&gt; a - 3a = -2 =&gt; -2a = -2 =&gt; a = 1</span>.</p>'
    },
    {
      id: 't5-1-q018',
      level: 'sl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.1',
      type: 'numeric',
      marks: 2,
      stem: '<p>The depth of water in a tank is <span class="chem">D(t) = 2t^2 - 3t + 10</span> <span class="unit">cm</span>, where <span class="chem">t</span> is the time in minutes. The average rate of change of the depth between <span class="chem">t = 2</span> and <span class="chem">t = 2 + h</span> is <span class="chem">(D(2 + h) - D(2)) / h = 5 + 2h</span>. By considering the limit as <span class="chem">h -&gt; 0</span>, find the rate at which the depth is changing when <span class="chem">t = 2</span>, in <span class="unit">cm</span> per minute.</p>',
      answer: 5,
      hints: [
        'The instantaneous rate of change is the limit of the average rate of change (the gradient of the chord) as <span class="chem">h -&gt; 0</span>.',
        'Let <span class="chem">h</span> get closer and closer to <span class="chem">0</span> in <span class="chem">5 + 2h</span>. You can check your answer with <span class="chem">D\'(t) = 4t - 3</span>.'
      ],
      solution: '<p>As <span class="chem">h -&gt; 0</span>, <span class="chem">5 + 2h -&gt; 5</span>, so <span class="chem">D\'(2) = 5</span>: the depth is increasing at <span class="chem">5</span> <span class="unit">cm</span> per minute when <span class="chem">t = 2</span>. Check: <span class="chem">D\'(t) = 4t - 3</span>, so <span class="chem">D\'(2) = 8 - 3 = 5</span>.</p>'
    },
    {
      id: 't5-1-q019',
      level: 'sl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.1',
      type: 'numeric',
      marks: 2,
      stem: '<p>The point <span class="chem">P(2, 8)</span> lies on the curve <span class="chem">y = x^3</span>. For the point <span class="chem">Q(2 + h, (2 + h)^3)</span>, the gradient of the chord <span class="chem">PQ</span> is <span class="chem">12.61</span> when <span class="chem">h = 0.1</span>, <span class="chem">12.0601</span> when <span class="chem">h = 0.01</span> and <span class="chem">12.006001</span> when <span class="chem">h = 0.001</span>. Deduce the gradient of the tangent to the curve at <span class="chem">P</span>.</p>',
      answer: 12,
      hints: [
        'As <span class="chem">Q</span> slides along the curve towards <span class="chem">P</span> (that is, <span class="chem">h -&gt; 0</span>), the chord <span class="chem">PQ</span> turns into the tangent at <span class="chem">P</span>.',
        'Look at the pattern in the chord gradients as <span class="chem">h</span> gets smaller. What single number are they closing in on?'
      ],
      solution: '<p>The gradient of the tangent at <span class="chem">P</span> is the limit of the chord gradients as <span class="chem">h -&gt; 0</span>. The values <span class="chem">12.61, 12.0601, 12.006001</span> approach <span class="chem">12</span>, so the gradient at <span class="chem">P</span> is <span class="chem">12</span>. (Check: the chord gradient is <span class="chem">((2 + h)^3 - 8) / h = 12 + 6h + h^2 -&gt; 12</span>, and <span class="chem">dy/dx = 3x^2 = 12</span> at <span class="chem">x = 2</span>.)</p>'
    },
    {
      id: 't5-1-q020',
      level: 'sl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.3',
      type: 'numeric',
      marks: 2,
      stem: '<p>Let <span class="chem">f(x) = 4x^3 - 6 / x + 7</span> for <span class="chem">x != 0</span>. Find <span class="chem">f\'(-1)</span>.</p>',
      answer: 18,
      hints: [
        'Write <span class="chem">6 / x</span> as <span class="chem">6x^{-1}</span> before you differentiate.',
        'You should get <span class="chem">f\'(x) = 12x^2 + 6x^{-2}</span>. Now substitute <span class="chem">x = -1</span> carefully.'
      ],
      solution: '<p><span class="chem">f(x) = 4x^3 - 6x^{-1} + 7</span>, so <span class="chem">f\'(x) = 12x^2 + 6x^{-2} = 12x^2 + 6 / x^2</span>. Then <span class="chem">f\'(-1) = 12(1) + 6 / 1 = 18</span>.</p>'
    },
    {
      id: 't5-1-q021',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.2, 5.3',
      type: 'short',
      marks: 4,
      stem: '<p>Let <span class="chem">f(x) = 2x^3 - 9x^2 - 24x + 5</span>. Find the set of values of <span class="chem">x</span> for which <span class="chem">f</span> is decreasing. <strong>[4 marks]</strong></p>',
      answer: '<p><span class="chem">-1 &lt; x &lt; 4</span> (or <span class="chem">-1 &lt;= x &lt;= 4</span>).</p>',
      markscheme: [
        'A1: <span class="chem">f\'(x) = 6x^2 - 18x - 24</span>.',
        'M1: Sets <span class="chem">f\'(x) &lt; 0</span> (or solves <span class="chem">f\'(x) = 0</span>), e.g. <span class="chem">6(x - 4)(x + 1)</span>.',
        'A1: Critical values <span class="chem">x = -1</span> and <span class="chem">x = 4</span>.',
        'A1: <span class="chem">-1 &lt; x &lt; 4</span> (accept <span class="chem">-1 &lt;= x &lt;= 4</span>).'
      ],
      hints: [
        '<span class="chem">f</span> is decreasing where its gradient <span class="chem">f\'(x)</span> is negative.',
        'Factorise <span class="chem">f\'(x) = 6x^2 - 18x - 24 = 6(x^2 - 3x - 4)</span>, then decide where the quadratic is below the <span class="chem">x</span>-axis.'
      ],
      solution: '<p><span class="chem">f\'(x) = 6x^2 - 18x - 24 = 6(x - 4)(x + 1)</span>. This is a positive quadratic with roots <span class="chem">-1</span> and <span class="chem">4</span>, so <span class="chem">f\'(x) &lt; 0</span> between the roots: <span class="chem">f</span> is decreasing for <span class="chem">-1 &lt; x &lt; 4</span>.</p>'
    },
    {
      id: 't5-1-q022',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.6',
      type: 'numeric',
      marks: 4,
      stem: '<p>Let <span class="chem">f(x) = x sqrt(2x + 5)</span> for <span class="chem">x &gt; -5/2</span>. Find the exact value of <span class="chem">f\'(2)</span>.</p>',
      answer: 3.6666666666666665,
      exact: true,
      answerInput: '11/3',
      hints: [
        'This is a product <span class="chem">u v</span> with <span class="chem">u = x</span> and <span class="chem">v = (2x + 5)^{1/2}</span>. Differentiating <span class="chem">v</span> needs the chain rule.',
        '<span class="chem">v\' = (1/2)(2x + 5)^{-1/2} * 2 = 1 / sqrt(2x + 5)</span>, so <span class="chem">f\'(x) = sqrt(2x + 5) + x / sqrt(2x + 5)</span>.'
      ],
      solution: '<p>By the product and chain rules, <span class="chem">f\'(x) = 1 * sqrt(2x + 5) + x * (1/2)(2x + 5)^{-1/2} * 2 = sqrt(2x + 5) + x / sqrt(2x + 5)</span>. At <span class="chem">x = 2</span>, <span class="chem">sqrt(9) = 3</span>, so <span class="chem">f\'(2) = 3 + 2/3 = 11/3</span>.</p>'
    },
    {
      id: 't5-1-q023',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.4, 5.6',
      type: 'numeric',
      marks: 5,
      stem: '<p>The tangent to the curve <span class="chem">y = e^{2x} ln x</span> at the point where <span class="chem">x = 1</span> meets the <span class="chem">y</span>-axis at <span class="chem">(0, k)</span>. Find the exact value of <span class="chem">k</span>.</p>',
      answer: -7.38905609893065,
      exact: true,
      answerInput: '-e^2',
      hints: [
        'First find the point of contact: at <span class="chem">x = 1</span>, <span class="chem">ln 1 = 0</span>, so <span class="chem">y = 0</span>.',
        'Use the product rule: <span class="chem">dy/dx = 2e^{2x} ln x + e^{2x} / x</span>. Evaluate it at <span class="chem">x = 1</span>, write the tangent, then put <span class="chem">x = 0</span>.'
      ],
      solution: '<p>At <span class="chem">x = 1</span>, <span class="chem">y = e^2 ln 1 = 0</span>. By the product rule, <span class="chem">dy/dx = 2e^{2x} ln x + e^{2x} * (1/x)</span>, so at <span class="chem">x = 1</span> the gradient is <span class="chem">0 + e^2 = e^2</span>. The tangent is <span class="chem">y - 0 = e^2(x - 1)</span>. At <span class="chem">x = 0</span>, <span class="chem">y = -e^2</span>, so <span class="chem">k = -e^2</span>.</p>'
    },
    {
      id: 't5-1-q024',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.6, 5.8',
      type: 'short',
      marks: 6,
      stem: '<p>Let <span class="chem">f(x) = (x + 1) / (x^2 + 3)</span> for <span class="chem">x \\in \\mathbb{R}</span>.<br>(a) Show that <span class="chem">f\'(x) = (3 - 2x - x^2) / (x^2 + 3)^2</span>. <strong>[2 marks]</strong><br>(b) Hence find the coordinates of the local maximum point on the graph of <span class="chem">f</span>, justifying that it is a maximum. <strong>[4 marks]</strong></p>',
      answer: '<p>(a) Quotient rule, then simplify the numerator.<br>(b) Local maximum at <span class="chem">(1, 1/2)</span>; <span class="chem">f\'</span> changes from positive to negative at <span class="chem">x = 1</span>.</p>',
      markscheme: [
        'M1: Substitutes into the quotient rule: <span class="chem">f\'(x) = ((x^2 + 3)(1) - (x + 1)(2x)) / (x^2 + 3)^2</span>.',
        'A1: Expands the numerator <span class="chem">x^2 + 3 - 2x^2 - 2x = 3 - 2x - x^2</span>, giving the result (AG).',
        'M1: Sets the numerator equal to zero: <span class="chem">3 - 2x - x^2 = -(x + 3)(x - 1) = 0</span>.',
        'A1: <span class="chem">x = 1</span> (and <span class="chem">x = -3</span>).',
        'R1: <span class="chem">f\'</span> changes from positive to negative at <span class="chem">x = 1</span> (e.g. <span class="chem">f\'(0) = 1/3 &gt; 0</span>, <span class="chem">f\'(2) = -5/49 &lt; 0</span>), so it is a maximum.',
        'A1: <span class="chem">(1, 1/2)</span>.'
      ],
      hints: [
        'For (a), take <span class="chem">u = x + 1</span> and <span class="chem">v = x^2 + 3</span> in <span class="chem">(v u\' - u v\') / v^2</span>.',
        'For (b), the denominator <span class="chem">(x^2 + 3)^2</span> is always positive, so the sign of <span class="chem">f\'(x)</span> is the sign of the numerator <span class="chem">-(x + 3)(x - 1)</span>.'
      ],
      solution: '<p>(a) <span class="chem">f\'(x) = ((x^2 + 3) - (x + 1)(2x)) / (x^2 + 3)^2 = (x^2 + 3 - 2x^2 - 2x) / (x^2 + 3)^2 = (3 - 2x - x^2) / (x^2 + 3)^2</span>.<br>(b) <span class="chem">f\'(x) = 0 &lt;=&gt; 3 - 2x - x^2 = -(x + 3)(x - 1) = 0</span>, so <span class="chem">x = -3</span> or <span class="chem">x = 1</span>. The denominator is positive, and the numerator is positive for <span class="chem">-3 &lt; x &lt; 1</span> and negative for <span class="chem">x &gt; 1</span>, so <span class="chem">f\'</span> changes from <span class="chem">+</span> to <span class="chem">-</span> at <span class="chem">x = 1</span>: a local maximum. <span class="chem">f(1) = 2/4 = 1/2</span>, so the maximum is at <span class="chem">(1, 1/2)</span>. (At <span class="chem">x = -3</span> the sign goes from <span class="chem">-</span> to <span class="chem">+</span>: a local minimum <span class="chem">(-3, -1/6)</span>.)</p>'
    },
    {
      id: 't5-1-q025',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.7, 5.8',
      type: 'short',
      marks: 7,
      stem: '<p>Let <span class="chem">f(x) = x^4 - 4x^3 + 10</span>.<br>(a) Find <span class="chem">f\'(x)</span> and <span class="chem">f\'\'(x)</span>. <strong>[2 marks]</strong><br>(b) Find the coordinates of the points of inflexion on the graph of <span class="chem">f</span>, justifying your answer. <strong>[4 marks]</strong><br>(c) Determine which of these points is a stationary point of inflexion. <strong>[1 mark]</strong></p>',
      answer: '<p>(a) <span class="chem">f\'(x) = 4x^3 - 12x^2</span>, <span class="chem">f\'\'(x) = 12x^2 - 24x</span>.<br>(b) <span class="chem">(0, 10)</span> and <span class="chem">(2, -6)</span>.<br>(c) <span class="chem">(0, 10)</span>, since <span class="chem">f\'(0) = 0</span> (while <span class="chem">f\'(2) = -16</span>).</p>',
      markscheme: [
        'A1: <span class="chem">f\'(x) = 4x^3 - 12x^2</span>.',
        'A1: <span class="chem">f\'\'(x) = 12x^2 - 24x</span>.',
        'M1: Sets <span class="chem">f\'\'(x) = 12x(x - 2) = 0</span>.',
        'A1: <span class="chem">x = 0</span> and <span class="chem">x = 2</span>.',
        'R1: <span class="chem">f\'\'</span> changes sign at both values (e.g. <span class="chem">f\'\'(-1) = 36</span>, <span class="chem">f\'\'(1) = -12</span>, <span class="chem">f\'\'(3) = 36</span>).',
        'A1: <span class="chem">(0, 10)</span> and <span class="chem">(2, -6)</span>.',
        'A1: <span class="chem">f\'(0) = 0</span> so <span class="chem">(0, 10)</span> is the stationary point of inflexion; <span class="chem">f\'(2) = -16 != 0</span>, so <span class="chem">(2, -6)</span> is non-stationary.'
      ],
      hints: [
        'A point of inflexion needs two things: <span class="chem">f\'\'(x) = 0</span> <strong>and</strong> <span class="chem">f\'\'(x)</span> changes sign there.',
        '<span class="chem">f\'\'(x) = 12x(x - 2)</span>. Test the sign of <span class="chem">f\'\'</span> on each side of <span class="chem">x = 0</span> and <span class="chem">x = 2</span>. For (c), a stationary point of inflexion also has <span class="chem">f\'(x) = 0</span>.'
      ],
      solution: '<p>(a) <span class="chem">f\'(x) = 4x^3 - 12x^2</span> and <span class="chem">f\'\'(x) = 12x^2 - 24x</span>.<br>(b) <span class="chem">f\'\'(x) = 12x(x - 2) = 0 =&gt; x = 0</span> or <span class="chem">x = 2</span>. Signs: <span class="chem">f\'\'(-1) = 36 &gt; 0</span>, <span class="chem">f\'\'(1) = -12 &lt; 0</span>, <span class="chem">f\'\'(3) = 36 &gt; 0</span>, so <span class="chem">f\'\'</span> changes sign at both. <span class="chem">f(0) = 10</span> and <span class="chem">f(2) = 16 - 32 + 10 = -6</span>: the points of inflexion are <span class="chem">(0, 10)</span> and <span class="chem">(2, -6)</span>.<br>(c) <span class="chem">f\'(0) = 0</span>, so <span class="chem">(0, 10)</span> is a stationary point of inflexion. <span class="chem">f\'(2) = 32 - 48 = -16 != 0</span>, so <span class="chem">(2, -6)</span> is a non-stationary point of inflexion.</p>'
    },
    {
      id: 't5-1-q026',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.7, 5.8',
      type: 'short',
      marks: 6,
      stem: '<p>Let <span class="chem">f(x) = x^4 - 4x^3 + 6x^2 + 2x</span>. A student writes: “<span class="chem">f\'\'(1) = 0</span>, so the graph of <span class="chem">f</span> has a point of inflexion at <span class="chem">x = 1</span>.”<br>(a) Show that <span class="chem">f\'\'(x) = 12(x - 1)^2</span>. <strong>[2 marks]</strong><br>(b) Explain why the student’s conclusion is wrong. <strong>[2 marks]</strong><br>(c) Show that <span class="chem">f</span> has exactly one stationary point, and determine its nature. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">f\'(x) = 4x^3 - 12x^2 + 12x + 2</span>, <span class="chem">f\'\'(x) = 12x^2 - 24x + 12 = 12(x - 1)^2</span>.<br>(b) <span class="chem">f\'\'(x) &gt;= 0</span> on both sides of <span class="chem">x = 1</span>, so it does not change sign: there is no point of inflexion (the graph is concave up everywhere).<br>(c) <span class="chem">f\'(x) = 4(x - 1)^3 + 6 = 0</span> has the single solution <span class="chem">x = 1 - (3/2)^{1/3}</span>; there <span class="chem">f\'\'(x) &gt; 0</span>, so it is a local minimum.</p>',
      markscheme: [
        'A1: <span class="chem">f\'(x) = 4x^3 - 12x^2 + 12x + 2</span>.',
        'A1: <span class="chem">f\'\'(x) = 12x^2 - 24x + 12 = 12(x^2 - 2x + 1) = 12(x - 1)^2</span> (AG).',
        'R1: <span class="chem">f\'\'(x) = 12(x - 1)^2 &gt;= 0</span> for all <span class="chem">x</span>, so <span class="chem">f\'\'</span> does not change sign at <span class="chem">x = 1</span>.',
        'A1: So <span class="chem">x = 1</span> is not a point of inflexion; <span class="chem">f\'\'(x) = 0</span> alone is not enough.',
        'M1: Writes <span class="chem">f\'(x) = 4(x - 1)^3 + 6 = 0</span>, so <span class="chem">(x - 1)^3 = -3/2</span>, which has exactly one real solution <span class="chem">x = 1 - (3/2)^{1/3}</span>.',
        'R1: At this <span class="chem">x</span> (which is not <span class="chem">1</span>), <span class="chem">f\'\'(x) &gt; 0</span>, so the stationary point is a local minimum.'
      ],
      hints: [
        'Decode: the question is testing the full definition of a point of inflexion. <span class="chem">f\'\'(x) = 0</span> is necessary but not sufficient: <span class="chem">f\'\'</span> must also change sign.',
        'For (b), look at the sign of <span class="chem">12(x - 1)^2</span> just to the left and just to the right of <span class="chem">x = 1</span>.',
        'For (c), compare <span class="chem">f\'(x)</span> with <span class="chem">4(x - 1)^3 = 4x^3 - 12x^2 + 12x - 4</span>. A cube equals a number at exactly one real value.'
      ],
      solution: '<p><strong>Decode:</strong> the student used only half of the test for an inflexion point. We need <span class="chem">f\'\'(x) = 0</span> and a change of sign of <span class="chem">f\'\'</span>.<br>(a) <span class="chem">f\'(x) = 4x^3 - 12x^2 + 12x + 2</span>, so <span class="chem">f\'\'(x) = 12x^2 - 24x + 12 = 12(x - 1)^2</span>.<br>(b) <span class="chem">12(x - 1)^2 &gt; 0</span> for every <span class="chem">x != 1</span>, so <span class="chem">f\'\'</span> is positive on both sides of <span class="chem">x = 1</span> and does not change sign. The concavity does not change, so there is no point of inflexion at <span class="chem">x = 1</span> (the graph is concave up everywhere).<br>(c) <span class="chem">4(x - 1)^3 = 4x^3 - 12x^2 + 12x - 4</span>, so <span class="chem">f\'(x) = 4(x - 1)^3 + 6</span>. Then <span class="chem">f\'(x) = 0 &lt;=&gt; (x - 1)^3 = -3/2 &lt;=&gt; x = 1 - (3/2)^{1/3}</span>, the only real solution. At this point <span class="chem">x != 1</span>, so <span class="chem">f\'\'(x) &gt; 0</span>: a local minimum.</p>'
    },
    {
      id: 't5-1-q027',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.8',
      type: 'numeric',
      marks: 6,
      unit: 'm2',
      stem: '<p>A farmer builds a rectangular pen against a straight stone wall that is <span class="chem">30</span> <span class="unit">m</span> long. The wall forms one complete side of the pen, so no fence is needed on that side, and the side along the wall cannot be longer than the wall. The other three sides use exactly <span class="chem">80</span> <span class="unit">m</span> of fencing. Find the greatest possible area of the pen, in <span class="unit">m2</span>.</p>',
      answer: 750,
      hints: [
        'Decode: this is an optimisation with a hidden restriction. The side along the wall is at most 30 m, so the variable has a restricted domain, and the maximum may be at an endpoint rather than where the derivative is zero.',
        'Let each side perpendicular to the wall be <span class="chem">x</span> <span class="unit">m</span>. Then the side along the wall is <span class="chem">80 - 2x</span>, and <span class="chem">80 - 2x &lt;= 30</span> gives <span class="chem">x &gt;= 25</span>.',
        '<span class="chem">A(x) = x(80 - 2x)</span>, <span class="chem">A\'(x) = 80 - 4x</span>. Where is <span class="chem">A\'(x) = 0</span>? Is that value allowed? What is the sign of <span class="chem">A\'</span> for <span class="chem">25 &lt;= x &lt; 40</span>?'
      ],
      solution: '<p><strong>Decode:</strong> the wall length is a constraint on the domain, so we must check the endpoint, not just solve <span class="chem">A\'(x) = 0</span>.<br>Let the two sides perpendicular to the wall be <span class="chem">x</span> <span class="unit">m</span>; the side along the wall is <span class="chem">80 - 2x</span> <span class="unit">m</span>. We need <span class="chem">0 &lt; 80 - 2x &lt;= 30</span>, so <span class="chem">25 &lt;= x &lt; 40</span>.<br><span class="chem">A(x) = x(80 - 2x) = 80x - 2x^2</span> and <span class="chem">A\'(x) = 80 - 4x = 0 =&gt; x = 20</span>, which is <strong>not</strong> in the domain. For <span class="chem">25 &lt;= x &lt; 40</span>, <span class="chem">A\'(x) &lt; 0</span>, so <span class="chem">A</span> is decreasing and its greatest value is at the endpoint <span class="chem">x = 25</span>: the pen is <span class="chem">25</span> <span class="unit">m</span> by <span class="chem">30</span> <span class="unit">m</span>, and <span class="chem">A = 25 * 30 = 750</span> <span class="unit">m2</span>. (The unrestricted answer <span class="chem">A(20) = 800</span> would need a 40 m wall.)</p>'
    },
    {
      id: 't5-1-q028',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.4',
      type: 'short',
      marks: 6,
      stem: '<p>The point <span class="chem">P(3, 2)</span> lies on the curve <span class="chem">y = x^2 - 4x + 5</span>.<br>(a) Find the equation of the normal to the curve at <span class="chem">P</span>. <strong>[3 marks]</strong><br>(b) The normal meets the curve again at <span class="chem">Q</span>. Find the coordinates of <span class="chem">Q</span>. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">y = -x/2 + 7/2</span> (or <span class="chem">x + 2y = 7</span>).<br>(b) <span class="chem">Q(1/2, 13/4)</span>.</p>',
      markscheme: [
        'A1: <span class="chem">dy/dx = 2x - 4</span>, so the gradient of the tangent at <span class="chem">P</span> is <span class="chem">2</span>.',
        'M1: Gradient of the normal is <span class="chem">-1/2</span> (negative reciprocal).',
        'A1: <span class="chem">y - 2 = -(1/2)(x - 3)</span>, i.e. <span class="chem">y = -x/2 + 7/2</span>.',
        'M1: Equates the curve and the normal: <span class="chem">x^2 - 4x + 5 = -x/2 + 7/2</span>.',
        'A1: <span class="chem">2x^2 - 7x + 3 = 0 =&gt; (2x - 1)(x - 3) = 0</span>, so <span class="chem">x = 1/2</span> (<span class="chem">x = 3</span> is <span class="chem">P</span>).',
        'A1: <span class="chem">Q(1/2, 13/4)</span>.'
      ],
      hints: [
        'The normal is perpendicular to the tangent, so its gradient is <span class="chem">-1 / (dy/dx)</span>.',
        'For (b), set the curve equal to the normal. You already know one root, <span class="chem">x = 3</span>, which helps you factorise.'
      ],
      solution: '<p>(a) <span class="chem">dy/dx = 2x - 4 = 2</span> at <span class="chem">x = 3</span>, so the normal has gradient <span class="chem">-1/2</span>: <span class="chem">y - 2 = -(1/2)(x - 3) =&gt; y = -x/2 + 7/2</span>.<br>(b) <span class="chem">x^2 - 4x + 5 = -x/2 + 7/2 =&gt; 2x^2 - 8x + 10 = -x + 7 =&gt; 2x^2 - 7x + 3 = 0 =&gt; (2x - 1)(x - 3) = 0</span>. The root <span class="chem">x = 3</span> is <span class="chem">P</span>, so <span class="chem">x = 1/2</span> and <span class="chem">y = 1/4 - 2 + 5 = 13/4</span>: <span class="chem">Q(1/2, 13/4)</span>.</p>'
    },
    {
      id: 't5-1-q029',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.2, 5.7',
      type: 'short',
      marks: 6,
      stem: '<p>Let <span class="chem">f(x) = x^3 - 6x^2 + 9x + 1</span>.<br>(a) Find <span class="chem">f\'(x)</span>. <strong>[1 mark]</strong><br>(b) Sketch the graph of <span class="chem">y = f\'(x)</span> for <span class="chem">0 &lt;= x &lt;= 4</span>, labelling the intercepts with the axes and the vertex. <strong>[3 marks]</strong><br>(c) Using your sketch, write down (i) the interval on which <span class="chem">f</span> is decreasing; (ii) the <span class="chem">x</span>-coordinate of the point of inflexion on the graph of <span class="chem">f</span>. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">f\'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)</span>.<br>(b) An upward parabola through <span class="chem">(0, 9)</span>, <span class="chem">(1, 0)</span>, <span class="chem">(3, 0)</span> and <span class="chem">(4, 9)</span>, with vertex <span class="chem">(2, -3)</span>.<br>(c)(i) <span class="chem">1 &lt; x &lt; 3</span>; (ii) <span class="chem">x = 2</span>.</p>',
      markscheme: [
        'A1: <span class="chem">f\'(x) = 3x^2 - 12x + 9</span>.',
        'A1: Sketch is a concave-up parabola over <span class="chem">0 &lt;= x &lt;= 4</span>.',
        'A1: <span class="chem">x</span>-intercepts <span class="chem">(1, 0)</span>, <span class="chem">(3, 0)</span> and <span class="chem">y</span>-intercept <span class="chem">(0, 9)</span> labelled.',
        'A1: Vertex <span class="chem">(2, -3)</span> labelled.',
        'A1: (i) <span class="chem">1 &lt; x &lt; 3</span> (where the graph of <span class="chem">f\'</span> is below the <span class="chem">x</span>-axis).',
        'A1: (ii) <span class="chem">x = 2</span> (the turning point of <span class="chem">f\'</span>, where <span class="chem">f\'\'</span> changes sign).'
      ],
      hints: [
        '<span class="chem">f\'(x)</span> is a quadratic: find its roots by factorising and its vertex by completing the square or using <span class="chem">x = -b / (2a)</span>.',
        '<span class="chem">f</span> decreases where the graph of <span class="chem">f\'</span> is below the axis. <span class="chem">f\'\'</span> is the gradient of <span class="chem">f\'</span>, so an inflexion of <span class="chem">f</span> is at a turning point of <span class="chem">f\'</span>.'
      ],
      solution: '<p>(a) <span class="chem">f\'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)</span>.<br>(b) <span class="chem">f\'(0) = 9</span>, roots <span class="chem">x = 1, 3</span>, vertex at <span class="chem">x = 2</span> with <span class="chem">f\'(2) = 12 - 24 + 9 = -3</span>, and <span class="chem">f\'(4) = 9</span>. Draw a symmetric upward parabola through these points.<br>(c)(i) The graph of <span class="chem">f\'</span> is below the <span class="chem">x</span>-axis for <span class="chem">1 &lt; x &lt; 3</span>, so <span class="chem">f</span> is decreasing there. (ii) The gradient of <span class="chem">f\'</span> (that is, <span class="chem">f\'\'</span>) is negative before the vertex and positive after it, so <span class="chem">f\'\'</span> changes sign at <span class="chem">x = 2</span>: the point of inflexion of <span class="chem">f</span> is at <span class="chem">x = 2</span>.</p>'
    },
    {
      id: 't5-1-q030',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.6, 5.8',
      type: 'numeric',
      marks: 6,
      stem: '<p>Let <span class="chem">f(x) = 2 sin x + cos 2x</span> for <span class="chem">0 &lt;= x &lt;= pi</span>. Find the maximum value of <span class="chem">f</span>.</p>',
      answer: 1.5,
      exact: true,
      answerInput: '3/2',
      hints: [
        'Differentiate with the chain rule: <span class="chem">f\'(x) = 2 cos x - 2 sin 2x</span>. Use <span class="chem">sin 2x = 2 sin x cos x</span> to factorise.',
        '<span class="chem">f\'(x) = 2 cos x (1 - 2 sin x)</span>. Solve <span class="chem">cos x = 0</span> and <span class="chem">sin x = 1/2</span> in <span class="chem">[0, pi]</span>, then compare <span class="chem">f</span> at these points <strong>and</strong> at the endpoints.'
      ],
      solution: '<p><span class="chem">f\'(x) = 2 cos x - 2 sin 2x = 2 cos x - 4 sin x cos x = 2 cos x (1 - 2 sin x)</span>. In <span class="chem">[0, pi]</span>: <span class="chem">cos x = 0 =&gt; x = pi/2</span>; <span class="chem">sin x = 1/2 =&gt; x = pi/6, 5pi/6</span>.<br>Values: <span class="chem">f(pi/6) = 1 + 1/2 = 3/2</span>, <span class="chem">f(pi/2) = 2 - 1 = 1</span>, <span class="chem">f(5pi/6) = 1 + 1/2 = 3/2</span>, and at the endpoints <span class="chem">f(0) = 1</span>, <span class="chem">f(pi) = 1</span>.<br>The maximum value is <span class="chem">3/2</span> (at <span class="chem">x = pi/6</span> and <span class="chem">x = 5pi/6</span>).</p>'
    },
    {
      id: 't5-1-q031',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.4',
      type: 'numeric',
      marks: 7,
      stem: '<p>Two different tangents to the curve <span class="chem">y = x^2</span> pass through the point <span class="chem">P(1, -3)</span>, which does not lie on the curve. They touch the curve at <span class="chem">A</span> and <span class="chem">B</span>. Find the area of triangle <span class="chem">PAB</span>.</p>',
      answer: 16,
      hints: [
        'Decode: you do not know where the tangents touch the curve. Call a point of contact <span class="chem">(a, a^2)</span>, write the tangent there in terms of <span class="chem">a</span>, and use the fact that it passes through <span class="chem">P</span> to find <span class="chem">a</span>.',
        'The tangent at <span class="chem">(a, a^2)</span> is <span class="chem">y = 2a x - a^2</span>. Substituting <span class="chem">(1, -3)</span> gives a quadratic in <span class="chem">a</span>.',
        'You should find <span class="chem">A(3, 9)</span> and <span class="chem">B(-1, 1)</span>. Use the vectors <span class="chem">PA</span> and <span class="chem">PB</span> (or a rectangle minus three right triangles) to find the area.'
      ],
      solution: '<p><strong>Decode:</strong> the unknowns are the points of contact, so let one be <span class="chem">(a, a^2)</span> and make the tangent there pass through <span class="chem">P</span>.<br>The gradient at <span class="chem">(a, a^2)</span> is <span class="chem">2a</span>, so the tangent is <span class="chem">y - a^2 = 2a(x - a) =&gt; y = 2a x - a^2</span>. Through <span class="chem">(1, -3)</span>: <span class="chem">-3 = 2a - a^2 =&gt; a^2 - 2a - 3 = 0 =&gt; (a - 3)(a + 1) = 0</span>, so <span class="chem">A(3, 9)</span> and <span class="chem">B(-1, 1)</span>.<br>With <span class="chem">PA = (2, 12)</span> and <span class="chem">PB = (-2, 4)</span>, the area is <span class="chem">(1/2)|2 * 4 - 12 * (-2)| = (1/2)(8 + 24) = 16</span>.</p>'
    },
    {
      id: 't5-1-q032',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.1, 5.6',
      type: 'numeric',
      marks: 3,
      stem: '<p>The number of people, <span class="chem">N</span> hundred, who have heard a rumour <span class="chem">t</span> days after it starts is modelled by <span class="chem">N(t) = 60 - 40e^{-t/2}</span>. Find the rate at which <span class="chem">N</span> is increasing when <span class="chem">t = 2 ln 4</span>, in hundreds of people per day.</p>',
      answer: 5,
      hints: [
        'The rate of increase is the derivative <span class="chem">N\'(t)</span>. Use the chain rule on <span class="chem">e^{-t/2}</span>.',
        '<span class="chem">N\'(t) = 20e^{-t/2}</span>. At <span class="chem">t = 2 ln 4</span>, <span class="chem">-t/2 = -ln 4</span>, and <span class="chem">e^{-ln 4} = 1/4</span>.'
      ],
      solution: '<p><span class="chem">N\'(t) = -40 * (-1/2) e^{-t/2} = 20e^{-t/2}</span>. When <span class="chem">t = 2 ln 4</span>, <span class="chem">e^{-t/2} = e^{-ln 4} = 1/4</span>, so <span class="chem">N\'(2 ln 4) = 20 * 1/4 = 5</span>: the number is increasing at <span class="chem">5</span> hundred people per day.</p>'
    },
    {
      id: 't5-1-q033',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.8',
      type: 'numeric',
      marks: 7,
      dp: 2,
      stem: '<p>A ferry makes a <span class="chem">300</span> <span class="unit">km</span> crossing at a constant speed of <span class="chem">v</span> <span class="unit">km h-1</span>. Its running cost is <span class="chem">160 + 0.1v^2</span> dollars <strong>per hour</strong>. The greatest speed the ferry can reach is <span class="chem">32</span> <span class="unit">km h-1</span>. Find the minimum cost of one crossing, in dollars, correct to two decimal places.</p>',
      answer: 2460,
      hints: [
        'Decode: the cost is given per hour, but the question wants the cost of the whole trip, so first multiply by the time taken, <span class="chem">300 / v</span> hours. Then remember the speed limit: <span class="chem">0 &lt; v &lt;= 32</span>.',
        'Total cost <span class="chem">C(v) = (300 / v)(160 + 0.1v^2) = 48000 / v + 30v</span>. Solve <span class="chem">C\'(v) = 0</span>.',
        'The stationary point is at <span class="chem">v = 40</span>, which the ferry cannot reach. What is the sign of <span class="chem">C\'(v)</span> for <span class="chem">0 &lt; v &lt;= 32</span>?'
      ],
      solution: '<p><strong>Decode:</strong> convert the hourly cost into a trip cost, and treat the top speed as an endpoint of the domain.<br>Time <span class="chem">= 300 / v</span> hours, so <span class="chem">C(v) = (300 / v)(160 + 0.1v^2) = 48000v^{-1} + 30v</span> for <span class="chem">0 &lt; v &lt;= 32</span>.<br><span class="chem">C\'(v) = -48000 / v^2 + 30 = 0 =&gt; v^2 = 1600 =&gt; v = 40</span>, outside the domain. For <span class="chem">0 &lt; v &lt;= 32</span>, <span class="chem">v^2 &lt; 1600</span> so <span class="chem">C\'(v) &lt; 0</span>: the cost decreases all the way to the endpoint. The minimum is <span class="chem">C(32) = 48000/32 + 30(32) = 1500 + 960 = 2460</span>, i.e. <span class="chem">2460.00</span> dollars.</p>'
    },
    {
      id: 't5-1-q034',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.3, 5.4',
      type: 'short',
      marks: 4,
      stem: '<p>Find the coordinates of the points on the curve <span class="chem">y = x^3 - 3x^2 + 1</span> at which the tangent is parallel to the line <span class="chem">y = 9x + 2</span>. <strong>[4 marks]</strong></p>',
      answer: '<p><span class="chem">(3, 1)</span> and <span class="chem">(-1, -3)</span>.</p>',
      markscheme: [
        'A1: <span class="chem">dy/dx = 3x^2 - 6x</span>.',
        'M1: Sets <span class="chem">3x^2 - 6x = 9</span> (parallel lines have equal gradients).',
        'A1: <span class="chem">x^2 - 2x - 3 = 0 =&gt; x = 3</span> or <span class="chem">x = -1</span>.',
        'A1: <span class="chem">(3, 1)</span> and <span class="chem">(-1, -3)</span>.'
      ],
      hints: [
        'Parallel means the tangent has the same gradient as the line, <span class="chem">9</span>.',
        'Solve <span class="chem">dy/dx = 9</span>, then substitute each <span class="chem">x</span> back into the equation of the <strong>curve</strong> (not the line) to get <span class="chem">y</span>.'
      ],
      solution: '<p><span class="chem">dy/dx = 3x^2 - 6x = 9 =&gt; x^2 - 2x - 3 = 0 =&gt; (x - 3)(x + 1) = 0</span>. At <span class="chem">x = 3</span>, <span class="chem">y = 27 - 27 + 1 = 1</span>; at <span class="chem">x = -1</span>, <span class="chem">y = -1 - 3 + 1 = -3</span>. The points are <span class="chem">(3, 1)</span> and <span class="chem">(-1, -3)</span>.</p>'
    },
    {
      id: 't5-1-q035',
      level: 'sl',
      tier: 'foundation',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.4, 5.6',
      type: 'numeric',
      marks: 2,
      sigfigs: 3,
      stem: '<p>Let <span class="chem">f(x) = 3 sin(x) e^{-0.2x}</span>. Find the gradient of the tangent to the graph of <span class="chem">f</span> at the point where <span class="chem">x = 1.3</span>. Give your answer correct to 3 significant figures.</p>',
      answer: 0.1729943479067936,
      hints: [
        'The gradient of the tangent is <span class="chem">f\'(1.3)</span>. Your GDC can evaluate a derivative at a point directly (e.g. the <span class="chem">dy/dx</span> or <span class="chem">d/dx</span> function).',
        'Make sure your GDC is in <strong>radian</strong> mode: calculus with trigonometric functions always uses radians.'
      ],
      solution: '<p>Using the GDC (radian mode), <span class="chem">f\'(1.3) ≈ 0.172994…</span>, so the gradient is <span class="chem">0.173</span> (3 s.f.). By hand, <span class="chem">f\'(x) = e^{-0.2x}(3 cos x - 0.6 sin x)</span>, which gives the same value.</p>'
    },
    {
      id: 't5-1-q036',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.8',
      type: 'numeric',
      marks: 5,
      sigfigs: 3,
      unit: 'cm3',
      stem: '<p>An open box is made from a rectangular sheet of card measuring <span class="chem">36</span> <span class="unit">cm</span> by <span class="chem">22</span> <span class="unit">cm</span>. A square of side <span class="chem">x</span> <span class="unit">cm</span> is cut from each corner and the sides are folded up. Find the maximum possible volume of the box, in <span class="unit">cm3</span>, correct to 3 significant figures.</p>',
      answer: 1579.82509938931,
      hints: [
        'The base of the box measures <span class="chem">(36 - 2x)</span> by <span class="chem">(22 - 2x)</span> and its height is <span class="chem">x</span>. State the domain: <span class="chem">0 &lt; x &lt; 11</span>.',
        'Graph <span class="chem">V(x) = x(36 - 2x)(22 - 2x)</span> on <span class="chem">0 &lt; x &lt; 11</span> and use the GDC maximum feature (or solve <span class="chem">V\'(x) = 0</span>).'
      ],
      solution: '<p><span class="chem">V(x) = x(36 - 2x)(22 - 2x)</span> for <span class="chem">0 &lt; x &lt; 11</span>. <span class="chem">V\'(x) = 12x^2 - 232x + 792 = 0</span> gives <span class="chem">x ≈ 4.4279</span> (the other root, <span class="chem">x ≈ 14.9</span>, is outside the domain). <span class="chem">V</span> is <span class="chem">0</span> at both ends of the domain, so this stationary point is the maximum: <span class="chem">V_{max} = V(4.4279…) ≈ 1579.8</span>, i.e. <span class="chem">1580</span> <span class="unit">cm3</span> (3 s.f.).</p>'
    },
    {
      id: 't5-1-q037',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.6, 5.8',
      type: 'numeric',
      marks: 4,
      sigfigs: 3,
      stem: '<p>Let <span class="chem">f(x) = (x^2 - 3)e^{-0.4x}</span> for <span class="chem">x \\in \\mathbb{R}</span>. The graph of <span class="chem">f</span> has one local maximum point. Find the <span class="chem">y</span>-coordinate of this point, correct to 3 significant figures.</p>',
      answer: 3.019614583534583,
      hints: [
        'Sketch <span class="chem">y = f(x)</span> on your GDC first. The local maximum is to the right of the origin; you may need to widen the window (try <span class="chem">-3 &lt;= x &lt;= 15</span>).',
        'Use the GDC maximum feature, or solve <span class="chem">f\'(x) = e^{-0.4x}(2x - 0.4x^2 + 1.2) = 0</span>.'
      ],
      solution: '<p><span class="chem">f\'(x) = 2x e^{-0.4x} - 0.4(x^2 - 3)e^{-0.4x} = e^{-0.4x}(-0.4x^2 + 2x + 1.2)</span>. Since <span class="chem">e^{-0.4x} &gt; 0</span>, <span class="chem">f\'(x) = 0</span> when <span class="chem">x ≈ -0.541</span> or <span class="chem">x ≈ 5.541</span>. The quadratic factor is positive between the roots and negative after <span class="chem">5.541</span>, so <span class="chem">f\'</span> changes from <span class="chem">+</span> to <span class="chem">-</span> there: a local maximum. <span class="chem">f(5.5414…) ≈ 3.0196</span>, so the <span class="chem">y</span>-coordinate is <span class="chem">3.02</span> (3 s.f.).</p>'
    },
    {
      id: 't5-1-q038',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.6, 5.7, 5.8',
      type: 'short',
      marks: 6,
      stem: '<p>Let <span class="chem">f(x) = x sin x</span> for <span class="chem">0 &lt; x &lt; pi</span>.<br>(a) Show that <span class="chem">f\'\'(x) = 2 cos x - x sin x</span>. <strong>[2 marks]</strong><br>(b) Find the <span class="chem">x</span>-coordinate of the point of inflexion on the graph of <span class="chem">f</span>, and justify that it is a point of inflexion. <strong>[3 marks]</strong><br>(c) Find the gradient of the graph of <span class="chem">f</span> at the point of inflexion. <strong>[1 mark]</strong></p>',
      answer: '<p>(a) <span class="chem">f\'(x) = sin x + x cos x</span>, so <span class="chem">f\'\'(x) = 2 cos x - x sin x</span>.<br>(b) <span class="chem">x ≈ 1.08</span>; <span class="chem">f\'\'</span> changes from positive to negative there.<br>(c) <span class="chem">f\'(1.0769…) ≈ 1.39</span>.</p>',
      markscheme: [
        'M1: Uses the product rule: <span class="chem">f\'(x) = sin x + x cos x</span>.',
        'A1: Differentiates again: <span class="chem">f\'\'(x) = cos x + cos x - x sin x = 2 cos x - x sin x</span> (AG).',
        'M1: Solves <span class="chem">2 cos x - x sin x = 0</span> on the GDC.',
        'A1: <span class="chem">x = 1.08</span> (<span class="chem">1.07687…</span>).',
        'R1: <span class="chem">f\'\'</span> changes sign there, e.g. <span class="chem">f\'\'(1) ≈ 0.239 &gt; 0</span> and <span class="chem">f\'\'(1.2) ≈ -0.394 &lt; 0</span>.',
        'A1: Gradient <span class="chem">f\'(1.0769…) = 1.39</span>.'
      ],
      hints: [
        'For (b) a point of inflexion needs <span class="chem">f\'\'(x) = 0</span> <strong>and</strong> a change of sign of <span class="chem">f\'\'</span>. The GDC gives the root; you still have to check the sign on each side.',
        'For (c), the gradient is <span class="chem">f\'(x) = sin x + x cos x</span> at your root (keep the full GDC value, not the rounded one).'
      ],
      solution: '<p>(a) <span class="chem">f\'(x) = 1 * sin x + x cos x</span> and <span class="chem">f\'\'(x) = cos x + (cos x - x sin x) = 2 cos x - x sin x</span>.<br>(b) The GDC gives one root of <span class="chem">2 cos x - x sin x = 0</span> in <span class="chem">0 &lt; x &lt; pi</span>: <span class="chem">x ≈ 1.07687</span>. Checking each side: <span class="chem">f\'\'(1) ≈ 0.239 &gt; 0</span> and <span class="chem">f\'\'(1.2) ≈ -0.394 &lt; 0</span>, so the concavity changes and <span class="chem">x ≈ 1.08</span> is a point of inflexion.<br>(c) <span class="chem">f\'(1.07687…) = sin(1.07687…) + 1.07687… cos(1.07687…) ≈ 1.39</span>.</p>'
    },
    {
      id: 't5-1-q039',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.4, 5.6',
      type: 'numeric',
      marks: 5,
      sigfigs: 3,
      stem: '<p>Consider the curve <span class="chem">y = e^x - 2x^2</span>. The tangent to the curve at the point where <span class="chem">x = 0</span> meets the curve again at the point <span class="chem">R</span>. Find the <span class="chem">x</span>-coordinate of <span class="chem">R</span>, correct to 3 significant figures.</p>',
      answer: 3.213563520216979,
      hints: [
        'At <span class="chem">x = 0</span>: <span class="chem">y = 1</span> and <span class="chem">dy/dx = e^x - 4x = 1</span>, so the tangent is <span class="chem">y = x + 1</span>.',
        'Graph <span class="chem">y = e^x - 2x^2</span> and <span class="chem">y = x + 1</span> and find their other intersection (the tangent touches at <span class="chem">x = 0</span>, so ignore that one).'
      ],
      solution: '<p>At <span class="chem">x = 0</span>, <span class="chem">y = 1</span> and <span class="chem">dy/dx = e^0 - 0 = 1</span>, so the tangent is <span class="chem">y = x + 1</span>. Solving <span class="chem">e^x - 2x^2 = x + 1</span> on the GDC gives <span class="chem">x = 0</span> (the point of contact) and <span class="chem">x ≈ 3.2136</span>. So <span class="chem">R</span> has <span class="chem">x</span>-coordinate <span class="chem">3.21</span> (3 s.f.).</p>'
    },
    {
      id: 't5-1-q040',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.7, 5.8',
      type: 'short',
      marks: 6,
      stem: '<p>A function <span class="chem">f</span> is defined for <span class="chem">0 &lt;= x &lt;= 4</span>. Its <strong>derivative</strong> is <span class="chem">f\'(x) = x cos x - 0.5</span>.<br>(a) Find the <span class="chem">x</span>-coordinate of the local maximum point of <span class="chem">f</span>, justifying your answer. <strong>[3 marks]</strong><br>(b) Find the <span class="chem">x</span>-coordinates of the points of inflexion of the graph of <span class="chem">f</span>. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">x ≈ 1.10</span>, where <span class="chem">f\'</span> changes from positive to negative.<br>(b) <span class="chem">x ≈ 0.860</span> and <span class="chem">x ≈ 3.43</span> (the turning points of <span class="chem">f\'</span>).</p>',
      markscheme: [
        'M1: Solves <span class="chem">f\'(x) = 0</span> on the GDC: <span class="chem">x = 0.610</span> and <span class="chem">x = 1.10</span>.',
        'R1: <span class="chem">f\'</span> changes from positive to negative at <span class="chem">x = 1.10</span> (it goes from negative to positive at <span class="chem">0.610</span>, a minimum).',
        'A1: <span class="chem">x = 1.10</span> (<span class="chem">1.09800…</span>).',
        'M1: Points of inflexion are at the turning points of <span class="chem">y = f\'(x)</span> (where <span class="chem">f\'\'(x) = cos x - x sin x = 0</span> and changes sign).',
        'A1: <span class="chem">x = 0.860</span>.',
        'A1: <span class="chem">x = 3.43</span>.'
      ],
      hints: [
        'Decode: you are given the derivative <span class="chem">f\'</span>, not <span class="chem">f</span>. Stationary points of <span class="chem">f</span> are the zeros of <span class="chem">f\'</span>; inflexion points of <span class="chem">f</span> are the turning points of <span class="chem">f\'</span>.',
        'Graph <span class="chem">y = x cos x - 0.5</span> for <span class="chem">0 &lt;= x &lt;= 4</span>. A local maximum of <span class="chem">f</span> is where this graph crosses the axis going <strong>down</strong>.',
        'Use the GDC maximum and minimum features on the graph of <span class="chem">f\'</span> for (b).'
      ],
      solution: '<p>(a) <span class="chem">f\'(0) = -0.5 &lt; 0</span>. The GDC gives zeros of <span class="chem">f\'</span> at <span class="chem">x ≈ 0.610</span> (where <span class="chem">f\'</span> goes from <span class="chem">-</span> to <span class="chem">+</span>, a local minimum of <span class="chem">f</span>) and <span class="chem">x ≈ 1.098</span> (where <span class="chem">f\'</span> goes from <span class="chem">+</span> to <span class="chem">-</span>). So the local maximum of <span class="chem">f</span> is at <span class="chem">x ≈ 1.10</span>.<br>(b) <span class="chem">f\'\'</span> is the gradient of <span class="chem">f\'</span>, so it is zero and changes sign at the turning points of <span class="chem">y = f\'(x)</span>. The GDC gives a maximum of <span class="chem">f\'</span> at <span class="chem">x ≈ 0.860</span> and a minimum at <span class="chem">x ≈ 3.43</span>. The points of inflexion are at <span class="chem">x ≈ 0.860</span> and <span class="chem">x ≈ 3.43</span>.</p>'
    },
    {
      id: 't5-1-q041',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.8',
      type: 'numeric',
      marks: 5,
      sigfigs: 3,
      unit: 'm2',
      stem: '<p>The entrance to a tunnel is modelled by the region between the <span class="chem">x</span>-axis and the curve <span class="chem">y = 8 cos(x/2)</span> for <span class="chem">-pi &lt;= x &lt;= pi</span>, where lengths are in metres. A rectangular door is fitted with its base on the <span class="chem">x</span>-axis and its two top corners on the curve, at <span class="chem">(-x, y)</span> and <span class="chem">(x, y)</span>. Find the maximum possible area of the door, in <span class="unit">m2</span>, correct to 3 significant figures.</p>',
      answer: 17.95508282211344,
      hints: [
        'The door is <span class="chem">2x</span> wide and <span class="chem">8 cos(x/2)</span> high, so <span class="chem">A(x) = 16x cos(x/2)</span> for <span class="chem">0 &lt; x &lt; pi</span>.',
        'Graph <span class="chem">A(x)</span> on the GDC (radian mode) and use the maximum feature. Check that the area is <span class="chem">0</span> at both ends of the domain.'
      ],
      solution: '<p><span class="chem">A(x) = 2x * 8 cos(x/2) = 16x cos(x/2)</span>, <span class="chem">0 &lt; x &lt; pi</span>. <span class="chem">A\'(x) = 16 cos(x/2) - 8x sin(x/2) = 0</span> gives <span class="chem">x ≈ 1.7207</span>. Since <span class="chem">A -&gt; 0</span> at both ends of the domain, this is the maximum: <span class="chem">A ≈ 17.955</span>, i.e. <span class="chem">18.0</span> <span class="unit">m2</span> (3 s.f.).</p>'
    },
    {
      id: 't5-1-q042',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.7, 5.8',
      type: 'numeric',
      marks: 6,
      sigfigs: 3,
      stem: '<p>After a tablet is taken, the concentration of a drug in the blood is <span class="chem">C(t) = 15(e^{-0.2t} - e^{-0.9t})</span> <span class="unit">mg L-1</span>, where <span class="chem">t</span> is the time in hours, <span class="chem">t &gt;= 0</span>. The concentration rises to a peak and then falls. Find the greatest rate at which the concentration is decreasing, in <span class="unit">mg L-1</span> per hour, correct to 3 significant figures.</p>',
      answer: 0.9878988769174312,
      hints: [
        'Decode: “rate of decrease” is <span class="chem">-C\'(t)</span>. Its greatest value is where <span class="chem">C\'(t)</span> is most negative, i.e. the minimum of <span class="chem">C\'</span>. That is where <span class="chem">C\'\'(t) = 0</span>: a point of inflexion of <span class="chem">C</span>.',
        'Graph <span class="chem">y = C\'(t)</span> (enter it by hand, or as the GDC derivative of <span class="chem">C</span>) for <span class="chem">0 &lt;= t &lt;= 20</span> and find its minimum.',
        'Check the ends: <span class="chem">C\'(0) = 10.5 &gt; 0</span> (the concentration is rising then), and <span class="chem">C\'(t) -&gt; 0</span> as <span class="chem">t</span> grows, so the minimum of <span class="chem">C\'</span> really is the turning point.'
      ],
      solution: '<p><strong>Decode:</strong> the greatest rate of decrease is the most negative value of <span class="chem">C\'(t)</span>, found where <span class="chem">C\'\'(t) = 0</span> (the inflexion point of <span class="chem">C</span>).<br><span class="chem">C\'(t) = 15(-0.2e^{-0.2t} + 0.9e^{-0.9t})</span> and <span class="chem">C\'\'(t) = 15(0.04e^{-0.2t} - 0.81e^{-0.9t})</span>. <span class="chem">C\'\'(t) = 0</span> at <span class="chem">t ≈ 4.297</span> (exactly <span class="chem">ln(20.25) / 0.7</span>), and <span class="chem">C\'\'</span> changes from negative to positive there, so <span class="chem">C\'</span> has its minimum. <span class="chem">C\'(4.297…) ≈ -0.9879</span>. At <span class="chem">t = 0</span> the concentration is increasing (<span class="chem">C\'(0) = 10.5</span>), and for large <span class="chem">t</span>, <span class="chem">C\'(t) -&gt; 0</span>, so no endpoint gives a faster decrease. The greatest rate of decrease is <span class="chem">0.988</span> <span class="unit">mg L-1</span> per hour (3 s.f.).</p>'
    },
    {
      id: 't5-1-q043',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.8',
      type: 'numeric',
      marks: 6,
      sigfigs: 3,
      stem: '<p>A sensor is placed at the point <span class="chem">A(2, 1)</span>. A cable is to be laid in a straight line from <span class="chem">A</span> to a point <span class="chem">P</span> on the curve <span class="chem">y = e^{x/2}</span>. Find the length of the shortest possible cable, correct to 3 significant figures.</p>',
      answer: 1.146605998752017,
      hints: [
        'Decode: “shortest cable” means the minimum distance from <span class="chem">A</span> to a point <span class="chem">P(x, e^{x/2})</span> on the curve. Write the distance as a function of the single variable <span class="chem">x</span> and minimise it.',
        '<span class="chem">AP = sqrt((x - 2)^2 + (e^{x/2} - 1)^2)</span>. The square <span class="chem">D = AP^2</span> has its minimum at the same <span class="chem">x</span> and is easier to differentiate.',
        'Use the GDC minimum on the graph of <span class="chem">AP</span> (or solve <span class="chem">D\'(x) = 0</span>), then give the distance, not the <span class="chem">x</span>-value.'
      ],
      solution: '<p><strong>Decode:</strong> minimise the distance <span class="chem">AP</span> where <span class="chem">P = (x, e^{x/2})</span>.<br><span class="chem">D(x) = AP^2 = (x - 2)^2 + (e^{x/2} - 1)^2</span>, <span class="chem">D\'(x) = 2(x - 2) + e^{x/2}(e^{x/2} - 1) = 0</span>. The GDC gives the single solution <span class="chem">x ≈ 1.2230</span>, and the graph of <span class="chem">AP</span> shows it is a minimum (the distance grows without bound in both directions). Then <span class="chem">AP = sqrt(D(1.2230…)) ≈ 1.1466</span>, so the shortest cable is <span class="chem">1.15</span> units (3 s.f.).</p>'
    },
    {
      id: 't5-1-q044',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.7, 5.8',
      type: 'numeric',
      marks: 6,
      sigfigs: 3,
      stem: '<p>The depth of water in a harbour, <span class="chem">h</span> metres, <span class="chem">t</span> hours after midnight is modelled by <span class="chem">h(t) = 3 + 1.8 sin(0.5t) + 0.6 cos t</span> for <span class="chem">0 &lt;= t &lt;= 12</span>. Find the greatest rate at which the water is rising during this period, in metres per hour, correct to 3 significant figures.</p>',
      answer: 1.302931527677286,
      hints: [
        'Decode: “rate at which the water is rising” is <span class="chem">h\'(t)</span>. You need the <strong>maximum of <span class="chem">h\'</span></strong> on <span class="chem">[0, 12]</span>, not the maximum of <span class="chem">h</span>. Candidates are the turning points of <span class="chem">h\'</span> and the two endpoints.',
        '<span class="chem">h\'(t) = 0.9 cos(0.5t) - 0.6 sin t</span>. Graph it for <span class="chem">0 &lt;= t &lt;= 12</span> (radian mode).',
        'There are two local maxima of <span class="chem">h\'</span>. Compare them with <span class="chem">h\'(0)</span> and <span class="chem">h\'(12)</span>.'
      ],
      solution: '<p><strong>Decode:</strong> maximise the rate of change <span class="chem">h\'(t)</span> over the closed interval <span class="chem">[0, 12]</span>, checking the endpoints.<br><span class="chem">h\'(t) = 0.9 cos(0.5t) - 0.6 sin t</span>. Its local maxima (where <span class="chem">h\'\'(t) = -0.45 sin(0.5t) - 0.6 cos t = 0</span>) are <span class="chem">h\'(3.952…) ≈ 0.080</span> and <span class="chem">h\'(11.416…) ≈ 1.3029</span>. The endpoints give <span class="chem">h\'(0) = 0.9</span> and <span class="chem">h\'(12) ≈ 1.186</span>. The greatest is <span class="chem">1.30</span> metres per hour (3 s.f.), at <span class="chem">t ≈ 11.4</span>.</p>'
    },
    {
      id: 't5-1-q045',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.2, 5.6',
      type: 'short',
      marks: 4,
      stem: '<p>Let <span class="chem">f(x) = e^{0.5x} - x^2</span>. Find the set of values of <span class="chem">x</span> for which <span class="chem">f</span> is decreasing. Give the endpoints of the interval correct to 3 significant figures. <strong>[4 marks]</strong></p>',
      answer: '<p><span class="chem">0.289 &lt; x &lt; 6.52</span>.</p>',
      markscheme: [
        'A1: <span class="chem">f\'(x) = 0.5e^{0.5x} - 2x</span>.',
        'M1: Solves <span class="chem">f\'(x) = 0</span> (or <span class="chem">f\'(x) &lt; 0</span>) using the GDC.',
        'A1: <span class="chem">x = 0.289</span> and <span class="chem">x = 6.52</span>.',
        'A1: <span class="chem">0.289 &lt; x &lt; 6.52</span> (accept <span class="chem">&lt;=</span>).'
      ],
      hints: [
        '<span class="chem">f</span> is decreasing where <span class="chem">f\'(x) &lt; 0</span>. This equation cannot be solved algebraically, so use the GDC.',
        'Graph <span class="chem">y = 0.5e^{0.5x} - 2x</span> with a wide enough window to see <strong>both</strong> zeros (try <span class="chem">-2 &lt;= x &lt;= 8</span>).'
      ],
      solution: '<p><span class="chem">f\'(x) = 0.5e^{0.5x} - 2x</span>. The GDC gives zeros at <span class="chem">x ≈ 0.28884</span> and <span class="chem">x ≈ 6.5234</span>, and <span class="chem">f\'(x) &lt; 0</span> between them (e.g. <span class="chem">f\'(1) ≈ -1.18</span>). So <span class="chem">f</span> is decreasing for <span class="chem">0.289 &lt; x &lt; 6.52</span>.</p>'
    },
    {
      id: 't5-1-q046',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.7, 5.8',
      type: 'numeric',
      marks: 5,
      sigfigs: 3,
      stem: '<p>Let <span class="chem">f(x) = x^3 / 6 - 2x - e^{-x}</span>. The graph of <span class="chem">f</span> has exactly one point of inflexion. Find its <span class="chem">x</span>-coordinate, correct to 3 significant figures.</p>',
      answer: 0.5671432904097839,
      hints: [
        'Differentiate twice: <span class="chem">f\'(x) = x^2/2 - 2 + e^{-x}</span>, so <span class="chem">f\'\'(x) = x - e^{-x}</span>.',
        'Solve <span class="chem">x - e^{-x} = 0</span> on the GDC. Then check that <span class="chem">f\'\'</span> changes sign there.'
      ],
      solution: '<p><span class="chem">f\'(x) = x^2/2 - 2 + e^{-x}</span> and <span class="chem">f\'\'(x) = x - e^{-x}</span>. The GDC gives <span class="chem">f\'\'(x) = 0</span> at <span class="chem">x ≈ 0.56714</span>. Since <span class="chem">f\'\'</span> is increasing (its derivative <span class="chem">1 + e^{-x}</span> is always positive), it changes from negative to positive there, so this is a point of inflexion: <span class="chem">x = 0.567</span> (3 s.f.).</p>'
    },
    {
      id: 't5-1-q047',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.8',
      type: 'numeric',
      marks: 6,
      stem: '<p>A workshop’s weekly profit is <span class="chem">P(x) = -0.02x^3 + 0.9x^2 + 5x - 40</span> thousand dollars, where <span class="chem">x</span> is the number of <strong>hundreds</strong> of chairs made in the week. The workshop can make at most <span class="chem">2500</span> chairs in a week. Find the number of chairs the workshop should make in a week to maximise its profit.</p>',
      answer: 2500,
      hints: [
        'Decode: two hidden details. The capacity limit gives the domain <span class="chem">0 &lt;= x &lt;= 25</span> (in hundreds), and the answer must be the number of <strong>chairs</strong>, not the value of <span class="chem">x</span>.',
        'Solve <span class="chem">P\'(x) = -0.06x^2 + 1.8x + 5 = 0</span> with the GDC. Is the positive root inside the domain?',
        'If <span class="chem">P\'(x) &gt; 0</span> on the whole domain, then <span class="chem">P</span> is increasing and the maximum is at an endpoint.'
      ],
      solution: '<p><strong>Decode:</strong> the domain is <span class="chem">0 &lt;= x &lt;= 25</span>, and the answer is <span class="chem">100x</span> chairs.<br><span class="chem">P\'(x) = -0.06x^2 + 1.8x + 5 = 0</span> gives <span class="chem">x ≈ -2.56</span> or <span class="chem">x ≈ 32.6</span>, both outside <span class="chem">[0, 25]</span>. Since <span class="chem">P\'(0) = 5 &gt; 0</span>, <span class="chem">P\'(x) &gt; 0</span> throughout the domain, so <span class="chem">P</span> is increasing and its maximum is at the endpoint <span class="chem">x = 25</span>: <span class="chem">P(25) = -312.5 + 562.5 + 125 - 40 = 335</span> thousand dollars. The workshop should make <span class="chem">25 * 100 = 2500</span> chairs (its full capacity).</p>'
    },
    {
      id: 't5-1-q048',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.6, 5.8',
      type: 'numeric',
      marks: 7,
      sigfigs: 3,
      unit: 'm',
      stem: '<p>A corridor <span class="chem">2.4</span> <span class="unit">m</span> wide meets a corridor <span class="chem">1.6</span> <span class="unit">m</span> wide at a right angle. A straight pole touching the outer walls and the inner corner makes an angle <span class="chem">theta</span> with the walls of the wider corridor, and its length is <span class="chem">L(theta) = 2.4 / sin theta + 1.6 / cos theta</span>, <span class="chem">0 &lt; theta &lt; pi/2</span>. Find the length of the longest pole that can be carried horizontally around the corner, correct to 3 significant figures.</p>',
      answer: 5.618785903375973,
      hints: [
        'Decode: a pole gets round the corner only if it is shorter than <span class="chem">L(theta)</span> for <strong>every</strong> angle on the way round. So the longest pole that fits equals the <strong>minimum</strong> of <span class="chem">L(theta)</span>, not its maximum.',
        'Graph <span class="chem">L(theta)</span> for <span class="chem">0 &lt; theta &lt; pi/2</span> (radian mode). It tends to infinity at both ends.',
        'Use the GDC minimum, or solve <span class="chem">L\'(theta) = -2.4 cos theta / sin^2 theta + 1.6 sin theta / cos^2 theta = 0</span>.'
      ],
      solution: '<p><strong>Decode:</strong> the tightest position of the corner limits the pole, so the longest pole that fits is the minimum value of <span class="chem">L(theta)</span>.<br><span class="chem">L\'(theta) = -2.4 cos theta / sin^2 theta + 1.6 sin theta / cos^2 theta = 0 &lt;=&gt; tan^3 theta = 2.4 / 1.6 = 1.5</span>, so <span class="chem">theta ≈ 0.8528</span>. As <span class="chem">theta -&gt; 0</span> or <span class="chem">theta -&gt; pi/2</span>, <span class="chem">L -&gt; ∞</span>, so this is the minimum: <span class="chem">L(0.8528…) ≈ 5.6188</span>. The longest pole is <span class="chem">5.62</span> <span class="unit">m</span> (3 s.f.).</p>'
    },
    {
      id: 't5-1-q049',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.8',
      type: 'numeric',
      marks: 6,
      dp: 2,
      stem: '<p>A closed cylindrical can has radius <span class="chem">r</span> <span class="unit">cm</span> and volume <span class="chem">750</span> <span class="unit">cm3</span>. The metal for the top and bottom costs <span class="chem">$0.035</span> per <span class="unit">cm2</span>, and the metal for the curved side costs <span class="chem">$0.02</span> per <span class="unit">cm2</span>. Find the minimum cost of the metal for one can, in dollars, correct to two decimal places.</p>',
      answer: 11.0136532282171,
      hints: [
        'Cost <span class="chem">= 0.035 * 2 pi r^2 + 0.02 * 2 pi r h</span>. Use <span class="chem">pi r^2 h = 750</span> to remove <span class="chem">h</span>.',
        'You should get <span class="chem">C(r) = 0.07 pi r^2 + 30 / r</span>, <span class="chem">r &gt; 0</span>. Find its minimum on the GDC.'
      ],
      solution: '<p><span class="chem">h = 750 / (pi r^2)</span>, so <span class="chem">C(r) = 0.035(2 pi r^2) + 0.02(2 pi r)(750 / (pi r^2)) = 0.07 pi r^2 + 30 / r</span>. <span class="chem">C\'(r) = 0.14 pi r - 30 / r^2 = 0</span> gives <span class="chem">r ≈ 4.0858</span>; <span class="chem">C -&gt; ∞</span> as <span class="chem">r -&gt; 0</span> and as <span class="chem">r -&gt; ∞</span>, so this is the minimum. <span class="chem">C(4.0858…) ≈ 11.0137</span>, so the minimum cost is <span class="chem">$11.01</span>.</p>'
    },
    {
      id: 't5-1-q050',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.4, 5.6',
      type: 'numeric',
      marks: 5,
      sigfigs: 3,
      stem: '<p>Consider the curve <span class="chem">y = 2 sin x + x</span>. The normal to the curve at the point where <span class="chem">x = 1</span> crosses the <span class="chem">x</span>-axis at <span class="chem">Q</span>. Find the <span class="chem">x</span>-coordinate of <span class="chem">Q</span>, correct to 3 significant figures.</p>',
      answer: 6.582141435003436,
      hints: [
        'Find the point (<span class="chem">y = 2 sin 1 + 1</span>) and the tangent gradient <span class="chem">m_T = 2 cos 1 + 1</span> (radians). Store both on your GDC.',
        'The normal is <span class="chem">y - y_1 = -(1/m_T)(x - 1)</span>. Put <span class="chem">y = 0</span> and solve for <span class="chem">x</span>.'
      ],
      solution: '<p>At <span class="chem">x = 1</span>: <span class="chem">y_1 = 2 sin 1 + 1 ≈ 2.6829</span> and <span class="chem">m_T = 2 cos 1 + 1 ≈ 2.0806</span>. The normal is <span class="chem">y - y_1 = -(1/m_T)(x - 1)</span>. Setting <span class="chem">y = 0</span>: <span class="chem">x = 1 + m_T y_1 ≈ 1 + 2.0806 * 2.6829 ≈ 6.582</span>. So <span class="chem">Q</span> has <span class="chem">x</span>-coordinate <span class="chem">6.58</span> (3 s.f.).</p>'
    },
    {
      id: 't5-1-q051',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.4',
      type: 'numeric',
      marks: 6,
      sigfigs: 3,
      stem: '<p>A straight line through the origin is a tangent to the curve <span class="chem">y = e^x + 2</span>. Find the gradient of this line, correct to 3 significant figures.</p>',
      answer: 4.319136566291447,
      hints: [
        'Decode: the point of contact is unknown. Call it <span class="chem">(a, e^a + 2)</span>; the tangent there has gradient <span class="chem">e^a</span>, and it must pass through <span class="chem">(0, 0)</span>. Find <span class="chem">a</span> first, then the gradient.',
        'Tangent: <span class="chem">y - (e^a + 2) = e^a(x - a)</span>. Substituting <span class="chem">(0, 0)</span> gives <span class="chem">e^a(a - 1) = 2</span>.',
        'Solve <span class="chem">e^a(a - 1) = 2</span> on the GDC; the question asks for the gradient <span class="chem">e^a</span>, not <span class="chem">a</span>.'
      ],
      solution: '<p><strong>Decode:</strong> introduce the unknown point of contact <span class="chem">(a, e^a + 2)</span> and use the condition that the tangent passes through the origin.<br>The tangent is <span class="chem">y - (e^a + 2) = e^a(x - a)</span>. Through <span class="chem">(0, 0)</span>: <span class="chem">-(e^a + 2) = -a e^a =&gt; e^a(a - 1) = 2</span>. The GDC gives <span class="chem">a ≈ 1.46306</span> (the only solution, as <span class="chem">e^a(a - 1) &lt; 0</span> for <span class="chem">a &lt; 1</span> and is increasing for <span class="chem">a &gt; 1</span>). The gradient is <span class="chem">e^a ≈ 4.3191</span>, i.e. <span class="chem">4.32</span> (3 s.f.).</p>'
    },
    {
      id: 't5-1-q052',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.6, 5.7, 5.8, 5.9',
      type: 'short',
      marks: 14,
      stem: '<p>An object on a spring oscillates so that its displacement from its rest position is <span class="chem">d(t) = 5e^{-0.3t} sin t</span> <span class="unit">cm</span>, where <span class="chem">t</span> is the time in seconds, <span class="chem">0 &lt;= t &lt;= 8</span>.<br>(a) Show that <span class="chem">d\'(t) = e^{-0.3t}(5 cos t - 1.5 sin t)</span>. <strong>[2 marks]</strong><br>(b) Show that <span class="chem">d\'(t) = 0</span> when <span class="chem">tan t = 10/3</span>. <strong>[2 marks]</strong><br>(c) Find the first time <span class="chem">t &gt; 0</span> at which the object is instantaneously at rest, and its displacement at that time. <strong>[3 marks]</strong><br>(d) Hence write down the number of times in <span class="chem">0 &lt; t &lt; 8</span> at which the object is instantaneously at rest. <strong>[1 mark]</strong><br>(e) For <span class="chem">0 &lt; t &lt; 4</span>, find the time at which the displacement is decreasing most rapidly, and the rate of decrease at that time. <strong>[4 marks]</strong><br>(f) Find the acceleration of the object when <span class="chem">t = 3</span>. <strong>[2 marks]</strong></p>',
      answer: '<p>(a), (b) See mark scheme.<br>(c) <span class="chem">t ≈ 1.28</span> <span class="unit">s</span>, <span class="chem">d ≈ 3.26</span> <span class="unit">cm</span>.<br>(d) <span class="chem">3</span> times.<br>(e) <span class="chem">t ≈ 2.56</span> <span class="unit">s</span>; decreasing at <span class="chem">2.32</span> <span class="unit">cm s-1</span>.<br>(f) <span class="chem">d\'\'(3) ≈ 0.946</span> <span class="unit">cm s-2</span>.</p>',
      markscheme: [
        'M1: Uses the product rule, with the chain rule on <span class="chem">e^{-0.3t}</span>.',
        'A1: <span class="chem">d\'(t) = 5(-0.3e^{-0.3t}) sin t + 5e^{-0.3t} cos t = -1.5e^{-0.3t} sin t + 5e^{-0.3t} cos t</span>, which factorises to <span class="chem">e^{-0.3t}(5 cos t - 1.5 sin t)</span> (AG).',
        'M1: <span class="chem">e^{-0.3t} &gt; 0</span>, so <span class="chem">d\'(t) = 0 &lt;=&gt; 5 cos t - 1.5 sin t = 0</span>.',
        'A1: <span class="chem">5 cos t = 1.5 sin t =&gt; sin t / cos t = 5 / 1.5</span>, so <span class="chem">tan t = 10/3</span> (AG).',
        'M1: <span class="chem">t = arctan(10/3)</span> (or solves <span class="chem">d\'(t) = 0</span> on the GDC).',
        'A1: <span class="chem">t = 1.28</span> <span class="unit">s</span> (<span class="chem">1.27933…</span>).',
        'A1: <span class="chem">d = 3.26</span> <span class="unit">cm</span>.',
        'A1: <span class="chem">3</span> (at <span class="chem">t ≈ 1.28, 4.42, 7.56</span>, which are <span class="chem">pi</span> apart).',
        'M1: Recognises that “decreasing most rapidly” means the minimum of <span class="chem">d\'(t)</span> (where <span class="chem">d\'\'(t) = 0</span>).',
        'A1: <span class="chem">t = 2.56</span> <span class="unit">s</span> (<span class="chem">2.55867…</span>).',
        'R1: Checks the ends of the interval: <span class="chem">d\'(0) = 5</span>, <span class="chem">d\'(4) ≈ -0.642</span>, so the turning point gives the most negative <span class="chem">d\'</span>.',
        'A1: Rate of decrease <span class="chem">2.32</span> <span class="unit">cm s-1</span> (<span class="chem">d\'(2.5587…) ≈ -2.32</span>).',
        'M1: Acceleration is <span class="chem">d\'\'(t)</span>; evaluates it at <span class="chem">t = 3</span> (GDC or by differentiating <span class="chem">d\'</span>).',
        'A1: <span class="chem">0.946</span> <span class="unit">cm s-2</span>.'
      ],
      hints: [
        'Decode: “instantaneously at rest” means velocity <span class="chem">d\'(t) = 0</span>; “decreasing most rapidly” means the most negative value of <span class="chem">d\'(t)</span>; acceleration is <span class="chem">d\'\'(t)</span>.',
        'For (d), <span class="chem">tan t</span> repeats every <span class="chem">pi</span>, so the solutions of <span class="chem">tan t = 10/3</span> are <span class="chem">1.279 + k pi</span>. How many lie in <span class="chem">(0, 8)</span>?',
        'For (e), graph <span class="chem">y = d\'(t)</span> for <span class="chem">0 &lt; t &lt; 4</span> and find its minimum. Compare with the values near the ends of the interval.'
      ],
      solution: '<p>(a) Product rule: <span class="chem">d\'(t) = 5(-0.3e^{-0.3t}) sin t + 5e^{-0.3t} cos t = e^{-0.3t}(5 cos t - 1.5 sin t)</span>.<br>(b) <span class="chem">e^{-0.3t} != 0</span>, so <span class="chem">5 cos t = 1.5 sin t =&gt; tan t = 5 / 1.5 = 10/3</span>.<br>(c) <span class="chem">t = arctan(10/3) ≈ 1.2793</span> <span class="unit">s</span>, and <span class="chem">d(1.2793…) = 5e^{-0.3838…} sin(1.2793…) ≈ 3.26</span> <span class="unit">cm</span>.<br>(d) The solutions are <span class="chem">1.279 + k pi</span>: <span class="chem">1.28, 4.42, 7.56</span> (the next, <span class="chem">10.7</span>, is too large). So <span class="chem">3</span> times.<br>(e) The displacement decreases most rapidly where <span class="chem">d\'(t)</span> is most negative. The GDC gives the minimum of <span class="chem">d\'</span> on <span class="chem">0 &lt; t &lt; 4</span> at <span class="chem">t ≈ 2.5587</span>, with <span class="chem">d\'(2.5587…) ≈ -2.3206</span>. Near the ends, <span class="chem">d\'(0) = 5</span> and <span class="chem">d\'(4) ≈ -0.642</span>, which are larger. So at <span class="chem">t ≈ 2.56</span> <span class="unit">s</span> the displacement is decreasing at <span class="chem">2.32</span> <span class="unit">cm s-1</span>.<br>(f) <span class="chem">d\'\'(t) = -0.3e^{-0.3t}(5 cos t - 1.5 sin t) + e^{-0.3t}(-5 sin t - 1.5 cos t) = e^{-0.3t}(-4.55 sin t - 3 cos t)</span>, so <span class="chem">d\'\'(3) = e^{-0.9}(-4.55 sin 3 - 3 cos 3) ≈ 0.946</span> <span class="unit">cm s-2</span> (or use the GDC directly).</p>'
    },
    {
      id: 't5-1-q053',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.8',
      type: 'numeric',
      marks: 7,
      sigfigs: 3,
      stem: '<p>A party hat in the shape of a right circular cone (with no base) is made from a circular sheet of paper of radius <span class="chem">12</span> <span class="unit">cm</span>. A sector is cut out of the sheet and thrown away, and the two straight edges of the remaining piece are joined. Find the angle, in radians, of the sector that must be cut out so that the cone has the greatest possible volume. Give your answer correct to 3 significant figures.</p>',
      answer: 1.15298598653213,
      hints: [
        'Decode: three things are linked. The slant height of the cone is the sheet radius, <span class="chem">12</span>, so <span class="chem">r^2 + h^2 = 144</span>. The arc of the piece that is kept becomes the base circumference. And the question asks for the angle of the piece thrown away, not <span class="chem">r</span> or the volume.',
        'Write the volume in one variable: <span class="chem">V(r) = (1/3) pi r^2 sqrt(144 - r^2)</span>, <span class="chem">0 &lt; r &lt; 12</span>. Find the <span class="chem">r</span> that maximises it on the GDC.',
        'If the kept sector has angle <span class="chem">alpha</span>, its arc is <span class="chem">12 alpha = 2 pi r</span>. The removed angle is <span class="chem">2 pi - alpha</span>.'
      ],
      solution: '<p><strong>Decode:</strong> the slant height is <span class="chem">12</span>, the kept arc becomes the base circumference, and the required quantity is the removed angle.<br><span class="chem">V(r) = (1/3) pi r^2 h</span> with <span class="chem">h = sqrt(144 - r^2)</span>, so <span class="chem">V(r) = (1/3) pi r^2 sqrt(144 - r^2)</span>, <span class="chem">0 &lt; r &lt; 12</span>. <span class="chem">V -&gt; 0</span> at both ends, and the GDC maximum is at <span class="chem">r ≈ 9.7980</span> (exactly <span class="chem">4 sqrt(6)</span>).<br>Kept angle: <span class="chem">12 alpha = 2 pi r =&gt; alpha = 2 pi(9.7980…) / 12 ≈ 5.1302</span>. Removed angle: <span class="chem">2 pi - 5.1302 ≈ 1.15</span> radians (3 s.f.).</p>'
    },
    {
      id: 't5-1-q054',
      level: 'sl',
      tier: 'foundation',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.1',
      type: 'numeric',
      marks: 2,
      sigfigs: 3,
      stem: '<p>The gradient of the curve <span class="chem">y = 2^x</span> at the point <span class="chem">(0, 1)</span> is the limit of <span class="chem">(2^h - 1) / h</span> as <span class="chem">h -&gt; 0</span>. Use your GDC to evaluate <span class="chem">(2^h - 1) / h</span> for <span class="chem">h = 0.1</span>, <span class="chem">0.01</span> and <span class="chem">0.001</span>, and hence estimate this gradient correct to 3 significant figures.</p>',
      answer: 0.6931471805599453,
      hints: [
        '<span class="chem">(2^h - 1) / h</span> is the gradient of the chord from <span class="chem">(0, 1)</span> to <span class="chem">(h, 2^h)</span>.',
        'Make a table of values on the GDC. The first three significant figures stop changing once <span class="chem">h</span> is small enough.'
      ],
      solution: '<p>The values are <span class="chem">0.71773</span> (<span class="chem">h = 0.1</span>), <span class="chem">0.69556</span> (<span class="chem">h = 0.01</span>) and <span class="chem">0.69339</span> (<span class="chem">h = 0.001</span>). They are approaching about <span class="chem">0.693</span>, so the gradient at <span class="chem">(0, 1)</span> is approximately <span class="chem">0.693</span>. (The exact value is <span class="chem">ln 2</span>.)</p>'
    },
    {
      id: 't5-1-q055',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.4, 5.6',
      type: 'numeric',
      marks: 4,
      sigfigs: 3,
      unit: '°',
      stem: '<p>Find the acute angle between the tangent to the curve <span class="chem">y = x e^{-x/3}</span> at the point where <span class="chem">x = 1</span> and the <span class="chem">x</span>-axis. Give your answer in degrees, correct to 3 significant figures.</p>',
      answer: 25.53322489547432,
      hints: [
        'If a line has gradient <span class="chem">m</span>, the angle <span class="chem">theta</span> it makes with the positive <span class="chem">x</span>-axis satisfies <span class="chem">tan theta = m</span>.',
        'Find <span class="chem">m = dy/dx</span> at <span class="chem">x = 1</span> (product rule or GDC), then <span class="chem">theta = arctan(m)</span> in degree mode.'
      ],
      solution: '<p><span class="chem">dy/dx = e^{-x/3} - (x/3)e^{-x/3} = e^{-x/3}(1 - x/3)</span>, so at <span class="chem">x = 1</span>, <span class="chem">m = (2/3)e^{-1/3} ≈ 0.47769</span>. The angle with the <span class="chem">x</span>-axis is <span class="chem">arctan(0.47769…) ≈ 25.5°</span> (3 s.f.).</p>'
    },
    {
      id: 't5-1-q056',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.1, 5.8, 5.9',
      type: 'numeric',
      marks: 6,
      sigfigs: 3,
      unit: 'm s-1',
      stem: '<p>A cyclist’s distance from the start of a training run, <span class="chem">t</span> seconds after the run begins, is <span class="chem">s(t) = 2t + 0.5t^2 - 0.03t^3 + sin t</span> metres, for <span class="chem">0 &lt;= t &lt;= 10</span>. Find the greatest speed of the cyclist during this time, correct to 3 significant figures.</p>',
      answer: 5.73740271875387,
      hints: [
        'Decode: speed is the rate of change of distance, <span class="chem">v(t) = s\'(t)</span>. You need the maximum of <span class="chem">v</span> (not of <span class="chem">s</span>) on the closed interval <span class="chem">[0, 10]</span>.',
        '<span class="chem">v(t) = 2 + t - 0.09t^2 + cos t</span>. Graph it on the GDC (radian mode) for <span class="chem">0 &lt;= t &lt;= 10</span>.',
        'The graph has two local maxima. Compare both with <span class="chem">v(0)</span> and <span class="chem">v(10)</span> before choosing.'
      ],
      solution: '<p><strong>Decode:</strong> maximise the speed <span class="chem">v(t) = s\'(t)</span> on <span class="chem">[0, 10]</span>, comparing all local maxima with the endpoint values.<br><span class="chem">v(t) = 2 + t - 0.09t^2 + cos t</span> (positive throughout, so speed <span class="chem">= v</span>). Its local maxima are <span class="chem">v(0.971…) ≈ 3.45</span> and <span class="chem">v(6.172…) ≈ 5.737</span>; the endpoints give <span class="chem">v(0) = 3</span> and <span class="chem">v(10) ≈ 2.16</span>. The greatest speed is <span class="chem">5.74</span> <span class="unit">m s-1</span> (3 s.f.), at <span class="chem">t ≈ 6.17</span> <span class="unit">s</span>.</p>'
    },
    {
      id: 't5-1-q057',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.7, 5.8',
      type: 'numeric',
      marks: 5,
      sigfigs: 3,
      unit: 'days',
      stem: '<p>The number of fish in a newly stocked lake <span class="chem">t</span> days after stocking is modelled by <span class="chem">P(t) = 800 / (1 + 15e^{-0.4t})</span>, <span class="chem">t &gt;= 0</span>. Find the time at which the fish population is increasing most rapidly, correct to 3 significant figures.</p>',
      answer: 6.770125502755525,
      hints: [
        'Decode: “increasing most rapidly” means the rate <span class="chem">P\'(t)</span> is at its maximum. That happens where <span class="chem">P\'\'(t) = 0</span> and changes sign: the point of inflexion of the graph of <span class="chem">P</span>.',
        'Graph <span class="chem">y = P\'(t)</span> on the GDC (as the derivative of <span class="chem">P</span>) for <span class="chem">0 &lt;= t &lt;= 20</span> and find its maximum.',
        'Check the endpoint: <span class="chem">P\'(0) = 18.75</span>, much less than the turning value.'
      ],
      solution: '<p><strong>Decode:</strong> the fastest increase is the maximum of <span class="chem">P\'(t)</span>, i.e. the inflexion point of the S-shaped graph of <span class="chem">P</span>.<br>On the GDC, <span class="chem">P\'(t)</span> has its maximum at <span class="chem">t ≈ 6.770</span>, where <span class="chem">P\'(t) = 80</span> fish per day (exactly <span class="chem">t = ln 15 / 0.4</span>, where <span class="chem">P = 400</span>). <span class="chem">P\'\'</span> changes from positive to negative there, and at the endpoint <span class="chem">P\'(0) = 18.75 &lt; 80</span>. So the population increases most rapidly at <span class="chem">t ≈ 6.77</span> days (3 s.f.).</p>'
    },
    {
      id: 't5-1-q058',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.2, 5.8',
      type: 'numeric',
      marks: 4,
      sigfigs: 3,
      stem: '<p>Let <span class="chem">f(x) = 0.5x^4 - 2x^3 + x^2 + 3x - 1</span>. The graph of <span class="chem">f</span> has two local minimum points and one local maximum point. Find the <span class="chem">y</span>-coordinate of the local maximum point, correct to 3 significant figures.</p>',
      answer: 1.627088148132626,
      hints: [
        'Graph <span class="chem">y = f(x)</span> for about <span class="chem">-2 &lt;= x &lt;= 4</span>. The local maximum lies between the two minima.',
        'Use the GDC maximum feature, or solve the cubic <span class="chem">f\'(x) = 2x^3 - 6x^2 + 2x + 3 = 0</span> and pick the middle root.'
      ],
      solution: '<p><span class="chem">f\'(x) = 2x^3 - 6x^2 + 2x + 3</span>. The GDC gives roots <span class="chem">x ≈ -0.526</span>, <span class="chem">1.259</span>, <span class="chem">2.267</span>. Since <span class="chem">f\'\'(x) = 6x^2 - 12x + 2</span> is negative at <span class="chem">x ≈ 1.259</span> (about <span class="chem">-3.6</span>), the middle point is the local maximum: <span class="chem">f(1.2587…) ≈ 1.6271</span>. The <span class="chem">y</span>-coordinate is <span class="chem">1.63</span> (3 s.f.).</p>'
    },
    {
      id: 't5-1-q059',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.8',
      type: 'short',
      marks: 9,
      stem: '<p>A garden is a rectangle <span class="chem">x</span> <span class="unit">m</span> long and <span class="chem">y</span> <span class="unit">m</span> wide, with a semicircle of diameter <span class="chem">y</span> attached to one of its short sides. A fence goes round the whole outside edge of the garden. The straight parts of the fence cost <span class="chem">$12</span> per metre, and the curved part costs <span class="chem">$20</span> per metre. The total cost of the fence is <span class="chem">$1200</span>.<br>(a) Show that <span class="chem">x = 50 - (6 + 5 pi)y / 12</span>. <strong>[2 marks]</strong><br>(b) Show that the area of the garden is <span class="chem">A = 50y - (6 + 5 pi)y^2 / 12 + pi y^2 / 8</span>. <strong>[2 marks]</strong><br>(c) Find the value of <span class="chem">y</span> that gives the greatest area, and the greatest area. <strong>[4 marks]</strong><br>(d) Verify that this design is possible. <strong>[1 mark]</strong></p>',
      answer: '<p>(a), (b) See mark scheme.<br>(c) <span class="chem">y ≈ 17.7</span> <span class="unit">m</span>, <span class="chem">A ≈ 441</span> <span class="unit">m2</span>.<br>(d) <span class="chem">x ≈ 18.1 &gt; 0</span>.</p>',
      markscheme: [
        'M1: Cost equation: the straight fence is <span class="chem">2x + y</span> and the arc is <span class="chem">pi y / 2</span>, so <span class="chem">12(2x + y) + 20(pi y / 2) = 1200</span>.',
        'A1: <span class="chem">24x = 1200 - 12y - 10 pi y =&gt; x = 50 - (6 + 5 pi)y / 12</span> (AG).',
        'M1: Area <span class="chem">= xy + (1/2) pi (y/2)^2 = xy + pi y^2 / 8</span>.',
        'A1: Substitutes <span class="chem">x</span>: <span class="chem">A = 50y - (6 + 5 pi)y^2 / 12 + pi y^2 / 8</span> (AG).',
        'M1: Solves <span class="chem">A\'(y) = 50 - (6 + 5 pi)y / 6 + pi y / 4 = 0</span>, or uses the GDC maximum on the graph of <span class="chem">A</span>.',
        'A1: <span class="chem">y = 17.7</span> <span class="unit">m</span> (<span class="chem">17.6516…</span>, exactly <span class="chem">600 / (12 + 7 pi)</span>).',
        'R1: Justifies a maximum, e.g. <span class="chem">A</span> is a quadratic in <span class="chem">y</span> with a negative coefficient of <span class="chem">y^2</span> (or <span class="chem">A\'\'(y) &lt; 0</span>).',
        'A1: <span class="chem">A = 441</span> <span class="unit">m2</span> (<span class="chem">441.29…</span>).',
        'A1: <span class="chem">x = 50 - (6 + 5 pi)(17.65…) / 12 ≈ 18.1 &gt; 0</span>, so the design is possible.'
      ],
      hints: [
        'Decode: list the fence pieces carefully. The side where the semicircle is attached has no fence; the remaining straight edges are two lengths <span class="chem">x</span> and one width <span class="chem">y</span>, plus a half-circle arc <span class="chem">pi y / 2</span>.',
        'Cost: <span class="chem">12(2x + y) + 20(pi y / 2) = 1200</span>. Area: rectangle plus half a circle of radius <span class="chem">y/2</span>.',
        'For (c), graph <span class="chem">A(y)</span> for <span class="chem">y &gt; 0</span> and find the maximum. For (d), the length <span class="chem">x</span> must be positive.'
      ],
      solution: '<p><strong>Decode:</strong> work out which edges are fenced. The short side joined to the semicircle is inside the garden, so the fence is two lengths <span class="chem">x</span>, one width <span class="chem">y</span>, and the arc <span class="chem">pi y / 2</span>.<br>(a) <span class="chem">12(2x + y) + 20(pi y / 2) = 1200 =&gt; 24x = 1200 - (12 + 10 pi)y =&gt; x = 50 - (6 + 5 pi)y / 12</span>.<br>(b) <span class="chem">A = xy + (1/2) pi (y/2)^2 = xy + pi y^2 / 8 = 50y - (6 + 5 pi)y^2 / 12 + pi y^2 / 8</span>.<br>(c) <span class="chem">A\'(y) = 50 - (6 + 5 pi)y / 6 + pi y / 4 = 0 =&gt; y = 600 / (12 + 7 pi) ≈ 17.65</span>. The coefficient of <span class="chem">y^2</span> is <span class="chem">-(6 + 5 pi)/12 + pi/8 ≈ -1.42 &lt; 0</span>, so this is a maximum: <span class="chem">A ≈ 441</span> <span class="unit">m2</span>.<br>(d) <span class="chem">x ≈ 50 - 1.809(17.65) ≈ 18.1 &gt; 0</span>, so the rectangle exists and the design is possible.</p>'
    },
    {
      id: 't5-1-q060',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.2, 5.7, 5.8',
      type: 'short',
      marks: 8,
      stem: '<p>A function <span class="chem">f</span> is defined for <span class="chem">-2 &lt;= x &lt;= 3</span>, and its derivative is <span class="chem">f\'(x) = x^2 - 4 sin x</span>.<br>(a) Find the <span class="chem">x</span>-coordinates of the stationary points of <span class="chem">f</span>, and determine the nature of each. <strong>[4 marks]</strong><br>(b) Find the <span class="chem">x</span>-coordinate of the point at which the graph of <span class="chem">f</span> is decreasing most rapidly. <strong>[3 marks]</strong><br>(c) State, with a reason, whether the graph of <span class="chem">f</span> has a point of inflexion at the point found in (b). <strong>[1 mark]</strong></p>',
      answer: '<p>(a) <span class="chem">x = 0</span>: local maximum; <span class="chem">x ≈ 1.93</span>: local minimum.<br>(b) <span class="chem">x ≈ 1.03</span>.<br>(c) Yes: <span class="chem">f\'</span> has a local minimum there, so <span class="chem">f\'\'</span> is zero and changes sign.</p>',
      markscheme: [
        'M1: Solves <span class="chem">x^2 - 4 sin x = 0</span> on the GDC.',
        'A1: <span class="chem">x = 0</span> and <span class="chem">x = 1.93</span> (<span class="chem">1.93375…</span>).',
        'R1: <span class="chem">f\'</span> changes from positive to negative at <span class="chem">x = 0</span>, so a local maximum.',
        'R1: <span class="chem">f\'</span> changes from negative to positive at <span class="chem">x = 1.93</span>, so a local minimum.',
        'M1: Recognises that “decreasing most rapidly” means the minimum of <span class="chem">f\'(x)</span>.',
        'A1: <span class="chem">x = 1.03</span> (<span class="chem">1.02987…</span>, where <span class="chem">f\'(x) ≈ -2.37</span>).',
        'R1: Checks the endpoints: <span class="chem">f\'(-2) ≈ 7.64</span> and <span class="chem">f\'(3) ≈ 8.44</span> are positive, so the minimum of <span class="chem">f\'</span> is at the turning point.',
        'R1: Yes: <span class="chem">f\'\'(x) = 2x - 4 cos x</span> is zero at <span class="chem">x ≈ 1.03</span> and changes sign (from negative to positive), so it is a (non-stationary) point of inflexion.'
      ],
      hints: [
        'Decode: you are told <span class="chem">f\'</span>, not <span class="chem">f</span>. Stationary points are zeros of <span class="chem">f\'</span>; “decreasing most rapidly” is the most negative value of <span class="chem">f\'</span>, which could be at a turning point of <span class="chem">f\'</span> or at an end of the domain.',
        'Graph <span class="chem">y = x^2 - 4 sin x</span> for <span class="chem">-2 &lt;= x &lt;= 3</span> (radian mode). Read off its zeros and its minimum.',
        'For (c), a turning point of <span class="chem">f\'</span> is where <span class="chem">f\'\'</span> is zero and changes sign.'
      ],
      solution: '<p><strong>Decode:</strong> work entirely with the graph of <span class="chem">y = f\'(x)</span>: its zeros give the stationary points of <span class="chem">f</span>, and its lowest point (checking the endpoints too) gives the steepest descent.<br>(a) <span class="chem">f\'(x) = 0</span> at <span class="chem">x = 0</span> and <span class="chem">x ≈ 1.9338</span>. For <span class="chem">x &lt; 0</span>, <span class="chem">x^2 &gt; 0</span> and <span class="chem">-4 sin x &gt; 0</span>, so <span class="chem">f\' &gt; 0</span>; just after <span class="chem">0</span>, <span class="chem">f\' &lt; 0</span> (e.g. <span class="chem">f\'(1) ≈ -2.37</span>). So <span class="chem">x = 0</span> is a local maximum, and since <span class="chem">f\'</span> goes from <span class="chem">-</span> to <span class="chem">+</span> at <span class="chem">1.93</span> (e.g. <span class="chem">f\'(2.5) ≈ 3.86</span>), <span class="chem">x ≈ 1.93</span> is a local minimum.<br>(b) The GDC minimum of <span class="chem">f\'</span> is at <span class="chem">x ≈ 1.0299</span>, with <span class="chem">f\' ≈ -2.37</span>. The endpoints give <span class="chem">f\'(-2) ≈ 7.64</span> and <span class="chem">f\'(3) ≈ 8.44</span>, so <span class="chem">f</span> decreases most rapidly at <span class="chem">x ≈ 1.03</span>.<br>(c) Yes. At a local minimum of <span class="chem">f\'</span>, its gradient <span class="chem">f\'\'(x) = 2x - 4 cos x</span> is zero and changes from negative to positive, so the concavity of <span class="chem">f</span> changes: a non-stationary point of inflexion.</p>'
    }
  ]);
})();
