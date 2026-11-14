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
      paper: 'Paper 1',
      syllabus: 'SL 5.3',
      type: 'mcq',
      marks: 4,
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
      paper: 'Paper 1',
      syllabus: 'SL 5.4',
      type: 'numeric',
      marks: 5,
      stem: '<p>Consider the curve <span class="chem">y = x^3 - 5x^2 + 8x - 1</span>. The normal to the curve at <span class="chem">x = 1</span> has equation <span class="chem">y = m x + c</span>. Find the value of <span class="chem">c</span>.</p>',
      answer: 4,
      tolerance: 0.01,
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
      paper: 'Paper 1',
      syllabus: 'SL 5.6',
      type: 'mcq',
      marks: 4,
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
      paper: 'Paper 1',
      syllabus: 'SL 5.6',
      type: 'numeric',
      marks: 5,
      stem: '<p>Let <span class="chem">f(x) = x^2 e^{3x}</span>. The derivative <span class="chem">f\'(x)</span> can be written in the form <span class="chem">x e^{3x}(a x + b)</span>. Find the value of <span class="chem">a + b</span>.</p>',
      answer: 5,
      tolerance: 0.01,
      hints: [
        'Use the product rule <span class="chem">(u v)\' = u v\' + v u\'</span> with <span class="chem">u = x^2</span> and <span class="chem">v = e^{3x}</span>.',
        'Remember the chain rule when differentiating <span class="chem">e^{3x}</span>: <span class="chem">v\' = 3e^{3x}</span>. Then factor out <span class="chem">x e^{3x}</span>.'
      ],
      solution: '<p>By the product rule, <span class="chem">f\'(x) = x^2(3e^{3x}) + e^{3x}(2x) = x e^{3x}(3x + 2)</span>. Comparing with <span class="chem">x e^{3x}(a x + b)</span> gives <span class="chem">a = 3</span> and <span class="chem">b = 2</span>, so <span class="chem">a + b = 5</span>.</p>'
    },
    {
      id: 't5-1-q005',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1',
      syllabus: 'SL 5.6',
      type: 'mcq',
      marks: 5,
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
      paper: 'Paper 1',
      syllabus: 'SL 5.4',
      type: 'numeric',
      marks: 6,
      stem: '<p>The tangent to the curve <span class="chem">f(x) = k x^2 + 3x - 2</span> at the point where <span class="chem">x = 2</span> is parallel to the line <span class="chem">y = 11x - 5</span>. Find the value of <span class="chem">k</span>.</p>',
      answer: 2,
      tolerance: 0.01,
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
      paper: 'Paper 1',
      syllabus: 'SL 5.7',
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
      paper: 'Paper 1',
      syllabus: 'SL 5.7',
      type: 'mcq',
      marks: 5,
      stem: '<p>An exam question displays the graph of the <strong>derivative</strong> <span class="chem">y = f\'(x)</span> for <span class="chem">-3 &lt;= x &lt;= 5</span>. The graph of <span class="chem">f\'(x)</span> crosses the <span class="chem">x</span>-axis at <span class="chem">x = -1</span> and <span class="chem">x = 4</span>, and has a local maximum turning point at <span class="chem">(1.5, 6)</span>. At which value of <span class="chem">x</span> does the original curve <span class="chem">y = f(x)</span> have a point of inflexion?</p>',
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
      paper: 'Paper 1',
      syllabus: 'SL 5.7',
      type: 'numeric',
      marks: 6,
      stem: '<p>Let <span class="chem">f(x) = x e^{-x}</span> for <span class="chem">x in R</span>. Find the <span class="chem">x</span>-coordinate of the point of inflexion on the graph of <span class="chem">f</span>.</p>',
      answer: 2,
      tolerance: 0.01,
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
      paper: 'Paper 1',
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
      paper: 'Paper 2',
      syllabus: 'SL 5.8',
      type: 'numeric',
      marks: 6,
      stem: '<p>A closed cylindrical can has radius <span class="chem">r</span> <span class="unit">cm</span>, height <span class="chem">h</span> <span class="unit">cm</span>, and fixed volume <span class="chem">500</span> <span class="unit">cm3</span>. Calculate the value of <span class="chem">r</span> (in <span class="unit">cm</span>, to 3 s.f.) that minimizes the total external surface area <span class="chem">A = 2 pi r^2 + 2 pi r h</span>.</p>',
      answer: 4.30,
      tolerance: '1%',
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
      paper: 'Paper 1',
      syllabus: 'SL 5.6',
      type: 'numeric',
      marks: 6,
      stem: '<p>Consider <span class="chem">f(x) = (ln x) / x</span> for <span class="chem">x &gt; 0</span>. Find the exact maximum value of <span class="chem">f(x)</span> (give your answer to 3 s.f. or in terms of <span class="chem">e</span> as a decimal).</p>',
      answer: 0.368,
      tolerance: '1%',
      sigfigs: 3,
      hints: [
        'Differentiate using the quotient rule: <span class="chem">f\'(x) = (x(1/x) - (ln x)(1)) / x^2 = (1 - ln x) / x^2</span>.',
        'Set <span class="chem">f\'(x) = 0</span> to find <span class="chem">ln x = 1 =&gt; x = e</span>, then evaluate <span class="chem">f(e) = (ln e) / e = 1 / e ≈ 0.368</span>.'
      ],
      solution: '<p>By the quotient rule, <span class="chem">f\'(x) = (1 - ln x) / x^2 = 0 =&gt; ln x = 1 =&gt; x = e</span>. For <span class="chem">0 &lt; x &lt; e</span>, <span class="chem">f\'(x) &gt; 0</span>, and for <span class="chem">x &gt; e</span>, <span class="chem">f\'(x) &lt; 0</span>, confirming a global maximum. The maximum value is <span class="chem">f(e) = 1 / e ≈ 0.368</span> (3 s.f.).</p>'
    },
    {
      id: 't5-1-q013',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1',
      syllabus: 'SL 5.7',
      type: 'short',
      marks: 7,
      stem: '<p>Let <span class="chem">f(x) = x^3 - 3x^2 - 9x + 11</span> for <span class="chem">x in R</span>.<br>(a) Find the coordinates of the two stationary points on the graph of <span class="chem">f</span>, and determine the nature of each point using the second derivative. <strong>[5 marks]</strong><br>(b) Find the coordinates of the point of inflexion and state the set of values of <span class="chem">x</span> for which the graph of <span class="chem">f</span> is concave down. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) Local maximum at <span class="chem">(-1, 16)</span>; local minimum at <span class="chem">(3, -16)</span>.<br>(b) Point of inflexion at <span class="chem">(1, 0)</span>; concave down for <span class="chem">x &lt; 1</span>.</p>',
      markscheme: [
        'M1 A1: Differentiate and factor <span class="chem">f\'(x) = 3x^2 - 6x - 9 = 3(x - 3)(x + 1) = 0</span> to get <span class="chem">x = -1</span> and <span class="chem">x = 3</span>.',
        'A1: Find both stationary points: <span class="chem">(-1, 16)</span> and <span class="chem">(3, -16)</span>.',
        'M1 R1: Find <span class="chem">f\'\'(x) = 6x - 6</span>; since <span class="chem">f\'\'(-1) = -12 &lt; 0</span>, <span class="chem">(-1, 16)</span> is a local maximum, and since <span class="chem">f\'\'(3) = 12 &gt; 0</span>, <span class="chem">(3, -16)</span> is a local minimum.',
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
      paper: 'Paper 1',
      syllabus: 'SL 5.4',
      type: 'numeric',
      marks: 7,
      stem: '<p>A tangent to the parabola <span class="chem">y = x^2 + 5</span> at a point <span class="chem">P(a, a^2 + 5)</span> in the first quadrant (<span class="chem">a &gt; 0</span>) passes through the point <span class="chem">(0, -4)</span>. Find the value of <span class="chem">a</span>.</p>',
      answer: 3,
      tolerance: 0.01,
      hints: [
        'At <span class="chem">P(a, a^2 + 5)</span>, the gradient of the tangent is <span class="chem">dy/dx = 2a</span>, so the tangent equation is <span class="chem">y - (a^2 + 5) = 2a(x - a)</span>.',
        'Substitute the external point <span class="chem">(x, y) = (0, -4)</span> into the tangent equation and solve for <span class="chem">a &gt; 0</span>.'
      ],
      solution: '<p>At <span class="chem">P(a, a^2 + 5)</span>, <span class="chem">m_T = 2a</span>, so the tangent line is <span class="chem">y - (a^2 + 5) = 2a(x - a) =&gt; y = 2a x - a^2 + 5</span>. Since it passes through <span class="chem">(0, -4)</span>, substituting <span class="chem">x = 0, y = -4</span> gives <span class="chem">-4 = -a^2 + 5 =&gt; a^2 = 9</span>. Since <span class="chem">a &gt; 0</span>, <span class="chem">a = 3</span>.</p>'
    },
    {
      id: 't5-1-q015',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 1',
      syllabus: 'SL 5.6',
      type: 'mcq',
      marks: 6,
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
      paper: 'Paper 1',
      syllabus: 'SL 5.8',
      type: 'short',
      marks: 8,
      stem: '<p>A lifeguard is at point <span class="chem">A</span> on a straight shoreline. A swimmer in distress is at point <span class="chem">B</span> in the water, <span class="chem">60</span> <span class="unit">m</span> perpendicular from a point <span class="chem">C</span> on the shoreline, where the distance <span class="chem">AC = 100</span> <span class="unit">m</span>. The lifeguard runs along the shore from <span class="chem">A</span> to a point <span class="chem">P</span> at a distance <span class="chem">x</span> <span class="unit">m</span> from <span class="chem">C</span> (<span class="chem">0 &lt;= x &lt;= 100</span>) at <span class="chem">5</span> <span class="unit">m s-1</span>, and then swims in a straight line from <span class="chem">P</span> to <span class="chem">B</span> at <span class="chem">3</span> <span class="unit">m s-1</span>.<br>(a) Show that the total time <span class="chem">T</span> seconds taken to reach the swimmer is <span class="chem">T(x) = (100 - x)/5 + sqrt(x^2 + 3600)/3</span>. <strong>[2 marks]</strong><br>(b) Find the value of <span class="chem">x</span> that minimizes <span class="chem">T(x)</span>, and calculate the minimum time required. <strong>[6 marks]</strong></p>',
      answer: '<p><span class="chem">x = 45</span> <span class="unit">m</span>; minimum time <span class="chem">T = 36</span> <span class="unit">s</span>.</p>',
      markscheme: [
        'M1: Express running distance <span class="chem">AP = 100 - x</span> and swimming distance <span class="chem">PB = sqrt(x^2 + 60^2) = sqrt(x^2 + 3600)</span> using Pythagoras\' theorem.',
        'AG: Divide each distance by its speed to obtain <span class="chem">T(x) = (100 - x)/5 + sqrt(x^2 + 3600)/3</span>.',
        'M1 A1: Differentiate using the chain rule: <span class="chem">T\'(x) = -1/5 + x / (3 sqrt(x^2 + 3600))</span>.',
        'M1: Set <span class="chem">T\'(x) = 0 =&gt; 5x = 3 sqrt(x^2 + 3600)</span> and square both sides: <span class="chem">25x^2 = 9(x^2 + 3600)</span>.',
        'A1: Solve <span class="chem">16x^2 = 9 * 3600 =&gt; 4x = 3 * 60 =&gt; x = 45</span> <span class="unit">m</span>.',
        'A1: Substitute <span class="chem">x = 45</span> into <span class="chem">T(x)</span>: <span class="chem">T(45) = 55/5 + sqrt(2025 + 3600)/3 = 11 + 75/3 = 36</span> <span class="unit">s</span>.'
      ],
      hints: [
        'For part (a), use <span class="chem">time = distance / speed</span> for the shore segment <span class="chem">AP = 100 - x</span> and the water hypotenuse <span class="chem">PB = sqrt(x^2 + 60^2)</span>.',
        'For part (b), write <span class="chem">sqrt(x^2 + 3600) = (x^2 + 3600)^{1/2}</span> and use the chain rule to differentiate.'
      ],
      solution: '<p>(a) The shore distance is <span class="chem">AP = 100 - x</span> at <span class="chem">5</span> <span class="unit">m s-1</span>, taking <span class="chem">(100 - x)/5</span> seconds. By Pythagoras in right triangle <span class="chem">PCB</span>, <span class="chem">PB = sqrt(x^2 + 60^2) = sqrt(x^2 + 3600)</span> at <span class="chem">3</span> <span class="unit">m s-1</span>, giving <span class="chem">T(x) = (100 - x)/5 + sqrt(x^2 + 3600)/3</span>.<br>(b) Differentiating gives <span class="chem">T\'(x) = -1/5 + (1/3) * (2x) / (2 sqrt(x^2 + 3600)) = 0 =&gt; 5x = 3 sqrt(x^2 + 3600)</span>. Squaring gives <span class="chem">25x^2 = 9x^2 + 32400 =&gt; 16x^2 = 32400 =&gt; x^2 = 2025 =&gt; x = 45</span> <span class="unit">m</span> (with <span class="chem">T\'(x)</span> changing from <span class="chem">-</span> to <span class="chem">+</span>). Then <span class="chem">T(45) = (100 - 45)/5 + sqrt(2025 + 3600)/3 = 11 + 75/3 = 36</span> <span class="unit">s</span>.</p>'
    },
    {
      id: 't5-1-q017',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 1',
      syllabus: 'SL 5.7',
      type: 'numeric',
      marks: 6,
      stem: '<p>The cubic curve <span class="chem">f(x) = a x^3 + b x^2 + c x + d</span> has a local maximum at <span class="chem">(0, 4)</span> and a point of inflexion at <span class="chem">(1, 2)</span>. Find the value of <span class="chem">a</span>.</p>',
      answer: 1,
      tolerance: 0.01,
      hints: [
        'Use <span class="chem">f(0) = 4</span> and <span class="chem">f\'(0) = 0</span> to find <span class="chem">d = 4</span> and <span class="chem">c = 0</span> immediately!',
        'Next use <span class="chem">f\'\'(1) = 6a(1) + 2b = 0 =&gt; b = -3a</span>, and substitute into <span class="chem">f(1) = a + b + 4 = 2</span>.'
      ],
      solution: '<p>We have <span class="chem">f\'(x) = 3a x^2 + 2b x + c</span> and <span class="chem">f\'\'(x) = 6a x + 2b</span>. Since <span class="chem">(0, 4)</span> is a local maximum, <span class="chem">f(0) = d = 4</span> and <span class="chem">f\'(0) = c = 0</span>. Since <span class="chem">(1, 2)</span> is a point of inflexion, <span class="chem">f\'\'(1) = 6a + 2b = 0 =&gt; b = -3a</span>, and <span class="chem">f(1) = a + b + 4 = 2 =&gt; a - 3a = -2 =&gt; -2a = -2 =&gt; a = 1</span>.</p>'
    }
  ]);
})();
