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
      paper: 'P1',
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
      paper: 'P1',
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
      paper: 'P1',
      syllabus: 'AHL 5.13',
      marks: 3,
      stem: '<p>Evaluate <span class="chem">lim_{x->0} (e^{3x} - 1 - 3x) / x^2</span>.</p>',
      answer: 4.5,
      tolerance: '0.5%',
      sigfigs: 3,
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
      paper: 'P1',
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
      paper: 'P1',
      syllabus: 'AHL 5.14',
      marks: 4,
      stem: '<p>A curve is defined implicitly by <span class="chem">x^2 + xy + y^2 = 7</span>. Find the gradient <span class="chem">dy/dx</span> of the curve at the point <span class="chem">(2, 1)</span>.</p>',
      answer: -1.25,
      tolerance: '0.5%',
      sigfigs: 3,
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
      paper: 'P1',
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
      paper: 'P1',
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
      paper: 'P1',
      syllabus: 'AHL 5.16',
      marks: 5,
      stem: '<p>Using the substitution <span class="chem">u = 1 + x^2</span> (or otherwise), find the exact value of <span class="chem">int_0^2 (2x^3) / sqrt(1 + x^2) dx</span>. Give your answer to 3 s.f. or as an exact expression using <span class="mono">sqrt(5)</span>.</p>',
      answer: 4.3147632,
      answerDisplay: '(4/3)(√5 + 1) ≈ 4.31',
      tolerance: '1%',
      sigfigs: 3,
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
      paper: 'P1',
      syllabus: 'AHL 5.16',
      marks: 5,
      stem: '<p>Find the exact value of <span class="chem">int_1^e x^2 ln(x) dx</span>. (You can type an exact expression in terms of <span class="mono">e</span> such as <span class="mono">(2*e^3+1)/9</span>, or a 3 s.f. decimal.)</p>',
      answer: 4.5745638,
      answerDisplay: '(2e³ + 1) / 9 ≈ 4.57',
      tolerance: '1%',
      sigfigs: 3,
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
      paper: 'P1',
      syllabus: 'AHL 5.15',
      marks: 4,
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
      paper: 'P1',
      syllabus: 'AHL 5.16',
      marks: 5,
      stem: '<p>Given that <span class="chem">6 / (x^2 - x - 2) = A / (x - 2) + B / (x + 1)</span>, evaluate the definite integral <span class="chem">int_3^4 6 / (x^2 - x - 2) dx</span> and give your answer to 3 s.f. (or as an exact expression such as <span class="mono">2*ln(8/5)</span>).</p>',
      answer: 0.94000726,
      answerDisplay: '2 ln(8/5) ≈ 0.940',
      tolerance: '1%',
      sigfigs: 3,
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
      paper: 'P2',
      syllabus: 'AHL 5.14',
      marks: 5,
      stem: '<p>A spherical balloon is being inflated so that its volume increases at a constant rate of <span class="unit">100 cm3 s-1</span>. Find the rate at which its surface area <span class="chem">A = 4 pi r^2</span> is increasing when the radius is <span class="chem">r = 5</span> <span class="unit">cm</span>.</p>',
      unit: 'cm2 s-1',
      answer: 40,
      tolerance: '0.5%',
      sigfigs: 3,
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
      paper: 'P1',
      syllabus: 'AHL 5.17',
      marks: 4,
      stem: '<p>The region bounded by <span class="chem">y = cos x</span>, the <i>x</i>-axis, <span class="chem">x = 0</span>, and <span class="chem">x = pi/2</span> is rotated through <span class="chem">2pi</span> radians about the <i>x</i>-axis. What is the exact volume of the solid formed?</p>',
      options: [
        '<span class="chem">pi^2 / 4</span>',
        '<span class="chem">pi / 2</span>',
        '<span class="chem">pi^2 / 2</span>',
        '<span class="chem">pi</span>'
      ],
      answer: 0,
      misconception: {
        1: 'You forgot to multiply by the outer factor of <span class="chem">pi</span> in <span class="chem">V = pi int y^2 dx</span>, or integrated <span class="chem">cos x</span> instead of <span class="chem">cos^2 x</span>.',
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
      paper: 'P1',
      syllabus: 'AHL 5.14',
      marks: 6,
      stem: '<p>A curve is given by the implicit equation <span class="chem">x^2 + xy + y^2 = 12</span>.</p><p>(a) Show that <span class="chem">dy/dx = -(2x + y) / (x + 2y)</span>. <strong>[3 marks]</strong></p><p>(b) Hence find the coordinates of the two stationary points on the curve. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) Differentiating both sides with respect to <i>x</i>: <span class="chem">2x + (y + x dy/dx) + 2y dy/dx = 0</span>. Grouping <span class="chem">dy/dx</span> terms gives <span class="chem">(x + 2y) dy/dx = -(2x + y) => dy/dx = -(2x + y)/(x + 2y)</span>.</p><p>(b) Stationary points occur where <span class="chem">dy/dx = 0 => 2x + y = 0 => y = -2x</span>. Substituting into the curve: <span class="chem">x^2 + x(-2x) + (-2x)^2 = 12 => 3x^2 = 12 => x = +-2</span>. Thus the stationary points are <span class="chem">(2, -4)</span> and <span class="chem">(-2, 4)</span>.</p>',
      markscheme: [
        'M1: applies product rule to <span class="chem">xy</span> to get <span class="chem">y + x(dy/dx)</span> and chain rule to <span class="chem">y^2</span> to get <span class="chem">2y(dy/dx)</span>.',
        'A1: correct differentiated equation <span class="chem">2x + y + x(dy/dx) + 2y(dy/dx) = 0</span>.',
        'A1: isolates <span class="chem">dy/dx</span> clearly to reach the given answer <span class="chem">-(2x + y)/(x + 2y)</span> (AG).',
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
      paper: 'P1',
      syllabus: 'AHL 5.16',
      marks: 6,
      stem: '<p>By integrating by parts twice, find the exact value of the cyclic integral <span class="chem">I = int_0^{pi/2} e^{2x} sin(x) dx</span>. (You can type an exact expression in terms of <span class="mono">e</span> and <span class="mono">pi</span> such as <span class="mono">(2*e^pi+1)/5</span>, or a 3 s.f. decimal.)</p>',
      answer: 9.456277,
      answerDisplay: '(2e^π + 1) / 5 ≈ 9.46',
      tolerance: '1%',
      sigfigs: 3,
      hints: [
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
      paper: 'P1',
      syllabus: 'AHL 5.13',
      marks: 6,
      stem: '<p>Given that the limit <span class="chem">lim_{x->0} (sin(2x) + k x cos(x)) / x^3</span> exists and is finite, find the exact value of that limit.</p>',
      answer: -0.33333333,
      answerDisplay: '−1/3 ≈ −0.333',
      tolerance: '1%',
      sigfigs: 3,
      hints: [
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
      paper: 'P3',
      syllabus: 'AHL 5.16–5.17',
      marks: 7,
      stem: '<p>For each non-negative integer <i>n</i>, let <span class="chem">I_n = int_1^e x (ln x)^n dx</span>.</p><p>(a) Find the exact value of <span class="chem">I_0</span> and <span class="chem">I_1</span>. <strong>[3 marks]</strong></p><p>(b) Using integration by parts, show that <span class="chem">I_n = e^2 / 2 - (n / 2) I_{n-1}</span> for <span class="chem">n &gt;= 1</span>, and hence find the exact volume generated when the curve <span class="chem">y = sqrt(x) ln x</span> between <span class="chem">x = 1</span> and <span class="chem">x = e</span> is rotated <span class="chem">2pi</span> radians about the <i>x</i>-axis. <strong>[4 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">I_0 = int_1^e x dx = [x^2/2]_1^e = (e^2 - 1)/2</span>. Using parts on <span class="chem">I_1</span> (or the reduction formula with <span class="chem">n = 1</span>): <span class="chem">I_1 = e^2/2 - (1/2)((e^2 - 1)/2) = (e^2 + 1)/4</span>.</p><p>(b) Let <span class="chem">u = (ln x)^n => du/dx = n(ln x)^{n-1}/x</span> and <span class="chem">dv/dx = x => v = x^2/2</span>. Then <span class="chem">I_n = [(x^2/2)(ln x)^n]_1^e - int_1^e (x^2/2)(n(ln x)^{n-1}/x) dx = e^2/2 - (n/2) I_{n-1}</span>. The volume is <span class="chem">V = pi int_1^e x(ln x)^2 dx = pi I_2 = pi(e^2/2 - I_1) = pi(e^2/2 - (e^2 + 1)/4) = pi(e^2 - 1)/4</span>.</p>',
      markscheme: [
        'A1: correct value <span class="chem">I_0 = (e^2 - 1)/2</span>.',
        'M1 A1: applies integration by parts to find <span class="chem">I_1 = (e^2 + 1)/4</span>.',
        'M1: chooses <span class="chem">u = (ln x)^n</span> and <span class="chem">dv/dx = x</span> in <span class="chem">I_n</span>.',
        'A1: shows boundary term <span class="chem">[(x^2/2)(ln x)^n]_1^e = e^2/2</span> and simplifies integral to <span class="chem">-(n/2)I_{n-1}</span> (AG).',
        'M1: identifies volume <span class="chem">V = pi int_1^e y^2 dx = pi I_2</span>.',
        'A1: substitutes <span class="chem">n = 2</span> to obtain <span class="chem">V = pi(e^2 - 1)/4</span>.'
      ],
      hints: [
        'For part (b), choose <span class="chem">u = (ln x)^n</span> and <span class="chem">dv/dx = x</span> so that <span class="chem">v = x^2 / 2</span> cancels the <span class="chem">1/x</span> in <span class="chem">du/dx</span>.',
        'Notice that rotating <span class="chem">y = sqrt(x) ln x</span> about the <i>x</i>-axis gives <span class="chem">V = pi int_1^e x (ln x)^2 dx = pi I_2</span>.'
      ]
    }
  ]);
})();
