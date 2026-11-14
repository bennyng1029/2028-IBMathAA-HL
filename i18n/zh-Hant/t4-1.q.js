/* t4-1.q — zh-Hant question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't4-1.q', {
  questions: {

    // ── t4-1-q001 · mcq · foundation · SL · SL 4.1 · 2 marks
    "t4-1-q001": {
      // EN: <p>A school has <span class="chem">800</span> students divided into four year groups: <span class="chem">240</span> in Year 9, <span class="chem">200</span> in Year 10, <span class="chem">180</span> in Year 11, and <span class="chem">180</span> in Year 12. A student council takes a <strong>stratified random sample</strong> of <span class="chem">60</span> students altogether. How many Year 9 students should be selected?</p>
      stem: "<p>一所學校共有 <span class=\"chem\">800</span> 名學生，分為四個年級：9 年級 <span class=\"chem\">240</span> 人、10 年級 <span class=\"chem\">200</span> 人、11 年級 <span class=\"chem\">180</span> 人、12 年級 <span class=\"chem\">180</span> 人。學生會共抽取一個容量為 <span class=\"chem\">60</span> 人的<strong>分層隨機樣本</strong>。應選出多少名 9 年級學生？</p>",
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
        "在分層抽樣中，每層按其在總體中所佔比例抽樣：<span class=\"chem\">(N_i / N) × n</span>。",
        // EN: Compute <span class="chem">(240 / 800) × 60</span>.
        "計算 <span class=\"chem\">(240 / 800) × 60</span>。",
      ],
      // EN: <p>The proportion of Year 9 students in the population is <span class="chem">240 / 800 = 0.30</span>. Multiplying by the sample size <span class="chem">n = 60</span> gives <span class="chem">0.30 × 60 = 18</span> students.</p>
      solution: "<p>9 年級學生在總體中所佔比例為 <span class=\"chem\">240 / 800 = 0.30</span>。乘以樣本容量 <span class=\"chem\">n = 60</span> 得 <span class=\"chem\">0.30 × 60 = 18</span> 名學生。</p>",
      misconception: {
        // EN (option B): You divided 60 equally across the 4 year groups (60 / 4 = 15), which ignores the different year-group sizes.
        "1": "你把 60 平均分配給 4 個年級（60 / 4 = 15），忽略了各年級人數不同的事實。",
        // EN (option C): You took 1/3 of 60 instead of using the exact fraction 240 / 800 = 0.30.
        "2": "你取了 60 的 1/3，而非使用準確比例 240 / 800 = 0.30。",
        // EN (option D): You took 10% of 240 instead of scaling by the sampling fraction 60 / 800.
        "3": "你取了 240 的 10%，而非按抽樣比例 60 / 800 縮放。",
      },
    },

    // ── t4-1-q002 · mcq · foundation · SL · SL 4.1 · 2 marks
    "t4-1-q002": {
      // EN: <p>An airport researcher stands at the exit gate and interviews the first <span class="chem">25</span> passengers from Economy Class and the first <span class="chem">10</span> passengers from Business Class who walk past, until both target numbers are reached. What sampling technique is being used?</p>
      stem: "<p>一名機場研究員站在離境閘口，訪問最先走過的首 <span class=\"chem\">25</span> 名經濟艙乘客及首 <span class=\"chem\">10</span> 名商務艙乘客，直至兩項目標人數均達標為止。這裡使用了哪種抽樣方法？</p>",
      options: [
        // EN: Quota sampling
        "配額抽樣",
        // EN: Stratified random sampling
        "分層隨機抽樣",
        // EN: Systematic sampling
        "系統抽樣",
        // EN: Simple random sampling
        "簡單隨機抽樣",
      ],
      hints: [
        // EN: Notice two features: the population is split into subgroups with fixed target counts, AND individuals are chosen non-randomly by convenience.
        "留意兩個特徵：總體被分為有固定目標人數的子群，而且個體是按便利以非隨機方式選出。",
      ],
      // EN: <p>When a population is divided into subgroups with fixed target sizes (quotas) but subjects are selected non-randomly as they arrive, the method is <strong>quota sampling</strong>.</p>
      solution: "<p>當總體被分為具有固定目標人數（配額）的子群，但受訪者是按到達先後以非隨機方式選出時，該方法稱為<strong>配額抽樣</strong>。</p>",
      misconception: {
        // EN (option B): Stratified sampling requires selecting individuals at random from a full list within each subgroup; here passengers were chosen by convenience as they walked past.
        "1": "分層抽樣需要在每個子群的完整名單中隨機抽取個體；此處乘客是按走過閘口的便利方式選出。",
        // EN (option C): Systematic sampling selects every k-th passenger from an ordered list, not the first people to walk past.
        "2": "系統抽樣是從有序名單中每隔 k 人抽取一位乘客，而非選取最先走過的人。",
        // EN (option D): Simple random sampling gives every passenger on the flight an equal chance of selection via a random draw.
        "3": "簡單隨機抽樣是透過隨機抽籤使航班上每位乘客都有均等被選中的機會。",
      },
    },

    // ── t4-1-q003 · numeric · foundation · SL · SL 4.2 · 3 marks
    "t4-1-q003": {
      // EN: <p>A box-and-whisker plot summarizes a dataset with lower quartile <span class="chem">Q_1 = 28</span>, median <span class="chem">M = 36</span>, and upper quartile <span class="chem">Q_3 = 48</span>. Using the <span class="chem">1.5 × IQR</span> criterion, find the <strong>upper outlier boundary</strong> (fence).</p>
      stem: "<p>一個框線圖概括了某數據集，其中下四分位數 <span class=\"chem\">Q_1 = 28</span>、中位數 <span class=\"chem\">M = 36</span>、上四分位數 <span class=\"chem\">Q_3 = 48</span>。利用 <span class=\"chem\">1.5 × IQR</span> 準則，求 (find) <strong>上異常值界線</strong>。</p>",
      hints: [
        // EN: First compute the interquartile range <span class="chem">IQR = Q_3 - Q_1</span>.
        "先計算四分位數間距 <span class=\"chem\">IQR = Q_3 - Q_1</span>。",
        // EN: Then evaluate <span class="chem">Q_3 + 1.5 × IQR</span>.
        "然後計算 <span class=\"chem\">Q_3 + 1.5 × IQR</span>。",
      ],
      // EN: <p><span class="chem">IQR = 48 - 28 = 20</span> <b>[A1]</b>.<br>Upper fence <span class="chem">= Q_3 + 1.5 × IQR = 48 + 1.5(20) = 48 + 30 = 78</span> <b>[M1 A1]</b>.</p>
      solution: "<p><span class=\"chem\">IQR = 48 - 28 = 20</span> <b>[A1]</b>.<br>上界線 <span class=\"chem\">= Q_3 + 1.5 × IQR = 48 + 1.5(20) = 48 + 30 = 78</span> <b>[M1 A1]</b>.</p>",
    },

    // ── t4-1-q004 · numeric · foundation · SL · SL 4.2 · 3 marks
    "t4-1-q004": {
      // EN: <p>For the same dataset with <span class="chem">Q_1 = 28</span> and <span class="chem">Q_3 = 48</span>, find the <strong>lower outlier boundary</strong> (<span class="chem">Q_1 - 1.5 × IQR</span>).</p>
      stem: "<p>對於同一個 <span class=\"chem\">Q_1 = 28</span> 及 <span class=\"chem\">Q_3 = 48</span> 的數據集，求 (find) <strong>下異常值界線</strong>（<span class=\"chem\">Q_1 - 1.5 × IQR</span>）。</p>",
      hints: [
        // EN: Use <span class="chem">IQR = 48 - 28 = 20</span>.
        "使用 <span class=\"chem\">IQR = 48 - 28 = 20</span>。",
        // EN: Compute <span class="chem">28 - 1.5 × 20</span>.
        "計算 <span class=\"chem\">28 - 1.5 × 20</span>。",
      ],
      // EN: <p><span class="chem">IQR = 20</span> <b>[A1]</b>. Lower fence <span class="chem">= Q_1 - 1.5 × IQR = 28 - 30 = -2</span> <b>[M1 A1]</b>.</p>
      solution: "<p><span class=\"chem\">IQR = 20</span> <b>[A1]</b>。下界線 <span class=\"chem\">= Q_1 - 1.5 × IQR = 28 - 30 = -2</span> <b>[M1 A1]</b>.</p>",
    },

    // ── t4-1-q005 · mcq · foundation · SL · SL 4.3 · 2 marks
    "t4-1-q005": {
      // EN: <p>A dataset <span class="chem">X</span> has mean <span class="chem">x̄ = 12</span> and standard deviation <span class="chem">σ_X = 2.5</span>. Each value is transformed using the linear coding <span class="chem">Y = 50 - 4X</span>. What are the mean <span class="chem">ȳ</span> and standard deviation <span class="chem">σ_Y</span> of <span class="chem">Y</span>?</p>
      stem: "<p>數據集 <span class=\"chem\">X</span> 的平均數為 <span class=\"chem\">x̄ = 12</span>，標準差為 <span class=\"chem\">σ_X = 2.5</span>。每個數值經線性編碼 <span class=\"chem\">Y = 50 - 4X</span> 變換。<span class=\"chem\">Y</span> 的平均數 <span class=\"chem\">ȳ</span> 與標準差 <span class=\"chem\">σ_Y</span> 分別是多少？</p>",
      options: [
        // EN: <span class="chem">ȳ = 2</span> and <span class="chem">σ_Y = 10</span>
        "<span class=\"chem\">ȳ = 2</span> 及 <span class=\"chem\">σ_Y = 10</span>",
        // EN: <span class="chem">ȳ = 2</span> and <span class="chem">σ_Y = -10</span>
        "<span class=\"chem\">ȳ = 2</span> 及 <span class=\"chem\">σ_Y = -10</span>",
        // EN: <span class="chem">ȳ = 2</span> and <span class="chem">σ_Y = 60</span>
        "<span class=\"chem\">ȳ = 2</span> 及 <span class=\"chem\">σ_Y = 60</span>",
        // EN: <span class="chem">ȳ = -48</span> and <span class="chem">σ_Y = 10</span>
        "<span class=\"chem\">ȳ = -48</span> 及 <span class=\"chem\">σ_Y = 10</span>",
      ],
      hints: [
        // EN: Under <span class="chem">Y = aX + b</span>, the new mean is <span class="chem">ȳ = a x̄ + b</span> and the new standard deviation is <span class="chem">σ_Y = |a|σ_X</span>.
        "在 <span class=\"chem\">Y = aX + b</span> 下，新平均數為 <span class=\"chem\">ȳ = a x̄ + b</span>，新標準差為 <span class=\"chem\">σ_Y = |a|σ_X</span>。",
      ],
      // EN: <p><span class="chem">ȳ = 50 - 4(12) = 50 - 48 = 2</span> <b>[A1]</b>.<br><span class="chem">σ_Y = |-4| × 2.5 = 4 × 2.5 = 10</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">ȳ = 50 - 4(12) = 50 - 48 = 2</span> <b>[A1]</b>.<br><span class=\"chem\">σ_Y = |-4| × 2.5 = 4 × 2.5 = 10</span> <b>[A1]</b>.</p>",
      misconception: {
        // EN (option B): Standard deviation is a measure of spread and can never be negative! Always multiply by |a| = |−4| = 4.
        "1": "標準差是離差量度，絕不能為負數！務必乘以 |a| = |−4| = 4。",
        // EN (option C): Adding 50 shifts the mean but has zero effect on the standard deviation; do not add 50 to 4 × 2.5.
        "2": "加上 50 只會平移平均數，對標準差毫無影響；切勿將 50 加到 4 × 2.5 上。",
        // EN (option D): You forgot to add the constant shift +50 when computing the new mean ȳ = 50 − 4(12).
        "3": "你在計算新平均數 ȳ = 50 − 4(12) 時忘記加上常數平移 +50。",
      },
    },

    // ── t4-1-q006 · numeric · exam · SL · SL 4.3 · 4 marks
    "t4-1-q006": {
      // EN: <p>The discrete values <span class="chem">2, 4, 6, 8</span> occur with frequencies <span class="chem">3, k, 5, 2</span> respectively. Given that the mean of the dataset is <span class="chem">x̄ = 5.0</span>, find the value of <span class="chem">k</span>.</p>
      stem: "<p>離散數值 <span class=\"chem\">2, 4, 6, 8</span> 分別出現 <span class=\"chem\">3, k, 5, 2</span> 次。已知該數據集的平均數為 <span class=\"chem\">x̄ = 5.0</span>，求 (find) <span class=\"chem\">k</span> 的值。</p>",
      hints: [
        // EN: Set up <span class="chem">x̄ = (Σ f_i x_i) / (Σ f_i) = 5</span>.
        "列出 <span class=\"chem\">x̄ = (Σ f_i x_i) / (Σ f_i) = 5</span>。",
        // EN: Here <span class="chem">Σ f_i = 3 + k + 5 + 2 = 10 + k</span> and <span class="chem">Σ f_i x_i = 3(2) + k(4) + 5(6) + 2(8) = 52 + 4k</span>.
        "這裏 <span class=\"chem\">Σ f_i = 3 + k + 5 + 2 = 10 + k</span> 且 <span class=\"chem\">Σ f_i x_i = 3(2) + k(4) + 5(6) + 2(8) = 52 + 4k</span>。",
      ],
      // EN: <p>Using the mean formula:<br><span class="chem">(6 + 4k + 30 + 16) / (3 + k + 5 + 2) = 5</span> <b>[M1 A1]</b><br><span class="chem">52 + 4k = 5(10 + k) = 50 + 5k</span> <b>[M1]</b><br><span class="chem">k = 2</span> <b>[A1]</b>.</p>
      solution: "<p>利用平均數公式：<br><span class=\"chem\">(6 + 4k + 30 + 16) / (3 + k + 5 + 2) = 5</span> <b>[M1 A1]</b><br><span class=\"chem\">52 + 4k = 5(10 + k) = 50 + 5k</span> <b>[M1]</b><br><span class=\"chem\">k = 2</span> <b>[A1]</b>.</p>",
    },

    // ── t4-1-q007 · numeric · exam · SL · SL 4.3 · 4 marks
    "t4-1-q007": {
      // EN: <p>The masses (in grams) of <span class="chem">20</span> pebbles are summarized in a grouped frequency table: <span class="chem">4</span> pebbles in <span class="chem">10 ≤ m &lt; 20</span>, <span class="chem">10</span> pebbles in <span class="chem">20 ≤ m &lt; 30</span>, and <span class="chem">6</span> pebbles in <span class="chem">30 ≤ m &lt; 40</span>. Using mid-interval values, calculate an estimate of the standard deviation <span class="chem">σ</span> of the masses.</p>
      stem: "<p><span class=\"chem\">20</span> 顆鵝卵石的質量（以克為單位）整理於分組頻數表：<span class=\"chem\">10 ≤ m &lt; 20</span> 有 <span class=\"chem\">4</span> 顆、<span class=\"chem\">20 ≤ m &lt; 30</span> 有 <span class=\"chem\">10</span> 顆、<span class=\"chem\">30 ≤ m &lt; 40</span> 有 <span class=\"chem\">6</span> 顆。利用組中點，計算 (calculate) 這些質量的標準差 <span class=\"chem\">σ</span> 的估計值。</p>",
      hints: [
        // EN: The mid-interval values are <span class="chem">15, 25, 35</span> with frequencies <span class="chem">4, 10, 6</span>.
        "組中點為 <span class=\"chem\">15, 25, 35</span>，對應頻數為 <span class=\"chem\">4, 10, 6</span>。",
        // EN: First find <span class="chem">m̄ = (4×15 + 10×25 + 6×35)/20 = 26</span>, then compute <span class="chem">σ = sqrt((4(15-26)^2 + 10(25-26)^2 + 6(35-26)^2)/20)</span> (or read <span class="mono">σx</span> from GDC).
        "先求 <span class=\"chem\">m̄ = (4×15 + 10×25 + 6×35)/20 = 26</span>，再計算 <span class=\"chem\">σ = sqrt((4(15-26)^2 + 10(25-26)^2 + 6(35-26)^2)/20)</span>（或從 GDC 讀出 <span class=\"mono\">σx</span>）。",
      ],
      // EN: <p>Midpoints are <span class="chem">15, 25, 35</span> <b>[M1]</b>.<br>Mean <span class="chem">m̄ = (60 + 250 + 210) / 20 = 520 / 20 = 26</span> g <b>[A1]</b>.<br>Variance <span class="chem">σ^2 = (4(-11)^2 + 10(-1)^2 + 6(9)^2) / 20 = (484 + 10 + 486) / 20 = 980 / 20 = 49</span>, so <span class="chem">σ = √49 = 7</span> g <b>[M1 A1]</b>.</p>
      solution: "<p>組中點為 <span class=\"chem\">15, 25, 35</span> <b>[M1]</b>.<br>平均數 <span class=\"chem\">m̄ = (60 + 250 + 210) / 20 = 520 / 20 = 26</span> g <b>[A1]</b>.<br>方差 <span class=\"chem\">σ^2 = (4(-11)^2 + 10(-1)^2 + 6(9)^2) / 20 = (484 + 10 + 486) / 20 = 980 / 20 = 49</span>，故 <span class=\"chem\">σ = √49 = 7</span> g <b>[M1 A1]</b>.</p>",
    },

    // ── t4-1-q008 · mcq · exam · SL · SL 4.4, 4.10 · 2 marks
    "t4-1-q008": {
      // EN: <p>In a study of two uncontrolled variables <span class="chem">x</span> (hours of sleep) and <span class="chem">y</span> (memory score), both the regression line of <span class="chem">y</span> on <span class="chem">x</span> (<span class="chem">L_1: y = ax + b</span>) and the regression line of <span class="chem">x</span> on <span class="chem">y</span> (<span class="chem">L_2: x = cy + d</span>) are calculated. Which line should be used to estimate the hours of sleep <span class="chem">x</span> for a student whose memory score is <span class="chem">y = 75</span>?</p>
      stem: "<p>在一項研究兩個非受控變數 <span class=\"chem\">x</span>（睡眠時數）與 <span class=\"chem\">y</span>（記憶力分數）的調查中，同時計算了 <span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 的迴歸線（<span class=\"chem\">L_1: y = ax + b</span>）及 <span class=\"chem\">x</span> 對 <span class=\"chem\">y</span> 的迴歸線（<span class=\"chem\">L_2: x = cy + d</span>）。對於一位記憶力分數為 <span class=\"chem\">y = 75</span> 的學生，應使用哪條直線估計其睡眠時數 <span class=\"chem\">x</span>？</p>",
      options: [
        // EN: Line <span class="chem">L_2</span> (<span class="chem">x</span> on <span class="chem">y</span>), by substituting <span class="chem">y = 75</span> into <span class="chem">x = cy + d</span>
        "直線 <span class=\"chem\">L_2</span>（<span class=\"chem\">x</span> 對 <span class=\"chem\">y</span>），將 <span class=\"chem\">y = 75</span> 代入 <span class=\"chem\">x = cy + d</span>",
        // EN: Line <span class="chem">L_1</span> (<span class="chem">y</span> on <span class="chem">x</span>), by setting <span class="chem">75 = ax + b</span> and solving for <span class="chem">x</span>
        "直線 <span class=\"chem\">L_1</span>（<span class=\"chem\">y</span> 對 <span class=\"chem\">x</span>），令 <span class=\"chem\">75 = ax + b</span> 並解出 <span class=\"chem\">x</span>",
        // EN: Either <span class="chem">L_1</span> or <span class="chem">L_2</span>, because both lines give the exact same value of <span class="chem">x</span>
        "<span class=\"chem\">L_1</span> 或 <span class=\"chem\">L_2</span> 皆可，因兩線得出完全相同的 <span class=\"chem\">x</span> 值",
        // EN: Average the two values of <span class="chem">x</span> obtained from <span class="chem">L_1</span> and <span class=\"chem">L_2</span>
        "把從 <span class=\"chem\">L_1</span> 與 <span class=\"chem\">L_2</span> 求得的兩個 <span class=\"chem\">x</span> 值取平均",
      ],
      hints: [
        // EN: When neither variable is controlled and <span class="chem">y</span> is given to predict <span class="chem">x</span>, which residuals should be minimized?
        "當兩個變數均非受控變數且已知 <span class=\"chem\">y</span> 以預測 <span class=\"chem\">x</span> 時，應使哪個方向的殘差最小？",
      ],
      // EN: <p>To estimate <span class="chem">x</span> from a given value of <span class="chem">y</span> when neither variable is controlled, you must use the regression line of <strong><span class="chem">x</span> on <span class="chem">y</span></strong> (<span class="chem">L_2: x = cy + d</span>).</p>
      solution: "<p>當兩個變數均非受控變數時，要從已知的 <span class=\"chem\">y</span> 值估計 <span class=\"chem\">x</span>，必須使用<strong><span class=\"chem\">x</span> 對 <span class=\"chem\">y</span></strong> 的迴歸線（<span class=\"chem\">L_2: x = cy + d</span>）。</p>",
      misconception: {
        // EN (option B): Rearranging the y-on-x line to solve for x minimizes vertical residuals instead of horizontal residuals, giving a biased estimate whenever |r| < 1.
        "1": "把 y 對 x 迴歸線移項解 x 是使鉛垂殘差而非水平殘差最小，只要 |r| < 1 就會得出有偏的估計。",
        // EN (option C): The two regression lines only give the same value at the mean point (x̄, ȳ) or when |r| = 1.
        "2": "兩條迴歸線只在平均點 (x̄, ȳ) 或當 |r| = 1 時才給出相同的值。",
        // EN (option D): You never average the two lines; each line is optimal for its own prediction direction.
        "3": "絕不能把兩條直線的結果取平均；每條直線只對其自身的預測方向最優。",
      },
    },

    // ── t4-1-q009 · numeric · exam · SL · SL 4.4, 4.10 · 4 marks
    "t4-1-q009": {
      // EN: <p>For a bivariate dataset, the regression line of <span class="chem">y</span> on <span class="chem">x</span> is <span class="chem">y = 1.5x + 4</span> and the regression line of <span class="chem">x</span> on <span class="chem">y</span> is <span class="chem">x = 0.5y + 1</span>. Find the sample mean <span class="chem">x̄</span>.</p>
      stem: "<p>某雙變數數據集的 <span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 迴歸線為 <span class=\"chem\">y = 1.5x + 4</span>，<span class=\"chem\">x</span> 對 <span class=\"chem\">y</span> 迴歸線為 <span class=\"chem\">x = 0.5y + 1</span>。求 (Find) 樣本平均數 <span class=\"chem\">x̄</span>。</p>",
      hints: [
        // EN: Both regression lines intersect at the mean point <span class="chem">(x̄, ȳ)</span>.
        "兩條迴歸線相交於平均點 <span class=\"chem\">(x̄, ȳ)</span>。",
        // EN: Substitute <span class="chem">ȳ = 1.5x̄ + 4</span> into <span class="chem">x̄ = 0.5ȳ + 1</span> and solve for <span class="chem">x̄</span>.
        "將 <span class=\"chem\">ȳ = 1.5x̄ + 4</span> 代入 <span class=\"chem\">x̄ = 0.5ȳ + 1</span> 並解出 <span class=\"chem\">x̄</span>。",
      ],
      // EN: <p>At the mean point <span class="chem">(x̄, ȳ)</span>, both equations hold simultaneously <b>[M1]</b>:<br><span class="chem">x̄ = 0.5(1.5x̄ + 4) + 1 = 0.75x̄ + 2 + 1 = 0.75x̄ + 3</span> <b>[M1 A1]</b><br><span class="chem">0.25x̄ = 3 ⇒ x̄ = 12</span> (and <span class="chem">ȳ = 22</span>) <b>[A1]</b>.</p>
      solution: "<p>在平均點 <span class=\"chem\">(x̄, ȳ)</span> 處，兩條方程同時成立 <b>[M1]</b>：<br><span class=\"chem\">x̄ = 0.5(1.5x̄ + 4) + 1 = 0.75x̄ + 2 + 1 = 0.75x̄ + 3</span> <b>[M1 A1]</b><br><span class=\"chem\">0.25x̄ = 3 ⇒ x̄ = 12</span>（且 <span class=\"chem\">ȳ = 22</span>）<b>[A1]</b>.</p>",
    },

    // ── t4-1-q010 · numeric · challenge · SL · SL 4.4, 4.10 · 3 marks
    "t4-1-q010": {
      // EN: <p>A geography class records the altitude <span class="chem">x</span> km and the mean July air temperature <span class="chem">y</span> °C at 8 weather stations on a mountain.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Altitude <span class="chem">x</span> (km)</th><td class="num">0.2</td><td class="num">0.5</td><td class="num">0.9</td><td class="num">1.2</td><td class="num">1.6</td><td class="num">1.9</td><td class="num">2.3</td><td class="num">2.8</td></tr><tr><th scope="row">Temperature <span class="chem">y</span> (°C)</th><td class="num">24.1</td><td class="num">23.5</td><td class="num">19.8</td><td class="num">20.6</td><td class="num">16.2</td><td class="num">17.9</td><td class="num">12.4</td><td class="num">11.8</td></tr></tbody></table></div><p>The regression line of <span class="chem">x</span> on <span class="chem">y</span> is <span class="chem">x = cy + d</span>. Find the value of <span class="chem">c</span>.</p>
      stem: "<p>一個地理班記錄了一座山上 8 個氣象站的海拔 <span class=\"chem\">x</span> km 與七月平均氣溫 <span class=\"chem\">y</span> °C。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">海拔 <span class=\"chem\">x</span> (km)</th><td class=\"num\">0.2</td><td class=\"num\">0.5</td><td class=\"num\">0.9</td><td class=\"num\">1.2</td><td class=\"num\">1.6</td><td class=\"num\">1.9</td><td class=\"num\">2.3</td><td class=\"num\">2.8</td></tr><tr><th scope=\"row\">氣溫 <span class=\"chem\">y</span> (°C)</th><td class=\"num\">24.1</td><td class=\"num\">23.5</td><td class=\"num\">19.8</td><td class=\"num\">20.6</td><td class=\"num\">16.2</td><td class=\"num\">17.9</td><td class=\"num\">12.4</td><td class=\"num\">11.8</td></tr></tbody></table></div><p><span class=\"chem\">x</span> 對 <span class=\"chem\">y</span> 的迴歸線為 <span class=\"chem\">x = cy + d</span>。求 (Find) <span class=\"chem\">c</span> 的值。</p>",
      hints: [
        // EN: Decode: “<span class="chem">x</span> on <span class="chem">y</span>” means that <span class="chem">x</span> is the variable being predicted and <span class="chem">y</span> is the explanatory variable, so the GDC must regress the <span class="chem">x</span>-values on the <span class="chem">y</span>-values. <span class="chem">c</span> is <strong>not</strong> <span class="chem">1/a</span>, the reciprocal of the gradient of the <span class="chem">y</span>-on-<span class="chem">x</span> line.
        "Decode：「<span class=\"chem\">x</span> 對 <span class=\"chem\">y</span>」表示 <span class=\"chem\">x</span> 是被預測的變量，<span class=\"chem\">y</span> 是解釋變量，所以 GDC 必須以 <span class=\"chem\">x</span> 值對 <span class=\"chem\">y</span> 值作迴歸。<span class=\"chem\">c</span> <strong>不是</strong> <span class=\"chem\">1/a</span>（<span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 迴歸線斜率的倒數）。",
        // EN: Run LinReg(ax+b) with the temperatures as the Xlist and the altitudes as the Ylist. The “slope” the GDC shows is <span class="chem">c</span> and the “intercept” is <span class="chem">d</span>.
        "以氣溫作 Xlist、海拔作 Ylist，執行 LinReg(ax+b)。GDC 顯示的「斜率」就是 <span class=\"chem\">c</span>，「截距」就是 <span class=\"chem\">d</span>。",
        // EN: Check: <span class="chem">c</span> has the same sign as <span class="chem">r</span>. The two lines agree with each other only when <span class="chem">|r| = 1</span>, so expect <span class="chem">c</span> ≠ <span class="chem">1/a</span> here.
        "檢查：<span class=\"chem\">c</span> 與 <span class=\"chem\">r</span> 同號。兩條迴歸線只有在 <span class=\"chem\">|r| = 1</span> 時才一致，所以這裏應預期 <span class=\"chem\">c</span> ≠ <span class=\"chem\">1/a</span>。",
      ],
      // EN: <p>Decode: <span class="chem">x</span> on <span class="chem">y</span>, so the temperatures <span class="chem">y</span> are the Xlist and the altitudes <span class="chem">x</span> are the Ylist <b>[M1]</b>.<br>GDC: <span class="chem">x = −0.18604y + 4.8272</span> <b>[A1]</b>, so <span class="chem">c ≈ −0.186</span> <b>[A1]</b>.<br>(Here <span class="chem">r = −0.963</span>. The <span class="chem">y</span>-on-<span class="chem">x</span> line is <span class="chem">y = −4.9826x + 25.388</span>; rearranging it would give <span class="chem">1/a = 1/(−4.9826) ≈ −0.201</span>, which is not <span class="chem">c</span>, because <span class="chem">|r| &lt; 1</span>.)</p>
      solution: "<p>Decode：<span class=\"chem\">x</span> 對 <span class=\"chem\">y</span>，所以氣溫 <span class=\"chem\">y</span> 作 Xlist，海拔 <span class=\"chem\">x</span> 作 Ylist <b>[M1]</b>。<br>GDC：<span class=\"chem\">x = −0.18604y + 4.8272</span> <b>[A1]</b>，故 <span class=\"chem\">c ≈ −0.186</span> <b>[A1]</b>。<br>（此處 <span class=\"chem\">r = −0.963</span>。<span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 的迴歸線為 <span class=\"chem\">y = −4.9826x + 25.388</span>；把它移項會得到 <span class=\"chem\">1/a = 1/(−4.9826) ≈ −0.201</span>，這不是 <span class=\"chem\">c</span>，因為 <span class=\"chem\">|r| &lt; 1</span>。）</p>",
    },

    // ── t4-1-q011 · multi · exam · SL · SL 4.3, 4.4 · 3 marks
    "t4-1-q011": {
      // EN: <p>A bivariate dataset <span class="chem">(x_i, y_i)</span> has correlation coefficient <span class="chem">r = 0.82</span>, mean point <span class="chem">(x̄, ȳ) = (10, 20)</span>, and standard deviations <span class="chem">σ_x = 3</span>, <span class="chem">σ_y = 5</span>. Select <strong>all</strong> statements that are always true.</p>
      stem: "<p>雙變數數據集 <span class=\"chem\">(x_i, y_i)</span> 的相關係數為 <span class=\"chem\">r = 0.82</span>、平均點為 <span class=\"chem\">(x̄, ȳ) = (10, 20)</span>，標準差為 <span class=\"chem\">σ_x = 3</span>、<span class=\"chem\">σ_y = 5</span>。選出<strong>所有</strong>恒成立的陳述。</p>",
      options: [
        // EN: Both the <span class="chem">y</span>-on-<span class="chem">x</span> and <span class="chem">x</span>-on-<span class="chem">y</span> regression lines pass through <span class="chem">(10, 20)</span>.
        "<span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 與 <span class=\"chem\">x</span> 對 <span class=\"chem\">y</span> 兩條迴歸線均通過 <span class=\"chem\">(10, 20)</span>。",
        // EN: If every <span class="chem">x_i</span> is replaced by <span class="chem">u_i = 2x_i + 7</span>, the correlation between <span class="chem">u</span> and <span class="chem">y</span> is still <span class="chem">0.82</span>.
        "若將每個 <span class=\"chem\">x_i</span> 替換為 <span class=\"chem\">u_i = 2x_i + 7</span>，則 <span class=\"chem\">u</span> 與 <span class=\"chem\">y</span> 之間的相關係數仍為 <span class=\"chem\">0.82</span>。",
        // EN: If every <span class="chem">y_i</span> is replaced by <span class="chem">v_i = 100 - y_i</span>, the correlation between <span class=\"chem">x</span> and <span class="chem">v</span> becomes <span class=\"chem">-0.82</span>.
        "若將每個 <span class=\"chem\">y_i</span> 替換為 <span class=\"chem\">v_i = 100 - y_i</span>，則 <span class=\"chem\">x</span> 與 <span class=\"chem\">v</span> 之間的相關係數變為 <span class=\"chem\">-0.82</span>。",
        // EN: The <span class="chem">y</span>-on-<span class="chem">x</span> and <span class="chem">x</span>-on-<span class="chem">y</span> regression lines are identical on the coordinate plane.
        "<span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 與 <span class=\"chem\">x</span> 對 <span class=\"chem\">y</span> 兩條迴歸線在坐標平面上完全重合。",
      ],
      hints: [
        // EN: Check how linear coding affects <span class="chem">r</span>, and remember when the two regression lines coincide.
        "檢查線性編碼如何影響 <span class=\"chem\">r</span>，並記住兩條迴歸線何時重合。",
      ],
      // EN: <p>Statements A, B, and C are true: both lines always pass through <span class="chem">(x̄, ȳ)</span>, positive linear scaling preserves <span class="chem">r = 0.82</span>, and multiplying one variable by <span class="chem">-1</span> flips the sign to <span class="chem">-0.82</span>. Statement D is false because <span class="chem">|r| = 0.82 ≠ 1</span>.</p>
      solution: "<p>陳述 A、B 與 C 皆正確：兩條直線永遠通過 <span class=\"chem\">(x̄, ȳ)</span>，正線性縮放保持 <span class=\"chem\">r = 0.82</span> 不變，而把一個變數乘以 <span class=\"chem\">-1</span> 會使正負號反轉為 <span class=\"chem\">-0.82</span>。陳述 D 錯誤，因為 <span class=\"chem\">|r| = 0.82 ≠ 1</span>。</p>",
      misconception: {
        // EN (option D): The two regression lines coincide if and only if |r| = 1. Since r = 0.82 < 1, the two lines intersect at (10, 20) with different slopes.
        "3": "兩條迴歸線重合，當且僅當 |r| = 1。由於 r = 0.82 < 1，兩條直線在 (10, 20) 以不同斜率相交。",
      },
    },

    // ── t4-1-q012 · order · exam · SL · SL 4.4 · 3 marks
    "t4-1-q012": {
      // EN: <p>Order the following four steps to find a linear regression estimate of <span class="chem">y</span> at <span class="chem">x = x_0</span> and judge whether it is reliable. Each step uses the result of the step before it.</p>
      stem: "<p>將以下四個步驟排序，以求出在 <span class=\"chem\">x = x_0</span> 處 <span class=\"chem\">y</span> 的線性迴歸估計值，並判斷它是否可靠。每一步都要用到上一步的結果。</p>",
      options: [
        // EN: Enter the <span class="chem">x</span>-values in <span class="mono">L1</span> and the <span class="chem">y</span>-values in <span class="mono">L2</span> on the GDC.
        "在 GDC 中把 <span class=\"chem\">x</span> 值輸入 <span class=\"mono\">L1</span>，把 <span class=\"chem\">y</span> 值輸入 <span class=\"mono\">L2</span>。",
        // EN: Run <span class="mono">LinReg(ax+b) L1, L2</span> to obtain the regression line of <span class="chem">y</span> on <span class="chem">x</span>, <span class="chem">y = ax + b</span>, and the correlation coefficient <span class="chem">r</span>.
        "執行 <span class=\"mono\">LinReg(ax+b) L1, L2</span>，得出 <span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 的迴歸直線 <span class=\"chem\">y = ax + b</span> 及相關係數 <span class=\"chem\">r</span>。",
        // EN: Substitute <span class="chem">x = x_0</span> into <span class="chem">y = ax + b</span> to obtain the estimate <span class="chem">ŷ</span>.
        "把 <span class=\"chem\">x = x_0</span> 代入 <span class=\"chem\">y = ax + b</span>，得出估計值 <span class=\"chem\">ŷ</span>。",
        // EN: Judge the reliability of <span class="chem">ŷ</span>: check that <span class="chem">|r|</span> is close to <span class="chem">1</span> and that <span class="chem">x_0</span> lies within <span class="chem">[x_{min}, x_{max}]</span> (interpolation, not extrapolation).
        "判斷 <span class=\"chem\">ŷ</span> 的可靠性：檢查 <span class=\"chem\">|r|</span> 是否接近 <span class=\"chem\">1</span>，以及 <span class=\"chem\">x_0</span> 是否在 <span class=\"chem\">[x_{min}, x_{max}]</span> 之內（內插而非外推）。",
      ],
      hints: [
        // EN: Each step needs the output of the one before: the lists feed <span class="mono">LinReg</span>, the line gives <span class="chem">ŷ</span>, and only then can you judge how reliable <span class="chem">ŷ</span> is.
        "每一步都需要上一步的輸出：數據列表供 <span class=\"mono\">LinReg</span> 使用，迴歸直線給出 <span class=\"chem\">ŷ</span>，之後才能判斷 <span class=\"chem\">ŷ</span> 有多可靠。",
      ],
      // EN: <p>(1) Enter the data in <span class="mono">L1</span> and <span class="mono">L2</span>; (2) run <span class="mono">LinReg(ax+b)</span> to get <span class="chem">y = ax + b</span> and <span class="chem">r</span>; (3) substitute <span class="chem">x_0</span> to get <span class="chem">ŷ</span>; (4) judge reliability: the estimate is reliable only if <span class="chem">|r|</span> is close to <span class="chem">1</span> and <span class="chem">x_0</span> is inside the data range (interpolation).</p>
      solution: "<p>(1) 把數據輸入 <span class=\"mono\">L1</span> 和 <span class=\"mono\">L2</span>；(2) 執行 <span class=\"mono\">LinReg(ax+b)</span> 得出 <span class=\"chem\">y = ax + b</span> 及 <span class=\"chem\">r</span>；(3) 代入 <span class=\"chem\">x_0</span> 得出 <span class=\"chem\">ŷ</span>；(4) 判斷可靠性：只有當 <span class=\"chem\">|r|</span> 接近 <span class=\"chem\">1</span> 且 <span class=\"chem\">x_0</span> 在數據範圍之內（內插）時，估計值才可靠。</p>",
    },

    // ── t4-1-q013 · numeric · exam · SL · SL 4.3 · 4 marks
    "t4-1-q013": {
      // EN: <p>A group of <span class="chem">12</span> students has a mean test score of <span class="chem">70</span>, and a second group of <span class="chem">8</span> students has a mean test score of <span class="chem">85</span>. Find the combined mean score of all <span class="chem">20</span> students.</p>
      stem: "<p>一組 <span class=\"chem\">12</span> 名學生的測驗平均分為 <span class=\"chem\">70</span>，另一組 <span class=\"chem\">8</span> 名學生的測驗平均分為 <span class=\"chem\">85</span>。求 (Find) 全部 <span class=\"chem\">20</span> 名學生的合併平均分。</p>",
      hints: [
        // EN: Find the sum of scores in each group using <span class="chem">Σ x = n x̄</span>.
        "利用 <span class=\"chem\">Σ x = n x̄</span> 求每組的總分。",
        // EN: Add the two sums together and divide by the combined sample size <span class="chem">12 + 8 = 20</span>.
        "把兩個總分相加，再除以合併樣本總數 <span class=\"chem\">12 + 8 = 20</span>。",
      ],
      // EN: <p>Total sum of scores <span class="chem">= 12(70) + 8(85) = 840 + 680 = 1520</span> <b>[M1 A1]</b>.<br>Combined mean <span class="chem">= 1520 / 20 = 76</span> <b>[M1 A1]</b>.</p>
      solution: "<p>總分之和 <span class=\"chem\">= 12(70) + 8(85) = 840 + 680 = 1520</span> <b>[M1 A1]</b>.<br>合併平均分 <span class=\"chem\">= 1520 / 20 = 76</span> <b>[M1 A1]</b>.</p>",
    },

    // ── t4-1-q014 · numeric · challenge · SL · SL 4.3 · 5 marks
    "t4-1-q014": {
      // EN: <p>A dataset of <span class="chem">n = 8</span> numbers has mean <span class="chem">x̄ = 5</span> and population variance <span class="chem">σ^2 = 9</span>. Two new numbers, <span class="chem">1</span> and <span class="chem">9</span>, are added to the dataset so there are now <span class="chem">10</span> numbers. Find the <strong>new population variance</strong> of all <span class="chem">10</span> numbers.</p>
      stem: "<p>一個包含 <span class=\"chem\">n = 8</span> 個數字的數據集之平均數為 <span class=\"chem\">x̄ = 5</span>，總體方差為 <span class=\"chem\">σ^2 = 9</span>。現把兩個新數字 <span class=\"chem\">1</span> 與 <span class=\"chem\">9</span> 加入該數據集，使數據共有 <span class=\"chem\">10</span> 個數字。求 (Find) 這 <span class=\"chem\">10</span> 個數字的<strong>新總體方差</strong>。</p>",
      hints: [
        // EN: Decode: the new variance must be measured about the mean of all <span class="chem">10</span> numbers, so first check whether adding <span class="chem">1</span> and <span class="chem">9</span> changes the mean.
        "Decode：新的方差必須以全部 <span class=\"chem\">10</span> 個數字的平均數為中心計算，所以先檢查加入 <span class=\"chem\">1</span> 與 <span class=\"chem\">9</span> 會否改變平均數。",
        // EN: Notice that the two new numbers <span class="chem">1</span> and <span class="chem">9</span> have mean <span class="chem">(1 + 9)/2 = 5</span>, so the overall mean of all 10 numbers is still <span class="chem">x̄_{new} = 5</span>!
        "留意兩個新數字 <span class=\"chem\">1</span> 與 <span class=\"chem\">9</span> 的平均數為 <span class=\"chem\">(1 + 9)/2 = 5</span>，故全部 10 個數字的總平均數仍為 <span class=\"chem\">x̄_{new} = 5</span>！",
        // EN: For the original 8 numbers, <span class="chem">Σ(x_i - 5)^2 = n σ^2 = 8 × 9 = 72</span>. Add <span class="chem">(1 - 5)^2 + (9 - 5)^2</span> and divide by <span class="chem">10</span>.
        "對於原本的 8 個數字，<span class=\"chem\">Σ(x_i - 5)^2 = n σ^2 = 8 × 9 = 72</span>。加上 <span class=\"chem\">(1 - 5)^2 + (9 - 5)^2</span> 再除以 <span class=\"chem\">10</span>。",
      ],
      // EN: <p>Original sum <span class="chem">Σ x_i = 8 × 5 = 40</span>; new sum <span class="chem">= 40 + 1 + 9 = 50</span>, so <span class="chem">x̄_{new} = 50 / 10 = 5</span> <b>[A1]</b>.<br>Original sum of squared deviations <span class="chem">Σ_{i=1}^8 (x_i - 5)^2 = 8 × 9 = 72</span> <b>[M1 A1]</b>.<br>New sum of squared deviations <span class="chem">= 72 + (1 - 5)^2 + (9 - 5)^2 = 72 + 16 + 16 = 104</span> <b>[M1]</b>.<br>New variance <span class="chem">σ_{new}^2 = 104 / 10 = 10.4</span> <b>[A1]</b>.</p>
      solution: "<p>原總和 <span class=\"chem\">Σ x_i = 8 × 5 = 40</span>；新總和 <span class=\"chem\">= 40 + 1 + 9 = 50</span>，故 <span class=\"chem\">x̄_{new} = 50 / 10 = 5</span> <b>[A1]</b>.<br>原離差平方和 <span class=\"chem\">Σ_{i=1}^8 (x_i - 5)^2 = 8 × 9 = 72</span> <b>[M1 A1]</b>.<br>新離差平方和 <span class=\"chem\">= 72 + (1 - 5)^2 + (9 - 5)^2 = 72 + 16 + 16 = 104</span> <b>[M1]</b>.<br>新方差 <span class=\"chem\">σ_{new}^2 = 104 / 10 = 10.4</span> <b>[A1]</b>.</p>",
    },

    // ── t4-1-q015 · short · exam · SL · SL 4.2 · 6 marks
    "t4-1-q015": {
      // EN: <p>A cumulative frequency study of the daily commuting times <span class="chem">t</span> (in minutes) of <span class="chem">120</span> office workers gives minimum <span class="chem">8</span>, lower quartile <span class="chem">Q_1 = 22</span>, median <span class="chem">M = 31</span>, upper quartile <span class="chem">Q_3 = 42</span>, and maximum <span class="chem">78</span>.<br>(a) Find the interquartile range (<span class="chem">IQR</span>) and determine how many workers have a commuting time greater than <span class="chem">42</span> minutes. <strong>[2 marks]</strong><br>(b) Show mathematically that the maximum value <span class="chem">78</span> minutes is an outlier, and state the range of commuting times that would be classified as upper outliers. <strong>[4 marks]</strong></p>
      stem: "<p>一項針對 <span class=\"chem\">120</span> 名上班族每日通勤時間 <span class=\"chem\">t</span>（以分鐘為單位）的累積頻數研究顯示：最小值為 <span class=\"chem\">8</span>、下四分位數 <span class=\"chem\">Q_1 = 22</span>、中位數 <span class=\"chem\">M = 31</span>、上四分位數 <span class=\"chem\">Q_3 = 42</span>，最大值為 <span class=\"chem\">78</span>。<br>(a) 求 (Find) 四分位數間距（<span class=\"chem\">IQR</span>），並判斷有多少名上班族的通勤時間大於 <span class=\"chem\">42</span> 分鐘。<strong>[2 marks]</strong><br>(b) 以數學方法證明 (Show mathematically that) 最大值 <span class=\"chem\">78</span> 分鐘是異常值，並寫出會被列為上異常值的通勤時間範圍。<strong>[4 marks]</strong></p>",
      // EN: <p>(a) <span class="chem">IQR = Q_3 - Q_1 = 42 - 22 = 20</span> minutes. Since <span class="chem">Q_3</span> is the 75th percentile, <span class="chem">25%</span> of the <span class="chem">120</span> workers (<span class="chem">0.25 × 120 = 30</span> workers) commute for more than <span class="chem">42</span> minutes.<br>(b) Upper outlier boundary <span class="chem">= Q_3 + 1.5 × IQR = 42 + 1.5(20) = 72</span> minutes. Because <span class="chem">78 &gt; 72</span>, the maximum <span class="chem">78</span> is an outlier, and any time <span class="chem">t &gt; 72</span> minutes is classified as an upper outlier.</p>
      solution: "<p>(a) <span class=\"chem\">IQR = Q_3 - Q_1 = 42 - 22 = 20</span> 分鐘。由於 <span class=\"chem\">Q_3</span> 是第 75 百分位數，<span class=\"chem\">120</span> 名上班族中有 <span class=\"chem\">25%</span>（<span class=\"chem\">0.25 × 120 = 30</span> 人）通勤時間超過 <span class=\"chem\">42</span> 分鐘。<br>(b) 上異常值界線 <span class=\"chem\">= Q_3 + 1.5 × IQR = 42 + 1.5(20) = 72</span> 分鐘。因為 <span class=\"chem\">78 &gt; 72</span>，最大值 <span class=\"chem\">78</span> 是異常值，且任何 <span class=\"chem\">t &gt; 72</span> 分鐘的時間皆列為上異常值。</p>",
      // EN: <p>(a) <span class="chem">IQR = 42 - 22 = 20</span> minutes; <span class="chem">25%</span> of <span class="chem">120 = 30</span> workers.<br>(b) Upper fence <span class="chem">= Q_3 + 1.5 × IQR = 42 + 1.5(20) = 72</span> minutes. Since <span class="chem">78 &gt; 72</span>, <span class="chem">78</span> is an outlier. Any commuting time strictly greater than <span class="chem">72</span> minutes is an upper outlier.</p>
      answer: "<p>(a) <span class=\"chem\">IQR = 42 - 22 = 20</span> 分鐘；<span class=\"chem\">25%</span> × <span class=\"chem\">120 = 30</span> 人。<br>(b) 上界線 <span class=\"chem\">= Q_3 + 1.5 × IQR = 42 + 1.5(20) = 72</span> 分鐘。由於 <span class=\"chem\">78 &gt; 72</span>，<span class=\"chem\">78</span> 是異常值。任何嚴格大於 <span class=\"chem\">72</span> 分鐘的通勤時間均為上異常值。</p>",
      markscheme: [
        // EN: A1: Finds IQR = 42 − 22 = 20 minutes.
        "A1：求得 IQR = 42 − 22 = 20 分鐘。",
        // EN: A1: Finds 0.25 × 120 = 30 workers above Q₃ = 42 minutes.
        "A1：求得高於 Q₃ = 42 分鐘的人數為 0.25 × 120 = 30 人。",
        // EN: M1: Substitutes into the upper fence formula Q₃ + 1.5 × IQR = 42 + 1.5(20).
        "M1：代入上界線公式 Q₃ + 1.5 × IQR = 42 + 1.5(20)。",
        // EN: A1: Evaluates the upper fence as 72 minutes.
        "A1：計算出上界線為 72 分鐘。",
        // EN: R1: Explicitly states 78 > 72 to justify that 78 is an outlier.
        "R1：明確指出 78 > 72 以證明 78 是異常值。",
        // EN: A1: States that the upper outliers are the commuting times t > 72 minutes.
        "A1：寫出上異常值為通勤時間 t > 72 分鐘。",
      ],
    },

    // ── t4-1-q016 · short · exam · SL · SL 4.4, 4.10 · 7 marks
    "t4-1-q016": {
      // EN: <p>The heights <span class="chem">x</span> (in cm, where <span class="chem">155 ≤ x ≤ 190</span>) and masses <span class="chem">y</span> (in kg, where <span class="chem">50 ≤ y ≤ 88</span>) of <span class="chem">14</span> rowers are recorded. The regression line of <span class="chem">y</span> on <span class="chem">x</span> is <span class="chem">y = 0.90x - 85.5</span> and the regression line of <span class="chem">x</span> on <span class="chem">y</span> is <span class="chem">x = 0.80y + 117.4</span>.<br>(a) Find the mean height <span class="chem">x̄</span> and mean mass <span class="chem">ȳ</span> of the rowers. <strong>[3 marks]</strong><br>(b) Estimate the height of a rower whose mass is <span class="chem">75</span> kg, justifying your choice of regression line. <strong>[2 marks]</strong><br>(c) Explain why it would be unreliable to use the <span class="chem">y</span>-on-<span class="chem">x</span> regression line to estimate the mass of a child of height <span class="chem">120</span> cm. <strong>[2 marks]</strong></p>
      stem: "<p>記錄了 <span class=\"chem\">14</span> 名划艇運動員的身高 <span class=\"chem\">x</span>（單位 cm，其中 <span class=\"chem\">155 ≤ x ≤ 190</span>）與體重 <span class=\"chem\">y</span>（單位 kg，其中 <span class=\"chem\">50 ≤ y ≤ 88</span>）。<span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 的迴歸線為 <span class=\"chem\">y = 0.90x - 85.5</span>，而 <span class=\"chem\">x</span> 對 <span class=\"chem\">y</span> 的迴歸線為 <span class=\"chem\">x = 0.80y + 117.4</span>。<br>(a) 求 (Find) 運動員的平均身高 <span class=\"chem\">x̄</span> 與平均體重 <span class=\"chem\">ȳ</span>。<strong>[3 marks]</strong><br>(b) 估計 (Estimate) 一名體重 <span class=\"chem\">75</span> kg 的運動員之身高，並說明你選用該迴歸線的理由。<strong>[2 marks]</strong><br>(c) 解釋為何使用 <span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 迴歸線估計一名身高 <span class=\"chem\">120</span> cm 兒童的體重並不可靠。<strong>[2 marks]</strong></p>",
      // EN: <p>(a) Both regression lines intersect at <span class="chem">(x̄, ȳ)</span>: substituting <span class="chem">ȳ = 0.90x̄ - 85.5</span> into <span class="chem">x̄ = 0.80ȳ + 117.4</span> gives <span class="chem">x̄ = 0.72x̄ - 68.4 + 117.4 ⇒ 0.28x̄ = 49 ⇒ x̄ = 175</span> cm and <span class="chem">ȳ = 0.90(175) - 85.5 = 72</span> kg.<br>(b) Substitute <span class="chem">y = 75</span> into the <span class="chem">x</span>-on-<span class="chem">y</span> line: <span class="chem">x = 0.80(75) + 117.4 = 177.4</span> cm.<br>(c) Unreliable because <span class="chem">x = 120</span> cm is outside <span class="chem">[155, 190]</span> cm (extrapolation).</p>
      solution: "<p>(a) 兩條迴歸線相交於 <span class=\"chem\">(x̄, ȳ)</span>：將 <span class=\"chem\">ȳ = 0.90x̄ - 85.5</span> 代入 <span class=\"chem\">x̄ = 0.80ȳ + 117.4</span> 得 <span class=\"chem\">x̄ = 0.72x̄ - 68.4 + 117.4 ⇒ 0.28x̄ = 49 ⇒ x̄ = 175</span> cm 及 <span class=\"chem\">ȳ = 0.90(175) - 85.5 = 72</span> kg。<br>(b) 將 <span class=\"chem\">y = 75</span> 代入 <span class=\"chem\">x</span> 對 <span class=\"chem\">y</span> 迴歸線：<span class=\"chem\">x = 0.80(75) + 117.4 = 177.4</span> cm。<br>(c) 不可靠，因為 <span class=\"chem\">x = 120</span> cm 在 <span class=\"chem\">[155, 190]</span> cm 範圍以外（外推）。</p>",
      // EN: <p>(a) <span class="chem">x̄ = 175</span> cm, <span class="chem">ȳ = 72</span> kg.<br>(b) Using the <span class="chem">x</span> on <span class="chem">y</span> line (since <span class="chem">y = 75</span> is given to estimate <span class="chem">x</span>): <span class="chem">x = 0.80(75) + 117.4 = 177.4</span> cm.<br>(c) <span class="chem">x = 120</span> cm lies far outside the observed data range <span class="chem">[155, 190]</span> cm, so the estimate relies on <strong>extrapolation</strong> and is unreliable.</p>
      answer: "<p>(a) <span class=\"chem\">x̄ = 175</span> cm，<span class=\"chem\">ȳ = 72</span> kg。<br>(b) 使用 <span class=\"chem\">x</span> 對 <span class=\"chem\">y</span> 迴歸線（因已知 <span class=\"chem\">y = 75</span> 以估計 <span class=\"chem\">x</span>）：<span class=\"chem\">x = 0.80(75) + 117.4 = 177.4</span> cm。<br>(c) <span class=\"chem\">x = 120</span> cm 遠在觀測數據範圍 <span class=\"chem\">[155, 190]</span> cm 以外，故該估計依賴<strong>外推</strong>而不可靠。</p>",
      markscheme: [
        // EN: M1: Equates or substitutes the two regression lines at (x̄, ȳ): x̄ = 0.80(0.90x̄ − 85.5) + 117.4.
        "M1：在 (x̄, ȳ) 聯立或代入兩條迴歸線：x̄ = 0.80(0.90x̄ − 85.5) + 117.4。",
        // EN: A1: Finds x̄ = 175 cm.
        "A1：求得 x̄ = 175 cm。",
        // EN: A1: Finds ȳ = 72 kg.
        "A1：求得 ȳ = 72 kg。",
        // EN: R1: Selects the x-on-y regression line x = 0.80y + 117.4 because mass y is given to estimate height x.
        "R1：因已知體重 y 以估計身高 x，故選用 x 對 y 迴歸線 x = 0.80y + 117.4。",
        // EN: A1: Calculates x = 0.80(75) + 117.4 = 177.4 cm.
        "A1：計算出 x = 0.80(75) + 117.4 = 177.4 cm。",
        // EN: R1: Identifies that x = 120 cm is outside the sample domain [155, 190] cm.
        "R1：指出 x = 120 cm 落在樣本定義域 [155, 190] cm 以外。",
        // EN: R1: Uses the term extrapolation (or explains that the adult linear relationship may not hold for children).
        "R1：使用「外推 (extrapolation)」一詞（或解釋成人的線性關係未必適用於兒童）。",
      ],
    },

    // ── t4-1-q017 · numeric · challenge · SL · SL 4.4, 4.10 · 5 marks
    "t4-1-q017": {
      // EN: <p>Nine adults who are learning to type record the time <span class="chem">x</span> hours per week that they practise and their typing speed <span class="chem">y</span> words per minute.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Practice <span class="chem">x</span> (h per week)</th><td class="num">2</td><td class="num">4</td><td class="num">5</td><td class="num">7</td><td class="num">8</td><td class="num">10</td><td class="num">11</td><td class="num">13</td><td class="num">14</td></tr><tr><th scope="row">Speed <span class="chem">y</span> (words per minute)</th><td class="num">38</td><td class="num">35</td><td class="num">46</td><td class="num">44</td><td class="num">52</td><td class="num">49</td><td class="num">60</td><td class="num">55</td><td class="num">63</td></tr></tbody></table></div><p>Ana wants to estimate the weekly practice time of a learner whose typing speed is <span class="chem">40</span> words per minute. She finds the regression line of <span class="chem">y</span> on <span class="chem">x</span> and solves <span class="chem">40 = ax + b</span> for <span class="chem">x</span>.<br>Find (the estimate given by the appropriate regression line) − (Ana's estimate), in hours per week.</p>
      stem: "<p>九名正在學打字的成年人記錄了每週練習的時間 <span class=\"chem\">x</span> 小時與打字速度 <span class=\"chem\">y</span>（每分鐘字數）。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">練習 <span class=\"chem\">x</span> (h per week)</th><td class=\"num\">2</td><td class=\"num\">4</td><td class=\"num\">5</td><td class=\"num\">7</td><td class=\"num\">8</td><td class=\"num\">10</td><td class=\"num\">11</td><td class=\"num\">13</td><td class=\"num\">14</td></tr><tr><th scope=\"row\">速度 <span class=\"chem\">y</span> (words per minute)</th><td class=\"num\">38</td><td class=\"num\">35</td><td class=\"num\">46</td><td class=\"num\">44</td><td class=\"num\">52</td><td class=\"num\">49</td><td class=\"num\">60</td><td class=\"num\">55</td><td class=\"num\">63</td></tr></tbody></table></div><p>Ana 想估計一名打字速度為每分鐘 <span class=\"chem\">40</span> 字的學習者每週的練習時間。她求出 <span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 的迴歸線，再解 <span class=\"chem\">40 = ax + b</span> 求 <span class=\"chem\">x</span>。<br>求 (Find)（由適當的迴歸線得到的估計值）−（Ana 的估計值），單位為每週小時。</p>",
      hints: [
        // EN: Decode: the speed <span class="chem">y</span> is given and the practice time <span class="chem">x</span> is wanted, so the appropriate line is <span class="chem">x</span> on <span class="chem">y</span>. Ana's rearranged <span class="chem">y</span>-on-<span class="chem">x</span> line is a different line (they coincide only when <span class="chem">|r| = 1</span>), so the two estimates differ.
        "Decode：已知速度 <span class=\"chem\">y</span>，要求練習時間 <span class=\"chem\">x</span>，所以適當的迴歸線是 <span class=\"chem\">x</span> 對 <span class=\"chem\">y</span>。Ana 移項後的 <span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 迴歸線是另一條直線（兩者只在 <span class=\"chem\">|r| = 1</span> 時重合），所以兩個估計值不同。",
        // EN: Ana: run LinReg(ax+b) with <span class="chem">x</span> as the Xlist, then solve <span class="chem">40 = ax + b</span>. Appropriate line: run LinReg(ax+b) again with <span class="chem">y</span> as the Xlist and <span class="chem">x</span> as the Ylist, then substitute <span class="chem">y = 40</span>.
        "Ana：以 <span class=\"chem\">x</span> 作 Xlist 執行 LinReg(ax+b)，再解 <span class=\"chem\">40 = ax + b</span>。適當的迴歸線：再次執行 LinReg(ax+b)，以 <span class=\"chem\">y</span> 作 Xlist、<span class=\"chem\">x</span> 作 Ylist，然後代入 <span class=\"chem\">y = 40</span>。",
        // EN: Store both lines or keep the unrounded coefficients, then subtract Ana's estimate from the other one.
        "把兩條直線儲存起來或保留未四捨五入的係數，然後用另一個估計值減去 Ana 的估計值。",
      ],
      // EN: <p>Decode: predicting <span class="chem">x</span> from a given <span class="chem">y</span> needs the <span class="chem">x</span>-on-<span class="chem">y</span> line; Ana's method uses the <span class="chem">y</span>-on-<span class="chem">x</span> line instead.<br>Ana: <span class="chem">y = 2.0861x + 31.959</span> <b>[M1]</b>, so <span class="chem">x = (40 − 31.959)/2.0861 = 3.8546…</span> h <b>[A1]</b>.<br>Appropriate line (speeds as the Xlist): <span class="chem">x = 0.39666y − 11.258</span> <b>[M1]</b>, so <span class="chem">x = 0.39666(40) − 11.258 = 4.6082…</span> h <b>[A1]</b>.<br>Difference <span class="chem">= 4.6082… − 3.8546… = 0.75355… ≈ 0.754</span> h per week <b>[A1]</b>.<br>(Here <span class="chem">r = 0.910</span>, not close enough to 1 for the two lines to agree; <span class="chem">40</span> is inside the data range 35–63, so both are interpolations.)</p>
      solution: "<p>Decode：由已知的 <span class=\"chem\">y</span> 預測 <span class=\"chem\">x</span> 需要 <span class=\"chem\">x</span> 對 <span class=\"chem\">y</span> 的迴歸線；Ana 的方法用的卻是 <span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 的迴歸線。<br>Ana：<span class=\"chem\">y = 2.0861x + 31.959</span> <b>[M1]</b>，故 <span class=\"chem\">x = (40 − 31.959)/2.0861 = 3.8546…</span> h <b>[A1]</b>。<br>適當的迴歸線（以速度作 Xlist）：<span class=\"chem\">x = 0.39666y − 11.258</span> <b>[M1]</b>，故 <span class=\"chem\">x = 0.39666(40) − 11.258 = 4.6082…</span> h <b>[A1]</b>。<br>差 <span class=\"chem\">= 4.6082… − 3.8546… = 0.75355… ≈ 0.754</span> 每週小時 <b>[A1]</b>。<br>（此處 <span class=\"chem\">r = 0.910</span>，不夠接近 1，所以兩條直線不一致；<span class=\"chem\">40</span> 在數據範圍 35–63 之內，所以兩者都是內插。）</p>",
    },

    // ── t4-1-q018 · short · challenge · SL · SL 4.2, 4.3 · 6 marks
    "t4-1-q018": {
      // EN: <p>Six positive integers are arranged in ascending order: <span class="chem">a, b, 10, 12, c, d</span>.<br>The unique mode is <span class="chem">15</span>, the range is <span class="chem">12</span>, and the mean of all six integers is <span class="chem">x̄ = 10.5</span>.<br>Quartiles are found by the GDC method: the median of each half of the ordered data.<br>(a) State the values of <span class="chem">c</span> and <span class="chem">d</span>, and hence find <span class="chem">a</span>. <strong>[3 marks]</strong><br>(b) Find the value of <span class="chem">b</span> and the interquartile range (<span class="chem">IQR = Q_3 - Q_1</span>) of the six integers. <strong>[3 marks]</strong></p>
      stem: "<p>六個正整數按遞增順序排列：<span class=\"chem\">a, b, 10, 12, c, d</span>。<br>其唯一眾數為 <span class=\"chem\">15</span>，全距為 <span class=\"chem\">12</span>，這六個整數的平均數為 <span class=\"chem\">x̄ = 10.5</span>。<br>四分位數用 GDC 方法求：排序後數據每一半的中位數。<br>(a) 寫出 (State) <span class=\"chem\">c</span> 與 <span class=\"chem\">d</span> 的值，並由此求 (hence find) <span class=\"chem\">a</span>。<strong>[3 marks]</strong><br>(b) 求 (Find) <span class=\"chem\">b</span> 的值及這六個整數的四分位數間距（<span class=\"chem\">IQR = Q_3 - Q_1</span>）。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: the two largest values are <span class="chem">c</span> and <span class="chem">d</span>, and <span class="chem">15 &gt; 12</span>, so a unique mode of <span class="chem">15</span> forces <span class="chem">c = d = 15</span>. Then the range gives <span class="chem">a</span>, and the mean (a total) gives <span class="chem">b</span>.
        "Decode：最大的兩個值是 <span class=\"chem\">c</span> 與 <span class=\"chem\">d</span>，而 <span class=\"chem\">15 &gt; 12</span>，所以唯一眾數為 <span class=\"chem\">15</span> 迫使 <span class=\"chem\">c = d = 15</span>。然後由全距求 <span class=\"chem\">a</span>，由平均數（即總和）求 <span class=\"chem\">b</span>。",
        // EN: For <span class="chem">n = 6</span>, the lower half is the <span class="chem">3</span> smallest values and the upper half is the <span class="chem">3</span> largest; each quartile is the median of its half.
        "當 <span class=\"chem\">n = 6</span> 時，下半部是最小的 <span class=\"chem\">3</span> 個值，上半部是最大的 <span class=\"chem\">3</span> 個值；每個四分位數就是該半部的中位數。",
      ],
      // EN: <p>(a) Because <span class="chem">15 &gt; 12</span> is the unique mode and the six integers are in ascending order, <span class="chem">15</span> must appear at least twice at the upper end, so <span class="chem">c = 15</span> and <span class="chem">d = 15</span>. Then <span class="chem">d - a = 12 ⇒ 15 - a = 12 ⇒ a = 3</span>.<br>(b) The sum of the six numbers is <span class="chem">6 × 10.5 = 63</span>, so <span class="chem">3 + b + 10 + 12 + 15 + 15 = 63 ⇒ 55 + b = 63 ⇒ b = 8</span>. For <span class="chem">n = 6</span>, the lower half is <span class="chem">3, 8, 10</span> (<span class="chem">Q_1 = 8</span>) and the upper half is <span class="chem">12, 15, 15</span> (<span class="chem">Q_3 = 15</span>), so <span class="chem">IQR = 15 - 8 = 7</span>.</p>
      solution: "<p>(a) 由於 <span class=\"chem\">15 &gt; 12</span> 是唯一眾數且六個整數按遞增順序排列，<span class=\"chem\">15</span> 必須在較大一端出現至少兩次，故 <span class=\"chem\">c = 15</span> 及 <span class=\"chem\">d = 15</span>。於是 <span class=\"chem\">d - a = 12 ⇒ 15 - a = 12 ⇒ a = 3</span>。<br>(b) 六個數之和為 <span class=\"chem\">6 × 10.5 = 63</span>，故 <span class=\"chem\">3 + b + 10 + 12 + 15 + 15 = 63 ⇒ 55 + b = 63 ⇒ b = 8</span>。當 <span class=\"chem\">n = 6</span> 時，較小一半為 <span class=\"chem\">3, 8, 10</span>（<span class=\"chem\">Q_1 = 8</span>），較大一半為 <span class=\"chem\">12, 15, 15</span>（<span class=\"chem\">Q_3 = 15</span>），故 <span class=\"chem\">IQR = 15 - 8 = 7</span>。</p>",
      // EN: <p>(a) <span class="chem">c = 15, d = 15</span>; since <span class="chem">d - a = 12</span>, <span class="chem">a = 15 - 12 = 3</span>.<br>(b) Sum <span class="chem">= 6 × 10.5 = 63 ⇒ 3 + b + 10 + 12 + 15 + 15 = 63 ⇒ b = 8</span>. Since <span class="chem">Q_1 = b = 8</span> and <span class="chem">Q_3 = c = 15</span>, <span class="chem">IQR = 15 - 8 = 7</span>.</p>
      answer: "<p>(a) <span class=\"chem\">c = 15, d = 15</span>；由於 <span class=\"chem\">d - a = 12</span>，<span class=\"chem\">a = 15 - 12 = 3</span>。<br>(b) 總和 <span class=\"chem\">= 6 × 10.5 = 63 ⇒ 3 + b + 10 + 12 + 15 + 15 = 63 ⇒ b = 8</span>。由於 <span class=\"chem\">Q_1 = b = 8</span> 及 <span class=\"chem\">Q_3 = c = 15</span>，<span class=\"chem\">IQR = 15 - 8 = 7</span>。</p>",
      markscheme: [
        // EN: R1: Deduces that for 15 (> 12) to be the unique mode in an ascending list, both c and d must equal 15.
        "R1：推論要使 15 (> 12) 成為遞增數列的唯一眾數，c 與 d 必須同時等於 15。",
        // EN: A1: States c = 15 and d = 15.
        "A1：寫出 c = 15 與 d = 15。",
        // EN: A1: Uses range = d − a = 12 to find a = 15 − 12 = 3.
        "A1：利用全距 = d − a = 12 求得 a = 15 − 12 = 3。",
        // EN: M1: Sets up the sum equation 3 + b + 10 + 12 + 15 + 15 = 6 × 10.5 = 63.
        "M1：列出總和方程 3 + b + 10 + 12 + 15 + 15 = 6 × 10.5 = 63。",
        // EN: A1: Finds b = 8.
        "A1：求得 b = 8。",
        // EN: A1: Identifies Q₁ = 8 and Q₃ = 15 for n = 6, giving IQR = 15 − 8 = 7.
        "A1：指出當 n = 6 時 Q₁ = 8 與 Q₃ = 15，從而得 IQR = 15 − 8 = 7。",
      ],
    },

    // ── t4-1-q019 · short · exam · SL · SL 4.4 · 8 marks
    "t4-1-q019": {
      // EN: <p>The number of hours of revision <span class="chem">x</span> and the test score <span class="chem">y</span> of <span class="chem">8</span> students are shown below.<br>Hours of revision <span class="chem">x</span>: <span class="chem">2, 3, 5, 6, 8, 9, 11, 12</span><br>Test score <span class="chem">y</span>: <span class="chem">41, 46, 50, 57, 60, 66, 71, 77</span><br>(a) Find Pearson's correlation coefficient <span class="chem">r</span>. <strong>[2 marks]</strong><br>(b) Find the equation of the regression line of <span class="chem">y</span> on <span class="chem">x</span>. <strong>[2 marks]</strong><br>(c) Interpret the gradient of this line in context. <strong>[1 mark]</strong><br>(d) Use your regression line to estimate the test score of a student who revises for <span class="chem">10</span> hours. <strong>[2 marks]</strong><br>(e) Explain why the line should not be used to estimate the score of a student who revises for <span class="chem">20</span> hours. <strong>[1 mark]</strong></p>
      stem: "<p>下表列出 <span class=\"chem\">8</span> 名學生的溫習時數 <span class=\"chem\">x</span> 及測驗分數 <span class=\"chem\">y</span>。<br>溫習時數 <span class=\"chem\">x</span>：<span class=\"chem\">2, 3, 5, 6, 8, 9, 11, 12</span><br>測驗分數 <span class=\"chem\">y</span>：<span class=\"chem\">41, 46, 50, 57, 60, 66, 71, 77</span><br>(a) 求 (Find) 皮爾遜相關係數 <span class=\"chem\">r</span>。<strong>[2 marks]</strong><br>(b) 求 (Find) <span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 的迴歸直線方程。<strong>[2 marks]</strong><br>(c) 在情境中詮釋這條直線的斜率。<strong>[1 mark]</strong><br>(d) 利用你的迴歸直線，估計 (estimate) 一名溫習 <span class=\"chem\">10</span> 小時的學生的測驗分數。<strong>[2 marks]</strong><br>(e) 解釋為何不應用這條直線估計溫習 <span class=\"chem\">20</span> 小時的學生的分數。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Enter <span class="chem">x</span> in <span class="mono">L1</span> and <span class="chem">y</span> in <span class="mono">L2</span>, then run <span class="mono">LinReg(ax+b) L1, L2</span>: the GDC gives <span class="chem">a</span>, <span class="chem">b</span> and <span class="chem">r</span>.
        "把 <span class=\"chem\">x</span> 輸入 <span class=\"mono\">L1</span>、<span class=\"chem\">y</span> 輸入 <span class=\"mono\">L2</span>，然後執行 <span class=\"mono\">LinReg(ax+b) L1, L2</span>：GDC 會給出 <span class=\"chem\">a</span>、<span class=\"chem\">b</span> 及 <span class=\"chem\">r</span>。",
        // EN: The gradient <span class="chem">a</span> is the change in <span class="chem">y</span> for each extra unit of <span class="chem">x</span>. Compare <span class="chem">x = 20</span> with the smallest and largest <span class="chem">x</span>-values.
        "斜率 <span class=\"chem\">a</span> 是 <span class=\"chem\">x</span> 每增加一個單位時 <span class=\"chem\">y</span> 的變化。把 <span class=\"chem\">x = 20</span> 與最小及最大的 <span class=\"chem\">x</span> 值比較。",
      ],
      // EN: <p>(a) From the GDC, <span class="chem">r = 0.99290… ≈ 0.993</span> <b>[M1 A1]</b>.<br>(b) <span class="chem">a = 3.4239…</span> and <span class="chem">b = 34.533…</span>, so <span class="chem">y = 3.42x + 34.5</span> <b>[A1 A1]</b>.<br>(c) For each extra hour of revision, the test score increases by about <span class="chem">3.42</span> marks on average <b>[A1]</b>.<br>(d) <span class="chem">y = 3.4239(10) + 34.533 = 68.77… ≈ 68.8</span> <b>[M1 A1]</b>.<br>(e) <span class="chem">x = 20</span> lies outside the observed range <span class="chem">2 ≤ x ≤ 12</span>, so the estimate would be an extrapolation <b>[R1]</b>.</p>
      solution: "<p>(a) 由 GDC 得 <span class=\"chem\">r = 0.99290… ≈ 0.993</span> <b>[M1 A1]</b>。<br>(b) <span class=\"chem\">a = 3.4239…</span> 及 <span class=\"chem\">b = 34.533…</span>，所以 <span class=\"chem\">y = 3.42x + 34.5</span> <b>[A1 A1]</b>。<br>(c) 每多溫習一小時，測驗分數平均約增加 <span class=\"chem\">3.42</span> 分 <b>[A1]</b>。<br>(d) <span class=\"chem\">y = 3.4239(10) + 34.533 = 68.77… ≈ 68.8</span> <b>[M1 A1]</b>。<br>(e) <span class=\"chem\">x = 20</span> 在觀測範圍 <span class=\"chem\">2 ≤ x ≤ 12</span> 之外，所以這個估計屬於外推 <b>[R1]</b>。</p>",
      // EN: <p>(a) <span class="chem">r = 0.993</span><br>(b) <span class="chem">y = 3.42x + 34.5</span><br>(c) Each extra hour of revision is associated with an increase of about <span class="chem">3.42</span> marks in the test score.<br>(d) <span class="chem">y ≈ 68.8</span> (accept <span class="chem">68.7</span> from the rounded coefficients).<br>(e) <span class="chem">x = 20</span> is outside the data range <span class="chem">2 ≤ x ≤ 12</span>, so the estimate would be an extrapolation.</p>
      answer: "<p>(a) <span class=\"chem\">r = 0.993</span><br>(b) <span class=\"chem\">y = 3.42x + 34.5</span><br>(c) 每多溫習一小時，測驗分數約增加 <span class=\"chem\">3.42</span> 分。<br>(d) <span class=\"chem\">y ≈ 68.8</span>（若用捨入後的係數，可接受 <span class=\"chem\">68.7</span>）。<br>(e) <span class=\"chem\">x = 20</span> 在數據範圍 <span class=\"chem\">2 ≤ x ≤ 12</span> 之外，所以這個估計屬於外推。</p>",
      markscheme: [
        // EN: M1: Enters x in L1 and y in L2 and uses the GDC (LinReg(ax+b)).
        "M1：把 x 輸入 L1、y 輸入 L2，並使用 GDC（LinReg(ax+b)）。",
        // EN: A1: r = 0.993.
        "A1：r = 0.993。",
        // EN: A1: Gradient a = 3.42 (3.4239…).
        "A1：斜率 a = 3.42 (3.4239…)。",
        // EN: A1: Intercept b = 34.5 (34.533…), giving y = 3.42x + 34.5.
        "A1：截距 b = 34.5 (34.533…)，得 y = 3.42x + 34.5。",
        // EN: A1: Each extra hour of revision is associated with about 3.42 more marks, on average.
        "A1：每多溫習一小時，分數平均約多 3.42 分。",
        // EN: M1: Substitutes x = 10 into the regression line.
        "M1：把 x = 10 代入迴歸直線。",
        // EN: A1: y ≈ 68.8 (accept 68.7).
        "A1：y ≈ 68.8（可接受 68.7）。",
        // EN: R1: 20 hours is outside the data range (2 to 12 hours), so this would be extrapolation and is unreliable.
        "R1：20 小時在數據範圍（2 至 12 小時）之外，所以屬於外推，並不可靠。",
      ],
    },

    // ── t4-1-q020 · short · exam · SL · SL 4.2 · 4 marks
    "t4-1-q020": {
      // EN: <p>The test scores of two classes are summarized by these five-number summaries.<br>Class A: minimum <span class="chem">32</span>, <span class="chem">Q_1 = 48</span>, median <span class="chem">60</span>, <span class="chem">Q_3 = 74</span>, maximum <span class="chem">90</span>.<br>Class B: minimum <span class="chem">45</span>, <span class="chem">Q_1 = 58</span>, median <span class="chem">66</span>, <span class="chem">Q_3 = 72</span>, maximum <span class="chem">84</span>.<br>Compare the two distributions, referring to one measure of centre and one measure of spread. <strong>[4 marks]</strong></p>
      stem: "<p>兩班學生的測驗分數以下列五數概括表示。<br>A 班：最小值 <span class=\"chem\">32</span>，<span class=\"chem\">Q_1 = 48</span>，中位數 <span class=\"chem\">60</span>，<span class=\"chem\">Q_3 = 74</span>，最大值 <span class=\"chem\">90</span>。<br>B 班：最小值 <span class=\"chem\">45</span>，<span class=\"chem\">Q_1 = 58</span>，中位數 <span class=\"chem\">66</span>，<span class=\"chem\">Q_3 = 72</span>，最大值 <span class=\"chem\">84</span>。<br>比較 (Compare) 這兩個分佈，須提及一個中心量度及一個離散量度。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: For centre compare the medians. For spread find <span class="chem">IQR = Q_3 - Q_1</span> for each class.
        "中心方面比較中位數；離散方面為每班求 <span class=\"chem\">IQR = Q_3 - Q_1</span>。",
        // EN: Always say what each comparison means for the students' scores.
        "每項比較都要說明它對學生分數的意思。",
      ],
      // EN: <p>Centre: the median of Class B (<span class="chem">66</span>) is higher than that of Class A (<span class="chem">60</span>) <b>[A1]</b>, so Class B generally scored higher <b>[R1]</b>.<br>Spread: <span class="chem">IQR_A = 74 - 48 = 26</span> and <span class="chem">IQR_B = 72 - 58 = 14</span> <b>[A1]</b>, so the middle 50% of Class A's scores are more spread out and Class B is more consistent <b>[R1]</b>.</p>
      solution: "<p>中心：B 班的中位數（<span class=\"chem\">66</span>）高於 A 班（<span class=\"chem\">60</span>）<b>[A1]</b>，所以 B 班整體得分較高 <b>[R1]</b>。<br>離散：<span class=\"chem\">IQR_A = 74 - 48 = 26</span> 及 <span class=\"chem\">IQR_B = 72 - 58 = 14</span> <b>[A1]</b>，所以 A 班中間 50% 的分數較分散，而 B 班較穩定 <b>[R1]</b>。</p>",
      // EN: <p>Medians: Class B <span class="chem">66</span> &gt; Class A <span class="chem">60</span>, so Class B generally scored higher.<br><span class="chem">IQR</span>s: Class A <span class="chem">74 - 48 = 26</span>, Class B <span class="chem">72 - 58 = 14</span>, so the scores of Class A are more spread out (Class B is more consistent).</p>
      answer: "<p>中位數：B 班 <span class=\"chem\">66</span> &gt; A 班 <span class=\"chem\">60</span>，所以 B 班整體得分較高。<br><span class=\"chem\">IQR</span>：A 班 <span class=\"chem\">74 - 48 = 26</span>，B 班 <span class=\"chem\">72 - 58 = 14</span>，所以 A 班的分數較分散（B 班較穩定）。</p>",
      markscheme: [
        // EN: A1: States both medians, 60 (Class A) and 66 (Class B).
        "A1：寫出兩個中位數：60（A 班）及 66（B 班）。",
        // EN: R1: Concludes in context that Class B generally scored higher, because its median is higher.
        "R1：在情境中總結 B 班整體得分較高，因為其中位數較高。",
        // EN: A1: Finds IQR = 74 − 48 = 26 for Class A and IQR = 72 − 58 = 14 for Class B (or uses the ranges 58 and 39).
        "A1：求得 A 班 IQR = 74 − 48 = 26 及 B 班 IQR = 72 − 58 = 14（或使用全距 58 及 39）。",
        // EN: R1: Concludes in context that the scores of Class A are more spread out (less consistent).
        "R1：在情境中總結 A 班的分數較分散（較不穩定）。",
      ],
    },

  }
});
