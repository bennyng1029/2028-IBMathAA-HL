/* ==========================================================================
   Question bank: Topic 1.1 — Sequences, series and financial models
   All questions are original. Everything in t1-1 is SL core (SL+HL).
   Load order on a page: math.js, core.js, quiz.js, then this file.
   ========================================================================== */
S1.questions.register('t1-1', [

  /* ======================= FOUNDATION ==================================== */
  {
    id: 't1-1-q001',
    topic: 't1-1', level: 'sl', tier: 'foundation', type: 'mcq', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.1',
    stem: '<p>Let <span class="chem">A = 3.2 × 10^5</span> and <span class="chem">B = 8.0 × 10^{-3}</span>. Find the value of <span class="chem">A / B</span> in the form <span class="chem">a × 10^k</span>, where <span class="chem">1 &lt;= a &lt; 10</span> and <span class="chem">k</span> is an integer.</p>',
    options: [
      '<span class="chem">4.0 × 10^7</span>',
      '<span class="chem">0.4 × 10^8</span>',
      '<span class="chem">4.0 × 10^2</span>',
      '<span class="chem">4.0 × 10^8</span>'
    ],
    answer: 0,
    misconception: {
      1: 'In standard form <span class="chem">a × 10^k</span>, the coefficient must satisfy <span class="chem">1 &lt;= a &lt; 10</span>. Write <span class="chem">0.4 × 10^8</span> as <span class="chem">4.0 × 10^7</span>.',
      2: 'When dividing powers of 10, subtract the bottom exponent: <span class="chem">5 - (-3) = 8</span>, not <span class="chem">5 - 3 = 2</span>.',
      3: 'Since <span class="chem">3.2 / 8.0 = 0.4 = 4.0 × 10^{-1}</span>, the exponent decreases from 8 to 7, not 8.'
    },
    hints: [
      'Divide the coefficients and subtract the powers of 10 separately: <span class="chem">(3.2 / 8.0) × 10^{5 - (-3)}</span>.',
      'Adjust <span class="chem">0.4 × 10^8</span> so the leading number lies between 1 and 10.'
    ],
    solution: '<div class="worked__math"><i>A</i> / <i>B</i> = (3.2 / 8.0) × 10<sup>5 − (−3)</sup> = 0.4 × 10<sup>8</sup> = <b>4.0 × 10<sup>7</sup></b></div>'
  },
  {
    id: 't1-1-q002',
    topic: 't1-1', level: 'sl', tier: 'foundation', type: 'numeric', marks: 3,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.2',
    stem: '<p>In an arithmetic sequence, the fourth term is <span class="chem">u_4 = 19</span> and the tenth term is <span class="chem">u_{10} = 43</span>. Find the first term <span class="chem">u_1</span>.</p>',
    answer: 7,
    tolerance: { abs: 0.01 },
    hints: [
      'From <span class="chem">u_4</span> to <span class="chem">u_{10}</span> there are <span class="chem">10 - 4 = 6</span> steps of size <span class="chem">d</span>.',
      'Once you find <span class="chem">d</span>, use <span class="chem">u_4 = u_1 + 3d = 19</span> to solve for <span class="chem">u_1</span>.'
    ],
    solution: '<div class="worked__math"><i>u</i><sub>10</sub> − <i>u</i><sub>4</sub> = 6<i>d</i> = 43 − 19 = 24  ⇒  <i>d</i> = 4</div><div class="worked__math"><i>u</i><sub>1</sub> = <i>u</i><sub>4</sub> − 3<i>d</i> = 19 − 12 = <b>7</b></div>'
  },
  {
    id: 't1-1-q003',
    topic: 't1-1', level: 'sl', tier: 'foundation', type: 'mcq', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.2',
    stem: '<p>How many terms are in the sum <span class="chem">Σ_{k=4}^{19} (5k - 2)</span>, and what is the first term of this sum?</p>',
    options: [
      '15 terms, first term is 18',
      '16 terms, first term is 18',
      '16 terms, first term is 3',
      '19 terms, first term is 18'
    ],
    answer: 1,
    misconception: {
      0: 'Counting from <span class="chem">k = 4</span> to <span class="chem">k = 19</span> inclusive gives <span class="chem">19 - 4 + 1 = 16</span> terms, not <span class="chem">19 - 4 = 15</span>.',
      2: 'The lower limit of the sigma notation is <span class="chem">k = 4</span>, not <span class="chem">k = 1</span>. Substitute <span class="chem">k = 4</span> to get <span class="chem">5(4) - 2 = 18</span>.',
      3: 'The sum starts at <span class="chem">k = 4</span>, so the terms for <span class="chem">k = 1, 2, 3</span> are not included.'
    },
    hints: [
      'The number of integers from <span class="chem">a</span> to <span class="chem">b</span> inclusive is <span class="chem">b - a + 1</span>.',
      'Substitute the bottom index <span class="chem">k = 4</span> into <span class="chem">5k - 2</span> to find the first term.'
    ],
    solution: '<p>There are <span class="chem">19 - 4 + 1 = 16</span> terms. Substituting <span class="chem">k = 4</span> gives the first term <span class="chem">5(4) - 2 = 18</span>.</p>'
  },
  {
    id: 't1-1-q004',
    topic: 't1-1', level: 'sl', tier: 'foundation', type: 'numeric', marks: 3,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.8',
    stem: '<p>A convergent geometric series has first term <span class="chem">u_1 = 36</span> and common ratio <span class="chem">r = -1/3</span>. Calculate the sum to infinity <span class="chem">S_infty</span>.</p>',
    answer: 27,
    tolerance: { abs: 0.01 },
    hints: [
      'Since <span class="chem">|r| = 1/3 &lt; 1</span>, the infinite series converges.',
      'Use <span class="chem">S_infty = u_1 / (1 - r)</span> and watch the double negative in <span class="chem">1 - (-1/3)</span>.'
    ],
    solution: '<div class="worked__math"><i>S</i><sub>∞</sub> = <span class="frac"><span>36</span><span>1 − (−1/3)</span></span> = <span class="frac"><span>36</span><span>4/3</span></span> = <b>27</b></div>'
  },
  {
    id: 't1-1-q005',
    topic: 't1-1', level: 'sl', tier: 'foundation', type: 'numeric', marks: 3,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.4',
    stem: '<p>Maya invests 4500 USD in an account paying a nominal annual interest rate of 4.8%, compounded quarterly. Calculate the value of her investment after 6 years. Give your answer to 3 significant figures.</p>',
    answer: 5990,
    tolerance: { rel: 0.005 },
    sigfigs: 3,
    unit: 'USD',
    hints: [
      'Quarterly compounding means <span class="chem">k = 4</span> compounding periods per year.',
      'Substitute <span class="chem">PV = 4500</span>, <span class="chem">r = 4.8</span>, <span class="chem">k = 4</span>, <span class="chem">n = 6</span> into <span class="chem">FV = PV(1 + r/(100k))^{kn}</span>.'
    ],
    solution: '<div class="worked__math"><i>FV</i> = 4500 × (1 + 4.8 / 400)<sup>4×6</sup> = 4500 × (1.012)<sup>24</sup> ≈ 5991.63 USD</div><p>Rounded to 3 significant figures, this is <strong>5990 USD</strong> (or 5991.63 USD to 2 decimal places).</p>'
  },
  {
    id: 't1-1-q006',
    topic: 't1-1', level: 'sl', tier: 'foundation', type: 'multi', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.8',
    stem: '<p>For which of the following geometric sequences does the sum to infinity <span class="chem">S_infty</span> exist? Select all that apply.</p>',
    options: [
      '<span class="chem">100, -60, 36, -21.6, ...</span>',
      '<span class="chem">1, 1.05, 1.1025, ...</span>',
      '<span class="chem">u_n = 12 × (3/4)^{n-1}</span>',
      '<span class="chem">8, -8, 8, -8, ...</span>'
    ],
    answer: [0, 2],
    misconception: {
      1: 'Here <span class="chem">r = 1.05</span>. Since <span class="chem">|r| &gt; 1</span>, the terms grow without bound and the sum diverges.',
      3: 'Here <span class="chem">r = -1</span>. For convergence we strictly need <span class="chem">|r| &lt; 1</span>; when <span class="chem">r = -1</span> the partial sums oscillate between 8 and 0 without approaching a single limit.'
    },
    hints: [
      'A geometric series converges to a finite sum to infinity if and only if <span class="chem">|r| &lt; 1</span> (that is, <span class="chem">-1 &lt; r &lt; 1</span>).',
      'Find <span class="chem">r = u_2 / u_1</span> for each sequence and check whether <span class="chem">|r| &lt; 1</span>.'
    ],
    solution: '<p>The first sequence has <span class="chem">r = -60/100 = -0.6</span> (<span class="chem">|r| = 0.6 &lt; 1</span>) and the third has <span class="chem">r = 3/4</span> (<span class="chem">|r| = 0.75 &lt; 1</span>). Both converge.</p>'
  },

  /* ======================= EXAM STYLE ==================================== */
  {
    id: 't1-1-q007',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.2',
    stem: '<p>Calculate the exact value of the arithmetic series <span class="chem">Σ_{k=5}^{24} (3k - 7)</span>.</p>',
    answer: 730,
    tolerance: { abs: 0.01 },
    hints: [
      'First count the number of terms: from <span class="chem">k = 5</span> to <span class="chem">k = 24</span> inclusive there are <span class="chem">24 - 5 + 1 = 20</span> terms.',
      'Find the first term in the sum (<span class="chem">k = 5</span>) and the last term in the sum (<span class="chem">k = 24</span>), then use <span class="chem">S = (N/2)(first + last)</span>.'
    ],
    solution: '<div class="worked__math">Number of terms <i>N</i> = 24 − 5 + 1 = 20   <b>[A1]</b></div><div class="worked__math">First term (<i>k</i> = 5): 3(5) − 7 = 8;   Last term (<i>k</i> = 24): 3(24) − 7 = 65   <b>[A1]</b></div><div class="worked__math"><i>S</i> = <span class="frac"><span>20</span><span>2</span></span>(8 + 65) = 10 × 73 = <b>730</b>   <b>[M1 A1]</b></div>'
  },
  {
    id: 't1-1-q008',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'mcq', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.2',
    stem: '<p>The sum of the first <span class="chem">n</span> terms of a sequence is given by <span class="chem">S_n = 2n^2 + 5n</span> for all <span class="chem">n &gt;= 1</span>. Find an expression for the <span class="chem">n</span>-th term <span class="chem">u_n</span>.</p>',
    options: [
      '<span class="chem">u_n = 4n + 3</span>',
      '<span class="chem">u_n = 4n + 5</span>',
      '<span class="chem">u_n = 4n + 7</span>',
      '<span class="chem">u_n = 2n + 5</span>'
    ],
    answer: 0,
    misconception: {
      1: 'Taking the derivative of <span class="chem">2n^2 + 5n</span> gives <span class="chem">4n + 5</span>, which does not match <span class="chem">u_1 = S_1 = 7</span>.',
      2: 'You added instead of subtracting in <span class="chem">S_n - S_{n-1}</span>. Check <span class="chem">n = 1</span>: <span class="chem">u_1 = S_1 = 2(1)^2 + 5(1) = 7</span>.',
      3: 'Dividing <span class="chem">S_n</span> by <span class="chem">n</span> gives the average of the first <span class="chem">n</span> terms, not the <span class="chem">n</span>-th term <span class="chem">u_n</span>.'
    },
    hints: [
      'Evaluate <span class="chem">u_1 = S_1</span> and <span class="chem">S_2 = u_1 + u_2</span> to find <span class="chem">u_1</span> and <span class="chem">u_2</span>.',
      'Alternatively, simplify <span class="chem">u_n = S_n - S_{n-1} = (2n^2 + 5n) - (2(n-1)^2 + 5(n-1))</span>.'
    ],
    solution: '<div class="worked__math"><i>u</i><sub>1</sub> = <i>S</i><sub>1</sub> = 2(1)<sup>2</sup> + 5(1) = 7</div><div class="worked__math"><i>S</i><sub>2</sub> = 2(4) + 10 = 18  ⇒  <i>u</i><sub>2</sub> = <i>S</i><sub>2</sub> − <i>S</i><sub>1</sub> = 11  ⇒  <i>d</i> = 11 − 7 = 4</div><div class="worked__math"><i>u</i><sub><i>n</i></sub> = 7 + (<i>n</i> − 1)(4) = <b>4<i>n</i> + 3</b></div>'
  },
  {
    id: 't1-1-q009',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.3',
    stem: '<p>The terms <span class="chem">3k + 1</span>, <span class="chem">4k - 12</span>, and <span class="chem">19 - 3k</span> are consecutive terms of a geometric sequence. Given that the infinite series formed by this sequence converges, find the value of the common ratio <span class="chem">r</span>.</p>',
    answer: 0.5,
    tolerance: { abs: 0.005 },
    hints: [
      'For three consecutive geometric terms, equate the common ratios: <span class="chem">(4k - 12)/(3k + 1) = (19 - 3k)/(4k - 12)</span>.',
      'Cross-multiply to form a quadratic in <span class="chem">k</span>, find both possible values of <span class="chem">k</span>, and test which one gives <span class="chem">|r| &lt; 1</span>.'
    ],
    solution: '<div class="worked__math">(4<i>k</i> − 12)<sup>2</sup> = (3<i>k</i> + 1)(19 − 3<i>k</i>)  ⇒  16<i>k</i><sup>2</sup> − 96<i>k</i> + 144 = −9<i>k</i><sup>2</sup> + 54<i>k</i> + 19   <b>[M1 A1]</b></div><div class="worked__math">25<i>k</i><sup>2</sup> − 150<i>k</i> + 125 = 0  ⇒  <i>k</i><sup>2</sup> − 6<i>k</i> + 5 = 0  ⇒  (<i>k</i> − 1)(<i>k</i> − 5) = 0   <b>[M1 A1]</b></div><div class="worked__math">If <i>k</i> = 1, the terms are 4, −8, 16 so <i>r</i> = −2 (diverges since |<i>r</i>| &gt; 1). If <i>k</i> = 5, the terms are 16, 8, 4 so <b><i>r</i> = 0.5</b> (converges since |<i>r</i>| &lt; 1).   <b>[R1 A1]</b></div>'
  },
  {
    id: 't1-1-q010',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.3',
    stem: '<p>A geometric series has first term <span class="chem">u_1 = 5</span> and common ratio <span class="chem">r = 1.4</span>. Find the least number of terms <span class="chem">n</span> required for the sum <span class="chem">S_n</span> to exceed 1500.</p>',
    answer: 15,
    tolerance: { abs: 0.01 },
    hints: [
      'Write the sum inequality: <span class="chem">5(1.4^n - 1) / (1.4 - 1) &gt; 1500</span>.',
      'Rearrange to isolate <span class="chem">1.4^n &gt; 121</span>, take logarithms, and round up to the next integer.'
    ],
    solution: '<div class="worked__math"><span class="frac"><span>5(1.4<sup><i>n</i></sup> − 1)</span><span>0.4</span></span> &gt; 1500  ⇒  1.4<sup><i>n</i></sup> − 1 &gt; 120  ⇒  1.4<sup><i>n</i></sup> &gt; 121   <b>[M1 A1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln 121</span><span>ln 1.4</span></span> ≈ 14.25   <b>[M1 A1]</b></div><p>Since <span class="chem">n</span> must be a positive integer, the least number of terms is <strong>15</strong>. <b>[A1]</b></p>'
  },
  {
    id: 't1-1-q011',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.8',
    stem: '<p>In a convergent geometric series with positive terms, the sum to infinity is <span class="chem">S_infty = 64</span> and the sum of the first three terms is <span class="chem">S_3 = 37</span>. Find the first term <span class="chem">u_1</span>.</p>',
    answer: 16,
    tolerance: { abs: 0.01 },
    hints: [
      'Divide <span class="chem">S_3 = u_1(1 - r^3)/(1 - r)</span> by <span class="chem">S_infty = u_1/(1 - r)</span> to eliminate <span class="chem">u_1</span> immediately.',
      'Solve <span class="chem">1 - r^3 = 37/64</span> for <span class="chem">r</span>, then use <span class="chem">u_1 = 64(1 - r)</span>.'
    ],
    solution: '<div class="worked__math"><span class="frac"><span><i>S</i><sub>3</sub></span><span><i>S</i><sub>∞</sub></span></span> = 1 − <i>r</i><sup>3</sup> = <span class="frac"><span>37</span><span>64</span></span>   <b>[M1 A1]</b></div><div class="worked__math"><i>r</i><sup>3</sup> = 1 − <span class="frac"><span>37</span><span>64</span></span> = <span class="frac"><span>27</span><span>64</span></span>  ⇒  <i>r</i> = <span class="frac"><span>3</span><span>4</span></span>   <b>[A1]</b></div><div class="worked__math"><i>u</i><sub>1</sub> = <i>S</i><sub>∞</sub>(1 − <i>r</i>) = 64 × (1 − 3/4) = <b>16</b>   <b>[M1 A1]</b></div>'
  },
  {
    id: 't1-1-q012',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.4',
    stem: '<p>A delivery van is purchased new for 38 000 EUR and depreciates by 16% of its value each year. Find the number of complete years it takes for the value of the van to fall below 12 000 EUR.</p>',
    answer: 7,
    tolerance: { abs: 0.01 },
    hints: [
      'Losing 16% of its value each year means the value is multiplied by <span class="chem">r = 1 - 0.16 = 0.84</span> each year.',
      'Solve <span class="chem">38000(0.84)^n &lt; 12000</span>. Remember that dividing by <span class="chem">ln(0.84) &lt; 0</span> reverses the inequality sign.'
    ],
    solution: '<div class="worked__math">38000 × (0.84)<sup><i>n</i></sup> &lt; 12000  ⇒  (0.84)<sup><i>n</i></sup> &lt; <span class="frac"><span>6</span><span>19</span></span>   <b>[M1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln(6/19)</span><span>ln(0.84)</span></span> ≈ 6.61 years   <b>[M1 A1]</b></div><p>It takes <strong>7</strong> complete years. <b>[A1]</b></p>'
  },
  {
    id: 't1-1-q013',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'order', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.8',
    stem: '<p>Arrange these steps in the correct logical order to solve <span class="chem">Σ_{k=1}^infty 12 r^{k-1} = 16</span> and verify convergence.</p>',
    options: [
      'Identify the first term <span class="chem">u_1 = 12</span> (when <span class="chem">k = 1</span>) and common ratio <span class="chem">r</span>.',
      'Substitute into the infinite geometric sum formula: <span class="chem">12 / (1 - r) = 16</span>.',
      'Rearrange to <span class="chem">1 - r = 12/16 = 3/4</span> and solve to get <span class="chem">r = 1/4</span>.',
      'Verify that <span class="chem">|r| = 1/4 &lt; 1</span> so the infinite series is valid and convergent.'
    ],
    hints: [
      'First extract <span class="chem">u_1</span> and <span class="chem">r</span> from the sigma notation.',
      'After solving the equation for <span class="chem">r</span>, always verify the convergence condition <span class="chem">|r| &lt; 1</span>.'
    ],
    solution: '<p>Setting <span class="chem">k = 1</span> gives <span class="chem">u_1 = 12</span>. Applying <span class="chem">S_infty = u_1/(1-r) = 16</span> yields <span class="chem">1 - r = 3/4</span> so <span class="chem">r = 1/4</span>, which satisfies <span class="chem">|r| &lt; 1</span>.</p>'
  },
  {
    id: 't1-1-q014',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'short', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.2',
    stem: '<p>An arithmetic sequence has first term <span class="chem">u_1 = 4</span> and common difference <span class="chem">d = 3</span>. A geometric sequence has first term <span class="chem">v_1 = 2</span> and common ratio <span class="chem">r = 2</span>. Find the value of <span class="chem">n</span> for which the sum of the first <span class="chem">n</span> terms of the arithmetic sequence equals the 7th term of the geometric sequence.</p>',
    answer: '<div class="worked__math"><i>v</i><sub>7</sub> = 2 × 2<sup>6</sup> = 128</div><div class="worked__math"><i>S</i><sub><i>n</i></sub> = <span class="frac"><span><i>n</i></span><span>2</span></span>(2(4) + (<i>n</i> − 1)3) = <span class="frac"><span><i>n</i>(3<i>n</i> + 5)</span><span>2</span></span></div><div class="worked__math">3<i>n</i><sup>2</sup> + 5<i>n</i> − 256 = 0  ⇒  (3<i>n</i> + 32)(<i>n</i> − 8) = 0  ⇒  <b><i>n</i> = 8</b></div>',
    markscheme: [
      'M1 A1: Uses geometric n-th term formula to find v_7 = 2 × 2^6 = 128.',
      'M1: Substitutes u_1 = 4 and d = 3 into arithmetic sum S_n = (n/2)(8 + 3(n - 1)).',
      'A1: Simplifies equation to 3n^2 + 5n - 256 = 0.',
      'M1: Factors as (3n + 32)(n - 8) = 0 or uses the quadratic formula.',
      'A1: Selects n = 8 (rejecting n = -32/3 since n is a positive integer).'
    ],
    hints: [
      'First compute <span class="chem">v_7 = v_1 r^6</span>.',
      'Set <span class="chem">S_n = (n/2)(2u_1 + (n-1)d) = 128</span> and solve the resulting quadratic for <span class="chem">n &gt; 0</span>.'
    ],
    solution: '<p>Equating <span class="chem">S_n = n(3n+5)/2</span> to <span class="chem">v_7 = 128</span> gives <span class="chem">3n^2 + 5n - 256 = 0</span>, which factors as <span class="chem">(3n + 32)(n - 8) = 0</span>. Since <span class="chem">n</span> is a positive integer, <span class="chem">n = 8</span>.</p>'
  },

  /* ======================= CHALLENGE ===================================== */
  {
    id: 't1-1-q015',
    topic: 't1-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.3',
    stem: '<p>The first, fourth, and tenth terms of a non-constant arithmetic sequence form the first three consecutive terms of a geometric sequence. Find the common ratio <span class="chem">r</span> of the geometric sequence.</p>',
    answer: 2,
    tolerance: { abs: 0.01 },
    hints: [
      'Write the three arithmetic terms in terms of <span class="chem">u_1</span> and <span class="chem">d</span>: <span class="chem">u_1</span>, <span class="chem">u_1 + 3d</span>, and <span class="chem">u_1 + 9d</span>.',
      'Since they form a geometric sequence, equate the ratio: <span class="chem">(u_1 + 3d)/u_1 = (u_1 + 9d)/(u_1 + 3d)</span> and solve for <span class="chem">u_1</span> in terms of <span class="chem">d</span> (knowing <span class="chem">d != 0</span>).'
    ],
    solution: '<div class="worked__math">(<i>u</i><sub>1</sub> + 3<i>d</i>)<sup>2</sup> = <i>u</i><sub>1</sub>(<i>u</i><sub>1</sub> + 9<i>d</i>)   <b>[M1 A1]</b></div><div class="worked__math"><i>u</i><sub>1</sub><sup>2</sup> + 6<i>u</i><sub>1</sub><i>d</i> + 9<i>d</i><sup>2</sup> = <i>u</i><sub>1</sub><sup>2</sup> + 9<i>u</i><sub>1</sub><i>d</i>  ⇒  9<i>d</i><sup>2</sup> = 3<i>u</i><sub>1</sub><i>d</i>   <b>[M1]</b></div><div class="worked__math">Since <i>d</i> ≠ 0, <i>u</i><sub>1</sub> = 3<i>d</i>. Then <i>r</i> = <span class="frac"><span><i>u</i><sub>1</sub> + 3<i>d</i></span><span><i>u</i><sub>1</sub></span></span> = <span class="frac"><span>6<i>d</i></span><span>3<i>d</i></span></span> = <b>2</b>   <b>[A1 A1]</b></div>'
  },
  {
    id: 't1-1-q016',
    topic: 't1-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 7,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.4',
    stem: '<p>At the <strong>start</strong> of every year, Leo deposits 2000 USD into a savings plan that pays 5% interest per annum compounded annually. Find the total value of the savings plan at the <strong>end</strong> of the 10th year. Give your answer to the nearest integer.</p>',
    answer: 26414,
    tolerance: { abs: 5 },
    unit: 'USD',
    hints: [
      'Draw a timeline! The 10th deposit (made at the start of year 10) earns interest for 1 full year, so its final value is <span class="chem">2000(1.05)^1</span>. The 1st deposit earns interest for 10 full years: <span class="chem">2000(1.05)^{10}</span>.',
      'Sum the 10 geometric terms with first term <span class="chem">a = 2000(1.05) = 2100</span>, ratio <span class="chem">r = 1.05</span>, and <span class="chem">n = 10</span>.'
    ],
    solution: '<div class="worked__math">Total = 2000(1.05)<sup>1</sup> + 2000(1.05)<sup>2</sup> + … + 2000(1.05)<sup>10</sup>   <b>[M1 A1]</b></div><div class="worked__math"><i>S</i><sub>10</sub> = <span class="frac"><span>2000(1.05)(1.05<sup>10</sup> − 1)</span><span>1.05 − 1</span></span> = 42000(1.05<sup>10</sup> − 1) ≈ <b>26 414 USD</b>   <b>[M1 A1]</b></div>'
  },
  {
    id: 't1-1-q017',
    topic: 't1-1', level: 'sl', tier: 'challenge', type: 'short', marks: 7,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.8',
    stem: '<p>Consider the infinite geometric series <span class="chem">Σ_{n=1}^infty (2x - 1)(x^2 - 3)^{n-1}</span>.<br>(a) Find the set of values of <span class="chem">x</span> for which the series converges to a non-zero sum. <strong>[4]</strong><br>(b) Find the value of <span class="chem">x</span> in this set for which the sum to infinity is equal to <span class="chem">2</span>. <strong>[3]</strong></p>',
    answer: '<div class="worked__math">(a) Common ratio <i>r</i> = <i>x</i><sup>2</sup> − 3. Convergence requires |<i>x</i><sup>2</sup> − 3| &lt; 1  ⇔  2 &lt; <i>x</i><sup>2</sup> &lt; 4.</div><div class="worked__math">Thus −2 &lt; <i>x</i> &lt; −√2  or  √2 &lt; <i>x</i> &lt; 2 (with <i>x</i> ≠ ±√3 if <i>r</i> ≠ 0).</div><div class="worked__math">(b) <span class="frac"><span>2<i>x</i> − 1</span><span>1 − (<i>x</i><sup>2</sup> − 3)</span></span> = 2  ⇒  2<i>x</i> − 1 = 8 − 2<i>x</i><sup>2</sup>  ⇒  2<i>x</i><sup>2</sup> + 2<i>x</i> − 9 = 0  ⇒  <b><i>x</i> = <span class="frac"><span>−1 + √19</span><span>2</span></span></b></div>',
    markscheme: [
      'M1: Identifies common ratio r = x^2 - 3 and sets |x^2 - 3| < 1.',
      'A1: Rewrites inequality as 2 < x^2 < 4.',
      'A2: Obtains both intervals -2 < x < -sqrt(2) and sqrt(2) < x < 2.',
      'M1: Sets S_infty = (2x - 1)/(4 - x^2) = 2 and rearranges to 2x^2 + 2x - 9 = 0.',
      'A1: Finds roots x = (-1 +- sqrt(19))/2.',
      'R1: Rejects (-1 - sqrt(19))/2 ≈ -2.68 (outside interval) and keeps x = (-1 + sqrt(19))/2 ≈ 1.68 (inside (sqrt(2), 2)).'
    ],
    hints: [
      'For part (a), solve the double inequality <span class="chem">-1 &lt; x^2 - 3 &lt; 1</span> by adding 3 to all parts.',
      'For part (b), solve <span class="chem">(2x - 1)/(4 - x^2) = 2</span> and check which root satisfies <span class="chem">2 &lt; x^2 &lt; 4</span>.'
    ],
    solution: '<p>Note that for <span class="chem">x = (-1 + sqrt(19))/2</span>, we have <span class="chem">2x^2 = 9 - 2x = 10 - sqrt(19)</span>, so <span class="chem">x^2 = 5 - sqrt(19)/2 ≈ 2.82</span>, which lies strictly between 2 and 4.</p>'
  }
]);
