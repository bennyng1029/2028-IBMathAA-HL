/* ==========================================================================
   Analysis Lab — questions-t2-1.js
   Question bank for Topic 2.1: Lines, functions, domains, inverses & composites (SL 2.1–2.5).
   18 original questions across foundation, exam, and challenge tiers.
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
      paper: 'P1',
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
        3: 'You substituted (2, −1) with the wrong signs: 5(2) − 2(−1) = 12, so 5x − 2y = 12, giving 5x − 2y − 12 = 0.'
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
      paper: 'P1',
      syllabus: 'SL 2.1',
      marks: 3,
      stem: '<p>The perpendicular bisector of the line segment joining <span class="chem">A(-1, 4)</span> and <span class="chem">B(5, 8)</span> intersects the <span class="chem">x</span>-axis at <span class="chem">(a, 0)</span>. Find the exact value of <span class="chem">a</span>.</p>',
      answer: 6,
      tolerance: 0.001,
      hints: [
        'Find the midpoint <span class="chem">M</span> of <span class="chem">A(-1, 4)</span> and <span class="chem">B(5, 8)</span> and the gradient <span class="chem">m_{AB}</span>.',
        'With <span class="chem">M(2, 6)</span> and <span class="chem">m_perp = -3/2</span>, substitute <span class="chem">y = 0</span> into <span class="chem">y - 6 = (-3/2)(x - 2)</span>.'
      ],
      solution: '<p>Midpoint <span class="chem">M = ((-1+5)/2, (4+8)/2) = (2, 6)</span>. Gradient <span class="chem">m_{AB} = (8 - 4)/(5 - (-1)) = 4/6 = 2/3</span>, so <span class="chem">m_perp = -3/2</span>. The perpendicular bisector is <span class="chem">y - 6 = (-3/2)(x - 2)</span>. Setting <span class="chem">y = 0</span> gives <span class="chem">-6 = (-3/2)(a - 2) => a - 2 = 4 => a = 6</span>.</p>'
    },
    {
      id: 't2-1-q003',
      type: 'mcq',
      tier: 'foundation',
      level: 'sl',
      paper: 'P1',
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
        2: 'When dividing 10 ≥ 2x by −2, you forgot to reverse the inequality sign to x ≤ 5.',
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
      paper: 'P1',
      syllabus: 'SL 2.2',
      marks: 3,
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
      paper: 'P1',
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
      paper: 'P1',
      syllabus: 'SL 2.2',
      marks: 3,
      stem: '<p>A one-to-one function <span class="chem">f</span> is defined by <span class="chem">f(x) = x^3 + 2x - 1</span> for <span class="chem">x in R</span>. Find the value of <span class="chem">f^{-1}(11)</span>.</p>',
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
      paper: 'P1',
      syllabus: 'SL 2.5',
      marks: 4,
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
      paper: 'P1',
      syllabus: 'SL 2.2',
      marks: 3,
      stem: '<p>Let <span class="chem">f</span> be a one-to-one function with domain <span class="chem">[-2, 5]</span> and range <span class="chem">[1, 10]</span>. Which of the following statements <strong>must</strong> be true for its inverse function <span class="chem">f^{-1}</span>?</p>',
      options: [
        'The domain of <span class="chem">f^{-1}</span> is <span class="chem">[1, 10]</span> and the range of <span class="chem">f^{-1}</span> is <span class="chem">[-2, 5]</span>.',
        'The graph of <span class="chem">y = f^{-1}(x)</span> is the reflection of the graph of <span class="chem">y = f(x)</span> in the line <span class="chem">y = x</span>.',
        'For every <span class="chem">x in [-2, 5]</span>, <span class="chem">(f^{-1} ∘ f)(x) = x</span>.',
        'For every <span class="chem">x in [-2, 5]</span>, <span class="chem">f^{-1}(x) = 1 / f(x)</span>.'
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
      paper: 'P1',
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
      paper: 'P1',
      syllabus: 'SL 2.5',
      marks: 4,
      stem: '<p>Let <span class="chem">f(x) = (x - 1)^2 - 1</span> for <span class="chem">x &gt;= 1</span>. The graphs of <span class="chem">y = f(x)</span> and <span class="chem">y = f^{-1}(x)</span> intersect at a single point <span class="chem">(a, a)</span> with <span class="chem">a &gt; 0</span>. Find the exact value of <span class="chem">a</span>.</p>',
      answer: 3,
      tolerance: 0.001,
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
      paper: 'P1',
      syllabus: 'SL 2.5',
      marks: 4,
      stem: '<p>Let <span class="chem">f(x) = ln(x - 4)</span> for <span class="chem">x &gt; 4</span> and <span class="chem">g(x) = x^2 + k</span> for <span class="chem">x in R</span>. Find the set of values of the constant <span class="chem">k</span> for which the composite function <span class="chem">(f ∘ g)(x)</span> is defined for <strong>all</strong> real numbers <span class="chem">x in R</span>.</p>',
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
        'For <span class="chem">(f ∘ g)(x) = f(g(x))</span> to be defined for all <span class="chem">x in R</span>, we need <span class="chem">Range(g)</span> to be a subset of <span class="chem">Domain(f) = (4, infty)</span>.',
        'What is the minimum value of <span class="chem">g(x) = x^2 + k</span> for <span class="chem">x in R</span>?'
      ],
      solution: '<p>The domain of <span class="chem">f</span> is <span class="chem">(4, infty)</span>. For <span class="chem">g(x) = x^2 + k</span> with <span class="chem">x in R</span>, the range of <span class="chem">g</span> is <span class="chem">[k, infty)</span> (minimum value <span class="chem">k</span> at <span class="chem">x = 0</span>). Requiring <span class="chem">Range(g) subset Domain(f)</span> means every output in <span class="chem">[k, infty)</span> must be strictly greater than <span class="chem">4</span>, so <span class="chem">k &gt; 4</span>.</p>'
    },
    {
      id: 't2-1-q012',
      type: 'numeric',
      tier: 'exam',
      level: 'sl',
      paper: 'P1',
      syllabus: 'SL 2.2',
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
      paper: 'P2',
      syllabus: 'SL 2.4',
      marks: 3,
      stem: '<p>Consider the function <span class="chem">f(x) = x e^{-0.5x}</span> for <span class="chem">x &gt;= 0</span>. Using your GDC or otherwise, find the maximum value in the range of <span class="chem">f</span>, giving your answer to 3 significant figures.</p>',
      answer: 0.736,
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
      paper: 'P1',
      syllabus: 'SL 2.1',
      marks: 5,
      stem: '<p>A triangle has vertices at <span class="chem">A(1, 1)</span>, <span class="chem">B(7, 5)</span>, and <span class="chem">C(3, 8)</span>.<br>(a) Find the equation of the perpendicular bisector of side <span class="chem">[AB]</span> in the form <span class="chem">ax + by + d = 0</span>, where <span class="chem">a, b, d in Z</span>. <strong>[3 marks]</strong><br>(b) Determine whether vertex <span class="chem">C(3, 8)</span> is equidistant from <span class="chem">A</span> and <span class="chem">B</span>, justifying your answer. <strong>[2 marks]</strong></p>',
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
      paper: 'P1',
      syllabus: 'SL 2.5',
      marks: 6,
      stem: '<p>Let <span class="chem">f(x) = 3x - 2</span> for <span class="chem">x in R</span> and <span class="chem">g(x) = 5 / (x + 1)</span> for <span class="chem">x != -1</span>.<br>(a) Find an expression for <span class="chem">(g ∘ f)(x)</span> and state its largest possible domain. <strong>[3 marks]</strong><br>(b) Solve the equation <span class="chem">(f^{-1} ∘ g)(x) = 2</span>. <strong>[3 marks]</strong></p>',
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
      level: 'sl',
      paper: 'P1',
      syllabus: 'SL 2.5',
      marks: 4,
      stem: '<p>The rational function <span class="chem">f(x) = (kx + 5)/(2x - 6)</span> (<span class="chem">x != 3</span>) is a <strong>self-inverse function</strong>, meaning that <span class="chem">f^{-1}(x) = f(x)</span> for all <span class="chem">x</span> in its domain. Find the value of the constant <span class="chem">k</span>.</p>',
      answer: 6,
      tolerance: 0.001,
      hints: [
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
      paper: 'P1',
      syllabus: 'SL 2.5',
      marks: 4,
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
        'An input <span class="chem">x</span> is in the domain of <span class="chem">f ∘ g</span> if and only if <span class="chem">x in Domain(g)</span> (<span class="chem">x &gt;= 0</span>) AND <span class="chem">g(x) in Domain(f)</span> (<span class="chem">6 - x^2 &gt;= 2</span>).',
        'Solve <span class="chem">6 - x^2 &gt;= 2</span> for <span class="chem">x &gt;= 0</span>, then evaluate <span class="chem">f(g(x)) = sqrt(4 - x^2)</span> on that interval.'
      ],
      solution: '<p>We require both <span class="chem">x &gt;= 0</span> (from <span class="chem">Domain(g)</span>) and <span class="chem">g(x) &gt;= 2</span> (from <span class="chem">Domain(f)</span>): <span class="chem">6 - x^2 &gt;= 2 => x^2 &lt;= 4 => -2 &lt;= x &lt;= 2</span>. Intersecting with <span class="chem">x &gt;= 0</span> gives the domain <span class="chem">0 &lt;= x &lt;= 2</span>. On <span class="chem">0 &lt;= x &lt;= 2</span>, <span class="chem">(f ∘ g)(x) = sqrt((6 - x^2) - 2) = sqrt(4 - x^2)</span> decreases from <span class="chem">sqrt(4) = 2</span> at <span class="chem">x = 0</span> to <span class="chem">0</span> at <span class="chem">x = 2</span>, so the range is <span class="chem">0 &lt;= y &lt;= 2</span>.</p>'
    },
    {
      id: 't2-1-q018',
      type: 'short',
      tier: 'challenge',
      level: 'sl',
      paper: 'P1',
      syllabus: 'SL 2.5',
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
        'Treat <span class="chem">u = e^x</span> as the variable in <span class="chem">u^2 - 4u + 5 = (u - 2)^2 + 1</span>.',
        'Watch out for the upper bound of the range of <span class="chem">f</span>: as <span class="chem">x -&gt; -infty</span>, <span class="chem">e^x -&gt; 0^+</span>, so <span class="chem">f(x)</span> approaches <span class="chem">(0 - 2)^2 + 1 = 5</span> from below without ever reaching <span class="chem">5</span>!'
      ],
      solution: '<p>(a) Completing the square in <span class="chem">e^x</span> gives <span class="chem">f(x) = (e^x - 2)^2 + 1</span>. The minimum occurs when <span class="chem">e^x = 2 => x = ln 2</span>. Hence the largest value of <span class="chem">a</span> for which <span class="chem">f</span> is one-to-one on <span class="chem">(-infty, a]</span> is <span class="chem">a = ln 2</span>.<br>(b) As <span class="chem">x</span> increases from <span class="chem">-infty</span> to <span class="chem">ln 2</span>, <span class="chem">e^x</span> increases across <span class="chem">(0, 2]</span>, so <span class="chem">f(x) = (e^x - 2)^2 + 1</span> decreases from <span class="chem">5</span> (excluded, since <span class="chem">e^x &gt; 0</span>) down to <span class="chem">1</span> (included at <span class="chem">x = ln 2</span>). Thus <span class="chem">Domain(f^{-1}) = Range(f) = [1, 5)</span>, i.e., <span class="chem">1 &lt;= x &lt; 5</span>. Swapping <span class="chem">x</span> and <span class="chem">y</span>: <span class="chem">x = (e^y - 2)^2 + 1 => e^y = 2 - sqrt(x - 1)</span> (minus sign since <span class="chem">e^y &lt;= 2</span>), so <span class="chem">f^{-1}(x) = ln(2 - sqrt(x - 1))</span>.</p>'
    }
  ]);
})();
