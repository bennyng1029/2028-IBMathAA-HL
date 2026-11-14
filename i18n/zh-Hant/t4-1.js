/* t4-1 — zh-Hant translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't4-1', {
  strings: {

    // page title (browser tab)
    "4.1 Descriptive statistics, correlation and regression | Analysis Lab": "4.1 描述統計、相關與迴歸 | Analysis Lab",

    // Descriptive statistics, correlation and regression > page header > p
    "Topic 4.1 · SL 4.1–4.4, 4.10": "課題 4.1 · SL 4.1–4.4, 4.10",

    // Descriptive statistics, correlation and regression > page header > h1
    "Descriptive statistics, correlation and regression": "描述統計、相關與迴歸",

    // Descriptive statistics, correlation and regression > page header > span
    "How do we summarize center, spread, and linear relationships in noisy data—and why does the direction of prediction change the regression line we must use?": "我們如何概括含雜訊數據的集中趨勢、離差與線性關係——又為何預測方向會改變我們必須選用的迴歸線？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "學習清單",

    // What you need to be able to do > h2
    "What you need to be able to do": "你需要掌握的能力",

    // What you need to be able to do > checklist > span
    "Distinguish population vs sample and discrete vs continuous data, and compare simple random, systematic, stratified, quota, and convenience sampling.": "區分總體與樣本以及離散與連續數據，並比較簡單隨機抽樣、系統抽樣、分層抽樣、配額抽樣與便利抽樣。",

    // What you need to be able to do > checklist > span
    "Interpret histograms, cumulative frequency graphs, and box-and-whisker plots, compare two distributions using box plots, and test formally for outliers using <span class=\"chem\">[Q_1 - 1.5 IQR, Q_3 + 1.5 IQR]</span>.": "詮釋直方圖、累積頻數圖與框線圖，利用框線圖比較兩個分佈，並利用 <span class=\"chem\">[Q_1 - 1.5 IQR, Q_3 + 1.5 IQR]</span> 正式檢驗異常值。",

    // What you need to be able to do > checklist > span
    "Estimate the mean <span class=\"chem\">x̄</span> and population standard deviation <span class=\"chem\">σ</span> from grouped frequency tables using mid-interval values.": "利用組中點從分組頻數表估計平均數 <span class=\"chem\">x̄</span> 與總體標準差 <span class=\"chem\">σ</span>。",

    // What you need to be able to do > checklist > span
    "Find the new mean, variance, standard deviation, and <span class=\"chem\">IQR</span> after linear coding <span class=\"chem\">Y = aX + b</span> (<span class=\"chem\">ȳ = a x̄ + b</span>, <span class=\"chem\">σ_Y = |a|σ_X</span>).": "求線性編碼 <span class=\"chem\">Y = aX + b</span> 後的新平均數、方差、標準差與 <span class=\"chem\">IQR</span>（<span class=\"chem\">ȳ = a x̄ + b</span>，<span class=\"chem\">σ_Y = |a|σ_X</span>）。",

    // What you need to be able to do > checklist > span
    "Find Pearson's correlation coefficient <span class=\"chem\">r</span> and the regression line from raw data on a GDC, interpret <span class=\"chem\">r</span> and the parameters <span class=\"chem\">a</span> and <span class=\"chem\">b</span> in context, and judge whether a prediction is reliable using correlation strength and interpolation vs extrapolation.": "用 GDC 從原始數據求皮爾遜相關係數 <span class=\"chem\">r</span> 及迴歸直線，在情境中詮釋 <span class=\"chem\">r</span> 及參數 <span class=\"chem\">a</span> 與 <span class=\"chem\">b</span>，並根據相關強度及內插與外推判斷預測是否可靠。",

    // What you need to be able to do > checklist > span
    "Choose between the regression line of <span class=\"chem\">y</span> on <span class=\"chem\">x</span> (<span class=\"chem\">y = ax + b</span>) and <span class=\"chem\">x</span> on <span class=\"chem\">y</span> (<span class=\"chem\">x = cy + d</span>), and use their intersection at the mean point <span class=\"chem\">(x̄, ȳ)</span>.": "在 <span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 的迴歸線（<span class=\"chem\">y = ax + b</span>）與 <span class=\"chem\">x</span> 對 <span class=\"chem\">y</span> 的迴歸線（<span class=\"chem\">x = cy + d</span>）之間作選擇，並運用兩者在平均點 <span class=\"chem\">(x̄, ȳ)</span> 的交點。",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "題型解碼",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "題型解碼：辨識應採用的技巧",

    // Question decoder: spotting which technique to use > p
    "Topic 4.1 questions test whether you know which summary measure, outlier rule, or regression line matches the wording of the prompt. Use this table to translate exam phrases directly into your working.": "課題 4.1 的題目考驗你能否根據題目字眼選出正確的統計量、異常值準則或迴歸線。利用下表把考題字眼直接轉化為算式。",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — Descriptive statistics, correlation and regression": "題型解碼 — 描述統計、相關與迴歸",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "題目中的常見字眼",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "實際含義（公式與列式）",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1（不可用計算機）與 Paper 2（可用 GDC）策略",

    // Question decoder: spotting which technique to use > table > th
    "“Estimate <span class=\"chem\">y</span> when <span class=\"chem\">x = x_0</span>”": "「當 <span class=\"chem\">x = x_0</span> 時，估計 <span class=\"chem\">y</span>」",

    // Question decoder: spotting which technique to use > table > td
    "Use the regression line of <strong><span class=\"chem\">y</span> on <span class=\"chem\">x</span></strong>: <span class=\"chem\">y = ax + b</span> (minimizes vertical squared residuals).": "使用<strong><span class=\"chem\">y</span> 對 <span class=\"chem\">x</span></strong> 的迴歸線：<span class=\"chem\">y = ax + b</span>（使鉛垂殘差平方和最小）。",

    // Question decoder: spotting which technique to use > table > td
    "Substitute <span class=\"chem\">x = x_0</span> into <span class=\"chem\">y = ax + b</span>. On GDC, run <span class=\"mono\">LinReg(ax+b)</span> with <span class=\"mono\">Xlist = L1, Ylist = L2</span>.": "將 <span class=\"chem\">x = x_0</span> 代入 <span class=\"chem\">y = ax + b</span>。在 GDC 上以 <span class=\"mono\">Xlist = L1, Ylist = L2</span> 執行 <span class=\"mono\">LinReg(ax+b)</span>。",

    // Question decoder: spotting which technique to use > table > th
    "“Estimate <span class=\"chem\">x</span> when <span class=\"chem\">y = y_0</span>” (when neither variable is controlled)": "「當 <span class=\"chem\">y = y_0</span> 時，估計 <span class=\"chem\">x</span>」（當兩個變數均非受控變數時）",

    // Question decoder: spotting which technique to use > table > td
    "Use the regression line of <strong><span class=\"chem\">x</span> on <span class=\"chem\">y</span></strong>: <span class=\"chem\">x = cy + d</span> (minimizes horizontal squared residuals).": "使用<strong><span class=\"chem\">x</span> 對 <span class=\"chem\">y</span></strong> 的迴歸線：<span class=\"chem\">x = cy + d</span>（使水平殘差平方和最小）。",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Never</strong> rearrange <span class=\"chem\">y = ax + b</span> to solve for <span class=\"chem\">x</span>! On GDC, swap the lists in <span class=\"mono\">LinReg(ax+b)</span>: set <span class=\"mono\">Xlist = L2 (y), Ylist = L1 (x)</span>.": "<strong>切勿</strong>移項 <span class=\"chem\">y = ax + b</span> 來解 <span class=\"chem\">x</span>！在 GDC 上互換 <span class=\"mono\">LinReg(ax+b)</span> 的列表：設 <span class=\"mono\">Xlist = L2 (y), Ylist = L1 (x)</span>。",

    // Question decoder: spotting which technique to use > table > th
    "“Given both regression lines <span class=\"chem\">y = ax + b</span> and <span class=\"chem\">x = cy + d</span>, find <span class=\"chem\">x̄</span> and <span class=\"chem\">ȳ</span>”": "「已知兩條迴歸線 <span class=\"chem\">y = ax + b</span> 與 <span class=\"chem\">x = cy + d</span>，求 <span class=\"chem\">x̄</span> 與 <span class=\"chem\">ȳ</span>」",

    // Question decoder: spotting which technique to use > table > td
    "Both regression lines <strong>always</strong> intersect at the mean point <span class=\"chem\">(x̄, ȳ)</span>.": "兩條迴歸線<strong>永遠</strong>相交於平均點 <span class=\"chem\">(x̄, ȳ)</span>。",

    // Question decoder: spotting which technique to use > table > td
    "Solve the two linear equations simultaneously for <span class=\"chem\">x</span> and <span class=\"chem\">y</span> (by substitution on Paper 1, or graph/system solver on Paper 2).": "聯立求解這兩條線性方程以求 <span class=\"chem\">x</span> 與 <span class=\"chem\">y</span>（Paper 1 用代入法，Paper 2 用圖像或方程組求解器）。",

    // Question decoder: spotting which technique to use > table > th
    "“Determine whether <span class=\"chem\">v</span> is an outlier”": "「判斷 <span class=\"chem\">v</span> 是否為異常值」",

    // Question decoder: spotting which technique to use > table > td
    "Compute <span class=\"chem\">IQR = Q_3 - Q_1</span>, lower fence <span class=\"chem\">Q_1 - 1.5 IQR</span>, and upper fence <span class=\"chem\">Q_3 + 1.5 IQR</span>.": "計算 <span class=\"chem\">IQR = Q_3 - Q_1</span>、下界線 <span class=\"chem\">Q_1 - 1.5 IQR</span> 及上界線 <span class=\"chem\">Q_3 + 1.5 IQR</span>。",

    // Question decoder: spotting which technique to use > table > td
    "Write down the numerical value of the relevant fence and explicitly compare <span class=\"chem\">v &lt; Q_1 - 1.5 IQR</span> or <span class=\"chem\">v &gt; Q_3 + 1.5 IQR</span> for the reasoning mark <b>[R1]</b>.": "寫出相關界線的數值，並明確比較 <span class=\"chem\">v &lt; Q_1 - 1.5 IQR</span> 或 <span class=\"chem\">v &gt; Q_3 + 1.5 IQR</span> 以取得推理分 <b>[R1]</b>。",

    // Question decoder: spotting which technique to use > table > th
    "“Comment on the validity / reliability of your estimate”": "「評論你的估計之有效性／可靠性」",

    // Question decoder: spotting which technique to use > table > td
    "Check two conditions: <strong>1.</strong> Is <span class=\"chem\">|r|</span> close to <span class=\"chem\">1</span>? <strong>2.</strong> Is the input inside the observed data range (<strong>interpolation</strong>) or outside it (<strong>extrapolation</strong>)?": "檢查兩個條件：<strong>1.</strong> <span class=\"chem\">|r|</span> 是否接近 <span class=\"chem\">1</span>？<strong>2.</strong> 輸入值是否在觀測數據範圍內（<strong>內插</strong>）抑或在其外（<strong>外推</strong>）？",

    // Question decoder: spotting which technique to use > table > td
    "If the input lies outside <span class=\"chem\">[x_{min}, x_{max}]</span>, state: <em>“Unreliable because it requires extrapolation outside the range of the data.”</em>": "若輸入值落在 <span class=\"chem\">[x_{min}, x_{max}]</span> 以外，請寫明：<em>「不可靠，因為這需要對數據範圍以外作外推。」</em>",

    // Question decoder: spotting which technique to use > table > th
    "“Each data value <span class=\"chem\">x</span> is transformed to <span class=\"chem\">y = ax + b</span>”": "「每個數據值 <span class=\"chem\">x</span> 皆經變換為 <span class=\"chem\">y = ax + b</span>」",

    // Question decoder: spotting which technique to use > table > td
    "Mean/median/quartiles scale and shift: <span class=\"chem\">ȳ = a x̄ + b</span> (if <span class=\"chem\">a &lt; 0</span>, <span class=\"chem\">Q_1</span> and <span class=\"chem\">Q_3</span> swap). Spread measures only scale by <span class=\"chem\">|a|</span>: <span class=\"chem\">σ_y = |a|σ_x</span>, <span class=\"chem\">σ_y^2 = a^2 σ_x^2</span>.": "平均數／中位數／四分位數同時受伸縮與平移影響：<span class=\"chem\">ȳ = a x̄ + b</span>（若 <span class=\"chem\">a &lt; 0</span>，<span class=\"chem\">Q_1</span> 與 <span class=\"chem\">Q_3</span> 互換）。離差量度只受 <span class=\"chem\">|a|</span> 倍數伸縮影響：<span class=\"chem\">σ_y = |a|σ_x</span>，<span class=\"chem\">σ_y^2 = a^2 σ_x^2</span>。",

    // Question decoder: spotting which technique to use > table > td
    "Adding <span class=\"chem\">b</span> has <strong>zero effect</strong> on standard deviation, variance, or <span class=\"chem\">IQR</span>. If <span class=\"chem\">a &lt; 0</span>, use <span class=\"chem\">|a|</span> (the standard deviation never becomes negative).": "加上 <span class=\"chem\">b</span> 對標準差、方差或 <span class=\"chem\">IQR</span> <strong>毫無影響</strong>。若 <span class=\"chem\">a &lt; 0</span>，要用 <span class=\"chem\">|a|</span>（標準差永遠不會是負數）。",

    // Question decoder: spotting which technique to use > not needed for IB > p
    "<strong>What is NOT in the IB Math AA HL syllabus:</strong> Hypothesis testing (<span class=\"chem\">χ^2</span> tests of independence, <span class=\"chem\">χ^2</span> goodness-of-fit, <span class=\"chem\">t</span>-tests, <span class=\"chem\">z</span>-tests), Spearman's rank correlation <span class=\"chem\">r_s</span> and unbiased sample variance <span class=\"chem\">s_{n-1}^2</span> belong to IB Math AI. Calculating Pearson's <span class=\"chem\">r</span> or regression slopes by hand from summation formulas is not required in AA: use your GDC. In IB Math AA, you always find <span class=\"chem\">r</span>, <span class=\"chem\">σ_x</span>, and regression equations directly from your GDC or from summary clues.": "<strong>IB Math AA HL 課程大綱不涵蓋的內容：</strong>假設檢定（<span class=\"chem\">χ^2</span> 獨立性檢定、<span class=\"chem\">χ^2</span> 擬合優度檢定、<span class=\"chem\">t</span> 檢定、<span class=\"chem\">z</span> 檢定）、斯皮爾曼等級相關係數 <span class=\"chem\">r_s</span>及無偏樣本方差 <span class=\"chem\">s_{n-1}^2</span> 均屬 IB Math AI。AA 不要求用求和公式手算皮爾遜 <span class=\"chem\">r</span> 或迴歸斜率：請使用 GDC。在 IB Math AA 中，你一律直接透過 GDC 或從摘要線索求取 <span class=\"chem\">r</span>、<span class=\"chem\">σ_x</span> 與迴歸方程。",

    // Sampling methods, cumulative frequency and box plots > data-toc attribute
    "Sampling & box plots": "抽樣與框線圖",

    // Sampling methods, cumulative frequency and box plots > h2
    "Sampling methods, cumulative frequency and box plots": "抽樣方法、累積頻數與框線圖",

    // Sampling methods, cumulative frequency and box plots > p
    "A <dfn data-def=\"The complete set of all individuals, items, or measurements of interest in a statistical study.\">population</dfn> is the entire group you want to describe, whereas a <dfn data-def=\"A subset of the population selected for observation and measurement.\">sample</dfn> is a smaller subset you actually measure. Data can be <strong>discrete</strong> (counted in exact steps, such as number of siblings) or <strong>continuous</strong> (measured on a continuous scale, such as height or reaction time).": "<dfn data-def=\"統計研究中所關心的所有個體、項目或量度結果的完整集合。\">總體 <span class=\"en-term\">(population)</span></dfn>是你想描述的整個群體，而<dfn data-def=\"從總體中選出以供觀察和量度的子集。\">樣本 <span class=\"en-term\">(sample)</span></dfn>則是你實際量度的較小子集。數據可分為<strong>離散數據</strong>（按準確步長點算，例如兄弟姊妹數目）或<strong>連續數據</strong>（在連續尺度上量度，例如身高或反應時間）。",

    // Sampling methods, cumulative frequency and box plots > data-def attribute
    "The complete set of all individuals, items, or measurements of interest in a statistical study.": "統計研究中所關心的所有個體、項目或量度結果的完整集合。",

    // Sampling methods, cumulative frequency and box plots > data-def attribute
    "A subset of the population selected for observation and measurement.": "從總體中選出以供觀察和量度的子集。",

    // Sampling methods, cumulative frequency and box plots > table > caption
    "Comparison of the five IB sampling techniques (SL 4.1)": "IB 五種抽樣方法比較（SL 4.1）",

    // Sampling methods, cumulative frequency and box plots > table > th
    "Sampling method": "抽樣方法",

    // Sampling methods, cumulative frequency and box plots > table > th
    "How the sample is chosen": "如何選取樣本",

    // Sampling methods, cumulative frequency and box plots > table > th
    "Key strength &amp; main source of bias": "主要優點與偏差來源",

    // Sampling methods, cumulative frequency and box plots > table > th
    "Simple random": "簡單隨機抽樣",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Every member of the population (and every subset of size <span class=\"chem\">n</span>) has an equal probability of being chosen, using a random number generator.": "利用隨機數生成器，使總體中每個成員（及每個大小為 <span class=\"chem\">n</span> 的子集）均有相等機會被選中。",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Unbiased in expectation, but requires a complete list (sampling frame) of the entire population.": "期望上無偏，但需要整個總體的完整名單（抽樣框）。",

    // Sampling methods, cumulative frequency and box plots > table > th
    "Systematic": "系統抽樣",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Pick a random starting point among the first <span class=\"chem\">k</span> items, then select every <span class=\"chem\">k</span>-th member (<span class=\"chem\">k = N / n</span>) along an ordered list.": "在首 <span class=\"chem\">k</span> 個項目中隨機挑選起點，然後沿有序名單每隔 <span class=\"chem\">k</span> 個選取一個成員（<span class=\"chem\">k = N / n</span>）。",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Fast and evenly spread, but biased if the list has a hidden periodic cycle matching <span class=\"chem\">k</span>.": "快速且分佈均勻，但若名單存在與 <span class=\"chem\">k</span> 相吻合的隱藏週期，便會產生偏差。",

    // Sampling methods, cumulative frequency and box plots > table > th
    "Stratified": "分層抽樣",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Divide the population into distinct subgroups (<em>strata</em>) and take a <strong>simple random sample</strong> from each stratum proportional to its size: <span class=\"chem\">n_i = (N_i / N) × n</span>.": "把總體分為不同子群（<em>層</em>），並按每層人數比例從各層抽取<strong>簡單隨機樣本</strong>：<span class=\"chem\">n_i = (N_i / N) × n</span>。",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Guarantees proportional representation of every subgroup; still requires a full list within each stratum.": "保證每個子群皆按比例具代表性；仍需每層內的完整名單。",

    // Sampling methods, cumulative frequency and box plots > table > th
    "Quota": "配額抽樣",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Divide the population into subgroups like stratified sampling, but select subjects <strong>non-randomly</strong> (by convenience) until each subgroup quota is filled.": "像分層抽樣般把總體分組，但以<strong>非隨機</strong>方式（按便利）選取對象，直至填滿每組配額。",

    // Sampling methods, cumulative frequency and box plots > table > td
    "No population list needed, but prone to interviewer selection bias.": "無須總體名單，但容易受訪員選擇偏差影響。",

    // Sampling methods, cumulative frequency and box plots > table > th
    "Convenience": "便利抽樣",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Poll whichever individuals are easiest to reach first (e.g., the first 20 students walking into the library).": "訪問最容易接觸到的個體（例如最先走進圖書館的 20 名學生）。",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Quickest method, but severely biased because the sample rarely represents the whole population.": "最快的方法，但偏差嚴重，因樣本很少能代表整個總體。",

    // Sampling methods, cumulative frequency and box plots > h3
    "Cumulative frequency graphs, quartiles and formal outlier fences": "累積頻數圖、四分位數與正式異常值界線",

    // Sampling methods, cumulative frequency and box plots > p
    "For grouped continuous data, a <strong>histogram</strong> plots class intervals on the horizontal axis and frequency on the vertical axis (with no gaps between bars). A <strong>cumulative frequency graph</strong> plots the running total of frequencies against the <strong>upper boundary</strong> of each class interval.": "對於分組連續數據，<strong>直方圖</strong>在橫軸繪示組區間、縱軸繪示頻數（棒條之間沒有空隙）。<strong>累積頻數圖</strong>則把頻數的累計總和對各組區間的<strong>上組界</strong>繪圖。",

    // Sampling methods, cumulative frequency and box plots > p
    "From a cumulative frequency curve of <span class=\"chem\">n</span> total observations, read off horizontal lines at:": "從共有 <span class=\"chem\">n</span> 個觀測值的累積頻數曲線上，在以下水平線讀出數值：",

    // Sampling methods, cumulative frequency and box plots > li
    "<strong>Lower quartile <span class=\"chem\">Q_1</span></strong>: <span class=\"chem\">25%</span> of <span class=\"chem\">n</span> (<span class=\"chem\">0.25n</span>)": "<strong>下四分位數 <span class=\"chem\">Q_1</span></strong>：<span class=\"chem\">n</span> 的 <span class=\"chem\">25%</span>（<span class=\"chem\">0.25n</span>）",

    // Sampling methods, cumulative frequency and box plots > li
    "<strong>Median <span class=\"chem\">M</span> (or <span class=\"chem\">Q_2</span>)</strong>: <span class=\"chem\">50%</span> of <span class=\"chem\">n</span> (<span class=\"chem\">0.50n</span>)": "<strong>中位數 <span class=\"chem\">M</span>（或 <span class=\"chem\">Q_2</span>）</strong>：<span class=\"chem\">n</span> 的 <span class=\"chem\">50%</span>（<span class=\"chem\">0.50n</span>）",

    // Sampling methods, cumulative frequency and box plots > li
    "<strong>Upper quartile <span class=\"chem\">Q_3</span></strong>: <span class=\"chem\">75%</span> of <span class=\"chem\">n</span> (<span class=\"chem\">0.75n</span>)": "<strong>上四分位數 <span class=\"chem\">Q_3</span></strong>：<span class=\"chem\">n</span> 的 <span class=\"chem\">75%</span>（<span class=\"chem\">0.75n</span>）",

    // Sampling methods, cumulative frequency and box plots > equation > maths line
    "IQR = <i>Q</i><sub>3</sub> − <i>Q</i><sub>1</sub> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Lower fence = <i>Q</i><sub>1</sub> − 1.5 × IQR &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Upper fence = <i>Q</i><sub>3</sub> + 1.5 × IQR": "IQR = <i>Q</i><sub>3</sub> − <i>Q</i><sub>1</sub> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 下界線 = <i>Q</i><sub>1</sub> − 1.5 × IQR &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 上界線 = <i>Q</i><sub>3</sub> + 1.5 × IQR",

    // Sampling methods, cumulative frequency and box plots > equation > dt
    "IQR": "IQR",

    // Sampling methods, cumulative frequency and box plots > equation > dd
    "interquartile range (spread of the middle 50% of data)": "四分位數間距（中間 50% 數據的離差）",

    // Sampling methods, cumulative frequency and box plots > equation > dd
    "lower quartile (25th percentile) and upper quartile (75th percentile)": "下四分位數（第 25 百分位數）與上四分位數（第 75 百分位數）",

    // Sampling methods, cumulative frequency and box plots > equation > dt
    // widget string (assets/js/widgets-t4-1.js)
    "Outlier": "異常值",

    // Sampling methods, cumulative frequency and box plots > equation > dd
    "any data value strictly below the lower fence or strictly above the upper fence": "任何嚴格小於下界線或嚴格大於上界線的數據值",

    // Sampling methods, cumulative frequency and box plots > formula booklet note > p
    "<strong>Formula Booklet check (SL 4.2):</strong> <span class=\"chem\">IQR = Q_3 - Q_1</span> is in your Formula Booklet, but the outlier fence multipliers <span class=\"chem\">Q_1 - 1.5 × IQR</span> and <span class=\"chem\">Q_3 + 1.5 × IQR</span> are <strong>not printed in the booklet</strong>—memorize the <span class=\"chem\">1.5 × IQR</span> rule!": "<strong>公式手冊核對（SL 4.2）：</strong><span class=\"chem\">IQR = Q_3 - Q_1</span> 載於公式手冊內，但異常值界線倍數 <span class=\"chem\">Q_1 - 1.5 × IQR</span> 與 <span class=\"chem\">Q_3 + 1.5 × IQR</span> <strong>並未印於手冊中</strong>——務必記熟 <span class=\"chem\">1.5 × IQR</span> 準則！",

    // Sampling methods, cumulative frequency and box plots > widget > data-title attribute
    "Interactive box plot, quartiles and 1.5 × IQR outlier detector": "互動框線圖、四分位數與 1.5 × IQR 異常值檢測器",

    // Sampling methods, cumulative frequency and box plots > widget > figcaption
    "Drag the 11th data value <span class=\"chem\">x_{11}</span> across the dashed <span class=\"chem\">1.5 × IQR</span> fences. Notice that when <span class=\"chem\">x_{11}</span> crosses the upper fence, the right whisker snaps back to the largest non-outlier in the dataset while <span class=\"chem\">x_{11}</span> is marked separately as an outlier.": "拖動第 11 個數據值 <span class=\"chem\">x_{11}</span> 越過虛線 <span class=\"chem\">1.5 × IQR</span> 界線。留意當 <span class=\"chem\">x_{11}</span> 越過上界線時，右鬚會縮回數據集中最大的非異常值，而 <span class=\"chem\">x_{11}</span> 則被獨立標記為異常值。",

    // Sampling methods, cumulative frequency and box plots > worked example > h3
    "Testing for outliers and adjusting box-plot whiskers": "檢驗異常值並調整框線圖觸鬚",

    // Sampling methods, cumulative frequency and box plots > worked example > p
    "The reaction times (in milliseconds) of 15 athletes have minimum <span class=\"chem\">142</span>, lower quartile <span class=\"chem\">Q_1 = 180</span>, median <span class=\"chem\">196</span>, upper quartile <span class=\"chem\">Q_3 = 212</span>, and two largest values <span class=\"chem\">254</span> and <span class=\"chem\">268</span>. Determine which, if any, of the extreme values are outliers, and state the endpoints of the two whiskers on a box-and-whisker plot. <strong>[5 marks]</strong>": "15 名運動員的反應時間（以毫秒為單位）之最小值為 <span class=\"chem\">142</span>、下四分位數 <span class=\"chem\">Q_1 = 180</span>、中位數 <span class=\"chem\">196</span>、上四分位數 <span class=\"chem\">Q_3 = 212</span>，最大的兩個數值為 <span class=\"chem\">254</span> 與 <span class=\"chem\">268</span>。判斷 (Determine) 這些極端值中是否有異常值，並寫出框線圖兩條觸鬚的端點。<strong>[5 marks]</strong>",

    // Sampling methods, cumulative frequency and box plots > worked example > data-title attribute
    "Calculate the interquartile range (IQR)": "計算四分位數間距 (IQR)",

    // Sampling methods, cumulative frequency and box plots > worked example > p
    "The outlier fences depend on IQR = Q₃ − Q₁.": "異常值界線取決於 IQR = Q₃ − Q₁。",

    // Sampling methods, cumulative frequency and box plots > worked example > data-title attribute
    "Compute both 1.5 × IQR outlier fences": "計算兩條 1.5 × IQR 異常值界線",

    // Sampling methods, cumulative frequency and box plots > worked example > p
    "Any value below Q₁ − 1.5(IQR) or above Q₃ + 1.5(IQR) is classified as an outlier.": "任何小於 Q₁ − 1.5(IQR) 或大於 Q₃ + 1.5(IQR) 的數值皆列為異常值。",

    // Sampling methods, cumulative frequency and box plots > worked example > maths line
    "Lower fence = 180 − 48 = 132, Upper fence = 212 + 48 = 260 <b>[M1 A1]</b>": "下界線 = 180 − 48 = 132，上界線 = 212 + 48 = 260 <b>[M1 A1]</b>",

    // Sampling methods, cumulative frequency and box plots > worked example > data-title attribute
    "Compare the minimum and the two largest values against the fences": "把最小值與最大的兩個數值跟界線比較",

    // Sampling methods, cumulative frequency and box plots > worked example > p
    "Whiskers extend to the most extreme data points that are NOT outliers.": "觸鬚延伸至並非異常值的最極端數據點。",

    // Sampling methods, cumulative frequency and box plots > worked example > maths line
    "Since 142 ≥ 132, the minimum 142 is <b>not</b> a lower outlier (left whisker ends at 142). <b>[R1]</b>": "由於 142 ≥ 132，最小值 142 <b>並非</b>下異常值（左鬚止於 142）。<b>[R1]</b>",

    // Sampling methods, cumulative frequency and box plots > worked example > maths line
    "Since 268 &gt; 260 but 254 ≤ 260, <b>268 is an outlier</b> and the right whisker ends at <b>254</b>. <b>[A1]</b>": "由於 268 &gt; 260 但 254 ≤ 260，<b>268 是異常值</b>，右鬚止於 <b>254</b>。<b>[A1]</b>",

    // Sampling methods, cumulative frequency and box plots > worked example > p
    "Only 268 is an outlier; the whiskers end at 142 and 254.": "只有 268 是異常值；兩條觸鬚分別止於 142 與 254。",

    // Sampling methods, cumulative frequency and box plots > try it > p
    "A dataset has lower quartile <span class=\"chem\">Q_1 = 35</span> and upper quartile <span class=\"chem\">Q_3 = 53</span>. Calculate the upper outlier fence <span class=\"chem\">Q_3 + 1.5 × IQR</span>.": "某數據集的下四分位數為 <span class=\"chem\">Q_1 = 35</span>，上四分位數為 <span class=\"chem\">Q_3 = 53</span>。計算 (Calculate) 上異常值界線 <span class=\"chem\">Q_3 + 1.5 × IQR</span>。",

    // Sampling methods, cumulative frequency and box plots > try it > li
    "First find <span class=\"chem\">IQR = Q_3 - Q_1 = 53 - 35</span>.": "先求 <span class=\"chem\">IQR = Q_3 - Q_1 = 53 - 35</span>。",

    // Sampling methods, cumulative frequency and box plots > try it > li
    "Multiply <span class=\"chem\">IQR = 18</span> by <span class=\"chem\">1.5</span> and add the result to <span class=\"chem\">Q_3 = 53</span>.": "把 <span class=\"chem\">IQR = 18</span> 乘以 <span class=\"chem\">1.5</span>，再把結果加到 <span class=\"chem\">Q_3 = 53</span>。",

    // Sampling methods, cumulative frequency and box plots > try it > maths line
    "Upper fence = 53 + 1.5(18) = 53 + 27 = <b>80</b>": "上界線 = 53 + 1.5(18) = 53 + 27 = <b>80</b>",

    // Measures of center, standard deviation and linear coding > data-toc attribute
    "Mean, SD & coding": "平均數、標準差與線性編碼",

    // Measures of center, standard deviation and linear coding > h2
    "Measures of center, standard deviation and linear coding": "集中趨勢量度、標準差與線性編碼",

    // Measures of center, standard deviation and linear coding > p
    "For a dataset with values <span class=\"chem\">x_1, x_2, ..., x_k</span> occurring with frequencies <span class=\"chem\">f_1, f_2, ..., f_k</span> (where <span class=\"chem\">n = Σ f_i</span>), the mean <span class=\"chem\">x̄</span> and population standard deviation <span class=\"chem\">σ</span> measure the center and typical distance from the mean:": "對於數值為 <span class=\"chem\">x_1, x_2, ..., x_k</span>、對應頻數為 <span class=\"chem\">f_1, f_2, ..., f_k</span>（其中 <span class=\"chem\">n = Σ f_i</span>）的數據集，平均數 <span class=\"chem\">x̄</span> 與總體標準差 <span class=\"chem\">σ</span> 分別量度集中位置與離平均數的典型距離：",

    // Measures of center, standard deviation and linear coding > equation > dt
    "x<sub>i</sub>": "x<sub>i</sub>",

    // Measures of center, standard deviation and linear coding > equation > dd
    "data value (or <strong>mid-interval value</strong> for grouped data)": "數據值（分組數據則為<strong>組中點</strong>）",

    // Measures of center, standard deviation and linear coding > equation > dt
    "f<sub>i</sub>": "f<sub>i</sub>",

    // Measures of center, standard deviation and linear coding > equation > dd
    "frequency of class <span class=\"chem\">i</span>, with total sample size <span class=\"chem\">n = Σ f_i</span>": "第 <span class=\"chem\">i</span> 組的頻數，總樣本數為 <span class=\"chem\">n = Σ f_i</span>",

    // Measures of center, standard deviation and linear coding > equation > dd
    "population standard deviation and population variance": "總體標準差與總體方差",

    // Measures of center, standard deviation and linear coding > common mistake > p
    "<strong>GDC Trap — Always read <span class=\"mono\">σx</span>, never <span class=\"mono\">sx</span>:</strong> When you run <span class=\"mono\">1-Var Stats</span> on your GDC, it displays two standard deviations: <span class=\"mono\">sx</span> (which divides by <span class=\"chem\">n - 1</span>) and <span class=\"mono\">σx</span> (which divides by <span class=\"chem\">n</span>). In IB Math AA (both SL and HL), the standard deviation of a dataset is defined as <strong><span class=\"mono\">σx</span></strong>. For grouped tables, enter the class <strong>midpoints</strong> in <span class=\"mono\">L1</span> and the frequencies in <span class=\"mono\">L2</span> (<span class=\"mono\">FreqList: L2</span>).": "<strong>GDC 陷阱 — 一律讀取 <span class=\"mono\">σx</span>，切勿讀取 <span class=\"mono\">sx</span>：</strong>在 GDC 上執行 <span class=\"mono\">1-Var Stats</span> 時，會顯示兩個標準差：<span class=\"mono\">sx</span>（除以 <span class=\"chem\">n - 1</span>）與 <span class=\"mono\">σx</span>（除以 <span class=\"chem\">n</span>）。在 IB Math AA（SL 及 HL）中，數據集的標準差定義為 <strong><span class=\"mono\">σx</span></strong>。對於分組頻數表，把各組<strong>組中點</strong>輸入 <span class=\"mono\">L1</span>，頻數輸入 <span class=\"mono\">L2</span>（<span class=\"mono\">FreqList: L2</span>）。",

    // Measures of center, standard deviation and linear coding > h3
    "Linear coding: shifting by <span class=\"chem\">+b</span> vs scaling by <span class=\"chem\">×a</span>": "線性編碼：平移 <span class=\"chem\">+b</span> 與伸縮 <span class=\"chem\">×a</span>",

    // Measures of center, standard deviation and linear coding > p
    "Suppose every value <span class=\"chem\">x_i</span> in a dataset is transformed by the linear rule <span class=\"chem\">y_i = a x_i + b</span> (for example, converting temperatures from Celsius to Fahrenheit or rescaling exam marks):": "假設數據集中每個數值 <span class=\"chem\">x_i</span> 均按線性規則 <span class=\"chem\">y_i = a x_i + b</span> 變換（例如把攝氏溫度轉為華氏溫度，或調整考試分數）：",

    // Measures of center, standard deviation and linear coding > li
    "<strong>Measures of position (mean, median, mode, <span class=\"chem\">Q_1, Q_3</span>)</strong> are multiplied by <span class=\"chem\">a</span> <em>and</em> shifted by <span class=\"chem\">+b</span>: <span class=\"chem\">ȳ = a x̄ + b</span>. If <span class=\"chem\">a &lt; 0</span> the order reverses: the new <span class=\"chem\">Q_1</span> is <span class=\"chem\">aQ_3 + b</span> and the new <span class=\"chem\">Q_3</span> is <span class=\"chem\">aQ_1 + b</span>.": "<strong>位置量度（平均數、中位數、眾數、<span class=\"chem\">Q_1, Q_3</span>）</strong>會乘以 <span class=\"chem\">a</span> <em>並</em>平移 <span class=\"chem\">+b</span>：<span class=\"chem\">ȳ = a x̄ + b</span>。若 <span class=\"chem\">a &lt; 0</span>，次序會倒轉：新的 <span class=\"chem\">Q_1</span> 是 <span class=\"chem\">aQ_3 + b</span>，新的 <span class=\"chem\">Q_3</span> 是 <span class=\"chem\">aQ_1 + b</span>。",

    // Measures of center, standard deviation and linear coding > li
    "<strong>Measures of spread (standard deviation <span class=\"chem\">σ</span>, <span class=\"chem\">IQR</span>, range)</strong> are multiplied by <span class=\"chem\">|a|</span> and are <strong>completely unaffected by <span class=\"chem\">+b</span></strong>: <span class=\"chem\">σ_y = |a|σ_x</span> and <span class=\"chem\">IQR_y = |a|IQR_x</span>.": "<strong>離差量度（標準差 <span class=\"chem\">σ</span>、<span class=\"chem\">IQR</span>、全距）</strong>只乘以 <span class=\"chem\">|a|</span>，且<strong>完全不受 <span class=\"chem\">+b</span> 影響</strong>：<span class=\"chem\">σ_y = |a|σ_x</span> 及 <span class=\"chem\">IQR_y = |a|IQR_x</span>。",

    // Measures of center, standard deviation and linear coding > li
    "<strong>Variance <span class=\"chem\">σ^2</span></strong> is multiplied by <span class=\"chem\">a^2</span> (and unaffected by <span class=\"chem\">+b</span>): <span class=\"chem\">σ_y^2 = a^2 σ_x^2</span>.": "<strong>方差 <span class=\"chem\">σ^2</span></strong> 乘以 <span class=\"chem\">a^2</span>（同樣不受 <span class=\"chem\">+b</span> 影響）：<span class=\"chem\">σ_y^2 = a^2 σ_x^2</span>。",

    // Measures of center, standard deviation and linear coding > worked example > h3
    "Paper 1 linear coding and finding ∑x² from mean and variance": "Paper 1 線性編碼及從平均數與方差求 ∑x²",

    // Measures of center, standard deviation and linear coding > worked example > p
    "A sample of <span class=\"chem\">n = 10</span> measurements <span class=\"chem\">x_1, x_2, ..., x_{10}</span> has mean <span class=\"chem\">x̄ = 6</span> and standard deviation <span class=\"chem\">σ_x = 2</span>.<br> (a) Find the mean, standard deviation, and variance of the coded dataset <span class=\"chem\">y_i = 20 - 3x_i</span>. <strong>[3 marks]</strong><br> (b) Find the value of <span class=\"chem\">∑_{i=1}^{10} x_i^2</span>. <strong>[3 marks]</strong>": "一個容量為 <span class=\"chem\">n = 10</span> 的樣本 <span class=\"chem\">x_1, x_2, ..., x_{10}</span> 之平均數為 <span class=\"chem\">x̄ = 6</span>，標準差為 <span class=\"chem\">σ_x = 2</span>。<br> (a) 求 (Find) 經編碼數據集 <span class=\"chem\">y_i = 20 - 3x_i</span> 的平均數、標準差與方差。<strong>[3 marks]</strong><br> (b) 求 (Find) <span class=\"chem\">∑_{i=1}^{10} x_i^2</span> 的值。<strong>[3 marks]</strong>",

    // Measures of center, standard deviation and linear coding > worked example > data-title attribute
    "(a) Apply linear coding with a = −3 and b = 20": "(a) 以 a = −3 與 b = 20 應用線性編碼",

    // Measures of center, standard deviation and linear coding > worked example > p
    "The mean follows the full linear rule, whereas standard deviation scales by |−3| = +3 (never negative!).": "平均數依循完整的線性規則，而標準差則按 |−3| = +3 倍縮放（絕不為負！）。",

    // Measures of center, standard deviation and linear coding > worked example > data-title attribute
    "(b) Use the variance identity σ² = (∑x² / n) − x̄²": "(b) 運用方差恒等式 σ² = (∑x² / n) − x̄²",

    // Measures of center, standard deviation and linear coding > worked example > p
    "Writing variance in terms of the mean of the squares lets us solve directly for ∑x².": "以平方的平均數表示方差，可直接解出 ∑x²。",

    // Measures of center, standard deviation and linear coding > worked example > data-title attribute
    "Solve for ∑x²": "解出 ∑x²",

    // Measures of center, standard deviation and linear coding > worked example > p
    "Add 36 to both sides and multiply by n = 10.": "兩邊加上 36 再乘以 n = 10。",

    // Measures of center, standard deviation and linear coding > try it > p
    "A dataset <span class=\"chem\">X</span> has mean <span class=\"chem\">15</span> and standard deviation <span class=\"chem\">σ_X = 3</span>. Every value is transformed by <span class=\"chem\">Y = 100 - 4X</span>. Find the standard deviation <span class=\"chem\">σ_Y</span> of the transformed dataset.": "數據集 <span class=\"chem\">X</span> 的平均數為 <span class=\"chem\">15</span>，標準差為 <span class=\"chem\">σ_X = 3</span>。每個數值經 <span class=\"chem\">Y = 100 - 4X</span> 變換。求 (Find) 變換後數據集的標準差 <span class=\"chem\">σ_Y</span>。",

    // Measures of center, standard deviation and linear coding > try it > li
    "Adding <span class=\"chem\">100</span> shifts the data without changing its spread.": "加上 <span class=\"chem\">100</span> 只平移數據而不改變其離差。",

    // Measures of center, standard deviation and linear coding > try it > li
    "Multiplying by <span class=\"chem\">-4</span> scales the standard deviation by <span class=\"chem\">|-4| = 4</span>.": "乘以 <span class=\"chem\">-4</span> 會使標準差按 <span class=\"chem\">|-4| = 4</span> 倍縮放。",

    // Correlation and the two least-squares regression lines > data-toc attribute
    "Correlation & regression": "相關與迴歸",

    // Correlation and the two least-squares regression lines > h2
    "Correlation and the two least-squares regression lines": "相關與兩條最小二乘迴歸線",

    // Correlation and the two least-squares regression lines > p
    "<dfn data-def=\"A measure of the strength and direction of the linear relationship between two quantitative variables x and y, satisfying −1 ≤ r ≤ 1.\">Pearson's product-moment correlation coefficient</dfn> <span class=\"chem\">r</span> measures how closely bivariate data points <span class=\"chem\">(x_i, y_i)</span> cluster around a straight line:": "<dfn data-def=\"量度兩個定量變數 x 與 y 之間線性關係的強度與方向的指標，滿足 −1 ≤ r ≤ 1。\">皮爾遜積矩相關係數 <span class=\"en-term\">(Pearson's product-moment correlation coefficient)</span></dfn><span class=\"chem\">r</span> 量度雙變數數據點 <span class=\"chem\">(x_i, y_i)</span> 圍繞一條直線聚集的緊密程度：",

    // Correlation and the two least-squares regression lines > data-def attribute
    "A measure of the strength and direction of the linear relationship between two quantitative variables x and y, satisfying −1 ≤ r ≤ 1.": "量度兩個定量變數 x 與 y 之間線性關係的強度與方向的指標，滿足 −1 ≤ r ≤ 1。",

    // Correlation and the two least-squares regression lines > li
    "<span class=\"chem\">r = +1</span>: perfect positive linear correlation; <span class=\"chem\">r = -1</span>: perfect negative linear correlation; <span class=\"chem\">r = 0</span>: no linear correlation.": "<span class=\"chem\">r = +1</span>：完全正線性相關；<span class=\"chem\">r = -1</span>：完全負線性相關；<span class=\"chem\">r = 0</span>：無線性相關。",

    // Correlation and the two least-squares regression lines > li
    "<strong>Rough guide to strength</strong> (a rule of thumb only; IB does not define fixed cut-offs): <span class=\"chem\">0.75 ≤ |r| ≤ 1</span> (strong), <span class=\"chem\">0.5 ≤ |r| &lt; 0.75</span> (moderate), <span class=\"chem\">|r| &lt; 0.5</span> (weak).": "<strong>強度的粗略指引</strong>（僅為經驗法則；IB 並無訂定固定界線）：<span class=\"chem\">0.75 ≤ |r| ≤ 1</span>（強）、<span class=\"chem\">0.5 ≤ |r| &lt; 0.75</span>（中等）、<span class=\"chem\">|r| &lt; 0.5</span>（弱）。",
    "Interpreting the gradient <span class=\"chem\">a</span> and the intercept <span class=\"chem\">b</span>": "詮釋斜率 <span class=\"chem\">a</span> 與截距 <span class=\"chem\">b</span>",
    "On a scatter diagram, a line of best fit drawn by eye should pass through the mean point <span class=\"chem\">(x̄, ȳ)</span>. In the exam you find <span class=\"chem\">r</span> and the regression line <span class=\"chem\">y = ax + b</span> from the raw data on your GDC (<span class=\"mono\">LinReg(ax+b)</span>), and then interpret the parameters in context:": "在散佈圖上，目測畫出的最佳擬合直線應通過平均點 <span class=\"chem\">(x̄, ȳ)</span>。考試時你要用 GDC（<span class=\"mono\">LinReg(ax+b)</span>）從原始數據求出 <span class=\"chem\">r</span> 及迴歸直線 <span class=\"chem\">y = ax + b</span>，然後在情境中詮釋各參數：",
    "<strong>Gradient <span class=\"chem\">a</span></strong>: the estimated change in <span class=\"chem\">y</span> for each increase of one unit in <span class=\"chem\">x</span> (for example, “each extra hour of revision is associated with about <span class=\"chem\">a</span> more marks”).": "<strong>斜率 <span class=\"chem\">a</span></strong>：<span class=\"chem\">x</span> 每增加一個單位時 <span class=\"chem\">y</span> 的估計變化量（例如「每多溫習一小時，分數約多 <span class=\"chem\">a</span> 分」）。",
    "<strong>Intercept <span class=\"chem\">b</span></strong>: the estimated value of <span class=\"chem\">y</span> when <span class=\"chem\">x = 0</span>. It is only meaningful if <span class=\"chem\">x = 0</span> lies within the range of the data; otherwise it is an extrapolation and should not be interpreted.": "<strong>截距 <span class=\"chem\">b</span></strong>：當 <span class=\"chem\">x = 0</span> 時 <span class=\"chem\">y</span> 的估計值。只有當 <span class=\"chem\">x = 0</span> 位於數據範圍之內時才有意義；否則屬於外推，不應加以詮釋。",
    "Comparing two distributions with box plots": "用框線圖比較兩個分佈",
    "To compare two box plots, comment on a measure of <strong>centre</strong> (compare the medians) and a measure of <strong>spread</strong> (compare the <span class=\"chem\">IQR</span>s or ranges), and say what each comparison means in context. For example: “Class B has the higher median, so Class B generally scored higher; Class A has the larger <span class=\"chem\">IQR</span>, so the middle 50% of Class A's scores are more spread out.”": "比較兩個框線圖時，要評論一個<strong>中心</strong>量度（比較中位數）及一個<strong>離散</strong>量度（比較 <span class=\"chem\">IQR</span> 或全距），並說明每項比較在情境中的意思。例如：「B 班的中位數較高，所以 B 班整體得分較高；A 班的 <span class=\"chem\">IQR</span> 較大，所以 A 班中間 50% 的分數較分散。」",

    // Correlation and the two least-squares regression lines > li
    "<strong>Linear coding on <span class=\"chem\">r</span></strong>: Rescaling <span class=\"chem\">x</span> or <span class=\"chem\">y</span> by positive multipliers leaves <span class=\"chem\">r</span> <strong>unchanged</strong>. Multiplying one variable by a negative constant flips the sign of <span class=\"chem\">r</span>.": "<strong>線性編碼對 <span class=\"chem\">r</span> 的影響</strong>：以正倍數縮放 <span class=\"chem\">x</span> 或 <span class=\"chem\">y</span> 會使 <span class=\"chem\">r</span> <strong>保持不變</strong>。把其中一個變數乘以負常數則會反轉 <span class=\"chem\">r</span> 的正負號。",

    // Correlation and the two least-squares regression lines > h3
    "Why there are two different regression lines (<span class=\"chem\">y</span> on <span class=\"chem\">x</span> vs <span class=\"chem\">x</span> on <span class=\"chem\">y</span>)": "為何有兩條不同的迴歸線（<span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 與 <span class=\"chem\">x</span> 對 <span class=\"chem\">y</span>）",

    // Correlation and the two least-squares regression lines > p
    "When neither <span class=\"chem\">x</span> nor <span class=\"chem\">y</span> is controlled in an experiment (for example, height <span class=\"chem\">x</span> and arm span <span class=\"chem\">y</span> of students), there are <strong>two</strong> least-squares regression lines:": "當實驗中 <span class=\"chem\">x</span> 與 <span class=\"chem\">y</span> 均非受控變數時（例如學生的身高 <span class=\"chem\">x</span> 與臂展 <span class=\"chem\">y</span>），便存在<strong>兩條</strong>最小二乘迴歸線：",

    // Correlation and the two least-squares regression lines > equation > maths line
    "<i>y</i> on <i>x</i>: &nbsp; <i>y</i> − <i>ȳ</i> = <i>a</i>(<i>x</i> − <i>x̄</i>) &nbsp; (<i>y</i> = <i>ax</i> + <i>b</i>) &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <i>x</i> on <i>y</i>: &nbsp; <i>x</i> − <i>x̄</i> = <i>c</i>(<i>y</i> − <i>ȳ</i>) &nbsp; (<i>x</i> = <i>cy</i> + <i>d</i>)": "<i>y</i> 對 <i>x</i>: &nbsp; <i>y</i> − <i>ȳ</i> = <i>a</i>(<i>x</i> − <i>x̄</i>) &nbsp; (<i>y</i> = <i>ax</i> + <i>b</i>) &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <i>x</i> 對 <i>y</i>: &nbsp; <i>x</i> − <i>x̄</i> = <i>c</i>(<i>y</i> − <i>ȳ</i>) &nbsp; (<i>x</i> = <i>cy</i> + <i>d</i>)",

    // Correlation and the two least-squares regression lines > equation > dt
    "y on x": "y 對 x",

    // Correlation and the two least-squares regression lines > equation > dd
    "minimizes squared <strong>vertical</strong> distances; use to estimate <span class=\"chem\">y</span> from a given <span class=\"chem\">x</span>": "使<strong>鉛垂</strong>距離平方和最小；用於從已知 <span class=\"chem\">x</span> 估計 <span class=\"chem\">y</span>",

    // Correlation and the two least-squares regression lines > equation > dt
    "x on y": "x 對 y",

    // Correlation and the two least-squares regression lines > equation > dd
    "minimizes squared <strong>horizontal</strong> distances; use to estimate <span class=\"chem\">x</span> from a given <span class=\"chem\">y</span>": "使<strong>水平</strong>距離平方和最小；用於從已知 <span class=\"chem\">y</span> 估計 <span class=\"chem\">x</span>",

    // Correlation and the two least-squares regression lines > equation > dd
    "the mean point where <strong>both regression lines always intersect</strong>": "<strong>兩條迴歸線永遠相交</strong>的平均點",

    // Correlation and the two least-squares regression lines > key idea > p
    "<strong>Extension (beyond the AA guide). Why the two lines only coincide when <span class=\"chem\">|r| = 1</span>:</strong> The gradient of the <span class=\"chem\">y</span> on <span class=\"chem\">x</span> line is <span class=\"chem\">a = r(σ_y / σ_x)</span>, while the coefficient of <span class=\"chem\">y</span> in the <span class=\"chem\">x</span> on <span class=\"chem\">y</span> line is <span class=\"chem\">c = r(σ_x / σ_y)</span>. Multiplying them gives <span class=\"chem\">a · c = r^2</span>! Therefore, the two lines are identical if and only if <span class=\"chem\">r^2 = 1</span> (<span class=\"chem\">r = ±1</span>), and they always cross at the mean point <span class=\"chem\">(x̄, ȳ)</span>. The identities <span class=\"chem\">a = r(σ_y / σ_x)</span> and <span class=\"chem\">a · c = r^2</span> are not in the AA guide or the formula booklet: in the exam, <span class=\"chem\">r</span> comes from your GDC.": "<strong>延伸內容（超出 AA 課程指引）。為何兩條線只在 <span class=\"chem\">|r| = 1</span> 時重合：</strong><span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 迴歸線的斜率為 <span class=\"chem\">a = r(σ_y / σ_x)</span>，而 <span class=\"chem\">x</span> 對 <span class=\"chem\">y</span> 迴歸線中 <span class=\"chem\">y</span> 的係數為 <span class=\"chem\">c = r(σ_x / σ_y)</span>。兩者相乘得 <span class=\"chem\">a · c = r^2</span>！因此，兩條直線重合，當且僅當 <span class=\"chem\">r^2 = 1</span>（<span class=\"chem\">r = ±1</span>），且它們永遠相交於平均點 <span class=\"chem\">(x̄, ȳ)</span>。恆等式 <span class=\"chem\">a = r(σ_y / σ_x)</span> 與 <span class=\"chem\">a · c = r^2</span> 不在 AA 課程指引或公式手冊之內：考試時 <span class=\"chem\">r</span> 由 GDC 求得。",

    // Correlation and the two least-squares regression lines > widget > data-title attribute
    "Interactive y-on-x vs x-on-y regression explorer": "互動 y 對 x 與 x 對 y 迴歸線探索器",

    // Correlation and the two least-squares regression lines > widget > figcaption
    "Adjust the correlation slider <span class=\"chem\">r</span>. Notice how both lines always pivot through the green mean point <span class=\"chem\">(x̄, ȳ) = (5, 6)</span>. When <span class=\"chem\">|r| = 1</span>, the solid <span class=\"chem\">y</span>-on-<span class=\"chem\">x</span> line and dashed <span class=\"chem\">x</span>-on-<span class=\"chem\">y</span> line merge into one; as <span class=\"chem\">|r| → 0</span>, they scissor apart until they are perpendicular at <span class=\"chem\">r = 0</span>.": "調校相關係數滑桿 <span class=\"chem\">r</span>。留意兩條直線始終繞着綠色的平均點 <span class=\"chem\">(x̄, ȳ) = (5, 6)</span> 旋轉。當 <span class=\"chem\">|r| = 1</span> 時，實線（<span class=\"chem\">y</span> 對 <span class=\"chem\">x</span>）與虛線（<span class=\"chem\">x</span> 對 <span class=\"chem\">y</span>）合而為一；當 <span class=\"chem\">|r| → 0</span> 時，兩線張開直至在 <span class=\"chem\">r = 0</span> 時互相垂直。",

    // Correlation and the two least-squares regression lines > worked example > h3
    "Using both regression lines to find the mean point and predict x from y": "利用兩條迴歸線求平均點並由 y 預測 x",

    // Correlation and the two least-squares regression lines > worked example > p
    "For a bivariate dataset <span class=\"chem\">(x, y)</span> with <span class=\"chem\">10 ≤ x ≤ 30</span> and <span class=\"chem\">15 ≤ y ≤ 45</span>, the regression line of <span class=\"chem\">y</span> on <span class=\"chem\">x</span> is <span class=\"chem\">y = 1.2x + 6</span> and the regression line of <span class=\"chem\">x</span> on <span class=\"chem\">y</span> is <span class=\"chem\">x = 0.6y + 2</span>.<br> (a) Find the mean values <span class=\"chem\">x̄</span> and <span class=\"chem\">ȳ</span>. <strong>[3 marks]</strong><br> (b) <em>(Extension, beyond the AA guide)</em> Find Pearson's correlation coefficient <span class=\"chem\">r</span>. <strong>[2 marks]</strong><br> (c) Estimate <span class=\"chem\">x</span> when <span class=\"chem\">y = 25</span>, and explain why your estimate is reliable. <strong>[3 marks]</strong>": "對於雙變數數據集 <span class=\"chem\">(x, y)</span>（<span class=\"chem\">10 ≤ x ≤ 30</span> 且 <span class=\"chem\">15 ≤ y ≤ 45</span>），<span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 的迴歸線為 <span class=\"chem\">y = 1.2x + 6</span>，而 <span class=\"chem\">x</span> 對 <span class=\"chem\">y</span> 的迴歸線為 <span class=\"chem\">x = 0.6y + 2</span>。<br> (a) 求 (Find) 平均值 <span class=\"chem\">x̄</span> 與 <span class=\"chem\">ȳ</span>。<strong>[3 marks]</strong><br> (b) <em>（延伸內容，超出 AA 課程指引）</em>求 (Find) 皮爾遜相關係數 <span class=\"chem\">r</span>。<strong>[2 marks]</strong><br> (c) 當 <span class=\"chem\">y = 25</span> 時估計 (Estimate) <span class=\"chem\">x</span>，並解釋為何你的估計是可靠的。<strong>[3 marks]</strong>",

    // Correlation and the two least-squares regression lines > worked example > data-title attribute
    "(a) Solve the two regression equations simultaneously for (x̄, ȳ)": "(a) 聯立求解兩條迴歸方程以求 (x̄, ȳ)",

    // Correlation and the two least-squares regression lines > worked example > p
    "Both regression lines pass through the mean point (x̄, ȳ).": "兩條迴歸線皆通過平均點 (x̄, ȳ)。",

    // Correlation and the two least-squares regression lines > worked example > maths line
    "Substitute <i>ȳ</i> = 1.2<i>x̄</i> + 6 into <i>x̄</i> = 0.6<i>ȳ</i> + 2: <b>[M1]</b>": "將 <i>ȳ</i> = 1.2<i>x̄</i> + 6 代入 <i>x̄</i> = 0.6<i>ȳ</i> + 2：<b>[M1]</b>",

    // Correlation and the two least-squares regression lines > worked example > data-title attribute
    "(b) Extension: use a · c = r² and match the sign of the slopes": "(b) 延伸：運用 a · c = r² 並配合斜率的正負號",

    // Correlation and the two least-squares regression lines > worked example > p
    "Extension only: in the exam r comes from the GDC. Since a = 1.2 &gt; 0 and c = 0.6 &gt; 0, the correlation is positive and r² = a · c.": "僅屬延伸內容：考試時 r 由 GDC 求得。由於 a = 1.2 &gt; 0 且 c = 0.6 &gt; 0，相關為正相關且 r² = a · c。",

    // Correlation and the two least-squares regression lines > worked example > maths line
    "<i>r</i><sup>2</sup> = 1.2 × 0.6 = 0.72 ⇒ <i>r</i> = +√0.72 ≈ <b>0.849</b> (or <span class=\"frac\"><span>3√2</span><span>5</span></span>) <b>[M1 A1]</b>": "<i>r</i><sup>2</sup> = 1.2 × 0.6 = 0.72 ⇒ <i>r</i> = +√0.72 ≈ <b>0.849</b>（或 <span class=\"frac\"><span>3√2</span><span>5</span></span>）<b>[M1 A1]</b>",

    // Correlation and the two least-squares regression lines > worked example > data-title attribute
    "(c) Use the x on y line to estimate x when y = 25": "(c) 使用 x 對 y 迴歸線估計 y = 25 時的 x",

    // Correlation and the two least-squares regression lines > worked example > p
    "Because y = 25 is given and x is being predicted, we must use the x on y line.": "由於已知 y = 25 而須預測 x，我們必須使用 x 對 y 的迴歸線。",

    // Correlation and the two least-squares regression lines > worked example > maths line
    "Reliable because <i>r</i> ≈ 0.849 indicates strong positive correlation AND <i>y</i> = 25 lies within [15, 45] (<b>interpolation</b>). <b>[R1]</b>": "可靠，因為 <i>r</i> ≈ 0.849 表示強正相關，而且 <i>y</i> = 25 落在 [15, 45] 內（<b>內插</b>）。<b>[R1]</b>",

    // Correlation and the two least-squares regression lines > worked example > p
    "(a) x̄ = 20, ȳ = 30; (b) r ≈ 0.849; (c) x = 17 (reliable by strong correlation and interpolation)": "(a) x̄ = 20，ȳ = 30；(b) r ≈ 0.849；(c) x = 17（因強相關及內插而可靠）",

    // Correlation and the two least-squares regression lines > try it > p
    "For a bivariate dataset, the regression line of <span class=\"chem\">y</span> on <span class=\"chem\">x</span> is <span class=\"chem\">y = 2x + 10</span> and the regression line of <span class=\"chem\">x</span> on <span class=\"chem\">y</span> is <span class=\"chem\">x = 0.4y + 8</span>. Calculate the value of <span class=\"chem\">ȳ</span> (the mean of <span class=\"chem\">y</span>).": "某雙變數數據集的 <span class=\"chem\">y</span> 對 <span class=\"chem\">x</span> 迴歸線為 <span class=\"chem\">y = 2x + 10</span>，<span class=\"chem\">x</span> 對 <span class=\"chem\">y</span> 迴歸線為 <span class=\"chem\">x = 0.4y + 8</span>。計算 (Calculate) <span class=\"chem\">ȳ</span>（<span class=\"chem\">y</span> 的平均數）的值。",

    // Correlation and the two least-squares regression lines > try it > li
    "Both lines intersect at <span class=\"chem\">(x̄, ȳ)</span>, so substitute <span class=\"chem\">x̄ = 0.4ȳ + 8</span> into <span class=\"chem\">ȳ = 2x̄ + 10</span>.": "兩線相交於 <span class=\"chem\">(x̄, ȳ)</span>，故將 <span class=\"chem\">x̄ = 0.4ȳ + 8</span> 代入 <span class=\"chem\">ȳ = 2x̄ + 10</span>。",

    // Correlation and the two least-squares regression lines > try it > li
    "Solve <span class=\"chem\">ȳ = 2(0.4ȳ + 8) + 10 = 0.8ȳ + 26</span> for <span class=\"chem\">ȳ</span>.": "解 <span class=\"chem\">ȳ = 2(0.4ȳ + 8) + 10 = 0.8ȳ + 26</span> 以求 <span class=\"chem\">ȳ</span>。",

    // Quick practice > data-toc attribute
    "Practice": "練習",

    // Quick practice > h2
    "Quick practice": "快速練習",

    // widget string (assets/js/widgets-t4-1.js)
    "Base dataset (10 values)": "基礎數據集（10 個數值）",

    // widget string (assets/js/widgets-t4-1.js)
    "Balanced sample": "對稱樣本",

    // widget string (assets/js/widgets-t4-1.js)
    "Right-skewed sample": "右偏斜樣本",

    // widget string (assets/js/widgets-t4-1.js)
    "Compact low-IQR sample": "緊密低 IQR 樣本",

    // widget string (assets/js/widgets-t4-1.js)
    "11th data value x₁₁": "第 11 個數據值 x₁₁",

    // widget string (assets/js/widgets-t4-1.js)
    "Constant shift +k": "常數平移 +k",

    // widget string (assets/js/widgets-t4-1.js)
    "Five-number summary": "五數概括",

    // widget string (assets/js/widgets-t4-1.js)
    "IQR & outlier fences": "IQR 與異常值界線",

    // widget string (assets/js/widgets-t4-1.js)
    "Outlier test for x₁₁": "x₁₁ 的異常值檢驗",

    // widget string (assets/js/widgets-t4-1.js)
    "Box-and-whisker plot with 1.5 IQR lower and upper outlier fences": "附有 1.5 IQR 下界線與上界線的框線圖",

    // widget string (assets/js/widgets-t4-1.js)
    "Upper outlier — whisker stops at": "上異常值 — 觸鬚止於",

    // widget string (assets/js/widgets-t4-1.js)
    "Lower outlier — whisker stops at": "下異常值 — 觸鬚止於",

    // widget string (assets/js/widgets-t4-1.js)
    "Not an outlier": "並非異常值",

    // widget string (assets/js/widgets-t4-1.js)
    "Correlation r": "相關係數 r",

    // widget string (assets/js/widgets-t4-1.js)
    "Target y₀ (to predict x)": "目標 y₀（用以預測 x）",

    // widget string (assets/js/widgets-t4-1.js)
    "y on x line (predict y from x)": "y 對 x 迴歸線（由 x 預測 y）",

    // widget string (assets/js/widgets-t4-1.js)
    "x on y line (predict x from y)": "x 對 y 迴歸線（由 y 預測 x）",

    // widget string (assets/js/widgets-t4-1.js)
    "Estimate of x when y = y₀": "當 y = y₀ 時 x 的估計值",

    // widget string (assets/js/widgets-t4-1.js)
    "lines coincide since |r| = 1": "由於 |r| = 1，兩線重合",

    // widget string (assets/js/widgets-t4-1.js)
    "r = 0: lines are perpendicular!": "r = 0：兩線互相垂直！",

    // widget string (assets/js/widgets-t4-1.js)
    "via x on y": "經 x 對 y 迴歸線",

    // widget string (assets/js/widgets-t4-1.js)
    "wrong if rearranging y on x": "若移項 y 對 x 迴歸線則錯誤",

    // widget string (assets/js/widgets-t4-1.js)
    "y on x (predict y)": "y 對 x（預測 y）",

    // widget string (assets/js/widgets-t4-1.js)
    "x on y (predict x)": "x 對 y（預測 x）",

    // widget string (assets/js/widgets-t4-1.js)
    "Scatter plot with y-on-x and x-on-y regression lines intersecting at the mean point": "散點圖與相交於平均點的 y 對 x 及 x 對 y 迴歸線",

  }
});
