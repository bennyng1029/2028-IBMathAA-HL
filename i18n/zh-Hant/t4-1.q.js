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

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('zh-Hant', 't4-1.q', {
  questions: {

    // ── t4-1-q021 · numeric · foundation · SL · SL 4.3 · 2 marks
    "t4-1-q021": {
      // EN: <p>The times, in seconds, that <span class="chem">12</span> students took to solve a logic puzzle are shown below.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Time (s)</th><td class="num">34</td><td class="num">41</td><td class="num">29</td><td class="num">52</td><td class="num">38</td><td class="num">45</td><td class="num">31</td><td class="num">47</td><td class="num">36</td><td class="num">40</td><td class="num">55</td><td class="num">33</td></tr></tbody></table></div><p>Find the standard deviation <span class="chem">σ</span> of the times.</p>
      stem: "<p>下表列出 <span class=\"chem\">12</span> 名學生解答一道邏輯謎題所用的時間（以秒計）。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">時間 (s)</th><td class=\"num\">34</td><td class=\"num\">41</td><td class=\"num\">29</td><td class=\"num\">52</td><td class=\"num\">38</td><td class=\"num\">45</td><td class=\"num\">31</td><td class=\"num\">47</td><td class=\"num\">36</td><td class=\"num\">40</td><td class=\"num\">55</td><td class=\"num\">33</td></tr></tbody></table></div><p>求 (Find) 這些時間的標準差 <span class=\"chem\">σ</span>。</p>",
      hints: [
        // EN: Enter the <span class="chem">12</span> times in a list and run <span class="mono">1-Var Stats</span>.
        "把 <span class=\"chem\">12</span> 個時間輸入一個列表，然後執行 <span class=\"mono\">1-Var Stats</span>。",
        // EN: IB uses the population standard deviation, shown on the GDC as <span class="mono">σx</span> (not <span class="mono">Sx</span>).
        "IB 使用總體標準差，在 GDC 上顯示為 <span class=\"mono\">σx</span>（不是 <span class=\"mono\">Sx</span>）。",
      ],
      // EN: <p>From the GDC (<span class="mono">1-Var Stats</span>): <span class="chem">x̄ = 40.0833</span> s and <span class="chem">σ = 7.9105… ≈ 7.91</span> s <b>[M1 A1]</b>.</p>
      solution: "<p>由 GDC（<span class=\"mono\">1-Var Stats</span>）得：<span class=\"chem\">x̄ = 40.0833</span> s 及 <span class=\"chem\">σ = 7.9105… ≈ 7.91</span> s <b>[M1 A1]</b>。</p>",
    },

    // ── t4-1-q022 · numeric · exam · SL · SL 4.3 · 3 marks
    "t4-1-q022": {
      // EN: <p>A library records the number of books <span class="chem">x</span> borrowed in one week by each of its <span class="chem">50</span> members.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Books borrowed <span class="chem">x</span></th><td class="num">0</td><td class="num">1</td><td class="num">2</td><td class="num">3</td><td class="num">4</td><td class="num">5</td></tr><tr><th scope="row">Number of members <span class="chem">f</span></th><td class="num">6</td><td class="num">11</td><td class="num">14</td><td class="num">9</td><td class="num">7</td><td class="num">3</td></tr></tbody></table></div><p>Find the standard deviation of the number of books borrowed.</p>
      stem: "<p>某圖書館記錄了其 <span class=\"chem\">50</span> 名會員每人在一星期內借閱的書本數目 <span class=\"chem\">x</span>。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">借書數目 <span class=\"chem\">x</span></th><td class=\"num\">0</td><td class=\"num\">1</td><td class=\"num\">2</td><td class=\"num\">3</td><td class=\"num\">4</td><td class=\"num\">5</td></tr><tr><th scope=\"row\">會員人數 <span class=\"chem\">f</span></th><td class=\"num\">6</td><td class=\"num\">11</td><td class=\"num\">14</td><td class=\"num\">9</td><td class=\"num\">7</td><td class=\"num\">3</td></tr></tbody></table></div><p>求 (Find) 借書數目的標準差。</p>",
      hints: [
        // EN: Put the values in <span class="mono">L1</span> and the frequencies in <span class="mono">L2</span>, then run <span class="mono">1-Var Stats L1, L2</span> (FreqList = L2).
        "把數值輸入 <span class=\"mono\">L1</span>、頻數輸入 <span class=\"mono\">L2</span>，然後執行 <span class=\"mono\">1-Var Stats L1, L2</span>（FreqList = L2）。",
        // EN: Check that <span class="chem">n = 50</span> on the screen: if it shows <span class="chem">n = 6</span>, the frequencies were not used. Read <span class="mono">σx</span>.
        "檢查屏幕上是否顯示 <span class=\"chem\">n = 50</span>：若顯示 <span class=\"chem\">n = 6</span>，即頻數沒有被使用。讀取 <span class=\"mono\">σx</span>。",
      ],
      // EN: <p>With the frequencies as the frequency list, the GDC gives <span class="chem">n = 50</span>, <span class="chem">x̄ = 2.18</span> <b>[M1]</b> and <span class="chem">σ = 1.3956… ≈ 1.40</span> books <b>[A2]</b>.</p>
      solution: "<p>以頻數作為頻數列表，GDC 給出 <span class=\"chem\">n = 50</span>、<span class=\"chem\">x̄ = 2.18</span> <b>[M1]</b> 及 <span class=\"chem\">σ = 1.3956… ≈ 1.40</span> 本 <b>[A2]</b>。</p>",
    },

    // ── t4-1-q023 · short · exam · SL · SL 4.1, 4.2, 4.3 · 9 marks
    "t4-1-q023": {
      // EN: <p>The resting heart rates, in beats per minute (bpm), of <span class="chem">15</span> athletes are shown below.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Heart rate (bpm)</th><td class="num">52</td><td class="num">58</td><td class="num">61</td><td class="num">55</td><td class="num">49</td><td class="num">63</td><td class="num">57</td><td class="num">60</td><td class="num">54</td><td class="num">66</td><td class="num">59</td><td class="num">51</td><td class="num">62</td><td class="num">56</td><td class="num">88</td></tr></tbody></table></div><p>Quartiles are found by the GDC method: the median of each half of the ordered data, leaving out the overall median when the number of values is odd.<br>(a) Write down the median, the lower quartile <span class="chem">Q_1</span> and the upper quartile <span class="chem">Q_3</span>. <strong>[3 marks]</strong><br>(b) Show that <span class="chem">88</span> bpm is an outlier. <strong>[3 marks]</strong><br>(c) Find the mean and the standard deviation of the <span class="chem">15</span> heart rates. <strong>[2 marks]</strong><br>(d) The coach finds that the <span class="chem">88</span> bpm reading was taken straight after a warm-up run. State, with a reason, whether this value should be kept in the data. <strong>[1 mark]</strong></p>
      stem: "<p>下表列出 <span class=\"chem\">15</span> 名運動員的靜息心率（以每分鐘心跳次數 bpm 計）。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">心率 (bpm)</th><td class=\"num\">52</td><td class=\"num\">58</td><td class=\"num\">61</td><td class=\"num\">55</td><td class=\"num\">49</td><td class=\"num\">63</td><td class=\"num\">57</td><td class=\"num\">60</td><td class=\"num\">54</td><td class=\"num\">66</td><td class=\"num\">59</td><td class=\"num\">51</td><td class=\"num\">62</td><td class=\"num\">56</td><td class=\"num\">88</td></tr></tbody></table></div><p>四分位數以 GDC 方法求得：取已排序數據前後兩半各自的中位數，當數值個數為奇數時不計算整體中位數。<br>(a) 寫出 (Write down) 中位數、下四分位數 <span class=\"chem\">Q_1</span> 及上四分位數 <span class=\"chem\">Q_3</span>。<strong>[3 marks]</strong><br>(b) 證明 (Show that) <span class=\"chem\">88</span> bpm 是一個異常值。<strong>[3 marks]</strong><br>(c) 求 (Find) 這 <span class=\"chem\">15</span> 個心率的平均值及標準差。<strong>[2 marks]</strong><br>(d) 教練發現 <span class=\"chem\">88</span> bpm 這個讀數是在熱身跑後立即量度的。說明 (State) 這個數值應否保留在數據中，並給出理由。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Run <span class="mono">1-Var Stats</span>: it gives the median, <span class="chem">Q_1</span> and <span class="chem">Q_3</span>. With <span class="chem">n = 15</span>, the lower half is the 7 smallest values.
        "執行 <span class=\"mono\">1-Var Stats</span>：它會給出中位數、<span class=\"chem\">Q_1</span> 及 <span class=\"chem\">Q_3</span>。當 <span class=\"chem\">n = 15</span>，下半部是最小的 7 個數值。",
        // EN: An outlier lies more than <span class="chem">1.5 × IQR</span> above <span class="chem">Q_3</span> (or below <span class="chem">Q_1</span>). Write the fence as a number and compare.
        "異常值是比 <span class=\"chem\">Q_3</span> 大超過 <span class=\"chem\">1.5 × IQR</span>（或比 <span class=\"chem\">Q_1</span> 小超過此數）的數值。把界線寫成一個數，然後比較。",
        // EN: For (d), ask: is <span class="chem">88</span> an error for <em>this</em> variable, or a genuine extreme value?
        "在 (d) 中，問自己：<span class=\"chem\">88</span> 對<em>這個</em>變量來說是一個錯誤，還是一個真實的極端值？",
      ],
      // EN: <p>(a) Ordered: 49, 51, 52, 54, 55, 56, 57, <b>58</b>, 59, 60, 61, 62, 63, 66, 88. The median is the 8th value, <span class="chem">58</span> <b>[A1]</b>. The lower half 49 … 57 has median <span class="chem">Q_1 = 54</span> <b>[A1]</b>, and the upper half 59 … 88 has median <span class="chem">Q_3 = 62</span> <b>[A1]</b>.<br>(b) <span class="chem">IQR = 62 - 54 = 8</span> <b>[A1]</b>. Upper fence <span class="chem">= 62 + 1.5(8) = 74</span> <b>[M1]</b>. Since <span class="chem">88 &gt; 74</span>, 88 is an outlier <b>[R1]</b>.<br>(c) GDC: <span class="chem">x̄ = 59.4</span> bpm <b>[A1]</b>, <span class="chem">σ = 8.8904… ≈ 8.89</span> bpm <b>[A1]</b>.<br>(d) The reading was not taken at rest, so it is an error for the variable "resting heart rate". It should be removed (or the athlete re-measured) <b>[R1]</b>.</p>
      solution: "<p>(a) 排序後：49, 51, 52, 54, 55, 56, 57, <b>58</b>, 59, 60, 61, 62, 63, 66, 88。中位數是第 8 個數值 <span class=\"chem\">58</span> <b>[A1]</b>。下半部 49 … 57 的中位數為 <span class=\"chem\">Q_1 = 54</span> <b>[A1]</b>，上半部 59 … 88 的中位數為 <span class=\"chem\">Q_3 = 62</span> <b>[A1]</b>。<br>(b) <span class=\"chem\">IQR = 62 - 54 = 8</span> <b>[A1]</b>。上界線 <span class=\"chem\">= 62 + 1.5(8) = 74</span> <b>[M1]</b>。由於 <span class=\"chem\">88 &gt; 74</span>，88 是異常值 <b>[R1]</b>。<br>(c) GDC：<span class=\"chem\">x̄ = 59.4</span> bpm <b>[A1]</b>，<span class=\"chem\">σ = 8.8904… ≈ 8.89</span> bpm <b>[A1]</b>。<br>(d) 這個讀數不是在靜息時量度的，所以對變量「靜息心率」而言是一個錯誤。應把它刪除（或重新量度該運動員）<b>[R1]</b>。</p>",
      // EN: <p>(a) Median <span class="chem">58</span>, <span class="chem">Q_1 = 54</span>, <span class="chem">Q_3 = 62</span>.<br>(b) <span class="chem">IQR = 8</span>; upper fence <span class="chem">62 + 1.5(8) = 74</span> and <span class="chem">88 &gt; 74</span>, so 88 is an outlier.<br>(c) <span class="chem">x̄ = 59.4</span> bpm, <span class="chem">σ = 8.89</span> bpm.<br>(d) Remove it: it is not a <em>resting</em> heart rate, so it is a measurement error for this variable, not a genuine value.</p>
      answer: "<p>(a) 中位數 <span class=\"chem\">58</span>，<span class=\"chem\">Q_1 = 54</span>，<span class=\"chem\">Q_3 = 62</span>。<br>(b) <span class=\"chem\">IQR = 8</span>；上界線 <span class=\"chem\">62 + 1.5(8) = 74</span>，而 <span class=\"chem\">88 &gt; 74</span>，所以 88 是異常值。<br>(c) <span class=\"chem\">x̄ = 59.4</span> bpm，<span class=\"chem\">σ = 8.89</span> bpm。<br>(d) 刪除它：它不是<em>靜息</em>心率，所以它是這個變量的量度錯誤，而不是一個真實的數值。</p>",
      markscheme: [
        // EN: A1: Median = 58 bpm.
        "A1：中位數 = 58 bpm。",
        // EN: A1: Q₁ = 54 bpm.
        "A1：Q₁ = 54 bpm。",
        // EN: A1: Q₃ = 62 bpm.
        "A1：Q₃ = 62 bpm。",
        // EN: A1: IQR = 62 − 54 = 8.
        "A1：IQR = 62 − 54 = 8。",
        // EN: M1: Upper fence Q₃ + 1.5 × IQR = 62 + 1.5(8) = 74.
        "M1：上界線 Q₃ + 1.5 × IQR = 62 + 1.5(8) = 74。",
        // EN: R1: 88 > 74, so 88 is an outlier.
        "R1：88 > 74，所以 88 是異常值。",
        // EN: A1: Mean x̄ = 59.4 bpm.
        "A1：平均值 x̄ = 59.4 bpm。",
        // EN: A1: σ = 8.89 bpm (8.8904…).
        "A1：σ = 8.89 bpm (8.8904…)。",
        // EN: R1: Remove the value (or recheck it), because it was not measured at rest, so it does not belong to the data being studied.
        "R1：刪除該數值（或重新檢查），因為它不是在靜息時量度的，所以不屬於所研究的數據。",
      ],
    },

    // ── t4-1-q024 · numeric · exam · SL · SL 4.2, 4.3 · 3 marks
    "t4-1-q024": {
      // EN: <p>The reaction times, in seconds, of <span class="chem">12</span> drivers in a simulator are shown below.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Reaction time (s)</th><td class="num">0.42</td><td class="num">0.38</td><td class="num">0.51</td><td class="num">0.47</td><td class="num">0.36</td><td class="num">0.44</td><td class="num">0.59</td><td class="num">0.4</td><td class="num">0.49</td><td class="num">0.45</td><td class="num">0.53</td><td class="num">0.41</td></tr></tbody></table></div><p>Using the GDC method: the median of each half of the ordered data, leaving out the overall median when the number of values is odd, find the interquartile range of the reaction times.</p>
      stem: "<p>下表列出 <span class=\"chem\">12</span> 名司機在模擬器中的反應時間（以秒計）。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">反應時間 (s)</th><td class=\"num\">0.42</td><td class=\"num\">0.38</td><td class=\"num\">0.51</td><td class=\"num\">0.47</td><td class=\"num\">0.36</td><td class=\"num\">0.44</td><td class=\"num\">0.59</td><td class=\"num\">0.4</td><td class=\"num\">0.49</td><td class=\"num\">0.45</td><td class=\"num\">0.53</td><td class=\"num\">0.41</td></tr></tbody></table></div><p>使用 GDC 方法（取已排序數據前後兩半各自的中位數，當數值個數為奇數時不計算整體中位數），求 (Find) 反應時間的四分位數間距。</p>",
      hints: [
        // EN: With <span class="chem">n = 12</span> (even), the lower half is the 6 smallest values and the upper half is the 6 largest.
        "當 <span class=\"chem\">n = 12</span>（偶數），下半部是最小的 6 個數值，上半部是最大的 6 個數值。",
        // EN: <span class="chem">Q_1</span> is the mean of the 3rd and 4th ordered values; <span class="chem">Q_3</span> is the mean of the 9th and 10th. Then <span class="chem">IQR = Q_3 - Q_1</span>.
        "<span class=\"chem\">Q_1</span> 是排序後第 3 及第 4 個數值的平均；<span class=\"chem\">Q_3</span> 是第 9 及第 10 個數值的平均。然後 <span class=\"chem\">IQR = Q_3 - Q_1</span>。",
      ],
      // EN: <p>Ordered: 0.36, 0.38, 0.40, 0.41, 0.42, 0.44 | 0.45, 0.47, 0.49, 0.51, 0.53, 0.59.<br><span class="chem">Q_1 = (0.40 + 0.41)/2 = 0.405</span> and <span class="chem">Q_3 = (0.49 + 0.51)/2 = 0.5</span> <b>[A1 A1]</b> (these match <span class="mono">1-Var Stats</span>).<br><span class="chem">IQR = 0.5 - 0.405 = 0.095</span> s <b>[A1]</b>.</p>
      solution: "<p>排序後：0.36, 0.38, 0.40, 0.41, 0.42, 0.44 | 0.45, 0.47, 0.49, 0.51, 0.53, 0.59。<br><span class=\"chem\">Q_1 = (0.40 + 0.41)/2 = 0.405</span> 及 <span class=\"chem\">Q_3 = (0.49 + 0.51)/2 = 0.5</span> <b>[A1 A1]</b>（與 <span class=\"mono\">1-Var Stats</span> 的結果相符）。<br><span class=\"chem\">IQR = 0.5 - 0.405 = 0.095</span> s <b>[A1]</b>。</p>",
    },

    // ── t4-1-q025 · short · exam · SL · SL 4.4 · 9 marks
    "t4-1-q025": {
      // EN: <p>An estate agent records the distance <span class="chem">x</span> km from the city centre and the average price <span class="chem">y</span> (in thousands of euros) of a two-bedroom flat in <span class="chem">8</span> districts.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Distance <span class="chem">x</span> (km)</th><td class="num">1.2</td><td class="num">2.5</td><td class="num">3.1</td><td class="num">4.8</td><td class="num">5.5</td><td class="num">6.9</td><td class="num">8.2</td><td class="num">9.6</td></tr><tr><th scope="row">Price <span class="chem">y</span> (thousand €)</th><td class="num">412</td><td class="num">388</td><td class="num">371</td><td class="num">344</td><td class="num">330</td><td class="num">305</td><td class="num">289</td><td class="num">262</td></tr></tbody></table></div><p>(a) Find Pearson's product-moment correlation coefficient <span class="chem">r</span>. <strong>[2 marks]</strong><br>(b) Describe the correlation between distance and price. <strong>[1 mark]</strong><br>(c) Find the equation of the regression line of <span class="chem">y</span> on <span class="chem">x</span>. <strong>[2 marks]</strong><br>(d) Interpret the gradient of the line in context. <strong>[1 mark]</strong><br>(e) Use the line to estimate the average price in a district <span class="chem">7.5</span> km from the centre. <strong>[2 marks]</strong><br>(f) Explain why the line should not be used for a village <span class="chem">15</span> km from the centre. <strong>[1 mark]</strong></p>
      stem: "<p>一名地產代理記錄了 <span class=\"chem\">8</span> 個地區與市中心的距離 <span class=\"chem\">x</span> km，以及該區兩房單位的平均價格 <span class=\"chem\">y</span>（以千歐元計）。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">距離 <span class=\"chem\">x</span> (km)</th><td class=\"num\">1.2</td><td class=\"num\">2.5</td><td class=\"num\">3.1</td><td class=\"num\">4.8</td><td class=\"num\">5.5</td><td class=\"num\">6.9</td><td class=\"num\">8.2</td><td class=\"num\">9.6</td></tr><tr><th scope=\"row\">價格 <span class=\"chem\">y</span> (千 €)</th><td class=\"num\">412</td><td class=\"num\">388</td><td class=\"num\">371</td><td class=\"num\">344</td><td class=\"num\">330</td><td class=\"num\">305</td><td class=\"num\">289</td><td class=\"num\">262</td></tr></tbody></table></div><p>(a) 求 (Find) 皮爾遜積矩相關係數 <span class=\"chem\">r</span>。<strong>[2 marks]</strong><br>(b) 描述 (Describe) 距離與價格之間的相關。<strong>[1 mark]</strong><br>(c) 求 (Find) <span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 的迴歸線方程。<strong>[2 marks]</strong><br>(d) 在情境中詮釋 (Interpret) 這條直線的斜率。<strong>[1 mark]</strong><br>(e) 利用這條直線，估計 (estimate) 一個距離市中心 <span class=\"chem\">7.5</span> km 的地區的平均價格。<strong>[2 marks]</strong><br>(f) 解釋 (Explain) 為何這條直線不應用於一條距離市中心 <span class=\"chem\">15</span> km 的村落。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: (a)–(c) are all one GDC run: <span class="mono">LinReg(ax+b) L1, L2</span> with diagnostics on, so that <span class="chem">r</span> is shown.
        "解碼：(a)–(c) 全部由同一次 GDC 運算得出：在開啟診斷功能 (diagnostics) 的情況下執行 <span class=\"mono\">LinReg(ax+b) L1, L2</span>，以顯示 <span class=\"chem\">r</span>。",
        // EN: For (d), say what one extra km does to the price, with units. A negative gradient means a decrease.
        "在 (d) 中，說明每多一公里對價格有甚麼影響，並附上單位。負斜率表示減少。",
        // EN: For (f), compare <span class="chem">15</span> with the smallest and largest <span class="chem">x</span>-values.
        "在 (f) 中，把 <span class=\"chem\">15</span> 與最小及最大的 <span class=\"chem\">x</span> 值比較。",
      ],
      // EN: <p>(a) GDC: <span class="chem">r = -0.99812… ≈ -0.998</span> <b>[M1 A1]</b>.<br>(b) Strong negative linear correlation: the further from the centre, the lower the price <b>[A1]</b>.<br>(c) <span class="chem">a = -17.6117…</span>, <span class="chem">b = 429.646…</span>, so <span class="chem">y = -17.6x + 430</span> <b>[A1 A1]</b>.<br>(d) Each additional km from the centre is associated with a fall of about <span class="chem">17.6</span> thousand euros in the average price <b>[A1]</b>.<br>(e) <span class="chem">y = -17.6117(7.5) + 429.646 = 297.558… ≈ 298</span> thousand euros <b>[M1 A1]</b>. This is interpolation (7.5 is inside the data range).<br>(f) <span class="chem">x = 15</span> is outside <span class="chem">1.2 ≤ x ≤ 9.6</span>, so the estimate would be an extrapolation and the linear pattern may not continue <b>[R1]</b>.</p>
      solution: "<p>(a) GDC：<span class=\"chem\">r = -0.99812… ≈ -0.998</span> <b>[M1 A1]</b>。<br>(b) 強負線性相關：離市中心越遠，價格越低 <b>[A1]</b>。<br>(c) <span class=\"chem\">a = -17.6117…</span>，<span class=\"chem\">b = 429.646…</span>，所以 <span class=\"chem\">y = -17.6x + 430</span> <b>[A1 A1]</b>。<br>(d) 每遠離市中心一公里，平均價格約下降 <span class=\"chem\">17.6</span> 千歐元 <b>[A1]</b>。<br>(e) <span class=\"chem\">y = -17.6117(7.5) + 429.646 = 297.558… ≈ 298</span> 千歐元 <b>[M1 A1]</b>。這是內插（7.5 在數據範圍之內）。<br>(f) <span class=\"chem\">x = 15</span> 在 <span class=\"chem\">1.2 ≤ x ≤ 9.6</span> 之外，所以這個估計屬於外推，而線性規律未必延續 <b>[R1]</b>。</p>",
      // EN: <p>(a) <span class="chem">r = -0.998</span><br>(b) Strong negative linear correlation: prices fall as distance increases.<br>(c) <span class="chem">y = -17.6x + 430</span><br>(d) For each extra km from the centre, the average price falls by about <span class="chem">17.6</span> thousand euros (about €17 600).<br>(e) <span class="chem">y ≈ 298</span> thousand euros.<br>(f) <span class="chem">15</span> km is outside the data range <span class="chem">1.2 ≤ x ≤ 9.6</span>, so this would be extrapolation.</p>
      answer: "<p>(a) <span class=\"chem\">r = -0.998</span><br>(b) 強負線性相關：距離增加時價格下降。<br>(c) <span class=\"chem\">y = -17.6x + 430</span><br>(d) 每遠離市中心一公里，平均價格約下降 <span class=\"chem\">17.6</span> 千歐元（約 €17 600）。<br>(e) <span class=\"chem\">y ≈ 298</span> 千歐元。<br>(f) <span class=\"chem\">15</span> km 在數據範圍 <span class=\"chem\">1.2 ≤ x ≤ 9.6</span> 之外，所以這屬於外推。</p>",
      markscheme: [
        // EN: M1: Uses the GDC with x in L1 and y in L2 (LinReg(ax+b)).
        "M1：把 x 輸入 L1、y 輸入 L2，並使用 GDC（LinReg(ax+b)）。",
        // EN: A1: r = -0.998 (-0.99812…).
        "A1：r = -0.998 (-0.99812…)。",
        // EN: A1: Strong negative (linear) correlation, in context.
        "A1：在情境中說明為強負（線性）相關。",
        // EN: A1: a = -17.6.
        "A1：a = -17.6。",
        // EN: A1: b = 430, giving y = -17.6x + 430.
        "A1：b = 430，得 y = -17.6x + 430。",
        // EN: A1: Each extra km is associated with a price about 17.6 thousand euros lower, on average.
        "A1：每多一公里，價格平均約低 17.6 千歐元。",
        // EN: M1: Substitutes x = 7.5 into the regression line.
        "M1：把 x = 7.5 代入迴歸線。",
        // EN: A1: y ≈ 298 thousand euros.
        "A1：y ≈ 298 千歐元。",
        // EN: R1: 15 km is outside the observed distances (1.2 to 9.6 km): extrapolation, so unreliable.
        "R1：15 km 在觀測距離（1.2 至 9.6 km）之外：屬於外推，所以並不可靠。",
      ],
    },

    // ── t4-1-q026 · numeric · exam · SL · SL 4.4 · 2 marks
    "t4-1-q026": {
      // EN: <p>Ten students recorded their daily screen time <span class="chem">x</span> hours and their sleep <span class="chem">y</span> hours on the same night.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Screen time <span class="chem">x</span> (h)</th><td class="num">2.1</td><td class="num">3.4</td><td class="num">1.2</td><td class="num">4.8</td><td class="num">3.9</td><td class="num">5.6</td><td class="num">2.7</td><td class="num">4.3</td><td class="num">6.2</td><td class="num">1.8</td></tr><tr><th scope="row">Sleep <span class="chem">y</span> (h)</th><td class="num">8.4</td><td class="num">7.6</td><td class="num">8.9</td><td class="num">6.8</td><td class="num">7.5</td><td class="num">6.4</td><td class="num">7.9</td><td class="num">7.3</td><td class="num">6</td><td class="num">8.1</td></tr></tbody></table></div><p>Find Pearson's product-moment correlation coefficient <span class="chem">r</span> between screen time and sleep.</p>
      stem: "<p>十名學生記錄了他們每天使用屏幕的時間 <span class=\"chem\">x</span> 小時，以及同一晚的睡眠時間 <span class=\"chem\">y</span> 小時。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">使用屏幕時間 <span class=\"chem\">x</span> (h)</th><td class=\"num\">2.1</td><td class=\"num\">3.4</td><td class=\"num\">1.2</td><td class=\"num\">4.8</td><td class=\"num\">3.9</td><td class=\"num\">5.6</td><td class=\"num\">2.7</td><td class=\"num\">4.3</td><td class=\"num\">6.2</td><td class=\"num\">1.8</td></tr><tr><th scope=\"row\">睡眠時間 <span class=\"chem\">y</span> (h)</th><td class=\"num\">8.4</td><td class=\"num\">7.6</td><td class=\"num\">8.9</td><td class=\"num\">6.8</td><td class=\"num\">7.5</td><td class=\"num\">6.4</td><td class=\"num\">7.9</td><td class=\"num\">7.3</td><td class=\"num\">6</td><td class=\"num\">8.1</td></tr></tbody></table></div><p>求 (Find) 使用屏幕時間與睡眠時間之間的皮爾遜積矩相關係數 <span class=\"chem\">r</span>。</p>",
      hints: [
        // EN: Enter screen time in <span class="mono">L1</span> and sleep in <span class="mono">L2</span> (keep each pair together), then run <span class="mono">LinReg(ax+b)</span>.
        "把使用屏幕時間輸入 <span class=\"mono\">L1</span>、睡眠時間輸入 <span class=\"mono\">L2</span>（保持每對數據對應），然後執行 <span class=\"mono\">LinReg(ax+b)</span>。",
        // EN: If <span class="chem">r</span> does not appear, turn on diagnostics (TI) or read it from the regression results screen.
        "若沒有顯示 <span class=\"chem\">r</span>，開啟診斷功能 (diagnostics)（TI），或從迴歸結果畫面讀取。",
      ],
      // EN: <p>GDC (<span class="mono">LinReg(ax+b) L1, L2</span>): <span class="chem">r = -0.98391… ≈ -0.984</span> <b>[M1 A1]</b>, a strong negative linear correlation.</p>
      solution: "<p>GDC（<span class=\"mono\">LinReg(ax+b) L1, L2</span>）：<span class=\"chem\">r = -0.98391… ≈ -0.984</span> <b>[M1 A1]</b>，屬強負線性相關。</p>",
    },

    // ── t4-1-q027 · numeric · exam · SL · SL 4.4 · 3 marks
    "t4-1-q027": {
      // EN: <p>A chemist sets the temperature <span class="chem">x</span> °C of a beaker of water and measures the mass <span class="chem">y</span> grams of a salt that dissolves in it.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Temperature <span class="chem">x</span> (°C)</th><td class="num">10</td><td class="num">20</td><td class="num">30</td><td class="num">40</td><td class="num">50</td><td class="num">60</td></tr><tr><th scope="row">Mass dissolved <span class="chem">y</span> (g)</th><td class="num">35.8</td><td class="num">38.9</td><td class="num">41.7</td><td class="num">45.2</td><td class="num">47.9</td><td class="num">51.3</td></tr></tbody></table></div><p>Use the regression line of <span class="chem">y</span> on <span class="chem">x</span> to estimate the mass that dissolves at <span class="chem">45</span> °C.</p>
      stem: "<p>一名化學家把一燒杯水的溫度設定為 <span class=\"chem\">x</span> °C，並量度溶於其中的某種鹽的質量 <span class=\"chem\">y</span> 克。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">溫度 <span class=\"chem\">x</span> (°C)</th><td class=\"num\">10</td><td class=\"num\">20</td><td class=\"num\">30</td><td class=\"num\">40</td><td class=\"num\">50</td><td class=\"num\">60</td></tr><tr><th scope=\"row\">溶解質量 <span class=\"chem\">y</span> (g)</th><td class=\"num\">35.8</td><td class=\"num\">38.9</td><td class=\"num\">41.7</td><td class=\"num\">45.2</td><td class=\"num\">47.9</td><td class=\"num\">51.3</td></tr></tbody></table></div><p>利用 <span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 的迴歸線，估計 (estimate) 在 <span class=\"chem\">45</span> °C 時溶解的質量。</p>",
      hints: [
        // EN: Run <span class="mono">LinReg(ax+b)</span> with temperature as the <span class="chem">x</span>-list.
        "以溫度作為 <span class=\"chem\">x</span> 列表，執行 <span class=\"mono\">LinReg(ax+b)</span>。",
        // EN: Substitute <span class="chem">x = 45</span> using the unrounded values of <span class="chem">a</span> and <span class="chem">b</span> (store the line in <span class="mono">Y1</span>).
        "用 <span class=\"chem\">a</span> 及 <span class=\"chem\">b</span> 未經捨入的數值代入 <span class=\"chem\">x = 45</span>（把直線儲存在 <span class=\"mono\">Y1</span>）。",
      ],
      // EN: <p>GDC: <span class="chem">y = 0.308571x + 32.6667</span> (<span class="chem">r = 1.00</span>) <b>[M1 A1]</b>.<br><span class="chem">y(45) = 46.552… ≈ 46.6</span> g <b>[A1]</b>. Since 45 °C lies inside the range 10–60 °C and <span class="chem">r</span> is very close to 1, this interpolation is reliable.</p>
      solution: "<p>GDC：<span class=\"chem\">y = 0.308571x + 32.6667</span>（<span class=\"chem\">r = 1.00</span>）<b>[M1 A1]</b>。<br><span class=\"chem\">y(45) = 46.552… ≈ 46.6</span> g <b>[A1]</b>。由於 45 °C 在範圍 10–60 °C 之內，而且 <span class=\"chem\">r</span> 非常接近 1，所以這個內插是可靠的。</p>",
    },

    // ── t4-1-q028 · short · exam · SL · SL 4.4, 4.10 · 7 marks
    "t4-1-q028": {
      // EN: <p>Ten students sat two papers. Their marks on Paper A, <span class="chem">x</span>, and Paper B, <span class="chem">y</span>, are shown below.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Paper A mark <span class="chem">x</span></th><td class="num">45</td><td class="num">52</td><td class="num">61</td><td class="num">38</td><td class="num">70</td><td class="num">58</td><td class="num">66</td><td class="num">49</td><td class="num">75</td><td class="num">55</td></tr><tr><th scope="row">Paper B mark <span class="chem">y</span></th><td class="num">50</td><td class="num">55</td><td class="num">60</td><td class="num">44</td><td class="num">72</td><td class="num">54</td><td class="num">70</td><td class="num">47</td><td class="num">78</td><td class="num">61</td></tr></tbody></table></div><p>(a) Find the value of <span class="chem">r</span> and comment on it. <strong>[2 marks]</strong><br>(b) Find the equation of the regression line of <span class="chem">x</span> on <span class="chem">y</span>, in the form <span class="chem">x = cy + d</span>. <strong>[2 marks]</strong><br>(c) Another student was absent for Paper A and scored <span class="chem">62</span> on Paper B. Estimate the mark this student would have scored on Paper A. <strong>[2 marks]</strong><br>(d) Explain why the regression line of <span class="chem">y</span> on <span class="chem">x</span> should not be rearranged to answer part (c). <strong>[1 mark]</strong></p>
      stem: "<p>十名學生應考了兩份試卷。他們在 Paper A 的分數 <span class=\"chem\">x</span> 及在 Paper B 的分數 <span class=\"chem\">y</span> 如下所示。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">Paper A 分數 <span class=\"chem\">x</span></th><td class=\"num\">45</td><td class=\"num\">52</td><td class=\"num\">61</td><td class=\"num\">38</td><td class=\"num\">70</td><td class=\"num\">58</td><td class=\"num\">66</td><td class=\"num\">49</td><td class=\"num\">75</td><td class=\"num\">55</td></tr><tr><th scope=\"row\">Paper B 分數 <span class=\"chem\">y</span></th><td class=\"num\">50</td><td class=\"num\">55</td><td class=\"num\">60</td><td class=\"num\">44</td><td class=\"num\">72</td><td class=\"num\">54</td><td class=\"num\">70</td><td class=\"num\">47</td><td class=\"num\">78</td><td class=\"num\">61</td></tr></tbody></table></div><p>(a) 求 (Find) <span class=\"chem\">r</span> 的值，並作出評論。<strong>[2 marks]</strong><br>(b) 求 (Find) <span class=\"chem\">x</span> 對 <span class=\"chem\">y</span> 的迴歸線方程，答案以 <span class=\"chem\">x = cy + d</span> 的形式表示。<strong>[2 marks]</strong><br>(c) 另一名學生缺席了 Paper A，而在 Paper B 取得 <span class=\"chem\">62</span> 分。估計 (Estimate) 這名學生在 Paper A 應會取得的分數。<strong>[2 marks]</strong><br>(d) 解釋 (Explain) 為何不應把 <span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 的迴歸線移項來回答 (c) 部分。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: you are given a Paper B mark (<span class="chem">y</span>) and asked for a Paper A mark (<span class="chem">x</span>). Predicting <span class="chem">x</span> from <span class="chem">y</span> needs the <span class="chem">x</span>-on-<span class="chem">y</span> line (SL 4.10).
        "解碼：題目給出 Paper B 的分數（<span class=\"chem\">y</span>），要求 Paper A 的分數（<span class=\"chem\">x</span>）。由 <span class=\"chem\">y</span> 預測 <span class=\"chem\">x</span> 需要 <span class=\"chem\">x</span> 對 <span class=\"chem\">y</span> 的迴歸線（SL 4.10）。",
        // EN: On the GDC swap the lists: put the <span class="chem">y</span>-marks as the Xlist and the <span class="chem">x</span>-marks as the Ylist. The "slope" shown is <span class="chem">c</span> and the "intercept" is <span class="chem">d</span>.
        "在 GDC 上交換列表：把 <span class=\"chem\">y</span> 的分數作 Xlist，<span class=\"chem\">x</span> 的分數作 Ylist。顯示的 \"slope\" 就是 <span class=\"chem\">c</span>，\"intercept\" 就是 <span class=\"chem\">d</span>。",
        // EN: Substitute <span class="chem">y = 62</span> into <span class="chem">x = cy + d</span>.
        "把 <span class=\"chem\">y = 62</span> 代入 <span class=\"chem\">x = cy + d</span>。",
      ],
      // EN: <p>(a) GDC: <span class="chem">r = 0.95409… ≈ 0.954</span> <b>[A1]</b>: a strong positive linear correlation <b>[R1]</b>.<br>(b) <span class="mono">LinReg(ax+b) L2, L1</span> (the <span class="chem">y</span>-marks as Xlist) gives <span class="chem">c = 0.97140…</span> and <span class="chem">d = -0.5098…</span> <b>[M1]</b>, so <span class="chem">x = 0.971y − 0.510</span> <b>[A1]</b>.<br>(c) <span class="chem">x = 0.97140(62) − 0.5098 = 59.717… ≈ 59.7</span> <b>[M1 A1]</b>, about 60 marks. (62 is inside the Paper B range 44–78, so this is interpolation.)<br>(d) The <span class="chem">y</span>-on-<span class="chem">x</span> line minimises the squared vertical distances, so it is designed to predict <span class="chem">y</span>. Rearranging it would give <span class="chem">x ≈ 60.0</span>, a different (biased) value, because <span class="chem">|r| &lt; 1</span> <b>[R1]</b>.</p>
      solution: "<p>(a) GDC：<span class=\"chem\">r = 0.95409… ≈ 0.954</span> <b>[A1]</b>：強正線性相關 <b>[R1]</b>。<br>(b) <span class=\"mono\">LinReg(ax+b) L2, L1</span>（以 <span class=\"chem\">y</span> 的分數作 Xlist）給出 <span class=\"chem\">c = 0.97140…</span> 及 <span class=\"chem\">d = -0.5098…</span> <b>[M1]</b>，所以 <span class=\"chem\">x = 0.971y − 0.510</span> <b>[A1]</b>。<br>(c) <span class=\"chem\">x = 0.97140(62) − 0.5098 = 59.717… ≈ 59.7</span> <b>[M1 A1]</b>，約 60 分。（62 在 Paper B 的範圍 44–78 之內，所以這是內插。）<br>(d) <span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 的迴歸線使鉛垂距離的平方和最小，所以它是為預測 <span class=\"chem\">y</span> 而設的。把它移項會得到 <span class=\"chem\">x ≈ 60.0</span>，一個不同（有偏差）的數值，因為 <span class=\"chem\">|r| &lt; 1</span> <b>[R1]</b>。</p>",
      // EN: <p>(a) <span class="chem">r = 0.954</span>: strong positive linear correlation.<br>(b) <span class="chem">x = 0.971y − 0.510</span><br>(c) <span class="chem">x ≈ 59.7</span>, so about <span class="chem">60</span> marks.<br>(d) The <span class="chem">y</span>-on-<span class="chem">x</span> line minimises vertical (<span class="chem">y</span>) errors and is for predicting <span class="chem">y</span> from <span class="chem">x</span>. To predict <span class="chem">x</span> from a given <span class="chem">y</span> we need the line that minimises horizontal errors: <span class="chem">x</span> on <span class="chem">y</span>.</p>
      answer: "<p>(a) <span class=\"chem\">r = 0.954</span>：強正線性相關。<br>(b) <span class=\"chem\">x = 0.971y − 0.510</span><br>(c) <span class=\"chem\">x ≈ 59.7</span>，所以約 <span class=\"chem\">60</span> 分。<br>(d) <span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 的迴歸線使鉛垂（<span class=\"chem\">y</span>）誤差最小，是用來由 <span class=\"chem\">x</span> 預測 <span class=\"chem\">y</span> 的。要由已知的 <span class=\"chem\">y</span> 預測 <span class=\"chem\">x</span>，我們需要使水平誤差最小的直線：<span class=\"chem\">x</span> 對 <span class=\"chem\">y</span> 的迴歸線。</p>",
      markscheme: [
        // EN: A1: r = 0.954.
        "A1：r = 0.954。",
        // EN: R1: Strong positive linear correlation (students who do well on one paper tend to do well on the other).
        "R1：強正線性相關（在一份試卷表現好的學生，在另一份試卷也傾向表現好）。",
        // EN: M1: Uses the GDC with y as the explanatory list (LinReg with Xlist = y-values, Ylist = x-values).
        "M1：以 y 作解釋變量列表使用 GDC（LinReg 中 Xlist = y 值，Ylist = x 值）。",
        // EN: A1: x = 0.971y − 0.510.
        "A1：x = 0.971y − 0.510。",
        // EN: M1: Substitutes y = 62 into the x-on-y line.
        "M1：把 y = 62 代入 x 對 y 的迴歸線。",
        // EN: A1: x ≈ 59.7 (accept 60 marks).
        "A1：x ≈ 59.7（可接受 60 分）。",
        // EN: R1: The y-on-x line minimises errors in y, so it is not the least-squares line for predicting x; the x-on-y line is.
        "R1：y 對 x 的迴歸線使 y 的誤差最小，所以它不是用來預測 x 的最小二乘直線；x 對 y 的迴歸線才是。",
      ],
    },

    // ── t4-1-q029 · numeric · exam · SL · SL 4.10 · 3 marks
    "t4-1-q029": {
      // EN: <p>A forensic scientist measures the foot length <span class="chem">x</span> cm and the height <span class="chem">y</span> cm of <span class="chem">8</span> adults.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Foot length <span class="chem">x</span> (cm)</th><td class="num">23.5</td><td class="num">25.2</td><td class="num">26.8</td><td class="num">24.1</td><td class="num">27.5</td><td class="num">22.8</td><td class="num">25.9</td><td class="num">28.3</td></tr><tr><th scope="row">Height <span class="chem">y</span> (cm)</th><td class="num">160</td><td class="num">171</td><td class="num">178</td><td class="num">166</td><td class="num">183</td><td class="num">158</td><td class="num">174</td><td class="num">187</td></tr></tbody></table></div><p>A suspect is known to be <span class="chem">172</span> cm tall. Using an appropriate regression line, estimate the suspect's foot length.</p>
      stem: "<p>一名法證科學家量度了 <span class=\"chem\">8</span> 名成年人的腳長 <span class=\"chem\">x</span> cm 及身高 <span class=\"chem\">y</span> cm。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">腳長 <span class=\"chem\">x</span> (cm)</th><td class=\"num\">23.5</td><td class=\"num\">25.2</td><td class=\"num\">26.8</td><td class=\"num\">24.1</td><td class=\"num\">27.5</td><td class=\"num\">22.8</td><td class=\"num\">25.9</td><td class=\"num\">28.3</td></tr><tr><th scope=\"row\">身高 <span class=\"chem\">y</span> (cm)</th><td class=\"num\">160</td><td class=\"num\">171</td><td class=\"num\">178</td><td class=\"num\">166</td><td class=\"num\">183</td><td class=\"num\">158</td><td class=\"num\">174</td><td class=\"num\">187</td></tr></tbody></table></div><p>已知一名疑犯身高 <span class=\"chem\">172</span> cm。利用一條適當的迴歸線，估計 (estimate) 該疑犯的腳長。</p>",
      hints: [
        // EN: Decode: the height <span class="chem">y</span> is given and the foot length <span class="chem">x</span> is wanted, so you need the regression line of <span class="chem">x</span> on <span class="chem">y</span>.
        "解碼：已知身高 <span class=\"chem\">y</span>，要求腳長 <span class=\"chem\">x</span>，所以你需要 <span class=\"chem\">x</span> 對 <span class=\"chem\">y</span> 的迴歸線。",
        // EN: Run <span class="mono">LinReg(ax+b)</span> with the heights as the Xlist and the foot lengths as the Ylist, then substitute <span class="chem">172</span>.
        "以身高作 Xlist、腳長作 Ylist，執行 <span class=\"mono\">LinReg(ax+b)</span>，然後代入 <span class=\"chem\">172</span>。",
      ],
      // EN: <p>Decode: predict <span class="chem">x</span> from <span class="chem">y</span>, so use <span class="chem">x</span> on <span class="chem">y</span> <b>[M1]</b>.<br>GDC: <span class="chem">x = 0.18756y − 6.7719</span> <b>[A1]</b>.<br><span class="chem">x = 0.18756(172) − 6.7719 = 25.4891… ≈ 25.5</span> cm <b>[A1]</b>.</p>
      solution: "<p>解碼：由 <span class=\"chem\">y</span> 預測 <span class=\"chem\">x</span>，所以使用 <span class=\"chem\">x</span> 對 <span class=\"chem\">y</span> 的迴歸線 <b>[M1]</b>。<br>GDC：<span class=\"chem\">x = 0.18756y − 6.7719</span> <b>[A1]</b>。<br><span class=\"chem\">x = 0.18756(172) − 6.7719 = 25.4891… ≈ 25.5</span> cm <b>[A1]</b>。</p>",
    },

    // ── t4-1-q030 · numeric · exam · SL · SL 4.3 · 3 marks
    "t4-1-q030": {
      // EN: <p>The ages <span class="chem">A</span> years of the <span class="chem">80</span> members of a climbing club are summarised below.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Age <span class="chem">A</span> (years)</th><td class="num">15 ≤ <i>A</i> &lt; 25</td><td class="num">25 ≤ <i>A</i> &lt; 35</td><td class="num">35 ≤ <i>A</i> &lt; 45</td><td class="num">45 ≤ <i>A</i> &lt; 55</td><td class="num">55 ≤ <i>A</i> &lt; 65</td></tr><tr><th scope="row">Frequency</th><td class="num">14</td><td class="num">23</td><td class="num">19</td><td class="num">15</td><td class="num">9</td></tr></tbody></table></div><p>Find an estimate of the mean age of the members.</p>
      stem: "<p>下表概括了某登山會 <span class=\"chem\">80</span> 名會員的年齡 <span class=\"chem\">A</span> 歲。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">年齡 <span class=\"chem\">A</span>（歲）</th><td class=\"num\">15 ≤ <i>A</i> &lt; 25</td><td class=\"num\">25 ≤ <i>A</i> &lt; 35</td><td class=\"num\">35 ≤ <i>A</i> &lt; 45</td><td class=\"num\">45 ≤ <i>A</i> &lt; 55</td><td class=\"num\">55 ≤ <i>A</i> &lt; 65</td></tr><tr><th scope=\"row\">頻數</th><td class=\"num\">14</td><td class=\"num\">23</td><td class=\"num\">19</td><td class=\"num\">15</td><td class=\"num\">9</td></tr></tbody></table></div><p>求 (Find) 會員平均年齡的估計值。</p>",
      hints: [
        // EN: Use the mid-interval values <span class="chem">20, 30, 40, 50, 60</span> as the data and the frequencies as the frequency list.
        "以組中點 <span class=\"chem\">20, 30, 40, 50, 60</span> 作為數據，並以頻數作為頻數列表。",
        // EN: <span class="chem">x̄ ≈ (Σ f x) / (Σ f)</span>. Check that <span class="chem">Σ f = 80</span>.
        "<span class=\"chem\">x̄ ≈ (Σ f x) / (Σ f)</span>。檢查 <span class=\"chem\">Σ f = 80</span>。",
      ],
      // EN: <p>Mid-interval values <span class="chem">20, 30, 40, 50, 60</span> <b>[M1]</b>.<br><span class="chem">Σ f x = 280 + 690 + 760 + 750 + 540 = 3020</span> <b>[A1]</b>, so <span class="chem">x̄ ≈ 3020 / 80 = 37.75 ≈ 37.8</span> years <b>[A1]</b> (GDC with the frequency list gives the same value).</p>
      solution: "<p>組中點 <span class=\"chem\">20, 30, 40, 50, 60</span> <b>[M1]</b>。<br><span class=\"chem\">Σ f x = 280 + 690 + 760 + 750 + 540 = 3020</span> <b>[A1]</b>，所以 <span class=\"chem\">x̄ ≈ 3020 / 80 = 37.75 ≈ 37.8</span> 歲 <b>[A1]</b>（以頻數列表使用 GDC 亦得相同數值）。</p>",
      // EN: years
      unit: "歲",
    },

    // ── t4-1-q031 · short · exam · SL · SL 4.2, 4.3 · 6 marks
    "t4-1-q031": {
      // EN: <p>The lengths <span class="chem">L</span> cm of <span class="chem">60</span> fish caught in a lake are shown in the table.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Length <span class="chem">L</span> (cm)</th><td class="num">20 ≤ <i>L</i> &lt; 24</td><td class="num">24 ≤ <i>L</i> &lt; 28</td><td class="num">28 ≤ <i>L</i> &lt; 32</td><td class="num">32 ≤ <i>L</i> &lt; 36</td><td class="num">36 ≤ <i>L</i> &lt; 40</td></tr><tr><th scope="row">Frequency</th><td class="num">7</td><td class="num">15</td><td class="num">19</td><td class="num">12</td><td class="num">7</td></tr></tbody></table></div><p>(a) Write down the modal class. <strong>[1 mark]</strong><br>(b) Find an estimate of the mean length. <strong>[2 marks]</strong><br>(c) Find an estimate of the standard deviation of the lengths. <strong>[2 marks]</strong><br>(d) Explain why the answers to (b) and (c) are only estimates. <strong>[1 mark]</strong></p>
      stem: "<p>下表列出在一個湖中捕獲的 <span class=\"chem\">60</span> 條魚的長度 <span class=\"chem\">L</span> cm。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">長度 <span class=\"chem\">L</span> (cm)</th><td class=\"num\">20 ≤ <i>L</i> &lt; 24</td><td class=\"num\">24 ≤ <i>L</i> &lt; 28</td><td class=\"num\">28 ≤ <i>L</i> &lt; 32</td><td class=\"num\">32 ≤ <i>L</i> &lt; 36</td><td class=\"num\">36 ≤ <i>L</i> &lt; 40</td></tr><tr><th scope=\"row\">頻數</th><td class=\"num\">7</td><td class=\"num\">15</td><td class=\"num\">19</td><td class=\"num\">12</td><td class=\"num\">7</td></tr></tbody></table></div><p>(a) 寫出 (Write down) 眾數組。<strong>[1 mark]</strong><br>(b) 求 (Find) 平均長度的估計值。<strong>[2 marks]</strong><br>(c) 求 (Find) 長度的標準差的估計值。<strong>[2 marks]</strong><br>(d) 解釋 (Explain) 為何 (b) 及 (c) 的答案只是估計值。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: The modal class is the class with the highest frequency (the classes have equal width), not a single value.
        "眾數組是頻數最高的組別（各組的組距相等），而不是單一數值。",
        // EN: Mid-interval values: <span class="chem">22, 26, 30, 34, 38</span>. Put them in <span class="mono">L1</span> and the frequencies in <span class="mono">L2</span>.
        "組中點：<span class=\"chem\">22, 26, 30, 34, 38</span>。把它們輸入 <span class=\"mono\">L1</span>、頻數輸入 <span class=\"mono\">L2</span>。",
      ],
      // EN: <p>(a) The largest frequency is 19, so the modal class is <span class="chem">28 ≤ L &lt; 32</span> <b>[A1]</b>.<br>(b) With mid-interval values <span class="chem">22, 26, 30, 34, 38</span> <b>[M1]</b>: <span class="chem">x̄ ≈ (154 + 390 + 570 + 408 + 266)/60 = 1788/60 = 29.8</span> cm <b>[A1]</b>.<br>(c) GDC (<span class="mono">1-Var Stats L1, L2</span>) <b>[M1]</b>: <span class="chem">σ ≈ 4.7004… ≈ 4.70</span> cm <b>[A1]</b>.<br>(d) The original lengths are lost when the data are grouped; every fish in a class is assumed to have the mid-interval length <b>[R1]</b>.</p>
      solution: "<p>(a) 最大的頻數是 19，所以眾數組是 <span class=\"chem\">28 ≤ L &lt; 32</span> <b>[A1]</b>。<br>(b) 使用組中點 <span class=\"chem\">22, 26, 30, 34, 38</span> <b>[M1]</b>：<span class=\"chem\">x̄ ≈ (154 + 390 + 570 + 408 + 266)/60 = 1788/60 = 29.8</span> cm <b>[A1]</b>。<br>(c) GDC（<span class=\"mono\">1-Var Stats L1, L2</span>）<b>[M1]</b>：<span class=\"chem\">σ ≈ 4.7004… ≈ 4.70</span> cm <b>[A1]</b>。<br>(d) 數據分組後便失去了原本的長度；我們假設每組中的每條魚的長度都等於組中點 <b>[R1]</b>。</p>",
      // EN: <p>(a) <span class="chem">28 ≤ L &lt; 32</span><br>(b) <span class="chem">x̄ ≈ 29.8</span> cm<br>(c) <span class="chem">σ ≈ 4.70</span> cm<br>(d) The individual lengths are not known: each fish is treated as if its length were the mid-interval value.</p>
      answer: "<p>(a) <span class=\"chem\">28 ≤ L &lt; 32</span><br>(b) <span class=\"chem\">x̄ ≈ 29.8</span> cm<br>(c) <span class=\"chem\">σ ≈ 4.70</span> cm<br>(d) 個別長度並不知道：每條魚都被當作其長度等於組中點。</p>",
      markscheme: [
        // EN: A1: Modal class 28 ≤ L < 32 (frequency 19).
        "A1：眾數組 28 ≤ L < 32（頻數 19）。",
        // EN: M1: Uses the mid-interval values 22, 26, 30, 34, 38 with the frequencies.
        "M1：使用組中點 22, 26, 30, 34, 38 及頻數。",
        // EN: A1: Mean ≈ 29.8 cm.
        "A1：平均值 ≈ 29.8 cm。",
        // EN: M1: Uses the GDC (1-Var Stats with the frequency list) and reads σx.
        "M1：使用 GDC（附頻數列表的 1-Var Stats）並讀取 σx。",
        // EN: A1: σ ≈ 4.70 cm (4.7004…).
        "A1：σ ≈ 4.70 cm (4.7004…)。",
        // EN: R1: The raw data are grouped, so the mid-interval values stand in for the actual lengths.
        "R1：原始數據已分組，所以以組中點代替實際長度。",
      ],
    },

    // ── t4-1-q032 · numeric · challenge · SL · SL 4.3 · 4 marks
    "t4-1-q032": {
      // EN: <p>A polar research station records the midday temperature, in °C, on <span class="chem">10</span> days.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Temperature (°C)</th><td class="num">-4.2</td><td class="num">-1.8</td><td class="num">0.5</td><td class="num">2.3</td><td class="num">-3.1</td><td class="num">1.7</td><td class="num">-0.6</td><td class="num">3.4</td><td class="num">-2.5</td><td class="num">0.9</td></tr></tbody></table></div><p>A visiting team from the USA converts every reading to degrees Fahrenheit using <span class="chem">F = 1.8C + 32</span>. Find the standard deviation of the <span class="chem">10</span> temperatures in °F.</p>
      stem: "<p>一個極地研究站記錄了 <span class=\"chem\">10</span> 天的正午溫度（°C）。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">溫度 (°C)</th><td class=\"num\">-4.2</td><td class=\"num\">-1.8</td><td class=\"num\">0.5</td><td class=\"num\">2.3</td><td class=\"num\">-3.1</td><td class=\"num\">1.7</td><td class=\"num\">-0.6</td><td class=\"num\">3.4</td><td class=\"num\">-2.5</td><td class=\"num\">0.9</td></tr></tbody></table></div><p>一隊來自美國的訪問團隊利用 <span class=\"chem\">F = 1.8C + 32</span> 把每個讀數換算為華氏度。求 (Find) 這 <span class=\"chem\">10</span> 個溫度以 °F 表示時的標準差。</p>",
      hints: [
        // EN: Decode: this is "effect of constant changes" (SL 4.3). Each value is multiplied by <span class="chem">1.8</span> and then has <span class="chem">32</span> added. Only one of these changes the spread.
        "解碼：這是「常數變換的影響」（SL 4.3）。每個數值先乘以 <span class=\"chem\">1.8</span>，再加上 <span class=\"chem\">32</span>。只有其中一項會改變離散程度。",
        // EN: Find <span class="chem">σ_C</span> of the Celsius data on the GDC.
        "用 GDC 求攝氏數據的 <span class=\"chem\">σ_C</span>。",
        // EN: Then <span class="chem">σ_F = 1.8 σ_C</span>: adding <span class="chem">32</span> does not change the standard deviation. (Or convert all ten values and run <span class="mono">1-Var Stats</span> again as a check.)
        "然後 <span class=\"chem\">σ_F = 1.8 σ_C</span>：加上 <span class=\"chem\">32</span> 不會改變標準差。（亦可把全部十個數值換算後再執行 <span class=\"mono\">1-Var Stats</span> 作驗算。）",
      ],
      // EN: <p><b>Decode:</b> a linear change <span class="chem">F = 1.8C + 32</span> multiplies the standard deviation by <span class="chem">|1.8|</span> and the shift <span class="chem">+32</span> has no effect on spread.<br>GDC: <span class="chem">σ_C = 2.3821…</span> °C <b>[M1 A1]</b>.<br><span class="chem">σ_F = 1.8 × 2.3821… = 4.2878… ≈ 4.29</span> °F <b>[M1 A1]</b>.</p>
      solution: "<p><b>解碼：</b>線性變換 <span class=\"chem\">F = 1.8C + 32</span> 使標準差乘以 <span class=\"chem\">|1.8|</span>，而平移 <span class=\"chem\">+32</span> 對離散程度沒有影響。<br>GDC：<span class=\"chem\">σ_C = 2.3821…</span> °C <b>[M1 A1]</b>。<br><span class=\"chem\">σ_F = 1.8 × 2.3821… = 4.2878… ≈ 4.29</span> °F <b>[M1 A1]</b>。</p>",
    },

    // ── t4-1-q033 · short · challenge · SL · SL 4.1, 4.2, 4.3 · 10 marks
    "t4-1-q033": {
      // EN: <p>A quality-control technician weighs <span class="chem">11</span> tablets from a batch labelled "500 mg". The masses, in mg, are:</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Mass (mg)</th><td class="num">498</td><td class="num">502</td><td class="num">505</td><td class="num">497</td><td class="num">501</td><td class="num">499</td><td class="num">503</td><td class="num">540</td><td class="num">500</td><td class="num">496</td><td class="num">504</td></tr></tbody></table></div><p>Quartiles are found by the GDC method: the median of each half of the ordered data, leaving out the overall median when the number of values is odd.<br>(a) Write down <span class="chem">Q_1</span> and <span class="chem">Q_3</span>. <strong>[2 marks]</strong><br>(b) Show that the data contain exactly one outlier. <strong>[3 marks]</strong><br>(c) Find the mean and standard deviation of the <span class="chem">11</span> masses as recorded. <strong>[2 marks]</strong><br>(d) The technician realises that the outlier was a typing error: the digits of the true mass <span class="chem">504</span> mg were typed in the wrong order. Find the corrected mean and standard deviation. <strong>[2 marks]</strong><br>(e) State which of the two statistics in (c) was affected more by the error, in relative terms. <strong>[1 mark]</strong></p>
      stem: "<p>一名品質控制技術員從一批標示為 \"500 mg\" 的藥片中抽取 <span class=\"chem\">11</span> 片並量度其質量。質量（mg）如下：</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">質量 (mg)</th><td class=\"num\">498</td><td class=\"num\">502</td><td class=\"num\">505</td><td class=\"num\">497</td><td class=\"num\">501</td><td class=\"num\">499</td><td class=\"num\">503</td><td class=\"num\">540</td><td class=\"num\">500</td><td class=\"num\">496</td><td class=\"num\">504</td></tr></tbody></table></div><p>四分位數以 GDC 方法求得：取已排序數據前後兩半各自的中位數，當數值個數為奇數時不計算整體中位數。<br>(a) 寫出 (Write down) <span class=\"chem\">Q_1</span> 及 <span class=\"chem\">Q_3</span>。<strong>[2 marks]</strong><br>(b) 證明 (Show that) 數據中恰有一個異常值。<strong>[3 marks]</strong><br>(c) 求 (Find) 按記錄所得的 <span class=\"chem\">11</span> 個質量的平均值及標準差。<strong>[2 marks]</strong><br>(d) 技術員發現該異常值是一個輸入錯誤：真實質量 <span class=\"chem\">504</span> mg 的數字次序被打錯了。求 (Find) 更正後的平均值及標準差。<strong>[2 marks]</strong><br>(e) 說明 (State) 以相對而言，(c) 中的兩個統計量哪一個受錯誤的影響較大。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: (b) says "exactly one", so you must show one value is beyond a fence AND that every other value is inside both fences. In (d), "digits in the wrong order" tells you which recorded value was really 504.
        "解碼：(b) 說「恰有一個」，所以你必須證明有一個數值超出界線，並且所有其他數值都在兩條界線之內。在 (d) 中，「數字次序錯了」告訴你哪一個記錄值其實是 504。",
        // EN: Run <span class="mono">1-Var Stats</span> for <span class="chem">Q_1</span> and <span class="chem">Q_3</span>. Then the fences are <span class="chem">Q_1 - 1.5 IQR</span> and <span class="chem">Q_3 + 1.5 IQR</span>.
        "執行 <span class=\"mono\">1-Var Stats</span> 求 <span class=\"chem\">Q_1</span> 及 <span class=\"chem\">Q_3</span>。然後界線為 <span class=\"chem\">Q_1 - 1.5 IQR</span> 及 <span class=\"chem\">Q_3 + 1.5 IQR</span>。",
        // EN: For (d), replace 540 by 504 in the list and run <span class="mono">1-Var Stats</span> again.
        "在 (d) 中，把列表中的 540 換成 504，再執行一次 <span class=\"mono\">1-Var Stats</span>。",
      ],
      // EN: <p><b>Decode:</b> "exactly one outlier" needs both fences and a check of the nearest values; "digits in the wrong order" means 540 should be 504.<br>(a) Ordered: 496, 497, 498, 499, 500, <b>501</b>, 502, 503, 504, 505, 540. <span class="chem">Q_1 = 498</span> and <span class="chem">Q_3 = 504</span> <b>[A1 A1]</b>.<br>(b) <span class="chem">IQR = 6</span>, <span class="chem">1.5 × IQR = 9</span>, fences <span class="chem">489</span> and <span class="chem">513</span> <b>[A1]</b>. <span class="chem">540 &gt; 513</span> is an outlier <b>[R1]</b>. All other values lie in <span class="chem">[496, 505]</span>, inside the fences, so 540 is the only one <b>[R1]</b>.<br>(c) GDC: <span class="chem">x̄ = 504.091… ≈ 504.1</span> mg <b>[A1]</b>, <span class="chem">σ = 11.681… ≈ 11.7</span> mg <b>[A1]</b>.<br>(d) With 504 in place of 540: <span class="chem">x̄ = 500.818… ≈ 500.8</span> mg <b>[A1]</b>, <span class="chem">σ = 2.918… ≈ 2.92</span> mg <b>[A1]</b>.<br>(e) The mean moved by about 3 mg (under 1%), but the standard deviation fell from about 11.7 to about 2.92 mg: the standard deviation was affected much more <b>[R1]</b>.</p>
      solution: "<p><b>解碼：</b>「恰有一個異常值」需要兩條界線，並檢查最接近界線的數值；「數字次序錯了」表示 540 應為 504。<br>(a) 排序後：496, 497, 498, 499, 500, <b>501</b>, 502, 503, 504, 505, 540。<span class=\"chem\">Q_1 = 498</span> 及 <span class=\"chem\">Q_3 = 504</span> <b>[A1 A1]</b>。<br>(b) <span class=\"chem\">IQR = 6</span>，<span class=\"chem\">1.5 × IQR = 9</span>，界線為 <span class=\"chem\">489</span> 及 <span class=\"chem\">513</span> <b>[A1]</b>。<span class=\"chem\">540 &gt; 513</span> 是異常值 <b>[R1]</b>。所有其他數值都在 <span class=\"chem\">[496, 505]</span> 內，即在界線之內，所以 540 是唯一的異常值 <b>[R1]</b>。<br>(c) GDC：<span class=\"chem\">x̄ = 504.091… ≈ 504.1</span> mg <b>[A1]</b>，<span class=\"chem\">σ = 11.681… ≈ 11.7</span> mg <b>[A1]</b>。<br>(d) 以 504 代替 540：<span class=\"chem\">x̄ = 500.818… ≈ 500.8</span> mg <b>[A1]</b>，<span class=\"chem\">σ = 2.918… ≈ 2.92</span> mg <b>[A1]</b>。<br>(e) 平均值只改變了約 3 mg（少於 1%），但標準差由約 11.7 降至約 2.92 mg：標準差受到的影響大得多 <b>[R1]</b>。</p>",
      // EN: <p>(a) <span class="chem">Q_1 = 498</span>, <span class="chem">Q_3 = 504</span><br>(b) <span class="chem">IQR = 6</span>; fences <span class="chem">489</span> and <span class="chem">513</span>. Only <span class="chem">540 &gt; 513</span>; all other values lie between the fences.<br>(c) <span class="chem">x̄ = 504.1</span> mg, <span class="chem">σ = 11.7</span> mg<br>(d) <span class="chem">x̄ = 500.8</span> mg, <span class="chem">σ = 2.92</span> mg<br>(e) The standard deviation (it fell to about a quarter of its value; the mean changed by less than 1%).</p>
      answer: "<p>(a) <span class=\"chem\">Q_1 = 498</span>，<span class=\"chem\">Q_3 = 504</span><br>(b) <span class=\"chem\">IQR = 6</span>；界線為 <span class=\"chem\">489</span> 及 <span class=\"chem\">513</span>。只有 <span class=\"chem\">540 &gt; 513</span>；所有其他數值都在兩條界線之間。<br>(c) <span class=\"chem\">x̄ = 504.1</span> mg，<span class=\"chem\">σ = 11.7</span> mg<br>(d) <span class=\"chem\">x̄ = 500.8</span> mg，<span class=\"chem\">σ = 2.92</span> mg<br>(e) 標準差（它降至原來約四分之一；平均值的改變少於 1%）。</p>",
      markscheme: [
        // EN: A1: Q₁ = 498 mg.
        "A1：Q₁ = 498 mg。",
        // EN: A1: Q₃ = 504 mg.
        "A1：Q₃ = 504 mg。",
        // EN: A1: IQR = 6, so the fences are 498 − 9 = 489 and 504 + 9 = 513.
        "A1：IQR = 6，所以界線為 498 − 9 = 489 及 504 + 9 = 513。",
        // EN: R1: 540 > 513, so 540 is an outlier.
        "R1：540 > 513，所以 540 是異常值。",
        // EN: R1: The smallest value 496 > 489 and the next largest 505 < 513, so there are no other outliers.
        "R1：最小值 496 > 489，而次大的數值 505 < 513，所以沒有其他異常值。",
        // EN: A1: x̄ = 504.1 mg.
        "A1：x̄ = 504.1 mg。",
        // EN: A1: σ = 11.7 mg.
        "A1：σ = 11.7 mg。",
        // EN: A1: Corrected x̄ = 500.8 mg.
        "A1：更正後 x̄ = 500.8 mg。",
        // EN: A1: Corrected σ = 2.92 mg.
        "A1：更正後 σ = 2.92 mg。",
        // EN: R1: The standard deviation was affected much more than the mean.
        "R1：標準差受到的影響比平均值大得多。",
      ],
    },

    // ── t4-1-q034 · numeric · challenge · SL · SL 4.4 · 3 marks
    "t4-1-q034": {
      // EN: <p>The owner of a beach kiosk notes the maximum temperature <span class="chem">T</span> °C and the number <span class="chem">N</span> of ice creams sold on <span class="chem">8</span> summer days.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Temperature <span class="chem">T</span> (°C)</th><td class="num">18</td><td class="num">21</td><td class="num">23</td><td class="num">25</td><td class="num">26</td><td class="num">28</td><td class="num">30</td><td class="num">32</td></tr><tr><th scope="row">Ice creams sold <span class="chem">N</span></th><td class="num">54</td><td class="num">66</td><td class="num">71</td><td class="num">80</td><td class="num">84</td><td class="num">93</td><td class="num">99</td><td class="num">110</td></tr></tbody></table></div><p>She wants to know how many extra ice creams she can expect to sell, according to a linear model fitted to these data, for each additional degree of temperature. Find this number.</p>
      stem: "<p>一個海灘小賣亭的東主記錄了 <span class=\"chem\">8</span> 個夏日的最高溫度 <span class=\"chem\">T</span> °C 及售出雪糕的數目 <span class=\"chem\">N</span>。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">溫度 <span class=\"chem\">T</span> (°C)</th><td class=\"num\">18</td><td class=\"num\">21</td><td class=\"num\">23</td><td class=\"num\">25</td><td class=\"num\">26</td><td class=\"num\">28</td><td class=\"num\">30</td><td class=\"num\">32</td></tr><tr><th scope=\"row\">售出雪糕數目 <span class=\"chem\">N</span></th><td class=\"num\">54</td><td class=\"num\">66</td><td class=\"num\">71</td><td class=\"num\">80</td><td class=\"num\">84</td><td class=\"num\">93</td><td class=\"num\">99</td><td class=\"num\">110</td></tr></tbody></table></div><p>她想知道，根據以這些數據擬合的線性模型，溫度每多一度，她預期可多賣多少個雪糕。求 (Find) 這個數。</p>",
      hints: [
        // EN: Decode: "how many extra for each additional degree" is the rate of change of <span class="chem">N</span> with <span class="chem">T</span>: the gradient <span class="chem">a</span> of the regression line of <span class="chem">N</span> on <span class="chem">T</span>. It is not a prediction for one particular day.
        "解碼：「每多一度可多賣多少個」是 <span class=\"chem\">N</span> 隨 <span class=\"chem\">T</span> 的變化率：即 <span class=\"chem\">N</span> 對 <span class=\"chem\">T</span> 的迴歸線的斜率 <span class=\"chem\">a</span>。這不是對某一天的預測。",
        // EN: Run <span class="mono">LinReg(ax+b)</span> with <span class="chem">T</span> as the Xlist and <span class="chem">N</span> as the Ylist.
        "以 <span class=\"chem\">T</span> 作 Xlist、<span class=\"chem\">N</span> 作 Ylist，執行 <span class=\"mono\">LinReg(ax+b)</span>。",
        // EN: Give the gradient <span class="chem">a</span> to 3 significant figures (it is an average rate, so it need not be a whole number).
        "把斜率 <span class=\"chem\">a</span> 準確至 3 位有效數字（它是平均變化率，所以不必是整數）。",
      ],
      // EN: <p><b>Decode:</b> extra sales per extra degree = gradient of the <span class="chem">N</span>-on-<span class="chem">T</span> regression line.<br>GDC: <span class="chem">N = 3.93498T − 17.725</span>, <span class="chem">r = 0.998</span> <b>[M1 A1]</b>.<br>So she can expect about <span class="chem">a ≈ 3.93</span> extra ice creams for each additional °C <b>[A1]</b>.</p>
      solution: "<p><b>解碼：</b>每多一度的額外銷量 = <span class=\"chem\">N</span> 對 <span class=\"chem\">T</span> 的迴歸線的斜率。<br>GDC：<span class=\"chem\">N = 3.93498T − 17.725</span>，<span class=\"chem\">r = 0.998</span> <b>[M1 A1]</b>。<br>所以溫度每多一度，她預期約可多賣 <span class=\"chem\">a ≈ 3.93</span> 個雪糕 <b>[A1]</b>。</p>",
      // EN: ice creams per °C
      unit: "個雪糕／°C",
    },

    // ── t4-1-q035 · short · challenge · SL · SL 4.1, 4.4 · 8 marks
    "t4-1-q035": {
      // EN: <p>A biology class grows <span class="chem">9</span> seedlings. For each one they record the mean daily hours of light <span class="chem">x</span> and the growth <span class="chem">y</span> cm after three weeks.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Light <span class="chem">x</span> (h)</th><td class="num">3</td><td class="num">4.5</td><td class="num">5</td><td class="num">6</td><td class="num">7.5</td><td class="num">8</td><td class="num">9</td><td class="num">10</td><td class="num">7</td></tr><tr><th scope="row">Growth <span class="chem">y</span> (cm)</th><td class="num">2.1</td><td class="num">3</td><td class="num">3.4</td><td class="num">4.1</td><td class="num">5</td><td class="num">5.3</td><td class="num">6</td><td class="num">6.6</td><td class="num">1.2</td></tr></tbody></table></div><p>(a) Find the correlation coefficient <span class="chem">r</span> for all <span class="chem">9</span> seedlings. <strong>[1 mark]</strong><br>(b) One point does not fit the pattern. Identify it, and find <span class="chem">r</span> for the other <span class="chem">8</span> seedlings. <strong>[2 marks]</strong><br>(c) The teacher later finds that this seedling had a fungal disease. Find the regression line of <span class="chem">y</span> on <span class="chem">x</span> for the <span class="chem">8</span> healthy seedlings, and use it to estimate the growth of a healthy seedling given <span class="chem">6.5</span> hours of light per day. <strong>[4 marks]</strong><br>(d) Justify the decision to leave the diseased seedling out of the model. <strong>[1 mark]</strong></p>
      stem: "<p>一班生物科學生培植了 <span class=\"chem\">9</span> 株幼苗。他們為每株幼苗記錄每日平均光照時數 <span class=\"chem\">x</span> 及三星期後的生長 <span class=\"chem\">y</span> cm。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">光照 <span class=\"chem\">x</span> (h)</th><td class=\"num\">3</td><td class=\"num\">4.5</td><td class=\"num\">5</td><td class=\"num\">6</td><td class=\"num\">7.5</td><td class=\"num\">8</td><td class=\"num\">9</td><td class=\"num\">10</td><td class=\"num\">7</td></tr><tr><th scope=\"row\">生長 <span class=\"chem\">y</span> (cm)</th><td class=\"num\">2.1</td><td class=\"num\">3</td><td class=\"num\">3.4</td><td class=\"num\">4.1</td><td class=\"num\">5</td><td class=\"num\">5.3</td><td class=\"num\">6</td><td class=\"num\">6.6</td><td class=\"num\">1.2</td></tr></tbody></table></div><p>(a) 求 (Find) 全部 <span class=\"chem\">9</span> 株幼苗的相關係數 <span class=\"chem\">r</span>。<strong>[1 mark]</strong><br>(b) 有一點不符合整體規律。指出 (Identify) 這一點，並求其餘 <span class=\"chem\">8</span> 株幼苗的 <span class=\"chem\">r</span>。<strong>[2 marks]</strong><br>(c) 老師後來發現這株幼苗染上了真菌病。求 (Find) <span class=\"chem\">8</span> 株健康幼苗的 <span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 的迴歸線，並利用它估計一株每日獲得 <span class=\"chem\">6.5</span> 小時光照的健康幼苗的生長。<strong>[4 marks]</strong><br>(d) 證明 (Justify) 把染病幼苗排除於模型之外的決定是合理的。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: this is about outliers in bivariate data (SL 4.1, 4.4). Removing a point is only justified for a reason in context, not just because it spoils <span class="chem">r</span>.
        "解碼：這是關於二元數據中的異常值（SL 4.1, 4.4）。只有在情境中有理由時才可以刪除一點，而不能僅僅因為它拉低了 <span class=\"chem\">r</span>。",
        // EN: Run <span class="mono">LinReg(ax+b)</span> on all 9 pairs, then delete the pair that sits far below the others and run it again.
        "先對全部 9 對數據執行 <span class=\"mono\">LinReg(ax+b)</span>，然後刪除遠低於其他點的那一對，再執行一次。",
        // EN: In (c) the estimate at <span class="chem">x = 6.5</span> is interpolation because <span class="chem">3.0 ≤ 6.5 ≤ 10.0</span>.
        "在 (c) 中，在 <span class=\"chem\">x = 6.5</span> 的估計屬於內插，因為 <span class=\"chem\">3.0 ≤ 6.5 ≤ 10.0</span>。",
      ],
      // EN: <p><b>Decode:</b> compare <span class="chem">r</span> with and without the odd point, then decide on context grounds whether it belongs in the model.<br>(a) All 9: <span class="chem">r = 0.7683… ≈ 0.768</span> <b>[A1]</b>.<br>(b) The point <span class="chem">(7.0, 1.2)</span> lies far below the trend <b>[A1]</b>. Without it, <span class="chem">r = 0.99969… ≈ 0.9997</span> <b>[A1]</b>, an almost perfect positive linear correlation.<br>(c) For the 8 healthy seedlings <b>[M1]</b>: <span class="chem">y = 0.64675x + 0.15279</span> ≈ <span class="chem">0.647x + 0.153</span> <b>[A1]</b>. Then <span class="chem">y(6.5) = 4.3567… ≈ 4.36</span> cm <b>[M1 A1]</b>.<br>(d) The value is genuine, but it was caused by disease rather than by the amount of light. The model is for healthy seedlings, so this point is not part of that population and should be left out <b>[R1]</b>.</p>
      solution: "<p><b>解碼：</b>比較包含及不包含該異常點時的 <span class=\"chem\">r</span>，然後根據情境決定它是否屬於模型。<br>(a) 全部 9 株：<span class=\"chem\">r = 0.7683… ≈ 0.768</span> <b>[A1]</b>。<br>(b) 點 <span class=\"chem\">(7.0, 1.2)</span> 遠低於趨勢 <b>[A1]</b>。不計這一點，<span class=\"chem\">r = 0.99969… ≈ 0.9997</span> <b>[A1]</b>，是近乎完全的正線性相關。<br>(c) 對 8 株健康幼苗 <b>[M1]</b>：<span class=\"chem\">y = 0.64675x + 0.15279</span> ≈ <span class=\"chem\">0.647x + 0.153</span> <b>[A1]</b>。於是 <span class=\"chem\">y(6.5) = 4.3567… ≈ 4.36</span> cm <b>[M1 A1]</b>。<br>(d) 這個數值是真實的，但它是由疾病而非光照量所造成的。模型是針對健康幼苗的，所以這一點不屬於該總體，應予排除 <b>[R1]</b>。</p>",
      // EN: <p>(a) <span class="chem">r = 0.768</span><br>(b) <span class="chem">(7.0, 1.2)</span>; without it <span class="chem">r = 0.9997</span> (<span class="chem">≈ 1.00</span>)<br>(c) <span class="chem">y = 0.647x + 0.153</span>; <span class="chem">y(6.5) ≈ 4.36</span> cm<br>(d) The seedling is not from the population being modelled (healthy seedlings): its low growth was caused by disease, not by light, so it would distort the model.</p>
      answer: "<p>(a) <span class=\"chem\">r = 0.768</span><br>(b) <span class=\"chem\">(7.0, 1.2)</span>；不計它，<span class=\"chem\">r = 0.9997</span>（<span class=\"chem\">≈ 1.00</span>）<br>(c) <span class=\"chem\">y = 0.647x + 0.153</span>；<span class=\"chem\">y(6.5) ≈ 4.36</span> cm<br>(d) 這株幼苗不屬於所建模的總體（健康幼苗）：它生長偏低是由疾病而非光照造成的，所以會扭曲模型。</p>",
      markscheme: [
        // EN: A1: r = 0.768 (all 9 seedlings).
        "A1：r = 0.768（全部 9 株幼苗）。",
        // EN: A1: Identifies the point (7.0, 1.2).
        "A1：指出點 (7.0, 1.2)。",
        // EN: A1: r = 0.9997 for the other 8 seedlings.
        "A1：其餘 8 株幼苗的 r = 0.9997。",
        // EN: M1: Uses LinReg(ax+b) on the 8 healthy seedlings only.
        "M1：只對 8 株健康幼苗使用 LinReg(ax+b)。",
        // EN: A1: y = 0.647x + 0.153.
        "A1：y = 0.647x + 0.153。",
        // EN: M1: Substitutes x = 6.5.
        "M1：代入 x = 6.5。",
        // EN: A1: Growth ≈ 4.36 cm.
        "A1：生長 ≈ 4.36 cm。",
        // EN: R1: The diseased seedling is a genuine but unrepresentative value caused by another factor, so it does not belong to the population (healthy seedlings) the model describes.
        "R1：染病幼苗是一個真實但不具代表性、由其他因素造成的數值，所以它不屬於模型所描述的總體（健康幼苗）。",
      ],
    },

    // ── t4-1-q036 · numeric · challenge · SL · SL 4.3 · 4 marks
    "t4-1-q036": {
      // EN: <p>Eight runners each recorded the distance, in km, that they ran on a Sunday. Seven of the distances are shown below; the eighth runner's record was smudged and is labelled <span class="chem">k</span>.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Distance (km)</th><td class="num">12.4</td><td class="num">15.1</td><td class="num">9.8</td><td class="num">13.6</td><td class="num">11.2</td><td class="num">14.7</td><td class="num">10.9</td><td class="num"><i>k</i></td></tr></tbody></table></div><p>The mean distance of the eight runners is <span class="chem">12.5</span> km. Find the standard deviation of the eight distances.</p>
      stem: "<p>八名跑手各自記錄了他們在某個星期日所跑的距離（km）。下表列出其中七個距離；第八名跑手的記錄被弄污了，記為 <span class=\"chem\">k</span>。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">距離 (km)</th><td class=\"num\">12.4</td><td class=\"num\">15.1</td><td class=\"num\">9.8</td><td class=\"num\">13.6</td><td class=\"num\">11.2</td><td class=\"num\">14.7</td><td class=\"num\">10.9</td><td class=\"num\"><i>k</i></td></tr></tbody></table></div><p>這八名跑手所跑距離的平均值是 <span class=\"chem\">12.5</span> km。求 (Find) 這八個距離的標準差。</p>",
      hints: [
        // EN: Decode: you cannot find <span class="chem">σ</span> until the list is complete. The mean gives you the missing value first.
        "解碼：在列表完整之前，你無法求 <span class=\"chem\">σ</span>。先利用平均值求出缺失的數值。",
        // EN: <span class="chem">Σ x = 8 × 12.5 = 100</span>, so <span class="chem">k = 100 -</span> (sum of the seven known distances).
        "<span class=\"chem\">Σ x = 8 × 12.5 = 100</span>，所以 <span class=\"chem\">k = 100 -</span>（七個已知距離之和）。",
        // EN: Put all eight values in a list and read <span class="mono">σx</span> from <span class="mono">1-Var Stats</span>.
        "把全部八個數值輸入一個列表，然後從 <span class=\"mono\">1-Var Stats</span> 讀取 <span class=\"mono\">σx</span>。",
      ],
      // EN: <p><b>Decode:</b> use the mean to recover <span class="chem">k</span>, then find <span class="chem">σ</span> of all eight values.<br>Sum of the seven known values <span class="chem">= 87.7</span>, so <span class="chem">k = 100 - 87.7 = 12.3</span> km <b>[M1 A1]</b>.<br>GDC with all eight values: <span class="chem">x̄ = 12.5</span> (check) and <span class="chem">σ = 1.7464… ≈ 1.75</span> km <b>[M1 A1]</b>.</p>
      solution: "<p><b>解碼：</b>利用平均值求回 <span class=\"chem\">k</span>，然後求全部八個數值的 <span class=\"chem\">σ</span>。<br>七個已知數值之和 <span class=\"chem\">= 87.7</span>，所以 <span class=\"chem\">k = 100 - 87.7 = 12.3</span> km <b>[M1 A1]</b>。<br>以全部八個數值使用 GDC：<span class=\"chem\">x̄ = 12.5</span>（驗算）及 <span class=\"chem\">σ = 1.7464… ≈ 1.75</span> km <b>[M1 A1]</b>。</p>",
    },

    // ── t4-1-q037 · short · challenge · SL · SL 4.4, 4.10 · 9 marks
    "t4-1-q037": {
      // EN: <p>A coach records the 100 m sprint time <span class="chem">x</span> seconds and the long-jump distance <span class="chem">y</span> metres of <span class="chem">8</span> athletes in a squad.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">100 m time <span class="chem">x</span> (s)</th><td class="num">11.2</td><td class="num">11.6</td><td class="num">11.9</td><td class="num">12.3</td><td class="num">12.6</td><td class="num">13</td><td class="num">13.4</td><td class="num">13.9</td></tr><tr><th scope="row">Long jump <span class="chem">y</span> (m)</th><td class="num">6.85</td><td class="num">6.60</td><td class="num">6.52</td><td class="num">6.21</td><td class="num">6.05</td><td class="num">5.88</td><td class="num">5.61</td><td class="num">5.42</td></tr></tbody></table></div><p>(a) Write down the value of <span class="chem">r</span>. <strong>[1 mark]</strong><br>(b) A new athlete runs 100 m in <span class="chem">12.0</span> s. Estimate how far she can jump. <strong>[3 marks]</strong><br>(c) A second new athlete jumps <span class="chem">6.00</span> m but has not yet been timed over 100 m. Estimate his 100 m time, justifying your choice of regression line. <strong>[4 marks]</strong><br>(d) The coach wants to use the same model for a younger athlete who runs 100 m in <span class="chem">15.4</span> s. Comment on the reliability of this prediction. <strong>[1 mark]</strong></p>
      stem: "<p>一名教練記錄了隊中 <span class=\"chem\">8</span> 名運動員的 100 m 短跑時間 <span class=\"chem\">x</span> 秒及跳遠距離 <span class=\"chem\">y</span> 米。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">100 m 時間 <span class=\"chem\">x</span> (s)</th><td class=\"num\">11.2</td><td class=\"num\">11.6</td><td class=\"num\">11.9</td><td class=\"num\">12.3</td><td class=\"num\">12.6</td><td class=\"num\">13</td><td class=\"num\">13.4</td><td class=\"num\">13.9</td></tr><tr><th scope=\"row\">跳遠 <span class=\"chem\">y</span> (m)</th><td class=\"num\">6.85</td><td class=\"num\">6.60</td><td class=\"num\">6.52</td><td class=\"num\">6.21</td><td class=\"num\">6.05</td><td class=\"num\">5.88</td><td class=\"num\">5.61</td><td class=\"num\">5.42</td></tr></tbody></table></div><p>(a) 寫出 (Write down) <span class=\"chem\">r</span> 的值。<strong>[1 mark]</strong><br>(b) 一名新運動員跑 100 m 用了 <span class=\"chem\">12.0</span> s。估計 (Estimate) 她能跳多遠。<strong>[3 marks]</strong><br>(c) 另一名新運動員跳了 <span class=\"chem\">6.00</span> m，但尚未量度他的 100 m 時間。估計 (Estimate) 他的 100 m 時間，並證明你所選用的迴歸線是合理的。<strong>[4 marks]</strong><br>(d) 教練想把同一個模型用於一名跑 100 m 需時 <span class=\"chem\">15.4</span> s 的年紀較小的運動員。評論 (Comment) 這個預測的可靠性。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: (b) gives <span class="chem">x</span> and wants <span class="chem">y</span>; (c) gives <span class="chem">y</span> and wants <span class="chem">x</span>. They need two different regression lines.
        "解碼：(b) 給出 <span class=\"chem\">x</span> 而要求 <span class=\"chem\">y</span>；(c) 給出 <span class=\"chem\">y</span> 而要求 <span class=\"chem\">x</span>。兩者需要兩條不同的迴歸線。",
        // EN: For (c), run <span class="mono">LinReg(ax+b)</span> with the jump distances as the Xlist and the times as the Ylist.
        "在 (c) 中，以跳遠距離作 Xlist、時間作 Ylist，執行 <span class=\"mono\">LinReg(ax+b)</span>。",
        // EN: In (d), compare 15.4 s with the fastest and slowest times in the table.
        "在 (d) 中，把 15.4 s 與表中最快及最慢的時間比較。",
      ],
      // EN: <p><b>Decode:</b> two directions of prediction, so two lines: <span class="chem">y</span> on <span class="chem">x</span> for (b), <span class="chem">x</span> on <span class="chem">y</span> for (c).<br>(a) GDC: <span class="chem">r = -0.99718… ≈ -0.997</span> <b>[A1]</b>.<br>(b) <span class="chem">y</span> on <span class="chem">x</span> <b>[M1]</b>: <span class="chem">y = -0.54021x + 12.8883</span> <b>[A1]</b>. <span class="chem">y(12.0) = 6.4059… ≈ 6.41</span> m <b>[A1]</b>.<br>(c) The jump is given and the time is wanted, so use <span class="chem">x</span> on <span class="chem">y</span> <b>[R1]</b>. With the jumps as Xlist <b>[M1]</b>: <span class="chem">x = -1.84071y + 23.7941</span> <b>[A1]</b>. <span class="chem">x(6.00) = 12.7498… ≈ 12.7</span> s <b>[A1]</b>.<br>(d) 15.4 s lies outside <span class="chem">11.2 ≤ x ≤ 13.9</span>, so this is extrapolation (and the younger athlete is outside the squad the data describe): the prediction is unreliable <b>[R1]</b>.</p>
      solution: "<p><b>解碼：</b>預測有兩個方向，所以需要兩條直線：(b) 用 <span class=\"chem\">y</span> 對 <span class=\"chem\">x</span>，(c) 用 <span class=\"chem\">x</span> 對 <span class=\"chem\">y</span>。<br>(a) GDC：<span class=\"chem\">r = -0.99718… ≈ -0.997</span> <b>[A1]</b>。<br>(b) <span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> <b>[M1]</b>：<span class=\"chem\">y = -0.54021x + 12.8883</span> <b>[A1]</b>。<span class=\"chem\">y(12.0) = 6.4059… ≈ 6.41</span> m <b>[A1]</b>。<br>(c) 已知跳遠距離而要求時間，所以使用 <span class=\"chem\">x</span> 對 <span class=\"chem\">y</span> <b>[R1]</b>。以跳遠距離作 Xlist <b>[M1]</b>：<span class=\"chem\">x = -1.84071y + 23.7941</span> <b>[A1]</b>。<span class=\"chem\">x(6.00) = 12.7498… ≈ 12.7</span> s <b>[A1]</b>。<br>(d) 15.4 s 在 <span class=\"chem\">11.2 ≤ x ≤ 13.9</span> 之外，所以這是外推（而且年紀較小的運動員不屬於數據所描述的隊伍）：這個預測並不可靠 <b>[R1]</b>。</p>",
      // EN: <p>(a) <span class="chem">r = -0.997</span><br>(b) <span class="chem">y = -0.540x + 12.89</span> gives <span class="chem">y ≈ 6.41</span> m.<br>(c) Use <span class="chem">x</span> on <span class="chem">y</span> (the jump <span class="chem">y</span> is given): <span class="chem">x = -1.84y + 23.79</span> gives <span class="chem">x ≈ 12.7</span> s.<br>(d) Unreliable: 15.4 s is outside the data range 11.2–13.9 s (extrapolation), and the athlete is from a different (younger) group.</p>
      answer: "<p>(a) <span class=\"chem\">r = -0.997</span><br>(b) <span class=\"chem\">y = -0.540x + 12.89</span> 給出 <span class=\"chem\">y ≈ 6.41</span> m。<br>(c) 使用 <span class=\"chem\">x</span> 對 <span class=\"chem\">y</span>（已知跳遠距離 <span class=\"chem\">y</span>）：<span class=\"chem\">x = -1.84y + 23.79</span> 給出 <span class=\"chem\">x ≈ 12.7</span> s。<br>(d) 不可靠：15.4 s 在數據範圍 11.2–13.9 s 之外（外推），而且該運動員來自另一個（年紀較小的）組別。</p>",
      markscheme: [
        // EN: A1: r = -0.997.
        "A1：r = -0.997。",
        // EN: M1: Uses the regression line of y on x (x is given).
        "M1：使用 y 對 x 的迴歸線（已知 x）。",
        // EN: A1: y = -0.540x + 12.89.
        "A1：y = -0.540x + 12.89。",
        // EN: A1: y ≈ 6.41 m.
        "A1：y ≈ 6.41 m。",
        // EN: R1: Chooses the x-on-y line because y is given and x is to be estimated.
        "R1：因為已知 y 而要估計 x，所以選用 x 對 y 的迴歸線。",
        // EN: M1: Finds the x-on-y line on the GDC (y-values as Xlist).
        "M1：在 GDC 上求 x 對 y 的迴歸線（以 y 值作 Xlist）。",
        // EN: A1: x = -1.84y + 23.79.
        "A1：x = -1.84y + 23.79。",
        // EN: A1: x ≈ 12.7 s.
        "A1：x ≈ 12.7 s。",
        // EN: R1: 15.4 s is outside the observed times, so the prediction is an extrapolation (and a younger athlete may not follow the same pattern): unreliable.
        "R1：15.4 s 在觀測時間之外，所以這個預測屬於外推（而且年紀較小的運動員未必遵循相同的規律）：並不可靠。",
      ],
    },

    // ── t4-1-q038 · short · exam · SL · SL 4.2, 4.3 · 7 marks
    "t4-1-q038": {
      // EN: <p>The cumulative frequency table shows the time <span class="chem">t</span> minutes that <span class="chem">80</span> students spent on homework one evening.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Time <span class="chem">t</span> (min)</th><td class="num"><i>t</i> ≤ 10</td><td class="num"><i>t</i> ≤ 20</td><td class="num"><i>t</i> ≤ 30</td><td class="num"><i>t</i> ≤ 40</td><td class="num"><i>t</i> ≤ 50</td><td class="num"><i>t</i> ≤ 60</td></tr><tr><th scope="row">Cumulative frequency</th><td class="num">6</td><td class="num">19</td><td class="num">41</td><td class="num">62</td><td class="num">74</td><td class="num">80</td></tr></tbody></table></div><p>(a) Write down the number of students who spent more than <span class="chem">40</span> minutes on homework. <strong>[1 mark]</strong><br>(b) Write down the class that contains the median. <strong>[1 mark]</strong><br>(c) Copy and complete a frequency table for the classes <span class="chem">0 &lt; t ≤ 10</span>, <span class="chem">10 &lt; t ≤ 20</span>, …, <span class="chem">50 &lt; t ≤ 60</span>. <strong>[2 marks]</strong><br>(d) Hence find an estimate of the mean and of the standard deviation of the times. <strong>[3 marks]</strong></p>
      stem: "<p>下面的累積頻數表顯示 <span class=\"chem\">80</span> 名學生某晚做家課所用的時間 <span class=\"chem\">t</span> 分鐘。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">時間 <span class=\"chem\">t</span> (min)</th><td class=\"num\"><i>t</i> ≤ 10</td><td class=\"num\"><i>t</i> ≤ 20</td><td class=\"num\"><i>t</i> ≤ 30</td><td class=\"num\"><i>t</i> ≤ 40</td><td class=\"num\"><i>t</i> ≤ 50</td><td class=\"num\"><i>t</i> ≤ 60</td></tr><tr><th scope=\"row\">累積頻數</th><td class=\"num\">6</td><td class=\"num\">19</td><td class=\"num\">41</td><td class=\"num\">62</td><td class=\"num\">74</td><td class=\"num\">80</td></tr></tbody></table></div><p>(a) 寫出 (Write down) 做家課多於 <span class=\"chem\">40</span> 分鐘的學生人數。<strong>[1 mark]</strong><br>(b) 寫出 (Write down) 包含中位數的組別。<strong>[1 mark]</strong><br>(c) 抄寫並完成 (Copy and complete) 組別 <span class=\"chem\">0 &lt; t ≤ 10</span>、<span class=\"chem\">10 &lt; t ≤ 20</span>、…、<span class=\"chem\">50 &lt; t ≤ 60</span> 的頻數表。<strong>[2 marks]</strong><br>(d) 由此 (Hence) 求時間的平均值及標準差的估計值。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: a cumulative frequency is a running total. The number in a class is the difference of consecutive running totals.
        "解碼：累積頻數是累計總數。某一組的人數是相鄰兩個累計總數之差。",
        // EN: For the median, find the class in which the cumulative frequency passes <span class="chem">80/2 = 40</span>.
        "求中位數時，找出累積頻數超過 <span class=\"chem\">80/2 = 40</span> 的那一組。",
        // EN: Mid-interval values: <span class="chem">5, 15, 25, 35, 45, 55</span>. Use them with the frequencies in <span class="mono">1-Var Stats</span>.
        "組中點：<span class=\"chem\">5, 15, 25, 35, 45, 55</span>。在 <span class=\"mono\">1-Var Stats</span> 中把它們與頻數一起使用。",
      ],
      // EN: <p>(a) <span class="chem">80 - 62 = 18</span> students <b>[A1]</b>.<br>(b) The cumulative frequency passes 40 between <span class="chem">t = 20</span> (19) and <span class="chem">t = 30</span> (41), so the median is in <span class="chem">20 &lt; t ≤ 30</span> <b>[A1]</b>.<br>(c) Differences of the cumulative frequencies <b>[M1]</b>: <span class="chem">6, 13, 22, 21, 12, 6</span> <b>[A1]</b> (total 80).<br>(d) Mid-interval values <span class="chem">5, 15, 25, 35, 45, 55</span> <b>[M1]</b>. GDC: <span class="chem">x̄ ≈ 29.75</span> min <b>[A1]</b> and <span class="chem">σ ≈ 13.3206… ≈ 13.3</span> min <b>[A1]</b>.</p>
      solution: "<p>(a) <span class=\"chem\">80 - 62 = 18</span> 名學生 <b>[A1]</b>。<br>(b) 累積頻數在 <span class=\"chem\">t = 20</span>（19）與 <span class=\"chem\">t = 30</span>（41）之間超過 40，所以中位數在 <span class=\"chem\">20 &lt; t ≤ 30</span> 之內 <b>[A1]</b>。<br>(c) 累積頻數之差 <b>[M1]</b>：<span class=\"chem\">6, 13, 22, 21, 12, 6</span> <b>[A1]</b>（總數 80）。<br>(d) 組中點 <span class=\"chem\">5, 15, 25, 35, 45, 55</span> <b>[M1]</b>。GDC：<span class=\"chem\">x̄ ≈ 29.75</span> 分鐘 <b>[A1]</b> 及 <span class=\"chem\">σ ≈ 13.3206… ≈ 13.3</span> 分鐘 <b>[A1]</b>。</p>",
      // EN: <p>(a) <span class="chem">80 - 62 = 18</span><br>(b) <span class="chem">20 &lt; t ≤ 30</span><br>(c) Frequencies <span class="chem">6, 13, 22, 21, 12, 6</span><br>(d) <span class="chem">x̄ ≈ 29.75</span> min, <span class="chem">σ ≈ 13.3</span> min</p>
      answer: "<p>(a) <span class=\"chem\">80 - 62 = 18</span><br>(b) <span class=\"chem\">20 &lt; t ≤ 30</span><br>(c) 頻數 <span class=\"chem\">6, 13, 22, 21, 12, 6</span><br>(d) <span class=\"chem\">x̄ ≈ 29.75</span> 分鐘，<span class=\"chem\">σ ≈ 13.3</span> 分鐘</p>",
      markscheme: [
        // EN: A1: 80 − 62 = 18 students.
        "A1：80 − 62 = 18 名學生。",
        // EN: A1: Median class 20 < t ≤ 30 (the 40th–41st students lie between cumulative frequencies 19 and 41).
        "A1：中位數組 20 < t ≤ 30（第 40 至第 41 名學生位於累積頻數 19 與 41 之間）。",
        // EN: M1: Subtracts consecutive cumulative frequencies.
        "M1：把相鄰的累積頻數相減。",
        // EN: A1: Frequencies 6, 13, 22, 21, 12, 6.
        "A1：頻數 6, 13, 22, 21, 12, 6。",
        // EN: M1: Uses mid-interval values 5, 15, 25, 35, 45, 55 with these frequencies.
        "M1：使用組中點 5, 15, 25, 35, 45, 55 及這些頻數。",
        // EN: A1: Mean ≈ 29.75 min.
        "A1：平均值 ≈ 29.75 分鐘。",
        // EN: A1: σ ≈ 13.3 min.
        "A1：σ ≈ 13.3 分鐘。",
      ],
    },

    // ── t4-1-q039 · numeric · challenge · SL · SL 4.3 · 6 marks
    "t4-1-q039": {
      // EN: <p>A teacher has the test scores of the <span class="chem">8</span> students in Group P:</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Group P score</th><td class="num">62</td><td class="num">71</td><td class="num">58</td><td class="num">80</td><td class="num">67</td><td class="num">74</td><td class="num">69</td><td class="num">75</td></tr></tbody></table></div><p>For Group Q she only has a summary: <span class="chem">12</span> students, mean score <span class="chem">70</span> and standard deviation <span class="chem">σ = 6</span>. Find the standard deviation of the scores of all <span class="chem">20</span> students together.</p>
      stem: "<p>一名教師有 P 組 <span class=\"chem\">8</span> 名學生的測驗分數：</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">P 組分數</th><td class=\"num\">62</td><td class=\"num\">71</td><td class=\"num\">58</td><td class=\"num\">80</td><td class=\"num\">67</td><td class=\"num\">74</td><td class=\"num\">69</td><td class=\"num\">75</td></tr></tbody></table></div><p>至於 Q 組，她只有一個概括：<span class=\"chem\">12</span> 名學生，平均分 <span class=\"chem\">70</span>，標準差 <span class=\"chem\">σ = 6</span>。求 (Find) 全部 <span class=\"chem\">20</span> 名學生合併後的分數的標準差。</p>",
      hints: [
        // EN: Decode: you cannot average two standard deviations. Rebuild the totals <span class="chem">Σ x</span> and <span class="chem">Σ x^2</span> for each group, add them, and use <span class="chem">σ^2 = (Σ x^2)/n - x̄^2</span> (in the formula booklet) for the combined group.
        "解碼：你不能把兩個標準差取平均。為每組重建總和 <span class=\"chem\">Σ x</span> 及 <span class=\"chem\">Σ x^2</span>，把它們相加，然後對合併後的組別使用 <span class=\"chem\">σ^2 = (Σ x^2)/n - x̄^2</span>（見公式小冊子）。",
        // EN: Group P from the GDC: <span class="chem">Σ x</span> and <span class="chem">Σ x^2</span> are on the <span class="mono">1-Var Stats</span> screen.
        "P 組由 GDC 求得：<span class=\"chem\">Σ x</span> 及 <span class=\"chem\">Σ x^2</span> 顯示在 <span class=\"mono\">1-Var Stats</span> 的畫面上。",
        // EN: Group Q: <span class="chem">Σ x = 12 × 70</span> and, from <span class="chem">σ^2 = (Σ x^2)/12 - 70^2</span>, <span class="chem">Σ x^2 = 12(6^2 + 70^2)</span>.
        "Q 組：<span class=\"chem\">Σ x = 12 × 70</span>，而由 <span class=\"chem\">σ^2 = (Σ x^2)/12 - 70^2</span> 得 <span class=\"chem\">Σ x^2 = 12(6^2 + 70^2)</span>。",
      ],
      // EN: <p><b>Decode:</b> combine the raw totals, not the standard deviations.<br>Group P (GDC): <span class="chem">Σ x = 556</span>, <span class="chem">Σ x^2 = 39000</span> <b>[A1]</b>.<br>Group Q: <span class="chem">Σ x = 12 × 70 = 840</span> and <span class="chem">Σ x^2 = 12(36 + 4900) = 59 232</span> <b>[M1 A1]</b>.<br>Combined: <span class="chem">Σ x = 1396</span>, <span class="chem">Σ x^2 = 98232</span>, <span class="chem">x̄ = 1396/20 = 69.8</span> <b>[A1]</b>.<br><span class="chem">σ^2 = 98232/20 - 69.8^2 = 39.56</span> <b>[M1]</b>, so <span class="chem">σ = 6.2897… ≈ 6.29</span> <b>[A1]</b>.</p>
      solution: "<p><b>解碼：</b>合併原始總和，而不是合併標準差。<br>P 組（GDC）：<span class=\"chem\">Σ x = 556</span>，<span class=\"chem\">Σ x^2 = 39000</span> <b>[A1]</b>。<br>Q 組：<span class=\"chem\">Σ x = 12 × 70 = 840</span> 及 <span class=\"chem\">Σ x^2 = 12(36 + 4900) = 59 232</span> <b>[M1 A1]</b>。<br>合併：<span class=\"chem\">Σ x = 1396</span>，<span class=\"chem\">Σ x^2 = 98232</span>，<span class=\"chem\">x̄ = 1396/20 = 69.8</span> <b>[A1]</b>。<br><span class=\"chem\">σ^2 = 98232/20 - 69.8^2 = 39.56</span> <b>[M1]</b>，所以 <span class=\"chem\">σ = 6.2897… ≈ 6.29</span> <b>[A1]</b>。</p>",
    },

    // ── t4-1-q040 · numeric · exam · SL · SL 4.4 · 2 marks
    "t4-1-q040": {
      // EN: <p>A dealer records the age <span class="chem">x</span> years and the resale value <span class="chem">y</span> (in thousands of dollars) of <span class="chem">8</span> cars of the same model.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Age <span class="chem">x</span> (years)</th><td class="num">1</td><td class="num">2</td><td class="num">3</td><td class="num">4</td><td class="num">5</td><td class="num">6</td><td class="num">7</td><td class="num">8</td></tr><tr><th scope="row">Value <span class="chem">y</span> (thousand $)</th><td class="num">27.5</td><td class="num">24.8</td><td class="num">22.1</td><td class="num">20.6</td><td class="num">18.0</td><td class="num">16.2</td><td class="num">14.9</td><td class="num">12.8</td></tr></tbody></table></div><p>The regression line of <span class="chem">y</span> on <span class="chem">x</span> is <span class="chem">y = ax + b</span>. Write down the value of <span class="chem">b</span>.</p>
      stem: "<p>一名車商記錄了 <span class=\"chem\">8</span> 輛同型號汽車的車齡 <span class=\"chem\">x</span> 年及轉售價值 <span class=\"chem\">y</span>（以千元計）。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">車齡 <span class=\"chem\">x</span>（年）</th><td class=\"num\">1</td><td class=\"num\">2</td><td class=\"num\">3</td><td class=\"num\">4</td><td class=\"num\">5</td><td class=\"num\">6</td><td class=\"num\">7</td><td class=\"num\">8</td></tr><tr><th scope=\"row\">價值 <span class=\"chem\">y</span> (千 $)</th><td class=\"num\">27.5</td><td class=\"num\">24.8</td><td class=\"num\">22.1</td><td class=\"num\">20.6</td><td class=\"num\">18.0</td><td class=\"num\">16.2</td><td class=\"num\">14.9</td><td class=\"num\">12.8</td></tr></tbody></table></div><p><span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 的迴歸線為 <span class=\"chem\">y = ax + b</span>。寫出 (Write down) <span class=\"chem\">b</span> 的值。</p>",
      hints: [
        // EN: Run <span class="mono">LinReg(ax+b)</span> with the ages as the Xlist.
        "以車齡作 Xlist，執行 <span class=\"mono\">LinReg(ax+b)</span>。",
        // EN: Interpretation: <span class="chem">b</span> is the model's value (in thousand $) of a car aged <span class="chem">x = 0</span>, i.e. a new car. Since 0 is just outside the ages 1–8, treat it with care.
        "詮釋：<span class=\"chem\">b</span> 是模型給出的車齡 <span class=\"chem\">x = 0</span>（即新車）的價值（以千 $ 計）。由於 0 剛好在車齡 1–8 之外，要小心處理。",
      ],
      // EN: <p>GDC: <span class="chem">a = -2.05595…</span>, <span class="chem">b = 28.8643… ≈ 28.9</span> <b>[A2]</b>.<br>In context, <span class="chem">b</span> is the estimated value of a new car, about $28,900, and <span class="chem">a</span> means the value falls by about $2,060 per year. (<span class="chem">x = 0</span> lies just outside the data, so <span class="chem">b</span> is a slight extrapolation.)</p>
      solution: "<p>GDC：<span class=\"chem\">a = -2.05595…</span>，<span class=\"chem\">b = 28.8643… ≈ 28.9</span> <b>[A2]</b>。<br>在情境中，<span class=\"chem\">b</span> 是一輛新車的估計價值，約 $28,900，而 <span class=\"chem\">a</span> 表示價值每年約下降 $2,060。（<span class=\"chem\">x = 0</span> 剛好在數據之外，所以 <span class=\"chem\">b</span> 屬於輕微的外推。）</p>",
    },

    // ── t4-1-q041 · numeric · challenge · SL · SL 4.4 · 4 marks
    "t4-1-q041": {
      // EN: <p>A museum lost its visitor records for 2020. The numbers of visitors (in thousands) for the other years are shown.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Year</th><td class="num">2016</td><td class="num">2017</td><td class="num">2018</td><td class="num">2019</td><td class="num">2021</td><td class="num">2022</td><td class="num">2023</td></tr><tr><th scope="row">Visitors (thousands)</th><td class="num">48.2</td><td class="num">51.0</td><td class="num">53.9</td><td class="num">55.8</td><td class="num">61.4</td><td class="num">63.1</td><td class="num">66.5</td></tr></tbody></table></div><p>Let <span class="chem">x</span> be the number of years after 2015 and <span class="chem">V</span> the number of visitors in thousands. Use the regression line of <span class="chem">V</span> on <span class="chem">x</span> to estimate the number of visitors, in thousands, the museum would have had in 2020 if the trend had continued.</p>
      stem: "<p>一間博物館遺失了 2020 年的參觀者記錄。其他年份的參觀人數（以千人計）如下所示。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">年份</th><td class=\"num\">2016</td><td class=\"num\">2017</td><td class=\"num\">2018</td><td class=\"num\">2019</td><td class=\"num\">2021</td><td class=\"num\">2022</td><td class=\"num\">2023</td></tr><tr><th scope=\"row\">參觀人數（千人）</th><td class=\"num\">48.2</td><td class=\"num\">51.0</td><td class=\"num\">53.9</td><td class=\"num\">55.8</td><td class=\"num\">61.4</td><td class=\"num\">63.1</td><td class=\"num\">66.5</td></tr></tbody></table></div><p>設 <span class=\"chem\">x</span> 為 2015 年之後的年數，<span class=\"chem\">V</span> 為以千人計的參觀人數。利用 <span class=\"chem\">V</span> 對 <span class=\"chem\">x</span> 的迴歸線，估計 (estimate) 若趨勢持續，該博物館在 2020 年應有的參觀人數（以千人計）。</p>",
      hints: [
        // EN: Decode: first change the years into <span class="chem">x</span>-values (2016 → 1, …, 2023 → 8). The missing year 2020 is <span class="chem">x = 5</span>, which lies inside the data, so this is interpolation.
        "解碼：先把年份改為 <span class=\"chem\">x</span> 值（2016 → 1, …, 2023 → 8）。缺失的 2020 年是 <span class=\"chem\">x = 5</span>，位於數據之內，所以這是內插。",
        // EN: Run <span class="mono">LinReg(ax+b)</span> on the <span class="chem">x</span>-values (1, 2, 3, 4, 6, 7, 8) and the visitor numbers.
        "以 <span class=\"chem\">x</span> 值（1, 2, 3, 4, 6, 7, 8）及參觀人數執行 <span class=\"mono\">LinReg(ax+b)</span>。",
        // EN: Substitute <span class="chem">x = 5</span> (not 2020) into the unrounded line.
        "把 <span class=\"chem\">x = 5</span>（不是 2020）代入未經捨入的直線。",
      ],
      // EN: <p><b>Decode:</b> recode the years as <span class="chem">x = 1, 2, 3, 4, 6, 7, 8</span>; 2020 is <span class="chem">x = 5</span> <b>[M1]</b>.<br>GDC: <span class="chem">V = 2.54623x + 45.8524</span> (<span class="chem">r = 0.999</span>) <b>[A1 A1]</b>.<br><span class="chem">V(5) = 58.5836… ≈ 58.6</span> thousand visitors <b>[A1]</b>.</p>
      solution: "<p><b>解碼：</b>把年份重新編碼為 <span class=\"chem\">x = 1, 2, 3, 4, 6, 7, 8</span>；2020 年是 <span class=\"chem\">x = 5</span> <b>[M1]</b>。<br>GDC：<span class=\"chem\">V = 2.54623x + 45.8524</span>（<span class=\"chem\">r = 0.999</span>）<b>[A1 A1]</b>。<br><span class=\"chem\">V(5) = 58.5836… ≈ 58.6</span> 千名參觀者 <b>[A1]</b>。</p>",
      // EN: thousand
      unit: "千人",
    },

    // ── t4-1-q042 · short · challenge · SL · SL 4.2 · 9 marks
    "t4-1-q042": {
      // EN: <p>A consumer group tests <span class="chem">11</span> batteries of each of two brands and records how long each lasts, in hours.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Brand P (h)</th><td class="num">52</td><td class="num">47</td><td class="num">72</td><td class="num">50</td><td class="num">55</td><td class="num">41</td><td class="num">48</td><td class="num">57</td><td class="num">45</td><td class="num">54</td><td class="num">51</td></tr><tr><th scope="row">Brand Q (h)</th><td class="num">58</td><td class="num">61</td><td class="num">44</td><td class="num">55</td><td class="num">66</td><td class="num">52</td><td class="num">63</td><td class="num">49</td><td class="num">60</td><td class="num">64</td><td class="num">56</td></tr></tbody></table></div><p>Quartiles are found by the GDC method: the median of each half of the ordered data, leaving out the overall median when the number of values is odd.<br>(a) Find the five-number summary (minimum, <span class="chem">Q_1</span>, median, <span class="chem">Q_3</span>, maximum) for each brand. <strong>[4 marks]</strong><br>(b) Determine whether either brand has an outlier. <strong>[2 marks]</strong><br>(c) The box plots of the two brands are drawn on the same scale. Use them to compare the two brands, and state which brand you would recommend to a buyer who wants batteries that last a predictable time. <strong>[3 marks]</strong></p>
      stem: "<p>一個消費者組織測試了兩個品牌各 <span class=\"chem\">11</span> 枚電池，並記錄每枚電池可用多少小時。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">品牌 P (h)</th><td class=\"num\">52</td><td class=\"num\">47</td><td class=\"num\">72</td><td class=\"num\">50</td><td class=\"num\">55</td><td class=\"num\">41</td><td class=\"num\">48</td><td class=\"num\">57</td><td class=\"num\">45</td><td class=\"num\">54</td><td class=\"num\">51</td></tr><tr><th scope=\"row\">品牌 Q (h)</th><td class=\"num\">58</td><td class=\"num\">61</td><td class=\"num\">44</td><td class=\"num\">55</td><td class=\"num\">66</td><td class=\"num\">52</td><td class=\"num\">63</td><td class=\"num\">49</td><td class=\"num\">60</td><td class=\"num\">64</td><td class=\"num\">56</td></tr></tbody></table></div><p>四分位數以 GDC 方法求得：取已排序數據前後兩半各自的中位數，當數值個數為奇數時不計算整體中位數。<br>(a) 求 (Find) 每個品牌的五數概括（最小值、<span class=\"chem\">Q_1</span>、中位數、<span class=\"chem\">Q_3</span>、最大值）。<strong>[4 marks]</strong><br>(b) 判斷 (Determine) 兩個品牌中是否有任何一個有異常值。<strong>[2 marks]</strong><br>(c) 兩個品牌的框線圖以相同的比例繪畫。利用它們比較 (Compare) 這兩個品牌，並說明你會向一名想要電池使用時間可預計的買家推薦哪個品牌。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: "compare" in a statistics question means compare a measure of centre (median) AND a measure of spread (IQR), each in context. "Predictable" is about spread, not about the average.
        "解碼：統計題中的「比較」是指比較一個中心量度（中位數）及一個離散量度（IQR），兩者都要結合情境。「可預計」關乎離散程度，而不是平均。",
        // EN: Put each brand in its own list and run <span class="mono">1-Var Stats</span>. Then fences: <span class="chem">Q_1 - 1.5 IQR</span> and <span class="chem">Q_3 + 1.5 IQR</span>.
        "把每個品牌輸入各自的列表，然後執行 <span class=\"mono\">1-Var Stats</span>。然後界線為：<span class=\"chem\">Q_1 - 1.5 IQR</span> 及 <span class=\"chem\">Q_3 + 1.5 IQR</span>。",
        // EN: Do not use the range to judge spread when one brand has an outlier: the IQR is not affected by it.
        "當其中一個品牌有異常值時，不要用分佈域判斷離散程度：IQR 不受異常值影響。",
      ],
      // EN: <p><b>Decode:</b> compare centre and spread in context; "predictable" means small spread.<br>(a) P ordered: 41, 45, 47, 48, 50, 51, 52, 54, 55, 57, 72, so <span class="chem">Q_1 = 47</span>, median <span class="chem">51</span>, <span class="chem">Q_3 = 55</span> <b>[A1]</b>, min 41, max 72 <b>[A1]</b>.<br>Q ordered: 44, 49, 52, 55, 56, 58, 60, 61, 63, 64, 66, so <span class="chem">Q_1 = 52</span>, median <span class="chem">58</span>, <span class="chem">Q_3 = 63</span> <b>[A1]</b>, min 44, max 66 <b>[A1]</b>.<br>(b) P: <span class="chem">IQR = 8</span>, fences <span class="chem">35</span> and <span class="chem">67</span>; <span class="chem">72 &gt; 67</span> is an outlier <b>[R1]</b>. Q: <span class="chem">IQR = 11</span>, fences <span class="chem">35.5</span> and <span class="chem">79.5</span>; no outliers <b>[R1]</b>.<br>(c) The median of Q (<span class="chem">58</span> h) is higher than that of P (<span class="chem">51</span> h), so Q batteries usually last longer <b>[R1]</b>. The IQR of P (<span class="chem">8</span> h) is smaller than that of Q (<span class="chem">11</span> h), so the middle half of P batteries are more consistent <b>[R1]</b>. For a predictable lifetime choose P <b>[R1]</b>.</p>
      solution: "<p><b>解碼：</b>結合情境比較中心及離散程度；「可預計」表示離散程度小。<br>(a) P 排序後：41, 45, 47, 48, 50, 51, 52, 54, 55, 57, 72，所以 <span class=\"chem\">Q_1 = 47</span>，中位數 <span class=\"chem\">51</span>，<span class=\"chem\">Q_3 = 55</span> <b>[A1]</b>，最小值 41，最大值 72 <b>[A1]</b>。<br>Q 排序後：44, 49, 52, 55, 56, 58, 60, 61, 63, 64, 66，所以 <span class=\"chem\">Q_1 = 52</span>，中位數 <span class=\"chem\">58</span>，<span class=\"chem\">Q_3 = 63</span> <b>[A1]</b>，最小值 44，最大值 66 <b>[A1]</b>。<br>(b) P：<span class=\"chem\">IQR = 8</span>，界線為 <span class=\"chem\">35</span> 及 <span class=\"chem\">67</span>；<span class=\"chem\">72 &gt; 67</span> 是異常值 <b>[R1]</b>。Q：<span class=\"chem\">IQR = 11</span>，界線為 <span class=\"chem\">35.5</span> 及 <span class=\"chem\">79.5</span>；沒有異常值 <b>[R1]</b>。<br>(c) Q 的中位數（<span class=\"chem\">58</span> h）高於 P 的中位數（<span class=\"chem\">51</span> h），所以 Q 的電池通常較耐用 <b>[R1]</b>。P 的 IQR（<span class=\"chem\">8</span> h）小於 Q 的 IQR（<span class=\"chem\">11</span> h），所以 P 中間一半的電池較穩定 <b>[R1]</b>。若要使用時間可預計，應選 P <b>[R1]</b>。</p>",
      // EN: <p>(a) P: <span class="chem">41, 47, 51, 55, 72</span>; Q: <span class="chem">44, 52, 58, 63, 66</span>.<br>(b) P: <span class="chem">IQR = 8</span>, upper fence <span class="chem">67</span>, so <span class="chem">72</span> is an outlier. Q: fences <span class="chem">35.5</span> and <span class="chem">79.5</span>, no outliers.<br>(c) Q has the higher median (<span class="chem">58</span> h against <span class="chem">51</span> h), so Q batteries generally last longer. P has the smaller IQR (<span class="chem">8</span> against <span class="chem">11</span>), so apart from its one outlier P is more consistent. For a predictable lifetime, recommend P (smaller IQR), noting the one unusually long-lasting battery.</p>
      answer: "<p>(a) P：<span class=\"chem\">41, 47, 51, 55, 72</span>；Q：<span class=\"chem\">44, 52, 58, 63, 66</span>。<br>(b) P：<span class=\"chem\">IQR = 8</span>，上界線 <span class=\"chem\">67</span>，所以 <span class=\"chem\">72</span> 是異常值。Q：界線為 <span class=\"chem\">35.5</span> 及 <span class=\"chem\">79.5</span>，沒有異常值。<br>(c) Q 的中位數較高（<span class=\"chem\">58</span> h 對 <span class=\"chem\">51</span> h），所以 Q 的電池一般較耐用。P 的 IQR 較小（<span class=\"chem\">8</span> 對 <span class=\"chem\">11</span>），所以除了那一個異常值外，P 較穩定。若要使用時間可預計，推薦 P（IQR 較小），並指出有一枚電池異常耐用。</p>",
      markscheme: [
        // EN: A1: Brand P: Q₁ = 47, median = 51, Q₃ = 55.
        "A1：品牌 P：Q₁ = 47，中位數 = 51，Q₃ = 55。",
        // EN: A1: Brand P: min 41, max 72.
        "A1：品牌 P：最小值 41，最大值 72。",
        // EN: A1: Brand Q: Q₁ = 52, median = 58, Q₃ = 63.
        "A1：品牌 Q：Q₁ = 52，中位數 = 58，Q₃ = 63。",
        // EN: A1: Brand Q: min 44, max 66.
        "A1：品牌 Q：最小值 44，最大值 66。",
        // EN: R1: P: IQR = 8, upper fence 67 < 72, so 72 is an outlier (lower fence 35 < 41).
        "R1：P：IQR = 8，上界線 67 < 72，所以 72 是異常值（下界線 35 < 41）。",
        // EN: R1: Q: IQR = 11, fences 35.5 and 79.5 contain all values, so no outliers.
        "R1：Q：IQR = 11，界線 35.5 及 79.5 包含所有數值，所以沒有異常值。",
        // EN: R1: Compares medians in context: Q generally lasts longer.
        "R1：結合情境比較中位數：Q 一般較耐用。",
        // EN: R1: Compares IQRs in context: P is more consistent (less spread).
        "R1：結合情境比較 IQR：P 較穩定（離散程度較小）。",
        // EN: R1: Recommends P for predictability, with a reason based on spread (accept Q if justified by its higher median AND lack of outliers).
        "R1：以離散程度為理由，為可預計性推薦 P（若以 Q 的中位數較高及沒有異常值作理由，亦可接受 Q）。",
      ],
    },

    // ── t4-1-q043 · numeric · exam · SL · SL 4.3 · 3 marks
    "t4-1-q043": {
      // EN: <p>An ornithologist counts the number of eggs <span class="chem">x</span> in each of <span class="chem">40</span> nests.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Eggs <span class="chem">x</span></th><td class="num">2</td><td class="num">3</td><td class="num">4</td><td class="num">5</td><td class="num">6</td></tr><tr><th scope="row">Number of nests</th><td class="num">4</td><td class="num">9</td><td class="num">15</td><td class="num">8</td><td class="num">4</td></tr></tbody></table></div><p>Find the variance of the number of eggs per nest.</p>
      stem: "<p>一名鳥類學家點算了 <span class=\"chem\">40</span> 個巢中每個巢的蛋的數目 <span class=\"chem\">x</span>。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">蛋的數目 <span class=\"chem\">x</span></th><td class=\"num\">2</td><td class=\"num\">3</td><td class=\"num\">4</td><td class=\"num\">5</td><td class=\"num\">6</td></tr><tr><th scope=\"row\">巢的數目</th><td class=\"num\">4</td><td class=\"num\">9</td><td class=\"num\">15</td><td class=\"num\">8</td><td class=\"num\">4</td></tr></tbody></table></div><p>求 (Find) 每個巢的蛋的數目的方差。</p>",
      hints: [
        // EN: Run <span class="mono">1-Var Stats</span> with the numbers of nests as the frequency list.
        "以巢的數目作頻數列表，執行 <span class=\"mono\">1-Var Stats</span>。",
        // EN: The variance is <span class="chem">σ^2</span>: square the value of <span class="mono">σx</span> (use its full value, not a rounded one).
        "方差是 <span class=\"chem\">σ^2</span>：把 <span class=\"mono\">σx</span> 的值平方（用其完整數值，而非捨入後的數值）。",
      ],
      // EN: <p>GDC with frequencies: <span class="chem">n = 40</span>, <span class="chem">x̄ = 3.975</span>, <span class="chem">σ = 1.10651…</span> <b>[M1 A1]</b>.<br>Variance <span class="chem">σ^2 = 1.22437 ≈ 1.22</span> <b>[A1]</b>.</p>
      solution: "<p>以頻數使用 GDC：<span class=\"chem\">n = 40</span>，<span class=\"chem\">x̄ = 3.975</span>，<span class=\"chem\">σ = 1.10651…</span> <b>[M1 A1]</b>。<br>方差 <span class=\"chem\">σ^2 = 1.22437 ≈ 1.22</span> <b>[A1]</b>。</p>",
    },

    // ── t4-1-q044 · numeric · challenge · SL · SL 4.3 · 4 marks
    "t4-1-q044": {
      // EN: <p>The distances, in km, that <span class="chem">14</span> employees travel to work are:</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Distance (km)</th><td class="num">3.2</td><td class="num">5.8</td><td class="num">7.1</td><td class="num">4.4</td><td class="num">12.6</td><td class="num">6.3</td><td class="num">8.9</td><td class="num">2.7</td><td class="num">9.5</td><td class="num">5.1</td><td class="num">6.8</td><td class="num">15.2</td><td class="num">4.9</td><td class="num">7.6</td></tr></tbody></table></div><p>A manager says an employee lives "within one standard deviation of the mean" if their distance is between <span class="chem">x̄ - σ</span> and <span class="chem">x̄ + σ</span>. How many of the <span class="chem">14</span> employees live within one standard deviation of the mean?</p>
      stem: "<p><span class=\"chem\">14</span> 名僱員上班的路程（km）如下：</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">距離 (km)</th><td class=\"num\">3.2</td><td class=\"num\">5.8</td><td class=\"num\">7.1</td><td class=\"num\">4.4</td><td class=\"num\">12.6</td><td class=\"num\">6.3</td><td class=\"num\">8.9</td><td class=\"num\">2.7</td><td class=\"num\">9.5</td><td class=\"num\">5.1</td><td class=\"num\">6.8</td><td class=\"num\">15.2</td><td class=\"num\">4.9</td><td class=\"num\">7.6</td></tr></tbody></table></div><p>一名經理說，若某僱員的路程介乎 <span class=\"chem\">x̄ - σ</span> 與 <span class=\"chem\">x̄ + σ</span> 之間，該僱員便住在「平均值的一個標準差之內」。這 <span class=\"chem\">14</span> 名僱員中有多少名住在平均值的一個標準差之內？</p>",
      hints: [
        // EN: Decode: the answer is a count of employees (a whole number), not a distance. First find the interval <span class="chem">(x̄ - σ, x̄ + σ)</span>, then count the data values inside it.
        "解碼：答案是僱員的人數（一個整數），而不是距離。先求區間 <span class=\"chem\">(x̄ - σ, x̄ + σ)</span>，然後點算在區間內的數據值。",
        // EN: GDC: <span class="mono">1-Var Stats</span> gives <span class="chem">x̄</span> and <span class="chem">σ</span> (use <span class="chem">σ</span>, not <span class="chem">s</span>).
        "GDC：<span class=\"mono\">1-Var Stats</span> 給出 <span class=\"chem\">x̄</span> 及 <span class=\"chem\">σ</span>（使用 <span class=\"chem\">σ</span>，而不是 <span class=\"chem\">s</span>）。",
        // EN: Order the data and count the values strictly between the two limits.
        "把數據排序，然後點算嚴格介乎兩個界限之間的數值。",
      ],
      // EN: <p><b>Decode:</b> build the interval from <span class="chem">x̄</span> and <span class="chem">σ</span>, then count.<br>GDC: <span class="chem">x̄ = 7.15</span>, <span class="chem">σ = 3.3615…</span> <b>[M1 A1]</b>.<br>Interval: <span class="chem">3.79 &lt; d &lt; 10.51</span> <b>[A1]</b>.<br>Ordered: 2.7, 3.2, | 4.4, 4.9, 5.1, 5.8, 6.3, 6.8, 7.1, 7.6, 8.9, 9.5, | 12.6, 15.2. So <span class="chem">10</span> employees <b>[A1]</b>.</p>
      solution: "<p><b>解碼：</b>由 <span class=\"chem\">x̄</span> 及 <span class=\"chem\">σ</span> 建立區間，然後點算。<br>GDC：<span class=\"chem\">x̄ = 7.15</span>，<span class=\"chem\">σ = 3.3615…</span> <b>[M1 A1]</b>。<br>區間：<span class=\"chem\">3.79 &lt; d &lt; 10.51</span> <b>[A1]</b>。<br>排序後：2.7, 3.2, | 4.4, 4.9, 5.1, 5.8, 6.3, 6.8, 7.1, 7.6, 8.9, 9.5, | 12.6, 15.2。所以有 <span class=\"chem\">10</span> 名僱員 <b>[A1]</b>。</p>",
    },

    // ── t4-1-q045 · mcq · foundation · SL · SL 4.1 · 2 marks
    "t4-1-q045": {
      // EN: <p>A sports club collects four kinds of data about its members. Which one is <strong>continuous</strong> data?</p>
      stem: "<p>一個體育會收集了關於其會員的四類數據。哪一類是<strong>連續</strong>數據？</p>",
      options: [
        // EN: The time each member takes to swim 50 m
        "每名會員游 50 m 所用的時間",
        // EN: The number of training sessions each member attended last month
        "每名會員上個月出席訓練的次數",
        // EN: The number of medals each member has won
        "每名會員贏得的獎牌數目",
        // EN: Each member's shirt size (S, M, L or XL)
        "每名會員的上衣尺碼（S、M、L 或 XL）",
      ],
      hints: [
        // EN: Continuous data are <em>measured</em> and can take any value in an interval; discrete data are <em>counted</em> or take separate values.
        "連續數據是<em>量度</em>所得的，可取某區間內的任何數值；離散數據是<em>點算</em>所得的，或只取分開的數值。",
      ],
      // EN: <p>A time is measured and can take any value in an interval (for example 41.37 s), so it is continuous <b>[A2]</b>. Numbers of sessions and medals are counted (discrete), and shirt sizes are categories.</p>
      solution: "<p>時間是量度所得的，可取某區間內的任何數值（例如 41.37 s），所以是連續數據 <b>[A2]</b>。訓練次數及獎牌數目是點算所得的（離散），而上衣尺碼是類別。</p>",
      misconception: {
        // EN (option B): A number of sessions is counted in whole steps (0, 1, 2, …), so it is discrete.
        "1": "訓練次數是以整數逐一點算的（0, 1, 2, …），所以是離散數據。",
        // EN (option C): Medals are counted, so the data are discrete, even though the numbers may be large.
        "2": "獎牌是點算所得的，所以即使數目可能很大，這些數據仍是離散的。",
        // EN (option D): Shirt sizes are categories, not measurements on a continuous scale.
        "3": "上衣尺碼是類別，而不是在連續尺度上的量度。",
      },
    },

    // ── t4-1-q046 · mcq · foundation · SL · SL 4.3 · 2 marks
    "t4-1-q046": {
      // EN: <p>The masses <span class="chem">m</span> kg of <span class="chem">50</span> parcels are grouped as follows.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Mass <span class="chem">m</span> (kg)</th><td class="num">0 ≤ <i>m</i> &lt; 2</td><td class="num">2 ≤ <i>m</i> &lt; 4</td><td class="num">4 ≤ <i>m</i> &lt; 6</td><td class="num">6 ≤ <i>m</i> &lt; 8</td></tr><tr><th scope="row">Frequency</th><td class="num">9</td><td class="num">17</td><td class="num">14</td><td class="num">10</td></tr></tbody></table></div><p>Which is the modal class?</p>
      stem: "<p><span class=\"chem\">50</span> 個包裹的質量 <span class=\"chem\">m</span> kg 分組如下。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">質量 <span class=\"chem\">m</span> (kg)</th><td class=\"num\">0 ≤ <i>m</i> &lt; 2</td><td class=\"num\">2 ≤ <i>m</i> &lt; 4</td><td class=\"num\">4 ≤ <i>m</i> &lt; 6</td><td class=\"num\">6 ≤ <i>m</i> &lt; 8</td></tr><tr><th scope=\"row\">頻數</th><td class=\"num\">9</td><td class=\"num\">17</td><td class=\"num\">14</td><td class=\"num\">10</td></tr></tbody></table></div><p>哪一組是眾數組？</p>",
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
        "當各組的組距相等時，眾數組是頻數最高的組別。",
      ],
      // EN: <p>The highest frequency is <span class="chem">17</span>, so the modal class is <span class="chem">2 ≤ m &lt; 4</span> <b>[A2]</b>.</p>
      solution: "<p>最高的頻數是 <span class=\"chem\">17</span>，所以眾數組是 <span class=\"chem\">2 ≤ m &lt; 4</span> <b>[A2]</b>。</p>",
      misconception: {
        // EN (option B): You chose the class with the largest masses. The modal class is the one with the largest frequency.
        "1": "你選了質量最大的組別。眾數組是頻數最大的組別。",
        // EN (option C): This is the middle class of the table, not the class with the largest frequency (17). The modal class depends on the frequencies, not on the position of the class.
        "2": "這是表中位置居中的組別，而不是頻數最大（17）的組別。眾數組取決於頻數，而不是組別的位置。",
        // EN (option D): 17 is the highest frequency. The modal class is the class itself, not its frequency.
        "3": "17 是最高的頻數。眾數組是組別本身，而不是它的頻數。",
      },
    },

    // ── t4-1-q047 · numeric · foundation · SL · SL 4.2 · 3 marks
    "t4-1-q047": {
      // EN: <p>The numbers of emails received by a manager on <span class="chem">9</span> days were</p><p class="chem">12, 3, 19, 8, 14, 22, 7, 15, 11.</p><p>Find the interquartile range. (Use the median of each half, leaving out the overall median.)</p>
      stem: "<p>一名經理在 <span class=\"chem\">9</span> 天內收到的電郵數目為</p><p class=\"chem\">12, 3, 19, 8, 14, 22, 7, 15, 11.</p><p>求 (Find) 四分位數間距。（取前後兩半各自的中位數，不計算整體中位數。）</p>",
      hints: [
        // EN: Write the data in order first. With <span class="chem">9</span> values the median is the 5th value.
        "先把數據排序。有 <span class=\"chem\">9</span> 個數值時，中位數是第 5 個數值。",
        // EN: The lower half is the 4 values below the median, and the upper half is the 4 values above it.
        "下半部是中位數以下的 4 個數值，上半部是中位數以上的 4 個數值。",
      ],
      // EN: <p>Ordered: <span class="chem">3, 7, 8, 11, 12, 14, 15, 19, 22</span>; median <span class="chem">12</span>.<br><span class="chem">Q_1 = (7 + 8)/2 = 7.5</span> and <span class="chem">Q_3 = (15 + 19)/2 = 17</span> <b>[A1 A1]</b>.<br><span class="chem">IQR = 17 - 7.5 = 9.5</span> <b>[A1]</b>.</p>
      solution: "<p>排序後：<span class=\"chem\">3, 7, 8, 11, 12, 14, 15, 19, 22</span>；中位數 <span class=\"chem\">12</span>。<br><span class=\"chem\">Q_1 = (7 + 8)/2 = 7.5</span> 及 <span class=\"chem\">Q_3 = (15 + 19)/2 = 17</span> <b>[A1 A1]</b>。<br><span class=\"chem\">IQR = 17 - 7.5 = 9.5</span> <b>[A1]</b>。</p>",
    },

    // ── t4-1-q048 · numeric · exam · SL · SL 4.3 · 3 marks
    "t4-1-q048": {
      // EN: <p>A teacher scales the raw marks <span class="chem">x</span> of a test using <span class="chem">y = 1.2x + 10</span>. The scaled marks <span class="chem">y</span> have mean <span class="chem">70</span> and standard deviation <span class="chem">9</span>. Find the standard deviation of the raw marks.</p>
      stem: "<p>一名教師以 <span class=\"chem\">y = 1.2x + 10</span> 調整一次測驗的原始分數 <span class=\"chem\">x</span>。調整後的分數 <span class=\"chem\">y</span> 的平均值為 <span class=\"chem\">70</span>，標準差為 <span class=\"chem\">9</span>。求 (Find) 原始分數的標準差。</p>",
      hints: [
        // EN: Decode: you are given the <em>new</em> standard deviation and asked for the <em>original</em> one, so work backwards.
        "解碼：題目給出<em>新的</em>標準差，要求<em>原來的</em>標準差，所以要倒推。",
        // EN: Under <span class="chem">y = ax + b</span>, <span class="chem">σ_y = |a| σ_x</span>; the <span class="chem">+10</span> and the mean <span class="chem">70</span> play no part.
        "在 <span class=\"chem\">y = ax + b</span> 之下，<span class=\"chem\">σ_y = |a| σ_x</span>；<span class=\"chem\">+10</span> 及平均值 <span class=\"chem\">70</span> 都不起作用。",
      ],
      // EN: <p><span class="chem">σ_y = 1.2 σ_x</span> (adding 10 does not affect spread) <b>[M1]</b>, so <span class="chem">9 = 1.2 σ_x</span> <b>[A1]</b> and <span class="chem">σ_x = 9/1.2 = 7.5</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">σ_y = 1.2 σ_x</span>（加上 10 不影響離散程度）<b>[M1]</b>，所以 <span class=\"chem\">9 = 1.2 σ_x</span> <b>[A1]</b>，而 <span class=\"chem\">σ_x = 9/1.2 = 7.5</span> <b>[A1]</b>。</p>",
    },

    // ── t4-1-q049 · numeric · exam · SL · SL 4.3 · 2 marks
    "t4-1-q049": {
      // EN: <p>A data set <span class="chem">x_1, x_2, …, x_n</span> has variance <span class="chem">4</span>. Each value is replaced by <span class="chem">y_i = 5 - 3x_i</span>. Find the variance of the new values.</p>
      stem: "<p>一組數據 <span class=\"chem\">x_1, x_2, …, x_n</span> 的方差為 <span class=\"chem\">4</span>。每個數值以 <span class=\"chem\">y_i = 5 - 3x_i</span> 代替。求 (Find) 新數值的方差。</p>",
      hints: [
        // EN: Variance scales by <span class="chem">a^2</span> under <span class="chem">y = ax + b</span>: <span class="chem">σ_y^2 = a^2 σ_x^2</span>. The constant <span class="chem">5</span> has no effect.
        "在 <span class=\"chem\">y = ax + b</span> 之下，方差乘以 <span class=\"chem\">a^2</span>：<span class=\"chem\">σ_y^2 = a^2 σ_x^2</span>。常數 <span class=\"chem\">5</span> 沒有影響。",
      ],
      // EN: <p><span class="chem">σ_y^2 = (-3)^2 × 4</span> <b>[M1]</b> <span class="chem">= 9 × 4 = 36</span> <b>[A1]</b>. (Squaring removes the negative sign; the variance can never be negative.)</p>
      solution: "<p><span class=\"chem\">σ_y^2 = (-3)^2 × 4</span> <b>[M1]</b> <span class=\"chem\">= 9 × 4 = 36</span> <b>[A1]</b>。（平方會消去負號；方差永遠不可能是負數。）</p>",
    },

    // ── t4-1-q050 · short · exam · SL · SL 4.2, 4.3 · 5 marks
    "t4-1-q050": {
      // EN: <p>For a data set <span class="chem">x</span>, the lower quartile is <span class="chem">14</span>, the median is <span class="chem">20</span> and the upper quartile is <span class="chem">27</span>. Each value is transformed using <span class="chem">y = 50 - 2x</span>.<br>(a) Find the median of <span class="chem">y</span>. <strong>[1 mark]</strong><br>(b) Find the lower and upper quartiles of <span class="chem">y</span>. <strong>[3 marks]</strong><br>(c) Hence write down the interquartile range of <span class="chem">y</span>. <strong>[1 mark]</strong></p>
      stem: "<p>對於一組數據 <span class=\"chem\">x</span>，下四分位數是 <span class=\"chem\">14</span>，中位數是 <span class=\"chem\">20</span>，上四分位數是 <span class=\"chem\">27</span>。每個數值以 <span class=\"chem\">y = 50 - 2x</span> 變換。<br>(a) 求 (Find) <span class=\"chem\">y</span> 的中位數。<strong>[1 mark]</strong><br>(b) 求 (Find) <span class=\"chem\">y</span> 的下四分位數及上四分位數。<strong>[3 marks]</strong><br>(c) 由此 (Hence) 寫出 <span class=\"chem\">y</span> 的四分位數間距。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: a linear change maps each ordered value to a new value, but a negative multiplier turns the order upside down. Ask: which <span class="chem">x</span>-quartile becomes the smaller <span class="chem">y</span>-value?
        "解碼：線性變換把每個已排序的數值映射到一個新數值，但負的乘數會把次序倒轉。問自己：哪一個 <span class=\"chem\">x</span> 的四分位數會變成較小的 <span class=\"chem\">y</span> 值？",
        // EN: The median stays in the middle: just substitute <span class="chem">x = 20</span>.
        "中位數仍在中間：只需代入 <span class=\"chem\">x = 20</span>。",
        // EN: Check your IQR with <span class="chem">IQR_y = |a| × IQR_x</span>.
        "用 <span class=\"chem\">IQR_y = |a| × IQR_x</span> 檢查你的 IQR。",
      ],
      // EN: <p>(a) The middle value maps to the middle value: <span class="chem">50 - 2(20) = 10</span> <b>[A1]</b>.<br>(b) Since <span class="chem">-2 &lt; 0</span>, large <span class="chem">x</span> gives small <span class="chem">y</span>, so the quartiles swap <b>[R1]</b>: <span class="chem">Q_1(y) = 50 - 2(27) = -4</span> <b>[A1]</b> and <span class="chem">Q_3(y) = 50 - 2(14) = 22</span> <b>[A1]</b>.<br>(c) <span class="chem">IQR = 22 - (-4) = 26</span> <b>[A1]</b>, which equals <span class="chem">2 × 13</span>.</p>
      solution: "<p>(a) 中間的數值映射到中間的數值：<span class=\"chem\">50 - 2(20) = 10</span> <b>[A1]</b>。<br>(b) 由於 <span class=\"chem\">-2 &lt; 0</span>，大的 <span class=\"chem\">x</span> 給出小的 <span class=\"chem\">y</span>，所以四分位數互換 <b>[R1]</b>：<span class=\"chem\">Q_1(y) = 50 - 2(27) = -4</span> <b>[A1]</b> 及 <span class=\"chem\">Q_3(y) = 50 - 2(14) = 22</span> <b>[A1]</b>。<br>(c) <span class=\"chem\">IQR = 22 - (-4) = 26</span> <b>[A1]</b>，它等於 <span class=\"chem\">2 × 13</span>。</p>",
      // EN: <p>(a) <span class="chem">50 - 2(20) = 10</span><br>(b) Because the multiplier <span class="chem">-2</span> reverses the order, <span class="chem">Q_1(y) = 50 - 2(27) = -4</span> and <span class="chem">Q_3(y) = 50 - 2(14) = 22</span>.<br>(c) <span class="chem">IQR = 22 - (-4) = 26</span> (check: <span class="chem">|-2| × (27 - 14) = 26</span>).</p>
      answer: "<p>(a) <span class=\"chem\">50 - 2(20) = 10</span><br>(b) 由於乘數 <span class=\"chem\">-2</span> 把次序倒轉，<span class=\"chem\">Q_1(y) = 50 - 2(27) = -4</span> 及 <span class=\"chem\">Q_3(y) = 50 - 2(14) = 22</span>。<br>(c) <span class=\"chem\">IQR = 22 - (-4) = 26</span>（驗算：<span class=\"chem\">|-2| × (27 - 14) = 26</span>）。</p>",
      markscheme: [
        // EN: A1: Median of y = 50 − 2(20) = 10.
        "A1：y 的中位數 = 50 − 2(20) = 10。",
        // EN: R1: Recognises that multiplying by −2 reverses the order, so the upper quartile of x gives the lower quartile of y.
        "R1：認識到乘以 −2 會把次序倒轉，所以 x 的上四分位數給出 y 的下四分位數。",
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
      stem: "<p>對於 <span class=\"chem\">12</span> 對數據 <span class=\"chem\">(x, y)</span>，<span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 的迴歸線是 <span class=\"chem\">y = -1.6x + 48</span>。<span class=\"chem\">y</span> 值之和是 <span class=\"chem\">Σ y = 360</span>。求 (Find) <span class=\"chem\">x</span> 值的平均值。</p>",
      hints: [
        // EN: Decode: the only link between the line and the means is that the regression line passes through the mean point <span class="chem">(x̄, ȳ)</span>.
        "解碼：迴歸線與平均值之間唯一的聯繫，是迴歸線通過平均點 <span class=\"chem\">(x̄, ȳ)</span>。",
        // EN: First find <span class="chem">ȳ = 360/12</span>, then substitute <span class="chem">(x̄, ȳ)</span> into the line.
        "先求 <span class=\"chem\">ȳ = 360/12</span>，然後把 <span class=\"chem\">(x̄, ȳ)</span> 代入直線方程。",
      ],
      // EN: <p><span class="chem">ȳ = 360/12 = 30</span> <b>[A1]</b>. The line passes through <span class="chem">(x̄, ȳ)</span> <b>[M1]</b>, so <span class="chem">30 = -1.6x̄ + 48</span> <b>[A1]</b>, giving <span class="chem">x̄ = 18/1.6 = 11.25</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">ȳ = 360/12 = 30</span> <b>[A1]</b>。直線通過 <span class=\"chem\">(x̄, ȳ)</span> <b>[M1]</b>，所以 <span class=\"chem\">30 = -1.6x̄ + 48</span> <b>[A1]</b>，得 <span class=\"chem\">x̄ = 18/1.6 = 11.25</span> <b>[A1]</b>。</p>",
    },

    // ── t4-1-q052 · short · exam · SL · SL 4.4 · 5 marks
    "t4-1-q052": {
      // EN: <p>For <span class="chem">20</span> car models with engine power <span class="chem">x</span> kW, where <span class="chem">50 ≤ x ≤ 150</span>, the regression line of fuel use <span class="chem">y</span> (litres per 100 km) on <span class="chem">x</span> is <span class="chem">y = 0.04x + 3.2</span>, with <span class="chem">r = 0.91</span>.<br>(a) Interpret the value <span class="chem">0.04</span> in context. <strong>[1 mark]</strong><br>(b) Explain why the value <span class="chem">3.2</span> should not be interpreted as the fuel use of a car with no engine power. <strong>[1 mark]</strong><br>(c) Estimate the fuel use of a car with engine power <span class="chem">120</span> kW. <strong>[2 marks]</strong><br>(d) A sports car has engine power <span class="chem">400</span> kW. Comment on using the line to estimate its fuel use. <strong>[1 mark]</strong></p>
      stem: "<p>對於 <span class=\"chem\">20</span> 款引擎功率為 <span class=\"chem\">x</span> kW 的汽車（其中 <span class=\"chem\">50 ≤ x ≤ 150</span>），耗油量 <span class=\"chem\">y</span>（每 100 km 公升數）對 <span class=\"chem\">x</span> 的迴歸線是 <span class=\"chem\">y = 0.04x + 3.2</span>，而 <span class=\"chem\">r = 0.91</span>。<br>(a) 在情境中詮釋 (Interpret) 數值 <span class=\"chem\">0.04</span>。<strong>[1 mark]</strong><br>(b) 解釋 (Explain) 為何不應把數值 <span class=\"chem\">3.2</span> 詮釋為一輛沒有引擎功率的汽車的耗油量。<strong>[1 mark]</strong><br>(c) 估計 (Estimate) 一輛引擎功率為 <span class=\"chem\">120</span> kW 的汽車的耗油量。<strong>[2 marks]</strong><br>(d) 一輛跑車的引擎功率為 <span class=\"chem\">400</span> kW。評論 (Comment) 利用這條直線估計其耗油量的做法。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: The gradient is a rate: change in <span class="chem">y</span> per one unit of <span class="chem">x</span>, with units.
        "斜率是一個變化率：<span class=\"chem\">x</span> 每增加一個單位時 <span class=\"chem\">y</span> 的變化，並附上單位。",
        // EN: Before interpreting the intercept, check whether <span class="chem">x = 0</span> is inside the data range.
        "在詮釋截距之前，先檢查 <span class=\"chem\">x = 0</span> 是否在數據範圍之內。",
      ],
      // EN: <p>(a) For each extra kW, fuel use increases by about <span class="chem">0.04</span> L per 100 km <b>[A1]</b>.<br>(b) The intercept is the value at <span class="chem">x = 0</span>, which is far outside <span class="chem">50 ≤ x ≤ 150</span>, so it is an extrapolation with no real meaning <b>[R1]</b>.<br>(c) <span class="chem">y = 0.04(120) + 3.2</span> <b>[M1]</b> <span class="chem">= 4.8 + 3.2 = 8.0</span> L per 100 km <b>[A1]</b>.<br>(d) <span class="chem">400</span> kW is well outside the data, so the estimate is an extrapolation and unreliable; a strong <span class="chem">r</span> only describes the pattern inside the data <b>[R1]</b>.</p>
      solution: "<p>(a) 功率每多一 kW，耗油量約增加每 100 km <span class=\"chem\">0.04</span> L <b>[A1]</b>。<br>(b) 截距是 <span class=\"chem\">x = 0</span> 時的數值，它遠在 <span class=\"chem\">50 ≤ x ≤ 150</span> 之外，所以屬於外推，沒有實際意義 <b>[R1]</b>。<br>(c) <span class=\"chem\">y = 0.04(120) + 3.2</span> <b>[M1]</b> <span class=\"chem\">= 4.8 + 3.2 = 8.0</span> L（每 100 km）<b>[A1]</b>。<br>(d) <span class=\"chem\">400</span> kW 遠在數據之外，所以這個估計屬於外推，並不可靠；強的 <span class=\"chem\">r</span> 只描述數據範圍內的規律 <b>[R1]</b>。</p>",
      // EN: <p>(a) Each extra kW of engine power is associated with an increase of about <span class="chem">0.04</span> L per 100 km in fuel use.<br>(b) <span class="chem">x = 0</span> is far outside the data range <span class="chem">50 ≤ x ≤ 150</span> (and a car with no power is not meaningful), so this is extrapolation.<br>(c) <span class="chem">0.04(120) + 3.2 = 8.0</span> L per 100 km.<br>(d) Unreliable: <span class="chem">400</span> kW is outside the data range, so this is extrapolation.</p>
      answer: "<p>(a) 引擎功率每多一 kW，耗油量約增加每 100 km <span class=\"chem\">0.04</span> L。<br>(b) <span class=\"chem\">x = 0</span> 遠在數據範圍 <span class=\"chem\">50 ≤ x ≤ 150</span> 之外（而且沒有功率的汽車沒有意義），所以這屬於外推。<br>(c) <span class=\"chem\">0.04(120) + 3.2 = 8.0</span> L（每 100 km）。<br>(d) 不可靠：<span class=\"chem\">400</span> kW 在數據範圍之外，所以這屬於外推。</p>",
      markscheme: [
        // EN: A1: Fuel use rises by about 0.04 L per 100 km for each additional kW, on average.
        "A1：功率每多一 kW，耗油量平均約上升每 100 km 0.04 L。",
        // EN: R1: x = 0 lies outside 50 ≤ x ≤ 150, so the intercept is an extrapolation and has no practical meaning.
        "R1：x = 0 在 50 ≤ x ≤ 150 之外，所以截距屬於外推，沒有實際意義。",
        // EN: M1: Substitutes x = 120 into the line.
        "M1：把 x = 120 代入直線。",
        // EN: A1: y = 8.0 L per 100 km.
        "A1：y = 8.0 L（每 100 km）。",
        // EN: R1: 400 kW is outside the range of the data (extrapolation), so the estimate is unreliable even though r is high.
        "R1：400 kW 在數據範圍之外（外推），所以即使 r 很高，這個估計也不可靠。",
      ],
    },

    // ── t4-1-q053 · numeric · exam · SL · SL 4.3 · 3 marks
    "t4-1-q053": {
      // EN: <p>The waiting times <span class="chem">w</span> minutes of <span class="chem">20</span> patients at a clinic are grouped below.</p><div class="table-scroll"><table class="data"><tbody><tr><th scope="row">Waiting time <span class="chem">w</span> (min)</th><td class="num">0 ≤ <i>w</i> &lt; 10</td><td class="num">10 ≤ <i>w</i> &lt; 20</td><td class="num">20 ≤ <i>w</i> &lt; 30</td><td class="num">30 ≤ <i>w</i> &lt; 40</td></tr><tr><th scope="row">Frequency</th><td class="num">3</td><td class="num">7</td><td class="num">6</td><td class="num">4</td></tr></tbody></table></div><p>Calculate an estimate of the mean waiting time.</p>
      stem: "<p>某診所 <span class=\"chem\">20</span> 名病人的輪候時間 <span class=\"chem\">w</span> 分鐘分組如下。</p><div class=\"table-scroll\"><table class=\"data\"><tbody><tr><th scope=\"row\">輪候時間 <span class=\"chem\">w</span> (min)</th><td class=\"num\">0 ≤ <i>w</i> &lt; 10</td><td class=\"num\">10 ≤ <i>w</i> &lt; 20</td><td class=\"num\">20 ≤ <i>w</i> &lt; 30</td><td class=\"num\">30 ≤ <i>w</i> &lt; 40</td></tr><tr><th scope=\"row\">頻數</th><td class=\"num\">3</td><td class=\"num\">7</td><td class=\"num\">6</td><td class=\"num\">4</td></tr></tbody></table></div><p>計算 (Calculate) 平均輪候時間的估計值。</p>",
      hints: [
        // EN: Use the mid-interval values <span class="chem">5, 15, 25, 35</span>.
        "使用組中點 <span class=\"chem\">5, 15, 25, 35</span>。",
        // EN: <span class="chem">x̄ ≈ (Σ f x)/(Σ f)</span> with <span class="chem">Σ f = 20</span>.
        "<span class=\"chem\">x̄ ≈ (Σ f x)/(Σ f)</span>，其中 <span class=\"chem\">Σ f = 20</span>。",
      ],
      // EN: <p>Mid-interval values <span class="chem">5, 15, 25, 35</span> <b>[M1]</b>.<br><span class="chem">Σ f x = 15 + 105 + 150 + 140 = 410</span> <b>[A1]</b>, so <span class="chem">x̄ ≈ 410/20 = 20.5</span> min <b>[A1]</b>.</p>
      solution: "<p>組中點 <span class=\"chem\">5, 15, 25, 35</span> <b>[M1]</b>。<br><span class=\"chem\">Σ f x = 15 + 105 + 150 + 140 = 410</span> <b>[A1]</b>，所以 <span class=\"chem\">x̄ ≈ 410/20 = 20.5</span> 分鐘 <b>[A1]</b>。</p>",
    },

    // ── t4-1-q054 · numeric · challenge · SL · SL 4.1, 4.3 · 4 marks
    "t4-1-q054": {
      // EN: <p>The mean mass of <span class="chem">20</span> parcels was calculated as <span class="chem">35</span> kg. A clerk later finds that one parcel of mass <span class="chem">74</span> kg had been entered as <span class="chem">47</span> kg. Find the exact value of the correct mean mass.</p>
      stem: "<p><span class=\"chem\">20</span> 個包裹的平均質量計算得 <span class=\"chem\">35</span> kg。一名文員後來發現，一個質量為 <span class=\"chem\">74</span> kg 的包裹被輸入為 <span class=\"chem\">47</span> kg。求 (Find) 正確平均質量的準確值。</p>",
      hints: [
        // EN: Decode: a mean is a total divided by a count. The count (20) is unchanged; only the total was wrong, and you know by how much.
        "解碼：平均值是總和除以個數。個數 (20) 沒有改變；只有總和錯了，而你知道錯了多少。",
        // EN: Wrong total <span class="chem">= 20 × 35 = 700</span>. The correct total is larger by <span class="chem">74 - 47</span>.
        "錯誤的總和 <span class=\"chem\">= 20 × 35 = 700</span>。正確的總和大 <span class=\"chem\">74 - 47</span>。",
      ],
      // EN: <p><b>Decode:</b> correct the total, keep <span class="chem">n = 20</span>.<br>Recorded total <span class="chem">= 20 × 35 = 700</span> kg <b>[M1]</b>. The error was <span class="chem">74 - 47 = 27</span> kg too little <b>[A1]</b>, so the correct total is <span class="chem">727</span> kg <b>[A1]</b> and the correct mean is <span class="chem">727/20 = 36.35</span> kg <b>[A1]</b>.</p>
      solution: "<p><b>解碼：</b>更正總和，保持 <span class=\"chem\">n = 20</span>。<br>記錄的總和 <span class=\"chem\">= 20 × 35 = 700</span> kg <b>[M1]</b>。錯誤使總和少了 <span class=\"chem\">74 - 47 = 27</span> kg <b>[A1]</b>，所以正確的總和是 <span class=\"chem\">727</span> kg <b>[A1]</b>，而正確的平均值是 <span class=\"chem\">727/20 = 36.35</span> kg <b>[A1]</b>。</p>",
    },

    // ── t4-1-q055 · numeric · challenge · SL · SL 4.3 · 4 marks
    "t4-1-q055": {
      // EN: <p>A set of <span class="chem">n</span> numbers has mean <span class="chem">12</span>. When the number <span class="chem">30</span> is added to the set, the mean of the enlarged set is <span class="chem">13.5</span>. Find the value of <span class="chem">n</span>.</p>
      stem: "<p>一組 <span class=\"chem\">n</span> 個數的平均值是 <span class=\"chem\">12</span>。當把數 <span class=\"chem\">30</span> 加入這組數後，擴大後的一組數的平均值是 <span class=\"chem\">13.5</span>。求 (Find) <span class=\"chem\">n</span> 的值。</p>",
      hints: [
        // EN: Decode: <span class="chem">n</span> is the <em>number of values</em>, not one of the values. Write each mean as (total) ÷ (count).
        "解碼：<span class=\"chem\">n</span> 是<em>數值的個數</em>，而不是其中一個數值。把每個平均值寫成（總和）÷（個數）。",
        // EN: Original total <span class="chem">= 12n</span>; new total <span class="chem">= 12n + 30</span> and new count <span class="chem">= n + 1</span>.
        "原來的總和 <span class=\"chem\">= 12n</span>；新的總和 <span class=\"chem\">= 12n + 30</span>，新的個數 <span class=\"chem\">= n + 1</span>。",
        // EN: Solve <span class="chem">(12n + 30)/(n + 1) = 13.5</span>.
        "解 <span class=\"chem\">(12n + 30)/(n + 1) = 13.5</span>。",
      ],
      // EN: <p><b>Decode:</b> <span class="chem">n</span> is the size of the original set.<br>Original total <span class="chem">12n</span> <b>[M1]</b>; <span class="chem">(12n + 30)/(n + 1) = 13.5</span> <b>[A1]</b>.<br><span class="chem">12n + 30 = 13.5n + 13.5 ⇒ 1.5n = 16.5</span> <b>[A1]</b>, so <span class="chem">n = 11</span> <b>[A1]</b>.</p>
      solution: "<p><b>解碼：</b><span class=\"chem\">n</span> 是原來那組數的大小。<br>原來的總和 <span class=\"chem\">12n</span> <b>[M1]</b>；<span class=\"chem\">(12n + 30)/(n + 1) = 13.5</span> <b>[A1]</b>。<br><span class=\"chem\">12n + 30 = 13.5n + 13.5 ⇒ 1.5n = 16.5</span> <b>[A1]</b>，所以 <span class=\"chem\">n = 11</span> <b>[A1]</b>。</p>",
    },

    // ── t4-1-q056 · numeric · challenge · SL · SL 4.3 · 4 marks
    "t4-1-q056": {
      // EN: <p>A sports scientist kept only running totals for the <span class="chem">10</span> jump heights <span class="chem">h</span> cm of an athlete: <span class="chem">Σ h = 60</span> and <span class="chem">Σ h^2 = 460</span>. Find the exact value of the standard deviation of the <span class="chem">10</span> heights.</p>
      stem: "<p>一名運動科學家只保留了某運動員 <span class=\"chem\">10</span> 次跳躍高度 <span class=\"chem\">h</span> cm 的總和：<span class=\"chem\">Σ h = 60</span> 及 <span class=\"chem\">Σ h^2 = 460</span>。求 (Find) 這 <span class=\"chem\">10</span> 個高度的標準差的準確值。</p>",
      hints: [
        // EN: Decode: you have no raw data, only totals. The formula booklet gives <span class="chem">σ^2 = (Σ x^2)/n - x̄^2</span> (from <span class="chem">σ^2 = Σ(x - μ)^2 / n</span>).
        "解碼：你沒有原始數據，只有總和。公式小冊子給出 <span class=\"chem\">σ^2 = (Σ x^2)/n - x̄^2</span>（由 <span class=\"chem\">σ^2 = Σ(x - μ)^2 / n</span> 而來）。",
        // EN: First <span class="chem">x̄ = 60/10 = 6</span>.
        "先求 <span class=\"chem\">x̄ = 60/10 = 6</span>。",
      ],
      // EN: <p><b>Decode:</b> use the totals form of the variance.<br><span class="chem">x̄ = 60/10 = 6</span> <b>[A1]</b>. <span class="chem">σ^2 = 460/10 - 6^2</span> <b>[M1]</b> <span class="chem">= 46 - 36 = 10</span> <b>[A1]</b>, so <span class="chem">σ = √10</span> cm <b>[A1]</b>.</p>
      solution: "<p><b>解碼：</b>使用以總和表示的方差公式。<br><span class=\"chem\">x̄ = 60/10 = 6</span> <b>[A1]</b>。<span class=\"chem\">σ^2 = 460/10 - 6^2</span> <b>[M1]</b> <span class=\"chem\">= 46 - 36 = 10</span> <b>[A1]</b>，所以 <span class=\"chem\">σ = √10</span> cm <b>[A1]</b>。</p>",
    },

    // ── t4-1-q057 · numeric · challenge · SL · SL 4.3 · 3 marks
    "t4-1-q057": {
      // EN: <p>At a company the annual salaries have mean <span class="chem">$48 000</span> and standard deviation <span class="chem">$2500</span>. Next year every employee will receive a <span class="chem">4%</span> pay rise followed by a fixed bonus of <span class="chem">$500</span>. Find the standard deviation of the new salaries, in dollars.</p>
      stem: "<p>某公司的年薪平均值為 <span class=\"chem\">$48 000</span>，標準差為 <span class=\"chem\">$2500</span>。明年每名僱員都會先獲加薪 <span class=\"chem\">4%</span>，然後再獲一筆固定花紅 <span class=\"chem\">$500</span>。求 (Find) 新年薪的標準差（以元計）。</p>",
      hints: [
        // EN: Decode: "a 4% rise then a $500 bonus" is the linear change <span class="chem">y = 1.04x + 500</span>. Which part changes the spread?
        "解碼：「先加薪 4%，再獲 $500 花紅」就是線性變換 <span class=\"chem\">y = 1.04x + 500</span>。哪一部分會改變離散程度？",
        // EN: <span class="chem">σ_y = |a| σ_x</span>; adding the same amount to everyone does not change the spread.
        "<span class=\"chem\">σ_y = |a| σ_x</span>；給每人加上相同的數額不會改變離散程度。",
      ],
      // EN: <p><b>Decode:</b> new salary <span class="chem">y = 1.04x + 500</span> <b>[M1]</b>.<br><span class="chem">σ_y = 1.04 × 2500</span> <b>[A1]</b> <span class="chem">= 2600</span> dollars <b>[A1]</b>. The bonus moves every salary by the same amount, so it does not affect the spread.</p>
      solution: "<p><b>解碼：</b>新年薪 <span class=\"chem\">y = 1.04x + 500</span> <b>[M1]</b>。<br><span class=\"chem\">σ_y = 1.04 × 2500</span> <b>[A1]</b> <span class=\"chem\">= 2600</span> 元 <b>[A1]</b>。花紅使每份年薪移動相同的數額，所以不影響離散程度。</p>",
    },

    // ── t4-1-q058 · mcq · exam · SL · SL 4.4 · 2 marks
    "t4-1-q058": {
      // EN: <p>For <span class="chem">30</span> towns, the correlation coefficient between the number of fast-food outlets <span class="chem">x</span> and the average life expectancy <span class="chem">y</span> is <span class="chem">r = -0.92</span>. Which statement is correct?</p>
      stem: "<p>對於 <span class=\"chem\">30</span> 個城鎮，快餐店數目 <span class=\"chem\">x</span> 與平均預期壽命 <span class=\"chem\">y</span> 之間的相關係數是 <span class=\"chem\">r = -0.92</span>。以下哪一項敘述是正確的？</p>",
      options: [
        // EN: There is a strong negative linear correlation: towns with more fast-food outlets tend to have a lower life expectancy.
        "存在強負線性相關：快餐店較多的城鎮傾向有較低的預期壽命。",
        // EN: Opening more fast-food outlets in a town will cause its life expectancy to fall.
        "在一個城鎮開設更多快餐店會導致其預期壽命下降。",
        // EN: Life expectancy falls by <span class="chem">0.92</span> years for each extra fast-food outlet.
        "每多一間快餐店，預期壽命下降 <span class=\"chem\">0.92</span> 年。",
        // EN: <span class="chem">92%</span> of the towns lie exactly on the regression line.
        "<span class=\"chem\">92%</span> 的城鎮剛好位於迴歸線上。",
      ],
      hints: [
        // EN: The sign of <span class="chem">r</span> gives the direction, and <span class="chem">|r|</span> close to 1 means the points are close to a straight line. What does <span class="chem">r</span> <em>not</em> tell you?
        "<span class=\"chem\">r</span> 的正負號表示方向，而 <span class=\"chem\">|r|</span> 接近 1 表示各點接近一條直線。<span class=\"chem\">r</span> <em>不能</em>告訴你甚麼？",
      ],
      // EN: <p><span class="chem">r = -0.92</span> shows a strong negative linear correlation <b>[A1]</b>. It says nothing about cause and effect, and it is not the gradient <b>[R1]</b>.</p>
      solution: "<p><span class=\"chem\">r = -0.92</span> 顯示強負線性相關 <b>[A1]</b>。它並不說明因果關係，也不是斜率 <b>[R1]</b>。</p>",
      misconception: {
        // EN (option B): Correlation does not show causation. Both variables may depend on something else, such as income or town size.
        "1": "相關並不表示因果。兩個變量可能都取決於其他因素，例如收入或城鎮大小。",
        // EN (option C): r is not the gradient of the regression line. The gradient depends on the units of x and y; r has no units.
        "2": "r 不是迴歸線的斜率。斜率取決於 x 及 y 的單位；r 沒有單位。",
        // EN (option D): r measures how closely the points cluster around a line; it is not a percentage of points on the line.
        "3": "r 量度各點聚集在一條直線附近的緊密程度；它不是位於直線上的點所佔的百分比。",
      },
    },

    // ── t4-1-q059 · short · challenge · SL · SL 4.1, 4.2, 4.3 · 7 marks
    "t4-1-q059": {
      // EN: <p>A swimming coach records the 100 m freestyle times, in seconds, of the <span class="chem">9</span> swimmers in a squad:</p><p class="chem">61, 58, 95, 64, 66, 63, 70, 65, 68.</p><p>Quartiles are found by taking the median of each half, leaving out the overall median.<br>(a) Find the median and the quartiles <span class="chem">Q_1</span> and <span class="chem">Q_3</span>. <strong>[3 marks]</strong><br>(b) Show that <span class="chem">95</span> s is an outlier. <strong>[2 marks]</strong><br>(c) The swimmer who recorded <span class="chem">95</span> s had cramp during the race. State, with a reason, whether the coach should include this time when choosing a typical squad time. <strong>[1 mark]</strong><br>(d) State whether the mean or the median is the better measure of a typical time for these <span class="chem">9</span> swimmers, and why. <strong>[1 mark]</strong></p>
      stem: "<p>一名游泳教練記錄了隊中 <span class=\"chem\">9</span> 名泳手的 100 m 自由泳時間（以秒計）：</p><p class=\"chem\">61, 58, 95, 64, 66, 63, 70, 65, 68.</p><p>四分位數是取前後兩半各自的中位數求得，不計算整體中位數。<br>(a) 求 (Find) 中位數及四分位數 <span class=\"chem\">Q_1</span> 與 <span class=\"chem\">Q_3</span>。<strong>[3 marks]</strong><br>(b) 證明 (Show that) <span class=\"chem\">95</span> s 是一個異常值。<strong>[2 marks]</strong><br>(c) 錄得 <span class=\"chem\">95</span> s 的泳手在比賽中抽筋。說明 (State) 教練在選取一個代表全隊的典型時間時，應否計入這個時間，並給出理由。<strong>[1 mark]</strong><br>(d) 說明 (State) 對這 <span class=\"chem\">9</span> 名泳手而言，平均值與中位數哪一個是較好的典型時間量度，並解釋原因。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: an outlier is not automatically an error. Part (c) asks you to decide, in context, whether the value represents what the coach wants to measure.
        "解碼：異常值不一定是錯誤。(c) 部分要求你結合情境判斷，該數值是否代表教練想量度的東西。",
        // EN: Ordered data: <span class="chem">58, 61, 63, 64, 65, 66, 68, 70, 95</span>. The median is the 5th value.
        "排序後的數據：<span class=\"chem\">58, 61, 63, 64, 65, 66, 68, 70, 95</span>。中位數是第 5 個數值。",
        // EN: Lower half: the 4 values below the median; upper half: the 4 values above it.
        "下半部：中位數以下的 4 個數值；上半部：中位數以上的 4 個數值。",
      ],
      // EN: <p><b>Decode:</b> test 95 with the fence rule, then judge it in context (genuine but unrepresentative).<br>(a) Ordered: <span class="chem">58, 61, 63, 64, 65, 66, 68, 70, 95</span>. Median <span class="chem">65</span> <b>[A1]</b>, <span class="chem">Q_1 = (61 + 63)/2 = 62</span> <b>[A1]</b>, <span class="chem">Q_3 = (68 + 70)/2 = 69</span> <b>[A1]</b>.<br>(b) <span class="chem">IQR = 69 - 62 = 7</span>, upper fence <span class="chem">= 69 + 1.5(7) = 79.5</span> <b>[M1]</b>. <span class="chem">95 &gt; 79.5</span>, so 95 is an outlier <b>[R1]</b>.<br>(c) The time was really swum, but cramp made it unrepresentative of the swimmer's ability, so it should be excluded when describing a typical squad time <b>[R1]</b>.<br>(d) The median: one extreme value pulls the mean upwards but hardly moves the median <b>[R1]</b>.</p>
      solution: "<p><b>解碼：</b>先用界線規則檢驗 95，再結合情境判斷（真實但不具代表性）。<br>(a) 排序後：<span class=\"chem\">58, 61, 63, 64, 65, 66, 68, 70, 95</span>。中位數 <span class=\"chem\">65</span> <b>[A1]</b>，<span class=\"chem\">Q_1 = (61 + 63)/2 = 62</span> <b>[A1]</b>，<span class=\"chem\">Q_3 = (68 + 70)/2 = 69</span> <b>[A1]</b>。<br>(b) <span class=\"chem\">IQR = 69 - 62 = 7</span>，上界線 <span class=\"chem\">= 69 + 1.5(7) = 79.5</span> <b>[M1]</b>。<span class=\"chem\">95 &gt; 79.5</span>，所以 95 是異常值 <b>[R1]</b>。<br>(c) 這個時間確實是游出來的，但抽筋使它不能代表該泳手的能力，所以在描述全隊的典型時間時應把它剔除 <b>[R1]</b>。<br>(d) 中位數：一個極端值會把平均值向上拉，但幾乎不會移動中位數 <b>[R1]</b>。</p>",
      // EN: <p>(a) Median <span class="chem">65</span>, <span class="chem">Q_1 = 62</span>, <span class="chem">Q_3 = 69</span>.<br>(b) <span class="chem">IQR = 7</span>; upper fence <span class="chem">69 + 1.5(7) = 79.5</span> and <span class="chem">95 &gt; 79.5</span>.<br>(c) Leave it out: it is a genuine time, but it was caused by cramp, so it does not represent the swimmer's normal performance.<br>(d) The median, because it is not affected by the outlier (the mean is pulled upwards by 95).</p>
      answer: "<p>(a) 中位數 <span class=\"chem\">65</span>，<span class=\"chem\">Q_1 = 62</span>，<span class=\"chem\">Q_3 = 69</span>。<br>(b) <span class=\"chem\">IQR = 7</span>；上界線 <span class=\"chem\">69 + 1.5(7) = 79.5</span>，而 <span class=\"chem\">95 &gt; 79.5</span>。<br>(c) 剔除它：它是一個真實的時間，但由抽筋造成，所以不代表該泳手的正常表現。<br>(d) 中位數，因為它不受異常值影響（平均值會被 95 向上拉）。</p>",
      markscheme: [
        // EN: A1: Median = 65 s.
        "A1：中位數 = 65 s。",
        // EN: A1: Q₁ = (61 + 63)/2 = 62 s.
        "A1：Q₁ = (61 + 63)/2 = 62 s。",
        // EN: A1: Q₃ = (68 + 70)/2 = 69 s.
        "A1：Q₃ = (68 + 70)/2 = 69 s。",
        // EN: M1: IQR = 7 and upper fence = 69 + 1.5(7) = 79.5.
        "M1：IQR = 7 及上界線 = 69 + 1.5(7) = 79.5。",
        // EN: R1: 95 > 79.5, so 95 is an outlier.
        "R1：95 > 79.5，所以 95 是異常值。",
        // EN: R1: Exclude it (with a reason): the value is genuine but unrepresentative, because it was caused by cramp.
        "R1：剔除它（附理由）：該數值是真實的，但由於是抽筋造成的，所以不具代表性。",
        // EN: R1: Median, because it is resistant to the outlier.
        "R1：中位數，因為它不易受異常值影響。",
      ],
    },

  }
});
