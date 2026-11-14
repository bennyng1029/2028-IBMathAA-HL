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
    stem: '<p>Given that <span class="chem">(7x - 1) / ((x - 1)(x + 2)) = A / (x - 1) + B / (x + 2)</span>, find the value of <span class="chem">A</span>.</p>',
    answer: 2,
    tolerance: { abs: 0.01 },
    hints: [
      'Multiply both sides by <span class="chem">(x - 1)(x + 2)</span> to get <span class="chem">7x - 1 = A(x + 2) + B(x - 1)</span>.',
      'Substitute <span class="chem">x = 1</span> so the <span class="chem">B</span> term becomes zero.'
    ],
    solution: '<div class="worked__math">7<i>x</i> − 1 ≡ <i>A</i>(<i>x</i> + 2) + <i>B</i>(<i>x</i> − 1)</div><div class="worked__math">Set <i>x</i> = 1:  6 = 3<i>A</i>  ⇒  <b><i>A</i> = 2</b></div>'
  },
  {
    id: 't1-3-q004',
    topic: 't1-3', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 3,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.11',
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
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.11',
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
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'mcq', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10',
    stem: '<p>Seven distinct books—4 mathematics books and 3 physics books—are arranged on a shelf. In how many ways can they be arranged if no two physics books are next to each other?</p>',
    options: [
      '1440',
      '4320',
      '240',
      '144'
    ],
    answer: 0,
    misconception: {
      1: '4320 comes from <span class="chem">7! - 5!3!</span>, which only subtracts arrangements where all 3 physics books are together, leaving cases where 2 physics books are adjacent.',
      2: '240 uses <span class="chem">4! × 5C3</span> instead of <span class="chem">4! × 5P3</span>; the 3 physics books are distinct so their order in the gaps matters.',
      3: '144 is <span class="chem">4! × 3!</span>, which forgets to choose 3 gaps out of the 5 available gaps.'
    },
    hints: [
      'Use the Gap method: arrange the 4 mathematics books first in <span class="chem">4!</span> ways.',
      'There are 5 gaps around the 4 math books. Place the 3 distinct physics books in <span class="chem">5P3</span> ways.'
    ],
    solution: '<div class="worked__math">4! × <sup>5</sup>P<sub>3</sub> = 24 × 60 = <b>1440</b></div>'
  },
  {
    id: 't1-3-q010',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.11',
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
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.11',
    stem: '<p>Given that <span class="chem">(x^2 + 6x - 1) / ((x - 1)(x + 2)) = A + B / (x - 1) + C / (x + 2)</span>, find the value of <span class="chem">A + B + C</span>.</p>',
    answer: 6,
    tolerance: { abs: 0.01 },
    hints: [
      'Clear the denominator: <span class="chem">x^2 + 6x - 1 = A(x - 1)(x + 2) + B(x + 2) + C(x - 1)</span>.',
      'Match <span class="chem">x^2</span> coefficients for <span class="chem">A</span>, then substitute <span class="chem">x = 1</span> and <span class="chem">x = -2</span> for <span class="chem">B</span> and <span class="chem">C</span>.'
    ],
    solution: '<div class="worked__math"><i>A</i> = 1;  <i>x</i> = 1 ⇒ 6 = 3<i>B</i> ⇒ <i>B</i> = 2;  <i>x</i> = −2 ⇒ −9 = −3<i>C</i> ⇒ <i>C</i> = 3</div><div class="worked__math"><i>A</i> + <i>B</i> + <i>C</i> = 1 + 2 + 3 = <b>6</b></div>'
  },
  {
    id: 't1-3-q012',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'mcq', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.11',
    stem: '<p>Find the coefficient of <span class="chem">x^2</span> in the expansion of <span class="chem">(2 + x) / ((1 - x)(1 + 2x))</span> in ascending powers of <span class="chem">x</span>.</p>',
    options: [
      '5',
      '−3',
      '3',
      '1'
    ],
    answer: 0,
    misconception: {
      1: '−3 comes from writing <span class="chem">(1 + 2x)^{-1} = 1 - 2x - 4x^2 + ...</span> instead of <span class="chem">1 - 2x + 4x^2 - ...</span>.',
      2: '3 comes from forgetting to square the 2 in <span class="chem">(-2x)^2</span> or making a sign error on <span class="chem">B</span>.',
      3: '1 comes from forgetting the factor of 2 in <span class="chem">2x</span> when expanding <span class="chem">(1 + 2x)^{-1}</span>.'
    },
    hints: [
      'Decompose into partial fractions first: <span class="chem">A / (1 - x) + B / (1 + 2x)</span>.',
      'You should get <span class="chem">A = 1</span> and <span class="chem">B = 1</span>. Now expand <span class="chem">(1 - x)^{-1} + (1 + 2x)^{-1}</span> up to <span class="chem">x^2</span>.'
    ],
    solution: '<div class="worked__math"><span class="frac"><span>2 + <i>x</i></span><span>(1 − <i>x</i>)(1 + 2<i>x</i>)</span></span> = (1 − <i>x</i>)<sup>−1</sup> + (1 + 2<i>x</i>)<sup>−1</sup> = (1 + <i>x</i> + <i>x</i><sup>2</sup> + …) + (1 − 2<i>x</i> + 4<i>x</i><sup>2</sup> − …) = 2 − <i>x</i> + <b>5</b><i>x</i><sup>2</sup> + …</div>'
  },
  {
    id: 't1-3-q013',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'short', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.11',
    stem: '<p>(a) Express <span class="chem">f(x) = (5x + 1) / ((1 - x)(2 + x))</span> in partial fractions. <strong>[3 marks]</strong><br>(b) Hence find the first three terms in the expansion of <span class="chem">f(x)</span> in ascending powers of <span class="chem">x</span>, and state the set of values of <span class="chem">x</span> for which the expansion is valid. <strong>[3 marks]</strong></p>',
    markscheme: [
      'M1: Set <span class="chem">5x + 1 = A(2 + x) + B(1 - x)</span>.',
      'A1: Obtain <span class="chem">A = 2</span> and <span class="chem">B = -3</span>, giving <span class="chem">2/(1 - x) - 3/(2 + x)</span>.',
      'M1: Expand <span class="chem">2(1 - x)^{-1} = 2 + 2x + 2x^2 + ...</span> and <span class="chem">-(3/2)(1 + x/2)^{-1} = -3/2 + (3/4)x - (3/8)x^2 + ...</span>.',
      'A1: Combine like terms to get <span class="chem">1/2 + (11/4)x + (13/8)x^2</span>.',
      'R1: State validity <span class="chem">|x| &lt; 1</span> (intersection of <span class="chem">|x| &lt; 1</span> and <span class="chem">|x| &lt; 2</span>).'
    ],
    hints: [
      'Use <span class="chem">x = 1</span> and <span class="chem">x = -2</span> to find <span class="chem">A</span> and <span class="chem">B</span>.',
      'Factor out <span class="chem">2^{-1} = 1/2</span> from <span class="chem">(2 + x)^{-1}</span> before expanding.'
    ],
    solution: '<div class="worked__math">(a)  <i>f</i>(<i>x</i>) = <span class="frac"><span>2</span><span>1 − <i>x</i></span></span> − <span class="frac"><span>3</span><span>2 + <i>x</i></span></span></div><div class="worked__math">(b)  <i>f</i>(<i>x</i>) ≈ <b><span class="frac"><span>1</span><span>2</span></span> + <span class="frac"><span>11</span><span>4</span></span><i>x</i> + <span class="frac"><span>13</span><span>8</span></span><i>x</i><sup>2</sup></b>, valid for <b>|<i>x</i>| &lt; 1</b></div>'
  },
  {
    id: 't1-3-q014',
    topic: 't1-3', level: 'ahl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 1.11',
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
      'The thousands digit must be in <span class="chem">{3, 4, 5, 6}</span> and the units digit must be in <span class="chem">{2, 4, 6}</span>. Because 4 and 6 appear in both sets, split into two cases!',
      'Case 1: thousands digit is odd (<span class="chem">{3, 5}</span>) → <span class="chem">2 × 3 × 4 × 3</span>. Case 2: thousands digit is even (<span class="chem">{4, 6}</span>) → <span class="chem">2 × 2 × 4 × 3</span>.'
    ],
    solution: '<div class="worked__math">Case 1 (thousands ∈ {3, 5}):  2 × 4 × 3 × 3 = 72</div><div class="worked__math">Case 2 (thousands ∈ {4, 6}):  2 × 4 × 3 × 2 = 48</div><div class="worked__math">Total = 72 + 48 = <b>120</b></div>'
  },
  {
    id: 't1-3-q016',
    topic: 't1-3', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.11',
    stem: '<p>Find the coefficient of <span class="chem">x^2</span> in the binomial expansion of <span class="chem">(1 + 2x) / sqrt(1 - 3x)</span>.</p>',
    answer: 6.375,
    answerDisplay: '51/8 (or 6.375)',
    tolerance: { abs: 0.005 },
    hints: [
      'Rewrite as <span class="chem">(1 + 2x)(1 - 3x)^{-1/2}</span> and expand <span class="chem">(1 - 3x)^{-1/2}</span> up to <span class="chem">x^2</span>.',
      'Multiply <span class="chem">(1 + 2x)</span> by <span class="chem">(1 + (3/2)x + (27/8)x^2 + ...)</span> and collect the <span class="chem">x^2</span> terms.'
    ],
    solution: '<div class="worked__math">(1 − 3<i>x</i>)<sup>−1/2</sup> = 1 + <span class="frac"><span>3</span><span>2</span></span><i>x</i> + <span class="frac"><span>27</span><span>8</span></span><i>x</i><sup>2</sup> + …</div><div class="worked__math">Coeff of <i>x</i><sup>2</sup> in (1 + 2<i>x</i>)(1 + <span class="frac"><span>3</span><span>2</span></span><i>x</i> + <span class="frac"><span>27</span><span>8</span></span><i>x</i><sup>2</sup>) = <span class="frac"><span>27</span><span>8</span></span> + 2(<span class="frac"><span>3</span><span>2</span></span>) = <b><span class="frac"><span>51</span><span>8</span></span></b> (6.375)</div>'
  },
  {
    id: 't1-3-q017',
    topic: 't1-3', level: 'ahl', tier: 'challenge', type: 'short', marks: 7,
    paper: 'Paper 3 (Investigation)', syllabus: 'AHL 1.10 & 1.11',
    stem: '<p>(a) Express <span class="chem">1 / (r(r + 1))</span> in partial fractions, and hence find a simplified expression for <span class="chem">sum_{r=1}^n 1 / (r(r + 1))</span>. <strong>[3 marks]</strong><br>(b) Using the first three terms of the binomial expansion of <span class="chem">(1 + x)^{1/2}</span>, estimate <span class="chem">sqrt(0.98)</span> to 5 decimal places. <strong>[4 marks]</strong></p>',
    markscheme: [
      'M1 A1: <span class="chem">1/(r(r+1)) = 1/r - 1/(r+1)</span>.',
      'A1: Telescoping sum collapses to <span class="chem">1 - 1/(n+1) = n / (n + 1)</span>.',
      'M1 A1: <span class="chem">(1 + x)^{1/2} = 1 + (1/2)x - (1/8)x^2 + ...</span>.',
      'M1 A1: Substitute <span class="chem">x = -0.02</span> to get <span class="chem">1 - 0.01 - 0.00005 = 0.98995</span>.'
    ],
    hints: [
      'In (a), write out the first few terms of <span class="chem">(1/r - 1/(r+1))</span> to see the telescoping cancellation.',
      'In (b), write <span class="chem">0.98 = 1 - 0.02</span> so <span class="chem">x = -0.02</span>.'
    ],
    solution: '<div class="worked__math">(a)  <span class="frac"><span>1</span><span><i>r</i></span></span> − <span class="frac"><span>1</span><span><i>r</i> + 1</span></span>  ⇒  ∑ = 1 − <span class="frac"><span>1</span><span><i>n</i> + 1</span></span> = <b><span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span></b></div><div class="worked__math">(b)  (1 − 0.02)<sup>1/2</sup> ≈ 1 + <span class="frac"><span>1</span><span>2</span></span>(−0.02) − <span class="frac"><span>1</span><span>8</span></span>(−0.02)<sup>2</sup> = 1 − 0.01 − 0.00005 = <b>0.98995</b></div>'
  },
  {
    id: 't1-3-q018',
    topic: 't1-3', level: 'ahl', tier: 'challenge', type: 'mcq', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 1.10',
    stem: '<p>Four couples (8 people) sit in a row of 8 chairs. In how many ways can they be seated if each couple must sit together?</p>',
    options: [
      '384',
      '48',
      '24',
      '1152'
    ],
    answer: 0,
    misconception: {
      1: '48 is <span class="chem">4! × 2</span>, which only multiplies by 2 once instead of <span class="chem">2!</span> for each of the 4 couples (<span class="chem">2^4</span>).',
      2: '24 is <span class="chem">4!</span>, which arranges the 4 couples but forgets that the two people inside each couple can swap seats.',
      3: '1152 is <span class="chem">4! × 4! × 2</span>, mixing up the internal swap factor.'
    },
    hints: [
      'Glue each of the 4 couples into a single block. How many ways can you arrange the 4 blocks?',
      'Multiply by <span class="chem">2!</span> for each of the 4 couples: <span class="chem">4! × (2!)^4</span>.'
    ],
    solution: '<div class="worked__math">4! × (2!)<sup>4</sup> = 24 × 16 = <b>384</b></div>'
  }
]);
