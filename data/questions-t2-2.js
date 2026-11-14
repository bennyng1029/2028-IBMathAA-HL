/* ==========================================================================
   Analysis Lab — questions-t2-2.js
   Question bank for Topic 2.2: Quadratics, rational, exponential & log models (SL 2.6–2.10).
   18 original questions across foundation, exam, and challenge tiers.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.questions) return;

  S1.questions.register('t2-2', [
    {
      id: 't2-2-q001',
      type: 'mcq',
      tier: 'foundation',
      level: 'sl',
      paper: 'P1',
      syllabus: 'SL 2.6',
      marks: 2,
      stem: '<p>Express the quadratic function <span class="chem">f(x) = 3x^2 - 12x + 7</span> in vertex form <span class="chem">a(x - h)^2 + k</span>.</p>',
      options: [
        '<span class="chem">3(x - 2)^2 - 5</span>',
        '<span class="chem">3(x - 2)^2 + 3</span>',
        '<span class="chem">3(x - 6)^2 - 101</span>',
        '<span class="chem">3(x + 2)^2 - 5</span>'
      ],
      answer: 0,
      misconception: {
        1: 'When completing the square inside 3[(x − 2)² − 4] + 7, you forgot to multiply −4 by the factored 3, subtracting 4 instead of 12.',
        2: 'You halved −12 to −6 before factoring out 3. Always factor 3 out of 3x² − 12x = 3(x² − 4x) first!',
        3: 'Since the middle term is −12x, the bracket is (x − 2)², not (x + 2)².'
      },
      hints: [
        'Factor <span class="chem">3</span> out of the first two terms: <span class="chem">3(x^2 - 4x) + 7</span>.',
        'Replace <span class="chem">x^2 - 4x</span> with <span class="chem">(x - 2)^2 - 4</span> and distribute the <span class="chem">3</span>.'
      ],
      solution: '<p><span class="chem">f(x) = 3(x^2 - 4x) + 7 = 3[(x - 2)^2 - 4] + 7 = 3(x - 2)^2 - 12 + 7 = 3(x - 2)^2 - 5</span>. You can verify the vertex at <span class="chem">x = -(-12)/(2 × 3) = 2</span> and <span class="chem">f(2) = 3(4) - 24 + 7 = -5</span>.</p>'
    },
    {
      id: 't2-2-q002',
      type: 'numeric',
      tier: 'foundation',
      level: 'sl',
      paper: 'P1',
      syllabus: 'SL 2.6',
      marks: 2,
      stem: '<p>A parabola has <span class="chem">x</span>-intercepts at <span class="chem">(-3, 0)</span> and <span class="chem">(7, 0)</span>, and passes through the point <span class="chem">(0, -42)</span>. Find the <span class="chem">y</span>-coordinate of its vertex.</p>',
      answer: -50,
      tolerance: 0.001,
      hints: [
        'Write the quadratic in factored form <span class="chem">y = a(x + 3)(x - 7)</span> and plug in <span class="chem">(0, -42)</span> to find <span class="chem">a</span>.',
        'The axis of symmetry is halfway between the roots at <span class="chem">x = (-3 + 7)/2 = 2</span>. Evaluate <span class="chem">y(2)</span>.'
      ],
      solution: '<p>Using factored form <span class="chem">y = a(x + 3)(x - 7)</span>, substituting <span class="chem">(0, -42)</span> gives <span class="chem">-42 = a(3)(-7) = -21a => a = 2</span>. The axis of symmetry is <span class="chem">x = (-3 + 7)/2 = 2</span>, so the vertex <span class="chem">y</span>-coordinate is <span class="chem">y(2) = 2(2 + 3)(2 - 7) = 2(5)(-5) = -50</span>.</p>'
    },
    {
      id: 't2-2-q003',
      type: 'mcq',
      tier: 'foundation',
      level: 'sl',
      paper: 'P1',
      syllabus: 'SL 2.7',
      marks: 3,
      stem: '<p>Solve the quadratic inequality <span class="chem">2x^2 + 3x - 9 &gt;= 0</span>.</p>',
      options: [
        '<span class="chem">x &lt;= -3</span> or <span class="chem">x &gt;= 1.5</span>',
        '<span class="chem">-3 &lt;= x &lt;= 1.5</span>',
        '<span class="chem">x &lt;= -1.5</span> or <span class="chem">x &gt;= 3</span>',
        '<span class="chem">x &gt;= 1.5</span>'
      ],
      answer: 0,
      misconception: {
        1: 'Because a = 2 > 0, the parabola opens upwards, so 2x² + 3x − 9 is ≥ 0 OUTSIDE the roots, not between them.',
        2: 'You flipped the signs of the roots when factoring (2x − 3)(x + 3) = 0; the roots are x = 1.5 and x = −3.',
        3: 'You forgot the left branch x ≤ −3 where the parabola also rises above the x-axis.'
      },
      hints: [
        'Factor <span class="chem">2x^2 + 3x - 9 = (2x - 3)(x + 3)</span> to find the roots <span class="chem">x = -3</span> and <span class="chem">x = 1.5</span>.',
        'Sketch the upward-opening parabola and identify where it lies on or above the <span class="chem">x</span>-axis.'
      ],
      solution: '<p>Factoring gives <span class="chem">(2x - 3)(x + 3) &gt;= 0</span>, with roots at <span class="chem">x = -3</span> and <span class="chem">x = 1.5</span>. Since the leading coefficient is positive (<span class="chem">a = 2 &gt; 0</span>), the parabola opens upwards and is <span class="chem">&gt;= 0</span> outside the roots: <span class="chem">x &lt;= -3</span> or <span class="chem">x &gt;= 1.5</span>.</p>'
    },
    {
      id: 't2-2-q004',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'P1',
      syllabus: 'SL 2.7',
      marks: 4,
      stem: '<p>The line <span class="chem">y = 2x + k</span> is a tangent to the parabola <span class="chem">y = x^2 - 4x + 7</span>. Find the exact value of <span class="chem">k</span>.</p>',
      answer: -2,
      tolerance: 0.001,
      hints: [
        'Equate <span class="chem">x^2 - 4x + 7 = 2x + k</span> and move all terms to the left: <span class="chem">x^2 - 6x + (7 - k) = 0</span>.',
        'A tangent line touches the parabola at a single repeated root, so set <span class="chem">Delta = (-6)^2 - 4(1)(7 - k) = 0</span>.'
      ],
      solution: '<p>Setting <span class="chem">x^2 - 4x + 7 = 2x + k</span> gives <span class="chem">x^2 - 6x + (7 - k) = 0</span>. Since the line is tangent to the parabola, <span class="chem">Delta = 0</span>: <span class="chem">(-6)^2 - 4(1)(7 - k) = 0 => 36 - 28 + 4k = 0 => 4k = -8 => k = -2</span>.</p>'
    },
    {
      id: 't2-2-q005',
      type: 'mcq',
      tier: 'exam',
      level: 'sl',
      paper: 'P1',
      syllabus: 'SL 2.7',
      marks: 4,
      stem: '<p>Find the set of values of <span class="chem">k</span> for which the quadratic expression <span class="chem">kx^2 + 6x + k</span> is <strong>strictly positive</strong> (<span class="chem">&gt; 0</span>) for all real values of <span class="chem">x</span>.</p>',
      options: [
        '<span class="chem">k &gt; 3</span>',
        '<span class="chem">k &lt; -3</span> or <span class="chem">k &gt; 3</span>',
        '<span class="chem">-3 &lt; k &lt; 3</span>',
        '<span class="chem">k &gt;= 3</span>'
      ],
      answer: 0,
      misconception: {
        1: 'Δ < 0 gives k² > 9 (k < −3 or k > 3), but for k < −3 the parabola opens downwards and is always NEGATIVE, not always positive! You must also require a = k > 0.',
        2: 'You solved Δ > 0 (two real roots) instead of Δ < 0 (no real roots).',
        3: 'If k = 3, then 3x² + 6x + 3 = 3(x + 1)² equals 0 at x = −1, violating strictly positive (> 0).'
      },
      hints: [
        'For a quadratic to be strictly positive (<span class="chem">&gt; 0</span>) for all <span class="chem">x ∈ ℝ</span>, two conditions must hold simultaneously: <span class="chem">a &gt; 0</span> (opens upwards) AND <span class="chem">Delta &lt; 0</span> (never touches the <span class="chem">x</span>-axis).',
        'Solve <span class="chem">6^2 - 4(k)(k) &lt; 0</span> and intersect with <span class="chem">k &gt; 0</span>.'
      ],
      solution: '<p>We need the parabola to open upwards (<span class="chem">k &gt; 0</span>) and never touch the <span class="chem">x</span>-axis (<span class="chem">Delta &lt; 0</span>). Here <span class="chem">Delta = 36 - 4k^2 &lt; 0 => k^2 &gt; 9 => k &lt; -3</span> or <span class="chem">k &gt; 3</span>. Intersecting with <span class="chem">k &gt; 0</span> leaves <span class="chem">k &gt; 3</span>.</p>'
    },
    {
      id: 't2-2-q006',
      type: 'mcq',
      tier: 'foundation',
      level: 'sl',
      paper: 'P1',
      syllabus: 'SL 2.8',
      marks: 2,
      stem: '<p>What are the equations of the vertical and horizontal asymptotes of the rational function <span class="chem">f(x) = (6 - 2x)/(x + 4)</span>?</p>',
      options: [
        'Vertical asymptote: <span class="chem">x = -4</span>; Horizontal asymptote: <span class="chem">y = -2</span>',
        'Vertical asymptote: <span class="chem">x = -4</span>; Horizontal asymptote: <span class="chem">y = 6</span>',
        'Vertical asymptote: <span class="chem">x = 4</span>; Horizontal asymptote: <span class="chem">y = -2</span>',
        'Vertical asymptote: <span class="chem">x = 3</span>; Horizontal asymptote: <span class="chem">y = -4</span>'
      ],
      answer: 0,
      misconception: {
        1: 'Watch the order of terms in the numerator 6 − 2x = −2x + 6! The leading x-coefficient is −2 (not 6), so y = −2/1 = −2.',
        2: 'Setting the denominator x + 4 = 0 gives x = −4, not x = +4.',
        3: 'Setting the numerator 6 − 2x = 0 gives the x-intercept x = 3, not the vertical asymptote.'
      },
      hints: [
        'Write the numerator in standard descending order <span class="chem">f(x) = (-2x + 6)/(x + 4)</span> so you do not misread <span class="chem">a</span>!'
      ],
      solution: '<p>Rewriting <span class="chem">f(x) = (-2x + 6)/(x + 4)</span>: the denominator is zero when <span class="chem">x + 4 = 0 => x = -4</span> (vertical asymptote), and the ratio of <span class="chem">x</span>-coefficients is <span class="chem">-2/1 = -2 => y = -2</span> (horizontal asymptote).</p>'
    },
    {
      id: 't2-2-q007',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'P1',
      syllabus: 'SL 2.8',
      marks: 3,
      stem: '<p>When the rational function <span class="chem">f(x) = (4x - 3)/(x + 2)</span> is written in the form <span class="chem">A + B/(x + 2)</span>, find the value of <span class="chem">B</span>.</p>',
      answer: -11,
      tolerance: 0.001,
      hints: [
        'Write <span class="chem">4x - 3 = 4(x + 2) + B</span> and equate constants on both sides.'
      ],
      solution: '<p>Write the numerator in terms of <span class="chem">(x + 2)</span>: <span class="chem">4x - 3 = 4(x + 2) - 8 - 3 = 4(x + 2) - 11</span>. Dividing by <span class="chem">(x + 2)</span> gives <span class="chem">f(x) = 4 + (-11)/(x + 2)</span>, so <span class="chem">B = -11</span>.</p>'
    },
    {
      id: 't2-2-q008',
      type: 'multi',
      tier: 'exam',
      level: 'sl',
      paper: 'P1',
      syllabus: 'SL 2.9',
      marks: 3,
      stem: '<p>Consider the logarithmic function <span class="chem">f(x) = 2 ln(x - 3) + 4</span>. Which of the following statements about the graph of <span class="chem">f</span> are correct?</p>',
      options: [
        'The graph has a vertical asymptote with equation <span class="chem">x = 3</span>.',
        'The domain of <span class="chem">f</span> is <span class="chem">x &gt; 3</span> and the range is <span class="chem">y ∈ ℝ</span>.',
        'The graph passes through the point <span class="chem">(4, 4)</span>.',
        'The graph has a horizontal asymptote with equation <span class="chem">y = 4</span>.'
      ],
      answer: [0, 1, 2],
      misconception: {
        3: 'Exponential functions have a horizontal asymptote, whereas logarithmic functions grow without bound as x → ∞ and have a VERTICAL asymptote (x = 3), not a horizontal one.'
      },
      hints: [
        'Check the log domain requirement <span class="chem">x - 3 &gt; 0</span>, evaluate <span class="chem">f(4)</span> using <span class="chem">ln(1) = 0</span>, and recall whether log graphs have horizontal or vertical asymptotes.'
      ],
      solution: '<p>Since <span class="chem">ln(u)</span> requires <span class="chem">u &gt; 0</span>, the domain is <span class="chem">x &gt; 3</span> with vertical asymptote <span class="chem">x = 3</span>, and the range of any logarithm is all real numbers <span class="chem">ℝ</span> (no horizontal asymptote). At <span class="chem">x = 4</span>, <span class="chem">f(4) = 2 ln(1) + 4 = 0 + 4 = 4</span>.</p>'
    },
    {
      id: 't2-2-q009',
      type: 'order',
      tier: 'foundation',
      level: 'sl',
      paper: 'P1',
      syllabus: 'SL 2.7',
      marks: 3,
      stem: '<p>Place the following steps in the correct logical order to find the values of <span class="chem">m</span> for which the line <span class="chem">y = mx - 2</span> is tangent to the parabola <span class="chem">y = 2x^2 + 3x</span>.</p>',
      options: [
        'Equate the two equations: <span class="chem">2x^2 + 3x = mx - 2</span>.',
        'Rearrange into standard quadratic form <span class="chem">Ax^2 + Bx + C = 0</span>: <span class="chem">2x^2 + (3 - m)x + 2 = 0</span>.',
        'Set the discriminant <span class="chem">Delta = B^2 - 4AC = 0</span> for tangency: <span class="chem">(3 - m)^2 - 4(2)(2) = 0</span>.',
        'Solve <span class="chem">(3 - m)^2 = 16</span> to obtain <span class="chem">3 - m = +-4</span>, giving <span class="chem">m = -1</span> or <span class="chem">m = 7</span>.'
      ],
      answer: [0, 1, 2, 3],
      hints: [
        'First equate <span class="chem">y</span>-values, group like powers of <span class="chem">x</span> to identify <span class="chem">A, B, C</span>, apply <span class="chem">Delta = 0</span>, and solve for <span class="chem">m</span>.'
      ],
      solution: '<p>Equating <span class="chem">2x^2 + 3x = mx - 2</span> and rearranging to <span class="chem">2x^2 + (3 - m)x + 2 = 0</span> identifies <span class="chem">A = 2, B = 3 - m, C = 2</span>. Tangency requires <span class="chem">Delta = (3 - m)^2 - 16 = 0 => m = -1</span> or <span class="chem">m = 7</span>.</p>'
    },
    {
      id: 't2-2-q010',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'P2',
      syllabus: 'SL 2.9',
      marks: 3,
      stem: '<p>A population of bacteria is modelled by <span class="chem">P(t) = 450 e^{0.18t}</span>, where <span class="chem">t</span> is the time in hours after observation begins. Find the time <span class="chem">t</span> when the population reaches <span class="chem">1800</span>, giving your answer in hours correct to 3 significant figures.</p>',
      answer: 7.7016353396,
      tolerance: 0.02,
      sigfigs: 3,
      hints: [
        'Divide both sides of <span class="chem">450 e^{0.18t} = 1800</span> by <span class="chem">450</span> first to get <span class="chem">e^{0.18t} = 4</span>.',
        'Take the natural logarithm: <span class="chem">t = (ln 4) / 0.18</span>.'
      ],
      solution: '<p>Setting <span class="chem">450 e^{0.18t} = 1800</span> gives <span class="chem">e^{0.18t} = 4 => 0.18t = ln 4 => t = (ln 4)/0.18 ≈ 7.7016 = 7.70</span> hours (3 s.f.).</p>'
    },
    {
      id: 't2-2-q011',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'P2',
      syllabus: 'SL 2.10',
      marks: 3,
      stem: '<p>Using a GDC, find the solution to the equation <span class="chem">ln(x + 2) = 4 - x</span>, giving your answer correct to 3 significant figures.</p>',
      answer: 2.4966641730,
      tolerance: 0.005,
      sigfigs: 3,
      hints: [
        'Graph <span class="chem">Y_1 = ln(x + 2)</span> and <span class="chem">Y_2 = 4 - x</span> (or find the zero of <span class="chem">ln(x + 2) + x - 4</span>).',
        'Use the intersect tool (or the zero tool on <span class="chem">ln(x + 2) + x - 4</span>); you should find <span class="chem">x ≈ 2.497</span>. Check: <span class="chem">ln(4.497) ≈ 1.503</span> and <span class="chem">4 - 2.497 = 1.503</span>.'
      ],
      solution: '<p>Graphing <span class="chem">Y_1 = ln(x + 2)</span> and <span class="chem">Y_2 = 4 - x</span> gives a single intersection at <span class="chem">(2.4967, 1.5033)</span>, so <span class="chem">x = 2.50</span> (3 s.f.). There is only one solution because <span class="chem">ln(x + 2)</span> is increasing and <span class="chem">4 - x</span> is decreasing.</p>'
    },
    {
      id: 't2-2-q012',
      type: 'mcq',
      tier: 'exam',
      level: 'sl',
      paper: 'P1',
      syllabus: 'SL 2.8',
      marks: 3,
      stem: '<p>The graph of the rational function <span class="chem">f(x) = (ax + b)/(x + c)</span> has a vertical asymptote <span class="chem">x = 2</span>, a horizontal asymptote <span class="chem">y = -3</span>, and passes through the origin <span class="chem">(0, 0)</span>. What are the values of <span class="chem">a, b, c</span>?</p>',
      options: [
        '<span class="chem">a = -3, b = 0, c = -2</span>',
        '<span class="chem">a = -3, b = 0, c = 2</span>',
        '<span class="chem">a = 2, b = 0, c = -3</span>',
        '<span class="chem">a = -3, b = 6, c = -2</span>'
      ],
      answer: 0,
      misconception: {
        1: 'A vertical asymptote at x = 2 means the denominator x + c is zero when x = 2, so 2 + c = 0 ⇒ c = −2, not +2.',
        2: 'You swapped the horizontal asymptote y = a and the vertical asymptote x = −c.',
        3: 'Since the graph passes through (0, 0), f(0) = b/c = 0 ⇒ b = 0.'
      },
      hints: [
        'Use the vertical asymptote <span class="chem">x = -c = 2</span> to find <span class="chem">c</span>, the horizontal asymptote <span class="chem">y = a/1 = -3</span> to find <span class="chem">a</span>, and <span class="chem">f(0) = 0</span> to find <span class="chem">b</span>.'
      ],
      solution: '<p>The vertical asymptote <span class="chem">x = 2</span> requires <span class="chem">2 + c = 0 => c = -2</span>. The horizontal asymptote <span class="chem">y = -3</span> gives <span class="chem">a/1 = -3 => a = -3</span>. Passing through <span class="chem">(0, 0)</span> gives <span class="chem">f(0) = b/(-2) = 0 => b = 0</span>.</p>'
    },
    {
      id: 't2-2-q013',
      type: 'short',
      tier: 'exam',
      level: 'sl',
      paper: 'P1',
      syllabus: 'SL 2.7',
      marks: 6,
      stem: '<p>Let <span class="chem">f(x) = x^2 + (k + 1)x + 2k + 2</span>, where <span class="chem">k ∈ ℝ</span>.<br>(a) Show that the discriminant of <span class="chem">f(x)</span> can be written as <span class="chem">Delta = (k + 1)(k - 7)</span>. <strong>[3 marks]</strong><br>(b) Hence find the set of values of <span class="chem">k</span> for which the equation <span class="chem">f(x) = 0</span> has two distinct real roots. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">Delta = (k + 1)^2 - 4(1)(2k + 2) = (k + 1)[(k + 1) - 8] = (k + 1)(k - 7)</span>; (b) <span class="chem">k &lt; -1</span> or <span class="chem">k &gt; 7</span>.</p>',
      markscheme: [
        'M1: Substitutes a = 1, b = k + 1, c = 2k + 2 into Δ = b² − 4ac to get Δ = (k + 1)² − 4(2k + 2).',
        'M1: Expands to k² + 2k + 1 − 8k − 8 (or writes 4(2k + 2) as 8(k + 1) to give (k + 1)² − 8(k + 1)).',
        'A1: Obtains k² − 6k − 7 (or (k + 1)[(k + 1) − 8]). AG: Δ = (k + 1)(k − 7) follows; the given line itself earns no mark.',
        'M1: Uses the condition Δ > 0 for two distinct real roots: (k + 1)(k − 7) > 0.',
        'A1: Identifies critical values k = −1 and k = 7.',
        'A1: States the correct outside intervals k < −1 or k > 7 (strict inequalities required).'
      ],
      hints: [
        'In part (a), notice that <span class="chem">2k + 2 = 2(k + 1)</span>, so you can factor <span class="chem">(k + 1)</span> out of <span class="chem">(k + 1)^2 - 8(k + 1)</span> in one step!',
        'In part (b), sketch the upward-opening parabola <span class="chem">y = (k + 1)(k - 7)</span> to see where <span class="chem">Delta &gt; 0</span>.'
      ],
      solution: '<p>(a) <span class="chem">Delta = (k + 1)^2 - 4(1)(2k + 2) = (k + 1)^2 - 8(k + 1) = (k + 1)[(k + 1) - 8] = (k + 1)(k - 7)</span>.<br>(b) For two distinct real roots, <span class="chem">Delta &gt; 0 => (k + 1)(k - 7) &gt; 0</span>. Since the quadratic in <span class="chem">k</span> opens upwards with roots at <span class="chem">k = -1</span> and <span class="chem">k = 7</span>, we have <span class="chem">k &lt; -1</span> or <span class="chem">k &gt; 7</span>.</p>'
    },
    {
      id: 't2-2-q014',
      type: 'short',
      tier: 'exam',
      level: 'sl',
      paper: 'P2',
      syllabus: 'SL 2.9',
      marks: 6,
      stem: '<p>The mass <span class="chem">M(t)</span> (in milligrams) of a medical tracer in a patient\'s bloodstream <span class="chem">t</span> hours after injection is modelled by <span class="chem">M(t) = M_0 e^{-kt}</span> for <span class="chem">t &gt;= 0</span>. Initially (<span class="chem">t = 0</span>), <span class="chem">120</span> <span class="unit">mg</span> is injected. After <span class="chem">4</span> hours, <span class="chem">75</span> <span class="unit">mg</span> remains.<br>(a) Find the value of <span class="chem">M_0</span> and show that <span class="chem">k = (1/4) ln(8/5)</span>. <strong>[3 marks]</strong><br>(b) Find the half-life of the tracer (the time taken for the mass to fall to <span class="chem">60</span> <span class="unit">mg</span>), giving your answer in hours to 3 significant figures. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">M_0 = 120</span>; <span class="chem">k = (1/4) ln(8/5) ≈ 0.1175</span>; (b) <span class="chem">5.90</span> hours.</p>',
      markscheme: [
        'A1: States M₀ = 120 from M(0) = 120.',
        'M1: Substitutes t = 4, M = 75 to write 120 e^(−4k) = 75 ⇒ e^(−4k) = 75/120 = 5/8.',
        'A1: Takes natural logs: −4k = ln(5/8) = −ln(8/5). AG: k = (1/4) ln(8/5); the given line itself earns no mark.',
        'M1: Sets e^(−kt) = 1/2 (or 120 e^(−kt) = 60).',
        'M1: Solves t = (ln 2) / k = 4 ln 2 / ln(8/5).',
        'A1: Evaluates t = 5.899... = 5.90 hours (3 s.f.).'
      ],
      hints: [
        'Simplify the fraction <span class="chem">75 / 120 = 5 / 8</span> and use <span class="chem">-ln(5/8) = ln(8/5)</span>.',
        'For the half-life, solve <span class="chem">e^{-kt} = 0.5 => t = (ln 2) / k</span>.'
      ],
      solution: '<p>(a) At <span class="chem">t = 0</span>, <span class="chem">M(0) = M_0 e^0 = 120 => M_0 = 120</span>. At <span class="chem">t = 4</span>, <span class="chem">120 e^{-4k} = 75 => e^{-4k} = 75/120 = 5/8 => -4k = ln(5/8) = -ln(8/5) => k = (1/4) ln(8/5)</span>.<br>(b) Setting <span class="chem">M(t) = 60</span> gives <span class="chem">e^{-kt} = 1/2 => kt = ln 2 => t = 4 ln 2 / ln(8/5) ≈ 5.899 = 5.90</span> hours (3 s.f.).</p>'
    },
    {
      id: 't2-2-q015',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'P1',
      syllabus: 'SL 1.7 / 2.7',
      marks: 4,
      stem: '<p>Solve the equation <span class="chem">9^x - 12(3^{x - 1}) + 3 = 0</span>, and find the <strong>sum</strong> of all real solutions <span class="chem">x</span>.</p>',
      answer: 1,
      tolerance: 0.001,
      hints: [
        'Rewrite <span class="chem">9^x = (3^x)^2</span> and <span class="chem">12(3^{x-1}) = 12(3^x / 3) = 4(3^x)</span>.',
        'Let <span class="chem">u = 3^x</span> to get <span class="chem">u^2 - 4u + 3 = 0</span>, find both values of <span class="chem">u</span>, and solve <span class="chem">3^x = u</span>.'
      ],
      solution: '<p>Using exponent laws, <span class="chem">9^x = (3^x)^2</span> and <span class="chem">12(3^{x-1}) = (12/3)3^x = 4(3^x)</span>. Letting <span class="chem">u = 3^x</span> gives <span class="chem">u^2 - 4u + 3 = (u - 1)(u - 3) = 0</span>, so <span class="chem">u = 1</span> or <span class="chem">u = 3</span>. Since <span class="chem">3^x = 1 => x = 0</span> and <span class="chem">3^x = 3 => x = 1</span>, the sum of all real solutions is <span class="chem">0 + 1 = 1</span>.</p>'
    },
    {
      id: 't2-2-q016',
      type: 'mcq',
      tier: 'challenge',
      level: 'sl',
      paper: 'P1',
      syllabus: 'SL 2.7',
      marks: 4,
      stem: '<p>Find the complete set of values of the real parameter <span class="chem">m</span> for which the inequality <span class="chem">(m - 2)x^2 + 2(m - 2)x + 4 &gt; 0</span> holds for <strong>all</strong> <span class="chem">x ∈ ℝ</span>.</p>',
      options: [
        '<span class="chem">2 &lt;= m &lt; 6</span>',
        '<span class="chem">2 &lt; m &lt; 6</span>',
        '<span class="chem">m &lt; 2</span> or <span class="chem">m &gt; 6</span>',
        '<span class="chem">m &gt; 2</span>'
      ],
      answer: 0,
      misconception: {
        1: 'You checked the quadratic case m − 2 > 0 and Δ < 0 (giving 2 < m < 6), but forgot to test the degenerate case m = 2! When m = 2, the expression reduces to 4 > 0, which holds for all x ∈ ℝ.',
        2: 'You solved Δ > 0 instead of Δ < 0.',
        3: 'You checked a = m − 2 > 0, but forgot to require Δ < 0.'
      },
      hints: [
        'First check the quadratic case where <span class="chem">a = m - 2 &gt; 0</span> and <span class="chem">Delta &lt; 0</span>.',
        'Then separately test the degenerate case <span class="chem">m = 2</span> where the <span class="chem">x^2</span> and <span class="chem">x</span> terms vanish!'
      ],
      solution: '<p>Case 1 (<span class="chem">m != 2</span>, quadratic): Require <span class="chem">m - 2 &gt; 0 => m &gt; 2</span> and <span class="chem">Delta = 4(m - 2)^2 - 16(m - 2) = 4(m - 2)(m - 6) &lt; 0 => 2 &lt; m &lt; 6</span>.<br>Case 2 (<span class="chem">m = 2</span>, constant): Substituting <span class="chem">m = 2</span> gives <span class="chem">0x^2 + 0x + 4 &gt; 0 => 4 &gt; 0</span>, which is true for all <span class="chem">x ∈ ℝ</span>! Combining both cases gives <span class="chem">2 &lt;= m &lt; 6</span>.</p>'
    },
    {
      id: 't2-2-q017',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'P1',
      syllabus: 'SL 1.7',
      marks: 4,
      stem: '<p>Solve the logarithmic equation <span class="chem">log_2(x - 1) + log_2(x + 2) = 2</span> for <span class="chem">x</span>.</p>',
      answer: 2,
      tolerance: 0.001,
      hints: [
        'Combine the logs using <span class="chem">log_2((x - 1)(x + 2)) = 2</span>, so <span class="chem">(x - 1)(x + 2) = 2^2 = 4</span>.',
        'Solve the quadratic and reject any root that violates the domain restriction <span class="chem">x - 1 &gt; 0</span>!'
      ],
      solution: '<p>Domain requires <span class="chem">x - 1 &gt; 0</span> and <span class="chem">x + 2 &gt; 0</span>, so <span class="chem">x &gt; 1</span>. Combining the logarithms gives <span class="chem">log_2[(x - 1)(x + 2)] = 2 => (x - 1)(x + 2) = 2^2 = 4 => x^2 + x - 6 = 0 => (x + 3)(x - 2) = 0</span>. Rejecting <span class="chem">x = -3</span> (since <span class="chem">x &gt; 1</span>) leaves the unique valid solution <span class="chem">x = 2</span>.</p>'
    },
    {
      id: 't2-2-q018',
      type: 'short',
      tier: 'challenge',
      level: 'sl',
      paper: 'P1',
      syllabus: 'SL 2.8',
      marks: 6,
      stem: '<p>Let <span class="chem">f(x) = (2x - 1)/(x + 1)</span> for <span class="chem">x != -1</span>, and let <span class="chem">g_k(x) = kx + 2</span>.<br>(a) Show that the <span class="chem">x</span>-coordinates of the points of intersection of the graphs of <span class="chem">f</span> and <span class="chem">g_k</span> satisfy <span class="chem">kx^2 + kx + 3 = 0</span>. <strong>[2 marks]</strong><br>(b) Hence find the non-zero value of <span class="chem">k</span> for which the line <span class="chem">y = kx + 2</span> is tangent to the hyperbola <span class="chem">y = f(x)</span>, and find the coordinates of the point of contact. <strong>[4 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">(2x - 1)/(x + 1) = kx + 2 => 2x - 1 = (kx + 2)(x + 1) = kx^2 + (k + 2)x + 2 => kx^2 + kx + 3 = 0</span>; (b) <span class="chem">k = 12</span>, point of contact <span class="chem">(-1/2, -4)</span>.</p>',
      markscheme: [
        'M1: Equates (2x − 1)/(x + 1) = kx + 2 and multiplies both sides by (x + 1).',
        'A1: Expands correctly: 2x − 1 = kx² + (k + 2)x + 2. AG: kx² + kx + 3 = 0; the given line itself earns no mark.',
        'M1: Sets discriminant Δ = k² − 4(k)(3) = 0 for tangency.',
        'A1: Solves k(k − 12) = 0 and selects the non-zero value k = 12.',
        'M1: Substitutes k = 12 into 12x² + 12x + 3 = 0 ⇒ 3(2x + 1)² = 0 to find x = −1/2.',
        'A1: Evaluates y = 12(−1/2) + 2 = −4 to state the point of contact (−1/2, −4).'
      ],
      hints: [
        'For part (a), multiply both sides of <span class="chem">(2x - 1)/(x + 1) = kx + 2</span> by <span class="chem">(x + 1)</span> and expand.',
        'For part (b), set the discriminant of <span class="chem">kx^2 + kx + 3 = 0</span> equal to zero!'
      ],
      solution: '<p>(a) Setting <span class="chem">(2x - 1)/(x + 1) = kx + 2</span> and multiplying by <span class="chem">x + 1</span> (<span class="chem">x != -1</span>) gives <span class="chem">2x - 1 = kx^2 + kx + 2x + 2 => kx^2 + kx + 3 = 0</span>.<br>(b) For tangency, <span class="chem">Delta = k^2 - 4(k)(3) = k(k - 12) = 0</span>. Since <span class="chem">k != 0</span>, <span class="chem">k = 12</span>. Substituting <span class="chem">k = 12</span> gives <span class="chem">12x^2 + 12x + 3 = 3(2x + 1)^2 = 0 => x = -1/2</span>, and <span class="chem">y = 12(-1/2) + 2 = -4</span>, so the point of contact is <span class="chem">(-1/2, -4)</span>.</p>'
    }
  ]);
})();
