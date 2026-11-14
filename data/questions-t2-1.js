/* ==========================================================================
   Analysis Lab — questions-t2-1.js
   Question bank for Topic 2.1: Lines, functions, domains, inverses & composites (SL 2.1–2.5).
   59 original questions across foundation, exam, and challenge tiers.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.questions) return;

  S1.questions.register('t2-1', [
    {
      id: 't2-1-q001',
      type: 'mcq',
      tier: 'foundation',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.1',
      marks: 2,
      stem: '<p>A line <span class="chem">L_1</span> has equation <span class="chem">2x + 5y - 10 = 0</span>. A second line <span class="chem">L_2</span> is perpendicular to <span class="chem">L_1</span> and passes through the point <span class="chem">(2, -1)</span>. What is the equation of <span class="chem">L_2</span> in general form?</p>',
      options: [
        '<span class="chem">5x - 2y - 12 = 0</span>',
        '<span class="chem">5x + 2y - 8 = 0</span>',
        '<span class="chem">2x - 5y - 9 = 0</span>',
        '<span class="chem">5x - 2y + 12 = 0</span>'
      ],
      answer: 0,
      misconception: {
        1: 'You flipped the gradient from −2/5 to −5/2 without changing its sign. Perpendicular gradients have product −1, so m₂ = +5/2.',
        2: 'You kept the fraction 2/5 instead of taking the reciprocal 5/2.',
        3: 'You moved the constant to the wrong side: 5x − 2y = 12 gives 5x − 2y − 12 = 0, not + 12. Check by substituting (2, −1): 10 + 2 + 12 ≠ 0.'
      },
      hints: [
        'Rearrange <span class="chem">2x + 5y - 10 = 0</span> into <span class="chem">y = mx + c</span> to read off <span class="chem">m_1 = -2/5</span>.',
        'The perpendicular gradient is <span class="chem">m_2 = -1/m_1 = 5/2</span>. Substitute <span class="chem">(2, -1)</span> into <span class="chem">y - y_1 = m_2(x - x_1)</span>.'
      ],
      solution: '<p>Rearranging <span class="chem">L_1</span> gives <span class="chem">y = -(2/5)x + 2</span>, so <span class="chem">m_1 = -2/5</span> and <span class="chem">m_2 = 5/2</span>. Using point-gradient form through <span class="chem">(2, -1)</span>: <span class="chem">y + 1 = (5/2)(x - 2) => 2y + 2 = 5x - 10 => 5x - 2y - 12 = 0</span>.</p>'
    },
    {
      id: 't2-1-q002',
      type: 'numeric',
      tier: 'foundation',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.1',
      marks: 3,
      stem: '<p>The perpendicular bisector of the line segment joining <span class="chem">A(-1, 4)</span> and <span class="chem">B(5, 8)</span> intersects the <span class="chem">x</span>-axis at <span class="chem">(a, 0)</span>. Find the exact value of <span class="chem">a</span>.</p>',
      answer: 6,
      exact: true,
      answerInput: '6',
      hints: [
        'Find the midpoint <span class="chem">M</span> of <span class="chem">A(-1, 4)</span> and <span class="chem">B(5, 8)</span> and the gradient <span class="chem">m_{AB}</span>.',
        'With <span class="chem">M(2, 6)</span> and <span class="chem">m_{perp} = -3/2</span>, substitute <span class="chem">y = 0</span> into <span class="chem">y - 6 = (-3/2)(x - 2)</span>.'
      ],
      solution: '<p>Midpoint <span class="chem">M = ((-1+5)/2, (4+8)/2) = (2, 6)</span>. Gradient <span class="chem">m_{AB} = (8 - 4)/(5 - (-1)) = 4/6 = 2/3</span>, so <span class="chem">m_{perp} = -3/2</span>. The perpendicular bisector is <span class="chem">y - 6 = (-3/2)(x - 2)</span>. Setting <span class="chem">y = 0</span> gives <span class="chem">-6 = (-3/2)(a - 2) => a - 2 = 4 => a = 6</span>.</p>'
    },
    {
      id: 't2-1-q003',
      type: 'mcq',
      tier: 'foundation',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.2',
      marks: 2,
      stem: '<p>What is the largest possible real domain of the function <span class="chem">f(x) = sqrt(10 - 2x) / (x - 2)</span>?</p>',
      options: [
        '<span class="chem">x &lt;= 5, x != 2</span>',
        '<span class="chem">x &lt; 5, x != 2</span>',
        '<span class="chem">x &gt;= 5</span>',
        '<span class="chem">x &lt;= 5</span>'
      ],
      answer: 0,
      misconception: {
        1: 'The square root is in the numerator, not the denominator, so 10 − 2x = 0 (x = 5) is allowed.',
        2: 'From 10 − 2x ≥ 0 you get −2x ≥ −10; dividing by −2 reverses the sign, giving x ≤ 5, not x ≥ 5.',
        3: 'You checked the square root 10 − 2x ≥ 0 (x ≤ 5), but forgot to exclude x = 2 where the denominator x − 2 equals zero.'
      },
      hints: [
        'Check both domain restrictions: the radicand inside the numerator square root must be <span class="chem">&gt;= 0</span>, and the denominator must be <span class="chem">!= 0</span>.'
      ],
      solution: '<p>For the square root in the numerator, <span class="chem">10 - 2x &gt;= 0 => 2x &lt;= 10 => x &lt;= 5</span>. For the denominator, <span class="chem">x - 2 != 0 => x != 2</span>. Since <span class="chem">2 &lt;= 5</span>, we must explicitly exclude <span class="chem">x = 2</span>, giving <span class="chem">x &lt;= 5, x != 2</span>.</p>'
    },
    {
      id: 't2-1-q004',
      type: 'mcq',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.2',
      marks: 2,
      stem: '<p>The function <span class="chem">f(x) = -(x - 2)^2 + 9</span> is defined on the restricted domain <span class="chem">-1 &lt;= x &lt;= 4</span>. What is the range of <span class="chem">f</span>?</p>',
      options: [
        '<span class="chem">0 &lt;= f(x) &lt;= 9</span>',
        '<span class="chem">0 &lt;= f(x) &lt;= 5</span>',
        '<span class="chem">5 &lt;= f(x) &lt;= 9</span>',
        '<span class="chem">f(x) &lt;= 9</span>'
      ],
      answer: 0,
      misconception: {
        1: 'You only plugged in the two endpoints f(−1) = 0 and f(4) = 5, missing the maximum vertex (2, 9) which lies inside [−1, 4]!',
        2: 'You evaluated the right endpoint f(4) = 5 and the vertex f(2) = 9, but missed the lower value at the left endpoint f(−1) = 0.',
        3: 'You gave the range over all real numbers x ∈ ℝ instead of restricting to −1 ≤ x ≤ 4.'
      },
      hints: [
        'Never find the range of a quadratic by plugging in only the endpoints! Check whether the vertex <span class="chem">x = 2</span> lies inside <span class="chem">[-1, 4]</span>.',
        'Evaluate <span class="chem">f(-1)</span>, <span class="chem">f(2)</span> (vertex), and <span class="chem">f(4)</span>, then take the minimum and maximum of those values.'
      ],
      solution: '<p>The graph is a downward-opening parabola with vertex at <span class="chem">(2, 9)</span>. Since <span class="chem">x = 2</span> lies inside <span class="chem">[-1, 4]</span>, the maximum output is <span class="chem">f(2) = 9</span>. Checking the endpoints gives <span class="chem">f(-1) = -(-3)^2 + 9 = 0</span> and <span class="chem">f(4) = -(2)^2 + 9 = 5</span>. Hence the minimum is <span class="chem">0</span> and the range is <span class="chem">0 &lt;= f(x) &lt;= 9</span>.</p>'
    },
    {
      id: 't2-1-q005',
      type: 'numeric',
      tier: 'foundation',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.5',
      marks: 2,
      stem: '<p>Let <span class="chem">f(x) = 3x - 4</span> and <span class="chem">g(x) = x^2 + 1</span>. Calculate the value of <span class="chem">(g ∘ f)(2)</span>.</p>',
      answer: 5,
      tolerance: 0.001,
      hints: [
        'In <span class="chem">(g ∘ f)(2) = g(f(2))</span>, evaluate the inner function <span class="chem">f(2)</span> first.',
        'Once you have <span class="chem">f(2) = 2</span>, substitute that output into <span class="chem">g(x) = x^2 + 1</span>.'
      ],
      solution: '<p>Working inside-out: <span class="chem">f(2) = 3(2) - 4 = 2</span>. Then <span class="chem">(g ∘ f)(2) = g(f(2)) = g(2) = 2^2 + 1 = 5</span>.</p>'
    },
    {
      id: 't2-1-q006',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.2',
      marks: 3,
      stem: '<p>A one-to-one function <span class="chem">f</span> is defined by <span class="chem">f(x) = x^3 + 2x - 1</span> for <span class="chem">x ∈ ℝ</span>. Find the value of <span class="chem">f^{-1}(11)</span>.</p>',
      answer: 2,
      tolerance: 0.001,
      hints: [
        'Do not try to invert a cubic formula! Remember that <span class="chem">f^{-1}(11) = x</span> means <span class="chem">f(x) = 11</span>.',
        'Test small integer values of <span class="chem">x</span> in <span class="chem">x^3 + 2x - 1 = 11</span>.'
      ],
      solution: '<p>Let <span class="chem">f^{-1}(11) = x</span>. By definition of the inverse function, <span class="chem">f(x) = 11</span>, so <span class="chem">x^3 + 2x - 1 = 11 => x^3 + 2x - 12 = 0</span>. Testing <span class="chem">x = 2</span> gives <span class="chem">2^3 + 2(2) - 12 = 8 + 4 - 12 = 0</span>. Since <span class="chem">f</span> is strictly increasing, <span class="chem">f^{-1}(11) = 2</span> is the unique solution.</p>'
    },
    {
      id: 't2-1-q007',
      type: 'mcq',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.5',
      marks: 2,
      stem: '<p>The function <span class="chem">f</span> is defined by <span class="chem">f(x) = x^2 - 6x + 11</span> for <span class="chem">x &lt;= 3</span>. Which of the following is the correct expression and domain for <span class="chem">f^{-1}(x)</span>?</p>',
      options: [
        '<span class="chem">f^{-1}(x) = 3 - sqrt(x - 2)</span> for <span class="chem">x &gt;= 2</span>',
        '<span class="chem">f^{-1}(x) = 3 + sqrt(x - 2)</span> for <span class="chem">x &gt;= 2</span>',
        '<span class="chem">f^{-1}(x) = 3 - sqrt(x - 2)</span> for <span class="chem">x &lt;= 3</span>',
        '<span class="chem">f^{-1}(x) = 3 - sqrt(x + 2)</span> for <span class="chem">x &gt;= -2</span>'
      ],
      answer: 0,
      misconception: {
        1: 'You chose the positive square root +√(x − 2). Because Domain(f) is x ≤ 3, Range(f⁻¹) must be y ≤ 3, which requires 3 − √(x − 2).',
        2: 'You found the right formula for f⁻¹(x), but forgot that Domain(f⁻¹) = Range(f) = [2, ∞), not Domain(f).',
        3: 'When completing the square on x² − 6x + 11 = (x − 3)² − 9 + 11, the vertex k-value is +2, not −2.'
      },
      hints: [
        'First complete the square: <span class="chem">f(x) = (x - 3)^2 + 2</span>. What is the range of <span class="chem">f</span>?',
        'Swap <span class="chem">x</span> and <span class="chem">y</span> in <span class="chem">y = (x - 3)^2 + 2</span>, and use <span class="chem">Range(f^{-1}) = Domain(f) = (-infty, 3]</span> to select the negative sign.'
      ],
      solution: '<p>Completing the square gives <span class="chem">f(x) = (x - 3)^2 + 2</span>. Since <span class="chem">(x - 3)^2 &gt;= 0</span>, the range of <span class="chem">f</span> is <span class="chem">y &gt;= 2</span>, so the domain of <span class="chem">f^{-1}</span> is <span class="chem">x &gt;= 2</span>. Swapping <span class="chem">x</span> and <span class="chem">y</span>: <span class="chem">x = (y - 3)^2 + 2 => y = 3 +- sqrt(x - 2)</span>. Since <span class="chem">Range(f^{-1}) = Domain(f)</span> requires <span class="chem">y &lt;= 3</span>, we must choose the minus sign: <span class="chem">f^{-1}(x) = 3 - sqrt(x - 2)</span> for <span class="chem">x &gt;= 2</span>.</p>'
    },
    {
      id: 't2-1-q008',
      type: 'multi',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.2',
      marks: 3,
      stem: '<p>Let <span class="chem">f</span> be a one-to-one function with domain <span class="chem">[-2, 5]</span> and range <span class="chem">[1, 10]</span>. Which of the following statements <strong>must</strong> be true for its inverse function <span class="chem">f^{-1}</span>?</p>',
      options: [
        'The domain of <span class="chem">f^{-1}</span> is <span class="chem">[1, 10]</span> and the range of <span class="chem">f^{-1}</span> is <span class="chem">[-2, 5]</span>.',
        'The graph of <span class="chem">y = f^{-1}(x)</span> is the reflection of the graph of <span class="chem">y = f(x)</span> in the line <span class="chem">y = x</span>.',
        'For every <span class="chem">x ∈ [-2, 5]</span>, <span class="chem">(f^{-1} ∘ f)(x) = x</span>.',
        'For every <span class="chem">x ∈ [-2, 5]</span>, <span class="chem">f^{-1}(x) = 1 / f(x)</span>.'
      ],
      answer: [0, 1, 2],
      misconception: {
        3: 'f⁻¹(x) denotes the inverse mapping that reverses input and output, never the reciprocal 1 / f(x).'
      },
      hints: [
        'Check the three core properties of inverse functions: domain-range swap, reflection in <span class="chem">y = x</span>, and identity composition <span class="chem">f^{-1}(f(x)) = x</span>.'
      ],
      solution: '<p>Statements A, B, and C are fundamental properties of every inverse function: <span class="chem">Domain(f^{-1}) = Range(f) = [1, 10]</span>, <span class="chem">Range(f^{-1}) = Domain(f) = [-2, 5]</span>, the graph reflects across <span class="chem">y = x</span>, and <span class="chem">(f^{-1} ∘ f)(x) = x</span> on <span class="chem">Domain(f)</span>. Statement D confuses the inverse function <span class="chem">f^{-1}(x)</span> with the reciprocal <span class="chem">[f(x)]^{-1} = 1/f(x)</span>.</p>'
    },
    {
      id: 't2-1-q009',
      type: 'order',
      tier: 'foundation',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.5',
      marks: 3,
      stem: '<p>Arrange the following algebraic steps in logical order to find the inverse function <span class="chem">f^{-1}(x)</span> of <span class="chem">f(x) = (2x + 1)/(x - 3)</span> for <span class="chem">x != 3</span>.</p>',
      options: [
        'Write <span class="chem">y = (2x + 1)/(x - 3)</span> and swap <span class="chem">x</span> and <span class="chem">y</span> to get <span class="chem">x = (2y + 1)/(y - 3)</span>.',
        'Multiply both sides by <span class="chem">(y - 3)</span> and expand: <span class="chem">xy - 3x = 2y + 1</span>.',
        'Collect all terms containing <span class="chem">y</span> on one side and factor out <span class="chem">y</span>: <span class="chem">y(x - 2) = 3x + 1</span>.',
        'Divide by <span class="chem">(x - 2)</span> to obtain <span class="chem">f^{-1}(x) = (3x + 1)/(x - 2)</span> for <span class="chem">x != 2</span>.'
      ],
      answer: [0, 1, 2, 3],
      hints: [
        'Start by swapping <span class="chem">x</span> and <span class="chem">y</span>, clear the fraction, group all <span class="chem">y</span>-terms together so you can factor out <span class="chem">y</span>, and finally divide.'
      ],
      solution: '<p>To isolate <span class="chem">y</span> when it appears in both numerator and denominator, swap <span class="chem">x</span> and <span class="chem">y</span>, multiply by the denominator <span class="chem">(y - 3)</span>, collect the <span class="chem">y</span> terms on the left (<span class="chem">xy - 2y = 3x + 1</span>), factor out <span class="chem">y</span> as <span class="chem">y(x - 2) = 3x + 1</span>, and divide by <span class="chem">(x - 2)</span>.</p>'
    },
    {
      id: 't2-1-q010',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.5',
      marks: 4,
      stem: '<p>Let <span class="chem">f(x) = (x - 1)^2 - 1</span> for <span class="chem">x &gt;= 1</span>. The graphs of <span class="chem">y = f(x)</span> and <span class="chem">y = f^{-1}(x)</span> intersect at a single point <span class="chem">(a, a)</span> with <span class="chem">a &gt; 0</span>. Find the exact value of <span class="chem">a</span>.</p>',
      answer: 3,
      exact: true,
      answerInput: '3',
      hints: [
        'Because <span class="chem">f</span> is increasing for <span class="chem">x &gt;= 1</span>, the intersection of <span class="chem">y = f(x)</span> and <span class="chem">y = f^{-1}(x)</span> lies on the mirror line <span class="chem">y = x</span>.',
        'Solve <span class="chem">f(x) = x</span>, i.e., <span class="chem">(x - 1)^2 - 1 = x</span>, and keep the root that satisfies <span class="chem">x &gt;= 1</span>.'
      ],
      solution: '<p>Instead of equating <span class="chem">f(x)</span> to <span class="chem">f^{-1}(x) = 1 + sqrt(x + 1)</span>, solve <span class="chem">f(x) = x</span> along the mirror line <span class="chem">y = x</span>: <span class="chem">(x - 1)^2 - 1 = x => x^2 - 2x + 1 - 1 - x = 0 => x^2 - 3x = 0 => x(x - 3) = 0</span>. Since the domain of <span class="chem">f</span> is <span class="chem">x &gt;= 1</span>, we reject <span class="chem">x = 0</span> and obtain <span class="chem">a = 3</span>.</p>'
    },
    {
      id: 't2-1-q011',
      type: 'mcq',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.5',
      marks: 2,
      stem: '<p>Let <span class="chem">f(x) = ln(x - 4)</span> for <span class="chem">x &gt; 4</span> and <span class="chem">g(x) = x^2 + k</span> for <span class="chem">x ∈ ℝ</span>. Find the set of values of the constant <span class="chem">k</span> for which the composite function <span class="chem">(f ∘ g)(x)</span> is defined for <strong>all</strong> real numbers <span class="chem">x ∈ ℝ</span>.</p>',
      options: [
        '<span class="chem">k &gt; 4</span>',
        '<span class="chem">k &gt;= 4</span>',
        '<span class="chem">k &gt; 0</span>',
        '<span class="chem">k &lt; 4</span>'
      ],
      answer: 0,
      misconception: {
        1: 'If k = 4, then at x = 0 we get g(0) = 4, and f(4) = ln(4 − 4) = ln(0), which is undefined! The inequality must be strict: k > 4.',
        2: 'You checked that g(x) > 0 instead of checking the actual domain of f, which is u > 4.',
        3: 'You reversed the inequality sign when requiring the minimum of g(x) to exceed 4.'
      },
      hints: [
        'For <span class="chem">(f ∘ g)(x) = f(g(x))</span> to be defined for all <span class="chem">x ∈ ℝ</span>, we need <span class="chem">Range(g)</span> to be a subset of <span class="chem">Domain(f) = (4, infty)</span>.',
        'What is the minimum value of <span class="chem">g(x) = x^2 + k</span> for <span class="chem">x ∈ ℝ</span>?'
      ],
      solution: '<p>The domain of <span class="chem">f</span> is <span class="chem">(4, infty)</span>. For <span class="chem">g(x) = x^2 + k</span> with <span class="chem">x ∈ ℝ</span>, the range of <span class="chem">g</span> is <span class="chem">[k, infty)</span> (minimum value <span class="chem">k</span> at <span class="chem">x = 0</span>). Requiring <span class="chem">Range(g) ⊆ Domain(f)</span> means every output in <span class="chem">[k, infty)</span> must be strictly greater than <span class="chem">4</span>, so <span class="chem">k &gt; 4</span>.</p>'
    },
    {
      id: 't2-1-q012',
      type: 'numeric',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 2.14',
      marks: 3,
      stem: '<p>Let <span class="chem">f(x) = 2x^2 - 12x + 23</span> for <span class="chem">x &gt;= k</span>. Find the <strong>smallest</strong> possible value of <span class="chem">k</span> such that the inverse function <span class="chem">f^{-1}</span> exists.</p>',
      answer: 3,
      tolerance: 0.001,
      hints: [
        'A quadratic function is one-to-one on <span class="chem">x &gt;= k</span> if and only if <span class="chem">k</span> is at or to the right of the axis of symmetry (the vertex <span class="chem">x</span>-coordinate).',
        'Use <span class="chem">x = -b / (2a)</span> from your Formula Booklet.'
      ],
      solution: '<p>For <span class="chem">f(x) = 2x^2 - 12x + 23</span> to be one-to-one on <span class="chem">x &gt;= k</span>, the domain cannot extend to both sides of the vertex. The axis of symmetry is <span class="chem">x = -b/(2a) = -(-12)/(2 × 2) = 3</span>. Thus <span class="chem">f</span> is one-to-one for any <span class="chem">k &gt;= 3</span>, so the smallest value of <span class="chem">k</span> is <span class="chem">3</span>.</p>'
    },
    {
      id: 't2-1-q013',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.4',
      marks: 3,
      stem: '<p>Consider the function <span class="chem">f(x) = x e^{-0.5x}</span> for <span class="chem">x &gt;= 0</span>. Using your GDC or otherwise, find the maximum value in the range of <span class="chem">f</span>, giving your answer to 3 significant figures.</p>',
      answer: 0.7357588823,
      tolerance: 0.003,
      sigfigs: 3,
      hints: [
        'Graph <span class="chem">y = x e^{-0.5x}</span> on your GDC for <span class="chem">x &gt;= 0</span> and locate the local maximum.',
        'The maximum occurs at <span class="chem">x = 2</span>, where <span class="chem">f(2) = 2 e^{-1} = 2/e</span>.'
      ],
      solution: '<p>Graphing <span class="chem">y = x e^{-0.5x}</span> on a GDC (or setting <span class="chem">f\'(x) = (1 - 0.5x)e^{-0.5x} = 0</span>) shows a local maximum at <span class="chem">x = 2</span> with value <span class="chem">f(2) = 2e^{-1} ≈ 0.73576 = 0.736</span> (3 s.f.). Since <span class="chem">f(0) = 0</span> and <span class="chem">f(x) -&gt; 0</span> as <span class="chem">x -&gt; infty</span>, the maximum value in the range is <span class="chem">0.736</span>.</p>'
    },
    {
      id: 't2-1-q014',
      type: 'short',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.1',
      marks: 5,
      stem: '<p>A triangle has vertices at <span class="chem">A(1, 1)</span>, <span class="chem">B(7, 5)</span>, and <span class="chem">C(3, 8)</span>.<br>(a) Find the equation of the perpendicular bisector of side <span class="chem">[AB]</span> in the form <span class="chem">ax + by + d = 0</span>, where <span class="chem">a, b, d ∈ ℤ</span>. <strong>[3 marks]</strong><br>(b) Determine whether vertex <span class="chem">C(3, 8)</span> is equidistant from <span class="chem">A</span> and <span class="chem">B</span>, justifying your answer. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">3x + 2y - 18 = 0</span>; (b) Not equidistant because <span class="chem">3(3) + 2(8) - 18 = 7 != 0</span> (so <span class="chem">C</span> does not lie on the perpendicular bisector of <span class="chem">[AB]</span>).</p>',
      markscheme: [
        'A1: Finds midpoint of [AB] as M(4, 3).',
        'M1: Finds gradient m_AB = (5 − 1)/(7 − 1) = 2/3 and takes negative reciprocal m_⊥ = −3/2.',
        'A1: Substitutes into y − 3 = (−3/2)(x − 4) and rearranges to integer general form 3x + 2y − 18 = 0.',
        'M1: Substitutes C(3, 8) into 3x + 2y − 18 (or computes distances AC = √53 and BC = √25 = 5).',
        'R1: States that since 3(3) + 2(8) − 18 = 7 ≠ 0 (or AC ≠ BC), C is NOT equidistant from A and B.'
      ],
      hints: [
        'For part (a), find the midpoint <span class="chem">M</span> and negative reciprocal gradient of <span class="chem">[AB]</span>.',
        'For part (b), recall that the perpendicular bisector of <span class="chem">[AB]</span> is the exact set of points equidistant from <span class="chem">A</span> and <span class="chem">B</span>!'
      ],
      solution: '<p>(a) The midpoint of <span class="chem">[AB]</span> is <span class="chem">M((1+7)/2, (1+5)/2) = (4, 3)</span>. The gradient of <span class="chem">[AB]</span> is <span class="chem">(5-1)/(7-1) = 2/3</span>, so the perpendicular gradient is <span class="chem">-3/2</span>. Thus <span class="chem">y - 3 = (-3/2)(x - 4) => 2y - 6 = -3x + 12 => 3x + 2y - 18 = 0</span>.<br>(b) A point is equidistant from <span class="chem">A</span> and <span class="chem">B</span> if and only if it lies on the perpendicular bisector of <span class="chem">[AB]</span>. Substituting <span class="chem">C(3, 8)</span> gives <span class="chem">3(3) + 2(8) - 18 = 9 + 16 - 18 = 7 != 0</span>, so <span class="chem">C</span> is not equidistant from <span class="chem">A</span> and <span class="chem">B</span>.</p>'
    },
    {
      id: 't2-1-q015',
      type: 'short',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.5',
      marks: 6,
      stem: '<p>Let <span class="chem">f(x) = 3x - 2</span> for <span class="chem">x ∈ ℝ</span> and <span class="chem">g(x) = 5 / (x + 1)</span> for <span class="chem">x != -1</span>.<br>(a) Find an expression for <span class="chem">(g ∘ f)(x)</span> and state its largest possible domain. <strong>[3 marks]</strong><br>(b) Solve the equation <span class="chem">(f^{-1} ∘ g)(x) = 2</span>. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">(g ∘ f)(x) = 5 / (3x - 1)</span> with domain <span class="chem">x != 1/3</span>; (b) <span class="chem">x = 1/4</span> (or <span class="chem">0.25</span>).</p>',
      markscheme: [
        'M1: Substitutes f(x) into g(x) to write g(3x − 2) = 5 / ((3x − 2) + 1).',
        'A1: Simplifies to (g ∘ f)(x) = 5 / (3x − 1).',
        'A1: States domain x ≠ 1/3 (x ∈ ℝ, x ≠ 1/3).',
        'M1: Applies f to both sides of f⁻¹(g(x)) = 2 to write g(x) = f(2) (or finds f⁻¹(u) = (u + 2)/3 and sets (g(x) + 2)/3 = 2).',
        'A1: Evaluates g(x) = 3(2) − 2 = 4, so 5 / (x + 1) = 4.',
        'A1: Solves x + 1 = 5/4 to get x = 1/4.'
      ],
      hints: [
        'For part (a), replace <span class="chem">x</span> in <span class="chem">g(x) = 5/(x + 1)</span> with <span class="chem">(3x - 2)</span>.',
        'For part (b), apply <span class="chem">f</span> to both sides of <span class="chem">f^{-1}(g(x)) = 2</span> to get <span class="chem">g(x) = f(2)</span> immediately!'
      ],
      solution: '<p>(a) <span class="chem">(g ∘ f)(x) = g(3x - 2) = 5 / ((3x - 2) + 1) = 5 / (3x - 1)</span>, which is defined for all real <span class="chem">x != 1/3</span>.<br>(b) Applying <span class="chem">f</span> to both sides of <span class="chem">f^{-1}(g(x)) = 2</span> gives <span class="chem">g(x) = f(2) = 3(2) - 2 = 4</span>. Therefore <span class="chem">5 / (x + 1) = 4 => x + 1 = 5/4 => x = 1/4</span>.</p>'
    },
    {
      id: 't2-1-q016',
      type: 'numeric',
      tier: 'challenge',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 2.14',
      marks: 4,
      stem: '<p>The rational function <span class="chem">f(x) = (kx + 5)/(2x - 6)</span> (<span class="chem">x != 3</span>) is a <strong>self-inverse function</strong>, meaning that <span class="chem">f^{-1}(x) = f(x)</span> for all <span class="chem">x</span> in its domain. Find the value of the constant <span class="chem">k</span>.</p>',
      answer: 6,
      tolerance: 0.001,
      hints: [
        'Decode: "self-inverse" means that applying <span class="chem">f</span> twice gives back <span class="chem">x</span>, so the graph of <span class="chem">f</span> is its own reflection in <span class="chem">y = x</span>. Use the asymptotes (or find <span class="chem">f^{-1}</span> algebraically) and match the result with <span class="chem">f</span>.',
        'The domain of <span class="chem">f</span> is <span class="chem">x != 3</span> (vertical asymptote <span class="chem">x = 3</span>), and the range of <span class="chem">f</span> is <span class="chem">y != k/2</span> (horizontal asymptote <span class="chem">y = k/2</span>).',
        'Because <span class="chem">f^{-1} = f</span>, we must have <span class="chem">Domain(f) = Range(f)</span>, so the excluded value <span class="chem">k/2</span> must equal <span class="chem">3</span>!'
      ],
      solution: '<p>Method 1 (Asymptote symmetry): For <span class="chem">f</span> to equal <span class="chem">f^{-1}</span>, its vertical asymptote <span class="chem">x = 3</span> and horizontal asymptote <span class="chem">y = k/2</span> must be reflections of each other in <span class="chem">y = x</span>. Hence <span class="chem">k/2 = 3 => k = 6</span>.<br>Method 2 (Algebraic inversion): Let <span class="chem">x = (ky + 5)/(2y - 6) => 2xy - 6x = ky + 5 => y(2x - k) = 6x + 5 => f^{-1}(x) = (6x + 5)/(2x - k)</span>. Matching <span class="chem">f^{-1}(x) = f(x)</span> gives <span class="chem">k = 6</span>.</p>'
    },
    {
      id: 't2-1-q017',
      type: 'mcq',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.5',
      marks: 2,
      stem: '<p>Let <span class="chem">f(x) = sqrt(x - 2)</span> for <span class="chem">x &gt;= 2</span> and <span class="chem">g(x) = 6 - x^2</span> for <span class="chem">x &gt;= 0</span>. What is the largest domain and corresponding range of the composite function <span class="chem">(f ∘ g)(x)</span>?</p>',
      options: [
        'Domain: <span class="chem">0 &lt;= x &lt;= 2</span>; Range: <span class="chem">0 &lt;= y &lt;= 2</span>',
        'Domain: <span class="chem">-2 &lt;= x &lt;= 2</span>; Range: <span class="chem">0 &lt;= y &lt;= 2</span>',
        'Domain: <span class="chem">0 &lt;= x &lt;= sqrt(6)</span>; Range: <span class="chem">0 &lt;= y &lt;= 2</span>',
        'Domain: <span class="chem">x &gt;= 0</span>; Range: <span class="chem">0 &lt;= y &lt;= sqrt(6)</span>'
      ],
      answer: 0,
      misconception: {
        1: 'You solved 6 − x² ≥ 2 ⇒ −2 ≤ x ≤ 2, but forgot that the given domain of the inner function g already restricts x ≥ 0.',
        2: 'You required g(x) ≥ 0 (x ≤ √6) instead of requiring g(x) to lie in Domain(f) = [2, ∞), which requires 6 − x² ≥ 2 ⇒ x ≤ 2.',
        3: 'Without restricting x ≤ 2, outputs of g(x) fall below 2 and make √(g(x) − 2) undefined.'
      },
      hints: [
        'Decode: "the largest domain of <span class="chem">f ∘ g</span>" means the inputs <span class="chem">x</span> that <span class="chem">g</span> accepts AND whose outputs <span class="chem">g(x)</span> are allowed into <span class="chem">f</span>. Combine the two restrictions, then find the range from the simplified composite.',
        'An input <span class="chem">x</span> is in the domain of <span class="chem">f ∘ g</span> if and only if <span class="chem">x ∈ Domain(g)</span> (<span class="chem">x &gt;= 0</span>) AND <span class="chem">g(x) ∈ Domain(f)</span> (<span class="chem">6 - x^2 &gt;= 2</span>).',
        'Solve <span class="chem">6 - x^2 &gt;= 2</span> for <span class="chem">x &gt;= 0</span>, then evaluate <span class="chem">f(g(x)) = sqrt(4 - x^2)</span> on that interval.'
      ],
      solution: '<p>We require both <span class="chem">x &gt;= 0</span> (from <span class="chem">Domain(g)</span>) and <span class="chem">g(x) &gt;= 2</span> (from <span class="chem">Domain(f)</span>): <span class="chem">6 - x^2 &gt;= 2 => x^2 &lt;= 4 => -2 &lt;= x &lt;= 2</span>. Intersecting with <span class="chem">x &gt;= 0</span> gives the domain <span class="chem">0 &lt;= x &lt;= 2</span>. On <span class="chem">0 &lt;= x &lt;= 2</span>, <span class="chem">(f ∘ g)(x) = sqrt((6 - x^2) - 2) = sqrt(4 - x^2)</span> decreases from <span class="chem">sqrt(4) = 2</span> at <span class="chem">x = 0</span> to <span class="chem">0</span> at <span class="chem">x = 2</span>, so the range is <span class="chem">0 &lt;= y &lt;= 2</span>.</p>'
    },
    {
      id: 't2-1-q018',
      type: 'short',
      tier: 'challenge',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.5 / AHL 2.14',
      marks: 7,
      stem: '<p>The function <span class="chem">f</span> is defined by <span class="chem">f(x) = e^{2x} - 4e^x + 5</span> for <span class="chem">x &lt;= a</span>.<br>(a) By completing the square in terms of <span class="chem">e^x</span>, find the largest possible value of <span class="chem">a</span> such that <span class="chem">f^{-1}</span> exists. <strong>[3 marks]</strong><br>(b) For this value of <span class="chem">a</span>, find an expression for <span class="chem">f^{-1}(x)</span> and state the domain of <span class="chem">f^{-1}</span> carefully. <strong>[4 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">a = ln 2</span>; (b) <span class="chem">f^{-1}(x) = ln(2 - sqrt(x - 1))</span> with domain <span class="chem">1 &lt;= x &lt; 5</span>.</p>',
      markscheme: [
        'M1: Rewrites f(x) as a quadratic in u = e^x and completes the square: f(x) = (e^x − 2)^2 + 1.',
        'A1: Identifies the turning point at e^x = 2, so a = ln 2.',
        'R1: Explains or shows that for x ≤ ln 2, 0 < e^x ≤ 2, where u ↦ (u − 2)^2 + 1 is strictly decreasing (one-to-one).',
        'M1: Swaps x and y in y = (e^x − 2)^2 + 1 to write (e^y − 2)^2 = x − 1 ⇒ e^y = 2 ± √(x − 1).',
        'R1: Selects the minus sign e^y = 2 − √(x − 1) because y ≤ ln 2 means e^y ≤ 2.',
        'A1: Takes natural log to obtain f⁻¹(x) = ln(2 − √(x − 1)).',
        'A1: States the exact domain of f⁻¹ (= range of f for x ≤ ln 2) as 1 ≤ x < 5 (noting that as x → −∞, e^x → 0⁺ so f(x) → 5⁻).'
      ],
      hints: [
        'Decode: <span class="chem">e^{2x} = (e^x)^2</span>, so <span class="chem">f</span> is a quadratic in disguise. "The largest <span class="chem">a</span> such that <span class="chem">f^{-1}</span> exists" asks where <span class="chem">f</span> stops being one-to-one (its turning point), and the domain of <span class="chem">f^{-1}</span> is the range of <span class="chem">f</span> on <span class="chem">x &lt;= a</span>.',
        'Treat <span class="chem">u = e^x</span> as the variable in <span class="chem">u^2 - 4u + 5 = (u - 2)^2 + 1</span>.',
        'Watch out for the upper bound of the range of <span class="chem">f</span>: as <span class="chem">x -&gt; -infty</span>, <span class="chem">e^x -&gt; 0^+</span>, so <span class="chem">f(x)</span> approaches <span class="chem">(0 - 2)^2 + 1 = 5</span> from below without ever reaching <span class="chem">5</span>!'
      ],
      solution: '<p>(a) Completing the square in <span class="chem">e^x</span> gives <span class="chem">f(x) = (e^x - 2)^2 + 1</span>. The minimum occurs when <span class="chem">e^x = 2 => x = ln 2</span>. Hence the largest value of <span class="chem">a</span> for which <span class="chem">f</span> is one-to-one on <span class="chem">(-infty, a]</span> is <span class="chem">a = ln 2</span>.<br>(b) As <span class="chem">x</span> increases from <span class="chem">-infty</span> to <span class="chem">ln 2</span>, <span class="chem">e^x</span> increases across <span class="chem">(0, 2]</span>, so <span class="chem">f(x) = (e^x - 2)^2 + 1</span> decreases from <span class="chem">5</span> (excluded, since <span class="chem">e^x &gt; 0</span>) down to <span class="chem">1</span> (included at <span class="chem">x = ln 2</span>). Thus <span class="chem">Domain(f^{-1}) = Range(f) = [1, 5)</span>, i.e., <span class="chem">1 &lt;= x &lt; 5</span>. Swapping <span class="chem">x</span> and <span class="chem">y</span>: <span class="chem">x = (e^y - 2)^2 + 1 => e^y = 2 - sqrt(x - 1)</span> (minus sign since <span class="chem">e^y &lt;= 2</span>), so <span class="chem">f^{-1}(x) = ln(2 - sqrt(x - 1))</span>.</p>'
    },
    {
      id: 't2-1-q019',
      type: 'short',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.3',
      marks: 4,
      stem: '<p>Let <span class="chem">f(x) = e^x - x^2</span> for <span class="chem">-2 &lt;= x &lt;= 3</span>.<br>(a) Use your GDC to sketch the graph of <span class="chem">y = f(x)</span> on this domain, labelling the coordinates of any axis intercepts and of the end points. <strong>[3 marks]</strong><br>(b) Hence write down the number of solutions of <span class="chem">e^x = x^2</span> for <span class="chem">-2 &lt;= x &lt;= 3</span>. <strong>[1 mark]</strong></p>',
      answer: '<p>(a) An increasing curve with no turning points from <span class="chem">(-2, -3.86)</span> to <span class="chem">(3, 11.1)</span>, crossing the <span class="chem">x</span>-axis at <span class="chem">(-0.703, 0)</span> and the <span class="chem">y</span>-axis at <span class="chem">(0, 1)</span>; (b) one solution.</p>',
      markscheme: [
        'A1: Correct shape: increasing throughout −2 ≤ x ≤ 3 with no turning points, drawn only on the given domain.',
        'A1: Axis intercepts labelled (−0.703, 0) and (0, 1).',
        'A1: End points labelled (−2, −3.86) and (3, 11.1).',
        'A1: One solution (the graph crosses y = 0 once, at x ≈ −0.703).'
      ],
      hints: [
        'Enter <span class="chem">Y_1 = e^x - x^2</span> (or <span class="chem">Y_1 = e^x</span>, <span class="chem">Y_2 = x^2</span> and <span class="chem">Y_3 = Y_1 - Y_2</span>) and set the window to <span class="chem">-2 &lt;= x &lt;= 3</span>.',
        'Use the zero tool for the <span class="chem">x</span>-intercept and evaluate <span class="chem">f(-2)</span>, <span class="chem">f(0)</span> and <span class="chem">f(3)</span>. Solutions of <span class="chem">e^x = x^2</span> are the zeros of <span class="chem">f</span>.'
      ],
      solution: '<p>(a) On the GDC, <span class="chem">y = e^x - x^2</span> rises from <span class="chem">f(-2) = e^{-2} - 4 ≈ -3.86</span> to <span class="chem">f(3) = e^3 - 9 ≈ 11.1</span> with no turning points (it bends but never levels off). The zero tool gives the <span class="chem">x</span>-intercept <span class="chem">(-0.703, 0)</span>, and <span class="chem">f(0) = 1</span> gives the <span class="chem">y</span>-intercept <span class="chem">(0, 1)</span>. A sketch shows this shape and labels these four points; it does not need to be to scale. Do not extend the curve beyond <span class="chem">x = -2</span> or <span class="chem">x = 3</span>.<br>(b) The solutions of <span class="chem">e^x = x^2</span> are the zeros of <span class="chem">f</span>. The graph crosses the <span class="chem">x</span>-axis once, so there is <strong>one</strong> solution (<span class="chem">x ≈ -0.703</span>).</p>'
    },
    {
      id: 't2-1-q020',
      type: 'numeric',
      tier: 'foundation',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.1',
      marks: 3,
      stem: '<p>A straight line passes through the points <span class="chem">P(-3, 7)</span> and <span class="chem">Q(5, -5)</span>. Find the exact <span class="chem">y</span>-intercept of the line.</p>',
      answer: 2.5,
      exact: true,
      answerInput: '5/2',
      answerDisplay: '5/2',
      hints: [
        'Find the gradient first: <span class="chem">m = (y_2 - y_1)/(x_2 - x_1)</span>.',
        'With <span class="chem">m = -3/2</span>, write <span class="chem">y - 7 = -(3/2)(x + 3)</span> and put <span class="chem">x = 0</span>.'
      ],
      solution: '<p>Gradient <span class="chem">m = (-5 - 7)/(5 - (-3)) = -12/8 = -3/2</span>. Point-gradient form through <span class="chem">P</span>: <span class="chem">y - 7 = -(3/2)(x + 3)</span>. At <span class="chem">x = 0</span>: <span class="chem">y = 7 - 9/2 = 5/2</span>. The <span class="chem">y</span>-intercept is <span class="chem">5/2</span>. Check with <span class="chem">Q</span>: <span class="chem">-(3/2)(5) + 5/2 = -5</span>.</p>'
    },
    {
      id: 't2-1-q021',
      type: 'numeric',
      tier: 'foundation',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.2',
      marks: 3,
      stem: '<p>The function <span class="chem">f</span> is defined by <span class="chem">f(x) = (2x - 1)/(x + 3)</span> for <span class="chem">x != -3</span>. Find the value of <span class="chem">f^{-1}(3)</span>.</p>',
      answer: -10,
      exact: true,
      answerInput: '-10',
      hints: [
        'You do not need a formula for <span class="chem">f^{-1}</span>. If <span class="chem">f^{-1}(3) = a</span>, then <span class="chem">f(a) = 3</span>.',
        'Solve <span class="chem">(2a - 1)/(a + 3) = 3</span> by multiplying both sides by <span class="chem">a + 3</span>.'
      ],
      solution: '<p>Let <span class="chem">f^{-1}(3) = a</span>, so <span class="chem">f(a) = 3</span>: <span class="chem">2a - 1 = 3(a + 3) = 3a + 9</span>, so <span class="chem">a = -10</span>. Check: <span class="chem">f(-10) = (-21)/(-7) = 3</span>. So <span class="chem">f^{-1}(3) = -10</span>.</p>'
    },
    {
      id: 't2-1-q022',
      type: 'numeric',
      tier: 'foundation',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.5',
      marks: 3,
      stem: '<p>Let <span class="chem">f(x) = 5 - 2x</span> for <span class="chem">x ∈ ℝ</span>. Solve the equation <span class="chem">(f ∘ f)(x) = 7</span>.</p>',
      answer: 3,
      exact: true,
      answerInput: '3',
      hints: [
        '<span class="chem">(f ∘ f)(x) = f(f(x))</span>: replace every <span class="chem">x</span> in <span class="chem">5 - 2x</span> by <span class="chem">(5 - 2x)</span>.',
        'You should get <span class="chem">(f ∘ f)(x) = 4x - 5</span>. Now set it equal to <span class="chem">7</span>.'
      ],
      solution: '<p><span class="chem">(f ∘ f)(x) = 5 - 2(5 - 2x) = 5 - 10 + 4x = 4x - 5</span>. Then <span class="chem">4x - 5 = 7 => x = 3</span>. Check: <span class="chem">f(3) = -1</span> and <span class="chem">f(-1) = 7</span>.</p>'
    },
    {
      id: 't2-1-q023',
      type: 'short',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.1',
      marks: 5,
      stem: '<p>The line <span class="chem">L_1</span> has equation <span class="chem">kx + 3y = 6</span> and the line <span class="chem">L_2</span> has equation <span class="chem">y = (2k - 1)x + 4</span>, where <span class="chem">k</span> is a constant.<br>(a) Find the value of <span class="chem">k</span> for which <span class="chem">L_1</span> and <span class="chem">L_2</span> are parallel. <strong>[2 marks]</strong><br>(b) Find the possible values of <span class="chem">k</span> for which <span class="chem">L_1</span> and <span class="chem">L_2</span> are perpendicular. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">k = 3/7</span>; (b) <span class="chem">k = 3/2</span> or <span class="chem">k = -1</span>.</p>',
      markscheme: [
        'M1: Rearranges L₁ to y = −(k/3)x + 2, so its gradient is −k/3, and sets −k/3 = 2k − 1.',
        'A1: k = 3/7.',
        'M1: Uses the product of gradients: (−k/3)(2k − 1) = −1.',
        'A1: Obtains the quadratic 2k² − k − 3 = 0 (or equivalent).',
        'A1: Solves (2k − 3)(k + 1) = 0 to get k = 3/2 or k = −1.'
      ],
      hints: [
        'Write <span class="chem">L_1</span> in the form <span class="chem">y = mx + c</span> so you can read off its gradient in terms of <span class="chem">k</span>.',
        'Parallel: equal gradients. Perpendicular: gradients multiply to <span class="chem">-1</span>, which gives a quadratic in <span class="chem">k</span>.'
      ],
      solution: '<p>(a) <span class="chem">L_1</span>: <span class="chem">y = -(k/3)x + 2</span>, gradient <span class="chem">-k/3</span>. <span class="chem">L_2</span> has gradient <span class="chem">2k - 1</span>. Parallel: <span class="chem">-k/3 = 2k - 1 => -k = 6k - 3 => k = 3/7</span>.<br>(b) Perpendicular: <span class="chem">(-k/3)(2k - 1) = -1 => k(2k - 1) = 3 => 2k^2 - k - 3 = 0 => (2k - 3)(k + 1) = 0</span>, so <span class="chem">k = 3/2</span> or <span class="chem">k = -1</span>. Check <span class="chem">k = -1</span>: gradients <span class="chem">1/3</span> and <span class="chem">-3</span>, product <span class="chem">-1</span>.</p>'
    },
    {
      id: 't2-1-q024',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.1',
      marks: 5,
      stem: '<p>The line <span class="chem">L</span> passes through <span class="chem">A(2, 5)</span> and is parallel to the line <span class="chem">4x - 3y = 12</span>. The line <span class="chem">L</span> meets the <span class="chem">x</span>-axis at <span class="chem">P</span> and the <span class="chem">y</span>-axis at <span class="chem">Q</span>. Find the exact area of triangle <span class="chem">OPQ</span>, where <span class="chem">O</span> is the origin.</p>',
      answer: 2.0416666666666667,
      exact: true,
      answerInput: '49/24',
      answerDisplay: '49/24',
      hints: [
        'Decode: a parallel line keeps the same <span class="chem">x</span> and <span class="chem">y</span> coefficients, so <span class="chem">L</span> is <span class="chem">4x - 3y = c</span>. The triangle is right-angled at <span class="chem">O</span>, with legs equal to the distances from <span class="chem">O</span> to the two intercepts.',
        'Substitute <span class="chem">A(2, 5)</span> to find <span class="chem">c</span>, then put <span class="chem">y = 0</span> and <span class="chem">x = 0</span> in turn.',
        'Area <span class="chem">= (1/2) × |OP| × |OQ|</span>. Lengths are positive even when an intercept is negative.'
      ],
      solution: '<p><span class="chem">L</span>: <span class="chem">4x - 3y = c</span> with <span class="chem">4(2) - 3(5) = -7</span>, so <span class="chem">4x - 3y = -7</span>. At <span class="chem">y = 0</span>: <span class="chem">x = -7/4</span>, so <span class="chem">P(-7/4, 0)</span>. At <span class="chem">x = 0</span>: <span class="chem">y = 7/3</span>, so <span class="chem">Q(0, 7/3)</span>. Area <span class="chem">= (1/2)(7/4)(7/3) = 49/24</span>.</p>'
    },
    {
      id: 't2-1-q025',
      type: 'short',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.2, 2.5',
      marks: 8,
      stem: '<p>Let <span class="chem">h(x) = sqrt(x + 5) - 2</span>.<br>(a) Write down the largest possible domain of <span class="chem">h</span>. <strong>[1 mark]</strong><br>(b) Write down the range of <span class="chem">h</span> for this domain. <strong>[1 mark]</strong><br>(c) Find <span class="chem">h^{-1}(x)</span>, stating its domain. <strong>[3 marks]</strong><br>(d) Solve the equation <span class="chem">h(x) = h^{-1}(x)</span>, giving your answer in exact form. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">x &gt;= -5</span>; (b) <span class="chem">h(x) &gt;= -2</span>; (c) <span class="chem">h^{-1}(x) = (x + 2)^2 - 5</span> for <span class="chem">x &gt;= -2</span>; (d) <span class="chem">x = (-3 + sqrt(13))/2</span>.</p>',
      markscheme: [
        'A1: Domain x ≥ −5.',
        'A1: Range h(x) ≥ −2.',
        'M1: Swaps x and y: x = √(y + 5) − 2 (or makes x the subject first).',
        'A1: h⁻¹(x) = (x + 2)² − 5.',
        'A1: Domain of h⁻¹ is x ≥ −2 (the range of h).',
        'M1: Uses that h is increasing, so the graphs meet on y = x: √(x + 5) − 2 = x, or (x + 2)² − 5 = x with x ≥ −2.',
        'A1: Obtains x² + 3x − 1 = 0.',
        'A1: x = (−3 + √13)/2 only, rejecting (−3 − √13)/2 because it is less than −2.'
      ],
      hints: [
        'The square root needs <span class="chem">x + 5 &gt;= 0</span>, and its smallest output is <span class="chem">0</span>.',
        'For (c), swap <span class="chem">x</span> and <span class="chem">y</span> and square. The domain of <span class="chem">h^{-1}</span> is the range of <span class="chem">h</span>.',
        'For (d), <span class="chem">h</span> is increasing, so <span class="chem">h</span> and <span class="chem">h^{-1}</span> can only meet on <span class="chem">y = x</span>. Solve <span class="chem">h^{-1}(x) = x</span> and check which root lies in the domain <span class="chem">x &gt;= -2</span>.'
      ],
      solution: '<p>(a) <span class="chem">x + 5 &gt;= 0 => x &gt;= -5</span>.<br>(b) <span class="chem">sqrt(x + 5) &gt;= 0</span>, so <span class="chem">h(x) &gt;= -2</span>.<br>(c) <span class="chem">x = sqrt(y + 5) - 2 => (x + 2)^2 = y + 5 => h^{-1}(x) = (x + 2)^2 - 5</span>, with domain <span class="chem">x &gt;= -2</span> (the range of <span class="chem">h</span>).<br>(d) <span class="chem">h</span> is increasing, so intersections of <span class="chem">y = h(x)</span> and <span class="chem">y = h^{-1}(x)</span> lie on <span class="chem">y = x</span>. Solve <span class="chem">(x + 2)^2 - 5 = x => x^2 + 3x - 1 = 0 => x = (-3 +- sqrt(13))/2</span>. Since <span class="chem">(-3 - sqrt(13))/2 ≈ -3.30 &lt; -2</span>, reject it. So <span class="chem">x = (-3 + sqrt(13))/2</span>.</p>'
    },
    {
      id: 't2-1-q026',
      type: 'short',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.5',
      marks: 4,
      stem: '<p>Let <span class="chem">f(x) = 2x + 3</span> and <span class="chem">g(x) = x^2</span>, for <span class="chem">x ∈ ℝ</span>. Solve the equation <span class="chem">(f ∘ g)(x) = (g ∘ f)(x)</span>, giving your answers in the form <span class="chem">p +- sqrt(q)</span>, where <span class="chem">p, q ∈ ℤ</span>.</p>',
      answer: '<p><span class="chem">x = -3 +- sqrt(6)</span></p>',
      markscheme: [
        'A1: (f ∘ g)(x) = 2x² + 3.',
        'A1: (g ∘ f)(x) = (2x + 3)² = 4x² + 12x + 9.',
        'M1: Equates and simplifies to x² + 6x + 3 = 0 (or 2x² + 12x + 6 = 0).',
        'A1: x = −3 ± √6.'
      ],
      hints: [
        'The order matters: <span class="chem">(f ∘ g)(x) = f(g(x))</span> means "do <span class="chem">g</span> first".',
        'Expand <span class="chem">(2x + 3)^2</span>, collect terms, then complete the square or use the quadratic formula.'
      ],
      solution: '<p><span class="chem">(f ∘ g)(x) = f(x^2) = 2x^2 + 3</span> and <span class="chem">(g ∘ f)(x) = (2x + 3)^2 = 4x^2 + 12x + 9</span>. Equating: <span class="chem">2x^2 + 12x + 6 = 0 => x^2 + 6x + 3 = 0 => (x + 3)^2 = 6 => x = -3 +- sqrt(6)</span>.</p>'
    },
    {
      id: 't2-1-q027',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.5',
      marks: 4,
      stem: '<p>The functions <span class="chem">f</span> and <span class="chem">g</span> are defined for <span class="chem">x ∈ ℝ</span>. You are given that <span class="chem">f(x) = 2x + 1</span> and <span class="chem">(f ∘ g)(x) = 6x - 7</span>. Find the value of <span class="chem">g(4)</span>.</p>',
      answer: 8,
      exact: true,
      answerInput: '8',
      hints: [
        'Decode: you know the outer function and the result of the composite, so you must undo the outer function to find the inner one. <span class="chem">(f ∘ g)(x) = f(g(x)) = 2g(x) + 1</span>.',
        'Set <span class="chem">2g(x) + 1 = 6x - 7</span> and make <span class="chem">g(x)</span> the subject.',
        'Or work with numbers only: <span class="chem">f(g(4)) = 6(4) - 7 = 17</span>, so <span class="chem">g(4) = f^{-1}(17)</span>.'
      ],
      solution: '<p>Decode: <span class="chem">g</span> is the inner function. <span class="chem">f(g(x)) = 2g(x) + 1 = 6x - 7</span>, so <span class="chem">g(x) = 3x - 4</span> and <span class="chem">g(4) = 8</span>. (Check: <span class="chem">f(8) = 17 = 6(4) - 7</span>.)</p>'
    },
    {
      id: 't2-1-q028',
      type: 'short',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.2, 2.5',
      marks: 6,
      stem: '<p>The function <span class="chem">f</span> is defined by <span class="chem">f(x) = 5 - e^{2x}</span> for <span class="chem">x ∈ ℝ</span>.<br>(a) Write down the range of <span class="chem">f</span>. <strong>[1 mark]</strong><br>(b) Find an expression for <span class="chem">f^{-1}(x)</span>. <strong>[3 marks]</strong><br>(c) Write down the domain of <span class="chem">f^{-1}</span>. <strong>[1 mark]</strong><br>(d) Write down the value of <span class="chem">x</span> for which <span class="chem">f^{-1}(x) = 0</span>. <strong>[1 mark]</strong></p>',
      answer: '<p>(a) <span class="chem">f(x) &lt; 5</span>; (b) <span class="chem">f^{-1}(x) = (1/2) ln(5 - x)</span>; (c) <span class="chem">x &lt; 5</span>; (d) <span class="chem">x = 4</span>.</p>',
      markscheme: [
        'A1: Range f(x) < 5 (since e^{2x} > 0).',
        'M1: Swaps x and y: x = 5 − e^{2y}, so e^{2y} = 5 − x.',
        'M1: Takes natural logarithms: 2y = ln(5 − x).',
        'A1: f⁻¹(x) = (1/2) ln(5 − x).',
        'A1: Domain of f⁻¹ is x < 5.',
        'A1: x = 4 (because f⁻¹(x) = 0 exactly when x = f(0) = 4).'
      ],
      hints: [
        '<span class="chem">e^{2x}</span> takes every positive value but never <span class="chem">0</span>. What does that do to <span class="chem">5 - e^{2x}</span>?',
        'For (b), isolate the exponential, then take <span class="chem">ln</span> of both sides (you need the logarithm laws from topic 1.2).',
        'For (d), you do not need the formula: <span class="chem">f^{-1}(x) = 0</span> means <span class="chem">x = f(0)</span>.'
      ],
      solution: '<p>(a) <span class="chem">e^{2x} &gt; 0</span> for all <span class="chem">x</span>, so <span class="chem">f(x) &lt; 5</span>.<br>(b) <span class="chem">x = 5 - e^{2y} => e^{2y} = 5 - x => 2y = ln(5 - x) => f^{-1}(x) = (1/2) ln(5 - x)</span>.<br>(c) Domain of <span class="chem">f^{-1}</span> = range of <span class="chem">f</span>: <span class="chem">x &lt; 5</span>.<br>(d) <span class="chem">f^{-1}(x) = 0 => x = f(0) = 5 - 1 = 4</span>.</p>'
    },
    {
      id: 't2-1-q029',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.4',
      marks: 3,
      stem: '<p>The graph of <span class="chem">y = x^2 + bx + c</span> has axis of symmetry <span class="chem">x = 3</span> and passes through the point <span class="chem">(1, 0)</span>. The graph has a second zero at <span class="chem">x = q</span>. Find the value of <span class="chem">q</span>.</p>',
      answer: 5,
      exact: true,
      answerInput: '5',
      hints: [
        'The zeros of a parabola are placed symmetrically about its axis of symmetry.',
        '<span class="chem">x = 1</span> is <span class="chem">2</span> units to the left of <span class="chem">x = 3</span>. Where is the point <span class="chem">2</span> units to the right?'
      ],
      solution: '<p>By symmetry about <span class="chem">x = 3</span>, the zeros are equally far from <span class="chem">3</span>: <span class="chem">(1 + q)/2 = 3 => q = 5</span>. (Algebraic check: <span class="chem">-b/2 = 3 => b = -6</span>; <span class="chem">1 - 6 + c = 0 => c = 5</span>; <span class="chem">x^2 - 6x + 5 = (x - 1)(x - 5)</span>.)</p>'
    },
    {
      id: 't2-1-q030',
      type: 'short',
      tier: 'exam',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 2.14',
      marks: 5,
      stem: '<p>Let <span class="chem">f(x) = x^3/(x^2 + 4)</span> for <span class="chem">x ∈ ℝ</span>.<br>(a) Show that <span class="chem">f</span> is an odd function. <strong>[2 marks]</strong><br>The function <span class="chem">g</span> is even, with <span class="chem">g(3) = 7</span>. Let <span class="chem">h(x) = f(x) g(x)</span>.<br>(b) Determine whether <span class="chem">h</span> is odd, even or neither. Justify your answer. <strong>[2 marks]</strong><br>(c) Find the exact value of <span class="chem">h(-3)</span>. <strong>[1 mark]</strong></p>',
      answer: '<p>(a) <span class="chem">f(-x) = -x^3/(x^2 + 4) = -f(x)</span>; (b) <span class="chem">h</span> is odd, since <span class="chem">h(-x) = f(-x) g(-x) = -f(x) g(x) = -h(x)</span>; (c) <span class="chem">h(-3) = -189/13</span>.</p>',
      markscheme: [
        'M1: Substitutes −x: f(−x) = (−x)³/((−x)² + 4).',
        'A1: Simplifies to −x³/(x² + 4) = −f(x), so f is odd.',
        'M1: Writes h(−x) = f(−x) g(−x) = (−f(x)) g(x).',
        'A1: Concludes h(−x) = −h(x), so h is odd.',
        'A1: h(−3) = −h(3) = −(27/13)(7) = −189/13.'
      ],
      hints: [
        'Odd means <span class="chem">f(-x) = -f(x)</span> for every <span class="chem">x</span>; even means <span class="chem">g(-x) = g(x)</span>.',
        'For (b), substitute <span class="chem">-x</span> into <span class="chem">h</span> and use the two facts. For (c), use <span class="chem">h(-3) = f(-3) g(-3)</span>.'
      ],
      solution: '<p>(a) <span class="chem">f(-x) = (-x)^3/((-x)^2 + 4) = -x^3/(x^2 + 4) = -f(x)</span> for all <span class="chem">x</span>, so <span class="chem">f</span> is odd.<br>(b) <span class="chem">h(-x) = f(-x) g(-x) = (-f(x))(g(x)) = -h(x)</span>, so <span class="chem">h</span> is odd (odd × even = odd).<br>(c) <span class="chem">f(-3) = -27/13</span> and <span class="chem">g(-3) = g(3) = 7</span>, so <span class="chem">h(-3) = -189/13</span>.</p>'
    },
    {
      id: 't2-1-q031',
      type: 'numeric',
      tier: 'challenge',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 2.14',
      marks: 5,
      stem: '<p>The function <span class="chem">f(x) = (2x + b)/(x + c)</span>, <span class="chem">x != -c</span>, is its own inverse. The graph of <span class="chem">y = f(x)</span> passes through the point <span class="chem">(1, 4)</span>. Find the value of <span class="chem">b</span>.</p>',
      answer: -6,
      exact: true,
      answerInput: '-6',
      hints: [
        'Decode: "its own inverse" means <span class="chem">f</span> is self-inverse, so its graph is symmetric about <span class="chem">y = x</span>. For this rational function the vertical asymptote <span class="chem">x = -c</span> must be the reflection of the horizontal asymptote <span class="chem">y = 2</span>.',
        'So <span class="chem">-c = 2</span>. Then use the point <span class="chem">(1, 4)</span> to find <span class="chem">b</span>.',
        'Make sure the function is not a constant: check that <span class="chem">2c - b != 0</span>.'
      ],
      solution: '<p>Decode: self-inverse means <span class="chem">f^{-1} = f</span>, so the graph is symmetric in <span class="chem">y = x</span>. The horizontal asymptote is <span class="chem">y = 2</span>, so the vertical asymptote must be <span class="chem">x = 2</span>: <span class="chem">-c = 2 => c = -2</span>. (Algebraically: <span class="chem">x = (2y + b)/(y + c) => y = (b - cx)/(x - 2)</span>, which equals <span class="chem">(2x + b)/(x + c)</span> only when <span class="chem">c = -2</span>.) Then <span class="chem">f(1) = (2 + b)/(1 - 2) = -(2 + b) = 4 => b = -6</span>. Check: <span class="chem">f(x) = (2x - 6)/(x - 2)</span> is not constant, since <span class="chem">2(-2) - (-6) = 2 != 0</span>.</p>'
    },
    {
      id: 't2-1-q032',
      type: 'numeric',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.5',
      marks: 5,
      stem: '<p>Let <span class="chem">f(x) = 2x - 3</span>. A calculator key applies <span class="chem">f</span> to whatever number is on the screen. The number <span class="chem">4</span> is entered and the key is pressed <span class="chem">n</span> times, so the screen shows <span class="chem">(f ∘ f ∘ … ∘ f)(4)</span> with <span class="chem">n</span> copies of <span class="chem">f</span>. Find the least number of presses for which the screen shows a number greater than <span class="chem">1000</span>.</p>',
      answer: 10,
      exact: true,
      answerInput: '10',
      hints: [
        'Decode: this is repeated composition. Work out the first few outputs, spot the pattern, and write the result after <span class="chem">n</span> presses as a formula in <span class="chem">n</span>. The answer must be a positive integer.',
        'The outputs are <span class="chem">5, 7, 11, 19, …</span>. Subtract <span class="chem">3</span> from each.',
        'After <span class="chem">n</span> presses the screen shows <span class="chem">2^n + 3</span>. Solve <span class="chem">2^n + 3 &gt; 1000</span> using powers of <span class="chem">2</span>.'
      ],
      solution: '<p>Decode: "press the key <span class="chem">n</span> times" is the <span class="chem">n</span>-fold composite of <span class="chem">f</span>. Outputs: <span class="chem">f(4) = 5</span>, <span class="chem">f(5) = 7</span>, <span class="chem">f(7) = 11</span>, <span class="chem">f(11) = 19</span>, which are <span class="chem">2^n + 3</span>. This continues because if <span class="chem">x = 2^n + 3</span>, then <span class="chem">f(x) = 2^{n+1} + 6 - 3 = 2^{n+1} + 3</span>. We need <span class="chem">2^n + 3 &gt; 1000 => 2^n &gt; 997</span>. Since <span class="chem">2^9 = 512</span> and <span class="chem">2^{10} = 1024</span>, the least number of presses is <span class="chem">n = 10</span> (screen shows <span class="chem">1027</span>).</p>'
    },
    {
      id: 't2-1-q033',
      type: 'short',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 2.2, 2.5',
      marks: 7,
      stem: '<p>A currency exchange office first takes a fixed fee of <span class="chem">5</span> dollars from the amount handed in, then changes the rest into euros at <span class="chem">0.9</span> euros per dollar. So <span class="chem">d</span> dollars become <span class="chem">E(d) = 0.9(d - 5)</span> euros, for <span class="chem">d &gt; 5</span>. A second office changes <span class="chem">e</span> euros into <span class="chem">Y(e) = 160e - 200</span> yen.<br>(a) A traveller changes <span class="chem">d</span> dollars into euros at the first office, then changes all the euros into yen at the second office. Find, in the form <span class="chem">pd + q</span>, an expression for the number of yen received. <strong>[2 marks]</strong><br>(b) The traveller needs exactly <span class="chem">14 200</span> yen. Find the number of dollars that must be handed in. <strong>[3 marks]</strong><br>(c) Only whole numbers of dollars can be handed in. Find the least number of dollars for which the traveller receives a positive amount of yen. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">(Y ∘ E)(d) = 144d - 920</span>; (b) <span class="chem">105</span> dollars; (c) <span class="chem">7</span> dollars.</p>',
      markscheme: [
        'M1: Recognises the composite (Y ∘ E)(d) = Y(0.9(d − 5)) = 160 × 0.9(d − 5) − 200.',
        'A1: (Y ∘ E)(d) = 144d − 920.',
        'M1: Recognises that the answer is (Y ∘ E)⁻¹(14 200), i.e. sets 144d − 920 = 14 200.',
        'A1: 144d = 15 120.',
        'A1: d = 105 dollars.',
        'M1: Sets 144d − 920 > 0, so d > 920/144 = 6.39 (3 s.f.).',
        'A1: Least whole number of dollars is 7.'
      ],
      hints: [
        'Decode: dollars go into the first office, and its output goes into the second. That is a composite with <span class="chem">E</span> applied first, so you want <span class="chem">(Y ∘ E)(d)</span>, not <span class="chem">(E ∘ Y)(d)</span>.',
        'For (b), you know the output and want the input, so you are using the inverse of the composite. Solve <span class="chem">(Y ∘ E)(d) = 14 200</span>.',
        'For (c), "a positive amount" gives an inequality, and "whole numbers" means round <strong>up</strong> to the next integer.'
      ],
      solution: '<p>Decode: two machines in a row form a composite, and the inner (first) function is <span class="chem">E</span>.<br>(a) <span class="chem">(Y ∘ E)(d) = 160(0.9(d - 5)) - 200 = 144(d - 5) - 200 = 144d - 920</span>.<br>(b) <span class="chem">144d - 920 = 14 200 => 144d = 15 120 => d = 105</span> dollars.<br>(c) <span class="chem">144d - 920 &gt; 0 => d &gt; 920/144 ≈ 6.39</span>. The least whole number of dollars is <span class="chem">7</span> (check: <span class="chem">144(6) - 920 = -56 &lt; 0</span> and <span class="chem">144(7) - 920 = 88 &gt; 0</span>).</p>'
    },
    {
      id: 't2-1-q034',
      type: 'short',
      tier: 'challenge',
      level: 'ahl',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 2.14',
      marks: 7,
      stem: '<p>Let <span class="chem">f(x) = x^4 - 8x^2</span> for <span class="chem">x &gt;= a</span>.<br>(a) By writing <span class="chem">f(x)</span> in the form <span class="chem">(x^2 - p)^2 - q</span>, find the smallest value of <span class="chem">a</span> for which <span class="chem">f^{-1}</span> exists. <strong>[3 marks]</strong><br>(b) For this value of <span class="chem">a</span>, find an expression for <span class="chem">f^{-1}(x)</span> and state its domain. <strong>[3 marks]</strong><br>(c) Write down the value of <span class="chem">x</span> for which <span class="chem">f^{-1}(x) = 3</span>. <strong>[1 mark]</strong></p>',
      answer: '<p>(a) <span class="chem">f(x) = (x^2 - 4)^2 - 16</span>, so <span class="chem">a = 2</span>; (b) <span class="chem">f^{-1}(x) = sqrt(4 + sqrt(x + 16))</span>, <span class="chem">x &gt;= -16</span>; (c) <span class="chem">x = 9</span>.</p>',
      markscheme: [
        'A1: f(x) = (x² − 4)² − 16.',
        'R1: The minimum value −16 occurs at x² = 4, i.e. x = ±2; f decreases on 0 ≤ x ≤ 2 and increases for x ≥ 2, so any domain x ≥ a with a < 2 contains two inputs with the same output.',
        'A1: Smallest a = 2.',
        'M1: Swaps x and y and rearranges: (y² − 4)² = x + 16, so y² = 4 ± √(x + 16).',
        'A1: Chooses positive roots (since y ≥ 2 means y² − 4 ≥ 0): f⁻¹(x) = √(4 + √(x + 16)).',
        'A1: Domain of f⁻¹ is x ≥ −16 (the range of f).',
        'A1: x = f(3) = 81 − 72 = 9.'
      ],
      hints: [
        'Decode: an inverse exists only if <span class="chem">f</span> is one-to-one. Treat <span class="chem">x^2</span> as the variable and complete the square to see where <span class="chem">f</span> turns.',
        '<span class="chem">x^4 - 8x^2 = (x^2 - 4)^2 - 16</span>. As <span class="chem">x</span> increases from <span class="chem">0</span>, <span class="chem">x^2 - 4</span> is negative until <span class="chem">x = 2</span>, then positive.',
        'For (b), you will take two square roots. Use the restriction <span class="chem">y &gt;= 2</span> to choose each sign.',
        'For (c), <span class="chem">f^{-1}(x) = 3</span> means <span class="chem">x = f(3)</span>.'
      ],
      solution: '<p>Decode: "smallest <span class="chem">a</span> for which <span class="chem">f^{-1}</span> exists" asks for the largest interval of the form <span class="chem">x &gt;= a</span> on which <span class="chem">f</span> is one-to-one.<br>(a) <span class="chem">f(x) = (x^2 - 4)^2 - 16</span>. The minimum <span class="chem">-16</span> is at <span class="chem">x = 2</span> (for <span class="chem">x &gt;= 0</span>). On <span class="chem">0 &lt;= x &lt;= 2</span> the value <span class="chem">(x^2 - 4)^2</span> decreases, and for <span class="chem">x &gt;= 2</span> it increases. So <span class="chem">f</span> is one-to-one on <span class="chem">x &gt;= a</span> exactly when <span class="chem">a &gt;= 2</span>, and the smallest value is <span class="chem">a = 2</span>.<br>(b) <span class="chem">x = (y^2 - 4)^2 - 16 => y^2 - 4 = sqrt(x + 16)</span> (positive, since <span class="chem">y &gt;= 2</span>) <span class="chem">=> y = sqrt(4 + sqrt(x + 16))</span> (positive root). So <span class="chem">f^{-1}(x) = sqrt(4 + sqrt(x + 16))</span>, with domain <span class="chem">x &gt;= -16</span>.<br>(c) <span class="chem">x = f(3) = 81 - 72 = 9</span>.</p>'
    },
    {
      id: 't2-1-q035',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.4',
      marks: 3,
      stem: '<p>The curves <span class="chem">y = 2^x</span> and <span class="chem">y = x + 3</span> intersect at two points. Find the <span class="chem">x</span>-coordinate of the intersection point that lies in the first quadrant. Give your answer to 3 significant figures.</p>',
      answer: 2.444907554609869,
      sigfigs: 3,
      hints: [
        'Graph <span class="chem">Y_1 = 2^x</span> and <span class="chem">Y_2 = x + 3</span>, then use the intersect tool.',
        'There is another intersection near <span class="chem">x = -2.86</span>. Choose the one with <span class="chem">x &gt; 0</span>.'
      ],
      solution: '<p>Using the GDC intersect tool on <span class="chem">y = 2^x</span> and <span class="chem">y = x + 3</span>: the intersections are at <span class="chem">x ≈ -2.86</span> and <span class="chem">x ≈ 2.4449</span>. The first-quadrant point has <span class="chem">x ≈ 2.44</span> (3 s.f.), with <span class="chem">y ≈ 5.44</span>. The equation <span class="chem">2^x = x + 3</span> cannot be solved algebraically, so technology is required.</p>'
    },
    {
      id: 't2-1-q036',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.2, 2.4',
      marks: 3,
      stem: '<p>Let <span class="chem">f(x) = 3 ln x - x + 2</span> for <span class="chem">1 &lt;= x &lt;= 10</span>. Find the least value of <span class="chem">f(x)</span> on this domain. Give your answer to 3 significant figures.</p>',
      answer: -1.0922447210178623,
      sigfigs: 3,
      hints: [
        'Graph <span class="chem">y = 3 ln x - x + 2</span> with the window <span class="chem">1 &lt;= x &lt;= 10</span>. Does the graph have a local minimum on this interval?',
        'The only turning point is a maximum (at <span class="chem">x = 3</span>). The least value must be at one of the end points. Compare <span class="chem">f(1)</span> and <span class="chem">f(10)</span>.'
      ],
      solution: '<p>On the GDC the graph rises to a maximum at <span class="chem">(3, 2.30)</span>, then falls. There is no local minimum, so the least value is at an end point: <span class="chem">f(1) = 0 - 1 + 2 = 1</span> and <span class="chem">f(10) = 3 ln 10 - 8 ≈ -1.0922</span>. The least value is <span class="chem">-1.09</span> (3 s.f.), so the range is <span class="chem">-1.09 &lt;= f(x) &lt;= 2.30</span>.</p>'
    },
    {
      id: 't2-1-q037',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.2',
      marks: 3,
      stem: '<p>The function <span class="chem">f(x) = x^3 + e^x</span>, <span class="chem">x ∈ ℝ</span>, is increasing, so its inverse <span class="chem">f^{-1}</span> exists. Find <span class="chem">f^{-1}(5)</span>, giving your answer to 3 significant figures.</p>',
      answer: 1.1936745745448123,
      sigfigs: 3,
      hints: [
        'You cannot write down <span class="chem">f^{-1}(x)</span> as a formula. But <span class="chem">f^{-1}(5) = a</span> means <span class="chem">f(a) = 5</span>.',
        'Graph <span class="chem">Y_1 = x^3 + e^x</span> and <span class="chem">Y_2 = 5</span> and find the intersection.'
      ],
      solution: '<p>Let <span class="chem">f^{-1}(5) = a</span>, so <span class="chem">a^3 + e^a = 5</span>. The GDC (intersection of <span class="chem">y = x^3 + e^x</span> with <span class="chem">y = 5</span>) gives <span class="chem">a ≈ 1.19367</span>. So <span class="chem">f^{-1}(5) ≈ 1.19</span> (3 s.f.). Check: <span class="chem">1.1937^3 + e^{1.1937} ≈ 1.701 + 3.299 = 5.00</span>.</p>'
    },
    {
      id: 't2-1-q038',
      type: 'short',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.3, 2.4',
      marks: 7,
      stem: '<p>Let <span class="chem">f(x) = ln(x + 1)</span> and <span class="chem">g(x) = 2 - 0.5x</span>. The function <span class="chem">h</span> is defined by <span class="chem">h(x) = f(x) + g(x)</span> for <span class="chem">0 &lt;= x &lt;= 10</span>.<br>(a) Sketch the graph of <span class="chem">y = h(x)</span> on this domain. On your sketch, label the coordinates of the maximum point, the <span class="chem">x</span>-intercept and both end points. <strong>[5 marks]</strong><br>(b) Hence write down the range of <span class="chem">h</span>. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) A curve starting at <span class="chem">(0, 2)</span>, rising to a maximum at <span class="chem">(1, 2.19)</span>, then decreasing through the <span class="chem">x</span>-intercept <span class="chem">(8.50, 0)</span> to the end point <span class="chem">(10, -0.602)</span>; (b) <span class="chem">-0.602 &lt;= h(x) &lt;= 2.19</span>.</p>',
      markscheme: [
        'A1: Correct shape: rises then falls, drawn only for 0 ≤ x ≤ 10.',
        'A1: Maximum point labelled (1, 2.19).',
        'A1: x-intercept labelled (8.50, 0).',
        'A1: Left end point labelled (0, 2).',
        'A1: Right end point labelled (10, −0.602).',
        'A1: Lower bound −0.602 (from the end point, not a turning point).',
        'A1: Upper bound 2.19, both bounds included: −0.602 ≤ h(x) ≤ 2.19.'
      ],
      hints: [
        'Enter <span class="chem">Y_1 = ln(x + 1) + 2 - 0.5x</span> with window <span class="chem">0 &lt;= x &lt;= 10</span>. Use the maximum and zero tools.',
        'A sketch shows the shape and the labelled key points; it does not need to be to scale. Do not extend it beyond the domain.',
        'For the range, the least value is at an end point, not at a turning point.'
      ],
      solution: '<p>(a) On the GDC, <span class="chem">h(0) = 2</span>. The maximum tool gives <span class="chem">(1, 2.19)</span> (exactly <span class="chem">(1, 1.5 + ln 2)</span>). The zero tool gives <span class="chem">x ≈ 8.50</span>. At the right end, <span class="chem">h(10) = ln 11 - 3 ≈ -0.602</span>. The sketch rises from <span class="chem">(0, 2)</span> to <span class="chem">(1, 2.19)</span>, then falls through <span class="chem">(8.50, 0)</span> to <span class="chem">(10, -0.602)</span>.<br>(b) The greatest value is <span class="chem">2.19</span> and the least is <span class="chem">h(10) ≈ -0.602</span>, so <span class="chem">-0.602 &lt;= h(x) &lt;= 2.19</span>.</p>'
    },
    {
      id: 't2-1-q039',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.2, 2.5',
      marks: 5,
      stem: '<p>A factory starts a production run at time <span class="chem">t = 0</span>. After <span class="chem">t</span> hours it has produced <span class="chem">n(t) = 200(1 - e^{-0.3t})</span> items. The total cost, in dollars, of producing <span class="chem">n</span> items is <span class="chem">C(n) = 500 + 4n + 0.01n^2</span>. Find the time, in hours, at which the total cost reaches <span class="chem">1200</span> dollars. Give your answer to 3 significant figures.</p>',
      answer: 3.5795279851623207,
      sigfigs: 3,
      unit: 'hours',
      hints: [
        'Decode: cost depends on items, and items depend on time, so cost as a function of time is the composite <span class="chem">(C ∘ n)(t)</span>. You need to solve <span class="chem">C(n(t)) = 1200</span>.',
        'Either graph <span class="chem">Y_1 = C(n(t))</span> directly and intersect with <span class="chem">Y_2 = 1200</span>, or first solve <span class="chem">C(n) = 1200</span> for <span class="chem">n</span>, then solve <span class="chem">n(t) = n</span>.',
        '<span class="chem">C(n) = 1200</span> gives <span class="chem">n ≈ 131.66</span> items (reject the negative root).'
      ],
      solution: '<p>Decode: the cost after <span class="chem">t</span> hours is <span class="chem">C(n(t))</span>. Solve <span class="chem">C(n) = 1200</span>: <span class="chem">0.01n^2 + 4n - 700 = 0 => n ≈ 131.662</span> (the other root is negative). Then <span class="chem">200(1 - e^{-0.3t}) = 131.662 => e^{-0.3t} ≈ 0.341688 => t ≈ 3.5795</span>. The cost reaches <span class="chem">1200</span> dollars after about <span class="chem">3.58</span> hours. (Graphing <span class="chem">y = C(n(t))</span> and <span class="chem">y = 1200</span> gives the same value.)</p>'
    },
    {
      id: 't2-1-q040',
      type: 'short',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.1, 2.4',
      marks: 7,
      stem: '<p>The line <span class="chem">L</span> has gradient <span class="chem">-0.5</span> and passes through the point <span class="chem">(1, 2)</span>.<br>(a) Find the equation of <span class="chem">L</span> in the form <span class="chem">y = mx + c</span>. <strong>[2 marks]</strong><br>(b) The line <span class="chem">L</span> meets the curve <span class="chem">y = ln x + 1</span> at the point <span class="chem">P</span>. Find the coordinates of <span class="chem">P</span>. <strong>[2 marks]</strong><br>(c) The line <span class="chem">N</span> passes through <span class="chem">P</span> and is perpendicular to <span class="chem">L</span>. Find the <span class="chem">x</span>-coordinate of the point where <span class="chem">N</span> meets the <span class="chem">x</span>-axis. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">y = -0.5x + 2.5</span>; (b) <span class="chem">P(1.81, 1.59)</span>; (c) <span class="chem">x = 1.01</span> (3 s.f.).</p>',
      markscheme: [
        'M1: Substitutes into y − 2 = −0.5(x − 1).',
        'A1: y = −0.5x + 2.5.',
        'M1: Uses the GDC to solve ln x + 1 = −0.5x + 2.5 (intersection of the two graphs).',
        'A1: P(1.81, 1.59).',
        'M1: Uses the perpendicular gradient 2 (from −0.5 × 2 = −1).',
        'A1: Equation of N: y − 1.594 = 2(x − 1.812) (or equivalent).',
        'A1: Puts y = 0 to get x = 1.01.'
      ],
      hints: [
        'Use point-gradient form <span class="chem">y - y_1 = m(x - x_1)</span>.',
        'For (b), graph both and use the intersect tool. Keep full accuracy for <span class="chem">P</span> in your GDC memory.',
        'For (c), the perpendicular gradient is <span class="chem">-1/(-0.5) = 2</span>. Then put <span class="chem">y = 0</span>.'
      ],
      solution: '<p>(a) <span class="chem">y - 2 = -0.5(x - 1) => y = -0.5x + 2.5</span>.<br>(b) GDC: <span class="chem">ln x + 1 = -0.5x + 2.5</span> gives <span class="chem">x ≈ 1.81159</span>, <span class="chem">y ≈ 1.59420</span>, so <span class="chem">P(1.81, 1.59)</span>.<br>(c) <span class="chem">N</span> has gradient <span class="chem">2</span>: <span class="chem">y - 1.59420 = 2(x - 1.81159)</span>. At <span class="chem">y = 0</span>: <span class="chem">x = 1.81159 - 0.79710 = 1.01449</span>, so <span class="chem">x ≈ 1.01</span>.</p>'
    },
    {
      id: 't2-1-q041',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.4',
      marks: 3,
      stem: '<p>The graph of <span class="chem">f(x) = x^4 - 4x^2 + x</span> has two local minimum points and one local maximum point. Find the value of <span class="chem">f(x)</span> at the local maximum point. Give your answer to 3 significant figures.</p>',
      answer: 0.06274804737614482,
      sigfigs: 3,
      hints: [
        'Graph <span class="chem">y = x^4 - 4x^2 + x</span> with a window such as <span class="chem">-2.5 &lt;= x &lt;= 2.5</span>, <span class="chem">-6 &lt;= y &lt;= 3</span>.',
        'The local maximum is close to the origin, so zoom in. Use the maximum tool and read the <span class="chem">y</span>-coordinate.'
      ],
      solution: '<p>The GDC shows local minima near <span class="chem">(-1.47, -5.44)</span> and <span class="chem">(1.35, -2.62)</span> and a local maximum at <span class="chem">(0.126, 0.0627)</span>. The value at the local maximum is <span class="chem">f(0.12600) ≈ 0.0627</span> (3 s.f.). The point is easy to miss in a standard window because it is so close to the origin.</p>'
    },
    {
      id: 't2-1-q042',
      type: 'short',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.2, 2.5',
      marks: 7,
      stem: '<p>A cup of tea cools in a room. Its temperature, in °C, <span class="chem">t</span> minutes after it is poured is modelled by <span class="chem">T(t) = 20 + 70e^{-0.08t}</span>, <span class="chem">t &gt;= 0</span>.<br>(a) Write down the temperature of the tea when it is poured. <strong>[1 mark]</strong><br>(b) Write down the range of <span class="chem">T</span>. <strong>[2 marks]</strong><br>(c) Find the time taken for the tea to cool to <span class="chem">40</span>°C. <strong>[2 marks]</strong><br>(d) Explain what <span class="chem">T^{-1}(50)</span> represents in this context, and find its value. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">90</span>°C; (b) <span class="chem">20 &lt; T &lt;= 90</span>; (c) <span class="chem">15.7</span> minutes; (d) the time (in minutes) at which the temperature is <span class="chem">50</span>°C; <span class="chem">T^{-1}(50) ≈ 10.6</span> minutes.</p>',
      markscheme: [
        'A1: T(0) = 90 °C.',
        'A1: Upper bound 90 included (T ≤ 90).',
        'A1: Lower bound 20 not included (T > 20), since e^{−0.08t} > 0 for all t; so 20 < T ≤ 90.',
        'M1: Solves 20 + 70e^{−0.08t} = 40 (GDC or logarithms).',
        'A1: t = 15.7 minutes.',
        'R1: T⁻¹(50) is the time (minutes after pouring) at which the temperature is 50 °C.',
        'A1: T⁻¹(50) = 10.6 minutes.'
      ],
      hints: [
        'As <span class="chem">t</span> increases, <span class="chem">e^{-0.08t}</span> decreases towards <span class="chem">0</span> but never reaches it. Which bound of the range is included?',
        'For (c), graph <span class="chem">Y_1 = T(t)</span> and <span class="chem">Y_2 = 40</span>, then intersect.',
        'An inverse function swaps input and output: <span class="chem">T^{-1}</span> takes a temperature and returns a time.'
      ],
      solution: '<p>(a) <span class="chem">T(0) = 20 + 70 = 90</span>°C.<br>(b) <span class="chem">T</span> decreases from <span class="chem">90</span> and approaches <span class="chem">20</span> (the room temperature) without reaching it: <span class="chem">20 &lt; T &lt;= 90</span>.<br>(c) <span class="chem">70e^{-0.08t} = 20 => t = ln(3.5)/0.08 ≈ 15.66</span>, so about <span class="chem">15.7</span> minutes.<br>(d) <span class="chem">T^{-1}(50)</span> is the time after pouring at which the tea is at <span class="chem">50</span>°C. <span class="chem">70e^{-0.08t} = 30 => t = ln(7/3)/0.08 ≈ 10.59</span>, so about <span class="chem">10.6</span> minutes.</p>'
    },
    {
      id: 't2-1-q043',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.5',
      marks: 4,
      stem: '<p>Let <span class="chem">f(x) = x^3 + x</span> and <span class="chem">g(x) = 2x - 1</span>, for <span class="chem">x ∈ ℝ</span>. The composite function <span class="chem">f ∘ g</span> is one-to-one. Find <span class="chem">(f ∘ g)^{-1}(20)</span>, giving your answer to 3 significant figures.</p>',
      answer: 1.7958520620959297,
      sigfigs: 3,
      hints: [
        'Decode: <span class="chem">(f ∘ g)^{-1}(20) = a</span> means <span class="chem">f(g(a)) = 20</span>. So you need the input that makes the composite equal to <span class="chem">20</span>.',
        'Graph <span class="chem">Y_1 = (2x - 1)^3 + (2x - 1)</span> and <span class="chem">Y_2 = 20</span>, or first solve <span class="chem">u^3 + u = 20</span> for <span class="chem">u = g(a)</span>, then solve <span class="chem">2a - 1 = u</span>.'
      ],
      solution: '<p>Decode: find <span class="chem">a</span> with <span class="chem">(f ∘ g)(a) = 20</span>. Let <span class="chem">u = g(a)</span>. Then <span class="chem">u^3 + u = 20</span>, and the GDC gives <span class="chem">u ≈ 2.59170</span>. So <span class="chem">2a - 1 = 2.59170 => a ≈ 1.79585</span>. <span class="chem">(f ∘ g)^{-1}(20) ≈ 1.80</span> (3 s.f.).</p>'
    },
    {
      id: 't2-1-q044',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.3',
      marks: 4,
      stem: '<p>Let <span class="chem">f(x) = 6 ln(x + 1)</span> and <span class="chem">g(x) = x</span>, for <span class="chem">0 &lt;= x &lt;= 12</span>. On this interval the graph of <span class="chem">f</span> lies on or above the graph of <span class="chem">g</span>. Find the greatest vertical distance between the two graphs. Give your answer to 3 significant figures.</p>',
      answer: 5.750556815368331,
      sigfigs: 3,
      hints: [
        'Decode: the vertical distance at a given <span class="chem">x</span> is <span class="chem">f(x) - g(x)</span>. Graph the difference function <span class="chem">d(x) = 6 ln(x + 1) - x</span> and find its maximum.',
        'Remember to check the end points too, not only the turning point.'
      ],
      solution: '<p>Decode: the vertical distance is the difference <span class="chem">d(x) = f(x) - g(x) = 6 ln(x + 1) - x</span>. The GDC maximum tool gives a maximum at <span class="chem">x = 5</span>, with <span class="chem">d(5) = 6 ln 6 - 5 ≈ 5.7506</span>. The end points give <span class="chem">d(0) = 0</span> and <span class="chem">d(12) ≈ 3.39</span>, which are smaller. The greatest vertical distance is <span class="chem">5.75</span> (3 s.f.).</p>'
    },
    {
      id: 't2-1-q045',
      type: 'short',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.2, 2.4, 2.5',
      marks: 7,
      stem: '<p>Let <span class="chem">f(x) = 3 + 2 ln(x - 1)</span> for <span class="chem">x &gt; 1</span>.<br>(a) Find an expression for <span class="chem">f^{-1}(x)</span>. <strong>[3 marks]</strong><br>(b) Write down the range of <span class="chem">f^{-1}</span>. <strong>[1 mark]</strong><br>(c) The graphs of <span class="chem">y = f(x)</span> and <span class="chem">y = f^{-1}(x)</span> intersect at two points. Find the coordinates of both points. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">f^{-1}(x) = 1 + e^{(x - 3)/2}</span>; (b) <span class="chem">f^{-1}(x) &gt; 1</span>; (c) <span class="chem">(1.46, 1.46)</span> and <span class="chem">(6.36, 6.36)</span>.</p>',
      markscheme: [
        'M1: Swaps x and y: x = 3 + 2 ln(y − 1), so ln(y − 1) = (x − 3)/2.',
        'M1: Takes the exponential: y − 1 = e^{(x − 3)/2}.',
        'A1: f⁻¹(x) = 1 + e^{(x − 3)/2}.',
        'A1: Range of f⁻¹ is f⁻¹(x) > 1 (the domain of f).',
        'R1: Since f is increasing, the intersections lie on y = x, so solve 3 + 2 ln(x − 1) = x (or graph f and f⁻¹ on the GDC).',
        'A1: (1.46, 1.46).',
        'A1: (6.36, 6.36).'
      ],
      hints: [
        'For (a), swap <span class="chem">x</span> and <span class="chem">y</span>, isolate the logarithm and exponentiate.',
        'The range of <span class="chem">f^{-1}</span> is the domain of <span class="chem">f</span>.',
        'For an increasing function, the graphs of <span class="chem">f</span> and <span class="chem">f^{-1}</span> meet on the line <span class="chem">y = x</span>. Graph <span class="chem">y = 3 + 2 ln(x - 1)</span> and <span class="chem">y = x</span>.'
      ],
      solution: '<p>(a) <span class="chem">x = 3 + 2 ln(y - 1) => ln(y - 1) = (x - 3)/2 => f^{-1}(x) = 1 + e^{(x - 3)/2}</span>, <span class="chem">x ∈ ℝ</span>.<br>(b) Range of <span class="chem">f^{-1}</span> = domain of <span class="chem">f</span>: <span class="chem">f^{-1}(x) &gt; 1</span>.<br>(c) <span class="chem">f</span> is increasing, so intersections of <span class="chem">f</span> and <span class="chem">f^{-1}</span> lie on <span class="chem">y = x</span>. GDC: <span class="chem">3 + 2 ln(x - 1) = x</span> gives <span class="chem">x ≈ 1.46392</span> and <span class="chem">x ≈ 6.35669</span>. The points are <span class="chem">(1.46, 1.46)</span> and <span class="chem">(6.36, 6.36)</span>.</p>'
    },
    {
      id: 't2-1-q046',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.2',
      marks: 4,
      stem: '<p>The largest possible domain of <span class="chem">f(x) = sqrt(ln x - 0.1x)</span> is <span class="chem">a &lt;= x &lt;= b</span>. Find the value of <span class="chem">b</span>, giving your answer to 3 significant figures.</p>',
      answer: 35.77152063957297,
      sigfigs: 3,
      hints: [
        'Decode: the domain is where the expression under the square root is not negative, so you need <span class="chem">ln x - 0.1x &gt;= 0</span>. The end points <span class="chem">a</span> and <span class="chem">b</span> are the zeros of <span class="chem">ln x - 0.1x</span>.',
        'Graph <span class="chem">y = ln x - 0.1x</span>. The second zero is far to the right, so use a window up to about <span class="chem">x = 50</span>.'
      ],
      solution: '<p>Decode: we need <span class="chem">ln x - 0.1x &gt;= 0</span>. The GDC graph of <span class="chem">y = ln x - 0.1x</span> is above the <span class="chem">x</span>-axis between its two zeros, <span class="chem">x ≈ 1.12</span> and <span class="chem">x ≈ 35.7715</span>. So the domain is <span class="chem">1.12 &lt;= x &lt;= 35.8</span>, and <span class="chem">b ≈ 35.8</span> (3 s.f.).</p>'
    },
    {
      id: 't2-1-q047',
      type: 'short',
      tier: 'exam',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.2, 2.4',
      marks: 5,
      stem: '<p>Let <span class="chem">f(x) = 4/(1 + e^{-x}) - 2</span>, for <span class="chem">x ∈ ℝ</span>.<br>(a) Write down the equations of the two horizontal asymptotes of the graph of <span class="chem">f</span>. <strong>[2 marks]</strong><br>(b) Hence write down the range of <span class="chem">f</span>. <strong>[1 mark]</strong><br>(c) Find the value of <span class="chem">x</span> for which <span class="chem">f(x) = 1.5</span>. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">y = 2</span> and <span class="chem">y = -2</span>; (b) <span class="chem">-2 &lt; f(x) &lt; 2</span>; (c) <span class="chem">x = ln 7 ≈ 1.95</span>.</p>',
      markscheme: [
        'A1: y = 2 (as x → ∞, e^{−x} → 0).',
        'A1: y = −2 (as x → −∞, e^{−x} → ∞).',
        'A1: Range −2 < f(x) < 2 (both bounds excluded).',
        'M1: Solves 4/(1 + e^{−x}) − 2 = 1.5 with the GDC, or rearranges to e^{−x} = 1/7.',
        'A1: x = 1.95 (= ln 7).'
      ],
      hints: [
        'Use the GDC table for large positive and large negative <span class="chem">x</span>, or think about what <span class="chem">e^{-x}</span> does at each end.',
        'The graph approaches both asymptotes but never reaches them, so neither bound of the range is included.',
        'For (c), intersect <span class="chem">y = f(x)</span> with <span class="chem">y = 1.5</span>.'
      ],
      solution: '<p>(a) As <span class="chem">x -&gt; infty</span>, <span class="chem">e^{-x} -&gt; 0</span>, so <span class="chem">f(x) -&gt; 4 - 2 = 2</span>. As <span class="chem">x -&gt; -infty</span>, <span class="chem">e^{-x} -&gt; infty</span>, so <span class="chem">f(x) -&gt; -2</span>. Asymptotes <span class="chem">y = 2</span> and <span class="chem">y = -2</span>.<br>(b) <span class="chem">f</span> is increasing and never reaches either asymptote: <span class="chem">-2 &lt; f(x) &lt; 2</span>.<br>(c) <span class="chem">4/(1 + e^{-x}) = 3.5 => 1 + e^{-x} = 8/7 => e^{-x} = 1/7 => x = ln 7 ≈ 1.95</span>.</p>'
    },
    {
      id: 't2-1-q048',
      type: 'numeric',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.2, 2.5',
      marks: 5,
      stem: '<p>A spherical balloon is being inflated. Its radius, in cm, <span class="chem">t</span> seconds after inflation starts is <span class="chem">r(t) = 2 + 0.8 ln(t + 1)</span>. The volume of a sphere of radius <span class="chem">r</span> is <span class="chem">V(r) = (4/3)pi r^3</span>. The balloon bursts when its volume first reaches <span class="chem">300</span> <span class="unit">cm3</span>. Find how many seconds after inflation starts the balloon bursts. Give your answer to 3 significant figures.</p>',
      answer: 13.746978879767827,
      sigfigs: 3,
      unit: 's',
      hints: [
        'Decode: the volume as a function of time is the composite <span class="chem">(V ∘ r)(t)</span>. "First reaches <span class="chem">300</span>" means solve <span class="chem">V(r(t)) = 300</span> and take the smallest positive <span class="chem">t</span>.',
        'Work backwards: first find the radius at which <span class="chem">V = 300</span>, then the time at which <span class="chem">r(t)</span> equals that radius.',
        '<span class="chem">(4/3)pi r^3 = 300</span> gives <span class="chem">r ≈ 4.1528</span> cm.'
      ],
      solution: '<p>Decode: we need the time when <span class="chem">(V ∘ r)(t) = 300</span>. From <span class="chem">(4/3)pi r^3 = 300</span>: <span class="chem">r = (225/pi)^{1/3} ≈ 4.15283</span>. Then <span class="chem">2 + 0.8 ln(t + 1) = 4.15283 => ln(t + 1) ≈ 2.69104 => t ≈ e^{2.69104} - 1 ≈ 13.747</span>. Since <span class="chem">r</span> (and so <span class="chem">V</span>) is increasing, this is the first time. The balloon bursts after about <span class="chem">13.7</span> seconds. (Graphing <span class="chem">y = (4/3)pi(2 + 0.8 ln(x + 1))^3</span> against <span class="chem">y = 300</span> gives the same value.)</p>'
    },
    {
      id: 't2-1-q049',
      type: 'numeric',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.1',
      marks: 6,
      stem: '<p>On a coastal map with axes in kilometres, a ship sails in a straight line from the harbour <span class="chem">H(0, 1)</span> through the buoy <span class="chem">B(10, 4)</span> and beyond. A lighthouse stands at <span class="chem">L(4.2, 7.5)</span>. Find the shortest distance between the lighthouse and the path of the ship. Give your answer in kilometres to 3 significant figures.</p>',
      answer: 5.019009734558833,
      sigfigs: 3,
      unit: 'km',
      hints: [
        'Decode: the shortest distance from a point to a line is measured along the perpendicular. Find the foot of the perpendicular <span class="chem">F</span> from <span class="chem">L</span> to the line <span class="chem">HB</span>, then the length <span class="chem">LF</span>.',
        'Line <span class="chem">HB</span>: gradient <span class="chem">0.3</span>, so <span class="chem">y = 0.3x + 1</span>. The perpendicular through <span class="chem">L</span> has gradient <span class="chem">-10/3</span>.',
        'Solve the two line equations simultaneously (GDC) to get <span class="chem">F</span>, then use the distance formula.'
      ],
      solution: '<p>Decode: "shortest distance to a path" means the perpendicular distance. Line <span class="chem">HB</span>: <span class="chem">m = 3/10</span>, so <span class="chem">y = 0.3x + 1</span>. Perpendicular through <span class="chem">L</span>: <span class="chem">y - 7.5 = -(10/3)(x - 4.2)</span>. Solving simultaneously: <span class="chem">F ≈ (5.6422, 2.6927)</span>. Then <span class="chem">LF = sqrt((5.6422 - 4.2)^2 + (2.6927 - 7.5)^2) ≈ sqrt(2.0800 + 23.1101) ≈ 5.0190</span>. The shortest distance is <span class="chem">5.02</span> km (3 s.f.). Because <span class="chem">F</span> has <span class="chem">x &gt; 0</span>, it lies on the path of the ship after it leaves the harbour.</p>'
    },
    {
      id: 't2-1-q050',
      type: 'short',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.2, 2.3, 2.4',
      marks: 7,
      stem: '<p>After a patient takes a tablet, the concentration of the drug in the blood, in mg per litre, is modelled by <span class="chem">C(t) = 10t e^{-0.5t}</span>, where <span class="chem">t</span> is the time in hours, <span class="chem">0 &lt;= t &lt;= 12</span>. The drug is effective while its concentration is at least <span class="chem">2</span> mg per litre.<br>(a) Sketch the graph of <span class="chem">C</span>, labelling the coordinates of the maximum point and of the end point at <span class="chem">t = 12</span>. <strong>[3 marks]</strong><br>(b) Find the length of time for which the drug is effective. <strong>[4 marks]</strong></p>',
      answer: '<p>(a) A curve from <span class="chem">(0, 0)</span> rising to a maximum <span class="chem">(2, 7.36)</span>, then decreasing to <span class="chem">(12, 0.297)</span>; (b) effective for <span class="chem">0.224 &lt;= t &lt;= 7.15</span>, a length of <span class="chem">6.93</span> hours.</p>',
      markscheme: [
        'A1: Correct shape: starts at the origin, single maximum, decreasing towards (but above) the t-axis, only for 0 ≤ t ≤ 12.',
        'A1: Maximum labelled (2, 7.36).',
        'A1: End point labelled (12, 0.297).',
        'M1: Interprets "effective" as C(t) ≥ 2 and draws or uses the line C = 2.',
        'A1: t = 0.224 (first intersection).',
        'A1: t = 7.15 (second intersection).',
        'A1: Length of time 7.154 − 0.224 = 6.93 hours.'
      ],
      hints: [
        'Decode: "effective while at least 2" means you need the time interval where the curve is on or above the line <span class="chem">C = 2</span>. The question asks for the length of that interval, not the times themselves.',
        'Graph <span class="chem">Y_1 = 10x e^{-0.5x}</span> and <span class="chem">Y_2 = 2</span> for <span class="chem">0 &lt;= x &lt;= 12</span>. There are two intersections.',
        'Subtract the two <span class="chem">t</span>-values using full GDC accuracy, then round.'
      ],
      solution: '<p>Decode: we need the length of the interval on which <span class="chem">C(t) &gt;= 2</span>.<br>(a) GDC: maximum at <span class="chem">(2, 20/e) ≈ (2, 7.36)</span>; <span class="chem">C(12) = 120e^{-6} ≈ 0.297</span>. The sketch rises from the origin to the maximum and then decays towards the <span class="chem">t</span>-axis.<br>(b) Intersections of <span class="chem">y = C(t)</span> and <span class="chem">y = 2</span>: <span class="chem">t_1 ≈ 0.22367</span> and <span class="chem">t_2 ≈ 7.15430</span>. The curve is above the line between them, so the drug is effective for <span class="chem">7.15430 - 0.22367 ≈ 6.93</span> hours.</p>'
    },
    {
      id: 't2-1-q051',
      type: 'numeric',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.4',
      marks: 5,
      stem: '<p>Consider the equation <span class="chem">x^2 e^{-x} = k</span>, where <span class="chem">k</span> is a positive constant and <span class="chem">x ∈ ℝ</span>. There is exactly one value of <span class="chem">k</span> for which the equation has exactly two solutions. Find this value of <span class="chem">k</span>, giving your answer to 3 significant figures.</p>',
      answer: 0.5413411329464508,
      sigfigs: 3,
      hints: [
        'Decode: the solutions are the intersections of the curve <span class="chem">y = x^2 e^{-x}</span> with the horizontal line <span class="chem">y = k</span>. Count intersections as the line moves up.',
        'Graph <span class="chem">y = x^2 e^{-x}</span>. For <span class="chem">x &lt; 0</span> it is decreasing; for <span class="chem">x &gt; 0</span> it rises to a local maximum and falls towards <span class="chem">0</span>.',
        'A horizontal line meets the curve exactly twice when it touches a turning point.'
      ],
      solution: '<p>Decode: count the intersections of <span class="chem">y = x^2 e^{-x}</span> with the horizontal line <span class="chem">y = k</span>, <span class="chem">k &gt; 0</span>. The GDC shows a local minimum at <span class="chem">(0, 0)</span> and a local maximum at <span class="chem">(2, 0.541)</span>; the curve tends to <span class="chem">infty</span> as <span class="chem">x -&gt; -infty</span> and to <span class="chem">0</span> as <span class="chem">x -&gt; infty</span>. For <span class="chem">0 &lt; k &lt; 0.541</span> there are three intersections, for <span class="chem">k &gt; 0.541</span> there is one, and for <span class="chem">k = 4e^{-2} ≈ 0.5413</span> the line touches the maximum, giving exactly two. So <span class="chem">k ≈ 0.541</span>.</p>'
    },
    {
      id: 't2-1-q052',
      type: 'short',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.2, 2.5',
      marks: 7,
      stem: '<p>Let <span class="chem">f(x) = x^2 - 4x + 1</span> and <span class="chem">g(x) = e^{0.5x}</span>, for <span class="chem">x ∈ ℝ</span>.<br>(a) Write down an expression for <span class="chem">(f ∘ g)(x)</span>. <strong>[1 mark]</strong><br>(b) Solve <span class="chem">(f ∘ g)(x) = 0</span>, giving your answers to 3 significant figures. <strong>[2 marks]</strong><br>(c) Find the range of <span class="chem">f ∘ g</span>. <strong>[2 marks]</strong><br>(d) Find the range of <span class="chem">g ∘ f</span>. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">e^x - 4e^{0.5x} + 1</span>; (b) <span class="chem">x = -2.63</span> or <span class="chem">x = 2.63</span>; (c) <span class="chem">(f ∘ g)(x) &gt;= -3</span>; (d) <span class="chem">(g ∘ f)(x) &gt;= 0.223</span>.</p>',
      markscheme: [
        'A1: (f ∘ g)(x) = (e^{0.5x})² − 4e^{0.5x} + 1 = e^x − 4e^{0.5x} + 1.',
        'A1: x = −2.63 (GDC, or e^{0.5x} = 2 − √3).',
        'A1: x = 2.63 (GDC, or e^{0.5x} = 2 + √3).',
        'M1: Considers f on the range of g (u = e^{0.5x} > 0), where the vertex u = 2 is attained, or finds the minimum of the graph on the GDC.',
        'A1: (f ∘ g)(x) ≥ −3.',
        'M1: Uses the range of f, f(x) ≥ −3, and that g is increasing.',
        'A1: (g ∘ f)(x) ≥ e^{−1.5} = 0.223.'
      ],
      hints: [
        'Decode: the range of a composite depends on which values the inner function can feed into the outer one. For <span class="chem">f ∘ g</span>, the inner outputs are <span class="chem">u = e^{0.5x} &gt; 0</span>; for <span class="chem">g ∘ f</span>, they are the outputs of the quadratic.',
        'Complete the square: <span class="chem">f(u) = (u - 2)^2 - 3</span>. Is <span class="chem">u = 2</span> one of the values <span class="chem">e^{0.5x}</span> can take?',
        'Check each range on the GDC by graphing the composite and finding its minimum.'
      ],
      solution: '<p>Decode: work out what the inner function feeds in, then apply the outer function to that set.<br>(a) <span class="chem">(f ∘ g)(x) = e^x - 4e^{0.5x} + 1</span>.<br>(b) GDC zeros: <span class="chem">x ≈ ±2.63</span> (exactly <span class="chem">x = 2 ln(2 +- sqrt(3))</span>, and these are negatives of each other because <span class="chem">(2 + sqrt(3))(2 - sqrt(3)) = 1</span>).<br>(c) <span class="chem">f(u) = (u - 2)^2 - 3</span> with <span class="chem">u = e^{0.5x} &gt; 0</span>. The value <span class="chem">u = 2</span> is attained (at <span class="chem">x = 2 ln 2</span>), so the minimum <span class="chem">-3</span> is reached and the range is <span class="chem">(f ∘ g)(x) &gt;= -3</span>.<br>(d) <span class="chem">f(x) &gt;= -3</span> for all real <span class="chem">x</span>, and <span class="chem">g</span> is increasing, so <span class="chem">(g ∘ f)(x) &gt;= e^{-1.5} ≈ 0.223</span>.</p>'
    },
    {
      id: 't2-1-q053',
      type: 'numeric',
      tier: 'challenge',
      level: 'ahl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 2.14',
      marks: 5,
      stem: '<p>Let <span class="chem">f(x) = x^3 - 3x^2 - 9x + 4</span> for <span class="chem">x &gt;= a</span>, where <span class="chem">a</span> is the smallest value for which <span class="chem">f</span> has an inverse. Find <span class="chem">f^{-1}(5)</span>, giving your answer to 3 significant figures.</p>',
      answer: 4.884483701939332,
      sigfigs: 3,
      hints: [
        'Decode: there are two steps. First find the restricted domain (start at the last turning point, so that <span class="chem">f</span> is one-to-one). Then <span class="chem">f^{-1}(5)</span> is the solution of <span class="chem">f(x) = 5</span> that lies in that domain.',
        'Use the GDC to find the turning points of <span class="chem">f</span>: they are at <span class="chem">x = -1</span> and <span class="chem">x = 3</span>. So <span class="chem">a = 3</span>.',
        '<span class="chem">f(x) = 5</span> has three real solutions. Only one of them satisfies <span class="chem">x &gt;= 3</span>.'
      ],
      solution: '<p>Decode: restrict the domain first, then solve on that branch only. The GDC (or <span class="chem">f\'(x) = 3(x - 3)(x + 1)</span>) gives a local maximum at <span class="chem">x = -1</span> and a local minimum at <span class="chem">x = 3</span>, so <span class="chem">f</span> is one-to-one on <span class="chem">x &gt;= a</span> exactly when <span class="chem">a &gt;= 3</span>, and <span class="chem">a = 3</span>. The equation <span class="chem">x^3 - 3x^2 - 9x + 4 = 5</span> has solutions <span class="chem">x ≈ -1.77</span>, <span class="chem">-0.116</span> and <span class="chem">4.8845</span>. Only <span class="chem">4.8845</span> is in the domain <span class="chem">x &gt;= 3</span>, so <span class="chem">f^{-1}(5) ≈ 4.88</span> (3 s.f.).</p>'
    },
    {
      id: 't2-1-q054',
      type: 'short',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.2, 2.4',
      marks: 7,
      stem: '<p>Two courier companies charge for a delivery of <span class="chem">x</span> km. Company A charges <span class="chem">A(x) = 40 + 12 sqrt(x)</span> dollars and company B charges <span class="chem">B(x) = 15 + 0.8x</span> dollars, for <span class="chem">x &gt; 0</span>.<br>(a) Find the charge of each company for a delivery of <span class="chem">100</span> km. <strong>[2 marks]</strong><br>(b) Find the distance for which both companies charge the same amount. <strong>[2 marks]</strong><br>(c) Write down the set of distances for which company A is cheaper. <strong>[1 mark]</strong><br>(d) A customer has a budget of <span class="chem">300</span> dollars and may choose either company. Find the greatest distance that can be paid for. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) A: <span class="chem">160</span> dollars, B: <span class="chem">95</span> dollars; (b) <span class="chem">284</span> km; (c) <span class="chem">x &gt; 284</span>; (d) <span class="chem">469</span> km (with company A).</p>',
      markscheme: [
        'A1: A(100) = 40 + 12(10) = 160 dollars.',
        'A1: B(100) = 15 + 80 = 95 dollars.',
        'M1: Solves 40 + 12√x = 15 + 0.8x on the GDC (intersection).',
        'A1: x = 284 km.',
        'A1: Company A is cheaper for x > 284 (B is cheaper for 0 < x < 284).',
        'M1: Solves A(x) = 300 and B(x) = 300 (or recognises A is cheaper at long distances and solves A(x) = 300).',
        'A1: Greatest distance 469 km, using company A (company B allows only 356 km).'
      ],
      hints: [
        'Decode: each company is a function of distance. "Charge the same" is an intersection of the two graphs; "cheaper" is where one graph lies below the other.',
        'Graph <span class="chem">Y_1 = 40 + 12 sqrt(x)</span> and <span class="chem">Y_2 = 15 + 0.8x</span> for <span class="chem">0 &lt; x &lt;= 600</span>, <span class="chem">0 &lt;= y &lt;= 500</span>.',
        'For (d), the question is asking for the input that gives an output of <span class="chem">300</span>, for whichever company allows the longer distance.'
      ],
      solution: '<p>Decode: compare two models graphically; part (d) asks for an inverse value.<br>(a) <span class="chem">A(100) = 160</span> dollars, <span class="chem">B(100) = 95</span> dollars.<br>(b) GDC intersection of <span class="chem">y = 40 + 12 sqrt(x)</span> and <span class="chem">y = 15 + 0.8x</span>: <span class="chem">x ≈ 284.06</span>, about <span class="chem">284</span> km (both charge about <span class="chem">242</span> dollars).<br>(c) For large <span class="chem">x</span> the linear charge grows faster, so A is cheaper for <span class="chem">x &gt; 284</span>.<br>(d) <span class="chem">A(x) = 300 => sqrt(x) = 260/12 => x ≈ 469.4</span>; <span class="chem">B(x) = 300 => x = 356.25</span>. The greatest distance is about <span class="chem">469</span> km, using company A.</p>'
    },
    {
      id: 't2-1-q055',
      type: 'numeric',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.2, 2.5',
      marks: 4,
      stem: '<p>Let <span class="chem">f(x) = x^3 + 2x</span> for <span class="chem">x ∈ ℝ</span>. The function <span class="chem">f</span> is increasing, so <span class="chem">f^{-1}</span> exists. Find the value of <span class="chem">(f^{-1} ∘ f^{-1})(10)</span>, giving your answer to 3 significant figures.</p>',
      answer: 0.7295558412437901,
      sigfigs: 3,
      hints: [
        'Decode: <span class="chem">(f^{-1} ∘ f^{-1})(10) = f^{-1}(f^{-1}(10))</span>. You cannot write <span class="chem">f^{-1}</span> as a formula, but you can find each inverse value by solving an equation.',
        'First solve <span class="chem">x^3 + 2x = 10</span> to get <span class="chem">p = f^{-1}(10)</span>. Store it in the GDC.',
        'Then solve <span class="chem">x^3 + 2x = p</span>. Do not round <span class="chem">p</span> before the second step.'
      ],
      solution: '<p>Decode: applying <span class="chem">f^{-1}</span> twice means solving <span class="chem">f(x) = ...</span> twice. Step 1: <span class="chem">x^3 + 2x = 10</span> gives <span class="chem">p = f^{-1}(10) ≈ 1.84742</span>. Step 2: <span class="chem">x^3 + 2x = 1.84742</span> gives <span class="chem">x ≈ 0.729556</span>. So <span class="chem">(f^{-1} ∘ f^{-1})(10) ≈ 0.730</span> (3 s.f.). Check: <span class="chem">f(f(0.729556)) = f(1.84742) ≈ 10</span>.</p>'
    },
    {
      id: 't2-1-q056',
      type: 'short',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.2, 2.3, 2.4',
      marks: 8,
      stem: '<p>Let <span class="chem">f(x) = 4x/(x^2 + 1) + 1</span> for <span class="chem">-6 &lt;= x &lt;= 6</span>.<br>(a) Sketch the graph of <span class="chem">y = f(x)</span>. Label the coordinates of the local maximum and local minimum points, the <span class="chem">x</span>-intercepts and both end points. <strong>[4 marks]</strong><br>(b) Write down the range of <span class="chem">f</span>. <strong>[2 marks]</strong><br>(c) Find the number of solutions of the equation <span class="chem">f(x) = 1.5</span>. Justify your answer. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) Starts at <span class="chem">(-6, 0.351)</span>, falls through <span class="chem">(-3.73, 0)</span> to the minimum <span class="chem">(-1, -1)</span>, rises through <span class="chem">(-0.268, 0)</span> to the maximum <span class="chem">(1, 3)</span>, then falls to <span class="chem">(6, 1.65)</span>; (b) <span class="chem">-1 &lt;= f(x) &lt;= 3</span>; (c) one solution, <span class="chem">x ≈ 0.127</span>, because the other solution of <span class="chem">f(x) = 1.5</span> is <span class="chem">x ≈ 7.87</span>, outside the domain.</p>',
      markscheme: [
        'A1: Correct shape on −6 ≤ x ≤ 6 only (one minimum, one maximum).',
        'A1: Minimum (−1, −1) and maximum (1, 3) labelled.',
        'A1: x-intercepts (−3.73, 0) and (−0.268, 0) labelled.',
        'A1: End points (−6, 0.351) and (6, 1.65) labelled.',
        'A1: Lower bound −1 (from the minimum point).',
        'A1: Upper bound 3, with both included: −1 ≤ f(x) ≤ 3.',
        'R1: The line y = 1.5 meets the curve only once on the domain: for 1 < x ≤ 6, f(x) ≥ f(6) ≈ 1.65 > 1.5, and the second root x ≈ 7.87 lies outside the domain.',
        'A1: One solution (x ≈ 0.127).'
      ],
      hints: [
        'Decode: for (c), the answer depends on the <strong>domain</strong>. Count the intersections of <span class="chem">y = f(x)</span> and <span class="chem">y = 1.5</span> only for <span class="chem">-6 &lt;= x &lt;= 6</span>.',
        'Set the window to <span class="chem">-6 &lt;= x &lt;= 6</span>, <span class="chem">-2 &lt;= y &lt;= 4</span>. Use the maximum, minimum and zero tools, and evaluate <span class="chem">f(-6)</span> and <span class="chem">f(6)</span>.',
        'Compare <span class="chem">f(6)</span> with <span class="chem">1.5</span>. Does the curve drop below <span class="chem">1.5</span> before <span class="chem">x = 6</span>?'
      ],
      solution: '<p>Decode: (c) is a counting question in which the domain decides the answer.<br>(a) GDC: minimum <span class="chem">(-1, -1)</span>, maximum <span class="chem">(1, 3)</span>, zeros <span class="chem">x = -2 +- sqrt(3) ≈ -3.73, -0.268</span>, end points <span class="chem">f(-6) = 13/37 ≈ 0.351</span> and <span class="chem">f(6) = 61/37 ≈ 1.65</span>.<br>(b) <span class="chem">-1 &lt;= f(x) &lt;= 3</span>.<br>(c) <span class="chem">f(x) = 1.5 => 4x/(x^2 + 1) = 0.5 => x^2 - 8x + 1 = 0 => x = 4 +- sqrt(15) ≈ 0.127, 7.87</span>. Only <span class="chem">0.127</span> lies in the domain. On the GDC, the curve stays above <span class="chem">1.5</span> from <span class="chem">x ≈ 0.127</span> to <span class="chem">x = 6</span> (where <span class="chem">f(6) ≈ 1.65</span>). There is exactly <strong>one</strong> solution.</p>'
    },
    {
      id: 't2-1-q057',
      type: 'numeric',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.2, 2.4',
      marks: 5,
      stem: '<p>Let <span class="chem">f(x) = sqrt(4 - x) ln(x + 1)</span>. The function <span class="chem">f</span> is defined on its largest possible real domain, and its range is <span class="chem">f(x) &lt;= M</span>. Find the value of <span class="chem">M</span>, giving your answer to 3 significant figures.</p>',
      answer: 1.5607392633715027,
      sigfigs: 3,
      hints: [
        'Decode: first find the domain from both pieces: <span class="chem">4 - x &gt;= 0</span> and <span class="chem">x + 1 &gt; 0</span>. The range has the form <span class="chem">f(x) &lt;= M</span>, so <span class="chem">M</span> is the greatest value of <span class="chem">f</span> on that domain.',
        'The domain is <span class="chem">-1 &lt; x &lt;= 4</span>. Graph <span class="chem">f</span> on this interval: it tends to <span class="chem">-infty</span> as <span class="chem">x -&gt; -1^+</span>.',
        'Use the maximum tool on the GDC.'
      ],
      solution: '<p>Decode: the range is bounded above only, so <span class="chem">M</span> is the maximum value of <span class="chem">f</span> on its domain. Domain: <span class="chem">4 - x &gt;= 0</span> and <span class="chem">x + 1 &gt; 0</span>, so <span class="chem">-1 &lt; x &lt;= 4</span>. As <span class="chem">x -&gt; -1^+</span>, <span class="chem">ln(x + 1) -&gt; -infty</span> while <span class="chem">sqrt(4 - x) -&gt; sqrt(5)</span>, so <span class="chem">f -&gt; -infty</span>; and <span class="chem">f(4) = 0</span>. The GDC maximum is at <span class="chem">x ≈ 2.17</span>, with value <span class="chem">f ≈ 1.56074</span>. So <span class="chem">M ≈ 1.56</span> (3 s.f.).</p>'
    },
    {
      id: 't2-1-q058',
      type: 'short',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.2, 2.5',
      marks: 7,
      stem: '<p>Oil leaking from a damaged tanker spreads as a circle on the sea. The radius of the circle, in metres, <span class="chem">t</span> hours after the leak starts is <span class="chem">r(t) = 80t^{0.6}</span>. The area of a circle of radius <span class="chem">r</span> metres is <span class="chem">S(r) = pi r^2</span> square metres.<br>(a) Find an expression for <span class="chem">(S ∘ r)(t)</span> in the form <span class="chem">k t^n</span>, giving the exact value of <span class="chem">k</span>. <strong>[2 marks]</strong><br>(b) The coastguard must be told when the slick covers <span class="chem">1</span> <span class="unit">km2</span>. Find how many hours after the leak starts this happens. <strong>[3 marks]</strong><br>(c) Find <span class="chem">(S ∘ r)^{-1}(250 000)</span> and explain what it represents. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">(S ∘ r)(t) = 6400 pi t^{1.2}</span>; (b) <span class="chem">25.9</span> hours; (c) <span class="chem">8.17</span>: the number of hours after the leak starts at which the slick covers <span class="chem">250 000</span> <span class="unit">m2</span> (<span class="chem">0.25</span> <span class="unit">km2</span>).</p>',
      markscheme: [
        'M1: Substitutes r(t) into S: π(80t^{0.6})².',
        'A1: (S ∘ r)(t) = 6400π t^{1.2}.',
        'M1: Converts units: 1 km² = 1 000 000 m².',
        'M1: Solves 6400π t^{1.2} = 1 000 000 (GDC or logarithms).',
        'A1: t = 25.9 hours.',
        'A1: (S ∘ r)⁻¹(250 000) = 8.17.',
        'R1: It is the time, in hours after the leak starts, at which the area of the slick is 250 000 m².'
      ],
      hints: [
        'Decode: area depends on radius, and radius depends on time, so area as a function of time is <span class="chem">S(r(t))</span>. Watch the units: the model uses metres, but (b) gives an area in square kilometres.',
        '<span class="chem">1</span> <span class="unit">km2</span> <span class="chem">= 1000 × 1000 = 10^6</span> <span class="unit">m2</span>, not <span class="chem">1000</span> <span class="unit">m2</span>.',
        'An inverse takes an output (an area) and returns the input (a time). Solve <span class="chem">6400 pi t^{1.2} = 250 000</span>.'
      ],
      solution: '<p>Decode: build the composite, convert units, then use the inverse to go from area back to time.<br>(a) <span class="chem">(S ∘ r)(t) = pi(80t^{0.6})^2 = 6400 pi t^{1.2}</span>.<br>(b) <span class="chem">1</span> <span class="unit">km2</span> <span class="chem">= 10^6</span> <span class="unit">m2</span>. <span class="chem">6400 pi t^{1.2} = 10^6 => t^{1.2} ≈ 49.736 => t ≈ 25.9</span> hours.<br>(c) <span class="chem">6400 pi t^{1.2} = 250 000 => t ≈ 8.17</span>. So <span class="chem">(S ∘ r)^{-1}(250 000) ≈ 8.17</span>: the slick covers <span class="chem">250 000</span> <span class="unit">m2</span> about <span class="chem">8.17</span> hours after the leak starts.</p>'
    },
    {
      id: 't2-1-q059',
      type: 'numeric',
      tier: 'challenge',
      level: 'sl',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 2.2, 2.4',
      marks: 5,
      stem: '<p>Let <span class="chem">f(x) = 1 - x^3</span> for <span class="chem">x ∈ ℝ</span>. The graphs of <span class="chem">y = f(x)</span> and <span class="chem">y = f^{-1}(x)</span> intersect at exactly five points. Find the largest <span class="chem">x</span>-coordinate of these five points, giving your answer to 3 significant figures.</p>',
      answer: 1.1537213755417757,
      sigfigs: 3,
      hints: [
        'Decode: this <span class="chem">f</span> is <strong>decreasing</strong>, so its graph can meet the graph of <span class="chem">f^{-1}</span> at points that are not on <span class="chem">y = x</span>. Solving <span class="chem">f(x) = x</span> finds only one of the five points.',
        'Find <span class="chem">f^{-1}(x) = (1 - x)^{1/3}</span> (a cube root, defined for all real <span class="chem">x</span>; use the GDC cube-root function so that negative values of <span class="chem">1 - x</span> are accepted), then graph both curves on the GDC.',
        'Alternatively, a point <span class="chem">(a, f(a))</span> lies on both graphs exactly when <span class="chem">f(f(a)) = a</span>. Graph <span class="chem">y = f(f(x)) - x</span> and find its zeros. Two of them are easy to check by hand: <span class="chem">f(0) = 1</span> and <span class="chem">f(1) = 0</span>.'
      ],
      solution: '<p>Decode: for a decreasing function, intersections of <span class="chem">f</span> and <span class="chem">f^{-1}</span> need not lie on <span class="chem">y = x</span>, so solving <span class="chem">f(x) = x</span> is not enough. <span class="chem">f^{-1}(x) = (1 - x)^{1/3}</span>. The GDC gives the intersections of <span class="chem">y = 1 - x^3</span> and <span class="chem">y = (1 - x)^{1/3}</span> at <span class="chem">x ≈ -0.536</span>, <span class="chem">x = 0</span>, <span class="chem">x ≈ 0.682</span>, <span class="chem">x = 1</span> and <span class="chem">x ≈ 1.1537</span>. The points are <span class="chem">(-0.536, 1.15)</span>, <span class="chem">(0, 1)</span>, <span class="chem">(0.682, 0.682)</span> (the only one on <span class="chem">y = x</span>), <span class="chem">(1, 0)</span> and <span class="chem">(1.15, -0.536)</span>. The four points off <span class="chem">y = x</span> form two pairs of reflections in <span class="chem">y = x</span>: <span class="chem">(0, 1)</span> with <span class="chem">(1, 0)</span>, and <span class="chem">(-0.536, 1.15)</span> with <span class="chem">(1.15, -0.536)</span>. The largest <span class="chem">x</span>-coordinate is <span class="chem">1.15</span> (3 s.f.).</p>'
    }
  ]);
})();
