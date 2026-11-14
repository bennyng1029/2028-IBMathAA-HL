/* t4-1.q — ja question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't4-1.q', {
  questions: {

    // ── t4-1-q001 · mcq · foundation · SL · SL 4.1 · 2 marks
    "t4-1-q001": {
      // EN: <p>A school has <span class="chem">800</span> students divided into four year groups: <span class="chem">240</span> in Year 9, <span class="chem">200</span> in Year 10, <span class="chem">180</span> in Year 11, and <span class="chem">180</span> in Year 12. A student council takes a <strong>stratified random sample</strong> of <span class="chem">60</span> students altogether. How many Year 9 students should be selected?</p>
      stem: "<p>全校生徒 <span class=\"chem\">800</span> 人の学校が 4 つの学年に分かれている：Year 9 が <span class=\"chem\">240</span> 人、Year 10 が <span class=\"chem\">200</span> 人、Year 11 が <span class=\"chem\">180</span> 人、Year 12 が <span class=\"chem\">180</span> 人である。生徒会が合計 <span class=\"chem\">60</span> 人の<strong>層化無作為抽出</strong>を行うとき、Year 9 から何人選ぶべきですか？</p>",
      options: [
        // EN: <span class="chem">18</span>
        "<span class=\"chem\">18</span>",
        // EN: <span class="chem">15</span>
        "<span class=\"chem\">15</span>",
        // EN: <span class="chem">20</span>
        "<span class=\"chem\">20</span>",
        // EN: <span class="chem">24</span>
        "<span class=\"chem\">24</span>",
      ],
      hints: [
        // EN: In stratified sampling, each stratum is sampled in proportion to its share of the total population: <span class="chem">(N_i / N) × n</span>.
        "層化抽出では、各層を全母集団に対する割合に比例して抽出します：<span class=\"chem\">(N_i / N) × n</span>。",
        // EN: Compute <span class="chem">(240 / 800) × 60</span>.
        "<span class=\"chem\">(240 / 800) × 60</span> を計算します。",
      ],
      // EN: <p>The proportion of Year 9 students in the population is <span class="chem">240 / 800 = 0.30</span>. Multiplying by the sample size <span class="chem">n = 60</span> gives <span class="chem">0.30 × 60 = 18</span> students.</p>
      solution: "<p>母集団における Year 9 の生徒の割合は <span class=\"chem\">240 / 800 = 0.30</span> です。標本の大きさ <span class=\"chem\">n = 60</span> を掛けると <span class=\"chem\">0.30 × 60 = 18</span> 人になります。</p>",
      misconception: {
        // EN (option B): You divided 60 equally across the 4 year groups (60 / 4 = 15), which ignores the different year-group sizes.
        "1": "60 人を 4 学年で均等に割って（60 / 4 = 15）しまい、各学年の人数の違いを無視しています。",
        // EN (option C): You took 1/3 of 60 instead of using the exact fraction 240 / 800 = 0.30.
        "2": "正確な割合 240 / 800 = 0.30 ではなく 60 の 1/3 をとってしまいました。",
        // EN (option D): You took 10% of 240 instead of scaling by the sampling fraction 60 / 800.
        "3": "抽出率 60 / 800 を掛けるのではなく 240 の 10% をとってしまいました。",
      },
    },

    // ── t4-1-q002 · mcq · foundation · SL · SL 4.1 · 2 marks
    "t4-1-q002": {
      // EN: <p>An airport researcher stands at the exit gate and interviews the first <span class="chem">25</span> passengers from Economy Class and the first <span class="chem">10</span> passengers from Business Class who walk past, until both target numbers are reached. What sampling technique is being used?</p>
      stem: "<p>空港の調査員が出口ゲートに立ち、通りかかったエコノミークラスの乗客の最初の <span class=\"chem\">25</span> 人とビジネスクラスの乗客の最初の <span class=\"chem\">10</span> 人に、それぞれの目標人数に達するまでインタビューを行った。使われている抽出法はどれですか？</p>",
      options: [
        // EN: Quota sampling
        "割当抽出 (Quota sampling)",
        // EN: Stratified random sampling
        "層化無作為抽出 (Stratified random sampling)",
        // EN: Systematic sampling
        "系統抽出 (Systematic sampling)",
        // EN: Simple random sampling
        "単純無作為抽出 (Simple random sampling)",
      ],
      hints: [
        // EN: Notice two features: the population is split into subgroups with fixed target counts, AND individuals are chosen non-randomly by convenience.
        "2 つの特徴に注目しましょう：母集団が目標人数の決まった小集団に分かれており、かつ対象者が無作為ではなく便宜的に選ばれています。",
      ],
      // EN: <p>When a population is divided into subgroups with fixed target sizes (quotas) but subjects are selected non-randomly as they arrive, the method is <strong>quota sampling</strong>.</p>
      solution: "<p>母集団を目標人数（割当）が決まった小集団に分けたうえで、到着順に無作為でなく対象者を選ぶ方法は<strong>割当抽出</strong>です。</p>",
      misconception: {
        // EN (option B): Stratified sampling requires selecting individuals at random from a full list within each subgroup; here passengers were chosen by convenience as they walked past.
        "1": "層化抽出では各小集団の完全な名簿から無作為に選ぶ必要がありますが、ここでは通りかかった人を便宜的に選んでいます。",
        // EN (option C): Systematic sampling selects every k-th passenger from an ordered list, not the first people to walk past.
        "2": "系統抽出は並んだ名簿から k 番目ごとに選ぶ方法であり、最初に通りかかった人たちを選ぶのではありません。",
        // EN (option D): Simple random sampling gives every passenger on the flight an equal chance of selection via a random draw.
        "3": "単純無作為抽出は、無作為抽選によって全乗客に等しい確率を与える方法です。",
      },
    },

    // ── t4-1-q003 · numeric · foundation · SL · SL 4.2 · 3 marks
    "t4-1-q003": {
      // EN: <p>A box-and-whisker plot summarizes a dataset with lower quartile <span class="chem">Q_1 = 28</span>, median <span class="chem">M = 36</span>, and upper quartile <span class="chem">Q_3 = 48</span>. Using the <span class="chem">1.5 × IQR</span> criterion, find the <strong>upper outlier boundary</strong> (fence).</p>
      stem: "<p>箱ひげ図にまとめられたデータセットの第 1 四分位数が <span class=\"chem\">Q_1 = 28</span>、中央値が <span class=\"chem\">M = 36</span>、第 3 四分位数が <span class=\"chem\">Q_3 = 48</span> である。<span class=\"chem\">1.5 × IQR</span> の基準を用いて、<strong>上側の外れ値境界</strong>を求めなさい (Find)。</p>",
      hints: [
        // EN: First compute the interquartile range <span class="chem">IQR = Q_3 - Q_1</span>.
        "まず四分位範囲 <span class=\"chem\">IQR = Q_3 - Q_1</span> を計算します。",
        // EN: Then evaluate <span class="chem">Q_3 + 1.5 × IQR</span>.
        "次に <span class=\"chem\">Q_3 + 1.5 × IQR</span> を計算します。",
      ],
      // EN: <p><span class="chem">IQR = 48 - 28 = 20</span> <b>[A1]</b>.<br>Upper fence <span class="chem">= Q_3 + 1.5 × IQR = 48 + 1.5(20) = 48 + 30 = 78</span> <b>[M1 A1]</b>.</p>
      solution: "<p><span class=\"chem\">IQR = 48 - 28 = 20</span> <b>[A1]</b>。<br>上側境界 <span class=\"chem\">= Q_3 + 1.5 × IQR = 48 + 1.5(20) = 48 + 30 = 78</span> <b>[M1 A1]</b>。</p>",
    },

    // ── t4-1-q004 · numeric · foundation · SL · SL 4.2 · 3 marks
    "t4-1-q004": {
      // EN: <p>For the same dataset with <span class="chem">Q_1 = 28</span> and <span class="chem">Q_3 = 48</span>, find the <strong>lower outlier boundary</strong> (<span class="chem">Q_1 - 1.5 × IQR</span>).</p>
      stem: "<p>同じ <span class=\"chem\">Q_1 = 28</span>、<span class=\"chem\">Q_3 = 48</span> のデータセットについて、<strong>下側の外れ値境界</strong>（<span class=\"chem\">Q_1 - 1.5 × IQR</span>）を求めなさい (Find)。</p>",
      hints: [
        // EN: Use <span class="chem">IQR = 48 - 28 = 20</span>.
        "<span class=\"chem\">IQR = 48 - 28 = 20</span> を使います。",
        // EN: Compute <span class="chem">28 - 1.5 × 20</span>.
        "<span class=\"chem\">28 - 1.5 × 20</span> を計算します。",
      ],
      // EN: <p><span class="chem">IQR = 20</span>. Lower fence <span class="chem">= Q_1 - 1.5 × IQR = 28 - 30 = -2</span> <b>[M1 A1]</b>.</p>
      solution: "<p><span class=\"chem\">IQR = 20</span>。下側境界 <span class=\"chem\">= Q_1 - 1.5 × IQR = 28 - 30 = -2</span> <b>[M1 A1]</b>。</p>",
    },

    // ── t4-1-q005 · mcq · foundation · SL · SL 4.3 · 3 marks
    "t4-1-q005": {
      // EN: <p>A dataset <span class="chem">X</span> has mean <span class="chem">x̄ = 12</span> and standard deviation <span class="chem">σ_X = 2.5</span>. Each value is transformed using the linear coding <span class="chem">Y = 50 - 4X</span>. What are the mean <span class="chem">ȳ</span> and standard deviation <span class="chem">σ_Y</span> of <span class="chem">Y</span>?</p>
      stem: "<p>データセット <span class=\"chem\">X</span> の平均値が <span class=\"chem\">x̄ = 12</span>、標準偏差が <span class=\"chem\">σ_X = 2.5</span> である。各値を 1 次変換 <span class=\"chem\">Y = 50 - 4X</span> で変換したとき、<span class=\"chem\">Y</span> の平均値 <span class=\"chem\">ȳ</span> と標準偏差 <span class=\"chem\">σ_Y</span> はどれですか？</p>",
      options: [
        // EN: <span class="chem">ȳ = 2</span> and <span class="chem">σ_Y = 10</span>
        "<span class=\"chem\">ȳ = 2</span> かつ <span class=\"chem\">σ_Y = 10</span>",
        // EN: <span class="chem">ȳ = 2</span> and <span class="chem">σ_Y = -10</span>
        "<span class=\"chem\">ȳ = 2</span> かつ <span class=\"chem\">σ_Y = -10</span>",
        // EN: <span class="chem">ȳ = 2</span> and <span class="chem">σ_Y = 60</span>
        "<span class=\"chem\">ȳ = 2</span> かつ <span class=\"chem\">σ_Y = 60</span>",
        // EN: <span class="chem">ȳ = -48</span> and <span class=\"chem\">σ_Y = 10</span>
        "<span class=\"chem\">ȳ = -48</span> かつ <span class=\"chem\">σ_Y = 10</span>",
      ],
      hints: [
        // EN: Under <span class="chem">Y = aX + b</span>, the new mean is <span class="chem">ȳ = a x̄ + b</span> and the new standard deviation is <span class="chem">σ_Y = |a|σ_X</span>.
        "<span class=\"chem\">Y = aX + b</span> のもとで、新しい平均値は <span class=\"chem\">ȳ = a x̄ + b</span>、新しい標準偏差は <span class=\"chem\">σ_Y = |a|σ_X</span> です。",
      ],
      // EN: <p><span class="chem">ȳ = 50 - 4(12) = 50 - 48 = 2</span> <b>[A1]</b>.<br><span class="chem">σ_Y = |-4| × 2.5 = 4 × 2.5 = 10</span> <b>[M1 A1]</b>.</p>
      solution: "<p><span class=\"chem\">ȳ = 50 - 4(12) = 50 - 48 = 2</span> <b>[A1]</b>。<br><span class=\"chem\">σ_Y = |-4| × 2.5 = 4 × 2.5 = 10</span> <b>[M1 A1]</b>。</p>",
      misconception: {
        // EN (option B): Standard deviation is a measure of spread and can never be negative! Always multiply by |a| = |−4| = 4.
        "1": "標準偏差は散らばりの尺度なので、決して負にはなりません！必ず |a| = |−4| = 4 を掛けます。",
        // EN (option C): Adding 50 shifts the mean but has zero effect on the standard deviation; do not add 50 to 4 × 2.5.
        "2": "50 を足すと平均値はずれますが、標準偏差にはまったく影響しません；4 × 2.5 に 50 を足してはいけません。",
        // EN (option D): You forgot to add the constant shift +50 when computing the new mean ȳ = 50 − 4(12).
        "3": "新しい平均値 ȳ = 50 − 4(12) を計算するときに定数 +50 を足し忘れています。",
      },
    },

    // ── t4-1-q006 · numeric · exam · SL · SL 4.3 · 4 marks
    "t4-1-q006": {
      // EN: <p>The discrete values <span class="chem">2, 4, 6, 8</span> occur with frequencies <span class="chem">3, k, 5, 2</span> respectively. Given that the mean of the dataset is <span class="chem">x̄ = 5.0</span>, find the value of <span class="chem">k</span>.</p>
      stem: "<p>離散値 <span class=\"chem\">2, 4, 6, 8</span> がそれぞれ度数 <span class=\"chem\">3, k, 5, 2</span> で現れる。このデータセットの平均値が <span class=\"chem\">x̄ = 5.0</span> のとき、<span class=\"chem\">k</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Set up <span class="chem">x̄ = (Σ f_i x_i) / (Σ f_i) = 5</span>.
        "<span class=\"chem\">x̄ = (Σ f_i x_i) / (Σ f_i) = 5</span> を立てます。",
        // EN: Here <span class="chem">Σ f_i = 3 + k + 5 + 2 = 10 + k</span> and <span class="chem">Σ f_i x_i = 3(2) + k(4) + 5(6) + 2(8) = 52 + 4k</span>.
        "ここで <span class=\"chem\">Σ f_i = 3 + k + 5 + 2 = 10 + k</span>、かつ <span class=\"chem\">Σ f_i x_i = 3(2) + k(4) + 5(6) + 2(8) = 52 + 4k</span> です。",
      ],
      // EN: <p>Using the mean formula:<br><span class="chem">(6 + 4k + 30 + 16) / (3 + k + 5 + 2) = 5</span> <b>[M1 A1]</b><br><span class="chem">52 + 4k = 5(10 + k) = 50 + 5k</span> <b>[M1]</b><br><span class="chem">k = 2</span> <b>[A1]</b>.</p>
      solution: "<p>平均値の公式より：<br><span class=\"chem\">(6 + 4k + 30 + 16) / (3 + k + 5 + 2) = 5</span> <b>[M1 A1]</b><br><span class=\"chem\">52 + 4k = 5(10 + k) = 50 + 5k</span> <b>[M1]</b><br><span class=\"chem\">k = 2</span> <b>[A1]</b>。</p>",
    },

    // ── t4-1-q007 · numeric · exam · SL · SL 4.3 · 4 marks
    "t4-1-q007": {
      // EN: <p>The masses (in grams) of <span class="chem">20</span> pebbles are summarized in a grouped frequency table: <span class="chem">4</span> pebbles in <span class="chem">10 ≤ m &lt; 20</span>, <span class="chem">10</span> pebbles in <span class="chem">20 ≤ m &lt; 30</span>, and <span class="chem">6</span> pebbles in <span class="chem">30 ≤ m &lt; 40</span>. Using mid-interval values, calculate the estimate of the population standard deviation <span class="chem">σ</span>.</p>
      stem: "<p><span class=\"chem\">20</span> 個の小石の質量（グラム）が度数分布表にまとめられている：<span class=\"chem\">10 ≤ m &lt; 20</span> に <span class=\"chem\">4</span> 個、<span class=\"chem\">20 ≤ m &lt; 30</span> に <span class=\"chem\">10</span> 個、<span class=\"chem\">30 ≤ m &lt; 40</span> に <span class=\"chem\">6</span> 個。階級値を用いて、母標準偏差 <span class=\"chem\">σ</span> の推定値を計算しなさい (Calculate)。</p>",
      hints: [
        // EN: The mid-interval values are <span class="chem">15, 25, 35</span> with frequencies <span class="chem">4, 10, 6</span>.
        "階級値は <span class=\"chem\">15, 25, 35</span> で、度数は <span class=\"chem\">4, 10, 6</span> です。",
        // EN: First find <span class="chem">m̄ = (4×15 + 10×25 + 6×35)/20 = 26</span>, then compute <span class="chem">σ = sqrt((4(15-26)^2 + 10(25-26)^2 + 6(35-26)^2)/20)</span> (or read <span class="mono">σx</span> from GDC).
        "まず <span class=\"chem\">m̄ = (4×15 + 10×25 + 6×35)/20 = 26</span> を求め、次に <span class=\"chem\">σ = sqrt((4(15-26)^2 + 10(25-26)^2 + 6(35-26)^2)/20)</span> を計算します（または GDC で <span class=\"mono\">σx</span> を読み取ります）。",
      ],
      // EN: <p>Midpoints are <span class="chem">15, 25, 35</span> <b>[M1]</b>.<br>Mean <span class="chem">m̄ = (60 + 250 + 210) / 20 = 520 / 20 = 26</span> g <b>[A1]</b>.<br>Variance <span class="chem">σ^2 = (4(-11)^2 + 10(-1)^2 + 6(9)^2) / 20 = (484 + 10 + 486) / 20 = 980 / 20 = 49</span>, so <span class="chem">σ = √49 = 7</span> g <b>[M1 A1]</b>.</p>
      solution: "<p>階級値は <span class=\"chem\">15, 25, 35</span> <b>[M1]</b>。<br>平均値 <span class=\"chem\">m̄ = (60 + 250 + 210) / 20 = 520 / 20 = 26</span> g <b>[A1]</b>。<br>分散 <span class=\"chem\">σ^2 = (4(-11)^2 + 10(-1)^2 + 6(9)^2) / 20 = (484 + 10 + 486) / 20 = 980 / 20 = 49</span> なので、<span class=\"chem\">σ = √49 = 7</span> g <b>[M1 A1]</b>。</p>",
    },

    // ── t4-1-q008 · mcq · exam · SL · SL 4.4, 4.10 · 3 marks
    "t4-1-q008": {
      // EN: <p>In a study of two uncontrolled variables <span class="chem">x</span> (hours of sleep) and <span class="chem">y</span> (memory score), both the regression line of <span class="chem">y</span> on <span class="chem">x</span> (<span class="chem">L_1: y = ax + b</span>) and the regression line of <span class="chem">x</span> on <span class="chem">y</span> (<span class="chem">L_2: x = cy + d</span>) are calculated. Which line should be used to estimate the hours of sleep <span class="chem">x</span> for a student whose memory score is <span class="chem">y = 75</span>?</p>
      stem: "<p>制御されていない 2 つの変数 <span class=\"chem\">x</span>（睡眠時間）と <span class=\"chem\">y</span>（記憶テストの得点）の研究において、<span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線（<span class=\"chem\">L_1: y = ax + b</span>）と <span class=\"chem\">x</span> の <span class=\"chem\">y</span> への回帰直線（<span class=\"chem\">L_2: x = cy + d</span>）の両方が計算された。記憶テストの得点が <span class=\"chem\">y = 75</span> である生徒の睡眠時間 <span class=\"chem\">x</span> を推定するには、どちらの直線を使うべきですか？</p>",
      options: [
        // EN: Line <span class="chem">L_2</span> (<span class="chem">x</span> on <span class="chem">y</span>), by substituting <span class="chem">y = 75</span> into <span class="chem">x = cy + d</span>
        "直線 <span class=\"chem\">L_2</span>（<span class=\"chem\">x</span> の <span class=\"chem\">y</span> への回帰直線）を使い、<span class=\"chem\">x = cy + d</span> に <span class=\"chem\">y = 75</span> を代入する",
        // EN: Line <span class="chem">L_1</span> (<span class="chem">y</span> on <span class="chem">x</span>), by setting <span class="chem">75 = ax + b</span> and solving for <span class="chem">x</span>
        "直線 <span class=\"chem\">L_1</span>（<span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線）を使い、<span class=\"chem\">75 = ax + b</span> として <span class=\"chem\">x</span> について解く",
        // EN: Either <span class="chem">L_1</span> or <span class="chem">L_2</span>, because both lines give the exact same value of <span class="chem">x</span>
        "<span class=\"chem\">L_1</span> と <span class=\"chem\">L_2</span> のどちらでもよい（どちらもまったく同じ <span class=\"chem\">x</span> の値を与えるため）",
        // EN: Average the two values of <span class="chem">x</span> obtained from <span class="chem">L_1</span> and <span class="chem">L_2</span>
        "<span class=\"chem\">L_1</span> と <span class=\"chem\">L_2</span> から得られた 2 つの <span class=\"chem\">x</span> の値の平均をとる",
      ],
      hints: [
        // EN: When neither variable is controlled and <span class="chem">y</span> is given to predict <span class="chem">x</span>, which residuals should be minimized?
        "どちらの変数も制御されておらず、<span class=\"chem\">y</span> が与えられて <span class=\"chem\">x</span> を予測するときは、どちらの方向の残差を最小化すべきでしょうか？",
      ],
      // EN: <p>To estimate <span class="chem">x</span> from a given value of <span class="chem">y</span> when neither variable is controlled, you must use the regression line of <strong><span class="chem">x</span> on <span class="chem">y</span></strong> (<span class="chem">L_2: x = cy + d</span>).</p>
      solution: "<p>どちらの変数も制御されていないときに <span class=\"chem\">y</span> の値から <span class=\"chem\">x</span> を推定するには、<strong><span class=\"chem\">x</span> の <span class=\"chem\">y</span> への回帰直線</strong>（<span class=\"chem\">L_2: x = cy + d</span>）を使わなければなりません。</p>",
      misconception: {
        // EN (option B): Rearranging the y-on-x line to solve for x minimizes vertical residuals instead of horizontal residuals, giving a biased estimate whenever |r| < 1.
        "1": "y on x の直線を x について変形すると、横方向ではなく縦方向の残差を最小化することになり、|r| < 1 のとき偏った推定値になります。",
        // EN (option C): The two regression lines only give the same value at the mean point (x̄, ȳ) or when |r| = 1.
        "2": "2 本の回帰直線が同じ値を与えるのは、平均点 (x̄, ȳ) または |r| = 1 のときだけです。",
        // EN (option D): You never average the two lines; each line is optimal for its own prediction direction.
        "3": "2 本の直線の平均をとることはしません；それぞれの直線が対応する予測の向きに対して最適です。",
      },
    },

    // ── t4-1-q009 · numeric · exam · SL · SL 4.4, 4.10 · 4 marks
    "t4-1-q009": {
      // EN: <p>For a bivariate dataset, the regression line of <span class="chem">y</span> on <span class="chem">x</span> is <span class="chem">y = 1.5x + 4</span> and the regression line of <span class="chem">x</span> on <span class="chem">y</span> is <span class="chem">x = 0.5y + 1</span>. Find the sample mean <span class="chem">x̄</span>.</p>
      stem: "<p>ある 2 変量データにおいて、<span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線が <span class=\"chem\">y = 1.5x + 4</span>、<span class=\"chem\">x</span> の <span class=\"chem\">y</span> への回帰直線が <span class=\"chem\">x = 0.5y + 1</span> である。標本平均 <span class=\"chem\">x̄</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: Both regression lines intersect at the mean point <span class="chem">(x̄, ȳ)</span>.
        "2 本の回帰直線はともに平均点 <span class=\"chem\">(x̄, ȳ)</span> で交わります。",
        // EN: Substitute <span class="chem">ȳ = 1.5x̄ + 4</span> into <span class="chem">x̄ = 0.5ȳ + 1</span> and solve for <span class="chem">x̄</span>.
        "<span class=\"chem\">ȳ = 1.5x̄ + 4</span> を <span class=\"chem\">x̄ = 0.5ȳ + 1</span> に代入して <span class=\"chem\">x̄</span> について解きます。",
      ],
      // EN: <p>At the mean point <span class="chem">(x̄, ȳ)</span>, both equations hold simultaneously <b>[M1]</b>:<br><span class="chem">x̄ = 0.5(1.5x̄ + 4) + 1 = 0.75x̄ + 2 + 1 = 0.75x̄ + 3</span> <b>[M1 A1]</b><br><span class="chem">0.25x̄ = 3 ⇒ x̄ = 12</span> (and <span class="chem">ȳ = 22</span>) <b>[A1]</b>.</p>
      solution: "<p>平均点 <span class=\"chem\">(x̄, ȳ)</span> では両方の方程式が同時に成り立ちます <b>[M1]</b>：<br><span class=\"chem\">x̄ = 0.5(1.5x̄ + 4) + 1 = 0.75x̄ + 2 + 1 = 0.75x̄ + 3</span> <b>[M1 A1]</b><br><span class=\"chem\">0.25x̄ = 3 ⇒ x̄ = 12</span>（かつ <span class=\"chem\">ȳ = 22</span>） <b>[A1]</b>。</p>",
    },

    // ── t4-1-q010 · numeric · exam · SL · SL 4.4, 4.10 · 4 marks
    "t4-1-q010": {
      // EN: <p>For a bivariate dataset, the regression line of <span class="chem">y</span> on <span class="chem">x</span> is <span class="chem">y = -0.8x + 25</span> and the regression line of <span class="chem">x</span> on <span class="chem">y</span> is <span class="chem">x = -0.8y + 20</span>. Find the exact value of Pearson's correlation coefficient <span class="chem">r</span>.</p>
      stem: "<p>ある 2 変量データにおいて、<span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線が <span class=\"chem\">y = -0.8x + 25</span>、<span class=\"chem\">x</span> の <span class=\"chem\">y</span> への回帰直線が <span class=\"chem\">x = -0.8y + 20</span> である。ピアソンの相関係数 <span class=\"chem\">r</span> の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: Recall that <span class="chem">r^2 = a · c</span>, where <span class="chem">a = -0.8</span> is the gradient of <span class="chem">y</span> on <span class="chem">x</span> and <span class="chem">c = -0.8</span> is the coefficient of <span class="chem">y</span> in <span class="chem">x</span> on <span class="chem">y</span>.
        "<span class=\"chem\">r^2 = a · c</span> を思い出しましょう（<span class=\"chem\">a = -0.8</span> は <span class=\"chem\">y</span> on <span class=\"chem\">x</span> の傾き、<span class=\"chem\">c = -0.8</span> は <span class=\"chem\">x</span> on <span class=\"chem\">y</span> の <span class=\"chem\">y</span> の係数）。",
        // EN: Since the slopes are negative, <span class="chem">r</span> must also be negative.
        "傾きが負なので、<span class=\"chem\">r</span> も負でなければなりません。",
      ],
      // EN: <p>Using <span class="chem">r^2 = a · c = (-0.8)(-0.8) = 0.64</span> <b>[M1 A1]</b>.<br>Because the correlation is negative (<span class="chem">a &lt; 0, c &lt; 0</span>), <span class="chem">r = -√0.64 = -0.8</span> <b>[R1 A1]</b>.</p>
      solution: "<p><span class=\"chem\">r^2 = a · c = (-0.8)(-0.8) = 0.64</span> <b>[M1 A1]</b>。<br>相関が負（<span class=\"chem\">a &lt; 0, c &lt; 0</span>）であるため、<span class=\"chem\">r = -√0.64 = -0.8</span> <b>[R1 A1]</b>。</p>",
    },

    // ── t4-1-q011 · multi · exam · SL · SL 4.3, 4.4 · 3 marks
    "t4-1-q011": {
      // EN: <p>A bivariate dataset <span class="chem">(x_i, y_i)</span> has correlation coefficient <span class="chem">r = 0.82</span>, mean point <span class="chem">(x̄, ȳ) = (10, 20)</span>, and standard deviations <span class="chem">σ_x = 3</span>, <span class="chem">σ_y = 5</span>. Select <strong>all</strong> statements that are always true.</p>
      stem: "<p>2 変量データ <span class=\"chem\">(x_i, y_i)</span> の相関係数が <span class=\"chem\">r = 0.82</span>、平均点が <span class=\"chem\">(x̄, ȳ) = (10, 20)</span>、標準偏差が <span class=\"chem\">σ_x = 3</span>、<span class=\"chem\">σ_y = 5</span> である。常に正しい記述を<strong>すべて</strong>選びなさい。</p>",
      options: [
        // EN: Both the <span class="chem">y</span>-on-<span class="chem">x</span> and <span class="chem">x</span>-on-<span class="chem">y</span> regression lines pass through <span class="chem">(10, 20)</span>.
        "<span class=\"chem\">y</span> on <span class=\"chem\">x</span> と <span class=\"chem\">x</span> on <span class=\"chem\">y</span> の両方の回帰直線が <span class=\"chem\">(10, 20)</span> を通る。",
        // EN: If every <span class="chem">x_i</span> is replaced by <span class="chem">u_i = 2x_i + 7</span>, the correlation between <span class="chem">u</span> and <span class="chem">y</span> is still <span class="chem">0.82</span>.
        "すべての <span class=\"chem\">x_i</span> を <span class=\"chem\">u_i = 2x_i + 7</span> に置き換えても、<span class=\"chem\">u</span> と <span class=\"chem\">y</span> の相関係数は <span class=\"chem\">0.82</span> のままである。",
        // EN: If every <span class="chem">y_i</span> is replaced by <span class="chem">v_i = 100 - y_i</span>, the correlation between <span class=\"chem\">x</span> and <span class=\"chem">v</span> becomes <span class=\"chem">-0.82</span>.
        "すべての <span class=\"chem\">y_i</span> を <span class=\"chem\">v_i = 100 - y_i</span> に置き換えると、<span class=\"chem\">x</span> と <span class=\"chem\">v</span> の相関係数は <span class=\"chem\">-0.82</span> になる。",
        // EN: The <span class="chem">y</span>-on-<span class="chem">x</span> and <span class="chem">x</span>-on-<span class=\"chem">y</span> regression lines are identical on the coordinate plane.
        "<span class=\"chem\">y</span> on <span class=\"chem\">x</span> と <span class=\"chem\">x</span> on <span class=\"chem\">y</span> の回帰直線は座標平面上で一致する。",
      ],
      hints: [
        // EN: Check how linear coding affects <span class="chem">r</span>, and remember when the two regression lines coincide.
        "1 次変換が <span class=\"chem\">r</span> にどう影響するかを確認し、2 本の回帰直線が一致する条件を思い出しましょう。",
      ],
      // EN: <p>Statements A, B, and C are true: both lines always pass through <span class="chem">(x̄, ȳ)</span>, positive linear scaling preserves <span class="chem">r = 0.82</span>, and multiplying one variable by <span class="chem">-1</span> flips the sign to <span class="chem">-0.82</span>. Statement D is false because <span class="chem">|r| = 0.82 ≠ 1</span>.</p>
      solution: "<p>A、B、C が正しいです：両方の直線は常に <span class=\"chem\">(x̄, ȳ)</span> を通り、正の 1 次変換は <span class=\"chem\">r = 0.82</span> を保ち、一方の変数に <span class=\"chem\">-1</span> を掛けると符号が反転して <span class=\"chem\">-0.82</span> になります。D は <span class=\"chem\">|r| = 0.82 ≠ 1</span> なので誤りです。</p>",
      misconception: {
        // EN (option D): The two regression lines coincide if and only if |r| = 1. Since r = 0.82 < 1, the two lines intersect at (10, 20) with different slopes.
        "3": "2 本の回帰直線が一致するのは |r| = 1 のときだけです。r = 0.82 < 1 なので、2 直線は異なる傾きで (10, 20) において交わります。",
      },
    },

    // ── t4-1-q012 · order · exam · SL · SL 4.4 · 3 marks
    "t4-1-q012": {
      // EN: <p>Order the following four steps to correctly evaluate whether a linear regression estimate of <span class="chem">y</span> at <span class="chem">x = x_0</span> is valid and reliable.</p>
      stem: "<p><span class=\"chem\">x = x_0</span> における <span class=\"chem\">y</span> の線形回帰による推定値が妥当かつ信頼できるかを正しく評価する 4 つの手順を正しい順序に並べ替えなさい。</p>",
      options: [
        // EN: Plot the scatter diagram and calculate Pearson's correlation coefficient <span class="chem">r</span> to verify a strong linear trend (<span class="chem">|r|</span> close to <span class="chem">1</span>).
        "散布図を描き、ピアソンの相関係数 <span class=\"chem\">r</span> を計算して強い直線的傾向（<span class=\"chem\">|r|</span> が <span class=\"chem\">1</span> に近い）があることを確かめる。",
        // EN: Check that <span class="chem">x_0</span> lies within the observed domain <span class="chem">[x_{min}, x_{max}]</span> so that the prediction is interpolation rather than extrapolation.
        "<span class=\"chem\">x_0</span> が観測データの範囲 <span class=\"chem\">[x_{min}, x_{max}]</span> 内にあること（外挿ではなく内挿であること）を確認する。",
        // EN: Find the least-squares regression line of <span class="chem">y</span> on <span class=\"chem">x</span> (<span class="chem">y = ax + b</span>) using the GDC.
        "GDC を使って <span class=\"chem\">y</span> の <span class=\"chem\">x</span> への最小二乗回帰直線（<span class=\"chem\">y = ax + b</span>）を求める。",
        // EN: Substitute <span class="chem">x = x_0</span> into <span class="chem">y = ax + b</span> and report the estimated value <span class="chem">ŷ</span> to 3 significant figures.
        "<span class=\"chem\">y = ax + b</span> に <span class=\"chem\">x = x_0</span> を代入し、推定値 <span class=\"chem\">ŷ</span> を有効数字 3 桁で答える。",
      ],
      hints: [
        // EN: First verify linearity (<span class="chem">r</span>), then check interpolation (<span class="chem">x_0 ∈ [x_{min}, x_{max}]</span>), then compute the regression equation and substitute <span class="chem">x_0</span>.
        "まず直線性（<span class=\"chem\">r</span>）を確認し、次に内挿（<span class=\"chem\">x_0 ∈ [x_{min}, x_{max}]</span>）を確認してから、回帰方程式を求めて <span class=\"chem\">x_0</span> を代入します。",
      ],
      // EN: <p>A reliable linear regression prediction requires (1) confirming strong linear correlation via scatter plot and <span class="chem">r</span>, (2) checking that <span class="chem">x_0</span> is within the data range (interpolation), (3) finding the <span class="chem">y</span>-on-<span class="chem">x</span> regression equation, and (4) substituting <span class="chem">x_0</span>.</p>
      solution: "<p>信頼できる線形回帰予測には、(1) 散布図と <span class=\"chem\">r</span> で強い線形相関を確認し、(2) <span class=\"chem\">x_0</span> がデータの範囲内（内挿）にあることを確かめ、(3) <span class=\"chem\">y</span> on <span class=\"chem\">x</span> の回帰方程式を求め、(4) <span class=\"chem\">x_0</span> を代入することが必要です。</p>",
    },

    // ── t4-1-q013 · numeric · exam · SL · SL 4.3 · 4 marks
    "t4-1-q013": {
      // EN: <p>A group of <span class="chem">12</span> students has a mean test score of <span class="chem">70</span>, and a second group of <span class="chem">8</span> students has a mean test score of <span class="chem">85</span>. Find the combined mean score of all <span class="chem">20</span> students.</p>
      stem: "<p><span class=\"chem\">12</span> 人のグループ A のテストの平均点が <span class=\"chem\">70</span> 点、<span class=\"chem\">8</span> 人のグループ B のテストの平均点が <span class=\"chem\">85</span> 点である。全 <span class=\"chem\">20</span> 人の生徒を合わせた平均点を求めなさい (Find)。</p>",
      hints: [
        // EN: Find the sum of scores in each group using <span class="chem">Σ x = n x̄</span>.
        "<span class=\"chem\">Σ x = n x̄</span> を使って各グループの得点の合計を求めます。",
        // EN: Add the two sums together and divide by the combined sample size <span class="chem">12 + 8 = 20</span>.
        "2 つの合計を足し合わせ、全体の人数 <span class=\"chem\">12 + 8 = 20</span> で割ります。",
      ],
      // EN: <p>Total sum of scores <span class="chem">= 12(70) + 8(85) = 840 + 680 = 1520</span> <b>[M1 A1]</b>.<br>Combined mean <span class="chem">= 1520 / 20 = 76</span> <b>[M1 A1]</b>.</p>
      solution: "<p>全得点の合計 <span class=\"chem\">= 12(70) + 8(85) = 840 + 680 = 1520</span> <b>[M1 A1]</b>。<br>全体の平均点 <span class=\"chem\">= 1520 / 20 = 76</span> <b>[M1 A1]</b>。</p>",
    },

    // ── t4-1-q014 · numeric · challenge · SL · SL 4.3 · 5 marks
    "t4-1-q014": {
      // EN: <p>A dataset of <span class="chem">n = 8</span> numbers has mean <span class="chem">x̄ = 5</span> and population variance <span class="chem">σ^2 = 9</span>. Two new numbers, <span class="chem">1</span> and <span class="chem">9</span>, are added to the dataset so there are now <span class="chem">10</span> numbers. Find the <strong>new population variance</strong> of all <span class="chem">10</span> numbers.</p>
      stem: "<p><span class=\"chem\">n = 8</span> 個の数からなるデータセットの平均値が <span class=\"chem\">x̄ = 5</span>、母分散が <span class=\"chem\">σ^2 = 9</span> である。ここに 2 つの新しい数 <span class=\"chem\">1</span> と <span class=\"chem\">9</span> を加えて合計 <span class=\"chem\">10</span> 個の数にした。全 <span class=\"chem\">10</span> 個の数の<strong>新しい母分散</strong>を求めなさい (Find)。</p>",
      hints: [
        // EN: Notice that the two new numbers <span class="chem">1</span> and <span class="chem">9</span> have mean <span class="chem">(1 + 9)/2 = 5</span>, so the overall mean of all 10 numbers is still <span class="chem">x̄_{new} = 5</span>!
        "加えた 2 つの数 <span class=\"chem\">1</span> と <span class=\"chem\">9</span> の平均は <span class=\"chem\">(1 + 9)/2 = 5</span> なので、10 個全体の平均も <span class=\"chem\">x̄_{new} = 5</span> のままです！",
        // EN: For the original 8 numbers, <span class="chem">Σ(x_i - 5)^2 = n σ^2 = 8 × 9 = 72</span>. Add <span class="chem">(1 - 5)^2 + (9 - 5)^2</span> and divide by <span class="chem">10</span>.
        "元の 8 個の数について <span class=\"chem\">Σ(x_i - 5)^2 = n σ^2 = 8 × 9 = 72</span> です。これに <span class=\"chem\">(1 - 5)^2 + (9 - 5)^2</span> を足して <span class=\"chem\">10</span> で割ります。",
      ],
      // EN: <p>Original sum <span class="chem">Σ x_i = 8 × 5 = 40</span>; new sum <span class="chem">= 40 + 1 + 9 = 50</span>, so <span class="chem">x̄_{new} = 50 / 10 = 5</span> <b>[A1]</b>.<br>Original sum of squared deviations <span class="chem">Σ_{i=1}^8 (x_i - 5)^2 = 8 × 9 = 72</span> <b>[M1 A1]</b>.<br>New sum of squared deviations <span class="chem">= 72 + (1 - 5)^2 + (9 - 5)^2 = 72 + 16 + 16 = 104</span> <b>[M1]</b>.<br>New variance <span class="chem">σ_{new}^2 = 104 / 10 = 10.4</span> <b>[A1]</b>.</p>
      solution: "<p>元の合計は <span class=\"chem\">Σ x_i = 8 × 5 = 40</span>；新しい合計は <span class=\"chem\">= 40 + 1 + 9 = 50</span> なので、<span class=\"chem\">x̄_{new} = 50 / 10 = 5</span> <b>[A1]</b>。<br>元の偏差平方和は <span class=\"chem\">Σ_{i=1}^8 (x_i - 5)^2 = 8 × 9 = 72</span> <b>[M1 A1]</b>。<br>新しい偏差平方和は <span class=\"chem\">= 72 + (1 - 5)^2 + (9 - 5)^2 = 72 + 16 + 16 = 104</span> <b>[M1]</b>。<br>新しい分散は <span class=\"chem\">σ_{new}^2 = 104 / 10 = 10.4</span> <b>[A1]</b>。</p>",
    },

    // ── t4-1-q015 · short · exam · SL · SL 4.2 · 6 marks
    "t4-1-q015": {
      // EN: <p>A cumulative frequency study of the daily commuting times <span class="chem">t</span> (in minutes) of <span class="chem">120</span> office workers gives minimum <span class="chem">8</span>, lower quartile <span class="chem">Q_1 = 22</span>, median <span class="chem">M = 31</span>, upper quartile <span class="chem">Q_3 = 42</span>, and maximum <span class="chem">78</span>.<br>(a) Find the interquartile range (<span class="chem">IQR</span>) and determine how many workers have a commuting time greater than <span class="chem">42</span> minutes. <strong>[2 marks]</strong><br>(b) Show mathematically that the maximum value <span class="chem">78</span> minutes is an outlier, and state the smallest commuting time that would be classified as an upper outlier. <strong>[4 marks]</strong></p>
      stem: "<p><span class=\"chem\">120</span> 人の会社員の毎日の通勤時間 <span class=\"chem\">t</span>（分）の累積度数調査により、最小値 <span class=\"chem\">8</span>、第 1 四分位数 <span class=\"chem\">Q_1 = 22</span>、中央値 <span class=\"chem\">M = 31</span>、第 3 四分位数 <span class=\"chem\">Q_3 = 42</span>、最大値 <span class=\"chem\">78</span> が得られた。<br>(a) 四分位範囲（<span class=\"chem\">IQR</span>）を求め (Find)、通勤時間が <span class=\"chem\">42</span> 分より長い会社員は何人いるか決定しなさい (determine)。 <strong>[2 marks]</strong><br>(b) 最大値 <span class=\"chem\">78</span> 分が外れ値であることを数学的に示し (Show)、上側の外れ値と判定される最小の通勤時間を述べなさい (state)。 <strong>[4 marks]</strong></p>",
      // EN: <p>(a) <span class="chem">IQR = Q_3 - Q_1 = 42 - 22 = 20</span> minutes. Since <span class="chem">Q_3</span> is the 75th percentile, <span class="chem">25%</span> of the <span class="chem">120</span> workers (<span class="chem">0.25 × 120 = 30</span> workers) commute for more than <span class="chem">42</span> minutes.<br>(b) Upper outlier boundary <span class="chem">= Q_3 + 1.5 × IQR = 42 + 1.5(20) = 72</span> minutes. Because <span class="chem">78 &gt; 72</span>, the maximum <span class="chem">78</span> is an outlier, and any time <span class="chem">t &gt; 72</span> minutes is classified as an upper outlier.</p>
      solution: "<p>(a) <span class=\"chem\">IQR = Q_3 - Q_1 = 42 - 22 = 20</span> 分。<span class=\"chem\">Q_3</span> は 75 パーセンタイルなので、<span class=\"chem\">120</span> 人の <span class=\"chem\">25%</span>（<span class=\"chem\">0.25 × 120 = 30</span> 人）が <span class=\"chem\">42</span> 分より長く通勤している。<br>(b) 上側の外れ値境界 <span class=\"chem\">= Q_3 + 1.5 × IQR = 42 + 1.5(20) = 72</span> 分。<span class=\"chem\">78 &gt; 72</span> なので最大値 <span class=\"chem\">78</span> は外れ値であり、<span class=\"chem\">t &gt; 72</span> 分の通勤時間がすべて上側の外れ値と判定される。</p>",
      // EN: <p>(a) <span class="chem">IQR = 42 - 22 = 20</span> minutes; <span class="chem">25%</span> of <span class="chem">120 = 30</span> workers.<br>(b) Upper fence <span class="chem">= Q_3 + 1.5 × IQR = 42 + 1.5(20) = 72</span> minutes. Since <span class="chem">78 &gt; 72</span>, <span class="chem">78</span> is an outlier. Any commuting time strictly greater than <span class="chem">72</span> minutes is an upper outlier.</p>
      answer: "<p>(a) <span class=\"chem\">IQR = 42 - 22 = 20</span> 分；<span class=\"chem\">25%</span>（<span class=\"chem\">120 = 30</span> 人）。<br>(b) 上側境界 <span class=\"chem\">= Q_3 + 1.5 × IQR = 42 + 1.5(20) = 72</span> 分。<span class=\"chem\">78 &gt; 72</span> より <span class=\"chem\">78</span> は外れ値である。<span class=\"chem\">72</span> 分より真に大きい通勤時間はすべて上側の外れ値となる。</p>",
      markscheme: [
        // EN: A1: Finds IQR = 42 − 22 = 20 minutes.
        "A1：IQR = 42 − 22 = 20 分を求める。",
        // EN: A1: Finds 0.25 × 120 = 30 workers above Q₃ = 42 minutes.
        "A1：Q₃ = 42 分を超える会社員が 0.25 × 120 = 30 人であることを求める。",
        // EN: M1: Substitutes into the upper fence formula Q₃ + 1.5 × IQR = 42 + 1.5(20).
        "M1：上側境界の式 Q₃ + 1.5 × IQR = 42 + 1.5(20) に代入する。",
        // EN: A1: Evaluates the upper fence as 72 minutes.
        "A1：上側境界を 72 分と求める。",
        // EN: R1: Explicitly states 78 > 72 to justify that 78 is an outlier.
        "R1：78 > 72 であることを明記して 78 が外れ値である理由を示す。",
        // EN: A1: States that any value strictly above 72 minutes (or 73 minutes if rounded to nearest integer minute) is an upper outlier.
        "A1：72 分より真に大きい値（整数分なら 73 分）が上側の外れ値であることを述べる。",
      ],
    },

    // ── t4-1-q016 · short · exam · SL · SL 4.4, 4.10 · 7 marks
    "t4-1-q016": {
      // EN: <p>The heights <span class="chem">x</span> (in cm, where <span class="chem">155 ≤ x ≤ 190</span>) and masses <span class="chem">y</span> (in kg, where <span class="chem">50 ≤ y ≤ 88</span>) of <span class="chem">14</span> rowers are recorded. The regression line of <span class="chem">y</span> on <span class="chem">x</span> is <span class="chem">y = 0.90x - 85.5</span> and the regression line of <span class="chem">x</span> on <span class="chem">y</span> is <span class="chem">x = 0.80y + 117.4</span>.<br>(a) Find the mean height <span class="chem">x̄</span> and mean mass <span class="chem">ȳ</span> of the rowers. <strong>[3 marks]</strong><br>(b) Estimate the height of a rower whose mass is <span class="chem">75</span> kg, justifying your choice of regression line. <strong>[2 marks]</strong><br>(c) Explain why it would be unreliable to use the <span class="chem">y</span>-on-<span class="chem">x</span> regression line to estimate the mass of a child of height <span class="chem">120</span> cm. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">14</span> 人のボート選手の身長 <span class=\"chem\">x</span>（cm、<span class=\"chem\">155 ≤ x ≤ 190</span>）と体重 <span class=\"chem\">y</span>（kg、<span class=\"chem\">50 ≤ y ≤ 88</span>）を記録した。<span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線は <span class=\"chem\">y = 0.90x - 85.5</span>、<span class=\"chem\">x</span> の <span class=\"chem\">y</span> への回帰直線は <span class=\"chem\">x = 0.80y + 117.4</span> である。<br>(a) ボート選手の平均身長 <span class=\"chem\">x̄</span> と平均体重 <span class=\"chem\">ȳ</span> を求めなさい (Find)。 <strong>[3 marks]</strong><br>(b) 体重が <span class=\"chem\">75</span> kg のボート選手の身長を推定し、使った回帰直線の選択理由を示しなさい (justifying)。 <strong>[2 marks]</strong><br>(c) 身長 <span class=\"chem\">120</span> cm の子どもの体重を推定するのに <span class=\"chem\">y</span> on <span class=\"chem\">x</span> の回帰直線を使うことが信頼できない理由を説明しなさい。 <strong>[2 marks]</strong></p>",
      // EN: <p>(a) Both regression lines intersect at <span class="chem">(x̄, ȳ)</span>: substituting <span class="chem">ȳ = 0.90x̄ - 85.5</span> into <span class="chem">x̄ = 0.80ȳ + 117.4</span> gives <span class="chem">x̄ = 0.72x̄ - 68.4 + 117.4 ⇒ 0.28x̄ = 49 ⇒ x̄ = 175</span> cm and <span class="chem">ȳ = 0.90(175) - 85.5 = 72</span> kg.<br>(b) Substitute <span class="chem">y = 75</span> into the <span class="chem">x</span>-on-<span class="chem">y</span> line: <span class="chem">x = 0.80(75) + 117.4 = 177.4</span> cm.<br>(c) Unreliable because <span class="chem">x = 120</span> cm is outside <span class="chem">[155, 190]</span> cm (extrapolation).</p>
      solution: "<p>(a) 両方の回帰直線は <span class=\"chem\">(x̄, ȳ)</span> で交わる：<span class=\"chem\">ȳ = 0.90x̄ - 85.5</span> を <span class=\"chem\">x̄ = 0.80ȳ + 117.4</span> に代入すると <span class=\"chem\">x̄ = 0.72x̄ - 68.4 + 117.4 ⇒ 0.28x̄ = 49 ⇒ x̄ = 175</span> cm、かつ <span class=\"chem\">ȳ = 0.90(175) - 85.5 = 72</span> kg。<br>(b) <span class=\"chem\">x</span> on <span class=\"chem\">y</span> の直線に <span class=\"chem\">y = 75</span> を代入する：<span class=\"chem\">x = 0.80(75) + 117.4 = 177.4</span> cm。<br>(c) <span class=\"chem\">x = 120</span> cm は <span class=\"chem\">[155, 190]</span> cm の範囲外（外挿）であるため信頼できない。</p>",
      // EN: <p>(a) <span class="chem">x̄ = 175</span> cm, <span class="chem">ȳ = 72</span> kg.<br>(b) Using the <span class="chem">x</span> on <span class="chem">y</span> line (since <span class="chem">y = 75</span> is given to estimate <span class="chem">x</span>): <span class="chem">x = 0.80(75) + 117.4 = 177.4</span> cm.<br>(c) <span class="chem">x = 120</span> cm lies far outside the observed data range <span class="chem">[155, 190]</span> cm, so the estimate relies on <strong>extrapolation</strong> and is unreliable.</p>
      answer: "<p>(a) <span class=\"chem\">x̄ = 175</span> cm、<span class=\"chem\">ȳ = 72</span> kg。<br>(b) （<span class=\"chem\">y = 75</span> が与えられて <span class=\"chem\">x</span> を推定するため）<span class=\"chem\">x</span> on <span class=\"chem\">y</span> の直線を用いる：<span class=\"chem\">x = 0.80(75) + 117.4 = 177.4</span> cm。<br>(c) <span class=\"chem\">x = 120</span> cm は観測データの範囲 <span class=\"chem\">[155, 190]</span> cm から大きく外れているため、推定が<strong>外挿</strong>に頼ることになり信頼できない。</p>",
      markscheme: [
        // EN: M1: Equates or substitutes the two regression lines at (x̄, ȳ): x̄ = 0.80(0.90x̄ − 85.5) + 117.4.
        "M1：(x̄, ȳ) で 2 つの回帰直線を等置または代入する：x̄ = 0.80(0.90x̄ − 85.5) + 117.4。",
        // EN: A1: Finds x̄ = 175 cm.
        "A1：x̄ = 175 cm を求める。",
        // EN: A1: Finds ȳ = 72 kg.
        "A1：ȳ = 72 kg を求める。",
        // EN: R1: Selects the x-on-y regression line x = 0.80y + 117.4 because mass y is given to estimate height x.
        "R1：体重 y が与えられて身長 x を推定するため、x on y の回帰直線 x = 0.80y + 117.4 を選ぶ。",
        // EN: A1: Calculates x = 0.80(75) + 117.4 = 177.4 cm.
        "A1：x = 0.80(75) + 117.4 = 177.4 cm を計算する。",
        // EN: R1: Identifies that x = 120 cm is outside the sample domain [155, 190] cm.
        "R1：x = 120 cm が標本範囲 [155, 190] cm の外にあることを指摘する。",
        // EN: R1: Uses the term extrapolation (or explains that the adult linear relationship may not hold for children).
        "R1：「外挿 (extrapolation)」という語を用いる（または大人の線形関係が子どもには成り立たない可能性を説明する）。",
      ],
    },

    // ── t4-1-q017 · numeric · challenge · SL · SL 4.4, 4.10 · 5 marks
    "t4-1-q017": {
      // EN: <p>For two variables <span class="chem">x</span> and <span class="chem">y</span>, the standard deviation of <span class="chem">y</span> is three times the standard deviation of <span class="chem">x</span> (<span class="chem">σ_y = 3σ_x</span>). Given that the gradient of the regression line of <span class="chem">y</span> on <span class="chem">x</span> is <span class="chem">a = 2.4</span>, find the coefficient <span class="chem">c</span> in the regression line of <span class="chem">x</span> on <span class="chem">y</span> (<span class="chem">x = cy + d</span>).</p>
      stem: "<p>2 つの変数 <span class=\"chem\">x</span> と <span class=\"chem\">y</span> について、<span class=\"chem\">y</span> の標準偏差が <span class=\"chem\">x</span> の標準偏差の 3 倍である（<span class=\"chem\">σ_y = 3σ_x</span>）。<span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線の傾きが <span class=\"chem\">a = 2.4</span> のとき、<span class=\"chem\">x</span> の <span class=\"chem\">y</span> への回帰直線（<span class=\"chem\">x = cy + d</span>）における係数 <span class=\"chem\">c</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: Use <span class="chem">a = r(σ_y / σ_x) = 3r</span> to find Pearson's correlation coefficient <span class="chem">r</span>.
        "<span class=\"chem\">a = r(σ_y / σ_x) = 3r</span> を使ってピアソンの相関係数 <span class=\"chem\">r</span> を求めます。",
        // EN: Then substitute <span class="chem">r</span> into <span class="chem">c = r(σ_x / σ_y) = r / 3</span> (or use <span class="chem">a · c = r^2</span>).
        "次に <span class=\"chem\">r</span> を <span class=\"chem\">c = r(σ_x / σ_y) = r / 3</span> に代入します（または <span class=\"chem\">a · c = r^2</span> を使います）。",
      ],
      // EN: <p>Since <span class="chem">a = r(σ_y / σ_x) = 3r = 2.4</span>, we get <span class="chem">r = 2.4 / 3 = 0.8</span> <b>[M1 A1]</b>.<br>Then <span class="chem">c = r(σ_x / σ_y) = 0.8 / 3 = 4 / 15 ≈ 0.267</span> <b>[M1 A2]</b>. (Students may type <span class="mono">4/15</span> or <span class="mono">0.267</span>.)</p>
      solution: "<p><span class=\"chem\">a = r(σ_y / σ_x) = 3r = 2.4</span> より <span class=\"chem\">r = 2.4 / 3 = 0.8</span> <b>[M1 A1]</b>。<br>よって <span class=\"chem\">c = r(σ_x / σ_y) = 0.8 / 3 = 4 / 15 ≈ 0.267</span> <b>[M1 A2]</b>。（<span class=\"mono\">4/15</span> または <span class=\"mono\">0.267</span> と入力できます。）</p>",
    },

    // ── t4-1-q018 · short · challenge · SL · SL 4.2, 4.3 · 6 marks
    "t4-1-q018": {
      // EN: <p>Six positive integers are arranged in ascending order: <span class="chem">a, b, 10, 12, c, d</span>.<br>The unique mode is <span class="chem">15</span>, the range is <span class="chem">12</span>, and the mean of all six integers is <span class="chem">x̄ = 10.5</span>.<br>(a) State the values of <span class="chem">c</span> and <span class="chem">d</span>, and hence find <span class="chem">a</span>. <strong>[3 marks]</strong><br>(b) Find the value of <span class="chem">b</span> and the interquartile range (<span class="chem">IQR = Q_3 - Q_1</span>) of the six integers. <strong>[3 marks]</strong></p>
      stem: "<p>6 つの正の整数が小さい順に並んでいる：<span class=\"chem\">a, b, 10, 12, c, d</span>。<br>唯一の最頻値が <span class=\"chem\">15</span>、範囲が <span class=\"chem\">12</span>、6 つの整数の平均値が <span class=\"chem\">x̄ = 10.5</span> である。<br>(a) <span class=\"chem\">c</span> と <span class=\"chem\">d</span> の値を述べ (State)、これを用いて (hence) <span class=\"chem\">a</span> を求めなさい。 <strong>[3 marks]</strong><br>(b) <span class=\"chem\">b</span> の値と、これら 6 つの整数の四分位範囲（<span class=\"chem\">IQR = Q_3 - Q_1</span>）を求めなさい (Find)。 <strong>[3 marks]</strong></p>",
      // EN: <p>(a) Because <span class="chem">15 &gt; 12</span> is the unique mode and the six integers are in ascending order, <span class="chem">15</span> must appear at least twice at the upper end, so <span class="chem">c = 15</span> and <span class="chem">d = 15</span>. Then <span class="chem">d - a = 12 ⇒ 15 - a = 12 ⇒ a = 3</span>.<br>(b) The sum of the six numbers is <span class="chem">6 × 10.5 = 63</span>, so <span class="chem">3 + b + 10 + 12 + 15 + 15 = 63 ⇒ 55 + b = 63 ⇒ b = 8</span>. For <span class="chem">n = 6</span>, the lower half is <span class="chem">3, 8, 10</span> (<span class="chem">Q_1 = 8</span>) and the upper half is <span class="chem">12, 15, 15</span> (<span class="chem">Q_3 = 15</span>), so <span class="chem">IQR = 15 - 8 = 7</span>.</p>
      solution: "<p>(a) <span class=\"chem\">15 &gt; 12</span> が唯一の最頻値であり 6 つの整数が昇順に並んでいるため、<span class=\"chem\">15</span> は大きい方の端に少なくとも 2 回現れなければならず、<span class=\"chem\">c = 15</span> かつ <span class=\"chem\">d = 15</span> である。よって <span class=\"chem\">d - a = 12 ⇒ 15 - a = 12 ⇒ a = 3</span>。<br>(b) 6 つの数の合計は <span class=\"chem\">6 × 10.5 = 63</span> なので、<span class=\"chem\">3 + b + 10 + 12 + 15 + 15 = 63 ⇒ 55 + b = 63 ⇒ b = 8</span>。<span class=\"chem\">n = 6</span> より下半分は <span class=\"chem\">3, 8, 10</span>（<span class=\"chem\">Q_1 = 8</span>）、上半分は <span class=\"chem\">12, 15, 15</span>（<span class=\"chem\">Q_3 = 15</span>）となり、<span class=\"chem\">IQR = 15 - 8 = 7</span>。</p>",
      // EN: <p>(a) <span class="chem">c = 15, d = 15</span>; since <span class="chem">d - a = 12</span>, <span class="chem">a = 15 - 12 = 3</span>.<br>(b) Sum <span class="chem">= 6 × 10.5 = 63 ⇒ 3 + b + 10 + 12 + 15 + 15 = 63 ⇒ b = 8</span>. Since <span class="chem">Q_1 = b = 8</span> and <span class="chem">Q_3 = c = 15</span>, <span class="chem">IQR = 15 - 8 = 7</span>.</p>
      answer: "<p>(a) <span class=\"chem\">c = 15, d = 15</span>；<span class=\"chem\">d - a = 12</span> より <span class=\"chem\">a = 15 - 12 = 3</span>。<br>(b) 合計 <span class=\"chem\">= 6 × 10.5 = 63 ⇒ 3 + b + 10 + 12 + 15 + 15 = 63 ⇒ b = 8</span>。<span class=\"chem\">Q_1 = b = 8</span>、かつ <span class=\"chem\">Q_3 = c = 15</span> より <span class=\"chem\">IQR = 15 - 8 = 7</span>。</p>",
      markscheme: [
        // EN: R1: Deduces that for 15 (> 12) to be the unique mode in an ascending list, both c and d must equal 15.
        "R1：昇順の並びで 15（> 12）が唯一の最頻値となるためには、c と d の両方が 15 でなければならないことを導く。",
        // EN: A1: States c = 15 and d = 15.
        "A1：c = 15 かつ d = 15 を述べる。",
        // EN: A1: Uses range = d − a = 12 to find a = 15 − 12 = 3.
        "A1：範囲 = d − a = 12 を用いて a = 15 − 12 = 3 を求める。",
        // EN: M1: Sets up the sum equation 3 + b + 10 + 12 + 15 + 15 = 6 × 10.5 = 63.
        "M1：合計の式 3 + b + 10 + 12 + 15 + 15 = 6 × 10.5 = 63 を立てる。",
        // EN: A1: Finds b = 8.
        "A1：b = 8 を求める。",
        // EN: A1: Identifies Q₁ = 8 and Q₃ = 15 for n = 6, giving IQR = 15 − 8 = 7.
        "A1：n = 6 に対して Q₁ = 8 と Q₃ = 15 を特定し、IQR = 15 − 8 = 7 を得る。",
      ],
    },

  }
});
