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
        "먼저 사분위범위 <span class=\"chem\">IQR = Q_3 - Q_1</span>을 계산하세요.",
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
      solution: "<p><span class=\"chem\">IQR = 20</span>이에요. 아래쪽 울타리 <span class=\"chem\">= Q_1 - 1.5 × IQR = 28 - 30 = -2</span> <b>[M1 A1]</b>.</p>",
    },

    // ── t4-1-q005 · mcq · foundation · SL · SL 4.3 · 3 marks
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
      // EN: <p><span class=\"chem\">ȳ = 50 - 4(12) = 50 - 48 = 2</span> <b>[A1]</b>.<br><span class=\"chem\">σ_Y = |-4| × 2.5 = 4 × 2.5 = 10</span> <b>[M1 A1]</b>.</p>
      solution: "<p><span class=\"chem\">ȳ = 50 - 4(12) = 50 - 48 = 2</span> <b>[A1]</b>.<br><span class=\"chem\">σ_Y = |-4| × 2.5 = 4 × 2.5 = 10</span> <b>[M1 A1]</b>.</p>",
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
      stem: "<p>조약돌 <span class=\"chem\">20</span>개의 질량(g)이 도수분포표로 요약되어 있어요: <span class=\"chem\">10 ≤ m &lt; 20</span>에 <span class=\"chem\">4</span>개, <span class=\"chem\">20 ≤ m &lt; 30</span>에 <span class=\"chem\">10</span>개, <span class=\"chem\">30 ≤ m &lt; 40</span>에 <span class=\"chem\">6</span>개예요. 계급값을 이용해 모표준편차 <span class=\"chem\">σ</span>의 추정값을 계산하시오 (Calculate).</p>",
      hints: [
        // EN: The mid-interval values are <span class=\"chem\">15, 25, 35</span> with frequencies <span class=\"chem\">4, 10, 6</span>.
        "계급값은 <span class=\"chem\">15, 25, 35</span>이고 도수는 <span class=\"chem\">4, 10, 6</span>이에요.",
        // EN: First find <span class=\"chem\">m̄ = (4×15 + 10×25 + 6×35)/20 = 26</span>, then compute <span class=\"chem\">σ = sqrt((4(15-26)^2 + 10(25-26)^2 + 6(35-26)^2)/20)</span> (or read <span class=\"mono\">σx</span> from GDC).
        "먼저 <span class=\"chem\">m̄ = (4×15 + 10×25 + 6×35)/20 = 26</span>을 구한 뒤 <span class=\"chem\">σ = sqrt((4(15-26)^2 + 10(25-26)^2 + 6(35-26)^2)/20)</span>을 계산하세요 (또는 GDC에서 <span class=\"mono\">σx</span>를 읽으세요).",
      ],
      // EN: <p>Midpoints are <span class=\"chem\">15, 25, 35</span> <b>[M1]</b>.<br>Mean <span class=\"chem\">m̄ = (60 + 250 + 210) / 20 = 520 / 20 = 26</span> g <b>[A1]</b>.<br>Variance <span class=\"chem\">σ^2 = (4(-11)^2 + 10(-1)^2 + 6(9)^2) / 20 = (484 + 10 + 486) / 20 = 980 / 20 = 49</span>, so <span class=\"chem\">σ = √49 = 7</span> g <b>[M1 A1]</b>.</p>
      solution: "<p>계급값은 <span class=\"chem\">15, 25, 35</span>예요 <b>[M1]</b>.<br>평균 <span class=\"chem\">m̄ = (60 + 250 + 210) / 20 = 520 / 20 = 26</span> g <b>[A1]</b>.<br>분산 <span class=\"chem\">σ^2 = (4(-11)^2 + 10(-1)^2 + 6(9)^2) / 20 = (484 + 10 + 486) / 20 = 980 / 20 = 49</span>이므로 <span class=\"chem\">σ = √49 = 7</span> g이에요 <b>[M1 A1]</b>.</p>",
    },

    // ── t4-1-q008 · mcq · exam · SL · SL 4.4, 4.10 · 3 marks
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

    // ── t4-1-q010 · numeric · exam · SL · SL 4.4, 4.10 · 4 marks
    "t4-1-q010": {
      // EN: <p>For a bivariate dataset, the regression line of <span class=\"chem\">y</span> on <span class=\"chem\">x</span> is <span class=\"chem\">y = -0.8x + 25</span> and the regression line of <span class=\"chem\">x</span> on <span class=\"chem\">y</span> is <span class=\"chem\">x = -0.8y + 20</span>. Find the exact value of Pearson's correlation coefficient <span class=\"chem\">r</span>.</p>
      stem: "<p>이변량 자료에서 <span class=\"chem\">y</span> on <span class=\"chem\">x</span> 회귀직선은 <span class=\"chem\">y = -0.8x + 25</span>이고 <span class=\"chem\">x</span> on <span class=\"chem\">y</span> 회귀직선은 <span class=\"chem\">x = -0.8y + 20</span>이에요. 피어슨 상관계수 <span class=\"chem\">r</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Recall that <span class=\"chem\">r^2 = a · c</span>, where <span class=\"chem\">a = -0.8</span> is the gradient of <span class=\"chem\">y</span> on <span class=\"chem\">x</span> and <span class=\"chem\">c = -0.8</span> is the coefficient of <span class=\"chem\">y</span> in <span class=\"chem\">x</span> on <span class=\"chem\">y</span>.
        "<span class=\"chem\">r^2 = a · c</span>임을 기억하세요. 여기서 <span class=\"chem\">a = -0.8</span>은 <span class=\"chem\">y</span> on <span class=\"chem\">x</span>의 기울기이고 <span class=\"chem\">c = -0.8</span>은 <span class=\"chem\">x</span> on <span class=\"chem\">y</span>에서 <span class=\"chem\">y</span>의 계수예요.",
        // EN: Since the slopes are negative, <span class=\"chem\">r</span> must also be negative.
        "기울기가 음수이므로 <span class=\"chem\">r</span>도 반드시 음수여야 해요.",
      ],
      // EN: <p>Using <span class=\"chem\">r^2 = a · c = (-0.8)(-0.8) = 0.64</span> <b>[M1 A1]</b>.<br>Because the correlation is negative (<span class=\"chem\">a &lt; 0, c &lt; 0</span>), <span class=\"chem\">r = -√0.64 = -0.8</span> <b>[R1 A1]</b>.</p>
      solution: "<p><span class=\"chem\">r^2 = a · c = (-0.8)(-0.8) = 0.64</span>를 써요 <b>[M1 A1]</b>.<br>음의 상관관계(<span class=\"chem\">a &lt; 0, c &lt; 0</span>)이므로 <span class=\"chem\">r = -√0.64 = -0.8</span>이에요 <b>[R1 A1]</b>.</p>",
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
      // EN: <p>Order the following four steps to correctly evaluate whether a linear regression estimate of <span class=\"chem\">y</span> at <span class=\"chem\">x = x_0</span> is valid and reliable.</p>
      stem: "<p><span class=\"chem\">x = x_0</span>에서 <span class=\"chem\">y</span>의 선형 회귀 추정값이 타당하고 신뢰할 수 있는지 평가하는 다음 4단계를 올바른 순서로 배열하시오.</p>",
      options: [
        // EN: Plot the scatter diagram and calculate Pearson's correlation coefficient <span class=\"chem\">r</span> to verify a strong linear trend (<span class=\"chem\">|r|</span> close to <span class=\"chem\">1</span>).
        "산점도를 그리고 피어슨 상관계수 <span class=\"chem\">r</span>을 계산해 강한 선형 추세(<span class=\"chem\">|r|</span>이 <span class=\"chem\">1</span>에 가까움)를 확인한다.",
        // EN: Check that <span class=\"chem\">x_0</span> lies within the observed domain <span class=\"chem\">[x_{min}, x_{max}]</span> so that the prediction is interpolation rather than extrapolation.
        "<span class=\"chem\">x_0</span>이 관측된 범위 <span class=\"chem\">[x_{min}, x_{max}]</span> 안에 있어 외삽이 아니라 내삽인지 확인한다.",
        // EN: Find the least-squares regression line of <span class=\"chem\">y</span> on <span class=\"chem\">x</span> (<span class=\"chem\">y = ax + b</span>) using the GDC.
        "GDC를 이용해 <span class=\"chem\">y</span> on <span class=\"chem\">x</span> 최소제곱 회귀직선 (<span class=\"chem\">y = ax + b</span>)을 구한다.",
        // EN: Substitute <span class=\"chem\">x = x_0</span> into <span class=\"chem\">y = ax + b</span> and report the estimated value <span class=\"chem\">ŷ</span> to 3 significant figures.
        "<span class=\"chem\">y = ax + b</span>에 <span class=\"chem\">x = x_0</span>을 대입해 추정값 <span class=\"chem\">ŷ</span>을 유효숫자 3자리로 구한다.",
      ],
      hints: [
        // EN: First verify linearity (<span class=\"chem\">r</span>), then check interpolation (<span class=\"chem\">x_0 ∈ [x_{min}, x_{max}]</span>), then compute the regression equation and substitute <span class=\"chem\">x_0</span>.
        "먼저 선형성(<span class=\"chem\">r</span>)을 확인하고, 내삽(<span class=\"chem\">x_0 ∈ [x_{min}, x_{max}]</span>)을 확인한 뒤 회귀방정식을 구해 <span class=\"chem\">x_0</span>을 대입하세요.",
      ],
      // EN: <p>A reliable linear regression prediction requires (1) confirming strong linear correlation via scatter plot and <span class=\"chem\">r</span>, (2) checking that <span class=\"chem\">x_0</span> is within the data range (interpolation), (3) finding the <span class=\"chem\">y</span>-on-<span class=\"chem\">x</span> regression equation, and (4) substituting <span class=\"chem\">x_0</span>.</p>
      solution: "<p>신뢰할 수 있는 선형 회귀 예측을 하려면 (1) 산점도와 <span class=\"chem\">r</span>로 강한 선형 상관관계를 확인하고, (2) <span class=\"chem\">x_0</span>이 자료 범위 안에 있는지(내삽) 확인한 뒤, (3) <span class=\"chem\">y</span>-on-<span class=\"chem\">x</span> 회귀방정식을 구해 (4) <span class=\"chem\">x_0</span>을 대입해야 해요.</p>",
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
      // EN: <p>A cumulative frequency study of the daily commuting times <span class=\"chem\">t</span> (in minutes) of <span class=\"chem\">120</span> office workers gives minimum <span class=\"chem\">8</span>, lower quartile <span class=\"chem\">Q_1 = 22</span>, median <span class=\"chem\">M = 31</span>, upper quartile <span class=\"chem\">Q_3 = 42</span>, and maximum <span class=\"chem\">78</span>.<br>(a) Find the interquartile range (<span class=\"chem\">IQR</span>) and determine how many workers have a commuting time greater than <span class=\"chem\">42</span> minutes. <strong>[2 marks]</strong><br>(b) Show mathematically that the maximum value <span class=\"chem\">78</span> minutes is an outlier, and state the smallest commuting time that would be classified as an upper outlier. <strong>[4 marks]</strong></p>
      stem: "<p>사무직 근로자 <span class=\"chem\">120</span>명의 일일 통근 시간 <span class=\"chem\">t</span>(분)에 대한 누적도수 조사에서 최솟값 <span class=\"chem\">8</span>, 제1사분위수 <span class=\"chem\">Q_1 = 22</span>, 중앙값 <span class=\"chem\">M = 31</span>, 제3사분위수 <span class=\"chem\">Q_3 = 42</span>, 최댓값 <span class=\"chem\">78</span>이 나왔다.<br>(a) 사분위범위(<span class=\"chem\">IQR</span>)를 구하고 (Find), 통근 시간이 <span class=\"chem\">42</span>분보다 긴 근로자가 몇 명인지 구하시오 (determine). <strong>[2 marks]</strong><br>(b) 최댓값 <span class=\"chem\">78</span>분이 이상치임을 수학적으로 보이고, 위쪽 이상치로 분류되는 가장 작은 통근 시간을 답하시오 (state). <strong>[4 marks]</strong></p>",
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
        // EN: A1: States that any value strictly above 72 minutes (or 73 minutes if rounded to nearest integer minute) is an upper outlier.
        "A1: 72분보다 엄격히 큰 값 (또는 정수 분으로 반올림 시 73분)이 위쪽 이상치임을 답함.",
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
      // EN: <p>For two variables <span class=\"chem\">x</span> and <span class=\"chem\">y</span>, the standard deviation of <span class=\"chem\">y</span> is three times the standard deviation of <span class=\"chem\">x</span> (<span class=\"chem\">σ_y = 3σ_x</span>). Given that the gradient of the regression line of <span class=\"chem\">y</span> on <span class=\"chem\">x</span> is <span class=\"chem\">a = 2.4</span>, find the coefficient <span class=\"chem\">c</span> in the regression line of <span class=\"chem\">x</span> on <span class=\"chem\">y</span> (<span class=\"chem\">x = cy + d</span>).</p>
      stem: "<p>두 변수 <span class=\"chem\">x</span>와 <span class=\"chem\">y</span>에 대해 <span class=\"chem\">y</span>의 표준편차는 <span class=\"chem\">x</span>의 표준편차의 3배예요 (<span class=\"chem\">σ_y = 3σ_x</span>). <span class=\"chem\">y</span> on <span class=\"chem\">x</span> 회귀직선의 기울기가 <span class=\"chem\">a = 2.4</span>일 때, <span class=\"chem\">x</span> on <span class=\"chem\">y</span> 회귀직선(<span class=\"chem\">x = cy + d</span>)의 계수 <span class=\"chem\">c</span>를 구하시오 (Find).</p>",
      hints: [
        // EN: Use <span class=\"chem\">a = r(σ_y / σ_x) = 3r</span> to find Pearson's correlation coefficient <span class=\"chem\">r</span>.
        "<span class=\"chem\">a = r(σ_y / σ_x) = 3r</span>을 이용해 피어슨 상관계수 <span class=\"chem\">r</span>을 구하세요.",
        // EN: Then substitute <span class=\"chem\">r</span> into <span class=\"chem\">c = r(σ_x / σ_y) = r / 3</span> (or use <span class=\"chem\">a · c = r^2</span>).
        "그런 다음 <span class=\"chem\">r</span>을 <span class=\"chem\">c = r(σ_x / σ_y) = r / 3</span>에 대입하세요 (또는 <span class=\"chem\">a · c = r^2</span>을 쓰세요).",
      ],
      // EN: <p>Since <span class=\"chem\">a = r(σ_y / σ_x) = 3r = 2.4</span>, we get <span class=\"chem\">r = 2.4 / 3 = 0.8</span> <b>[M1 A1]</b>.<br>Then <span class=\"chem\">c = r(σ_x / σ_y) = 0.8 / 3 = 4 / 15 ≈ 0.267</span> <b>[M1 A2]</b>. (Students may type <span class=\"mono\">4/15</span> or <span class=\"mono\">0.267</span>.)</p>
      solution: "<p><span class=\"chem\">a = r(σ_y / σ_x) = 3r = 2.4</span>이므로 <span class=\"chem\">r = 2.4 / 3 = 0.8</span>이에요 <b>[M1 A1]</b>.<br>그러면 <span class=\"chem\">c = r(σ_x / σ_y) = 0.8 / 3 = 4 / 15 ≈ 0.267</span>이에요 <b>[M1 A2]</b>. (<span class=\"mono\">4/15</span> 또는 <span class=\"mono\">0.267</span>을 입력할 수 있어요.)</p>",
    },

    // ── t4-1-q018 · short · challenge · SL · SL 4.2, 4.3 · 6 marks
    "t4-1-q018": {
      // EN: <p>Six positive integers are arranged in ascending order: <span class=\"chem\">a, b, 10, 12, c, d</span>.<br>The unique mode is <span class=\"chem\">15</span>, the range is <span class=\"chem\">12</span>, and the mean of all six integers is <span class=\"chem\">x̄ = 10.5</span>.<br>(a) State the values of <span class=\"chem\">c</span> and <span class=\"chem\">d</span>, and hence find <span class=\"chem\">a</span>. <strong>[3 marks]</strong><br>(b) Find the value of <span class=\"chem\">b</span> and the interquartile range (<span class=\"chem\">IQR = Q_3 - Q_1</span>) of the six integers. <strong>[3 marks]</strong></p>
      stem: "<p>여섯 개의 양의 정수가 오름차순으로 나열되어 있다: <span class=\"chem\">a, b, 10, 12, c, d</span>.<br>유일한 최빈값은 <span class=\"chem\">15</span>이고, 범위는 <span class=\"chem\">12</span>이며, 여섯 정수의 평균은 <span class=\"chem\">x̄ = 10.5</span>이다.<br>(a) <span class=\"chem\">c</span>와 <span class=\"chem\">d</span>의 값을 답하고 (State), 이를 이용하여 (hence) <span class=\"chem\">a</span>를 구하시오. <strong>[3 marks]</strong><br>(b) <span class=\"chem\">b</span>의 값과 여섯 정수의 사분위범위(<span class=\"chem\">IQR = Q_3 - Q_1</span>)를 구하시오 (Find). <strong>[3 marks]</strong></p>",
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

  }
});
