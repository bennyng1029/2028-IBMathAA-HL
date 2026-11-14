/* ==========================================================================
   Question bank: Topic 1.3 — Counting, partial fractions and extended binomials
   All questions are original and Additional HL (level: 'ahl', AHL 1.10-1.11).
   Load order on a page: math.js, core.js, quiz.js, then this file.
   ========================================================================== */
S1.questions.register('t1-3', [

  /* ======================= FOUNDATION ==================================== */
  {
    id: 't1-3-q001',
    topic: 't1-3', level: 'ahl', tier: 'foundation', type: 'numeric', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10',
    stem: '<p>Evaluate <span class="chem">7P3</span>.</p>',
    answer: 210,
    tolerance: { abs: 0.01 },
    hints: [
      'Use <span class="chem">nPr = n! / (n - r)!</span>.',
      'Compute <span class="chem">7 × 6 × 5</span>.'
    ],
    solution: '<div class="worked__math"><sup>7</sup>P<sub>3</sub> = <span class="frac"><span>7!</span><span>4!</span></span> = 7 × 6 × 5 = <b>210</b></div>'
  },
  {
    id: 't1-3-q002',
    topic: 't1-3', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10',
    stem: '<p>A committee of 4 students is to be chosen from 9 volunteers. How many different committees can be formed?</p>',
    options: [
      '126',
      '3024',
      '36',
      '504'
    ],
    answer: 0,
    misconception: {
      1: '3024 is <span class="chem">9P4</span>, which counts ordered arrangements. In a committee, order does not matter, so use <span class="chem">9C4</span>.',
      2: 'Multiplying <span class="chem">9 × 4</span> does not count subsets of size 4.',
      3: '504 is <span class="chem">9P3</span>, which neither matches the size nor the unordered nature of the committee.'
    },
    hints: [
      'Does the order of selection matter for a committee?',
      'Compute <span class="chem">9C4 = (9 × 8 × 7 × 6) / (4 × 3 × 2 × 1)</span>.'
    ],
    solution: '<div class="worked__math"><sup>9</sup>C<sub>4</sub> = <span class="frac"><span>9 × 8 × 7 × 6</span><span>24</span></span> = <b>126</b></div>'
  },
  {
    id: 't1-3-q003',
    topic: 't1-3', level: 'ahl', tier: 'foundation', type: 'numeric', marks: 3,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.11',
    stem: '<p>Given that <span class="chem">(5x + 4) / ((x - 1)(x + 2)) = A / (x - 1) + B / (x + 2)</span>, find the value of <span class="chem">A</span>.</p>',
    answer: 3,
    tolerance: { abs: 0.01 },
    hints: [
      'Multiply both sides by <span class="chem">(x - 1)(x + 2)</span> to get <span class="chem">5x + 4 = A(x + 2) + B(x - 1)</span>.',
      'Substitute <span class="chem">x = 1</span> so the <span class="chem">B</span> term becomes zero.'
    ],
    solution: '<div class="worked__math">5<i>x</i> + 4 ≡ <i>A</i>(<i>x</i> + 2) + <i>B</i>(<i>x</i> − 1)</div><div class="worked__math">Set <i>x</i> = 1:  9 = 3<i>A</i>  ⇒  <b><i>A</i> = 3</b></div>'
  },
  {
    id: 't1-3-q004',
    topic: 't1-3', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10',
    stem: '<p>State the set of values of <span class="chem">x</span> for which the binomial expansion of <span class="chem">(3 + 2x)^{-1}</span> is valid.</p>',
    options: [
      '<span class="chem">|x| &lt; 3/2</span>',
      '<span class="chem">|x| &lt; 1</span>',
      '<span class="chem">|x| &lt; 2/3</span>',
      '<span class="chem">|x| &lt; 3</span>'
    ],
    answer: 0,
    misconception: {
      1: '<span class="chem">|x| &lt; 1</span> applies to <span class="chem">(1 + x)^n</span>. Here you must first factor out 3 to get <span class="chem">(1 + (2/3)x)^{-1}</span>.',
      2: 'You inverted the fraction! Set <span class="chem">|(2/3)x| &lt; 1</span>, which gives <span class="chem">|x| &lt; 3/2</span>, not <span class="chem">2/3</span>.',
      3: 'You forgot the factor of 2 in <span class="chem">2x</span>.'
    },
    hints: [
      'Factor out <span class="chem">3^{-1}</span> to write <span class="chem">(1/3)(1 + (2/3)x)^{-1}</span>.',
      'Solve <span class="chem">|(2/3)x| &lt; 1</span>.'
    ],
    solution: '<div class="worked__math">(3 + 2<i>x</i>)<sup>−1</sup> = <span class="frac"><span>1</span><span>3</span></span>(1 + <span class="frac"><span>2</span><span>3</span></span><i>x</i>)<sup>−1</sup>, valid for |<span class="frac"><span>2</span><span>3</span></span><i>x</i>| &lt; 1 ⇔ <b>|<i>x</i>| &lt; <span class="frac"><span>3</span><span>2</span></span></b></div>'
  },
  {
    id: 't1-3-q005',
    topic: 't1-3', level: 'ahl', tier: 'foundation', type: 'multi', marks: 3,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10 & 1.11',
    stem: '<p>Which of the following statements are true? Select all that apply.</p>',
    options: [
      '<span class="chem">nCr = nPr / r!</span> for all integers <span class="chem">0 &lt;= r &lt;= n</span>.',
      'The binomial expansion of <span class="chem">(1 - 4x)^{1/2}</span> is valid for <span class="chem">|x| &lt; 4</span>.',
      '<span class="chem">2x / ((x - 1)(x + 1)) = 1 / (x - 1) + 1 / (x + 1)</span>.',
      'The number of ways to seat 5 people in a row with 2 specific people separated is <span class="chem">5! - 4!</span>.'
    ],
    answer: [0, 2],
    misconception: {
      1: '<span class="chem">(1 - 4x)^{1/2}</span> is valid for <span class="chem">|-4x| &lt; 1</span>, which is <span class="chem">|x| &lt; 1/4</span>, not <span class="chem">|x| &lt; 4</span>.',
      3: 'When 2 people sit together as a block, they can swap in <span class="chem">2!</span> ways, so the separated count is <span class="chem">5! - 4! × 2!</span>.'
    },
    hints: [
      'Check the radius of convergence of <span class="chem">(1 - 4x)^{1/2}</span> using <span class="chem">|u| &lt; 1</span>.',
      'Add <span class="chem">1/(x - 1) + 1/(x + 1)</span> over a common denominator to verify option C.'
    ],
    solution: '<p>Option A is the definition relating combinations and permutations. Option C combines to <span class="chem">((x + 1) + (x - 1)) / ((x - 1)(x + 1)) = 2x / ((x - 1)(x + 1))</span>.</p>'
  },
  {
    id: 't1-3-q006',
    topic: 't1-3', level: 'ahl', tier: 'foundation', type: 'order', marks: 3,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10',
    stem: '<p>Arrange the steps in the correct logical order to find the first three terms of <span class="chem">(4 + x)^{-1/2}</span>.</p>',
    options: [
      'Factor out <span class="chem">4^{-1/2} = 1/2</span> to write <span class="chem">(1/2)(1 + x/4)^{-1/2}</span>.',
      'Substitute <span class="chem">n = -1/2</span> and <span class="chem">u = x/4</span> into <span class="chem">1 + nu + (n(n - 1)/2!)u^2</span>.',
      'Simplify inside the bracket to get <span class="chem">(1/2)(1 - (1/8)x + (3/128)x^2 - ...)</span>.',
      'Multiply through by <span class="chem">1/2</span> to obtain <span class="chem">1/2 - (1/16)x + (3/256)x^2 - ...</span>, valid for <span class="chem">|x| &lt; 4</span>.'
    ],
    answer: [0, 1, 2, 3],
    hints: [
      'You cannot apply the <span class="chem">(1 + u)^n</span> formula until the constant inside the bracket is 1.',
      'Multiply by the factored-out <span class="chem">4^{-1/2} = 1/2</span> at the end.'
    ],
    solution: '<p>Factor out <span class="chem">4^{-1/2}</span> first, apply the <span class="chem">(1 + u)^n</span> series, simplify powers of <span class="chem">u</span>, and finally distribute <span class="chem">1/2</span>.</p>'
  },

  /* ======================= EXAM STYLE ==================================== */
  {
    id: 't1-3-q007',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10',
    stem: '<p>Solve the equation <span class="chem">nP2 + nC2 = 45</span> for the positive integer <span class="chem">n</span>.</p>',
    answer: 6,
    tolerance: { abs: 0.01 },
    hints: [
      'Write <span class="chem">nP2 = n(n - 1)</span> and <span class="chem">nC2 = n(n - 1) / 2</span>.',
      'Combine to get <span class="chem">(3/2) n(n - 1) = 45</span>, so <span class="chem">n(n - 1) = 30</span>.'
    ],
    solution: '<div class="worked__math"><i>n</i>(<i>n</i> − 1) + <span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = 45  ⇒  <span class="frac"><span>3</span><span>2</span></span><i>n</i>(<i>n</i> − 1) = 45  ⇒  <i>n</i>(<i>n</i> − 1) = 30</div><div class="worked__math"><i>n</i><sup>2</sup> − <i>n</i> − 30 = 0  ⇒  (<i>n</i> − 6)(<i>n</i> + 5) = 0  ⇒  <b><i>n</i> = 6</b> (since <i>n</i> ≥ 2)</div>'
  },
  {
    id: 't1-3-q008',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10',
    stem: '<p>A 6-member robotics team is selected from 5 engineers and 4 programmers. How many different teams contain <strong>at least 4 engineers</strong>?</p>',
    answer: 34,
    tolerance: { abs: 0.01 },
    hints: [
      'Split into mutually exclusive cases: 4 engineers + 2 programmers, or 5 engineers + 1 programmer.',
      'Compute <span class="chem">5C4 × 4C2 + 5C5 × 4C1</span>.'
    ],
    solution: '<div class="worked__math"><sup>5</sup>C<sub>4</sub><sup>4</sup>C<sub>2</sub> + <sup>5</sup>C<sub>5</sub><sup>4</sup>C<sub>1</sub> = (5 × 6) + (1 × 4) = 30 + 4 = <b>34</b></div>'
  },
  {
    id: 't1-3-q009',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10',
    stem: '<p>Eight distinct books—5 mathematics books and 3 physics books—are arranged on a shelf. In how many ways can they be arranged if no two physics books are next to each other?</p>',
    answer: 14400,
    tolerance: { abs: 0.01 },
    hints: [
      'Use the Gap method: arrange the 5 mathematics books first in <span class="chem">5!</span> ways.',
      'There are 6 gaps around the 5 math books. Place the 3 distinct physics books in <span class="chem">^6P_3</span> ways.'
    ],
    solution: '<div class="worked__math">5! × <sup>6</sup>P<sub>3</sub> = 120 × 120 = <b>14400</b></div>'
  },
  {
    id: 't1-3-q010',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10',
    stem: '<p>Find the coefficient of <span class="chem">x^2</span> in the binomial expansion of <span class="chem">(1 - 2x)^{-3}</span>.</p>',
    answer: 24,
    tolerance: { abs: 0.01 },
    hints: [
      'Use the <span class="chem">x^2</span> term formula: <span class="chem">(n(n - 1)/2!) u^2</span> with <span class="chem">n = -3</span> and <span class="chem">u = -2x</span>.',
      'Remember <span class="chem">(-2x)^2 = +4x^2</span>.'
    ],
    solution: '<div class="worked__math"><span class="frac"><span>(−3)(−4)</span><span>2!</span></span> (−2<i>x</i>)<sup>2</sup> = 6 × 4<i>x</i><sup>2</sup> = <b>24</b><i>x</i><sup>2</sup></div>'
  },
  {
    id: 't1-3-q011',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.11',
    stem: '<p>Given that <span class="chem">(4x + 13) / ((x - 2)(2x + 3)) = A / (x - 2) + B / (2x + 3)</span>, find the value of <span class="chem">B</span>.</p>',
    answer: -2,
    tolerance: { abs: 0.01 },
    hints: [
      'Clear the denominator: <span class="chem">4x + 13 = A(2x + 3) + B(x - 2)</span>.',
      'Substitute the root of <span class="chem">2x + 3 = 0</span>, that is <span class="chem">x = -3/2</span>, so the <span class="chem">A</span> term vanishes.'
    ],
    solution: '<div class="worked__math">4<i>x</i> + 13 ≡ <i>A</i>(2<i>x</i> + 3) + <i>B</i>(<i>x</i> − 2)   <b>[M1]</b></div><div class="worked__math"><i>x</i> = 2 ⇒ 21 = 7<i>A</i> ⇒ <i>A</i> = 3   <b>[A1]</b></div><div class="worked__math"><i>x</i> = −<span class="frac"><span>3</span><span>2</span></span> ⇒ 7 = −<span class="frac"><span>7</span><span>2</span></span><i>B</i>   <b>[M1]</b>  ⇒  <b><i>B</i> = −2</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-3-q012',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10 & 1.11',
    stem: '<p>Find the coefficient of <span class="chem">x^2</span> in the expansion of <span class="chem">(2 + x) / ((1 - x)(1 + 2x))</span> in ascending powers of <span class="chem">x</span>.</p>',
    answer: 5,
    tolerance: { abs: 0.01 },
    hints: [
      'Decompose into partial fractions first: <span class="chem">A / (1 - x) + B / (1 + 2x)</span>.',
      'You should get <span class="chem">A = 1</span> and <span class="chem">B = 1</span>. Now expand <span class="chem">(1 - x)^{-1} + (1 + 2x)^{-1}</span> up to <span class="chem">x^2</span>.'
    ],
    solution: '<div class="worked__math"><span class="frac"><span>2 + <i>x</i></span><span>(1 − <i>x</i>)(1 + 2<i>x</i>)</span></span> = (1 − <i>x</i>)<sup>−1</sup> + (1 + 2<i>x</i>)<sup>−1</sup> = (1 + <i>x</i> + <i>x</i><sup>2</sup> + …) + (1 − 2<i>x</i> + 4<i>x</i><sup>2</sup> − …) = 2 − <i>x</i> + <b>5</b><i>x</i><sup>2</sup> + …</div>'
  },
  {
    id: 't1-3-q013',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'short', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10 & 1.11',
    stem: '<p>(a) Express <span class="chem">f(x) = (x + 4) / ((1 + x)(2 - x))</span> in partial fractions. <strong>[3 marks]</strong><br>(b) Hence find the first three terms in the expansion of <span class="chem">f(x)</span> in ascending powers of <span class="chem">x</span>, and state the set of values of <span class="chem">x</span> for which the expansion is valid. <strong>[3 marks]</strong></p>',
    answer: '<div class="worked__math">(a)  <i>x</i> + 4 ≡ <i>A</i>(2 − <i>x</i>) + <i>B</i>(1 + <i>x</i>):  <i>x</i> = −1 ⇒ 3 = 3<i>A</i> ⇒ <i>A</i> = 1;  <i>x</i> = 2 ⇒ 6 = 3<i>B</i> ⇒ <i>B</i> = 2</div><div class="worked__math"><i>f</i>(<i>x</i>) = <span class="frac"><span>1</span><span>1 + <i>x</i></span></span> + <span class="frac"><span>2</span><span>2 − <i>x</i></span></span></div><div class="worked__math">(b)  (1 + <i>x</i>)<sup>−1</sup> = 1 − <i>x</i> + <i>x</i><sup>2</sup> − …   and   2(2 − <i>x</i>)<sup>−1</sup> = (1 − <span class="frac"><span><i>x</i></span><span>2</span></span>)<sup>−1</sup> = 1 + <span class="frac"><span><i>x</i></span><span>2</span></span> + <span class="frac"><span><i>x</i><sup>2</sup></span><span>4</span></span> + …</div><div class="worked__math"><i>f</i>(<i>x</i>) ≈ <b>2 − <span class="frac"><span>1</span><span>2</span></span><i>x</i> + <span class="frac"><span>5</span><span>4</span></span><i>x</i><sup>2</sup></b>, valid for <b>|<i>x</i>| &lt; 1</b></div>',
    markscheme: [
      'M1: Sets <span class="chem">x + 4 = A(2 - x) + B(1 + x)</span>.',
      'A1: Obtains <span class="chem">A = 1</span>.',
      'A1: Obtains <span class="chem">B = 2</span>, giving <span class="chem">1/(1 + x) + 2/(2 - x)</span>.',
      'M1: Expands <span class="chem">(1 + x)^{-1} = 1 - x + x^2 - ...</span> and <span class="chem">2(2 - x)^{-1} = (1 - x/2)^{-1} = 1 + x/2 + x^2/4 + ...</span>.',
      'A1: Combines like terms to get <span class="chem">2 - (1/2)x + (5/4)x^2</span>.',
      'A1: States validity <span class="chem">|x| &lt; 1</span> (intersection of <span class="chem">|x| &lt; 1</span> and <span class="chem">|x| &lt; 2</span>).'
    ],
    hints: [
      'Use <span class="chem">x = -1</span> and <span class="chem">x = 2</span> to find <span class="chem">A</span> and <span class="chem">B</span>.',
      'Factor out <span class="chem">2^{-1} = 1/2</span> from <span class="chem">(2 - x)^{-1}</span> before expanding.'
    ],
    solution: '<div class="worked__math">(a)  <i>f</i>(<i>x</i>) = <span class="frac"><span>1</span><span>1 + <i>x</i></span></span> + <span class="frac"><span>2</span><span>2 − <i>x</i></span></span></div><div class="worked__math">(b)  <i>f</i>(<i>x</i>) ≈ <b>2 − <span class="frac"><span>1</span><span>2</span></span><i>x</i> + <span class="frac"><span>5</span><span>4</span></span><i>x</i><sup>2</sup></b>, valid for <b>|<i>x</i>| &lt; 1</b></div>'
  },
  {
    id: 't1-3-q014',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10',
    stem: '<p>In the binomial expansion of <span class="chem">(1 + kx)^{-2}</span>, the coefficient of <span class="chem">x^2</span> is 48. Given that <span class="chem">k &gt; 0</span>, find the value of <span class="chem">k</span>.</p>',
    answer: 4,
    tolerance: { abs: 0.01 },
    hints: [
      'Write the <span class="chem">x^2</span> term: <span class="chem">((-2)(-3)/2!)(kx)^2 = 3k^2 x^2</span>.',
      'Solve <span class="chem">3k^2 = 48</span> with <span class="chem">k &gt; 0</span>.'
    ],
    solution: '<div class="worked__math"><span class="frac"><span>(−2)(−3)</span><span>2!</span></span>(<i>kx</i>)<sup>2</sup> = 3<i>k</i><sup>2</sup><i>x</i><sup>2</sup>  ⇒  3<i>k</i><sup>2</sup> = 48  ⇒  <i>k</i><sup>2</sup> = 16  ⇒  <b><i>k</i> = 4</b></div>'
  },

  /* ======================= CHALLENGE ===================================== */
  {
    id: 't1-3-q015',
    topic: 't1-3', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10',
    stem: '<p>How many 4-digit even integers greater than 3000 can be formed using the digits <span class="chem">{1, 2, 3, 4, 5, 6}</span> if no digit may be repeated?</p>',
    answer: 120,
    tolerance: { abs: 0.01 },
    hints: [
      'Decode: two places are restricted. “Greater than 3000” means the thousands digit is 3, 4, 5 or 6, and “even” means the units digit is 2, 4 or 6. Fill these restricted places first, then the two free middle places.',
      'The thousands digit must be in <span class="chem">{3, 4, 5, 6}</span> and the units digit must be in <span class="chem">{2, 4, 6}</span>. Because 4 and 6 appear in both sets, split into two cases!',
      'Case 1: thousands digit is odd (<span class="chem">{3, 5}</span>) → <span class="chem">2 × 3 × 4 × 3</span>. Case 2: thousands digit is even (<span class="chem">{4, 6}</span>) → <span class="chem">2 × 2 × 4 × 3</span>.'
    ],
    solution: '<div class="worked__math">Case 1 (thousands ∈ {3, 5}):  2 × 4 × 3 × 3 = 72</div><div class="worked__math">Case 2 (thousands ∈ {4, 6}):  2 × 4 × 3 × 2 = 48</div><div class="worked__math">Total = 72 + 48 = <b>120</b></div>'
  },
  {
    id: 't1-3-q016',
    topic: 't1-3', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10',
    stem: '<p>Find the coefficient of <span class="chem">x^2</span> in the binomial expansion of <span class="chem">(1 + 2x) / sqrt(1 - 3x)</span>.</p>',
    answer: 6.375,
    answerDisplay: '51/8 (or 6.375)',
    exact: true,
    answerInput: '51/8',
    hints: [
      'Decode: a square root in the denominator is a negative fractional power, <span class="chem">1/sqrt(1 - 3x) = (1 - 3x)^{-1/2}</span>, so the expression is a linear factor times an extended binomial series. Only two products of terms give <span class="chem">x^2</span>.',
      'Rewrite as <span class="chem">(1 + 2x)(1 - 3x)^{-1/2}</span> and expand <span class="chem">(1 - 3x)^{-1/2}</span> up to <span class="chem">x^2</span>.',
      'Multiply <span class="chem">(1 + 2x)</span> by <span class="chem">(1 + (3/2)x + (27/8)x^2 + ...)</span> and collect the <span class="chem">x^2</span> terms.'
    ],
    solution: '<div class="worked__math">(1 − 3<i>x</i>)<sup>−1/2</sup> = 1 + <span class="frac"><span>3</span><span>2</span></span><i>x</i> + <span class="frac"><span>27</span><span>8</span></span><i>x</i><sup>2</sup> + …</div><div class="worked__math">Coeff of <i>x</i><sup>2</sup> in (1 + 2<i>x</i>)(1 + <span class="frac"><span>3</span><span>2</span></span><i>x</i> + <span class="frac"><span>27</span><span>8</span></span><i>x</i><sup>2</sup>) = <span class="frac"><span>27</span><span>8</span></span> + 2(<span class="frac"><span>3</span><span>2</span></span>) = <b><span class="frac"><span>51</span><span>8</span></span></b> (6.375)</div>'
  },
  {
    id: 't1-3-q017',
    topic: 't1-3', level: 'ahl', tier: 'challenge', type: 'short', marks: 7,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.11; SL 1.2',
    stem: '<p>Let <span class="chem">S_n = Σ_{r=1}^n 1 / (r(r + 1))</span>.</p><p>(a) Express <span class="chem">1 / (r(r + 1))</span> in partial fractions. <strong>[2 marks]</strong><br>(b) Find <span class="chem">S_1</span>, <span class="chem">S_2</span>, <span class="chem">S_3</span> and <span class="chem">S_4</span>, and hence conjecture a formula for <span class="chem">S_n</span> in terms of <span class="chem">n</span>. <strong>[2 marks]</strong><br>(c) Use your answer to (a) to prove your conjecture. <strong>[2 marks]</strong><br>(d) Find the least value of <span class="chem">n</span> for which <span class="chem">S_n &gt; 0.99</span>. <strong>[1 mark]</strong></p>',
    answer: '<div class="worked__math">(a)  <span class="frac"><span>1</span><span><i>r</i>(<i>r</i> + 1)</span></span> = <span class="frac"><span>1</span><span><i>r</i></span></span> − <span class="frac"><span>1</span><span><i>r</i> + 1</span></span></div><div class="worked__math">(b)  <i>S</i><sub>1</sub> = <span class="frac"><span>1</span><span>2</span></span>, <i>S</i><sub>2</sub> = <span class="frac"><span>2</span><span>3</span></span>, <i>S</i><sub>3</sub> = <span class="frac"><span>3</span><span>4</span></span>, <i>S</i><sub>4</sub> = <span class="frac"><span>4</span><span>5</span></span>;  conjecture <i>S</i><sub><i>n</i></sub> = <span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span></div><div class="worked__math">(c)  <i>S</i><sub><i>n</i></sub> = (1 − <span class="frac"><span>1</span><span>2</span></span>) + (<span class="frac"><span>1</span><span>2</span></span> − <span class="frac"><span>1</span><span>3</span></span>) + … + (<span class="frac"><span>1</span><span><i>n</i></span></span> − <span class="frac"><span>1</span><span><i>n</i> + 1</span></span>) = 1 − <span class="frac"><span>1</span><span><i>n</i> + 1</span></span> = <span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span></div><div class="worked__math">(d)  <span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span> &gt; 0.99 ⇔ <i>n</i> &gt; 99, so <b><i>n</i> = 100</b></div>',
    markscheme: [
      'M1: Sets <span class="chem">1 = A(r + 1) + Br</span> (or uses cover-up).',
      'A1: <span class="chem">1/(r(r + 1)) = 1/r - 1/(r + 1)</span>.',
      'A1: <span class="chem">S_1 = 1/2</span>, <span class="chem">S_2 = 2/3</span>, <span class="chem">S_3 = 3/4</span>, <span class="chem">S_4 = 4/5</span>.',
      'A1: Conjecture <span class="chem">S_n = n/(n + 1)</span>.',
      'M1: Writes the sum as <span class="chem">(1 - 1/2) + (1/2 - 1/3) + ... + (1/n - 1/(n + 1))</span>, showing the cancellation.',
      'A1: <span class="chem">1 - 1/(n + 1) = n/(n + 1)</span>, which proves the conjecture.',
      'A1: <span class="chem">n = 100</span>.'
    ],
    hints: [
      'Decode: the question builds one argument. Partial fractions turn each term into a difference, the first few sums suggest a pattern, and the same differences then make the whole sum collapse (“telescope”).',
      'For (a), put <span class="chem">r = 0</span> and <span class="chem">r = -1</span> into <span class="chem">1 ≡ A(r + 1) + Br</span>.',
      'For (c), write out the first and last few brackets of <span class="chem">Σ(1/r - 1/(r + 1))</span> and see which parts survive.',
      'For (d), solve <span class="chem">n/(n + 1) &gt; 0.99</span>; take care with “greater than”.'
    ],
    solution: '<p><b>Decode:</b> partial fractions → pattern → telescoping proof → use the formula.</p><div class="worked__math">(a)  <span class="frac"><span>1</span><span><i>r</i></span></span> − <span class="frac"><span>1</span><span><i>r</i> + 1</span></span>   (b)  <span class="frac"><span>1</span><span>2</span></span>, <span class="frac"><span>2</span><span>3</span></span>, <span class="frac"><span>3</span><span>4</span></span>, <span class="frac"><span>4</span><span>5</span></span> ⇒ <i>S</i><sub><i>n</i></sub> = <span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span></div><div class="worked__math">(c)  ∑ = 1 − <span class="frac"><span>1</span><span><i>n</i> + 1</span></span> = <span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span>   (d)  <i>n</i> &gt; 99 ⇒ <b><i>n</i> = 100</b></div>'
  },
  {
    id: 't1-3-q018',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10',
    stem: '<p>Four couples (8 people) sit in a row of 8 chairs. In how many ways can they be seated if each couple must sit together?</p>',
    answer: 384,
    tolerance: { abs: 0.01 },
    hints: [
      'Glue each of the 4 couples into a single block. How many ways can you arrange the 4 blocks?',
      'Multiply by <span class="chem">2!</span> for each of the 4 couples: <span class="chem">4! × (2!)^4</span>.'
    ],
    solution: '<div class="worked__math">4! × (2!)<sup>4</sup> = 24 × 16 = <b>384</b></div>'
  },
  /* ======================= PAPER 2 (GDC): COUNTING ======================== */
  {
    id: 't1-3-q019',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 1.10; SL 4.5',
    stem: '<p>In a national lottery, a player chooses 6 different main numbers from 1 to 40 and, separately, one power number from 1 to 15. The draw then selects 6 different main numbers and one power number at random.</p><p>Find the probability that a single ticket matches <strong>exactly 4</strong> of the 6 main numbers <strong>and</strong> the power number. Give your answer to 3 significant figures.</p>',
    answer: 0.000146155409313304,
    sigfigs: 3,
    hints: [
      'Decode: this is a counting question in disguise. Probability = (number of draws that give this result) ÷ (number of possible draws), and the order of the main numbers does not matter, so use combinations.',
      'The number of possible draws is <span class="chem">40C6 × 15</span>.',
      'A favourable draw contains 4 of your 6 numbers and 2 of the 34 numbers you did not choose, and exactly 1 power number: <span class="chem">6C4 × 34C2 × 1</span>.'
    ],
    solution: '<p><b>Decode:</b> count equally likely draws; main numbers form an unordered selection.</p><div class="worked__math">Possible draws = <sup>40</sup>C<sub>6</sub> × 15 = 3 838 380 × 15 = 57 575 700</div><div class="worked__math">Favourable = <sup>6</sup>C<sub>4</sub> × <sup>34</sup>C<sub>2</sub> × 1 = 15 × 561 = 8415</div><div class="worked__math">P = <span class="frac"><span>8415</span><span>57 575 700</span></span> = 1.4616… × 10<sup>−4</sup> ≈ <b>1.46 × 10<sup>−4</sup></b></div>'
  },
  {
    id: 't1-3-q020',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 1.10',
    stem: '<p>A coach chooses 4 players from a squad of <span class="chem">n</span> players to form a relay team; the order in which they are chosen does not matter. There are exactly 27 405 possible teams. Use your GDC to find <span class="chem">n</span>.</p>',
    answer: 30,
    tolerance: { abs: 0.01 },
    hints: [
      'Decode: “order does not matter” means combinations, so the condition is <span class="chem">nC4 = 27405</span>, an equation in the positive integer <span class="chem">n</span>.',
      'Enter <span class="chem">y = xC4</span> (nCr on your GDC) as a function and scroll through its table of values, or solve <span class="chem">x(x - 1)(x - 2)(x - 3)/24 = 27405</span> graphically.',
      'Only a positive integer <span class="chem">n &gt;= 4</span> makes sense.'
    ],
    solution: '<div class="worked__math"><sup><i>n</i></sup>C<sub>4</sub> = <span class="frac"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)(<i>n</i> − 3)</span><span>24</span></span> = 27 405   <b>[M1]</b></div><div class="worked__math">GDC table: <sup>29</sup>C<sub>4</sub> = 23 751, <sup>30</sup>C<sub>4</sub> = 27 405, <sup>31</sup>C<sub>4</sub> = 31 465   <b>[M1 A1]</b></div><div class="worked__math"><b><i>n</i> = 30</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-3-q021',
    topic: 't1-3', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 1.10',
    stem: '<p>A security firm sends inspection panels of 5 staff to each site. Every different panel that could be formed from its staff must be given its own six-digit code, from 000000 to 999999. As the firm takes on more staff, it will eventually run out of codes.</p><p>Find the least number of staff for which there are more possible panels than codes.</p>',
    answer: 44,
    tolerance: { abs: 0.01 },
    hints: [
      'Decode: a panel is an unordered group of 5 people, so with <span class="chem">n</span> staff there are <span class="chem">nC5</span> panels. There are <span class="chem">10^6</span> six-digit codes (000000 counts). You want the least integer <span class="chem">n</span> with <span class="chem">nC5 &gt; 10^6</span>.',
      'Put <span class="chem">y = xC5</span> in your GDC table and look for where it first passes 1 000 000.',
      'Check the value just below as well as the value just above the cut-off.'
    ],
    solution: '<p><b>Decode:</b> panels = <sup><i>n</i></sup>C<sub>5</sub>; codes = 10<sup>6</sup>; find the least <i>n</i> with <sup><i>n</i></sup>C<sub>5</sub> &gt; 10<sup>6</sup>.</p><div class="worked__math">GDC table: <sup>43</sup>C<sub>5</sub> = 962 598 &lt; 10<sup>6</sup>,   <sup>44</sup>C<sub>5</sub> = 1 086 008 &gt; 10<sup>6</sup></div><div class="worked__math">Least number of staff = <b>44</b></div>'
  },
  {
    id: 't1-3-q022',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'short', marks: 10,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 1.10',
    stem: '<p>A council of 8 members is to be chosen from 12 men and 15 women.</p><p>(a) Find the number of different councils that can be chosen. <strong>[2 marks]</strong><br>(b) Find the number of councils that contain exactly 4 women. <strong>[2 marks]</strong><br>(c) Find the number of councils that contain at least 3 women. <strong>[3 marks]</strong><br>(d) One of the men, Marco, and one of the women, Wen, refuse to serve together. Find the number of councils with exactly 4 men and 4 women that do not contain both Marco and Wen. <strong>[3 marks]</strong></p>',
    answer: '<div class="worked__math">(a)  <sup>27</sup>C<sub>8</sub> = <b>2 220 075</b></div><div class="worked__math">(b)  <sup>15</sup>C<sub>4</sub> × <sup>12</sup>C<sub>4</sub> = 1365 × 495 = <b>675 675</b></div><div class="worked__math">(c)  0, 1 or 2 women: <sup>12</sup>C<sub>8</sub> + <sup>15</sup>C<sub>1</sub><sup>12</sup>C<sub>7</sub> + <sup>15</sup>C<sub>2</sub><sup>12</sup>C<sub>6</sub> = 495 + 11 880 + 97 020 = 109 395;  2 220 075 − 109 395 = <b>2 110 680</b></div><div class="worked__math">(d)  councils with both: <sup>11</sup>C<sub>3</sub> × <sup>14</sup>C<sub>3</sub> = 165 × 364 = 60 060;  675 675 − 60 060 = <b>615 615</b></div>',
    markscheme: [
      'M1: Uses <span class="chem">27C8</span> (selection from all 27 people, order irrelevant).',
      'A1: 2 220 075.',
      'M1: Multiplies <span class="chem">15C4 × 12C4</span>.',
      'A1: 675 675.',
      'M1: Uses the complement (or adds the cases with 3, 4, …, 8 women).',
      'M1: Correct terms for 0, 1 and 2 women: <span class="chem">12C8 + 15C1 × 12C7 + 15C2 × 12C6 = 109395</span>.',
      'A1: 2 110 680.',
      'M1: Counts councils containing both Marco and Wen by fixing them: <span class="chem">11C3 × 14C3</span>.',
      'A1: 60 060.',
      'A1: 675 675 − 60 060 = 615 615.'
    ],
    hints: [
      'Decode: a council is an unordered selection, so every part is combinations. “At least 3 women” has six cases, but its complement (0, 1 or 2 women) has only three.',
      'In (d), count the 4-men-4-women councils that DO contain both Marco and Wen (fix them, then choose 3 more men from 11 and 3 more women from 14) and subtract from (b).',
      'Your GDC nCr key handles the large numbers; write down each term you use.'
    ],
    solution: '<div class="worked__math">(a) 2 220 075   (b) 675 675   (c) 2 220 075 − 109 395 = 2 110 680   (d) 675 675 − 165 × 364 = 615 615</div>'
  },
  {
    id: 't1-3-q023',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 1.10',
    stem: '<p>A website password has exactly 8 characters. Each character is one of the 26 lower-case letters or one of the 10 digits 0–9, and no character may be used more than once.</p><p>Find the number of passwords that contain <strong>at least one digit</strong>. Give your answer in the form <span class="chem">a × 10^k</span>, where <span class="chem">1 &lt;= a &lt; 10</span> and <span class="chem">k</span> ∈ ℤ, with <span class="chem">a</span> correct to 3 significant figures.</p>',
    answer: 1157105980800,
    sigfigs: 3,
    hints: [
      'Decode: the order of characters matters and there is no repetition, so these are permutations. “At least one digit” is easiest as (all passwords) − (passwords with no digit).',
      'All passwords: <span class="chem">36P8</span>. Passwords with letters only: <span class="chem">26P8</span>.',
      'Use the nPr key on your GDC and subtract.'
    ],
    solution: '<div class="worked__math"><sup>36</sup>P<sub>8</sub> − <sup>26</sup>P<sub>8</sub> = 1 220 096 908 800 − 62 990 928 000 = 1 157 105 980 800 ≈ <b>1.16 × 10<sup>12</sup></b></div>'
  },
  {
    id: 't1-3-q024',
    topic: 't1-3', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 1.10; SL 4.5',
    stem: '<p>A librarian puts 10 different novels and 4 different dictionaries back on an empty shelf, placing all 14 books in a random order. The dictionaries are heavy: the shelf bends if any two dictionaries stand side by side.</p><p>Find the probability that the shelf does not bend. Give your answer to 3 significant figures.</p>',
    answer: 0.32967032967033,
    sigfigs: 3,
    hints: [
      'Decode: “the shelf does not bend” means no two dictionaries are adjacent. All 14! orders are equally likely, so P = (orders with no two dictionaries adjacent) ÷ 14!. This is the gap method.',
      'Arrange the 10 novels first: <span class="chem">10!</span> ways. They create 11 gaps (including both ends).',
      'Place the 4 different dictionaries in 4 different gaps: <span class="chem">11P4</span> ways. Then divide by <span class="chem">14!</span>.'
    ],
    solution: '<p><b>Decode:</b> “does not bend” = no two dictionaries adjacent → gap method, then divide by the total number of orders.</p><div class="worked__math">Favourable = 10! × <sup>11</sup>P<sub>4</sub> = 3 628 800 × 7920 = 28 740 096 000</div><div class="worked__math">P = <span class="frac"><span>28 740 096 000</span><span>14!</span></span> = <span class="frac"><span>30</span><span>91</span></span> ≈ <b>0.330</b></div>'
  },
  {
    id: 't1-3-q025',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 1.10; SL 4.5',
    stem: '<p>A bag holds 60 tiles: 12 red and 48 blue. A player takes 7 tiles at random, without replacement. Using counting methods, find the probability that at least 2 of the 7 tiles are red. Give your answer to 3 significant figures.</p>',
    answer: 0.42805992186779,
    sigfigs: 3,
    hints: [
      'Decode: every hand of 7 tiles is equally likely, and there are <span class="chem">60C7</span> of them. “At least 2 red” is quicker by the complement: subtract the hands with 0 or 1 red tile.',
      'Hands with 0 red: <span class="chem">48C7</span>. Hands with exactly 1 red: <span class="chem">12C1 × 48C6</span>.',
      'P = 1 − (48C7 + 12 × 48C6) / 60C7.'
    ],
    solution: '<div class="worked__math">P(0 or 1 red) = <span class="frac"><span><sup>48</sup>C<sub>7</sub> + <sup>12</sup>C<sub>1</sub><sup>48</sup>C<sub>6</sub></span><span><sup>60</sup>C<sub>7</sub></span></span> = <span class="frac"><span>73 629 072 + 12 × 12 271 512</span><span>386 206 920</span></span> = 0.57194…</div><div class="worked__math">P(at least 2 red) = 1 − 0.57194… ≈ <b>0.428</b></div>'
  },

  /* ======================= PAPER 2 (GDC): EXTENDED BINOMIAL ================ */
  {
    id: 't1-3-q026',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'short', marks: 8,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 1.10',
    stem: '<p>(a) Find the first four terms of the expansion of <span class="chem">sqrt(1 + 4x)</span> in ascending powers of <span class="chem">x</span>. <strong>[3 marks]</strong><br>(b) State the set of values of <span class="chem">x</span> for which the expansion is valid. <strong>[1 mark]</strong><br>(c) By writing <span class="chem">26 = 25 × 1.04</span>, use your answer to (a) with a suitable value of <span class="chem">x</span> to estimate <span class="chem">sqrt(26)</span>. <strong>[2 marks]</strong><br>(d) Find the percentage error of your estimate, compared with the value of <span class="chem">sqrt(26)</span> given by your GDC. <strong>[2 marks]</strong></p>',
    answer: '<div class="worked__math">(a)  (1 + 4<i>x</i>)<sup>1/2</sup> = 1 + 2<i>x</i> − 2<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> − …</div><div class="worked__math">(b)  |4<i>x</i>| &lt; 1 ⇔ |<i>x</i>| &lt; <span class="frac"><span>1</span><span>4</span></span></div><div class="worked__math">(c)  √26 = 5√1.04, so <i>x</i> = 0.01:  5(1 + 0.02 − 0.0002 + 0.000004) = 5 × 1.019804 = <b>5.09902</b></div><div class="worked__math">(d)  GDC: √26 = 5.0990195…;  percentage error = <span class="frac"><span>5.09902 − 5.0990195…</span><span>5.0990195…</span></span> × 100% ≈ <b>9.54 × 10<sup>−6</sup> %</b></div>',
    markscheme: [
      'M1: Uses the extended binomial expansion with <span class="chem">n = 1/2</span> and <span class="chem">u = 4x</span>.',
      'A1: <span class="chem">1 + 2x - 2x^2</span>.',
      'A1: <span class="chem">+ 4x^3</span>.',
      'A1: <span class="chem">|x| &lt; 1/4</span>.',
      'M1: Uses <span class="chem">sqrt(26) = 5sqrt(1 + 4x)</span> with <span class="chem">x = 0.01</span>.',
      'A1: 5.09902.',
      'M1: Uses |estimate − GDC value| ÷ GDC value × 100.',
      'A1: <span class="chem">9.54 × 10^{-6}</span> % (accept 0.00000954 %).'
    ],
    hints: [
      'In (a) use <span class="chem">n = 1/2</span> and <span class="chem">u = 4x</span>; the <span class="chem">x^3</span> coefficient is <span class="chem">(n(n - 1)(n - 2)/3!) × 4^3</span>.',
      'In (c), <span class="chem">sqrt(26) = sqrt(25)sqrt(1.04) = 5sqrt(1 + 4x)</span> with <span class="chem">4x = 0.04</span>.',
      'The estimate is extremely close: keep at least 7 significant figures from your GDC before finding the error.'
    ],
    solution: '<div class="worked__math">(a) 1 + 2<i>x</i> − 2<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup>   (b) |<i>x</i>| &lt; 1/4   (c) 5.09902   (d) ≈ 9.54 × 10<sup>−6</sup> %</div>'
  },
  {
    id: 't1-3-q027',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 1.10',
    stem: '<p>The first three terms of the binomial expansion of <span class="chem">(1 + x)^{-1/2}</span> are used to estimate <span class="chem">1 / sqrt(1.3)</span>.</p><p>Find the percentage error of this estimate, compared with the value given by your GDC. Give your answer to 3 significant figures.</p>',
    answer: 0.763003193136324,
    sigfigs: 3,
    unit: '%',
    hints: [
      'Decode: <span class="chem">1/sqrt(1.3) = (1 + 0.3)^{-1/2}</span>, so put <span class="chem">x = 0.3</span> into the first three terms. Then compare with the GDC value.',
      '<span class="chem">(1 + x)^{-1/2} ≈ 1 - (1/2)x + (3/8)x^2</span>.',
      'Percentage error = |estimate − exact| ÷ exact × 100.'
    ],
    solution: '<div class="worked__math">Estimate = 1 − 0.15 + <span class="frac"><span>3</span><span>8</span></span>(0.09) = 0.88375</div><div class="worked__math">GDC: 1/√1.3 = 0.877058…</div><div class="worked__math">Percentage error = <span class="frac"><span>0.88375 − 0.877058…</span><span>0.877058…</span></span> × 100 ≈ <b>0.763 %</b></div>'
  },
  {
    id: 't1-3-q028',
    topic: 't1-3', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 6,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 1.10',
    stem: '<p>A low-power sensor chip cannot calculate square roots, so its firmware replaces <span class="chem">sqrt(1 + x)</span> by the quadratic made from the first three terms of its binomial expansion. A reading is trusted only while the absolute error of this replacement is less than <span class="chem">5 × 10^{-4}</span>.</p><p>Given that <span class="chem">x &gt;= 0</span>, find the largest value of <span class="chem">x</span> for which readings are trusted. Give your answer to 3 significant figures.</p>',
    answer: 0.208211728274932,
    sigfigs: 3,
    hints: [
      'Decode: first find the quadratic <span class="chem">p(x)</span> (the first three terms of <span class="chem">(1 + x)^{1/2}</span>). Then the question asks where <span class="chem">|sqrt(1 + x) - p(x)| = 5 × 10^{-4}</span> for <span class="chem">x &gt;= 0</span>: an equation you solve on the GDC.',
      '<span class="chem">p(x) = 1 + x/2 - x^2/8</span>.',
      'Graph <span class="chem">y = sqrt(1 + x) - (1 + x/2 - x^2/8)</span> and <span class="chem">y = 0.0005</span> for <span class="chem">x &gt;= 0</span>; the error increases with <span class="chem">x</span>, so the intersection is the boundary.'
    ],
    solution: '<p><b>Decode:</b> “trusted” means |exact − quadratic| &lt; 5 × 10<sup>−4</sup>; find the boundary of this inequality for <i>x</i> ≥ 0.</p><div class="worked__math"><i>p</i>(<i>x</i>) = 1 + <span class="frac"><span><i>x</i></span><span>2</span></span> − <span class="frac"><span><i>x</i><sup>2</sup></span><span>8</span></span></div><div class="worked__math">GDC: √(1 + <i>x</i>) − <i>p</i>(<i>x</i>) = 0.0005 at <i>x</i> = 0.20821…; the error is increasing for <i>x</i> ≥ 0</div><div class="worked__math">Largest trusted value ≈ <b>0.208</b></div>'
  },
  {
    id: 't1-3-q029',
    topic: 't1-3', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 6,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 1.10',
    stem: '<p>In special relativity, an object moving at speed <span class="chem">v</span> has Lorentz factor <span class="chem">gamma = 1 / sqrt(1 - beta^2)</span>, where <span class="chem">beta = v / c</span> and <span class="chem">c</span> is the speed of light. At everyday speeds engineers replace <span class="chem">gamma</span> by the first two terms of its binomial expansion in powers of <span class="chem">beta</span>.</p><p>Find the value of <span class="chem">beta</span>, where <span class="chem">0 &lt; beta &lt; 1</span>, for which this approximation is exactly 1% smaller than the true value of <span class="chem">gamma</span>. Give your answer to 3 significant figures.</p>',
    answer: 0.398427801423129,
    sigfigs: 3,
    hints: [
      'Decode: write <span class="chem">gamma = (1 + u)^{-1/2}</span> with <span class="chem">u = -beta^2</span>, find its first two terms, then “1% smaller” means approximation = <span class="chem">0.99 gamma</span>. Solve that equation for <span class="chem">beta</span> on your GDC.',
      'The first two terms are <span class="chem">1 + beta^2 / 2</span>.',
      'Solve <span class="chem">1 + beta^2/2 = 0.99 / sqrt(1 - beta^2)</span> for <span class="chem">0 &lt; beta &lt; 1</span>.'
    ],
    solution: '<p><b>Decode:</b> binomial with <i>u</i> = −β<sup>2</sup>, then an equation “approximation = 0.99 × exact”.</p><div class="worked__math">γ = (1 − β<sup>2</sup>)<sup>−1/2</sup> = 1 + <span class="frac"><span>1</span><span>2</span></span>β<sup>2</sup> + …   (valid for β<sup>2</sup> &lt; 1)</div><div class="worked__math">1 + <span class="frac"><span>β<sup>2</sup></span><span>2</span></span> = <span class="frac"><span>0.99</span><span>√(1 − β<sup>2</sup>)</span></span>  ⇒ (GDC)  β = 0.39842…</div><div class="worked__math">β ≈ <b>0.398</b></div>'
  },
  {
    id: 't1-3-q030',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'short', marks: 8,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 1.10',
    stem: '<p>At height <span class="chem">h</span> km above the surface of a planet of radius <span class="chem">R</span> km, the gravitational field strength is <span class="chem">g = g_0 R^2 / (R + h)^2</span>, where <span class="chem">g_0</span> is its value at the surface.</p><p>(a) Show that <span class="chem">g = g_0(1 + h/R)^{-2}</span>. <strong>[1 mark]</strong><br>(b) Hence show that, for small values of <span class="chem">h</span>, <span class="chem">g ≈ g_0(1 - 2h/R + 3h^2/R^2)</span>. <strong>[3 marks]</strong><br>(c) Given that <span class="chem">h &gt;= 0</span>, state the condition on <span class="chem">h</span> for which the full binomial series converges. <strong>[1 mark]</strong><br>(d) For the Earth take <span class="chem">R = 6371</span> and <span class="chem">g_0 = 9.81</span> <span class="unit">m s-2</span>. A satellite orbits at <span class="chem">h = 420</span>. Use the approximation in (b) to estimate <span class="chem">g</span>, and find its percentage error compared with the exact formula. <strong>[3 marks]</strong></p>',
    answer: '<div class="worked__math">(a)  <span class="frac"><span><i>R</i><sup>2</sup></span><span>(<i>R</i> + <i>h</i>)<sup>2</sup></span></span> = <span class="frac"><span>1</span><span>(1 + <i>h</i>/<i>R</i>)<sup>2</sup></span></span>, so <i>g</i> = <i>g</i><sub>0</sub>(1 + <i>h</i>/<i>R</i>)<sup>−2</sup></div><div class="worked__math">(b)  (1 + <i>u</i>)<sup>−2</sup> = 1 − 2<i>u</i> + <span class="frac"><span>(−2)(−3)</span><span>2</span></span><i>u</i><sup>2</sup> + … = 1 − 2<i>u</i> + 3<i>u</i><sup>2</sup> + … with <i>u</i> = <i>h</i>/<i>R</i></div><div class="worked__math">(c)  |<i>h</i>/<i>R</i>| &lt; 1, i.e. 0 ≤ <i>h</i> &lt; <i>R</i></div><div class="worked__math">(d)  <i>u</i> = 420/6371: estimate = 9.81(1 − 2<i>u</i> + 3<i>u</i><sup>2</sup>) ≈ <b>8.64</b> m s<sup>−2</sup> (8.6445…); exact = 9.81/(1 + <i>u</i>)<sup>2</sup> = 8.6341…; percentage error ≈ <b>0.120 %</b></div>',
    markscheme: [
      'A1: Divides numerator and denominator by <span class="chem">R^2</span> to obtain <span class="chem">g_0 / (1 + h/R)^2</span>. AG: <span class="chem">g = g_0(1 + h/R)^{-2}</span>; the given line itself earns no mark.',
      'M1: Uses the extended binomial expansion with <span class="chem">n = -2</span> and <span class="chem">u = h/R</span>.',
      'A1: Linear term <span class="chem">-2h/R</span>.',
      'A1: Quadratic coefficient <span class="chem">(-2)(-3)/2! = 3</span>, giving <span class="chem">3h^2/R^2</span>. AG: the given approximation follows.',
      'A1: <span class="chem">h &lt; R</span> (from <span class="chem">|h/R| &lt; 1</span>).',
      'M1: Substitutes <span class="chem">h/R = 420/6371</span> into the approximation (and the exact formula).',
      'A1: Estimate 8.64 m s⁻² (8.6445…).',
      'A1: Percentage error 0.120 % (exact value 8.6341…).'
    ],
    hints: [
      'Decode: (a) is a rearrangement; (b) is the extended binomial with <span class="chem">n = -2</span>; (c) is the validity condition <span class="chem">|u| &lt; 1</span>; (d) is a GDC comparison.',
      'Divide the top and bottom of <span class="chem">R^2/(R + h)^2</span> by <span class="chem">R^2</span>.',
      'Keep full GDC accuracy for both values in (d) before finding the percentage error.'
    ],
    solution: '<div class="worked__math">(b) <i>g</i> ≈ <i>g</i><sub>0</sub>(1 − 2<i>h</i>/<i>R</i> + 3<i>h</i><sup>2</sup>/<i>R</i><sup>2</sup>)   (c) <i>h</i> &lt; <i>R</i>   (d) 8.64 m s<sup>−2</sup>, error ≈ 0.120 %</div>'
  },
  {
    id: 't1-3-q031',
    topic: 't1-3', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 6,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 1.10, 1.11',
    stem: '<p>Let <span class="chem">f(x) = 3 / ((1 - x)(1 + 2x))</span>. A student writes <span class="chem">f(x)</span> in partial fractions, expands each one, and keeps only the terms up to <span class="chem">x^2</span>, obtaining a quadratic <span class="chem">p(x)</span>. She accepts the replacement of <span class="chem">f</span> by <span class="chem">p</span> wherever <span class="chem">|f(x) - p(x)| &lt; 0.02</span>.</p><p>Find the greatest value of <span class="chem">c</span> such that the replacement is accepted for all <span class="chem">0 &lt;= x &lt; c</span>. Give your answer to 3 significant figures.</p>',
    answer: 0.119287802884555,
    sigfigs: 3,
    hints: [
      'Decode: two jobs. First build <span class="chem">p(x)</span> by partial fractions and extended binomials. Then solve <span class="chem">|f(x) - p(x)| = 0.02</span> on the GDC for the first positive solution (inside the validity interval).',
      'Partial fractions: <span class="chem">f(x) = 1/(1 - x) + 2/(1 + 2x)</span>.',
      'Expanding: <span class="chem">p(x) = (1 + x + x^2) + 2(1 - 2x + 4x^2) = 3 - 3x + 9x^2</span>, valid for <span class="chem">|x| &lt; 1/2</span>.',
      'Graph <span class="chem">y = |f(x) - p(x)|</span> and <span class="chem">y = 0.02</span> on <span class="chem">0 &lt;= x &lt; 0.5</span>.'
    ],
    solution: '<p><b>Decode:</b> make <i>p</i> from partial fractions, then find where the error first reaches 0.02.</p><div class="worked__math">3 ≡ <i>A</i>(1 + 2<i>x</i>) + <i>B</i>(1 − <i>x</i>):  <i>x</i> = 1 ⇒ <i>A</i> = 1;  <i>x</i> = −<span class="frac"><span>1</span><span>2</span></span> ⇒ <i>B</i> = 2</div><div class="worked__math"><i>p</i>(<i>x</i>) = 3 − 3<i>x</i> + 9<i>x</i><sup>2</sup>   (series valid for |<i>x</i>| &lt; <span class="frac"><span>1</span><span>2</span></span>)</div><div class="worked__math">The error |<i>f</i>(<i>x</i>) − <i>p</i>(<i>x</i>)| increases from 0 on 0 ≤ <i>x</i> &lt; 0.5; GDC: it equals 0.02 at <i>x</i> = 0.11928…</div><div class="worked__math"><i>c</i> ≈ <b>0.119</b></div>'
  },
  {
    id: 't1-3-q032',
    topic: 't1-3', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 6,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 1.11; SL 5.10, 5.11',
    stem: '<p>Let <span class="chem">f(x) = (x + 7) / ((x - 1)(x + 3))</span>, for <span class="chem">x &gt; 1</span>. The region enclosed by the graph of <span class="chem">f</span>, the <span class="chem">x</span>-axis and the lines <span class="chem">x = 2</span> and <span class="chem">x = k</span>, where <span class="chem">k &gt; 2</span>, has area 1.</p><p>Find the value of <span class="chem">k</span>. Give your answer to 3 significant figures.</p>',
    answer: 2.7713334425085,
    sigfigs: 3,
    hints: [
      'Decode: “area of the region” means <span class="chem">int_2^k f(x) dx = 1</span> (here <span class="chem">f(x) &gt; 0</span> for <span class="chem">x &gt; 1</span>). Partial fractions turn <span class="chem">f</span> into two logarithm integrals, giving an equation in <span class="chem">k</span>.',
      'Partial fractions: <span class="chem">f(x) = 2/(x - 1) - 1/(x + 3)</span>.',
      'So <span class="chem">2ln(k - 1) - ln(k + 3) + ln 5 = 1</span>. Solve this on your GDC (or solve <span class="chem">int_2^k f(x) dx = 1</span> numerically).'
    ],
    solution: '<p><b>Decode:</b> area → definite integral; partial fractions make it integrable; GDC solves the resulting equation.</p><div class="worked__math"><i>x</i> + 7 ≡ <i>A</i>(<i>x</i> + 3) + <i>B</i>(<i>x</i> − 1):  <i>x</i> = 1 ⇒ <i>A</i> = 2;  <i>x</i> = −3 ⇒ <i>B</i> = −1</div><div class="worked__math">∫<sub>2</sub><sup><i>k</i></sup> <i>f</i>(<i>x</i>) d<i>x</i> = [2 ln(<i>x</i> − 1) − ln(<i>x</i> + 3)]<sub>2</sub><sup><i>k</i></sup> = 2 ln(<i>k</i> − 1) − ln(<i>k</i> + 3) + ln 5</div><div class="worked__math">2 ln(<i>k</i> − 1) − ln(<i>k</i> + 3) + ln 5 = 1  ⇒ (GDC)  <i>k</i> = 2.7713…  ≈ <b>2.77</b></div>'
  },
  {
    id: 't1-3-q033',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 1.11',
    stem: '<p>The denominator of <span class="chem">f(x) = (2x + 1) / (x^2 - 4x + 1)</span> has two distinct real roots <span class="chem">alpha</span> and <span class="chem">beta</span>, where <span class="chem">alpha &gt; beta</span>. Given that <span class="chem">f(x) = A / (x - alpha) + B / (x - beta)</span>, find the value of <span class="chem">A</span>. Give your answer to 3 significant figures.</p>',
    answer: 2.44337567297406,
    sigfigs: 3,
    hints: [
      'Decode: the method is the usual cover-up, but the roots are not integers. Find <span class="chem">alpha</span> and <span class="chem">beta</span> on the GDC first.',
      'GDC: <span class="chem">alpha ≈ 3.732</span>, <span class="chem">beta ≈ 0.2679</span>. Then <span class="chem">2x + 1 ≡ A(x - beta) + B(x - alpha)</span>.',
      'Substitute <span class="chem">x = alpha</span>: <span class="chem">A = (2alpha + 1)/(alpha - beta)</span>.'
    ],
    solution: '<div class="worked__math"><i>x</i><sup>2</sup> − 4<i>x</i> + 1 = 0 ⇒ α = 3.7320…, β = 0.26794…   (α = 2 + √3, β = 2 − √3)</div><div class="worked__math">2<i>x</i> + 1 ≡ <i>A</i>(<i>x</i> − β) + <i>B</i>(<i>x</i> − α);  <i>x</i> = α:  <i>A</i> = <span class="frac"><span>2α + 1</span><span>α − β</span></span> = <span class="frac"><span>8.4641…</span><span>3.4641…</span></span> ≈ <b>2.44</b></div>'
  },
  {
    id: 't1-3-q034',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'short', marks: 10,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 1.10, 1.11',
    stem: '<p>Let <span class="chem">f(x) = (x + 5) / ((1 - x)(2 + x))</span>.</p><p>(a) Express <span class="chem">f(x)</span> in partial fractions. <strong>[3 marks]</strong><br>(b) Hence find the expansion of <span class="chem">f(x)</span> in ascending powers of <span class="chem">x</span>, up to and including the term in <span class="chem">x^2</span>. <strong>[3 marks]</strong><br>(c) State the set of values of <span class="chem">x</span> for which the full expansion is valid. <strong>[1 mark]</strong><br>(d) Use your answer to (b) to estimate <span class="chem">f(0.1)</span>, and find the percentage error of this estimate. <strong>[3 marks]</strong></p>',
    answer: '<div class="worked__math">(a)  <i>x</i> + 5 ≡ <i>A</i>(2 + <i>x</i>) + <i>B</i>(1 − <i>x</i>):  <i>x</i> = 1 ⇒ <i>A</i> = 2;  <i>x</i> = −2 ⇒ <i>B</i> = 1;  <i>f</i>(<i>x</i>) = <span class="frac"><span>2</span><span>1 − <i>x</i></span></span> + <span class="frac"><span>1</span><span>2 + <i>x</i></span></span></div><div class="worked__math">(b)  2(1 + <i>x</i> + <i>x</i><sup>2</sup>) + <span class="frac"><span>1</span><span>2</span></span>(1 − <span class="frac"><span><i>x</i></span><span>2</span></span> + <span class="frac"><span><i>x</i><sup>2</sup></span><span>4</span></span>) = <b><span class="frac"><span>5</span><span>2</span></span> + <span class="frac"><span>7</span><span>4</span></span><i>x</i> + <span class="frac"><span>17</span><span>8</span></span><i>x</i><sup>2</sup></b></div><div class="worked__math">(c)  |<i>x</i>| &lt; 1 (intersection of |<i>x</i>| &lt; 1 and |<i>x</i>| &lt; 2)</div><div class="worked__math">(d)  estimate = 2.5 + 0.175 + 0.02125 = <b>2.69625</b>;  exact <i>f</i>(0.1) = 5.1/1.89 = 2.69841…;  percentage error ≈ <b>0.0801 %</b></div>',
    markscheme: [
      'M1: Sets <span class="chem">x + 5 = A(2 + x) + B(1 - x)</span> (or cover-up).',
      'A1: <span class="chem">A = 2</span>.',
      'A1: <span class="chem">B = 1</span>.',
      'M1: Writes <span class="chem">1/(2 + x) = (1/2)(1 + x/2)^{-1}</span>.',
      'A1: Correct expansions <span class="chem">2(1 + x + x^2)</span> and <span class="chem">(1/2)(1 - x/2 + x^2/4)</span>.',
      'A1: <span class="chem">5/2 + (7/4)x + (17/8)x^2</span>.',
      'A1: <span class="chem">|x| &lt; 1</span>.',
      'A1: Estimate 2.69625.',
      'M1: Uses the exact value from the GDC, 2.69841…, in |estimate − exact| ÷ exact × 100.',
      'A1: 0.0801 %.'
    ],
    hints: [
      'Use the roots <span class="chem">x = 1</span> and <span class="chem">x = -2</span> to find the numerators.',
      'Before expanding <span class="chem">1/(2 + x)</span>, take out the factor <span class="chem">2^{-1}</span>.',
      'The whole series is valid only where both parts converge.'
    ],
    solution: '<div class="worked__math">(a) 2/(1 − <i>x</i>) + 1/(2 + <i>x</i>)   (b) 5/2 + (7/4)<i>x</i> + (17/8)<i>x</i><sup>2</sup>   (c) |<i>x</i>| &lt; 1   (d) 2.69625, ≈ 0.0801 %</div>'
  },
  {
    id: 't1-3-q035',
    topic: 't1-3', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 1.10',
    stem: '<p>The <span class="chem">n</span> vertices of a regular polygon are marked on a circle. A designer wants to shade every triangle whose three corners are vertices of the polygon, each triangle in a different colour. Her software offers 10 000 colours.</p><p>Find the greatest value of <span class="chem">n</span> for which she has enough colours.</p>',
    answer: 40,
    tolerance: { abs: 0.01 },
    hints: [
      'Decode: a triangle is fixed by choosing 3 of the <span class="chem">n</span> vertices (order irrelevant), so there are <span class="chem">nC3</span> triangles. “Enough colours” means <span class="chem">nC3 &lt;= 10000</span>; you want the GREATEST such <span class="chem">n</span>.',
      'No three vertices of a polygon on a circle are collinear, so every choice of 3 vertices really is a triangle.',
      'Use the GDC table of <span class="chem">y = xC3</span>.'
    ],
    solution: '<p><b>Decode:</b> triangles = <sup><i>n</i></sup>C<sub>3</sub>; need <sup><i>n</i></sup>C<sub>3</sub> ≤ 10 000 and the largest such <i>n</i>.</p><div class="worked__math">GDC: <sup>40</sup>C<sub>3</sub> = 9880 ≤ 10 000,   <sup>41</sup>C<sub>3</sub> = 10 660 &gt; 10 000</div><div class="worked__math">Greatest <i>n</i> = <b>40</b></div>'
  },
  {
    id: 't1-3-q036',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 1.10; SL 4.5',
    stem: '<p>A teacher chooses 5 students at random from a class of 28 to present their projects. Find the probability that two friends, Ana and Ben, are both chosen. Give your answer to 3 significant figures.</p>',
    answer: 0.0264550264550265,
    sigfigs: 3,
    hints: [
      'Decode: every group of 5 is equally likely; count the groups that contain both Ana and Ben.',
      'If Ana and Ben are both in, the other 3 come from the remaining 26 students: <span class="chem">26C3</span>.',
      'Divide by the total number of groups, <span class="chem">28C5</span>.'
    ],
    solution: '<div class="worked__math">P = <span class="frac"><span><sup>26</sup>C<sub>3</sub></span><span><sup>28</sup>C<sub>5</sub></span></span> = <span class="frac"><span>2600</span><span>98 280</span></span> ≈ <b>0.0265</b></div>'
  },
  {
    id: 't1-3-q037',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'short', marks: 6,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 1.10',
    stem: '<p>In the expansion of <span class="chem">(1 + ax)^{1/3}</span> in ascending powers of <span class="chem">x</span>, where <span class="chem">a &gt; 0</span>, the coefficient of <span class="chem">x</span> plus the coefficient of <span class="chem">x^3</span> equals 2.</p><p>(a) Show that <span class="chem">5a^3 + 27a - 162 = 0</span>. <strong>[3 marks]</strong><br>(b) Hence find the value of <span class="chem">a</span>. <strong>[1 mark]</strong><br>(c) Find the set of values of <span class="chem">x</span> for which the expansion is valid. <strong>[2 marks]</strong></p>',
    answer: '<div class="worked__math">(a)  coefficient of <i>x</i>: <span class="frac"><span><i>a</i></span><span>3</span></span>;  coefficient of <i>x</i><sup>3</sup>: <span class="frac"><span>(1/3)(−2/3)(−5/3)</span><span>3!</span></span><i>a</i><sup>3</sup> = <span class="frac"><span>5<i>a</i><sup>3</sup></span><span>81</span></span>;  <span class="frac"><span><i>a</i></span><span>3</span></span> + <span class="frac"><span>5<i>a</i><sup>3</sup></span><span>81</span></span> = 2 ⇒ 27<i>a</i> + 5<i>a</i><sup>3</sup> = 162</div><div class="worked__math">(b)  GDC: <b><i>a</i> = 2.63</b> (2.6302…)</div><div class="worked__math">(c)  |<i>ax</i>| &lt; 1 ⇔ <b>|<i>x</i>| &lt; 0.380</b> (1/<i>a</i> = 0.38019…)</div>',
    markscheme: [
      'M1: Uses the extended binomial expansion with <span class="chem">n = 1/3</span> and <span class="chem">u = ax</span>, including <span class="chem">n(n - 1)(n - 2)/3!</span> for the <span class="chem">x^3</span> term.',
      'A1: Coefficient of <span class="chem">x</span> is <span class="chem">a/3</span>.',
      'A1: Coefficient of <span class="chem">x^3</span> is <span class="chem">5a^3/81</span>, and multiplies <span class="chem">a/3 + 5a^3/81 = 2</span> by 81. AG: <span class="chem">5a^3 + 27a - 162 = 0</span>; the given line itself earns no mark.',
      'A1: <span class="chem">a = 2.63</span> (the only real root).',
      'M1: Uses <span class="chem">|ax| &lt; 1</span>.',
      'A1: <span class="chem">|x| &lt; 0.380</span> (accept <span class="chem">|x| &lt; 1/a</span> with <span class="chem">1/a = 0.380</span>).'
    ],
    hints: [
      'Use <span class="chem">n = 1/3</span> and <span class="chem">u = ax</span>; the <span class="chem">x^3</span> term is <span class="chem">(n(n - 1)(n - 2)/3!)(ax)^3</span>.',
      'The cubic in (b) has no rational root: solve it with your GDC polynomial solver.',
      'For (c) use <span class="chem">|ax| &lt; 1</span> with your value of <span class="chem">a</span>.'
    ],
    solution: '<div class="worked__math">(a) <i>a</i>/3 + 5<i>a</i><sup>3</sup>/81 = 2 ⇒ 5<i>a</i><sup>3</sup> + 27<i>a</i> − 162 = 0   (b) <i>a</i> ≈ 2.63   (c) |<i>x</i>| &lt; 0.380</div>'
  },
  {
    id: 't1-3-q038',
    topic: 't1-3', level: 'ahl', tier: 'challenge', type: 'short', marks: 9,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 1.10; SL 1.4',
    stem: '<p>A savings account pays an annual interest rate <span class="chem">r</span> (as a decimal), compounded once a year. A customer wants the equivalent monthly rate <span class="chem">m</span>: the rate that, compounded every month for 12 months, gives the same final amount.</p><p>(a) Show that <span class="chem">m = (1 + r)^{1/12} - 1</span>. <strong>[2 marks]</strong><br>(b) Use the extended binomial theorem to show that <span class="chem">m ≈ r/12 - 11r^2/288</span>. <strong>[3 marks]</strong><br>(c) State the condition on <span class="chem">r</span> for which the full series for <span class="chem">m</span> converges. <strong>[1 mark]</strong><br>(d) For an annual rate of 6%, find the exact value of the approximation in (b) and the value of <span class="chem">m</span> given by your GDC to 4 significant figures, and find the percentage error of the approximation, using the unrounded GDC value of <span class="chem">m</span>. <strong>[3 marks]</strong></p>',
    answer: '<div class="worked__math">(a)  (1 + <i>m</i>)<sup>12</sup> = 1 + <i>r</i> ⇒ <i>m</i> = (1 + <i>r</i>)<sup>1/12</sup> − 1</div><div class="worked__math">(b)  (1 + <i>r</i>)<sup>1/12</sup> = 1 + <span class="frac"><span><i>r</i></span><span>12</span></span> + <span class="frac"><span>(1/12)(−11/12)</span><span>2</span></span><i>r</i><sup>2</sup> + … = 1 + <span class="frac"><span><i>r</i></span><span>12</span></span> − <span class="frac"><span>11<i>r</i><sup>2</sup></span><span>288</span></span> + …</div><div class="worked__math">(c)  |<i>r</i>| &lt; 1 (for a positive rate, 0 &lt; <i>r</i> &lt; 1)</div><div class="worked__math">(d)  <i>r</i> = 0.06: approximation = 0.005 − 0.0001375 = <b>0.0048625</b>;  GDC: <i>m</i> = 1.06<sup>1/12</sup> − 1 = <b>0.004868</b> (0.0048675…);  percentage error ≈ <b>0.104 %</b> (an underestimate)</div>',
    markscheme: [
      'M1: Equates the amounts: <span class="chem">P(1 + m)^{12} = P(1 + r)</span>.',
      'A1: Takes the 12th root and rearranges. AG: <span class="chem">m = (1 + r)^{1/12} - 1</span>; the given line itself earns no mark.',
      'M1: Uses the extended binomial expansion with <span class="chem">n = 1/12</span> and <span class="chem">u = r</span>.',
      'A1: Linear term <span class="chem">r/12</span>.',
      'A1: Quadratic coefficient <span class="chem">(1/12)(-11/12)/2 = -11/288</span>, and subtracts 1. AG: <span class="chem">m ≈ r/12 - 11r^2/288</span>.',
      'A1: <span class="chem">|r| &lt; 1</span>.',
      'A1: Approximation 0.0048625.',
      'A1: GDC value 0.004868 (0.0048675…).',
      'A1: Percentage error 0.104 %.'
    ],
    hints: [
      'Decode: “equivalent” means equal amounts after one year, so <span class="chem">(1 + m)^{12} = 1 + r</span>. Part (b) is then the extended binomial with the fractional index <span class="chem">1/12</span>.',
      'In (b), <span class="chem">n = 1/12</span>, so <span class="chem">n - 1 = -11/12</span>.',
      'In (d) use <span class="chem">r = 0.06</span>, not 6.'
    ],
    solution: '<p><b>Decode:</b> “equivalent monthly rate” → (1 + <i>m</i>)<sup>12</sup> = 1 + <i>r</i>; then a binomial series with <i>n</i> = 1/12.</p><div class="worked__math">(b) <i>m</i> ≈ <i>r</i>/12 − 11<i>r</i><sup>2</sup>/288   (c) |<i>r</i>| &lt; 1   (d) 0.0048625 vs 0.004868, error ≈ 0.104 %</div>'
  },
  {
    id: 't1-3-q039',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 1.10',
    stem: '<p>A hockey squad has 18 players. For a match, the coach names a captain, a vice-captain and 9 further players, whose roles are not distinguished. Find the number of different ways in which the coach can do this.</p>',
    answer: 3500640,
    exact: true,
    answerInput: '3500640',
    hints: [
      'Decode: two different kinds of choice. Captain and vice-captain are different roles (order matters); the other 9 are just a group (order does not matter).',
      'Captain then vice-captain: <span class="chem">18P2</span> ways. Then choose 9 of the remaining 16 players.',
      'Multiply: <span class="chem">18P2 × 16C9</span>.'
    ],
    solution: '<div class="worked__math"><sup>18</sup>P<sub>2</sub> × <sup>16</sup>C<sub>9</sub> = 306 × 11 440 = <b>3 500 640</b></div>'
  },
  {
    id: 't1-3-q040',
    topic: 't1-3', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 6,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 1.10',
    stem: '<p>A city has a rectangular grid of streets. A courier starts at junction P and must reach junction Q, which is 9 blocks east and 7 blocks north of P, by a shortest route (so she only ever travels east or north along the streets). Today the junction that is 4 blocks east and 3 blocks north of P is closed.</p><p>Find the number of shortest routes from P to Q that the courier can still use.</p>',
    answer: 7030,
    tolerance: { abs: 0.01 },
    hints: [
      'Decode: every shortest route is a string of 9 E-moves and 7 N-moves in some order, so choosing which 7 of the 16 moves are N fixes the route: <span class="chem">16C7</span> routes. Then remove the routes through the closed junction (complement).',
      'Routes through the closed junction: (routes P → junction) × (routes junction → Q) = <span class="chem">7C3 × 9C4</span>.',
      'Subtract from the total.'
    ],
    solution: '<p><b>Decode:</b> a shortest route = an ordering of 9 E and 7 N moves = a choice of positions for the N moves.</p><div class="worked__math">All routes: <sup>16</sup>C<sub>7</sub> = 11 440</div><div class="worked__math">Through the closed junction (4 E, 3 N, then 5 E, 4 N): <sup>7</sup>C<sub>3</sub> × <sup>9</sup>C<sub>4</sub> = 35 × 126 = 4410</div><div class="worked__math">Available routes = 11 440 − 4410 = <b>7030</b></div>'
  },
  /* ======================= PAPER 1 (NO GDC) =============================== */
  {
    id: 't1-3-q041',
    topic: 't1-3', level: 'ahl', tier: 'foundation', type: 'numeric', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10',
    stem: '<p>In a chess tournament, every player plays every other player exactly once. A total of 28 games are played. Find the number of players.</p>',
    answer: 8,
    tolerance: { abs: 0.01 },
    hints: [
      'Each game is fixed by choosing 2 of the <span class="chem">n</span> players, so the number of games is <span class="chem">nC2 = n(n - 1)/2</span>.',
      'Solve <span class="chem">n(n - 1) = 56</span> for a positive integer <span class="chem">n</span>.'
    ],
    solution: '<div class="worked__math"><span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = 28 ⇒ <i>n</i><sup>2</sup> − <i>n</i> − 56 = 0 ⇒ (<i>n</i> − 8)(<i>n</i> + 7) = 0 ⇒ <b><i>n</i> = 8</b></div>'
  },
  {
    id: 't1-3-q042',
    topic: 't1-3', level: 'ahl', tier: 'foundation', type: 'numeric', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10',
    stem: '<p>Find the coefficient of <span class="chem">x^2</span> in the expansion of <span class="chem">(1 - x)^{-2}</span> in ascending powers of <span class="chem">x</span>.</p>',
    answer: 3,
    tolerance: { abs: 0.01 },
    hints: [
      'Use <span class="chem">(1 + u)^n = 1 + nu + (n(n - 1)/2!)u^2 + ...</span> with <span class="chem">n = -2</span> and <span class="chem">u = -x</span>.',
      '<span class="chem">(-x)^2 = x^2</span>, so the sign comes only from <span class="chem">n(n - 1)</span>.'
    ],
    solution: '<div class="worked__math"><span class="frac"><span>(−2)(−3)</span><span>2!</span></span>(−<i>x</i>)<sup>2</sup> = 3<i>x</i><sup>2</sup>  ⇒  coefficient <b>3</b></div>'
  },
  {
    id: 't1-3-q043',
    topic: 't1-3', level: 'ahl', tier: 'foundation', type: 'numeric', marks: 3,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.11',
    stem: '<p>Given that <span class="chem">(x + 8) / ((x + 3)(x - 2)) = A / (x + 3) + B / (x - 2)</span>, find the value of <span class="chem">A</span>.</p>',
    answer: -1,
    tolerance: { abs: 0.01 },
    hints: [
      'Multiply through by <span class="chem">(x + 3)(x - 2)</span>: <span class="chem">x + 8 ≡ A(x - 2) + B(x + 3)</span>.',
      'Choose the value of <span class="chem">x</span> that makes the <span class="chem">B</span> term zero.'
    ],
    solution: '<div class="worked__math"><i>x</i> + 8 ≡ <i>A</i>(<i>x</i> − 2) + <i>B</i>(<i>x</i> + 3);  <i>x</i> = −3:  5 = −5<i>A</i>  ⇒  <b><i>A</i> = −1</b></div>'
  },
  {
    id: 't1-3-q044',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10',
    stem: '<p>Four-digit numbers are formed from the digits 0, 1, 2, 3, 4, 5, 6, with no digit used more than once. A four-digit number cannot start with 0. Find how many of these numbers are odd.</p>',
    answer: 300,
    tolerance: { abs: 0.01 },
    hints: [
      'Decode: two restricted positions. The units digit must be odd (1, 3 or 5) and the thousands digit cannot be 0. Fill the most restricted slots first.',
      'Units digit: 3 choices. Thousands digit: not 0 and not the units digit, so 5 choices.',
      'The remaining two slots are filled from the 5 digits left, then 4.'
    ],
    solution: '<div class="worked__math">units (odd): 3;  thousands (not 0, not the units digit): 5;  hundreds: 5;  tens: 4</div><div class="worked__math">3 × 5 × 5 × 4 = <b>300</b></div>'
  },
  {
    id: 't1-3-q045',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'short', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10',
    stem: '<p>A team of 4 is chosen from 6 boys and 5 girls.</p><p>(a) Write down the number of different teams that can be chosen. <strong>[1 mark]</strong><br>(b) Find the number of teams that contain at least one girl. <strong>[2 marks]</strong><br>(c) The team must contain exactly 2 boys and 2 girls. One of the boys, Raj, and one of the girls, Sofia, cannot both be in the team. Find the number of possible teams. <strong>[3 marks]</strong></p>',
    answer: '<div class="worked__math">(a)  <sup>11</sup>C<sub>4</sub> = <b>330</b></div><div class="worked__math">(b)  330 − <sup>6</sup>C<sub>4</sub> = 330 − 15 = <b>315</b></div><div class="worked__math">(c)  <sup>6</sup>C<sub>2</sub> × <sup>5</sup>C<sub>2</sub> = 15 × 10 = 150;  teams with both Raj and Sofia: <sup>5</sup>C<sub>1</sub> × <sup>4</sup>C<sub>1</sub> = 20;  150 − 20 = <b>130</b></div>',
    markscheme: [
      'A1: 330.',
      'M1: Uses the complement: total minus all-boy teams, <span class="chem">330 - 6C4</span>.',
      'A1: 315.',
      'M1: Counts 2 boys and 2 girls: <span class="chem">6C2 × 5C2 = 150</span>.',
      'M1: Counts teams containing both Raj and Sofia: <span class="chem">5C1 × 4C1 = 20</span>.',
      'A1: 130.'
    ],
    hints: [
      'Decode: “at least one girl” is best done by the complement (no girls at all).',
      'In (c), first count all 2-boy-2-girl teams, then subtract those that contain both Raj and Sofia (fix them, then choose 1 more boy and 1 more girl).'
    ],
    solution: '<div class="worked__math">(a) 330   (b) 330 − 15 = 315   (c) 150 − 20 = 130</div>'
  },
  {
    id: 't1-3-q046',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10',
    stem: '<p>Seven different people, including Ali, Bea and Cal, stand in a row for a photograph. Ali and Bea must stand next to each other, and Cal must not stand at either end of the row. Find the number of possible arrangements.</p>',
    answer: 960,
    tolerance: { abs: 0.01 },
    hints: [
      'Decode: “next to each other” → glue Ali and Bea into one block; “not at either end” → count the arrangements with Cal at an end and subtract (complement).',
      'With the block there are 6 units: <span class="chem">6! × 2!</span> arrangements in total.',
      'Cal at an end: 2 choices of end, then arrange the other 5 units (including the block) in <span class="chem">5! × 2!</span> ways.'
    ],
    solution: '<div class="worked__math">Ali and Bea together: 6! × 2! = 1440</div><div class="worked__math">…with Cal at an end: 2 × 5! × 2! = 480</div><div class="worked__math">1440 − 480 = <b>960</b></div>'
  },
  {
    id: 't1-3-q047',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10',
    stem: '<p>Find the exact value of the coefficient of <span class="chem">x^3</span> in the expansion of <span class="chem">(1 + 3x)^{-1/3}</span> in ascending powers of <span class="chem">x</span>.</p>',
    answer: -4.66666666666667,
    exact: true,
    answerInput: '-14/3',
    answerDisplay: '−14/3',
    hints: [
      'The <span class="chem">x^3</span> term is <span class="chem">(n(n - 1)(n - 2)/3!)u^3</span> with <span class="chem">n = -1/3</span> and <span class="chem">u = 3x</span>.',
      '<span class="chem">n - 1 = -4/3</span> and <span class="chem">n - 2 = -7/3</span>; three negative factors give a negative product.'
    ],
    solution: '<div class="worked__math"><span class="frac"><span>(−1/3)(−4/3)(−7/3)</span><span>3!</span></span>(3<i>x</i>)<sup>3</sup> = <span class="frac"><span>−28/27</span><span>6</span></span> × 27<i>x</i><sup>3</sup> = −<span class="frac"><span>28</span><span>6</span></span><i>x</i><sup>3</sup></div><div class="worked__math">Coefficient = <b>−<span class="frac"><span>14</span><span>3</span></span></b></div>'
  },
  {
    id: 't1-3-q048',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'short', marks: 7,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10',
    stem: '<p>(a) Find the first three terms of the expansion of <span class="chem">(8 - 3x)^{1/3}</span> in ascending powers of <span class="chem">x</span>. <strong>[4 marks]</strong><br>(b) State the set of values of <span class="chem">x</span> for which the expansion is valid. <strong>[1 mark]</strong><br>(c) Hence find an approximation for the cube root of 7.97, giving your answer to 6 decimal places. <strong>[2 marks]</strong></p>',
    answer: '<div class="worked__math">(a)  (8 − 3<i>x</i>)<sup>1/3</sup> = 2(1 − <span class="frac"><span>3<i>x</i></span><span>8</span></span>)<sup>1/3</sup> = 2[1 + <span class="frac"><span>1</span><span>3</span></span>(−<span class="frac"><span>3<i>x</i></span><span>8</span></span>) + <span class="frac"><span>(1/3)(−2/3)</span><span>2</span></span>(−<span class="frac"><span>3<i>x</i></span><span>8</span></span>)<sup>2</sup> + …] = <b>2 − <span class="frac"><span><i>x</i></span><span>4</span></span> − <span class="frac"><span><i>x</i><sup>2</sup></span><span>32</span></span></b> + …</div><div class="worked__math">(b)  |3<i>x</i>/8| &lt; 1 ⇔ <b>|<i>x</i>| &lt; <span class="frac"><span>8</span><span>3</span></span></b></div><div class="worked__math">(c)  8 − 3<i>x</i> = 7.97 ⇒ <i>x</i> = 0.01:  2 − 0.0025 − 0.000003125 = 1.997496875 ≈ <b>1.997497</b></div>',
    markscheme: [
      'M1: Takes out the factor <span class="chem">8^{1/3} = 2</span>.',
      'M1: Uses <span class="chem">n = 1/3</span> with <span class="chem">u = -3x/8</span>.',
      'A1: <span class="chem">2 - x/4</span>.',
      'A1: <span class="chem">- x^2/32</span>.',
      'A1: <span class="chem">|x| &lt; 8/3</span>.',
      'M1: Uses <span class="chem">x = 0.01</span> (from <span class="chem">8 - 3x = 7.97</span>).',
      'A1: 1.997497.'
    ],
    hints: [
      'Take out <span class="chem">8^{1/3}</span> first so the bracket starts with 1.',
      'For (c), solve <span class="chem">8 - 3x = 7.97</span> to find the value of <span class="chem">x</span> to substitute.'
    ],
    solution: '<div class="worked__math">(a) 2 − <i>x</i>/4 − <i>x</i><sup>2</sup>/32   (b) |<i>x</i>| &lt; 8/3   (c) <i>x</i> = 0.01 ⇒ 1.997497</div>'
  },
  {
    id: 't1-3-q049',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'numeric', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10, 1.11',
    stem: '<p>By first expressing <span class="chem">6 / ((1 - x)(2 + x))</span> in partial fractions, find the exact value of the coefficient of <span class="chem">x^3</span> in its expansion in ascending powers of <span class="chem">x</span>.</p>',
    answer: 1.875,
    exact: true,
    answerInput: '15/8',
    answerDisplay: '15/8',
    hints: [
      '<span class="chem">6 ≡ A(2 + x) + B(1 - x)</span>; substitute <span class="chem">x = 1</span> and <span class="chem">x = -2</span>.',
      'You should get <span class="chem">2/(1 - x) + 2/(2 + x)</span>. Write <span class="chem">2/(2 + x) = (1 + x/2)^{-1}</span>.',
      'The <span class="chem">x^3</span> coefficients are 2 from <span class="chem">2(1 - x)^{-1}</span> and <span class="chem">(-1/2)^3</span> from <span class="chem">(1 + x/2)^{-1}</span>.'
    ],
    solution: '<div class="worked__math">6 ≡ <i>A</i>(2 + <i>x</i>) + <i>B</i>(1 − <i>x</i>):  <i>x</i> = 1 ⇒ <i>A</i> = 2;  <i>x</i> = −2 ⇒ <i>B</i> = 2</div><div class="worked__math"><span class="frac"><span>2</span><span>1 − <i>x</i></span></span> + <span class="frac"><span>2</span><span>2 + <i>x</i></span></span> = 2(1 − <i>x</i>)<sup>−1</sup> + (1 + <span class="frac"><span><i>x</i></span><span>2</span></span>)<sup>−1</sup></div><div class="worked__math">Coefficient of <i>x</i><sup>3</sup> = 2 + (−<span class="frac"><span>1</span><span>2</span></span>)<sup>3</sup> = 2 − <span class="frac"><span>1</span><span>8</span></span> = <b><span class="frac"><span>15</span><span>8</span></span></b></div>'
  },
  {
    id: 't1-3-q050',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'short', marks: 7,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10, 1.11',
    stem: '<p>Let <span class="chem">g(x) = (5 - x) / ((1 + x)(1 - 2x))</span>.</p><p>(a) Express <span class="chem">g(x)</span> in partial fractions. <strong>[3 marks]</strong><br>(b) Hence show that the coefficient of <span class="chem">x^n</span> in the expansion of <span class="chem">g(x)</span> in ascending powers of <span class="chem">x</span> is <span class="chem">2(-1)^n + 3 × 2^n</span>. <strong>[2 marks]</strong><br>(c) State the set of values of <span class="chem">x</span> for which the expansion is valid. <strong>[1 mark]</strong><br>(d) Write down the coefficient of <span class="chem">x^5</span>. <strong>[1 mark]</strong></p>',
    answer: '<div class="worked__math">(a)  5 − <i>x</i> ≡ <i>A</i>(1 − 2<i>x</i>) + <i>B</i>(1 + <i>x</i>):  <i>x</i> = −1 ⇒ 6 = 3<i>A</i> ⇒ <i>A</i> = 2;  <i>x</i> = <span class="frac"><span>1</span><span>2</span></span> ⇒ <span class="frac"><span>9</span><span>2</span></span> = <span class="frac"><span>3</span><span>2</span></span><i>B</i> ⇒ <i>B</i> = 3;  <i>g</i>(<i>x</i>) = <span class="frac"><span>2</span><span>1 + <i>x</i></span></span> + <span class="frac"><span>3</span><span>1 − 2<i>x</i></span></span></div><div class="worked__math">(b)  2(1 + <i>x</i>)<sup>−1</sup> = 2∑(−1)<sup><i>n</i></sup><i>x</i><sup><i>n</i></sup>,  3(1 − 2<i>x</i>)<sup>−1</sup> = 3∑2<sup><i>n</i></sup><i>x</i><sup><i>n</i></sup>, so the coefficient is 2(−1)<sup><i>n</i></sup> + 3 × 2<sup><i>n</i></sup></div><div class="worked__math">(c)  |<i>x</i>| &lt; <span class="frac"><span>1</span><span>2</span></span></div><div class="worked__math">(d)  −2 + 96 = <b>94</b></div>',
    markscheme: [
      'M1: Sets <span class="chem">5 - x = A(1 - 2x) + B(1 + x)</span> (or cover-up).',
      'A1: <span class="chem">A = 2</span>.',
      'A1: <span class="chem">B = 3</span>.',
      'M1: Writes the general terms <span class="chem">(1 + x)^{-1} = Σ(-1)^n x^n</span> and <span class="chem">(1 - 2x)^{-1} = Σ(2x)^n</span>.',
      'A1: Combines <span class="chem">2(-1)^n + 3(2^n)</span>. AG: the given coefficient; the given line itself earns no mark.',
      'A1: <span class="chem">|x| &lt; 1/2</span>.',
      'A1: 94.'
    ],
    hints: [
      'Use <span class="chem">x = -1</span> and <span class="chem">x = 1/2</span> to find <span class="chem">A</span> and <span class="chem">B</span>.',
      '<span class="chem">(1 + u)^{-1} = 1 - u + u^2 - u^3 + ...</span>, so the coefficient of <span class="chem">u^n</span> is <span class="chem">(-1)^n</span>.',
      'Validity needs both <span class="chem">|x| &lt; 1</span> and <span class="chem">|2x| &lt; 1</span>.'
    ],
    solution: '<div class="worked__math">(a) 2/(1 + <i>x</i>) + 3/(1 − 2<i>x</i>)   (c) |<i>x</i>| &lt; 1/2   (d) 2(−1) + 3(32) = 94</div>'
  },
  {
    id: 't1-3-q051',
    topic: 't1-3', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10',
    stem: '<p>A student packing for a revision camp may take exactly 5 of her 9 different revision books: 4 on mathematics, 3 on physics and 2 on chemistry. Her teacher insists that every subject is represented among the books she takes. How many different selections of books can she make?</p>',
    answer: 98,
    tolerance: { abs: 0.01 },
    hints: [
      'Decode: an unordered selection of 5 from 9 with the hidden condition “at least one book from each subject”. Listing cases is slow; use the complement: total − (selections missing a subject).',
      'Total: <span class="chem">9C5</span>. With no mathematics book, all 5 come from the other 5 books; with no physics, from 6; with no chemistry, from 7.',
      'A selection of 5 cannot miss two subjects at once (at most 4 books would be left), so nothing is subtracted twice.'
    ],
    solution: '<p><b>Decode:</b> “every subject represented” = complement of “some subject missing”.</p><div class="worked__math">Total: <sup>9</sup>C<sub>5</sub> = 126</div><div class="worked__math">No maths: <sup>5</sup>C<sub>5</sub> = 1;  no physics: <sup>6</sup>C<sub>5</sub> = 6;  no chemistry: <sup>7</sup>C<sub>5</sub> = 21</div><div class="worked__math">No selection misses two subjects (that leaves at most 4 books)</div><div class="worked__math">126 − (1 + 6 + 21) = <b>98</b></div>'
  },
  {
    id: 't1-3-q052',
    topic: 't1-3', level: 'ahl', tier: 'challenge', type: 'short', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10',
    stem: '<p>Let <span class="chem">n</span> and <span class="chem">r</span> be integers with <span class="chem">1 &lt;= r &lt;= n</span>.</p><p>(a) Prove that <sup><i>n</i>+1</sup>P<sub><i>r</i></sub> = <sup><i>n</i></sup>P<sub><i>r</i></sub> + <i>r</i> × <sup><i>n</i></sup>P<sub><i>r</i>−1</sub>. <strong>[4 marks]</strong><br>(b) By considering arrangements of <span class="chem">r</span> objects chosen from <span class="chem">n + 1</span> different objects, one of which is labelled X, explain why this identity is true. <strong>[2 marks]</strong></p>',
    answer: '<div class="worked__math">(a)  RHS = <span class="frac"><span><i>n</i>!</span><span>(<i>n</i> − <i>r</i>)!</span></span> + <i>r</i> <span class="frac"><span><i>n</i>!</span><span>(<i>n</i> − <i>r</i> + 1)!</span></span> = <span class="frac"><span><i>n</i>!(<i>n</i> − <i>r</i> + 1) + <i>r</i> <i>n</i>!</span><span>(<i>n</i> − <i>r</i> + 1)!</span></span> = <span class="frac"><span><i>n</i>!(<i>n</i> + 1)</span><span>(<i>n</i> + 1 − <i>r</i>)!</span></span> = <span class="frac"><span>(<i>n</i> + 1)!</span><span>(<i>n</i> + 1 − <i>r</i>)!</span></span> = <sup><i>n</i>+1</sup>P<sub><i>r</i></sub> = LHS</div><div class="worked__math">(b)  Arrangements without X: <sup><i>n</i></sup>P<sub><i>r</i></sub>. Arrangements with X: choose X’s position (<i>r</i> ways), then arrange <i>r</i> − 1 of the other <i>n</i> objects in the remaining places (<sup><i>n</i></sup>P<sub><i>r</i>−1</sub> ways). These two cases cover all <sup><i>n</i>+1</sup>P<sub><i>r</i></sub> arrangements exactly once.</div>',
    markscheme: [
      'M1: Writes both terms on the right with factorials: <span class="chem">n!/(n - r)! + r × n!/(n - r + 1)!</span>.',
      'M1: Uses the common denominator <span class="chem">(n - r + 1)!</span>, using <span class="chem">(n - r + 1)! = (n - r + 1)(n - r)!</span>.',
      'A1: Simplifies the numerator to <span class="chem">n!(n + 1)</span>.',
      'A1: Writes <span class="chem">(n + 1)!/(n + 1 - r)!</span> and identifies it as the left-hand side. AG: the identity; the given line itself earns no mark.',
      'R1: Splits the arrangements into those that do not contain X, counted by <sup><i>n</i></sup>P<sub><i>r</i></sub>.',
      'R1: Explains that those containing X have <span class="chem">r</span> positions for X and <sup><i>n</i></sup>P<sub><i>r</i>−1</sub> ways to fill the rest.'
    ],
    hints: [
      'Decode: (a) is pure factorial algebra: write every term as a fraction of factorials and put them over one denominator. (b) asks for a counting argument: split the arrangements into two cases.',
      'The common denominator is <span class="chem">(n - r + 1)!</span>, because <span class="chem">(n - r + 1)! = (n - r + 1) × (n - r)!</span>.',
      'In (b), the two cases are “X is not used” and “X is used”.'
    ],
    solution: '<p><b>Decode:</b> “Prove” = algebra with factorials; “explain” = a two-case counting argument.</p><div class="worked__math">RHS = <span class="frac"><span><i>n</i>!(<i>n</i> − <i>r</i> + 1 + <i>r</i>)</span><span>(<i>n</i> − <i>r</i> + 1)!</span></span> = <span class="frac"><span>(<i>n</i> + 1)!</span><span>(<i>n</i> + 1 − <i>r</i>)!</span></span> = LHS</div>'
  },
  {
    id: 't1-3-q053',
    topic: 't1-3', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.11',
    stem: '<p>A puzzle setter wants the expression <span class="chem">(ax + 7) / ((x - 1)(x + 2))</span>, where <span class="chem">a</span> is a constant, to split into partial fractions <span class="chem">A / (x - 1) + B / (x + 2)</span> whose two numerators are equal. Find the value of <span class="chem">a</span>.</p>',
    answer: 14,
    tolerance: { abs: 0.01 },
    hints: [
      'Decode: the unknown is <span class="chem">a</span>, not <span class="chem">A</span> or <span class="chem">B</span>. Find <span class="chem">A</span> and <span class="chem">B</span> in terms of <span class="chem">a</span>, then impose the hidden condition <span class="chem">A = B</span>.',
      '<span class="chem">ax + 7 ≡ A(x + 2) + B(x - 1)</span>. Put <span class="chem">x = 1</span> and <span class="chem">x = -2</span>.',
      'You should get <span class="chem">3A = a + 7</span> and <span class="chem">3B = 2a - 7</span>.'
    ],
    solution: '<p><b>Decode:</b> express <i>A</i> and <i>B</i> in terms of <i>a</i>, then set <i>A</i> = <i>B</i>.</p><div class="worked__math"><i>ax</i> + 7 ≡ <i>A</i>(<i>x</i> + 2) + <i>B</i>(<i>x</i> − 1)</div><div class="worked__math"><i>x</i> = 1: 3<i>A</i> = <i>a</i> + 7;   <i>x</i> = −2: −3<i>B</i> = −2<i>a</i> + 7 ⇒ 3<i>B</i> = 2<i>a</i> − 7</div><div class="worked__math"><i>A</i> = <i>B</i> ⇒ <i>a</i> + 7 = 2<i>a</i> − 7 ⇒ <b><i>a</i> = 14</b>   (then <i>A</i> = <i>B</i> = 7)</div>'
  },
  {
    id: 't1-3-q054',
    topic: 't1-3', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10',
    stem: '<p>When <span class="chem">(1 + ax)^n</span>, where <span class="chem">a</span> is a constant and <span class="chem">n</span> ∈ ℚ, <span class="chem">n != 0</span>, is expanded in ascending powers of <span class="chem">x</span>, the first three terms are <span class="chem">1 - 6x + 27x^2</span>. Find the coefficient of <span class="chem">x^3</span>.</p>',
    answer: -108,
    tolerance: { abs: 0.01 },
    hints: [
      'Decode: there are two unknowns, <span class="chem">a</span> and <span class="chem">n</span>, and two pieces of information (the <span class="chem">x</span> and <span class="chem">x^2</span> coefficients). Find both, then build the <span class="chem">x^3</span> term.',
      '<span class="chem">na = -6</span> and <span class="chem">n(n - 1)a^2 / 2 = 27</span>. Divide the second by the square of the first to remove <span class="chem">a</span>.',
      '<span class="chem">(n - 1)/n = 54/36</span> gives <span class="chem">n = -2</span>, so <span class="chem">a = 3</span>.'
    ],
    solution: '<p><b>Decode:</b> two equations for two unknowns (<i>n</i>, <i>a</i>), then a third coefficient.</p><div class="worked__math"><i>na</i> = −6,   <span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span><i>a</i><sup>2</sup> = 27 ⇒ <i>n</i>(<i>n</i> − 1)<i>a</i><sup>2</sup> = 54</div><div class="worked__math">Divide by <i>n</i><sup>2</sup><i>a</i><sup>2</sup> = 36:  <span class="frac"><span><i>n</i> − 1</span><span><i>n</i></span></span> = <span class="frac"><span>3</span><span>2</span></span> ⇒ <i>n</i> = −2, <i>a</i> = 3</div><div class="worked__math">Coefficient of <i>x</i><sup>3</sup> = <span class="frac"><span>(−2)(−3)(−4)</span><span>3!</span></span> × 3<sup>3</sup> = −4 × 27 = <b>−108</b></div>'
  },
  {
    id: 't1-3-q055',
    topic: 't1-3', level: 'ahl', tier: 'challenge', type: 'short', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10',
    stem: '<p>(a) Show that <span class="chem">sqrt(2) = (7/5)(1 - 1/50)^{-1/2}</span>. <strong>[2 marks]</strong><br>(b) Hence, using the first three terms of the expansion of <span class="chem">(1 - x)^{-1/2}</span>, find an approximation for <span class="chem">sqrt(2)</span>, giving your answer to 5 decimal places. <strong>[4 marks]</strong></p>',
    answer: '<div class="worked__math">(a)  (1 − <span class="frac"><span>1</span><span>50</span></span>)<sup>−1/2</sup> = (<span class="frac"><span>49</span><span>50</span></span>)<sup>−1/2</sup> = √(<span class="frac"><span>50</span><span>49</span></span>) = <span class="frac"><span>5√2</span><span>7</span></span>, so <span class="frac"><span>7</span><span>5</span></span>(1 − <span class="frac"><span>1</span><span>50</span></span>)<sup>−1/2</sup> = √2</div><div class="worked__math">(b)  (1 − <i>x</i>)<sup>−1/2</sup> ≈ 1 + <span class="frac"><span>1</span><span>2</span></span><i>x</i> + <span class="frac"><span>3</span><span>8</span></span><i>x</i><sup>2</sup>;  <i>x</i> = 0.02: 1 + 0.01 + 0.00015 = 1.01015;  √2 ≈ 1.4 × 1.01015 = <b>1.41421</b></div>',
    markscheme: [
      'M1: Writes <span class="chem">1 - 1/50 = 49/50</span> and <span class="chem">(49/50)^{-1/2} = sqrt(50)/7</span>.',
      'A1: <span class="chem">sqrt(50) = 5sqrt(2)</span>, so <span class="chem">(7/5) × 5sqrt(2)/7 = sqrt(2)</span>. AG: the given result; the given line itself earns no mark.',
      'M1: Uses <span class="chem">n = -1/2</span> with <span class="chem">u = -x</span>.',
      'A1: <span class="chem">1 + x/2 + 3x^2/8</span>.',
      'M1: Substitutes <span class="chem">x = 1/50 = 0.02</span> and multiplies by <span class="chem">7/5</span>.',
      'A1: 1.41421.'
    ],
    hints: [
      'Decode: (a) is surd manipulation; (b) asks why the strange-looking 1/50 is used: it is small, so the series with <span class="chem">x = 1/50</span> converges fast and three terms are enough.',
      'For (a), <span class="chem">(49/50)^{-1/2} = (50/49)^{1/2} = sqrt(50)/7</span>.',
      'For (b), <span class="chem">(1 - x)^{-1/2} = 1 + (-1/2)(-x) + ((-1/2)(-3/2)/2!)(-x)^2 + ...</span>'
    ],
    solution: '<p><b>Decode:</b> rewrite √2 as a constant times (1 + small number)<sup><i>n</i></sup>, then use a short series.</p><div class="worked__math">√2 = (7/5)(1 − 1/50)<sup>−1/2</sup> ≈ 1.4(1 + 0.01 + 0.00015) = 1.4 × 1.01015 = <b>1.41421</b></div>'
  },

  /* ======================= PAPER 3 (HL INVESTIGATION) ===================== */
  {
    id: 't1-3-q056',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'short', marks: 16,
    paper: 'Paper 3 (HL Investigation)', syllabus: 'AHL 1.10',
    stem: '<p>This question investigates the coefficients in the expansion of <span class="chem">(1 - x)^{-k}</span>, where <span class="chem">k</span> is a positive integer and <span class="chem">|x| &lt; 1</span>.</p><p>(a) Write down the expansion of <span class="chem">(1 - x)^{-1}</span> up to and including the term in <span class="chem">x^4</span>. <strong>[1 mark]</strong><br>(b) Find the expansions of <span class="chem">(1 - x)^{-2}</span> and <span class="chem">(1 - x)^{-3}</span>, each up to and including the term in <span class="chem">x^4</span>. <strong>[4 marks]</strong><br>(c) By comparing your coefficients with the entries of Pascal’s triangle, conjecture an expression, in the form <sup><i>p</i></sup>C<sub><i>q</i></sub>, for the coefficient of <span class="chem">x^r</span> in <span class="chem">(1 - x)^{-3}</span>. <strong>[2 marks]</strong><br>(d) Prove that the coefficient of <span class="chem">x^r</span> in <span class="chem">(1 - x)^{-k}</span> is <sup><i>k</i>+<i>r</i>−1</sup>C<sub><i>r</i></sub>. <strong>[4 marks]</strong><br>(e) Hence find the coefficient of <span class="chem">x^{10}</span> in <span class="chem">(1 - x)^{-4}</span>. <strong>[2 marks]</strong><br>(f) Use your GDC to find the least value of <span class="chem">r</span> for which the coefficient of <span class="chem">x^r</span> in <span class="chem">(1 - x)^{-4}</span> exceeds 10 000. <strong>[3 marks]</strong></p>',
    answer: '<div class="worked__math">(a)  1 + <i>x</i> + <i>x</i><sup>2</sup> + <i>x</i><sup>3</sup> + <i>x</i><sup>4</sup></div><div class="worked__math">(b)  (1 − <i>x</i>)<sup>−2</sup> = 1 + 2<i>x</i> + 3<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> + 5<i>x</i><sup>4</sup>;   (1 − <i>x</i>)<sup>−3</sup> = 1 + 3<i>x</i> + 6<i>x</i><sup>2</sup> + 10<i>x</i><sup>3</sup> + 15<i>x</i><sup>4</sup></div><div class="worked__math">(c)  1, 3, 6, 10, 15 are <sup>2</sup>C<sub>0</sub>, <sup>3</sup>C<sub>1</sub>, <sup>4</sup>C<sub>2</sub>, …: coefficient of <i>x</i><sup><i>r</i></sup> = <sup><i>r</i>+2</sup>C<sub><i>r</i></sub> (= <sup><i>r</i>+2</sup>C<sub>2</sub>)</div><div class="worked__math">(d)  coefficient = <span class="frac"><span>(−<i>k</i>)(−<i>k</i> − 1)…(−<i>k</i> − <i>r</i> + 1)</span><span><i>r</i>!</span></span>(−1)<sup><i>r</i></sup> = <span class="frac"><span><i>k</i>(<i>k</i> + 1)…(<i>k</i> + <i>r</i> − 1)</span><span><i>r</i>!</span></span> = <span class="frac"><span>(<i>k</i> + <i>r</i> − 1)!</span><span><i>r</i>!(<i>k</i> − 1)!</span></span> = <sup><i>k</i>+<i>r</i>−1</sup>C<sub><i>r</i></sub></div><div class="worked__math">(e)  <sup>13</sup>C<sub>10</sub> = <b>286</b></div><div class="worked__math">(f)  need <sup><i>r</i>+3</sup>C<sub>3</sub> &gt; 10 000: <sup>40</sup>C<sub>3</sub> = 9880, <sup>41</sup>C<sub>3</sub> = 10 660 ⇒ <i>r</i> + 3 = 41 ⇒ <b><i>r</i> = 38</b></div>',
    markscheme: [
      'A1: <span class="chem">1 + x + x^2 + x^3 + x^4</span>.',
      'M1: Uses the extended binomial expansion with <span class="chem">n = -2</span> and <span class="chem">u = -x</span>.',
      'A1: <span class="chem">1 + 2x + 3x^2 + 4x^3 + 5x^4</span>.',
      'M1: Uses <span class="chem">n = -3</span> and <span class="chem">u = -x</span>.',
      'A1: <span class="chem">1 + 3x + 6x^2 + 10x^3 + 15x^4</span>.',
      'R1: Recognises 1, 3, 6, 10, 15 as a diagonal of Pascal’s triangle (<sup>2</sup>C<sub>0</sub>, <sup>3</sup>C<sub>1</sub>, <sup>4</sup>C<sub>2</sub>, …).',
      'A1: Conjecture: coefficient of <span class="chem">x^r</span> is <sup><i>r</i>+2</sup>C<sub><i>r</i></sub> (or <sup><i>r</i>+2</sup>C<sub>2</sub>).',
      'M1: Writes the general term with <span class="chem">n = -k</span>: <span class="chem">((-k)(-k - 1)...(-k - r + 1)/r!)(-x)^r</span>.',
      'A1: The <span class="chem">r</span> negative signs cancel with <span class="chem">(-1)^r</span>, giving <span class="chem">k(k + 1)...(k + r - 1)/r!</span>.',
      'M1: Multiplies numerator and denominator by <span class="chem">(k - 1)!</span>.',
      'A1: Obtains <span class="chem">(k + r - 1)!/(r!(k - 1)!)</span>. AG: <sup><i>k</i>+<i>r</i>−1</sup>C<sub><i>r</i></sub>; the given line itself earns no mark.',
      'M1: Uses <span class="chem">k = 4</span>, <span class="chem">r = 10</span>: <sup>13</sup>C<sub>10</sub>.',
      'A1: 286.',
      'M1: Sets up <sup><i>r</i>+3</sup>C<sub><i>r</i></sub> &gt; 10 000 (or <span class="chem">(r + 1)(r + 2)(r + 3)/6 &gt; 10000</span>).',
      'A1: GDC values either side: 9880 at <span class="chem">r = 37</span> and 10 660 at <span class="chem">r = 38</span>.',
      'A1: <span class="chem">r = 38</span>.'
    ],
    hints: [
      'In (b), write <span class="chem">(1 - x)^{-2}</span> as <span class="chem">(1 + u)^{-2}</span> with <span class="chem">u = -x</span>. Every term turns out positive.',
      'In (c), the numbers 1, 3, 6, 10, 15 are the triangular numbers. Where do they sit in Pascal’s triangle?',
      'In (d), there are <span class="chem">r</span> negative factors in <span class="chem">(-k)(-k - 1)…</span> and another <span class="chem">(-1)^r</span> from <span class="chem">(-x)^r</span>.',
      'In (f), with <span class="chem">k = 4</span> the coefficient is <span class="chem">(r + 3)C3</span>. Tabulate it on your GDC.'
    ],
    solution: '<div class="worked__math">(b) 1 + 2<i>x</i> + 3<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> + 5<i>x</i><sup>4</sup>;  1 + 3<i>x</i> + 6<i>x</i><sup>2</sup> + 10<i>x</i><sup>3</sup> + 15<i>x</i><sup>4</sup>   (c) <sup><i>r</i>+2</sup>C<sub><i>r</i></sub>   (e) 286   (f) <i>r</i> = 38</div>'
  },
  {
    id: 't1-3-q057',
    topic: 't1-3', level: 'ahl', tier: 'challenge', type: 'short', marks: 15,
    paper: 'Paper 3 (HL Investigation)', syllabus: 'AHL 1.11; SL 1.2',
    stem: '<p>This question uses partial fractions to investigate sums of the form <span class="chem">S_n = Σ_{r=1}^n 1/(r(r + k))</span>, where <span class="chem">k</span> is a positive integer. Start with <span class="chem">k = 2</span>.</p><p>(a) Express <span class="chem">1/(r(r + 2))</span> in partial fractions. <strong>[2 marks]</strong><br>(b) Use your GDC to find <span class="chem">S_1</span>, <span class="chem">S_2</span>, <span class="chem">S_3</span> and <span class="chem">S_4</span> for <span class="chem">k = 2</span>, as fractions. <strong>[2 marks]</strong><br>(c) Show that, for <span class="chem">k = 2</span>, <span class="chem">S_n = 3/4 - (2n + 3)/(2(n + 1)(n + 2))</span>. <strong>[4 marks]</strong><br>(d) Hence write down the value of <span class="chem">S_∞</span> for <span class="chem">k = 2</span>. <strong>[1 mark]</strong><br>(e) Find the least value of <span class="chem">n</span> for which <span class="chem">S_n</span> is within 0.001 of <span class="chem">S_∞</span>, for <span class="chem">k = 2</span>. <strong>[3 marks]</strong><br>(f) By considering the partial fractions of <span class="chem">1/(r(r + 3))</span>, find the exact value of <span class="chem">S_∞</span> for <span class="chem">k = 3</span>. <strong>[3 marks]</strong></p>',
    answer: '<div class="worked__math">(a)  <span class="frac"><span>1</span><span><i>r</i>(<i>r</i> + 2)</span></span> = <span class="frac"><span>1</span><span>2</span></span>(<span class="frac"><span>1</span><span><i>r</i></span></span> − <span class="frac"><span>1</span><span><i>r</i> + 2</span></span>)</div><div class="worked__math">(b)  <i>S</i><sub>1</sub> = <span class="frac"><span>1</span><span>3</span></span>,  <i>S</i><sub>2</sub> = <span class="frac"><span>11</span><span>24</span></span>,  <i>S</i><sub>3</sub> = <span class="frac"><span>21</span><span>40</span></span>,  <i>S</i><sub>4</sub> = <span class="frac"><span>17</span><span>30</span></span></div><div class="worked__math">(c)  the sum telescopes: everything cancels except 1 + <span class="frac"><span>1</span><span>2</span></span> at the start and −<span class="frac"><span>1</span><span><i>n</i> + 1</span></span> − <span class="frac"><span>1</span><span><i>n</i> + 2</span></span> at the end, so <i>S</i><sub><i>n</i></sub> = <span class="frac"><span>1</span><span>2</span></span>(<span class="frac"><span>3</span><span>2</span></span> − <span class="frac"><span>2<i>n</i> + 3</span><span>(<i>n</i> + 1)(<i>n</i> + 2)</span></span>)</div><div class="worked__math">(d)  <i>S</i><sub>∞</sub> = <span class="frac"><span>3</span><span>4</span></span></div><div class="worked__math">(e)  <span class="frac"><span>2<i>n</i> + 3</span><span>2(<i>n</i> + 1)(<i>n</i> + 2)</span></span> &lt; 0.001; GDC: <i>n</i> = 998 gives 0.0010005…, <i>n</i> = 999 gives 0.00099950… ⇒ <b><i>n</i> = 999</b></div><div class="worked__math">(f)  <span class="frac"><span>1</span><span><i>r</i>(<i>r</i> + 3)</span></span> = <span class="frac"><span>1</span><span>3</span></span>(<span class="frac"><span>1</span><span><i>r</i></span></span> − <span class="frac"><span>1</span><span><i>r</i> + 3</span></span>);  the terms 1, <span class="frac"><span>1</span><span>2</span></span>, <span class="frac"><span>1</span><span>3</span></span> survive: <i>S</i><sub>∞</sub> = <span class="frac"><span>1</span><span>3</span></span>(1 + <span class="frac"><span>1</span><span>2</span></span> + <span class="frac"><span>1</span><span>3</span></span>) = <b><span class="frac"><span>11</span><span>18</span></span></b></div>',
    markscheme: [
      'M1: Sets <span class="chem">1 = A(r + 2) + Br</span> (or cover-up).',
      'A1: <span class="chem">1/(2r) - 1/(2(r + 2))</span>.',
      'A1: Any two of <span class="chem">1/3, 11/24, 21/40, 17/30</span> correct.',
      'A1: All four correct.',
      'M1: Writes out the first few and last few terms of <span class="chem">(1/2)Σ(1/r - 1/(r + 2))</span>.',
      'R1: Identifies the surviving terms <span class="chem">1 + 1/2</span> and <span class="chem">-1/(n + 1) - 1/(n + 2)</span>.',
      'M1: Combines <span class="chem">1/(n + 1) + 1/(n + 2) = (2n + 3)/((n + 1)(n + 2))</span>.',
      'A1: Multiplies by <span class="chem">1/2</span>. AG: <span class="chem">S_n = 3/4 - (2n + 3)/(2(n + 1)(n + 2))</span>; the given line itself earns no mark.',
      'A1: <span class="chem">S_∞ = 3/4</span>.',
      'M1: Sets up <span class="chem">(2n + 3)/(2(n + 1)(n + 2)) &lt; 0.001</span>.',
      'A1: GDC values either side of 0.001 (at <span class="chem">n = 998</span> and <span class="chem">n = 999</span>).',
      'A1: <span class="chem">n = 999</span>.',
      'A1: <span class="chem">1/(r(r + 3)) = (1/3)(1/r - 1/(r + 3))</span>.',
      'R1: Explains that the first three positive terms <span class="chem">1, 1/2, 1/3</span> do not cancel and the remaining tail tends to 0.',
      'A1: <span class="chem">S_∞ = 11/18</span>.'
    ],
    hints: [
      'Decode: partial fractions turn each term into a difference, so most terms cancel (the sum “telescopes”). The investigation asks you to see which terms survive, and how that depends on <span class="chem">k</span>.',
      'For (a), <span class="chem">1 ≡ A(r + 2) + Br</span>; put <span class="chem">r = 0</span> and <span class="chem">r = -2</span>.',
      'For (c), list the brackets <span class="chem">(1 - 1/3), (1/2 - 1/4), (1/3 - 1/5), …</span>; the positive part of each bracket cancels a negative part two brackets earlier.',
      'For (e), <span class="chem">S_∞ - S_n = (2n + 3)/(2(n + 1)(n + 2))</span>; tabulate it on your GDC near <span class="chem">n = 1000</span>.'
    ],
    solution: '<p><b>Decode:</b> each step uses the partial-fraction difference so that a sum of <i>n</i> terms collapses to a few surviving terms.</p><div class="worked__math">(a) ½(1/<i>r</i> − 1/(<i>r</i> + 2))   (b) 1/3, 11/24, 21/40, 17/30   (d) 3/4   (e) <i>n</i> = 999   (f) 11/18</div>'
  },
  {
    id: 't1-3-q058',
    topic: 't1-3', level: 'ahl', tier: 'challenge', type: 'short', marks: 14,
    paper: 'Paper 3 (HL Investigation)', syllabus: 'AHL 1.10',
    stem: '<p>This question investigates how accurately the extended binomial theorem approximates square roots. Let <span class="chem">a</span> be a positive integer and <span class="chem">b</span> a real number.</p><p>(a) Show that <span class="chem">sqrt(a^2 + b) ≈ a + b/(2a) - b^2/(8a^3)</span>, using the first three terms of a binomial expansion. <strong>[3 marks]</strong><br>(b) State the condition on <span class="chem">b</span> for the full expansion to be valid. <strong>[1 mark]</strong><br>(c) Take <span class="chem">b = 1</span>. For <span class="chem">a = 4, 5, 6</span>, use (a) to approximate <span class="chem">sqrt(a^2 + 1)</span>, and use your GDC to find the error <span class="chem">E = sqrt(a^2 + 1) - (a + 1/(2a) - 1/(8a^3))</span> to 3 significant figures. <strong>[3 marks]</strong><br>(d) For each value of <span class="chem">a</span> in (c), calculate <span class="chem">a^5 E</span>. Hence suggest an approximate formula for <span class="chem">E</span> in terms of <span class="chem">a</span>. <strong>[2 marks]</strong><br>(e) By considering the next term of the expansion, justify your formula and generalise it to give an approximation for the error in terms of <span class="chem">a</span> and <span class="chem">b</span>. <strong>[3 marks]</strong><br>(f) Use your GDC to find the least value of <span class="chem">a</span> for which the approximation in (a) of <span class="chem">sqrt(a^2 + 1)</span> has an error less than <span class="chem">10^{-8}</span>. <strong>[2 marks]</strong></p>',
    answer: '<div class="worked__math">(a)  √(<i>a</i><sup>2</sup> + <i>b</i>) = <i>a</i>(1 + <span class="frac"><span><i>b</i></span><span><i>a</i><sup>2</sup></span></span>)<sup>1/2</sup> ≈ <i>a</i>(1 + <span class="frac"><span><i>b</i></span><span>2<i>a</i><sup>2</sup></span></span> − <span class="frac"><span><i>b</i><sup>2</sup></span><span>8<i>a</i><sup>4</sup></span></span>) = <i>a</i> + <span class="frac"><span><i>b</i></span><span>2<i>a</i></span></span> − <span class="frac"><span><i>b</i><sup>2</sup></span><span>8<i>a</i><sup>3</sup></span></span></div><div class="worked__math">(b)  |<i>b</i>/<i>a</i><sup>2</sup>| &lt; 1 ⇔ |<i>b</i>| &lt; <i>a</i><sup>2</sup></div><div class="worked__math">(c)  <i>a</i> = 4: 4.123046875, <i>E</i> = 5.88 × 10<sup>−5</sup>;  <i>a</i> = 5: 5.099, <i>E</i> = 1.95 × 10<sup>−5</sup>;  <i>a</i> = 6: 6.0827546…, <i>E</i> = 7.90 × 10<sup>−6</sup></div><div class="worked__math">(d)  <i>a</i><sup>5</sup><i>E</i> ≈ 0.0602, 0.0610, 0.0614: close to <span class="frac"><span>1</span><span>16</span></span> = 0.0625, so <i>E</i> ≈ <span class="frac"><span>1</span><span>16<i>a</i><sup>5</sup></span></span></div><div class="worked__math">(e)  next term: <i>a</i> × <span class="frac"><span>(1/2)(−1/2)(−3/2)</span><span>3!</span></span>(<span class="frac"><span><i>b</i></span><span><i>a</i><sup>2</sup></span></span>)<sup>3</sup> = <span class="frac"><span><i>b</i><sup>3</sup></span><span>16<i>a</i><sup>5</sup></span></span>; the later terms are much smaller, so <i>E</i> ≈ <span class="frac"><span><i>b</i><sup>3</sup></span><span>16<i>a</i><sup>5</sup></span></span></div><div class="worked__math">(f)  GDC: <i>a</i> = 22 gives <i>E</i> = 1.21 × 10<sup>−8</sup>, <i>a</i> = 23 gives <i>E</i> = 9.70 × 10<sup>−9</sup> ⇒ <b><i>a</i> = 23</b></div>',
    markscheme: [
      'M1: Takes out the factor <span class="chem">a</span>: <span class="chem">sqrt(a^2 + b) = a(1 + b/a^2)^{1/2}</span>.',
      'M1: Uses <span class="chem">n = 1/2</span> with <span class="chem">u = b/a^2</span>.',
      'A1: Expands and multiplies by <span class="chem">a</span>. AG: <span class="chem">a + b/(2a) - b^2/(8a^3)</span>; the given line itself earns no mark.',
      'A1: <span class="chem">|b| &lt; a^2</span>.',
      'A1: Approximations 4.123046875, 5.099 and 6.0827546…',
      'A1: Any two errors correct.',
      'A1: All three errors correct: <span class="chem">5.88 × 10^{-5}</span>, <span class="chem">1.95 × 10^{-5}</span>, <span class="chem">7.90 × 10^{-6}</span>.',
      'A1: <span class="chem">a^5 E</span> values 0.0602, 0.0610, 0.0614.',
      'R1: Suggests <span class="chem">E ≈ 1/(16a^5)</span> (or <span class="chem">E ≈ 0.06/a^5</span>).',
      'M1: Finds the coefficient of the <span class="chem">u^3</span> term: <span class="chem">(1/2)(-1/2)(-3/2)/3! = 1/16</span>.',
      'A1: Next term <span class="chem">b^3/(16a^5)</span>.',
      'R1: States that the error is approximately this next term because the later terms are much smaller, so <span class="chem">E ≈ b^3/(16a^5)</span>.',
      'M1: Uses the GDC error values (or <span class="chem">1/(16a^5) &lt; 10^{-8}</span>) for consecutive values of <span class="chem">a</span>.',
      'A1: <span class="chem">a = 23</span>.'
    ],
    hints: [
      'Decode: the investigation compares a three-term binomial approximation with the GDC value, looks for a pattern in the errors, and then explains the pattern with the fourth term of the series.',
      'In (a), write <span class="chem">a^2 + b = a^2(1 + b/a^2)</span>.',
      'In (c) and (d), keep full GDC precision: the errors are tiny.',
      'In (e), the <span class="chem">u^3</span> coefficient of <span class="chem">(1 + u)^{1/2}</span> is <span class="chem">(1/2)(-1/2)(-3/2)/3!</span>.'
    ],
    solution: '<div class="worked__math">(a) <i>a</i> + <i>b</i>/(2<i>a</i>) − <i>b</i><sup>2</sup>/(8<i>a</i><sup>3</sup>)   (b) |<i>b</i>| &lt; <i>a</i><sup>2</sup>   (d) <i>E</i> ≈ 1/(16<i>a</i><sup>5</sup>)   (e) <i>E</i> ≈ <i>b</i><sup>3</sup>/(16<i>a</i><sup>5</sup>)   (f) <i>a</i> = 23</div>'
  },
  {
    id: 't1-3-q059',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'short', marks: 14,
    paper: 'Paper 3 (HL Investigation)', syllabus: 'AHL 1.10; SL 4.5',
    stem: '<p>This question investigates the number of ways to choose <span class="chem">k</span> seats from a row of <span class="chem">n</span> seats so that no two chosen seats are next to each other. Call this number <span class="chem">N(n, k)</span>.</p><p>(a) By listing, show that <span class="chem">N(5, 2) = 6</span>. <strong>[2 marks]</strong><br>(b) Find <span class="chem">N(4, 2)</span>, <span class="chem">N(6, 2)</span> and <span class="chem">N(7, 2)</span>, and conjecture a formula for <span class="chem">N(n, 2)</span> in the form <sup><i>p</i></sup>C<sub>2</sub>. <strong>[2 marks]</strong><br>(c) By thinking of the <span class="chem">n - k</span> seats that are <strong>not</strong> chosen, explain why <span class="chem">N(n, k)</span> = <sup><i>n</i>−<i>k</i>+1</sup>C<sub><i>k</i></sub>. <strong>[3 marks]</strong><br>(d) Hence find <span class="chem">N(20, 4)</span>. <strong>[1 mark]</strong><br>(e) Four friends sit down at random in 4 of the 20 seats of an empty row. Find the probability that no two of them sit next to each other. <strong>[3 marks]</strong><br>(f) Four people sit at random in a row of <span class="chem">n</span> empty seats. Use your GDC to find the least value of <span class="chem">n</span> for which the probability that no two of them are next to each other exceeds 0.9. <strong>[3 marks]</strong></p>',
    answer: '<div class="worked__math">(a)  seats 1–5: {1,3}, {1,4}, {1,5}, {2,4}, {2,5}, {3,5}: 6 ways</div><div class="worked__math">(b)  <i>N</i>(4, 2) = 3, <i>N</i>(6, 2) = 10, <i>N</i>(7, 2) = 15: these are <sup>3</sup>C<sub>2</sub>, <sup>5</sup>C<sub>2</sub>, <sup>6</sup>C<sub>2</sub>, so <i>N</i>(<i>n</i>, 2) = <sup><i>n</i>−1</sup>C<sub>2</sub></div><div class="worked__math">(c)  the <i>n</i> − <i>k</i> unchosen seats form a row with <i>n</i> − <i>k</i> + 1 gaps (including both ends); putting at most one chosen seat in each gap keeps chosen seats apart, and every valid choice arises once, so <i>N</i>(<i>n</i>, <i>k</i>) = <sup><i>n</i>−<i>k</i>+1</sup>C<sub><i>k</i></sub></div><div class="worked__math">(d)  <sup>17</sup>C<sub>4</sub> = <b>2380</b></div><div class="worked__math">(e)  P = <span class="frac"><span>2380</span><span><sup>20</sup>C<sub>4</sub></span></span> = <span class="frac"><span>2380</span><span>4845</span></span> ≈ <b>0.491</b> (the order of the friends cancels: 4! × 2380 / <sup>20</sup>P<sub>4</sub>)</div><div class="worked__math">(f)  <span class="frac"><span><sup><i>n</i>−3</sup>C<sub>4</sub></span><span><sup><i>n</i></sup>C<sub>4</sub></span></span> &gt; 0.9; GDC: 0.8992… at <i>n</i> = 116, 0.9000… at <i>n</i> = 117 ⇒ <b><i>n</i> = 117</b></div>',
    markscheme: [
      'M1: Systematic list of pairs from seats 1 to 5.',
      'A1: The six pairs {1,3}, {1,4}, {1,5}, {2,4}, {2,5}, {3,5}. AG: <span class="chem">N(5, 2) = 6</span>.',
      'A1: 3, 10, 15.',
      'A1: Conjecture <sup><i>n</i>−1</sup>C<sub>2</sub>.',
      'R1: The <span class="chem">n - k</span> unchosen seats create <span class="chem">n - k + 1</span> gaps, including both ends.',
      'R1: Chosen seats are non-adjacent exactly when each gap holds at most one chosen seat.',
      'R1: So a valid choice corresponds to choosing <span class="chem">k</span> of the <span class="chem">n - k + 1</span> gaps, giving <sup><i>n</i>−<i>k</i>+1</sup>C<sub><i>k</i></sub>.',
      'A1: 2380.',
      'M1: Uses <sup>20</sup>C<sub>4</sub> = 4845 as the number of equally likely sets of seats (or <sup>20</sup>P<sub>4</sub> with 4! × 2380).',
      'A1: <span class="chem">2380/4845</span>.',
      'A1: 0.491.',
      'M1: Sets up <sup><i>n</i>−3</sup>C<sub>4</sub> / <sup><i>n</i></sup>C<sub>4</sub> &gt; 0.9.',
      'A1: GDC values either side of 0.9 (at <span class="chem">n = 116</span> and <span class="chem">n = 117</span>).',
      'A1: <span class="chem">n = 117</span>.'
    ],
    hints: [
      'In (a), list the pairs in order: {1,3}, {1,4}, … and stop when you reach {3,5}.',
      'In (c), this is the gap method: draw the unchosen seats as <code>O _ O _ O</code> and place the chosen seats into the gaps.',
      'In (e), the seats chosen are an unordered set of 4 seats, all <span class="chem">20C4</span> sets equally likely.',
      'In (f), tabulate <span class="chem">y = (x - 3)C4 / xC4</span> on your GDC; it increases with <span class="chem">x</span>.'
    ],
    solution: '<div class="worked__math">(b) <i>N</i>(<i>n</i>, 2) = <sup><i>n</i>−1</sup>C<sub>2</sub>   (d) 2380   (e) 2380/4845 ≈ 0.491   (f) <i>n</i> = 117</div>'
  }
]);
