/* ==========================================================================
   Question bank: Topic 3.1 — 3D geometry, triangle trigonometry and radians
   All questions are original. Covers SL 3.1–3.4 (tested on both SL and HL).
   ========================================================================== */
S1.questions.register('t3-1', [

  /* ======================= FOUNDATION ==================================== */
  {
    id: 't3-1-q001',
    topic: 't3-1', level: 'sl', tier: 'foundation', type: 'numeric', marks: 2,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.1',
    stem: '<p>Find the straight-line distance between the points <span class="chem">A(1, -2, 4)</span> and <span class="chem">B(3, 4, -2)</span> in three-dimensional space.</p>',
    answer: 8.717797887,
    tolerance: { rel: 0.01 },
    sigfigs: 3,
    hints: [
      'Use the 3D distance formula: <span class="chem">d = sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2)</span>.',
      'The differences in the coordinates are <span class="chem">2</span>, <span class="chem">6</span>, and <span class="chem">-6</span>.'
    ],
    solution: '<div class="worked__math"><i>d</i> = √((3 − 1)<sup>2</sup> + (4 − (−2))<sup>2</sup> + (−2 − 4)<sup>2</sup>) = √(4 + 36 + 36) = <b>√76 ≈ 8.72</b></div>'
  },
  {
    id: 't3-1-q002',
    topic: 't3-1', level: 'sl', tier: 'foundation', type: 'mcq', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.1',
    stem: '<p>The midpoint of the line segment joining <span class="chem">P(2, -5, 8)</span> and <span class="chem">Q(x, y, z)</span> is <span class="chem">M(-1, 1, 3)</span>. What are the coordinates of <span class="chem">Q</span>?</p>',
    options: [
      '<span class="chem">(-4, 7, -2)</span>',
      '<span class="chem">(0.5, -2, 5.5)</span>',
      '<span class="chem">(-3, 6, -5)</span>',
      '<span class="chem">(4, -7, 2)</span>'
    ],
    answer: 0,
    misconception: {
      1: 'You averaged P and M instead of treating M as the midpoint between P and Q.',
      2: 'You found the displacement vector PM = M − P instead of solving (P + Q)/2 = M.',
      3: 'You reversed the signs when solving 2 + x = −2, −5 + y = 2, and 8 + z = 6.'
    },
    hints: [
      'Use <span class="chem">((2 + x)/2, (-5 + y)/2, (8 + z)/2) = (-1, 1, 3)</span>.',
      'Multiply the coordinates of <span class="chem">M</span> by 2 and subtract <span class="chem">P</span>: <span class="chem">Q = 2M - P</span>.'
    ],
    solution: '<div class="worked__math"><i>x</i> = 2(−1) − 2 = −4, &nbsp; <i>y</i> = 2(1) − (−5) = 7, &nbsp; <i>z</i> = 2(3) − 8 = −2  ⇒  <b>(−4, 7, −2)</b></div>'
  },
  {
    id: 't3-1-q003',
    topic: 't3-1', level: 'sl', tier: 'foundation', type: 'mcq', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.1',
    stem: '<p>A right circular cone has base radius <span class="mono">5 cm</span> and vertical height <span class="mono">12 cm</span>. What is the <strong>total surface area</strong> of the solid cone (including its circular base)?</p>',
    options: [
      '<span class="chem">90pi</span> <span class="unit">cm2</span>',
      '<span class="chem">65pi</span> <span class="unit">cm2</span>',
      '<span class="chem">85pi</span> <span class="unit">cm2</span>',
      '<span class="chem">100pi</span> <span class="unit">cm2</span>'
    ],
    answer: 0,
    misconception: {
      1: '65π cm² is only the curved surface area πrl. A solid cone also includes the circular base of area πr² = 25π cm².',
      2: 'You used the vertical height h = 12 instead of the slant height l = √(5² + 12²) = 13 in πrl + πr².',
      3: '100π cm³ is the volume (1/3)π(5²)(12) of the cone, not its surface area.'
    },
    hints: [
      'First find the slant height <span class="chem">l = sqrt(r^2 + h^2)</span> using Pythagoras.',
      'Total surface area = curved surface <span class="chem">πrl</span> + base area <span class="chem">πr^2</span>.'
    ],
    solution: '<div class="worked__math"><i>l</i> = √(5<sup>2</sup> + 12<sup>2</sup>) = 13 cm  ⇒  <i>A</i><sub>total</sub> = <i>π</i>(5)(13) + <i>π</i>(5)<sup>2</sup> = 65<i>π</i> + 25<i>π</i> = <b>90<i>π</i> cm<sup>2</sup></b></div>'
  },
  {
    id: 't3-1-q004',
    topic: 't3-1', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.4',
    stem: '<p>Express <span class="mono">210°</span> in radians as an exact multiple of <span class="chem">pi</span>.</p>',
    options: [
      '<span class="chem">7pi / 6</span>',
      '<span class="chem">5pi / 6</span>',
      '<span class="chem">4pi / 3</span>',
      '<span class="chem">7pi / 4</span>'
    ],
    answer: 0,
    misconception: {
      1: '5π/6 is 150° (180° − 30°), whereas 210° is 180° + 30°.',
      2: '4π/3 is 240° (180° + 60°).',
      3: '7π/4 is 315°.'
    },
    hints: [
      'Multiply by <span class="chem">pi / 180°</span> and simplify the fraction <span class="chem">210 / 180</span>.',
      'Notice that <span class="mono">210° = 7 × 30°</span> and <span class="mono">30° = π/6</span>.'
    ],
    solution: '<div class="worked__math">210° × <span class="frac"><span><i>π</i></span><span>180°</span></span> = <span class="frac"><span>7<i>π</i></span><span>6</span></span></div>'
  },
  {
    id: 't3-1-q005',
    topic: 't3-1', level: 'sl', tier: 'foundation', type: 'numeric', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.4',
    stem: '<p>A circular sector has radius <span class="mono">10 cm</span> and central angle <span class="chem">theta = 1.4</span> radians. Calculate the area of the sector in <span class="unit">cm2</span>.</p>',
    answer: 70,
    tolerance: { abs: 0.1 },
    sigfigs: 2,
    unit: 'cm2',
    hints: [
      'Use the sector area formula <span class="chem">A = (1/2)r^2theta</span>.',
      'Substitute <span class="chem">r = 10</span> and <span class="chem">theta = 1.4</span>.'
    ],
    solution: '<div class="worked__math"><i>A</i> = <span class="frac"><span>1</span><span>2</span></span>(10)<sup>2</sup>(1.4) = 50 × 1.4 = <b>70 cm<sup>2</sup></b></div>'
  },
  {
    id: 't3-1-q006',
    topic: 't3-1', level: 'sl', tier: 'foundation', type: 'numeric', marks: 3,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.2',
    stem: '<p>In triangle <span class="chem">ABC</span>, <span class="chem">a = 7 cm</span>, <span class="chem">b = 8 cm</span>, and <span class="chem">angle C = 60°</span>. Find the exact length of side <span class="chem">c</span>.</p>',
    answer: 7.549834435,
    exact: true,
    answerInput: 'sqrt(57)',
    unit: 'cm',
    hints: [
      'You know two sides and the included angle (<span class="chem">SAS</span>), so use the Cosine Rule: <span class="chem">c^2 = a^2 + b^2 - 2ab cos C</span>.',
      'Recall that <span class="chem">cos 60° = 1/2</span>.'
    ],
    solution: '<div class="worked__math"><i>c</i><sup>2</sup> = 7<sup>2</sup> + 8<sup>2</sup> − 2(7)(8) cos 60° = 49 + 64 − 56 = 57  ⇒  <i>c</i> = <b>√57 cm</b></div>'
  },

  /* ======================= EXAM STANDARD ================================= */
  {
    id: 't3-1-q007',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'mcq', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.2',
    stem: '<p><strong>[Paper 1 — No GDC]</strong> In triangle <span class="chem">ABC</span>, the side lengths are <span class="chem">a = 5 cm</span>, <span class="chem">b = 6 cm</span>, and <span class="chem">c = 8 cm</span>. What is the exact value of <span class="chem">cos C</span>, and what does this tell you about <span class="chem">angle C</span>?</p>',
    options: [
      '<span class="chem">cos C = -1/20</span>, so <span class="chem">angle C</span> is obtuse',
      '<span class="chem">cos C = 1/20</span>, so <span class="chem">angle C</span> is acute',
      '<span class="chem">cos C = -3/40</span>, so <span class="chem">angle C</span> is obtuse',
      '<span class="chem">cos C = 0</span>, so <span class="chem">angle C = 90°</span>'
    ],
    answer: 0,
    misconception: {
      1: 'You computed (c² − a² − b²)/(2ab) instead of (a² + b² − c²)/(2ab), flipping the sign.',
      2: 'Check your arithmetic: 25 + 36 − 64 = −3, and 2(5)(6) = 60, so −3/60 simplifies to −1/20.',
      3: '5² + 6² = 61 ≠ 64, so this is not a right-angled triangle.'
    },
    hints: [
      'Use the rearranged Cosine Rule: <span class="chem">cos C = (a^2 + b^2 - c^2) / (2ab)</span>.',
      'A negative cosine on <span class="chem">(0°, 180°)</span> means the angle lies in Quadrant II (obtuse).'
    ],
    solution: '<div class="worked__math">cos <i>C</i> = <span class="frac"><span>5<sup>2</sup> + 6<sup>2</sup> − 8<sup>2</sup></span><span>2(5)(6)</span></span> = <span class="frac"><span>25 + 36 − 64</span><span>60</span></span> = −<span class="frac"><span>3</span><span>60</span></span> = <b>−<span class="frac"><span>1</span><span>20</span></span></b> (obtuse since cos <i>C</i> &lt; 0)</div>'
  },
  {
    id: 't3-1-q008',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.2, 3.5',
    stem: '<p><strong>[Paper 2 — GDC]</strong> In triangle <span class="chem">ABC</span>, <span class="chem">AB = 12 cm</span>, <span class="chem">BC = 9 cm</span>, and <span class="chem">angle BAC = 42°</span>. Given that <span class="chem">angle ACB</span> is <strong>obtuse</strong>, find the size of <span class="chem">angle ACB</span> in degrees to 3 significant figures.</p>',
    answer: 116.8522671,
    tolerance: { rel: 0.005 },
    sigfigs: 3,
    unit: '°',
    hints: [
      'Use the Sine Rule <span class="chem">(sin C)/12 = (sin 42°)/9</span> to find the acute reference angle <span class="chem">C_1</span>.',
      'Since <span class="chem">angle ACB</span> is obtuse, subtract <span class="chem">C_1</span> from <span class="mono">180°</span>.'
    ],
    solution: '<div class="worked__math">sin <i>C</i> = <span class="frac"><span>12 sin 42°</span><span>9</span></span> ≈ 0.892174  ⇒  <i>C</i><sub>1</sub> = 63.148°</div><div class="worked__math"><i>C</i><sub>obtuse</sub> = 180° − 63.148° = <b>117°</b> (116.852°)</div>'
  },
  {
    id: 't3-1-q009',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'mcq', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.3',
    stem: '<p>Port <span class="chem">B</span> is on a three-figure bearing of <span class="mono">115°</span> from Port <span class="chem">A</span>. What is the three-figure back-bearing of Port <span class="chem">A</span> <strong>from</strong> Port <span class="chem">B</span>?</p>',
    options: [
      '<span class="mono">295°</span>',
      '<span class="mono">065°</span>',
      '<span class="mono">245°</span>',
      '<span class="mono">155°</span>'
    ],
    answer: 0,
    misconception: {
      1: '065° is 180° − 115° (the co-interior angle between South at A and North at B), not the clockwise angle from North at B.',
      2: '245° is 360° − 115° (counter-clockwise from North at A).',
      3: 'You subtracted from 270° instead of adding 180°.'
    },
    hints: [
      'The bearing from <span class="chem">B</span> back to <span class="chem">A</span> points in the exact opposite direction to the vector from <span class="chem">A</span> to <span class="chem">B</span>.',
      'Add <span class="mono">180°</span> to <span class="mono">115°</span>.'
    ],
    solution: '<div class="worked__math">Back-bearing = 115° + 180° = <b>295°</b></div>'
  },
  {
    id: 't3-1-q010',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.3',
    stem: '<p>A ship sails from harbour <span class="chem">O</span> for <span class="mono">15 km</span> on a bearing of <span class="mono">040°</span> to point <span class="chem">P</span>, and then sails <span class="mono">22 km</span> on a bearing of <span class="mono">160°</span> to point <span class="chem">Q</span>. Calculate the direct distance <span class="chem">OQ</span> in <span class="unit">km</span>, to 3 significant figures.</p>',
    answer: 19.46792233,
    tolerance: { rel: 0.005 },
    sigfigs: 3,
    unit: 'km',
    hints: [
      'Draw North arrows at <span class="chem">O</span> and <span class="chem">P</span>. The angle between <span class="chem">PO</span> and South at <span class="chem">P</span> is <span class="mono">40°</span>, and the angle between North at <span class="chem">P</span> and <span class="chem">PQ</span> is <span class="mono">160°</span>.',
      'This makes the interior angle <span class="chem">angle OPQ = (180° - 160°) + 40° = 60°</span>. Now apply the Cosine Rule to triangle <span class="chem">OPQ</span>!'
    ],
    solution: '<div class="worked__math">∠<i>OPQ</i> = 20° + 40° = 60°</div><div class="worked__math"><i>OQ</i> = √(15<sup>2</sup> + 22<sup>2</sup> − 2(15)(22) cos 60°) = √(225 + 484 − 330) = √379 ≈ <b>19.5 km</b></div>'
  },
  {
    id: 't3-1-q011',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.4',
    stem: '<p>A circle has radius <span class="chem">r = 12 cm</span>. A chord <span class="chem">AB</span> subtends a central angle of <span class="chem">theta = 2.1</span> radians at the centre <span class="chem">O</span>. Calculate the area of the minor circular segment bounded by the chord <span class="chem">AB</span> and the arc <span class="chem">AB</span>, to 3 significant figures.</p>',
    answer: 89.0489256,
    tolerance: { rel: 0.008 },
    sigfigs: 3,
    unit: 'cm2',
    hints: [
      'Use <span class="chem">A_{segment} = (1/2)r^2(theta - sin(theta))</span> with <span class="chem">theta</span> in radians.',
      'Ensure your GDC is in <strong>radians</strong> when evaluating <span class="chem">sin(2.1)</span>.'
    ],
    solution: '<div class="worked__math"><i>A</i><sub>segment</sub> = <span class="frac"><span>1</span><span>2</span></span>(12)<sup>2</sup>(2.1 − sin 2.1) = 72(2.1 − 0.863209) ≈ <b>89.0 cm<sup>2</sup></b></div>'
  },
  {
    id: 't3-1-q012',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'multi', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.5',
    stem: '<p>In triangle <span class="chem">ABC</span>, you are given <span class="chem">angle A = 30°</span> and side <span class="chem">b = 16 cm</span>. For which of the following values of the opposite side <span class="chem">a</span> are there <strong>two distinct possible triangles</strong> <span class="chem">ABC</span>? Select all that apply.</p>',
    options: [
      '<span class="chem">a = 6 cm</span>',
      '<span class="chem">a = 8 cm</span>',
      '<span class="chem">a = 10 cm</span>',
      '<span class="chem">a = 14 cm</span>',
      '<span class="chem">a = 18 cm</span>'
    ],
    answer: [2, 3],
    misconception: {
      0: 'Since b sin A = 16 sin 30° = 8 cm, a = 6 cm is shorter than the perpendicular height, giving 0 triangles.',
      1: 'When a = b sin A = 8 cm, side a just touches the base at 90°, forming exactly 1 right-angled triangle.',
      4: 'When a ≥ b (18 ≥ 16), the obtuse supplement 180° − B would make A + B > 180°, so only 1 triangle is possible.'
    },
    hints: [
      'Calculate the perpendicular height <span class="chem">h = b sin A = 16 sin 30° = 8 cm</span>.',
      'Two distinct triangles exist if and only if <span class="chem">b sin A &lt; a &lt; b</span>, i.e. <span class="chem">8 &lt; a &lt; 16</span>.'
    ],
    solution: '<p>Here <span class="chem">b sin A = 16 sin 30° = 8 cm</span>. The ambiguous two-triangle condition is <span class="chem">8 &lt; a &lt; 16</span>, which is satisfied by <span class="chem">a = 10 cm</span> and <span class="chem">a = 14 cm</span>.</p>'
  },
  {
    id: 't3-1-q013',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'order', marks: 3,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.1',
    stem: '<p>Arrange the steps in logical order to find the acute angle between the space diagonal <span class="chem">AG</span> of a cuboid <span class="chem">ABCDEFGH</span> (with base <span class="mono">6 cm × 8 cm</span> and height <span class="mono">5 cm</span>) and its horizontal base <span class="chem">ABCD</span>.</p>',
    options: [
      'Identify the vertical edge CG = 5 cm perpendicular to the base ABCD, so that AC is the orthogonal projection (shadow) of AG on the base.',
      'Use 2D Pythagoras in the horizontal base rectangle ABCD to find the base diagonal AC = √(6² + 8²) = 10 cm.',
      'Form the right-angled vertical triangle ACG with right angle at C, adjacent side AC = 10 cm, and opposite side CG = 5 cm.',
      'Compute ∠GAC = arctan(5 / 10) = arctan(0.5) ≈ 26.6°.'
    ],
    hints: [
      'First identify the shadow of <span class="chem">AG</span> on the horizontal base plane.',
      'Next find the length of that shadow before using right-angled trigonometry.'
    ],
    solution: '<p>Drop a perpendicular from <span class="chem">G</span> to <span class="chem">C</span> on the base, find the base diagonal <span class="chem">AC = 10 cm</span>, set up right-angled triangle <span class="chem">ACG</span>, and evaluate <span class="chem">arctan(5/10) ≈ 26.6°</span>.</p>'
  },
  {
    id: 't3-1-q014',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'short', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.4',
    stem: '<p><strong>[Paper 1 — No GDC]</strong> A sector of a circle of radius <span class="chem">r</span> cm has central angle <span class="chem">theta</span> radians. The perimeter of the sector is <span class="mono">20 cm</span> and the area of the sector is <span class="mono">24 cm²</span>. Find the two possible pairs of values of <span class="chem">(r, theta)</span>.</p>',
    answer: '<p>Either <i>r</i> = 4 cm and <i>θ</i> = 3 rad, or <i>r</i> = 6 cm and <i>θ</i> = 4/3 rad.</p>',
    markscheme: [
      'M1: Set up the perimeter equation 2r + rθ = 20 and area equation (1/2)r²θ = 24.',
      'M1: Express rθ = 20 − 2r and substitute into the area equation: (1/2)r(20 − 2r) = 24.',
      'A1: Simplify to the quadratic r² − 10r + 24 = 0 ⇒ (r − 4)(r − 6) = 0.',
      'A1: Obtain r = 4 cm or r = 6 cm.',
      'A1: Back-substitute into θ = (20 − 2r)/r to get (r = 4, θ = 3) and (r = 6, θ = 4/3).'
    ],
    hints: [
      'Write the two equations: <span class="chem">2r + rθ = 20</span> and <span class="chem">(1/2)r^2theta = 24</span>.',
      'Isolate <span class="chem">rθ = 20 - 2r</span> from the first equation and substitute it into <span class="chem">(1/2)r(rθ) = 24</span>.'
    ]
  },

  /* ======================= CHALLENGE ===================================== */
  {
    id: 't3-1-q015',
    topic: 't3-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.2, 3.5',
    stem: '<p><strong>[Paper 1 — No GDC]</strong> In triangle <span class="chem">ABC</span>, <span class="chem">AB = 6 cm</span>, <span class="chem">BC = 4 cm</span>, and <span class="chem">cos(angle BAC) = 3/4</span>. Two different triangles fit this information. Given also that <span class="chem">angle ACB</span> is <strong>obtuse</strong>, find the length of <span class="chem">AC</span> (in <span class="unit">cm</span>).</p>',
    answer: 4,
    exact: true,
    answerInput: '4',
    unit: 'cm',
    hints: [
      'Decode: this is the ambiguous case in cosine-rule form. Two lengths of <span class="chem">AC</span> are possible; the word "obtuse" tells you which one to keep. Find both, then test each.',
      'Let <span class="chem">AC = b</span> and write the Cosine Rule using <span class="chem">angle A</span>: <span class="chem">BC^2 = AB^2 + b^2 - 2(AB)(b) cos A</span>.',
      'Substitute the given values to form a quadratic in <span class="chem">b</span>: <span class="chem">16 = 36 + b^2 - 2(6)(b)(3/4)</span>, i.e. <span class="chem">b^2 - 9b + 20 = 0</span>.',
      'For each root, find the sign of <span class="chem">cos C = (BC^2 + AC^2 - AB^2)/(2(BC)(AC))</span>. A negative value means <span class="chem">angle ACB</span> is obtuse.'
    ],
    solution: '<div class="worked__math">4<sup>2</sup> = 6<sup>2</sup> + <i>b</i><sup>2</sup> − 2(6)<i>b</i><span class="frac"><span>3</span><span>4</span></span>  ⇒  <i>b</i><sup>2</sup> − 9<i>b</i> + 20 = 0  ⇒  (<i>b</i> − 4)(<i>b</i> − 5) = 0</div><div class="worked__math">If <i>b</i> = 4: cos <i>C</i> = <span class="frac"><span>16 + 16 − 36</span><span>2(4)(4)</span></span> = −<span class="frac"><span>1</span><span>8</span></span> &lt; 0, so <i>C</i> is obtuse. If <i>b</i> = 5: cos <i>C</i> = <span class="frac"><span>16 + 25 − 36</span><span>2(4)(5)</span></span> = <span class="frac"><span>1</span><span>8</span></span> &gt; 0, so <i>C</i> is acute.</div><div class="worked__math">Hence <i>AC</i> = <b>4 cm</b>.</div>'
  },
  {
    id: 't3-1-q016',
    topic: 't3-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 6,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.4',
    stem: '<p>Two identical circles, each of radius <span class="mono">6 cm</span>, are drawn such that the centre of each circle lies on the circumference of the other circle. Find the area of the overlapping region common to both circles, in <span class="unit">cm2</span> to 3 significant figures.</p>',
    answer: 44.22130915,
    tolerance: { rel: 0.008 },
    sigfigs: 3,
    unit: 'cm2',
    hints: [
      'Decode: the overlap is two equal circular segments, one cut from each circle by the common chord. The hidden fact is the angle each segment subtends at its centre; the condition "each centre lies on the other circle" gives it.',
      'Let the centres be <span class="chem">O_1, O_2</span> and the intersection points be <span class="chem">A, B</span>. Since <span class="chem">O_1 O_2 = O_1 A = O_2 A = 6 cm</span>, triangles <span class="chem">O_1 O_2 A</span> and <span class="chem">O_1 O_2 B</span> are equilateral (<span class="mono">60° = π/3</span>)!',
      'Thus the central angle at each centre is <span class="chem">theta = 2pi/3</span>, and the overlap consists of <strong>two identical circular segments</strong> of angle <span class="chem">2pi/3</span>.'
    ],
    solution: '<div class="worked__math">∠<i>AO</i><sub>1</sub><i>B</i> = <span class="frac"><span>2<i>π</i></span><span>3</span></span> rad  ⇒  <i>A</i><sub>overlap</sub> = 2 × <span class="frac"><span>1</span><span>2</span></span>(6)<sup>2</sup>(<span class="frac"><span>2<i>π</i></span><span>3</span></span> − sin <span class="frac"><span>2<i>π</i></span><span>3</span></span>) = 36(<span class="frac"><span>2<i>π</i></span><span>3</span></span> − <span class="frac"><span>√3</span><span>2</span></span>) = 24<i>π</i> − 18√3 ≈ <b>44.2 cm<sup>2</sup></b></div>'
  },
  {
    id: 't3-1-q017',
    topic: 't3-1', level: 'sl', tier: 'challenge', type: 'short', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.1',
    stem: '<p>A hollow right circular cone (open at the base) of base radius <span class="chem">r</span> and slant height <span class="chem">l</span> is made by rolling up a semicircular sheet of thin metal of radius <span class="mono">10 cm</span> so that the two straight radii meet without overlap.<br>(a) Find the base radius <span class="chem">r</span> and vertical height <span class="chem">h</span> of the cone. <strong>[4 marks]</strong><br>(b) Find the acute angle between a slant generator of the cone and the plane of its base. <strong>[2 marks]</strong></p>',
    answer: '<p>(a) <i>r</i> = 5 cm, <i>h</i> = 5√3 cm (≈ 8.66 cm); (b) 60° (or π/3 rad).</p>',
    markscheme: [
      'M1: The arc length of the semicircle (π × 10) becomes the circumference 2πr of the cone base (or equate curved area πrl = (1/2)π(10)² with l = 10).',
      'A1: 2πr = 10π ⇒ r = 5 cm (and slant height l = 10 cm).',
      'M1: Use Pythagoras with the slant height: h = √(l² − r²) = √(10² − 5²).',
      'A1: h = √75 = 5√3 cm (≈ 8.66 cm).',
      'M1: Use the right triangle formed by r, h and l: cos θ = r / l = 5 / 10.',
      'A1: cos θ = 1/2 ⇒ θ = 60° (or π/3 rad).'
    ],
    hints: [
      'Decode: rolling a flat sheet into a cone keeps lengths. The radius of the sheet becomes the slant height, and the curved edge of the sheet becomes the circumference of the base.',
      'When you roll a sector into a cone, the radius of the flat sector becomes the <strong>slant height</strong> <span class="chem">l = 10 cm</span> of the cone, and the arc length of the sector becomes the base circumference <span class="chem">2pi r</span>.',
      'Equate <span class="chem">2pi r = 10pi</span> to find <span class="chem">r</span>.'
    ]
  },
  {
    id: 't3-1-q018',
    topic: 't3-1', level: 'sl', tier: 'challenge', type: 'mcq', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.3',
    stem: '<p>A vertical radio mast <span class="chem">MT</span> of height <span class="chem">h</span> metres stands on horizontal ground at <span class="chem">M</span>. From a point <span class="chem">A</span> due South of <span class="chem">M</span>, the angle of elevation of the top <span class="chem">T</span> is <span class="mono">45°</span>. From a point <span class="chem">B</span> due East of <span class="chem">M</span>, the angle of elevation of <span class="chem">T</span> is <span class="mono">30°</span>. If the distance <span class="chem">AB</span> along the ground is <span class="mono">100 m</span>, what is the exact height <span class="chem">h</span> of the mast?</p>',
    options: [
      '<span class="chem">50 m</span>',
      '<span class="chem">50sqrt(2) m</span>',
      '<span class="chem">50sqrt(3) m</span>',
      '<span class="chem">25sqrt(3) m</span>'
    ],
    answer: 0,
    misconception: {
      1: '50√2 m assumes AM = BM = h, ignoring that the elevation from B is 30° so BM = h√3.',
      2: '50√3 m is the ground distance BM = h√3, not the vertical height h.',
      3: 'Check Pythagoras in horizontal right triangle AMB: h² + (h√3)² = 4h² = 100², so h = 100/2 = 50 m.'
    },
    hints: [
      'Decode: three right-angled triangles. Two are vertical (one through A, one through B) and one is horizontal (A, M, B, with the right angle at M because South and East are perpendicular). Write every ground length in terms of h.',
      'Express both ground distances <span class="chem">AM</span> and <span class="chem">BM</span> in terms of <span class="chem">h</span>: <span class="chem">AM = h / tan 45° = h</span> and <span class="chem">BM = h / tan 30° = h sqrt(3)</span>.',
      'Since <span class="chem">A</span> is due South and <span class="chem">B</span> is due East of <span class="chem">M</span>, <span class="chem">angle AMB = 90°</span> on the ground, so <span class="chem">AM^2 + BM^2 = 100^2</span>.'
    ],
    solution: '<div class="worked__math"><i>AM</i> = <i>h</i> cot 45° = <i>h</i>, &nbsp; <i>BM</i> = <i>h</i> cot 30° = <i>h</i>√3</div><div class="worked__math"><i>AM</i><sup>2</sup> + <i>BM</i><sup>2</sup> = <i>h</i><sup>2</sup> + 3<i>h</i><sup>2</sup> = 4<i>h</i><sup>2</sup> = 100<sup>2</sup>  ⇒  2<i>h</i> = 100  ⇒  <i>h</i> = <b>50 m</b></div>'
  },
  /* ======================= NEW FOUNDATION (2026-11) ====================== */
  {
    id: 't3-1-q019',
    topic: 't3-1', level: 'sl', tier: 'foundation', type: 'numeric', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.4',
    stem: '<p>An angle measures <span class="chem">(3pi)/5</span> radians. Convert this angle to <strong>degrees</strong>.</p>',
    answer: 108,
    exact: true,
    answerInput: '108',
    unit: '°',
    hints: [
      'To change radians to degrees, multiply by <span class="chem">180°/pi</span>.',
      'The <span class="chem">pi</span> cancels, leaving <span class="chem">(3 × 180°)/5</span>.'
    ],
    solution: '<div class="worked__math"><span class="frac"><span>3<i>π</i></span><span>5</span></span> × <span class="frac"><span>180°</span><span><i>π</i></span></span> = <span class="frac"><span>540°</span><span>5</span></span> = <b>108°</b></div>'
  },
  {
    id: 't3-1-q020',
    topic: 't3-1', level: 'sl', tier: 'foundation', type: 'numeric', marks: 3,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.1',
    stem: '<p>A <strong>solid</strong> hemisphere has radius <span class="mono">3.5 cm</span>. Calculate its <strong>total</strong> surface area (curved surface and flat circular face), in <span class="unit">cm2</span> to 3 significant figures. (No angles are involved.)</p>',
    answer: 115.4535300194,
    sigfigs: 3,
    unit: 'cm2',
    hints: [
      'The curved surface of a hemisphere is half of a sphere: <span class="chem">2pi r^2</span>.',
      'A solid hemisphere also has a flat circular face of area <span class="chem">pi r^2</span>, so the total is <span class="chem">3pi r^2</span>.'
    ],
    solution: '<div class="worked__math"><i>A</i> = 2<i>π</i>(3.5)<sup>2</sup> + <i>π</i>(3.5)<sup>2</sup> = 3<i>π</i>(12.25) = 36.75<i>π</i> ≈ <b>115 cm<sup>2</sup></b></div>'
  },
  {
    id: 't3-1-q021',
    topic: 't3-1', level: 'sl', tier: 'foundation', type: 'numeric', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.2',
    stem: '<p>In triangle <span class="chem">PQR</span>, <span class="chem">PQ = 8 cm</span>, <span class="chem">PR = 5 cm</span> and the angle between them is <span class="chem">angle QPR = 150°</span> (degrees). Find the exact area of the triangle, in <span class="unit">cm2</span>.</p>',
    answer: 10,
    exact: true,
    answerInput: '10',
    unit: 'cm2',
    hints: [
      'Two sides and the angle between them: use <span class="chem">A = (1/2)ab sin C</span>.',
      '<span class="chem">sin 150° = sin 30° = 1/2</span>.'
    ],
    solution: '<div class="worked__math"><i>A</i> = <span class="frac"><span>1</span><span>2</span></span>(8)(5) sin 150° = 20 × <span class="frac"><span>1</span><span>2</span></span> = <b>10 cm<sup>2</sup></b></div>'
  },
  {
    id: 't3-1-q022',
    topic: 't3-1', level: 'sl', tier: 'foundation', type: 'numeric', marks: 2,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.3',
    stem: '<p>A point <span class="chem">A</span> on level ground is <span class="mono">40 m</span> from the foot of a vertical tower. The angle of elevation of the top of the tower from <span class="chem">A</span> is <span class="mono">37°</span> (degrees). Find the height of the tower in metres, to 3 significant figures.</p>',
    answer: 30.1421620041,
    sigfigs: 3,
    unit: 'm',
    hints: [
      'The tower, the ground and the line of sight form a right-angled triangle. The height is <strong>opposite</strong> the <span class="mono">37°</span> angle and the <span class="mono">40 m</span> is <strong>adjacent</strong>.',
      'Use <span class="chem">h = 40 tan 37°</span>, with your GDC in degree mode.'
    ],
    solution: '<div class="worked__math"><i>h</i> = 40 tan 37° ≈ 40 × 0.75355 ≈ <b>30.1 m</b></div>'
  },

  /* ======================= NEW EXAM STANDARD (2026-11) =================== */
  {
    id: 't3-1-q023',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 3,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.2',
    stem: '<p>In triangle <span class="chem">ABC</span>, <span class="chem">angle BAC = 48°</span>, <span class="chem">angle ABC = 71°</span> (both in degrees) and <span class="chem">BC = 9.4 cm</span>. Find <span class="chem">AC</span>, in <span class="unit">cm</span> to 3 significant figures.</p>',
    answer: 11.9598149727,
    sigfigs: 3,
    unit: 'cm',
    hints: [
      '<span class="chem">BC</span> is opposite <span class="chem">angle A</span> and <span class="chem">AC</span> is opposite <span class="chem">angle B</span>: a side–angle pair is known, so use the sine rule.',
      '<span class="chem">AC / (sin 71°) = 9.4 / (sin 48°)</span>.'
    ],
    solution: '<div class="worked__math"><i>AC</i> = <span class="frac"><span>9.4 sin 71°</span><span>sin 48°</span></span> = <span class="frac"><span>8.8879</span><span>0.74314</span></span> ≈ <b>12.0 cm</b> (11.96)</div>'
  },
  {
    id: 't3-1-q024',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 3,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.2',
    stem: '<p>A triangle has sides of length <span class="mono">7.3 cm</span>, <span class="mono">9.1 cm</span> and <span class="mono">12.6 cm</span>. Find the size of its <strong>largest</strong> angle, in <strong>degrees</strong> to 3 significant figures.</p>',
    answer: 99.8201169287,
    sigfigs: 3,
    unit: '°',
    hints: [
      'The largest angle is opposite the longest side, <span class="mono">12.6 cm</span>.',
      'Use <span class="chem">cos C = (a^2 + b^2 - c^2)/(2ab)</span> with <span class="chem">c = 12.6</span>.'
    ],
    solution: '<div class="worked__math">cos <i>C</i> = <span class="frac"><span>7.3<sup>2</sup> + 9.1<sup>2</sup> − 12.6<sup>2</sup></span><span>2(7.3)(9.1)</span></span> = <span class="frac"><span>−22.66</span><span>132.86</span></span> ≈ −0.17056</div><div class="worked__math"><i>C</i> ≈ <b>99.8°</b> (obtuse, as the cosine is negative)</div>'
  },
  {
    id: 't3-1-q025',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.2',
    stem: '<p>In triangle <span class="chem">ABC</span>, <span class="chem">BC = 11 cm</span>, <span class="chem">angle BAC = 40°</span> and <span class="chem">angle ABC = 65°</span> (angles in degrees). Find the area of triangle <span class="chem">ABC</span>, in <span class="unit">cm2</span> to 3 significant figures.</p>',
    answer: 82.3962349847,
    sigfigs: 3,
    unit: 'cm2',
    hints: [
      'Decode: you need two sides and the angle between them for <span class="chem">(1/2)ab sin C</span>, but only one side is given. Find a second side first with the sine rule.',
      '<span class="chem">angle C = 180° - 40° - 65° = 75°</span> and <span class="chem">AC = (11 sin 65°)/(sin 40°)</span>.',
      'Then area <span class="chem">= (1/2)(BC)(AC) sin C</span>, using the angle <span class="chem">C</span> between <span class="chem">BC</span> and <span class="chem">AC</span>.'
    ],
    solution: '<div class="worked__math"><i>C</i> = 75°, &nbsp; <i>AC</i> = <span class="frac"><span>11 sin 65°</span><span>sin 40°</span></span> ≈ 15.510 cm</div><div class="worked__math">Area = <span class="frac"><span>1</span><span>2</span></span>(11)(15.510) sin 75° ≈ <b>82.4 cm<sup>2</sup></b></div>'
  },
  {
    id: 't3-1-q026',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'short', marks: 8,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.2, 3.3',
    stem: '<p>A yacht leaves harbour <span class="chem">H</span> and sails <span class="mono">18 km</span> on a bearing of <span class="mono">072°</span> to a buoy <span class="chem">B</span>. It then sails <span class="mono">25 km</span> on a bearing of <span class="mono">195°</span> to a point <span class="chem">C</span>. All angles are in degrees.<br>(a) Show that <span class="chem">angle HBC = 57°</span>. <strong>[2 marks]</strong><br>(b) Find the distance <span class="chem">HC</span>, in km to 3 significant figures. <strong>[3 marks]</strong><br>(c) Find the bearing of <span class="chem">H</span> from <span class="chem">C</span>, to the nearest degree. <strong>[3 marks]</strong></p>',
    answer: '<p>(a) The bearing of <i>H</i> from <i>B</i> is 072° + 180° = 252°, so ∠<i>HBC</i> = 252° − 195° = 57°. (b) <i>HC</i> ≈ 21.4 km (21.420). (c) ∠<i>BCH</i> ≈ 44.8°, so the bearing of <i>H</i> from <i>C</i> is 015° − 44.8° + 360° ≈ <b>330°</b>.</p>',
    markscheme: [
      'M1: Back-bearing of H from B is 072° + 180° = 252° (or uses the alternate angle 72° with North lines at H and B).',
      'A1: ∠HBC = 252° − 195° = 57°. AG: angle HBC = 57°; the given line itself earns no mark.',
      'M1: Cosine rule in triangle HBC: HC² = 18² + 25² − 2(18)(25) cos 57°.',
      'A1: HC² ≈ 458.83.',
      'A1: HC ≈ 21.4 km (21.420).',
      'M1: Finds an angle of triangle HBC at C, e.g. sin(∠BCH) = 18 sin 57° / 21.420, so ∠BCH ≈ 44.81°.',
      'M1: Uses the bearing of B from C, 195° − 180° = 015°, and turns anticlockwise through ∠BCH (H lies to the west of line CB).',
      'A1: Bearing of H from C = 360° + 15° − 44.81° ≈ 330°.'
    ],
    hints: [
      'Decode: draw a North line at every point. Part (a) is a back-bearing question; parts (b) and (c) are the cosine rule and then the sine rule in triangle <span class="chem">HBC</span>.',
      'For (c), find <span class="chem">angle BCH</span> first. At <span class="chem">C</span>, the direction to <span class="chem">B</span> is the bearing <span class="mono">015°</span> (the back-bearing of <span class="mono">195°</span>).',
      'From the diagram, <span class="chem">H</span> is anticlockwise from <span class="chem">B</span> when seen from <span class="chem">C</span>, so subtract <span class="chem">angle BCH</span> from <span class="mono">015°</span> (adding <span class="mono">360°</span>).'
    ],
    solution: '<p><b>Decode.</b> Bearings give directions; the angles inside the triangle come from North lines and back-bearings.</p><div class="worked__math">(a) Bearing <i>B</i> → <i>H</i> = 252°, so ∠<i>HBC</i> = 252° − 195° = 57°.</div><div class="worked__math">(b) <i>HC</i><sup>2</sup> = 18<sup>2</sup> + 25<sup>2</sup> − 2(18)(25) cos 57° ≈ 458.83 ⇒ <i>HC</i> ≈ <b>21.4 km</b></div><div class="worked__math">(c) sin ∠<i>BCH</i> = <span class="frac"><span>18 sin 57°</span><span>21.420</span></span> ≈ 0.70476 ⇒ ∠<i>BCH</i> ≈ 44.81° (acute, since it is opposite the shortest side)</div><div class="worked__math">Bearing of <i>H</i> from <i>C</i> = 015° − 44.81° + 360° ≈ <b>330°</b></div>'
  },
  {
    id: 't3-1-q027',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.5',
    stem: '<p>In triangle <span class="chem">ABC</span>, <span class="chem">angle BAC = 35°</span> (degrees), <span class="chem">BC = 7 cm</span> and <span class="chem">AC = 11 cm</span>. Two different triangles fit this information. Find the <strong>smaller</strong> possible length of <span class="chem">AB</span>, in cm to 3 significant figures.</p>',
    answer: 5.97880529497,
    sigfigs: 3,
    unit: 'cm',
    hints: [
      'Decode: two sides and a non-included angle (SSA) with the side opposite the angle shorter than the other side: this is the ambiguous case. You want the third side, not an angle.',
      'Let <span class="chem">AB = x</span>. The cosine rule with the known angle gives a quadratic: <span class="chem">7^2 = 11^2 + x^2 - 2(11)x cos 35°</span>.',
      'Solve <span class="chem">x^2 - (22 cos 35°)x + 72 = 0</span> with your GDC; both roots are positive, and you want the smaller one.'
    ],
    solution: '<p><b>Decode.</b> SSA with 11 sin 35° ≈ 6.31 &lt; 7 &lt; 11, so there are two triangles; the cosine rule turns this into a quadratic in <i>AB</i>.</p><div class="worked__math">49 = 121 + <i>x</i><sup>2</sup> − 22<i>x</i> cos 35° ⇒ <i>x</i><sup>2</sup> − 18.021<i>x</i> + 72 = 0</div><div class="worked__math"><i>x</i> ≈ 5.979 or 12.043 ⇒ smaller <i>AB</i> ≈ <b>5.98 cm</b></div>'
  },
  {
    id: 't3-1-q028',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'short', marks: 6,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.2, 3.5',
    stem: '<p>In triangle <span class="chem">PQR</span>, <span class="chem">PQ = 15 cm</span>, <span class="chem">QR = 10 cm</span> and <span class="chem">angle QPR = 38°</span> (degrees).<br>(a) Find the two possible values of <span class="chem">angle PRQ</span>, in degrees. <strong>[3 marks]</strong><br>(b) Find the difference between the two possible areas of triangle <span class="chem">PQR</span>, in <span class="unit">cm2</span>. <strong>[3 marks]</strong><br>Give angles to 1 decimal place and areas to 3 significant figures.</p>',
    answer: '<p>(a) ∠<i>PRQ</i> ≈ 67.4° or 112.6°. (b) The areas are about 72.3 cm² and 36.9 cm², a difference of about <b>35.4 cm²</b>.</p>',
    markscheme: [
      'M1: Sine rule: sin(∠PRQ)/15 = sin 38°/10, so sin(∠PRQ) ≈ 0.92349.',
      'A1: ∠PRQ ≈ 67.4°.',
      'A1: or ∠PRQ ≈ 180° − 67.4° = 112.6°.',
      'M1: Finds ∠PQR = 180° − 38° − ∠PRQ in each case (74.6° and 29.4°) and uses area = (1/2)(15)(10) sin(∠PQR).',
      'A1: Areas ≈ 72.3 cm² and 36.9 cm².',
      'A1: Difference ≈ 35.4 cm².'
    ],
    hints: [
      '<span class="chem">QR</span> is opposite the given <span class="mono">38°</span> and is shorter than <span class="chem">PQ</span>: expect two triangles.',
      'Use the sine rule for <span class="chem">angle PRQ</span>; the second value is <span class="chem">180° - angle PRQ</span>.',
      'For each triangle, the angle between <span class="chem">PQ</span> and <span class="chem">QR</span> is <span class="chem">angle PQR = 180° - 38° - angle PRQ</span>.'
    ],
    solution: '<div class="worked__math">(a) sin <i>R</i> = <span class="frac"><span>15 sin 38°</span><span>10</span></span> ≈ 0.92349 ⇒ <i>R</i> ≈ 67.44° or 112.56°</div><div class="worked__math">(b) <i>Q</i> ≈ 74.56° or 29.44°; areas = 75 sin <i>Q</i> ≈ 72.29 and 36.87 ⇒ difference ≈ <b>35.4 cm<sup>2</sup></b></div>'
  },
  {
    id: 't3-1-q029',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.1',
    stem: '<p>A right pyramid <span class="chem">VABCD</span> has a square base <span class="chem">ABCD</span> of side <span class="mono">10 cm</span> and vertical height <span class="mono">14 cm</span>. Find the angle between the sloping edge <span class="chem">VA</span> and the base <span class="chem">ABCD</span>, in <strong>degrees</strong> to 3 significant figures.</p>',
    answer: 63.2027424124,
    sigfigs: 3,
    unit: '°',
    hints: [
      'The apex <span class="chem">V</span> is directly above the centre <span class="chem">M</span> of the square. The projection of <span class="chem">VA</span> on the base is <span class="chem">MA</span>.',
      '<span class="chem">MA</span> is half the diagonal of the square: <span class="chem">MA = (1/2)sqrt(10^2 + 10^2) = 5sqrt(2)</span>.',
      'In right-angled triangle <span class="chem">VMA</span>, <span class="chem">tan(angle VAM) = 14/(5sqrt(2))</span>.'
    ],
    solution: '<div class="worked__math"><i>MA</i> = 5√2 ≈ 7.0711 cm, &nbsp; tan ∠<i>VAM</i> = <span class="frac"><span>14</span><span>7.0711</span></span> ≈ 1.9799</div><div class="worked__math">∠<i>VAM</i> ≈ <b>63.2°</b></div>'
  },
  {
    id: 't3-1-q030',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.1, 3.2',
    stem: '<p>A cuboid <span class="chem">ABCDEFGH</span> has base <span class="chem">ABCD</span> with <span class="chem">AB = 6 cm</span> and <span class="chem">AD = 4 cm</span>, and height <span class="chem">AE = 3 cm</span>. The top face is <span class="chem">EFGH</span>, with <span class="chem">E</span>, <span class="chem">F</span>, <span class="chem">G</span>, <span class="chem">H</span> vertically above <span class="chem">A</span>, <span class="chem">B</span>, <span class="chem">C</span>, <span class="chem">D</span>. The face diagonals <span class="chem">AF</span> and <span class="chem">AH</span> meet at <span class="chem">A</span>. Find the angle <span class="chem">FAH</span> between these two lines, in <strong>degrees</strong> to 3 significant figures.</p>',
    answer: 74.4351933386,
    sigfigs: 3,
    unit: '°',
    hints: [
      'Decode: this is the angle between two intersecting lines in a solid. The two lines and the segment <span class="chem">FH</span> joining their ends form a triangle that is <strong>not</strong> right-angled, so find all three sides and use the cosine rule.',
      'Each side is a diagonal of a rectangular face: <span class="chem">AF = sqrt(6^2 + 3^2)</span>, <span class="chem">AH = sqrt(4^2 + 3^2)</span>, <span class="chem">FH = sqrt(6^2 + 4^2)</span>.',
      '<span class="chem">cos(angle FAH) = (AF^2 + AH^2 - FH^2)/(2 × AF × AH)</span>.'
    ],
    solution: '<p><b>Decode.</b> Angle between two lines meeting at A: build triangle AFH from three face diagonals.</p><div class="worked__math"><i>AF</i> = √45, &nbsp; <i>AH</i> = 5, &nbsp; <i>FH</i> = √52</div><div class="worked__math">cos ∠<i>FAH</i> = <span class="frac"><span>45 + 25 − 52</span><span>2(√45)(5)</span></span> = <span class="frac"><span>18</span><span>10√45</span></span> ≈ 0.26833 ⇒ ∠<i>FAH</i> ≈ <b>74.4°</b></div>'
  },
  {
    id: 't3-1-q031',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.1',
    stem: '<p>An ice-cream model is a solid made of a right circular cone with a hemisphere on top. The cone and the hemisphere both have radius <span class="mono">3.2 cm</span>, and the total height of the model, from the tip of the cone to the top of the hemisphere, is <span class="mono">11 cm</span>. Find the volume of the model, in <span class="unit">cm3</span> to 3 significant figures. (No angles are involved.)</p>',
    answer: 152.270901524,
    sigfigs: 3,
    unit: 'cm3',
    hints: [
      'The hemisphere adds its radius, <span class="mono">3.2 cm</span>, to the height. So the cone has height <span class="chem">11 - 3.2 = 7.8 cm</span>.',
      '<span class="chem">V = (1/3)pi r^2 h + (2/3)pi r^3</span>.'
    ],
    solution: '<div class="worked__math">Cone height = 11 − 3.2 = 7.8 cm</div><div class="worked__math"><i>V</i> = <span class="frac"><span>1</span><span>3</span></span><i>π</i>(3.2)<sup>2</sup>(7.8) + <span class="frac"><span>2</span><span>3</span></span><i>π</i>(3.2)<sup>3</sup> ≈ 83.642 + 68.629 ≈ <b>152 cm<sup>3</sup></b></div>'
  },
  {
    id: 't3-1-q032',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.1',
    stem: '<p>A right circular cone has volume <span class="mono">200 cm³</span> and vertical height <span class="mono">9 cm</span>. Find its <strong>curved</strong> surface area, in <span class="unit">cm2</span> to 3 significant figures. (No angles are involved.)</p>',
    answer: 146.318299518,
    sigfigs: 3,
    unit: 'cm2',
    hints: [
      'Find the radius from <span class="chem">(1/3)pi r^2(9) = 200</span>.',
      'Then the slant height is <span class="chem">l = sqrt(r^2 + 9^2)</span>, and the curved surface area is <span class="chem">pi r l</span>. Keep full accuracy for <span class="chem">r</span>.'
    ],
    solution: '<div class="worked__math">3<i>πr</i><sup>2</sup> = 200 ⇒ <i>r</i> = √(200/(3<i>π</i>)) ≈ 4.6066 cm</div><div class="worked__math"><i>l</i> = √(4.6066<sup>2</sup> + 81) ≈ 10.110 cm ⇒ <i>πrl</i> ≈ <b>146 cm<sup>2</sup></b></div>'
  },
  {
    id: 't3-1-q033',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.4',
    stem: '<p>A chord <span class="chem">AB</span> of length <span class="mono">10 cm</span> is drawn in a circle of radius <span class="mono">7 cm</span> and centre <span class="chem">O</span>. Find the length of the <strong>minor arc</strong> <span class="chem">AB</span>, in cm to 3 significant figures. Work in radians.</p>',
    answer: 11.1384413488,
    sigfigs: 3,
    unit: 'cm',
    hints: [
      'Triangle <span class="chem">OAB</span> is isosceles. The perpendicular from <span class="chem">O</span> bisects the chord and the angle: <span class="chem">sin(theta/2) = 5/7</span>.',
      'Find <span class="chem">theta = 2 arcsin(5/7)</span> in <strong>radians</strong>, then use <span class="chem">l = r theta</span>.'
    ],
    solution: '<div class="worked__math"><i>θ</i> = 2 arcsin(5/7) ≈ 1.5912 rad (or by the cosine rule: cos <i>θ</i> = (49 + 49 − 100)/98)</div><div class="worked__math"><i>l</i> = 7 × 1.5912 ≈ <b>11.1 cm</b></div>'
  },
  {
    id: 't3-1-q034',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'short', marks: 7,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.4',
    stem: '<p>A flower bed is in the shape of a sector <span class="chem">OAB</span> of a circle with centre <span class="chem">O</span>, radius <span class="mono">4.5 m</span> and <span class="chem">angle AOB = 1.9</span> <strong>radians</strong>.<br>(a) Find the length of the arc <span class="chem">AB</span>. <strong>[2 marks]</strong><br>(b) A straight path is laid from <span class="chem">A</span> to <span class="chem">B</span>. Find the length of the path <span class="chem">AB</span>. <strong>[2 marks]</strong><br>(c) Find the area of the part of the flower bed between the path and the arc. <strong>[3 marks]</strong><br>Give answers to 3 significant figures.</p>',
    answer: '<p>(a) 8.55 m; (b) 7.32 m; (c) 9.66 m².</p>',
    markscheme: [
      'M1: Arc length l = rθ = 4.5 × 1.9.',
      'A1: l = 8.55 m.',
      'M1: Chord by the cosine rule, AB² = 4.5² + 4.5² − 2(4.5)(4.5) cos 1.9 (or AB = 2(4.5) sin 0.95), in radian mode.',
      'A1: AB ≈ 7.32 m.',
      'M1: Sector area (1/2)(4.5)²(1.9) ≈ 19.2375 m².',
      'M1: Subtracts triangle OAB, (1/2)(4.5)² sin 1.9 ≈ 9.581 m².',
      'A1: Segment area ≈ 9.66 m².'
    ],
    hints: [
      'The angle is in radians, so <span class="chem">l = r theta</span> and <span class="chem">A = (1/2)r^2 theta</span> apply directly. Set your GDC to radians.',
      'Segment = sector − triangle: <span class="chem">(1/2)r^2(theta - sin theta)</span>.'
    ],
    solution: '<div class="worked__math">(a) <i>l</i> = 4.5(1.9) = <b>8.55 m</b> &nbsp; (b) <i>AB</i> = 9 sin 0.95 ≈ <b>7.32 m</b></div><div class="worked__math">(c) <span class="frac"><span>1</span><span>2</span></span>(4.5)<sup>2</sup>(1.9 − sin 1.9) = 10.125(1.9 − 0.94630) ≈ <b>9.66 m<sup>2</sup></b></div>'
  },
  {
    id: 't3-1-q035',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 2,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.4',
    stem: '<p>A sector of a circle has radius <span class="mono">9 cm</span> and central angle <span class="chem">(5pi)/6</span> radians. Find the exact length of its arc, in cm, as a multiple of <span class="chem">pi</span>.</p>',
    answer: 23.5619449019,
    exact: true,
    answerInput: '15pi/2',
    unit: 'cm',
    hints: [
      'The angle is already in radians, so use <span class="chem">l = r theta</span>.',
      'Simplify <span class="chem">9 × (5pi)/6</span>.'
    ],
    solution: '<div class="worked__math"><i>l</i> = 9 × <span class="frac"><span>5<i>π</i></span><span>6</span></span> = <span class="frac"><span>45<i>π</i></span><span>6</span></span> = <b><span class="frac"><span>15<i>π</i></span><span>2</span></span> cm</b></div>'
  },
  {
    id: 't3-1-q036',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'short', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.2',
    stem: '<p>A triangle has sides of length <span class="mono">3 cm</span>, <span class="mono">5 cm</span> and <span class="mono">7 cm</span>.<br>(a) Show that the largest angle of the triangle is <span class="mono">120°</span> (degrees). <strong>[3 marks]</strong><br>(b) Hence find the exact area of the triangle. <strong>[2 marks]</strong></p>',
    answer: '<p>(a) cos θ = (9 + 25 − 49)/30 = −1/2, so θ = 120°. (b) Area = (1/2)(3)(5) sin 120° = 15√3/4 cm².</p>',
    markscheme: [
      'R1: The largest angle is opposite the longest side, 7 cm.',
      'M1: Cosine rule: cos θ = (3² + 5² − 7²)/(2 × 3 × 5).',
      'A1: cos θ = −15/30 = −1/2, so θ = 120°. AG: the largest angle is 120°; the given line itself earns no mark.',
      'M1: Area = (1/2)(3)(5) sin 120°, with sin 120° = √3/2.',
      'A1: Area = 15√3/4 cm².'
    ],
    hints: [
      'The largest angle is opposite the longest side.',
      'For (b), the angle between the sides 3 and 5 is the <span class="mono">120°</span> angle, and <span class="chem">sin 120° = sqrt(3)/2</span>.'
    ],
    solution: '<div class="worked__math">(a) cos <i>θ</i> = <span class="frac"><span>9 + 25 − 49</span><span>30</span></span> = −<span class="frac"><span>1</span><span>2</span></span> ⇒ <i>θ</i> = 120°</div><div class="worked__math">(b) Area = <span class="frac"><span>1</span><span>2</span></span>(3)(5)<span class="frac"><span>√3</span><span>2</span></span> = <b><span class="frac"><span>15√3</span><span>4</span></span> cm<sup>2</sup></b></div>'
  },
  {
    id: 't3-1-q037',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.3',
    stem: '<p>Points <span class="chem">A</span> and <span class="chem">B</span> lie on level ground in a straight line with the foot <span class="chem">F</span> of a vertical flagpole, on the same side of it, with <span class="chem">B</span> farther from <span class="chem">F</span> and <span class="chem">AB = 20 m</span>. The angles of elevation of the top of the flagpole from <span class="chem">A</span> and from <span class="chem">B</span> are <span class="mono">60°</span> and <span class="mono">30°</span> (degrees). Find the exact height of the flagpole in metres.</p>',
    answer: 17.3205080757,
    exact: true,
    answerInput: '10sqrt(3)',
    unit: 'm',
    hints: [
      'Let the height be <span class="chem">h</span>. Write both ground distances in terms of <span class="chem">h</span>: <span class="chem">AF = h/tan 60°</span> and <span class="chem">BF = h/tan 30°</span>.',
      '<span class="chem">BF - AF = 20</span>, i.e. <span class="chem">h sqrt(3) - h/sqrt(3) = 20</span>.'
    ],
    solution: '<div class="worked__math"><i>AF</i> = <i>h</i>/√3, &nbsp; <i>BF</i> = <i>h</i>√3 ⇒ <i>h</i>√3 − <i>h</i>/√3 = 20 ⇒ <span class="frac"><span>2<i>h</i></span><span>√3</span></span> = 20</div><div class="worked__math"><i>h</i> = <b>10√3 m</b> (≈ 17.3 m)</div>'
  },
  {
    id: 't3-1-q038',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'short', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.1',
    stem: '<p>The points <span class="chem">A(2, -1, k)</span> and <span class="chem">B(5, 3, 1)</span> are a distance <span class="chem">sqrt(34)</span> apart. (No angles are involved.)<br>(a) Find the two possible values of <span class="chem">k</span>. <strong>[3 marks]</strong><br>(b) For the positive value of <span class="chem">k</span>, find the midpoint of <span class="chem">AB</span>. <strong>[2 marks]</strong></p>',
    answer: '<p>(a) k = 4 or k = −2. (b) With k = 4, the midpoint is (3.5, 1, 2.5).</p>',
    markscheme: [
      'M1: Distance formula: (5 − 2)² + (3 − (−1))² + (1 − k)² = 34.',
      'A1: 9 + 16 + (1 − k)² = 34 ⇒ (1 − k)² = 9.',
      'A1: k = 4 or k = −2.',
      'M1: Midpoint ((2 + 5)/2, (−1 + 3)/2, (4 + 1)/2).',
      'A1: (3.5, 1, 2.5).'
    ],
    hints: [
      'Square both sides of the distance formula so that the square root disappears.',
      'Solve <span class="chem">(1 - k)^2 = 9</span>; take both square roots.'
    ],
    solution: '<div class="worked__math">(a) 9 + 16 + (1 − <i>k</i>)<sup>2</sup> = 34 ⇒ 1 − <i>k</i> = ±3 ⇒ <i>k</i> = <b>−2 or 4</b></div><div class="worked__math">(b) <i>M</i> = (<span class="frac"><span>7</span><span>2</span></span>, 1, <span class="frac"><span>5</span><span>2</span></span>) = <b>(3.5, 1, 2.5)</b></div>'
  },
  {
    id: 't3-1-q039',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.1',
    stem: '<p>A right pyramid has a rectangular base measuring <span class="mono">6 cm</span> by <span class="mono">8 cm</span>. Each of its four sloping edges has length <span class="mono">13 cm</span>. Find the volume of the pyramid, in <span class="unit">cm3</span>. (No angles are involved.)</p>',
    answer: 192,
    exact: true,
    answerInput: '192',
    unit: 'cm3',
    hints: [
      'The apex is above the centre of the rectangle, where the diagonals cross. Half a diagonal is <span class="chem">(1/2)sqrt(6^2 + 8^2) = 5</span>.',
      'A sloping edge, half a diagonal and the height form a right-angled triangle: <span class="chem">h = sqrt(13^2 - 5^2)</span>.'
    ],
    solution: '<div class="worked__math">Half-diagonal = 5 cm, &nbsp; <i>h</i> = √(169 − 25) = 12 cm</div><div class="worked__math"><i>V</i> = <span class="frac"><span>1</span><span>3</span></span>(6 × 8)(12) = <b>192 cm<sup>3</sup></b></div>'
  },
  {
    id: 't3-1-q040',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'short', marks: 7,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.4',
    stem: '<p>A sector <span class="chem">OAB</span> of a circle with centre <span class="chem">O</span> has radius <span class="mono">6 cm</span> and <span class="chem">angle AOB = pi/3</span> <strong>radians</strong>.<br>(a) Find the exact length of the arc <span class="chem">AB</span>. <strong>[2 marks]</strong><br>(b) Find the exact area of the segment between the chord <span class="chem">AB</span> and the arc <span class="chem">AB</span>. <strong>[3 marks]</strong><br>(c) Find the exact perimeter of this segment. <strong>[2 marks]</strong></p>',
    answer: '<p>(a) 2π cm; (b) (6π − 9√3) cm²; (c) (2π + 6) cm.</p>',
    markscheme: [
      'M1: l = rθ = 6 × π/3.',
      'A1: l = 2π cm.',
      'M1: Sector area (1/2)(6²)(π/3) = 6π.',
      'M1: Triangle area (1/2)(6²) sin(π/3) = 9√3.',
      'A1: Segment area = 6π − 9√3 cm².',
      'R1: Triangle OAB is isosceles with an angle of π/3 (60°), so it is equilateral and AB = 6 cm.',
      'A1: Perimeter = 2π + 6 cm.'
    ],
    hints: [
      'The angle is in radians: <span class="chem">l = r theta</span>, <span class="chem">A = (1/2)r^2 theta</span>.',
      'Segment = sector − triangle, with triangle area <span class="chem">(1/2)r^2 sin theta</span> and <span class="chem">sin(pi/3) = sqrt(3)/2</span>.',
      'For (c), what kind of triangle has two sides of 6 cm and a <span class="mono">60°</span> angle between them?'
    ],
    solution: '<div class="worked__math">(a) <i>l</i> = 6(<i>π</i>/3) = <b>2<i>π</i> cm</b></div><div class="worked__math">(b) 6<i>π</i> − 18(√3/2) = <b>6<i>π</i> − 9√3 cm<sup>2</sup></b></div><div class="worked__math">(c) Equilateral triangle ⇒ <i>AB</i> = 6, perimeter = <b>2<i>π</i> + 6 cm</b></div>'
  },
  {
    id: 't3-1-q041',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'short', marks: 9,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.1',
    stem: '<p>A right pyramid <span class="chem">VABCD</span> has a square base <span class="chem">ABCD</span> of side <span class="mono">8 cm</span>, and each sloping edge has length <span class="mono">11 cm</span>. <span class="chem">M</span> is the centre of the base and <span class="chem">N</span> is the midpoint of <span class="chem">AB</span>. Give angles in degrees and answers to 3 significant figures.<br>(a) Find the height <span class="chem">VM</span>. <strong>[3 marks]</strong><br>(b) Find the volume of the pyramid. <strong>[2 marks]</strong><br>(c) Find the angle between the edge <span class="chem">VA</span> and the base. <strong>[2 marks]</strong><br>(d) Find the angle between the line <span class="chem">VN</span> and the base. <strong>[2 marks]</strong></p>',
    answer: '<p>(a) VM = √89 ≈ 9.43 cm; (b) 201 cm³; (c) 59.1°; (d) 67.0°.</p>',
    markscheme: [
      'M1: MA is half the diagonal of the base: AC = √(8² + 8²) = 8√2, so MA = 4√2.',
      'M1: Pythagoras in triangle VMA: VM² = 11² − (4√2)² = 121 − 32.',
      'A1: VM = √89 ≈ 9.43 cm.',
      'M1: V = (1/3)(8²)(√89).',
      'A1: V ≈ 201 cm³.',
      'M1: The projection of VA on the base is MA, so cos(∠VAM) = 4√2/11 (or tan = √89/(4√2)).',
      'A1: ∠VAM ≈ 59.1°.',
      'M1: The projection of VN on the base is MN = 4 cm, so tan(∠VNM) = √89/4.',
      'A1: ∠VNM ≈ 67.0°.'
    ],
    hints: [
      'The apex is directly above the centre <span class="chem">M</span>. For a line from <span class="chem">V</span> to a point of the base, its projection on the base starts at <span class="chem">M</span>, so the angle with the base sits in a right-angled triangle containing the vertical <span class="chem">VM</span>.',
      '<span class="chem">MA</span> is half a diagonal; <span class="chem">MN</span> is half a side.'
    ],
    solution: '<div class="worked__math">(a) <i>MA</i> = 4√2, <i>VM</i> = √(121 − 32) = √89 ≈ <b>9.43 cm</b> &nbsp; (b) <i>V</i> = <span class="frac"><span>64√89</span><span>3</span></span> ≈ <b>201 cm<sup>3</sup></b></div><div class="worked__math">(c) cos ∠<i>VAM</i> = 4√2/11 ⇒ <b>59.1°</b> &nbsp; (d) tan ∠<i>VNM</i> = √89/4 ⇒ <b>67.0°</b></div>'
  },
  {
    id: 't3-1-q042',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.3',
    stem: '<p>From the top of a vertical cliff <span class="mono">85 m</span> above sea level, an observer sees two boats due West of the cliff, in a straight line with its foot. The angles of depression of the boats are <span class="mono">32°</span> and <span class="mono">18°</span> (degrees). Find the distance between the two boats, in metres to 3 significant figures.</p>',
    answer: 125.574665691,
    sigfigs: 3,
    unit: 'm',
    hints: [
      'Decode: the angle of depression from the cliff top equals the angle of elevation from the boat (alternate angles). The smaller angle belongs to the farther boat.',
      'Each boat is at a horizontal distance <span class="chem">85/tan(angle)</span> from the foot of the cliff.',
      'Distance between the boats <span class="chem">= 85/tan 18° - 85/tan 32°</span>.'
    ],
    solution: '<div class="worked__math">Far boat: 85/tan 18° ≈ 261.60 m; &nbsp; near boat: 85/tan 32° ≈ 136.03 m</div><div class="worked__math">Distance ≈ 261.60 − 136.03 ≈ <b>126 m</b></div>'
  },
  {
    id: 't3-1-q043',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 3,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.2',
    stem: '<p>In triangle <span class="chem">ABC</span>, <span class="chem">angle BAC = 45°</span>, <span class="chem">angle ABC = 60°</span> (degrees) and <span class="chem">BC = 6 cm</span>. Find the exact length of <span class="chem">AC</span>, in cm, in the form <span class="chem">p sqrt(q)</span>.</p>',
    answer: 7.34846922835,
    exact: true,
    answerInput: '3sqrt(6)',
    unit: 'cm',
    hints: [
      'Sine rule: <span class="chem">AC/(sin 60°) = 6/(sin 45°)</span>.',
      'Use <span class="chem">sin 60° = sqrt(3)/2</span> and <span class="chem">sin 45° = sqrt(2)/2</span>, then rationalise.'
    ],
    solution: '<div class="worked__math"><i>AC</i> = <span class="frac"><span>6(√3/2)</span><span>√2/2</span></span> = <span class="frac"><span>6√3</span><span>√2</span></span> = <span class="frac"><span>6√6</span><span>2</span></span> = <b>3√6 cm</b></div>'
  },
  {
    id: 't3-1-q044',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.5',
    stem: '<p>In triangle <span class="chem">ABC</span>, <span class="chem">angle BAC = 30°</span> (degrees), <span class="chem">BC = 5 cm</span> and <span class="chem">AC = 5sqrt(2) cm</span>. Given that <span class="chem">angle ABC</span> is <strong>obtuse</strong>, find the size of <span class="chem">angle ACB</span> in degrees.</p>',
    answer: 15,
    exact: true,
    answerInput: '15',
    unit: '°',
    hints: [
      'Decode: SSA information with a condition ("obtuse") that picks one of the two triangles. Find <span class="chem">angle ABC</span> with the sine rule, then use the angle sum.',
      '<span class="chem">sin B = (5sqrt(2) sin 30°)/5 = sqrt(2)/2</span>, so <span class="chem">B = 45°</span> or <span class="chem">135°</span>.'
    ],
    solution: '<p><b>Decode.</b> "Obtuse" selects the second solution of the sine equation.</p><div class="worked__math">sin <i>B</i> = <span class="frac"><span>5√2 × <sup>1</sup>/<sub>2</sub></span><span>5</span></span> = <span class="frac"><span>√2</span><span>2</span></span> ⇒ <i>B</i> = 135° (obtuse)</div><div class="worked__math">∠<i>ACB</i> = 180° − 30° − 135° = <b>15°</b></div>'
  },

  /* ======================= NEW CHALLENGE (2026-11) ======================= */
  {
    id: 't3-1-q045',
    topic: 't3-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 6,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.2, 3.3',
    stem: '<p>A lighthouse <span class="chem">L</span> is <span class="mono">12 km</span> from a port <span class="chem">P</span> on a bearing of <span class="mono">050°</span>. A ship leaves <span class="chem">P</span> and sails in a straight line on a bearing of <span class="mono">080°</span> at a constant <span class="mono">15 km h⁻¹</span>. The lighthouse beam can be seen from the ship whenever the ship is within <span class="mono">9 km</span> of <span class="chem">L</span>. For how many <strong>minutes</strong> can the beam be seen? Angles are in degrees; give your answer to 3 significant figures.</p>',
    answer: 53.66563146,
    sigfigs: 3,
    unit: 'min',
    hints: [
      'Decode: you need the length of the part of the ship’s path that lies within 9 km of <span class="chem">L</span>, then convert distance to time. The path enters and leaves the 9 km circle at two points: a cosine-rule quadratic (like the ambiguous case).',
      'The angle at <span class="chem">P</span> between <span class="chem">PL</span> and the path is <span class="chem">80° - 50° = 30°</span>. If the ship is <span class="chem">x</span> km from <span class="chem">P</span> and 9 km from <span class="chem">L</span>: <span class="chem">9^2 = 12^2 + x^2 - 2(12)x cos 30°</span>.',
      'Solve <span class="chem">x^2 - (24 cos 30°)x + 63 = 0</span>. The difference of the two roots is the distance travelled within range; divide by 15 and convert hours to minutes.'
    ],
    solution: '<p><b>Decode.</b> "Within 9 km" happens between the two points where the distance to L equals 9 km; find both with the cosine rule.</p><div class="worked__math"><i>x</i><sup>2</sup> − 20.785<i>x</i> + 63 = 0 ⇒ <i>x</i> ≈ 3.684 or 17.101 km</div><div class="worked__math">Distance in range ≈ 13.416 km (= √180) ⇒ time = 13.416/15 h ≈ 0.89443 h ≈ <b>53.7 minutes</b></div>'
  },
  {
    id: 't3-1-q046',
    topic: 't3-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.5',
    stem: '<p>A straight fence starts at a post <span class="chem">A</span> and runs across a flat field. A goat is tied to a stake <span class="chem">T</span> with a rope of length <span class="mono">6 m</span>. The stake is <span class="mono">9 m</span> from <span class="chem">A</span>, and the line <span class="chem">AT</span> makes an angle of <span class="mono">28°</span> (degrees) with the fence. When the rope is pulled tight, the goat can just reach the fence at exactly two points. How far apart are these two points, in metres to 3 significant figures?</p>',
    answer: 8.51993253273,
    sigfigs: 3,
    unit: 'm',
    hints: [
      'Decode: each point <span class="chem">X</span> on the fence with <span class="chem">TX = 6</span> gives a triangle <span class="chem">ATX</span> with <span class="chem">AT = 9</span>, <span class="chem">TX = 6</span> and <span class="chem">angle TAX = 28°</span>: two sides and a non-included angle, the ambiguous case. You want the difference of the two possible lengths <span class="chem">AX</span>.',
      'Cosine rule in triangle <span class="chem">ATX</span> with <span class="chem">AX = x</span>: <span class="chem">36 = 81 + x^2 - 18x cos 28°</span>.',
      'Solve the quadratic and subtract the roots (or use the perpendicular from <span class="chem">T</span> to the fence, of length <span class="chem">9 sin 28°</span>).'
    ],
    solution: '<p><b>Decode.</b> Two triangles from SSA data: the two positions of the rope form an isosceles triangle, and the required length is <i>x</i><sub>1</sub> − <i>x</i><sub>2</sub>.</p><div class="worked__math"><i>x</i><sup>2</sup> − 15.893<i>x</i> + 45 = 0 ⇒ <i>x</i> ≈ 3.687 or 12.206 m</div><div class="worked__math">Distance apart ≈ 12.206 − 3.687 ≈ <b>8.52 m</b> (= 2√(36 − (9 sin 28°)<sup>2</sup>))</div>'
  },
  {
    id: 't3-1-q047',
    topic: 't3-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 6,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.4',
    stem: '<p>A circular pond has radius <span class="mono">5 m</span>. A straight footbridge is built across it, and the smaller of the two pieces of the pond cut off by the bridge has exactly <strong>one quarter</strong> of the area of the whole pond. Find the shortest distance from the centre of the pond to the footbridge, in metres to 3 significant figures. Work in radians.</p>',
    answer: 2.0198637665,
    sigfigs: 3,
    unit: 'm',
    hints: [
      'Decode: the smaller piece is a circular segment. Its area depends on the angle <span class="chem">theta</span> (radians) that the bridge subtends at the centre. Set the segment area equal to a quarter of the circle and solve for <span class="chem">theta</span>; then find the perpendicular distance.',
      '<span class="chem">(1/2)(5^2)(theta - sin theta) = (1/4)pi(5^2)</span> simplifies to <span class="chem">theta - sin theta = pi/2</span>. This cannot be solved by algebra: use your GDC (graph or solver) in radians.',
      'The perpendicular from the centre bisects the angle, so the distance is <span class="chem">5 cos(theta/2)</span>.'
    ],
    solution: '<p><b>Decode.</b> Segment area = quarter of the circle gives an equation in <i>θ</i>, solved numerically.</p><div class="worked__math"><i>θ</i> − sin <i>θ</i> = <i>π</i>/2 ⇒ <i>θ</i> ≈ 2.3099 rad (GDC)</div><div class="worked__math">Distance = 5 cos(1.15494) ≈ <b>2.02 m</b></div>'
  },
  {
    id: 't3-1-q048',
    topic: 't3-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 7,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.4',
    stem: '<p>A tight drive belt passes around two pulley wheels of radii <span class="mono">10 cm</span> and <span class="mono">4 cm</span> whose centres are <span class="mono">15 cm</span> apart. The belt does not cross itself: it consists of two straight pieces, each a common tangent to both wheels, and two arcs, one on each wheel. Find the total length of the belt, in cm to 3 significant figures. Work in radians.</p>',
    answer: 76.415953473,
    sigfigs: 3,
    unit: 'cm',
    hints: [
      'Decode: total length = 2 straight tangent pieces + arc on the large wheel + arc on the small wheel. Each piece needs right-angled trigonometry; the arcs need angles in radians and <span class="chem">l = r theta</span>.',
      'Join the centres (15 cm). Draw a line from the small centre parallel to a straight piece: it makes a right-angled triangle with hypotenuse 15 and one side <span class="chem">10 - 4 = 6</span>. So each straight piece is <span class="chem">sqrt(15^2 - 6^2)</span>, and <span class="chem">alpha = arcsin(6/15)</span>.',
      'The belt wraps an angle <span class="chem">pi + 2alpha</span> around the large wheel and <span class="chem">pi - 2alpha</span> around the small wheel.'
    ],
    solution: '<p><b>Decode.</b> Split the belt into tangents and arcs; the radius difference gives a right-angled triangle.</p><div class="worked__math">Straight pieces: 2√(225 − 36) = 2√189 ≈ 27.495 cm; &nbsp; <i>α</i> = arcsin 0.4 ≈ 0.41152 rad</div><div class="worked__math">Arcs: 10(<i>π</i> + 2<i>α</i>) + 4(<i>π</i> − 2<i>α</i>) = 14<i>π</i> + 12<i>α</i> ≈ 43.982 + 4.938 = 48.920 cm</div><div class="worked__math">Total ≈ 27.495 + 48.920 ≈ <b>76.4 cm</b></div>'
  },
  {
    id: 't3-1-q049',
    topic: 't3-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 6,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.1, 3.2',
    stem: '<p>A storage box is a cuboid <span class="chem">ABCDEFGH</span> with base <span class="chem">ABCD</span>, where <span class="chem">AB = 50 cm</span>, <span class="chem">BC = 30 cm</span>, and height <span class="mono">20 cm</span>; <span class="chem">E</span>, <span class="chem">F</span>, <span class="chem">G</span>, <span class="chem">H</span> are vertically above <span class="chem">A</span>, <span class="chem">B</span>, <span class="chem">C</span>, <span class="chem">D</span>. Two straight wires are fixed inside the box, one from <span class="chem">A</span> to <span class="chem">G</span> and one from <span class="chem">B</span> to <span class="chem">H</span>. They cross at the centre of the box. Find the <strong>acute</strong> angle between the wires, in degrees to 3 significant figures.</p>',
    answer: 71.5915198294,
    sigfigs: 3,
    unit: '°',
    hints: [
      'Decode: the angle between two intersecting lines in a solid. The space diagonals bisect each other at the centre <span class="chem">O</span>, so triangle <span class="chem">OAB</span> is isosceles with known sides. Watch for the word "acute".',
      'Each half-diagonal is <span class="chem">OA = OB = (1/2)sqrt(50^2 + 30^2 + 20^2)</span>, and the third side is the edge <span class="chem">AB = 50</span>.',
      'The cosine rule gives <span class="chem">angle AOB</span>, which is obtuse here. The acute angle between the lines is <span class="chem">180° - angle AOB</span>.'
    ],
    solution: '<p><b>Decode.</b> Two space diagonals meet at the centre; use triangle OAB and then take the acute angle.</p><div class="worked__math"><i>OA</i><sup>2</sup> = <span class="frac"><span>3800</span><span>4</span></span> = 950 ⇒ cos ∠<i>AOB</i> = <span class="frac"><span>950 + 950 − 2500</span><span>2(950)</span></span> = −<span class="frac"><span>6</span><span>19</span></span> ⇒ ∠<i>AOB</i> ≈ 108.41°</div><div class="worked__math">Acute angle ≈ 180° − 108.41° ≈ <b>71.6°</b></div>'
  },
  {
    id: 't3-1-q050',
    topic: 't3-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.1',
    stem: '<p>A solid metal hemisphere of radius <span class="mono">6 cm</span> is melted down, and the metal is used to cast solid right circular cones, each with base radius <span class="mono">2 cm</span> and height <span class="mono">5 cm</span>. No metal is lost. What is the greatest number of <strong>complete</strong> cones that can be cast? (No angles are involved.)</p>',
    answer: 21,
    exact: true,
    answerInput: '21',
    hints: [
      'Decode: "melted and recast" means the volume is conserved. Divide the total volume by the volume of one cone; "complete" cones means you must round <strong>down</strong> to a whole number.',
      'Hemisphere: <span class="chem">(2/3)pi(6^3) = 144pi</span>. One cone: <span class="chem">(1/3)pi(2^2)(5) = (20pi)/3</span>.',
      '<span class="chem">144pi ÷ (20pi)/3 = 432/20</span>. Is this a whole number?'
    ],
    solution: '<p><b>Decode.</b> Volume is conserved; the hidden condition is that only whole cones count.</p><div class="worked__math">144<i>π</i> ÷ <span class="frac"><span>20<i>π</i></span><span>3</span></span> = <span class="frac"><span>432</span><span>20</span></span> = 21.6 ⇒ <b>21 complete cones</b></div>'
  },
  {
    id: 't3-1-q051',
    topic: 't3-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 7,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.2, 3.3',
    stem: '<p>Two surveyors stand at points <span class="chem">A</span> and <span class="chem">B</span> on horizontal ground, with <span class="chem">B</span> <span class="mono">200 m</span> due East of <span class="chem">A</span>. The foot <span class="chem">F</span> of a vertical radio mast is on a bearing of <span class="mono">030°</span> from <span class="chem">A</span> and on a bearing of <span class="mono">320°</span> from <span class="chem">B</span>. The angle of elevation of the top of the mast from <span class="chem">A</span> is <span class="mono">25°</span>. Find the angle of elevation of the top of the mast from <span class="chem">B</span>. All angles are in degrees; give your answer to 3 significant figures.</p>',
    answer: 22.4148420523,
    sigfigs: 3,
    unit: '°',
    hints: [
      'Decode: two separate triangles. First the horizontal triangle <span class="chem">ABF</span> (built from the bearings) gives the ground distances <span class="chem">AF</span> and <span class="chem">BF</span>; then two vertical right-angled triangles link those distances to the height.',
      'In triangle <span class="chem">ABF</span>: <span class="chem">angle FAB = 90° - 30° = 60°</span> and <span class="chem">angle FBA = 320° - 270° = 50°</span>, so <span class="chem">angle AFB = 70°</span>. Use the sine rule for <span class="chem">AF</span> and <span class="chem">BF</span>.',
      'Height <span class="chem">h = AF tan 25°</span>; the elevation from <span class="chem">B</span> is <span class="chem">arctan(h / BF)</span>.'
    ],
    solution: '<p><b>Decode.</b> Bearings → ground triangle → sine rule; elevations → vertical right-angled triangles.</p><div class="worked__math"><i>AF</i> = <span class="frac"><span>200 sin 50°</span><span>sin 70°</span></span> ≈ 163.04 m, &nbsp; <i>BF</i> = <span class="frac"><span>200 sin 60°</span><span>sin 70°</span></span> ≈ 184.32 m</div><div class="worked__math"><i>h</i> = 163.04 tan 25° ≈ 76.027 m ⇒ elevation from <i>B</i> = arctan(76.027/184.32) ≈ <b>22.4°</b></div>'
  },
  {
    id: 't3-1-q052',
    topic: 't3-1', level: 'sl', tier: 'challenge', type: 'short', marks: 7,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.2',
    stem: '<p>Three straight rods have lengths <span class="chem">x</span>, <span class="chem">x + 1</span> and <span class="chem">x + 2</span> metres. They are joined end to end to make a triangle whose largest angle is <span class="chem">(2pi)/3</span> <strong>radians</strong>.<br>(a) Find the value of <span class="chem">x</span>. <strong>[5 marks]</strong><br>(b) Find the exact area of the triangle. <strong>[2 marks]</strong></p>',
    answer: '<p>(a) x = 3/2; (b) area = 15√3/16 m².</p>',
    markscheme: [
      'R1: The largest angle, 2π/3, is opposite the longest rod, x + 2.',
      'M1: Cosine rule with cos(2π/3) = −1/2: (x + 2)² = x² + (x + 1)² + x(x + 1).',
      'A1: Simplifies to 2x² − x − 3 = 0.',
      'A1: (2x − 3)(x + 1) = 0.',
      'R1: x = 3/2, rejecting x = −1 because a length must be positive.',
      'M1: Area = (1/2)(3/2)(5/2) sin(2π/3), the angle between the two shorter rods.',
      'A1: Area = 15√3/16 m².'
    ],
    hints: [
      'Decode: "largest angle" tells you which side it is opposite (the longest rod). The angle is in radians: <span class="chem">(2pi)/3 = 120°</span>, and <span class="chem">cos((2pi)/3) = -1/2</span>. Use the cosine rule to get an equation in <span class="chem">x</span>.',
      '<span class="chem">(x + 2)^2 = x^2 + (x + 1)^2 - 2x(x + 1)cos((2pi)/3)</span>.',
      'You will get a quadratic. One root is not a length.'
    ],
    solution: '<p><b>Decode.</b> The largest angle is opposite the longest side; a cosine-rule equation gives a quadratic with one invalid root.</p><div class="worked__math">(a) <i>x</i><sup>2</sup> + 4<i>x</i> + 4 = 3<i>x</i><sup>2</sup> + 3<i>x</i> + 1 ⇒ 2<i>x</i><sup>2</sup> − <i>x</i> − 3 = 0 ⇒ (2<i>x</i> − 3)(<i>x</i> + 1) = 0 ⇒ <b><i>x</i> = 3/2</b></div><div class="worked__math">(b) Area = <span class="frac"><span>1</span><span>2</span></span> × <span class="frac"><span>3</span><span>2</span></span> × <span class="frac"><span>5</span><span>2</span></span> × <span class="frac"><span>√3</span><span>2</span></span> = <b><span class="frac"><span>15√3</span><span>16</span></span> m<sup>2</sup></b></div>'
  },
  {
    id: 't3-1-q053',
    topic: 't3-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 6,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.4',
    stem: '<p>A badge is cut from a sector of a circle of radius <span class="mono">12 cm</span> with central angle <span class="mono">1</span> <strong>radian</strong>. A circular hole is cut out of the sector; the hole is as large as possible, so its edge touches both straight edges and the arc of the sector. Find the area of the badge that remains, in <span class="unit">cm2</span> to 3 significant figures.</p>',
    answer: 24.4918114369,
    sigfigs: 3,
    unit: 'cm2',
    hints: [
      'Decode: remaining area = sector area − area of the largest inscribed circle. The work is finding that circle’s radius <span class="chem">r</span>.',
      'The centre <span class="chem">C</span> of the circle lies on the bisector of the sector angle, at distance <span class="chem">12 - r</span> from the sector’s centre <span class="chem">O</span> (because it touches the arc). The perpendicular from <span class="chem">C</span> to a straight edge has length <span class="chem">r</span>, giving <span class="chem">sin(0.5) = r/(12 - r)</span>.',
      'So <span class="chem">r = (12 sin 0.5)/(1 + sin 0.5)</span>. Sector area <span class="chem">= (1/2)(12^2)(1)</span>.'
    ],
    solution: '<p><b>Decode.</b> Sector minus inscribed circle; the circle’s radius comes from a right-angled triangle on the bisector.</p><div class="worked__math"><i>r</i> = <span class="frac"><span>12 sin 0.5</span><span>1 + sin 0.5</span></span> ≈ 3.8887 cm</div><div class="worked__math">Area = 72 − <i>π</i>(3.8887)<sup>2</sup> ≈ 72 − 47.508 ≈ <b>24.5 cm<sup>2</sup></b></div>'
  },
  {
    id: 't3-1-q054',
    topic: 't3-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 5,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.1, 3.3',
    stem: '<p>A rectangular roof panel <span class="chem">ABCD</span> has a horizontal lower edge <span class="chem">AB = 8 m</span> and edges <span class="chem">AD = BC = 5 m</span> running straight up the slope. The panel is inclined at <span class="mono">30°</span> (degrees) to the horizontal. A cable is fixed along the diagonal from <span class="chem">A</span> to <span class="chem">C</span>. Find the angle between the cable and the horizontal, in degrees to 3 significant figures.</p>',
    answer: 15.3669213052,
    sigfigs: 3,
    unit: '°',
    hints: [
      'Decode: the angle between a line (<span class="chem">AC</span>) and a horizontal plane. You need the vertical height of <span class="chem">C</span> above <span class="chem">A</span> and the length <span class="chem">AC</span>; the <span class="mono">30°</span> is the slope of the panel, not the angle of the cable.',
      'Height of the top edge: <span class="chem">5 sin 30° = 2.5 m</span>. Length of the diagonal: <span class="chem">AC = sqrt(8^2 + 5^2)</span> (it lies in the rectangle).',
      '<span class="chem">sin(angle) = 2.5/sqrt(89)</span>.'
    ],
    solution: '<p><b>Decode.</b> Line–plane angle: drop a perpendicular from C to the horizontal plane through AB.</p><div class="worked__math">Rise = 5 sin 30° = 2.5 m, &nbsp; <i>AC</i> = √89 ≈ 9.434 m</div><div class="worked__math">sin <i>φ</i> = 2.5/9.434 ≈ 0.26500 ⇒ <i>φ</i> ≈ <b>15.4°</b></div>'
  },
  {
    id: 't3-1-q055',
    topic: 't3-1', level: 'sl', tier: 'challenge', type: 'short', marks: 7,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.2, 3.5',
    stem: '<p>A designer is building a triangular frame <span class="chem">ABC</span> with <span class="chem">AB = 14 cm</span> and <span class="chem">angle BAC = 38°</span> (degrees). The rod <span class="chem">BC</span> has length <span class="chem">x</span> cm, and the length of <span class="chem">AC</span> is free.<br>(a) Find the least value of <span class="chem">x</span> for which the frame can be built. <strong>[2 marks]</strong><br>(b) Write down the set of values of <span class="chem">x</span> for which <strong>two</strong> different frames can be built. <strong>[2 marks]</strong><br>(c) Given <span class="chem">x = 10</span>, find the difference between the two possible lengths of <span class="chem">AC</span>. <strong>[3 marks]</strong><br>Give answers to 3 significant figures.</p>',
    answer: '<p>(a) x = 14 sin 38° ≈ 8.62; (b) 8.62 &lt; x &lt; 14; (c) about 10.1 cm.</p>',
    markscheme: [
      'M1: The shortest BC is the perpendicular from B to line AC: x = 14 sin 38°.',
      'A1: x ≈ 8.62 cm.',
      'A1: Lower bound 14 sin 38° ≈ 8.62 < x (strict: x = 8.62 gives one right-angled triangle).',
      'A1: Upper bound x < 14 (if x ≥ 14 only one triangle).',
      'M1: Cosine rule with AC = b: 10² = 14² + b² − 2(14)b cos 38°.',
      'A1: b² − 22.064b + 96 = 0, so b ≈ 5.96 or 16.10.',
      'A1: Difference ≈ 10.1 cm.'
    ],
    hints: [
      'Decode: this is the ambiguous case seen as a design question. The rod <span class="chem">BC</span> swings about <span class="chem">B</span> and must reach the line <span class="chem">AC</span>. Too short: no triangle; just touching: one; between the height and <span class="chem">AB</span>: two.',
      'The distance from <span class="chem">B</span> to the line <span class="chem">AC</span> is <span class="chem">14 sin 38°</span>.',
      'For (c), use the cosine rule with the known angle at <span class="chem">A</span> and solve the quadratic in <span class="chem">AC</span>.'
    ],
    solution: '<p><b>Decode.</b> SSA: count triangles by comparing x with the height 14 sin 38° and with AB = 14.</p><div class="worked__math">(a) <i>x</i><sub>min</sub> = 14 sin 38° ≈ <b>8.62 cm</b> &nbsp; (b) <b>8.62 &lt; <i>x</i> &lt; 14</b></div><div class="worked__math">(c) <i>b</i><sup>2</sup> − 22.064<i>b</i> + 96 = 0 ⇒ <i>b</i> ≈ 5.962 or 16.102 ⇒ difference ≈ <b>10.1 cm</b></div>'
  },
  {
    id: 't3-1-q056',
    topic: 't3-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 4,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.4',
    stem: '<p>The hour hand of a clock is <span class="mono">8 cm</span> long. Find the exact area swept out by the hour hand between 3:00 and 3:40 on the same afternoon, in <span class="unit">cm2</span>. Work in radians and give your answer as a multiple of <span class="chem">pi</span>.</p>',
    answer: 11.1701072128,
    exact: true,
    answerInput: '32pi/9',
    unit: 'cm2',
    hints: [
      'Decode: the swept region is a sector whose angle is the angle turned by the <strong>hour</strong> hand (not the minute hand) in 40 minutes. Convert that angle to radians, then use <span class="chem">A = (1/2)r^2 theta</span>.',
      'The hour hand turns <span class="chem">2pi</span> radians in 12 hours, so <span class="chem">pi/6</span> radians per hour.',
      '40 minutes is <span class="chem">2/3</span> of an hour, so <span class="chem">theta = (2/3)(pi/6) = pi/9</span>.'
    ],
    solution: '<p><b>Decode.</b> A sector problem in disguise: the angle comes from the hour hand’s rate.</p><div class="worked__math"><i>θ</i> = <span class="frac"><span>2</span><span>3</span></span> × <span class="frac"><span><i>π</i></span><span>6</span></span> = <span class="frac"><span><i>π</i></span><span>9</span></span> rad ⇒ <i>A</i> = <span class="frac"><span>1</span><span>2</span></span>(64)<span class="frac"><span><i>π</i></span><span>9</span></span> = <b><span class="frac"><span>32<i>π</i></span><span>9</span></span> cm<sup>2</sup></b></div>'
  },
  {
    id: 't3-1-q057',
    topic: 't3-1', level: 'sl', tier: 'challenge', type: 'short', marks: 8,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.2, 3.3',
    stem: '<p>Two coastguard stations <span class="chem">A</span> and <span class="chem">B</span> are on a straight east–west coastline, with <span class="chem">B</span> <span class="mono">30 km</span> due East of <span class="chem">A</span>. A boat <span class="chem">S</span> out at sea, to the north of the coastline, is on a bearing of <span class="mono">058°</span> from <span class="chem">A</span> and <span class="mono">316°</span> from <span class="chem">B</span>. All angles are in degrees.<br>(a) Show that <span class="chem">angle ASB = 102°</span>. <strong>[2 marks]</strong><br>(b) Find the distance <span class="chem">AS</span>. <strong>[2 marks]</strong><br>(c) Find the shortest distance from the boat to the coastline. <strong>[2 marks]</strong><br>(d) The boat now sails due South at <span class="mono">14 km h⁻¹</span>. Find how many minutes it takes to reach the coastline. <strong>[2 marks]</strong><br>Give answers to 3 significant figures.</p>',
    answer: '<p>(a) ∠SAB = 32°, ∠SBA = 46°, so ∠ASB = 102°. (b) AS ≈ 22.1 km. (c) ≈ 11.7 km. (d) ≈ 50.1 minutes.</p>',
    markscheme: [
      'M1: ∠SAB = 90° − 58° = 32° and ∠SBA = 316° − 270° = 46°.',
      'A1: ∠ASB = 180° − 32° − 46° = 102°. AG: angle ASB = 102°; the given line itself earns no mark.',
      'M1: Sine rule: AS/sin 46° = 30/sin 102°.',
      'A1: AS ≈ 22.1 km (22.062).',
      'M1: Shortest distance is perpendicular to AB: d = AS sin 32°.',
      'A1: d ≈ 11.7 km (11.691).',
      'M1: The coastline runs east–west, so sailing due South follows this perpendicular: time = d ÷ 14 hours.',
      'A1: Time = 11.691/14 h ≈ 0.83509 h ≈ 50.1 minutes.'
    ],
    hints: [
      'Decode: build triangle <span class="chem">ABS</span> from the bearings (North lines at <span class="chem">A</span> and <span class="chem">B</span>). "Shortest distance to the coastline" means the perpendicular distance; "due South" travels along exactly that perpendicular.',
      'At <span class="chem">A</span>, the angle between East and <span class="chem">AS</span> is <span class="chem">90° - 58°</span>; at <span class="chem">B</span>, the angle between West and <span class="chem">BS</span> is <span class="chem">316° - 270°</span>.',
      'For (c), use the right-angled triangle with hypotenuse <span class="chem">AS</span> and angle <span class="mono">32°</span> at <span class="chem">A</span>.'
    ],
    solution: '<p><b>Decode.</b> Bearings → triangle angles; shortest distance → perpendicular; due South → along that perpendicular.</p><div class="worked__math">(a) 32° + 46° + ∠<i>ASB</i> = 180° ⇒ ∠<i>ASB</i> = 102°</div><div class="worked__math">(b) <i>AS</i> = <span class="frac"><span>30 sin 46°</span><span>sin 102°</span></span> ≈ <b>22.1 km</b> &nbsp; (c) <i>d</i> = 22.062 sin 32° ≈ <b>11.7 km</b></div><div class="worked__math">(d) <i>t</i> = 11.691/14 h ≈ <b>50.1 min</b></div>'
  },
  {
    id: 't3-1-q058',
    topic: 't3-1', level: 'sl', tier: 'challenge', type: 'short', marks: 8,
    paper: 'Paper 2 (GDC)', syllabus: 'SL 3.2, 3.3',
    stem: '<p>A farmer’s field is a quadrilateral <span class="chem">PQRS</span>. A surveyor measures <span class="chem">PQ = 120 m</span>, <span class="chem">QR = 95 m</span>, <span class="chem">RS = 80 m</span>, <span class="chem">angle PQR = 104°</span> and <span class="chem">angle PRS = 52°</span> (angles in degrees). The field is to be fenced all the way round.<br>(a) Find the length of the diagonal <span class="chem">PR</span>. <strong>[2 marks]</strong><br>(b) Find the area of the field. <strong>[3 marks]</strong><br>(c) Find the total length of fencing needed. <strong>[3 marks]</strong><br>Give answers to 3 significant figures.</p>',
    answer: '<p>(a) PR ≈ 170 m (170.12); (b) area ≈ 10 900 m² (10 893); (c) PS ≈ 136 m, so fencing ≈ 431 m.</p>',
    markscheme: [
      'M1: Cosine rule in triangle PQR: PR² = 120² + 95² − 2(120)(95) cos 104°.',
      'A1: PR ≈ 170 m (170.12).',
      'M1: Splits the field along PR into two triangles and uses (1/2)ab sin C for each.',
      'A1: Triangle PQR ≈ 5530.7 m² and triangle PRS ≈ 5362.3 m².',
      'A1: Area ≈ 10 900 m² (10 893).',
      'M1: Cosine rule in triangle PRS: PS² = 170.12² + 80² − 2(170.12)(80) cos 52°.',
      'A1: PS ≈ 136 m (136.32).',
      'A1: Fencing = 120 + 95 + 80 + 136.32 ≈ 431 m.'
    ],
    hints: [
      'Decode: a quadrilateral is two triangles sharing the diagonal <span class="chem">PR</span>. "Fenced all the way round" means the perimeter, so the missing side <span class="chem">PS</span> is needed.',
      'Triangle <span class="chem">PQR</span>: two sides and the included angle, so cosine rule for <span class="chem">PR</span> and <span class="chem">(1/2)ab sin C</span> for its area.',
      'Triangle <span class="chem">PRS</span>: you now know <span class="chem">PR</span>, <span class="chem">RS</span> and the included angle <span class="chem">angle PRS</span>. Keep <span class="chem">PR</span> to full accuracy.'
    ],
    solution: '<p><b>Decode.</b> Split by the diagonal; each triangle is SAS.</p><div class="worked__math">(a) <i>PR</i> = √(14400 + 9025 − 22800 cos 104°) ≈ <b>170 m</b></div><div class="worked__math">(b) <span class="frac"><span>1</span><span>2</span></span>(120)(95) sin 104° + <span class="frac"><span>1</span><span>2</span></span>(170.12)(80) sin 52° ≈ 5530.7 + 5362.3 ≈ <b>10 900 m<sup>2</sup></b></div><div class="worked__math">(c) <i>PS</i> ≈ 136.32 m ⇒ fencing ≈ <b>431 m</b></div>'
  },
  {
    id: 't3-1-q059',
    topic: 't3-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 6,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.1',
    stem: '<p>A child’s spinning top is a solid made of a right circular cone joined to a hemisphere along their common circular face of radius <span class="mono">3 cm</span>. The cone and the hemisphere are made of the same material and have the <strong>same mass</strong>. Find the exact total surface area of the top, in <span class="unit">cm2</span>, in terms of <span class="chem">pi</span>. (No angles are involved.)</p>',
    answer: 119.772000344,
    exact: true,
    answerInput: '18pi+9sqrt(5)pi',
    unit: 'cm2',
    hints: [
      'Decode: "same material, same mass" means the two parts have the same <strong>volume</strong>; use that to find the cone’s height. The surface of the top is the curved part of the cone plus the curved part of the hemisphere (the joining face is hidden).',
      '<span class="chem">(1/3)pi(3^2)h = (2/3)pi(3^3)</span> gives <span class="chem">h = 6</span>. Then the slant height is <span class="chem">l = sqrt(3^2 + 6^2)</span>.',
      'Total <span class="chem">= pi r l + 2pi r^2</span>.'
    ],
    solution: '<p><b>Decode.</b> Equal mass with the same material means equal volume; the shared circular face is not on the surface.</p><div class="worked__math">3<i>πh</i> = 18<i>π</i> ⇒ <i>h</i> = 6, &nbsp; <i>l</i> = √45 = 3√5</div><div class="worked__math"><i>A</i> = <i>π</i>(3)(3√5) + 2<i>π</i>(9) = <b>18<i>π</i> + 9√5<i>π</i> cm<sup>2</sup></b> (≈ 120 cm<sup>2</sup>)</div>'
  },
  {
    id: 't3-1-q060',
    topic: 't3-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 5,
    paper: 'Paper 1 (No GDC)', syllabus: 'SL 3.2',
    stem: '<p>A triangular sail has two edges of length <span class="mono">6 m</span> and <span class="mono">8 m</span> meeting at the top corner, where the angle between them is <strong>obtuse</strong>. The area of the sail is <span class="mono">12 m²</span>. Find the exact value of the <strong>square</strong> of the length of the third edge, in <span class="unit">m2</span>. Angles are in degrees.</p>',
    answer: 183.138438763,
    exact: true,
    answerInput: '100+48sqrt(3)',
    unit: 'm2',
    hints: [
      'Decode: the area gives <span class="chem">sin</span> of the angle between the edges, which has two possible angles; "obtuse" picks one. Then the cosine rule gives the third edge squared.',
      '<span class="chem">(1/2)(6)(8) sin theta = 12</span> gives <span class="chem">sin theta = 1/2</span>, so <span class="chem">theta = 30°</span> or <span class="chem">150°</span>.',
      'With <span class="chem">theta = 150°</span>, <span class="chem">cos theta = -sqrt(3)/2</span>, and <span class="chem">c^2 = 6^2 + 8^2 - 2(6)(8)cos 150°</span>.'
    ],
    solution: '<p><b>Decode.</b> Area → sin θ → choose the obtuse angle → cosine rule.</p><div class="worked__math">24 sin <i>θ</i> = 12 ⇒ sin <i>θ</i> = <span class="frac"><span>1</span><span>2</span></span> ⇒ <i>θ</i> = 150° (obtuse)</div><div class="worked__math"><i>c</i><sup>2</sup> = 36 + 64 − 96(−√3/2) = <b>100 + 48√3 m<sup>2</sup></b></div>'
  }
]);
