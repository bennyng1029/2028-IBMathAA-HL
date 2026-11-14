/* ==========================================================================
   Analysis Lab — questions-t4-1.js
   Question bank for Topic 4.1: Descriptive statistics, correlation and regression (SL 4.1–4.4, 4.10)
   20 original questions across foundation, exam, and challenge tiers.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.questions) return;

  S1.questions.register('t4-1', [
    {
      id: 't4-1-q001',
      level: 'sl',
      tier: 'foundation',
      type: 'mcq',
      marks: 2,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.1',
      stem: '<p>A school has <span class="chem">800</span> students divided into four year groups: <span class="chem">240</span> in Year 9, <span class="chem">200</span> in Year 10, <span class="chem">180</span> in Year 11, and <span class="chem">180</span> in Year 12. A student council takes a <strong>stratified random sample</strong> of <span class="chem">60</span> students altogether. How many Year 9 students should be selected?</p>',
      options: [
        '<span class="chem">18</span>',
        '<span class="chem">15</span>',
        '<span class="chem">20</span>',
        '<span class="chem">24</span>'
      ],
      answer: 0,
      misconception: {
        1: 'You divided 60 equally across the 4 year groups (60 / 4 = 15), which ignores the different year-group sizes.',
        2: 'You took 1/3 of 60 instead of using the exact fraction 240 / 800 = 0.30.',
        3: 'You took 10% of 240 instead of scaling by the sampling fraction 60 / 800.'
      },
      hints: [
        'In stratified sampling, each stratum is sampled in proportion to its share of the total population: <span class="chem">(N_i / N) × n</span>.',
        'Compute <span class="chem">(240 / 800) × 60</span>.'
      ],
      solution: '<p>The proportion of Year 9 students in the population is <span class="chem">240 / 800 = 0.30</span>. Multiplying by the sample size <span class="chem">n = 60</span> gives <span class="chem">0.30 × 60 = 18</span> students.</p>'
    },
    {
      id: 't4-1-q002',
      level: 'sl',
      tier: 'foundation',
      type: 'mcq',
      marks: 2,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.1',
      stem: '<p>An airport researcher stands at the exit gate and interviews the first <span class="chem">25</span> passengers from Economy Class and the first <span class="chem">10</span> passengers from Business Class who walk past, until both target numbers are reached. What sampling technique is being used?</p>',
      options: [
        'Quota sampling',
        'Stratified random sampling',
        'Systematic sampling',
        'Simple random sampling'
      ],
      answer: 0,
      misconception: {
        1: 'Stratified sampling requires selecting individuals at random from a full list within each subgroup; here passengers were chosen by convenience as they walked past.',
        2: 'Systematic sampling selects every k-th passenger from an ordered list, not the first people to walk past.',
        3: 'Simple random sampling gives every passenger on the flight an equal chance of selection via a random draw.'
      },
      hints: [
        'Notice two features: the population is split into subgroups with fixed target counts, AND individuals are chosen non-randomly by convenience.'
      ],
      solution: '<p>When a population is divided into subgroups with fixed target sizes (quotas) but subjects are selected non-randomly as they arrive, the method is <strong>quota sampling</strong>.</p>'
    },
    {
      id: 't4-1-q003',
      level: 'sl',
      tier: 'foundation',
      type: 'numeric',
      marks: 3,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.2',
      stem: '<p>A box-and-whisker plot summarizes a dataset with lower quartile <span class="chem">Q_1 = 28</span>, median <span class="chem">M = 36</span>, and upper quartile <span class="chem">Q_3 = 48</span>. Using the <span class="chem">1.5 × IQR</span> criterion, find the <strong>upper outlier boundary</strong> (fence).</p>',
      answer: 78,
      tolerance: 0.01,
      sigfigs: '2-3',
      hints: [
        'First compute the interquartile range <span class="chem">IQR = Q_3 - Q_1</span>.',
        'Then evaluate <span class="chem">Q_3 + 1.5 × IQR</span>.'
      ],
      solution: '<p><span class="chem">IQR = 48 - 28 = 20</span> <b>[A1]</b>.<br>Upper fence <span class="chem">= Q_3 + 1.5 × IQR = 48 + 1.5(20) = 48 + 30 = 78</span> <b>[M1 A1]</b>.</p>'
    },
    {
      id: 't4-1-q004',
      level: 'sl',
      tier: 'foundation',
      type: 'numeric',
      marks: 3,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.2',
      stem: '<p>For the same dataset with <span class="chem">Q_1 = 28</span> and <span class="chem">Q_3 = 48</span>, find the <strong>lower outlier boundary</strong> (<span class="chem">Q_1 - 1.5 × IQR</span>).</p>',
      answer: -2,
      tolerance: 0.01,
      sigfigs: '1-3',
      hints: [
        'Use <span class="chem">IQR = 48 - 28 = 20</span>.',
        'Compute <span class="chem">28 - 1.5 × 20</span>.'
      ],
      solution: '<p><span class="chem">IQR = 20</span> <b>[A1]</b>. Lower fence <span class="chem">= Q_1 - 1.5 × IQR = 28 - 30 = -2</span> <b>[M1 A1]</b>.</p>'
    },
    {
      id: 't4-1-q005',
      level: 'sl',
      tier: 'foundation',
      type: 'mcq',
      marks: 3,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.3',
      stem: '<p>A dataset <span class="chem">X</span> has mean <span class="chem">x̄ = 12</span> and standard deviation <span class="chem">σ_X = 2.5</span>. Each value is transformed using the linear coding <span class="chem">Y = 50 - 4X</span>. What are the mean <span class="chem">ȳ</span> and standard deviation <span class="chem">σ_Y</span> of <span class="chem">Y</span>?</p>',
      options: [
        '<span class="chem">ȳ = 2</span> and <span class="chem">σ_Y = 10</span>',
        '<span class="chem">ȳ = 2</span> and <span class="chem">σ_Y = -10</span>',
        '<span class="chem">ȳ = 2</span> and <span class="chem">σ_Y = 60</span>',
        '<span class="chem">ȳ = -48</span> and <span class="chem">σ_Y = 10</span>'
      ],
      answer: 0,
      misconception: {
        1: 'Standard deviation is a measure of spread and can never be negative! Always multiply by |a| = |−4| = 4.',
        2: 'Adding 50 shifts the mean but has zero effect on the standard deviation; do not add 50 to 4 × 2.5.',
        3: 'You forgot to add the constant shift +50 when computing the new mean ȳ = 50 − 4(12).'
      },
      hints: [
        'Under <span class="chem">Y = aX + b</span>, the new mean is <span class="chem">ȳ = a x̄ + b</span> and the new standard deviation is <span class="chem">σ_Y = |a|σ_X</span>.'
      ],
      solution: '<p><span class="chem">ȳ = 50 - 4(12) = 50 - 48 = 2</span> <b>[A1]</b>.<br><span class="chem">σ_Y = |-4| × 2.5 = 4 × 2.5 = 10</span> <b>[M1 A1]</b>.</p>'
    },
    {
      id: 't4-1-q006',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.3',
      stem: '<p>The discrete values <span class="chem">2, 4, 6, 8</span> occur with frequencies <span class="chem">3, k, 5, 2</span> respectively. Given that the mean of the dataset is <span class="chem">x̄ = 5.0</span>, find the value of <span class="chem">k</span>.</p>',
      answer: 2,
      tolerance: 0.01,
      sigfigs: '1-3',
      hints: [
        'Set up <span class="chem">x̄ = (Σ f_i x_i) / (Σ f_i) = 5</span>.',
        'Here <span class="chem">Σ f_i = 3 + k + 5 + 2 = 10 + k</span> and <span class="chem">Σ f_i x_i = 3(2) + k(4) + 5(6) + 2(8) = 52 + 4k</span>.'
      ],
      solution: '<p>Using the mean formula:<br><span class="chem">(6 + 4k + 30 + 16) / (3 + k + 5 + 2) = 5</span> <b>[M1 A1]</b><br><span class="chem">52 + 4k = 5(10 + k) = 50 + 5k</span> <b>[M1]</b><br><span class="chem">k = 2</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-1-q007',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.3',
      stem: '<p>The masses (in grams) of <span class="chem">20</span> pebbles are summarized in a grouped frequency table: <span class="chem">4</span> pebbles in <span class="chem">10 ≤ m &lt; 20</span>, <span class="chem">10</span> pebbles in <span class="chem">20 ≤ m &lt; 30</span>, and <span class="chem">6</span> pebbles in <span class="chem">30 ≤ m &lt; 40</span>. Using mid-interval values, calculate an estimate of the standard deviation <span class="chem">σ</span> of the masses.</p>',
      answer: 7,
      tolerance: 0.05,
      sigfigs: '1-3',
      unit: 'g',
      hints: [
        'The mid-interval values are <span class="chem">15, 25, 35</span> with frequencies <span class="chem">4, 10, 6</span>.',
        'First find <span class="chem">m̄ = (4×15 + 10×25 + 6×35)/20 = 26</span>, then compute <span class="chem">σ = sqrt((4(15-26)^2 + 10(25-26)^2 + 6(35-26)^2)/20)</span> (or read <span class="mono">σx</span> from GDC).'
      ],
      solution: '<p>Midpoints are <span class="chem">15, 25, 35</span> <b>[M1]</b>.<br>Mean <span class="chem">m̄ = (60 + 250 + 210) / 20 = 520 / 20 = 26</span> g <b>[A1]</b>.<br>Variance <span class="chem">σ^2 = (4(-11)^2 + 10(-1)^2 + 6(9)^2) / 20 = (484 + 10 + 486) / 20 = 980 / 20 = 49</span>, so <span class="chem">σ = √49 = 7</span> g <b>[M1 A1]</b>.</p>'
    },
    {
      id: 't4-1-q008',
      level: 'sl',
      tier: 'exam',
      type: 'mcq',
      marks: 3,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.4, 4.10',
      stem: '<p>In a study of two uncontrolled variables <span class="chem">x</span> (hours of sleep) and <span class="chem">y</span> (memory score), both the regression line of <span class="chem">y</span> on <span class="chem">x</span> (<span class="chem">L_1: y = ax + b</span>) and the regression line of <span class="chem">x</span> on <span class="chem">y</span> (<span class="chem">L_2: x = cy + d</span>) are calculated. Which line should be used to estimate the hours of sleep <span class="chem">x</span> for a student whose memory score is <span class="chem">y = 75</span>?</p>',
      options: [
        'Line <span class="chem">L_2</span> (<span class="chem">x</span> on <span class="chem">y</span>), by substituting <span class="chem">y = 75</span> into <span class="chem">x = cy + d</span>',
        'Line <span class="chem">L_1</span> (<span class="chem">y</span> on <span class="chem">x</span>), by setting <span class="chem">75 = ax + b</span> and solving for <span class="chem">x</span>',
        'Either <span class="chem">L_1</span> or <span class="chem">L_2</span>, because both lines give the exact same value of <span class="chem">x</span>',
        'Average the two values of <span class="chem">x</span> obtained from <span class="chem">L_1</span> and <span class="chem">L_2</span>'
      ],
      answer: 0,
      misconception: {
        1: 'Rearranging the y-on-x line to solve for x minimizes vertical residuals instead of horizontal residuals, giving a biased estimate whenever |r| < 1.',
        2: 'The two regression lines only give the same value at the mean point (x̄, ȳ) or when |r| = 1.',
        3: 'You never average the two lines; each line is optimal for its own prediction direction.'
      },
      hints: [
        'When neither variable is controlled and <span class="chem">y</span> is given to predict <span class="chem">x</span>, which residuals should be minimized?'
      ],
      solution: '<p>To estimate <span class="chem">x</span> from a given value of <span class="chem">y</span> when neither variable is controlled, you must use the regression line of <strong><span class="chem">x</span> on <span class="chem">y</span></strong> (<span class="chem">L_2: x = cy + d</span>).</p>'
    },
    {
      id: 't4-1-q009',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.4, 4.10',
      stem: '<p>For a bivariate dataset, the regression line of <span class="chem">y</span> on <span class="chem">x</span> is <span class="chem">y = 1.5x + 4</span> and the regression line of <span class="chem">x</span> on <span class="chem">y</span> is <span class="chem">x = 0.5y + 1</span>. Find the sample mean <span class="chem">x̄</span>.</p>',
      answer: 12,
      tolerance: 0.01,
      sigfigs: '2-3',
      hints: [
        'Both regression lines intersect at the mean point <span class="chem">(x̄, ȳ)</span>.',
        'Substitute <span class="chem">ȳ = 1.5x̄ + 4</span> into <span class="chem">x̄ = 0.5ȳ + 1</span> and solve for <span class="chem">x̄</span>.'
      ],
      solution: '<p>At the mean point <span class="chem">(x̄, ȳ)</span>, both equations hold simultaneously <b>[M1]</b>:<br><span class="chem">x̄ = 0.5(1.5x̄ + 4) + 1 = 0.75x̄ + 2 + 1 = 0.75x̄ + 3</span> <b>[M1 A1]</b><br><span class="chem">0.25x̄ = 3 ⇒ x̄ = 12</span> (and <span class="chem">ȳ = 22</span>) <b>[A1]</b>.</p>'
    },
    {
      id: 't4-1-q010',
      level: 'sl',
      tier: 'challenge',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.4, 4.10',
      stem: '<p><em>Extension (beyond the AA guide).</em> For a bivariate dataset, the regression line of <span class="chem">y</span> on <span class="chem">x</span> is <span class="chem">y = -0.8x + 25</span> and the regression line of <span class="chem">x</span> on <span class="chem">y</span> is <span class="chem">x = -0.8y + 20</span>. Find the exact value of Pearson\'s correlation coefficient <span class="chem">r</span>.</p>',
      answer: -0.8,
      tolerance: 0.005,
      sigfigs: '1-3',
      hints: [
        'Recall that <span class="chem">r^2 = a · c</span>, where <span class="chem">a = -0.8</span> is the gradient of <span class="chem">y</span> on <span class="chem">x</span> and <span class="chem">c = -0.8</span> is the coefficient of <span class="chem">y</span> in <span class="chem">x</span> on <span class="chem">y</span>.',
        'Since the slopes are negative, <span class="chem">r</span> must also be negative.'
      ],
      solution: '<p>Using <span class="chem">r^2 = a · c = (-0.8)(-0.8) = 0.64</span> <b>[M1 A1]</b>.<br>Because the correlation is negative (<span class="chem">a &lt; 0, c &lt; 0</span>), <span class="chem">r = -√0.64 = -0.8</span> <b>[R1 A1]</b>.</p>'
    },
    {
      id: 't4-1-q011',
      level: 'sl',
      tier: 'exam',
      type: 'multi',
      marks: 3,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.3, 4.4',
      stem: '<p>A bivariate dataset <span class="chem">(x_i, y_i)</span> has correlation coefficient <span class="chem">r = 0.82</span>, mean point <span class="chem">(x̄, ȳ) = (10, 20)</span>, and standard deviations <span class="chem">σ_x = 3</span>, <span class="chem">σ_y = 5</span>. Select <strong>all</strong> statements that are always true.</p>',
      options: [
        'Both the <span class="chem">y</span>-on-<span class="chem">x</span> and <span class="chem">x</span>-on-<span class="chem">y</span> regression lines pass through <span class="chem">(10, 20)</span>.',
        'If every <span class="chem">x_i</span> is replaced by <span class="chem">u_i = 2x_i + 7</span>, the correlation between <span class="chem">u</span> and <span class="chem">y</span> is still <span class="chem">0.82</span>.',
        'If every <span class="chem">y_i</span> is replaced by <span class="chem">v_i = 100 - y_i</span>, the correlation between <span class="chem">x</span> and <span class="chem">v</span> becomes <span class="chem">-0.82</span>.',
        'The <span class="chem">y</span>-on-<span class="chem">x</span> and <span class="chem">x</span>-on-<span class="chem">y</span> regression lines are identical on the coordinate plane.'
      ],
      answer: [0, 1, 2],
      misconception: {
        3: 'The two regression lines coincide if and only if |r| = 1. Since r = 0.82 < 1, the two lines intersect at (10, 20) with different slopes.'
      },
      hints: [
        'Check how linear coding affects <span class="chem">r</span>, and remember when the two regression lines coincide.'
      ],
      solution: '<p>Statements A, B, and C are true: both lines always pass through <span class="chem">(x̄, ȳ)</span>, positive linear scaling preserves <span class="chem">r = 0.82</span>, and multiplying one variable by <span class="chem">-1</span> flips the sign to <span class="chem">-0.82</span>. Statement D is false because <span class="chem">|r| = 0.82 ≠ 1</span>.</p>'
    },
    {
      id: 't4-1-q012',
      level: 'sl',
      tier: 'exam',
      type: 'order',
      marks: 3,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.4',
      stem: '<p>Order the following four steps to find a linear regression estimate of <span class="chem">y</span> at <span class="chem">x = x_0</span> and judge whether it is reliable. Each step uses the result of the step before it.</p>',
      options: [
        'Enter the <span class="chem">x</span>-values in <span class="mono">L1</span> and the <span class="chem">y</span>-values in <span class="mono">L2</span> on the GDC.',
        'Run <span class="mono">LinReg(ax+b) L1, L2</span> to obtain the regression line of <span class="chem">y</span> on <span class="chem">x</span>, <span class="chem">y = ax + b</span>, and the correlation coefficient <span class="chem">r</span>.',
        'Substitute <span class="chem">x = x_0</span> into <span class="chem">y = ax + b</span> to obtain the estimate <span class="chem">ŷ</span>.',
        'Judge the reliability of <span class="chem">ŷ</span>: check that <span class="chem">|r|</span> is close to <span class="chem">1</span> and that <span class="chem">x_0</span> lies within <span class="chem">[x_{min}, x_{max}]</span> (interpolation, not extrapolation).'
      ],
      answer: [0, 1, 2, 3],
      hints: [
        'Each step needs the output of the one before: the lists feed <span class="mono">LinReg</span>, the line gives <span class="chem">ŷ</span>, and only then can you judge how reliable <span class="chem">ŷ</span> is.'
      ],
      solution: '<p>(1) Enter the data in <span class="mono">L1</span> and <span class="mono">L2</span>; (2) run <span class="mono">LinReg(ax+b)</span> to get <span class="chem">y = ax + b</span> and <span class="chem">r</span>; (3) substitute <span class="chem">x_0</span> to get <span class="chem">ŷ</span>; (4) judge reliability: the estimate is reliable only if <span class="chem">|r|</span> is close to <span class="chem">1</span> and <span class="chem">x_0</span> is inside the data range (interpolation).</p>'
    },
    {
      id: 't4-1-q013',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.3',
      stem: '<p>A group of <span class="chem">12</span> students has a mean test score of <span class="chem">70</span>, and a second group of <span class="chem">8</span> students has a mean test score of <span class="chem">85</span>. Find the combined mean score of all <span class="chem">20</span> students.</p>',
      answer: 76,
      tolerance: 0.01,
      sigfigs: '2-3',
      hints: [
        'Find the sum of scores in each group using <span class="chem">Σ x = n x̄</span>.',
        'Add the two sums together and divide by the combined sample size <span class="chem">12 + 8 = 20</span>.'
      ],
      solution: '<p>Total sum of scores <span class="chem">= 12(70) + 8(85) = 840 + 680 = 1520</span> <b>[M1 A1]</b>.<br>Combined mean <span class="chem">= 1520 / 20 = 76</span> <b>[M1 A1]</b>.</p>'
    },
    {
      id: 't4-1-q014',
      level: 'sl',
      tier: 'challenge',
      type: 'numeric',
      marks: 5,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.3',
      stem: '<p>A dataset of <span class="chem">n = 8</span> numbers has mean <span class="chem">x̄ = 5</span> and population variance <span class="chem">σ^2 = 9</span>. Two new numbers, <span class="chem">1</span> and <span class="chem">9</span>, are added to the dataset so there are now <span class="chem">10</span> numbers. Find the <strong>new population variance</strong> of all <span class="chem">10</span> numbers.</p>',
      answer: 10.4,
      tolerance: 0.02,
      sigfigs: 3,
      hints: [
        'Notice that the two new numbers <span class="chem">1</span> and <span class="chem">9</span> have mean <span class="chem">(1 + 9)/2 = 5</span>, so the overall mean of all 10 numbers is still <span class="chem">x̄_{new} = 5</span>!',
        'For the original 8 numbers, <span class="chem">Σ(x_i - 5)^2 = n σ^2 = 8 × 9 = 72</span>. Add <span class="chem">(1 - 5)^2 + (9 - 5)^2</span> and divide by <span class="chem">10</span>.'
      ],
      solution: '<p>Original sum <span class="chem">Σ x_i = 8 × 5 = 40</span>; new sum <span class="chem">= 40 + 1 + 9 = 50</span>, so <span class="chem">x̄_{new} = 50 / 10 = 5</span> <b>[A1]</b>.<br>Original sum of squared deviations <span class="chem">Σ_{i=1}^8 (x_i - 5)^2 = 8 × 9 = 72</span> <b>[M1 A1]</b>.<br>New sum of squared deviations <span class="chem">= 72 + (1 - 5)^2 + (9 - 5)^2 = 72 + 16 + 16 = 104</span> <b>[M1]</b>.<br>New variance <span class="chem">σ_{new}^2 = 104 / 10 = 10.4</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-1-q015',
      level: 'sl',
      tier: 'exam',
      type: 'short',
      marks: 6,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.2',
      stem: '<p>A cumulative frequency study of the daily commuting times <span class="chem">t</span> (in minutes) of <span class="chem">120</span> office workers gives minimum <span class="chem">8</span>, lower quartile <span class="chem">Q_1 = 22</span>, median <span class="chem">M = 31</span>, upper quartile <span class="chem">Q_3 = 42</span>, and maximum <span class="chem">78</span>.<br>(a) Find the interquartile range (<span class="chem">IQR</span>) and determine how many workers have a commuting time greater than <span class="chem">42</span> minutes. <strong>[2 marks]</strong><br>(b) Show mathematically that the maximum value <span class="chem">78</span> minutes is an outlier, and state the range of commuting times that would be classified as upper outliers. <strong>[4 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">IQR = 42 - 22 = 20</span> minutes; <span class="chem">25%</span> of <span class="chem">120 = 30</span> workers.<br>(b) Upper fence <span class="chem">= Q_3 + 1.5 × IQR = 42 + 1.5(20) = 72</span> minutes. Since <span class="chem">78 &gt; 72</span>, <span class="chem">78</span> is an outlier. Any commuting time strictly greater than <span class="chem">72</span> minutes is an upper outlier.</p>',
      markscheme: [
        'A1: Finds IQR = 42 − 22 = 20 minutes.',
        'A1: Finds 0.25 × 120 = 30 workers above Q₃ = 42 minutes.',
        'M1: Substitutes into the upper fence formula Q₃ + 1.5 × IQR = 42 + 1.5(20).',
        'A1: Evaluates the upper fence as 72 minutes.',
        'R1: Explicitly states 78 > 72 to justify that 78 is an outlier.',
        'A1: States that the upper outliers are the commuting times t > 72 minutes.'
      ],
      solution: '<p>(a) <span class="chem">IQR = Q_3 - Q_1 = 42 - 22 = 20</span> minutes. Since <span class="chem">Q_3</span> is the 75th percentile, <span class="chem">25%</span> of the <span class="chem">120</span> workers (<span class="chem">0.25 × 120 = 30</span> workers) commute for more than <span class="chem">42</span> minutes.<br>(b) Upper outlier boundary <span class="chem">= Q_3 + 1.5 × IQR = 42 + 1.5(20) = 72</span> minutes. Because <span class="chem">78 &gt; 72</span>, the maximum <span class="chem">78</span> is an outlier, and any time <span class="chem">t &gt; 72</span> minutes is classified as an upper outlier.</p>'
    },
    {
      id: 't4-1-q016',
      level: 'sl',
      tier: 'exam',
      type: 'short',
      marks: 7,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.4, 4.10',
      stem: '<p>The heights <span class="chem">x</span> (in cm, where <span class="chem">155 ≤ x ≤ 190</span>) and masses <span class="chem">y</span> (in kg, where <span class="chem">50 ≤ y ≤ 88</span>) of <span class="chem">14</span> rowers are recorded. The regression line of <span class="chem">y</span> on <span class="chem">x</span> is <span class="chem">y = 0.90x - 85.5</span> and the regression line of <span class="chem">x</span> on <span class="chem">y</span> is <span class="chem">x = 0.80y + 117.4</span>.<br>(a) Find the mean height <span class="chem">x̄</span> and mean mass <span class="chem">ȳ</span> of the rowers. <strong>[3 marks]</strong><br>(b) Estimate the height of a rower whose mass is <span class="chem">75</span> kg, justifying your choice of regression line. <strong>[2 marks]</strong><br>(c) Explain why it would be unreliable to use the <span class="chem">y</span>-on-<span class="chem">x</span> regression line to estimate the mass of a child of height <span class="chem">120</span> cm. <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">x̄ = 175</span> cm, <span class="chem">ȳ = 72</span> kg.<br>(b) Using the <span class="chem">x</span> on <span class="chem">y</span> line (since <span class="chem">y = 75</span> is given to estimate <span class="chem">x</span>): <span class="chem">x = 0.80(75) + 117.4 = 177.4</span> cm.<br>(c) <span class="chem">x = 120</span> cm lies far outside the observed data range <span class="chem">[155, 190]</span> cm, so the estimate relies on <strong>extrapolation</strong> and is unreliable.</p>',
      markscheme: [
        'M1: Equates or substitutes the two regression lines at (x̄, ȳ): x̄ = 0.80(0.90x̄ − 85.5) + 117.4.',
        'A1: Finds x̄ = 175 cm.',
        'A1: Finds ȳ = 72 kg.',
        'R1: Selects the x-on-y regression line x = 0.80y + 117.4 because mass y is given to estimate height x.',
        'A1: Calculates x = 0.80(75) + 117.4 = 177.4 cm.',
        'R1: Identifies that x = 120 cm is outside the sample domain [155, 190] cm.',
        'R1: Uses the term extrapolation (or explains that the adult linear relationship may not hold for children).'
      ],
      solution: '<p>(a) Both regression lines intersect at <span class="chem">(x̄, ȳ)</span>: substituting <span class="chem">ȳ = 0.90x̄ - 85.5</span> into <span class="chem">x̄ = 0.80ȳ + 117.4</span> gives <span class="chem">x̄ = 0.72x̄ - 68.4 + 117.4 ⇒ 0.28x̄ = 49 ⇒ x̄ = 175</span> cm and <span class="chem">ȳ = 0.90(175) - 85.5 = 72</span> kg.<br>(b) Substitute <span class="chem">y = 75</span> into the <span class="chem">x</span>-on-<span class="chem">y</span> line: <span class="chem">x = 0.80(75) + 117.4 = 177.4</span> cm.<br>(c) Unreliable because <span class="chem">x = 120</span> cm is outside <span class="chem">[155, 190]</span> cm (extrapolation).</p>'
    },
    {
      id: 't4-1-q017',
      level: 'sl',
      tier: 'challenge',
      type: 'numeric',
      marks: 5,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.4, 4.10',
      stem: '<p><em>Extension (beyond the AA guide).</em> For two variables <span class="chem">x</span> and <span class="chem">y</span>, the standard deviation of <span class="chem">y</span> is three times the standard deviation of <span class="chem">x</span> (<span class="chem">σ_y = 3σ_x</span>). Given that the gradient of the regression line of <span class="chem">y</span> on <span class="chem">x</span> is <span class="chem">a = 2.4</span>, find the exact value of the coefficient <span class="chem">c</span> in the regression line of <span class="chem">x</span> on <span class="chem">y</span> (<span class="chem">x = cy + d</span>).</p>',
      answer: 0.26666666666666666,
      answerDisplay: '4/15',
      tolerance: { abs: 1e-9 },
      hints: [
        'Use <span class="chem">a = r(σ_y / σ_x) = 3r</span> to find Pearson\'s correlation coefficient <span class="chem">r</span>.',
        'Then substitute <span class="chem">r</span> into <span class="chem">c = r(σ_x / σ_y) = r / 3</span> (or use <span class="chem">a · c = r^2</span>).'
      ],
      solution: '<p>Since <span class="chem">a = r(σ_y / σ_x) = 3r = 2.4</span>, we get <span class="chem">r = 2.4 / 3 = 0.8</span> <b>[M1 A1]</b>.<br>Then <span class="chem">c = r(σ_x / σ_y) = 0.8 / 3 = 4 / 15</span> <b>[M1 A2]</b>.</p>'
    },
    {
      id: 't4-1-q018',
      level: 'sl',
      tier: 'challenge',
      type: 'short',
      marks: 6,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.2, 4.3',
      stem: '<p>Six positive integers are arranged in ascending order: <span class="chem">a, b, 10, 12, c, d</span>.<br>The unique mode is <span class="chem">15</span>, the range is <span class="chem">12</span>, and the mean of all six integers is <span class="chem">x̄ = 10.5</span>.<br>(a) State the values of <span class="chem">c</span> and <span class="chem">d</span>, and hence find <span class="chem">a</span>. <strong>[3 marks]</strong><br>(b) Find the value of <span class="chem">b</span> and the interquartile range (<span class="chem">IQR = Q_3 - Q_1</span>) of the six integers. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">c = 15, d = 15</span>; since <span class="chem">d - a = 12</span>, <span class="chem">a = 15 - 12 = 3</span>.<br>(b) Sum <span class="chem">= 6 × 10.5 = 63 ⇒ 3 + b + 10 + 12 + 15 + 15 = 63 ⇒ b = 8</span>. Since <span class="chem">Q_1 = b = 8</span> and <span class="chem">Q_3 = c = 15</span>, <span class="chem">IQR = 15 - 8 = 7</span>.</p>',
      markscheme: [
        'R1: Deduces that for 15 (> 12) to be the unique mode in an ascending list, both c and d must equal 15.',
        'A1: States c = 15 and d = 15.',
        'A1: Uses range = d − a = 12 to find a = 15 − 12 = 3.',
        'M1: Sets up the sum equation 3 + b + 10 + 12 + 15 + 15 = 6 × 10.5 = 63.',
        'A1: Finds b = 8.',
        'A1: Identifies Q₁ = 8 and Q₃ = 15 for n = 6, giving IQR = 15 − 8 = 7.'
      ],
      solution: '<p>(a) Because <span class="chem">15 &gt; 12</span> is the unique mode and the six integers are in ascending order, <span class="chem">15</span> must appear at least twice at the upper end, so <span class="chem">c = 15</span> and <span class="chem">d = 15</span>. Then <span class="chem">d - a = 12 ⇒ 15 - a = 12 ⇒ a = 3</span>.<br>(b) The sum of the six numbers is <span class="chem">6 × 10.5 = 63</span>, so <span class="chem">3 + b + 10 + 12 + 15 + 15 = 63 ⇒ 55 + b = 63 ⇒ b = 8</span>. For <span class="chem">n = 6</span>, the lower half is <span class="chem">3, 8, 10</span> (<span class="chem">Q_1 = 8</span>) and the upper half is <span class="chem">12, 15, 15</span> (<span class="chem">Q_3 = 15</span>), so <span class="chem">IQR = 15 - 8 = 7</span>.</p>'
    },
    {
      id: 't4-1-q019',
      level: 'sl',
      tier: 'exam',
      type: 'short',
      marks: 8,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.4',
      stem: '<p>The number of hours of revision <span class="chem">x</span> and the test score <span class="chem">y</span> of <span class="chem">8</span> students are shown below.<br>Hours of revision <span class="chem">x</span>: <span class="chem">2, 3, 5, 6, 8, 9, 11, 12</span><br>Test score <span class="chem">y</span>: <span class="chem">41, 46, 50, 57, 60, 66, 71, 77</span><br>(a) Find Pearson\'s correlation coefficient <span class="chem">r</span>. <strong>[2 marks]</strong><br>(b) Find the equation of the regression line of <span class="chem">y</span> on <span class="chem">x</span>. <strong>[2 marks]</strong><br>(c) Interpret the gradient of this line in context. <strong>[1 mark]</strong><br>(d) Use your regression line to estimate the test score of a student who revises for <span class="chem">10</span> hours. <strong>[2 marks]</strong><br>(e) Explain why the line should not be used to estimate the score of a student who revises for <span class="chem">20</span> hours. <strong>[1 mark]</strong></p>',
      answer: '<p>(a) <span class="chem">r = 0.993</span><br>(b) <span class="chem">y = 3.42x + 34.5</span><br>(c) Each extra hour of revision is associated with an increase of about <span class="chem">3.42</span> marks in the test score.<br>(d) <span class="chem">y ≈ 68.8</span> (accept <span class="chem">68.7</span> from the rounded coefficients).<br>(e) <span class="chem">x = 20</span> is outside the data range <span class="chem">2 ≤ x ≤ 12</span>, so the estimate would be an extrapolation.</p>',
      markscheme: [
        'M1: Enters x in L1 and y in L2 and uses the GDC (LinReg(ax+b)).',
        'A1: r = 0.993.',
        'A1: Gradient a = 3.42 (3.4239…).',
        'A1: Intercept b = 34.5 (34.533…), giving y = 3.42x + 34.5.',
        'A1: Each extra hour of revision is associated with about 3.42 more marks, on average.',
        'M1: Substitutes x = 10 into the regression line.',
        'A1: y ≈ 68.8 (accept 68.7).',
        'R1: 20 hours is outside the data range (2 to 12 hours), so this would be extrapolation and is unreliable.'
      ],
      hints: [
        'Enter <span class="chem">x</span> in <span class="mono">L1</span> and <span class="chem">y</span> in <span class="mono">L2</span>, then run <span class="mono">LinReg(ax+b) L1, L2</span>: the GDC gives <span class="chem">a</span>, <span class="chem">b</span> and <span class="chem">r</span>.',
        'The gradient <span class="chem">a</span> is the change in <span class="chem">y</span> for each extra unit of <span class="chem">x</span>. Compare <span class="chem">x = 20</span> with the smallest and largest <span class="chem">x</span>-values.'
      ],
      solution: '<p>(a) From the GDC, <span class="chem">r = 0.99290… ≈ 0.993</span> <b>[M1 A1]</b>.<br>(b) <span class="chem">a = 3.4239…</span> and <span class="chem">b = 34.533…</span>, so <span class="chem">y = 3.42x + 34.5</span> <b>[A1 A1]</b>.<br>(c) For each extra hour of revision, the test score increases by about <span class="chem">3.42</span> marks on average <b>[A1]</b>.<br>(d) <span class="chem">y = 3.4239(10) + 34.533 = 68.77… ≈ 68.8</span> <b>[M1 A1]</b>.<br>(e) <span class="chem">x = 20</span> lies outside the observed range <span class="chem">2 ≤ x ≤ 12</span>, so the estimate would be an extrapolation <b>[R1]</b>.</p>'
    },
    {
      id: 't4-1-q020',
      level: 'sl',
      tier: 'exam',
      type: 'short',
      marks: 4,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.2',
      stem: '<p>The test scores of two classes are summarized by these five-number summaries.<br>Class A: minimum <span class="chem">32</span>, <span class="chem">Q_1 = 48</span>, median <span class="chem">60</span>, <span class="chem">Q_3 = 74</span>, maximum <span class="chem">90</span>.<br>Class B: minimum <span class="chem">45</span>, <span class="chem">Q_1 = 58</span>, median <span class="chem">66</span>, <span class="chem">Q_3 = 72</span>, maximum <span class="chem">84</span>.<br>Compare the two distributions, referring to one measure of centre and one measure of spread. <strong>[4 marks]</strong></p>',
      answer: '<p>Medians: Class B <span class="chem">66</span> &gt; Class A <span class="chem">60</span>, so Class B generally scored higher.<br><span class="chem">IQR</span>s: Class A <span class="chem">74 - 48 = 26</span>, Class B <span class="chem">72 - 58 = 14</span>, so the scores of Class A are more spread out (Class B is more consistent).</p>',
      markscheme: [
        'A1: States both medians, 60 (Class A) and 66 (Class B).',
        'R1: Concludes in context that Class B generally scored higher, because its median is higher.',
        'A1: Finds IQR = 74 − 48 = 26 for Class A and IQR = 72 − 58 = 14 for Class B (or uses the ranges 58 and 39).',
        'R1: Concludes in context that the scores of Class A are more spread out (less consistent).'
      ],
      hints: [
        'For centre compare the medians. For spread find <span class="chem">IQR = Q_3 - Q_1</span> for each class.',
        'Always say what each comparison means for the students\' scores.'
      ],
      solution: '<p>Centre: the median of Class B (<span class="chem">66</span>) is higher than that of Class A (<span class="chem">60</span>) <b>[A1]</b>, so Class B generally scored higher <b>[R1]</b>.<br>Spread: <span class="chem">IQR_A = 74 - 48 = 26</span> and <span class="chem">IQR_B = 72 - 58 = 14</span> <b>[A1]</b>, so the middle 50% of Class A\'s scores are more spread out and Class B is more consistent <b>[R1]</b>.</p>'
    }
  ]);
})();
