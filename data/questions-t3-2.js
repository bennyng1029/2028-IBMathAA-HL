/* ==========================================================================
   Question bank: Topic 3.2 — The unit circle, trig identities and periodic models
   All questions are original. Covers SL 3.5–3.8 and AHL 3.9–3.11.
   ========================================================================== */
S1.questions.register('t3-2', [

  /* ======================= FOUNDATION ==================================== */
  {
    id: 't3-2-q001',
    topic: 't3-2', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'SL 3.5',
    stem: '<p><strong>[Paper 1 — No GDC]</strong> What is the exact value of <span class="chem">sin(5*pi/6) + cos(2*pi/3)</span>?</p>',
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
    syllabus: 'SL 3.6',
    stem: '<p><strong>[Paper 1 — No GDC]</strong> Given that <span class="chem">cos theta = -3/5</span> and <span class="chem">pi/2 &lt; theta &lt; pi</span>, find the exact value of <span class="chem">sin 2theta</span> as a decimal.</p>',
    answer: -0.96,
    tolerance: { abs: 0.005 },
    sigfigs: 2,
    hints: [
      'In Quadrant II (<span class="chem">pi/2 &lt; theta &lt; pi</span>), <span class="chem">sin theta &gt; 0</span>, so <span class="chem">sin theta = +sqrt(1 - (-3/5)^2) = 4/5</span>.',
      'Use <span class="chem">sin 2theta = 2 sin theta cos theta</span>.'
    ],
    solution: '<div class="worked__math">sin <i>θ</i> = <span class="frac"><span>4</span><span>5</span></span>  ⇒  sin 2<i>θ</i> = 2(<span class="frac"><span>4</span><span>5</span></span>)(−<span class="frac"><span>3</span><span>5</span></span>) = −<span class="frac"><span>24</span><span>25</span></span> = <b>−0.96</b></div>'
  },
  {
    id: 't3-2-q003',
    topic: 't3-2', level: 'sl', tier: 'foundation', type: 'mcq', marks: 2,
    syllabus: 'SL 3.7',
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
    syllabus: 'SL 3.8',
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
    syllabus: 'AHL 3.11',
    stem: '<p><strong>[AHL · Paper 1]</strong> What is the exact value of <span class="chem">arccos(-1/2) + arcsin(-1/2)</span>?</p>',
    options: [
      '<span class="chem">pi / 2</span>',
      '<span class="mono">0</span>',
      '<span class="chem">5*pi / 6</span>',
      '<span class="chem">-pi / 2</span>'
    ],
    answer: 0,
    misconception: {
      1: 'arccos(−1/2) is NOT −π/3! The range of arccos is [0, π], so arccos(−1/2) = 2π/3, while arcsin(−1/2) = −π/6.',
      2: 'You added +π/6 instead of −π/6 for arcsin(−1/2).',
      3: 'Recall the universal identity arcsin(x) + arccos(x) = +π/2 for all x ∈ [−1, 1].'
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
    syllabus: 'AHL 3.9',
    stem: '<p><strong>[AHL · Paper 1]</strong> Given that <span class="chem">tan theta = 3/4</span>, find the exact value of <span class="chem">sec^2 theta</span> as a decimal.</p>',
    answer: 1.5625,
    tolerance: { abs: 0.005 },
    sigfigs: 4,
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
    syllabus: 'SL 3.7',
    stem: '<p>A Ferris wheel rotates at a constant speed. A rider\'s height <span class="chem">h(t)</span> in metres above the ground at time <span class="chem">t</span> minutes is modelled by <span class="chem">h(t) = -15 cos((pi/5)t) + 17</span>. Find the first positive time <span class="chem">t</span> (in minutes) at which the rider reaches a height of <span class="mono">24.5 m</span>.</p>',
    answer: 3.3333,
    tolerance: { rel: 0.01 },
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
    topic: 't3-2', level: 'sl', tier: 'exam', type: 'mcq', marks: 4,
    syllabus: 'SL 3.8',
    stem: '<p><strong>[Paper 1 — No GDC]</strong> Find the complete set of solutions to <span class="chem">sin 2x = sin x</span> on the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>.</p>',
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
    syllabus: 'SL 3.7',
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
    syllabus: 'AHL 3.10',
    stem: '<p><strong>[AHL · Paper 1]</strong> Acute angles <span class="chem">A</span> and <span class="chem">B</span> satisfy <span class="chem">tan A = 1/4</span> and <span class="chem">tan B = 3/5</span>. Find the exact value of <span class="chem">tan(A + B)</span>.</p>',
    answer: 1,
    tolerance: { abs: 0.001 },
    sigfigs: 1,
    hints: [
      'Use the compound-angle identity <span class="chem">tan(A + B) = (tan A + tan B) / (1 - tan A tan B)</span>.',
      'Calculate <span class="chem">1/4 + 3/5 = 17/20</span> and <span class="chem">1 - (1/4)(3/5) = 17/20</span>.'
    ],
    solution: '<div class="worked__math">tan(<i>A</i> + <i>B</i>) = <span class="frac"><span>1/4 + 3/5</span><span>1 − (1/4)(3/5)</span></span> = <span class="frac"><span>17/20</span><span>17/20</span></span> = <b>1</b></div>'
  },
  {
    id: 't3-2-q011',
    topic: 't3-2', level: 'ahl', tier: 'exam', type: 'mcq', marks: 4,
    syllabus: 'AHL 3.9',
    stem: '<p><strong>[AHL · Paper 1]</strong> Solve the equation <span class="chem">2 sec^2 x - 3 tan x - 4 = 0</span> leads to which quadratic equation in <span class="chem">tan x</span>?</p>',
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
    topic: 't3-2', level: 'ahl', tier: 'exam', type: 'mcq', marks: 4,
    syllabus: 'AHL 3.11',
    stem: '<p><strong>[AHL · Paper 1]</strong> For <span class="chem">0 &lt; x &lt; 1</span>, which algebraic expression is identically equal to <span class="chem">sin(2 arccos x)</span>?</p>',
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
    syllabus: 'SL 3.8',
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
    syllabus: 'SL 3.6',
    stem: '<p><strong>[Paper 1 — No GDC]</strong> Prove the identity <span class="chem">(sin 2theta) / (1 + cos 2theta) = tan theta</span>, and hence find the exact value of <span class="chem">tan(pi/8)</span> in the form <span class="chem">sqrt(a) - b</span>.</p>',
    answer: '<p>tan(π/8) = √2 − 1.</p>',
    markscheme: [
      'M1: Substitute sin 2θ = 2 sin θ cos θ and cos 2θ = 2 cos²θ − 1 into the LHS.',
      'A1: Simplify LHS = (2 sin θ cos θ) / (1 + 2 cos²θ − 1) = (2 sin θ cos θ) / (2 cos²θ) = sin θ / cos θ = tan θ.',
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
    syllabus: 'AHL 3.10',
    stem: '<p><strong>[AHL · Paper 1]</strong> Solve the equation <span class="chem">arctan(x) + arctan(2x) = pi/4</span> for <span class="chem">x &gt; 0</span>. Give your answer to 3 significant figures (or exact radical form).</p>',
    answer: 0.280776,
    tolerance: { rel: 0.01 },
    sigfigs: 3,
    hints: [
      'Take the tangent of both sides using <span class="chem">tan(A + B) = (tan A + tan B)/(1 - tan A tan B)</span>: <span class="chem">(x + 2x)/(1 - 2x^2) = tan(pi/4) = 1</span>.',
      'Solve the quadratic <span class="chem">2x^2 + 3x - 1 = 0</span> and keep the positive root <span class="chem">x = (-3 + sqrt(17))/4</span>.'
    ],
    solution: '<div class="worked__math"><span class="frac"><span><i>x</i> + 2<i>x</i></span><span>1 − 2<i>x</i><sup>2</sup></span></span> = 1  ⇒  2<i>x</i><sup>2</sup> + 3<i>x</i> − 1 = 0  ⇒  <i>x</i> = <span class="frac"><span>−3 + √17</span><span>4</span></span> ≈ <b>0.281</b></div>'
  },
  {
    id: 't3-2-q016',
    topic: 't3-2', level: 'ahl', tier: 'challenge', type: 'mcq', marks: 5,
    syllabus: 'AHL 3.10',
    stem: '<p><strong>[AHL · Paper 1]</strong> What is the exact value of <span class="chem">cos 15° = cos(pi/12)</span>?</p>',
    options: [
      '<span class="chem">(sqrt(6) + sqrt(2)) / 4</span>',
      '<span class="chem">(sqrt(6) - sqrt(2)) / 4</span>',
      '<span class="chem">(sqrt(3) + 1) / 2</span>',
      '<span class="chem">sqrt(2 + sqrt(3)) / 4</span>'
    ],
    answer: 0,
    misconception: {
      1: '(√6 − √2)/4 is sin 15° = cos 75°, because cos(A − B) has a PLUS sign: cos A cos B + sin A sin B.',
      2: 'You forgot the denominator factor of 2 in √2/2.',
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
    topic: 't3-2', level: 'ahl', tier: 'challenge', type: 'short', marks: 6,
    syllabus: 'AHL 3.10',
    stem: '<p><strong>[AHL · Paper 1]</strong> In triangle <span class="chem">ABC</span>, none of the angles is <span class="mono">90°</span>. Using the compound-angle identity for <span class="chem">tan(A + B)</span> and the fact that <span class="chem">A + B + C = pi</span>, prove that <span class="chem">tan A + tan B + tan C = tan A tan B tan C</span>.</p>',
    answer: '<p>Since <i>A</i> + <i>B</i> = <i>π</i> − <i>C</i>, taking tan of both sides gives (tan <i>A</i> + tan <i>B</i>)/(1 − tan <i>A</i> tan <i>B</i>) = −tan <i>C</i>, which rearranges to tan <i>A</i> + tan <i>B</i> + tan <i>C</i> = tan <i>A</i> tan <i>B</i> tan <i>C</i>.</p>',
    markscheme: [
      'M1: Write A + B = π − C from the angle sum of a triangle.',
      'A1: Apply tangent to both sides: tan(A + B) = tan(π − C) = −tan C.',
      'M1: Expand the LHS using the compound-angle formula: (tan A + tan B) / (1 − tan A tan B) = −tan C.',
      'M1: Multiply both sides by (1 − tan A tan B): tan A + tan B = −tan C + tan A tan B tan C.',
      'A1: Rearrange to obtain tan A + tan B + tan C = tan A tan B tan C.'
    ],
    hints: [
      'Start with <span class="chem">A + B = pi - C</span> and take <span class="chem">tan</span> of both sides.',
      'Recall that <span class="chem">tan(pi - C) = -tan C</span>.'
    ]
  }
]);
