/* ==========================================================================
   Analysis Lab — questions-t4-2.js
   Question bank for Topic 4.2: Probability, distributions, Bayes and continuous RVs
   (SL 4.5–4.9, 4.11–4.12 + AHL 4.13–4.14)
   19 original questions across SL and AHL, spanning foundation, exam, and challenge tiers.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.questions) return;

  S1.questions.register('t4-2', [
    {
      id: 't4-2-q001',
      level: 'sl',
      tier: 'foundation',
      type: 'mcq',
      marks: 2,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.6',
      stem: '<p>Events <span class="chem">A</span> and <span class="chem">B</span> are <strong>mutually exclusive</strong> with <span class="chem">P(A) = 0.30</span> and <span class="chem">P(B) = 0.50</span>. What is <span class="chem">P(A ∪ B)</span>?</p>',
      options: [
        '<span class="chem">0.80</span>',
        '<span class="chem">0.65</span>',
        '<span class="chem">0.15</span>',
        '<span class="chem">0.20</span>'
      ],
      answer: 0,
      misconception: {
        1: 'You subtracted 0.30 × 0.50 = 0.15, which is the rule for independent events, not mutually exclusive events!',
        2: 'You multiplied P(A) and P(B), which gives P(A ∩ B) for independent events; for mutually exclusive events, P(A ∩ B) = 0.',
        3: 'You subtracted P(A) from P(B) instead of adding them.'
      },
      hints: [
        'For mutually exclusive events, <span class="chem">P(A ∩ B) = 0</span>.',
        'Use <span class="chem">P(A ∪ B) = P(A) + P(B)</span>.'
      ],
      solution: '<p>Because <span class="chem">A</span> and <span class="chem">B</span> are mutually exclusive, <span class="chem">P(A ∩ B) = 0</span>, so <span class="chem">P(A ∪ B) = P(A) + P(B) = 0.30 + 0.50 = 0.80</span>.</p>'
    },
    {
      id: 't4-2-q002',
      level: 'sl',
      tier: 'foundation',
      type: 'numeric',
      marks: 3,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.6',
      stem: '<p>Events <span class="chem">A</span> and <span class="chem">B</span> are <strong>independent</strong> with <span class="chem">P(A) = 0.40</span> and <span class="chem">P(B) = 0.60</span>. Calculate <span class="chem">P(A ∪ B)</span>.</p>',
      answer: 0.76,
      tolerance: 0.005,
      sigfigs: '2-3',
      hints: [
        'Since <span class="chem">A</span> and <span class="chem">B</span> are independent, <span class="chem">P(A ∩ B) = P(A)P(B) = 0.40 × 0.60</span>.',
        'Substitute into <span class="chem">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</span>.'
      ],
      solution: '<p>By independence, <span class="chem">P(A ∩ B) = 0.40 × 0.60 = 0.24</span> <b>[A1]</b>.<br>Then <span class="chem">P(A ∪ B) = 0.40 + 0.60 - 0.24 = 0.76</span> <b>[M1 A1]</b>.</p>'
    },
    {
      id: 't4-2-q003',
      level: 'sl',
      tier: 'foundation',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.7',
      stem: '<p>A discrete random variable <span class="chem">X</span> takes the values <span class="chem">1, 2, 3, 4</span> with probabilities <span class="chem">0.1, k, 2k, 0.3</span> respectively. Find the expected value <span class="chem">E(X)</span>.</p>',
      answer: 2.9,
      tolerance: 0.01,
      sigfigs: '2-3',
      hints: [
        'Use <span class="chem">Σ P(X = x) = 1</span> to solve <span class="chem">0.1 + k + 2k + 0.3 = 1</span> for <span class="chem">k</span>.',
        'Then compute <span class="chem">E(X) = 1(0.1) + 2(k) + 3(2k) + 4(0.3)</span>.'
      ],
      solution: '<p>Since probabilities sum to <span class="chem">1</span>: <span class="chem">0.4 + 3k = 1 ⇒ k = 0.2</span> <b>[M1 A1]</b>.<br>Thus <span class="chem">E(X) = 1(0.1) + 2(0.2) + 3(0.4) + 4(0.3) = 0.1 + 0.4 + 1.2 + 1.2 = 2.9</span> <b>[M1 A1]</b>.</p>'
    },
    {
      id: 't4-2-q004',
      level: 'sl',
      tier: 'foundation',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.8',
      stem: '<p>A binomial random variable <span class="chem">X ~ B(n, p)</span> has mean <span class="chem">E(X) = 12</span> and variance <span class="chem">Var(X) = 3</span>. Find the number of trials <span class="chem">n</span>.</p>',
      answer: 16,
      tolerance: 0.01,
      sigfigs: '2-3',
      hints: [
        'Divide <span class="chem">Var(X) = np(1 - p) = 3</span> by <span class="chem">E(X) = np = 12</span> to find <span class="chem">1 - p</span>.',
        'Once you have <span class="chem">p = 0.75</span>, substitute into <span class="chem">np = 12</span> to solve for <span class="chem">n</span>.'
      ],
      solution: '<p><span class="chem">1 - p = Var(X) / E(X) = 3 / 12 = 0.25 ⇒ p = 0.75</span> <b>[M1 A1]</b>.<br>From <span class="chem">np = 12</span>, we get <span class="chem">n = 12 / 0.75 = 16</span> <b>[M1 A1]</b>.</p>'
    },
    {
      id: 't4-2-q005',
      level: 'sl',
      tier: 'exam',
      type: 'mcq',
      marks: 3,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.8',
      stem: '<p>A biased coin has probability <span class="chem">1/3</span> of landing on Heads on any toss. If the coin is tossed <span class="chem">4</span> times independently, what is the exact probability of obtaining <strong>exactly 2</strong> Heads?</p>',
      options: [
        '<span class="chem">8/27</span>',
        '<span class="chem">4/81</span>',
        '<span class="chem">2/9</span>',
        '<span class="chem">16/81</span>'
      ],
      answer: 0,
      misconception: {
        1: 'You computed (1/3)²(2/3)² = 4/81 for a single specific sequence (such as HHTT) and forgot to multiply by 4C2 = 6!',
        2: 'You may have used 6 × (1/3)³ = 6/27 = 2/9, or multiplied 1/3 × 2/3 = 2/9 without the powers. The correct value is 4C2 (1/3)² (2/3)² = 6 × 4/81 = 24/81 = 8/27.',
        3: '16/81 is (2/3)⁴, which is the probability of obtaining 0 Heads (all Tails).'
      },
      hints: [
        'Use the Binomial formula <span class="chem">P(X = 2) = 4C2 (1/3)^2 (2/3)^2</span>.',
        'Remember <span class="chem">4C2 = 6</span>.'
      ],
      solution: '<p>Let <span class="chem">X ~ B(4, 1/3)</span>. Then <span class="chem">P(X = 2) = 6 × (1/3)^2 × (2/3)^2 = 6 × (4/81) = 24/81 = 8/27</span>.</p>'
    },
    {
      id: 't4-2-q006',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.8',
      stem: '<p>A basketball player makes each free throw with constant probability <span class="chem">p = 0.30</span>, independently of other attempts. Find the minimum number of attempts <span class="chem">n</span> required so that the probability of making <strong>at least one</strong> free throw exceeds <span class="chem">0.95</span>.</p>',
      answer: 9,
      tolerance: 0.01,
      sigfigs: '1-3',
      hints: [
        'Set up the complement inequality: <span class="chem">1 - P(X = 0) = 1 - 0.70^n &gt; 0.95 ⇒ 0.70^n &lt; 0.05</span>.',
        'Solve <span class="chem">n &gt; ln(0.05) / ln(0.70)</span> and round <strong>up</strong> to the next whole number.'
      ],
      solution: '<p><span class="chem">P(X ≥ 1) = 1 - 0.70^n &gt; 0.95 ⇒ 0.70^n &lt; 0.05</span> <b>[M1 A1]</b>.<br><span class="chem">n &gt; ln(0.05) / ln(0.70) ≈ 8.399</span> <b>[M1]</b>.<br>Rounding up to the next integer gives <span class="chem">n = 9</span> attempts <b>[A1]</b>.</p>'
    },
    {
      id: 't4-2-q007',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 3,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.9',
      stem: '<p>A random variable <span class="chem">X</span> is normally distributed with mean <span class="chem">μ = 100</span> and standard deviation <span class="chem">σ = 15</span>. Find the value of <span class="chem">k</span> such that <span class="chem">P(X &gt; k) = 0.20</span>, giving your answer to 3 s.f.</p>',
      answer: 113,
      tolerance: '1%',
      sigfigs: 3,
      hints: [
        'Since the right-tail area is <span class="chem">P(X &gt; k) = 0.20</span>, the left-tail area is <span class="chem">P(X &lt; k) = 0.80</span>.',
        'Use <span class="mono">invNorm(0.80, 100, 15)</span> or <span class="chem">k = 100 + 15 × invNorm(0.80)</span>.'
      ],
      solution: '<p>Left-tail probability is <span class="chem">P(X &lt; k) = 1 - 0.20 = 0.80</span> <b>[M1]</b>.<br>Using <span class="chem">z = invNorm(0.80) ≈ 0.84162</span>, <span class="chem">k = 100 + 15(0.84162) = 112.62 ≈ 113</span> (3 s.f.) <b>[M1 A1]</b>.</p>'
    },
    {
      id: 't4-2-q008',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.12',
      stem: '<p>A normal random variable <span class="chem">X ~ N(μ, σ^2)</span> satisfies <span class="chem">P(X &lt; 26) = P(Z &lt; -1.5)</span> and <span class="chem">P(X &gt; 46) = P(Z &gt; 1.0)</span>, where <span class="chem">Z ~ N(0, 1)</span>. Find the mean <span class="chem">μ</span>.</p>',
      answer: 38,
      tolerance: 0.01,
      sigfigs: '2-3',
      hints: [
        'Use <span class="chem">(x - μ)/σ = z</span> to write two linear equations: <span class="chem">26 - μ = -1.5σ</span> and <span class="chem">46 - μ = 1.0σ</span>.',
        'Subtract the first equation from the second to find <span class="chem">σ</span>, then back-substitute for <span class="chem">μ</span>.'
      ],
      solution: '<p>Standardizing gives <span class="chem">26 - μ = -1.5σ</span> and <span class="chem">46 - μ = 1.0σ</span> <b>[M1 A1]</b>.<br>Subtracting gives <span class="chem">20 = 2.5σ ⇒ σ = 8</span> <b>[A1]</b>.<br>Therefore <span class="chem">μ = 46 - 8 = 38</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-2-q009',
      level: 'sl',
      tier: 'exam',
      type: 'multi',
      marks: 3,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.6, 4.8, 4.9',
      stem: '<p>Select <strong>all</strong> statements that are always true for probability distributions and events.</p>',
      options: [
        'For any normal random variable <span class="chem">X ~ N(μ, σ^2)</span>, the mean, median, and mode are all equal to <span class="chem">μ</span>.',
        'If events <span class="chem">A</span> and <span class="chem">B</span> are independent, then <span class="chem">P(A | B) = P(A)</span>.',
        'For a binomial random variable <span class="chem">X ~ B(n, p)</span> with <span class="chem">0 &lt; p &lt; 1</span>, the variance <span class="chem">Var(X)</span> is strictly less than the mean <span class="chem">E(X)</span>.',
        'For any two events with <span class="chem">P(A) &gt; 0</span> and <span class="chem">P(B) &gt; 0</span>, if <span class="chem">A</span> and <span class="chem">B</span> are mutually exclusive then they are also independent.'
      ],
      answer: [0, 1, 2],
      misconception: {
        3: 'If P(A) > 0 and P(B) > 0, mutually exclusive events have P(A ∩ B) = 0 ≠ P(A)P(B), so they can NEVER be independent!'
      },
      hints: [
        'Check <span class="chem">Var(X) = np(1 - p)</span> vs <span class="chem">E(X) = np</span> for Binomial, and check whether mutually exclusive events can be independent.'
      ],
      solution: '<p>Statements A, B, and C are always true (note that <span class="chem">Var(X) = np(1 - p) &lt; np = E(X)</span> since <span class="chem">0 &lt; 1 - p &lt; 1</span>). Statement D is false because mutually exclusive events with positive probabilities have <span class="chem">P(A ∩ B) = 0 ≠ P(A)P(B)</span>.</p>'
    },
    {
      id: 't4-2-q010',
      level: 'sl',
      tier: 'exam',
      type: 'order',
      marks: 3,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.8, 4.9',
      stem: '<p>Apples have masses <span class="chem">M ~ N(160, 12^2)</span> g. Ten apples are packed at random into a bag. Order the steps required to find the probability that <strong>at least 3</strong> apples in the bag have a mass exceeding <span class="chem">175</span> g.</p>',
      options: [
        'Use <span class="mono">normalcdf(175, 1E99, 160, 12)</span> on <span class="chem">M ~ N(160, 12^2)</span> to find the single-apple probability <span class="chem">p = P(M &gt; 175) ≈ 0.10565</span>.',
        'Define a new discrete random variable <span class="chem">Y ~ B(10, 0.10565)</span> representing the number of apples in the bag of <span class="chem">10</span> with mass over <span class="chem">175</span> g.',
        'Rewrite the discrete inequality <span class="chem">P(Y ≥ 3)</span> in cumulative form as <span class="chem">1 - P(Y ≤ 2)</span>.',
        'Evaluate <span class="chem">1 - binomcdf(10, 0.10565, 2)</span> and round the final probability to 3 significant figures (<span class="chem">0.0803</span>).'
      ],
      answer: [0, 1, 2, 3],
      hints: [
        'First find the probability <span class="chem">p</span> for 1 apple from the Normal distribution, then set up the Binomial model for 10 apples.'
      ],
      solution: '<p>In a Normal-to-Binomial chain, (1) find <span class="chem">p</span> for a single trial via <span class="mono">normalcdf</span> (keeping 5+ s.f.), (2) define <span class="chem">Y ~ B(10, p)</span>, (3) rewrite <span class="chem">P(Y ≥ 3) = 1 - P(Y ≤ 2)</span>, and (4) evaluate via <span class="mono">binomcdf</span>.</p>'
    },
    {
      id: 't4-2-q011',
      level: 'sl',
      tier: 'exam',
      type: 'short',
      marks: 7,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.8, 4.9, 4.11',
      stem: '<p>The masses of coffee bags produced by a roastery are modelled by a normal distribution <span class="chem">M ~ N(254, 5^2)</span> grams.<br>(a) Find the probability that a randomly selected bag has a mass less than <span class="chem">250</span> g. <strong>[2 marks]</strong><br>(b) Given that a bag has a mass less than <span class="chem">254</span> g, find the probability that its mass is between <span class="chem">250</span> g and <span class="chem">254</span> g. <strong>[2 marks]</strong><br>(c) Ten bags are chosen independently at random. Find the probability that <strong>at most 2</strong> of these bags have a mass less than <span class="chem">250</span> g. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">P(M &lt; 250) = 0.212</span> (more precisely <span class="chem">0.21186</span>).<br>(b) <span class="chem">P(250 &lt; M &lt; 254 | M &lt; 254) = (0.5 - 0.21186) / 0.5 = 0.576</span>.<br>(c) Let <span class="chem">Y ~ B(10, 0.21186)</span>; <span class="chem">P(Y ≤ 2) = 0.642</span>.</p>',
      markscheme: [
        'M1: Recognizes normalcdf(-1E99, 250, 254, 5) or z = (250 − 254)/5 = −0.8.',
        'A1: Finds P(M < 250) = 0.212 (0.21186).',
        'M1: Sets up conditional probability P(250 < M < 254) / P(M < 254) = 0.28814 / 0.5.',
        'A1: Evaluates conditional probability as 0.576.',
        'M1: Recognizes Binomial model Y ~ B(10, 0.21186).',
        'M1: Uses binomcdf(10, 0.21186, 2) for P(Y ≤ 2).',
        'A1: Obtains 0.642 (accept 0.641 to 0.642).'
      ],
      solution: '<p>(a) Using GDC <span class="mono">normalcdf(-1E99, 250, 254, 5)</span> gives <span class="chem">p = 0.21186 ≈ 0.212</span>.<br>(b) Since <span class="chem">μ = 254</span>, <span class="chem">P(M &lt; 254) = 0.5</span>. Thus <span class="chem">P(M &gt; 250 | M &lt; 254) = P(250 &lt; M &lt; 254) / 0.5 = (0.5 - 0.21186) / 0.5 = 0.576</span>.<br>(c) Let <span class="chem">Y ~ B(10, 0.21186)</span>. Then <span class="chem">P(Y ≤ 2) = binomcdf(10, 0.21186, 2) ≈ 0.642</span>.</p>'
    },
    {
      id: 't4-2-q012',
      level: 'ahl',
      tier: 'foundation',
      type: 'numeric',
      marks: 2,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 4.14',
      stem: '<p>A random variable <span class="chem">X</span> has expected value <span class="chem">E(X) = 4</span> and variance <span class="chem">Var(X) = 5</span>. Calculate <span class="chem">Var(3X - 7)</span>.</p>',
      answer: 45,
      tolerance: 0.01,
      sigfigs: '2-3',
      hints: [
        'Recall the linear transformation rule for variance: <span class="chem">Var(aX + b) = a^2 Var(X)</span>.',
        'Notice that subtracting <span class="chem">7</span> does not affect the variance.'
      ],
      solution: '<p>Using <span class="chem">Var(aX + b) = a^2 Var(X)</span> with <span class="chem">a = 3, b = -7</span>:<br><span class="chem">Var(3X - 7) = 3^2 × 5 = 9 × 5 = 45</span> <b>[M1 A1]</b>.</p>'
    },
    {
      id: 't4-2-q013',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      marks: 3,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 4.14',
      stem: '<p>A discrete random variable <span class="chem">X</span> satisfies <span class="chem">E(X) = 3</span> and <span class="chem">E(X^2) = 13</span>. Find the standard deviation <span class="chem">σ</span> of <span class="chem">X</span>.</p>',
      answer: 2,
      tolerance: 0.01,
      sigfigs: '1-3',
      hints: [
        'First compute <span class="chem">Var(X) = E(X^2) - [E(X)]^2</span>.',
        'Take the positive square root of <span class="chem">Var(X)</span> to get the standard deviation.'
      ],
      solution: '<p><span class="chem">Var(X) = E(X^2) - [E(X)]^2 = 13 - 3^2 = 4</span> <b>[M1 A1]</b>.<br>Standard deviation <span class="chem">σ = √4 = 2</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-2-q014',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      marks: 5,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 4.13',
      stem: '<p>A courier company ships parcels via three hubs <span class="chem">B_1, B_2, B_3</span> in proportions <span class="chem">0.50, 0.30, 0.20</span> respectively. The probabilities that a parcel is delayed (<span class="chem">D</span>) when routed through <span class="chem">B_1, B_2, B_3</span> are <span class="chem">0.10, 0.20, 0.25</span> respectively. Given that a parcel arrives delayed, find the probability <span class="chem">P(B_3 | D)</span> that it was routed through hub <span class="chem">B_3</span>.</p>',
      answer: 0.3125,
      answerDisplay: '5/16 (or 0.313)',
      tolerance: '1%',
      sigfigs: '3-4',
      hints: [
        'Use the law of total probability to find <span class="chem">P(D) = 0.50(0.10) + 0.30(0.20) + 0.20(0.25)</span>.',
        'By Bayes\' theorem, divide <span class="chem">P(B_3 ∩ D) = 0.20(0.25) = 0.05</span> by <span class="chem">P(D) = 0.16</span>.'
      ],
      solution: '<p>Total probability of delay:<br><span class="chem">P(D) = 0.50(0.10) + 0.30(0.20) + 0.20(0.25) = 0.05 + 0.06 + 0.05 = 0.16</span> <b>[M1 A1]</b>.<br>By Bayes\' theorem:<br><span class="chem">P(B_3 | D) = 0.05 / 0.16 = 5/16 = 0.3125</span> (or <span class="chem">0.313</span> to 3 s.f.) <b>[M1 A2]</b>.</p>'
    },
    {
      id: 't4-2-q015',
      level: 'ahl',
      tier: 'exam',
      type: 'mcq',
      marks: 3,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 4.14',
      stem: '<p>A continuous random variable <span class="chem">X</span> has probability density function <span class="chem">f(x) = (3/14)(x^2 + 1)</span> for <span class="chem">0 ≤ x ≤ 2</span>, and <span class="chem">f(x) = 0</span> otherwise. What is the <strong>mode</strong> of <span class="chem">X</span>?</p>',
      options: [
        '<span class="chem">x = 2</span>',
        '<span class="chem">x = 0</span>',
        '<span class="chem">x = 15/14</span>',
        '<span class="chem">x = 1</span>'
      ],
      answer: 0,
      misconception: {
        1: 'Setting f\'(x) = (6/14)x = 0 gives x = 0, which is the global MINIMUM of f(x) on [0, 2], not the maximum!',
        2: '15/14 is the maximum height f(2), not the x-coordinate where that maximum occurs.',
        3: 'x = 1 is the midpoint of [0, 2], but f(x) is not symmetric—it increases strictly all the way to x = 2.'
      },
      hints: [
        'The mode is the value of <span class="chem">x ∈ [0, 2]</span> where <span class="chem">f(x)</span> reaches its global maximum.',
        'Check whether <span class="chem">f(x) = (3/14)(x^2 + 1)</span> is increasing or decreasing on <span class="chem">[0, 2]</span>.'
      ],
      solution: '<p>On <span class="chem">[0, 2]</span>, <span class="chem">f\'(x) = (3/7)x ≥ 0</span>, so <span class="chem">f(x)</span> is strictly increasing from <span class="chem">f(0) = 3/14</span> to <span class="chem">f(2) = 15/14</span>. Thus <span class="chem">f(x)</span> attains its global maximum at the right endpoint <span class="chem">x = 2</span>.</p>'
    },
    {
      id: 't4-2-q016',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 4.14',
      stem: '<p>A continuous random variable <span class="chem">X</span> has probability density function <span class="chem">f(x) = x / 8</span> for <span class="chem">0 ≤ x ≤ 4</span>, and <span class="chem">f(x) = 0</span> otherwise. Find the <strong>exact</strong> value of the <strong>median</strong> <span class="chem">m</span> of <span class="chem">X</span> (an exact radical such as <span class="mono">sqrt(5)/2</span> can be typed directly).</p>',
      answer: 2.8284271247461903,
      answerDisplay: '2√2',
      tolerance: { abs: 1e-9 },
      hints: [
        'The median <span class="chem">m</span> satisfies <span class="chem">∫_0^m (x / 8) dx = 0.5</span>.',
        'Solve <span class="chem">m^2 / 16 = 0.5</span> for <span class="chem">m &gt; 0</span>.'
      ],
      solution: '<p>Setting the cumulative integral equal to <span class="chem">0.5</span>:<br><span class="chem">∫_0^m (x / 8) dx = [x^2 / 16]_0^m = m^2 / 16 = 0.5</span> <b>[M1 A1]</b>.<br><span class="chem">m^2 = 8 ⇒ m = √8 = 2√2</span> (since <span class="chem">0 ≤ m ≤ 4</span>) <b>[M1 A1]</b>.</p>'
    },
    {
      id: 't4-2-q017',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      marks: 5,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 4.14',
      stem: '<p>A continuous random variable <span class="chem">X</span> has probability density function <span class="chem">f(x) = 3x^2</span> for <span class="chem">0 ≤ x ≤ 1</span>, and <span class="chem">f(x) = 0</span> otherwise. Find the <strong>exact</strong> value of <span class="chem">Var(X)</span> (an exact fraction such as <span class="mono">5/48</span> can be typed directly).</p>',
      answer: 0.0375,
      answerDisplay: '3/80',
      tolerance: { abs: 1e-9 },
      hints: [
        'First compute <span class="chem">E(X) = ∫_0^1 x(3x^2) dx = ∫_0^1 3x^3 dx = 3/4</span>.',
        'Next compute <span class="chem">E(X^2) = ∫_0^1 x^2(3x^2) dx = ∫_0^1 3x^4 dx = 3/5</span>, and use <span class="chem">Var(X) = E(X^2) - [E(X)]^2</span>.'
      ],
      solution: '<p><span class="chem">E(X) = ∫_0^1 3x^3 dx = [3x^4 / 4]_0^1 = 3/4</span> <b>[M1 A1]</b>.<br><span class="chem">E(X^2) = ∫_0^1 3x^4 dx = [3x^5 / 5]_0^1 = 3/5</span> <b>[A1]</b>.<br><span class="chem">Var(X) = 3/5 - (3/4)^2 = 3/5 - 9/16 = 3/80 = 0.0375</span> <b>[M1 A1]</b>.</p>'
    },
    {
      id: 't4-2-q018',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      marks: 7,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 4.14, SL 4.11',
      stem: '<p>A continuous random variable <span class="chem">X</span> has probability density function <span class="chem">f(x) = kx(3 - x)</span> for <span class="chem">0 ≤ x ≤ 3</span>, and <span class="chem">f(x) = 0</span> otherwise.<br>(a) Show that <span class="chem">k = 2/9</span>. <strong>[3 marks]</strong><br>(b) Find the exact conditional probability <span class="chem">P(X &gt; 1 | X &lt; 2)</span>. <strong>[4 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">k ∫_0^3 (3x - x^2) dx = k[3x^2/2 - x^3/3]_0^3 = k(27/2 - 9) = (9/2)k = 1 ⇒ k = 2/9</span>.<br>(b) <span class="chem">P(1 &lt; X &lt; 2) = 13/27</span> and <span class="chem">P(X &lt; 2) = 20/27</span>, so <span class="chem">P(X &gt; 1 | X &lt; 2) = 13/20 = 0.65</span>.</p>',
      markscheme: [
        'M1: Sets up the total probability integral k ∫_0^3 (3x − x²) dx = 1.',
        'A1: Integrates correctly to k [3x²/2 − x³/3]_0^3.',
        'A1: Evaluates k(27/2 − 9) = (9/2)k = 1, so k = 2/9 (AG).',
        'M1: Rewrites P(X > 1 | X < 2) as P(1 < X < 2) / P(X < 2).',
        'A1: Evaluates P(1 < X < 2) = (2/9) ∫_1^2 (3x − x²) dx = 13/27.',
        'A1: Evaluates P(X < 2) = (2/9) ∫_0^2 (3x − x²) dx = 20/27.',
        'A1: Simplifies the ratio to 13/20 (or 0.65).'
      ],
      solution: '<p>(a) Since <span class="chem">∫_0^3 f(x) dx = 1</span>, we have <span class="chem">k [3x^2/2 - x^3/3]_0^3 = k(27/2 - 9) = (9/2)k = 1 ⇒ k = 2/9</span>.<br>(b) By definition of conditional probability, <span class="chem">P(X &gt; 1 | X &lt; 2) = P(1 &lt; X &lt; 2) / P(X &lt; 2)</span>.<br>Now <span class="chem">P(X &lt; 2) = (2/9)[3x^2/2 - x^3/3]_0^2 = (2/9)(6 - 8/3) = 20/27</span>, and <span class="chem">P(X &lt; 1) = (2/9)(3/2 - 1/3) = 7/27</span>, so <span class="chem">P(1 &lt; X &lt; 2) = 20/27 - 7/27 = 13/27</span>.<br>Dividing gives <span class="chem">P(X &gt; 1 | X &lt; 2) = (13/27) / (20/27) = 13/20 = 0.65</span>.</p>'
    },
    {
      id: 't4-2-q019',
      level: 'sl',
      tier: 'foundation',
      type: 'numeric',
      marks: 2,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.5',
      stem: '<p>The probability that a seed germinates is <span class="chem">0.85</span>. A gardener plants <span class="chem">240</span> of these seeds. Find the expected number of seeds that do <strong>not</strong> germinate.</p>',
      answer: 36,
      tolerance: 0,
      hints: [
        'First find the probability that one seed does not germinate: <span class="chem">1 - 0.85</span>.',
        'The expected number of occurrences is <span class="chem">n · P(A)</span>.'
      ],
      solution: '<p><span class="chem">P(not germinate) = 1 - 0.85 = 0.15</span> <b>[M1]</b>.<br>Expected number <span class="chem">= 240 × 0.15 = 36</span> <b>[A1]</b>.</p>'
    }
  ]);
})();
