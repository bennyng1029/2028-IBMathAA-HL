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
      stem: 'The sum of the squares of any three consecutive integers <span class="chem">(n - 1)^2 + n^2 + (n + 1)^2</span> can be written in the form <span class="chem">A n^2 + B</span>, where <span class="chem">A, B \\in \\mathbb{Z}</span>. Find the value of <span class="chem">B</span>.',
      answer: 2,
      exact: true,
      answerInput: '2',
      hints: [
        'Expand <span class="chem">(n - 1)^2 = n^2 - 2n + 1</span> and <span class="chem">(n + 1)^2 = n^2 + 2n + 1</span>.',
        'Add all three terms: the <span class="chem">-2n</span> and <span class="chem">+2n</span> cancel, leaving <span class="chem">3n^2 + 2</span>.'
      ],
      solution: '<p><span class="chem">(n - 1)^2 + n^2 + (n + 1)^2 = (n^2 - 2n + 1) + n^2 + (n^2 + 2n + 1) = 3n^2 + 2</span>. Thus <span class="chem">A = 3</span> and <span class="chem">B = 2</span>.</p>'
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
        1: 'Assuming P(k) is true for ALL k ∈ ℤ⁺ assumes the very conclusion you are trying to prove, so on IB markschemes it loses the M1 for the inductive hypothesis and, with it, the final R1 mark.',
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
      exact: true,
      answerInput: '2',
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
      exact: true,
      answerInput: '4',
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
      stem: 'Find the unique solution to the <span class="chem">3 × 3</span> linear system:<br><span class="chem">x + y + z = 6</span><br><span class="chem">2x - y + z = 3</span><br><span class="chem">x + 2y - z = 2</span>.<br>Find the value of <span class="chem">z</span>.',
      answer: 3,
      exact: true,
      answerInput: '3',
      hints: [
        'Add Equation 1 and Equation 3 to eliminate <span class="chem">z</span> immediately: <span class="chem">2x + 3y = 8</span>. Also subtract Equation 1 from Equation 2 to get <span class="chem">x - 2y = -3</span>.',
        'Solving <span class="chem">2x + 3y = 8</span> and <span class="chem">x - 2y = -3</span> gives <span class="chem">x = 1, y = 2</span>, and substituting into Equation 1 gives <span class="chem">z = 3</span>.'
      ],
      solution: '<p>Eliminating <span class="chem">z</span> gives <span class="chem">x - 2y = -3</span> and <span class="chem">2x + 3y = 8</span>, so <span class="chem">7y = 14 =&gt; y = 2, x = 1, z = 3</span>. Check in Equation 3: <span class="chem">1 + 4 - 3 = 2</span>. Therefore <span class="chem">z = 3</span>.</p>'
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
      exact: true,
      answerInput: '4',
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
      exact: true,
      answerInput: '3',
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
      marks: 2,
      stem: 'Let <span class="chem">f(x) = x e^{2x}</span>. It can be proved by mathematical induction that the <span class="chem">n</span>-th derivative is <span class="chem">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span> for all <span class="chem">n \\in \\mathbb{Z}^+</span>. Evaluate <span class="chem">f^{(5)}(0)</span>.',
      answer: 80,
      exact: true,
      answerInput: '80',
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
      marks: 2,
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
    },
    {
      id: 't1-5-q020',
      topic: 't1-5',
      level: 'sl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 1.6',
      type: 'mcq',
      marks: 1,
      stem: 'The symbol <span class="chem">==</span> (“is identically equal to”) may only be used for a statement that is true for <strong>every</strong> value of the variable. Which of the following statements is an identity?',
      options: [
        '<span class="chem">(x - 3)^2 = x^2 - 6x + 9</span>',
        '<span class="chem">x^2 - 6x + 9 = 0</span>',
        '<span class="chem">(x - 3)^2 = x^2 + 9</span>',
        '<span class="chem">2(x - 3) = x - 3</span>'
      ],
      answer: 0,
      misconception: {
        1: 'This is an equation: it is true only when x = 3, so it is not an identity and must be written with =, not ≡.',
        2: 'This statement is false for most x (try x = 1: 4 ≠ 10). Squaring a bracket gives the middle term −6x, so (x − 3)² ≢ x² + 9.',
        3: 'This equation holds only for x = 3 (both sides are then 0). An identity must hold for every x.'
      },
      hints: [
        'Test each statement with two different values, for example <span class="chem">x = 0</span> and <span class="chem">x = 1</span>. An identity never fails.',
        'Expand <span class="chem">(x - 3)^2</span> fully: <span class="chem">(x - 3)(x - 3) = x^2 - 3x - 3x + 9</span>.'
      ],
      solution: '<p>Expanding gives <span class="chem">(x - 3)^2 = x^2 - 6x + 9</span> for every real <span class="chem">x</span>, so we may write <span class="chem">(x - 3)^2 == x^2 - 6x + 9</span>. The other three statements are equations that are true for at most one value of <span class="chem">x</span> (or are false).</p>'
    },
    {
      id: 't1-5-q021',
      topic: 't1-5',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 1.6',
      type: 'short',
      marks: 5,
      stem: 'A student notices that <span class="chem">1 × 2 × 3 × 4 + 1 = 25</span> and <span class="chem">2 × 3 × 4 × 5 + 1 = 121</span>. Prove that one more than the product of any four consecutive integers is always a perfect square. [5 marks]',
      answer: '<p>Let the integers be <span class="chem">n, n + 1, n + 2, n + 3</span> with <span class="chem">n \\in \\mathbb{Z}</span>. Pair the outer and inner factors:<br><span class="chem">n(n + 3) · (n + 1)(n + 2) + 1 = (n^2 + 3n)(n^2 + 3n + 2) + 1</span>.<br>Let <span class="chem">m = n^2 + 3n</span>. Then the expression is <span class="chem">m(m + 2) + 1 = m^2 + 2m + 1 = (m + 1)^2 = (n^2 + 3n + 1)^2</span>.<br>Since <span class="chem">n^2 + 3n + 1 \\in \\mathbb{Z}</span>, the expression is the square of an integer, i.e. a perfect square.</p>',
      markscheme: [
        'M1: Represents four general consecutive integers as n, n + 1, n + 2, n + 3 with n ∈ ℤ.',
        'M1: Pairs the factors as n(n + 3) and (n + 1)(n + 2) (or expands fully to n⁴ + 6n³ + 11n² + 6n + 1).',
        'A1: Obtains (n² + 3n)(n² + 3n + 2) + 1.',
        'A1: Shows this equals (n² + 3n + 1)².',
        'R1: States that n² + 3n + 1 is an integer, so the expression is a perfect square.'
      ],
      hints: [
        'Decode: “prove … always” means a general algebraic proof, not more examples. Write the four integers with one letter, and aim to show the expression equals (some integer)<sup>2</sup>.',
        'Multiply the outer pair and the inner pair: <span class="chem">n(n + 3) = n^2 + 3n</span> and <span class="chem">(n + 1)(n + 2) = n^2 + 3n + 2</span>.',
        'Substitute <span class="chem">m = n^2 + 3n</span>: you then need to simplify <span class="chem">m(m + 2) + 1</span>.'
      ],
      solution: '<p><strong>Decode:</strong> the two numerical cases are only a pattern; the question wants a proof for every integer <span class="chem">n</span>. The hidden trick is to pair the factors so that the same quadratic <span class="chem">n^2 + 3n</span> appears twice.</p><p><span class="chem">n(n + 1)(n + 2)(n + 3) + 1 = (n^2 + 3n)(n^2 + 3n + 2) + 1</span>. With <span class="chem">m = n^2 + 3n</span> this is <span class="chem">m^2 + 2m + 1 = (m + 1)^2 = (n^2 + 3n + 1)^2</span>, the square of an integer. Check with <span class="chem">n = 1</span>: <span class="chem">(1 + 3 + 1)^2 = 25</span>.</p>'
    },
    {
      id: 't1-5-q022',
      topic: 't1-5',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 1.6',
      type: 'numeric',
      marks: 3,
      stem: 'It is given that <span class="chem">x^3 + px^2 + qx + 6 == (x - 1)(x + 2)(x + r)</span>, where <span class="chem">p, q, r</span> are constants. Find the value of <span class="chem">q</span>.',
      answer: -5,
      exact: true,
      answerInput: '-5',
      hints: [
        'The symbol <span class="chem">==</span> means the two sides are equal for every <span class="chem">x</span>, so the coefficients of each power of <span class="chem">x</span> must match.',
        'Expand the right-hand side: <span class="chem">(x - 1)(x + 2) = x^2 + x - 2</span>, then multiply by <span class="chem">(x + r)</span>.',
        'Compare the constant terms first to find <span class="chem">r</span>, then compare the coefficients of <span class="chem">x</span>.'
      ],
      solution: '<p><span class="chem">(x^2 + x - 2)(x + r) = x^3 + (r + 1)x^2 + (r - 2)x - 2r</span>.</p><p>Constant terms: <span class="chem">-2r = 6</span>, so <span class="chem">r = -3</span>. Coefficient of <span class="chem">x</span>: <span class="chem">q = r - 2 = -5</span>. (Also <span class="chem">p = r + 1 = -2</span>.)</p>'
    },
    {
      id: 't1-5-q023',
      topic: 't1-5',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 1.6',
      type: 'short',
      marks: 5,
      stem: 'A puzzle website claims: “Pick any whole number, cube it, then subtract the number you started with. The answer can always be shared equally between six people.” Prove that the claim is true for every integer <span class="chem">n</span>. [5 marks]',
      answer: '<p>The claim is that <span class="chem">n^3 - n</span> is divisible by <span class="chem">6</span> for all <span class="chem">n \\in \\mathbb{Z}</span>.<br><span class="chem">n^3 - n = n(n^2 - 1) = (n - 1)n(n + 1)</span>, the product of three consecutive integers.<br>Among any two consecutive integers one is even, so the product is divisible by <span class="chem">2</span>.<br>Among any three consecutive integers one is a multiple of <span class="chem">3</span>, so the product is divisible by <span class="chem">3</span>.<br>Since <span class="chem">2</span> and <span class="chem">3</span> are coprime (distinct primes) and both divide the product, <span class="chem">6</span> divides <span class="chem">n^3 - n</span>.</p>',
      markscheme: [
        'M1: Translates the claim to “n³ − n is divisible by 6” and factorises n(n² − 1).',
        'A1: Writes n³ − n = (n − 1)n(n + 1), a product of three consecutive integers.',
        'R1: One of any two consecutive integers is even, so 2 divides the product.',
        'R1: One of any three consecutive integers is a multiple of 3, so 3 divides the product.',
        'R1: Since 2 and 3 are coprime and both divide n³ − n, 6 divides n³ − n.'
      ],
      hints: [
        'Decode: “shared equally between six people” means “divisible by 6”. You must prove <span class="chem">6 | (n^3 - n)</span> for every integer <span class="chem">n</span>, by a direct proof.',
        'Factorise <span class="chem">n^3 - n</span> completely. What do you notice about the three factors?',
        'To show divisibility by <span class="chem">6</span>, show divisibility by <span class="chem">2</span> and by <span class="chem">3</span> separately.'
      ],
      solution: '<p><strong>Decode:</strong> the story hides the statement “<span class="chem">n^3 - n</span> is a multiple of 6”. The disguised technique is factorising into consecutive integers.</p><p><span class="chem">n^3 - n = (n - 1)n(n + 1)</span>. Three consecutive integers contain an even number and a multiple of 3, so the product is divisible by <span class="chem">2 × 3 = 6</span> (2 and 3 are coprime).</p>'
    },
    {
      id: 't1-5-q024',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.15',
      type: 'short',
      marks: 6,
      stem: 'Prove by mathematical induction that <span class="chem">11^n - 4^n</span> is divisible by <span class="chem">7</span> for all <span class="chem">n \\in \\mathbb{Z}^+</span>. [6 marks]',
      answer: '<p><strong>Base case:</strong> for <span class="chem">n = 1</span>, <span class="chem">11 - 4 = 7</span>, which is divisible by 7, so <span class="chem">P(1)</span> is true.<br><strong>Assumption:</strong> assume <span class="chem">P(k)</span> is true for some <span class="chem">k \\in \\mathbb{Z}^+</span>, i.e. <span class="chem">11^k - 4^k = 7A</span> for some <span class="chem">A \\in \\mathbb{Z}</span>.<br><strong>Step:</strong> <span class="chem">11^{k+1} - 4^{k+1} = 11 · 11^k - 4 · 4^k = 11(7A + 4^k) - 4 · 4^k = 77A + 7 · 4^k = 7(11A + 4^k)</span>, which is divisible by 7 because <span class="chem">11A + 4^k \\in \\mathbb{Z}</span>.<br><strong>Conclusion:</strong> since <span class="chem">P(1)</span> is true and <span class="chem">P(k)</span> true implies <span class="chem">P(k + 1)</span> true, by the principle of mathematical induction <span class="chem">P(n)</span> is true for all <span class="chem">n \\in \\mathbb{Z}^+</span>.</p>',
      markscheme: [
        'A1: n = 1: 11 − 4 = 7, divisible by 7, so P(1) is true.',
        'M1: Assumes P(k) true for some k ∈ ℤ⁺: 11<sup>k</sup> − 4<sup>k</sup> = 7A, A ∈ ℤ.',
        'M1: Writes 11<sup>k+1</sup> − 4<sup>k+1</sup> = 11 · 11<sup>k</sup> − 4 · 4<sup>k</sup>.',
        'M1: Substitutes 11<sup>k</sup> = 7A + 4<sup>k</sup> (or an equivalent use of the assumption).',
        'A1: Obtains 77A + 7 · 4<sup>k</sup> = 7(11A + 4<sup>k</sup>), a multiple of 7.',
        'R1: Induction conclusion sentence (only if the M marks above are earned).'
      ],
      hints: [
        'Write the assumption as <span class="chem">11^k = 7A + 4^k</span> so that you can replace <span class="chem">11^k</span> in <span class="chem">11^{k+1} = 11 · 11^k</span>.',
        'After substituting, collect the <span class="chem">4^k</span> terms: <span class="chem">11 · 4^k - 4 · 4^k = 7 · 4^k</span>.'
      ],
      solution: '<p><span class="chem">11^{k+1} - 4^{k+1} = 11(7A + 4^k) - 4 · 4^k = 77A + 7 · 4^k = 7(11A + 4^k)</span>. With the base case <span class="chem">11 - 4 = 7</span> and the standard conclusion sentence, the result holds for all <span class="chem">n \\in \\mathbb{Z}^+</span>.</p>'
    },
    {
      id: 't1-5-q025',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.15, 1.14',
      type: 'short',
      marks: 7,
      stem: 'Prove by mathematical induction that <span class="chem">(cos theta + i sin theta)^n = cos(n theta) + i sin(n theta)</span> for all <span class="chem">n \\in \\mathbb{Z}^+</span>. [7 marks]',
      answer: '<p><strong>Base case:</strong> for <span class="chem">n = 1</span>, LHS <span class="chem">= cos theta + i sin theta =</span> RHS, so <span class="chem">P(1)</span> is true.<br><strong>Assumption:</strong> assume <span class="chem">(cos theta + i sin theta)^k = cos(k theta) + i sin(k theta)</span> for some <span class="chem">k \\in \\mathbb{Z}^+</span>.<br><strong>Step:</strong> <span class="chem">(cos theta + i sin theta)^{k+1} = (cos(k theta) + i sin(k theta))(cos theta + i sin theta)</span><br><span class="chem">= cos(k theta)cos theta - sin(k theta)sin theta + i(sin(k theta)cos theta + cos(k theta)sin theta)</span><br><span class="chem">= cos((k + 1)theta) + i sin((k + 1)theta)</span>, using the compound angle identities.<br><strong>Conclusion:</strong> since <span class="chem">P(1)</span> is true and <span class="chem">P(k)</span> true implies <span class="chem">P(k + 1)</span> true, by mathematical induction the result holds for all <span class="chem">n \\in \\mathbb{Z}^+</span>.</p>',
      markscheme: [
        'A1: n = 1: (cos θ + i sin θ)¹ = cos θ + i sin θ, so P(1) is true.',
        'M1: Assumes P(k) true for some k ∈ ℤ⁺.',
        'M1: Writes (cos θ + i sin θ)<sup>k+1</sup> = (cos kθ + i sin kθ)(cos θ + i sin θ) using the assumption.',
        'A1: Expands correctly, using i² = −1: cos kθ cos θ − sin kθ sin θ + i(sin kθ cos θ + cos kθ sin θ).',
        'M1: Uses the compound angle identities for cos(A + B) and sin(A + B).',
        'A1: Obtains cos((k + 1)θ) + i sin((k + 1)θ).',
        'R1: Induction conclusion sentence (only if the M marks above are earned).'
      ],
      hints: [
        'This is De Moivre’s theorem (AHL 1.14). You need the compound angle identities (topic 3.2): <span class="chem">cos(A + B) = cos A cos B - sin A sin B</span> and <span class="chem">sin(A + B) = sin A cos B + cos A sin B</span>.',
        'In the step, split off one factor: <span class="chem">z^{k+1} = z^k · z</span>, replace <span class="chem">z^k</span> by the assumption and multiply out, remembering <span class="chem">i^2 = -1</span>.'
      ],
      solution: '<p>Multiplying out <span class="chem">(cos(k theta) + i sin(k theta))(cos theta + i sin theta)</span> gives real part <span class="chem">cos(k theta)cos theta - sin(k theta)sin theta = cos((k + 1)theta)</span> and imaginary part <span class="chem">sin(k theta)cos theta + cos(k theta)sin theta = sin((k + 1)theta)</span>. Together with the base case and the conclusion sentence this completes the proof.</p>'
    },
    {
      id: 't1-5-q026',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.15',
      type: 'short',
      marks: 6,
      stem: 'Let <span class="chem">f(x) = 1 / (1 - 2x)</span>, <span class="chem">x != 1/2</span>. Prove by mathematical induction that <span class="chem">f^{(n)}(x) = (2^n n!) / (1 - 2x)^{n+1}</span> for all <span class="chem">n \\in \\mathbb{Z}^+</span>. [6 marks]',
      answer: '<p><strong>Base case:</strong> <span class="chem">f(x) = (1 - 2x)^{-1}</span>, so <span class="chem">f\'(x) = -(1 - 2x)^{-2} · (-2) = 2 / (1 - 2x)^2</span>, and the formula gives <span class="chem">(2^1 · 1!) / (1 - 2x)^2 = 2 / (1 - 2x)^2</span>. So <span class="chem">P(1)</span> is true.<br><strong>Assumption:</strong> assume <span class="chem">f^{(k)}(x) = 2^k k! (1 - 2x)^{-(k+1)}</span> for some <span class="chem">k \\in \\mathbb{Z}^+</span>.<br><strong>Step:</strong> <span class="chem">f^{(k+1)}(x) = d/dx [2^k k! (1 - 2x)^{-(k+1)}] = 2^k k! · (-(k + 1))(1 - 2x)^{-(k+2)} · (-2)</span><br><span class="chem">= 2^{k+1}(k + 1)! (1 - 2x)^{-(k+2)} = (2^{k+1}(k + 1)!) / (1 - 2x)^{k+2}</span>, which is the formula with <span class="chem">n = k + 1</span>.<br><strong>Conclusion:</strong> since <span class="chem">P(1)</span> is true and <span class="chem">P(k)</span> true implies <span class="chem">P(k + 1)</span> true, the result holds for all <span class="chem">n \\in \\mathbb{Z}^+</span> by mathematical induction.</p>',
      markscheme: [
        'A1: Shows f′(x) = 2/(1 − 2x)² and that this matches the formula for n = 1, so P(1) is true.',
        'M1: Assumes P(k) true for some k ∈ ℤ⁺.',
        'M1: Differentiates the assumed f<sup>(k)</sup>(x) using the chain rule.',
        'A1: Obtains 2<sup>k</sup> k! · (−(k + 1))(1 − 2x)<sup>−(k+2)</sup> · (−2).',
        'A1: Simplifies to 2<sup>k+1</sup>(k + 1)!/(1 − 2x)<sup>k+2</sup>.',
        'R1: Induction conclusion sentence (only if the M marks above are earned).'
      ],
      hints: [
        'You need the chain rule (topic 5.1): <span class="chem">d/dx (1 - 2x)^m = m(1 - 2x)^{m-1} · (-2)</span>.',
        'In the step, differentiate the formula for <span class="chem">n = k</span> once. The two minus signs cancel, and <span class="chem">(k + 1) · k! = (k + 1)!</span>.'
      ],
      solution: '<p>The key step is <span class="chem">d/dx (1 - 2x)^{-(k+1)} = 2(k + 1)(1 - 2x)^{-(k+2)}</span>, so <span class="chem">f^{(k+1)}(x) = 2^k k! · 2(k + 1)(1 - 2x)^{-(k+2)} = 2^{k+1}(k + 1)!/(1 - 2x)^{k+2}</span>.</p>'
    },
    {
      id: 't1-5-q027',
      topic: 't1-5',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.15',
      type: 'short',
      marks: 7,
      stem: 'A computer scientist compares two algorithms. One takes <span class="chem">n!</span> steps and the other <span class="chem">3^n</span> steps for an input of size <span class="chem">n \\in \\mathbb{Z}^+</span>.<br>(a) Find the smallest positive integer <span class="chem">n_0</span> such that <span class="chem">n! &gt; 3^n</span> for <span class="chem">n = n_0</span>, showing that the inequality fails for <span class="chem">n = n_0 - 1</span>. [2 marks]<br>(b) Prove by mathematical induction that <span class="chem">n! &gt; 3^n</span> for all integers <span class="chem">n &gt;= n_0</span>. [5 marks]',
      answer: '<p>(a) <span class="chem">6! = 720 &lt; 729 = 3^6</span>, but <span class="chem">7! = 5040 &gt; 2187 = 3^7</span> (and the inequality also fails for <span class="chem">n = 1, ..., 5</span>). So <span class="chem">n_0 = 7</span>.<br>(b) The base case <span class="chem">n = 7</span> is shown in (a). Assume <span class="chem">k! &gt; 3^k</span> for some integer <span class="chem">k &gt;= 7</span>. Then <span class="chem">(k + 1)! = (k + 1) · k! &gt; (k + 1) · 3^k</span>. Since <span class="chem">k &gt;= 7</span>, <span class="chem">k + 1 &gt; 3</span>, so <span class="chem">(k + 1) · 3^k &gt; 3 · 3^k = 3^{k+1}</span>. Hence <span class="chem">(k + 1)! &gt; 3^{k+1}</span>. Since the result is true for <span class="chem">n = 7</span>, and true for <span class="chem">n = k</span> implies true for <span class="chem">n = k + 1</span>, by mathematical induction it is true for all integers <span class="chem">n &gt;= 7</span>.</p>',
      markscheme: [
        'A1: (a) Evaluates 6! = 720 and 3⁶ = 729, so the inequality fails for n = 6.',
        'A1: (a) Evaluates 7! = 5040 > 2187 = 3⁷, so n₀ = 7.',
        'M1: (b) Assumes k! > 3<sup>k</sup> for some integer k ≥ 7 (base case n = 7 from part (a)).',
        'M1: (b) Writes (k + 1)! = (k + 1) · k! > (k + 1) · 3<sup>k</sup>.',
        'R1: (b) Uses k + 1 > 3 (because k ≥ 7) to deduce (k + 1) · 3<sup>k</sup> > 3 · 3<sup>k</sup>.',
        'A1: (b) Concludes (k + 1)! > 3<sup>k+1</sup>.',
        'R1: (b) Induction conclusion sentence for all n ≥ 7 (only if the M marks above are earned).'
      ],
      hints: [
        'Decode: the algorithm story is just the inequality <span class="chem">n! &gt; 3^n</span>. The hidden condition is that the base case is not <span class="chem">n = 1</span>: you must first find where the inequality starts to hold.',
        'Make a small table of <span class="chem">n!</span> and <span class="chem">3^n</span> for <span class="chem">n = 1, ..., 7</span>.',
        'In the inductive step use <span class="chem">(k + 1)! = (k + 1) · k!</span>, then the assumption, then the fact that <span class="chem">k + 1 &gt; 3</span>.'
      ],
      solution: '<p><strong>Decode:</strong> this is an induction proof of an inequality with a base case <span class="chem">n_0 &gt; 1</span>, which you find by testing small values.</p><p>(a) <span class="chem">6! = 720 &lt; 729</span>, <span class="chem">7! = 5040 &gt; 2187</span>, so <span class="chem">n_0 = 7</span>.<br>(b) <span class="chem">(k + 1)! = (k + 1)k! &gt; (k + 1)3^k &gt; 3 · 3^k = 3^{k+1}</span>, using <span class="chem">k + 1 &gt;= 8 &gt; 3</span>.</p>'
    },
    {
      id: 't1-5-q028',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.15',
      type: 'numeric',
      marks: 4,
      stem: 'A sequence is defined by <span class="chem">u_1 = 1</span> and <span class="chem">u_{n+1} = 2u_n + 3</span> for <span class="chem">n \\in \\mathbb{Z}^+</span>. It can be proved by induction that <span class="chem">u_n = p · 2^n + q</span> for all <span class="chem">n \\in \\mathbb{Z}^+</span>, where <span class="chem">p</span> and <span class="chem">q</span> are constants. By first finding <span class="chem">p</span> and <span class="chem">q</span>, find the value of <span class="chem">u_{12}</span>.',
      answer: 8189,
      exact: true,
      answerInput: '8189',
      hints: [
        'Decode: you do not need to iterate eleven times. Use two known terms to find <span class="chem">p</span> and <span class="chem">q</span>, then substitute <span class="chem">n = 12</span> into the closed form.',
        'From the recurrence, <span class="chem">u_2 = 2(1) + 3 = 5</span>. So <span class="chem">2p + q = 1</span> and <span class="chem">4p + q = 5</span>.',
        'Solving gives <span class="chem">p = 2</span>, <span class="chem">q = -3</span>, so <span class="chem">u_n = 2^{n+1} - 3</span>.'
      ],
      solution: '<p><span class="chem">u_1 = 2p + q = 1</span> and <span class="chem">u_2 = 4p + q = 5</span>, so <span class="chem">p = 2</span> and <span class="chem">q = -3</span>: <span class="chem">u_n = 2^{n+1} - 3</span>. Check: <span class="chem">u_3 = 2(5) + 3 = 13 = 2^4 - 3</span>. Then <span class="chem">u_{12} = 2^{13} - 3 = 8192 - 3 = 8189</span>.</p>'
    },
    {
      id: 't1-5-q029',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.15',
      type: 'short',
      marks: 4,
      stem: 'Prove by contradiction that there are no integers <span class="chem">a</span> and <span class="chem">b</span> such that <span class="chem">14a + 21b = 100</span>. [4 marks]',
      answer: '<p>Assume, for a contradiction, that there exist integers <span class="chem">a, b</span> with <span class="chem">14a + 21b = 100</span>. Then <span class="chem">7(2a + 3b) = 100</span>. Since <span class="chem">2a + 3b \\in \\mathbb{Z}</span>, this means <span class="chem">7</span> divides <span class="chem">100</span>. But <span class="chem">100 = 7 × 14 + 2</span>, so <span class="chem">7</span> does not divide <span class="chem">100</span>: a contradiction. Hence no such integers exist.</p>',
      markscheme: [
        'M1: Assumes (for a contradiction) that integers a and b exist with 14a + 21b = 100.',
        'A1: Factorises the left-hand side: 7(2a + 3b) = 100.',
        'R1: States that 2a + 3b is an integer, so 7 would divide 100.',
        'R1: 7 does not divide 100 (100 = 7 × 14 + 2), a contradiction, so no such integers exist.'
      ],
      hints: [
        'Start with “Assume there exist integers <span class="chem">a</span> and <span class="chem">b</span> such that …”.',
        'Look for a common factor of <span class="chem">14</span> and <span class="chem">21</span>.'
      ],
      solution: '<p>The left-hand side <span class="chem">14a + 21b = 7(2a + 3b)</span> is always a multiple of 7 when <span class="chem">a, b \\in \\mathbb{Z}</span>, but <span class="chem">100</span> leaves remainder 2 on division by 7. This contradiction shows no integer solution exists.</p>'
    },
    {
      id: 't1-5-q030',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.15',
      type: 'short',
      marks: 6,
      stem: 'Prove by contradiction that <span class="chem">∛2</span>, the real cube root of 2, is irrational. You may assume that the cube of an odd integer is odd. [6 marks]',
      answer: '<p>Assume <span class="chem">∛2</span> is rational, so <span class="chem">∛2 = a/b</span> with <span class="chem">a, b \\in \\mathbb{Z}^+</span> and <span class="chem">gcd(a, b) = 1</span>. Cubing gives <span class="chem">a^3 = 2b^3</span>, so <span class="chem">a^3</span> is even. If <span class="chem">a</span> were odd, <span class="chem">a^3</span> would be odd, so <span class="chem">a</span> is even: <span class="chem">a = 2c</span>, <span class="chem">c \\in \\mathbb{Z}^+</span>. Then <span class="chem">8c^3 = 2b^3</span>, so <span class="chem">b^3 = 4c^3</span> is even and therefore <span class="chem">b</span> is even. So <span class="chem">a</span> and <span class="chem">b</span> are both even, contradicting <span class="chem">gcd(a, b) = 1</span>. Hence <span class="chem">∛2</span> is irrational.</p>',
      markscheme: [
        'M1: Assumes ∛2 = a/b with a, b ∈ ℤ⁺ and gcd(a, b) = 1.',
        'A1: Cubes to obtain a³ = 2b³.',
        'R1: a³ is even, so a is even (since the cube of an odd integer is odd).',
        'A1: Substitutes a = 2c to obtain b³ = 4c³.',
        'R1: Hence b³ is even, so b is even.',
        'R1: Both a and b even contradicts gcd(a, b) = 1, so ∛2 is irrational.'
      ],
      hints: [
        'Assume the opposite: <span class="chem">∛2 = a/b</span> in lowest terms, then cube both sides.',
        'Show first that <span class="chem">a</span> must be even, write <span class="chem">a = 2c</span>, and substitute back.'
      ],
      solution: '<p>From <span class="chem">a^3 = 2b^3</span>, <span class="chem">a</span> is even; writing <span class="chem">a = 2c</span> gives <span class="chem">b^3 = 4c^3</span>, so <span class="chem">b</span> is even too. A fraction in lowest terms cannot have both parts even, which is the contradiction.</p>'
    },
    {
      id: 't1-5-q031',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.15',
      type: 'numeric',
      marks: 3,
      stem: 'Consider the conjecture: “For every prime number <span class="chem">p</span>, the number <span class="chem">2^p - 1</span> is also prime.” Find the smallest prime <span class="chem">p</span> that is a counterexample to this conjecture. (You may use <span class="chem">2047 = 23 × 89</span>.)',
      answer: 11,
      exact: true,
      answerInput: '11',
      hints: [
        'A counterexample is a prime <span class="chem">p</span> for which <span class="chem">2^p - 1</span> is <strong>not</strong> prime. Test the primes in increasing order.',
        '<span class="chem">2^2 - 1 = 3</span>, <span class="chem">2^3 - 1 = 7</span>, <span class="chem">2^5 - 1 = 31</span> and <span class="chem">2^7 - 1 = 127</span> are all prime. Which prime comes next?'
      ],
      solution: '<p>For <span class="chem">p = 2, 3, 5, 7</span> we get <span class="chem">3, 7, 31, 127</span>, all prime. For <span class="chem">p = 11</span>, <span class="chem">2^{11} - 1 = 2047 = 23 × 89</span>, which is composite. So the smallest counterexample is <span class="chem">p = 11</span>. One counterexample is enough to disprove the conjecture.</p>'
    },
    {
      id: 't1-5-q032',
      topic: 't1-5',
      level: 'ahl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.15',
      type: 'mcq',
      marks: 1,
      stem: 'A student wants to prove by contradiction that <span class="chem">sqrt(7)</span> is irrational. What should the first line of the proof assume?',
      options: [
        '<span class="chem">sqrt(7) = p/q</span> for some <span class="chem">p, q \\in \\mathbb{Z}^+</span> with <span class="chem">gcd(p, q) = 1</span>.',
        '<span class="chem">sqrt(7)</span> is irrational.',
        '<span class="chem">sqrt(7) = p/q</span> where <span class="chem">p</span> and <span class="chem">q</span> are irrational numbers.',
        '<span class="chem">7 = p^2 / q^2</span> for all <span class="chem">p, q \\in \\mathbb{Z}^+</span>.'
      ],
      answer: 0,
      misconception: {
        1: 'This is the statement you want to prove. A proof by contradiction starts by assuming its negation (that √7 is rational).',
        2: 'A rational number is a ratio of integers. Allowing p and q to be irrational says nothing (√7 = √7/1 already).',
        3: '“For all p, q” is false and is not the negation of the statement. You assume the existence of one particular pair p, q.'
      },
      hints: [
        'Proof by contradiction: assume the <strong>opposite</strong> of what you want to prove.',
        'What is the definition of a rational number?'
      ],
      solution: '<p>The negation of “<span class="chem">sqrt(7)</span> is irrational” is “<span class="chem">sqrt(7)</span> is rational”, i.e. <span class="chem">sqrt(7) = p/q</span> for some positive integers with no common factor. The proof then derives a contradiction from this assumption.</p>'
    },
    {
      id: 't1-5-q033',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.16',
      type: 'numeric',
      marks: 4,
      stem: 'Solve the system of equations<br><span class="chem">x + 2y - z = 1</span><br><span class="chem">2x - y + 3z = 12</span><br><span class="chem">3x + y + z = 10</span><br>and hence find the value of <span class="chem">z</span>.',
      answer: 3,
      exact: true,
      answerInput: '3',
      hints: [
        'Eliminate <span class="chem">x</span>: use <span class="chem">R_2 - 2R_1</span> and <span class="chem">R_3 - 3R_1</span>.',
        'You should get <span class="chem">-5y + 5z = 10</span> and <span class="chem">-5y + 4z = 7</span>. Subtract these to find <span class="chem">z</span>.'
      ],
      solution: '<p><span class="chem">R_2 - 2R_1: -5y + 5z = 10</span>, i.e. <span class="chem">-y + z = 2</span>. <span class="chem">R_3 - 3R_1: -5y + 4z = 7</span>. Subtracting: <span class="chem">z = 3</span>. Then <span class="chem">y = z - 2 = 1</span> and <span class="chem">x = 1 - 2y + z = 2</span>. Check in equation 3: <span class="chem">6 + 1 + 3 = 10</span>. So <span class="chem">z = 3</span>.</p>'
    },
    {
      id: 't1-5-q034',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 1.16',
      type: 'short',
      marks: 8,
      stem: 'Consider the system of equations<br><span class="chem">x + y + z = 2</span><br><span class="chem">x + 2y + 3z = 5</span><br><span class="chem">2x + 3y + az = b</span>, where <span class="chem">a, b \\in \\mathbb{R}</span>.<br>(a) Use row reduction to find the value of <span class="chem">a</span> for which the system does not have a unique solution. [3 marks]<br>(b) For this value of <span class="chem">a</span>, find the value of <span class="chem">b</span> for which the system has infinitely many solutions. [1 mark]<br>(c) For these values of <span class="chem">a</span> and <span class="chem">b</span>, find the general solution and describe the solution set geometrically. [3 marks]<br>(d) Describe the geometrical arrangement of the three planes when <span class="chem">a</span> takes the value in (a) and <span class="chem">b</span> does not take the value in (b). [1 mark]',
      answer: '<p>(a) <span class="chem">R_2 - R_1: y + 2z = 3</span>; <span class="chem">R_3 - 2R_1: y + (a - 2)z = b - 4</span>; subtracting: <span class="chem">(a - 4)z = b - 7</span>. No unique solution when <span class="chem">a = 4</span>.<br>(b) <span class="chem">b = 7</span> (the last row becomes <span class="chem">0z = 0</span>).<br>(c) Let <span class="chem">z = lambda</span>: <span class="chem">y = 3 - 2lambda</span>, <span class="chem">x = 2 - y - z = -1 + lambda</span>, so <span class="chem">(x, y, z) = (-1 + lambda, 3 - 2lambda, lambda)</span>, <span class="chem">lambda \\in \\mathbb{R}</span>. The three planes meet in a common line (a sheaf).<br>(d) No two of the normals <span class="chem">(1, 1, 1), (1, 2, 3), (2, 3, 4)</span> are parallel, and there is no common point, so the planes form a triangular prism (each pair meets in a line, the three lines are parallel).</p>',
      markscheme: [
        'M1: (a) Eliminates x with R₂ − R₁ and R₃ − 2R₁.',
        'A1: (a) Reaches (a − 4)z = b − 7 (or equivalent).',
        'A1: (a) a = 4.',
        'A1: (b) b = 7.',
        'M1: (c) Sets z = λ and back-substitutes.',
        'A1: (c) (x, y, z) = (−1 + λ, 3 − 2λ, λ), λ ∈ ℝ (or equivalent).',
        'A1: (c) The three planes intersect in a line.',
        'R1: (d) Triangular prism: no two planes are parallel and there is no point common to all three.'
      ],
      hints: [
        'Eliminate <span class="chem">x</span> from rows 2 and 3, then eliminate <span class="chem">y</span> from row 3 to reach <span class="chem">g(a)z = h(b)</span>.',
        'For infinitely many solutions the final row must read <span class="chem">0z = 0</span>; for no solution it reads <span class="chem">0z = </span>(non-zero).',
        'For the geometry, check whether any two normal vectors are parallel (topic 3.3).'
      ],
      solution: '<p>Row reduction gives <span class="chem">y + 2z = 3</span> and <span class="chem">(a - 4)z = b - 7</span>. With <span class="chem">a = 4, b = 7</span> the solution set is the line <span class="chem">(-1 + lambda, 3 - 2lambda, lambda)</span>. Check with <span class="chem">lambda = 1</span>: <span class="chem">(0, 1, 1)</span> satisfies all three equations (<span class="chem">2x + 3y + 4z = 7</span>). With <span class="chem">a = 4, b != 7</span> the system is inconsistent, and since no two planes are parallel they form a triangular prism.</p>'
    },
    {
      id: 't1-5-q035',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.16',
      type: 'numeric',
      marks: 5,
      stem: 'A drone films a ball thrown upwards. The height of the ball, <span class="chem">h</span> metres, <span class="chem">t</span> seconds after the throw is modelled by <span class="chem">h(t) = at^2 + bt + c</span>. The drone records <span class="chem">h = 6.85</span> when <span class="chem">t = 0.5</span>, <span class="chem">h = 9.62</span> when <span class="chem">t = 1.2</span> and <span class="chem">h = 8.30</span> when <span class="chem">t = 2.0</span>. Find the maximum height of the ball predicted by the model.',
      answer: 9.740173263572945,
      sigfigs: 3,
      unit: 'm',
      hints: [
        'Decode: each data point gives one linear equation in the unknowns <span class="chem">a, b, c</span>. Solve the <span class="chem">3 × 3</span> system with your GDC, then find the vertex of the parabola.',
        'The equations are <span class="chem">0.25a + 0.5b + c = 6.85</span>, <span class="chem">1.44a + 1.2b + c = 9.62</span> and <span class="chem">4a + 2b + c = 8.30</span>.',
        'With <span class="chem">a, b, c</span> stored, the maximum is at <span class="chem">t = -b/(2a)</span>; or graph <span class="chem">h(t)</span> and use the maximum feature.'
      ],
      solution: '<p>The GDC gives <span class="chem">a = -3.7381...</span>, <span class="chem">b = 10.3119...</span>, <span class="chem">c = 2.6286...</span>. The vertex is at <span class="chem">t = -b/(2a) = 1.3793...</span> s, so the maximum height is <span class="chem">h(1.3793...) = 9.74</span> m (3 s.f.). Keep the full stored values: rounding <span class="chem">a, b, c</span> early changes the third figure.</p>'
    },
    {
      id: 't1-5-q036',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.16',
      type: 'numeric',
      marks: 5,
      stem: 'Mei invests a total of <span class="chem">$40 000</span> in three accounts, A, B and C, which pay simple interest at annual rates of <span class="chem">2.6%</span>, <span class="chem">3.4%</span> and <span class="chem">5.1%</span> respectively. After one year she has earned <span class="chem">$1437.51</span> in interest in total. The amount invested in account C is <span class="chem">$2000</span> less than the amount invested in account A. Find the amount invested in account B. Give your answer correct to 2 decimal places.',
      answer: 17220,
      dp: 2,
      unit: '$',
      hints: [
        'Decode: three unknown amounts and three facts (total, total interest, the A–C relation) give a <span class="chem">3 × 3</span> linear system. Let the amounts be <span class="chem">x, y, z</span>.',
        'The equations are <span class="chem">x + y + z = 40000</span>, <span class="chem">0.026x + 0.034y + 0.051z = 1437.51</span> and <span class="chem">x - z = 2000</span>.',
        'Enter the augmented matrix in your GDC (or use the simultaneous-equation solver) and read off <span class="chem">y</span>.'
      ],
      solution: '<p>Solving <span class="chem">x + y + z = 40000</span>, <span class="chem">0.026x + 0.034y + 0.051z = 1437.51</span>, <span class="chem">x - z = 2000</span> with the GDC gives <span class="chem">x = 12390</span>, <span class="chem">y = 17220</span>, <span class="chem">z = 10390</span>. Check: <span class="chem">322.14 + 585.48 + 529.89 = 1437.51</span>. So <span class="chem">$17 220.00</span> is invested in account B.</p>'
    },
    {
      id: 't1-5-q037',
      topic: 't1-5',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.16',
      type: 'numeric',
      marks: 6,
      stem: 'An archaeologist finds three fragments of a circular plate. On a coordinate grid (units: cm) the fragments lie at the points <span class="chem">(1.2, 3.5)</span>, <span class="chem">(-2.4, 1.1)</span> and <span class="chem">(4.0, -0.6)</span>, all on the rim of the plate. The rim has an equation of the form <span class="chem">x^2 + y^2 + Dx + Ey + F = 0</span>. Find the radius of the plate.',
      answer: 3.3111732903962814,
      sigfigs: 3,
      unit: 'cm',
      hints: [
        'Decode: the equation is not linear in <span class="chem">x</span> and <span class="chem">y</span>, but it IS linear in the unknown constants <span class="chem">D, E, F</span>. Substituting each point gives one linear equation, so this is a hidden <span class="chem">3 × 3</span> system.',
        'For <span class="chem">(1.2, 3.5)</span>: <span class="chem">1.2D + 3.5E + F = -(1.2^2 + 3.5^2) = -13.69</span>. Form the other two equations the same way and solve with your GDC.',
        'Complete the square: the centre is <span class="chem">(-D/2, -E/2)</span> and <span class="chem">r^2 = D^2/4 + E^2/4 - F</span>.'
      ],
      solution: '<p><strong>Decode:</strong> the unknowns are the coefficients <span class="chem">D, E, F</span>, and each point gives a linear equation in them.</p><p><span class="chem">1.2D + 3.5E + F = -13.69</span>, <span class="chem">-2.4D + 1.1E + F = -6.97</span>, <span class="chem">4.0D - 0.6E + F = -16.36</span>. The GDC gives <span class="chem">D = -1.5810...</span>, <span class="chem">E = -0.42849...</span>, <span class="chem">F = -10.2931...</span>. Then <span class="chem">r = sqrt(D^2/4 + E^2/4 - F) = 3.31</span> cm (3 s.f.).</p>'
    },
    {
      id: 't1-5-q038',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.16',
      type: 'numeric',
      marks: 5,
      stem: 'A sports nutritionist mixes three foods, P, Q and R. The table gives the mass in grams of protein, carbohydrate and fat in <strong>100 g</strong> of each food.<br><span class="mono">Food: protein | carbohydrate | fat</span><br><span class="mono">P: 12.5 | 8.2 | 3.1</span><br><span class="mono">Q: 3.4 | 22.6 | 1.2</span><br><span class="mono">R: 7.8 | 4.5 | 14.3</span><br>A meal must contain exactly 48 g of protein, 95 g of carbohydrate and 36 g of fat. Find the mass of food Q in the meal, in grams.',
      answer: 317.4211748876647,
      sigfigs: 3,
      unit: 'g',
      hints: [
        'Decode: let <span class="chem">p, q, r</span> be the masses in units of 100 g. Each nutrient gives one linear equation.',
        'Protein: <span class="chem">12.5p + 3.4q + 7.8r = 48</span>. Write the carbohydrate and fat equations, then solve with your GDC.',
        'Remember to convert <span class="chem">q</span> back to grams by multiplying by 100.'
      ],
      solution: '<p><span class="chem">12.5p + 3.4q + 7.8r = 48</span>, <span class="chem">8.2p + 22.6q + 4.5r = 95</span>, <span class="chem">3.1p + 1.2q + 14.3r = 36</span>. The GDC gives <span class="chem">p = 1.8178...</span>, <span class="chem">q = 3.1742...</span>, <span class="chem">r = 1.8570...</span> (hundreds of grams). So the meal contains <span class="chem">317</span> g of food Q (3 s.f.).</p>'
    },
    {
      id: 't1-5-q039',
      topic: 't1-5',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.16',
      type: 'numeric',
      marks: 6,
      stem: 'The temperature <span class="chem">T</span> °C in a greenhouse <span class="chem">t</span> hours after midnight is modelled by <span class="chem">T(t) = a sin((pi t)/12) + b cos((pi t)/12) + d</span>, for <span class="chem">0 &lt;= t &lt;= 24</span>. Sensors record <span class="chem">14.2</span> °C at 03:00, <span class="chem">22.9</span> °C at 10:00 and <span class="chem">11.5</span> °C at 18:00. Find the maximum temperature predicted by the model.',
      answer: 22.91793743211212,
      sigfigs: 3,
      unit: '°C',
      hints: [
        'Decode: for a fixed time <span class="chem">t</span>, the values <span class="chem">sin((pi t)/12)</span> and <span class="chem">cos((pi t)/12)</span> are just numbers, so each reading gives a LINEAR equation in <span class="chem">a, b, d</span>. Remember the times are <span class="chem">t = 3, 10, 18</span>, and use radians.',
        'At <span class="chem">t = 3</span>: <span class="chem">a sin(pi/4) + b cos(pi/4) + d = 14.2</span>. At <span class="chem">t = 18</span>: <span class="chem">sin(3pi/2) = -1</span> and <span class="chem">cos(3pi/2) = 0</span>, so <span class="chem">-a + d = 11.5</span>.',
        'Solve for <span class="chem">a, b, d</span> with your GDC, then graph <span class="chem">T(t)</span> on <span class="chem">0 &lt;= t &lt;= 24</span> and find its maximum.'
      ],
      solution: '<p><strong>Decode:</strong> the model is not linear in <span class="chem">t</span>, but it is linear in the unknown coefficients, so three readings give a <span class="chem">3 × 3</span> system.</p><p>The GDC gives <span class="chem">a = 4.0957...</span>, <span class="chem">b = -6.0696...</span>, <span class="chem">d = 15.5957...</span>. Graphing <span class="chem">T(t)</span> gives a maximum of <span class="chem">22.9</span> °C (3 s.f.), at about <span class="chem">t = 10.2</span> (about 10:13). (Equivalently, <span class="chem">T_{max} = d + sqrt(a^2 + b^2)</span>.)</p>'
    },
    {
      id: 't1-5-q040',
      topic: 't1-5',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.16',
      type: 'numeric',
      marks: 7,
      stem: 'The concentration <span class="chem">C</span> mg L<sup>−1</sup> of a drug in a patient’s blood <span class="chem">t</span> hours after an injection is modelled by <span class="chem">C = A t^p e^{qt}</span>, <span class="chem">t &gt; 0</span>, where <span class="chem">A, p, q</span> are constants. Measurements give <span class="chem">C = 4.2</span> at <span class="chem">t = 1</span>, <span class="chem">C = 6.9</span> at <span class="chem">t = 3</span> and <span class="chem">C = 3.8</span> at <span class="chem">t = 6</span>. By taking natural logarithms, find the time at which the model predicts the maximum concentration.',
      answer: 2.6838317250614834,
      sigfigs: 3,
      unit: 'h',
      hints: [
        'Decode: <span class="chem">ln C = ln A + p ln t + qt</span> is linear in the three unknowns <span class="chem">ln A</span>, <span class="chem">p</span> and <span class="chem">q</span>. So the data give a <span class="chem">3 × 3</span> linear system.',
        'At <span class="chem">t = 1</span>, <span class="chem">ln 1 = 0</span>, so <span class="chem">ln A + q = ln 4.2</span>. Write the other two equations using <span class="chem">ln 3</span> and <span class="chem">ln 6</span>, and solve with your GDC.',
        'Then <span class="chem">dC/dt = A t^{p-1} e^{qt}(p + qt)</span>, which is zero when <span class="chem">t = -p/q</span>. (You can also graph <span class="chem">C</span> and use the maximum feature.)'
      ],
      solution: '<p><strong>Decode:</strong> logarithms turn the product model into a linear equation in <span class="chem">ln A, p, q</span>.</p><p><span class="chem">ln A + q = ln 4.2</span>, <span class="chem">ln A + p ln 3 + 3q = ln 6.9</span>, <span class="chem">ln A + p ln 6 + 6q = ln 3.8</span>. The GDC gives <span class="chem">p = 1.4047...</span>, <span class="chem">q = -0.52340...</span>, <span class="chem">A = 7.0886...</span>. The maximum is at <span class="chem">t = -p/q = 2.68</span> hours (3 s.f.).</p>'
    },
    {
      id: 't1-5-q041',
      topic: 't1-5',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.16',
      type: 'numeric',
      marks: 6,
      stem: 'A country has three regions, A, B and C, with a total population of 2.4 million that stays constant. Each year:<br>• of the people in A, 85% stay, 10% move to B and 5% move to C;<br>• of the people in B, 75% stay, 15% move to A and 10% move to C;<br>• of the people in C, 80% stay, 12% move to A and 8% move to B.<br>In the long run the population of each region no longer changes from one year to the next. Find the long-run population of region B, in millions.',
      answer: 0.6508474576271186,
      sigfigs: 3,
      unit: 'million',
      hints: [
        'Decode: “no longer changes” means each region’s population next year equals its population this year. Write a balance equation for each region with unknowns <span class="chem">a, b, c</span> (millions).',
        'Region A: <span class="chem">a = 0.85a + 0.15b + 0.12c</span>. Region B: <span class="chem">b = 0.10a + 0.75b + 0.08c</span>. The three balance equations are dependent (the GDC shows a row of zeros), so you must also use <span class="chem">a + b + c = 2.4</span>.',
        'Solve two balance equations together with <span class="chem">a + b + c = 2.4</span> on your GDC.'
      ],
      solution: '<p><strong>Decode:</strong> a steady state is a linear system. The three balance equations only have rank 2 (people are neither created nor lost), which is why the total-population equation is needed.</p><p><span class="chem">-0.15a + 0.15b + 0.12c = 0</span>, <span class="chem">0.10a - 0.25b + 0.08c = 0</span>, <span class="chem">a + b + c = 2.4</span>. The GDC gives <span class="chem">a = 1.139</span>, <span class="chem">b = 0.6508...</span>, <span class="chem">c = 0.6102</span>. So region B has about <span class="chem">0.651</span> million people (3 s.f.). Check with C: <span class="chem">0.05a + 0.10b + 0.80c = c</span> holds.</p>'
    },
    {
      id: 't1-5-q042',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.16',
      type: 'numeric',
      marks: 5,
      stem: 'Consider the system<br><span class="chem">x + 2y + z = 3</span><br><span class="chem">2x + ky + 3z = 1</span><br><span class="chem">x + y + kz = 2</span>, where <span class="chem">k \\in \\mathbb{R}</span>.<br>By eliminating <span class="chem">x</span>, find the larger value of <span class="chem">k</span> for which the system does not have a unique solution.',
      answer: 3.618033988749895,
      sigfigs: 3,
      hints: [
        '<span class="chem">R_2 - 2R_1</span> gives <span class="chem">(k - 4)y + z = -5</span> and <span class="chem">R_3 - R_1</span> gives <span class="chem">-y + (k - 1)z = -1</span>.',
        'Eliminate <span class="chem">z</span> (or <span class="chem">y</span>) from these two. The coefficient that remains is <span class="chem">(k - 4)(k - 1) + 1 = k^2 - 5k + 5</span>.',
        'The system fails to have a unique solution when this coefficient is zero. Solve <span class="chem">k^2 - 5k + 5 = 0</span> with your GDC.'
      ],
      solution: '<p>From <span class="chem">(k - 4)y + z = -5</span> and <span class="chem">-y + (k - 1)z = -1</span>: multiply the first by <span class="chem">(k - 1)</span> and subtract the second to get <span class="chem">(k^2 - 5k + 5)y = -5k + 6</span>. No unique solution when <span class="chem">k^2 - 5k + 5 = 0</span>, so <span class="chem">k = (5 +- sqrt(5))/2</span>, i.e. <span class="chem">k = 1.38</span> or <span class="chem">k = 3.62</span>. The larger value is <span class="chem">k = 3.62</span> (3 s.f.). (At these values <span class="chem">-5k + 6 != 0</span>, so the system is in fact inconsistent.)</p>'
    },
    {
      id: 't1-5-q043',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.16',
      type: 'short',
      marks: 9,
      stem: 'Consider the system<br><span class="chem">x + y + z = 1</span><br><span class="chem">2x - y + 3z = 4</span><br><span class="chem">x + ky + 2z = c</span>, where <span class="chem">k, c \\in \\mathbb{R}</span>.<br>(a) Show that row reduction leads to the equation <span class="chem">(k + 2)y = c - 3</span>. [3 marks]<br>(b) Write down the value of <span class="chem">k</span> for which the system does not have a unique solution. [1 mark]<br>(c) For this value of <span class="chem">k</span>, state the value of <span class="chem">c</span> for which the system has infinitely many solutions, and find the general solution. [3 marks]<br>(d) Use your GDC to solve the system when <span class="chem">k = 0.35</span> and <span class="chem">c = -1.8</span>, giving each value correct to 3 significant figures. [2 marks]',
      answer: '<p>(a) <span class="chem">R_2 - 2R_1: -3y + z = 2</span>. <span class="chem">R_3 - R_1: (k - 1)y + z = c - 1</span>. Subtracting: <span class="chem">(k - 1 + 3)y = c - 1 - 2</span>, i.e. <span class="chem">(k + 2)y = c - 3</span> (AG).<br>(b) <span class="chem">k = -2</span>.<br>(c) <span class="chem">c = 3</span>. Let <span class="chem">y = lambda</span>: <span class="chem">z = 2 + 3lambda</span> and <span class="chem">x = 1 - y - z = -1 - 4lambda</span>, so <span class="chem">(x, y, z) = (-1 - 4lambda, lambda, 2 + 3lambda)</span>, <span class="chem">lambda \\in \\mathbb{R}</span>.<br>(d) <span class="chem">x = 7.17</span>, <span class="chem">y = -2.04</span>, <span class="chem">z = -4.13</span> (exactly <span class="chem">y = -96/47</span>, <span class="chem">x = 337/47</span>, <span class="chem">z = -194/47</span>).</p>',
      markscheme: [
        'M1: (a) Eliminates x using R₂ − 2R₁ and R₃ − R₁.',
        'A1: (a) Obtains −3y + z = 2 and (k − 1)y + z = c − 1.',
        'A1: (a) Subtracts the two reduced rows correctly, leading to (k + 2)y = c − 3 AG (no mark for the given line).',
        'A1: (b) k = −2.',
        'A1: (c) c = 3.',
        'M1: (c) Introduces a parameter (e.g. y = λ) and back-substitutes.',
        'A1: (c) (x, y, z) = (−1 − 4λ, λ, 2 + 3λ), λ ∈ ℝ (or equivalent).',
        'A1: (d) Correct use of technology: y = −2.04 (and either other value).',
        'A1: (d) x = 7.17, y = −2.04, z = −4.13.'
      ],
      hints: [
        'In (a) eliminate <span class="chem">x</span> from rows 2 and 3 first, then eliminate <span class="chem">z</span>, which now has coefficient 1 in both rows.',
        'For (c), the final row must read <span class="chem">0y = 0</span>. Use <span class="chem">y</span> as the parameter because it is the variable whose equation vanished.',
        'For (d), enter the augmented matrix <span class="chem">[1, 1, 1 | 1; 2, -1, 3 | 4; 1, 0.35, 2 | -1.8]</span> and use rref or the system solver.'
      ],
      solution: '<p>(a) The two reduced rows are <span class="chem">-3y + z = 2</span> and <span class="chem">(k - 1)y + z = c - 1</span>; their difference is <span class="chem">(k + 2)y = c - 3</span>.<br>(c) Check the general solution with <span class="chem">lambda = 0</span>: <span class="chem">(-1, 0, 2)</span> gives <span class="chem">1, 4, 3</span> in the three equations (with <span class="chem">k = -2</span>, <span class="chem">c = 3</span>).<br>(d) The GDC gives <span class="chem">(7.17, -2.04, -4.13)</span>; part (a) confirms <span class="chem">y = (-1.8 - 3)/(0.35 + 2) = -2.04</span>.</p>'
    },
    {
      id: 't1-5-q044',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.16',
      type: 'numeric',
      marks: 4,
      stem: 'Three planes have equations<br><span class="chem">Π_1: 2.1x - 0.8y + 1.5z = 4.2</span><br><span class="chem">Π_2: 0.6x + 1.9y - 2.2z = -1.3</span><br><span class="chem">Π_3: 1.4x + 0.7y + 3.1z = 6.8</span>.<br>The three planes meet at a single point. Find the <span class="chem">z</span>-coordinate of this point.',
      answer: 1.503859215807348,
      sigfigs: 3,
      hints: [
        'The common point is the solution of the three equations taken together.',
        'Enter the augmented matrix <span class="chem">[2.1, -0.8, 1.5 | 4.2; 0.6, 1.9, -2.2 | -1.3; 1.4, 0.7, 3.1 | 6.8]</span> and use rref or the simultaneous-equation solver.'
      ],
      solution: '<p>The GDC gives the unique solution <span class="chem">x = 1.1859...</span>, <span class="chem">y = 0.68262...</span>, <span class="chem">z = 1.5039...</span>, so <span class="chem">z = 1.50</span> (3 s.f.). Check in <span class="chem">Π_1</span>: <span class="chem">2.1(1.1859) - 0.8(0.6826) + 1.5(1.5039) = 4.20</span>.</p>'
    },
    {
      id: 't1-5-q045',
      topic: 't1-5',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.16',
      type: 'numeric',
      marks: 6,
      stem: 'A foundry melts together three alloys to make 800 kg of a new bronze. By mass, alloy A is 62% copper, 28% zinc and 10% tin; alloy B is 48% copper, 35% zinc and 17% tin; alloy C is 70% copper, 12% zinc and 18% tin. The new bronze must be 58% copper, 26% zinc and 16% tin. Find the mass of alloy C that is used.',
      answer: 266.6666666666667,
      sigfigs: 3,
      unit: 'kg',
      hints: [
        'Decode: there are three unknown masses <span class="chem">a, b, c</span> but four facts (total mass, copper, zinc, tin). Because the percentages in each alloy add up to 100%, one of these facts is redundant.',
        'Use <span class="chem">a + b + c = 800</span>, copper <span class="chem">0.62a + 0.48b + 0.70c = 0.58 × 800</span> and zinc <span class="chem">0.28a + 0.35b + 0.12c = 0.26 × 800</span>.',
        'Solve with your GDC, then check that the tin equation is also satisfied.'
      ],
      solution: '<p><strong>Decode:</strong> the tin condition follows from the other three (tin = total − copper − zinc), so we have exactly three independent equations.</p><p><span class="chem">a + b + c = 800</span>, <span class="chem">0.62a + 0.48b + 0.70c = 464</span>, <span class="chem">0.28a + 0.35b + 0.12c = 208</span>. The GDC gives <span class="chem">a = 152.4</span>, <span class="chem">b = 381.0</span>, <span class="chem">c = 266.7</span>. Tin check: <span class="chem">0.10(152.4) + 0.17(381.0) + 0.18(266.7) = 128 = 0.16 × 800</span>. So <span class="chem">267</span> kg of alloy C (3 s.f.).</p>'
    },
    {
      id: 't1-5-q046',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.16',
      type: 'numeric',
      marks: 4,
      stem: 'In an electrical circuit, Kirchhoff’s laws give the following equations for the currents <span class="chem">I_1</span>, <span class="chem">I_2</span> and <span class="chem">I_3</span> (in amperes):<br><span class="chem">I_1 - I_2 - I_3 = 0</span><br><span class="chem">4.7I_1 + 2.2I_2 = 12</span><br><span class="chem">2.2I_2 - 3.3I_3 = 5</span>.<br>Find the value of <span class="chem">I_2</span>.',
      answer: 1.905768649954696,
      sigfigs: 3,
      unit: 'A',
      hints: [
        'Write each equation with all three unknowns, using a coefficient of 0 where a current is missing: for example <span class="chem">4.7I_1 + 2.2I_2 + 0I_3 = 12</span>.',
        'Solve the <span class="chem">3 × 3</span> system with your GDC.'
      ],
      solution: '<p>The augmented matrix is <span class="chem">[1, -1, -1 | 0; 4.7, 2.2, 0 | 12; 0, 2.2, -3.3 | 5]</span>. The GDC gives <span class="chem">I_1 = 1.6611</span>, <span class="chem">I_2 = 1.9058</span>, <span class="chem">I_3 = -0.24464</span>. So <span class="chem">I_2 = 1.91</span> A (3 s.f.). (The negative <span class="chem">I_3</span> means that current flows the opposite way to the arrow chosen.)</p>'
    },
    {
      id: 't1-5-q047',
      topic: 't1-5',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.16',
      type: 'short',
      marks: 8,
      stem: 'Consider the system<br><span class="chem">1.2x + 0.5y - z = 3.4</span><br><span class="chem">0.8x - 1.5y + 2z = 1.0</span><br><span class="chem">3.2x - 0.5y = 7.8</span>.<br>(a) A student enters the augmented matrix into a GDC and finds that rref gives a final row of zeros. Explain what this tells you about the solutions, and verify it by expressing the third equation in terms of the first two. [2 marks]<br>(b) Taking <span class="chem">z = lambda</span>, find <span class="chem">x</span> and <span class="chem">y</span> in terms of <span class="chem">lambda</span>. [4 marks]<br>(c) Find the solution of the system that also satisfies <span class="chem">x + y + z = 5</span>, giving each value correct to 3 significant figures. [2 marks]',
      answer: '<p>(a) A zero row <span class="chem">[0 0 0 | 0]</span> means one equation is redundant and the system is consistent, so there are infinitely many solutions (the planes meet in a line). Indeed <span class="chem">2R_1 + R_2 = R_3</span>: <span class="chem">2.4 + 0.8 = 3.2</span>, <span class="chem">1.0 - 1.5 = -0.5</span>, <span class="chem">-2 + 2 = 0</span>, <span class="chem">6.8 + 1.0 = 7.8</span>.<br>(b) From <span class="chem">1.2x + 0.5y = 3.4 + lambda</span> and <span class="chem">0.8x - 1.5y = 1.0 - 2lambda</span>: <span class="chem">x = (56 + 5lambda)/22 = 2.545... + 0.2273lambda</span> and <span class="chem">y = (38 + 80lambda)/55 = 0.6909... + 1.4545lambda</span>.<br>(c) <span class="chem">x + y + z = 5</span> gives <span class="chem">lambda = 194/295</span>, so <span class="chem">x = 2.69</span>, <span class="chem">y = 1.65</span>, <span class="chem">z = 0.658</span>.</p>',
      markscheme: [
        'R1: (a) A zero row means the equations are dependent and consistent, so there are infinitely many solutions.',
        'A1: (a) Shows R₃ = 2R₁ + R₂ (all four entries checked).',
        'M1: (b) Rewrites the first two equations with z = λ as a 2 × 2 system in x and y.',
        'M1: (b) Eliminates one variable (e.g. 3R₁ + R₂ gives 4.4x = 11.2 + λ).',
        'A1: (b) x = (56 + 5λ)/22 (or 2.55 + 0.227λ).',
        'A1: (b) y = (38 + 80λ)/55 (or 0.691 + 1.45λ).',
        'M1: (c) Substitutes into x + y + z = 5 (or solves the new 3 × 3 system with the GDC).',
        'A1: (c) x = 2.69, y = 1.65, z = 0.658.'
      ],
      hints: [
        'Decode: a zero row in rref is the technology’s way of saying “one equation is a combination of the others”. That means a line of solutions (if consistent), not a unique point.',
        'Look for numbers <span class="chem">alpha, beta</span> with <span class="chem">alpha R_1 + beta R_2 = R_3</span>; start with the <span class="chem">z</span>-coefficients, <span class="chem">-alpha + 2beta = 0</span>.',
        'In (c), adding the equation <span class="chem">x + y + z = 5</span> to the first two gives a new system with a unique solution, which your GDC can solve directly.'
      ],
      solution: '<p><strong>Decode:</strong> a GDC row of zeros means infinitely many solutions; the parametric form describes the line, and an extra condition picks one point on it.</p><p>(a) <span class="chem">R_3 = 2R_1 + R_2</span>. (b) <span class="chem">3R_1 + R_2</span> (with <span class="chem">z = lambda</span>): <span class="chem">4.4x = 11.2 + lambda</span>, so <span class="chem">x = (56 + 5lambda)/22</span>; then <span class="chem">y = (3.4 + lambda - 1.2x)/0.5 = (38 + 80lambda)/55</span>. (c) <span class="chem">(56 + 5lambda)/22 + (38 + 80lambda)/55 + lambda = 5</span> gives <span class="chem">lambda = 0.6576</span>, so <span class="chem">(x, y, z) = (2.69, 1.65, 0.658)</span>.</p>'
    },
    {
      id: 't1-5-q048',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.16',
      type: 'numeric',
      marks: 6,
      stem: 'The curve <span class="chem">y = ax^3 + bx^2 + cx + 2</span> passes through the points <span class="chem">(1, 3.4)</span>, <span class="chem">(2, 1.7)</span> and <span class="chem">(3, 5.9)</span>. Find the <span class="chem">x</span>-coordinate of the local minimum point of the curve.',
      answer: 2.04108541508521,
      sigfigs: 3,
      hints: [
        'Substituting each point gives a linear equation in <span class="chem">a, b, c</span>. For example, <span class="chem">(1, 3.4)</span> gives <span class="chem">a + b + c + 2 = 3.4</span>.',
        'Solve the three equations with your GDC, then graph the cubic (or solve <span class="chem">3ax^2 + 2bx + c = 0</span>) to find the local minimum.'
      ],
      solution: '<p><span class="chem">a + b + c = 1.4</span>, <span class="chem">8a + 4b + 2c = -0.3</span>, <span class="chem">27a + 9b + 3c = 3.9</span>. The GDC gives <span class="chem">a = 1.5</span>, <span class="chem">b = -6.05</span>, <span class="chem">c = 5.95</span>. Then <span class="chem">dy/dx = 4.5x^2 - 12.1x + 5.95 = 0</span> gives <span class="chem">x = 0.648</span> (local maximum) and <span class="chem">x = 2.04</span>. Since <span class="chem">a &gt; 0</span>, the larger root is the local minimum: <span class="chem">x = 2.04</span> (3 s.f.).</p>'
    },
    {
      id: 't1-5-q049',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.15',
      type: 'numeric',
      marks: 3,
      stem: 'A student conjectures that <span class="chem">n^2 + n + 17</span> is a prime number for every positive integer <span class="chem">n</span>. Use your GDC to find the smallest positive integer <span class="chem">n</span> that is a counterexample to this conjecture.',
      answer: 16,
      exact: true,
      answerInput: '16',
      hints: [
        'Put <span class="chem">f(n) = n^2 + n + 17</span> into the table function of your GDC and look for the first value that is not prime.',
        'Watch for values that are perfect squares or multiples of 17. What happens when <span class="chem">n</span> is close to 17?'
      ],
      solution: '<p>The table gives <span class="chem">19, 23, 29, 37, ..., 257</span> for <span class="chem">n = 1, ..., 15</span>, all prime. For <span class="chem">n = 16</span>: <span class="chem">16^2 + 16 + 17 = 289 = 17^2</span>, which is not prime. So <span class="chem">n = 16</span> is the smallest counterexample. (Algebra explains it: <span class="chem">n^2 + n + 17 = 16 × 17 + 17 = 17^2</span> when <span class="chem">n = 16</span>.)</p>'
    },
    {
      id: 't1-5-q050',
      topic: 't1-5',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.15',
      type: 'numeric',
      marks: 4,
      stem: 'A student claims: “Exponentials always beat powers, so <span class="chem">e^x &gt;= x^3</span> for every <span class="chem">x &gt; 0</span>.” The claim is false: the set of positive values of <span class="chem">x</span> for which it fails is an interval <span class="chem">a &lt; x &lt; b</span>. Find the value of <span class="chem">b</span>.',
      answer: 4.536403654973528,
      sigfigs: 3,
      hints: [
        'Decode: the counterexamples are the values of <span class="chem">x</span> where <span class="chem">x^3 &gt; e^x</span>. The endpoints <span class="chem">a</span> and <span class="chem">b</span> are where the two graphs cross, and you want the larger crossing.',
        'Graph <span class="chem">y = e^x - x^3</span> for <span class="chem">0 &lt; x &lt; 6</span> and find its zeros.',
        'One counterexample, such as <span class="chem">x = 3</span> (<span class="chem">e^3 = 20.1 &lt; 27</span>), already disproves the claim.'
      ],
      solution: '<p><strong>Decode:</strong> “the set where it fails” is the solution set of <span class="chem">x^3 &gt; e^x</span>, so find where the curves intersect.</p><p>The zeros of <span class="chem">e^x - x^3</span> are <span class="chem">x = 1.857...</span> and <span class="chem">x = 4.536...</span>, and <span class="chem">e^x - x^3 &lt; 0</span> between them (e.g. at <span class="chem">x = 3</span>). So <span class="chem">a = 1.86</span> and <span class="chem">b = 4.54</span> (3 s.f.). For <span class="chem">x &gt; b</span> the exponential is larger again.</p>'
    },
    {
      id: 't1-5-q051',
      topic: 't1-5',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.15',
      type: 'numeric',
      marks: 4,
      stem: 'A proof by induction is to be written for the statement <span class="chem">2^n &gt; n^5</span> for all integers <span class="chem">n &gt;= n_0</span>. Use your GDC to find the smallest positive integer <span class="chem">n_0</span> for which the statement is true for <strong>every</strong> integer <span class="chem">n &gt;= n_0</span>.',
      answer: 23,
      exact: true,
      answerInput: '23',
      hints: [
        'Decode: you need the point after which the inequality never fails again. Being true for one small value is not enough: check <span class="chem">n = 1</span> and then <span class="chem">n = 2</span>.',
        'Use the GDC table for <span class="chem">y = 2^x - x^5</span> with step 1 and look for the last integer where the value is negative.',
        'Once <span class="chem">n</span> is large, <span class="chem">2^{n+1}/2^n = 2</span> is bigger than <span class="chem">(n + 1)^5/n^5</span>, so the inequality stays true.'
      ],
      solution: '<p><strong>Decode:</strong> “for every integer <span class="chem">n &gt;= n_0</span>” means you need the start of the final run of true values, not the first true value.</p><p><span class="chem">n = 1</span>: <span class="chem">2 &gt; 1</span> (true), but <span class="chem">n = 2</span>: <span class="chem">4 &lt; 32</span> (false), and the table shows it is false for every <span class="chem">n</span> from 2 to 22: <span class="chem">2^{22} = 4194304 &lt; 22^5 = 5153632</span>. For <span class="chem">n = 23</span>: <span class="chem">2^{23} = 8388608 &gt; 23^5 = 6436343</span>. For <span class="chem">n &gt;= 23</span>, <span class="chem">(1 + 1/n)^5 &lt; 2</span>, so the inequality stays true. Hence <span class="chem">n_0 = 23</span>.</p>'
    },
    {
      id: 't1-5-q052',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.15',
      type: 'short',
      marks: 9,
      stem: 'Let <span class="chem">S_n = Sigma_{r=1}^n r / 2^r</span>.<br>(a) Prove by mathematical induction that <span class="chem">S_n = 2 - (n + 2)/2^n</span> for all <span class="chem">n \\in \\mathbb{Z}^+</span>. [7 marks]<br>(b) Find the smallest value of <span class="chem">n</span> for which <span class="chem">S_n &gt; 1.999</span>. [2 marks]',
      answer: '<p>(a) <strong>Base case:</strong> <span class="chem">n = 1</span>: <span class="chem">S_1 = 1/2</span> and <span class="chem">2 - 3/2 = 1/2</span>, so <span class="chem">P(1)</span> is true.<br><strong>Assumption:</strong> assume <span class="chem">S_k = 2 - (k + 2)/2^k</span> for some <span class="chem">k \\in \\mathbb{Z}^+</span>.<br><strong>Step:</strong> <span class="chem">S_{k+1} = 2 - (k + 2)/2^k + (k + 1)/2^{k+1} = 2 - (2(k + 2) - (k + 1))/2^{k+1} = 2 - (k + 3)/2^{k+1} = 2 - ((k + 1) + 2)/2^{k+1}</span>.<br><strong>Conclusion:</strong> since <span class="chem">P(1)</span> is true and <span class="chem">P(k)</span> true implies <span class="chem">P(k + 1)</span> true, by mathematical induction the formula holds for all <span class="chem">n \\in \\mathbb{Z}^+</span>.<br>(b) We need <span class="chem">(n + 2)/2^n &lt; 0.001</span>. The GDC table gives <span class="chem">15/2^{13} = 0.00183</span> and <span class="chem">16/2^{14} = 0.000977</span>, so <span class="chem">n = 14</span>.</p>',
      markscheme: [
        'A1: (a) n = 1: S₁ = 1/2 and 2 − 3/2 = 1/2, so P(1) is true.',
        'M1: (a) Assumes P(k) true for some k ∈ ℤ⁺.',
        'M1: (a) Adds the (k + 1)-th term: S<sub>k+1</sub> = 2 − (k + 2)/2<sup>k</sup> + (k + 1)/2<sup>k+1</sup>.',
        'M1: (a) Uses the common denominator 2<sup>k+1</sup>.',
        'A1: (a) Obtains 2 − (2k + 4 − k − 1)/2<sup>k+1</sup>.',
        'A1: (a) Obtains 2 − (k + 3)/2<sup>k+1</sup> = 2 − ((k + 1) + 2)/2<sup>k+1</sup>.',
        'R1: (a) Induction conclusion sentence (only if the M marks above are earned).',
        'M1: (b) Sets up (n + 2)/2<sup>n</sup> < 0.001 (or 2 − (n + 2)/2<sup>n</sup> > 1.999) and uses a table or graph.',
        'A1: (b) n = 14.'
      ],
      hints: [
        'In the step, the <span class="chem">(k + 1)</span>-th term is <span class="chem">(k + 1)/2^{k+1}</span>. Write <span class="chem">(k + 2)/2^k</span> as <span class="chem">2(k + 2)/2^{k+1}</span>.',
        'In (b) the inequality cannot be rearranged to make <span class="chem">n</span> the subject, so use the table function of your GDC.'
      ],
      solution: '<p>(a) <span class="chem">S_{k+1} = 2 - (2k + 4)/2^{k+1} + (k + 1)/2^{k+1} = 2 - (k + 3)/2^{k+1}</span>, which is the formula with <span class="chem">n = k + 1</span>.<br>(b) <span class="chem">S_{13} = 1.99817</span> and <span class="chem">S_{14} = 1.99902</span>, so the smallest value is <span class="chem">n = 14</span>.</p>'
    },
    {
      id: 't1-5-q053',
      topic: 't1-5',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.15',
      type: 'numeric',
      marks: 5,
      stem: 'A beekeeper starts season 1 with 100 hives. Each season the number of hives grows by 50%, after which 20 hives are sold. The number of hives is modelled by <span class="chem">u_1 = 100</span> and <span class="chem">u_{n+1} = 1.5u_n - 20</span>, where <span class="chem">u_n</span> is the modelled number of hives at the start of season <span class="chem">n</span>. It can be proved by induction that <span class="chem">u_n = 40 + 60(1.5)^{n-1}</span>. Find the first season in which the beekeeper starts with more than 10 000 hives.',
      answer: 14,
      exact: true,
      answerInput: '14',
      hints: [
        'Decode: you want the smallest positive integer <span class="chem">n</span> with <span class="chem">u_n &gt; 10000</span>. The closed form (proved by induction) turns this into an exponential inequality.',
        'Solve <span class="chem">40 + 60(1.5)^{n-1} &gt; 10000</span> with your GDC (graph or table), or rearrange to <span class="chem">1.5^{n-1} &gt; 166</span> and use logarithms.',
        'The answer must be a whole number of seasons: check the integers on either side of the boundary.'
      ],
      solution: '<p><strong>Decode:</strong> a recurrence plus a threshold: use the closed form, then find the least integer <span class="chem">n</span>.</p><p><span class="chem">60(1.5)^{n-1} &gt; 9960</span> gives <span class="chem">1.5^{n-1} &gt; 166</span>, so <span class="chem">n - 1 &gt; ln 166 / ln 1.5 = 12.6</span>. Table check: <span class="chem">u_{13} = 7824.8</span> and <span class="chem">u_{14} = 11717</span>. So the first such season is season <span class="chem">14</span>.</p>'
    },
    {
      id: 't1-5-q054',
      topic: 't1-5',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.15',
      type: 'numeric',
      marks: 5,
      stem: 'Let <span class="chem">f(x) = x^2 e^x</span>. It can be proved by induction that <span class="chem">f^{(n)}(x) = (x^2 + 2nx + n(n - 1))e^x</span> for all <span class="chem">n \\in \\mathbb{Z}^+</span>. Find the minimum value of the function <span class="chem">g(x) = f^{(4)}(x)</span>, <span class="chem">x \\in \\mathbb{R}</span>.',
      answer: -0.15585183691017923,
      sigfigs: 3,
      hints: [
        'Decode: <span class="chem">g = f^{(4)}</span>, so its derivative is <span class="chem">g\'(x) = f^{(5)}(x)</span>, which the given formula provides. You need the stationary point of <span class="chem">g</span> that gives the least value.',
        'From the formula with <span class="chem">n = 4</span>: <span class="chem">g(x) = (x^2 + 8x + 12)e^x</span>; with <span class="chem">n = 5</span>: <span class="chem">g\'(x) = (x^2 + 10x + 20)e^x</span>.',
        'Graph <span class="chem">g</span> on your GDC (e.g. for <span class="chem">-10 &lt;= x &lt;= 1</span>) and use the minimum feature, or solve <span class="chem">x^2 + 10x + 20 = 0</span>.'
      ],
      solution: '<p><strong>Decode:</strong> the induction formula gives both <span class="chem">g = f^{(4)}</span> and <span class="chem">g\' = f^{(5)}</span>.</p><p><span class="chem">g\'(x) = (x^2 + 10x + 20)e^x = 0</span> gives <span class="chem">x = -5 +- sqrt(5)</span>. At <span class="chem">x = -5 + sqrt(5) = -2.764</span>, <span class="chem">g = -0.156</span>; at <span class="chem">x = -5 - sqrt(5)</span>, <span class="chem">g = 0.00466</span> (a local maximum). As <span class="chem">x -&gt; −∞</span>, <span class="chem">g -&gt; 0</span>, so the minimum value is <span class="chem">-0.156</span> (3 s.f.).</p>'
    },
    {
      id: 't1-5-q055',
      topic: 't1-5',
      level: 'ahl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.16',
      type: 'numeric',
      marks: 4,
      stem: 'A school canteen sells three meals, A, B and C, each at a fixed price. The sales on three days were:<br><span class="mono">Monday: 112 A, 85 B, 64 C, takings $1777.00</span><br><span class="mono">Tuesday: 98 A, 102 B, 71 C, takings $1848.55</span><br><span class="mono">Wednesday: 120 A, 76 B, 90 C, takings $1919.90</span><br>Find the price of meal C. Give your answer correct to 2 decimal places.',
      answer: 5.95,
      dp: 2,
      unit: '$',
      hints: [
        'Let the prices be <span class="chem">a, b, c</span> dollars. Each day gives one equation, for example <span class="chem">112a + 85b + 64c = 1777</span>.',
        'Solve the system with your GDC.'
      ],
      solution: '<p><span class="chem">112a + 85b + 64c = 1777</span>, <span class="chem">98a + 102b + 71c = 1848.55</span>, <span class="chem">120a + 76b + 90c = 1919.90</span>. The GDC gives <span class="chem">a = 6.85</span>, <span class="chem">b = 7.40</span>, <span class="chem">c = 5.95</span>. Check Monday: <span class="chem">767.20 + 629.00 + 380.80 = 1777.00</span>. Meal C costs <span class="chem">$5.95</span>.</p>'
    },
    {
      id: 't1-5-q056',
      topic: 't1-5',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 1.16',
      type: 'numeric',
      marks: 6,
      stem: 'Consider the system<br><span class="chem">0.4x + 1.2y - 0.7z = 2.6</span><br><span class="chem">1.5x - 0.3y + 0.9z = 1.8</span><br><span class="chem">1.58x + 1.86y + kz = m</span>, where <span class="chem">k, m \\in \\mathbb{R}</span>.<br>The system has infinitely many solutions. Find the value of <span class="chem">m</span>.',
      answer: 5.5,
      exact: true,
      answerInput: '11/2',
      hints: [
        'Decode: the first two planes are not parallel, so they meet in a line. Infinitely many solutions means the third equation must be a combination <span class="chem">alpha R_1 + beta R_2</span> of the first two (all four entries).',
        'Match the <span class="chem">x</span>- and <span class="chem">y</span>-coefficients: <span class="chem">0.4alpha + 1.5beta = 1.58</span> and <span class="chem">1.2alpha - 0.3beta = 1.86</span>. Solve this <span class="chem">2 × 2</span> system (GDC).',
        'Then <span class="chem">k = -0.7alpha + 0.9beta</span> and <span class="chem">m = 2.6alpha + 1.8beta</span>. Check with rref that the system really has a zero row.'
      ],
      solution: '<p><strong>Decode:</strong> “infinitely many solutions” for three planes through a common line means the third equation is a linear combination of the other two, including the constant term.</p><p><span class="chem">0.4alpha + 1.5beta = 1.58</span>, <span class="chem">1.2alpha - 0.3beta = 1.86</span> give <span class="chem">alpha = 1.7</span>, <span class="chem">beta = 0.6</span>. Then <span class="chem">k = -1.19 + 0.54 = -0.65</span> and <span class="chem">m = 4.42 + 1.08 = 5.5</span>. With <span class="chem">k = -0.65</span> and <span class="chem">m = 5.5</span>, rref on the GDC gives a row of zeros, confirming infinitely many solutions.</p>'
    },
    {
      id: 't1-5-q057',
      topic: 't1-5',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 3 (HL Investigation)',
      syllabus: 'AHL 1.15, 1.16',
      type: 'short',
      marks: 18,
      stem: '<strong>Investigation: finding a sum formula with a linear system.</strong> Let <span class="chem">S(n) = Sigma_{r=1}^n r(r + 2)</span>.<br>(a) Write down the values of <span class="chem">S(1)</span>, <span class="chem">S(2)</span> and <span class="chem">S(3)</span>. [2 marks]<br>It is suggested that <span class="chem">S(n) = an^3 + bn^2 + cn</span> for constants <span class="chem">a, b, c</span>.<br>(b) Use your answers to (a) to write down a system of three linear equations in <span class="chem">a, b, c</span>, and solve it. [4 marks]<br>(c) Verify that your formula gives the correct value of <span class="chem">S(4)</span>. [2 marks]<br>(d) Show that your formula can be written as <span class="chem">S(n) = n(n + 1)(2n + 7)/6</span>. [2 marks]<br>(e) Prove by mathematical induction that <span class="chem">S(n) = n(n + 1)(2n + 7)/6</span> for all <span class="chem">n \\in \\mathbb{Z}^+</span>. [6 marks]<br>(f) Find the smallest value of <span class="chem">n</span> for which <span class="chem">S(n) &gt; 10^6</span>. [2 marks]',
      answer: '<p>(a) <span class="chem">S(1) = 3</span>, <span class="chem">S(2) = 3 + 8 = 11</span>, <span class="chem">S(3) = 11 + 15 = 26</span>.<br>(b) <span class="chem">a + b + c = 3</span>, <span class="chem">8a + 4b + 2c = 11</span>, <span class="chem">27a + 9b + 3c = 26</span>, giving <span class="chem">a = 1/3</span>, <span class="chem">b = 3/2</span>, <span class="chem">c = 7/6</span>.<br>(c) Directly, <span class="chem">S(4) = 26 + 4 × 6 = 50</span>; the formula gives <span class="chem">64/3 + 24 + 14/3 = 50</span>.<br>(d) <span class="chem">S(n) = (2n^3 + 9n^2 + 7n)/6 = n(2n^2 + 9n + 7)/6 = n(n + 1)(2n + 7)/6</span>.<br>(e) <span class="chem">n = 1</span>: <span class="chem">1 × 3 = 3</span> and <span class="chem">(1 × 2 × 9)/6 = 3</span>. Assume <span class="chem">S(k) = k(k + 1)(2k + 7)/6</span> for some <span class="chem">k \\in \\mathbb{Z}^+</span>. Then <span class="chem">S(k + 1) = k(k + 1)(2k + 7)/6 + (k + 1)(k + 3) = (k + 1)(2k^2 + 7k + 6k + 18)/6 = (k + 1)(2k^2 + 13k + 18)/6 = (k + 1)(k + 2)(2k + 9)/6</span>, which is the formula for <span class="chem">n = k + 1</span> because <span class="chem">2(k + 1) + 7 = 2k + 9</span>. Since <span class="chem">P(1)</span> is true and <span class="chem">P(k) =&gt; P(k + 1)</span>, the result holds for all <span class="chem">n \\in \\mathbb{Z}^+</span> by mathematical induction.<br>(f) <span class="chem">S(142) = 984 841</span> and <span class="chem">S(143) = 1 005 576</span>, so <span class="chem">n = 143</span>.</p>',
      markscheme: [
        'A1: (a) S(1) = 3 and S(2) = 11.',
        'A1: (a) S(3) = 26.',
        'M1: (b) Substitutes n = 1, 2, 3 into an³ + bn² + cn.',
        'A1: (b) a + b + c = 3, 8a + 4b + 2c = 11, 27a + 9b + 3c = 26.',
        'M1: (b) Solves the system (GDC or elimination).',
        'A1: (b) a = 1/3, b = 3/2, c = 7/6.',
        'A1: (c) Finds S(4) = 50 directly from the sum.',
        'A1: (c) Shows the formula gives 64/3 + 24 + 14/3 = 50.',
        'M1: (d) Writes S(n) = (2n³ + 9n² + 7n)/6 = n(2n² + 9n + 7)/6.',
        'A1: (d) Factorises 2n² + 9n + 7 = (n + 1)(2n + 7), giving the result AG (no mark for the given line).',
        'A1: (e) Base case n = 1: both sides equal 3, so P(1) is true.',
        'M1: (e) Assumes P(k) true for some k ∈ ℤ⁺.',
        'M1: (e) Adds the (k + 1)-th term (k + 1)(k + 3) to S(k).',
        'A1: (e) Takes out the factor (k + 1)/6 to get (k + 1)(2k² + 13k + 18)/6.',
        'A1: (e) Factorises to (k + 1)(k + 2)(2k + 9)/6 = (k + 1)(k + 2)(2(k + 1) + 7)/6.',
        'R1: (e) Induction conclusion sentence (only if the M marks above are earned).',
        'M1: (f) Uses the formula with a GDC table, graph or solver for S(n) > 10⁶.',
        'A1: (f) n = 143.'
      ],
      hints: [
        'Decode: this is the standard Paper 3 route: compute small cases, fit a model with a linear system, test it on a new case, then prove it in general by induction and apply it.',
        'In (b) each value of <span class="chem">n</span> gives one equation: for <span class="chem">n = 2</span>, <span class="chem">8a + 4b + 2c = 11</span>.',
        'In (e) the <span class="chem">(k + 1)</span>-th term is <span class="chem">(k + 1)(k + 3)</span>. Take out the common factor <span class="chem">(k + 1)/6</span> before expanding anything.',
        'In (f), solve <span class="chem">n(n + 1)(2n + 7)/6 = 10^6</span> on your GDC and round up to the next integer.'
      ],
      solution: '<p><strong>Decode:</strong> parts (a)–(c) generate and test a conjecture (a linear system in <span class="chem">a, b, c</span>), (d)–(e) turn it into a proved theorem, and (f) uses it.</p><p>(b) The GDC (or elimination) gives <span class="chem">a = 1/3, b = 3/2, c = 7/6</span>. (e) The step <span class="chem">k(2k + 7) + 6(k + 3) = 2k^2 + 13k + 18 = (k + 2)(2k + 9)</span> is the heart of the induction. (f) The equation <span class="chem">S(n) = 10^6</span> has root <span class="chem">n = 142.7</span>, so the smallest integer is <span class="chem">143</span>.</p>'
    },
    {
      id: 't1-5-q058',
      topic: 't1-5',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 3 (HL Investigation)',
      syllabus: 'AHL 1.15',
      type: 'short',
      marks: 17,
      stem: '<strong>Investigation: closed forms for a recurrence.</strong> A sequence is defined by <span class="chem">u_1 = 2</span> and <span class="chem">u_{n+1} = 3u_n - 2</span> for <span class="chem">n \\in \\mathbb{Z}^+</span>.<br>(a) Write down <span class="chem">u_2</span>, <span class="chem">u_3</span>, <span class="chem">u_4</span> and <span class="chem">u_5</span>. [2 marks]<br>(b) Let <span class="chem">v_n = u_n - 1</span>. Write down <span class="chem">v_1, ..., v_5</span> and hence conjecture a formula for <span class="chem">u_n</span> in terms of <span class="chem">n</span>. [2 marks]<br>(c) Prove your conjecture by mathematical induction. [5 marks]<br>(d) Find an expression for <span class="chem">Sigma_{r=1}^n u_r</span> in terms of <span class="chem">n</span>. [3 marks]<br>(e) Find the smallest <span class="chem">n</span> for which <span class="chem">Sigma_{r=1}^n u_r &gt; 10^9</span>. [2 marks]<br>(f) Now consider the general recurrence <span class="chem">u_{n+1} = au_n + b</span> with <span class="chem">a != 1</span>, and let <span class="chem">L = b/(1 - a)</span>. Show that <span class="chem">u_{n+1} - L = a(u_n - L)</span>, deduce a formula for <span class="chem">u_n</span> in terms of <span class="chem">u_1</span>, <span class="chem">a</span>, <span class="chem">L</span> and <span class="chem">n</span>, and check it against part (b). [3 marks]',
      answer: '<p>(a) <span class="chem">u_2 = 4</span>, <span class="chem">u_3 = 10</span>, <span class="chem">u_4 = 28</span>, <span class="chem">u_5 = 82</span>.<br>(b) <span class="chem">v_n = 1, 3, 9, 27, 81</span>: powers of 3, so <span class="chem">u_n = 3^{n-1} + 1</span>.<br>(c) <span class="chem">n = 1</span>: <span class="chem">3^0 + 1 = 2 = u_1</span>. Assume <span class="chem">u_k = 3^{k-1} + 1</span> for some <span class="chem">k \\in \\mathbb{Z}^+</span>. Then <span class="chem">u_{k+1} = 3(3^{k-1} + 1) - 2 = 3^k + 1</span>, the formula for <span class="chem">n = k + 1</span>. By induction the formula holds for all <span class="chem">n \\in \\mathbb{Z}^+</span>.<br>(d) <span class="chem">Sigma_{r=1}^n (3^{r-1} + 1) = (3^n - 1)/2 + n</span>.<br>(e) <span class="chem">n = 19</span> gives <span class="chem">581 130 752</span>; <span class="chem">n = 20</span> gives <span class="chem">1 743 392 220</span>. So <span class="chem">n = 20</span>.<br>(f) Since <span class="chem">b = L(1 - a)</span>, <span class="chem">u_{n+1} - L = au_n + L - aL - L = a(u_n - L)</span>. So <span class="chem">u_n - L</span> is geometric with ratio <span class="chem">a</span>: <span class="chem">u_n = L + (u_1 - L)a^{n-1}</span>. For <span class="chem">a = 3, b = -2</span>: <span class="chem">L = 1</span> and <span class="chem">u_n = 1 + (2 - 1)3^{n-1}</span>, as in (b).</p>',
      markscheme: [
        'A1: (a) u₂ = 4, u₃ = 10.',
        'A1: (a) u₄ = 28, u₅ = 82.',
        'A1: (b) v₁, …, v₅ = 1, 3, 9, 27, 81.',
        'A1: (b) Conjecture u<sub>n</sub> = 3<sup>n−1</sup> + 1.',
        'A1: (c) Base case: 3⁰ + 1 = 2 = u₁, so P(1) is true.',
        'M1: (c) Assumes u<sub>k</sub> = 3<sup>k−1</sup> + 1 for some k ∈ ℤ⁺.',
        'M1: (c) Uses the recurrence: u<sub>k+1</sub> = 3(3<sup>k−1</sup> + 1) − 2.',
        'A1: (c) Simplifies to 3<sup>k</sup> + 1 = 3<sup>(k+1)−1</sup> + 1.',
        'R1: (c) Induction conclusion sentence (only if the M marks above are earned).',
        'M1: (d) Splits the sum into Σ3<sup>r−1</sup> + Σ1.',
        'A1: (d) Geometric part (3<sup>n</sup> − 1)/2.',
        'A1: (d) Total (3<sup>n</sup> − 1)/2 + n.',
        'M1: (e) Uses a GDC table, graph or solver on (3<sup>n</sup> − 1)/2 + n > 10⁹.',
        'A1: (e) n = 20.',
        'M1: (f) Uses b = L(1 − a) to show u<sub>n+1</sub> − L = a(u<sub>n</sub> − L).',
        'A1: (f) Deduces u<sub>n</sub> = L + (u₁ − L)a<sup>n−1</sup>.',
        'R1: (f) Checks a = 3, b = −2: L = 1 gives u<sub>n</sub> = 1 + 3<sup>n−1</sup>, agreeing with (b).'
      ],
      hints: [
        'Decode: the substitution <span class="chem">v_n = u_n - 1</span> is the key idea. It turns the recurrence into a geometric sequence; part (f) asks you to explain why this works in general.',
        'In (c), substitute the assumption into the recurrence <span class="chem">u_{k+1} = 3u_k - 2</span>.',
        'In (d), split the sum into a geometric series with first term 1 and ratio 3, plus <span class="chem">n</span> ones.',
        'In (f), replace <span class="chem">b</span> by <span class="chem">L(1 - a)</span> in <span class="chem">au_n + b - L</span>.'
      ],
      solution: '<p><strong>Decode:</strong> “a fixed amount added after multiplying” hides a geometric sequence. Shifting by the fixed point <span class="chem">L</span> removes the constant term.</p><p>The closed form <span class="chem">u_n = 3^{n-1} + 1</span> is proved in one line of algebra in the inductive step. Summing gives <span class="chem">(3^n - 1)/2 + n</span>, which first exceeds <span class="chem">10^9</span> at <span class="chem">n = 20</span>. In general <span class="chem">u_n = L + (u_1 - L)a^{n-1}</span>.</p>'
    },
    {
      id: 't1-5-q059',
      topic: 't1-5',
      level: 'ahl',
      tier: 'challenge',
      paper: 'Paper 3 (HL Investigation)',
      syllabus: 'AHL 1.16',
      type: 'short',
      marks: 15,
      stem: '<strong>Investigation: when does a quadratic fit three points?</strong> We look for a quadratic <span class="chem">y = ax^2 + bx + c</span> whose graph passes through the points <span class="chem">(1, p)</span>, <span class="chem">(2, q)</span> and <span class="chem">(t, r)</span>.<br>(a) For <span class="chem">t = 3</span>, <span class="chem">p = 2</span>, <span class="chem">q = 3</span> and <span class="chem">r = 6</span>, write down the system of equations for <span class="chem">a, b, c</span> and solve it. [3 marks]<br>(b) For <span class="chem">t = 3.7</span>, <span class="chem">p = 2</span>, <span class="chem">q = 3</span>, <span class="chem">r = 6</span>, use your GDC to find <span class="chem">a</span>. [2 marks]<br>(c) For general values, show that row reduction gives <span class="chem">(t - 1)(t - 2)a = (r - p) - (t - 1)(q - p)</span>. [4 marks]<br>(d) Hence state the values of <span class="chem">t</span> for which there is a unique quadratic. For <span class="chem">t = 2</span>, state the condition for infinitely many solutions and the condition for no solution, and explain each case in terms of the points. [3 marks]<br>(e) For <span class="chem">t = 2</span> and <span class="chem">r = q</span>, let <span class="chem">a = lambda</span> and find <span class="chem">b</span> and <span class="chem">c</span> in terms of <span class="chem">lambda</span>, <span class="chem">p</span> and <span class="chem">q</span>. [2 marks]<br>(f) State what happens when <span class="chem">t = 1</span>. [1 mark]',
      answer: '<p>(a) <span class="chem">a + b + c = 2</span>, <span class="chem">4a + 2b + c = 3</span>, <span class="chem">9a + 3b + c = 6</span>. Subtracting: <span class="chem">3a + b = 1</span> and <span class="chem">5a + b = 3</span>, so <span class="chem">a = 1</span>, <span class="chem">b = -2</span>, <span class="chem">c = 3</span>.<br>(b) With <span class="chem">13.69a + 3.7b + c = 6</span>, the GDC gives <span class="chem">a = 0.283</span> (3 s.f.).<br>(c) <span class="chem">R_2 - R_1: 3a + b = q - p</span>. <span class="chem">R_3 - R_1: (t^2 - 1)a + (t - 1)b = r - p</span>. Subtract <span class="chem">(t - 1)</span> times the first: <span class="chem">(t^2 - 1 - 3(t - 1))a = (r - p) - (t - 1)(q - p)</span>, and <span class="chem">t^2 - 3t + 2 = (t - 1)(t - 2)</span>.<br>(d) Unique for <span class="chem">t != 1</span> and <span class="chem">t != 2</span> (if the three points happen to be collinear, this unique solution has <span class="chem">a = 0</span>, a straight line rather than a true quadratic). For <span class="chem">t = 2</span> the last row is <span class="chem">0a = r - q</span>: infinitely many if <span class="chem">r = q</span> (only two distinct points, and infinitely many parabolas pass through two points); none if <span class="chem">r != q</span> (two points with the same <span class="chem">x</span> and different <span class="chem">y</span>; no function can pass through both).<br>(e) <span class="chem">b = q - p - 3lambda</span>, <span class="chem">c = 2p - q + 2lambda</span>.<br>(f) For <span class="chem">t = 1</span> the last row is <span class="chem">0a = r - p</span>: infinitely many solutions if <span class="chem">r = p</span>, no solution if <span class="chem">r != p</span>.</p>',
      markscheme: [
        'M1: (a) Substitutes the three points into y = ax² + bx + c.',
        'A1: (a) a + b + c = 2, 4a + 2b + c = 3, 9a + 3b + c = 6.',
        'A1: (a) a = 1, b = −2, c = 3.',
        'M1: (b) Sets up the system with the third equation 13.69a + 3.7b + c = 6 and uses technology.',
        'A1: (b) a = 0.283.',
        'M1: (c) R₂ − R₁ gives 3a + b = q − p.',
        'M1: (c) R₃ − R₁ gives (t² − 1)a + (t − 1)b = r − p.',
        'M1: (c) Subtracts (t − 1) × (3a + b = q − p) to eliminate b.',
        'A1: (c) Coefficient t² − 1 − 3(t − 1) = (t − 1)(t − 2), giving the result AG (no mark for the given line).',
        'A1: (d) Unique quadratic for all t except t = 1 and t = 2.',
        'A1: (d) t = 2: infinitely many if r = q, none if r ≠ q.',
        'R1: (d) Explains: r = q means only two distinct points (infinitely many parabolas fit); r ≠ q means one x-value with two y-values (no function).',
        'M1: (e) Back-substitutes a = λ into 3a + b = q − p and a + b + c = p.',
        'A1: (e) b = q − p − 3λ and c = 2p − q + 2λ.',
        'A1: (f) t = 1: infinitely many solutions if r = p, otherwise no solution.'
      ],
      hints: [
        'Decode: this investigation links the algebra of the final row <span class="chem">g(t)a = h</span> to a picture. Ask yourself in each case: how many DIFFERENT points are there, and do any two share an <span class="chem">x</span>-coordinate?',
        'In (c), eliminate <span class="chem">c</span> first (subtract row 1 from rows 2 and 3), then eliminate <span class="chem">b</span>.',
        'Factorise <span class="chem">t^2 - 3t + 2</span>. The system has a unique solution exactly when this coefficient is non-zero.'
      ],
      solution: '<p><strong>Decode:</strong> the coefficient <span class="chem">(t - 1)(t - 2)</span> vanishes exactly when the third point shares an <span class="chem">x</span>-coordinate with one of the first two, which is when a parabola (a function) may fail to exist or fail to be unique.</p><p>(b) From (c): <span class="chem">(2.7)(1.7)a = 4 - 2.7</span>, so <span class="chem">a = 1.3/4.59 = 0.283</span>, agreeing with the GDC. (e) From <span class="chem">3lambda + b = q - p</span> and <span class="chem">lambda + b + c = p</span>.</p>'
    }
  ]);
})();
