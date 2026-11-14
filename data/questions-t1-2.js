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
    tolerance: { abs: 0.001 },
    hints: [
      'Use <span class="chem">a^{-m/n} = 1 / (a^{1/n})^m</span>: take the cube root of 27 first before squaring.',
      'Since <span class="chem">27^{1/3} = 3</span>, compute <span class="chem">3^{-2}</span>.'
    ],
    solution: '<div class="worked__math">27<sup>−2/3</sup> = (27<sup>1/3</sup>)<sup>−2</sup> = 3<sup>−2</sup> = <b><span class="frac"><span>1</span><span>9</span></span></b></div>'
  },
  {
    id: 't1-2-q002',
    topic: 't1-2', level: 'sl', tier: 'foundation', type: 'mcq', marks: 3,
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
    tolerance: { abs: 0.005 },
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
    topic: 't1-2', level: 'sl', tier: 'exam', type: 'mcq', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 1.7',
    stem: '<p>Solve the equation <span class="chem">3^{2x} - 6(3^x) - 27 = 0</span> for <span class="chem">x</span> ∈ ℝ.</p>',
    options: [
      '<span class="chem">x = 2</span> only',
      '<span class="chem">x = 2</span> or <span class="chem">x = 1</span>',
      '<span class="chem">x = 9</span> or <span class="chem">x = -3</span>',
      '<span class="chem">x = 2</span> or <span class="chem">x = -1</span>'
    ],
    answer: 0,
    misconception: {
      1: '<span class="chem">x = 1</span> would need <span class="chem">3^x = 3</span>, but the second root of the quadratic in <span class="chem">u = 3^x</span> is <span class="chem">u = -3</span>, not <span class="chem">3</span>. Since <span class="chem">3^x &gt; 0</span> for all real <span class="chem">x</span>, <span class="chem">3^x = -3</span> has no solution, so <span class="chem">x = 2</span> only.',
      2: 'Those are the values of <span class="chem">u = 3^x</span>, not <span class="chem">x</span>! You must still solve <span class="chem">3^x = 9</span>.',
      3: 'Notice <span class="chem">3^{-1} = 1/3</span>, not <span class="chem">-3</span>. An exponential <span class="chem">a^x</span> with <span class="chem">a &gt; 0</span> is never negative.'
    },
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
      'Always start from the general term formula <span class="chem">T_{r+1} = nCr a^{n-r} b^r</span>.',
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
    tolerance: { abs: 0.01 },
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
    tolerance: { abs: 0.01 },
    hints: [
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
      'Write out the three coefficients: <span class="chem">nC1 = n</span>, <span class="chem">nC2 = n(n-1)/2</span>, and <span class="chem">nC3 = n(n-1)(n-2)/6</span>.',
      'Use the arithmetic condition <span class="chem">2(nC2) = nC1 + nC3</span> and divide through by <span class="chem">n &gt; 0</span>.'
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
  }
]);
