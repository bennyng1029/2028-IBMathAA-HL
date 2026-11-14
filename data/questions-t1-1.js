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
    stem: '<p>Maya invests 4500 USD in an account paying a nominal annual interest rate of 4.8%, compounded quarterly. Calculate the value of her investment after 6 years. Give your answer correct to 2 decimal places.</p>',
    answer: 5991.627616728622,
    dp: 2,
    unit: 'USD',
    hints: [
      'Quarterly compounding means <span class="chem">k = 4</span> compounding periods per year.',
      'Substitute <span class="chem">PV = 4500</span>, <span class="chem">r = 4.8</span>, <span class="chem">k = 4</span>, <span class="chem">n = 6</span> into <span class="chem">FV = PV(1 + r/(100k))^{kn}</span>.'
    ],
    solution: '<div class="worked__math"><i>FV</i> = 4500 × (1 + 4.8 / 400)<sup>4×6</sup> = 4500 × (1.012)<sup>24</sup> ≈ 5991.6276 USD</div><p>Correct to 2 decimal places, this is <strong>5991.63 USD</strong>.</p>'
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
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'mcq', marks: 2,
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
      2: 'Check the sign when expanding <span class="chem">-2(n - 1)^2 = -2n^2 + 4n - 2</span>. Writing <span class="chem">+2</span> instead gives <span class="chem">4n + 7</span>. Test <span class="chem">n = 1</span>: <span class="chem">u_1 = S_1 = 7</span>, but <span class="chem">4(1) + 7 = 11</span>.',
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
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 6,
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
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 5,
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
    stem: '<p>An arithmetic sequence has first term <span class="chem">u_1 = 9</span> and common difference <span class="chem">d = 2</span>. A geometric sequence has first term <span class="chem">v_1 = 2</span> and common ratio <span class="chem">r = 2</span>. Find the value of <span class="chem">n</span> for which the sum of the first <span class="chem">n</span> terms of the arithmetic sequence equals the 7th term of the geometric sequence.</p>',
    answer: '<div class="worked__math"><i>v</i><sub>7</sub> = 2 × 2<sup>6</sup> = 128</div><div class="worked__math"><i>S</i><sub><i>n</i></sub> = <span class="frac"><span><i>n</i></span><span>2</span></span>(2(9) + (<i>n</i> − 1)2) = <span class="frac"><span><i>n</i></span><span>2</span></span>(2<i>n</i> + 16) = <i>n</i>(<i>n</i> + 8)</div><div class="worked__math"><i>n</i>(<i>n</i> + 8) = 128  ⇒  <i>n</i><sup>2</sup> + 8<i>n</i> − 128 = 0  ⇒  (<i>n</i> + 16)(<i>n</i> − 8) = 0  ⇒  <b><i>n</i> = 8</b></div>',
    markscheme: [
      'M1: Uses the geometric <span class="chem">n</span>-th term formula <span class="chem">v_7 = v_1 r^6</span>.',
      'A1: <span class="chem">v_7 = 2 × 2^6 = 128</span>.',
      'M1: Substitutes <span class="chem">u_1 = 9</span> and <span class="chem">d = 2</span> into <span class="chem">S_n = (n/2)(2u_1 + (n - 1)d)</span> and sets it equal to 128.',
      'A1: Simplifies to <span class="chem">n(n + 8) = 128</span>, i.e. <span class="chem">n^2 + 8n - 128 = 0</span>.',
      'M1: Factorizes as <span class="chem">(n + 16)(n - 8) = 0</span> or uses the quadratic formula.',
      'A1: Selects <span class="chem">n = 8</span> (rejecting <span class="chem">n = -16</span> since <span class="chem">n</span> is a positive integer).'
    ],
    hints: [
      'First compute <span class="chem">v_7 = v_1 r^6</span>.',
      'Set <span class="chem">S_n = (n/2)(2u_1 + (n-1)d) = 128</span> and solve the resulting quadratic for <span class="chem">n &gt; 0</span>.'
    ],
    solution: '<p>Equating <span class="chem">S_n = n(n + 8)</span> to <span class="chem">v_7 = 128</span> gives <span class="chem">n^2 + 8n - 128 = 0</span>, which factorizes as <span class="chem">(n + 16)(n - 8) = 0</span>. Since <span class="chem">n</span> is a positive integer, <span class="chem">n = 8</span>.</p>'
  },

  /* ======================= CHALLENGE ===================================== */
  {
    id: 't1-1-q015',
    topic: 't1-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.3',
    stem: '<p>The first, fourth, and tenth terms of a non-constant arithmetic sequence form the first three consecutive terms of a geometric sequence. Find the common ratio <span class="chem">r</span> of the geometric sequence.</p>',
    answer: 2,
    tolerance: { abs: 0.01 },
    hints: [
      'Decode: “non-constant” means <span class="chem">d != 0</span>, which you will need when you divide. “Form a geometric sequence” gives one equation: the middle term squared equals the product of the other two.',
      'Write the three arithmetic terms in terms of <span class="chem">u_1</span> and <span class="chem">d</span>: <span class="chem">u_1</span>, <span class="chem">u_1 + 3d</span>, and <span class="chem">u_1 + 9d</span>.',
      'Since they form a geometric sequence, equate the ratio: <span class="chem">(u_1 + 3d)/u_1 = (u_1 + 9d)/(u_1 + 3d)</span> and solve for <span class="chem">u_1</span> in terms of <span class="chem">d</span> (knowing <span class="chem">d != 0</span>).'
    ],
    solution: '<div class="worked__math">(<i>u</i><sub>1</sub> + 3<i>d</i>)<sup>2</sup> = <i>u</i><sub>1</sub>(<i>u</i><sub>1</sub> + 9<i>d</i>)   <b>[M1 A1]</b></div><div class="worked__math"><i>u</i><sub>1</sub><sup>2</sup> + 6<i>u</i><sub>1</sub><i>d</i> + 9<i>d</i><sup>2</sup> = <i>u</i><sub>1</sub><sup>2</sup> + 9<i>u</i><sub>1</sub><i>d</i>  ⇒  9<i>d</i><sup>2</sup> = 3<i>u</i><sub>1</sub><i>d</i>   <b>[M1]</b></div><div class="worked__math">Since <i>d</i> ≠ 0, <i>u</i><sub>1</sub> = 3<i>d</i>. Then <i>r</i> = <span class="frac"><span><i>u</i><sub>1</sub> + 3<i>d</i></span><span><i>u</i><sub>1</sub></span></span> = <span class="frac"><span>6<i>d</i></span><span>3<i>d</i></span></span> = <b>2</b>   <b>[A1 A1]</b></div>'
  },
  {
    id: 't1-1-q016',
    topic: 't1-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.3',
    stem: '<p>At the <strong>start</strong> of every year, Leo deposits 2000 USD into a savings plan that pays 5% interest per annum compounded annually. Find the total value of the savings plan at the <strong>end</strong> of the 10th year. Give your answer correct to 2 decimal places.</p>',
    answer: 26413.574324652564,
    dp: 2,
    unit: 'USD',
    hints: [
      'Decode: regular deposits make a geometric series, not a single compound-interest calculation. “At the start of every year” means each deposit earns interest in the year it is made, so count how many years of interest each deposit receives.',
      'Draw a timeline! The 10th deposit (made at the start of year 10) earns interest for 1 full year, so its final value is <span class="chem">2000(1.05)^1</span>. The 1st deposit earns interest for 10 full years: <span class="chem">2000(1.05)^{10}</span>.',
      'Sum the 10 geometric terms with first term <span class="chem">a = 2000(1.05) = 2100</span>, ratio <span class="chem">r = 1.05</span>, and <span class="chem">n = 10</span>.'
    ],
    solution: '<div class="worked__math">Total = 2000(1.05)<sup>1</sup> + 2000(1.05)<sup>2</sup> + … + 2000(1.05)<sup>10</sup>   <b>[M1 A1]</b></div><div class="worked__math"><i>S</i><sub>10</sub> = <span class="frac"><span>2000(1.05)(1.05<sup>10</sup> − 1)</span><span>1.05 − 1</span></span> = 42000(1.05<sup>10</sup> − 1) ≈ <b>26 413.57 USD</b>   <b>[M1 A1]</b></div>'
  },
  {
    id: 't1-1-q017',
    topic: 't1-1', level: 'sl', tier: 'challenge', type: 'short', marks: 7,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.8',
    stem: '<p>Consider the infinite geometric series <span class="chem">Σ_{n=1}^infty (2x - 1)(x^2 - 3)^{n-1}</span>.<br>(a) Find the set of values of <span class="chem">x</span> for which the series converges. <strong>[4]</strong><br>(b) Find the value of <span class="chem">x</span> in this set for which the sum to infinity is equal to <span class="chem">2</span>. <strong>[3]</strong></p>',
    answer: '<div class="worked__math">(a) Common ratio <i>r</i> = <i>x</i><sup>2</sup> − 3. Convergence requires |<i>x</i><sup>2</sup> − 3| &lt; 1  ⇔  2 &lt; <i>x</i><sup>2</sup> &lt; 4.</div><div class="worked__math">Thus −2 &lt; <i>x</i> &lt; −√2  or  √2 &lt; <i>x</i> &lt; 2.</div><div class="worked__math">(b) <span class="frac"><span>2<i>x</i> − 1</span><span>1 − (<i>x</i><sup>2</sup> − 3)</span></span> = 2  ⇒  2<i>x</i> − 1 = 8 − 2<i>x</i><sup>2</sup>  ⇒  2<i>x</i><sup>2</sup> + 2<i>x</i> − 9 = 0  ⇒  <b><i>x</i> = <span class="frac"><span>−1 + √19</span><span>2</span></span></b></div>',
    markscheme: [
      'M1: Identifies the common ratio <span class="chem">r = x^2 - 3</span> and sets <span class="chem">|x^2 - 3| &lt; 1</span>.',
      'A1: Rewrites the inequality as <span class="chem">2 &lt; x^2 &lt; 4</span>.',
      'A1: Obtains the interval <span class="chem">-2 &lt; x &lt; -sqrt(2)</span>.',
      'A1: Obtains the interval <span class="chem">sqrt(2) &lt; x &lt; 2</span>.',
      'M1: Sets <span class="chem">S_infty = (2x - 1)/(4 - x^2) = 2</span> and rearranges to <span class="chem">2x^2 + 2x - 9 = 0</span>.',
      'A1: Finds the roots <span class="chem">x = (-1 +- sqrt(19))/2</span>.',
      'R1: Rejects <span class="chem">(-1 - sqrt(19))/2 ≈ -2.68</span> (outside the interval) and keeps <span class="chem">x = (-1 + sqrt(19))/2 ≈ 1.68</span> (inside <span class="chem">(sqrt(2), 2)</span>).'
    ],
    hints: [
      'Decode: compare the terms for <span class="chem">n = 1</span> and <span class="chem">n = 2</span>: the first term is <span class="chem">2x - 1</span> and the common ratio is <span class="chem">x^2 - 3</span>. Part (a) is the condition <span class="chem">|r| &lt; 1</span>; in part (b) the answer must lie in the set from (a).',
      'For part (a), solve the double inequality <span class="chem">-1 &lt; x^2 - 3 &lt; 1</span> by adding 3 to all parts.',
      'For part (b), solve <span class="chem">(2x - 1)/(4 - x^2) = 2</span> and check which root satisfies <span class="chem">2 &lt; x^2 &lt; 4</span>.'
    ],
    solution: '<p>Note that for <span class="chem">x = (-1 + sqrt(19))/2</span>, we have <span class="chem">2x^2 = 9 - 2x = 10 - sqrt(19)</span>, so <span class="chem">x^2 = 5 - sqrt(19)/2 ≈ 2.82</span>, which lies strictly between 2 and 4.</p>'
  },
  {
    id: 't1-1-q018',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 3,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.4',
    stem: '<p>Ines invests 5000 EUR in an account that pays 4% interest per annum, compounded annually. The annual inflation rate is expected to be 2.5% throughout. Using the real interest rate <span class="chem">(4 - 2.5)%</span>, find the real value of her investment after 8 years. Give your answer correct to 2 decimal places.</p>',
    answer: 5632.462932976531,
    dp: 2,
    unit: 'EUR',
    hints: [
      'The real value removes the effect of inflation, so use the interest rate minus the inflation rate: <span class="chem">r = 4 - 2.5 = 1.5</span>.',
      'Substitute <span class="chem">PV = 5000</span>, <span class="chem">r = 1.5</span>, <span class="chem">k = 1</span>, <span class="chem">n = 8</span> into <span class="chem">FV = PV(1 + r/(100k))^{kn}</span>, or use the Finance Solver with <span class="mono">I% = 1.5</span>.'
    ],
    solution: '<div class="worked__math">Real rate = 4% − 2.5% = 1.5%   <b>[M1]</b></div><div class="worked__math">Real value = 5000 × (1.015)<sup>8</sup> ≈ 5632.4629 EUR   <b>[M1]</b></div><p>Correct to 2 decimal places, the real value is <strong>5632.46 EUR</strong>. <b>[A1]</b></p>'
  },

  /* ======================= 2026-11 EXPANSION (q019–q059) ================ */
  {
    id: 't1-1-q019',
    topic: 't1-1', level: 'sl', tier: 'foundation', type: 'numeric', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.1',
    stem: '<p>The number <span class="chem">(3.6 × 10^4) × (5.0 × 10^{-9})</span> can be written in the form <span class="chem">a × 10^k</span>, where <span class="chem">1 &lt;= a &lt; 10</span> and <span class="chem">k</span> is an integer. Find the value of <span class="chem">k</span>.</p>',
    answer: -4,
    tolerance: { abs: 0.01 },
    hints: [
      'Multiply the leading numbers and add the powers of 10 separately: <span class="chem">(3.6 × 5.0) × 10^{4 + (-9)}</span>.',
      'The product of the leading numbers is greater than 10, so move one factor of 10 into the power.'
    ],
    solution: '<div class="worked__math">(3.6 × 5.0) × 10<sup>4 − 9</sup> = 18 × 10<sup>−5</sup>   <b>[M1]</b></div><div class="worked__math">18 × 10<sup>−5</sup> = 1.8 × 10<sup>1</sup> × 10<sup>−5</sup> = 1.8 × 10<sup>−4</sup>, so <b><i>k</i> = −4</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q020',
    topic: 't1-1', level: 'sl', tier: 'foundation', type: 'numeric', marks: 2,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.1',
    stem: '<p>One light year is <span class="chem">9.461 × 10^{15}</span> metres. A star is 4.24 light years from the Sun. Calculate this distance in metres. Give your answer in the form <span class="chem">a × 10^k</span>, where <span class="chem">1 &lt;= a &lt; 10</span> and <span class="chem">k</span> is an integer, with <span class="chem">a</span> correct to 3 significant figures.</p>',
    answer: 4.011464e16,
    sigfigs: 3,
    unit: 'm',
    hints: [
      'Multiply: distance = <span class="chem">4.24 × 9.461 × 10^{15}</span>. On the GDC, enter the power of 10 with the <span class="mono">EE</span> (or <span class="mono">×10ˣ</span>) key.',
      'Round the leading number to 3 significant figures and check that it lies between 1 and 10.'
    ],
    solution: '<div class="worked__math">4.24 × 9.461 × 10<sup>15</sup> = 40.114… × 10<sup>15</sup>   <b>[M1]</b></div><div class="worked__math">= 4.0114… × 10<sup>16</sup> ≈ <b>4.01 × 10<sup>16</sup> m</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q021',
    topic: 't1-1', level: 'sl', tier: 'foundation', type: 'numeric', marks: 3,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.3',
    stem: '<p>In a geometric sequence, <span class="chem">u_2 = 6</span> and <span class="chem">u_5 = 162</span>. Find <span class="chem">u_7</span>.</p>',
    answer: 1458,
    tolerance: { abs: 0.01 },
    hints: [
      'From <span class="chem">u_2</span> to <span class="chem">u_5</span> you multiply by <span class="chem">r</span> three times, so <span class="chem">r^3 = 162/6</span>.',
      'Once you have <span class="chem">r</span>, go from <span class="chem">u_2</span> to <span class="chem">u_7</span>: that is five more multiplications by <span class="chem">r</span>.'
    ],
    solution: '<div class="worked__math"><i>r</i><sup>3</sup> = <span class="frac"><span>162</span><span>6</span></span> = 27   <b>[M1]</b></div><div class="worked__math"><i>r</i> = 3   <b>[A1]</b></div><div class="worked__math"><i>u</i><sub>7</sub> = <i>u</i><sub>2</sub><i>r</i><sup>5</sup> = 6 × 243 = <b>1458</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q022',
    topic: 't1-1', level: 'sl', tier: 'foundation', type: 'numeric', marks: 3,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.4',
    stem: '<p>A laptop is bought for 1850 GBP. Its value decreases by 22% each year. Calculate its value after 4 years. Give your answer correct to 2 decimal places.</p>',
    answer: 684.778536,
    dp: 2,
    unit: 'GBP',
    hints: [
      'Losing 22% each year means the value is multiplied by <span class="chem">1 - 0.22 = 0.78</span> each year.',
      'Value after 4 years <span class="chem">= 1850 × 0.78^4</span>. On the Finance Solver: <span class="mono">N = 4, I% = −22, PV = −1850, PMT = 0, P/Y = C/Y = 1</span>, solve for FV.'
    ],
    solution: '<div class="worked__math">Multiplier = 1 − 0.22 = 0.78   <b>[M1]</b></div><div class="worked__math"><i>V</i> = 1850 × 0.78<sup>4</sup>   <b>[M1]</b></div><div class="worked__math">= 684.778… ≈ <b>684.78 GBP</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q023',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.2',
    stem: '<p>Given that <span class="chem">Σ_{r=1}^{n} (4r + 3) = 1375</span>, find the value of <span class="chem">n</span>.</p>',
    answer: 25,
    tolerance: { abs: 0.01 },
    hints: [
      'Write out the first two terms (<span class="chem">r = 1, 2</span>): the sum is arithmetic with first term 7 and common difference 4.',
      'Use <span class="chem">S_n = (n/2)(2u_1 + (n - 1)d)</span>, simplify to a quadratic in <span class="chem">n</span> and factorize.',
      'You should reach <span class="chem">2n^2 + 5n - 1375 = 0</span>. Remember that <span class="chem">n</span> is a positive integer.'
    ],
    solution: '<div class="worked__math"><i>u</i><sub>1</sub> = 7, <i>d</i> = 4   <b>[A1]</b></div><div class="worked__math"><i>S</i><sub><i>n</i></sub> = <span class="frac"><span><i>n</i></span><span>2</span></span>(14 + 4(<i>n</i> − 1)) = 2<i>n</i><sup>2</sup> + 5<i>n</i>   <b>[M1 A1]</b></div><div class="worked__math">2<i>n</i><sup>2</sup> + 5<i>n</i> − 1375 = 0  ⇒  (2<i>n</i> + 55)(<i>n</i> − 25) = 0   <b>[M1]</b></div><div class="worked__math">Since <i>n</i> is a positive integer, <b><i>n</i> = 25</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q024',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'short', marks: 8,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.2',
    stem: '<p>A theatre has 30 rows of seats. The front row has 18 seats, and each row has 3 more seats than the row in front of it.</p><p>(a) Write down the number of seats in the second row. <strong>[1]</strong><br>(b) Find the number of seats in the back row. <strong>[2]</strong><br>(c) Find the total number of seats in the theatre. <strong>[2]</strong><br>(d) For a small concert, only the first <span class="chem">n</span> rows (starting from the front) are opened. Find the least value of <span class="chem">n</span> for which at least 1000 seats are available. <strong>[3]</strong></p>',
    answer: '<div class="worked__math">(a) 18 + 3 = <b>21</b></div><div class="worked__math">(b) <i>u</i><sub>30</sub> = 18 + 29 × 3 = <b>105</b></div><div class="worked__math">(c) <i>S</i><sub>30</sub> = <span class="frac"><span>30</span><span>2</span></span>(18 + 105) = <b>1845</b></div><div class="worked__math">(d) <span class="frac"><span><i>n</i></span><span>2</span></span>(36 + 3(<i>n</i> − 1)) ≥ 1000. GDC: <i>S</i><sub>20</sub> = 930, <i>S</i><sub>21</sub> = 1008 (or the root <i>n</i> ≈ 20.9), so <b><i>n</i> = 21</b></div>',
    markscheme: [
      'A1: (a) 21 seats.',
      'M1: (b) Uses <span class="chem">u_{30} = u_1 + 29d</span> with <span class="chem">u_1 = 18</span>, <span class="chem">d = 3</span>.',
      'A1: (b) 105 seats.',
      'M1: (c) Uses <span class="chem">S_{30} = (30/2)(18 + 105)</span> or <span class="chem">(30/2)(36 + 29 × 3)</span>.',
      'A1: (c) 1845 seats.',
      'M1: (d) Sets up <span class="chem">(n/2)(36 + 3(n - 1)) &gt;= 1000</span> (an equation is acceptable).',
      'A1: (d) Uses the GDC: root <span class="chem">n ≈ 20.9</span>, or the table values <span class="chem">S_{20} = 930</span> and <span class="chem">S_{21} = 1008</span>.',
      'A1: (d) <span class="chem">n = 21</span>.'
    ],
    hints: [
      'Decode: the numbers of seats in the rows form an arithmetic sequence with <span class="chem">u_1 = 18</span> and <span class="chem">d = 3</span>. Parts (b) and (c) use <span class="chem">u_n</span> and <span class="chem">S_n</span>; part (d) asks for the least <span class="chem">n</span> with <span class="chem">S_n &gt;= 1000</span>.',
      'For (d), write <span class="chem">S_n = (n/2)(36 + 3(n - 1))</span> and use the GDC: graph it against <span class="chem">y = 1000</span>, or look down a table of values.',
      'The root of <span class="chem">S_n = 1000</span> is not a whole number. Round up, because <span class="chem">n</span> is a number of rows.'
    ],
    solution: '<p>The decoding step: "each row has 3 more seats" means an arithmetic sequence. Then (b) is a term, (c) is a sum, and (d) is an inequality in <span class="chem">n</span>. The equation <span class="chem">3n^2 + 33n - 2000 = 0</span> has positive root <span class="chem">n ≈ 20.9</span>, so 20 rows give only 930 seats and 21 rows give 1008. The least value is <span class="chem">n = 21</span>.</p>'
  },
  {
    id: 't1-1-q025',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'short', marks: 8,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.2',
    stem: '<p>The fifth term of an arithmetic sequence is 23 and the sum of the first 12 terms is 348.</p><p>(a) Show that <span class="chem">2u_1 + 11d = 58</span>. <strong>[2]</strong><br>(b) Find the value of <span class="chem">u_1</span> and the value of <span class="chem">d</span>. <strong>[3]</strong><br>(c) Find the least value of <span class="chem">n</span> for which <span class="chem">u_n &gt; 500</span>. <strong>[3]</strong></p>',
    answer: '<div class="worked__math">(a) <i>S</i><sub>12</sub> = <span class="frac"><span>12</span><span>2</span></span>(2<i>u</i><sub>1</sub> + 11<i>d</i>) = 348  ⇒  6(2<i>u</i><sub>1</sub> + 11<i>d</i>) = 348  ⇒  2<i>u</i><sub>1</sub> + 11<i>d</i> = 58</div><div class="worked__math">(b) <i>u</i><sub>1</sub> + 4<i>d</i> = 23, so 2<i>u</i><sub>1</sub> + 8<i>d</i> = 46. Subtracting: 3<i>d</i> = 12, so <b><i>d</i> = 4</b> and <b><i>u</i><sub>1</sub> = 7</b></div><div class="worked__math">(c) 7 + 4(<i>n</i> − 1) &gt; 500  ⇒  4<i>n</i> + 3 &gt; 500  ⇒  <i>n</i> &gt; 124.25, so <b><i>n</i> = 125</b></div>',
    markscheme: [
      'M1: (a) Substitutes <span class="chem">n = 12</span> into <span class="chem">S_n = (n/2)(2u_1 + (n - 1)d)</span> and sets it equal to 348.',
      'A1: (a) Obtains <span class="chem">6(2u_1 + 11d) = 348</span>, which leads to the given result <span class="chem">2u_1 + 11d = 58</span> (the given line itself earns no mark).',
      'M1: (b) Writes <span class="chem">u_1 + 4d = 23</span> and solves it simultaneously with <span class="chem">2u_1 + 11d = 58</span>.',
      'A1: (b) <span class="chem">d = 4</span>.',
      'A1: (b) <span class="chem">u_1 = 7</span>.',
      'M1: (c) Sets up <span class="chem">7 + 4(n - 1) &gt; 500</span> (an equation is acceptable).',
      'A1: (c) <span class="chem">n &gt; 124.25</span> (or <span class="chem">n = 124.25</span>).',
      'A1: (c) <span class="chem">n = 125</span>.'
    ],
    hints: [
      'For (a), the only formula involving a sum of 12 terms is <span class="chem">S_{12} = (12/2)(2u_1 + 11d)</span>.',
      'For (b), "the fifth term is 23" gives a second equation, <span class="chem">u_1 + 4d = 23</span>. Solve the pair simultaneously.',
      'For (c), solve <span class="chem">u_n = 500</span>, then choose the next integer above the root.'
    ],
    solution: '<p>Two facts give two equations: <span class="chem">u_1 + 4d = 23</span> and <span class="chem">2u_1 + 11d = 58</span>. Doubling the first and subtracting gives <span class="chem">3d = 12</span>, so <span class="chem">d = 4</span> and <span class="chem">u_1 = 7</span>. Then <span class="chem">u_n = 4n + 3</span>, and <span class="chem">4n + 3 &gt; 500</span> gives <span class="chem">n &gt; 124.25</span>, so the least value is <span class="chem">n = 125</span>. Check: <span class="chem">u_{124} = 499</span> and <span class="chem">u_{125} = 503</span>.</p>'
  },
  {
    id: 't1-1-q026',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'short', marks: 8,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.2',
    stem: '<p>A science fair had 1210 visitors in year 1, 1295 in year 2, 1388 in year 3, 1462 in year 4 and 1550 in year 5.</p><p>(a) Explain why the numbers of visitors do not form an arithmetic sequence. <strong>[1]</strong><br>(b) Show that the mean of the four year-on-year increases is 85. <strong>[2]</strong><br>The organisers model the number of visitors in year <span class="chem">n</span> by the arithmetic sequence <span class="chem">u_n = 1210 + 85(n - 1)</span>.<br>(c) Use the model to predict the number of visitors in year 10. <strong>[2]</strong><br>(d) Use the model to predict the total number of visitors in the first 10 years. <strong>[2]</strong><br>(e) Explain why the model may not be reliable for predicting the number of visitors in year 30. <strong>[1]</strong></p>',
    answer: '<div class="worked__math">(a) The increases are 85, 93, 74, 88: they are not constant.</div><div class="worked__math">(b) <span class="frac"><span>85 + 93 + 74 + 88</span><span>4</span></span> = <span class="frac"><span>340</span><span>4</span></span> = 85 (equivalently <span class="frac"><span>1550 − 1210</span><span>4</span></span>)</div><div class="worked__math">(c) <i>u</i><sub>10</sub> = 1210 + 9 × 85 = <b>1975</b></div><div class="worked__math">(d) <i>S</i><sub>10</sub> = <span class="frac"><span>10</span><span>2</span></span>(1210 + 1975) = <b>15 925</b></div><div class="worked__math">(e) Year 30 is far outside the data (years 1 to 5), and the real increases vary from year to year, so the error can build up.</div>',
    markscheme: [
      'R1: (a) States that the differences (85, 93, 74, 88) are not all equal, so there is no common difference.',
      'M1: (b) Adds the four increases (or uses <span class="chem">1550 - 1210</span>) and divides by 4.',
      'A1: (b) Obtains the total increase <span class="chem">340</span>, so <span class="chem">340/4 = 85</span> (the given result itself earns no mark).',
      'M1: (c) Substitutes <span class="chem">n = 10</span>: <span class="chem">1210 + 9 × 85</span>.',
      'A1: (c) 1975 visitors.',
      'M1: (d) Uses <span class="chem">S_{10} = (10/2)(1210 + 1975)</span> or <span class="chem">(10/2)(2 × 1210 + 9 × 85)</span>.',
      'A1: (d) 15 925 visitors.',
      'R1: (e) Any valid reason, e.g. extrapolation far beyond the 5 years of data, or the real increases are not constant.'
    ],
    hints: [
      'Decode: real data are only roughly arithmetic. The question asks you to test for a common difference, build an arithmetic model from the average difference, and then use <span class="chem">u_n</span> and <span class="chem">S_n</span> of the model.',
      'For (a), work out the four differences between consecutive years.',
      'For (d), the model is arithmetic, so <span class="chem">S_{10} = (10/2)(u_1 + u_{10})</span> uses your answer to (c).'
    ],
    solution: '<p>Decoding: the context is a model that is "not perfectly arithmetic". The differences 85, 93, 74, 88 are not constant, so the data are not exactly arithmetic, but they are close to a constant 85 on average. Using <span class="chem">d = 85</span> gives <span class="chem">u_{10} = 1975</span> and <span class="chem">S_{10} = 5(1210 + 1975) = 15925</span>. Predictions far outside the data range (extrapolation) are less reliable.</p>'
  },
  {
    id: 't1-1-q027',
    topic: 't1-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.2, 1.3',
    stem: '<p>Priya is offered two jobs. In Offer A, the annual salary is 42 000 EUR in the first year and rises by 1500 EUR each year after that. In Offer B, the annual salary is 38 000 EUR in the first year and rises by 5% each year after that. Find the first year in which the annual salary in Offer B is greater than the annual salary in Offer A.</p>',
    answer: 8,
    tolerance: { abs: 0.01 },
    hints: [
      'Decode: Offer A is an arithmetic sequence and Offer B is a geometric sequence. You must find the least integer <span class="chem">n</span> for which the <span class="chem">n</span>-th term of B is bigger than the <span class="chem">n</span>-th term of A (salaries in one year, not totals).',
      'Write <span class="chem">A_n = 42000 + 1500(n - 1)</span> and <span class="chem">B_n = 38000(1.05)^{n-1}</span>. Note the power is <span class="chem">n - 1</span>: there is no rise in year 1.',
      'This inequality mixes a linear and an exponential expression, so solve it with the GDC: graph both and find the intersection, or compare a table of values.'
    ],
    solution: '<p>Decoding: "rises by 1500 each year" is arithmetic, "rises by 5% each year" is geometric, and "annual salary" means individual terms.</p><div class="worked__math"><i>A</i><sub><i>n</i></sub> = 42000 + 1500(<i>n</i> − 1)   <b>[M1]</b></div><div class="worked__math"><i>B</i><sub><i>n</i></sub> = 38000(1.05)<sup><i>n</i>−1</sup>   <b>[M1]</b></div><div class="worked__math">GDC table or graph of <i>B</i><sub><i>n</i></sub> − <i>A</i><sub><i>n</i></sub>   <b>[M1]</b></div><div class="worked__math">Year 7: <i>A</i> = 51 000, <i>B</i> = 50 923.63; year 8: <i>A</i> = 52 500, <i>B</i> = 53 469.82   <b>[A1]</b></div><div class="worked__math">First year: <b>year 8</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q028',
    topic: 't1-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.2, 1.3',
    stem: '<p>A sports club offers two membership plans. On Plan P, the fee is 300 GBP for the first year and goes up by 25 GBP every year after that. On Plan Q, the fee is 240 GBP for the first year and goes up by 8% every year after that. Ravi intends to stay a member for <span class="chem">N</span> complete years. Find the largest value of <span class="chem">N</span> for which the total amount Ravi pays on Plan Q is less than the total amount he would pay on Plan P.</p>',
    answer: 19,
    tolerance: { abs: 0.01 },
    hints: [
      'Decode: this time "total amount paid" means you compare sums, not single fees. Plan P gives an arithmetic series, Plan Q a geometric series. You want the largest <span class="chem">N</span> with <span class="chem">S_Q(N) &lt; S_P(N)</span>.',
      'Write <span class="chem">S_P = (N/2)(600 + 25(N - 1))</span> and <span class="chem">S_Q = 240(1.08^N - 1)/0.08</span>.',
      'Use a GDC table of both sums (or graph their difference) and look for the last year in which Plan Q is still cheaper.'
    ],
    solution: '<p>Decoding: "total amount" means sums; P is arithmetic (<span class="chem">u_1 = 300</span>, <span class="chem">d = 25</span>) and Q is geometric (<span class="chem">u_1 = 240</span>, <span class="chem">r = 1.08</span>). Q starts cheaper but grows faster.</p><div class="worked__math"><i>S</i><sub>P</sub>(<i>N</i>) = <span class="frac"><span><i>N</i></span><span>2</span></span>(600 + 25(<i>N</i> − 1))   <b>[M1]</b></div><div class="worked__math"><i>S</i><sub>Q</sub>(<i>N</i>) = <span class="frac"><span>240(1.08<sup><i>N</i></sup> − 1)</span><span>0.08</span></span>   <b>[M1]</b></div><div class="worked__math">GDC table: <i>N</i> = 19: <i>S</i><sub>P</sub> = 9975, <i>S</i><sub>Q</sub> = 9947.10   <b>[M1 A1]</b></div><div class="worked__math"><i>N</i> = 20: <i>S</i><sub>P</sub> = 10 750, <i>S</i><sub>Q</sub> = 10 982.87, so the largest value is <b><i>N</i> = 19</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q029',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.3',
    stem: '<p>Find the value of <span class="chem">Σ_{k=3}^{10} 5 × 2^k</span>.</p>',
    answer: 10200,
    tolerance: { abs: 0.01 },
    hints: [
      'Substitute <span class="chem">k = 3</span> and <span class="chem">k = 4</span> to find the first term and the common ratio.',
      'There are <span class="chem">10 - 3 + 1 = 8</span> terms. Use <span class="chem">S_n = u_1(r^n - 1)/(r - 1)</span>.'
    ],
    solution: '<div class="worked__math">First term (<i>k</i> = 3): 5 × 8 = 40; <i>r</i> = 2   <b>[A1]</b></div><div class="worked__math">Number of terms = 10 − 3 + 1 = 8   <b>[A1]</b></div><div class="worked__math"><i>S</i><sub>8</sub> = <span class="frac"><span>40(2<sup>8</sup> − 1)</span><span>2 − 1</span></span> = 40 × 255   <b>[M1]</b></div><div class="worked__math">= <b>10 200</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q030',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 3,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.3',
    stem: '<p>Calculate <span class="chem">Σ_{k=1}^{20} 150(0.93)^k</span>. Give your answer correct to 3 significant figures.</p>',
    answer: 1526.0525303438358,
    sigfigs: 3,
    hints: [
      'Careful: the power is <span class="chem">k</span>, not <span class="chem">k - 1</span>, so the first term (<span class="chem">k = 1</span>) is <span class="chem">150 × 0.93 = 139.5</span>.',
      'Use <span class="chem">S_{20} = 139.5(1 - 0.93^{20})/(1 - 0.93)</span>, or type the sum directly into the GDC with the <span class="mono">Σ</span> template.'
    ],
    solution: '<div class="worked__math"><i>u</i><sub>1</sub> = 139.5, <i>r</i> = 0.93, 20 terms   <b>[A1]</b></div><div class="worked__math"><i>S</i><sub>20</sub> = <span class="frac"><span>139.5(1 − 0.93<sup>20</sup>)</span><span>0.07</span></span>   <b>[M1]</b></div><div class="worked__math">= 1526.05… ≈ <b>1530</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q031',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.3',
    stem: '<p>A geometric sequence has positive terms. The third term is 7.2 and the seventh term is 1.2. Find the sum of the first 15 terms. Give your answer correct to 3 significant figures.</p>',
    answer: 48.787402350512096,
    sigfigs: 3,
    hints: [
      'From <span class="chem">u_3</span> to <span class="chem">u_7</span> you multiply by <span class="chem">r</span> four times: <span class="chem">r^4 = 1.2/7.2</span>.',
      'The terms are positive, so take the positive fourth root. Keep the full GDC value of <span class="chem">r</span> stored in memory.',
      'Find <span class="chem">u_1 = u_3 / r^2</span>, then <span class="chem">S_{15} = u_1(1 - r^{15})/(1 - r)</span>.'
    ],
    solution: '<div class="worked__math"><i>r</i><sup>4</sup> = <span class="frac"><span>1.2</span><span>7.2</span></span> = <span class="frac"><span>1</span><span>6</span></span>   <b>[M1]</b></div><div class="worked__math"><i>r</i> = 0.638943… (positive terms)   <b>[A1]</b></div><div class="worked__math"><i>u</i><sub>1</sub> = <span class="frac"><span>7.2</span><span><i>r</i><sup>2</sup></span></span> = 17.6363…   <b>[A1]</b></div><div class="worked__math"><i>S</i><sub>15</sub> = <span class="frac"><span>17.6363…(1 − <i>r</i><sup>15</sup>)</span><span>1 − <i>r</i></span></span>   <b>[M1]</b></div><div class="worked__math">= 48.787… ≈ <b>48.8</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q032',
    topic: 't1-1', level: 'sl', tier: 'challenge', type: 'short', marks: 12,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.3, 1.8',
    stem: '<p>A ball is dropped from a height of 3.2 m onto a hard floor. After each bounce, it rises to 78% of the height it fell from.</p><p>(a) Find the height the ball reaches after the third bounce. <strong>[2]</strong><br>(b) Find the number of the first bounce after which the ball rises to a height of less than 10 cm. <strong>[3]</strong><br>(c) Find the total vertical distance the ball has travelled from the moment it is dropped until it hits the floor for the 12th time. <strong>[4]</strong><br>(d) Show that, however long the ball keeps bouncing, the total vertical distance it travels is less than 26 m. <strong>[3]</strong></p>',
    answer: '<div class="worked__math">(a) 3.2 × 0.78<sup>3</sup> = 1.518… ≈ <b>1.52 m</b></div><div class="worked__math">(b) 3.2 × 0.78<sup><i>k</i></sup> &lt; 0.1  ⇒  <i>k</i> &gt; 13.95 (after bounce 13: 0.127 m; after bounce 14: 0.0987 m), so <b>bounce 14</b></div><div class="worked__math">(c) <i>D</i> = 3.2 + 2(2.496 + 2.496 × 0.78 + … ) with 11 terms = 3.2 + 2 × <span class="frac"><span>2.496(1 − 0.78<sup>11</sup>)</span><span>0.22</span></span> = 24.4155… ≈ <b>24.4 m</b></div><div class="worked__math">(d) 3.2 + 2 × <span class="frac"><span>2.496</span><span>0.22</span></span> = 25.89… &lt; 26</div>',
    markscheme: [
      'M1: (a) Uses <span class="chem">3.2 × 0.78^3</span>.',
      'A1: (a) 1.52 m (1.5185…).',
      'M1: (b) Converts 10 cm to 0.1 m and sets up <span class="chem">3.2 × 0.78^k &lt; 0.1</span>.',
      'A1: (b) <span class="chem">k &gt; 13.95</span>, or heights 0.127 m (bounce 13) and 0.0987 m (bounce 14).',
      'A1: (b) Bounce 14.',
      'M1: (c) Recognizes that the distance is the first drop 3.2 m plus twice each rebound height (up and down), with 11 rebounds before the 12th impact.',
      'A1: (c) Geometric series of rebound heights with first term 2.496, ratio 0.78 and 11 terms.',
      'M1: (c) Uses <span class="chem">3.2 + 2 × 2.496(1 - 0.78^{11})/(1 - 0.78)</span>.',
      'A1: (c) 24.4 m (24.415…).',
      'M1: (d) Uses the sum to infinity of the rebound heights, <span class="chem">2.496/(1 - 0.78) = 11.345…</span>.',
      'A1: (d) Total distance <span class="chem">3.2 + 2 × 11.345… = 25.89…</span>.',
      'R1: (d) The total distance after any number of bounces is a partial sum that increases towards 25.89… m, so it is always less than 26 m.'
    ],
    hints: [
      'Decode: the rebound heights form a geometric sequence <span class="chem">3.2 × 0.78^k</span>. Part (b) hides a unit change (10 cm = 0.1 m). In part (c), the ball travels each rebound height twice (up and down), but the first 3.2 m only once.',
      'Count carefully for (c): the 1st impact ends the first drop; between the 1st and 12th impacts there are 11 rebounds.',
      'For (d), replace the finite sum of rebound heights by the sum to infinity, since <span class="chem">|0.78| &lt; 1</span>.'
    ],
    solution: '<p>Decoding: "rises to 78% of the height it fell from" is a geometric sequence of heights <span class="chem">h_k = 3.2(0.78)^k</span>. The distance is not a single geometric series. It is the first drop plus two copies of the rebound series. In (b), use metres throughout. In (c), the 12th impact comes after 11 rebounds, giving <span class="chem">D = 3.2 + 2 × 10.6078… = 24.4 m</span>. In (d), the limit is <span class="chem">3.2 + 2 × 2.496/0.22 = 25.89 m</span>, which bounds every partial total.</p>'
  },
  {
    id: 't1-1-q033',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.3',
    stem: '<p>A geometric series has first term 40 and common ratio 0.85. Find the least number of terms for which the sum of the series exceeds 250.</p>',
    answer: 18,
    tolerance: { abs: 0.01 },
    hints: [
      'Set up <span class="chem">40(1 - 0.85^n)/(1 - 0.85) &gt; 250</span>.',
      'Solve with the GDC (graph or table of <span class="chem">S_n</span>), or rearrange to <span class="chem">0.85^n &lt; 0.0625</span> and use logarithms. Dividing by <span class="chem">ln 0.85 &lt; 0</span> reverses the inequality.'
    ],
    solution: '<div class="worked__math"><span class="frac"><span>40(1 − 0.85<sup><i>n</i></sup>)</span><span>0.15</span></span> &gt; 250   <b>[M1]</b></div><div class="worked__math">0.85<sup><i>n</i></sup> &lt; 0.0625 (or table: <i>S</i><sub>17</sub> = 249.84, <i>S</i><sub>18</sub> = 252.36)   <b>[A1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln 0.0625</span><span>ln 0.85</span></span> ≈ 17.06   <b>[M1]</b></div><div class="worked__math">Least number of terms = <b>18</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q034',
    topic: 't1-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.3, 1.8',
    stem: '<p>A charity starts a fundraising campaign with a target of 7000 USD. It receives 500 USD in the first week. In each following week it receives 6% less than in the week before. The campaign runs until the target is reached. Find the week in which the target is reached.</p>',
    answer: 30,
    tolerance: { abs: 0.01 },
    hints: [
      'Decode: the weekly amounts form a geometric sequence with <span class="chem">r = 0.94</span>, and "target reached" is about the running total <span class="chem">S_n</span>. Check first that the target can be reached at all: since <span class="chem">r &lt; 1</span>, the total can never exceed <span class="chem">S_infty</span>.',
      '<span class="chem">S_infty = 500/0.06 ≈ 8333</span>, which is more than 7000, so the target is reached eventually. Now solve <span class="chem">500(1 - 0.94^n)/0.06 &gt;= 7000</span>.',
      'Rearrange to <span class="chem">0.94^n &lt;= 0.16</span>, or use a GDC table of <span class="chem">S_n</span>.'
    ],
    solution: '<p>Decoding: a weekly amount that falls by a fixed percentage is geometric (<span class="chem">u_1 = 500</span>, <span class="chem">r = 0.94</span>), and the target refers to the total.</p><div class="worked__math"><i>S</i><sub>∞</sub> = <span class="frac"><span>500</span><span>0.06</span></span> = 8333.33 &gt; 7000, so the target can be reached   <b>[R1]</b></div><div class="worked__math"><span class="frac"><span>500(1 − 0.94<sup><i>n</i></sup>)</span><span>0.06</span></span> ≥ 7000   <b>[M1]</b></div><div class="worked__math">0.94<sup><i>n</i></sup> ≤ 0.16   <b>[A1]</b></div><div class="worked__math"><i>n</i> ≥ 29.6 (table: <i>S</i><sub>29</sub> = 6948.09, <i>S</i><sub>30</sub> = 7031.20)   <b>[A1]</b></div><div class="worked__math">The target is reached in <b>week 30</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q035',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'short', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.3',
    stem: '<p>The sum of the first <span class="chem">n</span> terms of a sequence is <span class="chem">S_n = 3^{n+1} - 3</span>, for <span class="chem">n &gt;= 1</span>.</p><p>(a) Write down the value of <span class="chem">u_1</span>. <strong>[1]</strong><br>(b) Show that <span class="chem">u_n = 2 × 3^n</span>. <strong>[3]</strong><br>(c) Hence deduce that the sequence is geometric, and write down its common ratio. <strong>[2]</strong></p>',
    answer: '<div class="worked__math">(a) <i>u</i><sub>1</sub> = <i>S</i><sub>1</sub> = 9 − 3 = <b>6</b></div><div class="worked__math">(b) <i>u</i><sub><i>n</i></sub> = <i>S</i><sub><i>n</i></sub> − <i>S</i><sub><i>n</i>−1</sub> = (3<sup><i>n</i>+1</sup> − 3) − (3<sup><i>n</i></sup> − 3) = 3<sup><i>n</i></sup>(3 − 1) = 2 × 3<sup><i>n</i></sup></div><div class="worked__math">(c) <span class="frac"><span><i>u</i><sub><i>n</i>+1</sub></span><span><i>u</i><sub><i>n</i></sub></span></span> = <span class="frac"><span>2 × 3<sup><i>n</i>+1</sup></span><span>2 × 3<sup><i>n</i></sup></span></span> = 3, a constant, so the sequence is geometric with <b><i>r</i> = 3</b></div>',
    markscheme: [
      'A1: (a) <span class="chem">u_1 = 6</span>.',
      'M1: (b) Uses <span class="chem">u_n = S_n - S_{n-1}</span>.',
      'A1: (b) <span class="chem">(3^{n+1} - 3) - (3^n - 3) = 3^{n+1} - 3^n</span>.',
      'A1: (b) Factorizes <span class="chem">3^n(3 - 1)</span>, leading to the given result <span class="chem">2 × 3^n</span> (the given line itself earns no mark).',
      'R1: (c) Shows that <span class="chem">u_{n+1}/u_n = 3</span>, which does not depend on <span class="chem">n</span>, so the sequence is geometric.',
      'A1: (c) <span class="chem">r = 3</span>.'
    ],
    hints: [
      'Decode: you are given the sum formula, not the term formula. The <span class="chem">n</span>-th term is what is added to go from <span class="chem">S_{n-1}</span> to <span class="chem">S_n</span>.',
      'Write <span class="chem">u_n = S_n - S_{n-1}</span> and replace <span class="chem">n</span> by <span class="chem">n - 1</span> carefully: <span class="chem">S_{n-1} = 3^n - 3</span>.',
      'To deduce "geometric", show that <span class="chem">u_{n+1}/u_n</span> is a constant.'
    ],
    solution: '<p>Decoding: a formula for <span class="chem">S_n</span> is given, so the terms come from differences of sums. <span class="chem">u_n = S_n - S_{n-1} = 3^{n+1} - 3^n = 2 × 3^n</span> (this also gives <span class="chem">u_1 = 6</span>, matching <span class="chem">S_1</span>). The ratio of consecutive terms is always 3, so the sequence is geometric with <span class="chem">r = 3</span>.</p>'
  },
  {
    id: 't1-1-q036',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.2, 1.3',
    stem: '<p>Calculate <span class="chem">Σ_{k=1}^{25} (3k + 2(1.1)^k)</span>. Give your answer correct to 3 significant figures.</p>',
    answer: 1191.3635307545444,
    sigfigs: 3,
    hints: [
      'The sum splits into two sums: <span class="chem">Σ 3k</span> (arithmetic) plus <span class="chem">Σ 2(1.1)^k</span> (geometric).',
      'Arithmetic part: 25 terms from 3 to 75. Geometric part: first term <span class="chem">2.2</span>, ratio 1.1, 25 terms. Or enter the whole sum with the GDC <span class="mono">Σ</span> template.'
    ],
    solution: '<div class="worked__math">Σ 3<i>k</i> = <span class="frac"><span>25</span><span>2</span></span>(3 + 75) = 975   <b>[M1 A1]</b></div><div class="worked__math">Σ 2(1.1)<sup><i>k</i></sup> = <span class="frac"><span>2.2(1.1<sup>25</sup> − 1)</span><span>0.1</span></span> = 216.363…   <b>[A1]</b></div><div class="worked__math">Total = 1191.36… ≈ <b>1190</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q037',
    topic: 't1-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.8',
    stem: '<p>The number <span class="chem">x = 0.2454545…</span> has the block of digits "45" repeating for ever after the first decimal place. By writing <span class="chem">x</span> using an infinite geometric series, find the exact value of <span class="chem">x</span> as a fraction in its lowest terms.</p>',
    answer: 0.24545454545454545,
    exact: true,
    answerInput: '27/110',
    hints: [
      'Decode: a recurring decimal is a sum of infinitely many pieces that shrink by the same factor. Here the non-repeating part 0.2 must be kept separate from the repeating part.',
      'Write <span class="chem">x = 0.2 + 0.045 + 0.00045 + 0.0000045 + …</span>. After 0.2, each piece is the previous one multiplied by <span class="chem">0.01</span>.',
      'Sum the geometric part with <span class="chem">S_infty = 0.045/(1 - 0.01)</span>, then add 0.2 and simplify.'
    ],
    solution: '<p>Decoding: the repeating block "45" occupies two decimal places, so the ratio is <span class="chem">10^{-2}</span>. The leading 2 does not repeat, so it is not part of the series.</p><div class="worked__math"><i>x</i> = 0.2 + (0.045 + 0.00045 + …)   <b>[M1]</b></div><div class="worked__math">Geometric part: <i>u</i><sub>1</sub> = 0.045, <i>r</i> = 0.01   <b>[A1]</b></div><div class="worked__math"><i>S</i><sub>∞</sub> = <span class="frac"><span>0.045</span><span>0.99</span></span>   <b>[M1]</b></div><div class="worked__math">= <span class="frac"><span>45</span><span>990</span></span> = <span class="frac"><span>1</span><span>22</span></span>   <b>[A1]</b></div><div class="worked__math"><i>x</i> = <span class="frac"><span>1</span><span>5</span></span> + <span class="frac"><span>1</span><span>22</span></span> = <b><span class="frac"><span>27</span><span>110</span></span></b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q038',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.8',
    stem: '<p>The sum to infinity of a geometric series is three times its first term. The second term of the series is 8. Find the sum to infinity.</p>',
    answer: 36,
    tolerance: { abs: 0.01 },
    hints: [
      'Decode: "three times its first term" is the equation <span class="chem">u_1/(1 - r) = 3u_1</span>. It gives <span class="chem">r</span> without knowing <span class="chem">u_1</span>.',
      'Divide both sides by <span class="chem">u_1</span> (it cannot be 0) to get <span class="chem">1 - r = 1/3</span>.',
      'Then use <span class="chem">u_2 = u_1 r = 8</span> to find <span class="chem">u_1</span>.'
    ],
    solution: '<div class="worked__math"><span class="frac"><span><i>u</i><sub>1</sub></span><span>1 − <i>r</i></span></span> = 3<i>u</i><sub>1</sub>  ⇒  1 − <i>r</i> = <span class="frac"><span>1</span><span>3</span></span>  ⇒  <i>r</i> = <span class="frac"><span>2</span><span>3</span></span>   <b>[M1 A1]</b></div><div class="worked__math"><i>u</i><sub>1</sub> = <span class="frac"><span>8</span><span>2/3</span></span> = 12   <b>[A1]</b></div><div class="worked__math"><i>S</i><sub>∞</sub> = 3 × 12 = <b>36</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q039',
    topic: 't1-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.8',
    stem: '<p>A convergent geometric series has sum to infinity 20. A second series is formed by squaring every term of the first series; its sum to infinity is 80. Find the exact value of the first term of the original series.</p>',
    answer: 6.666666666666667,
    exact: true,
    answerInput: '20/3',
    hints: [
      'Decode: squaring each term of <span class="chem">u_1, u_1 r, u_1 r^2, …</span> gives another geometric series, <span class="chem">u_1^2, u_1^2 r^2, …</span>, with first term <span class="chem">u_1^2</span> and ratio <span class="chem">r^2</span>. You get two equations in <span class="chem">u_1</span> and <span class="chem">r</span>.',
      'The equations are <span class="chem">u_1/(1 - r) = 20</span> and <span class="chem">u_1^2/(1 - r^2) = 80</span>. Factorize <span class="chem">1 - r^2 = (1 - r)(1 + r)</span>.',
      'Dividing the second equation by the first gives <span class="chem">u_1/(1 + r) = 4</span>. Now solve the two linear equations.'
    ],
    solution: '<p>Decoding: "squaring every term" gives a new geometric series with ratio <span class="chem">r^2</span>; it converges because <span class="chem">|r| &lt; 1</span>.</p><div class="worked__math">New series: first term <i>u</i><sub>1</sub><sup>2</sup>, ratio <i>r</i><sup>2</sup>   <b>[M1]</b></div><div class="worked__math"><span class="frac"><span><i>u</i><sub>1</sub><sup>2</sup></span><span>1 − <i>r</i><sup>2</sup></span></span> = 80 and <span class="frac"><span><i>u</i><sub>1</sub></span><span>1 − <i>r</i></span></span> = 20   <b>[A1]</b></div><div class="worked__math">Dividing, using 1 − <i>r</i><sup>2</sup> = (1 − <i>r</i>)(1 + <i>r</i>): <span class="frac"><span><i>u</i><sub>1</sub></span><span>1 + <i>r</i></span></span> = 4   <b>[M1]</b></div><div class="worked__math">20(1 − <i>r</i>) = 4(1 + <i>r</i>)  ⇒  <i>r</i> = <span class="frac"><span>2</span><span>3</span></span>   <b>[A1]</b></div><div class="worked__math">|<i>r</i>| &lt; 1, so both series do converge   <b>[R1]</b></div><div class="worked__math"><i>u</i><sub>1</sub> = 20(1 − <span class="frac"><span>2</span><span>3</span></span>) = <b><span class="frac"><span>20</span><span>3</span></span></b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q040',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'short', marks: 8,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.3, 1.8',
    stem: '<p>A geometric series has first term 14.6 and second term 11.388.</p><p>(a) Write down the common ratio. <strong>[1]</strong><br>(b) Explain why the series has a sum to infinity, and find it. <strong>[3]</strong><br>(c) Find the least value of <span class="chem">n</span> for which <span class="chem">S_infty - S_n &lt; 0.5</span>. <strong>[4]</strong></p>',
    answer: '<div class="worked__math">(a) <i>r</i> = <span class="frac"><span>11.388</span><span>14.6</span></span> = <b>0.78</b></div><div class="worked__math">(b) |<i>r</i>| = 0.78 &lt; 1, so the series converges. <i>S</i><sub>∞</sub> = <span class="frac"><span>14.6</span><span>1 − 0.78</span></span> = 66.3636… ≈ <b>66.4</b></div><div class="worked__math">(c) <i>S</i><sub>∞</sub> − <i>S</i><sub><i>n</i></sub> = <i>S</i><sub>∞</sub> × 0.78<sup><i>n</i></sup> &lt; 0.5  ⇒  0.78<sup><i>n</i></sup> &lt; 0.007534…  ⇒  <i>n</i> &gt; 19.67…, so <b><i>n</i> = 20</b></div>',
    markscheme: [
      'A1: (a) <span class="chem">r = 0.78</span>.',
      'R1: (b) <span class="chem">|r| &lt; 1</span>, so the series converges.',
      'M1: (b) Uses <span class="chem">S_infty = 14.6/(1 - 0.78)</span>.',
      'A1: (b) <span class="chem">S_infty = 66.4</span> (66.3636…).',
      'M1: (c) Writes <span class="chem">S_infty - S_n = S_infty r^n</span>, or sets up <span class="chem">66.36… - 14.6(1 - 0.78^n)/0.22 &lt; 0.5</span>.',
      'A1: (c) <span class="chem">0.78^n &lt; 0.5/66.36… = 0.00753…</span> (or a correct GDC graph/table).',
      'A1: (c) <span class="chem">n &gt; 19.67</span> (or <span class="chem">S_infty - S_{19} = 0.591</span> and <span class="chem">S_infty - S_{20} = 0.461</span>).',
      'A1: (c) <span class="chem">n = 20</span>.'
    ],
    hints: [
      'Divide the second term by the first to get <span class="chem">r</span>.',
      'Use the unrounded value of <span class="chem">S_infty</span> in part (c). The gap <span class="chem">S_infty - S_n</span> simplifies to <span class="chem">S_infty r^n</span>: it is the sum of all the terms after the <span class="chem">n</span>-th.',
      'Solve <span class="chem">66.36… × 0.78^n &lt; 0.5</span> with logarithms or a GDC table, and round up.'
    ],
    solution: '<p><span class="chem">S_infty - S_n = u_1/(1 - r) - u_1(1 - r^n)/(1 - r) = u_1 r^n/(1 - r) = S_infty r^n</span>. So we need <span class="chem">0.78^n &lt; 0.5/66.3636… ≈ 0.007534</span>, giving <span class="chem">n &gt; ln(0.007534)/ln(0.78) ≈ 19.67</span>. The least integer is <span class="chem">n = 20</span>.</p>'
  },
  {
    id: 't1-1-q041',
    topic: 't1-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.8',
    stem: '<p>A square has side length 10 cm. A second square is drawn by joining the midpoints of the sides of the first square. A third square is drawn by joining the midpoints of the sides of the second square, and the process continues for ever. Find the exact total of the perimeters of all the squares. Give your answer in the form <span class="chem">a + b sqrt(2)</span>, where <span class="chem">a, b</span> are integers.</p>',
    answer: 136.5685424949238,
    exact: true,
    answerInput: '80+40sqrt(2)',
    unit: 'cm',
    hints: [
      'Decode: the perimeters form an infinite geometric series. The task is to find the ratio from the geometry, then use <span class="chem">S_infty</span> and simplify the surd.',
      'The second square’s side joins two midpoints 5 cm from a corner, so its length is <span class="chem">sqrt(5^2 + 5^2) = 5 sqrt(2)</span>. Each side is <span class="chem">1/sqrt(2)</span> times the previous one.',
      'Sum <span class="chem">40 + 40/sqrt(2) + …</span> with <span class="chem">S_infty = 40/(1 - 1/sqrt(2))</span>, then rationalize the denominator.'
    ],
    solution: '<p>Decoding: "continues for ever" signals a sum to infinity; the common ratio comes from Pythagoras.</p><div class="worked__math">Second side = √(5<sup>2</sup> + 5<sup>2</sup>) = 5√2, so <i>r</i> = <span class="frac"><span>5√2</span><span>10</span></span> = <span class="frac"><span>1</span><span>√2</span></span>   <b>[M1 A1]</b></div><div class="worked__math"><i>S</i><sub>∞</sub> = <span class="frac"><span>40</span><span>1 − 1/√2</span></span> = <span class="frac"><span>40√2</span><span>√2 − 1</span></span>   <b>[M1]</b></div><div class="worked__math">= <span class="frac"><span>40√2(√2 + 1)</span><span>(√2 − 1)(√2 + 1)</span></span>   <b>[M1]</b></div><div class="worked__math">= <b>80 + 40√2 cm</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q042',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.4',
    stem: '<p>Kemal invests 12 000 TRY in an account that pays a nominal annual interest rate of 3.6%, compounded monthly. Find the least number of complete months after which the value of the investment exceeds 15 000 TRY.</p>',
    answer: 75,
    tolerance: { abs: 0.01 },
    hints: [
      'Monthly compounding: each month the value is multiplied by <span class="chem">1 + 3.6/1200 = 1.003</span>.',
      'Solve <span class="chem">12000(1.003)^m &gt; 15000</span>, where <span class="chem">m</span> is the number of months. Use logarithms, a GDC table, or the Finance Solver (<span class="mono">I% = 3.6, PV = −12000, FV = 15000, P/Y = C/Y = 12</span>, solve for N).',
      'The root is not a whole number. Round up.'
    ],
    solution: '<div class="worked__math">12000(1 + <span class="frac"><span>3.6</span><span>1200</span></span>)<sup><i>m</i></sup> &gt; 15000  ⇒  1.003<sup><i>m</i></sup> &gt; 1.25   <b>[M1 A1]</b></div><div class="worked__math"><i>m</i> &gt; <span class="frac"><span>ln 1.25</span><span>ln 1.003</span></span> ≈ 74.49   <b>[A1]</b></div><div class="worked__math">Least number of complete months = <b>75</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q043',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.4',
    stem: '<p>An investment of 8000 CHF grows to 10 500 CHF after 6 years, with interest compounded quarterly at a fixed nominal annual rate of <span class="chem">r%</span>. Find the value of <span class="chem">r</span>. Give your answer correct to 3 significant figures.</p>',
    answer: 4.558002212703727,
    sigfigs: 3,
    hints: [
      'Quarterly compounding over 6 years: <span class="chem">k = 4</span> and <span class="chem">kn = 24</span> periods.',
      'Solve <span class="chem">8000(1 + r/400)^{24} = 10500</span> for <span class="chem">r</span>, or use the Finance Solver with <span class="mono">N = 24, PV = −8000, FV = 10500, P/Y = C/Y = 4</span> and solve for <span class="mono">I%</span>.'
    ],
    solution: '<div class="worked__math">8000(1 + <span class="frac"><span><i>r</i></span><span>400</span></span>)<sup>24</sup> = 10500   <b>[M1 A1]</b></div><div class="worked__math">1 + <span class="frac"><span><i>r</i></span><span>400</span></span> = 1.3125<sup>1/24</sup> = 1.011395…   <b>[M1]</b></div><div class="worked__math"><i>r</i> = 4.558… ≈ <b>4.56</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q044',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.4',
    stem: '<p>Sofia has 5000 EUR to invest for 10 years. Account X pays a nominal annual rate of 4.2%, compounded monthly. Account Y pays 4.3% per year, compounded annually. Find how much more the better of the two accounts is worth after 10 years. Give your answer correct to 2 decimal places.</p>',
    answer: 13.281343383628155,
    dp: 2,
    unit: 'EUR',
    hints: [
      'Decode: the account with the higher rate is not automatically better, because the other one compounds more often. Find both final values, then subtract the smaller from the larger.',
      'Account X: <span class="chem">5000(1 + 4.2/1200)^{120}</span>. Account Y: <span class="chem">5000(1.043)^{10}</span>.',
      'Keep full GDC values and round only the final difference.'
    ],
    solution: '<div class="worked__math">X: 5000(1 + <span class="frac"><span>4.2</span><span>1200</span></span>)<sup>120</sup> = 7604.229…   <b>[M1 A1]</b></div><div class="worked__math">Y: 5000(1.043)<sup>10</sup> = 7617.510…   <b>[A1]</b></div><div class="worked__math">Y is better by 7617.510… − 7604.229… = 13.281…   <b>[M1]</b></div><div class="worked__math">≈ <b>13.28 EUR</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q045',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.4',
    stem: '<p>Omar invests 20 000 USD for 7 years at a nominal annual interest rate of 5.1%, compounded half-yearly. Inflation is expected to be 2.8% per year, so an amount <span class="chem">V</span> in 7 years’ time will be worth <span class="chem">V / 1.028^7</span> in today’s money. Find the real value of Omar’s investment after 7 years, in today’s money. Give your answer correct to 2 decimal places.</p>',
    answer: 23451.871123297682,
    dp: 2,
    unit: 'USD',
    hints: [
      'First find the future value: half-yearly means <span class="chem">k = 2</span>, so <span class="chem">V = 20000(1 + 5.1/200)^{14}</span>.',
      'Then remove the effect of inflation by dividing by <span class="chem">1.028^7</span>. Do not round <span class="chem">V</span> before dividing.'
    ],
    solution: '<div class="worked__math"><i>V</i> = 20000(1 + <span class="frac"><span>5.1</span><span>200</span></span>)<sup>14</sup> = 28453.08…   <b>[M1 A1]</b></div><div class="worked__math">Real value = <span class="frac"><span>28453.08…</span><span>1.028<sup>7</sup></span></span>   <b>[M1]</b></div><div class="worked__math">= 23451.871… ≈ <b>23 451.87 USD</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q046',
    topic: 't1-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.4',
    stem: '<p>A website lists a five-year-old car for 14 500 GBP. The same model cost 32 000 GBP when new. Assume that the car has lost the same percentage of its value every year. Find this annual percentage rate of depreciation. Give your answer correct to 3 significant figures.</p>',
    answer: 14.642123020207087,
    sigfigs: 3,
    unit: '%',
    hints: [
      'Decode: "the same percentage every year" is annual depreciation, a geometric model. The unknown is the rate <span class="chem">r</span>, not the final value.',
      'Solve <span class="chem">32000(1 - r/100)^5 = 14500</span>, or use the Finance Solver with <span class="mono">N = 5, PV = −32000, FV = 14500, PMT = 0</span>, solving for <span class="mono">I%</span> (it will be negative).',
      'The depreciation rate is the size of the negative <span class="mono">I%</span>, i.e. <span class="chem">100(1 - (14500/32000)^{1/5})</span>.'
    ],
    solution: '<p>Decoding: annual depreciation at <span class="chem">r%</span> multiplies the value by <span class="chem">(1 - r/100)</span> each year, so the 5-year multiplier is <span class="chem">14500/32000</span>.</p><div class="worked__math">32000(1 − <span class="frac"><span><i>r</i></span><span>100</span></span>)<sup>5</sup> = 14500   <b>[M1]</b></div><div class="worked__math">1 − <span class="frac"><span><i>r</i></span><span>100</span></span> = (0.453125)<sup>1/5</sup> = 0.853578…   <b>[M1 A1]</b></div><div class="worked__math"><i>r</i> = 14.64… ≈ <b>14.6%</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q047',
    topic: 't1-1', level: 'sl', tier: 'challenge', type: 'short', marks: 8,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.4',
    stem: '<p>Ana invests 6000 EUR at 4.5% per year, compounded annually. On the same day, Ben invests 7500 EUR at a nominal annual rate of 3.2%, compounded monthly.</p><p>(a) Find the value of Ana’s investment after 10 years. Give your answer correct to 2 decimal places. <strong>[2]</strong><br>(b) Find the value of Ben’s investment after 10 years. Give your answer correct to 2 decimal places. <strong>[2]</strong><br>(c) Ana’s investment will eventually be worth more than Ben’s. Find the least number of complete years after which this happens. <strong>[4]</strong></p>',
    answer: '<div class="worked__math">(a) 6000 × 1.045<sup>10</sup> = <b>9317.82 EUR</b></div><div class="worked__math">(b) 7500(1 + 0.032/12)<sup>120</sup> = <b>10 324.06 EUR</b></div><div class="worked__math">(c) 6000(1.045)<sup><i>n</i></sup> &gt; 7500(1 + 0.032/12)<sup>12<i>n</i></sup>: intersection at <i>n</i> ≈ 18.5. After 18 years: 13 250.87 &lt; 13 331.59; after 19 years: 13 847.16 &gt; 13 764.51. So <b>19 years</b></div>',
    markscheme: [
      'M1: (a) Uses <span class="chem">6000(1.045)^{10}</span>.',
      'A1: (a) 9317.82 EUR.',
      'M1: (b) Uses <span class="chem">7500(1 + 3.2/1200)^{120}</span> (monthly: 120 periods).',
      'A1: (b) 10 324.06 EUR.',
      'M1: (c) Sets up <span class="chem">6000(1.045)^n &gt; 7500(1 + 0.032/12)^{12n}</span> (an equation is acceptable).',
      'M1: (c) Uses the GDC to solve: graph intersection or table of both values.',
      'A1: (c) <span class="chem">n ≈ 18.5</span>, or values after 18 years (13 250.87, 13 331.59) and 19 years (13 847.16, 13 764.51).',
      'A1: (c) 19 years.'
    ],
    hints: [
      'Decode: two compound-interest models with different compounding periods. Part (c) asks for the first whole number of years after which Ana’s value is bigger, so it is an inequality to solve with the GDC.',
      'Ben’s value after <span class="chem">n</span> years is <span class="chem">7500(1 + 0.032/12)^{12n}</span>; his monthly compounding makes the exponent <span class="chem">12n</span>.',
      'Graph <span class="chem">y = 6000(1.045)^x</span> and <span class="chem">y = 7500(1.0026667)^{12x}</span> and find the intersection, then round up.'
    ],
    solution: '<p>Decoding: Ana starts lower but has the higher effective rate, so her curve overtakes Ben’s. The intersection of the two models is at <span class="chem">n ≈ 18.5</span>; since values are compared after complete years, check 18 and 19. Ana is first ahead after <strong>19</strong> years.</p>'
  },
  {
    id: 't1-1-q048',
    topic: 't1-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.4',
    stem: '<p>Mei keeps savings of 15 000 SGD in an account that pays 2.2% per year, compounded annually. Inflation is 3.1% per year, so an amount <span class="chem">V</span> in <span class="chem">n</span> years’ time is worth <span class="chem">V / 1.031^n</span> in today’s money. Mei makes no deposits or withdrawals. Find the least number of complete years after which the real value of her savings, in today’s money, is below 13 000 SGD.</p>',
    answer: 17,
    tolerance: { abs: 0.01 },
    hints: [
      'Decode: the account balance grows, but inflation grows faster, so the <em>real</em> value falls. You need the least whole <span class="chem">n</span> for which the real value is below 13 000.',
      'Real value after <span class="chem">n</span> years <span class="chem">= 15000(1.022)^n / 1.031^n = 15000(1.022/1.031)^n</span>.',
      'Solve <span class="chem">15000(1.022/1.031)^n &lt; 13000</span> with logarithms or a GDC table. The base is less than 1, so dividing by its logarithm reverses the inequality.'
    ],
    solution: '<p>Decoding: "real value" means the balance adjusted for inflation; it falls because 2.2% &lt; 3.1%.</p><div class="worked__math">Real value = <span class="frac"><span>15000(1.022)<sup><i>n</i></sup></span><span>1.031<sup><i>n</i></sup></span></span>   <b>[M1]</b></div><div class="worked__math">15000(1.022/1.031)<sup><i>n</i></sup> &lt; 13000   <b>[M1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln(13/15)</span><span>ln(1.022/1.031)</span></span> ≈ 16.3   <b>[A1]</b></div><div class="worked__math">Check: after 16 years 13 036.68; after 17 years 12 922.88   <b>[A1]</b></div><div class="worked__math">Least number of complete years = <b>17</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q049',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'short', marks: 8,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.4',
    stem: '<p>A company buys a machine for 85 000 AUD. The value of the machine depreciates by 12% each year.</p><p>(a) Find the value of the machine after 3 years. Give your answer correct to 2 decimal places. <strong>[2]</strong><br>(b) Find the number of complete years after which the value of the machine first falls below 30 000 AUD. <strong>[3]</strong><br>At the same time as it buys the machine, the company invests 40 000 AUD at a nominal annual rate of 3.9%, compounded monthly.<br>(c) Find the least number of complete years after which the investment is worth more than the machine. <strong>[3]</strong></p>',
    answer: '<div class="worked__math">(a) 85000 × 0.88<sup>3</sup> = <b>57 925.12 AUD</b></div><div class="worked__math">(b) 85000 × 0.88<sup><i>n</i></sup> &lt; 30000  ⇒  <i>n</i> &gt; 8.15; after 8 years 30 568.93, after 9 years 26 900.66, so <b>9 years</b></div><div class="worked__math">(c) 40000(1 + 0.039/12)<sup>12<i>n</i></sup> &gt; 85000 × 0.88<sup><i>n</i></sup>  ⇒  <i>n</i> &gt; 4.52; after 4 years 46 741.22 &lt; 50 974.11, after 5 years 48 597.07 &gt; 44 857.21, so <b>5 years</b></div>',
    markscheme: [
      'M1: (a) Uses <span class="chem">85000 × 0.88^3</span> (or the Finance Solver with <span class="mono">I% = −12</span>).',
      'A1: (a) 57 925.12 AUD.',
      'M1: (b) Sets up <span class="chem">85000 × 0.88^n &lt; 30000</span> (an equation is acceptable).',
      'A1: (b) <span class="chem">n &gt; 8.15</span>, or the values after 8 and 9 years (30 568.93 and 26 900.66).',
      'A1: (b) 9 years.',
      'M1: (c) Sets up <span class="chem">40000(1 + 0.039/12)^{12n} &gt; 85000 × 0.88^n</span> (an equation is acceptable).',
      'A1: (c) Uses the GDC: intersection at <span class="chem">n ≈ 4.52</span>, or both values after 4 and 5 years.',
      'A1: (c) 5 years.'
    ],
    hints: [
      'Decode: (a) and (b) are depreciation (multiplier 0.88 per year); (c) compares a growing investment with a shrinking value, and asks for the first whole year in which the investment is bigger.',
      'For (b) and (c), use a GDC table with <span class="chem">x</span> = number of years, or graph both sides and find the intersection.',
      'For (c), the investment after <span class="chem">n</span> years is <span class="chem">40000(1 + 0.039/12)^{12n}</span>: monthly compounding means <span class="chem">12n</span> periods.'
    ],
    solution: '<p>Decoding: there are two models, depreciation <span class="chem">M(n) = 85000(0.88)^n</span> and monthly compound growth <span class="chem">I(n) = 40000(1.00325)^{12n}</span>. For (b), <span class="chem">n &gt; ln(30/85)/ln(0.88) ≈ 8.15</span>, so the answer is 9 years. For (c), the graphs meet at <span class="chem">n ≈ 4.52</span>, so the investment is first worth more after 5 complete years.</p>'
  },
  {
    id: 't1-1-q050',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 3,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.4',
    stem: '<p>Lena wants to have 25 000 EUR in 8 years’ time. She finds an account paying a nominal annual interest rate of 4.75%, compounded quarterly. Find the amount she must invest now. Give your answer correct to 2 decimal places.</p>',
    answer: 17134.849472243157,
    dp: 2,
    unit: 'EUR',
    hints: [
      'This time the future value is known and the present value is unknown: <span class="chem">PV(1 + 4.75/400)^{32} = 25000</span>.',
      'Divide, or use the Finance Solver with <span class="mono">N = 32, I% = 4.75, FV = 25000, P/Y = C/Y = 4</span>, solving for PV (it shows as negative, an outflow).'
    ],
    solution: '<div class="worked__math"><i>PV</i>(1 + <span class="frac"><span>4.75</span><span>400</span></span>)<sup>32</sup> = 25000   <b>[M1]</b></div><div class="worked__math"><i>PV</i> = <span class="frac"><span>25000</span><span>1.011875<sup>32</sup></span></span>   <b>[A1]</b></div><div class="worked__math">= 17134.849… ≈ <b>17 134.85 EUR</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q051',
    topic: 't1-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.4',
    stem: '<p>A bank advertises a savings account with the slogan "Double your money in 9 years". Interest is compounded monthly at a fixed nominal annual rate of <span class="chem">r%</span>. Find the value of <span class="chem">r</span> that makes the slogan exactly true. Give your answer correct to 3 significant figures.</p>',
    answer: 7.726402958850276,
    sigfigs: 3,
    unit: '%',
    hints: [
      'Decode: no amount is given because none is needed. "Double your money" means <span class="chem">FV = 2PV</span> for any starting amount, so <span class="chem">PV</span> cancels. The unknown is the rate.',
      'Monthly compounding for 9 years gives 108 periods: <span class="chem">(1 + r/1200)^{108} = 2</span>.',
      'Take the 108th root, or use the Finance Solver with <span class="mono">N = 108, PV = −1, FV = 2, P/Y = C/Y = 12</span>, solving for <span class="mono">I%</span>.'
    ],
    solution: '<p>Decoding: choose any <span class="chem">PV</span> (for example 1); the condition is <span class="chem">FV = 2PV</span>.</p><div class="worked__math"><i>PV</i>(1 + <span class="frac"><span><i>r</i></span><span>1200</span></span>)<sup>108</sup> = 2<i>PV</i>   <b>[M1]</b></div><div class="worked__math">(1 + <span class="frac"><span><i>r</i></span><span>1200</span></span>)<sup>108</sup> = 2   <b>[A1]</b></div><div class="worked__math"><i>r</i> = 1200(2<sup>1/108</sup> − 1)   <b>[M1]</b></div><div class="worked__math">= 7.726… ≈ <b>7.73</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q052',
    topic: 't1-1', level: 'sl', tier: 'challenge', type: 'short', marks: 8,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.3, 1.4',
    stem: '<p>On 1 January every year, starting in year 1, Tomás deposits 1200 EUR into a savings account. The account pays 3% interest per year, compounded annually, and interest is added on 31 December. He makes no withdrawals.</p><p>(a) Show that the value of the account immediately after the third deposit is 3709.08 EUR. <strong>[2]</strong><br>(b) Show that the value of the account immediately after the <span class="chem">n</span>-th deposit is <span class="chem">40000(1.03^n - 1)</span> EUR. <strong>[3]</strong><br>(c) Find the least value of <span class="chem">n</span> for which the value immediately after the <span class="chem">n</span>-th deposit exceeds 30 000 EUR. <strong>[3]</strong></p>',
    answer: '<div class="worked__math">(a) 1200(1.03)<sup>2</sup> + 1200(1.03) + 1200 = 1273.08 + 1236 + 1200 = 3709.08</div><div class="worked__math">(b) 1200 + 1200(1.03) + … + 1200(1.03)<sup><i>n</i>−1</sup> = <span class="frac"><span>1200(1.03<sup><i>n</i></sup> − 1)</span><span>1.03 − 1</span></span> = 40000(1.03<sup><i>n</i></sup> − 1)</div><div class="worked__math">(c) 40000(1.03<sup><i>n</i></sup> − 1) &gt; 30000  ⇒  1.03<sup><i>n</i></sup> &gt; 1.75  ⇒  <i>n</i> &gt; 18.93, so <b><i>n</i> = 19</b></div>',
    markscheme: [
      'M1: (a) Recognizes that the first deposit has earned interest twice and the second once: <span class="chem">1200(1.03)^2 + 1200(1.03) + 1200</span>.',
      'A1: (a) <span class="chem">1273.08 + 1236 + 1200</span>, which gives the stated 3709.08 (the given value itself earns no mark).',
      'M1: (b) Writes the value as the geometric series <span class="chem">1200 + 1200(1.03) + … + 1200(1.03)^{n-1}</span>.',
      'A1: (b) Identifies first term 1200, ratio 1.03 and <span class="chem">n</span> terms.',
      'A1: (b) <span class="chem">1200(1.03^n - 1)/0.03</span>, which leads to the given result (the given line itself earns no mark).',
      'M1: (c) Sets up <span class="chem">40000(1.03^n - 1) &gt; 30000</span> (an equation is acceptable).',
      'A1: (c) <span class="chem">1.03^n &gt; 1.75</span>, so <span class="chem">n &gt; 18.93</span> (or GDC values 28 097.32 for <span class="chem">n = 18</span> and 30 140.24 for <span class="chem">n = 19</span>).',
      'A1: (c) <span class="chem">n = 19</span>.'
    ],
    hints: [
      'Decode: this is regular saving, which in Math AA is a geometric series in disguise (not a Finance Solver annuity). Each deposit grows separately; list what each deposit is worth at the moment of the <span class="chem">n</span>-th deposit.',
      'Immediately after the <span class="chem">n</span>-th deposit, the newest deposit has earned no interest, the one before it one year’s interest, …, and the first one <span class="chem">n - 1</span> years’ interest.',
      'Sum <span class="chem">1200 + 1200(1.03) + … + 1200(1.03)^{n-1}</span> with <span class="chem">S_n = u_1(r^n - 1)/(r - 1)</span>, then solve the inequality in (c) with logarithms or a GDC table.'
    ],
    solution: '<p>Decoding: the account value is a sum of separately compounding deposits, which is a geometric series with first term 1200 and ratio 1.03. Immediately after the 3rd deposit the value is <span class="chem">1200(1.03)^2 + 1200(1.03) + 1200 = 3709.08</span>. In general, <span class="chem">S_n = 1200(1.03^n - 1)/0.03 = 40000(1.03^n - 1)</span>. Then <span class="chem">1.03^n &gt; 1.75</span> gives <span class="chem">n &gt; ln 1.75/ln 1.03 ≈ 18.93</span>, so <span class="chem">n = 19</span>.</p>'
  },
  {
    id: 't1-1-q053',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'short', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.4',
    stem: '<p>A printing machine is bought for 50 000 USD. Its value depreciates by 20% each year.</p><p>(a) Write down an expression for the value of the machine after <span class="chem">n</span> years. <strong>[1]</strong><br>(b) Find the value of the machine after 2 years. <strong>[2]</strong><br>(c) Find the least number of complete years after which the machine is worth less than half of its original value. <strong>[3]</strong></p>',
    answer: '<div class="worked__math">(a) <b>50 000 × 0.8<sup><i>n</i></sup></b></div><div class="worked__math">(b) 50 000 × 0.64 = <b>32 000 USD</b></div><div class="worked__math">(c) Need 0.8<sup><i>n</i></sup> &lt; 0.5. 0.8<sup>3</sup> = 0.512 (value 25 600, not yet below 25 000); 0.8<sup>4</sup> = 0.4096 (value 20 480). So <b>4 years</b></div>',
    markscheme: [
      'A1: (a) <span class="chem">50000 × 0.8^n</span> (or equivalent).',
      'M1: (b) Substitutes <span class="chem">n = 2</span>: <span class="chem">50000 × 0.8^2</span>.',
      'A1: (b) 32 000 USD.',
      'M1: (c) Sets up <span class="chem">50000 × 0.8^n &lt; 25000</span>, i.e. <span class="chem">0.8^n &lt; 0.5</span>.',
      'A1: (c) Evaluates <span class="chem">0.8^3 = 0.512</span> and <span class="chem">0.8^4 = 0.4096</span> (or the values 25 600 and 20 480).',
      'A1: (c) 4 years.'
    ],
    hints: [
      'A 20% loss each year means multiplying by 0.8 each year.',
      'On Paper 1, compute powers of 0.8 by hand: <span class="chem">0.8^2 = 0.64</span>, <span class="chem">0.8^3 = 0.512</span>, …',
      '"Less than half" is strict: 0.512 is still more than 0.5.'
    ],
    solution: '<p>The value after <span class="chem">n</span> years is <span class="chem">50000(0.8)^n</span>. Half of the original value is 25 000, so we need <span class="chem">0.8^n &lt; 0.5</span>. After 3 years the value is 25 600, which is still above half; after 4 years it is 20 480. The answer is 4 complete years.</p>'
  },
  {
    id: 't1-1-q054',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 3,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.1',
    stem: '<p>Find the value of <span class="chem">(2.4 × 10^{-3})^2 / (1.6 × 10^{-8})</span>. Give your answer in the form <span class="chem">a × 10^k</span>, where <span class="chem">1 &lt;= a &lt; 10</span> and <span class="chem">k</span> is an integer.</p>',
    answer: 360,
    tolerance: { abs: 1e-9 },
    hints: [
      'Square both parts of the bracket: <span class="chem">(2.4)^2 × (10^{-3})^2</span>.',
      'Then divide the leading numbers and subtract the powers of 10: <span class="chem">-6 - (-8) = 2</span>.'
    ],
    solution: '<div class="worked__math">(2.4 × 10<sup>−3</sup>)<sup>2</sup> = 5.76 × 10<sup>−6</sup>   <b>[A1]</b></div><div class="worked__math"><span class="frac"><span>5.76 × 10<sup>−6</sup></span><span>1.6 × 10<sup>−8</sup></span></span> = 3.6 × 10<sup>−6 − (−8)</sup>   <b>[M1]</b></div><div class="worked__math">= <b>3.6 × 10<sup>2</sup></b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q055',
    topic: 't1-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.1, 1.3',
    stem: '<p>At the start of 2020, a company stored <span class="chem">3.2 × 10^{15}</span> bytes of data. The amount stored at the start of each year is 28% greater than at the start of the previous year. Find the first year at the start of which the amount stored exceeds <span class="chem">1.0 × 10^{18}</span> bytes.</p>',
    answer: 2044,
    tolerance: { abs: 0.01 },
    hints: [
      'Decode: this is a geometric sequence in standard-form numbers. The question asks for a calendar year, not for <span class="chem">n</span>, so decide what <span class="chem">n</span> means first: let <span class="chem">n</span> be the number of years after the start of 2020.',
      'Solve <span class="chem">3.2 × 10^{15} × 1.28^n &gt; 1.0 × 10^{18}</span>, i.e. <span class="chem">1.28^n &gt; 312.5</span>.',
      'Round <span class="chem">n</span> up to an integer, then add it to 2020.'
    ],
    solution: '<p>Decoding: the amount at the start of 2020 + <span class="chem">n</span> is <span class="chem">3.2 × 10^{15} × 1.28^n</span> (so 2020 corresponds to <span class="chem">n = 0</span>, not <span class="chem">n = 1</span>).</p><div class="worked__math">3.2 × 10<sup>15</sup> × 1.28<sup><i>n</i></sup> &gt; 10<sup>18</sup>  ⇒  1.28<sup><i>n</i></sup> &gt; 312.5   <b>[M1 A1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln 312.5</span><span>ln 1.28</span></span> ≈ 23.27   <b>[A1]</b></div><div class="worked__math"><i>n</i> = 24 (check: <i>n</i> = 23 gives 9.35 × 10<sup>17</sup>, <i>n</i> = 24 gives 1.20 × 10<sup>18</sup>)   <b>[A1]</b></div><div class="worked__math">Year: 2020 + 24 = <b>2044</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q056',
    topic: 't1-1', level: 'sl', tier: 'challenge', type: 'short', marks: 9,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.2, 1.3',
    stem: '<p>An arithmetic sequence <span class="chem">u_n</span> has common difference <span class="chem">d</span>, and a geometric sequence <span class="chem">v_n</span> has common ratio <span class="chem">r</span>. The geometric sequence is not constant. Both sequences have first term 3. The third term of the arithmetic sequence equals the second term of the geometric sequence, and the seventh term of the arithmetic sequence equals the third term of the geometric sequence.</p><p>(a) Show that <span class="chem">r^2 - 3r + 2 = 0</span>. <strong>[3]</strong><br>(b) Find the value of <span class="chem">r</span> and the value of <span class="chem">d</span>. <strong>[4]</strong><br>(c) Find <span class="chem">Σ_{k=1}^{20} u_k</span>. <strong>[2]</strong></p>',
    answer: '<div class="worked__math">(a) 3 + 2<i>d</i> = 3<i>r</i> and 3 + 6<i>d</i> = 3<i>r</i><sup>2</sup>. From the first, <i>d</i> = <span class="frac"><span>3(<i>r</i> − 1)</span><span>2</span></span>; substituting: 3 + 9(<i>r</i> − 1) = 3<i>r</i><sup>2</sup>  ⇒  3<i>r</i><sup>2</sup> − 9<i>r</i> + 6 = 0  ⇒  <i>r</i><sup>2</sup> − 3<i>r</i> + 2 = 0</div><div class="worked__math">(b) (<i>r</i> − 1)(<i>r</i> − 2) = 0. <i>r</i> = 1 would make the geometric sequence constant, so <b><i>r</i> = 2</b> and <b><i>d</i> = <span class="frac"><span>3</span><span>2</span></span></b></div><div class="worked__math">(c) <span class="frac"><span>20</span><span>2</span></span>(2 × 3 + 19 × <span class="frac"><span>3</span><span>2</span></span>) = 10 × 34.5 = <b>345</b></div>',
    markscheme: [
      'M1: (a) Writes both conditions: <span class="chem">3 + 2d = 3r</span> and <span class="chem">3 + 6d = 3r^2</span>.',
      'M1: (a) Eliminates <span class="chem">d</span>, e.g. <span class="chem">d = 3(r - 1)/2</span> substituted into the second equation.',
      'A1: (a) <span class="chem">3 + 9(r - 1) = 3r^2</span> or <span class="chem">3r^2 - 9r + 6 = 0</span>, which leads to the given equation (the given line itself earns no mark).',
      'M1: (b) Factorizes: <span class="chem">(r - 1)(r - 2) = 0</span>.',
      'R1: (b) Rejects <span class="chem">r = 1</span> because the geometric sequence is not constant.',
      'A1: (b) <span class="chem">r = 2</span>.',
      'A1: (b) <span class="chem">d = 3/2</span>.',
      'M1: (c) Uses <span class="chem">S_{20} = (20/2)(2 × 3 + 19 × 3/2)</span>.',
      'A1: (c) 345.'
    ],
    hints: [
      'Decode: translate each sentence into an equation using <span class="chem">u_n = 3 + (n - 1)d</span> and <span class="chem">v_n = 3r^{n-1}</span>. The phrase "not constant" is a hidden condition: it rules out <span class="chem">r = 1</span>.',
      'Third arithmetic term: <span class="chem">3 + 2d</span>; second geometric term: <span class="chem">3r</span>. Seventh arithmetic term: <span class="chem">3 + 6d</span>; third geometric term: <span class="chem">3r^2</span>.',
      'Make <span class="chem">d</span> the subject of the first equation and substitute into the second.'
    ],
    solution: '<p>Decoding: four "term equals term" facts become two equations; "not constant" eliminates the root <span class="chem">r = 1</span> (which would give <span class="chem">d = 0</span> and two constant sequences). With <span class="chem">r = 2</span>, <span class="chem">d = 3/2</span>: check <span class="chem">u_3 = 6 = v_2</span> and <span class="chem">u_7 = 12 = v_3</span>. Then <span class="chem">S_{20} = 345</span>.</p>'
  },
  {
    id: 't1-1-q057',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.8',
    stem: '<p>Find the exact value of <span class="chem">Σ_{k=2}^{infty} 5(-2/3)^k</span>.</p>',
    answer: 1.3333333333333333,
    exact: true,
    answerInput: '4/3',
    hints: [
      'The sum starts at <span class="chem">k = 2</span>, so the first term is <span class="chem">5(-2/3)^2 = 20/9</span>, not 5.',
      'The common ratio is <span class="chem">-2/3</span>, and <span class="chem">|-2/3| &lt; 1</span>. Use <span class="chem">S_infty = u_1/(1 - r)</span> and take care with <span class="chem">1 - (-2/3)</span>.'
    ],
    solution: '<div class="worked__math">First term (<i>k</i> = 2): 5 × <span class="frac"><span>4</span><span>9</span></span> = <span class="frac"><span>20</span><span>9</span></span>   <b>[A1]</b></div><div class="worked__math"><i>r</i> = −<span class="frac"><span>2</span><span>3</span></span>, |<i>r</i>| &lt; 1   <b>[A1]</b></div><div class="worked__math"><i>S</i><sub>∞</sub> = <span class="frac"><span>20/9</span><span>1 + 2/3</span></span> = <span class="frac"><span>20</span><span>9</span></span> × <span class="frac"><span>3</span><span>5</span></span>   <b>[M1]</b></div><div class="worked__math">= <b><span class="frac"><span>4</span><span>3</span></span></b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-1-q058',
    topic: 't1-1', level: 'sl', tier: 'exam', type: 'short', marks: 7,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.3, 1.8',
    stem: '<p>Consider the geometric series <span class="chem">Σ_{k=1}^{n} 6(1/2)^k</span>, whose sum is <span class="chem">S_n</span>.</p><p>(a) Find the sum to infinity <span class="chem">S_infty</span> of the series. <strong>[2]</strong><br>(b) Show that <span class="chem">S_infty - S_n = 6(1/2)^n</span>. <strong>[2]</strong><br>(c) Hence find the least value of <span class="chem">n</span> for which <span class="chem">S_infty - S_n &lt; 0.01</span>. <strong>[3]</strong></p>',
    answer: '<div class="worked__math">(a) <i>u</i><sub>1</sub> = 3, <i>r</i> = <span class="frac"><span>1</span><span>2</span></span>: <i>S</i><sub>∞</sub> = <span class="frac"><span>3</span><span>1/2</span></span> = <b>6</b></div><div class="worked__math">(b) <i>S</i><sub><i>n</i></sub> = <span class="frac"><span>3(1 − (1/2)<sup><i>n</i></sup>)</span><span>1/2</span></span> = 6 − 6(1/2)<sup><i>n</i></sup>, so <i>S</i><sub>∞</sub> − <i>S</i><sub><i>n</i></sub> = 6(1/2)<sup><i>n</i></sup></div><div class="worked__math">(c) 6(1/2)<sup><i>n</i></sup> &lt; 0.01  ⇔  2<sup><i>n</i></sup> &gt; 600. Since 2<sup>9</sup> = 512 and 2<sup>10</sup> = 1024, <b><i>n</i> = 10</b></div>',
    markscheme: [
      'A1: (a) Identifies <span class="chem">u_1 = 3</span> and <span class="chem">r = 1/2</span>.',
      'A1: (a) <span class="chem">S_infty = 6</span>.',
      'M1: (b) Uses <span class="chem">S_n = 3(1 - (1/2)^n)/(1 - 1/2)</span>.',
      'A1: (b) <span class="chem">S_n = 6 - 6(1/2)^n</span>, which leads to the given result (the given line itself earns no mark).',
      'M1: (c) Sets <span class="chem">6(1/2)^n &lt; 0.01</span> and rearranges to <span class="chem">2^n &gt; 600</span>.',
      'A1: (c) Compares powers of 2: <span class="chem">2^9 = 512 &lt; 600 &lt; 1024 = 2^{10}</span>.',
      'A1: (c) <span class="chem">n = 10</span>.'
    ],
    hints: [
      'The sum starts at <span class="chem">k = 1</span>, so the first term is <span class="chem">6 × 1/2 = 3</span>.',
      'For (b), write <span class="chem">S_n</span> with the finite geometric formula and subtract it from 6.',
      'For (c) on Paper 1, multiply out: <span class="chem">(1/2)^n &lt; 1/600</span> means <span class="chem">2^n &gt; 600</span>. List powers of 2.'
    ],
    solution: '<p><span class="chem">S_infty - S_n</span> is the "tail" of the series, the terms after the <span class="chem">n</span>-th. Here it equals <span class="chem">6(1/2)^n</span>. The condition becomes <span class="chem">2^n &gt; 600</span>. Since <span class="chem">2^9 = 512</span> is too small and <span class="chem">2^{10} = 1024</span> works, the least value is <span class="chem">n = 10</span>.</p>'
  },
  {
    id: 't1-1-q059',
    topic: 't1-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.2',
    stem: '<p>Find the sum of all the odd integers between 100 and 500 that are multiples of 7.</p>',
    answer: 8729,
    tolerance: { abs: 0.01 },
    hints: [
      'Decode: the numbers you want are 7 × (odd number). Consecutive ones differ by 14, not 7, so they form an arithmetic sequence with <span class="chem">d = 14</span>. You need its first term, last term and number of terms.',
      'The first multiple of 7 above 100 is 105 (odd). The last multiple of 7 below 500 is 497 (odd).',
      'Number of terms <span class="chem">= (497 - 105)/14 + 1</span>. Then use <span class="chem">S = (N/2)(first + last)</span>.'
    ],
    solution: '<p>Decoding: "odd multiples of 7" skip every other multiple of 7, so the common difference is 14.</p><div class="worked__math">Arithmetic sequence 105, 119, 133, …, 497 with <i>d</i> = 14   <b>[R1]</b></div><div class="worked__math">First term 105, last term 497   <b>[A1]</b></div><div class="worked__math"><i>N</i> = <span class="frac"><span>497 − 105</span><span>14</span></span> + 1 = 29   <b>[A1]</b></div><div class="worked__math"><i>S</i> = <span class="frac"><span>29</span><span>2</span></span>(105 + 497)   <b>[M1]</b></div><div class="worked__math">= 29 × 301 = <b>8729</b>   <b>[A1]</b></div>'
  }
]);
