/* t4-1.q — ko question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't4-1.q', {
  questions: {

    // ── t4-1-q001 · mcq · foundation · SL · SL 4.1 · 2 marks
    "t4-1-q001": {
      // EN: <p>A school has <span class=\"chem\">800</span> students divided into four year groups: <span class=\"chem\">240</span> in Year 9, <span class=\"chem\">200</span> in Year 10, <span class=\"chem\">180</span> in Year 11, and <span class=\"chem\">180</span> in Year 12. A student council takes a <strong>stratified random sample</strong> of <span class=\"chem\">60</span> students altogether. How many Year 9 students should be selected?</p>
      stem: "<p>전체 학생 수가 <span class=\"chem\">800</span>명인 학교가 4개 학년으로 나뉘어 있어요: 9학년 <span class=\"chem\">240</span>명, 10학년 <span class=\"chem\">200</span>명, 11학년 <span class=\"chem\">180</span>명, 12학년 <span class=\"chem\">180</span>명이에요. 학생회에서 총 <span class=\"chem\">60</span>명을 <strong>층화 무작위 표집</strong>으로 뽑으려고 할 때, 9학년 학생은 몇 명을 뽑아야 하나요?</p>",
      options: [
        // EN: <span class=\"chem\">18</span>
        "<span class=\"chem\">18</span>",
        // EN: <span class=\"chem\">15</span>
        "<span class=\"chem\">15</span>",
        // EN: <span class=\"chem\">20</span>
        "<span class=\"chem\">20</span>",
        // EN: <span class=\"chem\">24</span>
        "<span class=\"chem\">24</span>",
      ],
      hints: [
        // EN: In stratified sampling, each stratum is sampled in proportion to its share of the total population: <span class=\"chem\">(N_i / N) × n</span>.
        "층화 표집에서는 각 층이 전체 모집단에서 차지하는 비율에 비례해 표본을 뽑아요: <span class=\"chem\">(N_i / N) × n</span>.",
        // EN: Compute <span class=\"chem\">(240 / 800) × 60</span>.
        "<span class=\"chem\">(240 / 800) × 60</span>을 계산하세요.",
      ],
      // EN: <p>The proportion of Year 9 students in the population is <span class=\"chem\">240 / 800 = 0.30</span>. Multiplying by the sample size <span class=\"chem\">n = 60</span> gives <span class=\"chem\">0.30 × 60 = 18</span> students.</p>
      solution: "<p>모집단에서 9학년의 비율은 <span class=\"chem\">240 / 800 = 0.30</span>이에요. 표본 크기 <span class=\"chem\">n = 60</span>을 곱하면 <span class=\"chem\">0.30 × 60 = 18</span>명이에요.</p>",
      misconception: {
        // EN (option B): You divided 60 equally across the 4 year groups (60 / 4 = 15), which ignores the different year-group sizes.
        "1": "학년별 인원 차이를 무시하고 60명을 4개 학년에 똑같이 나누었어요 (60 / 4 = 15).",
        // EN (option C): You took 1/3 of 60 instead of using the exact fraction 240 / 800 = 0.30.
        "2": "정확한 비율 240 / 800 = 0.30 대신 60의 1/3을 구했어요.",
        // EN (option D): You took 10% of 240 instead of scaling by the sampling fraction 60 / 800.
        "3": "표집 비율 60 / 800을 곱하는 대신 240의 10%를 구했어요.",
      },
    },

    // ── t4-1-q002 · mcq · foundation · SL · SL 4.1 · 2 marks
    "t4-1-q002": {
      // EN: <p>An airport researcher stands at the exit gate and interviews the first <span class=\"chem\">25</span> passengers from Economy Class and the first <span class=\"chem\">10</span> passengers from Business Class who walk past, until both target numbers are reached. What sampling technique is being used?</p>
      stem: "<p>공항 조사원이 출구 게이트에 서서 지나가는 이코노미석 승객 중 처음 <span class=\"chem\">25</span>명과 비즈니스석 승객 중 처음 <span class=\"chem\">10</span>명을 목표 인원이 채워질 때까지 인터뷰했어요. 어떤 표집 방법이 사용되었나요?</p>",
      options: [
        // EN: Quota sampling
        "할당 표집 (Quota sampling)",
        // EN: Stratified random sampling
        "층화 무작위 표집 (Stratified random sampling)",
        // EN: Systematic sampling
        "계통 표집 (Systematic sampling)",
        // EN: Simple random sampling
        "단순무작위 표집 (Simple random sampling)",
      ],
      hints: [
        // EN: Notice two features: the population is split into subgroups with fixed target counts, AND individuals are chosen non-randomly by convenience.
        "두 가지 특징을 보세요: 모집단을 정해진 목표 인원이 있는 소집단으로 나누었고, 대상을 무작위가 아니라 편의상 선택했어요.",
      ],
      // EN: <p>When a population is divided into subgroups with fixed target sizes (quotas) but subjects are selected non-randomly as they arrive, the method is <strong>quota sampling</strong>.</p>
      solution: "<p>모집단을 정해진 목표 크기(할당량)가 있는 소집단으로 나누되, 도착하는 순서대로 비무작위로 대상을 선택하는 방법은 <strong>할당 표집(quota sampling)</strong>이에요.</p>",
      misconception: {
        // EN (option B): Stratified sampling requires selecting individuals at random from a full list within each subgroup; here passengers were chosen by convenience as they walked past.
        "1": "층화 표집은 각 소집단의 전체 명단에서 무작위로 뽑아야 해요. 여기서는 지나가는 승객을 편의상 골랐어요.",
        // EN (option C): Systematic sampling selects every k-th passenger from an ordered list, not the first people to walk past.
        "2": "계통 표집은 정렬된 명단에서 k번째 승객마다 뽑는 방법이지, 처음 지나가는 사람들을 뽑는 게 아니에요.",
        // EN (option D): Simple random sampling gives every passenger on the flight an equal chance of selection via a random draw.
        "3": "단순무작위 표집은 무작위 추첨으로 모든 승객에게 같은 선택 확률을 부여해요.",
      },
    },

    // ── t4-1-q003 · numeric · foundation · SL · SL 4.2 · 3 marks
    "t4-1-q003": {
      // EN: <p>A box-and-whisker plot summarizes a dataset with lower quartile <span class=\"chem\">Q_1 = 28</span>, median <span class=\"chem\">M = 36</span>, and upper quartile <span class=\"chem\">Q_3 = 48</span>. Using the <span class=\"chem\">1.5 × IQR</span> criterion, find the <strong>upper outlier boundary</strong> (fence).</p>
      stem: "<p>어떤 자료를 요약한 상자수염그림에서 제1사분위수 <span class=\"chem\">Q_1 = 28</span>, 중앙값 <span class=\"chem\">M = 36</span>, 제3사분위수 <span class=\"chem\">Q_3 = 48</span>이에요. <span class=\"chem\">1.5 × IQR</span> 기준을 이용해 <strong>위쪽 이상치 경계</strong>(울타리)를 구하시오 (Find).</p>",
      hints: [
        // EN: First compute the interquartile range <span class=\"chem\">IQR = Q_3 - Q_1</span>.
        "먼저 사분위수 범위 <span class=\"chem\">IQR = Q_3 - Q_1</span>을 계산하세요.",
        // EN: Then evaluate <span class=\"chem\">Q_3 + 1.5 × IQR</span>.
        "그다음 <span class=\"chem\">Q_3 + 1.5 × IQR</span>을 계산하세요.",
      ],
      // EN: <p><span class=\"chem\">IQR = 48 - 28 = 20</span> <b>[A1]</b>.<br>Upper fence <span class=\"chem\">= Q_3 + 1.5 × IQR = 48 + 1.5(20) = 48 + 30 = 78</span> <b>[M1 A1]</b>.</p>
      solution: "<p><span class=\"chem\">IQR = 48 - 28 = 20</span> <b>[A1]</b>.<br>위쪽 울타리 <span class=\"chem\">= Q_3 + 1.5 × IQR = 48 + 1.5(20) = 48 + 30 = 78</span> <b>[M1 A1]</b>.</p>",
    },

    // ── t4-1-q004 · numeric · foundation · SL · SL 4.2 · 3 marks
    "t4-1-q004": {
      // EN: <p>For the same dataset with <span class=\"chem\">Q_1 = 28</span> and <span class=\"chem\">Q_3 = 48</span>, find the <strong>lower outlier boundary</strong> (<span class=\"chem\">Q_1 - 1.5 × IQR</span>).</p>
      stem: "<p><span class=\"chem\">Q_1 = 28</span>이고 <span class=\"chem\">Q_3 = 48</span>인 같은 자료에서 <strong>아래쪽 이상치 경계</strong> (<span class=\"chem\">Q_1 - 1.5 × IQR</span>)를 구하시오 (Find).</p>",
      hints: [
        // EN: Use <span class=\"chem\">IQR = 48 - 28 = 20</span>.
        "<span class=\"chem\">IQR = 48 - 28 = 20</span>을 쓰세요.",
        // EN: Compute <span class=\"chem\">28 - 1.5 × 20</span>.
        "<span class=\"chem\">28 - 1.5 × 20</span>을 계산하세요.",
      ],
      // EN: <p><span class=\"chem\">IQR = 20</span>. Lower fence <span class=\"chem\">= Q_1 - 1.5 × IQR = 28 - 30 = -2</span> <b>[M1 A1]</b>.</p>
      solution: "<p><span class=\"chem\">IQR = 20</span> <b>[A1]</b>이에요. 아래쪽 울타리 <span class=\"chem\">= Q_1 - 1.5 × IQR = 28 - 30 = -2</span> <b>[M1 A1]</b>.</p>",
    },

    // ── t4-1-q005 · mcq · foundation · SL · SL 4.3 · 2 marks
    "t4-1-q005": {
      // EN: <p>A dataset <span class=\"chem\">X</span> has mean <span class=\"chem\">x̄ = 12</span> and standard deviation <span class=\"chem\">σ_X = 2.5</span>. Each value is transformed using the linear coding <span class=\"chem\">Y = 50 - 4X</span>. What are the mean <span class=\"chem\">ȳ</span> and standard deviation <span class=\"chem\">σ_Y</span> of <span class=\"chem\">Y</span>?</p>
      stem: "<p>자료 <span class=\"chem\">X</span>의 평균이 <span class=\"chem\">x̄ = 12</span>이고 표준편차가 <span class=\"chem\">σ_X = 2.5</span>예요. 각 값을 선형 변환 <span class=\"chem\">Y = 50 - 4X</span>로 바꾸었을 때, <span class=\"chem\">Y</span>의 평균 <span class=\"chem\">ȳ</span>와 표준편차 <span class=\"chem\">σ_Y</span>는 얼마인가요?</p>",
      options: [
        // EN: <span class=\"chem\">ȳ = 2</span> and <span class=\"chem\">σ_Y = 10</span>
        "<span class=\"chem\">ȳ = 2</span>이고 <span class=\"chem\">σ_Y = 10</span>",
        // EN: <span class=\"chem\">ȳ = 2</span> and <span class=\"chem\">σ_Y = -10</span>
        "<span class=\"chem\">ȳ = 2</span>이고 <span class=\"chem\">σ_Y = -10</span>",
        // EN: <span class=\"chem\">ȳ = 2</span> and <span class=\"chem\">σ_Y = 60</span>
        "<span class=\"chem\">ȳ = 2</span>이고 <span class=\"chem\">σ_Y = 60</span>",
        // EN: <span class=\"chem\">ȳ = -48</span> and <span class=\"chem\">σ_Y = 10</span>
        "<span class=\"chem\">ȳ = -48</span>이고 <span class=\"chem\">σ_Y = 10</span>",
      ],
      hints: [
        // EN: Under <span class=\"chem\">Y = aX + b</span>, the new mean is <span class=\"chem\">ȳ = a x̄ + b</span> and the new standard deviation is <span class=\"chem\">σ_Y = |a|σ_X</span>.
        "<span class=\"chem\">Y = aX + b</span> 변환에서 새 평균은 <span class=\"chem\">ȳ = a x̄ + b</span>이고 새 표준편차는 <span class=\"chem\">σ_Y = |a|σ_X</span>예요.",
      ],
      // EN: <p><span class=\"chem\">ȳ = 50 - 4(12) = 50 - 48 = 2</span> <b>[A1]</b>.<br><span class=\"chem\">σ_Y = |-4| × 2.5 = 4 × 2.5 = 10</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">ȳ = 50 - 4(12) = 50 - 48 = 2</span> <b>[A1]</b>.<br><span class=\"chem\">σ_Y = |-4| × 2.5 = 4 × 2.5 = 10</span> <b>[A1]</b>.</p>",
      misconception: {
        // EN (option B): Standard deviation is a measure of spread and can never be negative! Always multiply by |a| = |−4| = 4.
        "1": "표준편차는 산포도이므로 절대 음수가 될 수 없어요! 항상 |a| = |−4| = 4를 곱하세요.",
        // EN (option C): Adding 50 shifts the mean but has zero effect on the standard deviation; do not add 50 to 4 × 2.5.
        "2": "50을 더하는 것은 평균만 이동시키고 표준편차에는 전혀 영향을 주지 않아요. 4 × 2.5에 50을 더하면 안 돼요.",
        // EN (option D): You forgot to add the constant shift +50 when computing the new mean ȳ = 50 − 4(12).
        "3": "새 평균 ȳ = 50 − 4(12)를 구할 때 상수 이동 +50을 더하는 것을 빠뜨렸어요.",
      },
    },

    // ── t4-1-q006 · numeric · exam · SL · SL 4.3 · 4 marks
    "t4-1-q006": {
      // EN: <p>The discrete values <span class=\"chem\">2, 4, 6, 8</span> occur with frequencies <span class=\"chem\">3, k, 5, 2</span> respectively. Given that the mean of the dataset is <span class=\"chem\">x̄ = 5.0</span>, find the value of <span class=\"chem\">k</span>.</p>
      stem: "<p>이산값 <span class=\"chem\">2, 4, 6, 8</span>이 각각 도수 <span class=\"chem\">3, k, 5, 2</span>로 나타나요. 이 자료의 평균이 <span class=\"chem\">x̄ = 5.0</span>일 때, <span class=\"chem\">k</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Set up <span class=\"chem\">x̄ = (Σ f_i x_i) / (Σ f_i) = 5</span>.
        "<span class=\"chem\">x̄ = (Σ f_i x_i) / (Σ f_i) = 5</span>로 식을 세우세요.",
        // EN: Here <span class=\"chem\">Σ f_i = 3 + k + 5 + 2 = 10 + k</span> and <span class=\"chem\">Σ f_i x_i = 3(2) + k(4) + 5(6) + 2(8) = 52 + 4k</span>.
        "여기서 <span class=\"chem\">Σ f_i = 3 + k + 5 + 2 = 10 + k</span>이고 <span class=\"chem\">Σ f_i x_i = 3(2) + k(4) + 5(6) + 2(8) = 52 + 4k</span>예요.",
      ],
      // EN: <p>Using the mean formula:<br><span class=\"chem\">(6 + 4k + 30 + 16) / (3 + k + 5 + 2) = 5</span> <b>[M1 A1]</b><br><span class=\"chem\">52 + 4k = 5(10 + k) = 50 + 5k</span> <b>[M1]</b><br><span class=\"chem\">k = 2</span> <b>[A1]</b>.</p>
      solution: "<p>평균 공식을 쓰면:<br><span class=\"chem\">(6 + 4k + 30 + 16) / (3 + k + 5 + 2) = 5</span> <b>[M1 A1]</b><br><span class=\"chem\">52 + 4k = 5(10 + k) = 50 + 5k</span> <b>[M1]</b><br><span class=\"chem\">k = 2</span> <b>[A1]</b>.</p>",
    },

    // ── t4-1-q007 · numeric · exam · SL · SL 4.3 · 4 marks
    "t4-1-q007": {
      // EN: <p>The masses (in grams) of <span class=\"chem\">20</span> pebbles are summarized in a grouped frequency table: <span class=\"chem\">4</span> pebbles in <span class=\"chem\">10 ≤ m &lt; 20</span>, <span class=\"chem\">10</span> pebbles in <span class=\"chem\">20 ≤ m &lt; 30</span>, and <span class=\"chem\">6</span> pebbles in <span class=\"chem\">30 ≤ m &lt; 40</span>. Using mid-interval values, calculate the estimate of the population standard deviation <span class=\"chem\">σ</span>.</p>
      stem: "<p>조약돌 <span class=\"chem\">20</span>개의 질량(g)이 도수분포표로 요약되어 있어요: <span class=\"chem\">10 ≤ m &lt; 20</span>에 <span class=\"chem\">4</span>개, <span class=\"chem\">20 ≤ m &lt; 30</span>에 <span class=\"chem\">10</span>개, <span class=\"chem\">30 ≤ m &lt; 40</span>에 <span class=\"chem\">6</span>개예요. 계급값을 이용해 질량의 표준편차 <span class=\"chem\">σ</span>의 추정값을 계산하시오 (Calculate).</p>",
      hints: [
        // EN: The mid-interval values are <span class=\"chem\">15, 25, 35</span> with frequencies <span class=\"chem\">4, 10, 6</span>.
        "계급값은 <span class=\"chem\">15, 25, 35</span>이고 도수는 <span class=\"chem\">4, 10, 6</span>이에요.",
        // EN: First find <span class=\"chem\">m̄ = (4×15 + 10×25 + 6×35)/20 = 26</span>, then compute <span class=\"chem\">σ = sqrt((4(15-26)^2 + 10(25-26)^2 + 6(35-26)^2)/20)</span> (or read <span class=\"mono\">σx</span> from GDC).
        "먼저 <span class=\"chem\">m̄ = (4×15 + 10×25 + 6×35)/20 = 26</span>을 구한 뒤 <span class=\"chem\">σ = sqrt((4(15-26)^2 + 10(25-26)^2 + 6(35-26)^2)/20)</span>을 계산하세요 (또는 GDC에서 <span class=\"mono\">σx</span>를 읽으세요).",
      ],
      // EN: <p>Midpoints are <span class=\"chem\">15, 25, 35</span> <b>[M1]</b>.<br>Mean <span class=\"chem\">m̄ = (60 + 250 + 210) / 20 = 520 / 20 = 26</span> g <b>[A1]</b>.<br>Variance <span class=\"chem\">σ^2 = (4(-11)^2 + 10(-1)^2 + 6(9)^2) / 20 = (484 + 10 + 486) / 20 = 980 / 20 = 49</span>, so <span class=\"chem\">σ = √49 = 7</span> g <b>[M1 A1]</b>.</p>
      solution: "<p>계급값은 <span class=\"chem\">15, 25, 35</span>예요 <b>[M1]</b>.<br>평균 <span class=\"chem\">m̄ = (60 + 250 + 210) / 20 = 520 / 20 = 26</span> g <b>[A1]</b>.<br>분산 <span class=\"chem\">σ^2 = (4(-11)^2 + 10(-1)^2 + 6(9)^2) / 20 = (484 + 10 + 486) / 20 = 980 / 20 = 49</span>이므로 <span class=\"chem\">σ = √49 = 7</span> g이에요 <b>[M1 A1]</b>.</p>",
    },

    // ── t4-1-q008 · mcq · exam · SL · SL 4.4, 4.10 · 2 marks
    "t4-1-q008": {
      // EN: <p>In a study of two uncontrolled variables <span class=\"chem\">x</span> (hours of sleep) and <span class=\"chem\">y</span> (memory score), both the regression line of <span class=\"chem\">y</span> on <span class=\"chem\">x</span> (<span class=\"chem\">L_1: y = ax + b</span>) and the regression line of <span class=\"chem\">x</span> on <span class=\"chem\">y</span> (<span class=\"chem\">L_2: x = cy + d</span>) are calculated. Which line should be used to estimate the hours of sleep <span class=\"chem\">x</span> for a student whose memory score is <span class=\"chem\">y = 75</span>?</p>
      stem: "<p>통제되지 않은 두 변수 <span class=\"chem\">x</span> (수면 시간)와 <span class=\"chem\">y</span> (기억력 점수)에 대한 연구에서 <span class=\"chem\">y</span> on <span class=\"chem\">x</span> 회귀직선(<span class=\"chem\">L_1: y = ax + b</span>)과 <span class=\"chem\">x</span> on <span class=\"chem\">y</span> 회귀직선(<span class=\"chem\">L_2: x = cy + d</span>)이 모두 구해졌어요. 기억력 점수가 <span class=\"chem\">y = 75</span>인 학생의 수면 시간 <span class=\"chem\">x</span>를 추정하려면 어느 직선을 써야 하나요?</p>",
      options: [
        // EN: Line <span class=\"chem\">L_2</span> (<span class=\"chem\">x</span> on <span class=\"chem\">y</span>), by substituting <span class=\"chem\">y = 75</span> into <span class=\"chem\">x = cy + d</span>
        "직선 <span class=\"chem\">L_2</span> (<span class=\"chem\">x</span> on <span class=\"chem\">y</span>) — <span class=\"chem\">x = cy + d</span>에 <span class=\"chem\">y = 75</span>를 대입한다",
        // EN: Line <span class=\"chem\">L_1</span> (<span class=\"chem\">y</span> on <span class=\"chem\">x</span>), by setting <span class=\"chem\">75 = ax + b</span> and solving for <span class=\"chem\">x</span>
        "직선 <span class=\"chem\">L_1</span> (<span class=\"chem\">y</span> on <span class=\"chem\">x</span>) — <span class=\"chem\">75 = ax + b</span>로 놓고 <span class=\"chem\">x</span>를 푼다",
        // EN: Either <span class=\"chem\">L_1</span> or <span class=\"chem\">L_2</span>, because both lines give the exact same value of <span class=\"chem\">x</span>
        "<span class=\"chem\">L_1</span> 또는 <span class=\"chem\">L_2</span> 아무거나 — 두 직선이 정확히 같은 <span class=\"chem\">x</span> 값을 준다",
        // EN: Average the two values of <span class=\"chem\">x</span> obtained from <span class=\"chem\">L_1</span> and <span class=\"chem\">L_2</span>
        "<span class=\"chem\">L_1</span>과 <span class=\"chem\">L_2</span>에서 구한 두 <span class=\"chem\">x</span> 값의 평균을 낸다",
      ],
      hints: [
        // EN: When neither variable is controlled and <span class=\"chem\">y</span> is given to predict <span class=\"chem\">x</span>, which residuals should be minimized?
        "어느 변수도 통제되지 않았고 <span class=\"chem\">y</span>가 주어져 <span class=\"chem\">x</span>를 예측해야 할 때, 어느 방향의 잔차를 최소화해야 할까요?",
      ],
      // EN: <p>To estimate <span class=\"chem\">x</span> from a given value of <span class=\"chem\">y</span> when neither variable is controlled, you must use the regression line of <strong><span class=\"chem\">x</span> on <span class=\"chem\">y</span></strong> (<span class=\"chem\">L_2: x = cy + d</span>).</p>
      solution: "<p>어느 변수도 통제되지 않은 상황에서 주어진 <span class=\"chem\">y</span> 값으로부터 <span class=\"chem\">x</span>를 추정하려면 반드시 <strong><span class=\"chem\">x</span> on <span class=\"chem\">y</span></strong> 회귀직선 (<span class=\"chem\">L_2: x = cy + d</span>)을 써야 해요.</p>",
      misconception: {
        // EN (option B): Rearranging the y-on-x line to solve for x minimizes vertical residuals instead of horizontal residuals, giving a biased estimate whenever |r| < 1.
        "1": "y-on-x 직선을 변형해 x를 풀면 수평 잔차가 아니라 수직 잔차를 최소화하게 되어 |r| < 1일 때 편향된 추정값이 나와요.",
        // EN (option C): The two regression lines only give the same value at the mean point (x̄, ȳ) or when |r| = 1.
        "2": "두 회귀직선은 평균점 (x̄, ȳ)에서만, 또는 |r| = 1일 때만 같은 값을 줘요.",
        // EN (option D): You never average the two lines; each line is optimal for its own prediction direction.
        "3": "두 직선의 평균을 내지 않아요. 각 직선은 자기 예측 방향에 대해 최적이에요.",
      },
    },

    // ── t4-1-q009 · numeric · exam · SL · SL 4.4, 4.10 · 4 marks
    "t4-1-q009": {
      // EN: <p>For a bivariate dataset, the regression line of <span class=\"chem\">y</span> on <span class=\"chem\">x</span> is <span class=\"chem\">y = 1.5x + 4</span> and the regression line of <span class=\"chem\">x</span> on <span class=\"chem\">y</span> is <span class=\"chem\">x = 0.5y + 1</span>. Find the sample mean <span class=\"chem\">x̄</span>.</p>
      stem: "<p>이변량 자료에서 <span class=\"chem\">y</span> on <span class=\"chem\">x</span> 회귀직선은 <span class=\"chem\">y = 1.5x + 4</span>이고 <span class=\"chem\">x</span> on <span class=\"chem\">y</span> 회귀직선은 <span class=\"chem\">x = 0.5y + 1</span>이에요. 표본 평균 <span class=\"chem\">x̄</span>를 구하시오 (Find).</p>",
      hints: [
        // EN: Both regression lines intersect at the mean point <span class=\"chem\">(x̄, ȳ)</span>.
        "두 회귀직선은 평균점 <span class=\"chem\">(x̄, ȳ)</span>에서 만나요.",
        // EN: Substitute <span class=\"chem\">ȳ = 1.5x̄ + 4</span> into <span class=\"chem\">x̄ = 0.5ȳ + 1</span> and solve for <span class=\"chem\">x̄</span>.
        "<span class=\"chem\">ȳ = 1.5x̄ + 4</span>를 <span class=\"chem\">x̄ = 0.5ȳ + 1</span>에 대입해 <span class=\"chem\">x̄</span>를 구하세요.",
      ],
      // EN: <p>At the mean point <span class=\"chem\">(x̄, ȳ)</span>, both equations hold simultaneously <b>[M1]</b>:<br><span class=\"chem\">x̄ = 0.5(1.5x̄ + 4) + 1 = 0.75x̄ + 2 + 1 = 0.75x̄ + 3</span> <b>[M1 A1]</b><br><span class=\"chem\">0.25x̄ = 3 ⇒ x̄ = 12</span> (and <span class=\"chem\">ȳ = 22</span>) <b>[A1]</b>.</p>
      solution: "<p>평균점 <span class=\"chem\">(x̄, ȳ)</span>에서는 두 식이 동시에 성립해요 <b>[M1]</b>:<br><span class=\"chem\">x̄ = 0.5(1.5x̄ + 4) + 1 = 0.75x̄ + 2 + 1 = 0.75x̄ + 3</span> <b>[M1 A1]</b><br><span class=\"chem\">0.25x̄ = 3 ⇒ x̄ = 12</span> (그리고 <span class=\"chem\">ȳ = 22</span>) <b>[A1]</b>.</p>",
    },

    // ── t4-1-q010 · numeric · challenge · SL · SL 4.4, 4.10 · 3 marks
    "t4-1-q010": {
      // EN: <p>A geography class records the altitude <span class="chem">x</span> km and the mean July air temperature <span class="chem">y</span> °C at 8 weather stations on a mountain.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Altitude <span class="chem">x</span> (km)</th><td class="num">0.2</td><td class="num">0.5</td><td class="num">0.9</td><td class="num">1.2</td><td class="num">1.6</td><td class="num">1.9</td><td class="num">2.3</td><td class="num">2.8</td></tr><tr><th scope="row">Temperature <span class="chem">y</span> (°C)</th><td class="num">24.1</td><td class="num">23.5</td><td class="num">19.8</td><td class="num">20.6</td><td class="num">16.2</td><td class="num">17.9</td><td class="num">12.4</td><td class="num">11.8</td></tr></tbody></table></div><p>The regression line of <span class="chem">x</span> on <span class="chem">y</span> is <span class="chem">x = cy + d</span>. Find the value of <span class="chem">c</span>.</p>
      stem: "<p>지리 수업에서 어느 산의 기상 관측소 8곳의 해발고도 <span class=\"chem\">x</span> km와 7월 평균 기온 <span class=\"chem\">y</span> °C를 기록했다.</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">해발고도 <span class=\"chem\">x</span> (km)</th><td class=\"num\">0.2</td><td class=\"num\">0.5</td><td class=\"num\">0.9</td><td class=\"num\">1.2</td><td class=\"num\">1.6</td><td class=\"num\">1.9</td><td class=\"num\">2.3</td><td class=\"num\">2.8</td></tr><tr><th scope=\"row\">기온 <span class=\"chem\">y</span> (°C)</th><td class=\"num\">24.1</td><td class=\"num\">23.5</td><td class=\"num\">19.8</td><td class=\"num\">20.6</td><td class=\"num\">16.2</td><td class=\"num\">17.9</td><td class=\"num\">12.4</td><td class=\"num\">11.8</td></tr></tbody></table></div><p><span class=\"chem\">x</span> on <span class=\"chem\">y</span> 회귀직선은 <span class=\"chem\">x = cy + d</span>이다. <span class=\"chem\">c</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: “<span class="chem">x</span> on <span class="chem">y</span>” means that <span class="chem">x</span> is the variable being predicted and <span class="chem">y</span> is the explanatory variable, so the GDC must regress the <span class="chem">x</span>-values on the <span class="chem">y</span>-values. <span class="chem">c</span> is <strong>not</strong> <span class="chem">1/a</span>, the reciprocal of the gradient of the <span class="chem">y</span>-on-<span class="chem">x</span> line.
        "해석: “<span class=\"chem\">x</span> on <span class=\"chem\">y</span>”는 <span class=\"chem\">x</span>가 예측하려는 변수이고 <span class=\"chem\">y</span>가 설명변수라는 뜻이에요. 그래서 GDC에서는 <span class=\"chem\">x</span> 값을 <span class=\"chem\">y</span> 값에 대해 회귀시켜야 해요. <span class=\"chem\">c</span>는 <span class=\"chem\">1/a</span>(<span class=\"chem\">y</span> on <span class=\"chem\">x</span> 회귀직선 기울기의 역수)가 <strong>아니에요</strong>.",
        // EN: Run LinReg(ax+b) with the temperatures as the Xlist and the altitudes as the Ylist. The “slope” the GDC shows is <span class="chem">c</span> and the “intercept” is <span class="chem">d</span>.
        "기온을 Xlist, 해발고도를 Ylist로 놓고 LinReg(ax+b)를 실행하세요. GDC가 보여 주는 “기울기”가 <span class=\"chem\">c</span>이고 “절편”이 <span class=\"chem\">d</span>예요.",
        // EN: Check: <span class="chem">c</span> has the same sign as <span class="chem">r</span>. The two lines agree with each other only when <span class="chem">|r| = 1</span>, so expect <span class="chem">c</span> ≠ <span class="chem">1/a</span> here.
        "확인: <span class=\"chem\">c</span>는 <span class=\"chem\">r</span>와 부호가 같아요. 두 회귀직선은 <span class=\"chem\">|r| = 1</span>일 때만 일치하므로, 여기서는 <span class=\"chem\">c</span> ≠ <span class=\"chem\">1/a</span>일 거예요.",
      ],
      // EN: <p>Decode: <span class="chem">x</span> on <span class="chem">y</span>, so the temperatures <span class="chem">y</span> are the Xlist and the altitudes <span class="chem">x</span> are the Ylist <b>[M1]</b>.<br>GDC: <span class="chem">x = −0.18604y + 4.8272</span> <b>[A1]</b>, so <span class="chem">c ≈ −0.186</span> <b>[A1]</b>.<br>(Here <span class="chem">r = −0.963</span>. The <span class="chem">y</span>-on-<span class="chem">x</span> line is <span class="chem">y = −4.9826x + 25.388</span>; rearranging it would give <span class="chem">1/a = 1/(−4.9826) ≈ −0.201</span>, which is not <span class="chem">c</span>, because <span class="chem">|r| &lt; 1</span>.)</p>
      solution: "<p>Decode: <span class=\"chem\">x</span> on <span class=\"chem\">y</span>이므로 기온 <span class=\"chem\">y</span>를 Xlist, 해발고도 <span class=\"chem\">x</span>를 Ylist로 놓아요 <b>[M1]</b>.<br>GDC: <span class=\"chem\">x = −0.18604y + 4.8272</span> <b>[A1]</b>, 따라서 <span class=\"chem\">c ≈ −0.186</span> <b>[A1]</b>.<br>(여기서 <span class=\"chem\">r = −0.963</span>이에요. <span class=\"chem\">y</span> on <span class=\"chem\">x</span> 회귀직선은 <span class=\"chem\">y = −4.9826x + 25.388</span>이고, 이를 변형하면 <span class=\"chem\">1/a = 1/(−4.9826) ≈ −0.201</span>이 되지만 <span class=\"chem\">|r| &lt; 1</span>이므로 이는 <span class=\"chem\">c</span>가 아니에요.)</p>",
    },

    // ── t4-1-q011 · multi · exam · SL · SL 4.3, 4.4 · 3 marks
    "t4-1-q011": {
      // EN: <p>A bivariate dataset <span class=\"chem\">(x_i, y_i)</span> has correlation coefficient <span class=\"chem\">r = 0.82</span>, mean point <span class=\"chem\">(x̄, ȳ) = (10, 20)</span>, and standard deviations <span class=\"chem\">σ_x = 3</span>, <span class=\"chem\">σ_y = 5</span>. Select <strong>all</strong> statements that are always true.</p>
      stem: "<p>이변량 자료 <span class=\"chem\">(x_i, y_i)</span>의 상관계수가 <span class=\"chem\">r = 0.82</span>, 평균점이 <span class=\"chem\">(x̄, ȳ) = (10, 20)</span>, 표준편차가 <span class=\"chem\">σ_x = 3</span>, <span class=\"chem\">σ_y = 5</span>예요. 항상 참인 설명을 <strong>모두</strong> 고르시오.</p>",
      options: [
        // EN: Both the <span class=\"chem\">y</span>-on-<span class=\"chem\">x</span> and <span class=\"chem\">x</span>-on-<span class=\"chem\">y</span> regression lines pass through <span class=\"chem\">(10, 20)</span>.
        "<span class=\"chem\">y</span>-on-<span class=\"chem\">x</span> 회귀직선과 <span class=\"chem\">x</span>-on-<span class=\"chem\">y</span> 회귀직선은 모두 <span class=\"chem\">(10, 20)</span>을 지난다.",
        // EN: If every <span class=\"chem\">x_i</span> is replaced by <span class=\"chem\">u_i = 2x_i + 7</span>, the correlation between <span class=\"chem\">u</span> and <span class=\"chem\">y</span> is still <span class=\"chem\">0.82</span>.
        "모든 <span class=\"chem\">x_i</span>를 <span class=\"chem\">u_i = 2x_i + 7</span>로 바꾸어도 <span class=\"chem\">u</span>와 <span class=\"chem\">y</span>의 상관계수는 여전히 <span class=\"chem\">0.82</span>이다.",
        // EN: If every <span class=\"chem\">y_i</span> is replaced by <span class=\"chem\">v_i = 100 - y_i</span>, the correlation between <span class=\"chem\">x</span> and <span class=\"chem\">v</span> becomes <span class=\"chem\">-0.82</span>.
        "모든 <span class=\"chem\">y_i</span>를 <span class=\"chem\">v_i = 100 - y_i</span>로 바꾸면 <span class=\"chem\">x</span>와 <span class=\"chem\">v</span>의 상관계수는 <span class=\"chem\">-0.82</span>가 된다.",
        // EN: The <span class=\"chem\">y</span>-on-<span class=\"chem\">x</span> and <span class=\"chem\">x</span>-on-<span class=\"chem\">y</span> regression lines are identical on the coordinate plane.
        "<span class=\"chem\">y</span>-on-<span class=\"chem\">x</span> 회귀직선과 <span class=\"chem\">x</span>-on-<span class=\"chem\">y</span> 회귀직선은 좌표평면 위에서 완전히 일치한다.",
      ],
      hints: [
        // EN: Check how linear coding affects <span class=\"chem\">r</span>, and remember when the two regression lines coincide.
        "선형 변환이 <span class=\"chem\">r</span>에 어떤 영향을 주는지 확인하고, 두 회귀직선이 언제 일치하는지 떠올리세요.",
      ],
      // EN: <p>Statements A, B, and C are true: both lines always pass through <span class=\"chem\">(x̄, ȳ)</span>, positive linear scaling preserves <span class=\"chem\">r = 0.82</span>, and multiplying one variable by <span class=\"chem\">-1</span> flips the sign to <span class=\"chem\">-0.82</span>. Statement D is false because <span class=\"chem\">|r| = 0.82 ≠ 1</span>.</p>
      solution: "<p>A, B, C가 참이에요: 두 직선은 항상 <span class=\"chem\">(x̄, ȳ)</span>를 지나고, 양수 배수 선형 변환은 <span class=\"chem\">r = 0.82</span>를 유지하며, 한 변수에 <span class=\"chem\">-1</span>을 곱하면 부호가 <span class=\"chem\">-0.82</span>로 바뀌어요. D는 <span class=\"chem\">|r| = 0.82 ≠ 1</span>이므로 거짓이에요.</p>",
      misconception: {
        // EN (option D): The two regression lines coincide if and only if |r| = 1. Since r = 0.82 < 1, the two lines intersect at (10, 20) with different slopes.
        "3": "두 회귀직선은 |r| = 1일 때만 일치해요. r = 0.82 < 1이므로 두 직선은 (10, 20)에서 서로 다른 기울기로 만나요.",
      },
    },

    // ── t4-1-q012 · order · exam · SL · SL 4.4 · 3 marks
    "t4-1-q012": {
      // EN: <p>Order the following four steps to find a linear regression estimate of <span class="chem">y</span> at <span class="chem">x = x_0</span> and judge whether it is reliable. Each step uses the result of the step before it.</p>
      stem: "<p><span class=\"chem\">x = x_0</span>에서 <span class=\"chem\">y</span>의 선형 회귀 추정값을 구하고 그 값이 신뢰할 만한지 판단하는 다음 4단계를 올바른 순서로 배열하시오. 각 단계는 바로 앞 단계의 결과를 사용해요.</p>",
      options: [
        // EN: Enter the <span class="chem">x</span>-values in <span class="mono">L1</span> and the <span class="chem">y</span>-values in <span class="mono">L2</span> on the GDC.
        "GDC에서 <span class=\"chem\">x</span> 값을 <span class=\"mono\">L1</span>에, <span class=\"chem\">y</span> 값을 <span class=\"mono\">L2</span>에 입력한다.",
        // EN: Run <span class="mono">LinReg(ax+b) L1, L2</span> to obtain the regression line of <span class="chem">y</span> on <span class="chem">x</span>, <span class="chem">y = ax + b</span>, and the correlation coefficient <span class="chem">r</span>.
        "<span class=\"mono\">LinReg(ax+b) L1, L2</span>를 실행해 <span class=\"chem\">y</span> on <span class=\"chem\">x</span> 회귀직선 <span class=\"chem\">y = ax + b</span>와 상관계수 <span class=\"chem\">r</span>을 구한다.",
        // EN: Substitute <span class="chem">x = x_0</span> into <span class="chem">y = ax + b</span> to obtain the estimate <span class="chem">ŷ</span>.
        "<span class=\"chem\">y = ax + b</span>에 <span class=\"chem\">x = x_0</span>을 대입해 추정값 <span class=\"chem\">ŷ</span>을 구한다.",
        // EN: Judge the reliability of <span class="chem">ŷ</span>: check that <span class="chem">|r|</span> is close to <span class="chem">1</span> and that <span class="chem">x_0</span> lies within <span class="chem">[x_{min}, x_{max}]</span> (interpolation, not extrapolation).
        "<span class=\"chem\">ŷ</span>의 신뢰성을 판단한다: <span class=\"chem\">|r|</span>이 <span class=\"chem\">1</span>에 가까운지, 그리고 <span class=\"chem\">x_0</span>이 <span class=\"chem\">[x_{min}, x_{max}]</span> 안에 있는지(외삽이 아닌 내삽) 확인한다.",
      ],
      hints: [
        // EN: Each step needs the output of the one before: the lists feed <span class="mono">LinReg</span>, the line gives <span class="chem">ŷ</span>, and only then can you judge how reliable <span class="chem">ŷ</span> is.
        "각 단계는 바로 앞 단계의 출력이 필요해요: 리스트가 <span class=\"mono\">LinReg</span>에 들어가고, 회귀직선으로 <span class=\"chem\">ŷ</span>을 구한 다음에야 <span class=\"chem\">ŷ</span>이 얼마나 신뢰할 만한지 판단할 수 있어요.",
      ],
      // EN: <p>(1) Enter the data in <span class="mono">L1</span> and <span class="mono">L2</span>; (2) run <span class="mono">LinReg(ax+b)</span> to get <span class="chem">y = ax + b</span> and <span class="chem">r</span>; (3) substitute <span class="chem">x_0</span> to get <span class="chem">ŷ</span>; (4) judge reliability: the estimate is reliable only if <span class="chem">|r|</span> is close to <span class="chem">1</span> and <span class="chem">x_0</span> is inside the data range (interpolation).</p>
      solution: "<p>(1) 데이터를 <span class=\"mono\">L1</span>과 <span class=\"mono\">L2</span>에 입력하고, (2) <span class=\"mono\">LinReg(ax+b)</span>를 실행해 <span class=\"chem\">y = ax + b</span>와 <span class=\"chem\">r</span>을 구하고, (3) <span class=\"chem\">x_0</span>을 대입해 <span class=\"chem\">ŷ</span>을 구한 뒤, (4) 신뢰성을 판단해요: <span class=\"chem\">|r|</span>이 <span class=\"chem\">1</span>에 가깝고 <span class=\"chem\">x_0</span>이 데이터 범위 안(내삽)에 있을 때만 추정값을 신뢰할 수 있어요.</p>",
    },

    // ── t4-1-q013 · numeric · exam · SL · SL 4.3 · 4 marks
    "t4-1-q013": {
      // EN: <p>A group of <span class=\"chem\">12</span> students has a mean test score of <span class=\"chem\">70</span>, and a second group of <span class=\"chem\">8</span> students has a mean test score of <span class=\"chem\">85</span>. Find the combined mean score of all <span class=\"chem\">20</span> students.</p>
      stem: "<p><span class=\"chem\">12</span>명의 학생 집단의 시험 평균 점수가 <span class=\"chem\">70</span>점이고, <span class=\"chem\">8</span>명의 두 번째 학생 집단의 시험 평균 점수가 <span class=\"chem\">85</span>점이에요. 전체 <span class=\"chem\">20</span>명 학생의 합쳐진 평균 점수를 구하시오 (Find).</p>",
      hints: [
        // EN: Find the sum of scores in each group using <span class=\"chem\">Σ x = n x̄</span>.
        "<span class=\"chem\">Σ x = n x̄</span>를 이용해 각 집단의 점수 총합을 구하세요.",
        // EN: Add the two sums together and divide by the combined sample size <span class=\"chem\">12 + 8 = 20</span>.
        "두 총합을 더한 뒤 전체 인원 <span class=\"chem\">12 + 8 = 20</span>으로 나누세요.",
      ],
      // EN: <p>Total sum of scores <span class=\"chem\">= 12(70) + 8(85) = 840 + 680 = 1520</span> <b>[M1 A1]</b>.<br>Combined mean <span class=\"chem\">= 1520 / 20 = 76</span> <b>[M1 A1]</b>.</p>
      solution: "<p>전체 점수 총합 <span class=\"chem\">= 12(70) + 8(85) = 840 + 680 = 1520</span> <b>[M1 A1]</b>.<br>전체 평균 <span class=\"chem\">= 1520 / 20 = 76</span> <b>[M1 A1]</b>.</p>",
    },

    // ── t4-1-q014 · numeric · challenge · SL · SL 4.3 · 5 marks
    "t4-1-q014": {
      // EN: <p>A dataset of <span class=\"chem\">n = 8</span> numbers has mean <span class=\"chem\">x̄ = 5</span> and population variance <span class=\"chem\">σ^2 = 9</span>. Two new numbers, <span class=\"chem\">1</span> and <span class=\"chem\">9</span>, are added to the dataset so there are now <span class=\"chem\">10</span> numbers. Find the <strong>new population variance</strong> of all <span class=\"chem\">10</span> numbers.</p>
      stem: "<p><span class=\"chem\">n = 8</span>개의 수로 이루어진 자료의 평균이 <span class=\"chem\">x̄ = 5</span>이고 모분산이 <span class=\"chem\">σ^2 = 9</span>예요. 이 자료에 두 수 <span class=\"chem\">1</span>과 <span class=\"chem\">9</span>를 추가하여 총 <span class=\"chem\">10</span>개의 수가 되었어요. 전체 <span class=\"chem\">10</span>개 수의 <strong>새로운 모분산</strong>을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: the new variance must be measured about the mean of all <span class="chem">10</span> numbers, so first check whether adding <span class="chem">1</span> and <span class="chem">9</span> changes the mean.
        "해석: 새 분산은 <span class=\"chem\">10</span>개 수 전체의 평균을 기준으로 재야 하므로, 먼저 <span class=\"chem\">1</span>과 <span class=\"chem\">9</span>를 더하면 평균이 바뀌는지 확인하세요.",
        // EN: Notice that the two new numbers <span class=\"chem\">1</span> and <span class=\"chem\">9</span> have mean <span class=\"chem\">(1 + 9)/2 = 5</span>, so the overall mean of all 10 numbers is still <span class=\"chem\">x̄_{new} = 5</span>!
        "새로 추가된 두 수 <span class=\"chem\">1</span>과 <span class=\"chem\">9</span>의 평균이 <span class=\"chem\">(1 + 9)/2 = 5</span>이므로 전체 10개 수의 평균도 여전히 <span class=\"chem\">x̄_{new} = 5</span>예요!",
        // EN: For the original 8 numbers, <span class=\"chem\">Σ(x_i - 5)^2 = n σ^2 = 8 × 9 = 72</span>. Add <span class=\"chem\">(1 - 5)^2 + (9 - 5)^2</span> and divide by <span class=\"chem\">10</span>.
        "원래 8개 수에 대해 <span class=\"chem\">Σ(x_i - 5)^2 = n σ^2 = 8 × 9 = 72</span>예요. 여기에 <span class=\"chem\">(1 - 5)^2 + (9 - 5)^2</span>을 더하고 <span class=\"chem\">10</span>으로 나누세요.",
      ],
      // EN: <p>Original sum <span class=\"chem\">Σ x_i = 8 × 5 = 40</span>; new sum <span class=\"chem\">= 40 + 1 + 9 = 50</span>, so <span class=\"chem\">x̄_{new} = 50 / 10 = 5</span> <b>[A1]</b>.<br>Original sum of squared deviations <span class=\"chem\">Σ_{i=1}^8 (x_i - 5)^2 = 8 × 9 = 72</span> <b>[M1 A1]</b>.<br>New sum of squared deviations <span class=\"chem\">= 72 + (1 - 5)^2 + (9 - 5)^2 = 72 + 16 + 16 = 104</span> <b>[M1]</b>.<br>New variance <span class=\"chem\">σ_{new}^2 = 104 / 10 = 10.4</span> <b>[A1]</b>.</p>
      solution: "<p>원래 합 <span class=\"chem\">Σ x_i = 8 × 5 = 40</span>; 새 합 <span class=\"chem\">= 40 + 1 + 9 = 50</span>이므로 <span class=\"chem\">x̄_{new} = 50 / 10 = 5</span>예요 <b>[A1]</b>.<br>원래 편차 제곱합 <span class=\"chem\">Σ_{i=1}^8 (x_i - 5)^2 = 8 × 9 = 72</span> <b>[M1 A1]</b>.<br>새 편차 제곱합 <span class=\"chem\">= 72 + (1 - 5)^2 + (9 - 5)^2 = 72 + 16 + 16 = 104</span> <b>[M1]</b>.<br>새 분산 <span class=\"chem\">σ_{new}^2 = 104 / 10 = 10.4</span> <b>[A1]</b>.</p>",
    },

    // ── t4-1-q015 · short · exam · SL · SL 4.2 · 6 marks
    "t4-1-q015": {
      // EN: <p>A cumulative frequency study of the daily commuting times <span class=\"chem\">t</span> (in minutes) of <span class=\"chem\">120</span> office workers gives minimum <span class=\"chem\">8</span>, lower quartile <span class=\"chem\">Q_1 = 22</span>, median <span class=\"chem\">M = 31</span>, upper quartile <span class=\"chem\">Q_3 = 42</span>, and maximum <span class=\"chem\">78</span>.<br>(a) Find the interquartile range (<span class=\"chem\">IQR</span>) and determine how many workers have a commuting time greater than <span class=\"chem\">42</span> minutes. <strong>[2 marks]</strong><br>(b) Show mathematically that the maximum value <span class=\"chem\">78</span> minutes is an outlier, and state the range of commuting times that would be classified as upper outliers. <strong>[4 marks]</strong></p>
      stem: "<p>사무직 근로자 <span class=\"chem\">120</span>명의 일일 통근 시간 <span class=\"chem\">t</span>(분)에 대한 누적도수 조사에서 최솟값 <span class=\"chem\">8</span>, 제1사분위수 <span class=\"chem\">Q_1 = 22</span>, 중앙값 <span class=\"chem\">M = 31</span>, 제3사분위수 <span class=\"chem\">Q_3 = 42</span>, 최댓값 <span class=\"chem\">78</span>이 나왔다.<br>(a) 사분위수 범위(<span class=\"chem\">IQR</span>)를 구하고 (Find), 통근 시간이 <span class=\"chem\">42</span>분보다 긴 근로자가 몇 명인지 구하시오 (determine). <strong>[2 marks]</strong><br>(b) 최댓값 <span class=\"chem\">78</span>분이 이상치임을 수학적으로 보이고, 위쪽 이상치로 분류되는 통근 시간의 범위를 답하시오 (state). <strong>[4 marks]</strong></p>",
      // EN: <p>(a) <span class=\"chem\">IQR = Q_3 - Q_1 = 42 - 22 = 20</span> minutes. Since <span class=\"chem\">Q_3</span> is the 75th percentile, <span class=\"chem\">25%</span> of the <span class=\"chem\">120</span> workers (<span class=\"chem\">0.25 × 120 = 30</span> workers) commute for more than <span class=\"chem\">42</span> minutes.<br>(b) Upper outlier boundary <span class=\"chem\">= Q_3 + 1.5 × IQR = 42 + 1.5(20) = 72</span> minutes. Because <span class=\"chem\">78 &gt; 72</span>, the maximum <span class=\"chem\">78</span> is an outlier, and any time <span class=\"chem\">t &gt; 72</span> minutes is classified as an upper outlier.</p>
      solution: "<p>(a) <span class=\"chem\">IQR = Q_3 - Q_1 = 42 - 22 = 20</span>분이에요. <span class=\"chem\">Q_3</span>은 75번째 백분위수이므로 <span class=\"chem\">120</span>명 중 <span class=\"chem\">25%</span> (<span class=\"chem\">0.25 × 120 = 30</span>명)가 <span class=\"chem\">42</span>분보다 오래 통근해요.<br>(b) 위쪽 이상치 경계 <span class=\"chem\">= Q_3 + 1.5 × IQR = 42 + 1.5(20) = 72</span>분이에요. <span class=\"chem\">78 &gt; 72</span>이므로 최댓값 <span class=\"chem\">78</span>은 이상치이며, <span class=\"chem\">t &gt; 72</span>분인 모든 시간이 위쪽 이상치로 분류돼요.</p>",
      // EN: <p>(a) <span class=\"chem\">IQR = 42 - 22 = 20</span> minutes; <span class=\"chem\">25%</span> of <span class=\"chem\">120 = 30</span> workers.<br>(b) Upper fence <span class=\"chem\">= Q_3 + 1.5 × IQR = 42 + 1.5(20) = 72</span> minutes. Since <span class=\"chem\">78 &gt; 72</span>, <span class=\"chem\">78</span> is an outlier. Any commuting time strictly greater than <span class=\"chem\">72</span> minutes is an upper outlier.</p>
      answer: "<p>(a) <span class=\"chem\">IQR = 42 - 22 = 20</span>분; <span class=\"chem\">25%</span> (<span class=\"chem\">120 = 30</span>명).<br>(b) 위쪽 울타리 <span class=\"chem\">= Q_3 + 1.5 × IQR = 42 + 1.5(20) = 72</span>분. <span class=\"chem\">78 &gt; 72</span>이므로 <span class=\"chem\">78</span>은 이상치예요. <span class=\"chem\">72</span>분보다 엄격히 큰 통근 시간은 모두 위쪽 이상치예요.</p>",
      markscheme: [
        // EN: A1: Finds IQR = 42 − 22 = 20 minutes.
        "A1: IQR = 42 − 22 = 20분을 구함.",
        // EN: A1: Finds 0.25 × 120 = 30 workers above Q₃ = 42 minutes.
        "A1: Q₃ = 42분 초과인 근로자 0.25 × 120 = 30명을 구함.",
        // EN: M1: Substitutes into the upper fence formula Q₃ + 1.5 × IQR = 42 + 1.5(20).
        "M1: 위쪽 울타리 공식 Q₃ + 1.5 × IQR = 42 + 1.5(20)에 대입함.",
        // EN: A1: Evaluates the upper fence as 72 minutes.
        "A1: 위쪽 울타리를 72분으로 계산함.",
        // EN: R1: Explicitly states 78 > 72 to justify that 78 is an outlier.
        "R1: 78 > 72임을 명시하여 78이 이상치임을 근거로 듦.",
        // EN: A1: States that the upper outliers are the commuting times t > 72 minutes.
        "A1: 위쪽 이상치는 통근 시간 t > 72분임을 답함.",
      ],
    },

    // ── t4-1-q016 · short · exam · SL · SL 4.4, 4.10 · 7 marks
    "t4-1-q016": {
      // EN: <p>The heights <span class=\"chem\">x</span> (in cm, where <span class=\"chem\">155 ≤ x ≤ 190</span>) and masses <span class=\"chem\">y</span> (in kg, where <span class=\"chem\">50 ≤ y ≤ 88</span>) of <span class=\"chem\">14</span> rowers are recorded. The regression line of <span class=\"chem\">y</span> on <span class=\"chem\">x</span> is <span class=\"chem\">y = 0.90x - 85.5</span> and the regression line of <span class=\"chem\">x</span> on <span class=\"chem\">y</span> is <span class=\"chem\">x = 0.80y + 117.4</span>.<br>(a) Find the mean height <span class=\"chem\">x̄</span> and mean mass <span class=\"chem\">ȳ</span> of the rowers. <strong>[3 marks]</strong><br>(b) Estimate the height of a rower whose mass is <span class=\"chem\">75</span> kg, justifying your choice of regression line. <strong>[2 marks]</strong><br>(c) Explain why it would be unreliable to use the <span class=\"chem\">y</span>-on-<span class=\"chem\">x</span> regression line to estimate the mass of a child of height <span class=\"chem\">120</span> cm. <strong>[2 marks]</strong></p>
      stem: "<p>조정 선수 <span class=\"chem\">14</span>명의 키 <span class=\"chem\">x</span> (cm 단위, <span class=\"chem\">155 ≤ x ≤ 190</span>)와 몸무게 <span class=\"chem\">y</span> (kg 단위, <span class=\"chem\">50 ≤ y ≤ 88</span>)를 측정했다. <span class=\"chem\">y</span> on <span class=\"chem\">x</span> 회귀직선은 <span class=\"chem\">y = 0.90x - 85.5</span>이고 <span class=\"chem\">x</span> on <span class=\"chem\">y</span> 회귀직선은 <span class=\"chem\">x = 0.80y + 117.4</span>이다.<br>(a) 선수들의 평균 키 <span class=\"chem\">x̄</span>와 평균 몸무게 <span class=\"chem\">ȳ</span>를 구하시오 (Find). <strong>[3 marks]</strong><br>(b) 몸무게가 <span class=\"chem\">75</span> kg인 선수의 키를 추정하고, 선택한 회귀직선의 이유를 설명하시오. <strong>[2 marks]</strong><br>(c) 키가 <span class=\"chem\">120</span> cm인 어린이의 몸무게를 추정할 때 <span class=\"chem\">y</span>-on-<span class=\"chem\">x</span> 회귀직선을 쓰는 것이 왜 신뢰할 수 없는지 설명하시오. <strong>[2 marks]</strong></p>",
      // EN: <p>(a) Both regression lines intersect at <span class=\"chem\">(x̄, ȳ)</span>: substituting <span class=\"chem\">ȳ = 0.90x̄ - 85.5</span> into <span class=\"chem\">x̄ = 0.80ȳ + 117.4</span> gives <span class=\"chem\">x̄ = 0.72x̄ - 68.4 + 117.4 ⇒ 0.28x̄ = 49 ⇒ x̄ = 175</span> cm and <span class=\"chem\">ȳ = 0.90(175) - 85.5 = 72</span> kg.<br>(b) Substitute <span class=\"chem\">y = 75</span> into the <span class=\"chem\">x</span>-on-<span class=\"chem\">y</span> line: <span class=\"chem\">x = 0.80(75) + 117.4 = 177.4</span> cm.<br>(c) Unreliable because <span class=\"chem\">x = 120</span> cm is outside <span class=\"chem\">[155, 190]</span> cm (extrapolation).</p>
      solution: "<p>(a) 두 회귀직선은 <span class=\"chem\">(x̄, ȳ)</span>에서 만나므로 <span class=\"chem\">ȳ = 0.90x̄ - 85.5</span>를 <span class=\"chem\">x̄ = 0.80ȳ + 117.4</span>에 대입하면 <span class=\"chem\">x̄ = 0.72x̄ - 68.4 + 117.4 ⇒ 0.28x̄ = 49 ⇒ x̄ = 175</span> cm, <span class=\"chem\">ȳ = 0.90(175) - 85.5 = 72</span> kg이에요.<br>(b) <span class=\"chem\">x</span>-on-<span class=\"chem\">y</span> 직선에 <span class=\"chem\">y = 75</span>를 대입하면 <span class=\"chem\">x = 0.80(75) + 117.4 = 177.4</span> cm예요.<br>(c) <span class=\"chem\">x = 120</span> cm는 <span class=\"chem\">[155, 190]</span> cm 범위 밖(외삽)이므로 신뢰할 수 없어요.</p>",
      // EN: <p>(a) <span class=\"chem\">x̄ = 175</span> cm, <span class=\"chem\">ȳ = 72</span> kg.<br>(b) Using the <span class=\"chem\">x</span> on <span class=\"chem\">y</span> line (since <span class=\"chem\">y = 75</span> is given to estimate <span class=\"chem\">x</span>): <span class=\"chem\">x = 0.80(75) + 117.4 = 177.4</span> cm.<br>(c) <span class=\"chem\">x = 120</span> cm lies far outside the observed data range <span class=\"chem\">[155, 190]</span> cm, so the estimate relies on <strong>extrapolation</strong> and is unreliable.</p>
      answer: "<p>(a) <span class=\"chem\">x̄ = 175</span> cm, <span class=\"chem\">ȳ = 72</span> kg.<br>(b) (<span class=\"chem\">y = 75</span>가 주어져 <span class=\"chem\">x</span>를 추정하므로) <span class=\"chem\">x</span> on <span class=\"chem\">y</span> 직선을 쓰면: <span class=\"chem\">x = 0.80(75) + 117.4 = 177.4</span> cm.<br>(c) <span class=\"chem\">x = 120</span> cm는 관측된 자료 범위 <span class=\"chem\">[155, 190]</span> cm를 크게 벗어나 있으므로 <strong>외삽(extrapolation)</strong>에 해당해 신뢰할 수 없어요.</p>",
      markscheme: [
        // EN: M1: Equates or substitutes the two regression lines at (x̄, ȳ): x̄ = 0.80(0.90x̄ − 85.5) + 117.4.
        "M1: (x̄, ȳ)에서 두 회귀직선을 연립 또는 대입함: x̄ = 0.80(0.90x̄ − 85.5) + 117.4.",
        // EN: A1: Finds x̄ = 175 cm.
        "A1: x̄ = 175 cm를 구함.",
        // EN: A1: Finds ȳ = 72 kg.
        "A1: ȳ = 72 kg을 구함.",
        // EN: R1: Selects the x-on-y regression line x = 0.80y + 117.4 because mass y is given to estimate height x.
        "R1: 몸무게 y가 주어져 키 x를 추정하므로 x-on-y 회귀직선 x = 0.80y + 117.4를 선택함.",
        // EN: A1: Calculates x = 0.80(75) + 117.4 = 177.4 cm.
        "A1: x = 0.80(75) + 117.4 = 177.4 cm를 계산함.",
        // EN: R1: Identifies that x = 120 cm is outside the sample domain [155, 190] cm.
        "R1: x = 120 cm가 표본 범위 [155, 190] cm 밖에 있음을 지적함.",
        // EN: R1: Uses the term extrapolation (or explains that the adult linear relationship may not hold for children).
        "R1: 외삽(extrapolation) 용어를 사용함 (또는 성인의 선형 관계가 어린이에게 성립하지 않을 수 있음을 설명함).",
      ],
    },

    // ── t4-1-q017 · numeric · challenge · SL · SL 4.4, 4.10 · 5 marks
    "t4-1-q017": {
      // EN: <p>Nine adults who are learning to type record the time <span class="chem">x</span> hours per week that they practise and their typing speed <span class="chem">y</span> words per minute.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Practice <span class="chem">x</span> (h per week)</th><td class="num">2</td><td class="num">4</td><td class="num">5</td><td class="num">7</td><td class="num">8</td><td class="num">10</td><td class="num">11</td><td class="num">13</td><td class="num">14</td></tr><tr><th scope="row">Speed <span class="chem">y</span> (words per minute)</th><td class="num">38</td><td class="num">35</td><td class="num">46</td><td class="num">44</td><td class="num">52</td><td class="num">49</td><td class="num">60</td><td class="num">55</td><td class="num">63</td></tr></tbody></table></div><p>Ana wants to estimate the weekly practice time of a learner whose typing speed is <span class="chem">40</span> words per minute. She finds the regression line of <span class="chem">y</span> on <span class="chem">x</span> and solves <span class="chem">40 = ax + b</span> for <span class="chem">x</span>.<br>Find (the estimate given by the appropriate regression line) − (Ana's estimate), in hours per week.</p>
      stem: "<p>타자를 배우는 성인 9명이 일주일 동안 연습한 시간 <span class=\"chem\">x</span>시간과 타자 속도 <span class=\"chem\">y</span>(분당 단어 수)를 기록했다.</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">연습 <span class=\"chem\">x</span> (h per week)</th><td class=\"num\">2</td><td class=\"num\">4</td><td class=\"num\">5</td><td class=\"num\">7</td><td class=\"num\">8</td><td class=\"num\">10</td><td class=\"num\">11</td><td class=\"num\">13</td><td class=\"num\">14</td></tr><tr><th scope=\"row\">속도 <span class=\"chem\">y</span> (words per minute)</th><td class=\"num\">38</td><td class=\"num\">35</td><td class=\"num\">46</td><td class=\"num\">44</td><td class=\"num\">52</td><td class=\"num\">49</td><td class=\"num\">60</td><td class=\"num\">55</td><td class=\"num\">63</td></tr></tbody></table></div><p>Ana는 타자 속도가 분당 <span class=\"chem\">40</span>단어인 학습자의 주당 연습 시간을 추정하려고 한다. 그녀는 <span class=\"chem\">y</span> on <span class=\"chem\">x</span> 회귀직선을 구한 뒤 <span class=\"chem\">40 = ax + b</span>를 <span class=\"chem\">x</span>에 대해 풀었다.<br>(적절한 회귀직선으로 구한 추정값) − (Ana의 추정값)을 주당 시간으로 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: the speed <span class="chem">y</span> is given and the practice time <span class="chem">x</span> is wanted, so the appropriate line is <span class="chem">x</span> on <span class="chem">y</span>. Ana's rearranged <span class="chem">y</span>-on-<span class="chem">x</span> line is a different line (they coincide only when <span class="chem">|r| = 1</span>), so the two estimates differ.
        "해석: 속도 <span class=\"chem\">y</span>가 주어지고 연습 시간 <span class=\"chem\">x</span>를 구하므로 적절한 직선은 <span class=\"chem\">x</span> on <span class=\"chem\">y</span>예요. Ana가 변형한 <span class=\"chem\">y</span> on <span class=\"chem\">x</span> 직선은 다른 직선이므로(<span class=\"chem\">|r| = 1</span>일 때만 일치) 두 추정값은 달라요.",
        // EN: Ana: run LinReg(ax+b) with <span class="chem">x</span> as the Xlist, then solve <span class="chem">40 = ax + b</span>. Appropriate line: run LinReg(ax+b) again with <span class="chem">y</span> as the Xlist and <span class="chem">x</span> as the Ylist, then substitute <span class="chem">y = 40</span>.
        "Ana: <span class=\"chem\">x</span>를 Xlist로 놓고 LinReg(ax+b)를 실행한 뒤 <span class=\"chem\">40 = ax + b</span>를 풀어요. 적절한 직선: <span class=\"chem\">y</span>를 Xlist, <span class=\"chem\">x</span>를 Ylist로 놓고 LinReg(ax+b)를 다시 실행한 뒤 <span class=\"chem\">y = 40</span>을 대입해요.",
        // EN: Store both lines or keep the unrounded coefficients, then subtract Ana's estimate from the other one.
        "두 직선을 저장하거나 반올림하지 않은 계수를 쓰고, 다른 추정값에서 Ana의 추정값을 빼세요.",
      ],
      // EN: <p>Decode: predicting <span class="chem">x</span> from a given <span class="chem">y</span> needs the <span class="chem">x</span>-on-<span class="chem">y</span> line; Ana's method uses the <span class="chem">y</span>-on-<span class="chem">x</span> line instead.<br>Ana: <span class="chem">y = 2.0861x + 31.959</span> <b>[M1]</b>, so <span class="chem">x = (40 − 31.959)/2.0861 = 3.8546…</span> h <b>[A1]</b>.<br>Appropriate line (speeds as the Xlist): <span class="chem">x = 0.39666y − 11.258</span> <b>[M1]</b>, so <span class="chem">x = 0.39666(40) − 11.258 = 4.6082…</span> h <b>[A1]</b>.<br>Difference <span class="chem">= 4.6082… − 3.8546… = 0.75355… ≈ 0.754</span> h per week <b>[A1]</b>.<br>(Here <span class="chem">r = 0.910</span>, not close enough to 1 for the two lines to agree; <span class="chem">40</span> is inside the data range 35–63, so both are interpolations.)</p>
      solution: "<p>Decode: 주어진 <span class=\"chem\">y</span>로 <span class=\"chem\">x</span>를 예측하려면 <span class=\"chem\">x</span> on <span class=\"chem\">y</span> 직선이 필요한데, Ana의 방법은 <span class=\"chem\">y</span> on <span class=\"chem\">x</span> 직선을 써요.<br>Ana: <span class=\"chem\">y = 2.0861x + 31.959</span> <b>[M1]</b>, 따라서 <span class=\"chem\">x = (40 − 31.959)/2.0861 = 3.8546…</span> h <b>[A1]</b>.<br>적절한 직선(속도를 Xlist로): <span class=\"chem\">x = 0.39666y − 11.258</span> <b>[M1]</b>, 따라서 <span class=\"chem\">x = 0.39666(40) − 11.258 = 4.6082…</span> h <b>[A1]</b>.<br>차 <span class=\"chem\">= 4.6082… − 3.8546… = 0.75355… ≈ 0.754</span> (주당 시간) <b>[A1]</b>.<br>(여기서 <span class=\"chem\">r = 0.910</span>은 1에 충분히 가깝지 않아서 두 직선이 일치하지 않아요. <span class=\"chem\">40</span>은 데이터 범위 35–63 안에 있으므로 둘 다 내삽이에요.)</p>",
    },

    // ── t4-1-q018 · short · challenge · SL · SL 4.2, 4.3 · 6 marks
    "t4-1-q018": {
      // EN: <p>Six positive integers are arranged in ascending order: <span class="chem">a, b, 10, 12, c, d</span>.<br>The unique mode is <span class="chem">15</span>, the range is <span class="chem">12</span>, and the mean of all six integers is <span class="chem">x̄ = 10.5</span>.<br>Quartiles are found by the GDC method: the median of each half of the ordered data.<br>(a) State the values of <span class="chem">c</span> and <span class="chem">d</span>, and hence find <span class="chem">a</span>. <strong>[3 marks]</strong><br>(b) Find the value of <span class="chem">b</span> and the interquartile range (<span class="chem">IQR = Q_3 - Q_1</span>) of the six integers. <strong>[3 marks]</strong></p>
      stem: "<p>여섯 개의 양의 정수가 오름차순으로 나열되어 있다: <span class=\"chem\">a, b, 10, 12, c, d</span>.<br>유일한 최빈값은 <span class=\"chem\">15</span>이고, 범위는 <span class=\"chem\">12</span>이며, 여섯 정수의 평균은 <span class=\"chem\">x̄ = 10.5</span>이다.<br>사분위수는 GDC 방법(정렬한 데이터의 각 절반의 중앙값)으로 구한다.<br>(a) <span class=\"chem\">c</span>와 <span class=\"chem\">d</span>의 값을 답하고 (State), 이를 이용하여 (hence) <span class=\"chem\">a</span>를 구하시오. <strong>[3 marks]</strong><br>(b) <span class=\"chem\">b</span>의 값과 여섯 정수의 사분위수 범위(<span class=\"chem\">IQR = Q_3 - Q_1</span>)를 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: the two largest values are <span class="chem">c</span> and <span class="chem">d</span>, and <span class="chem">15 &gt; 12</span>, so a unique mode of <span class="chem">15</span> forces <span class="chem">c = d = 15</span>. Then the range gives <span class="chem">a</span>, and the mean (a total) gives <span class="chem">b</span>.
        "해석: 가장 큰 두 값은 <span class=\"chem\">c</span>와 <span class=\"chem\">d</span>이고 <span class=\"chem\">15 &gt; 12</span>이므로, 유일한 최빈값이 <span class=\"chem\">15</span>이려면 <span class=\"chem\">c = d = 15</span>여야 해요. 그다음 범위로 <span class=\"chem\">a</span>를, 평균(즉 합계)으로 <span class=\"chem\">b</span>를 구하세요.",
        // EN: For <span class="chem">n = 6</span>, the lower half is the <span class="chem">3</span> smallest values and the upper half is the <span class="chem">3</span> largest; each quartile is the median of its half.
        "<span class=\"chem\">n = 6</span>일 때 아래 절반은 가장 작은 <span class=\"chem\">3</span>개 값, 위 절반은 가장 큰 <span class=\"chem\">3</span>개 값이에요. 각 사분위수는 그 절반의 중앙값이에요.",
      ],
      // EN: <p>(a) Because <span class=\"chem\">15 &gt; 12</span> is the unique mode and the six integers are in ascending order, <span class=\"chem\">15</span> must appear at least twice at the upper end, so <span class=\"chem\">c = 15</span> and <span class=\"chem\">d = 15</span>. Then <span class=\"chem\">d - a = 12 ⇒ 15 - a = 12 ⇒ a = 3</span>.<br>(b) The sum of the six numbers is <span class=\"chem\">6 × 10.5 = 63</span>, so <span class=\"chem\">3 + b + 10 + 12 + 15 + 15 = 63 ⇒ 55 + b = 63 ⇒ b = 8</span>. For <span class=\"chem\">n = 6</span>, the lower half is <span class=\"chem\">3, 8, 10</span> (<span class=\"chem\">Q_1 = 8</span>) and the upper half is <span class=\"chem\">12, 15, 15</span> (<span class=\"chem\">Q_3 = 15</span>), so <span class=\"chem\">IQR = 15 - 8 = 7</span>.</p>
      solution: "<p>(a) <span class=\"chem\">15 &gt; 12</span>가 유일한 최빈값이고 여섯 정수가 오름차순이므로 <span class=\"chem\">15</span>는 위쪽 끝에 적어도 두 번 나타나야 해요. 따라서 <span class=\"chem\">c = 15</span>, <span class=\"chem\">d = 15</span>예요. 그러면 <span class=\"chem\">d - a = 12 ⇒ 15 - a = 12 ⇒ a = 3</span>이에요.<br>(b) 여섯 수의 합은 <span class=\"chem\">6 × 10.5 = 63</span>이므로 <span class=\"chem\">3 + b + 10 + 12 + 15 + 15 = 63 ⇒ 55 + b = 63 ⇒ b = 8</span>이에요. <span class=\"chem\">n = 6</span>일 때 아래쪽 절반은 <span class=\"chem\">3, 8, 10</span> (<span class=\"chem\">Q_1 = 8</span>)이고 위쪽 절반은 <span class=\"chem\">12, 15, 15</span> (<span class=\"chem\">Q_3 = 15</span>)이므로 <span class=\"chem\">IQR = 15 - 8 = 7</span>이에요.</p>",
      // EN: <p>(a) <span class=\"chem\">c = 15, d = 15</span>; since <span class=\"chem\">d - a = 12</span>, <span class=\"chem\">a = 15 - 12 = 3</span>.<br>(b) Sum <span class=\"chem\">= 6 × 10.5 = 63 ⇒ 3 + b + 10 + 12 + 15 + 15 = 63 ⇒ b = 8</span>. Since <span class=\"chem\">Q_1 = b = 8</span> and <span class=\"chem\">Q_3 = c = 15</span>, <span class=\"chem\">IQR = 15 - 8 = 7</span>.</p>
      answer: "<p>(a) <span class=\"chem\">c = 15, d = 15</span>; <span class=\"chem\">d - a = 12</span>이므로 <span class=\"chem\">a = 15 - 12 = 3</span>.<br>(b) 합 <span class=\"chem\">= 6 × 10.5 = 63 ⇒ 3 + b + 10 + 12 + 15 + 15 = 63 ⇒ b = 8</span>. <span class=\"chem\">Q_1 = b = 8</span>이고 <span class=\"chem\">Q_3 = c = 15</span>이므로 <span class=\"chem\">IQR = 15 - 8 = 7</span>이에요.</p>",
      markscheme: [
        // EN: R1: Deduces that for 15 (> 12) to be the unique mode in an ascending list, both c and d must equal 15.
        "R1: 오름차순 목록에서 15 (> 12)가 유일한 최빈값이 되려면 c와 d가 모두 15여야 함을 추론함.",
        // EN: A1: States c = 15 and d = 15.
        "A1: c = 15와 d = 15를 답함.",
        // EN: A1: Uses range = d − a = 12 to find a = 15 − 12 = 3.
        "A1: 범위 = d − a = 12를 이용해 a = 15 − 12 = 3을 구함.",
        // EN: M1: Sets up the sum equation 3 + b + 10 + 12 + 15 + 15 = 6 × 10.5 = 63.
        "M1: 합 방정식 3 + b + 10 + 12 + 15 + 15 = 6 × 10.5 = 63을 세움.",
        // EN: A1: Finds b = 8.
        "A1: b = 8을 구함.",
        // EN: A1: Identifies Q₁ = 8 and Q₃ = 15 for n = 6, giving IQR = 15 − 8 = 7.
        "A1: n = 6에서 Q₁ = 8, Q₃ = 15를 구해 IQR = 15 − 8 = 7을 얻음.",
      ],
    },

    // ── t4-1-q019 · short · exam · SL · SL 4.4 · 8 marks
    "t4-1-q019": {
      // EN: <p>The number of hours of revision <span class="chem">x</span> and the test score <span class="chem">y</span> of <span class="chem">8</span> students are shown below.<br>Hours of revision <span class="chem">x</span>: <span class="chem">2, 3, 5, 6, 8, 9, 11, 12</span><br>Test score <span class="chem">y</span>: <span class="chem">41, 46, 50, 57, 60, 66, 71, 77</span><br>(a) Find Pearson's correlation coefficient <span class="chem">r</span>. <strong>[2 marks]</strong><br>(b) Find the equation of the regression line of <span class="chem">y</span> on <span class="chem">x</span>. <strong>[2 marks]</strong><br>(c) Interpret the gradient of this line in context. <strong>[1 mark]</strong><br>(d) Use your regression line to estimate the test score of a student who revises for <span class="chem">10</span> hours. <strong>[2 marks]</strong><br>(e) Explain why the line should not be used to estimate the score of a student who revises for <span class="chem">20</span> hours. <strong>[1 mark]</strong></p>
      stem: "<p>학생 <span class=\"chem\">8</span>명의 복습 시간 <span class=\"chem\">x</span>(시간)와 시험 점수 <span class=\"chem\">y</span>는 다음과 같아요.<br>복습 시간 <span class=\"chem\">x</span>: <span class=\"chem\">2, 3, 5, 6, 8, 9, 11, 12</span><br>시험 점수 <span class=\"chem\">y</span>: <span class=\"chem\">41, 46, 50, 57, 60, 66, 71, 77</span><br>(a) 피어슨 상관계수 <span class=\"chem\">r</span>을 구하시오 (Find). <strong>[2 marks]</strong><br>(b) <span class=\"chem\">y</span> on <span class=\"chem\">x</span> 회귀직선의 방정식을 구하시오 (Find). <strong>[2 marks]</strong><br>(c) 이 직선의 기울기를 맥락에 맞게 해석하시오 (Interpret). <strong>[1 mark]</strong><br>(d) 회귀직선을 이용해 <span class=\"chem\">10</span>시간 복습하는 학생의 시험 점수를 추정하시오 (estimate). <strong>[2 marks]</strong><br>(e) <span class=\"chem\">20</span>시간 복습하는 학생의 점수를 추정하는 데 이 직선을 쓰면 안 되는 이유를 설명하시오 (Explain). <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Enter <span class="chem">x</span> in <span class="mono">L1</span> and <span class="chem">y</span> in <span class="mono">L2</span>, then run <span class="mono">LinReg(ax+b) L1, L2</span>: the GDC gives <span class="chem">a</span>, <span class="chem">b</span> and <span class="chem">r</span>.
        "<span class=\"chem\">x</span>를 <span class=\"mono\">L1</span>에, <span class=\"chem\">y</span>를 <span class=\"mono\">L2</span>에 입력하고 <span class=\"mono\">LinReg(ax+b) L1, L2</span>를 실행하면 GDC가 <span class=\"chem\">a</span>, <span class=\"chem\">b</span>, <span class=\"chem\">r</span>을 보여 줘요.",
        // EN: The gradient <span class="chem">a</span> is the change in <span class="chem">y</span> for each extra unit of <span class="chem">x</span>. Compare <span class="chem">x = 20</span> with the smallest and largest <span class="chem">x</span>-values.
        "기울기 <span class=\"chem\">a</span>는 <span class=\"chem\">x</span>가 한 단위 늘 때마다 <span class=\"chem\">y</span>가 변하는 양이에요. <span class=\"chem\">x = 20</span>을 <span class=\"chem\">x</span>의 최솟값, 최댓값과 비교하세요.",
      ],
      // EN: <p>(a) From the GDC, <span class="chem">r = 0.99290… ≈ 0.993</span> <b>[M1 A1]</b>.<br>(b) <span class="chem">a = 3.4239…</span> and <span class="chem">b = 34.533…</span>, so <span class="chem">y = 3.42x + 34.5</span> <b>[A1 A1]</b>.<br>(c) For each extra hour of revision, the test score increases by about <span class="chem">3.42</span> marks on average <b>[A1]</b>.<br>(d) <span class="chem">y = 3.4239(10) + 34.533 = 68.77… ≈ 68.8</span> <b>[M1 A1]</b>.<br>(e) <span class="chem">x = 20</span> lies outside the observed range <span class="chem">2 ≤ x ≤ 12</span>, so the estimate would be an extrapolation <b>[R1]</b>.</p>
      solution: "<p>(a) GDC로 <span class=\"chem\">r = 0.99290… ≈ 0.993</span> <b>[M1 A1]</b>.<br>(b) <span class=\"chem\">a = 3.4239…</span>, <span class=\"chem\">b = 34.533…</span>이므로 <span class=\"chem\">y = 3.42x + 34.5</span> <b>[A1 A1]</b>.<br>(c) 복습을 한 시간 더 할 때마다 시험 점수가 평균 약 <span class=\"chem\">3.42</span>점 높아져요 <b>[A1]</b>.<br>(d) <span class=\"chem\">y = 3.4239(10) + 34.533 = 68.77… ≈ 68.8</span> <b>[M1 A1]</b>.<br>(e) <span class=\"chem\">x = 20</span>은 관측 범위 <span class=\"chem\">2 ≤ x ≤ 12</span> 밖에 있으므로 이 추정은 외삽이에요 <b>[R1]</b>.</p>",
      // EN: <p>(a) <span class="chem">r = 0.993</span><br>(b) <span class="chem">y = 3.42x + 34.5</span><br>(c) Each extra hour of revision is associated with an increase of about <span class="chem">3.42</span> marks in the test score.<br>(d) <span class="chem">y ≈ 68.8</span> (accept <span class="chem">68.7</span> from the rounded coefficients).<br>(e) <span class="chem">x = 20</span> is outside the data range <span class="chem">2 ≤ x ≤ 12</span>, so the estimate would be an extrapolation.</p>
      answer: "<p>(a) <span class=\"chem\">r = 0.993</span><br>(b) <span class=\"chem\">y = 3.42x + 34.5</span><br>(c) 복습을 한 시간 더 할 때마다 시험 점수가 약 <span class=\"chem\">3.42</span>점 높아지는 경향이 있어요.<br>(d) <span class=\"chem\">y ≈ 68.8</span> (반올림한 계수를 쓴 <span class=\"chem\">68.7</span>도 인정).<br>(e) <span class=\"chem\">x = 20</span>은 자료 범위 <span class=\"chem\">2 ≤ x ≤ 12</span> 밖에 있으므로 이 추정은 외삽이에요.</p>",
      markscheme: [
        // EN: M1: Enters x in L1 and y in L2 and uses the GDC (LinReg(ax+b)).
        "M1: x를 L1에, y를 L2에 입력하고 GDC(LinReg(ax+b))를 사용함.",
        // EN: A1: r = 0.993.
        "A1: r = 0.993.",
        // EN: A1: Gradient a = 3.42 (3.4239…).
        "A1: 기울기 a = 3.42 (3.4239…).",
        // EN: A1: Intercept b = 34.5 (34.533…), giving y = 3.42x + 34.5.
        "A1: 절편 b = 34.5 (34.533…), 따라서 y = 3.42x + 34.5.",
        // EN: A1: Each extra hour of revision is associated with about 3.42 more marks, on average.
        "A1: 복습을 한 시간 더 할 때마다 점수가 평균 약 3.42점 높아짐.",
        // EN: M1: Substitutes x = 10 into the regression line.
        "M1: 회귀직선에 x = 10을 대입함.",
        // EN: A1: y ≈ 68.8 (accept 68.7).
        "A1: y ≈ 68.8 (68.7도 인정).",
        // EN: R1: 20 hours is outside the data range (2 to 12 hours), so this would be extrapolation and is unreliable.
        "R1: 20시간은 자료 범위(2~12시간) 밖이므로 외삽이고 신뢰할 수 없음.",
      ],
    },

    // ── t4-1-q020 · short · exam · SL · SL 4.2 · 4 marks
    "t4-1-q020": {
      // EN: <p>The test scores of two classes are summarized by these five-number summaries.<br>Class A: minimum <span class="chem">32</span>, <span class="chem">Q_1 = 48</span>, median <span class="chem">60</span>, <span class="chem">Q_3 = 74</span>, maximum <span class="chem">90</span>.<br>Class B: minimum <span class="chem">45</span>, <span class="chem">Q_1 = 58</span>, median <span class="chem">66</span>, <span class="chem">Q_3 = 72</span>, maximum <span class="chem">84</span>.<br>Compare the two distributions, referring to one measure of centre and one measure of spread. <strong>[4 marks]</strong></p>
      stem: "<p>두 반의 시험 점수를 다음 다섯 수 요약으로 나타냈어요.<br>A반: 최솟값 <span class=\"chem\">32</span>, <span class=\"chem\">Q_1 = 48</span>, 중앙값 <span class=\"chem\">60</span>, <span class=\"chem\">Q_3 = 74</span>, 최댓값 <span class=\"chem\">90</span>.<br>B반: 최솟값 <span class=\"chem\">45</span>, <span class=\"chem\">Q_1 = 58</span>, 중앙값 <span class=\"chem\">66</span>, <span class=\"chem\">Q_3 = 72</span>, 최댓값 <span class=\"chem\">84</span>.<br>중심의 척도 하나와 퍼짐의 척도 하나를 들어 두 분포를 비교하시오 (Compare). <strong>[4 marks]</strong></p>",
      hints: [
        // EN: For centre compare the medians. For spread find <span class="chem">IQR = Q_3 - Q_1</span> for each class.
        "중심은 중앙값을 비교하고, 퍼짐은 각 반의 <span class=\"chem\">IQR = Q_3 - Q_1</span>을 구해 비교하세요.",
        // EN: Always say what each comparison means for the students' scores.
        "각 비교가 학생들의 점수에 대해 무엇을 뜻하는지 꼭 말하세요.",
      ],
      // EN: <p>Centre: the median of Class B (<span class="chem">66</span>) is higher than that of Class A (<span class="chem">60</span>) <b>[A1]</b>, so Class B generally scored higher <b>[R1]</b>.<br>Spread: <span class="chem">IQR_A = 74 - 48 = 26</span> and <span class="chem">IQR_B = 72 - 58 = 14</span> <b>[A1]</b>, so the middle 50% of Class A's scores are more spread out and Class B is more consistent <b>[R1]</b>.</p>
      solution: "<p>중심: B반의 중앙값(<span class=\"chem\">66</span>)이 A반(<span class=\"chem\">60</span>)보다 높으므로 <b>[A1]</b> B반이 대체로 점수가 더 높아요 <b>[R1]</b>.<br>퍼짐: <span class=\"chem\">IQR_A = 74 - 48 = 26</span>, <span class=\"chem\">IQR_B = 72 - 58 = 14</span> <b>[A1]</b>이므로 A반의 가운데 50% 점수가 더 퍼져 있고 B반이 더 고르게 분포해요 <b>[R1]</b>.</p>",
      // EN: <p>Medians: Class B <span class="chem">66</span> &gt; Class A <span class="chem">60</span>, so Class B generally scored higher.<br><span class="chem">IQR</span>s: Class A <span class="chem">74 - 48 = 26</span>, Class B <span class="chem">72 - 58 = 14</span>, so the scores of Class A are more spread out (Class B is more consistent).</p>
      answer: "<p>중앙값: B반 <span class=\"chem\">66</span> &gt; A반 <span class=\"chem\">60</span>이므로 B반이 대체로 점수가 더 높아요.<br><span class=\"chem\">IQR</span>: A반 <span class=\"chem\">74 - 48 = 26</span>, B반 <span class=\"chem\">72 - 58 = 14</span>이므로 A반의 점수가 더 퍼져 있어요 (B반이 더 고르다).</p>",
      markscheme: [
        // EN: A1: States both medians, 60 (Class A) and 66 (Class B).
        "A1: 두 중앙값 60 (A반)과 66 (B반)을 제시함.",
        // EN: R1: Concludes in context that Class B generally scored higher, because its median is higher.
        "R1: 중앙값이 더 높으므로 B반이 대체로 점수가 더 높다고 맥락에 맞게 결론지음.",
        // EN: A1: Finds IQR = 74 − 48 = 26 for Class A and IQR = 72 − 58 = 14 for Class B (or uses the ranges 58 and 39).
        "A1: A반 IQR = 74 − 48 = 26, B반 IQR = 72 − 58 = 14를 구함 (또는 범위 58과 39를 사용).",
        // EN: R1: Concludes in context that the scores of Class A are more spread out (less consistent).
        "R1: A반의 점수가 더 퍼져 있다(덜 고르다)고 맥락에 맞게 결론지음.",
      ],
    },

  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ko', 't4-1.q', {
  questions: {

    // ── t4-1-q021 · numeric · foundation · SL · SL 4.3 · 2 marks
    "t4-1-q021": {
      // EN: <p>The times, in seconds, that <span class="chem">12</span> students took to solve a logic puzzle are shown below.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Time (s)</th><td class="num">34</td><td class="num">41</td><td class="num">29</td><td class="num">52</td><td class="num">38</td><td class="num">45</td><td class="num">31</td><td class="num">47</td><td class="num">36</td><td class="num">40</td><td class="num">55</td><td class="num">33</td></tr></tbody></table></div><p>Find the standard deviation <span class="chem">σ</span> of the times.</p>
      stem: "<p>학생 <span class=\"chem\">12</span>명이 논리 퍼즐을 푸는 데 걸린 시간(초)은 다음과 같아요.</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">시간 (s)</th><td class=\"num\">34</td><td class=\"num\">41</td><td class=\"num\">29</td><td class=\"num\">52</td><td class=\"num\">38</td><td class=\"num\">45</td><td class=\"num\">31</td><td class=\"num\">47</td><td class=\"num\">36</td><td class=\"num\">40</td><td class=\"num\">55</td><td class=\"num\">33</td></tr></tbody></table></div><p>이 시간들의 표준편차 <span class=\"chem\">σ</span>를 구하시오 (Find).</p>",
      hints: [
        // EN: Enter the <span class="chem">12</span> times in a list and run <span class="mono">1-Var Stats</span>.
        "<span class=\"chem\">12</span>개의 시간을 리스트에 입력하고 <span class=\"mono\">1-Var Stats</span>를 실행하세요.",
        // EN: IB uses the population standard deviation, shown on the GDC as <span class="mono">σx</span> (not <span class="mono">Sx</span>).
        "IB는 모집단 표준편차를 사용하며, GDC에서는 <span class=\"mono\">σx</span>로 표시돼요 (<span class=\"mono\">Sx</span>가 아니에요).",
      ],
      // EN: <p>From the GDC (<span class="mono">1-Var Stats</span>): <span class="chem">x̄ = 40.0833</span> s and <span class="chem">σ = 7.9105… ≈ 7.91</span> s <b>[M1 A1]</b>.</p>
      solution: "<p>GDC(<span class=\"mono\">1-Var Stats</span>)로 <span class=\"chem\">x̄ = 40.0833</span> s, <span class=\"chem\">σ = 7.9105… ≈ 7.91</span> s <b>[M1 A1]</b>.</p>",
    },

    // ── t4-1-q022 · numeric · exam · SL · SL 4.3 · 3 marks
    "t4-1-q022": {
      // EN: <p>A library records the number of books <span class="chem">x</span> borrowed in one week by each of its <span class="chem">50</span> members.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Books borrowed <span class="chem">x</span></th><td class="num">0</td><td class="num">1</td><td class="num">2</td><td class="num">3</td><td class="num">4</td><td class="num">5</td></tr><tr><th scope="row">Number of members <span class="chem">f</span></th><td class="num">6</td><td class="num">11</td><td class="num">14</td><td class="num">9</td><td class="num">7</td><td class="num">3</td></tr></tbody></table></div><p>Find the standard deviation of the number of books borrowed.</p>
      stem: "<p>어느 도서관에서 회원 <span class=\"chem\">50</span>명이 일주일 동안 각자 빌린 책의 수 <span class=\"chem\">x</span>를 기록했어요.</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">빌린 책의 수 <span class=\"chem\">x</span></th><td class=\"num\">0</td><td class=\"num\">1</td><td class=\"num\">2</td><td class=\"num\">3</td><td class=\"num\">4</td><td class=\"num\">5</td></tr><tr><th scope=\"row\">회원 수 <span class=\"chem\">f</span></th><td class=\"num\">6</td><td class=\"num\">11</td><td class=\"num\">14</td><td class=\"num\">9</td><td class=\"num\">7</td><td class=\"num\">3</td></tr></tbody></table></div><p>빌린 책의 수의 표준편차를 구하시오 (Find).</p>",
      hints: [
        // EN: Put the values in <span class="mono">L1</span> and the frequencies in <span class="mono">L2</span>, then run <span class="mono">1-Var Stats L1, L2</span> (FreqList = L2).
        "값을 <span class=\"mono\">L1</span>에, 도수를 <span class=\"mono\">L2</span>에 넣고 <span class=\"mono\">1-Var Stats L1, L2</span> (FreqList = L2)를 실행하세요.",
        // EN: Check that <span class="chem">n = 50</span> on the screen: if it shows <span class="chem">n = 6</span>, the frequencies were not used. Read <span class="mono">σx</span>.
        "화면에서 <span class=\"chem\">n = 50</span>인지 확인하세요. <span class=\"chem\">n = 6</span>으로 나오면 도수가 사용되지 않은 거예요. <span class=\"mono\">σx</span>를 읽으세요.",
      ],
      // EN: <p>With the frequencies as the frequency list, the GDC gives <span class="chem">n = 50</span>, <span class="chem">x̄ = 2.18</span> <b>[M1]</b> and <span class="chem">σ = 1.3956… ≈ 1.40</span> books <b>[A2]</b>.</p>
      solution: "<p>도수를 도수 리스트로 사용하면 GDC에서 <span class=\"chem\">n = 50</span>, <span class=\"chem\">x̄ = 2.18</span> <b>[M1]</b>, <span class=\"chem\">σ = 1.3956… ≈ 1.40</span>권 <b>[A2]</b>이 나와요.</p>",
    },

    // ── t4-1-q023 · short · exam · SL · SL 4.1, 4.2, 4.3 · 9 marks
    "t4-1-q023": {
      // EN: <p>The resting heart rates, in beats per minute (bpm), of <span class="chem">15</span> athletes are shown below.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Heart rate (bpm)</th><td class="num">52</td><td class="num">58</td><td class="num">61</td><td class="num">55</td><td class="num">49</td><td class="num">63</td><td class="num">57</td><td class="num">60</td><td class="num">54</td><td class="num">66</td><td class="num">59</td><td class="num">51</td><td class="num">62</td><td class="num">56</td><td class="num">88</td></tr></tbody></table></div><p>Quartiles are found by the GDC method: the median of each half of the ordered data, leaving out the overall median when the number of values is odd.<br>(a) Write down the median, the lower quartile <span class="chem">Q_1</span> and the upper quartile <span class="chem">Q_3</span>. <strong>[3 marks]</strong><br>(b) Show that <span class="chem">88</span> bpm is an outlier. <strong>[3 marks]</strong><br>(c) Find the mean and the standard deviation of the <span class="chem">15</span> heart rates. <strong>[2 marks]</strong><br>(d) The coach finds that the <span class="chem">88</span> bpm reading was taken straight after a warm-up run. State, with a reason, whether this value should be kept in the data. <strong>[1 mark]</strong></p>
      stem: "<p>운동선수 <span class=\"chem\">15</span>명의 안정 시 심박수(분당 박동 수, bpm)는 다음과 같아요.</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">심박수 (bpm)</th><td class=\"num\">52</td><td class=\"num\">58</td><td class=\"num\">61</td><td class=\"num\">55</td><td class=\"num\">49</td><td class=\"num\">63</td><td class=\"num\">57</td><td class=\"num\">60</td><td class=\"num\">54</td><td class=\"num\">66</td><td class=\"num\">59</td><td class=\"num\">51</td><td class=\"num\">62</td><td class=\"num\">56</td><td class=\"num\">88</td></tr></tbody></table></div><p>사분위수는 GDC 방법으로 구해요: 정렬한 자료의 아래쪽 절반과 위쪽 절반 각각의 중앙값을 구하고, 값의 개수가 홀수이면 전체 중앙값은 빼요.<br>(a) 중앙값, 제1사분위수 <span class=\"chem\">Q_1</span>, 제3사분위수 <span class=\"chem\">Q_3</span>을 쓰시오 (Write down). <strong>[3 marks]</strong><br>(b) <span class=\"chem\">88</span> bpm이 이상치임을 보이시오 (Show that). <strong>[3 marks]</strong><br>(c) <span class=\"chem\">15</span>개 심박수의 평균과 표준편차를 구하시오 (Find). <strong>[2 marks]</strong><br>(d) 코치는 <span class=\"chem\">88</span> bpm이라는 측정값이 준비 운동으로 달리기를 한 직후에 측정된 것임을 알게 되었어요. 이 값을 자료에 남겨 두어야 하는지 이유와 함께 말하시오 (State). <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Run <span class="mono">1-Var Stats</span>: it gives the median, <span class="chem">Q_1</span> and <span class="chem">Q_3</span>. With <span class="chem">n = 15</span>, the lower half is the 7 smallest values.
        "<span class=\"mono\">1-Var Stats</span>를 실행하면 중앙값, <span class=\"chem\">Q_1</span>, <span class=\"chem\">Q_3</span>이 나와요. <span class=\"chem\">n = 15</span>이면 아래쪽 절반은 가장 작은 7개의 값이에요.",
        // EN: An outlier lies more than <span class="chem">1.5 × IQR</span> above <span class="chem">Q_3</span> (or below <span class="chem">Q_1</span>). Write the fence as a number and compare.
        "이상치는 <span class=\"chem\">Q_3</span>보다 <span class=\"chem\">1.5 × IQR</span>보다 더 크게 위에 있는(또는 <span class=\"chem\">Q_1</span>보다 그만큼 더 아래에 있는) 값이에요. 울타리를 수로 쓰고 비교하세요.",
        // EN: For (d), ask: is <span class="chem">88</span> an error for <em>this</em> variable, or a genuine extreme value?
        "(d)에서는 <span class=\"chem\">88</span>이 <em>이</em> 변수에 대한 오류인지, 아니면 실제로 극단적인 값인지 생각해 보세요.",
      ],
      // EN: <p>(a) Ordered: 49, 51, 52, 54, 55, 56, 57, <b>58</b>, 59, 60, 61, 62, 63, 66, 88. The median is the 8th value, <span class="chem">58</span> <b>[A1]</b>. The lower half 49 … 57 has median <span class="chem">Q_1 = 54</span> <b>[A1]</b>, and the upper half 59 … 88 has median <span class="chem">Q_3 = 62</span> <b>[A1]</b>.<br>(b) <span class="chem">IQR = 62 - 54 = 8</span> <b>[A1]</b>. Upper fence <span class="chem">= 62 + 1.5(8) = 74</span> <b>[M1]</b>. Since <span class="chem">88 &gt; 74</span>, 88 is an outlier <b>[R1]</b>.<br>(c) GDC: <span class="chem">x̄ = 59.4</span> bpm <b>[A1]</b>, <span class="chem">σ = 8.8904… ≈ 8.89</span> bpm <b>[A1]</b>.<br>(d) The reading was not taken at rest, so it is an error for the variable "resting heart rate". It should be removed (or the athlete re-measured) <b>[R1]</b>.</p>
      solution: "<p>(a) 정렬: 49, 51, 52, 54, 55, 56, 57, <b>58</b>, 59, 60, 61, 62, 63, 66, 88. 중앙값은 8번째 값 <span class=\"chem\">58</span> <b>[A1]</b>. 아래쪽 절반 49 … 57의 중앙값은 <span class=\"chem\">Q_1 = 54</span> <b>[A1]</b>, 위쪽 절반 59 … 88의 중앙값은 <span class=\"chem\">Q_3 = 62</span> <b>[A1]</b>.<br>(b) <span class=\"chem\">IQR = 62 - 54 = 8</span> <b>[A1]</b>. 위쪽 울타리 <span class=\"chem\">= 62 + 1.5(8) = 74</span> <b>[M1]</b>. <span class=\"chem\">88 &gt; 74</span>이므로 88은 이상치예요 <b>[R1]</b>.<br>(c) GDC: <span class=\"chem\">x̄ = 59.4</span> bpm <b>[A1]</b>, <span class=\"chem\">σ = 8.8904… ≈ 8.89</span> bpm <b>[A1]</b>.<br>(d) 이 측정값은 안정 시에 잰 것이 아니므로 변수 \"안정 시 심박수\"에 대한 오류예요. 이 값을 빼야 해요 (또는 그 선수를 다시 측정) <b>[R1]</b>.</p>",
      // EN: <p>(a) Median <span class="chem">58</span>, <span class="chem">Q_1 = 54</span>, <span class="chem">Q_3 = 62</span>.<br>(b) <span class="chem">IQR = 8</span>; upper fence <span class="chem">62 + 1.5(8) = 74</span> and <span class="chem">88 &gt; 74</span>, so 88 is an outlier.<br>(c) <span class="chem">x̄ = 59.4</span> bpm, <span class="chem">σ = 8.89</span> bpm.<br>(d) Remove it: it is not a <em>resting</em> heart rate, so it is a measurement error for this variable, not a genuine value.</p>
      answer: "<p>(a) 중앙값 <span class=\"chem\">58</span>, <span class=\"chem\">Q_1 = 54</span>, <span class=\"chem\">Q_3 = 62</span>.<br>(b) <span class=\"chem\">IQR = 8</span>; 위쪽 울타리 <span class=\"chem\">62 + 1.5(8) = 74</span>이고 <span class=\"chem\">88 &gt; 74</span>이므로 88은 이상치예요.<br>(c) <span class=\"chem\">x̄ = 59.4</span> bpm, <span class=\"chem\">σ = 8.89</span> bpm.<br>(d) 빼야 해요: 이것은 <em>안정 시</em> 심박수가 아니므로 실제 값이 아니라 이 변수에 대한 측정 오류예요.</p>",
      markscheme: [
        // EN: A1: Median = 58 bpm.
        "A1: 중앙값 = 58 bpm.",
        // EN: A1: Q₁ = 54 bpm.
        "A1: Q₁ = 54 bpm.",
        // EN: A1: Q₃ = 62 bpm.
        "A1: Q₃ = 62 bpm.",
        // EN: A1: IQR = 62 − 54 = 8.
        "A1: IQR = 62 − 54 = 8.",
        // EN: M1: Upper fence Q₃ + 1.5 × IQR = 62 + 1.5(8) = 74.
        "M1: 위쪽 울타리 Q₃ + 1.5 × IQR = 62 + 1.5(8) = 74.",
        // EN: R1: 88 > 74, so 88 is an outlier.
        "R1: 88 > 74이므로 88은 이상치임.",
        // EN: A1: Mean x̄ = 59.4 bpm.
        "A1: 평균 x̄ = 59.4 bpm.",
        // EN: A1: σ = 8.89 bpm (8.8904…).
        "A1: σ = 8.89 bpm (8.8904…).",
        // EN: R1: Remove the value (or recheck it), because it was not measured at rest, so it does not belong to the data being studied.
        "R1: 안정 시에 측정한 것이 아니어서 연구 대상 자료에 속하지 않으므로 그 값을 뺌 (또는 다시 확인함).",
      ],
    },

    // ── t4-1-q024 · numeric · exam · SL · SL 4.2, 4.3 · 3 marks
    "t4-1-q024": {
      // EN: <p>The reaction times, in seconds, of <span class="chem">12</span> drivers in a simulator are shown below.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Reaction time (s)</th><td class="num">0.42</td><td class="num">0.38</td><td class="num">0.51</td><td class="num">0.47</td><td class="num">0.36</td><td class="num">0.44</td><td class="num">0.59</td><td class="num">0.4</td><td class="num">0.49</td><td class="num">0.45</td><td class="num">0.53</td><td class="num">0.41</td></tr></tbody></table></div><p>Using the GDC method: the median of each half of the ordered data, leaving out the overall median when the number of values is odd, find the interquartile range of the reaction times.</p>
      stem: "<p>시뮬레이터에서 운전자 <span class=\"chem\">12</span>명의 반응 시간(초)은 다음과 같아요.</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">반응 시간 (s)</th><td class=\"num\">0.42</td><td class=\"num\">0.38</td><td class=\"num\">0.51</td><td class=\"num\">0.47</td><td class=\"num\">0.36</td><td class=\"num\">0.44</td><td class=\"num\">0.59</td><td class=\"num\">0.4</td><td class=\"num\">0.49</td><td class=\"num\">0.45</td><td class=\"num\">0.53</td><td class=\"num\">0.41</td></tr></tbody></table></div><p>GDC 방법(정렬한 자료의 아래쪽 절반과 위쪽 절반 각각의 중앙값을 구하고, 값의 개수가 홀수이면 전체 중앙값은 뺌)을 이용해 반응 시간의 사분위수 범위를 구하시오 (Find).</p>",
      hints: [
        // EN: With <span class="chem">n = 12</span> (even), the lower half is the 6 smallest values and the upper half is the 6 largest.
        "<span class=\"chem\">n = 12</span>(짝수)이므로 아래쪽 절반은 가장 작은 6개의 값이고 위쪽 절반은 가장 큰 6개의 값이에요.",
        // EN: <span class="chem">Q_1</span> is the mean of the 3rd and 4th ordered values; <span class="chem">Q_3</span> is the mean of the 9th and 10th. Then <span class="chem">IQR = Q_3 - Q_1</span>.
        "<span class=\"chem\">Q_1</span>은 정렬했을 때 3번째와 4번째 값의 평균이고, <span class=\"chem\">Q_3</span>은 9번째와 10번째 값의 평균이에요. 그다음 <span class=\"chem\">IQR = Q_3 - Q_1</span>이에요.",
      ],
      // EN: <p>Ordered: 0.36, 0.38, 0.40, 0.41, 0.42, 0.44 | 0.45, 0.47, 0.49, 0.51, 0.53, 0.59.<br><span class="chem">Q_1 = (0.40 + 0.41)/2 = 0.405</span> and <span class="chem">Q_3 = (0.49 + 0.51)/2 = 0.5</span> <b>[A1 A1]</b> (these match <span class="mono">1-Var Stats</span>).<br><span class="chem">IQR = 0.5 - 0.405 = 0.095</span> s <b>[A1]</b>.</p>
      solution: "<p>정렬: 0.36, 0.38, 0.40, 0.41, 0.42, 0.44 | 0.45, 0.47, 0.49, 0.51, 0.53, 0.59.<br><span class=\"chem\">Q_1 = (0.40 + 0.41)/2 = 0.405</span>, <span class=\"chem\">Q_3 = (0.49 + 0.51)/2 = 0.5</span> <b>[A1 A1]</b> (<span class=\"mono\">1-Var Stats</span>의 결과와 일치해요).<br><span class=\"chem\">IQR = 0.5 - 0.405 = 0.095</span> s <b>[A1]</b>.</p>",
    },

    // ── t4-1-q025 · short · exam · SL · SL 4.4 · 9 marks
    "t4-1-q025": {
      // EN: <p>An estate agent records the distance <span class="chem">x</span> km from the city centre and the average price <span class="chem">y</span> (in thousands of euros) of a two-bedroom flat in <span class="chem">8</span> districts.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Distance <span class="chem">x</span> (km)</th><td class="num">1.2</td><td class="num">2.5</td><td class="num">3.1</td><td class="num">4.8</td><td class="num">5.5</td><td class="num">6.9</td><td class="num">8.2</td><td class="num">9.6</td></tr><tr><th scope="row">Price <span class="chem">y</span> (thousand €)</th><td class="num">412</td><td class="num">388</td><td class="num">371</td><td class="num">344</td><td class="num">330</td><td class="num">305</td><td class="num">289</td><td class="num">262</td></tr></tbody></table></div><p>(a) Find Pearson's product-moment correlation coefficient <span class="chem">r</span>. <strong>[2 marks]</strong><br>(b) Describe the correlation between distance and price. <strong>[1 mark]</strong><br>(c) Find the equation of the regression line of <span class="chem">y</span> on <span class="chem">x</span>. <strong>[2 marks]</strong><br>(d) Interpret the gradient of the line in context. <strong>[1 mark]</strong><br>(e) Use the line to estimate the average price in a district <span class="chem">7.5</span> km from the centre. <strong>[2 marks]</strong><br>(f) Explain why the line should not be used for a village <span class="chem">15</span> km from the centre. <strong>[1 mark]</strong></p>
      stem: "<p>한 부동산 중개인이 <span class=\"chem\">8</span>개 지역에 대해 도심으로부터의 거리 <span class=\"chem\">x</span> km와 방 두 개짜리 아파트의 평균 가격 <span class=\"chem\">y</span>(천 유로 단위)를 기록했어요.</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">거리 <span class=\"chem\">x</span> (km)</th><td class=\"num\">1.2</td><td class=\"num\">2.5</td><td class=\"num\">3.1</td><td class=\"num\">4.8</td><td class=\"num\">5.5</td><td class=\"num\">6.9</td><td class=\"num\">8.2</td><td class=\"num\">9.6</td></tr><tr><th scope=\"row\">가격 <span class=\"chem\">y</span> (천 €)</th><td class=\"num\">412</td><td class=\"num\">388</td><td class=\"num\">371</td><td class=\"num\">344</td><td class=\"num\">330</td><td class=\"num\">305</td><td class=\"num\">289</td><td class=\"num\">262</td></tr></tbody></table></div><p>(a) 피어슨 적률상관계수 <span class=\"chem\">r</span>을 구하시오 (Find). <strong>[2 marks]</strong><br>(b) 거리와 가격 사이의 상관관계를 서술하시오 (Describe). <strong>[1 mark]</strong><br>(c) <span class=\"chem\">x</span>에 대한 <span class=\"chem\">y</span>의 회귀직선의 방정식을 구하시오 (Find). <strong>[2 marks]</strong><br>(d) 이 직선의 기울기를 맥락에 맞게 해석하시오 (Interpret). <strong>[1 mark]</strong><br>(e) 이 직선을 이용해 도심에서 <span class=\"chem\">7.5</span> km 떨어진 지역의 평균 가격을 추정하시오 (estimate). <strong>[2 marks]</strong><br>(f) 도심에서 <span class=\"chem\">15</span> km 떨어진 마을에 이 직선을 쓰면 안 되는 이유를 설명하시오 (Explain). <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: (a)–(c) are all one GDC run: <span class="mono">LinReg(ax+b) L1, L2</span> with diagnostics on, so that <span class="chem">r</span> is shown.
        "해석: (a)–(c)는 모두 GDC 한 번의 실행으로 나와요. <span class=\"chem\">r</span>이 표시되도록 진단 기능(diagnostics)을 켜고 <span class=\"mono\">LinReg(ax+b) L1, L2</span>를 실행하세요.",
        // EN: For (d), say what one extra km does to the price, with units. A negative gradient means a decrease.
        "(d)에서는 거리가 한 킬로미터 늘 때 가격이 어떻게 되는지 단위와 함께 말하세요. 기울기가 음수이면 감소를 뜻해요.",
        // EN: For (f), compare <span class="chem">15</span> with the smallest and largest <span class="chem">x</span>-values.
        "(f)에서는 <span class=\"chem\">15</span>를 <span class=\"chem\">x</span>의 최솟값, 최댓값과 비교하세요.",
      ],
      // EN: <p>(a) GDC: <span class="chem">r = -0.99812… ≈ -0.998</span> <b>[M1 A1]</b>.<br>(b) Strong negative linear correlation: the further from the centre, the lower the price <b>[A1]</b>.<br>(c) <span class="chem">a = -17.6117…</span>, <span class="chem">b = 429.646…</span>, so <span class="chem">y = -17.6x + 430</span> <b>[A1 A1]</b>.<br>(d) Each additional km from the centre is associated with a fall of about <span class="chem">17.6</span> thousand euros in the average price <b>[A1]</b>.<br>(e) <span class="chem">y = -17.6117(7.5) + 429.646 = 297.558… ≈ 298</span> thousand euros <b>[M1 A1]</b>. This is interpolation (7.5 is inside the data range).<br>(f) <span class="chem">x = 15</span> is outside <span class="chem">1.2 ≤ x ≤ 9.6</span>, so the estimate would be an extrapolation and the linear pattern may not continue <b>[R1]</b>.</p>
      solution: "<p>(a) GDC: <span class=\"chem\">r = -0.99812… ≈ -0.998</span> <b>[M1 A1]</b>.<br>(b) 강한 음의 선형 상관관계: 도심에서 멀수록 가격이 낮아요 <b>[A1]</b>.<br>(c) <span class=\"chem\">a = -17.6117…</span>, <span class=\"chem\">b = 429.646…</span>이므로 <span class=\"chem\">y = -17.6x + 430</span> <b>[A1 A1]</b>.<br>(d) 도심에서 한 킬로미터 더 멀어질 때마다 평균 가격이 약 <span class=\"chem\">17.6</span>천 유로 낮아져요 <b>[A1]</b>.<br>(e) <span class=\"chem\">y = -17.6117(7.5) + 429.646 = 297.558… ≈ 298</span>천 유로 <b>[M1 A1]</b>. 이것은 내삽이에요 (7.5는 자료 범위 안에 있음).<br>(f) <span class=\"chem\">x = 15</span>는 <span class=\"chem\">1.2 ≤ x ≤ 9.6</span> 밖에 있으므로 이 추정은 외삽이고, 선형 패턴이 계속된다는 보장이 없어요 <b>[R1]</b>.</p>",
      // EN: <p>(a) <span class="chem">r = -0.998</span><br>(b) Strong negative linear correlation: prices fall as distance increases.<br>(c) <span class="chem">y = -17.6x + 430</span><br>(d) For each extra km from the centre, the average price falls by about <span class="chem">17.6</span> thousand euros (about €17 600).<br>(e) <span class="chem">y ≈ 298</span> thousand euros.<br>(f) <span class="chem">15</span> km is outside the data range <span class="chem">1.2 ≤ x ≤ 9.6</span>, so this would be extrapolation.</p>
      answer: "<p>(a) <span class=\"chem\">r = -0.998</span><br>(b) 강한 음의 선형 상관관계: 거리가 늘수록 가격이 떨어져요.<br>(c) <span class=\"chem\">y = -17.6x + 430</span><br>(d) 도심에서 한 킬로미터 더 멀어질 때마다 평균 가격이 약 <span class=\"chem\">17.6</span>천 유로(약 €17 600) 떨어져요.<br>(e) <span class=\"chem\">y ≈ 298</span>천 유로.<br>(f) <span class=\"chem\">15</span> km는 자료 범위 <span class=\"chem\">1.2 ≤ x ≤ 9.6</span> 밖에 있으므로 외삽이에요.</p>",
      markscheme: [
        // EN: M1: Uses the GDC with x in L1 and y in L2 (LinReg(ax+b)).
        "M1: x를 L1에, y를 L2에 넣고 GDC(LinReg(ax+b))를 사용함.",
        // EN: A1: r = -0.998 (-0.99812…).
        "A1: r = -0.998 (-0.99812…).",
        // EN: A1: Strong negative (linear) correlation, in context.
        "A1: 맥락에 맞게 강한 음의 (선형) 상관관계라고 서술함.",
        // EN: A1: a = -17.6.
        "A1: a = -17.6.",
        // EN: A1: b = 430, giving y = -17.6x + 430.
        "A1: b = 430, 따라서 y = -17.6x + 430.",
        // EN: A1: Each extra km is associated with a price about 17.6 thousand euros lower, on average.
        "A1: 한 킬로미터 더 멀어질 때마다 가격이 평균 약 17.6천 유로 낮아짐.",
        // EN: M1: Substitutes x = 7.5 into the regression line.
        "M1: 회귀직선에 x = 7.5를 대입함.",
        // EN: A1: y ≈ 298 thousand euros.
        "A1: y ≈ 298천 유로.",
        // EN: R1: 15 km is outside the observed distances (1.2 to 9.6 km): extrapolation, so unreliable.
        "R1: 15 km는 관측된 거리(1.2~9.6 km) 밖이므로 외삽이고 신뢰할 수 없음.",
      ],
    },

    // ── t4-1-q026 · numeric · exam · SL · SL 4.4 · 2 marks
    "t4-1-q026": {
      // EN: <p>Ten students recorded their daily screen time <span class="chem">x</span> hours and their sleep <span class="chem">y</span> hours on the same night.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Screen time <span class="chem">x</span> (h)</th><td class="num">2.1</td><td class="num">3.4</td><td class="num">1.2</td><td class="num">4.8</td><td class="num">3.9</td><td class="num">5.6</td><td class="num">2.7</td><td class="num">4.3</td><td class="num">6.2</td><td class="num">1.8</td></tr><tr><th scope="row">Sleep <span class="chem">y</span> (h)</th><td class="num">8.4</td><td class="num">7.6</td><td class="num">8.9</td><td class="num">6.8</td><td class="num">7.5</td><td class="num">6.4</td><td class="num">7.9</td><td class="num">7.3</td><td class="num">6</td><td class="num">8.1</td></tr></tbody></table></div><p>Find Pearson's product-moment correlation coefficient <span class="chem">r</span> between screen time and sleep.</p>
      stem: "<p>학생 열 명이 하루 화면 사용 시간 <span class=\"chem\">x</span>시간과 같은 날 밤의 수면 시간 <span class=\"chem\">y</span>시간을 기록했어요.</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">화면 사용 시간 <span class=\"chem\">x</span> (h)</th><td class=\"num\">2.1</td><td class=\"num\">3.4</td><td class=\"num\">1.2</td><td class=\"num\">4.8</td><td class=\"num\">3.9</td><td class=\"num\">5.6</td><td class=\"num\">2.7</td><td class=\"num\">4.3</td><td class=\"num\">6.2</td><td class=\"num\">1.8</td></tr><tr><th scope=\"row\">수면 시간 <span class=\"chem\">y</span> (h)</th><td class=\"num\">8.4</td><td class=\"num\">7.6</td><td class=\"num\">8.9</td><td class=\"num\">6.8</td><td class=\"num\">7.5</td><td class=\"num\">6.4</td><td class=\"num\">7.9</td><td class=\"num\">7.3</td><td class=\"num\">6</td><td class=\"num\">8.1</td></tr></tbody></table></div><p>화면 사용 시간과 수면 시간 사이의 피어슨 적률상관계수 <span class=\"chem\">r</span>을 구하시오 (Find).</p>",
      hints: [
        // EN: Enter screen time in <span class="mono">L1</span> and sleep in <span class="mono">L2</span> (keep each pair together), then run <span class="mono">LinReg(ax+b)</span>.
        "화면 사용 시간을 <span class=\"mono\">L1</span>에, 수면 시간을 <span class=\"mono\">L2</span>에 입력하고(각 순서쌍이 짝을 유지하도록) <span class=\"mono\">LinReg(ax+b)</span>를 실행하세요.",
        // EN: If <span class="chem">r</span> does not appear, turn on diagnostics (TI) or read it from the regression results screen.
        "<span class=\"chem\">r</span>이 나오지 않으면 진단 기능(diagnostics)을 켜거나(TI) 회귀 결과 화면에서 읽으세요.",
      ],
      // EN: <p>GDC (<span class="mono">LinReg(ax+b) L1, L2</span>): <span class="chem">r = -0.98391… ≈ -0.984</span> <b>[M1 A1]</b>, a strong negative linear correlation.</p>
      solution: "<p>GDC(<span class=\"mono\">LinReg(ax+b) L1, L2</span>): <span class=\"chem\">r = -0.98391… ≈ -0.984</span> <b>[M1 A1]</b>, 강한 음의 선형 상관관계예요.</p>",
    },

    // ── t4-1-q027 · numeric · exam · SL · SL 4.4 · 3 marks
    "t4-1-q027": {
      // EN: <p>A chemist sets the temperature <span class="chem">x</span> °C of a beaker of water and measures the mass <span class="chem">y</span> grams of a salt that dissolves in it.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Temperature <span class="chem">x</span> (°C)</th><td class="num">10</td><td class="num">20</td><td class="num">30</td><td class="num">40</td><td class="num">50</td><td class="num">60</td></tr><tr><th scope="row">Mass dissolved <span class="chem">y</span> (g)</th><td class="num">35.8</td><td class="num">38.9</td><td class="num">41.7</td><td class="num">45.2</td><td class="num">47.9</td><td class="num">51.3</td></tr></tbody></table></div><p>Use the regression line of <span class="chem">y</span> on <span class="chem">x</span> to estimate the mass that dissolves at <span class="chem">45</span> °C.</p>
      stem: "<p>한 화학자가 비커에 담긴 물의 온도를 <span class=\"chem\">x</span> °C로 맞추고, 그 물에 녹는 소금의 질량 <span class=\"chem\">y</span>그램을 측정했어요.</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">온도 <span class=\"chem\">x</span> (°C)</th><td class=\"num\">10</td><td class=\"num\">20</td><td class=\"num\">30</td><td class=\"num\">40</td><td class=\"num\">50</td><td class=\"num\">60</td></tr><tr><th scope=\"row\">녹은 질량 <span class=\"chem\">y</span> (g)</th><td class=\"num\">35.8</td><td class=\"num\">38.9</td><td class=\"num\">41.7</td><td class=\"num\">45.2</td><td class=\"num\">47.9</td><td class=\"num\">51.3</td></tr></tbody></table></div><p><span class=\"chem\">x</span>에 대한 <span class=\"chem\">y</span>의 회귀직선을 이용해 <span class=\"chem\">45</span> °C에서 녹는 질량을 추정하시오 (estimate).</p>",
      hints: [
        // EN: Run <span class="mono">LinReg(ax+b)</span> with temperature as the <span class="chem">x</span>-list.
        "온도를 <span class=\"chem\">x</span> 리스트로 하여 <span class=\"mono\">LinReg(ax+b)</span>를 실행하세요.",
        // EN: Substitute <span class="chem">x = 45</span> using the unrounded values of <span class="chem">a</span> and <span class="chem">b</span> (store the line in <span class="mono">Y1</span>).
        "<span class=\"chem\">a</span>와 <span class=\"chem\">b</span>의 반올림하지 않은 값을 이용해 <span class=\"chem\">x = 45</span>를 대입하세요 (직선을 <span class=\"mono\">Y1</span>에 저장).",
      ],
      // EN: <p>GDC: <span class="chem">y = 0.308571x + 32.6667</span> (<span class="chem">r = 1.00</span>) <b>[M1 A1]</b>.<br><span class="chem">y(45) = 46.552… ≈ 46.6</span> g <b>[A1]</b>. Since 45 °C lies inside the range 10–60 °C and <span class="chem">r</span> is very close to 1, this interpolation is reliable.</p>
      solution: "<p>GDC: <span class=\"chem\">y = 0.308571x + 32.6667</span> (<span class=\"chem\">r = 1.00</span>) <b>[M1 A1]</b>.<br><span class=\"chem\">y(45) = 46.552… ≈ 46.6</span> g <b>[A1]</b>. 45 °C는 범위 10–60 °C 안에 있고 <span class=\"chem\">r</span>이 1에 매우 가까우므로 이 내삽은 신뢰할 수 있어요.</p>",
    },

    // ── t4-1-q028 · short · exam · SL · SL 4.4, 4.10 · 7 marks
    "t4-1-q028": {
      // EN: <p>Ten students sat two papers. Their marks on Paper A, <span class="chem">x</span>, and Paper B, <span class="chem">y</span>, are shown below.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Paper A mark <span class="chem">x</span></th><td class="num">45</td><td class="num">52</td><td class="num">61</td><td class="num">38</td><td class="num">70</td><td class="num">58</td><td class="num">66</td><td class="num">49</td><td class="num">75</td><td class="num">55</td></tr><tr><th scope="row">Paper B mark <span class="chem">y</span></th><td class="num">50</td><td class="num">55</td><td class="num">60</td><td class="num">44</td><td class="num">72</td><td class="num">54</td><td class="num">70</td><td class="num">47</td><td class="num">78</td><td class="num">61</td></tr></tbody></table></div><p>(a) Find the value of <span class="chem">r</span> and comment on it. <strong>[2 marks]</strong><br>(b) Find the equation of the regression line of <span class="chem">x</span> on <span class="chem">y</span>, in the form <span class="chem">x = cy + d</span>. <strong>[2 marks]</strong><br>(c) Another student was absent for Paper A and scored <span class="chem">62</span> on Paper B. Estimate the mark this student would have scored on Paper A. <strong>[2 marks]</strong><br>(d) Explain why the regression line of <span class="chem">y</span> on <span class="chem">x</span> should not be rearranged to answer part (c). <strong>[1 mark]</strong></p>
      stem: "<p>학생 열 명이 두 개의 시험지를 풀었어요. Paper A의 점수 <span class=\"chem\">x</span>와 Paper B의 점수 <span class=\"chem\">y</span>는 다음과 같아요.</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">Paper A 점수 <span class=\"chem\">x</span></th><td class=\"num\">45</td><td class=\"num\">52</td><td class=\"num\">61</td><td class=\"num\">38</td><td class=\"num\">70</td><td class=\"num\">58</td><td class=\"num\">66</td><td class=\"num\">49</td><td class=\"num\">75</td><td class=\"num\">55</td></tr><tr><th scope=\"row\">Paper B 점수 <span class=\"chem\">y</span></th><td class=\"num\">50</td><td class=\"num\">55</td><td class=\"num\">60</td><td class=\"num\">44</td><td class=\"num\">72</td><td class=\"num\">54</td><td class=\"num\">70</td><td class=\"num\">47</td><td class=\"num\">78</td><td class=\"num\">61</td></tr></tbody></table></div><p>(a) <span class=\"chem\">r</span>의 값을 구하고 이에 대해 논평하시오 (Find, comment). <strong>[2 marks]</strong><br>(b) <span class=\"chem\">y</span>에 대한 <span class=\"chem\">x</span>의 회귀직선의 방정식을 <span class=\"chem\">x = cy + d</span> 꼴로 구하시오 (Find). <strong>[2 marks]</strong><br>(c) 다른 학생 한 명은 Paper A에 결시했고 Paper B에서 <span class=\"chem\">62</span>점을 받았어요. 이 학생이 Paper A에서 받았을 점수를 추정하시오 (Estimate). <strong>[2 marks]</strong><br>(d) (c)에 답하기 위해 <span class=\"chem\">x</span>에 대한 <span class=\"chem\">y</span>의 회귀직선을 변형해서 쓰면 안 되는 이유를 설명하시오 (Explain). <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: you are given a Paper B mark (<span class="chem">y</span>) and asked for a Paper A mark (<span class="chem">x</span>). Predicting <span class="chem">x</span> from <span class="chem">y</span> needs the <span class="chem">x</span>-on-<span class="chem">y</span> line (SL 4.10).
        "해석: Paper B 점수(<span class=\"chem\">y</span>)가 주어지고 Paper A 점수(<span class=\"chem\">x</span>)를 구해야 해요. <span class=\"chem\">y</span>로부터 <span class=\"chem\">x</span>를 예측하려면 <span class=\"chem\">y</span>에 대한 <span class=\"chem\">x</span>의 회귀직선이 필요해요 (SL 4.10).",
        // EN: On the GDC swap the lists: put the <span class="chem">y</span>-marks as the Xlist and the <span class="chem">x</span>-marks as the Ylist. The "slope" shown is <span class="chem">c</span> and the "intercept" is <span class="chem">d</span>.
        "GDC에서 리스트를 바꾸세요: <span class=\"chem\">y</span> 점수를 Xlist로, <span class=\"chem\">x</span> 점수를 Ylist로 넣어요. 표시되는 \"slope\"가 <span class=\"chem\">c</span>이고 \"intercept\"가 <span class=\"chem\">d</span>예요.",
        // EN: Substitute <span class="chem">y = 62</span> into <span class="chem">x = cy + d</span>.
        "<span class=\"chem\">y = 62</span>를 <span class=\"chem\">x = cy + d</span>에 대입하세요.",
      ],
      // EN: <p>(a) GDC: <span class="chem">r = 0.95409… ≈ 0.954</span> <b>[A1]</b>: a strong positive linear correlation <b>[R1]</b>.<br>(b) <span class="mono">LinReg(ax+b) L2, L1</span> (the <span class="chem">y</span>-marks as Xlist) gives <span class="chem">c = 0.97140…</span> and <span class="chem">d = -0.5098…</span> <b>[M1]</b>, so <span class="chem">x = 0.971y − 0.510</span> <b>[A1]</b>.<br>(c) <span class="chem">x = 0.97140(62) − 0.5098 = 59.717… ≈ 59.7</span> <b>[M1 A1]</b>, about 60 marks. (62 is inside the Paper B range 44–78, so this is interpolation.)<br>(d) The <span class="chem">y</span>-on-<span class="chem">x</span> line minimises the squared vertical distances, so it is designed to predict <span class="chem">y</span>. Rearranging it would give <span class="chem">x ≈ 60.0</span>, a different (biased) value, because <span class="chem">|r| &lt; 1</span> <b>[R1]</b>.</p>
      solution: "<p>(a) GDC: <span class=\"chem\">r = 0.95409… ≈ 0.954</span> <b>[A1]</b>: 강한 양의 선형 상관관계예요 <b>[R1]</b>.<br>(b) <span class=\"mono\">LinReg(ax+b) L2, L1</span>(<span class=\"chem\">y</span> 점수를 Xlist로)을 실행하면 <span class=\"chem\">c = 0.97140…</span>, <span class=\"chem\">d = -0.5098…</span> <b>[M1]</b>이므로 <span class=\"chem\">x = 0.971y − 0.510</span> <b>[A1]</b>.<br>(c) <span class=\"chem\">x = 0.97140(62) − 0.5098 = 59.717… ≈ 59.7</span> <b>[M1 A1]</b>, 약 60점이에요. (62는 Paper B의 범위 44–78 안에 있으므로 내삽이에요.)<br>(d) <span class=\"chem\">x</span>에 대한 <span class=\"chem\">y</span>의 회귀직선은 세로 거리의 제곱의 합을 최소로 하므로 <span class=\"chem\">y</span>를 예측하도록 만들어진 직선이에요. 이를 변형하면 <span class=\"chem\">x ≈ 60.0</span>이라는 다른 (편향된) 값이 나오는데, 이는 <span class=\"chem\">|r| &lt; 1</span>이기 때문이에요 <b>[R1]</b>.</p>",
      // EN: <p>(a) <span class="chem">r = 0.954</span>: strong positive linear correlation.<br>(b) <span class="chem">x = 0.971y − 0.510</span><br>(c) <span class="chem">x ≈ 59.7</span>, so about <span class="chem">60</span> marks.<br>(d) The <span class="chem">y</span>-on-<span class="chem">x</span> line minimises vertical (<span class="chem">y</span>) errors and is for predicting <span class="chem">y</span> from <span class="chem">x</span>. To predict <span class="chem">x</span> from a given <span class="chem">y</span> we need the line that minimises horizontal errors: <span class="chem">x</span> on <span class="chem">y</span>.</p>
      answer: "<p>(a) <span class=\"chem\">r = 0.954</span>: 강한 양의 선형 상관관계.<br>(b) <span class=\"chem\">x = 0.971y − 0.510</span><br>(c) <span class=\"chem\">x ≈ 59.7</span>, 즉 약 <span class=\"chem\">60</span>점.<br>(d) <span class=\"chem\">x</span>에 대한 <span class=\"chem\">y</span>의 회귀직선은 세로(<span class=\"chem\">y</span>) 오차를 최소로 하며 <span class=\"chem\">x</span>로부터 <span class=\"chem\">y</span>를 예측하기 위한 것이에요. 주어진 <span class=\"chem\">y</span>로부터 <span class=\"chem\">x</span>를 예측하려면 가로 오차를 최소로 하는 직선, 즉 <span class=\"chem\">y</span>에 대한 <span class=\"chem\">x</span>의 회귀직선이 필요해요.</p>",
      markscheme: [
        // EN: A1: r = 0.954.
        "A1: r = 0.954.",
        // EN: R1: Strong positive linear correlation (students who do well on one paper tend to do well on the other).
        "R1: 강한 양의 선형 상관관계 (한 시험을 잘 본 학생은 다른 시험도 잘 보는 경향이 있음).",
        // EN: M1: Uses the GDC with y as the explanatory list (LinReg with Xlist = y-values, Ylist = x-values).
        "M1: y를 설명변수 리스트로 하여 GDC를 사용함 (Xlist = y 값, Ylist = x 값으로 LinReg).",
        // EN: A1: x = 0.971y − 0.510.
        "A1: x = 0.971y − 0.510.",
        // EN: M1: Substitutes y = 62 into the x-on-y line.
        "M1: y에 대한 x의 회귀직선에 y = 62를 대입함.",
        // EN: A1: x ≈ 59.7 (accept 60 marks).
        "A1: x ≈ 59.7 (60점도 인정).",
        // EN: R1: The y-on-x line minimises errors in y, so it is not the least-squares line for predicting x; the x-on-y line is.
        "R1: x에 대한 y의 회귀직선은 y의 오차를 최소로 하므로 x를 예측하기 위한 최소제곱 직선이 아님; y에 대한 x의 회귀직선이 그러함.",
      ],
    },

    // ── t4-1-q029 · numeric · exam · SL · SL 4.10 · 3 marks
    "t4-1-q029": {
      // EN: <p>A forensic scientist measures the foot length <span class="chem">x</span> cm and the height <span class="chem">y</span> cm of <span class="chem">8</span> adults.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Foot length <span class="chem">x</span> (cm)</th><td class="num">23.5</td><td class="num">25.2</td><td class="num">26.8</td><td class="num">24.1</td><td class="num">27.5</td><td class="num">22.8</td><td class="num">25.9</td><td class="num">28.3</td></tr><tr><th scope="row">Height <span class="chem">y</span> (cm)</th><td class="num">160</td><td class="num">171</td><td class="num">178</td><td class="num">166</td><td class="num">183</td><td class="num">158</td><td class="num">174</td><td class="num">187</td></tr></tbody></table></div><p>A suspect is known to be <span class="chem">172</span> cm tall. Using an appropriate regression line, estimate the suspect's foot length.</p>
      stem: "<p>한 법과학자가 성인 <span class=\"chem\">8</span>명의 발 길이 <span class=\"chem\">x</span> cm와 키 <span class=\"chem\">y</span> cm를 측정했어요.</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">발 길이 <span class=\"chem\">x</span> (cm)</th><td class=\"num\">23.5</td><td class=\"num\">25.2</td><td class=\"num\">26.8</td><td class=\"num\">24.1</td><td class=\"num\">27.5</td><td class=\"num\">22.8</td><td class=\"num\">25.9</td><td class=\"num\">28.3</td></tr><tr><th scope=\"row\">키 <span class=\"chem\">y</span> (cm)</th><td class=\"num\">160</td><td class=\"num\">171</td><td class=\"num\">178</td><td class=\"num\">166</td><td class=\"num\">183</td><td class=\"num\">158</td><td class=\"num\">174</td><td class=\"num\">187</td></tr></tbody></table></div><p>어떤 용의자의 키가 <span class=\"chem\">172</span> cm라는 것이 알려져 있어요. 적절한 회귀직선을 이용해 이 용의자의 발 길이를 추정하시오 (estimate).</p>",
      hints: [
        // EN: Decode: the height <span class="chem">y</span> is given and the foot length <span class="chem">x</span> is wanted, so you need the regression line of <span class="chem">x</span> on <span class="chem">y</span>.
        "해석: 키 <span class=\"chem\">y</span>가 주어지고 발 길이 <span class=\"chem\">x</span>를 구해야 하므로 <span class=\"chem\">y</span>에 대한 <span class=\"chem\">x</span>의 회귀직선이 필요해요.",
        // EN: Run <span class="mono">LinReg(ax+b)</span> with the heights as the Xlist and the foot lengths as the Ylist, then substitute <span class="chem">172</span>.
        "키를 Xlist로, 발 길이를 Ylist로 하여 <span class=\"mono\">LinReg(ax+b)</span>를 실행한 다음 <span class=\"chem\">172</span>를 대입하세요.",
      ],
      // EN: <p>Decode: predict <span class="chem">x</span> from <span class="chem">y</span>, so use <span class="chem">x</span> on <span class="chem">y</span> <b>[M1]</b>.<br>GDC: <span class="chem">x = 0.18756y − 6.7719</span> <b>[A1]</b>.<br><span class="chem">x = 0.18756(172) − 6.7719 = 25.4891… ≈ 25.5</span> cm <b>[A1]</b>.</p>
      solution: "<p>해석: <span class=\"chem\">y</span>로부터 <span class=\"chem\">x</span>를 예측하므로 <span class=\"chem\">y</span>에 대한 <span class=\"chem\">x</span>의 회귀직선을 사용해요 <b>[M1]</b>.<br>GDC: <span class=\"chem\">x = 0.18756y − 6.7719</span> <b>[A1]</b>.<br><span class=\"chem\">x = 0.18756(172) − 6.7719 = 25.4891… ≈ 25.5</span> cm <b>[A1]</b>.</p>",
    },

    // ── t4-1-q030 · numeric · exam · SL · SL 4.3 · 3 marks
    "t4-1-q030": {
      // EN: <p>The ages <span class="chem">A</span> years of the <span class="chem">80</span> members of a climbing club are summarised below.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Age <span class="chem">A</span> (years)</th><td class="num">15 ≤ <i>A</i> &lt; 25</td><td class="num">25 ≤ <i>A</i> &lt; 35</td><td class="num">35 ≤ <i>A</i> &lt; 45</td><td class="num">45 ≤ <i>A</i> &lt; 55</td><td class="num">55 ≤ <i>A</i> &lt; 65</td></tr><tr><th scope="row">Frequency</th><td class="num">14</td><td class="num">23</td><td class="num">19</td><td class="num">15</td><td class="num">9</td></tr></tbody></table></div><p>Find an estimate of the mean age of the members.</p>
      stem: "<p>어느 등산 동호회 회원 <span class=\"chem\">80</span>명의 나이 <span class=\"chem\">A</span>세를 다음과 같이 정리했어요.</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">나이 <span class=\"chem\">A</span> (세)</th><td class=\"num\">15 ≤ <i>A</i> &lt; 25</td><td class=\"num\">25 ≤ <i>A</i> &lt; 35</td><td class=\"num\">35 ≤ <i>A</i> &lt; 45</td><td class=\"num\">45 ≤ <i>A</i> &lt; 55</td><td class=\"num\">55 ≤ <i>A</i> &lt; 65</td></tr><tr><th scope=\"row\">도수</th><td class=\"num\">14</td><td class=\"num\">23</td><td class=\"num\">19</td><td class=\"num\">15</td><td class=\"num\">9</td></tr></tbody></table></div><p>회원들의 평균 나이의 추정값을 구하시오 (Find).</p>",
      hints: [
        // EN: Use the mid-interval values <span class="chem">20, 30, 40, 50, 60</span> as the data and the frequencies as the frequency list.
        "계급값 <span class=\"chem\">20, 30, 40, 50, 60</span>을 자료로, 도수를 도수 리스트로 사용하세요.",
        // EN: <span class="chem">x̄ ≈ (Σ f x) / (Σ f)</span>. Check that <span class="chem">Σ f = 80</span>.
        "<span class=\"chem\">x̄ ≈ (Σ f x) / (Σ f)</span>. <span class=\"chem\">Σ f = 80</span>인지 확인하세요.",
      ],
      // EN: <p>Mid-interval values <span class="chem">20, 30, 40, 50, 60</span> <b>[M1]</b>.<br><span class="chem">Σ f x = 280 + 690 + 760 + 750 + 540 = 3020</span> <b>[A1]</b>, so <span class="chem">x̄ ≈ 3020 / 80 = 37.75 ≈ 37.8</span> years <b>[A1]</b> (GDC with the frequency list gives the same value).</p>
      solution: "<p>계급값 <span class=\"chem\">20, 30, 40, 50, 60</span> <b>[M1]</b>.<br><span class=\"chem\">Σ f x = 280 + 690 + 760 + 750 + 540 = 3020</span> <b>[A1]</b>이므로 <span class=\"chem\">x̄ ≈ 3020 / 80 = 37.75 ≈ 37.8</span>세 <b>[A1]</b> (도수 리스트를 넣은 GDC로도 같은 값이 나와요).</p>",
      // EN: years
      unit: "세",
    },

    // ── t4-1-q031 · short · exam · SL · SL 4.2, 4.3 · 6 marks
    "t4-1-q031": {
      // EN: <p>The lengths <span class="chem">L</span> cm of <span class="chem">60</span> fish caught in a lake are shown in the table.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Length <span class="chem">L</span> (cm)</th><td class="num">20 ≤ <i>L</i> &lt; 24</td><td class="num">24 ≤ <i>L</i> &lt; 28</td><td class="num">28 ≤ <i>L</i> &lt; 32</td><td class="num">32 ≤ <i>L</i> &lt; 36</td><td class="num">36 ≤ <i>L</i> &lt; 40</td></tr><tr><th scope="row">Frequency</th><td class="num">7</td><td class="num">15</td><td class="num">19</td><td class="num">12</td><td class="num">7</td></tr></tbody></table></div><p>(a) Write down the modal class. <strong>[1 mark]</strong><br>(b) Find an estimate of the mean length. <strong>[2 marks]</strong><br>(c) Find an estimate of the standard deviation of the lengths. <strong>[2 marks]</strong><br>(d) Explain why the answers to (b) and (c) are only estimates. <strong>[1 mark]</strong></p>
      stem: "<p>어느 호수에서 잡은 물고기 <span class=\"chem\">60</span>마리의 길이 <span class=\"chem\">L</span> cm가 표에 나와 있어요.</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">길이 <span class=\"chem\">L</span> (cm)</th><td class=\"num\">20 ≤ <i>L</i> &lt; 24</td><td class=\"num\">24 ≤ <i>L</i> &lt; 28</td><td class=\"num\">28 ≤ <i>L</i> &lt; 32</td><td class=\"num\">32 ≤ <i>L</i> &lt; 36</td><td class=\"num\">36 ≤ <i>L</i> &lt; 40</td></tr><tr><th scope=\"row\">도수</th><td class=\"num\">7</td><td class=\"num\">15</td><td class=\"num\">19</td><td class=\"num\">12</td><td class=\"num\">7</td></tr></tbody></table></div><p>(a) 최빈 계급을 쓰시오 (Write down). <strong>[1 mark]</strong><br>(b) 평균 길이의 추정값을 구하시오 (Find). <strong>[2 marks]</strong><br>(c) 길이의 표준편차의 추정값을 구하시오 (Find). <strong>[2 marks]</strong><br>(d) (b)와 (c)의 답이 추정값일 뿐인 이유를 설명하시오 (Explain). <strong>[1 mark]</strong></p>",
      hints: [
        // EN: The modal class is the class with the highest frequency (the classes have equal width), not a single value.
        "최빈 계급은 도수가 가장 큰 계급이에요 (계급의 폭이 같아요). 하나의 값이 아니에요.",
        // EN: Mid-interval values: <span class="chem">22, 26, 30, 34, 38</span>. Put them in <span class="mono">L1</span> and the frequencies in <span class="mono">L2</span>.
        "계급값: <span class=\"chem\">22, 26, 30, 34, 38</span>. 이 값들을 <span class=\"mono\">L1</span>에, 도수를 <span class=\"mono\">L2</span>에 넣으세요.",
      ],
      // EN: <p>(a) The largest frequency is 19, so the modal class is <span class="chem">28 ≤ L &lt; 32</span> <b>[A1]</b>.<br>(b) With mid-interval values <span class="chem">22, 26, 30, 34, 38</span> <b>[M1]</b>: <span class="chem">x̄ ≈ (154 + 390 + 570 + 408 + 266)/60 = 1788/60 = 29.8</span> cm <b>[A1]</b>.<br>(c) GDC (<span class="mono">1-Var Stats L1, L2</span>) <b>[M1]</b>: <span class="chem">σ ≈ 4.7004… ≈ 4.70</span> cm <b>[A1]</b>.<br>(d) The original lengths are lost when the data are grouped; every fish in a class is assumed to have the mid-interval length <b>[R1]</b>.</p>
      solution: "<p>(a) 가장 큰 도수가 19이므로 최빈 계급은 <span class=\"chem\">28 ≤ L &lt; 32</span> <b>[A1]</b>.<br>(b) 계급값 <span class=\"chem\">22, 26, 30, 34, 38</span>을 이용하면 <b>[M1]</b>: <span class=\"chem\">x̄ ≈ (154 + 390 + 570 + 408 + 266)/60 = 1788/60 = 29.8</span> cm <b>[A1]</b>.<br>(c) GDC(<span class=\"mono\">1-Var Stats L1, L2</span>) <b>[M1]</b>: <span class=\"chem\">σ ≈ 4.7004… ≈ 4.70</span> cm <b>[A1]</b>.<br>(d) 자료를 계급으로 묶으면 원래 길이를 알 수 없게 되고, 각 계급의 물고기는 모두 계급값의 길이를 가진다고 가정해요 <b>[R1]</b>.</p>",
      // EN: <p>(a) <span class="chem">28 ≤ L &lt; 32</span><br>(b) <span class="chem">x̄ ≈ 29.8</span> cm<br>(c) <span class="chem">σ ≈ 4.70</span> cm<br>(d) The individual lengths are not known: each fish is treated as if its length were the mid-interval value.</p>
      answer: "<p>(a) <span class=\"chem\">28 ≤ L &lt; 32</span><br>(b) <span class=\"chem\">x̄ ≈ 29.8</span> cm<br>(c) <span class=\"chem\">σ ≈ 4.70</span> cm<br>(d) 개별 길이를 알 수 없어요: 각 물고기의 길이를 계급값인 것처럼 다뤄요.</p>",
      markscheme: [
        // EN: A1: Modal class 28 ≤ L < 32 (frequency 19).
        "A1: 최빈 계급 28 ≤ L < 32 (도수 19).",
        // EN: M1: Uses the mid-interval values 22, 26, 30, 34, 38 with the frequencies.
        "M1: 계급값 22, 26, 30, 34, 38을 도수와 함께 사용함.",
        // EN: A1: Mean ≈ 29.8 cm.
        "A1: 평균 ≈ 29.8 cm.",
        // EN: M1: Uses the GDC (1-Var Stats with the frequency list) and reads σx.
        "M1: GDC(도수 리스트를 넣은 1-Var Stats)를 사용하고 σx를 읽음.",
        // EN: A1: σ ≈ 4.70 cm (4.7004…).
        "A1: σ ≈ 4.70 cm (4.7004…).",
        // EN: R1: The raw data are grouped, so the mid-interval values stand in for the actual lengths.
        "R1: 원자료가 계급으로 묶여 있으므로 실제 길이 대신 계급값을 사용함.",
      ],
    },

    // ── t4-1-q032 · numeric · challenge · SL · SL 4.3 · 4 marks
    "t4-1-q032": {
      // EN: <p>A polar research station records the midday temperature, in °C, on <span class="chem">10</span> days.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Temperature (°C)</th><td class="num">-4.2</td><td class="num">-1.8</td><td class="num">0.5</td><td class="num">2.3</td><td class="num">-3.1</td><td class="num">1.7</td><td class="num">-0.6</td><td class="num">3.4</td><td class="num">-2.5</td><td class="num">0.9</td></tr></tbody></table></div><p>A visiting team from the USA converts every reading to degrees Fahrenheit using <span class="chem">F = 1.8C + 32</span>. Find the standard deviation of the <span class="chem">10</span> temperatures in °F.</p>
      stem: "<p>어느 극지 연구 기지에서 <span class=\"chem\">10</span>일 동안의 정오 기온(°C)을 기록했어요.</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">기온 (°C)</th><td class=\"num\">-4.2</td><td class=\"num\">-1.8</td><td class=\"num\">0.5</td><td class=\"num\">2.3</td><td class=\"num\">-3.1</td><td class=\"num\">1.7</td><td class=\"num\">-0.6</td><td class=\"num\">3.4</td><td class=\"num\">-2.5</td><td class=\"num\">0.9</td></tr></tbody></table></div><p>미국에서 온 방문 팀이 <span class=\"chem\">F = 1.8C + 32</span>를 이용해 모든 측정값을 화씨로 바꿔요. <span class=\"chem\">10</span>개 기온의 °F 단위 표준편차를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: this is "effect of constant changes" (SL 4.3). Each value is multiplied by <span class="chem">1.8</span> and then has <span class="chem">32</span> added. Only one of these changes the spread.
        "해석: 이것은 \"상수에 의한 변화의 효과\"(SL 4.3)예요. 각 값에 <span class=\"chem\">1.8</span>을 곱한 다음 <span class=\"chem\">32</span>를 더해요. 이 중 하나만 퍼짐을 바꿔요.",
        // EN: Find <span class="chem">σ_C</span> of the Celsius data on the GDC.
        "GDC로 섭씨 자료의 <span class=\"chem\">σ_C</span>를 구하세요.",
        // EN: Then <span class="chem">σ_F = 1.8 σ_C</span>: adding <span class="chem">32</span> does not change the standard deviation. (Or convert all ten values and run <span class="mono">1-Var Stats</span> again as a check.)
        "그다음 <span class=\"chem\">σ_F = 1.8 σ_C</span>예요: <span class=\"chem\">32</span>를 더해도 표준편차는 변하지 않아요. (확인을 위해 열 개의 값을 모두 바꾸고 <span class=\"mono\">1-Var Stats</span>를 다시 실행해도 돼요.)",
      ],
      // EN: <p><b>Decode:</b> a linear change <span class="chem">F = 1.8C + 32</span> multiplies the standard deviation by <span class="chem">|1.8|</span> and the shift <span class="chem">+32</span> has no effect on spread.<br>GDC: <span class="chem">σ_C = 2.3821…</span> °C <b>[M1 A1]</b>.<br><span class="chem">σ_F = 1.8 × 2.3821… = 4.2878… ≈ 4.29</span> °F <b>[M1 A1]</b>.</p>
      solution: "<p><b>해석:</b> 일차 변환 <span class=\"chem\">F = 1.8C + 32</span>는 표준편차에 <span class=\"chem\">|1.8|</span>을 곱하고, 평행이동 <span class=\"chem\">+32</span>는 퍼짐에 영향을 주지 않아요.<br>GDC: <span class=\"chem\">σ_C = 2.3821…</span> °C <b>[M1 A1]</b>.<br><span class=\"chem\">σ_F = 1.8 × 2.3821… = 4.2878… ≈ 4.29</span> °F <b>[M1 A1]</b>.</p>",
    },

    // ── t4-1-q033 · short · challenge · SL · SL 4.1, 4.2, 4.3 · 10 marks
    "t4-1-q033": {
      // EN: <p>A quality-control technician weighs <span class="chem">11</span> tablets from a batch labelled "500 mg". The masses, in mg, are:</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Mass (mg)</th><td class="num">498</td><td class="num">502</td><td class="num">505</td><td class="num">497</td><td class="num">501</td><td class="num">499</td><td class="num">503</td><td class="num">540</td><td class="num">500</td><td class="num">496</td><td class="num">504</td></tr></tbody></table></div><p>Quartiles are found by the GDC method: the median of each half of the ordered data, leaving out the overall median when the number of values is odd.<br>(a) Write down <span class="chem">Q_1</span> and <span class="chem">Q_3</span>. <strong>[2 marks]</strong><br>(b) Show that the data contain exactly one outlier. <strong>[3 marks]</strong><br>(c) Find the mean and standard deviation of the <span class="chem">11</span> masses as recorded. <strong>[2 marks]</strong><br>(d) The technician realises that the outlier was a typing error: the digits of the true mass <span class="chem">504</span> mg were typed in the wrong order. Find the corrected mean and standard deviation. <strong>[2 marks]</strong><br>(e) State which of the two statistics in (c) was affected more by the error, in relative terms. <strong>[1 mark]</strong></p>
      stem: "<p>품질 관리 기술자가 \"500 mg\"이라고 표시된 묶음에서 알약 <span class=\"chem\">11</span>개의 질량을 쟀어요. 질량(mg)은 다음과 같아요:</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">질량 (mg)</th><td class=\"num\">498</td><td class=\"num\">502</td><td class=\"num\">505</td><td class=\"num\">497</td><td class=\"num\">501</td><td class=\"num\">499</td><td class=\"num\">503</td><td class=\"num\">540</td><td class=\"num\">500</td><td class=\"num\">496</td><td class=\"num\">504</td></tr></tbody></table></div><p>사분위수는 GDC 방법으로 구해요: 정렬한 자료의 아래쪽 절반과 위쪽 절반 각각의 중앙값을 구하고, 값의 개수가 홀수이면 전체 중앙값은 빼요.<br>(a) <span class=\"chem\">Q_1</span>과 <span class=\"chem\">Q_3</span>을 쓰시오 (Write down). <strong>[2 marks]</strong><br>(b) 자료에 이상치가 정확히 하나 있음을 보이시오 (Show that). <strong>[3 marks]</strong><br>(c) 기록된 그대로의 <span class=\"chem\">11</span>개 질량의 평균과 표준편차를 구하시오 (Find). <strong>[2 marks]</strong><br>(d) 기술자는 이상치가 입력 오류였다는 것을 깨달았어요: 실제 질량 <span class=\"chem\">504</span> mg의 숫자 순서를 잘못 입력했어요. 수정한 평균과 표준편차를 구하시오 (Find). <strong>[2 marks]</strong><br>(e) (c)의 두 통계량 중 상대적으로 볼 때 오류의 영향을 더 많이 받은 것은 어느 것인지 말하시오 (State). <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: (b) says "exactly one", so you must show one value is beyond a fence AND that every other value is inside both fences. In (d), "digits in the wrong order" tells you which recorded value was really 504.
        "해석: (b)는 \"정확히 하나\"라고 했으므로 한 값이 울타리 밖에 있다는 것, 그리고 다른 모든 값이 두 울타리 안에 있다는 것을 보여야 해요. (d)의 \"숫자 순서가 잘못됨\"은 기록된 값 중 어느 것이 실제로는 504였는지 알려 줘요.",
        // EN: Run <span class="mono">1-Var Stats</span> for <span class="chem">Q_1</span> and <span class="chem">Q_3</span>. Then the fences are <span class="chem">Q_1 - 1.5 IQR</span> and <span class="chem">Q_3 + 1.5 IQR</span>.
        "<span class=\"mono\">1-Var Stats</span>를 실행해 <span class=\"chem\">Q_1</span>과 <span class=\"chem\">Q_3</span>을 구하세요. 그러면 울타리는 <span class=\"chem\">Q_1 - 1.5 IQR</span>과 <span class=\"chem\">Q_3 + 1.5 IQR</span>이에요.",
        // EN: For (d), replace 540 by 504 in the list and run <span class="mono">1-Var Stats</span> again.
        "(d)에서는 리스트의 540을 504로 바꾸고 <span class=\"mono\">1-Var Stats</span>를 다시 실행하세요.",
      ],
      // EN: <p><b>Decode:</b> "exactly one outlier" needs both fences and a check of the nearest values; "digits in the wrong order" means 540 should be 504.<br>(a) Ordered: 496, 497, 498, 499, 500, <b>501</b>, 502, 503, 504, 505, 540. <span class="chem">Q_1 = 498</span> and <span class="chem">Q_3 = 504</span> <b>[A1 A1]</b>.<br>(b) <span class="chem">IQR = 6</span>, <span class="chem">1.5 × IQR = 9</span>, fences <span class="chem">489</span> and <span class="chem">513</span> <b>[A1]</b>. <span class="chem">540 &gt; 513</span> is an outlier <b>[R1]</b>. All other values lie in <span class="chem">[496, 505]</span>, inside the fences, so 540 is the only one <b>[R1]</b>.<br>(c) GDC: <span class="chem">x̄ = 504.091… ≈ 504.1</span> mg <b>[A1]</b>, <span class="chem">σ = 11.681… ≈ 11.7</span> mg <b>[A1]</b>.<br>(d) With 504 in place of 540: <span class="chem">x̄ = 500.818… ≈ 500.8</span> mg <b>[A1]</b>, <span class="chem">σ = 2.918… ≈ 2.92</span> mg <b>[A1]</b>.<br>(e) The mean moved by about 3 mg (under 1%), but the standard deviation fell from about 11.7 to about 2.92 mg: the standard deviation was affected much more <b>[R1]</b>.</p>
      solution: "<p><b>해석:</b> \"이상치가 정확히 하나\"를 보이려면 두 울타리와 가장 가까운 값들을 확인해야 해요. \"숫자 순서가 잘못됨\"은 540이 504여야 한다는 뜻이에요.<br>(a) 정렬: 496, 497, 498, 499, 500, <b>501</b>, 502, 503, 504, 505, 540. <span class=\"chem\">Q_1 = 498</span>, <span class=\"chem\">Q_3 = 504</span> <b>[A1 A1]</b>.<br>(b) <span class=\"chem\">IQR = 6</span>, <span class=\"chem\">1.5 × IQR = 9</span>, 울타리는 <span class=\"chem\">489</span>와 <span class=\"chem\">513</span> <b>[A1]</b>. <span class=\"chem\">540 &gt; 513</span>이므로 이상치예요 <b>[R1]</b>. 다른 모든 값은 <span class=\"chem\">[496, 505]</span> 안에 있어 울타리 안쪽이므로 이상치는 540 하나뿐이에요 <b>[R1]</b>.<br>(c) GDC: <span class=\"chem\">x̄ = 504.091… ≈ 504.1</span> mg <b>[A1]</b>, <span class=\"chem\">σ = 11.681… ≈ 11.7</span> mg <b>[A1]</b>.<br>(d) 540 대신 504를 넣으면: <span class=\"chem\">x̄ = 500.818… ≈ 500.8</span> mg <b>[A1]</b>, <span class=\"chem\">σ = 2.918… ≈ 2.92</span> mg <b>[A1]</b>.<br>(e) 평균은 약 3 mg(1% 미만) 변했지만 표준편차는 약 11.7에서 약 2.92 mg으로 떨어졌어요: 표준편차가 훨씬 더 많이 영향을 받았어요 <b>[R1]</b>.</p>",
      // EN: <p>(a) <span class="chem">Q_1 = 498</span>, <span class="chem">Q_3 = 504</span><br>(b) <span class="chem">IQR = 6</span>; fences <span class="chem">489</span> and <span class="chem">513</span>. Only <span class="chem">540 &gt; 513</span>; all other values lie between the fences.<br>(c) <span class="chem">x̄ = 504.1</span> mg, <span class="chem">σ = 11.7</span> mg<br>(d) <span class="chem">x̄ = 500.8</span> mg, <span class="chem">σ = 2.92</span> mg<br>(e) The standard deviation (it fell to about a quarter of its value; the mean changed by less than 1%).</p>
      answer: "<p>(a) <span class=\"chem\">Q_1 = 498</span>, <span class=\"chem\">Q_3 = 504</span><br>(b) <span class=\"chem\">IQR = 6</span>; 울타리는 <span class=\"chem\">489</span>와 <span class=\"chem\">513</span>. <span class=\"chem\">540 &gt; 513</span>인 값은 이것뿐이고, 다른 모든 값은 울타리 사이에 있어요.<br>(c) <span class=\"chem\">x̄ = 504.1</span> mg, <span class=\"chem\">σ = 11.7</span> mg<br>(d) <span class=\"chem\">x̄ = 500.8</span> mg, <span class=\"chem\">σ = 2.92</span> mg<br>(e) 표준편차 (원래 값의 약 사분의 일로 떨어졌고, 평균은 1% 미만으로 변했어요).</p>",
      markscheme: [
        // EN: A1: Q₁ = 498 mg.
        "A1: Q₁ = 498 mg.",
        // EN: A1: Q₃ = 504 mg.
        "A1: Q₃ = 504 mg.",
        // EN: A1: IQR = 6, so the fences are 498 − 9 = 489 and 504 + 9 = 513.
        "A1: IQR = 6, 따라서 울타리는 498 − 9 = 489와 504 + 9 = 513.",
        // EN: R1: 540 > 513, so 540 is an outlier.
        "R1: 540 > 513이므로 540은 이상치임.",
        // EN: R1: The smallest value 496 > 489 and the next largest 505 < 513, so there are no other outliers.
        "R1: 가장 작은 값 496 > 489이고 그다음으로 큰 값 505 < 513이므로 다른 이상치는 없음.",
        // EN: A1: x̄ = 504.1 mg.
        "A1: x̄ = 504.1 mg.",
        // EN: A1: σ = 11.7 mg.
        "A1: σ = 11.7 mg.",
        // EN: A1: Corrected x̄ = 500.8 mg.
        "A1: 수정한 x̄ = 500.8 mg.",
        // EN: A1: Corrected σ = 2.92 mg.
        "A1: 수정한 σ = 2.92 mg.",
        // EN: R1: The standard deviation was affected much more than the mean.
        "R1: 표준편차가 평균보다 훨씬 더 많이 영향을 받았음.",
      ],
    },

    // ── t4-1-q034 · numeric · challenge · SL · SL 4.4 · 3 marks
    "t4-1-q034": {
      // EN: <p>The owner of a beach kiosk notes the maximum temperature <span class="chem">T</span> °C and the number <span class="chem">N</span> of ice creams sold on <span class="chem">8</span> summer days.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Temperature <span class="chem">T</span> (°C)</th><td class="num">18</td><td class="num">21</td><td class="num">23</td><td class="num">25</td><td class="num">26</td><td class="num">28</td><td class="num">30</td><td class="num">32</td></tr><tr><th scope="row">Ice creams sold <span class="chem">N</span></th><td class="num">54</td><td class="num">66</td><td class="num">71</td><td class="num">80</td><td class="num">84</td><td class="num">93</td><td class="num">99</td><td class="num">110</td></tr></tbody></table></div><p>She wants to know how many extra ice creams she can expect to sell, according to a linear model fitted to these data, for each additional degree of temperature. Find this number.</p>
      stem: "<p>해변 매점의 주인이 여름날 <span class=\"chem\">8</span>일 동안의 최고 기온 <span class=\"chem\">T</span> °C와 팔린 아이스크림의 개수 <span class=\"chem\">N</span>을 기록했어요.</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">기온 <span class=\"chem\">T</span> (°C)</th><td class=\"num\">18</td><td class=\"num\">21</td><td class=\"num\">23</td><td class=\"num\">25</td><td class=\"num\">26</td><td class=\"num\">28</td><td class=\"num\">30</td><td class=\"num\">32</td></tr><tr><th scope=\"row\">팔린 아이스크림 <span class=\"chem\">N</span></th><td class=\"num\">54</td><td class=\"num\">66</td><td class=\"num\">71</td><td class=\"num\">80</td><td class=\"num\">84</td><td class=\"num\">93</td><td class=\"num\">99</td><td class=\"num\">110</td></tr></tbody></table></div><p>그녀는 이 자료에 맞춘 선형 모형에 따르면 기온이 한 도 오를 때마다 아이스크림을 몇 개 더 팔 수 있을지 알고 싶어요. 이 수를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: "how many extra for each additional degree" is the rate of change of <span class="chem">N</span> with <span class="chem">T</span>: the gradient <span class="chem">a</span> of the regression line of <span class="chem">N</span> on <span class="chem">T</span>. It is not a prediction for one particular day.
        "해석: \"한 도 오를 때마다 몇 개 더\"는 <span class=\"chem\">T</span>에 대한 <span class=\"chem\">N</span>의 변화율, 즉 <span class=\"chem\">T</span>에 대한 <span class=\"chem\">N</span>의 회귀직선의 기울기 <span class=\"chem\">a</span>예요. 특정한 하루에 대한 예측이 아니에요.",
        // EN: Run <span class="mono">LinReg(ax+b)</span> with <span class="chem">T</span> as the Xlist and <span class="chem">N</span> as the Ylist.
        "<span class=\"chem\">T</span>를 Xlist로, <span class=\"chem\">N</span>을 Ylist로 하여 <span class=\"mono\">LinReg(ax+b)</span>를 실행하세요.",
        // EN: Give the gradient <span class="chem">a</span> to 3 significant figures (it is an average rate, so it need not be a whole number).
        "기울기 <span class=\"chem\">a</span>를 유효숫자 3자리로 나타내세요 (평균 변화율이므로 정수일 필요는 없어요).",
      ],
      // EN: <p><b>Decode:</b> extra sales per extra degree = gradient of the <span class="chem">N</span>-on-<span class="chem">T</span> regression line.<br>GDC: <span class="chem">N = 3.93498T − 17.725</span>, <span class="chem">r = 0.998</span> <b>[M1 A1]</b>.<br>So she can expect about <span class="chem">a ≈ 3.93</span> extra ice creams for each additional °C <b>[A1]</b>.</p>
      solution: "<p><b>해석:</b> 한 도당 추가 판매량 = <span class=\"chem\">T</span>에 대한 <span class=\"chem\">N</span>의 회귀직선의 기울기.<br>GDC: <span class=\"chem\">N = 3.93498T − 17.725</span>, <span class=\"chem\">r = 0.998</span> <b>[M1 A1]</b>.<br>따라서 기온이 한 도 오를 때마다 아이스크림을 약 <span class=\"chem\">a ≈ 3.93</span>개 더 팔 것으로 기대할 수 있어요 <b>[A1]</b>.</p>",
      // EN: ice creams per °C
      unit: "°C당 개",
    },

    // ── t4-1-q035 · short · challenge · SL · SL 4.1, 4.4 · 8 marks
    "t4-1-q035": {
      // EN: <p>A biology class grows <span class="chem">9</span> seedlings. For each one they record the mean daily hours of light <span class="chem">x</span> and the growth <span class="chem">y</span> cm after three weeks.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Light <span class="chem">x</span> (h)</th><td class="num">3</td><td class="num">4.5</td><td class="num">5</td><td class="num">6</td><td class="num">7.5</td><td class="num">8</td><td class="num">9</td><td class="num">10</td><td class="num">7</td></tr><tr><th scope="row">Growth <span class="chem">y</span> (cm)</th><td class="num">2.1</td><td class="num">3</td><td class="num">3.4</td><td class="num">4.1</td><td class="num">5</td><td class="num">5.3</td><td class="num">6</td><td class="num">6.6</td><td class="num">1.2</td></tr></tbody></table></div><p>(a) Find the correlation coefficient <span class="chem">r</span> for all <span class="chem">9</span> seedlings. <strong>[1 mark]</strong><br>(b) One point does not fit the pattern. Identify it, and find <span class="chem">r</span> for the other <span class="chem">8</span> seedlings. <strong>[2 marks]</strong><br>(c) The teacher later finds that this seedling had a fungal disease. Find the regression line of <span class="chem">y</span> on <span class="chem">x</span> for the <span class="chem">8</span> healthy seedlings, and use it to estimate the growth of a healthy seedling given <span class="chem">6.5</span> hours of light per day. <strong>[4 marks]</strong><br>(d) Justify the decision to leave the diseased seedling out of the model. <strong>[1 mark]</strong></p>
      stem: "<p>생물 수업에서 묘목 <span class=\"chem\">9</span>그루를 키워요. 각 묘목에 대해 하루 평균 빛을 받은 시간 <span class=\"chem\">x</span>와 세 주 뒤의 성장 <span class=\"chem\">y</span> cm를 기록했어요.</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">빛 <span class=\"chem\">x</span> (h)</th><td class=\"num\">3</td><td class=\"num\">4.5</td><td class=\"num\">5</td><td class=\"num\">6</td><td class=\"num\">7.5</td><td class=\"num\">8</td><td class=\"num\">9</td><td class=\"num\">10</td><td class=\"num\">7</td></tr><tr><th scope=\"row\">성장 <span class=\"chem\">y</span> (cm)</th><td class=\"num\">2.1</td><td class=\"num\">3</td><td class=\"num\">3.4</td><td class=\"num\">4.1</td><td class=\"num\">5</td><td class=\"num\">5.3</td><td class=\"num\">6</td><td class=\"num\">6.6</td><td class=\"num\">1.2</td></tr></tbody></table></div><p>(a) <span class=\"chem\">9</span>그루 전체에 대한 상관계수 <span class=\"chem\">r</span>을 구하시오 (Find). <strong>[1 mark]</strong><br>(b) 한 점이 패턴에 맞지 않아요. 그 점을 찾고 나머지 <span class=\"chem\">8</span>그루에 대한 <span class=\"chem\">r</span>을 구하시오 (Identify, find). <strong>[2 marks]</strong><br>(c) 선생님이 나중에 이 묘목이 곰팡이 병에 걸려 있었다는 것을 알게 되었어요. 건강한 묘목 <span class=\"chem\">8</span>그루에 대해 <span class=\"chem\">x</span>에 대한 <span class=\"chem\">y</span>의 회귀직선을 구하고, 이를 이용해 하루에 <span class=\"chem\">6.5</span>시간 빛을 받은 건강한 묘목의 성장을 추정하시오 (Find, estimate). <strong>[4 marks]</strong><br>(d) 병든 묘목을 모형에서 빼기로 한 결정을 정당화하시오 (Justify). <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: this is about outliers in bivariate data (SL 4.1, 4.4). Removing a point is only justified for a reason in context, not just because it spoils <span class="chem">r</span>.
        "해석: 이것은 이변량 자료의 이상치에 관한 문제예요 (SL 4.1, 4.4). 점을 빼는 것은 맥락상의 이유가 있을 때만 정당하며, 단지 <span class=\"chem\">r</span>을 나쁘게 만든다는 이유로는 안 돼요.",
        // EN: Run <span class="mono">LinReg(ax+b)</span> on all 9 pairs, then delete the pair that sits far below the others and run it again.
        "9개의 순서쌍 모두로 <span class=\"mono\">LinReg(ax+b)</span>를 실행한 다음, 다른 점들보다 훨씬 아래에 있는 순서쌍을 지우고 다시 실행하세요.",
        // EN: In (c) the estimate at <span class="chem">x = 6.5</span> is interpolation because <span class="chem">3.0 ≤ 6.5 ≤ 10.0</span>.
        "(c)에서 <span class=\"chem\">x = 6.5</span>에서의 추정은 <span class=\"chem\">3.0 ≤ 6.5 ≤ 10.0</span>이므로 내삽이에요.",
      ],
      // EN: <p><b>Decode:</b> compare <span class="chem">r</span> with and without the odd point, then decide on context grounds whether it belongs in the model.<br>(a) All 9: <span class="chem">r = 0.7683… ≈ 0.768</span> <b>[A1]</b>.<br>(b) The point <span class="chem">(7.0, 1.2)</span> lies far below the trend <b>[A1]</b>. Without it, <span class="chem">r = 0.99969… ≈ 0.9997</span> <b>[A1]</b>, an almost perfect positive linear correlation.<br>(c) For the 8 healthy seedlings <b>[M1]</b>: <span class="chem">y = 0.64675x + 0.15279</span> ≈ <span class="chem">0.647x + 0.153</span> <b>[A1]</b>. Then <span class="chem">y(6.5) = 4.3567… ≈ 4.36</span> cm <b>[M1 A1]</b>.<br>(d) The value is genuine, but it was caused by disease rather than by the amount of light. The model is for healthy seedlings, so this point is not part of that population and should be left out <b>[R1]</b>.</p>
      solution: "<p><b>해석:</b> 벗어난 점이 있을 때와 없을 때의 <span class=\"chem\">r</span>을 비교한 다음, 그 점이 모형에 속하는지 맥락을 근거로 판단해요.<br>(a) 9그루 전체: <span class=\"chem\">r = 0.7683… ≈ 0.768</span> <b>[A1]</b>.<br>(b) 점 <span class=\"chem\">(7.0, 1.2)</span>는 추세보다 훨씬 아래에 있어요 <b>[A1]</b>. 이 점을 빼면 <span class=\"chem\">r = 0.99969… ≈ 0.9997</span> <b>[A1]</b>로, 거의 완벽한 양의 선형 상관관계예요.<br>(c) 건강한 묘목 8그루에 대해 <b>[M1]</b>: <span class=\"chem\">y = 0.64675x + 0.15279</span> ≈ <span class=\"chem\">0.647x + 0.153</span> <b>[A1]</b>. 그러면 <span class=\"chem\">y(6.5) = 4.3567… ≈ 4.36</span> cm <b>[M1 A1]</b>.<br>(d) 이 값은 실제 값이지만 빛의 양이 아니라 병 때문에 생긴 것이에요. 모형은 건강한 묘목에 대한 것이므로 이 점은 그 모집단에 속하지 않아 빼야 해요 <b>[R1]</b>.</p>",
      // EN: <p>(a) <span class="chem">r = 0.768</span><br>(b) <span class="chem">(7.0, 1.2)</span>; without it <span class="chem">r = 0.9997</span> (<span class="chem">≈ 1.00</span>)<br>(c) <span class="chem">y = 0.647x + 0.153</span>; <span class="chem">y(6.5) ≈ 4.36</span> cm<br>(d) The seedling is not from the population being modelled (healthy seedlings): its low growth was caused by disease, not by light, so it would distort the model.</p>
      answer: "<p>(a) <span class=\"chem\">r = 0.768</span><br>(b) <span class=\"chem\">(7.0, 1.2)</span>; 이 점을 빼면 <span class=\"chem\">r = 0.9997</span> (<span class=\"chem\">≈ 1.00</span>)<br>(c) <span class=\"chem\">y = 0.647x + 0.153</span>; <span class=\"chem\">y(6.5) ≈ 4.36</span> cm<br>(d) 이 묘목은 모형화하는 모집단(건강한 묘목)에 속하지 않아요: 성장이 낮았던 것은 빛이 아니라 병 때문이므로 모형을 왜곡할 거예요.</p>",
      markscheme: [
        // EN: A1: r = 0.768 (all 9 seedlings).
        "A1: r = 0.768 (9그루 전체).",
        // EN: A1: Identifies the point (7.0, 1.2).
        "A1: 점 (7.0, 1.2)를 찾음.",
        // EN: A1: r = 0.9997 for the other 8 seedlings.
        "A1: 나머지 8그루에 대해 r = 0.9997.",
        // EN: M1: Uses LinReg(ax+b) on the 8 healthy seedlings only.
        "M1: 건강한 묘목 8그루만으로 LinReg(ax+b)를 사용함.",
        // EN: A1: y = 0.647x + 0.153.
        "A1: y = 0.647x + 0.153.",
        // EN: M1: Substitutes x = 6.5.
        "M1: x = 6.5를 대입함.",
        // EN: A1: Growth ≈ 4.36 cm.
        "A1: 성장 ≈ 4.36 cm.",
        // EN: R1: The diseased seedling is a genuine but unrepresentative value caused by another factor, so it does not belong to the population (healthy seedlings) the model describes.
        "R1: 병든 묘목은 다른 요인으로 생긴, 실제이지만 대표성이 없는 값이므로 모형이 설명하는 모집단(건강한 묘목)에 속하지 않음.",
      ],
    },

    // ── t4-1-q036 · numeric · challenge · SL · SL 4.3 · 4 marks
    "t4-1-q036": {
      // EN: <p>Eight runners each recorded the distance, in km, that they ran on a Sunday. Seven of the distances are shown below; the eighth runner's record was smudged and is labelled <span class="chem">k</span>.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Distance (km)</th><td class="num">12.4</td><td class="num">15.1</td><td class="num">9.8</td><td class="num">13.6</td><td class="num">11.2</td><td class="num">14.7</td><td class="num">10.9</td><td class="num"><i>k</i></td></tr></tbody></table></div><p>The mean distance of the eight runners is <span class="chem">12.5</span> km. Find the standard deviation of the eight distances.</p>
      stem: "<p>달리기 선수 여덟 명이 어느 일요일에 각자 달린 거리(km)를 기록했어요. 그중 일곱 명의 거리가 아래에 나와 있고, 여덟 번째 선수의 기록은 번져서 <span class=\"chem\">k</span>로 나타냈어요.</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">거리 (km)</th><td class=\"num\">12.4</td><td class=\"num\">15.1</td><td class=\"num\">9.8</td><td class=\"num\">13.6</td><td class=\"num\">11.2</td><td class=\"num\">14.7</td><td class=\"num\">10.9</td><td class=\"num\"><i>k</i></td></tr></tbody></table></div><p>여덟 명이 달린 거리의 평균은 <span class=\"chem\">12.5</span> km예요. 여덟 개 거리의 표준편차를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: you cannot find <span class="chem">σ</span> until the list is complete. The mean gives you the missing value first.
        "해석: 리스트가 완성되기 전에는 <span class=\"chem\">σ</span>를 구할 수 없어요. 먼저 평균으로 빠진 값을 구하세요.",
        // EN: <span class="chem">Σ x = 8 × 12.5 = 100</span>, so <span class="chem">k = 100 -</span> (sum of the seven known distances).
        "<span class=\"chem\">Σ x = 8 × 12.5 = 100</span>이므로 <span class=\"chem\">k = 100 -</span> (알려진 일곱 개 거리의 합)이에요.",
        // EN: Put all eight values in a list and read <span class="mono">σx</span> from <span class="mono">1-Var Stats</span>.
        "여덟 개 값을 모두 리스트에 넣고 <span class=\"mono\">1-Var Stats</span>에서 <span class=\"mono\">σx</span>를 읽으세요.",
      ],
      // EN: <p><b>Decode:</b> use the mean to recover <span class="chem">k</span>, then find <span class="chem">σ</span> of all eight values.<br>Sum of the seven known values <span class="chem">= 87.7</span>, so <span class="chem">k = 100 - 87.7 = 12.3</span> km <b>[M1 A1]</b>.<br>GDC with all eight values: <span class="chem">x̄ = 12.5</span> (check) and <span class="chem">σ = 1.7464… ≈ 1.75</span> km <b>[M1 A1]</b>.</p>
      solution: "<p><b>해석:</b> 평균을 이용해 <span class=\"chem\">k</span>를 구한 다음 여덟 개 값 전체의 <span class=\"chem\">σ</span>를 구해요.<br>알려진 일곱 개 값의 합 <span class=\"chem\">= 87.7</span>이므로 <span class=\"chem\">k = 100 - 87.7 = 12.3</span> km <b>[M1 A1]</b>.<br>여덟 개 값 전체로 GDC: <span class=\"chem\">x̄ = 12.5</span> (확인), <span class=\"chem\">σ = 1.7464… ≈ 1.75</span> km <b>[M1 A1]</b>.</p>",
    },

    // ── t4-1-q037 · short · challenge · SL · SL 4.4, 4.10 · 9 marks
    "t4-1-q037": {
      // EN: <p>A coach records the 100 m sprint time <span class="chem">x</span> seconds and the long-jump distance <span class="chem">y</span> metres of <span class="chem">8</span> athletes in a squad.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">100 m time <span class="chem">x</span> (s)</th><td class="num">11.2</td><td class="num">11.6</td><td class="num">11.9</td><td class="num">12.3</td><td class="num">12.6</td><td class="num">13</td><td class="num">13.4</td><td class="num">13.9</td></tr><tr><th scope="row">Long jump <span class="chem">y</span> (m)</th><td class="num">6.85</td><td class="num">6.60</td><td class="num">6.52</td><td class="num">6.21</td><td class="num">6.05</td><td class="num">5.88</td><td class="num">5.61</td><td class="num">5.42</td></tr></tbody></table></div><p>(a) Write down the value of <span class="chem">r</span>. <strong>[1 mark]</strong><br>(b) A new athlete runs 100 m in <span class="chem">12.0</span> s. Estimate how far she can jump. <strong>[3 marks]</strong><br>(c) A second new athlete jumps <span class="chem">6.00</span> m but has not yet been timed over 100 m. Estimate his 100 m time, justifying your choice of regression line. <strong>[4 marks]</strong><br>(d) The coach wants to use the same model for a younger athlete who runs 100 m in <span class="chem">15.4</span> s. Comment on the reliability of this prediction. <strong>[1 mark]</strong></p>
      stem: "<p>한 코치가 팀 선수 <span class=\"chem\">8</span>명의 100 m 달리기 기록 <span class=\"chem\">x</span>초와 멀리뛰기 거리 <span class=\"chem\">y</span>미터를 기록했어요.</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">100 m 기록 <span class=\"chem\">x</span> (s)</th><td class=\"num\">11.2</td><td class=\"num\">11.6</td><td class=\"num\">11.9</td><td class=\"num\">12.3</td><td class=\"num\">12.6</td><td class=\"num\">13</td><td class=\"num\">13.4</td><td class=\"num\">13.9</td></tr><tr><th scope=\"row\">멀리뛰기 <span class=\"chem\">y</span> (m)</th><td class=\"num\">6.85</td><td class=\"num\">6.60</td><td class=\"num\">6.52</td><td class=\"num\">6.21</td><td class=\"num\">6.05</td><td class=\"num\">5.88</td><td class=\"num\">5.61</td><td class=\"num\">5.42</td></tr></tbody></table></div><p>(a) <span class=\"chem\">r</span>의 값을 쓰시오 (Write down). <strong>[1 mark]</strong><br>(b) 새로운 선수가 100 m를 <span class=\"chem\">12.0</span> s에 달려요. 그녀가 얼마나 멀리 뛸 수 있는지 추정하시오 (Estimate). <strong>[3 marks]</strong><br>(c) 두 번째 새로운 선수는 <span class=\"chem\">6.00</span> m를 뛰지만 100 m 기록은 아직 재지 않았어요. 회귀직선의 선택을 정당화하면서 그의 100 m 기록을 추정하시오 (Estimate). <strong>[4 marks]</strong><br>(d) 코치는 100 m를 <span class=\"chem\">15.4</span> s에 달리는 더 어린 선수에게도 같은 모형을 쓰고 싶어 해요. 이 예측의 신뢰성에 대해 논평하시오 (Comment). <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: (b) gives <span class="chem">x</span> and wants <span class="chem">y</span>; (c) gives <span class="chem">y</span> and wants <span class="chem">x</span>. They need two different regression lines.
        "해석: (b)는 <span class=\"chem\">x</span>를 주고 <span class=\"chem\">y</span>를 구하고, (c)는 <span class=\"chem\">y</span>를 주고 <span class=\"chem\">x</span>를 구해요. 서로 다른 두 회귀직선이 필요해요.",
        // EN: For (c), run <span class="mono">LinReg(ax+b)</span> with the jump distances as the Xlist and the times as the Ylist.
        "(c)에서는 멀리뛰기 거리를 Xlist로, 기록을 Ylist로 하여 <span class=\"mono\">LinReg(ax+b)</span>를 실행하세요.",
        // EN: In (d), compare 15.4 s with the fastest and slowest times in the table.
        "(d)에서는 15.4 s를 표에서 가장 빠른 기록, 가장 느린 기록과 비교하세요.",
      ],
      // EN: <p><b>Decode:</b> two directions of prediction, so two lines: <span class="chem">y</span> on <span class="chem">x</span> for (b), <span class="chem">x</span> on <span class="chem">y</span> for (c).<br>(a) GDC: <span class="chem">r = -0.99718… ≈ -0.997</span> <b>[A1]</b>.<br>(b) <span class="chem">y</span> on <span class="chem">x</span> <b>[M1]</b>: <span class="chem">y = -0.54021x + 12.8883</span> <b>[A1]</b>. <span class="chem">y(12.0) = 6.4059… ≈ 6.41</span> m <b>[A1]</b>.<br>(c) The jump is given and the time is wanted, so use <span class="chem">x</span> on <span class="chem">y</span> <b>[R1]</b>. With the jumps as Xlist <b>[M1]</b>: <span class="chem">x = -1.84071y + 23.7941</span> <b>[A1]</b>. <span class="chem">x(6.00) = 12.7498… ≈ 12.7</span> s <b>[A1]</b>.<br>(d) 15.4 s lies outside <span class="chem">11.2 ≤ x ≤ 13.9</span>, so this is extrapolation (and the younger athlete is outside the squad the data describe): the prediction is unreliable <b>[R1]</b>.</p>
      solution: "<p><b>해석:</b> 예측 방향이 두 가지이므로 직선도 두 개예요: (b)에는 <span class=\"chem\">x</span>에 대한 <span class=\"chem\">y</span>, (c)에는 <span class=\"chem\">y</span>에 대한 <span class=\"chem\">x</span>.<br>(a) GDC: <span class=\"chem\">r = -0.99718… ≈ -0.997</span> <b>[A1]</b>.<br>(b) <span class=\"chem\">x</span>에 대한 <span class=\"chem\">y</span> <b>[M1]</b>: <span class=\"chem\">y = -0.54021x + 12.8883</span> <b>[A1]</b>. <span class=\"chem\">y(12.0) = 6.4059… ≈ 6.41</span> m <b>[A1]</b>.<br>(c) 멀리뛰기 거리가 주어지고 기록을 구해야 하므로 <span class=\"chem\">y</span>에 대한 <span class=\"chem\">x</span>를 사용해요 <b>[R1]</b>. 멀리뛰기 거리를 Xlist로 하면 <b>[M1]</b>: <span class=\"chem\">x = -1.84071y + 23.7941</span> <b>[A1]</b>. <span class=\"chem\">x(6.00) = 12.7498… ≈ 12.7</span> s <b>[A1]</b>.<br>(d) 15.4 s는 <span class=\"chem\">11.2 ≤ x ≤ 13.9</span> 밖에 있으므로 외삽이에요 (게다가 더 어린 선수는 자료가 나타내는 팀 밖에 있어요): 이 예측은 신뢰할 수 없어요 <b>[R1]</b>.</p>",
      // EN: <p>(a) <span class="chem">r = -0.997</span><br>(b) <span class="chem">y = -0.540x + 12.89</span> gives <span class="chem">y ≈ 6.41</span> m.<br>(c) Use <span class="chem">x</span> on <span class="chem">y</span> (the jump <span class="chem">y</span> is given): <span class="chem">x = -1.84y + 23.79</span> gives <span class="chem">x ≈ 12.7</span> s.<br>(d) Unreliable: 15.4 s is outside the data range 11.2–13.9 s (extrapolation), and the athlete is from a different (younger) group.</p>
      answer: "<p>(a) <span class=\"chem\">r = -0.997</span><br>(b) <span class=\"chem\">y = -0.540x + 12.89</span>에서 <span class=\"chem\">y ≈ 6.41</span> m.<br>(c) <span class=\"chem\">y</span>에 대한 <span class=\"chem\">x</span>를 사용 (멀리뛰기 거리 <span class=\"chem\">y</span>가 주어짐): <span class=\"chem\">x = -1.84y + 23.79</span>에서 <span class=\"chem\">x ≈ 12.7</span> s.<br>(d) 신뢰할 수 없어요: 15.4 s는 자료 범위 11.2–13.9 s 밖에 있고 (외삽), 그 선수는 다른 (더 어린) 집단에 속해요.</p>",
      markscheme: [
        // EN: A1: r = -0.997.
        "A1: r = -0.997.",
        // EN: M1: Uses the regression line of y on x (x is given).
        "M1: x에 대한 y의 회귀직선을 사용함 (x가 주어짐).",
        // EN: A1: y = -0.540x + 12.89.
        "A1: y = -0.540x + 12.89.",
        // EN: A1: y ≈ 6.41 m.
        "A1: y ≈ 6.41 m.",
        // EN: R1: Chooses the x-on-y line because y is given and x is to be estimated.
        "R1: y가 주어지고 x를 추정해야 하므로 y에 대한 x의 회귀직선을 선택함.",
        // EN: M1: Finds the x-on-y line on the GDC (y-values as Xlist).
        "M1: GDC로 y에 대한 x의 회귀직선을 구함 (y 값을 Xlist로).",
        // EN: A1: x = -1.84y + 23.79.
        "A1: x = -1.84y + 23.79.",
        // EN: A1: x ≈ 12.7 s.
        "A1: x ≈ 12.7 s.",
        // EN: R1: 15.4 s is outside the observed times, so the prediction is an extrapolation (and a younger athlete may not follow the same pattern): unreliable.
        "R1: 15.4 s는 관측된 기록 밖이므로 예측은 외삽이고 (더 어린 선수는 같은 패턴을 따르지 않을 수 있음), 신뢰할 수 없음.",
      ],
    },

    // ── t4-1-q038 · short · exam · SL · SL 4.2, 4.3 · 7 marks
    "t4-1-q038": {
      // EN: <p>The cumulative frequency table shows the time <span class="chem">t</span> minutes that <span class="chem">80</span> students spent on homework one evening.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Time <span class="chem">t</span> (min)</th><td class="num"><i>t</i> ≤ 10</td><td class="num"><i>t</i> ≤ 20</td><td class="num"><i>t</i> ≤ 30</td><td class="num"><i>t</i> ≤ 40</td><td class="num"><i>t</i> ≤ 50</td><td class="num"><i>t</i> ≤ 60</td></tr><tr><th scope="row">Cumulative frequency</th><td class="num">6</td><td class="num">19</td><td class="num">41</td><td class="num">62</td><td class="num">74</td><td class="num">80</td></tr></tbody></table></div><p>(a) Write down the number of students who spent more than <span class="chem">40</span> minutes on homework. <strong>[1 mark]</strong><br>(b) Write down the class that contains the median. <strong>[1 mark]</strong><br>(c) Copy and complete a frequency table for the classes <span class="chem">0 &lt; t ≤ 10</span>, <span class="chem">10 &lt; t ≤ 20</span>, …, <span class="chem">50 &lt; t ≤ 60</span>. <strong>[2 marks]</strong><br>(d) Hence find an estimate of the mean and of the standard deviation of the times. <strong>[3 marks]</strong></p>
      stem: "<p>다음 누적도수표는 학생 <span class=\"chem\">80</span>명이 어느 날 저녁 숙제에 쓴 시간 <span class=\"chem\">t</span>분을 나타내요.</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">시간 <span class=\"chem\">t</span> (min)</th><td class=\"num\"><i>t</i> ≤ 10</td><td class=\"num\"><i>t</i> ≤ 20</td><td class=\"num\"><i>t</i> ≤ 30</td><td class=\"num\"><i>t</i> ≤ 40</td><td class=\"num\"><i>t</i> ≤ 50</td><td class=\"num\"><i>t</i> ≤ 60</td></tr><tr><th scope=\"row\">누적도수</th><td class=\"num\">6</td><td class=\"num\">19</td><td class=\"num\">41</td><td class=\"num\">62</td><td class=\"num\">74</td><td class=\"num\">80</td></tr></tbody></table></div><p>(a) 숙제에 <span class=\"chem\">40</span>분보다 많이 쓴 학생 수를 쓰시오 (Write down). <strong>[1 mark]</strong><br>(b) 중앙값이 들어 있는 계급을 쓰시오 (Write down). <strong>[1 mark]</strong><br>(c) 계급 <span class=\"chem\">0 &lt; t ≤ 10</span>, <span class=\"chem\">10 &lt; t ≤ 20</span>, …, <span class=\"chem\">50 &lt; t ≤ 60</span>에 대한 도수분포표를 옮겨 적고 완성하시오 (Copy and complete). <strong>[2 marks]</strong><br>(d) 이를 이용하여 (Hence) 시간의 평균과 표준편차의 추정값을 구하시오. <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: a cumulative frequency is a running total. The number in a class is the difference of consecutive running totals.
        "해석: 누적도수는 누계예요. 한 계급의 학생 수는 이웃한 두 누계의 차예요.",
        // EN: For the median, find the class in which the cumulative frequency passes <span class="chem">80/2 = 40</span>.
        "중앙값은 누적도수가 <span class=\"chem\">80/2 = 40</span>을 넘는 계급을 찾으세요.",
        // EN: Mid-interval values: <span class="chem">5, 15, 25, 35, 45, 55</span>. Use them with the frequencies in <span class="mono">1-Var Stats</span>.
        "계급값: <span class=\"chem\">5, 15, 25, 35, 45, 55</span>. 이 값들을 도수와 함께 <span class=\"mono\">1-Var Stats</span>에 사용하세요.",
      ],
      // EN: <p>(a) <span class="chem">80 - 62 = 18</span> students <b>[A1]</b>.<br>(b) The cumulative frequency passes 40 between <span class="chem">t = 20</span> (19) and <span class="chem">t = 30</span> (41), so the median is in <span class="chem">20 &lt; t ≤ 30</span> <b>[A1]</b>.<br>(c) Differences of the cumulative frequencies <b>[M1]</b>: <span class="chem">6, 13, 22, 21, 12, 6</span> <b>[A1]</b> (total 80).<br>(d) Mid-interval values <span class="chem">5, 15, 25, 35, 45, 55</span> <b>[M1]</b>. GDC: <span class="chem">x̄ ≈ 29.75</span> min <b>[A1]</b> and <span class="chem">σ ≈ 13.3206… ≈ 13.3</span> min <b>[A1]</b>.</p>
      solution: "<p>(a) <span class=\"chem\">80 - 62 = 18</span>명 <b>[A1]</b>.<br>(b) 누적도수는 <span class=\"chem\">t = 20</span> (19)과 <span class=\"chem\">t = 30</span> (41) 사이에서 40을 넘으므로 중앙값은 <span class=\"chem\">20 &lt; t ≤ 30</span>에 있어요 <b>[A1]</b>.<br>(c) 누적도수의 차 <b>[M1]</b>: <span class=\"chem\">6, 13, 22, 21, 12, 6</span> <b>[A1]</b> (합계 80).<br>(d) 계급값 <span class=\"chem\">5, 15, 25, 35, 45, 55</span> <b>[M1]</b>. GDC: <span class=\"chem\">x̄ ≈ 29.75</span>분 <b>[A1]</b>, <span class=\"chem\">σ ≈ 13.3206… ≈ 13.3</span>분 <b>[A1]</b>.</p>",
      // EN: <p>(a) <span class="chem">80 - 62 = 18</span><br>(b) <span class="chem">20 &lt; t ≤ 30</span><br>(c) Frequencies <span class="chem">6, 13, 22, 21, 12, 6</span><br>(d) <span class="chem">x̄ ≈ 29.75</span> min, <span class="chem">σ ≈ 13.3</span> min</p>
      answer: "<p>(a) <span class=\"chem\">80 - 62 = 18</span><br>(b) <span class=\"chem\">20 &lt; t ≤ 30</span><br>(c) 도수 <span class=\"chem\">6, 13, 22, 21, 12, 6</span><br>(d) <span class=\"chem\">x̄ ≈ 29.75</span>분, <span class=\"chem\">σ ≈ 13.3</span>분</p>",
      markscheme: [
        // EN: A1: 80 − 62 = 18 students.
        "A1: 80 − 62 = 18명.",
        // EN: A1: Median class 20 < t ≤ 30 (the 40th–41st students lie between cumulative frequencies 19 and 41).
        "A1: 중앙값 계급 20 < t ≤ 30 (40번째~41번째 학생은 누적도수 19와 41 사이에 있음).",
        // EN: M1: Subtracts consecutive cumulative frequencies.
        "M1: 이웃한 누적도수를 뺌.",
        // EN: A1: Frequencies 6, 13, 22, 21, 12, 6.
        "A1: 도수 6, 13, 22, 21, 12, 6.",
        // EN: M1: Uses mid-interval values 5, 15, 25, 35, 45, 55 with these frequencies.
        "M1: 계급값 5, 15, 25, 35, 45, 55를 이 도수와 함께 사용함.",
        // EN: A1: Mean ≈ 29.75 min.
        "A1: 평균 ≈ 29.75분.",
        // EN: A1: σ ≈ 13.3 min.
        "A1: σ ≈ 13.3분.",
      ],
    },

    // ── t4-1-q039 · numeric · challenge · SL · SL 4.3 · 6 marks
    "t4-1-q039": {
      // EN: <p>A teacher has the test scores of the <span class="chem">8</span> students in Group P:</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Group P score</th><td class="num">62</td><td class="num">71</td><td class="num">58</td><td class="num">80</td><td class="num">67</td><td class="num">74</td><td class="num">69</td><td class="num">75</td></tr></tbody></table></div><p>For Group Q she only has a summary: <span class="chem">12</span> students, mean score <span class="chem">70</span> and standard deviation <span class="chem">σ = 6</span>. Find the standard deviation of the scores of all <span class="chem">20</span> students together.</p>
      stem: "<p>한 선생님은 P 모둠 학생 <span class=\"chem\">8</span>명의 시험 점수를 가지고 있어요:</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">P 모둠 점수</th><td class=\"num\">62</td><td class=\"num\">71</td><td class=\"num\">58</td><td class=\"num\">80</td><td class=\"num\">67</td><td class=\"num\">74</td><td class=\"num\">69</td><td class=\"num\">75</td></tr></tbody></table></div><p>Q 모둠에 대해서는 요약만 있어요: 학생 <span class=\"chem\">12</span>명, 평균 점수 <span class=\"chem\">70</span>, 표준편차 <span class=\"chem\">σ = 6</span>. 학생 <span class=\"chem\">20</span>명 전체를 합친 점수의 표준편차를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: you cannot average two standard deviations. Rebuild the totals <span class="chem">Σ x</span> and <span class="chem">Σ x^2</span> for each group, add them, and use <span class="chem">σ^2 = (Σ x^2)/n - x̄^2</span> (in the formula booklet) for the combined group.
        "해석: 두 표준편차를 평균할 수는 없어요. 각 모둠의 합 <span class=\"chem\">Σ x</span>와 <span class=\"chem\">Σ x^2</span>을 다시 구해 더한 다음, 합친 모둠에 대해 <span class=\"chem\">σ^2 = (Σ x^2)/n - x̄^2</span> (공식집에 있음)을 사용하세요.",
        // EN: Group P from the GDC: <span class="chem">Σ x</span> and <span class="chem">Σ x^2</span> are on the <span class="mono">1-Var Stats</span> screen.
        "P 모둠은 GDC로: <span class=\"chem\">Σ x</span>와 <span class=\"chem\">Σ x^2</span>은 <span class=\"mono\">1-Var Stats</span> 화면에 나와요.",
        // EN: Group Q: <span class="chem">Σ x = 12 × 70</span> and, from <span class="chem">σ^2 = (Σ x^2)/12 - 70^2</span>, <span class="chem">Σ x^2 = 12(6^2 + 70^2)</span>.
        "Q 모둠: <span class=\"chem\">Σ x = 12 × 70</span>이고, <span class=\"chem\">σ^2 = (Σ x^2)/12 - 70^2</span>에서 <span class=\"chem\">Σ x^2 = 12(6^2 + 70^2)</span>이에요.",
      ],
      // EN: <p><b>Decode:</b> combine the raw totals, not the standard deviations.<br>Group P (GDC): <span class="chem">Σ x = 556</span>, <span class="chem">Σ x^2 = 39000</span> <b>[A1]</b>.<br>Group Q: <span class="chem">Σ x = 12 × 70 = 840</span> and <span class="chem">Σ x^2 = 12(36 + 4900) = 59 232</span> <b>[M1 A1]</b>.<br>Combined: <span class="chem">Σ x = 1396</span>, <span class="chem">Σ x^2 = 98232</span>, <span class="chem">x̄ = 1396/20 = 69.8</span> <b>[A1]</b>.<br><span class="chem">σ^2 = 98232/20 - 69.8^2 = 39.56</span> <b>[M1]</b>, so <span class="chem">σ = 6.2897… ≈ 6.29</span> <b>[A1]</b>.</p>
      solution: "<p><b>해석:</b> 표준편차가 아니라 원래의 합을 합쳐요.<br>P 모둠(GDC): <span class=\"chem\">Σ x = 556</span>, <span class=\"chem\">Σ x^2 = 39000</span> <b>[A1]</b>.<br>Q 모둠: <span class=\"chem\">Σ x = 12 × 70 = 840</span>, <span class=\"chem\">Σ x^2 = 12(36 + 4900) = 59 232</span> <b>[M1 A1]</b>.<br>합친 모둠: <span class=\"chem\">Σ x = 1396</span>, <span class=\"chem\">Σ x^2 = 98232</span>, <span class=\"chem\">x̄ = 1396/20 = 69.8</span> <b>[A1]</b>.<br><span class=\"chem\">σ^2 = 98232/20 - 69.8^2 = 39.56</span> <b>[M1]</b>이므로 <span class=\"chem\">σ = 6.2897… ≈ 6.29</span> <b>[A1]</b>.</p>",
    },

    // ── t4-1-q040 · numeric · exam · SL · SL 4.4 · 2 marks
    "t4-1-q040": {
      // EN: <p>A dealer records the age <span class="chem">x</span> years and the resale value <span class="chem">y</span> (in thousands of dollars) of <span class="chem">8</span> cars of the same model.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Age <span class="chem">x</span> (years)</th><td class="num">1</td><td class="num">2</td><td class="num">3</td><td class="num">4</td><td class="num">5</td><td class="num">6</td><td class="num">7</td><td class="num">8</td></tr><tr><th scope="row">Value <span class="chem">y</span> (thousand $)</th><td class="num">27.5</td><td class="num">24.8</td><td class="num">22.1</td><td class="num">20.6</td><td class="num">18.0</td><td class="num">16.2</td><td class="num">14.9</td><td class="num">12.8</td></tr></tbody></table></div><p>The regression line of <span class="chem">y</span> on <span class="chem">x</span> is <span class="chem">y = ax + b</span>. Write down the value of <span class="chem">b</span>.</p>
      stem: "<p>한 판매상이 같은 모델의 자동차 <span class=\"chem\">8</span>대의 사용 연수 <span class=\"chem\">x</span>년과 중고 판매 가치 <span class=\"chem\">y</span>(천 달러 단위)를 기록했어요.</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">연식 <span class=\"chem\">x</span> (년)</th><td class=\"num\">1</td><td class=\"num\">2</td><td class=\"num\">3</td><td class=\"num\">4</td><td class=\"num\">5</td><td class=\"num\">6</td><td class=\"num\">7</td><td class=\"num\">8</td></tr><tr><th scope=\"row\">가치 <span class=\"chem\">y</span> (천 $)</th><td class=\"num\">27.5</td><td class=\"num\">24.8</td><td class=\"num\">22.1</td><td class=\"num\">20.6</td><td class=\"num\">18.0</td><td class=\"num\">16.2</td><td class=\"num\">14.9</td><td class=\"num\">12.8</td></tr></tbody></table></div><p><span class=\"chem\">x</span>에 대한 <span class=\"chem\">y</span>의 회귀직선은 <span class=\"chem\">y = ax + b</span>예요. <span class=\"chem\">b</span>의 값을 쓰시오 (Write down).</p>",
      hints: [
        // EN: Run <span class="mono">LinReg(ax+b)</span> with the ages as the Xlist.
        "사용 연수를 Xlist로 하여 <span class=\"mono\">LinReg(ax+b)</span>를 실행하세요.",
        // EN: Interpretation: <span class="chem">b</span> is the model's value (in thousand $) of a car aged <span class="chem">x = 0</span>, i.e. a new car. Since 0 is just outside the ages 1–8, treat it with care.
        "해석: <span class=\"chem\">b</span>는 사용 연수 <span class=\"chem\">x = 0</span>인 차, 즉 새 차의 모형상 가치(천 $ 단위)예요. 0은 연수 1–8 바로 밖에 있으므로 주의해서 다루세요.",
      ],
      // EN: <p>GDC: <span class="chem">a = -2.05595…</span>, <span class="chem">b = 28.8643… ≈ 28.9</span> <b>[A2]</b>.<br>In context, <span class="chem">b</span> is the estimated value of a new car, about $28,900, and <span class="chem">a</span> means the value falls by about $2,060 per year. (<span class="chem">x = 0</span> lies just outside the data, so <span class="chem">b</span> is a slight extrapolation.)</p>
      solution: "<p>GDC: <span class=\"chem\">a = -2.05595…</span>, <span class=\"chem\">b = 28.8643… ≈ 28.9</span> <b>[A2]</b>.<br>맥락에서 <span class=\"chem\">b</span>는 새 차의 추정 가치로 약 $28,900이고, <span class=\"chem\">a</span>는 가치가 해마다 약 $2,060씩 떨어진다는 뜻이에요. (<span class=\"chem\">x = 0</span>은 자료 바로 밖에 있으므로 <span class=\"chem\">b</span>는 약간의 외삽이에요.)</p>",
    },

    // ── t4-1-q041 · numeric · challenge · SL · SL 4.4 · 4 marks
    "t4-1-q041": {
      // EN: <p>A museum lost its visitor records for 2020. The numbers of visitors (in thousands) for the other years are shown.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Year</th><td class="num">2016</td><td class="num">2017</td><td class="num">2018</td><td class="num">2019</td><td class="num">2021</td><td class="num">2022</td><td class="num">2023</td></tr><tr><th scope="row">Visitors (thousands)</th><td class="num">48.2</td><td class="num">51.0</td><td class="num">53.9</td><td class="num">55.8</td><td class="num">61.4</td><td class="num">63.1</td><td class="num">66.5</td></tr></tbody></table></div><p>Let <span class="chem">x</span> be the number of years after 2015 and <span class="chem">V</span> the number of visitors in thousands. Use the regression line of <span class="chem">V</span> on <span class="chem">x</span> to estimate the number of visitors, in thousands, the museum would have had in 2020 if the trend had continued.</p>
      stem: "<p>한 박물관이 2020년의 방문객 기록을 잃어버렸어요. 다른 해의 방문객 수(천 명 단위)는 다음과 같아요.</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">연도</th><td class=\"num\">2016</td><td class=\"num\">2017</td><td class=\"num\">2018</td><td class=\"num\">2019</td><td class=\"num\">2021</td><td class=\"num\">2022</td><td class=\"num\">2023</td></tr><tr><th scope=\"row\">방문객 (천 명)</th><td class=\"num\">48.2</td><td class=\"num\">51.0</td><td class=\"num\">53.9</td><td class=\"num\">55.8</td><td class=\"num\">61.4</td><td class=\"num\">63.1</td><td class=\"num\">66.5</td></tr></tbody></table></div><p><span class=\"chem\">x</span>를 2015년 이후 지난 햇수, <span class=\"chem\">V</span>를 천 명 단위의 방문객 수라고 해요. <span class=\"chem\">x</span>에 대한 <span class=\"chem\">V</span>의 회귀직선을 이용해, 추세가 계속되었다면 박물관이 2020년에 맞았을 방문객 수(천 명 단위)를 추정하시오 (estimate).</p>",
      hints: [
        // EN: Decode: first change the years into <span class="chem">x</span>-values (2016 → 1, …, 2023 → 8). The missing year 2020 is <span class="chem">x = 5</span>, which lies inside the data, so this is interpolation.
        "해석: 먼저 연도를 <span class=\"chem\">x</span> 값으로 바꾸세요 (2016 → 1, …, 2023 → 8). 빠진 2020년은 <span class=\"chem\">x = 5</span>이고 자료 범위 안에 있으므로 내삽이에요.",
        // EN: Run <span class="mono">LinReg(ax+b)</span> on the <span class="chem">x</span>-values (1, 2, 3, 4, 6, 7, 8) and the visitor numbers.
        "<span class=\"chem\">x</span> 값(1, 2, 3, 4, 6, 7, 8)과 방문객 수로 <span class=\"mono\">LinReg(ax+b)</span>를 실행하세요.",
        // EN: Substitute <span class="chem">x = 5</span> (not 2020) into the unrounded line.
        "반올림하지 않은 직선에 <span class=\"chem\">x = 5</span>(2020이 아님)를 대입하세요.",
      ],
      // EN: <p><b>Decode:</b> recode the years as <span class="chem">x = 1, 2, 3, 4, 6, 7, 8</span>; 2020 is <span class="chem">x = 5</span> <b>[M1]</b>.<br>GDC: <span class="chem">V = 2.54623x + 45.8524</span> (<span class="chem">r = 0.999</span>) <b>[A1 A1]</b>.<br><span class="chem">V(5) = 58.5836… ≈ 58.6</span> thousand visitors <b>[A1]</b>.</p>
      solution: "<p><b>해석:</b> 연도를 <span class=\"chem\">x = 1, 2, 3, 4, 6, 7, 8</span>로 바꿔요; 2020년은 <span class=\"chem\">x = 5</span> <b>[M1]</b>.<br>GDC: <span class=\"chem\">V = 2.54623x + 45.8524</span> (<span class=\"chem\">r = 0.999</span>) <b>[A1 A1]</b>.<br><span class=\"chem\">V(5) = 58.5836… ≈ 58.6</span>천 명 <b>[A1]</b>.</p>",
      // EN: thousand
      unit: "천 명",
    },

    // ── t4-1-q042 · short · challenge · SL · SL 4.2 · 9 marks
    "t4-1-q042": {
      // EN: <p>A consumer group tests <span class="chem">11</span> batteries of each of two brands and records how long each lasts, in hours.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Brand P (h)</th><td class="num">52</td><td class="num">47</td><td class="num">72</td><td class="num">50</td><td class="num">55</td><td class="num">41</td><td class="num">48</td><td class="num">57</td><td class="num">45</td><td class="num">54</td><td class="num">51</td></tr><tr><th scope="row">Brand Q (h)</th><td class="num">58</td><td class="num">61</td><td class="num">44</td><td class="num">55</td><td class="num">66</td><td class="num">52</td><td class="num">63</td><td class="num">49</td><td class="num">60</td><td class="num">64</td><td class="num">56</td></tr></tbody></table></div><p>Quartiles are found by the GDC method: the median of each half of the ordered data, leaving out the overall median when the number of values is odd.<br>(a) Find the five-number summary (minimum, <span class="chem">Q_1</span>, median, <span class="chem">Q_3</span>, maximum) for each brand. <strong>[4 marks]</strong><br>(b) Determine whether either brand has an outlier. <strong>[2 marks]</strong><br>(c) The box plots of the two brands are drawn on the same scale. Use them to compare the two brands, and state which brand you would recommend to a buyer who wants batteries that last a predictable time. <strong>[3 marks]</strong></p>
      stem: "<p>한 소비자 단체가 두 브랜드의 배터리를 각각 <span class=\"chem\">11</span>개씩 시험하고, 각 배터리가 몇 시간 가는지 기록했어요.</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">브랜드 P (h)</th><td class=\"num\">52</td><td class=\"num\">47</td><td class=\"num\">72</td><td class=\"num\">50</td><td class=\"num\">55</td><td class=\"num\">41</td><td class=\"num\">48</td><td class=\"num\">57</td><td class=\"num\">45</td><td class=\"num\">54</td><td class=\"num\">51</td></tr><tr><th scope=\"row\">브랜드 Q (h)</th><td class=\"num\">58</td><td class=\"num\">61</td><td class=\"num\">44</td><td class=\"num\">55</td><td class=\"num\">66</td><td class=\"num\">52</td><td class=\"num\">63</td><td class=\"num\">49</td><td class=\"num\">60</td><td class=\"num\">64</td><td class=\"num\">56</td></tr></tbody></table></div><p>사분위수는 GDC 방법으로 구해요: 정렬한 자료의 아래쪽 절반과 위쪽 절반 각각의 중앙값을 구하고, 값의 개수가 홀수이면 전체 중앙값은 빼요.<br>(a) 각 브랜드의 다섯 수 요약(최솟값, <span class=\"chem\">Q_1</span>, 중앙값, <span class=\"chem\">Q_3</span>, 최댓값)을 구하시오 (Find). <strong>[4 marks]</strong><br>(b) 두 브랜드 중 이상치가 있는 것이 있는지 판단하시오 (Determine). <strong>[2 marks]</strong><br>(c) 두 브랜드의 상자그림을 같은 눈금으로 그려요. 이를 이용해 두 브랜드를 비교하고, 배터리 수명을 예측하기 쉬운 것을 원하는 구매자에게 어느 브랜드를 추천할지 말하시오 (Compare, state). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: "compare" in a statistics question means compare a measure of centre (median) AND a measure of spread (IQR), each in context. "Predictable" is about spread, not about the average.
        "해석: 통계 문제에서 \"비교하시오\"는 중심의 척도(중앙값)와 퍼짐의 척도(IQR)를 모두, 각각 맥락에 맞게 비교하라는 뜻이에요. \"예측하기 쉬움\"은 평균이 아니라 퍼짐에 관한 것이에요.",
        // EN: Put each brand in its own list and run <span class="mono">1-Var Stats</span>. Then fences: <span class="chem">Q_1 - 1.5 IQR</span> and <span class="chem">Q_3 + 1.5 IQR</span>.
        "각 브랜드를 따로 리스트에 넣고 <span class=\"mono\">1-Var Stats</span>를 실행하세요. 그러면 울타리는 <span class=\"chem\">Q_1 - 1.5 IQR</span>과 <span class=\"chem\">Q_3 + 1.5 IQR</span>이에요.",
        // EN: Do not use the range to judge spread when one brand has an outlier: the IQR is not affected by it.
        "한 브랜드에 이상치가 있을 때는 퍼짐을 판단하는 데 범위를 쓰지 마세요: IQR은 이상치의 영향을 받지 않아요.",
      ],
      // EN: <p><b>Decode:</b> compare centre and spread in context; "predictable" means small spread.<br>(a) P ordered: 41, 45, 47, 48, 50, 51, 52, 54, 55, 57, 72, so <span class="chem">Q_1 = 47</span>, median <span class="chem">51</span>, <span class="chem">Q_3 = 55</span> <b>[A1]</b>, min 41, max 72 <b>[A1]</b>.<br>Q ordered: 44, 49, 52, 55, 56, 58, 60, 61, 63, 64, 66, so <span class="chem">Q_1 = 52</span>, median <span class="chem">58</span>, <span class="chem">Q_3 = 63</span> <b>[A1]</b>, min 44, max 66 <b>[A1]</b>.<br>(b) P: <span class="chem">IQR = 8</span>, fences <span class="chem">35</span> and <span class="chem">67</span>; <span class="chem">72 &gt; 67</span> is an outlier <b>[R1]</b>. Q: <span class="chem">IQR = 11</span>, fences <span class="chem">35.5</span> and <span class="chem">79.5</span>; no outliers <b>[R1]</b>.<br>(c) The median of Q (<span class="chem">58</span> h) is higher than that of P (<span class="chem">51</span> h), so Q batteries usually last longer <b>[R1]</b>. The IQR of P (<span class="chem">8</span> h) is smaller than that of Q (<span class="chem">11</span> h), so the middle half of P batteries are more consistent <b>[R1]</b>. For a predictable lifetime choose P <b>[R1]</b>.</p>
      solution: "<p><b>해석:</b> 중심과 퍼짐을 맥락에 맞게 비교해요; \"예측하기 쉬움\"은 퍼짐이 작다는 뜻이에요.<br>(a) P 정렬: 41, 45, 47, 48, 50, 51, 52, 54, 55, 57, 72이므로 <span class=\"chem\">Q_1 = 47</span>, 중앙값 <span class=\"chem\">51</span>, <span class=\"chem\">Q_3 = 55</span> <b>[A1]</b>, 최솟값 41, 최댓값 72 <b>[A1]</b>.<br>Q 정렬: 44, 49, 52, 55, 56, 58, 60, 61, 63, 64, 66이므로 <span class=\"chem\">Q_1 = 52</span>, 중앙값 <span class=\"chem\">58</span>, <span class=\"chem\">Q_3 = 63</span> <b>[A1]</b>, 최솟값 44, 최댓값 66 <b>[A1]</b>.<br>(b) P: <span class=\"chem\">IQR = 8</span>, 울타리 <span class=\"chem\">35</span>와 <span class=\"chem\">67</span>; <span class=\"chem\">72 &gt; 67</span>은 이상치예요 <b>[R1]</b>. Q: <span class=\"chem\">IQR = 11</span>, 울타리 <span class=\"chem\">35.5</span>와 <span class=\"chem\">79.5</span>; 이상치 없음 <b>[R1]</b>.<br>(c) Q의 중앙값(<span class=\"chem\">58</span> h)이 P의 중앙값(<span class=\"chem\">51</span> h)보다 높으므로 Q 배터리가 보통 더 오래가요 <b>[R1]</b>. P의 IQR(<span class=\"chem\">8</span> h)이 Q의 IQR(<span class=\"chem\">11</span> h)보다 작으므로 P 배터리의 가운데 절반이 더 고르게 분포해요 <b>[R1]</b>. 수명을 예측하기 쉬운 것을 원하면 P를 고르세요 <b>[R1]</b>.</p>",
      // EN: <p>(a) P: <span class="chem">41, 47, 51, 55, 72</span>; Q: <span class="chem">44, 52, 58, 63, 66</span>.<br>(b) P: <span class="chem">IQR = 8</span>, upper fence <span class="chem">67</span>, so <span class="chem">72</span> is an outlier. Q: fences <span class="chem">35.5</span> and <span class="chem">79.5</span>, no outliers.<br>(c) Q has the higher median (<span class="chem">58</span> h against <span class="chem">51</span> h), so Q batteries generally last longer. P has the smaller IQR (<span class="chem">8</span> against <span class="chem">11</span>), so apart from its one outlier P is more consistent. For a predictable lifetime, recommend P (smaller IQR), noting the one unusually long-lasting battery.</p>
      answer: "<p>(a) P: <span class=\"chem\">41, 47, 51, 55, 72</span>; Q: <span class=\"chem\">44, 52, 58, 63, 66</span>.<br>(b) P: <span class=\"chem\">IQR = 8</span>, 위쪽 울타리 <span class=\"chem\">67</span>이므로 <span class=\"chem\">72</span>는 이상치예요. Q: 울타리 <span class=\"chem\">35.5</span>와 <span class=\"chem\">79.5</span>, 이상치 없음.<br>(c) Q의 중앙값이 더 높으므로(<span class=\"chem\">58</span> h 대 <span class=\"chem\">51</span> h) Q 배터리가 대체로 더 오래가요. P의 IQR이 더 작으므로(<span class=\"chem\">8</span> 대 <span class=\"chem\">11</span>) 이상치 하나를 빼면 P가 더 고르게 분포해요. 수명을 예측하기 쉬운 것을 원하면 P(IQR이 더 작음)를 추천하되, 유난히 오래간 배터리가 하나 있다는 점을 언급해요.</p>",
      markscheme: [
        // EN: A1: Brand P: Q₁ = 47, median = 51, Q₃ = 55.
        "A1: 브랜드 P: Q₁ = 47, 중앙값 = 51, Q₃ = 55.",
        // EN: A1: Brand P: min 41, max 72.
        "A1: 브랜드 P: 최솟값 41, 최댓값 72.",
        // EN: A1: Brand Q: Q₁ = 52, median = 58, Q₃ = 63.
        "A1: 브랜드 Q: Q₁ = 52, 중앙값 = 58, Q₃ = 63.",
        // EN: A1: Brand Q: min 44, max 66.
        "A1: 브랜드 Q: 최솟값 44, 최댓값 66.",
        // EN: R1: P: IQR = 8, upper fence 67 < 72, so 72 is an outlier (lower fence 35 < 41).
        "R1: P: IQR = 8, 위쪽 울타리 67 < 72이므로 72는 이상치 (아래쪽 울타리 35 < 41).",
        // EN: R1: Q: IQR = 11, fences 35.5 and 79.5 contain all values, so no outliers.
        "R1: Q: IQR = 11, 울타리 35.5와 79.5 사이에 모든 값이 있으므로 이상치 없음.",
        // EN: R1: Compares medians in context: Q generally lasts longer.
        "R1: 중앙값을 맥락에 맞게 비교함: Q가 대체로 더 오래감.",
        // EN: R1: Compares IQRs in context: P is more consistent (less spread).
        "R1: IQR을 맥락에 맞게 비교함: P가 더 고르게 분포함 (퍼짐이 더 작음).",
        // EN: R1: Recommends P for predictability, with a reason based on spread (accept Q if justified by its higher median AND lack of outliers).
        "R1: 퍼짐에 근거한 이유와 함께 예측 가능성 면에서 P를 추천함 (Q의 중앙값이 더 높고 이상치가 없다는 근거를 모두 들어 정당화하면 Q도 인정).",
      ],
    },

    // ── t4-1-q043 · numeric · exam · SL · SL 4.3 · 3 marks
    "t4-1-q043": {
      // EN: <p>An ornithologist counts the number of eggs <span class="chem">x</span> in each of <span class="chem">40</span> nests.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Eggs <span class="chem">x</span></th><td class="num">2</td><td class="num">3</td><td class="num">4</td><td class="num">5</td><td class="num">6</td></tr><tr><th scope="row">Number of nests</th><td class="num">4</td><td class="num">9</td><td class="num">15</td><td class="num">8</td><td class="num">4</td></tr></tbody></table></div><p>Find the variance of the number of eggs per nest.</p>
      stem: "<p>한 조류학자가 둥지 <span class=\"chem\">40</span>개 각각에 있는 알의 수 <span class=\"chem\">x</span>를 셌어요.</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">알의 수 <span class=\"chem\">x</span></th><td class=\"num\">2</td><td class=\"num\">3</td><td class=\"num\">4</td><td class=\"num\">5</td><td class=\"num\">6</td></tr><tr><th scope=\"row\">둥지의 수</th><td class=\"num\">4</td><td class=\"num\">9</td><td class=\"num\">15</td><td class=\"num\">8</td><td class=\"num\">4</td></tr></tbody></table></div><p>둥지 하나당 알의 수의 분산을 구하시오 (Find).</p>",
      hints: [
        // EN: Run <span class="mono">1-Var Stats</span> with the numbers of nests as the frequency list.
        "둥지의 수를 도수 리스트로 하여 <span class=\"mono\">1-Var Stats</span>를 실행하세요.",
        // EN: The variance is <span class="chem">σ^2</span>: square the value of <span class="mono">σx</span> (use its full value, not a rounded one).
        "분산은 <span class=\"chem\">σ^2</span>이에요: <span class=\"mono\">σx</span>의 값을 제곱하세요 (반올림한 값이 아니라 전체 값을 사용).",
      ],
      // EN: <p>GDC with frequencies: <span class="chem">n = 40</span>, <span class="chem">x̄ = 3.975</span>, <span class="chem">σ = 1.10651…</span> <b>[M1 A1]</b>.<br>Variance <span class="chem">σ^2 = 1.22437 ≈ 1.22</span> <b>[A1]</b>.</p>
      solution: "<p>도수를 넣은 GDC: <span class=\"chem\">n = 40</span>, <span class=\"chem\">x̄ = 3.975</span>, <span class=\"chem\">σ = 1.10651…</span> <b>[M1 A1]</b>.<br>분산 <span class=\"chem\">σ^2 = 1.22437 ≈ 1.22</span> <b>[A1]</b>.</p>",
    },

    // ── t4-1-q044 · numeric · challenge · SL · SL 4.3 · 4 marks
    "t4-1-q044": {
      // EN: <p>The distances, in km, that <span class="chem">14</span> employees travel to work are:</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Distance (km)</th><td class="num">3.2</td><td class="num">5.8</td><td class="num">7.1</td><td class="num">4.4</td><td class="num">12.6</td><td class="num">6.3</td><td class="num">8.9</td><td class="num">2.7</td><td class="num">9.5</td><td class="num">5.1</td><td class="num">6.8</td><td class="num">15.2</td><td class="num">4.9</td><td class="num">7.6</td></tr></tbody></table></div><p>A manager says an employee lives "within one standard deviation of the mean" if their distance is between <span class="chem">x̄ - σ</span> and <span class="chem">x̄ + σ</span>. How many of the <span class="chem">14</span> employees live within one standard deviation of the mean?</p>
      stem: "<p>직원 <span class=\"chem\">14</span>명의 출근 거리(km)는 다음과 같아요:</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">거리 (km)</th><td class=\"num\">3.2</td><td class=\"num\">5.8</td><td class=\"num\">7.1</td><td class=\"num\">4.4</td><td class=\"num\">12.6</td><td class=\"num\">6.3</td><td class=\"num\">8.9</td><td class=\"num\">2.7</td><td class=\"num\">9.5</td><td class=\"num\">5.1</td><td class=\"num\">6.8</td><td class=\"num\">15.2</td><td class=\"num\">4.9</td><td class=\"num\">7.6</td></tr></tbody></table></div><p>한 관리자는 직원의 출근 거리가 <span class=\"chem\">x̄ - σ</span>와 <span class=\"chem\">x̄ + σ</span> 사이에 있으면 그 직원이 \"평균에서 표준편차 하나 이내\"에 산다고 말해요. 직원 <span class=\"chem\">14</span>명 중 몇 명이 평균에서 표준편차 하나 이내에 사나요?</p>",
      hints: [
        // EN: Decode: the answer is a count of employees (a whole number), not a distance. First find the interval <span class="chem">(x̄ - σ, x̄ + σ)</span>, then count the data values inside it.
        "해석: 답은 거리가 아니라 직원 수(정수)예요. 먼저 구간 <span class=\"chem\">(x̄ - σ, x̄ + σ)</span>를 구한 다음, 그 안에 있는 자료값을 세세요.",
        // EN: GDC: <span class="mono">1-Var Stats</span> gives <span class="chem">x̄</span> and <span class="chem">σ</span> (use <span class="chem">σ</span>, not <span class="chem">s</span>).
        "GDC: <span class=\"mono\">1-Var Stats</span>에서 <span class=\"chem\">x̄</span>와 <span class=\"chem\">σ</span>가 나와요 (<span class=\"chem\">s</span>가 아니라 <span class=\"chem\">σ</span>를 사용).",
        // EN: Order the data and count the values strictly between the two limits.
        "자료를 정렬하고 두 한계 사이에 (등호 없이) 있는 값을 세세요.",
      ],
      // EN: <p><b>Decode:</b> build the interval from <span class="chem">x̄</span> and <span class="chem">σ</span>, then count.<br>GDC: <span class="chem">x̄ = 7.15</span>, <span class="chem">σ = 3.3615…</span> <b>[M1 A1]</b>.<br>Interval: <span class="chem">3.79 &lt; d &lt; 10.51</span> <b>[A1]</b>.<br>Ordered: 2.7, 3.2, | 4.4, 4.9, 5.1, 5.8, 6.3, 6.8, 7.1, 7.6, 8.9, 9.5, | 12.6, 15.2. So <span class="chem">10</span> employees <b>[A1]</b>.</p>
      solution: "<p><b>해석:</b> <span class=\"chem\">x̄</span>와 <span class=\"chem\">σ</span>로 구간을 만든 다음 세요.<br>GDC: <span class=\"chem\">x̄ = 7.15</span>, <span class=\"chem\">σ = 3.3615…</span> <b>[M1 A1]</b>.<br>구간: <span class=\"chem\">3.79 &lt; d &lt; 10.51</span> <b>[A1]</b>.<br>정렬: 2.7, 3.2, | 4.4, 4.9, 5.1, 5.8, 6.3, 6.8, 7.1, 7.6, 8.9, 9.5, | 12.6, 15.2. 따라서 <span class=\"chem\">10</span>명 <b>[A1]</b>.</p>",
    },

    // ── t4-1-q045 · mcq · foundation · SL · SL 4.1 · 2 marks
    "t4-1-q045": {
      // EN: <p>A sports club collects four kinds of data about its members. Which one is <strong>continuous</strong> data?</p>
      stem: "<p>한 스포츠 클럽이 회원에 대한 네 종류의 자료를 모아요. <strong>연속</strong> 자료는 어느 것인가요?</p>",
      options: [
        // EN: The time each member takes to swim 50 m
        "각 회원이 50 m를 헤엄치는 데 걸리는 시간",
        // EN: The number of training sessions each member attended last month
        "각 회원이 지난달 참석한 훈련 횟수",
        // EN: The number of medals each member has won
        "각 회원이 딴 메달의 수",
        // EN: Each member's shirt size (S, M, L or XL)
        "각 회원의 셔츠 치수 (S, M, L 또는 XL)",
      ],
      hints: [
        // EN: Continuous data are <em>measured</em> and can take any value in an interval; discrete data are <em>counted</em> or take separate values.
        "연속 자료는 <em>측정</em>하는 것으로, 어떤 구간의 임의의 값을 가질 수 있어요. 이산 자료는 <em>세는</em> 것이거나 떨어진 값만 가져요.",
      ],
      // EN: <p>A time is measured and can take any value in an interval (for example 41.37 s), so it is continuous <b>[A2]</b>. Numbers of sessions and medals are counted (discrete), and shirt sizes are categories.</p>
      solution: "<p>시간은 측정하는 것이고 어떤 구간의 임의의 값(예: 41.37 s)을 가질 수 있으므로 연속 자료예요 <b>[A2]</b>. 훈련 횟수와 메달 수는 세는 것(이산)이고, 셔츠 치수는 범주예요.</p>",
      misconception: {
        // EN (option B): A number of sessions is counted in whole steps (0, 1, 2, …), so it is discrete.
        "1": "훈련 횟수는 정수 단위로 세므로 (0, 1, 2, …) 이산 자료예요.",
        // EN (option C): Medals are counted, so the data are discrete, even though the numbers may be large.
        "2": "메달은 세는 것이므로 수가 클 수 있더라도 이 자료는 이산 자료예요.",
        // EN (option D): Shirt sizes are categories, not measurements on a continuous scale.
        "3": "셔츠 치수는 범주이지 연속적인 척도 위의 측정값이 아니에요.",
      },
    },

    // ── t4-1-q046 · mcq · foundation · SL · SL 4.3 · 2 marks
    "t4-1-q046": {
      // EN: <p>The masses <span class="chem">m</span> kg of <span class="chem">50</span> parcels are grouped as follows.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Mass <span class="chem">m</span> (kg)</th><td class="num">0 ≤ <i>m</i> &lt; 2</td><td class="num">2 ≤ <i>m</i> &lt; 4</td><td class="num">4 ≤ <i>m</i> &lt; 6</td><td class="num">6 ≤ <i>m</i> &lt; 8</td></tr><tr><th scope="row">Frequency</th><td class="num">9</td><td class="num">17</td><td class="num">14</td><td class="num">10</td></tr></tbody></table></div><p>Which is the modal class?</p>
      stem: "<p>소포 <span class=\"chem\">50</span>개의 질량 <span class=\"chem\">m</span> kg을 다음과 같이 계급으로 나눴어요.</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">질량 <span class=\"chem\">m</span> (kg)</th><td class=\"num\">0 ≤ <i>m</i> &lt; 2</td><td class=\"num\">2 ≤ <i>m</i> &lt; 4</td><td class=\"num\">4 ≤ <i>m</i> &lt; 6</td><td class=\"num\">6 ≤ <i>m</i> &lt; 8</td></tr><tr><th scope=\"row\">도수</th><td class=\"num\">9</td><td class=\"num\">17</td><td class=\"num\">14</td><td class=\"num\">10</td></tr></tbody></table></div><p>최빈 계급은 어느 것인가요?</p>",
      options: [
        // EN: <span class="chem">2 ≤ m &lt; 4</span>
        "<span class=\"chem\">2 ≤ m &lt; 4</span>",
        // EN: <span class="chem">6 ≤ m &lt; 8</span>
        "<span class=\"chem\">6 ≤ m &lt; 8</span>",
        // EN: <span class="chem">4 ≤ m &lt; 6</span>
        "<span class=\"chem\">4 ≤ m &lt; 6</span>",
        // EN: <span class="chem">17</span>
        "<span class=\"chem\">17</span>",
      ],
      hints: [
        // EN: With equal class widths, the modal class is the class with the highest frequency.
        "계급의 폭이 같으면 최빈 계급은 도수가 가장 큰 계급이에요.",
      ],
      // EN: <p>The highest frequency is <span class="chem">17</span>, so the modal class is <span class="chem">2 ≤ m &lt; 4</span> <b>[A2]</b>.</p>
      solution: "<p>가장 큰 도수는 <span class=\"chem\">17</span>이므로 최빈 계급은 <span class=\"chem\">2 ≤ m &lt; 4</span>예요 <b>[A2]</b>.</p>",
      misconception: {
        // EN (option B): You chose the class with the largest masses. The modal class is the one with the largest frequency.
        "1": "질량이 가장 큰 계급을 골랐어요. 최빈 계급은 도수가 가장 큰 계급이에요.",
        // EN (option C): This is the middle class of the table, not the class with the largest frequency (17). The modal class depends on the frequencies, not on the position of the class.
        "2": "이것은 표의 가운데 계급이지 도수가 가장 큰(17) 계급이 아니에요. 최빈 계급은 계급의 위치가 아니라 도수로 정해져요.",
        // EN (option D): 17 is the highest frequency. The modal class is the class itself, not its frequency.
        "3": "17은 가장 큰 도수예요. 최빈 계급은 그 도수가 아니라 계급 자체예요.",
      },
    },

    // ── t4-1-q047 · numeric · foundation · SL · SL 4.2 · 3 marks
    "t4-1-q047": {
      // EN: <p>The numbers of emails received by a manager on <span class="chem">9</span> days were</p><p class="chem">12, 3, 19, 8, 14, 22, 7, 15, 11.</p><p>Find the interquartile range. (Use the median of each half, leaving out the overall median.)</p>
      stem: "<p>한 관리자가 <span class=\"chem\">9</span>일 동안 받은 이메일의 수는 다음과 같아요.</p><p class=\"chem\">12, 3, 19, 8, 14, 22, 7, 15, 11.</p><p>사분위수 범위를 구하시오 (Find). (아래쪽 절반과 위쪽 절반 각각의 중앙값을 사용하고, 전체 중앙값은 빼요.)</p>",
      hints: [
        // EN: Write the data in order first. With <span class="chem">9</span> values the median is the 5th value.
        "먼저 자료를 크기 순서로 쓰세요. 값이 <span class=\"chem\">9</span>개이면 중앙값은 5번째 값이에요.",
        // EN: The lower half is the 4 values below the median, and the upper half is the 4 values above it.
        "아래쪽 절반은 중앙값보다 작은 4개의 값이고, 위쪽 절반은 중앙값보다 큰 4개의 값이에요.",
      ],
      // EN: <p>Ordered: <span class="chem">3, 7, 8, 11, 12, 14, 15, 19, 22</span>; median <span class="chem">12</span>.<br><span class="chem">Q_1 = (7 + 8)/2 = 7.5</span> and <span class="chem">Q_3 = (15 + 19)/2 = 17</span> <b>[A1 A1]</b>.<br><span class="chem">IQR = 17 - 7.5 = 9.5</span> <b>[A1]</b>.</p>
      solution: "<p>정렬: <span class=\"chem\">3, 7, 8, 11, 12, 14, 15, 19, 22</span>; 중앙값 <span class=\"chem\">12</span>.<br><span class=\"chem\">Q_1 = (7 + 8)/2 = 7.5</span>, <span class=\"chem\">Q_3 = (15 + 19)/2 = 17</span> <b>[A1 A1]</b>.<br><span class=\"chem\">IQR = 17 - 7.5 = 9.5</span> <b>[A1]</b>.</p>",
    },

    // ── t4-1-q048 · numeric · exam · SL · SL 4.3 · 3 marks
    "t4-1-q048": {
      // EN: <p>A teacher scales the raw marks <span class="chem">x</span> of a test using <span class="chem">y = 1.2x + 10</span>. The scaled marks <span class="chem">y</span> have mean <span class="chem">70</span> and standard deviation <span class="chem">9</span>. Find the standard deviation of the raw marks.</p>
      stem: "<p>한 선생님이 시험의 원점수 <span class=\"chem\">x</span>를 <span class=\"chem\">y = 1.2x + 10</span>으로 환산해요. 환산 점수 <span class=\"chem\">y</span>의 평균은 <span class=\"chem\">70</span>, 표준편차는 <span class=\"chem\">9</span>예요. 원점수의 표준편차를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: you are given the <em>new</em> standard deviation and asked for the <em>original</em> one, so work backwards.
        "해석: <em>새</em> 표준편차가 주어지고 <em>원래</em> 표준편차를 구해야 하므로 거꾸로 풀어요.",
        // EN: Under <span class="chem">y = ax + b</span>, <span class="chem">σ_y = |a| σ_x</span>; the <span class="chem">+10</span> and the mean <span class="chem">70</span> play no part.
        "<span class=\"chem\">y = ax + b</span>에서 <span class=\"chem\">σ_y = |a| σ_x</span>예요; <span class=\"chem\">+10</span>과 평균 <span class=\"chem\">70</span>은 아무 역할도 하지 않아요.",
      ],
      // EN: <p><span class="chem">σ_y = 1.2 σ_x</span> (adding 10 does not affect spread) <b>[M1]</b>, so <span class="chem">9 = 1.2 σ_x</span> <b>[A1]</b> and <span class="chem">σ_x = 9/1.2 = 7.5</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">σ_y = 1.2 σ_x</span> (10을 더해도 퍼짐은 변하지 않음) <b>[M1]</b>이므로 <span class=\"chem\">9 = 1.2 σ_x</span> <b>[A1]</b>, <span class=\"chem\">σ_x = 9/1.2 = 7.5</span> <b>[A1]</b>.</p>",
    },

    // ── t4-1-q049 · numeric · exam · SL · SL 4.3 · 2 marks
    "t4-1-q049": {
      // EN: <p>A data set <span class="chem">x_1, x_2, …, x_n</span> has variance <span class="chem">4</span>. Each value is replaced by <span class="chem">y_i = 5 - 3x_i</span>. Find the variance of the new values.</p>
      stem: "<p>자료 <span class=\"chem\">x_1, x_2, …, x_n</span>의 분산은 <span class=\"chem\">4</span>예요. 각 값을 <span class=\"chem\">y_i = 5 - 3x_i</span>로 바꿔요. 새 값들의 분산을 구하시오 (Find).</p>",
      hints: [
        // EN: Variance scales by <span class="chem">a^2</span> under <span class="chem">y = ax + b</span>: <span class="chem">σ_y^2 = a^2 σ_x^2</span>. The constant <span class="chem">5</span> has no effect.
        "<span class=\"chem\">y = ax + b</span>에서 분산은 <span class=\"chem\">a^2</span>배가 돼요: <span class=\"chem\">σ_y^2 = a^2 σ_x^2</span>. 상수 <span class=\"chem\">5</span>는 영향이 없어요.",
      ],
      // EN: <p><span class="chem">σ_y^2 = (-3)^2 × 4</span> <b>[M1]</b> <span class="chem">= 9 × 4 = 36</span> <b>[A1]</b>. (Squaring removes the negative sign; the variance can never be negative.)</p>
      solution: "<p><span class=\"chem\">σ_y^2 = (-3)^2 × 4</span> <b>[M1]</b> <span class=\"chem\">= 9 × 4 = 36</span> <b>[A1]</b>. (제곱하면 음의 부호가 사라져요; 분산은 절대 음수가 될 수 없어요.)</p>",
    },

    // ── t4-1-q050 · short · exam · SL · SL 4.2, 4.3 · 5 marks
    "t4-1-q050": {
      // EN: <p>For a data set <span class="chem">x</span>, the lower quartile is <span class="chem">14</span>, the median is <span class="chem">20</span> and the upper quartile is <span class="chem">27</span>. Each value is transformed using <span class="chem">y = 50 - 2x</span>.<br>(a) Find the median of <span class="chem">y</span>. <strong>[1 mark]</strong><br>(b) Find the lower and upper quartiles of <span class="chem">y</span>. <strong>[3 marks]</strong><br>(c) Hence write down the interquartile range of <span class="chem">y</span>. <strong>[1 mark]</strong></p>
      stem: "<p>자료 <span class=\"chem\">x</span>의 제1사분위수는 <span class=\"chem\">14</span>, 중앙값은 <span class=\"chem\">20</span>, 제3사분위수는 <span class=\"chem\">27</span>이에요. 각 값을 <span class=\"chem\">y = 50 - 2x</span>로 변환해요.<br>(a) <span class=\"chem\">y</span>의 중앙값을 구하시오 (Find). <strong>[1 mark]</strong><br>(b) <span class=\"chem\">y</span>의 제1사분위수와 제3사분위수를 구하시오 (Find). <strong>[3 marks]</strong><br>(c) 이를 이용하여 (Hence) <span class=\"chem\">y</span>의 사분위수 범위를 쓰시오. <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: a linear change maps each ordered value to a new value, but a negative multiplier turns the order upside down. Ask: which <span class="chem">x</span>-quartile becomes the smaller <span class="chem">y</span>-value?
        "해석: 일차 변환은 정렬된 각 값을 새 값으로 옮기지만, 음수를 곱하면 순서가 뒤집혀요. <span class=\"chem\">x</span>의 어느 사분위수가 더 작은 <span class=\"chem\">y</span> 값이 되는지 생각해 보세요.",
        // EN: The median stays in the middle: just substitute <span class="chem">x = 20</span>.
        "중앙값은 가운데에 그대로 있어요: <span class=\"chem\">x = 20</span>만 대입하세요.",
        // EN: Check your IQR with <span class="chem">IQR_y = |a| × IQR_x</span>.
        "<span class=\"chem\">IQR_y = |a| × IQR_x</span>로 IQR을 확인하세요.",
      ],
      // EN: <p>(a) The middle value maps to the middle value: <span class="chem">50 - 2(20) = 10</span> <b>[A1]</b>.<br>(b) Since <span class="chem">-2 &lt; 0</span>, large <span class="chem">x</span> gives small <span class="chem">y</span>, so the quartiles swap <b>[R1]</b>: <span class="chem">Q_1(y) = 50 - 2(27) = -4</span> <b>[A1]</b> and <span class="chem">Q_3(y) = 50 - 2(14) = 22</span> <b>[A1]</b>.<br>(c) <span class="chem">IQR = 22 - (-4) = 26</span> <b>[A1]</b>, which equals <span class="chem">2 × 13</span>.</p>
      solution: "<p>(a) 가운데 값은 가운데 값으로 옮겨져요: <span class=\"chem\">50 - 2(20) = 10</span> <b>[A1]</b>.<br>(b) <span class=\"chem\">-2 &lt; 0</span>이므로 큰 <span class=\"chem\">x</span>는 작은 <span class=\"chem\">y</span>가 되어 사분위수가 서로 바뀌어요 <b>[R1]</b>: <span class=\"chem\">Q_1(y) = 50 - 2(27) = -4</span> <b>[A1]</b>, <span class=\"chem\">Q_3(y) = 50 - 2(14) = 22</span> <b>[A1]</b>.<br>(c) <span class=\"chem\">IQR = 22 - (-4) = 26</span> <b>[A1]</b>이고, 이는 <span class=\"chem\">2 × 13</span>과 같아요.</p>",
      // EN: <p>(a) <span class="chem">50 - 2(20) = 10</span><br>(b) Because the multiplier <span class="chem">-2</span> reverses the order, <span class="chem">Q_1(y) = 50 - 2(27) = -4</span> and <span class="chem">Q_3(y) = 50 - 2(14) = 22</span>.<br>(c) <span class="chem">IQR = 22 - (-4) = 26</span> (check: <span class="chem">|-2| × (27 - 14) = 26</span>).</p>
      answer: "<p>(a) <span class=\"chem\">50 - 2(20) = 10</span><br>(b) 곱하는 수 <span class=\"chem\">-2</span>가 순서를 뒤집으므로 <span class=\"chem\">Q_1(y) = 50 - 2(27) = -4</span>, <span class=\"chem\">Q_3(y) = 50 - 2(14) = 22</span>.<br>(c) <span class=\"chem\">IQR = 22 - (-4) = 26</span> (확인: <span class=\"chem\">|-2| × (27 - 14) = 26</span>).</p>",
      markscheme: [
        // EN: A1: Median of y = 50 − 2(20) = 10.
        "A1: y의 중앙값 = 50 − 2(20) = 10.",
        // EN: R1: Recognises that multiplying by −2 reverses the order, so the upper quartile of x gives the lower quartile of y.
        "R1: −2를 곱하면 순서가 뒤집히므로 x의 제3사분위수가 y의 제1사분위수가 됨을 인식함.",
        // EN: A1: Q₁(y) = 50 − 2(27) = −4.
        "A1: Q₁(y) = 50 − 2(27) = −4.",
        // EN: A1: Q₃(y) = 50 − 2(14) = 22.
        "A1: Q₃(y) = 50 − 2(14) = 22.",
        // EN: A1: IQR = 22 − (−4) = 26.
        "A1: IQR = 22 − (−4) = 26.",
      ],
    },

    // ── t4-1-q051 · numeric · exam · SL · SL 4.4 · 4 marks
    "t4-1-q051": {
      // EN: <p>For <span class="chem">12</span> pairs of data <span class="chem">(x, y)</span>, the regression line of <span class="chem">y</span> on <span class="chem">x</span> is <span class="chem">y = -1.6x + 48</span>. The sum of the <span class="chem">y</span>-values is <span class="chem">Σ y = 360</span>. Find the mean of the <span class="chem">x</span>-values.</p>
      stem: "<p>자료 <span class=\"chem\">12</span>쌍 <span class=\"chem\">(x, y)</span>에 대해 <span class=\"chem\">x</span>에 대한 <span class=\"chem\">y</span>의 회귀직선은 <span class=\"chem\">y = -1.6x + 48</span>이에요. <span class=\"chem\">y</span> 값의 합은 <span class=\"chem\">Σ y = 360</span>이에요. <span class=\"chem\">x</span> 값의 평균을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: the only link between the line and the means is that the regression line passes through the mean point <span class="chem">(x̄, ȳ)</span>.
        "해석: 직선과 평균을 잇는 유일한 연결고리는 회귀직선이 평균점 <span class=\"chem\">(x̄, ȳ)</span>를 지난다는 사실이에요.",
        // EN: First find <span class="chem">ȳ = 360/12</span>, then substitute <span class="chem">(x̄, ȳ)</span> into the line.
        "먼저 <span class=\"chem\">ȳ = 360/12</span>을 구한 다음 <span class=\"chem\">(x̄, ȳ)</span>를 직선의 식에 대입하세요.",
      ],
      // EN: <p><span class="chem">ȳ = 360/12 = 30</span> <b>[A1]</b>. The line passes through <span class="chem">(x̄, ȳ)</span> <b>[M1]</b>, so <span class="chem">30 = -1.6x̄ + 48</span> <b>[A1]</b>, giving <span class="chem">x̄ = 18/1.6 = 11.25</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">ȳ = 360/12 = 30</span> <b>[A1]</b>. 직선은 <span class=\"chem\">(x̄, ȳ)</span>를 지나므로 <b>[M1]</b> <span class=\"chem\">30 = -1.6x̄ + 48</span> <b>[A1]</b>, 따라서 <span class=\"chem\">x̄ = 18/1.6 = 11.25</span> <b>[A1]</b>.</p>",
    },

    // ── t4-1-q052 · short · exam · SL · SL 4.4 · 5 marks
    "t4-1-q052": {
      // EN: <p>For <span class="chem">20</span> car models with engine power <span class="chem">x</span> kW, where <span class="chem">50 ≤ x ≤ 150</span>, the regression line of fuel use <span class="chem">y</span> (litres per 100 km) on <span class="chem">x</span> is <span class="chem">y = 0.04x + 3.2</span>, with <span class="chem">r = 0.91</span>.<br>(a) Interpret the value <span class="chem">0.04</span> in context. <strong>[1 mark]</strong><br>(b) Explain why the value <span class="chem">3.2</span> should not be interpreted as the fuel use of a car with no engine power. <strong>[1 mark]</strong><br>(c) Estimate the fuel use of a car with engine power <span class="chem">120</span> kW. <strong>[2 marks]</strong><br>(d) A sports car has engine power <span class="chem">400</span> kW. Comment on using the line to estimate its fuel use. <strong>[1 mark]</strong></p>
      stem: "<p>엔진 출력이 <span class=\"chem\">x</span> kW (<span class=\"chem\">50 ≤ x ≤ 150</span>)인 자동차 모델 <span class=\"chem\">20</span>종에 대해, <span class=\"chem\">x</span>에 대한 연료 사용량 <span class=\"chem\">y</span>(100 km당 리터)의 회귀직선은 <span class=\"chem\">y = 0.04x + 3.2</span>이고 <span class=\"chem\">r = 0.91</span>이에요.<br>(a) 값 <span class=\"chem\">0.04</span>를 맥락에 맞게 해석하시오 (Interpret). <strong>[1 mark]</strong><br>(b) 값 <span class=\"chem\">3.2</span>를 엔진 출력이 없는 차의 연료 사용량으로 해석하면 안 되는 이유를 설명하시오 (Explain). <strong>[1 mark]</strong><br>(c) 엔진 출력이 <span class=\"chem\">120</span> kW인 차의 연료 사용량을 추정하시오 (Estimate). <strong>[2 marks]</strong><br>(d) 어떤 스포츠카의 엔진 출력은 <span class=\"chem\">400</span> kW예요. 이 직선으로 그 차의 연료 사용량을 추정하는 것에 대해 논평하시오 (Comment). <strong>[1 mark]</strong></p>",
      hints: [
        // EN: The gradient is a rate: change in <span class="chem">y</span> per one unit of <span class="chem">x</span>, with units.
        "기울기는 변화율이에요: <span class=\"chem\">x</span>가 한 단위 늘 때 <span class=\"chem\">y</span>의 변화를 단위와 함께 말하세요.",
        // EN: Before interpreting the intercept, check whether <span class="chem">x = 0</span> is inside the data range.
        "절편을 해석하기 전에 <span class=\"chem\">x = 0</span>이 자료 범위 안에 있는지 확인하세요.",
      ],
      // EN: <p>(a) For each extra kW, fuel use increases by about <span class="chem">0.04</span> L per 100 km <b>[A1]</b>.<br>(b) The intercept is the value at <span class="chem">x = 0</span>, which is far outside <span class="chem">50 ≤ x ≤ 150</span>, so it is an extrapolation with no real meaning <b>[R1]</b>.<br>(c) <span class="chem">y = 0.04(120) + 3.2</span> <b>[M1]</b> <span class="chem">= 4.8 + 3.2 = 8.0</span> L per 100 km <b>[A1]</b>.<br>(d) <span class="chem">400</span> kW is well outside the data, so the estimate is an extrapolation and unreliable; a strong <span class="chem">r</span> only describes the pattern inside the data <b>[R1]</b>.</p>
      solution: "<p>(a) 출력이 한 kW 늘 때마다 연료 사용량이 100 km당 약 <span class=\"chem\">0.04</span> L 늘어요 <b>[A1]</b>.<br>(b) 절편은 <span class=\"chem\">x = 0</span>에서의 값인데, 이는 <span class=\"chem\">50 ≤ x ≤ 150</span>에서 멀리 벗어나 있으므로 실제 의미가 없는 외삽이에요 <b>[R1]</b>.<br>(c) <span class=\"chem\">y = 0.04(120) + 3.2</span> <b>[M1]</b> <span class=\"chem\">= 4.8 + 3.2 = 8.0</span> L (100 km당) <b>[A1]</b>.<br>(d) <span class=\"chem\">400</span> kW는 자료에서 멀리 벗어나 있으므로 이 추정은 외삽이고 신뢰할 수 없어요; 강한 <span class=\"chem\">r</span>은 자료 범위 안의 패턴만 설명해요 <b>[R1]</b>.</p>",
      // EN: <p>(a) Each extra kW of engine power is associated with an increase of about <span class="chem">0.04</span> L per 100 km in fuel use.<br>(b) <span class="chem">x = 0</span> is far outside the data range <span class="chem">50 ≤ x ≤ 150</span> (and a car with no power is not meaningful), so this is extrapolation.<br>(c) <span class="chem">0.04(120) + 3.2 = 8.0</span> L per 100 km.<br>(d) Unreliable: <span class="chem">400</span> kW is outside the data range, so this is extrapolation.</p>
      answer: "<p>(a) 엔진 출력이 한 kW 늘 때마다 연료 사용량이 100 km당 약 <span class=\"chem\">0.04</span> L 늘어나는 경향이 있어요.<br>(b) <span class=\"chem\">x = 0</span>은 자료 범위 <span class=\"chem\">50 ≤ x ≤ 150</span>에서 멀리 벗어나 있으므로 (게다가 출력이 없는 차는 의미가 없어요) 외삽이에요.<br>(c) <span class=\"chem\">0.04(120) + 3.2 = 8.0</span> L (100 km당).<br>(d) 신뢰할 수 없어요: <span class=\"chem\">400</span> kW는 자료 범위 밖에 있으므로 외삽이에요.</p>",
      markscheme: [
        // EN: A1: Fuel use rises by about 0.04 L per 100 km for each additional kW, on average.
        "A1: 출력이 한 kW 늘 때마다 연료 사용량이 평균 100 km당 약 0.04 L 늘어남.",
        // EN: R1: x = 0 lies outside 50 ≤ x ≤ 150, so the intercept is an extrapolation and has no practical meaning.
        "R1: x = 0은 50 ≤ x ≤ 150 밖에 있으므로 절편은 외삽이고 실제적인 의미가 없음.",
        // EN: M1: Substitutes x = 120 into the line.
        "M1: 직선에 x = 120을 대입함.",
        // EN: A1: y = 8.0 L per 100 km.
        "A1: y = 8.0 L (100 km당).",
        // EN: R1: 400 kW is outside the range of the data (extrapolation), so the estimate is unreliable even though r is high.
        "R1: 400 kW는 자료 범위 밖(외삽)이므로 r이 높더라도 추정은 신뢰할 수 없음.",
      ],
    },

    // ── t4-1-q053 · numeric · exam · SL · SL 4.3 · 3 marks
    "t4-1-q053": {
      // EN: <p>The waiting times <span class="chem">w</span> minutes of <span class="chem">20</span> patients at a clinic are grouped below.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Waiting time <span class="chem">w</span> (min)</th><td class="num">0 ≤ <i>w</i> &lt; 10</td><td class="num">10 ≤ <i>w</i> &lt; 20</td><td class="num">20 ≤ <i>w</i> &lt; 30</td><td class="num">30 ≤ <i>w</i> &lt; 40</td></tr><tr><th scope="row">Frequency</th><td class="num">3</td><td class="num">7</td><td class="num">6</td><td class="num">4</td></tr></tbody></table></div><p>Calculate an estimate of the mean waiting time.</p>
      stem: "<p>어느 병원 환자 <span class=\"chem\">20</span>명의 대기 시간 <span class=\"chem\">w</span>분을 다음과 같이 계급으로 나눴어요.</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">대기 시간 <span class=\"chem\">w</span> (min)</th><td class=\"num\">0 ≤ <i>w</i> &lt; 10</td><td class=\"num\">10 ≤ <i>w</i> &lt; 20</td><td class=\"num\">20 ≤ <i>w</i> &lt; 30</td><td class=\"num\">30 ≤ <i>w</i> &lt; 40</td></tr><tr><th scope=\"row\">도수</th><td class=\"num\">3</td><td class=\"num\">7</td><td class=\"num\">6</td><td class=\"num\">4</td></tr></tbody></table></div><p>평균 대기 시간의 추정값을 계산하시오 (Calculate).</p>",
      hints: [
        // EN: Use the mid-interval values <span class="chem">5, 15, 25, 35</span>.
        "계급값 <span class=\"chem\">5, 15, 25, 35</span>를 사용하세요.",
        // EN: <span class="chem">x̄ ≈ (Σ f x)/(Σ f)</span> with <span class="chem">Σ f = 20</span>.
        "<span class=\"chem\">x̄ ≈ (Σ f x)/(Σ f)</span>이고, 여기서 <span class=\"chem\">Σ f = 20</span>이에요.",
      ],
      // EN: <p>Mid-interval values <span class="chem">5, 15, 25, 35</span> <b>[M1]</b>.<br><span class="chem">Σ f x = 15 + 105 + 150 + 140 = 410</span> <b>[A1]</b>, so <span class="chem">x̄ ≈ 410/20 = 20.5</span> min <b>[A1]</b>.</p>
      solution: "<p>계급값 <span class=\"chem\">5, 15, 25, 35</span> <b>[M1]</b>.<br><span class=\"chem\">Σ f x = 15 + 105 + 150 + 140 = 410</span> <b>[A1]</b>이므로 <span class=\"chem\">x̄ ≈ 410/20 = 20.5</span>분 <b>[A1]</b>.</p>",
    },

    // ── t4-1-q054 · numeric · challenge · SL · SL 4.1, 4.3 · 4 marks
    "t4-1-q054": {
      // EN: <p>The mean mass of <span class="chem">20</span> parcels was calculated as <span class="chem">35</span> kg. A clerk later finds that one parcel of mass <span class="chem">74</span> kg had been entered as <span class="chem">47</span> kg. Find the exact value of the correct mean mass.</p>
      stem: "<p>소포 <span class=\"chem\">20</span>개의 평균 질량은 <span class=\"chem\">35</span> kg으로 계산되었어요. 나중에 한 직원이 질량이 <span class=\"chem\">74</span> kg인 소포 하나가 <span class=\"chem\">47</span> kg으로 입력되었다는 것을 발견했어요. 올바른 평균 질량의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: a mean is a total divided by a count. The count (20) is unchanged; only the total was wrong, and you know by how much.
        "해석: 평균은 합을 개수로 나눈 것이에요. 개수(20)는 변하지 않고 합만 틀렸으며, 얼마나 틀렸는지 알고 있어요.",
        // EN: Wrong total <span class="chem">= 20 × 35 = 700</span>. The correct total is larger by <span class="chem">74 - 47</span>.
        "잘못된 합 <span class=\"chem\">= 20 × 35 = 700</span>. 올바른 합은 <span class=\"chem\">74 - 47</span>만큼 더 커요.",
      ],
      // EN: <p><b>Decode:</b> correct the total, keep <span class="chem">n = 20</span>.<br>Recorded total <span class="chem">= 20 × 35 = 700</span> kg <b>[M1]</b>. The error was <span class="chem">74 - 47 = 27</span> kg too little <b>[A1]</b>, so the correct total is <span class="chem">727</span> kg <b>[A1]</b> and the correct mean is <span class="chem">727/20 = 36.35</span> kg <b>[A1]</b>.</p>
      solution: "<p><b>해석:</b> 합을 고치고 <span class=\"chem\">n = 20</span>은 그대로 둬요.<br>기록된 합 <span class=\"chem\">= 20 × 35 = 700</span> kg <b>[M1]</b>. 오류로 <span class=\"chem\">74 - 47 = 27</span> kg이 적게 들어갔으므로 <b>[A1]</b> 올바른 합은 <span class=\"chem\">727</span> kg <b>[A1]</b>이고 올바른 평균은 <span class=\"chem\">727/20 = 36.35</span> kg <b>[A1]</b>.</p>",
    },

    // ── t4-1-q055 · numeric · challenge · SL · SL 4.3 · 4 marks
    "t4-1-q055": {
      // EN: <p>A set of <span class="chem">n</span> numbers has mean <span class="chem">12</span>. When the number <span class="chem">30</span> is added to the set, the mean of the enlarged set is <span class="chem">13.5</span>. Find the value of <span class="chem">n</span>.</p>
      stem: "<p><span class=\"chem\">n</span>개의 수로 이루어진 집합의 평균은 <span class=\"chem\">12</span>예요. 이 집합에 수 <span class=\"chem\">30</span>을 더하면 늘어난 집합의 평균은 <span class=\"chem\">13.5</span>가 돼요. <span class=\"chem\">n</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: <span class="chem">n</span> is the <em>number of values</em>, not one of the values. Write each mean as (total) ÷ (count).
        "해석: <span class=\"chem\">n</span>은 값 중 하나가 아니라 <em>값의 개수</em>예요. 각 평균을 (합) ÷ (개수)로 쓰세요.",
        // EN: Original total <span class="chem">= 12n</span>; new total <span class="chem">= 12n + 30</span> and new count <span class="chem">= n + 1</span>.
        "원래 합 <span class=\"chem\">= 12n</span>; 새 합 <span class=\"chem\">= 12n + 30</span>, 새 개수 <span class=\"chem\">= n + 1</span>.",
        // EN: Solve <span class="chem">(12n + 30)/(n + 1) = 13.5</span>.
        "<span class=\"chem\">(12n + 30)/(n + 1) = 13.5</span>를 푸세요.",
      ],
      // EN: <p><b>Decode:</b> <span class="chem">n</span> is the size of the original set.<br>Original total <span class="chem">12n</span> <b>[M1]</b>; <span class="chem">(12n + 30)/(n + 1) = 13.5</span> <b>[A1]</b>.<br><span class="chem">12n + 30 = 13.5n + 13.5 ⇒ 1.5n = 16.5</span> <b>[A1]</b>, so <span class="chem">n = 11</span> <b>[A1]</b>.</p>
      solution: "<p><b>해석:</b> <span class=\"chem\">n</span>은 원래 집합의 크기예요.<br>원래 합 <span class=\"chem\">12n</span> <b>[M1]</b>; <span class=\"chem\">(12n + 30)/(n + 1) = 13.5</span> <b>[A1]</b>.<br><span class=\"chem\">12n + 30 = 13.5n + 13.5 ⇒ 1.5n = 16.5</span> <b>[A1]</b>이므로 <span class=\"chem\">n = 11</span> <b>[A1]</b>.</p>",
    },

    // ── t4-1-q056 · numeric · challenge · SL · SL 4.3 · 4 marks
    "t4-1-q056": {
      // EN: <p>A sports scientist kept only running totals for the <span class="chem">10</span> jump heights <span class="chem">h</span> cm of an athlete: <span class="chem">Σ h = 60</span> and <span class="chem">Σ h^2 = 460</span>. Find the exact value of the standard deviation of the <span class="chem">10</span> heights.</p>
      stem: "<p>한 스포츠 과학자가 어느 선수의 점프 높이 <span class=\"chem\">10</span>개 <span class=\"chem\">h</span> cm에 대해 합만 기록해 두었어요: <span class=\"chem\">Σ h = 60</span>, <span class=\"chem\">Σ h^2 = 460</span>. <span class=\"chem\">10</span>개 높이의 표준편차의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: you have no raw data, only totals. The formula booklet gives <span class="chem">σ^2 = (Σ x^2)/n - x̄^2</span> (from <span class="chem">σ^2 = Σ(x - μ)^2 / n</span>).
        "해석: 원자료는 없고 합만 있어요. 공식집에는 <span class=\"chem\">σ^2 = (Σ x^2)/n - x̄^2</span> (<span class=\"chem\">σ^2 = Σ(x - μ)^2 / n</span>에서 나옴)이 있어요.",
        // EN: First <span class="chem">x̄ = 60/10 = 6</span>.
        "먼저 <span class=\"chem\">x̄ = 60/10 = 6</span>이에요.",
      ],
      // EN: <p><b>Decode:</b> use the totals form of the variance.<br><span class="chem">x̄ = 60/10 = 6</span> <b>[A1]</b>. <span class="chem">σ^2 = 460/10 - 6^2</span> <b>[M1]</b> <span class="chem">= 46 - 36 = 10</span> <b>[A1]</b>, so <span class="chem">σ = √10</span> cm <b>[A1]</b>.</p>
      solution: "<p><b>해석:</b> 합으로 나타낸 분산 공식을 사용해요.<br><span class=\"chem\">x̄ = 60/10 = 6</span> <b>[A1]</b>. <span class=\"chem\">σ^2 = 460/10 - 6^2</span> <b>[M1]</b> <span class=\"chem\">= 46 - 36 = 10</span> <b>[A1]</b>이므로 <span class=\"chem\">σ = √10</span> cm <b>[A1]</b>.</p>",
    },

    // ── t4-1-q057 · numeric · challenge · SL · SL 4.3 · 3 marks
    "t4-1-q057": {
      // EN: <p>At a company the annual salaries have mean <span class="chem">$48 000</span> and standard deviation <span class="chem">$2500</span>. Next year every employee will receive a <span class="chem">4%</span> pay rise followed by a fixed bonus of <span class="chem">$500</span>. Find the standard deviation of the new salaries, in dollars.</p>
      stem: "<p>어느 회사의 연봉은 평균이 <span class=\"chem\">$48 000</span>, 표준편차가 <span class=\"chem\">$2500</span>이에요. 내년에 모든 직원은 <span class=\"chem\">4%</span> 임금 인상을 받은 뒤 일정한 보너스 <span class=\"chem\">$500</span>을 받아요. 새 연봉의 표준편차를 달러로 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: "a 4% rise then a $500 bonus" is the linear change <span class="chem">y = 1.04x + 500</span>. Which part changes the spread?
        "해석: \"4% 인상 후 $500 보너스\"는 일차 변환 <span class=\"chem\">y = 1.04x + 500</span>이에요. 어느 부분이 퍼짐을 바꿀까요?",
        // EN: <span class="chem">σ_y = |a| σ_x</span>; adding the same amount to everyone does not change the spread.
        "<span class=\"chem\">σ_y = |a| σ_x</span>; 모든 사람에게 같은 금액을 더해도 퍼짐은 변하지 않아요.",
      ],
      // EN: <p><b>Decode:</b> new salary <span class="chem">y = 1.04x + 500</span> <b>[M1]</b>.<br><span class="chem">σ_y = 1.04 × 2500</span> <b>[A1]</b> <span class="chem">= 2600</span> dollars <b>[A1]</b>. The bonus moves every salary by the same amount, so it does not affect the spread.</p>
      solution: "<p><b>해석:</b> 새 연봉 <span class=\"chem\">y = 1.04x + 500</span> <b>[M1]</b>.<br><span class=\"chem\">σ_y = 1.04 × 2500</span> <b>[A1]</b> <span class=\"chem\">= 2600</span>달러 <b>[A1]</b>. 보너스는 모든 연봉을 같은 금액만큼 옮기므로 퍼짐에 영향을 주지 않아요.</p>",
    },

    // ── t4-1-q058 · mcq · exam · SL · SL 4.4 · 2 marks
    "t4-1-q058": {
      // EN: <p>For <span class="chem">30</span> towns, the correlation coefficient between the number of fast-food outlets <span class="chem">x</span> and the average life expectancy <span class="chem">y</span> is <span class="chem">r = -0.92</span>. Which statement is correct?</p>
      stem: "<p>도시 <span class=\"chem\">30</span>곳에 대해 패스트푸드점의 수 <span class=\"chem\">x</span>와 평균 기대 수명 <span class=\"chem\">y</span> 사이의 상관계수는 <span class=\"chem\">r = -0.92</span>예요. 옳은 설명은 어느 것인가요?</p>",
      options: [
        // EN: There is a strong negative linear correlation: towns with more fast-food outlets tend to have a lower life expectancy.
        "강한 음의 선형 상관관계가 있어요: 패스트푸드점이 많은 도시일수록 기대 수명이 낮은 경향이 있어요.",
        // EN: Opening more fast-food outlets in a town will cause its life expectancy to fall.
        "도시에 패스트푸드점을 더 열면 그 도시의 기대 수명이 떨어질 거예요.",
        // EN: Life expectancy falls by <span class="chem">0.92</span> years for each extra fast-food outlet.
        "패스트푸드점이 하나 늘 때마다 기대 수명이 <span class=\"chem\">0.92</span>년 떨어져요.",
        // EN: <span class="chem">92%</span> of the towns lie exactly on the regression line.
        "도시의 <span class=\"chem\">92%</span>가 회귀직선 위에 정확히 놓여 있어요.",
      ],
      hints: [
        // EN: The sign of <span class="chem">r</span> gives the direction, and <span class="chem">|r|</span> close to 1 means the points are close to a straight line. What does <span class="chem">r</span> <em>not</em> tell you?
        "<span class=\"chem\">r</span>의 부호는 방향을 알려 주고, <span class=\"chem\">|r|</span>이 1에 가까우면 점들이 직선에 가깝다는 뜻이에요. <span class=\"chem\">r</span>이 알려 주지 <em>않는</em> 것은 무엇일까요?",
      ],
      // EN: <p><span class="chem">r = -0.92</span> shows a strong negative linear correlation <b>[A1]</b>. It says nothing about cause and effect, and it is not the gradient <b>[R1]</b>.</p>
      solution: "<p><span class=\"chem\">r = -0.92</span>는 강한 음의 선형 상관관계를 보여 줘요 <b>[A1]</b>. 이것은 원인과 결과에 대해서는 아무것도 말하지 않으며, 기울기도 아니에요 <b>[R1]</b>.</p>",
      misconception: {
        // EN (option B): Correlation does not show causation. Both variables may depend on something else, such as income or town size.
        "1": "상관관계는 인과관계를 보여 주지 않아요. 두 변수 모두 소득이나 도시 규모 같은 다른 것에 따라 달라질 수 있어요.",
        // EN (option C): r is not the gradient of the regression line. The gradient depends on the units of x and y; r has no units.
        "2": "r은 회귀직선의 기울기가 아니에요. 기울기는 x와 y의 단위에 따라 달라지지만 r에는 단위가 없어요.",
        // EN (option D): r measures how closely the points cluster around a line; it is not a percentage of points on the line.
        "3": "r은 점들이 직선 주위에 얼마나 가깝게 모여 있는지를 재는 것이지, 직선 위에 있는 점의 백분율이 아니에요.",
      },
    },

    // ── t4-1-q059 · short · challenge · SL · SL 4.1, 4.2, 4.3 · 7 marks
    "t4-1-q059": {
      // EN: <p>A swimming coach records the 100 m freestyle times, in seconds, of the <span class="chem">9</span> swimmers in a squad:</p><p class="chem">61, 58, 95, 64, 66, 63, 70, 65, 68.</p><p>Quartiles are found by taking the median of each half, leaving out the overall median.<br>(a) Find the median and the quartiles <span class="chem">Q_1</span> and <span class="chem">Q_3</span>. <strong>[3 marks]</strong><br>(b) Show that <span class="chem">95</span> s is an outlier. <strong>[2 marks]</strong><br>(c) The swimmer who recorded <span class="chem">95</span> s had cramp during the race. State, with a reason, whether the coach should include this time when choosing a typical squad time. <strong>[1 mark]</strong><br>(d) State whether the mean or the median is the better measure of a typical time for these <span class="chem">9</span> swimmers, and why. <strong>[1 mark]</strong></p>
      stem: "<p>한 수영 코치가 팀 선수 <span class=\"chem\">9</span>명의 100 m 자유형 기록(초)을 기록했어요:</p><p class=\"chem\">61, 58, 95, 64, 66, 63, 70, 65, 68.</p><p>사분위수는 아래쪽 절반과 위쪽 절반 각각의 중앙값을 구하고, 전체 중앙값은 빼서 구해요.<br>(a) 중앙값과 사분위수 <span class=\"chem\">Q_1</span>, <span class=\"chem\">Q_3</span>을 구하시오 (Find). <strong>[3 marks]</strong><br>(b) <span class=\"chem\">95</span> s가 이상치임을 보이시오 (Show that). <strong>[2 marks]</strong><br>(c) <span class=\"chem\">95</span> s를 기록한 선수는 경기 중에 쥐가 났어요. 팀의 대표적인 기록을 고를 때 코치가 이 기록을 포함해야 하는지 이유와 함께 말하시오 (State). <strong>[1 mark]</strong><br>(d) 이 <span class=\"chem\">9</span>명의 선수에게 평균과 중앙값 중 어느 것이 대표적인 기록의 더 좋은 척도인지와 그 이유를 말하시오 (State). <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: an outlier is not automatically an error. Part (c) asks you to decide, in context, whether the value represents what the coach wants to measure.
        "해석: 이상치가 자동으로 오류인 것은 아니에요. (c)는 그 값이 코치가 재고 싶은 것을 나타내는지 맥락에 맞게 판단하라는 문제예요.",
        // EN: Ordered data: <span class="chem">58, 61, 63, 64, 65, 66, 68, 70, 95</span>. The median is the 5th value.
        "정렬한 자료: <span class=\"chem\">58, 61, 63, 64, 65, 66, 68, 70, 95</span>. 중앙값은 5번째 값이에요.",
        // EN: Lower half: the 4 values below the median; upper half: the 4 values above it.
        "아래쪽 절반: 중앙값보다 작은 4개의 값; 위쪽 절반: 중앙값보다 큰 4개의 값.",
      ],
      // EN: <p><b>Decode:</b> test 95 with the fence rule, then judge it in context (genuine but unrepresentative).<br>(a) Ordered: <span class="chem">58, 61, 63, 64, 65, 66, 68, 70, 95</span>. Median <span class="chem">65</span> <b>[A1]</b>, <span class="chem">Q_1 = (61 + 63)/2 = 62</span> <b>[A1]</b>, <span class="chem">Q_3 = (68 + 70)/2 = 69</span> <b>[A1]</b>.<br>(b) <span class="chem">IQR = 69 - 62 = 7</span>, upper fence <span class="chem">= 69 + 1.5(7) = 79.5</span> <b>[M1]</b>. <span class="chem">95 &gt; 79.5</span>, so 95 is an outlier <b>[R1]</b>.<br>(c) The time was really swum, but cramp made it unrepresentative of the swimmer's ability, so it should be excluded when describing a typical squad time <b>[R1]</b>.<br>(d) The median: one extreme value pulls the mean upwards but hardly moves the median <b>[R1]</b>.</p>
      solution: "<p><b>해석:</b> 울타리 규칙으로 95를 검사한 다음 맥락에 맞게 판단해요 (실제 값이지만 대표성이 없음).<br>(a) 정렬: <span class=\"chem\">58, 61, 63, 64, 65, 66, 68, 70, 95</span>. 중앙값 <span class=\"chem\">65</span> <b>[A1]</b>, <span class=\"chem\">Q_1 = (61 + 63)/2 = 62</span> <b>[A1]</b>, <span class=\"chem\">Q_3 = (68 + 70)/2 = 69</span> <b>[A1]</b>.<br>(b) <span class=\"chem\">IQR = 69 - 62 = 7</span>, 위쪽 울타리 <span class=\"chem\">= 69 + 1.5(7) = 79.5</span> <b>[M1]</b>. <span class=\"chem\">95 &gt; 79.5</span>이므로 95는 이상치예요 <b>[R1]</b>.<br>(c) 이 기록은 실제로 헤엄친 것이지만 쥐가 나서 그 선수의 실력을 대표하지 못하므로, 팀의 대표적인 기록을 설명할 때는 빼야 해요 <b>[R1]</b>.<br>(d) 중앙값: 극단적인 값 하나는 평균을 위로 끌어올리지만 중앙값은 거의 움직이지 않아요 <b>[R1]</b>.</p>",
      // EN: <p>(a) Median <span class="chem">65</span>, <span class="chem">Q_1 = 62</span>, <span class="chem">Q_3 = 69</span>.<br>(b) <span class="chem">IQR = 7</span>; upper fence <span class="chem">69 + 1.5(7) = 79.5</span> and <span class="chem">95 &gt; 79.5</span>.<br>(c) Leave it out: it is a genuine time, but it was caused by cramp, so it does not represent the swimmer's normal performance.<br>(d) The median, because it is not affected by the outlier (the mean is pulled upwards by 95).</p>
      answer: "<p>(a) 중앙값 <span class=\"chem\">65</span>, <span class=\"chem\">Q_1 = 62</span>, <span class=\"chem\">Q_3 = 69</span>.<br>(b) <span class=\"chem\">IQR = 7</span>; 위쪽 울타리 <span class=\"chem\">69 + 1.5(7) = 79.5</span>이고 <span class=\"chem\">95 &gt; 79.5</span>.<br>(c) 빼요: 실제 기록이지만 쥐가 나서 생긴 것이므로 그 선수의 평소 기량을 나타내지 않아요.<br>(d) 중앙값, 이상치의 영향을 받지 않기 때문이에요 (평균은 95 때문에 위로 끌려 올라가요).</p>",
      markscheme: [
        // EN: A1: Median = 65 s.
        "A1: 중앙값 = 65 s.",
        // EN: A1: Q₁ = (61 + 63)/2 = 62 s.
        "A1: Q₁ = (61 + 63)/2 = 62 s.",
        // EN: A1: Q₃ = (68 + 70)/2 = 69 s.
        "A1: Q₃ = (68 + 70)/2 = 69 s.",
        // EN: M1: IQR = 7 and upper fence = 69 + 1.5(7) = 79.5.
        "M1: IQR = 7이고 위쪽 울타리 = 69 + 1.5(7) = 79.5.",
        // EN: R1: 95 > 79.5, so 95 is an outlier.
        "R1: 95 > 79.5이므로 95는 이상치임.",
        // EN: R1: Exclude it (with a reason): the value is genuine but unrepresentative, because it was caused by cramp.
        "R1: (이유와 함께) 뺌: 이 값은 실제 값이지만 쥐가 나서 생긴 것이므로 대표성이 없음.",
        // EN: R1: Median, because it is resistant to the outlier.
        "R1: 중앙값, 이상치에 영향을 덜 받기 때문.",
      ],
    },

  }
});
