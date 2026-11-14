/* ==========================================================================
   Analysis Lab — questions-t5-3.js
   Original question bank for Topic 5.3 (AHL 5.12–5.17):
   First principles, L'Hôpital, implicit, parts and volumes.
   ========================================================================== */
(function () {
  'use strict';
  if (!window.S1 || !window.S1.questions) return;

  window.S1.questions.register('t5-3', [
    /* --- Foundation --- */
    {
      id: 't5-3-q001',
      topic: 't5-3',
      level: 'ahl',
      tier: 'foundation',
      type: 'mcq',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.12',
      marks: 2,
      stem: '<p>To differentiate <span class="chem">f(x) = 3/x</span> from first principles using <span class="chem">f\'(x) = lim_{h->0} (f(x + h) - f(x))/h</span>, which algebraic expression is obtained after combining the numerator over a single common denominator (before dividing by <i>h</i> and taking the limit)?</p>',
      options: [
        '<span class="chem">-3h / (x(x + h))</span>',
        '<span class="chem">3h / (x(x + h))</span>',
        '<span class="chem">-3 / (x^2 + h^2)</span>',
        '<span class="chem">3 / (x + h) - 3 / x = 3 / h</span>'
      ],
      answer: 0,
      misconception: {
        1: 'Check the subtraction order: <span class="chem">3/(x + h) - 3/x = (3x - 3(x + h))/(x(x + h)) = -3h/(x(x + h))</span>, which has a minus sign.',
        2: 'Combining fractions requires the product of denominators <span class="chem">x(x + h)</span>, not <span class="chem">x^2 + h^2</span>.',
        3: 'You cannot subtract denominators directly; <span class="chem">1/(x + h) - 1/x != 1/h</span>.'
      },
      hints: [
        'Write <span class="chem">f(x + h) - f(x) = 3/(x + h) - 3/x</span>.',
        'Put both fractions over the common denominator <span class="chem">x(x + h)</span>: <span class="chem">(3x - 3(x + h)) / (x(x + h))</span>.'
      ],
      solution: '<p>We have <span class="chem">f(x + h) - f(x) = 3/(x + h) - 3/x = (3x - 3x - 3h) / (x(x + h)) = -3h / (x(x + h))</span>. Dividing by <i>h</i> and letting <span class="chem">h -> 0</span> gives <span class="chem">f\'(x) = -3/x^2</span>.</p>'
    },
    {
      id: 't5-3-q002',
      topic: 't5-3',
      level: 'ahl',
      tier: 'foundation',
      type: 'mcq',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.13',
      marks: 2,
      stem: '<p>A student attempts to evaluate <span class="chem">lim_{x->0} (cos x) / (x + 2)</span> by differentiating numerator and denominator to obtain <span class="chem">lim_{x->0} (-sin x) / 1 = 0</span>. Why is this working invalid?</p>',
      options: [
        'At <span class="chem">x = 0</span>, the expression approaches <span class="chem">1/2</span>, which is not an indeterminate form <span class="chem">0/0</span> or <span class="chem">infty/infty</span>.',
        'The student should have used the quotient rule <span class="chem">(v u\' - u v\')/v^2</span> when applying L’Hôpital’s rule.',
        'The derivative of <span class="chem">cos x</span> is <span class="chem">+sin x</span>, not <span class="chem">-sin x</span>.',
        'L’Hôpital’s rule can only be used as <span class="chem">x -> infty</span>, never as <span class="chem">x -> 0</span>.'
      ],
      answer: 0,
      misconception: {
        1: 'L’Hôpital’s rule differentiates numerator and denominator separately—never with the quotient rule—but it requires an indeterminate form first.',
        2: 'The derivative of <span class="chem">cos x</span> is indeed <span class="chem">-sin x</span>; the error is applying L’Hôpital’s rule when the denominator is non-zero.',
        3: 'L’Hôpital’s rule works for any limit point <span class="chem">x -> a</span> or <span class="chem">x -> +-infty</span>, provided the form is <span class="chem">0/0</span> or <span class="chem">+-infty/+-infty</span>.'
      },
      hints: [
        'Substitute <span class="chem">x = 0</span> directly into <span class="chem">(cos x)/(x + 2)</span> before doing any differentiation.'
      ],
      solution: '<p>Direct substitution at <span class="chem">x = 0</span> gives <span class="chem">cos(0) / (0 + 2) = 1/2</span>. Because the limit is not of the indeterminate form <span class="chem">0/0</span> or <span class="chem">infty/infty</span>, L’Hôpital’s rule does not apply.</p>'
    },
    {
      id: 't5-3-q003',
      topic: 't5-3',
      level: 'ahl',
      tier: 'foundation',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.13',
      marks: 3,
      stem: '<p>Evaluate <span class="chem">lim_{x->0} (e^{3x} - 1 - 3x) / x^2</span>.</p>',
      answer: 4.5,
      exact: true,
      answerInput: '9/2',
      hints: [
        'Check that <span class="chem">x = 0</span> gives <span class="chem">0/0</span>, then apply L’Hôpital’s rule once to get <span class="chem">lim_{x->0} (3e^{3x} - 3) / (2x)</span>.',
        'Apply L’Hôpital’s rule a second time: <span class="chem">lim_{x->0} (9e^{3x}) / 2</span>.'
      ],
      solution: '<p>At <span class="chem">x = 0</span>, the limit has the form <span class="chem">0/0</span>. Applying L’Hôpital’s rule twice gives <span class="chem">lim_{x->0} (3e^{3x} - 3)/(2x) = lim_{x->0} (9e^{3x})/2 = 9/2 = 4.5</span>.</p>'
    },
    {
      id: 't5-3-q004',
      topic: 't5-3',
      level: 'ahl',
      tier: 'foundation',
      type: 'mcq',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.15',
      marks: 2,
      stem: '<p>Find the derivative of <span class="chem">f(x) = arcsin(3x)</span> for <span class="chem">|x| &lt; 1/3</span>.</p>',
      options: [
        '<span class="chem">3 / sqrt(1 - 9x^2)</span>',
        '<span class="chem">1 / sqrt(1 - 9x^2)</span>',
        '<span class="chem">3 / sqrt(1 - 3x^2)</span>',
        '<span class="chem">1 / (1 + 9x^2)</span>'
      ],
      answer: 0,
      misconception: {
        1: 'You forgot to multiply by the inner derivative <span class="chem">d/dx(3x) = 3</span> from the chain rule.',
        2: 'Remember to square the entire inner argument <span class="chem">(3x)^2 = 9x^2</span> inside the square root.',
        3: '<span class="chem">1/(1 + u^2)</span> is the derivative of <span class="chem">arctan u</span>, not <span class="chem">arcsin u</span>.'
      },
      hints: [
        'Use the Formula Booklet rule <span class="chem">d/du(arcsin u) = 1/sqrt(1 - u^2)</span> with <span class="chem">u = 3x</span> and multiply by <span class="chem">du/dx = 3</span>.'
      ],
      solution: '<p>By the chain rule, <span class="chem">f\'(x) = (1 / sqrt(1 - (3x)^2)) × 3 = 3 / sqrt(1 - 9x^2)</span>.</p>'
    },
    {
      id: 't5-3-q005',
      topic: 't5-3',
      level: 'ahl',
      tier: 'foundation',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.14',
      marks: 4,
      stem: '<p>A curve is defined implicitly by <span class="chem">x^2 + xy + y^2 = 7</span>. Find the gradient <span class="chem">dy/dx</span> of the curve at the point <span class="chem">(2, 1)</span>.</p>',
      answer: -1.25,
      exact: true,
      answerInput: '-5/4',
      hints: [
        'Differentiate every term with respect to <i>x</i>: <span class="chem">2x + (y + x dy/dx) + 2y dy/dx = 0</span>.',
        'Substitute <span class="chem">x = 2</span> and <span class="chem">y = 1</span> into the differentiated equation and solve for <span class="chem">dy/dx</span>.'
      ],
      solution: '<p>Differentiating implicitly with respect to <i>x</i> gives <span class="chem">2x + y + x(dy/dx) + 2y(dy/dx) = 0</span>. At <span class="chem">(2, 1)</span>: <span class="chem">4 + 1 + (2 + 2)(dy/dx) = 0 => 4(dy/dx) = -5 => dy/dx = -5/4 = -1.25</span>.</p>'
    },
    {
      id: 't5-3-q006',
      topic: 't5-3',
      level: 'ahl',
      tier: 'foundation',
      type: 'multi',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.15–5.16',
      marks: 3,
      stem: '<p>Select <strong>all</strong> integrals below whose exact value on the given interval equals <span class="chem">pi / 4</span>.</p>',
      options: [
        '<span class="chem">int_0^1 1 / (1 + x^2) dx</span>',
        '<span class="chem">int_0^2 2 / (4 + x^2) dx</span>',
        '<span class="chem">int_0^{1/sqrt(2)} 1 / sqrt(1 - x^2) dx</span>',
        '<span class="chem">int_0^2 1 / (4 + x^2) dx</span>'
      ],
      answer: [0, 1, 2],
      misconception: {
        3: 'By the Formula Booklet, <span class="chem">int_0^2 1/(2^2 + x^2) dx = [(1/2) arctan(x/2)]_0^2 = (1/2)(pi/4) = pi/8</span> because of the <span class="chem">1/a</span> factor.'
      },
      hints: [
        'Check each integral using <span class="chem">int 1/(a^2 + x^2) dx = (1/a) arctan(x/a)</span> and <span class="chem">int 1/sqrt(1 - x^2) dx = arcsin x</span>.'
      ],
      solution: '<p>A: <span class="chem">[arctan x]_0^1 = pi/4</span>. B: <span class="chem">2[(1/2) arctan(x/2)]_0^2 = arctan(1) = pi/4</span>. C: <span class="chem">[arcsin x]_0^{1/sqrt(2)} = pi/4</span>. D gives <span class="chem">pi/8</span>.</p>'
    },

    /* --- Exam style --- */
    {
      id: 't5-3-q007',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'order',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.16',
      marks: 4,
      stem: '<p>Arrange the steps in the correct logical order to evaluate the definite integral <span class="chem">int_0^{pi/2} x cos(x) dx</span> using integration by parts.</p>',
      options: [
        'Choose <span class="chem">u = x</span> and <span class="chem">dv/dx = cos x</span> following the LIATE priority rule.',
        'Differentiate and integrate to find <span class="chem">du/dx = 1</span> and <span class="chem">v = sin x</span>.',
        'Apply the parts formula: <span class="chem">[x sin x]_0^{pi/2} - int_0^{pi/2} sin x dx</span>.',
        'Evaluate the anti-derivative <span class="chem">[x sin x + cos x]_0^{pi/2} = (pi/2 + 0) - (0 + 1) = pi/2 - 1</span>.'
      ],
      answer: [0, 1, 2, 3],
      hints: [
        'Start by identifying <i>u</i> and <span class="chem">dv/dx</span>, then compute <span class="chem">du/dx</span> and <i>v</i> before assembling <span class="chem">uv - int v du</span>.'
      ],
      solution: '<p>Choose <span class="chem">u = x, dv/dx = cos x</span>, find <span class="chem">du/dx = 1, v = sin x</span>, write <span class="chem">[x sin x]_0^{pi/2} - int_0^{pi/2} sin x dx</span>, and evaluate <span class="chem">[x sin x + cos x]_0^{pi/2} = pi/2 - 1</span>.</p>'
    },
    {
      id: 't5-3-q008',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.16',
      marks: 5,
      stem: '<p>Using the substitution <span class="chem">u = 1 + x^2</span> (or otherwise), find the exact value of <span class="chem">int_0^2 (2x^3) / sqrt(1 + x^2) dx</span>.</p>',
      answer: 4.3147573033,
      answerDisplay: '(4/3)(√5 + 1) ≈ 4.31',
      exact: true,
      answerInput: '(4/3)*(sqrt(5)+1)',
      hints: [
        'Let <span class="chem">u = 1 + x^2</span>, so <span class="chem">du = 2x dx</span> and <span class="chem">x^2 = u - 1</span>. Transform the limits: <span class="chem">x = 0 -> u = 1</span> and <span class="chem">x = 2 -> u = 5</span>.',
        'Rewrite the integral as <span class="chem">int_1^5 (u - 1) / sqrt(u) du = int_1^5 (u^{1/2} - u^{-1/2}) du</span>.'
      ],
      solution: '<p>Let <span class="chem">u = 1 + x^2</span>, <span class="chem">du = 2x dx</span>, <span class="chem">x^2 = u - 1</span>, with limits <span class="chem">u = 1</span> to <span class="chem">u = 5</span>. Then <span class="chem">int_1^5 (u^{1/2} - u^{-1/2}) du = [(2/3)u^{3/2} - 2u^{1/2}]_1^5 = ((10/3)sqrt(5) - 2sqrt(5)) - (2/3 - 2) = (4/3)sqrt(5) + 4/3 = (4/3)(sqrt(5) + 1) ≈ 4.31</span>.</p>'
    },
    {
      id: 't5-3-q009',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.16',
      marks: 5,
      stem: '<p>Find the exact value of <span class="chem">int_1^e x^2 ln(x) dx</span>. (Enter an exact expression in terms of <span class="mono">e</span>.)</p>',
      answer: 4.5745637607,
      answerDisplay: '(2e³ + 1) / 9 ≈ 4.57',
      exact: true,
      answerInput: '(2*e^3+1)/9',
      hints: [
        'By LIATE, choose <span class="chem">u = ln x</span> (<span class="chem">du/dx = 1/x</span>) and <span class="chem">dv/dx = x^2</span> (<span class="chem">v = x^3 / 3</span>).',
        'Apply integration by parts: <span class="chem">[(x^3 / 3) ln x]_1^e - int_1^e (x^2 / 3) dx = [x^3 / 3 ln x - x^3 / 9]_1^e</span>.'
      ],
      solution: '<p>Let <span class="chem">u = ln x</span> and <span class="chem">dv/dx = x^2</span>, so <span class="chem">du/dx = 1/x</span> and <span class="chem">v = x^3/3</span>. Then <span class="chem">int_1^e x^2 ln x dx = [(x^3/3)ln x]_1^e - int_1^e (x^2/3) dx = (e^3/3 - 0) - [x^3/9]_1^e = e^3/3 - (e^3 - 1)/9 = (2e^3 + 1)/9 ≈ 4.57</span>.</p>'
    },
    {
      id: 't5-3-q010',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'mcq',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.15',
      marks: 2,
      stem: '<p>By completing the square in the denominator, find <span class="chem">int 1 / (x^2 - 4x + 13) dx</span>.</p>',
      options: [
        '<span class="chem">(1/3) arctan((x - 2)/3) + C</span>',
        '<span class="chem">arctan((x - 2)/3) + C</span>',
        '<span class="chem">(1/9) arctan((x - 2)/9) + C</span>',
        '<span class="chem">arcsin((x - 2)/3) + C</span>'
      ],
      answer: 0,
      misconception: {
        1: 'Don’t forget the <span class="chem">1/a = 1/3</span> coefficient in front of <span class="chem">arctan((x - 2)/3)</span>!',
        2: 'Since <span class="chem">a^2 = 9</span>, we have <span class="chem">a = 3</span>, not <span class="chem">9</span>.',
        3: 'There is no square root in the denominator, so this is an <span class="chem">arctan</span> integral, not <span class="chem">arcsin</span>.'
      },
      hints: [
        'Complete the square: <span class="chem">x^2 - 4x + 13 = (x - 2)^2 - 4 + 13 = (x - 2)^2 + 3^2</span>.',
        'Use the Formula Booklet standard integral <span class="chem">int 1/(u^2 + a^2) du = (1/a) arctan(u/a) + C</span> with <span class="chem">u = x - 2</span> and <span class="chem">a = 3</span>.'
      ],
      solution: '<p>Since <span class="chem">x^2 - 4x + 13 = (x - 2)^2 + 3^2</span>, the integral is <span class="chem">int 1/((x - 2)^2 + 3^2) dx = (1/3) arctan((x - 2)/3) + C</span>.</p>'
    },
    {
      id: 't5-3-q011',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.15',
      marks: 5,
      stem: '<p>Given that <span class="chem">6 / (x^2 - x - 2) = A / (x - 2) + B / (x + 1)</span>, find the exact value of <span class="chem">int_3^4 6 / (x^2 - x - 2) dx</span>.</p>',
      answer: 0.94000725849,
      answerDisplay: '2 ln(8/5) ≈ 0.940',
      exact: true,
      answerInput: '2*ln(8/5)',
      hints: [
        'Factor <span class="chem">x^2 - x - 2 = (x - 2)(x + 1)</span>. Cover-up method gives <span class="chem">A = 6/(2 + 1) = 2</span> and <span class="chem">B = 6/(-1 - 2) = -2</span>.',
        'Integrate <span class="chem">[2 ln|x - 2| - 2 ln|x + 1|]_3^4 = [2 ln|(x - 2)/(x + 1)|]_3^4</span>.'
      ],
      solution: '<p>Using partial fractions, <span class="chem">6/((x - 2)(x + 1)) = 2/(x - 2) - 2/(x + 1)</span>. Integrating from <span class="chem">3</span> to <span class="chem">4</span> gives <span class="chem">[2 ln((x - 2)/(x + 1))]_3^4 = 2 ln(2/5) - 2 ln(1/4) = 2 ln(8/5) ≈ 0.940</span>.</p>'
    },
    {
      id: 't5-3-q012',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.14',
      marks: 5,
      stem: '<p>A spherical balloon is being inflated so that its volume increases at a constant rate of <span class="unit">100 cm3 s-1</span>. Find the rate at which its surface area <span class="chem">A = 4 pi r^2</span> is increasing when the radius is <span class="chem">r = 5</span> <span class="unit">cm</span>.</p>',
      unit: 'cm2 s-1',
      answer: 40,
      exact: true,
      answerInput: '40',
      hints: [
        'For a sphere, <span class="chem">V = (4/3) pi r^3 => dV/dr = 4 pi r^2</span>, and <span class="chem">A = 4 pi r^2 => dA/dr = 8 pi r</span>.',
        'By the chain rule, <span class="chem">dA/dt = (dA/dr) / (dV/dr) × (dV/dt) = (8 pi r) / (4 pi r^2) × 100 = (2/r) × 100</span>.'
      ],
      solution: '<p>We have <span class="chem">dV/dr = 4 pi r^2</span> and <span class="chem">dA/dr = 8 pi r</span>. By the chain rule, <span class="chem">dA/dt = (dA/dr)(dr/dt) = (8 pi r) × (100 / (4 pi r^2)) = 200 / r</span>. When <span class="chem">r = 5</span> <span class="unit">cm</span>, <span class="chem">dA/dt = 200 / 5 = 40</span> <span class="unit">cm2 s-1</span>.</p>'
    },
    {
      id: 't5-3-q013',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'mcq',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.17',
      marks: 2,
      stem: '<p>The region bounded by <span class="chem">y = cos x</span>, the <i>x</i>-axis, <span class="chem">x = 0</span>, and <span class="chem">x = pi/2</span> is rotated through <span class="chem">2pi</span> radians about the <i>x</i>-axis. What is the exact volume of the solid formed?</p>',
      options: [
        '<span class="chem">pi^2 / 4</span>',
        '<span class="chem">pi / 2</span>',
        '<span class="chem">pi^2 / 2</span>',
        '<span class="chem">pi</span>'
      ],
      answer: 0,
      misconception: {
        1: 'You probably dropped the outer factor <span class="chem">pi</span> and also lost the <span class="chem">1/2</span> in <span class="chem">cos^2 x = (1 + cos 2x)/2</span>: that gives <span class="chem">int_0^{pi/2} (1 + cos 2x) dx = pi/2</span>. In fact <span class="chem">int_0^{pi/2} cos^2 x dx = pi/4</span>, so <span class="chem">V = pi(pi/4) = pi^2/4</span>.',
        2: 'Remember <span class="chem">cos^2 x = (1 + cos 2x)/2</span> has a factor of <span class="chem">1/2</span>, so <span class="chem">int_0^{pi/2} cos^2 x dx = pi/4</span>, not <span class="chem">pi/2</span>.',
        3: 'That is <span class="chem">pi int_0^{pi/2} cos x dx = pi</span>, which fails to square the radius <i>y</i>.'
      },
      hints: [
        'Set up <span class="chem">V = pi int_0^{pi/2} cos^2(x) dx</span>.',
        'Use the double-angle identity <span class="chem">cos^2 x = (1 + cos(2x))/2</span>.'
      ],
      solution: '<p><span class="chem">V = pi int_0^{pi/2} cos^2 x dx = (pi/2) int_0^{pi/2} (1 + cos 2x) dx = (pi/2) [x + (1/2)sin 2x]_0^{pi/2} = (pi/2)(pi/2 + 0) = pi^2 / 4</span>.</p>'
    },
    {
      id: 't5-3-q014',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.14',
      marks: 6,
      stem: '<p>A curve is given by the implicit equation <span class="chem">x^2 + xy + y^2 = 12</span>.</p><p>(a) Show that <span class="chem">dy/dx = -(2x + y) / (x + 2y)</span>. <strong>[3 marks]</strong></p><p>(b) Hence find the coordinates of the two stationary points on the curve. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) Differentiating both sides with respect to <i>x</i>: <span class="chem">2x + (y + x dy/dx) + 2y dy/dx = 0</span>. Grouping <span class="chem">dy/dx</span> terms gives <span class="chem">(x + 2y) dy/dx = -(2x + y) => dy/dx = -(2x + y)/(x + 2y)</span>.</p><p>(b) Stationary points occur where <span class="chem">dy/dx = 0 => 2x + y = 0 => y = -2x</span>. Substituting into the curve: <span class="chem">x^2 + x(-2x) + (-2x)^2 = 12 => 3x^2 = 12 => x = +-2</span>. Thus the stationary points are <span class="chem">(2, -4)</span> and <span class="chem">(-2, 4)</span>.</p>',
      markscheme: [
        'M1: applies product rule to <span class="chem">xy</span> to get <span class="chem">y + x(dy/dx)</span> and chain rule to <span class="chem">y^2</span> to get <span class="chem">2y(dy/dx)</span>.',
        'A1: correct differentiated equation <span class="chem">2x + y + x(dy/dx) + 2y(dy/dx) = 0</span>.',
        'A1: groups the <span class="chem">dy/dx</span> terms: <span class="chem">(x + 2y) dy/dx = -(2x + y)</span>, leading to the given answer <span class="chem">dy/dx = -(2x + y)/(x + 2y)</span> AG (no mark for the given line).',
        'M1: sets numerator <span class="chem">2x + y = 0</span> (<span class="chem">y = -2x</span>) for stationary points.',
        'M1: substitutes <span class="chem">y = -2x</span> into <span class="chem">x^2 + xy + y^2 = 12</span> to obtain <span class="chem">3x^2 = 12</span>.',
        'A1: both coordinate pairs <span class="chem">(2, -4)</span> and <span class="chem">(-2, 4)</span> correct.'
      ],
      hints: [
        'In part (a), remember to apply the product rule to <span class="chem">xy</span> and the chain rule to <span class="chem">y^2</span>.',
        'In part (b), a stationary point has <span class="chem">dy/dx = 0</span>, so set the numerator <span class="chem">2x + y = 0</span> and substitute <span class="chem">y = -2x</span> into the original curve.'
      ]
    },

    /* --- Challenge --- */
    {
      id: 't5-3-q015',
      topic: 't5-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.16',
      marks: 6,
      stem: '<p>By integrating by parts twice, find the exact value of the cyclic integral <span class="chem">I = int_0^{pi/2} e^{2x} sin(x) dx</span>. (You can type an exact expression in terms of <span class="mono">e</span> and <span class="mono">pi</span> such as <span class="mono">(e^pi-1)/2</span>.)</p>',
      answer: 9.4562770531,
      answerDisplay: '(2e^π + 1) / 5 ≈ 9.46',
      exact: true,
      answerInput: '(2*e^pi+1)/5',
      hints: [
        'Decode: "cyclic" means that integrating by parts twice brings back the original integral <span class="chem">I</span>. Keep the same choice <span class="chem">dv/dx = e^{2x}</span> both times, then solve the resulting linear equation for <span class="chem">I</span>.',
        'First parts (<span class="chem">u = sin x, dv/dx = e^{2x}</span>): <span class="chem">I = [(1/2)e^{2x} sin x]_0^{pi/2} - (1/2) int_0^{pi/2} e^{2x} cos x dx = (1/2)e^{pi} - (1/2) int_0^{pi/2} e^{2x} cos x dx</span>.',
        'Second parts on <span class="chem">int_0^{pi/2} e^{2x} cos x dx</span> (<span class="chem">u = cos x, dv/dx = e^{2x}</span>) gives <span class="chem">[(1/2)e^{2x} cos x]_0^{pi/2} + (1/2)I = -1/2 + (1/2)I</span>. Substitute back and solve for <i>I</i>!'
      ],
      solution: '<p>Integrating by parts twice gives <span class="chem">I = (1/2)e^{pi} - (1/2)(-1/2 + (1/2)I) = (1/2)e^{pi} + 1/4 - (1/4)I</span>. Thus <span class="chem">(5/4)I = (2e^{pi} + 1)/4 => I = (2e^{pi} + 1)/5 ≈ 9.46</span>.</p>'
    },
    {
      id: 't5-3-q016',
      topic: 't5-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.13',
      marks: 6,
      stem: '<p>Given that the limit <span class="chem">lim_{x->0} (sin(2x) + k x cos(x)) / x^3</span> exists and is finite, find the exact value of that limit.</p>',
      answer: -1 / 3,
      answerDisplay: '−1/3 ≈ −0.333',
      exact: true,
      answerInput: '-1/3',
      hints: [
        'Decode: <span class="chem">k</span> is not given, but "the limit exists and is finite" fixes it. The form is <span class="chem">0/0</span>; if after one application of L’Hôpital’s rule the denominator still tends to 0, the numerator must tend to 0 as well.',
        'Apply L’Hôpital’s rule once: <span class="chem">lim_{x->0} (2 cos(2x) + k cos x - k x sin x) / (3x^2)</span>. Since the denominator goes to 0, the numerator at <span class="chem">x = 0</span> must also be 0: <span class="chem">2 + k = 0 => k = -2</span>.',
        'Substitute <span class="chem">k = -2</span> and apply L’Hôpital’s rule twice more (or use Maclaurin expansions) to evaluate <span class="chem">lim_{x->0} (sin(2x) - 2x cos x) / x^3</span>.'
      ],
      solution: '<p>After one step of L’Hôpital’s rule, the numerator at <span class="chem">x = 0</span> is <span class="chem">2 + k</span>. For the limit to be finite, <span class="chem">2 + k = 0 => k = -2</span>. With <span class="chem">k = -2</span>, differentiating top and bottom twice more (or expanding <span class="chem">(2x - 8x^3/6) - 2x(1 - x^2/2) = -x^3/3</span>) gives <span class="chem">-1/3 ≈ -0.333</span>.</p>'
    },
    {
      id: 't5-3-q017',
      topic: 't5-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.16–5.17',
      marks: 7,
      stem: '<p>For each non-negative integer <i>n</i>, let <span class="chem">I_n = int_1^e x (ln x)^n dx</span>.</p><p>(a) Find the exact value of <span class="chem">I_0</span> and <span class="chem">I_1</span>. <strong>[3 marks]</strong></p><p>(b) Using integration by parts, show that <span class="chem">I_n = e^2 / 2 - (n / 2) I_{n-1}</span> for <span class="chem">n &gt;= 1</span>, and hence find the exact volume generated when the curve <span class="chem">y = sqrt(x) ln x</span> between <span class="chem">x = 1</span> and <span class="chem">x = e</span> is rotated <span class="chem">2pi</span> radians about the <i>x</i>-axis. <strong>[4 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">I_0 = int_1^e x dx = [x^2/2]_1^e = (e^2 - 1)/2</span>. Using parts on <span class="chem">I_1</span> (or the reduction formula with <span class="chem">n = 1</span>): <span class="chem">I_1 = e^2/2 - (1/2)((e^2 - 1)/2) = (e^2 + 1)/4</span>.</p><p>(b) Let <span class="chem">u = (ln x)^n => du/dx = n(ln x)^{n-1}/x</span> and <span class="chem">dv/dx = x => v = x^2/2</span>. Then <span class="chem">I_n = [(x^2/2)(ln x)^n]_1^e - int_1^e (x^2/2)(n(ln x)^{n-1}/x) dx = e^2/2 - (n/2) I_{n-1}</span>. The volume is <span class="chem">V = pi int_1^e x(ln x)^2 dx = pi I_2 = pi(e^2/2 - I_1) = pi(e^2/2 - (e^2 + 1)/4) = pi(e^2 - 1)/4</span>.</p>',
      markscheme: [
        'A1: correct value <span class="chem">I_0 = (e^2 - 1)/2</span>.',
        'M1: applies integration by parts (or the reduction formula with <span class="chem">n = 1</span>) to <span class="chem">I_1</span>.',
        'A1: <span class="chem">I_1 = (e^2 + 1)/4</span>.',
        'M1: chooses <span class="chem">u = (ln x)^n</span> and <span class="chem">dv/dx = x</span> in <span class="chem">I_n</span>.',
        'A1: correct boundary term <span class="chem">[(x^2/2)(ln x)^n]_1^e = e^2/2</span> and remaining integral <span class="chem">(n/2) int_1^e x (ln x)^{n-1} dx</span>, leading to the given result <span class="chem">I_n = e^2/2 - (n/2) I_{n-1}</span> AG (no mark for the given line).',
        'M1: identifies volume <span class="chem">V = pi int_1^e y^2 dx = pi I_2</span>.',
        'A1: substitutes <span class="chem">n = 2</span> to obtain <span class="chem">V = pi(e^2 - 1)/4</span>.'
      ],
      hints: [
        'Decode: <span class="chem">I_n</span> defines a family of integrals linked by a reduction formula. The volume in (b) is a member of the family in disguise, because <span class="chem">y^2 = x (ln x)^2</span>.',
        'For part (b), choose <span class="chem">u = (ln x)^n</span> and <span class="chem">dv/dx = x</span> so that <span class="chem">v = x^2 / 2</span> cancels the <span class="chem">1/x</span> in <span class="chem">du/dx</span>.',
        'Notice that rotating <span class="chem">y = sqrt(x) ln x</span> about the <i>x</i>-axis gives <span class="chem">V = pi int_1^e x (ln x)^2 dx = pi I_2</span>.'
      ]
    },
    {
      id: 't5-3-q018',
      topic: 't5-3',
      level: 'ahl',
      tier: 'foundation',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.15',
      marks: 3,
      stem: '<p>Find the exact value of <span class="chem">int_0^2 3^x dx</span>. (Enter an exact expression such as <span class="mono">5/ln(2)</span>.)</p>',
      answer: 8 / Math.log(3),
      answerDisplay: '8 / ln 3 ≈ 7.28',
      exact: true,
      answerInput: '8/ln(3)',
      hints: [
        'Use the Formula Booklet result <span class="chem">int a^x dx = a^x / ln a + C</span>.',
        'Evaluate <span class="chem">[3^x / ln 3]_0^2</span>.'
      ],
      solution: '<p><span class="chem">int_0^2 3^x dx = [3^x / ln 3]_0^2 = (9 - 1)/ln 3 = 8/ln 3 ≈ 7.28</span>.</p>'
    },
    {
      id: 't5-3-q019',
      topic: 't5-3',
      level: 'ahl',
      tier: 'foundation',
      type: 'mcq',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.15',
      marks: 2,
      stem: '<p>Find <span class="chem">d/dx (arctan(x/2))</span>.</p>',
      options: [
        '<span class="chem">2/(4 + x^2)</span>',
        '<span class="chem">4/(4 + x^2)</span>',
        '<span class="chem">1/sqrt(4 - x^2)</span>',
        '<span class="chem">8/(4 + x^2)</span>'
      ],
      answer: 0,
      misconception: {
        1: 'That is <span class="chem">1/(1 + (x/2)^2) = 4/(4 + x^2)</span>: you forgot to multiply by the inner derivative <span class="chem">1/2</span>.',
        2: 'That is the derivative of <span class="chem">arcsin(x/2)</span>, not <span class="chem">arctan(x/2)</span>.',
        3: 'You multiplied by <span class="chem">2</span> instead of by the inner derivative <span class="chem">1/2</span>.'
      },
      hints: [
        'Use <span class="chem">d/dx arctan u = (1/(1 + u^2)) (du/dx)</span> with <span class="chem">u = x/2</span>.'
      ],
      solution: '<p><span class="chem">d/dx arctan(x/2) = (1/2) × 1/(1 + x^2/4) = (1/2) × 4/(4 + x^2) = 2/(4 + x^2)</span>.</p>'
    },
    {
      id: 't5-3-q020',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.17',
      marks: 4,
      stem: '<p>Find the exact area of the region enclosed by the curve <span class="chem">x = y^2 - 4</span> and the <i>y</i>-axis.</p>',
      answer: 32 / 3,
      answerDisplay: '32/3 ≈ 10.7',
      exact: true,
      answerInput: '32/3',
      hints: [
        'The curve meets the <i>y</i>-axis where <span class="chem">x = 0</span>, that is at <span class="chem">y = -2</span> and <span class="chem">y = 2</span>.',
        'Between these, <span class="chem">x = y^2 - 4 &lt;= 0</span>, so the area is <span class="chem">int_{-2}^2 (4 - y^2) dy</span>.'
      ],
      solution: '<p>The curve crosses the <i>y</i>-axis at <span class="chem">y = +-2</span> and lies to the left of it in between, so <span class="chem">A = int_{-2}^2 (4 - y^2) dy = [4y - y^3/3]_{-2}^2 = (8 - 8/3) - (-8 + 8/3) = 32/3 ≈ 10.7</span>.</p>'
    },
    {
      id: 't5-3-q021',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.17',
      marks: 5,
      stem: '<p>The region bounded by the curve <span class="chem">y = ln x</span>, the <i>x</i>-axis, the <i>y</i>-axis and the line <span class="chem">y = 1</span> is rotated through <span class="chem">2pi</span> radians about the <strong><i>y</i>-axis</strong>. Find the exact volume of the solid formed. (Enter an exact expression such as <span class="mono">pi*(e^3-1)/3</span>.)</p>',
      answer: Math.PI * (Math.exp(2) - 1) / 2,
      answerDisplay: 'π(e² − 1)/2 ≈ 10.0',
      exact: true,
      answerInput: 'pi*(e^2-1)/2',
      hints: [
        'Rearrange <span class="chem">y = ln x</span> as <span class="chem">x = e^y</span>, so <span class="chem">x^2 = e^{2y}</span>.',
        'Use <span class="chem">V = pi int_0^1 x^2 dy = pi int_0^1 e^{2y} dy</span>.'
      ],
      solution: '<p><span class="chem">x = e^y</span>, so <span class="chem">V = pi int_0^1 e^{2y} dy = pi [e^{2y}/2]_0^1 = pi(e^2 - 1)/2 ≈ 10.0</span>.</p>'
    },
    {
      id: 't5-3-q022',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.12',
      marks: 5,
      stem: '<p>The function <i>f</i> is defined by <span class="chem">f(x) = a x^3 + 2</span> for <span class="chem">x &lt;= 1</span> and <span class="chem">f(x) = b x - 1</span> for <span class="chem">x &gt; 1</span>, where <i>a</i> and <i>b</i> are constants. Given that <i>f</i> is continuous and differentiable at <span class="chem">x = 1</span>, find the value of <i>b</i>.</p>',
      answer: 4.5,
      answerDisplay: '9/2 = 4.5',
      exact: true,
      answerInput: '9/2',
      hints: [
        'Continuous at <span class="chem">x = 1</span>: the two pieces give the same value, <span class="chem">a + 2 = b - 1</span>.',
        'Differentiable at <span class="chem">x = 1</span>: the two derivatives agree, <span class="chem">3a = b</span>.'
      ],
      solution: '<p>Continuity: <span class="chem">a + 2 = b - 1 => b = a + 3</span>. Differentiability: <span class="chem">3a(1)^2 = b => b = 3a</span>. So <span class="chem">3a = a + 3 => a = 3/2</span> and <span class="chem">b = 9/2 = 4.5</span>.</p>'
    },
    {
      id: 't5-3-q023',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'mcq',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.13',
      marks: 2,
      stem: '<p>Find <span class="chem">lim_{x->infty} x^2 / e^x</span>.</p>',
      options: [
        '<span class="chem">0</span>',
        '<span class="chem">1</span>',
        '<span class="chem">2</span>',
        '<span class="chem">infty</span>'
      ],
      answer: 0,
      misconception: {
        1: 'A limit of <span class="chem">1</span> would need <span class="chem">x^2</span> and <span class="chem">e^x</span> to grow at the same rate, but <span class="chem">e^x</span> grows much faster: two applications of L’Hôpital’s rule give <span class="chem">lim_{x->infty} 2/e^x = 0</span>.',
        2: 'You stopped at <span class="chem">2/e^x</span> and treated <span class="chem">e^x</span> as <span class="chem">1</span>. As <span class="chem">x -> infty</span>, <span class="chem">2/e^x -> 0</span>.',
        3: 'Both <span class="chem">x^2</span> and <span class="chem">e^x</span> tend to infinity (<span class="chem">infty/infty</span>), but <span class="chem">e^x</span> grows much faster. Apply L’Hôpital’s rule twice.'
      },
      hints: [
        'The limit has the form <span class="chem">infty/infty</span>, so L’Hôpital’s rule applies. You will need it twice.'
      ],
      solution: '<p><span class="chem">lim_{x->infty} x^2/e^x = lim_{x->infty} 2x/e^x = lim_{x->infty} 2/e^x = 0</span> (L’Hôpital’s rule twice, each time of the form <span class="chem">infty/infty</span>).</p>'
    },
    /* --- Paper 2 (GDC): related rates, implicit curves, volumes, numerical integrals --- */
    {
      id: 't5-3-q024',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.14',
      marks: 5,
      stem: '<p>A hemispherical bowl has inner radius <span class="unit">2 m</span>. When the water in the bowl has depth <i>h</i> metres, the volume of water is <span class="chem">V = (pi/3) h^2 (6 - h)</span> <span class="unit">m3</span>. Water is poured in at a constant rate of <span class="unit">0.25 m3 min-1</span>.</p><p>Find the rate at which the depth of the water is increasing at the instant when the bowl contains <span class="unit">5 m3</span> of water.</p>',
      unit: 'm min-1',
      answer: 0.026985884884,
      tolerance: '0.5%',
      sigfigs: 3,
      hints: [
        'Decode: this is related rates. You know <span class="chem">dV/dt</span> and want <span class="chem">dh/dt</span>, but the moment is described by a volume, not a depth, so you must first find <i>h</i>.',
        'Solve <span class="chem">(pi/3) h^2 (6 - h) = 5</span> on your GDC for <span class="chem">0 &lt; h &lt; 2</span>.',
        'Expand <span class="chem">V = (pi/3)(6h^2 - h^3)</span>, so <span class="chem">dV/dh = pi(4h - h^2)</span>. Then <span class="chem">dh/dt = (dV/dt) / (dV/dh)</span>.'
      ],
      solution: '<p>Decode: a related-rates question in which the instant is given by the volume. GDC: <span class="chem">(pi/3)h^2(6 - h) = 5 => h = 0.97475…</span> (the only root with <span class="chem">0 &lt; h &lt; 2</span>). Then <span class="chem">dV/dh = pi(4h - h^2) = 9.2641…</span>, so <span class="chem">dh/dt = 0.25 / 9.2641… = 0.0270</span> <span class="unit">m min-1</span> (3 s.f.).</p>'
    },
    {
      id: 't5-3-q025',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.14, 5.15',
      marks: 5,
      stem: '<p>A ladder of length <span class="unit">6.5 m</span> leans against a vertical wall with its foot on horizontal ground. The foot of the ladder slides away from the wall at a constant <span class="unit">0.3 m s-1</span>. Let <span class="chem">theta</span> be the angle between the ladder and the ground.</p><p>Find the rate at which <span class="chem">theta</span> is decreasing, in radians per second, at the instant when the foot of the ladder is <span class="unit">4.1 m</span> from the wall.</p>',
      unit: 'rad s-1',
      answer: 0.059478868929,
      tolerance: '0.5%',
      sigfigs: 3,
      hints: [
        'Decode: link the distance of the foot, <i>x</i>, to the angle: <span class="chem">x = 6.5 cos theta</span>. You are given <span class="chem">dx/dt</span> and want <span class="chem">d theta/dt</span>.',
        'Differentiate with respect to <i>t</i>: <span class="chem">dx/dt = -6.5 sin theta (d theta/dt)</span>.',
        'At the instant, <span class="chem">cos theta = 4.1/6.5</span>, so <span class="chem">6.5 sin theta = sqrt(6.5^2 - 4.1^2)</span>, the height of the top of the ladder.'
      ],
      solution: '<p>Decode: the angle and the foot distance are linked by <span class="chem">x = 6.5 cos theta</span>. Differentiating, <span class="chem">dx/dt = -6.5 sin theta (d theta/dt)</span>. When <span class="chem">x = 4.1</span>, <span class="chem">6.5 sin theta = sqrt(6.5^2 - 4.1^2) = 5.0438…</span>. So <span class="chem">d theta/dt = -0.3 / 5.0438… = -0.0595</span>: the angle is decreasing at <span class="chem">0.0595</span> <span class="unit">rad s-1</span> (3 s.f.).</p>'
    },
    {
      id: 't5-3-q026',
      topic: 't5-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.14',
      marks: 9,
      stem: '<p>A water tank is an inverted right circular cone, vertex at the bottom, of height <span class="unit">5 m</span>. When the water is <i>h</i> metres deep, the radius of the water surface is <span class="chem">0.6h</span> metres. Water is pumped in at <span class="unit">0.5 m3 min-1</span>, and at the same time it leaks out of a hole at the vertex at a rate of <span class="chem">0.2 sqrt(h)</span> <span class="unit">m3 min-1</span>.</p><p>(a) Show that the volume of water in the tank is <span class="chem">V = 0.12 pi h^3</span>. <strong>[2 marks]</strong></p><p>(b) Find the rate at which the depth is changing when <span class="chem">h = 1.8</span>. <strong>[4 marks]</strong></p><p>(c) The tank starts empty. Determine whether the tank will eventually overflow. Justify your answer. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">V = (1/3) pi r^2 h = (1/3) pi (0.6h)^2 h = 0.12 pi h^3</span>.</p><p>(b) <span class="chem">dV/dt = 0.5 - 0.2 sqrt(h)</span> and <span class="chem">dV/dh = 0.36 pi h^2</span>, so <span class="chem">dh/dt = (0.5 - 0.2 sqrt(h)) / (0.36 pi h^2)</span>. At <span class="chem">h = 1.8</span>: <span class="chem">dh/dt = 0.23167… / 3.66435… = 0.0632</span> <span class="unit">m min-1</span>.</p><p>(c) The depth keeps rising while <span class="chem">0.5 - 0.2 sqrt(h) &gt; 0</span>, that is while <span class="chem">h &lt; 6.25</span>. The tank is only <span class="unit">5 m</span> deep, and at <span class="chem">h = 5</span> the net inflow is <span class="chem">0.5 - 0.2 sqrt(5) = 0.0528 &gt; 0</span>, so the level is still rising when it reaches the top: the tank overflows.</p>',
      markscheme: [
        'M1: uses <span class="chem">V = (1/3) pi r^2 h</span> with <span class="chem">r = 0.6h</span>.',
        'A1: <span class="chem">(1/3) pi (0.36h^2) h</span> seen, leading to <span class="chem">V = 0.12 pi h^3</span> AG (no mark for the given line).',
        'M1: net rate <span class="chem">dV/dt = 0.5 - 0.2 sqrt(h)</span> (inflow minus leak).',
        'M1: <span class="chem">dV/dh = 0.36 pi h^2</span> and uses <span class="chem">dh/dt = (dV/dt)/(dV/dh)</span>.',
        'A1: correct substitution of <span class="chem">h = 1.8</span>: <span class="chem">0.23167… / 3.66435…</span>.',
        'A1: <span class="chem">dh/dt = 0.0632</span> <span class="unit">m min-1</span>.',
        'M1: considers the sign of <span class="chem">0.5 - 0.2 sqrt(h)</span> (or solves <span class="chem">dh/dt = 0</span>).',
        'A1: the level stops rising only at <span class="chem">h = 6.25</span>.',
        'R1: <span class="chem">6.25 &gt; 5</span> (net inflow still positive at <span class="chem">h = 5</span>), so the tank overflows.'
      ],
      hints: [
        'Decode: two rates act at once, so the net rate is <span class="chem">dV/dt = (in) - (out)</span>. Part (c) hides a question about when <span class="chem">dh/dt</span> becomes zero.',
        'For (a), use similar triangles: <span class="chem">r = 0.6h</span> in the cone formula.',
        'For (b), divide the net <span class="chem">dV/dt</span> by <span class="chem">dV/dh = 0.36 pi h^2</span>.',
        'For (c), the level rises while <span class="chem">0.5 - 0.2 sqrt(h) &gt; 0</span>. Compare the depth where this becomes zero with the tank height.'
      ],
      solution: '<p>Decode: the net rate of change of volume is inflow minus leak, and "will it overflow?" means "does the depth stop rising before <span class="chem">h = 5</span>?" (a) <span class="chem">V = (1/3) pi (0.6h)^2 h = 0.12 pi h^3</span>. (b) <span class="chem">dh/dt = (0.5 - 0.2 sqrt(1.8)) / (0.36 pi (1.8)^2) = 0.0632</span> <span class="unit">m min-1</span>. (c) <span class="chem">dh/dt = 0 <=> sqrt(h) = 2.5 <=> h = 6.25</span>. Since <span class="chem">6.25 &gt; 5</span>, the depth is still increasing when it reaches <span class="unit">5 m</span>, so the tank overflows.</p>'
    },
    {
      id: 't5-3-q027',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.14',
      marks: 5,
      stem: '<p>The curve <i>C</i> has equation <span class="chem">x^3 + y^3 = 6xy</span>. The point <i>P</i> on <i>C</i> has <i>x</i>-coordinate <span class="chem">1</span> and <i>y</i>-coordinate greater than <span class="chem">1</span>.</p><p>Find the gradient of <i>C</i> at <i>P</i>.</p>',
      answer: 1.0409342589,
      tolerance: '0.5%',
      sigfigs: 3,
      hints: [
        'First find <i>P</i>: put <span class="chem">x = 1</span> in the equation and solve <span class="chem">y^3 - 6y + 1 = 0</span> on your GDC. Take the root greater than 1.',
        'Differentiate implicitly: <span class="chem">3x^2 + 3y^2 (dy/dx) = 6y + 6x (dy/dx)</span>.',
        'Rearrange to <span class="chem">dy/dx = (6y - 3x^2)/(3y^2 - 6x)</span> and substitute the coordinates of <i>P</i>.'
      ],
      solution: '<p>With <span class="chem">x = 1</span>: <span class="chem">y^3 - 6y + 1 = 0</span>. Its roots are <span class="chem">-2.529…, 0.167…, 2.3615…</span>, so <span class="chem">P = (1, 2.3615…)</span>. Implicitly, <span class="chem">3x^2 + 3y^2 y\' = 6y + 6xy\'</span>, so <span class="chem">dy/dx = (6y - 3x^2)/(3y^2 - 6x) = 11.1688… / 10.7296… = 1.04</span> (3 s.f.).</p>'
    },
    {
      id: 't5-3-q028',
      topic: 't5-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.14',
      marks: 10,
      stem: '<p>A curve has equation <span class="chem">x^3 + xy + y^2 = 7</span>.</p><p>(a) Show that <span class="chem">dy/dx = -(3x^2 + y)/(x + 2y)</span>. <strong>[3 marks]</strong></p><p>(b) Find the coordinates of the points on the curve where the tangent is parallel to the line <span class="chem">y = x</span>. <strong>[4 marks]</strong></p><p>(c) Find the coordinates of the point on the curve where the tangent is vertical. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">3x^2 + (y + x dy/dx) + 2y dy/dx = 0 => (x + 2y) dy/dx = -(3x^2 + y) => dy/dx = -(3x^2 + y)/(x + 2y)</span>.</p><p>(b) <span class="chem">dy/dx = 1 => -(3x^2 + y) = x + 2y => y = -(3x^2 + x)/3</span>. Substituting into the curve and solving on a GDC: <span class="chem">9x^4 + 6x^3 - 2x^2 - 63 = 0</span>, so <span class="chem">x = 1.5107…</span> or <span class="chem">x = -1.8650…</span>. The points are <span class="chem">(1.51, -2.79)</span> and <span class="chem">(-1.86, -2.86)</span>.</p><p>(c) Vertical tangent where the denominator is zero: <span class="chem">x + 2y = 0 => y = -x/2</span>. Then <span class="chem">x^3 - x^2/2 + x^2/4 = 7 => x^3 - x^2/4 - 7 = 0 => x = 2</span>, so the point is <span class="chem">(2, -1)</span> (the numerator <span class="chem">3x^2 + y = 11 != 0</span> there).</p>',
      markscheme: [
        'M1: implicit differentiation, with the product rule on <span class="chem">xy</span>.',
        'A1: <span class="chem">3x^2 + y + x dy/dx + 2y dy/dx = 0</span>.',
        'A1: collects terms, <span class="chem">(x + 2y) dy/dx = -(3x^2 + y)</span>, leading to the given result AG (no mark for the given line).',
        'M1: sets <span class="chem">-(3x^2 + y)/(x + 2y) = 1</span>.',
        'A1: <span class="chem">y = -(3x^2 + x)/3</span> (or equivalent).',
        'M1: substitutes into the equation of the curve and solves with a GDC.',
        'A1: both points <span class="chem">(1.51, -2.79)</span> and <span class="chem">(-1.86, -2.86)</span>.',
        'M1: sets the denominator <span class="chem">x + 2y = 0</span>.',
        'M1: substitutes <span class="chem">y = -x/2</span> to get <span class="chem">x^3 - x^2/4 - 7 = 0</span>.',
        'A1: <span class="chem">(2, -1)</span>.'
      ],
      hints: [
        'Decode: "tangent parallel to <span class="chem">y = x</span>" means <span class="chem">dy/dx = 1</span>; "tangent vertical" means the denominator of <span class="chem">dy/dx</span> is zero. Each condition gives a line through the points, which you then intersect with the curve.',
        'In (b), clear the fraction: <span class="chem">-(3x^2 + y) = x + 2y</span>, then make <i>y</i> the subject.',
        'Substitute <span class="chem">y = -(3x^2 + x)/3</span> into <span class="chem">x^3 + xy + y^2 = 7</span> and solve with a GDC (graph or polynomial solver).',
        'In (c), substitute <span class="chem">y = -x/2</span> into the curve and check the numerator is not also zero.'
      ],
      solution: '<p>Decode: both (b) and (c) are conditions on <span class="chem">dy/dx</span> that become a second equation; solve it simultaneously with the curve. (b) gives <span class="chem">(1.51, -2.79)</span> and <span class="chem">(-1.86, -2.86)</span>; (c) gives <span class="chem">(2, -1)</span>.</p>'
    },
    {
      id: 't5-3-q029',
      topic: 't5-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.14',
      marks: 6,
      stem: '<p>The closed curve <span class="chem">x^4 + xy + y^2 = 20</span> is the outline of a garden bed drawn on a plan, with the <i>y</i>-axis pointing north. Find how far north of the <i>x</i>-axis the most northerly point of the bed lies.</p>',
      answer: 4.8910798890,
      tolerance: '0.5%',
      sigfigs: 3,
      hints: [
        'Decode: "the most northerly point" is the greatest <i>y</i>-coordinate on the curve, which is where the tangent is horizontal: <span class="chem">dy/dx = 0</span>.',
        'Differentiate implicitly: <span class="chem">4x^3 + y + x(dy/dx) + 2y(dy/dx) = 0</span>. Setting <span class="chem">dy/dx = 0</span> gives <span class="chem">y = -4x^3</span>.',
        'Substitute <span class="chem">y = -4x^3</span> into the curve: <span class="chem">16x^6 - 3x^4 - 20 = 0</span>. Solve on your GDC and choose the root that gives the larger <i>y</i>.'
      ],
      solution: '<p>Decode: the most northerly point is the maximum of <i>y</i> on the curve, where <span class="chem">dy/dx = 0</span>. Implicitly, <span class="chem">(x + 2y) dy/dx = -(4x^3 + y)</span>, so <span class="chem">dy/dx = 0 => y = -4x^3</span>. Then <span class="chem">x^4 - 4x^4 + 16x^6 = 20 => 16x^6 - 3x^4 - 20 = 0 => x = +-1.06934…</span>. <span class="chem">x = -1.06934…</span> gives <span class="chem">y = 4.89</span> (the other gives <span class="chem">y = -4.89</span>, the most southerly point). The bed reaches <span class="chem">4.89</span> units north of the <i>x</i>-axis.</p>'
    },
    {
      id: 't5-3-q030',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.17',
      marks: 5,
      stem: '<p>The region <i>R</i> is bounded by the curves <span class="chem">y = 2 cos x</span> and <span class="chem">y = x^2</span> and the <i>y</i>-axis, for <span class="chem">x &gt;= 0</span>. The region <i>R</i> is rotated through <span class="chem">2pi</span> radians about the <i>x</i>-axis. Find the volume of the solid formed.</p>',
      answer: 8.5172461754,
      tolerance: '0.5%',
      sigfigs: 3,
      hints: [
        'Find where the curves meet for <span class="chem">x &gt; 0</span>: solve <span class="chem">2 cos x = x^2</span> on your GDC.',
        'The solid has a hole: use outer radius <span class="chem">2 cos x</span> and inner radius <span class="chem">x^2</span>, so <span class="chem">V = pi int_0^a ((2cos x)^2 - (x^2)^2) dx</span>.',
        'Do not square the difference <span class="chem">(2cos x - x^2)</span>.'
      ],
      solution: '<p>GDC: <span class="chem">2 cos x = x^2 => a = 1.02169…</span>. The washer formula gives <span class="chem">V = pi int_0^a (4cos^2 x - x^4) dx = 8.52</span> (3 s.f.).</p>'
    },
    {
      id: 't5-3-q031',
      topic: 't5-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.17',
      marks: 8,
      stem: '<p>The inside of a bowl is formed by rotating the curve <span class="chem">y = x^4/50 + x^2/10</span>, for <span class="chem">x &gt;= 0</span>, through <span class="chem">2pi</span> radians about the <i>y</i>-axis. Lengths are in centimetres, and the bowl is <span class="unit">5 cm</span> deep.</p><p>(a) Show that <span class="chem">x^2 = 25(sqrt(0.01 + 0.08y) - 0.1)</span>. <strong>[3 marks]</strong></p><p>(b) Find the capacity of the bowl. <strong>[2 marks]</strong></p><p>(c) Find the depth of the water when the bowl is half full. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) Let <span class="chem">u = x^2</span>: <span class="chem">u^2/50 + u/10 - y = 0</span>, so <span class="chem">u = (-0.1 + sqrt(0.01 + 0.08y)) / 0.04 = 25(sqrt(0.01 + 0.08y) - 0.1)</span>, taking the positive root because <span class="chem">x^2 &gt;= 0</span>.</p><p>(b) <span class="chem">V = pi int_0^5 x^2 dy = 132</span> <span class="unit">cm3</span> (131.899…).</p><p>(c) Solve <span class="chem">pi int_0^h x^2 dy = 65.95…</span> with a GDC: <span class="chem">h = 3.26</span> <span class="unit">cm</span>.</p>',
      markscheme: [
        'M1: treats the equation as a quadratic in <span class="chem">x^2</span>.',
        'A1: applies the quadratic formula correctly: <span class="chem">x^2 = (-0.1 +- sqrt(0.01 + 0.08y))/0.04</span>.',
        'R1: rejects the negative root because <span class="chem">x^2 &gt;= 0</span>, leading to the given result AG (no mark for the given line).',
        'M1: <span class="chem">V = pi int_0^5 x^2 dy</span> with the expression from (a).',
        'A1: <span class="chem">V = 132</span> <span class="unit">cm3</span>.',
        'M1: sets <span class="chem">pi int_0^h x^2 dy</span> equal to half of the capacity.',
        'M1: solves the equation with a GDC (graph or solver).',
        'A1: <span class="chem">h = 3.26</span> <span class="unit">cm</span>.'
      ],
      hints: [
        'Decode: rotation about the <i>y</i>-axis means you integrate <span class="chem">pi x^2</span> with respect to <i>y</i>, so you need <span class="chem">x^2</span> in terms of <i>y</i>. "Half full" is an equation with the upper limit <i>h</i> as the unknown.',
        'In (a), write <span class="chem">u = x^2</span>: the equation becomes the quadratic <span class="chem">0.02u^2 + 0.1u - y = 0</span>.',
        'In (b), integrate <span class="chem">pi x^2</span> from <span class="chem">y = 0</span> to <span class="chem">y = 5</span> on your GDC.',
        'In (c), solve <span class="chem">pi int_0^h 25(sqrt(0.01 + 0.08y) - 0.1) dy = 65.95</span> for <i>h</i>. The depth is more than half of 5, because the bowl is wider at the top.'
      ],
      solution: '<p>Decode: a volume about the <i>y</i>-axis needs <span class="chem">x^2 = g(y)</span>, and "half full" makes the upper limit the unknown. (a) Quadratic in <span class="chem">x^2</span>, positive root. (b) <span class="chem">V = 131.899… ≈ 132</span> <span class="unit">cm3</span>. (c) <span class="chem">h = 3.26</span> <span class="unit">cm</span>.</p>'
    },
    {
      id: 't5-3-q032',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.16, 5.17',
      marks: 6,
      stem: '<p>The region bounded by the curve <span class="chem">y = sqrt(x) e^{-x/4}</span>, the <i>x</i>-axis and the line <span class="chem">x = k</span>, where <span class="chem">k &gt; 0</span>, is rotated through <span class="chem">2pi</span> radians about the <i>x</i>-axis. The volume of the solid formed is <span class="chem">5</span> cubic units. Find the value of <i>k</i>.</p>',
      answer: 2.7406943311,
      tolerance: '0.5%',
      sigfigs: 3,
      hints: [
        'Write the volume as <span class="chem">V = pi int_0^k x e^{-x/2} dx</span> (square <i>y</i> first).',
        'You can integrate by parts (<span class="chem">u = x</span>, <span class="chem">dv/dx = e^{-x/2}</span>) to get <span class="chem">V = pi(4 - (2k + 4)e^{-k/2})</span>, or work with the integral directly on your GDC.',
        'Solve <span class="chem">V = 5</span> on your GDC.'
      ],
      solution: '<p><span class="chem">V = pi int_0^k x e^{-x/2} dx</span>. By parts, <span class="chem">int x e^{-x/2} dx = -2x e^{-x/2} - 4e^{-x/2} + C</span>, so <span class="chem">V = pi(4 - (2k + 4)e^{-k/2})</span>. Solving <span class="chem">pi(4 - (2k + 4)e^{-k/2}) = 5</span> on a GDC gives <span class="chem">k = 2.74</span> (3 s.f.).</p>'
    },
    {
      id: 't5-3-q033',
      topic: 't5-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.15',
      marks: 7,
      stem: '<p>A painting hangs on a gallery wall. Its bottom edge is <span class="unit">1.6 m</span> above a visitor\'s eye level and its top edge is <span class="unit">5.2 m</span> above eye level. The visitor stands <i>x</i> metres from the wall. The angle <span class="chem">theta</span> subtended at the visitor\'s eye by the painting is largest for one value of <i>x</i>.</p><p>Find the largest possible value of <span class="chem">theta</span>, in degrees.</p>',
      unit: '°',
      answer: 31.965718751,
      tolerance: '0.5%',
      sigfigs: 3,
      hints: [
        'Decode: <span class="chem">theta</span> is the difference of two angles of elevation, so <span class="chem">theta = arctan(5.2/x) - arctan(1.6/x)</span>. This is an optimisation question on <span class="chem">theta(x)</span>.',
        'Differentiate using <span class="chem">d/dx arctan(a/x) = -a/(x^2 + a^2)</span>, or graph <span class="chem">theta(x)</span> on your GDC and find its maximum.',
        'Setting the derivative equal to zero gives <span class="chem">x^2 = 5.2 × 1.6</span>. Remember to give <span class="chem">theta</span> in degrees.'
      ],
      solution: '<p>Decode: the angle subtended is (angle to the top) − (angle to the bottom), and "largest" means maximise. <span class="chem">theta(x) = arctan(5.2/x) - arctan(1.6/x)</span>, so <span class="chem">theta\'(x) = -5.2/(x^2 + 27.04) + 1.6/(x^2 + 2.56)</span>. Setting this to zero: <span class="chem">5.2(x^2 + 2.56) = 1.6(x^2 + 27.04) => 3.6x^2 = 29.952 => x = sqrt(8.32) = 2.884…</span>. Then <span class="chem">theta = 0.55791…</span> rad <span class="chem">= 32.0°</span> (3 s.f.).</p>'
    },
    {
      id: 't5-3-q034',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.15',
      marks: 5,
      stem: '<p>The number of birds in a colony <i>t</i> years after it was first counted is modelled by <span class="chem">N(t) = 200 × 1.07^t</span>. Find the value of <i>t</i> when the population first grows at a rate of <span class="chem">40</span> birds per year.</p>',
      unit: 'years',
      answer: 16.019270309,
      tolerance: '0.5%',
      sigfigs: 3,
      hints: [
        'Decode: "grows at a rate of 40 birds per year" is a statement about <span class="chem">dN/dt</span>, not about <i>N</i>.',
        'Use <span class="chem">d/dt (a^t) = a^t ln a</span>: <span class="chem">dN/dt = 200 ln(1.07) × 1.07^t</span>.',
        'Solve <span class="chem">200 ln(1.07) × 1.07^t = 40</span> with logarithms or your GDC.'
      ],
      solution: '<p>Decode: the rate of growth is <span class="chem">dN/dt</span>. <span class="chem">dN/dt = 200 × 1.07^t ln 1.07 = 13.5317… × 1.07^t</span>. Setting this equal to 40: <span class="chem">1.07^t = 2.9560… => t = ln(2.9560…)/ln 1.07 = 16.0</span> years (3 s.f.). Since <span class="chem">dN/dt</span> is increasing, this is the first time.</p>'
    },
    {
      id: 't5-3-q035',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.14, 5.15',
      marks: 6,
      stem: '<p>A lighthouse <i>L</i> stands <span class="unit">800 m</span> from a straight shoreline. <i>O</i> is the point of the shore closest to <i>L</i>. The light rotates at a constant <span class="chem">0.5</span> revolutions per minute, and its beam meets the shore at a point <i>P</i>. Let <span class="chem">theta</span> be the angle <i>OLP</i>.</p><p>Find the speed, in metres per second, at which <i>P</i> moves along the shore at the instant when <span class="chem">theta = 50°</span>.</p>',
      unit: 'm s-1',
      answer: 101.38031022,
      tolerance: '0.5%',
      sigfigs: 3,
      hints: [
        'Decode: let <span class="chem">OP = x</span>. Right-angled trigonometry gives <span class="chem">x = 800 tan theta</span>. You know <span class="chem">d theta/dt</span> from the rotation and want <span class="chem">dx/dt</span>.',
        '<span class="chem">0.5</span> revolutions per minute is <span class="chem">pi</span> radians per minute, which is <span class="chem">pi/60</span> radians per second.',
        '<span class="chem">dx/dt = 800 sec^2 theta (d theta/dt)</span>. Convert <span class="chem">50°</span> to radians (or use degree mode only for <span class="chem">sec^2 50°</span>, not for the rate).'
      ],
      solution: '<p>Decode: <span class="chem">x = 800 tan theta</span> links the position of <i>P</i> to the angle. <span class="chem">d theta/dt = 2pi × 0.5 / 60 = pi/60</span> <span class="unit">rad s-1</span>. Then <span class="chem">dx/dt = 800 sec^2 theta (d theta/dt) = 800 × 2.42027… × pi/60 = 101</span> <span class="unit">m s-1</span> (3 s.f.).</p>'
    },
    {
      id: 't5-3-q036',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.16',
      marks: 5,
      stem: '<p>Use integration by parts to find <span class="chem">int ln x dx</span>. Hence find the value of <i>k</i>, where <span class="chem">k &gt; 1</span>, such that <span class="chem">int_1^k ln x dx = 3</span>.</p>',
      answer: 4.3191365663,
      tolerance: '0.5%',
      sigfigs: 3,
      hints: [
        'Write <span class="chem">ln x = 1 × ln x</span> and take <span class="chem">u = ln x</span>, <span class="chem">dv/dx = 1</span>.',
        'You should get <span class="chem">int ln x dx = x ln x - x + C</span>, so <span class="chem">int_1^k ln x dx = k ln k - k + 1</span>.',
        'Solve <span class="chem">k ln k - k + 1 = 3</span> on your GDC.'
      ],
      solution: '<p>With <span class="chem">u = ln x</span>, <span class="chem">v = x</span>: <span class="chem">int ln x dx = x ln x - int 1 dx = x ln x - x + C</span>. So <span class="chem">int_1^k ln x dx = k ln k - k + 1 = 3</span>, and a GDC gives <span class="chem">k = 4.32</span> (3 s.f.).</p>'
    },
    {
      id: 't5-3-q037',
      topic: 't5-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.16',
      marks: 7,
      stem: '<p>A plot of land is modelled by the region between the curve <span class="chem">y = x e^{-x}</span>, the <i>x</i>-axis and the line <span class="chem">x = 4</span>. A straight fence along the line <span class="chem">x = a</span> divides the plot into two parts of equal area. Find the value of <i>a</i>.</p>',
      answer: 1.5361827384,
      tolerance: '0.5%',
      sigfigs: 3,
      hints: [
        'Decode: "two parts of equal area" means <span class="chem">int_0^a x e^{-x} dx = (1/2) int_0^4 x e^{-x} dx</span>. The unknown is a limit of integration.',
        'Integrate by parts: <span class="chem">int x e^{-x} dx = -x e^{-x} - e^{-x} + C</span>, so <span class="chem">int_0^a x e^{-x} dx = 1 - (a + 1)e^{-a}</span>.',
        'The whole area is <span class="chem">1 - 5e^{-4} = 0.90842…</span>. Solve <span class="chem">1 - (a + 1)e^{-a} = 0.45421…</span> on your GDC.'
      ],
      solution: '<p>Decode: equal areas turn into an equation whose unknown is the upper limit <i>a</i>. By parts, <span class="chem">int_0^a x e^{-x} dx = 1 - (a + 1)e^{-a}</span>. The total area is <span class="chem">1 - 5e^{-4} = 0.908421…</span>, so solve <span class="chem">1 - (a + 1)e^{-a} = 0.454210…</span>: <span class="chem">a = 1.54</span> (3 s.f.).</p>'
    },
    {
      id: 't5-3-q038',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.17',
      marks: 5,
      stem: '<p>The curve <span class="chem">x = 4 - y^2 - e^{0.5y}</span> and the <i>y</i>-axis enclose a region. Find the area of this region.</p>',
      answer: 6.7450684515,
      tolerance: '0.5%',
      sigfigs: 3,
      hints: [
        'The curve meets the <i>y</i>-axis where <span class="chem">x = 0</span>: solve <span class="chem">4 - y^2 - e^{0.5y} = 0</span> on your GDC (two roots).',
        'Between these roots the curve is to the right of the <i>y</i>-axis, so the area is <span class="chem">int_{y_1}^{y_2} (4 - y^2 - e^{0.5y}) dy</span>.'
      ],
      solution: '<p>GDC: <span class="chem">4 - y^2 - e^{0.5y} = 0</span> at <span class="chem">y_1 = -1.90090…</span> and <span class="chem">y_2 = 1.40688…</span>. Area <span class="chem">= int_{y_1}^{y_2} (4 - y^2 - e^{0.5y}) dy = 6.75</span> (3 s.f.).</p>'
    },
    {
      id: 't5-3-q039',
      topic: 't5-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.14',
      marks: 7,
      stem: '<p>A rectangle has one vertex at the origin, two sides along the positive <i>x</i>- and <i>y</i>-axes, and the opposite vertex <span class="chem">(x, y)</span> on the curve <span class="chem">x^2 + 2y^3 + y = 30</span>, with <span class="chem">x, y &gt; 0</span>. Find the maximum possible area of the rectangle.</p>',
      answer: 7.3281482239,
      tolerance: '0.5%',
      sigfigs: 3,
      hints: [
        'Decode: this is optimisation with an implicit constraint. Maximise <span class="chem">A = xy</span>, treating <i>y</i> as a function of <i>x</i> defined by the curve.',
        'Differentiating the curve: <span class="chem">2x + (6y^2 + 1)(dy/dx) = 0 => dy/dx = -2x/(6y^2 + 1)</span>. Then <span class="chem">dA/dx = y + x (dy/dx)</span>.',
        '<span class="chem">dA/dx = 0</span> gives <span class="chem">2x^2 = y(6y^2 + 1)</span>. Substitute <span class="chem">x^2 = 3y^3 + y/2</span> into the curve: <span class="chem">5y^3 + 1.5y = 30</span>, and solve on your GDC.'
      ],
      solution: '<p>Decode: maximise <span class="chem">A = xy</span> subject to the curve. <span class="chem">dA/dx = y - 2x^2/(6y^2 + 1) = 0 => x^2 = 3y^3 + y/2</span>. Then <span class="chem">3y^3 + y/2 + 2y^3 + y = 30 => 5y^3 + 1.5y - 30 = 0 => y = 1.76211…</span>, <span class="chem">x = sqrt(3y^3 + y/2) = 4.15874…</span>. The area is <span class="chem">A = xy = 7.31</span> (3 s.f.); it is a maximum because <span class="chem">A -> 0</span> at both ends of the arc.</p>'
    },
    {
      id: 't5-3-q040',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.14',
      marks: 5,
      stem: '<p>At 12:00, car <i>A</i> is at a junction <i>O</i> and car <i>B</i> is <span class="unit">30 km</span> due east of <i>O</i>. Car <i>A</i> drives due north at <span class="unit">60 km h-1</span> and car <i>B</i> drives due west, towards <i>O</i>, at <span class="unit">80 km h-1</span>. Find the rate at which the distance between the cars is changing at 12:15.</p>',
      unit: 'km h-1',
      answer: 5.5470019623,
      tolerance: '0.5%',
      sigfigs: 3,
      hints: [
        'Decode: write both positions in terms of the time <i>t</i> hours after 12:00. 12:15 is <span class="chem">t = 0.25</span>, not 15.',
        'After <i>t</i> hours, <i>A</i> is <span class="chem">60t</span> north of <i>O</i> and <i>B</i> is <span class="chem">30 - 80t</span> east of <i>O</i>, so <span class="chem">D^2 = (60t)^2 + (30 - 80t)^2</span>.',
        'Differentiate: <span class="chem">2D (dD/dt) = 7200t - 160(30 - 80t)</span>, then substitute <span class="chem">t = 0.25</span>.'
      ],
      solution: '<p>Decode: measure time in hours from 12:00. <span class="chem">D^2 = 3600t^2 + (30 - 80t)^2</span>. At <span class="chem">t = 0.25</span>: <span class="chem">D = sqrt(225 + 100) = 18.0277…</span> and <span class="chem">2D (dD/dt) = 7200(0.25) - 160(10) = 200</span>, so <span class="chem">dD/dt = 100/18.0277… = 5.55</span> <span class="unit">km h-1</span> (3 s.f.). The distance is increasing.</p>'
    },
    {
      id: 't5-3-q041',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.14',
      marks: 5,
      stem: '<p>A point moves along the curve <span class="chem">y = x^2 e^{-x}</span> so that its <i>x</i>-coordinate increases at a constant <span class="chem">0.3</span> units per second. Find the rate at which the distance of the point from the origin is changing when <span class="chem">x = 2.5</span>.</p>',
      unit: 'units s-1',
      answer: 0.28768805669,
      tolerance: '0.5%',
      sigfigs: 3,
      hints: [
        'Write the distance as a function of <i>x</i> only: <span class="chem">D(x) = sqrt(x^2 + x^4 e^{-2x})</span>.',
        'By the chain rule, <span class="chem">dD/dt = (dD/dx)(dx/dt) = 0.3 D\'(x)</span>. Find <span class="chem">D\'(2.5)</span> with your GDC (or differentiate by hand).'
      ],
      solution: '<p><span class="chem">D(x) = sqrt(x^2 + x^4 e^{-2x})</span>. GDC: <span class="chem">D\'(2.5) = 0.958960…</span>. So <span class="chem">dD/dt = 0.3 × 0.958960… = 0.288</span> units per second (3 s.f.).</p>'
    },
    {
      id: 't5-3-q042',
      topic: 't5-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.14, 5.17',
      marks: 11,
      stem: '<p>The inside of a bowl is formed by rotating the curve <span class="chem">y = x^2/4</span>, <span class="chem">0 &lt;= y &lt;= 8</span>, through <span class="chem">2pi</span> radians about the <i>y</i>-axis (lengths in cm). The bowl is empty at <span class="chem">t = 0</span>. Water then flows in at a rate of <span class="chem">30 e^{-0.1t}</span> <span class="unit">cm3 s-1</span>, where <i>t</i> is in seconds.</p><p>(a) Show that, when the water is <i>h</i> cm deep, its volume is <span class="chem">V = 2 pi h^2</span>. <strong>[2 marks]</strong></p><p>(b) Find the depth of the water when <span class="chem">t = 5</span>. <strong>[3 marks]</strong></p><p>(c) Find the rate at which the depth is increasing when <span class="chem">t = 5</span>. <strong>[3 marks]</strong></p><p>(d) Determine whether the bowl will ever be full. Justify your answer. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">x^2 = 4y</span>, so <span class="chem">V = pi int_0^h 4y dy = 2 pi h^2</span>.</p><p>(b) <span class="chem">V(5) = int_0^5 30e^{-0.1t} dt = 300(1 - e^{-0.5}) = 118.04…</span>, so <span class="chem">h = sqrt(118.04…/(2pi)) = 4.33</span> cm.</p><p>(c) <span class="chem">dV/dt = 30e^{-0.5} = 18.196…</span> and <span class="chem">dV/dh = 4 pi h = 54.466…</span>, so <span class="chem">dh/dt = 0.334</span> <span class="unit">cm s-1</span>.</p><p>(d) The total volume that ever flows in is <span class="chem">int_0^T 30e^{-0.1t} dt = 300(1 - e^{-0.1T}) &lt; 300</span>. A full bowl holds <span class="chem">2 pi (8)^2 = 402</span> <span class="unit">cm3</span>, so the bowl is never full (the depth stays below <span class="chem">sqrt(300/(2pi)) = 6.91</span> cm).</p>',
      markscheme: [
        'M1: <span class="chem">V = pi int_0^h x^2 dy</span> with <span class="chem">x^2 = 4y</span>.',
        'A1: <span class="chem">pi [2y^2]_0^h</span>, leading to <span class="chem">V = 2 pi h^2</span> AG (no mark for the given line).',
        'M1: volume at <span class="chem">t = 5</span> is <span class="chem">int_0^5 30 e^{-0.1t} dt</span>.',
        'A1: <span class="chem">118.04…</span> <span class="unit">cm3</span>.',
        'A1: <span class="chem">h = 4.33</span> cm.',
        'M1: <span class="chem">dh/dt = (dV/dt)/(dV/dh)</span> with <span class="chem">dV/dh = 4 pi h</span>.',
        'A1: <span class="chem">dV/dt = 30e^{-0.5} = 18.196…</span> at <span class="chem">t = 5</span>.',
        'A1: <span class="chem">dh/dt = 0.334</span> <span class="unit">cm s-1</span>.',
        'M1: considers the total inflow as <span class="chem">t</span> increases: <span class="chem">300(1 - e^{-0.1t}) &lt; 300</span>.',
        'A1: capacity <span class="chem">2 pi × 64 = 402</span> <span class="unit">cm3</span>.',
        'R1: <span class="chem">300 &lt; 402</span>, so the bowl is never full.'
      ],
      hints: [
        'Decode: the inflow rate is a function of <i>t</i>, so the volume in the bowl at time <i>t</i> is the integral of the rate. Depth then comes from <span class="chem">V = 2 pi h^2</span>, and part (d) asks whether the total inflow can ever reach the capacity.',
        'For (a), the rotation is about the <i>y</i>-axis: <span class="chem">V = pi int_0^h x^2 dy</span> with <span class="chem">x^2 = 4y</span>.',
        'For (b), <span class="chem">V(5) = int_0^5 30 e^{-0.1t} dt</span>, then solve <span class="chem">2 pi h^2 = V(5)</span>.',
        'For (c), <span class="chem">dV/dt</span> at <span class="chem">t = 5</span> is just the inflow rate then; divide by <span class="chem">dV/dh = 4 pi h</span>. For (d), the total inflow <span class="chem">300(1 - e^{-0.1t})</span> never reaches 300.'
      ],
      solution: '<p>Decode: integrate the inflow rate to get volume, convert volume to depth with the volume of revolution, and compare the limiting inflow with the capacity. (b) <span class="chem">h = 4.33</span> cm. (c) <span class="chem">dh/dt = 0.334</span> <span class="unit">cm s-1</span>. (d) At most <span class="unit">300 cm3</span> ever flows in, less than the <span class="unit">402 cm3</span> capacity, so the bowl is never full.</p>'
    },
    {
      id: 't5-3-q043',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.16',
      marks: 7,
      stem: '<p>A particle moves in a straight line, starting from the origin at <span class="chem">t = 0</span>. Its velocity after <i>t</i> seconds is <span class="chem">v(t) = 2t e^{-0.4t}</span> <span class="unit">m s-1</span>.</p><p>(a) Use integration by parts to show that the displacement of the particle after <i>t</i> seconds is <span class="chem">s(t) = 12.5 - (5t + 12.5)e^{-0.4t}</span>. <strong>[4 marks]</strong></p><p>(b) Find the time at which the particle is <span class="unit">8 m</span> from the origin. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) With <span class="chem">u = 2t</span>, <span class="chem">dv/dt = e^{-0.4t}</span>: <span class="chem">int 2t e^{-0.4t} dt = -5t e^{-0.4t} + int 5e^{-0.4t} dt = -5t e^{-0.4t} - 12.5e^{-0.4t} + C</span>. Since <span class="chem">s(0) = 0</span>, <span class="chem">C = 12.5</span>, so <span class="chem">s(t) = 12.5 - (5t + 12.5)e^{-0.4t}</span>.</p><p>(b) <span class="chem">v &gt; 0</span> for <span class="chem">t &gt; 0</span>, so the distance from the origin is <span class="chem">s(t)</span>. Solve <span class="chem">12.5 - (5t + 12.5)e^{-0.4t} = 8</span> on a GDC: <span class="chem">t = 5.44</span> s.</p>',
      markscheme: [
        'M1: integration by parts with <span class="chem">u = 2t</span> and <span class="chem">dv/dt = e^{-0.4t}</span> (so <span class="chem">v = -2.5e^{-0.4t}</span>).',
        'A1: <span class="chem">-5t e^{-0.4t} + int 5e^{-0.4t} dt</span>.',
        'A1: <span class="chem">-5t e^{-0.4t} - 12.5 e^{-0.4t} + C</span>.',
        'M1: uses <span class="chem">s(0) = 0</span> to find <span class="chem">C = 12.5</span>, leading to the given result AG (no mark for the given line).',
        'R1: notes that <span class="chem">v &gt; 0</span>, so the particle never turns and its distance from the origin is <span class="chem">s(t)</span>.',
        'M1: solves <span class="chem">s(t) = 8</span> with a GDC.',
        'A1: <span class="chem">t = 5.44</span> s.'
      ],
      hints: [
        'For (a), take <span class="chem">u = 2t</span> and <span class="chem">dv/dt = e^{-0.4t}</span>, so <span class="chem">v = -2.5 e^{-0.4t}</span>. Find the constant from <span class="chem">s(0) = 0</span>.',
        'For (b), check that the particle never changes direction, then solve <span class="chem">s(t) = 8</span> on your GDC.'
      ],
      solution: '<p>(a) Parts gives <span class="chem">s(t) = -5t e^{-0.4t} - 12.5e^{-0.4t} + C</span> with <span class="chem">C = 12.5</span>. (b) <span class="chem">t = 5.44</span> s (3 s.f.).</p>'
    },
    {
      id: 't5-3-q044',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.17',
      marks: 6,
      stem: '<p>The inside of a vase is formed by rotating the curve <span class="chem">x = 3 + 0.5 sin(0.8y)</span>, <span class="chem">0 &lt;= y &lt;= 12</span>, through <span class="chem">2pi</span> radians about the <i>y</i>-axis, where lengths are in centimetres and the base of the vase is at <span class="chem">y = 0</span>. Water is poured into the empty vase until it holds <span class="unit">250 cm3</span>. Find the depth of the water.</p>',
      unit: 'cm',
      answer: 8.6487029248,
      tolerance: '0.5%',
      sigfigs: 3,
      hints: [
        'Decode: the volume of water of depth <i>h</i> is a volume of revolution about the <i>y</i>-axis with upper limit <i>h</i>: <span class="chem">V(h) = pi int_0^h (3 + 0.5 sin(0.8y))^2 dy</span>.',
        'Solve <span class="chem">V(h) = 250</span> on your GDC, for example by graphing <span class="chem">V(h)</span> as a function of <i>h</i> and intersecting with 250.',
        'Check that your answer is less than 12 (the vase holds about <span class="unit">367 cm3</span> when full).'
      ],
      solution: '<p>Decode: the depth is the upper limit of the volume integral. <span class="chem">V(h) = pi int_0^h (3 + 0.5 sin(0.8y))^2 dy</span>. GDC: <span class="chem">V(h) = 250 => h = 8.65</span> cm (3 s.f.). This is below the full height 12 cm (full volume <span class="chem">367</span> <span class="unit">cm3</span>).</p>'
    },
    {
      id: 't5-3-q045',
      topic: 't5-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 5.14',
      marks: 8,
      stem: '<p>The curve <i>C</i> has equation <span class="chem">e^{xy} + y^2 = 5</span>. The line <span class="chem">x = 0.5</span> meets <i>C</i> at a point <i>P</i> with positive <i>y</i>-coordinate.</p><p>(a) Find the <i>y</i>-coordinate of <i>P</i>. <strong>[2 marks]</strong></p><p>(b) Find the gradient of <i>C</i> at <i>P</i>. <strong>[4 marks]</strong></p><p>(c) The tangent to <i>C</i> at <i>P</i> meets the <i>x</i>-axis at <i>Q</i>. Find the <i>x</i>-coordinate of <i>Q</i>. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">e^{0.5y} + y^2 = 5</span>; GDC gives <span class="chem">y = 1.649</span> (1.64901…).</p><p>(b) <span class="chem">e^{xy}(y + x dy/dx) + 2y dy/dx = 0 => dy/dx = -y e^{xy}/(x e^{xy} + 2y)</span>. At <i>P</i>: <span class="chem">dy/dx = -3.76099…/4.43840… = -0.847</span>.</p><p>(c) Tangent: <span class="chem">y - 1.64901… = -0.847375…(x - 0.5)</span>. Setting <span class="chem">y = 0</span>: <span class="chem">x = 0.5 + 1.64901…/0.847375… = 2.45</span>.</p>',
      markscheme: [
        'M1: substitutes <span class="chem">x = 0.5</span> and solves with a GDC.',
        'A1: <span class="chem">y = 1.65</span> (1.64901…).',
        'M1: implicit differentiation, with the chain and product rules on <span class="chem">e^{xy}</span>.',
        'A1: <span class="chem">e^{xy}(y + x dy/dx) + 2y dy/dx = 0</span>.',
        'M1: substitutes the coordinates of <i>P</i> (using unrounded <i>y</i>).',
        'A1: <span class="chem">dy/dx = -0.847</span>.',
        'M1: equation of the tangent, with <span class="chem">y = 0</span>.',
        'A1: <span class="chem">x = 2.45</span>.'
      ],
      hints: [
        'Decode: <i>P</i> is not given; you must first find its <i>y</i>-coordinate numerically. Then this is an implicit gradient and a tangent line. Keep full GDC accuracy until the end.',
        'Differentiate <span class="chem">e^{xy}</span> with the chain rule: its derivative is <span class="chem">e^{xy}(y + x dy/dx)</span>.',
        'Solve for <span class="chem">dy/dx</span>: <span class="chem">dy/dx = -y e^{xy}/(x e^{xy} + 2y)</span>, and substitute <span class="chem">x = 0.5</span> and the stored <i>y</i>.',
        'For (c), set <span class="chem">y = 0</span> in <span class="chem">y - y_P = m(x - 0.5)</span>.'
      ],
      solution: '<p>Decode: find <i>P</i> numerically, then use implicit differentiation for the gradient and the tangent. (a) <span class="chem">y_P = 1.649</span>. (b) <span class="chem">m = -0.847</span>. (c) <span class="chem">x_Q = 0.5 - y_P/m = 2.45</span>.</p>'
    },

    /* --- Paper 1 (No GDC): exact methods --- */
    {
      id: 't5-3-q046',
      topic: 't5-3',
      level: 'ahl',
      tier: 'foundation',
      type: 'short',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.12',
      marks: 4,
      stem: '<p>Let <span class="chem">f(x) = 2x^2 - 5x</span>. Use differentiation from first principles to show that <span class="chem">f\'(x) = 4x - 5</span>.</p>',
      answer: '<p><span class="chem">f(x + h) - f(x) = 2(x + h)^2 - 5(x + h) - 2x^2 + 5x = 4xh + 2h^2 - 5h</span>. So <span class="chem">f\'(x) = lim_{h->0} (4xh + 2h^2 - 5h)/h = lim_{h->0} (4x + 2h - 5) = 4x - 5</span>.</p>',
      markscheme: [
        'M1: uses <span class="chem">lim_{h->0} (f(x + h) - f(x))/h</span> with <span class="chem">f(x + h) = 2(x + h)^2 - 5(x + h)</span>.',
        'A1: expands correctly: <span class="chem">2x^2 + 4xh + 2h^2 - 5x - 5h</span>.',
        'A1: simplifies the numerator to <span class="chem">4xh + 2h^2 - 5h</span>.',
        'A1: divides by <i>h</i> to get <span class="chem">4x + 2h - 5</span> before letting <span class="chem">h -> 0</span>, leading to <span class="chem">f\'(x) = 4x - 5</span> AG (no mark for the given line).'
      ],
      hints: [
        'Start from <span class="chem">f\'(x) = lim_{h->0} (f(x + h) - f(x))/h</span>, and write <span class="chem">f(x + h)</span> out in full.',
        'Every term without <i>h</i> cancels. Divide by <i>h</i> <strong>before</strong> you let <span class="chem">h -> 0</span>.'
      ],
      solution: '<p><span class="chem">(f(x + h) - f(x))/h = (4xh + 2h^2 - 5h)/h = 4x + 2h - 5 -> 4x - 5</span> as <span class="chem">h -> 0</span>.</p>'
    },
    {
      id: 't5-3-q047',
      topic: 't5-3',
      level: 'ahl',
      tier: 'foundation',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.15',
      marks: 3,
      stem: '<p>Let <span class="chem">f(x) = sec(2x)</span>. Find the exact value of <span class="chem">f\'(pi/8)</span>.</p>',
      answer: 2 * Math.SQRT2,
      answerDisplay: '2√2',
      exact: true,
      answerInput: '2*sqrt(2)',
      hints: [
        'Use <span class="chem">d/dx sec x = sec x tan x</span> with the chain rule: <span class="chem">f\'(x) = 2 sec(2x) tan(2x)</span>.',
        'At <span class="chem">x = pi/8</span>, <span class="chem">2x = pi/4</span>, where <span class="chem">sec(pi/4) = sqrt(2)</span> and <span class="chem">tan(pi/4) = 1</span>.'
      ],
      solution: '<p><span class="chem">f\'(x) = 2 sec(2x) tan(2x)</span>, so <span class="chem">f\'(pi/8) = 2 sec(pi/4) tan(pi/4) = 2 × sqrt(2) × 1 = 2 sqrt(2)</span>.</p>'
    },
    {
      id: 't5-3-q048',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.15',
      marks: 4,
      stem: '<p>Let <span class="chem">f(x) = x arccos x</span>, for <span class="chem">-1 &lt; x &lt; 1</span>. Find the exact value of <span class="chem">f\'(1/2)</span>.</p>',
      answer: Math.PI / 3 - 1 / Math.sqrt(3),
      answerDisplay: 'π/3 − √3/3',
      exact: true,
      answerInput: 'pi/3 - sqrt(3)/3',
      hints: [
        'Use the product rule with <span class="chem">d/dx arccos x = -1/sqrt(1 - x^2)</span>.',
        '<span class="chem">f\'(x) = arccos x - x/sqrt(1 - x^2)</span>. At <span class="chem">x = 1/2</span>, <span class="chem">arccos(1/2) = pi/3</span> and <span class="chem">sqrt(1 - 1/4) = sqrt(3)/2</span>.'
      ],
      solution: '<p><span class="chem">f\'(x) = arccos x + x × (-1/sqrt(1 - x^2))</span>. So <span class="chem">f\'(1/2) = pi/3 - (1/2)/(sqrt(3)/2) = pi/3 - 1/sqrt(3) = pi/3 - sqrt(3)/3</span>.</p>'
    },
    {
      id: 't5-3-q049',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.15',
      marks: 8,
      stem: '<p>(a) Find <span class="chem">dy/dx</span> for each of the following.</p><p>(i) <span class="chem">y = cot(3x)</span> &nbsp; (ii) <span class="chem">y = log_5 (2x - 1)</span>, <span class="chem">x &gt; 1/2</span> &nbsp; (iii) <span class="chem">y = 2^{x^2}</span> <strong>[6 marks]</strong></p><p>(b) Hence find <span class="chem">int x 2^{x^2} dx</span>. <strong>[2 marks]</strong></p>',
      answer: '<p>(a)(i) <span class="chem">dy/dx = -3 cosec^2(3x)</span>. (ii) <span class="chem">log_5(2x - 1) = ln(2x - 1)/ln 5</span>, so <span class="chem">dy/dx = 2/((2x - 1) ln 5)</span>. (iii) <span class="chem">dy/dx = 2^{x^2} ln 2 × 2x = 2x ln 2 × 2^{x^2}</span>.</p><p>(b) From (iii), <span class="chem">int x 2^{x^2} dx = 2^{x^2}/(2 ln 2) + C</span>.</p>',
      markscheme: [
        'M1: uses <span class="chem">d/dx cot u = -cosec^2 u (du/dx)</span>.',
        'A1: <span class="chem">-3 cosec^2(3x)</span>.',
        'M1: uses <span class="chem">d/dx log_a u = (1/(u ln a))(du/dx)</span> (or the change of base to <span class="chem">ln</span>).',
        'A1: <span class="chem">2/((2x - 1) ln 5)</span>.',
        'M1: uses <span class="chem">d/dx a^u = a^u ln a (du/dx)</span>.',
        'A1: <span class="chem">2x ln 2 × 2^{x^2}</span>.',
        'M1: reverses (a)(iii), dividing by the constant <span class="chem">2 ln 2</span>.',
        'A1: <span class="chem">2^{x^2}/(2 ln 2) + C</span>.'
      ],
      hints: [
        'The formula booklet gives the derivatives of <span class="chem">cot x</span>, <span class="chem">a^x</span> and <span class="chem">log_a x</span>. In every part, multiply by the derivative of the inside function.',
        'For (ii), <span class="chem">d/dx log_a x = 1/(x ln a)</span>. For (iii), <span class="chem">d/dx a^x = a^x ln a</span>.',
        'For (b), the integrand is (a)(iii) divided by <span class="chem">2 ln 2</span>.'
      ],
      solution: '<p>(i) <span class="chem">-3 cosec^2(3x)</span>. (ii) <span class="chem">2/((2x - 1) ln 5)</span>. (iii) <span class="chem">2x ln 2 × 2^{x^2}</span>. (b) <span class="chem">2^{x^2}/(2 ln 2) + C</span>.</p>'
    },
    {
      id: 't5-3-q050',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.13',
      marks: 5,
      stem: '<p>Find the exact value of <span class="chem">lim_{x->infty} (e^x + 5x^2) / (3e^x - x^3)</span>.</p>',
      answer: 1 / 3,
      answerDisplay: '1/3',
      exact: true,
      answerInput: '1/3',
      hints: [
        'As <span class="chem">x -> infty</span>, both numerator and denominator tend to <span class="chem">infty</span> (the exponential beats the cubic), so L’Hôpital’s rule applies.',
        'Differentiate top and bottom repeatedly: <span class="chem">(e^x + 10x)/(3e^x - 3x^2)</span>, then <span class="chem">(e^x + 10)/(3e^x - 6x)</span>, then <span class="chem">e^x/(3e^x - 6)</span>. Check the form each time.',
        'Divide the last fraction through by <span class="chem">e^x</span>.'
      ],
      solution: '<p>The form is <span class="chem">infty/infty</span>. Applying L’Hôpital’s rule three times (each time <span class="chem">infty/infty</span>): <span class="chem">lim (e^x + 10x)/(3e^x - 3x^2) = lim (e^x + 10)/(3e^x - 6x) = lim e^x/(3e^x - 6) = lim 1/(3 - 6e^{-x}) = 1/3</span>.</p>'
    },
    {
      id: 't5-3-q051',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.13',
      marks: 4,
      stem: '<p>Find <span class="chem">lim_{x->0} (ln(1 + 2x) - 2x) / x^2</span>.</p>',
      answer: -2,
      exact: true,
      answerInput: '-2',
      hints: [
        'Substituting <span class="chem">x = 0</span> gives <span class="chem">0/0</span>, so apply L’Hôpital’s rule.',
        'After one step: <span class="chem">lim_{x->0} (2/(1 + 2x) - 2)/(2x)</span>, still <span class="chem">0/0</span>. Apply the rule again.'
      ],
      solution: '<p><span class="chem">0/0</span>: <span class="chem">lim_{x->0} (2/(1 + 2x) - 2)/(2x)</span>, again <span class="chem">0/0</span>, so <span class="chem">= lim_{x->0} (-4/(1 + 2x)^2)/2 = -4/2 = -2</span>.</p>'
    },
    {
      id: 't5-3-q052',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.15',
      marks: 6,
      stem: '<p>(a) Express <span class="chem">(3x + 7)/((x + 1)(x + 3))</span> in partial fractions. <strong>[3 marks]</strong></p><p>(b) Hence find the exact value of <span class="chem">int_0^2 (3x + 7)/((x + 1)(x + 3)) dx</span>, giving your answer in the form <span class="chem">ln k</span>, where <span class="chem">k \\in \\mathbb{Z}</span>. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">3x + 7 = A(x + 3) + B(x + 1)</span>. <span class="chem">x = -1: 4 = 2A => A = 2</span>; <span class="chem">x = -3: -2 = -2B => B = 1</span>. So the integrand is <span class="chem">2/(x + 1) + 1/(x + 3)</span>.</p><p>(b) <span class="chem">[2 ln(x + 1) + ln(x + 3)]_0^2 = (2 ln 3 + ln 5) - (0 + ln 3) = ln 3 + ln 5 = ln 15</span>.</p>',
      markscheme: [
        'M1: writes <span class="chem">3x + 7 = A(x + 3) + B(x + 1)</span> (or equivalent).',
        'A1: <span class="chem">A = 2</span>.',
        'A1: <span class="chem">B = 1</span>.',
        'A1: integrates to <span class="chem">2 ln(x + 1) + ln(x + 3)</span>.',
        'M1: substitutes both limits.',
        'A1: <span class="chem">ln 15</span>.'
      ],
      hints: [
        'Write <span class="chem">3x + 7 = A(x + 3) + B(x + 1)</span> and choose <span class="chem">x = -1</span> and <span class="chem">x = -3</span>.',
        'Each partial fraction integrates to a logarithm. Combine the logarithms at the end.'
      ],
      solution: '<p>(a) <span class="chem">2/(x + 1) + 1/(x + 3)</span>. (b) <span class="chem">[2 ln(x + 1) + ln(x + 3)]_0^2 = 2 ln 3 + ln 5 - ln 3 = ln 15</span>, so <span class="chem">k = 15</span>.</p>'
    },
    {
      id: 't5-3-q053',
      topic: 't5-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.15, 5.16',
      marks: 5,
      stem: '<p>Use the substitution <span class="chem">u = e^x</span> to find the exact value of <span class="chem">int_0^{ln sqrt(3)} e^x/(1 + e^{2x}) dx</span>.</p>',
      answer: Math.PI / 12,
      answerDisplay: 'π/12',
      exact: true,
      answerInput: 'pi/12',
      hints: [
        'With <span class="chem">u = e^x</span>, <span class="chem">du = e^x dx</span> and <span class="chem">e^{2x} = u^2</span>. Change the limits: <span class="chem">x = 0 -> u = 1</span>, <span class="chem">x = ln sqrt(3) -> u = sqrt(3)</span>.',
        'The integral becomes <span class="chem">int_1^{sqrt(3)} 1/(1 + u^2) du</span>, a standard <span class="chem">arctan</span> integral.'
      ],
      solution: '<p><span class="chem">int_1^{sqrt(3)} 1/(1 + u^2) du = [arctan u]_1^{sqrt(3)} = pi/3 - pi/4 = pi/12</span>.</p>'
    },
    {
      id: 't5-3-q054',
      topic: 't5-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.16, 5.17',
      marks: 7,
      stem: '<p>A solid ornament is made by rotating the part of the curve <span class="chem">y = x e^{x/2}</span> between <span class="chem">x = 0</span> and <span class="chem">x = 1</span> through <span class="chem">2pi</span> radians about the <i>x</i>-axis. Find the exact volume of the ornament.</p>',
      answer: Math.PI * (Math.E - 2),
      answerDisplay: 'π(e − 2)',
      exact: true,
      answerInput: 'pi*(e-2)',
      hints: [
        'Decode: this is a volume of revolution about the <i>x</i>-axis, <span class="chem">V = pi int_0^1 y^2 dx</span>. Squaring <i>y</i> gives <span class="chem">x^2 e^x</span>, which needs integration by parts <strong>twice</strong>.',
        'First parts: <span class="chem">u = x^2</span>, <span class="chem">dv/dx = e^x</span>: <span class="chem">int x^2 e^x dx = x^2 e^x - int 2x e^x dx</span>.',
        'Second parts on <span class="chem">int 2x e^x dx</span> gives <span class="chem">2x e^x - 2e^x</span>, so <span class="chem">int x^2 e^x dx = e^x(x^2 - 2x + 2) + C</span>.'
      ],
      solution: '<p>Decode: volume about the <i>x</i>-axis, so square <i>y</i>: <span class="chem">y^2 = x^2 e^x</span>, then repeated parts. <span class="chem">int x^2 e^x dx = e^x(x^2 - 2x + 2) + C</span>. So <span class="chem">V = pi [e^x(x^2 - 2x + 2)]_0^1 = pi(e - 2)</span>.</p>'
    },
    {
      id: 't5-3-q055',
      topic: 't5-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 5.12',
      marks: 9,
      stem: '<p>The function <i>f</i> is defined by</p><p><span class="chem">f(x) = a x^2 + b x</span> for <span class="chem">x &lt;= 2</span>, and <span class="chem">f(x) = ln(x - 1) + 3</span> for <span class="chem">x &gt; 2</span>,</p><p>where <i>a</i> and <i>b</i> are constants. The graph of <i>f</i> has no break and no corner at <span class="chem">x = 2</span>.</p><p>(a) Find the value of <i>a</i> and the value of <i>b</i>. <strong>[6 marks]</strong></p><p>(b) Determine whether <span class="chem">f\'\'(2)</span> exists. Justify your answer. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) No break means continuous: <span class="chem">4a + 2b = ln 1 + 3 = 3</span>. No corner means differentiable: <span class="chem">2a(2) + b = 1/(2 - 1)</span>, so <span class="chem">4a + b = 1</span>. Subtracting: <span class="chem">b = 2</span>, then <span class="chem">a = -1/4</span>.</p><p>(b) For <span class="chem">x &lt; 2</span>, <span class="chem">f\'\'(x) = 2a = -1/2</span>. For <span class="chem">x &gt; 2</span>, <span class="chem">f\'\'(x) = -1/(x - 1)^2 -> -1</span> as <span class="chem">x -> 2^+</span>. The two values differ, so <span class="chem">f\'</span> is not differentiable at <span class="chem">x = 2</span> and <span class="chem">f\'\'(2)</span> does not exist.</p>',
      markscheme: [
        'M1: equates the two pieces at <span class="chem">x = 2</span> (continuity).',
        'A1: <span class="chem">4a + 2b = 3</span>.',
        'M1: equates the two derivatives at <span class="chem">x = 2</span> (differentiability).',
        'A1: <span class="chem">4a + b = 1</span>.',
        'A1: <span class="chem">b = 2</span>.',
        'A1: <span class="chem">a = -1/4</span>.',
        'M1: finds <span class="chem">f\'\'</span> on both sides of <span class="chem">x = 2</span>.',
        'A1: left value <span class="chem">-1/2</span> and right limit <span class="chem">-1</span>.',
        'R1: they are not equal, so <span class="chem">f\'\'(2)</span> does not exist.'
      ],
      hints: [
        'Decode: "no break" is the condition for continuity and "no corner" is the condition for differentiability at <span class="chem">x = 2</span>. Each gives one equation in <i>a</i> and <i>b</i>. Part (b) asks the same question about <span class="chem">f\'</span>.',
        'Continuity: <span class="chem">a(2)^2 + 2b = ln(1) + 3</span>.',
        'Differentiability: <span class="chem">2a(2) + b</span> must equal the derivative of <span class="chem">ln(x - 1) + 3</span> at <span class="chem">x = 2</span>.',
        'For (b), compare <span class="chem">f\'\'</span> just to the left and just to the right of <span class="chem">x = 2</span>.'
      ],
      solution: '<p>Decode: no break = continuous, no corner = differentiable; (b) tests whether <span class="chem">f\'</span> is itself differentiable. (a) <span class="chem">4a + 2b = 3</span> and <span class="chem">4a + b = 1</span> give <span class="chem">b = 2</span>, <span class="chem">a = -1/4</span>. (b) <span class="chem">f\'\'</span> is <span class="chem">-1/2</span> on the left and tends to <span class="chem">-1</span> on the right, so <span class="chem">f\'\'(2)</span> does not exist.</p>'
    },

    /* --- Paper 3 (HL investigations) --- */
    {
      id: 't5-3-q056',
      topic: 't5-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 3 (HL Investigation)',
      syllabus: 'AHL 5.16, 5.17',
      marks: 20,
      stem: '<p>This question investigates the integrals <span class="chem">I_n = int_0^{pi/2} sin^n x dx</span>, for integers <span class="chem">n &gt;= 0</span>.</p><p>(a) Write down the value of <span class="chem">I_0</span> and find the value of <span class="chem">I_1</span>. <strong>[2 marks]</strong></p><p>(b) By writing <span class="chem">sin^n x = sin^{n-1} x × sin x</span> and integrating by parts, show that <span class="chem">n I_n = (n - 1) I_{n-2}</span> for <span class="chem">n &gt;= 2</span>. <strong>[5 marks]</strong></p><p>(c) Hence find the exact values of <span class="chem">I_2</span>, <span class="chem">I_3</span>, <span class="chem">I_4</span> and <span class="chem">I_5</span>. <strong>[3 marks]</strong></p><p>(d) Use your GDC to verify your value of <span class="chem">I_4</span>. <strong>[1 mark]</strong></p><p>(e) Conjecture an expression for <span class="chem">I_{2k}</span>, <span class="chem">k &gt;= 1</span>, as a product of fractions multiplied by <span class="chem">pi/2</span>. <strong>[2 marks]</strong></p><p>(f) Show that <span class="chem">n I_n I_{n-1} = (n - 1) I_{n-1} I_{n-2}</span>, and hence prove that <span class="chem">I_n I_{n-1} = pi/(2n)</span> for all <span class="chem">n &gt;= 1</span>. <strong>[5 marks]</strong></p><p>(g) The curve <span class="chem">y = sin^2 x</span>, <span class="chem">0 &lt;= x &lt;= pi/2</span>, is rotated through <span class="chem">2pi</span> radians about the <i>x</i>-axis. Find the exact volume of the solid formed. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">I_0 = pi/2</span>; <span class="chem">I_1 = [-cos x]_0^{pi/2} = 1</span>.</p><p>(b) <span class="chem">u = sin^{n-1} x</span>, <span class="chem">dv/dx = sin x</span>, so <span class="chem">du/dx = (n - 1) sin^{n-2} x cos x</span> and <span class="chem">v = -cos x</span>. Then <span class="chem">I_n = [-sin^{n-1} x cos x]_0^{pi/2} + (n - 1) int_0^{pi/2} sin^{n-2} x cos^2 x dx</span>. The boundary term is <span class="chem">0</span> at both limits (for <span class="chem">n &gt;= 2</span>). With <span class="chem">cos^2 x = 1 - sin^2 x</span>: <span class="chem">I_n = (n - 1)(I_{n-2} - I_n)</span>, so <span class="chem">n I_n = (n - 1) I_{n-2}</span>.</p><p>(c) <span class="chem">I_2 = (1/2)(pi/2) = pi/4</span>, <span class="chem">I_3 = (2/3)(1) = 2/3</span>, <span class="chem">I_4 = (3/4)(pi/4) = 3pi/16</span>, <span class="chem">I_5 = (4/5)(2/3) = 8/15</span>.</p><p>(d) GDC: <span class="chem">int_0^{pi/2} sin^4 x dx = 0.589048… = 3pi/16</span>.</p><p>(e) <span class="chem">I_{2k} = (1/2)(3/4)(5/6)…((2k - 1)/(2k)) × pi/2</span>.</p><p>(f) Multiply <span class="chem">n I_n = (n - 1) I_{n-2}</span> by <span class="chem">I_{n-1}</span>. So <span class="chem">n I_n I_{n-1}</span> takes the same value for every <span class="chem">n &gt;= 1</span>, equal to its value at <span class="chem">n = 1</span>: <span class="chem">1 × I_1 I_0 = pi/2</span>. Hence <span class="chem">I_n I_{n-1} = pi/(2n)</span>.</p><p>(g) <span class="chem">V = pi int_0^{pi/2} sin^4 x dx = pi I_4 = 3pi^2/16</span>.</p>',
      markscheme: [
        'A1: <span class="chem">I_0 = pi/2</span>.',
        'A1: <span class="chem">I_1 = 1</span>.',
        'M1: parts with <span class="chem">u = sin^{n-1} x</span> and <span class="chem">dv/dx = sin x</span>.',
        'A1: <span class="chem">du/dx = (n - 1) sin^{n-2} x cos x</span> and <span class="chem">v = -cos x</span>, giving <span class="chem">[-sin^{n-1} x cos x]_0^{pi/2} + (n - 1) int sin^{n-2} x cos^2 x dx</span>.',
        'R1: the boundary term is zero at both limits.',
        'M1: replaces <span class="chem">cos^2 x</span> by <span class="chem">1 - sin^2 x</span>.',
        'A1: <span class="chem">I_n = (n - 1) I_{n-2} - (n - 1) I_n</span>, leading to <span class="chem">n I_n = (n - 1) I_{n-2}</span> AG (no mark for the given line).',
        'A1: <span class="chem">I_2 = pi/4</span>.',
        'A1: <span class="chem">I_3 = 2/3</span> and <span class="chem">I_4 = 3pi/16</span>.',
        'A1: <span class="chem">I_5 = 8/15</span>.',
        'A1: GDC value <span class="chem">0.589</span> agrees with <span class="chem">3pi/16</span>.',
        'M1: recognises the pattern of odd over even fractions.',
        'A1: <span class="chem">I_{2k} = (1 × 3 × … × (2k - 1))/(2 × 4 × … × 2k) × pi/2</span>.',
        'M1: multiplies the reduction formula by <span class="chem">I_{n-1}</span>.',
        'A1: obtains <span class="chem">n I_n I_{n-1} = (n - 1) I_{n-1} I_{n-2}</span>.',
        'R1: deduces that <span class="chem">n I_n I_{n-1}</span> is the same for every <span class="chem">n</span>.',
        'M1: evaluates the constant at <span class="chem">n = 1</span>: <span class="chem">I_1 I_0 = pi/2</span>.',
        'A1: concludes <span class="chem">I_n I_{n-1} = pi/(2n)</span>.',
        'M1: <span class="chem">V = pi int_0^{pi/2} (sin^2 x)^2 dx = pi I_4</span>.',
        'A1: <span class="chem">V = 3pi^2/16</span>.'
      ],
      hints: [
        'Decode: this is a reduction formula. Part (b) links each integral to the one two steps below, so you climb from <span class="chem">I_0</span> (even <i>n</i>) and <span class="chem">I_1</span> (odd <i>n</i>). Part (g) is a disguised <span class="chem">I_4</span>.',
        'In (b), the boundary term <span class="chem">[-sin^{n-1} x cos x]_0^{pi/2}</span> vanishes: <span class="chem">cos(pi/2) = 0</span> and <span class="chem">sin 0 = 0</span>. Then use <span class="chem">cos^2 x = 1 - sin^2 x</span> and collect the two <span class="chem">I_n</span> terms.',
        'In (c), use <span class="chem">I_n = ((n - 1)/n) I_{n-2}</span>: even <i>n</i> start from <span class="chem">pi/2</span>, odd <i>n</i> from 1.',
        'In (f), if <span class="chem">a_n = n I_n I_{n-1}</span>, the result says <span class="chem">a_n = a_{n-1}</span>, so every <span class="chem">a_n</span> equals <span class="chem">a_1</span>.',
        'In (g), <span class="chem">y^2 = sin^4 x</span>.'
      ],
      solution: '<p>Decode: build a reduction formula by parts, generate small cases, spot the pattern, then use the formula to find a constant product and a volume. (a) <span class="chem">pi/2</span>, <span class="chem">1</span>. (c) <span class="chem">pi/4, 2/3, 3pi/16, 8/15</span>. (e) <span class="chem">I_{2k} = ((2k - 1)/(2k)) × … × (3/4)(1/2)(pi/2)</span>. (f) <span class="chem">n I_n I_{n-1} = pi/2</span> for all <i>n</i>. (g) <span class="chem">V = 3pi^2/16</span>.</p>'
    },
    {
      id: 't5-3-q057',
      topic: 't5-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 3 (HL Investigation)',
      syllabus: 'AHL 5.17, 5.13',
      marks: 19,
      stem: '<p>For <span class="chem">n &gt; 0</span>, let <span class="chem">R_n</span> be the region bounded by the curve <span class="chem">y = x^n</span>, the <i>x</i>-axis and the line <span class="chem">x = 1</span>. Let <span class="chem">A(n)</span> be the volume formed when <span class="chem">R_n</span> is rotated through <span class="chem">2pi</span> about the <i>x</i>-axis, and <span class="chem">B(n)</span> the volume formed when <span class="chem">R_n</span> is rotated through <span class="chem">2pi</span> about the <i>y</i>-axis.</p><p>(a) For <span class="chem">n = 1</span>, describe each solid and write down <span class="chem">A(1)</span> and <span class="chem">B(1)</span>. <strong>[3 marks]</strong></p><p>(b) Show that <span class="chem">A(n) = pi/(2n + 1)</span>. <strong>[2 marks]</strong></p><p>(c) By first finding the volume formed when the region between <span class="chem">y = x^n</span>, the <i>y</i>-axis and the line <span class="chem">y = 1</span> is rotated about the <i>y</i>-axis, show that <span class="chem">B(n) = 2pi/(n + 2)</span>. <strong>[5 marks]</strong></p><p>(d) Use your GDC to sketch <span class="chem">A(n)</span> and <span class="chem">B(n)</span> for <span class="chem">0 &lt; n &lt;= 5</span>, and hence conjecture which of <span class="chem">A(n)</span> and <span class="chem">B(n)</span> is larger. Prove your conjecture. <strong>[4 marks]</strong></p><p>(e) Find <span class="chem">lim_{n->infty} B(n)/A(n)</span>. <strong>[2 marks]</strong></p><p>(f) Find the value of <i>n</i> for which <span class="chem">B(n) - A(n)</span> is greatest, and state this greatest value. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) For <span class="chem">n = 1</span>, about the <i>x</i>-axis the solid is a cone of radius 1 and height 1: <span class="chem">A(1) = pi/3</span>. About the <i>y</i>-axis it is a cylinder of radius 1, height 1 with a cone removed: <span class="chem">B(1) = pi - pi/3 = 2pi/3</span>.</p><p>(b) <span class="chem">A(n) = pi int_0^1 x^{2n} dx = pi/(2n + 1)</span>.</p><p>(c) With <span class="chem">x = y^{1/n}</span>, the region next to the <i>y</i>-axis gives <span class="chem">pi int_0^1 y^{2/n} dy = pi/(2/n + 1) = pi n/(n + 2)</span>. <span class="chem">R_n</span> about the <i>y</i>-axis is the cylinder (volume <span class="chem">pi</span>) minus this: <span class="chem">B(n) = pi - pi n/(n + 2) = 2pi/(n + 2)</span>.</p><p>(d) The graphs suggest <span class="chem">B(n) &gt; A(n)</span> for all <span class="chem">n &gt; 0</span>. Proof: <span class="chem">2/(n + 2) &gt; 1/(2n + 1) <=> 4n + 2 &gt; n + 2 <=> 3n &gt; 0</span>, true for <span class="chem">n &gt; 0</span> (both denominators are positive).</p><p>(e) <span class="chem">B(n)/A(n) = 2(2n + 1)/(n + 2) -> 4</span>.</p><p>(f) <span class="chem">D(n) = 2pi/(n + 2) - pi/(2n + 1)</span>; <span class="chem">D\'(n) = -2pi/(n + 2)^2 + 2pi/(2n + 1)^2 = 0 => n + 2 = 2n + 1 => n = 1</span>. Greatest value <span class="chem">D(1) = 2pi/3 - pi/3 = pi/3</span>.</p>',
      markscheme: [
        'A1: identifies the cone (about <i>x</i>) and the cylinder with a conical hole (about <i>y</i>).',
        'A1: <span class="chem">A(1) = pi/3</span>.',
        'A1: <span class="chem">B(1) = 2pi/3</span>.',
        'M1: <span class="chem">A(n) = pi int_0^1 (x^n)^2 dx</span>.',
        'A1: <span class="chem">pi [x^{2n+1}/(2n + 1)]_0^1</span>, leading to <span class="chem">pi/(2n + 1)</span> AG (no mark for the given line).',
        'M1: rearranges to <span class="chem">x = y^{1/n}</span>.',
        'M1: <span class="chem">pi int_0^1 x^2 dy = pi int_0^1 y^{2/n} dy</span>.',
        'A1: <span class="chem">pi n/(n + 2)</span>.',
        'M1: <span class="chem">B(n)</span> = cylinder <span class="chem">pi(1)^2(1)</span> minus that volume.',
        'A1: <span class="chem">pi - pi n/(n + 2) = pi(n + 2 - n)/(n + 2)</span>, leading to <span class="chem">2pi/(n + 2)</span> AG (no mark for the given line).',
        'A1: sketch with <span class="chem">B</span> above <span class="chem">A</span>, and conjecture <span class="chem">B(n) &gt; A(n)</span>.',
        'M1: sets up the inequality <span class="chem">2/(n + 2) &gt; 1/(2n + 1)</span>.',
        'A1: cross-multiplies (positive denominators) to <span class="chem">3n &gt; 0</span>.',
        'R1: true for every <span class="chem">n &gt; 0</span>, so the conjecture holds.',
        'M1: <span class="chem">B(n)/A(n) = 2(2n + 1)/(n + 2)</span>.',
        'A1: limit <span class="chem">4</span>.',
        'M1: differentiates <span class="chem">B(n) - A(n)</span> and sets it equal to zero (or uses a GDC graph).',
        'A1: <span class="chem">n = 1</span>.',
        'A1: greatest value <span class="chem">pi/3</span>.'
      ],
      hints: [
        'Decode: a whole family of solids depends on one parameter <i>n</i>. Work out small cases, find general formulas, then compare the two formulas and study them as functions of <i>n</i>.',
        'For (c), the region <span class="chem">R_n</span> rotated about the <i>y</i>-axis is a cylinder of radius 1 and height 1 with the solid from the region next to the <i>y</i>-axis removed.',
        'Use <span class="chem">x^2 = y^{2/n}</span>, and simplify <span class="chem">1/(2/n + 1) = n/(n + 2)</span>.',
        'For (d), both denominators are positive, so you may cross-multiply. For (e), divide top and bottom by <i>n</i> (or use L’Hôpital’s rule). For (f), solve <span class="chem">(n + 2)^2 = (2n + 1)^2</span> with <span class="chem">n &gt; 0</span>.'
      ],
      solution: '<p>Decode: two volume formulas depend on the parameter <i>n</i>; compare them, then treat their difference as a function to optimise. <span class="chem">A(n) = pi/(2n + 1)</span>, <span class="chem">B(n) = 2pi/(n + 2)</span>, <span class="chem">B &gt; A</span> for all <span class="chem">n &gt; 0</span>, <span class="chem">B/A -> 4</span>, and <span class="chem">B - A</span> is greatest (<span class="chem">pi/3</span>) at <span class="chem">n = 1</span>.</p>'
    },
    {
      id: 't5-3-q058',
      topic: 't5-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 3 (HL Investigation)',
      syllabus: 'AHL 5.12, 5.13',
      marks: 17,
      stem: '<p>This question investigates <span class="chem">f(x) = (1 + k/x)^x</span> for large <i>x</i>, where <i>k</i> is a positive constant.</p><p>(a) Let <span class="chem">k = 2</span>. Use your GDC to find <span class="chem">f(10)</span>, <span class="chem">f(100)</span> and <span class="chem">f(1000)</span>, giving each to 5 significant figures. <strong>[2 marks]</strong></p><p>(b) Hence conjecture whether <span class="chem">f(x)</span> converges as <span class="chem">x -> infty</span> and, if so, suggest its exact limit. <strong>[1 mark]</strong></p><p>(c) Show that <span class="chem">ln f(x) = ln(1 + k/x) / (1/x)</span>, and state the form of this quotient as <span class="chem">x -> infty</span>. <strong>[2 marks]</strong></p><p>(d) Use L’Hôpital’s rule to show that <span class="chem">lim_{x->infty} ln f(x) = k</span>, and hence write down <span class="chem">lim_{x->infty} f(x)</span>. <strong>[5 marks]</strong></p><p>(e) By writing <span class="chem">(x + 3)/(x - 1) = 1 + 4/(x - 1)</span>, find the exact value of <span class="chem">lim_{x->infty} ((x + 3)/(x - 1))^x</span>. <strong>[4 marks]</strong></p><p>(f) A deposit of 1000 euros earns interest at a nominal annual rate of 6%, compounded <i>m</i> times per year. After 10 years its value is <span class="chem">1000(1 + 0.06/m)^{10m}</span>. Find, to the nearest cent, the limit of this value as <span class="chem">m -> infty</span>. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">f(10) = 6.1917</span>, <span class="chem">f(100) = 7.2446</span>, <span class="chem">f(1000) = 7.3743</span>.</p><p>(b) The values increase and appear to converge, to about 7.39, which suggests the limit <span class="chem">e^2</span>.</p><p>(c) <span class="chem">ln f(x) = x ln(1 + k/x) = ln(1 + k/x)/(1/x)</span>. As <span class="chem">x -> infty</span>, top and bottom both tend to 0: the form <span class="chem">0/0</span>.</p><p>(d) Differentiating top and bottom: <span class="chem">((-k/x^2)/(1 + k/x)) / (-1/x^2) = k/(1 + k/x) -> k</span>. So <span class="chem">ln f(x) -> k</span>, and since <span class="chem">e^x</span> is continuous, <span class="chem">f(x) -> e^k</span>.</p><p>(e) Let <span class="chem">t = x - 1</span>: <span class="chem">((x + 3)/(x - 1))^x = (1 + 4/t)^t × (1 + 4/t) -> e^4 × 1 = e^4</span>.</p><p>(f) <span class="chem">1000(1 + 0.06/m)^{10m} = 1000((1 + 0.6/(10m))^{10m}) -> 1000 e^{0.6} = 1822.12</span> euros.</p>',
      markscheme: [
        'A1: <span class="chem">f(10) = 6.1917</span>.',
        'A1: <span class="chem">f(100) = 7.2446</span> and <span class="chem">f(1000) = 7.3743</span>.',
        'A1: conjectures convergence to <span class="chem">e^2 ≈ 7.389</span>.',
        'A1: <span class="chem">ln f(x) = x ln(1 + k/x)</span> rewritten as the quotient.',
        'A1: form <span class="chem">0/0</span> stated.',
        'M1: differentiates the numerator: <span class="chem">(-k/x^2)/(1 + k/x)</span>.',
        'A1: differentiates the denominator: <span class="chem">-1/x^2</span>.',
        'A1: simplifies to <span class="chem">k/(1 + k/x)</span>.',
        'A1: limit <span class="chem">k</span>.',
        'A1: <span class="chem">lim f(x) = e^k</span>.',
        'M1: substitutes <span class="chem">t = x - 1</span> (so <span class="chem">t -> infty</span>).',
        'A1: splits into <span class="chem">(1 + 4/t)^t (1 + 4/t)</span>.',
        'M1: uses the result of (d) with <span class="chem">k = 4</span>, and <span class="chem">(1 + 4/t) -> 1</span>.',
        'A1: <span class="chem">e^4</span>.',
        'M1: writes the value as <span class="chem">1000(1 + 0.6/n)^n</span> with <span class="chem">n = 10m</span> (or equivalent).',
        'A1: limit <span class="chem">1000 e^{0.6}</span>.',
        'A1: <span class="chem">1822.12</span> euros.'
      ],
      hints: [
        'Decode: the variable is in both the base and the power, so take logarithms. That turns a power into a quotient of the form <span class="chem">0/0</span>, which is a job for L’Hôpital’s rule.',
        'In (c), <span class="chem">ln((1 + k/x)^x) = x ln(1 + k/x)</span>, and multiplying by <i>x</i> is the same as dividing by <span class="chem">1/x</span>.',
        'In (d), <span class="chem">d/dx ln(1 + k/x) = (-k/x^2)/(1 + k/x)</span> and <span class="chem">d/dx (1/x) = -1/x^2</span>. The <span class="chem">-1/x^2</span> factors cancel.',
        'In (e), the exponent is <span class="chem">x = t + 1</span>, not <i>t</i>. In (f), the 6% rate and 10 years combine to <span class="chem">k = 0.6</span>.'
      ],
      solution: '<p>Decode: a variable power is handled by taking logarithms, which produces an indeterminate quotient for L’Hôpital’s rule. (a) 6.1917, 7.2446, 7.3743. (d) <span class="chem">lim f(x) = e^k</span>. (e) <span class="chem">e^4</span>. (f) 1822.12 euros.</p>'
    },
    {
      id: 't5-3-q059',
      topic: 't5-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 3 (HL Investigation)',
      syllabus: 'AHL 5.12, AHL 1.15',
      marks: 19,
      stem: '<p>This question investigates higher derivatives of products of a polynomial and <span class="chem">e^x</span>. Write <span class="chem">f^{(n)}(x)</span> for the <i>n</i>th derivative of <i>f</i>.</p><p>(a) Let <span class="chem">f(x) = x e^x</span>. Find <span class="chem">f\'(x)</span>, <span class="chem">f\'\'(x)</span> and <span class="chem">f\'\'\'(x)</span>. <strong>[3 marks]</strong></p><p>(b) Conjecture an expression for <span class="chem">f^{(n)}(x)</span>. <strong>[1 mark]</strong></p><p>(c) Use mathematical induction to prove your conjecture for all <span class="chem">n \\in \\mathbb{Z}^+</span>. <strong>[5 marks]</strong></p><p>(d) Let <span class="chem">g(x) = x^2 e^x</span>. Show that if <span class="chem">g^{(n)}(x) = (x^2 + 2nx + n(n - 1)) e^x</span> then <span class="chem">g^{(n+1)}(x) = (x^2 + 2(n + 1)x + (n + 1)n) e^x</span>, and hence state, with a reason, what this proves. <strong>[4 marks]</strong></p><p>(e) Find the smallest value of <i>n</i> for which <span class="chem">g^{(n)}(0) &gt; 1000</span>. <strong>[3 marks]</strong></p><p>(f) Find the exact <i>x</i>-coordinates of the points where the graph of <span class="chem">y = g^{(10)}(x)</span> meets the <i>x</i>-axis. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">f\'(x) = (x + 1)e^x</span>, <span class="chem">f\'\'(x) = (x + 2)e^x</span>, <span class="chem">f\'\'\'(x) = (x + 3)e^x</span>.</p><p>(b) <span class="chem">f^{(n)}(x) = (x + n)e^x</span>.</p><p>(c) <span class="chem">n = 1</span>: <span class="chem">f\'(x) = (x + 1)e^x</span>, true. Assume <span class="chem">f^{(k)}(x) = (x + k)e^x</span>. Then <span class="chem">f^{(k+1)}(x) = e^x + (x + k)e^x = (x + k + 1)e^x</span>, which is the statement for <span class="chem">n = k + 1</span>. It is true for <span class="chem">n = 1</span>, and if true for <span class="chem">n = k</span> it is true for <span class="chem">n = k + 1</span>, so it is true for all <span class="chem">n \\in \\mathbb{Z}^+</span>.</p><p>(d) Differentiating, <span class="chem">g^{(n+1)}(x) = (2x + 2n)e^x + (x^2 + 2nx + n^2 - n)e^x = (x^2 + (2n + 2)x + n^2 + n)e^x = (x^2 + 2(n + 1)x + (n + 1)n)e^x</span>. Also <span class="chem">g\'(x) = (x^2 + 2x)e^x</span> matches the formula at <span class="chem">n = 1</span>, so by induction the formula holds for every <span class="chem">n \\in \\mathbb{Z}^+</span>.</p><p>(e) <span class="chem">g^{(n)}(0) = n(n - 1)</span>. <span class="chem">32 × 31 = 992</span> and <span class="chem">33 × 32 = 1056</span>, so <span class="chem">n = 33</span>.</p><p>(f) <span class="chem">g^{(10)}(x) = (x^2 + 20x + 90)e^x = 0 => x^2 + 20x + 90 = 0 => x = -10 +- sqrt(10)</span>.</p>',
      markscheme: [
        'A1: <span class="chem">f\'(x) = (x + 1)e^x</span>.',
        'A1: <span class="chem">f\'\'(x) = (x + 2)e^x</span>.',
        'A1: <span class="chem">f\'\'\'(x) = (x + 3)e^x</span>.',
        'A1: conjecture <span class="chem">f^{(n)}(x) = (x + n)e^x</span>.',
        'A1: checks <span class="chem">n = 1</span>.',
        'M1: assumes the result for <span class="chem">n = k</span>.',
        'M1: differentiates <span class="chem">(x + k)e^x</span> with the product rule.',
        'A1: obtains <span class="chem">(x + k + 1)e^x</span>.',
        'R1: complete induction conclusion (true for <span class="chem">n = 1</span>; true for <i>k</i> implies true for <span class="chem">k + 1</span>; so true for all <span class="chem">n \\in \\mathbb{Z}^+</span>).',
        'M1: differentiates the product <span class="chem">(x^2 + 2nx + n(n - 1))e^x</span>.',
        'A1: collects terms into <span class="chem">x^2 + 2(n + 1)x + (n + 1)n</span>.',
        'A1: checks the formula at <span class="chem">n = 1</span>: <span class="chem">g\'(x) = (x^2 + 2x)e^x</span>.',
        'R1: concludes by induction that the formula holds for all <span class="chem">n \\in \\mathbb{Z}^+</span>.',
        'M1: <span class="chem">g^{(n)}(0) = n(n - 1)</span>.',
        'M1: solves <span class="chem">n(n - 1) &gt; 1000</span> (or tests consecutive values).',
        'A1: <span class="chem">n = 33</span>.',
        'M1: <span class="chem">x^2 + 20x + 90 = 0</span> (since <span class="chem">e^x != 0</span>).',
        'A1: applies the quadratic formula.',
        'A1: <span class="chem">x = -10 +- sqrt(10)</span>.'
      ],
      hints: [
        'Decode: compute a few small cases, spot the pattern, then prove it by induction (AHL 1.15). Each new derivative uses the product rule once.',
        'In (a), keep a factor <span class="chem">e^x</span> outside each time: <span class="chem">d/dx[(x + a)e^x] = (x + a + 1)e^x</span>.',
        'In (d), differentiate the bracket and the exponential separately, then collect the terms in <span class="chem">x^2</span>, <i>x</i> and the constant. The step only proves the formula if you also check a starting value.',
        'In (e), put <span class="chem">x = 0</span>: <span class="chem">g^{(n)}(0) = n(n - 1)</span>. In (f), <span class="chem">e^x</span> is never zero.'
      ],
      solution: '<p>Decode: higher derivatives with a pattern call for small cases, a conjecture and an induction proof. (b) <span class="chem">f^{(n)}(x) = (x + n)e^x</span>. (d) The inductive step, with <span class="chem">n = 1</span> checked, proves <span class="chem">g^{(n)}(x) = (x^2 + 2nx + n(n - 1))e^x</span>. (e) <span class="chem">n = 33</span>. (f) <span class="chem">x = -10 +- sqrt(10)</span>.</p>'
    }
  ]);
})();
