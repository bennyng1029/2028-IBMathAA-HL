/* ==========================================================================
   Analysis Lab — questions-t4-1.js
   Question bank for Topic 4.1: Descriptive statistics, correlation and regression (SL 4.1–4.4, 4.10)
   59 original questions across foundation, exam, and challenge tiers.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.questions) return;

  S1.questions.register('t4-1', [
    {
      id: 't4-1-q001',
      topic: 't4-1',
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
      topic: 't4-1',
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
      topic: 't4-1',
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
      topic: 't4-1',
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
      topic: 't4-1',
      level: 'sl',
      tier: 'foundation',
      type: 'mcq',
      marks: 2,
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
      solution: '<p><span class="chem">ȳ = 50 - 4(12) = 50 - 48 = 2</span> <b>[A1]</b>.<br><span class="chem">σ_Y = |-4| × 2.5 = 4 × 2.5 = 10</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-1-q006',
      topic: 't4-1',
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
      topic: 't4-1',
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
      topic: 't4-1',
      level: 'sl',
      tier: 'exam',
      type: 'mcq',
      marks: 2,
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
      topic: 't4-1',
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
      topic: 't4-1',
      level: 'sl',
      tier: 'challenge',
      type: 'numeric',
      marks: 3,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.4, 4.10',
      stem: '<p>A geography class records the altitude <span class="chem">x</span> km and the mean July air temperature <span class="chem">y</span> °C at 8 weather stations on a mountain.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Altitude <span class="chem">x</span> (km)</th><td class="num">0.2</td><td class="num">0.5</td><td class="num">0.9</td><td class="num">1.2</td><td class="num">1.6</td><td class="num">1.9</td><td class="num">2.3</td><td class="num">2.8</td></tr><tr><th scope="row">Temperature <span class="chem">y</span> (°C)</th><td class="num">24.1</td><td class="num">23.5</td><td class="num">19.8</td><td class="num">20.6</td><td class="num">16.2</td><td class="num">17.9</td><td class="num">12.4</td><td class="num">11.8</td></tr></tbody></table></div><p>The regression line of <span class="chem">x</span> on <span class="chem">y</span> is <span class="chem">x = cy + d</span>. Find the value of <span class="chem">c</span>.</p>',
      answer: -0.18603758790113362,
      sigfigs: 3,
      hints: [
        'Decode: “<span class="chem">x</span> on <span class="chem">y</span>” means that <span class="chem">x</span> is the variable being predicted and <span class="chem">y</span> is the explanatory variable, so the GDC must regress the <span class="chem">x</span>-values on the <span class="chem">y</span>-values. <span class="chem">c</span> is <strong>not</strong> <span class="chem">1/a</span>, the reciprocal of the gradient of the <span class="chem">y</span>-on-<span class="chem">x</span> line.',
        'Run LinReg(ax+b) with the temperatures as the Xlist and the altitudes as the Ylist. The “slope” the GDC shows is <span class="chem">c</span> and the “intercept” is <span class="chem">d</span>.',
        'Check: <span class="chem">c</span> has the same sign as <span class="chem">r</span>. The two lines agree with each other only when <span class="chem">|r| = 1</span>, so expect <span class="chem">c</span> ≠ <span class="chem">1/a</span> here.'
      ],
      solution: '<p>Decode: <span class="chem">x</span> on <span class="chem">y</span>, so the temperatures <span class="chem">y</span> are the Xlist and the altitudes <span class="chem">x</span> are the Ylist <b>[M1]</b>.<br>GDC: <span class="chem">x = −0.18604y + 4.8272</span> <b>[A1]</b>, so <span class="chem">c ≈ −0.186</span> <b>[A1]</b>.<br>(Here <span class="chem">r = −0.963</span>. The <span class="chem">y</span>-on-<span class="chem">x</span> line is <span class="chem">y = −4.9826x + 25.388</span>; rearranging it would give <span class="chem">1/a = 1/(−4.9826) ≈ −0.201</span>, which is not <span class="chem">c</span>, because <span class="chem">|r| &lt; 1</span>.)</p>'
    },
    {
      id: 't4-1-q011',
      topic: 't4-1',
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
      topic: 't4-1',
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
      topic: 't4-1',
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
      topic: 't4-1',
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
        'Decode: the new variance must be measured about the mean of all <span class="chem">10</span> numbers, so first check whether adding <span class="chem">1</span> and <span class="chem">9</span> changes the mean.',
        'Notice that the two new numbers <span class="chem">1</span> and <span class="chem">9</span> have mean <span class="chem">(1 + 9)/2 = 5</span>, so the overall mean of all 10 numbers is still <span class="chem">x̄_{new} = 5</span>!',
        'For the original 8 numbers, <span class="chem">Σ(x_i - 5)^2 = n σ^2 = 8 × 9 = 72</span>. Add <span class="chem">(1 - 5)^2 + (9 - 5)^2</span> and divide by <span class="chem">10</span>.'
      ],
      solution: '<p>Original sum <span class="chem">Σ x_i = 8 × 5 = 40</span>; new sum <span class="chem">= 40 + 1 + 9 = 50</span>, so <span class="chem">x̄_{new} = 50 / 10 = 5</span> <b>[A1]</b>.<br>Original sum of squared deviations <span class="chem">Σ_{i=1}^8 (x_i - 5)^2 = 8 × 9 = 72</span> <b>[M1 A1]</b>.<br>New sum of squared deviations <span class="chem">= 72 + (1 - 5)^2 + (9 - 5)^2 = 72 + 16 + 16 = 104</span> <b>[M1]</b>.<br>New variance <span class="chem">σ_{new}^2 = 104 / 10 = 10.4</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-1-q015',
      topic: 't4-1',
      level: 'sl',
      tier: 'exam',
      type: 'short',
      marks: 6,
      paper: 'Paper 1 (No GDC)',
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
      topic: 't4-1',
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
      topic: 't4-1',
      level: 'sl',
      tier: 'challenge',
      type: 'numeric',
      marks: 5,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.4, 4.10',
      stem: '<p>Nine adults who are learning to type record the time <span class="chem">x</span> hours per week that they practise and their typing speed <span class="chem">y</span> words per minute.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Practice <span class="chem">x</span> (h per week)</th><td class="num">2</td><td class="num">4</td><td class="num">5</td><td class="num">7</td><td class="num">8</td><td class="num">10</td><td class="num">11</td><td class="num">13</td><td class="num">14</td></tr><tr><th scope="row">Speed <span class="chem">y</span> (words per minute)</th><td class="num">38</td><td class="num">35</td><td class="num">46</td><td class="num">44</td><td class="num">52</td><td class="num">49</td><td class="num">60</td><td class="num">55</td><td class="num">63</td></tr></tbody></table></div><p>Ana wants to estimate the weekly practice time of a learner whose typing speed is <span class="chem">40</span> words per minute. She finds the regression line of <span class="chem">y</span> on <span class="chem">x</span> and solves <span class="chem">40 = ax + b</span> for <span class="chem">x</span>.<br>Find (the estimate given by the appropriate regression line) − (Ana\'s estimate), in hours per week.</p>',
      answer: 0.75355018642,
      sigfigs: 3,
      unit: 'h',
      hints: [
        'Decode: the speed <span class="chem">y</span> is given and the practice time <span class="chem">x</span> is wanted, so the appropriate line is <span class="chem">x</span> on <span class="chem">y</span>. Ana\'s rearranged <span class="chem">y</span>-on-<span class="chem">x</span> line is a different line (they coincide only when <span class="chem">|r| = 1</span>), so the two estimates differ.',
        'Ana: run LinReg(ax+b) with <span class="chem">x</span> as the Xlist, then solve <span class="chem">40 = ax + b</span>. Appropriate line: run LinReg(ax+b) again with <span class="chem">y</span> as the Xlist and <span class="chem">x</span> as the Ylist, then substitute <span class="chem">y = 40</span>.',
        'Store both lines or keep the unrounded coefficients, then subtract Ana\'s estimate from the other one.'
      ],
      solution: '<p>Decode: predicting <span class="chem">x</span> from a given <span class="chem">y</span> needs the <span class="chem">x</span>-on-<span class="chem">y</span> line; Ana\'s method uses the <span class="chem">y</span>-on-<span class="chem">x</span> line instead.<br>Ana: <span class="chem">y = 2.0861x + 31.959</span> <b>[M1]</b>, so <span class="chem">x = (40 − 31.959)/2.0861 = 3.8546…</span> h <b>[A1]</b>.<br>Appropriate line (speeds as the Xlist): <span class="chem">x = 0.39666y − 11.258</span> <b>[M1]</b>, so <span class="chem">x = 0.39666(40) − 11.258 = 4.6082…</span> h <b>[A1]</b>.<br>Difference <span class="chem">= 4.6082… − 3.8546… = 0.75355… ≈ 0.754</span> h per week <b>[A1]</b>.<br>(Here <span class="chem">r = 0.910</span>, not close enough to 1 for the two lines to agree; <span class="chem">40</span> is inside the data range 35–63, so both are interpolations.)</p>'
    },
    {
      id: 't4-1-q018',
      topic: 't4-1',
      level: 'sl',
      tier: 'challenge',
      type: 'short',
      marks: 6,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.2, 4.3',
      stem: '<p>Six positive integers are arranged in ascending order: <span class="chem">a, b, 10, 12, c, d</span>.<br>The unique mode is <span class="chem">15</span>, the range is <span class="chem">12</span>, and the mean of all six integers is <span class="chem">x̄ = 10.5</span>.<br>Quartiles are found by the GDC method: the median of each half of the ordered data.<br>(a) State the values of <span class="chem">c</span> and <span class="chem">d</span>, and hence find <span class="chem">a</span>. <strong>[3 marks]</strong><br>(b) Find the value of <span class="chem">b</span> and the interquartile range (<span class="chem">IQR = Q_3 - Q_1</span>) of the six integers. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">c = 15, d = 15</span>; since <span class="chem">d - a = 12</span>, <span class="chem">a = 15 - 12 = 3</span>.<br>(b) Sum <span class="chem">= 6 × 10.5 = 63 ⇒ 3 + b + 10 + 12 + 15 + 15 = 63 ⇒ b = 8</span>. Since <span class="chem">Q_1 = b = 8</span> and <span class="chem">Q_3 = c = 15</span>, <span class="chem">IQR = 15 - 8 = 7</span>.</p>',
      markscheme: [
        'R1: Deduces that for 15 (> 12) to be the unique mode in an ascending list, both c and d must equal 15.',
        'A1: States c = 15 and d = 15.',
        'A1: Uses range = d − a = 12 to find a = 15 − 12 = 3.',
        'M1: Sets up the sum equation 3 + b + 10 + 12 + 15 + 15 = 6 × 10.5 = 63.',
        'A1: Finds b = 8.',
        'A1: Identifies Q₁ = 8 and Q₃ = 15 for n = 6, giving IQR = 15 − 8 = 7.'
      ],
      hints: [
        'Decode: the two largest values are <span class="chem">c</span> and <span class="chem">d</span>, and <span class="chem">15 &gt; 12</span>, so a unique mode of <span class="chem">15</span> forces <span class="chem">c = d = 15</span>. Then the range gives <span class="chem">a</span>, and the mean (a total) gives <span class="chem">b</span>.',
        'For <span class="chem">n = 6</span>, the lower half is the <span class="chem">3</span> smallest values and the upper half is the <span class="chem">3</span> largest; each quartile is the median of its half.'
      ],
      solution: '<p>(a) Because <span class="chem">15 &gt; 12</span> is the unique mode and the six integers are in ascending order, <span class="chem">15</span> must appear at least twice at the upper end, so <span class="chem">c = 15</span> and <span class="chem">d = 15</span>. Then <span class="chem">d - a = 12 ⇒ 15 - a = 12 ⇒ a = 3</span>.<br>(b) The sum of the six numbers is <span class="chem">6 × 10.5 = 63</span>, so <span class="chem">3 + b + 10 + 12 + 15 + 15 = 63 ⇒ 55 + b = 63 ⇒ b = 8</span>. For <span class="chem">n = 6</span>, the lower half is <span class="chem">3, 8, 10</span> (<span class="chem">Q_1 = 8</span>) and the upper half is <span class="chem">12, 15, 15</span> (<span class="chem">Q_3 = 15</span>), so <span class="chem">IQR = 15 - 8 = 7</span>.</p>'
    },
    {
      id: 't4-1-q019',
      topic: 't4-1',
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
      topic: 't4-1',
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
    },
    {
      id: 't4-1-q021',
      topic: 't4-1',
      level: 'sl',
      tier: 'foundation',
      type: 'numeric',
      marks: 2,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.3',
      stem: '<p>The times, in seconds, that <span class="chem">12</span> students took to solve a logic puzzle are shown below.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Time (s)</th><td class="num">34</td><td class="num">41</td><td class="num">29</td><td class="num">52</td><td class="num">38</td><td class="num">45</td><td class="num">31</td><td class="num">47</td><td class="num">36</td><td class="num">40</td><td class="num">55</td><td class="num">33</td></tr></tbody></table></div><p>Find the standard deviation <span class="chem">σ</span> of the times.</p>',
      answer: 7.910523932641181,
      sigfigs: 3,
      unit: 's',
      hints: [
        'Enter the <span class="chem">12</span> times in a list and run <span class="mono">1-Var Stats</span>.',
        'IB uses the population standard deviation, shown on the GDC as <span class="mono">σx</span> (not <span class="mono">Sx</span>).'
      ],
      solution: '<p>From the GDC (<span class="mono">1-Var Stats</span>): <span class="chem">x̄ = 40.0833</span> s and <span class="chem">σ = 7.9105… ≈ 7.91</span> s <b>[M1 A1]</b>.</p>'
    },
    {
      id: 't4-1-q022',
      topic: 't4-1',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 3,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.3',
      stem: '<p>A library records the number of books <span class="chem">x</span> borrowed in one week by each of its <span class="chem">50</span> members.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Books borrowed <span class="chem">x</span></th><td class="num">0</td><td class="num">1</td><td class="num">2</td><td class="num">3</td><td class="num">4</td><td class="num">5</td></tr><tr><th scope="row">Number of members <span class="chem">f</span></th><td class="num">6</td><td class="num">11</td><td class="num">14</td><td class="num">9</td><td class="num">7</td><td class="num">3</td></tr></tbody></table></div><p>Find the standard deviation of the number of books borrowed.</p>',
      answer: 1.395564401953561,
      sigfigs: 3,
      hints: [
        'Put the values in <span class="mono">L1</span> and the frequencies in <span class="mono">L2</span>, then run <span class="mono">1-Var Stats L1, L2</span> (FreqList = L2).',
        'Check that <span class="chem">n = 50</span> on the screen: if it shows <span class="chem">n = 6</span>, the frequencies were not used. Read <span class="mono">σx</span>.'
      ],
      solution: '<p>With the frequencies as the frequency list, the GDC gives <span class="chem">n = 50</span>, <span class="chem">x̄ = 2.18</span> <b>[M1]</b> and <span class="chem">σ = 1.3956… ≈ 1.40</span> books <b>[A2]</b>.</p>'
    },
    {
      id: 't4-1-q023',
      topic: 't4-1',
      level: 'sl',
      tier: 'exam',
      type: 'short',
      marks: 9,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.1, 4.2, 4.3',
      stem: '<p>The resting heart rates, in beats per minute (bpm), of <span class="chem">15</span> athletes are shown below.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Heart rate (bpm)</th><td class="num">52</td><td class="num">58</td><td class="num">61</td><td class="num">55</td><td class="num">49</td><td class="num">63</td><td class="num">57</td><td class="num">60</td><td class="num">54</td><td class="num">66</td><td class="num">59</td><td class="num">51</td><td class="num">62</td><td class="num">56</td><td class="num">88</td></tr></tbody></table></div><p>Quartiles are found by the GDC method: the median of each half of the ordered data, leaving out the overall median when the number of values is odd.<br>(a) Write down the median, the lower quartile <span class="chem">Q_1</span> and the upper quartile <span class="chem">Q_3</span>. <strong>[3 marks]</strong><br>(b) Show that <span class="chem">88</span> bpm is an outlier. <strong>[3 marks]</strong><br>(c) Find the mean and the standard deviation of the <span class="chem">15</span> heart rates. <strong>[2 marks]</strong><br>(d) The coach finds that the <span class="chem">88</span> bpm reading was taken straight after a warm-up run. State, with a reason, whether this value should be kept in the data. <strong>[1 mark]</strong></p>',
      answer: '<p>(a) Median <span class="chem">58</span>, <span class="chem">Q_1 = 54</span>, <span class="chem">Q_3 = 62</span>.<br>(b) <span class="chem">IQR = 8</span>; upper fence <span class="chem">62 + 1.5(8) = 74</span> and <span class="chem">88 &gt; 74</span>, so 88 is an outlier.<br>(c) <span class="chem">x̄ = 59.4</span> bpm, <span class="chem">σ = 8.89</span> bpm.<br>(d) Remove it: it is not a <em>resting</em> heart rate, so it is a measurement error for this variable, not a genuine value.</p>',
      markscheme: [
        'A1: Median = 58 bpm.',
        'A1: Q₁ = 54 bpm.',
        'A1: Q₃ = 62 bpm.',
        'A1: IQR = 62 − 54 = 8.',
        'M1: Upper fence Q₃ + 1.5 × IQR = 62 + 1.5(8) = 74.',
        'R1: 88 > 74, so 88 is an outlier.',
        'A1: Mean x̄ = 59.4 bpm.',
        'A1: σ = 8.89 bpm (8.8904…).',
        'R1: Remove the value (or recheck it), because it was not measured at rest, so it does not belong to the data being studied.'
      ],
      hints: [
        'Run <span class="mono">1-Var Stats</span>: it gives the median, <span class="chem">Q_1</span> and <span class="chem">Q_3</span>. With <span class="chem">n = 15</span>, the lower half is the 7 smallest values.',
        'An outlier lies more than <span class="chem">1.5 × IQR</span> above <span class="chem">Q_3</span> (or below <span class="chem">Q_1</span>). Write the fence as a number and compare.',
        'For (d), ask: is <span class="chem">88</span> an error for <em>this</em> variable, or a genuine extreme value?'
      ],
      solution: '<p>(a) Ordered: 49, 51, 52, 54, 55, 56, 57, <b>58</b>, 59, 60, 61, 62, 63, 66, 88. The median is the 8th value, <span class="chem">58</span> <b>[A1]</b>. The lower half 49 … 57 has median <span class="chem">Q_1 = 54</span> <b>[A1]</b>, and the upper half 59 … 88 has median <span class="chem">Q_3 = 62</span> <b>[A1]</b>.<br>(b) <span class="chem">IQR = 62 - 54 = 8</span> <b>[A1]</b>. Upper fence <span class="chem">= 62 + 1.5(8) = 74</span> <b>[M1]</b>. Since <span class="chem">88 &gt; 74</span>, 88 is an outlier <b>[R1]</b>.<br>(c) GDC: <span class="chem">x̄ = 59.4</span> bpm <b>[A1]</b>, <span class="chem">σ = 8.8904… ≈ 8.89</span> bpm <b>[A1]</b>.<br>(d) The reading was not taken at rest, so it is an error for the variable "resting heart rate". It should be removed (or the athlete re-measured) <b>[R1]</b>.</p>'
    },
    {
      id: 't4-1-q024',
      topic: 't4-1',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 3,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.2, 4.3',
      stem: '<p>The reaction times, in seconds, of <span class="chem">12</span> drivers in a simulator are shown below.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Reaction time (s)</th><td class="num">0.42</td><td class="num">0.38</td><td class="num">0.51</td><td class="num">0.47</td><td class="num">0.36</td><td class="num">0.44</td><td class="num">0.59</td><td class="num">0.4</td><td class="num">0.49</td><td class="num">0.45</td><td class="num">0.53</td><td class="num">0.41</td></tr></tbody></table></div><p>Using the GDC method: the median of each half of the ordered data, leaving out the overall median when the number of values is odd, find the interquartile range of the reaction times.</p>',
      answer: 0.095,
      sigfigs: '2-3',
      unit: 's',
      hints: [
        'With <span class="chem">n = 12</span> (even), the lower half is the 6 smallest values and the upper half is the 6 largest.',
        '<span class="chem">Q_1</span> is the mean of the 3rd and 4th ordered values; <span class="chem">Q_3</span> is the mean of the 9th and 10th. Then <span class="chem">IQR = Q_3 - Q_1</span>.'
      ],
      solution: '<p>Ordered: 0.36, 0.38, 0.40, 0.41, 0.42, 0.44 | 0.45, 0.47, 0.49, 0.51, 0.53, 0.59.<br><span class="chem">Q_1 = (0.40 + 0.41)/2 = 0.405</span> and <span class="chem">Q_3 = (0.49 + 0.51)/2 = 0.5</span> <b>[A1 A1]</b> (these match <span class="mono">1-Var Stats</span>).<br><span class="chem">IQR = 0.5 - 0.405 = 0.095</span> s <b>[A1]</b>.</p>'
    },
    {
      id: 't4-1-q025',
      topic: 't4-1',
      level: 'sl',
      tier: 'exam',
      type: 'short',
      marks: 9,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.4',
      stem: '<p>An estate agent records the distance <span class="chem">x</span> km from the city centre and the average price <span class="chem">y</span> (in thousands of euros) of a two-bedroom flat in <span class="chem">8</span> districts.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Distance <span class="chem">x</span> (km)</th><td class="num">1.2</td><td class="num">2.5</td><td class="num">3.1</td><td class="num">4.8</td><td class="num">5.5</td><td class="num">6.9</td><td class="num">8.2</td><td class="num">9.6</td></tr><tr><th scope="row">Price <span class="chem">y</span> (thousand €)</th><td class="num">412</td><td class="num">388</td><td class="num">371</td><td class="num">344</td><td class="num">330</td><td class="num">305</td><td class="num">289</td><td class="num">262</td></tr></tbody></table></div><p>(a) Find Pearson\'s product-moment correlation coefficient <span class="chem">r</span>. <strong>[2 marks]</strong><br>(b) Describe the correlation between distance and price. <strong>[1 mark]</strong><br>(c) Find the equation of the regression line of <span class="chem">y</span> on <span class="chem">x</span>. <strong>[2 marks]</strong><br>(d) Interpret the gradient of the line in context. <strong>[1 mark]</strong><br>(e) Use the line to estimate the average price in a district <span class="chem">7.5</span> km from the centre. <strong>[2 marks]</strong><br>(f) Explain why the line should not be used for a village <span class="chem">15</span> km from the centre. <strong>[1 mark]</strong></p>',
      answer: '<p>(a) <span class="chem">r = -0.998</span><br>(b) Strong negative linear correlation: prices fall as distance increases.<br>(c) <span class="chem">y = -17.6x + 430</span><br>(d) For each extra km from the centre, the average price falls by about <span class="chem">17.6</span> thousand euros (about €17 600).<br>(e) <span class="chem">y ≈ 298</span> thousand euros.<br>(f) <span class="chem">15</span> km is outside the data range <span class="chem">1.2 ≤ x ≤ 9.6</span>, so this would be extrapolation.</p>',
      markscheme: [
        'M1: Uses the GDC with x in L1 and y in L2 (LinReg(ax+b)).',
        'A1: r = -0.998 (-0.99812…).',
        'A1: Strong negative (linear) correlation, in context.',
        'A1: a = -17.6.',
        'A1: b = 430, giving y = -17.6x + 430.',
        'A1: Each extra km is associated with a price about 17.6 thousand euros lower, on average.',
        'M1: Substitutes x = 7.5 into the regression line.',
        'A1: y ≈ 298 thousand euros.',
        'R1: 15 km is outside the observed distances (1.2 to 9.6 km): extrapolation, so unreliable.'
      ],
      hints: [
        'Decode: (a)–(c) are all one GDC run: <span class="mono">LinReg(ax+b) L1, L2</span> with diagnostics on, so that <span class="chem">r</span> is shown.',
        'For (d), say what one extra km does to the price, with units. A negative gradient means a decrease.',
        'For (f), compare <span class="chem">15</span> with the smallest and largest <span class="chem">x</span>-values.'
      ],
      solution: '<p>(a) GDC: <span class="chem">r = -0.99812… ≈ -0.998</span> <b>[M1 A1]</b>.<br>(b) Strong negative linear correlation: the further from the centre, the lower the price <b>[A1]</b>.<br>(c) <span class="chem">a = -17.6117…</span>, <span class="chem">b = 429.646…</span>, so <span class="chem">y = -17.6x + 430</span> <b>[A1 A1]</b>.<br>(d) Each additional km from the centre is associated with a fall of about <span class="chem">17.6</span> thousand euros in the average price <b>[A1]</b>.<br>(e) <span class="chem">y = -17.6117(7.5) + 429.646 = 297.558… ≈ 298</span> thousand euros <b>[M1 A1]</b>. This is interpolation (7.5 is inside the data range).<br>(f) <span class="chem">x = 15</span> is outside <span class="chem">1.2 ≤ x ≤ 9.6</span>, so the estimate would be an extrapolation and the linear pattern may not continue <b>[R1]</b>.</p>'
    },
    {
      id: 't4-1-q026',
      topic: 't4-1',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 2,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.4',
      stem: '<p>Ten students recorded their daily screen time <span class="chem">x</span> hours and their sleep <span class="chem">y</span> hours on the same night.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Screen time <span class="chem">x</span> (h)</th><td class="num">2.1</td><td class="num">3.4</td><td class="num">1.2</td><td class="num">4.8</td><td class="num">3.9</td><td class="num">5.6</td><td class="num">2.7</td><td class="num">4.3</td><td class="num">6.2</td><td class="num">1.8</td></tr><tr><th scope="row">Sleep <span class="chem">y</span> (h)</th><td class="num">8.4</td><td class="num">7.6</td><td class="num">8.9</td><td class="num">6.8</td><td class="num">7.5</td><td class="num">6.4</td><td class="num">7.9</td><td class="num">7.3</td><td class="num">6</td><td class="num">8.1</td></tr></tbody></table></div><p>Find Pearson\'s product-moment correlation coefficient <span class="chem">r</span> between screen time and sleep.</p>',
      answer: -0.9839130371619402,
      sigfigs: 3,
      hints: [
        'Enter screen time in <span class="mono">L1</span> and sleep in <span class="mono">L2</span> (keep each pair together), then run <span class="mono">LinReg(ax+b)</span>.',
        'If <span class="chem">r</span> does not appear, turn on diagnostics (TI) or read it from the regression results screen.'
      ],
      solution: '<p>GDC (<span class="mono">LinReg(ax+b) L1, L2</span>): <span class="chem">r = -0.98391… ≈ -0.984</span> <b>[M1 A1]</b>, a strong negative linear correlation.</p>'
    },
    {
      id: 't4-1-q027',
      topic: 't4-1',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 3,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.4',
      stem: '<p>A chemist sets the temperature <span class="chem">x</span> °C of a beaker of water and measures the mass <span class="chem">y</span> grams of a salt that dissolves in it.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Temperature <span class="chem">x</span> (°C)</th><td class="num">10</td><td class="num">20</td><td class="num">30</td><td class="num">40</td><td class="num">50</td><td class="num">60</td></tr><tr><th scope="row">Mass dissolved <span class="chem">y</span> (g)</th><td class="num">35.8</td><td class="num">38.9</td><td class="num">41.7</td><td class="num">45.2</td><td class="num">47.9</td><td class="num">51.3</td></tr></tbody></table></div><p>Use the regression line of <span class="chem">y</span> on <span class="chem">x</span> to estimate the mass that dissolves at <span class="chem">45</span> °C.</p>',
      answer: 46.55238095238096,
      sigfigs: 3,
      unit: 'g',
      hints: [
        'Run <span class="mono">LinReg(ax+b)</span> with temperature as the <span class="chem">x</span>-list.',
        'Substitute <span class="chem">x = 45</span> using the unrounded values of <span class="chem">a</span> and <span class="chem">b</span> (store the line in <span class="mono">Y1</span>).'
      ],
      solution: '<p>GDC: <span class="chem">y = 0.308571x + 32.6667</span> (<span class="chem">r = 1.00</span>) <b>[M1 A1]</b>.<br><span class="chem">y(45) = 46.552… ≈ 46.6</span> g <b>[A1]</b>. Since 45 °C lies inside the range 10–60 °C and <span class="chem">r</span> is very close to 1, this interpolation is reliable.</p>'
    },
    {
      id: 't4-1-q028',
      topic: 't4-1',
      level: 'sl',
      tier: 'exam',
      type: 'short',
      marks: 7,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.4, 4.10',
      stem: '<p>Ten students sat two papers. Their marks on Paper A, <span class="chem">x</span>, and Paper B, <span class="chem">y</span>, are shown below.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Paper A mark <span class="chem">x</span></th><td class="num">45</td><td class="num">52</td><td class="num">61</td><td class="num">38</td><td class="num">70</td><td class="num">58</td><td class="num">66</td><td class="num">49</td><td class="num">75</td><td class="num">55</td></tr><tr><th scope="row">Paper B mark <span class="chem">y</span></th><td class="num">50</td><td class="num">55</td><td class="num">60</td><td class="num">44</td><td class="num">72</td><td class="num">54</td><td class="num">70</td><td class="num">47</td><td class="num">78</td><td class="num">61</td></tr></tbody></table></div><p>(a) Find the value of <span class="chem">r</span> and comment on it. <strong>[2 marks]</strong><br>(b) Find the equation of the regression line of <span class="chem">x</span> on <span class="chem">y</span>, in the form <span class="chem">x = cy + d</span>. <strong>[2 marks]</strong><br>(c) Another student was absent for Paper A and scored <span class="chem">62</span> on Paper B. Estimate the mark this student would have scored on Paper A. <strong>[2 marks]</strong><br>(d) Explain why the regression line of <span class="chem">y</span> on <span class="chem">x</span> should not be rearranged to answer part (c). <strong>[1 mark]</strong></p>',
      answer: '<p>(a) <span class="chem">r = 0.954</span>: strong positive linear correlation.<br>(b) <span class="chem">x = 0.971y − 0.510</span><br>(c) <span class="chem">x ≈ 59.7</span>, so about <span class="chem">60</span> marks.<br>(d) The <span class="chem">y</span>-on-<span class="chem">x</span> line minimises vertical (<span class="chem">y</span>) errors and is for predicting <span class="chem">y</span> from <span class="chem">x</span>. To predict <span class="chem">x</span> from a given <span class="chem">y</span> we need the line that minimises horizontal errors: <span class="chem">x</span> on <span class="chem">y</span>.</p>',
      markscheme: [
        'A1: r = 0.954.',
        'R1: Strong positive linear correlation (students who do well on one paper tend to do well on the other).',
        'M1: Uses the GDC with y as the explanatory list (LinReg with Xlist = y-values, Ylist = x-values).',
        'A1: x = 0.971y − 0.510.',
        'M1: Substitutes y = 62 into the x-on-y line.',
        'A1: x ≈ 59.7 (accept 60 marks).',
        'R1: The y-on-x line minimises errors in y, so it is not the least-squares line for predicting x; the x-on-y line is.'
      ],
      hints: [
        'Decode: you are given a Paper B mark (<span class="chem">y</span>) and asked for a Paper A mark (<span class="chem">x</span>). Predicting <span class="chem">x</span> from <span class="chem">y</span> needs the <span class="chem">x</span>-on-<span class="chem">y</span> line (SL 4.10).',
        'On the GDC swap the lists: put the <span class="chem">y</span>-marks as the Xlist and the <span class="chem">x</span>-marks as the Ylist. The "slope" shown is <span class="chem">c</span> and the "intercept" is <span class="chem">d</span>.',
        'Substitute <span class="chem">y = 62</span> into <span class="chem">x = cy + d</span>.'
      ],
      solution: '<p>(a) GDC: <span class="chem">r = 0.95409… ≈ 0.954</span> <b>[A1]</b>: a strong positive linear correlation <b>[R1]</b>.<br>(b) <span class="mono">LinReg(ax+b) L2, L1</span> (the <span class="chem">y</span>-marks as Xlist) gives <span class="chem">c = 0.97140…</span> and <span class="chem">d = -0.5098…</span> <b>[M1]</b>, so <span class="chem">x = 0.971y − 0.510</span> <b>[A1]</b>.<br>(c) <span class="chem">x = 0.97140(62) − 0.5098 = 59.717… ≈ 59.7</span> <b>[M1 A1]</b>, about 60 marks. (62 is inside the Paper B range 44–78, so this is interpolation.)<br>(d) The <span class="chem">y</span>-on-<span class="chem">x</span> line minimises the squared vertical distances, so it is designed to predict <span class="chem">y</span>. Rearranging it would give <span class="chem">x ≈ 60.0</span>, a different (biased) value, because <span class="chem">|r| &lt; 1</span> <b>[R1]</b>.</p>'
    },
    {
      id: 't4-1-q029',
      topic: 't4-1',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 3,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.10',
      stem: '<p>A forensic scientist measures the foot length <span class="chem">x</span> cm and the height <span class="chem">y</span> cm of <span class="chem">8</span> adults.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Foot length <span class="chem">x</span> (cm)</th><td class="num">23.5</td><td class="num">25.2</td><td class="num">26.8</td><td class="num">24.1</td><td class="num">27.5</td><td class="num">22.8</td><td class="num">25.9</td><td class="num">28.3</td></tr><tr><th scope="row">Height <span class="chem">y</span> (cm)</th><td class="num">160</td><td class="num">171</td><td class="num">178</td><td class="num">166</td><td class="num">183</td><td class="num">158</td><td class="num">174</td><td class="num">187</td></tr></tbody></table></div><p>A suspect is known to be <span class="chem">172</span> cm tall. Using an appropriate regression line, estimate the suspect\'s foot length.</p>',
      answer: 25.48905456332952,
      sigfigs: 3,
      unit: 'cm',
      hints: [
        'Decode: the height <span class="chem">y</span> is given and the foot length <span class="chem">x</span> is wanted, so you need the regression line of <span class="chem">x</span> on <span class="chem">y</span>.',
        'Run <span class="mono">LinReg(ax+b)</span> with the heights as the Xlist and the foot lengths as the Ylist, then substitute <span class="chem">172</span>.'
      ],
      solution: '<p>Decode: predict <span class="chem">x</span> from <span class="chem">y</span>, so use <span class="chem">x</span> on <span class="chem">y</span> <b>[M1]</b>.<br>GDC: <span class="chem">x = 0.18756y − 6.7719</span> <b>[A1]</b>.<br><span class="chem">x = 0.18756(172) − 6.7719 = 25.4891… ≈ 25.5</span> cm <b>[A1]</b>.</p>'
    },
    {
      id: 't4-1-q030',
      topic: 't4-1',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 3,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.3',
      stem: '<p>The ages <span class="chem">A</span> years of the <span class="chem">80</span> members of a climbing club are summarised below.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Age <span class="chem">A</span> (years)</th><td class="num">15 ≤ <i>A</i> &lt; 25</td><td class="num">25 ≤ <i>A</i> &lt; 35</td><td class="num">35 ≤ <i>A</i> &lt; 45</td><td class="num">45 ≤ <i>A</i> &lt; 55</td><td class="num">55 ≤ <i>A</i> &lt; 65</td></tr><tr><th scope="row">Frequency</th><td class="num">14</td><td class="num">23</td><td class="num">19</td><td class="num">15</td><td class="num">9</td></tr></tbody></table></div><p>Find an estimate of the mean age of the members.</p>',
      answer: 37.75,
      sigfigs: 3,
      unit: 'years',
      hints: [
        'Use the mid-interval values <span class="chem">20, 30, 40, 50, 60</span> as the data and the frequencies as the frequency list.',
        '<span class="chem">x̄ ≈ (Σ f x) / (Σ f)</span>. Check that <span class="chem">Σ f = 80</span>.'
      ],
      solution: '<p>Mid-interval values <span class="chem">20, 30, 40, 50, 60</span> <b>[M1]</b>.<br><span class="chem">Σ f x = 280 + 690 + 760 + 750 + 540 = 3020</span> <b>[A1]</b>, so <span class="chem">x̄ ≈ 3020 / 80 = 37.75 ≈ 37.8</span> years <b>[A1]</b> (GDC with the frequency list gives the same value).</p>'
    },
    {
      id: 't4-1-q031',
      topic: 't4-1',
      level: 'sl',
      tier: 'exam',
      type: 'short',
      marks: 6,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.2, 4.3',
      stem: '<p>The lengths <span class="chem">L</span> cm of <span class="chem">60</span> fish caught in a lake are shown in the table.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Length <span class="chem">L</span> (cm)</th><td class="num">20 ≤ <i>L</i> &lt; 24</td><td class="num">24 ≤ <i>L</i> &lt; 28</td><td class="num">28 ≤ <i>L</i> &lt; 32</td><td class="num">32 ≤ <i>L</i> &lt; 36</td><td class="num">36 ≤ <i>L</i> &lt; 40</td></tr><tr><th scope="row">Frequency</th><td class="num">7</td><td class="num">15</td><td class="num">19</td><td class="num">12</td><td class="num">7</td></tr></tbody></table></div><p>(a) Write down the modal class. <strong>[1 mark]</strong><br>(b) Find an estimate of the mean length. <strong>[2 marks]</strong><br>(c) Find an estimate of the standard deviation of the lengths. <strong>[2 marks]</strong><br>(d) Explain why the answers to (b) and (c) are only estimates. <strong>[1 mark]</strong></p>',
      answer: '<p>(a) <span class="chem">28 ≤ L &lt; 32</span><br>(b) <span class="chem">x̄ ≈ 29.8</span> cm<br>(c) <span class="chem">σ ≈ 4.70</span> cm<br>(d) The individual lengths are not known: each fish is treated as if its length were the mid-interval value.</p>',
      markscheme: [
        'A1: Modal class 28 ≤ L < 32 (frequency 19).',
        'M1: Uses the mid-interval values 22, 26, 30, 34, 38 with the frequencies.',
        'A1: Mean ≈ 29.8 cm.',
        'M1: Uses the GDC (1-Var Stats with the frequency list) and reads σx.',
        'A1: σ ≈ 4.70 cm (4.7004…).',
        'R1: The raw data are grouped, so the mid-interval values stand in for the actual lengths.'
      ],
      hints: [
        'The modal class is the class with the highest frequency (the classes have equal width), not a single value.',
        'Mid-interval values: <span class="chem">22, 26, 30, 34, 38</span>. Put them in <span class="mono">L1</span> and the frequencies in <span class="mono">L2</span>.'
      ],
      solution: '<p>(a) The largest frequency is 19, so the modal class is <span class="chem">28 ≤ L &lt; 32</span> <b>[A1]</b>.<br>(b) With mid-interval values <span class="chem">22, 26, 30, 34, 38</span> <b>[M1]</b>: <span class="chem">x̄ ≈ (154 + 390 + 570 + 408 + 266)/60 = 1788/60 = 29.8</span> cm <b>[A1]</b>.<br>(c) GDC (<span class="mono">1-Var Stats L1, L2</span>) <b>[M1]</b>: <span class="chem">σ ≈ 4.7004… ≈ 4.70</span> cm <b>[A1]</b>.<br>(d) The original lengths are lost when the data are grouped; every fish in a class is assumed to have the mid-interval length <b>[R1]</b>.</p>'
    },
    {
      id: 't4-1-q032',
      topic: 't4-1',
      level: 'sl',
      tier: 'challenge',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.3',
      stem: '<p>A polar research station records the midday temperature, in °C, on <span class="chem">10</span> days.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Temperature (°C)</th><td class="num">-4.2</td><td class="num">-1.8</td><td class="num">0.5</td><td class="num">2.3</td><td class="num">-3.1</td><td class="num">1.7</td><td class="num">-0.6</td><td class="num">3.4</td><td class="num">-2.5</td><td class="num">0.9</td></tr></tbody></table></div><p>A visiting team from the USA converts every reading to degrees Fahrenheit using <span class="chem">F = 1.8C + 32</span>. Find the standard deviation of the <span class="chem">10</span> temperatures in °F.</p>',
      answer: 4.287779845094661,
      sigfigs: 3,
      unit: '°F',
      hints: [
        'Decode: this is "effect of constant changes" (SL 4.3). Each value is multiplied by <span class="chem">1.8</span> and then has <span class="chem">32</span> added. Only one of these changes the spread.',
        'Find <span class="chem">σ_C</span> of the Celsius data on the GDC.',
        'Then <span class="chem">σ_F = 1.8 σ_C</span>: adding <span class="chem">32</span> does not change the standard deviation. (Or convert all ten values and run <span class="mono">1-Var Stats</span> again as a check.)'
      ],
      solution: '<p><b>Decode:</b> a linear change <span class="chem">F = 1.8C + 32</span> multiplies the standard deviation by <span class="chem">|1.8|</span> and the shift <span class="chem">+32</span> has no effect on spread.<br>GDC: <span class="chem">σ_C = 2.3821…</span> °C <b>[M1 A1]</b>.<br><span class="chem">σ_F = 1.8 × 2.3821… = 4.2878… ≈ 4.29</span> °F <b>[M1 A1]</b>.</p>'
    },
    {
      id: 't4-1-q033',
      topic: 't4-1',
      level: 'sl',
      tier: 'challenge',
      type: 'short',
      marks: 10,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.1, 4.2, 4.3',
      stem: '<p>A quality-control technician weighs <span class="chem">11</span> tablets from a batch labelled "500 mg". The masses, in mg, are:</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Mass (mg)</th><td class="num">498</td><td class="num">502</td><td class="num">505</td><td class="num">497</td><td class="num">501</td><td class="num">499</td><td class="num">503</td><td class="num">540</td><td class="num">500</td><td class="num">496</td><td class="num">504</td></tr></tbody></table></div><p>Quartiles are found by the GDC method: the median of each half of the ordered data, leaving out the overall median when the number of values is odd.<br>(a) Write down <span class="chem">Q_1</span> and <span class="chem">Q_3</span>. <strong>[2 marks]</strong><br>(b) Show that the data contain exactly one outlier. <strong>[3 marks]</strong><br>(c) Find the mean and standard deviation of the <span class="chem">11</span> masses as recorded. <strong>[2 marks]</strong><br>(d) The technician realises that the outlier was a typing error: the digits of the true mass <span class="chem">504</span> mg were typed in the wrong order. Find the corrected mean and standard deviation. <strong>[2 marks]</strong><br>(e) State which of the two statistics in (c) was affected more by the error, in relative terms. <strong>[1 mark]</strong></p>',
      answer: '<p>(a) <span class="chem">Q_1 = 498</span>, <span class="chem">Q_3 = 504</span><br>(b) <span class="chem">IQR = 6</span>; fences <span class="chem">489</span> and <span class="chem">513</span>. Only <span class="chem">540 &gt; 513</span>; all other values lie between the fences.<br>(c) <span class="chem">x̄ = 504.1</span> mg, <span class="chem">σ = 11.7</span> mg<br>(d) <span class="chem">x̄ = 500.8</span> mg, <span class="chem">σ = 2.92</span> mg<br>(e) The standard deviation (it fell to about a quarter of its value; the mean changed by less than 1%).</p>',
      markscheme: [
        'A1: Q₁ = 498 mg.',
        'A1: Q₃ = 504 mg.',
        'A1: IQR = 6, so the fences are 498 − 9 = 489 and 504 + 9 = 513.',
        'R1: 540 > 513, so 540 is an outlier.',
        'R1: The smallest value 496 > 489 and the next largest 505 < 513, so there are no other outliers.',
        'A1: x̄ = 504.1 mg.',
        'A1: σ = 11.7 mg.',
        'A1: Corrected x̄ = 500.8 mg.',
        'A1: Corrected σ = 2.92 mg.',
        'R1: The standard deviation was affected much more than the mean.'
      ],
      hints: [
        'Decode: (b) says "exactly one", so you must show one value is beyond a fence AND that every other value is inside both fences. In (d), "digits in the wrong order" tells you which recorded value was really 504.',
        'Run <span class="mono">1-Var Stats</span> for <span class="chem">Q_1</span> and <span class="chem">Q_3</span>. Then the fences are <span class="chem">Q_1 - 1.5 IQR</span> and <span class="chem">Q_3 + 1.5 IQR</span>.',
        'For (d), replace 540 by 504 in the list and run <span class="mono">1-Var Stats</span> again.'
      ],
      solution: '<p><b>Decode:</b> "exactly one outlier" needs both fences and a check of the nearest values; "digits in the wrong order" means 540 should be 504.<br>(a) Ordered: 496, 497, 498, 499, 500, <b>501</b>, 502, 503, 504, 505, 540. <span class="chem">Q_1 = 498</span> and <span class="chem">Q_3 = 504</span> <b>[A1 A1]</b>.<br>(b) <span class="chem">IQR = 6</span>, <span class="chem">1.5 × IQR = 9</span>, fences <span class="chem">489</span> and <span class="chem">513</span> <b>[A1]</b>. <span class="chem">540 &gt; 513</span> is an outlier <b>[R1]</b>. All other values lie in <span class="chem">[496, 505]</span>, inside the fences, so 540 is the only one <b>[R1]</b>.<br>(c) GDC: <span class="chem">x̄ = 504.091… ≈ 504.1</span> mg <b>[A1]</b>, <span class="chem">σ = 11.681… ≈ 11.7</span> mg <b>[A1]</b>.<br>(d) With 504 in place of 540: <span class="chem">x̄ = 500.818… ≈ 500.8</span> mg <b>[A1]</b>, <span class="chem">σ = 2.918… ≈ 2.92</span> mg <b>[A1]</b>.<br>(e) The mean moved by about 3 mg (under 1%), but the standard deviation fell from about 11.7 to about 2.92 mg: the standard deviation was affected much more <b>[R1]</b>.</p>'
    },
    {
      id: 't4-1-q034',
      topic: 't4-1',
      level: 'sl',
      tier: 'challenge',
      type: 'numeric',
      marks: 3,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.4',
      stem: '<p>The owner of a beach kiosk notes the maximum temperature <span class="chem">T</span> °C and the number <span class="chem">N</span> of ice creams sold on <span class="chem">8</span> summer days.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Temperature <span class="chem">T</span> (°C)</th><td class="num">18</td><td class="num">21</td><td class="num">23</td><td class="num">25</td><td class="num">26</td><td class="num">28</td><td class="num">30</td><td class="num">32</td></tr><tr><th scope="row">Ice creams sold <span class="chem">N</span></th><td class="num">54</td><td class="num">66</td><td class="num">71</td><td class="num">80</td><td class="num">84</td><td class="num">93</td><td class="num">99</td><td class="num">110</td></tr></tbody></table></div><p>She wants to know how many extra ice creams she can expect to sell, according to a linear model fitted to these data, for each additional degree of temperature. Find this number.</p>',
      answer: 3.93497942386831,
      sigfigs: 3,
      unit: 'ice creams per °C',
      hints: [
        'Decode: "how many extra for each additional degree" is the rate of change of <span class="chem">N</span> with <span class="chem">T</span>: the gradient <span class="chem">a</span> of the regression line of <span class="chem">N</span> on <span class="chem">T</span>. It is not a prediction for one particular day.',
        'Run <span class="mono">LinReg(ax+b)</span> with <span class="chem">T</span> as the Xlist and <span class="chem">N</span> as the Ylist.',
        'Give the gradient <span class="chem">a</span> to 3 significant figures (it is an average rate, so it need not be a whole number).'
      ],
      solution: '<p><b>Decode:</b> extra sales per extra degree = gradient of the <span class="chem">N</span>-on-<span class="chem">T</span> regression line.<br>GDC: <span class="chem">N = 3.93498T − 17.725</span>, <span class="chem">r = 0.998</span> <b>[M1 A1]</b>.<br>So she can expect about <span class="chem">a ≈ 3.93</span> extra ice creams for each additional °C <b>[A1]</b>.</p>'
    },
    {
      id: 't4-1-q035',
      topic: 't4-1',
      level: 'sl',
      tier: 'challenge',
      type: 'short',
      marks: 8,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.1, 4.4',
      stem: '<p>A biology class grows <span class="chem">9</span> seedlings. For each one they record the mean daily hours of light <span class="chem">x</span> and the growth <span class="chem">y</span> cm after three weeks.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Light <span class="chem">x</span> (h)</th><td class="num">3</td><td class="num">4.5</td><td class="num">5</td><td class="num">6</td><td class="num">7.5</td><td class="num">8</td><td class="num">9</td><td class="num">10</td><td class="num">7</td></tr><tr><th scope="row">Growth <span class="chem">y</span> (cm)</th><td class="num">2.1</td><td class="num">3</td><td class="num">3.4</td><td class="num">4.1</td><td class="num">5</td><td class="num">5.3</td><td class="num">6</td><td class="num">6.6</td><td class="num">1.2</td></tr></tbody></table></div><p>(a) Find the correlation coefficient <span class="chem">r</span> for all <span class="chem">9</span> seedlings. <strong>[1 mark]</strong><br>(b) One point does not fit the pattern. Identify it, and find <span class="chem">r</span> for the other <span class="chem">8</span> seedlings. <strong>[2 marks]</strong><br>(c) The teacher later finds that this seedling had a fungal disease. Find the regression line of <span class="chem">y</span> on <span class="chem">x</span> for the <span class="chem">8</span> healthy seedlings, and use it to estimate the growth of a healthy seedling given <span class="chem">6.5</span> hours of light per day. <strong>[4 marks]</strong><br>(d) Justify the decision to leave the diseased seedling out of the model. <strong>[1 mark]</strong></p>',
      answer: '<p>(a) <span class="chem">r = 0.768</span><br>(b) <span class="chem">(7.0, 1.2)</span>; without it <span class="chem">r = 0.9997</span> (<span class="chem">≈ 1.00</span>)<br>(c) <span class="chem">y = 0.647x + 0.153</span>; <span class="chem">y(6.5) ≈ 4.36</span> cm<br>(d) The seedling is not from the population being modelled (healthy seedlings): its low growth was caused by disease, not by light, so it would distort the model.</p>',
      markscheme: [
        'A1: r = 0.768 (all 9 seedlings).',
        'A1: Identifies the point (7.0, 1.2).',
        'A1: r = 0.9997 for the other 8 seedlings.',
        'M1: Uses LinReg(ax+b) on the 8 healthy seedlings only.',
        'A1: y = 0.647x + 0.153.',
        'M1: Substitutes x = 6.5.',
        'A1: Growth ≈ 4.36 cm.',
        'R1: The diseased seedling is a genuine but unrepresentative value caused by another factor, so it does not belong to the population (healthy seedlings) the model describes.'
      ],
      hints: [
        'Decode: this is about outliers in bivariate data (SL 4.1, 4.4). Removing a point is only justified for a reason in context, not just because it spoils <span class="chem">r</span>.',
        'Run <span class="mono">LinReg(ax+b)</span> on all 9 pairs, then delete the pair that sits far below the others and run it again.',
        'In (c) the estimate at <span class="chem">x = 6.5</span> is interpolation because <span class="chem">3.0 ≤ 6.5 ≤ 10.0</span>.'
      ],
      solution: '<p><b>Decode:</b> compare <span class="chem">r</span> with and without the odd point, then decide on context grounds whether it belongs in the model.<br>(a) All 9: <span class="chem">r = 0.7683… ≈ 0.768</span> <b>[A1]</b>.<br>(b) The point <span class="chem">(7.0, 1.2)</span> lies far below the trend <b>[A1]</b>. Without it, <span class="chem">r = 0.99969… ≈ 0.9997</span> <b>[A1]</b>, an almost perfect positive linear correlation.<br>(c) For the 8 healthy seedlings <b>[M1]</b>: <span class="chem">y = 0.64675x + 0.15279</span> ≈ <span class="chem">0.647x + 0.153</span> <b>[A1]</b>. Then <span class="chem">y(6.5) = 4.3567… ≈ 4.36</span> cm <b>[M1 A1]</b>.<br>(d) The value is genuine, but it was caused by disease rather than by the amount of light. The model is for healthy seedlings, so this point is not part of that population and should be left out <b>[R1]</b>.</p>'
    },
    {
      id: 't4-1-q036',
      topic: 't4-1',
      level: 'sl',
      tier: 'challenge',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.3',
      stem: '<p>Eight runners each recorded the distance, in km, that they ran on a Sunday. Seven of the distances are shown below; the eighth runner\'s record was smudged and is labelled <span class="chem">k</span>.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Distance (km)</th><td class="num">12.4</td><td class="num">15.1</td><td class="num">9.8</td><td class="num">13.6</td><td class="num">11.2</td><td class="num">14.7</td><td class="num">10.9</td><td class="num"><i>k</i></td></tr></tbody></table></div><p>The mean distance of the eight runners is <span class="chem">12.5</span> km. Find the standard deviation of the eight distances.</p>',
      answer: 1.7464249196572978,
      sigfigs: 3,
      unit: 'km',
      hints: [
        'Decode: you cannot find <span class="chem">σ</span> until the list is complete. The mean gives you the missing value first.',
        '<span class="chem">Σ x = 8 × 12.5 = 100</span>, so <span class="chem">k = 100 -</span> (sum of the seven known distances).',
        'Put all eight values in a list and read <span class="mono">σx</span> from <span class="mono">1-Var Stats</span>.'
      ],
      solution: '<p><b>Decode:</b> use the mean to recover <span class="chem">k</span>, then find <span class="chem">σ</span> of all eight values.<br>Sum of the seven known values <span class="chem">= 87.7</span>, so <span class="chem">k = 100 - 87.7 = 12.3</span> km <b>[M1 A1]</b>.<br>GDC with all eight values: <span class="chem">x̄ = 12.5</span> (check) and <span class="chem">σ = 1.7464… ≈ 1.75</span> km <b>[M1 A1]</b>.</p>'
    },
    {
      id: 't4-1-q037',
      topic: 't4-1',
      level: 'sl',
      tier: 'challenge',
      type: 'short',
      marks: 9,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.4, 4.10',
      stem: '<p>A coach records the 100 m sprint time <span class="chem">x</span> seconds and the long-jump distance <span class="chem">y</span> metres of <span class="chem">8</span> athletes in a squad.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">100 m time <span class="chem">x</span> (s)</th><td class="num">11.2</td><td class="num">11.6</td><td class="num">11.9</td><td class="num">12.3</td><td class="num">12.6</td><td class="num">13</td><td class="num">13.4</td><td class="num">13.9</td></tr><tr><th scope="row">Long jump <span class="chem">y</span> (m)</th><td class="num">6.85</td><td class="num">6.60</td><td class="num">6.52</td><td class="num">6.21</td><td class="num">6.05</td><td class="num">5.88</td><td class="num">5.61</td><td class="num">5.42</td></tr></tbody></table></div><p>(a) Write down the value of <span class="chem">r</span>. <strong>[1 mark]</strong><br>(b) A new athlete runs 100 m in <span class="chem">12.0</span> s. Estimate how far she can jump. <strong>[3 marks]</strong><br>(c) A second new athlete jumps <span class="chem">6.00</span> m but has not yet been timed over 100 m. Estimate his 100 m time, justifying your choice of regression line. <strong>[4 marks]</strong><br>(d) The coach wants to use the same model for a younger athlete who runs 100 m in <span class="chem">15.4</span> s. Comment on the reliability of this prediction. <strong>[1 mark]</strong></p>',
      answer: '<p>(a) <span class="chem">r = -0.997</span><br>(b) <span class="chem">y = -0.540x + 12.89</span> gives <span class="chem">y ≈ 6.41</span> m.<br>(c) Use <span class="chem">x</span> on <span class="chem">y</span> (the jump <span class="chem">y</span> is given): <span class="chem">x = -1.84y + 23.79</span> gives <span class="chem">x ≈ 12.7</span> s.<br>(d) Unreliable: 15.4 s is outside the data range 11.2–13.9 s (extrapolation), and the athlete is from a different (younger) group.</p>',
      markscheme: [
        'A1: r = -0.997.',
        'M1: Uses the regression line of y on x (x is given).',
        'A1: y = -0.540x + 12.89.',
        'A1: y ≈ 6.41 m.',
        'R1: Chooses the x-on-y line because y is given and x is to be estimated.',
        'M1: Finds the x-on-y line on the GDC (y-values as Xlist).',
        'A1: x = -1.84y + 23.79.',
        'A1: x ≈ 12.7 s.',
        'R1: 15.4 s is outside the observed times, so the prediction is an extrapolation (and a younger athlete may not follow the same pattern): unreliable.'
      ],
      hints: [
        'Decode: (b) gives <span class="chem">x</span> and wants <span class="chem">y</span>; (c) gives <span class="chem">y</span> and wants <span class="chem">x</span>. They need two different regression lines.',
        'For (c), run <span class="mono">LinReg(ax+b)</span> with the jump distances as the Xlist and the times as the Ylist.',
        'In (d), compare 15.4 s with the fastest and slowest times in the table.'
      ],
      solution: '<p><b>Decode:</b> two directions of prediction, so two lines: <span class="chem">y</span> on <span class="chem">x</span> for (b), <span class="chem">x</span> on <span class="chem">y</span> for (c).<br>(a) GDC: <span class="chem">r = -0.99718… ≈ -0.997</span> <b>[A1]</b>.<br>(b) <span class="chem">y</span> on <span class="chem">x</span> <b>[M1]</b>: <span class="chem">y = -0.54021x + 12.8883</span> <b>[A1]</b>. <span class="chem">y(12.0) = 6.4059… ≈ 6.41</span> m <b>[A1]</b>.<br>(c) The jump is given and the time is wanted, so use <span class="chem">x</span> on <span class="chem">y</span> <b>[R1]</b>. With the jumps as Xlist <b>[M1]</b>: <span class="chem">x = -1.84071y + 23.7941</span> <b>[A1]</b>. <span class="chem">x(6.00) = 12.7498… ≈ 12.7</span> s <b>[A1]</b>.<br>(d) 15.4 s lies outside <span class="chem">11.2 ≤ x ≤ 13.9</span>, so this is extrapolation (and the younger athlete is outside the squad the data describe): the prediction is unreliable <b>[R1]</b>.</p>'
    },
    {
      id: 't4-1-q038',
      topic: 't4-1',
      level: 'sl',
      tier: 'exam',
      type: 'short',
      marks: 7,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.2, 4.3',
      stem: '<p>The cumulative frequency table shows the time <span class="chem">t</span> minutes that <span class="chem">80</span> students spent on homework one evening.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Time <span class="chem">t</span> (min)</th><td class="num"><i>t</i> ≤ 10</td><td class="num"><i>t</i> ≤ 20</td><td class="num"><i>t</i> ≤ 30</td><td class="num"><i>t</i> ≤ 40</td><td class="num"><i>t</i> ≤ 50</td><td class="num"><i>t</i> ≤ 60</td></tr><tr><th scope="row">Cumulative frequency</th><td class="num">6</td><td class="num">19</td><td class="num">41</td><td class="num">62</td><td class="num">74</td><td class="num">80</td></tr></tbody></table></div><p>(a) Write down the number of students who spent more than <span class="chem">40</span> minutes on homework. <strong>[1 mark]</strong><br>(b) Write down the class that contains the median. <strong>[1 mark]</strong><br>(c) Copy and complete a frequency table for the classes <span class="chem">0 &lt; t ≤ 10</span>, <span class="chem">10 &lt; t ≤ 20</span>, …, <span class="chem">50 &lt; t ≤ 60</span>. <strong>[2 marks]</strong><br>(d) Hence find an estimate of the mean and of the standard deviation of the times. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">80 - 62 = 18</span><br>(b) <span class="chem">20 &lt; t ≤ 30</span><br>(c) Frequencies <span class="chem">6, 13, 22, 21, 12, 6</span><br>(d) <span class="chem">x̄ ≈ 29.75</span> min, <span class="chem">σ ≈ 13.3</span> min</p>',
      markscheme: [
        'A1: 80 − 62 = 18 students.',
        'A1: Median class 20 < t ≤ 30 (the 40th–41st students lie between cumulative frequencies 19 and 41).',
        'M1: Subtracts consecutive cumulative frequencies.',
        'A1: Frequencies 6, 13, 22, 21, 12, 6.',
        'M1: Uses mid-interval values 5, 15, 25, 35, 45, 55 with these frequencies.',
        'A1: Mean ≈ 29.75 min.',
        'A1: σ ≈ 13.3 min.'
      ],
      hints: [
        'Decode: a cumulative frequency is a running total. The number in a class is the difference of consecutive running totals.',
        'For the median, find the class in which the cumulative frequency passes <span class="chem">80/2 = 40</span>.',
        'Mid-interval values: <span class="chem">5, 15, 25, 35, 45, 55</span>. Use them with the frequencies in <span class="mono">1-Var Stats</span>.'
      ],
      solution: '<p>(a) <span class="chem">80 - 62 = 18</span> students <b>[A1]</b>.<br>(b) The cumulative frequency passes 40 between <span class="chem">t = 20</span> (19) and <span class="chem">t = 30</span> (41), so the median is in <span class="chem">20 &lt; t ≤ 30</span> <b>[A1]</b>.<br>(c) Differences of the cumulative frequencies <b>[M1]</b>: <span class="chem">6, 13, 22, 21, 12, 6</span> <b>[A1]</b> (total 80).<br>(d) Mid-interval values <span class="chem">5, 15, 25, 35, 45, 55</span> <b>[M1]</b>. GDC: <span class="chem">x̄ ≈ 29.75</span> min <b>[A1]</b> and <span class="chem">σ ≈ 13.3206… ≈ 13.3</span> min <b>[A1]</b>.</p>'
    },
    {
      id: 't4-1-q039',
      topic: 't4-1',
      level: 'sl',
      tier: 'challenge',
      type: 'numeric',
      marks: 6,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.3',
      stem: '<p>A teacher has the test scores of the <span class="chem">8</span> students in Group P:</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Group P score</th><td class="num">62</td><td class="num">71</td><td class="num">58</td><td class="num">80</td><td class="num">67</td><td class="num">74</td><td class="num">69</td><td class="num">75</td></tr></tbody></table></div><p>For Group Q she only has a summary: <span class="chem">12</span> students, mean score <span class="chem">70</span> and standard deviation <span class="chem">σ = 6</span>. Find the standard deviation of the scores of all <span class="chem">20</span> students together.</p>',
      answer: 6.289674077406587,
      sigfigs: 3,
      hints: [
        'Decode: you cannot average two standard deviations. Rebuild the totals <span class="chem">Σ x</span> and <span class="chem">Σ x^2</span> for each group, add them, and use <span class="chem">σ^2 = (Σ x^2)/n - x̄^2</span> (in the formula booklet) for the combined group.',
        'Group P from the GDC: <span class="chem">Σ x</span> and <span class="chem">Σ x^2</span> are on the <span class="mono">1-Var Stats</span> screen.',
        'Group Q: <span class="chem">Σ x = 12 × 70</span> and, from <span class="chem">σ^2 = (Σ x^2)/12 - 70^2</span>, <span class="chem">Σ x^2 = 12(6^2 + 70^2)</span>.'
      ],
      solution: '<p><b>Decode:</b> combine the raw totals, not the standard deviations.<br>Group P (GDC): <span class="chem">Σ x = 556</span>, <span class="chem">Σ x^2 = 39000</span> <b>[A1]</b>.<br>Group Q: <span class="chem">Σ x = 12 × 70 = 840</span> and <span class="chem">Σ x^2 = 12(36 + 4900) = 59 232</span> <b>[M1 A1]</b>.<br>Combined: <span class="chem">Σ x = 1396</span>, <span class="chem">Σ x^2 = 98232</span>, <span class="chem">x̄ = 1396/20 = 69.8</span> <b>[A1]</b>.<br><span class="chem">σ^2 = 98232/20 - 69.8^2 = 39.56</span> <b>[M1]</b>, so <span class="chem">σ = 6.2897… ≈ 6.29</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-1-q040',
      topic: 't4-1',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 2,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.4',
      stem: '<p>A dealer records the age <span class="chem">x</span> years and the resale value <span class="chem">y</span> (in thousands of dollars) of <span class="chem">8</span> cars of the same model.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Age <span class="chem">x</span> (years)</th><td class="num">1</td><td class="num">2</td><td class="num">3</td><td class="num">4</td><td class="num">5</td><td class="num">6</td><td class="num">7</td><td class="num">8</td></tr><tr><th scope="row">Value <span class="chem">y</span> (thousand $)</th><td class="num">27.5</td><td class="num">24.8</td><td class="num">22.1</td><td class="num">20.6</td><td class="num">18.0</td><td class="num">16.2</td><td class="num">14.9</td><td class="num">12.8</td></tr></tbody></table></div><p>The regression line of <span class="chem">y</span> on <span class="chem">x</span> is <span class="chem">y = ax + b</span>. Write down the value of <span class="chem">b</span>.</p>',
      answer: 28.86428571428571,
      sigfigs: 3,
      hints: [
        'Run <span class="mono">LinReg(ax+b)</span> with the ages as the Xlist.',
        'Interpretation: <span class="chem">b</span> is the model\'s value (in thousand $) of a car aged <span class="chem">x = 0</span>, i.e. a new car. Since 0 is just outside the ages 1–8, treat it with care.'
      ],
      solution: '<p>GDC: <span class="chem">a = -2.05595…</span>, <span class="chem">b = 28.8643… ≈ 28.9</span> <b>[A2]</b>.<br>In context, <span class="chem">b</span> is the estimated value of a new car, about $28,900, and <span class="chem">a</span> means the value falls by about $2,060 per year. (<span class="chem">x = 0</span> lies just outside the data, so <span class="chem">b</span> is a slight extrapolation.)</p>'
    },
    {
      id: 't4-1-q041',
      topic: 't4-1',
      level: 'sl',
      tier: 'challenge',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.4',
      stem: '<p>A museum lost its visitor records for 2020. The numbers of visitors (in thousands) for the other years are shown.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Year</th><td class="num">2016</td><td class="num">2017</td><td class="num">2018</td><td class="num">2019</td><td class="num">2021</td><td class="num">2022</td><td class="num">2023</td></tr><tr><th scope="row">Visitors (thousands)</th><td class="num">48.2</td><td class="num">51.0</td><td class="num">53.9</td><td class="num">55.8</td><td class="num">61.4</td><td class="num">63.1</td><td class="num">66.5</td></tr></tbody></table></div><p>Let <span class="chem">x</span> be the number of years after 2015 and <span class="chem">V</span> the number of visitors in thousands. Use the regression line of <span class="chem">V</span> on <span class="chem">x</span> to estimate the number of visitors, in thousands, the museum would have had in 2020 if the trend had continued.</p>',
      answer: 58.58356164383562,
      sigfigs: 3,
      unit: 'thousand',
      hints: [
        'Decode: first change the years into <span class="chem">x</span>-values (2016 → 1, …, 2023 → 8). The missing year 2020 is <span class="chem">x = 5</span>, which lies inside the data, so this is interpolation.',
        'Run <span class="mono">LinReg(ax+b)</span> on the <span class="chem">x</span>-values (1, 2, 3, 4, 6, 7, 8) and the visitor numbers.',
        'Substitute <span class="chem">x = 5</span> (not 2020) into the unrounded line.'
      ],
      solution: '<p><b>Decode:</b> recode the years as <span class="chem">x = 1, 2, 3, 4, 6, 7, 8</span>; 2020 is <span class="chem">x = 5</span> <b>[M1]</b>.<br>GDC: <span class="chem">V = 2.54623x + 45.8524</span> (<span class="chem">r = 0.999</span>) <b>[A1 A1]</b>.<br><span class="chem">V(5) = 58.5836… ≈ 58.6</span> thousand visitors <b>[A1]</b>.</p>'
    },
    {
      id: 't4-1-q042',
      topic: 't4-1',
      level: 'sl',
      tier: 'challenge',
      type: 'short',
      marks: 9,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.2',
      stem: '<p>A consumer group tests <span class="chem">11</span> batteries of each of two brands and records how long each lasts, in hours.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Brand P (h)</th><td class="num">52</td><td class="num">47</td><td class="num">72</td><td class="num">50</td><td class="num">55</td><td class="num">41</td><td class="num">48</td><td class="num">57</td><td class="num">45</td><td class="num">54</td><td class="num">51</td></tr><tr><th scope="row">Brand Q (h)</th><td class="num">58</td><td class="num">61</td><td class="num">44</td><td class="num">55</td><td class="num">66</td><td class="num">52</td><td class="num">63</td><td class="num">49</td><td class="num">60</td><td class="num">64</td><td class="num">56</td></tr></tbody></table></div><p>Quartiles are found by the GDC method: the median of each half of the ordered data, leaving out the overall median when the number of values is odd.<br>(a) Find the five-number summary (minimum, <span class="chem">Q_1</span>, median, <span class="chem">Q_3</span>, maximum) for each brand. <strong>[4 marks]</strong><br>(b) Determine whether either brand has an outlier. <strong>[2 marks]</strong><br>(c) The box plots of the two brands are drawn on the same scale. Use them to compare the two brands, and state which brand you would recommend to a buyer who wants batteries that last a predictable time. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) P: <span class="chem">41, 47, 51, 55, 72</span>; Q: <span class="chem">44, 52, 58, 63, 66</span>.<br>(b) P: <span class="chem">IQR = 8</span>, upper fence <span class="chem">67</span>, so <span class="chem">72</span> is an outlier. Q: fences <span class="chem">35.5</span> and <span class="chem">79.5</span>, no outliers.<br>(c) Q has the higher median (<span class="chem">58</span> h against <span class="chem">51</span> h), so Q batteries generally last longer. P has the smaller IQR (<span class="chem">8</span> against <span class="chem">11</span>), so apart from its one outlier P is more consistent. For a predictable lifetime, recommend P (smaller IQR), noting the one unusually long-lasting battery.</p>',
      markscheme: [
        'A1: Brand P: Q₁ = 47, median = 51, Q₃ = 55.',
        'A1: Brand P: min 41, max 72.',
        'A1: Brand Q: Q₁ = 52, median = 58, Q₃ = 63.',
        'A1: Brand Q: min 44, max 66.',
        'R1: P: IQR = 8, upper fence 67 < 72, so 72 is an outlier (lower fence 35 < 41).',
        'R1: Q: IQR = 11, fences 35.5 and 79.5 contain all values, so no outliers.',
        'R1: Compares medians in context: Q generally lasts longer.',
        'R1: Compares IQRs in context: P is more consistent (less spread).',
        'R1: Recommends P for predictability, with a reason based on spread (accept Q if justified by its higher median AND lack of outliers).'
      ],
      hints: [
        'Decode: "compare" in a statistics question means compare a measure of centre (median) AND a measure of spread (IQR), each in context. "Predictable" is about spread, not about the average.',
        'Put each brand in its own list and run <span class="mono">1-Var Stats</span>. Then fences: <span class="chem">Q_1 - 1.5 IQR</span> and <span class="chem">Q_3 + 1.5 IQR</span>.',
        'Do not use the range to judge spread when one brand has an outlier: the IQR is not affected by it.'
      ],
      solution: '<p><b>Decode:</b> compare centre and spread in context; "predictable" means small spread.<br>(a) P ordered: 41, 45, 47, 48, 50, 51, 52, 54, 55, 57, 72, so <span class="chem">Q_1 = 47</span>, median <span class="chem">51</span>, <span class="chem">Q_3 = 55</span> <b>[A1]</b>, min 41, max 72 <b>[A1]</b>.<br>Q ordered: 44, 49, 52, 55, 56, 58, 60, 61, 63, 64, 66, so <span class="chem">Q_1 = 52</span>, median <span class="chem">58</span>, <span class="chem">Q_3 = 63</span> <b>[A1]</b>, min 44, max 66 <b>[A1]</b>.<br>(b) P: <span class="chem">IQR = 8</span>, fences <span class="chem">35</span> and <span class="chem">67</span>; <span class="chem">72 &gt; 67</span> is an outlier <b>[R1]</b>. Q: <span class="chem">IQR = 11</span>, fences <span class="chem">35.5</span> and <span class="chem">79.5</span>; no outliers <b>[R1]</b>.<br>(c) The median of Q (<span class="chem">58</span> h) is higher than that of P (<span class="chem">51</span> h), so Q batteries usually last longer <b>[R1]</b>. The IQR of P (<span class="chem">8</span> h) is smaller than that of Q (<span class="chem">11</span> h), so the middle half of P batteries are more consistent <b>[R1]</b>. For a predictable lifetime choose P <b>[R1]</b>.</p>'
    },
    {
      id: 't4-1-q043',
      topic: 't4-1',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 3,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.3',
      stem: '<p>An ornithologist counts the number of eggs <span class="chem">x</span> in each of <span class="chem">40</span> nests.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Eggs <span class="chem">x</span></th><td class="num">2</td><td class="num">3</td><td class="num">4</td><td class="num">5</td><td class="num">6</td></tr><tr><th scope="row">Number of nests</th><td class="num">4</td><td class="num">9</td><td class="num">15</td><td class="num">8</td><td class="num">4</td></tr></tbody></table></div><p>Find the variance of the number of eggs per nest.</p>',
      answer: 1.224375,
      sigfigs: 3,
      hints: [
        'Run <span class="mono">1-Var Stats</span> with the numbers of nests as the frequency list.',
        'The variance is <span class="chem">σ^2</span>: square the value of <span class="mono">σx</span> (use its full value, not a rounded one).'
      ],
      solution: '<p>GDC with frequencies: <span class="chem">n = 40</span>, <span class="chem">x̄ = 3.975</span>, <span class="chem">σ = 1.10651…</span> <b>[M1 A1]</b>.<br>Variance <span class="chem">σ^2 = 1.22437 ≈ 1.22</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-1-q044',
      topic: 't4-1',
      level: 'sl',
      tier: 'challenge',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 4.3',
      stem: '<p>The distances, in km, that <span class="chem">14</span> employees travel to work are:</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Distance (km)</th><td class="num">3.2</td><td class="num">5.8</td><td class="num">7.1</td><td class="num">4.4</td><td class="num">12.6</td><td class="num">6.3</td><td class="num">8.9</td><td class="num">2.7</td><td class="num">9.5</td><td class="num">5.1</td><td class="num">6.8</td><td class="num">15.2</td><td class="num">4.9</td><td class="num">7.6</td></tr></tbody></table></div><p>A manager says an employee lives "within one standard deviation of the mean" if their distance is between <span class="chem">x̄ - σ</span> and <span class="chem">x̄ + σ</span>. How many of the <span class="chem">14</span> employees live within one standard deviation of the mean?</p>',
      answer: 10,
      sigfigs: '1-2',
      hints: [
        'Decode: the answer is a count of employees (a whole number), not a distance. First find the interval <span class="chem">(x̄ - σ, x̄ + σ)</span>, then count the data values inside it.',
        'GDC: <span class="mono">1-Var Stats</span> gives <span class="chem">x̄</span> and <span class="chem">σ</span> (use <span class="chem">σ</span>, not <span class="chem">s</span>).',
        'Order the data and count the values strictly between the two limits.'
      ],
      solution: '<p><b>Decode:</b> build the interval from <span class="chem">x̄</span> and <span class="chem">σ</span>, then count.<br>GDC: <span class="chem">x̄ = 7.15</span>, <span class="chem">σ = 3.3615…</span> <b>[M1 A1]</b>.<br>Interval: <span class="chem">3.79 &lt; d &lt; 10.51</span> <b>[A1]</b>.<br>Ordered: 2.7, 3.2, | 4.4, 4.9, 5.1, 5.8, 6.3, 6.8, 7.1, 7.6, 8.9, 9.5, | 12.6, 15.2. So <span class="chem">10</span> employees <b>[A1]</b>.</p>'
    },
    {
      id: 't4-1-q045',
      topic: 't4-1',
      level: 'sl',
      tier: 'foundation',
      type: 'mcq',
      marks: 2,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.1',
      stem: '<p>A sports club collects four kinds of data about its members. Which one is <strong>continuous</strong> data?</p>',
      options: [
        'The time each member takes to swim 50 m',
        'The number of training sessions each member attended last month',
        'The number of medals each member has won',
        'Each member\'s shirt size (S, M, L or XL)'
      ],
      answer: 0,
      misconception: {
        1: 'A number of sessions is counted in whole steps (0, 1, 2, …), so it is discrete.',
        2: 'Medals are counted, so the data are discrete, even though the numbers may be large.',
        3: 'Shirt sizes are categories, not measurements on a continuous scale.'
      },
      hints: [
        'Continuous data are <em>measured</em> and can take any value in an interval; discrete data are <em>counted</em> or take separate values.'
      ],
      solution: '<p>A time is measured and can take any value in an interval (for example 41.37 s), so it is continuous <b>[A2]</b>. Numbers of sessions and medals are counted (discrete), and shirt sizes are categories.</p>'
    },
    {
      id: 't4-1-q046',
      topic: 't4-1',
      level: 'sl',
      tier: 'foundation',
      type: 'mcq',
      marks: 2,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.3',
      stem: '<p>The masses <span class="chem">m</span> kg of <span class="chem">50</span> parcels are grouped as follows.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Mass <span class="chem">m</span> (kg)</th><td class="num">0 ≤ <i>m</i> &lt; 2</td><td class="num">2 ≤ <i>m</i> &lt; 4</td><td class="num">4 ≤ <i>m</i> &lt; 6</td><td class="num">6 ≤ <i>m</i> &lt; 8</td></tr><tr><th scope="row">Frequency</th><td class="num">9</td><td class="num">17</td><td class="num">14</td><td class="num">10</td></tr></tbody></table></div><p>Which is the modal class?</p>',
      options: [
        '<span class="chem">2 ≤ m &lt; 4</span>',
        '<span class="chem">6 ≤ m &lt; 8</span>',
        '<span class="chem">4 ≤ m &lt; 6</span>',
        '<span class="chem">17</span>'
      ],
      answer: 0,
      misconception: {
        1: 'You chose the class with the largest masses. The modal class is the one with the largest frequency.',
        2: 'This is the middle class of the table, not the class with the largest frequency (17). The modal class depends on the frequencies, not on the position of the class.',
        3: '17 is the highest frequency. The modal class is the class itself, not its frequency.'
      },
      hints: [
        'With equal class widths, the modal class is the class with the highest frequency.'
      ],
      solution: '<p>The highest frequency is <span class="chem">17</span>, so the modal class is <span class="chem">2 ≤ m &lt; 4</span> <b>[A2]</b>.</p>'
    },
    {
      id: 't4-1-q047',
      topic: 't4-1',
      level: 'sl',
      tier: 'foundation',
      type: 'numeric',
      marks: 3,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.2',
      stem: '<p>The numbers of emails received by a manager on <span class="chem">9</span> days were</p><p class="chem">12, 3, 19, 8, 14, 22, 7, 15, 11.</p><p>Find the interquartile range. (Use the median of each half, leaving out the overall median.)</p>',
      answer: 9.5,
      sigfigs: '2-3',
      hints: [
        'Write the data in order first. With <span class="chem">9</span> values the median is the 5th value.',
        'The lower half is the 4 values below the median, and the upper half is the 4 values above it.'
      ],
      solution: '<p>Ordered: <span class="chem">3, 7, 8, 11, 12, 14, 15, 19, 22</span>; median <span class="chem">12</span>.<br><span class="chem">Q_1 = (7 + 8)/2 = 7.5</span> and <span class="chem">Q_3 = (15 + 19)/2 = 17</span> <b>[A1 A1]</b>.<br><span class="chem">IQR = 17 - 7.5 = 9.5</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-1-q048',
      topic: 't4-1',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 3,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.3',
      stem: '<p>A teacher scales the raw marks <span class="chem">x</span> of a test using <span class="chem">y = 1.2x + 10</span>. The scaled marks <span class="chem">y</span> have mean <span class="chem">70</span> and standard deviation <span class="chem">9</span>. Find the standard deviation of the raw marks.</p>',
      answer: 7.5,
      sigfigs: '2-3',
      hints: [
        'Decode: you are given the <em>new</em> standard deviation and asked for the <em>original</em> one, so work backwards.',
        'Under <span class="chem">y = ax + b</span>, <span class="chem">σ_y = |a| σ_x</span>; the <span class="chem">+10</span> and the mean <span class="chem">70</span> play no part.'
      ],
      solution: '<p><span class="chem">σ_y = 1.2 σ_x</span> (adding 10 does not affect spread) <b>[M1]</b>, so <span class="chem">9 = 1.2 σ_x</span> <b>[A1]</b> and <span class="chem">σ_x = 9/1.2 = 7.5</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-1-q049',
      topic: 't4-1',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 2,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.3',
      stem: '<p>A data set <span class="chem">x_1, x_2, …, x_n</span> has variance <span class="chem">4</span>. Each value is replaced by <span class="chem">y_i = 5 - 3x_i</span>. Find the variance of the new values.</p>',
      answer: 36,
      sigfigs: '1-3',
      hints: [
        'Variance scales by <span class="chem">a^2</span> under <span class="chem">y = ax + b</span>: <span class="chem">σ_y^2 = a^2 σ_x^2</span>. The constant <span class="chem">5</span> has no effect.'
      ],
      solution: '<p><span class="chem">σ_y^2 = (-3)^2 × 4</span> <b>[M1]</b> <span class="chem">= 9 × 4 = 36</span> <b>[A1]</b>. (Squaring removes the negative sign; the variance can never be negative.)</p>'
    },
    {
      id: 't4-1-q050',
      topic: 't4-1',
      level: 'sl',
      tier: 'exam',
      type: 'short',
      marks: 5,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.2, 4.3',
      stem: '<p>For a data set <span class="chem">x</span>, the lower quartile is <span class="chem">14</span>, the median is <span class="chem">20</span> and the upper quartile is <span class="chem">27</span>. Each value is transformed using <span class="chem">y = 50 - 2x</span>.<br>(a) Find the median of <span class="chem">y</span>. <strong>[1 mark]</strong><br>(b) Find the lower and upper quartiles of <span class="chem">y</span>. <strong>[3 marks]</strong><br>(c) Hence write down the interquartile range of <span class="chem">y</span>. <strong>[1 mark]</strong></p>',
      answer: '<p>(a) <span class="chem">50 - 2(20) = 10</span><br>(b) Because the multiplier <span class="chem">-2</span> reverses the order, <span class="chem">Q_1(y) = 50 - 2(27) = -4</span> and <span class="chem">Q_3(y) = 50 - 2(14) = 22</span>.<br>(c) <span class="chem">IQR = 22 - (-4) = 26</span> (check: <span class="chem">|-2| × (27 - 14) = 26</span>).</p>',
      markscheme: [
        'A1: Median of y = 50 − 2(20) = 10.',
        'R1: Recognises that multiplying by −2 reverses the order, so the upper quartile of x gives the lower quartile of y.',
        'A1: Q₁(y) = 50 − 2(27) = −4.',
        'A1: Q₃(y) = 50 − 2(14) = 22.',
        'A1: IQR = 22 − (−4) = 26.'
      ],
      hints: [
        'Decode: a linear change maps each ordered value to a new value, but a negative multiplier turns the order upside down. Ask: which <span class="chem">x</span>-quartile becomes the smaller <span class="chem">y</span>-value?',
        'The median stays in the middle: just substitute <span class="chem">x = 20</span>.',
        'Check your IQR with <span class="chem">IQR_y = |a| × IQR_x</span>.'
      ],
      solution: '<p>(a) The middle value maps to the middle value: <span class="chem">50 - 2(20) = 10</span> <b>[A1]</b>.<br>(b) Since <span class="chem">-2 &lt; 0</span>, large <span class="chem">x</span> gives small <span class="chem">y</span>, so the quartiles swap <b>[R1]</b>: <span class="chem">Q_1(y) = 50 - 2(27) = -4</span> <b>[A1]</b> and <span class="chem">Q_3(y) = 50 - 2(14) = 22</span> <b>[A1]</b>.<br>(c) <span class="chem">IQR = 22 - (-4) = 26</span> <b>[A1]</b>, which equals <span class="chem">2 × 13</span>.</p>'
    },
    {
      id: 't4-1-q051',
      topic: 't4-1',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.4',
      stem: '<p>For <span class="chem">12</span> pairs of data <span class="chem">(x, y)</span>, the regression line of <span class="chem">y</span> on <span class="chem">x</span> is <span class="chem">y = -1.6x + 48</span>. The sum of the <span class="chem">y</span>-values is <span class="chem">Σ y = 360</span>. Find the mean of the <span class="chem">x</span>-values.</p>',
      answer: 11.25,
      sigfigs: '3-4',
      hints: [
        'Decode: the only link between the line and the means is that the regression line passes through the mean point <span class="chem">(x̄, ȳ)</span>.',
        'First find <span class="chem">ȳ = 360/12</span>, then substitute <span class="chem">(x̄, ȳ)</span> into the line.'
      ],
      solution: '<p><span class="chem">ȳ = 360/12 = 30</span> <b>[A1]</b>. The line passes through <span class="chem">(x̄, ȳ)</span> <b>[M1]</b>, so <span class="chem">30 = -1.6x̄ + 48</span> <b>[A1]</b>, giving <span class="chem">x̄ = 18/1.6 = 11.25</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-1-q052',
      topic: 't4-1',
      level: 'sl',
      tier: 'exam',
      type: 'short',
      marks: 5,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.4',
      stem: '<p>For <span class="chem">20</span> car models with engine power <span class="chem">x</span> kW, where <span class="chem">50 ≤ x ≤ 150</span>, the regression line of fuel use <span class="chem">y</span> (litres per 100 km) on <span class="chem">x</span> is <span class="chem">y = 0.04x + 3.2</span>, with <span class="chem">r = 0.91</span>.<br>(a) Interpret the value <span class="chem">0.04</span> in context. <strong>[1 mark]</strong><br>(b) Explain why the value <span class="chem">3.2</span> should not be interpreted as the fuel use of a car with no engine power. <strong>[1 mark]</strong><br>(c) Estimate the fuel use of a car with engine power <span class="chem">120</span> kW. <strong>[2 marks]</strong><br>(d) A sports car has engine power <span class="chem">400</span> kW. Comment on using the line to estimate its fuel use. <strong>[1 mark]</strong></p>',
      answer: '<p>(a) Each extra kW of engine power is associated with an increase of about <span class="chem">0.04</span> L per 100 km in fuel use.<br>(b) <span class="chem">x = 0</span> is far outside the data range <span class="chem">50 ≤ x ≤ 150</span> (and a car with no power is not meaningful), so this is extrapolation.<br>(c) <span class="chem">0.04(120) + 3.2 = 8.0</span> L per 100 km.<br>(d) Unreliable: <span class="chem">400</span> kW is outside the data range, so this is extrapolation.</p>',
      markscheme: [
        'A1: Fuel use rises by about 0.04 L per 100 km for each additional kW, on average.',
        'R1: x = 0 lies outside 50 ≤ x ≤ 150, so the intercept is an extrapolation and has no practical meaning.',
        'M1: Substitutes x = 120 into the line.',
        'A1: y = 8.0 L per 100 km.',
        'R1: 400 kW is outside the range of the data (extrapolation), so the estimate is unreliable even though r is high.'
      ],
      hints: [
        'The gradient is a rate: change in <span class="chem">y</span> per one unit of <span class="chem">x</span>, with units.',
        'Before interpreting the intercept, check whether <span class="chem">x = 0</span> is inside the data range.'
      ],
      solution: '<p>(a) For each extra kW, fuel use increases by about <span class="chem">0.04</span> L per 100 km <b>[A1]</b>.<br>(b) The intercept is the value at <span class="chem">x = 0</span>, which is far outside <span class="chem">50 ≤ x ≤ 150</span>, so it is an extrapolation with no real meaning <b>[R1]</b>.<br>(c) <span class="chem">y = 0.04(120) + 3.2</span> <b>[M1]</b> <span class="chem">= 4.8 + 3.2 = 8.0</span> L per 100 km <b>[A1]</b>.<br>(d) <span class="chem">400</span> kW is well outside the data, so the estimate is an extrapolation and unreliable; a strong <span class="chem">r</span> only describes the pattern inside the data <b>[R1]</b>.</p>'
    },
    {
      id: 't4-1-q053',
      topic: 't4-1',
      level: 'sl',
      tier: 'exam',
      type: 'numeric',
      marks: 3,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.3',
      stem: '<p>The waiting times <span class="chem">w</span> minutes of <span class="chem">20</span> patients at a clinic are grouped below.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Waiting time <span class="chem">w</span> (min)</th><td class="num">0 ≤ <i>w</i> &lt; 10</td><td class="num">10 ≤ <i>w</i> &lt; 20</td><td class="num">20 ≤ <i>w</i> &lt; 30</td><td class="num">30 ≤ <i>w</i> &lt; 40</td></tr><tr><th scope="row">Frequency</th><td class="num">3</td><td class="num">7</td><td class="num">6</td><td class="num">4</td></tr></tbody></table></div><p>Calculate an estimate of the mean waiting time.</p>',
      answer: 20.5,
      sigfigs: '3',
      unit: 'min',
      hints: [
        'Use the mid-interval values <span class="chem">5, 15, 25, 35</span>.',
        '<span class="chem">x̄ ≈ (Σ f x)/(Σ f)</span> with <span class="chem">Σ f = 20</span>.'
      ],
      solution: '<p>Mid-interval values <span class="chem">5, 15, 25, 35</span> <b>[M1]</b>.<br><span class="chem">Σ f x = 15 + 105 + 150 + 140 = 410</span> <b>[A1]</b>, so <span class="chem">x̄ ≈ 410/20 = 20.5</span> min <b>[A1]</b>.</p>'
    },
    {
      id: 't4-1-q054',
      topic: 't4-1',
      level: 'sl',
      tier: 'challenge',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.1, 4.3',
      stem: '<p>The mean mass of <span class="chem">20</span> parcels was calculated as <span class="chem">35</span> kg. A clerk later finds that one parcel of mass <span class="chem">74</span> kg had been entered as <span class="chem">47</span> kg. Find the exact value of the correct mean mass.</p>',
      answer: 36.35,
      answerInput: '727/20',
      exact: true,
      unit: 'kg',
      hints: [
        'Decode: a mean is a total divided by a count. The count (20) is unchanged; only the total was wrong, and you know by how much.',
        'Wrong total <span class="chem">= 20 × 35 = 700</span>. The correct total is larger by <span class="chem">74 - 47</span>.'
      ],
      solution: '<p><b>Decode:</b> correct the total, keep <span class="chem">n = 20</span>.<br>Recorded total <span class="chem">= 20 × 35 = 700</span> kg <b>[M1]</b>. The error was <span class="chem">74 - 47 = 27</span> kg too little <b>[A1]</b>, so the correct total is <span class="chem">727</span> kg <b>[A1]</b> and the correct mean is <span class="chem">727/20 = 36.35</span> kg <b>[A1]</b>.</p>'
    },
    {
      id: 't4-1-q055',
      topic: 't4-1',
      level: 'sl',
      tier: 'challenge',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.3',
      stem: '<p>A set of <span class="chem">n</span> numbers has mean <span class="chem">12</span>. When the number <span class="chem">30</span> is added to the set, the mean of the enlarged set is <span class="chem">13.5</span>. Find the value of <span class="chem">n</span>.</p>',
      answer: 11,
      hints: [
        'Decode: <span class="chem">n</span> is the <em>number of values</em>, not one of the values. Write each mean as (total) ÷ (count).',
        'Original total <span class="chem">= 12n</span>; new total <span class="chem">= 12n + 30</span> and new count <span class="chem">= n + 1</span>.',
        'Solve <span class="chem">(12n + 30)/(n + 1) = 13.5</span>.'
      ],
      solution: '<p><b>Decode:</b> <span class="chem">n</span> is the size of the original set.<br>Original total <span class="chem">12n</span> <b>[M1]</b>; <span class="chem">(12n + 30)/(n + 1) = 13.5</span> <b>[A1]</b>.<br><span class="chem">12n + 30 = 13.5n + 13.5 ⇒ 1.5n = 16.5</span> <b>[A1]</b>, so <span class="chem">n = 11</span> <b>[A1]</b>.</p>'
    },
    {
      id: 't4-1-q056',
      topic: 't4-1',
      level: 'sl',
      tier: 'challenge',
      type: 'numeric',
      marks: 4,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.3',
      stem: '<p>A sports scientist kept only running totals for the <span class="chem">10</span> jump heights <span class="chem">h</span> cm of an athlete: <span class="chem">Σ h = 60</span> and <span class="chem">Σ h^2 = 460</span>. Find the exact value of the standard deviation of the <span class="chem">10</span> heights.</p>',
      answer: 3.1622776601683795,
      answerInput: 'sqrt(10)',
      exact: true,
      unit: 'cm',
      hints: [
        'Decode: you have no raw data, only totals. The formula booklet gives <span class="chem">σ^2 = (Σ x^2)/n - x̄^2</span> (from <span class="chem">σ^2 = Σ(x - μ)^2 / n</span>).',
        'First <span class="chem">x̄ = 60/10 = 6</span>.'
      ],
      solution: '<p><b>Decode:</b> use the totals form of the variance.<br><span class="chem">x̄ = 60/10 = 6</span> <b>[A1]</b>. <span class="chem">σ^2 = 460/10 - 6^2</span> <b>[M1]</b> <span class="chem">= 46 - 36 = 10</span> <b>[A1]</b>, so <span class="chem">σ = √10</span> cm <b>[A1]</b>.</p>'
    },
    {
      id: 't4-1-q057',
      topic: 't4-1',
      level: 'sl',
      tier: 'challenge',
      type: 'numeric',
      marks: 3,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.3',
      stem: '<p>At a company the annual salaries have mean <span class="chem">$48 000</span> and standard deviation <span class="chem">$2500</span>. Next year every employee will receive a <span class="chem">4%</span> pay rise followed by a fixed bonus of <span class="chem">$500</span>. Find the standard deviation of the new salaries, in dollars.</p>',
      answer: 2600,
      unit: '$',
      hints: [
        'Decode: "a 4% rise then a $500 bonus" is the linear change <span class="chem">y = 1.04x + 500</span>. Which part changes the spread?',
        '<span class="chem">σ_y = |a| σ_x</span>; adding the same amount to everyone does not change the spread.'
      ],
      solution: '<p><b>Decode:</b> new salary <span class="chem">y = 1.04x + 500</span> <b>[M1]</b>.<br><span class="chem">σ_y = 1.04 × 2500</span> <b>[A1]</b> <span class="chem">= 2600</span> dollars <b>[A1]</b>. The bonus moves every salary by the same amount, so it does not affect the spread.</p>'
    },
    {
      id: 't4-1-q058',
      topic: 't4-1',
      level: 'sl',
      tier: 'exam',
      type: 'mcq',
      marks: 2,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.4',
      stem: '<p>For <span class="chem">30</span> towns, the correlation coefficient between the number of fast-food outlets <span class="chem">x</span> and the average life expectancy <span class="chem">y</span> is <span class="chem">r = -0.92</span>. Which statement is correct?</p>',
      options: [
        'There is a strong negative linear correlation: towns with more fast-food outlets tend to have a lower life expectancy.',
        'Opening more fast-food outlets in a town will cause its life expectancy to fall.',
        'Life expectancy falls by <span class="chem">0.92</span> years for each extra fast-food outlet.',
        '<span class="chem">92%</span> of the towns lie exactly on the regression line.'
      ],
      answer: 0,
      misconception: {
        1: 'Correlation does not show causation. Both variables may depend on something else, such as income or town size.',
        2: 'r is not the gradient of the regression line. The gradient depends on the units of x and y; r has no units.',
        3: 'r measures how closely the points cluster around a line; it is not a percentage of points on the line.'
      },
      hints: [
        'The sign of <span class="chem">r</span> gives the direction, and <span class="chem">|r|</span> close to 1 means the points are close to a straight line. What does <span class="chem">r</span> <em>not</em> tell you?'
      ],
      solution: '<p><span class="chem">r = -0.92</span> shows a strong negative linear correlation <b>[A1]</b>. It says nothing about cause and effect, and it is not the gradient <b>[R1]</b>.</p>'
    },
    {
      id: 't4-1-q059',
      topic: 't4-1',
      level: 'sl',
      tier: 'challenge',
      type: 'short',
      marks: 7,
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 4.1, 4.2, 4.3',
      stem: '<p>A swimming coach records the 100 m freestyle times, in seconds, of the <span class="chem">9</span> swimmers in a squad:</p><p class="chem">61, 58, 95, 64, 66, 63, 70, 65, 68.</p><p>Quartiles are found by taking the median of each half, leaving out the overall median.<br>(a) Find the median and the quartiles <span class="chem">Q_1</span> and <span class="chem">Q_3</span>. <strong>[3 marks]</strong><br>(b) Show that <span class="chem">95</span> s is an outlier. <strong>[2 marks]</strong><br>(c) The swimmer who recorded <span class="chem">95</span> s had cramp during the race. State, with a reason, whether the coach should include this time when choosing a typical squad time. <strong>[1 mark]</strong><br>(d) State whether the mean or the median is the better measure of a typical time for these <span class="chem">9</span> swimmers, and why. <strong>[1 mark]</strong></p>',
      answer: '<p>(a) Median <span class="chem">65</span>, <span class="chem">Q_1 = 62</span>, <span class="chem">Q_3 = 69</span>.<br>(b) <span class="chem">IQR = 7</span>; upper fence <span class="chem">69 + 1.5(7) = 79.5</span> and <span class="chem">95 &gt; 79.5</span>.<br>(c) Leave it out: it is a genuine time, but it was caused by cramp, so it does not represent the swimmer\'s normal performance.<br>(d) The median, because it is not affected by the outlier (the mean is pulled upwards by 95).</p>',
      markscheme: [
        'A1: Median = 65 s.',
        'A1: Q₁ = (61 + 63)/2 = 62 s.',
        'A1: Q₃ = (68 + 70)/2 = 69 s.',
        'M1: IQR = 7 and upper fence = 69 + 1.5(7) = 79.5.',
        'R1: 95 > 79.5, so 95 is an outlier.',
        'R1: Exclude it (with a reason): the value is genuine but unrepresentative, because it was caused by cramp.',
        'R1: Median, because it is resistant to the outlier.'
      ],
      hints: [
        'Decode: an outlier is not automatically an error. Part (c) asks you to decide, in context, whether the value represents what the coach wants to measure.',
        'Ordered data: <span class="chem">58, 61, 63, 64, 65, 66, 68, 70, 95</span>. The median is the 5th value.',
        'Lower half: the 4 values below the median; upper half: the 4 values above it.'
      ],
      solution: '<p><b>Decode:</b> test 95 with the fence rule, then judge it in context (genuine but unrepresentative).<br>(a) Ordered: <span class="chem">58, 61, 63, 64, 65, 66, 68, 70, 95</span>. Median <span class="chem">65</span> <b>[A1]</b>, <span class="chem">Q_1 = (61 + 63)/2 = 62</span> <b>[A1]</b>, <span class="chem">Q_3 = (68 + 70)/2 = 69</span> <b>[A1]</b>.<br>(b) <span class="chem">IQR = 69 - 62 = 7</span>, upper fence <span class="chem">= 69 + 1.5(7) = 79.5</span> <b>[M1]</b>. <span class="chem">95 &gt; 79.5</span>, so 95 is an outlier <b>[R1]</b>.<br>(c) The time was really swum, but cramp made it unrepresentative of the swimmer\'s ability, so it should be excluded when describing a typical squad time <b>[R1]</b>.<br>(d) The median: one extreme value pulls the mean upwards but hardly moves the median <b>[R1]</b>.</p>'
    }
  ]);
})();
