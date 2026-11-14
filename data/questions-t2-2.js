/* ==========================================================================
   Analysis Lab — questions-t2-2.js
   Question bank for Topic 2.2: Quadratics, rational, exponential & log models (SL 2.6–2.10).
   60 original questions across foundation, exam, and challenge tiers.
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
      paper: 'Paper 1 (No GDC)',
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
      paper: 'Paper 1 (No GDC)',
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
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.7',
      marks: 2,
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
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.7',
      marks: 4,
      stem: '<p>The line <span class="chem">y = 2x + k</span> is a tangent to the parabola <span class="chem">y = x^2 - 4x + 7</span>. Find the exact value of <span class="chem">k</span>.</p>',
      answer: -2,
      exact: true,
      answerInput: '-2',
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
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.7',
      marks: 2,
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
      paper: 'Paper 1 (No GDC)',
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
      paper: 'Paper 1 (No GDC)',
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
      paper: 'Paper 1 (No GDC)',
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
      paper: 'Paper 1 (No GDC)',
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
      paper: 'Paper 2 (GDC)',
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
      paper: 'Paper 2 (GDC)',
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
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.8',
      marks: 2,
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
      paper: 'Paper 1 (No GDC)',
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
      paper: 'Paper 2 (GDC)',
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
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 1.7 / 2.7',
      marks: 4,
      stem: '<p>The equation <span class="chem">9^x - 12(3^{x - 1}) + 3 = 0</span> has two real solutions. Solve the equation, and give the <strong>positive</strong> solution <span class="chem">x</span>.</p>',
      answer: 1,
      tolerance: 0.001,
      hints: [
        'Rewrite <span class="chem">9^x = (3^x)^2</span> and <span class="chem">12(3^{x-1}) = 12(3^x / 3) = 4(3^x)</span>.',
        'Let <span class="chem">u = 3^x</span> to get <span class="chem">u^2 - 4u + 3 = 0</span>, find both values of <span class="chem">u</span>, and solve <span class="chem">3^x = u</span>.'
      ],
      solution: '<p>Using exponent laws, <span class="chem">9^x = (3^x)^2</span> and <span class="chem">12(3^{x-1}) = (12/3)3^x = 4(3^x)</span>. Letting <span class="chem">u = 3^x</span> gives <span class="chem">u^2 - 4u + 3 = (u - 1)(u - 3) = 0</span>, so <span class="chem">u = 1</span> or <span class="chem">u = 3</span>. Since <span class="chem">3^x = 1 => x = 0</span> and <span class="chem">3^x = 3 => x = 1</span>, the solutions are <span class="chem">x = 0</span> and <span class="chem">x = 1</span>, so the positive solution is <span class="chem">x = 1</span>.</p>'
    },
    {
      id: 't2-2-q016',
      type: 'mcq',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.7',
      marks: 2,
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
        'Decode: the coefficient of <span class="chem">x^2</span> contains the parameter, so "for all <span class="chem">x</span>" splits into two situations: the expression is a genuine quadratic (<span class="chem">m != 2</span>), or the <span class="chem">x^2</span> coefficient is zero and it is not a quadratic at all. Both must be checked.',
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
      paper: 'Paper 1 (No GDC)',
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
      paper: 'Paper 1 (No GDC)',
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
        'Decode: "tangent" means the line meets the curve at exactly one point, so the equation from (a) must have a repeated root (<span class="chem">Delta = 0</span>). "Non-zero" tells you to reject <span class="chem">k = 0</span>, because then the equation is not a quadratic.',
        'For part (a), multiply both sides of <span class="chem">(2x - 1)/(x + 1) = kx + 2</span> by <span class="chem">(x + 1)</span> and expand.',
        'For part (b), set the discriminant of <span class="chem">kx^2 + kx + 3 = 0</span> equal to zero!'
      ],
      solution: '<p>(a) Setting <span class="chem">(2x - 1)/(x + 1) = kx + 2</span> and multiplying by <span class="chem">x + 1</span> (<span class="chem">x != -1</span>) gives <span class="chem">2x - 1 = kx^2 + kx + 2x + 2 => kx^2 + kx + 3 = 0</span>.<br>(b) For tangency, <span class="chem">Delta = k^2 - 4(k)(3) = k(k - 12) = 0</span>. Since <span class="chem">k != 0</span>, <span class="chem">k = 12</span>. Substituting <span class="chem">k = 12</span> gives <span class="chem">12x^2 + 12x + 3 = 3(2x + 1)^2 = 0 => x = -1/2</span>, and <span class="chem">y = 12(-1/2) + 2 = -4</span>, so the point of contact is <span class="chem">(-1/2, -4)</span>.</p>'
    },
    {
      id: 't2-2-q019',
      type: 'numeric',
      tier: 'foundation',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.6',
      marks: 2,
      stem: '<p>Let <span class="chem">f(x) = -2x^2 + 12x - 5</span>. Find the maximum value of <span class="chem">f(x)</span>.</p>',
      answer: 13,
      tolerance: 0,
      hints: [
        'The coefficient of <span class="chem">x^2</span> is negative, so the vertex is a maximum. Use the axis of symmetry <span class="chem">x = -b/(2a)</span> from the formula booklet.',
        'Here <span class="chem">x = -12/(2 × (-2)) = 3</span>. Now evaluate <span class="chem">f(3)</span>.'
      ],
      solution: '<p>The axis of symmetry is <span class="chem">x = -b/(2a) = -12/(-4) = 3</span>. Since <span class="chem">a = -2 &lt; 0</span>, the vertex is a maximum: <span class="chem">f(3) = -2(9) + 36 - 5 = 13</span>. (Completing the square gives the same result: <span class="chem">f(x) = -2(x - 3)^2 + 13</span>.)</p>'
    },
    {
      id: 't2-2-q020',
      type: 'mcq',
      tier: 'foundation',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.8',
      marks: 1,
      stem: '<p>Let <span class="chem">f(x) = 1/x</span>, for <span class="chem">x != 0</span>. Which statement is correct?</p>',
      options: [
        '<span class="chem">f^{-1}(x) = 1/x</span>, so <span class="chem">f</span> is self-inverse and its graph is symmetric about the line <span class="chem">y = x</span>.',
        '<span class="chem">f^{-1}(x) = -1/x</span>, so the graph of <span class="chem">f</span> is symmetric about the line <span class="chem">y = -x</span>.',
        '<span class="chem">f</span> has no inverse function, because <span class="chem">f</span> is not defined at <span class="chem">x = 0</span>.',
        '<span class="chem">f(f(x)) = 1/x^2</span>.'
      ],
      answer: 0,
      misconception: {
        1: 'The graph of 1/x is symmetric about y = −x as well, but that is not what makes f its own inverse. Solving x = 1/y gives y = 1/x, not −1/x.',
        2: 'A function needs to be one-to-one on its domain to have an inverse. Leaving out x = 0 does not stop that: 1/x is one-to-one on x ≠ 0.',
        3: 'Composing is not multiplying. f(f(x)) = f(1/x) = 1/(1/x) = x, not (1/x) × (1/x).'
      },
      hints: [
        'Swap <span class="chem">x</span> and <span class="chem">y</span> in <span class="chem">y = 1/x</span> and make <span class="chem">y</span> the subject. What do you get?'
      ],
      solution: '<p>Swapping gives <span class="chem">x = 1/y => y = 1/x</span>, so <span class="chem">f^{-1}(x) = 1/x = f(x)</span>: the reciprocal function is self-inverse, and <span class="chem">f(f(x)) = 1/(1/x) = x</span>. A function and its inverse are reflections in <span class="chem">y = x</span>, so the graph of a self-inverse function is symmetric about <span class="chem">y = x</span>.</p>'
    },
    {
      id: 't2-2-q021',
      type: 'numeric',
      tier: 'foundation',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.9',
      marks: 2,
      stem: '<p>The graph of <span class="chem">y = 3^x</span> is reflected in the line <span class="chem">y = x</span> to give the graph of <span class="chem">y = g(x)</span>. Find <span class="chem">g(81)</span>.</p>',
      answer: 4,
      tolerance: 0,
      hints: [
        'A reflection in <span class="chem">y = x</span> gives the inverse function. The inverse of <span class="chem">3^x</span> is <span class="chem">log_3 x</span>.',
        'Write <span class="chem">81</span> as a power of <span class="chem">3</span>.'
      ],
      solution: '<p>The reflection of <span class="chem">y = 3^x</span> in <span class="chem">y = x</span> is its inverse, <span class="chem">g(x) = log_3 x</span>. Since <span class="chem">81 = 3^4</span>, <span class="chem">g(81) = log_3 3^4 = 4</span> (booklet: <span class="chem">log_a a^x = x</span>).</p>'
    },
    {
      id: 't2-2-q022',
      type: 'short',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.6, 2.7',
      marks: 6,
      stem: '<p>The graph of <span class="chem">y = a(x - h)^2 + k</span> has its vertex at <span class="chem">(-1, 8)</span> and passes through the point <span class="chem">(2, -10)</span>.<br>(a) Write down the values of <span class="chem">h</span> and <span class="chem">k</span>, and find the value of <span class="chem">a</span>. <strong>[2 marks]</strong><br>(b) Find the <span class="chem">x</span>-intercepts of the graph. <strong>[2 marks]</strong><br>(c) Express the function in the form <span class="chem">y = px^2 + qx + r</span>, and write down the <span class="chem">y</span>-intercept. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">h = -1</span>, <span class="chem">k = 8</span>, <span class="chem">a = -2</span>; (b) <span class="chem">x = -3</span> and <span class="chem">x = 1</span>; (c) <span class="chem">y = -2x^2 - 4x + 6</span>, <span class="chem">y</span>-intercept <span class="chem">6</span>.</p>',
      markscheme: [
        'M1: Substitutes the point into y = a(x + 1)² + 8: −10 = a(2 + 1)² + 8, i.e. 9a = −18.',
        'A1: a = −2 (with h = −1, k = 8).',
        'M1: Sets −2(x + 1)² + 8 = 0 ⇒ (x + 1)² = 4 ⇒ x + 1 = ±2.',
        'A1: x = −3 and x = 1.',
        'A1: Expands −2(x² + 2x + 1) + 8 = −2x² − 4x + 6.',
        'A1: y-intercept is 6 (the point (0, 6)).'
      ],
      hints: [
        'In vertex form the vertex is <span class="chem">(h, k)</span>, so you can write down <span class="chem">h</span> and <span class="chem">k</span> straight away. Substitute <span class="chem">(2, -10)</span> to find <span class="chem">a</span>.',
        'For the <span class="chem">x</span>-intercepts, set <span class="chem">y = 0</span> and take square roots of <span class="chem">(x + 1)^2 = 4</span>; remember the <span class="chem">+-</span>.'
      ],
      solution: '<p>(a) The vertex is <span class="chem">(h, k) = (-1, 8)</span>. Substituting <span class="chem">(2, -10)</span>: <span class="chem">-10 = a(3)^2 + 8 => 9a = -18 => a = -2</span>.<br>(b) <span class="chem">-2(x + 1)^2 + 8 = 0 => (x + 1)^2 = 4 => x + 1 = +-2 => x = 1</span> or <span class="chem">x = -3</span>. Check: the axis <span class="chem">x = -1</span> is halfway between them.<br>(c) <span class="chem">y = -2(x^2 + 2x + 1) + 8 = -2x^2 - 4x + 6</span>, so the <span class="chem">y</span>-intercept is <span class="chem">6</span>.</p>'
    },
    {
      id: 't2-2-q023',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.7',
      marks: 3,
      stem: '<p>The equation <span class="chem">2x^2 - 6x + 3 = 0</span> has two real roots. Find the larger root, giving your answer in exact form.</p>',
      answer: 2.3660254038,
      exact: true,
      answerInput: '(3+sqrt(3))/2',
      hints: [
        'The quadratic does not factorise over the integers, so use the quadratic formula with <span class="chem">a = 2</span>, <span class="chem">b = -6</span>, <span class="chem">c = 3</span>.',
        'Simplify the surd: <span class="chem">sqrt(12) = 2 sqrt(3)</span>, then divide every term by the common factor.'
      ],
      solution: '<p><span class="chem">x = (6 +- sqrt(36 - 24))/4 = (6 +- sqrt(12))/4 = (6 +- 2 sqrt(3))/4 = (3 +- sqrt(3))/2</span>. The larger root is <span class="chem">(3 + sqrt(3))/2</span>.</p>'
    },
    {
      id: 't2-2-q024',
      type: 'short',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.7',
      marks: 4,
      stem: '<p>Solve the inequality <span class="chem">3x^2 &lt;= 5x + 2</span>.</p>',
      answer: '<p><span class="chem">-1/3 &lt;= x &lt;= 2</span></p>',
      markscheme: [
        'M1: Rearranges to one side: 3x² − 5x − 2 ≤ 0.',
        'A1: Factorises (3x + 1)(x − 2) or otherwise finds the critical values x = −1/3 and x = 2.',
        'M1: Uses a sketch of the upward parabola or a sign diagram to see the expression is ≤ 0 between the roots.',
        'A1: −1/3 ≤ x ≤ 2 (inclusive inequalities required).'
      ],
      hints: [
        'Move everything to one side so that you compare a quadratic with <span class="chem">0</span>. Do not divide by <span class="chem">x</span>.',
        'Factorise <span class="chem">3x^2 - 5x - 2</span> and sketch the parabola: it opens upwards, so where is it below the axis?'
      ],
      solution: '<p><span class="chem">3x^2 - 5x - 2 &lt;= 0 => (3x + 1)(x - 2) &lt;= 0</span>. The critical values are <span class="chem">x = -1/3</span> and <span class="chem">x = 2</span>. The parabola opens upwards, so it is on or below the <span class="chem">x</span>-axis between the roots: <span class="chem">-1/3 &lt;= x &lt;= 2</span>.</p>'
    },
    {
      id: 't2-2-q025',
      type: 'short',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.8',
      marks: 7,
      stem: '<p>Let <span class="chem">f(x) = (6x - 3)/(2x + 4)</span>, for <span class="chem">x != -2</span>.<br>(a) Write down the equation of (i) the vertical asymptote and (ii) the horizontal asymptote of the graph of <span class="chem">f</span>. <strong>[2 marks]</strong><br>(b) Find the coordinates of the points where the graph meets the axes. <strong>[2 marks]</strong><br>(c) Sketch the graph of <span class="chem">f</span>, showing the asymptotes and intercepts. <strong>[2 marks]</strong><br>(d) Hence write down the range of <span class="chem">f</span>. <strong>[1 mark]</strong></p>',
      answer: '<p>(a) (i) <span class="chem">x = -2</span>; (ii) <span class="chem">y = 3</span>; (b) <span class="chem">(1/2, 0)</span> and <span class="chem">(0, -3/4)</span>; (c) a hyperbola in the top-left and bottom-right regions formed by the asymptotes, passing through both intercepts; (d) <span class="chem">y != 3</span> (all real <span class="chem">y</span> except <span class="chem">3</span>).</p>',
      markscheme: [
        'A1: Vertical asymptote x = −2.',
        'A1: Horizontal asymptote y = 3 (ratio 6/2 of the x-coefficients).',
        'A1: x-intercept (1/2, 0) from 6x − 3 = 0.',
        'A1: y-intercept (0, −3/4) from f(0) = −3/4.',
        'A1: Sketch shows both asymptotes and a two-branch hyperbola approaching them.',
        'A1: Correct branches: the branch through (1/2, 0) and (0, −3/4) lies to the right of x = −2 and below y = 3; the other branch lies to the left of x = −2 and above y = 3.',
        'A1: Range y ≠ 3.'
      ],
      hints: [
        'Set the denominator equal to zero for the vertical asymptote. For the horizontal asymptote, divide the <span class="chem">x</span>-coefficients: <span class="chem">a/c</span>.',
        'The <span class="chem">x</span>-intercept comes from the numerator being zero; the <span class="chem">y</span>-intercept is <span class="chem">f(0)</span>.',
        'Put both intercepts on your sketch first. They tell you which pair of opposite regions the branches lie in.'
      ],
      solution: '<p>(a) <span class="chem">2x + 4 = 0 => x = -2</span>; horizontal asymptote <span class="chem">y = 6/2 = 3</span>.<br>(b) <span class="chem">6x - 3 = 0 => x = 1/2</span>, giving <span class="chem">(1/2, 0)</span>; <span class="chem">f(0) = -3/4</span>, giving <span class="chem">(0, -3/4)</span>.<br>(c) Both intercepts lie to the right of <span class="chem">x = -2</span> and below <span class="chem">y = 3</span>, so one branch runs through them from near <span class="chem">x = -2</span> (going down to <span class="chem">-infty</span>) up towards <span class="chem">y = 3</span>. The other branch is in the opposite region: left of <span class="chem">x = -2</span>, above <span class="chem">y = 3</span>.<br>(d) The graph never reaches its horizontal asymptote, so the range is <span class="chem">y != 3</span>.</p>'
    },
    {
      id: 't2-2-q026',
      type: 'numeric',
      tier: 'foundation',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.9',
      marks: 2,
      stem: '<p>The function <span class="chem">f(x) = 2^{3x}</span> can be written in the form <span class="chem">f(x) = e^{kx}</span>. Find the exact value of <span class="chem">k</span>.</p>',
      answer: 2.0794415417,
      exact: true,
      answerInput: '3ln(2)',
      hints: [
        'The formula booklet gives <span class="chem">a^x = e^{x ln a}</span>. Write <span class="chem">2^{3x}</span> as <span class="chem">(2^3)^x</span> or apply the identity with exponent <span class="chem">3x</span>.'
      ],
      solution: '<p>Using <span class="chem">a^x = e^{x ln a}</span>: <span class="chem">2^{3x} = e^{3x ln 2}</span>, so <span class="chem">k = 3 ln 2</span> (equivalently <span class="chem">ln 8</span>).</p>'
    },
    {
      id: 't2-2-q027',
      type: 'short',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.9, 2.5',
      marks: 6,
      stem: '<p>Let <span class="chem">f(x) = ln(2x - 4) + 1</span>, for <span class="chem">x &gt; 2</span>.<br>(a) Write down the equation of the vertical asymptote of the graph of <span class="chem">f</span>. <strong>[1 mark]</strong><br>(b) Find the exact <span class="chem">x</span>-intercept of the graph of <span class="chem">f</span>. <strong>[2 marks]</strong><br>(c) Find an expression for <span class="chem">f^{-1}(x)</span>. <strong>[2 marks]</strong><br>(d) Write down the equation of the horizontal asymptote of the graph of <span class="chem">f^{-1}</span>. <strong>[1 mark]</strong></p>',
      answer: '<p>(a) <span class="chem">x = 2</span>; (b) <span class="chem">x = 2 + 1/(2e)</span>; (c) <span class="chem">f^{-1}(x) = (e^{x - 1} + 4)/2</span>; (d) <span class="chem">y = 2</span>.</p>',
      markscheme: [
        'A1: x = 2 (where 2x − 4 = 0).',
        'M1: Sets f(x) = 0: ln(2x − 4) = −1 ⇒ 2x − 4 = e⁻¹.',
        'A1: x = 2 + 1/(2e) (or (4e + 1)/(2e)).',
        'M1: Interchanges x and y and removes the logarithm: x − 1 = ln(2y − 4) ⇒ e^(x − 1) = 2y − 4.',
        'A1: f⁻¹(x) = (e^(x − 1) + 4)/2.',
        'A1: y = 2 (the reflection of x = 2 in y = x).'
      ],
      hints: [
        'A logarithm needs a positive argument, and its graph has a vertical asymptote where the argument is zero.',
        'For (b), set <span class="chem">f(x) = 0</span>, isolate the logarithm and use <span class="chem">ln u = -1 => u = e^{-1}</span>.',
        'For (d), the asymptotes of <span class="chem">f^{-1}</span> are the reflections of those of <span class="chem">f</span> in <span class="chem">y = x</span>.'
      ],
      solution: '<p>(a) <span class="chem">2x - 4 = 0 => x = 2</span>.<br>(b) <span class="chem">ln(2x - 4) = -1 => 2x - 4 = e^{-1} => x = 2 + 1/(2e)</span>.<br>(c) Let <span class="chem">x = ln(2y - 4) + 1</span>. Then <span class="chem">e^{x - 1} = 2y - 4</span>, so <span class="chem">f^{-1}(x) = (e^{x - 1} + 4)/2</span>.<br>(d) As <span class="chem">x -&gt; -infty</span>, <span class="chem">e^{x - 1} -&gt; 0</span>, so <span class="chem">f^{-1}(x) -&gt; 2</span>: the horizontal asymptote is <span class="chem">y = 2</span>, the reflection of <span class="chem">x = 2</span> in <span class="chem">y = x</span>.</p>'
    },
    {
      id: 't2-2-q028',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.9',
      marks: 4,
      stem: '<p>The temperature, in °C, of a metal rod <span class="chem">t</span> minutes after it is taken out of a furnace is modelled by <span class="chem">P(t) = 40 + 60 e^{-kt}</span>, where <span class="chem">k &gt; 0</span>. After <span class="chem">10</span> minutes the temperature is <span class="chem">55</span> °C. Find the exact value of <span class="chem">k</span>, giving your answer in the form <span class="chem">(ln a)/b</span>, where <span class="chem">a, b ∈ ℤ^+</span> and <span class="chem">a</span> is prime.</p>',
      answer: 0.1386294361,
      exact: true,
      answerInput: 'ln(2)/5',
      hints: [
        'Decode: you are given one data point, <span class="chem">P(10) = 55</span>. Substitute it and isolate the exponential term before taking logs.',
        '<span class="chem">60 e^{-10k} = 15 => e^{-10k} = 1/4</span>. Now take natural logs and use <span class="chem">ln 4 = 2 ln 2</span>.'
      ],
      solution: '<p><span class="chem">40 + 60 e^{-10k} = 55 => e^{-10k} = 15/60 = 1/4 => -10k = ln(1/4) = -ln 4 => k = (ln 4)/10 = (2 ln 2)/10 = (ln 2)/5</span>.</p>'
    },
    {
      id: 't2-2-q029',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.10, 1.7',
      marks: 4,
      stem: '<p>Solve the equation <span class="chem">2^{x + 1} = 3^x</span>, giving your answer in the form <span class="chem">(ln a)/(ln b - ln a)</span>, where <span class="chem">a, b ∈ ℤ^+</span>.</p>',
      answer: 1.7095112914,
      exact: true,
      answerInput: 'ln(2)/(ln(3)-ln(2))',
      hints: [
        'The two sides have different bases, so take natural logs of both sides and bring the powers down.',
        '<span class="chem">(x + 1) ln 2 = x ln 3</span>. Collect the <span class="chem">x</span> terms on one side and factorise.'
      ],
      solution: '<p>Taking natural logs: <span class="chem">(x + 1) ln 2 = x ln 3 => ln 2 = x ln 3 - x ln 2 = x(ln 3 - ln 2)</span>, so <span class="chem">x = (ln 2)/(ln 3 - ln 2)</span> (<span class="chem">≈ 1.71</span>).</p>'
    },
    {
      id: 't2-2-q030',
      type: 'short',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.6',
      marks: 8,
      stem: '<p>A farmer has <span class="chem">40</span> m of fencing to make a rectangular pen against a straight stone wall. The wall forms one long side of the pen, so fencing is needed for the other three sides only. The two sides perpendicular to the wall each have length <span class="chem">x</span> m.<br>(a) Show that the area of the pen is <span class="chem">A = 40x - 2x^2</span> square metres. <strong>[2 marks]</strong><br>(b) Write <span class="chem">A</span> in the form <span class="chem">a(x - h)^2 + k</span>. <strong>[2 marks]</strong><br>(c) Write down the largest possible area if the wall is long enough. <strong>[1 mark]</strong><br>(d) The wall is only <span class="chem">16</span> m long, and the side parallel to the wall cannot be longer than the wall. Find the largest possible area of the pen in this case. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) The side parallel to the wall is <span class="chem">40 - 2x</span>, so <span class="chem">A = x(40 - 2x) = 40x - 2x^2</span>; (b) <span class="chem">A = -2(x - 10)^2 + 200</span>; (c) <span class="chem">200</span> m²; (d) <span class="chem">192</span> m² (when <span class="chem">x = 12</span>).</p>',
      markscheme: [
        'M1: The side parallel to the wall has length 40 − 2x.',
        'A1: A = x(40 − 2x) = 40x − 2x². AG: the given line itself earns no mark.',
        'M1: Factorises −2(x² − 20x) and completes the square: −2[(x − 10)² − 100].',
        'A1: A = −2(x − 10)² + 200.',
        'A1: 200 m².',
        'M1: Writes the condition 40 − 2x ≤ 16 ⇒ x ≥ 12.',
        'R1: A is decreasing for x > 10 (right of the vertex), so on x ≥ 12 the maximum is at x = 12.',
        'A1: A = 12 × 16 = 192 m².'
      ],
      hints: [
        'Decode: this is a quadratic maximum problem with a hidden restriction. The wall length limits the side parallel to the wall, which changes the domain of <span class="chem">x</span>, so the vertex may no longer be allowed.',
        'The three fenced sides are <span class="chem">x</span>, <span class="chem">x</span> and <span class="chem">40 - 2x</span>. Multiply two adjacent sides for the area.',
        'In (d), turn "the side parallel to the wall is at most <span class="chem">16</span> m" into an inequality for <span class="chem">x</span>. Is the vertex <span class="chem">x = 10</span> inside the allowed set?',
        'If the vertex is outside the allowed interval, the maximum of a parabola on that interval is at the end-point nearest to the vertex.'
      ],
      solution: '<p><strong>Decode:</strong> parts (a)–(c) are a standard "maximise a quadratic" problem. Part (d) adds a domain restriction hidden in words: the parallel side <span class="chem">40 - 2x</span> must be at most <span class="chem">16</span>.</p><p>(a) Fencing: <span class="chem">x + x + (40 - 2x) = 40</span>, so the parallel side is <span class="chem">40 - 2x</span> and <span class="chem">A = x(40 - 2x) = 40x - 2x^2</span>.<br>(b) <span class="chem">A = -2(x^2 - 20x) = -2[(x - 10)^2 - 100] = -2(x - 10)^2 + 200</span>.<br>(c) The maximum is <span class="chem">200</span> m² at <span class="chem">x = 10</span>, but then the parallel side is <span class="chem">20</span> m.<br>(d) We need <span class="chem">40 - 2x &lt;= 16 => x &gt;= 12</span> (and <span class="chem">x &lt; 20</span>). The vertex <span class="chem">x = 10</span> is not allowed. For <span class="chem">x &gt; 10</span> the parabola is decreasing, so the largest area is at <span class="chem">x = 12</span>: <span class="chem">A = 12 × 16 = 192</span> m².</p>'
    },
    {
      id: 't2-2-q031',
      type: 'numeric',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.7',
      marks: 5,
      stem: '<p>Consider the equation <span class="chem">kx^2 + 4x + k - 3 = 0</span>, where <span class="chem">k ∈ ℤ</span>. Find the number of integer values of <span class="chem">k</span> for which the equation has two distinct real roots.</p>',
      answer: 3,
      tolerance: 0,
      hints: [
        'Decode: "two distinct real roots" means <span class="chem">Delta &gt; 0</span>, which gives an interval for <span class="chem">k</span>. Then count the integers in it. There is a hidden condition: the equation must really be a quadratic.',
        '<span class="chem">Delta = 16 - 4k(k - 3)</span>. Set <span class="chem">Delta &gt; 0</span> and simplify to a quadratic inequality in <span class="chem">k</span>.',
        'You should get <span class="chem">-1 &lt; k &lt; 4</span>. Now check <span class="chem">k = 0</span> separately: what kind of equation is it then?'
      ],
      solution: '<p><strong>Decode:</strong> two distinct real roots needs a genuine quadratic (<span class="chem">k != 0</span>) with <span class="chem">Delta &gt; 0</span>; then count integers.</p><p><span class="chem">Delta = 16 - 4k(k - 3) &gt; 0 => 4 - k^2 + 3k &gt; 0 => k^2 - 3k - 4 &lt; 0 => (k - 4)(k + 1) &lt; 0 => -1 &lt; k &lt; 4</span>. The integers in this interval are <span class="chem">0, 1, 2, 3</span>. When <span class="chem">k = 0</span> the equation is <span class="chem">4x - 3 = 0</span>, which has only one root, so <span class="chem">k = 0</span> is rejected. That leaves <span class="chem">k = 1, 2, 3</span>: <strong>3</strong> values.</p>'
    },
    {
      id: 't2-2-q032',
      type: 'short',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.8',
      marks: 7,
      stem: '<p>A small café has fixed costs of <span class="chem">$300</span> per day (rent, wages and power). Each cup of coffee it sells costs an extra <span class="chem">$2</span> in ingredients. The average cost per cup on a day when <span class="chem">n</span> cups are sold is <span class="chem">C(n)</span> dollars, where <span class="chem">n</span> is a positive integer.<br>(a) Show that <span class="chem">C(n) = (2n + 300)/n</span>, and write this in the form <span class="chem">C(n) = a + b/n</span>. <strong>[2 marks]</strong><br>(b) Find the least number of cups the café must sell in a day for the average cost per cup to be at most <span class="chem">$2.40</span>. <strong>[3 marks]</strong><br>(c) Write down the equation of the horizontal asymptote of the graph of <span class="chem">C</span>, and explain what it means for the café. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) Total cost <span class="chem">300 + 2n</span> divided by <span class="chem">n</span> cups: <span class="chem">C(n) = (2n + 300)/n = 2 + 300/n</span>; (b) <span class="chem">750</span> cups; (c) <span class="chem">C = 2</span>: however many cups are sold, the average cost per cup stays above <span class="chem">$2</span> and gets closer to it, because the fixed cost is shared over more cups.</p>',
      markscheme: [
        'M1: Total daily cost = 300 + 2n, and average cost = total cost ÷ n. AG: C(n) = (2n + 300)/n; the given line itself earns no mark.',
        'A1: C(n) = 2 + 300/n.',
        'M1: Sets up 2 + 300/n ≤ 2.40.',
        'A1: 300/n ≤ 0.4 ⇒ n ≥ 750 (multiplying by n is safe because n > 0).',
        'A1: Least number of cups is 750.',
        'A1: Horizontal asymptote C = 2.',
        'R1: Interpretation: as n grows, the fixed $300 is shared over more cups, so the average cost approaches (but never reaches) the $2 ingredient cost.'
      ],
      hints: [
        'Decode: "average cost per cup" means total cost divided by the number of cups. This builds a rational function <span class="chem">(ax + b)/(cx + d)</span> with <span class="chem">c = 1</span>, <span class="chem">d = 0</span>.',
        'The total cost on a day with <span class="chem">n</span> cups is the fixed cost plus <span class="chem">$2</span> for each cup.',
        'For (b), "at most" means <span class="chem">&lt;=</span>. Since <span class="chem">n &gt; 0</span>, you may multiply both sides by <span class="chem">n</span> without reversing the inequality.'
      ],
      solution: '<p><strong>Decode:</strong> average cost = total cost ÷ number of cups, which gives a reciprocal-type model; "at most" gives an inequality; the long-run behaviour is the horizontal asymptote.</p><p>(a) Total cost <span class="chem">= 300 + 2n</span>, so <span class="chem">C(n) = (2n + 300)/n = 2 + 300/n</span>.<br>(b) <span class="chem">2 + 300/n &lt;= 2.4 => 300/n &lt;= 0.4 => n &gt;= 300/0.4 = 750</span>. The least number of cups is <span class="chem">750</span>.<br>(c) As <span class="chem">n -&gt; infty</span>, <span class="chem">300/n -&gt; 0</span>, so the asymptote is <span class="chem">C = 2</span>. The average cost per cup gets closer and closer to the <span class="chem">$2</span> ingredient cost but never reaches it, because some of the fixed cost is always included.</p>'
    },
    {
      id: 't2-2-q033',
      type: 'numeric',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.9, 2.5',
      marks: 4,
      stem: '<p>The graph of <span class="chem">y = a^x</span>, where <span class="chem">a &gt; 0</span>, passes through the point <span class="chem">(3/2, 8)</span>. The point <span class="chem">(k, 2)</span> lies on the graph of the inverse function. Find the value of <span class="chem">k</span>.</p>',
      answer: 16,
      tolerance: 0,
      hints: [
        'Decode: two separate facts. First use the given point to find the base <span class="chem">a</span>. Then remember that a point <span class="chem">(p, q)</span> on an inverse graph corresponds to <span class="chem">(q, p)</span> on the original graph.',
        'Solve <span class="chem">a^{3/2} = 8</span> by raising both sides to the power <span class="chem">2/3</span>.',
        'If <span class="chem">(k, 2)</span> is on the inverse, then <span class="chem">(2, k)</span> is on <span class="chem">y = a^x</span>.'
      ],
      solution: '<p><strong>Decode:</strong> find the base from the point, then swap coordinates to move between the graph and its inverse.</p><p><span class="chem">a^{3/2} = 8 => a = 8^{2/3} = (8^{1/3})^2 = 4</span>. The inverse of <span class="chem">y = 4^x</span> is <span class="chem">y = log_4 x</span>. Since <span class="chem">(k, 2)</span> lies on it, <span class="chem">log_4 k = 2 => k = 4^2 = 16</span>. (Equivalently, <span class="chem">(2, k)</span> lies on <span class="chem">y = 4^x</span>, so <span class="chem">k = 16</span>.)</p>'
    },
    {
      id: 't2-2-q034',
      type: 'numeric',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 1.7, 2.10',
      marks: 5,
      stem: '<p>Solve the equation <span class="chem">log_3 x = log_9(x + 6)</span>.</p>',
      answer: 3,
      tolerance: 0,
      hints: [
        'Decode: the logarithms have different bases (<span class="chem">3</span> and <span class="chem">9 = 3^2</span>). Change them to the same base, solve the quadratic that appears, then check each root against the domain.',
        'Change of base: <span class="chem">log_9(x + 6) = log_3(x + 6)/log_3 9 = (1/2) log_3(x + 6)</span>.',
        'You should reach <span class="chem">x^2 = x + 6</span>. Which root makes <span class="chem">log_3 x</span> undefined?'
      ],
      solution: '<p><strong>Decode:</strong> a "same base" problem in disguise, followed by a domain check (<span class="chem">x &gt; 0</span> and <span class="chem">x + 6 &gt; 0</span>).</p><p><span class="chem">log_9(x + 6) = (1/2) log_3(x + 6)</span>, so <span class="chem">2 log_3 x = log_3(x + 6) => log_3 x^2 = log_3(x + 6) => x^2 = x + 6 => (x - 3)(x + 2) = 0</span>. The root <span class="chem">x = -2</span> is rejected because <span class="chem">log_3(-2)</span> is undefined. So <span class="chem">x = 3</span>. Check: <span class="chem">log_3 3 = 1</span> and <span class="chem">log_9 9 = 1</span>.</p>'
    },
    {
      id: 't2-2-q035',
      type: 'short',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.8',
      marks: 7,
      stem: '<p>A tank holds <span class="chem">50</span> litres of water in which <span class="chem">2</span> kg of salt is dissolved. Starting at <span class="chem">t = 0</span>, salt water containing <span class="chem">0.3</span> kg of salt per litre is pumped into the tank at <span class="chem">4</span> litres per minute. Nothing leaves the tank, and the mixture stays evenly mixed. The tank can hold at most <span class="chem">200</span> litres.<br>(a) Show that the concentration of salt, in kg per litre, after <span class="chem">t</span> minutes is <span class="chem">C(t) = (2 + 1.2t)/(50 + 4t)</span>. <strong>[2 marks]</strong><br>(b) Write down the equation of the horizontal asymptote of the graph of <span class="chem">C</span>, and explain its meaning in context. <strong>[2 marks]</strong><br>(c) A scientist claims that the concentration will reach <span class="chem">0.25</span> kg per litre before the tank overflows. Determine whether the claim is correct. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) Salt <span class="chem">2 + 0.3(4t) = 2 + 1.2t</span> kg in <span class="chem">50 + 4t</span> litres; (b) <span class="chem">C = 0.3</span>: in the long run the concentration approaches that of the incoming salt water; (c) not correct: <span class="chem">C = 0.25</span> needs <span class="chem">t = 52.5</span> min, but the tank is full at <span class="chem">t = 37.5</span> min (when <span class="chem">C = 0.235</span>).</p>',
      markscheme: [
        'M1: Salt after t minutes = 2 + 0.3 × 4t = 2 + 1.2t kg; volume = 50 + 4t litres.',
        'A1: Concentration = salt ÷ volume. AG: C(t) = (2 + 1.2t)/(50 + 4t); the given line itself earns no mark.',
        'A1: Horizontal asymptote C = 1.2/4 = 0.3.',
        'R1: The concentration approaches (but does not reach) 0.3 kg/L, the concentration of the incoming salt water.',
        'M1: Finds the time to fill: 50 + 4t = 200 ⇒ t = 37.5 minutes.',
        'A1: Solves C(t) = 0.25: 2 + 1.2t = 12.5 + t ⇒ t = 52.5 minutes (or finds C(37.5) = 47/200 = 0.235).',
        'R1: Since 52.5 > 37.5 (or 0.235 < 0.25), the tank overflows first, so the claim is not correct.'
      ],
      hints: [
        'Decode: concentration = mass of salt ÷ volume of liquid, and both grow linearly with <span class="chem">t</span>. That is a rational function <span class="chem">(at + b)/(ct + d)</span>. The capacity of <span class="chem">200</span> litres is a hidden domain restriction.',
        'Each minute <span class="chem">4</span> litres arrive, carrying <span class="chem">4 × 0.3 = 1.2</span> kg of salt.',
        'For (c), compare two times: when the tank is full, and when <span class="chem">C(t) = 0.25</span>.'
      ],
      solution: '<p><strong>Decode:</strong> build a linear-over-linear model, read its asymptote, then test the claim against the domain <span class="chem">0 &lt;= t &lt;= 37.5</span> set by the tank capacity.</p><p>(a) After <span class="chem">t</span> minutes the salt is <span class="chem">2 + 0.3 × 4t = 2 + 1.2t</span> kg and the volume is <span class="chem">50 + 4t</span> L, so <span class="chem">C(t) = (2 + 1.2t)/(50 + 4t)</span>.<br>(b) Horizontal asymptote <span class="chem">C = 1.2/4 = 0.3</span>: the mixture becomes more and more like the incoming salt water.<br>(c) The tank is full when <span class="chem">50 + 4t = 200 => t = 37.5</span> min. Solving <span class="chem">C(t) = 0.25</span>: <span class="chem">2 + 1.2t = 0.25(50 + 4t) = 12.5 + t => 0.2t = 10.5 => t = 52.5</span> min. This is after the tank overflows (at <span class="chem">t = 37.5</span>, <span class="chem">C = 47/200 = 0.235</span>), so the claim is <strong>not</strong> correct.</p>'
    },
    {
      id: 't2-2-q036',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.6, 2.7',
      marks: 3,
      stem: '<p>A ball is thrown upwards from a balcony. Its height above the ground, in metres, <span class="chem">t</span> seconds after it is thrown is modelled by <span class="chem">h(t) = -4.9t^2 + 12.5t + 1.6</span>, for <span class="chem">t &gt;= 0</span>. Find the time at which the ball hits the ground, giving your answer in seconds correct to 3 significant figures.</p>',
      answer: 2.6731714266,
      sigfigs: 3,
      hints: [
        'The ball hits the ground when <span class="chem">h(t) = 0</span>. Use the GDC polynomial solver, or graph <span class="chem">h</span> and find its zero.',
        'You get two roots. One is negative; reject it because <span class="chem">t &gt;= 0</span>.'
      ],
      solution: '<p>Solving <span class="chem">-4.9t^2 + 12.5t + 1.6 = 0</span> on the GDC gives <span class="chem">t ≈ -0.122</span> or <span class="chem">t ≈ 2.6732</span>. Since <span class="chem">t &gt;= 0</span>, the ball lands at <span class="chem">t = 2.67</span> s (3 s.f.).</p>'
    },
    {
      id: 't2-2-q037',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.7',
      marks: 3,
      stem: '<p>A rectangular vegetable garden is <span class="chem">3.5</span> m longer than it is wide. Its area is <span class="chem">42.6</span> m². Find the width of the garden, giving your answer in metres correct to 3 significant figures.</p>',
      answer: 5.0074033474,
      sigfigs: 3,
      hints: [
        'Decode: let the width be <span class="chem">w</span>; then the length is <span class="chem">w + 3.5</span>. The area condition gives a quadratic equation in <span class="chem">w</span>.',
        'Solve <span class="chem">w^2 + 3.5w - 42.6 = 0</span> with the GDC and keep only the root that makes sense for a length.'
      ],
      solution: '<p><span class="chem">w(w + 3.5) = 42.6 => w^2 + 3.5w - 42.6 = 0</span>. The GDC gives <span class="chem">w ≈ 5.0074</span> or <span class="chem">w ≈ -8.51</span>. A width must be positive, so <span class="chem">w = 5.01</span> m (3 s.f.). Note that <span class="chem">5.00</span> would be wrong: check <span class="chem">5 × 8.5 = 42.5 != 42.6</span>.</p>'
    },
    {
      id: 't2-2-q038',
      type: 'short',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.6, 2.10',
      marks: 8,
      stem: '<p>The underside of a footbridge arch is modelled by <span class="chem">h(x) = ax^2 + bx + c</span>, where <span class="chem">h</span> is the height in metres above the water and <span class="chem">x</span> is the horizontal distance in metres from a marker post at the water&#8217;s edge. Three measurements are taken.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"><span class="chem">x</span> (m)</th><td>0</td><td>4</td><td>10</td></tr></thead><tbody><tr><th scope="row"><span class="chem">h</span> (m)</th><td>1.2</td><td>6.8</td><td>6.0</td></tr></tbody></table></div><p>(a) Find the values of <span class="chem">a</span>, <span class="chem">b</span> and <span class="chem">c</span>. <strong>[3 marks]</strong><br>(b) Find the maximum height of the arch above the water. <strong>[2 marks]</strong><br>(c) A boat with a mast needs at least <span class="chem">5</span> m of headroom. Find the width of the part of the river, measured horizontally, in which the arch is at least <span class="chem">5</span> m above the water. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">a = -0.153</span>, <span class="chem">b = 2.01</span>, <span class="chem">c = 1.2</span> (exactly <span class="chem">-23/150</span>, <span class="chem">151/75</span>, <span class="chem">6/5</span>); (b) <span class="chem">7.81</span> m (at <span class="chem">x ≈ 6.57</span>); (c) <span class="chem">8.56</span> m (from <span class="chem">x ≈ 2.29</span> to <span class="chem">x ≈ 10.8</span>).</p>',
      markscheme: [
        'M1: Uses h(0) = 1.2 to get c = 1.2, and substitutes the other two points: 16a + 4b + 1.2 = 6.8 and 100a + 10b + 1.2 = 6.0.',
        'A1: a = −0.153 (−23/150 = −0.15333…).',
        'A1: b = 2.01 (151/75 = 2.01333…) and c = 1.2.',
        'M1: Uses the vertex x = −b/(2a) ≈ 6.57, or the GDC maximum.',
        'A1: Maximum height 7.81 m.',
        'M1: Solves h(x) = 5 (GDC intersection of y = h(x) and y = 5).',
        'A1: x ≈ 2.29 and x ≈ 10.8.',
        'A1: Width 10.845 − 2.285 = 8.56 m.'
      ],
      hints: [
        'Decode: each data point gives one equation in <span class="chem">a, b, c</span>. The measurement at <span class="chem">x = 0</span> gives <span class="chem">c</span> straight away, so the other two points leave two linear equations in <span class="chem">a</span> and <span class="chem">b</span>.',
        'Keep the full GDC values of <span class="chem">a, b, c</span> stored for later parts; rounding them early changes the third figure.',
        'For (c), graph <span class="chem">y = h(x)</span> and <span class="chem">y = 5</span> and find both intersections. The width is the distance between them.'
      ],
      solution: '<p>(a) <span class="chem">h(0) = c = 1.2</span>. The other two points give <span class="chem">16a + 4b + 1.2 = 6.8</span> and <span class="chem">100a + 10b + 1.2 = 6.0</span>, that is <span class="chem">4a + b = 1.4</span> and <span class="chem">10a + b = 0.48</span>. Subtracting: <span class="chem">6a = -0.92</span>, so <span class="chem">a = -0.153333... = -23/150</span> and <span class="chem">b = 1.4 - 4a = 2.013333... = 151/75</span>. So <span class="chem">a = -0.153</span>, <span class="chem">b = 2.01</span>, <span class="chem">c = 1.2</span>.<br>(b) The vertex is at <span class="chem">x = -b/(2a) ≈ 6.565</span>, and <span class="chem">h(6.565) ≈ 7.8090</span>, so the maximum height is <span class="chem">7.81</span> m.<br>(c) <span class="chem">h(x) = 5</span> at <span class="chem">x ≈ 2.2851</span> and <span class="chem">x ≈ 10.8453</span>. The arch is at least <span class="chem">5</span> m high between these, a width of <span class="chem">10.8453 - 2.2851 ≈ 8.56</span> m.</p>'
    },
    {
      id: 't2-2-q039',
      type: 'short',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.7',
      marks: 3,
      stem: '<p>Solve the inequality <span class="chem">2.4x^2 - 3.1x - 5.6 &gt; 0</span>, giving the boundary values correct to 3 significant figures.</p>',
      answer: '<p><span class="chem">x &lt; -1.01</span> or <span class="chem">x &gt; 2.30</span></p>',
      markscheme: [
        'M1: Finds the roots of 2.4x² − 3.1x − 5.6 = 0 (GDC solver or quadratic formula).',
        'A1: Roots x ≈ −1.0126 and x ≈ 2.3043.',
        'A1: x < −1.01 or x > 2.30 (outside the roots, strict inequalities).'
      ],
      hints: [
        'Find where the quadratic equals zero first, using the GDC.',
        'The parabola opens upwards (<span class="chem">a = 2.4 &gt; 0</span>), so it is positive outside the two roots.'
      ],
      solution: '<p>The GDC gives the roots <span class="chem">x ≈ -1.0126</span> and <span class="chem">x ≈ 2.3043</span>. Since the leading coefficient is positive, the expression is positive outside the roots: <span class="chem">x &lt; -1.01</span> or <span class="chem">x &gt; 2.30</span>.</p>'
    },
    {
      id: 't2-2-q040',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.6',
      marks: 5,
      stem: '<p>A cinema finds that when the ticket price is <span class="chem">$8</span>, it sells <span class="chem">540</span> tickets a week, and when the price is <span class="chem">$14</span>, it sells <span class="chem">330</span> tickets a week. It models the number of tickets sold, <span class="chem">N</span>, as a linear function of the price <span class="chem">p</span> dollars. The weekly revenue is <span class="chem">R = pN</span>. Find the maximum weekly revenue predicted by the model, in dollars correct to 2 decimal places.</p>',
      answer: 4802.8571428571,
      dp: 2,
      hints: [
        'Decode: two (price, tickets) data points give a straight line <span class="chem">N = mp + c</span>. Revenue is price times tickets, so <span class="chem">R</span> is a quadratic in <span class="chem">p</span>, and you need its maximum.',
        'The gradient is <span class="chem">(330 - 540)/(14 - 8) = -35</span>. Find <span class="chem">c</span>, then write <span class="chem">R(p) = p(c - 35p)</span>.',
        'Find the vertex of <span class="chem">R</span> with <span class="chem">p = -b/(2a)</span> or with the GDC maximum. Do not round <span class="chem">p</span> before you work out <span class="chem">R</span>.'
      ],
      solution: '<p><strong>Decode:</strong> linear demand from two points, then maximise a quadratic revenue.</p><p>Gradient <span class="chem">m = (330 - 540)/(14 - 8) = -35</span>, so <span class="chem">N = 540 - 35(p - 8) = 820 - 35p</span>. Then <span class="chem">R(p) = p(820 - 35p) = 820p - 35p^2</span>. The vertex is at <span class="chem">p = 820/70 ≈ 11.714</span>, and <span class="chem">R_{max} = 820^2/140 ≈ 4802.857</span>. The maximum weekly revenue is <span class="chem">$4802.86</span>.</p>'
    },
    {
      id: 't2-2-q041',
      type: 'short',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.6',
      marks: 6,
      stem: '<p>A player throws a ball towards a fence. The path of the ball is modelled by <span class="chem">h(x) = -0.045x^2 + 0.62x + 1.8</span>, where <span class="chem">h</span> is the height in metres and <span class="chem">x</span> is the horizontal distance in metres from the player, for <span class="chem">h &gt;= 0</span>.<br>(a) Find the maximum height reached by the ball. <strong>[2 marks]</strong><br>(b) The fence is <span class="chem">3.8</span> m tall and stands <span class="chem">9</span> m from the player. Determine whether the ball passes over the fence. <strong>[2 marks]</strong><br>(c) The fence is then taken down. Find the horizontal distance from the player to the point where the ball lands. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">3.94</span> m; (b) <span class="chem">h(9) = 3.735 &lt; 3.8</span>, so the ball does <strong>not</strong> pass over the fence (it hits it); (c) <span class="chem">16.2</span> m.</p>',
      markscheme: [
        'M1: Uses x = −b/(2a) = 0.62/0.09 ≈ 6.89, or the GDC maximum.',
        'A1: Maximum height 3.94 m (3.9356…).',
        'M1: Evaluates the height at the fence: h(9) = 3.735.',
        'R1: Since 3.735 < 3.8, the ball does not pass over the fence.',
        'M1: Solves h(x) = 0 and rejects the negative root (x ≈ −2.46).',
        'A1: x = 16.2 m (16.240…).'
      ],
      hints: [
        'Decode: "passes over the fence" is about the height of the ball when it is above the fence (at <span class="chem">x = 9</span>), not about its maximum height. A maximum above <span class="chem">3.8</span> m does not prove anything.',
        'For (a), the vertex is at <span class="chem">x = -b/(2a)</span>; or use the GDC maximum.',
        'For (b), compare <span class="chem">h(9)</span> with <span class="chem">3.8</span>. For (c), solve <span class="chem">h(x) = 0</span> and keep the positive root.'
      ],
      solution: '<p><strong>Decode:</strong> (b) asks for the height at a given <span class="chem">x</span>, not the maximum height. The maximum (3.94 m) is above 3.8 m, but it happens at <span class="chem">x ≈ 6.89</span>, before the fence.</p><p>(a) <span class="chem">x = 0.62/(2 × 0.045) ≈ 6.889</span>, <span class="chem">h(6.889) ≈ 3.9356</span>, so the maximum height is <span class="chem">3.94</span> m.<br>(b) <span class="chem">h(9) = -0.045(81) + 0.62(9) + 1.8 = -3.645 + 5.58 + 1.8 = 3.735</span> m. This is less than <span class="chem">3.8</span> m, so the ball hits the fence and does not pass over it.<br>(c) <span class="chem">h(x) = 0</span> gives <span class="chem">x ≈ -2.46</span> or <span class="chem">x ≈ 16.24</span>. The ball lands <span class="chem">16.2</span> m from the player.</p>'
    },
    {
      id: 't2-2-q042',
      type: 'numeric',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.6',
      marks: 5,
      stem: '<p>A road tunnel has a parabolic cross-section. At road level the tunnel is <span class="chem">18.4</span> m wide, and its highest point is <span class="chem">7.5</span> m above the centre of the road. A truck <span class="chem">3.2</span> m wide drives exactly along the centre of the road. Safety rules require at least <span class="chem">0.3</span> m of clearance between the top corners of the truck and the tunnel roof, measured vertically. Find the maximum height of the truck allowed by these rules, in metres correct to 3 significant figures.</p>',
      answer: 6.9731568998,
      sigfigs: 3,
      hints: [
        'Decode: choose axes yourself. Put the origin on the road at the centre of the tunnel, so the roof is <span class="chem">h(x) = 7.5 - kx^2</span> and the feet are at <span class="chem">x = +-9.2</span>. The truck is centred, so its top corners are at <span class="chem">x = +-1.6</span>, not at <span class="chem">x = 3.2</span>.',
        'Use <span class="chem">h(9.2) = 0</span> to find <span class="chem">k</span>.',
        'Find the roof height at <span class="chem">x = 1.6</span>, then subtract the <span class="chem">0.3</span> m clearance.'
      ],
      solution: '<p><strong>Decode:</strong> set up a symmetric model; a centred truck of width <span class="chem">3.2</span> m has corners <span class="chem">1.6</span> m either side of the centre; "clearance" means subtract <span class="chem">0.3</span> m.</p><p>With the origin at the centre of the road, <span class="chem">h(x) = 7.5 - kx^2</span>. Since <span class="chem">h(9.2) = 0</span>, <span class="chem">k = 7.5/9.2^2 = 7.5/84.64 ≈ 0.08861</span>. At the corners, <span class="chem">h(1.6) = 7.5 - 0.08861 × 2.56 ≈ 7.2732</span> m. The maximum truck height is <span class="chem">7.2732 - 0.3 ≈ 6.97</span> m.</p>'
    },
    {
      id: 't2-2-q043',
      type: 'short',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.6, 2.7',
      marks: 8,
      stem: '<p>A workshop makes garden chairs. Its weekly profit is modelled by <span class="chem">P(x) = -0.8x^2 + 46x - 380</span>, where <span class="chem">P</span> is the profit in <strong>thousands</strong> of dollars and <span class="chem">x</span> is the number of chairs made in <strong>hundreds</strong>, for <span class="chem">0 &lt;= x &lt;= 55</span>.<br>(a) Find the two values of <span class="chem">x</span> at which the workshop breaks even. <strong>[2 marks]</strong><br>(b) Find the maximum weekly profit in dollars, and the number of chairs needed to earn it. <strong>[3 marks]</strong><br>(c) The owners want a weekly profit of at least <span class="chem">$200 000</span>. Find the least and greatest number of chairs they can make in a week to achieve this. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">x = 10</span> and <span class="chem">x = 47.5</span>; (b) <span class="chem">$281 250</span> from <span class="chem">2875</span> chairs; (c) from <span class="chem">1868</span> to <span class="chem">3882</span> chairs.</p>',
      markscheme: [
        'M1: Solves P(x) = 0 (GDC or formula).',
        'A1: x = 10 and x = 47.5 (1000 and 4750 chairs).',
        'M1: Finds the vertex x = 46/1.6 = 28.75 (or GDC maximum).',
        'A1: Maximum profit P = 281.25, i.e. $281 250.',
        'A1: 2875 chairs.',
        'M1: Sets P(x) ≥ 200 (profit in thousands) and solves −0.8x² + 46x − 580 = 0.',
        'A1: x ≈ 18.672 and x ≈ 38.828.',
        'A1: Converts to whole chairs: least 1868, greatest 3882.'
      ],
      hints: [
        'Decode: watch the units. <span class="chem">P</span> is in thousands of dollars and <span class="chem">x</span> in hundreds of chairs, so "$200 000" means <span class="chem">P = 200</span>, and a value such as <span class="chem">x = 18.67</span> means <span class="chem">1867.2</span> chairs. Chairs come in whole numbers.',
        '"Breaks even" means zero profit: solve <span class="chem">P(x) = 0</span>.',
        'For (c), solve <span class="chem">P(x) = 200</span> with the GDC. The parabola opens downwards, so <span class="chem">P &gt;= 200</span> between the roots. Then round inwards to whole chairs.'
      ],
      solution: '<p><strong>Decode:</strong> convert both units before and after using the model, and remember that the number of chairs is a whole number.</p><p>(a) <span class="chem">-0.8x^2 + 46x - 380 = 0 => x = 10</span> or <span class="chem">x = 47.5</span>.<br>(b) The vertex is at <span class="chem">x = -46/(2 × (-0.8)) = 28.75</span>, with <span class="chem">P(28.75) = 281.25</span>. So the maximum profit is <span class="chem">$281 250</span>, from <span class="chem">2875</span> chairs.<br>(c) <span class="chem">P(x) &gt;= 200 => -0.8x^2 + 46x - 580 &gt;= 0</span>. The GDC gives roots <span class="chem">x ≈ 18.672</span> and <span class="chem">x ≈ 38.828</span>, and the profit is at least <span class="chem">200</span> between them. In chairs: <span class="chem">1867.2 &lt;= n &lt;= 3882.8</span>, so the least number is <span class="chem">1868</span> and the greatest is <span class="chem">3882</span>.</p>'
    },
    {
      id: 't2-2-q044',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.9',
      marks: 5,
      stem: '<p>A cup of tea is left to cool in a room kept at <span class="chem">20</span> °C. Its temperature <span class="chem">t</span> minutes later is modelled by <span class="chem">T(t) = 20 + A e^{-kt}</span>. The tea is at <span class="chem">88</span> °C when <span class="chem">t = 0</span> and at <span class="chem">61</span> °C when <span class="chem">t = 6</span>. Find the time it takes for the tea to cool to <span class="chem">35</span> °C, in minutes correct to 3 significant figures.</p>',
      answer: 17.9247009597,
      sigfigs: 3,
      hints: [
        'Decode: two unknowns, two data points. <span class="chem">t = 0</span> gives <span class="chem">A</span> at once (since <span class="chem">e^0 = 1</span>); <span class="chem">t = 6</span> then gives <span class="chem">k</span>.',
        'You should find <span class="chem">A = 68</span> and <span class="chem">e^{-6k} = 41/68</span>.',
        'Solve <span class="chem">20 + 68 e^{-kt} = 35</span> using logs, or graph <span class="chem">y = T(t)</span> and <span class="chem">y = 35</span>.'
      ],
      solution: '<p><span class="chem">T(0) = 20 + A = 88 => A = 68</span>. Then <span class="chem">20 + 68 e^{-6k} = 61 => e^{-6k} = 41/68 => k = (1/6) ln(68/41) ≈ 0.084323</span>. For <span class="chem">T = 35</span>: <span class="chem">68 e^{-kt} = 15 => t = ln(68/15)/k ≈ 17.925</span>, so <span class="chem">t = 17.9</span> minutes.</p>'
    },
    {
      id: 't2-2-q045',
      type: 'numeric',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.9',
      marks: 5,
      stem: '<p>The number of wild ponies in a national park is counted on 1 January each year. The count was <span class="chem">3400</span> in 2015 and <span class="chem">4150</span> in 2020. The rangers model the count with <span class="chem">P = 3400 b^t</span>, where <span class="chem">t</span> is the number of years after 2015. Use the model to find the first year in which the count is greater than <span class="chem">6000</span>.</p>',
      answer: 2030,
      tolerance: 0,
      hints: [
        'Decode: the 2020 count fixes the growth factor <span class="chem">b</span>; then solve <span class="chem">P &gt; 6000</span> for <span class="chem">t</span>. The question asks for a calendar year, and counts happen only at whole values of <span class="chem">t</span>.',
        '<span class="chem">3400 b^5 = 4150 => b = (4150/3400)^{1/5} ≈ 1.04067</span>.',
        'Solving <span class="chem">3400 b^t = 6000</span> gives a non-integer <span class="chem">t</span>. The count first exceeds 6000 at the next whole <span class="chem">t</span>; check <span class="chem">P</span> at the integers on either side.'
      ],
      solution: '<p><strong>Decode:</strong> fit <span class="chem">b</span> from the second data point, solve the inequality, then turn <span class="chem">t</span> into a whole year.</p><p><span class="chem">b^5 = 4150/3400 => b ≈ 1.040672</span>. <span class="chem">3400 b^t = 6000 => t = ln(6000/3400)/ln b ≈ 14.25</span>. Check: <span class="chem">P(14) ≈ 5941 &lt; 6000</span> and <span class="chem">P(15) ≈ 6183 &gt; 6000</span>. So the first count above 6000 is at <span class="chem">t = 15</span>, in the year <span class="chem">2030</span>.</p>'
    },
    {
      id: 't2-2-q046',
      type: 'numeric',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.9',
      marks: 4,
      stem: '<p>After a single dose, a patient\'s body removes <span class="chem">30%</span> of a drug every <span class="chem">4</span> hours: in any 4-hour period, the amount present at the start falls by 30%. Assuming the amount decreases continuously according to this exponential pattern, find how long after the dose the amount first falls below <span class="chem">10%</span> of the original dose. Give your answer in hours correct to 3 significant figures.</p>',
      answer: 25.8227849433,
      sigfigs: 3,
      hints: [
        'Decode: "removes 30%" means <span class="chem">70%</span> remains, so the growth factor for one 4-hour period is <span class="chem">0.7</span>. The model is <span class="chem">M(t) = M_0 (0.7)^{t/4}</span>. The size of the dose is not needed, because you compare with a percentage of it.',
        'Solve <span class="chem">(0.7)^{t/4} = 0.1</span>, by logs or by GDC intersection.'
      ],
      solution: '<p><strong>Decode:</strong> a 30% decrease per 4 hours is a factor of <span class="chem">0.7</span> per 4 hours; "10% of the dose" means <span class="chem">M = 0.1 M_0</span>, so <span class="chem">M_0</span> cancels.</p><p><span class="chem">M_0 (0.7)^{t/4} = 0.1 M_0 => (t/4) ln 0.7 = ln 0.1 => t = 4 ln 0.1/ln 0.7 ≈ 25.82</span>. So the amount first falls below 10% after about <span class="chem">25.8</span> hours.</p>'
    },
    {
      id: 't2-2-q047',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.9',
      marks: 4,
      stem: '<p>The loudness <span class="chem">L</span> decibels of a sound of intensity <span class="chem">I</span> (in watts per square metre) is given by <span class="chem">L = 10 log_{10}(I/10^{-12})</span>. A rock concert has a loudness of <span class="chem">108</span> dB and a busy street has a loudness of <span class="chem">74</span> dB. Find how many times greater the intensity of the concert is than the intensity of the street, correct to 3 significant figures.</p>',
      answer: 2511.8864315096,
      sigfigs: 3,
      hints: [
        'Decode: you need the ratio <span class="chem">I_{concert}/I_{street}</span>, not the difference in decibels.',
        'Make <span class="chem">I</span> the subject: <span class="chem">I = 10^{-12} × 10^{L/10}</span>. Divide one intensity by the other; the <span class="chem">10^{-12}</span> cancels.'
      ],
      solution: '<p><span class="chem">L = 10 log_{10}(I/10^{-12}) => I = 10^{-12} × 10^{L/10}</span>. So <span class="chem">I_{concert}/I_{street} = 10^{10.8}/10^{7.4} = 10^{3.4} ≈ 2511.9</span>. The concert is about <span class="chem">2510</span> times as intense.</p>'
    },
    {
      id: 't2-2-q048',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.9',
      marks: 5,
      stem: '<p>A phone battery is charged from empty. Its charge, as a percentage of full charge, <span class="chem">t</span> minutes after charging starts is modelled by <span class="chem">C(t) = 100(1 - e^{-kt})</span>. The battery reaches <span class="chem">60%</span> after <span class="chem">25</span> minutes. Find how many <strong>more</strong> minutes it takes to go from <span class="chem">60%</span> to <span class="chem">95%</span>, correct to 3 significant figures.</p>',
      answer: 56.7353098025,
      sigfigs: 3,
      hints: [
        'Decode: use the 25-minute data point to find <span class="chem">k</span>, find the time at which <span class="chem">C = 95</span>, then subtract <span class="chem">25</span>: the question asks for the extra time.',
        '<span class="chem">100(1 - e^{-25k}) = 60 => e^{-25k} = 0.4</span>.',
        'For <span class="chem">95%</span>: <span class="chem">e^{-kt} = 0.05</span>.'
      ],
      solution: '<p><span class="chem">e^{-25k} = 0.4 => k = -ln(0.4)/25 ≈ 0.036652</span>. For <span class="chem">C = 95</span>: <span class="chem">e^{-kt} = 0.05 => t = -ln(0.05)/k ≈ 81.735</span> minutes. The extra time is <span class="chem">81.735 - 25 ≈ 56.7</span> minutes.</p>'
    },
    {
      id: 't2-2-q049',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.9',
      marks: 4,
      stem: '<p>The height <span class="chem">h</span> cm of a seedling <span class="chem">x</span> weeks after planting is modelled by <span class="chem">h(x) = a ln x + b</span>, for <span class="chem">x &gt;= 1</span>. The seedling is <span class="chem">5.1</span> cm tall after 2 weeks and <span class="chem">8.7</span> cm tall after 9 weeks. Find the value of <span class="chem">a</span>, correct to 3 significant figures.</p>',
      answer: 2.3934938506,
      sigfigs: 3,
      hints: [
        'Each data point gives a linear equation in <span class="chem">a</span> and <span class="chem">b</span>: <span class="chem">a ln 2 + b = 5.1</span> and <span class="chem">a ln 9 + b = 8.7</span>.',
        'Subtract to eliminate <span class="chem">b</span>, and use <span class="chem">ln 9 - ln 2 = ln 4.5</span>; or use the GDC simultaneous-equation solver.'
      ],
      solution: '<p><span class="chem">a ln 9 + b = 8.7</span> and <span class="chem">a ln 2 + b = 5.1</span>. Subtracting: <span class="chem">a(ln 9 - ln 2) = 3.6 => a = 3.6/ln 4.5 ≈ 2.3935</span>, so <span class="chem">a = 2.39</span> (and <span class="chem">b ≈ 3.44</span>).</p>'
    },
    {
      id: 't2-2-q050',
      type: 'short',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.9, 2.10',
      marks: 9,
      stem: '<p>Goats are released on an island. Ecologists model the number of goats <span class="chem">t</span> years after release by <span class="chem">P(t) = L/(1 + C e^{-kt})</span>, where <span class="chem">L</span>, <span class="chem">C</span> and <span class="chem">k</span> are positive constants. The island can support at most <span class="chem">5000</span> goats, and the model\'s population approaches this value in the long term. <span class="chem">400</span> goats are released at <span class="chem">t = 0</span>, and there are <span class="chem">1100</span> goats after 3 years.<br>(a) Write down the value of <span class="chem">L</span>, giving a reason. <strong>[2 marks]</strong><br>(b) Show that <span class="chem">C = 11.5</span>. <strong>[2 marks]</strong><br>(c) Find the value of <span class="chem">k</span>. <strong>[3 marks]</strong><br>(d) Find how long it takes for the population to reach <span class="chem">4000</span> goats. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">L = 5000</span>, because <span class="chem">e^{-kt} -&gt; 0</span> so <span class="chem">P -&gt; L</span>; (b) <span class="chem">400 = 5000/(1 + C) => C = 11.5</span>; (c) <span class="chem">k ≈ 0.392</span>; (d) <span class="chem">9.76</span> years.</p>',
      markscheme: [
        'A1: L = 5000.',
        'R1: As t → ∞, e^(−kt) → 0, so P(t) → L; the long-term value is 5000.',
        'M1: Substitutes t = 0: 400 = 5000/(1 + C e⁰) = 5000/(1 + C).',
        'A1: 1 + C = 12.5. AG: C = 11.5; the given line itself earns no mark.',
        'M1: Substitutes t = 3, P = 1100: 1100 = 5000/(1 + 11.5e^(−3k)).',
        'A1: e^(−3k) = (5000/1100 − 1)/11.5 ≈ 0.30830 (or GDC solve).',
        'A1: k ≈ 0.392 (0.39223…).',
        'M1: Solves 4000 = 5000/(1 + 11.5e^(−kt)) (algebraically or by GDC intersection).',
        'A1: t ≈ 9.76 years.'
      ],
      hints: [
        'Decode: this is a logistic-style model. The phrase "approaches this value in the long term" tells you what happens to <span class="chem">P(t)</span> as <span class="chem">t -&gt; infty</span>, which gives <span class="chem">L</span> without any data. The two counts then give <span class="chem">C</span> and <span class="chem">k</span>.',
        'At <span class="chem">t = 0</span>, <span class="chem">e^0 = 1</span>, so <span class="chem">P(0) = L/(1 + C)</span>.',
        'For (c), rearrange <span class="chem">1100 = 5000/(1 + 11.5 e^{-3k})</span> to isolate <span class="chem">e^{-3k}</span>, or solve on the GDC.',
        'Keep the unrounded <span class="chem">k</span> in your GDC for (d).'
      ],
      solution: '<p><strong>Decode:</strong> the long-term limit is the horizontal asymptote of the model, so it gives <span class="chem">L</span>; each data point then fixes one more constant.</p><p>(a) As <span class="chem">t -&gt; infty</span>, <span class="chem">e^{-kt} -&gt; 0</span> so <span class="chem">P(t) -&gt; L</span>. The long-term population is 5000, so <span class="chem">L = 5000</span>.<br>(b) <span class="chem">400 = 5000/(1 + C) => 1 + C = 12.5 => C = 11.5</span>.<br>(c) <span class="chem">1100 = 5000/(1 + 11.5 e^{-3k}) => 1 + 11.5 e^{-3k} = 50/11 => e^{-3k} = (39/11)/11.5 ≈ 0.30830 => k = -ln(0.30830)/3 ≈ 0.392</span>.<br>(d) <span class="chem">4000 = 5000/(1 + 11.5 e^{-kt}) => 11.5 e^{-kt} = 0.25 => t = ln(46)/k ≈ 9.76</span> years.</p>'
    },
    {
      id: 't2-2-q051',
      type: 'numeric',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.9, 2.10',
      marks: 5,
      stem: '<p>At the start of 2025, town A has <span class="chem">12 000</span> residents and town B has <span class="chem">18 500</span>. The population of town A is growing by <span class="chem">2.5%</span> per year, and the population of town B is falling by <span class="chem">1.2%</span> per year. Assuming these rates continue, find the least whole number of years <span class="chem">n</span> after the start of 2025 such that the population of A is greater than the population of B after <span class="chem">n</span> years.</p>',
      answer: 12,
      tolerance: 0,
      hints: [
        'Decode: "growing by 2.5%" gives a factor of <span class="chem">1.025</span> per year; "falling by 1.2%" gives <span class="chem">0.988</span>. You need the first whole <span class="chem">n</span> after the two exponential graphs cross.',
        'Solve <span class="chem">12000(1.025)^n = 18500(0.988)^n</span> by GDC intersection (or by logs).',
        'The crossing value is not a whole number. Round <strong>up</strong>, and check the populations at the integers on either side.'
      ],
      solution: '<p><strong>Decode:</strong> two exponential models with factors <span class="chem">1.025</span> and <span class="chem">0.988</span>; find where <span class="chem">A = B</span>, then the next whole year.</p><p><span class="chem">12000(1.025)^n = 18500(0.988)^n => (1.025/0.988)^n = 18500/12000 => n = ln(18500/12000)/ln(1.025/0.988) ≈ 11.77</span>. Check: after 11 years A ≈ 15 745 and B ≈ 16 199 (B larger); after 12 years A ≈ 16 139 and B ≈ 16 005 (A larger). So <span class="chem">n = 12</span>.</p>'
    },
    {
      id: 't2-2-q052',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.10',
      marks: 3,
      stem: '<p>Find the positive solution of the equation <span class="chem">x^2 - 3 = 2 ln(x + 1)</span>, giving your answer correct to 3 significant figures.</p>',
      answer: 2.3243365112,
      sigfigs: 3,
      hints: [
        'There is no algebraic method for an equation mixing a polynomial and a logarithm. Graph <span class="chem">y = x^2 - 3</span> and <span class="chem">y = 2 ln(x + 1)</span> on the GDC.',
        'There are two intersections. Choose the one with <span class="chem">x &gt; 0</span>.'
      ],
      solution: '<p>Graphing <span class="chem">Y_1 = x^2 - 3</span> and <span class="chem">Y_2 = 2 ln(x + 1)</span> gives intersections at <span class="chem">x ≈ -0.712</span> and <span class="chem">x ≈ 2.3243</span>. The positive solution is <span class="chem">x = 2.32</span> (3 s.f.).</p>'
    },
    {
      id: 't2-2-q053',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.10',
      marks: 3,
      stem: '<p>The equation <span class="chem">2^x = x + 3</span> has two solutions. Find the negative solution, correct to 3 significant figures.</p>',
      answer: -2.8625003712,
      sigfigs: 3,
      hints: [
        'Graph <span class="chem">y = 2^x</span> and <span class="chem">y = x + 3</span>, or find the zeros of <span class="chem">y = 2^x - x - 3</span>.',
        'The line crosses the exponential curve twice. You need the crossing to the left of the <span class="chem">y</span>-axis; your viewing window must include <span class="chem">x = -3</span>.'
      ],
      solution: '<p>The zeros of <span class="chem">2^x - x - 3</span> are <span class="chem">x ≈ -2.8625</span> and <span class="chem">x ≈ 2.4449</span>. The negative solution is <span class="chem">x = -2.86</span> (3 s.f.).</p>'
    },
    {
      id: 't2-2-q054',
      type: 'short',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.10',
      marks: 5,
      stem: '<p>Let <span class="chem">f(x) = ln x</span> and <span class="chem">g(x) = 0.5x - 1</span>, for <span class="chem">x &gt; 0</span>.<br>(a) Find the <span class="chem">x</span>-coordinates of the points where the graphs of <span class="chem">f</span> and <span class="chem">g</span> intersect. <strong>[3 marks]</strong><br>(b) Hence solve the inequality <span class="chem">ln x &gt; 0.5x - 1</span>. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">x ≈ 0.464</span> and <span class="chem">x ≈ 5.36</span>; (b) <span class="chem">0.464 &lt; x &lt; 5.36</span>.</p>',
      markscheme: [
        'M1: Graphs y = ln x and y = 0.5x − 1 (or finds the zeros of ln x − 0.5x + 1) on the GDC.',
        'A1: x ≈ 0.464.',
        'A1: x ≈ 5.36.',
        'M1: Identifies that the logarithm graph lies above the line between the intersections.',
        'A1: 0.464 < x < 5.36.'
      ],
      hints: [
        'Use the GDC intersect tool twice: once near <span class="chem">x = 0.5</span> and once near <span class="chem">x = 5</span>. Choose a window that shows both.',
        'For (b), look at your graph: where is the curve <span class="chem">y = ln x</span> above the line?'
      ],
      solution: '<p>(a) The GDC gives intersections at <span class="chem">x ≈ 0.46392</span> and <span class="chem">x ≈ 5.35669</span>, i.e. <span class="chem">x ≈ 0.464</span> and <span class="chem">x ≈ 5.36</span>.<br>(b) At <span class="chem">x = 1</span>, <span class="chem">ln 1 = 0 &gt; -0.5</span>, so the curve is above the line between the intersections (and below outside them). Hence <span class="chem">0.464 &lt; x &lt; 5.36</span>.</p>'
    },
    {
      id: 't2-2-q055',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.8, 2.10',
      marks: 3,
      stem: '<p>Solve the equation <span class="chem">(2x + 1)/(x - 1) = e^{0.5x}</span> for <span class="chem">x &gt; 1</span>, giving your answer correct to 3 significant figures.</p>',
      answer: 2.6687940569,
      sigfigs: 3,
      hints: [
        'Graph <span class="chem">y = (2x + 1)/(x - 1)</span> and <span class="chem">y = e^{0.5x}</span>. The rational graph has a vertical asymptote at <span class="chem">x = 1</span>, so look to the right of it.',
        'For <span class="chem">x &gt; 1</span> the rational function decreases towards <span class="chem">2</span> while the exponential increases, so there is exactly one intersection there.'
      ],
      solution: '<p>The GDC intersection of <span class="chem">Y_1 = (2x + 1)/(x - 1)</span> and <span class="chem">Y_2 = e^{0.5x}</span> on <span class="chem">x &gt; 1</span> is at <span class="chem">x ≈ 2.6688</span>, so <span class="chem">x = 2.67</span>. (There is another intersection with <span class="chem">x &lt; 1</span>, which the question excludes.)</p>'
    },
    {
      id: 't2-2-q056',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.10',
      marks: 2,
      stem: '<p>Use your GDC to find the number of real solutions of the equation <span class="chem">ln x = x^2 - 3x + 1</span>.</p>',
      answer: 2,
      tolerance: 0,
      hints: [
        'Graph both sides. Remember that <span class="chem">ln x</span> exists only for <span class="chem">x &gt; 0</span>, and zoom out enough to see the whole picture.',
        'The parabola has its vertex at <span class="chem">x = 1.5</span>; it is above <span class="chem">ln x</span> near <span class="chem">x = 0</span> and again for large <span class="chem">x</span>.'
      ],
      solution: '<p>Graphing <span class="chem">y = ln x</span> and <span class="chem">y = x^2 - 3x + 1</span> shows intersections at <span class="chem">x ≈ 0.621</span> and <span class="chem">x ≈ 3.04</span>. The parabola is above the curve for <span class="chem">0 &lt; x &lt; 0.621</span> and for <span class="chem">x &gt; 3.04</span>, and below it in between, so there are <strong>2</strong> real solutions.</p>'
    },
    {
      id: 't2-2-q057',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.9, 2.10',
      marks: 3,
      stem: '<p>Tank A contains <span class="chem">500</span> litres of water and starts to leak. The volume left in tank A after <span class="chem">t</span> minutes is <span class="chem">V_A = 500 e^{-0.04t}</span> litres. At the same moment, tank B, which contains <span class="chem">50</span> litres, starts to be filled at <span class="chem">20</span> litres per minute. Find the time at which the two tanks contain the same volume, correct to 3 significant figures.</p>',
      answer: 12.6017047506,
      sigfigs: 3,
      hints: [
        'Decode: write the volume of tank B as a linear function, <span class="chem">V_B = 50 + 20t</span>, then solve <span class="chem">V_A = V_B</span>.',
        'An equation mixing <span class="chem">e^{-0.04t}</span> and <span class="chem">t</span> needs the GDC: intersect the two graphs.'
      ],
      solution: '<p><span class="chem">500 e^{-0.04t} = 50 + 20t</span>. The GDC intersection is at <span class="chem">t ≈ 12.602</span>, so the volumes are equal after <span class="chem">12.6</span> minutes (both about <span class="chem">302</span> litres).</p>'
    },
    {
      id: 't2-2-q058',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.8, 2.10',
      marks: 3,
      stem: '<p>The graphs of <span class="chem">y = (3x - 2)/(x + 1)</span> and <span class="chem">y = 0.5x^2 - 1.8</span> intersect at three points. Find the <span class="chem">x</span>-coordinate of the point of intersection with <span class="chem">x &gt; 1</span>, correct to 3 significant figures.</p>',
      answer: 2.6139970519,
      sigfigs: 3,
      hints: [
        'Graph both functions. The rational graph has a vertical asymptote at <span class="chem">x = -1</span>; the GDC may draw a false near-vertical line there, which is not an intersection.',
        'Use the intersect tool with a starting guess near <span class="chem">x = 2.5</span>.'
      ],
      solution: '<p>The graphs intersect at <span class="chem">x ≈ -3.656</span>, <span class="chem">x ≈ 0.0419</span> and <span class="chem">x ≈ 2.6140</span>. The one with <span class="chem">x &gt; 1</span> is <span class="chem">x = 2.61</span> (3 s.f.).</p>'
    },
    {
      id: 't2-2-q059',
      type: 'short',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.8, 2.9, 2.10',
      marks: 9,
      stem: '<p>Two students learn to touch-type. Their typing speeds, in words per minute, <span class="chem">t</span> weeks after starting are modelled by<br>Asha: <span class="chem">A(t) = (75t + 20)/(t + 4)</span> &nbsp; and &nbsp; Ben: <span class="chem">B(t) = 82(1 - e^{-0.15t})</span>, for <span class="chem">t &gt;= 0</span>.<br>(a) Write down each student\'s typing speed when they start. <strong>[2 marks]</strong><br>(b) Write down the speed that each student\'s model approaches in the long term. <strong>[2 marks]</strong><br>(c) Find the time when the two students type at the same speed. <strong>[2 marks]</strong><br>(d) Each student aims to reach <span class="chem">60</span> words per minute. Find how many weeks longer Asha takes than Ben to reach this target. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) Asha <span class="chem">5</span> wpm, Ben <span class="chem">0</span> wpm; (b) Asha <span class="chem">75</span> wpm, Ben <span class="chem">82</span> wpm; (c) <span class="chem">t ≈ 5.27</span> weeks; (d) Asha <span class="chem">14.67</span> weeks, Ben <span class="chem">8.77</span> weeks: <span class="chem">5.90</span> weeks longer.</p>',
      markscheme: [
        'A1: A(0) = 20/4 = 5 words per minute.',
        'A1: B(0) = 82(1 − 1) = 0 words per minute.',
        'A1: Asha approaches 75 (horizontal asymptote 75/1).',
        'A1: Ben approaches 82 (since e^(−0.15t) → 0).',
        'M1: Solves A(t) = B(t) using the GDC (intersection for t > 0).',
        'A1: t ≈ 5.27 weeks.',
        'M1: Sets A(t) = 60 and B(t) = 60 and solves each (by hand or GDC).',
        'A1: Asha t = 44/3 ≈ 14.67 weeks (75t + 20 = 60t + 240) and Ben t = ln(82/22)/0.15 ≈ 8.77 weeks.',
        'A1: Difference ≈ 5.90 weeks.'
      ],
      hints: [
        'Decode: one model is linear-over-linear (horizontal asymptote = ratio of the <span class="chem">t</span>-coefficients); the other is exponential (as <span class="chem">t -&gt; infty</span>, <span class="chem">e^{-0.15t} -&gt; 0</span>). "When they start" means <span class="chem">t = 0</span>; "in the long term" means the asymptotes.',
        'For (c), graph both models for <span class="chem">0 &lt;= t &lt;= 30</span> and use the intersect tool.',
        'For (d), solve <span class="chem">A(t) = 60</span> and <span class="chem">B(t) = 60</span> separately, then subtract. Asha\'s equation can be solved by hand.'
      ],
      solution: '<p><strong>Decode:</strong> start values come from <span class="chem">t = 0</span>, long-term values from the horizontal asymptotes, and "same speed" from the intersection of the two graphs.</p><p>(a) <span class="chem">A(0) = 20/4 = 5</span>; <span class="chem">B(0) = 82(1 - 1) = 0</span>.<br>(b) <span class="chem">A(t) -&gt; 75/1 = 75</span>; <span class="chem">B(t) -&gt; 82</span> because <span class="chem">e^{-0.15t} -&gt; 0</span>.<br>(c) The GDC intersection for <span class="chem">t &gt; 0</span> is at <span class="chem">t ≈ 5.27</span> weeks (Asha is faster before this, Ben after).<br>(d) Asha: <span class="chem">75t + 20 = 60t + 240 => t = 220/15 ≈ 14.667</span>. Ben: <span class="chem">e^{-0.15t} = 22/82 => t = ln(82/22)/0.15 ≈ 8.771</span>. Asha takes <span class="chem">14.667 - 8.771 ≈ 5.90</span> weeks longer.</p>'
    },
    {
      id: 't2-2-q060',
      type: 'short',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.9, 2.10',
      marks: 8,
      stem: '<p>Mia buys a car for <span class="chem">$28 000</span> with a loan. The value of the car <span class="chem">t</span> years after purchase is modelled by <span class="chem">V(t) = 28000(0.82)^t</span>. The amount she still owes on the loan is modelled by <span class="chem">D(t) = 26500 - 2900t</span>, until the loan is paid off. A car loan is described as "under water" when the amount owed is more than the value of the car.<br>(a) Find the value of the car after 3 years, to the nearest dollar. <strong>[2 marks]</strong><br>(b) Find the set of values of <span class="chem">t</span> for which Mia\'s loan is under water. <strong>[4 marks]</strong><br>(c) Find the greatest amount by which the debt exceeds the value of the car, to the nearest dollar. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">$15 438</span>; (b) <span class="chem">0.648 &lt; t &lt; 6.46</span>; (c) <span class="chem">$2384</span> (at <span class="chem">t ≈ 3.28</span>).</p>',
      markscheme: [
        'M1: Substitutes t = 3: 28000 × 0.82³.',
        'A1: $15 438 (15 438.30…).',
        'M1: Sets up D(t) > V(t), i.e. 26500 − 2900t > 28000(0.82)^t, and graphs both functions (or their difference).',
        'A1: First intersection t ≈ 0.648.',
        'A1: Second intersection t ≈ 6.46.',
        'A1: Under water for 0.648 < t < 6.46.',
        'M1: Maximises D(t) − V(t) on the GDC (maximum of the difference graph).',
        'A1: Greatest excess ≈ $2384 (at t ≈ 3.28).'
      ],
      hints: [
        'Decode: "under water" is defined in the stem: debt <span class="chem">&gt;</span> value, i.e. <span class="chem">D(t) &gt; V(t)</span>. That is an inequality between a linear and an exponential function, so you need the GDC intersections.',
        'Graph <span class="chem">Y_1 = 26500 - 2900x</span> and <span class="chem">Y_2 = 28000(0.82)^x</span> for <span class="chem">0 &lt;= x &lt;= 9</span>. There are two intersections.',
        'For (c), graph <span class="chem">Y_3 = Y_1 - Y_2</span> and find its maximum. The greatest gap is not at either intersection.'
      ],
      solution: '<p><strong>Decode:</strong> translate the definition "under water" into the inequality <span class="chem">D(t) &gt; V(t)</span>, solve it graphically, and turn "greatest amount by which the debt exceeds the value" into the maximum of <span class="chem">D - V</span>.</p><p>(a) <span class="chem">V(3) = 28000(0.82)^3 ≈ 15438.30</span>, so about <span class="chem">$15 438</span>.<br>(b) At <span class="chem">t = 0</span>, <span class="chem">D = 26500 &lt; 28000 = V</span>. The graphs intersect at <span class="chem">t ≈ 0.648</span> and <span class="chem">t ≈ 6.457</span>, and <span class="chem">D &gt; V</span> between them, so the loan is under water for <span class="chem">0.648 &lt; t &lt; 6.46</span>.<br>(c) The maximum of <span class="chem">D(t) - V(t)</span> is about <span class="chem">2384.15</span> at <span class="chem">t ≈ 3.28</span>, so the greatest excess is <span class="chem">$2384</span>.</p>'
    }
  ]);
})();
