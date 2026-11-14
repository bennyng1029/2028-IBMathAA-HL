/* ==========================================================================
   Analysis Lab — questions-t2-3.js
   Question bank for Topic 2.3: Transformations, polynomials & modulus
   (SL 2.11 + AHL 2.12–2.16).
   60 original questions across foundation, exam, and challenge tiers
   (Paper 1, Paper 2 and Paper 3 styles).
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.questions) return;

  S1.questions.register('t2-3', [
    {
      id: 't2-3-q001',
      topic: 't2-3',
      type: 'mcq',
      tier: 'foundation',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
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
      topic: 't2-3',
      type: 'numeric',
      tier: 'foundation',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
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
      topic: 't2-3',
      type: 'order',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
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
      topic: 't2-3',
      type: 'mcq',
      tier: 'foundation',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
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
      topic: 't2-3',
      type: 'numeric',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 2.12',
      marks: 3,
      stem: '<p>The polynomial <span class="chem">P(x) = x^3 + kx^2 - 5x + 6</span> is divisible by <span class="chem">(x - 3)</span>. Find the exact value of <span class="chem">k</span>.</p>',
      answer: -2,
      exact: true,
      answerInput: '-2',
      hints: [
        'By the Factor Theorem, <span class="chem">P(3) = 0</span>.',
        'Substitute <span class="chem">x = 3</span>: <span class="chem">27 + 9k - 15 + 6 = 0</span>.'
      ],
      solution: '<p>Setting <span class="chem">P(3) = 0</span> gives <span class="chem">3^3 + k(3)^2 - 5(3) + 6 = 0 => 27 + 9k - 15 + 6 = 0 => 9k + 18 = 0 => k = -2</span>.</p>'
    },
    {
      id: 't2-3-q006',
      topic: 't2-3',
      type: 'mcq',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
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
      topic: 't2-3',
      type: 'numeric',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 2.12',
      marks: 3,
      stem: '<p>The quadratic equation <span class="chem">2x^2 - 8x + 5 = 0</span> has roots <span class="chem">alpha</span> and <span class="chem">beta</span>. Without solving the equation, find the exact value of <span class="chem">alpha^2 + beta^2</span>.</p>',
      answer: 11,
      exact: true,
      answerInput: '11',
      hints: [
        'Find <span class="chem">alpha + beta = -b/a = 4</span> and <span class="chem">alpha beta = c/a = 5/2</span>.',
        'Use the identity <span class="chem">alpha^2 + beta^2 = (alpha + beta)^2 - 2 alpha beta</span>.'
      ],
      solution: '<p>From Vieta\'s formulas, <span class="chem">alpha + beta = 8/2 = 4</span> and <span class="chem">alpha beta = 5/2</span>. Therefore <span class="chem">alpha^2 + beta^2 = 4^2 - 2(5/2) = 16 - 5 = 11</span>.</p>'
    },
    {
      id: 't2-3-q008',
      topic: 't2-3',
      type: 'short',
      tier: 'challenge',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
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
        'Decode: "the remainder when divided by <span class="chem">(x - 1)(x + 2)</span>" means the remainder has degree less than 2, so write it as <span class="chem">ax + b</span>; the two given remainders are two equations for <span class="chem">a</span> and <span class="chem">b</span>.',
        'Since the divisor <span class="chem">(x - 1)(x + 2)</span> has degree <span class="chem">2</span>, the remainder has the linear form <span class="chem">ax + b</span>.',
        'Substitute <span class="chem">x = 1</span> and <span class="chem">x = -2</span> into <span class="chem">P(x) = Q(x)(x - 1)(x + 2) + ax + b</span>.'
      ],
      solution: '<p>Let <span class="chem">P(x) = Q(x)(x - 1)(x + 2) + ax + b</span>. Then <span class="chem">P(1) = a + b = 4</span> and <span class="chem">P(-2) = -2a + b = -5</span>. Subtracting gives <span class="chem">3a = 9 => a = 3</span>, so <span class="chem">b = 1</span>. The remainder is <span class="chem">3x + 1</span>.</p>'
    },
    {
      id: 't2-3-q009',
      topic: 't2-3',
      type: 'mcq',
      tier: 'foundation',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 2.13',
      marks: 2,
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
      topic: 't2-3',
      type: 'multi',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
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
      topic: 't2-3',
      type: 'mcq',
      tier: 'foundation',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
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
      topic: 't2-3',
      type: 'numeric',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
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
      topic: 't2-3',
      type: 'mcq',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
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
      topic: 't2-3',
      type: 'multi',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
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
      topic: 't2-3',
      type: 'mcq',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 2.15',
      marks: 2,
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
        2: 'You chose the interval where (x + 6)/(x − 4) is negative. The inequality needs (x + 6)/(x − 4) ≥ 0, which holds outside −6 and 4, not between them.',
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
      topic: 't2-3',
      type: 'numeric',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 2.16',
      marks: 3,
      stem: '<p>Solve <span class="chem">|3x - 5| = |x + 3|</span>. Give the smaller of the two solutions.</p>',
      answer: 0.5,
      hints: [
        'Since both sides are moduli, either <span class="chem">3x - 5 = x + 3</span> or <span class="chem">3x - 5 = -(x + 3)</span>.',
        'Solve both linear equations, check each solution in the original equation, and compare them.'
      ],
      solution: '<p>Case 1: <span class="chem">3x - 5 = x + 3 => x = 4</span>. Case 2: <span class="chem">3x - 5 = -x - 3 => 4x = 2 => x = 0.5</span>. Both satisfy the original equation (<span class="chem">|7| = |7|</span> and <span class="chem">|-3.5| = |3.5|</span>), so the smaller solution is <span class="chem">x = 0.5</span>.</p>'
    },
    {
      id: 't2-3-q017',
      topic: 't2-3',
      type: 'numeric',
      tier: 'challenge',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 2.13',
      marks: 4,
      stem: '<p>The range of <span class="chem">f(x) = (x^2 + 3)/(x - 1)</span> (<span class="chem">x != 1</span>) is <span class="chem">y &lt;= a</span> or <span class="chem">y &gt;= b</span>. Find the exact value of <span class="chem">b</span>.</p>',
      answer: 6,
      exact: true,
      answerInput: '6',
      hints: [
        'Decode: "the range is <span class="chem">y &lt;= a</span> or <span class="chem">y &gt;= b</span>" asks which <span class="chem">y</span>-values are actually reached. Turn that into "for which <span class="chem">y</span> does the equation <span class="chem">y = f(x)</span> have a real solution <span class="chem">x</span>?"',
        'Set <span class="chem">y = (x^2 + 3)/(x - 1)</span> and rearrange into a quadratic in <span class="chem">x</span>: <span class="chem">x^2 - yx + (y + 3) = 0</span>.',
        'Real <span class="chem">x</span> exists only when the discriminant of this quadratic in <span class="chem">x</span> is non-negative: solve <span class="chem">y^2 - 4(y + 3) &gt;= 0</span> for <span class="chem">y</span>.'
      ],
      solution: '<p>Rearranging gives <span class="chem">x^2 - yx + (y + 3) = 0</span>. Real <span class="chem">x</span> exists iff the discriminant <span class="chem">y^2 - 4y - 12 = (y - 6)(y + 2) &gt;= 0</span>, so <span class="chem">y &lt;= -2</span> or <span class="chem">y &gt;= 6</span>. Thus <span class="chem">a = -2</span> and <span class="chem">b = 6</span>.</p>'
    },
    {
      id: 't2-3-q018',
      topic: 't2-3',
      type: 'short',
      tier: 'challenge',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
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
        'Decode: (a) is a modulus inequality whose right-hand side can be negative, so split into cases rather than squaring blindly. In (b), <span class="chem">|2|x| - 1| &gt; |x| + 2</span> is the inequality of (a) with <span class="chem">x</span> replaced by <span class="chem">|x|</span>.',
        'For <span class="chem">|A| &gt; B</span>, either <span class="chem">A &gt; B</span> or <span class="chem">A &lt; -B</span> (if <span class="chem">B &lt; 0</span>, it holds automatically, which is already inside <span class="chem">x &lt; -1/3</span>).',
        'In part (b), replace <span class="chem">x</span> with <span class="chem">|x|</span> in your answer to part (a).'
      ],
      solution: '<p>(a) <span class="chem">2x - 1 &gt; x + 2 => x &gt; 3</span>, or <span class="chem">2x - 1 &lt; -x - 2 => 3x &lt; -1 => x &lt; -1/3</span>. So <span class="chem">x &lt; -1/3</span> or <span class="chem">x &gt; 3</span>. (b) Replacing <span class="chem">x</span> by <span class="chem">|x|</span>: <span class="chem">|x| &lt; -1/3</span> has no solution, while <span class="chem">|x| &gt; 3</span> gives <span class="chem">x &lt; -3</span> or <span class="chem">x &gt; 3</span>.</p>'
    },
    {
      id: 't2-3-q019',
      topic: 't2-3',
      type: 'short',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 2 (GDC)',
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
      topic: 't2-3',
      type: 'mcq',
      tier: 'foundation',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
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
      topic: 't2-3',
      type: 'multi',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
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
    },
    {
      id: 't2-3-q022',
      topic: 't2-3',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.11',
      marks: 5,
      stem: '<p>Let <span class="chem">f(x) = e^x - 3x</span>. The graph of <span class="chem">y = g(x)</span> is obtained from the graph of <span class="chem">y = f(x)</span> by a horizontal stretch with scale factor <span class="chem">2</span>, followed by a translation of <span class="chem">3</span> units up.</p><p>The equation <span class="chem">g(x) = 5</span> has one negative and one positive solution. Find the positive solution.</p>',
      answer: 4.2507823976,
      sigfigs: 3,
      hints: [
        'Decode: first build the formula for <span class="chem">g</span> from the words, then solve an equation that has no algebraic method, so use the GDC.',
        'A horizontal stretch with scale factor <span class="chem">2</span> replaces <span class="chem">x</span> by <span class="chem">x/2</span>; moving up <span class="chem">3</span> adds <span class="chem">3</span>. So <span class="chem">g(x) = e^{x/2} - 3(x/2) + 3</span>.',
        'Graph <span class="chem">Y_1 = e^{x/2} - 1.5x + 3</span> and <span class="chem">Y_2 = 5</span> and use the intersect tool on the right-hand crossing.'
      ],
      solution: '<p><span class="chem">g(x) = f(x/2) + 3 = e^{x/2} - 1.5x + 3</span>. Solving <span class="chem">e^{x/2} - 1.5x + 3 = 5</span> on the GDC gives <span class="chem">x ≈ -0.910</span> and <span class="chem">x ≈ 4.25</span>. The positive solution is <span class="chem">x ≈ 4.25</span>.</p><p>Common slip: a horizontal stretch with scale factor <span class="chem">2</span> is <span class="chem">f(x/2)</span>, not <span class="chem">f(2x)</span>.</p>'
    },
    {
      id: 't2-3-q023',
      topic: 't2-3',
      type: 'numeric',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.11',
      marks: 6,
      stem: '<p>A standard response curve is modelled by <span class="chem">f(t) = t^2 e^{-t}</span>, <span class="chem">t &gt;= 0</span>. In a laboratory test, the response of a new sensor is found to follow <span class="chem">g(t) = A f(t/k)</span>, <span class="chem">t &gt;= 0</span>, where <span class="chem">A</span> and <span class="chem">k</span> are positive constants and <span class="chem">t</span> is the time in seconds. The data show that the response of the new sensor reaches its greatest value, <span class="chem">10</span> units, at <span class="chem">t = 6</span>.</p><p>Find the earliest time at which the response of the new sensor is <span class="chem">5</span> units.</p>',
      answer: 2.2837206881,
      sigfigs: 3,
      unit: 's',
      hints: [
        'Decode: <span class="chem">g</span> is <span class="chem">f</span> after a vertical stretch (factor <span class="chem">A</span>) and a horizontal stretch (factor <span class="chem">k</span>). The peak of <span class="chem">g</span> is the image of the peak of <span class="chem">f</span>, so find the peak of <span class="chem">f</span> first, then <span class="chem">A</span> and <span class="chem">k</span>, then solve <span class="chem">g(t) = 5</span>.',
        'Use the GDC maximum tool on <span class="chem">y = x^2 e^{-x}</span>: the peak is at <span class="chem">t = 2</span> with value <span class="chem">f(2) = 4e^{-2} ≈ 0.541</span>.',
        'The horizontal stretch sends <span class="chem">t = 2</span> to <span class="chem">t = 2k = 6</span>, so <span class="chem">k = 3</span>. The vertical stretch sends <span class="chem">0.541</span> to <span class="chem">10</span>, so <span class="chem">A = 10/(4e^{-2}) ≈ 18.5</span>.',
        'Now intersect <span class="chem">y = A(x/3)^2 e^{-x/3}</span> with <span class="chem">y = 5</span> and take the smallest non-negative <span class="chem">x</span>.'
      ],
      solution: '<p><strong>Decode.</strong> The new curve is a stretched copy of <span class="chem">f</span>; its peak <span class="chem">(6, 10)</span> is the image of the peak of <span class="chem">f</span>.</p><p>On the GDC, <span class="chem">f</span> has its maximum at <span class="chem">(2, 0.5413…)</span> (indeed <span class="chem">f(2) = 4e^{-2}</span>). A horizontal stretch with factor <span class="chem">k</span> maps <span class="chem">t = 2</span> to <span class="chem">2k = 6</span>, so <span class="chem">k = 3</span>. A vertical stretch with factor <span class="chem">A</span> maps <span class="chem">4e^{-2}</span> to <span class="chem">10</span>, so <span class="chem">A = 2.5e^2 ≈ 18.47</span>.</p><p>Solving <span class="chem">18.47(t/3)^2 e^{-t/3} = 5</span> for <span class="chem">t &gt;= 0</span> gives <span class="chem">t ≈ 2.28</span> and <span class="chem">t ≈ 12.5</span> (the GDC also shows a negative root, which is outside the domain). The earliest time is <span class="chem">t ≈ 2.28</span> s.</p>'
    },
    {
      id: 't2-3-q024',
      topic: 't2-3',
      type: 'numeric',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 2.12',
      marks: 3,
      stem: '<p>Let <span class="chem">P(x) = x^4 - 3x^3 - 2x^2 + 7x + 1</span>. The equation <span class="chem">P(x) = 0</span> has four real roots. Find the smallest positive root.</p>',
      answer: 1.82024925065,
      sigfigs: 3,
      hints: [
        'Graph <span class="chem">y = x^4 - 3x^3 - 2x^2 + 7x + 1</span> in a window such as <span class="chem">-3 &lt;= x &lt;= 4</span> so that all four crossings are visible.',
        'Two roots are negative. Use the zero (root) tool on the first crossing to the right of the <span class="chem">y</span>-axis.'
      ],
      solution: '<p>The GDC gives the roots <span class="chem">x ≈ -1.44</span>, <span class="chem">-0.139</span>, <span class="chem">1.82</span> and <span class="chem">2.76</span>. The smallest positive root is <span class="chem">x ≈ 1.82</span>.</p><p>Check: the four roots add up to <span class="chem">3</span>, which equals <span class="chem">-a_3/a_4 = -(-3)/1</span>.</p>'
    },
    {
      id: 't2-3-q025',
      topic: 't2-3',
      type: 'short',
      tier: 'challenge',
      level: 'ahl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 2.12, 2.15',
      marks: 7,
      stem: '<p>An open box is made from a rectangular sheet of card measuring <span class="chem">30</span> cm by <span class="chem">20</span> cm. A square of side <span class="chem">x</span> cm is cut from each corner and the sides are folded up.</p><p>(a) Show that the volume of the box is <span class="chem">V = x(30 - 2x)(20 - 2x)</span> cm³, and write down the set of possible values of <span class="chem">x</span>. <strong>[2 marks]</strong></p><p>(b) The box must hold exactly <span class="chem">900</span> cm³. Find the possible values of <span class="chem">x</span>, and explain why the equation <span class="chem">V = 900</span> has a third root that must be rejected. <strong>[3 marks]</strong></p><p>(c) Find the set of values of <span class="chem">x</span> for which the box holds more than <span class="chem">900</span> cm³. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) Length <span class="chem">30 - 2x</span>, width <span class="chem">20 - 2x</span>, height <span class="chem">x</span>, so <span class="chem">V = x(30 - 2x)(20 - 2x)</span>, with <span class="chem">0 &lt; x &lt; 10</span>.</p><p>(b) <span class="chem">x ≈ 2.30</span> or <span class="chem">x ≈ 5.78</span>. The third root <span class="chem">x ≈ 16.9</span> is rejected because it is not in <span class="chem">0 &lt; x &lt; 10</span> (the width <span class="chem">20 - 2x</span> would be negative).</p><p>(c) <span class="chem">2.30 &lt; x &lt; 5.78</span>.</p>',
      markscheme: [
        'A1: (a) states the dimensions <span class="chem">x</span>, <span class="chem">30 - 2x</span>, <span class="chem">20 - 2x</span> and multiplies them (the result <span class="chem">V = x(30 - 2x)(20 - 2x)</span> is given, AG).',
        'A1: (a) <span class="chem">0 &lt; x &lt; 10</span>.',
        'M1: (b) solves <span class="chem">x(30 - 2x)(20 - 2x) = 900</span> on the GDC (graph and intersect, or polynomial solver).',
        'A1: (b) <span class="chem">x = 2.30</span> and <span class="chem">x = 5.78</span>.',
        'R1: (b) rejects <span class="chem">x = 16.9</span> because it lies outside <span class="chem">0 &lt; x &lt; 10</span> (a side length would be negative).',
        'M1: (c) the curve <span class="chem">y = V</span> lies above <span class="chem">y = 900</span> between the two valid roots.',
        'A1: (c) <span class="chem">2.30 &lt; x &lt; 5.78</span>.'
      ],
      hints: [
        'Decode: a real-life cubic. The physical situation hides a domain condition (every length must be positive), which decides which GDC roots you keep.',
        'After cutting, the base is <span class="chem">(30 - 2x)</span> by <span class="chem">(20 - 2x)</span> and the height is <span class="chem">x</span>. All three must be positive.',
        'Graph <span class="chem">Y_1 = x(30 - 2x)(20 - 2x)</span> and <span class="chem">Y_2 = 900</span>; find all intersections, then keep the ones with <span class="chem">0 &lt; x &lt; 10</span>.'
      ],
      solution: '<p><strong>Decode.</strong> The algebra gives a cubic with three roots, but the card only allows <span class="chem">0 &lt; x &lt; 10</span>.</p><p>(a) Folding up leaves a base <span class="chem">(30 - 2x)</span> by <span class="chem">(20 - 2x)</span> and height <span class="chem">x</span>, so <span class="chem">V = x(30 - 2x)(20 - 2x)</span>. We need <span class="chem">x &gt; 0</span> and <span class="chem">20 - 2x &gt; 0</span>, so <span class="chem">0 &lt; x &lt; 10</span>.</p><p>(b) The GDC gives <span class="chem">x ≈ 2.30</span>, <span class="chem">5.78</span> and <span class="chem">16.9</span>. Only the first two lie in <span class="chem">0 &lt; x &lt; 10</span>.</p><p>(c) On <span class="chem">0 &lt; x &lt; 10</span> the volume curve is above <span class="chem">900</span> between the two valid roots: <span class="chem">2.30 &lt; x &lt; 5.78</span>.</p>'
    },
    {
      id: 't2-3-q026',
      topic: 't2-3',
      type: 'short',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 2.12',
      marks: 5,
      stem: '<p>Consider the equation <span class="chem">x^4 - 2x^3 - 5x^2 + 4x + 3 = 0</span>.</p><p>(a) Use your GDC to find the four real roots. <strong>[2 marks]</strong></p><p>(b) Use the formula booklet to write down the sum and the product of the four roots. <strong>[2 marks]</strong></p><p>(c) Verify that your answers to (a) are consistent with (b). <strong>[1 mark]</strong></p>',
      answer: '<p>(a) <span class="chem">x ≈ -1.70, -0.509, 1.12, 3.10</span>.</p><p>(b) Sum <span class="chem">= -(-2)/1 = 2</span>; product <span class="chem">= (-1)^4 (3/1) = 3</span>.</p><p>(c) Using the full GDC values, <span class="chem">-1.7045 - 0.5089 + 1.1169 + 3.0965 ≈ 2.000</span> and the product is <span class="chem">≈ 3.000</span>.</p>',
      markscheme: [
        'M1: (a) graphs the quartic (or uses a polynomial solver) and finds the zeros.',
        'A1: (a) all four roots <span class="chem">-1.70, -0.509, 1.12, 3.10</span>.',
        'A1: (b) sum of roots <span class="chem">= 2</span>.',
        'A1: (b) product of roots <span class="chem">= 3</span>.',
        'R1: (c) adds and multiplies the stored (unrounded) roots, obtaining <span class="chem">2</span> and <span class="chem">3</span>.'
      ],
      hints: [
        'Use a window wide enough to show all four crossings, for example <span class="chem">-3 &lt;= x &lt;= 4</span>.',
        'Booklet: sum <span class="chem">= -a_{n-1}/a_n</span>, product <span class="chem">= (-1)^n a_0/a_n</span>, with <span class="chem">n = 4</span>.'
      ],
      solution: '<p>(a) The GDC gives <span class="chem">x ≈ -1.7045</span>, <span class="chem">-0.50892</span>, <span class="chem">1.1169</span>, <span class="chem">3.0965</span>.</p><p>(b) With <span class="chem">a_4 = 1</span>, <span class="chem">a_3 = -2</span>, <span class="chem">a_0 = 3</span>: sum <span class="chem">= 2</span>, product <span class="chem">= (+1)(3) = 3</span>.</p><p>(c) The stored roots add to <span class="chem">2.0000</span> and multiply to <span class="chem">3.0000</span>, as predicted. (Rounded values give only approximately <span class="chem">2</span> and <span class="chem">3</span>, so use stored values.)</p>'
    },
    {
      id: 't2-3-q027',
      topic: 't2-3',
      type: 'short',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 2.13, 2.15',
      marks: 9,
      stem: '<p>Let <span class="chem">f(x) = (2x^2 + 3x - 1)/(x + 2)</span>, <span class="chem">x != -2</span>.</p><p>(a) Write down the equation of the vertical asymptote of the graph of <span class="chem">f</span>. <strong>[1 mark]</strong></p><p>(b) Find the equation of the oblique asymptote. <strong>[2 marks]</strong></p><p>(c) Show that the <span class="chem">x</span>-coordinates of the points where the graph of <span class="chem">f</span> meets the curve <span class="chem">y = x^2</span> satisfy <span class="chem">x^3 - 3x + 1 = 0</span>. <strong>[2 marks]</strong></p><p>(d) Hence solve <span class="chem">f(x) &gt;= x^2</span>. <strong>[4 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">x = -2</span>. (b) <span class="chem">y = 2x - 1</span>. (c) <span class="chem">2x^2 + 3x - 1 = x^3 + 2x^2</span> gives <span class="chem">x^3 - 3x + 1 = 0</span>. (d) <span class="chem">-2 &lt; x &lt;= -1.88</span> or <span class="chem">0.347 &lt;= x &lt;= 1.53</span>.</p>',
      markscheme: [
        'A1: (a) <span class="chem">x = -2</span>.',
        'M1: (b) divides: <span class="chem">2x^2 + 3x - 1 = (2x - 1)(x + 2) + 1</span>.',
        'A1: (b) <span class="chem">y = 2x - 1</span>.',
        'M1: (c) sets <span class="chem">f(x) = x^2</span> and multiplies both sides by <span class="chem">(x + 2)</span>.',
        'A1: (c) correct expanded equation <span class="chem">2x^2 + 3x - 1 = x^3 + 2x^2</span> (rearranging to <span class="chem">x^3 - 3x + 1 = 0</span> is the given result, AG).',
        'A1: (d) roots of the cubic from the GDC: <span class="chem">-1.88, 0.347, 1.53</span>.',
        'M1: (d) considers the sign of <span class="chem">f(x) - x^2 = -(x^3 - 3x + 1)/(x + 2)</span>, including the critical value <span class="chem">x = -2</span> (or reads off where the graph of f is on or above <span class="chem">y = x^2</span>).',
        'A1: (d) <span class="chem">-2 &lt; x &lt;= -1.88</span>.',
        'A1: (d) <span class="chem">0.347 &lt;= x &lt;= 1.53</span>.'
      ],
      hints: [
        'Decode: (d) is a rational inequality. Do not multiply through by <span class="chem">x + 2</span> (its sign changes); combine into one fraction or compare the graphs.',
        'Write <span class="chem">f(x) - x^2 = (2x^2 + 3x - 1 - x^2(x + 2))/(x + 2) = -(x^3 - 3x + 1)/(x + 2)</span>.',
        'The critical values are <span class="chem">-2</span> (excluded) and the three GDC roots of <span class="chem">x^3 - 3x + 1</span>. Test the sign on each interval, or graph <span class="chem">y = f(x) - x^2</span>.'
      ],
      solution: '<p>(a) <span class="chem">x = -2</span>.</p><p>(b) <span class="chem">2x^2 + 3x - 1 = (2x - 1)(x + 2) + 1</span>, so <span class="chem">f(x) = 2x - 1 + 1/(x + 2)</span> and the oblique asymptote is <span class="chem">y = 2x - 1</span>.</p><p>(c) <span class="chem">(2x^2 + 3x - 1)/(x + 2) = x^2 => 2x^2 + 3x - 1 = x^3 + 2x^2 => x^3 - 3x + 1 = 0</span>.</p><p>(d) <span class="chem">f(x) - x^2 = -(x^3 - 3x + 1)/(x + 2)</span>. The GDC gives roots <span class="chem">-1.879</span>, <span class="chem">0.3473</span>, <span class="chem">1.532</span>. The expression is <span class="chem">&gt;= 0</span> on <span class="chem">-2 &lt; x &lt;= -1.88</span> and on <span class="chem">0.347 &lt;= x &lt;= 1.53</span> (it is negative for <span class="chem">x &lt; -2</span>, on <span class="chem">(-1.88, 0.347)</span> and for <span class="chem">x &gt; 1.53</span>). <span class="chem">x = -2</span> is excluded because <span class="chem">f</span> is undefined there.</p>'
    },
    {
      id: 't2-3-q028',
      topic: 't2-3',
      type: 'numeric',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 2.13, 2.15',
      marks: 5,
      stem: '<p>The concentration of a medicine in a patient\'s blood, <span class="chem">t</span> hours after an injection, is modelled by <span class="chem">C(t) = 15t/(t^2 + 2t + 6)</span> mg per litre, <span class="chem">t &gt;= 0</span>. The medicine is effective while the concentration is greater than <span class="chem">1.8</span> mg per litre.</p><p>Find the length of time, in hours, for which the medicine is effective.</p>',
      answer: 4.0138648596,
      sigfigs: 3,
      unit: 'hours',
      hints: [
        'Decode: "effective while greater than 1.8" is the inequality <span class="chem">C(t) &gt; 1.8</span>. The answer is the length of the time interval, not a single time.',
        'Graph <span class="chem">Y_1 = 15x/(x^2 + 2x + 6)</span> and <span class="chem">Y_2 = 1.8</span> and find both intersections.',
        'Subtract the earlier time from the later one.'
      ],
      solution: '<p>Solving <span class="chem">C(t) = 1.8</span> (GDC, or <span class="chem">1.8t^2 - 11.4t + 10.8 = 0</span>) gives <span class="chem">t ≈ 1.160</span> and <span class="chem">t ≈ 5.174</span>. Between these times the graph is above <span class="chem">1.8</span>, so the medicine is effective for <span class="chem">5.174 - 1.160 ≈ 4.01</span> hours.</p>'
    },
    {
      id: 't2-3-q029',
      topic: 't2-3',
      type: 'short',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 2.14',
      marks: 6,
      stem: '<p>Let <span class="chem">f(x) = x^3 - 2x^2 - 3x + 4</span>, <span class="chem">x &gt;= k</span>.</p><p>(a) Find the least value of <span class="chem">k</span> for which <span class="chem">f</span> has an inverse function. <strong>[2 marks]</strong></p><p>For this value of <span class="chem">k</span>:</p><p>(b) find the domain of <span class="chem">f^{-1}</span>; <strong>[2 marks]</strong></p><p>(c) find <span class="chem">f^{-1}(10)</span>. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">k ≈ 1.87</span> (the <span class="chem">x</span>-coordinate of the local minimum, <span class="chem">(2 + sqrt(13))/3</span>). (b) <span class="chem">x &gt;= -2.06</span>. (c) <span class="chem">f^{-1}(10) ≈ 3.40</span>.</p>',
      markscheme: [
        'M1: (a) recognises that f must be one-to-one, so k is at the local minimum (GDC minimum tool or <span class="chem">f\'(x) = 0</span>).',
        'A1: (a) <span class="chem">k = 1.87</span>.',
        'M1: (b) domain of <span class="chem">f^{-1}</span> = range of f, starting at <span class="chem">f(k)</span>.',
        'A1: (b) <span class="chem">x &gt;= -2.06</span>.',
        'M1: (c) solves <span class="chem">f(x) = 10</span> with <span class="chem">x &gt;= 1.87</span>.',
        'A1: (c) <span class="chem">3.40</span>.'
      ],
      hints: [
        'An inverse exists only if <span class="chem">f</span> is one-to-one. Where does the cubic stop decreasing and start increasing for good?',
        'Use the GDC minimum tool: the local minimum is at about <span class="chem">(1.87, -2.06)</span>.',
        '<span class="chem">f^{-1}(10)</span> is the value of <span class="chem">x &gt;= k</span> with <span class="chem">f(x) = 10</span>.'
      ],
      solution: '<p>(a) The graph has a local maximum at <span class="chem">x ≈ -0.535</span> and a local minimum at <span class="chem">x ≈ 1.87</span>. To the right of the minimum, <span class="chem">f</span> is increasing, so the least <span class="chem">k</span> is <span class="chem">k ≈ 1.87</span> (exactly <span class="chem">(2 + sqrt(13))/3</span>).</p><p>(b) The range of <span class="chem">f</span> is <span class="chem">f(x) &gt;= f(k) ≈ -2.06</span>, so the domain of <span class="chem">f^{-1}</span> is <span class="chem">x &gt;= -2.06</span>.</p><p>(c) Solving <span class="chem">x^3 - 2x^2 - 3x + 4 = 10</span> on the GDC gives one root, <span class="chem">x ≈ 3.40</span>, so <span class="chem">f^{-1}(10) ≈ 3.40</span>.</p>'
    },
    {
      id: 't2-3-q030',
      topic: 't2-3',
      type: 'numeric',
      tier: 'challenge',
      level: 'ahl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 2.14',
      marks: 5,
      stem: '<p>Let <span class="chem">f(x) = e^{x/2} - 2</span>, <span class="chem">x \\in \\mathbb{R}</span>. The graphs of <span class="chem">y = f(x)</span> and <span class="chem">y = f^{-1}(x)</span> meet at exactly two points. Find the <span class="chem">x</span>-coordinate of the point of intersection that lies in the first quadrant.</p>',
      answer: 3.35669398,
      sigfigs: 3,
      hints: [
        'Decode: you do not need a formula for <span class="chem">f^{-1}</span>. Because <span class="chem">f</span> is increasing, every meeting point of <span class="chem">f</span> and <span class="chem">f^{-1}</span> lies on the line <span class="chem">y = x</span>.',
        'So solve <span class="chem">f(x) = x</span>, that is <span class="chem">e^{x/2} - 2 = x</span>.',
        'Graph <span class="chem">Y_1 = e^{x/2} - 2</span> and <span class="chem">Y_2 = x</span>; one crossing is in the third quadrant, the other in the first.'
      ],
      solution: '<p><strong>Decode.</strong> The graph of <span class="chem">f^{-1}</span> is the reflection of the graph of <span class="chem">f</span> in <span class="chem">y = x</span>. For an increasing function, the two graphs can only meet on that line, so solve <span class="chem">f(x) = x</span>.</p><p><span class="chem">e^{x/2} - 2 = x</span> has GDC solutions <span class="chem">x ≈ -1.54</span> (point <span class="chem">(-1.54, -1.54)</span>, third quadrant) and <span class="chem">x ≈ 3.36</span>. The first-quadrant point is <span class="chem">(3.36, 3.36)</span>, so <span class="chem">x ≈ 3.36</span>.</p>'
    },
    {
      id: 't2-3-q031',
      topic: 't2-3',
      type: 'numeric',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 2.15',
      marks: 4,
      stem: '<p>The solution of the inequality <span class="chem">2^x &gt;= x + 3</span> is <span class="chem">x &lt;= a</span> or <span class="chem">x &gt;= b</span>, where <span class="chem">a &lt; 0 &lt; b</span>. Find the value of <span class="chem">b</span>.</p>',
      answer: 2.4449075546,
      sigfigs: 3,
      hints: [
        'There is no algebraic method for an equation mixing <span class="chem">2^x</span> and <span class="chem">x</span>: graph <span class="chem">Y_1 = 2^x</span> and <span class="chem">Y_2 = x + 3</span>.',
        'The curve is above the line to the left of the negative intersection and to the right of the positive one. Find the positive intersection.'
      ],
      solution: '<p>The GDC gives intersections at <span class="chem">x ≈ -2.86</span> and <span class="chem">x ≈ 2.44</span>. The exponential curve is on or above the line for <span class="chem">x &lt;= -2.86</span> and for <span class="chem">x &gt;= 2.44</span>, so <span class="chem">b ≈ 2.44</span>.</p>'
    },
    {
      id: 't2-3-q032',
      topic: 't2-3',
      type: 'short',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 2.15',
      marks: 4,
      stem: '<p>Solve the inequality <span class="chem">x^4 - 4x^2 + x + 1 &lt; 0</span>. Give the end points of your intervals correct to 3 significant figures.</p>',
      answer: '<p><span class="chem">-2.06 &lt; x &lt; -0.396</span> or <span class="chem">0.694 &lt; x &lt; 1.76</span></p>',
      markscheme: [
        'M1: graphs <span class="chem">y = x^4 - 4x^2 + x + 1</span> and finds its zeros.',
        'A1: zeros <span class="chem">-2.06, -0.396, 0.694, 1.76</span>.',
        'A1: <span class="chem">-2.06 &lt; x &lt; -0.396</span>.',
        'A1: <span class="chem">0.694 &lt; x &lt; 1.76</span> (strict inequalities, both intervals).'
      ],
      hints: [
        'A quartic with positive leading coefficient is positive at both ends, so it is negative between the 1st and 2nd zeros and between the 3rd and 4th.',
        'Use the zero tool four times; a window <span class="chem">-3 &lt;= x &lt;= 3</span> works.'
      ],
      solution: '<p>The GDC gives zeros <span class="chem">x ≈ -2.0615</span>, <span class="chem">-0.39634</span>, <span class="chem">0.69382</span>, <span class="chem">1.7640</span>. The graph is below the <span class="chem">x</span>-axis between the first and second and between the third and fourth zeros: <span class="chem">-2.06 &lt; x &lt; -0.396</span> or <span class="chem">0.694 &lt; x &lt; 1.76</span>.</p>'
    },
    {
      id: 't2-3-q033',
      topic: 't2-3',
      type: 'numeric',
      tier: 'challenge',
      level: 'ahl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 2.12, 2.15',
      marks: 5,
      stem: '<p>A small factory makes <span class="chem">x</span> batches of a product each week, where <span class="chem">x</span> is a whole number with <span class="chem">0 &lt;= x &lt;= 12</span>. Its weekly profit, in thousands of dollars, is modelled by <span class="chem">P(x) = -0.5x^3 + 6x^2 + 4x - 40</span>.</p><p>The owners want a weekly profit of more than <span class="chem">50</span> thousand dollars. Find how many different weekly production levels meet this target.</p>',
      answer: 7,
      tolerance: 0,
      hints: [
        'Decode: this is the cubic inequality <span class="chem">P(x) &gt; 50</span>, but the answer is a <strong>count of whole numbers</strong> in <span class="chem">0 &lt;= x &lt;= 12</span>, not an interval.',
        'Graph <span class="chem">Y_1 = -0.5x^3 + 6x^2 + 4x - 40</span> and <span class="chem">Y_2 = 50</span> on <span class="chem">0 &lt;= x &lt;= 12</span> and find where they meet.',
        'List the integers strictly between the two intersection values (or check them in a table of values).'
      ],
      solution: '<p><strong>Decode.</strong> Solve <span class="chem">P(x) &gt; 50</span>, then count the whole numbers that satisfy it.</p><p>On the GDC, <span class="chem">P(x) = 50</span> at <span class="chem">x ≈ 4.36</span> and <span class="chem">x ≈ 11.3</span> in the domain (the third root, <span class="chem">-3.66</span>, is outside it). <span class="chem">P(x) &gt; 50</span> for <span class="chem">4.36 &lt; x &lt; 11.3</span>, so <span class="chem">x = 5, 6, 7, 8, 9, 10, 11</span>. A table confirms <span class="chem">P(4) = 40</span>, <span class="chem">P(5) = 67.5</span>, <span class="chem">P(11) = 64.5</span>, <span class="chem">P(12) = 8</span>. There are <span class="chem">7</span> production levels.</p>'
    },
    {
      id: 't2-3-q034',
      topic: 't2-3',
      type: 'short',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 2.15',
      marks: 4,
      stem: '<p>Let <span class="chem">f(x) = x^2 - 2</span> and <span class="chem">g(x) = ln(x + 3)</span>, <span class="chem">x &gt; -3</span>. Solve <span class="chem">g(x) &gt;= f(x)</span>.</p>',
      answer: '<p><span class="chem">-1.54 &lt;= x &lt;= 1.89</span></p>',
      markscheme: [
        'M1: graphs <span class="chem">y = ln(x + 3)</span> and <span class="chem">y = x^2 - 2</span> (or <span class="chem">y = ln(x + 3) - x^2 + 2</span>).',
        'A1: intersection <span class="chem">x = -1.54</span>.',
        'A1: intersection <span class="chem">x = 1.89</span>.',
        'A1: <span class="chem">-1.54 &lt;= x &lt;= 1.89</span> (inclusive end points).'
      ],
      hints: [
        'Decode: "<span class="chem">g(x) &gt;= f(x)</span>" means "where is the graph of <span class="chem">g</span> on or above the graph of <span class="chem">f</span>?"',
        'Graph both, find the two intersections, and read off the interval between them.'
      ],
      solution: '<p>The GDC gives intersections at <span class="chem">x ≈ -1.5418</span> and <span class="chem">x ≈ 1.8942</span>. Between them the logarithm curve is above the parabola, so <span class="chem">-1.54 &lt;= x &lt;= 1.89</span>. This interval lies inside the domain <span class="chem">x &gt; -3</span>.</p>'
    },
    {
      id: 't2-3-q035',
      topic: 't2-3',
      type: 'numeric',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 2.16',
      marks: 4,
      stem: '<p>The solution of the inequality <span class="chem">|e^x - 4| &lt; 2x</span> is <span class="chem">a &lt; x &lt; b</span>. Find the value of <span class="chem">a</span>.</p>',
      answer: 0.840841495,
      sigfigs: 3,
      hints: [
        'Graph <span class="chem">Y_1 = abs(e^x - 4)</span> and <span class="chem">Y_2 = 2x</span>. The solution is where the V-shaped curve is <strong>below</strong> the line.',
        'The left end point <span class="chem">a</span> is on the reflected part, where <span class="chem">e^x &lt; 4</span>, so it solves <span class="chem">4 - e^x = 2x</span>.'
      ],
      solution: '<p>The graphs meet at <span class="chem">x ≈ 0.841</span> (where <span class="chem">4 - e^x = 2x</span>) and <span class="chem">x ≈ 2.11</span> (where <span class="chem">e^x - 4 = 2x</span>). The modulus graph is below the line between them, so <span class="chem">a ≈ 0.841</span> and <span class="chem">b ≈ 2.11</span>. For <span class="chem">x &lt;= 0</span> the right-hand side is not positive, so there are no other solutions.</p>'
    },
    {
      id: 't2-3-q036',
      topic: 't2-3',
      type: 'short',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 2.16',
      marks: 6,
      stem: '<p>Solve the inequality <span class="chem">|x^3 - 4x| &gt;= 2</span>. Give the end points of your intervals correct to 3 significant figures.</p>',
      answer: '<p><span class="chem">x &lt;= -2.21</span> or <span class="chem">-1.68 &lt;= x &lt;= -0.539</span> or <span class="chem">0.539 &lt;= x &lt;= 1.68</span> or <span class="chem">x &gt;= 2.21</span></p>',
      markscheme: [
        'M1: graphs <span class="chem">y = |x^3 - 4x|</span> and <span class="chem">y = 2</span> (or solves <span class="chem">x^3 - 4x = 2</span> and <span class="chem">x^3 - 4x = -2</span>).',
        'A1: critical values <span class="chem">+-2.21</span>.',
        'A1: critical values <span class="chem">+-1.68</span>.',
        'A1: critical values <span class="chem">+-0.539</span>.',
        'A1: <span class="chem">x &lt;= -2.21</span> or <span class="chem">x &gt;= 2.21</span>.',
        'A1: <span class="chem">-1.68 &lt;= x &lt;= -0.539</span> or <span class="chem">0.539 &lt;= x &lt;= 1.68</span>.'
      ],
      hints: [
        '<span class="chem">|A| &gt;= 2</span> means <span class="chem">A &gt;= 2</span> or <span class="chem">A &lt;= -2</span>. Each gives a cubic equation with three GDC roots.',
        '<span class="chem">x^3 - 4x</span> is odd, so the six critical values come in pairs <span class="chem">+-c</span>. Graph <span class="chem">y = abs(x^3 - 4x)</span> and <span class="chem">y = 2</span> to see which pieces lie above the line.'
      ],
      solution: '<p><span class="chem">x^3 - 4x = 2</span> has roots <span class="chem">-1.675, -0.5392, 2.214</span>; <span class="chem">x^3 - 4x = -2</span> has roots <span class="chem">-2.214, 0.5392, 1.675</span>. The graph of <span class="chem">y = |x^3 - 4x|</span> touches <span class="chem">0</span> at <span class="chem">x = 0, +-2</span> and is on or above <span class="chem">y = 2</span> on four pieces: <span class="chem">x &lt;= -2.21</span>, <span class="chem">-1.68 &lt;= x &lt;= -0.539</span>, <span class="chem">0.539 &lt;= x &lt;= 1.68</span>, <span class="chem">x &gt;= 2.21</span>.</p>'
    },
    {
      id: 't2-3-q037',
      topic: 't2-3',
      type: 'numeric',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 2.16',
      marks: 3,
      stem: '<p>Let <span class="chem">f(x) = x^3 - 2x^2 - 4x + 6</span>. The graph of <span class="chem">y = 1/f(x)</span> has three vertical asymptotes. The equation of the one nearest to the <span class="chem">y</span>-axis is <span class="chem">x = c</span>. Find <span class="chem">c</span>.</p>',
      answer: 1.21075588096,
      sigfigs: 3,
      hints: [
        'The vertical asymptotes of <span class="chem">y = 1/f(x)</span> are at the zeros of <span class="chem">f</span>.',
        'Find the three zeros of the cubic with the GDC and choose the one with the smallest <span class="chem">|x|</span>.'
      ],
      solution: '<p>The zeros of <span class="chem">f</span> are <span class="chem">x ≈ -1.87</span>, <span class="chem">1.21</span> and <span class="chem">2.66</span>, so <span class="chem">1/f</span> has vertical asymptotes there. The nearest to the <span class="chem">y</span>-axis is <span class="chem">x ≈ 1.21</span>.</p>'
    },
    {
      id: 't2-3-q038',
      topic: 't2-3',
      type: 'short',
      tier: 'challenge',
      level: 'ahl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 2.16',
      marks: 6,
      stem: '<p>Let <span class="chem">f(x) = x^3 - 4x^2 + 3x + 1</span>.</p><p>(a) Find the coordinates of the local maximum and local minimum points of the graph of <span class="chem">y = f(x)</span>. <strong>[2 marks]</strong></p><p>(b) Sketch the graph of <span class="chem">y = f(|x|)</span> for <span class="chem">-4 &lt;= x &lt;= 4</span>. <strong>[2 marks]</strong></p><p>(c) Find the set of values of <span class="chem">k</span> for which the equation <span class="chem">f(|x|) = k</span> has exactly six solutions. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) Maximum <span class="chem">(0.451, 1.63)</span>, minimum <span class="chem">(2.22, -1.11)</span>. (b) Keep the part of <span class="chem">y = f(x)</span> for <span class="chem">x &gt;= 0</span> (starting at <span class="chem">(0, 1)</span>) and reflect it in the <span class="chem">y</span>-axis; the graph is symmetric, with maxima at <span class="chem">(+-0.451, 1.63)</span>, minima at <span class="chem">(+-2.22, -1.11)</span> and a sharp point at <span class="chem">(0, 1)</span>. (c) <span class="chem">1 &lt; k &lt; 1.63</span>.</p>',
      markscheme: [
        'A1: (a) maximum <span class="chem">(0.451, 1.63)</span>.',
        'A1: (a) minimum <span class="chem">(2.22, -1.11)</span>.',
        'A1: (b) right-hand half is <span class="chem">y = f(x)</span> for <span class="chem">x &gt;= 0</span>, through <span class="chem">(0, 1)</span>, with the turning points from (a).',
        'A1: (b) left-hand half is its reflection in the <span class="chem">y</span>-axis (symmetric graph, local minimum point at <span class="chem">(0, 1)</span>).',
        'R1: (c) a horizontal line <span class="chem">y = k</span> must cut each half three times, which needs it strictly above <span class="chem">f(0) = 1</span> and strictly below the maximum.',
        'A1: (c) <span class="chem">1 &lt; k &lt; 1.63</span>.'
      ],
      hints: [
        'Decode: "exactly six solutions" means a horizontal line <span class="chem">y = k</span> meets the graph of <span class="chem">y = f(|x|)</span> six times. Because the graph is symmetric, count the meetings with the right half (<span class="chem">x &gt; 0</span>) and double.',
        '<span class="chem">f(|x|)</span> uses only the part of <span class="chem">f</span> with <span class="chem">x &gt;= 0</span>, then mirrors it. That part starts at <span class="chem">(0, 1)</span>, rises to the maximum, falls to the minimum, then rises again.',
        'Three meetings on <span class="chem">x &gt; 0</span> need the line above the starting value <span class="chem">1</span> but below the maximum. What happens when <span class="chem">k = 1</span> exactly?'
      ],
      solution: '<p><strong>Decode.</strong> Count intersections of <span class="chem">y = k</span> with a graph that is symmetric about the <span class="chem">y</span>-axis.</p><p>(a) GDC: maximum <span class="chem">(0.451, 1.63)</span>, minimum <span class="chem">(2.22, -1.11)</span>.</p><p>(b) For <span class="chem">x &gt;= 0</span>, <span class="chem">f(|x|) = f(x)</span>; reflect this half in the <span class="chem">y</span>-axis.</p><p>(c) On <span class="chem">x &gt; 0</span> the curve goes from <span class="chem">1</span> up to <span class="chem">1.63</span>, down to <span class="chem">-1.11</span>, then up without bound. A line <span class="chem">y = k</span> meets it three times exactly when <span class="chem">1 &lt; k &lt; 1.63</span>, giving six solutions in total. At <span class="chem">k = 1</span> the solution <span class="chem">x = 0</span> is shared by both halves, giving only five.</p>'
    },
    {
      id: 't2-3-q039',
      topic: 't2-3',
      type: 'short',
      tier: 'challenge',
      level: 'ahl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.11, AHL 2.12, 2.15',
      marks: 15,
      stem: '<p>The cross-section of a hill is modelled by <span class="chem">h(x) = 0.004x(30 - x)(x + 10)</span>, <span class="chem">0 &lt;= x &lt;= 30</span>, where <span class="chem">x</span> is the horizontal distance in metres from the western foot of the hill and <span class="chem">h(x)</span> is the height in metres.</p><p>(a) Find the greatest height of the hill and the horizontal distance at which it occurs. <strong>[3 marks]</strong></p><p>(b) A footpath is to be built along the part of the hill that is at least <span class="chem">15</span> m high. Find the horizontal length of this part. <strong>[4 marks]</strong></p><p>A landscape architect redesigns the hill. The new cross-section is <span class="chem">g(x) = h(x/1.2) - 3</span>, <span class="chem">0 &lt;= x &lt;= 36</span>, where height is still measured from the original ground level.</p><p>(c) Describe fully the two transformations that map the graph of <span class="chem">h</span> onto the graph of <span class="chem">g</span>. <strong>[2 marks]</strong></p><p>(d) Write down the coordinates of the highest point of the new hill. <strong>[2 marks]</strong></p><p>(e) Find the horizontal distance between the two points at which the new hill meets the original ground level (<span class="chem">g(x) = 0</span>). <strong>[4 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">24.3</span> m at <span class="chem">x = 18.7</span> m. (b) <span class="chem">h(x) &gt;= 15</span> for <span class="chem">9.38 &lt;= x &lt;= 26.0</span>; length <span class="chem">16.6</span> m. (c) Horizontal stretch with scale factor <span class="chem">1.2</span> (parallel to the <span class="chem">x</span>-axis), then translation <span class="chem">3</span> units down. (d) <span class="chem">(22.4, 21.3)</span>. (e) <span class="chem">g(x) = 0</span> at <span class="chem">x = 2.65</span> and <span class="chem">x = 35.2</span>; distance <span class="chem">32.6</span> m.</p>',
      markscheme: [
        'M1: (a) uses the GDC maximum on <span class="chem">0 &lt;= x &lt;= 30</span>.',
        'A1: (a) greatest height <span class="chem">24.3</span> m.',
        'A1: (a) at <span class="chem">x = 18.7</span> m.',
        'M1: (b) sets up <span class="chem">h(x) &gt;= 15</span> (or <span class="chem">h(x) = 15</span>).',
        'A1: (b) <span class="chem">x = 9.38</span>.',
        'A1: (b) <span class="chem">x = 26.0</span> (rejecting the negative root <span class="chem">-15.4</span>).',
        'A1: (b) length <span class="chem">26.0 - 9.38 = 16.6</span> m.',
        'A1: (c) horizontal stretch, scale factor <span class="chem">1.2</span>.',
        'A1: (c) vertical translation of <span class="chem">3</span> units down.',
        'A1: (d) <span class="chem">x = 1.2 × 18.7 = 22.4</span>.',
        'A1: (d) <span class="chem">y = 24.3 - 3 = 21.3</span>.',
        'M1: (e) solves <span class="chem">g(x) = 0</span>, i.e. <span class="chem">h(x/1.2) = 3</span>, on <span class="chem">0 &lt;= x &lt;= 36</span>.',
        'A1: (e) <span class="chem">x = 2.65</span>.',
        'A1: (e) <span class="chem">x = 35.2</span>.',
        'A1: (e) distance <span class="chem">32.6</span> m.'
      ],
      hints: [
        'Decode: (b) "at least 15 m high" is the inequality <span class="chem">h(x) &gt;= 15</span>, and "horizontal length" is the difference of the two end points. In (c)–(e), the new hill is a transformed copy, so turning points move with the transformation.',
        'Enter <span class="chem">Y_1 = 0.004x(30 - x)(x + 10)</span> with window <span class="chem">0 &lt;= x &lt;= 36</span>, <span class="chem">-5 &lt;= y &lt;= 30</span>. Use maximum, then intersect with <span class="chem">Y_2 = 15</span>.',
        '<span class="chem">h(x/1.2)</span> stretches horizontally by <span class="chem">1.2</span>; <span class="chem">-3</span> moves down. So the peak <span class="chem">(18.7, 24.3)</span> moves to <span class="chem">(1.2 × 18.7, 24.3 - 3)</span>.',
        'For (e), graph <span class="chem">Y_3 = 0.004(x/1.2)(30 - x/1.2)(x/1.2 + 10) - 3</span> and find its zeros in <span class="chem">0 &lt;= x &lt;= 36</span>.'
      ],
      solution: '<p><strong>Decode.</strong> (b) and (e) are inequality/equation questions about a cubic, solved on the GDC and restricted to the domain. (c) and (d) are transformation questions: track the peak.</p><p>(a) The GDC maximum on <span class="chem">0 &lt;= x &lt;= 30</span> is at <span class="chem">(18.685, 24.258)</span>: height <span class="chem">24.3</span> m at <span class="chem">x = 18.7</span> m.</p><p>(b) <span class="chem">h(x) = 15</span> at <span class="chem">x ≈ 9.384</span> and <span class="chem">x ≈ 25.99</span> (the root <span class="chem">-15.4</span> is outside the domain). The hill is at least <span class="chem">15</span> m high for <span class="chem">9.38 &lt;= x &lt;= 26.0</span>, a length of <span class="chem">16.6</span> m.</p><p>(c) <span class="chem">x -&gt; x/1.2</span>: horizontal stretch with scale factor <span class="chem">1.2</span>; <span class="chem">-3</span>: translation <span class="chem">3</span> units down.</p><p>(d) <span class="chem">(1.2 × 18.685, 24.258 - 3) = (22.4, 21.3)</span>.</p><p>(e) <span class="chem">g(x) = 0</span> at <span class="chem">x ≈ 2.652</span> and <span class="chem">x ≈ 35.22</span>, so the distance is <span class="chem">32.6</span> m. (Check: these are <span class="chem">1.2</span> times the solutions of <span class="chem">h(x) = 3</span>.)</p>'
    },
    {
      id: 't2-3-q040',
      topic: 't2-3',
      type: 'short',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.11',
      marks: 7,
      stem: '<p>Let <span class="chem">f(x) = x^3 - 3x</span>. The function <span class="chem">g</span> is defined by <span class="chem">g(x) = a f(x) + b</span>, where <span class="chem">a</span> and <span class="chem">b</span> are constants. A table of values of <span class="chem">g</span> includes <span class="chem">g(1) = 1</span> and <span class="chem">g(2) = 13</span>.</p><p>(a) Find the value of <span class="chem">a</span> and the value of <span class="chem">b</span>. <strong>[3 marks]</strong></p><p>(b) Hence describe a sequence of two transformations that maps the graph of <span class="chem">y = f(x)</span> onto the graph of <span class="chem">y = g(x)</span>. <strong>[2 marks]</strong></p><p>(c) Find the <span class="chem">x</span>-intercept of the graph of <span class="chem">y = g(x)</span>. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">a = 3</span>, <span class="chem">b = 7</span>. (b) Vertical stretch with scale factor <span class="chem">3</span>, then translation <span class="chem">7</span> units up. (c) <span class="chem">x ≈ -2.04</span>.</p>',
      markscheme: [
        'M1: (a) uses <span class="chem">f(1) = -2</span> and <span class="chem">f(2) = 2</span> to form <span class="chem">-2a + b = 1</span> and <span class="chem">2a + b = 13</span>.',
        'A1: (a) <span class="chem">a = 3</span>.',
        'A1: (a) <span class="chem">b = 7</span>.',
        'A1: (b) vertical stretch, scale factor <span class="chem">3</span>.',
        'A1: (b) followed by a vertical translation of <span class="chem">7</span> units up.',
        'M1: (c) solves <span class="chem">3x^3 - 9x + 7 = 0</span> on the GDC.',
        'A1: (c) <span class="chem">x = -2.04</span>.'
      ],
      hints: [
        'Evaluate <span class="chem">f(1)</span> and <span class="chem">f(2)</span>, then use the two data values to write two simultaneous equations in <span class="chem">a</span> and <span class="chem">b</span>.',
        'In <span class="chem">a f(x) + b</span>, the stretch happens before the translation.',
        '<span class="chem">g(x) = 3x^3 - 9x + 7</span> has only one real zero; find it with the GDC.'
      ],
      solution: '<p>(a) <span class="chem">f(1) = -2</span> and <span class="chem">f(2) = 2</span>, so <span class="chem">-2a + b = 1</span> and <span class="chem">2a + b = 13</span>. Subtracting: <span class="chem">4a = 12</span>, so <span class="chem">a = 3</span> and <span class="chem">b = 7</span>.</p><p>(b) Vertical stretch with scale factor <span class="chem">3</span>, then translation of <span class="chem">7</span> units up. (In the other order the translation would have to be <span class="chem">7/3</span> units.)</p><p>(c) <span class="chem">g(x) = 3x^3 - 9x + 7 = 0</span> has one real root, <span class="chem">x ≈ -2.04</span> (the local minimum of <span class="chem">g</span>, at <span class="chem">(1, 1)</span>, is above the axis).</p>'
    },
    {
      id: 't2-3-q041',
      topic: 't2-3',
      type: 'numeric',
      tier: 'challenge',
      level: 'ahl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 2.13',
      marks: 4,
      stem: '<p>A workshop makes <span class="chem">x</span> chairs per week. The average cost per chair, in dollars, is <span class="chem">C(x) = (0.5x^2 + 30x + 1500)/(x + 20)</span>.</p><p>Find the number of chairs per week that gives the lowest average cost per chair.</p>',
      answer: 27,
      tolerance: 0,
      hints: [
        'Decode: you are asked for a number of chairs, which must be a whole number. Find where <span class="chem">C</span> is least, then check the whole numbers on either side.',
        'Graph <span class="chem">Y_1 = (0.5x^2 + 30x + 1500)/(x + 20)</span> for <span class="chem">x &gt; 0</span> and use the minimum tool.',
        'The minimum is at <span class="chem">x ≈ 26.9</span>. Compare <span class="chem">C(26)</span> and <span class="chem">C(27)</span> in a table.'
      ],
      solution: '<p><strong>Decode.</strong> The answer must be a whole number of chairs, so the GDC minimum is only the first step.</p><p>The GDC minimum of <span class="chem">C</span> for <span class="chem">x &gt; 0</span> is at <span class="chem">x ≈ 26.90</span>, <span class="chem">C ≈ 56.904</span>. Checking whole numbers: <span class="chem">C(26) = 2618/46 ≈ 56.913</span> and <span class="chem">C(27) = 2674.5/47 ≈ 56.904</span>. The lowest average cost is at <span class="chem">27</span> chairs per week.</p><p>(Dividing gives <span class="chem">C(x) = 0.5x + 20 + 1100/(x + 20)</span>, so for large <span class="chem">x</span> the cost follows the oblique asymptote <span class="chem">y = 0.5x + 20</span> and rises again.)</p>'
    },
    {
      id: 't2-3-q042',
      topic: 't2-3',
      type: 'short',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 2.12, 2.15',
      marks: 6,
      stem: '<p>Let <span class="chem">P(x) = x^3 + ax^2 - 7x + 3</span>. When <span class="chem">P(x)</span> is divided by <span class="chem">(x + 2)</span>, the remainder is <span class="chem">13</span>.</p><p>(a) Find the value of <span class="chem">a</span>. <strong>[2 marks]</strong></p><p>(b) Find the three roots of <span class="chem">P(x) = 0</span>. <strong>[2 marks]</strong></p><p>(c) Hence solve <span class="chem">P(x) &gt; 0</span>. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">a = 1</span>. (b) <span class="chem">x ≈ -3.35, 0.476, 1.88</span>. (c) <span class="chem">-3.35 &lt; x &lt; 0.476</span> or <span class="chem">x &gt; 1.88</span>.</p>',
      markscheme: [
        'M1: (a) Remainder Theorem: <span class="chem">P(-2) = -8 + 4a + 14 + 3 = 13</span>.',
        'A1: (a) <span class="chem">a = 1</span>.',
        'M1: (b) substitutes <span class="chem">a = 1</span> and solves <span class="chem">x^3 + x^2 - 7x + 3 = 0</span> on the GDC (graph or polynomial solver).',
        'A1: (b) all three roots <span class="chem">-3.35, 0.476, 1.88</span>.',
        'A1: (c) <span class="chem">-3.35 &lt; x &lt; 0.476</span>.',
        'A1: (c) <span class="chem">x &gt; 1.88</span>.'
      ],
      hints: [
        'Remainder Theorem: the remainder on division by <span class="chem">(x + 2)</span> is <span class="chem">P(-2)</span>.',
        'With <span class="chem">a = 1</span>, none of <span class="chem">+-1, +-3</span> is a root, so there is no "nice" factor: use the GDC.',
        'A cubic with positive leading coefficient is positive between its first two roots and after its third.'
      ],
      solution: '<p>(a) <span class="chem">P(-2) = -8 + 4a + 14 + 3 = 4a + 9 = 13</span>, so <span class="chem">a = 1</span>.</p><p>(b) <span class="chem">x^3 + x^2 - 7x + 3 = 0</span>: GDC roots <span class="chem">x ≈ -3.354</span>, <span class="chem">0.4765</span>, <span class="chem">1.877</span>.</p><p>(c) The graph is above the axis for <span class="chem">-3.35 &lt; x &lt; 0.476</span> and for <span class="chem">x &gt; 1.88</span>.</p>'
    },
    {
      id: 't2-3-q043',
      topic: 't2-3',
      type: 'short',
      tier: 'challenge',
      level: 'ahl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 2.15, 2.16',
      marks: 5,
      stem: '<p>Solve the inequality <span class="chem">|ln x| &lt; 2 - x</span>.</p>',
      answer: '<p><span class="chem">0.159 &lt; x &lt; 1.56</span></p>',
      markscheme: [
        'R1: notes the domain <span class="chem">x &gt; 0</span>.',
        'M1: graphs <span class="chem">y = |ln x|</span> and <span class="chem">y = 2 - x</span> (or splits into <span class="chem">-ln x &lt; 2 - x</span> for <span class="chem">0 &lt; x &lt; 1</span> and <span class="chem">ln x &lt; 2 - x</span> for <span class="chem">x &gt;= 1</span>).',
        'A1: <span class="chem">x = 0.159</span>.',
        'A1: <span class="chem">x = 1.56</span>.',
        'A1: <span class="chem">0.159 &lt; x &lt; 1.56</span>.'
      ],
      hints: [
        'Decode: a modulus inequality with no algebraic method. Remember the hidden condition: <span class="chem">ln x</span> needs <span class="chem">x &gt; 0</span>. Solve it graphically.',
        'Graph <span class="chem">Y_1 = abs(ln(x))</span> and <span class="chem">Y_2 = 2 - x</span>. The modulus graph has a sharp point at <span class="chem">(1, 0)</span>.',
        'If you solve algebraically instead, <span class="chem">-ln x = 2 - x</span> has a second root, <span class="chem">x ≈ 3.15</span>; reject it, since that branch only applies for <span class="chem">x &lt; 1</span>.'
      ],
      solution: '<p><strong>Decode.</strong> Where is the V-shaped graph <span class="chem">y = |ln x|</span>, defined for <span class="chem">x &gt; 0</span>, below the line <span class="chem">y = 2 - x</span>?</p><p>For <span class="chem">0 &lt; x &lt; 1</span>, <span class="chem">|ln x| = -ln x</span>; <span class="chem">-ln x = 2 - x</span> gives <span class="chem">x ≈ 0.159</span> (the other root <span class="chem">3.15</span> is not in this branch). For <span class="chem">x &gt;= 1</span>, <span class="chem">ln x = 2 - x</span> gives <span class="chem">x ≈ 1.56</span>. At <span class="chem">x = 1</span>, <span class="chem">0 &lt; 1</span>, so the solution is <span class="chem">0.159 &lt; x &lt; 1.56</span>.</p>'
    },
    {
      id: 't2-3-q044',
      topic: 't2-3',
      type: 'numeric',
      tier: 'foundation',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.11',
      marks: 2,
      stem: '<p>The point <span class="chem">(2, -4)</span> lies on the graph of <span class="chem">y = f(x)</span>. The point <span class="chem">Q</span> is its image on the graph of <span class="chem">y = 3f(-x) - 2</span>. Find the <span class="chem">y</span>-coordinate of <span class="chem">Q</span>.</p>',
      answer: -14,
      tolerance: 0,
      hints: [
        '<span class="chem">f(-x)</span> reflects in the <span class="chem">y</span>-axis, so only the <span class="chem">x</span>-coordinate changes sign.',
        'The outside of the function acts on <span class="chem">y</span>: multiply by <span class="chem">3</span>, then subtract <span class="chem">2</span>.'
      ],
      solution: '<p>The reflection sends <span class="chem">(2, -4)</span> to <span class="chem">(-2, -4)</span>. Then <span class="chem">y = 3(-4) - 2 = -14</span>, so <span class="chem">Q = (-2, -14)</span> and its <span class="chem">y</span>-coordinate is <span class="chem">-14</span>.</p>'
    },
    {
      id: 't2-3-q045',
      topic: 't2-3',
      type: 'short',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.11',
      marks: 5,
      stem: '<p>(a) Write <span class="chem">2x^2 - 12x + 13</span> in the form <span class="chem">a(x - h)^2 + k</span>. <strong>[2 marks]</strong></p><p>(b) Hence describe a sequence of transformations that maps the graph of <span class="chem">y = x^2</span> onto the graph of <span class="chem">y = 2x^2 - 12x + 13</span>. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">2(x - 3)^2 - 5</span>. (b) Translation of <span class="chem">3</span> units right (horizontal translation), vertical stretch with scale factor <span class="chem">2</span>, then translation of <span class="chem">5</span> units down. (The vertical stretch must come before the downward translation.)</p>',
      markscheme: [
        'M1: (a) completes the square: <span class="chem">2(x^2 - 6x) + 13 = 2((x - 3)^2 - 9) + 13</span>.',
        'A1: (a) <span class="chem">2(x - 3)^2 - 5</span>.',
        'A1: (b) horizontal translation of <span class="chem">3</span> units to the right.',
        'A1: (b) vertical stretch with scale factor <span class="chem">2</span>.',
        'A1: (b) vertical translation of <span class="chem">5</span> units down, applied after the stretch.'
      ],
      hints: [
        'Take out the factor <span class="chem">2</span> from the <span class="chem">x</span> terms first: <span class="chem">2(x^2 - 6x) + 13</span>.',
        'Read <span class="chem">a(x - h)^2 + k</span> as: translate <span class="chem">h</span> horizontally, stretch vertically by <span class="chem">a</span>, then translate <span class="chem">k</span> vertically.'
      ],
      solution: '<p>(a) <span class="chem">2x^2 - 12x + 13 = 2(x^2 - 6x + 9) - 18 + 13 = 2(x - 3)^2 - 5</span>.</p><p>(b) Translate <span class="chem">3</span> right (<span class="chem">y = (x - 3)^2</span>), stretch vertically by factor <span class="chem">2</span> (<span class="chem">y = 2(x - 3)^2</span>), then translate <span class="chem">5</span> down. If you translate down before stretching, the stretch would double the shift to <span class="chem">-10</span>, which is wrong.</p>'
    },
    {
      id: 't2-3-q046',
      topic: 't2-3',
      type: 'numeric',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.11',
      marks: 4,
      stem: '<p>Let <span class="chem">f(x) = x^2 - 4x</span>. The graph of <span class="chem">y = f(x)</span> is reflected in the <span class="chem">y</span>-axis, then translated <span class="chem">3</span> units to the right, then stretched vertically with scale factor <span class="chem">2</span>, giving the graph of <span class="chem">y = g(x)</span>. Find the <span class="chem">y</span>-intercept of the graph of <span class="chem">g</span>.</p>',
      answer: -6,
      tolerance: 0,
      hints: [
        'Decode: build <span class="chem">g(x)</span> one step at a time, in the order given. Each horizontal step replaces <span class="chem">x</span> in the <strong>current</strong> expression, then find <span class="chem">g(0)</span>.',
        'Reflection in the <span class="chem">y</span>-axis: <span class="chem">f(-x)</span>. A translation of <span class="chem">3</span> right then replaces <span class="chem">x</span> by <span class="chem">x - 3</span>: <span class="chem">f(-(x - 3)) = f(3 - x)</span>, not <span class="chem">f(-x - 3)</span>.',
        'So <span class="chem">g(x) = 2f(3 - x)</span> and <span class="chem">g(0) = 2f(3)</span>.'
      ],
      solution: '<p><strong>Decode.</strong> Translate words into function notation in order; the translation acts on <span class="chem">x</span>, not on <span class="chem">-x</span>.</p><p>Reflect: <span class="chem">f(-x)</span>. Translate <span class="chem">3</span> right: <span class="chem">f(-(x - 3)) = f(3 - x)</span>. Stretch: <span class="chem">g(x) = 2f(3 - x)</span>. So <span class="chem">g(0) = 2f(3) = 2(9 - 12) = -6</span>.</p><p>Common slip: writing <span class="chem">f(-x - 3)</span> gives <span class="chem">2f(-3) = 2(9 + 12) = 42</span>, which is the translation applied before the reflection.</p>'
    },
    {
      id: 't2-3-q047',
      topic: 't2-3',
      type: 'numeric',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 2.12',
      marks: 4,
      stem: '<p>The equation <span class="chem">2x^3 - 7x^2 + kx + 6 = 0</span> has roots <span class="chem">alpha</span>, <span class="chem">beta</span> and <span class="chem">gamma</span>. Given that <span class="chem">1/alpha + 1/beta + 1/gamma = 2</span>, find the value of <span class="chem">k</span>.</p>',
      answer: -12,
      tolerance: 0,
      hints: [
        'Write the sum of reciprocals over a common denominator: <span class="chem">(beta gamma + alpha gamma + alpha beta)/(alpha beta gamma)</span>.',
        'For a cubic <span class="chem">ax^3 + bx^2 + cx + d</span>: <span class="chem">alpha beta + beta gamma + gamma alpha = c/a</span> and <span class="chem">alpha beta gamma = -d/a</span>.'
      ],
      solution: '<p><span class="chem">alpha beta + beta gamma + gamma alpha = k/2</span> and <span class="chem">alpha beta gamma = -6/2 = -3</span>. Then <span class="chem">1/alpha + 1/beta + 1/gamma = (k/2)/(-3) = -k/6 = 2</span>, so <span class="chem">k = -12</span>.</p>'
    },
    {
      id: 't2-3-q048',
      topic: 't2-3',
      type: 'short',
      tier: 'challenge',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 2.12',
      marks: 6,
      stem: '<p>The three roots of <span class="chem">x^3 - 12x^2 + kx - 28 = 0</span> form an arithmetic sequence.</p><p>(a) By writing the roots as <span class="chem">m - d</span>, <span class="chem">m</span> and <span class="chem">m + d</span>, show that <span class="chem">m = 4</span>. <strong>[2 marks]</strong></p><p>(b) Hence find the three roots and the value of <span class="chem">k</span>. <strong>[4 marks]</strong></p>',
      answer: '<p>(a) Sum of roots <span class="chem">3m = 12</span>, so <span class="chem">m = 4</span>. (b) Roots <span class="chem">1, 4, 7</span>; <span class="chem">k = 39</span>.</p>',
      markscheme: [
        'M1: (a) sum of roots <span class="chem">(m - d) + m + (m + d) = 12</span>.',
        'A1: (a) <span class="chem">3m = 12</span> (so <span class="chem">m = 4</span>, AG).',
        'M1: (b) product of roots <span class="chem">(4 - d)(4)(4 + d) = 28</span>.',
        'A1: (b) <span class="chem">16 - d^2 = 7</span>, so <span class="chem">d = +-3</span> and the roots are <span class="chem">1, 4, 7</span>.',
        'M1: (b) <span class="chem">k</span> = sum of products in pairs: <span class="chem">1(4) + 4(7) + 1(7)</span>.',
        'A1: (b) <span class="chem">k = 39</span>.'
      ],
      hints: [
        'Decode: "roots form an arithmetic sequence" is information about the roots, so use the sum and product of roots, not the Factor Theorem.',
        'The sum of the roots is <span class="chem">-(-12)/1 = 12</span>, and with <span class="chem">m - d, m, m + d</span> the <span class="chem">d</span> terms cancel.',
        'The product of the roots is <span class="chem">-(-28)/1 = 28</span>. Then <span class="chem">k</span> is the sum of the roots multiplied in pairs.'
      ],
      solution: '<p><strong>Decode.</strong> Information about the pattern of the roots means using the formula-booklet sum and product of roots.</p><p>(a) Sum: <span class="chem">3m = 12</span>, so <span class="chem">m = 4</span>.</p><p>(b) Product: <span class="chem">4(16 - d^2) = 28</span>, so <span class="chem">d^2 = 9</span> and the roots are <span class="chem">1, 4, 7</span> (either sign of <span class="chem">d</span> gives the same set). Then <span class="chem">k = 1(4) + 4(7) + 7(1) = 39</span>. Check: <span class="chem">(x - 1)(x - 4)(x - 7) = x^3 - 12x^2 + 39x - 28</span>.</p>'
    },
    {
      id: 't2-3-q049',
      topic: 't2-3',
      type: 'short',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 2.12, 2.15',
      marks: 6,
      stem: '<p>Let <span class="chem">f(x) = -(x + 2)(x - 1)^2</span>.</p><p>(a) Sketch the graph of <span class="chem">y = f(x)</span>, showing the coordinates of all points where the graph meets the axes. <strong>[4 marks]</strong></p><p>(b) Hence solve <span class="chem">f(x) &gt;= 0</span>. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) Cubic with negative leading coefficient (rises to the left, falls to the right); crosses the <span class="chem">x</span>-axis at <span class="chem">(-2, 0)</span>, touches it at <span class="chem">(1, 0)</span> (a local maximum), and meets the <span class="chem">y</span>-axis at <span class="chem">(0, -2)</span>. (b) <span class="chem">x &lt;= -2</span> or <span class="chem">x = 1</span>.</p>',
      markscheme: [
        'A1: (a) correct end behaviour: <span class="chem">y -&gt; +∞</span> as <span class="chem">x -&gt; -∞</span> and <span class="chem">y -&gt; -∞</span> as <span class="chem">x -&gt; +∞</span>.',
        'A1: (a) crosses the axis at <span class="chem">(-2, 0)</span>.',
        'A1: (a) touches the axis at <span class="chem">(1, 0)</span> (repeated root, turning point).',
        'A1: (a) <span class="chem">y</span>-intercept <span class="chem">(0, -2)</span>.',
        'A1: (b) <span class="chem">x &lt;= -2</span>.',
        'A1: (b) or <span class="chem">x = 1</span>.'
      ],
      hints: [
        'Expand only the leading term: <span class="chem">-(x)(x^2) = -x^3</span>, so the graph starts high on the left and ends low on the right.',
        'A single factor <span class="chem">(x + 2)</span> means the graph crosses; the squared factor <span class="chem">(x - 1)^2</span> means it touches and turns.',
        'For (b), do not forget the isolated point where <span class="chem">f(x) = 0</span> without the graph going above the axis.'
      ],
      solution: '<p>(a) Leading term <span class="chem">-x^3</span>. Roots: <span class="chem">x = -2</span> (crosses), <span class="chem">x = 1</span> (double root, touches). <span class="chem">f(0) = -(2)(1) = -2</span>. Coming from the top left, the curve crosses at <span class="chem">-2</span>, dips to a minimum below the axis, rises to touch the axis at <span class="chem">(1, 0)</span>, then falls.</p><p>(b) The graph is on or above the axis for <span class="chem">x &lt;= -2</span>, and it touches the axis at <span class="chem">x = 1</span>. So <span class="chem">x &lt;= -2</span> or <span class="chem">x = 1</span>.</p>'
    },
    {
      id: 't2-3-q050',
      topic: 't2-3',
      type: 'short',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 2.13',
      marks: 6,
      stem: '<p>Let <span class="chem">f(x) = (x + 1)/(x^2 - x - 6)</span>.</p><p>(a) Write down the equations of the vertical asymptotes and the horizontal asymptote of the graph of <span class="chem">f</span>. <strong>[3 marks]</strong></p><p>(b) Sketch the graph of <span class="chem">y = f(x)</span>, showing its asymptotes and the coordinates of its axis intercepts. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">x = 3</span>, <span class="chem">x = -2</span>; <span class="chem">y = 0</span>. (b) Intercepts <span class="chem">(-1, 0)</span> and <span class="chem">(0, -1/6)</span>. Three branches: for <span class="chem">x &lt; -2</span> the curve is below the axis (<span class="chem">-&gt; 0^-</span> on the left, <span class="chem">-&gt; -∞</span> at <span class="chem">x = -2</span>); between the asymptotes it comes down from <span class="chem">+∞</span>, crosses at <span class="chem">(-1, 0)</span> and <span class="chem">(0, -1/6)</span> and goes to <span class="chem">-∞</span> at <span class="chem">x = 3</span>; for <span class="chem">x &gt; 3</span> it comes down from <span class="chem">+∞</span> towards <span class="chem">0^+</span>.</p>',
      markscheme: [
        'A1: (a) <span class="chem">x = 3</span> and <span class="chem">x = -2</span> (from <span class="chem">x^2 - x - 6 = (x - 3)(x + 2)</span>).',
        'A1: (a) neither vertical asymptote cancels with the numerator (no hole).',
        'A1: (a) <span class="chem">y = 0</span>, since the degree of the numerator is less than the degree of the denominator.',
        'A1: (b) intercepts <span class="chem">(-1, 0)</span> and <span class="chem">(0, -1/6)</span>.',
        'A1: (b) outer branches correct: below the axis for <span class="chem">x &lt; -2</span>, above for <span class="chem">x &gt; 3</span>, both approaching <span class="chem">y = 0</span>.',
        'A1: (b) middle branch from <span class="chem">+∞</span> near <span class="chem">x = -2</span> to <span class="chem">-∞</span> near <span class="chem">x = 3</span>, through both intercepts.'
      ],
      hints: [
        'Factorise the denominator: <span class="chem">(x - 3)(x + 2)</span>. Check the numerator does not cancel a factor.',
        'Make a sign table of <span class="chem">(x + 1)/((x - 3)(x + 2))</span> on the four intervals cut by <span class="chem">-2, -1, 3</span>.'
      ],
      solution: '<p>(a) <span class="chem">x^2 - x - 6 = (x - 3)(x + 2)</span>, so the vertical asymptotes are <span class="chem">x = 3</span> and <span class="chem">x = -2</span>. The numerator has lower degree, so <span class="chem">y = 0</span> is the horizontal asymptote.</p><p>(b) <span class="chem">f(-1) = 0</span>, <span class="chem">f(0) = 1/(-6) = -1/6</span>. Sign: negative for <span class="chem">x &lt; -2</span>, positive on <span class="chem">(-2, -1)</span>, negative on <span class="chem">(-1, 3)</span>, positive for <span class="chem">x &gt; 3</span>. This fixes the direction of each branch near the asymptotes.</p>'
    },
    {
      id: 't2-3-q051',
      topic: 't2-3',
      type: 'short',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 2.14',
      marks: 7,
      stem: '<p>Let <span class="chem">f(x) = (3x + 5)/(2x - 3)</span>, <span class="chem">x != 3/2</span>.</p><p>(a) Show that <span class="chem">f(f(x)) = x</span>. <strong>[3 marks]</strong></p><p>(b) Hence write down <span class="chem">f^{-1}(x)</span>. <strong>[1 mark]</strong></p><p>(c) Find the exact <span class="chem">x</span>-coordinates of the points where the graph of <span class="chem">y = f(x)</span> meets the line <span class="chem">y = x</span>. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">f(f(x)) = (19x/(2x - 3))/(19/(2x - 3)) = x</span>. (b) <span class="chem">f^{-1}(x) = (3x + 5)/(2x - 3)</span>, <span class="chem">x != 3/2</span> (f is self-inverse). (c) <span class="chem">x = (3 +- sqrt(19))/2</span>.</p>',
      markscheme: [
        'M1: (a) substitutes: <span class="chem">f(f(x)) = (3((3x + 5)/(2x - 3)) + 5)/(2((3x + 5)/(2x - 3)) - 3)</span>.',
        'A1: (a) numerator simplifies to <span class="chem">19x/(2x - 3)</span>.',
        'A1: (a) denominator simplifies to <span class="chem">19/(2x - 3)</span> (dividing gives <span class="chem">f(f(x)) = x</span>, AG).',
        'A1: (b) <span class="chem">f^{-1}(x) = (3x + 5)/(2x - 3)</span>, i.e. <span class="chem">f^{-1} = f</span>.',
        'M1: (c) sets <span class="chem">(3x + 5)/(2x - 3) = x</span>, giving <span class="chem">2x^2 - 6x - 5 = 0</span>.',
        'M1: (c) uses the quadratic formula: <span class="chem">x = (6 +- sqrt(76))/4</span>.',
        'A1: (c) <span class="chem">x = (3 +- sqrt(19))/2</span>.'
      ],
      hints: [
        'Replace every <span class="chem">x</span> in <span class="chem">f</span> by the whole fraction, then multiply top and bottom by <span class="chem">(2x - 3)</span>.',
        'If <span class="chem">f(f(x)) = x</span>, then applying <span class="chem">f</span> undoes <span class="chem">f</span>: the function is its own inverse.',
        'For (c), cross-multiply <span class="chem">3x + 5 = x(2x - 3)</span>.'
      ],
      solution: '<p>(a) Top: <span class="chem">3(3x + 5)/(2x - 3) + 5 = (9x + 15 + 10x - 15)/(2x - 3) = 19x/(2x - 3)</span>. Bottom: <span class="chem">2(3x + 5)/(2x - 3) - 3 = (6x + 10 - 6x + 9)/(2x - 3) = 19/(2x - 3)</span>. So <span class="chem">f(f(x)) = x</span>.</p><p>(b) <span class="chem">f</span> is self-inverse: <span class="chem">f^{-1}(x) = (3x + 5)/(2x - 3)</span>, <span class="chem">x != 3/2</span>. Its graph is symmetric in <span class="chem">y = x</span>.</p><p>(c) <span class="chem">3x + 5 = 2x^2 - 3x => 2x^2 - 6x - 5 = 0 => x = (6 +- sqrt(36 + 40))/4 = (3 +- sqrt(19))/2</span>.</p>'
    },
    {
      id: 't2-3-q052',
      topic: 't2-3',
      type: 'numeric',
      tier: 'challenge',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 2.12, 2.14',
      marks: 5,
      stem: '<p>A polynomial function <span class="chem">p</span> of degree <span class="chem">3</span> is an odd function. Given that <span class="chem">p(1) = -2</span> and <span class="chem">p(2) = 4</span>, find <span class="chem">p(3)</span>.</p>',
      answer: 26,
      tolerance: 0,
      hints: [
        'Decode: "odd" tells you the form of the polynomial. For <span class="chem">p(-x) = -p(x)</span> to hold, every even power, including the constant term, must have coefficient <span class="chem">0</span>.',
        'So <span class="chem">p(x) = ax^3 + bx</span>. Use the two given values to make two equations.',
        '<span class="chem">a + b = -2</span> and <span class="chem">8a + 2b = 4</span>.'
      ],
      solution: '<p><strong>Decode.</strong> An odd polynomial contains only odd powers, so <span class="chem">p(x) = ax^3 + bx</span>.</p><p><span class="chem">p(1) = a + b = -2</span> and <span class="chem">p(2) = 8a + 2b = 4</span>. Subtracting twice the first equation from the second: <span class="chem">6a = 8</span>, so <span class="chem">a = 4/3</span> and <span class="chem">b = -10/3</span>. Then <span class="chem">p(3) = (4/3)(27) - (10/3)(3) = 36 - 10 = 26</span>.</p>'
    },
    {
      id: 't2-3-q053',
      topic: 't2-3',
      type: 'short',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 2.15',
      marks: 5,
      stem: '<p>Solve the inequality <span class="chem">6/(x - 1) &gt;= x - 2</span>.</p>',
      answer: '<p><span class="chem">x &lt;= -1</span> or <span class="chem">1 &lt; x &lt;= 4</span></p>',
      markscheme: [
        'M1: moves everything to one side and combines: <span class="chem">(6 - (x - 2)(x - 1))/(x - 1) &gt;= 0</span>.',
        'A1: <span class="chem">-(x - 4)(x + 1)/(x - 1) &gt;= 0</span> (or <span class="chem">(x - 4)(x + 1)/(x - 1) &lt;= 0</span>).',
        'M1: sign diagram with critical values <span class="chem">-1, 1, 4</span>.',
        'A1: <span class="chem">x &lt;= -1</span>.',
        'A1: <span class="chem">1 &lt; x &lt;= 4</span> (with <span class="chem">x = 1</span> excluded).'
      ],
      hints: [
        'Do not multiply both sides by <span class="chem">(x - 1)</span>: its sign is unknown. Subtract <span class="chem">x - 2</span> and use a common denominator.',
        'The numerator <span class="chem">6 - (x^2 - 3x + 2) = -x^2 + 3x + 4 = -(x - 4)(x + 1)</span>.'
      ],
      solution: '<p><span class="chem">6/(x - 1) - (x - 2) = (6 - x^2 + 3x - 2)/(x - 1) = -(x - 4)(x + 1)/(x - 1)</span>. We need <span class="chem">(x - 4)(x + 1)/(x - 1) &lt;= 0</span>. Sign diagram: negative for <span class="chem">x &lt; -1</span>, positive on <span class="chem">(-1, 1)</span>, negative on <span class="chem">(1, 4)</span>, positive for <span class="chem">x &gt; 4</span>. Including the zeros <span class="chem">-1</span> and <span class="chem">4</span> but not <span class="chem">1</span>: <span class="chem">x &lt;= -1</span> or <span class="chem">1 &lt; x &lt;= 4</span>.</p>'
    },
    {
      id: 't2-3-q054',
      topic: 't2-3',
      type: 'numeric',
      tier: 'challenge',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 2.16',
      marks: 5,
      stem: '<p>Solve the equation <span class="chem">|x^2 - 6| = x</span>, and give the smallest solution.</p>',
      answer: 2,
      tolerance: 0,
      hints: [
        'Decode: the left side is never negative, so any solution must satisfy <span class="chem">x &gt;= 0</span>. This hidden condition removes some of the algebraic roots.',
        'Split into <span class="chem">x^2 - 6 = x</span> and <span class="chem">x^2 - 6 = -x</span>, and solve each quadratic.',
        'You should get <span class="chem">x = 3, -2</span> and <span class="chem">x = 2, -3</span>. Check each one in the original equation.'
      ],
      solution: '<p><strong>Decode.</strong> <span class="chem">|x^2 - 6| &gt;= 0</span>, so <span class="chem">x &gt;= 0</span>.</p><p><span class="chem">x^2 - x - 6 = 0 => (x - 3)(x + 2) = 0 => x = 3</span> or <span class="chem">x = -2</span>. <span class="chem">x^2 + x - 6 = 0 => (x + 3)(x - 2) = 0 => x = -3</span> or <span class="chem">x = 2</span>. Rejecting the negative values: <span class="chem">x = 2</span> (<span class="chem">|4 - 6| = 2</span>) and <span class="chem">x = 3</span> (<span class="chem">|9 - 6| = 3</span>). The smallest solution is <span class="chem">2</span>; the tempting <span class="chem">-3</span> fails because <span class="chem">|9 - 6| = 3 != -3</span>.</p>'
    },
    {
      id: 't2-3-q055',
      topic: 't2-3',
      type: 'short',
      tier: 'challenge',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 2.16',
      marks: 8,
      stem: '<p>Let <span class="chem">f(x) = x^2 - 2x - 3</span>.</p><p>(a) Sketch the graph of <span class="chem">y = |f(x)|</span>, showing the coordinates of the axis intercepts and of any local maximum. <strong>[2 marks]</strong></p><p>(b) Find the value of <span class="chem">k</span> for which the equation <span class="chem">|f(x)| = k</span> has exactly three solutions. <strong>[2 marks]</strong></p><p>(c) Sketch the graph of <span class="chem">y = f(|x|)</span>, showing the coordinates of the axis intercepts and of the minimum points. <strong>[2 marks]</strong></p><p>(d) Find the value of <span class="chem">k</span> for which the equation <span class="chem">f(|x|) = k</span> has exactly three solutions. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) W-shape: <span class="chem">x</span>-intercepts <span class="chem">(-1, 0)</span>, <span class="chem">(3, 0)</span> (sharp points), <span class="chem">y</span>-intercept <span class="chem">(0, 3)</span>, local maximum <span class="chem">(1, 4)</span>. (b) <span class="chem">k = 4</span>. (c) Symmetric about the <span class="chem">y</span>-axis: minima <span class="chem">(+-1, -4)</span>, <span class="chem">x</span>-intercepts <span class="chem">(+-3, 0)</span>, <span class="chem">y</span>-intercept <span class="chem">(0, -3)</span> (a local maximum with a sharp point). (d) <span class="chem">k = -3</span>.</p>',
      markscheme: [
        'A1: (a) part of the parabola below the axis, between <span class="chem">x = -1</span> and <span class="chem">x = 3</span>, reflected upwards, with sharp points at <span class="chem">(-1, 0)</span> and <span class="chem">(3, 0)</span>.',
        'A1: (a) local maximum <span class="chem">(1, 4)</span> and <span class="chem">y</span>-intercept <span class="chem">(0, 3)</span>.',
        'R1: (b) three intersections only when the line passes through the local maximum.',
        'A1: (b) <span class="chem">k = 4</span>.',
        'A1: (c) right half is <span class="chem">y = f(x)</span> for <span class="chem">x &gt;= 0</span>, reflected in the <span class="chem">y</span>-axis.',
        'A1: (c) minima <span class="chem">(+-1, -4)</span>, intercepts <span class="chem">(+-3, 0)</span> and <span class="chem">(0, -3)</span>.',
        'R1: (d) three solutions only when the line passes through the point on the <span class="chem">y</span>-axis, <span class="chem">(0, -3)</span>.',
        'A1: (d) <span class="chem">k = -3</span>.'
      ],
      hints: [
        'Decode: "exactly three solutions" means a horizontal line <span class="chem">y = k</span> meets the graph three times. Sketch first, then slide a horizontal line up and down.',
        '<span class="chem">f(x) = (x - 3)(x + 1) = (x - 1)^2 - 4</span>: vertex <span class="chem">(1, -4)</span>. <span class="chem">|f|</span> reflects the part below the axis; <span class="chem">f(|x|)</span> keeps the part with <span class="chem">x &gt;= 0</span> and mirrors it.',
        'For <span class="chem">y = f(|x|)</span>, an odd number of solutions needs <span class="chem">x = 0</span> to be one of them (the others come in pairs <span class="chem">+-x</span>).'
      ],
      solution: '<p><strong>Decode.</strong> Counting solutions means counting where a horizontal line meets each graph.</p><p>(a) <span class="chem">f(x) = (x - 3)(x + 1)</span> has vertex <span class="chem">(1, -4)</span>. In <span class="chem">|f|</span> the vertex becomes a local maximum <span class="chem">(1, 4)</span>; <span class="chem">|f(0)| = 3</span>.</p><p>(b) For <span class="chem">0 &lt; k &lt; 4</span> there are four solutions, for <span class="chem">k &gt; 4</span> two. At <span class="chem">k = 4</span> the line touches the maximum: three solutions (<span class="chem">x = 1, 1 +- 2sqrt(2)</span>).</p><p>(c) For <span class="chem">x &gt;= 0</span>, <span class="chem">f(|x|) = f(x)</span>, with minimum <span class="chem">(1, -4)</span> and intercepts <span class="chem">(0, -3)</span>, <span class="chem">(3, 0)</span>; reflect in the <span class="chem">y</span>-axis.</p><p>(d) Solutions come in pairs <span class="chem">+-x</span> unless <span class="chem">x = 0</span> is a solution, so <span class="chem">k = f(0) = -3</span>. Check: <span class="chem">x^2 - 2|x| - 3 = -3</span> gives <span class="chem">|x|(|x| - 2) = 0</span>, so <span class="chem">x = 0, +-2</span>: three solutions.</p>'
    },
    {
      id: 't2-3-q056',
      topic: 't2-3',
      type: 'numeric',
      tier: 'foundation',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 2.16',
      marks: 2,
      stem: '<p>The graph of <span class="chem">y = f(x)</span> has a local maximum at <span class="chem">(2, 8)</span>. Find the <span class="chem">x</span>-coordinate of the local maximum of the graph of <span class="chem">y = f(2x + 4)</span>.</p>',
      answer: -1,
      tolerance: 0,
      hints: [
        'The new graph reaches the same height <span class="chem">8</span> when the input to <span class="chem">f</span> is <span class="chem">2</span>.',
        'Solve <span class="chem">2x + 4 = 2</span>.'
      ],
      solution: '<p>The maximum of <span class="chem">f</span> occurs when its input is <span class="chem">2</span>, so <span class="chem">2x + 4 = 2 => x = -1</span>. The local maximum of <span class="chem">y = f(2x + 4)</span> is at <span class="chem">(-1, 8)</span>. (Equivalently: translate <span class="chem">4</span> left, then stretch horizontally by <span class="chem">1/2</span>: <span class="chem">(2 - 4)/2 = -1</span>.)</p>'
    },
    {
      id: 't2-3-q057',
      topic: 't2-3',
      type: 'numeric',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 2.13',
      marks: 4,
      stem: '<p>The graph of <span class="chem">f(x) = (ax^2 + bx + 3)/(x - 1)</span>, <span class="chem">x != 1</span>, has oblique asymptote <span class="chem">y = 2x + 5</span>. Find the value of <span class="chem">b</span>.</p>',
      answer: 3,
      tolerance: 0,
      hints: [
        'Divide <span class="chem">ax^2 + bx + 3</span> by <span class="chem">(x - 1)</span>: the quotient is the oblique asymptote.',
        'The quotient is <span class="chem">ax + (a + b)</span>. Compare it with <span class="chem">2x + 5</span>.'
      ],
      solution: '<p><span class="chem">ax^2 + bx + 3 = (x - 1)(ax + a + b) + (a + b + 3)</span>, so the oblique asymptote is <span class="chem">y = ax + (a + b)</span>. Matching with <span class="chem">y = 2x + 5</span>: <span class="chem">a = 2</span> and <span class="chem">a + b = 5</span>, so <span class="chem">b = 3</span>.</p>'
    },
    {
      id: 't2-3-q058',
      topic: 't2-3',
      type: 'short',
      tier: 'challenge',
      level: 'ahl',
      paper: 'Paper 3 (HL Investigation)',
      syllabus: 'AHL 2.12',
      marks: 16,
      stem: '<p>This investigation looks at sums of powers of the roots of a cubic without finding the roots.</p><p>The equation <span class="chem">x^3 - 4x + 1 = 0</span> has roots <span class="chem">alpha</span>, <span class="chem">beta</span>, <span class="chem">gamma</span>. Let <span class="chem">S_n = alpha^n + beta^n + gamma^n</span>.</p><p>(a) Write down the value of <span class="chem">S_1</span>. <strong>[1 mark]</strong></p><p>(b) Write down the value of <span class="chem">alpha beta + beta gamma + gamma alpha</span>, and hence show that <span class="chem">S_2 = 8</span>. <strong>[3 marks]</strong></p><p>(c) Show that <span class="chem">alpha^{n+3} = 4alpha^{n+1} - alpha^n</span>, and deduce that <span class="chem">S_{n+3} = 4S_{n+1} - S_n</span> for <span class="chem">n &gt;= 0</span>. <strong>[3 marks]</strong></p><p>(d) Find <span class="chem">S_3</span>, <span class="chem">S_4</span> and <span class="chem">S_5</span>. <strong>[3 marks]</strong></p><p>(e) Use your GDC to find the three roots, and verify your value of <span class="chem">S_4</span>. <strong>[2 marks]</strong></p><p>(f) Explain why <span class="chem">S_n</span> is an integer for every positive integer <span class="chem">n</span>. <strong>[2 marks]</strong></p><p>(g) Find the value of <span class="chem">1/alpha + 1/beta + 1/gamma</span>. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">S_1 = 0</span>. (b) <span class="chem">-4</span>; <span class="chem">S_2 = 0^2 - 2(-4) = 8</span>. (c) <span class="chem">alpha^3 = 4alpha - 1</span>; multiply by <span class="chem">alpha^n</span> and add the three versions. (d) <span class="chem">S_3 = -3</span>, <span class="chem">S_4 = 32</span>, <span class="chem">S_5 = -20</span>. (e) Roots <span class="chem">-2.11, 0.254, 1.86</span>; the sum of fourth powers is <span class="chem">32</span>. (f) <span class="chem">S_0 = 3</span>, <span class="chem">S_1 = 0</span>, <span class="chem">S_2 = 8</span> are integers and the recurrence uses only integer coefficients, so every later term is an integer (by induction). (g) <span class="chem">4</span>.</p>',
      markscheme: [
        'A1: (a) <span class="chem">S_1 = -0/1 = 0</span>.',
        'A1: (b) <span class="chem">alpha beta + beta gamma + gamma alpha = -4</span>.',
        'M1: (b) uses <span class="chem">S_2 = (alpha + beta + gamma)^2 - 2(alpha beta + beta gamma + gamma alpha)</span>.',
        'A1: (b) correct substitution <span class="chem">S_2 = 0^2 - 2(-4)</span> (<span class="chem">= 8</span>, AG).',
        'M1: (c) <span class="chem">alpha</span> is a root, so <span class="chem">alpha^3 = 4alpha - 1</span>.',
        'A1: (c) multiplies by <span class="chem">alpha^n</span>: <span class="chem">alpha^{n+3} = 4alpha^{n+1} - alpha^n</span>.',
        'R1: (c) the same holds for <span class="chem">beta</span> and <span class="chem">gamma</span>; adding gives <span class="chem">S_{n+3} = 4S_{n+1} - S_n</span> (AG).',
        'A1: (d) <span class="chem">S_3 = 4S_1 - S_0 = 0 - 3 = -3</span> (using <span class="chem">S_0 = 3</span>).',
        'A1: (d) <span class="chem">S_4 = 4S_2 - S_1 = 32</span>.',
        'A1: (d) <span class="chem">S_5 = 4S_3 - S_2 = -12 - 8 = -20</span>.',
        'A1: (e) roots <span class="chem">-2.11, 0.254, 1.86</span>.',
        'A1: (e) sum of fourth powers of the stored roots <span class="chem">= 32</span>.',
        'R1: (f) <span class="chem">S_0, S_1, S_2</span> are integers.',
        'R1: (f) each later term is an integer combination of earlier terms, so all are integers (induction).',
        'M1: (g) <span class="chem">(alpha beta + beta gamma + gamma alpha)/(alpha beta gamma)</span> with <span class="chem">alpha beta gamma = -1</span>.',
        'A1: (g) <span class="chem">(-4)/(-1) = 4</span>.'
      ],
      hints: [
        'Decode: the theme is "use the coefficients, not the roots". Part (a) and (b) are the formula-booklet sum and product of roots; (c) uses the fact that each root satisfies the equation.',
        'For <span class="chem">x^3 + 0x^2 - 4x + 1</span>: sum <span class="chem">= 0</span>, pair sum <span class="chem">= -4</span>, product <span class="chem">= -1</span>.',
        'For (d), you need a starting value <span class="chem">S_0 = alpha^0 + beta^0 + gamma^0 = 3</span>.',
        'For (g), put the three fractions over the common denominator <span class="chem">alpha beta gamma</span>.'
      ],
      solution: '<p><strong>Decode.</strong> Every part replaces "find the roots" by "use the coefficients"; the GDC is only a check.</p><p>(a) <span class="chem">S_1 = alpha + beta + gamma = 0</span>. (b) Pair sum <span class="chem">= -4</span>; <span class="chem">S_2 = 0^2 - 2(-4) = 8</span>.</p><p>(c) <span class="chem">alpha^3 - 4alpha + 1 = 0 => alpha^3 = 4alpha - 1 => alpha^{n+3} = 4alpha^{n+1} - alpha^n</span>. Writing the same for <span class="chem">beta</span>, <span class="chem">gamma</span> and adding gives the recurrence.</p><p>(d) With <span class="chem">S_0 = 3</span>: <span class="chem">S_3 = 4(0) - 3 = -3</span>, <span class="chem">S_4 = 4(8) - 0 = 32</span>, <span class="chem">S_5 = 4(-3) - 8 = -20</span>. (Next: <span class="chem">S_6 = 4(32) + 3 = 131</span>.)</p><p>(e) Roots <span class="chem">-2.1149, 0.25410, 1.8608</span>; <span class="chem">(-2.1149)^4 + 0.25410^4 + 1.8608^4 ≈ 20.007 + 0.004 + 11.989 = 32.0</span>.</p><p>(f) The first three values are integers and the recurrence has integer coefficients, so by induction every <span class="chem">S_n</span> is an integer, even though the roots are irrational.</p><p>(g) <span class="chem">alpha beta gamma = -1</span>, so <span class="chem">1/alpha + 1/beta + 1/gamma = (-4)/(-1) = 4</span>.</p>'
    },
    {
      id: 't2-3-q059',
      topic: 't2-3',
      type: 'short',
      tier: 'challenge',
      level: 'ahl',
      paper: 'Paper 3 (HL Investigation)',
      syllabus: 'AHL 2.16',
      marks: 16,
      stem: '<p>This investigation looks at the reciprocal graphs of the family <span class="chem">f_c(x) = x^2 - 2x + c</span>, where <span class="chem">c</span> is a real constant.</p><p>(a) For <span class="chem">c = -3</span>, <span class="chem">c = 1</span> and <span class="chem">c = 5</span>, write down the number of vertical asymptotes of the graph of <span class="chem">y = 1/f_c(x)</span>. <strong>[3 marks]</strong></p><p>(b) Write <span class="chem">f_c(x)</span> in the form <span class="chem">(x - 1)^2 + q</span>, and hence state the condition on <span class="chem">c</span> for <span class="chem">y = 1/f_c(x)</span> to have exactly two vertical asymptotes. <strong>[2 marks]</strong></p><p>(c) For <span class="chem">c &gt; 1</span>, show that the graph of <span class="chem">y = 1/f_c(x)</span> has a maximum point at <span class="chem">(1, 1/(c - 1))</span>. <strong>[2 marks]</strong></p><p>The graphs of <span class="chem">y = f_c(x)</span> and <span class="chem">y = 1/f_c(x)</span> meet at <em>invariant points</em>, where <span class="chem">f_c(x) = 1</span> or <span class="chem">f_c(x) = -1</span>.</p><p>(d) Find the number of invariant points when <span class="chem">c = -3</span> and when <span class="chem">c = 1.5</span>. <strong>[3 marks]</strong></p><p>(e) Determine the number of invariant points for every value of <span class="chem">c</span>. <strong>[4 marks]</strong></p><p>(f) Find the value of <span class="chem">c</span> for which the maximum point in (c) is itself an invariant point, and check that this agrees with (e). <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">2</span>, <span class="chem">1</span>, <span class="chem">0</span>. (b) <span class="chem">(x - 1)^2 + c - 1</span>; two asymptotes when <span class="chem">c &lt; 1</span>. (c) For <span class="chem">c &gt; 1</span>, <span class="chem">f_c</span> has positive minimum <span class="chem">c - 1</span> at <span class="chem">x = 1</span>, so <span class="chem">1/f_c</span> has maximum <span class="chem">1/(c - 1)</span> there. (d) <span class="chem">c = -3</span>: <span class="chem">4</span>; <span class="chem">c = 1.5</span>: <span class="chem">2</span>. (e) <span class="chem">c &lt; 0</span>: 4; <span class="chem">c = 0</span>: 3; <span class="chem">0 &lt; c &lt; 2</span>: 2; <span class="chem">c = 2</span>: 1; <span class="chem">c &gt; 2</span>: 0. (f) <span class="chem">c = 2</span>, which gives exactly one invariant point <span class="chem">(1, 1)</span>.</p>',
      markscheme: [
        'A1: (a) <span class="chem">c = -3</span>: <span class="chem">f = (x - 3)(x + 1)</span>, two asymptotes.',
        'A1: (a) <span class="chem">c = 1</span>: <span class="chem">f = (x - 1)^2</span>, one asymptote.',
        'A1: (a) <span class="chem">c = 5</span>: <span class="chem">f &gt; 0</span> for all <span class="chem">x</span>, no asymptotes.',
        'A1: (b) <span class="chem">f_c(x) = (x - 1)^2 + c - 1</span>.',
        'A1: (b) two asymptotes when <span class="chem">c - 1 &lt; 0</span>, i.e. <span class="chem">c &lt; 1</span>.',
        'M1: (c) <span class="chem">f_c</span> has minimum value <span class="chem">c - 1 &gt; 0</span> at <span class="chem">x = 1</span>.',
        'R1: (c) the reciprocal of a positive minimum is a maximum, giving <span class="chem">(1, 1/(c - 1))</span> (AG).',
        'M1: (d) solves <span class="chem">(x - 1)^2 = 2 - c</span> and <span class="chem">(x - 1)^2 = -c</span>.',
        'A1: (d) <span class="chem">c = -3</span>: <span class="chem">2 + 2 = 4</span> points.',
        'A1: (d) <span class="chem">c = 1.5</span>: <span class="chem">2 + 0 = 2</span> points.',
        'M1: (e) counts the roots of <span class="chem">(x - 1)^2 = 2 - c</span> (2, 1, 0 as <span class="chem">c &lt; 2</span>, <span class="chem">= 2</span>, <span class="chem">&gt; 2</span>) and of <span class="chem">(x - 1)^2 = -c</span> (2, 1, 0 as <span class="chem">c &lt; 0</span>, <span class="chem">= 0</span>, <span class="chem">&gt; 0</span>).',
        'A1: (e) <span class="chem">c &lt; 0</span>: 4 and <span class="chem">c = 0</span>: 3.',
        'A1: (e) <span class="chem">0 &lt; c &lt; 2</span>: 2.',
        'A1: (e) <span class="chem">c = 2</span>: 1 and <span class="chem">c &gt; 2</span>: 0.',
        'A1: (f) <span class="chem">1/(c - 1) = 1 => c = 2</span>.',
        'R1: (f) consistent with (e): at <span class="chem">c = 2</span> there is exactly one invariant point, <span class="chem">(1, 1)</span>.'
      ],
      hints: [
        'Decode: vertical asymptotes of <span class="chem">1/f</span> are the zeros of <span class="chem">f</span>; invariant points are where <span class="chem">f = +-1</span>. Each question is really "how many real roots does a quadratic have?"',
        'Completing the square, <span class="chem">f_c(x) = (x - 1)^2 + (c - 1)</span>, so <span class="chem">f_c = k</span> becomes <span class="chem">(x - 1)^2 = k - c + 1</span>.',
        '<span class="chem">(x - 1)^2 = r</span> has 2 roots if <span class="chem">r &gt; 0</span>, 1 if <span class="chem">r = 0</span> and none if <span class="chem">r &lt; 0</span>. Use <span class="chem">k = 1</span> and <span class="chem">k = -1</span> separately.',
        'Use your GDC to graph <span class="chem">f_c</span> and <span class="chem">1/f_c</span> for a few values of <span class="chem">c</span> to check your counts.'
      ],
      solution: '<p><strong>Decode.</strong> Every part reduces to counting the real roots of <span class="chem">(x - 1)^2 = r</span>.</p><p>(a) <span class="chem">c = -3</span>: zeros <span class="chem">3, -1</span> (2 asymptotes). <span class="chem">c = 1</span>: double zero at <span class="chem">1</span> (1 asymptote). <span class="chem">c = 5</span>: <span class="chem">(x - 1)^2 + 4 &gt; 0</span> (none).</p><p>(b) <span class="chem">f_c(x) = (x - 1)^2 + c - 1</span>; two zeros iff <span class="chem">c &lt; 1</span>.</p><p>(c) For <span class="chem">c &gt; 1</span>, <span class="chem">f_c &gt;= c - 1 &gt; 0</span> with equality at <span class="chem">x = 1</span>, so <span class="chem">1/f_c &lt;= 1/(c - 1)</span> with equality at <span class="chem">x = 1</span>.</p><p>(d), (e) <span class="chem">f_c = 1 &lt;=&gt; (x - 1)^2 = 2 - c</span>; <span class="chem">f_c = -1 &lt;=&gt; (x - 1)^2 = -c</span>. For <span class="chem">c = -3</span>: <span class="chem">5 &gt; 0</span> and <span class="chem">3 &gt; 0</span>, so 4 points. For <span class="chem">c = 1.5</span>: <span class="chem">0.5 &gt; 0</span> and <span class="chem">-1.5 &lt; 0</span>, so 2 points. In general: <span class="chem">c &lt; 0</span>: 4; <span class="chem">c = 0</span>: 2 + 1 = 3; <span class="chem">0 &lt; c &lt; 2</span>: 2; <span class="chem">c = 2</span>: 1; <span class="chem">c &gt; 2</span>: 0.</p><p>(f) <span class="chem">1/(c - 1) = 1 => c = 2</span>. Then <span class="chem">f_2(x) = (x - 1)^2 + 1</span> meets <span class="chem">y = 1</span> only at <span class="chem">(1, 1)</span>, matching the count of 1 in (e).</p>'
    },
    {
      id: 't2-3-q060',
      topic: 't2-3',
      type: 'short',
      tier: 'challenge',
      level: 'ahl',
      paper: 'Paper 3 (HL Investigation)',
      syllabus: 'AHL 2.13, 2.14',
      marks: 15,
      stem: '<p>This investigation shows that functions can be split into an even part and an odd part.</p><p>For a function <span class="chem">f</span> defined for all <span class="chem">x</span> in a domain that is symmetric about <span class="chem">0</span>, define <span class="chem">E(x) = (f(x) + f(-x))/2</span> and <span class="chem">O(x) = (f(x) - f(-x))/2</span>.</p><p>(a) For <span class="chem">f(x) = x^3 + 2x^2 - 5x + 4</span>, find <span class="chem">E(x)</span> and <span class="chem">O(x)</span>. <strong>[2 marks]</strong></p><p>(b) Show that, for any such <span class="chem">f</span>, <span class="chem">E</span> is even, <span class="chem">O</span> is odd and <span class="chem">f = E + O</span>. <strong>[3 marks]</strong></p><p>(c) Suppose that <span class="chem">f = E_1 + O_1 = E_2 + O_2</span>, where <span class="chem">E_1, E_2</span> are even and <span class="chem">O_1, O_2</span> are odd. Prove that <span class="chem">E_1 = E_2</span> and <span class="chem">O_1 = O_2</span>. <strong>[3 marks]</strong></p><p>(d) For <span class="chem">f(x) = e^x</span>, write down <span class="chem">O(x)</span>, and use your GDC to solve <span class="chem">O(x) = 2</span>. <strong>[3 marks]</strong></p><p>(e) For <span class="chem">f(x) = 1/(x - 2)</span>, explain why <span class="chem">E</span> and <span class="chem">O</span> can only be defined for <span class="chem">x != +-2</span>, and find <span class="chem">E(x)</span> and <span class="chem">O(x)</span> as single fractions. <strong>[4 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">E(x) = 2x^2 + 4</span>, <span class="chem">O(x) = x^3 - 5x</span>. (b) <span class="chem">E(-x) = (f(-x) + f(x))/2 = E(x)</span>; <span class="chem">O(-x) = (f(-x) - f(x))/2 = -O(x)</span>; <span class="chem">E + O = f</span>. (c) <span class="chem">E_1 - E_2 = O_2 - O_1 = g</span> is both even and odd, so <span class="chem">g(x) = g(-x) = -g(x)</span>, giving <span class="chem">g = 0</span>. (d) <span class="chem">O(x) = (e^x - e^{-x})/2</span>; <span class="chem">x ≈ 1.44</span>. (e) The domain must be symmetric: <span class="chem">f(-x)</span> needs <span class="chem">x != -2</span>. <span class="chem">E(x) = 2/(x^2 - 4)</span>, <span class="chem">O(x) = x/(x^2 - 4)</span>.</p>',
      markscheme: [
        'A1: (a) <span class="chem">E(x) = 2x^2 + 4</span>.',
        'A1: (a) <span class="chem">O(x) = x^3 - 5x</span>.',
        'A1: (b) <span class="chem">E(-x) = (f(-x) + f(x))/2 = E(x)</span>, so E is even.',
        'A1: (b) <span class="chem">O(-x) = (f(-x) - f(x))/2 = -O(x)</span>, so O is odd.',
        'A1: (b) <span class="chem">E(x) + O(x) = 2f(x)/2 = f(x)</span>.',
        'M1: (c) lets <span class="chem">g = E_1 - E_2 = O_2 - O_1</span>, which is both even and odd.',
        'M1: (c) <span class="chem">g(-x) = g(x)</span> and <span class="chem">g(-x) = -g(x)</span>, so <span class="chem">2g(x) = 0</span>.',
        'R1: (c) <span class="chem">g = 0</span>, so <span class="chem">E_1 = E_2</span> and <span class="chem">O_1 = O_2</span>.',
        'A1: (d) <span class="chem">O(x) = (e^x - e^{-x})/2</span>.',
        'M1: (d) solves <span class="chem">(e^x - e^{-x})/2 = 2</span> graphically.',
        'A1: (d) <span class="chem">x = 1.44</span>.',
        'R1: (e) <span class="chem">E(x)</span> and <span class="chem">O(x)</span> use <span class="chem">f(-x) = 1/(-x - 2)</span>, which is undefined at <span class="chem">x = -2</span>, so both <span class="chem">+-2</span> are excluded.',
        'M1: (e) <span class="chem">f(-x) = -1/(x + 2)</span> and combines over <span class="chem">x^2 - 4</span>.',
        'A1: (e) <span class="chem">E(x) = 2/(x^2 - 4)</span>.',
        'A1: (e) <span class="chem">O(x) = x/(x^2 - 4)</span>.'
      ],
      hints: [
        'Decode: this is the odd/even test <span class="chem">f(-x) = +-f(x)</span> used as a tool. In each part, replace <span class="chem">x</span> by <span class="chem">-x</span> and simplify.',
        'For a polynomial, <span class="chem">E</span> keeps the even powers (and the constant) and <span class="chem">O</span> keeps the odd powers.',
        'In (c), a function that is both even and odd satisfies <span class="chem">g(x) = -g(x)</span>.',
        'In (e), <span class="chem">1/(x - 2) - 1/(x + 2) = 4/(x^2 - 4)</span> and <span class="chem">1/(x - 2) + 1/(x + 2) = 2x/(x^2 - 4)</span>.'
      ],
      solution: '<p><strong>Decode.</strong> Everything follows from substituting <span class="chem">-x</span> and comparing with the definitions of even and odd.</p><p>(a) <span class="chem">f(-x) = -x^3 + 2x^2 + 5x + 4</span>, so <span class="chem">E = 2x^2 + 4</span>, <span class="chem">O = x^3 - 5x</span>.</p><p>(b) Swapping <span class="chem">x</span> and <span class="chem">-x</span> leaves <span class="chem">E</span> unchanged and changes the sign of <span class="chem">O</span>; adding gives <span class="chem">f</span>.</p><p>(c) <span class="chem">g = E_1 - E_2 = O_2 - O_1</span> is even (difference of even functions) and odd (difference of odd functions). So <span class="chem">g(x) = g(-x) = -g(x)</span>, hence <span class="chem">g(x) = 0</span> for all <span class="chem">x</span>: the split is unique.</p><p>(d) <span class="chem">O(x) = (e^x - e^{-x})/2</span>. The GDC gives <span class="chem">x ≈ 1.44</span> (exactly <span class="chem">ln(2 + sqrt(5))</span>).</p><p>(e) Because <span class="chem">E</span> and <span class="chem">O</span> use both <span class="chem">f(x)</span> and <span class="chem">f(-x)</span>, we need <span class="chem">x != 2</span> and <span class="chem">-x != 2</span>. With <span class="chem">f(-x) = -1/(x + 2)</span>: <span class="chem">E = (1/2)(4/(x^2 - 4)) = 2/(x^2 - 4)</span> (even) and <span class="chem">O = (1/2)(2x/(x^2 - 4)) = x/(x^2 - 4)</span> (odd).</p>'
    }
  ]);
})();
