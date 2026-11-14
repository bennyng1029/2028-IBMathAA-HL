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
      // EN: <p><span class="chem">IQR = 20</span> <b>[A1]</b>. Lower fence <span class="chem">= Q_1 - 1.5 × IQR = 28 - 30 = -2</span> <b>[M1 A1]</b>.</p>
      solution: "<p><span class=\"chem\">IQR = 20</span> <b>[A1]</b>。下側境界 <span class=\"chem\">= Q_1 - 1.5 × IQR = 28 - 30 = -2</span> <b>[M1 A1]</b>。</p>",
    },

    // ── t4-1-q005 · mcq · foundation · SL · SL 4.3 · 2 marks
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
      // EN: <p><span class="chem">ȳ = 50 - 4(12) = 50 - 48 = 2</span> <b>[A1]</b>.<br><span class="chem">σ_Y = |-4| × 2.5 = 4 × 2.5 = 10</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">ȳ = 50 - 4(12) = 50 - 48 = 2</span> <b>[A1]</b>。<br><span class=\"chem\">σ_Y = |-4| × 2.5 = 4 × 2.5 = 10</span> <b>[A1]</b>。</p>",
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
      // EN: <p>The masses (in grams) of <span class="chem">20</span> pebbles are summarized in a grouped frequency table: <span class="chem">4</span> pebbles in <span class="chem">10 ≤ m &lt; 20</span>, <span class="chem">10</span> pebbles in <span class="chem">20 ≤ m &lt; 30</span>, and <span class="chem">6</span> pebbles in <span class="chem">30 ≤ m &lt; 40</span>. Using mid-interval values, calculate an estimate of the standard deviation <span class="chem">σ</span> of the masses.</p>
      stem: "<p><span class=\"chem\">20</span> 個の小石の質量（グラム）が度数分布表にまとめられている：<span class=\"chem\">10 ≤ m &lt; 20</span> に <span class=\"chem\">4</span> 個、<span class=\"chem\">20 ≤ m &lt; 30</span> に <span class=\"chem\">10</span> 個、<span class=\"chem\">30 ≤ m &lt; 40</span> に <span class=\"chem\">6</span> 個。階級値を用いて、質量の標準偏差 <span class=\"chem\">σ</span> の推定値を計算しなさい (Calculate)。</p>",
      hints: [
        // EN: The mid-interval values are <span class="chem">15, 25, 35</span> with frequencies <span class="chem">4, 10, 6</span>.
        "階級値は <span class=\"chem\">15, 25, 35</span> で、度数は <span class=\"chem\">4, 10, 6</span> です。",
        // EN: First find <span class="chem">m̄ = (4×15 + 10×25 + 6×35)/20 = 26</span>, then compute <span class="chem">σ = sqrt((4(15-26)^2 + 10(25-26)^2 + 6(35-26)^2)/20)</span> (or read <span class="mono">σx</span> from GDC).
        "まず <span class=\"chem\">m̄ = (4×15 + 10×25 + 6×35)/20 = 26</span> を求め、次に <span class=\"chem\">σ = sqrt((4(15-26)^2 + 10(25-26)^2 + 6(35-26)^2)/20)</span> を計算します（または GDC で <span class=\"mono\">σx</span> を読み取ります）。",
      ],
      // EN: <p>Midpoints are <span class="chem">15, 25, 35</span> <b>[M1]</b>.<br>Mean <span class="chem">m̄ = (60 + 250 + 210) / 20 = 520 / 20 = 26</span> g <b>[A1]</b>.<br>Variance <span class="chem">σ^2 = (4(-11)^2 + 10(-1)^2 + 6(9)^2) / 20 = (484 + 10 + 486) / 20 = 980 / 20 = 49</span>, so <span class="chem">σ = √49 = 7</span> g <b>[M1 A1]</b>.</p>
      solution: "<p>階級値は <span class=\"chem\">15, 25, 35</span> <b>[M1]</b>。<br>平均値 <span class=\"chem\">m̄ = (60 + 250 + 210) / 20 = 520 / 20 = 26</span> g <b>[A1]</b>。<br>分散 <span class=\"chem\">σ^2 = (4(-11)^2 + 10(-1)^2 + 6(9)^2) / 20 = (484 + 10 + 486) / 20 = 980 / 20 = 49</span> なので、<span class=\"chem\">σ = √49 = 7</span> g <b>[M1 A1]</b>。</p>",
    },

    // ── t4-1-q008 · mcq · exam · SL · SL 4.4, 4.10 · 2 marks
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

    // ── t4-1-q010 · numeric · challenge · SL · SL 4.4, 4.10 · 3 marks
    "t4-1-q010": {
      // EN: <p>A geography class records the altitude <span class="chem">x</span> km and the mean July air temperature <span class="chem">y</span> °C at 8 weather stations on a mountain.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Altitude <span class="chem">x</span> (km)</th><td class="num">0.2</td><td class="num">0.5</td><td class="num">0.9</td><td class="num">1.2</td><td class="num">1.6</td><td class="num">1.9</td><td class="num">2.3</td><td class="num">2.8</td></tr><tr><th scope="row">Temperature <span class="chem">y</span> (°C)</th><td class="num">24.1</td><td class="num">23.5</td><td class="num">19.8</td><td class="num">20.6</td><td class="num">16.2</td><td class="num">17.9</td><td class="num">12.4</td><td class="num">11.8</td></tr></tbody></table></div><p>The regression line of <span class="chem">x</span> on <span class="chem">y</span> is <span class="chem">x = cy + d</span>. Find the value of <span class="chem">c</span>.</p>
      stem: "<p>地理のクラスが、ある山の 8 つの気象観測所で標高 <span class=\"chem\">x</span> km と 7 月の平均気温 <span class=\"chem\">y</span> °C を記録した。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">標高 <span class=\"chem\">x</span> (km)</th><td class=\"num\">0.2</td><td class=\"num\">0.5</td><td class=\"num\">0.9</td><td class=\"num\">1.2</td><td class=\"num\">1.6</td><td class=\"num\">1.9</td><td class=\"num\">2.3</td><td class=\"num\">2.8</td></tr><tr><th scope=\"row\">気温 <span class=\"chem\">y</span> (°C)</th><td class=\"num\">24.1</td><td class=\"num\">23.5</td><td class=\"num\">19.8</td><td class=\"num\">20.6</td><td class=\"num\">16.2</td><td class=\"num\">17.9</td><td class=\"num\">12.4</td><td class=\"num\">11.8</td></tr></tbody></table></div><p><span class=\"chem\">x</span> の <span class=\"chem\">y</span> への回帰直線は <span class=\"chem\">x = cy + d</span> である。<span class=\"chem\">c</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: “<span class="chem">x</span> on <span class="chem">y</span>” means that <span class="chem">x</span> is the variable being predicted and <span class="chem">y</span> is the explanatory variable, so the GDC must regress the <span class="chem">x</span>-values on the <span class="chem">y</span>-values. <span class="chem">c</span> is <strong>not</strong> <span class="chem">1/a</span>, the reciprocal of the gradient of the <span class="chem">y</span>-on-<span class="chem">x</span> line.
        "解読：「<span class=\"chem\">x</span> の <span class=\"chem\">y</span> への回帰」とは、<span class=\"chem\">x</span> が予測される変数で <span class=\"chem\">y</span> が説明変数であるという意味なので、GDC では <span class=\"chem\">x</span> の値を <span class=\"chem\">y</span> の値に回帰させます。<span class=\"chem\">c</span> は <span class=\"chem\">1/a</span>（<span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線の傾きの逆数）<strong>ではありません</strong>。",
        // EN: Run LinReg(ax+b) with the temperatures as the Xlist and the altitudes as the Ylist. The “slope” the GDC shows is <span class="chem">c</span> and the “intercept” is <span class="chem">d</span>.
        "気温を Xlist、標高を Ylist にして LinReg(ax+b) を実行します。GDC が示す「傾き」が <span class=\"chem\">c</span>、「切片」が <span class=\"chem\">d</span> です。",
        // EN: Check: <span class="chem">c</span> has the same sign as <span class="chem">r</span>. The two lines agree with each other only when <span class="chem">|r| = 1</span>, so expect <span class="chem">c</span> ≠ <span class="chem">1/a</span> here.
        "確認：<span class=\"chem\">c</span> は <span class=\"chem\">r</span> と同じ符号です。2 本の回帰直線が一致するのは <span class=\"chem\">|r| = 1</span> のときだけなので、ここでは <span class=\"chem\">c</span> ≠ <span class=\"chem\">1/a</span> となるはずです。",
      ],
      // EN: <p>Decode: <span class="chem">x</span> on <span class="chem">y</span>, so the temperatures <span class="chem">y</span> are the Xlist and the altitudes <span class="chem">x</span> are the Ylist <b>[M1]</b>.<br>GDC: <span class="chem">x = −0.18604y + 4.8272</span> <b>[A1]</b>, so <span class="chem">c ≈ −0.186</span> <b>[A1]</b>.<br>(Here <span class="chem">r = −0.963</span>. The <span class="chem">y</span>-on-<span class="chem">x</span> line is <span class="chem">y = −4.9826x + 25.388</span>; rearranging it would give <span class="chem">1/a = 1/(−4.9826) ≈ −0.201</span>, which is not <span class="chem">c</span>, because <span class="chem">|r| &lt; 1</span>.)</p>
      solution: "<p>Decode：<span class=\"chem\">x</span> の <span class=\"chem\">y</span> への回帰なので、気温 <span class=\"chem\">y</span> を Xlist、標高 <span class=\"chem\">x</span> を Ylist にする <b>[M1]</b>。<br>GDC：<span class=\"chem\">x = −0.18604y + 4.8272</span> <b>[A1]</b>、よって <span class=\"chem\">c ≈ −0.186</span> <b>[A1]</b>。<br>（ここで <span class=\"chem\">r = −0.963</span>。<span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線は <span class=\"chem\">y = −4.9826x + 25.388</span> で、これを変形すると <span class=\"chem\">1/a = 1/(−4.9826) ≈ −0.201</span> となるが、<span class=\"chem\">|r| &lt; 1</span> なのでこれは <span class=\"chem\">c</span> ではない。）</p>",
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
      // EN: <p>Order the following four steps to find a linear regression estimate of <span class="chem">y</span> at <span class="chem">x = x_0</span> and judge whether it is reliable. Each step uses the result of the step before it.</p>
      stem: "<p><span class=\"chem\">x = x_0</span> における <span class=\"chem\">y</span> の線形回帰による推定値を求め、それが信頼できるかを判断する 4 つの手順を正しい順序に並べ替えなさい。各手順は 1 つ前の手順の結果を使います。</p>",
      options: [
        // EN: Enter the <span class="chem">x</span>-values in <span class="mono">L1</span> and the <span class="chem">y</span>-values in <span class="mono">L2</span> on the GDC.
        "GDC で <span class=\"chem\">x</span> の値を <span class=\"mono\">L1</span> に、<span class=\"chem\">y</span> の値を <span class=\"mono\">L2</span> に入力する。",
        // EN: Run <span class="mono">LinReg(ax+b) L1, L2</span> to obtain the regression line of <span class="chem">y</span> on <span class="chem">x</span>, <span class="chem">y = ax + b</span>, and the correlation coefficient <span class="chem">r</span>.
        "<span class=\"mono\">LinReg(ax+b) L1, L2</span> を実行して、<span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線 <span class=\"chem\">y = ax + b</span> と相関係数 <span class=\"chem\">r</span> を求める。",
        // EN: Substitute <span class="chem">x = x_0</span> into <span class="chem">y = ax + b</span> to obtain the estimate <span class="chem">ŷ</span>.
        "<span class=\"chem\">y = ax + b</span> に <span class=\"chem\">x = x_0</span> を代入して推定値 <span class=\"chem\">ŷ</span> を求める。",
        // EN: Judge the reliability of <span class="chem">ŷ</span>: check that <span class="chem">|r|</span> is close to <span class="chem">1</span> and that <span class="chem">x_0</span> lies within <span class="chem">[x_{min}, x_{max}]</span> (interpolation, not extrapolation).
        "<span class=\"chem\">ŷ</span> の信頼性を判断する：<span class=\"chem\">|r|</span> が <span class=\"chem\">1</span> に近いこと、そして <span class=\"chem\">x_0</span> が <span class=\"chem\">[x_{min}, x_{max}]</span> 内にあること（外挿ではなく内挿）を確かめる。",
      ],
      hints: [
        // EN: Each step needs the output of the one before: the lists feed <span class="mono">LinReg</span>, the line gives <span class="chem">ŷ</span>, and only then can you judge how reliable <span class="chem">ŷ</span> is.
        "各手順は 1 つ前の出力を必要とします：リストが <span class=\"mono\">LinReg</span> の入力になり、回帰直線から <span class=\"chem\">ŷ</span> が得られ、そのあとで初めて <span class=\"chem\">ŷ</span> の信頼性を判断できます。",
      ],
      // EN: <p>(1) Enter the data in <span class="mono">L1</span> and <span class="mono">L2</span>; (2) run <span class="mono">LinReg(ax+b)</span> to get <span class="chem">y = ax + b</span> and <span class="chem">r</span>; (3) substitute <span class="chem">x_0</span> to get <span class="chem">ŷ</span>; (4) judge reliability: the estimate is reliable only if <span class="chem">|r|</span> is close to <span class="chem">1</span> and <span class="chem">x_0</span> is inside the data range (interpolation).</p>
      solution: "<p>(1) データを <span class=\"mono\">L1</span> と <span class=\"mono\">L2</span> に入力し、(2) <span class=\"mono\">LinReg(ax+b)</span> を実行して <span class=\"chem\">y = ax + b</span> と <span class=\"chem\">r</span> を求め、(3) <span class=\"chem\">x_0</span> を代入して <span class=\"chem\">ŷ</span> を求め、(4) 信頼性を判断します：<span class=\"chem\">|r|</span> が <span class=\"chem\">1</span> に近く、かつ <span class=\"chem\">x_0</span> がデータの範囲内（内挿）にあるときに限り、推定値は信頼できます。</p>",
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
        // EN: Decode: the new variance must be measured about the mean of all <span class="chem">10</span> numbers, so first check whether adding <span class="chem">1</span> and <span class="chem">9</span> changes the mean.
        "解読：新しい分散は <span class=\"chem\">10</span> 個すべての数の平均を基準に測るので、まず <span class=\"chem\">1</span> と <span class=\"chem\">9</span> を加えると平均が変わるかどうかを確かめます。",
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
      // EN: <p>A cumulative frequency study of the daily commuting times <span class="chem">t</span> (in minutes) of <span class="chem">120</span> office workers gives minimum <span class="chem">8</span>, lower quartile <span class="chem">Q_1 = 22</span>, median <span class="chem">M = 31</span>, upper quartile <span class="chem">Q_3 = 42</span>, and maximum <span class="chem">78</span>.<br>(a) Find the interquartile range (<span class="chem">IQR</span>) and determine how many workers have a commuting time greater than <span class="chem">42</span> minutes. <strong>[2 marks]</strong><br>(b) Show mathematically that the maximum value <span class="chem">78</span> minutes is an outlier, and state the range of commuting times that would be classified as upper outliers. <strong>[4 marks]</strong></p>
      stem: "<p><span class=\"chem\">120</span> 人の会社員の毎日の通勤時間 <span class=\"chem\">t</span>（分）の累積度数調査により、最小値 <span class=\"chem\">8</span>、第 1 四分位数 <span class=\"chem\">Q_1 = 22</span>、中央値 <span class=\"chem\">M = 31</span>、第 3 四分位数 <span class=\"chem\">Q_3 = 42</span>、最大値 <span class=\"chem\">78</span> が得られた。<br>(a) 四分位範囲（<span class=\"chem\">IQR</span>）を求め (Find)、通勤時間が <span class=\"chem\">42</span> 分より長い会社員は何人いるか決定しなさい (determine)。 <strong>[2 marks]</strong><br>(b) 最大値 <span class=\"chem\">78</span> 分が外れ値であることを数学的に示し (Show)、上側の外れ値と判定される通勤時間の範囲を述べなさい (state)。 <strong>[4 marks]</strong></p>",
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
        // EN: A1: States that the upper outliers are the commuting times t > 72 minutes.
        "A1：上側の外れ値は通勤時間 t > 72 分であることを述べる。",
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
      // EN: <p>Nine adults who are learning to type record the time <span class="chem">x</span> hours per week that they practise and their typing speed <span class="chem">y</span> words per minute.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Practice <span class="chem">x</span> (h per week)</th><td class="num">2</td><td class="num">4</td><td class="num">5</td><td class="num">7</td><td class="num">8</td><td class="num">10</td><td class="num">11</td><td class="num">13</td><td class="num">14</td></tr><tr><th scope="row">Speed <span class="chem">y</span> (words per minute)</th><td class="num">38</td><td class="num">35</td><td class="num">46</td><td class="num">44</td><td class="num">52</td><td class="num">49</td><td class="num">60</td><td class="num">55</td><td class="num">63</td></tr></tbody></table></div><p>Ana wants to estimate the weekly practice time of a learner whose typing speed is <span class="chem">40</span> words per minute. She finds the regression line of <span class="chem">y</span> on <span class="chem">x</span> and solves <span class="chem">40 = ax + b</span> for <span class="chem">x</span>.<br>Find (the estimate given by the appropriate regression line) − (Ana's estimate), in hours per week.</p>
      stem: "<p>タイピングを習っている 9 人の大人が、1 週間の練習時間 <span class=\"chem\">x</span> 時間とタイピング速度 <span class=\"chem\">y</span>（1 分あたりの語数）を記録した。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">練習 <span class=\"chem\">x</span> (h per week)</th><td class=\"num\">2</td><td class=\"num\">4</td><td class=\"num\">5</td><td class=\"num\">7</td><td class=\"num\">8</td><td class=\"num\">10</td><td class=\"num\">11</td><td class=\"num\">13</td><td class=\"num\">14</td></tr><tr><th scope=\"row\">速度 <span class=\"chem\">y</span> (words per minute)</th><td class=\"num\">38</td><td class=\"num\">35</td><td class=\"num\">46</td><td class=\"num\">44</td><td class=\"num\">52</td><td class=\"num\">49</td><td class=\"num\">60</td><td class=\"num\">55</td><td class=\"num\">63</td></tr></tbody></table></div><p>Ana は、タイピング速度が 1 分あたり <span class=\"chem\">40</span> 語の学習者の 1 週間の練習時間を推定したい。彼女は <span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線を求め、<span class=\"chem\">40 = ax + b</span> を <span class=\"chem\">x</span> について解いた。<br>（適切な回帰直線による推定値）−（Ana の推定値）を、1 週間あたりの時間で求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: the speed <span class="chem">y</span> is given and the practice time <span class="chem">x</span> is wanted, so the appropriate line is <span class="chem">x</span> on <span class="chem">y</span>. Ana's rearranged <span class="chem">y</span>-on-<span class="chem">x</span> line is a different line (they coincide only when <span class="chem">|r| = 1</span>), so the two estimates differ.
        "解読：速度 <span class=\"chem\">y</span> が与えられ練習時間 <span class=\"chem\">x</span> を求めるので、適切な直線は <span class=\"chem\">x</span> の <span class=\"chem\">y</span> への回帰直線です。Ana が変形した <span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線は別の直線で（一致するのは <span class=\"chem\">|r| = 1</span> のときだけ）、2 つの推定値は異なります。",
        // EN: Ana: run LinReg(ax+b) with <span class="chem">x</span> as the Xlist, then solve <span class="chem">40 = ax + b</span>. Appropriate line: run LinReg(ax+b) again with <span class="chem">y</span> as the Xlist and <span class="chem">x</span> as the Ylist, then substitute <span class="chem">y = 40</span>.
        "Ana：<span class=\"chem\">x</span> を Xlist にして LinReg(ax+b) を実行し、<span class=\"chem\">40 = ax + b</span> を解きます。適切な直線：<span class=\"chem\">y</span> を Xlist、<span class=\"chem\">x</span> を Ylist にしてもう一度 LinReg(ax+b) を実行し、<span class=\"chem\">y = 40</span> を代入します。",
        // EN: Store both lines or keep the unrounded coefficients, then subtract Ana's estimate from the other one.
        "両方の直線を保存するか、丸める前の係数を使い、もう一方の推定値から Ana の推定値を引きます。",
      ],
      // EN: <p>Decode: predicting <span class="chem">x</span> from a given <span class="chem">y</span> needs the <span class="chem">x</span>-on-<span class="chem">y</span> line; Ana's method uses the <span class="chem">y</span>-on-<span class="chem">x</span> line instead.<br>Ana: <span class="chem">y = 2.0861x + 31.959</span> <b>[M1]</b>, so <span class="chem">x = (40 − 31.959)/2.0861 = 3.8546…</span> h <b>[A1]</b>.<br>Appropriate line (speeds as the Xlist): <span class="chem">x = 0.39666y − 11.258</span> <b>[M1]</b>, so <span class="chem">x = 0.39666(40) − 11.258 = 4.6082…</span> h <b>[A1]</b>.<br>Difference <span class="chem">= 4.6082… − 3.8546… = 0.75355… ≈ 0.754</span> h per week <b>[A1]</b>.<br>(Here <span class="chem">r = 0.910</span>, not close enough to 1 for the two lines to agree; <span class="chem">40</span> is inside the data range 35–63, so both are interpolations.)</p>
      solution: "<p>Decode：与えられた <span class=\"chem\">y</span> から <span class=\"chem\">x</span> を予測するには <span class=\"chem\">x</span> の <span class=\"chem\">y</span> への回帰直線が必要だが、Ana の方法は <span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線を使っている。<br>Ana：<span class=\"chem\">y = 2.0861x + 31.959</span> <b>[M1]</b>、よって <span class=\"chem\">x = (40 − 31.959)/2.0861 = 3.8546…</span> h <b>[A1]</b>。<br>適切な直線（速度を Xlist）：<span class=\"chem\">x = 0.39666y − 11.258</span> <b>[M1]</b>、よって <span class=\"chem\">x = 0.39666(40) − 11.258 = 4.6082…</span> h <b>[A1]</b>。<br>差 <span class=\"chem\">= 4.6082… − 3.8546… = 0.75355… ≈ 0.754</span>（1 週間あたりの時間）<b>[A1]</b>。<br>（ここで <span class=\"chem\">r = 0.910</span> は 1 に十分近くないので 2 本の直線は一致しない。<span class=\"chem\">40</span> はデータの範囲 35–63 の内側にあるので、どちらも内挿である。）</p>",
    },

    // ── t4-1-q018 · short · challenge · SL · SL 4.2, 4.3 · 6 marks
    "t4-1-q018": {
      // EN: <p>Six positive integers are arranged in ascending order: <span class="chem">a, b, 10, 12, c, d</span>.<br>The unique mode is <span class="chem">15</span>, the range is <span class="chem">12</span>, and the mean of all six integers is <span class="chem">x̄ = 10.5</span>.<br>Quartiles are found by the GDC method: the median of each half of the ordered data.<br>(a) State the values of <span class="chem">c</span> and <span class="chem">d</span>, and hence find <span class="chem">a</span>. <strong>[3 marks]</strong><br>(b) Find the value of <span class="chem">b</span> and the interquartile range (<span class="chem">IQR = Q_3 - Q_1</span>) of the six integers. <strong>[3 marks]</strong></p>
      stem: "<p>6 つの正の整数が小さい順に並んでいる：<span class=\"chem\">a, b, 10, 12, c, d</span>。<br>唯一の最頻値が <span class=\"chem\">15</span>、範囲が <span class=\"chem\">12</span>、6 つの整数の平均値が <span class=\"chem\">x̄ = 10.5</span> である。<br>四分位数は GDC の方法（並べたデータのそれぞれの半分の中央値）で求める。<br>(a) <span class=\"chem\">c</span> と <span class=\"chem\">d</span> の値を述べ (State)、これを用いて (hence) <span class=\"chem\">a</span> を求めなさい。 <strong>[3 marks]</strong><br>(b) <span class=\"chem\">b</span> の値と、これら 6 つの整数の四分位範囲（<span class=\"chem\">IQR = Q_3 - Q_1</span>）を求めなさい (Find)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: the two largest values are <span class="chem">c</span> and <span class="chem">d</span>, and <span class="chem">15 &gt; 12</span>, so a unique mode of <span class="chem">15</span> forces <span class="chem">c = d = 15</span>. Then the range gives <span class="chem">a</span>, and the mean (a total) gives <span class="chem">b</span>.
        "解読：最も大きい 2 つの値は <span class=\"chem\">c</span> と <span class=\"chem\">d</span> で、<span class=\"chem\">15 &gt; 12</span> なので、唯一の最頻値が <span class=\"chem\">15</span> であることから <span class=\"chem\">c = d = 15</span> に決まります。次に範囲から <span class=\"chem\">a</span> を、平均（つまり合計）から <span class=\"chem\">b</span> を求めます。",
        // EN: For <span class="chem">n = 6</span>, the lower half is the <span class="chem">3</span> smallest values and the upper half is the <span class="chem">3</span> largest; each quartile is the median of its half.
        "<span class=\"chem\">n = 6</span> のとき、下半分は小さい方の <span class=\"chem\">3</span> 個、上半分は大きい方の <span class=\"chem\">3</span> 個の値です。それぞれの四分位数はその半分の中央値です。",
      ],
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

    // ── t4-1-q019 · short · exam · SL · SL 4.4 · 8 marks
    "t4-1-q019": {
      // EN: <p>The number of hours of revision <span class="chem">x</span> and the test score <span class="chem">y</span> of <span class="chem">8</span> students are shown below.<br>Hours of revision <span class="chem">x</span>: <span class="chem">2, 3, 5, 6, 8, 9, 11, 12</span><br>Test score <span class="chem">y</span>: <span class="chem">41, 46, 50, 57, 60, 66, 71, 77</span><br>(a) Find Pearson's correlation coefficient <span class="chem">r</span>. <strong>[2 marks]</strong><br>(b) Find the equation of the regression line of <span class="chem">y</span> on <span class="chem">x</span>. <strong>[2 marks]</strong><br>(c) Interpret the gradient of this line in context. <strong>[1 mark]</strong><br>(d) Use your regression line to estimate the test score of a student who revises for <span class="chem">10</span> hours. <strong>[2 marks]</strong><br>(e) Explain why the line should not be used to estimate the score of a student who revises for <span class="chem">20</span> hours. <strong>[1 mark]</strong></p>
      stem: "<p><span class=\"chem\">8</span> 人の生徒の復習時間 <span class=\"chem\">x</span>（時間）とテストの得点 <span class=\"chem\">y</span> を以下に示す。<br>復習時間 <span class=\"chem\">x</span>：<span class=\"chem\">2, 3, 5, 6, 8, 9, 11, 12</span><br>テストの得点 <span class=\"chem\">y</span>：<span class=\"chem\">41, 46, 50, 57, 60, 66, 71, 77</span><br>(a) ピアソンの相関係数 <span class=\"chem\">r</span> を求めなさい (Find)。 <strong>[2 marks]</strong><br>(b) <span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線の方程式を求めなさい (Find)。 <strong>[2 marks]</strong><br>(c) この直線の傾きを文脈に即して解釈しなさい (Interpret)。 <strong>[1 mark]</strong><br>(d) 回帰直線を用いて、<span class=\"chem\">10</span> 時間復習する生徒のテストの得点を推定しなさい (estimate)。 <strong>[2 marks]</strong><br>(e) <span class=\"chem\">20</span> 時間復習する生徒の得点の推定にこの直線を使うべきでない理由を説明しなさい (Explain)。 <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Enter <span class="chem">x</span> in <span class="mono">L1</span> and <span class="chem">y</span> in <span class="mono">L2</span>, then run <span class="mono">LinReg(ax+b) L1, L2</span>: the GDC gives <span class="chem">a</span>, <span class="chem">b</span> and <span class="chem">r</span>.
        "<span class=\"chem\">x</span> を <span class=\"mono\">L1</span>、<span class=\"chem\">y</span> を <span class=\"mono\">L2</span> に入力して <span class=\"mono\">LinReg(ax+b) L1, L2</span> を実行すると、GDC が <span class=\"chem\">a</span>、<span class=\"chem\">b</span>、<span class=\"chem\">r</span> を表示します。",
        // EN: The gradient <span class="chem">a</span> is the change in <span class="chem">y</span> for each extra unit of <span class="chem">x</span>. Compare <span class="chem">x = 20</span> with the smallest and largest <span class="chem">x</span>-values.
        "傾き <span class=\"chem\">a</span> は <span class=\"chem\">x</span> が 1 単位増えるごとの <span class=\"chem\">y</span> の変化量です。<span class=\"chem\">x = 20</span> を <span class=\"chem\">x</span> の最小値・最大値と比べましょう。",
      ],
      // EN: <p>(a) From the GDC, <span class="chem">r = 0.99290… ≈ 0.993</span> <b>[M1 A1]</b>.<br>(b) <span class="chem">a = 3.4239…</span> and <span class="chem">b = 34.533…</span>, so <span class="chem">y = 3.42x + 34.5</span> <b>[A1 A1]</b>.<br>(c) For each extra hour of revision, the test score increases by about <span class="chem">3.42</span> marks on average <b>[A1]</b>.<br>(d) <span class="chem">y = 3.4239(10) + 34.533 = 68.77… ≈ 68.8</span> <b>[M1 A1]</b>.<br>(e) <span class="chem">x = 20</span> lies outside the observed range <span class="chem">2 ≤ x ≤ 12</span>, so the estimate would be an extrapolation <b>[R1]</b>.</p>
      solution: "<p>(a) GDC より <span class=\"chem\">r = 0.99290… ≈ 0.993</span> <b>[M1 A1]</b>。<br>(b) <span class=\"chem\">a = 3.4239…</span>、<span class=\"chem\">b = 34.533…</span> なので <span class=\"chem\">y = 3.42x + 34.5</span> <b>[A1 A1]</b>。<br>(c) 復習が 1 時間増えるごとに、テストの得点は平均しておよそ <span class=\"chem\">3.42</span> 点高くなる <b>[A1]</b>。<br>(d) <span class=\"chem\">y = 3.4239(10) + 34.533 = 68.77… ≈ 68.8</span> <b>[M1 A1]</b>。<br>(e) <span class=\"chem\">x = 20</span> は観測範囲 <span class=\"chem\">2 ≤ x ≤ 12</span> の外にあるので、この推定は外挿になる <b>[R1]</b>。</p>",
      // EN: <p>(a) <span class="chem">r = 0.993</span><br>(b) <span class="chem">y = 3.42x + 34.5</span><br>(c) Each extra hour of revision is associated with an increase of about <span class="chem">3.42</span> marks in the test score.<br>(d) <span class="chem">y ≈ 68.8</span> (accept <span class="chem">68.7</span> from the rounded coefficients).<br>(e) <span class="chem">x = 20</span> is outside the data range <span class="chem">2 ≤ x ≤ 12</span>, so the estimate would be an extrapolation.</p>
      answer: "<p>(a) <span class=\"chem\">r = 0.993</span><br>(b) <span class=\"chem\">y = 3.42x + 34.5</span><br>(c) 復習時間が 1 時間増えるごとに、テストの得点はおよそ <span class=\"chem\">3.42</span> 点高くなる傾向がある。<br>(d) <span class=\"chem\">y ≈ 68.8</span>（丸めた係数を使った <span class=\"chem\">68.7</span> も可）。<br>(e) <span class=\"chem\">x = 20</span> はデータの範囲 <span class=\"chem\">2 ≤ x ≤ 12</span> の外にあるので、この推定は外挿になる。</p>",
      markscheme: [
        // EN: M1: Enters x in L1 and y in L2 and uses the GDC (LinReg(ax+b)).
        "M1：x を L1、y を L2 に入力し、GDC（LinReg(ax+b)）を使う。",
        // EN: A1: r = 0.993.
        "A1：r = 0.993。",
        // EN: A1: Gradient a = 3.42 (3.4239…).
        "A1：傾き a = 3.42 (3.4239…)。",
        // EN: A1: Intercept b = 34.5 (34.533…), giving y = 3.42x + 34.5.
        "A1：切片 b = 34.5 (34.533…)、よって y = 3.42x + 34.5。",
        // EN: A1: Each extra hour of revision is associated with about 3.42 more marks, on average.
        "A1：復習が 1 時間増えるごとに、得点は平均しておよそ 3.42 点高くなる。",
        // EN: M1: Substitutes x = 10 into the regression line.
        "M1：回帰直線に x = 10 を代入する。",
        // EN: A1: y ≈ 68.8 (accept 68.7).
        "A1：y ≈ 68.8（68.7 も可）。",
        // EN: R1: 20 hours is outside the data range (2 to 12 hours), so this would be extrapolation and is unreliable.
        "R1：20 時間はデータの範囲（2 〜 12 時間）の外にあるので外挿であり、信頼できない。",
      ],
    },

    // ── t4-1-q020 · short · exam · SL · SL 4.2 · 4 marks
    "t4-1-q020": {
      // EN: <p>The test scores of two classes are summarized by these five-number summaries.<br>Class A: minimum <span class="chem">32</span>, <span class="chem">Q_1 = 48</span>, median <span class="chem">60</span>, <span class="chem">Q_3 = 74</span>, maximum <span class="chem">90</span>.<br>Class B: minimum <span class="chem">45</span>, <span class="chem">Q_1 = 58</span>, median <span class="chem">66</span>, <span class="chem">Q_3 = 72</span>, maximum <span class="chem">84</span>.<br>Compare the two distributions, referring to one measure of centre and one measure of spread. <strong>[4 marks]</strong></p>
      stem: "<p>2 つのクラスのテストの得点を次の 5 数要約で表す。<br>A 組：最小値 <span class=\"chem\">32</span>、<span class=\"chem\">Q_1 = 48</span>、中央値 <span class=\"chem\">60</span>、<span class=\"chem\">Q_3 = 74</span>、最大値 <span class=\"chem\">90</span>。<br>B 組：最小値 <span class=\"chem\">45</span>、<span class=\"chem\">Q_1 = 58</span>、中央値 <span class=\"chem\">66</span>、<span class=\"chem\">Q_3 = 72</span>、最大値 <span class=\"chem\">84</span>。<br>中心の尺度と散らばりの尺度を 1 つずつ用いて、2 つの分布を比較しなさい (Compare)。 <strong>[4 marks]</strong></p>",
      hints: [
        // EN: For centre compare the medians. For spread find <span class="chem">IQR = Q_3 - Q_1</span> for each class.
        "中心は中央値を比べ、散らばりは各クラスの <span class=\"chem\">IQR = Q_3 - Q_1</span> を求めて比べます。",
        // EN: Always say what each comparison means for the students' scores.
        "それぞれの比較が生徒の得点にとって何を意味するかを必ず書きましょう。",
      ],
      // EN: <p>Centre: the median of Class B (<span class="chem">66</span>) is higher than that of Class A (<span class="chem">60</span>) <b>[A1]</b>, so Class B generally scored higher <b>[R1]</b>.<br>Spread: <span class="chem">IQR_A = 74 - 48 = 26</span> and <span class="chem">IQR_B = 72 - 58 = 14</span> <b>[A1]</b>, so the middle 50% of Class A's scores are more spread out and Class B is more consistent <b>[R1]</b>.</p>
      solution: "<p>中心：B 組の中央値（<span class=\"chem\">66</span>）は A 組（<span class=\"chem\">60</span>）より高い <b>[A1]</b> ので、B 組のほうが全体的に得点が高い <b>[R1]</b>。<br>散らばり：<span class=\"chem\">IQR_A = 74 - 48 = 26</span>、<span class=\"chem\">IQR_B = 72 - 58 = 14</span> <b>[A1]</b> なので、A 組の中央 50% の得点のほうが散らばっており、B 組のほうが安定している <b>[R1]</b>。</p>",
      // EN: <p>Medians: Class B <span class="chem">66</span> &gt; Class A <span class="chem">60</span>, so Class B generally scored higher.<br><span class="chem">IQR</span>s: Class A <span class="chem">74 - 48 = 26</span>, Class B <span class="chem">72 - 58 = 14</span>, so the scores of Class A are more spread out (Class B is more consistent).</p>
      answer: "<p>中央値：B 組 <span class=\"chem\">66</span> &gt; A 組 <span class=\"chem\">60</span> なので、B 組のほうが全体的に得点が高い。<br><span class=\"chem\">IQR</span>：A 組 <span class=\"chem\">74 - 48 = 26</span>、B 組 <span class=\"chem\">72 - 58 = 14</span> なので、A 組の得点のほうが散らばっている（B 組のほうが安定している）。</p>",
      markscheme: [
        // EN: A1: States both medians, 60 (Class A) and 66 (Class B).
        "A1：2 つの中央値 60（A 組）と 66（B 組）を述べる。",
        // EN: R1: Concludes in context that Class B generally scored higher, because its median is higher.
        "R1：中央値が高いので B 組のほうが全体的に得点が高いと、文脈に即して結論づける。",
        // EN: A1: Finds IQR = 74 − 48 = 26 for Class A and IQR = 72 − 58 = 14 for Class B (or uses the ranges 58 and 39).
        "A1：A 組の IQR = 74 − 48 = 26、B 組の IQR = 72 − 58 = 14 を求める（または範囲 58 と 39 を用いる）。",
        // EN: R1: Concludes in context that the scores of Class A are more spread out (less consistent).
        "R1：A 組の得点のほうが散らばっている（安定していない）と、文脈に即して結論づける。",
      ],
    },

  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ja', 't4-1.q', {
  questions: {

    // ── t4-1-q021 · numeric · foundation · SL · SL 4.3 · 2 marks
    "t4-1-q021": {
      // EN: <p>The times, in seconds, that <span class="chem">12</span> students took to solve a logic puzzle are shown below.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Time (s)</th><td class="num">34</td><td class="num">41</td><td class="num">29</td><td class="num">52</td><td class="num">38</td><td class="num">45</td><td class="num">31</td><td class="num">47</td><td class="num">36</td><td class="num">40</td><td class="num">55</td><td class="num">33</td></tr></tbody></table></div><p>Find the standard deviation <span class="chem">σ</span> of the times.</p>
      stem: "<p><span class=\"chem\">12</span> 人の生徒が論理パズルを解くのにかかった時間（秒）を以下に示す。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">時間 (s)</th><td class=\"num\">34</td><td class=\"num\">41</td><td class=\"num\">29</td><td class=\"num\">52</td><td class=\"num\">38</td><td class=\"num\">45</td><td class=\"num\">31</td><td class=\"num\">47</td><td class=\"num\">36</td><td class=\"num\">40</td><td class=\"num\">55</td><td class=\"num\">33</td></tr></tbody></table></div><p>これらの時間の標準偏差 <span class=\"chem\">σ</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: Enter the <span class="chem">12</span> times in a list and run <span class="mono">1-Var Stats</span>.
        "<span class=\"chem\">12</span> 個の時間をリストに入力し、<span class=\"mono\">1-Var Stats</span> を実行します。",
        // EN: IB uses the population standard deviation, shown on the GDC as <span class="mono">σx</span> (not <span class="mono">Sx</span>).
        "IB では母集団の標準偏差を使います。GDC では <span class=\"mono\">σx</span> と表示されます（<span class=\"mono\">Sx</span> ではありません）。",
      ],
      // EN: <p>From the GDC (<span class="mono">1-Var Stats</span>): <span class="chem">x̄ = 40.0833</span> s and <span class="chem">σ = 7.9105… ≈ 7.91</span> s <b>[M1 A1]</b>.</p>
      solution: "<p>GDC（<span class=\"mono\">1-Var Stats</span>）より <span class=\"chem\">x̄ = 40.0833</span> s、<span class=\"chem\">σ = 7.9105… ≈ 7.91</span> s <b>[M1 A1]</b>。</p>",
    },

    // ── t4-1-q022 · numeric · exam · SL · SL 4.3 · 3 marks
    "t4-1-q022": {
      // EN: <p>A library records the number of books <span class="chem">x</span> borrowed in one week by each of its <span class="chem">50</span> members.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Books borrowed <span class="chem">x</span></th><td class="num">0</td><td class="num">1</td><td class="num">2</td><td class="num">3</td><td class="num">4</td><td class="num">5</td></tr><tr><th scope="row">Number of members <span class="chem">f</span></th><td class="num">6</td><td class="num">11</td><td class="num">14</td><td class="num">9</td><td class="num">7</td><td class="num">3</td></tr></tbody></table></div><p>Find the standard deviation of the number of books borrowed.</p>
      stem: "<p>ある図書館が、<span class=\"chem\">50</span> 人の会員それぞれが 一週間に借りた本の冊数 <span class=\"chem\">x</span> を記録した。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">借りた本の冊数 <span class=\"chem\">x</span></th><td class=\"num\">0</td><td class=\"num\">1</td><td class=\"num\">2</td><td class=\"num\">3</td><td class=\"num\">4</td><td class=\"num\">5</td></tr><tr><th scope=\"row\">会員数 <span class=\"chem\">f</span></th><td class=\"num\">6</td><td class=\"num\">11</td><td class=\"num\">14</td><td class=\"num\">9</td><td class=\"num\">7</td><td class=\"num\">3</td></tr></tbody></table></div><p>借りた本の冊数の標準偏差を求めなさい (Find)。</p>",
      hints: [
        // EN: Put the values in <span class="mono">L1</span> and the frequencies in <span class="mono">L2</span>, then run <span class="mono">1-Var Stats L1, L2</span> (FreqList = L2).
        "値を <span class=\"mono\">L1</span>、度数を <span class=\"mono\">L2</span> に入力し、<span class=\"mono\">1-Var Stats L1, L2</span>（FreqList = L2）を実行します。",
        // EN: Check that <span class="chem">n = 50</span> on the screen: if it shows <span class="chem">n = 6</span>, the frequencies were not used. Read <span class="mono">σx</span>.
        "画面で <span class=\"chem\">n = 50</span> になっているか確認しましょう。<span class=\"chem\">n = 6</span> と表示されたら度数が使われていません。<span class=\"mono\">σx</span> を読み取ります。",
      ],
      // EN: <p>With the frequencies as the frequency list, the GDC gives <span class="chem">n = 50</span>, <span class="chem">x̄ = 2.18</span> <b>[M1]</b> and <span class="chem">σ = 1.3956… ≈ 1.40</span> books <b>[A2]</b>.</p>
      solution: "<p>度数を度数リストとして使うと、GDC は <span class=\"chem\">n = 50</span>、<span class=\"chem\">x̄ = 2.18</span> <b>[M1]</b>、<span class=\"chem\">σ = 1.3956… ≈ 1.40</span> 冊 <b>[A2]</b> を与える。</p>",
    },

    // ── t4-1-q023 · short · exam · SL · SL 4.1, 4.2, 4.3 · 9 marks
    "t4-1-q023": {
      // EN: <p>The resting heart rates, in beats per minute (bpm), of <span class="chem">15</span> athletes are shown below.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Heart rate (bpm)</th><td class="num">52</td><td class="num">58</td><td class="num">61</td><td class="num">55</td><td class="num">49</td><td class="num">63</td><td class="num">57</td><td class="num">60</td><td class="num">54</td><td class="num">66</td><td class="num">59</td><td class="num">51</td><td class="num">62</td><td class="num">56</td><td class="num">88</td></tr></tbody></table></div><p>Quartiles are found by the GDC method: the median of each half of the ordered data, leaving out the overall median when the number of values is odd.<br>(a) Write down the median, the lower quartile <span class="chem">Q_1</span> and the upper quartile <span class="chem">Q_3</span>. <strong>[3 marks]</strong><br>(b) Show that <span class="chem">88</span> bpm is an outlier. <strong>[3 marks]</strong><br>(c) Find the mean and the standard deviation of the <span class="chem">15</span> heart rates. <strong>[2 marks]</strong><br>(d) The coach finds that the <span class="chem">88</span> bpm reading was taken straight after a warm-up run. State, with a reason, whether this value should be kept in the data. <strong>[1 mark]</strong></p>
      stem: "<p><span class=\"chem\">15</span> 人の運動選手の安静時心拍数（毎分の拍数、bpm）を以下に示す。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">心拍数 (bpm)</th><td class=\"num\">52</td><td class=\"num\">58</td><td class=\"num\">61</td><td class=\"num\">55</td><td class=\"num\">49</td><td class=\"num\">63</td><td class=\"num\">57</td><td class=\"num\">60</td><td class=\"num\">54</td><td class=\"num\">66</td><td class=\"num\">59</td><td class=\"num\">51</td><td class=\"num\">62</td><td class=\"num\">56</td><td class=\"num\">88</td></tr></tbody></table></div><p>四分位数は GDC の方法で求める：並べたデータの前半と後半それぞれの中央値をとり、値の個数が奇数のときは全体の中央値を除く。<br>(a) 中央値、第 1 四分位数 <span class=\"chem\">Q_1</span>、第 3 四分位数 <span class=\"chem\">Q_3</span> を書きなさい (Write down)。 <strong>[3 marks]</strong><br>(b) <span class=\"chem\">88</span> bpm が外れ値であることを示しなさい (Show that)。 <strong>[3 marks]</strong><br>(c) <span class=\"chem\">15</span> 個の心拍数の平均値と標準偏差を求めなさい (Find)。 <strong>[2 marks]</strong><br>(d) コーチは、<span class=\"chem\">88</span> bpm の測定値がウォームアップのランニング直後にとられたものだと気づいた。この値をデータに残すべきかどうかを、理由とともに述べなさい (State)。 <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Run <span class="mono">1-Var Stats</span>: it gives the median, <span class="chem">Q_1</span> and <span class="chem">Q_3</span>. With <span class="chem">n = 15</span>, the lower half is the 7 smallest values.
        "<span class=\"mono\">1-Var Stats</span> を実行すると、中央値、<span class=\"chem\">Q_1</span>、<span class=\"chem\">Q_3</span> が得られます。<span class=\"chem\">n = 15</span> のとき、前半は小さいほうから 7 個の値です。",
        // EN: An outlier lies more than <span class="chem">1.5 × IQR</span> above <span class="chem">Q_3</span> (or below <span class="chem">Q_1</span>). Write the fence as a number and compare.
        "外れ値は <span class=\"chem\">Q_3</span> より <span class=\"chem\">1.5 × IQR</span> を超えて大きい（または <span class=\"chem\">Q_1</span> より超えて小さい）値です。境界を数値で書いて比べましょう。",
        // EN: For (d), ask: is <span class="chem">88</span> an error for <em>this</em> variable, or a genuine extreme value?
        "(d) では、<span class=\"chem\">88</span> が<em>この</em>変数にとっての誤りなのか、本当に極端な値なのかを考えましょう。",
      ],
      // EN: <p>(a) Ordered: 49, 51, 52, 54, 55, 56, 57, <b>58</b>, 59, 60, 61, 62, 63, 66, 88. The median is the 8th value, <span class="chem">58</span> <b>[A1]</b>. The lower half 49 … 57 has median <span class="chem">Q_1 = 54</span> <b>[A1]</b>, and the upper half 59 … 88 has median <span class="chem">Q_3 = 62</span> <b>[A1]</b>.<br>(b) <span class="chem">IQR = 62 - 54 = 8</span> <b>[A1]</b>. Upper fence <span class="chem">= 62 + 1.5(8) = 74</span> <b>[M1]</b>. Since <span class="chem">88 &gt; 74</span>, 88 is an outlier <b>[R1]</b>.<br>(c) GDC: <span class="chem">x̄ = 59.4</span> bpm <b>[A1]</b>, <span class="chem">σ = 8.8904… ≈ 8.89</span> bpm <b>[A1]</b>.<br>(d) The reading was not taken at rest, so it is an error for the variable "resting heart rate". It should be removed (or the athlete re-measured) <b>[R1]</b>.</p>
      solution: "<p>(a) 小さい順：49, 51, 52, 54, 55, 56, 57, <b>58</b>, 59, 60, 61, 62, 63, 66, 88。中央値は 8 番目の値 <span class=\"chem\">58</span> <b>[A1]</b>。前半 49 … 57 の中央値は <span class=\"chem\">Q_1 = 54</span> <b>[A1]</b>、後半 59 … 88 の中央値は <span class=\"chem\">Q_3 = 62</span> <b>[A1]</b>。<br>(b) <span class=\"chem\">IQR = 62 - 54 = 8</span> <b>[A1]</b>。上側境界 <span class=\"chem\">= 62 + 1.5(8) = 74</span> <b>[M1]</b>。<span class=\"chem\">88 &gt; 74</span> なので 88 は外れ値である <b>[R1]</b>。<br>(c) GDC：<span class=\"chem\">x̄ = 59.4</span> bpm <b>[A1]</b>、<span class=\"chem\">σ = 8.8904… ≈ 8.89</span> bpm <b>[A1]</b>。<br>(d) この測定値は安静時にとられたものではないので、変数「安静時心拍数」にとっては誤りである。取り除く（またはその選手を測り直す）べきである <b>[R1]</b>。</p>",
      // EN: <p>(a) Median <span class="chem">58</span>, <span class="chem">Q_1 = 54</span>, <span class="chem">Q_3 = 62</span>.<br>(b) <span class="chem">IQR = 8</span>; upper fence <span class="chem">62 + 1.5(8) = 74</span> and <span class="chem">88 &gt; 74</span>, so 88 is an outlier.<br>(c) <span class="chem">x̄ = 59.4</span> bpm, <span class="chem">σ = 8.89</span> bpm.<br>(d) Remove it: it is not a <em>resting</em> heart rate, so it is a measurement error for this variable, not a genuine value.</p>
      answer: "<p>(a) 中央値 <span class=\"chem\">58</span>、<span class=\"chem\">Q_1 = 54</span>、<span class=\"chem\">Q_3 = 62</span>。<br>(b) <span class=\"chem\">IQR = 8</span>。上側境界 <span class=\"chem\">62 + 1.5(8) = 74</span> で <span class=\"chem\">88 &gt; 74</span> なので、88 は外れ値である。<br>(c) <span class=\"chem\">x̄ = 59.4</span> bpm、<span class=\"chem\">σ = 8.89</span> bpm。<br>(d) 取り除く：これは<em>安静時</em>の心拍数ではないので、本当の値ではなく、この変数にとっての測定の誤りである。</p>",
      markscheme: [
        // EN: A1: Median = 58 bpm.
        "A1：中央値 = 58 bpm。",
        // EN: A1: Q₁ = 54 bpm.
        "A1：Q₁ = 54 bpm。",
        // EN: A1: Q₃ = 62 bpm.
        "A1：Q₃ = 62 bpm。",
        // EN: A1: IQR = 62 − 54 = 8.
        "A1：IQR = 62 − 54 = 8。",
        // EN: M1: Upper fence Q₃ + 1.5 × IQR = 62 + 1.5(8) = 74.
        "M1：上側境界 Q₃ + 1.5 × IQR = 62 + 1.5(8) = 74。",
        // EN: R1: 88 > 74, so 88 is an outlier.
        "R1：88 > 74 なので、88 は外れ値である。",
        // EN: A1: Mean x̄ = 59.4 bpm.
        "A1：平均値 x̄ = 59.4 bpm。",
        // EN: A1: σ = 8.89 bpm (8.8904…).
        "A1：σ = 8.89 bpm (8.8904…)。",
        // EN: R1: Remove the value (or recheck it), because it was not measured at rest, so it does not belong to the data being studied.
        "R1：安静時に測られたものではなく、調べているデータに属さないので、その値を取り除く（または確認し直す）。",
      ],
    },

    // ── t4-1-q024 · numeric · exam · SL · SL 4.2, 4.3 · 3 marks
    "t4-1-q024": {
      // EN: <p>The reaction times, in seconds, of <span class="chem">12</span> drivers in a simulator are shown below.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Reaction time (s)</th><td class="num">0.42</td><td class="num">0.38</td><td class="num">0.51</td><td class="num">0.47</td><td class="num">0.36</td><td class="num">0.44</td><td class="num">0.59</td><td class="num">0.4</td><td class="num">0.49</td><td class="num">0.45</td><td class="num">0.53</td><td class="num">0.41</td></tr></tbody></table></div><p>Using the GDC method: the median of each half of the ordered data, leaving out the overall median when the number of values is odd, find the interquartile range of the reaction times.</p>
      stem: "<p>シミュレーターでの <span class=\"chem\">12</span> 人の運転者の反応時間（秒）を以下に示す。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">反応時間 (s)</th><td class=\"num\">0.42</td><td class=\"num\">0.38</td><td class=\"num\">0.51</td><td class=\"num\">0.47</td><td class=\"num\">0.36</td><td class=\"num\">0.44</td><td class=\"num\">0.59</td><td class=\"num\">0.4</td><td class=\"num\">0.49</td><td class=\"num\">0.45</td><td class=\"num\">0.53</td><td class=\"num\">0.41</td></tr></tbody></table></div><p>GDC の方法（並べたデータの前半と後半それぞれの中央値をとり、値の個数が奇数のときは全体の中央値を除く）を用いて、反応時間の四分位範囲を求めなさい (Find)。</p>",
      hints: [
        // EN: With <span class="chem">n = 12</span> (even), the lower half is the 6 smallest values and the upper half is the 6 largest.
        "<span class=\"chem\">n = 12</span>（偶数）なので、前半は小さいほうから 6 個、後半は大きいほうから 6 個の値です。",
        // EN: <span class="chem">Q_1</span> is the mean of the 3rd and 4th ordered values; <span class="chem">Q_3</span> is the mean of the 9th and 10th. Then <span class="chem">IQR = Q_3 - Q_1</span>.
        "<span class=\"chem\">Q_1</span> は小さい順で 3 番目と 4 番目の値の平均、<span class=\"chem\">Q_3</span> は 9 番目と 10 番目の値の平均です。そして <span class=\"chem\">IQR = Q_3 - Q_1</span> です。",
      ],
      // EN: <p>Ordered: 0.36, 0.38, 0.40, 0.41, 0.42, 0.44 | 0.45, 0.47, 0.49, 0.51, 0.53, 0.59.<br><span class="chem">Q_1 = (0.40 + 0.41)/2 = 0.405</span> and <span class="chem">Q_3 = (0.49 + 0.51)/2 = 0.5</span> <b>[A1 A1]</b> (these match <span class="mono">1-Var Stats</span>).<br><span class="chem">IQR = 0.5 - 0.405 = 0.095</span> s <b>[A1]</b>.</p>
      solution: "<p>小さい順：0.36, 0.38, 0.40, 0.41, 0.42, 0.44 | 0.45, 0.47, 0.49, 0.51, 0.53, 0.59。<br><span class=\"chem\">Q_1 = (0.40 + 0.41)/2 = 0.405</span>、<span class=\"chem\">Q_3 = (0.49 + 0.51)/2 = 0.5</span> <b>[A1 A1]</b>（<span class=\"mono\">1-Var Stats</span> の結果と一致する）。<br><span class=\"chem\">IQR = 0.5 - 0.405 = 0.095</span> s <b>[A1]</b>。</p>",
    },

    // ── t4-1-q025 · short · exam · SL · SL 4.4 · 9 marks
    "t4-1-q025": {
      // EN: <p>An estate agent records the distance <span class="chem">x</span> km from the city centre and the average price <span class="chem">y</span> (in thousands of euros) of a two-bedroom flat in <span class="chem">8</span> districts.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Distance <span class="chem">x</span> (km)</th><td class="num">1.2</td><td class="num">2.5</td><td class="num">3.1</td><td class="num">4.8</td><td class="num">5.5</td><td class="num">6.9</td><td class="num">8.2</td><td class="num">9.6</td></tr><tr><th scope="row">Price <span class="chem">y</span> (thousand €)</th><td class="num">412</td><td class="num">388</td><td class="num">371</td><td class="num">344</td><td class="num">330</td><td class="num">305</td><td class="num">289</td><td class="num">262</td></tr></tbody></table></div><p>(a) Find Pearson's product-moment correlation coefficient <span class="chem">r</span>. <strong>[2 marks]</strong><br>(b) Describe the correlation between distance and price. <strong>[1 mark]</strong><br>(c) Find the equation of the regression line of <span class="chem">y</span> on <span class="chem">x</span>. <strong>[2 marks]</strong><br>(d) Interpret the gradient of the line in context. <strong>[1 mark]</strong><br>(e) Use the line to estimate the average price in a district <span class="chem">7.5</span> km from the centre. <strong>[2 marks]</strong><br>(f) Explain why the line should not be used for a village <span class="chem">15</span> km from the centre. <strong>[1 mark]</strong></p>
      stem: "<p>ある不動産業者が、<span class=\"chem\">8</span> つの地区について、市の中心からの距離 <span class=\"chem\">x</span> km と 二寝室のアパートの平均価格 <span class=\"chem\">y</span>（千ユーロ単位）を記録した。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">距離 <span class=\"chem\">x</span> (km)</th><td class=\"num\">1.2</td><td class=\"num\">2.5</td><td class=\"num\">3.1</td><td class=\"num\">4.8</td><td class=\"num\">5.5</td><td class=\"num\">6.9</td><td class=\"num\">8.2</td><td class=\"num\">9.6</td></tr><tr><th scope=\"row\">価格 <span class=\"chem\">y</span> (千 €)</th><td class=\"num\">412</td><td class=\"num\">388</td><td class=\"num\">371</td><td class=\"num\">344</td><td class=\"num\">330</td><td class=\"num\">305</td><td class=\"num\">289</td><td class=\"num\">262</td></tr></tbody></table></div><p>(a) ピアソンの積率相関係数 <span class=\"chem\">r</span> を求めなさい (Find)。 <strong>[2 marks]</strong><br>(b) 距離と価格の相関を述べなさい (Describe)。 <strong>[1 mark]</strong><br>(c) <span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線の方程式を求めなさい (Find)。 <strong>[2 marks]</strong><br>(d) この直線の傾きを文脈に即して解釈しなさい (Interpret)。 <strong>[1 mark]</strong><br>(e) この直線を用いて、中心から <span class=\"chem\">7.5</span> km の地区の平均価格を推定しなさい (estimate)。 <strong>[2 marks]</strong><br>(f) 中心から <span class=\"chem\">15</span> km の村にこの直線を使うべきでない理由を説明しなさい (Explain)。 <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: (a)–(c) are all one GDC run: <span class="mono">LinReg(ax+b) L1, L2</span> with diagnostics on, so that <span class="chem">r</span> is shown.
        "解読：(a)〜(c) はすべて GDC の一回の実行で求まります。<span class=\"chem\">r</span> が表示されるよう診断機能 (diagnostics) をオンにして <span class=\"mono\">LinReg(ax+b) L1, L2</span> を実行します。",
        // EN: For (d), say what one extra km does to the price, with units. A negative gradient means a decrease.
        "(d) では、距離が 一キロメートル 増えると価格がどうなるかを単位つきで述べます。傾きが負なら減少を意味します。",
        // EN: For (f), compare <span class="chem">15</span> with the smallest and largest <span class="chem">x</span>-values.
        "(f) では、<span class=\"chem\">15</span> を <span class=\"chem\">x</span> の最小値・最大値と比べましょう。",
      ],
      // EN: <p>(a) GDC: <span class="chem">r = -0.99812… ≈ -0.998</span> <b>[M1 A1]</b>.<br>(b) Strong negative linear correlation: the further from the centre, the lower the price <b>[A1]</b>.<br>(c) <span class="chem">a = -17.6117…</span>, <span class="chem">b = 429.646…</span>, so <span class="chem">y = -17.6x + 430</span> <b>[A1 A1]</b>.<br>(d) Each additional km from the centre is associated with a fall of about <span class="chem">17.6</span> thousand euros in the average price <b>[A1]</b>.<br>(e) <span class="chem">y = -17.6117(7.5) + 429.646 = 297.558… ≈ 298</span> thousand euros <b>[M1 A1]</b>. This is interpolation (7.5 is inside the data range).<br>(f) <span class="chem">x = 15</span> is outside <span class="chem">1.2 ≤ x ≤ 9.6</span>, so the estimate would be an extrapolation and the linear pattern may not continue <b>[R1]</b>.</p>
      solution: "<p>(a) GDC：<span class=\"chem\">r = -0.99812… ≈ -0.998</span> <b>[M1 A1]</b>。<br>(b) 強い負の線形相関：中心から遠いほど価格が低い <b>[A1]</b>。<br>(c) <span class=\"chem\">a = -17.6117…</span>、<span class=\"chem\">b = 429.646…</span> なので <span class=\"chem\">y = -17.6x + 430</span> <b>[A1 A1]</b>。<br>(d) 中心から 一キロメートル 離れるごとに、平均価格はおよそ <span class=\"chem\">17.6</span> 千ユーロ下がる <b>[A1]</b>。<br>(e) <span class=\"chem\">y = -17.6117(7.5) + 429.646 = 297.558… ≈ 298</span> 千ユーロ <b>[M1 A1]</b>。これは内挿である（7.5 はデータの範囲内）。<br>(f) <span class=\"chem\">x = 15</span> は <span class=\"chem\">1.2 ≤ x ≤ 9.6</span> の外にあるので、この推定は外挿になり、線形の傾向が続くとは限らない <b>[R1]</b>。</p>",
      // EN: <p>(a) <span class="chem">r = -0.998</span><br>(b) Strong negative linear correlation: prices fall as distance increases.<br>(c) <span class="chem">y = -17.6x + 430</span><br>(d) For each extra km from the centre, the average price falls by about <span class="chem">17.6</span> thousand euros (about €17 600).<br>(e) <span class="chem">y ≈ 298</span> thousand euros.<br>(f) <span class="chem">15</span> km is outside the data range <span class="chem">1.2 ≤ x ≤ 9.6</span>, so this would be extrapolation.</p>
      answer: "<p>(a) <span class=\"chem\">r = -0.998</span><br>(b) 強い負の線形相関：距離が大きくなるほど価格が下がる。<br>(c) <span class=\"chem\">y = -17.6x + 430</span><br>(d) 中心から 一キロメートル 離れるごとに、平均価格はおよそ <span class=\"chem\">17.6</span> 千ユーロ（約 €17 600）下がる。<br>(e) <span class=\"chem\">y ≈ 298</span> 千ユーロ。<br>(f) <span class=\"chem\">15</span> km はデータの範囲 <span class=\"chem\">1.2 ≤ x ≤ 9.6</span> の外にあるので、外挿になる。</p>",
      markscheme: [
        // EN: M1: Uses the GDC with x in L1 and y in L2 (LinReg(ax+b)).
        "M1：x を L1、y を L2 に入力して GDC（LinReg(ax+b)）を使う。",
        // EN: A1: r = -0.998 (-0.99812…).
        "A1：r = -0.998 (-0.99812…)。",
        // EN: A1: Strong negative (linear) correlation, in context.
        "A1：文脈に即して、強い負の（線形）相関。",
        // EN: A1: a = -17.6.
        "A1：a = -17.6。",
        // EN: A1: b = 430, giving y = -17.6x + 430.
        "A1：b = 430、よって y = -17.6x + 430。",
        // EN: A1: Each extra km is associated with a price about 17.6 thousand euros lower, on average.
        "A1：一キロメートル 離れるごとに、価格は平均しておよそ 17.6 千ユーロ低くなる。",
        // EN: M1: Substitutes x = 7.5 into the regression line.
        "M1：回帰直線に x = 7.5 を代入する。",
        // EN: A1: y ≈ 298 thousand euros.
        "A1：y ≈ 298 千ユーロ。",
        // EN: R1: 15 km is outside the observed distances (1.2 to 9.6 km): extrapolation, so unreliable.
        "R1：15 km は観測された距離（1.2 〜 9.6 km）の外にあるので外挿であり、信頼できない。",
      ],
    },

    // ── t4-1-q026 · numeric · exam · SL · SL 4.4 · 2 marks
    "t4-1-q026": {
      // EN: <p>Ten students recorded their daily screen time <span class="chem">x</span> hours and their sleep <span class="chem">y</span> hours on the same night.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Screen time <span class="chem">x</span> (h)</th><td class="num">2.1</td><td class="num">3.4</td><td class="num">1.2</td><td class="num">4.8</td><td class="num">3.9</td><td class="num">5.6</td><td class="num">2.7</td><td class="num">4.3</td><td class="num">6.2</td><td class="num">1.8</td></tr><tr><th scope="row">Sleep <span class="chem">y</span> (h)</th><td class="num">8.4</td><td class="num">7.6</td><td class="num">8.9</td><td class="num">6.8</td><td class="num">7.5</td><td class="num">6.4</td><td class="num">7.9</td><td class="num">7.3</td><td class="num">6</td><td class="num">8.1</td></tr></tbody></table></div><p>Find Pearson's product-moment correlation coefficient <span class="chem">r</span> between screen time and sleep.</p>
      stem: "<p>十人の生徒が、一日のスクリーンタイム <span class=\"chem\">x</span> 時間と同じ夜の睡眠時間 <span class=\"chem\">y</span> 時間を記録した。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">スクリーンタイム <span class=\"chem\">x</span> (h)</th><td class=\"num\">2.1</td><td class=\"num\">3.4</td><td class=\"num\">1.2</td><td class=\"num\">4.8</td><td class=\"num\">3.9</td><td class=\"num\">5.6</td><td class=\"num\">2.7</td><td class=\"num\">4.3</td><td class=\"num\">6.2</td><td class=\"num\">1.8</td></tr><tr><th scope=\"row\">睡眠 <span class=\"chem\">y</span> (h)</th><td class=\"num\">8.4</td><td class=\"num\">7.6</td><td class=\"num\">8.9</td><td class=\"num\">6.8</td><td class=\"num\">7.5</td><td class=\"num\">6.4</td><td class=\"num\">7.9</td><td class=\"num\">7.3</td><td class=\"num\">6</td><td class=\"num\">8.1</td></tr></tbody></table></div><p>スクリーンタイムと睡眠時間のピアソンの積率相関係数 <span class=\"chem\">r</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: Enter screen time in <span class="mono">L1</span> and sleep in <span class="mono">L2</span> (keep each pair together), then run <span class="mono">LinReg(ax+b)</span>.
        "スクリーンタイムを <span class=\"mono\">L1</span>、睡眠時間を <span class=\"mono\">L2</span> に入力し（各組を対応させたまま）、<span class=\"mono\">LinReg(ax+b)</span> を実行します。",
        // EN: If <span class="chem">r</span> does not appear, turn on diagnostics (TI) or read it from the regression results screen.
        "<span class=\"chem\">r</span> が表示されない場合は、診断機能 (diagnostics) をオンにする（TI）か、回帰の結果画面から読み取ります。",
      ],
      // EN: <p>GDC (<span class="mono">LinReg(ax+b) L1, L2</span>): <span class="chem">r = -0.98391… ≈ -0.984</span> <b>[M1 A1]</b>, a strong negative linear correlation.</p>
      solution: "<p>GDC（<span class=\"mono\">LinReg(ax+b) L1, L2</span>）：<span class=\"chem\">r = -0.98391… ≈ -0.984</span> <b>[M1 A1]</b>。強い負の線形相関である。</p>",
    },

    // ── t4-1-q027 · numeric · exam · SL · SL 4.4 · 3 marks
    "t4-1-q027": {
      // EN: <p>A chemist sets the temperature <span class="chem">x</span> °C of a beaker of water and measures the mass <span class="chem">y</span> grams of a salt that dissolves in it.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Temperature <span class="chem">x</span> (°C)</th><td class="num">10</td><td class="num">20</td><td class="num">30</td><td class="num">40</td><td class="num">50</td><td class="num">60</td></tr><tr><th scope="row">Mass dissolved <span class="chem">y</span> (g)</th><td class="num">35.8</td><td class="num">38.9</td><td class="num">41.7</td><td class="num">45.2</td><td class="num">47.9</td><td class="num">51.3</td></tr></tbody></table></div><p>Use the regression line of <span class="chem">y</span> on <span class="chem">x</span> to estimate the mass that dissolves at <span class="chem">45</span> °C.</p>
      stem: "<p>化学者がビーカーの水の温度を <span class=\"chem\">x</span> °C に設定し、そこに溶ける塩の質量 <span class=\"chem\">y</span> グラムを測定した。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">温度 <span class=\"chem\">x</span> (°C)</th><td class=\"num\">10</td><td class=\"num\">20</td><td class=\"num\">30</td><td class=\"num\">40</td><td class=\"num\">50</td><td class=\"num\">60</td></tr><tr><th scope=\"row\">溶けた質量 <span class=\"chem\">y</span> (g)</th><td class=\"num\">35.8</td><td class=\"num\">38.9</td><td class=\"num\">41.7</td><td class=\"num\">45.2</td><td class=\"num\">47.9</td><td class=\"num\">51.3</td></tr></tbody></table></div><p><span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線を用いて、<span class=\"chem\">45</span> °C で溶ける質量を推定しなさい (estimate)。</p>",
      hints: [
        // EN: Run <span class="mono">LinReg(ax+b)</span> with temperature as the <span class="chem">x</span>-list.
        "温度を <span class=\"chem\">x</span> のリストにして <span class=\"mono\">LinReg(ax+b)</span> を実行します。",
        // EN: Substitute <span class="chem">x = 45</span> using the unrounded values of <span class="chem">a</span> and <span class="chem">b</span> (store the line in <span class="mono">Y1</span>).
        "<span class=\"chem\">a</span> と <span class=\"chem\">b</span> の丸めていない値を使って <span class=\"chem\">x = 45</span> を代入します（直線を <span class=\"mono\">Y1</span> に保存します）。",
      ],
      // EN: <p>GDC: <span class="chem">y = 0.308571x + 32.6667</span> (<span class="chem">r = 1.00</span>) <b>[M1 A1]</b>.<br><span class="chem">y(45) = 46.552… ≈ 46.6</span> g <b>[A1]</b>. Since 45 °C lies inside the range 10–60 °C and <span class="chem">r</span> is very close to 1, this interpolation is reliable.</p>
      solution: "<p>GDC：<span class=\"chem\">y = 0.308571x + 32.6667</span>（<span class=\"chem\">r = 1.00</span>）<b>[M1 A1]</b>。<br><span class=\"chem\">y(45) = 46.552… ≈ 46.6</span> g <b>[A1]</b>。45 °C は範囲 10–60 °C の内側にあり、<span class=\"chem\">r</span> が 1 に非常に近いので、この内挿は信頼できる。</p>",
    },

    // ── t4-1-q028 · short · exam · SL · SL 4.4, 4.10 · 7 marks
    "t4-1-q028": {
      // EN: <p>Ten students sat two papers. Their marks on Paper A, <span class="chem">x</span>, and Paper B, <span class="chem">y</span>, are shown below.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Paper A mark <span class="chem">x</span></th><td class="num">45</td><td class="num">52</td><td class="num">61</td><td class="num">38</td><td class="num">70</td><td class="num">58</td><td class="num">66</td><td class="num">49</td><td class="num">75</td><td class="num">55</td></tr><tr><th scope="row">Paper B mark <span class="chem">y</span></th><td class="num">50</td><td class="num">55</td><td class="num">60</td><td class="num">44</td><td class="num">72</td><td class="num">54</td><td class="num">70</td><td class="num">47</td><td class="num">78</td><td class="num">61</td></tr></tbody></table></div><p>(a) Find the value of <span class="chem">r</span> and comment on it. <strong>[2 marks]</strong><br>(b) Find the equation of the regression line of <span class="chem">x</span> on <span class="chem">y</span>, in the form <span class="chem">x = cy + d</span>. <strong>[2 marks]</strong><br>(c) Another student was absent for Paper A and scored <span class="chem">62</span> on Paper B. Estimate the mark this student would have scored on Paper A. <strong>[2 marks]</strong><br>(d) Explain why the regression line of <span class="chem">y</span> on <span class="chem">x</span> should not be rearranged to answer part (c). <strong>[1 mark]</strong></p>
      stem: "<p>十人の生徒が 二種類の試験を受けた。Paper A の得点 <span class=\"chem\">x</span> と Paper B の得点 <span class=\"chem\">y</span> を以下に示す。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">Paper A の得点 <span class=\"chem\">x</span></th><td class=\"num\">45</td><td class=\"num\">52</td><td class=\"num\">61</td><td class=\"num\">38</td><td class=\"num\">70</td><td class=\"num\">58</td><td class=\"num\">66</td><td class=\"num\">49</td><td class=\"num\">75</td><td class=\"num\">55</td></tr><tr><th scope=\"row\">Paper B の得点 <span class=\"chem\">y</span></th><td class=\"num\">50</td><td class=\"num\">55</td><td class=\"num\">60</td><td class=\"num\">44</td><td class=\"num\">72</td><td class=\"num\">54</td><td class=\"num\">70</td><td class=\"num\">47</td><td class=\"num\">78</td><td class=\"num\">61</td></tr></tbody></table></div><p>(a) <span class=\"chem\">r</span> の値を求め、それについて述べなさい (Find, comment)。 <strong>[2 marks]</strong><br>(b) <span class=\"chem\">x</span> の <span class=\"chem\">y</span> への回帰直線の方程式を <span class=\"chem\">x = cy + d</span> の形で求めなさい (Find)。 <strong>[2 marks]</strong><br>(c) 別の生徒は Paper A を欠席し、Paper B で <span class=\"chem\">62</span> 点をとった。この生徒が Paper A でとったであろう得点を推定しなさい (Estimate)。 <strong>[2 marks]</strong><br>(d) (c) に答えるのに <span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線を変形して使うべきでない理由を説明しなさい (Explain)。 <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: you are given a Paper B mark (<span class="chem">y</span>) and asked for a Paper A mark (<span class="chem">x</span>). Predicting <span class="chem">x</span> from <span class="chem">y</span> needs the <span class="chem">x</span>-on-<span class="chem">y</span> line (SL 4.10).
        "解読：Paper B の得点（<span class=\"chem\">y</span>）が与えられ、Paper A の得点（<span class=\"chem\">x</span>）を求めます。<span class=\"chem\">y</span> から <span class=\"chem\">x</span> を予測するには <span class=\"chem\">x</span> の <span class=\"chem\">y</span> への回帰直線が必要です (SL 4.10)。",
        // EN: On the GDC swap the lists: put the <span class="chem">y</span>-marks as the Xlist and the <span class="chem">x</span>-marks as the Ylist. The "slope" shown is <span class="chem">c</span> and the "intercept" is <span class="chem">d</span>.
        "GDC ではリストを入れ替えます：<span class=\"chem\">y</span> の得点を Xlist、<span class=\"chem\">x</span> の得点を Ylist にします。表示される \"slope\" が <span class=\"chem\">c</span>、\"intercept\" が <span class=\"chem\">d</span> です。",
        // EN: Substitute <span class="chem">y = 62</span> into <span class="chem">x = cy + d</span>.
        "<span class=\"chem\">y = 62</span> を <span class=\"chem\">x = cy + d</span> に代入します。",
      ],
      // EN: <p>(a) GDC: <span class="chem">r = 0.95409… ≈ 0.954</span> <b>[A1]</b>: a strong positive linear correlation <b>[R1]</b>.<br>(b) <span class="mono">LinReg(ax+b) L2, L1</span> (the <span class="chem">y</span>-marks as Xlist) gives <span class="chem">c = 0.97140…</span> and <span class="chem">d = -0.5098…</span> <b>[M1]</b>, so <span class="chem">x = 0.971y − 0.510</span> <b>[A1]</b>.<br>(c) <span class="chem">x = 0.97140(62) − 0.5098 = 59.717… ≈ 59.7</span> <b>[M1 A1]</b>, about 60 marks. (62 is inside the Paper B range 44–78, so this is interpolation.)<br>(d) The <span class="chem">y</span>-on-<span class="chem">x</span> line minimises the squared vertical distances, so it is designed to predict <span class="chem">y</span>. Rearranging it would give <span class="chem">x ≈ 60.0</span>, a different (biased) value, because <span class="chem">|r| &lt; 1</span> <b>[R1]</b>.</p>
      solution: "<p>(a) GDC：<span class=\"chem\">r = 0.95409… ≈ 0.954</span> <b>[A1]</b>。強い正の線形相関である <b>[R1]</b>。<br>(b) <span class=\"mono\">LinReg(ax+b) L2, L1</span>（<span class=\"chem\">y</span> の得点を Xlist にする）より <span class=\"chem\">c = 0.97140…</span>、<span class=\"chem\">d = -0.5098…</span> <b>[M1]</b>、よって <span class=\"chem\">x = 0.971y − 0.510</span> <b>[A1]</b>。<br>(c) <span class=\"chem\">x = 0.97140(62) − 0.5098 = 59.717… ≈ 59.7</span> <b>[M1 A1]</b>、およそ 60 点。（62 は Paper B の範囲 44–78 の内側にあるので、これは内挿である。）<br>(d) <span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線は縦方向の距離の 二乗の和を最小にするので、<span class=\"chem\">y</span> を予測するためのものである。これを変形すると <span class=\"chem\">x ≈ 60.0</span> という別の（偏った）値になる。<span class=\"chem\">|r| &lt; 1</span> だからである <b>[R1]</b>。</p>",
      // EN: <p>(a) <span class="chem">r = 0.954</span>: strong positive linear correlation.<br>(b) <span class="chem">x = 0.971y − 0.510</span><br>(c) <span class="chem">x ≈ 59.7</span>, so about <span class="chem">60</span> marks.<br>(d) The <span class="chem">y</span>-on-<span class="chem">x</span> line minimises vertical (<span class="chem">y</span>) errors and is for predicting <span class="chem">y</span> from <span class="chem">x</span>. To predict <span class="chem">x</span> from a given <span class="chem">y</span> we need the line that minimises horizontal errors: <span class="chem">x</span> on <span class="chem">y</span>.</p>
      answer: "<p>(a) <span class=\"chem\">r = 0.954</span>：強い正の線形相関。<br>(b) <span class=\"chem\">x = 0.971y − 0.510</span><br>(c) <span class=\"chem\">x ≈ 59.7</span>、つまりおよそ <span class=\"chem\">60</span> 点。<br>(d) <span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線は縦方向（<span class=\"chem\">y</span>）の誤差を最小にし、<span class=\"chem\">x</span> から <span class=\"chem\">y</span> を予測するためのものである。与えられた <span class=\"chem\">y</span> から <span class=\"chem\">x</span> を予測するには、横方向の誤差を最小にする直線、つまり <span class=\"chem\">x</span> の <span class=\"chem\">y</span> への回帰直線が必要である。</p>",
      markscheme: [
        // EN: A1: r = 0.954.
        "A1：r = 0.954。",
        // EN: R1: Strong positive linear correlation (students who do well on one paper tend to do well on the other).
        "R1：強い正の線形相関（一方の試験でよくできた生徒はもう一方でもよくできる傾向がある）。",
        // EN: M1: Uses the GDC with y as the explanatory list (LinReg with Xlist = y-values, Ylist = x-values).
        "M1：y を説明変数のリストとして GDC を使う（Xlist = y の値、Ylist = x の値で LinReg）。",
        // EN: A1: x = 0.971y − 0.510.
        "A1：x = 0.971y − 0.510。",
        // EN: M1: Substitutes y = 62 into the x-on-y line.
        "M1：x の y への回帰直線に y = 62 を代入する。",
        // EN: A1: x ≈ 59.7 (accept 60 marks).
        "A1：x ≈ 59.7（60 点も可）。",
        // EN: R1: The y-on-x line minimises errors in y, so it is not the least-squares line for predicting x; the x-on-y line is.
        "R1：y の x への回帰直線は y の誤差を最小にするので、x を予測するための最小二乗直線ではない。x の y への回帰直線がそれである。",
      ],
    },

    // ── t4-1-q029 · numeric · exam · SL · SL 4.10 · 3 marks
    "t4-1-q029": {
      // EN: <p>A forensic scientist measures the foot length <span class="chem">x</span> cm and the height <span class="chem">y</span> cm of <span class="chem">8</span> adults.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Foot length <span class="chem">x</span> (cm)</th><td class="num">23.5</td><td class="num">25.2</td><td class="num">26.8</td><td class="num">24.1</td><td class="num">27.5</td><td class="num">22.8</td><td class="num">25.9</td><td class="num">28.3</td></tr><tr><th scope="row">Height <span class="chem">y</span> (cm)</th><td class="num">160</td><td class="num">171</td><td class="num">178</td><td class="num">166</td><td class="num">183</td><td class="num">158</td><td class="num">174</td><td class="num">187</td></tr></tbody></table></div><p>A suspect is known to be <span class="chem">172</span> cm tall. Using an appropriate regression line, estimate the suspect's foot length.</p>
      stem: "<p>法科学者が <span class=\"chem\">8</span> 人の成人の足の長さ <span class=\"chem\">x</span> cm と身長 <span class=\"chem\">y</span> cm を測定した。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">足の長さ <span class=\"chem\">x</span> (cm)</th><td class=\"num\">23.5</td><td class=\"num\">25.2</td><td class=\"num\">26.8</td><td class=\"num\">24.1</td><td class=\"num\">27.5</td><td class=\"num\">22.8</td><td class=\"num\">25.9</td><td class=\"num\">28.3</td></tr><tr><th scope=\"row\">身長 <span class=\"chem\">y</span> (cm)</th><td class=\"num\">160</td><td class=\"num\">171</td><td class=\"num\">178</td><td class=\"num\">166</td><td class=\"num\">183</td><td class=\"num\">158</td><td class=\"num\">174</td><td class=\"num\">187</td></tr></tbody></table></div><p>ある容疑者の身長は <span class=\"chem\">172</span> cm であることがわかっている。適切な回帰直線を用いて、この容疑者の足の長さを推定しなさい (estimate)。</p>",
      hints: [
        // EN: Decode: the height <span class="chem">y</span> is given and the foot length <span class="chem">x</span> is wanted, so you need the regression line of <span class="chem">x</span> on <span class="chem">y</span>.
        "解読：身長 <span class=\"chem\">y</span> が与えられ、足の長さ <span class=\"chem\">x</span> を求めるので、<span class=\"chem\">x</span> の <span class=\"chem\">y</span> への回帰直線が必要です。",
        // EN: Run <span class="mono">LinReg(ax+b)</span> with the heights as the Xlist and the foot lengths as the Ylist, then substitute <span class="chem">172</span>.
        "身長を Xlist、足の長さを Ylist にして <span class=\"mono\">LinReg(ax+b)</span> を実行し、<span class=\"chem\">172</span> を代入します。",
      ],
      // EN: <p>Decode: predict <span class="chem">x</span> from <span class="chem">y</span>, so use <span class="chem">x</span> on <span class="chem">y</span> <b>[M1]</b>.<br>GDC: <span class="chem">x = 0.18756y − 6.7719</span> <b>[A1]</b>.<br><span class="chem">x = 0.18756(172) − 6.7719 = 25.4891… ≈ 25.5</span> cm <b>[A1]</b>.</p>
      solution: "<p>解読：<span class=\"chem\">y</span> から <span class=\"chem\">x</span> を予測するので、<span class=\"chem\">x</span> の <span class=\"chem\">y</span> への回帰直線を使う <b>[M1]</b>。<br>GDC：<span class=\"chem\">x = 0.18756y − 6.7719</span> <b>[A1]</b>。<br><span class=\"chem\">x = 0.18756(172) − 6.7719 = 25.4891… ≈ 25.5</span> cm <b>[A1]</b>。</p>",
    },

    // ── t4-1-q030 · numeric · exam · SL · SL 4.3 · 3 marks
    "t4-1-q030": {
      // EN: <p>The ages <span class="chem">A</span> years of the <span class="chem">80</span> members of a climbing club are summarised below.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Age <span class="chem">A</span> (years)</th><td class="num">15 ≤ <i>A</i> &lt; 25</td><td class="num">25 ≤ <i>A</i> &lt; 35</td><td class="num">35 ≤ <i>A</i> &lt; 45</td><td class="num">45 ≤ <i>A</i> &lt; 55</td><td class="num">55 ≤ <i>A</i> &lt; 65</td></tr><tr><th scope="row">Frequency</th><td class="num">14</td><td class="num">23</td><td class="num">19</td><td class="num">15</td><td class="num">9</td></tr></tbody></table></div><p>Find an estimate of the mean age of the members.</p>
      stem: "<p>ある登山クラブの会員 <span class=\"chem\">80</span> 人の年齢 <span class=\"chem\">A</span> 歳を次の表にまとめた。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">年齢 <span class=\"chem\">A</span>（歳）</th><td class=\"num\">15 ≤ <i>A</i> &lt; 25</td><td class=\"num\">25 ≤ <i>A</i> &lt; 35</td><td class=\"num\">35 ≤ <i>A</i> &lt; 45</td><td class=\"num\">45 ≤ <i>A</i> &lt; 55</td><td class=\"num\">55 ≤ <i>A</i> &lt; 65</td></tr><tr><th scope=\"row\">度数</th><td class=\"num\">14</td><td class=\"num\">23</td><td class=\"num\">19</td><td class=\"num\">15</td><td class=\"num\">9</td></tr></tbody></table></div><p>会員の年齢の平均値の推定値を求めなさい (Find)。</p>",
      hints: [
        // EN: Use the mid-interval values <span class="chem">20, 30, 40, 50, 60</span> as the data and the frequencies as the frequency list.
        "階級値 <span class=\"chem\">20, 30, 40, 50, 60</span> をデータとし、度数を度数リストとして使います。",
        // EN: <span class="chem">x̄ ≈ (Σ f x) / (Σ f)</span>. Check that <span class="chem">Σ f = 80</span>.
        "<span class=\"chem\">x̄ ≈ (Σ f x) / (Σ f)</span>。<span class=\"chem\">Σ f = 80</span> を確認しましょう。",
      ],
      // EN: <p>Mid-interval values <span class="chem">20, 30, 40, 50, 60</span> <b>[M1]</b>.<br><span class="chem">Σ f x = 280 + 690 + 760 + 750 + 540 = 3020</span> <b>[A1]</b>, so <span class="chem">x̄ ≈ 3020 / 80 = 37.75 ≈ 37.8</span> years <b>[A1]</b> (GDC with the frequency list gives the same value).</p>
      solution: "<p>階級値 <span class=\"chem\">20, 30, 40, 50, 60</span> <b>[M1]</b>。<br><span class=\"chem\">Σ f x = 280 + 690 + 760 + 750 + 540 = 3020</span> <b>[A1]</b>、よって <span class=\"chem\">x̄ ≈ 3020 / 80 = 37.75 ≈ 37.8</span> 歳 <b>[A1]</b>（度数リストを使った GDC でも同じ値になる）。</p>",
      // EN: years
      unit: "歳",
    },

    // ── t4-1-q031 · short · exam · SL · SL 4.2, 4.3 · 6 marks
    "t4-1-q031": {
      // EN: <p>The lengths <span class="chem">L</span> cm of <span class="chem">60</span> fish caught in a lake are shown in the table.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Length <span class="chem">L</span> (cm)</th><td class="num">20 ≤ <i>L</i> &lt; 24</td><td class="num">24 ≤ <i>L</i> &lt; 28</td><td class="num">28 ≤ <i>L</i> &lt; 32</td><td class="num">32 ≤ <i>L</i> &lt; 36</td><td class="num">36 ≤ <i>L</i> &lt; 40</td></tr><tr><th scope="row">Frequency</th><td class="num">7</td><td class="num">15</td><td class="num">19</td><td class="num">12</td><td class="num">7</td></tr></tbody></table></div><p>(a) Write down the modal class. <strong>[1 mark]</strong><br>(b) Find an estimate of the mean length. <strong>[2 marks]</strong><br>(c) Find an estimate of the standard deviation of the lengths. <strong>[2 marks]</strong><br>(d) Explain why the answers to (b) and (c) are only estimates. <strong>[1 mark]</strong></p>
      stem: "<p>ある湖でとれた <span class=\"chem\">60</span> 匹の魚の体長 <span class=\"chem\">L</span> cm を表に示す。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">体長 <span class=\"chem\">L</span> (cm)</th><td class=\"num\">20 ≤ <i>L</i> &lt; 24</td><td class=\"num\">24 ≤ <i>L</i> &lt; 28</td><td class=\"num\">28 ≤ <i>L</i> &lt; 32</td><td class=\"num\">32 ≤ <i>L</i> &lt; 36</td><td class=\"num\">36 ≤ <i>L</i> &lt; 40</td></tr><tr><th scope=\"row\">度数</th><td class=\"num\">7</td><td class=\"num\">15</td><td class=\"num\">19</td><td class=\"num\">12</td><td class=\"num\">7</td></tr></tbody></table></div><p>(a) 最頻値を含む階級（最頻階級）を書きなさい (Write down)。 <strong>[1 mark]</strong><br>(b) 体長の平均値の推定値を求めなさい (Find)。 <strong>[2 marks]</strong><br>(c) 体長の標準偏差の推定値を求めなさい (Find)。 <strong>[2 marks]</strong><br>(d) (b) と (c) の答えが推定値にすぎない理由を説明しなさい (Explain)。 <strong>[1 mark]</strong></p>",
      hints: [
        // EN: The modal class is the class with the highest frequency (the classes have equal width), not a single value.
        "最頻階級は度数が最も大きい階級です（階級の幅は等しい）。一つの値ではありません。",
        // EN: Mid-interval values: <span class="chem">22, 26, 30, 34, 38</span>. Put them in <span class="mono">L1</span> and the frequencies in <span class="mono">L2</span>.
        "階級値：<span class=\"chem\">22, 26, 30, 34, 38</span>。これを <span class=\"mono\">L1</span>、度数を <span class=\"mono\">L2</span> に入力します。",
      ],
      // EN: <p>(a) The largest frequency is 19, so the modal class is <span class="chem">28 ≤ L &lt; 32</span> <b>[A1]</b>.<br>(b) With mid-interval values <span class="chem">22, 26, 30, 34, 38</span> <b>[M1]</b>: <span class="chem">x̄ ≈ (154 + 390 + 570 + 408 + 266)/60 = 1788/60 = 29.8</span> cm <b>[A1]</b>.<br>(c) GDC (<span class="mono">1-Var Stats L1, L2</span>) <b>[M1]</b>: <span class="chem">σ ≈ 4.7004… ≈ 4.70</span> cm <b>[A1]</b>.<br>(d) The original lengths are lost when the data are grouped; every fish in a class is assumed to have the mid-interval length <b>[R1]</b>.</p>
      solution: "<p>(a) 最大の度数は 19 なので、最頻階級は <span class=\"chem\">28 ≤ L &lt; 32</span> <b>[A1]</b>。<br>(b) 階級値 <span class=\"chem\">22, 26, 30, 34, 38</span> を用いて <b>[M1]</b>：<span class=\"chem\">x̄ ≈ (154 + 390 + 570 + 408 + 266)/60 = 1788/60 = 29.8</span> cm <b>[A1]</b>。<br>(c) GDC（<span class=\"mono\">1-Var Stats L1, L2</span>）<b>[M1]</b>：<span class=\"chem\">σ ≈ 4.7004… ≈ 4.70</span> cm <b>[A1]</b>。<br>(d) データを階級に分けると元の体長はわからなくなり、各階級の魚はすべて階級値の体長をもつと仮定される <b>[R1]</b>。</p>",
      // EN: <p>(a) <span class="chem">28 ≤ L &lt; 32</span><br>(b) <span class="chem">x̄ ≈ 29.8</span> cm<br>(c) <span class="chem">σ ≈ 4.70</span> cm<br>(d) The individual lengths are not known: each fish is treated as if its length were the mid-interval value.</p>
      answer: "<p>(a) <span class=\"chem\">28 ≤ L &lt; 32</span><br>(b) <span class=\"chem\">x̄ ≈ 29.8</span> cm<br>(c) <span class=\"chem\">σ ≈ 4.70</span> cm<br>(d) 個々の体長はわからない：各魚の体長を階級値であるかのように扱っている。</p>",
      markscheme: [
        // EN: A1: Modal class 28 ≤ L < 32 (frequency 19).
        "A1：最頻階級 28 ≤ L < 32（度数 19）。",
        // EN: M1: Uses the mid-interval values 22, 26, 30, 34, 38 with the frequencies.
        "M1：階級値 22, 26, 30, 34, 38 を度数とともに使う。",
        // EN: A1: Mean ≈ 29.8 cm.
        "A1：平均値 ≈ 29.8 cm。",
        // EN: M1: Uses the GDC (1-Var Stats with the frequency list) and reads σx.
        "M1：GDC（度数リストつきの 1-Var Stats）を使い、σx を読み取る。",
        // EN: A1: σ ≈ 4.70 cm (4.7004…).
        "A1：σ ≈ 4.70 cm (4.7004…)。",
        // EN: R1: The raw data are grouped, so the mid-interval values stand in for the actual lengths.
        "R1：元のデータが階級に分けられているので、実際の体長の代わりに階級値を使っている。",
      ],
    },

    // ── t4-1-q032 · numeric · challenge · SL · SL 4.3 · 4 marks
    "t4-1-q032": {
      // EN: <p>A polar research station records the midday temperature, in °C, on <span class="chem">10</span> days.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Temperature (°C)</th><td class="num">-4.2</td><td class="num">-1.8</td><td class="num">0.5</td><td class="num">2.3</td><td class="num">-3.1</td><td class="num">1.7</td><td class="num">-0.6</td><td class="num">3.4</td><td class="num">-2.5</td><td class="num">0.9</td></tr></tbody></table></div><p>A visiting team from the USA converts every reading to degrees Fahrenheit using <span class="chem">F = 1.8C + 32</span>. Find the standard deviation of the <span class="chem">10</span> temperatures in °F.</p>
      stem: "<p>ある極地研究基地が <span class=\"chem\">10</span> 日間の正午の気温（°C）を記録した。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">気温 (°C)</th><td class=\"num\">-4.2</td><td class=\"num\">-1.8</td><td class=\"num\">0.5</td><td class=\"num\">2.3</td><td class=\"num\">-3.1</td><td class=\"num\">1.7</td><td class=\"num\">-0.6</td><td class=\"num\">3.4</td><td class=\"num\">-2.5</td><td class=\"num\">0.9</td></tr></tbody></table></div><p>アメリカから訪れたチームが、<span class=\"chem\">F = 1.8C + 32</span> を用いてすべての測定値を華氏に換算する。<span class=\"chem\">10</span> 個の気温の °F での標準偏差を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: this is "effect of constant changes" (SL 4.3). Each value is multiplied by <span class="chem">1.8</span> and then has <span class="chem">32</span> added. Only one of these changes the spread.
        "解読：これは「定数による変換の影響」(SL 4.3) です。各値に <span class=\"chem\">1.8</span> を掛け、それから <span class=\"chem\">32</span> を足します。散らばりを変えるのはこのうち一方だけです。",
        // EN: Find <span class="chem">σ_C</span> of the Celsius data on the GDC.
        "GDC で摂氏のデータの <span class=\"chem\">σ_C</span> を求めます。",
        // EN: Then <span class="chem">σ_F = 1.8 σ_C</span>: adding <span class="chem">32</span> does not change the standard deviation. (Or convert all ten values and run <span class="mono">1-Var Stats</span> again as a check.)
        "次に <span class=\"chem\">σ_F = 1.8 σ_C</span> です。<span class=\"chem\">32</span> を足しても標準偏差は変わりません。（確認として、十個の値をすべて換算して <span class=\"mono\">1-Var Stats</span> を再度実行してもかまいません。）",
      ],
      // EN: <p><b>Decode:</b> a linear change <span class="chem">F = 1.8C + 32</span> multiplies the standard deviation by <span class="chem">|1.8|</span> and the shift <span class="chem">+32</span> has no effect on spread.<br>GDC: <span class="chem">σ_C = 2.3821…</span> °C <b>[M1 A1]</b>.<br><span class="chem">σ_F = 1.8 × 2.3821… = 4.2878… ≈ 4.29</span> °F <b>[M1 A1]</b>.</p>
      solution: "<p><b>解読：</b>一次変換 <span class=\"chem\">F = 1.8C + 32</span> は標準偏差を <span class=\"chem\">|1.8|</span> 倍し、平行移動 <span class=\"chem\">+32</span> は散らばりに影響しない。<br>GDC：<span class=\"chem\">σ_C = 2.3821…</span> °C <b>[M1 A1]</b>。<br><span class=\"chem\">σ_F = 1.8 × 2.3821… = 4.2878… ≈ 4.29</span> °F <b>[M1 A1]</b>。</p>",
    },

    // ── t4-1-q033 · short · challenge · SL · SL 4.1, 4.2, 4.3 · 10 marks
    "t4-1-q033": {
      // EN: <p>A quality-control technician weighs <span class="chem">11</span> tablets from a batch labelled "500 mg". The masses, in mg, are:</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Mass (mg)</th><td class="num">498</td><td class="num">502</td><td class="num">505</td><td class="num">497</td><td class="num">501</td><td class="num">499</td><td class="num">503</td><td class="num">540</td><td class="num">500</td><td class="num">496</td><td class="num">504</td></tr></tbody></table></div><p>Quartiles are found by the GDC method: the median of each half of the ordered data, leaving out the overall median when the number of values is odd.<br>(a) Write down <span class="chem">Q_1</span> and <span class="chem">Q_3</span>. <strong>[2 marks]</strong><br>(b) Show that the data contain exactly one outlier. <strong>[3 marks]</strong><br>(c) Find the mean and standard deviation of the <span class="chem">11</span> masses as recorded. <strong>[2 marks]</strong><br>(d) The technician realises that the outlier was a typing error: the digits of the true mass <span class="chem">504</span> mg were typed in the wrong order. Find the corrected mean and standard deviation. <strong>[2 marks]</strong><br>(e) State which of the two statistics in (c) was affected more by the error, in relative terms. <strong>[1 mark]</strong></p>
      stem: "<p>品質管理の技術者が、\"500 mg\" と表示されたロットから <span class=\"chem\">11</span> 錠の錠剤の質量を量った。質量（mg）は次のとおりである：</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">質量 (mg)</th><td class=\"num\">498</td><td class=\"num\">502</td><td class=\"num\">505</td><td class=\"num\">497</td><td class=\"num\">501</td><td class=\"num\">499</td><td class=\"num\">503</td><td class=\"num\">540</td><td class=\"num\">500</td><td class=\"num\">496</td><td class=\"num\">504</td></tr></tbody></table></div><p>四分位数は GDC の方法で求める：並べたデータの前半と後半それぞれの中央値をとり、値の個数が奇数のときは全体の中央値を除く。<br>(a) <span class=\"chem\">Q_1</span> と <span class=\"chem\">Q_3</span> を書きなさい (Write down)。 <strong>[2 marks]</strong><br>(b) データにちょうど 一つの外れ値があることを示しなさい (Show that)。 <strong>[3 marks]</strong><br>(c) 記録されたとおりの <span class=\"chem\">11</span> 個の質量の平均値と標準偏差を求めなさい (Find)。 <strong>[2 marks]</strong><br>(d) 技術者は、外れ値が入力ミスであったことに気づいた：本当の質量 <span class=\"chem\">504</span> mg の数字の順序を間違えて入力していた。訂正後の平均値と標準偏差を求めなさい (Find)。 <strong>[2 marks]</strong><br>(e) (c) の 二つの統計量のうち、相対的に見て誤りの影響をより大きく受けたのはどちらかを述べなさい (State)。 <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: (b) says "exactly one", so you must show one value is beyond a fence AND that every other value is inside both fences. In (d), "digits in the wrong order" tells you which recorded value was really 504.
        "解読：(b) は「ちょうど 一つ」なので、一つの値が境界の外にあること、かつ他のすべての値が両方の境界の内側にあることを示す必要があります。(d) の「数字の順序の間違い」から、記録されたどの値が本当は 504 だったかがわかります。",
        // EN: Run <span class="mono">1-Var Stats</span> for <span class="chem">Q_1</span> and <span class="chem">Q_3</span>. Then the fences are <span class="chem">Q_1 - 1.5 IQR</span> and <span class="chem">Q_3 + 1.5 IQR</span>.
        "<span class=\"mono\">1-Var Stats</span> を実行して <span class=\"chem\">Q_1</span> と <span class=\"chem\">Q_3</span> を求めます。境界は <span class=\"chem\">Q_1 - 1.5 IQR</span> と <span class=\"chem\">Q_3 + 1.5 IQR</span> です。",
        // EN: For (d), replace 540 by 504 in the list and run <span class="mono">1-Var Stats</span> again.
        "(d) では、リストの 540 を 504 に置き換えて <span class=\"mono\">1-Var Stats</span> をもう一度実行します。",
      ],
      // EN: <p><b>Decode:</b> "exactly one outlier" needs both fences and a check of the nearest values; "digits in the wrong order" means 540 should be 504.<br>(a) Ordered: 496, 497, 498, 499, 500, <b>501</b>, 502, 503, 504, 505, 540. <span class="chem">Q_1 = 498</span> and <span class="chem">Q_3 = 504</span> <b>[A1 A1]</b>.<br>(b) <span class="chem">IQR = 6</span>, <span class="chem">1.5 × IQR = 9</span>, fences <span class="chem">489</span> and <span class="chem">513</span> <b>[A1]</b>. <span class="chem">540 &gt; 513</span> is an outlier <b>[R1]</b>. All other values lie in <span class="chem">[496, 505]</span>, inside the fences, so 540 is the only one <b>[R1]</b>.<br>(c) GDC: <span class="chem">x̄ = 504.091… ≈ 504.1</span> mg <b>[A1]</b>, <span class="chem">σ = 11.681… ≈ 11.7</span> mg <b>[A1]</b>.<br>(d) With 504 in place of 540: <span class="chem">x̄ = 500.818… ≈ 500.8</span> mg <b>[A1]</b>, <span class="chem">σ = 2.918… ≈ 2.92</span> mg <b>[A1]</b>.<br>(e) The mean moved by about 3 mg (under 1%), but the standard deviation fell from about 11.7 to about 2.92 mg: the standard deviation was affected much more <b>[R1]</b>.</p>
      solution: "<p><b>解読：</b>「ちょうど 一つの外れ値」には両方の境界と、それに最も近い値の確認が必要である。「数字の順序の間違い」は 540 が本来 504 であることを意味する。<br>(a) 小さい順：496, 497, 498, 499, 500, <b>501</b>, 502, 503, 504, 505, 540。<span class=\"chem\">Q_1 = 498</span>、<span class=\"chem\">Q_3 = 504</span> <b>[A1 A1]</b>。<br>(b) <span class=\"chem\">IQR = 6</span>、<span class=\"chem\">1.5 × IQR = 9</span>、境界は <span class=\"chem\">489</span> と <span class=\"chem\">513</span> <b>[A1]</b>。<span class=\"chem\">540 &gt; 513</span> なので外れ値である <b>[R1]</b>。他のすべての値は <span class=\"chem\">[496, 505]</span> にあり境界の内側なので、外れ値は 540 だけである <b>[R1]</b>。<br>(c) GDC：<span class=\"chem\">x̄ = 504.091… ≈ 504.1</span> mg <b>[A1]</b>、<span class=\"chem\">σ = 11.681… ≈ 11.7</span> mg <b>[A1]</b>。<br>(d) 540 の代わりに 504 とすると：<span class=\"chem\">x̄ = 500.818… ≈ 500.8</span> mg <b>[A1]</b>、<span class=\"chem\">σ = 2.918… ≈ 2.92</span> mg <b>[A1]</b>。<br>(e) 平均値の変化は約 3 mg（1% 未満）だが、標準偏差は約 11.7 から約 2.92 mg に下がった：標準偏差のほうがはるかに大きく影響を受けた <b>[R1]</b>。</p>",
      // EN: <p>(a) <span class="chem">Q_1 = 498</span>, <span class="chem">Q_3 = 504</span><br>(b) <span class="chem">IQR = 6</span>; fences <span class="chem">489</span> and <span class="chem">513</span>. Only <span class="chem">540 &gt; 513</span>; all other values lie between the fences.<br>(c) <span class="chem">x̄ = 504.1</span> mg, <span class="chem">σ = 11.7</span> mg<br>(d) <span class="chem">x̄ = 500.8</span> mg, <span class="chem">σ = 2.92</span> mg<br>(e) The standard deviation (it fell to about a quarter of its value; the mean changed by less than 1%).</p>
      answer: "<p>(a) <span class=\"chem\">Q_1 = 498</span>、<span class=\"chem\">Q_3 = 504</span><br>(b) <span class=\"chem\">IQR = 6</span>。境界は <span class=\"chem\">489</span> と <span class=\"chem\">513</span>。<span class=\"chem\">540 &gt; 513</span> となるのはこの値だけで、他のすべての値は境界の間にある。<br>(c) <span class=\"chem\">x̄ = 504.1</span> mg、<span class=\"chem\">σ = 11.7</span> mg<br>(d) <span class=\"chem\">x̄ = 500.8</span> mg、<span class=\"chem\">σ = 2.92</span> mg<br>(e) 標準偏差（その値の約 四分の一 に下がった。平均値の変化は 1% 未満）。</p>",
      markscheme: [
        // EN: A1: Q₁ = 498 mg.
        "A1：Q₁ = 498 mg。",
        // EN: A1: Q₃ = 504 mg.
        "A1：Q₃ = 504 mg。",
        // EN: A1: IQR = 6, so the fences are 498 − 9 = 489 and 504 + 9 = 513.
        "A1：IQR = 6、よって境界は 498 − 9 = 489 と 504 + 9 = 513。",
        // EN: R1: 540 > 513, so 540 is an outlier.
        "R1：540 > 513 なので、540 は外れ値である。",
        // EN: R1: The smallest value 496 > 489 and the next largest 505 < 513, so there are no other outliers.
        "R1：最小値 496 > 489、その次に大きい値 505 < 513 なので、他に外れ値はない。",
        // EN: A1: x̄ = 504.1 mg.
        "A1：x̄ = 504.1 mg。",
        // EN: A1: σ = 11.7 mg.
        "A1：σ = 11.7 mg。",
        // EN: A1: Corrected x̄ = 500.8 mg.
        "A1：訂正後の x̄ = 500.8 mg。",
        // EN: A1: Corrected σ = 2.92 mg.
        "A1：訂正後の σ = 2.92 mg。",
        // EN: R1: The standard deviation was affected much more than the mean.
        "R1：標準偏差のほうが平均値よりはるかに大きく影響を受けた。",
      ],
    },

    // ── t4-1-q034 · numeric · challenge · SL · SL 4.4 · 3 marks
    "t4-1-q034": {
      // EN: <p>The owner of a beach kiosk notes the maximum temperature <span class="chem">T</span> °C and the number <span class="chem">N</span> of ice creams sold on <span class="chem">8</span> summer days.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Temperature <span class="chem">T</span> (°C)</th><td class="num">18</td><td class="num">21</td><td class="num">23</td><td class="num">25</td><td class="num">26</td><td class="num">28</td><td class="num">30</td><td class="num">32</td></tr><tr><th scope="row">Ice creams sold <span class="chem">N</span></th><td class="num">54</td><td class="num">66</td><td class="num">71</td><td class="num">80</td><td class="num">84</td><td class="num">93</td><td class="num">99</td><td class="num">110</td></tr></tbody></table></div><p>She wants to know how many extra ice creams she can expect to sell, according to a linear model fitted to these data, for each additional degree of temperature. Find this number.</p>
      stem: "<p>海辺の売店の店主が、夏の <span class=\"chem\">8</span> 日間について最高気温 <span class=\"chem\">T</span> °C と売れたアイスクリームの個数 <span class=\"chem\">N</span> を記録した。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">気温 <span class=\"chem\">T</span> (°C)</th><td class=\"num\">18</td><td class=\"num\">21</td><td class=\"num\">23</td><td class=\"num\">25</td><td class=\"num\">26</td><td class=\"num\">28</td><td class=\"num\">30</td><td class=\"num\">32</td></tr><tr><th scope=\"row\">売れたアイスクリーム <span class=\"chem\">N</span></th><td class=\"num\">54</td><td class=\"num\">66</td><td class=\"num\">71</td><td class=\"num\">80</td><td class=\"num\">84</td><td class=\"num\">93</td><td class=\"num\">99</td><td class=\"num\">110</td></tr></tbody></table></div><p>彼女は、これらのデータに当てはめた線形モデルによれば、気温が 一度上がるごとにアイスクリームが何個多く売れると期待できるかを知りたい。この数を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: "how many extra for each additional degree" is the rate of change of <span class="chem">N</span> with <span class="chem">T</span>: the gradient <span class="chem">a</span> of the regression line of <span class="chem">N</span> on <span class="chem">T</span>. It is not a prediction for one particular day.
        "解読：「一度上がるごとに何個多く」は <span class=\"chem\">T</span> に対する <span class=\"chem\">N</span> の変化率、つまり <span class=\"chem\">N</span> の <span class=\"chem\">T</span> への回帰直線の傾き <span class=\"chem\">a</span> です。特定の 一日についての予測ではありません。",
        // EN: Run <span class="mono">LinReg(ax+b)</span> with <span class="chem">T</span> as the Xlist and <span class="chem">N</span> as the Ylist.
        "<span class=\"chem\">T</span> を Xlist、<span class=\"chem\">N</span> を Ylist にして <span class=\"mono\">LinReg(ax+b)</span> を実行します。",
        // EN: Give the gradient <span class="chem">a</span> to 3 significant figures (it is an average rate, so it need not be a whole number).
        "傾き <span class=\"chem\">a</span> を有効数字 3 桁で答えます（平均の変化率なので整数である必要はありません）。",
      ],
      // EN: <p><b>Decode:</b> extra sales per extra degree = gradient of the <span class="chem">N</span>-on-<span class="chem">T</span> regression line.<br>GDC: <span class="chem">N = 3.93498T − 17.725</span>, <span class="chem">r = 0.998</span> <b>[M1 A1]</b>.<br>So she can expect about <span class="chem">a ≈ 3.93</span> extra ice creams for each additional °C <b>[A1]</b>.</p>
      solution: "<p><b>解読：</b>一度あたりの売上の増加 = <span class=\"chem\">N</span> の <span class=\"chem\">T</span> への回帰直線の傾き。<br>GDC：<span class=\"chem\">N = 3.93498T − 17.725</span>、<span class=\"chem\">r = 0.998</span> <b>[M1 A1]</b>。<br>よって、一度上がるごとにおよそ <span class=\"chem\">a ≈ 3.93</span> 個多くアイスクリームが売れると期待できる <b>[A1]</b>。</p>",
      // EN: ice creams per °C
      unit: "個／°C",
    },

    // ── t4-1-q035 · short · challenge · SL · SL 4.1, 4.4 · 8 marks
    "t4-1-q035": {
      // EN: <p>A biology class grows <span class="chem">9</span> seedlings. For each one they record the mean daily hours of light <span class="chem">x</span> and the growth <span class="chem">y</span> cm after three weeks.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Light <span class="chem">x</span> (h)</th><td class="num">3</td><td class="num">4.5</td><td class="num">5</td><td class="num">6</td><td class="num">7.5</td><td class="num">8</td><td class="num">9</td><td class="num">10</td><td class="num">7</td></tr><tr><th scope="row">Growth <span class="chem">y</span> (cm)</th><td class="num">2.1</td><td class="num">3</td><td class="num">3.4</td><td class="num">4.1</td><td class="num">5</td><td class="num">5.3</td><td class="num">6</td><td class="num">6.6</td><td class="num">1.2</td></tr></tbody></table></div><p>(a) Find the correlation coefficient <span class="chem">r</span> for all <span class="chem">9</span> seedlings. <strong>[1 mark]</strong><br>(b) One point does not fit the pattern. Identify it, and find <span class="chem">r</span> for the other <span class="chem">8</span> seedlings. <strong>[2 marks]</strong><br>(c) The teacher later finds that this seedling had a fungal disease. Find the regression line of <span class="chem">y</span> on <span class="chem">x</span> for the <span class="chem">8</span> healthy seedlings, and use it to estimate the growth of a healthy seedling given <span class="chem">6.5</span> hours of light per day. <strong>[4 marks]</strong><br>(d) Justify the decision to leave the diseased seedling out of the model. <strong>[1 mark]</strong></p>
      stem: "<p>生物のクラスで <span class=\"chem\">9</span> 本の苗を育てる。それぞれについて、一日の平均照射時間 <span class=\"chem\">x</span> と三週間後の成長 <span class=\"chem\">y</span> cm を記録した。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">光 <span class=\"chem\">x</span> (h)</th><td class=\"num\">3</td><td class=\"num\">4.5</td><td class=\"num\">5</td><td class=\"num\">6</td><td class=\"num\">7.5</td><td class=\"num\">8</td><td class=\"num\">9</td><td class=\"num\">10</td><td class=\"num\">7</td></tr><tr><th scope=\"row\">成長 <span class=\"chem\">y</span> (cm)</th><td class=\"num\">2.1</td><td class=\"num\">3</td><td class=\"num\">3.4</td><td class=\"num\">4.1</td><td class=\"num\">5</td><td class=\"num\">5.3</td><td class=\"num\">6</td><td class=\"num\">6.6</td><td class=\"num\">1.2</td></tr></tbody></table></div><p>(a) <span class=\"chem\">9</span> 本すべての苗についての相関係数 <span class=\"chem\">r</span> を求めなさい (Find)。 <strong>[1 mark]</strong><br>(b) 一つの点が傾向に合っていない。その点を特定し、残りの <span class=\"chem\">8</span> 本の苗についての <span class=\"chem\">r</span> を求めなさい (Identify, find)。 <strong>[2 marks]</strong><br>(c) 先生は後になって、この苗がカビによる病気にかかっていたことに気づいた。<span class=\"chem\">8</span> 本の健康な苗について <span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線を求め、それを用いて一日あたり <span class=\"chem\">6.5</span> 時間の光を与えた健康な苗の成長を推定しなさい (Find, estimate)。 <strong>[4 marks]</strong><br>(d) 病気の苗をモデルから除くという判断を正当化しなさい (Justify)。 <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: this is about outliers in bivariate data (SL 4.1, 4.4). Removing a point is only justified for a reason in context, not just because it spoils <span class="chem">r</span>.
        "解読：これは 二変量データにおける外れ値の問題です (SL 4.1, 4.4)。点を除いてよいのは文脈上の理由があるときだけで、<span class=\"chem\">r</span> を悪くするからという理由だけではいけません。",
        // EN: Run <span class="mono">LinReg(ax+b)</span> on all 9 pairs, then delete the pair that sits far below the others and run it again.
        "9 組すべてで <span class=\"mono\">LinReg(ax+b)</span> を実行し、次に他から大きく下に外れている組を削除してもう一度実行します。",
        // EN: In (c) the estimate at <span class="chem">x = 6.5</span> is interpolation because <span class="chem">3.0 ≤ 6.5 ≤ 10.0</span>.
        "(c) で <span class=\"chem\">x = 6.5</span> での推定は、<span class=\"chem\">3.0 ≤ 6.5 ≤ 10.0</span> なので内挿です。",
      ],
      // EN: <p><b>Decode:</b> compare <span class="chem">r</span> with and without the odd point, then decide on context grounds whether it belongs in the model.<br>(a) All 9: <span class="chem">r = 0.7683… ≈ 0.768</span> <b>[A1]</b>.<br>(b) The point <span class="chem">(7.0, 1.2)</span> lies far below the trend <b>[A1]</b>. Without it, <span class="chem">r = 0.99969… ≈ 0.9997</span> <b>[A1]</b>, an almost perfect positive linear correlation.<br>(c) For the 8 healthy seedlings <b>[M1]</b>: <span class="chem">y = 0.64675x + 0.15279</span> ≈ <span class="chem">0.647x + 0.153</span> <b>[A1]</b>. Then <span class="chem">y(6.5) = 4.3567… ≈ 4.36</span> cm <b>[M1 A1]</b>.<br>(d) The value is genuine, but it was caused by disease rather than by the amount of light. The model is for healthy seedlings, so this point is not part of that population and should be left out <b>[R1]</b>.</p>
      solution: "<p><b>解読：</b>外れた点がある場合とない場合の <span class=\"chem\">r</span> を比べ、その点がモデルに属するかどうかを文脈に基づいて判断する。<br>(a) 9 本すべて：<span class=\"chem\">r = 0.7683… ≈ 0.768</span> <b>[A1]</b>。<br>(b) 点 <span class=\"chem\">(7.0, 1.2)</span> は傾向から大きく下に外れている <b>[A1]</b>。この点を除くと <span class=\"chem\">r = 0.99969… ≈ 0.9997</span> <b>[A1]</b>、ほぼ完全な正の線形相関である。<br>(c) 8 本の健康な苗について <b>[M1]</b>：<span class=\"chem\">y = 0.64675x + 0.15279</span> ≈ <span class=\"chem\">0.647x + 0.153</span> <b>[A1]</b>。すると <span class=\"chem\">y(6.5) = 4.3567… ≈ 4.36</span> cm <b>[M1 A1]</b>。<br>(d) この値は本物だが、光の量ではなく病気によって生じたものである。モデルは健康な苗のためのものなので、この点はその母集団に属さず、除くべきである <b>[R1]</b>。</p>",
      // EN: <p>(a) <span class="chem">r = 0.768</span><br>(b) <span class="chem">(7.0, 1.2)</span>; without it <span class="chem">r = 0.9997</span> (<span class="chem">≈ 1.00</span>)<br>(c) <span class="chem">y = 0.647x + 0.153</span>; <span class="chem">y(6.5) ≈ 4.36</span> cm<br>(d) The seedling is not from the population being modelled (healthy seedlings): its low growth was caused by disease, not by light, so it would distort the model.</p>
      answer: "<p>(a) <span class=\"chem\">r = 0.768</span><br>(b) <span class=\"chem\">(7.0, 1.2)</span>。これを除くと <span class=\"chem\">r = 0.9997</span>（<span class=\"chem\">≈ 1.00</span>）<br>(c) <span class=\"chem\">y = 0.647x + 0.153</span>；<span class=\"chem\">y(6.5) ≈ 4.36</span> cm<br>(d) この苗はモデル化している母集団（健康な苗）に属さない：成長が小さかったのは光ではなく病気が原因なので、モデルをゆがめてしまう。</p>",
      markscheme: [
        // EN: A1: r = 0.768 (all 9 seedlings).
        "A1：r = 0.768（9 本すべての苗）。",
        // EN: A1: Identifies the point (7.0, 1.2).
        "A1：点 (7.0, 1.2) を特定する。",
        // EN: A1: r = 0.9997 for the other 8 seedlings.
        "A1：残りの 8 本の苗について r = 0.9997。",
        // EN: M1: Uses LinReg(ax+b) on the 8 healthy seedlings only.
        "M1：8 本の健康な苗だけで LinReg(ax+b) を使う。",
        // EN: A1: y = 0.647x + 0.153.
        "A1：y = 0.647x + 0.153。",
        // EN: M1: Substitutes x = 6.5.
        "M1：x = 6.5 を代入する。",
        // EN: A1: Growth ≈ 4.36 cm.
        "A1：成長 ≈ 4.36 cm。",
        // EN: R1: The diseased seedling is a genuine but unrepresentative value caused by another factor, so it does not belong to the population (healthy seedlings) the model describes.
        "R1：病気の苗は本物だが別の要因による代表的でない値であり、モデルが表す母集団（健康な苗）に属さない。",
      ],
    },

    // ── t4-1-q036 · numeric · challenge · SL · SL 4.3 · 4 marks
    "t4-1-q036": {
      // EN: <p>Eight runners each recorded the distance, in km, that they ran on a Sunday. Seven of the distances are shown below; the eighth runner's record was smudged and is labelled <span class="chem">k</span>.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Distance (km)</th><td class="num">12.4</td><td class="num">15.1</td><td class="num">9.8</td><td class="num">13.6</td><td class="num">11.2</td><td class="num">14.7</td><td class="num">10.9</td><td class="num"><i>k</i></td></tr></tbody></table></div><p>The mean distance of the eight runners is <span class="chem">12.5</span> km. Find the standard deviation of the eight distances.</p>
      stem: "<p>八人のランナーがそれぞれ、ある日曜日に走った距離（km）を記録した。そのうち七人の距離を以下に示す。八人目のランナーの記録はにじんで読めず、<span class=\"chem\">k</span> と表す。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">距離 (km)</th><td class=\"num\">12.4</td><td class=\"num\">15.1</td><td class=\"num\">9.8</td><td class=\"num\">13.6</td><td class=\"num\">11.2</td><td class=\"num\">14.7</td><td class=\"num\">10.9</td><td class=\"num\"><i>k</i></td></tr></tbody></table></div><p>八人のランナーの距離の平均値は <span class=\"chem\">12.5</span> km である。八つの距離の標準偏差を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: you cannot find <span class="chem">σ</span> until the list is complete. The mean gives you the missing value first.
        "解読：リストがそろうまで <span class=\"chem\">σ</span> は求められません。まず平均値から欠けている値を求めます。",
        // EN: <span class="chem">Σ x = 8 × 12.5 = 100</span>, so <span class="chem">k = 100 -</span> (sum of the seven known distances).
        "<span class=\"chem\">Σ x = 8 × 12.5 = 100</span> なので、<span class=\"chem\">k = 100 -</span>（わかっている七つの距離の和）です。",
        // EN: Put all eight values in a list and read <span class="mono">σx</span> from <span class="mono">1-Var Stats</span>.
        "八つの値すべてをリストに入力し、<span class=\"mono\">1-Var Stats</span> から <span class=\"mono\">σx</span> を読み取ります。",
      ],
      // EN: <p><b>Decode:</b> use the mean to recover <span class="chem">k</span>, then find <span class="chem">σ</span> of all eight values.<br>Sum of the seven known values <span class="chem">= 87.7</span>, so <span class="chem">k = 100 - 87.7 = 12.3</span> km <b>[M1 A1]</b>.<br>GDC with all eight values: <span class="chem">x̄ = 12.5</span> (check) and <span class="chem">σ = 1.7464… ≈ 1.75</span> km <b>[M1 A1]</b>.</p>
      solution: "<p><b>解読：</b>平均値を使って <span class=\"chem\">k</span> を求め、それから八つの値すべての <span class=\"chem\">σ</span> を求める。<br>わかっている七つの値の和 <span class=\"chem\">= 87.7</span>、よって <span class=\"chem\">k = 100 - 87.7 = 12.3</span> km <b>[M1 A1]</b>。<br>八つの値すべてで GDC：<span class=\"chem\">x̄ = 12.5</span>（確認）、<span class=\"chem\">σ = 1.7464… ≈ 1.75</span> km <b>[M1 A1]</b>。</p>",
    },

    // ── t4-1-q037 · short · challenge · SL · SL 4.4, 4.10 · 9 marks
    "t4-1-q037": {
      // EN: <p>A coach records the 100 m sprint time <span class="chem">x</span> seconds and the long-jump distance <span class="chem">y</span> metres of <span class="chem">8</span> athletes in a squad.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">100 m time <span class="chem">x</span> (s)</th><td class="num">11.2</td><td class="num">11.6</td><td class="num">11.9</td><td class="num">12.3</td><td class="num">12.6</td><td class="num">13</td><td class="num">13.4</td><td class="num">13.9</td></tr><tr><th scope="row">Long jump <span class="chem">y</span> (m)</th><td class="num">6.85</td><td class="num">6.60</td><td class="num">6.52</td><td class="num">6.21</td><td class="num">6.05</td><td class="num">5.88</td><td class="num">5.61</td><td class="num">5.42</td></tr></tbody></table></div><p>(a) Write down the value of <span class="chem">r</span>. <strong>[1 mark]</strong><br>(b) A new athlete runs 100 m in <span class="chem">12.0</span> s. Estimate how far she can jump. <strong>[3 marks]</strong><br>(c) A second new athlete jumps <span class="chem">6.00</span> m but has not yet been timed over 100 m. Estimate his 100 m time, justifying your choice of regression line. <strong>[4 marks]</strong><br>(d) The coach wants to use the same model for a younger athlete who runs 100 m in <span class="chem">15.4</span> s. Comment on the reliability of this prediction. <strong>[1 mark]</strong></p>
      stem: "<p>コーチが、チームの <span class=\"chem\">8</span> 人の選手について 100 m 走のタイム <span class=\"chem\">x</span> 秒と走り幅跳びの記録 <span class=\"chem\">y</span> メートルを記録した。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">100 m のタイム <span class=\"chem\">x</span> (s)</th><td class=\"num\">11.2</td><td class=\"num\">11.6</td><td class=\"num\">11.9</td><td class=\"num\">12.3</td><td class=\"num\">12.6</td><td class=\"num\">13</td><td class=\"num\">13.4</td><td class=\"num\">13.9</td></tr><tr><th scope=\"row\">走り幅跳び <span class=\"chem\">y</span> (m)</th><td class=\"num\">6.85</td><td class=\"num\">6.60</td><td class=\"num\">6.52</td><td class=\"num\">6.21</td><td class=\"num\">6.05</td><td class=\"num\">5.88</td><td class=\"num\">5.61</td><td class=\"num\">5.42</td></tr></tbody></table></div><p>(a) <span class=\"chem\">r</span> の値を書きなさい (Write down)。 <strong>[1 mark]</strong><br>(b) 新しい選手が 100 m を <span class=\"chem\">12.0</span> s で走る。彼女がどれだけ跳べるかを推定しなさい (Estimate)。 <strong>[3 marks]</strong><br>(c) もう一人の新しい選手は <span class=\"chem\">6.00</span> m 跳ぶが、100 m のタイムはまだ計測されていない。回帰直線の選び方を正当化して、彼の 100 m のタイムを推定しなさい (Estimate)。 <strong>[4 marks]</strong><br>(d) コーチは、100 m を <span class=\"chem\">15.4</span> s で走る年下の選手にも同じモデルを使いたいと考えている。この予測の信頼性について述べなさい (Comment)。 <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: (b) gives <span class="chem">x</span> and wants <span class="chem">y</span>; (c) gives <span class="chem">y</span> and wants <span class="chem">x</span>. They need two different regression lines.
        "解読：(b) は <span class=\"chem\">x</span> が与えられて <span class=\"chem\">y</span> を求め、(c) は <span class=\"chem\">y</span> が与えられて <span class=\"chem\">x</span> を求めます。二つの異なる回帰直線が必要です。",
        // EN: For (c), run <span class="mono">LinReg(ax+b)</span> with the jump distances as the Xlist and the times as the Ylist.
        "(c) では、跳躍距離を Xlist、タイムを Ylist にして <span class=\"mono\">LinReg(ax+b)</span> を実行します。",
        // EN: In (d), compare 15.4 s with the fastest and slowest times in the table.
        "(d) では、15.4 s を表の最も速いタイム・最も遅いタイムと比べましょう。",
      ],
      // EN: <p><b>Decode:</b> two directions of prediction, so two lines: <span class="chem">y</span> on <span class="chem">x</span> for (b), <span class="chem">x</span> on <span class="chem">y</span> for (c).<br>(a) GDC: <span class="chem">r = -0.99718… ≈ -0.997</span> <b>[A1]</b>.<br>(b) <span class="chem">y</span> on <span class="chem">x</span> <b>[M1]</b>: <span class="chem">y = -0.54021x + 12.8883</span> <b>[A1]</b>. <span class="chem">y(12.0) = 6.4059… ≈ 6.41</span> m <b>[A1]</b>.<br>(c) The jump is given and the time is wanted, so use <span class="chem">x</span> on <span class="chem">y</span> <b>[R1]</b>. With the jumps as Xlist <b>[M1]</b>: <span class="chem">x = -1.84071y + 23.7941</span> <b>[A1]</b>. <span class="chem">x(6.00) = 12.7498… ≈ 12.7</span> s <b>[A1]</b>.<br>(d) 15.4 s lies outside <span class="chem">11.2 ≤ x ≤ 13.9</span>, so this is extrapolation (and the younger athlete is outside the squad the data describe): the prediction is unreliable <b>[R1]</b>.</p>
      solution: "<p><b>解読：</b>予測の向きが二つあるので、直線も二つ：(b) には <span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線、(c) には <span class=\"chem\">x</span> の <span class=\"chem\">y</span> への回帰直線。<br>(a) GDC：<span class=\"chem\">r = -0.99718… ≈ -0.997</span> <b>[A1]</b>。<br>(b) <span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線 <b>[M1]</b>：<span class=\"chem\">y = -0.54021x + 12.8883</span> <b>[A1]</b>。<span class=\"chem\">y(12.0) = 6.4059… ≈ 6.41</span> m <b>[A1]</b>。<br>(c) 跳躍距離が与えられてタイムを求めるので、<span class=\"chem\">x</span> の <span class=\"chem\">y</span> への回帰直線を使う <b>[R1]</b>。跳躍距離を Xlist にして <b>[M1]</b>：<span class=\"chem\">x = -1.84071y + 23.7941</span> <b>[A1]</b>。<span class=\"chem\">x(6.00) = 12.7498… ≈ 12.7</span> s <b>[A1]</b>。<br>(d) 15.4 s は <span class=\"chem\">11.2 ≤ x ≤ 13.9</span> の外にあるので外挿である（しかも年下の選手はデータが表すチームの外にいる）。この予測は信頼できない <b>[R1]</b>。</p>",
      // EN: <p>(a) <span class="chem">r = -0.997</span><br>(b) <span class="chem">y = -0.540x + 12.89</span> gives <span class="chem">y ≈ 6.41</span> m.<br>(c) Use <span class="chem">x</span> on <span class="chem">y</span> (the jump <span class="chem">y</span> is given): <span class="chem">x = -1.84y + 23.79</span> gives <span class="chem">x ≈ 12.7</span> s.<br>(d) Unreliable: 15.4 s is outside the data range 11.2–13.9 s (extrapolation), and the athlete is from a different (younger) group.</p>
      answer: "<p>(a) <span class=\"chem\">r = -0.997</span><br>(b) <span class=\"chem\">y = -0.540x + 12.89</span> より <span class=\"chem\">y ≈ 6.41</span> m。<br>(c) <span class=\"chem\">x</span> の <span class=\"chem\">y</span> への回帰直線を使う（跳躍距離 <span class=\"chem\">y</span> が与えられている）：<span class=\"chem\">x = -1.84y + 23.79</span> より <span class=\"chem\">x ≈ 12.7</span> s。<br>(d) 信頼できない：15.4 s はデータの範囲 11.2–13.9 s の外にあり（外挿）、その選手は別の（年下の）集団に属する。</p>",
      markscheme: [
        // EN: A1: r = -0.997.
        "A1：r = -0.997。",
        // EN: M1: Uses the regression line of y on x (x is given).
        "M1：y の x への回帰直線を使う（x が与えられている）。",
        // EN: A1: y = -0.540x + 12.89.
        "A1：y = -0.540x + 12.89。",
        // EN: A1: y ≈ 6.41 m.
        "A1：y ≈ 6.41 m。",
        // EN: R1: Chooses the x-on-y line because y is given and x is to be estimated.
        "R1：y が与えられて x を推定するので、x の y への回帰直線を選ぶ。",
        // EN: M1: Finds the x-on-y line on the GDC (y-values as Xlist).
        "M1：GDC で x の y への回帰直線を求める（y の値を Xlist にする）。",
        // EN: A1: x = -1.84y + 23.79.
        "A1：x = -1.84y + 23.79。",
        // EN: A1: x ≈ 12.7 s.
        "A1：x ≈ 12.7 s。",
        // EN: R1: 15.4 s is outside the observed times, so the prediction is an extrapolation (and a younger athlete may not follow the same pattern): unreliable.
        "R1：15.4 s は観測されたタイムの外にあるので、予測は外挿であり（年下の選手は同じ傾向に従わないかもしれない）、信頼できない。",
      ],
    },

    // ── t4-1-q038 · short · exam · SL · SL 4.2, 4.3 · 7 marks
    "t4-1-q038": {
      // EN: <p>The cumulative frequency table shows the time <span class="chem">t</span> minutes that <span class="chem">80</span> students spent on homework one evening.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Time <span class="chem">t</span> (min)</th><td class="num"><i>t</i> ≤ 10</td><td class="num"><i>t</i> ≤ 20</td><td class="num"><i>t</i> ≤ 30</td><td class="num"><i>t</i> ≤ 40</td><td class="num"><i>t</i> ≤ 50</td><td class="num"><i>t</i> ≤ 60</td></tr><tr><th scope="row">Cumulative frequency</th><td class="num">6</td><td class="num">19</td><td class="num">41</td><td class="num">62</td><td class="num">74</td><td class="num">80</td></tr></tbody></table></div><p>(a) Write down the number of students who spent more than <span class="chem">40</span> minutes on homework. <strong>[1 mark]</strong><br>(b) Write down the class that contains the median. <strong>[1 mark]</strong><br>(c) Copy and complete a frequency table for the classes <span class="chem">0 &lt; t ≤ 10</span>, <span class="chem">10 &lt; t ≤ 20</span>, …, <span class="chem">50 &lt; t ≤ 60</span>. <strong>[2 marks]</strong><br>(d) Hence find an estimate of the mean and of the standard deviation of the times. <strong>[3 marks]</strong></p>
      stem: "<p>次の累積度数分布表は、<span class=\"chem\">80</span> 人の生徒がある晩に宿題に費やした時間 <span class=\"chem\">t</span> 分を示している。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">時間 <span class=\"chem\">t</span> (min)</th><td class=\"num\"><i>t</i> ≤ 10</td><td class=\"num\"><i>t</i> ≤ 20</td><td class=\"num\"><i>t</i> ≤ 30</td><td class=\"num\"><i>t</i> ≤ 40</td><td class=\"num\"><i>t</i> ≤ 50</td><td class=\"num\"><i>t</i> ≤ 60</td></tr><tr><th scope=\"row\">累積度数</th><td class=\"num\">6</td><td class=\"num\">19</td><td class=\"num\">41</td><td class=\"num\">62</td><td class=\"num\">74</td><td class=\"num\">80</td></tr></tbody></table></div><p>(a) 宿題に <span class=\"chem\">40</span> 分より長く費やした生徒の人数を書きなさい (Write down)。 <strong>[1 mark]</strong><br>(b) 中央値を含む階級を書きなさい (Write down)。 <strong>[1 mark]</strong><br>(c) 階級 <span class=\"chem\">0 &lt; t ≤ 10</span>, <span class=\"chem\">10 &lt; t ≤ 20</span>, …, <span class=\"chem\">50 &lt; t ≤ 60</span> の度数分布表を書き写して完成させなさい (Copy and complete)。 <strong>[2 marks]</strong><br>(d) これを用いて (Hence)、時間の平均値と標準偏差の推定値を求めなさい。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: a cumulative frequency is a running total. The number in a class is the difference of consecutive running totals.
        "解読：累積度数は累計です。各階級の人数は、隣り合う累計の差です。",
        // EN: For the median, find the class in which the cumulative frequency passes <span class="chem">80/2 = 40</span>.
        "中央値については、累積度数が <span class=\"chem\">80/2 = 40</span> を超える階級を探します。",
        // EN: Mid-interval values: <span class="chem">5, 15, 25, 35, 45, 55</span>. Use them with the frequencies in <span class="mono">1-Var Stats</span>.
        "階級値：<span class=\"chem\">5, 15, 25, 35, 45, 55</span>。これを度数とともに <span class=\"mono\">1-Var Stats</span> で使います。",
      ],
      // EN: <p>(a) <span class="chem">80 - 62 = 18</span> students <b>[A1]</b>.<br>(b) The cumulative frequency passes 40 between <span class="chem">t = 20</span> (19) and <span class="chem">t = 30</span> (41), so the median is in <span class="chem">20 &lt; t ≤ 30</span> <b>[A1]</b>.<br>(c) Differences of the cumulative frequencies <b>[M1]</b>: <span class="chem">6, 13, 22, 21, 12, 6</span> <b>[A1]</b> (total 80).<br>(d) Mid-interval values <span class="chem">5, 15, 25, 35, 45, 55</span> <b>[M1]</b>. GDC: <span class="chem">x̄ ≈ 29.75</span> min <b>[A1]</b> and <span class="chem">σ ≈ 13.3206… ≈ 13.3</span> min <b>[A1]</b>.</p>
      solution: "<p>(a) <span class=\"chem\">80 - 62 = 18</span> 人 <b>[A1]</b>。<br>(b) 累積度数は <span class=\"chem\">t = 20</span>（19）と <span class=\"chem\">t = 30</span>（41）の間で 40 を超えるので、中央値は <span class=\"chem\">20 &lt; t ≤ 30</span> にある <b>[A1]</b>。<br>(c) 累積度数の差 <b>[M1]</b>：<span class=\"chem\">6, 13, 22, 21, 12, 6</span> <b>[A1]</b>（合計 80）。<br>(d) 階級値 <span class=\"chem\">5, 15, 25, 35, 45, 55</span> <b>[M1]</b>。GDC：<span class=\"chem\">x̄ ≈ 29.75</span> 分 <b>[A1]</b>、<span class=\"chem\">σ ≈ 13.3206… ≈ 13.3</span> 分 <b>[A1]</b>。</p>",
      // EN: <p>(a) <span class="chem">80 - 62 = 18</span><br>(b) <span class="chem">20 &lt; t ≤ 30</span><br>(c) Frequencies <span class="chem">6, 13, 22, 21, 12, 6</span><br>(d) <span class="chem">x̄ ≈ 29.75</span> min, <span class="chem">σ ≈ 13.3</span> min</p>
      answer: "<p>(a) <span class=\"chem\">80 - 62 = 18</span><br>(b) <span class=\"chem\">20 &lt; t ≤ 30</span><br>(c) 度数 <span class=\"chem\">6, 13, 22, 21, 12, 6</span><br>(d) <span class=\"chem\">x̄ ≈ 29.75</span> 分、<span class=\"chem\">σ ≈ 13.3</span> 分</p>",
      markscheme: [
        // EN: A1: 80 − 62 = 18 students.
        "A1：80 − 62 = 18 人。",
        // EN: A1: Median class 20 < t ≤ 30 (the 40th–41st students lie between cumulative frequencies 19 and 41).
        "A1：中央値の階級 20 < t ≤ 30（40 番目〜41 番目の生徒は累積度数 19 と 41 の間にある）。",
        // EN: M1: Subtracts consecutive cumulative frequencies.
        "M1：隣り合う累積度数の差をとる。",
        // EN: A1: Frequencies 6, 13, 22, 21, 12, 6.
        "A1：度数 6, 13, 22, 21, 12, 6。",
        // EN: M1: Uses mid-interval values 5, 15, 25, 35, 45, 55 with these frequencies.
        "M1：階級値 5, 15, 25, 35, 45, 55 をこれらの度数とともに使う。",
        // EN: A1: Mean ≈ 29.75 min.
        "A1：平均値 ≈ 29.75 分。",
        // EN: A1: σ ≈ 13.3 min.
        "A1：σ ≈ 13.3 分。",
      ],
    },

    // ── t4-1-q039 · numeric · challenge · SL · SL 4.3 · 6 marks
    "t4-1-q039": {
      // EN: <p>A teacher has the test scores of the <span class="chem">8</span> students in Group P:</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Group P score</th><td class="num">62</td><td class="num">71</td><td class="num">58</td><td class="num">80</td><td class="num">67</td><td class="num">74</td><td class="num">69</td><td class="num">75</td></tr></tbody></table></div><p>For Group Q she only has a summary: <span class="chem">12</span> students, mean score <span class="chem">70</span> and standard deviation <span class="chem">σ = 6</span>. Find the standard deviation of the scores of all <span class="chem">20</span> students together.</p>
      stem: "<p>ある先生は、P グループの <span class=\"chem\">8</span> 人の生徒のテストの得点をもっている：</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">P グループの得点</th><td class=\"num\">62</td><td class=\"num\">71</td><td class=\"num\">58</td><td class=\"num\">80</td><td class=\"num\">67</td><td class=\"num\">74</td><td class=\"num\">69</td><td class=\"num\">75</td></tr></tbody></table></div><p>Q グループについては要約しかない：生徒 <span class=\"chem\">12</span> 人、平均点 <span class=\"chem\">70</span>、標準偏差 <span class=\"chem\">σ = 6</span>。<span class=\"chem\">20</span> 人全員を合わせた得点の標準偏差を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: you cannot average two standard deviations. Rebuild the totals <span class="chem">Σ x</span> and <span class="chem">Σ x^2</span> for each group, add them, and use <span class="chem">σ^2 = (Σ x^2)/n - x̄^2</span> (in the formula booklet) for the combined group.
        "解読：二つの標準偏差を平均することはできません。各グループの合計 <span class=\"chem\">Σ x</span> と <span class=\"chem\">Σ x^2</span> を復元してそれらを足し、合わせたグループについて <span class=\"chem\">σ^2 = (Σ x^2)/n - x̄^2</span>（公式集にあります）を使います。",
        // EN: Group P from the GDC: <span class="chem">Σ x</span> and <span class="chem">Σ x^2</span> are on the <span class="mono">1-Var Stats</span> screen.
        "P グループは GDC から：<span class=\"chem\">Σ x</span> と <span class=\"chem\">Σ x^2</span> は <span class=\"mono\">1-Var Stats</span> の画面に表示されます。",
        // EN: Group Q: <span class="chem">Σ x = 12 × 70</span> and, from <span class="chem">σ^2 = (Σ x^2)/12 - 70^2</span>, <span class="chem">Σ x^2 = 12(6^2 + 70^2)</span>.
        "Q グループ：<span class=\"chem\">Σ x = 12 × 70</span>、そして <span class=\"chem\">σ^2 = (Σ x^2)/12 - 70^2</span> から <span class=\"chem\">Σ x^2 = 12(6^2 + 70^2)</span> です。",
      ],
      // EN: <p><b>Decode:</b> combine the raw totals, not the standard deviations.<br>Group P (GDC): <span class="chem">Σ x = 556</span>, <span class="chem">Σ x^2 = 39000</span> <b>[A1]</b>.<br>Group Q: <span class="chem">Σ x = 12 × 70 = 840</span> and <span class="chem">Σ x^2 = 12(36 + 4900) = 59 232</span> <b>[M1 A1]</b>.<br>Combined: <span class="chem">Σ x = 1396</span>, <span class="chem">Σ x^2 = 98232</span>, <span class="chem">x̄ = 1396/20 = 69.8</span> <b>[A1]</b>.<br><span class="chem">σ^2 = 98232/20 - 69.8^2 = 39.56</span> <b>[M1]</b>, so <span class="chem">σ = 6.2897… ≈ 6.29</span> <b>[A1]</b>.</p>
      solution: "<p><b>解読：</b>標準偏差ではなく、元の合計を合わせる。<br>P グループ（GDC）：<span class=\"chem\">Σ x = 556</span>、<span class=\"chem\">Σ x^2 = 39000</span> <b>[A1]</b>。<br>Q グループ：<span class=\"chem\">Σ x = 12 × 70 = 840</span>、<span class=\"chem\">Σ x^2 = 12(36 + 4900) = 59 232</span> <b>[M1 A1]</b>。<br>合計：<span class=\"chem\">Σ x = 1396</span>、<span class=\"chem\">Σ x^2 = 98232</span>、<span class=\"chem\">x̄ = 1396/20 = 69.8</span> <b>[A1]</b>。<br><span class=\"chem\">σ^2 = 98232/20 - 69.8^2 = 39.56</span> <b>[M1]</b>、よって <span class=\"chem\">σ = 6.2897… ≈ 6.29</span> <b>[A1]</b>。</p>",
    },

    // ── t4-1-q040 · numeric · exam · SL · SL 4.4 · 2 marks
    "t4-1-q040": {
      // EN: <p>A dealer records the age <span class="chem">x</span> years and the resale value <span class="chem">y</span> (in thousands of dollars) of <span class="chem">8</span> cars of the same model.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Age <span class="chem">x</span> (years)</th><td class="num">1</td><td class="num">2</td><td class="num">3</td><td class="num">4</td><td class="num">5</td><td class="num">6</td><td class="num">7</td><td class="num">8</td></tr><tr><th scope="row">Value <span class="chem">y</span> (thousand $)</th><td class="num">27.5</td><td class="num">24.8</td><td class="num">22.1</td><td class="num">20.6</td><td class="num">18.0</td><td class="num">16.2</td><td class="num">14.9</td><td class="num">12.8</td></tr></tbody></table></div><p>The regression line of <span class="chem">y</span> on <span class="chem">x</span> is <span class="chem">y = ax + b</span>. Write down the value of <span class="chem">b</span>.</p>
      stem: "<p>ある販売業者が、同じ型の車 <span class=\"chem\">8</span> 台について、経過年数 <span class=\"chem\">x</span> 年と再販価格 <span class=\"chem\">y</span>（千ドル単位）を記録した。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">年数 <span class=\"chem\">x</span>（年）</th><td class=\"num\">1</td><td class=\"num\">2</td><td class=\"num\">3</td><td class=\"num\">4</td><td class=\"num\">5</td><td class=\"num\">6</td><td class=\"num\">7</td><td class=\"num\">8</td></tr><tr><th scope=\"row\">価値 <span class=\"chem\">y</span> (千 $)</th><td class=\"num\">27.5</td><td class=\"num\">24.8</td><td class=\"num\">22.1</td><td class=\"num\">20.6</td><td class=\"num\">18.0</td><td class=\"num\">16.2</td><td class=\"num\">14.9</td><td class=\"num\">12.8</td></tr></tbody></table></div><p><span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線は <span class=\"chem\">y = ax + b</span> である。<span class=\"chem\">b</span> の値を書きなさい (Write down)。</p>",
      hints: [
        // EN: Run <span class="mono">LinReg(ax+b)</span> with the ages as the Xlist.
        "経過年数を Xlist にして <span class=\"mono\">LinReg(ax+b)</span> を実行します。",
        // EN: Interpretation: <span class="chem">b</span> is the model's value (in thousand $) of a car aged <span class="chem">x = 0</span>, i.e. a new car. Since 0 is just outside the ages 1–8, treat it with care.
        "解釈：<span class=\"chem\">b</span> は経過年数 <span class=\"chem\">x = 0</span> の車、つまり新車のモデル上の価値（千 $ 単位）です。0 は年数 1–8 のすぐ外側にあるので、慎重に扱いましょう。",
      ],
      // EN: <p>GDC: <span class="chem">a = -2.05595…</span>, <span class="chem">b = 28.8643… ≈ 28.9</span> <b>[A2]</b>.<br>In context, <span class="chem">b</span> is the estimated value of a new car, about $28,900, and <span class="chem">a</span> means the value falls by about $2,060 per year. (<span class="chem">x = 0</span> lies just outside the data, so <span class="chem">b</span> is a slight extrapolation.)</p>
      solution: "<p>GDC：<span class=\"chem\">a = -2.05595…</span>、<span class=\"chem\">b = 28.8643… ≈ 28.9</span> <b>[A2]</b>。<br>文脈では、<span class=\"chem\">b</span> は新車の推定価値でおよそ $28,900、<span class=\"chem\">a</span> は価値が一年あたりおよそ $2,060 下がることを意味する。（<span class=\"chem\">x = 0</span> はデータのすぐ外側にあるので、<span class=\"chem\">b</span> はわずかな外挿である。）</p>",
    },

    // ── t4-1-q041 · numeric · challenge · SL · SL 4.4 · 4 marks
    "t4-1-q041": {
      // EN: <p>A museum lost its visitor records for 2020. The numbers of visitors (in thousands) for the other years are shown.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Year</th><td class="num">2016</td><td class="num">2017</td><td class="num">2018</td><td class="num">2019</td><td class="num">2021</td><td class="num">2022</td><td class="num">2023</td></tr><tr><th scope="row">Visitors (thousands)</th><td class="num">48.2</td><td class="num">51.0</td><td class="num">53.9</td><td class="num">55.8</td><td class="num">61.4</td><td class="num">63.1</td><td class="num">66.5</td></tr></tbody></table></div><p>Let <span class="chem">x</span> be the number of years after 2015 and <span class="chem">V</span> the number of visitors in thousands. Use the regression line of <span class="chem">V</span> on <span class="chem">x</span> to estimate the number of visitors, in thousands, the museum would have had in 2020 if the trend had continued.</p>
      stem: "<p>ある博物館は 2020 年の来館者記録をなくしてしまった。他の年の来館者数（千人単位）を示す。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">年</th><td class=\"num\">2016</td><td class=\"num\">2017</td><td class=\"num\">2018</td><td class=\"num\">2019</td><td class=\"num\">2021</td><td class=\"num\">2022</td><td class=\"num\">2023</td></tr><tr><th scope=\"row\">来館者数（千人）</th><td class=\"num\">48.2</td><td class=\"num\">51.0</td><td class=\"num\">53.9</td><td class=\"num\">55.8</td><td class=\"num\">61.4</td><td class=\"num\">63.1</td><td class=\"num\">66.5</td></tr></tbody></table></div><p><span class=\"chem\">x</span> を 2015 年からの経過年数、<span class=\"chem\">V</span> を千人単位の来館者数とする。<span class=\"chem\">V</span> の <span class=\"chem\">x</span> への回帰直線を用いて、傾向が続いていたとした場合に博物館が 2020 年に迎えたであろう来館者数（千人単位）を推定しなさい (estimate)。</p>",
      hints: [
        // EN: Decode: first change the years into <span class="chem">x</span>-values (2016 → 1, …, 2023 → 8). The missing year 2020 is <span class="chem">x = 5</span>, which lies inside the data, so this is interpolation.
        "解読：まず年を <span class=\"chem\">x</span> の値に変えます（2016 → 1, …, 2023 → 8）。欠けている 2020 年は <span class=\"chem\">x = 5</span> で、データの内側にあるので、これは内挿です。",
        // EN: Run <span class="mono">LinReg(ax+b)</span> on the <span class="chem">x</span>-values (1, 2, 3, 4, 6, 7, 8) and the visitor numbers.
        "<span class=\"chem\">x</span> の値（1, 2, 3, 4, 6, 7, 8）と来館者数で <span class=\"mono\">LinReg(ax+b)</span> を実行します。",
        // EN: Substitute <span class="chem">x = 5</span> (not 2020) into the unrounded line.
        "丸めていない直線に <span class=\"chem\">x = 5</span>（2020 ではありません）を代入します。",
      ],
      // EN: <p><b>Decode:</b> recode the years as <span class="chem">x = 1, 2, 3, 4, 6, 7, 8</span>; 2020 is <span class="chem">x = 5</span> <b>[M1]</b>.<br>GDC: <span class="chem">V = 2.54623x + 45.8524</span> (<span class="chem">r = 0.999</span>) <b>[A1 A1]</b>.<br><span class="chem">V(5) = 58.5836… ≈ 58.6</span> thousand visitors <b>[A1]</b>.</p>
      solution: "<p><b>解読：</b>年を <span class=\"chem\">x = 1, 2, 3, 4, 6, 7, 8</span> に置き換える。2020 年は <span class=\"chem\">x = 5</span> <b>[M1]</b>。<br>GDC：<span class=\"chem\">V = 2.54623x + 45.8524</span>（<span class=\"chem\">r = 0.999</span>）<b>[A1 A1]</b>。<br><span class=\"chem\">V(5) = 58.5836… ≈ 58.6</span> 千人 <b>[A1]</b>。</p>",
      // EN: thousand
      unit: "千人",
    },

    // ── t4-1-q042 · short · challenge · SL · SL 4.2 · 9 marks
    "t4-1-q042": {
      // EN: <p>A consumer group tests <span class="chem">11</span> batteries of each of two brands and records how long each lasts, in hours.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Brand P (h)</th><td class="num">52</td><td class="num">47</td><td class="num">72</td><td class="num">50</td><td class="num">55</td><td class="num">41</td><td class="num">48</td><td class="num">57</td><td class="num">45</td><td class="num">54</td><td class="num">51</td></tr><tr><th scope="row">Brand Q (h)</th><td class="num">58</td><td class="num">61</td><td class="num">44</td><td class="num">55</td><td class="num">66</td><td class="num">52</td><td class="num">63</td><td class="num">49</td><td class="num">60</td><td class="num">64</td><td class="num">56</td></tr></tbody></table></div><p>Quartiles are found by the GDC method: the median of each half of the ordered data, leaving out the overall median when the number of values is odd.<br>(a) Find the five-number summary (minimum, <span class="chem">Q_1</span>, median, <span class="chem">Q_3</span>, maximum) for each brand. <strong>[4 marks]</strong><br>(b) Determine whether either brand has an outlier. <strong>[2 marks]</strong><br>(c) The box plots of the two brands are drawn on the same scale. Use them to compare the two brands, and state which brand you would recommend to a buyer who wants batteries that last a predictable time. <strong>[3 marks]</strong></p>
      stem: "<p>ある消費者団体が、二つのブランドの電池をそれぞれ <span class=\"chem\">11</span> 個ずつテストし、各電池がもつ時間（時間）を記録した。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">ブランド P (h)</th><td class=\"num\">52</td><td class=\"num\">47</td><td class=\"num\">72</td><td class=\"num\">50</td><td class=\"num\">55</td><td class=\"num\">41</td><td class=\"num\">48</td><td class=\"num\">57</td><td class=\"num\">45</td><td class=\"num\">54</td><td class=\"num\">51</td></tr><tr><th scope=\"row\">ブランド Q (h)</th><td class=\"num\">58</td><td class=\"num\">61</td><td class=\"num\">44</td><td class=\"num\">55</td><td class=\"num\">66</td><td class=\"num\">52</td><td class=\"num\">63</td><td class=\"num\">49</td><td class=\"num\">60</td><td class=\"num\">64</td><td class=\"num\">56</td></tr></tbody></table></div><p>四分位数は GDC の方法で求める：並べたデータの前半と後半それぞれの中央値をとり、値の個数が奇数のときは全体の中央値を除く。<br>(a) 各ブランドの五数要約（最小値、<span class=\"chem\">Q_1</span>、中央値、<span class=\"chem\">Q_3</span>、最大値）を求めなさい (Find)。 <strong>[4 marks]</strong><br>(b) どちらかのブランドに外れ値があるかどうかを判定しなさい (Determine)。 <strong>[2 marks]</strong><br>(c) 二つのブランドの箱ひげ図を同じ目盛りでかく。それを用いて二つのブランドを比較し、もつ時間が予測しやすい電池を求める購入者にどちらのブランドを勧めるかを述べなさい (Compare, state)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: "compare" in a statistics question means compare a measure of centre (median) AND a measure of spread (IQR), each in context. "Predictable" is about spread, not about the average.
        "解読：統計の問題での「比較しなさい」は、中心の尺度（中央値）と散らばりの尺度（IQR）の両方を、それぞれ文脈に即して比べることを意味します。「予測しやすい」は平均ではなく散らばりに関することです。",
        // EN: Put each brand in its own list and run <span class="mono">1-Var Stats</span>. Then fences: <span class="chem">Q_1 - 1.5 IQR</span> and <span class="chem">Q_3 + 1.5 IQR</span>.
        "各ブランドを別々のリストに入力して <span class=\"mono\">1-Var Stats</span> を実行します。境界は <span class=\"chem\">Q_1 - 1.5 IQR</span> と <span class=\"chem\">Q_3 + 1.5 IQR</span> です。",
        // EN: Do not use the range to judge spread when one brand has an outlier: the IQR is not affected by it.
        "一方のブランドに外れ値があるときは、散らばりの判断に範囲を使ってはいけません：IQR は外れ値の影響を受けません。",
      ],
      // EN: <p><b>Decode:</b> compare centre and spread in context; "predictable" means small spread.<br>(a) P ordered: 41, 45, 47, 48, 50, 51, 52, 54, 55, 57, 72, so <span class="chem">Q_1 = 47</span>, median <span class="chem">51</span>, <span class="chem">Q_3 = 55</span> <b>[A1]</b>, min 41, max 72 <b>[A1]</b>.<br>Q ordered: 44, 49, 52, 55, 56, 58, 60, 61, 63, 64, 66, so <span class="chem">Q_1 = 52</span>, median <span class="chem">58</span>, <span class="chem">Q_3 = 63</span> <b>[A1]</b>, min 44, max 66 <b>[A1]</b>.<br>(b) P: <span class="chem">IQR = 8</span>, fences <span class="chem">35</span> and <span class="chem">67</span>; <span class="chem">72 &gt; 67</span> is an outlier <b>[R1]</b>. Q: <span class="chem">IQR = 11</span>, fences <span class="chem">35.5</span> and <span class="chem">79.5</span>; no outliers <b>[R1]</b>.<br>(c) The median of Q (<span class="chem">58</span> h) is higher than that of P (<span class="chem">51</span> h), so Q batteries usually last longer <b>[R1]</b>. The IQR of P (<span class="chem">8</span> h) is smaller than that of Q (<span class="chem">11</span> h), so the middle half of P batteries are more consistent <b>[R1]</b>. For a predictable lifetime choose P <b>[R1]</b>.</p>
      solution: "<p><b>解読：</b>中心と散らばりを文脈に即して比べる。「予測しやすい」は散らばりが小さいことを意味する。<br>(a) P を小さい順に：41, 45, 47, 48, 50, 51, 52, 54, 55, 57, 72、よって <span class=\"chem\">Q_1 = 47</span>、中央値 <span class=\"chem\">51</span>、<span class=\"chem\">Q_3 = 55</span> <b>[A1]</b>、最小値 41、最大値 72 <b>[A1]</b>。<br>Q を小さい順に：44, 49, 52, 55, 56, 58, 60, 61, 63, 64, 66、よって <span class=\"chem\">Q_1 = 52</span>、中央値 <span class=\"chem\">58</span>、<span class=\"chem\">Q_3 = 63</span> <b>[A1]</b>、最小値 44、最大値 66 <b>[A1]</b>。<br>(b) P：<span class=\"chem\">IQR = 8</span>、境界 <span class=\"chem\">35</span> と <span class=\"chem\">67</span>。<span class=\"chem\">72 &gt; 67</span> は外れ値 <b>[R1]</b>。Q：<span class=\"chem\">IQR = 11</span>、境界 <span class=\"chem\">35.5</span> と <span class=\"chem\">79.5</span>。外れ値なし <b>[R1]</b>。<br>(c) Q の中央値（<span class=\"chem\">58</span> h）は P（<span class=\"chem\">51</span> h）より高いので、Q の電池のほうがふつう長くもつ <b>[R1]</b>。P の IQR（<span class=\"chem\">8</span> h）は Q（<span class=\"chem\">11</span> h）より小さいので、P の電池の中央の半分のほうが安定している <b>[R1]</b>。もつ時間の予測しやすさを求めるなら P を選ぶ <b>[R1]</b>。</p>",
      // EN: <p>(a) P: <span class="chem">41, 47, 51, 55, 72</span>; Q: <span class="chem">44, 52, 58, 63, 66</span>.<br>(b) P: <span class="chem">IQR = 8</span>, upper fence <span class="chem">67</span>, so <span class="chem">72</span> is an outlier. Q: fences <span class="chem">35.5</span> and <span class="chem">79.5</span>, no outliers.<br>(c) Q has the higher median (<span class="chem">58</span> h against <span class="chem">51</span> h), so Q batteries generally last longer. P has the smaller IQR (<span class="chem">8</span> against <span class="chem">11</span>), so apart from its one outlier P is more consistent. For a predictable lifetime, recommend P (smaller IQR), noting the one unusually long-lasting battery.</p>
      answer: "<p>(a) P：<span class=\"chem\">41, 47, 51, 55, 72</span>；Q：<span class=\"chem\">44, 52, 58, 63, 66</span>。<br>(b) P：<span class=\"chem\">IQR = 8</span>、上側境界 <span class=\"chem\">67</span> なので <span class=\"chem\">72</span> は外れ値。Q：境界 <span class=\"chem\">35.5</span> と <span class=\"chem\">79.5</span>、外れ値なし。<br>(c) Q のほうが中央値が高い（<span class=\"chem\">58</span> h 対 <span class=\"chem\">51</span> h）ので、Q の電池のほうが全体的に長くもつ。P のほうが IQR が小さい（<span class=\"chem\">8</span> 対 <span class=\"chem\">11</span>）ので、一つの外れ値を除けば P のほうが安定している。もつ時間が予測しやすいものを求めるなら、P（IQR が小さい）を勧める。ただし、一つだけ異常に長くもった電池があることに注意する。</p>",
      markscheme: [
        // EN: A1: Brand P: Q₁ = 47, median = 51, Q₃ = 55.
        "A1：ブランド P：Q₁ = 47、中央値 = 51、Q₃ = 55。",
        // EN: A1: Brand P: min 41, max 72.
        "A1：ブランド P：最小値 41、最大値 72。",
        // EN: A1: Brand Q: Q₁ = 52, median = 58, Q₃ = 63.
        "A1：ブランド Q：Q₁ = 52、中央値 = 58、Q₃ = 63。",
        // EN: A1: Brand Q: min 44, max 66.
        "A1：ブランド Q：最小値 44、最大値 66。",
        // EN: R1: P: IQR = 8, upper fence 67 < 72, so 72 is an outlier (lower fence 35 < 41).
        "R1：P：IQR = 8、上側境界 67 < 72 なので 72 は外れ値（下側境界 35 < 41）。",
        // EN: R1: Q: IQR = 11, fences 35.5 and 79.5 contain all values, so no outliers.
        "R1：Q：IQR = 11、境界 35.5 と 79.5 の間にすべての値があるので、外れ値なし。",
        // EN: R1: Compares medians in context: Q generally lasts longer.
        "R1：中央値を文脈に即して比較する：Q のほうが全体的に長くもつ。",
        // EN: R1: Compares IQRs in context: P is more consistent (less spread).
        "R1：IQR を文脈に即して比較する：P のほうが安定している（散らばりが小さい）。",
        // EN: R1: Recommends P for predictability, with a reason based on spread (accept Q if justified by its higher median AND lack of outliers).
        "R1：散らばりに基づく理由をつけて、予測しやすさの点から P を勧める（Q の中央値が高いこと、かつ外れ値がないことで正当化していれば Q も可）。",
      ],
    },

    // ── t4-1-q043 · numeric · exam · SL · SL 4.3 · 3 marks
    "t4-1-q043": {
      // EN: <p>An ornithologist counts the number of eggs <span class="chem">x</span> in each of <span class="chem">40</span> nests.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Eggs <span class="chem">x</span></th><td class="num">2</td><td class="num">3</td><td class="num">4</td><td class="num">5</td><td class="num">6</td></tr><tr><th scope="row">Number of nests</th><td class="num">4</td><td class="num">9</td><td class="num">15</td><td class="num">8</td><td class="num">4</td></tr></tbody></table></div><p>Find the variance of the number of eggs per nest.</p>
      stem: "<p>鳥類学者が <span class=\"chem\">40</span> 個の巣それぞれにある卵の数 <span class=\"chem\">x</span> を数えた。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">卵の数 <span class=\"chem\">x</span></th><td class=\"num\">2</td><td class=\"num\">3</td><td class=\"num\">4</td><td class=\"num\">5</td><td class=\"num\">6</td></tr><tr><th scope=\"row\">巣の数</th><td class=\"num\">4</td><td class=\"num\">9</td><td class=\"num\">15</td><td class=\"num\">8</td><td class=\"num\">4</td></tr></tbody></table></div><p>巣一つあたりの卵の数の分散を求めなさい (Find)。</p>",
      hints: [
        // EN: Run <span class="mono">1-Var Stats</span> with the numbers of nests as the frequency list.
        "巣の数を度数リストにして <span class=\"mono\">1-Var Stats</span> を実行します。",
        // EN: The variance is <span class="chem">σ^2</span>: square the value of <span class="mono">σx</span> (use its full value, not a rounded one).
        "分散は <span class=\"chem\">σ^2</span> です：<span class=\"mono\">σx</span> の値を二乗します（丸めた値ではなく、すべての桁を使います）。",
      ],
      // EN: <p>GDC with frequencies: <span class="chem">n = 40</span>, <span class="chem">x̄ = 3.975</span>, <span class="chem">σ = 1.10651…</span> <b>[M1 A1]</b>.<br>Variance <span class="chem">σ^2 = 1.22437 ≈ 1.22</span> <b>[A1]</b>.</p>
      solution: "<p>度数を使った GDC：<span class=\"chem\">n = 40</span>、<span class=\"chem\">x̄ = 3.975</span>、<span class=\"chem\">σ = 1.10651…</span> <b>[M1 A1]</b>。<br>分散 <span class=\"chem\">σ^2 = 1.22437 ≈ 1.22</span> <b>[A1]</b>。</p>",
    },

    // ── t4-1-q044 · numeric · challenge · SL · SL 4.3 · 4 marks
    "t4-1-q044": {
      // EN: <p>The distances, in km, that <span class="chem">14</span> employees travel to work are:</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Distance (km)</th><td class="num">3.2</td><td class="num">5.8</td><td class="num">7.1</td><td class="num">4.4</td><td class="num">12.6</td><td class="num">6.3</td><td class="num">8.9</td><td class="num">2.7</td><td class="num">9.5</td><td class="num">5.1</td><td class="num">6.8</td><td class="num">15.2</td><td class="num">4.9</td><td class="num">7.6</td></tr></tbody></table></div><p>A manager says an employee lives "within one standard deviation of the mean" if their distance is between <span class="chem">x̄ - σ</span> and <span class="chem">x̄ + σ</span>. How many of the <span class="chem">14</span> employees live within one standard deviation of the mean?</p>
      stem: "<p><span class=\"chem\">14</span> 人の従業員の通勤距離（km）は次のとおりである：</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">距離 (km)</th><td class=\"num\">3.2</td><td class=\"num\">5.8</td><td class=\"num\">7.1</td><td class=\"num\">4.4</td><td class=\"num\">12.6</td><td class=\"num\">6.3</td><td class=\"num\">8.9</td><td class=\"num\">2.7</td><td class=\"num\">9.5</td><td class=\"num\">5.1</td><td class=\"num\">6.8</td><td class=\"num\">15.2</td><td class=\"num\">4.9</td><td class=\"num\">7.6</td></tr></tbody></table></div><p>ある管理者は、従業員の通勤距離が <span class=\"chem\">x̄ - σ</span> と <span class=\"chem\">x̄ + σ</span> の間にあるとき、その従業員は「平均から標準偏差一つ分以内」に住んでいると言う。<span class=\"chem\">14</span> 人の従業員のうち何人が平均から標準偏差一つ分以内に住んでいますか？</p>",
      hints: [
        // EN: Decode: the answer is a count of employees (a whole number), not a distance. First find the interval <span class="chem">(x̄ - σ, x̄ + σ)</span>, then count the data values inside it.
        "解読：答えは距離ではなく従業員の人数（整数）です。まず区間 <span class=\"chem\">(x̄ - σ, x̄ + σ)</span> を求め、その中にあるデータの値を数えます。",
        // EN: GDC: <span class="mono">1-Var Stats</span> gives <span class="chem">x̄</span> and <span class="chem">σ</span> (use <span class="chem">σ</span>, not <span class="chem">s</span>).
        "GDC：<span class=\"mono\">1-Var Stats</span> で <span class=\"chem\">x̄</span> と <span class=\"chem\">σ</span> が得られます（<span class=\"chem\">s</span> ではなく <span class=\"chem\">σ</span> を使います）。",
        // EN: Order the data and count the values strictly between the two limits.
        "データを並べ、二つの限界の間に（等号なしで）ある値を数えます。",
      ],
      // EN: <p><b>Decode:</b> build the interval from <span class="chem">x̄</span> and <span class="chem">σ</span>, then count.<br>GDC: <span class="chem">x̄ = 7.15</span>, <span class="chem">σ = 3.3615…</span> <b>[M1 A1]</b>.<br>Interval: <span class="chem">3.79 &lt; d &lt; 10.51</span> <b>[A1]</b>.<br>Ordered: 2.7, 3.2, | 4.4, 4.9, 5.1, 5.8, 6.3, 6.8, 7.1, 7.6, 8.9, 9.5, | 12.6, 15.2. So <span class="chem">10</span> employees <b>[A1]</b>.</p>
      solution: "<p><b>解読：</b><span class=\"chem\">x̄</span> と <span class=\"chem\">σ</span> から区間をつくり、数える。<br>GDC：<span class=\"chem\">x̄ = 7.15</span>、<span class=\"chem\">σ = 3.3615…</span> <b>[M1 A1]</b>。<br>区間：<span class=\"chem\">3.79 &lt; d &lt; 10.51</span> <b>[A1]</b>。<br>小さい順：2.7, 3.2, | 4.4, 4.9, 5.1, 5.8, 6.3, 6.8, 7.1, 7.6, 8.9, 9.5, | 12.6, 15.2。よって <span class=\"chem\">10</span> 人 <b>[A1]</b>。</p>",
    },

    // ── t4-1-q045 · mcq · foundation · SL · SL 4.1 · 2 marks
    "t4-1-q045": {
      // EN: <p>A sports club collects four kinds of data about its members. Which one is <strong>continuous</strong> data?</p>
      stem: "<p>あるスポーツクラブが会員について四種類のデータを集めている。<strong>連続</strong>データはどれですか？</p>",
      options: [
        // EN: The time each member takes to swim 50 m
        "各会員が 50 m を泳ぐのにかかる時間",
        // EN: The number of training sessions each member attended last month
        "各会員が先月参加した練習の回数",
        // EN: The number of medals each member has won
        "各会員が獲得したメダルの数",
        // EN: Each member's shirt size (S, M, L or XL)
        "各会員のシャツのサイズ（S, M, L または XL）",
      ],
      hints: [
        // EN: Continuous data are <em>measured</em> and can take any value in an interval; discrete data are <em>counted</em> or take separate values.
        "連続データは<em>測定</em>され、ある区間の任意の値をとることができます。離散データは<em>数えられる</em>もの、またはとびとびの値をとるものです。",
      ],
      // EN: <p>A time is measured and can take any value in an interval (for example 41.37 s), so it is continuous <b>[A2]</b>. Numbers of sessions and medals are counted (discrete), and shirt sizes are categories.</p>
      solution: "<p>時間は測定され、ある区間の任意の値（例えば 41.37 s）をとることができるので、連続データである <b>[A2]</b>。練習の回数やメダルの数は数えられるもの（離散）であり、シャツのサイズはカテゴリーである。</p>",
      misconception: {
        // EN (option B): A number of sessions is counted in whole steps (0, 1, 2, …), so it is discrete.
        "1": "練習の回数は整数きざみ（0, 1, 2, …）で数えるので、離散データです。",
        // EN (option C): Medals are counted, so the data are discrete, even though the numbers may be large.
        "2": "メダルは数えるものなので、数が大きくなることがあっても離散データです。",
        // EN (option D): Shirt sizes are categories, not measurements on a continuous scale.
        "3": "シャツのサイズはカテゴリーであり、連続的な尺度での測定値ではありません。",
      },
    },

    // ── t4-1-q046 · mcq · foundation · SL · SL 4.3 · 2 marks
    "t4-1-q046": {
      // EN: <p>The masses <span class="chem">m</span> kg of <span class="chem">50</span> parcels are grouped as follows.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Mass <span class="chem">m</span> (kg)</th><td class="num">0 ≤ <i>m</i> &lt; 2</td><td class="num">2 ≤ <i>m</i> &lt; 4</td><td class="num">4 ≤ <i>m</i> &lt; 6</td><td class="num">6 ≤ <i>m</i> &lt; 8</td></tr><tr><th scope="row">Frequency</th><td class="num">9</td><td class="num">17</td><td class="num">14</td><td class="num">10</td></tr></tbody></table></div><p>Which is the modal class?</p>
      stem: "<p><span class=\"chem\">50</span> 個の小包の質量 <span class=\"chem\">m</span> kg を次のように階級に分けた。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">質量 <span class=\"chem\">m</span> (kg)</th><td class=\"num\">0 ≤ <i>m</i> &lt; 2</td><td class=\"num\">2 ≤ <i>m</i> &lt; 4</td><td class=\"num\">4 ≤ <i>m</i> &lt; 6</td><td class=\"num\">6 ≤ <i>m</i> &lt; 8</td></tr><tr><th scope=\"row\">度数</th><td class=\"num\">9</td><td class=\"num\">17</td><td class=\"num\">14</td><td class=\"num\">10</td></tr></tbody></table></div><p>最頻階級はどれですか？</p>",
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
        "階級の幅が等しいとき、最頻階級は度数が最も大きい階級です。",
      ],
      // EN: <p>The highest frequency is <span class="chem">17</span>, so the modal class is <span class="chem">2 ≤ m &lt; 4</span> <b>[A2]</b>.</p>
      solution: "<p>最大の度数は <span class=\"chem\">17</span> なので、最頻階級は <span class=\"chem\">2 ≤ m &lt; 4</span> である <b>[A2]</b>。</p>",
      misconception: {
        // EN (option B): You chose the class with the largest masses. The modal class is the one with the largest frequency.
        "1": "質量が最も大きい階級を選んでしまいました。最頻階級は度数が最も大きい階級です。",
        // EN (option C): This is the middle class of the table, not the class with the largest frequency (17). The modal class depends on the frequencies, not on the position of the class.
        "2": "これは表の真ん中の階級であり、度数が最も大きい（17）階級ではありません。最頻階級は階級の位置ではなく度数で決まります。",
        // EN (option D): 17 is the highest frequency. The modal class is the class itself, not its frequency.
        "3": "17 は最大の度数です。最頻階級はその度数ではなく、階級そのものです。",
      },
    },

    // ── t4-1-q047 · numeric · foundation · SL · SL 4.2 · 3 marks
    "t4-1-q047": {
      // EN: <p>The numbers of emails received by a manager on <span class="chem">9</span> days were</p><p class="chem">12, 3, 19, 8, 14, 22, 7, 15, 11.</p><p>Find the interquartile range. (Use the median of each half, leaving out the overall median.)</p>
      stem: "<p>ある管理者が <span class=\"chem\">9</span> 日間に受け取ったメールの数は次のとおりであった。</p><p class=\"chem\">12, 3, 19, 8, 14, 22, 7, 15, 11.</p><p>四分位範囲を求めなさい (Find)。（前半と後半それぞれの中央値を使い、全体の中央値は除く。）</p>",
      hints: [
        // EN: Write the data in order first. With <span class="chem">9</span> values the median is the 5th value.
        "まずデータを小さい順に並べます。値が <span class=\"chem\">9</span> 個のとき、中央値は 5 番目の値です。",
        // EN: The lower half is the 4 values below the median, and the upper half is the 4 values above it.
        "前半は中央値より小さい 4 個の値、後半は中央値より大きい 4 個の値です。",
      ],
      // EN: <p>Ordered: <span class="chem">3, 7, 8, 11, 12, 14, 15, 19, 22</span>; median <span class="chem">12</span>.<br><span class="chem">Q_1 = (7 + 8)/2 = 7.5</span> and <span class="chem">Q_3 = (15 + 19)/2 = 17</span> <b>[A1 A1]</b>.<br><span class="chem">IQR = 17 - 7.5 = 9.5</span> <b>[A1]</b>.</p>
      solution: "<p>小さい順：<span class=\"chem\">3, 7, 8, 11, 12, 14, 15, 19, 22</span>。中央値 <span class=\"chem\">12</span>。<br><span class=\"chem\">Q_1 = (7 + 8)/2 = 7.5</span>、<span class=\"chem\">Q_3 = (15 + 19)/2 = 17</span> <b>[A1 A1]</b>。<br><span class=\"chem\">IQR = 17 - 7.5 = 9.5</span> <b>[A1]</b>。</p>",
    },

    // ── t4-1-q048 · numeric · exam · SL · SL 4.3 · 3 marks
    "t4-1-q048": {
      // EN: <p>A teacher scales the raw marks <span class="chem">x</span> of a test using <span class="chem">y = 1.2x + 10</span>. The scaled marks <span class="chem">y</span> have mean <span class="chem">70</span> and standard deviation <span class="chem">9</span>. Find the standard deviation of the raw marks.</p>
      stem: "<p>ある先生がテストの素点 <span class=\"chem\">x</span> を <span class=\"chem\">y = 1.2x + 10</span> で換算する。換算後の得点 <span class=\"chem\">y</span> の平均値は <span class=\"chem\">70</span>、標準偏差は <span class=\"chem\">9</span> である。素点の標準偏差を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: you are given the <em>new</em> standard deviation and asked for the <em>original</em> one, so work backwards.
        "解読：<em>新しい</em>標準偏差が与えられ、<em>元の</em>標準偏差を求めるので、逆向きに考えます。",
        // EN: Under <span class="chem">y = ax + b</span>, <span class="chem">σ_y = |a| σ_x</span>; the <span class="chem">+10</span> and the mean <span class="chem">70</span> play no part.
        "<span class=\"chem\">y = ax + b</span> のもとで <span class=\"chem\">σ_y = |a| σ_x</span> です。<span class=\"chem\">+10</span> と平均値 <span class=\"chem\">70</span> は関係ありません。",
      ],
      // EN: <p><span class="chem">σ_y = 1.2 σ_x</span> (adding 10 does not affect spread) <b>[M1]</b>, so <span class="chem">9 = 1.2 σ_x</span> <b>[A1]</b> and <span class="chem">σ_x = 9/1.2 = 7.5</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">σ_y = 1.2 σ_x</span>（10 を足しても散らばりは変わらない）<b>[M1]</b>、よって <span class=\"chem\">9 = 1.2 σ_x</span> <b>[A1]</b>、<span class=\"chem\">σ_x = 9/1.2 = 7.5</span> <b>[A1]</b>。</p>",
    },

    // ── t4-1-q049 · numeric · exam · SL · SL 4.3 · 2 marks
    "t4-1-q049": {
      // EN: <p>A data set <span class="chem">x_1, x_2, …, x_n</span> has variance <span class="chem">4</span>. Each value is replaced by <span class="chem">y_i = 5 - 3x_i</span>. Find the variance of the new values.</p>
      stem: "<p>データセット <span class=\"chem\">x_1, x_2, …, x_n</span> の分散は <span class=\"chem\">4</span> である。各値を <span class=\"chem\">y_i = 5 - 3x_i</span> に置き換える。新しい値の分散を求めなさい (Find)。</p>",
      hints: [
        // EN: Variance scales by <span class="chem">a^2</span> under <span class="chem">y = ax + b</span>: <span class="chem">σ_y^2 = a^2 σ_x^2</span>. The constant <span class="chem">5</span> has no effect.
        "<span class=\"chem\">y = ax + b</span> のもとで、分散は <span class=\"chem\">a^2</span> 倍になります：<span class=\"chem\">σ_y^2 = a^2 σ_x^2</span>。定数 <span class=\"chem\">5</span> は影響しません。",
      ],
      // EN: <p><span class="chem">σ_y^2 = (-3)^2 × 4</span> <b>[M1]</b> <span class="chem">= 9 × 4 = 36</span> <b>[A1]</b>. (Squaring removes the negative sign; the variance can never be negative.)</p>
      solution: "<p><span class=\"chem\">σ_y^2 = (-3)^2 × 4</span> <b>[M1]</b> <span class=\"chem\">= 9 × 4 = 36</span> <b>[A1]</b>。（二乗すると負の符号は消える。分散が負になることはない。）</p>",
    },

    // ── t4-1-q050 · short · exam · SL · SL 4.2, 4.3 · 5 marks
    "t4-1-q050": {
      // EN: <p>For a data set <span class="chem">x</span>, the lower quartile is <span class="chem">14</span>, the median is <span class="chem">20</span> and the upper quartile is <span class="chem">27</span>. Each value is transformed using <span class="chem">y = 50 - 2x</span>.<br>(a) Find the median of <span class="chem">y</span>. <strong>[1 mark]</strong><br>(b) Find the lower and upper quartiles of <span class="chem">y</span>. <strong>[3 marks]</strong><br>(c) Hence write down the interquartile range of <span class="chem">y</span>. <strong>[1 mark]</strong></p>
      stem: "<p>データセット <span class=\"chem\">x</span> の第 1 四分位数は <span class=\"chem\">14</span>、中央値は <span class=\"chem\">20</span>、第 3 四分位数は <span class=\"chem\">27</span> である。各値を <span class=\"chem\">y = 50 - 2x</span> で変換する。<br>(a) <span class=\"chem\">y</span> の中央値を求めなさい (Find)。 <strong>[1 mark]</strong><br>(b) <span class=\"chem\">y</span> の第 1 四分位数と第 3 四分位数を求めなさい (Find)。 <strong>[3 marks]</strong><br>(c) これを用いて (Hence)、<span class=\"chem\">y</span> の四分位範囲を書きなさい。 <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: a linear change maps each ordered value to a new value, but a negative multiplier turns the order upside down. Ask: which <span class="chem">x</span>-quartile becomes the smaller <span class="chem">y</span>-value?
        "解読：一次変換は並べた各値を新しい値に移しますが、負の係数を掛けると順序が逆になります。<span class=\"chem\">x</span> のどちらの四分位数が <span class=\"chem\">y</span> の小さいほうの値になるかを考えましょう。",
        // EN: The median stays in the middle: just substitute <span class="chem">x = 20</span>.
        "中央値は真ん中のままです：<span class=\"chem\">x = 20</span> を代入するだけです。",
        // EN: Check your IQR with <span class="chem">IQR_y = |a| × IQR_x</span>.
        "IQR は <span class=\"chem\">IQR_y = |a| × IQR_x</span> で確認しましょう。",
      ],
      // EN: <p>(a) The middle value maps to the middle value: <span class="chem">50 - 2(20) = 10</span> <b>[A1]</b>.<br>(b) Since <span class="chem">-2 &lt; 0</span>, large <span class="chem">x</span> gives small <span class="chem">y</span>, so the quartiles swap <b>[R1]</b>: <span class="chem">Q_1(y) = 50 - 2(27) = -4</span> <b>[A1]</b> and <span class="chem">Q_3(y) = 50 - 2(14) = 22</span> <b>[A1]</b>.<br>(c) <span class="chem">IQR = 22 - (-4) = 26</span> <b>[A1]</b>, which equals <span class="chem">2 × 13</span>.</p>
      solution: "<p>(a) 真ん中の値は真ん中の値に移る：<span class=\"chem\">50 - 2(20) = 10</span> <b>[A1]</b>。<br>(b) <span class=\"chem\">-2 &lt; 0</span> なので、<span class=\"chem\">x</span> が大きいほど <span class=\"chem\">y</span> は小さくなり、四分位数が入れ替わる <b>[R1]</b>：<span class=\"chem\">Q_1(y) = 50 - 2(27) = -4</span> <b>[A1]</b>、<span class=\"chem\">Q_3(y) = 50 - 2(14) = 22</span> <b>[A1]</b>。<br>(c) <span class=\"chem\">IQR = 22 - (-4) = 26</span> <b>[A1]</b>。これは <span class=\"chem\">2 × 13</span> に等しい。</p>",
      // EN: <p>(a) <span class="chem">50 - 2(20) = 10</span><br>(b) Because the multiplier <span class="chem">-2</span> reverses the order, <span class="chem">Q_1(y) = 50 - 2(27) = -4</span> and <span class="chem">Q_3(y) = 50 - 2(14) = 22</span>.<br>(c) <span class="chem">IQR = 22 - (-4) = 26</span> (check: <span class="chem">|-2| × (27 - 14) = 26</span>).</p>
      answer: "<p>(a) <span class=\"chem\">50 - 2(20) = 10</span><br>(b) 係数 <span class=\"chem\">-2</span> によって順序が逆になるので、<span class=\"chem\">Q_1(y) = 50 - 2(27) = -4</span>、<span class=\"chem\">Q_3(y) = 50 - 2(14) = 22</span>。<br>(c) <span class=\"chem\">IQR = 22 - (-4) = 26</span>（確認：<span class=\"chem\">|-2| × (27 - 14) = 26</span>）。</p>",
      markscheme: [
        // EN: A1: Median of y = 50 − 2(20) = 10.
        "A1：y の中央値 = 50 − 2(20) = 10。",
        // EN: R1: Recognises that multiplying by −2 reverses the order, so the upper quartile of x gives the lower quartile of y.
        "R1：−2 を掛けると順序が逆になるので、x の第 3 四分位数から y の第 1 四分位数が得られることを理解している。",
        // EN: A1: Q₁(y) = 50 − 2(27) = −4.
        "A1：Q₁(y) = 50 − 2(27) = −4。",
        // EN: A1: Q₃(y) = 50 − 2(14) = 22.
        "A1：Q₃(y) = 50 − 2(14) = 22。",
        // EN: A1: IQR = 22 − (−4) = 26.
        "A1：IQR = 22 − (−4) = 26。",
      ],
    },

    // ── t4-1-q051 · numeric · exam · SL · SL 4.4 · 4 marks
    "t4-1-q051": {
      // EN: <p>For <span class="chem">12</span> pairs of data <span class="chem">(x, y)</span>, the regression line of <span class="chem">y</span> on <span class="chem">x</span> is <span class="chem">y = -1.6x + 48</span>. The sum of the <span class="chem">y</span>-values is <span class="chem">Σ y = 360</span>. Find the mean of the <span class="chem">x</span>-values.</p>
      stem: "<p><span class=\"chem\">12</span> 組のデータ <span class=\"chem\">(x, y)</span> について、<span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線は <span class=\"chem\">y = -1.6x + 48</span> である。<span class=\"chem\">y</span> の値の和は <span class=\"chem\">Σ y = 360</span> である。<span class=\"chem\">x</span> の値の平均値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: the only link between the line and the means is that the regression line passes through the mean point <span class="chem">(x̄, ȳ)</span>.
        "解読：直線と平均値を結びつける唯一の手がかりは、回帰直線が平均の点 <span class=\"chem\">(x̄, ȳ)</span> を通ることです。",
        // EN: First find <span class="chem">ȳ = 360/12</span>, then substitute <span class="chem">(x̄, ȳ)</span> into the line.
        "まず <span class=\"chem\">ȳ = 360/12</span> を求め、次に <span class=\"chem\">(x̄, ȳ)</span> を直線の式に代入します。",
      ],
      // EN: <p><span class="chem">ȳ = 360/12 = 30</span> <b>[A1]</b>. The line passes through <span class="chem">(x̄, ȳ)</span> <b>[M1]</b>, so <span class="chem">30 = -1.6x̄ + 48</span> <b>[A1]</b>, giving <span class="chem">x̄ = 18/1.6 = 11.25</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">ȳ = 360/12 = 30</span> <b>[A1]</b>。直線は <span class=\"chem\">(x̄, ȳ)</span> を通る <b>[M1]</b> ので、<span class=\"chem\">30 = -1.6x̄ + 48</span> <b>[A1]</b>、よって <span class=\"chem\">x̄ = 18/1.6 = 11.25</span> <b>[A1]</b>。</p>",
    },

    // ── t4-1-q052 · short · exam · SL · SL 4.4 · 5 marks
    "t4-1-q052": {
      // EN: <p>For <span class="chem">20</span> car models with engine power <span class="chem">x</span> kW, where <span class="chem">50 ≤ x ≤ 150</span>, the regression line of fuel use <span class="chem">y</span> (litres per 100 km) on <span class="chem">x</span> is <span class="chem">y = 0.04x + 3.2</span>, with <span class="chem">r = 0.91</span>.<br>(a) Interpret the value <span class="chem">0.04</span> in context. <strong>[1 mark]</strong><br>(b) Explain why the value <span class="chem">3.2</span> should not be interpreted as the fuel use of a car with no engine power. <strong>[1 mark]</strong><br>(c) Estimate the fuel use of a car with engine power <span class="chem">120</span> kW. <strong>[2 marks]</strong><br>(d) A sports car has engine power <span class="chem">400</span> kW. Comment on using the line to estimate its fuel use. <strong>[1 mark]</strong></p>
      stem: "<p>エンジン出力 <span class=\"chem\">x</span> kW（<span class=\"chem\">50 ≤ x ≤ 150</span>）の <span class=\"chem\">20</span> 車種について、燃料消費量 <span class=\"chem\">y</span>（100 km あたりのリットル数）の <span class=\"chem\">x</span> への回帰直線は <span class=\"chem\">y = 0.04x + 3.2</span>、<span class=\"chem\">r = 0.91</span> である。<br>(a) 値 <span class=\"chem\">0.04</span> を文脈に即して解釈しなさい (Interpret)。 <strong>[1 mark]</strong><br>(b) 値 <span class=\"chem\">3.2</span> をエンジン出力のない車の燃料消費量と解釈すべきでない理由を説明しなさい (Explain)。 <strong>[1 mark]</strong><br>(c) エンジン出力 <span class=\"chem\">120</span> kW の車の燃料消費量を推定しなさい (Estimate)。 <strong>[2 marks]</strong><br>(d) あるスポーツカーのエンジン出力は <span class=\"chem\">400</span> kW である。この直線を使ってその燃料消費量を推定することについて述べなさい (Comment)。 <strong>[1 mark]</strong></p>",
      hints: [
        // EN: The gradient is a rate: change in <span class="chem">y</span> per one unit of <span class="chem">x</span>, with units.
        "傾きは変化率です：<span class=\"chem\">x</span> が一単位増えるごとの <span class=\"chem\">y</span> の変化を、単位つきで述べます。",
        // EN: Before interpreting the intercept, check whether <span class="chem">x = 0</span> is inside the data range.
        "切片を解釈する前に、<span class=\"chem\">x = 0</span> がデータの範囲内にあるかどうかを確認しましょう。",
      ],
      // EN: <p>(a) For each extra kW, fuel use increases by about <span class="chem">0.04</span> L per 100 km <b>[A1]</b>.<br>(b) The intercept is the value at <span class="chem">x = 0</span>, which is far outside <span class="chem">50 ≤ x ≤ 150</span>, so it is an extrapolation with no real meaning <b>[R1]</b>.<br>(c) <span class="chem">y = 0.04(120) + 3.2</span> <b>[M1]</b> <span class="chem">= 4.8 + 3.2 = 8.0</span> L per 100 km <b>[A1]</b>.<br>(d) <span class="chem">400</span> kW is well outside the data, so the estimate is an extrapolation and unreliable; a strong <span class="chem">r</span> only describes the pattern inside the data <b>[R1]</b>.</p>
      solution: "<p>(a) 出力が一 kW 増えるごとに、燃料消費量は 100 km あたりおよそ <span class=\"chem\">0.04</span> L 増える <b>[A1]</b>。<br>(b) 切片は <span class=\"chem\">x = 0</span> での値であり、<span class=\"chem\">50 ≤ x ≤ 150</span> から大きく外れているので、実際の意味をもたない外挿である <b>[R1]</b>。<br>(c) <span class=\"chem\">y = 0.04(120) + 3.2</span> <b>[M1]</b> <span class=\"chem\">= 4.8 + 3.2 = 8.0</span> L（100 km あたり）<b>[A1]</b>。<br>(d) <span class=\"chem\">400</span> kW はデータから大きく外れているので、この推定は外挿であり信頼できない。強い <span class=\"chem\">r</span> はデータの内側の傾向を表すにすぎない <b>[R1]</b>。</p>",
      // EN: <p>(a) Each extra kW of engine power is associated with an increase of about <span class="chem">0.04</span> L per 100 km in fuel use.<br>(b) <span class="chem">x = 0</span> is far outside the data range <span class="chem">50 ≤ x ≤ 150</span> (and a car with no power is not meaningful), so this is extrapolation.<br>(c) <span class="chem">0.04(120) + 3.2 = 8.0</span> L per 100 km.<br>(d) Unreliable: <span class="chem">400</span> kW is outside the data range, so this is extrapolation.</p>
      answer: "<p>(a) エンジン出力が一 kW 増えるごとに、燃料消費量は 100 km あたりおよそ <span class=\"chem\">0.04</span> L 増える傾向がある。<br>(b) <span class=\"chem\">x = 0</span> はデータの範囲 <span class=\"chem\">50 ≤ x ≤ 150</span> から大きく外れている（しかも出力のない車は意味をなさない）ので、これは外挿である。<br>(c) <span class=\"chem\">0.04(120) + 3.2 = 8.0</span> L（100 km あたり）。<br>(d) 信頼できない：<span class=\"chem\">400</span> kW はデータの範囲の外にあるので、これは外挿である。</p>",
      markscheme: [
        // EN: A1: Fuel use rises by about 0.04 L per 100 km for each additional kW, on average.
        "A1：出力が一 kW 増えるごとに、燃料消費量は平均して 100 km あたりおよそ 0.04 L 増える。",
        // EN: R1: x = 0 lies outside 50 ≤ x ≤ 150, so the intercept is an extrapolation and has no practical meaning.
        "R1：x = 0 は 50 ≤ x ≤ 150 の外にあるので、切片は外挿であり、実用上の意味をもたない。",
        // EN: M1: Substitutes x = 120 into the line.
        "M1：直線に x = 120 を代入する。",
        // EN: A1: y = 8.0 L per 100 km.
        "A1：y = 8.0 L（100 km あたり）。",
        // EN: R1: 400 kW is outside the range of the data (extrapolation), so the estimate is unreliable even though r is high.
        "R1：400 kW はデータの範囲の外にある（外挿）ので、r が大きくても推定は信頼できない。",
      ],
    },

    // ── t4-1-q053 · numeric · exam · SL · SL 4.3 · 3 marks
    "t4-1-q053": {
      // EN: <p>The waiting times <span class="chem">w</span> minutes of <span class="chem">20</span> patients at a clinic are grouped below.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Waiting time <span class="chem">w</span> (min)</th><td class="num">0 ≤ <i>w</i> &lt; 10</td><td class="num">10 ≤ <i>w</i> &lt; 20</td><td class="num">20 ≤ <i>w</i> &lt; 30</td><td class="num">30 ≤ <i>w</i> &lt; 40</td></tr><tr><th scope="row">Frequency</th><td class="num">3</td><td class="num">7</td><td class="num">6</td><td class="num">4</td></tr></tbody></table></div><p>Calculate an estimate of the mean waiting time.</p>
      stem: "<p>ある診療所の患者 <span class=\"chem\">20</span> 人の待ち時間 <span class=\"chem\">w</span> 分を次のように階級に分けた。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">待ち時間 <span class=\"chem\">w</span> (min)</th><td class=\"num\">0 ≤ <i>w</i> &lt; 10</td><td class=\"num\">10 ≤ <i>w</i> &lt; 20</td><td class=\"num\">20 ≤ <i>w</i> &lt; 30</td><td class=\"num\">30 ≤ <i>w</i> &lt; 40</td></tr><tr><th scope=\"row\">度数</th><td class=\"num\">3</td><td class=\"num\">7</td><td class=\"num\">6</td><td class=\"num\">4</td></tr></tbody></table></div><p>待ち時間の平均値の推定値を計算しなさい (Calculate)。</p>",
      hints: [
        // EN: Use the mid-interval values <span class="chem">5, 15, 25, 35</span>.
        "階級値 <span class=\"chem\">5, 15, 25, 35</span> を使います。",
        // EN: <span class="chem">x̄ ≈ (Σ f x)/(Σ f)</span> with <span class="chem">Σ f = 20</span>.
        "<span class=\"chem\">x̄ ≈ (Σ f x)/(Σ f)</span>（ただし <span class=\"chem\">Σ f = 20</span>）です。",
      ],
      // EN: <p>Mid-interval values <span class="chem">5, 15, 25, 35</span> <b>[M1]</b>.<br><span class="chem">Σ f x = 15 + 105 + 150 + 140 = 410</span> <b>[A1]</b>, so <span class="chem">x̄ ≈ 410/20 = 20.5</span> min <b>[A1]</b>.</p>
      solution: "<p>階級値 <span class=\"chem\">5, 15, 25, 35</span> <b>[M1]</b>。<br><span class=\"chem\">Σ f x = 15 + 105 + 150 + 140 = 410</span> <b>[A1]</b>、よって <span class=\"chem\">x̄ ≈ 410/20 = 20.5</span> 分 <b>[A1]</b>。</p>",
    },

    // ── t4-1-q054 · numeric · challenge · SL · SL 4.1, 4.3 · 4 marks
    "t4-1-q054": {
      // EN: <p>The mean mass of <span class="chem">20</span> parcels was calculated as <span class="chem">35</span> kg. A clerk later finds that one parcel of mass <span class="chem">74</span> kg had been entered as <span class="chem">47</span> kg. Find the exact value of the correct mean mass.</p>
      stem: "<p><span class=\"chem\">20</span> 個の小包の質量の平均値は <span class=\"chem\">35</span> kg と計算された。後で事務員が、質量 <span class=\"chem\">74</span> kg の小包一つが <span class=\"chem\">47</span> kg と入力されていたことに気づいた。正しい質量の平均値の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: a mean is a total divided by a count. The count (20) is unchanged; only the total was wrong, and you know by how much.
        "解読：平均値は合計を個数で割ったものです。個数 (20) は変わりません。間違っていたのは合計だけで、どれだけ違っていたかはわかっています。",
        // EN: Wrong total <span class="chem">= 20 × 35 = 700</span>. The correct total is larger by <span class="chem">74 - 47</span>.
        "誤った合計 <span class=\"chem\">= 20 × 35 = 700</span>。正しい合計は <span class=\"chem\">74 - 47</span> だけ大きくなります。",
      ],
      // EN: <p><b>Decode:</b> correct the total, keep <span class="chem">n = 20</span>.<br>Recorded total <span class="chem">= 20 × 35 = 700</span> kg <b>[M1]</b>. The error was <span class="chem">74 - 47 = 27</span> kg too little <b>[A1]</b>, so the correct total is <span class="chem">727</span> kg <b>[A1]</b> and the correct mean is <span class="chem">727/20 = 36.35</span> kg <b>[A1]</b>.</p>
      solution: "<p><b>解読：</b>合計を訂正し、<span class=\"chem\">n = 20</span> はそのままにする。<br>記録された合計 <span class=\"chem\">= 20 × 35 = 700</span> kg <b>[M1]</b>。誤りにより <span class=\"chem\">74 - 47 = 27</span> kg 少なくなっていた <b>[A1]</b> ので、正しい合計は <span class=\"chem\">727</span> kg <b>[A1]</b>、正しい平均値は <span class=\"chem\">727/20 = 36.35</span> kg <b>[A1]</b>。</p>",
    },

    // ── t4-1-q055 · numeric · challenge · SL · SL 4.3 · 4 marks
    "t4-1-q055": {
      // EN: <p>A set of <span class="chem">n</span> numbers has mean <span class="chem">12</span>. When the number <span class="chem">30</span> is added to the set, the mean of the enlarged set is <span class="chem">13.5</span>. Find the value of <span class="chem">n</span>.</p>
      stem: "<p><span class=\"chem\">n</span> 個の数の集まりの平均値は <span class=\"chem\">12</span> である。この集まりに数 <span class=\"chem\">30</span> を加えると、大きくなった集まりの平均値は <span class=\"chem\">13.5</span> になる。<span class=\"chem\">n</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: <span class="chem">n</span> is the <em>number of values</em>, not one of the values. Write each mean as (total) ÷ (count).
        "解読：<span class=\"chem\">n</span> は<em>値の個数</em>であり、値の一つではありません。それぞれの平均値を（合計）÷（個数）で表しましょう。",
        // EN: Original total <span class="chem">= 12n</span>; new total <span class="chem">= 12n + 30</span> and new count <span class="chem">= n + 1</span>.
        "元の合計 <span class=\"chem\">= 12n</span>。新しい合計 <span class=\"chem\">= 12n + 30</span>、新しい個数 <span class=\"chem\">= n + 1</span> です。",
        // EN: Solve <span class="chem">(12n + 30)/(n + 1) = 13.5</span>.
        "<span class=\"chem\">(12n + 30)/(n + 1) = 13.5</span> を解きます。",
      ],
      // EN: <p><b>Decode:</b> <span class="chem">n</span> is the size of the original set.<br>Original total <span class="chem">12n</span> <b>[M1]</b>; <span class="chem">(12n + 30)/(n + 1) = 13.5</span> <b>[A1]</b>.<br><span class="chem">12n + 30 = 13.5n + 13.5 ⇒ 1.5n = 16.5</span> <b>[A1]</b>, so <span class="chem">n = 11</span> <b>[A1]</b>.</p>
      solution: "<p><b>解読：</b><span class=\"chem\">n</span> は元の集まりの大きさである。<br>元の合計 <span class=\"chem\">12n</span> <b>[M1]</b>。<span class=\"chem\">(12n + 30)/(n + 1) = 13.5</span> <b>[A1]</b>。<br><span class=\"chem\">12n + 30 = 13.5n + 13.5 ⇒ 1.5n = 16.5</span> <b>[A1]</b>、よって <span class=\"chem\">n = 11</span> <b>[A1]</b>。</p>",
    },

    // ── t4-1-q056 · numeric · challenge · SL · SL 4.3 · 4 marks
    "t4-1-q056": {
      // EN: <p>A sports scientist kept only running totals for the <span class="chem">10</span> jump heights <span class="chem">h</span> cm of an athlete: <span class="chem">Σ h = 60</span> and <span class="chem">Σ h^2 = 460</span>. Find the exact value of the standard deviation of the <span class="chem">10</span> heights.</p>
      stem: "<p>あるスポーツ科学者は、ある選手の <span class=\"chem\">10</span> 回のジャンプの高さ <span class=\"chem\">h</span> cm について合計だけを記録していた：<span class=\"chem\">Σ h = 60</span>、<span class=\"chem\">Σ h^2 = 460</span>。<span class=\"chem\">10</span> 個の高さの標準偏差の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: you have no raw data, only totals. The formula booklet gives <span class="chem">σ^2 = (Σ x^2)/n - x̄^2</span> (from <span class="chem">σ^2 = Σ(x - μ)^2 / n</span>).
        "解読：元のデータはなく、合計だけがあります。公式集には <span class=\"chem\">σ^2 = (Σ x^2)/n - x̄^2</span>（<span class=\"chem\">σ^2 = Σ(x - μ)^2 / n</span> から導かれる）があります。",
        // EN: First <span class="chem">x̄ = 60/10 = 6</span>.
        "まず <span class=\"chem\">x̄ = 60/10 = 6</span> です。",
      ],
      // EN: <p><b>Decode:</b> use the totals form of the variance.<br><span class="chem">x̄ = 60/10 = 6</span> <b>[A1]</b>. <span class="chem">σ^2 = 460/10 - 6^2</span> <b>[M1]</b> <span class="chem">= 46 - 36 = 10</span> <b>[A1]</b>, so <span class="chem">σ = √10</span> cm <b>[A1]</b>.</p>
      solution: "<p><b>解読：</b>合計を用いた分散の式を使う。<br><span class=\"chem\">x̄ = 60/10 = 6</span> <b>[A1]</b>。<span class=\"chem\">σ^2 = 460/10 - 6^2</span> <b>[M1]</b> <span class=\"chem\">= 46 - 36 = 10</span> <b>[A1]</b>、よって <span class=\"chem\">σ = √10</span> cm <b>[A1]</b>。</p>",
    },

    // ── t4-1-q057 · numeric · challenge · SL · SL 4.3 · 3 marks
    "t4-1-q057": {
      // EN: <p>At a company the annual salaries have mean <span class="chem">$48 000</span> and standard deviation <span class="chem">$2500</span>. Next year every employee will receive a <span class="chem">4%</span> pay rise followed by a fixed bonus of <span class="chem">$500</span>. Find the standard deviation of the new salaries, in dollars.</p>
      stem: "<p>ある会社の年俸の平均値は <span class=\"chem\">$48 000</span>、標準偏差は <span class=\"chem\">$2500</span> である。来年、全従業員が <span class=\"chem\">4%</span> の昇給を受け、そのあと一律 <span class=\"chem\">$500</span> のボーナスを受け取る。新しい年俸の標準偏差をドルで求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: "a 4% rise then a $500 bonus" is the linear change <span class="chem">y = 1.04x + 500</span>. Which part changes the spread?
        "解読：「4% の昇給のあと $500 のボーナス」は一次変換 <span class=\"chem\">y = 1.04x + 500</span> です。散らばりを変えるのはどちらの部分でしょうか？",
        // EN: <span class="chem">σ_y = |a| σ_x</span>; adding the same amount to everyone does not change the spread.
        "<span class=\"chem\">σ_y = |a| σ_x</span>。全員に同じ額を足しても散らばりは変わりません。",
      ],
      // EN: <p><b>Decode:</b> new salary <span class="chem">y = 1.04x + 500</span> <b>[M1]</b>.<br><span class="chem">σ_y = 1.04 × 2500</span> <b>[A1]</b> <span class="chem">= 2600</span> dollars <b>[A1]</b>. The bonus moves every salary by the same amount, so it does not affect the spread.</p>
      solution: "<p><b>解読：</b>新しい年俸 <span class=\"chem\">y = 1.04x + 500</span> <b>[M1]</b>。<br><span class=\"chem\">σ_y = 1.04 × 2500</span> <b>[A1]</b> <span class=\"chem\">= 2600</span> ドル <b>[A1]</b>。ボーナスはすべての年俸を同じ額だけずらすので、散らばりには影響しない。</p>",
    },

    // ── t4-1-q058 · mcq · exam · SL · SL 4.4 · 2 marks
    "t4-1-q058": {
      // EN: <p>For <span class="chem">30</span> towns, the correlation coefficient between the number of fast-food outlets <span class="chem">x</span> and the average life expectancy <span class="chem">y</span> is <span class="chem">r = -0.92</span>. Which statement is correct?</p>
      stem: "<p><span class=\"chem\">30</span> の町について、ファストフード店の数 <span class=\"chem\">x</span> と平均寿命 <span class=\"chem\">y</span> の相関係数は <span class=\"chem\">r = -0.92</span> である。正しい記述はどれですか？</p>",
      options: [
        // EN: There is a strong negative linear correlation: towns with more fast-food outlets tend to have a lower life expectancy.
        "強い負の線形相関がある：ファストフード店が多い町ほど平均寿命が短い傾向がある。",
        // EN: Opening more fast-food outlets in a town will cause its life expectancy to fall.
        "町にファストフード店をもっと開くと、その町の平均寿命が下がる。",
        // EN: Life expectancy falls by <span class="chem">0.92</span> years for each extra fast-food outlet.
        "ファストフード店が一店増えるごとに、平均寿命は <span class=\"chem\">0.92</span> 年下がる。",
        // EN: <span class="chem">92%</span> of the towns lie exactly on the regression line.
        "町の <span class=\"chem\">92%</span> が回帰直線上にぴったりのっている。",
      ],
      hints: [
        // EN: The sign of <span class="chem">r</span> gives the direction, and <span class="chem">|r|</span> close to 1 means the points are close to a straight line. What does <span class="chem">r</span> <em>not</em> tell you?
        "<span class=\"chem\">r</span> の符号は向きを表し、<span class=\"chem\">|r|</span> が 1 に近いことは点が直線の近くにあることを意味します。<span class=\"chem\">r</span> から<em>わからない</em>ことは何でしょうか？",
      ],
      // EN: <p><span class="chem">r = -0.92</span> shows a strong negative linear correlation <b>[A1]</b>. It says nothing about cause and effect, and it is not the gradient <b>[R1]</b>.</p>
      solution: "<p><span class=\"chem\">r = -0.92</span> は強い負の線形相関を示す <b>[A1]</b>。これは原因と結果については何も語らず、傾きでもない <b>[R1]</b>。</p>",
      misconception: {
        // EN (option B): Correlation does not show causation. Both variables may depend on something else, such as income or town size.
        "1": "相関は因果関係を示しません。両方の変数が、収入や町の規模など別の何かに左右されているのかもしれません。",
        // EN (option C): r is not the gradient of the regression line. The gradient depends on the units of x and y; r has no units.
        "2": "r は回帰直線の傾きではありません。傾きは x と y の単位によって決まりますが、r には単位がありません。",
        // EN (option D): r measures how closely the points cluster around a line; it is not a percentage of points on the line.
        "3": "r は点が直線のまわりにどれだけ密集しているかを測るもので、直線上にある点の割合ではありません。",
      },
    },

    // ── t4-1-q059 · short · challenge · SL · SL 4.1, 4.2, 4.3 · 7 marks
    "t4-1-q059": {
      // EN: <p>A swimming coach records the 100 m freestyle times, in seconds, of the <span class="chem">9</span> swimmers in a squad:</p><p class="chem">61, 58, 95, 64, 66, 63, 70, 65, 68.</p><p>Quartiles are found by taking the median of each half, leaving out the overall median.<br>(a) Find the median and the quartiles <span class="chem">Q_1</span> and <span class="chem">Q_3</span>. <strong>[3 marks]</strong><br>(b) Show that <span class="chem">95</span> s is an outlier. <strong>[2 marks]</strong><br>(c) The swimmer who recorded <span class="chem">95</span> s had cramp during the race. State, with a reason, whether the coach should include this time when choosing a typical squad time. <strong>[1 mark]</strong><br>(d) State whether the mean or the median is the better measure of a typical time for these <span class="chem">9</span> swimmers, and why. <strong>[1 mark]</strong></p>
      stem: "<p>水泳のコーチが、チームの <span class=\"chem\">9</span> 人の選手の 100 m 自由形のタイム（秒）を記録した：</p><p class=\"chem\">61, 58, 95, 64, 66, 63, 70, 65, 68.</p><p>四分位数は、前半と後半それぞれの中央値をとり、全体の中央値を除いて求める。<br>(a) 中央値と四分位数 <span class=\"chem\">Q_1</span>、<span class=\"chem\">Q_3</span> を求めなさい (Find)。 <strong>[3 marks]</strong><br>(b) <span class=\"chem\">95</span> s が外れ値であることを示しなさい (Show that)。 <strong>[2 marks]</strong><br>(c) <span class=\"chem\">95</span> s を記録した選手はレース中に足がつっていた。チームの代表的なタイムを選ぶときに、コーチがこのタイムを含めるべきかどうかを、理由とともに述べなさい (State)。 <strong>[1 mark]</strong><br>(d) この <span class=\"chem\">9</span> 人の選手の代表的なタイムの尺度として、平均値と中央値のどちらがよいかを、その理由とともに述べなさい (State)。 <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: an outlier is not automatically an error. Part (c) asks you to decide, in context, whether the value represents what the coach wants to measure.
        "解読：外れ値は自動的に誤りというわけではありません。(c) では、その値がコーチの測りたいものを表しているかどうかを、文脈に即して判断します。",
        // EN: Ordered data: <span class="chem">58, 61, 63, 64, 65, 66, 68, 70, 95</span>. The median is the 5th value.
        "並べたデータ：<span class=\"chem\">58, 61, 63, 64, 65, 66, 68, 70, 95</span>。中央値は 5 番目の値です。",
        // EN: Lower half: the 4 values below the median; upper half: the 4 values above it.
        "前半：中央値より小さい 4 個の値。後半：中央値より大きい 4 個の値。",
      ],
      // EN: <p><b>Decode:</b> test 95 with the fence rule, then judge it in context (genuine but unrepresentative).<br>(a) Ordered: <span class="chem">58, 61, 63, 64, 65, 66, 68, 70, 95</span>. Median <span class="chem">65</span> <b>[A1]</b>, <span class="chem">Q_1 = (61 + 63)/2 = 62</span> <b>[A1]</b>, <span class="chem">Q_3 = (68 + 70)/2 = 69</span> <b>[A1]</b>.<br>(b) <span class="chem">IQR = 69 - 62 = 7</span>, upper fence <span class="chem">= 69 + 1.5(7) = 79.5</span> <b>[M1]</b>. <span class="chem">95 &gt; 79.5</span>, so 95 is an outlier <b>[R1]</b>.<br>(c) The time was really swum, but cramp made it unrepresentative of the swimmer's ability, so it should be excluded when describing a typical squad time <b>[R1]</b>.<br>(d) The median: one extreme value pulls the mean upwards but hardly moves the median <b>[R1]</b>.</p>
      solution: "<p><b>解読：</b>境界の規則で 95 を調べ、それから文脈に即して判断する（本物だが代表的でない値）。<br>(a) 小さい順：<span class=\"chem\">58, 61, 63, 64, 65, 66, 68, 70, 95</span>。中央値 <span class=\"chem\">65</span> <b>[A1]</b>、<span class=\"chem\">Q_1 = (61 + 63)/2 = 62</span> <b>[A1]</b>、<span class=\"chem\">Q_3 = (68 + 70)/2 = 69</span> <b>[A1]</b>。<br>(b) <span class=\"chem\">IQR = 69 - 62 = 7</span>、上側境界 <span class=\"chem\">= 69 + 1.5(7) = 79.5</span> <b>[M1]</b>。<span class=\"chem\">95 &gt; 79.5</span> なので 95 は外れ値である <b>[R1]</b>。<br>(c) このタイムは実際に泳いだものだが、足がつったためにその選手の実力を代表していないので、チームの代表的なタイムを述べるときには除くべきである <b>[R1]</b>。<br>(d) 中央値：一つの極端な値は平均値を引き上げるが、中央値はほとんど動かさない <b>[R1]</b>。</p>",
      // EN: <p>(a) Median <span class="chem">65</span>, <span class="chem">Q_1 = 62</span>, <span class="chem">Q_3 = 69</span>.<br>(b) <span class="chem">IQR = 7</span>; upper fence <span class="chem">69 + 1.5(7) = 79.5</span> and <span class="chem">95 &gt; 79.5</span>.<br>(c) Leave it out: it is a genuine time, but it was caused by cramp, so it does not represent the swimmer's normal performance.<br>(d) The median, because it is not affected by the outlier (the mean is pulled upwards by 95).</p>
      answer: "<p>(a) 中央値 <span class=\"chem\">65</span>、<span class=\"chem\">Q_1 = 62</span>、<span class=\"chem\">Q_3 = 69</span>。<br>(b) <span class=\"chem\">IQR = 7</span>。上側境界 <span class=\"chem\">69 + 1.5(7) = 79.5</span>、<span class=\"chem\">95 &gt; 79.5</span>。<br>(c) 除く：本物のタイムだが足がつったことによるものなので、その選手のふだんの実力を表していない。<br>(d) 中央値。外れ値の影響を受けないからである（平均値は 95 によって引き上げられる）。</p>",
      markscheme: [
        // EN: A1: Median = 65 s.
        "A1：中央値 = 65 s。",
        // EN: A1: Q₁ = (61 + 63)/2 = 62 s.
        "A1：Q₁ = (61 + 63)/2 = 62 s。",
        // EN: A1: Q₃ = (68 + 70)/2 = 69 s.
        "A1：Q₃ = (68 + 70)/2 = 69 s。",
        // EN: M1: IQR = 7 and upper fence = 69 + 1.5(7) = 79.5.
        "M1：IQR = 7、上側境界 = 69 + 1.5(7) = 79.5。",
        // EN: R1: 95 > 79.5, so 95 is an outlier.
        "R1：95 > 79.5 なので、95 は外れ値である。",
        // EN: R1: Exclude it (with a reason): the value is genuine but unrepresentative, because it was caused by cramp.
        "R1：（理由とともに）除く：この値は本物だが、足がつったことによるものなので代表的でない。",
        // EN: R1: Median, because it is resistant to the outlier.
        "R1：中央値。外れ値の影響を受けにくいから。",
      ],
    },

  }
});
