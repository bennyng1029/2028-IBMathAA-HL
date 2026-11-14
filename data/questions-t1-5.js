/* ==========================================================================
   Analysis Lab — data/questions-t1-5.js
   Question bank for Topic 1.5: Mathematical proof and systems of linear equations
   Covers SL 1.6 (direct algebraic proof) and AHL 1.15–1.16 (induction, contradiction,
   counterexamples, and 3 × 3 systems of linear equations).
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.questions) return;

  S1.questions.register('t1-5', [
    {
      id: 't1-5-q001',
      topic: 't1-5',
      level: 'sl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 1.6',
      type: 'mcq',
      marks: 2,
      stem: 'To prove that <span class="chem">x^2 - 8x + 21 &gt;= 5</span> for all <span class="chem">x \\in \\mathbb{R}</span>, which completed-square form directly establishes the result?',
      options: [
        '<span class="chem">(x - 4)^2 + 5</span>, and since <span class="chem">(x - 4)^2 &gt;= 0</span> for all <span class="chem">x \\in \\mathbb{R}</span>, the expression is <span class="chem">&gt;= 5</span>.',
        '<span class="chem">(x - 4)^2 + 21</span>, and since <span class="chem">(x - 4)^2 &gt;= 0</span>, the expression is <span class="chem">&gt;= 21 &gt;= 5</span>.',
        '<span class="chem">(x - 8)^2 - 43</span>, which has minimum value <span class="chem">5</span>.',
        'Substitute <span class="chem">x = 0, 1, 2, 3, 4</span> and observe that every output is at least <span class="chem">5</span>.'
      ],
      answer: 0,
      misconception: {
        1: 'When completing the square on x² − 8x + 21, you must subtract (−4)² = 16: (x − 4)² − 16 + 21 = (x − 4)² + 5.',
        2: 'Half of the coefficient of x is −8/2 = −4, not −8.',
        3: 'Testing a finite list of numerical values never constitutes a deductive proof for all real numbers x ∈ ℝ.'
      },
      hints: [
        'Complete the square on <span class="chem">x^2 - 8x + 21</span> by halving the coefficient of <span class="chem">x</span>.',
        '<span class="chem">x^2 - 8x + 21 = (x - 4)^2 - 16 + 21 = (x - 4)^2 + 5</span>.'
      ],
      solution: '<p>Completing the square gives <span class="chem">x^2 - 8x + 21 == (x - 4)^2 + 5</span>. Since <span class="chem">(x - 4)^2 &gt;= 0</span> for all <span class="chem">x \\in \\mathbb{R}</span>, we have <span class="chem">(x - 4)^2 + 5 &gt;= 5</span>.</p>'
    },
    {
      id: 't1-5-q002',
      topic: 't1-5',
      level: 'sl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 1.6',
      type: 'numeric',
      marks: 3,
      stem: 'The sum of the squares of any three consecutive integers <span class="chem">(n - 1)^2 + n^2 + (n + 1)^2</span> can be written in the form <span class="chem">A n^2 + B</span>, where <span class="chem">A, B \\in \\mathbb{Z}</span>. Find the value of <span class="chem">A + B</span>.',
      answer: 5,
      tolerance: 0.001,
      hints: [
        'Expand <span class="chem">(n - 1)^2 = n^2 - 2n + 1</span> and <span class="chem">(n + 1)^2 = n^2 + 2n + 1</span>.',
        'Add all three terms: the <span class="chem">-2n</span> and <span class="chem">+2n</span> cancel, leaving <span class="chem">3n^2 + 2</span>.'
      ],
      solution: '<p><span class="chem">(n - 1)^2 + n^2 + (n + 1)^2 = (n^2 - 2n + 1) + n^2 + (n^2 + 2n + 1) = 3n^2 + 2</span>. Thus <span class="chem">A = 3, B = 2</span> and <span class="chem">A + B = 5</span>.</p>'
    },
    {
      id: 't1-5-q003',
      topic: 't1-5',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 1.6',
      type: 'order',
      marks: 3,
      stem: 'Arrange the steps in logical <span class="chem">LHS -&gt; RHS</span> order to prove the algebraic identity <span class="chem">1 / (n(n + 1)) + 1 / ((n + 1)(n + 2)) == 2 / (n(n + 2))</span> for <span class="chem">n \\in \\mathbb{Z}^+</span>.',
      options: [
        'Start with the left-hand side: <span class="chem">LHS = 1 / (n(n + 1)) + 1 / ((n + 1)(n + 2))</span>.',
        'Rewrite over the common denominator <span class="chem">n(n + 1)(n + 2)</span>: <span class="chem">= ((n + 2) + n) / (n(n + 1)(n + 2))</span>.',
        'Collect like terms in the numerator and factor out 2: <span class="chem">= (2n + 2) / (n(n + 1)(n + 2)) = 2(n + 1) / (n(n + 1)(n + 2))</span>.',
        'Cancel the non-zero common factor <span class="chem">(n + 1)</span> to obtain <span class="chem">2 / (n(n + 2)) = RHS</span>.'
      ],
      answer: [0, 1, 2, 3],
      hints: [
        'In a direct proof of an identity, always state <span class="chem">LHS</span> first rather than assuming <span class="chem">LHS = RHS</span>.',
        'Put the two fractions over a common denominator, factor the numerator as <span class="chem">2(n + 1)</span>, and cancel <span class="chem">(n + 1)</span>.'
      ],
      solution: '<p><span class="chem">LHS = ((n + 2) + n) / (n(n + 1)(n + 2)) = 2(n + 1) / (n(n + 1)(n + 2)) = 2 / (n(n + 2)) = RHS</span>.</p>'
    },
    {
      id: 't1-5-q004',
      topic: 't1-5',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 1.6',
      type: 'short',
      marks: 4,
      stem: 'Prove algebraically that the product of any two odd integers subtracted from the square of an even integer is always an odd integer. [4 marks]',
      answer: '<p>Let the two odd integers be <span class="chem">2a + 1</span> and <span class="chem">2b + 1</span>, and the even integer be <span class="chem">2c</span>, where <span class="chem">a, b, c \\in \\mathbb{Z}</span>.<br><span class="chem">(2c)^2 - (2a + 1)(2b + 1) = 4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span>.<br>Since <span class="chem">k = 2c^2 - 2ab - a - b - 1 \\in \\mathbb{Z}</span>, the expression is of the form <span class="chem">2k + 1</span>, which is always an odd integer.</p>',
      markscheme: [
        'M1: Represents two general odd integers using distinct variables (e.g. 2a + 1 and 2b + 1) and an even integer (2c) for a, b, c ∈ ℤ.',
        'A1: Correctly expands (2c)² − (2a + 1)(2b + 1) = 4c² − 4ab − 2a − 2b − 1.',
        'M1: Factors into the form 2(integer) − 1 or 2(integer) + 1.',
        'R1: Concludes that since 2c² − 2ab − a − b − 1 ∈ ℤ, the result is an odd integer.'
      ],
      hints: [
        'Be careful to use <strong>different letters</strong> (<span class="chem">2a + 1, 2b + 1, 2c</span>) because the question says "any two odd integers" and "an even integer" (not necessarily related to the same <span class="chem">n</span>!).',
        'Expand <span class="chem">(2c)^2 - (2a + 1)(2b + 1)</span> and rewrite it in the form <span class="chem">2k + 1</span> (or <span class="chem">2k - 1</span>).'
      ],
      solution: '<p>Using the same letter <span class="chem">n</span> for all three numbers (for example <span class="chem">2n + 1, 2n + 1, 2n</span>) only proves a special case in which the numbers are related. Using distinct <span class="chem">a, b, c \\in \\mathbb{Z}</span> gives <span class="chem">4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span>, which is odd.</p>'
    },
    {
      id: 't1-5-q005',
      topic: 't1-5',
      level: 'ahl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.15',
      type: 'mcq',
      marks: 2,
      stem: 'In a proof by mathematical induction for <span class="chem">n \\in \\mathbb{Z}^+</span>, which wording of the inductive hypothesis earns full IB reasoning credit?',
      options: [
        '“Assume <span class="chem">P(k)</span> is true for some <span class="chem">k \\in \\mathbb{Z}^+</span>.”',
        '“Assume <span class="chem">P(k)</span> is true for all <span class="chem">k \\in \\mathbb{Z}^+</span>.”',
        '“Suppose <span class="chem">P(n)</span> is true for <span class="chem">n = k + 1</span>.”',
        '“Since <span class="chem">P(1)</span> and <span class="chem">P(2)</span> are true, <span class="chem">P(k)</span> is true.”'
      ],
      answer: 0,
      misconception: {
        1: 'Assuming P(k) is true for ALL k ∈ ℤ⁺ assumes the very conclusion you are trying to prove, which forfeits the final R1 mark on IB markschemes.',
        2: 'P(k + 1) is what you must deduce from P(k), not what you assume.',
        3: 'Checking P(1) and P(2) only verifies two base cases; it does not establish P(k).'
      },
      hints: [
        'Remember the domino analogy: you only assume that one particular domino <span class="chem">k</span> falls, and show it knocks over <span class="chem">k + 1</span>.',
        'Distinguish carefully between "for some <span class="chem">k \\in \\mathbb{Z}^+</span>" and "for all <span class="chem">k \\in \\mathbb{Z}^+</span>".'
      ],
      solution: '<p>IB markschemes require the inductive hypothesis to be stated for <strong>some</strong> (or a particular) positive integer <span class="chem">k \\in \\mathbb{Z}^+</span>, never for all <span class="chem">k</span>.</p>'
    },
    {
      id: 't1-5-q006',
      topic: 't1-5',
      level: 'ahl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.15',
      type: 'mcq',
      marks: 2,
      stem: 'Consider the false statement: “For all real numbers <span class="chem">a, b \\in \\mathbb{R}</span>, if <span class="chem">a &lt; b</span>, then <span class="chem">a^2 &lt; b^2</span>.” Which pair <span class="chem">(a, b)</span> is a valid counterexample?',
      options: [
        '<span class="chem">a = -3, b = 1</span>',
        '<span class="chem">a = 1, b = 3</span>',
        '<span class="chem">a = 3, b = -1</span>',
        '<span class="chem">a = 0, b = 2</span>'
      ],
      answer: 0,
      misconception: {
        1: 'For a = 1, b = 3, both the hypothesis (1 < 3) and the conclusion (1 < 9) are true, so it does not disprove the statement.',
        2: 'A counterexample must satisfy the hypothesis a < b; here 3 < −1 is false.',
        3: 'For a = 0, b = 2, 0 < 4 holds, so this is a supporting example, not a counterexample.'
      },
      hints: [
        'A counterexample must make the hypothesis <span class="chem">a &lt; b</span> <strong>true</strong> and the conclusion <span class="chem">a^2 &lt; b^2</span> <strong>false</strong>.',
        'Choose a negative number <span class="chem">a</span> with a larger absolute value than <span class="chem">b</span>.'
      ],
      solution: '<p>With <span class="chem">a = -3</span> and <span class="chem">b = 1</span>, the hypothesis <span class="chem">-3 &lt; 1</span> is true, but <span class="chem">a^2 = 9</span> and <span class="chem">b^2 = 1</span> so <span class="chem">a^2 &lt; b^2</span> is false.</p>'
    },
    {
      id: 't1-5-q007',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.15',
      type: 'numeric',
      marks: 2,
      stem: 'In a proof by mathematical induction that <span class="chem">Sigma_{r=1}^n r(r!) = (n + 1)! - 1</span> for <span class="chem">n \\in \\mathbb{Z}^+</span>, the inductive step for <span class="chem">n = k + 1</span> combines the inductive hypothesis with the <span class="chem">(k + 1)</span>-th term:<br><span class="chem">((k + 1)! - 1) + (k + 1)(k + 1)! = (k + A)(k + 1)! - 1 = (k + 2)! - 1</span>.<br>Find the integer value of <span class="chem">A</span>.',
      answer: 2,
      tolerance: 0.001,
      hints: [
        'Factor <span class="chem">(k + 1)!</span> out of the two terms <span class="chem">1 · (k + 1)! + (k + 1)(k + 1)!</span>.',
        '<span class="chem">(1 + k + 1)(k + 1)! = (k + 2)(k + 1)! = (k + 2)!</span>.'
      ],
      solution: '<p>Factoring <span class="chem">(k + 1)!</span> gives <span class="chem">(1 + k + 1)(k + 1)! - 1 = (k + 2)(k + 1)! - 1 = (k + 2)! - 1</span>, so <span class="chem">A = 2</span>.</p>'
    },
    {
      id: 't1-5-q008',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.15',
      type: 'numeric',
      marks: 2,
      stem: 'We wish to prove by mathematical induction that <span class="chem">f(n) = 7^n + 2</span> is divisible by <span class="chem">3</span> for all <span class="chem">n \\in \\mathbb{Z}^+</span>. Assuming <span class="chem">7^k + 2 = 3A</span> (<span class="chem">A \\in \\mathbb{Z}</span>), we write <span class="chem">f(k + 1) = 7(3A - 2) + 2 = 21A - 12 = 3(7A - B)</span>. Find the integer value of <span class="chem">B</span>.',
      answer: 4,
      tolerance: 0.001,
      hints: [
        'Expand <span class="chem">7(3A - 2) + 2 = 21A - 14 + 2 = 21A - 12</span>.',
        'Factor out <span class="chem">3</span> from <span class="chem">21A - 12</span>.'
      ],
      solution: '<p><span class="chem">f(k + 1) = 7(3A - 2) + 2 = 21A - 12 = 3(7A - 4)</span>, so <span class="chem">B = 4</span>.</p>'
    },
    {
      id: 't1-5-q009',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.15',
      type: 'order',
      marks: 4,
      stem: 'Arrange the steps in logical order to prove by contradiction that <span class="chem">log_3 7</span> is an irrational number.',
      options: [
        'Assume, for a contradiction, that <span class="chem">log_3 7</span> is rational, so <span class="chem">log_3 7 = p / q</span> for some positive integers <span class="chem">p, q \\in \\mathbb{Z}^+</span>.',
        'Rewrite the logarithmic equation in exponential form as <span class="chem">3^{p/q} = 7</span>, and raise both sides to the power <span class="chem">q</span> to obtain <span class="chem">3^p = 7^q</span>.',
        'Observe that for all <span class="chem">p, q \\in \\mathbb{Z}^+</span>, <span class="chem">3^p</span> is divisible by the prime <span class="chem">3</span>, whereas <span class="chem">7^q</span> has only <span class="chem">7</span> as a prime factor and is not divisible by <span class="chem">3</span>.',
        'This is a contradiction by the fundamental uniqueness of prime factorizations; hence <span class="chem">log_3 7</span> must be irrational.'
      ],
      answer: [0, 1, 2, 3],
      hints: [
        'Begin by assuming the negation: <span class="chem">log_3 7 = p / q</span> with <span class="chem">p, q \\in \\mathbb{Z}^+</span>.',
        'Convert to integer powers <span class="chem">3^p = 7^q</span> and compare prime factors.'
      ],
      solution: '<p>Assume <span class="chem">log_3 7 = p/q</span> (<span class="chem">p, q \\in \\mathbb{Z}^+</span>), deduce <span class="chem">3^p = 7^q</span>, note that <span class="chem">3</span> divides the LHS but not the RHS, and conclude by contradiction that <span class="chem">log_3 7</span> is irrational.</p>'
    },
    {
      id: 't1-5-q010',
      topic: 't1-5',
      level: 'ahl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.16',
      type: 'mcq',
      marks: 2,
      stem: 'After Gaussian elimination on a <span class="chem">3 × 3</span> linear system in <span class="chem">x, y, z</span>, the third row of the augmented matrix is <span class="mono">[ 0  0  k−4 | k²−16 ]</span>. For which value of <span class="chem">k</span> does the system have <strong>infinitely many solutions</strong>?',
      options: [
        '<span class="chem">k = 4</span>',
        '<span class="chem">k = -4</span>',
        '<span class="chem">k = 4</span> or <span class="chem">k = -4</span>',
        'All real values of <span class="chem">k != 4</span>'
      ],
      answer: 0,
      misconception: {
        1: 'At k = −4, the right-hand side is 0 but the z-coefficient is −4 − 4 = −8 ≠ 0, giving the unique value z = 0 / (−8) = 0!',
        2: 'Only k = 4 makes the z-coefficient k − 4 equal to 0; at k = −4 the system has a unique solution with z = 0.',
        3: 'k ≠ 4 is the condition for a unique solution, not infinitely many solutions.'
      },
      hints: [
        'Infinitely many solutions require Row 3 to become <span class="chem">0z = 0</span>.',
        'Set both <span class="chem">k - 4 = 0</span> AND <span class="chem">k^2 - 16 = 0</span>.'
      ],
      solution: '<p>For infinitely many solutions, we need both the coefficient of <span class="chem">z</span> and the RHS to be zero: <span class="chem">k - 4 = 0</span> and <span class="chem">k^2 - 16 = 0</span>, which gives <span class="chem">k = 4</span>.</p>'
    },
    {
      id: 't1-5-q011',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.16',
      type: 'numeric',
      marks: 4,
      stem: 'Find the unique solution to the <span class="chem">3 × 3</span> linear system:<br><span class="chem">x + y + z = 6</span><br><span class="chem">2x - y + z = 3</span><br><span class="chem">x + 2y - z = 2</span>.<br>Enter the value of <span class="chem">x + 2y + 3z</span>.',
      answer: 14,
      tolerance: 0.001,
      hints: [
        'Add Equation 1 and Equation 3 to eliminate <span class="chem">z</span> immediately: <span class="chem">2x + 3y = 8</span>. Also subtract Equation 1 from Equation 2 to get <span class="chem">x - 2y = -3</span>.',
        'Solving <span class="chem">2x + 3y = 8</span> and <span class="chem">x - 2y = -3</span> gives <span class="chem">x = 1, y = 2</span>, and substituting into Equation 1 gives <span class="chem">z = 3</span>.'
      ],
      solution: '<p>Eliminating <span class="chem">z</span> gives <span class="chem">x - 2y = -3</span> and <span class="chem">2x + 3y = 8</span>, so <span class="chem">7y = 14 =&gt; y = 2, x = 1, z = 3</span>. Therefore <span class="chem">x + 2y + 3z = 1 + 4 + 9 = 14</span>.</p>'
    },
    {
      id: 't1-5-q012',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.16',
      type: 'numeric',
      marks: 4,
      stem: 'Find the value of the real constant <span class="chem">k</span> for which the following system of equations is <strong>inconsistent</strong> (has no solution):<br><span class="chem">x + 2y + z = 4</span><br><span class="chem">2x + 5y + 3z = 9</span><br><span class="chem">3x + 7y + kz = 10</span>.',
      answer: 4,
      tolerance: 0.001,
      hints: [
        'Use Gaussian elimination: <span class="chem">R_2 -&gt; R_2 - 2R_1</span> gives <span class="chem">y + z = 1</span>, and <span class="chem">R_3 -&gt; R_3 - 3R_1</span> gives <span class="chem">y + (k - 3)z = -2</span>.',
        'Now compute <span class="chem">R_3 - R_2</span>: <span class="chem">(k - 4)z = -3</span>. For no solution, the coefficient of <span class="chem">z</span> must be <span class="chem">0</span>.'
      ],
      solution: '<p>Row reduction gives <span class="chem">R_2 - 2R_1: y + z = 1</span> and <span class="chem">R_3 - 3R_1: y + (k - 3)z = -2</span>. Subtracting gives <span class="chem">(k - 4)z = -3</span>, which has no solution when <span class="chem">k = 4</span>.</p>'
    },
    {
      id: 't1-5-q013',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.16',
      type: 'multi',
      marks: 3,
      stem: 'A <span class="chem">3 × 3</span> linear system reduces under Gaussian elimination to:<br><span class="mono">[ 1   1   1  |  3 ]</span><br><span class="mono">[ 0   1  −2  |  1 ]</span><br><span class="mono">[ 0   0  a²−1 | a−1 ]</span>.<br>Select <strong>all</strong> correct statements.',
      options: [
        'When <span class="chem">a = 1</span>, the system has infinitely many solutions lying on a line in 3D space.',
        'When <span class="chem">a = -1</span>, the system has no solution.',
        'When <span class="chem">a = 1</span>, setting <span class="chem">z = lambda</span> gives <span class="chem">y = 1 + 2 lambda</span> and <span class="chem">x = 2 - 3 lambda</span>.',
        'When <span class="chem">a = 0</span>, the system has no solution.'
      ],
      answer: [0, 1, 2],
      misconception: {
        3: 'When a = 0, Row 3 becomes −1z = −1 ⇒ z = 1, which gives a unique solution (x, y, z) = (−1, 3, 1), not no solution.'
      },
      hints: [
        'Factor the third row as <span class="chem">(a - 1)(a + 1)z = a - 1</span>.',
        'Check <span class="chem">a = 1</span> (<span class="chem">0z = 0</span>), <span class="chem">a = -1</span> (<span class="chem">0z = -2</span>), and <span class="chem">a = 0</span> (<span class="chem">-z = -1</span>).'
      ],
      solution: '<p>Row 3 is <span class="chem">(a - 1)(a + 1)z = a - 1</span>. For <span class="chem">a = 1</span>, <span class="chem">0z = 0</span> (infinite solutions with <span class="chem">z = lambda, y = 1 + 2lambda, x = 3 - (1 + 2lambda) - lambda = 2 - 3lambda</span>). For <span class="chem">a = -1</span>, <span class="chem">0z = -2</span> (no solution).</p>'
    },
    {
      id: 't1-5-q014',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.15',
      type: 'numeric',
      marks: 4,
      stem: 'Find the smallest positive integer <span class="chem">n_0</span> such that the inequality <span class="chem">2^n &gt; 2n + 1</span> holds for all integers <span class="chem">n &gt;= n_0</span>.',
      answer: 3,
      tolerance: 0.001,
      hints: [
        'Test <span class="chem">n = 1, 2, 3, 4</span> in <span class="chem">2^n &gt; 2n + 1</span>.',
        'For <span class="chem">n = 1</span>: <span class="chem">2 &gt; 3</span> (false). For <span class="chem">n = 2</span>: <span class="chem">4 &gt; 5</span> (false). For <span class="chem">n = 3</span>: <span class="chem">8 &gt; 7</span> (true).'
      ],
      solution: '<p>Testing small positive integers: <span class="chem">n = 1</span> gives <span class="chem">2 &gt; 3</span> (false); <span class="chem">n = 2</span> gives <span class="chem">4 &gt; 5</span> (false); <span class="chem">n = 3</span> gives <span class="chem">8 &gt; 7</span> (true). By induction, it holds for all <span class="chem">n &gt;= 3</span>, so the base case is <span class="chem">n_0 = 3</span>.</p>'
    },
    {
      id: 't1-5-q015',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.15',
      type: 'numeric',
      marks: 5,
      stem: 'Let <span class="chem">f(x) = x e^{2x}</span>. It can be proved by mathematical induction that the <span class="chem">n</span>-th derivative is <span class="chem">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span> for all <span class="chem">n \\in \\mathbb{Z}^+</span>. Evaluate <span class="chem">f^{(5)}(0)</span>.',
      answer: 80,
      tolerance: 0.001,
      hints: [
        'Substitute <span class="chem">n = 5</span> and <span class="chem">x = 0</span> into <span class="chem">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span>.',
        '<span class="chem">f^{(5)}(0) = 2^{4}(0 + 5)e^0 = 16 × 5 × 1</span>.'
      ],
      solution: '<p>Substituting <span class="chem">n = 5</span> and <span class="chem">x = 0</span> gives <span class="chem">f^{(5)}(0) = 2^{5-1}(2(0) + 5)e^0 = 16 × 5 = 80</span>.</p>'
    },
    {
      id: 't1-5-q016',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.15',
      type: 'mcq',
      marks: 4,
      stem: 'Suppose a student attempts to prove by contradiction that <span class="chem">sqrt(4)</span> is irrational by writing <span class="chem">sqrt(4) = a / b</span> with <span class="chem">gcd(a, b) = 1</span>, squaring to get <span class="chem">a^2 = 4b^2</span>, and claiming: “Since <span class="chem">4</span> divides <span class="chem">a^2</span>, <span class="chem">4</span> must divide <span class="chem">a</span>.” Why does this step fail?',
      options: [
        'Because <span class="chem">4</span> is composite (not prime): <span class="chem">4</span> divides <span class="chem">a^2</span> only implies <span class="chem">2</span> divides <span class="chem">a</span> (for example, <span class="chem">a = 2</span> has <span class="chem">4 | 2^2</span> but <span class="chem">4 \\nmid 2</span>).',
        'Because <span class="chem">a</span> and <span class="chem">b</span> cannot be chosen with <span class="chem">gcd(a, b) = 1</span> for rational numbers.',
        'Because squaring both sides of an equation is not allowed in a proof by contradiction.',
        'Because <span class="chem">4b^2</span> is an odd integer whenever <span class="chem">b</span> is odd.'
      ],
      answer: 0,
      misconception: {
        1: 'Every rational number can be written in lowest terms a/b with gcd(a, b) = 1 (for √4 = 2, a = 2 and b = 1).',
        2: 'Squaring both sides is a valid implication (A = B ⇒ A² = B²).',
        3: '4b² is always a multiple of 4, so it is always even.'
      },
      hints: [
        'Compare <span class="chem">p | a^2 =&gt; p | a</span> when <span class="chem">p</span> is prime versus when <span class="chem">p = 4</span> is a square composite number.',
        'Test <span class="chem">a = 2, b = 1</span>: does <span class="chem">4</span> divide <span class="chem">a^2 = 4</span>? Does <span class="chem">4</span> divide <span class="chem">a = 2</span>?'
      ],
      solution: '<p>Euclid\'s lemma (<span class="chem">p | a^2 =&gt; p | a</span>) requires <span class="chem">p</span> to be prime (or square-free). Since <span class="chem">4 = 2^2</span> is composite, <span class="chem">4 | a^2</span> only implies <span class="chem">2 | a</span> (specifically <span class="chem">a = 2, b = 1</span> satisfies <span class="chem">a^2 = 4b^2</span> with <span class="chem">gcd(2, 1) = 1</span>).</p>'
    },
    {
      id: 't1-5-q017',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.15',
      type: 'short',
      marks: 7,
      stem: 'Prove by mathematical induction that for all <span class="chem">n \\in \\mathbb{Z}^+</span>,<br><span class="chem">Sigma_{r=1}^n r · 2^{r-1} = (n - 1)2^n + 1</span>. [7 marks]',
      answer: '<p><strong>Base case (<span class="chem">n = 1</span>):</strong> <span class="chem">LHS = 1 · 2^0 = 1</span>; <span class="chem">RHS = (1 - 1)2^1 + 1 = 1</span>. Since <span class="chem">LHS = RHS</span>, <span class="chem">P(1)</span> is true.<br><strong>Inductive hypothesis:</strong> Assume <span class="chem">P(k)</span> is true for some <span class="chem">k \\in \\mathbb{Z}^+</span>: <span class="chem">Sigma_{r=1}^k r · 2^{r-1} = (k - 1)2^k + 1</span>.<br><strong>Inductive step (<span class="chem">n = k + 1</span>):</strong><br><span class="chem">Sigma_{r=1}^{k+1} r · 2^{r-1} = ((k - 1)2^k + 1) + (k + 1)2^k = (k - 1 + k + 1)2^k + 1 = (2k)2^k + 1 = k · 2^{k+1} + 1 = ((k + 1) - 1)2^{k+1} + 1</span>.<br><strong>Conclusion:</strong> Since <span class="chem">P(1)</span> is true and <span class="chem">P(k) =&gt; P(k + 1)</span>, by the principle of mathematical induction <span class="chem">P(n)</span> is true for all <span class="chem">n \\in \\mathbb{Z}^+</span>.</p>',
      markscheme: [
        'A1: Base case n = 1: evaluates LHS = 1 and RHS = (0)2¹ + 1 = 1 and states P(1) is true.',
        'M1: States inductive hypothesis: assumes P(k) is true for some k ∈ ℤ⁺.',
        'M1: Considers n = k + 1 by adding the (k + 1)-th term (k + 1)2<sup>k</sup> to the assumed sum.',
        'A1: Correctly writes the n = k + 1 sum as ((k − 1)2<sup>k</sup> + 1) + (k + 1)2<sup>k</sup>.',
        'A1: Factors out 2<sup>k</sup> to get ((k − 1) + (k + 1))2<sup>k</sup> + 1 = 2k · 2<sup>k</sup> + 1.',
        'A1: Simplifies 2k · 2<sup>k</sup> + 1 to k · 2<sup>k+1</sup> + 1 = ((k + 1) − 1)2<sup>k+1</sup> + 1.',
        'R1: States final induction conclusion sentence (awarded only if previous M marks earned).'
      ],
      hints: [
        'After substituting the inductive hypothesis for <span class="chem">n = k</span>, add the <span class="chem">(k + 1)</span>-th term <span class="chem">(k + 1)2^k</span>.',
        'Factor out <span class="chem">2^k</span> from <span class="chem">(k - 1)2^k + (k + 1)2^k</span> to get <span class="chem">2k · 2^k = k · 2^{k+1}</span>.'
      ],
      solution: '<p>Factoring <span class="chem">2^k</span> in the inductive step gives <span class="chem">((k - 1) + (k + 1))2^k + 1 = 2k · 2^k + 1 = k · 2^{k+1} + 1</span>, matching the <span class="chem">n = k + 1</span> formula.</p>'
    },
    {
      id: 't1-5-q018',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.16',
      type: 'short',
      marks: 7,
      stem: 'Consider the system of linear equations:<br><span class="chem">x - y + 2z = 1</span><br><span class="chem">2x - y + 5z = 4</span><br><span class="chem">3x - 2y + (k^2 - 2)z = k + 2</span>, where <span class="chem">k \\in \\mathbb{R}</span>.<br>(a) Reduce the system to row-echelon form and find the value of <span class="chem">k</span> for which the system has no solution, and the value of <span class="chem">k</span> for which it has infinitely many solutions. [4 marks]<br>(b) Find the general solution in parametric form when the system has infinitely many solutions. [3 marks]',
      answer: '<p>(a) Row reduction gives <span class="chem">y + z = 2</span> and <span class="chem">(k^2 - 9)z = k - 3</span>. The system has <strong>no solution</strong> when <span class="chem">k = -3</span> and <strong>infinitely many solutions</strong> when <span class="chem">k = 3</span>.<br>(b) Letting <span class="chem">z = lambda</span> (<span class="chem">lambda \\in \\mathbb{R}</span>) gives <span class="chem">y = 2 - lambda</span> and <span class="chem">x = 3 - 3lambda</span>.</p>',
      markscheme: [
        'M1: Eliminates x using R₂ → R₂ − 2R₁ and R₃ → R₃ − 3R₁.',
        'A1: Obtains y + z = 2 and y + (k² − 8)z = k − 1.',
        'A1: Eliminates y using R₃ → R₃ − R₂ to obtain (k² − 9)z = k − 3.',
        'A1: Identifies k = −3 for no solution and k = 3 for infinitely many solutions.',
        'M1: Sets z = λ (λ ∈ ℝ) and back-substitutes into Row 2 to find y = 2 − λ.',
        'A1: Back-substitutes into Row 1 to find x = 1 + (2 − λ) − 2λ = 3 − 3λ.',
        'A1: Writes the complete parametric solution (x, y, z) = (3 − 3λ, 2 − λ, λ) for λ ∈ ℝ.'
      ],
      hints: [
        'Apply <span class="chem">R_2 - 2R_1</span> to get <span class="chem">y + z = 2</span>, and <span class="chem">R_3 - 3R_1</span> to get <span class="chem">y + (k^2 - 8)z = k - 1</span>.',
        'Subtract the new Row 2 from the new Row 3 to get <span class="chem">(k^2 - 9)z = k - 3</span>.'
      ],
      solution: '<p>(a) <span class="chem">R_2 - 2R_1 =&gt; y + z = 2</span>; <span class="chem">R_3 - 3R_1 =&gt; y + (k^2 - 8)z = k - 1</span>; <span class="chem">R_3 - R_2 =&gt; (k^2 - 9)z = k - 3</span>. Thus <span class="chem">k = -3</span> gives no solution and <span class="chem">k = 3</span> gives infinite solutions.<br>(b) With <span class="chem">z = lambda</span>, <span class="chem">y = 2 - lambda</span> and <span class="chem">x = 1 + y - 2z = 3 - 3lambda</span>.</p>'
    },
    {
      id: 't1-5-q019',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.16',
      type: 'numeric',
      marks: 3,
      stem: 'Use your GDC (system solver or row reduction) to solve the system of equations:<br><span class="chem">2x + 3y - z = 4.7</span><br><span class="chem">x - 2y + 5z = -1.3</span><br><span class="chem">3x + y + 2z = 6.1</span><br>Find the value of <span class="chem">x</span>, correct to 3 significant figures.',
      answer: 3.2928571429,
      sigfigs: 3,
      tolerance: '0.5%',
      hints: [
        'Enter the augmented matrix with rows <span class="chem">[2, 3, -1 | 4.7]</span>, <span class="chem">[1, -2, 5 | -1.3]</span> and <span class="chem">[3, 1, 2 | 6.1]</span>, then use rref (or the simultaneous equation solver).',
        'The GDC gives <span class="chem">z = -1.35</span> and <span class="chem">y ≈ -1.0786</span>. Check your values by substituting them into one of the equations.'
      ],
      solution: '<p>The GDC gives the unique solution <span class="chem">x = 461/140 ≈ 3.29</span>, <span class="chem">y = -151/140 ≈ -1.08</span>, <span class="chem">z = -1.35</span>, so the three planes meet at one point. Check: <span class="chem">2(3.2929) + 3(-1.0786) - (-1.35) = 4.70</span>. So <span class="chem">x = 3.29</span> (3 s.f.).</p>'
    }
  ]);
})();
