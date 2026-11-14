/* ==========================================================================
   Analysis Lab — data/questions-t1-4.js
   Question bank for Topic 1.4: Complex numbers and De Moivre's theorem (AHL 1.12–1.14)
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.questions) return;

  S1.questions.register('t1-4', [
    {
      id: 't1-4-q001',
      topic: 't1-4',
      level: 'ahl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.12',
      type: 'mcq',
      marks: 2,
      stem: 'Let <span class="chem">z = (7 - 4i) / (2 + i)</span>. What is the imaginary part <span class="chem">Im(z)</span>?',
      options: [
        '<span class="chem">-3</span>',
        '<span class="chem">-3i</span>',
        '<span class="chem">-1/5</span>',
        '<span class="chem">2</span>'
      ],
      answer: 0,
      misconception: {
        1: 'The imaginary part Im(z) of z = a + bi is the real coefficient b = −3, never −3i.',
        2: 'Check the sign when multiplying by the conjugate (2 − i): the imaginary term in the numerator is −7i − 8i = −15i, not +7i − 8i = −i.',
        3: '2 is the real part Re(z) = (14 − 4)/5 = 10/5 = 2, whereas the question asks for Im(z).'
      },
      hints: [
        'Multiply the numerator and denominator by the complex conjugate of the denominator, <span class="chem">2 - i</span>.',
        '<span class="chem">z = ((7 - 4i)(2 - i)) / (2^2 + 1^2) = (14 - 7i - 8i + 4i^2) / 5 = (10 - 15i) / 5 = 2 - 3i</span>. Remember <span class="chem">Im(a + bi) = b</span>.'
      ],
      solution: '<p>Multiply numerator and denominator by <span class="chem">2 - i</span>: <span class="chem">z = ((7 - 4i)(2 - i)) / (2^2 + 1^2) = (10 - 15i) / 5 = 2 - 3i</span>. Therefore <span class="chem">Im(z) = -3</span>.</p>'
    },
    {
      id: 't1-4-q002',
      topic: 't1-4',
      level: 'ahl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.12',
      type: 'numeric',
      marks: 3,
      stem: 'Given that <span class="chem">z = 3 - 4i</span>, evaluate <span class="chem">z z^* + i^{2028}</span>.',
      answer: 26,
      tolerance: 0.001,
      hints: [
        'Recall that <span class="chem">z z^* = |z|^2 = a^2 + b^2</span>.',
        'For <span class="chem">i^{2028}</span>, notice that <span class="chem">2028</span> is a multiple of <span class="chem">4</span> (<span class="chem">2028 = 4 × 507</span>), so <span class="chem">i^{2028} = (i^4)^{507} = 1</span>.'
      ],
      solution: '<p><span class="chem">z z^* = 3^2 + (-4)^2 = 9 + 16 = 25</span>. Since <span class="chem">2028</span> is divisible by 4, <span class="chem">i^{2028} = 1</span>. Thus <span class="chem">25 + 1 = 26</span>.</p>'
    },
    {
      id: 't1-4-q003',
      topic: 't1-4',
      level: 'ahl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.13',
      type: 'mcq',
      marks: 2,
      stem: 'Write the complex number <span class="chem">z = -2 + 2 sqrt(3)i</span> in Euler form <span class="chem">r e^{i theta}</span>, where <span class="chem">r &gt; 0</span> and <span class="chem">-pi &lt; theta &lt;= pi</span>.',
      options: [
        '<span class="chem">4 e^{i(2pi/3)}</span>',
        '<span class="chem">4 e^{-i(pi/3)}</span>',
        '<span class="chem">2 e^{i(2pi/3)}</span>',
        '<span class="chem">4 e^{i(5pi/6)}</span>'
      ],
      answer: 0,
      misconception: {
        1: 'arctan(2√3 / −2) = −π/3 lies in Quadrant IV, but z = −2 + 2√3 i has Re(z) < 0 and Im(z) > 0 (Quadrant II), so θ = π − π/3 = 2π/3.',
        2: 'The modulus is r = √((−2)² + (2√3)²) = √(4 + 12) = √16 = 4, not 2.',
        3: 'The reference angle is arctan(√3) = π/3, so in Quadrant II the argument is π − π/3 = 2π/3, not 5π/6.'
      },
      hints: [
        'Find the modulus: <span class="chem">r = sqrt((-2)^2 + (2 sqrt(3))^2) = sqrt(4 + 12) = 4</span>.',
        'Since <span class="chem">Re(z) &lt; 0</span> and <span class="chem">Im(z) &gt; 0</span>, <span class="chem">z</span> is in Quadrant II with reference angle <span class="chem">arctan(sqrt(3)) = pi/3</span>.'
      ],
      solution: '<p><span class="chem">r = sqrt(4 + 12) = 4</span>. In Quadrant II, <span class="chem">theta = pi - arctan(sqrt(3)) = pi - pi/3 = 2pi/3</span>, giving <span class="chem">z = 4 e^{i(2pi/3)}</span>.</p>'
    },
    {
      id: 't1-4-q004',
      topic: 't1-4',
      level: 'ahl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.12',
      type: 'numeric',
      marks: 4,
      stem: 'Find the real numbers <span class="chem">x</span> and <span class="chem">y</span> such that <span class="chem">(x + yi)(3 + 2i) = -1 + 8i</span>. Enter the value of <span class="chem">x + y</span>.',
      answer: 3,
      tolerance: 0.001,
      hints: [
        'Either expand <span class="chem">(3x - 2y) + (2x + 3y)i = -1 + 8i</span> and solve the simultaneous equations, or divide <span class="chem">x + yi = (-1 + 8i) / (3 + 2i)</span>.',
        'Multiplying numerator and denominator by <span class="chem">3 - 2i</span> gives <span class="chem">((-1 + 8i)(3 - 2i)) / (9 + 4) = (13 + 26i) / 13 = 1 + 2i</span>.'
      ],
      solution: '<p>Dividing both sides by <span class="chem">3 + 2i</span>: <span class="chem">x + yi = ((-1 + 8i)(3 - 2i)) / (3^2 + 2^2) = (13 + 26i) / 13 = 1 + 2i</span>. Thus <span class="chem">x = 1</span>, <span class="chem">y = 2</span>, and <span class="chem">x + y = 3</span>.</p>'
    },
    {
      id: 't1-4-q005',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.13',
      type: 'mcq',
      marks: 3,
      stem: 'Let <span class="chem">z_1 = 6 e^{i(pi/4)}</span> and <span class="chem">z_2 = 2 e^{-i(pi/3)}</span>. Which expression gives <span class="chem">z_1 / z_2</span> in polar form with principal argument in <span class="chem">(-pi, pi]</span>?',
      options: [
        '<span class="chem">3 cis(7pi/12)</span>',
        '<span class="chem">3 cis(-pi/12)</span>',
        '<span class="chem">12 cis(7pi/12)</span>',
        '<span class="chem">3 cis(-7pi/12)</span>'
      ],
      answer: 0,
      misconception: {
        1: 'When dividing z₁ by z₂, you subtract arguments: π/4 − (−π/3) = π/4 + π/3 = 7π/12. Adding them gives −π/12, which is the argument of z₁z₂.',
        2: 'When dividing complex numbers in polar form, divide the moduli (6 / 2 = 3) rather than multiplying them.',
        3: 'arg(z₁ / z₂) = arg(z₁) − arg(z₂) = π/4 − (−π/3) = +7π/12, whereas −7π/12 is arg(z₂ / z₁).'
      },
      hints: [
        'For complex division in polar/Euler form, divide the moduli and subtract the arguments: <span class="chem">|z_1 / z_2| = |z_1| / |z_2|</span> and <span class="chem">arg(z_1 / z_2) = arg(z_1) - arg(z_2)</span>.',
        'Compute <span class="chem">pi/4 - (-pi/3) = 3pi/12 + 4pi/12 = 7pi/12</span>.'
      ],
      solution: '<p><span class="chem">z_1 / z_2 = (6/2) e^{i(pi/4 - (-pi/3))} = 3 e^{i(7pi/12)} = 3 cis(7pi/12)</span>.</p>'
    },
    {
      id: 't1-4-q006',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.14',
      type: 'numeric',
      marks: 4,
      stem: 'Using De Moivre\'s theorem, evaluate <span class="chem">(1 - i)^{10}</span>. Since the result is purely imaginary of the form <span class="chem">k i</span>, enter the real value of <span class="chem">k</span>.',
      answer: -32,
      tolerance: 0.001,
      hints: [
        'Write <span class="chem">1 - i</span> in Euler form: <span class="chem">r = sqrt(1^2 + (-1)^2) = sqrt(2)</span> and <span class="chem">theta = -pi/4</span> (Quadrant IV).',
        'By De Moivre\'s theorem, <span class="chem">(1 - i)^{10} = (sqrt(2))^{10} e^{-i(10pi/4)} = 32(cos(-5pi/2) + i sin(-5pi/2))</span>.'
      ],
      solution: '<p><span class="chem">1 - i = sqrt(2) e^{-i pi/4}</span>. Raising to the 10th power gives <span class="chem">(sqrt(2))^{10} e^{-i(5pi/2)} = 32(cos(-pi/2) + i sin(-pi/2)) = -32i</span>. Therefore <span class="chem">k = -32</span>.</p>'
    },
    {
      id: 't1-4-q007',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.14',
      type: 'numeric',
      marks: 4,
      stem: 'Let <span class="chem">z = 1 - sqrt(3)i</span>. Find the <strong>smallest positive integer <span class="chem">n</span></strong> for which <span class="chem">z^n</span> is a <strong>positive real number</strong>.',
      answer: 6,
      tolerance: 0.001,
      hints: [
        'Write <span class="chem">z = 1 - sqrt(3)i</span> in polar form: <span class="chem">r = 2</span> and <span class="chem">theta = -pi/3</span>.',
        'For <span class="chem">z^n = 2^n(cos(-n pi/3) + i sin(-n pi/3))</span> to be a <em>positive</em> real number, we need <span class="chem">sin(-n pi/3) = 0</span> AND <span class="chem">cos(-n pi/3) = +1</span> (note that <span class="chem">n = 3</span> gives <span class="chem">cos(-pi) = -1 &lt; 0</span>!).'
      ],
      solution: '<p><span class="chem">z = 2 e^{-i pi/3}</span>, so <span class="chem">z^n = 2^n e^{-i n pi/3}</span>. For <span class="chem">z^n</span> to be real and positive, we require <span class="chem">-n pi/3 = 2 pi k</span> for <span class="chem">k \in \mathbb{Z}</span>. The smallest positive integer is <span class="chem">n = 6</span> (since <span class="chem">n = 3</span> gives <span class="chem">z^3 = -8 &lt; 0</span>).</p>'
    },
    {
      id: 't1-4-q008',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.12',
      type: 'numeric',
      marks: 5,
      stem: 'The polynomial <span class="chem">P(z) = z^3 + az^2 + bz - 26</span> has real coefficients <span class="chem">a, b \in \mathbb{R}</span>. Given that <span class="chem">z_1 = -2 + 3i</span> is a root of <span class="chem">P(z) = 0</span>, find the real root of <span class="chem">P(z) = 0</span>.',
      answer: 2,
      tolerance: 0.001,
      hints: [
        'Since <span class="chem">P(z)</span> has real coefficients, the complex conjugate <span class="chem">z_2 = -2 - 3i</span> is also a root.',
        'The product of the conjugate pair is <span class="chem">z_1 z_2 = (-2)^2 + 3^2 = 13</span>, so the quadratic factor is <span class="chem">z^2 + 4z + 13</span>. Compare constant terms in <span class="chem">(z^2 + 4z + 13)(z - r) = z^3 + az^2 + bz - 26</span>.'
      ],
      solution: '<p>By the Complex Conjugate Root Theorem, <span class="chem">z_2 = -2 - 3i</span> is also a root. The quadratic factor is <span class="chem">(z - z_1)(z - z_2) = z^2 + 4z + 13</span>. Since <span class="chem">P(z) = (z^2 + 4z + 13)(z - r)</span> and the constant term is <span class="chem">-13r = -26</span>, the real root is <span class="chem">r = 2</span>.</p>'
    },
    {
      id: 't1-4-q009',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.14',
      type: 'mcq',
      marks: 4,
      stem: 'Which of the following gives all four solutions to <span class="chem">z^4 = -16</span> in Euler form with <span class="chem">-pi &lt; arg(z) &lt;= pi</span>?',
      options: [
        '<span class="chem">2 e^{+- i(pi/4)}</span> and <span class="chem">2 e^{+- i(3pi/4)}</span>',
        '<span class="chem">2 e^{i(0)}, 2 e^{i(pi/2)}, 2 e^{i pi}, 2 e^{-i(pi/2)}</span>',
        '<span class="chem">4 e^{+- i(pi/4)}</span> and <span class="chem">4 e^{+- i(3pi/4)}</span>',
        '<span class="chem">2 e^{+- i(pi/6)}</span> and <span class="chem">2 e^{+- i(5pi/6)}</span>'
      ],
      answer: 0,
      misconception: {
        1: 'Those are the roots of z⁴ = +16 (where arg(16) = 0). Here w = −16 has arg(−16) = π, so the angles are (π + 2πk)/4 = ±π/4, ±3π/4.',
        2: 'The modulus of each 4th root is 16^(1/4) = 2, not 16^(1/2) = 4.',
        3: 'Dividing π + 2πk by n = 4 gives odd multiples of π/4 (±π/4, ±3π/4), not multiples of π/6.'
      },
      hints: [
        'Write <span class="chem">-16</span> in Euler form with general argument: <span class="chem">-16 = 16 e^{i(pi + 2 pi k)}</span>.',
        'Take the fourth root: <span class="chem">r = 16^{1/4} = 2</span> and <span class="chem">theta_k = (pi + 2 pi k) / 4</span> for <span class="chem">k = -2, -1, 0, 1</span>.'
      ],
      solution: '<p>Writing <span class="chem">z^4 = 16 e^{i(pi + 2pi k)}</span> gives <span class="chem">z_k = 2 e^{i(pi + 2pi k)/4}</span>. Evaluating at <span class="chem">k = 0, 1, -1, -2</span> gives <span class="chem">2 e^{+- i(pi/4)}</span> and <span class="chem">2 e^{+- i(3pi/4)}</span>.</p>'
    },
    {
      id: 't1-4-q010',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.14',
      type: 'numeric',
      marks: 4,
      stem: 'The five roots of <span class="chem">z^5 = 32i</span> form the vertices of a regular pentagon on the Argand diagram. Calculate the area of this regular pentagon to 3 significant figures.',
      answer: 9.51,
      sigfigs: 3,
      tolerance: '0.5%',
      hints: [
        'Each root has modulus <span class="chem">r = 32^{1/5} = 2</span>, so all 5 vertices lie on a circle of radius <span class="chem">R = 2</span> centered at the origin.',
        'Split the regular pentagon into 5 congruent isosceles triangles meeting at the origin, each with two sides of length <span class="chem">R = 2</span> and included angle <span class="chem">2pi / 5</span>: <span class="chem">Area = 5 × (1/2) R^2 sin(2pi / 5)</span>.'
      ],
      solution: '<p>The roots lie on a circle of radius <span class="chem">R = 32^{1/5} = 2</span> spaced by <span class="chem">2pi/5</span> radians. The pentagon consists of 5 triangles of area <span class="chem">(1/2)(2^2) sin(2pi/5)</span>, so total area <span class="chem">= 5 × 2 sin(2pi/5) = 10 sin(72^\circ) ≈ 9.51</span>.</p>'
    },
    {
      id: 't1-4-q011',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.14',
      type: 'multi',
      marks: 3,
      stem: 'Let <span class="chem">omega = e^{i(2pi/5)}</span> be a primitive fifth root of unity (<span class="chem">omega^5 = 1, omega != 1</span>). Select <strong>all</strong> statements that are true.',
      options: [
        '<span class="chem">1 + omega + omega^2 + omega^3 + omega^4 = 0</span>',
        '<span class="chem">omega^4 = omega^*</span>',
        '<span class="chem">omega^2 + omega^3 = 2 cos(4pi/5)</span>',
        '<span class="chem">Im(1 + omega + omega^2 + omega^3 + omega^4) = 1</span>'
      ],
      answer: [0, 1, 2],
      misconception: {
        3: 'Since 1 + ω + ω² + ω³ + ω⁴ = 0, both its real part and its imaginary part are 0, not 1.'
      },
      hints: [
        'Check the sum of all <span class="chem">n</span>-th roots of unity using the geometric series formula <span class="chem">(1 - omega^5)/(1 - omega)</span>.',
        'Notice that <span class="chem">omega^4 = e^{i(8pi/5)} = e^{-i(2pi/5)} = omega^*</span> and <span class="chem">omega^3 = e^{i(6pi/5)} = e^{-i(4pi/5)} = (omega^2)^*</span>.'
      ],
      solution: '<p>Since <span class="chem">omega^5 = 1</span> and <span class="chem">omega != 1</span>, <span class="chem">1 + omega + omega^2 + omega^3 + omega^4 = (1 - omega^5)/(1 - omega) = 0</span>. Also <span class="chem">omega^4 = omega^{-1} = omega^*</span>, and <span class="chem">omega^2 + omega^3 = e^{i(4pi/5)} + e^{-i(4pi/5)} = 2 cos(4pi/5)</span>.</p>'
    },
    {
      id: 't1-4-q012',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.14',
      type: 'order',
      marks: 4,
      stem: 'Arrange the steps in logical order to prove the triple-angle identity <span class="chem">cos(3 theta) = 4 cos^3(theta) - 3 cos(theta)</span> using De Moivre\'s theorem.',
      options: [
        'By De Moivre\'s theorem, <span class="chem">cos(3 theta) + i sin(3 theta) = (cos theta + i sin theta)^3</span>.',
        'Expand the right-hand side using the binomial theorem: <span class="chem">cos^3 theta + 3i cos^2 theta sin theta + 3i^2 cos theta sin^2 theta + i^3 sin^3 theta</span>.',
        'Simplify powers of <span class="chem">i</span> and equate real parts on both sides: <span class="chem">cos(3 theta) = cos^3 theta - 3 cos theta sin^2 theta</span>.',
        'Substitute the Pythagorean identity <span class="chem">sin^2 theta = 1 - cos^2 theta</span> and collect like terms to obtain <span class="chem">cos(3 theta) = 4 cos^3 theta - 3 cos theta</span>.'
      ],
      answer: [0, 1, 2, 3],
      hints: [
        'Start with the statement of De Moivre\'s theorem for <span class="chem">n = 3</span>.',
        'Next expand the cube using the binomial theorem, equate the real parts, and finally eliminate <span class="chem">sin^2 theta</span>.'
      ],
      solution: '<p>First state De Moivre\'s theorem for <span class="chem">n = 3</span>, then expand <span class="chem">(cos theta + i sin theta)^3</span> binomially, equate real parts using <span class="chem">i^2 = -1</span>, and replace <span class="chem">sin^2 theta = 1 - cos^2 theta</span>.</p>'
    },
    {
      id: 't1-4-q013',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.14',
      type: 'numeric',
      marks: 4,
      stem: 'By expanding <span class="chem">(cos theta + i sin theta)^4</span> and equating real parts, <span class="chem">cos(4 theta)</span> can be written in the form <span class="chem">A cos^4(theta) + B cos^2(theta) + C</span>. Find the value of <span class="chem">A + B + C</span>.',
      answer: 1,
      tolerance: 0.001,
      hints: [
        '<span class="chem">Re((cos theta + i sin theta)^4) = cos^4 theta - 6 cos^2 theta sin^2 theta + sin^4 theta</span>.',
        'Replace <span class="chem">sin^2 theta = 1 - cos^2 theta</span> to get <span class="chem">8 cos^4 theta - 8 cos^2 theta + 1</span> (or notice that setting <span class="chem">theta = 0</span> gives <span class="chem">cos(0) = A(1) + B(1) + C = 1</span>!).'
      ],
      solution: '<p><span class="chem">cos(4 theta) = cos^4 theta - 6 cos^2 theta(1 - cos^2 theta) + (1 - cos^2 theta)^2 = 8 cos^4 theta - 8 cos^2 theta + 1</span>. Thus <span class="chem">A = 8, B = -8, C = 1</span> and <span class="chem">A + B + C = 1</span>.</p>'
    },
    {
      id: 't1-4-q014',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.12',
      type: 'mcq',
      marks: 3,
      stem: 'A real quartic polynomial <span class="chem">P(z)</span> has roots <span class="chem">1 + 2i</span> and <span class="chem">3 - i</span>, and leading coefficient <span class="chem">1</span>. What is the constant term of <span class="chem">P(z)</span>?',
      options: [
        '<span class="chem">50</span>',
        '<span class="chem">10</span>',
        '<span class="chem">-50</span>',
        '<span class="chem">15</span>'
      ],
      answer: 0,
      misconception: {
        1: '10 is the modulus squared of only one conjugate pair (3² + (−1)² = 10), forgetting to multiply by the other pair (1² + 2² = 5).',
        2: 'The product of each complex conjugate pair (z − z₁)(z − z₁*) = |z₁|² is always positive, so the constant term is (+5)(+10) = +50.',
        3: 'You added |1 + 2i|² + |3 − i|² = 5 + 10 = 15 instead of multiplying the two quadratic factors.'
      },
      hints: [
        'Since <span class="chem">P(z)</span> has real coefficients, its four roots are <span class="chem">1 +- 2i</span> and <span class="chem">3 +- i</span>.',
        'The constant term of the monic quartic is the product of all four roots: <span class="chem">|1 + 2i|^2 × |3 - i|^2</span>.'
      ],
      solution: '<p>The two quadratic factors are <span class="chem">(z^2 - 2z + 5)</span> and <span class="chem">(z^2 - 6z + 10)</span>. Multiplying their constant terms gives <span class="chem">5 × 10 = 50</span>.</p>'
    },
    {
      id: 't1-4-q015',
      topic: 't1-4',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 3 (Investigation)',
      syllabus: 'AHL 1.14',
      type: 'numeric',
      marks: 5,
      stem: 'Let <span class="chem">z = cos theta + i sin theta</span>. Using <span class="chem">2 cos theta = z + z^{-1}</span>, it can be shown that <span class="chem">cos^4 theta = (1/8) cos(4 theta) + (1/2) cos(2 theta) + K</span>, where <span class="chem">K</span> is a constant. State the exact value of <span class="chem">K</span>.',
      answer: 0.375,
      answerDisplay: '3/8 (0.375)',
      tolerance: 0.001,
      hints: [
        'Expand <span class="chem">(2 cos theta)^4 = (z + z^{-1})^4 = z^4 + 4z^2 + 6 + 4z^{-2} + z^{-4}</span>.',
        'Group symmetric pairs: <span class="chem">16 cos^4 theta = (z^4 + z^{-4}) + 4(z^2 + z^{-2}) + 6 = 2 cos(4 theta) + 8 cos(2 theta) + 6</span>, then divide by <span class="chem">16</span>.'
      ],
      solution: '<p><span class="chem">16 cos^4 theta = (z + z^{-1})^4 = (z^4 + z^{-4}) + 4(z^2 + z^{-2}) + 6 = 2 cos(4 theta) + 8 cos(2 theta) + 6</span>. Dividing both sides by 16 gives <span class="chem">K = 6/16 = 3/8 = 0.375</span>.</p>'
    },
    {
      id: 't1-4-q016',
      topic: 't1-4',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 3 (Investigation)',
      syllabus: 'AHL 1.14',
      type: 'numeric',
      marks: 5,
      stem: 'Let <span class="chem">omega = e^{i(2pi/5)}</span>. By considering the real part of <span class="chem">1 + omega + omega^2 + omega^3 + omega^4 = 0</span> and noting that <span class="chem">cos(8pi/5) = cos(2pi/5)</span> and <span class="chem">cos(6pi/5) = cos(4pi/5)</span>, find the exact value of <span class="chem">cos(2pi/5) + cos(4pi/5)</span>.',
      answer: -0.5,
      answerDisplay: '−1/2 (−0.5)',
      tolerance: 0.001,
      hints: [
        'Take the real part of <span class="chem">1 + e^{i(2pi/5)} + e^{i(4pi/5)} + e^{i(6pi/5)} + e^{i(8pi/5)} = 0</span>.',
        'Since <span class="chem">cos(8pi/5) = cos(2pi/5)</span> and <span class="chem">cos(6pi/5) = cos(4pi/5)</span>, we get <span class="chem">1 + 2 cos(2pi/5) + 2 cos(4pi/5) = 0</span>.'
      ],
      solution: '<p>Equating the real part of <span class="chem">1 + omega + omega^2 + omega^3 + omega^4 = 0</span> to zero gives <span class="chem">1 + 2 cos(2pi/5) + 2 cos(4pi/5) = 0</span>, hence <span class="chem">cos(2pi/5) + cos(4pi/5) = -1/2 = -0.5</span>.</p>'
    },
    {
      id: 't1-4-q017',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.13',
      type: 'short',
      marks: 6,
      stem: 'Let <span class="chem">z_1 = 2 + 2i</span> and <span class="chem">z_2 = -1 + sqrt(3)i</span>.<br>(a) Express <span class="chem">z_1</span> and <span class="chem">z_2</span> in the form <span class="chem">r e^{i theta}</span>, where <span class="chem">r &gt; 0</span> and <span class="chem">-pi &lt; theta &lt;= pi</span>. [3 marks]<br>(b) Hence find the exact value of <span class="chem">(z_1)^4 / (z_2)^3</span> in Cartesian form <span class="chem">a + bi</span>. [3 marks]',
      answer: '<p>(a) <span class="chem">z_1 = 2 sqrt(2) e^{i(pi/4)}</span> and <span class="chem">z_2 = 2 e^{i(2pi/3)}</span>.<br>(b) <span class="chem">(z_1)^4 / (z_2)^3 = (64 e^{i pi}) / (8 e^{i(2pi)}) = 8 e^{-i pi} = -8</span>.</p>',
      markscheme: [
        'A1: Correct Euler form z₁ = 2√2 e^{iπ/4} (or √8 e^{iπ/4}).',
        'M1: Correct modulus |z₂| = 2 and Quadrant II angle calculation π − π/3.',
        'A1: Correct Euler form z₂ = 2 e^{i(2π/3)}.',
        'M1: Applies De Moivre\'s theorem to numerator and denominator: (2√2)⁴ e^{iπ} = 64 e^{iπ} and 2³ e^{i(2π)} = 8 e^{i(2π)}.',
        'M1: Divides moduli (64 / 8 = 8) and subtracts arguments (π − 2π = −π).',
        'A1: Evaluates 8(cos(−π) + i sin(−π)) = −8 (or −8 + 0i).'
      ],
      hints: [
        'For part (a), remember <span class="chem">z_2 = -1 + sqrt(3)i</span> lies in Quadrant II, so <span class="chem">arg(z_2) = pi - pi/3 = 2pi/3</span>.',
        'For part (b), use De Moivre\'s theorem before dividing: <span class="chem">(2 sqrt(2))^4 = 64</span> and <span class="chem">2^3 = 8</span>.'
      ],
      solution: '<p>(a) <span class="chem">|z_1| = sqrt(4 + 4) = 2 sqrt(2)</span>, <span class="chem">arg(z_1) = pi/4 =&gt; z_1 = 2 sqrt(2) e^{i(pi/4)}</span>. <span class="chem">|z_2| = sqrt(1 + 3) = 2</span>, <span class="chem">arg(z_2) = 2pi/3 =&gt; z_2 = 2 e^{i(2pi/3)}</span>.<br>(b) <span class="chem">z_1^4 / z_2^3 = (64 e^{i pi}) / (8 e^{i(2pi)}) = 8 e^{-i pi} = -8</span>.</p>'
    },
    {
      id: 't1-4-q018',
      topic: 't1-4',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.14',
      type: 'short',
      marks: 7,
      stem: 'Consider the equation <span class="chem">z^4 + 4z^2 + 16 = 0</span>, where <span class="chem">z \in \mathbb{C}</span>.<br>(a) By letting <span class="chem">w = z^2</span>, find the two possible values of <span class="chem">w</span> in Euler form <span class="chem">r e^{i theta}</span>. [3 marks]<br>(b) Hence find all four roots of <span class="chem">z^4 + 4z^2 + 16 = 0</span> in Cartesian form <span class="chem">a + bi</span>, and factorize <span class="chem">z^4 + 4z^2 + 16</span> into the product of two real quadratic factors. [4 marks]',
      answer: '<p>(a) <span class="chem">w = -2 +- 2 sqrt(3)i = 4 e^{+- i(2pi/3)}</span>.<br>(b) The four roots are <span class="chem">z = +- (1 + sqrt(3)i)</span> and <span class="chem">z = +- (1 - sqrt(3)i)</span>. Grouping conjugate pairs gives <span class="chem">z^4 + 4z^2 + 16 = (z^2 - 2z + 4)(z^2 + 2z + 4)</span>.</p>',
      markscheme: [
        'M1: Uses the quadratic formula on w² + 4w + 16 = 0 to get w = (−4 ± √(16 − 64))/2 = −2 ± 2√3 i.',
        'A1: Correctly finds modulus |w| = √(4 + 12) = 4.',
        'A1: Writes w = 4 e^{i(2π/3)} and w = 4 e^{−i(2π/3)}.',
        'M1: Takes square roots of w to get r = 2 and arguments ±π/3 and ±(π/3 − π) = ±2π/3.',
        'A1: Converts the four roots to Cartesian form: 1 ± √3 i and −1 ± √3 i.',
        'M1: Pairs complex conjugates (z − (1 + √3 i))(z − (1 − √3 i)) and (z − (−1 + √3 i))(z − (−1 − √3 i)).',
        'A1: Obtains (z² − 2z + 4)(z² + 2z + 4).'
      ],
      hints: [
        'Solve <span class="chem">w^2 + 4w + 16 = 0</span> using the quadratic formula to get <span class="chem">w = -2 +- 2 sqrt(3)i</span>.',
        'Take the square roots of <span class="chem">4 e^{+- i(2pi/3)}</span> to get four roots of modulus <span class="chem">2</span> and arguments <span class="chem">+- pi/3</span> and <span class="chem">+- 2pi/3</span>.'
      ],
      solution: '<p>(a) <span class="chem">w = (-4 +- sqrt(-48))/2 = -2 +- 2 sqrt(3)i = 4 e^{+- i(2pi/3)}</span>.<br>(b) Taking square roots gives <span class="chem">z = 2 e^{+- i(pi/3)} = 1 +- sqrt(3)i</span> and <span class="chem">z = 2 e^{+- i(2pi/3)} = -1 +- sqrt(3)i</span>. Pairing conjugates gives <span class="chem">(z^2 - 2z + 4)(z^2 + 2z + 4)</span>.</p>'
    }
  ]);
})();
