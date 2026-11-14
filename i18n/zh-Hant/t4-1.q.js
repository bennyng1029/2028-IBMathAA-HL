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
      // EN: <p><span class="chem">IQR = 20</span>. Lower fence <span class="chem">= Q_1 - 1.5 × IQR = 28 - 30 = -2</span> <b>[M1 A1]</b>.</p>
      solution: "<p><span class=\"chem\">IQR = 20</span>。下界線 <span class=\"chem\">= Q_1 - 1.5 × IQR = 28 - 30 = -2</span> <b>[M1 A1]</b>.</p>",
    },

    // ── t4-1-q005 · mcq · foundation · SL · SL 4.3 · 3 marks
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
      // EN: <p><span class="chem">ȳ = 50 - 4(12) = 50 - 48 = 2</span> <b>[A1]</b>.<br><span class="chem">σ_Y = |-4| × 2.5 = 4 × 2.5 = 10</span> <b>[M1 A1]</b>.</p>
      solution: "<p><span class=\"chem\">ȳ = 50 - 4(12) = 50 - 48 = 2</span> <b>[A1]</b>.<br><span class=\"chem\">σ_Y = |-4| × 2.5 = 4 × 2.5 = 10</span> <b>[M1 A1]</b>.</p>",
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
      // EN: <p>The masses (in grams) of <span class="chem">20</span> pebbles are summarized in a grouped frequency table: <span class="chem">4</span> pebbles in <span class="chem">10 ≤ m &lt; 20</span>, <span class="chem">10</span> pebbles in <span class="chem">20 ≤ m &lt; 30</span>, and <span class="chem">6</span> pebbles in <span class="chem">30 ≤ m &lt; 40</span>. Using mid-interval values, calculate the estimate of the population standard deviation <span class="chem">σ</span>.</p>
      stem: "<p><span class=\"chem\">20</span> 顆鵝卵石的質量（以克為單位）整理於分組頻數表：<span class=\"chem\">10 ≤ m &lt; 20</span> 有 <span class=\"chem\">4</span> 顆、<span class=\"chem\">20 ≤ m &lt; 30</span> 有 <span class=\"chem\">10</span> 顆、<span class=\"chem\">30 ≤ m &lt; 40</span> 有 <span class=\"chem\">6</span> 顆。利用組中點，計算 (calculate) 總體標準差 <span class=\"chem\">σ</span> 的估計值。</p>",
      hints: [
        // EN: The mid-interval values are <span class="chem">15, 25, 35</span> with frequencies <span class="chem">4, 10, 6</span>.
        "組中點為 <span class=\"chem\">15, 25, 35</span>，對應頻數為 <span class=\"chem\">4, 10, 6</span>。",
        // EN: First find <span class="chem">m̄ = (4×15 + 10×25 + 6×35)/20 = 26</span>, then compute <span class="chem">σ = sqrt((4(15-26)^2 + 10(25-26)^2 + 6(35-26)^2)/20)</span> (or read <span class="mono">σx</span> from GDC).
        "先求 <span class=\"chem\">m̄ = (4×15 + 10×25 + 6×35)/20 = 26</span>，再計算 <span class=\"chem\">σ = sqrt((4(15-26)^2 + 10(25-26)^2 + 6(35-26)^2)/20)</span>（或從 GDC 讀出 <span class=\"mono\">σx</span>）。",
      ],
      // EN: <p>Midpoints are <span class="chem">15, 25, 35</span> <b>[M1]</b>.<br>Mean <span class="chem">m̄ = (60 + 250 + 210) / 20 = 520 / 20 = 26</span> g <b>[A1]</b>.<br>Variance <span class="chem">σ^2 = (4(-11)^2 + 10(-1)^2 + 6(9)^2) / 20 = (484 + 10 + 486) / 20 = 980 / 20 = 49</span>, so <span class="chem">σ = √49 = 7</span> g <b>[M1 A1]</b>.</p>
      solution: "<p>組中點為 <span class=\"chem\">15, 25, 35</span> <b>[M1]</b>.<br>平均數 <span class=\"chem\">m̄ = (60 + 250 + 210) / 20 = 520 / 20 = 26</span> g <b>[A1]</b>.<br>方差 <span class=\"chem\">σ^2 = (4(-11)^2 + 10(-1)^2 + 6(9)^2) / 20 = (484 + 10 + 486) / 20 = 980 / 20 = 49</span>，故 <span class=\"chem\">σ = √49 = 7</span> g <b>[M1 A1]</b>.</p>",
    },

    // ── t4-1-q008 · mcq · exam · SL · SL 4.4, 4.10 · 3 marks
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

    // ── t4-1-q010 · numeric · exam · SL · SL 4.4, 4.10 · 4 marks
    "t4-1-q010": {
      // EN: <p>For a bivariate dataset, the regression line of <span class="chem">y</span> on <span class="chem">x</span> is <span class="chem">y = -0.8x + 25</span> and the regression line of <span class="chem">x</span> on <span class="chem">y</span> is <span class="chem">x = -0.8y + 20</span>. Find the exact value of Pearson's correlation coefficient <span class="chem">r</span>.</p>
      stem: "<p>某雙變數數據集的 <span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 迴歸線為 <span class=\"chem\">y = -0.8x + 25</span>，<span class=\"chem\">x</span> 對 <span class=\"chem\">y</span> 迴歸線為 <span class=\"chem\">x = -0.8y + 20</span>。求 (Find) 皮爾遜相關係數 <span class=\"chem\">r</span> 的準確值。</p>",
      hints: [
        // EN: Recall that <span class="chem">r^2 = a · c</span>, where <span class="chem">a = -0.8</span> is the gradient of <span class="chem">y</span> on <span class="chem">x</span> and <span class="chem">c = -0.8</span> is the coefficient of <span class="chem">y</span> in <span class="chem">x</span> on <span class="chem">y</span>.
        "緊記 <span class=\"chem\">r^2 = a · c</span>，其中 <span class=\"chem\">a = -0.8</span> 是 <span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 的斜率，<span class=\"chem\">c = -0.8</span> 是 <span class=\"chem\">x</span> 對 <span class=\"chem\">y</span> 中 <span class=\"chem\">y</span> 的係數。",
        // EN: Since the slopes are negative, <span class="chem">r</span> must also be negative.
        "由於斜率為負，故 <span class=\"chem\">r</span> 也必須為負。",
      ],
      // EN: <p>Using <span class="chem">r^2 = a · c = (-0.8)(-0.8) = 0.64</span> <b>[M1 A1]</b>.<br>Because the correlation is negative (<span class="chem">a &lt; 0, c &lt; 0</span>), <span class="chem">r = -√0.64 = -0.8</span> <b>[R1 A1]</b>.</p>
      solution: "<p>使用 <span class=\"chem\">r^2 = a · c = (-0.8)(-0.8) = 0.64</span> <b>[M1 A1]</b>.<br>由於相關為負相關（<span class=\"chem\">a &lt; 0, c &lt; 0</span>），<span class=\"chem\">r = -√0.64 = -0.8</span> <b>[R1 A1]</b>.</p>",
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
      // EN: <p>Order the following four steps to correctly evaluate whether a linear regression estimate of <span class="chem">y</span> at <span class="chem">x = x_0</span> is valid and reliable.</p>
      stem: "<p>將以下四個步驟排序，以正確評估在 <span class=\"chem\">x = x_0</span> 處對 <span class=\"chem\">y</span> 所作的線性迴歸估計是否有效且可靠。</p>",
      options: [
        // EN: Plot the scatter diagram and calculate Pearson's correlation coefficient <span class="chem">r</span> to verify a strong linear trend (<span class="chem">|r|</span> close to <span class="chem">1</span>).
        "繪畫散點圖並計算皮爾遜相關係數 <span class=\"chem\">r</span>，以驗證強線性趨勢（<span class=\"chem\">|r|</span> 接近 <span class=\"chem\">1</span>）。",
        // EN: Check that <span class="chem">x_0</span> lies within the observed domain <span class="chem">[x_{min}, x_{max}]</span> so that the prediction is interpolation rather than extrapolation.
        "檢查 <span class=\"chem\">x_0</span> 是否位於觀測定義域 <span class=\"chem\">[x_{min}, x_{max}]</span> 內，確保預測屬內插而非外推。",
        // EN: Find the least-squares regression line of <span class="chem">y</span> on <span class="chem">x</span> (<span class="chem">y = ax + b</span>) using the GDC.
        "利用 GDC 求 <span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 的最小二乘迴歸線（<span class=\"chem\">y = ax + b</span>）。",
        // EN: Substitute <span class="chem">x = x_0</span> into <span class=\"chem">y = ax + b</span> and report the estimated value <span class="chem">ŷ</span> to 3 significant figures.
        "將 <span class=\"chem\">x = x_0</span> 代入 <span class=\"chem\">y = ax + b</span>，並報告估計值 <span class=\"chem\">ŷ</span>（準確至 3 位有效數字）。",
      ],
      hints: [
        // EN: First verify linearity (<span class="chem">r</span>), then check interpolation (<span class="chem">x_0 ∈ [x_{min}, x_{max}]</span>), then compute the regression equation and substitute <span class="chem">x_0</span>.
        "先驗證線性關係（<span class=\"chem\">r</span>），再檢查內插（<span class=\"chem\">x_0 ∈ [x_{min}, x_{max}]</span>），然後計算迴歸方程並代入 <span class=\"chem\">x_0</span>。",
      ],
      // EN: <p>A reliable linear regression prediction requires (1) confirming strong linear correlation via scatter plot and <span class="chem">r</span>, (2) checking that <span class="chem">x_0</span> is within the data range (interpolation), (3) finding the <span class="chem">y</span>-on-<span class="chem">x</span> regression equation, and (4) substituting <span class="chem">x_0</span>.</p>
      solution: "<p>可靠的線性迴歸預測需要：(1) 透過散點圖與 <span class=\"chem\">r</span> 確認強線性相關，(2) 檢查 <span class=\"chem\">x_0</span> 在數據範圍內（內插），(3) 求得 <span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 的迴歸方程，以及 (4) 代入 <span class=\"chem\">x_0</span>。</p>",
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
      // EN: <p>A cumulative frequency study of the daily commuting times <span class="chem">t</span> (in minutes) of <span class="chem">120</span> office workers gives minimum <span class="chem">8</span>, lower quartile <span class="chem">Q_1 = 22</span>, median <span class="chem">M = 31</span>, upper quartile <span class="chem">Q_3 = 42</span>, and maximum <span class="chem">78</span>.<br>(a) Find the interquartile range (<span class="chem">IQR</span>) and determine how many workers have a commuting time greater than <span class="chem">42</span> minutes. <strong>[2 marks]</strong><br>(b) Show mathematically that the maximum value <span class="chem">78</span> minutes is an outlier, and state the smallest commuting time that would be classified as an upper outlier. <strong>[4 marks]</strong></p>
      stem: "<p>一項針對 <span class=\"chem\">120</span> 名上班族每日通勤時間 <span class=\"chem\">t</span>（以分鐘為單位）的累積頻數研究顯示：最小值為 <span class=\"chem\">8</span>、下四分位數 <span class=\"chem\">Q_1 = 22</span>、中位數 <span class=\"chem\">M = 31</span>、上四分位數 <span class=\"chem\">Q_3 = 42</span>，最大值為 <span class=\"chem\">78</span>。<br>(a) 求 (Find) 四分位數間距（<span class=\"chem\">IQR</span>），並判斷有多少名上班族的通勤時間大於 <span class=\"chem\">42</span> 分鐘。<strong>[2 marks]</strong><br>(b) 以數學方法證明 (Show mathematically that) 最大值 <span class=\"chem\">78</span> 分鐘是異常值，並寫出會被列為上異常值的最小通勤時間。<strong>[4 marks]</strong></p>",
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
        // EN: A1: States that any value strictly above 72 minutes (or 73 minutes if rounded to nearest integer minute) is an upper outlier.
        "A1：寫出任何嚴格大於 72 分鐘（若取整數分鐘則為 73 分鐘）的數值皆為上異常值。",
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
      // EN: <p>For two variables <span class="chem">x</span> and <span class="chem">y</span>, the standard deviation of <span class="chem">y</span> is three times the standard deviation of <span class="chem">x</span> (<span class="chem">σ_y = 3σ_x</span>). Given that the gradient of the regression line of <span class="chem">y</span> on <span class="chem">x</span> is <span class="chem">a = 2.4</span>, find the coefficient <span class="chem">c</span> in the regression line of <span class="chem">x</span> on <span class="chem">y</span> (<span class="chem">x = cy + d</span>).</p>
      stem: "<p>對於兩個變數 <span class=\"chem\">x</span> 與 <span class=\"chem\">y</span>，<span class=\"chem\">y</span> 的標準差是 <span class=\"chem\">x</span> 的標準差之三倍（<span class=\"chem\">σ_y = 3σ_x</span>）。已知 <span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 迴歸線的斜率為 <span class=\"chem\">a = 2.4</span>，求 (find) <span class=\"chem\">x</span> 對 <span class=\"chem\">y</span> 迴歸線（<span class=\"chem\">x = cy + d</span>）中的係數 <span class=\"chem\">c</span>。</p>",
      hints: [
        // EN: Use <span class="chem">a = r(σ_y / σ_x) = 3r</span> to find Pearson's correlation coefficient <span class="chem">r</span>.
        "利用 <span class=\"chem\">a = r(σ_y / σ_x) = 3r</span> 求皮爾遜相關係數 <span class=\"chem\">r</span>。",
        // EN: Then substitute <span class="chem">r</span> into <span class="chem">c = r(σ_x / σ_y) = r / 3</span> (or use <span class="chem">a · c = r^2</span>).
        "然後將 <span class=\"chem\">r</span> 代入 <span class=\"chem\">c = r(σ_x / σ_y) = r / 3</span>（或使用 <span class=\"chem\">a · c = r^2</span>）。",
      ],
      // EN: <p>Since <span class="chem">a = r(σ_y / σ_x) = 3r = 2.4</span>, we get <span class="chem">r = 2.4 / 3 = 0.8</span> <b>[M1 A1]</b>.<br>Then <span class="chem">c = r(σ_x / σ_y) = 0.8 / 3 = 4 / 15 ≈ 0.267</span> <b>[M1 A2]</b>. (Students may type <span class="mono">4/15</span> or <span class="mono">0.267</span>.)</p>
      solution: "<p>由於 <span class=\"chem\">a = r(σ_y / σ_x) = 3r = 2.4</span>，得 <span class=\"chem\">r = 2.4 / 3 = 0.8</span> <b>[M1 A1]</b>.<br>因此 <span class=\"chem\">c = r(σ_x / σ_y) = 0.8 / 3 = 4 / 15 ≈ 0.267</span> <b>[M1 A2]</b>。（學生可輸入 <span class=\"mono\">4/15</span> 或 <span class=\"mono\">0.267</span>。）</p>",
    },

    // ── t4-1-q018 · short · challenge · SL · SL 4.2, 4.3 · 6 marks
    "t4-1-q018": {
      // EN: <p>Six positive integers are arranged in ascending order: <span class="chem">a, b, 10, 12, c, d</span>.<br>The unique mode is <span class="chem">15</span>, the range is <span class="chem">12</span>, and the mean of all six integers is <span class="chem">x̄ = 10.5</span>.<br>(a) State the values of <span class="chem">c</span> and <span class="chem">d</span>, and hence find <span class="chem">a</span>. <strong>[3 marks]</strong><br>(b) Find the value of <span class="chem">b</span> and the interquartile range (<span class="chem">IQR = Q_3 - Q_1</span>) of the six integers. <strong>[3 marks]</strong></p>
      stem: "<p>六個正整數按遞增順序排列：<span class=\"chem\">a, b, 10, 12, c, d</span>。<br>其唯一眾數為 <span class=\"chem\">15</span>，全距為 <span class=\"chem\">12</span>，這六個整數的平均數為 <span class=\"chem\">x̄ = 10.5</span>。<br>(a) 寫出 (State) <span class=\"chem\">c</span> 與 <span class=\"chem\">d</span> 的值，並由此求 (hence find) <span class=\"chem\">a</span>。<strong>[3 marks]</strong><br>(b) 求 (Find) <span class=\"chem\">b</span> 的值及這六個整數的四分位數間距（<span class=\"chem\">IQR = Q_3 - Q_1</span>）。<strong>[3 marks]</strong></p>",
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

  }
});
