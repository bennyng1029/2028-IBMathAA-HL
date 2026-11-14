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
      marks: 2,
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
      syllabus: 'AHL 3.13–3.14',
      marks: 2,
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
      answer: 26.387799961,
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
      marks: 2,
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
      exact: true,
      answerInput: '3*sqrt(2)',
      hints: [
        'Decode: you do not need the whole line <span class="chem">L</span>. The point where <span class="chem">L</span> crosses the <span class="chem">xy</span>-plane lies on both planes and has <span class="chem">z = 0</span>.',
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
        'Decode: the reflection <span class="chem">P\'</span> is as far behind the plane as <span class="chem">P</span> is in front of it, so <span class="chem">PP\'</span> is twice the perpendicular distance from <span class="chem">P</span> to the plane.',
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
      marks: 2,
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
        'Decode: "meet along a common line" means the system has infinitely many solutions, so after eliminating <span class="chem">x</span> the two remaining equations must be the same equation.',
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
        'Decode: "skew" means not parallel and not intersecting, so part (a) must rule out both. In part (b) the shortest distance is measured along the common perpendicular.',
        'In part (b), the shortest segment between two skew lines is perpendicular to both lines, so it is parallel to <span class="chem">\\mathbf{b_1} \\times \\mathbf{b_2}</span>.',
        'Projecting any connecting vector <span class="chem">\\mathbf{A_1A_2}</span> onto the unit common normal <span class="chem">\\mathbf{n̂}</span> gives the shortest distance <span class="chem">|\\mathbf{A_1A_2} \\cdot \\mathbf{n̂}|</span>.'
      ]
    },

    /* --- Added 2026-11: Paper 1 (no GDC) --- */
    {
      id: 't3-3-q019',
      topic: 't3-3',
      level: 'ahl',
      tier: 'foundation',
      type: 'mcq',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.12',
      marks: 2,
      stem: '<p>Let <span class="chem">\\mathbf{v} = 2\\mathbf{i} - 6\\mathbf{j} + 3\\mathbf{k}</span>. Which of the following is the unit vector in the same direction as <span class="chem">\\mathbf{v}</span>?</p>',
      options: [
        '<span class="chem">(1/7)(2\\mathbf{i} - 6\\mathbf{j} + 3\\mathbf{k})</span>',
        '<span class="chem">(1/49)(2\\mathbf{i} - 6\\mathbf{j} + 3\\mathbf{k})</span>',
        '<span class="chem">(1/11)(2\\mathbf{i} - 6\\mathbf{j} + 3\\mathbf{k})</span>',
        '<span class="chem">-(1/7)(2\\mathbf{i} - 6\\mathbf{j} + 3\\mathbf{k})</span>'
      ],
      answer: 0,
      misconception: {
        1: 'You divided by <span class="chem">|\\mathbf{v}|^2 = 49</span> instead of by <span class="chem">|\\mathbf{v}| = 7</span>. This vector has length <span class="chem">1/7</span>, not 1.',
        2: 'You divided by <span class="chem">2 + 6 + 3 = 11</span>, the sum of the sizes of the components. The magnitude is <span class="chem">sqrt(2^2 + 6^2 + 3^2) = 7</span>.',
        3: 'This has length 1 but points the opposite way to <span class="chem">\\mathbf{v}</span>; the question asks for the same direction.'
      },
      hints: [
        'A unit vector in the direction of <span class="chem">\\mathbf{v}</span> is <span class="chem">\\mathbf{v} / |\\mathbf{v}|</span>.',
        'Find <span class="chem">|\\mathbf{v}| = sqrt(2^2 + (-6)^2 + 3^2)</span>.'
      ],
      solution: '<p><span class="chem">|\\mathbf{v}| = sqrt(4 + 36 + 9) = sqrt(49) = 7</span>, so the unit vector is <span class="chem">\\mathbf{v} / 7 = (1/7)(2\\mathbf{i} - 6\\mathbf{j} + 3\\mathbf{k})</span>.</p>'
    },
    {
      id: 't3-3-q020',
      topic: 't3-3',
      level: 'ahl',
      tier: 'foundation',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.12–3.13',
      marks: 2,
      stem: '<p>The vectors <span class="chem">\\mathbf{a} = (2, -3, p)</span> and <span class="chem">\\mathbf{b} = (-6, 9, 12)</span> are parallel. Find the value of <span class="chem">p</span>.</p>',
      answer: -4,
      hints: [
        'Parallel vectors are scalar multiples of each other: <span class="chem">\\mathbf{b} = k\\mathbf{a}</span> for some scalar <span class="chem">k</span>.',
        'Compare the <span class="chem">x</span>-components to find <span class="chem">k</span>, then use the <span class="chem">z</span>-components.'
      ],
      solution: '<p>From the <span class="chem">x</span>- and <span class="chem">y</span>-components, <span class="chem">\\mathbf{b} = -3\\mathbf{a}</span> (<span class="chem">-6 = -3(2)</span>, <span class="chem">9 = -3(-3)</span>). Then <span class="chem">12 = -3p</span>, so <span class="chem">p = -4</span>.</p>'
    },
    {
      id: 't3-3-q021',
      topic: 't3-3',
      level: 'ahl',
      tier: 'foundation',
      type: 'mcq',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.16–3.17',
      marks: 2,
      stem: '<p>A plane <span class="chem">Π</span> has vector equation <span class="chem">\\mathbf{r} = (1, 0, 2) + lambda(1, 1, 0) + mu(0, 1, -1)</span>. Which of the following is a normal vector to <span class="chem">Π</span>?</p>',
      options: [
        '<span class="chem">(-1, 1, 1)</span>',
        '<span class="chem">(1, 1, 1)</span>',
        '<span class="chem">(1, 2, -1)</span>',
        '<span class="chem">(1, 0, 2)</span>'
      ],
      answer: 0,
      misconception: {
        1: 'Check the first component of the cross product: <span class="chem">(1)(-1) - (0)(1) = -1</span>, not <span class="chem">+1</span>. Test your answer: <span class="chem">(1, 1, 1) \\cdot (0, 1, -1) = 0</span> but <span class="chem">(1, 1, 1) \\cdot (1, 1, 0) = 2 != 0</span>.',
        2: 'You added the two direction vectors. Their sum lies <em>in</em> the plane, so it cannot be a normal.',
        3: '<span class="chem">(1, 0, 2)</span> is the position vector of a point on the plane, not a normal.'
      },
      hints: [
        'A normal vector is perpendicular to both direction vectors, so use <span class="chem">(1, 1, 0) \\times (0, 1, -1)</span>.',
        'Check your answer: its scalar product with each direction vector must be 0.'
      ],
      solution: '<p><span class="chem">(1, 1, 0) \\times (0, 1, -1) = ((1)(-1) - (0)(1), (0)(0) - (1)(-1), (1)(1) - (1)(0)) = (-1, 1, 1)</span>. Check: <span class="chem">(-1, 1, 1) \\cdot (1, 1, 0) = 0</span> and <span class="chem">(-1, 1, 1) \\cdot (0, 1, -1) = 0</span>.</p>'
    },
    {
      id: 't3-3-q022',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.12, 3.13, 3.16',
      marks: 9,
      stem: '<p>The points <span class="chem">A(1, 2, -1)</span>, <span class="chem">B(4, 3, 1)</span>, <span class="chem">C(6, 0, 2)</span> and <span class="chem">D(3, -1, 0)</span> are the vertices of a quadrilateral <span class="chem">ABCD</span>.</p><p>(a) Show that <span class="chem">ABCD</span> is a parallelogram. <strong>[2 marks]</strong></p><p>(b) Show that <span class="chem">ABCD</span> is a rhombus. <strong>[2 marks]</strong></p><p>(c) Verify that the diagonals <span class="chem">AC</span> and <span class="chem">BD</span> are perpendicular. <strong>[2 marks]</strong></p><p>(d) Find the exact area of <span class="chem">ABCD</span>. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">\\mathbf{AB} = (3, 1, 2)</span> and <span class="chem">\\mathbf{DC} = (6 - 3, 0 + 1, 2 - 0) = (3, 1, 2)</span>. Since <span class="chem">\\mathbf{AB} = \\mathbf{DC}</span>, the sides <span class="chem">AB</span> and <span class="chem">DC</span> are parallel and equal in length, so <span class="chem">ABCD</span> is a parallelogram.</p><p>(b) <span class="chem">\\mathbf{AD} = (2, -3, 1)</span>. <span class="chem">|\\mathbf{AB}| = sqrt(9 + 1 + 4) = sqrt(14)</span> and <span class="chem">|\\mathbf{AD}| = sqrt(4 + 9 + 1) = sqrt(14)</span>. A parallelogram with two adjacent sides equal is a rhombus.</p><p>(c) <span class="chem">\\mathbf{AC} = (5, -2, 3)</span> and <span class="chem">\\mathbf{BD} = (-1, -4, -1)</span>, so <span class="chem">\\mathbf{AC} \\cdot \\mathbf{BD} = -5 + 8 - 3 = 0</span>: the diagonals are perpendicular.</p><p>(d) <span class="chem">\\mathbf{AB} \\times \\mathbf{AD} = ((1)(1) - (2)(-3), (2)(2) - (3)(1), (3)(-3) - (1)(2)) = (7, 1, -11)</span>. Area <span class="chem">= |\\mathbf{AB} \\times \\mathbf{AD}| = sqrt(49 + 1 + 121) = sqrt(171) = 3 sqrt(19)</span>.</p>',
      markscheme: [
        'M1: finds <span class="chem">\\mathbf{AB} = (3, 1, 2)</span> and <span class="chem">\\mathbf{DC} = (3, 1, 2)</span> (or <span class="chem">\\mathbf{AD}</span> and <span class="chem">\\mathbf{BC}</span>).',
        'R1: states that a pair of opposite sides is equal and parallel, so <span class="chem">ABCD</span> is a parallelogram (AG).',
        'A1: <span class="chem">|\\mathbf{AB}| = sqrt(14)</span> and <span class="chem">|\\mathbf{AD}| = sqrt(14)</span>.',
        'R1: adjacent sides of the parallelogram are equal, so it is a rhombus (AG).',
        'M1: finds <span class="chem">\\mathbf{AC} = (5, -2, 3)</span> and <span class="chem">\\mathbf{BD} = (-1, -4, -1)</span> and forms their scalar product.',
        'A1: <span class="chem">\\mathbf{AC} \\cdot \\mathbf{BD} = -5 + 8 - 3 = 0</span>, so the diagonals are perpendicular (AG).',
        'M1: uses area <span class="chem">= |\\mathbf{AB} \\times \\mathbf{AD}|</span> (or <span class="chem">(1/2)|\\mathbf{AC}||\\mathbf{BD}|</span>).',
        'A1: <span class="chem">\\mathbf{AB} \\times \\mathbf{AD} = (7, 1, -11)</span> (or <span class="chem">|\\mathbf{AC}| = sqrt(38)</span>, <span class="chem">|\\mathbf{BD}| = sqrt(18)</span>).',
        'A1: area <span class="chem">= sqrt(171) = 3 sqrt(19)</span>.'
      ],
      hints: [
        'A quadrilateral is a parallelogram when one pair of opposite sides is given by the <em>same</em> vector, e.g. <span class="chem">\\mathbf{AB} = \\mathbf{DC}</span>.',
        'A rhombus is a parallelogram with two adjacent sides of equal length.',
        'The area of a parallelogram with adjacent sides <span class="chem">\\mathbf{AB}</span> and <span class="chem">\\mathbf{AD}</span> is <span class="chem">|\\mathbf{AB} \\times \\mathbf{AD}|</span>.'
      ]
    },
    {
      id: 't3-3-q023',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.12–3.13',
      marks: 4,
      stem: '<p>The points <span class="chem">A</span> and <span class="chem">B</span> are the ends of a diameter of a circle with centre <span class="chem">O</span>, and <span class="chem">P</span> is any other point on the circle. Let <span class="chem">\\mathbf{OA} = \\mathbf{a}</span> and <span class="chem">\\mathbf{OP} = \\mathbf{p}</span>.</p><p>Use vectors to prove that angle <span class="chem">APB</span> is a right angle. <strong>[4 marks]</strong></p>',
      answer: '<p>Since <span class="chem">AB</span> is a diameter through <span class="chem">O</span>, <span class="chem">\\mathbf{OB} = -\\mathbf{a}</span>. All radii are equal, so <span class="chem">|\\mathbf{p}| = |\\mathbf{a}|</span>.</p><p><span class="chem">\\mathbf{PA} = \\mathbf{a} - \\mathbf{p}</span> and <span class="chem">\\mathbf{PB} = -\\mathbf{a} - \\mathbf{p}</span>.</p><p><span class="chem">\\mathbf{PA} \\cdot \\mathbf{PB} = (\\mathbf{a} - \\mathbf{p}) \\cdot (-\\mathbf{a} - \\mathbf{p}) = -\\mathbf{a} \\cdot \\mathbf{a} - \\mathbf{a} \\cdot \\mathbf{p} + \\mathbf{p} \\cdot \\mathbf{a} + \\mathbf{p} \\cdot \\mathbf{p} = |\\mathbf{p}|^2 - |\\mathbf{a}|^2 = 0</span>.</p><p>Both vectors are non-zero (P is not A or B), so <span class="chem">\\mathbf{PA}</span> is perpendicular to <span class="chem">\\mathbf{PB}</span> and angle <span class="chem">APB = 90°</span>.</p>',
      markscheme: [
        'A1: writes <span class="chem">\\mathbf{OB} = -\\mathbf{a}</span> and <span class="chem">|\\mathbf{p}| = |\\mathbf{a}|</span> (equal radii).',
        'A1: <span class="chem">\\mathbf{PA} = \\mathbf{a} - \\mathbf{p}</span> and <span class="chem">\\mathbf{PB} = -\\mathbf{a} - \\mathbf{p}</span>.',
        'M1: expands <span class="chem">\\mathbf{PA} \\cdot \\mathbf{PB}</span>, using <span class="chem">\\mathbf{a} \\cdot \\mathbf{p} = \\mathbf{p} \\cdot \\mathbf{a}</span>, to get <span class="chem">|\\mathbf{p}|^2 - |\\mathbf{a}|^2</span>.',
        'R1: this is 0, so the (non-zero) vectors are perpendicular and angle <span class="chem">APB</span> is a right angle (AG).'
      ],
      hints: [
        'Decode: "prove the angle is a right angle" means "show that the scalar product of <span class="chem">\\mathbf{PA}</span> and <span class="chem">\\mathbf{PB}</span> is zero".',
        'Write <span class="chem">\\mathbf{OB}</span> in terms of <span class="chem">\\mathbf{a}</span>, and use the fact that every radius has the same length.',
        'Expand <span class="chem">(\\mathbf{a} - \\mathbf{p}) \\cdot (-\\mathbf{a} - \\mathbf{p})</span> like a bracket; remember <span class="chem">\\mathbf{a} \\cdot \\mathbf{a} = |\\mathbf{a}|^2</span>.'
      ]
    },
    {
      id: 't3-3-q024',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.14',
      marks: 5,
      stem: '<p>The line <span class="chem">L_1</span> has Cartesian equations <span class="chem">x - 3 = (y + 2)/(-1)</span>, <span class="chem">z = 4</span>. The line <span class="chem">L_2</span> has Cartesian equations <span class="chem">1 - x = z + 5</span>, <span class="chem">y = 2</span>.</p><p>Find the acute angle between <span class="chem">L_1</span> and <span class="chem">L_2</span>, in degrees.</p>',
      unit: '°',
      answer: 60,
      hints: [
        'Decode: the angle between two lines is the angle between their direction vectors, so first read a direction vector off each Cartesian form. A coordinate that is constant (such as <span class="chem">z = 4</span>) has direction component 0.',
        'Rewrite <span class="chem">1 - x = z + 5</span> as <span class="chem">(x - 1)/(-1) = (z + 5)/1</span>. This gives <span class="chem">\\mathbf{b_2} = (-1, 0, 1)</span>, and <span class="chem">\\mathbf{b_1} = (1, -1, 0)</span>.',
        'Use <span class="chem">cos theta = |\\mathbf{b_1} \\cdot \\mathbf{b_2}| / (|\\mathbf{b_1}||\\mathbf{b_2}|)</span>. The modulus makes the angle acute.'
      ],
      solution: '<p><strong>Decode:</strong> the angle between the lines is the angle between their direction vectors, taken acute.</p><p><span class="chem">L_1</span>: <span class="chem">(x - 3)/1 = (y + 2)/(-1)</span> with <span class="chem">z</span> fixed, so <span class="chem">\\mathbf{b_1} = (1, -1, 0)</span>. <span class="chem">L_2</span>: <span class="chem">(x - 1)/(-1) = (z + 5)/1</span> with <span class="chem">y</span> fixed, so <span class="chem">\\mathbf{b_2} = (-1, 0, 1)</span>.</p><p><span class="chem">\\mathbf{b_1} \\cdot \\mathbf{b_2} = -1</span> and <span class="chem">|\\mathbf{b_1}| = |\\mathbf{b_2}| = sqrt(2)</span>, so the angle between the vectors satisfies <span class="chem">cos theta = -1/2</span>, i.e. <span class="chem">120°</span>. The acute angle between the lines is <span class="chem">180° - 120° = 60°</span>.</p>'
    },
    {
      id: 't3-3-q025',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.14, 3.15, 3.17',
      marks: 12,
      stem: '<p>The lines <span class="chem">L_1</span> and <span class="chem">L_2</span> have equations <span class="chem">L_1: \\mathbf{r} = (1, -3, 4) + lambda(1, 2, -1)</span> and <span class="chem">L_2: \\mathbf{r} = (-1, 3, 0) + mu(2, -1, 1)</span>.</p><p>(a) Show that <span class="chem">L_1</span> and <span class="chem">L_2</span> intersect, and find the coordinates of their point of intersection <span class="chem">P</span>. <strong>[5 marks]</strong></p><p>(b) Find the acute angle between <span class="chem">L_1</span> and <span class="chem">L_2</span>, giving your answer in the form <span class="chem">arccos(k)</span> where <span class="chem">k \\in \\mathbb{Q}</span>. <strong>[3 marks]</strong></p><p>(c) Find the Cartesian equation of the plane that contains both lines. <strong>[4 marks]</strong></p>',
      answer: '<p>(a) Equate components: <span class="chem">1 + lambda = -1 + 2mu</span>, <span class="chem">-3 + 2lambda = 3 - mu</span>, <span class="chem">4 - lambda = mu</span>. Substituting <span class="chem">mu = 4 - lambda</span> into the first equation: <span class="chem">1 + lambda = 7 - 2lambda => lambda = 2</span>, <span class="chem">mu = 2</span>. Check the second equation: <span class="chem">-3 + 4 = 1</span> and <span class="chem">3 - 2 = 1</span>. All three equations hold, so the lines intersect at <span class="chem">P(3, 1, 2)</span>.</p><p>(b) <span class="chem">(1, 2, -1) \\cdot (2, -1, 1) = 2 - 2 - 1 = -1</span>, and both directions have magnitude <span class="chem">sqrt(6)</span>. So <span class="chem">cos theta = |-1| / 6 = 1/6</span> and the acute angle is <span class="chem">arccos(1/6)</span>.</p><p>(c) <span class="chem">\\mathbf{n} = (1, 2, -1) \\times (2, -1, 1) = ((2)(1) - (-1)(-1), (-1)(2) - (1)(1), (1)(-1) - (2)(2)) = (1, -3, -5)</span>. Using <span class="chem">P(3, 1, 2)</span>: <span class="chem">3 - 3 - 10 = -10</span>, so the plane is <span class="chem">x - 3y - 5z = -10</span>.</p>',
      markscheme: [
        'M1: equates the three components using different parameters <span class="chem">lambda</span> and <span class="chem">mu</span>.',
        'M1: solves two of the equations simultaneously.',
        'A1: <span class="chem">lambda = 2</span>, <span class="chem">mu = 2</span>.',
        'R1: verifies that the third equation is also satisfied, so the lines intersect.',
        'A1: <span class="chem">P(3, 1, 2)</span>.',
        'M1: uses the scalar product of the two direction vectors.',
        'A1: scalar product <span class="chem">-1</span> and magnitudes <span class="chem">sqrt(6)</span>, <span class="chem">sqrt(6)</span>.',
        'A1: acute angle <span class="chem">arccos(1/6)</span> (the modulus is taken, so not <span class="chem">arccos(-1/6)</span>).',
        'M1: finds a normal as the vector product of the two direction vectors.',
        'A1: <span class="chem">\\mathbf{n} = (1, -3, -5)</span> (or any non-zero multiple).',
        'M1: substitutes a point on either line (e.g. <span class="chem">P</span>) to find the constant.',
        'A1: <span class="chem">x - 3y - 5z = -10</span> (or equivalent).'
      ],
      hints: [
        'Use different parameters for the two lines. Solve two equations, then check the third.',
        'For the acute angle, take the modulus of the scalar product.',
        'Two intersecting lines lie in one plane. Its normal is perpendicular to both direction vectors.'
      ]
    },
    {
      id: 't3-3-q026',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.16–3.17',
      marks: 4,
      stem: '<p>The plane <span class="chem">Π</span> has vector equation <span class="chem">\\mathbf{r} = (2, 1, -1) + lambda(1, 0, 3) + mu(-1, 2, 1)</span>, where <span class="chem">lambda, mu \\in \\mathbb{R}</span>.</p><p>The plane <span class="chem">Π</span> meets the <span class="chem">z</span>-axis at the point <span class="chem">(0, 0, c)</span>. Find the value of <span class="chem">c</span>.</p>',
      answer: -9,
      hints: [
        'Decode: the vector form is hard to use directly. Convert it to Cartesian form <span class="chem">ax + by + cz = d</span>, then put <span class="chem">x = y = 0</span>.',
        'A normal is <span class="chem">(1, 0, 3) \\times (-1, 2, 1)</span>.',
        'Simplify the normal to <span class="chem">(3, 2, -1)</span> and substitute the point <span class="chem">(2, 1, -1)</span> to find <span class="chem">d</span>.'
      ],
      solution: '<p><span class="chem">(1, 0, 3) \\times (-1, 2, 1) = ((0)(1) - (3)(2), (3)(-1) - (1)(1), (1)(2) - (0)(-1)) = (-6, -4, 2)</span>, so take <span class="chem">\\mathbf{n} = (3, 2, -1)</span>. Then <span class="chem">\\mathbf{r} \\cdot \\mathbf{n} = (2, 1, -1) \\cdot (3, 2, -1) = 6 + 2 + 1 = 9</span>, giving <span class="chem">3x + 2y - z = 9</span>. On the <span class="chem">z</span>-axis <span class="chem">x = y = 0</span>, so <span class="chem">-z = 9</span> and <span class="chem">c = -9</span>.</p>'
    },
    {
      id: 't3-3-q027',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.17–3.18',
      marks: 5,
      stem: '<p>Find the exact shortest distance from the point <span class="chem">P(3, -2, 5)</span> to the plane <span class="chem">2x - y + 2z = 4</span>.</p>',
      answer: 4.6666666667,
      exact: true,
      answerInput: '14/3',
      answerDisplay: '14/3',
      hints: [
        'The shortest distance is measured along the normal. The line through <span class="chem">P</span> perpendicular to the plane is <span class="chem">\\mathbf{r} = (3, -2, 5) + s(2, -1, 2)</span>.',
        'Substitute this line into the plane equation to find <span class="chem">s</span> at the foot of the perpendicular.',
        'The distance is <span class="chem">|s| × |(2, -1, 2)| = 3|s|</span>.'
      ],
      solution: '<p>Substitute <span class="chem">(3 + 2s, -2 - s, 5 + 2s)</span> into <span class="chem">2x - y + 2z = 4</span>: <span class="chem">6 + 4s + 2 + s + 10 + 4s = 4 => 18 + 9s = 4 => s = -14/9</span>. The distance is <span class="chem">|s| × |(2, -1, 2)| = (14/9)(3) = 14/3</span>.</p>'
    },
    {
      id: 't3-3-q028',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.16, 3.18',
      marks: 9,
      stem: '<p>The planes <span class="chem">Π_1: x + 2y - z = 3</span> and <span class="chem">Π_2: 3x - y + 2z = 2</span> meet in the line <span class="chem">L</span>.</p><p>(a) Find a vector equation of <span class="chem">L</span>. <strong>[5 marks]</strong></p><p>(b) Find the coordinates of the point where <span class="chem">L</span> meets the plane <span class="chem">Π_3: x - y + z = 2</span>. <strong>[3 marks]</strong></p><p>(c) Hence write down the solution of the system of equations formed by <span class="chem">Π_1</span>, <span class="chem">Π_2</span> and <span class="chem">Π_3</span>. <strong>[1 mark]</strong></p>',
      answer: '<p>(a) The direction of <span class="chem">L</span> is perpendicular to both normals: <span class="chem">(1, 2, -1) \\times (3, -1, 2) = ((2)(2) - (-1)(-1), (-1)(3) - (1)(2), (1)(-1) - (2)(3)) = (3, -5, -7)</span>. Put <span class="chem">z = 0</span>: <span class="chem">x + 2y = 3</span> and <span class="chem">3x - y = 2</span>, so <span class="chem">x = 1, y = 1</span>. Hence <span class="chem">L: \\mathbf{r} = (1, 1, 0) + t(3, -5, -7)</span>.</p><p>(b) Substitute <span class="chem">(1 + 3t, 1 - 5t, -7t)</span> into <span class="chem">Π_3</span>: <span class="chem">1 + 3t - 1 + 5t - 7t = 2 => t = 2</span>. The point is <span class="chem">(7, -9, -14)</span>.</p><p>(c) The three planes meet at a single point, so the unique solution is <span class="chem">x = 7, y = -9, z = -14</span>.</p>',
      markscheme: [
        'M1: finds the direction as <span class="chem">\\mathbf{n_1} \\times \\mathbf{n_2}</span> (or eliminates a variable).',
        'A1: direction <span class="chem">(3, -5, -7)</span> (or any non-zero multiple).',
        'M1: sets one coordinate (e.g. <span class="chem">z = 0</span>) and solves the two remaining equations.',
        'A1: a point on <span class="chem">L</span>, e.g. <span class="chem">(1, 1, 0)</span>.',
        'A1: <span class="chem">\\mathbf{r} = (1, 1, 0) + t(3, -5, -7)</span> (must have <span class="chem">\\mathbf{r} =</span>).',
        'M1: substitutes the parametric form of <span class="chem">L</span> into <span class="chem">Π_3</span>.',
        'A1: <span class="chem">t = 2</span> (for their line).',
        'A1: <span class="chem">(7, -9, -14)</span>.',
        'A1: <span class="chem">x = 7, y = -9, z = -14</span>.'
      ],
      hints: [
        'The line of intersection is perpendicular to both normal vectors.',
        'To find a point on <span class="chem">L</span>, choose a convenient value for one coordinate and solve for the other two.',
        'A point on all three planes is a solution of all three equations.'
      ]
    },
    {
      id: 't3-3-q029',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.13, 3.16',
      marks: 4,
      stem: '<p>The vectors <span class="chem">\\mathbf{u}</span> and <span class="chem">\\mathbf{v}</span> satisfy <span class="chem">|\\mathbf{u}| = 4</span>, <span class="chem">|\\mathbf{v}| = 5</span> and <span class="chem">\\mathbf{u} \\cdot \\mathbf{v} = 12</span>. Find <span class="chem">|\\mathbf{u} \\times \\mathbf{v}|</span>.</p>',
      answer: 16,
      hints: [
        'Decode: you are not given the components, so you must link the two products through the angle <span class="chem">theta</span> between the vectors.',
        'Use <span class="chem">\\mathbf{u} \\cdot \\mathbf{v} = |\\mathbf{u}||\\mathbf{v}| cos theta</span> to find <span class="chem">cos theta</span>, then <span class="chem">sin theta</span> (positive, since <span class="chem">0 &lt;= theta &lt;= 180°</span>).',
        'Then <span class="chem">|\\mathbf{u} \\times \\mathbf{v}| = |\\mathbf{u}||\\mathbf{v}| sin theta</span>.'
      ],
      solution: '<p><span class="chem">cos theta = 12 / (4 × 5) = 3/5</span>, so <span class="chem">sin theta = 4/5</span> (sine is non-negative for <span class="chem">0 &lt;= theta &lt;= 180°</span>). Then <span class="chem">|\\mathbf{u} \\times \\mathbf{v}| = 4 × 5 × 4/5 = 16</span>. (Equivalently, <span class="chem">|\\mathbf{u} \\times \\mathbf{v}|^2 = |\\mathbf{u}|^2|\\mathbf{v}|^2 - (\\mathbf{u} \\cdot \\mathbf{v})^2 = 400 - 144 = 256</span>.)</p>'
    },
    {
      id: 't3-3-q030',
      topic: 't3-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.12',
      marks: 8,
      stem: '<p>A garden designer draws any quadrilateral flower bed <span class="chem">ABCD</span> (not necessarily flat or regular) and marks the midpoints <span class="chem">P</span>, <span class="chem">Q</span>, <span class="chem">R</span> and <span class="chem">S</span> of <span class="chem">AB</span>, <span class="chem">BC</span>, <span class="chem">CD</span> and <span class="chem">DA</span>. She claims that a path joining <span class="chem">P</span>, <span class="chem">Q</span>, <span class="chem">R</span>, <span class="chem">S</span> in order always forms a parallelogram. Let <span class="chem">A</span>, <span class="chem">B</span>, <span class="chem">C</span>, <span class="chem">D</span> have position vectors <span class="chem">\\mathbf{a}</span>, <span class="chem">\\mathbf{b}</span>, <span class="chem">\\mathbf{c}</span>, <span class="chem">\\mathbf{d}</span>.</p><p>(a) Prove her claim. <strong>[6 marks]</strong></p><p>(b) Show that the total length of the path <span class="chem">PQRSP</span> equals <span class="chem">AC + BD</span>, the sum of the lengths of the diagonals of <span class="chem">ABCD</span>. <strong>[2 marks]</strong></p>',
      answer: '<p><strong>Decode:</strong> "always forms a parallelogram" means you must show, for general vectors, that one pair of opposite sides of <span class="chem">PQRS</span> is given by the same vector.</p><p>(a) The midpoints have position vectors <span class="chem">\\mathbf{p} = (\\mathbf{a} + \\mathbf{b})/2</span>, <span class="chem">\\mathbf{q} = (\\mathbf{b} + \\mathbf{c})/2</span>, <span class="chem">\\mathbf{r} = (\\mathbf{c} + \\mathbf{d})/2</span>, <span class="chem">\\mathbf{s} = (\\mathbf{d} + \\mathbf{a})/2</span>. Then <span class="chem">\\mathbf{PQ} = \\mathbf{q} - \\mathbf{p} = (\\mathbf{c} - \\mathbf{a})/2</span> and <span class="chem">\\mathbf{SR} = \\mathbf{r} - \\mathbf{s} = (\\mathbf{c} - \\mathbf{a})/2</span>. So <span class="chem">\\mathbf{PQ} = \\mathbf{SR}</span>: the opposite sides <span class="chem">PQ</span> and <span class="chem">SR</span> are parallel and equal in length, and <span class="chem">PQRS</span> is a parallelogram.</p><p>(b) Similarly <span class="chem">\\mathbf{QR} = (\\mathbf{d} - \\mathbf{b})/2 = \\mathbf{PS}</span>. So the path length is <span class="chem">2|\\mathbf{PQ}| + 2|\\mathbf{QR}| = |\\mathbf{c} - \\mathbf{a}| + |\\mathbf{d} - \\mathbf{b}| = AC + BD</span>.</p>',
      markscheme: [
        'M1: uses the midpoint as the average of position vectors, e.g. <span class="chem">\\mathbf{p} = (\\mathbf{a} + \\mathbf{b})/2</span>.',
        'A1: all four of <span class="chem">\\mathbf{p}, \\mathbf{q}, \\mathbf{r}, \\mathbf{s}</span> correct.',
        'M1: finds a side vector as a difference, e.g. <span class="chem">\\mathbf{PQ} = \\mathbf{q} - \\mathbf{p}</span>.',
        'A1: <span class="chem">\\mathbf{PQ} = (\\mathbf{c} - \\mathbf{a})/2</span>.',
        'A1: <span class="chem">\\mathbf{SR} = (\\mathbf{c} - \\mathbf{a})/2</span> (or <span class="chem">\\mathbf{QR} = \\mathbf{PS} = (\\mathbf{d} - \\mathbf{b})/2</span>).',
        'R1: equal vectors, so opposite sides are parallel and equal: <span class="chem">PQRS</span> is a parallelogram (AG).',
        'A1: <span class="chem">\\mathbf{QR} = (\\mathbf{d} - \\mathbf{b})/2</span>, so <span class="chem">|\\mathbf{QR}| = BD/2</span> and <span class="chem">|\\mathbf{PQ}| = AC/2</span>.',
        'A1: path length <span class="chem">= 2(AC/2) + 2(BD/2) = AC + BD</span> (AG).'
      ],
      hints: [
        'Decode: this is a general proof. Do not choose coordinates. Show that <span class="chem">\\mathbf{PQ}</span> and <span class="chem">\\mathbf{SR}</span> are the same vector for any <span class="chem">\\mathbf{a}, \\mathbf{b}, \\mathbf{c}, \\mathbf{d}</span>.',
        'The midpoint of <span class="chem">AB</span> has position vector <span class="chem">(\\mathbf{a} + \\mathbf{b})/2</span>.',
        'After simplifying, <span class="chem">\\mathbf{PQ}</span> is half of a diagonal vector of <span class="chem">ABCD</span>. Which one?'
      ]
    },
    {
      id: 't3-3-q031',
      topic: 't3-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.15',
      marks: 5,
      stem: '<p>Two straight wires are modelled by the lines <span class="chem">L_1: \\mathbf{r} = (1, -2, 0) + lambda(1, 2, 1)</span> and <span class="chem">L_2: \\mathbf{r} = (5, 1, k) + mu(1, 1, -2)</span>. An engineer finds that the two wires lie in a common plane. Find the value of <span class="chem">k</span>.</p>',
      answer: -11,
      hints: [
        'Decode: two lines lie in one plane exactly when they are parallel or they intersect. These directions are not parallel, so "in a common plane" means "the lines intersect".',
        'Equate the <span class="chem">x</span>- and <span class="chem">y</span>-components and solve for <span class="chem">lambda</span> and <span class="chem">mu</span>; these do not involve <span class="chem">k</span>.',
        'The <span class="chem">z</span>-components must then agree. Use that equation to find <span class="chem">k</span>.'
      ],
      solution: '<p><strong>Decode:</strong> <span class="chem">(1, 2, 1)</span> is not a multiple of <span class="chem">(1, 1, -2)</span>, so coplanar lines must intersect.</p><p><span class="chem">x</span>: <span class="chem">1 + lambda = 5 + mu</span>; <span class="chem">y</span>: <span class="chem">-2 + 2lambda = 1 + mu</span>. Subtracting: <span class="chem">3 - lambda = 4 => lambda = -1</span>, and then <span class="chem">mu = -5</span>. <span class="chem">z</span>: <span class="chem">lambda = k - 2mu => -1 = k + 10 => k = -11</span>.</p>'
    },
    {
      id: 't3-3-q032',
      topic: 't3-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.16–3.18',
      marks: 6,
      stem: '<p>A flat glass panel contains the straight edge <span class="chem">L: \\mathbf{r} = (1, 2, 0) + lambda(2, -1, 1)</span> and also the corner point <span class="chem">P(3, 1, 4)</span>. A light is fixed at the origin <span class="chem">O</span>. Find the exact shortest distance from the light to the plane of the panel.</p>',
      answer: 2.2360679775,
      exact: true,
      answerInput: 'sqrt(5)',
      answerDisplay: '√5',
      hints: [
        'Decode: first build the plane from a line and a point not on it, then find the distance from <span class="chem">O</span> to that plane.',
        'Two directions in the plane are <span class="chem">(2, -1, 1)</span> and <span class="chem">\\mathbf{AP}</span>, where <span class="chem">A(1, 2, 0)</span> is on <span class="chem">L</span>. Their vector product is a normal.',
        'You should get the plane <span class="chem">x + 2y = 5</span>. The perpendicular from <span class="chem">O</span> is <span class="chem">\\mathbf{r} = s(1, 2, 0)</span>.'
      ],
      solution: '<p><strong>Decode:</strong> plane from a line and a point, then point-to-plane distance.</p><p><span class="chem">\\mathbf{AP} = (2, -1, 4)</span>. <span class="chem">(2, -1, 1) \\times (2, -1, 4) = ((-1)(4) - (1)(-1), (1)(2) - (2)(4), (2)(-1) - (-1)(2)) = (-3, -6, 0)</span>, so <span class="chem">\\mathbf{n} = (1, 2, 0)</span> and the plane is <span class="chem">x + 2y = 5</span> (check with <span class="chem">P</span>: <span class="chem">3 + 2 = 5</span>). The perpendicular from <span class="chem">O</span> is <span class="chem">(s, 2s, 0)</span>: <span class="chem">5s = 5 => s = 1</span>, foot <span class="chem">(1, 2, 0)</span>. The distance is <span class="chem">sqrt(1 + 4) = sqrt(5)</span>.</p>'
    },
    {
      id: 't3-3-q033',
      topic: 't3-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 3.18',
      marks: 10,
      stem: '<p>Consider the planes <span class="chem">Π_1: x + y - z = 2</span>, <span class="chem">Π_2: 2x + 3y + z = 5</span> and <span class="chem">Π_3: x + 2y + az = b</span>, where <span class="chem">a, b \\in \\mathbb{R}</span>.</p><p>(a) Find the value of <span class="chem">a</span> for which the three planes do <strong>not</strong> meet at a single point. <strong>[3 marks]</strong></p><p>(b) For this value of <span class="chem">a</span>, find the value of <span class="chem">b</span> for which the planes meet in a line. <strong>[2 marks]</strong></p><p>(c) For this value of <span class="chem">a</span> and any other value of <span class="chem">b</span>, describe the geometric arrangement of the three planes, justifying your answer. <strong>[2 marks]</strong></p><p>(d) For the values in part (b), find a vector equation of the common line. <strong>[3 marks]</strong></p>',
      answer: '<p><strong>Decode:</strong> "not a single point" means the system has no unique solution: eliminate to a single equation in one unknown and make its coefficient zero.</p><p>(a) <span class="chem">Π_2 - 2Π_1</span>: <span class="chem">y + 3z = 1</span>. <span class="chem">Π_3 - Π_1</span>: <span class="chem">y + (a + 1)z = b - 2</span>. Subtracting: <span class="chem">(a - 2)z = b - 3</span>. There is no unique solution when <span class="chem">a = 2</span>.</p><p>(b) With <span class="chem">a = 2</span> the last equation is <span class="chem">0z = b - 3</span>, which holds for every <span class="chem">z</span> when <span class="chem">b = 3</span>: the planes meet in a line.</p><p>(c) If <span class="chem">b != 3</span> there is no solution. The normals <span class="chem">(1, 1, -1)</span>, <span class="chem">(2, 3, 1)</span>, <span class="chem">(1, 2, 2)</span> are not multiples of one another, so no two planes are parallel; the planes meet in pairs along three parallel lines and form a triangular prism.</p><p>(d) Let <span class="chem">z = t</span>. Then <span class="chem">y = 1 - 3t</span> and <span class="chem">x = 2 - y + z = 1 + 4t</span>, so <span class="chem">\\mathbf{r} = (1, 1, 0) + t(4, -3, 1)</span>.</p>',
      markscheme: [
        'M1: eliminates <span class="chem">x</span> from two pairs of equations.',
        'A1: obtains <span class="chem">(a - 2)z = b - 3</span> (or an equivalent single equation).',
        'A1: <span class="chem">a = 2</span>.',
        'M1: recognises that a line of solutions needs the equation to reduce to <span class="chem">0 = 0</span>.',
        'A1: <span class="chem">b = 3</span>.',
        'R1: no solution, and no two normal vectors are parallel.',
        'A1: the planes form a triangular prism.',
        'M1: introduces a parameter, e.g. <span class="chem">z = t</span>, and expresses <span class="chem">y</span> in terms of <span class="chem">t</span>.',
        'A1: <span class="chem">y = 1 - 3t</span> and <span class="chem">x = 1 + 4t</span>.',
        'A1: <span class="chem">\\mathbf{r} = (1, 1, 0) + t(4, -3, 1)</span> (or equivalent).'
      ],
      hints: [
        'Decode: "do not meet at a single point" = "the system does not have a unique solution". Eliminate until one equation contains only <span class="chem">z</span>.',
        'Use <span class="chem">Π_2 - 2Π_1</span> and <span class="chem">Π_3 - Π_1</span>, then subtract the two results.',
        'For part (c), "no solution" can be a triangular prism or include parallel planes. Check whether any two normals are parallel.'
      ]
    },

    /* --- Added 2026-11: Paper 2 (GDC) --- */
    {
      id: 't3-3-q034',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 3.13',
      marks: 4,
      stem: '<p>A surveyor records the positions of three marker posts, in metres, as <span class="chem">A(2.4, -1.3, 0.8)</span>, <span class="chem">B(0.5, 1.7, -2.1)</span> and <span class="chem">C(3.6, 2.2, 1.5)</span>. Find the size of angle <span class="chem">ABC</span>, in degrees, correct to 3 significant figures.</p>',
      unit: '°',
      answer: 47.380840577,
      sigfigs: 3,
      hints: [
        'Decode: angle <span class="chem">ABC</span> is the angle <em>at</em> <span class="chem">B</span>, so use the two vectors that start at <span class="chem">B</span>: <span class="chem">\\mathbf{BA}</span> and <span class="chem">\\mathbf{BC}</span>.',
        '<span class="chem">\\mathbf{BA} = (1.9, -3, 2.9)</span> and <span class="chem">\\mathbf{BC} = (3.1, 0.5, 3.6)</span>.',
        'Use <span class="chem">cos B = (\\mathbf{BA} \\cdot \\mathbf{BC}) / (|\\mathbf{BA}||\\mathbf{BC}|)</span>; do not take a modulus here, because the angle of a triangle can be obtuse.'
      ],
      solution: '<p><span class="chem">\\mathbf{BA} = (1.9, -3, 2.9)</span>, <span class="chem">\\mathbf{BC} = (3.1, 0.5, 3.6)</span>. <span class="chem">\\mathbf{BA} \\cdot \\mathbf{BC} = 5.89 - 1.5 + 10.44 = 14.83</span>, <span class="chem">|\\mathbf{BA}| = sqrt(21.02) ≈ 4.585</span>, <span class="chem">|\\mathbf{BC}| = sqrt(22.82) ≈ 4.777</span>. So <span class="chem">cos B ≈ 0.6771</span> and angle <span class="chem">ABC ≈ 47.4°</span>.</p>'
    },
    {
      id: 't3-3-q035',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 3.13–3.14',
      marks: 6,
      stem: '<p>A camera drone moves with constant velocity. Its position <span class="chem">t</span> seconds after it is switched on is <span class="chem">\\mathbf{r} = (-40, 25, 10) + t(6, -3.5, 1.2)</span>, in metres. A signal mast has its top at <span class="chem">T(30, -10, 40)</span>. Find the minimum distance between the drone and the top of the mast, correct to 3 significant figures.</p>',
      unit: 'm',
      answer: 17.029327277,
      sigfigs: 3,
      hints: [
        'Decode: "minimum distance" between a moving point and a fixed point. Either minimise <span class="chem">|\\mathbf{r}(t) - \\mathbf{OT}|</span> on your GDC, or use the fact that at the closest point <span class="chem">\\mathbf{TR}</span> is perpendicular to the velocity.',
        '<span class="chem">\\mathbf{TR}(t) = (-70 + 6t, 35 - 3.5t, -30 + 1.2t)</span>.',
        'Solve <span class="chem">\\mathbf{TR}(t) \\cdot (6, -3.5, 1.2) = 0</span> for <span class="chem">t</span>, then find <span class="chem">|\\mathbf{TR}(t)|</span>.'
      ],
      solution: '<p><span class="chem">\\mathbf{TR}(t) = (-70 + 6t, 35 - 3.5t, -30 + 1.2t)</span>. Setting <span class="chem">\\mathbf{TR} \\cdot (6, -3.5, 1.2) = 0</span>: <span class="chem">-420 - 122.5 - 36 + (36 + 12.25 + 1.44)t = 0 => t = 578.5 / 49.69 ≈ 11.64</span> s. Then <span class="chem">\\mathbf{TR} ≈ (-0.147, -5.75, -16.0)</span> and the minimum distance is <span class="chem">≈ 17.0</span> m. (A GDC graph of <span class="chem">|\\mathbf{TR}(t)|</span> gives the same minimum.)</p>'
    },
    {
      id: 't3-3-q036',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 3.12–3.14',
      marks: 9,
      stem: '<p>Two aircraft are tracked by radar. Relative to the control tower, with distances in kilometres and <span class="chem">t</span> in hours after 12:00, their positions are</p><p><span class="chem">\\mathbf{r_A} = (-50, 20, 8.5) + t(420, 150, 0)</span> and <span class="chem">\\mathbf{r_B} = (10, -60, 9.1) + t(180, 520, -0.4)</span>.</p><p>(a) Find the speed of aircraft A. <strong>[2 marks]</strong></p><p>(b) Aircraft B is descending. Show that the two aircraft are at the same altitude when <span class="chem">t = 1.5</span>, and that they do not collide at that time. <strong>[2 marks]</strong></p><p>(c) Find the minimum distance between the two aircraft and the time, to the nearest minute, at which it occurs. <strong>[4 marks]</strong></p><p>(d) Safety rules require aircraft to stay at least 5 km apart. State, with a reason, whether the rule is broken. <strong>[1 mark]</strong></p>',
      answer: '<p>(a) Speed <span class="chem">= |(420, 150, 0)| = sqrt(420^2 + 150^2) ≈ 446</span> km per hour.</p><p>(b) A is always at altitude 8.5 km. B is at <span class="chem">9.1 - 0.4t = 8.5</span> when <span class="chem">t = 1.5</span>. Then <span class="chem">\\mathbf{r_A} = (580, 245, 8.5)</span> and <span class="chem">\\mathbf{r_B} = (280, 720, 8.5)</span>, which are different points, so there is no collision.</p><p>(c) <span class="chem">\\mathbf{r_A} - \\mathbf{r_B} = (-60, 80, -0.6) + t(240, -370, 0.4)</span>. Minimising its magnitude (GDC, or solving <span class="chem">(\\mathbf{r_A} - \\mathbf{r_B}) \\cdot (240, -370, 0.4) = 0</span>) gives <span class="chem">t ≈ 0.2262</span> h, about 13.6 minutes, so at 12:14. The minimum distance is <span class="chem">≈ 6.82</span> km.</p><p>(d) The rule is not broken, since the minimum separation <span class="chem">6.82</span> km is greater than 5 km.</p>',
      markscheme: [
        'M1: finds the magnitude of the velocity vector of A.',
        'A1: speed <span class="chem">≈ 446</span> km per hour.',
        'A1: shows <span class="chem">9.1 - 0.4(1.5) = 8.5</span>, the altitude of A.',
        'R1: finds both positions at <span class="chem">t = 1.5</span> and states they differ, so no collision.',
        'M1: forms the relative position <span class="chem">\\mathbf{r_A} - \\mathbf{r_B}</span> as a function of <span class="chem">t</span>.',
        'M1: minimises its magnitude (GDC graph, or scalar product with relative velocity set to 0).',
        'A1: <span class="chem">t ≈ 0.226</span> h, i.e. 12:14.',
        'A1: minimum distance <span class="chem">≈ 6.82</span> km.',
        'R1: not broken, because <span class="chem">6.82 &gt; 5</span> (follow through from their minimum).'
      ],
      hints: [
        'Speed is the magnitude of the velocity vector.',
        'Altitude is the <span class="chem">z</span>-coordinate.',
        'The distance between the aircraft at time <span class="chem">t</span> is <span class="chem">|\\mathbf{r_A}(t) - \\mathbf{r_B}(t)|</span>. Graph it on your GDC and find the minimum.'
      ]
    },
    {
      id: 't3-3-q037',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 3.14–3.16',
      marks: 5,
      stem: '<p>Find the shortest distance from the point <span class="chem">P(3.5, -1.2, 4.8)</span> to the line <span class="chem">\\mathbf{r} = (1.1, 0.4, -2) + lambda(2.3, -1.7, 0.9)</span>, correct to 3 significant figures.</p>',
      answer: 5.6233740698,
      sigfigs: 3,
      hints: [
        'Let <span class="chem">F</span> be the point on the line with parameter <span class="chem">lambda</span>. At the foot of the perpendicular, <span class="chem">\\mathbf{PF} \\cdot (2.3, -1.7, 0.9) = 0</span>.',
        'Alternatively use <span class="chem">d = |\\mathbf{AP} \\times \\mathbf{b}| / |\\mathbf{b}|</span> with <span class="chem">A(1.1, 0.4, -2)</span>.'
      ],
      solution: '<p>With <span class="chem">A(1.1, 0.4, -2)</span>, <span class="chem">\\mathbf{AP} = (2.4, -1.6, 6.8)</span> and <span class="chem">\\mathbf{b} = (2.3, -1.7, 0.9)</span>. <span class="chem">\\mathbf{AP} \\times \\mathbf{b} = (10.12, 13.48, -0.4)</span>, so <span class="chem">d = |\\mathbf{AP} \\times \\mathbf{b}| / |\\mathbf{b}| = 16.86 / 2.999 ≈ 5.62</span>. (Foot-of-perpendicular method: <span class="chem">lambda = (\\mathbf{AP} \\cdot \\mathbf{b}) / |\\mathbf{b}|^2 ≈ 1.597</span>, giving the same distance.)</p>'
    },
    {
      id: 't3-3-q038',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 3.15–3.16',
      marks: 5,
      stem: '<p>Two straight pipes in a factory are modelled by the skew lines <span class="chem">L_1: \\mathbf{r} = (1.5, 0, -2.5) + lambda(2, -1, 3)</span> and <span class="chem">L_2: \\mathbf{r} = (4, 2.5, 1) + mu(-1, 3, 0.5)</span>, in metres. A straight connecting rod is fitted perpendicular to both pipes. Find the length of the rod, correct to 3 significant figures.</p>',
      unit: 'm',
      answer: 1.4184162865,
      sigfigs: 3,
      hints: [
        'Decode: a rod perpendicular to both skew lines is the common perpendicular, so its length is the shortest distance between the lines.',
        'The common perpendicular is parallel to <span class="chem">\\mathbf{n} = (2, -1, 3) \\times (-1, 3, 0.5)</span>.',
        'Project <span class="chem">\\mathbf{A_1A_2} = (2.5, 2.5, 3.5)</span> onto <span class="chem">\\mathbf{n}</span>: <span class="chem">d = |\\mathbf{A_1A_2} \\cdot \\mathbf{n}| / |\\mathbf{n}|</span>.'
      ],
      solution: '<p><span class="chem">\\mathbf{n} = (2, -1, 3) \\times (-1, 3, 0.5) = (-9.5, -4, 5)</span>, <span class="chem">|\\mathbf{n}| = sqrt(131.25) ≈ 11.46</span>. <span class="chem">\\mathbf{A_1A_2} = (2.5, 2.5, 3.5)</span>, so <span class="chem">\\mathbf{A_1A_2} \\cdot \\mathbf{n} = -23.75 - 10 + 17.5 = -16.25</span>. The length is <span class="chem">16.25 / 11.46 ≈ 1.42</span> m.</p>'
    },
    {
      id: 't3-3-q039',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 3.16',
      marks: 4,
      stem: '<p>A triangular plot of land on a hillside has corners at <span class="chem">P(12.4, 3.1, 2.6)</span>, <span class="chem">Q(30.8, -5.2, 7.9)</span> and <span class="chem">R(18.5, 21.7, 11.3)</span>, with coordinates in metres. Find the area of the plot, in square metres, correct to 3 significant figures.</p>',
      unit: 'm2',
      answer: 223.51516923,
      sigfigs: 3,
      hints: [
        'The plot is not horizontal, so do not use only the <span class="chem">x</span>- and <span class="chem">y</span>-coordinates.',
        'Area <span class="chem">= (1/2)|\\mathbf{PQ} \\times \\mathbf{PR}|</span>.'
      ],
      solution: '<p><span class="chem">\\mathbf{PQ} = (18.4, -8.3, 5.3)</span>, <span class="chem">\\mathbf{PR} = (6.1, 18.6, 8.7)</span>. <span class="chem">\\mathbf{PQ} \\times \\mathbf{PR} ≈ (-170.79, -127.75, 392.87)</span>, with magnitude <span class="chem">≈ 447.0</span>. The area is <span class="chem">≈ 224</span> square metres.</p>'
    },
    {
      id: 't3-3-q040',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 3.18',
      marks: 5,
      stem: '<p>The line <span class="chem">L</span> passes through <span class="chem">A(2, -1, 4)</span> and <span class="chem">B(-3, 5, 1.5)</span>. Find the acute angle between <span class="chem">L</span> and the plane <span class="chem">3x - 4y + 2.5z = 7</span>, in degrees, correct to 3 significant figures.</p>',
      unit: '°',
      answer: 80.775857347,
      sigfigs: 3,
      hints: [
        'A direction vector for <span class="chem">L</span> is <span class="chem">\\mathbf{AB} = (-5, 6, -2.5)</span>; a normal to the plane is <span class="chem">(3, -4, 2.5)</span>.',
        'The angle between a line and a plane uses sine: <span class="chem">sin phi = |\\mathbf{b} \\cdot \\mathbf{n}| / (|\\mathbf{b}||\\mathbf{n}|)</span>.'
      ],
      solution: '<p><span class="chem">\\mathbf{b} = (-5, 6, -2.5)</span>, <span class="chem">\\mathbf{n} = (3, -4, 2.5)</span>. <span class="chem">\\mathbf{b} \\cdot \\mathbf{n} = -15 - 24 - 6.25 = -45.25</span>, <span class="chem">|\\mathbf{b}| = sqrt(67.25)</span>, <span class="chem">|\\mathbf{n}| = sqrt(31.25)</span>. So <span class="chem">sin phi = 45.25 / sqrt(67.25 × 31.25) ≈ 0.9871</span> and <span class="chem">phi ≈ 80.8°</span>.</p>'
    },
    {
      id: 't3-3-q041',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 3.16, 3.18',
      marks: 6,
      stem: '<p>A flat solar panel is fixed on a roof. Three of its corners have coordinates <span class="chem">P(0, 0, 1.2)</span>, <span class="chem">Q(4.5, 0.6, 2.8)</span> and <span class="chem">R(-0.8, 3.0, 1.5)</span>, in metres, where the <span class="chem">z</span>-axis points vertically upwards and the ground is the plane <span class="chem">z = 0</span>. Find the angle between the panel and the horizontal ground, in degrees, correct to 3 significant figures.</p>',
      unit: '°',
      answer: 20.820168803,
      sigfigs: 3,
      hints: [
        'Decode: this is the angle between two planes: the plane of the panel and the plane <span class="chem">z = 0</span>. Use their normals.',
        'A normal to the panel is <span class="chem">\\mathbf{PQ} \\times \\mathbf{PR}</span>; a normal to the ground is <span class="chem">\\mathbf{k} = (0, 0, 1)</span>.',
        'Use <span class="chem">cos theta = |\\mathbf{n_1} \\cdot \\mathbf{n_2}| / (|\\mathbf{n_1}||\\mathbf{n_2}|)</span>.'
      ],
      solution: '<p><strong>Decode:</strong> angle between the panel plane and the ground plane, via normals.</p><p><span class="chem">\\mathbf{PQ} = (4.5, 0.6, 1.6)</span>, <span class="chem">\\mathbf{PR} = (-0.8, 3.0, 0.3)</span>. <span class="chem">\\mathbf{n} = \\mathbf{PQ} \\times \\mathbf{PR} = (-4.62, -2.63, 13.98)</span>. Then <span class="chem">cos theta = 13.98 / |\\mathbf{n}| = 13.98 / 14.957 ≈ 0.9347</span>, so <span class="chem">theta ≈ 20.8°</span>.</p>'
    },
    {
      id: 't3-3-q042',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 3.14, 3.18',
      marks: 5,
      stem: '<p>A laser at <span class="chem">S(-2, 5, 9)</span> fires a straight beam in the direction <span class="chem">(1.5, -0.8, -2.2)</span>. The beam hits a mirror lying in the plane <span class="chem">x + 2y + 3z = 6</span> at the point <span class="chem">M</span>. All distances are in metres. Find the distance <span class="chem">SM</span>, correct to 3 significant figures.</p>',
      unit: 'm',
      answer: 12.034081327,
      sigfigs: 3,
      hints: [
        'The beam is the line <span class="chem">\\mathbf{r} = (-2, 5, 9) + lambda(1.5, -0.8, -2.2)</span>.',
        'Substitute into the plane equation to find <span class="chem">lambda</span> at <span class="chem">M</span>.',
        'Then <span class="chem">SM = |lambda| × |(1.5, -0.8, -2.2)|</span>.'
      ],
      solution: '<p>Substituting: <span class="chem">(-2 + 1.5lambda) + 2(5 - 0.8lambda) + 3(9 - 2.2lambda) = 6 => 35 - 6.7lambda = 6 => lambda = 29/6.7 ≈ 4.328</span>. <span class="chem">|(1.5, -0.8, -2.2)| = sqrt(7.73) ≈ 2.780</span>, so <span class="chem">SM ≈ 4.328 × 2.780 ≈ 12.0</span> m.</p>'
    },
    {
      id: 't3-3-q043',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 3.14–3.17',
      marks: 12,
      stem: '<p>The lines <span class="chem">L_1</span> and <span class="chem">L_2</span> have equations <span class="chem">L_1: \\mathbf{r} = (1.2, -0.5, 3) + lambda(2, 1.5, -1)</span> and <span class="chem">L_2: \\mathbf{r} = (1.6, -5, 2.5) + mu(1.2, 2.5, -0.5)</span>.</p><p>(a) Show that <span class="chem">L_1</span> and <span class="chem">L_2</span> intersect, and find the coordinates of the point of intersection <span class="chem">X</span>. <strong>[5 marks]</strong></p><p>(b) Find the acute angle between <span class="chem">L_1</span> and <span class="chem">L_2</span>, in degrees. <strong>[3 marks]</strong></p><p>(c) Find the Cartesian equation of the plane containing <span class="chem">L_1</span> and <span class="chem">L_2</span>, in the form <span class="chem">ax + by + cz = d</span> where <span class="chem">a, b, c, d \\in \\mathbb{Z}</span>. <strong>[4 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">1.2 + 2lambda = 1.6 + 1.2mu</span>, <span class="chem">-0.5 + 1.5lambda = -5 + 2.5mu</span>, <span class="chem">3 - lambda = 2.5 - 0.5mu</span>. Solving the first two (GDC): <span class="chem">lambda = 2</span>, <span class="chem">mu = 3</span>. Third: <span class="chem">3 - 2 = 1</span> and <span class="chem">2.5 - 1.5 = 1</span>, consistent. So the lines intersect at <span class="chem">X(5.2, 2.5, 1)</span>.</p><p>(b) <span class="chem">\\mathbf{b_1} \\cdot \\mathbf{b_2} = 2.4 + 3.75 + 0.5 = 6.65</span>, <span class="chem">|\\mathbf{b_1}| = sqrt(7.25)</span>, <span class="chem">|\\mathbf{b_2}| = sqrt(7.94)</span>. <span class="chem">cos theta = 6.65 / sqrt(7.25 × 7.94) ≈ 0.8765</span>, so <span class="chem">theta ≈ 28.8°</span>.</p><p>(c) <span class="chem">\\mathbf{b_1} \\times \\mathbf{b_2} = (1.75, -0.2, 3.2)</span>; multiply by 20: <span class="chem">\\mathbf{n} = (35, -4, 64)</span>. With <span class="chem">X</span>: <span class="chem">35(5.2) - 4(2.5) + 64(1) = 236</span>, so the plane is <span class="chem">35x - 4y + 64z = 236</span>.</p>',
      markscheme: [
        'M1: equates components using two different parameters.',
        'M1: solves two of the equations (GDC acceptable).',
        'A1: <span class="chem">lambda = 2</span>, <span class="chem">mu = 3</span>.',
        'R1: shows the third equation is satisfied (both sides equal 1).',
        'A1: <span class="chem">X(5.2, 2.5, 1)</span>.',
        'M1: uses the scalar product of the direction vectors.',
        'A1: <span class="chem">cos theta ≈ 0.877</span> (or scalar product 6.65 with both magnitudes).',
        'A1: <span class="chem">theta ≈ 28.8°</span>.',
        'M1: finds the vector product of the direction vectors.',
        'A1: <span class="chem">(1.75, -0.2, 3.2)</span> or an integer multiple such as <span class="chem">(35, -4, 64)</span>.',
        'M1: substitutes a point on either line.',
        'A1: <span class="chem">35x - 4y + 64z = 236</span> (or an integer multiple).'
      ],
      hints: [
        'Use your GDC to solve the first two component equations simultaneously, then check the third.',
        'For (c), the normal is perpendicular to both direction vectors. Multiply it by a suitable number to clear the decimals.'
      ]
    },
    {
      id: 't3-3-q044',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 3.16–3.18',
      marks: 10,
      stem: '<p>The plane <span class="chem">Π</span> has vector equation <span class="chem">\\mathbf{r} = (1, 0, 2) + s(2, -1, 1) + t(0.5, 3, -2)</span>, where <span class="chem">s, t \\in \\mathbb{R}</span>.</p><p>(a) Show that the Cartesian equation of <span class="chem">Π</span> is <span class="chem">-2x + 9y + 13z = 24</span>. <strong>[4 marks]</strong></p><p>The line <span class="chem">L</span> has equation <span class="chem">\\mathbf{r} = (4, 4, -1) + lambda(1, 2, 1.5)</span>.</p><p>(b) Find the coordinates of the point where <span class="chem">L</span> meets <span class="chem">Π</span>. <strong>[3 marks]</strong></p><p>(c) Find the acute angle between <span class="chem">L</span> and <span class="chem">Π</span>, in degrees. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">(2, -1, 1) \\times (0.5, 3, -2) = ((-1)(-2) - (1)(3), (1)(0.5) - (2)(-2), (2)(3) - (-1)(0.5)) = (-1, 4.5, 6.5)</span>, so <span class="chem">\\mathbf{n} = (-2, 9, 13)</span>. <span class="chem">(1, 0, 2) \\cdot (-2, 9, 13) = -2 + 0 + 26 = 24</span>, so <span class="chem">-2x + 9y + 13z = 24</span>.</p><p>(b) <span class="chem">-2(4 + lambda) + 9(4 + 2lambda) + 13(-1 + 1.5lambda) = 24 => 15 + 35.5lambda = 24 => lambda = 18/71 ≈ 0.2535</span>. The point is <span class="chem">≈ (4.25, 4.51, -0.620)</span>.</p><p>(c) <span class="chem">sin phi = |(1, 2, 1.5) \\cdot (-2, 9, 13)| / (|(1, 2, 1.5)||(-2, 9, 13)|) = 35.5 / (sqrt(7.25) sqrt(254)) ≈ 0.8272</span>, so <span class="chem">phi ≈ 55.8°</span>.</p>',
      markscheme: [
        'M1: finds the vector product of the two direction vectors.',
        'A1: <span class="chem">(-1, 4.5, 6.5)</span> or a multiple such as <span class="chem">(-2, 9, 13)</span>.',
        'M1: uses <span class="chem">\\mathbf{r} \\cdot \\mathbf{n} = \\mathbf{a} \\cdot \\mathbf{n}</span> with <span class="chem">\\mathbf{a} = (1, 0, 2)</span>.',
        'A1: <span class="chem">\\mathbf{a} \\cdot \\mathbf{n} = 24</span>, giving <span class="chem">-2x + 9y + 13z = 24</span> (AG).',
        'M1: substitutes the parametric form of <span class="chem">L</span> into the equation of <span class="chem">Π</span>.',
        'A1: <span class="chem">lambda = 18/71 ≈ 0.254</span>.',
        'A1: <span class="chem">(4.25, 4.51, -0.620)</span>.',
        'M1: uses sine (or <span class="chem">90° -</span> the angle with the normal) with the line direction and plane normal.',
        'A1: <span class="chem">sin phi ≈ 0.827</span>.',
        'A1: <span class="chem">phi ≈ 55.8°</span>.'
      ],
      hints: [
        'Decode: the vector form <span class="chem">\\mathbf{r} = \\mathbf{a} + s\\mathbf{b} + t\\mathbf{c}</span> gives two directions in the plane; their vector product is a normal.',
        'For (b), write <span class="chem">x, y, z</span> of <span class="chem">L</span> in terms of <span class="chem">lambda</span> and substitute.',
        'For (c), the angle between a line and a plane is <span class="chem">90°</span> minus the angle between the line and the normal.'
      ]
    },
    {
      id: 't3-3-q045',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 3.12, 3.14',
      marks: 6,
      stem: '<p>A submarine is at the point <span class="chem">(120, -40, -15)</span> and travels in a straight line at a constant speed of <span class="unit">4.5 m s-1</span> towards a research station at <span class="chem">(-60, 210, -90)</span>. Coordinates are in metres and the <span class="chem">z</span>-axis points vertically upwards from sea level. Find the time it takes for the submarine to reach a depth of 50 m below sea level, in seconds, correct to 3 significant figures.</p>',
      unit: 's',
      answer: 32.879962085,
      sigfigs: 3,
      hints: [
        'Decode: "a depth of 50 m below sea level" means <span class="chem">z = -50</span>. You need the velocity vector, which is the unit direction vector rescaled to speed 4.5.',
        'The direction is <span class="chem">(-180, 250, -75)</span>, with magnitude <span class="chem">≈ 317.06</span>.',
        'The <span class="chem">z</span>-component of the velocity is <span class="chem">4.5 × (-75)/317.06</span>. Solve <span class="chem">-15 + v_z t = -50</span>.'
      ],
      solution: '<p><strong>Decode:</strong> depth 50 m means <span class="chem">z = -50</span>; the velocity is the rescaled direction.</p><p>Direction <span class="chem">(-180, 250, -75)</span>, magnitude <span class="chem">sqrt(100525) ≈ 317.06</span>. Velocity <span class="chem">\\mathbf{v} = (4.5/317.06)(-180, 250, -75) ≈ (-2.555, 3.548, -1.0645)</span>. Then <span class="chem">-15 - 1.0645t = -50 => t ≈ 32.9</span> s.</p>'
    },
    {
      id: 't3-3-q046',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 3.14',
      marks: 5,
      stem: '<p>Two straight cables in a stadium roof follow the lines <span class="chem">(x - 2)/3.5 = (y + 1)/(-2) = z/1.5</span> and <span class="chem">(x + 4)/(-1) = (y - 3)/2.5 = (z - 1)/(-4)</span>. Find the acute angle between the two cables, in degrees, correct to 3 significant figures.</p>',
      unit: '°',
      answer: 45.641113528,
      sigfigs: 3,
      hints: [
        'Decode: the angle between two lines is found from their direction vectors, which are the denominators of the Cartesian forms.',
        'The direction vectors are <span class="chem">(3.5, -2, 1.5)</span> and <span class="chem">(-1, 2.5, -4)</span>. Their scalar product is negative: what does that tell you?',
        'Use <span class="chem">cos theta = |\\mathbf{b_1} \\cdot \\mathbf{b_2}| / (|\\mathbf{b_1}||\\mathbf{b_2}|)</span> for the acute angle.'
      ],
      solution: '<p><span class="chem">\\mathbf{b_1} \\cdot \\mathbf{b_2} = -3.5 - 5 - 6 = -14.5</span>, <span class="chem">|\\mathbf{b_1}| = sqrt(18.5)</span>, <span class="chem">|\\mathbf{b_2}| = sqrt(23.25)</span>. Without the modulus, <span class="chem">cos theta ≈ -0.6992</span> gives <span class="chem">134.4°</span>, which is obtuse. The acute angle is <span class="chem">arccos(0.6992) ≈ 45.6°</span>.</p>'
    },
    {
      id: 't3-3-q047',
      topic: 't3-3',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 3.14–3.16, 3.18',
      marks: 10,
      stem: '<p>The planes <span class="chem">Π_1: 1.5x - 2y + z = 4</span> and <span class="chem">Π_2: x + 3y - 2.5z = -1</span> meet in the line <span class="chem">L</span>.</p><p>(a) Find a direction vector for <span class="chem">L</span>. <strong>[2 marks]</strong></p><p>(b) Find the point on <span class="chem">L</span> with <span class="chem">z = 0</span>, and hence write down a vector equation of <span class="chem">L</span>. <strong>[3 marks]</strong></p><p>(c) Find the acute angle between <span class="chem">Π_1</span> and <span class="chem">Π_2</span>, in degrees. <strong>[2 marks]</strong></p><p>(d) Find the shortest distance from the point <span class="chem">P(3, 2, 5)</span> to <span class="chem">L</span>. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">(1.5, -2, 1) \\times (1, 3, -2.5) = (2, 4.75, 6.5)</span>, or <span class="chem">(8, 19, 26)</span>.</p><p>(b) With <span class="chem">z = 0</span>: <span class="chem">1.5x - 2y = 4</span> and <span class="chem">x + 3y = -1</span>, so <span class="chem">x = 20/13 ≈ 1.538</span>, <span class="chem">y = -11/13 ≈ -0.846</span>. <span class="chem">L: \\mathbf{r} = (20/13, -11/13, 0) + t(8, 19, 26)</span>.</p><p>(c) <span class="chem">\\mathbf{n_1} \\cdot \\mathbf{n_2} = 1.5 - 6 - 2.5 = -7</span>, <span class="chem">|\\mathbf{n_1}| = sqrt(7.25)</span>, <span class="chem">|\\mathbf{n_2}| = sqrt(16.25)</span>. <span class="chem">cos theta = 7 / sqrt(7.25 × 16.25) ≈ 0.6449</span>, so <span class="chem">theta ≈ 49.8°</span>.</p><p>(d) With <span class="chem">A(20/13, -11/13, 0)</span>, <span class="chem">d = |\\mathbf{AP} \\times \\mathbf{b}| / |\\mathbf{b}| ≈ 0.653</span> (or minimise <span class="chem">|\\mathbf{AP} - t\\mathbf{b}|</span> on the GDC).</p>',
      markscheme: [
        'M1: uses <span class="chem">\\mathbf{n_1} \\times \\mathbf{n_2}</span>.',
        'A1: <span class="chem">(2, 4.75, 6.5)</span> or any non-zero multiple.',
        'M1: solves the two plane equations with <span class="chem">z = 0</span> (GDC acceptable).',
        'A1: <span class="chem">(1.54, -0.846, 0)</span> (exactly <span class="chem">(20/13, -11/13, 0)</span>).',
        'A1: a correct vector equation with <span class="chem">\\mathbf{r} =</span>.',
        'M1: uses the normals with <span class="chem">cos theta = |\\mathbf{n_1} \\cdot \\mathbf{n_2}| / (|\\mathbf{n_1}||\\mathbf{n_2}|)</span>.',
        'A1: <span class="chem">theta ≈ 49.8°</span>.',
        'M1: a valid method for point-to-line distance (vector product formula, or perpendicular foot).',
        'A1: <span class="chem">\\mathbf{AP} ≈ (1.462, 2.846, 5)</span> and a correct product or foot parameter <span class="chem">t ≈ 0.711</span> (for the direction <span class="chem">(2, 4.75, 6.5)</span>).',
        'A1: distance <span class="chem">≈ 0.653</span>.'
      ],
      hints: [
        'The line of intersection is perpendicular to both normal vectors.',
        'Set <span class="chem">z = 0</span> and solve the two equations on your GDC.',
        'For (d), <span class="chem">d = |\\mathbf{AP} \\times \\mathbf{b}| / |\\mathbf{b}|</span> where <span class="chem">A</span> is your point on <span class="chem">L</span>.'
      ]
    },
    {
      id: 't3-3-q048',
      topic: 't3-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 3.12, 3.14',
      marks: 6,
      stem: '<p>A coastguard radar station is at the origin and can detect ships up to 12.5 km away. At noon a ship is at <span class="chem">(-20, 6)</span> and it sails with constant velocity <span class="chem">(8, -1.5)</span> km per hour, so <span class="chem">t</span> hours after noon its position is <span class="chem">\\mathbf{r} = (-20, 6) + t(8, -1.5)</span>. Find the length of time, in hours, for which the ship can be detected by the radar, correct to 3 significant figures.</p>',
      unit: 'hours',
      answer: 3.0230254391,
      sigfigs: 3,
      hints: [
        'Decode: "can be detected" means the distance from the origin is at most 12.5 km. You need the two times when <span class="chem">|\\mathbf{r}(t)| = 12.5</span>, then the gap between them.',
        'Write <span class="chem">|\\mathbf{r}(t)|^2 = (-20 + 8t)^2 + (6 - 1.5t)^2 = 12.5^2</span>.',
        'Solve the quadratic on your GDC (or intersect the graph of <span class="chem">|\\mathbf{r}(t)|</span> with <span class="chem">y = 12.5</span>) and subtract the two roots.'
      ],
      solution: '<p><strong>Decode:</strong> detected while <span class="chem">|\\mathbf{r}(t)| &lt;= 12.5</span>, so find when the ship enters and leaves the circle of radius 12.5.</p><p><span class="chem">(-20 + 8t)^2 + (6 - 1.5t)^2 = 156.25 => 66.25t^2 - 338t + 279.75 = 0</span>. GDC: <span class="chem">t ≈ 1.0394</span> and <span class="chem">t ≈ 4.0625</span>. The ship is detectable for <span class="chem">4.0625 - 1.0394 ≈ 3.02</span> hours.</p>'
    },
    {
      id: 't3-3-q049',
      topic: 't3-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 3.14',
      marks: 7,
      stem: '<p>Drone A takes off at time <span class="chem">t = 0</span> seconds and flies with position <span class="chem">\\mathbf{r_A} = (0, 0, 50) + t(4, 3, 0.5)</span>, in metres. Drone B waits on a platform at <span class="chem">(300, -50, 20)</span> and sets off <strong>20 seconds later</strong>, flying with constant velocity <span class="chem">(-5, 6, 1.5)</span> m s<sup>−1</sup>. Find the minimum distance between the two drones once both are flying, correct to 3 significant figures.</p>',
      unit: 'm',
      answer: 37.592377062,
      sigfigs: 3,
      hints: [
        'Decode: B starts late, so its position is not <span class="chem">(300, -50, 20) + t(-5, 6, 1.5)</span>. For <span class="chem">t &gt;= 20</span> it is <span class="chem">(300, -50, 20) + (t - 20)(-5, 6, 1.5)</span>.',
        'Form <span class="chem">\\mathbf{r_A} - \\mathbf{r_B}</span> as a function of <span class="chem">t</span> and minimise its magnitude (GDC graph, or set its scalar product with the relative velocity to zero).',
        'Check that the time you find satisfies <span class="chem">t &gt;= 20</span>.'
      ],
      solution: '<p><strong>Decode:</strong> the late start shifts the time in the equation of B to <span class="chem">t - 20</span>.</p><p>For <span class="chem">t &gt;= 20</span>: <span class="chem">\\mathbf{r_B} = (300, -50, 20) + (t - 20)(-5, 6, 1.5) = (400, -170, -10) + t(-5, 6, 1.5)</span>. <span class="chem">\\mathbf{r_A} - \\mathbf{r_B} = (-400, 170, 60) + t(9, -3, -1)</span>. Setting its scalar product with <span class="chem">(9, -3, -1)</span> to 0: <span class="chem">-3600 - 510 - 60 + 91t = 0 => t ≈ 45.82</span> s, which is after 20 s. The minimum distance is <span class="chem">≈ 37.6</span> m. (Ignoring the delay gives the wrong answer 47.5 m.)</p>'
    },
    {
      id: 't3-3-q050',
      topic: 't3-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 3.16, 3.18',
      marks: 6,
      stem: '<p>A tent is modelled as a tetrahedron with its base <span class="chem">ABC</span> on flat ground (the plane <span class="chem">z = 0</span>) and its top at <span class="chem">D</span>. In metres, <span class="chem">A(0, 0, 0)</span>, <span class="chem">B(6.2, 0, 0)</span>, <span class="chem">C(1.8, 5.1, 0)</span> and <span class="chem">D(2.5, 1.9, 4.3)</span>. Find the angle that the side panel <span class="chem">ABD</span> makes with the ground, in degrees, correct to 3 significant figures.</p>',
      unit: '°',
      answer: 66.161259817,
      sigfigs: 3,
      hints: [
        'Decode: the panel <span class="chem">ABD</span> and the ground are two planes. The angle between them is the angle between their normals (taken acute). The point <span class="chem">C</span> is not needed.',
        'A normal to the panel is <span class="chem">\\mathbf{AB} \\times \\mathbf{AD}</span>; a normal to the ground is <span class="chem">(0, 0, 1)</span>.',
        '<span class="chem">\\mathbf{AB} \\times \\mathbf{AD} = (0, -26.66, 11.78)</span>.'
      ],
      solution: '<p><strong>Decode:</strong> angle between plane <span class="chem">ABD</span> and plane <span class="chem">z = 0</span>; <span class="chem">C</span> is extra information.</p><p><span class="chem">\\mathbf{AB} = (6.2, 0, 0)</span>, <span class="chem">\\mathbf{AD} = (2.5, 1.9, 4.3)</span>, <span class="chem">\\mathbf{n} = \\mathbf{AB} \\times \\mathbf{AD} = (0, -26.66, 11.78)</span>. <span class="chem">cos theta = 11.78 / sqrt(26.66^2 + 11.78^2) ≈ 0.4042</span>, so <span class="chem">theta ≈ 66.2°</span>. (Check: <span class="chem">AB</span> is along the <span class="chem">x</span>-axis, so <span class="chem">tan theta = 4.3/1.9</span> also works.)</p>'
    },
    {
      id: 't3-3-q051',
      topic: 't3-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 3.13, 3.18',
      marks: 6,
      stem: '<p>A light beam leaves a lamp at <span class="chem">S(1, -2, 0.5)</span>, passes through a small window at <span class="chem">W(3.5, 1, 2.3)</span> and then strikes a sloping glass roof in the plane <span class="chem">2x - y + 4z = 30</span>. In optics, the <em>angle of incidence</em> is the angle between the incoming beam and the normal to the surface. Find the angle of incidence, in degrees, correct to 3 significant figures.</p>',
      unit: '°',
      answer: 62.167729328,
      sigfigs: 3,
      hints: [
        'Decode: the angle asked for is between the beam and the <strong>normal</strong>, not between the beam and the plane. So use cosine with the normal; do not use the line-plane sine formula.',
        'The beam direction is <span class="chem">\\mathbf{SW} = (2.5, 3, 1.8)</span> and the normal is <span class="chem">(2, -1, 4)</span>.',
        'Take the acute angle: <span class="chem">cos theta = |\\mathbf{SW} \\cdot \\mathbf{n}| / (|\\mathbf{SW}||\\mathbf{n}|)</span>.'
      ],
      solution: '<p><strong>Decode:</strong> angle between the line and the normal, which is <span class="chem">90°</span> minus the line-plane angle.</p><p><span class="chem">\\mathbf{SW} = (2.5, 3, 1.8)</span>, <span class="chem">\\mathbf{n} = (2, -1, 4)</span>. <span class="chem">\\mathbf{SW} \\cdot \\mathbf{n} = 5 - 3 + 7.2 = 9.2</span>, <span class="chem">|\\mathbf{SW}| = sqrt(18.49) = 4.3</span>, <span class="chem">|\\mathbf{n}| = sqrt(21)</span>. <span class="chem">cos theta = 9.2 / (4.3 sqrt(21)) ≈ 0.4669</span>, so <span class="chem">theta ≈ 62.2°</span>. (The beam does reach the roof: it meets the plane at <span class="chem">lambda ≈ 2.61 &gt; 0</span> on <span class="chem">\\mathbf{r} = \\mathbf{OS} + lambda \\mathbf{SW}</span>. The line-plane angle would be <span class="chem">27.8°</span>, the trap answer.)</p>'
    },
    {
      id: 't3-3-q052',
      topic: 't3-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 3.12, 3.14, 3.16',
      marks: 11,
      stem: '<p>A straight railway track follows the line <span class="chem">L: \\mathbf{r} = (1, -2, 3) + lambda(2, 1, -2)</span>, in kilometres. A mobile phone mast at <span class="chem">P(4.2, 3.5, -1)</span> has a range of exactly 7 km. Points <span class="chem">Q_1</span> and <span class="chem">Q_2</span> are where the track enters and leaves the range of the mast.</p><p>(a) Show that the values of <span class="chem">lambda</span> at <span class="chem">Q_1</span> and <span class="chem">Q_2</span> satisfy <span class="chem">9lambda^2 - 39.8lambda + 7.49 = 0</span>. <strong>[3 marks]</strong></p><p>(b) Find the coordinates of <span class="chem">Q_1</span> and <span class="chem">Q_2</span>. <strong>[3 marks]</strong></p><p>(c) Find the area of triangle <span class="chem">PQ_1Q_2</span>. <strong>[3 marks]</strong></p><p>(d) Hence, or otherwise, find the shortest distance from the mast to the track. <strong>[2 marks]</strong></p>',
      answer: '<p><strong>Decode:</strong> "enters and leaves the range" means the points of <span class="chem">L</span> at distance exactly 7 from <span class="chem">P</span>, so solve <span class="chem">|\\mathbf{PQ}| = 7</span>, a quadratic in <span class="chem">lambda</span>.</p><p>(a) <span class="chem">\\mathbf{PQ} = (-3.2 + 2lambda, -5.5 + lambda, 4 - 2lambda)</span>. <span class="chem">|\\mathbf{PQ}|^2 = 9lambda^2 - 39.8lambda + 56.49 = 49</span>, so <span class="chem">9lambda^2 - 39.8lambda + 7.49 = 0</span>.</p><p>(b) GDC: <span class="chem">lambda ≈ 0.19696</span> or <span class="chem">lambda ≈ 4.2253</span>, giving <span class="chem">Q_1 ≈ (1.39, -1.80, 2.61)</span> and <span class="chem">Q_2 ≈ (9.45, 2.23, -5.45)</span>.</p><p>(c) Area <span class="chem">= (1/2)|\\mathbf{PQ_1} \\times \\mathbf{PQ_2}| ≈ 21.4</span> km<sup>2</sup>.</p><p>(d) <span class="chem">|Q_1Q_2| = 3 × (4.2253 - 0.19696) ≈ 12.08</span>. Using area <span class="chem">= (1/2)(base)(height)</span>: height <span class="chem">= 2(21.354)/12.085 ≈ 3.53</span> km.</p>',
      markscheme: [
        'M1: writes <span class="chem">\\mathbf{PQ}</span> for a general point <span class="chem">Q</span> on <span class="chem">L</span>.',
        'M1: sets <span class="chem">|\\mathbf{PQ}|^2 = 49</span>.',
        'A1: expands correctly to <span class="chem">9lambda^2 - 39.8lambda + 56.49 = 49</span>, giving the given equation (AG).',
        'A1: <span class="chem">lambda ≈ 0.197</span> and <span class="chem">lambda ≈ 4.23</span>.',
        'A1: <span class="chem">Q_1 ≈ (1.39, -1.80, 2.61)</span>.',
        'A1: <span class="chem">Q_2 ≈ (9.45, 2.23, -5.45)</span>.',
        'M1: uses <span class="chem">(1/2)|\\mathbf{PQ_1} \\times \\mathbf{PQ_2}|</span> (or <span class="chem">(1/2)ab sin C</span> with <span class="chem">a = b = 7</span>).',
        'A1: correct vector product or angle <span class="chem">Q_1PQ_2 ≈ 119.4°</span>.',
        'A1: area <span class="chem">≈ 21.4</span>.',
        'M1: uses height <span class="chem">= 2 × area / |Q_1Q_2|</span> (or the foot of the perpendicular, <span class="chem">lambda = 199/90</span>).',
        'A1: distance <span class="chem">≈ 3.53</span> km.'
      ],
      hints: [
        'Decode: the edge of the range is a sphere of radius 7 about <span class="chem">P</span>. The track crosses it where <span class="chem">|\\mathbf{PQ}| = 7</span>.',
        'Square both sides: <span class="chem">|\\mathbf{PQ}|^2 = 49</span> gives a quadratic in <span class="chem">lambda</span>.',
        'In (d), the perpendicular from <span class="chem">P</span> to <span class="chem">Q_1Q_2</span> is the height of the triangle.'
      ]
    },
    {
      id: 't3-3-q053',
      topic: 't3-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 3.16, 3.18',
      marks: 6,
      stem: '<p>Two walls of a modern building lie in the planes <span class="chem">1.2x + 2y - z = 4</span> and <span class="chem">3x - y + 2.5z = 1</span>. The walls meet along a straight edge. A sloping glass roof lies in the plane <span class="chem">2x + 5y + z = 8</span>. Find the acute angle between the edge and the roof, in degrees, correct to 3 significant figures.</p>',
      unit: '°',
      answer: 31.544891300,
      sigfigs: 3,
      hints: [
        'Decode: the "edge" is the line of intersection of the two wall planes, so this is a line-plane angle in disguise. You only need the direction of the edge, not a point on it.',
        'The direction of the edge is <span class="chem">(1.2, 2, -1) \\times (3, -1, 2.5)</span>.',
        'Then use <span class="chem">sin phi = |\\mathbf{b} \\cdot \\mathbf{n}| / (|\\mathbf{b}||\\mathbf{n}|)</span> with <span class="chem">\\mathbf{n} = (2, 5, 1)</span>.'
      ],
      solution: '<p><strong>Decode:</strong> edge = line of intersection; angle with a plane uses sine.</p><p><span class="chem">\\mathbf{b} = (1.2, 2, -1) \\times (3, -1, 2.5) = (4, -6, -7.2)</span>. <span class="chem">\\mathbf{b} \\cdot (2, 5, 1) = 8 - 30 - 7.2 = -29.2</span>, <span class="chem">|\\mathbf{b}| = sqrt(103.84)</span>, <span class="chem">|\\mathbf{n}| = sqrt(30)</span>. <span class="chem">sin phi = 29.2 / sqrt(103.84 × 30) ≈ 0.5231</span>, so <span class="chem">phi ≈ 31.5°</span>.</p>'
    },
    {
      id: 't3-3-q054',
      topic: 't3-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 3.13',
      marks: 6,
      stem: '<p>For <span class="chem">t \\in \\mathbb{R}</span>, let <span class="chem">\\mathbf{a} = t\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}</span> and <span class="chem">\\mathbf{b} = 2\\mathbf{i} + t\\mathbf{j} + \\mathbf{k}</span>. There are two values of <span class="chem">t</span> for which the angle between <span class="chem">\\mathbf{a}</span> and <span class="chem">\\mathbf{b}</span> is exactly <span class="chem">50°</span>. Find the value of <span class="chem">t</span> that is greater than 1, correct to 3 significant figures.</p>',
      answer: 4.2196053746,
      sigfigs: 3,
      hints: [
        'Decode: the angle is fixed and <span class="chem">t</span> is unknown, so this is an equation to solve: <span class="chem">cos 50° = (\\mathbf{a} \\cdot \\mathbf{b}) / (|\\mathbf{a}||\\mathbf{b}|)</span>. It rearranges to a quadratic with awkward coefficients, so use your GDC.',
        '<span class="chem">\\mathbf{a} \\cdot \\mathbf{b} = 3t + 2</span> and <span class="chem">|\\mathbf{a}| = |\\mathbf{b}| = sqrt(t^2 + 5)</span>.',
        'Graph <span class="chem">y = (3t + 2)/(t^2 + 5)</span> and <span class="chem">y = cos 50°</span> (degree mode) and find the intersection with <span class="chem">t &gt; 1</span>.'
      ],
      solution: '<p><strong>Decode:</strong> unknown <span class="chem">t</span> in the angle formula, solved graphically.</p><p><span class="chem">cos 50° = (3t + 2)/(t^2 + 5)</span>. The GDC gives <span class="chem">t ≈ 0.448</span> or <span class="chem">t ≈ 4.22</span>. The value greater than 1 is <span class="chem">t ≈ 4.22</span>.</p>'
    },
    {
      id: 't3-3-q055',
      topic: 't3-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 3.12, 3.14, 3.15',
      marks: 11,
      stem: '<p>Two aircraft fly in straight lines at constant velocity. With distances in km and <span class="chem">t</span> in minutes after 09:00, their positions are <span class="chem">\\mathbf{r_A} = (10, 5, 5) + t(12, 8, 0.4)</span> and <span class="chem">\\mathbf{r_B} = (68.8, -10.2, 7.6) + t(-9, 11, -0.5)</span>.</p><p>(a) Show that the flight paths cross, and find the coordinates of the point <span class="chem">X</span> where they cross. <strong>[4 marks]</strong></p><p>(b) Explain why the aircraft do not collide. <strong>[2 marks]</strong></p><p>(c) Find the minimum distance between the aircraft, and the time after 09:00 at which it occurs, in minutes. <strong>[5 marks]</strong></p>',
      answer: '<p><strong>Decode:</strong> "the paths cross" is about the <em>lines</em> (use two parameters); "collide" is about the <em>same time</em> (one parameter <span class="chem">t</span>).</p><p>(a) With parameters <span class="chem">p</span> for A and <span class="chem">q</span> for B: <span class="chem">10 + 12p = 68.8 - 9q</span> and <span class="chem">5 + 8p = -10.2 + 11q</span>. GDC: <span class="chem">p = 2.5</span>, <span class="chem">q = 3.2</span>. Check <span class="chem">z</span>: <span class="chem">5 + 0.4(2.5) = 6</span> and <span class="chem">7.6 - 0.5(3.2) = 6</span>. The paths cross at <span class="chem">X(40, 25, 6)</span>.</p><p>(b) A is at <span class="chem">X</span> when <span class="chem">t = 2.5</span> but B is at <span class="chem">X</span> when <span class="chem">t = 3.2</span>. They are never at <span class="chem">X</span> at the same time (and two non-parallel lines meet only at <span class="chem">X</span>), so they do not collide.</p><p>(c) <span class="chem">\\mathbf{r_A} - \\mathbf{r_B} = (-58.8, 15.2, -2.6) + t(21, -3, 0.9)</span>. Its magnitude is least when <span class="chem">t = 1282.74/450.81 ≈ 2.85</span> minutes, and the minimum distance is <span class="chem">≈ 6.73</span> km.</p>',
      markscheme: [
        'M1: equates the position vectors using two <em>different</em> parameters.',
        'A1: <span class="chem">p = 2.5</span>, <span class="chem">q = 3.2</span>.',
        'R1: checks the third component is consistent.',
        'A1: <span class="chem">X(40, 25, 6)</span>.',
        'A1: identifies the different times 2.5 and 3.2 minutes at which each aircraft is at <span class="chem">X</span>.',
        'R1: concludes they are not at the same point at the same time, so no collision.',
        'M1: forms <span class="chem">\\mathbf{r_A} - \\mathbf{r_B}</span> in terms of the single time <span class="chem">t</span>.',
        'A1: <span class="chem">(-58.8, 15.2, -2.6) + t(21, -3, 0.9)</span>.',
        'M1: minimises the magnitude (GDC graph, or scalar product with <span class="chem">(21, -3, 0.9)</span> set to 0).',
        'A1: <span class="chem">t ≈ 2.85</span> minutes.',
        'A1: minimum distance <span class="chem">≈ 6.73</span> km.'
      ],
      hints: [
        'Decode: for the paths, each aircraft may reach the crossing point at a different time, so use two different parameters.',
        'For a collision both aircraft must be at the same point for the <em>same</em> value of <span class="chem">t</span>.',
        'The distance at time <span class="chem">t</span> is <span class="chem">|\\mathbf{r_A}(t) - \\mathbf{r_B}(t)|</span>; graph it and find its minimum.'
      ]
    },

    /* --- Added 2026-11: Paper 3 (HL investigations) --- */
    {
      id: 't3-3-q056',
      topic: 't3-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 3 (HL Investigation)',
      syllabus: 'AHL 3.14, 3.17, 3.18',
      marks: 18,
      stem: '<p>This investigation finds a quick formula for the distance from a point to a plane. Let <span class="chem">Π</span> be the plane <span class="chem">2x - y + 2z = 9</span>.</p><p>(a) The line through <span class="chem">P(4, 2, 6)</span> perpendicular to <span class="chem">Π</span> is <span class="chem">\\mathbf{r} = (4, 2, 6) + s(2, -1, 2)</span>. Find the point <span class="chem">F</span> where it meets <span class="chem">Π</span>, and hence find the distance from <span class="chem">P</span> to <span class="chem">Π</span>. <strong>[3 marks]</strong></p><p>(b) In the same way, find the distance from <span class="chem">Q(1, 4, -3)</span> to <span class="chem">Π</span>. <strong>[2 marks]</strong></p><p>(c) Evaluate <span class="chem">2x_0 - y_0 + 2z_0 - 9</span> at <span class="chem">P</span> and at <span class="chem">Q</span>. Hence suggest a formula for the distance from <span class="chem">(x_0, y_0, z_0)</span> to <span class="chem">Π</span>. <strong>[2 marks]</strong></p><p>(d) Prove that the distance from the point <span class="chem">(x_0, y_0, z_0)</span> to the plane <span class="chem">ax + by + cz = d</span> is <span class="chem">D = |ax_0 + by_0 + cz_0 - d| / sqrt(a^2 + b^2 + c^2)</span>. <strong>[5 marks]</strong></p><p>(e) Find the two values of <span class="chem">k</span> for which the plane <span class="chem">2x - y + 2z = k</span> is at a distance of 4 from <span class="chem">P(4, 2, 6)</span>. <strong>[3 marks]</strong></p><p>(f) Find the distance between the parallel planes <span class="chem">Π</span> and <span class="chem">6x - 3y + 6z = 5</span>. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">2(4 + 2s) - (2 - s) + 2(6 + 2s) = 9 => 18 + 9s = 9 => s = -1</span>, so <span class="chem">F(2, 3, 4)</span>. The distance is <span class="chem">|\\mathbf{PF}| = |(-2, 1, -2)| = 3</span>.</p><p>(b) <span class="chem">2(1 + 2s) - (4 - s) + 2(-3 + 2s) = 9 => -8 + 9s = 9 => s = 17/9</span>. The distance is <span class="chem">(17/9) × 3 = 17/3</span>.</p><p>(c) At <span class="chem">P</span>: <span class="chem">18 - 9 = 9</span>; at <span class="chem">Q</span>: <span class="chem">-8 - 9 = -17</span>. The distances are <span class="chem">9/3</span> and <span class="chem">17/3</span>, and <span class="chem">3 = |(2, -1, 2)|</span>. Conjecture: <span class="chem">D = |2x_0 - y_0 + 2z_0 - 9| / 3</span>.</p><p>(d) Let <span class="chem">\\mathbf{n} = (a, b, c)</span>. The perpendicular from the point is <span class="chem">(x_0 + sa, y_0 + sb, z_0 + sc)</span>. Substituting: <span class="chem">ax_0 + by_0 + cz_0 + s(a^2 + b^2 + c^2) = d</span>, so <span class="chem">s = (d - ax_0 - by_0 - cz_0)/(a^2 + b^2 + c^2)</span>. The distance is <span class="chem">|s||\\mathbf{n}| = |ax_0 + by_0 + cz_0 - d| sqrt(a^2 + b^2 + c^2) / (a^2 + b^2 + c^2) = |ax_0 + by_0 + cz_0 - d| / sqrt(a^2 + b^2 + c^2)</span>.</p><p>(e) <span class="chem">|8 - 2 + 12 - k| / 3 = 4 => |18 - k| = 12 => k = 6</span> or <span class="chem">k = 30</span>.</p><p>(f) The second plane is <span class="chem">2x - y + 2z = 5/3</span>. The point <span class="chem">(0, 0, 4.5)</span> lies on <span class="chem">Π</span>, so the distance is <span class="chem">|9 - 5/3| / 3 = 22/9</span>.</p>',
      markscheme: [
        'M1: substitutes the parametric form of the line into the equation of <span class="chem">Π</span>.',
        'A1: <span class="chem">s = -1</span> and <span class="chem">F(2, 3, 4)</span>.',
        'A1: distance <span class="chem">= 3</span>.',
        'A1: <span class="chem">s = 17/9</span>.',
        'A1: distance <span class="chem">= 17/3</span>.',
        'A1: values <span class="chem">9</span> and <span class="chem">-17</span>.',
        'A1: a conjecture equivalent to <span class="chem">D = |2x_0 - y_0 + 2z_0 - 9| / 3</span> (the modulus is needed).',
        'M1: writes the line through <span class="chem">(x_0, y_0, z_0)</span> with direction <span class="chem">(a, b, c)</span>.',
        'M1: substitutes it into <span class="chem">ax + by + cz = d</span>.',
        'A1: <span class="chem">s = (d - ax_0 - by_0 - cz_0)/(a^2 + b^2 + c^2)</span>.',
        'M1: uses distance <span class="chem">= |s| sqrt(a^2 + b^2 + c^2)</span>.',
        'A1: simplifies to the given formula (AG).',
        'M1: sets <span class="chem">|18 - k| / 3 = 4</span>.',
        'A1: <span class="chem">k = 6</span>.',
        'A1: <span class="chem">k = 30</span>.',
        'M1: writes both planes with the same normal, e.g. <span class="chem">2x - y + 2z = 5/3</span>.',
        'M1: applies the formula with a point on one plane (or uses <span class="chem">|d_1 - d_2| / |\\mathbf{n}|</span>).',
        'A1: distance <span class="chem">= 22/9</span>.'
      ],
      hints: [
        'Decode: each part builds on the last. Parts (a)–(b) are the slow method; part (c) asks you to spot what the slow method always gives.',
        'In (d), repeat exactly the steps of (a) with letters instead of numbers.',
        'In (f), the two planes are parallel. Make their normal vectors identical before comparing the constants.'
      ]
    },
    {
      id: 't3-3-q057',
      topic: 't3-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 3 (HL Investigation)',
      syllabus: 'AHL 3.12–3.14',
      marks: 15,
      stem: '<p>This investigation looks at the angles between the four space diagonals of a cuboid. A cuboid has one vertex at the origin <span class="chem">O</span> and edges of lengths <span class="chem">a</span>, <span class="chem">b</span>, <span class="chem">c</span> along the positive <span class="chem">x</span>-, <span class="chem">y</span>- and <span class="chem">z</span>-axes. Its four space diagonals have direction vectors <span class="chem">\\mathbf{d_1} = (a, b, c)</span>, <span class="chem">\\mathbf{d_2} = (-a, b, c)</span>, <span class="chem">\\mathbf{d_3} = (a, -b, c)</span> and <span class="chem">\\mathbf{d_4} = (a, b, -c)</span>.</p><p>(a) For a cube with <span class="chem">a = b = c = 1</span>, find the acute angle between two space diagonals, in degrees. <strong>[3 marks]</strong></p><p>(b) For the cuboid with <span class="chem">a = 2</span>, <span class="chem">b = 3</span>, <span class="chem">c = 6</span>, find the acute angle between <span class="chem">\\mathbf{d_1}</span> and each of <span class="chem">\\mathbf{d_2}</span>, <span class="chem">\\mathbf{d_3}</span> and <span class="chem">\\mathbf{d_4}</span>. <strong>[4 marks]</strong></p><p>(c) Show that, for any cuboid, the acute angle <span class="chem">theta</span> between <span class="chem">\\mathbf{d_1}</span> and <span class="chem">\\mathbf{d_2}</span> satisfies <span class="chem">cos theta = |b^2 + c^2 - a^2| / (a^2 + b^2 + c^2)</span>. <strong>[3 marks]</strong></p><p>(d) Deduce a condition on <span class="chem">a, b, c</span> for <span class="chem">\\mathbf{d_1}</span> and <span class="chem">\\mathbf{d_2}</span> to be perpendicular. Hence find <span class="chem">a</span> when <span class="chem">b = 3</span> and <span class="chem">c = 4</span>. <strong>[2 marks]</strong></p><p>(e) The perpendicularity conditions for the pairs <span class="chem">(\\mathbf{d_1}, \\mathbf{d_2})</span>, <span class="chem">(\\mathbf{d_1}, \\mathbf{d_3})</span> and <span class="chem">(\\mathbf{d_1}, \\mathbf{d_4})</span> are found in the same way. Prove that no cuboid satisfies two of these conditions at once. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">(1, 1, 1) \\cdot (-1, 1, 1) = 1</span> and both magnitudes are <span class="chem">sqrt(3)</span>, so <span class="chem">cos theta = 1/3</span> and <span class="chem">theta ≈ 70.5°</span>.</p><p>(b) <span class="chem">|\\mathbf{d_i}| = sqrt(4 + 9 + 36) = 7</span> for every diagonal. <span class="chem">\\mathbf{d_1} \\cdot \\mathbf{d_2} = 41</span>, <span class="chem">\\mathbf{d_1} \\cdot \\mathbf{d_3} = 31</span>, <span class="chem">\\mathbf{d_1} \\cdot \\mathbf{d_4} = -23</span>. Acute angles: <span class="chem">arccos(41/49) ≈ 33.2°</span>, <span class="chem">arccos(31/49) ≈ 50.8°</span>, <span class="chem">arccos(23/49) ≈ 62.0°</span>.</p><p>(c) <span class="chem">\\mathbf{d_1} \\cdot \\mathbf{d_2} = -a^2 + b^2 + c^2</span> and <span class="chem">|\\mathbf{d_1}| = |\\mathbf{d_2}| = sqrt(a^2 + b^2 + c^2)</span>. For the acute angle take the modulus: <span class="chem">cos theta = |b^2 + c^2 - a^2| / (a^2 + b^2 + c^2)</span>.</p><p>(d) Perpendicular when <span class="chem">a^2 = b^2 + c^2</span>. With <span class="chem">b = 3, c = 4</span>: <span class="chem">a = 5</span>.</p><p>(e) The three conditions are <span class="chem">a^2 = b^2 + c^2</span>, <span class="chem">b^2 = a^2 + c^2</span>, <span class="chem">c^2 = a^2 + b^2</span>. If, say, the first two held, adding gives <span class="chem">a^2 + b^2 = a^2 + b^2 + 2c^2</span>, so <span class="chem">c = 0</span>, which is impossible for a cuboid. The other pairs are the same with the letters swapped. So at most one condition can hold.</p>',
      markscheme: [
        'M1: uses two diagonal directions of the cube, e.g. <span class="chem">(1, 1, 1)</span> and <span class="chem">(-1, 1, 1)</span>.',
        'A1: <span class="chem">cos theta = 1/3</span>.',
        'A1: <span class="chem">theta ≈ 70.5°</span>.',
        'M1: writes the four directions for <span class="chem">a = 2, b = 3, c = 6</span> and uses the scalar product.',
        'A1: scalar products <span class="chem">41, 31, -23</span> and magnitudes 7.',
        'A1: <span class="chem">33.2°</span> and <span class="chem">50.8°</span>.',
        'A1: <span class="chem">62.0°</span> (acute, not <span class="chem">118°</span>).',
        'M1: <span class="chem">\\mathbf{d_1} \\cdot \\mathbf{d_2} = -a^2 + b^2 + c^2</span>.',
        'A1: both magnitudes <span class="chem">sqrt(a^2 + b^2 + c^2)</span>.',
        'R1: takes the modulus for the acute angle, giving the result (AG).',
        'A1: <span class="chem">a^2 = b^2 + c^2</span>.',
        'A1: <span class="chem">a = 5</span>.',
        'M1: writes the three conditions.',
        'M1: assumes two hold and combines them.',
        'R1: obtains a zero edge length, a contradiction, so at most one holds.'
      ],
      hints: [
        'Decode: every "angle between diagonals" question here is the angle between two direction vectors, taken acute.',
        'In (b), all four diagonals have the same length, so only the scalar products change.',
        'In (e), suppose two conditions hold and add them. What happens to the third edge?'
      ]
    },
    {
      id: 't3-3-q058',
      topic: 't3-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 3 (HL Investigation)',
      syllabus: 'AHL 3.16–3.18',
      marks: 16,
      stem: '<p>This investigation finds a "Pythagoras theorem for areas". Let <span class="chem">O</span> be the origin.</p><p>(a) The points <span class="chem">A(2, 0, 0)</span>, <span class="chem">B(0, 3, 0)</span> and <span class="chem">C(0, 0, 6)</span> are given. Find <span class="chem">\\mathbf{AB} \\times \\mathbf{AC}</span> and hence the exact area of triangle <span class="chem">ABC</span>. <strong>[3 marks]</strong></p><p>(b) Find the areas of the right-angled triangles <span class="chem">OAB</span>, <span class="chem">OBC</span> and <span class="chem">OCA</span>. Verify that the sum of their squares equals the square of the area of <span class="chem">ABC</span>. <strong>[3 marks]</strong></p><p>(c) Prove this result for <span class="chem">A(p, 0, 0)</span>, <span class="chem">B(0, q, 0)</span>, <span class="chem">C(0, 0, r)</span>, where <span class="chem">p, q, r &gt; 0</span>. <strong>[4 marks]</strong></p><p>In general, the components of <span class="chem">(1/2)\\mathbf{AB} \\times \\mathbf{AC}</span> are, up to sign, the areas of the projections (shadows) of triangle <span class="chem">ABC</span> onto the coordinate planes <span class="chem">x = 0</span>, <span class="chem">y = 0</span> and <span class="chem">z = 0</span>.</p><p>(d) A triangular sail has corners <span class="chem">P(1, 2, 0.5)</span>, <span class="chem">Q(4, -1, 2.2)</span> and <span class="chem">R(2.5, 3.5, 4)</span>, in metres, with the <span class="chem">z</span>-axis vertical. Find the area of the sail and the area of its shadow on the ground <span class="chem">z = 0</span> when the sun is directly overhead. <strong>[4 marks]</strong></p><p>(e) Hence find the angle between the plane of the sail and the ground. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">\\mathbf{AB} = (-2, 3, 0)</span>, <span class="chem">\\mathbf{AC} = (-2, 0, 6)</span>, <span class="chem">\\mathbf{AB} \\times \\mathbf{AC} = (18, 12, 6)</span>. <span class="chem">|(18, 12, 6)| = sqrt(504) = 6 sqrt(14)</span>, so the area is <span class="chem">3 sqrt(14)</span>.</p><p>(b) <span class="chem">OAB = (1/2)(2)(3) = 3</span>, <span class="chem">OBC = (1/2)(3)(6) = 9</span>, <span class="chem">OCA = (1/2)(6)(2) = 6</span>. <span class="chem">3^2 + 9^2 + 6^2 = 126 = (3 sqrt(14))^2</span>.</p><p>(c) <span class="chem">\\mathbf{AB} = (-p, q, 0)</span>, <span class="chem">\\mathbf{AC} = (-p, 0, r)</span>, <span class="chem">\\mathbf{AB} \\times \\mathbf{AC} = (qr, pr, pq)</span>. So <span class="chem">(area ABC)^2 = (1/4)(q^2r^2 + p^2r^2 + p^2q^2) = (qr/2)^2 + (pr/2)^2 + (pq/2)^2</span>, which are the squares of the areas of <span class="chem">OBC</span>, <span class="chem">OCA</span>, <span class="chem">OAB</span>.</p><p>(d) <span class="chem">\\mathbf{PQ} = (3, -3, 1.7)</span>, <span class="chem">\\mathbf{PR} = (1.5, 1.5, 3.5)</span>, <span class="chem">\\mathbf{PQ} \\times \\mathbf{PR} = (-13.05, -7.95, 9)</span>. Area of sail <span class="chem">= (1/2)|(-13.05, -7.95, 9)| ≈ 8.87</span> m<sup>2</sup>. Shadow on <span class="chem">z = 0</span>: <span class="chem">(1/2)|9| = 4.5</span> m<sup>2</sup>.</p><p>(e) <span class="chem">cos theta = 4.5 / 8.867 ≈ 0.5075</span> (the same as <span class="chem">|\\mathbf{n} \\cdot \\mathbf{k}| / |\\mathbf{n}|</span>), so <span class="chem">theta ≈ 59.5°</span>.</p>',
      markscheme: [
        'M1: forms <span class="chem">\\mathbf{AB}</span> and <span class="chem">\\mathbf{AC}</span> and their vector product.',
        'A1: <span class="chem">(18, 12, 6)</span>.',
        'A1: area <span class="chem">3 sqrt(14)</span>.',
        'A1: areas 3, 9 and 6.',
        'M1: sum of squares <span class="chem">= 126</span>.',
        'A1: <span class="chem">(3 sqrt(14))^2 = 126</span>, so the result holds.',
        'M1: <span class="chem">\\mathbf{AB} = (-p, q, 0)</span>, <span class="chem">\\mathbf{AC} = (-p, 0, r)</span>.',
        'A1: <span class="chem">\\mathbf{AB} \\times \\mathbf{AC} = (qr, pr, pq)</span>.',
        'M1: area squared <span class="chem">= (1/4)|\\mathbf{AB} \\times \\mathbf{AC}|^2</span>.',
        'R1: identifies <span class="chem">qr/2</span>, <span class="chem">pr/2</span>, <span class="chem">pq/2</span> as the areas of the three right-angled faces (AG).',
        'M1: finds <span class="chem">\\mathbf{PQ} \\times \\mathbf{PR}</span>.',
        'A1: <span class="chem">(-13.05, -7.95, 9)</span>.',
        'A1: area of sail <span class="chem">≈ 8.87</span> m<sup>2</sup>.',
        'A1: shadow area <span class="chem">4.5</span> m<sup>2</sup>.',
        'M1: <span class="chem">cos theta = </span> shadow area / true area (or uses the normals).',
        'A1: <span class="chem">theta ≈ 59.5°</span>.'
      ],
      hints: [
        'Decode: the "shadow on the ground" is the projection onto <span class="chem">z = 0</span>; the given fact says its area is half the size of the <span class="chem">z</span>-component of the vector product.',
        'In (c), repeat (a) with letters. The right-angled face <span class="chem">OBC</span> has legs <span class="chem">q</span> and <span class="chem">r</span>.',
        'In (e), compare: <span class="chem">cos theta = |\\mathbf{n} \\cdot \\mathbf{k}| / |\\mathbf{n}|</span> is the same ratio as shadow area over true area.'
      ]
    },
    {
      id: 't3-3-q059',
      topic: 't3-3',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      paper: 'Paper 3 (HL Investigation)',
      syllabus: 'AHL 3.13, 3.14, 3.16',
      marks: 18,
      stem: '<p>This investigation finds a general rule for the closest approach of two objects moving with constant velocities. If their relative position is <span class="chem">\\mathbf{d}(t) = \\mathbf{d_0} + t\\mathbf{w}</span>, where <span class="chem">\\mathbf{w} != \\mathbf{0}</span> is the relative velocity, then the distance between them is <span class="chem">|\\mathbf{d}(t)|</span>.</p><p>(a) Let <span class="chem">\\mathbf{d_0} = (6, -3, 2)</span> and <span class="chem">\\mathbf{w} = (-2, 1, 1)</span>. Show that <span class="chem">|\\mathbf{d}(t)|^2 = 6t^2 - 26t + 49</span>. Hence find the time of closest approach and the exact minimum distance. <strong>[4 marks]</strong></p><p>(b) Show that, at the time found in (a), <span class="chem">\\mathbf{d}(t) \\cdot \\mathbf{w} = 0</span>. <strong>[2 marks]</strong></p><p>(c) Prove that, in general, <span class="chem">|\\mathbf{d}(t)|</span> is least when <span class="chem">t = -(\\mathbf{d_0} \\cdot \\mathbf{w}) / |\\mathbf{w}|^2</span>. <strong>[3 marks]</strong></p><p>(d) Show that the minimum distance <span class="chem">d_{min}</span> satisfies <span class="chem">d_{min}^2 = |\\mathbf{d_0}|^2 - (\\mathbf{d_0} \\cdot \\mathbf{w})^2 / |\\mathbf{w}|^2</span>, and verify this for the vectors in (a). <strong>[3 marks]</strong></p><p>(e) For the vectors in (a), verify that <span class="chem">|\\mathbf{d_0} \\times \\mathbf{w}|^2 / |\\mathbf{w}|^2</span> gives the same value. <strong>[2 marks]</strong></p><p>(f) Two ships have positions <span class="chem">\\mathbf{r_A} = (2.5, -1) + t(14, 6)</span> and <span class="chem">\\mathbf{r_B} = (21, 4.5) + t(-6, 9)</span>, in km, <span class="chem">t</span> hours after midnight. Use your results to find the time of closest approach, in minutes after midnight, and the minimum distance between the ships. <strong>[4 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">\\mathbf{d}(t) = (6 - 2t, -3 + t, 2 + t)</span>, so <span class="chem">|\\mathbf{d}|^2 = (36 - 24t + 4t^2) + (9 - 6t + t^2) + (4 + 4t + t^2) = 6t^2 - 26t + 49</span>. The minimum is at <span class="chem">t = 26/12 = 13/6</span>, where <span class="chem">|\\mathbf{d}|^2 = 49 - 169/6 = 125/6</span>. The minimum distance is <span class="chem">sqrt(125/6) = 5 sqrt(30)/6 ≈ 4.56</span>.</p><p>(b) <span class="chem">\\mathbf{d}(13/6) = (5/3, -5/6, 25/6)</span> and <span class="chem">(5/3)(-2) + (-5/6)(1) + (25/6)(1) = -20/6 - 5/6 + 25/6 = 0</span>.</p><p>(c) <span class="chem">f(t) = |\\mathbf{d}|^2 = (\\mathbf{d_0} + t\\mathbf{w}) \\cdot (\\mathbf{d_0} + t\\mathbf{w}) = |\\mathbf{d_0}|^2 + 2t(\\mathbf{d_0} \\cdot \\mathbf{w}) + t^2|\\mathbf{w}|^2</span>. This quadratic has positive leading coefficient, so its minimum is where <span class="chem">f\'(t) = 2(\\mathbf{d_0} \\cdot \\mathbf{w}) + 2t|\\mathbf{w}|^2 = 0</span>, i.e. <span class="chem">t = -(\\mathbf{d_0} \\cdot \\mathbf{w}) / |\\mathbf{w}|^2</span>. Minimising <span class="chem">|\\mathbf{d}|^2</span> also minimises <span class="chem">|\\mathbf{d}|</span>.</p><p>(d) Substituting: <span class="chem">d_{min}^2 = |\\mathbf{d_0}|^2 - 2(\\mathbf{d_0} \\cdot \\mathbf{w})^2/|\\mathbf{w}|^2 + (\\mathbf{d_0} \\cdot \\mathbf{w})^2/|\\mathbf{w}|^2 = |\\mathbf{d_0}|^2 - (\\mathbf{d_0} \\cdot \\mathbf{w})^2/|\\mathbf{w}|^2</span>. In (a): <span class="chem">49 - (-13)^2/6 = 125/6</span>.</p><p>(e) <span class="chem">\\mathbf{d_0} \\times \\mathbf{w} = (6, -3, 2) \\times (-2, 1, 1) = (-5, -10, 0)</span>, so <span class="chem">|\\mathbf{d_0} \\times \\mathbf{w}|^2 / |\\mathbf{w}|^2 = 125/6</span>.</p><p>(f) <span class="chem">\\mathbf{d_0} = (2.5 - 21, -1 - 4.5) = (-18.5, -5.5)</span>, <span class="chem">\\mathbf{w} = (14 + 6, 6 - 9) = (20, -3)</span>. <span class="chem">\\mathbf{d_0} \\cdot \\mathbf{w} = -353.5</span>, <span class="chem">|\\mathbf{w}|^2 = 409</span>, so <span class="chem">t = 353.5/409 ≈ 0.8643</span> h <span class="chem">≈ 51.9</span> minutes after midnight. <span class="chem">d_{min}^2 = 372.5 - 353.5^2/409 ≈ 66.97</span>, so <span class="chem">d_{min} ≈ 8.18</span> km.</p>',
      markscheme: [
        'A1: expands <span class="chem">|\\mathbf{d}(t)|^2</span> correctly to <span class="chem">6t^2 - 26t + 49</span> (AG).',
        'M1: finds the minimum of the quadratic (vertex, completing the square or derivative).',
        'A1: <span class="chem">t = 13/6</span>.',
        'A1: minimum distance <span class="chem">sqrt(125/6)</span> (or <span class="chem">5 sqrt(30)/6</span>).',
        'M1: substitutes <span class="chem">t = 13/6</span> to get <span class="chem">\\mathbf{d} = (5/3, -5/6, 25/6)</span>.',
        'A1: scalar product with <span class="chem">\\mathbf{w}</span> equals 0.',
        'M1: expands <span class="chem">|\\mathbf{d_0} + t\\mathbf{w}|^2</span> using scalar products.',
        'M1: finds the turning point (derivative or vertex of the quadratic).',
        'R1: states it is a minimum (positive coefficient <span class="chem">|\\mathbf{w}|^2</span>) and that minimising the square minimises the distance (AG).',
        'M1: substitutes <span class="chem">t</span> into the expression for <span class="chem">|\\mathbf{d}|^2</span>.',
        'A1: simplifies to the given result (AG).',
        'A1: <span class="chem">\\mathbf{d_0} \\cdot \\mathbf{w} = -13</span> and <span class="chem">49 - 169/6 = 125/6</span>.',
        'A1: <span class="chem">\\mathbf{d_0} \\times \\mathbf{w} = (-5, -10, 0)</span>.',
        'A1: <span class="chem">125/6</span>, the same value.',
        'M1: forms <span class="chem">\\mathbf{d_0} = (-18.5, -5.5)</span> and <span class="chem">\\mathbf{w} = (20, -3)</span>.',
        'M1: applies the formula for <span class="chem">t</span> (or minimises on the GDC).',
        'A1: <span class="chem">t ≈ 0.864</span> h, about 51.9 minutes after midnight.',
        'A1: minimum distance <span class="chem">≈ 8.18</span> km.'
      ],
      hints: [
        'Decode: the two objects are replaced by one point moving with the relative velocity <span class="chem">\\mathbf{w}</span>. "Closest approach" means "minimum of <span class="chem">|\\mathbf{d}(t)|</span>".',
        'A quadratic <span class="chem">At^2 + Bt + C</span> with <span class="chem">A &gt; 0</span> is least at <span class="chem">t = -B/(2A)</span>.',
        'In (f), <span class="chem">\\mathbf{d_0}</span> is the difference of the starting positions and <span class="chem">\\mathbf{w}</span> is the difference of the velocities.'
      ]
    }
  ]);
})();
