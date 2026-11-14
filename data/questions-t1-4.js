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
      stem: 'The real numbers <span class="chem">x</span> and <span class="chem">y</span> satisfy <span class="chem">(x + yi)(3 + 2i) = -1 + 8i</span>. Find the value of <span class="chem">y</span>.',
      answer: 2,
      tolerance: 0.001,
      hints: [
        'Either expand <span class="chem">(3x - 2y) + (2x + 3y)i = -1 + 8i</span> and solve the simultaneous equations, or divide <span class="chem">x + yi = (-1 + 8i) / (3 + 2i)</span>.',
        'Multiplying numerator and denominator by <span class="chem">3 - 2i</span> gives <span class="chem">((-1 + 8i)(3 - 2i)) / (9 + 4) = (13 + 26i) / 13 = 1 + 2i</span>.'
      ],
      solution: '<p>Dividing both sides by <span class="chem">3 + 2i</span>: <span class="chem">x + yi = ((-1 + 8i)(3 - 2i)) / (3^2 + 2^2) = (13 + 26i) / 13 = 1 + 2i</span>. Thus <span class="chem">x = 1</span> and <span class="chem">y = 2</span>.</p>'
    },
    {
      id: 't1-4-q005',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.13',
      type: 'mcq',
      marks: 2,
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
      solution: '<p><span class="chem">z = 2 e^{-i pi/3}</span>, so <span class="chem">z^n = 2^n e^{-i n pi/3}</span>. For <span class="chem">z^n</span> to be real and positive, we require <span class="chem">-n pi/3 = 2 pi k</span> for <span class="chem">k \\in \\mathbb{Z}</span>. The smallest positive integer is <span class="chem">n = 6</span> (since <span class="chem">n = 3</span> gives <span class="chem">z^3 = -8 &lt; 0</span>).</p>'
    },
    {
      id: 't1-4-q008',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.14',
      type: 'numeric',
      marks: 5,
      stem: 'The polynomial <span class="chem">P(z) = z^3 + az^2 + bz - 26</span> has real coefficients <span class="chem">a, b \\in \\mathbb{R}</span>. Given that <span class="chem">z_1 = -2 + 3i</span> is a root of <span class="chem">P(z) = 0</span>, find the real root of <span class="chem">P(z) = 0</span>.',
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
      marks: 2,
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
        2: 'The modulus of each 4th root is 16<sup>1/4</sup> = 2, not 16<sup>1/2</sup> = 4.',
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
      answer: 9.5105651630,
      sigfigs: 3,
      tolerance: '0.5%',
      hints: [
        'Each root has modulus <span class="chem">r = 32^{1/5} = 2</span>, so all 5 vertices lie on a circle of radius <span class="chem">R = 2</span> centered at the origin.',
        'Split the regular pentagon into 5 congruent isosceles triangles meeting at the origin, each with two sides of length <span class="chem">R = 2</span> and included angle <span class="chem">2pi / 5</span>: <span class="chem">Area = 5 × (1/2) R^2 sin(2pi / 5)</span>.'
      ],
      solution: '<p>The roots lie on a circle of radius <span class="chem">R = 32^{1/5} = 2</span> spaced by <span class="chem">2pi/5</span> radians. The pentagon consists of 5 triangles of area <span class="chem">(1/2)(2^2) sin(2pi/5)</span>, so total area <span class="chem">= 5 × 2 sin(2pi/5) = 10 sin(72^\\circ) ≈ 9.51</span>.</p>'
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
      stem: 'By expanding <span class="chem">(cos theta + i sin theta)^4</span> and equating real parts, <span class="chem">cos(4 theta)</span> can be written in the form <span class="chem">A cos^4(theta) + B cos^2(theta) + C</span>. Find the value of <span class="chem">B</span>.',
      answer: -8,
      tolerance: 0.001,
      hints: [
        '<span class="chem">Re((cos theta + i sin theta)^4) = cos^4 theta - 6 cos^2 theta sin^2 theta + sin^4 theta</span>.',
        'Replace <span class="chem">sin^2 theta = 1 - cos^2 theta</span> and <span class="chem">sin^4 theta = (1 - cos^2 theta)^2</span>, then collect the <span class="chem">cos^2 theta</span> terms.'
      ],
      solution: '<p><span class="chem">cos(4 theta) = cos^4 theta - 6 cos^2 theta(1 - cos^2 theta) + (1 - cos^2 theta)^2 = 8 cos^4 theta - 8 cos^2 theta + 1</span>. Thus <span class="chem">A = 8</span>, <span class="chem">B = -8</span> and <span class="chem">C = 1</span>.</p>'
    },
    {
      id: 't1-4-q014',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.14',
      type: 'mcq',
      marks: 2,
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
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.14',
      type: 'numeric',
      marks: 5,
      stem: 'Let <span class="chem">z = cos theta + i sin theta</span>. Using <span class="chem">2 cos theta = z + z^{-1}</span>, it can be shown that <span class="chem">cos^4 theta = (1/8) cos(4 theta) + (1/2) cos(2 theta) + K</span>, where <span class="chem">K</span> is a constant. Find the exact value of <span class="chem">K</span>.',
      answer: 0.375,
      answerDisplay: '3/8 (0.375)',
      exact: true,
      answerInput: '3/8',
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
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.14',
      type: 'numeric',
      marks: 2,
      stem: 'Let <span class="chem">omega = e^{i(2pi/5)}</span>. By considering the real part of <span class="chem">1 + omega + omega^2 + omega^3 + omega^4 = 0</span> and noting that <span class="chem">cos(8pi/5) = cos(2pi/5)</span> and <span class="chem">cos(6pi/5) = cos(4pi/5)</span>, find the exact value of <span class="chem">cos(2pi/5) + cos(4pi/5)</span>.',
      answer: -0.5,
      answerDisplay: '−1/2 (−0.5)',
      exact: true,
      answerInput: '-1/2',
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
        'A1: Correct Euler form z₁ = 2√2 e<sup>iπ/4</sup> (or √8 e<sup>iπ/4</sup>).',
        'M1: Correct modulus |z₂| = 2 and Quadrant II angle calculation π − π/3.',
        'A1: Correct Euler form z₂ = 2 e<sup>i(2π/3)</sup>.',
        'M1: Applies De Moivre\'s theorem to numerator and denominator: (2√2)⁴ e<sup>iπ</sup> = 64 e<sup>iπ</sup> and 2³ e<sup>i(2π)</sup> = 8 e<sup>i(2π)</sup>.',
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
      stem: 'Consider the equation <span class="chem">z^4 + 4z^2 + 16 = 0</span>, where <span class="chem">z \\in \\mathbb{C}</span>.<br>(a) By letting <span class="chem">w = z^2</span>, find the two possible values of <span class="chem">w</span> in Euler form <span class="chem">r e^{i theta}</span>. [3 marks]<br>(b) Hence find all four roots of <span class="chem">z^4 + 4z^2 + 16 = 0</span> in Cartesian form <span class="chem">a + bi</span>, and factorize <span class="chem">z^4 + 4z^2 + 16</span> into the product of two real quadratic factors. [4 marks]',
      answer: '<p>(a) <span class="chem">w = -2 +- 2 sqrt(3)i = 4 e^{+- i(2pi/3)}</span>.<br>(b) The four roots are <span class="chem">z = +- (1 + sqrt(3)i)</span> and <span class="chem">z = +- (1 - sqrt(3)i)</span>. Grouping conjugate pairs gives <span class="chem">z^4 + 4z^2 + 16 = (z^2 - 2z + 4)(z^2 + 2z + 4)</span>.</p>',
      markscheme: [
        'M1: Uses the quadratic formula on w² + 4w + 16 = 0 to get w = (−4 ± √(16 − 64))/2 = −2 ± 2√3 i.',
        'A1: Correctly finds modulus |w| = √(4 + 12) = 4.',
        'A1: Writes w = 4 e<sup>i(2π/3)</sup> and w = 4 e<sup>−i(2π/3)</sup>.',
        'M1: Takes square roots of w to get r = 2 and arguments ±π/3 and ±(π/3 − π) = ±2π/3.',
        'A1: Converts the four roots to Cartesian form: 1 ± √3 i and −1 ± √3 i.',
        'M1: Pairs complex conjugates (z − (1 + √3 i))(z − (1 − √3 i)) and (z − (−1 + √3 i))(z − (−1 − √3 i)).',
        'A1: Obtains (z² − 2z + 4)(z² + 2z + 4).'
      ],
      hints: [
        'Decode: a quartic with only even powers is a quadratic in disguise. Solve for <span class="chem">w = z^2</span> first, take square roots in Euler form, then multiply conjugate pairs back together to get real quadratic factors.',
        'Solve <span class="chem">w^2 + 4w + 16 = 0</span> using the quadratic formula to get <span class="chem">w = -2 +- 2 sqrt(3)i</span>.',
        'Take the square roots of <span class="chem">4 e^{+- i(2pi/3)}</span> to get four roots of modulus <span class="chem">2</span> and arguments <span class="chem">+- pi/3</span> and <span class="chem">+- 2pi/3</span>.'
      ],
      solution: '<p><strong>Decode.</strong> The quartic is a quadratic in <span class="chem">w = z^2</span>.<br>(a) <span class="chem">w = (-4 +- sqrt(-48))/2 = -2 +- 2 sqrt(3)i = 4 e^{+- i(2pi/3)}</span>.<br>(b) Taking square roots gives <span class="chem">z = 2 e^{+- i(pi/3)} = 1 +- sqrt(3)i</span> and <span class="chem">z = 2 e^{+- i(2pi/3)} = -1 +- sqrt(3)i</span>. Pairing conjugates gives <span class="chem">(z^2 - 2z + 4)(z^2 + 2z + 4)</span>.</p>'
    },
    {
      id: 't1-4-q019',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.14',
      type: 'order',
      marks: 5,
      stem: 'Arrange the steps in logical order to prove by mathematical induction that <span class="chem">(cos theta + i sin theta)^n = cos(n theta) + i sin(n theta)</span> for all <span class="chem">n \\in \\mathbb{Z}^+</span>.',
      options: [
        'Base case: for <span class="chem">n = 1</span>, both sides equal <span class="chem">cos theta + i sin theta</span>, so <span class="chem">P(1)</span> is true.',
        'Assume <span class="chem">(cos theta + i sin theta)^k = cos(k theta) + i sin(k theta)</span> for some <span class="chem">k \\in \\mathbb{Z}^+</span>.',
        'Write <span class="chem">(cos theta + i sin theta)^{k+1} = (cos(k theta) + i sin(k theta))(cos theta + i sin theta)</span> and expand the brackets.',
        'Use the compound angle identities for <span class="chem">cos(A + B)</span> and <span class="chem">sin(A + B)</span> to obtain <span class="chem">cos((k + 1)theta) + i sin((k + 1)theta)</span>, so <span class="chem">P(k + 1)</span> is true.',
        'Since <span class="chem">P(1)</span> is true and <span class="chem">P(k)</span> being true implies <span class="chem">P(k + 1)</span> is true, by the principle of mathematical induction the result holds for all <span class="chem">n \\in \\mathbb{Z}^+</span>.'
      ],
      answer: [0, 1, 2, 3, 4],
      hints: [
        'An induction proof always runs: base case, inductive hypothesis, inductive step, conclusion.',
        'In the inductive step, the real part of the product is <span class="chem">cos(k theta) cos theta - sin(k theta) sin theta = cos((k + 1)theta)</span>.'
      ],
      solution: '<p>Prove <span class="chem">P(1)</span>, assume <span class="chem">P(k)</span> for some <span class="chem">k \\in \\mathbb{Z}^+</span>, then write the <span class="chem">(k + 1)</span>-th power as the <span class="chem">k</span>-th power times <span class="chem">cos theta + i sin theta</span>. Expanding gives <span class="chem">(cos(k theta) cos theta - sin(k theta) sin theta) + i(sin(k theta) cos theta + cos(k theta) sin theta) = cos((k + 1)theta) + i sin((k + 1)theta)</span>. Finish with the conclusion sentence.</p>'
    },
    {
      id: 't1-4-q020',
      topic: 't1-4',
      level: 'ahl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.12',
      type: 'numeric',
      marks: 3,
      stem: 'Solve the equation <span class="chem">z^2 - 6z + 34 = 0</span>, where <span class="chem">z ∈ ℂ</span>, giving both roots in the form <span class="chem">a + bi</span>. Enter the value of <span class="chem">b</span> for the root with <span class="chem">b &gt; 0</span>.',
      answer: 5,
      hints: [
        'The discriminant is <span class="chem">Delta = (-6)^2 - 4(1)(34) = 36 - 136 = -100</span>, which is negative, so the roots are a complex conjugate pair.',
        'Use <span class="chem">sqrt(-100) = 10i</span> in the quadratic formula: <span class="chem">z = (6 +- 10i) / 2</span>.'
      ],
      solution: '<p><span class="chem">Delta = 36 - 136 = -100 &lt; 0</span>, so <span class="chem">z = (6 +- sqrt(-100)) / 2 = (6 +- 10i) / 2 = 3 +- 5i</span>. The root with positive imaginary part is <span class="chem">3 + 5i</span>, so <span class="chem">b = 5</span>.</p>'
    },
    {
      id: 't1-4-q021',
      topic: 't1-4',
      level: 'ahl',
      tier: 'foundation',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.12',
      type: 'numeric',
      marks: 2,
      stem: 'Let <span class="chem">z = (3 + 2i)^5 / (1 - 4i)^3</span>. Use your GDC in complex mode to find <span class="chem">Re(z)</span>, giving your answer correct to 3 significant figures.',
      answer: 7.0024424995,
      sigfigs: 3,
      hints: [
        'Switch the GDC to complex (a + bi) mode and type the whole expression with brackets around each base: <span class="chem">(3 + 2i)^5 ÷ (1 - 4i)^3</span>.',
        'The GDC returns <span class="chem">z ≈ 7.0024 + 5.1516i</span>. The real part is the number without <span class="chem">i</span>.'
      ],
      solution: '<p>On the GDC in complex mode, <span class="chem">(3 + 2i)^5 / (1 - 4i)^3 ≈ 7.0024 + 5.1516i</span>. So <span class="chem">Re(z) ≈ 7.00</span> (3 s.f.).</p>'
    },
    {
      id: 't1-4-q022',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.12',
      type: 'short',
      marks: 6,
      stem: 'The complex number <span class="chem">z</span> satisfies <span class="chem">2z + 3z^* = 10 - 4i</span>.<br>(a) Find <span class="chem">z</span> in the form <span class="chem">a + bi</span>, where <span class="chem">a, b ∈ ℝ</span>. [3 marks]<br>(b) Hence find <span class="chem">z / z^*</span> in the form <span class="chem">p + qi</span>, where <span class="chem">p, q ∈ ℚ</span>. [3 marks]',
      answer: '<p>(a) <span class="chem">z = 2 + 4i</span>.<br>(b) <span class="chem">z / z^* = -3/5 + (4/5)i</span>.</p>',
      markscheme: [
        'M1: Substitutes z = a + bi and z* = a − bi: 2(a + bi) + 3(a − bi) = 10 − 4i.',
        'M1: Collects terms to 5a − bi = 10 − 4i and equates real and imaginary parts: 5a = 10 and −b = −4.',
        'A1: z = 2 + 4i.',
        'M1: Multiplies numerator and denominator of (2 + 4i)/(2 − 4i) by 2 + 4i.',
        'A1: Obtains (2 + 4i)²/20 = (−12 + 16i)/20.',
        'A1: z/z* = −3/5 + (4/5)i.'
      ],
      hints: [
        'Write <span class="chem">z = a + bi</span>, so <span class="chem">z^* = a - bi</span>. Substitute both and collect the real terms and the imaginary terms.',
        'You should get <span class="chem">5a - bi = 10 - 4i</span>. For (b), multiply top and bottom of <span class="chem">z / z^*</span> by <span class="chem">z</span> and use <span class="chem">z z^* = |z|^2</span>.'
      ],
      solution: '<p>(a) With <span class="chem">z = a + bi</span>: <span class="chem">2a + 2bi + 3a - 3bi = 5a - bi = 10 - 4i</span>. Equating parts gives <span class="chem">a = 2</span> and <span class="chem">b = 4</span>, so <span class="chem">z = 2 + 4i</span>.<br>(b) <span class="chem">z / z^* = z^2 / (z z^*) = (2 + 4i)^2 / 20 = (4 + 16i - 16) / 20 = (-12 + 16i) / 20 = -3/5 + (4/5)i</span>.</p>'
    },
    {
      id: 't1-4-q023',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.13',
      type: 'numeric',
      marks: 4,
      stem: 'Let <span class="chem">z = sqrt(3) - i</span> and <span class="chem">w = -1 - i</span>. Find the exact value of the principal argument <span class="chem">arg(z^2 w)</span>, where <span class="chem">-pi &lt; arg(z^2 w) &lt;= pi</span>.',
      answer: 2.8797932658,
      exact: true,
      answerInput: '11*pi/12',
      answerDisplay: '11π/12',
      hints: [
        'Find each argument separately: <span class="chem">z</span> is in Quadrant IV and <span class="chem">w</span> is in Quadrant III.',
        '<span class="chem">arg(z) = -pi/6</span> and <span class="chem">arg(w) = -3pi/4</span>. Then <span class="chem">arg(z^2 w) = 2 arg(z) + arg(w)</span>, but check whether the total lies in <span class="chem">(-pi, pi]</span>.'
      ],
      solution: '<p><span class="chem">arg(z) = -pi/6</span> and <span class="chem">arg(w) = -3pi/4</span>. Arguments add under multiplication, so <span class="chem">arg(z^2 w) = 2(-pi/6) + (-3pi/4) = -13pi/12</span> up to a multiple of <span class="chem">2pi</span>. This is less than <span class="chem">-pi</span>, so add <span class="chem">2pi</span>: the principal argument is <span class="chem">11pi/12</span>. (Check: <span class="chem">z^2 w = (-2 - 2 sqrt(3)) + (2 sqrt(3) - 2)i</span> is in Quadrant II.)</p>'
    },
    {
      id: 't1-4-q024',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.13',
      type: 'short',
      marks: 6,
      stem: 'On an Argand diagram, the points <span class="chem">O</span>, <span class="chem">A</span> and <span class="chem">B</span> represent <span class="chem">0</span>, <span class="chem">z = 3 + i</span> and <span class="chem">w = (1 + i)z</span>.<br>(a) Find <span class="chem">w</span> in the form <span class="chem">a + bi</span>. [2 marks]<br>(b) By writing <span class="chem">1 + i</span> in modulus-argument form, describe fully the geometric transformation that maps <span class="chem">A</span> to <span class="chem">B</span>. [2 marks]<br>(c) Hence find the exact area of triangle <span class="chem">OAB</span>. [2 marks]',
      answer: '<p>(a) <span class="chem">w = 2 + 4i</span>.<br>(b) <span class="chem">1 + i = sqrt(2) cis(pi/4)</span>: an anticlockwise rotation about <span class="chem">O</span> through <span class="chem">pi/4</span> combined with an enlargement, centre <span class="chem">O</span>, scale factor <span class="chem">sqrt(2)</span>.<br>(c) Area <span class="chem">= 5</span>.</p>',
      markscheme: [
        'M1: Expands (1 + i)(3 + i) = 3 + i + 3i + i².',
        'A1: w = 2 + 4i.',
        'A1: 1 + i = √2 cis(π/4) (or √2 e<sup>iπ/4</sup>).',
        'A1: Rotation anticlockwise through π/4 about O and enlargement with scale factor √2, centre O.',
        'M1: Uses area = ½ |z| |w| sin(∠AOB) with |z| = √10, |w| = √20 and ∠AOB = π/4.',
        'A1: Area = 5.'
      ],
      hints: [
        'Expand the brackets and use <span class="chem">i^2 = -1</span>.',
        'Multiplying by <span class="chem">r cis(alpha)</span> scales every modulus by <span class="chem">r</span> and adds <span class="chem">alpha</span> to every argument. So the angle <span class="chem">AOB</span> is <span class="chem">alpha</span> and <span class="chem">OB = r × OA</span>.'
      ],
      solution: '<p>(a) <span class="chem">w = (1 + i)(3 + i) = 3 + i + 3i - 1 = 2 + 4i</span>.<br>(b) <span class="chem">1 + i = sqrt(2) cis(pi/4)</span>, so multiplying by it rotates <span class="chem">A</span> anticlockwise about <span class="chem">O</span> through <span class="chem">pi/4</span> and multiplies its distance from <span class="chem">O</span> by <span class="chem">sqrt(2)</span>.<br>(c) <span class="chem">OA = sqrt(10)</span>, <span class="chem">OB = sqrt(2) × sqrt(10) = sqrt(20)</span> and angle <span class="chem">AOB = pi/4</span>, so area <span class="chem">= (1/2)(sqrt(10))(sqrt(20)) sin(pi/4) = (1/2)(10 sqrt(2))(sqrt(2)/2) = 5</span>.</p>'
    },
    {
      id: 't1-4-q025',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.14',
      type: 'numeric',
      marks: 4,
      stem: 'Find the value of <span class="chem">(1 + sqrt(3)i)^9 + (1 - sqrt(3)i)^9</span>.',
      answer: -1024,
      hints: [
        'Write <span class="chem">1 + sqrt(3)i = 2 e^{i pi/3}</span>. The second number is its conjugate, <span class="chem">2 e^{-i pi/3}</span>.',
        'By De Moivre, the two ninth powers are <span class="chem">2^9 e^{+- 3 pi i}</span>. The sum of a number and its conjugate is twice its real part.'
      ],
      solution: '<p><span class="chem">1 +- sqrt(3)i = 2 e^{+- i pi/3}</span>. By De Moivre\'s theorem, <span class="chem">(1 +- sqrt(3)i)^9 = 512 e^{+- 3 pi i} = 512(cos(3pi) +- i sin(3pi)) = -512</span>. The sum is <span class="chem">-512 + (-512) = -1024</span>.</p>'
    },
    {
      id: 't1-4-q026',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.14',
      type: 'short',
      marks: 7,
      stem: '(a) Find the three solutions of <span class="chem">z^3 = 8i</span>, giving your answers in the form <span class="chem">r e^{i theta}</span>, where <span class="chem">r &gt; 0</span> and <span class="chem">-pi &lt; theta &lt;= pi</span>. [3 marks]<br>(b) Express each solution in the form <span class="chem">a + bi</span>. [2 marks]<br>(c) The three solutions are the vertices of a triangle on the Argand diagram. Find the exact area of this triangle. [2 marks]',
      answer: '<p>(a) <span class="chem">z = 2 e^{i pi/6}</span>, <span class="chem">2 e^{i 5pi/6}</span>, <span class="chem">2 e^{-i pi/2}</span>.<br>(b) <span class="chem">sqrt(3) + i</span>, <span class="chem">-sqrt(3) + i</span>, <span class="chem">-2i</span>.<br>(c) Area <span class="chem">= 3 sqrt(3)</span>.</p>',
      markscheme: [
        'M1: Writes 8i = 8 e<sup>i(π/2 + 2πk)</sup>.',
        'A1: Modulus 8<sup>1/3</sup> = 2 and arguments (π/2 + 2πk)/3.',
        'A1: All three principal arguments: π/6, 5π/6, −π/2.',
        'A1: √3 + i and −√3 + i.',
        'A1: −2i.',
        'M1: Valid area method, e.g. base 2√3 (between √3 + i and −√3 + i) and height 3, or 3 × ½ × 2² × sin(2π/3).',
        'A1: Area = 3√3.'
      ],
      hints: [
        'Write <span class="chem">8i = 8 e^{i(pi/2 + 2 pi k)}</span> and take the cube root of the modulus and divide the argument by 3.',
        'The three roots are spaced <span class="chem">2pi/3</span> apart on a circle of radius 2. For the area, two of the roots have the same imaginary part, which gives an easy base and height.'
      ],
      solution: '<p>(a) <span class="chem">8i = 8 e^{i(pi/2 + 2 pi k)}</span>, so <span class="chem">z = 2 e^{i(pi/6 + 2 pi k / 3)}</span>. For <span class="chem">k = 0, 1, -1</span>: arguments <span class="chem">pi/6</span>, <span class="chem">5pi/6</span>, <span class="chem">-pi/2</span>.<br>(b) <span class="chem">2 cis(pi/6) = sqrt(3) + i</span>, <span class="chem">2 cis(5pi/6) = -sqrt(3) + i</span>, <span class="chem">2 cis(-pi/2) = -2i</span>.<br>(c) The base from <span class="chem">-sqrt(3) + i</span> to <span class="chem">sqrt(3) + i</span> has length <span class="chem">2 sqrt(3)</span>; the third vertex <span class="chem">-2i</span> is <span class="chem">3</span> units below it. Area <span class="chem">= (1/2)(2 sqrt(3))(3) = 3 sqrt(3)</span>.</p>'
    },
    {
      id: 't1-4-q027',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.14',
      type: 'short',
      marks: 6,
      stem: 'Let <span class="chem">P(z) = z^4 - 4z^3 + 14z^2 - 36z + 45</span>. You are given that <span class="chem">3i</span> is a root of <span class="chem">P(z) = 0</span>.<br>(a) Write down another root of <span class="chem">P(z) = 0</span>, and state why it must be a root. [2 marks]<br>(b) Find the other two roots of <span class="chem">P(z) = 0</span>. [4 marks]',
      answer: '<p>(a) <span class="chem">-3i</span>, because <span class="chem">P</span> has real coefficients, so non-real roots occur in conjugate pairs.<br>(b) <span class="chem">P(z) = (z^2 + 9)(z^2 - 4z + 5)</span>, so the other roots are <span class="chem">z = 2 +- i</span>.</p>',
      markscheme: [
        'A1: −3i is a root.',
        'R1: P(z) has real coefficients, so the complex conjugate of a root is also a root.',
        'M1: Uses the quadratic factor (z − 3i)(z + 3i) = z² + 9.',
        'M1: Divides, or compares coefficients in (z² + 9)(z² + bz + c), to find the other factor.',
        'A1: z² − 4z + 5.',
        'A1: z = 2 + i and z = 2 − i.'
      ],
      hints: [
        'Real coefficients force non-real roots to come in conjugate pairs.',
        'Multiply <span class="chem">(z - 3i)(z + 3i) = z^2 + 9</span>, then find the quadratic <span class="chem">z^2 + bz + c</span> with <span class="chem">(z^2 + 9)(z^2 + bz + c) = P(z)</span>: compare the <span class="chem">z^3</span> and constant terms.'
      ],
      solution: '<p>(a) <span class="chem">P</span> has real coefficients, so <span class="chem">(3i)^* = -3i</span> is also a root.<br>(b) <span class="chem">(z - 3i)(z + 3i) = z^2 + 9</span>. Write <span class="chem">P(z) = (z^2 + 9)(z^2 + bz + c)</span>. The <span class="chem">z^3</span> terms give <span class="chem">b = -4</span>; the constants give <span class="chem">9c = 45</span>, so <span class="chem">c = 5</span>. (Check the <span class="chem">z</span> term: <span class="chem">9b = -36</span>.) Then <span class="chem">z^2 - 4z + 5 = 0</span> gives <span class="chem">z = (4 +- sqrt(-4)) / 2 = 2 +- i</span>.</p>'
    },
    {
      id: 't1-4-q028',
      topic: 't1-4',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.14',
      type: 'short',
      marks: 9,
      stem: '(a) Use De Moivre\'s theorem to show that <span class="chem">sin(5 theta) = 16 sin^5 theta - 20 sin^3 theta + 5 sin theta</span>. [4 marks]<br>(b) By considering <span class="chem">theta = pi/5</span>, show that <span class="chem">x = sin^2(pi/5)</span> satisfies <span class="chem">16x^2 - 20x + 5 = 0</span>. [2 marks]<br>(c) Hence find the exact value of <span class="chem">sin^2(pi/5)</span>, justifying your choice of root. [3 marks]',
      answer: '<p>(a) The imaginary part of <span class="chem">(cos theta + i sin theta)^5</span> is <span class="chem">5c^4 s - 10c^2 s^3 + s^5</span> (with <span class="chem">c = cos theta</span>, <span class="chem">s = sin theta</span>); replacing <span class="chem">c^2 = 1 - s^2</span> gives <span class="chem">16s^5 - 20s^3 + 5s</span>.<br>(b) <span class="chem">sin(pi) = 0</span> and <span class="chem">sin(pi/5) != 0</span>, so dividing by <span class="chem">sin(pi/5)</span> gives <span class="chem">16x^2 - 20x + 5 = 0</span>.<br>(c) <span class="chem">x = (5 +- sqrt(5)) / 8</span>; since <span class="chem">0 &lt; pi/5 &lt; pi/4</span>, <span class="chem">sin^2(pi/5) &lt; 1/2</span>, so <span class="chem">sin^2(pi/5) = (5 - sqrt(5)) / 8</span>.</p>',
      markscheme: [
        'M1: Writes sin 5θ = Im[(cos θ + i sin θ)⁵] and expands binomially.',
        'A1: Im part = 5cos⁴θ sin θ − 10cos²θ sin³θ + sin⁵θ.',
        'M1: Substitutes cos²θ = 1 − sin²θ.',
        'A1: Expands 5s(1 − s²)² − 10s³(1 − s²) + s⁵ correctly to reach 16s⁵ − 20s³ + 5s (AG).',
        'M1: Uses sin 5θ = sin π = 0 with sin(π/5) ≠ 0 and divides by sin(π/5).',
        'A1: 16 sin⁴(π/5) − 20 sin²(π/5) + 5 = 0, i.e. 16x² − 20x + 5 = 0 (AG).',
        'A1: x = (20 ± √80)/32 = (5 ± √5)/8.',
        'R1: Rejects (5 + √5)/8 because sin²(π/5) < sin²(π/4) = ½ (or because (5 + √5)/8 = sin²(2π/5)).',
        'A1: sin²(π/5) = (5 − √5)/8.'
      ],
      hints: [
        'Decode: "use De Moivre" for <span class="chem">sin(5 theta)</span> means: expand <span class="chem">(cos theta + i sin theta)^5</span> with the binomial theorem and keep the imaginary part. Parts (b) and (c) then turn the identity into a quadratic in <span class="chem">sin^2 theta</span>.',
        'The imaginary terms of the expansion are <span class="chem">5c^4 (is) + 10c^2 (is)^3 + (is)^5</span>. Simplify the powers of <span class="chem">i</span>, then replace <span class="chem">c^2</span> by <span class="chem">1 - s^2</span>.',
        'In (c) both roots of the quadratic are positive. Which one is less than <span class="chem">1/2</span>, and why must <span class="chem">sin^2(pi/5)</span> be less than <span class="chem">1/2</span>?'
      ],
      solution: '<p><strong>Decode.</strong> This is the standard "multiple-angle identity by De Moivre" technique, followed by solving a polynomial whose roots are known trig values.<br>(a) <span class="chem">cos(5 theta) + i sin(5 theta) = (c + is)^5</span>. Imaginary part: <span class="chem">5c^4 s - 10c^2 s^3 + s^5</span>. With <span class="chem">c^2 = 1 - s^2</span>: <span class="chem">5s(1 - 2s^2 + s^4) - 10s^3 + 10s^5 + s^5 = 16s^5 - 20s^3 + 5s</span>.<br>(b) With <span class="chem">theta = pi/5</span>, <span class="chem">sin(5 theta) = sin(pi) = 0</span>. Since <span class="chem">s = sin(pi/5) != 0</span>, divide by <span class="chem">s</span>: <span class="chem">16s^4 - 20s^2 + 5 = 0</span>, i.e. <span class="chem">16x^2 - 20x + 5 = 0</span>.<br>(c) <span class="chem">x = (20 +- sqrt(400 - 320)) / 32 = (5 +- sqrt(5)) / 8</span>. As <span class="chem">pi/5 &lt; pi/4</span>, <span class="chem">sin^2(pi/5) &lt; 1/2</span>, while <span class="chem">(5 + sqrt(5))/8 ≈ 0.90</span>. So <span class="chem">sin^2(pi/5) = (5 - sqrt(5)) / 8</span>.</p>'
    },
    {
      id: 't1-4-q029',
      topic: 't1-4',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.14',
      type: 'numeric',
      marks: 5,
      stem: 'The seven solutions of <span class="chem">z^7 + 1 = 0</span> lie on the unit circle of the Argand diagram. By considering the sum of these seven solutions, find the exact value of <span class="chem">cos(pi/7) + cos(3pi/7) + cos(5pi/7)</span>.',
      answer: 0.5,
      exact: true,
      answerInput: '1/2',
      answerDisplay: '1/2',
      hints: [
        'Decode: the cosines in the question are the real parts of some of the solutions of <span class="chem">z^7 = -1</span>. Find all seven solutions, add them, and compare real parts.',
        'Write <span class="chem">-1 = e^{i(pi + 2 pi k)}</span>, so the solutions are <span class="chem">e^{i(2k + 1)pi/7}</span>: arguments <span class="chem">+- pi/7, +- 3pi/7, +- 5pi/7</span> and <span class="chem">pi</span>.',
        'The coefficient of <span class="chem">z^6</span> in <span class="chem">z^7 + 1</span> is 0, so the sum of the solutions is 0. Conjugate pairs have equal real parts.'
      ],
      solution: '<p><strong>Decode.</strong> A sum of cosines of equally spaced angles is the real part of a sum of roots of a polynomial.<br>The solutions of <span class="chem">z^7 = -1</span> are <span class="chem">e^{i(2k + 1)pi/7}</span>, <span class="chem">k = 0, …, 6</span>, with arguments <span class="chem">+- pi/7</span>, <span class="chem">+- 3pi/7</span>, <span class="chem">+- 5pi/7</span> and <span class="chem">pi</span>. Since <span class="chem">z^7 + 1</span> has no <span class="chem">z^6</span> term, the sum of the solutions is <span class="chem">0</span>. Real parts: <span class="chem">2(cos(pi/7) + cos(3pi/7) + cos(5pi/7)) + cos(pi) = 0</span>, so the sum is <span class="chem">1/2</span>.</p>'
    },
    {
      id: 't1-4-q030',
      topic: 't1-4',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.14',
      type: 'numeric',
      marks: 4,
      stem: 'The points <span class="chem">P_1, P_2, P_3, …</span> on an Argand diagram represent the complex numbers <span class="chem">(sqrt(3) + i)^1, (sqrt(3) + i)^2, (sqrt(3) + i)^3, …</span>. How many of the first 100 points <span class="chem">P_1, …, P_100</span> lie on the <strong>positive</strong> imaginary axis?',
      answer: 9,
      hints: [
        'Decode: "on the positive imaginary axis" means the argument of <span class="chem">(sqrt(3) + i)^n</span> is <span class="chem">pi/2</span> (plus a whole number of turns). The modulus does not matter. Count the integers <span class="chem">n</span> from 1 to 100 that work.',
        '<span class="chem">sqrt(3) + i = 2 e^{i pi/6}</span>, so <span class="chem">(sqrt(3) + i)^n</span> has argument <span class="chem">n pi/6</span>.',
        'You need <span class="chem">n pi/6 = pi/2 + 2 pi k</span>, i.e. <span class="chem">n = 3 + 12k</span>. (Values <span class="chem">n = 9 + 12k</span> lie on the <em>negative</em> imaginary axis.)'
      ],
      solution: '<p><strong>Decode.</strong> Position on an axis is a condition on the argument only.<br><span class="chem">(sqrt(3) + i)^n = 2^n e^{i n pi/6}</span>. It lies on the positive imaginary axis when <span class="chem">n pi/6 = pi/2 + 2 pi k</span>, i.e. <span class="chem">n = 3 + 12k</span> with <span class="chem">k ∈ ℤ</span>. In <span class="chem">1 &lt;= n &lt;= 100</span>: <span class="chem">n = 3, 15, 27, 39, 51, 63, 75, 87, 99</span>, which is <span class="chem">9</span> points.</p>'
    },
    {
      id: 't1-4-q031',
      topic: 't1-4',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.13',
      type: 'short',
      marks: 8,
      stem: '(a) Show that <span class="chem">1 + e^{i theta} = 2 cos(theta/2) e^{i theta/2}</span> for <span class="chem">theta ∈ ℝ</span>. [3 marks]<br>(b) Hence write down the modulus and the argument of <span class="chem">1 + e^{i 4pi/5}</span>. [2 marks]<br>(c) Find the modulus and the principal argument of <span class="chem">1 + e^{i 8pi/5}</span>, giving exact answers in terms of trigonometric values of rational multiples of <span class="chem">pi</span>. [3 marks]',
      answer: '<p>(a) <span class="chem">1 + e^{i theta} = e^{i theta/2}(e^{-i theta/2} + e^{i theta/2}) = 2 cos(theta/2) e^{i theta/2}</span>.<br>(b) Modulus <span class="chem">2 cos(2pi/5)</span>, argument <span class="chem">2pi/5</span>.<br>(c) <span class="chem">1 + e^{i 8pi/5} = 2 cos(4pi/5) e^{i 4pi/5}</span> with <span class="chem">cos(4pi/5) &lt; 0</span>, so the modulus is <span class="chem">-2 cos(4pi/5) = 2 cos(pi/5)</span> and the principal argument is <span class="chem">4pi/5 - pi = -pi/5</span>.</p>',
      markscheme: [
        'M1: Takes out the factor e<sup>iθ/2</sup>: 1 + e<sup>iθ</sup> = e<sup>iθ/2</sup>(e<sup>−iθ/2</sup> + e<sup>iθ/2</sup>).',
        'M1: Uses e<sup>ix</sup> + e<sup>−ix</sup> = 2cos x (from cos x ± i sin x).',
        'A1: Reaches 2cos(θ/2) e<sup>iθ/2</sup> (AG).',
        'A1: Modulus 2cos(2π/5).',
        'A1: Argument 2π/5 (valid because cos(2π/5) > 0).',
        'M1: Writes 1 + e<sup>i8π/5</sup> = 2cos(4π/5) e<sup>i4π/5</sup>.',
        'R1: Notes cos(4π/5) < 0, so writes −1 = e<sup>−iπ</sup>: modulus = −2cos(4π/5) = 2cos(π/5).',
        'A1: Principal argument 4π/5 − π = −π/5.'
      ],
      hints: [
        'Decode: part (c) is a trap. A modulus must be positive, but <span class="chem">2 cos(theta/2)</span> is negative when <span class="chem">theta/2</span> is an obtuse angle. The task is to repair the form so that <span class="chem">r &gt; 0</span> and the argument is principal.',
        'For (a), take out a factor <span class="chem">e^{i theta/2}</span> from both terms and use <span class="chem">e^{ix} + e^{-ix} = 2 cos x</span>.',
        'For (c), <span class="chem">theta/2 = 4pi/5</span> and <span class="chem">cos(4pi/5) &lt; 0</span>. Write the negative sign as <span class="chem">e^{-i pi}</span> and subtract <span class="chem">pi</span> from the argument.'
      ],
      solution: '<p><strong>Decode.</strong> The identity in (a) gives a "modulus" <span class="chem">2 cos(theta/2)</span> that is only a true modulus when it is positive; (c) tests whether you notice when it is not.<br>(a) <span class="chem">1 + e^{i theta} = e^{i theta/2}(e^{-i theta/2} + e^{i theta/2}) = e^{i theta/2} × 2 cos(theta/2)</span>.<br>(b) <span class="chem">theta = 4pi/5</span>: <span class="chem">2 cos(2pi/5) &gt; 0</span>, so the modulus is <span class="chem">2 cos(2pi/5)</span> and the argument is <span class="chem">2pi/5</span>.<br>(c) <span class="chem">theta = 8pi/5</span>: <span class="chem">1 + e^{i 8pi/5} = 2 cos(4pi/5) e^{i 4pi/5}</span>, but <span class="chem">cos(4pi/5) &lt; 0</span>. Write it as <span class="chem">(-2 cos(4pi/5)) e^{-i pi} e^{i 4pi/5} = 2 cos(pi/5) e^{-i pi/5}</span>. Modulus <span class="chem">2 cos(pi/5)</span>, principal argument <span class="chem">-pi/5</span>.</p>'
    },
    {
      id: 't1-4-q032',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.14',
      type: 'short',
      marks: 8,
      stem: 'Let <span class="chem">z = cos theta + i sin theta</span>.<br>(a) Show that <span class="chem">z^n + z^{-n} = 2 cos(n theta)</span> for <span class="chem">n ∈ ℤ^+</span>. [2 marks]<br>(b) By expanding <span class="chem">(z + z^{-1})^3</span>, show that <span class="chem">cos^3 theta = (1/4) cos(3 theta) + (3/4) cos theta</span>. [3 marks]<br>(c) Hence find the exact value of <span class="chem">∫_0^{pi/3} cos^3 theta d theta</span>. [3 marks]',
      answer: '<p>(a) <span class="chem">z^n = cos(n theta) + i sin(n theta)</span> and <span class="chem">z^{-n} = cos(n theta) - i sin(n theta)</span>; adding gives <span class="chem">2 cos(n theta)</span>.<br>(b) <span class="chem">8 cos^3 theta = (z^3 + z^{-3}) + 3(z + z^{-1}) = 2 cos(3 theta) + 6 cos theta</span>.<br>(c) <span class="chem">∫_0^{pi/3} cos^3 theta d theta = [(1/12) sin(3 theta) + (3/4) sin theta]_0^{pi/3} = 3 sqrt(3)/8</span>.</p>',
      markscheme: [
        'M1: Uses De Moivre for z<sup>n</sup> and z<sup>−n</sup>: cos nθ ± i sin nθ (using cos(−nθ) = cos nθ, sin(−nθ) = −sin nθ).',
        'A1: Adds to get 2cos nθ (AG).',
        'M1: (z + z<sup>−1</sup>)³ = z³ + 3z + 3z<sup>−1</sup> + z<sup>−3</sup>.',
        'M1: Groups as (z³ + z<sup>−3</sup>) + 3(z + z<sup>−1</sup>) and uses (a): 8cos³θ = 2cos 3θ + 6cos θ.',
        'A1: Divides by 8 to reach the given identity (AG).',
        'M1: Integrates: (1/12) sin 3θ + (3/4) sin θ.',
        'A1: Substitutes limits: (1/12) sin π + (3/4) sin(π/3) − 0.',
        'A1: 3√3/8.'
      ],
      hints: [
        'For (a), apply De Moivre with <span class="chem">n</span> and with <span class="chem">-n</span>; the sine terms cancel.',
        'For (b), <span class="chem">z + z^{-1} = 2 cos theta</span>, so the left side is <span class="chem">8 cos^3 theta</span>. Pair the terms of the expansion symmetrically.',
        'For (c), <span class="chem">int cos(3 theta) d theta = (1/3) sin(3 theta)</span>.'
      ],
      solution: '<p>(a) By De Moivre, <span class="chem">z^n + z^{-n} = (cos(n theta) + i sin(n theta)) + (cos(n theta) - i sin(n theta)) = 2 cos(n theta)</span>.<br>(b) <span class="chem">(2 cos theta)^3 = (z + z^{-1})^3 = (z^3 + z^{-3}) + 3(z + z^{-1}) = 2 cos(3 theta) + 6 cos theta</span>. Divide by 8.<br>(c) <span class="chem">∫_0^{pi/3} ((1/4) cos(3 theta) + (3/4) cos theta) d theta = [(1/12) sin(3 theta) + (3/4) sin theta]_0^{pi/3} = 0 + (3/4)(sqrt(3)/2) = 3 sqrt(3)/8</span>.</p>'
    },
    {
      id: 't1-4-q033',
      topic: 't1-4',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.12',
      type: 'numeric',
      marks: 5,
      stem: 'A student needs the sum <span class="chem">S = i + 2i^2 + 3i^3 + 4i^4 + … + 40i^{40}</span>, in which the <span class="chem">k</span>-th term is <span class="chem">k i^k</span>. Find the exact value of <span class="chem">|S|</span>.',
      answer: 28.284271247,
      exact: true,
      answerInput: '20*sqrt(2)',
      answerDisplay: '20√2',
      hints: [
        'Decode: this is not a geometric series, because the coefficients change. But the powers of <span class="chem">i</span> repeat every 4 terms, so group the 40 terms into 10 blocks of 4 and find what each block adds up to.',
        'The block starting at <span class="chem">k = 4m + 1</span> is <span class="chem">(4m + 1)i - (4m + 2) - (4m + 3)i + (4m + 4)</span>.',
        'Each block simplifies to <span class="chem">2 - 2i</span>, whatever <span class="chem">m</span> is.'
      ],
      solution: '<p><strong>Decode.</strong> The period-4 cycle <span class="chem">i, -1, -i, 1</span> lets you group the terms.<br>For <span class="chem">m = 0, 1, …, 9</span>, the block <span class="chem">(4m + 1)i + (4m + 2)i^2 + (4m + 3)i^3 + (4m + 4)i^4 = (4m + 1)i - (4m + 2) - (4m + 3)i + (4m + 4) = 2 - 2i</span>. Ten blocks give <span class="chem">S = 20 - 20i</span>, so <span class="chem">|S| = sqrt(400 + 400) = 20 sqrt(2)</span>.</p>'
    },
    {
      id: 't1-4-q034',
      topic: 't1-4',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.14',
      type: 'numeric',
      marks: 5,
      stem: 'Let <span class="chem">omega = e^{2 pi i / 5}</span>. Find the value of <span class="chem">(2 - omega)(2 - omega^2)(2 - omega^3)(2 - omega^4)</span>.',
      answer: 31,
      hints: [
        'Decode: do not multiply out four complex brackets. The numbers <span class="chem">omega, omega^2, omega^3, omega^4</span> are the roots of a known polynomial, so the product is that polynomial evaluated at <span class="chem">z = 2</span>.',
        'The fifth roots of unity are <span class="chem">1, omega, …, omega^4</span>, so <span class="chem">z^5 - 1 = (z - 1)(z - omega)(z - omega^2)(z - omega^3)(z - omega^4)</span>.',
        'Divide by <span class="chem">z - 1</span>: <span class="chem">(z - omega)(z - omega^2)(z - omega^3)(z - omega^4) = z^4 + z^3 + z^2 + z + 1</span>. Now put <span class="chem">z = 2</span>.'
      ],
      solution: '<p><strong>Decode.</strong> A product of the form <span class="chem">(a - root)</span> over all roots is the factorised polynomial evaluated at <span class="chem">a</span>.<br><span class="chem">z^5 - 1 = (z - 1)(z - omega)(z - omega^2)(z - omega^3)(z - omega^4)</span>, so <span class="chem">(z - omega)(z - omega^2)(z - omega^3)(z - omega^4) = (z^5 - 1)/(z - 1) = z^4 + z^3 + z^2 + z + 1</span>. At <span class="chem">z = 2</span>: <span class="chem">16 + 8 + 4 + 2 + 1 = 31</span>.</p>'
    },
    {
      id: 't1-4-q035',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.13, 1.14',
      type: 'short',
      marks: 6,
      stem: 'Let <span class="chem">z = 2 cis(pi/5)</span> and <span class="chem">w = cis(3pi/10)</span>.<br>(a) Find <span class="chem">zw</span> in the form <span class="chem">a + bi</span>. [2 marks]<br>(b) Find the value of <span class="chem">z^3 / w^2</span>. [2 marks]<br>(c) Find the smallest positive integer <span class="chem">n</span> for which <span class="chem">w^n</span> is a real number. [2 marks]',
      answer: '<p>(a) <span class="chem">zw = 2 cis(pi/2) = 2i</span>.<br>(b) <span class="chem">z^3 / w^2 = 8 cis(3pi/5 - 3pi/5) = 8</span>.<br>(c) <span class="chem">n = 10</span>.</p>',
      markscheme: [
        'M1: Multiplies moduli and adds arguments: 2 cis(π/5 + 3π/10).',
        'A1: 2 cis(π/2) = 2i.',
        'M1: Uses De Moivre and division: 2³ cis(3π/5) ÷ cis(3π/5).',
        'A1: 8.',
        'M1: Requires sin(3nπ/10) = 0, i.e. 3n/10 ∈ ℤ.',
        'A1: n = 10.'
      ],
      hints: [
        'In polar form, multiplication multiplies the moduli and adds the arguments; division divides and subtracts.',
        'For (c), <span class="chem">w^n = cis(3n pi/10)</span> is real when <span class="chem">3n pi/10</span> is a multiple of <span class="chem">pi</span>.'
      ],
      solution: '<p>(a) <span class="chem">zw = 2 cis(pi/5 + 3pi/10) = 2 cis(pi/2) = 2i</span>.<br>(b) <span class="chem">z^3 = 8 cis(3pi/5)</span> and <span class="chem">w^2 = cis(3pi/5)</span>, so <span class="chem">z^3 / w^2 = 8 cis(0) = 8</span>.<br>(c) <span class="chem">w^n = cis(3n pi/10)</span> is real when <span class="chem">3n/10</span> is an integer. Since 3 and 10 have no common factor, <span class="chem">n</span> must be a multiple of 10: the smallest is <span class="chem">n = 10</span>.</p>'
    },
    {
      id: 't1-4-q036',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.12, 1.13',
      type: 'numeric',
      marks: 4,
      stem: 'Let <span class="chem">z = ((2.4 - 3.1i)(1.5 + 0.7i)) / (-0.9 + 2.2i)</span>. Find the principal argument <span class="chem">arg(z)</span>, where <span class="chem">-pi &lt; arg(z) &lt;= pi</span>, in radians correct to 3 significant figures.',
      answer: -2.4344781758,
      sigfigs: 3,
      hints: [
        'Use the GDC in complex mode and radian mode. Evaluate <span class="chem">z</span> first, then use the GDC\'s <span class="mono">arg</span> (or <span class="mono">angle</span>) function.',
        'The GDC gives <span class="chem">z ≈ -2.0756 - 1.7736i</span>, which is in Quadrant III, so the principal argument is between <span class="chem">-pi</span> and <span class="chem">-pi/2</span>. A value from <span class="chem">arctan(b/a)</span> alone would be in the wrong quadrant.'
      ],
      solution: '<p>In complex mode, <span class="chem">z ≈ -2.0756 - 1.7736i</span> (Quadrant III). The GDC <span class="mono">arg</span> function gives <span class="chem">arg(z) ≈ -2.43</span> rad. Check: <span class="chem">arctan(1.7736 / 2.0756) ≈ 0.7071</span> is the reference angle, and <span class="chem">-(pi - 0.7071) ≈ -2.43</span>.</p>'
    },
    {
      id: 't1-4-q037',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.14',
      type: 'numeric',
      marks: 4,
      stem: 'The equation <span class="chem">z^3 + 2z^2 + 3z + 7 = 0</span> has one real root and two non-real roots. Find the modulus of the non-real roots, correct to 3 significant figures.',
      answer: 1.8117786715,
      sigfigs: 3,
      hints: [
        'Use the polynomial root finder on your GDC (coefficients 1, 2, 3, 7).',
        'The two non-real roots are conjugates, so they have the same modulus <span class="chem">sqrt(a^2 + b^2)</span>. Check: the product of all three roots is <span class="chem">-7</span>.'
      ],
      solution: '<p>The GDC gives roots <span class="chem">z ≈ -2.1325</span> and <span class="chem">z ≈ 0.066247 +- 1.8106i</span>. The modulus of each non-real root is <span class="chem">sqrt(0.066247^2 + 1.8106^2) ≈ 1.81</span>. (Check: <span class="chem">(-2.1325)|w|^2 = -7</span> gives <span class="chem">|w| = sqrt(7 / 2.1325) ≈ 1.81</span>.)</p>'
    },
    {
      id: 't1-4-q038',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.13, 1.14',
      type: 'numeric',
      marks: 4,
      stem: 'Exactly one root of the equation <span class="chem">z^4 - 2z^3 + 5z^2 + z - 3 = 0</span> lies in the first quadrant of the Argand diagram. Find the argument of this root, in radians correct to 3 significant figures.',
      answer: 1.1343447894,
      sigfigs: 3,
      hints: [
        'Use the polynomial root finder on your GDC to find all four roots.',
        'The first-quadrant root has positive real and imaginary parts: <span class="chem">z ≈ 0.99275 + 2.1283i</span>. Find its argument.'
      ],
      solution: '<p>The GDC gives the roots <span class="chem">z ≈ 0.74482</span>, <span class="chem">z ≈ -0.73032</span> and <span class="chem">z ≈ 0.99275 +- 2.1283i</span>. The first-quadrant root is <span class="chem">0.99275 + 2.1283i</span>, with argument <span class="chem">arctan(2.1283 / 0.99275) ≈ 1.13</span> rad.</p>'
    },
    {
      id: 't1-4-q039',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.13, 1.14',
      type: 'short',
      marks: 7,
      stem: 'Consider the equation <span class="chem">z^5 = 3 + 4i</span>.<br>(a) Write <span class="chem">3 + 4i</span> in the form <span class="chem">r e^{i theta}</span>, giving <span class="chem">theta</span> correct to 4 significant figures. [2 marks]<br>(b) Find the five solutions in the form <span class="chem">r e^{i theta}</span>, where <span class="chem">-pi &lt; theta &lt;= pi</span>. Give <span class="chem">r</span> exactly and each <span class="chem">theta</span> correct to 3 significant figures. [3 marks]<br>(c) The five solutions are the vertices of a regular pentagon. Find the area of the pentagon, correct to 3 significant figures. [2 marks]',
      answer: '<p>(a) <span class="chem">3 + 4i = 5 e^{0.9273 i}</span>.<br>(b) <span class="chem">r = 5^{1/5}</span>; <span class="chem">theta ≈ 0.185, 1.44, 2.70, -1.07, -2.33</span>.<br>(c) Area <span class="chem">= (5/2)(5^{2/5}) sin(2pi/5) ≈ 4.53</span>.</p>',
      markscheme: [
        'A1: Modulus 5.',
        'A1: Argument arctan(4/3) ≈ 0.9273.',
        'M1: Uses θ = (0.9273 + 2πk)/5 with modulus 5<sup>1/5</sup>.',
        'A1: Two or three correct arguments from 0.185, 1.44, 2.70, −1.07, −2.33.',
        'A1: All five correct, each in (−π, π].',
        'M1: Area = 5 × ½ r² sin(2π/5) with r = 5<sup>1/5</sup>.',
        'A1: Area ≈ 4.53.'
      ],
      hints: [
        'For (b), the general argument of <span class="chem">3 + 4i</span> is <span class="chem">0.9273 + 2 pi k</span>; divide by 5 and pick five values of <span class="chem">k</span> that land in <span class="chem">(-pi, pi]</span>.',
        'For (c), split the pentagon into 5 congruent triangles at the origin, each with two sides <span class="chem">r = 5^{1/5}</span> and angle <span class="chem">2pi/5</span> between them.'
      ],
      solution: '<p>(a) <span class="chem">|3 + 4i| = 5</span> and <span class="chem">arg = arctan(4/3) ≈ 0.9273</span> (Quadrant I), so <span class="chem">3 + 4i = 5 e^{0.9273 i}</span>.<br>(b) <span class="chem">z = 5^{1/5} e^{i(0.9273 + 2 pi k)/5}</span>. For <span class="chem">k = 0, 1, 2, -1, -2</span>: <span class="chem">theta ≈ 0.185, 1.44, 2.70, -1.07, -2.33</span>.<br>(c) <span class="chem">r^2 = 5^{2/5} ≈ 1.9037</span>. Area <span class="chem">= 5 × (1/2)(1.9037) sin(2pi/5) ≈ 4.53</span>.</p>'
    },
    {
      id: 't1-4-q040',
      topic: 't1-4',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.13',
      type: 'numeric',
      marks: 5,
      stem: 'The tip of a robotic arm is modelled on an Argand diagram, with the arm\'s pivot at the origin and distances in metres. At first the tip is at the point <span class="chem">3 + 1.5i</span>. The arm then turns anticlockwise about the pivot through <span class="chem">0.8</span> radians, and at the same time its length increases by 20%. Find the new horizontal coordinate (the real part) of the tip, in metres correct to 3 significant figures.',
      answer: 1.2169031900,
      sigfigs: 3,
      unit: 'm',
      hints: [
        'Decode: turning about the origin through an angle <span class="chem">alpha</span> and stretching by a factor <span class="chem">k</span> is multiplication by the complex number <span class="chem">k e^{i alpha}</span>. Here <span class="chem">k = 1.2</span> (a 20% increase) and <span class="chem">alpha = 0.8</span>.',
        'The new tip is <span class="chem">1.2 e^{0.8 i}(3 + 1.5i)</span>. Evaluate it on the GDC in radian mode.',
        'Only the real part is asked for. <span class="chem">1.2 e^{0.8 i}(3 + 1.5i) ≈ 1.217 + 3.837i</span>.'
      ],
      solution: '<p><strong>Decode.</strong> A rotation about the origin with a scale factor is multiplication by <span class="chem">r e^{i alpha}</span>.<br>New position <span class="chem">= 1.2 e^{0.8 i}(3 + 1.5i) = 1.2(cos 0.8 + i sin 0.8)(3 + 1.5i) ≈ 1.2169 + 3.8366i</span>. The horizontal coordinate is <span class="chem">≈ 1.22</span> m.</p>'
    },
    {
      id: 't1-4-q041',
      topic: 't1-4',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.12, 1.13',
      type: 'numeric',
      marks: 6,
      stem: 'A point <span class="chem">Z</span> on an Argand diagram represents the complex number <span class="chem">z</span>. It moves so that its distance from the point representing <span class="chem">5 + 2i</span> is always 3, that is <span class="chem">|z - (5 + 2i)| = 3</span>. Find the largest possible value of <span class="chem">arg(z)</span>, in radians correct to 3 significant figures.',
      answer: 0.9713791273,
      sigfigs: 3,
      hints: [
        'Decode: <span class="chem">|z - (5 + 2i)| = 3</span> says <span class="chem">Z</span> lies on a circle, centre <span class="chem">C(5, 2)</span>, radius 3. The argument is the angle of the line <span class="chem">OZ</span>, so the largest argument occurs where a line from <span class="chem">O</span> just touches the circle (a tangent).',
        'The tangent meets the radius at a right angle. In the right-angled triangle <span class="chem">O</span>, <span class="chem">C</span>, tangent point, the hypotenuse is <span class="chem">OC = sqrt(29)</span> and the side opposite the angle at <span class="chem">O</span> is 3.',
        'Largest argument <span class="chem">= arg(5 + 2i) + arcsin(3 / sqrt(29))</span>.'
      ],
      solution: '<p><strong>Decode.</strong> The locus is a circle; maximising the argument means finding the upper tangent from the origin.<br><span class="chem">OC = |5 + 2i| = sqrt(29) &gt; 3</span>, so <span class="chem">O</span> is outside the circle. The angle between <span class="chem">OC</span> and the tangent is <span class="chem">arcsin(3 / sqrt(29)) ≈ 0.59087</span>, and <span class="chem">arg(5 + 2i) = arctan(2/5) ≈ 0.38051</span>. Largest <span class="chem">arg(z) ≈ 0.38051 + 0.59087 ≈ 0.971</span> rad.</p>'
    },
    {
      id: 't1-4-q042',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.14',
      type: 'numeric',
      marks: 4,
      stem: 'Let <span class="chem">w = 0.9 + 0.6i</span>. Find the least positive integer <span class="chem">n</span> for which <span class="chem">|w^n| &gt; 100</span>.',
      answer: 59,
      hints: [
        'Decode: by De Moivre, <span class="chem">|w^n| = |w|^n</span>, so this is an exponential inequality in <span class="chem">n</span>, and <span class="chem">n</span> must be a whole number.',
        '<span class="chem">|w| = sqrt(0.81 + 0.36) = sqrt(1.17) ≈ 1.0817</span>. Solve <span class="chem">1.0817^n &gt; 100</span> with logarithms or a GDC table.'
      ],
      solution: '<p><span class="chem">|w^n| = |w|^n = (sqrt(1.17))^n</span>. Solve <span class="chem">(sqrt(1.17))^n &gt; 100</span>: <span class="chem">n &gt; ln(100) / ln(sqrt(1.17)) ≈ 58.66</span>. Check: <span class="chem">|w|^{58} ≈ 94.9 &lt; 100</span> and <span class="chem">|w|^{59} ≈ 102.7 &gt; 100</span>. So <span class="chem">n = 59</span>.</p>'
    },
    {
      id: 't1-4-q043',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.12, 1.14',
      type: 'short',
      marks: 7,
      stem: 'Consider the equation <span class="chem">2z^3 - 5z^2 + 9z - 7 = 0</span>.<br>(a) Find all three roots, giving answers correct to 3 significant figures. [3 marks]<br>(b) Explain why the two non-real roots must be complex conjugates of each other. [1 mark]<br>(c) The three roots are the vertices of a triangle on the Argand diagram. Find the area of the triangle, correct to 3 significant figures. [3 marks]',
      answer: '<p>(a) <span class="chem">z ≈ 1.19</span> and <span class="chem">z ≈ 0.655 +- 1.58i</span>.<br>(b) The coefficients are all real, so non-real roots occur in conjugate pairs.<br>(c) Area <span class="chem">≈ (1/2)(2 × 1.58496)(1.19003 - 0.65498) ≈ 0.848</span>.</p>',
      markscheme: [
        'A1: Real root z ≈ 1.19.',
        'A1: Real part 0.655 of the non-real roots.',
        'A1: Imaginary parts ±1.58.',
        'R1: The polynomial has real coefficients, so the conjugate of any root is also a root.',
        'M1: Uses the vertical side between the conjugate roots as base, length 2 × 1.58496 ≈ 3.1699.',
        'M1: Height = horizontal distance from the real root, 1.19003 − 0.65498 ≈ 0.53505.',
        'A1: Area ≈ 0.848.'
      ],
      hints: [
        'Use your GDC polynomial solver with coefficients 2, −5, 9, −7.',
        'The two conjugate roots lie on a vertical line on the Argand diagram, so take that side as the base; the height is the horizontal distance from the real root to that line.'
      ],
      solution: '<p>(a) The GDC gives <span class="chem">z ≈ 1.1900</span> and <span class="chem">z ≈ 0.65498 +- 1.5850i</span>.<br>(b) The coefficients are real, so if <span class="chem">w</span> is a root, then <span class="chem">w^*</span> is a root.<br>(c) Base <span class="chem">= 2 × 1.5850 = 3.1699</span>, height <span class="chem">= 1.1900 - 0.65498 = 0.53505</span>. Area <span class="chem">= (1/2)(3.1699)(0.53505) ≈ 0.848</span>.</p>'
    },
    {
      id: 't1-4-q044',
      topic: 't1-4',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.13, 1.14',
      type: 'numeric',
      marks: 6,
      stem: 'A robot starts at a point <span class="chem">O</span> and moves 1 m due east. It then turns <span class="chem">40°</span> anticlockwise and moves 0.9 m. It turns another <span class="chem">40°</span> anticlockwise and moves 0.81 m, and it continues in this way for ever: each move is 90% as long as the one before and points a further <span class="chem">40°</span> anticlockwise. By representing each move as a complex number, find the distance from <span class="chem">O</span> of the point the robot approaches, in metres correct to 3 significant figures.',
      answer: 1.5230035425,
      sigfigs: 3,
      unit: 'm',
      hints: [
        'Decode: each move is the previous move multiplied by <span class="chem">w = 0.9 e^{i(2pi/9)}</span> (shrink by 0.9, turn by <span class="chem">40° = 2pi/9</span>). The final position is the sum of all the moves: an infinite geometric series with complex ratio <span class="chem">w</span>.',
        'The series <span class="chem">1 + w + w^2 + …</span> converges because <span class="chem">|w| = 0.9 &lt; 1</span>, and its sum is <span class="chem">1 / (1 - w)</span>.',
        'The distance asked for is the modulus <span class="chem">|1 / (1 - w)|</span>. Use radians (or degrees consistently) on the GDC.'
      ],
      solution: '<p><strong>Decode.</strong> A sequence of moves, each a fixed rotation and scaling of the last, is a geometric series with a complex common ratio.<br>Let <span class="chem">w = 0.9 e^{i 2pi/9}</span>. The position after infinitely many moves is <span class="chem">S_infty = 1 + w + w^2 + … = 1 / (1 - w)</span>, valid as <span class="chem">|w| = 0.9 &lt; 1</span>. On the GDC, <span class="chem">1/(1 - w) ≈ 0.72036 + 1.3419i</span>, so the distance from <span class="chem">O</span> is <span class="chem">|S_inf| ≈ 1.52</span> m.</p>'
    },
    {
      id: 't1-4-q045',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.13',
      type: 'numeric',
      marks: 4,
      stem: 'Three horizontal forces act on a floating buoy. Measured in newtons and drawn on an Argand diagram, they are <span class="chem">F_1 = 10 e^{0.4 i}</span>, <span class="chem">F_2 = 20 e^{1.3 i}</span> and <span class="chem">F_3 = 30 e^{-0.7 i}</span>. Find the magnitude of the resultant force <span class="chem">F_1 + F_2 + F_3</span>, in newtons correct to 3 significant figures.',
      answer: 37.701796460,
      sigfigs: 3,
      unit: 'N',
      hints: [
        'Decode: complex numbers add like vectors, so the resultant force is the sum of the three numbers, and its magnitude is the modulus of the sum. You cannot add the moduli 10, 20 and 30.',
        'Convert each force to Cartesian form (radian mode), add the real parts and the imaginary parts, then take the modulus.'
      ],
      solution: '<p><span class="chem">F_1 ≈ 9.2106 + 3.8942i</span>, <span class="chem">F_2 ≈ 5.3499 + 19.271i</span>, <span class="chem">F_3 ≈ 22.945 - 19.327i</span>. Sum <span class="chem">≈ 37.506 + 3.8388i</span>, so the magnitude is <span class="chem">sqrt(37.506^2 + 3.8388^2) ≈ 37.7</span> N.</p>'
    },
    {
      id: 't1-4-q046',
      topic: 't1-4',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.12, 1.13',
      type: 'short',
      marks: 8,
      stem: 'In alternating-current circuits, engineers describe each component by a complex <em>impedance</em>, measured in ohms. When two components with impedances <span class="chem">Z_1</span> and <span class="chem">Z_2</span> are connected in parallel, the total impedance <span class="chem">Z</span> satisfies <span class="chem">1/Z = 1/Z_1 + 1/Z_2</span>. Let <span class="chem">Z_1 = 30 + 40i</span> and <span class="chem">Z_2 = 50 - 20i</span>.<br>(a) Show that <span class="chem">Z = (Z_1 Z_2) / (Z_1 + Z_2)</span>. [1 mark]<br>(b) Find <span class="chem">Z</span> in the form <span class="chem">a + bi</span>, with <span class="chem">a</span> and <span class="chem">b</span> correct to 3 significant figures. [3 marks]<br>(c) The <em>phase angle</em> of the circuit is <span class="chem">arg(Z)</span>. Find <span class="chem">|Z|</span> and the phase angle, in radians, correct to 3 significant figures. [2 marks]<br>(d) The current is <span class="chem">I = V / Z</span>, where the voltage is the real number <span class="chem">V = 230</span>. Find <span class="chem">|I|</span> and <span class="chem">arg(I)</span>, correct to 3 significant figures. [2 marks]',
      answer: '<p>(a) <span class="chem">1/Z = (Z_2 + Z_1)/(Z_1 Z_2)</span>; take reciprocals.<br>(b) <span class="chem">Z = (2300 + 1400i)/(80 + 20i) ≈ 31.2 + 9.71i</span>.<br>(c) <span class="chem">|Z| ≈ 32.7</span> ohms, <span class="chem">arg(Z) ≈ 0.302</span> rad.<br>(d) <span class="chem">|I| = 230/|Z| ≈ 7.04</span>, <span class="chem">arg(I) = -arg(Z) ≈ -0.302</span> rad.</p>',
      markscheme: [
        'A1: Combines 1/Z₁ + 1/Z₂ = (Z₁ + Z₂)/(Z₁Z₂) and takes the reciprocal (AG).',
        'A1: Z₁Z₂ = 2300 + 1400i.',
        'A1: Z₁ + Z₂ = 80 + 20i.',
        'A1: Z ≈ 31.2 + 9.71i (exactly 530/17 + (165/17)i).',
        'A1: |Z| ≈ 32.7.',
        'A1: arg Z ≈ 0.302.',
        'A1: |I| = 230/|Z| ≈ 7.04.',
        'A1: arg I = arg 230 − arg Z ≈ −0.302.'
      ],
      hints: [
        'Decode: the physics is only context. You are asked to combine two complex numbers with a given formula, then find a modulus and an argument. "Phase angle" is just another name for the argument.',
        'For (a), add the two fractions on the right over the common denominator <span class="chem">Z_1 Z_2</span>, then flip both sides.',
        'For (d), dividing by <span class="chem">Z</span> divides the modulus by <span class="chem">|Z|</span> and subtracts <span class="chem">arg(Z)</span>; the argument of the positive real number 230 is 0.'
      ],
      solution: '<p><strong>Decode.</strong> Strip away the context: compute <span class="chem">Z_1 Z_2 / (Z_1 + Z_2)</span>, then its modulus and argument, then divide.<br>(a) <span class="chem">1/Z = (Z_1 + Z_2)/(Z_1 Z_2)</span>, so <span class="chem">Z = Z_1 Z_2 / (Z_1 + Z_2)</span>.<br>(b) <span class="chem">Z_1 Z_2 = 1500 - 600i + 2000i + 800 = 2300 + 1400i</span> and <span class="chem">Z_1 + Z_2 = 80 + 20i</span>. So <span class="chem">Z = (2300 + 1400i)/(80 + 20i) ≈ 31.176 + 9.7059i</span>.<br>(c) <span class="chem">|Z| ≈ 32.7</span> ohms and <span class="chem">arg(Z) = arctan(9.7059/31.176) ≈ 0.302</span> rad.<br>(d) <span class="chem">|I| = 230 / 32.652 ≈ 7.04</span> and <span class="chem">arg(I) = 0 - 0.30181 ≈ -0.302</span> rad.</p>'
    },
    {
      id: 't1-4-q047',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.14',
      type: 'numeric',
      marks: 5,
      stem: 'Exactly one of the four solutions of <span class="chem">z^4 = -5 + 12i</span> lies in the second quadrant of the Argand diagram. Find the real part of this solution, correct to 3 significant figures.',
      answer: -0.8959774761,
      sigfigs: 3,
      hints: [
        'Write <span class="chem">-5 + 12i</span> in modulus-argument form. It is in Quadrant II, so its argument is <span class="chem">pi - arctan(12/5)</span>.',
        'The solutions have modulus <span class="chem">13^{1/4}</span> and arguments <span class="chem">(1.9656 + 2 pi k)/4</span>. The second-quadrant one has an argument between <span class="chem">pi/2</span> and <span class="chem">pi</span>.'
      ],
      solution: '<p><span class="chem">|-5 + 12i| = 13</span> and <span class="chem">arg(-5 + 12i) = pi - arctan(12/5) ≈ 1.9656</span>. The solutions are <span class="chem">13^{1/4} e^{i(1.9656 + 2 pi k)/4}</span>, with arguments <span class="chem">≈ 0.4914, 2.0622, -2.6502, -1.0794</span>. The second-quadrant solution has argument <span class="chem">2.0622</span>, so its real part is <span class="chem">13^{1/4} cos(2.0622) ≈ -0.896</span>.</p>'
    },
    {
      id: 't1-4-q048',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.13, 1.14',
      type: 'numeric',
      marks: 5,
      stem: 'The cubic equation <span class="chem">z^3 + az^2 + bz + c = 0</span>, where <span class="chem">a, b, c ∈ ℝ</span>, has a root <span class="chem">z = 2</span> and a non-real root with modulus 3 and argument <span class="chem">1.1</span>. Find the value of <span class="chem">b</span>, correct to 3 significant figures.',
      answer: 14.443153457,
      sigfigs: 3,
      hints: [
        'Decode: real coefficients mean the third root is the conjugate, with modulus 3 and argument <span class="chem">-1.1</span>. Build the cubic from its three roots and read off the coefficient of <span class="chem">z</span>.',
        'For the conjugate pair <span class="chem">w = 3 e^{1.1 i}</span> and <span class="chem">w^*</span>: <span class="chem">(z - w)(z - w^*) = z^2 - 2 Re(w) z + |w|^2 = z^2 - 6 cos(1.1) z + 9</span>.',
        'Multiply by <span class="chem">(z - 2)</span> and collect the <span class="chem">z</span> terms.'
      ],
      solution: '<p><strong>Decode.</strong> Use the conjugate root theorem, then rebuild the polynomial.<br>The roots are <span class="chem">2</span>, <span class="chem">3 e^{1.1 i}</span> and <span class="chem">3 e^{-1.1 i}</span>. The conjugate pair gives <span class="chem">z^2 - 6 cos(1.1) z + 9</span>. Then <span class="chem">(z - 2)(z^2 - 6 cos(1.1) z + 9) = z^3 - (2 + 6 cos 1.1) z^2 + (9 + 12 cos 1.1) z - 18</span>. So <span class="chem">b = 9 + 12 cos(1.1) ≈ 14.4</span>.</p>'
    },
    {
      id: 't1-4-q049',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.14',
      type: 'numeric',
      marks: 5,
      stem: 'By De Moivre\'s theorem for rational exponents, <span class="chem">(2 - i)^{2/3}</span> has three values: the three solutions of <span class="chem">z^3 = (2 - i)^2</span>. Find the real part of the value with the greatest real part, correct to 3 significant figures.',
      answer: 1.6289371459,
      sigfigs: 3,
      hints: [
        'First find <span class="chem">(2 - i)^2 = 3 - 4i</span>, then write it in the form <span class="chem">r e^{i theta}</span>.',
        '<span class="chem">r = 5</span> and <span class="chem">theta = -arctan(4/3) ≈ -0.9273</span>. The three cube roots have modulus <span class="chem">5^{1/3}</span> and arguments <span class="chem">(-0.9273 + 2 pi k)/3</span>. The one with argument closest to 0 has the greatest real part.'
      ],
      solution: '<p><span class="chem">(2 - i)^2 = 3 - 4i = 5 e^{-0.92730 i}</span>. The cube roots are <span class="chem">5^{1/3} e^{i(-0.92730 + 2 pi k)/3}</span>, with arguments <span class="chem">≈ -0.30910, 1.7853, -2.4035</span>. The greatest real part comes from the argument <span class="chem">-0.30910</span>: <span class="chem">5^{1/3} cos(-0.30910) ≈ 1.63</span>.</p>'
    },
    {
      id: 't1-4-q050',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.14',
      type: 'short',
      marks: 7,
      stem: '(a) Use De Moivre\'s theorem to show that <span class="chem">cos(3 theta) = 4 cos^3 theta - 3 cos theta</span>. [3 marks]<br>(b) Show that the substitution <span class="chem">x = cos theta</span> turns the equation <span class="chem">40x^3 - 30x - 3 = 0</span> into <span class="chem">cos(3 theta) = 0.3</span>. [1 mark]<br>(c) Hence find the three solutions of <span class="chem">40x^3 - 30x - 3 = 0</span>, correct to 3 significant figures. [3 marks]',
      answer: '<p>(a) <span class="chem">Re(cos theta + i sin theta)^3 = c^3 - 3cs^2 = c^3 - 3c(1 - c^2) = 4c^3 - 3c</span>.<br>(b) Divide by 10: <span class="chem">4x^3 - 3x = 0.3</span>, i.e. <span class="chem">cos(3 theta) = 0.3</span>.<br>(c) <span class="chem">3 theta = arccos(0.3) + 2 pi k</span>, so <span class="chem">x = cos((arccos(0.3) + 2 pi k)/3)</span>: <span class="chem">x ≈ 0.912, -0.811, -0.101</span>.</p>',
      markscheme: [
        'M1: cos 3θ = Re[(cos θ + i sin θ)³], expanded binomially.',
        'A1: cos 3θ = cos³θ − 3cos θ sin²θ.',
        'A1: Replaces sin²θ = 1 − cos²θ to reach 4cos³θ − 3cos θ (AG).',
        'A1: Divides by 10 and recognises 4x³ − 3x = cos 3θ, so cos 3θ = 0.3 (AG).',
        'M1: 3θ = arccos(0.3) + 2πk, giving θ ≈ 0.42203, 2.5164, 4.6108.',
        'A1: One correct root, e.g. x ≈ 0.912.',
        'A1: The other two roots: x ≈ −0.811 and x ≈ −0.101.'
      ],
      hints: [
        'For (a), take the real part of the binomial expansion of <span class="chem">(cos theta + i sin theta)^3</span>.',
        'For (c), <span class="chem">arccos(0.3) ≈ 1.2661</span>. Three different values of <span class="chem">3 theta</span> (adding <span class="chem">2 pi</span> each time) give three different values of <span class="chem">cos theta</span>. You can check them with the GDC polynomial solver.'
      ],
      solution: '<p>(a) <span class="chem">cos(3 theta) = Re(c + is)^3 = c^3 - 3cs^2 = c^3 - 3c(1 - c^2) = 4c^3 - 3c</span>.<br>(b) <span class="chem">40x^3 - 30x - 3 = 0 &lt;=&gt; 4x^3 - 3x = 0.3 &lt;=&gt; cos(3 theta) = 0.3</span>.<br>(c) <span class="chem">3 theta = 1.2661, 1.2661 + 2pi, 1.2661 + 4pi</span>, so <span class="chem">theta ≈ 0.42203, 2.5164, 4.6108</span> and <span class="chem">x = cos theta ≈ 0.912, -0.811, -0.101</span>. These agree with the GDC polynomial solver.</p>'
    },
    {
      id: 't1-4-q051',
      topic: 't1-4',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.13, 1.14',
      type: 'short',
      marks: 8,
      stem: 'Let <span class="chem">S = cos(0.3) + cos(0.6) + cos(0.9) + … + cos(6)</span>, the sum of <span class="chem">cos(0.3k)</span> for <span class="chem">k = 1, 2, …, 20</span>.<br>(a) By writing <span class="chem">cos(0.3k) = Re(e^{0.3ki})</span>, show that <span class="chem">S = Re((e^{0.3i}(1 - e^{6i})) / (1 - e^{0.3i}))</span>. [3 marks]<br>(b) Hence find <span class="chem">S</span>, correct to 3 significant figures. [2 marks]<br>(c) By writing <span class="chem">1 - e^{6i} = e^{3i}(e^{-3i} - e^{3i})</span> and treating <span class="chem">1 - e^{0.3i}</span> in the same way, show that <span class="chem">S = (sin(3) cos(3.15)) / sin(0.15)</span>. [3 marks]',
      answer: '<p>(a) <span class="chem">S = Re(Sigma_{k=1}^{20} (e^{0.3i})^k)</span>, a geometric series with first term and ratio <span class="chem">e^{0.3i} != 1</span>, so the sum is <span class="chem">e^{0.3i}(1 - e^{6i})/(1 - e^{0.3i})</span>.<br>(b) <span class="chem">S ≈ -0.944</span>.<br>(c) <span class="chem">(1 - e^{6i})/(1 - e^{0.3i}) = (e^{3i}(-2i sin 3))/(e^{0.15i}(-2i sin 0.15)) = (sin 3 / sin 0.15) e^{2.85i}</span>; multiply by <span class="chem">e^{0.3i}</span> and take the real part.</p>',
      markscheme: [
        'M1: Writes S as the real part of the sum of (e<sup>0.3i</sup>)<sup>k</sup> for k = 1 to 20.',
        'A1: Recognises a geometric series with first term and ratio e<sup>0.3i</sup>, and that the ratio is not 1.',
        'A1: Uses S<sub>n</sub> = u₁(1 − r<sup>n</sup>)/(1 − r) with r²⁰ = e<sup>6i</sup> to reach the given form (AG).',
        'A1: Evaluates the complex expression on the GDC (radian mode).',
        'A1: S ≈ −0.944.',
        'M1: Uses e<sup>−ix</sup> − e<sup>ix</sup> = −2i sin x for both numerator and denominator.',
        'A1: Ratio = (sin 3/sin 0.15) e<sup>i(3 − 0.15)</sup>.',
        'A1: Multiplies by e<sup>0.3i</sup> to get (sin 3/sin 0.15) e<sup>3.15i</sup>; real part gives S = sin 3 cos 3.15/sin 0.15 (AG).'
      ],
      hints: [
        'Decode: a sum of cosines of an arithmetic sequence of angles is hidden as the real part of a geometric series <span class="chem">z + z^2 + … + z^{20}</span> with <span class="chem">z = e^{0.3i}</span>.',
        'The geometric series formula works for complex ratios too, as long as the ratio is not 1. Note <span class="chem">(e^{0.3i})^{20} = e^{6i}</span>.',
        'For (c), <span class="chem">e^{-ix} - e^{ix} = -2i sin x</span>. After cancelling, you should have <span class="chem">(sin 3 / sin 0.15) e^{3.15 i}</span>.'
      ],
      solution: '<p><strong>Decode.</strong> Turn a trig sum into a complex geometric series, sum it, then take the real part.<br>(a) <span class="chem">S = Re(z + z^2 + … + z^{20})</span> with <span class="chem">z = e^{0.3i} != 1</span>. The sum is <span class="chem">z(1 - z^{20})/(1 - z) = e^{0.3i}(1 - e^{6i})/(1 - e^{0.3i})</span>.<br>(b) On the GDC this is <span class="chem">≈ -0.94430 + …i</span>, so <span class="chem">S ≈ -0.944</span> (it agrees with the GDC sum of <span class="chem">cos(0.3k)</span>).<br>(c) <span class="chem">1 - e^{6i} = e^{3i}(-2i sin 3)</span> and <span class="chem">1 - e^{0.3i} = e^{0.15i}(-2i sin 0.15)</span>. So the sum is <span class="chem">e^{0.3i} × (sin 3/sin 0.15) e^{2.85i} = (sin 3/sin 0.15) e^{3.15i}</span>, whose real part is <span class="chem">sin(3) cos(3.15)/sin(0.15)</span>.</p>'
    },
    {
      id: 't1-4-q052',
      topic: 't1-4',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.13, 1.14',
      type: 'numeric',
      marks: 5,
      stem: 'A point starts at <span class="chem">z_0 = 1</span> on the Argand diagram. Every second its position is multiplied by <span class="chem">w = 0.95 e^{i pi/6}</span>, so after <span class="chem">n</span> seconds it is at <span class="chem">z_n = w^n</span>. Between consecutive positions it moves in a straight line. Find the total length of the path it travels as <span class="chem">n -&gt; infty</span>, correct to 3 significant figures.',
      answer: 10.140053901,
      sigfigs: 3,
      hints: [
        'Decode: the path is made of line segments from <span class="chem">z_n</span> to <span class="chem">z_{n+1}</span>. You need the sum of their lengths, <span class="chem">|z_{n+1} - z_n|</span>, which turns out to be a real geometric series.',
        '<span class="chem">z_{n+1} - z_n = w^n(w - 1)</span>, so its length is <span class="chem">|w|^n |w - 1| = 0.95^n |w - 1|</span>.',
        'Sum to infinity: <span class="chem">|w - 1| / (1 - 0.95)</span>. Find <span class="chem">|w - 1|</span> on the GDC.'
      ],
      solution: '<p><strong>Decode.</strong> The segment lengths form a geometric sequence, so the total length is a sum to infinity.<br>Segment <span class="chem">n</span> has length <span class="chem">|w^{n+1} - w^n| = |w|^n |w - 1| = 0.95^n |w - 1|</span>. With <span class="chem">|w - 1| ≈ 0.50700</span>, the total length is <span class="chem">0.50700 / (1 - 0.95) ≈ 10.1</span>.</p>'
    },
    {
      id: 't1-4-q053',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.12, 1.13',
      type: 'numeric',
      marks: 5,
      stem: 'The point <span class="chem">Z</span>, representing <span class="chem">z = x + yi</span>, is the same distance from the point representing <span class="chem">2i</span> as from the point representing <span class="chem">6</span>, so <span class="chem">|z - 2i| = |z - 6|</span>. Also <span class="chem">|z| = 5</span>. There are two such points. For the one with positive imaginary part, find <span class="chem">arg(z)</span> in radians, correct to 3 significant figures.',
      answer: 0.7185460691,
      sigfigs: 3,
      hints: [
        'Decode: "the same distance from two points" is the perpendicular bisector of the two points, a straight line; <span class="chem">|z| = 5</span> is a circle. Find where they meet.',
        'Square both sides of <span class="chem">|z - 2i| = |z - 6|</span>: <span class="chem">x^2 + (y - 2)^2 = (x - 6)^2 + y^2</span>, which simplifies to <span class="chem">y = 3x - 8</span>.',
        'Substitute into <span class="chem">x^2 + y^2 = 25</span> to get <span class="chem">10x^2 - 48x + 39 = 0</span>, and solve on the GDC.'
      ],
      solution: '<p><span class="chem">x^2 + (y - 2)^2 = (x - 6)^2 + y^2</span> gives <span class="chem">-4y + 4 = -12x + 36</span>, i.e. <span class="chem">y = 3x - 8</span>. With <span class="chem">x^2 + y^2 = 25</span>: <span class="chem">10x^2 - 48x + 39 = 0</span>, so <span class="chem">x ≈ 3.7638</span> or <span class="chem">x ≈ 1.0362</span>. These give <span class="chem">y ≈ 3.2915</span> and <span class="chem">y ≈ -4.8915</span>. The point with <span class="chem">y &gt; 0</span> is <span class="chem">3.7638 + 3.2915i</span>, with <span class="chem">arg(z) = arctan(3.2915/3.7638) ≈ 0.719</span> rad.</p>'
    },
    {
      id: 't1-4-q054',
      topic: 't1-4',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.14',
      type: 'numeric',
      marks: 6,
      stem: 'The six solutions of <span class="chem">z^6 + z^3 + 1 = 0</span> are the vertices of a hexagon on the Argand diagram. Find the area of this hexagon, correct to 3 significant figures.',
      answer: 2.4413930440,
      sigfigs: 3,
      hints: [
        'Decode: the equation is a quadratic in disguise. Put <span class="chem">u = z^3</span>, solve <span class="chem">u^2 + u + 1 = 0</span>, then take cube roots. The hexagon is not regular, so check the angles between neighbouring vertices.',
        '<span class="chem">u = e^{+- 2pi i/3}</span>, so every solution has modulus 1. The arguments are <span class="chem">(+- 2pi/3 + 2pi k)/3</span>: in degrees <span class="chem">+- 40°, +- 160°, +- 280°</span>, that is <span class="chem">40°, 80°, 160°, 200°, 280°, 320°</span>.',
        'Split the hexagon into six triangles at the origin. Neighbouring vertices are <span class="chem">40°</span> or <span class="chem">80°</span> apart, alternately, and each triangle has area <span class="chem">(1/2)(1)(1) sin(angle)</span>.'
      ],
      solution: '<p><strong>Decode.</strong> Treat the sextic as a quadratic in <span class="chem">z^3</span>, then use roots of complex numbers.<br><span class="chem">z^3 = (-1 +- sqrt(3)i)/2 = e^{+- 2 pi i/3}</span>. The solutions lie on the unit circle at <span class="chem">40°, 80°, 160°, 200°, 280°, 320°</span>. The angular gaps are <span class="chem">40°, 80°, 40°, 80°, 40°, 80°</span>, so the area is <span class="chem">3 × (1/2)(sin 40° + sin 80°) ≈ 3 × 0.5 × (0.64279 + 0.98481) ≈ 2.44</span>.</p>'
    },
    {
      id: 't1-4-q055',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.14',
      type: 'numeric',
      marks: 4,
      stem: 'The complex number <span class="chem">z</span> has <span class="chem">|z| = 2</span> and <span class="chem">0 &lt; arg(z) &lt; pi/6</span>. Given that <span class="chem">Re(z^3) = 5</span>, find <span class="chem">arg(z)</span>, in radians correct to 3 significant figures.',
      answer: 0.2985549313,
      sigfigs: 3,
      hints: [
        'Write <span class="chem">z = 2 e^{i theta}</span>. By De Moivre, <span class="chem">z^3 = 8 e^{3 i theta}</span>, so <span class="chem">Re(z^3) = 8 cos(3 theta)</span>.',
        'Solve <span class="chem">cos(3 theta) = 5/8</span> with <span class="chem">0 &lt; 3 theta &lt; pi/2</span>.'
      ],
      solution: '<p><span class="chem">z^3 = 8(cos(3 theta) + i sin(3 theta))</span>, so <span class="chem">8 cos(3 theta) = 5</span>. As <span class="chem">0 &lt; 3 theta &lt; pi/2</span>, <span class="chem">3 theta = arccos(0.625) ≈ 0.89566</span>, so <span class="chem">theta ≈ 0.299</span>.</p>'
    },
    {
      id: 't1-4-q056',
      topic: 't1-4',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.13',
      type: 'numeric',
      marks: 5,
      stem: 'For <span class="chem">0 &lt; theta &lt; pi</span>, let <span class="chem">w = 1 + 2 e^{i theta}</span>. On the Argand diagram, <span class="chem">w</span> is reached by walking 1 unit along the positive real axis and then 2 units at angle <span class="chem">theta</span>. Find the value of <span class="chem">theta</span> for which <span class="chem">arg(w) = 1</span>, correct to 3 significant figures.',
      answer: 1.4342559106,
      sigfigs: 3,
      hints: [
        'Decode: you need the argument of a <em>sum</em>, which is not the sum of the arguments. Write <span class="chem">w</span> in Cartesian form and set up an equation in <span class="chem">theta</span> that the GDC can solve.',
        '<span class="chem">w = (1 + 2 cos theta) + 2i sin theta</span>. Since <span class="chem">arg(w) = 1</span> is in Quadrant I, you need <span class="chem">2 sin theta / (1 + 2 cos theta) = tan 1</span> with <span class="chem">1 + 2 cos theta &gt; 0</span>.',
        'Graph <span class="chem">y = arg(1 + 2e^{ix})</span> (or the tangent equation) for <span class="chem">0 &lt; x &lt; pi</span> and find where it equals 1.'
      ],
      solution: '<p><strong>Decode.</strong> Sums must be done in Cartesian form; only then can you take an argument.<br><span class="chem">w = (1 + 2 cos theta) + 2i sin theta</span>. <span class="chem">arg(w) = 1</span> needs <span class="chem">1 + 2 cos theta &gt; 0</span> and <span class="chem">2 sin theta = tan(1)(1 + 2 cos theta)</span>. The GDC gives <span class="chem">theta ≈ 1.43</span> (check: <span class="chem">1 + 2 cos(1.4343) ≈ 1.272 &gt; 0</span>). As <span class="chem">theta</span> increases from 0 to <span class="chem">pi</span>, <span class="chem">arg(w)</span> increases from 0 to <span class="chem">pi</span>, so this is the only solution.</p>'
    },
    {
      id: 't1-4-q057',
      topic: 't1-4',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 3 (HL Investigation)',
      syllabus: 'AHL 1.14',
      type: 'short',
      marks: 17,
      stem: 'This investigation looks at sums of powers of the <span class="chem">n</span>-th roots of unity. For an integer <span class="chem">n &gt;= 2</span>, let <span class="chem">omega = e^{2 pi i / n}</span> and, for <span class="chem">m ∈ ℤ^+</span>, let <span class="chem">S(n, m) = 1 + omega^m + omega^{2m} + … + omega^{(n-1)m}</span>.<br>(a) For <span class="chem">n = 4</span>, <span class="chem">omega = i</span>. Write down <span class="chem">S(4, m)</span> for <span class="chem">m = 1, 2, 3, 4</span>. [2 marks]<br>(b) Use your GDC to find <span class="chem">S(6, m)</span> for <span class="chem">m = 1, 2, …, 6</span>. [2 marks]<br>(c) Conjecture a formula for <span class="chem">S(n, m)</span> in terms of <span class="chem">n</span> and <span class="chem">m</span>. [2 marks]<br>(d) Prove your conjecture: (i) when <span class="chem">n</span> divides <span class="chem">m</span>; [2 marks] (ii) when <span class="chem">n</span> does not divide <span class="chem">m</span>. [3 marks]<br>(e) By writing <span class="chem">cos^2 x = 1/2 + (1/4)(e^{2ix} + e^{-2ix})</span>, show that <span class="chem">Sigma_{k=0}^{n-1} cos^2(2 pi k / n) = n/2</span> for <span class="chem">n &gt;= 3</span>. [4 marks]<br>(f) Explain why the result of (e) is not true for <span class="chem">n = 2</span>, and find the correct value of the sum when <span class="chem">n = 2</span>. [2 marks]',
      answer: '<p>(a) <span class="chem">0, 0, 0, 4</span>.<br>(b) <span class="chem">0, 0, 0, 0, 0, 6</span>.<br>(c) <span class="chem">S(n, m) = n</span> if <span class="chem">n</span> divides <span class="chem">m</span>, and <span class="chem">S(n, m) = 0</span> otherwise.<br>(d)(i) If <span class="chem">m = qn</span> then <span class="chem">omega^m = e^{2 pi i q} = 1</span>, so every term is 1 and <span class="chem">S = n</span>. (ii) Otherwise <span class="chem">omega^m != 1</span>, so <span class="chem">S = (1 - omega^{mn})/(1 - omega^m) = 0</span> because <span class="chem">omega^{mn} = (omega^n)^m = 1</span>.<br>(e) The sum is <span class="chem">n/2 + (1/4)(S(n, 2) + S(n, 2)^*)</span>, and <span class="chem">S(n, 2) = 0</span> for <span class="chem">n &gt;= 3</span>.<br>(f) For <span class="chem">n = 2</span>, <span class="chem">n</span> divides 2, so <span class="chem">S(2, 2) = 2</span> and the sum is <span class="chem">cos^2 0 + cos^2 pi = 2</span>.</p>',
      markscheme: [
        'A1: S(4, 1) = S(4, 2) = S(4, 3) = 0.',
        'A1: S(4, 4) = 4.',
        'A1: S(6, m) = 0 for m = 1, …, 5 (GDC values like 1e-13 read as 0).',
        'A1: S(6, 6) = 6.',
        'A1: S(n, m) = n when n divides m.',
        'A1: S(n, m) = 0 when n does not divide m.',
        'M1: If m = qn, then ω<sup>m</sup> = e<sup>2πiq</sup> = 1.',
        'A1: Every one of the n terms equals 1, so S(n, m) = n.',
        'M1: If n does not divide m, ω<sup>m</sup> ≠ 1, so the geometric series formula applies with ratio ω<sup>m</sup>.',
        'A1: S(n, m) = (1 − ω<sup>mn</sup>)/(1 − ω<sup>m</sup>).',
        'R1: ω<sup>mn</sup> = (ω<sup>n</sup>)<sup>m</sup> = 1, so S(n, m) = 0.',
        'M1: Sums the given expression over k: n/2 + ¼ Σ(ω<sup>2k</sup> + ω<sup>−2k</sup>).',
        'A1: Identifies Σω<sup>2k</sup> = S(n, 2) and Σω<sup>−2k</sup> as its conjugate (or S(n, n − 2) with n − 2 ≥ 1, i.e. n ≥ 3).',
        'R1: For n ≥ 3, n does not divide 2 (nor n − 2), so both sums are 0.',
        'A1: Total n/2 (AG).',
        'R1: For n = 2, n divides 2, so S(2, 2) = 2 ≠ 0.',
        'A1: The sum is ½ × 2 + ¼(2 + 2) = 2 (check: cos²0 + cos²π = 2).'
      ],
      hints: [
        'Decode: this is a guided pattern-to-proof investigation. Each <span class="chem">S(n, m)</span> is a geometric series with ratio <span class="chem">omega^m</span>; the key question is whether that ratio equals 1.',
        'For (b), on the GDC use <span class="mono">sum(e^(2πi·k·m/6), k, 0, 5)</span>. Tiny values such as <span class="chem">2 × 10^{-13}</span> are rounding errors for 0.',
        'For (d)(ii), the formula <span class="chem">(1 - r^n)/(1 - r)</span> needs <span class="chem">r != 1</span>. Here <span class="chem">r = omega^m</span> and <span class="chem">r^n = (omega^n)^m</span>.',
        'For (e), the terms with <span class="chem">e^{2ix}</span> give <span class="chem">S(n, 2)</span>; the terms with <span class="chem">e^{-2ix}</span> give its complex conjugate. When is <span class="chem">S(n, 2)</span> zero?'
      ],
      solution: '<p><strong>Decode.</strong> Each sum is a finite geometric series with ratio <span class="chem">omega^m</span>; everything depends on whether <span class="chem">omega^m = 1</span>.<br>(a) <span class="chem">S(4, 1) = 1 + i - 1 - i = 0</span>, <span class="chem">S(4, 2) = 1 - 1 + 1 - 1 = 0</span>, <span class="chem">S(4, 3) = 1 - i - 1 + i = 0</span>, <span class="chem">S(4, 4) = 4</span>.<br>(b) The GDC gives <span class="chem">0</span> for <span class="chem">m = 1, …, 5</span> and <span class="chem">6</span> for <span class="chem">m = 6</span>.<br>(c) <span class="chem">S(n, m) = n</span> if <span class="chem">n | m</span>, otherwise <span class="chem">0</span>.<br>(d)(i) <span class="chem">m = qn =&gt; omega^m = e^{2 pi i q} = 1</span>, so all <span class="chem">n</span> terms are 1. (ii) <span class="chem">omega^m = e^{2 pi i m/n} != 1</span> since <span class="chem">m/n ∉ ℤ</span>; then <span class="chem">S = (1 - (omega^m)^n)/(1 - omega^m) = (1 - (omega^n)^m)/(1 - omega^m) = 0</span>.<br>(e) With <span class="chem">x = 2 pi k / n</span>, <span class="chem">e^{2ix} = omega^{2k}</span>. Summing: <span class="chem">n/2 + (1/4)(S(n, 2) + S(n, 2)^*)</span>. For <span class="chem">n &gt;= 3</span>, <span class="chem">n</span> does not divide 2, so <span class="chem">S(n, 2) = 0</span> and the sum is <span class="chem">n/2</span>.<br>(f) For <span class="chem">n = 2</span>, <span class="chem">S(2, 2) = 2</span>, so the sum is <span class="chem">1 + (1/4)(4) = 2</span>, not <span class="chem">n/2 = 1</span>.</p>'
    },
    {
      id: 't1-4-q058',
      topic: 't1-4',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 3 (HL Investigation)',
      syllabus: 'AHL 1.14',
      type: 'short',
      marks: 18,
      stem: 'This investigation looks at writing <span class="chem">cos(n theta)</span> as a polynomial in <span class="chem">cos theta</span>. For <span class="chem">n ∈ ℕ</span>, let <span class="chem">T_n</span> be the polynomial with <span class="chem">cos(n theta) = T_n(cos theta)</span> for all <span class="chem">theta</span>.<br>(a) Write down <span class="chem">T_1(x)</span> and <span class="chem">T_2(x)</span>. [2 marks]<br>(b) Use De Moivre\'s theorem to show that <span class="chem">T_3(x) = 4x^3 - 3x</span>. [3 marks]<br>(c) By considering <span class="chem">e^{i(n+1)theta} + e^{i(n-1)theta}</span>, show that <span class="chem">cos((n + 1)theta) + cos((n - 1)theta) = 2 cos theta cos(n theta)</span>, and deduce that <span class="chem">T_{n+1}(x) = 2x T_n(x) - T_{n-1}(x)</span> for <span class="chem">n &gt;= 1</span>. [3 marks]<br>(d) Hence find <span class="chem">T_4(x)</span> and <span class="chem">T_5(x)</span>. [2 marks]<br>(e) Conjecture the leading coefficient of <span class="chem">T_n(x)</span> for <span class="chem">n &gt;= 1</span>, and explain how the result of (c) supports your conjecture. [2 marks]<br>(f) (i) By putting <span class="chem">x = cos theta</span>, find the five solutions of <span class="chem">32x^5 - 40x^3 + 10x - 1 = 0</span> exactly, in the form <span class="chem">cos(k pi / 15)</span>. [3 marks] (ii) Use your GDC to check your largest solution, correct to 3 significant figures. [1 mark]<br>(g) Hence find the exact value of <span class="chem">cos(pi/15) cos(7pi/15) cos(11pi/15) cos(13pi/15)</span>. [2 marks]',
      answer: '<p>(a) <span class="chem">T_1(x) = x</span>, <span class="chem">T_2(x) = 2x^2 - 1</span>.<br>(b) <span class="chem">cos(3 theta) = Re(c + is)^3 = c^3 - 3cs^2 = 4c^3 - 3c</span>.<br>(c) <span class="chem">e^{i(n+1)theta} + e^{i(n-1)theta} = e^{in theta}(e^{i theta} + e^{-i theta}) = 2 cos theta e^{in theta}</span>; take real parts.<br>(d) <span class="chem">T_4(x) = 8x^4 - 8x^2 + 1</span>, <span class="chem">T_5(x) = 16x^5 - 20x^3 + 5x</span>.<br>(e) <span class="chem">2^{n-1}</span>: the recurrence doubles the leading coefficient at each step, starting from 1.<br>(f)(i) The equation is <span class="chem">T_5(x) = 1/2</span>, i.e. <span class="chem">cos(5 theta) = 1/2</span>: <span class="chem">x = cos(pi/15), cos(5pi/15), cos(7pi/15), cos(11pi/15), cos(13pi/15)</span>. (ii) <span class="chem">cos(pi/15) ≈ 0.978</span>.<br>(g) The product of the five roots is <span class="chem">1/32</span>; dividing by <span class="chem">cos(pi/3) = 1/2</span> gives <span class="chem">1/16</span>.</p>',
      markscheme: [
        'A1: T₁(x) = x.',
        'A1: T₂(x) = 2x² − 1 (from cos 2θ = 2cos²θ − 1).',
        'M1: cos 3θ = Re[(cos θ + i sin θ)³], expanded binomially.',
        'A1: cos 3θ = c³ − 3cs².',
        'A1: Uses s² = 1 − c² to reach 4c³ − 3c (AG).',
        'M1: Factorises e<sup>i(n+1)θ</sup> + e<sup>i(n−1)θ</sup> = e<sup>inθ</sup>(e<sup>iθ</sup> + e<sup>−iθ</sup>) = 2cos θ e<sup>inθ</sup>.',
        'A1: Equates real parts: cos(n + 1)θ + cos(n − 1)θ = 2cos θ cos nθ (AG).',
        'R1: Writes each cosine as T<sub>k</sub>(cos θ) with x = cos θ, so T<sub>n+1</sub>(x) = 2xT<sub>n</sub>(x) − T<sub>n−1</sub>(x) (AG).',
        'A1: T₄(x) = 2x(4x³ − 3x) − (2x² − 1) = 8x⁴ − 8x² + 1.',
        'A1: T₅(x) = 2x(8x⁴ − 8x² + 1) − (4x³ − 3x) = 16x⁵ − 20x³ + 5x.',
        'A1: Conjecture: leading coefficient 2<sup>n−1</sup>.',
        'R1: In the recurrence only 2xT<sub>n</sub> contributes the degree n + 1 term, so each step doubles the leading coefficient, starting from 1 for T₁.',
        'M1: Divides by 2 and recognises T₅(x) = ½, i.e. cos 5θ = ½.',
        'A1: 5θ = π/3, 5π/3, 7π/3, 11π/3, 13π/3 for θ in [0, π].',
        'A1: x = cos(π/15), cos(5π/15), cos(7π/15), cos(11π/15), cos(13π/15).',
        'A1: The GDC gives the largest root as 0.978 = cos(π/15).',
        'M1: Product of the roots of 32x⁵ − 40x³ + 10x − 1 = 0 is −(−1)/32 = 1/32.',
        'A1: Divides by cos(5π/15) = ½ to get 1/16.'
      ],
      hints: [
        'Decode: the investigation builds a family of multiple-angle identities. Part (c) gives a recurrence, so after <span class="chem">T_3</span> you never need to expand a binomial again. Part (f) is the payoff: an ugly quintic is really <span class="chem">cos(5 theta) = 1/2</span>.',
        'For (c), take out the factor <span class="chem">e^{in theta}</span>; what remains is <span class="chem">2 cos theta</span>. Then compare real parts.',
        'For (f), <span class="chem">32x^5 - 40x^3 + 10x = 2 T_5(x)</span>. For five different values of <span class="chem">x = cos theta</span>, take five different <span class="chem">theta</span> values in <span class="chem">[0, pi]</span>.',
        'For (g), the product of the roots of <span class="chem">a x^5 + … + f = 0</span> is <span class="chem">-f/a</span>. One of the five roots is <span class="chem">cos(pi/3)</span>.'
      ],
      solution: '<p><strong>Decode.</strong> De Moivre gives a few cases, Euler\'s form gives a recurrence that produces all of them, and the last part spots a hidden <span class="chem">cos(5 theta)</span>.<br>(a) <span class="chem">T_1 = x</span>, <span class="chem">T_2 = 2x^2 - 1</span>.<br>(b) <span class="chem">(c + is)^3 = c^3 + 3ic^2 s - 3cs^2 - is^3</span>; real part <span class="chem">c^3 - 3c(1 - c^2) = 4c^3 - 3c</span>.<br>(c) <span class="chem">e^{i(n+1)theta} + e^{i(n-1)theta} = e^{in theta}(2 cos theta)</span>. Real parts: <span class="chem">cos((n+1)theta) + cos((n-1)theta) = 2 cos theta cos(n theta)</span>; with <span class="chem">x = cos theta</span> this is <span class="chem">T_{n+1}(x) + T_{n-1}(x) = 2x T_n(x)</span>.<br>(d) <span class="chem">T_4 = 2x(4x^3 - 3x) - (2x^2 - 1) = 8x^4 - 8x^2 + 1</span>; <span class="chem">T_5 = 2x(8x^4 - 8x^2 + 1) - (4x^3 - 3x) = 16x^5 - 20x^3 + 5x</span>.<br>(e) Leading coefficients <span class="chem">1, 2, 4, 8, 16</span>: conjecture <span class="chem">2^{n-1}</span>. The term of highest degree in <span class="chem">T_{n+1}</span> comes only from <span class="chem">2x T_n</span>, which doubles it.<br>(f)(i) <span class="chem">32x^5 - 40x^3 + 10x - 1 = 0 &lt;=&gt; T_5(x) = 1/2 &lt;=&gt; cos(5 theta) = 1/2</span>. For <span class="chem">theta ∈ [0, pi]</span>: <span class="chem">5 theta = pi/3, 5pi/3, 7pi/3, 11pi/3, 13pi/3</span>, giving <span class="chem">x = cos(pi/15), cos(pi/3), cos(7pi/15), cos(11pi/15), cos(13pi/15)</span>, which are five different numbers. (ii) GDC: largest root <span class="chem">≈ 0.978 = cos(pi/15)</span>.<br>(g) The product of all five roots is <span class="chem">-(-1)/32 = 1/32</span>. Dividing by <span class="chem">cos(pi/3) = 1/2</span>: the required product is <span class="chem">1/16</span>.</p>'
    },
    {
      id: 't1-4-q059',
      topic: 't1-4',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 3 (HL Investigation)',
      syllabus: 'AHL 1.14',
      type: 'short',
      marks: 17,
      stem: 'This investigation looks at distances between the vertices of a regular polygon. For <span class="chem">n &gt;= 2</span>, the <span class="chem">n</span>-th roots of unity <span class="chem">1, omega, omega^2, …, omega^{n-1}</span>, where <span class="chem">omega = e^{2 pi i / n}</span>, are the vertices of a regular <span class="chem">n</span>-gon. Let <span class="chem">P_n</span> be the product of the distances from the vertex <span class="chem">1</span> to each of the other <span class="chem">n - 1</span> vertices: <span class="chem">P_n = |1 - omega| × |1 - omega^2| × … × |1 - omega^{n-1}|</span>.<br>(a) Find the exact values of <span class="chem">P_3</span> and <span class="chem">P_4</span>. [3 marks]<br>(b) Use your GDC to find <span class="chem">P_5</span> and <span class="chem">P_6</span>. [2 marks]<br>(c) Write down a conjecture for <span class="chem">P_n</span>. [1 mark]<br>(d) (i) Explain why <span class="chem">z^n - 1 = (z - 1)(z - omega)(z - omega^2) … (z - omega^{n-1})</span>. [1 mark] (ii) Hence show that <span class="chem">1 + z + z^2 + … + z^{n-1} = (z - omega)(z - omega^2) … (z - omega^{n-1})</span>. [2 marks] (iii) Hence prove your conjecture. [2 marks]<br>(e) Show that <span class="chem">|1 - e^{i theta}| = 2 sin(theta/2)</span> for <span class="chem">0 &lt; theta &lt; 2pi</span>. [3 marks]<br>(f) Hence show that <span class="chem">sin(pi/n) sin(2pi/n) … sin((n - 1)pi/n) = n / 2^{n-1}</span>, and find the exact value of <span class="chem">sin(pi/6) sin(2pi/6) sin(3pi/6) sin(4pi/6) sin(5pi/6)</span>. [3 marks]',
      answer: '<p>(a) <span class="chem">P_3 = sqrt(3) × sqrt(3) = 3</span>; <span class="chem">P_4 = sqrt(2) × 2 × sqrt(2) = 4</span>.<br>(b) <span class="chem">P_5 = 5</span>, <span class="chem">P_6 = 6</span>.<br>(c) <span class="chem">P_n = n</span>.<br>(d)(i) The <span class="chem">n</span> roots of the degree-<span class="chem">n</span> monic polynomial <span class="chem">z^n - 1</span> are exactly the <span class="chem">n</span> distinct roots of unity. (ii) Also <span class="chem">z^n - 1 = (z - 1)(1 + z + … + z^{n-1})</span>; cancel the factor <span class="chem">z - 1</span>. (iii) Put <span class="chem">z = 1</span>: <span class="chem">n = (1 - omega)…(1 - omega^{n-1})</span>; take moduli.<br>(e) <span class="chem">|1 - e^{i theta}|^2 = (1 - cos theta)^2 + sin^2 theta = 2 - 2 cos theta = 4 sin^2(theta/2)</span>, and <span class="chem">sin(theta/2) &gt; 0</span>.<br>(f) <span class="chem">|1 - omega^k| = 2 sin(k pi / n)</span>, so <span class="chem">2^{n-1} × product = n</span>; for <span class="chem">n = 6</span> the product is <span class="chem">6/32 = 3/16</span>.</p>',
      markscheme: [
        'M1: Uses |1 − ω| = |1 − ω²| = √3 for n = 3 (e.g. 1 − (−½ + (√3/2)i) = 3/2 − (√3/2)i).',
        'A1: P₃ = 3.',
        'A1: P₄ = |1 − i| × |1 + 1| × |1 + i| = √2 × 2 × √2 = 4.',
        'A1: P₅ = 5 (GDC).',
        'A1: P₆ = 6 (GDC).',
        'A1: Conjecture P<sub>n</sub> = n.',
        'R1: The ω<sup>k</sup>, k = 0, …, n − 1, are n distinct roots of the monic degree-n polynomial z<sup>n</sup> − 1, so it factorises fully over them.',
        'M1: Uses z<sup>n</sup> − 1 = (z − 1)(1 + z + … + z<sup>n−1</sup>).',
        'A1: Cancels (z − 1) for z ≠ 1, and the identity of polynomials extends to z = 1 (AG).',
        'M1: Substitutes z = 1: (1 − ω)(1 − ω²)…(1 − ω<sup>n−1</sup>) = n.',
        'A1: Takes moduli: P<sub>n</sub> = n.',
        'M1: |1 − e<sup>iθ</sup>|² = (1 − cos θ)² + sin²θ.',
        'A1: = 2 − 2cos θ = 4sin²(θ/2) (using cos θ = 1 − 2sin²(θ/2)).',
        'R1: sin(θ/2) > 0 for 0 < θ < 2π, so |1 − e<sup>iθ</sup>| = 2sin(θ/2) (AG).',
        'M1: |1 − ω<sup>k</sup>| = 2sin(kπ/n), so P<sub>n</sub> = 2<sup>n−1</sup> × Π sin(kπ/n).',
        'A1: Π sin(kπ/n) = n/2<sup>n−1</sup> (AG).',
        'A1: For n = 6: 6/2⁵ = 3/16.'
      ],
      hints: [
        'Decode: a product of lengths is the modulus of a product of complex numbers. The real question is: what is <span class="chem">(1 - omega)(1 - omega^2)…(1 - omega^{n-1})</span>? Factorising <span class="chem">z^n - 1</span> answers it.',
        'For (b), multiply the moduli <span class="chem">|1 - e^{2 pi i k/n}|</span> for <span class="chem">k = 1, …, n - 1</span> on the GDC, or use <span class="mono">prod(abs(1 − e^(2πik/n)), k, 1, n − 1)</span>.',
        'For (d)(iii), put <span class="chem">z = 1</span> into the identity of (d)(ii). The left side becomes <span class="chem">1 + 1 + … + 1</span>.',
        'For (e), use <span class="chem">1 - cos theta = 2 sin^2(theta/2)</span>. For (f), the angle of <span class="chem">omega^k</span> is <span class="chem">2 pi k / n</span>, so half of it is <span class="chem">k pi / n</span>.'
      ],
      solution: '<p><strong>Decode.</strong> Turn the geometry (a product of distances) into algebra (the modulus of a product of linear factors of <span class="chem">z^n - 1</span>).<br>(a) For <span class="chem">n = 3</span>: <span class="chem">|1 - omega| = |3/2 - (sqrt(3)/2)i| = sqrt(3)</span>, and the same for <span class="chem">omega^2</span>, so <span class="chem">P_3 = 3</span>. For <span class="chem">n = 4</span>: <span class="chem">sqrt(2) × 2 × sqrt(2) = 4</span>.<br>(b) GDC: <span class="chem">P_5 = 5</span>, <span class="chem">P_6 = 6</span>. (c) <span class="chem">P_n = n</span>.<br>(d)(i) The <span class="chem">n</span> numbers <span class="chem">omega^k</span> are distinct roots of <span class="chem">z^n - 1</span>, which has degree <span class="chem">n</span> and leading coefficient 1. (ii) <span class="chem">z^n - 1 = (z - 1)(1 + z + … + z^{n-1})</span>; comparing with (i) and cancelling <span class="chem">z - 1</span> gives the result (both sides are polynomials that agree for every <span class="chem">z != 1</span>, so they are identical). (iii) At <span class="chem">z = 1</span>: <span class="chem">n = (1 - omega)…(1 - omega^{n-1})</span>. Taking moduli, <span class="chem">P_n = n</span>.<br>(e) <span class="chem">|1 - e^{i theta}|^2 = 1 - 2 cos theta + cos^2 theta + sin^2 theta = 2 - 2 cos theta = 4 sin^2(theta/2)</span>, and <span class="chem">sin(theta/2) &gt; 0</span> on <span class="chem">(0, 2pi)</span>.<br>(f) <span class="chem">|1 - omega^k| = 2 sin(k pi/n)</span>, so <span class="chem">n = P_n = 2^{n-1} sin(pi/n)…sin((n - 1)pi/n)</span>. For <span class="chem">n = 6</span>: <span class="chem">6/32 = 3/16</span> (check: <span class="chem">(1/2)(sqrt(3)/2)(1)(sqrt(3)/2)(1/2) = 3/16</span>).</p>'
    },
    {
      id: 't1-4-q060',
      topic: 't1-4',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 3 (HL Investigation)',
      syllabus: 'AHL 1.14, SL 1.9',
      type: 'short',
      marks: 16,
      stem: 'This investigation uses the cube roots of unity to add every third binomial coefficient. For <span class="chem">n ∈ ℤ^+</span>, let <span class="chem"><i>A</i><sub><i>n</i></sub> = <sup><i>n</i></sup>C<sub>0</sub> + <sup><i>n</i></sup>C<sub>3</sub> + <sup><i>n</i></sup>C<sub>6</sub> + …</span>, the sum of the binomial coefficients <span class="chem"><sup><i>n</i></sup>C<sub><i>r</i></sub></span> for which <span class="chem">r</span> is a multiple of 3.<br>(a) Find <span class="chem">A_n</span> for <span class="chem">n = 1, 2, 3, 4, 5, 6</span>. [2 marks]<br>(b) Compare each value with <span class="chem">2^n / 3</span>, and comment. [1 mark]<br>(c) Let <span class="chem">omega = e^{2 pi i / 3}</span>. Show that <span class="chem">1 + omega + omega^2 = 0</span>, and deduce that <span class="chem">1 + omega^r + omega^{2r}</span> equals 3 when <span class="chem">r</span> is a multiple of 3 and 0 otherwise. [3 marks]<br>(d) By expanding each term with the binomial theorem, show that <span class="chem">(1 + 1)^n + (1 + omega)^n + (1 + omega^2)^n = 3A_n</span>. [3 marks]<br>(e) Show that <span class="chem">1 + omega = e^{i pi/3}</span> and <span class="chem">1 + omega^2 = e^{-i pi/3}</span>. Hence show that <span class="chem">A_n = (2^n + 2 cos(n pi/3)) / 3</span>. [4 marks]<br>(f) Verify the formula for <span class="chem">n = 6</span>. [1 mark]<br>(g) Find <span class="chem">A_10</span>. [2 marks]',
      answer: '<p>(a) <span class="chem">1, 1, 2, 5, 11, 22</span>.<br>(b) <span class="chem">2^n/3 ≈ 0.667, 1.33, 2.67, 5.33, 10.7, 21.3</span>: each <span class="chem">A_n</span> differs from <span class="chem">2^n/3</span> by <span class="chem">1/3</span> or <span class="chem">2/3</span>.<br>(c) <span class="chem">1 + omega + omega^2 = (1 - omega^3)/(1 - omega) = 0</span>; if <span class="chem">3 | r</span> each term is 1, otherwise <span class="chem">omega^r</span> is <span class="chem">omega</span> or <span class="chem">omega^2</span> and the sum is <span class="chem">1 + omega + omega^2 = 0</span>.<br>(d) The sum is <span class="chem">Σ<sub><i>r</i></sub> <sup><i>n</i></sup>C<sub><i>r</i></sub>(1 + ω<sup><i>r</i></sup> + ω<sup>2<i>r</i></sup>) = 3 Σ<sub>3|<i>r</i></sub> <sup><i>n</i></sup>C<sub><i>r</i></sub></span>.<br>(e) <span class="chem">1 + omega = 1/2 + (sqrt(3)/2)i = e^{i pi/3}</span>; then <span class="chem">3A_n = 2^n + e^{in pi/3} + e^{-in pi/3} = 2^n + 2 cos(n pi/3)</span>.<br>(f) <span class="chem">(64 + 2)/3 = 22</span>.<br>(g) <span class="chem">A_10 = (1024 + 2 cos(10pi/3))/3 = (1024 - 1)/3 = 341</span>.</p>',
      markscheme: [
        'A1: A₁ = 1, A₂ = 1, A₃ = 2.',
        'A1: A₄ = 5, A₅ = 11, A₆ = 22.',
        'A1: A<sub>n</sub> is close to 2<sup>n</sup>/3, differing by 1/3 or 2/3.',
        'M1: 1 + ω + ω² = (1 − ω³)/(1 − ω) with ω ≠ 1 (or the sum of the roots of z³ − 1 = 0).',
        'A1: = 0, since ω³ = 1.',
        'R1: If 3 | r, ω<sup>r</sup> = ω<sup>2r</sup> = 1, so the sum is 3; otherwise {ω<sup>r</sup>, ω<sup>2r</sup>} = {ω, ω²}, so the sum is 0.',
        'M1: Expands each power: Σ<sup>n</sup>C<sub>r</sub>·1<sup>r</sup>, Σ<sup>n</sup>C<sub>r</sub>ω<sup>r</sup>, Σ<sup>n</sup>C<sub>r</sub>ω<sup>2r</sup>.',
        'A1: Adds term by term: Σ<sup>n</sup>C<sub>r</sub>(1 + ω<sup>r</sup> + ω<sup>2r</sup>).',
        'R1: Uses (c): only r divisible by 3 survive, each with factor 3, giving 3A<sub>n</sub> (AG).',
        'A1: 1 + ω = 1 + (−½ + (√3/2)i) = ½ + (√3/2)i = e<sup>iπ/3</sup>, and 1 + ω² is its conjugate e<sup>−iπ/3</sup>.',
        'M1: Uses De Moivre: (1 + ω)<sup>n</sup> = e<sup>inπ/3</sup> and (1 + ω²)<sup>n</sup> = e<sup>−inπ/3</sup>.',
        'A1: e<sup>inπ/3</sup> + e<sup>−inπ/3</sup> = 2cos(nπ/3).',
        'A1: So 3A<sub>n</sub> = 2<sup>n</sup> + 2cos(nπ/3) (AG).',
        'A1: n = 6: (64 + 2cos 2π)/3 = 66/3 = 22, matching (a).',
        'M1: A₁₀ = (2¹⁰ + 2cos(10π/3))/3 with cos(10π/3) = −½.',
        'A1: A₁₀ = 341.'
      ],
      hints: [
        'Decode: the cube roots of unity act as a "filter". Adding <span class="chem">1 + omega^r + omega^{2r}</span> keeps the terms with <span class="chem">r</span> a multiple of 3 and kills the others, so three binomial expansions added together leave only every third coefficient.',
        'For (a), use Pascal\'s triangle, e.g. <span class="chem"><i>A</i><sub>6</sub> = <sup>6</sup>C<sub>0</sub> + <sup>6</sup>C<sub>3</sub> + <sup>6</sup>C<sub>6</sub> = 1 + 20 + 1</span>.',
        'For (d), line up the three expansions <span class="chem">Σ<sub><i>r</i></sub> <sup><i>n</i></sup>C<sub><i>r</i></sub> <i>x</i><sup><i>r</i></sup></span> with <span class="chem">x = 1, omega, omega^2</span> and add coefficient by coefficient.',
        'For (e), <span class="chem">omega = -1/2 + (sqrt(3)/2)i</span>. A number plus its conjugate is twice its real part.'
      ],
      solution: '<p><strong>Decode.</strong> This is the roots-of-unity filter: the identity in (c) turns a sum over every third coefficient into three ordinary binomial expansions, which De Moivre can evaluate.<br>(a) <span class="chem">A_1 = 1</span>, <span class="chem">A_2 = 1</span>, <span class="chem">A_3 = 1 + 1 = 2</span>, <span class="chem">A_4 = 1 + 4 = 5</span>, <span class="chem">A_5 = 1 + 10 = 11</span>, <span class="chem">A_6 = 1 + 20 + 1 = 22</span>.<br>(b) Each differs from <span class="chem">2^n/3</span> by <span class="chem">1/3</span> or <span class="chem">2/3</span>.<br>(c) <span class="chem">omega != 1</span> and <span class="chem">omega^3 = 1</span>, so <span class="chem">1 + omega + omega^2 = (1 - omega^3)/(1 - omega) = 0</span>. If <span class="chem">r = 3q</span>, every term is 1 (sum 3); otherwise <span class="chem">omega^r</span> and <span class="chem">omega^{2r}</span> are <span class="chem">omega</span> and <span class="chem">omega^2</span> in some order (sum 0).<br>(d) <span class="chem">Σ<sub><i>r</i></sub> <sup><i>n</i></sup>C<sub><i>r</i></sub>(1 + ω<sup><i>r</i></sup> + ω<sup>2<i>r</i></sup>) = 3 × Σ<sub><i>r</i> = 0, 3, 6, …</sub> <sup><i>n</i></sup>C<sub><i>r</i></sub> = 3<i>A</i><sub><i>n</i></sub></span>.<br>(e) <span class="chem">1 + omega = 1/2 + (sqrt(3)/2)i = e^{i pi/3}</span> and <span class="chem">1 + omega^2 = e^{-i pi/3}</span>. By De Moivre, <span class="chem">3A_n = 2^n + e^{in pi/3} + e^{-in pi/3} = 2^n + 2 cos(n pi/3)</span>.<br>(f) <span class="chem">(64 + 2)/3 = 22</span> ✓.<br>(g) <span class="chem">cos(10pi/3) = cos(4pi/3) = -1/2</span>, so <span class="chem">A_10 = (1024 - 1)/3 = 341</span> (check: <span class="chem">1 + 120 + 210 + 10 = 341</span>).</p>'
    }
  ]);
})();
