/* ==========================================================================
   Analysis Lab — questions-t2-3.js
   Question bank for Topic 2.3: Transformations, polynomials & modulus
   (SL 2.11 + AHL 2.12–2.16).
   21 original questions across foundation, exam, and challenge tiers.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.questions) return;

  S1.questions.register('t2-3', [
    {
      id: 't2-3-q001',
      type: 'mcq',
      tier: 'foundation',
      level: 'sl',
      paper: 'P1',
      syllabus: 'SL 2.11',
      marks: 2,
      stem: '<p>The point <span class="chem">P(4, -3)</span> lies on the graph of <span class="chem">y = f(x)</span>. Find the coordinates of the image of <span class="chem">P</span> on the graph of <span class="chem">y = 2 f(x - 1) + 5</span>.</p>',
      options: [
        '<span class="chem">(5, -1)</span>',
        '<span class="chem">(3, -1)</span>',
        '<span class="chem">(5, -11)</span>',
        '<span class="chem">(8, 2)</span>'
      ],
      answer: 0,
      misconception: {
        1: 'Inside f(x − 1), subtracting 1 shifts the graph 1 unit RIGHT (x_new = 4 + 1 = 5), not left.',
        2: 'You shifted down instead of up: 2(−3) − 5 = −11. The +5 in 2 f(x − 1) + 5 means up 5, giving 2(−3) + 5 = −1.',
        3: 'The horizontal transformation is a translation by +1, not a stretch by 2.'
      },
      hints: [
        'Horizontal shift <span class="chem">f(x - 1)</span> adds <span class="chem">1</span> to the <span class="chem">x</span>-coordinate.',
        'Vertical stretch and shift <span class="chem">2y + 5</span> gives <span class="chem">2(-3) + 5</span>.'
      ],
      solution: '<p>Using <span class="chem">x_{new} = x_0 + 1 = 5</span> and <span class="chem">y_{new} = 2y_0 + 5 = 2(-3) + 5 = -1</span>, the image is <span class="chem">(5, -1)</span>.</p>'
    },
    {
      id: 't2-3-q002',
      type: 'numeric',
      tier: 'foundation',
      level: 'sl',
      paper: 'P1',
      syllabus: 'SL 2.11',
      marks: 2,
      stem: '<p>The point <span class="chem">(-6, 5)</span> lies on <span class="chem">y = f(x)</span>. Find the <span class="chem">x</span>-coordinate of its image on the graph of <span class="chem">y = -f(3x + 3) + 2</span>.</p>',
      answer: -3,
      tolerance: 0.001,
      hints: [
        'Set the inside expression equal to the original <span class="chem">x</span>-coordinate: <span class="chem">3x_{new} + 3 = -6</span>.',
        'Solve <span class="chem">3x_{new} = -9</span> for <span class="chem">x_{new}</span>.'
      ],
      solution: '<p>Equating arguments gives <span class="chem">3x_{new} + 3 = -6 => 3x_{new} = -9 => x_{new} = -3</span>. (Factoring <span class="chem">3(x + 1)</span> also shows horizontal stretch by <span class="chem">1/3</span> to <span class="chem">-2</span>, then shift <span class="chem">1</span> unit left to <span class="chem">-3</span>.)</p>'
    },
    {
      id: 't2-3-q003',
      type: 'order',
      tier: 'exam',
      level: 'sl',
      paper: 'P1',
      syllabus: 'SL 2.11',
      marks: 4,
      stem: '<p>Arrange these transformations in order (top to bottom) to map <span class="chem">y = f(x)</span> onto <span class="chem">y = -3 f(2x - 8) + 1</span>. Use this convention: <strong>all horizontal transformations first, then the vertical ones</strong>, and in each direction the stretch (with any reflection) <strong>before</strong> the translation.</p>',
      options: [
        'Horizontal stretch of scale factor <span class="chem">1/2</span> parallel to the <span class="chem">x</span>-axis',
        'Horizontal translation of <span class="chem">4</span> units to the right',
        'Vertical stretch of scale factor <span class="chem">3</span> and reflection in the <span class="chem">x</span>-axis',
        'Vertical translation of <span class="chem">1</span> unit up'
      ],
      answer: [0, 1, 2, 3],
      hints: [
        'Factor <span class="chem">2</span> inside <span class="chem">f</span> first: <span class="chem">-3 f(2(x - 4)) + 1</span>.',
        'In factored form, apply stretches/reflections before translations in each direction.'
      ],
      solution: '<p>Writing <span class="chem">y = -3 f(2(x - 4)) + 1</span>: horizontally stretch by <span class="chem">1/2</span> then translate <span class="chem">4</span> units right; vertically stretch by <span class="chem">3</span> with <span class="chem">x</span>-axis reflection then translate <span class="chem">1</span> unit up. (Horizontal and vertical steps do not affect each other, so in an exam other orders are also valid as long as, in each direction, the stretch comes before the translation; the convention in the question fixes one order.)</p>'
    },
    {
      id: 't2-3-q004',
      type: 'mcq',
      tier: 'foundation',
      level: 'ahl',
      paper: 'P1',
      syllabus: 'AHL 2.12',
      marks: 2,
      stem: '<p>Find the remainder when <span class="chem">P(x) = 2x^3 - 3x^2 + 4x - 5</span> is divided by <span class="chem">(2x - 1)</span>.</p>',
      options: [
        '<span class="chem">-7/2</span>',
        '<span class="chem">-2</span>',
        '<span class="chem">-8</span>',
        '<span class="chem">-5/2</span>'
      ],
      answer: 0,
      misconception: {
        1: 'You evaluated P(1) = 2 − 3 + 4 − 5 = −2 instead of P(1/2).',
        2: 'You evaluated P(−1/2) = −1/4 − 3/4 − 2 − 5 = −8 instead of P(1/2). The root of 2x − 1 = 0 is x = +1/2.',
        3: 'Sign slip: 1/4 − 3/4 = −1/2, not +1/2. With +1/2 you get 1/2 − 3 = −5/2 instead of −1/2 − 3 = −7/2.'
      },
      hints: [
        'By the Remainder Theorem, the remainder when dividing by <span class="chem">(2x - 1)</span> is <span class="chem">P(1/2)</span>.',
        'Compute <span class="chem">2(1/8) - 3(1/4) + 4(1/2) - 5</span>.'
      ],
      solution: '<p><span class="chem">P(1/2) = 2(1/8) - 3(1/4) + 4(1/2) - 5 = 1/4 - 3/4 + 2 - 5 = -1/2 - 3 = -7/2</span>.</p>'
    },
    {
      id: 't2-3-q005',
      type: 'numeric',
      tier: 'exam',
      level: 'ahl',
      paper: 'P1',
      syllabus: 'AHL 2.12',
      marks: 3,
      stem: '<p>The polynomial <span class="chem">P(x) = x^3 + kx^2 - 5x + 6</span> is divisible by <span class="chem">(x - 3)</span>. Find the exact value of <span class="chem">k</span>.</p>',
      answer: -2,
      tolerance: 0.001,
      hints: [
        'By the Factor Theorem, <span class="chem">P(3) = 0</span>.',
        'Substitute <span class="chem">x = 3</span>: <span class="chem">27 + 9k - 15 + 6 = 0</span>.'
      ],
      solution: '<p>Setting <span class="chem">P(3) = 0</span> gives <span class="chem">3^3 + k(3)^2 - 5(3) + 6 = 0 => 27 + 9k - 15 + 6 = 0 => 9k + 18 = 0 => k = -2</span>.</p>'
    },
    {
      id: 't2-3-q006',
      type: 'mcq',
      tier: 'exam',
      level: 'ahl',
      paper: 'P1',
      syllabus: 'AHL 2.12',
      marks: 2,
      stem: '<p>The cubic equation <span class="chem">3x^3 - 6x^2 + 4x + 9 = 0</span> has roots <span class="chem">alpha, beta, gamma</span>. Find the value of <span class="chem">alpha beta gamma</span>.</p>',
      options: [
        '<span class="chem">-3</span>',
        '<span class="chem">3</span>',
        '<span class="chem">2</span>',
        '<span class="chem">4/3</span>'
      ],
      answer: 0,
      misconception: {
        1: 'For an odd-degree polynomial (n = 3), the product of roots is (−1)³ a₀/a₃ = −9/3 = −3, not +3.',
        2: '2 is the sum of the roots α + β + γ = −(−6)/3, not the product.',
        3: '4/3 is the pairwise product sum αβ + βγ + γα = a₁/a₃.'
      },
      hints: [
        'Use Vieta\'s formula for the product of roots: <span class="chem">(-1)^n a_0 / a_n</span>.',
        'Here <span class="chem">n = 3</span>, <span class="chem">a_0 = 9</span>, and <span class="chem">a_3 = 3</span>.'
      ],
      solution: '<p>With <span class="chem">n = 3</span>, <span class="chem">alpha beta gamma = (-1)^3 (9 / 3) = -3</span>.</p>'
    },
    {
      id: 't2-3-q007',
      type: 'numeric',
      tier: 'exam',
      level: 'ahl',
      paper: 'P1',
      syllabus: 'AHL 2.12',
      marks: 3,
      stem: '<p>The quadratic equation <span class="chem">2x^2 - 8x + 5 = 0</span> has roots <span class="chem">alpha</span> and <span class="chem">beta</span>. Without solving the equation, find the exact value of <span class="chem">alpha^2 + beta^2</span>.</p>',
      answer: 11,
      tolerance: 0.001,
      hints: [
        'Find <span class="chem">alpha + beta = -b/a = 4</span> and <span class="chem">alpha beta = c/a = 5/2</span>.',
        'Use the identity <span class="chem">alpha^2 + beta^2 = (alpha + beta)^2 - 2 alpha beta</span>.'
      ],
      solution: '<p>From Vieta\'s formulas, <span class="chem">alpha + beta = 8/2 = 4</span> and <span class="chem">alpha beta = 5/2</span>. Therefore <span class="chem">alpha^2 + beta^2 = 4^2 - 2(5/2) = 16 - 5 = 11</span>.</p>'
    },
    {
      id: 't2-3-q008',
      type: 'short',
      tier: 'challenge',
      level: 'ahl',
      paper: 'P1',
      syllabus: 'AHL 2.12',
      marks: 5,
      stem: '<p>When a polynomial <span class="chem">P(x)</span> is divided by <span class="chem">(x - 1)</span>, the remainder is <span class="chem">4</span>. When <span class="chem">P(x)</span> is divided by <span class="chem">(x + 2)</span>, the remainder is <span class="chem">-5</span>. Find the remainder when <span class="chem">P(x)</span> is divided by <span class="chem">(x - 1)(x + 2)</span>.</p>',
      answer: '<p><span class="chem">3x + 1</span></p>',
      markscheme: [
        'M1: Write P(x) = Q(x)(x − 1)(x + 2) + ax + b (recognising remainder has degree ≤ 1).',
        'A1: Apply Remainder Theorem: P(1) = a + b = 4.',
        'A1: Apply Remainder Theorem: P(−2) = −2a + b = −5.',
        'M1: Solve the simultaneous linear equations (subtract to get 3a = 9).',
        'A1: Obtain a = 3, b = 1, so the remainder is 3x + 1.'
      ],
      hints: [
        'Since the divisor <span class="chem">(x - 1)(x + 2)</span> has degree <span class="chem">2</span>, the remainder has the linear form <span class="chem">ax + b</span>.',
        'Substitute <span class="chem">x = 1</span> and <span class="chem">x = -2</span> into <span class="chem">P(x) = Q(x)(x - 1)(x + 2) + ax + b</span>.'
      ],
      solution: '<p>Let <span class="chem">P(x) = Q(x)(x - 1)(x + 2) + ax + b</span>. Then <span class="chem">P(1) = a + b = 4</span> and <span class="chem">P(-2) = -2a + b = -5</span>. Subtracting gives <span class="chem">3a = 9 => a = 3</span>, so <span class="chem">b = 1</span>. The remainder is <span class="chem">3x + 1</span>.</p>'
    },
    {
      id: 't2-3-q009',
      type: 'mcq',
      tier: 'foundation',
      level: 'ahl',
      paper: 'P1',
      syllabus: 'AHL 2.13',
      marks: 3,
      stem: '<p>Find the equation of the oblique asymptote of the rational function <span class="chem">f(x) = (3x^2 + 5x - 1)/(x + 2)</span>.</p>',
      options: [
        '<span class="chem">y = 3x - 1</span>',
        '<span class="chem">y = 3x + 11</span>',
        '<span class="chem">y = 3x + 5</span>',
        '<span class="chem">y = 3</span>'
      ],
      answer: 0,
      misconception: {
        1: 'You divided using x = +2 instead of the root x = −2 of (x + 2): synthetic division then gives 5 + 6 = 11, so y = 3x + 11.',
        2: 'You cannot read the oblique asymptote from the first two numerator coefficients without dividing by (x + 2).',
        3: 'Because the numerator has degree 2 and the denominator has degree 1, there is an oblique asymptote, not a horizontal asymptote y = 3.'
      },
      hints: [
        'Divide <span class="chem">3x^2 + 5x - 1</span> by <span class="chem">(x + 2)</span>.',
        '<span class="chem">3x^2 + 5x - 1 = (3x - 1)(x + 2) + 1</span>.'
      ],
      solution: '<p>Dividing gives <span class="chem">f(x) = 3x - 1 + 1/(x + 2)</span>. As <span class="chem">x -&gt; +-infty</span>, <span class="chem">1/(x + 2) -&gt; 0</span>, so the oblique asymptote is <span class="chem">y = 3x - 1</span>.</p>'
    },
    {
      id: 't2-3-q010',
      type: 'multi',
      tier: 'exam',
      level: 'ahl',
      paper: 'P1',
      syllabus: 'AHL 2.13',
      marks: 4,
      stem: '<p>Consider <span class="chem">f(x) = (2x - 4)/(x^2 - 9)</span> for <span class="chem">x != +-3</span>. Select <strong>all</strong> true statements about the graph of <span class="chem">f</span>.</p>',
      options: [
        'The vertical asymptotes are <span class="chem">x = 3</span> and <span class="chem">x = -3</span>.',
        'The horizontal asymptote is <span class="chem">y = 0</span>.',
        'The horizontal asymptote is <span class="chem">y = 2</span>.',
        'The <span class="chem">x</span>-intercept is at <span class="chem">(2, 0)</span>.'
      ],
      answer: [0, 1, 3],
      hints: [
        'Set the denominator <span class="chem">x^2 - 9 = 0</span> for vertical asymptotes.',
        'Since <span class="chem">deg(num) = 1 &lt; deg(denom) = 2</span>, <span class="chem">f(x) -&gt; 0</span> as <span class="chem">x -&gt; +-infty</span>.'
      ],
      solution: '<p>Denominator <span class="chem">x^2 - 9 = 0</span> gives VAs <span class="chem">x = +-3</span>. Since degree of numerator is less than degree of denominator, HA is <span class="chem">y = 0</span> (not <span class="chem">y = 2</span>). Setting <span class="chem">2x - 4 = 0</span> gives <span class="chem">x</span>-intercept <span class="chem">(2, 0)</span>.</p>'
    },
    {
      id: 't2-3-q011',
      type: 'mcq',
      tier: 'foundation',
      level: 'ahl',
      paper: 'P1',
      syllabus: 'AHL 2.14',
      marks: 2,
      stem: '<p>Which of the following functions is an <strong>odd</strong> function?</p>',
      options: [
        '<span class="chem">f(x) = x^3 - 4x</span>',
        '<span class="chem">g(x) = x^2 + cos x</span>',
        '<span class="chem">h(x) = x^3 + 1</span>',
        '<span class="chem">p(x) = |x| - x</span>'
      ],
      answer: 0,
      misconception: {
        1: 'g(−x) = (−x)² + cos(−x) = x² + cos x = g(x), so g is EVEN, not odd.',
        2: 'Adding the constant +1 breaks odd symmetry: h(−x) = −x³ + 1 ≠ −h(x).',
        3: 'p(−x) = |x| + x, which equals neither p(x) nor −p(x).'
      },
      hints: [
        'A function is odd if <span class="chem">f(-x) = -f(x)</span> for all <span class="chem">x</span>.',
        'Test replacing <span class="chem">x</span> with <span class="chem">-x</span> in each option.'
      ],
      solution: '<p><span class="chem">f(-x) = (-x)^3 - 4(-x) = -x^3 + 4x = -(x^3 - 4x) = -f(x)</span>, so <span class="chem">f</span> is odd.</p>'
    },
    {
      id: 't2-3-q012',
      type: 'numeric',
      tier: 'exam',
      level: 'ahl',
      paper: 'P1',
      syllabus: 'AHL 2.14',
      marks: 3,
      stem: '<p>The function <span class="chem">f(x) = x^3 - 12x + 5</span> is defined on the restricted domain <span class="chem">x &gt;= k</span>. Find the smallest value of <span class="chem">k</span> such that <span class="chem">f^{-1}</span> exists.</p>',
      answer: 2,
      tolerance: 0.001,
      hints: [
        'For <span class="chem">f^{-1}</span> to exist, <span class="chem">f</span> must be one-to-one (monotonic) on <span class="chem">x &gt;= k</span>.',
        'Find the turning points by solving <span class="chem">f\'(x) = 3x^2 - 12 = 0</span> and pick the rightmost turning point.'
      ],
      solution: '<p><span class="chem">f\'(x) = 3x^2 - 12 = 0 => x = +-2</span>. Since the cubic increases for <span class="chem">x &gt;= 2</span>, the smallest <span class="chem">k</span> for <span class="chem">f</span> to be one-to-one on <span class="chem">[k, infty)</span> is <span class="chem">k = 2</span>.</p>'
    },
    {
      id: 't2-3-q013',
      type: 'mcq',
      tier: 'exam',
      level: 'ahl',
      paper: 'P1',
      syllabus: 'AHL 2.16',
      marks: 2,
      stem: '<p>The graph of <span class="chem">y = f(x)</span> has a local minimum at <span class="chem">(2, -5)</span> and <span class="chem">x</span>-intercepts at <span class="chem">(-1, 0)</span> and <span class="chem">(5, 0)</span>. Which statement is true for the graph of <span class="chem">y = |f(x)|</span>?</p>',
      options: [
        'It has a local maximum at <span class="chem">(2, 5)</span>.',
        'It has a local minimum at <span class="chem">(-2, -5)</span>.',
        'It has a cusp at <span class="chem">(2, 5)</span>.',
        'It has no <span class="chem">x</span>-intercepts.'
      ],
      answer: 0,
      misconception: {
        1: '|f(x)| reflects negative y-values across the x-axis (y → −y), not across the y-axis, and |f(x)| ≥ 0 everywhere.',
        2: 'Because (2, −5) is a smooth turning point below the x-axis, reflecting it up produces a smooth local maximum at (2, 5); cusps occur at the x-intercepts (−1, 0) and (5, 0).',
        3: 'The x-intercepts (−1, 0) and (5, 0) have y = 0, so they remain on y = |f(x)|.'
      },
      hints: [
        'For <span class="chem">y = |f(x)|</span>, points with <span class="chem">f(x) &lt; 0</span> reflect across the <span class="chem">x</span>-axis.',
        'Reflecting a local minimum at <span class="chem">(2, -5)</span> across <span class="chem">y = 0</span> turns it into a local maximum.'
      ],
      solution: '<p>Since <span class="chem">f(2) = -5 &lt; 0</span>, the smooth local minimum reflects across the <span class="chem">x</span>-axis to become a local maximum at <span class="chem">(2, 5)</span>.</p>'
    },
    {
      id: 't2-3-q014',
      type: 'multi',
      tier: 'exam',
      level: 'ahl',
      paper: 'P1',
      syllabus: 'AHL 2.16',
      marks: 4,
      stem: '<p>The graph of <span class="chem">y = f(x)</span> has an <span class="chem">x</span>-intercept at <span class="chem">(3, 0)</span>, a vertical asymptote <span class="chem">x = -1</span>, a local maximum at <span class="chem">(1, 4)</span>, and passes through <span class="chem">(4, -1)</span>. Select <strong>all</strong> true statements for the reciprocal graph <span class="chem">y = 1/f(x)</span>.</p>',
      options: [
        '<span class="chem">x = 3</span> is a vertical asymptote of <span class="chem">y = 1/f(x)</span>.',
        '<span class="chem">(1, 0.25)</span> is a local minimum of <span class="chem">y = 1/f(x)</span>.',
        '<span class="chem">(4, -1)</span> is an invariant point on <span class="chem">y = 1/f(x)</span>.',
        '<span class="chem">x = -1</span> is a vertical asymptote of <span class="chem">y = 1/f(x)</span>.'
      ],
      answer: [0, 1, 2],
      hints: [
        'Roots of <span class="chem">f(x)</span> become vertical asymptotes of <span class="chem">1/f(x)</span>, while VAs of <span class="chem">f(x)</span> approach <span class="chem">0</span>.',
        'Points with <span class="chem">y = +-1</span> stay unchanged, and a positive local maximum <span class="chem">(1, 4)</span> becomes a local minimum <span class="chem">(1, 1/4)</span>.'
      ],
      solution: '<p>At <span class="chem">x = 3</span>, <span class="chem">f(3) = 0</span> so <span class="chem">1/f(x)</span> has VA <span class="chem">x = 3</span>. Local max <span class="chem">(1, 4)</span> becomes local min <span class="chem">(1, 0.25)</span>. At <span class="chem">(4, -1)</span>, <span class="chem">1/(-1) = -1</span> (invariant). As <span class="chem">x -&gt; -1</span>, <span class="chem">f(x) -&gt; +-infty</span> so <span class="chem">1/f(x) -&gt; 0</span> (not a VA).</p>'
    },
    {
      id: 't2-3-q015',
      type: 'mcq',
      tier: 'exam',
      level: 'ahl',
      paper: 'P1',
      syllabus: 'AHL 2.15',
      marks: 3,
      stem: '<p>Solve the rational inequality <span class="chem">(3x - 2)/(x - 4) &gt;= 2</span>.</p>',
      options: [
        '<span class="chem">x &lt;= -6</span> or <span class="chem">x &gt; 4</span>',
        '<span class="chem">x &gt;= -6</span>',
        '<span class="chem">-6 &lt;= x &lt; 4</span>',
        '<span class="chem">x &lt;= -6</span> or <span class="chem">x &gt;= 4</span>'
      ],
      answer: 0,
      misconception: {
        1: 'Cross-multiplying by (x − 4) assumes x − 4 > 0 and loses the sign flip when x < 4.',
        2: 'Sign diagram of (x + 6)/(x − 4) is negative between −6 and 4, and positive outside.',
        3: 'x = 4 makes the denominator zero, so x = 4 must be strictly excluded (x > 4, not x ≥ 4).'
      },
      hints: [
        'Subtract <span class="chem">2</span> from both sides and combine into a single fraction <span class="chem">(x + 6)/(x - 4) &gt;= 0</span>.',
        'Test the sign in the three intervals <span class="chem">(-infty, -6)</span>, <span class="chem">(-6, 4)</span>, and <span class="chem">(4, infty)</span>.'
      ],
      solution: '<p><span class="chem">(3x - 2)/(x - 4) - 2 &gt;= 0 => (x + 6)/(x - 4) &gt;= 0</span>. Critical values are <span class="chem">x = -6</span> (included) and <span class="chem">x = 4</span> (excluded). Sign diagram gives <span class="chem">x &lt;= -6</span> or <span class="chem">x &gt; 4</span>.</p>'
    },
    {
      id: 't2-3-q016',
      type: 'numeric',
      tier: 'exam',
      level: 'ahl',
      paper: 'P1',
      syllabus: 'AHL 2.16',
      marks: 3,
      stem: '<p>Solve <span class="chem">|3x - 5| = |x + 3|</span> and find the <strong>sum</strong> of all real solutions.</p>',
      answer: 4.5,
      tolerance: 0.001,
      hints: [
        'Since both sides are moduli, either <span class="chem">3x - 5 = x + 3</span> or <span class="chem">3x - 5 = -(x + 3)</span>.',
        'Solve both linear equations to get <span class="chem">x = 4</span> and <span class="chem">x = 0.5</span>, then add them.'
      ],
      solution: '<p>Case 1: <span class="chem">3x - 5 = x + 3 => x = 4</span>. Case 2: <span class="chem">3x - 5 = -x - 3 => 4x = 2 => x = 0.5</span>. The sum of the solutions is <span class="chem">4 + 0.5 = 4.5</span>.</p>'
    },
    {
      id: 't2-3-q017',
      type: 'numeric',
      tier: 'challenge',
      level: 'ahl',
      paper: 'P1',
      syllabus: 'AHL 2.13',
      marks: 4,
      stem: '<p>The range of <span class="chem">f(x) = (x^2 + 3)/(x - 1)</span> (<span class="chem">x != 1</span>) is <span class="chem">y &lt;= a</span> or <span class="chem">y &gt;= b</span>. Find the exact value of <span class="chem">b - a</span>.</p>',
      answer: 8,
      tolerance: 0.001,
      hints: [
        'Set <span class="chem">y = (x^2 + 3)/(x - 1)</span> and rearrange into a quadratic in <span class="chem">x</span>: <span class="chem">x^2 - yx + (y + 3) = 0</span>.',
        'Require <span class="chem">Delta_x = y^2 - 4(y + 3) &gt;= 0</span> to find <span class="chem">a = -2</span> and <span class="chem">b = 6</span>.'
      ],
      solution: '<p>Rearranging gives <span class="chem">x^2 - yx + (y + 3) = 0</span>. Real <span class="chem">x</span> exists iff <span class="chem">Delta_x = y^2 - 4y - 12 = (y - 6)(y + 2) &gt;= 0</span>, so <span class="chem">y &lt;= -2</span> or <span class="chem">y &gt;= 6</span>. Thus <span class="chem">b - a = 6 - (-2) = 8</span>.</p>'
    },
    {
      id: 't2-3-q018',
      type: 'short',
      tier: 'challenge',
      level: 'ahl',
      paper: 'P1',
      syllabus: 'AHL 2.16',
      marks: 6,
      stem: '<p>(a) Solve the inequality <span class="chem">|2x - 1| &gt; x + 2</span>. <strong>[4 marks]</strong><br>(b) Hence, or otherwise, solve <span class="chem">|2|x| - 1| &gt; |x| + 2</span>. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">x &lt; -1/3</span> or <span class="chem">x &gt; 3</span>; (b) <span class="chem">x &lt; -3</span> or <span class="chem">x &gt; 3</span></p>',
      markscheme: [
        'M1: Split into two cases: 2x − 1 > x + 2 or 2x − 1 < −(x + 2) (or square when x + 2 ≥ 0).',
        'A1: First branch gives x > 3.',
        'A1: Second branch gives 3x < −1 ⇒ x < −1/3.',
        'A1: State full solution x < −1/3 or x > 3 (noting x < −2 is already covered).',
        'M1: Substitute |x| in place of x from part (a): |x| < −1/3 (no solution) or |x| > 3.',
        'A1: Solve |x| > 3 to obtain x < −3 or x > 3.'
      ],
      hints: [
        'For <span class="chem">|A| &gt; B</span>, either <span class="chem">A &gt; B</span> or <span class="chem">A &lt; -B</span> (if <span class="chem">B &lt; 0</span>, it holds automatically, which is already inside <span class="chem">x &lt; -1/3</span>).',
        'In part (b), replace <span class="chem">x</span> with <span class="chem">|x|</span> in your answer to part (a).'
      ],
      solution: '<p>(a) <span class="chem">2x - 1 &gt; x + 2 => x &gt; 3</span>, or <span class="chem">2x - 1 &lt; -x - 2 => 3x &lt; -1 => x &lt; -1/3</span>. So <span class="chem">x &lt; -1/3</span> or <span class="chem">x &gt; 3</span>. (b) Replacing <span class="chem">x</span> by <span class="chem">|x|</span>: <span class="chem">|x| &lt; -1/3</span> has no solution, while <span class="chem">|x| &gt; 3</span> gives <span class="chem">x &lt; -3</span> or <span class="chem">x &gt; 3</span>.</p>'
    },
    {
      id: 't2-3-q019',
      type: 'short',
      tier: 'exam',
      level: 'ahl',
      paper: 'P2',
      syllabus: 'AHL 2.15',
      marks: 4,
      stem: '<p>Using your GDC, solve the inequality <span class="chem">x^3 - 4x &gt; 1</span>. Give the end points of your intervals correct to 3 significant figures.</p>',
      answer: '<p><span class="chem">-1.86 &lt; x &lt; -0.254</span> or <span class="chem">x &gt; 2.11</span></p>',
      markscheme: [
        'M1: Rearranges to x³ − 4x − 1 > 0 and graphs y = x³ − 4x − 1 (or graphs y = x³ − 4x and y = 1 and finds their intersections).',
        'A1: Finds all three critical values x = −1.86, −0.254 and 2.11.',
        'A1: −1.86 < x < −0.254.',
        'A1: x > 2.11 (both intervals, with strict inequalities).'
      ],
      hints: [
        'Rearrange to <span class="chem">x^3 - 4x - 1 &gt; 0</span> and graph <span class="chem">y = x^3 - 4x - 1</span>, or graph <span class="chem">Y_1 = x^3 - 4x</span> and <span class="chem">Y_2 = 1</span>.',
        'Use the zero (or intersect) tool to find all three crossing points, then read off where the cubic is <strong>above</strong> the <span class="chem">x</span>-axis.'
      ],
      solution: '<p>Graph <span class="chem">y = x^3 - 4x - 1</span>. The zero tool gives three roots: <span class="chem">x ≈ -1.8608</span>, <span class="chem">x ≈ -0.25410</span> and <span class="chem">x ≈ 2.1149</span>. A cubic with positive leading coefficient is above the <span class="chem">x</span>-axis between the first two roots and to the right of the third, so the solution is <span class="chem">-1.86 &lt; x &lt; -0.254</span> or <span class="chem">x &gt; 2.11</span>. (There is no exact method here, which is why this is a Paper 2 question.)</p>'
    },
    {
      id: 't2-3-q020',
      type: 'mcq',
      tier: 'foundation',
      level: 'ahl',
      paper: 'P1',
      syllabus: 'AHL 2.12',
      marks: 2,
      stem: '<p>The graph of a cubic <span class="chem">y = f(x)</span> touches the <span class="chem">x</span>-axis at <span class="chem">x = -1</span>, crosses the <span class="chem">x</span>-axis at <span class="chem">x = 3</span>, and has <span class="chem">y</span>-intercept <span class="chem">(0, -3)</span>. Which equation could be <span class="chem">f(x)</span>?</p>',
      options: [
        '<span class="chem">f(x) = (x + 1)^2 (x - 3)</span>',
        '<span class="chem">f(x) = (x - 1)^2 (x + 3)</span>',
        '<span class="chem">f(x) = (x + 1)(x - 3)^2</span>',
        '<span class="chem">f(x) = -(x + 1)^2 (x - 3)</span>'
      ],
      answer: 0,
      misconception: {
        1: 'A factor (x − 1) gives a root at x = +1, not x = −1: the graph touches the axis where (x + 1)² = 0.',
        2: 'Here the squared factor is (x − 3)², so the graph would touch at x = 3 and cross at x = −1, and f(0) = 9.',
        3: 'The roots are right, but f(0) = −(1)(−3) = +3, not −3. The leading coefficient must be positive.'
      },
      hints: [
        'A repeated (squared) factor <span class="chem">(x - a)^2</span> makes the graph touch the axis at <span class="chem">x = a</span>; a single factor makes it cross.',
        'Check the <span class="chem">y</span>-intercept by substituting <span class="chem">x = 0</span>.'
      ],
      solution: '<p>Touching at <span class="chem">x = -1</span> needs the squared factor <span class="chem">(x + 1)^2</span>, and crossing at <span class="chem">x = 3</span> needs the single factor <span class="chem">(x - 3)</span>, so <span class="chem">f(x) = a(x + 1)^2 (x - 3)</span>. Then <span class="chem">f(0) = a(1)(-3) = -3a = -3 => a = 1</span>, which matches the <span class="chem">y</span>-intercept, so <span class="chem">f(x) = (x + 1)^2 (x - 3)</span>.</p>'
    },
    {
      id: 't2-3-q021',
      type: 'multi',
      tier: 'exam',
      level: 'ahl',
      paper: 'P1',
      syllabus: 'AHL 2.16',
      marks: 3,
      stem: '<p>The graph of <span class="chem">y = f(x)</span> has a local maximum at <span class="chem">(-1, 3)</span>, passes through <span class="chem">(0, 1)</span>, and crosses the <span class="chem">x</span>-axis at <span class="chem">(2, 0)</span>. Select <strong>all</strong> true statements about the graph of <span class="chem">y = [f(x)]^2</span>.</p>',
      options: [
        '<span class="chem">(2, 0)</span> is a local minimum of <span class="chem">y = [f(x)]^2</span>.',
        '<span class="chem">(-1, 9)</span> is a local maximum of <span class="chem">y = [f(x)]^2</span>.',
        '<span class="chem">(0, 1)</span> is an invariant point.',
        '<span class="chem">x = 2</span> is a vertical asymptote of <span class="chem">y = [f(x)]^2</span>.'
      ],
      answer: [0, 1, 2],
      misconception: {
        3: 'Squaring never creates an asymptote: at x = 2, [f(2)]² = 0, so the graph touches the x-axis there. Vertical asymptotes from roots belong to 1/f(x).'
      },
      hints: [
        'Squaring keeps <span class="chem">y = 0</span> and <span class="chem">y = 1</span> unchanged, makes every <span class="chem">y</span>-value non-negative, and squares the size of the others.',
        'Where <span class="chem">f</span> crosses the axis, <span class="chem">[f(x)]^2</span> touches it and has a minimum; a turning point with <span class="chem">f &gt; 0</span> stays a turning point of the same type.'
      ],
      solution: '<p>At <span class="chem">x = 2</span>, <span class="chem">f = 0</span> and <span class="chem">f</span> changes sign, so <span class="chem">[f(x)]^2</span> has a smooth local minimum <span class="chem">(2, 0)</span>. At <span class="chem">x = -1</span>, <span class="chem">f = 3 &gt; 0</span> and <span class="chem">f</span> is at a local maximum, so <span class="chem">[f(x)]^2</span> has a local maximum <span class="chem">(-1, 9)</span>. At <span class="chem">x = 0</span>, <span class="chem">1^2 = 1</span>, so <span class="chem">(0, 1)</span> is invariant. Squaring a finite value is finite, so <span class="chem">x = 2</span> is not an asymptote.</p>'
    }
  ]);
})();
