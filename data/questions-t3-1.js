/* ==========================================================================
   Question bank: Topic 3.1 — 3D geometry, triangle trigonometry and radians
   All questions are original. Covers SL 3.1–3.4 (tested on both SL and HL).
   ========================================================================== */
S1.questions.register('t3-1', [

  /* ======================= FOUNDATION ==================================== */
  {
    id: 't3-1-q001',
    topic: 't3-1', level: 'sl', tier: 'foundation', type: 'numeric', marks: 2,
    syllabus: 'SL 3.1',
    stem: '<p>Find the straight-line distance between the points <span class="chem">A(1, -2, 4)</span> and <span class="chem">B(3, 4, -2)</span> in three-dimensional space.</p>',
    answer: 8.7178,
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
    syllabus: 'SL 3.1',
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
    syllabus: 'SL 3.1',
    stem: '<p>A right circular cone has base radius <span class="mono">5 cm</span> and vertical height <span class="mono">12 cm</span>. What is the <strong>total surface area</strong> of the solid cone (including its circular base)?</p>',
    options: [
      '<span class="chem">90*pi</span> <span class="unit">cm2</span>',
      '<span class="chem">65*pi</span> <span class="unit">cm2</span>',
      '<span class="chem">85*pi</span> <span class="unit">cm2</span>',
      '<span class="chem">100*pi</span> <span class="unit">cm2</span>'
    ],
    answer: 0,
    misconception: {
      1: '65π cm² is only the curved surface area πrl. A solid cone also includes the circular base of area πr² = 25π cm².',
      2: 'You used the vertical height h = 12 instead of the slant height l = √(5² + 12²) = 13 in πrl + πr².',
      3: '100π cm³ is the volume (1/3)π(5²)(12) of the cone, not its surface area.'
    },
    hints: [
      'First find the slant height <span class="chem">l = sqrt(r^2 + h^2)</span> using Pythagoras.',
      'Total surface area = curved surface <span class="chem">pi*r*l</span> + base area <span class="chem">pi*r^2</span>.'
    ],
    solution: '<div class="worked__math"><i>l</i> = √(5<sup>2</sup> + 12<sup>2</sup>) = 13 cm  ⇒  <i>A</i><sub>total</sub> = <i>π</i>(5)(13) + <i>π</i>(5)<sup>2</sup> = 65<i>π</i> + 25<i>π</i> = <b>90<i>π</i> cm<sup>2</sup></b></div>'
  },
  {
    id: 't3-1-q004',
    topic: 't3-1', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'SL 3.4',
    stem: '<p>Express <span class="mono">210°</span> in radians as an exact multiple of <span class="chem">pi</span>.</p>',
    options: [
      '<span class="chem">7*pi / 6</span>',
      '<span class="chem">5*pi / 6</span>',
      '<span class="chem">4*pi / 3</span>',
      '<span class="chem">7*pi / 4</span>'
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
    syllabus: 'SL 3.4',
    stem: '<p>A circular sector has radius <span class="mono">10 cm</span> and central angle <span class="chem">theta = 1.4</span> radians. Calculate the area of the sector in <span class="unit">cm2</span>.</p>',
    answer: 70,
    tolerance: { abs: 0.1 },
    sigfigs: 2,
    unit: 'cm2',
    hints: [
      'Use the sector area formula <span class="chem">A = (1/2)r^2*theta</span>.',
      'Substitute <span class="chem">r = 10</span> and <span class="chem">theta = 1.4</span>.'
    ],
    solution: '<div class="worked__math"><i>A</i> = <span class="frac"><span>1</span><span>2</span></span>(10)<sup>2</sup>(1.4) = 50 × 1.4 = <b>70 cm<sup>2</sup></b></div>'
  },
  {
    id: 't3-1-q006',
    topic: 't3-1', level: 'sl', tier: 'foundation', type: 'numeric', marks: 3,
    syllabus: 'SL 3.2',
    stem: '<p>In triangle <span class="chem">ABC</span>, <span class="chem">a = 7 cm</span>, <span class="chem">b = 8 cm</span>, and <span class="chem">angle C = 60°</span>. Find the exact length of side <span class="chem">c</span>.</p>',
    answer: 7.5498,
    tolerance: { rel: 0.01 },
    sigfigs: 3,
    unit: 'cm',
    hints: [
      'You know two sides and the included angle (<span class="chem">SAS</span>), so use the Cosine Rule: <span class="chem">c^2 = a^2 + b^2 - 2ab cos C</span>.',
      'Recall that <span class="chem">cos 60° = 1/2</span>.'
    ],
    solution: '<div class="worked__math"><i>c</i><sup>2</sup> = 7<sup>2</sup> + 8<sup>2</sup> − 2(7)(8) cos 60° = 49 + 64 − 56 = 57  ⇒  <i>c</i> = <b>√57 ≈ 7.55 cm</b></div>'
  },

  /* ======================= EXAM STANDARD ================================= */
  {
    id: 't3-1-q007',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'mcq', marks: 3,
    syllabus: 'SL 3.2',
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
    syllabus: 'SL 3.2',
    stem: '<p><strong>[Paper 2 — GDC]</strong> In triangle <span class="chem">ABC</span>, <span class="chem">AB = 12 cm</span>, <span class="chem">BC = 9 cm</span>, and <span class="chem">angle BAC = 42°</span>. Given that <span class="chem">angle ACB</span> is <strong>obtuse</strong>, find the size of <span class="chem">angle ACB</span> in degrees to 3 significant figures.</p>',
    answer: 116.847,
    tolerance: { rel: 0.005 },
    sigfigs: 3,
    unit: '°',
    hints: [
      'Use the Sine Rule <span class="chem">(sin C)/12 = (sin 42°)/9</span> to find the acute reference angle <span class="chem">C_1</span>.',
      'Since <span class="chem">angle ACB</span> is obtuse, subtract <span class="chem">C_1</span> from <span class="mono">180°</span>.'
    ],
    solution: '<div class="worked__math">sin <i>C</i> = <span class="frac"><span>12 sin 42°</span><span>9</span></span> ≈ 0.892174  ⇒  <i>C</i><sub>1</sub> = 63.15°</div><div class="worked__math"><i>C</i><sub>obtuse</sub> = 180° − 63.15° = <b>117°</b> (116.8°)</div>'
  },
  {
    id: 't3-1-q009',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'mcq', marks: 3,
    syllabus: 'SL 3.3',
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
    syllabus: 'SL 3.3',
    stem: '<p>A ship sails from harbour <span class="chem">O</span> for <span class="mono">15 km</span> on a bearing of <span class="mono">040°</span> to point <span class="chem">P</span>, and then sails <span class="mono">22 km</span> on a bearing of <span class="mono">160°</span> to point <span class="chem">Q</span>. Calculate the direct distance <span class="chem">OQ</span> in <span class="unit">km</span>, to 3 significant figures.</p>',
    answer: 19.468,
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
    syllabus: 'SL 3.4',
    stem: '<p>A circle has radius <span class="chem">r = 12 cm</span>. A chord <span class="chem">AB</span> subtends a central angle of <span class="chem">theta = 2.1</span> radians at the centre <span class="chem">O</span>. Calculate the area of the minor circular segment bounded by the chord <span class="chem">AB</span> and the arc <span class="chem">AB</span>, to 3 significant figures.</p>',
    answer: 89.049,
    tolerance: { rel: 0.008 },
    sigfigs: 3,
    unit: 'cm2',
    hints: [
      'Use <span class="chem">A_segment = (1/2)r^2(theta - sin(theta))</span> with <span class="chem">theta</span> in radians.',
      'Ensure your GDC is in <strong>radians</strong> when evaluating <span class="chem">sin(2.1)</span>.'
    ],
    solution: '<div class="worked__math"><i>A</i><sub>segment</sub> = <span class="frac"><span>1</span><span>2</span></span>(12)<sup>2</sup>(2.1 − sin 2.1) = 72(2.1 − 0.863209) ≈ <b>89.0 cm<sup>2</sup></b></div>'
  },
  {
    id: 't3-1-q012',
    topic: 't3-1', level: 'sl', tier: 'exam', type: 'multi', marks: 2,
    syllabus: 'SL 3.2',
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
    syllabus: 'SL 3.1',
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
    syllabus: 'SL 3.4',
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
      'Write the two equations: <span class="chem">2r + r*theta = 20</span> and <span class="chem">(1/2)r^2*theta = 24</span>.',
      'Isolate <span class="chem">r*theta = 20 - 2r</span> from the first equation and substitute it into <span class="chem">(1/2)r(r*theta) = 24</span>.'
    ]
  },

  /* ======================= CHALLENGE ===================================== */
  {
    id: 't3-1-q015',
    topic: 't3-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 5,
    syllabus: 'SL 3.2',
    stem: '<p><strong>[Paper 1 — No GDC]</strong> In triangle <span class="chem">ABC</span>, <span class="chem">AB = 6 cm</span>, <span class="chem">BC = 4 cm</span>, and <span class="chem">cos(angle BAC) = 3/4</span>. There are two possible values for the length of <span class="chem">AC</span>. Find the <strong>sum</strong> of these two possible lengths of <span class="chem">AC</span> (in <span class="unit">cm</span>).</p>',
    answer: 9,
    tolerance: { abs: 0.01 },
    sigfigs: 1,
    unit: 'cm',
    hints: [
      'Let <span class="chem">AC = b</span> and write the Cosine Rule using <span class="chem">angle A</span>: <span class="chem">BC^2 = AB^2 + b^2 - 2(AB)(b) cos A</span>.',
      'Substitute the given values to form a quadratic in <span class="chem">b</span>: <span class="chem">16 = 36 + b^2 - 2(6)(b)(3/4)</span>, i.e. <span class="chem">b^2 - 9b + 20 = 0</span>.'
    ],
    solution: '<div class="worked__math">4<sup>2</sup> = 6<sup>2</sup> + <i>b</i><sup>2</sup> − 2(6)<i>b</i><span class="frac"><span>3</span><span>4</span></span>  ⇒  <i>b</i><sup>2</sup> − 9<i>b</i> + 20 = 0  ⇒  (<i>b</i> − 4)(<i>b</i> − 5) = 0</div><div class="worked__math">The two possible lengths are <i>b</i> = 4 cm and <i>b</i> = 5 cm, so their sum is 4 + 5 = <b>9 cm</b>.</div>'
  },
  {
    id: 't3-1-q016',
    topic: 't3-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 6,
    syllabus: 'SL 3.4',
    stem: '<p>Two identical circles, each of radius <span class="mono">6 cm</span>, are drawn such that the centre of each circle lies on the circumference of the other circle. Find the area of the overlapping region common to both circles, in <span class="unit">cm2</span> to 3 significant figures.</p>',
    answer: 44.22,
    tolerance: { rel: 0.008 },
    sigfigs: 3,
    unit: 'cm2',
    hints: [
      'Let the centres be <span class="chem">O_1, O_2</span> and the intersection points be <span class="chem">A, B</span>. Since <span class="chem">O_1 O_2 = O_1 A = O_2 A = 6 cm</span>, triangles <span class="chem">O_1 O_2 A</span> and <span class="chem">O_1 O_2 B</span> are equilateral (<span class="mono">60° = π/3</span>)!',
      'Thus the central angle at each centre is <span class="chem">theta = 2*pi/3</span>, and the overlap consists of <strong>two identical circular segments</strong> of angle <span class="chem">2*pi/3</span>.'
    ],
    solution: '<div class="worked__math">∠<i>AO</i><sub>1</sub><i>B</i> = <span class="frac"><span>2<i>π</i></span><span>3</span></span> rad  ⇒  <i>A</i><sub>overlap</sub> = 2 × <span class="frac"><span>1</span><span>2</span></span>(6)<sup>2</sup>(<span class="frac"><span>2<i>π</i></span><span>3</span></span> − sin <span class="frac"><span>2<i>π</i></span><span>3</span></span>) = 36(<span class="frac"><span>2<i>π</i></span><span>3</span></span> − <span class="frac"><span>√3</span><span>2</span></span>) = 24<i>π</i> − 18√3 ≈ <b>44.2 cm<sup>2</sup></b></div>'
  },
  {
    id: 't3-1-q017',
    topic: 't3-1', level: 'sl', tier: 'challenge', type: 'short', marks: 6,
    syllabus: 'SL 3.1',
    stem: '<p>A solid right circular cone of base radius <span class="chem">r</span> and slant height <span class="chem">l</span> is made by rolling up a semicircular sheet of thin metal of radius <span class="mono">10 cm</span> so that the two straight radii meet without overlap.<br>(a) Find the base radius <span class="chem">r</span> and vertical height <span class="chem">h</span> of the cone. <strong>[4 marks]</strong><br>(b) Find the acute angle between a slant generator of the cone and its circular base. <strong>[2 marks]</strong></p>',
    answer: '<p>(a) <i>r</i> = 5 cm, <i>h</i> = 5√3 cm (≈ 8.66 cm); (b) 60° (or π/3 rad).</p>',
    markscheme: [
      'M1: The arc length of the semicircle (π × 10) becomes the circumference 2πr of the cone base (or equate curved area πrl = (1/2)π(10)² with l = 10).',
      'A1: 2πr = 10π ⇒ r = 5 cm (and slant height l = 10 cm).',
      'M1 A1: h = √(l² − r²) = √(10² − 5²) = √75 = 5√3 cm (≈ 8.66 cm).',
      'M1 A1: cos θ = r / l = 5 / 10 = 1/2 ⇒ θ = 60° (or π/3 rad).'
    ],
    hints: [
      'When you roll a sector into a cone, the radius of the flat sector becomes the <strong>slant height</strong> <span class="chem">l = 10 cm</span> of the cone, and the arc length of the sector becomes the base circumference <span class="chem">2*pi*r</span>.',
      'Equate <span class="chem">2*pi*r = 10*pi</span> to find <span class="chem">r</span>.'
    ]
  },
  {
    id: 't3-1-q018',
    topic: 't3-1', level: 'sl', tier: 'challenge', type: 'mcq', marks: 4,
    syllabus: 'SL 3.3',
    stem: '<p>A vertical radio mast <span class="chem">MT</span> of height <span class="chem">h</span> metres stands on horizontal ground at <span class="chem">M</span>. From a point <span class="chem">A</span> due South of <span class="chem">M</span>, the angle of elevation of the top <span class="chem">T</span> is <span class="mono">45°</span>. From a point <span class="chem">B</span> due East of <span class="chem">M</span>, the angle of elevation of <span class="chem">T</span> is <span class="mono">30°</span>. If the distance <span class="chem">AB</span> along the ground is <span class="mono">100 m</span>, what is the exact height <span class="chem">h</span> of the mast?</p>',
    options: [
      '<span class="chem">50 m</span>',
      '<span class="chem">50*sqrt(2) m</span>',
      '<span class="chem">50*sqrt(3) m</span>',
      '<span class="chem">25*sqrt(3) m</span>'
    ],
    answer: 0,
    misconception: {
      1: '50√2 m assumes AM = BM = h, ignoring that the elevation from B is 30° so BM = h√3.',
      2: '50√3 m is the ground distance BM = h√3, not the vertical height h.',
      3: 'Check Pythagoras in horizontal right triangle AMB: h² + (h√3)² = 4h² = 100², so h = 100/2 = 50 m.'
    },
    hints: [
      'Express both ground distances <span class="chem">AM</span> and <span class="chem">BM</span> in terms of <span class="chem">h</span>: <span class="chem">AM = h / tan 45° = h</span> and <span class="chem">BM = h / tan 30° = h*sqrt(3)</span>.',
      'Since <span class="chem">A</span> is due South and <span class="chem">B</span> is due East of <span class="chem">M</span>, <span class="chem">angle AMB = 90°</span> on the ground, so <span class="chem">AM^2 + BM^2 = 100^2</span>.'
    ],
    solution: '<div class="worked__math"><i>AM</i> = <i>h</i> cot 45° = <i>h</i>, &nbsp; <i>BM</i> = <i>h</i> cot 30° = <i>h</i>√3</div><div class="worked__math"><i>AM</i><sup>2</sup> + <i>BM</i><sup>2</sup> = <i>h</i><sup>2</sup> + 3<i>h</i><sup>2</sup> = 4<i>h</i><sup>2</sup> = 100<sup>2</sup>  ⇒  2<i>h</i> = 100  ⇒  <i>h</i> = <b>50 m</b></div>'
  }
]);
