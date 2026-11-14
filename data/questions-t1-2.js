/* ==========================================================================
   Question bank: Topic 1.2 — Exponents, logarithms and the binomial theorem
   All questions are original. Everything in t1-2 is SL core (SL+HL).
   Load order on a page: math.js, core.js, quiz.js, then this file.
   ========================================================================== */
S1.questions.register('t1-2', [

  /* ======================= FOUNDATION ==================================== */
  {
    id: 't1-2-q001',
    topic: 't1-2', level: 'sl', tier: 'foundation', type: 'numeric', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.7',
    stem: '<p>Evaluate <span class="chem">27^{-2/3}</span>, giving your answer as an exact fraction.</p>',
    answer: 1/9,
    answerDisplay: '1/9',
    exact: true,
    answerInput: '1/9',
    hints: [
      'Use <span class="chem">a^{-m/n} = 1 / (a^{1/n})^m</span>: take the cube root of 27 first before squaring.',
      'Since <span class="chem">27^{1/3} = 3</span>, compute <span class="chem">3^{-2}</span>.'
    ],
    solution: '<div class="worked__math">27<sup>−2/3</sup> = (27<sup>1/3</sup>)<sup>−2</sup> = 3<sup>−2</sup> = <b><span class="frac"><span>1</span><span>9</span></span></b></div>'
  },
  {
    id: 't1-2-q002',
    topic: 't1-2', level: 'sl', tier: 'foundation', type: 'mcq', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.7',
    stem: '<p>Given that <span class="chem">p = ln a</span> and <span class="chem">q = ln b</span> (where <span class="chem">a, b &gt; 0</span>), express <span class="chem">ln(a^3 / sqrt(b))</span> in terms of <span class="chem">p</span> and <span class="chem">q</span>.</p>',
    options: [
      '<span class="chem">3p - (1/2)q</span>',
      '<span class="chem">3p / ((1/2)q)</span>',
      '<span class="chem">p^3 - sqrt(q)</span>',
      '<span class="chem">3p + (1/2)q</span>'
    ],
    answer: 0,
    misconception: {
      1: 'The logarithm of a quotient is the difference of the logarithms (<span class="chem">ln(X/Y) = ln X - ln Y</span>), not the quotient of the logarithms.',
      2: 'The power law of logarithms brings exponents to the front as multipliers: <span class="chem">ln(a^3) = 3 ln a = 3p</span>, not <span class="chem">p^3</span>.',
      3: 'Because <span class="chem">sqrt(b) = b^{1/2}</span> is in the denominator, its logarithm is subtracted, not added.'
    },
    hints: [
      'Rewrite <span class="chem">sqrt(b)</span> as <span class="chem">b^{1/2}</span> and apply the quotient rule <span class="chem">ln(X/Y) = ln X - ln Y</span>.',
      'Apply the power rule <span class="chem">ln(x^m) = m ln x</span> to each term.'
    ],
    solution: '<div class="worked__math">ln(<i>a</i><sup>3</sup> / <i>b</i><sup>1/2</sup>) = ln(<i>a</i><sup>3</sup>) − ln(<i>b</i><sup>1/2</sup>) = 3 ln <i>a</i> − <span class="frac"><span>1</span><span>2</span></span> ln <i>b</i> = <b>3<i>p</i> − <span class="frac"><span>1</span><span>2</span></span><i>q</i></b></div>'
  },
  {
    id: 't1-2-q003',
    topic: 't1-2', level: 'sl', tier: 'foundation', type: 'numeric', marks: 3,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.7',
    stem: '<p>Find the exact value of <span class="chem">log_2(24) - log_2(3) + log_9(3)</span>.</p>',
    answer: 3.5,
    answerDisplay: '7/2 (or 3.5)',
    exact: true,
    answerInput: '7/2',
    hints: [
      'Combine the base-2 logs using <span class="chem">log_2(24) - log_2(3) = log_2(24/3) = log_2(8)</span>.',
      'For <span class="chem">log_9(3)</span>, note that <span class="chem">3 = 9^{1/2}</span>.'
    ],
    solution: '<div class="worked__math">log<sub>2</sub>(24 / 3) + log<sub>9</sub>(9<sup>1/2</sup>) = log<sub>2</sub>(8) + <span class="frac"><span>1</span><span>2</span></span> = 3 + 0.5 = <b>3.5</b> (or <b>7/2</b>)</div>'
  },
  {
    id: 't1-2-q004',
    topic: 't1-2', level: 'sl', tier: 'foundation', type: 'numeric', marks: 3,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.9',
    stem: '<p>Find the coefficient of <span class="chem">x^3</span> in the binomial expansion of <span class="chem">(2 + x)^5</span>.</p>',
    answer: 40,
    tolerance: { abs: 0.01 },
    hints: [
      'Write the general term <span class="chem">T_{r+1} = ^5C_r (2)^{5-r} x^r</span>.',
      'Substitute <span class="chem">r = 3</span> and compute <span class="chem">^5C_3 × 2^2</span>.'
    ],
    solution: '<div class="worked__math">For <i>x</i><sup>3</sup>, set <i>r</i> = 3:  <sup>5</sup>C<sub>3</sub> (2)<sup>5−3</sup> <i>x</i><sup>3</sup> = 10 × 4 <i>x</i><sup>3</sup> = <b>40</b><i>x</i><sup>3</sup></div>'
  },
  {
    id: 't1-2-q005',
    topic: 't1-2', level: 'sl', tier: 'foundation', type: 'multi', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.7',
    stem: '<p>Which of the following equations are valid identities for all <span class="chem">x, y &gt; 0</span>? Select all that apply.</p>',
    options: [
      '<span class="chem">ln(x^2 y) = 2 ln x + ln y</span>',
      '<span class="chem">ln(x + y) = ln x + ln y</span>',
      '<span class="chem">log_4(x) = (1/2) log_2(x)</span>',
      '<span class="chem">(ln x)^3 = 3 ln x</span>'
    ],
    answer: [0, 2],
    misconception: {
      1: 'There is no logarithm law for a sum <span class="chem">ln(x + y)</span>! Remember <span class="chem">ln x + ln y = ln(xy)</span>.',
      3: 'The power rule applies to <span class="chem">ln(x^3) = 3 ln x</span>, where only <span class="chem">x</span> is cubed. <span class="chem">(ln x)^3</span> means <span class="chem">(ln x)(ln x)(ln x)</span>.'
    },
    hints: [
      'Check the product and power rules carefully: is the power on the argument <span class="chem">x</span> or on the entire logarithm?',
      'Use the change of base formula <span class="chem">log_4(x) = log_2(x) / log_2(4)</span> for the third option.'
    ],
    solution: '<p>Option A uses the product and power laws (<span class="chem">ln(x^2 y) = ln(x^2) + ln y = 2 ln x + ln y</span>). Option C uses change of base (<span class="chem">log_4 x = log_2 x / log_2 4 = (1/2) log_2 x</span>).</p>'
  },
  {
    id: 't1-2-q006',
    topic: 't1-2', level: 'sl', tier: 'foundation', type: 'numeric', marks: 3,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.7',
    stem: '<p>Solve the equation <span class="chem">9^{x-1} = (1/27)^{2-x}</span> for <span class="chem">x</span>.</p>',
    answer: 4,
    tolerance: { abs: 0.01 },
    hints: [
      'Express both sides as powers of base 3: <span class="chem">9 = 3^2</span> and <span class="chem">1/27 = 3^{-3}</span>.',
      'Equate the exponents of base 3: <span class="chem">2(x - 1) = -3(2 - x)</span>.'
    ],
    solution: '<div class="worked__math">(3<sup>2</sup>)<sup><i>x</i>−1</sup> = (3<sup>−3</sup>)<sup>2−<i>x</i></sup>  ⇒  3<sup>2<i>x</i>−2</sup> = 3<sup>3<i>x</i>−6</sup></div><div class="worked__math">2<i>x</i> − 2 = 3<i>x</i> − 6  ⇒  <b><i>x</i> = 4</b></div>'
  },

  /* ======================= EXAM STYLE ==================================== */
  {
    id: 't1-2-q007',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.7',
    stem: '<p>Solve the equation <span class="chem">3^{2x} - 6(3^x) - 27 = 0</span> for <span class="chem">x</span> ∈ ℝ.</p>',
    answer: 2,
    tolerance: 0,
    hints: [
      'Substitute <span class="chem">u = 3^x</span> (with <span class="chem">u &gt; 0</span>) to get the quadratic <span class="chem">u^2 - 6u - 27 = 0</span>.',
      'Factor as <span class="chem">(u - 9)(u + 3) = 0</span>, reject any root with <span class="chem">u &lt;= 0</span>, and solve <span class="chem">3^x = u</span>.'
    ],
    solution: '<div class="worked__math">Let <i>u</i> = 3<sup><i>x</i></sup> (<i>u</i> &gt; 0):  <i>u</i><sup>2</sup> − 6<i>u</i> − 27 = 0  ⇒  (<i>u</i> − 9)(<i>u</i> + 3) = 0   <b>[M1 A1]</b></div><div class="worked__math">Reject <i>u</i> = −3 since 3<sup><i>x</i></sup> &gt; 0 for all <i>x</i> ∈ ℝ.   <b>[R1]</b></div><div class="worked__math">3<sup><i>x</i></sup> = 9 = 3<sup>2</sup>  ⇒  <b><i>x</i> = 2</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q008',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.7',
    stem: '<p>Solve the logarithmic equation <span class="chem">log_2(x - 2) + log_2(x + 2) = 5</span> for <span class="chem">x</span>.</p>',
    answer: 6,
    tolerance: { abs: 0.01 },
    hints: [
      'Combine the left side using the product rule: <span class="chem">log_2((x - 2)(x + 2)) = 5</span>.',
      'Rewrite in exponential form <span class="chem">x^2 - 4 = 2^5 = 32</span> and check the domain condition <span class="chem">x - 2 &gt; 0</span>.'
    ],
    solution: '<div class="worked__math">log<sub>2</sub>((<i>x</i> − 2)(<i>x</i> + 2)) = 5  ⇒  <i>x</i><sup>2</sup> − 4 = 2<sup>5</sup> = 32   <b>[M1 A1]</b></div><div class="worked__math"><i>x</i><sup>2</sup> = 36  ⇒  <i>x</i> = ±6   <b>[A1]</b></div><div class="worked__math">Since log<sub>2</sub>(<i>x</i> − 2) requires <i>x</i> &gt; 2, reject <i>x</i> = −6 and keep <b><i>x</i> = 6</b>.   <b>[R1 A1]</b></div>'
  },
  {
    id: 't1-2-q009',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.7',
    stem: '<p>Given that <span class="chem">log_3(x) + 4 log_x(3) = 5</span>, find the larger of the two possible values of <span class="chem">x</span>.</p>',
    answer: 81,
    tolerance: { abs: 0.01 },
    hints: [
      'Use the change of base formula to rewrite <span class="chem">log_x(3) = log_3(3) / log_3(x) = 1 / log_3(x)</span>.',
      'Let <span class="chem">u = log_3(x)</span> to form <span class="chem">u + 4/u = 5</span>, solve for <span class="chem">u</span>, and then compute <span class="chem">x = 3^u</span>.'
    ],
    solution: '<div class="worked__math">Using change of base, log<sub><i>x</i></sub>(3) = <span class="frac"><span>1</span><span>log<sub>3</sub>(<i>x</i>)</span></span>. Let <i>u</i> = log<sub>3</sub>(<i>x</i>):   <b>[M1]</b></div><div class="worked__math"><i>u</i> + <span class="frac"><span>4</span><span><i>u</i></span></span> = 5  ⇒  <i>u</i><sup>2</sup> − 5<i>u</i> + 4 = 0  ⇒  (<i>u</i> − 1)(<i>u</i> − 4) = 0   <b>[M1 A1]</b></div><div class="worked__math">log<sub>3</sub>(<i>x</i>) = 1 ⇒ <i>x</i> = 3,  or  log<sub>3</sub>(<i>x</i>) = 4 ⇒ <i>x</i> = 3<sup>4</sup> = <b>81</b>   <b>[A1 A1]</b></div>'
  },
  {
    id: 't1-2-q010',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.9',
    stem: '<p>Find the constant term (the term independent of <span class="chem">x</span>) in the expansion of <span class="chem">(2x^2 - 1/x)^6</span>.</p>',
    answer: 60,
    tolerance: { abs: 0.01 },
    hints: [
      'Write the general term: <span class="chem">T_{r+1} = ^6C_r (2x^2)^{6-r} (-x^{-1})^r = ^6C_r 2^{6-r} (-1)^r x^{12-3r}</span>.',
      'Set the power of <span class="chem">x</span> equal to zero (<span class="chem">12 - 3r = 0</span>) to find <span class="chem">r = 4</span>, then substitute <span class="chem">r = 4</span>.'
    ],
    solution: '<div class="worked__math"><i>T</i><sub><i>r</i>+1</sub> = <sup>6</sup>C<sub><i>r</i></sub> (2<i>x</i><sup>2</sup>)<sup>6−<i>r</i></sup> (−<i>x</i><sup>−1</sup>)<sup><i>r</i></sup> = <sup>6</sup>C<sub><i>r</i></sub> 2<sup>6−<i>r</i></sup> (−1)<sup><i>r</i></sup> <i>x</i><sup>12−3<i>r</i></sup>   <b>[M1 A1]</b></div><div class="worked__math">Constant term requires 12 − 3<i>r</i> = 0  ⇒  <i>r</i> = 4   <b>[M1 A1]</b></div><div class="worked__math"><sup>6</sup>C<sub>4</sub> × 2<sup>2</sup> × (−1)<sup>4</sup> = 15 × 4 × 1 = <b>60</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q011',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.9',
    stem: '<p>Find the coefficient of <span class="chem">x^2</span> in the expansion of <span class="chem">(1 - 3x)(2 + x)^4</span>.</p>',
    answer: -72,
    tolerance: { abs: 0.01 },
    hints: [
      'Find the first three terms (up to <span class="chem">x^2</span>) in the expansion of <span class="chem">(2 + x)^4</span>.',
      'Multiply <span class="chem">(1 - 3x)(16 + 32x + 24x^2 + ...)</span> and collect the two products that produce <span class="chem">x^2</span>.'
    ],
    solution: '<div class="worked__math">(2 + <i>x</i>)<sup>4</sup> = 2<sup>4</sup> + <sup>4</sup>C<sub>1</sub>(2<sup>3</sup>)<i>x</i> + <sup>4</sup>C<sub>2</sub>(2<sup>2</sup>)<i>x</i><sup>2</sup> + … = 16 + 32<i>x</i> + 24<i>x</i><sup>2</sup> + …   <b>[M1 A1]</b></div><div class="worked__math">Coeff of <i>x</i><sup>2</sup> = (1)(24) + (−3)(32) = 24 − 96 = <b>−72</b>   <b>[M1 A2]</b></div>'
  },
  {
    id: 't1-2-q012',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'order', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.9',
    stem: '<p>Arrange the steps in order to find the term in <span class="chem">x^3</span> in the expansion of <span class="chem">(x^2 + 2/x)^6</span>.</p>',
    options: [
      'Write the general term <span class="chem">T_{r+1} = ^6C_r (x^2)^{6-r} (2x^{-1})^r</span>.',
      'Separate the numerical coefficients and combine the powers of <span class="chem">x</span> to get <span class="chem">^6C_r 2^r x^{12-3r}</span>.',
      'Equate the exponent of <span class="chem">x</span> to the target power: <span class="chem">12 - 3r = 3</span>, which gives <span class="chem">r = 3</span>.',
      'Substitute <span class="chem">r = 3</span> to obtain <span class="chem">^6C_3 × 2^3 x^3 = 20 × 8 x^3 = 160x^3</span>.'
    ],
    hints: [
      'Always start from the general term formula <span class="chem">T_{r+1} = ^nC_r a^{n-r} b^r</span>.',
      'Simplify the exponent of <span class="chem">x</span> into a single linear expression in <span class="chem">r</span> before solving for <span class="chem">r</span>.'
    ],
    solution: '<p>Writing the general term, combining exponents into <span class="chem">x^{12-3r}</span>, solving <span class="chem">12 - 3r = 3 =&gt; r = 3</span>, and evaluating <span class="chem">^6C_3 × 2^3 = 160</span> gives <span class="chem">160x^3</span>.</p>'
  },
  {
    id: 't1-2-q013',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 3,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.9',
    stem: '<p>In the expansion of <span class="chem">(1 + kx)^7</span>, where <span class="chem">k &gt; 0</span>, the coefficient of <span class="chem">x^3</span> is equal to <span class="chem">5/3</span> times the coefficient of <span class="chem">x^2</span>. Find the exact value of <span class="chem">k</span>.</p>',
    answer: 1,
    exact: true,
    answerInput: '1',
    hints: [
      'Write the coefficient of <span class="chem">x^3</span> as <span class="chem">^7C_3 k^3 = 35k^3</span> and the coefficient of <span class="chem">x^2</span> as <span class="chem">^7C_2 k^2 = 21k^2</span>.',
      'Solve <span class="chem">35k^3 = (5/3)(21k^2)</span> for <span class="chem">k &gt; 0</span>.'
    ],
    solution: '<div class="worked__math"><sup>7</sup>C<sub>3</sub> <i>k</i><sup>3</sup> = <span class="frac"><span>5</span><span>3</span></span> (<sup>7</sup>C<sub>2</sub> <i>k</i><sup>2</sup>)  ⇒  35<i>k</i><sup>3</sup> = <span class="frac"><span>5</span><span>3</span></span>(21<i>k</i><sup>2</sup>) = 35<i>k</i><sup>2</sup>   <b>[M1 A1]</b></div><div class="worked__math">Since <i>k</i> &gt; 0, divide by 35<i>k</i><sup>2</sup> to get <b><i>k</i> = 1</b>.   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q014',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'short', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.7',
    stem: '<p>Solve the simultaneous equations for <span class="chem">x &gt; 0</span> and <span class="chem">y &gt; 0</span>:<br><span class="chem">log_2(x) + log_2(y) = 4</span><br><span class="chem">log_2(x^2) - log_2(y) = 5</span></p>',
    answer: '<div class="worked__math">Rewrite second equation as 2 log<sub>2</sub>(<i>x</i>) − log<sub>2</sub>(<i>y</i>) = 5.</div><div class="worked__math">Add the two equations: 3 log<sub>2</sub>(<i>x</i>) = 9  ⇒  log<sub>2</sub>(<i>x</i>) = 3  ⇒  <b><i>x</i> = 8</b>.</div><div class="worked__math">Substitute into first: 3 + log<sub>2</sub>(<i>y</i>) = 4  ⇒  log<sub>2</sub>(<i>y</i>) = 1  ⇒  <b><i>y</i> = 2</b>.</div>',
    markscheme: [
      'M1: Applies power law log_2(x^2) = 2 log_2(x) (or converts both equations to xy = 16 and x^2/y = 32).',
      'M1: Eliminates log_2(y) by adding the equations to obtain 3 log_2(x) = 9 (or multiplies xy × (x^2/y) = x^3 = 512).',
      'A1: Finds log_2(x) = 3.',
      'A1: Deduces x = 2^3 = 8.',
      'M1: Substitutes log_2(x) = 3 back into the first equation: 3 + log_2(y) = 4.',
      'A1: Finds log_2(y) = 1 and hence y = 2.'
    ],
    hints: [
      'Use the power law <span class="chem">log_2(x^2) = 2 log_2(x)</span> on the second equation.',
      'Add the two equations together to eliminate <span class="chem">log_2(y)</span> immediately!'
    ],
    solution: '<p>Adding <span class="chem">log_2(x) + log_2(y) = 4</span> and <span class="chem">2 log_2(x) - log_2(y) = 5</span> gives <span class="chem">3 log_2(x) = 9 =&gt; log_2(x) = 3 =&gt; x = 8</span>, and hence <span class="chem">log_2(y) = 1 =&gt; y = 2</span>.</p>'
  },

  /* ======================= CHALLENGE ===================================== */
  {
    id: 't1-2-q015',
    topic: 't1-2', level: 'sl', tier: 'challenge', type: 'numeric', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.7',
    stem: '<p>The terms <span class="chem">log_2(p)</span>, <span class="chem">log_4(p)</span>, <span class="chem">log_8(p)</span>, ... are evaluated for <span class="chem">p = 64</span>. Calculate the exact value of the sum <span class="chem">log_2(64) + log_4(64) + log_8(64) + log_{16}(64)</span>.</p>',
    answer: 12.5,
    answerDisplay: '25/2 (or 12.5)',
    exact: true,
    answerInput: '25/2',
    hints: [
      'Decode: the four logarithms share the argument 64, and every base is a power of 2. Rewrite each one in base 2 with change of base, then add.',
      'Write <span class="chem">64 = 2^6</span> and convert each base to a power of 2: <span class="chem">4 = 2^2, 8 = 2^3, 16 = 2^4</span>.',
      'Use <span class="chem">log_{2^k}(2^6) = 6 / k</span> for <span class="chem">k = 1, 2, 3, 4</span>.'
    ],
    solution: '<div class="worked__math">Since 64 = 2<sup>6</sup> and log<sub>2<sup><i>k</i></sup></sub>(2<sup>6</sup>) = <span class="frac"><span>6</span><span><i>k</i></span></span>:   <b>[M1 A1]</b></div><div class="worked__math">Sum = <span class="frac"><span>6</span><span>1</span></span> + <span class="frac"><span>6</span><span>2</span></span> + <span class="frac"><span>6</span><span>3</span></span> + <span class="frac"><span>6</span><span>4</span></span> = 6 + 3 + 2 + 1.5 = <b>12.5</b> (or <b>25/2</b>)   <b>[M1 A1]</b></div>'
  },
  {
    id: 't1-2-q016',
    topic: 't1-2', level: 'sl', tier: 'challenge', type: 'numeric', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.9',
    stem: '<p>In the expansion of <span class="chem">(1 + x)^n</span>, where <span class="chem">n &gt;= 3</span> is a positive integer, the coefficients of <span class="chem">x</span>, <span class="chem">x^2</span>, and <span class="chem">x^3</span> form an arithmetic sequence. Find the value of <span class="chem">n</span>.</p>',
    answer: 7,
    tolerance: { abs: 0.01 },
    hints: [
      'Decode: “the coefficients form an arithmetic sequence” gives one equation: the middle coefficient is the mean of the other two. Write each coefficient in terms of <span class="chem">n</span> and solve for the integer <span class="chem">n &gt;= 3</span>.',
      'Write out the three coefficients: <span class="chem">^nC_1 = n</span>, <span class="chem">^nC_2 = n(n-1)/2</span>, and <span class="chem">^nC_3 = n(n-1)(n-2)/6</span>.',
      'Use the arithmetic condition <span class="chem">2(^nC_2) = ^nC_1 + ^nC_3</span> and divide through by <span class="chem">n &gt; 0</span>.'
    ],
    solution: '<div class="worked__math">2 × <span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = <i>n</i> + <span class="frac"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6</span></span>   <b>[M1 A1]</b></div><div class="worked__math">Divide by <i>n</i> &gt; 0 and multiply by 6:  6(<i>n</i> − 1) = 6 + (<i>n</i><sup>2</sup> − 3<i>n</i> + 2)   <b>[M1 A1]</b></div><div class="worked__math"><i>n</i><sup>2</sup> − 9<i>n</i> + 14 = 0  ⇒  (<i>n</i> − 2)(<i>n</i> − 7) = 0. Since <i>n</i> ≥ 3, <b><i>n</i> = 7</b>.   <b>[M1 A1]</b></div>'
  },
  {
    id: 't1-2-q017',
    topic: 't1-2', level: 'sl', tier: 'challenge', type: 'short', marks: 7,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.7',
    stem: '<p>Consider the equation <span class="chem">e^{2x} - 2k e^x + (k + 2) = 0</span>, where <span class="chem">k</span> ∈ ℝ.<br>(a) Find the set of values of <span class="chem">k</span> for which the quadratic in <span class="chem">u = e^x</span> has two distinct real roots. <strong>[3]</strong><br>(b) Hence find the exact set of values of <span class="chem">k</span> for which the original equation has <strong>two distinct real solutions for <span class="chem">x</span></strong>. <strong>[4]</strong></p>',
    answer: '<div class="worked__math">(a) Let <i>u</i> = e<sup><i>x</i></sup>: <i>u</i><sup>2</sup> − 2<i>k u</i> + (<i>k</i> + 2) = 0. Δ = 4<i>k</i><sup>2</sup> − 4(<i>k</i> + 2) &gt; 0  ⇒  <i>k</i><sup>2</sup> − <i>k</i> − 2 &gt; 0  ⇒  (<i>k</i> − 2)(<i>k</i> + 1) &gt; 0  ⇒  <b><i>k</i> &lt; −1 or <i>k</i> &gt; 2</b>.</div><div class="worked__math">(b) For two real solutions in <i>x</i>, BOTH roots <i>u</i><sub>1</sub>, <i>u</i><sub>2</sub> must be strictly positive (<i>u</i> = e<sup><i>x</i></sup> &gt; 0).</div><div class="worked__math">Sum of roots 2<i>k</i> &gt; 0 ⇒ <i>k</i> &gt; 0, and product of roots <i>k</i> + 2 &gt; 0 ⇒ <i>k</i> &gt; −2. Intersecting with (a) gives <b><i>k</i> &gt; 2</b>.</div>',
    markscheme: [
      'M1: Substitutes u = e^x and sets discriminant Δ = (-2k)^2 - 4(1)(k + 2) > 0.',
      'A1: Simplifies to k^2 - k - 2 > 0 or (k - 2)(k + 1) > 0.',
      'A1: Deduces k < -1 or k > 2.',
      'R1: Recognizes that since u = e^x > 0, both roots u_1 and u_2 must be strictly positive.',
      'M1: Requires sum of roots 2k > 0 and product of roots k + 2 > 0 (or tests vertex u = k > 0 and f(0) = k + 2 > 0).',
      'A1: Rejects k < -1 (there the sum of roots 2k < 0, so a root is not positive).',
      'A1: States the final set k > 2.'
    ],
    hints: [
      'Decode: this is a quadratic in <span class="chem">u = e^x</span> in disguise. Part (a) is about the quadratic alone; part (b) asks for real values of <span class="chem">x</span>, and only positive roots <span class="chem">u</span> give one.',
      'For part (a), set the discriminant <span class="chem">Δ = (-2k)^2 - 4(1)(k+2) &gt; 0</span>.',
      'For part (b), remember that a root <span class="chem">u</span> only produces a real <span class="chem">x = ln u</span> if <span class="chem">u &gt; 0</span>! When are both roots of <span class="chem">u^2 - 2ku + (k+2) = 0</span> positive?'
    ],
    solution: '<p>When <span class="chem">k &lt; -1</span>, the sum of the two <span class="chem">u</span>-roots is <span class="chem">2k &lt; 0</span>, so at least one root is negative and cannot equal <span class="chem">e^x</span>. Only <span class="chem">k &gt; 2</span> makes <span class="chem">Δ &gt; 0</span>, <span class="chem">u_1 + u_2 = 2k &gt; 0</span>, and <span class="chem">u_1 u_2 = k + 2 &gt; 0</span>.</p>'
  },
  {
    id: 't1-2-q018',
    topic: 't1-2', level: 'sl', tier: 'foundation', type: 'numeric', marks: 2,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.5',
    stem: '<p>Use your GDC to solve <span class="chem">7^x = 50</span>. Give your answer correct to 3 significant figures.</p>',
    answer: 2.0103821378018547,
    tolerance: { rel: 0.005 },
    sigfigs: 3,
    hints: [
      'Rewrite the equation in logarithmic form: <span class="chem">x = log_7 50</span>.',
      'Evaluate it on the GDC, either with the <span class="mono">log<sub>a</sub></span> template or as <span class="chem">ln 50 / ln 7</span>.'
    ],
    solution: '<div class="worked__math"><i>x</i> = log<sub>7</sub> 50 = <span class="frac"><span>ln 50</span><span>ln 7</span></span> ≈ 2.01038   <b>[M1]</b></div><p>To 3 significant figures, <strong><i>x</i> = 2.01</strong>. <b>[A1]</b></p>'
  },
  /* ======================= PAPER 2 (GDC): FOUNDATION ===================== */
  {
    id: 't1-2-q019',
    topic: 't1-2', level: 'sl', tier: 'foundation', type: 'numeric', marks: 2,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.5',
    stem: '<p>Solve <span class="chem">10^x = 0.0042</span>. Give your answer correct to 3 significant figures.</p>',
    answer: -2.3767507096020997,
    sigfigs: 3,
    hints: [
      'Rewrite the equation in logarithmic form: <span class="chem">x = log_{10}(0.0042)</span>, written <span class="chem">log 0.0042</span> in IB notation.',
      'Evaluate it with the <span class="mono">log</span> key of your GDC. A number between 0 and 1 has a negative logarithm.'
    ],
    solution: '<div class="worked__math"><i>x</i> = log 0.0042   <b>[M1]</b></div><div class="worked__math"><i>x</i> = −2.37675… ≈ <b>−2.38</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q020',
    topic: 't1-2', level: 'sl', tier: 'foundation', type: 'numeric', marks: 2,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.5',
    stem: '<p>The pH of a solution is defined by <span class="chem">pH = -log[H^+]</span>, where <span class="chem">[H^+]</span> is the hydrogen ion concentration in <span class="unit">mol dm-3</span> and log is to base 10. A sample of sea water has a pH of 8.3. Find <span class="chem">[H^+]</span> for this sample, giving your answer in standard form correct to 3 significant figures.</p>',
    answer: 5.011872336272715e-9,
    sigfigs: 3,
    hints: [
      'Substitute: <span class="chem">8.3 = -log[H^+]</span>, so <span class="chem">log[H^+] = -8.3</span>.',
      'Convert to exponential form, <span class="chem">[H^+] = 10^{-8.3}</span>, and evaluate it on your GDC.'
    ],
    solution: '<div class="worked__math">log[H<sup>+</sup>] = −8.3  ⇒  [H<sup>+</sup>] = 10<sup>−8.3</sup>   <b>[M1]</b></div><div class="worked__math">[H<sup>+</sup>] = <b>5.01 × 10<sup>−9</sup></b> mol dm<sup>−3</sup>   <b>[A1]</b></div>'
  },

  /* ======================= PAPER 2 (GDC): EXAM =========================== */
  {
    id: 't1-2-q021',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.7',
    stem: '<p>Solve the equation <span class="chem">5^{2x-1} = 3^{x+2}</span>. Give your answer correct to 3 significant figures.</p>',
    answer: 1.79537233215479,
    sigfigs: 3,
    hints: [
      'The bases 5 and 3 cannot be made equal, so take <span class="chem">ln</span> (or log) of both sides.',
      'The power law gives <span class="chem">(2x - 1) ln 5 = (x + 2) ln 3</span>. Expand both sides and collect the <span class="chem">x</span> terms.',
      'You should get <span class="chem">x(2 ln 5 - ln 3) = 2 ln 3 + ln 5</span>.'
    ],
    solution: '<div class="worked__math">(2<i>x</i> − 1) ln 5 = (<i>x</i> + 2) ln 3   <b>[M1 A1]</b></div><div class="worked__math"><i>x</i>(2 ln 5 − ln 3) = 2 ln 3 + ln 5  ⇒  <i>x</i> = <span class="frac"><span>2 ln 3 + ln 5</span><span>2 ln 5 − ln 3</span></span>   <b>[M1]</b></div><div class="worked__math"><i>x</i> = 1.79537… ≈ <b>1.80</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q022',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.7',
    stem: '<p>The number of bacteria in a culture is modelled by <span class="chem">N = 250e^{0.42t}</span>, where <span class="chem">t</span> is the time in hours after the culture was prepared. Find the time it takes for the number of bacteria to increase from 1000 to 4000. Give your answer in hours, correct to 3 significant figures.</p>',
    answer: 3.300700859809263,
    sigfigs: 3,
    hints: [
      'Decode: the question asks for a length of time, not a moment. Find the time when <span class="chem">N = 1000</span> and the time when <span class="chem">N = 4000</span>, then subtract.',
      'Solve <span class="chem">250e^{0.42t} = 1000</span>: divide by 250 and take <span class="chem">ln</span> of both sides.',
      'Do the same for <span class="chem">N = 4000</span>. (Shortcut: the number has to multiply by 4, so the time is <span class="chem">ln 4 / 0.42</span>.)'
    ],
    solution: '<p><strong>Decode:</strong> “the time it takes to increase from 1000 to 4000” is the difference between two times.</p><div class="worked__math">250e<sup>0.42<i>t</i><sub>1</sub></sup> = 1000  ⇒  <i>t</i><sub>1</sub> = <span class="frac"><span>ln 4</span><span>0.42</span></span> = 3.3007…   <b>[M1 A1]</b></div><div class="worked__math">250e<sup>0.42<i>t</i><sub>2</sub></sup> = 4000  ⇒  <i>t</i><sub>2</sub> = <span class="frac"><span>ln 16</span><span>0.42</span></span> = 6.6014…   <b>[A1]</b></div><div class="worked__math"><i>t</i><sub>2</sub> − <i>t</i><sub>1</sub> = 3.3007… ≈ <b>3.30 hours</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q023',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.7',
    stem: '<p>Solve the equation <span class="chem">3e^{2x} - 4e^x - 2 = 0</span> for <span class="chem">x</span> ∈ ℝ. Give your answer correct to 3 significant figures.</p>',
    answer: 0.5427656004433221,
    sigfigs: 3,
    hints: [
      'Let <span class="chem">u = e^x</span>, so <span class="chem">e^{2x} = u^2</span>. This gives the quadratic <span class="chem">3u^2 - 4u - 2 = 0</span>.',
      'The quadratic does not factorise: use the quadratic formula or the polynomial solver on your GDC.',
      'One value of <span class="chem">u</span> is negative. Since <span class="chem">e^x &gt; 0</span>, reject it, then use <span class="chem">x = ln u</span>.'
    ],
    solution: '<div class="worked__math">Let <i>u</i> = e<sup><i>x</i></sup>:  3<i>u</i><sup>2</sup> − 4<i>u</i> − 2 = 0   <b>[M1]</b></div><div class="worked__math"><i>u</i> = <span class="frac"><span>2 ± √10</span><span>3</span></span>, so <i>u</i> = 1.72076… or <i>u</i> = −0.38743…   <b>[A1]</b></div><div class="worked__math">Reject <i>u</i> = −0.387… because e<sup><i>x</i></sup> &gt; 0 for all real <i>x</i>.   <b>[R1]</b></div><div class="worked__math"><i>x</i> = ln 1.72076…   <b>[M1]</b>   = 0.54277… ≈ <b>0.543</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q024',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.7, 2.10',
    stem: '<p>The equation <span class="chem">2^x = x + 5</span> has exactly two real solutions. Verify that <span class="chem">x = 3</span> is one of them, and find the other solution correct to 3 significant figures.</p>',
    answer: -4.968050220618564,
    sigfigs: 3,
    hints: [
      'Verify by substitution: compare <span class="chem">2^3</span> with <span class="chem">3 + 5</span>.',
      'The equation mixes an exponential with a linear term, so logarithms alone cannot isolate <span class="chem">x</span>. Graph <span class="chem">y = 2^x</span> and <span class="chem">y = x + 5</span> on your GDC.',
      'The second intersection is far to the left, where <span class="chem">2^x</span> is close to 0, so <span class="chem">x + 5</span> must also be close to 0. Widen your window to see it.'
    ],
    solution: '<div class="worked__math">2<sup>3</sup> = 8 and 3 + 5 = 8, so <i>x</i> = 3 is a solution.   <b>[M1 A1]</b></div><div class="worked__math">Graph <i>y</i> = 2<sup><i>x</i></sup> and <i>y</i> = <i>x</i> + 5 (or find the zeros of <i>y</i> = 2<sup><i>x</i></sup> − <i>x</i> − 5) on the GDC.   <b>[M1]</b></div><div class="worked__math">The other intersection is at <i>x</i> = −4.96805… ≈ <b>−4.97</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q025',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.9',
    stem: '<p>Find the coefficient of <span class="chem">x^5</span> in the expansion of <span class="chem">(1 - 0.15x)^{20}</span>. Give your answer correct to 3 significant figures.</p>',
    answer: -1.177335,
    sigfigs: 3,
    hints: [
      'The general term is <span class="chem">^{20}C_r (1)^{20-r} (-0.15x)^r</span>.',
      'For <span class="chem">x^5</span> take <span class="chem">r = 5</span>. Use the <span class="mono">nCr</span> function of your GDC for <span class="chem">^{20}C_5</span>.',
      'Keep the sign: <span class="chem">(-0.15)^5</span> is negative.'
    ],
    solution: '<div class="worked__math">General term <sup>20</sup>C<sub><i>r</i></sub> (−0.15<i>x</i>)<sup><i>r</i></sup>; for <i>x</i><sup>5</sup>, <i>r</i> = 5.   <b>[M1 A1]</b></div><div class="worked__math"><sup>20</sup>C<sub>5</sub> = 15504   <b>[A1]</b></div><div class="worked__math">15504 × (−0.15)<sup>5</sup> = −1.177335 ≈ <b>−1.18</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q026',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.9',
    stem: '<p>Find the exact value of the term independent of <span class="chem">x</span> in the expansion of <span class="chem">(x^2 - 3/(2x))^9</span>.</p>',
    answer: 956.8125,
    exact: true,
    answerInput: '15309/16',
    hints: [
      'Write the general term <span class="chem">^9C_r (x^2)^{9-r} (-3/(2x))^r</span> and collect the powers of <span class="chem">x</span>.',
      'The power of <span class="chem">x</span> is <span class="chem">18 - 2r - r = 18 - 3r</span>. The term independent of <span class="chem">x</span> has power 0.',
      'With <span class="chem">r = 6</span>, evaluate <span class="chem">^9C_6 × (-3/2)^6</span>. An even power makes the sign positive.'
    ],
    solution: '<div class="worked__math"><i>T</i><sub><i>r</i>+1</sub> = <sup>9</sup>C<sub><i>r</i></sub> (<i>x</i><sup>2</sup>)<sup>9−<i>r</i></sup> (−<span class="frac"><span>3</span><span>2</span></span>)<sup><i>r</i></sup> <i>x</i><sup>−<i>r</i></sup> = <sup>9</sup>C<sub><i>r</i></sub> (−<span class="frac"><span>3</span><span>2</span></span>)<sup><i>r</i></sup> <i>x</i><sup>18−3<i>r</i></sup>   <b>[M1 A1]</b></div><div class="worked__math">18 − 3<i>r</i> = 0  ⇒  <i>r</i> = 6   <b>[A1]</b></div><div class="worked__math"><sup>9</sup>C<sub>6</sub> × (<span class="frac"><span>3</span><span>2</span></span>)<sup>6</sup> = 84 × <span class="frac"><span>729</span><span>64</span></span>   <b>[M1]</b>   = <b><span class="frac"><span>15309</span><span>16</span></span> = 956.8125</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q027',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.9',
    stem: '<p>Consider the expansion of <span class="chem">(1 + x/4)^n</span>, where <span class="chem">n &gt;= 3</span> is an integer. Find the smallest value of <span class="chem">n</span> for which the coefficient of <span class="chem">x^3</span> is greater than 100.</p>',
    answer: 35,
    tolerance: 0,
    hints: [
      'Decode: write the coefficient of <span class="chem">x^3</span> as a function of <span class="chem">n</span>, then search for the first integer <span class="chem">n</span> that makes it exceed 100.',
      'The term in <span class="chem">x^3</span> is <span class="chem">^nC_3 (x/4)^3</span>, so the coefficient is <span class="chem">^nC_3 / 64</span>.',
      'You need <span class="chem">^nC_3 &gt; 6400</span>. Use a table of <span class="mono">nCr(n, 3)</span> on your GDC and check the values either side of the crossing.'
    ],
    solution: '<p><strong>Decode:</strong> this is a search over integers, not an equation with one exact root.</p><div class="worked__math">Coefficient of <i>x</i><sup>3</sup> = <sup><i>n</i></sup>C<sub>3</sub> × (<span class="frac"><span>1</span><span>4</span></span>)<sup>3</sup> = <span class="frac"><span><sup><i>n</i></sup>C<sub>3</sub></span><span>64</span></span>   <b>[M1 A1]</b></div><div class="worked__math"><span class="frac"><span><sup><i>n</i></sup>C<sub>3</sub></span><span>64</span></span> &gt; 100  ⇒  <sup><i>n</i></sup>C<sub>3</sub> &gt; 6400   <b>[M1]</b></div><div class="worked__math">GDC table: <sup>34</sup>C<sub>3</sub> = 5984 (too small), <sup>35</sup>C<sub>3</sub> = 6545   <b>[A1]</b></div><div class="worked__math">Smallest <b><i>n</i> = 35</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q028',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.5, 1.7',
    stem: '<p>The loudness <span class="chem">L</span> of a sound, in decibels, is given by <span class="chem">L = 10 log(I/I_0)</span>, where <span class="chem">I</span> is the intensity of the sound, <span class="chem">I_0</span> is a fixed reference intensity, and log is to base 10. Traffic on a busy street measures 78 decibels and a rock concert measures 95 decibels. Find how many times more intense the sound of the concert is than the sound of the traffic. Give your answer correct to 3 significant figures.</p>',
    answer: 50.11872336272722,
    sigfigs: 3,
    hints: [
      'Decode: “how many times more intense” asks for the ratio <span class="chem">I_{concert} / I_{traffic}</span>. You do not need to know <span class="chem">I_0</span>.',
      'Write <span class="chem">95 = 10 log(I_c / I_0)</span> and <span class="chem">78 = 10 log(I_t / I_0)</span>, then subtract. The quotient law turns the difference of logs into <span class="chem">log(I_c / I_t)</span>.',
      'You should get <span class="chem">log(I_c / I_t) = 1.7</span>.'
    ],
    solution: '<p><strong>Decode:</strong> the answer is a ratio of intensities, so subtract the two decibel equations and the unknown <i>I</i><sub>0</sub> cancels.</p><div class="worked__math">95 − 78 = 10 log(<i>I</i><sub>c</sub>/<i>I</i><sub>0</sub>) − 10 log(<i>I</i><sub>t</sub>/<i>I</i><sub>0</sub>) = 10 log(<i>I</i><sub>c</sub>/<i>I</i><sub>t</sub>)   <b>[M1 M1]</b></div><div class="worked__math">log(<i>I</i><sub>c</sub>/<i>I</i><sub>t</sub>) = 1.7   <b>[A1]</b></div><div class="worked__math"><i>I</i><sub>c</sub>/<i>I</i><sub>t</sub> = 10<sup>1.7</sup> = 50.118… ≈ <b>50.1</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q029',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.7',
    stem: '<p>After an injection, the amount of a drug in a patient’s bloodstream is modelled by <span class="chem">A = A_0 e^{-kt}</span>, where <span class="chem">t</span> is the time in hours and <span class="chem">A_0</span> is the initial dose. The amount of drug halves every 5.5 hours. Find the time it takes for the amount to fall to 15% of the initial dose. Give your answer in hours, correct to 3 significant figures.</p>',
    answer: 15.053310767914134,
    sigfigs: 3,
    hints: [
      'Decode: “halves every 5.5 hours” gives you <span class="chem">k</span>; “15% of the initial dose” means <span class="chem">A = 0.15A_0</span>. The value of <span class="chem">A_0</span> cancels.',
      'From <span class="chem">0.5 = e^{-5.5k}</span>, <span class="chem">k = ln 2 / 5.5</span>.',
      'Now solve <span class="chem">0.15 = e^{-kt}</span> for <span class="chem">t</span>.'
    ],
    solution: '<p><strong>Decode:</strong> the half-life fixes <i>k</i>; then solve for the time at which <i>A</i> = 0.15<i>A</i><sub>0</sub>.</p><div class="worked__math">0.5<i>A</i><sub>0</sub> = <i>A</i><sub>0</sub>e<sup>−5.5<i>k</i></sup>   <b>[M1]</b>  ⇒  <i>k</i> = <span class="frac"><span>ln 2</span><span>5.5</span></span> = 0.126026…   <b>[A1]</b></div><div class="worked__math">0.15 = e<sup>−<i>kt</i></sup>   <b>[M1]</b>  ⇒  <i>t</i> = <span class="frac"><span>ln(1/0.15)</span><span><i>k</i></span></span>   <b>[A1]</b></div><div class="worked__math"><i>t</i> = 15.0533… ≈ <b>15.1 hours</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q030',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'short', marks: 7,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.7',
    stem: '<p>A cup of tea is left to cool in a room. Its temperature, <span class="chem">T</span> °C, <span class="chem">t</span> minutes after it was poured, is modelled by <span class="chem">T = 22 + 68e^{-kt}</span>, where <span class="chem">k &gt; 0</span>.<br>(a) Write down the temperature of the tea when it was poured. <strong>[1]</strong><br>(b) After 4 minutes the temperature is 61 °C. Find the value of <span class="chem">k</span>. <strong>[3]</strong><br>(c) Find the time it takes for the tea to cool to 30 °C. <strong>[2]</strong><br>(d) Explain why, according to this model, the tea never cools to 22 °C. <strong>[1]</strong></p>',
    answer: '<div class="worked__math">(a) <i>T</i>(0) = 22 + 68 = <b>90 °C</b>.</div><div class="worked__math">(b) 61 = 22 + 68e<sup>−4<i>k</i></sup>  ⇒  e<sup>−4<i>k</i></sup> = <span class="frac"><span>39</span><span>68</span></span>  ⇒  <i>k</i> = <span class="frac"><span>1</span><span>4</span></span> ln<span class="frac"><span>68</span><span>39</span></span> = 0.138986… ≈ <b>0.139</b>.</div><div class="worked__math">(c) 30 = 22 + 68e<sup>−<i>kt</i></sup>  ⇒  e<sup>−<i>kt</i></sup> = <span class="frac"><span>8</span><span>68</span></span>  ⇒  <i>t</i> = <span class="frac"><span>ln(68/8)</span><span><i>k</i></span></span> = 15.397… ≈ <b>15.4 minutes</b>.</div><div class="worked__math">(d) e<sup>−<i>kt</i></sup> &gt; 0 for every <i>t</i>, so <i>T</i> &gt; 22: the temperature approaches the room temperature of 22 °C but never reaches it.</div>',
    markscheme: [
      'A1: (a) T = 22 + 68 = 90 °C.',
      'M1: (b) Substitutes t = 4 and T = 61: 61 = 22 + 68e^(−4k).',
      'A1: Obtains e^(−4k) = 39/68 (≈ 0.574).',
      'A1: k = 0.139 (0.138986…).',
      'M1: (c) Sets 30 = 22 + 68e^(−kt), so e^(−kt) = 8/68 (or solves graphically on the GDC).',
      'A1: t = 15.4 minutes (15.397…).',
      'R1: (d) e^(−kt) > 0 for all t, so T > 22: the temperature approaches 22 °C but never reaches it.'
    ],
    hints: [
      'For (a), put <span class="chem">t = 0</span>: <span class="chem">e^0 = 1</span>.',
      'For (b), isolate the exponential first: <span class="chem">e^{-4k} = (61 - 22)/68</span>, then take <span class="chem">ln</span> of both sides.',
      'For (c), use the unrounded value of <span class="chem">k</span> stored in your GDC to avoid rounding errors.',
      'For (d), think about the sign of <span class="chem">68e^{-kt}</span>.'
    ],
    solution: '<p>Isolate the exponential, take natural logarithms, and keep <span class="chem">k</span> unrounded in your GDC for part (c). The horizontal asymptote <span class="chem">T = 22</span> is the room temperature.</p>'
  },
  {
    id: 't1-2-q031',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'short', marks: 6,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.9',
    stem: '<p>(a) Find the first three terms, in ascending powers of <span class="chem">x</span>, of the expansion of <span class="chem">(1 - x)^8</span>. <strong>[2]</strong><br>(b) Hence, by choosing a suitable value of <span class="chem">x</span>, find an estimate for <span class="chem">0.98^8</span>. <strong>[2]</strong><br>(c) Use your GDC to find the percentage error in your estimate, correct to 3 significant figures. <strong>[2]</strong></p>',
    answer: '<div class="worked__math">(a) (1 − <i>x</i>)<sup>8</sup> = 1 − 8<i>x</i> + 28<i>x</i><sup>2</sup> − …</div><div class="worked__math">(b) With <i>x</i> = 0.02: 1 − 0.16 + 0.0112 = <b>0.8512</b>.</div><div class="worked__math">(c) 0.98<sup>8</sup> = 0.8507630… (GDC). Percentage error = <span class="frac"><span>|0.8512 − 0.8507630…|</span><span>0.8507630…</span></span> × 100% = <b>0.0514%</b>.</div>',
    markscheme: [
      'A1: (a) 1 − 8x (first two terms correct).',
      'A1: + 28x^2 (third term correct, from ⁸C₂ = 28).',
      'M1: (b) Substitutes x = 0.02 into the three terms.',
      'A1: Estimate 0.8512.',
      'M1: (c) Uses |estimate − exact| / exact × 100% with the GDC value 0.850763….',
      'A1: Percentage error = 0.0514%.'
    ],
    hints: [
      'Use <span class="chem">^8C_0, ^8C_1, ^8C_2</span> with <span class="chem">b = -x</span>.',
      'For (b), solve <span class="chem">1 - x = 0.98</span> to choose <span class="chem">x</span>.',
      'Percentage error = |approximate − exact| ÷ exact × 100%. Divide by the exact value from the GDC.'
    ],
    solution: '<p>The terms after <span class="chem">x^2</span> contain <span class="chem">0.02^3</span> and smaller powers, which is why three terms already give an error of about 0.05%.</p>'
  },
  {
    id: 't1-2-q032',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'short', marks: 9,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.7, 4.4',
    stem: '<p>The number of followers, <span class="chem">y</span> hundred, of a new online channel, <span class="chem">x</span> weeks after it was launched, is shown in the table.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"><i>x</i> (weeks)</th><th scope="col">1</th><th scope="col">2</th><th scope="col">3</th><th scope="col">4</th><th scope="col">5</th><th scope="col">6</th></tr></thead><tbody><tr><th scope="row"><i>y</i> (hundreds)</th><td>4.6</td><td>6.8</td><td>9.7</td><td>14.2</td><td>20.5</td><td>29.9</td></tr></tbody></table></div><p>The data are modelled by <span class="chem">y = a b^x</span>, where <span class="chem">a, b &gt; 0</span>.<br>(a) Show that <span class="chem">ln y = ln a + x ln b</span>. <strong>[2]</strong><br>(b) Use your GDC to find the equation of the regression line of <span class="chem">ln y</span> on <span class="chem">x</span>. <strong>[2]</strong><br>(c) Hence find the values of <span class="chem">a</span> and <span class="chem">b</span>. <strong>[2]</strong><br>(d) Use the model to estimate the number of followers after 8 weeks, and comment on the reliability of this estimate. <strong>[3]</strong></p>',
    answer: '<div class="worked__math">(a) ln <i>y</i> = ln(<i>a b</i><sup><i>x</i></sup>) = ln <i>a</i> + ln(<i>b</i><sup><i>x</i></sup>) = ln <i>a</i> + <i>x</i> ln <i>b</i>.</div><div class="worked__math">(b) With <i>Y</i> = ln <i>y</i>: <i>Y</i> = 0.373<i>x</i> + 1.16 (gradient 0.372875…, intercept 1.159375…).</div><div class="worked__math">(c) <i>b</i> = e<sup>0.372875…</sup> = <b>1.45</b>,  <i>a</i> = e<sup>1.159375…</sup> = <b>3.19</b>.</div><div class="worked__math">(d) <i>y</i> = 3.1879… × 1.4519…<sup>8</sup> = 63.0 hundred, so about <b>6300 followers</b>. This is an extrapolation (outside 1 ≤ <i>x</i> ≤ 6), so it is less reliable, although the fit to the data is very close.</div>',
    markscheme: [
      'M1: (a) Takes ln of both sides: ln y = ln(a b^x).',
      'A1: Uses the product and power laws: ln(a b^x) = ln a + ln(b^x) = ln a + x ln b. AG: ln y = ln a + x ln b; the given line itself earns no mark.',
      'A1: (b) Gradient 0.373 (0.372875…).',
      'A1: Intercept 1.16 (1.159375…), so ln y = 0.373x + 1.16.',
      'A1: (c) b = e^0.372875… = 1.45.',
      'A1: a = e^1.159375… = 3.19.',
      'M1: (d) Substitutes x = 8 into the model.',
      'A1: y ≈ 63.0 hundred, about 6300 followers (accept 62.3 to 63.1 hundred from rounded values of a and b, or of the gradient and intercept).',
      'R1: Not reliable, or less reliable, because x = 8 is outside the data range (extrapolation).'
    ],
    hints: [
      'For (a), apply <span class="chem">ln</span> to both sides and use <span class="chem">ln(PQ) = ln P + ln Q</span> and <span class="chem">ln(b^x) = x ln b</span>.',
      'For (b), make a new list of <span class="chem">ln y</span> values on your GDC and run linear regression with <span class="chem">x</span> as the independent variable.',
      'For (c), compare <span class="chem">ln y = mx + c</span> with part (a): <span class="chem">ln b = m</span> and <span class="chem">ln a = c</span>.',
      'For (d), remember that <span class="chem">y</span> is measured in hundreds.'
    ],
    solution: '<p>Taking logarithms turns the exponential model into a straight line in <span class="chem">x</span> and <span class="chem">ln y</span>. The gradient gives <span class="chem">ln b</span> and the intercept gives <span class="chem">ln a</span>.</p>'
  },
  {
    id: 't1-2-q033',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.9',
    stem: '<p>In the expansion of <span class="chem">(1 + ax)^n</span>, where <span class="chem">n</span> is a positive integer, the coefficient of <span class="chem">x</span> is −6.3 and the coefficient of <span class="chem">x^2</span> is 18.9. Find the value of <span class="chem">a</span>.</p>',
    answer: -0.3,
    sigfigs: 3,
    hints: [
      'Write the two coefficients: <span class="chem">na = -6.3</span> and <span class="chem">^nC_2 a^2 = n(n - 1)a^2 / 2 = 18.9</span>.',
      'Substitute <span class="chem">a = -6.3/n</span> into the second equation, or solve the pair with your GDC.',
      'You should find that <span class="chem">n = 21</span>. Then use <span class="chem">na = -6.3</span>.'
    ],
    solution: '<div class="worked__math"><i>na</i> = −6.3   <b>[A1]</b>   and   <span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span><i>a</i><sup>2</sup> = 18.9   <b>[A1]</b></div><div class="worked__math">Substitute <i>a</i> = −6.3/<i>n</i>:  <span class="frac"><span>(<i>n</i> − 1) × 39.69</span><span>2<i>n</i></span></span> = 18.9   <b>[M1]</b>  ⇒  39.69<i>n</i> − 39.69 = 37.8<i>n</i>  ⇒  <i>n</i> = 21   <b>[A1]</b></div><div class="worked__math"><i>a</i> = −6.3 / 21 = <b>−0.3</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q044',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.9',
    stem: '<p>In the expansion of <span class="chem">(2 + x)^n</span>, where <span class="chem">n &gt;= 3</span> is an integer, the coefficient of <span class="chem">x^3</span> is 15360. Find the value of <span class="chem">n</span>.</p>',
    answer: 10,
    tolerance: 0,
    hints: [
      'The term in <span class="chem">x^3</span> is <span class="chem">^nC_3 2^{n-3} x^3</span>.',
      'The equation <span class="chem">^nC_3 × 2^{n-3} = 15360</span> cannot be rearranged for <span class="chem">n</span> by hand. Tabulate <span class="mono">nCr(n, 3) × 2^(n − 3)</span> on your GDC for <span class="chem">n = 3, 4, 5, …</span>.'
    ],
    solution: '<div class="worked__math">Coefficient of <i>x</i><sup>3</sup> = <sup><i>n</i></sup>C<sub>3</sub> × 2<sup><i>n</i>−3</sup>   <b>[M1]</b>, so <sup><i>n</i></sup>C<sub>3</sub> × 2<sup><i>n</i>−3</sup> = 15360   <b>[A1]</b></div><div class="worked__math">GDC table: <i>n</i> = 9 gives 5376, <i>n</i> = 10 gives 120 × 128 = 15360   <b>[M1]</b></div><div class="worked__math"><b><i>n</i> = 10</b>   <b>[A1]</b></div>'
  },

  /* ======================= PAPER 2 (GDC): CHALLENGE ====================== */
  {
    id: 't1-2-q034',
    topic: 't1-2', level: 'sl', tier: 'challenge', type: 'numeric', marks: 6,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.7',
    stem: '<p>On 1 January 2025 town A had 12 000 residents and town B had 8000 residents. Planners model the populations by <span class="chem">P_A = 12000(1.035)^t</span> and <span class="chem">P_B = 8000(1.062)^t</span>, where <span class="chem">t</span> is the time in years after 1 January 2025 and the models are valid for all <span class="chem">t &gt;= 0</span>. Find the calendar year during which the population of town B first becomes larger than the population of town A.</p>',
    answer: 2040,
    tolerance: 0,
    hints: [
      'Decode: you need the moment <span class="chem">P_B = P_A</span>, and then you must turn a value of <span class="chem">t</span> into a calendar year. The answer is a year, not a number of years.',
      'Set <span class="chem">8000(1.062)^t = 12000(1.035)^t</span> and divide to get <span class="chem">(1.062/1.035)^t = 1.5</span>.',
      'Take logarithms: <span class="chem">t = ln 1.5 / ln(1.062/1.035)</span>. Then decide which year contains the date <span class="chem">t</span> years after 1 January 2025.'
    ],
    solution: '<p><strong>Decode:</strong> solve an exponential equation for <i>t</i>, then convert “<i>t</i> years after 1 January 2025” into a calendar year.</p><div class="worked__math">8000(1.062)<sup><i>t</i></sup> = 12000(1.035)<sup><i>t</i></sup>   <b>[M1]</b>  ⇒  (<span class="frac"><span>1.062</span><span>1.035</span></span>)<sup><i>t</i></sup> = 1.5   <b>[A1]</b></div><div class="worked__math"><i>t</i> ln(<span class="frac"><span>1.062</span><span>1.035</span></span>) = ln 1.5   <b>[M1]</b>  ⇒  <i>t</i> = 15.744…   <b>[A1]</b></div><div class="worked__math">15 &lt; <i>t</i> &lt; 16, and 1 January 2025 + 15 years = 1 January 2040, so the crossing happens during 2040.   <b>[R1]</b></div><div class="worked__math"><b>2040</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q035',
    topic: 't1-2', level: 'sl', tier: 'challenge', type: 'numeric', marks: 6,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.7',
    stem: '<p>Solve the equation <span class="chem">log_2 x + log_4(x + 3) = 3</span>. Give your answer correct to 3 significant figures.</p>',
    answer: 3.210229974149302,
    sigfigs: 3,
    hints: [
      'Decode: the two logarithms have different bases, so the log laws cannot combine them yet. Change both to base 2; the equation then becomes a polynomial that has no exact root you can find by hand, so finish on the GDC.',
      'Change of base: <span class="chem">log_4(x + 3) = log_2(x + 3) / log_2 4 = (1/2) log_2(x + 3)</span>.',
      'Multiply by 2 and combine: <span class="chem">log_2(x^2(x + 3)) = 6</span>, so <span class="chem">x^3 + 3x^2 - 64 = 0</span>.',
      'Solve the cubic with your GDC and check which roots satisfy <span class="chem">x &gt; 0</span>.'
    ],
    solution: '<p><strong>Decode:</strong> make the bases match with change of base, combine the logs, then solve the resulting cubic numerically.</p><div class="worked__math">log<sub>4</sub>(<i>x</i> + 3) = <span class="frac"><span>log<sub>2</sub>(<i>x</i> + 3)</span><span>2</span></span>   <b>[M1]</b>  ⇒  2 log<sub>2</sub> <i>x</i> + log<sub>2</sub>(<i>x</i> + 3) = 6   <b>[A1]</b></div><div class="worked__math">log<sub>2</sub>(<i>x</i><sup>2</sup>(<i>x</i> + 3)) = 6  ⇒  <i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup> = 64   <b>[M1 A1]</b></div><div class="worked__math">GDC: the cubic <i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup> − 64 = 0 has one real root, <i>x</i> = 3.21023…, and it satisfies <i>x</i> &gt; 0.   <b>[R1]</b></div><div class="worked__math"><b><i>x</i> = 3.21</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q036',
    topic: 't1-2', level: 'sl', tier: 'challenge', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.7',
    stem: '<p>Find the value of <span class="chem">x</span> for which <span class="chem">log_3 x = log_5(x + 10)</span>. Give your answer correct to 3 significant figures.</p>',
    answer: 6.884909627392135,
    sigfigs: 3,
    hints: [
      'Decode: two different bases, and the arguments differ too, so no log law collapses this to a simple equation. Rewrite both sides in a base your GDC knows, then solve numerically.',
      'Change of base: <span class="chem">ln x / ln 3 = ln(x + 10) / ln 5</span>.',
      'Graph <span class="chem">y = ln x / ln 3</span> and <span class="chem">y = ln(x + 10) / ln 5</span> for <span class="chem">x &gt; 0</span> and find the intersection.'
    ],
    solution: '<p><strong>Decode:</strong> change both logarithms to base e, then use the GDC to solve the equation graphically.</p><div class="worked__math"><span class="frac"><span>ln <i>x</i></span><span>ln 3</span></span> = <span class="frac"><span>ln(<i>x</i> + 10)</span><span>ln 5</span></span>   <b>[M1 A1]</b></div><div class="worked__math">Graph both sides (or the difference) for <i>x</i> &gt; 0 and find the intersection.   <b>[M1]</b></div><div class="worked__math">The curves meet once, at <i>x</i> = 6.88490…, which lies in the domain <i>x</i> &gt; 0.   <b>[R1]</b></div><div class="worked__math"><b><i>x</i> = 6.88</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q037',
    topic: 't1-2', level: 'sl', tier: 'challenge', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.5',
    stem: '<p>When the number <span class="chem">7^{100}</span> is written out in full in base 10, how many digits does it have?</p>',
    answer: 85,
    tolerance: 0,
    hints: [
      'Decode: the number of digits tells you which powers of 10 the number lies between. A whole number with <span class="chem">k</span> digits satisfies <span class="chem">10^{k-1} &lt;= N &lt; 10^k</span>, so this is a base-10 logarithm question.',
      'Find <span class="chem">log(7^{100}) = 100 log 7</span> on your GDC.',
      'If <span class="chem">log N = 84.5…</span>, then <span class="chem">10^{84} &lt;= N &lt; 10^{85}</span>. How many digits is that?'
    ],
    solution: '<p><strong>Decode:</strong> counting digits means locating the number between consecutive powers of 10, which is what log base 10 measures.</p><div class="worked__math">A whole number <i>N</i> with <i>k</i> digits satisfies 10<sup><i>k</i>−1</sup> ≤ <i>N</i> &lt; 10<sup><i>k</i></sup>.   <b>[M1]</b></div><div class="worked__math">log(7<sup>100</sup>) = 100 log 7 = 84.5098…   <b>[A1]</b></div><div class="worked__math">So 10<sup>84</sup> ≤ 7<sup>100</sup> &lt; 10<sup>85</sup> (indeed 7<sup>100</sup> ≈ 3.23 × 10<sup>84</sup>).   <b>[R1]</b></div><div class="worked__math"><b>85 digits</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q038',
    topic: 't1-2', level: 'sl', tier: 'challenge', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.5, 1.7',
    stem: '<p>A sheet of paper is 0.08 mm thick. Each time it is folded in half, the thickness of the folded stack doubles. Assume, unrealistically, that the paper can be folded as many times as needed. The mean distance from the Earth to the Moon is 384 400 km. Find the minimum number of folds needed for the thickness of the stack to be greater than this distance.</p>',
    answer: 43,
    tolerance: 0,
    hints: [
      'Decode: after <span class="chem">n</span> folds the thickness is <span class="chem">0.08 × 2^n</span> mm. You need the smallest whole number <span class="chem">n</span> that beats the distance, and the two lengths are in different units.',
      'Convert: <span class="chem">384400</span> km <span class="chem">= 384400 × 10^6</span> mm <span class="chem">= 3.844 × 10^{11}</span> mm.',
      'Solve <span class="chem">0.08 × 2^n &gt; 3.844 × 10^{11}</span> with logarithms, then round <strong>up</strong> to the next integer.'
    ],
    solution: '<p><strong>Decode:</strong> a doubling model with an inequality, a unit conversion and a “whole number of folds” condition.</p><div class="worked__math">384 400 km = 3.844 × 10<sup>11</sup> mm   <b>[A1]</b></div><div class="worked__math">0.08 × 2<sup><i>n</i></sup> &gt; 3.844 × 10<sup>11</sup>  ⇒  2<sup><i>n</i></sup> &gt; 4.805 × 10<sup>12</sup>   <b>[M1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln(4.805 × 10<sup>12</sup>)</span><span>ln 2</span></span>   <b>[M1]</b>   = 42.13…   <b>[A1]</b></div><div class="worked__math"><i>n</i> must be a whole number, so <b>43 folds</b>.   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q039',
    topic: 't1-2', level: 'sl', tier: 'challenge', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.9',
    stem: '<p>The expansion of <span class="chem">(3 + 2x)^{12}</span> is written in ascending powers of <span class="chem">x</span>. Find the exact value of the greatest coefficient in this expansion.</p>',
    answer: 55427328,
    exact: true,
    answerInput: '55427328',
    hints: [
      'Decode: “the greatest coefficient” is not the first or the last one. Each power <span class="chem">x^r</span> has its own coefficient, and you must compare all thirteen of them.',
      'The coefficient of <span class="chem">x^r</span> is <span class="chem">c_r = ^{12}C_r × 3^{12-r} × 2^r</span>.',
      'Enter <span class="chem">c_r</span> as a function of <span class="chem">r</span> in the GDC table for <span class="chem">r = 0, 1, …, 12</span> and read off the largest value. Check its neighbours.'
    ],
    solution: '<p><strong>Decode:</strong> list the coefficient of every power of <i>x</i> and find the largest; a GDC table does the comparison.</p><div class="worked__math">Coefficient of <i>x</i><sup><i>r</i></sup>: <i>c</i><sub><i>r</i></sub> = <sup>12</sup>C<sub><i>r</i></sub> × 3<sup>12−<i>r</i></sup> × 2<sup><i>r</i></sup>   <b>[M1 A1]</b></div><div class="worked__math">GDC table for <i>r</i> = 0, …, 12   <b>[M1]</b>: <i>c</i><sub>4</sub> = 51 963 120, <i>c</i><sub>5</sub> = 55 427 328, <i>c</i><sub>6</sub> = 43 110 144, so the maximum is at <i>r</i> = 5   <b>[A1]</b></div><div class="worked__math">Greatest coefficient = <b>55 427 328</b> (the coefficient of <i>x</i><sup>5</sup>)   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q040',
    topic: 't1-2', level: 'sl', tier: 'challenge', type: 'short', marks: 8,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.5, 1.7',
    stem: '<p>Astronomers measure the brightness of a star by its apparent magnitude <span class="chem">m</span>. For two stars with magnitudes <span class="chem">m_1</span> and <span class="chem">m_2</span>, and light fluxes <span class="chem">F_1</span> and <span class="chem">F_2</span> reaching the Earth, <span class="chem">m_1 - m_2 = -2.5 log(F_1/F_2)</span>, where log is to base 10. Brighter stars have smaller magnitudes.<br>(a) Star P has magnitude 2.4 and star Q has magnitude 5.9. Find <span class="chem">F_P / F_Q</span>. <strong>[3]</strong><br>(b) The faintest stars visible to the naked eye have magnitude 6.5. A small telescope can show stars that are 600 times fainter than this. Find the magnitude of the faintest stars visible through this telescope. <strong>[2]</strong><br>(c) Two stars, each of magnitude 4.0, are so close together that they appear as a single point of light. The flux from this point is the sum of the two fluxes. Find the magnitude of the point. <strong>[3]</strong></p>',
    answer: '<div class="worked__math">(a) 2.4 − 5.9 = −2.5 log(<i>F</i><sub>P</sub>/<i>F</i><sub>Q</sub>)  ⇒  log(<i>F</i><sub>P</sub>/<i>F</i><sub>Q</sub>) = 1.4  ⇒  <i>F</i><sub>P</sub>/<i>F</i><sub>Q</sub> = 10<sup>1.4</sup> = <b>25.1</b>.</div><div class="worked__math">(b) “600 times fainter” means <i>F</i><sub>T</sub>/<i>F</i><sub>6.5</sub> = 1/600, so <i>m</i> − 6.5 = −2.5 log(1/600) = 2.5 log 600  ⇒  <i>m</i> = <b>13.4</b> (13.445…).</div><div class="worked__math">(c) Fluxes add, so <i>F</i><sub>point</sub> = 2<i>F</i>, where <i>F</i> is the flux of one star. <i>m</i> − 4.0 = −2.5 log 2  ⇒  <i>m</i> = <b>3.25</b> (3.2474…). The magnitudes do not add: the pair is brighter, so its magnitude is smaller than 4.0.</div>',
    markscheme: [
      'M1: (a) Substitutes: 2.4 − 5.9 = −2.5 log(F_P/F_Q).',
      'A1: log(F_P/F_Q) = 1.4.',
      'A1: F_P/F_Q = 10^1.4 = 25.1.',
      'M1: (b) Uses a flux ratio of 1/600 (or 600 the other way round) with the formula: m − 6.5 = −2.5 log(1/600).',
      'A1: m = 13.4 (13.445…).',
      'R1: (c) Recognises that the fluxes add (F_point = 2F) and the magnitudes do not (the answer is not 8.0 or 4.0).',
      'M1: m − 4.0 = −2.5 log(2F/F) = −2.5 log 2.',
      'A1: m = 3.25 (3.2474…).'
    ],
    hints: [
      'Decode: this is a logarithmic scale. Differences of magnitudes correspond to ratios of fluxes, and “times fainter” and “sum of fluxes” must be turned into a flux ratio before you use the formula.',
      'For (a), substitute <span class="chem">m_1 = 2.4</span> and <span class="chem">m_2 = 5.9</span>, then divide by −2.5 and undo the log.',
      'For (b), let star 1 be the faintest telescope star and star 2 the faintest naked-eye star. Then <span class="chem">F_1 / F_2 = 1/600</span>.',
      'For (c), compare the point (flux <span class="chem">2F</span>) with one star (flux <span class="chem">F</span>, magnitude 4.0).'
    ],
    solution: '<p><strong>Decode:</strong> on a log scale, multiplying a flux by a factor adds a fixed amount to the magnitude. Every part becomes “find a flux ratio, then substitute”. In (c), doubling the flux lowers the magnitude by <span class="chem">2.5 log 2 ≈ 0.753</span>.</p>'
  },
  {
    id: 't1-2-q041',
    topic: 't1-2', level: 'sl', tier: 'challenge', type: 'short', marks: 7,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.9, 4.8',
    stem: '<p>A factory finds that 6% of the microchips it makes are faulty. Chips are packed in boxes of 15. A quality engineer explains that when <span class="chem">(0.94 + 0.06)^{15}</span> is expanded with the binomial theorem, the term <span class="chem">^{15}C_r (0.94)^{15-r} (0.06)^r</span> gives the probability that a box contains exactly <span class="chem">r</span> faulty chips.<br>(a) Write down the value of the sum of all the terms of the expansion, and explain why this value makes sense. <strong>[2]</strong><br>(b) Find the probability that a box contains exactly 2 faulty chips. <strong>[2]</strong><br>(c) A box is rejected if it contains more than 2 faulty chips. Find the probability that a box is rejected. <strong>[3]</strong></p>',
    answer: '<div class="worked__math">(a) (0.94 + 0.06)<sup>15</sup> = 1<sup>15</sup> = <b>1</b>. The terms cover every possible number of faulty chips (0 to 15), and the probabilities of all the possible outcomes add up to 1.</div><div class="worked__math">(b) <sup>15</sup>C<sub>2</sub> (0.94)<sup>13</sup>(0.06)<sup>2</sup> = 105 × 0.94<sup>13</sup> × 0.0036 = <b>0.169</b> (0.169104…).</div><div class="worked__math">(c) “More than 2” is everything except <i>r</i> = 0, 1, 2. Sum of the terms for <i>r</i> = 0, 1, 2 = 0.395292… + 0.378471… + 0.169104… = 0.942867…, so P(rejected) = 1 − 0.942867… = <b>0.0571</b>.</div>',
    markscheme: [
      'A1: (a) The sum is (0.94 + 0.06)^15 = 1.',
      'R1: The terms give the probabilities of all possible outcomes (r = 0 to 15), which must add up to 1.',
      'M1: (b) Uses ¹⁵C₂ (0.94)^13 (0.06)^2.',
      'A1: 0.169 (0.169104…).',
      'R1: (c) Interprets “more than 2” as 1 − (sum of the terms for r = 0, 1 and 2), or as the sum of the terms for r = 3 to 15.',
      'M1: Evaluates the terms for r = 0, 1, 2 (sum 0.942867…).',
      'A1: P(rejected) = 0.0571 (0.057133…).'
    ],
    hints: [
      'Decode: this is the binomial theorem in disguise. Each term of the expansion is the probability of a different number of faulty chips, so “more than 2” means adding many terms, or using the total from (a).',
      'For (a), simplify the bracket before you raise it to the power 15.',
      'For (b), substitute <span class="chem">r = 2</span>; your GDC gives <span class="chem">^{15}C_2</span>.',
      'For (c), it is quicker to subtract the terms for <span class="chem">r = 0, 1, 2</span> from the total than to add thirteen terms.'
    ],
    solution: '<p><strong>Decode:</strong> the expansion of <span class="chem">(q + p)^n</span> with <span class="chem">p + q = 1</span> lists the probabilities of 0, 1, 2, … faulty chips. Its total is 1, so “more than 2” is 1 minus the first three terms. (This is the binomial distribution of SL 4.8, here built from the binomial theorem.)</p>'
  },
  {
    id: 't1-2-q042',
    topic: 't1-2', level: 'sl', tier: 'challenge', type: 'short', marks: 8,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.7',
    stem: '<p>The mass of carbon-14 in a dead piece of wood decreases according to <span class="chem">N = N_0 e^{-lambda t}</span>, where <span class="chem">N_0</span> is the mass at the time the tree died and <span class="chem">t</span> is measured in years. The half-life of carbon-14 is 5730 years.<br>(a) Show that <span class="chem">lambda = ln 2 / 5730</span>, and find <span class="chem">lambda</span> correct to 3 significant figures. <strong>[2]</strong><br>(b) A wooden tool contains 37% of the carbon-14 that it contained when the tree died. Estimate the age of the tool, correct to 3 significant figures. <strong>[3]</strong><br>(c) The laboratory says that the 37% figure could be wrong by up to 2 percentage points in either direction. Find the range of possible ages of the tool, and the width of this range to the nearest 10 years. <strong>[3]</strong></p>',
    answer: '<div class="worked__math">(a) <span class="frac"><span>1</span><span>2</span></span><i>N</i><sub>0</sub> = <i>N</i><sub>0</sub>e<sup>−5730λ</sup>  ⇒  −5730λ = ln <span class="frac"><span>1</span><span>2</span></span> = −ln 2  ⇒  λ = <span class="frac"><span>ln 2</span><span>5730</span></span> = <b>1.21 × 10<sup>−4</sup></b>.</div><div class="worked__math">(b) 0.37 = e<sup>−λ<i>t</i></sup>  ⇒  <i>t</i> = <span class="frac"><span>ln(1/0.37)</span><span>λ</span></span> = 8219.1… ≈ <b>8220 years</b>.</div><div class="worked__math">(c) More carbon-14 left means a younger tool. 39% gives <i>t</i> = 7783.9…, and 35% gives <i>t</i> = 8678.5…. So 7780 ≲ <i>t</i> ≲ 8680 years, a range of width about <b>890 years</b> (894.6…).</div>',
    markscheme: [
      'M1: (a) Sets N_0/2 = N_0 e^(−5730λ) and takes ln: −5730λ = −ln 2. AG: λ = ln 2 / 5730; the given line itself earns no mark.',
      'A1: λ = 1.21 × 10^(−4) (0.000120968…).',
      'M1: (b) Sets 0.37 = e^(−λt).',
      'A1: t = ln(1/0.37)/λ (or −ln 0.37/λ).',
      'A1: t = 8220 years (8219.1…).',
      'R1: (c) Pairs the larger percentage (39%) with the younger age and the smaller percentage (35%) with the older age.',
      'A1: Range 7780 to 8680 years (7783.9… to 8678.5…).',
      'A1: Width 890 years (894.6…; accept 895 or 900 from rounded ages).'
    ],
    hints: [
      'Decode: “half-life” is a condition that fixes <span class="chem">lambda</span>; “37% of the carbon-14” means <span class="chem">N = 0.37N_0</span>; “±2 percentage points” means 35% and 39%, and you must work out which of these gives the older age.',
      'For (a), put <span class="chem">N = N_0 / 2</span> when <span class="chem">t = 5730</span>.',
      'For (b), <span class="chem">N_0</span> cancels: solve <span class="chem">0.37 = e^{-lambda t}</span>.',
      'For (c), repeat (b) with 0.35 and 0.39. Less carbon-14 remaining means more time has passed.'
    ],
    solution: '<p><strong>Decode:</strong> the half-life gives the decay constant, each percentage gives an equation <span class="chem">p = e^{-lambda t}</span>, and the measurement error becomes a pair of ages. A ±2-point error in the percentage gives an age uncertainty of nearly 900 years.</p>'
  },
  {
    id: 't1-2-q043',
    topic: 't1-2', level: 'sl', tier: 'challenge', type: 'short', marks: 8,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 1.9',
    stem: '<p>A bank pays interest at a nominal annual rate of 100%, compounded <span class="chem">n</span> times per year, so that an investment of $1 is worth <span class="chem">(1 + 1/n)^n</span> dollars after one year.<br>(a) Use the binomial theorem to show that the first four terms of the expansion of <span class="chem">(1 + 1/n)^n</span> are <span class="chem">1 + 1 + (n - 1)/(2n) + ((n - 1)(n - 2))/(6n^2)</span>. <strong>[3]</strong><br>(b) For monthly compounding, <span class="chem">n = 12</span>. Calculate the sum of these four terms, and use your GDC to find the value of <span class="chem">(1 + 1/12)^{12}</span>. Give both answers correct to 4 significant figures. <strong>[3]</strong><br>(c) Explain why the four-term sum is less than <span class="chem">(1 + 1/n)^n</span> for every <span class="chem">n &gt;= 4</span>. <strong>[1]</strong><br>(d) Write down the limit of the four-term sum as <span class="chem">n</span> becomes very large. <strong>[1]</strong></p>',
    answer: '<div class="worked__math">(a) (1 + 1/<i>n</i>)<sup><i>n</i></sup> = 1 + <sup><i>n</i></sup>C<sub>1</sub>(1/<i>n</i>) + <sup><i>n</i></sup>C<sub>2</sub>(1/<i>n</i>)<sup>2</sup> + <sup><i>n</i></sup>C<sub>3</sub>(1/<i>n</i>)<sup>3</sup> + …, with <i>n</i> × <span class="frac"><span>1</span><span><i>n</i></span></span> = 1, <span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2<i>n</i><sup>2</sup></span></span> = <span class="frac"><span><i>n</i> − 1</span><span>2<i>n</i></span></span> and <span class="frac"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6<i>n</i><sup>3</sup></span></span> = <span class="frac"><span>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6<i>n</i><sup>2</sup></span></span>.</div><div class="worked__math">(b) 1 + 1 + <span class="frac"><span>11</span><span>24</span></span> + <span class="frac"><span>110</span><span>864</span></span> = <b>2.586</b> (2.58564…);  (1 + 1/12)<sup>12</sup> = <b>2.613</b> (2.61303…).</div><div class="worked__math">(c) Every term left out, <sup><i>n</i></sup>C<sub><i>r</i></sub>(1/<i>n</i>)<sup><i>r</i></sup> for <i>r</i> ≥ 4, is positive, so the four-term sum is smaller than the full expansion.</div><div class="worked__math">(d) (<i>n</i> − 1)/(2<i>n</i>) → 1/2 and (<i>n</i> − 1)(<i>n</i> − 2)/(6<i>n</i><sup>2</sup>) → 1/6, so the limit is 1 + 1 + 1/2 + 1/6 = <b>8/3</b>.</div>',
    markscheme: [
      'M1: (a) Uses the general term ⁿCᵣ (1/n)^r for r = 0, 1, 2, 3.',
      'A1: ⁿC₂ (1/n)^2 = n(n − 1)/(2n^2) = (n − 1)/(2n).',
      'A1: ⁿC₃ (1/n)^3 = n(n − 1)(n − 2)/(6n^3) = (n − 1)(n − 2)/(6n^2). AG: the four terms are as given; the given line itself earns no mark.',
      'M1: (b) Substitutes n = 12 into the four terms: 1 + 1 + 11/24 + 110/864.',
      'A1: Four-term sum = 2.586.',
      'A1: (1 + 1/12)^12 = 2.613.',
      'R1: (c) All the omitted terms ⁿCᵣ (1/n)^r (r ≥ 4) are positive, so the full expansion is larger.',
      'A1: (d) 1 + 1 + 1/2 + 1/6 = 8/3.'
    ],
    hints: [
      'Decode: compound interest is the hook, but the question is a binomial expansion with <span class="chem">a = 1</span> and <span class="chem">b = 1/n</span>. You only need the terms for <span class="chem">r = 0, 1, 2, 3</span>.',
      'For (a), write <span class="chem">^nC_2 = n(n - 1)/2</span> and <span class="chem">^nC_3 = n(n - 1)(n - 2)/6</span>, then cancel one factor of <span class="chem">n</span>.',
      'For (c), what is the sign of each term you left out?',
      'For (d), divide the top and bottom of each fraction by the highest power of <span class="chem">n</span>.'
    ],
    solution: '<p><strong>Decode:</strong> recognise <span class="chem">(1 + 1/n)^n</span> as a binomial power. Its expansion begins <span class="chem">1 + 1 + 1/2 + 1/6 + …</span> for large <span class="chem">n</span>, which is how the number <span class="chem">e ≈ 2.718</span> arises from continuous compounding.</p>'
  },

  /* ======================= PAPER 1 (NO GDC) ============================== */
  {
    id: 't1-2-q045',
    topic: 't1-2', level: 'sl', tier: 'foundation', type: 'short', marks: 3,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.5',
    stem: '<p>Simplify <span class="chem">(2a^3 b^{-2})^3 / (4a^{-1} b)^2</span>, where <span class="chem">a, b != 0</span>, giving your answer in the form <span class="chem">k a^p b^q</span>.</p>',
    answer: '<div class="worked__math"><span class="frac"><span>8<i>a</i><sup>9</sup><i>b</i><sup>−6</sup></span><span>16<i>a</i><sup>−2</sup><i>b</i><sup>2</sup></span></span> = <b><span class="frac"><span>1</span><span>2</span></span><i>a</i><sup>11</sup><i>b</i><sup>−8</sup></b></div>',
    markscheme: [
      'M1: Raises each bracket to its power: 8a^9 b^(−6) and 16a^(−2) b^2.',
      'A1: k = 1/2.',
      'A1: a^11 b^(−8) (p = 11, q = −8).'
    ],
    hints: [
      'Use <span class="chem">(xy)^n = x^n y^n</span> and <span class="chem">(x^m)^n = x^{mn}</span> on each bracket.',
      'Then divide: <span class="chem">x^m / x^n = x^{m-n}</span>. Take care with the negative indices: <span class="chem">9 - (-2) = 11</span>.'
    ],
    solution: '<div class="worked__math">(2<i>a</i><sup>3</sup><i>b</i><sup>−2</sup>)<sup>3</sup> = 8<i>a</i><sup>9</sup><i>b</i><sup>−6</sup>,  (4<i>a</i><sup>−1</sup><i>b</i>)<sup>2</sup> = 16<i>a</i><sup>−2</sup><i>b</i><sup>2</sup></div><div class="worked__math">Quotient: <span class="frac"><span>8</span><span>16</span></span> <i>a</i><sup>9−(−2)</sup> <i>b</i><sup>−6−2</sup> = <span class="frac"><span>1</span><span>2</span></span><i>a</i><sup>11</sup><i>b</i><sup>−8</sup></div>'
  },
  {
    id: 't1-2-q046',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.7',
    stem: '<p>Solve the equation <span class="chem">2^{x+3} = 5^x</span>, giving your answer exactly in the form <span class="chem">ln p / ln q</span>, where <span class="chem">p, q</span> ∈ ℚ.</p>',
    answer: 2.26941239209809,
    exact: true,
    answerInput: 'ln(8)/ln(5/2)',
    hints: [
      'Take <span class="chem">ln</span> of both sides and use the power law: <span class="chem">(x + 3) ln 2 = x ln 5</span>.',
      'Collect the <span class="chem">x</span> terms: <span class="chem">x(ln 5 - ln 2) = 3 ln 2</span>.',
      'Use the log laws to write <span class="chem">3 ln 2</span> and <span class="chem">ln 5 - ln 2</span> each as a single logarithm.'
    ],
    solution: '<div class="worked__math">(<i>x</i> + 3) ln 2 = <i>x</i> ln 5   <b>[M1 A1]</b></div><div class="worked__math"><i>x</i>(ln 5 − ln 2) = 3 ln 2   <b>[M1]</b></div><div class="worked__math"><i>x</i> = <b><span class="frac"><span>ln 8</span><span>ln(5/2)</span></span></b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q047',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'short', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.7',
    stem: '<p>(a) Show that <span class="chem">log_a b × log_b c = log_a c</span> for <span class="chem">a, b, c &gt; 0</span>, <span class="chem">a, b != 1</span>. <strong>[2]</strong><br>(b) Hence find the value of <span class="chem">log_2 3 × log_3 4 × log_4 5 × … × log_{15} 16</span>. <strong>[2]</strong><br>(c) Find the integer <span class="chem">n</span> for which <span class="chem">log_2 3 × log_3 4 × … × log_n(n + 1) = 10</span>. <strong>[2]</strong></p>',
    answer: '<div class="worked__math">(a) log<sub><i>a</i></sub> <i>b</i> × log<sub><i>b</i></sub> <i>c</i> = <span class="frac"><span>ln <i>b</i></span><span>ln <i>a</i></span></span> × <span class="frac"><span>ln <i>c</i></span><span>ln <i>b</i></span></span> = <span class="frac"><span>ln <i>c</i></span><span>ln <i>a</i></span></span> = log<sub><i>a</i></sub> <i>c</i>.</div><div class="worked__math">(b) Applying (a) repeatedly, the product collapses to log<sub>2</sub> 16 = <b>4</b>.</div><div class="worked__math">(c) The product equals log<sub>2</sub>(<i>n</i> + 1) = 10, so <i>n</i> + 1 = 2<sup>10</sup> = 1024 and <b><i>n</i> = 1023</b>.</div>',
    markscheme: [
      'M1: (a) Uses change of base on both factors, e.g. log_a b = ln b / ln a and log_b c = ln c / ln b.',
      'A1: The ln b terms cancel to give ln c / ln a. AG: = log_a c; the given line itself earns no mark.',
      'M1: (b) Applies the result repeatedly (or cancels in a chain) to obtain log_2 16.',
      'A1: Value 4.',
      'M1: (c) Recognises the product equals log_2(n + 1) and sets log_2(n + 1) = 10.',
      'A1: n + 1 = 1024, so n = 1023.'
    ],
    hints: [
      'For (a), change both logarithms to base e (or any common base).',
      'For (b), each new factor “uses up” the previous argument: <span class="chem">log_2 3 × log_3 4 = log_2 4</span>, then <span class="chem">log_2 4 × log_4 5 = log_2 5</span>, and so on.',
      'For (c), the chain ends at <span class="chem">log_2(n + 1)</span>.'
    ],
    solution: '<p>The change-of-base result makes the product telescope: every intermediate argument cancels, leaving <span class="chem">log_2</span> of the last argument.</p>'
  },
  {
    id: 't1-2-q048',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.7',
    stem: '<p>Solve the equation <span class="chem">log_3(x + 1) - log_3(2x - 5) = 1</span>, giving the exact value of <span class="chem">x</span>.</p>',
    answer: 3.2,
    exact: true,
    answerInput: '16/5',
    hints: [
      'Use the quotient law: <span class="chem">log_3((x + 1)/(2x - 5)) = 1</span>.',
      'Rewrite in exponential form: <span class="chem">(x + 1)/(2x - 5) = 3^1</span>, then solve the linear equation.',
      'Check that your value makes both arguments, <span class="chem">x + 1</span> and <span class="chem">2x - 5</span>, positive.'
    ],
    solution: '<div class="worked__math">log<sub>3</sub><span class="frac"><span><i>x</i> + 1</span><span>2<i>x</i> − 5</span></span> = 1   <b>[M1]</b>  ⇒  <span class="frac"><span><i>x</i> + 1</span><span>2<i>x</i> − 5</span></span> = 3   <b>[A1]</b></div><div class="worked__math"><i>x</i> + 1 = 6<i>x</i> − 15   <b>[M1]</b>  ⇒  <b><i>x</i> = <span class="frac"><span>16</span><span>5</span></span></b>   <b>[A1]</b></div><div class="worked__math">Check: <i>x</i> + 1 = 21/5 &gt; 0 and 2<i>x</i> − 5 = 7/5 &gt; 0, so the solution is valid.   <b>[R1]</b></div>'
  },
  {
    id: 't1-2-q049',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.7',
    stem: '<p>The equation <span class="chem">4^x - 2^{x+3} + 12 = 0</span> has two solutions, one of which is an integer. Find the exact value of the other solution.</p>',
    answer: 2.584962500721156,
    exact: true,
    answerInput: 'ln(6)/ln(2)',
    hints: [
      'Write everything in terms of <span class="chem">u = 2^x</span>: <span class="chem">4^x = u^2</span> and <span class="chem">2^{x+3} = 8u</span>.',
      'Solve <span class="chem">u^2 - 8u + 12 = 0</span> by factorising.',
      'One root gives <span class="chem">x = 1</span>. For the other, <span class="chem">2^x = 6</span>, so take logarithms of both sides.'
    ],
    solution: '<div class="worked__math">Let <i>u</i> = 2<sup><i>x</i></sup>: 4<sup><i>x</i></sup> = <i>u</i><sup>2</sup>, 2<sup><i>x</i>+3</sup> = 8<i>u</i>   <b>[M1]</b>  ⇒  <i>u</i><sup>2</sup> − 8<i>u</i> + 12 = 0   <b>[A1]</b></div><div class="worked__math">(<i>u</i> − 2)(<i>u</i> − 6) = 0  ⇒  <i>u</i> = 2 or <i>u</i> = 6   <b>[A1]</b></div><div class="worked__math">2<sup><i>x</i></sup> = 2 ⇒ <i>x</i> = 1 (the integer solution)   <b>[A1]</b>;  2<sup><i>x</i></sup> = 6 ⇒ <b><i>x</i> = log<sub>2</sub> 6</b> (= 1 + log<sub>2</sub> 3)   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q050',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.9',
    stem: '<p>Find the coefficient of <span class="chem">x^4</span> in the expansion of <span class="chem">(x - 2/x)^{10}</span>.</p>',
    answer: -960,
    tolerance: 0,
    hints: [
      'The general term is <span class="chem">^{10}C_r x^{10-r} (-2/x)^r = ^{10}C_r (-2)^r x^{10-2r}</span>.',
      'Solve <span class="chem">10 - 2r = 4</span> for <span class="chem">r</span>, and keep the sign of <span class="chem">(-2)^r</span>.'
    ],
    solution: '<div class="worked__math"><i>T</i><sub><i>r</i>+1</sub> = <sup>10</sup>C<sub><i>r</i></sub> <i>x</i><sup>10−<i>r</i></sup>(−2<i>x</i><sup>−1</sup>)<sup><i>r</i></sup>   <b>[M1]</b>  = <sup>10</sup>C<sub><i>r</i></sub>(−2)<sup><i>r</i></sup><i>x</i><sup>10−2<i>r</i></sup>   <b>[A1]</b></div><div class="worked__math">10 − 2<i>r</i> = 4  ⇒  <i>r</i> = 3   <b>[A1]</b></div><div class="worked__math"><sup>10</sup>C<sub>3</sub>(−2)<sup>3</sup> = 120 × (−8) = <b>−960</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q051',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'short', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.9',
    stem: '<p>(a) Expand <span class="chem">(2 - x)^4</span> in full, in ascending powers of <span class="chem">x</span>. <strong>[3]</strong><br>(b) Hence find the exact value of <span class="chem">1.9^4</span>. <strong>[2]</strong></p>',
    answer: '<div class="worked__math">(a) (2 − <i>x</i>)<sup>4</sup> = 16 − 32<i>x</i> + 24<i>x</i><sup>2</sup> − 8<i>x</i><sup>3</sup> + <i>x</i><sup>4</sup>.</div><div class="worked__math">(b) 1.9 = 2 − 0.1, so 1.9<sup>4</sup> = 16 − 3.2 + 0.24 − 0.008 + 0.0001 = <b>13.0321</b>.</div>',
    markscheme: [
      'M1: (a) Uses the binomial coefficients 1, 4, 6, 4, 1 with powers of 2 and (−x).',
      'A1: 16 − 32x + 24x^2.',
      'A1: − 8x^3 + x^4.',
      'M1: (b) Substitutes x = 0.1.',
      'A1: 13.0321.'
    ],
    hints: [
      'Row 4 of Pascal’s triangle is 1, 4, 6, 4, 1. Pair it with <span class="chem">2^4, 2^3, 2^2, 2, 1</span> and with powers of <span class="chem">(-x)</span>; the signs alternate.',
      'For (b), choose <span class="chem">x</span> so that <span class="chem">2 - x = 1.9</span>.'
    ],
    solution: '<p>Because the expansion has only five terms, substituting <span class="chem">x = 0.1</span> gives the exact value, not an approximation.</p>'
  },
  {
    id: 't1-2-q052',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.9',
    stem: '<p>In the expansion of <span class="chem">(3 + kx)^6</span>, where <span class="chem">k &lt; 0</span>, the coefficient of <span class="chem">x^2</span> is 540. Find the exact value of <span class="chem">k</span>.</p>',
    answer: -0.6666666666666666,
    exact: true,
    answerInput: '-2/3',
    hints: [
      'The term in <span class="chem">x^2</span> is <span class="chem">^6C_2 × 3^4 × (kx)^2</span>.',
      'This gives <span class="chem">1215k^2 = 540</span>. Solve for <span class="chem">k^2</span>.',
      'There are two square roots. Read the stem again to choose one.'
    ],
    solution: '<div class="worked__math"><sup>6</sup>C<sub>2</sub> × 3<sup>4</sup> × <i>k</i><sup>2</sup> = 540   <b>[M1]</b>  ⇒  15 × 81<i>k</i><sup>2</sup> = 1215<i>k</i><sup>2</sup> = 540   <b>[A1]</b></div><div class="worked__math"><i>k</i><sup>2</sup> = <span class="frac"><span>540</span><span>1215</span></span> = <span class="frac"><span>4</span><span>9</span></span>   <b>[A1]</b></div><div class="worked__math"><i>k</i> = ±<span class="frac"><span>2</span><span>3</span></span>, and <i>k</i> &lt; 0   <b>[R1]</b>, so <b><i>k</i> = −<span class="frac"><span>2</span><span>3</span></span></b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q053',
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'short', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.5, 1.7',
    stem: '<p>(a) Write <span class="chem">8^{2/3} × 16^{-3/4}</span> as a power of 2, and hence find its exact value. <strong>[2]</strong><br>(b) Solve <span class="chem">x^{2/3} = 16</span> for <span class="chem">x</span> ∈ ℝ, where <span class="chem">x^{2/3}</span> means <span class="chem">(x^{1/3})^2</span> and <span class="chem">x^{1/3}</span> is the real cube root of <span class="chem">x</span>. <strong>[2]</strong><br>(c) Solve <span class="chem">x^{-3/2} = 1/27</span> for <span class="chem">x &gt; 0</span>. <strong>[2]</strong></p>',
    answer: '<div class="worked__math">(a) 8<sup>2/3</sup> = (2<sup>3</sup>)<sup>2/3</sup> = 2<sup>2</sup> and 16<sup>−3/4</sup> = (2<sup>4</sup>)<sup>−3/4</sup> = 2<sup>−3</sup>, so the product is 2<sup>−1</sup> = <b><span class="frac"><span>1</span><span>2</span></span></b>.</div><div class="worked__math">(b) (<i>x</i><sup>1/3</sup>)<sup>2</sup> = 16  ⇒  <i>x</i><sup>1/3</sup> = ±4  ⇒  <b><i>x</i> = 64 or <i>x</i> = −64</b>.</div><div class="worked__math">(c) <i>x</i><sup>3/2</sup> = 27  ⇒  <i>x</i> = 27<sup>2/3</sup> = 3<sup>2</sup> = <b>9</b>.</div>',
    markscheme: [
      'M1: (a) Writes 8^(2/3) = 2^2 and 16^(−3/4) = 2^(−3).',
      'A1: 2^(−1) = 1/2.',
      'M1: (b) Writes x^(2/3) = (x^(1/3))^2 = 16, so x^(1/3) = ±4.',
      'A1: x = 64 or x = −64 (both needed).',
      'M1: (c) Inverts to x^(3/2) = 27 (or raises both sides to the power −2/3).',
      'A1: x = 9.'
    ],
    hints: [
      'For (a), write 8 and 16 as powers of 2 and multiply the indices.',
      'For (b), <span class="chem">x^{2/3}</span> is the square of the cube root of <span class="chem">x</span>, and the cube root of a negative number is real. How many cube roots square to 16?',
      'For (c), take reciprocals first: <span class="chem">x^{3/2} = 27</span>.'
    ],
    solution: '<p>In (b), raising both sides to the power <span class="chem">3/2</span> loses the negative solution. Taking the square root of <span class="chem">(x^{1/3})^2</span> keeps both signs.</p>'
  },
  {
    id: 't1-2-q060',
    topic: 't1-2', level: 'sl', tier: 'foundation', type: 'numeric', marks: 3,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.9',
    stem: '<p>Use Pascal’s triangle to find the coefficient of <span class="chem">a^2 b^4</span> in the expansion of <span class="chem">(a + 2b)^6</span>.</p>',
    answer: 240,
    tolerance: 0,
    hints: [
      'Row 6 of Pascal’s triangle is 1, 6, 15, 20, 15, 6, 1.',
      'The term with <span class="chem">b^4</span> uses the coefficient <span class="chem">^6C_4 = 15</span> and the factor <span class="chem">(2b)^4</span>, not just <span class="chem">b^4</span>.'
    ],
    solution: '<div class="worked__math">Row 6: 1, 6, 15, 20, 15, 6, 1   <b>[M1]</b></div><div class="worked__math">Term in <i>a</i><sup>2</sup><i>b</i><sup>4</sup>: 15 × <i>a</i><sup>2</sup> × (2<i>b</i>)<sup>4</sup>   <b>[A1]</b>  = 15 × 16 <i>a</i><sup>2</sup><i>b</i><sup>4</sup> = <b>240</b><i>a</i><sup>2</sup><i>b</i><sup>4</sup>   <b>[A1]</b></div>'
  },

  /* ======================= PAPER 1 (NO GDC): CHALLENGE =================== */
  {
    id: 't1-2-q054',
    topic: 't1-2', level: 'sl', tier: 'challenge', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.7',
    stem: '<p>Solve the equation <span class="chem">log_9 x = log_3(x - 6)</span>.</p>',
    answer: 9,
    tolerance: 0,
    hints: [
      'Decode: the bases differ (9 and 3), so change base first. The algebra will produce two candidates, and the domain of <span class="chem">log_3(x - 6)</span> decides which one survives.',
      'Change of base: <span class="chem">log_9 x = log_3 x / log_3 9 = (1/2) log_3 x = log_3 sqrt(x)</span>.',
      'So <span class="chem">sqrt(x) = x - 6</span>. Square both sides (or let <span class="chem">s = sqrt(x)</span>) and solve the quadratic.',
      'Check each candidate in <span class="chem">x - 6 &gt; 0</span>.'
    ],
    solution: '<p><strong>Decode:</strong> match the bases, remove the logs, then use the domain to reject a candidate.</p><div class="worked__math">log<sub>9</sub> <i>x</i> = <span class="frac"><span>log<sub>3</sub> <i>x</i></span><span>2</span></span> = log<sub>3</sub> √<i>x</i>   <b>[M1]</b>  ⇒  √<i>x</i> = <i>x</i> − 6   <b>[A1]</b></div><div class="worked__math"><i>x</i> = (<i>x</i> − 6)<sup>2</sup>  ⇒  <i>x</i><sup>2</sup> − 13<i>x</i> + 36 = 0  ⇒  (<i>x</i> − 4)(<i>x</i> − 9) = 0   <b>[M1]</b></div><div class="worked__math"><i>x</i> = 4 gives <i>x</i> − 6 = −2 &lt; 0, so reject it   <b>[R1]</b>;  <b><i>x</i> = 9</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q055',
    topic: 't1-2', level: 'sl', tier: 'challenge', type: 'numeric', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.9',
    stem: '<p>In the expansion of <span class="chem">(x^2 + a/x)^9</span>, where <span class="chem">a &gt; 0</span>, the coefficient of <span class="chem">x^3</span> is six times the coefficient of <span class="chem">x^9</span>. Find the value of <span class="chem">a</span>.</p>',
    answer: 2,
    tolerance: 0,
    hints: [
      'Decode: two different terms of the same expansion are compared. Find which value of <span class="chem">r</span> gives <span class="chem">x^3</span> and which gives <span class="chem">x^9</span>, then write one equation in <span class="chem">a</span>.',
      'The general term is <span class="chem">^9C_r (x^2)^{9-r} (a/x)^r = ^9C_r a^r x^{18-3r}</span>.',
      'For <span class="chem">x^9</span>, <span class="chem">r = 3</span>; for <span class="chem">x^3</span>, <span class="chem">r = 5</span>. Then <span class="chem">^9C_5 a^5 = 6 × ^9C_3 a^3</span>.'
    ],
    solution: '<p><strong>Decode:</strong> two target powers mean two values of <i>r</i>; the given ratio links their coefficients.</p><div class="worked__math"><i>T</i><sub><i>r</i>+1</sub> = <sup>9</sup>C<sub><i>r</i></sub> <i>a</i><sup><i>r</i></sup> <i>x</i><sup>18−3<i>r</i></sup>   <b>[M1 A1]</b></div><div class="worked__math"><i>x</i><sup>9</sup>: <i>r</i> = 3, coefficient 84<i>a</i><sup>3</sup>;  <i>x</i><sup>3</sup>: <i>r</i> = 5, coefficient 126<i>a</i><sup>5</sup>   <b>[A1]</b></div><div class="worked__math">126<i>a</i><sup>5</sup> = 6 × 84<i>a</i><sup>3</sup>   <b>[M1]</b>  ⇒  <i>a</i><sup>2</sup> = <span class="frac"><span>504</span><span>126</span></span> = 4   <b>[A1]</b></div><div class="worked__math"><i>a</i> &gt; 0, so <b><i>a</i> = 2</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q056',
    topic: 't1-2', level: 'sl', tier: 'challenge', type: 'short', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.5, 1.7',
    stem: '<p>Find the values of <span class="chem">x</span> and <span class="chem">y</span> that satisfy both <span class="chem">2^x × 3^y = 72</span> and <span class="chem">2^y × 3^x = 108</span>.</p>',
    answer: '<div class="worked__math">Multiply: 2<sup><i>x</i>+<i>y</i></sup>3<sup><i>x</i>+<i>y</i></sup> = 6<sup><i>x</i>+<i>y</i></sup> = 72 × 108 = 7776 = 6<sup>5</sup>, so <i>x</i> + <i>y</i> = 5.</div><div class="worked__math">Divide: 2<sup><i>x</i>−<i>y</i></sup>3<sup><i>y</i>−<i>x</i></sup> = (2/3)<sup><i>x</i>−<i>y</i></sup> = 72/108 = 2/3, so <i>x</i> − <i>y</i> = 1.</div><div class="worked__math">Hence <b><i>x</i> = 3</b> and <b><i>y</i> = 2</b>.</div>',
    markscheme: [
      'M1: Multiplies the equations (or takes logs of both and adds): 6^(x+y) = 7776.',
      'A1: x + y = 5 (7776 = 6^5).',
      'M1: Divides the equations (or subtracts the log equations): (2/3)^(x−y) = 72/108.',
      'A1: x − y = 1.',
      'A1: x = 3.',
      'A1: y = 2.'
    ],
    hints: [
      'Decode: the two equations are symmetric, with the roles of 2 and 3 swapped. Multiplying and dividing them gives equations in <span class="chem">x + y</span> and <span class="chem">x - y</span>, which are easy to solve together.',
      'Multiply: <span class="chem">2^{x+y} 3^{x+y} = 6^{x+y}</span>. Is <span class="chem">72 × 108</span> a power of 6?',
      'Divide the first equation by the second: <span class="chem">2^{x-y} 3^{y-x} = (2/3)^{x-y}</span>.'
    ],
    solution: '<p><strong>Decode:</strong> spot the symmetry and combine the equations, rather than taking logs of each one separately (which also works, but gives a messier linear system with ln 2 and ln 3 as coefficients).</p>'
  },
  {
    id: 't1-2-q057',
    topic: 't1-2', level: 'sl', tier: 'challenge', type: 'short', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.9',
    stem: '<p>Let <span class="chem">(1 + 3x)^8 = a_0 + a_1 x + a_2 x^2 + … + a_8 x^8</span>.<br>(a) Find the value of <span class="chem">a_0 + a_1 + a_2 + … + a_8</span>. <strong>[2]</strong><br>(b) Find the value of <span class="chem">a_0 - a_1 + a_2 - a_3 + … + a_8</span>. <strong>[2]</strong><br>(c) Hence find the value of <span class="chem">a_0 + a_2 + a_4 + a_6 + a_8</span>. <strong>[2]</strong></p>',
    answer: '<div class="worked__math">(a) Put <i>x</i> = 1: 4<sup>8</sup> = <b>65536</b>.</div><div class="worked__math">(b) Put <i>x</i> = −1: (−2)<sup>8</sup> = <b>256</b>.</div><div class="worked__math">(c) Adding (a) and (b) doubles the even-index coefficients and cancels the odd ones: <span class="frac"><span>65536 + 256</span><span>2</span></span> = <b>32896</b>.</div>',
    markscheme: [
      'M1: (a) Substitutes x = 1 into both sides.',
      'A1: 4^8 = 65536.',
      'M1: (b) Substitutes x = −1 into both sides.',
      'A1: (−2)^8 = 256.',
      'M1: (c) Adds the results of (a) and (b), so that the odd-index terms cancel, and halves.',
      'A1: 32896.'
    ],
    hints: [
      'Decode: you are not asked to find any single coefficient. A sum of all the coefficients is the value of the polynomial at a well-chosen <span class="chem">x</span>.',
      'For (a), which value of <span class="chem">x</span> makes every power <span class="chem">x^r</span> equal to 1?',
      'For (b), which value of <span class="chem">x</span> makes the powers alternate between 1 and −1?',
      'For (c), add the two results. What happens to <span class="chem">a_1, a_3, a_5, a_7</span>?'
    ],
    solution: '<p><strong>Decode:</strong> sums of coefficients come from substituting <span class="chem">x = 1</span> and <span class="chem">x = -1</span>; there is no need to expand.</p>'
  },
  {
    id: 't1-2-q058',
    topic: 't1-2', level: 'sl', tier: 'challenge', type: 'numeric', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.7',
    stem: '<p>The real numbers <span class="chem">a</span> and <span class="chem">b</span> satisfy <span class="chem">3^a = 5</span> and <span class="chem">5^b = 9</span>. Find the value of the product <span class="chem">ab</span>.</p>',
    answer: 2,
    tolerance: 0,
    hints: [
      'Decode: neither <span class="chem">a</span> nor <span class="chem">b</span> has a simple exact value, but their product does. Look for a way to combine the two equations rather than solving each one.',
      'Substitute the first equation into the second: <span class="chem">5^b = (3^a)^b</span>.',
      'So <span class="chem">3^{ab} = 9</span>. (Alternatively, <span class="chem">a = log_3 5</span>, <span class="chem">b = log_5 9</span>, and change of base makes their product collapse.)'
    ],
    solution: '<p><strong>Decode:</strong> a product of two exponents suggests the law <span class="chem">(x^a)^b = x^{ab}</span>.</p><div class="worked__math">5 = 3<sup><i>a</i></sup>, so 9 = 5<sup><i>b</i></sup> = (3<sup><i>a</i></sup>)<sup><i>b</i></sup>   <b>[M1]</b>  = 3<sup><i>ab</i></sup>   <b>[A1]</b></div><div class="worked__math">3<sup><i>ab</i></sup> = 3<sup>2</sup>   <b>[M1]</b>  ⇒  <b><i>ab</i> = 2</b>   <b>[A1]</b></div>'
  },
  {
    id: 't1-2-q059',
    topic: 't1-2', level: 'sl', tier: 'challenge', type: 'short', marks: 8,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.7',
    stem: '<p>Consider the equation <span class="chem">9^x - 3^{x+1} = k</span>, where <span class="chem">k</span> ∈ ℝ.<br>(a) Show that, with <span class="chem">u = 3^x</span>, the equation becomes <span class="chem">u^2 - 3u - k = 0</span>. <strong>[1]</strong><br>(b) Find the set of values of <span class="chem">k</span> for which the original equation has two distinct real solutions for <span class="chem">x</span>. <strong>[5]</strong><br>(c) Find all the values of <span class="chem">k</span> for which the original equation has exactly one real solution. <strong>[2]</strong></p>',
    answer: '<div class="worked__math">(a) 9<sup><i>x</i></sup> = (3<sup><i>x</i></sup>)<sup>2</sup> = <i>u</i><sup>2</sup> and 3<sup><i>x</i>+1</sup> = 3 × 3<sup><i>x</i></sup> = 3<i>u</i>, so <i>u</i><sup>2</sup> − 3<i>u</i> − <i>k</i> = 0.</div><div class="worked__math">(b) Each positive root <i>u</i> gives exactly one <i>x</i> = log<sub>3</sub> <i>u</i>, so the quadratic needs two distinct positive roots: Δ = 9 + 4<i>k</i> &gt; 0 gives <i>k</i> &gt; −9/4; the sum of the roots is 3 &gt; 0; the product −<i>k</i> &gt; 0 gives <i>k</i> &lt; 0. So <b>−9/4 &lt; <i>k</i> &lt; 0</b>.</div><div class="worked__math">(c) Exactly one positive root: either a repeated positive root, <i>k</i> = −9/4 (<i>u</i> = 3/2), or roots of opposite sign or one zero root, which happens when −<i>k</i> ≤ 0, i.e. <i>k</i> ≥ 0. So <b><i>k</i> = −9/4 or <i>k</i> ≥ 0</b>.</div>',
    markscheme: [
      'A1: (a) Writes 9^x = (3^x)^2 = u^2 and 3^(x+1) = 3u. AG: u^2 − 3u − k = 0; the given line itself earns no mark.',
      'R1: (b) States that each positive root u gives one real x (u = 3^x > 0), so two distinct positive roots are needed.',
      'M1: Sets Δ = 9 + 4k > 0.',
      'A1: k > −9/4.',
      'M1: Uses the product of the roots −k > 0 (the sum, 3, is already positive), or an equivalent sign argument.',
      'A1: −9/4 < k < 0.',
      'A1: (c) k = −9/4 (repeated root u = 3/2 > 0).',
      'A1: k ≥ 0 (one positive root and one root ≤ 0).'
    ],
    hints: [
      'Decode: the question counts solutions for <span class="chem">x</span>, not for <span class="chem">u</span>. Only positive values of <span class="chem">u = 3^x</span> give a real <span class="chem">x</span>, so you are really asking how many positive roots the quadratic has.',
      'For (b), you need <span class="chem">Δ &gt; 0</span> and both roots positive: use the sum and product of the roots.',
      'For (c), there are two different ways to get exactly one positive root. Do not forget the boundary case <span class="chem">k = 0</span>, where one root is <span class="chem">u = 0</span>.'
    ],
    solution: '<p><strong>Decode:</strong> turn the exponential equation into a quadratic in <span class="chem">u = 3^x</span>, then count positive roots. Negative or zero roots give no real <span class="chem">x</span>, so the sign conditions matter as much as the discriminant.</p>'
  }
]);
