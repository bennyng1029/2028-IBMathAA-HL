/* ==========================================================================
   Analysis Lab — questions-t3-3.js
   Original question bank for Topic 3.3 (AHL 3.12–3.18):
   Vectors, lines and planes in 3D space.
   ========================================================================== */
(function () {
  'use strict';
  if (!window.S1 || !window.S1.questions) return;

  window.S1.questions.register('t3-3', [
    /* --- Foundation --- */
    {
      id: 't3-3-q001',
      topic: 't3-3',
      level: 'ahl',
      tier: 'foundation',
      type: 'mcq',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.12',
      marks: 3,
      stem: '<p>A drone flies from point <span class="chem">A(1, -2, 4)</span> towards point <span class="chem">B(3, 4, 1)</span> at a constant speed of <span class="unit">21 m s-1</span>. What is its velocity vector?</p>',
      options: [
        '<span class="chem">(6, 18, -9)</span>',
        '<span class="chem">(2, 6, -3)</span>',
        '<span class="chem">(42, 126, -63)</span>',
        '<span class="chem">(-6, -18, 9)</span>'
      ],
      answer: 0,
      misconception: {
        1: '<span class="chem">(2, 6, -3)</span> is the displacement vector <span class="chem">\\mathbf{AB}</span>, whose magnitude is <span class="chem">sqrt(4 + 36 + 9) = 7</span>, not <span class="chem">21</span>.',
        2: 'You multiplied <span class="chem">\\mathbf{AB}</span> by <span class="chem">21</span> without dividing by its magnitude <span class="chem">|\\mathbf{AB}| = 7</span> first.',
        3: 'That points from <span class="chem">B</span> to <span class="chem">A</span> (<span class="chem">a - b</span>) instead of from <span class="chem">A</span> to <span class="chem">B</span> (<span class="chem">b - a</span>).'
      },
      hints: [
        'Find the displacement vector <span class="chem">\\mathbf{AB} = \\mathbf{b} - \\mathbf{a} = (3 - 1, 4 - (-2), 1 - 4)</span>.',
        'Divide <span class="chem">\\mathbf{AB}</span> by its magnitude <span class="chem">|\\mathbf{AB}|</span> to get the unit direction vector, then multiply by <span class="chem">21</span>.'
      ],
      solution: '<p><span class="chem">\\mathbf{AB} = (2, 6, -3)</span> with <span class="chem">|\\mathbf{AB}| = sqrt(2^2 + 6^2 + (-3)^2) = sqrt(49) = 7</span>. Rescaling to speed 21 gives <span class="chem">\\mathbf{v} = (21 / 7)(2, 6, -3) = (6, 18, -9)</span>.</p>'
    },
    {
      id: 't3-3-q002',
      topic: 't3-3',
      level: 'ahl',
      tier: 'foundation',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.13',
      marks: 2,
      stem: '<p>Find the value of <span class="chem">k</span> for which the vectors <span class="chem">\\mathbf{u} = (k, 2, -3)</span> and <span class="chem">\\mathbf{v} = (4, k, 2)</span> are perpendicular.</p>',
      answer: 1,
      tolerance: '0.01',
      sigfigs: 1,
      hints: [
        'Two non-zero vectors are perpendicular if and only if <span class="chem">\\mathbf{u} \\cdot \\mathbf{v} = 0</span>.',
        'Compute <span class="chem">k(4) + 2(k) + (-3)(2) = 0</span> and solve for <span class="chem">k</span>.'
      ],
      solution: '<p>Setting the dot product to zero gives <span class="chem">4k + 2k - 6 = 0 => 6k = 6 => k = 1</span>.</p>'
    },
    {
      id: 't3-3-q003',
      topic: 't3-3',
      level: 'ahl',
      tier: 'foundation',
      type: 'mcq',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.14',
      marks: 2,
      stem: '<p>A 3D line has Cartesian equation <span class="chem">(4 - 2x) / 6 = (y + 1) / 3 = (z - 5) / (-2)</span>. Which of the following is a valid direction vector for this line?</p>',
      options: [
        '<span class="chem">(-3, 3, -2)</span>',
        '<span class="chem">(6, 3, -2)</span>',
        '<span class="chem">(-6, 3, -2)</span>',
        '<span class="chem">(2, -1, 5)</span>'
      ],
      answer: 0,
      misconception: {
        1: 'The numerator <span class="chem">4 - 2x</span> must be rewritten with coefficient <span class="chem">+1</span> on <span class="chem">x</span> before reading the denominator.',
        2: 'Factoring <span class="chem">-2</span> out of <span class="chem">4 - 2x</span> gives <span class="chem">-2(x - 2) / 6 = (x - 2) / (-3)</span>, so the <span class="chem">x</span>-component is <span class="chem">-3</span>, not <span class="chem">-6</span>.',
        3: '<span class="chem">(2, -1, 5)</span> is a point on the line, not its direction vector.'
      },
      hints: [
        'Rewrite <span class="chem">(4 - 2x) / 6</span> so the numerator is <span class="chem">x - x_0</span>: divide top and bottom by <span class="chem">-2</span>.'
      ],
      solution: '<p>Dividing numerator and denominator of the first fraction by <span class="chem">-2</span> gives <span class="chem">(x - 2) / (-3) = (y + 1) / 3 = (z - 5) / (-2)</span>, so a direction vector is <span class="chem">(-3, 3, -2)</span>.</p>'
    },
    {
      id: 't3-3-q004',
      topic: 't3-3',
      level: 'ahl',
      tier: 'foundation',
      type: 'multi',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.13, 3.16',
      marks: 3,
      stem: '<p>Select <strong>all</strong> statements that are always true for any 3D vectors <span class="chem">\\mathbf{u}, \\mathbf{v}, \\mathbf{w}</span>.</p>',
      options: [
        '<span class="chem">\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{v} \\cdot \\mathbf{u}</span>',
        '<span class="chem">\\mathbf{u} \\times \\mathbf{v} = -(\\mathbf{v} \\times \\mathbf{u})</span>',
        '<span class="chem">(\\mathbf{u} \\times \\mathbf{v}) \\cdot \\mathbf{u} = 0</span>',
        'If <span class="chem">\\mathbf{u} \\times \\mathbf{v} = \\mathbf{u} \\times \\mathbf{w}</span> and <span class="chem">\\mathbf{u} != 0</span>, then <span class="chem">\\mathbf{v} = \\mathbf{w}</span>'
      ],
      answer: [0, 1, 2],
      misconception: {
        3: 'Cross product does not satisfy cancellation: <span class="chem">\\mathbf{u} \\times (\\mathbf{v} - \\mathbf{w}) = 0</span> only implies <span class="chem">\\mathbf{v} - \\mathbf{w}</span> is parallel to <span class="chem">\\mathbf{u}</span>, not necessarily <span class="chem">0</span>.'
      },
      hints: [
        'Check commutativity of dot product, anti-commutativity of cross product, and orthogonality of <span class="chem">\\mathbf{u} \\times \\mathbf{v}</span> to <span class="chem">\\mathbf{u}</span>.',
        'For the fourth option, test <span class="chem">\\mathbf{u} = \\mathbf{i}, \\mathbf{v} = \\mathbf{j}, \\mathbf{w} = \\mathbf{i} + \\mathbf{j}</span>.'
      ],
      solution: '<p>The dot product is commutative (<span class="chem">\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{v} \\cdot \\mathbf{u}</span>), the cross product is anti-commutative (<span class="chem">\\mathbf{u} \\times \\mathbf{v} = -(\\mathbf{v} \\times \\mathbf{u})</span>), and <span class="chem">\\mathbf{u} \\times \\mathbf{v}</span> is perpendicular to <span class="chem">\\mathbf{u}</span> so <span class="chem">(\\mathbf{u} \\times \\mathbf{v}) \\cdot \\mathbf{u} = 0</span>. Cancellation fails for cross products.</p>'
    },
    {
      id: 't3-3-q005',
      topic: 't3-3',
      level: 'ahl',
      tier: 'foundation',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.16',
      marks: 4,
      stem: '<p>Find the exact area of triangle <span class="chem">ABC</span> with vertices <span class="chem">A(1, 0, 1)</span>, <span class="chem">B(3, 2, 0)</span>, and <span class="chem">C(1, 4, 3)</span>.</p>',
      answer: 6,
      tolerance: '0.01',
      sigfigs: 1,
      hints: [
        'Form two vectors from vertex <span class="chem">A</span>: <span class="chem">\\mathbf{AB} = (2, 2, -1)</span> and <span class="chem">\\mathbf{AC} = (0, 4, 2)</span>.',
        'Compute <span class="chem">\\mathbf{AB} \\times \\mathbf{AC}</span> and then use <span class="chem">Area = (1/2)|\\mathbf{AB} \\times \\mathbf{AC}|</span>.'
      ],
      solution: '<p><span class="chem">\\mathbf{AB} = (2, 2, -1)</span> and <span class="chem">\\mathbf{AC} = (0, 4, 2)</span>. Then <span class="chem">\\mathbf{AB} \\times \\mathbf{AC} = (4 - (-4), 0 - 4, 8 - 0) = (8, -4, 8)</span>, which has magnitude <span class="chem">sqrt(64 + 16 + 64) = 12</span>. Thus <span class="chem">Area = (1/2)(12) = 6</span>.</p>'
    },
    {
      id: 't3-3-q006',
      topic: 't3-3',
      level: 'ahl',
      tier: 'foundation',
      type: 'mcq',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.17',
      marks: 2,
      stem: '<p>Find the Cartesian equation of the plane passing through <span class="chem">P(2, -1, 3)</span> with normal vector <span class="chem">\\mathbf{n} = (4, -2, 1)</span>.</p>',
      options: [
        '<span class="chem">4x - 2y + z = 13</span>',
        '<span class="chem">4x - 2y + z = 9</span>',
        '<span class="chem">2x - y + 3z = 13</span>',
        '<span class="chem">4x - 2y + z = 7</span>'
      ],
      answer: 0,
      misconception: {
        1: 'Check the sign on <span class="chem">-2(-1)</span>: <span class="chem">4(2) - 2(-1) + 1(3) = 8 + 2 + 3 = 13</span>, not <span class="chem">8 - 2 + 3 = 9</span>.',
        2: 'The coefficients of <span class="chem">x, y, z</span> must be the normal vector <span class="chem">(4, -2, 1)</span>, not the point coordinates.',
        3: 'Check the arithmetic: <span class="chem">8 + 2 + 3 = 13</span>.'
      },
      hints: [
        'Use <span class="chem">\\mathbf{r} \\cdot \\mathbf{n} = \\mathbf{a} \\cdot \\mathbf{n}</span>: <span class="chem">4x - 2y + z = 4(2) - 2(-1) + 1(3)</span>.'
      ],
      solution: '<p>Using <span class="chem">\\mathbf{r} \\cdot \\mathbf{n} = \\mathbf{a} \\cdot \\mathbf{n}</span>: <span class="chem">4x - 2y + z = 4(2) - 2(-1) + 1(3) = 8 + 2 + 3 = 13</span>.</p>'
    },

    /* --- Exam style --- */
    {
      id: 't3-3-q007',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'order',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.15',
      marks: 4,
      stem: '<p>Arrange the steps in the correct logical order to prove that two 3D lines <span class="chem">L_1: \\mathbf{r} = \\mathbf{a_1} + lambda \\mathbf{b_1}</span> and <span class="chem">L_2: \\mathbf{r} = \\mathbf{a_2} + mu \\mathbf{b_2}</span> are <strong>skew</strong>.</p>',
      options: [
        'Show that the direction vectors <span class="chem">\\mathbf{b_1}</span> and <span class="chem">\\mathbf{b_2}</span> are not scalar multiples (<span class="chem">\\mathbf{b_1} != k \\mathbf{b_2}</span>), so the lines are not parallel.',
        'Equate the <span class="chem">x</span>, <span class="chem">y</span>, and <span class="chem">z</span> components using two distinct parameters <span class="chem">lambda</span> and <span class="chem">mu</span>.',
        'Solve the <span class="chem">x</span> and <span class="chem">y</span> equations simultaneously to obtain a unique candidate pair <span class="chem">(lambda, mu)</span>.',
        'Substitute <span class="chem">(lambda, mu)</span> into the <span class="chem">z</span>-equation and show it produces a contradiction, proving no intersection exists.'
      ],
      answer: [0, 1, 2, 3],
      hints: [
        'First rule out parallelism, then test for an intersection using two different parameters.'
      ],
      solution: '<p>To prove two lines are skew, first verify <span class="chem">\\mathbf{b_1} != k \\mathbf{b_2}</span> (not parallel), then equate coordinates with distinct parameters <span class="chem">lambda, mu</span>, solve two equations for <span class="chem">(lambda, mu)</span>, and show the third equation is inconsistent.</p>'
    },
    {
      id: 't3-3-q008',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.13',
      marks: 4,
      stem: '<p>Vectors <span class="chem">\\mathbf{u}</span> and <span class="chem">\\mathbf{v}</span> satisfy <span class="chem">|\\mathbf{u}| = 5</span>, <span class="chem">|\\mathbf{v}| = 3</span>, and <span class="chem">|\\mathbf{u} + \\mathbf{v}| = 7</span>. Find the angle <span class="chem">theta</span> between <span class="chem">\\mathbf{u}</span> and <span class="chem">\\mathbf{v}</span> in <strong>degrees</strong>.</p>',
      unit: '°',
      answer: 60,
      tolerance: '0.1',
      sigfigs: 2,
      hints: [
        'Expand <span class="chem">|\\mathbf{u} + \\mathbf{v}|^2 = (\\mathbf{u} + \\mathbf{v}) \\cdot (\\mathbf{u} + \\mathbf{v}) = |\\mathbf{u}|^2 + 2(\\mathbf{u} \\cdot \\mathbf{v}) + |\\mathbf{v}|^2</span>.',
        'Solve <span class="chem">49 = 25 + 2(\\mathbf{u} \\cdot \\mathbf{v}) + 9</span> for <span class="chem">\\mathbf{u} \\cdot \\mathbf{v}</span>, then use <span class="chem">cos theta = (\\mathbf{u} \\cdot \\mathbf{v}) / (|\\mathbf{u}||\\mathbf{v}|)</span>.'
      ],
      solution: '<p><span class="chem">49 = 5^2 + 2(\\mathbf{u} \\cdot \\mathbf{v}) + 3^2 = 34 + 2(\\mathbf{u} \\cdot \\mathbf{v}) => \\mathbf{u} \\cdot \\mathbf{v} = 7.5</span>. Therefore <span class="chem">cos theta = 7.5 / (5 × 3) = 1/2 => theta = 60°</span>.</p>'
    },
    {
      id: 't3-3-q009',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.14',
      marks: 4,
      stem: '<p>At time <span class="chem">t &gt;= 0</span> hours, boat A has position <span class="chem">r_A(t) = (1, 2, 0) + t(2, -1, 0)</span> and boat B has position <span class="chem">r_B(t) = (7, -4, 0) + t(-1, 2, 0)</span>. Find the time <span class="chem">t</span> at which the two boats collide.</p>',
      unit: 'hours',
      answer: 2,
      tolerance: '0.01',
      sigfigs: 1,
      hints: [
        'For a collision, both boats must be at the same position at the <em>same</em> time <span class="chem">t</span>: set <span class="chem">r_A(t) = r_B(t)</span>.',
        'Solve <span class="chem">1 + 2t = 7 - t</span> and verify the <span class="chem">y</span>-coordinate matches at that <span class="chem">t</span>.'
      ],
      solution: '<p>Equating <span class="chem">x</span>-coordinates: <span class="chem">1 + 2t = 7 - t => 3t = 6 => t = 2</span>. Checking <span class="chem">y</span>-coordinates at <span class="chem">t = 2</span>: <span class="chem">2 - 2 = 0</span> and <span class="chem">-4 + 4 = 0</span>. They collide at <span class="chem">(5, 0, 0)</span> when <span class="chem">t = 2</span> hours.</p>'
    },
    {
      id: 't3-3-q010',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'mcq',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.15',
      marks: 5,
      stem: '<p>Find the shortest distance from the point <span class="chem">P(1, 3, -2)</span> to the line <span class="chem">L: \\mathbf{r} = (1, 0, 1) + lambda(2, 1, -2)</span>.</p>',
      options: [
        '<span class="chem">3</span>',
        '<span class="chem">3*sqrt(2)</span>',
        '<span class="chem">9</span>',
        '<span class="chem">sqrt(5)</span>'
      ],
      answer: 0,
      misconception: {
        1: '<span class="chem">3*sqrt(2)</span> is the distance from <span class="chem">P</span> to the starting point <span class="chem">A(1, 0, 1)</span>, not the perpendicular distance to the line.',
        2: 'Remember to take the square root of <span class="chem">2^2 + (-2)^2 + 1^2 = 9</span>.',
        3: 'Check your <span class="chem">\\mathbf{PF} \\cdot \\mathbf{b} = 0</span> equation: <span class="chem">2(2 lambda) + 1(lambda - 3) - 2(3 - 2 lambda) = 9 lambda - 9 = 0 => lambda = 1</span>.'
      },
      hints: [
        'Let <span class="chem">F(1 + 2 lambda, lambda, 1 - 2 lambda)</span> be the foot of the perpendicular from <span class="chem">P</span> to <span class="chem">L</span>.',
        'Solve <span class="chem">\\mathbf{PF} \\cdot (2, 1, -2) = 0</span> for <span class="chem">lambda</span>, then find <span class="chem">|\\mathbf{PF}|</span>.'
      ],
      solution: '<p><span class="chem">\\mathbf{PF} = (2 lambda, lambda - 3, 3 - 2 lambda)</span>. Setting <span class="chem">\\mathbf{PF} \\cdot (2, 1, -2) = 0</span> gives <span class="chem">4 lambda + lambda - 3 - 6 + 4 lambda = 9 lambda - 9 = 0 => lambda = 1</span>. Thus <span class="chem">\\mathbf{PF} = (2, -2, 1)</span> and <span class="chem">|\\mathbf{PF}| = sqrt(4 + 4 + 1) = 3</span>.</p>'
    },
    {
      id: 't3-3-q011',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 3.18',
      marks: 4,
      stem: '<p>Find the acute angle <span class="chem">phi</span> (in degrees, correct to 3 significant figures) between the line <span class="chem">\\mathbf{r} = (1, 2, 0) + lambda(2, 1, 2)</span> and the plane <span class="chem">2x + 2y - z = 7</span>.</p>',
      unit: '°',
      answer: 26.3878,
      answerDisplay: '26.4°',
      tolerance: '1%',
      sigfigs: 3,
      hints: [
        'Use the line-plane angle formula <span class="chem">sin phi = |\\mathbf{b} \\cdot \\mathbf{n}| / (|\\mathbf{b}||\\mathbf{n}|)</span> with <span class="chem">b = (2, 1, 2)</span> and <span class="chem">\\mathbf{n} = (2, 2, -1)</span>.',
        'Compute <span class="chem">sin phi = |4 + 2 - 2| / (3 × 3) = 4 / 9</span>, then take <span class="chem">arcsin(4/9)</span> in degrees.'
      ],
      solution: '<p>With <span class="chem">b = (2, 1, 2)</span> (<span class="chem">|b| = 3</span>) and <span class="chem">\\mathbf{n} = (2, 2, -1)</span> (<span class="chem">|\\mathbf{n}| = 3</span>), <span class="chem">sin phi = |2(2) + 1(2) + 2(-1)| / (3 × 3) = 4/9</span>. Hence <span class="chem">phi = arcsin(4/9) ≈ 26.4°</span>.</p>'
    },
    {
      id: 't3-3-q012',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.18',
      marks: 3,
      stem: '<p>The line <span class="chem">\\mathbf{r} = (1, 2, -1) + lambda(2, -1, 3)</span> intersects the plane <span class="chem">x + 2y + z = 12</span> at point <span class="chem">Q</span>. Find the <span class="chem">z</span>-coordinate of <span class="chem">Q</span>.</p>',
      answer: 7,
      tolerance: '0.01',
      sigfigs: 1,
      hints: [
        'Substitute <span class="chem">x = 1 + 2 lambda</span>, <span class="chem">y = 2 - lambda</span>, <span class="chem">z = -1 + 3 lambda</span> into <span class="chem">x + 2y + z = 12</span>.',
        'Solve for <span class="chem">lambda</span>, then compute <span class="chem">z = -1 + 3 lambda</span>.'
      ],
      solution: '<p>Substituting gives <span class="chem">(1 + 2 lambda) + 2(2 - lambda) + (-1 + 3 lambda) = 12 => 4 + 3 lambda = 12 => lambda = 8/3</span>. Thus <span class="chem">z = -1 + 3(8/3) = 7</span>.</p>'
    },
    {
      id: 't3-3-q013',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'mcq',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.18',
      marks: 4,
      stem: '<p>Find the acute angle between the two planes <span class="chem">Pi_1: x - y + sqrt(2) z = 5</span> and <span class="chem">Pi_2: x + y + sqrt(2) z = 1</span>.</p>',
      options: [
        '<span class="chem">60°</span> (<span class="chem">pi/3</span>)',
        '<span class="chem">30°</span> (<span class="chem">pi/6</span>)',
        '<span class="chem">45°</span> (<span class="chem">pi/4</span>)',
        '<span class="chem">120°</span> (<span class="chem">2pi/3</span>)'
      ],
      answer: 0,
      misconception: {
        1: 'The angle between two planes uses <span class="chem">cos theta = |\\mathbf{n_1} \\cdot \\mathbf{n_2}| / (|\\mathbf{n_1}||\\mathbf{n_2}|) = 1/2</span>, not <span class="chem">sin theta = 1/2</span>.',
        2: 'Check <span class="chem">|\\mathbf{n_1}| = sqrt(1 + 1 + 2) = 2</span> and <span class="chem">\\mathbf{n_1} \\cdot \\mathbf{n_2} = 1 - 1 + 2 = 2</span>, giving <span class="chem">cos theta = 2 / 4 = 1/2</span>.',
        3: 'The question asks for the <em>acute</em> angle between the planes.'
      },
      hints: [
        'Extract the normal vectors <span class="chem">\\mathbf{n_1} = (1, -1, sqrt(2))</span> and <span class="chem">\\mathbf{n_2} = (1, 1, sqrt(2))</span>.',
        'Compute <span class="chem">cos theta = |\\mathbf{n_1} \\cdot \\mathbf{n_2}| / (|\\mathbf{n_1}||\\mathbf{n_2}|)</span>.'
      ],
      solution: '<p><span class="chem">|\\mathbf{n_1}| = sqrt(1 + 1 + 2) = 2</span>, <span class="chem">|\\mathbf{n_2}| = 2</span>, and <span class="chem">\\mathbf{n_1} \\cdot \\mathbf{n_2} = 1 - 1 + 2 = 2</span>. Thus <span class="chem">cos theta = 2 / (2 × 2) = 1/2 => theta = 60°</span> (<span class="chem">pi/3</span>).</p>'
    },
    {
      id: 't3-3-q014',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.16–3.18',
      marks: 7,
      stem: '<p>The points <span class="chem">A(1, 1, 0)</span>, <span class="chem">B(2, 0, 2)</span>, and <span class="chem">C(0, 2, 1)</span> lie on a plane <span class="chem">Pi</span>.</p><p>(a) Find <span class="chem">\\mathbf{AB} \\times \\mathbf{AC}</span> and hence show that the Cartesian equation of <span class="chem">Pi</span> is <span class="chem">x + y = 2</span>. <strong>[4 marks]</strong></p><p>(b) Find the coordinates of the point <span class="chem">F</span> on <span class="chem">Pi</span> that is closest to <span class="chem">P(3, 5, 2)</span>. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">\\mathbf{AB} = (1, -1, 2)</span> and <span class="chem">\\mathbf{AC} = (-1, 1, 1)</span>. Their cross product is <span class="chem">\\mathbf{AB} \\times \\mathbf{AC} = (-3, -3, 0)</span>, so <span class="chem">\\mathbf{n} = (1, 1, 0)</span> is a normal vector. Using <span class="chem">A(1, 1, 0)</span>: <span class="chem">1(x) + 1(y) + 0(z) = 1 + 1 = 2 => x + y = 2</span>.</p><p>(b) The line through <span class="chem">P</span> perpendicular to <span class="chem">Pi</span> is <span class="chem">\\mathbf{r} = (3, 5, 2) + t(1, 1, 0)</span>. Substituting into <span class="chem">x + y = 2</span> gives <span class="chem">(3 + t) + (5 + t) = 2 => 2t = -6 => t = -3</span>. Thus <span class="chem">F = (0, 2, 2)</span>.</p>',
      markscheme: [
        'A1: finds <span class="chem">\\mathbf{AB} = (1, -1, 2)</span> and <span class="chem">\\mathbf{AC} = (-1, 1, 1)</span>.',
        'M1: computes the cross product <span class="chem">\\mathbf{AB} \\times \\mathbf{AC}</span>.',
        'A1: obtains <span class="chem">\\mathbf{AB} \\times \\mathbf{AC} = (-3, -3, 0)</span> (or any non-zero multiple).',
        'A1: substitutes point <span class="chem">A</span> (or <span class="chem">B, C</span>) into <span class="chem">x + y = d</span> to find <span class="chem">d = 1 + 1 = 2</span>, so <span class="chem">x + y = 2</span> (AG).',
        'M1: writes normal line through <span class="chem">P</span> as <span class="chem">\\mathbf{r} = (3, 5, 2) + t(1, 1, 0)</span>.',
        'M1: substitutes into <span class="chem">x + y = 2</span> to find <span class="chem">t = -3</span>.',
        'A1: states <span class="chem">F(0, 2, 2)</span>.'
      ],
      hints: [
        'For part (b), the closest point <span class="chem">F</span> lies where the line through <span class="chem">P</span> with direction <span class="chem">\\mathbf{n} = (1, 1, 0)</span> meets the plane <span class="chem">Pi</span>.'
      ]
    },

    /* --- Challenge --- */
    {
      id: 't3-3-q015',
      topic: 't3-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.18',
      marks: 5,
      stem: '<p>The planes <span class="chem">Pi_1: x + y + z = 6</span> and <span class="chem">Pi_2: 2x - y + z = 3</span> intersect in a line <span class="chem">L</span>. Find the exact distance from the origin <span class="chem">O(0, 0, 0)</span> to the point where <span class="chem">L</span> crosses the <span class="chem">xy</span>-plane (<span class="chem">z = 0</span>).</p>',
      answer: 4.242640687,
      answerDisplay: '3√2',
      tolerance: { abs: 1e-6 },
      hints: [
        'At the <span class="chem">xy</span>-plane, <span class="chem">z = 0</span>. Substitute <span class="chem">z = 0</span> into both plane equations.',
        'Solve <span class="chem">x + y = 6</span> and <span class="chem">2x - y = 3</span>, then find <span class="chem">sqrt(x^2 + y^2 + 0^2)</span>.'
      ],
      solution: '<p>Setting <span class="chem">z = 0</span> gives <span class="chem">x + y = 6</span> and <span class="chem">2x - y = 3</span>. Adding gives <span class="chem">3x = 9 => x = 3</span> and <span class="chem">y = 3</span>. The intersection point is <span class="chem">(3, 3, 0)</span>, whose distance from the origin is <span class="chem">sqrt(3^2 + 3^2) = 3 sqrt(2) ≈ 4.24</span>.</p>'
    },
    {
      id: 't3-3-q016',
      topic: 't3-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.17–3.18',
      marks: 6,
      stem: '<p>Point <span class="chem">P\'</span> is the reflection of <span class="chem">P(4, -1, 3)</span> in the plane <span class="chem">x - 2y + 2z = 3</span>. Find the distance between <span class="chem">P</span> and <span class="chem">P\'</span>.</p>',
      answer: 6,
      tolerance: '0.01',
      sigfigs: 1,
      hints: [
        'The line through <span class="chem">P</span> perpendicular to the plane is <span class="chem">\\mathbf{r} = (4, -1, 3) + t(1, -2, 2)</span>.',
        'Find <span class="chem">t</span> at the foot <span class="chem">F</span> on the plane; then <span class="chem">PP\' = 2 \\mathbf{PF}</span>, so <span class="chem">|PP\'| = 2|t||(1, -2, 2)|</span>.'
      ],
      solution: '<p>Substituting <span class="chem">(4 + t, -1 - 2t, 3 + 2t)</span> into <span class="chem">x - 2y + 2z = 3</span> gives <span class="chem">(4 + t) - 2(-1 - 2t) + 2(3 + 2t) = 3 => 12 + 9t = 3 => t = -1</span>. Thus <span class="chem">\\mathbf{PF} = (-1, 2, -2)</span> has length <span class="chem">3</span>, and the distance <span class="chem">|PP\'| = 2 × 3 = 6</span>.</p>'
    },
    {
      id: 't3-3-q017',
      topic: 't3-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'mcq',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.18',
      marks: 5,
      stem: '<p>The system of three planes <span class="chem">x + y + z = 3</span>, <span class="chem">2x - y + z = 2</span>, and <span class="chem">x + 4y + k z = m</span> has infinitely many solutions (the planes meet along a common line). Find the values of <span class="chem">k</span> and <span class="chem">m</span>.</p>',
      options: [
        '<span class="chem">k = 2, m = 7</span>',
        '<span class="chem">k = 2, m = 5</span>',
        '<span class="chem">k = 1, m = 7</span>',
        '<span class="chem">k = -2, m = 7</span>'
      ],
      answer: 0,
      misconception: {
        1: 'If <span class="chem">k = 2</span> and <span class="chem">m != 7</span>, the planes form a triangular prism with <em>no</em> common solution.',
        2: 'Eliminating <span class="chem">x</span> gives <span class="chem">3y + z = 4</span> and <span class="chem">3y + (k - 1)z = m - 3</span>, so <span class="chem">k - 1 = 1 => k = 2</span>.',
        3: 'Check the sign on <span class="chem">R_2 - 2 R_1</span>: <span class="chem">(1 - 2)z = -z</span>, so <span class="chem">-3y - z = -4</span> becomes <span class="chem">3y + z = 4</span>.'
      },
      hints: [
        'Eliminate <span class="chem">x</span> from the second and third equations using the first equation: <span class="chem">R_2 - 2 R_1</span> and <span class="chem">R_3 - R_1</span>.',
        'For infinitely many solutions, the two resulting equations in <span class="chem">y</span> and <span class="chem">z</span> must be identical.'
      ],
      solution: '<p><span class="chem">R_2 - 2 R_1</span> gives <span class="chem">-3y - z = -4</span>, i.e., <span class="chem">3y + z = 4</span>. <span class="chem">R_3 - R_1</span> gives <span class="chem">3y + (k - 1)z = m - 3</span>. Matching coefficients yields <span class="chem">k - 1 = 1 => k = 2</span> and <span class="chem">m - 3 = 4 => m = 7</span>.</p>'
    },
    {
      id: 't3-3-q018',
      topic: 't3-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.15–3.16',
      marks: 8,
      stem: '<p>Consider the two lines <span class="chem">L_1: \\mathbf{r} = (1, 0, 2) + lambda(1, -1, 1)</span> and <span class="chem">L_2: \\mathbf{r} = (0, 3, 1) + mu(2, 1, -1)</span>.</p><p>(a) Show that <span class="chem">L_1</span> and <span class="chem">L_2</span> are skew. <strong>[3 marks]</strong></p><p>(b) Find a unit vector <span class="chem">\\mathbf{n̂}</span> perpendicular to both <span class="chem">L_1</span> and <span class="chem">L_2</span>, and hence find the exact shortest distance between <span class="chem">L_1</span> and <span class="chem">L_2</span>. <strong>[5 marks]</strong></p>',
      answer: '<p>(a) Direction vectors <span class="chem">(1, -1, 1)</span> and <span class="chem">(2, 1, -1)</span> are not scalar multiples (not parallel). Equating <span class="chem">x</span> and <span class="chem">y</span>: <span class="chem">1 + lambda = 2 mu</span> and <span class="chem">-lambda = 3 + mu</span>. Adding gives <span class="chem">1 = 3 + 3 mu => mu = -2/3, lambda = -7/3</span>. Checking <span class="chem">z</span>: <span class="chem">2 + (-7/3) = -1/3 != 1 - (-2/3) = 5/3</span>. Thus <span class="chem">L_1</span> and <span class="chem">L_2</span> are skew.</p><p>(b) <span class="chem">(1, -1, 1) \\times (2, 1, -1) = (0, 3, 3)</span>, so <span class="chem">\\mathbf{n̂} = (0, 1/sqrt(2), 1/sqrt(2))</span>. Taking <span class="chem">A_1(1, 0, 2)</span> on <span class="chem">L_1</span> and <span class="chem">A_2(0, 3, 1)</span> on <span class="chem">L_2</span>, <span class="chem">\\mathbf{A_1A_2} = (-1, 3, -1)</span>. The shortest distance is <span class="chem">|\\mathbf{A_1A_2} \\cdot \\mathbf{n̂}| = |0 + 3 - 1| / sqrt(2) = 2 / sqrt(2) = sqrt(2)</span>.</p>',
      markscheme: [
        'R1: notes direction vectors <span class="chem">(1, -1, 1)</span> and <span class="chem">(2, 1, -1)</span> are not scalar multiples.',
        'M1: equates <span class="chem">x, y</span> coordinates and solves for <span class="chem">lambda = -7/3, mu = -2/3</span>.',
        'A1: shows <span class="chem">z</span>-coordinates disagree (<span class="chem">-1/3 != 5/3</span>) to conclude lines are skew.',
        'M1: computes <span class="chem">\\mathbf{b_1} \\times \\mathbf{b_2} = (0, 3, 3)</span>.',
        'A1: normalizes to <span class="chem">\\mathbf{n̂} = (0, 1/sqrt(2), 1/sqrt(2))</span>.',
        'M1: forms <span class="chem">\\mathbf{A_1A_2} = (-1, 3, -1)</span> and projects onto <span class="chem">\\mathbf{n̂}</span> via <span class="chem">|\\mathbf{A_1A_2} \\cdot \\mathbf{n̂}|</span>.',
        'A1: obtains <span class="chem">|\\mathbf{A_1A_2} \\cdot \\mathbf{n̂}| = |0 + 3 - 1| / sqrt(2) = 2 / sqrt(2)</span>.',
        'A1: simplifies the shortest distance to <span class="chem">sqrt(2)</span>.'
      ],
      hints: [
        'In part (b), the shortest segment between two skew lines is perpendicular to both lines, so it is parallel to <span class="chem">\\mathbf{b_1} \\times \\mathbf{b_2}</span>.',
        'Projecting any connecting vector <span class="chem">\\mathbf{A_1A_2}</span> onto the unit common normal <span class="chem">\\mathbf{n̂}</span> gives the shortest distance <span class="chem">|\\mathbf{A_1A_2} \\cdot \\mathbf{n̂}|</span>.'
      ]
    }
  ]);
})();
