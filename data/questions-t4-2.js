/* ==========================================================================
   Analysis Lab — questions-t4-2.js
   Question bank for Topic 4.2: Probability, distributions, Bayes and continuous RVs
   (SL 4.5–4.9, 4.11–4.12 + AHL 4.13–4.14)
   60 original questions across SL and AHL (Papers 1, 2 and 3), spanning foundation, exam, and challenge tiers.
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
      marks: 2,
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
      answer: 112.6243185036,
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
        'If events <span class="chem">A</span> and <span class="chem">B</span> are independent and <span class="chem">P(B) &gt; 0</span>, then <span class="chem">P(A | B) = P(A)</span>.',
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
      marks: 2,
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
      exact: true,
      answerInput: 'sqrt(8)',
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
      exact: true,
      answerInput: '3/80',
      hints: [
        'Decode: for a continuous random variable, <span class="chem">Var(X) = E(X^2) - [E(X)]^2</span>, and each expectation is an integral over the domain <span class="chem">0 ≤ x ≤ 1</span>: <span class="chem">E(X) = ∫ x f(x) dx</span> and <span class="chem">E(X^2) = ∫ x^2 f(x) dx</span>. "Exact" means you keep fractions throughout.',
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
      hints: [
        'Decode: (a) is "Show that", so start from the property of every pdf, <span class="chem">∫_0^3 f(x) dx = 1</span>, and work forwards to <span class="chem">k = 2/9</span> without using it. In (b) the condition <span class="chem">X &lt; 2</span> becomes the denominator: <span class="chem">P(X &gt; 1 | X &lt; 2) = P(1 &lt; X &lt; 2) / P(X &lt; 2)</span>.',
        'Expand <span class="chem">kx(3 - x) = k(3x - x^2)</span> before integrating; an antiderivative is <span class="chem">k(3x^2/2 - x^3/3)</span>.',
        'In (b), evaluate <span class="chem">(2/9)[3x^2/2 - x^3/3]</span> from 1 to 2 for the numerator and from 0 to 2 for the denominator. The factor <span class="chem">2/9</span> cancels in the ratio.'
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
    },
    {
      id: 't4-2-q020',
      level: 'sl',
      tier: 'foundation',
      type: 'numeric',
      marks: 2,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.6',
      stem: '<p>The table shows the main after-school activity of <span class="chem">120</span> students in Years 11 and 12.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Robotics</th><th scope="col">Drama</th><th scope="col">None</th><th scope="col">Total</th></tr></thead><tbody><tr><th scope="row">Year 11</th><td class="num">18</td><td class="num">12</td><td class="num">30</td><td class="num">60</td></tr><tr><th scope="row">Year 12</th><td class="num">14</td><td class="num">21</td><td class="num">25</td><td class="num">60</td></tr></tbody></table></div><p>A student is chosen at random. Find the probability that the student does Drama, given that the student is in Year 12.</p>',
      answer: 0.35,
      sigfigs: '2-3',
      hints: [
        'The word "given" restricts you to one row of the table: only the Year 12 students count.',
        'Divide the number of Year 12 Drama students by the total number of Year 12 students.'
      ],
      solution: '<p>Restrict the sample space to the <span class="chem">60</span> Year 12 students <b>[M1]</b>.<br><span class="chem">P(Drama | Year 12) = 21/60 = 7/20 = 0.35</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-2-q021',
      level: 'sl',
      tier: 'exam',
      type: 'short',
      marks: 6,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.6, 4.11',
      stem: '<p>A town council surveys <span class="chem">200</span> adults about whether they live within <span class="chem">5</span> km of their workplace (<span class="chem">W</span>) and whether they cycle to work (<span class="chem">C</span>).</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Cycles (C)</th><th scope="col">Does not cycle (C′)</th><th scope="col">Total</th></tr></thead><tbody><tr><th scope="row">Within 5 km (W)</th><td class="num">48</td><td class="num">72</td><td class="num">120</td></tr><tr><th scope="row">Further than 5 km (W′)</th><td class="num">32</td><td class="num">48</td><td class="num">80</td></tr></tbody></table></div><p>One adult is chosen at random.<br>(a) Write down <span class="chem">P(C)</span>. <strong>[1 mark]</strong><br>(b) Find <span class="chem">P(C | W)</span> and <span class="chem">P(C | W′)</span>. <strong>[2 marks]</strong><br>(c) Hence determine whether the events <span class="chem">C</span> and <span class="chem">W</span> are independent. Justify your answer. <strong>[2 marks]</strong><br>(d) Find <span class="chem">P(W | C)</span>. <strong>[1 mark]</strong></p>',
      answer: '<p>(a) <span class="chem">P(C) = 80/200 = 0.4</span>.<br>(b) <span class="chem">P(C | W) = 48/120 = 0.4</span> and <span class="chem">P(C | W′) = 32/80 = 0.4</span>.<br>(c) <span class="chem">P(C | W) = P(C | W′) = P(C) = 0.4</span>, so knowing whether someone lives within 5 km does not change the probability that they cycle: <span class="chem">C</span> and <span class="chem">W</span> are independent.<br>(d) <span class="chem">P(W | C) = 48/80 = 0.6</span>.</p>',
      markscheme: [
        'A1: (a) P(C) = 80/200 = 0.4.',
        'A1: (b) P(C | W) = 48/120 = 0.4.',
        'A1: (b) P(C | W′) = 32/80 = 0.4.',
        'R1: (c) Compares: P(C | W) = P(C | W′) (= P(C)), or equivalently P(C ∩ W) = 0.24 = P(C)P(W).',
        'A1: (c) Concludes that C and W are independent.',
        'A1: (d) P(W | C) = 48/80 = 0.6.'
      ],
      hints: [
        'Decode: "given W" means use only the W row; "given W′" means use only the W′ row. Independence means the condition makes no difference to the probability.',
        'In (b), divide the cyclists in each row by that row total.',
        'For (c), use the test P(A | B) = P(A | B′) = P(A) for independent events. A conclusion with no comparison earns no marks.'
      ],
      solution: '<p>(a) <span class="chem">80</span> of the <span class="chem">200</span> adults cycle, so <span class="chem">P(C) = 0.4</span>.<br>(b) Within the <span class="chem">W</span> row: <span class="chem">P(C | W) = 48/120 = 0.4</span>. Within the <span class="chem">W′</span> row: <span class="chem">P(C | W′) = 32/80 = 0.4</span>.<br>(c) Since <span class="chem">P(C | W) = P(C | W′) = P(C)</span>, the probability of cycling is the same whether or not the event <span class="chem">W</span> occurs, so <span class="chem">C</span> and <span class="chem">W</span> are independent. (Check: <span class="chem">P(C ∩ W) = 48/200 = 0.24 = 0.4 × 0.6 = P(C)P(W)</span>.)<br>(d) Restrict to the <span class="chem">80</span> cyclists: <span class="chem">P(W | C) = 48/80 = 0.6</span> (which equals <span class="chem">P(W)</span>, as independence predicts).</p>'
    },
    {
      id: 't4-2-q022',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 5,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.6, 4.7',
      stem: '<p>At a charity fair, a player pays <span class="chem">$k</span> to roll two fair six-sided dice. If both dice show <span class="chem">6</span>, the player receives <span class="chem">$36</span>. If the dice show any other double (both dice the same), the player receives <span class="chem">$9</span>. Otherwise the player receives nothing. Find the value of <span class="chem">k</span> for which the game is fair. Give your answer in dollars to 2 decimal places.</p>',
      answer: 2.25,
      dp: 2,
      unit: '$',
      hints: [
        'Decode: a game is fair when the player\'s expected gain is 0, so the price k must equal the expected amount the player receives.',
        'Use a sample-space diagram of the 36 equally likely outcomes: one outcome is (6, 6) and five outcomes are the other doubles.',
        'Expected amount received = 36 × (1/36) + 9 × (5/36).'
      ],
      solution: '<p><b>Decode:</b> "fair" means <span class="chem">E(gain) = 0</span>, so <span class="chem">k = E(amount received)</span>.<br>The sample space has <span class="chem">36</span> equally likely outcomes. <span class="chem">P(6, 6) = 1/36</span> <b>[A1]</b> and <span class="chem">P(other double) = 5/36</span> <b>[A1]</b>.<br><span class="chem">E(received) = 36(1/36) + 9(5/36) + 0(30/36) = 1 + 45/36 = 81/36 = 2.25</span> <b>[M1 A1]</b>.<br>For a fair game <span class="chem">E(received) - k = 0</span>, so <span class="chem">k = $2.25</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-2-q023',
      level: 'sl',
      tier: 'challenge',
      type: 'numeric',
      marks: 6,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.6, 4.7',
      stem: '<p>A bag contains <span class="chem">n</span> red counters and <span class="chem">3</span> blue counters, and it holds more red counters than blue ones. A player pays <span class="chem">$2</span> to draw two counters at random without replacement. If the two counters are the same colour, the player receives <span class="chem">$4</span>; otherwise the player receives nothing. The game is fair. Find <span class="chem">n</span>.</p>',
      answer: 6,
      tolerance: 0,
      hints: [
        'Decode: "fair" means expected gain = 0, which fixes P(same colour). The phrase "more red counters than blue" is a hidden condition you will need at the end.',
        'Fair: 4 × P(same) − 2 = 0, so P(same) = 1/2. Write P(same) = [n(n − 1) + 3 × 2] / [(n + 3)(n + 2)] from a tree diagram without replacement.',
        'You get a quadratic in n with two positive integer roots. Use the condition n &gt; 3 to choose one.'
      ],
      solution: '<p><b>Decode:</b> a fair game has <span class="chem">E(gain) = 0</span>: <span class="chem">4 P(same) - 2 = 0 ⇒ P(same) = 1/2</span> <b>[M1 A1]</b>.<br>Without replacement, <span class="chem">P(same) = (n/(n + 3))((n - 1)/(n + 2)) + (3/(n + 3))(2/(n + 2)) = (n^2 - n + 6)/((n + 3)(n + 2))</span> <b>[M1 A1]</b>.<br>Setting this equal to <span class="chem">1/2</span>: <span class="chem">2n^2 - 2n + 12 = n^2 + 5n + 6 ⇒ n^2 - 7n + 6 = 0 ⇒ (n - 1)(n - 6) = 0</span> <b>[A1]</b>.<br>The bag holds more red than blue, so <span class="chem">n &gt; 3</span> and <span class="chem">n = 6</span> <b>[R1]</b>. (Check: <span class="chem">P(same) = 36/72 = 1/2</span>.)</p>'
    },
    {
      id: 't4-2-q024',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 4.14',
      stem: '<p>The number of goals <span class="chem">X</span> scored by a hockey team in a match has the probability distribution below.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"><span class="chem">x</span></th><th scope="col">0</th><th scope="col">1</th><th scope="col">2</th><th scope="col">3</th></tr></thead><tbody><tr><th scope="row"><span class="chem">P(X = x)</span></th><td class="num">0.2</td><td class="num">0.3</td><td class="num">0.4</td><td class="num">0.1</td></tr></tbody></table></div><p>Find <span class="chem">Var(X)</span>.</p>',
      answer: 0.84,
      sigfigs: '2-3',
      hints: [
        'First find <span class="chem">E(X) = Σ x P(X = x)</span>.',
        'Then find <span class="chem">E(X^2) = Σ x^2 P(X = x)</span> and use <span class="chem">Var(X) = E(X^2) - [E(X)]^2</span>.'
      ],
      solution: '<p><span class="chem">E(X) = 0(0.2) + 1(0.3) + 2(0.4) + 3(0.1) = 1.4</span> <b>[A1]</b>.<br><span class="chem">E(X^2) = 0(0.2) + 1(0.3) + 4(0.4) + 9(0.1) = 2.8</span> <b>[M1 A1]</b>.<br><span class="chem">Var(X) = 2.8 - 1.4^2 = 2.8 - 1.96 = 0.84</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-2-q025',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      marks: 6,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 4.14',
      stem: '<p>The daily maximum temperature <span class="chem">C</span> (°C) in a city in June has mean <span class="chem">18</span> and variance <span class="chem">6.25</span>. The temperature in °F is <span class="chem">F = 1.8C + 32</span>.<br>(a) Find <span class="chem">E(F)</span>. <strong>[2 marks]</strong><br>(b) Find the standard deviation of <span class="chem">F</span>. <strong>[2 marks]</strong><br>An ice-cream seller models her daily profit, in dollars, as <span class="chem">P = 40F - 1500</span>.<br>(c) Find the mean and the standard deviation of <span class="chem">P</span>. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">E(F) = 1.8(18) + 32 = 64.4</span> °F.<br>(b) <span class="chem">SD(C) = sqrt(6.25) = 2.5</span>, so <span class="chem">SD(F) = 1.8 × 2.5 = 4.5</span> °F.<br>(c) <span class="chem">E(P) = 40(64.4) - 1500 = $1076</span>; <span class="chem">SD(P) = 40 × 4.5 = $180</span>.</p>',
      markscheme: [
        'M1: (a) Uses E(aC + b) = aE(C) + b.',
        'A1: (a) E(F) = 64.4.',
        'M1: (b) Uses Var(F) = 1.8² Var(C) = 20.25, or SD(F) = |1.8| SD(C) with SD(C) = 2.5.',
        'A1: (b) SD(F) = 4.5.',
        'A1: (c) E(P) = 40(64.4) − 1500 = 1076.',
        'A1: (c) SD(P) = 40 × 4.5 = 180.'
      ],
      hints: [
        'Decode: these are linear transformations aX + b. Adding a constant shifts the mean only; multiplying by a scales the mean by a and the variance by a².',
        'The variance of C is given, not its standard deviation: SD(C) = √6.25.',
        'For (c), apply the same rules to P = 40F − 1500 using your answers to (a) and (b).'
      ],
      solution: '<p>(a) <span class="chem">E(F) = 1.8 E(C) + 32 = 1.8(18) + 32 = 64.4</span>.<br>(b) <span class="chem">Var(F) = 1.8^2 Var(C) = 3.24 × 6.25 = 20.25</span>, so <span class="chem">SD(F) = 4.5</span>. The <span class="chem">+32</span> does not affect the spread.<br>(c) <span class="chem">E(P) = 40 E(F) - 1500 = 2576 - 1500 = 1076</span> dollars and <span class="chem">SD(P) = 40 SD(F) = 180</span> dollars.</p>'
    },
    {
      id: 't4-2-q026',
      level: 'ahl',
      tier: 'foundation',
      type: 'numeric',
      marks: 3,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 4.14, SL 4.7',
      stem: '<p>A discrete random variable <span class="chem">X</span> takes the values <span class="chem">1, 2, 3</span> with probabilities <span class="chem">0.5, 0.3, 0.2</span> respectively. Find <span class="chem">E(5 - 2X)</span>.</p>',
      answer: 1.6,
      sigfigs: '2-3',
      hints: [
        'Find <span class="chem">E(X)</span> first.',
        'Then use <span class="chem">E(aX + b) = aE(X) + b</span> with <span class="chem">a = -2</span> and <span class="chem">b = 5</span>.'
      ],
      solution: '<p><span class="chem">E(X) = 1(0.5) + 2(0.3) + 3(0.2) = 1.7</span> <b>[M1 A1]</b>.<br><span class="chem">E(5 - 2X) = 5 - 2(1.7) = 1.6</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-2-q027',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.6, 4.11',
      stem: '<p>Events <span class="chem">A</span> and <span class="chem">B</span> satisfy <span class="chem">P(A) = 0.5</span>, <span class="chem">P(B) = 0.4</span> and <span class="chem">P(A ∪ B) = 0.8</span>. Find the exact value of <span class="chem">P(A | B′)</span>.</p>',
      answer: 0.6666666666666666,
      answerDisplay: '2/3',
      exact: true,
      answerInput: '2/3',
      hints: [
        'Use the addition rule to find <span class="chem">P(A ∩ B)</span>.',
        'A Venn diagram helps: <span class="chem">P(A ∩ B′) = P(A) - P(A ∩ B)</span>, and <span class="chem">P(B′) = 1 - P(B)</span>.'
      ],
      solution: '<p><span class="chem">P(A ∩ B) = 0.5 + 0.4 - 0.8 = 0.1</span> <b>[A1]</b>.<br><span class="chem">P(A ∩ B′) = 0.5 - 0.1 = 0.4</span> <b>[A1]</b>.<br><span class="chem">P(A | B′) = P(A ∩ B′)/P(B′) = 0.4/0.6 = 2/3</span> <b>[M1 A1]</b>.</p>'
    },
    {
      id: 't4-2-q028',
      level: 'sl',
      tier: 'challenge',
      type: 'short',
      marks: 7,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.6, 4.11',
      stem: '<p>An insurance study reports that <span class="chem">18%</span> of drivers who use a phone while driving have had a minor accident in the last year, and that <span class="chem">18%</span> of drivers who do not use a phone while driving have also had a minor accident. Of all drivers, <span class="chem">40%</span> use a phone while driving. Let <span class="chem">A</span> be the event "has had a minor accident" and <span class="chem">B</span> the event "uses a phone while driving".<br>(a) Write down <span class="chem">P(A)</span>. <strong>[1 mark]</strong><br>(b) Prove that, for any events with <span class="chem">0 &lt; P(B) &lt; 1</span>, if <span class="chem">P(A | B) = P(A | B′)</span> then <span class="chem">A</span> and <span class="chem">B</span> are independent. <strong>[4 marks]</strong><br>(c) Write down <span class="chem">P(B | A)</span>, giving a reason. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">P(A) = 0.4(0.18) + 0.6(0.18) = 0.18</span>.<br>(b) Let <span class="chem">P(A | B) = P(A | B′) = p</span>. By total probability, <span class="chem">P(A) = P(A | B)P(B) + P(A | B′)P(B′) = p(P(B) + P(B′)) = p</span>. Then <span class="chem">P(A ∩ B) = P(A | B)P(B) = pP(B) = P(A)P(B)</span>, so <span class="chem">A</span> and <span class="chem">B</span> are independent.<br>(c) By (b), <span class="chem">A</span> and <span class="chem">B</span> are independent, so <span class="chem">P(B | A) = P(B) = 0.4</span>.</p>',
      markscheme: [
        'A1: (a) P(A) = 0.18.',
        'M1: (b) Uses the law of total probability P(A) = P(A | B)P(B) + P(A | B′)P(B′).',
        'A1: (b) Factorises using P(A | B) = P(A | B′) = p to get P(A) = p(P(B) + P(B′)) = p.',
        'M1: (b) Uses P(A ∩ B) = P(A | B)P(B).',
        'R1: (b) Concludes P(A ∩ B) = P(A)P(B), hence A and B are independent.',
        'R1: (c) Reason: A and B are independent (from (b)), so conditioning on A does not change P(B).',
        'A1: (c) P(B | A) = 0.4.'
      ],
      hints: [
        'Decode: the wordy percentages are P(A | B) = 0.18 and P(A | B′) = 0.18. The question is really the independence test P(A | B) = P(A | B′), first in numbers and then as a general proof.',
        'For (a), use a tree: P(A) = P(B)P(A | B) + P(B′)P(A | B′).',
        'For (b), call the common value p and show P(A) = p. Then compare P(A ∩ B) with P(A)P(B).',
        'For (c), independence works both ways.'
      ],
      solution: '<p><b>Decode:</b> "18% of drivers who use a phone" is the conditional probability <span class="chem">P(A | B) = 0.18</span>; likewise <span class="chem">P(A | B′) = 0.18</span>. Equal conditional probabilities are the SL 4.11 test for independence.<br>(a) <span class="chem">P(A) = 0.4(0.18) + 0.6(0.18) = 0.18</span>.<br>(b) Let <span class="chem">p = P(A | B) = P(A | B′)</span>. Since <span class="chem">B</span> and <span class="chem">B′</span> partition the sample space, <span class="chem">P(A) = P(A | B)P(B) + P(A | B′)P(B′) = p[P(B) + P(B′)] = p</span>. Hence <span class="chem">P(A ∩ B) = P(A | B)P(B) = pP(B) = P(A)P(B)</span>, which is the definition of independence.<br>(c) The events are independent, so <span class="chem">P(B | A) = P(B) = 0.4</span>. Check: <span class="chem">P(B | A) = 0.072/0.18 = 0.4</span>.</p>'
    },
    {
      id: 't4-2-q029',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 3,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.9',
      stem: '<p>The volume of juice <span class="chem">V</span> ml in a carton is normally distributed with mean <span class="chem">250</span> ml. It is known that <span class="chem">P(V &gt; 262) = 0.15</span>. Find <span class="chem">P(238 &lt; V &lt; 262)</span>.</p>',
      answer: 0.7,
      sigfigs: '1-3',
      hints: [
        'The normal curve is symmetric about the mean. How far are 238 and 262 from 250?',
        'By symmetry <span class="chem">P(V &lt; 238) = P(V &gt; 262)</span>. Subtract both tails from 1.'
      ],
      solution: '<p><span class="chem">238</span> and <span class="chem">262</span> are both <span class="chem">12</span> ml from the mean, so by symmetry <span class="chem">P(V &lt; 238) = P(V &gt; 262) = 0.15</span> <b>[R1 A1]</b>.<br><span class="chem">P(238 &lt; V &lt; 262) = 1 - 2(0.15) = 0.7</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-2-q030',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.8',
      stem: '<p>A spinner lands on red with probability <span class="chem">1/4</span> on each spin, independently. It is spun <span class="chem">4</span> times. Find the exact probability that it lands on red <strong>at least 3</strong> times.</p>',
      answer: 0.05078125,
      answerDisplay: '13/256',
      exact: true,
      answerInput: '13/256',
      hints: [
        'Let <span class="chem">X ~ B(4, 1/4)</span>. "At least 3" means <span class="chem">X = 3</span> or <span class="chem">X = 4</span>.',
        '<span class="chem">P(X = 3) = ⁴C₃ (1/4)^3 (3/4)</span> and <span class="chem">P(X = 4) = (1/4)^4</span>.'
      ],
      solution: '<p>Let <span class="chem">X ~ B(4, 1/4)</span>. <span class="chem">P(X ≥ 3) = P(X = 3) + P(X = 4)</span> <b>[M1]</b>.<br><span class="chem">P(X = 3) = 4 × (1/64) × (3/4) = 12/256</span> <b>[A1]</b>, <span class="chem">P(X = 4) = 1/256</span> <b>[A1]</b>.<br><span class="chem">P(X ≥ 3) = 13/256</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-2-q031',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      marks: 6,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 4.13',
      stem: '<p>Maya travels to school by bus, by bicycle or on foot with probabilities <span class="chem">1/2</span>, <span class="chem">1/3</span> and <span class="chem">1/6</span> respectively. She is late with probability <span class="chem">1/5</span> if she takes the bus, <span class="chem">1/10</span> if she cycles and <span class="chem">1/4</span> if she walks. One morning Maya arrives <strong>on time</strong>. Find the exact probability that she cycled that morning.</p>',
      answer: 0.36363636363636365,
      answerDisplay: '4/11',
      exact: true,
      answerInput: '4/11',
      hints: [
        'Decode: you know the result (on time) and want the cause (cycled): this is Bayes\' theorem with three partitioning events. The trap is that the given conditional probabilities are for being LATE, so use their complements.',
        'P(on time | bus) = 4/5, P(on time | cycle) = 9/10, P(on time | walk) = 3/4.',
        'P(on time) = (1/2)(4/5) + (1/3)(9/10) + (1/6)(3/4). Then divide the cycling branch by this total.'
      ],
      solution: '<p><b>Decode:</b> reversing the condition from "on time" back to the mode of travel is Bayes\' theorem with the partition {bus, cycle, walk}; first convert each "late" probability to "on time".<br><span class="chem">P(T | bus) = 4/5, P(T | cycle) = 9/10, P(T | walk) = 3/4</span> <b>[A1]</b>.<br><span class="chem">P(T) = (1/2)(4/5) + (1/3)(9/10) + (1/6)(3/4) = 2/5 + 3/10 + 1/8 = 33/40</span> <b>[M1 A1]</b>.<br><span class="chem">P(cycle ∩ T) = (1/3)(9/10) = 3/10 = 12/40</span> <b>[A1]</b>.<br><span class="chem">P(cycle | T) = (12/40)/(33/40) = 12/33 = 4/11</span> <b>[M1 A1]</b>.</p>'
    },
    {
      id: 't4-2-q032',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      marks: 8,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 4.14',
      stem: '<p>A continuous random variable <span class="chem">X</span> has probability density function<br><span class="chem">f(x) = kx</span> for <span class="chem">0 ≤ x ≤ 2</span>,<br><span class="chem">f(x) = k(6 - x)/2</span> for <span class="chem">2 &lt; x ≤ 6</span>,<br>and <span class="chem">f(x) = 0</span> otherwise, where <span class="chem">k</span> is a positive constant.<br>(a) Show that <span class="chem">k = 1/6</span>. <strong>[2 marks]</strong><br>(b) Write down the mode of <span class="chem">X</span>. <strong>[1 mark]</strong><br>(c) Find <span class="chem">P(X &lt; 2)</span>. <strong>[1 mark]</strong><br>(d) Find the exact value of the median of <span class="chem">X</span>. <strong>[4 marks]</strong></p>',
      answer: '<p>(a) The graph is a triangle with base <span class="chem">6</span> and height <span class="chem">f(2) = 2k</span>, so its area is <span class="chem">(1/2)(6)(2k) = 6k = 1</span>, giving <span class="chem">k = 1/6</span>.<br>(b) Mode <span class="chem">= 2</span>.<br>(c) <span class="chem">P(X &lt; 2) = (1/2)(2)(1/3) = 1/3</span>.<br>(d) Since <span class="chem">1/3 &lt; 1/2</span>, the median <span class="chem">m</span> lies in <span class="chem">(2, 6]</span>. <span class="chem">P(X &gt; m) = (1/2)(6 - m)(6 - m)/12 = (6 - m)^2/24 = 1/2</span>, so <span class="chem">(6 - m)^2 = 12</span> and <span class="chem">m = 6 - 2sqrt(3)</span> (about 2.54).</p>',
      markscheme: [
        'M1: (a) Sets total area (or the sum of two integrals) equal to 1, e.g. (1/2)(6)(2k) = 1.',
        'A1: (a) Obtains 6k = 1, so k = 1/6 (AG).',
        'A1: (b) Mode = 2.',
        'A1: (c) P(X < 2) = 1/3.',
        'R1: (d) Recognises the median lies in 2 < x ≤ 6 because P(X < 2) = 1/3 < 1/2.',
        'M1: (d) Sets up an equation for m, e.g. ∫_m^6 (6 − x)/12 dx = 1/2 or 1/3 + ∫_2^m (6 − x)/12 dx = 1/2.',
        'A1: (d) Obtains (6 − m)² = 12 (or an equivalent quadratic m² − 12m + 24 = 0).',
        'A1: (d) m = 6 − 2√3, rejecting 6 + 2√3 as outside the domain.'
      ],
      hints: [
        'Sketch f: it rises linearly from (0, 0) to (2, 2k) and falls to (6, 0). The total area is a triangle.',
        'For the median, first decide which piece it lies in by comparing P(X &lt; 2) with 0.5.',
        'The area to the right of m is a smaller triangle with base 6 − m and height (6 − m)/12.'
      ],
      solution: '<p>(a) Total area = triangle with base <span class="chem">6</span> and height <span class="chem">2k</span>: <span class="chem">6k = 1 ⇒ k = 1/6</span>.<br>(b) <span class="chem">f</span> is greatest at the apex, so the mode is <span class="chem">2</span>.<br>(c) <span class="chem">P(X &lt; 2) = (1/2)(2)(2/6) = 1/3</span>.<br>(d) <span class="chem">P(X &lt; 2) = 1/3 &lt; 1/2</span>, so <span class="chem">m &gt; 2</span>. The right-hand tail is a triangle with base <span class="chem">6 - m</span> and height <span class="chem">f(m) = (6 - m)/12</span>: <span class="chem">(1/2)(6 - m)^2/12 = 1/2 ⇒ (6 - m)^2 = 12 ⇒ 6 - m = ±2sqrt(3)</span>. Since <span class="chem">2 &lt; m ≤ 6</span>, <span class="chem">m = 6 - 2sqrt(3) ≈ 2.54</span>.</p>'
    },
    {
      id: 't4-2-q033',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      marks: 6,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'AHL 4.14',
      stem: '<p>The lifetime <span class="chem">T</span> years of a battery is between <span class="chem">1</span> and <span class="chem">3</span> years, and its probability density function is proportional to <span class="chem">1/t^2</span> on that interval (and zero elsewhere). A replacement policy costs the shop <span class="chem">2T + 1</span> hundred dollars per battery. Find the exact expected cost per battery, in hundreds of dollars.</p>',
      answer: 4.295836866004329,
      answerDisplay: '3 ln 3 + 1',
      exact: true,
      answerInput: '3*ln(3)+1',
      hints: [
        'Decode: "proportional to 1/t²" means f(t) = k/t² for 1 ≤ t ≤ 3, with k unknown. "Expected cost" is E(2T + 1), a linear transformation of T.',
        'Find k from ∫₁³ k/t² dt = 1.',
        'Then E(T) = ∫₁³ t · k/t² dt = k ln 3, and E(2T + 1) = 2E(T) + 1.'
      ],
      solution: '<p><b>Decode:</b> write <span class="chem">f(t) = k/t^2</span> on <span class="chem">[1, 3]</span>; the question asks for <span class="chem">E(2T + 1)</span>.<br><span class="chem">∫_1^3 k t^{-2} dt = k[-1/t]_1^3 = k(1 - 1/3) = 2k/3 = 1 ⇒ k = 3/2</span> <b>[M1 A1]</b>.<br><span class="chem">E(T) = ∫_1^3 t (3/2) t^{-2} dt = (3/2)[ln t]_1^3 = (3/2) ln 3</span> <b>[M1 A1]</b>.<br><span class="chem">E(2T + 1) = 2E(T) + 1 = 3 ln 3 + 1</span> (about <span class="chem">4.30</span> hundred dollars) <b>[M1 A1]</b>.</p>'
    },
    {
      id: 't4-2-q034',
      level: 'sl',
      tier: 'foundation',
      type: 'numeric',
      marks: 2,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.5',
      stem: '<p>A spinner is spun <span class="chem">250</span> times and lands on blue <span class="chem">60</span> times. Using the relative frequency as an estimate of the probability of blue, find the expected number of times the spinner lands on blue in a further <span class="chem">175</span> spins.</p>',
      answer: 42,
      tolerance: 0,
      hints: [
        'Relative frequency = number of times blue / number of spins.',
        'Expected number of occurrences = n × P(blue).'
      ],
      solution: '<p>Estimated <span class="chem">P(blue) = 60/250 = 0.24</span> <b>[A1]</b>.<br>Expected number <span class="chem">= 175 × 0.24 = 42</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-2-q035',
      level: 'sl',
      tier: 'exam',
      type: 'short',
      marks: 7,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.6, 4.11',
      stem: '<p>A box contains <span class="chem">5</span> red pens and <span class="chem">3</span> green pens. Two pens are taken at random, one after the other, without replacement.<br>(a) Show that the probability that both pens are the same colour is <span class="chem">13/28</span>. <strong>[3 marks]</strong><br>(b) Given that both pens are the same colour, find the probability that both are red. <strong>[2 marks]</strong><br>(c) Given that at least one pen is green, find the probability that both are green. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">P(RR) = (5/8)(4/7) = 20/56</span>, <span class="chem">P(GG) = (3/8)(2/7) = 6/56</span>; sum <span class="chem">26/56 = 13/28</span>.<br>(b) <span class="chem">P(RR | same) = (20/56)/(26/56) = 10/13</span>.<br>(c) <span class="chem">P(at least one G) = 1 - 20/56 = 36/56</span>, so <span class="chem">P(GG | at least one G) = 6/36 = 1/6</span>.</p>',
      markscheme: [
        'M1: (a) Multiplies along branches without replacement, e.g. (5/8)(4/7) or (3/8)(2/7).',
        'A1: (a) P(RR) = 20/56 and P(GG) = 6/56.',
        'A1: (a) Adds to 26/56 = 13/28 (AG).',
        'M1: (b) Uses P(RR ∩ same)/P(same) with P(RR ∩ same) = P(RR).',
        'A1: (b) 10/13.',
        'M1: (c) Finds P(at least one green) = 1 − 20/56 = 36/56 and divides P(GG) by it.',
        'A1: (c) 1/6.'
      ],
      hints: [
        'Draw a tree. On the second draw there are only 7 pens left.',
        'In (b), "both red" is already inside "same colour", so the intersection is just P(RR).',
        'In (c), "at least one green" is the complement of "both red".'
      ],
      solution: '<p>(a) <span class="chem">P(RR) = (5/8)(4/7) = 20/56</span> and <span class="chem">P(GG) = (3/8)(2/7) = 6/56</span>, so <span class="chem">P(same) = 26/56 = 13/28</span>.<br>(b) <span class="chem">P(RR | same) = P(RR)/P(same) = 20/26 = 10/13</span>.<br>(c) <span class="chem">P(at least one G) = 1 - P(RR) = 36/56</span>. Both green is inside this event, so <span class="chem">P(GG | at least one G) = (6/56)/(36/56) = 1/6</span>.</p>'
    },
    {
      id: 't4-2-q036',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 2,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.9',
      stem: '<p>The lengths <span class="chem">L</span> cm of cucumbers from a farm are normally distributed with mean <span class="chem">32.4</span> cm and standard deviation <span class="chem">1.8</span> cm. Find the probability that a randomly chosen cucumber has a length between <span class="chem">30</span> cm and <span class="chem">35</span> cm.</p>',
      answer: 0.8344817820,
      sigfigs: 3,
      hints: [
        'Write the probability as <span class="chem">P(30 &lt; L &lt; 35)</span> with <span class="chem">L ~ N(32.4, 1.8^2)</span>.',
        'Use the normal cdf on your GDC with lower bound 30, upper bound 35, μ = 32.4 and σ = 1.8.'
      ],
      solution: '<p><span class="chem">P(30 &lt; L &lt; 35)</span> with <span class="chem">L ~ N(32.4, 1.8^2)</span> <b>[M1]</b>.<br>GDC (normal cdf, lower 30, upper 35, μ = 32.4, σ = 1.8): <span class="chem">0.834482… ≈ 0.834</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-2-q037',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.12',
      stem: '<p>A machine fills bottles with water. The volume in a bottle is normally distributed with mean <span class="chem">500</span> ml. Records show that <span class="chem">8%</span> of bottles contain less than <span class="chem">490</span> ml. Find the standard deviation of the volume.</p>',
      answer: 7.1170752312,
      sigfigs: 3,
      unit: 'ml',
      hints: [
        'Decode: σ is unknown, so you cannot use the inverse normal with the original distribution. Standardise instead.',
        'Find z with <span class="chem">P(Z &lt; z) = 0.08</span> from the inverse normal on <span class="chem">N(0, 1)</span>.',
        'Solve <span class="chem">(490 - 500)/σ = z</span> for σ.'
      ],
      solution: '<p><span class="chem">P(V &lt; 490) = 0.08 ⇒ P(Z &lt; (490 - 500)/σ) = 0.08</span> <b>[M1]</b>.<br>Inverse normal: <span class="chem">z = -1.40507…</span> <b>[A1]</b>.<br><span class="chem">-10/σ = -1.40507 ⇒ σ = 10/1.40507</span> <b>[M1]</b> <span class="chem">= 7.117… ≈ 7.12</span> ml <b>[A1]</b>.</p>'
    },
    {
      id: 't4-2-q038',
      level: 'sl',
      tier: 'exam',
      type: 'short',
      marks: 7,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.9, 4.12',
      stem: '<p>The time <span class="chem">T</span> seconds that a robot arm takes to complete a task is normally distributed with mean <span class="chem">μ</span> and standard deviation <span class="chem">σ</span>. On <span class="chem">15%</span> of occasions it takes less than <span class="chem">12.0</span> s, and on <span class="chem">10%</span> of occasions it takes more than <span class="chem">14.5</span> s.<br>(a) Write down two equations in <span class="chem">μ</span> and <span class="chem">σ</span>. <strong>[2 marks]</strong><br>(b) Find the value of <span class="chem">μ</span> and the value of <span class="chem">σ</span>. <strong>[3 marks]</strong><br>(c) Find <span class="chem">P(T &lt; 13)</span>. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">(12 - μ)/σ = -1.03643</span> and <span class="chem">(14.5 - μ)/σ = 1.28155</span>.<br>(b) <span class="chem">σ = 1.07852… ≈ 1.08</span> s and <span class="chem">μ = 13.1178… ≈ 13.1</span> s.<br>(c) <span class="chem">P(T &lt; 13) = 0.457</span> (0.456506…).</p>',
      markscheme: [
        'A1: (a) (12 − μ)/σ = −1.03643 (from the inverse normal of 0.15).',
        'A1: (a) (14.5 − μ)/σ = 1.28155 (from the inverse normal of 0.90).',
        'M1: (b) Solves the two linear equations simultaneously, e.g. 2.5 = (1.28155 + 1.03643)σ.',
        'A1: (b) σ = 1.08 (1.07852…).',
        'A1: (b) μ = 13.1 (13.1178…).',
        'M1: (c) Uses the normal cdf with the unrounded μ and σ.',
        'A1: (c) P(T < 13) = 0.457 (0.456506…).'
      ],
      hints: [
        'Decode: both μ and σ are unknown, so turn each percentage into a z-score on N(0, 1) and form two equations of the form (x − μ)/σ = z.',
        '"More than 14.5 s on 10% of occasions" means P(T &lt; 14.5) = 0.90.',
        'Subtract one equation from the other to eliminate μ. Keep full GDC precision for part (c).'
      ],
      solution: '<p>(a) <span class="chem">P(Z &lt; z_1) = 0.15 ⇒ z_1 = -1.036433</span> and <span class="chem">P(Z &lt; z_2) = 0.90 ⇒ z_2 = 1.281552</span>, so <span class="chem">12 - μ = -1.036433σ</span> and <span class="chem">14.5 - μ = 1.281552σ</span>.<br>(b) Subtracting: <span class="chem">2.5 = 2.317985σ ⇒ σ = 1.078523</span>, then <span class="chem">μ = 12 + 1.036433(1.078523) = 13.117817</span>. So <span class="chem">μ ≈ 13.1</span> s, <span class="chem">σ ≈ 1.08</span> s.<br>(c) Normal cdf with upper bound 13: <span class="chem">P(T &lt; 13) = 0.456506 ≈ 0.457</span>. (Using the rounded values 13.1 and 1.08 gives 0.463, which loses the final mark.)</p>'
    },
    {
      id: 't4-2-q039',
      level: 'sl',
      tier: 'challenge',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.12',
      stem: '<p>Bags of rice are labelled "<span class="chem">250</span> g". The filling machine produces masses that are normally distributed with a <strong>variance</strong> of <span class="chem">16</span> g², and its mean setting <span class="chem">μ</span> can be adjusted. A consumer rule says that no more than <span class="chem">2%</span> of bags may weigh less than the labelled mass. Find the smallest value of <span class="chem">μ</span> that satisfies the rule.</p>',
      answer: 258.2149956425,
      sigfigs: 3,
      unit: 'g',
      hints: [
        'Decode: the unknown is the mean. Two hidden details: the variance is given (so σ = 4, not 16), and "no more than 2%" means P(M &lt; 250) ≤ 0.02.',
        'Standardise: P(Z &lt; (250 − μ)/4) = 0.02 gives the boundary value of μ.',
        'Inverse normal of 0.02 on N(0, 1) is about −2.0537. A larger μ makes the underweight tail smaller.'
      ],
      solution: '<p><b>Decode:</b> <span class="chem">σ = sqrt(16) = 4</span>, and we need <span class="chem">P(M &lt; 250) ≤ 0.02</span> with <span class="chem">μ</span> unknown <b>[M1]</b>.<br>Boundary case: <span class="chem">(250 - μ)/4 = z</span> where <span class="chem">P(Z &lt; z) = 0.02 ⇒ z = -2.053749</span> <b>[A1]</b>.<br><span class="chem">μ = 250 + 4(2.053749) = 258.215</span> <b>[M1]</b>.<br>Increasing <span class="chem">μ</span> shrinks the tail below 250 g, so the smallest mean is <span class="chem">μ ≈ 258</span> g (258.21…) <b>[A1]</b>.<br>Note: 258 is the 3 s.f. answer the markscheme expects, but a machine actually set to exactly 258 g would give <span class="chem">P(M &lt; 250) = 0.0228</span>, just over 2%. In practice the setting must be rounded up (for example to 258.3 g).</p>'
    },
    {
      id: 't4-2-q040',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 3,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.8',
      stem: '<p>For a certain variety of sweet pea, <span class="chem">15%</span> of seeds produce white flowers, independently of each other. A gardener plants <span class="chem">20</span> seeds and all of them flower. Find the probability that at least <span class="chem">2</span> but no more than <span class="chem">5</span> of the plants have white flowers.</p>',
      answer: 0.7571341497,
      sigfigs: 3,
      hints: [
        'Let <span class="chem">X ~ B(20, 0.15)</span>. "At least 2 but no more than 5" is <span class="chem">2 ≤ X ≤ 5</span>.',
        'With a cumulative binomial: <span class="chem">P(X ≤ 5) - P(X ≤ 1)</span>.'
      ],
      solution: '<p><span class="chem">X ~ B(20, 0.15)</span> <b>[M1]</b>.<br><span class="chem">P(2 ≤ X ≤ 5) = P(X ≤ 5) - P(X ≤ 1) = 0.932692 - 0.175558</span> <b>[M1]</b> <span class="chem">= 0.757134 ≈ 0.757</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-2-q041',
      level: 'sl',
      tier: 'exam',
      type: 'short',
      marks: 7,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.8',
      stem: '<p>A quiz has <span class="chem">12</span> multiple-choice questions, each with <span class="chem">4</span> options of which exactly one is correct. Sam guesses every answer at random. Let <span class="chem">X</span> be the number of questions Sam answers correctly.<br>(a) Write down <span class="chem">E(X)</span>. <strong>[1 mark]</strong><br>(b) Find <span class="chem">P(X = 3)</span>. <strong>[2 marks]</strong><br>(c) The pass mark is <span class="chem">6</span>. Find the probability that Sam passes. <strong>[2 marks]</strong><br>(d) Find the probability that Sam scores more than his expected score. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">E(X) = 12 × 0.25 = 3</span>.<br>(b) <span class="chem">P(X = 3) = 0.258</span> (0.258104…).<br>(c) <span class="chem">P(X ≥ 6) = 1 - P(X ≤ 5) = 0.0544</span> (0.054402…).<br>(d) <span class="chem">P(X &gt; 3) = 1 - P(X ≤ 3) = 0.351</span> (0.351221…).</p>',
      markscheme: [
        'A1: (a) E(X) = 3.',
        'M1: (b) Recognises X ~ B(12, 0.25) and uses the binomial pdf.',
        'A1: (b) 0.258.',
        'M1: (c) Writes P(X ≥ 6) = 1 − P(X ≤ 5).',
        'A1: (c) 0.0544.',
        'M1: (d) Writes P(X > 3) = 1 − P(X ≤ 3) (not 1 − P(X ≤ 4)).',
        'A1: (d) 0.351.'
      ],
      hints: [
        'Each question is an independent trial with p = 1/4, so X ~ B(12, 0.25).',
        'For "at least 6", the cumulative function gives P(X ≤ 5); subtract it from 1.',
        '"More than his expected score" means X &gt; 3, that is X ≥ 4.'
      ],
      solution: '<p>(a) <span class="chem">E(X) = np = 12(0.25) = 3</span>.<br>(b) Binomial pdf: <span class="chem">P(X = 3) = ¹²C₃ (0.25)^3 (0.75)^9 = 0.258104 ≈ 0.258</span>.<br>(c) <span class="chem">P(X ≥ 6) = 1 - P(X ≤ 5) = 1 - 0.945598 = 0.0544</span>.<br>(d) <span class="chem">P(X &gt; 3) = 1 - P(X ≤ 3) = 1 - 0.648779 = 0.351</span>.</p>'
    },
    {
      id: 't4-2-q042',
      level: 'sl',
      tier: 'challenge',
      type: 'numeric',
      marks: 5,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.8',
      stem: '<p>Each component made on a production line has a <span class="chem">12%</span> chance of having a flaw, independently of the others. An inspector wants to pick a sample large enough that the probability of finding <strong>at least two</strong> flawed components is greater than <span class="chem">0.9</span>. Find the smallest sample size that achieves this.</p>',
      answer: 31,
      tolerance: 0,
      hints: [
        'Decode: the unknown is n in X ~ B(n, 0.12), and "at least two" means P(X ≥ 2) = 1 − P(X = 0) − P(X = 1). Unlike "at least one", this does not reduce to a single logarithm.',
        'Write 1 − 0.88ⁿ − 0.12n(0.88)ⁿ⁻¹ &gt; 0.9 and use a GDC table (or graph) of this expression against n.',
        'Check the two neighbouring values of n either side of 0.9 and give the first one that exceeds it.'
      ],
      solution: '<p><b>Decode:</b> find the least <span class="chem">n</span> with <span class="chem">P(X ≥ 2) &gt; 0.9</span> where <span class="chem">X ~ B(n, 0.12)</span> <b>[M1]</b>.<br><span class="chem">P(X ≥ 2) = 1 - 0.88^n - 0.12n(0.88)^{n-1}</span> <b>[A1]</b>.<br>From a GDC table: <span class="chem">n = 30</span> gives <span class="chem">0.890</span> <b>[A1]</b>; <span class="chem">n = 31</span> gives <span class="chem">0.901</span> <b>[A1]</b>.<br>So the smallest sample size is <span class="chem">n = 31</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-2-q043',
      level: 'sl',
      tier: 'challenge',
      type: 'short',
      marks: 8,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.8, 4.9, 4.11',
      stem: '<p>The masses of hens\' eggs from a farm are normally distributed with mean <span class="chem">62</span> g and standard deviation <span class="chem">4.5</span> g. An egg is graded "large" if its mass exceeds <span class="chem">66</span> g. Eggs are packed at random in boxes of <span class="chem">12</span>.<br>(a) Find the probability that a randomly chosen egg is large. <strong>[2 marks]</strong><br>(b) Find the probability that a box contains at least <span class="chem">3</span> large eggs. <strong>[3 marks]</strong><br>(c) A box is known to contain at least <span class="chem">3</span> large eggs. Find the probability that it contains exactly <span class="chem">3</span> large eggs. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">p = P(M &gt; 66) = 0.187</span> (0.187031…).<br>(b) <span class="chem">Y ~ B(12, 0.187031)</span>: <span class="chem">P(Y ≥ 3) = 0.395</span> (0.395413…).<br>(c) <span class="chem">P(Y = 3 | Y ≥ 3) = P(Y = 3)/P(Y ≥ 3) = 0.223270/0.395413 = 0.565</span>.</p>',
      markscheme: [
        'M1: (a) Uses the normal cdf for P(M > 66) with M ~ N(62, 4.5²).',
        'A1: (a) 0.187 (0.187031…).',
        'M1: (b) Recognises Y ~ B(12, p) with p from (a).',
        'M1: (b) Writes P(Y ≥ 3) = 1 − P(Y ≤ 2).',
        'A1: (b) 0.395 (0.395413…).',
        'M1: (c) Uses P(Y = 3 ∩ Y ≥ 3)/P(Y ≥ 3) = P(Y = 3)/P(Y ≥ 3).',
        'A1: (c) P(Y = 3) = 0.223 (0.223270…).',
        'A1: (c) 0.565 (accept 0.564 to 0.565).'
      ],
      hints: [
        'Decode: two distributions are hidden here. A single egg mass is normal; the NUMBER of large eggs in a box is binomial with p from the normal step. Part (c) is a conditional probability on that binomial.',
        'Keep p to at least 5 significant figures before using it in B(12, p).',
        'In (c), the event "exactly 3" is inside "at least 3", so the intersection is just P(Y = 3).'
      ],
      solution: '<p><b>Decode:</b> normal model for one egg → binomial model for the count in a box → conditional probability.<br>(a) <span class="chem">p = P(M &gt; 66) = 0.187031</span>.<br>(b) <span class="chem">Y ~ B(12, 0.187031)</span>; <span class="chem">P(Y ≥ 3) = 1 - P(Y ≤ 2) = 0.395413 ≈ 0.395</span>.<br>(c) <span class="chem">P(Y = 3 | Y ≥ 3) = P(Y = 3)/P(Y ≥ 3) = 0.223270/0.395413 = 0.564650 ≈ 0.565</span>.</p>'
    },
    {
      id: 't4-2-q044',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.9, 4.11',
      stem: '<p>The heights of adult men in a country are normally distributed with mean <span class="chem">170</span> cm and standard deviation <span class="chem">8</span> cm. A man is chosen at random and is found to be taller than <span class="chem">180</span> cm. Find the probability that he is taller than <span class="chem">185</span> cm.</p>',
      answer: 0.2877087258,
      sigfigs: 3,
      hints: [
        'Decode: "is found to be taller than 180 cm" is the condition. You want P(H &gt; 185 | H &gt; 180).',
        'The event H &gt; 185 is inside H &gt; 180, so the intersection is just P(H &gt; 185).',
        'Divide P(H &gt; 185) by P(H &gt; 180), both from the normal cdf.'
      ],
      solution: '<p><span class="chem">P(H &gt; 185 | H &gt; 180) = P(H &gt; 185)/P(H &gt; 180)</span> <b>[M1]</b>.<br><span class="chem">P(H &gt; 185) = 0.0303964</span> <b>[A1]</b>, <span class="chem">P(H &gt; 180) = 0.105650</span> <b>[A1]</b>.<br>Ratio <span class="chem">= 0.287709 ≈ 0.288</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-2-q045',
      level: 'sl',
      tier: 'challenge',
      type: 'short',
      marks: 8,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.8, 4.9, 4.11',
      stem: '<p>The masses of oranges picked at an orchard are normally distributed with mean <span class="chem">150</span> g and standard deviation <span class="chem">20</span> g. Oranges lighter than <span class="chem">120</span> g are rejected; all others are accepted for sale. Accepted oranges heavier than <span class="chem">180</span> g are sold as "premium".<br>(a) Find the probability that an orange is rejected. <strong>[2 marks]</strong><br>(b) Find the probability that an accepted orange is premium. <strong>[3 marks]</strong><br>(c) A crate contains <span class="chem">30</span> accepted oranges chosen at random. Find the probability that at least <span class="chem">3</span> of them are premium. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">P(M &lt; 120) = 0.0668</span> (0.0668072…).<br>(b) <span class="chem">P(M &gt; 180 | M ≥ 120) = 0.0668072/0.933193 = 0.0716</span> (0.0715899…).<br>(c) <span class="chem">Y ~ B(30, 0.0715899)</span>, <span class="chem">P(Y ≥ 3) = 0.365</span> (0.364620…).</p>',
      markscheme: [
        'M1: (a) Uses the normal cdf for P(M < 120).',
        'A1: (a) 0.0668.',
        'M1: (b) Sets up P(M > 180 | M ≥ 120) = P(M > 180)/P(M ≥ 120), noting M > 180 lies inside M ≥ 120.',
        'A1: (b) Numerator 0.0668072 and denominator 0.933193 (by symmetry the numerator equals (a)).',
        'A1: (b) 0.0716.',
        'M1: (c) Recognises Y ~ B(30, p) with p from (b), not from P(M > 180).',
        'M1: (c) Uses P(Y ≥ 3) = 1 − P(Y ≤ 2).',
        'A1: (c) 0.365 (accept 0.364 to 0.365).'
      ],
      hints: [
        'Decode: "an accepted orange is premium" is a conditional probability: the condition is M ≥ 120. The crate in (c) contains only accepted oranges, so its success probability is the conditional one from (b).',
        '120 and 180 are each 30 g from the mean, so P(M &gt; 180) = P(M &lt; 120).',
        'In (c), use B(30, p) with p from (b) and the complement of "at most 2".'
      ],
      solution: '<p><b>Decode:</b> the condition "accepted" shrinks the sample space to <span class="chem">M ≥ 120</span>; every later probability lives inside it.<br>(a) <span class="chem">P(M &lt; 120) = 0.0668072 ≈ 0.0668</span>.<br>(b) <span class="chem">P(M &gt; 180 | M ≥ 120) = P(M &gt; 180)/P(M ≥ 120) = 0.0668072/(1 - 0.0668072) = 0.0715899 ≈ 0.0716</span>.<br>(c) <span class="chem">Y ~ B(30, 0.0715899)</span>; <span class="chem">P(Y ≥ 3) = 1 - P(Y ≤ 2) = 0.364620 ≈ 0.365</span>.</p>'
    },
    {
      id: 't4-2-q046',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      marks: 6,
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 4.13, SL 4.9',
      stem: '<p>A workshop cuts metal rods on three machines. Machine A makes <span class="chem">50%</span> of the rods, with lengths <span class="chem">N(50.0, 0.4^2)</span> cm; machine B makes <span class="chem">30%</span>, with lengths <span class="chem">N(50.3, 0.5^2)</span> cm; machine C makes the rest, with lengths <span class="chem">N(49.8, 0.6^2)</span> cm. A rod longer than <span class="chem">50.8</span> cm is classed as oversize. A rod chosen at random is oversize. Find the probability that it was made by machine B.</p>',
      answer: 0.6945392643,
      sigfigs: 3,
      hints: [
        'Decode: you know the effect (oversize) and want the cause (machine B). That is Bayes\' theorem with a three-way partition; each conditional probability P(O | machine) comes from a different normal distribution.',
        'Find P(L &gt; 50.8) for each machine with the normal cdf. Machine C makes 20% of the rods.',
        'P(B | O) = 0.3 P(O | B) / [0.5 P(O | A) + 0.3 P(O | B) + 0.2 P(O | C)].'
      ],
      solution: '<p><b>Decode:</b> reverse the condition with Bayes\' theorem; the likelihoods are normal tail areas.<br><span class="chem">P(O | A) = 0.0227501, P(O | B) = 0.158655, P(O | C) = 0.0477904</span> <b>[M1 A1]</b>.<br><span class="chem">P(O) = 0.5(0.0227501) + 0.3(0.158655) + 0.2(0.0477904) = 0.0685297</span> <b>[M1 A1]</b>.<br><span class="chem">P(B | O) = 0.0475966/0.0685297 = 0.694539 ≈ 0.695</span> <b>[M1 A1]</b>.</p>'
    },
    {
      id: 't4-2-q047',
      level: 'ahl',
      tier: 'exam',
      type: 'short',
      marks: 9,
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 4.14',
      stem: '<p>The time <span class="chem">X</span> hours that a phone battery lasts after a warning light comes on has probability density function <span class="chem">f(x) = kxe^{-x}</span> for <span class="chem">0 ≤ x ≤ 4</span>, and <span class="chem">f(x) = 0</span> otherwise.<br>(a) Find the value of <span class="chem">k</span>. <strong>[2 marks]</strong><br>(b) Find <span class="chem">P(1 &lt; X &lt; 2)</span>. <strong>[2 marks]</strong><br>(c) Find the median of <span class="chem">X</span>. <strong>[3 marks]</strong><br>(d) Find <span class="chem">E(X)</span>. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">∫_0^4 xe^{-x} dx = 0.908422</span>, so <span class="chem">k = 1.10</span> (1.10081…).<br>(b) <span class="chem">P(1 &lt; X &lt; 2) = 0.363</span> (0.362996…).<br>(c) Median <span class="chem">m = 1.54</span> h (1.53618…).<br>(d) <span class="chem">E(X) = 1.68</span> h (1.67741…).</p>',
      markscheme: [
        'M1: (a) Sets ∫_0^4 kxe^{−x} dx = 1.',
        'A1: (a) k = 1.10 (1.10081…).',
        'M1: (b) Writes ∫_1^2 kxe^{−x} dx with their k.',
        'A1: (b) 0.363.',
        'M1: (c) Sets ∫_0^m kxe^{−x} dx = 0.5.',
        'M1: (c) Solves numerically (graph or solver) for 0 ≤ m ≤ 4.',
        'A1: (c) m = 1.54.',
        'M1: (d) Writes E(X) = ∫_0^4 x · kxe^{−x} dx.',
        'A1: (d) 1.68.'
      ],
      hints: [
        'All four parts are definite integrals of f; use the numerical integration on your GDC and store k unrounded.',
        'For the median, graph y = ∫_0^x kte^{−t} dt (or use a solver) and find where it equals 0.5.',
        'E(X) = ∫_0^4 x f(x) dx.'
      ],
      solution: '<p>(a) GDC: <span class="chem">∫_0^4 xe^{-x} dx = 0.908422</span>, so <span class="chem">k = 1/0.908422 = 1.10081 ≈ 1.10</span>. (Exactly <span class="chem">k = 1/(1 - 5e^{-4})</span>.)<br>(b) <span class="chem">∫_1^2 kxe^{-x} dx = 0.362996 ≈ 0.363</span>.<br>(c) Solve <span class="chem">∫_0^m kxe^{-x} dx = 0.5</span>: <span class="chem">m = 1.53618 ≈ 1.54</span> hours.<br>(d) <span class="chem">E(X) = ∫_0^4 kx^2 e^{-x} dx = 1.67741 ≈ 1.68</span> hours.</p>'
    },
    {
      id: 't4-2-q048',
      level: 'ahl',
      tier: 'challenge',
      type: 'numeric',
      marks: 6,
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 4.14',
      stem: '<p>At a help desk, the waiting time <span class="chem">T</span> minutes never exceeds <span class="chem">10</span> minutes. For <span class="chem">0 ≤ t ≤ 10</span> the probability density of <span class="chem">T</span> is proportional to <span class="chem">e^{-0.2t}</span>, and it is zero otherwise. The manager wants to know how wide the middle half of waiting times is. Find the interquartile range of <span class="chem">T</span>.</p>',
      answer: 4.0099158143,
      sigfigs: 3,
      unit: 'min',
      hints: [
        'Decode: "proportional to e^{−0.2t}" means f(t) = ke^{−0.2t} with k found from total probability 1. "The middle half" is the interquartile range Q₃ − Q₁, so you need two quantiles of a continuous distribution.',
        'Find k from ∫_0^{10} ke^{−0.2t} dt = 1 (k ≈ 0.2313).',
        'Solve ∫_0^{q} ke^{−0.2t} dt = 0.25 and = 0.75 on your GDC, then subtract.'
      ],
      solution: '<p><b>Decode:</b> write <span class="chem">f(t) = ke^{-0.2t}</span> on <span class="chem">[0, 10]</span>; the IQR is <span class="chem">Q_3 - Q_1</span>.<br><span class="chem">∫_0^{10} ke^{-0.2t} dt = 1 ⇒ k = 0.231304</span> <b>[M1 A1]</b>.<br>Solve <span class="chem">∫_0^{Q_1} f(t) dt = 0.25</span>: <span class="chem">Q_1 = 1.21779</span> <b>[M1 A1]</b>.<br>Solve <span class="chem">∫_0^{Q_3} f(t) dt = 0.75</span>: <span class="chem">Q_3 = 5.22771</span> <b>[A1]</b>.<br>IQR <span class="chem">= 5.22771 - 1.21779 = 4.00992 ≈ 4.01</span> minutes <b>[A1]</b>.</p>'
    },
    {
      id: 't4-2-q049',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      marks: 5,
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 4.14',
      stem: '<p>A continuous random variable <span class="chem">X</span> has probability density function <span class="chem">f(x) = ke^{-x^2}</span> for <span class="chem">0 ≤ x ≤ 2</span>, and <span class="chem">f(x) = 0</span> otherwise. Find <span class="chem">Var(X)</span>.</p>',
      answer: 0.1695892014,
      sigfigs: 3,
      hints: [
        '<span class="chem">e^{-x^2}</span> has no elementary antiderivative, so every integral here is done numerically on the GDC.',
        'Find k from <span class="chem">∫_0^2 ke^{-x^2} dx = 1</span>, then <span class="chem">E(X)</span> and <span class="chem">E(X^2)</span>.',
        'Use <span class="chem">Var(X) = E(X^2) - [E(X)]^2</span> with unrounded values.'
      ],
      solution: '<p><span class="chem">∫_0^2 e^{-x^2} dx = 0.882081 ⇒ k = 1.13368</span> <b>[M1 A1]</b>.<br><span class="chem">E(X) = ∫_0^2 kxe^{-x^2} dx = 0.556459</span> and <span class="chem">E(X^2) = ∫_0^2 kx^2 e^{-x^2} dx = 0.479236</span> <b>[M1 A1]</b>.<br><span class="chem">Var(X) = 0.479236 - 0.556459^2 = 0.169589 ≈ 0.170</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-2-q050',
      level: 'sl',
      tier: 'challenge',
      type: 'numeric',
      marks: 6,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.7, 4.8',
      stem: '<p>In a fairground game a player rolls five fair six-sided dice. If <span class="chem">Y</span> sixes appear, the player receives <span class="chem">$Y^2</span> (so two sixes pay <span class="chem">$4</span>). The organiser wants to charge a price that makes the game fair. Find this price, giving your answer in dollars to 2 decimal places.</p>',
      answer: 1.3888888889,
      dp: 2,
      unit: '$',
      hints: [
        'Decode: the number of sixes is binomial, Y ~ B(5, 1/6). A fair price equals the expected payout, which here is E(Y²), not [E(Y)]².',
        'Either tabulate y, P(Y = y) and y² P(Y = y) for y = 0 to 5 with the binomial pdf, or use E(Y²) = Var(Y) + [E(Y)]².',
        'E(Y) = 5/6 and Var(Y) = 5(1/6)(5/6) = 25/36.'
      ],
      solution: '<p><b>Decode:</b> the payout is <span class="chem">Y^2</span> with <span class="chem">Y ~ B(5, 1/6)</span>; fair price = <span class="chem">E(Y^2)</span> <b>[M1]</b>.<br><span class="chem">E(Y) = 5/6</span>, <span class="chem">Var(Y) = 5(1/6)(5/6) = 25/36</span> <b>[A1 A1]</b>.<br><span class="chem">E(Y^2) = Var(Y) + [E(Y)]^2 = 25/36 + 25/36 = 50/36</span> <b>[M1 A1]</b>.<br>Fair price <span class="chem">= $1.39</span> (1.3888…) <b>[A1]</b>. (A GDC table of <span class="chem">y^2 P(Y = y)</span> gives the same total.)</p>'
    },
    {
      id: 't4-2-q051',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 3,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.9',
      stem: '<p>The reaction times of drivers in a simulator are normally distributed with mean <span class="chem">72</span> hundredths of a second and standard deviation <span class="chem">6.5</span> hundredths of a second. Find the interquartile range of the reaction times, in hundredths of a second.</p>',
      answer: 8.7683667525,
      sigfigs: 3,
      hints: [
        'The quartiles are the values with 25% and 75% of the distribution below them.',
        'Use the inverse normal with area 0.25 and 0.75 (μ = 72, σ = 6.5), then subtract.'
      ],
      solution: '<p><span class="chem">Q_1 = 67.6158</span> (inverse normal, area 0.25) <b>[M1]</b> and <span class="chem">Q_3 = 76.3842</span> (area 0.75) <b>[A1]</b>.<br>IQR <span class="chem">= 76.3842 - 67.6158 = 8.77</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-2-q052',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.8, 4.11',
      stem: '<p>A basketball player scores from <span class="chem">25%</span> of her three-point attempts, independently. In a match she takes <span class="chem">10</span> three-point attempts and scores at least one. Find the probability that she scores at least three.</p>',
      answer: 0.5027169547,
      sigfigs: 3,
      hints: [
        'Decode: "and scores at least one" is information you are given, so this is P(X ≥ 3 | X ≥ 1) with X ~ B(10, 0.25).',
        'X ≥ 3 lies inside X ≥ 1, so the numerator is just P(X ≥ 3).',
        'P(X ≥ 3) = 1 − P(X ≤ 2) and P(X ≥ 1) = 1 − P(X = 0).'
      ],
      solution: '<p><span class="chem">P(X ≥ 3 | X ≥ 1) = P(X ≥ 3)/P(X ≥ 1)</span> <b>[M1]</b>.<br><span class="chem">P(X ≥ 3) = 1 - 0.525593 = 0.474407</span> <b>[A1]</b>, <span class="chem">P(X ≥ 1) = 1 - 0.75^{10} = 0.943686</span> <b>[A1]</b>.<br>Ratio <span class="chem">= 0.502717 ≈ 0.503</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-2-q053',
      level: 'sl',
      tier: 'challenge',
      type: 'short',
      marks: 10,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.8, 4.9, 4.12',
      stem: '<p>A machine makes bolts whose diameters are normally distributed with mean <span class="chem">μ</span> mm and standard deviation <span class="chem">σ</span> mm. A bolt is rejected if its diameter is less than <span class="chem">9.9</span> mm or more than <span class="chem">10.2</span> mm. Quality records show that <span class="chem">5%</span> of bolts are too narrow and <span class="chem">3%</span> are too wide.<br>(a) Find the value of <span class="chem">σ</span> and the value of <span class="chem">μ</span>. <strong>[4 marks]</strong><br>(b) Bolts are sold in packs of <span class="chem">50</span>, taken at random from the machine before inspection. Find the probability that a pack contains at most <span class="chem">3</span> bolts that would be rejected. <strong>[3 marks]</strong><br>(c) An engineer resets the machine so that <span class="chem">μ = 10.05</span> mm, with <span class="chem">σ</span> unchanged. Find the new percentage of bolts that are rejected. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">(9.9 - μ)/σ = -1.64485</span> and <span class="chem">(10.2 - μ)/σ = 1.88079</span> give <span class="chem">σ = 0.0851</span> mm (0.0850908…) and <span class="chem">μ = 10.0</span> mm (10.03996…).<br>(b) <span class="chem">R ~ B(50, 0.08)</span>: <span class="chem">P(R ≤ 3) = 0.425</span> (0.425296…).<br>(c) <span class="chem">P(D &lt; 9.9) + P(D &gt; 10.2) = 2(0.0389651) = 0.0779</span>, so about <span class="chem">7.79%</span>.</p>',
      markscheme: [
        'M1: (a) Forms two standardised equations (x − μ)/σ = z.',
        'A1: (a) Correct z-values −1.64485 (area 0.05) and 1.88079 (area 0.97).',
        'A1: (a) σ = 0.0851 (0.0850908…).',
        'A1: (a) μ = 10.0 (10.03996…).',
        'R1: (b) Recognises p(reject) = 0.05 + 0.03 = 0.08.',
        'M1: (b) Uses R ~ B(50, 0.08) with the cumulative binomial for P(R ≤ 3).',
        'A1: (b) 0.425.',
        'M1: (c) Adds both tails P(D < 9.9) + P(D > 10.2) using N(10.05, σ²) with σ unrounded.',
        'A1: (c) Each tail is 0.0389651 (by symmetry, as 10.05 is midway between the limits).',
        'A1: (c) 7.79% (0.0779302…).'
      ],
      hints: [
        'Decode: (a) is "inverse normal with both μ and σ unknown"; (b) hides a binomial (each bolt is rejected or not, with probability from the records); (c) is a fresh normal calculation with the new mean.',
        '"3% too wide" means P(D &lt; 10.2) = 0.97. Form two equations (x − μ)/σ = z and solve them simultaneously.',
        'In (c), 10.05 is exactly halfway between 9.9 and 10.2, so the two tails are equal.'
      ],
      solution: '<p><b>Decode:</b> two percentages → two z-scores → two linear equations; then a rejected bolt is a "success" in a binomial count.<br>(a) <span class="chem">z_1 = -1.644854</span>, <span class="chem">z_2 = 1.880794</span>. <span class="chem">9.9 - μ = -1.644854σ</span> and <span class="chem">10.2 - μ = 1.880794σ</span> ⇒ <span class="chem">0.3 = 3.525648σ ⇒ σ = 0.0850908</span>, <span class="chem">μ = 9.9 + 1.644854σ = 10.03996</span>.<br>(b) Each bolt is rejected with probability <span class="chem">0.08</span>, so <span class="chem">R ~ B(50, 0.08)</span>: <span class="chem">P(R ≤ 3) = 0.425296 ≈ 0.425</span>.<br>(c) With <span class="chem">D ~ N(10.05, 0.0850908^2)</span>: <span class="chem">P(D &lt; 9.9) = P(D &gt; 10.2) = 0.0389651</span>, total <span class="chem">0.0779302</span>, about <span class="chem">7.79%</span>. Centring the mean between the limits lowers the rejection rate from 8%.</p>'
    },
    {
      id: 't4-2-q054',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.9, 4.11',
      stem: '<p>Scores <span class="chem">X</span> on a reasoning test are normally distributed with mean <span class="chem">100</span> and standard deviation <span class="chem">15</span>. Let <span class="chem">A</span> be the event <span class="chem">X &gt; 110</span> and <span class="chem">B</span> the event <span class="chem">X &lt; 120</span>. Find <span class="chem">P(A | B)</span>.</p>',
      answer: 0.1774684298,
      sigfigs: 3,
      hints: [
        'The intersection <span class="chem">A ∩ B</span> is the interval <span class="chem">110 &lt; X &lt; 120</span>.',
        'Divide <span class="chem">P(110 &lt; X &lt; 120)</span> by <span class="chem">P(X &lt; 120)</span>.',
        'Compare your answer with P(A) = 0.252: since they differ, A and B are not independent.'
      ],
      solution: '<p><span class="chem">P(A | B) = P(110 &lt; X &lt; 120)/P(X &lt; 120)</span> <b>[M1]</b>.<br><span class="chem">P(110 &lt; X &lt; 120) = 0.161281</span> <b>[A1]</b>, <span class="chem">P(X &lt; 120) = 0.908789</span> <b>[A1]</b>.<br><span class="chem">P(A | B) = 0.177468 ≈ 0.177</span> <b>[A1]</b>.<br>Note: <span class="chem">P(A) = 0.252 ≠ P(A | B)</span>, so <span class="chem">A</span> and <span class="chem">B</span> are not independent.</p>'
    },
    {
      id: 't4-2-q055',
      level: 'sl',
      tier: 'challenge',
      type: 'numeric',
      marks: 5,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.8',
      stem: '<p>A printer jams on each page with the same probability <span class="chem">p</span>, independently. When it prints an <span class="chem">8</span>-page document, the probability that it jams at least once is <span class="chem">0.75</span>. Find the probability that it jams on exactly <span class="chem">2</span> of the <span class="chem">8</span> pages.</p>',
      answer: 0.2505953266,
      sigfigs: 3,
      hints: [
        'Decode: the binomial parameter p is unknown; the "at least once" fact is an equation for p. Only after finding p can you answer the question asked.',
        '1 − (1 − p)⁸ = 0.75, so (1 − p)⁸ = 0.25.',
        'Then use the binomial pdf for X ~ B(8, p) at x = 2, with p unrounded.'
      ],
      solution: '<p><b>Decode:</b> solve for <span class="chem">p</span> first, then use <span class="chem">X ~ B(8, p)</span>.<br><span class="chem">P(X ≥ 1) = 1 - (1 - p)^8 = 0.75</span> <b>[M1]</b> <span class="chem">⇒ 1 - p = 0.25^{1/8} ⇒ p = 0.159104</span> <b>[A1]</b>.<br><span class="chem">P(X = 2) = ⁸C₂ p^2 (1 - p)^6</span> <b>[M1]</b> <span class="chem">= 28(0.159104)^2(0.840896)^6</span> <b>[A1]</b> <span class="chem">= 0.250595 ≈ 0.251</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-2-q056',
      level: 'ahl',
      tier: 'exam',
      type: 'numeric',
      marks: 5,
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 4.14, SL 4.7',
      stem: '<p>A discrete random variable <span class="chem">X</span> has probability distribution <span class="chem">P(X = x) = k/x</span> for <span class="chem">x = 1, 2, 3, 4, 5</span>, where <span class="chem">k</span> is a constant. Find the standard deviation of <span class="chem">X</span>.</p>',
      answer: 1.3319917950,
      sigfigs: 3,
      hints: [
        'Use <span class="chem">Σ P(X = x) = 1</span>: <span class="chem">k(1 + 1/2 + 1/3 + 1/4 + 1/5) = 1</span>.',
        'Put x in one GDC list and P(X = x) in another; the one-variable statistics with frequencies give the mean and σ directly.',
        'Or by hand: E(X) = Σ x(k/x) = 5k and E(X²) = Σ x²(k/x) = 15k.'
      ],
      solution: '<p><span class="chem">k(137/60) = 1 ⇒ k = 60/137 = 0.437956</span> <b>[M1 A1]</b>.<br><span class="chem">E(X) = 5k = 2.18978</span>, <span class="chem">E(X^2) = k(1 + 2 + 3 + 4 + 5) = 15k = 6.56934</span> <b>[A1]</b>.<br><span class="chem">Var(X) = 6.56934 - 2.18978^2 = 1.77420</span> <b>[M1]</b>, so <span class="chem">σ = 1.33199 ≈ 1.33</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-2-q057',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      marks: 9,
      paper: 'Paper 2 (GDC)',
      syllabus: 'AHL 4.13, SL 4.8',
      stem: '<p>A magician has three coins. Coin F is fair, coin H lands heads with probability <span class="chem">0.7</span>, and coin T lands heads with probability <span class="chem">0.2</span>. She picks coin F with probability <span class="chem">1/2</span>, coin H with probability <span class="chem">1/3</span> and coin T with probability <span class="chem">1/6</span>, and tosses the chosen coin <span class="chem">8</span> times. It shows exactly <span class="chem">6</span> heads.<br>(a) For each coin, find the probability of exactly <span class="chem">6</span> heads in <span class="chem">8</span> tosses. <strong>[3 marks]</strong><br>(b) Find the probability that she chose coin H. <strong>[3 marks]</strong><br>(c) She tosses the same coin once more. Find the probability that it shows heads. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) F: <span class="chem">0.109</span> (0.109375); H: <span class="chem">0.296</span> (0.296475…); T: <span class="chem">0.00115</span> (0.00114688).<br>(b) <span class="chem">P(6 heads) = 0.153704</span>, so <span class="chem">P(H | 6 heads) = (1/3)(0.296475)/0.153704 = 0.643</span>.<br>(c) Posteriors F 0.355798, H 0.642958, T 0.00124360; <span class="chem">P(head) = 0.5(0.355798) + 0.7(0.642958) + 0.2(0.00124360) = 0.628</span>.</p>',
      markscheme: [
        'M1: (a) Uses the binomial pdf B(8, p) at 6 for each coin.',
        'A1: (a) F: 0.109375 and H: 0.296475.',
        'A1: (a) T: 0.00114688.',
        'M1: (b) Finds the total P(6 heads) = (1/2)(0.109375) + (1/3)(0.296475) + (1/6)(0.00114688).',
        'A1: (b) P(6 heads) = 0.153704.',
        'A1: (b) P(H | 6 heads) = 0.643 (0.642958…).',
        'M1: (c) Recognises the coin is unknown: weights each coin\'s P(head) by its posterior probability.',
        'A1: (c) Posteriors 0.356 (F) and 0.00124 (T) found as well as H.',
        'A1: (c) 0.628 (0.628219…).'
      ],
      hints: [
        'Decode: the coin is a hidden cause and "6 heads in 8" is the evidence. Part (a) gives the likelihoods (binomial), (b) is Bayes\' theorem with three events, and (c) needs ALL three updated probabilities.',
        'In (b), the denominator is the total probability of 6 heads, summed over the three coins with weights 1/2, 1/3, 1/6.',
        'In (c), P(head on toss 9) = Σ P(coin | 6 heads) × P(head | coin). Using the original weights 1/2, 1/3, 1/6 is the common mistake.'
      ],
      solution: '<p><b>Decode:</b> unknown cause (coin), observed data (6 heads in 8). Likelihoods are binomial; Bayes updates the prior weights.<br>(a) <span class="chem">P(6 | F) = ⁸C₆(0.5)^8 = 0.109375</span>, <span class="chem">P(6 | H) = ⁸C₆(0.7)^6(0.3)^2 = 0.296475</span>, <span class="chem">P(6 | T) = ⁸C₆(0.2)^6(0.8)^2 = 0.00114688</span>.<br>(b) <span class="chem">P(6) = 0.0546875 + 0.0988252 + 0.000191147 = 0.153704</span>; <span class="chem">P(H | 6) = 0.0988252/0.153704 = 0.642958 ≈ 0.643</span>.<br>(c) <span class="chem">P(F | 6) = 0.355798</span>, <span class="chem">P(T | 6) = 0.00124360</span>. <span class="chem">P(head) = 0.5(0.355798) + 0.7(0.642958) + 0.2(0.00124360) = 0.628219 ≈ 0.628</span>.</p>'
    },
    {
      id: 't4-2-q058',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      marks: 19,
      paper: 'Paper 3 (HL Investigation)',
      syllabus: 'AHL 4.14',
      stem: '<p>This investigation looks at the family of continuous random variables <span class="chem">X_n</span> with probability density functions <span class="chem">f_n(x) = (n + 1)x^n</span> for <span class="chem">0 ≤ x ≤ 1</span> (and <span class="chem">0</span> otherwise), where <span class="chem">n</span> is a non-negative integer.<br>(a) Show that <span class="chem">f_n</span> is a valid probability density function for every <span class="chem">n</span>. <strong>[2 marks]</strong><br>(b) Find <span class="chem">E(X_1)</span>, <span class="chem">E(X_2)</span> and <span class="chem">E(X_3)</span>. <strong>[3 marks]</strong><br>(c) Conjecture a formula for <span class="chem">E(X_n)</span> in terms of <span class="chem">n</span>, and prove it. <strong>[3 marks]</strong><br>(d) Find the median of <span class="chem">X_n</span> in terms of <span class="chem">n</span>. <strong>[2 marks]</strong><br>(e) For <span class="chem">n = 3</span>, calculate the mean and the median, and state which is larger. Explain this using the shape of the graph of <span class="chem">f_3</span>. <strong>[3 marks]</strong><br>(f) Show that <span class="chem">Var(X_n) = (n + 1)/((n + 2)^2(n + 3))</span>. <strong>[4 marks]</strong><br>(g) Hence describe what happens to the distribution of <span class="chem">X_n</span> as <span class="chem">n → ∞</span>. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">f_n(x) ≥ 0</span> on <span class="chem">[0, 1]</span> and <span class="chem">∫_0^1 (n + 1)x^n dx = [x^{n+1}]_0^1 = 1</span>.<br>(b) <span class="chem">E(X_1) = 2/3</span>, <span class="chem">E(X_2) = 3/4</span>, <span class="chem">E(X_3) = 4/5</span>.<br>(c) Conjecture <span class="chem">E(X_n) = (n + 1)/(n + 2)</span>. Proof: <span class="chem">∫_0^1 x(n + 1)x^n dx = (n + 1)[x^{n+2}/(n + 2)]_0^1 = (n + 1)/(n + 2)</span>.<br>(d) <span class="chem">m^{n+1} = 1/2 ⇒ m = (1/2)^{1/(n+1)} = 2^{-1/(n+1)}</span>.<br>(e) Mean <span class="chem">0.8</span>, median <span class="chem">2^{-1/4} = 0.841</span>; the median is larger. The density increases towards <span class="chem">x = 1</span>, so the distribution has a long tail to the left (negative skew), which pulls the mean below the median.<br>(f) <span class="chem">E(X_n^2) = (n + 1)/(n + 3)</span>, so <span class="chem">Var = (n + 1)/(n + 3) - (n + 1)^2/(n + 2)^2 = (n + 1)[(n + 2)^2 - (n + 1)(n + 3)]/((n + 2)^2(n + 3)) = (n + 1)/((n + 2)^2(n + 3))</span>, since <span class="chem">(n + 2)^2 - (n + 1)(n + 3) = 1</span>.<br>(g) <span class="chem">Var(X_n) → 0</span> while <span class="chem">E(X_n) → 1</span>: the probability becomes concentrated closer and closer to <span class="chem">x = 1</span>.</p>',
      markscheme: [
        'M1: (a) Integrates: ∫_0^1 (n + 1)xⁿ dx = [xⁿ⁺¹]_0^1.',
        'R1: (a) States f_n(x) ≥ 0 on [0, 1] and the integral equals 1, so f_n is a valid pdf (AG).',
        'A1: (b) E(X_1) = 2/3.',
        'A1: (b) E(X_2) = 3/4.',
        'A1: (b) E(X_3) = 4/5.',
        'A1: (c) Conjecture E(X_n) = (n + 1)/(n + 2).',
        'M1: (c) Writes E(X_n) = ∫_0^1 (n + 1)xⁿ⁺¹ dx.',
        'A1: (c) Evaluates to (n + 1)/(n + 2), proving the conjecture for all n.',
        'M1: (d) Sets ∫_0^m (n + 1)xⁿ dx = mⁿ⁺¹ = 1/2.',
        'A1: (d) m = 2^(−1/(n+1)).',
        'A1: (e) Mean = 0.8.',
        'A1: (e) Median = 2^(−1/4) = 0.841.',
        'R1: (e) Median is larger; the density rises towards x = 1, so the long tail is on the left (negative skew) and the mean is pulled down.',
        'M1: (f) Writes E(X_n²) = ∫_0^1 (n + 1)xⁿ⁺² dx.',
        'A1: (f) E(X_n²) = (n + 1)/(n + 3).',
        'M1: (f) Uses Var = E(X_n²) − [E(X_n)]² and combines over the common denominator (n + 2)²(n + 3).',
        'A1: (f) Uses (n + 2)² − (n + 1)(n + 3) = 1 to reach the given result (AG).',
        'A1: (g) Var(X_n) → 0 (and E(X_n) → 1) as n → ∞.',
        'R1: (g) Interprets: the distribution concentrates at (just below) x = 1.'
      ],
      hints: [
        'Decode: this is a staged investigation. Compute small cases, spot the pattern, then prove it with a general integral in n. Each part uses one of the standard definitions: total area 1, E(X) = ∫ x f(x) dx, median ∫_0^m f = 1/2, Var = E(X²) − [E(X)]².',
        'For (b), E(X_1) = ∫_0^1 x · 2x dx. Write each answer as a fraction to see the pattern.',
        'For (d), the integral from 0 to m is simply m^{n+1}.',
        'For (f), expand (n + 2)² − (n + 1)(n + 3) carefully: it is a constant.'
      ],
      solution: '<p><b>Decode:</b> small cases → conjecture → general proof, using the definitions of a pdf, mean, median and variance for a continuous random variable.<br>(a) For <span class="chem">0 ≤ x ≤ 1</span>, <span class="chem">(n + 1)x^n ≥ 0</span>, and <span class="chem">∫_0^1 (n + 1)x^n dx = [x^{n+1}]_0^1 = 1</span>.<br>(b) <span class="chem">E(X_1) = ∫_0^1 2x^2 dx = 2/3</span>, <span class="chem">E(X_2) = ∫_0^1 3x^3 dx = 3/4</span>, <span class="chem">E(X_3) = ∫_0^1 4x^4 dx = 4/5</span>.<br>(c) Pattern: <span class="chem">E(X_n) = (n + 1)/(n + 2)</span>. Proof: <span class="chem">E(X_n) = ∫_0^1 (n + 1)x^{n+1} dx = (n + 1)/(n + 2)</span>.<br>(d) <span class="chem">∫_0^m (n + 1)x^n dx = m^{n+1} = 1/2 ⇒ m = 2^{-1/(n+1)}</span>.<br>(e) <span class="chem">n = 3</span>: mean <span class="chem">4/5 = 0.8</span>, median <span class="chem">2^{-1/4} = 0.840896 ≈ 0.841</span>. The median is larger: <span class="chem">f_3(x) = 4x^3</span> is small near <span class="chem">0</span> and large near <span class="chem">1</span>, giving a long left tail that drags the mean down.<br>(f) <span class="chem">E(X_n^2) = ∫_0^1 (n + 1)x^{n+2} dx = (n + 1)/(n + 3)</span>. Then <span class="chem">Var(X_n) = (n + 1)/(n + 3) - (n + 1)^2/(n + 2)^2 = (n + 1)[(n + 2)^2 - (n + 1)(n + 3)]/((n + 2)^2(n + 3))</span>, and <span class="chem">(n^2 + 4n + 4) - (n^2 + 4n + 3) = 1</span>, giving <span class="chem">(n + 1)/((n + 2)^2(n + 3))</span>.<br>(g) The numerator grows like <span class="chem">n</span> and the denominator like <span class="chem">n^3</span>, so <span class="chem">Var(X_n) → 0</span>; with <span class="chem">E(X_n) → 1</span>, almost all the probability ends up just below <span class="chem">x = 1</span>.</p>'
    },
    {
      id: 't4-2-q059',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      marks: 15,
      paper: 'Paper 3 (HL Investigation)',
      syllabus: 'AHL 4.13',
      stem: '<p>A screening test for a condition <span class="chem">D</span> gives a positive result for <span class="chem">95%</span> of people who have the condition and for <span class="chem">5%</span> of people who do not. In a city, <span class="chem">1%</span> of people have the condition. Assume that, for a given person, repeated test results are independent of each other once their condition status is known.<br>(a) A person tests positive once. Find the probability that they have the condition. <strong>[3 marks]</strong><br>(b) The person is tested a second time and is positive again. Find the probability that they have the condition. <strong>[3 marks]</strong><br>(c) Show that after <span class="chem">k</span> positive results in a row, <span class="chem">P(D | k positives) = 0.01(0.95)^k / (0.01(0.95)^k + 0.99(0.05)^k)</span>. <strong>[2 marks]</strong><br>(d) Hence show that the odds <span class="chem">P(D | k positives) / P(D′ | k positives) = 19^k/99</span>. <strong>[2 marks]</strong><br>(e) Find the smallest number of consecutive positive results needed for <span class="chem">P(D | k positives)</span> to exceed <span class="chem">0.999</span>. <strong>[3 marks]</strong><br>(f) In a different city the proportion with the condition is <span class="chem">p</span>. Find the set of values of <span class="chem">p</span> for which a single positive test makes it more likely than not that the person has the condition. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">P(+) = 0.01(0.95) + 0.99(0.05) = 0.059</span>; <span class="chem">P(D | +) = 0.0095/0.059 = 0.161</span>.<br>(b) <span class="chem">P(++) = 0.01(0.95)^2 + 0.99(0.05)^2 = 0.0115</span>; <span class="chem">P(D | ++) = 0.009025/0.0115 = 0.785</span>.<br>(c) By conditional independence <span class="chem">P(k+ | D) = 0.95^k</span> and <span class="chem">P(k+ | D′) = 0.05^k</span>; Bayes gives the result.<br>(d) <span class="chem">P(D′ | k+)</span> has numerator <span class="chem">0.99(0.05)^k</span> over the same denominator, so the odds are <span class="chem">(0.01/0.99)(0.95/0.05)^k = 19^k/99</span>.<br>(e) Need odds <span class="chem">&gt; 999</span>: <span class="chem">19^k &gt; 98901 ⇒ k &gt; 3.906</span>, so <span class="chem">k = 4</span>.<br>(f) <span class="chem">0.95p &gt; 0.05(1 - p) ⇒ p &gt; 0.05</span>, so <span class="chem">0.05 &lt; p ≤ 1</span>.</p>',
      markscheme: [
        'M1: (a) Uses total probability P(+) = 0.01 × 0.95 + 0.99 × 0.05.',
        'A1: (a) P(+) = 0.059.',
        'A1: (a) P(D | +) = 0.161 (0.161017…).',
        'M1: (b) Uses P(++ | D) = 0.95² and P(++ | D′) = 0.05² (or updates the prior to 0.161017).',
        'A1: (b) P(++) = 0.0115.',
        'A1: (b) P(D | ++) = 0.785 (0.784783…).',
        'M1: (c) States P(k positives | D) = 0.95^k and P(k positives | D′) = 0.05^k by conditional independence.',
        'A1: (c) Substitutes into Bayes\' theorem to obtain the given expression (AG).',
        'M1: (d) Writes P(D′ | k positives) = 0.99(0.05)^k/(same denominator) and divides.',
        'A1: (d) Simplifies (0.01/0.99)(0.95/0.05)^k = 19^k/99 (AG).',
        'M1: (e) Converts P > 0.999 into odds > 999 (or solves the inequality directly).',
        'A1: (e) 19^k > 98901, so k > ln 98901/ln 19 = 3.906…',
        'A1: (e) k = 4.',
        'M1: (f) Sets 0.95p/(0.95p + 0.05(1 − p)) > 0.5, or 0.95p > 0.05(1 − p).',
        'A1: (f) p > 0.05 (with p ≤ 1).'
      ],
      hints: [
        'Decode: each part is Bayes\' theorem with the two-event partition {D, D′}. The evidence grows from one positive to k positives; "independent once the status is known" lets you multiply the test probabilities along each branch.',
        'For (a), the denominator is P(+) = P(D)P(+ | D) + P(D′)P(+ | D′).',
        'For (d), both conditional probabilities share the same denominator, so the odds are a ratio of the two numerators.',
        'For (e), P &gt; 0.999 is the same as odds &gt; 0.999/0.001 = 999.'
      ],
      solution: '<p><b>Decode:</b> repeated Bayes updating on the partition {D, D′}; odds turn the updating into a multiplication by 19 per positive result.<br>(a) <span class="chem">P(+) = 0.0095 + 0.0495 = 0.059</span>, <span class="chem">P(D | +) = 0.0095/0.059 = 0.161017 ≈ 0.161</span>.<br>(b) <span class="chem">P(++ ∩ D) = 0.01(0.9025) = 0.009025</span>, <span class="chem">P(++ ∩ D′) = 0.99(0.0025) = 0.002475</span>, so <span class="chem">P(D | ++) = 0.009025/0.0115 = 0.784783 ≈ 0.785</span>.<br>(c) Given <span class="chem">D</span>, the <span class="chem">k</span> results are independent, each positive with probability <span class="chem">0.95</span>, so <span class="chem">P(k+ | D) = 0.95^k</span>; similarly <span class="chem">P(k+ | D′) = 0.05^k</span>. Bayes\' theorem gives the stated formula.<br>(d) <span class="chem">P(D | k+)/P(D′ | k+) = 0.01(0.95)^k/(0.99(0.05)^k) = (1/99)(19)^k</span>.<br>(e) <span class="chem">P &gt; 0.999 ⇔ odds &gt; 999 ⇔ 19^k &gt; 98901 ⇔ k &gt; ln 98901/ln 19 = 3.906</span>. Check: <span class="chem">k = 3</span> gives odds <span class="chem">69.3</span> (P = 0.986); <span class="chem">k = 4</span> gives odds <span class="chem">1316</span> (P = 0.99924). So <span class="chem">k = 4</span>.<br>(f) <span class="chem">P(D | +) &gt; 1/2 ⇔ 0.95p &gt; 0.05(1 - p) ⇔ p &gt; 0.05</span>.</p>'
    },
    {
      id: 't4-2-q060',
      level: 'ahl',
      tier: 'challenge',
      type: 'short',
      marks: 17,
      paper: 'Paper 3 (HL Investigation)',
      syllabus: 'AHL 4.14, SL 4.7',
      stem: '<p>This investigation finds the variance of a discrete uniform random variable. Let <span class="chem">X</span> take each of the values <span class="chem">1, 2, …, n</span> with probability <span class="chem">1/n</span>.<br>(a) Find <span class="chem">Var(X)</span> for <span class="chem">n = 2</span>, <span class="chem">n = 3</span> and <span class="chem">n = 4</span>. <strong>[3 marks]</strong><br>(b) Verify that your answers fit the formula <span class="chem">Var(X) = (n^2 - 1)/12</span>. <strong>[1 mark]</strong><br>(c) Using <span class="chem">Σ_{r=1}^n r = n(n + 1)/2</span> and <span class="chem">Σ_{r=1}^n r^2 = n(n + 1)(2n + 1)/6</span>, prove the formula in (b). <strong>[4 marks]</strong><br>(d) A fair spinner has <span class="chem">n</span> equal sectors labelled <span class="chem">5, 10, 15, …, 5n</span>. Write down the mean and variance of the score in terms of <span class="chem">n</span>. <strong>[2 marks]</strong><br>(e) Another fair spinner has equal sectors labelled <span class="chem">3, 7, 11, …</span>, each label <span class="chem">4</span> more than the previous one. The variance of its score is <span class="chem">160</span>. Find the number of sectors. <strong>[3 marks]</strong><br>(f) Find the mean score of the spinner in (e). <strong>[1 mark]</strong><br>(g) Let <span class="chem">U</span> be a continuous random variable with constant density <span class="chem">1/n</span> on <span class="chem">0 ≤ u ≤ n</span>. Show that <span class="chem">Var(U) = n^2/12</span>, and comment on <span class="chem">Var(X)/Var(U)</span> for large <span class="chem">n</span>. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">n = 2</span>: <span class="chem">1/4</span>; <span class="chem">n = 3</span>: <span class="chem">2/3</span>; <span class="chem">n = 4</span>: <span class="chem">5/4</span>.<br>(b) <span class="chem">3/12 = 1/4</span>, <span class="chem">8/12 = 2/3</span>, <span class="chem">15/12 = 5/4</span>.<br>(c) <span class="chem">E(X) = (n + 1)/2</span>, <span class="chem">E(X^2) = (n + 1)(2n + 1)/6</span>, <span class="chem">Var(X) = (n + 1)[2(2n + 1) - 3(n + 1)]/12 = (n + 1)(n - 1)/12</span>.<br>(d) Score <span class="chem">= 5X</span>: mean <span class="chem">5(n + 1)/2</span>, variance <span class="chem">25(n^2 - 1)/12</span>.<br>(e) Score <span class="chem">Y = 4X - 1</span>, <span class="chem">Var(Y) = 16(n^2 - 1)/12 = 160 ⇒ n^2 = 121 ⇒ n = 11</span>.<br>(f) <span class="chem">E(Y) = 4(6) - 1 = 23</span>.<br>(g) <span class="chem">E(U) = n/2</span>, <span class="chem">E(U^2) = ∫_0^n u^2/n du = n^2/3</span>, so <span class="chem">Var(U) = n^2/3 - n^2/4 = n^2/12</span>. The ratio <span class="chem">(n^2 - 1)/n^2 = 1 - 1/n^2 → 1</span>.</p>',
      markscheme: [
        'A1: (a) n = 2: Var = 1/4.',
        'A1: (a) n = 3: Var = 2/3.',
        'A1: (a) n = 4: Var = 5/4.',
        'A1: (b) Substitutes n = 2, 3, 4 into (n² − 1)/12 and obtains 1/4, 2/3, 5/4.',
        'M1: (c) Writes E(X) = (1/n)Σr and E(X²) = (1/n)Σr².',
        'A1: (c) E(X) = (n + 1)/2.',
        'A1: (c) E(X²) = (n + 1)(2n + 1)/6.',
        'A1: (c) Simplifies Var = (n + 1)(2n + 1)/6 − (n + 1)²/4 to (n² − 1)/12 (AG).',
        'A1: (d) Mean 5(n + 1)/2.',
        'A1: (d) Variance 25(n² − 1)/12.',
        'M1: (e) Recognises the score is Y = 4X − 1.',
        'M1: (e) Uses Var(Y) = 16 Var(X): 16(n² − 1)/12 = 160.',
        'A1: (e) n = 11.',
        'A1: (f) E(Y) = 4E(X) − 1 = 23.',
        'M1: (g) Finds E(U²) = ∫_0^n u²/n du = n²/3 (with E(U) = n/2).',
        'A1: (g) Var(U) = n²/3 − n²/4 = n²/12 (AG).',
        'R1: (g) Var(X)/Var(U) = 1 − 1/n² → 1 as n → ∞: for large n the discrete and continuous uniform models have almost the same spread.'
      ],
      hints: [
        'Decode: an investigation in three stages: small cases, then a general proof using the two sum formulae, then applications using the linear-transformation rules E(aX + b) = aE(X) + b and Var(aX + b) = a²Var(X).',
        'For n = 3: E(X) = 2, E(X²) = (1 + 4 + 9)/3 = 14/3, so Var = 14/3 − 4.',
        'For (e), write the k-th label as 4k − 1: the score is a linear function of X.',
        'For (g), U is continuous: use integrals instead of sums.'
      ],
      solution: '<p><b>Decode:</b> compute → conjecture (given) → prove with sum formulae → apply with <span class="chem">aX + b</span> → compare with the continuous version.<br>(a) <span class="chem">n = 2</span>: <span class="chem">E = 3/2</span>, <span class="chem">E(X^2) = 5/2</span>, Var <span class="chem">= 5/2 - 9/4 = 1/4</span>. <span class="chem">n = 3</span>: <span class="chem">14/3 - 4 = 2/3</span>. <span class="chem">n = 4</span>: <span class="chem">E = 5/2</span>, <span class="chem">E(X^2) = 30/4</span>, Var <span class="chem">= 15/2 - 25/4 = 5/4</span>.<br>(b) <span class="chem">(4 - 1)/12 = 1/4</span>, <span class="chem">(9 - 1)/12 = 2/3</span>, <span class="chem">(16 - 1)/12 = 5/4</span>.<br>(c) <span class="chem">E(X) = (1/n)(n(n + 1)/2) = (n + 1)/2</span>; <span class="chem">E(X^2) = (n + 1)(2n + 1)/6</span>. <span class="chem">Var(X) = (n + 1)(2n + 1)/6 - (n + 1)^2/4 = (n + 1)(4n + 2 - 3n - 3)/12 = (n + 1)(n - 1)/12 = (n^2 - 1)/12</span>.<br>(d) Score <span class="chem">5X</span>: <span class="chem">E = 5(n + 1)/2</span>, <span class="chem">Var = 25(n^2 - 1)/12</span>.<br>(e) The labels are <span class="chem">4k - 1</span> for <span class="chem">k = 1, …, n</span>, so <span class="chem">Y = 4X - 1</span> and <span class="chem">Var(Y) = 16(n^2 - 1)/12 = 160 ⇒ n^2 - 1 = 120 ⇒ n = 11</span>.<br>(f) <span class="chem">E(Y) = 4(11 + 1)/2 - 1 = 23</span>.<br>(g) <span class="chem">E(U) = ∫_0^n u/n du = n/2</span>, <span class="chem">E(U^2) = ∫_0^n u^2/n du = n^2/3</span>, so <span class="chem">Var(U) = n^2/3 - n^2/4 = n^2/12</span>. Then <span class="chem">Var(X)/Var(U) = (n^2 - 1)/n^2 = 1 - 1/n^2 → 1</span>.</p>'
    }
  ]);
})();
