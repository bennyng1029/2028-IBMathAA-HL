/* ==========================================================================
   Question bank: Topic 3.2 — The unit circle, trig identities and periodic models
   All questions are original. Covers SL 3.5–3.8 and AHL 3.9–3.11.
   ========================================================================== */
S1.questions.register('t3-2', [

  /* ======================= FOUNDATION ==================================== */
  {
    id: 't3-2-q001',
    topic: 't3-2', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.5',
    stem: '<p>What is the exact value of <span class="chem">sin(5*pi/6) + cos(2*pi/3)</span>?</p>',
    options: [
      '<span class="mono">0</span>',
      '<span class="mono">1</span>',
      '<span class="chem">(sqrt(3) - 1) / 2</span>',
      '<span class="mono">−1</span>'
    ],
    answer: 0,
    misconception: {
      1: 'In Quadrant II, cos(2π/3) = −1/2 (negative!), not +1/2.',
      2: 'sin(5π/6) = 1/2 (not √3/2), because the reference angle is π/6 = 30°.',
      3: 'In Quadrant II, sin(5π/6) = +1/2 (positive!).'
    },
    hints: [
      'Both <span class="chem">5*pi/6</span> and <span class="chem">2*pi/3</span> lie in Quadrant II, where <span class="chem">sin &gt; 0</span> and <span class="chem">cos &lt; 0</span>.',
      '<span class="chem">sin(5*pi/6) = +sin(pi/6) = 1/2</span> and <span class="chem">cos(2*pi/3) = -cos(pi/3) = -1/2</span>.'
    ],
    solution: '<div class="worked__math">sin(<span class="frac"><span>5<i>π</i></span><span>6</span></span>) + cos(<span class="frac"><span>2<i>π</i></span><span>3</span></span>) = <span class="frac"><span>1</span><span>2</span></span> + (−<span class="frac"><span>1</span><span>2</span></span>) = <b>0</b></div>'
  },
  {
    id: 't3-2-q002',
    topic: 't3-2', level: 'sl', tier: 'foundation', type: 'numeric', marks: 3,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.6',
    stem: '<p>Given that <span class="chem">cos theta = -3/5</span> and <span class="chem">pi/2 &lt; theta &lt; pi</span>, find the exact value of <span class="chem">sin 2theta</span>.</p>',
    answer: -0.96, exact: true, answerInput: '-24/25',
    hints: [
      'In Quadrant II (<span class="chem">pi/2 &lt; theta &lt; pi</span>), <span class="chem">sin theta &gt; 0</span>, so <span class="chem">sin theta = +sqrt(1 - (-3/5)^2) = 4/5</span>.',
      'Use <span class="chem">sin 2theta = 2 sin theta cos theta</span>.'
    ],
    solution: '<div class="worked__math">sin <i>θ</i> = <span class="frac"><span>4</span><span>5</span></span>  ⇒  sin 2<i>θ</i> = 2(<span class="frac"><span>4</span><span>5</span></span>)(−<span class="frac"><span>3</span><span>5</span></span>) = −<span class="frac"><span>24</span><span>25</span></span> = <b>−0.96</b></div>'
  },
  {
    id: 't3-2-q003',
    topic: 't3-2', level: 'sl', tier: 'foundation', type: 'mcq', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.7',
    stem: '<p>What are the amplitude and period of the function <span class="chem">f(x) = -3 cos(4x) + 5</span> (where <span class="chem">x</span> is in radians)?</p>',
    options: [
      'Amplitude <span class="mono">= 3</span>, Period <span class="chem">= pi/2</span>',
      'Amplitude <span class="mono">= −3</span>, Period <span class="chem">= pi/2</span>',
      'Amplitude <span class="mono">= 3</span>, Period <span class="mono">= 4</span>',
      'Amplitude <span class="mono">= 5</span>, Period <span class="chem">= 8*pi</span>'
    ],
    answer: 0,
    misconception: {
      1: 'Amplitude is always positive: |a| = |−3| = 3.',
      2: '4 is the frequency factor b; the period is T = 2π/b = 2π/4 = π/2.',
      3: '5 is the vertical shift d (the principal axis y = 5), and T = 2π/b, not 2πb.'
    },
    hints: [
      'Amplitude is <span class="chem">|a|</span> (always positive).',
      'Period is <span class="chem">T = 2*pi / b</span>.'
    ],
    solution: '<div class="worked__math">Amplitude = |−3| = <b>3</b>, &nbsp;&nbsp; Period = <span class="frac"><span>2<i>π</i></span><span>4</span></span> = <b><span class="frac"><span><i>π</i></span><span>2</span></span></b></div>'
  },
  {
    id: 't3-2-q004',
    topic: 't3-2', level: 'sl', tier: 'foundation', type: 'mcq', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.8',
    stem: '<p>How many solutions does the equation <span class="chem">sin(3x) = 1/2</span> have in the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>?</p>',
    options: [
      '<span class="mono">6</span>',
      '<span class="mono">2</span>',
      '<span class="mono">3</span>',
      '<span class="mono">4</span>'
    ],
    answer: 0,
    misconception: {
      1: 'sin u = 1/2 has 2 solutions per period, but sin(3x) completes 3 full periods on [0, 2π].',
      2: 'Each of the 3 periods gives 2 solutions (one in Quadrant I, one in Quadrant II), so 3 × 2 = 6.',
      3: '4 solutions corresponds to sin(2x) = 1/2 on [0, 2π].'
    },
    hints: [
      'Transform the interval: if <span class="chem">0 &lt;= x &lt;= 2pi</span>, then <span class="chem">0 &lt;= 3x &lt;= 6pi</span> (three full revolutions).',
      'Each full revolution of <span class="chem">2pi</span> contains 2 solutions to <span class="chem">sin u = 1/2</span>.'
    ],
    solution: '<p>Let <span class="chem">u = 3x in [0, 6pi]</span>. Since <span class="chem">sin u = 1/2</span> has 2 solutions in each <span class="chem">2pi</span> period, across 3 periods there are <span class="mono">3 × 2 = 6</span> solutions.</p>'
  },
  {
    id: 't3-2-q005',
    topic: 't3-2', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 3.9',
    stem: '<p>What is the exact value of <span class="chem">arccos(-1/2) + arcsin(-1/2)</span>?</p>',
    options: [
      '<span class="chem">pi / 2</span>',
      '<span class="mono">0</span>',
      '<span class="chem">5*pi / 6</span>',
      '<span class="chem">-pi / 2</span>'
    ],
    answer: 0,
    misconception: {
      1: 'You may have taken arccos(−1/2) = π/6 (the value of arcsin(1/2)). The principal values are arccos(−1/2) = 2π/3 and arcsin(−1/2) = −π/6.',
      2: 'You added +π/6 instead of −π/6 for arcsin(−1/2).',
      3: 'arccos(−1/2) is NOT −π/3! The range of arccos is [0, π], so arccos(−1/2) = 2π/3, while arcsin(−1/2) = −π/6. Check: arcsin x + arccos x = π/2 for all x ∈ [−1, 1].'
    },
    hints: [
      'The principal range of <span class="chem">arccos</span> is <span class="chem">[0, pi]</span>, so <span class="chem">arccos(-1/2) = 2*pi/3</span>.',
      'The principal range of <span class="chem">arcsin</span> is <span class="chem">[-pi/2, pi/2]</span>, so <span class="chem">arcsin(-1/2) = -pi/6</span>.'
    ],
    solution: '<div class="worked__math">arccos(−<span class="frac"><span>1</span><span>2</span></span>) + arcsin(−<span class="frac"><span>1</span><span>2</span></span>) = <span class="frac"><span>2<i>π</i></span><span>3</span></span> + (−<span class="frac"><span><i>π</i></span><span>6</span></span>) = <b><span class="frac"><span><i>π</i></span><span>2</span></span></b></div>'
  },
  {
    id: 't3-2-q006',
    topic: 't3-2', level: 'ahl', tier: 'foundation', type: 'numeric', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 3.9',
    stem: '<p>Given that <span class="chem">tan theta = 3/4</span>, find the exact value of <span class="chem">sec^2 theta</span>.</p>',
    answer: 1.5625, exact: true, answerInput: '25/16',
    hints: [
      'Use the Pythagorean identity <span class="chem">1 + tan^2 theta = sec^2 theta</span> from the Formula Booklet.',
      'Calculate <span class="chem">1 + (3/4)^2 = 1 + 9/16 = 25/16</span>.'
    ],
    solution: '<div class="worked__math">sec<sup>2</sup><i>θ</i> = 1 + tan<sup>2</sup><i>θ</i> = 1 + <span class="frac"><span>9</span><span>16</span></span> = <b><span class="frac"><span>25</span><span>16</span></span> = 1.5625</b></div>'
  },

  /* ======================= EXAM STANDARD ================================= */
  {
    id: 't3-2-q007',
    topic: 't3-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.7',
    stem: '<p>A Ferris wheel rotates at a constant speed. A rider\'s height <span class="chem">h(t)</span> in metres above the ground at time <span class="chem">t</span> minutes is modelled by <span class="chem">h(t) = -15 cos((pi/5)t) + 17</span>. Find the first positive time <span class="chem">t</span> (in minutes) at which the rider reaches a height of <span class="mono">24.5 m</span>.</p>',
    answer: 3.333333333,
    sigfigs: 3,
    unit: 'min',
    hints: [
      'Set <span class="chem">-15 cos((pi/5)t) + 17 = 24.5</span> and isolate <span class="chem">cos((pi/5)t)</span>.',
      'You will get <span class="chem">cos((pi/5)t) = -0.5</span>, so the first positive angle is <span class="chem">(pi/5)t = 2*pi/3</span>.'
    ],
    solution: '<div class="worked__math">−15 cos(<span class="frac"><span><i>π</i></span><span>5</span></span><i>t</i>) = 7.5  ⇒  cos(<span class="frac"><span><i>π</i></span><span>5</span></span><i>t</i>) = −<span class="frac"><span>1</span><span>2</span></span>  ⇒  <span class="frac"><span><i>π</i></span><span>5</span></span><i>t</i> = <span class="frac"><span>2<i>π</i></span><span>3</span></span>  ⇒  <i>t</i> = <b><span class="frac"><span>10</span><span>3</span></span> ≈ 3.33 min</b></div>'
  },
  {
    id: 't3-2-q008',
    topic: 't3-2', level: 'sl', tier: 'exam', type: 'mcq', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.8',
    stem: '<p>Find the complete set of solutions to <span class="chem">sin 2x = sin x</span> on the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>.</p>',
    options: [
      '<span class="chem">0, pi/3, pi, 5*pi/3, 2*pi</span>',
      '<span class="chem">pi/3, 5*pi/3</span>',
      '<span class="chem">0, pi/6, pi, 11*pi/6, 2*pi</span>',
      '<span class="chem">0, 2*pi/3, pi, 4*pi/3, 2*pi</span>'
    ],
    answer: 0,
    misconception: {
      1: 'You divided both sides by sin x, losing all three roots where sin x = 0 (x = 0, π, 2π)!',
      2: 'cos x = 1/2 gives x = π/3 and 5π/3, not π/6 and 11π/6.',
      3: '2π/3 and 4π/3 correspond to cos x = −1/2, not +1/2.'
    },
    hints: [
      'Move everything to one side and expand <span class="chem">sin 2x = 2 sin x cos x</span>: <span class="chem">2 sin x cos x - sin x = 0</span>.',
      'Factor out <span class="chem">sin x</span>: <span class="chem">sin x (2 cos x - 1) = 0</span>.'
    ],
    solution: '<div class="worked__math">sin <i>x</i>(2 cos <i>x</i> − 1) = 0  ⇒  sin <i>x</i> = 0 (<i>x</i> = 0, <i>π</i>, 2<i>π</i>) &nbsp; or &nbsp; cos <i>x</i> = <span class="frac"><span>1</span><span>2</span></span> (<i>x</i> = <span class="frac"><span><i>π</i></span><span>3</span></span>, <span class="frac"><span>5<i>π</i></span><span>3</span></span>)</div>'
  },
  {
    id: 't3-2-q009',
    topic: 't3-2', level: 'sl', tier: 'exam', type: 'multi', marks: 3,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.7',
    stem: '<p>The depth of water at a pier reaches a high tide of <span class="mono">8.2 m</span> at <span class="mono">t = 2</span> hours and the next low tide of <span class="mono">2.6 m</span> at <span class="mono">t = 8</span> hours. Which of the following equations correctly model the depth <span class="chem">y(t)</span>? Select all that apply.</p>',
    options: [
      '<span class="chem">y(t) = 2.8 cos((pi/6)(t - 2)) + 5.4</span>',
      '<span class="chem">y(t) = -2.8 cos((pi/6)(t - 8)) + 5.4</span>',
      '<span class="chem">y(t) = 2.8 sin((pi/6)(t + 1)) + 5.4</span>',
      '<span class="chem">y(t) = 2.8 cos((pi/3)(t - 2)) + 5.4</span>',
      '<span class="chem">y(t) = 5.6 cos((pi/6)(t - 2)) + 5.4</span>'
    ],
    answer: [0, 1, 2],
    misconception: {
      3: 'The time from high tide (t = 2) to low tide (t = 8) is half a period (T/2 = 6 h), so T = 12 h and b = 2π/12 = π/6, not π/3.',
      4: '5.6 m is the peak-to-trough range (8.2 − 2.6); the amplitude is half of that: a = 2.8 m.'
    },
    hints: [
      'Find amplitude <span class="chem">a = (8.2 - 2.6)/2 = 2.8</span>, mean line <span class="chem">d = (8.2 + 2.6)/2 = 5.4</span>, and period <span class="chem">T = 2(8 - 2) = 12</span> so <span class="chem">b = pi/6</span>.',
      'Check which phase shifts place a maximum of <span class="mono">8.2</span> at <span class="mono">t = 2</span> and a minimum of <span class="mono">2.6</span> at <span class="mono">t = 8</span>.'
    ],
    solution: '<p>With <span class="chem">a = 2.8, d = 5.4, b = pi/6</span>: <span class="chem">2.8 cos((pi/6)(t-2)) + 5.4</span> starts at a peak at <span class="mono">t = 2</span>; <span class="chem">-2.8 cos((pi/6)(t-8)) + 5.4</span> starts at a trough at <span class="mono">t = 8</span>; and <span class="chem">2.8 sin((pi/6)(t+1)) + 5.4</span> crosses the mean line rising at <span class="mono">t = −1</span> (a quarter-period before <span class="mono">t = 2</span>).</p>'
  },
  {
    id: 't3-2-q010',
    topic: 't3-2', level: 'ahl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 3.10',
    stem: '<p>Acute angles <span class="chem">A</span> and <span class="chem">B</span> satisfy <span class="chem">tan A = 1/4</span> and <span class="chem">tan B = 3/5</span>. Find the exact value of <span class="chem">tan(A + B)</span>.</p>',
    answer: 1, exact: true, answerInput: '1',
    hints: [
      'Use the compound-angle identity <span class="chem">tan(A + B) = (tan A + tan B) / (1 - tan A tan B)</span>.',
      'Calculate <span class="chem">1/4 + 3/5 = 17/20</span> and <span class="chem">1 - (1/4)(3/5) = 17/20</span>.'
    ],
    solution: '<div class="worked__math">tan(<i>A</i> + <i>B</i>) = <span class="frac"><span>1/4 + 3/5</span><span>1 − (1/4)(3/5)</span></span> = <span class="frac"><span>17/20</span><span>17/20</span></span> = <b>1</b></div>'
  },
  {
    id: 't3-2-q011',
    topic: 't3-2', level: 'ahl', tier: 'exam', type: 'mcq', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 3.9',
    stem: '<p>Solving the equation <span class="chem">2 sec^2 x - 3 tan x - 4 = 0</span> leads to which quadratic equation in <span class="chem">tan x</span>?</p>',
    options: [
      '<span class="chem">2 tan^2 x - 3 tan x - 2 = 0</span>',
      '<span class="chem">2 tan^2 x - 3 tan x - 6 = 0</span>',
      '<span class="chem">2 tan^2 x - 3 tan x - 3 = 0</span>',
      '<span class="chem">2 tan^2 x + 3 tan x - 2 = 0</span>'
    ],
    answer: 0,
    misconception: {
      1: 'You substituted sec²x = tan²x − 1 instead of 1 + tan²x.',
      2: 'You forgot to multiply the 1 in (1 + tan²x) by the coefficient 2.',
      3: 'You flipped the sign of −3 tan x.'
    },
    hints: [
      'Substitute the Pythagorean identity <span class="chem">sec^2 x = 1 + tan^2 x</span>.',
      'Expand <span class="chem">2(1 + tan^2 x) - 3 tan x - 4 = 0</span>.'
    ],
    solution: '<div class="worked__math">2(1 + tan<sup>2</sup><i>x</i>) − 3 tan <i>x</i> − 4 = 0  ⇒  <b>2 tan<sup>2</sup><i>x</i> − 3 tan <i>x</i> − 2 = 0</b>  ⇒  (2 tan <i>x</i> + 1)(tan <i>x</i> − 2) = 0</div>'
  },
  {
    id: 't3-2-q012',
    topic: 't3-2', level: 'ahl', tier: 'exam', type: 'mcq', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 3.9',
    stem: '<p>For <span class="chem">0 &lt; x &lt; 1</span>, which algebraic expression is identically equal to <span class="chem">sin(2 arccos x)</span>?</p>',
    options: [
      '<span class="chem">2x*sqrt(1 - x^2)</span>',
      '<span class="chem">2x^2 - 1</span>',
      '<span class="chem">2*sqrt(1 - x^2)</span>',
      '<span class="chem">1 - 2x^2</span>'
    ],
    answer: 0,
    misconception: {
      1: '2x² − 1 is cos(2 arccos x), not sin(2 arccos x).',
      2: 'You forgot the factor cos θ = x in sin(2θ) = 2 sin θ cos θ.',
      3: '1 − 2x² is cos(2 arcsin x).'
    },
    hints: [
      'Let <span class="chem">theta = arccos x</span>, so <span class="chem">cos theta = x</span> and <span class="chem">sin theta = sqrt(1 - x^2)</span>.',
      'Use <span class="chem">sin(2theta) = 2 sin theta cos theta</span>.'
    ],
    solution: '<div class="worked__math">Let <i>θ</i> = arccos <i>x</i>  ⇒  cos <i>θ</i> = <i>x</i>, &nbsp; sin <i>θ</i> = √(1 − <i>x</i><sup>2</sup>)  ⇒  sin 2<i>θ</i> = 2 sin <i>θ</i> cos <i>θ</i> = <b>2<i>x</i>√(1 − <i>x</i><sup>2</sup>)</b></div>'
  },
  {
    id: 't3-2-q013',
    topic: 't3-2', level: 'sl', tier: 'exam', type: 'order', marks: 3,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.8',
    stem: '<p>Put these steps in the correct order to find all solutions to <span class="chem">cos(2x - pi/3) = 1/2</span> on the domain <span class="chem">0 &lt;= x &lt;= pi</span>.</p>',
    options: [
      'Let u = 2x − π/3 and transform the domain 0 ≤ x ≤ π into −π/3 ≤ u ≤ 5π/3.',
      'Identify the acute reference angle α = arccos(1/2) = π/3.',
      'List all angles u in Quadrants I and IV that fall inside [−π/3, 5π/3]: u = −π/3, π/3, 5π/3.',
      'Add π/3 to each value of u and divide by 2 to obtain x = 0, π/3, π.'
    ],
    hints: [
      'Always transform the domain for the inner argument <span class="chem">u = 2x - pi/3</span> first!',
      'Only divide by 2 at the very last step.'
    ],
    solution: '<p>Transforming the interval to <span class="chem">[-pi/3, 5pi/3]</span> first ensures you capture all three roots <span class="chem">u = -pi/3, pi/3, 5pi/3</span>, giving <span class="chem">x = 0, pi/3, pi</span>.</p>'
  },
  {
    id: 't3-2-q014',
    topic: 't3-2', level: 'sl', tier: 'exam', type: 'short', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.6',
    stem: '<p>Prove the identity <span class="chem">(sin 2theta) / (1 + cos 2theta) = tan theta</span>, and hence find the exact value of <span class="chem">tan(pi/8)</span> in the form <span class="chem">sqrt(a) - b</span>.</p>',
    answer: '<p>tan(π/8) = √2 − 1.</p>',
    markscheme: [
      'M1: Substitute sin 2θ = 2 sin θ cos θ and cos 2θ = 2 cos²θ − 1 into the LHS.',
      'A1: Simplify LHS = (2 sin θ cos θ) / (1 + 2 cos²θ − 1) = (2 sin θ cos θ) / (2 cos²θ) = sin θ / cos θ = tan θ (AG).',
      'M1: Substitute θ = π/8 so 2θ = π/4: tan(π/8) = sin(π/4) / (1 + cos(π/4)).',
      'A1: Write (√2/2) / (1 + √2/2) = √2 / (2 + √2) = 1 / (√2 + 1).',
      'A1: Rationalize the denominator: (√2 − 1) / ((√2 + 1)(√2 − 1)) = √2 − 1.'
    ],
    hints: [
      'Choose <span class="chem">cos 2theta = 2 cos^2 theta - 1</span> in the denominator so that <span class="mono">+1</span> and <span class="mono">−1</span> cancel!',
      'Then set <span class="chem">theta = pi/8</span> so <span class="chem">2theta = pi/4</span>.'
    ]
  },

  /* ======================= CHALLENGE ===================================== */
  {
    id: 't3-2-q015',
    topic: 't3-2', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 3.10',
    stem: '<p>Solve the equation <span class="chem">arctan(x) + arctan(2x) = pi/4</span> for <span class="chem">x &gt; 0</span>. Give your answer in the form <span class="chem">(a + sqrt(b))/c</span>, where <span class="chem">a, b, c</span> are integers.</p>',
    answer: 0.2807764064, exact: true, answerInput: '(-3+sqrt(17))/4',
    hints: [
      'Decode: a sum of two arctans is an angle, so take <span class="chem">tan</span> of both sides: <span class="chem">tan(A + B)</span> turns the equation into algebra in <span class="chem">x</span>. The condition <span class="chem">x &gt; 0</span> tells you which root to keep.',
      'Take the tangent of both sides using <span class="chem">tan(A + B) = (tan A + tan B)/(1 - tan A tan B)</span>: <span class="chem">(x + 2x)/(1 - 2x^2) = tan(pi/4) = 1</span>.',
      'Solve the quadratic <span class="chem">2x^2 + 3x - 1 = 0</span> and keep the positive root <span class="chem">x = (-3 + sqrt(17))/4</span>.'
    ],
    solution: '<div class="worked__math"><span class="frac"><span><i>x</i> + 2<i>x</i></span><span>1 − 2<i>x</i><sup>2</sup></span></span> = 1  ⇒  2<i>x</i><sup>2</sup> + 3<i>x</i> − 1 = 0  ⇒  <i>x</i> = <b><span class="frac"><span>−3 + √17</span><span>4</span></span></b> (≈ 0.281)</div>'
  },
  {
    id: 't3-2-q016',
    topic: 't3-2', level: 'ahl', tier: 'exam', type: 'mcq', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 3.10',
    stem: '<p>What is the exact value of <span class="chem">cos 15° = cos(pi/12)</span>?</p>',
    options: [
      '<span class="chem">(sqrt(6) + sqrt(2)) / 4</span>',
      '<span class="chem">(sqrt(6) - sqrt(2)) / 4</span>',
      '<span class="chem">(sqrt(3) + 1) / 2</span>',
      '<span class="chem">sqrt(2 + sqrt(3)) / 4</span>'
    ],
    answer: 0,
    misconception: {
      1: '(√6 − √2)/4 is sin 15° = cos 75°, because cos(A − B) has a PLUS sign: cos A cos B + sin A sin B.',
      2: 'You treated cos 45° and sin 45° as 1, but each is √2/2, so the result is (√2/2)(√3/2 + 1/2) = (√6 + √2)/4.',
      3: 'Using the half-angle identity gives √(2 + √3) / 2, with denominator 2, not 4.'
    },
    hints: [
      'Write <span class="mono">15° = 45° − 30°</span> (or <span class="chem">pi/12 = pi/4 - pi/6</span>).',
      'Expand <span class="chem">cos(45° - 30°) = cos 45° cos 30° + sin 45° sin 30°</span>.'
    ],
    solution: '<div class="worked__math">cos(45° − 30°) = <span class="frac"><span>√2</span><span>2</span></span>·<span class="frac"><span>√3</span><span>2</span></span> + <span class="frac"><span>√2</span><span>2</span></span>·<span class="frac"><span>1</span><span>2</span></span> = <b><span class="frac"><span>√6 + √2</span><span>4</span></span></b></div>'
  },
  {
    id: 't3-2-q017',
    topic: 't3-2', level: 'ahl', tier: 'challenge', type: 'short', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 3.10',
    stem: '<p>In triangle <span class="chem">ABC</span>, none of the angles is <span class="mono">90°</span>. Using the compound-angle identity for <span class="chem">tan(A + B)</span> and the fact that <span class="chem">A + B + C = pi</span>, prove that <span class="chem">tan A + tan B + tan C = tan A tan B tan C</span>.</p>',
    answer: '<p>Since <i>A</i> + <i>B</i> = <i>π</i> − <i>C</i>, taking tan of both sides gives (tan <i>A</i> + tan <i>B</i>)/(1 − tan <i>A</i> tan <i>B</i>) = −tan <i>C</i>, which rearranges to tan <i>A</i> + tan <i>B</i> + tan <i>C</i> = tan <i>A</i> tan <i>B</i> tan <i>C</i>.</p>',
    markscheme: [
      'M1: Write A + B = π − C from the angle sum of a triangle.',
      'A1: Apply tangent to both sides: tan(A + B) = tan(π − C) = −tan C.',
      'M1: Expand the LHS using the compound-angle formula: (tan A + tan B) / (1 − tan A tan B) = −tan C.',
      'M1: Multiply both sides by (1 − tan A tan B).',
      'A1: tan A + tan B = −tan C + tan A tan B tan C, which rearranges to tan A + tan B + tan C = tan A tan B tan C (AG).'
    ],
    hints: [
      'Decode: the condition <span class="chem">A + B + C = pi</span> links the three angles, so write <span class="chem">C = pi - (A + B)</span>. Then the <span class="chem">tan(A + B)</span> identity turns the statement into algebra in <span class="chem">tan A</span>, <span class="chem">tan B</span> and <span class="chem">tan C</span>.',
      'Start with <span class="chem">A + B = pi - C</span> and take <span class="chem">tan</span> of both sides.',
      'Recall that <span class="chem">tan(pi - C) = -tan C</span>.'
    ]
  },
  {
    id: 't3-2-q018',
    topic: 't3-2', level: 'ahl', tier: 'exam', type: 'mcq', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 3.11',
    stem: '<p>Given that <span class="chem">sin x = k</span>, where <span class="chem">0 &lt; x &lt; pi/2</span>, which expression is equal to <span class="chem">sin(pi - x) + cos(pi/2 + x) + tan(pi + x)</span>?</p>',
    options: [
      '<span class="chem">k / sqrt(1 - k^2)</span>',
      '<span class="chem">2k + k / sqrt(1 - k^2)</span>',
      '<span class="chem">-k / sqrt(1 - k^2)</span>',
      '<span class="chem">-2k + k / sqrt(1 - k^2)</span>'
    ],
    answer: 0,
    misconception: {
      1: 'cos(π/2 + x) = −sin x, not +sin x: adding π/2 moves the point into the second quadrant, where cosine is negative.',
      2: 'tan has period π, so tan(π + x) = +tan x. The half-turn changes the sign of both sin and cos, so their ratio keeps its sign.',
      3: 'sin(π − x) = +sin x, because the sine graph is symmetric about x = π/2. Only cos(π/2 + x) contributes −k.'
    },
    hints: [
      'Use the symmetry identities <span class="chem">sin(pi - x) = sin x</span>, <span class="chem">cos(pi/2 + x) = -sin x</span> and <span class="chem">tan(pi + x) = tan x</span>.',
      'Since <span class="chem">x</span> is acute, <span class="chem">cos x = sqrt(1 - k^2)</span>, so <span class="chem">tan x = k / sqrt(1 - k^2)</span>.'
    ],
    solution: '<div class="worked__math">sin(<i>π</i> − <i>x</i>) + cos(<span class="frac"><span><i>π</i></span><span>2</span></span> + <i>x</i>) + tan(<i>π</i> + <i>x</i>) = <i>k</i> − <i>k</i> + tan <i>x</i> = <b><span class="frac"><span><i>k</i></span><span>√(1 − <i>k</i><sup>2</sup>)</span></span></b></div>'
  },
  {
    id: 't3-2-q019',
    topic: 't3-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.7, 3.8',
    stem: '<p>How many solutions does the equation <span class="chem">tan(2x) = sqrt(3)</span> have in the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>?</p>',
    answer: 4,
    hints: [
      'Let <span class="chem">u = 2x</span>, so <span class="chem">0 &lt;= u &lt;= 4pi</span>. The graph of <span class="chem">tan u</span> has period <span class="chem">pi</span>, so <span class="chem">tan u = sqrt(3)</span> has one solution in each interval of length <span class="chem">pi</span>.',
      'List <span class="chem">u = pi/3 + k*pi</span> for <span class="chem">k = 0, 1, 2, ...</span> while <span class="chem">u &lt;= 4pi</span>.'
    ],
    solution: '<div class="worked__math"><i>u</i> = 2<i>x</i> ∈ [0, 4<i>π</i>]: &nbsp; <i>u</i> = <span class="frac"><span><i>π</i></span><span>3</span></span>, <span class="frac"><span>4<i>π</i></span><span>3</span></span>, <span class="frac"><span>7<i>π</i></span><span>3</span></span>, <span class="frac"><span>10<i>π</i></span><span>3</span></span>  ⇒  <i>x</i> = <span class="frac"><span><i>π</i></span><span>6</span></span>, <span class="frac"><span>2<i>π</i></span><span>3</span></span>, <span class="frac"><span>7<i>π</i></span><span>6</span></span>, <span class="frac"><span>5<i>π</i></span><span>3</span></span>, so there are <b>4</b> solutions.</div>'
  },
  /* ======================= PAPER 2 (GDC) ================================= */
  {
    id: 't3-2-q020',
    topic: 't3-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.7, 3.8',
    stem: '<p>A Ferris wheel has a diameter of 90 m and its lowest point is 5 m above the ground. It turns at a constant speed and completes one revolution every 18 minutes. A rider boards at the lowest point at <span class="chem">t = 0</span>. The height of the rider above the ground, <span class="chem">h</span> metres, <span class="chem">t</span> minutes after boarding is modelled by <span class="chem">h(t) = 50 - 45 cos((pi/9)t)</span>.</p><p>Find the length of time, in minutes, during one revolution for which the rider is more than 70 m above the ground. Give your answer to 3 significant figures.</p>',
    answer: 6.3612200039, sigfigs: 3, unit: 'min',
    hints: [
      'Decode: you are asked for a duration, not a time. Find the two times in <span class="chem">0 &lt;= t &lt;= 18</span> at which <span class="chem">h(t) = 70</span>, then subtract.',
      'On your GDC, graph <span class="chem">y = 50 - 45 cos((pi/9)x)</span> and <span class="chem">y = 70</span> for <span class="chem">0 &lt;= x &lt;= 18</span> and find both intersections.',
      'Or by hand: <span class="chem">cos((pi/9)t) = -4/9</span>, so <span class="chem">t_1 = (9/pi) arccos(-4/9)</span> and, by symmetry about <span class="chem">t = 9</span>, <span class="chem">t_2 = 18 - t_1</span>.'
    ],
    solution: '<p><span class="chem">50 - 45 cos((pi/9)t) = 70</span> gives <span class="chem">cos((pi/9)t) = -4/9</span>. The GDC gives <span class="chem">t_1 = 5.8194…</span> and <span class="chem">t_2 = 12.1806…</span> minutes.</p><p>Time above 70 m <span class="chem">= t_2 - t_1 = 6.3612…</span>, so <b>6.36 minutes</b>.</p>'
  },
  {
    id: 't3-2-q021',
    topic: 't3-2', level: 'sl', tier: 'exam', type: 'short', marks: 7,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.7, 3.8',
    stem: '<p>The mean monthly temperature in a town, <span class="chem">T</span> °C, is modelled by <span class="chem">T(t) = a cos(b(t - c)) + d</span>, where <span class="chem">t</span> is the month number (<span class="chem">t = 1</span> for January, <span class="chem">t = 12</span> for December) and <span class="chem">a, b, c, d &gt; 0</span>. The highest mean temperature, 27.8 °C, occurs in July (<span class="chem">t = 7</span>) and the lowest, 4.2 °C, occurs in January (<span class="chem">t = 1</span>). The pattern repeats every 12 months.</p><p>(a) Write down the value of <span class="chem">a</span> and the value of <span class="chem">d</span>. [2]</p><p>(b) Find the value of <span class="chem">b</span> and write down a possible value of <span class="chem">c</span>, where <span class="chem">0 &lt; c &lt; 12</span>. [2]</p><p>(c) Use the model to find the length of time, in months, during one year for which the mean temperature is above 20 °C. [3]</p>',
    answer: '<p>(a) <span class="chem">a = 11.8</span>, <span class="chem">d = 16</span>. (b) <span class="chem">b = 2pi/12 = pi/6</span>; <span class="chem">c = 7</span>. (c) <span class="chem">T(t) = 20</span> when <span class="chem">t = 4.66</span> and <span class="chem">t = 9.34</span>, so <span class="chem">T &gt; 20</span> for about <b>4.68 months</b>.</p>',
    markscheme: [
      'A1: a = (27.8 − 4.2)/2 = 11.8.',
      'A1: d = (27.8 + 4.2)/2 = 16.',
      'A1: Period 12 months, so b = 2π/12 = π/6 (≈ 0.524).',
      'A1: c = 7 (a maximum of a positive cosine occurs at t = c).',
      'M1: Set 11.8 cos((π/6)(t − 7)) + 16 = 20, or intersect the graph with T = 20 on a GDC.',
      'A1: t = 4.66 and t = 9.34.',
      'A1: Length of time = 9.34 − 4.66 = 4.68 months.'
    ],
    hints: [
      'Decode: (a) and (b) are the standard max/min recipe; (c) asks for the length of the interval of <span class="chem">t</span> on which <span class="chem">T(t) &gt; 20</span>.',
      'Amplitude <span class="chem">= (max - min)/2</span>, principal axis <span class="chem">= (max + min)/2</span>, and with <span class="chem">a &gt; 0</span> the cosine peaks at <span class="chem">t = c</span>.',
      'Graph <span class="chem">T(t)</span> and <span class="chem">y = 20</span> for <span class="chem">1 &lt;= t &lt;= 13</span>; subtract the two intersection values.'
    ]
  },
  {
    id: 't3-2-q022',
    topic: 't3-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.8',
    stem: '<p>Consider the equation <span class="chem">4 sin(2x) + 1 = x</span>, where <span class="chem">x</span> is in radians and <span class="chem">0 &lt;= x &lt;= 2pi</span>.</p><p>The equation has three solutions in this interval. Find the largest solution, giving your answer to 3 significant figures.</p>',
    answer: 4.2402579380, sigfigs: 3,
    hints: [
      'This equation mixes a trigonometric function with a linear one, so it cannot be solved algebraically: solve it graphically on your GDC.',
      'Graph <span class="chem">y = 4 sin(2x) + 1</span> and <span class="chem">y = x</span> on <span class="chem">0 &lt;= x &lt;= 2pi</span> (radian mode) and find the intersection with the largest <span class="chem">x</span>-coordinate.'
    ],
    solution: '<p>The graphs of <span class="chem">y = 4 sin(2x) + 1</span> and <span class="chem">y = x</span> meet at <span class="chem">x = 1.507…, 3.475…, 4.240…</span>. For <span class="chem">x &gt; 5</span> the line is above the maximum value 5 of the sine curve, so there are no more solutions. Largest solution: <b>x = 4.24</b>.</p>'
  },
  {
    id: 't3-2-q023',
    topic: 't3-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.6, 3.8',
    stem: '<p>Solve the equation <span class="chem">5 cos^2 x - 2 sin x - 3 = 0</span> for <span class="chem">0 &lt;= x &lt;= 2pi</span>, where <span class="chem">x</span> is in radians.</p><p>The equation has four solutions in this interval. Find the largest one, giving your answer to 3 significant figures.</p>',
    answer: 5.2413636451, sigfigs: 3,
    hints: [
      'Replace <span class="chem">cos^2 x</span> with <span class="chem">1 - sin^2 x</span> to get a quadratic in <span class="chem">sin x</span>.',
      'You should get <span class="chem">5 sin^2 x + 2 sin x - 2 = 0</span>, so <span class="chem">sin x = (-1 +- sqrt(11))/5</span>. Both values lie in <span class="chem">[-1, 1]</span>.',
      'The negative value <span class="chem">sin x = -0.8633…</span> gives solutions in quadrants III and IV: <span class="chem">x = pi + alpha</span> and <span class="chem">x = 2pi - alpha</span>, where <span class="chem">alpha = arcsin(0.8633…)</span>.'
    ],
    solution: '<p><span class="chem">5(1 - sin^2 x) - 2 sin x - 3 = 0</span> gives <span class="chem">5 sin^2 x + 2 sin x - 2 = 0</span>, so <span class="chem">sin x = 0.4633…</span> or <span class="chem">sin x = -0.8633…</span>.</p><p><span class="chem">sin x = 0.4633…</span>: <span class="chem">x = 0.482, 2.66</span>. <span class="chem">sin x = -0.8633…</span>: with <span class="chem">alpha = 1.0418…</span>, <span class="chem">x = pi + alpha = 4.18</span> and <span class="chem">x = 2pi - alpha = 5.241…</span>.</p><p>Largest solution: <b>x = 5.24</b>.</p>'
  },
  {
    id: 't3-2-q024',
    topic: 't3-2', level: 'sl', tier: 'challenge', type: 'short', marks: 7,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.7, 3.8',
    stem: '<p>Two marker buoys bob up and down on waves. The heights, in metres, of buoy A and buoy B above mean sea level <span class="chem">t</span> seconds after a recording starts are</p><p><span class="chem">h_A(t) = 0.8 sin(1.3t)</span> and <span class="chem">h_B(t) = 0.6 cos(0.9t) + 0.1</span>, for <span class="chem">0 &lt;= t &lt;= 10</span>.</p><p>(a) Find the first time at which the two buoys are at the same height. [2]</p><p>(b) Find the total length of time during the recording for which buoy A is higher than buoy B. [3]</p><p>(c) Find the greatest vertical distance between the two buoys during the recording. [2]</p>',
    answer: '<p>(a) <span class="chem">t = 0.652</span> s. (b) A is higher on <span class="chem">0.652 &lt; t &lt; 2.81</span>, <span class="chem">4.63 &lt; t &lt; 6.52</span> and <span class="chem">9.42 &lt; t &lt;= 10</span>: total <b>4.63 s</b>. (c) The greatest value of <span class="chem">|h_A(t) - h_B(t)|</span> is <b>1.14 m</b> (at <span class="chem">t = 8.11</span>, with B above A).</p>',
    markscheme: [
      'M1: Graph h_A and h_B (or h_A − h_B) on 0 ≤ t ≤ 10 and find the first intersection.',
      'A1: t = 0.652 s.',
      'M1: Find all the intersections: t = 0.652, 2.81, 4.63, 6.52, 9.42.',
      'R1: Identify the intervals where h_A > h_B: (0.652, 2.81), (4.63, 6.52) and (9.42, 10).',
      'A1: Total time = 2.157 + 1.896 + 0.579 = 4.63 s.',
      'M1: Graph y = |h_A(t) − h_B(t)| (or find the max and min of h_A − h_B) on 0 ≤ t ≤ 10.',
      'A1: Greatest vertical distance = 1.14 m.'
    ],
    hints: [
      'Decode: "same height" means <span class="chem">h_A = h_B</span>; "A higher than B" means the inequality <span class="chem">h_A(t) &gt; h_B(t)</span>; "vertical distance" means <span class="chem">|h_A - h_B|</span>. The two waves have different periods, so this is a GDC graphing question.',
      'Graph the single function <span class="chem">y = h_A(t) - h_B(t)</span> for <span class="chem">0 &lt;= t &lt;= 10</span>. Its zeros answer (a), the parts above the axis answer (b).',
      'For (c), the greatest vertical distance is the largest of |max| and |min| of <span class="chem">h_A - h_B</span> on the interval. Check the end points too.'
    ],
    solution: '<p><strong>Decoding:</strong> each phrase is a statement about <span class="chem">D(t) = h_A(t) - h_B(t)</span>: same height ⇔ <span class="chem">D = 0</span>; A higher ⇔ <span class="chem">D &gt; 0</span>; vertical distance <span class="chem">= |D|</span>.</p><p>(a) The zeros of <span class="chem">D</span> are <span class="chem">t = 0.652, 2.809, 4.626, 6.521, 9.421</span>. <span class="chem">D(0) = -0.7 &lt; 0</span>, so the first meeting is at <b>0.652 s</b>.</p><p>(b) <span class="chem">D &gt; 0</span> on <span class="chem">(0.652, 2.809)</span>, <span class="chem">(4.626, 6.521)</span>, <span class="chem">(9.421, 10]</span>: total <b>4.63 s</b>.</p><p>(c) The minimum of <span class="chem">D</span> is <span class="chem">-1.136</span> at <span class="chem">t = 8.11</span> and its maximum is smaller in size, so the greatest distance is <b>1.14 m</b>.</p>'
  },
  {
    id: 't3-2-q025',
    topic: 't3-2', level: 'sl', tier: 'challenge', type: 'numeric', marks: 6,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.7, 3.8',
    stem: '<p>In a northern city, the number of hours of daylight <span class="chem">D</span> on day <span class="chem">t</span> of the year (<span class="chem">t = 1</span> is 1 January; the year has 365 days) is modelled by <span class="chem">D(t) = a cos(b(t - c)) + d</span>, with <span class="chem">a, b &gt; 0</span>. The longest day, with 15.20 hours of daylight, is day 172. The shortest day, with 9.10 hours, is half a year later, and the pattern repeats every 365 days.</p><p>A day is called a "long day" if it has more than 14 hours of daylight. Using the model, find how many long days there are in one year (days 1 to 365).</p>',
    answer: 107,
    hints: [
      'Decode: build the model first (amplitude, principal axis, period 365 days, maximum at <span class="chem">t = 172</span>), then solve the inequality <span class="chem">D(t) &gt; 14</span>. The answer is a number of whole days, so you must count integers, not subtract decimals.',
      '<span class="chem">a = (15.20 - 9.10)/2 = 3.05</span>, <span class="chem">d = (15.20 + 9.10)/2 = 12.15</span>, <span class="chem">b = 2pi/365</span>, <span class="chem">c = 172</span>.',
      'Solve <span class="chem">D(t) = 14</span> on a GDC: the solutions lie between consecutive whole numbers. Work out the first and last whole-number day with <span class="chem">D(t) &gt; 14</span> and count them inclusively.'
    ],
    solution: '<p><strong>Decoding:</strong> "how many long days" asks for the number of integers <span class="chem">t</span> in <span class="chem">1 &lt;= t &lt;= 365</span> with <span class="chem">D(t) &gt; 14</span>.</p><p><span class="chem">D(t) = 3.05 cos((2pi/365)(t - 172)) + 12.15</span>. Solving <span class="chem">D(t) = 14</span> gives <span class="chem">t = 118.5…</span> and <span class="chem">t = 225.5…</span>. Check: <span class="chem">D(118) = 13.97</span>, <span class="chem">D(119) = 14.02</span>, <span class="chem">D(225) = 14.02</span>, <span class="chem">D(226) = 13.97</span>.</p><p>The long days are days 119 to 225 inclusive: <span class="chem">225 - 119 + 1 =</span> <b>107 days</b>.</p>'
  },
  {
    id: 't3-2-q026',
    topic: 't3-2', level: 'sl', tier: 'exam', type: 'short', marks: 9,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.7, 3.8',
    stem: '<p>At a harbour entrance, high tide on a particular day has a depth of 6.4 m at 01:30, and the next low tide has a depth of 2.2 m at 07:45. The depth of water, <span class="chem">y</span> metres, <span class="chem">t</span> hours after midnight is modelled by <span class="chem">y(t) = a cos(b(t - 1.5)) + d</span>, where <span class="chem">a, b &gt; 0</span>.</p><p>(a) Find the values of <span class="chem">a</span>, <span class="chem">d</span> and <span class="chem">b</span>. [3]</p><p>(b) Write down the model, and verify that it gives a depth of 2.2 m at 07:45. [1]</p><p>A fishing boat needs a depth of at least 3.5 m to pass through the entrance.</p><p>(c) Find the earliest time after 07:45 at which the boat can pass through. Give your answer to the nearest minute. [3]</p><p>(d) Find the length of time, in hours and minutes, for which the boat can then pass through without stopping. [2]</p>',
    answer: '<p>(a) <span class="chem">a = 2.1</span>, <span class="chem">d = 4.3</span>, period <span class="chem">= 2(7.75 - 1.5) = 12.5</span> h so <span class="chem">b = 2pi/12.5 = 0.503</span> (<span class="chem">= 4pi/25</span>). (b) <span class="chem">y(t) = 2.1 cos((4pi/25)(t - 1.5)) + 4.3</span>; <span class="chem">y(7.75) = 2.1 cos(pi) + 4.3 = 2.2</span>. (c) <span class="chem">y = 3.5</span> at <span class="chem">t = 10.097</span>, i.e. <b>10:06</b>. (d) The depth next falls to 3.5 m at <span class="chem">t = 17.903</span>, so the window is <span class="chem">7.81</span> h, about <b>7 h 48 min</b>.</p>',
    markscheme: [
      'A1: a = (6.4 − 2.2)/2 = 2.1.',
      'A1: d = (6.4 + 2.2)/2 = 4.3.',
      'A1: Half-period = 7.75 − 1.5 = 6.25 h, so period 12.5 h and b = 2π/12.5 = 4π/25 (≈ 0.503).',
      'A1: y(t) = 2.1 cos((4π/25)(t − 1.5)) + 4.3, and y(7.75) = 2.1 cos π + 4.3 = 2.2.',
      'M1: Solve y(t) = 3.5 on a GDC for t > 7.75 (graph y(t) and y = 3.5).',
      'A1: t = 10.097… hours.',
      'A1: 0.097 h ≈ 6 minutes, so the time is 10:06.',
      'M1: Next solution of y(t) = 3.5 is t = 17.903 (or use symmetry about the high tide at t = 14).',
      'A1: 17.903 − 10.097 = 7.81 h ≈ 7 h 48 min.'
    ],
    hints: [
      'Decode: high and low tide give the maximum, minimum and half the period. "At least 3.5 m" means you need <span class="chem">y(t) &gt;= 3.5</span>, and times must be converted from decimal hours to clock times.',
      '07:45 is <span class="chem">t = 7.75</span>. The time from high tide to low tide is half a period.',
      'For (c), the depth rises after the low tide at 07:45. Intersect <span class="chem">y(t)</span> with <span class="chem">y = 3.5</span>; convert the decimal part of the hour to minutes by multiplying by 60.'
    ]
  },
  {
    id: 't3-2-q027',
    topic: 't3-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.6, 3.8',
    stem: '<p>Solve the equation <span class="chem">tan x = 1.5 cos x</span> for <span class="chem">0° &lt;= x &lt;= 360°</span>.</p><p>Give the largest solution in degrees, correct to 3 significant figures.</p>',
    answer: 133.8828013264, sigfigs: 3, unit: '°',
    hints: [
      'Write <span class="chem">tan x = sin x / cos x</span> and multiply by <span class="chem">cos x</span>. Note that <span class="chem">cos x != 0</span>, because <span class="chem">tan x</span> is undefined at <span class="chem">90°</span> and <span class="chem">270°</span>.',
      'You get <span class="chem">sin x = 1.5 cos^2 x = 1.5(1 - sin^2 x)</span>, a quadratic in <span class="chem">sin x</span>: <span class="chem">1.5 sin^2 x + sin x - 1.5 = 0</span>.',
      'Only one root of the quadratic lies in <span class="chem">[-1, 1]</span>. It is positive, so the solutions are in quadrants I and II.'
    ],
    solution: '<p>Since <span class="chem">cos x != 0</span>: <span class="chem">sin x = 1.5 cos^2 x</span>, so <span class="chem">1.5 sin^2 x + sin x - 1.5 = 0</span> and <span class="chem">sin x = (-1 +- sqrt(10))/3</span>.</p><p><span class="chem">sin x = -1.387…</span> is impossible. <span class="chem">sin x = 0.72076…</span> gives <span class="chem">x = 46.1°</span> or <span class="chem">x = 180° - 46.1° = 133.88…°</span>. (A GDC graph of <span class="chem">y = tan x - 1.5 cos x</span> confirms only these two; the sign changes at <span class="chem">90°</span> and <span class="chem">270°</span> are asymptotes, not roots.)</p><p>Largest solution: <b>134°</b>.</p>'
  },
  {
    id: 't3-2-q028',
    topic: 't3-2', level: 'ahl', tier: 'exam', type: 'short', marks: 6,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 3.9, SL 3.8',
    stem: '<p>(a) Show that the equation <span class="chem">2 sec^2 x + tan x = 5</span> can be written as <span class="chem">2 tan^2 x + tan x - 3 = 0</span>. [2]</p><p>(b) Hence solve <span class="chem">2 sec^2 x + tan x = 5</span> for <span class="chem">0 &lt;= x &lt;= 2pi</span>. Give your answers in radians, to 3 significant figures where they are not exact. [4]</p>',
    answer: '<p>(a) <span class="chem">2(1 + tan^2 x) + tan x - 5 = 0</span>, so <span class="chem">2 tan^2 x + tan x - 3 = 0</span>. (b) <span class="chem">(2 tan x + 3)(tan x - 1) = 0</span>. <span class="chem">tan x = 1</span>: <span class="chem">x = pi/4, 5pi/4</span> (0.785, 3.93). <span class="chem">tan x = -1.5</span>: <span class="chem">x = pi - arctan 1.5 = 2.16</span> and <span class="chem">x = 2pi - arctan 1.5 = 5.30</span>.</p>',
    markscheme: [
      'M1: Use 1 + tan²x = sec²x: 2(1 + tan²x) + tan x = 5.',
      'A1: 2 + 2 tan²x + tan x − 5 = 0, so 2 tan²x + tan x − 3 = 0 (AG).',
      'M1: Factorise (2 tan x + 3)(tan x − 1) = 0, or solve the quadratic, to get tan x = 1 or tan x = −1.5.',
      'A1: tan x = 1 gives x = π/4, 5π/4 (0.785, 3.93).',
      'A1: tan x = −1.5 gives x = π − arctan 1.5 = 2.16.',
      'A1: and x = 2π − arctan 1.5 = 5.30 (four solutions in total).'
    ],
    hints: [
      'Use the booklet identity <span class="chem">1 + tan^2 x = sec^2 x</span>.',
      'The quadratic factorises. One root gives exact angles, the other needs <span class="chem">arctan 1.5 = 0.9828…</span> from the GDC.',
      '<span class="chem">tan x</span> has period <span class="chem">pi</span>, so each value of <span class="chem">tan x</span> gives two solutions in <span class="chem">[0, 2pi]</span>. A negative tangent lies in quadrants II and IV.'
    ]
  },
  {
    id: 't3-2-q029',
    topic: 't3-2', level: 'ahl', tier: 'exam', type: 'short', marks: 8,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 3.10, SL 3.8',
    stem: '<p>Two signals are added to give <span class="chem">y = 3 sin t + 4 cos(t - pi/6)</span>, for <span class="chem">0 &lt;= t &lt;= 2pi</span>.</p><p>(a) Use your GDC to find the maximum value of <span class="chem">y</span> and the value of <span class="chem">t</span> at which it occurs. [2]</p><p>(b) Use a compound-angle identity to show that <span class="chem">y = 5 sin t + 2sqrt(3) cos t</span>. [3]</p><p>(c) Hence find the exact value of <span class="chem">tan t</span> when <span class="chem">y = 0</span>, and solve <span class="chem">y = 0</span> for <span class="chem">0 &lt;= t &lt;= 2pi</span>. [3]</p>',
    answer: '<p>(a) Maximum <span class="chem">y = 6.08</span> (it is <span class="chem">sqrt(37)</span>) at <span class="chem">t = 0.965</span>. (b) <span class="chem">4 cos(t - pi/6) = 4(cos t · sqrt(3)/2 + sin t · 1/2) = 2sqrt(3) cos t + 2 sin t</span>, so <span class="chem">y = 5 sin t + 2sqrt(3) cos t</span>. (c) <span class="chem">tan t = -2sqrt(3)/5</span>; <span class="chem">t = 2.54</span> or <span class="chem">t = 5.68</span>.</p>',
    markscheme: [
      'A1: Maximum value y = 6.08.',
      'A1: at t = 0.965.',
      'M1: Expand cos(t − π/6) = cos t cos(π/6) + sin t sin(π/6).',
      'A1: Substitute cos(π/6) = √3/2 and sin(π/6) = 1/2: 4 cos(t − π/6) = 2√3 cos t + 2 sin t.',
      'A1: Collect terms: y = 3 sin t + 2 sin t + 2√3 cos t = 5 sin t + 2√3 cos t (AG).',
      'M1: y = 0 gives 5 sin t = −2√3 cos t, so tan t = −2√3/5.',
      'A1: t = π − arctan(2√3/5) = 2.54.',
      'A1: t = 2π − arctan(2√3/5) = 5.68.'
    ],
    hints: [
      'For (a), graph <span class="chem">y</span> in radian mode on <span class="chem">[0, 2pi]</span> and use the maximum feature.',
      'For (b), use <span class="chem">cos(A - B) = cos A cos B + sin A sin B</span> from the formula booklet.',
      'For (c), divide <span class="chem">5 sin t + 2sqrt(3) cos t = 0</span> by <span class="chem">cos t</span> (it cannot be 0 here: then <span class="chem">y = ±5</span>). A negative tangent gives solutions in quadrants II and IV.'
    ]
  },
  {
    id: 't3-2-q030',
    topic: 't3-2', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 6,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 3.9',
    stem: '<p>A painting 3.6 m tall hangs on a vertical wall. Its lower edge is 1.2 m above the eye level of a visitor, who stands on level ground <span class="chem">x</span> metres from the wall. The angle between the visitor\'s lines of sight to the top and the bottom of the painting is <span class="chem">theta</span>.</p><p>The visitor chooses <span class="chem">x</span> to make <span class="chem">theta</span> as large as possible. Find this largest value of <span class="chem">theta</span>, in degrees, correct to 3 significant figures.</p>',
    answer: 36.8698976458, sigfigs: 3, unit: '°',
    hints: [
      'Decode: <span class="chem">theta</span> is the DIFFERENCE of two angles of elevation (to the top and to the bottom of the painting). Write each one with arctan, then maximise the difference on a GDC.',
      'The top is <span class="chem">1.2 + 3.6 = 4.8</span> m above eye level, so <span class="chem">theta(x) = arctan(4.8/x) - arctan(1.2/x)</span> for <span class="chem">x &gt; 0</span>.',
      'Graph <span class="chem">theta(x)</span> (in degree mode, or convert from radians) for, say, <span class="chem">0 &lt; x &lt;= 10</span> and use the maximum feature.'
    ],
    solution: '<p><strong>Decoding:</strong> the angle the painting subtends = (angle of elevation of the top) − (angle of elevation of the bottom).</p><p><span class="chem">theta(x) = arctan(4.8/x) - arctan(1.2/x)</span>. The GDC maximum is at <span class="chem">x = 2.40</span> m, where <span class="chem">theta = arctan 2 - arctan 0.5 = 36.869…°</span>.</p><p>(Check with <span class="chem">tan(A - B)</span>: <span class="chem">(2 - 0.5)/(1 + 2 × 0.5) = 0.75</span>, and <span class="chem">arctan 0.75 = 36.87°</span>.) Largest angle: <b>36.9°</b>.</p>'
  },
  {
    id: 't3-2-q031',
    topic: 't3-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.8',
    stem: '<p>Solve the equation <span class="chem">3 sin(2x - 40°) = 1.7</span> for <span class="chem">0° &lt;= x &lt;= 360°</span>.</p><p>The equation has four solutions in this interval. Find the largest one, in degrees, correct to 3 significant figures.</p>',
    answer: 272.7409460795, sigfigs: 3, unit: '°',
    hints: [
      'Let <span class="chem">u = 2x - 40°</span>. Change the interval first: <span class="chem">-40° &lt;= u &lt;= 680°</span>.',
      '<span class="chem">sin u = 1.7/3</span>, so the reference angle is <span class="chem">arcsin(1.7/3) = 34.52°</span>. List <span class="chem">u = 34.52°, 145.48°</span> and add <span class="chem">360°</span> while you stay below <span class="chem">680°</span>.',
      'Then <span class="chem">x = (u + 40°)/2</span>.'
    ],
    solution: '<p><span class="chem">u = 2x - 40° in [-40°, 680°]</span>, <span class="chem">sin u = 0.5667</span>: <span class="chem">u = 34.52°, 145.48°, 394.52°, 505.48°</span>.</p><p><span class="chem">x = (u + 40°)/2 = 37.3°, 92.7°, 217.3°, 272.74…°</span>. Largest: <b>273°</b>.</p>'
  },
  {
    id: 't3-2-q032',
    topic: 't3-2', level: 'sl', tier: 'challenge', type: 'short', marks: 9,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.7, 3.8',
    stem: '<p>A Ferris wheel of radius 20 m has its centre 23 m above the ground. It rotates anticlockwise at a constant rate of 0.4 revolutions per minute. At <span class="chem">t = 0</span>, car A is level with the centre and moving upwards. Car B is at the opposite end of the diameter through A.</p><p>(a) Find the time for one revolution, and show that the height of car A above the ground, in metres, <span class="chem">t</span> minutes later is <span class="chem">h_A(t) = 23 + 20 sin(0.8pi t)</span>. [2]</p><p>(b) Find the times during the first revolution at which car A is 35 m above the ground. [3]</p><p>(c) Write down an expression for the height <span class="chem">h_B(t)</span> of car B, and find the first time at which the vertical distance between the two cars is 30 m. [2]</p><p>(d) Find the total time in each revolution for which the vertical distance between the cars is more than 30 m. [2]</p>',
    answer: '<p>(a) One revolution takes <span class="chem">1/0.4 = 2.5</span> min, so <span class="chem">b = 2pi/2.5 = 0.8pi</span>; A starts on the principal axis going up, so <span class="chem">h_A = 23 + 20 sin(0.8pi t)</span>. (b) <span class="chem">sin(0.8pi t) = 0.6</span>: <span class="chem">t = 0.256</span> min and <span class="chem">t = 0.994</span> min. (c) <span class="chem">h_B = 23 - 20 sin(0.8pi t)</span>; distance <span class="chem">= 40|sin(0.8pi t)| = 30</span> first at <span class="chem">t = 0.337</span> min. (d) <span class="chem">|sin(0.8pi t)| &gt; 0.75</span> for a total of <b>1.15 min</b> per revolution.</p>',
    markscheme: [
      'A1: Period = 1/0.4 = 2.5 minutes.',
      'A1: b = 2π/2.5 = 0.8π, amplitude 20, axis 23, and a sine starts on the axis moving up, so h_A(t) = 23 + 20 sin(0.8πt) (AG).',
      'M1: Solve 23 + 20 sin(0.8πt) = 35, i.e. sin(0.8πt) = 0.6, on 0 ≤ t ≤ 2.5.',
      'A1: t = 0.256 min.',
      'A1: t = 0.994 min.',
      'A1: h_B(t) = 23 − 20 sin(0.8πt) (B is half a revolution ahead).',
      'A1: |h_A − h_B| = 40|sin(0.8πt)| = 30 first when t = 0.337 min.',
      'M1: |sin(0.8πt)| > 0.75 on two intervals per revolution, each of length (π − 2 arcsin 0.75)/(0.8π) = 0.575 min.',
      'A1: Total = 1.15 min per revolution.'
    ],
    hints: [
      'Decode: "0.4 revolutions per minute" is a frequency; the period is its reciprocal. "Opposite end of the diameter" means car B is always half a revolution away from A. "Vertical distance" is <span class="chem">|h_A - h_B|</span>.',
      'Car A starts at the height of the centre and goes up: that is a sine curve with no phase shift.',
      'For car B, <span class="chem">sin(theta + pi) = -sin theta</span>, so <span class="chem">h_B = 23 - 20 sin(0.8pi t)</span> and <span class="chem">h_A - h_B = 40 sin(0.8pi t)</span>.',
      'For (d), graph <span class="chem">y = 40|sin(0.8pi x)|</span> and <span class="chem">y = 30</span> on <span class="chem">0 &lt;= x &lt;= 2.5</span> and add the lengths of the intervals where the curve is above the line.'
    ],
    solution: '<p><strong>Decoding:</strong> turn every sentence into a function: period = 1/frequency; B = A shifted by half a turn; vertical distance = <span class="chem">|h_A - h_B| = 40|sin(0.8pi t)|</span>.</p><p>(b) <span class="chem">sin(0.8pi t) = 0.6</span>: <span class="chem">0.8pi t = 0.6435</span> or <span class="chem">pi - 0.6435</span>, so <span class="chem">t = 0.256</span>, <span class="chem">0.994</span> min.</p><p>(c) <span class="chem">40 sin(0.8pi t) = 30</span>: <span class="chem">t = arcsin(0.75)/(0.8pi) = 0.337</span> min.</p><p>(d) <span class="chem">|sin(0.8pi t)| &gt; 0.75</span> on <span class="chem">(0.337, 0.913)</span> and <span class="chem">(1.587, 2.163)</span>: total <b>1.15 min</b>.</p>'
  },
  {
    id: 't3-2-q033',
    topic: 't3-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.6, 3.8',
    stem: '<p>The equation <span class="chem">2 cos 2x = 3 sin x - 1</span> has two solutions in the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>, where <span class="chem">x</span> is in radians.</p><p>Find the solution that lies in the interval <span class="chem">pi/2 &lt; x &lt; pi</span>, giving your answer to 3 significant figures.</p>',
    answer: 2.5366324971, sigfigs: 3,
    hints: [
      'The equation has <span class="chem">sin x</span> in it, so choose <span class="chem">cos 2x = 1 - 2 sin^2 x</span>.',
      'You should get <span class="chem">4 sin^2 x + 3 sin x - 3 = 0</span>. Solve this quadratic in <span class="chem">sin x</span> and reject any root outside <span class="chem">[-1, 1]</span>.',
      'The second-quadrant solution of <span class="chem">sin x = k</span> (with <span class="chem">k &gt; 0</span>) is <span class="chem">x = pi - arcsin k</span>.'
    ],
    solution: '<p><span class="chem">2(1 - 2 sin^2 x) = 3 sin x - 1</span> gives <span class="chem">4 sin^2 x + 3 sin x - 3 = 0</span>, so <span class="chem">sin x = (-3 +- sqrt(57))/8</span>.</p><p><span class="chem">sin x = -1.319</span> is impossible; <span class="chem">sin x = 0.56873…</span> gives <span class="chem">x = 0.605</span> or <span class="chem">x = pi - 0.60496… = 2.5366…</span>.</p><p>Answer: <b>x = 2.54</b>.</p>'
  },
  {
    id: 't3-2-q034',
    topic: 't3-2', level: 'sl', tier: 'challenge', type: 'short', marks: 8,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.7, 3.8',
    stem: '<p>A simple model for the blood pressure of a resting patient, <span class="chem">P</span> mm Hg, <span class="chem">t</span> seconds after a measurement begins, is <span class="chem">P(t) = 95 + 25 sin(2.4pi t)</span>. One complete cycle of the model represents one heartbeat.</p><p>(a) Find the patient\'s heart rate, in beats per minute. [2]</p><p>(b) Write down the greatest and the least blood pressure given by the model. [2]</p><p>(c) Find the length of time during one heartbeat for which the blood pressure is above 110 mm Hg. [3]</p><p>(d) Hence find the percentage of the time for which the blood pressure is above 110 mm Hg. [1]</p>',
    answer: '<p>(a) Period <span class="chem">= 2pi/(2.4pi) = 0.833</span> s, so <span class="chem">60/0.8333 = 72</span> beats per minute. (b) Greatest 120 mm Hg, least 70 mm Hg. (c) <span class="chem">sin(2.4pi t) = 0.6</span> at <span class="chem">t = 0.0853</span> s and <span class="chem">t = 0.331</span> s, so <b>0.246 s</b>. (d) <span class="chem">0.246/0.833 = 29.5%</span>.</p>',
    markscheme: [
      'M1: Period = 2π/(2.4π) = 0.8333 s.',
      'A1: Heart rate = 60 ÷ 0.8333 = 72 beats per minute.',
      'A1: Greatest P = 95 + 25 = 120 mm Hg.',
      'A1: Least P = 95 − 25 = 70 mm Hg.',
      'M1: Solve 95 + 25 sin(2.4πt) = 110 (sin(2.4πt) = 0.6) on 0 ≤ t ≤ 0.8333.',
      'A1: t = 0.0853 s and t = 0.331 s.',
      'A1: Time above 110 = 0.331 − 0.0853 = 0.246 s.',
      'A1: Percentage = 0.246/0.8333 × 100 = 29.5%.'
    ],
    hints: [
      'Decode: "one cycle = one heartbeat", so the heart rate is the number of periods in 60 seconds. Units matter: the model uses seconds, the answer is per minute.',
      'Period <span class="chem">T = 2pi/b</span> with <span class="chem">b = 2.4pi</span>.',
      'For (c), graph <span class="chem">P(t)</span> and <span class="chem">y = 110</span> over one period <span class="chem">0 &lt;= t &lt;= T</span> and subtract the two intersection times.'
    ],
    solution: '<p><strong>Decoding:</strong> heart rate = beats per minute = <span class="chem">60 ÷</span> (period in seconds).</p><p>(a) <span class="chem">T = 2pi/(2.4pi) = 5/6</span> s, so 72 beats per minute. (b) 120 and 70 mm Hg.</p><p>(c) <span class="chem">sin(2.4pi t) = 0.6</span>: <span class="chem">t = 0.6435/(2.4pi) = 0.0853</span> and <span class="chem">t = (pi - 0.6435)/(2.4pi) = 0.3313</span>; difference <b>0.246 s</b>. (d) <b>29.5%</b>.</p>'
  },
  {
    id: 't3-2-q035',
    topic: 't3-2', level: 'sl', tier: 'challenge', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.7, 3.8',
    stem: '<p>Consider the equation <span class="chem">3 sin x + 2 sin 2x = k</span>, where <span class="chem">0 &lt;= x &lt;= 2pi</span> and <span class="chem">k ∈ ℝ</span>.</p><p>Find the largest value of <span class="chem">k</span> for which the equation has at least one solution. Give your answer to 3 significant figures.</p>',
    answer: 4.3431050923, sigfigs: 3,
    hints: [
      'Decode: the equation <span class="chem">f(x) = k</span> has a solution exactly when the horizontal line <span class="chem">y = k</span> meets the graph of <span class="chem">y = f(x)</span>. So the largest such <span class="chem">k</span> is the maximum value of <span class="chem">f(x) = 3 sin x + 2 sin 2x</span> on the interval.',
      'The maximum is NOT <span class="chem">3 + 2 = 5</span>: the two terms do not reach their maxima at the same <span class="chem">x</span>.',
      'Graph <span class="chem">y = 3 sin x + 2 sin 2x</span> for <span class="chem">0 &lt;= x &lt;= 2pi</span> and use the maximum feature.'
    ],
    solution: '<p><strong>Decoding:</strong> "largest <span class="chem">k</span> with at least one solution" = the maximum value of <span class="chem">f(x) = 3 sin x + 2 sin 2x</span> on <span class="chem">[0, 2pi]</span>.</p><p><span class="chem">3 sin x</span> peaks at <span class="chem">x = pi/2</span>, but <span class="chem">2 sin 2x</span> is 0 there, so the sum cannot reach 5. The GDC maximum is at <span class="chem">x = 0.996</span>, where <span class="chem">f(x) = 4.3431…</span>.</p><p>Largest value: <b>k = 4.34</b>.</p>'
  },
  {
    id: 't3-2-q036',
    topic: 't3-2', level: 'ahl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 3.9',
    stem: '<p>Solve the equation <span class="chem">arcsin x + arctan x = 1</span>. Give your answer to 3 significant figures.</p>',
    answer: 0.5065231076, sigfigs: 3,
    hints: [
      'First decide where the left-hand side is defined: <span class="chem">arcsin x</span> needs <span class="chem">-1 &lt;= x &lt;= 1</span>.',
      'On this domain both <span class="chem">arcsin x</span> and <span class="chem">arctan x</span> are increasing, so the left-hand side is increasing and there is exactly one solution.',
      'Graph <span class="chem">y = arcsin x + arctan x</span> and <span class="chem">y = 1</span> (radian mode) for <span class="chem">-1 &lt;= x &lt;= 1</span> and find the intersection.'
    ],
    solution: '<p>The domain is <span class="chem">-1 &lt;= x &lt;= 1</span>. Both functions are increasing there, so <span class="chem">g(x) = arcsin x + arctan x</span> is increasing and takes each value once: <span class="chem">g(-1) = -3pi/4</span>, <span class="chem">g(1) = 3pi/4 &gt; 1</span>.</p><p>The GDC gives <span class="chem">x = 0.50652…</span>, so <b>x = 0.507</b>.</p>'
  },
  {
    id: 't3-2-q037',
    topic: 't3-2', level: 'ahl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 3.10, SL 3.8',
    stem: '<p>Find the solution of the equation <span class="chem">sin(x + pi/5) = 2 cos(x - pi/7)</span> in the interval <span class="chem">0 &lt;= x &lt;= pi</span>. Give your answer to 3 significant figures.</p>',
    answer: 1.6191466749, sigfigs: 3,
    hints: [
      'Either graph both sides on a GDC (radian mode) and find the intersection, or expand both sides with the compound-angle identities.',
      'Expanding gives <span class="chem">sin x (cos(pi/5) - 2 sin(pi/7)) = cos x (2 cos(pi/7) - sin(pi/5))</span>, so <span class="chem">tan x</span> equals a constant.',
      'The constant is negative (about −20.7), so the solution in <span class="chem">[0, pi]</span> is in the second quadrant: <span class="chem">x = pi + arctan(k)</span>.'
    ],
    solution: '<p>Expanding: <span class="chem">sin x cos(pi/5) + cos x sin(pi/5) = 2 cos x cos(pi/7) + 2 sin x sin(pi/7)</span>.</p><p>So <span class="chem">tan x = (2 cos(pi/7) - sin(pi/5))/(cos(pi/5) - 2 sin(pi/7)) = 1.2141…/(-0.05875…) = -20.666…</span>.</p><p>In <span class="chem">[0, pi]</span>: <span class="chem">x = pi + arctan(-20.666…) = 1.6191…</span>, so <b>x = 1.62</b> (a GDC graph confirms one intersection).</p>'
  },
  {
    id: 't3-2-q038',
    topic: 't3-2', level: 'sl', tier: 'challenge', type: 'short', marks: 6,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.7, 3.8',
    stem: '<p>The depth of water, in metres, at harbour A, <span class="chem">t</span> hours after midnight, is modelled by <span class="chem">d_A(t) = 2.4 cos((pi/6.2)(t - 3)) + 5</span>.</p><p>At harbour B, further along the coast, the tide follows the same pattern with the same mean depth and the same period, but every high and low tide happens 1 hour 40 minutes later than at A, and the amplitude is 20% larger.</p><p>(a) Write down an expression for <span class="chem">d_B(t)</span>, the depth at harbour B. [2]</p><p>(b) Find the first time after midnight at which the two harbours have the same depth. Give your answer in hours after midnight to 3 significant figures. [2]</p><p>(c) Find the largest value of <span class="chem">d_A(t) - d_B(t)</span>. [2]</p>',
    answer: '<p>(a) <span class="chem">d_B(t) = 2.88 cos((pi/6.2)(t - 14/3)) + 5</span> (the shift is <span class="chem">3 + 5/3 = 4.667</span> h). (b) <span class="chem">t = 3.44</span> hours after midnight. (c) <b>2.21 m</b>.</p>',
    markscheme: [
      'A1: Amplitude 1.2 × 2.4 = 2.88.',
      'A1: Horizontal shift 3 + 1 h 40 min = 3 + 5/3 = 14/3 (4.67): d_B(t) = 2.88 cos((π/6.2)(t − 14/3)) + 5.',
      'M1: Graph d_A and d_B (or d_A − d_B) for t ≥ 0 and find the first intersection.',
      'A1: t = 3.44 hours.',
      'M1: Graph d_A − d_B and use the maximum feature.',
      'A1: Largest value = 2.21 m.'
    ],
    hints: [
      'Decode: "happens 1 hour 40 minutes later" is a horizontal translation to the right of <span class="chem">1 2/3</span> hours (not 1.4 hours!). "20% larger" multiplies the amplitude by 1.2; the mean depth 5 stays the same.',
      'Replace <span class="chem">t - 3</span> by <span class="chem">t - 3 - 5/3</span>, and 2.4 by 2.88.',
      'Graph <span class="chem">y = d_A(t) - d_B(t)</span>: its first zero for <span class="chem">t &gt; 0</span> is (b) and its maximum is (c).'
    ],
    solution: '<p><strong>Decoding:</strong> a later tide is a shift to the right, and minutes must become fractions of an hour: <span class="chem">1</span> h <span class="chem">40</span> min <span class="chem">= 5/3</span> h.</p><p>(a) <span class="chem">d_B(t) = 2.88 cos((pi/6.2)(t - 14/3)) + 5</span>.</p><p>(b) <span class="chem">d_A - d_B = 0</span> at <span class="chem">t = 3.439…</span> and <span class="chem">9.639…</span>; the first is <b>3.44 h</b>.</p><p>(c) The maximum of <span class="chem">d_A - d_B</span> (period 12.4 h) is <b>2.21 m</b>, at <span class="chem">t = 0.339</span> (and every 12.4 h after).</p>'
  },
  {
    id: 't3-2-q039',
    topic: 't3-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.7',
    stem: '<p>A lighthouse lamp is 500 m from a straight shoreline. The lamp turns at a constant rate, completing one revolution every 15 seconds. At <span class="chem">t = 0</span> the beam points at the point P on the shore nearest the lighthouse. For <span class="chem">0 &lt;= t &lt; 3.75</span>, the distance, in metres, of the spot of light on the shore from P after <span class="chem">t</span> seconds is <span class="chem">s(t) = 500 tan((2pi/15)t)</span>.</p><p>Find the time at which the spot of light is 1.2 km from P. Give your answer in seconds to 3 significant figures.</p>',
    answer: 2.8075056272, sigfigs: 3, unit: 's',
    hints: [
      'Use the same units: 1.2 km = 1200 m.',
      'Solve <span class="chem">500 tan((2pi/15)t) = 1200</span>, i.e. <span class="chem">tan((2pi/15)t) = 2.4</span>, with a GDC (radian mode).',
      'The graph of <span class="chem">s(t)</span> has a vertical asymptote at <span class="chem">t = 3.75</span> (a quarter turn), so there is exactly one solution in <span class="chem">0 &lt;= t &lt; 3.75</span>.'
    ],
    solution: '<p><span class="chem">tan((2pi/15)t) = 1200/500 = 2.4</span>, so <span class="chem">(2pi/15)t = arctan 2.4 = 1.1760…</span> and <span class="chem">t = 15 × 1.1760…/(2pi) = 2.8075…</span>.</p><p>Answer: <b>2.81 s</b>.</p>'
  },
  {
    id: 't3-2-q040',
    topic: 't3-2', level: 'sl', tier: 'challenge', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.7, 3.8',
    stem: '<p>Find the number of real solutions of the equation <span class="chem">10 sin x = x</span>, where <span class="chem">x</span> is in radians.</p>',
    answer: 7,
    hints: [
      'Decode: no interval is given, so you must consider ALL real <span class="chem">x</span>, negative as well as positive. The question asks how many solutions, not what they are.',
      'Since <span class="chem">-10 &lt;= 10 sin x &lt;= 10</span>, every solution satisfies <span class="chem">-10 &lt;= x &lt;= 10</span>. So you only need to graph <span class="chem">y = 10 sin x</span> and <span class="chem">y = x</span> on <span class="chem">[-10, 10]</span>.',
      'Both sides are odd functions, so the solutions come in pairs <span class="chem">±x</span>, plus <span class="chem">x = 0</span>.'
    ],
    solution: '<p><strong>Decoding:</strong> "real solutions" with no interval means all of ℝ; the bound <span class="chem">|10 sin x| &lt;= 10</span> limits the search to <span class="chem">-10 &lt;= x &lt;= 10</span>.</p><p>On <span class="chem">[0, 10]</span> the GDC gives <span class="chem">x = 0, 2.852, 7.068, 8.423</span>. By symmetry (both sides are odd) the negative solutions are <span class="chem">-2.852, -7.068, -8.423</span>.</p><p>Total: <b>7</b> solutions.</p>'
  },
  {
    id: 't3-2-q041',
    topic: 't3-2', level: 'ahl', tier: 'exam', type: 'short', marks: 6,
    paper: 'Paper 2 (GDC)', syllabus: 'AHL 3.9',
    stem: '<p>Let <span class="chem">f(x) = 2 arccos(x/3) - pi/2</span>.</p><p>(a) Write down the largest possible domain of <span class="chem">f</span>, and find the range of <span class="chem">f</span> for this domain. [2]</p><p>(b) Find the exact value of the <span class="chem">x</span>-intercept of the graph of <span class="chem">f</span>. [2]</p><p>(c) Solve <span class="chem">f(x) = x</span>. [2]</p>',
    answer: '<p>(a) Domain <span class="chem">-3 &lt;= x &lt;= 3</span>; range <span class="chem">-pi/2 &lt;= f(x) &lt;= 3pi/2</span>. (b) <span class="chem">arccos(x/3) = pi/4</span>, so <span class="chem">x = 3cos(pi/4) = 3sqrt(2)/2</span>. (c) <span class="chem">x = 0.936</span>.</p>',
    markscheme: [
      'A1: Domain −3 ≤ x ≤ 3 (since −1 ≤ x/3 ≤ 1).',
      'A1: Range −π/2 ≤ f(x) ≤ 3π/2 (arccos takes values in [0, π]).',
      'M1: f(x) = 0 gives arccos(x/3) = π/4.',
      'A1: x = 3 cos(π/4) = 3√2/2.',
      'M1: Graph y = f(x) and y = x on −3 ≤ x ≤ 3 and find the intersection.',
      'A1: x = 0.936.'
    ],
    hints: [
      'The domain of <span class="chem">arccos u</span> is <span class="chem">-1 &lt;= u &lt;= 1</span> and its range is <span class="chem">0 &lt;= arccos u &lt;= pi</span>. Apply the stretch by 2 and the shift down by <span class="chem">pi/2</span>.',
      'For (b), set <span class="chem">f(x) = 0</span> and take cos of both sides.',
      'For (c), <span class="chem">f</span> is decreasing and <span class="chem">y = x</span> is increasing, so there is exactly one intersection: find it on a GDC.'
    ]
  },
  /* ======================= PAPER 1 (NO GDC) ============================== */
  {
    id: 't3-2-q042',
    topic: 't3-2', level: 'sl', tier: 'foundation', type: 'numeric', marks: 3,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.5',
    stem: '<p>Find the exact value of <span class="chem">cos(7pi/4) × tan(4pi/3)</span>.</p>',
    answer: 1.2247448714, exact: true, answerInput: 'sqrt(6)/2',
    hints: [
      '<span class="chem">7pi/4</span> is in quadrant IV (reference angle <span class="chem">pi/4</span>), where cos is positive. <span class="chem">4pi/3</span> is in quadrant III (reference angle <span class="chem">pi/3</span>), where tan is positive.',
      '<span class="chem">cos(7pi/4) = sqrt(2)/2</span> and <span class="chem">tan(4pi/3) = tan(pi/3) = sqrt(3)</span>.'
    ],
    solution: '<p><span class="chem">cos(7pi/4) = +cos(pi/4) = sqrt(2)/2</span>; <span class="chem">tan(4pi/3) = +tan(pi/3) = sqrt(3)</span>.</p><p>Product: <span class="chem">(sqrt(2)/2) × sqrt(3) =</span> <b><span class="chem">sqrt(6)/2</span></b>.</p>'
  },
  {
    id: 't3-2-q043',
    topic: 't3-2', level: 'sl', tier: 'foundation', type: 'numeric', marks: 3,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.6',
    stem: '<p>The angle <span class="chem">theta</span> is obtuse and <span class="chem">sin theta = 5/13</span>. Find the exact value of <span class="chem">tan theta</span>.</p>',
    answer: -0.4166666667, exact: true, answerInput: '-5/12',
    hints: [
      'Use <span class="chem">cos^2 theta = 1 - sin^2 theta</span>. An obtuse angle is in quadrant II, where cosine is negative.',
      '<span class="chem">cos theta = -12/13</span>, then <span class="chem">tan theta = sin theta / cos theta</span>.'
    ],
    solution: '<p><span class="chem">cos^2 theta = 1 - 25/169 = 144/169</span>, and <span class="chem">theta</span> is obtuse, so <span class="chem">cos theta = -12/13</span>.</p><p><span class="chem">tan theta = (5/13)/(-12/13) =</span> <b><span class="chem">-5/12</span></b>.</p>'
  },
  {
    id: 't3-2-q044',
    topic: 't3-2', level: 'sl', tier: 'foundation', type: 'mcq', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.7',
    stem: '<p>Consider the graph of <span class="chem">y = tan(x/2)</span> for <span class="chem">-2pi &lt; x &lt; 2pi</span>. Which option gives its period and the equations of its vertical asymptotes in this interval?</p>',
    options: [
      'Period <span class="chem">2pi</span>; asymptotes <span class="chem">x = -pi</span> and <span class="chem">x = pi</span>',
      'Period <span class="chem">pi/2</span>; asymptotes <span class="chem">x = -pi/4</span> and <span class="chem">x = pi/4</span>',
      'Period <span class="chem">4pi</span>; no asymptotes in this interval',
      'Period <span class="chem">2pi</span>; asymptotes <span class="chem">x = -pi/2</span> and <span class="chem">x = pi/2</span>'
    ],
    answer: 0,
    misconception: {
      1: 'You multiplied the period π by 1/2. A horizontal stretch by factor 2 (x/2 inside) doubles the period: π ÷ (1/2) = 2π.',
      2: 'The period of tan(bx) is π/b, not 2π/b: tan repeats every π, unlike sin and cos.',
      3: 'These are the asymptotes of y = tan x. For tan(x/2) the asymptotes are where x/2 = ±π/2, that is x = ±π.'
    },
    hints: [
      'The basic graph <span class="chem">y = tan u</span> has period <span class="chem">pi</span> and asymptotes at <span class="chem">u = pi/2 + k pi</span>.',
      'Put <span class="chem">u = x/2</span>: the asymptotes are where <span class="chem">x/2 = ±pi/2</span>.'
    ],
    solution: '<p>Period of <span class="chem">tan(bx)</span> is <span class="chem">pi/b = pi/(1/2) = 2pi</span>. Asymptotes where <span class="chem">x/2 = pi/2 + k pi</span>, i.e. <span class="chem">x = pi + 2k pi</span>; in <span class="chem">(-2pi, 2pi)</span> these are <b><span class="chem">x = -pi</span> and <span class="chem">x = pi</span></b>.</p>'
  },
  {
    id: 't3-2-q045',
    topic: 't3-2', level: 'sl', tier: 'exam', type: 'short', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.6, 3.8',
    stem: '<p>(a) Show that the equation <span class="chem">cos 2x + 3 sin x = 2</span> can be written as <span class="chem">2 sin^2 x - 3 sin x + 1 = 0</span>. [2]</p><p>(b) Hence solve <span class="chem">cos 2x + 3 sin x = 2</span> for <span class="chem">0 &lt;= x &lt;= 2pi</span>. [4]</p>',
    answer: '<p>(a) <span class="chem">1 - 2 sin^2 x + 3 sin x = 2</span>, so <span class="chem">2 sin^2 x - 3 sin x + 1 = 0</span>. (b) <span class="chem">(2 sin x - 1)(sin x - 1) = 0</span>, so <span class="chem">sin x = 1/2</span> or <span class="chem">sin x = 1</span>: <span class="chem">x = pi/6, pi/2, 5pi/6</span>.</p>',
    markscheme: [
      'M1: Use cos 2x = 1 − 2 sin²x (the form that matches sin x).',
      'A1: 1 − 2 sin²x + 3 sin x − 2 = 0, so 2 sin²x − 3 sin x + 1 = 0 (AG).',
      'M1: Factorise: (2 sin x − 1)(sin x − 1) = 0.',
      'A1: sin x = 1/2 or sin x = 1.',
      'A1: x = π/6, 5π/6.',
      'A1: x = π/2.'
    ],
    hints: [
      'The equation contains <span class="chem">sin x</span>, so pick the form of <span class="chem">cos 2x</span> that uses only <span class="chem">sin x</span>.',
      'The quadratic factorises. <span class="chem">sin x = 1/2</span> has two solutions in <span class="chem">[0, 2pi]</span>, but <span class="chem">sin x = 1</span> has only one.'
    ]
  },
  {
    id: 't3-2-q046',
    topic: 't3-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.5, 3.6',
    stem: '<p>Given that <span class="chem">tan theta = -2</span> and <span class="chem">3pi/2 &lt; theta &lt; 2pi</span>, find the exact value of <span class="chem">cos 2theta</span>.</p>',
    answer: -0.6, exact: true, answerInput: '-3/5',
    hints: [
      'Draw a right-angled triangle with opposite 2 and adjacent 1: the hypotenuse is <span class="chem">sqrt(5)</span>. In quadrant IV, cos is positive and sin is negative.',
      '<span class="chem">cos theta = 1/sqrt(5)</span>, <span class="chem">sin theta = -2/sqrt(5)</span>. Then use <span class="chem">cos 2theta = cos^2 theta - sin^2 theta</span>.'
    ],
    solution: '<p>In quadrant IV: <span class="chem">cos theta = 1/sqrt(5)</span>, <span class="chem">sin theta = -2/sqrt(5)</span>.</p><p><span class="chem">cos 2theta = cos^2 theta - sin^2 theta = 1/5 - 4/5 =</span> <b><span class="chem">-3/5</span></b>. (The sign of <span class="chem">sin theta</span> does not matter here, because it is squared.)</p>'
  },
  {
    id: 't3-2-q047',
    topic: 't3-2', level: 'sl', tier: 'exam', type: 'short', marks: 9,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.7, 3.8',
    stem: '<p>The function <span class="chem">f(x) = a sin(b(x - c)) + d</span>, where <span class="chem">a, b &gt; 0</span> and <span class="chem">-pi/2 &lt; c &lt; 0</span>, has a maximum point at <span class="chem">(pi/8, 7)</span>. The next minimum point to the right is <span class="chem">(5pi/8, -1)</span>.</p><p>(a) Write down the value of <span class="chem">a</span> and the value of <span class="chem">d</span>. [2]</p><p>(b) Find the value of <span class="chem">b</span>. [2]</p><p>(c) Find the value of <span class="chem">c</span>. [1]</p><p>(d) Solve <span class="chem">f(x) = 5</span> for <span class="chem">0 &lt;= x &lt;= pi</span>. [4]</p>',
    answer: '<p>(a) <span class="chem">a = 4</span>, <span class="chem">d = 3</span>. (b) Period <span class="chem">= 2(5pi/8 - pi/8) = pi</span>, so <span class="chem">b = 2</span>. (c) <span class="chem">2(pi/8 - c) = pi/2</span>, so <span class="chem">c = -pi/8</span>. (d) <span class="chem">sin(2x + pi/4) = 1/2</span> with <span class="chem">pi/4 &lt;= 2x + pi/4 &lt;= 9pi/4</span>: <span class="chem">2x + pi/4 = 5pi/6, 13pi/6</span>, so <span class="chem">x = 7pi/24, 23pi/24</span>.</p>',
    markscheme: [
      'A1: a = (7 − (−1))/2 = 4.',
      'A1: d = (7 + (−1))/2 = 3.',
      'M1: Half-period = 5π/8 − π/8 = π/2, so the period is π.',
      'A1: b = 2π/π = 2.',
      'A1: Maximum where 2(x − c) = π/2 at x = π/8, so c = π/8 − π/4 = −π/8.',
      'M1: 4 sin(2x + π/4) + 3 = 5 gives sin(2x + π/4) = 1/2.',
      'M1: Transform the interval: π/4 ≤ 2x + π/4 ≤ 9π/4.',
      'A1: 2x + π/4 = 5π/6 or 13π/6 (π/6 is outside the interval).',
      'A1: x = 7π/24, 23π/24.'
    ],
    hints: [
      'Amplitude = half the distance from max to min; the principal axis is halfway between them. From a maximum to the next minimum is half a period.',
      'A positive sine reaches its maximum when the bracket equals <span class="chem">pi/2</span>: solve <span class="chem">b(pi/8 - c) = pi/2</span>.',
      'For (d), let <span class="chem">u = 2x + pi/4</span> and change the interval before you solve <span class="chem">sin u = 1/2</span>.'
    ]
  },
  {
    id: 't3-2-q048',
    topic: 't3-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.8',
    stem: '<p>Find the number of solutions of the equation <span class="chem">2 sin^2 x = sin x</span> in the interval <span class="chem">-pi &lt;= x &lt;= pi</span>.</p>',
    answer: 5,
    hints: [
      'Do not divide by <span class="chem">sin x</span>: you would lose the solutions with <span class="chem">sin x = 0</span>. Rearrange and factorise instead.',
      '<span class="chem">sin x (2 sin x - 1) = 0</span>. Count the solutions of <span class="chem">sin x = 0</span> on <span class="chem">[-pi, pi]</span> (include both end points) and of <span class="chem">sin x = 1/2</span>.'
    ],
    solution: '<p><span class="chem">sin x (2 sin x - 1) = 0</span>.</p><p><span class="chem">sin x = 0</span>: <span class="chem">x = -pi, 0, pi</span> (3 solutions). <span class="chem">sin x = 1/2</span>: <span class="chem">x = pi/6, 5pi/6</span> (2 solutions; none in <span class="chem">[-pi, 0)</span>, where sin is not positive).</p><p>Total: <b>5</b>.</p>'
  },
  {
    id: 't3-2-q049',
    topic: 't3-2', level: 'ahl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 3.10, SL 3.6',
    stem: '<p>The angle <span class="chem">A</span> is acute with <span class="chem">sin A = 3/5</span>, and the angle <span class="chem">B</span> is obtuse with <span class="chem">cos B = -12/13</span>. Find the exact value of <span class="chem">sin(A - B)</span>.</p>',
    answer: -0.8615384615, exact: true, answerInput: '-56/65',
    hints: [
      'Find the missing ratios with <span class="chem">sin^2 + cos^2 = 1</span>: A is acute, so <span class="chem">cos A &gt; 0</span>; B is obtuse, so <span class="chem">sin B &gt; 0</span>.',
      '<span class="chem">cos A = 4/5</span>, <span class="chem">sin B = 5/13</span>. Then <span class="chem">sin(A - B) = sin A cos B - cos A sin B</span>.'
    ],
    solution: '<p><span class="chem">cos A = 4/5</span>, <span class="chem">sin B = 5/13</span>.</p><p><span class="chem">sin(A - B) = (3/5)(-12/13) - (4/5)(5/13) = -36/65 - 20/65 =</span> <b><span class="chem">-56/65</span></b>.</p>'
  },
  {
    id: 't3-2-q050',
    topic: 't3-2', level: 'ahl', tier: 'challenge', type: 'short', marks: 10,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 3.10',
    stem: '<p>(a) Show that <span class="chem">tan 3theta = (3t - t^3)/(1 - 3t^2)</span>, where <span class="chem">t = tan theta</span>. [3]</p><p>(b) Show that if <span class="chem">tan 3theta = 1</span>, then <span class="chem">t = tan theta</span> satisfies <span class="chem">t^3 - 3t^2 - 3t + 1 = 0</span>. [1]</p><p>(c) By considering the solutions of <span class="chem">tan 3theta = 1</span> for <span class="chem">0 &lt; theta &lt; pi</span>, or otherwise, find the exact value of <span class="chem">tan(pi/12)</span>. Give your answer in the form <span class="chem">p + q sqrt(3)</span>, where <span class="chem">p, q in Z</span>. [6]</p>',
    answer: '<p>(a) <span class="chem">tan(2theta + theta) = (2t/(1 - t^2) + t)/(1 - 2t^2/(1 - t^2)) = (3t - t^3)/(1 - 3t^2)</span>. (b) <span class="chem">3t - t^3 = 1 - 3t^2</span> rearranges to <span class="chem">t^3 - 3t^2 - 3t + 1 = 0</span>. (c) <span class="chem">3theta = pi/4, 5pi/4, 9pi/4</span>, so <span class="chem">theta = pi/12, 5pi/12, 3pi/4</span>: the cubic has roots <span class="chem">tan(pi/12), tan(5pi/12), -1</span>. Factorising, <span class="chem">(t + 1)(t^2 - 4t + 1) = 0</span>, so the other roots are <span class="chem">2 ± sqrt(3)</span>. <span class="chem">tan(pi/12)</span> is the smaller positive root: <span class="chem">tan(pi/12) = 2 - sqrt(3)</span>.</p>',
    markscheme: [
      'M1: Write tan 3θ = tan(2θ + θ) = (tan 2θ + tan θ)/(1 − tan 2θ tan θ).',
      'M1: Substitute tan 2θ = 2t/(1 − t²).',
      'A1: Multiply top and bottom by (1 − t²): (2t + t − t³)/(1 − t² − 2t²) = (3t − t³)/(1 − 3t²) (AG).',
      'A1: 3t − t³ = 1 − 3t², so t³ − 3t² − 3t + 1 = 0 (AG).',
      'M1: 3θ = π/4 + kπ with 0 < 3θ < 3π.',
      'A1: θ = π/12, 5π/12, 3π/4, so the three roots are tan(π/12), tan(5π/12) and tan(3π/4) = −1.',
      'M1: t = −1 is a root, so (t + 1) is a factor: t³ − 3t² − 3t + 1 = (t + 1)(t² − 4t + 1).',
      'A1: t² − 4t + 1 = 0 gives t = 2 ± √3.',
      'R1: 0 < π/12 < 5π/12 < π/2 and tan is increasing there, so tan(π/12) is the smaller root.',
      'A1: tan(π/12) = 2 − √3.'
    ],
    hints: [
      'Decode: part (c) hides an exact value inside a cubic. The three angles with <span class="chem">tan 3theta = 1</span> give the three roots of the cubic, and one root is an angle you know.',
      'For (a), write <span class="chem">3theta = 2theta + theta</span> and use <span class="chem">tan(A + B)</span> with <span class="chem">tan 2theta = 2t/(1 - t^2)</span>.',
      'For (c), <span class="chem">3theta = pi/4 + k pi</span>. One of the three angles is <span class="chem">3pi/4</span>, whose tangent is <span class="chem">-1</span>: use it to factorise the cubic.',
      'Of the roots <span class="chem">2 - sqrt(3)</span> and <span class="chem">2 + sqrt(3)</span>, which belongs to the smaller angle <span class="chem">pi/12</span>?'
    ],
    solution: '<p><strong>Decoding:</strong> the cubic in (b) is the equation <span class="chem">tan 3theta = 1</span> written in terms of <span class="chem">t</span>. Its roots are the tangents of the three angles that solve <span class="chem">tan 3theta = 1</span>, so one root (<span class="chem">tan(3pi/4) = -1</span>) is known and lets you factorise.</p><p><span class="chem">(t + 1)(t^2 - 4t + 1) = 0</span> gives <span class="chem">t = -1, 2 ± sqrt(3)</span>. Since <span class="chem">tan</span> increases on <span class="chem">(0, pi/2)</span>, <span class="chem">tan(pi/12) = 2 - sqrt(3)</span> and <span class="chem">tan(5pi/12) = 2 + sqrt(3)</span>.</p>'
  },
  {
    id: 't3-2-q051',
    topic: 't3-2', level: 'ahl', tier: 'exam', type: 'short', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 3.9, SL 3.8',
    stem: '<p>(a) Show that <span class="chem">sec theta - cos theta = sin theta tan theta</span>, for <span class="chem">cos theta != 0</span>. [2]</p><p>(b) Hence solve <span class="chem">sec theta - cos theta = sqrt(3) sin theta</span> for <span class="chem">0 &lt;= theta &lt;= 2pi</span>. [3]</p>',
    answer: '<p>(a) <span class="chem">sec theta - cos theta = (1 - cos^2 theta)/cos theta = sin^2 theta / cos theta = sin theta tan theta</span>. (b) <span class="chem">sin theta (tan theta - sqrt(3)) = 0</span>: <span class="chem">theta = 0, pi, 2pi</span> or <span class="chem">theta = pi/3, 4pi/3</span>.</p>',
    markscheme: [
      'M1: Write sec θ − cos θ = 1/cos θ − cos θ = (1 − cos²θ)/cos θ.',
      'A1: = sin²θ/cos θ = sin θ · (sin θ/cos θ) = sin θ tan θ (AG).',
      'M1: sin θ tan θ − √3 sin θ = 0, so sin θ (tan θ − √3) = 0 (do not divide by sin θ).',
      'A1: sin θ = 0: θ = 0, π, 2π.',
      'A1: tan θ = √3: θ = π/3, 4π/3.'
    ],
    hints: [
      'Write <span class="chem">sec theta = 1/cos theta</span> and use a common denominator.',
      'In (b), move everything to one side and factor out <span class="chem">sin theta</span>. None of the solutions makes <span class="chem">cos theta = 0</span>, so all are valid.'
    ]
  },
  {
    id: 't3-2-q052',
    topic: 't3-2', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 3.9, 3.11',
    stem: '<p>Find the largest value of <span class="chem">k</span>, where <span class="chem">0 &lt; k &lt; 2</span>, such that <span class="chem">tan(k pi) = cot(pi/9)</span>.</p>',
    answer: 1.3888888889, exact: true, answerInput: '25/18',
    hints: [
      'Decode: rewrite <span class="chem">cot(pi/9)</span> as a tangent of some angle using a symmetry of the graphs, then use the period of tan to find EVERY <span class="chem">k</span> in the interval; the question wants the largest.',
      '<span class="chem">cot theta = tan(pi/2 - theta)</span>, so <span class="chem">cot(pi/9) = tan(7pi/18)</span>.',
      'tan has period <span class="chem">pi</span>: <span class="chem">k pi = 7pi/18 + n pi</span>. Which values of <span class="chem">n</span> keep <span class="chem">0 &lt; k &lt; 2</span>?'
    ],
    solution: '<p><strong>Decoding:</strong> the symmetry <span class="chem">cot theta = tan(pi/2 - theta)</span> turns the right-hand side into a tangent, and the hidden condition "largest" means you must use the period <span class="chem">pi</span> of tan.</p><p><span class="chem">cot(pi/9) = tan(pi/2 - pi/9) = tan(7pi/18)</span>, so <span class="chem">k pi = 7pi/18 + n pi</span>, <span class="chem">k = 7/18 + n</span>. In <span class="chem">0 &lt; k &lt; 2</span>: <span class="chem">k = 7/18</span> or <span class="chem">25/18</span>.</p><p>Largest: <b><span class="chem">k = 25/18</span></b>.</p>'
  },
  {
    id: 't3-2-q053',
    topic: 't3-2', level: 'sl', tier: 'challenge', type: 'short', marks: 8,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.5, 3.6',
    stem: '<p>The angle <span class="chem">theta</span> satisfies <span class="chem">0 &lt; theta &lt; pi</span> and <span class="chem">sin theta + cos theta = 1/5</span>.</p><p>(a) Find the exact value of <span class="chem">sin 2theta</span>. [2]</p><p>(b) Explain why <span class="chem">pi/2 &lt; theta &lt; pi</span>, and hence find the exact value of <span class="chem">cos theta - sin theta</span>. [3]</p><p>(c) Hence find the exact value of <span class="chem">cos 2theta</span>. [3]</p>',
    answer: '<p>(a) Squaring: <span class="chem">1 + sin 2theta = 1/25</span>, so <span class="chem">sin 2theta = -24/25</span>. (b) <span class="chem">2 sin theta cos theta &lt; 0</span>, and <span class="chem">sin theta &gt; 0</span> on <span class="chem">(0, pi)</span>, so <span class="chem">cos theta &lt; 0</span>: <span class="chem">theta</span> is obtuse. <span class="chem">(cos theta - sin theta)^2 = 1 - sin 2theta = 49/25</span> and <span class="chem">cos theta - sin theta &lt; 0</span>, so it equals <span class="chem">-7/5</span>. (c) <span class="chem">cos 2theta = (cos theta - sin theta)(cos theta + sin theta) = (-7/5)(1/5) = -7/25</span>.</p>',
    markscheme: [
      'M1: Square both sides: sin²θ + 2 sin θ cos θ + cos²θ = 1/25.',
      'A1: 1 + sin 2θ = 1/25, so sin 2θ = −24/25.',
      'R1: sin 2θ = 2 sin θ cos θ < 0 and sin θ > 0 for 0 < θ < π, so cos θ < 0 and π/2 < θ < π.',
      'M1: (cos θ − sin θ)² = 1 − 2 sin θ cos θ = 1 − sin 2θ = 49/25.',
      'A1: cos θ < 0 < sin θ, so cos θ − sin θ = −7/5.',
      'M1: cos 2θ = cos²θ − sin²θ = (cos θ − sin θ)(cos θ + sin θ).',
      'A1: = (−7/5)(1/5).',
      'A1: = −7/25.'
    ],
    hints: [
      'Decode: you are never asked for <span class="chem">theta</span> itself. Squaring a sum of sin and cos produces <span class="chem">sin^2 + cos^2 = 1</span> and the double-angle term <span class="chem">2 sin theta cos theta = sin 2theta</span>.',
      'Square <span class="chem">sin theta + cos theta = 1/5</span>.',
      'For (b), the sign of <span class="chem">sin 2theta</span> tells you the signs of sin and cos. Square <span class="chem">cos theta - sin theta</span> in the same way, then pick the correct sign of the square root.',
      'For (c), factorise <span class="chem">cos^2 theta - sin^2 theta</span> as a difference of two squares.'
    ],
    solution: '<p><strong>Decoding:</strong> "find sin 2θ from sin θ + cos θ" is a squaring trick, and the sign of a square root is decided by the quadrant, which you must justify from the data.</p><p>(a) <span class="chem">sin 2theta = 1/25 - 1 = -24/25</span>. (b) <span class="chem">theta</span> obtuse; <span class="chem">cos theta - sin theta = -7/5</span>. (c) <span class="chem">cos 2theta = -7/25</span>. (Check: <span class="chem">sin theta = 4/5</span>, <span class="chem">cos theta = -3/5</span>.)</p>'
  },
  {
    id: 't3-2-q054',
    topic: 't3-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 3,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.7',
    stem: '<p>Let <span class="chem">f(x) = 5 sin(2x - pi/3) + 1</span>, for <span class="chem">x &gt; 0</span>. Find the exact value of the smallest <span class="chem">x</span> at which <span class="chem">f</span> has its maximum value.</p>',
    answer: 1.3089969390, exact: true, answerInput: '5pi/12',
    hints: [
      'A sine function with positive amplitude is largest when its bracket equals <span class="chem">pi/2 + 2k pi</span>.',
      'Solve <span class="chem">2x - pi/3 = pi/2</span>, and check that no smaller positive <span class="chem">x</span> works (the bracket value <span class="chem">pi/2 - 2pi</span> gives a negative <span class="chem">x</span>).'
    ],
    solution: '<p>Maximum (value 6) when <span class="chem">2x - pi/3 = pi/2 + 2k pi</span>. With <span class="chem">k = 0</span>: <span class="chem">2x = 5pi/6</span>, <span class="chem">x = 5pi/12</span>. With <span class="chem">k = -1</span>, <span class="chem">x = -7pi/12 &lt; 0</span>.</p><p>Answer: <b><span class="chem">x = 5pi/12</span></b>.</p>'
  },
  {
    id: 't3-2-q055',
    topic: 't3-2', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'AHL 3.11, SL 3.8',
    stem: '<p>Find the number of solutions of the equation <span class="chem">sin 3x = cos x</span> in the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>.</p>',
    answer: 6,
    hints: [
      'Decode: this is not a quadratic in disguise. Turn the right-hand side into a sine with the symmetry <span class="chem">cos x = sin(pi/2 - x)</span>, so the equation becomes <span class="chem">sin A = sin B</span>.',
      '<span class="chem">sin A = sin B</span> when <span class="chem">A = B + 2k pi</span> or <span class="chem">A = pi - B + 2k pi</span> (because <span class="chem">sin(pi - theta) = sin theta</span>).',
      'The two families are <span class="chem">x = pi/8 + k pi/2</span> and <span class="chem">x = pi/4 + k pi</span>. List those in <span class="chem">[0, 2pi]</span> and check for repeats.'
    ],
    solution: '<p><strong>Decoding:</strong> use the symmetry identities to write both sides as the same function, then solve <span class="chem">sin A = sin B</span>.</p><p><span class="chem">sin 3x = sin(pi/2 - x)</span>.</p><p>Case 1: <span class="chem">3x = pi/2 - x + 2k pi</span>, so <span class="chem">x = pi/8 + k pi/2</span>: <span class="chem">pi/8, 5pi/8, 9pi/8, 13pi/8</span>.</p><p>Case 2: <span class="chem">3x = pi - (pi/2 - x) + 2k pi</span>, so <span class="chem">x = pi/4 + k pi</span>: <span class="chem">pi/4, 5pi/4</span>.</p><p>No value appears twice: <b>6</b> solutions.</p>'
  },
  {
    id: 't3-2-q056',
    topic: 't3-2', level: 'sl', tier: 'exam', type: 'short', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.6, 3.8',
    stem: '<p>(a) Show that <span class="chem">cos^4 x - sin^4 x = cos 2x</span>. [2]</p><p>(b) Hence solve <span class="chem">cos^4 x - sin^4 x = 1/2</span> for <span class="chem">0 &lt;= x &lt;= pi</span>. [3]</p>',
    answer: '<p>(a) <span class="chem">cos^4 x - sin^4 x = (cos^2 x - sin^2 x)(cos^2 x + sin^2 x) = cos 2x × 1 = cos 2x</span>. (b) <span class="chem">cos 2x = 1/2</span> with <span class="chem">0 &lt;= 2x &lt;= 2pi</span>: <span class="chem">2x = pi/3, 5pi/3</span>, so <span class="chem">x = pi/6, 5pi/6</span>.</p>',
    markscheme: [
      'M1: Factorise as a difference of squares: (cos²x − sin²x)(cos²x + sin²x).',
      'A1: Use cos²x + sin²x = 1 and cos²x − sin²x = cos 2x to get cos 2x (AG).',
      'M1: cos 2x = 1/2 with the interval changed to 0 ≤ 2x ≤ 2π.',
      'A1: 2x = π/3, 5π/3.',
      'A1: x = π/6, 5π/6.'
    ],
    hints: [
      '<span class="chem">cos^4 x - sin^4 x</span> is a difference of two squares: <span class="chem">(cos^2 x)^2 - (sin^2 x)^2</span>.',
      'In (b), double the interval before you solve <span class="chem">cos 2x = 1/2</span>.'
    ]
  },

  /* ======================= PAPER 3 (HL INVESTIGATIONS) =================== */
  {
    id: 't3-2-q057',
    topic: 't3-2', level: 'ahl', tier: 'challenge', type: 'short', marks: 18,
    paper: 'Paper 3 (HL Investigation)', syllabus: 'AHL 3.9, 3.10',
    stem: '<p>This investigation looks at the sums <span class="chem">S_n = arctan(1/3) + arctan(1/7) + arctan(1/13) + … + arctan(1/(n^2 + n + 1))</span>, where <span class="chem">n in Z^+</span>. So <span class="chem">S_1 = arctan(1/3)</span>, <span class="chem">S_2 = arctan(1/3) + arctan(1/7)</span>, and so on.</p><p>(a) Use your GDC to find <span class="chem">S_1, S_2, S_3, S_4</span> in radians, and in each case find <span class="chem">tan(S_n)</span>, written as a fraction. [4]</p><p>(b) Conjecture an expression for <span class="chem">tan(S_n)</span> in terms of <span class="chem">n</span>. [1]</p><p>(c) Use the identity for <span class="chem">tan(A - B)</span> to show that, for <span class="chem">k in Z^+</span>, <span class="chem">arctan(1/k) - arctan(1/(k + 1)) = arctan(1/(k^2 + k + 1))</span>. [4]</p><p>(d) Hence show that <span class="chem">S_n = pi/4 - arctan(1/(n + 1))</span>. [3]</p><p>(e) Hence prove your conjecture from part (b). [3]</p><p>(f) Write down the limit of <span class="chem">S_n</span> as <span class="chem">n -&gt; infty</span>. [1]</p><p>(g) Find the smallest value of <span class="chem">n</span> for which <span class="chem">S_n &gt; 0.78</span>. [2]</p>',
    answer: '<p>(a) <span class="chem">S_1 = 0.322</span>, <span class="chem">tan S_1 = 1/3</span>; <span class="chem">S_2 = 0.464</span>, <span class="chem">tan S_2 = 1/2</span>; <span class="chem">S_3 = 0.540</span>, <span class="chem">tan S_3 = 3/5</span>; <span class="chem">S_4 = 0.588</span>, <span class="chem">tan S_4 = 2/3 = 4/6</span>. (b) <span class="chem">tan(S_n) = n/(n + 2)</span>. (c) With <span class="chem">A = arctan(1/k)</span>, <span class="chem">B = arctan(1/(k + 1))</span>: <span class="chem">tan(A - B) = (1/k - 1/(k + 1))/(1 + 1/(k(k + 1))) = 1/(k^2 + k + 1)</span>, and <span class="chem">0 &lt; A - B &lt; pi/2</span>. (d) The sum telescopes: <span class="chem">S_n = arctan 1 - arctan(1/(n + 1)) = pi/4 - arctan(1/(n + 1))</span>. (e) <span class="chem">tan(S_n) = (1 - 1/(n + 1))/(1 + 1/(n + 1)) = n/(n + 2)</span>. (f) <span class="chem">pi/4</span>. (g) <span class="chem">n/(n + 2) &gt; tan 0.78</span> gives <span class="chem">n &gt; 184.2</span>, so <span class="chem">n = 185</span>.</p>',
    markscheme: [
      'A1: S₁ = 0.322, tan S₁ = 1/3.',
      'A1: S₂ = 0.464, tan S₂ = 1/2.',
      'A1: S₃ = 0.540, tan S₃ = 3/5.',
      'A1: S₄ = 0.588, tan S₄ = 2/3 (= 4/6).',
      'A1: Conjecture tan(S_n) = n/(n + 2).',
      'M1: Let A = arctan(1/k), B = arctan(1/(k + 1)) and write tan(A − B) = (1/k − 1/(k + 1))/(1 + 1/(k(k + 1))).',
      'A1: Numerator = 1/(k(k + 1)), denominator = (k(k + 1) + 1)/(k(k + 1)).',
      'A1: tan(A − B) = 1/(k² + k + 1).',
      'R1: 0 < B < A ≤ π/4, so 0 < A − B < π/2, the range of arctan; hence A − B = arctan(1/(k² + k + 1)) (AG).',
      'M1: Write S_n as a sum of the differences arctan(1/k) − arctan(1/(k + 1)) for k = 1, …, n.',
      'A1: All middle terms cancel (telescoping), leaving arctan(1) − arctan(1/(n + 1)).',
      'A1: arctan 1 = π/4, so S_n = π/4 − arctan(1/(n + 1)) (AG).',
      'M1: tan(π/4 − B) = (1 − tan B)/(1 + tan B) with tan B = 1/(n + 1).',
      'A1: = (n/(n + 1)) / ((n + 2)/(n + 1)).',
      'A1: = n/(n + 2), which proves the conjecture.',
      'A1: S_n → π/4 (since arctan(1/(n + 1)) → 0).',
      'M1: S_n > 0.78 ⇔ n/(n + 2) > tan 0.78 (tan is increasing on (0, π/2)), giving n > 184.2.',
      'A1: n = 185.'
    ],
    hints: [
      'Decode: this is "compute small cases, spot a pattern, prove it". The tool for the proof is <span class="chem">tan(A - B)</span> from the booklet, which turns a difference of two arctans into one arctan. Then the sum collapses (telescopes).',
      'In (a), use the fraction feature of your GDC on <span class="chem">tan(S_n)</span>. Look at the pattern <span class="chem">1/3, 2/4, 3/5, 4/6</span>.',
      'In (c), after you find <span class="chem">tan(A - B)</span> you still need a reason why <span class="chem">A - B</span> is in the range of arctan.',
      'In (g), <span class="chem">S_n &gt; 0.78</span> is equivalent to <span class="chem">tan S_n &gt; tan 0.78 = 0.98926…</span>; solve <span class="chem">n/(n + 2) &gt; 0.98926…</span> for <span class="chem">n</span>.'
    ],
    solution: '<p><strong>Decoding:</strong> the investigation is about a telescoping sum. Each term <span class="chem">arctan(1/(k^2 + k + 1))</span> is secretly a difference <span class="chem">arctan(1/k) - arctan(1/(k + 1))</span> (part (c)), so almost everything cancels.</p><p>(g) <span class="chem">n/(n + 2) &gt; 0.989261…</span> ⇔ <span class="chem">n(1 - 0.989261…) &gt; 2(0.989261…)</span> ⇔ <span class="chem">n &gt; 184.25</span>. Check: <span class="chem">S_184 = 0.779993…</span>, <span class="chem">S_185 = 0.780022…</span>. So <b>n = 185</b>.</p>'
  },
  {
    id: 't3-2-q058',
    topic: 't3-2', level: 'ahl', tier: 'challenge', type: 'short', marks: 18,
    paper: 'Paper 3 (HL Investigation)', syllabus: 'AHL 3.10, SL 3.6',
    stem: '<p>This investigation looks at how <span class="chem">cos n theta</span> can be written as a polynomial in <span class="chem">c = cos theta</span>.</p><p>(a) Write down <span class="chem">cos 2theta</span> in terms of <span class="chem">c</span>. [1]</p><p>(b) By writing <span class="chem">3theta = 2theta + theta</span>, show that <span class="chem">cos 3theta = 4c^3 - 3c</span>. [3]</p><p>(c) Show that <span class="chem">cos((n + 1)theta) + cos((n - 1)theta) = 2 cos theta cos(n theta)</span>. [3]</p><p>(d) Hence find <span class="chem">cos 4theta</span> and <span class="chem">cos 5theta</span> as polynomials in <span class="chem">c</span>. [4]</p><p>(e) Conjecture the coefficient of <span class="chem">c^n</span> in the polynomial for <span class="chem">cos n theta</span>, for <span class="chem">n &gt;= 1</span>, and give a reason for your conjecture. [2]</p><p>(f) By letting <span class="chem">x = cos theta</span>, where <span class="chem">0 &lt;= theta &lt;= pi</span>, solve <span class="chem">8x^4 - 8x^2 + 1 = 0</span>. Hence find the exact value of <span class="chem">cos(pi/8)</span>. [5]</p>',
    answer: '<p>(a) <span class="chem">2c^2 - 1</span>. (b) <span class="chem">cos 3theta = cos 2theta cos theta - sin 2theta sin theta = (2c^2 - 1)c - 2(1 - c^2)c = 4c^3 - 3c</span>. (c) Expanding, the <span class="chem">sin(n theta) sin theta</span> terms cancel, leaving <span class="chem">2 cos(n theta) cos theta</span>. (d) <span class="chem">cos 4theta = 2c(4c^3 - 3c) - (2c^2 - 1) = 8c^4 - 8c^2 + 1</span>; <span class="chem">cos 5theta = 2c(8c^4 - 8c^2 + 1) - (4c^3 - 3c) = 16c^5 - 20c^3 + 5c</span>. (e) <span class="chem">2^{n-1}</span>: each step of the recurrence multiplies the leading term by <span class="chem">2c</span>. (f) <span class="chem">cos 4theta = 0</span> gives <span class="chem">theta = pi/8, 3pi/8, 5pi/8, 7pi/8</span>, so <span class="chem">x = cos(pi/8), cos(3pi/8), cos(5pi/8), cos(7pi/8)</span>. As a quadratic in <span class="chem">x^2</span>: <span class="chem">x^2 = (2 ± sqrt(2))/4</span>. The largest root is <span class="chem">cos(pi/8) = sqrt(2 + sqrt(2))/2</span>.</p>',
    markscheme: [
      'A1: cos 2θ = 2c² − 1.',
      'M1: cos 3θ = cos 2θ cos θ − sin 2θ sin θ.',
      'M1: Substitute sin 2θ sin θ = 2 sin²θ cos θ = 2(1 − c²)c.',
      'A1: (2c² − 1)c − 2c + 2c³ = 4c³ − 3c (AG).',
      'M1: Expand cos(nθ + θ) = cos nθ cos θ − sin nθ sin θ.',
      'A1: cos(nθ − θ) = cos nθ cos θ + sin nθ sin θ.',
      'A1: Add: the sin nθ sin θ terms cancel, leaving 2 cos θ cos nθ (AG).',
      'M1: Use n = 3: cos 4θ = 2c cos 3θ − cos 2θ = 2c(4c³ − 3c) − (2c² − 1).',
      'A1: cos 4θ = 8c⁴ − 8c² + 1.',
      'M1: Use n = 4: cos 5θ = 2c cos 4θ − cos 3θ.',
      'A1: cos 5θ = 16c⁵ − 20c³ + 5c.',
      'A1: Conjecture: the coefficient of cⁿ is 2ⁿ⁻¹.',
      'R1: cos((n + 1)θ) = 2c cos nθ − cos((n − 1)θ), and the second term has lower degree, so each step doubles the leading coefficient (starting from 1 for cos θ = c).',
      'M1: With x = cos θ the equation is cos 4θ = 0, where 0 ≤ 4θ ≤ 4π.',
      'A1: 4θ = π/2, 3π/2, 5π/2, 7π/2, so θ = π/8, 3π/8, 5π/8, 7π/8.',
      'A1: The four roots are x = cos(π/8), cos(3π/8), cos(5π/8), cos(7π/8) (all different, as cos is decreasing on [0, π]).',
      'M1: Solve as a quadratic in x²: x² = (8 ± √32)/16 = (2 ± √2)/4.',
      'A1: cos(π/8) is the largest root, so cos(π/8) = √(2 + √2)/2.'
    ],
    hints: [
      'Decode: build a pattern from small cases (n = 2, 3), find a rule that produces the next case from the previous two (part (c)), then use the polynomial for <span class="chem">n = 4</span> backwards to get exact values.',
      'In (b), use <span class="chem">cos(A + B)</span>, <span class="chem">sin 2theta = 2 sin theta cos theta</span> and <span class="chem">sin^2 theta = 1 - c^2</span>.',
      'In (d), rearrange (c) as <span class="chem">cos((n + 1)theta) = 2c cos(n theta) - cos((n - 1)theta)</span>.',
      'In (f), <span class="chem">8x^4 - 8x^2 + 1</span> is exactly <span class="chem">cos 4theta</span>. Which angles in <span class="chem">[0, pi]</span> make <span class="chem">cos 4theta = 0</span>?'
    ],
    solution: '<p><strong>Decoding:</strong> the polynomial in (f) is the <span class="chem">cos 4theta</span> polynomial from (d), so solving it is the same as solving <span class="chem">cos 4theta = 0</span>; comparing with the algebraic roots gives an exact value.</p><p>(f) <span class="chem">x^2 = (2 ± sqrt(2))/4</span> gives <span class="chem">x = ± sqrt(2 ± sqrt(2))/2</span>. The largest, <span class="chem">sqrt(2 + sqrt(2))/2 = 0.92388…</span>, matches <span class="chem">cos(pi/8) = 0.92388…</span>.</p>'
  },
  {
    id: 't3-2-q059',
    topic: 't3-2', level: 'ahl', tier: 'challenge', type: 'short', marks: 16,
    paper: 'Paper 3 (HL Investigation)', syllabus: 'AHL 3.10, 3.11',
    stem: '<p>This investigation finds a closed form for <span class="chem">C_n(x) = cos x + cos 2x + … + cos nx</span>, where <span class="chem">n in Z^+</span> and <span class="chem">x</span> is in radians.</p><p>(a) Let <span class="chem">x = 0.5</span>. Use your GDC to find <span class="chem">C_1(0.5)</span>, <span class="chem">C_2(0.5)</span>, <span class="chem">C_3(0.5)</span>, and compare each with the value of <span class="chem">(sin((n + 1/2)x) - sin(x/2))/(2 sin(x/2))</span> for the same <span class="chem">n</span>. [3]</p><p>(b) Use the identities for <span class="chem">sin(A + B)</span> and <span class="chem">sin(A - B)</span> to show that <span class="chem">2 sin(x/2) cos(kx) = sin((k + 1/2)x) - sin((k - 1/2)x)</span>. [3]</p><p>(c) Hence prove that, when <span class="chem">sin(x/2) != 0</span>, <span class="chem">C_n(x) = (sin((n + 1/2)x) - sin(x/2))/(2 sin(x/2))</span>. [3]</p><p>(d) Hence, using the symmetry <span class="chem">sin(pi - theta) = sin theta</span>, solve <span class="chem">cos x + cos 2x + cos 3x = 0</span> for <span class="chem">0 &lt; x &lt; pi</span>. [5]</p><p>(e) Use a symmetry of the cosine graph to deduce the number of solutions of <span class="chem">cos x + cos 2x + cos 3x = 0</span> for <span class="chem">0 &lt; x &lt; 2pi</span>. [2]</p>',
    answer: '<p>(a) <span class="chem">C_1 = 0.8776</span>, <span class="chem">C_2 = 1.418</span>, <span class="chem">C_3 = 1.489</span>; the expression gives the same values. (b) <span class="chem">sin(kx + x/2) - sin(kx - x/2) = 2 cos(kx) sin(x/2)</span>. (c) Summing (b) from <span class="chem">k = 1</span> to <span class="chem">n</span> telescopes to <span class="chem">sin((n + 1/2)x) - sin(x/2)</span>; divide by <span class="chem">2 sin(x/2)</span>. (d) <span class="chem">sin(7x/2) = sin(x/2)</span>: <span class="chem">7x/2 = x/2 + 2k pi</span> gives <span class="chem">x = 2pi/3</span>; <span class="chem">7x/2 = pi - x/2 + 2k pi</span> gives <span class="chem">x = pi/4, 3pi/4</span>. (e) <span class="chem">C_3(2pi - x) = C_3(x)</span>, so the solutions in <span class="chem">(pi, 2pi)</span> are <span class="chem">5pi/4, 4pi/3, 7pi/4</span>, and <span class="chem">C_3(pi) = -1 != 0</span>: <b>6</b> solutions.</p>',
    markscheme: [
      'A1: C₁(0.5) = 0.8776; the expression also gives 0.8776.',
      'A1: C₂(0.5) = 1.418; the expression also gives 1.418.',
      'A1: C₃(0.5) = 1.489; the expression also gives 1.489.',
      'M1: Expand sin(kx + x/2) = sin kx cos(x/2) + cos kx sin(x/2).',
      'M1: Expand sin(kx − x/2) = sin kx cos(x/2) − cos kx sin(x/2).',
      'A1: Subtract: the sin kx cos(x/2) terms cancel, giving 2 sin(x/2) cos kx (AG).',
      'M1: Add the identity for k = 1, 2, …, n: 2 sin(x/2) C_n(x) = Σ [sin((k + ½)x) − sin((k − ½)x)].',
      'A1: The sum telescopes: the +sin((k + ½)x) term of each k cancels the −sin(((k + 1) − ½)x) term of k + 1.',
      'A1: 2 sin(x/2) C_n(x) = sin((n + ½)x) − sin(x/2); dividing by 2 sin(x/2) ≠ 0 gives the result (AG).',
      'M1: For 0 < x < π, sin(x/2) ≠ 0, so C₃(x) = 0 ⇔ sin(7x/2) = sin(x/2).',
      'M1: sin A = sin B ⇔ A = B + 2kπ or A = π − B + 2kπ.',
      'A1: 3x = 2kπ gives x = 2π/3.',
      'A1: 4x = π + 2kπ gives x = π/4.',
      'A1: and x = 3π/4 (no other values in 0 < x < π).',
      'R1: cos(k(2π − x)) = cos(kx) for every integer k, so C₃(2π − x) = C₃(x); the solutions in (π, 2π) are 2π minus those in (0, π), and x = π is not a solution since C₃(π) = −1.',
      'A1: 6 solutions.'
    ],
    hints: [
      'Decode: the sum of cosines does not simplify term by term. Multiplying each term by <span class="chem">2 sin(x/2)</span> turns it into a DIFFERENCE of two sines (part (b)), and then the sum collapses (telescopes), like a telescoping series.',
      'For (a), use the sum feature of your GDC, or add the terms directly. Make sure the GDC is in radian mode.',
      'For (b), write <span class="chem">(k + 1/2)x = kx + x/2</span> and <span class="chem">(k - 1/2)x = kx - x/2</span>.',
      'For (d), with <span class="chem">n = 3</span>, <span class="chem">C_3(x) = 0</span> exactly when <span class="chem">sin(7x/2) = sin(x/2)</span>. Then use <span class="chem">sin(pi - theta) = sin theta</span> to get two families of solutions.'
    ],
    solution: '<p><strong>Decoding:</strong> the investigation turns a sum of cosines into a telescoping sum of sines, and then turns the equation <span class="chem">C_3(x) = 0</span> into <span class="chem">sin A = sin B</span>, which is solved with the symmetry <span class="chem">sin(pi - theta) = sin theta</span>.</p><p>(d) Check: <span class="chem">C_3(pi/4) = sqrt(2)/2 + 0 - sqrt(2)/2 = 0</span>; <span class="chem">C_3(2pi/3) = -1/2 - 1/2 + 1 = 0</span>; <span class="chem">C_3(3pi/4) = -sqrt(2)/2 + 0 + sqrt(2)/2 = 0</span>.</p><p>(e) Reflecting in <span class="chem">x = pi</span> gives <span class="chem">5pi/4, 4pi/3, 7pi/4</span>: <b>6</b> solutions in <span class="chem">(0, 2pi)</span>.</p>'
  }
]);
