/* t4-1 — ja translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't4-1', {
  strings: {

    // page title (browser tab)
    "4.1 Descriptive statistics, correlation and regression | Analysis Lab": "4.1 データの分析・相関と回帰 | Analysis Lab",

    // Descriptive statistics, correlation and regression > page header > p
    "Topic 4.1 · SL 4.1–4.4, 4.10": "Topic 4.1 · SL 4.1–4.4, 4.10",

    // Descriptive statistics, correlation and regression > page header > h1
    "Descriptive statistics, correlation and regression": "データの分析・相関と回帰",

    // Descriptive statistics, correlation and regression > page header > span
    "How do we summarize center, spread, and linear relationships in noisy data—and why does the direction of prediction change the regression line we must use?": "ばらつきのあるデータの代表値・散らばり・直線的な関係はどのように要約でき、予測の向きによってなぜ使うべき回帰直線が変わるのでしょうか？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "チェックリスト",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > checklist > span
    "Distinguish population vs sample and discrete vs continuous data, and compare simple random, systematic, stratified, quota, and convenience sampling.": "母集団と標本、離散データと連続データを区別し、単純無作為抽出・系統抽出・層化抽出・割当抽出・便宜抽出を比較できる。",

    // What you need to be able to do > checklist > span
    "Interpret histograms, cumulative frequency graphs, and box-and-whisker plots, compare two distributions using box plots, and test formally for outliers using <span class=\"chem\">[Q_1 - 1.5 IQR, Q_3 + 1.5 IQR]</span>.": "ヒストグラム・累積度数曲線・箱ひげ図を読み取り、箱ひげ図で 2 つの分布を比較し、<span class=\"chem\">[Q_1 - 1.5 IQR, Q_3 + 1.5 IQR]</span> を用いて外れ値を厳密に判定できる。",

    // What you need to be able to do > checklist > span
    "Estimate the mean <span class=\"chem\">x̄</span> and population standard deviation <span class=\"chem\">σ</span> from grouped frequency tables using mid-interval values.": "度数分布表から階級値を用いて平均値 <span class=\"chem\">x̄</span> と母標準偏差 <span class=\"chem\">σ</span> を推定できる。",

    // What you need to be able to do > checklist > span
    "Find the new mean, variance, standard deviation, and <span class=\"chem\">IQR</span> after linear coding <span class=\"chem\">Y = aX + b</span> (<span class=\"chem\">ȳ = a x̄ + b</span>, <span class=\"chem\">σ_Y = |a|σ_X</span>).": "1 次変換（線形変換）<span class=\"chem\">Y = aX + b</span> の後の新しい平均値・分散・標準偏差・<span class=\"chem\">IQR</span> を求められる（<span class=\"chem\">ȳ = a x̄ + b</span>、<span class=\"chem\">σ_Y = |a|σ_X</span>）。",

    // What you need to be able to do > checklist > span
    "Find Pearson's correlation coefficient <span class=\"chem\">r</span> and the regression line from raw data on a GDC, interpret <span class=\"chem\">r</span> and the parameters <span class=\"chem\">a</span> and <span class=\"chem\">b</span> in context, and judge whether a prediction is reliable using correlation strength and interpolation vs extrapolation.": "生データから GDC でピアソンの相関係数 <span class=\"chem\">r</span> と回帰直線を求め、<span class=\"chem\">r</span> とパラメータ <span class=\"chem\">a</span>、<span class=\"chem\">b</span> を文脈の中で解釈し、相関の強さと内挿・外挿を用いて予測の信頼性を判断できる。",

    // What you need to be able to do > checklist > span
    "Choose between the regression line of <span class=\"chem\">y</span> on <span class=\"chem\">x</span> (<span class=\"chem\">y = ax + b</span>) and <span class=\"chem\">x</span> on <span class=\"chem\">y</span> (<span class=\"chem\">x = cy + d</span>), and use their intersection at the mean point <span class=\"chem\">(x̄, ȳ)</span>.": "<span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線（<span class=\"chem\">y = ax + b</span>）と <span class=\"chem\">x</span> の <span class=\"chem\">y</span> への回帰直線（<span class=\"chem\">x = cy + d</span>）を適切に選び、平均点の交点 <span class=\"chem\">(x̄, ȳ)</span> を利用できる。",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "問題デコーダー",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "問題デコーダー：使うべき解法を見抜く",

    // Question decoder: spotting which technique to use > p
    "Topic 4.1 questions test whether you know which summary measure, outlier rule, or regression line matches the wording of the prompt. Use this table to translate exam phrases directly into your working.": "Topic 4.1 の問題では、問題文の表現に合った代表値・外れ値の判定法・回帰直線を選べるかが問われます。この表を使って、試験の言い回しをそのまま手順に置き換えましょう。",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — Descriptive statistics, correlation and regression": "問題デコーダー — データの分析・相関と回帰",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "試験問題に書かれている表現",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "数学的な意味（公式と立式）",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1（電卓不可）vs Paper 2（GDC 可）",

    // Question decoder: spotting which technique to use > table > th
    "“Estimate <span class=\"chem\">y</span> when <span class=\"chem\">x = x_0</span>”": "「<span class=\"chem\">x = x_0</span> のときの <span class=\"chem\">y</span> を推定せよ」",

    // Question decoder: spotting which technique to use > table > td
    "Use the regression line of <strong><span class=\"chem\">y</span> on <span class=\"chem\">x</span></strong>: <span class=\"chem\">y = ax + b</span> (minimizes vertical squared residuals).": "<strong><span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線</strong> <span class=\"chem\">y = ax + b</span> を使います（縦方向の残差平方和を最小化）。",

    // Question decoder: spotting which technique to use > table > td
    "Substitute <span class=\"chem\">x = x_0</span> into <span class=\"chem\">y = ax + b</span>. On GDC, run <span class=\"mono\">LinReg(ax+b)</span> with <span class=\"mono\">Xlist = L1, Ylist = L2</span>.": "<span class=\"chem\">y = ax + b</span> に <span class=\"chem\">x = x_0</span> を代入します。GDC では <span class=\"mono\">Xlist = L1, Ylist = L2</span> で <span class=\"mono\">LinReg(ax+b)</span> を実行します。",

    // Question decoder: spotting which technique to use > table > th
    "“Estimate <span class=\"chem\">x</span> when <span class=\"chem\">y = y_0</span>” (when neither variable is controlled)": "「<span class=\"chem\">y = y_0</span> のときの <span class=\"chem\">x</span> を推定せよ」（どちらの変数も制御されていない場合）",

    // Question decoder: spotting which technique to use > table > td
    "Use the regression line of <strong><span class=\"chem\">x</span> on <span class=\"chem\">y</span></strong>: <span class=\"chem\">x = cy + d</span> (minimizes horizontal squared residuals).": "<strong><span class=\"chem\">x</span> の <span class=\"chem\">y</span> への回帰直線</strong> <span class=\"chem\">x = cy + d</span> を使います（横方向の残差平方和を最小化）。",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Never</strong> rearrange <span class=\"chem\">y = ax + b</span> to solve for <span class=\"chem\">x</span>! On GDC, swap the lists in <span class=\"mono\">LinReg(ax+b)</span>: set <span class=\"mono\">Xlist = L2 (y), Ylist = L1 (x)</span>.": "<span class=\"chem\">y = ax + b</span> を <span class=\"chem\">x</span> について変形しては<strong>いけません</strong>！GDC では <span class=\"mono\">LinReg(ax+b)</span> のリストを入れ替え、<span class=\"mono\">Xlist = L2 (y), Ylist = L1 (x)</span> に設定します。",

    // Question decoder: spotting which technique to use > table > th
    "“Given both regression lines <span class=\"chem\">y = ax + b</span> and <span class=\"chem\">x = cy + d</span>, find <span class=\"chem\">x̄</span> and <span class=\"chem\">ȳ</span>”": "「2 つの回帰直線 <span class=\"chem\">y = ax + b</span> と <span class=\"chem\">x = cy + d</span> が与えられたとき、<span class=\"chem\">x̄</span> と <span class=\"chem\">ȳ</span> を求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "Both regression lines <strong>always</strong> intersect at the mean point <span class=\"chem\">(x̄, ȳ)</span>.": "2 つの回帰直線は<strong>常に</strong>平均点 <span class=\"chem\">(x̄, ȳ)</span> で交わります。",

    // Question decoder: spotting which technique to use > table > td
    "Solve the two linear equations simultaneously for <span class=\"chem\">x</span> and <span class=\"chem\">y</span> (by substitution on Paper 1, or graph/system solver on Paper 2).": "2 つの一次方程式を <span class=\"chem\">x</span> と <span class=\"chem\">y</span> について連立して解きます（Paper 1 では代入法、Paper 2 ではグラフや連立方程式ソルバー）。",

    // Question decoder: spotting which technique to use > table > th
    "“Determine whether <span class=\"chem\">v</span> is an outlier”": "「<span class=\"chem\">v</span> が外れ値であるかどうかを判定せよ」",

    // Question decoder: spotting which technique to use > table > td
    "Compute <span class=\"chem\">IQR = Q_3 - Q_1</span>, lower fence <span class=\"chem\">Q_1 - 1.5 IQR</span>, and upper fence <span class=\"chem\">Q_3 + 1.5 IQR</span>.": "<span class=\"chem\">IQR = Q_3 - Q_1</span>、下側境界 <span class=\"chem\">Q_1 - 1.5 IQR</span>、上側境界 <span class=\"chem\">Q_3 + 1.5 IQR</span> を計算します。",

    // Question decoder: spotting which technique to use > table > td
    "Write down the numerical value of the relevant fence and explicitly compare <span class=\"chem\">v &lt; Q_1 - 1.5 IQR</span> or <span class=\"chem\">v &gt; Q_3 + 1.5 IQR</span> for the reasoning mark <b>[R1]</b>.": "論証点 <b>[R1]</b> を得るために、該当する境界の数値を書き出し、<span class=\"chem\">v &lt; Q_1 - 1.5 IQR</span> または <span class=\"chem\">v &gt; Q_3 + 1.5 IQR</span> との比較を明記します。",

    // Question decoder: spotting which technique to use > table > th
    "“Comment on the validity / reliability of your estimate”": "「推定値の妥当性・信頼性について述べよ」",

    // Question decoder: spotting which technique to use > table > td
    "Check two conditions: <strong>1.</strong> Is <span class=\"chem\">|r|</span> close to <span class=\"chem\">1</span>? <strong>2.</strong> Is the input inside the observed data range (<strong>interpolation</strong>) or outside it (<strong>extrapolation</strong>)?": "2 つの条件を確認します：<strong>1.</strong> <span class=\"chem\">|r|</span> が <span class=\"chem\">1</span> に近いか？ <strong>2.</strong> 入力値が観測データの範囲内（<strong>内挿</strong>）か範囲外（<strong>外挿</strong>）か？",

    // Question decoder: spotting which technique to use > table > td
    "If the input lies outside <span class=\"chem\">[x_{min}, x_{max}]</span>, state: <em>“Unreliable because it requires extrapolation outside the range of the data.”</em>": "入力値が <span class=\"chem\">[x_{min}, x_{max}]</span> の外にある場合は、<em>「データの範囲外への外挿が必要になるため信頼できない」</em>と述べます。",

    // Question decoder: spotting which technique to use > table > th
    "“Each data value <span class=\"chem\">x</span> is transformed to <span class=\"chem\">y = ax + b</span>”": "「各データ値 <span class=\"chem\">x</span> を <span class=\"chem\">y = ax + b</span> で変換する」",

    // Question decoder: spotting which technique to use > table > td
    "Mean/median/quartiles scale and shift: <span class=\"chem\">ȳ = a x̄ + b</span> (if <span class=\"chem\">a &lt; 0</span>, <span class=\"chem\">Q_1</span> and <span class=\"chem\">Q_3</span> swap). Spread measures only scale by <span class=\"chem\">|a|</span>: <span class=\"chem\">σ_y = |a|σ_x</span>, <span class=\"chem\">σ_y^2 = a^2 σ_x^2</span>.": "平均値・中央値・四分位数は定数倍と平行移動を受けます：<span class=\"chem\">ȳ = a x̄ + b</span>（<span class=\"chem\">a &lt; 0</span> のときは <span class=\"chem\">Q_1</span> と <span class=\"chem\">Q_3</span> が入れ替わります）。散らばりの尺度は <span class=\"chem\">|a|</span> 倍のみ受けます：<span class=\"chem\">σ_y = |a|σ_x</span>、<span class=\"chem\">σ_y^2 = a^2 σ_x^2</span>。",

    // Question decoder: spotting which technique to use > table > td
    "Adding <span class=\"chem\">b</span> has <strong>zero effect</strong> on standard deviation, variance, or <span class=\"chem\">IQR</span>. If <span class=\"chem\">a &lt; 0</span>, use <span class=\"chem\">|a|</span> (the standard deviation never becomes negative).": "<span class=\"chem\">b</span> を足しても標準偏差・分散・<span class=\"chem\">IQR</span> には<strong>まったく影響しません</strong>。<span class=\"chem\">a &lt; 0</span> のときは <span class=\"chem\">|a|</span> を使います（標準偏差が負になることはありません）。",

    // Question decoder: spotting which technique to use > not needed for IB > p
    "<strong>What is NOT in the IB Math AA HL syllabus:</strong> Hypothesis testing (<span class=\"chem\">χ^2</span> tests of independence, <span class=\"chem\">χ^2</span> goodness-of-fit, <span class=\"chem\">t</span>-tests, <span class=\"chem\">z</span>-tests), Spearman's rank correlation <span class=\"chem\">r_s</span> and unbiased sample variance <span class=\"chem\">s_{n-1}^2</span> belong to IB Math AI. Calculating Pearson's <span class=\"chem\">r</span> or regression slopes by hand from summation formulas is not required in AA: use your GDC. In IB Math AA, you always find <span class=\"chem\">r</span>, <span class=\"chem\">σ_x</span>, and regression equations directly from your GDC or from summary clues.": "<strong>IB Math AA HL の範囲外のもの：</strong> 仮説検定（独立性の <span class=\"chem\">χ^2</span> 検定、適合度 <span class=\"chem\">χ^2</span> 検定、<span class=\"chem\">t</span> 検定、<span class=\"chem\">z</span> 検定）、スピアマンの順位相関係数 <span class=\"chem\">r_s</span>、不偏標本分散 <span class=\"chem\">s_{n-1}^2</span> は IB Math AI の範囲です。総和公式からピアソンの <span class=\"chem\">r</span> や回帰直線の傾きを手計算で求めることは AA では求められません：GDC を使いましょう。IB Math AA では、<span class=\"chem\">r</span>、<span class=\"chem\">σ_x</span>、回帰方程式は常に GDC または要約された手がかりから直接求めます。",

    // Sampling methods, cumulative frequency and box plots > data-toc attribute
    "Sampling & box plots": "標本抽出と箱ひげ図",

    // Sampling methods, cumulative frequency and box plots > h2
    "Sampling methods, cumulative frequency and box plots": "標本抽出法・累積度数曲線と箱ひげ図",

    // Sampling methods, cumulative frequency and box plots > p
    "A <dfn data-def=\"The complete set of all individuals, items, or measurements of interest in a statistical study.\">population</dfn> is the entire group you want to describe, whereas a <dfn data-def=\"A subset of the population selected for observation and measurement.\">sample</dfn> is a smaller subset you actually measure. Data can be <strong>discrete</strong> (counted in exact steps, such as number of siblings) or <strong>continuous</strong> (measured on a continuous scale, such as height or reaction time).": "<dfn data-def=\"統計調査において関心のあるすべての個体・対象・測定値の全体集合。\">母集団 <span class=\"en-term\">(population)</span></dfn> は調べたい全体のグループであり、<dfn data-def=\"観察や測定のために母集団から選ばれた部分集合。\">標本 <span class=\"en-term\">(sample)</span></dfn> は実際に測定する小さな部分集合です。データには<strong>離散データ</strong>（きょうだいの人数など飛び飛びの値で数えるもの）と<strong>連続データ</strong>（身長や反応時間など連続的な尺度で測るもの）があります。",

    // Sampling methods, cumulative frequency and box plots > data-def attribute
    "The complete set of all individuals, items, or measurements of interest in a statistical study.": "統計調査において関心のあるすべての個体・対象・測定値の全体集合。",

    // Sampling methods, cumulative frequency and box plots > data-def attribute
    "A subset of the population selected for observation and measurement.": "観察や測定のために母集団から選ばれた部分集合。",

    // Sampling methods, cumulative frequency and box plots > table > caption
    "Comparison of the five IB sampling techniques (SL 4.1)": "IB の 5 つの標本抽出法の比較 (SL 4.1)",

    // Sampling methods, cumulative frequency and box plots > table > th
    "Sampling method": "抽出法",

    // Sampling methods, cumulative frequency and box plots > table > th
    "How the sample is chosen": "標本の選び方",

    // Sampling methods, cumulative frequency and box plots > table > th
    "Key strength &amp; main source of bias": "主な長所と偏り（バイアス）の原因",

    // Sampling methods, cumulative frequency and box plots > table > th
    "Simple random": "単純無作為抽出",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Every member of the population (and every subset of size <span class=\"chem\">n</span>) has an equal probability of being chosen, using a random number generator.": "乱数生成器などを用いて、母集団のすべての個体（および大きさ <span class=\"chem\">n</span> のすべての部分集合）が等しい確率で選ばれるようにします。",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Unbiased in expectation, but requires a complete list (sampling frame) of the entire population.": "期待値として偏りがありませんが、母集団全体の完全な名簿（抽出枠）が必要です。",

    // Sampling methods, cumulative frequency and box plots > table > th
    "Systematic": "系統抽出",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Pick a random starting point among the first <span class=\"chem\">k</span> items, then select every <span class=\"chem\">k</span>-th member (<span class=\"chem\">k = N / n</span>) along an ordered list.": "最初の <span class=\"chem\">k</span> 個の中から無作為に開始点を選び、並んだ名簿から <span class=\"chem\">k</span> 番目ごと（<span class=\"chem\">k = N / n</span>）に選びます。",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Fast and evenly spread, but biased if the list has a hidden periodic cycle matching <span class=\"chem\">k</span>.": "速くて均等に分布しますが、名簿に <span class=\"chem\">k</span> と一致する隠れた周期性があると偏りが生じます。",

    // Sampling methods, cumulative frequency and box plots > table > th
    "Stratified": "層化抽出",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Divide the population into distinct subgroups (<em>strata</em>) and take a <strong>simple random sample</strong> from each stratum proportional to its size: <span class=\"chem\">n_i = (N_i / N) × n</span>.": "母集団を明確な小集団（<em>層</em>）に分け、各層の大きさに比例した数 <span class=\"chem\">n_i = (N_i / N) × n</span> だけ<strong>単純無作為抽出</strong>を行います。",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Guarantees proportional representation of every subgroup; still requires a full list within each stratum.": "すべての小集団が比例的に代表されることが保証されます；ただし各層内の完全な名簿が必要です。",

    // Sampling methods, cumulative frequency and box plots > table > th
    "Quota": "割当抽出",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Divide the population into subgroups like stratified sampling, but select subjects <strong>non-randomly</strong> (by convenience) until each subgroup quota is filled.": "層化抽出と同様に母集団を小集団に分けますが、各小集団の割当数が埋まるまで<strong>無作為ではなく</strong>（都合のよい方法で）対象者を選びます。",

    // Sampling methods, cumulative frequency and box plots > table > td
    "No population list needed, but prone to interviewer selection bias.": "母集団の名簿は不要ですが、調査員の選択による偏りが生じやすいです。",

    // Sampling methods, cumulative frequency and box plots > table > th
    "Convenience": "便宜抽出",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Poll whichever individuals are easiest to reach first (e.g., the first 20 students walking into the library).": "最も接触しやすい人から順に調査します（例：図書館に入ってきた最初の 20 人の生徒）。",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Quickest method, but severely biased because the sample rarely represents the whole population.": "最も手軽ですが、標本が母集団全体を代表することはめったになく、強い偏りが生じます。",

    // Sampling methods, cumulative frequency and box plots > h3
    "Cumulative frequency graphs, quartiles and formal outlier fences": "累積度数曲線・四分位数と外れ値の境界",

    // Sampling methods, cumulative frequency and box plots > p
    "For grouped continuous data, a <strong>histogram</strong> plots class intervals on the horizontal axis and frequency on the vertical axis (with no gaps between bars). A <strong>cumulative frequency graph</strong> plots the running total of frequencies against the <strong>upper boundary</strong> of each class interval.": "階級分けされた連続データでは、<strong>ヒストグラム</strong>は横軸に階級、縦軸に度数をとります（棒の間に隙間はありません）。<strong>累積度数曲線</strong>は、各階級の<strong>上限値</strong>に対して累積度数をプロットします。",

    // Sampling methods, cumulative frequency and box plots > p
    "From a cumulative frequency curve of <span class=\"chem\">n</span> total observations, read off horizontal lines at:": "総度数 <span class=\"chem\">n</span> の累積度数曲線から、次の高さの水平線で値を読み取ります：",

    // Sampling methods, cumulative frequency and box plots > li
    "<strong>Lower quartile <span class=\"chem\">Q_1</span></strong>: <span class=\"chem\">25%</span> of <span class=\"chem\">n</span> (<span class=\"chem\">0.25n</span>)": "<strong>第 1 四分位数 <span class=\"chem\">Q_1</span></strong>：<span class=\"chem\">n</span> の <span class=\"chem\">25%</span>（<span class=\"chem\">0.25n</span>）",

    // Sampling methods, cumulative frequency and box plots > li
    "<strong>Median <span class=\"chem\">M</span> (or <span class=\"chem\">Q_2</span>)</strong>: <span class=\"chem\">50%</span> of <span class=\"chem\">n</span> (<span class=\"chem\">0.50n</span>)": "<strong>中央値 <span class=\"chem\">M</span>（または <span class=\"chem\">Q_2</span>）</strong>：<span class=\"chem\">n</span> の <span class=\"chem\">50%</span>（<span class=\"chem\">0.50n</span>）",

    // Sampling methods, cumulative frequency and box plots > li
    "<strong>Upper quartile <span class=\"chem\">Q_3</span></strong>: <span class=\"chem\">75%</span> of <span class=\"chem\">n</span> (<span class=\"chem\">0.75n</span>)": "<strong>第 3 四分位数 <span class=\"chem\">Q_3</span></strong>：<span class=\"chem\">n</span> の <span class=\"chem\">75%</span>（<span class=\"chem\">0.75n</span>）",

    // Sampling methods, cumulative frequency and box plots > equation > maths line
    "IQR = <i>Q</i><sub>3</sub> − <i>Q</i><sub>1</sub> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Lower fence = <i>Q</i><sub>1</sub> − 1.5 × IQR &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Upper fence = <i>Q</i><sub>3</sub> + 1.5 × IQR": "IQR = <i>Q</i><sub>3</sub> − <i>Q</i><sub>1</sub> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 下側境界 = <i>Q</i><sub>1</sub> − 1.5 × IQR &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 上側境界 = <i>Q</i><sub>3</sub> + 1.5 × IQR",

    // Sampling methods, cumulative frequency and box plots > equation > dt
    "IQR": "IQR",

    // Sampling methods, cumulative frequency and box plots > equation > dd
    "interquartile range (spread of the middle 50% of data)": "四分位範囲（データの中央 50% の散らばり）",

    // Sampling methods, cumulative frequency and box plots > equation > dd
    "lower quartile (25th percentile) and upper quartile (75th percentile)": "第 1 四分位数（25 パーセンタイル）と第 3 四分位数（75 パーセンタイル）",

    // Sampling methods, cumulative frequency and box plots > equation > dt
    // widget string (assets/js/widgets-t4-1.js)
    "Outlier": "外れ値",

    // Sampling methods, cumulative frequency and box plots > equation > dd
    "any data value strictly below the lower fence or strictly above the upper fence": "下側境界より真に小さい値、または上側境界より真に大きい値",

    // Sampling methods, cumulative frequency and box plots > formula booklet note > p
    "<strong>Formula Booklet check (SL 4.2):</strong> <span class=\"chem\">IQR = Q_3 - Q_1</span> is in your Formula Booklet, but the outlier fence multipliers <span class=\"chem\">Q_1 - 1.5 × IQR</span> and <span class=\"chem\">Q_3 + 1.5 × IQR</span> are <strong>not printed in the booklet</strong>—memorize the <span class=\"chem\">1.5 × IQR</span> rule!": "<strong>公式集の確認 (SL 4.2)：</strong> <span class=\"chem\">IQR = Q_3 - Q_1</span> は公式集に載っていますが、外れ値の境界 <span class=\"chem\">Q_1 - 1.5 × IQR</span> と <span class=\"chem\">Q_3 + 1.5 × IQR</span> は<strong>公式集に載っていません</strong>——<span class=\"chem\">1.5 × IQR</span> のルールを暗記しましょう！",

    // Sampling methods, cumulative frequency and box plots > widget > data-title attribute
    "Interactive box plot, quartiles and 1.5 × IQR outlier detector": "箱ひげ図・四分位数・1.5 × IQR 外れ値判定ツール",

    // Sampling methods, cumulative frequency and box plots > widget > figcaption
    "Drag the 11th data value <span class=\"chem\">x_{11}</span> across the dashed <span class=\"chem\">1.5 × IQR</span> fences. Notice that when <span class=\"chem\">x_{11}</span> crosses the upper fence, the right whisker snaps back to the largest non-outlier in the dataset while <span class=\"chem\">x_{11}</span> is marked separately as an outlier.": "11 番目のデータ値 <span class=\"chem\">x_{11}</span> を破線の <span class=\"chem\">1.5 × IQR</span> 境界の前後へドラッグしてみましょう。<span class=\"chem\">x_{11}</span> が上側境界を超えると、右のひげが外れ値でない最大値まで戻り、<span class=\"chem\">x_{11}</span> は外れ値として別に印がつくことがわかります。",

    // Sampling methods, cumulative frequency and box plots > worked example > h3
    "Testing for outliers and adjusting box-plot whiskers": "外れ値の判定と箱ひげ図のひげの調整",

    // Sampling methods, cumulative frequency and box plots > worked example > p
    "The reaction times (in milliseconds) of 15 athletes have minimum <span class=\"chem\">142</span>, lower quartile <span class=\"chem\">Q_1 = 180</span>, median <span class=\"chem\">196</span>, upper quartile <span class=\"chem\">Q_3 = 212</span>, and two largest values <span class=\"chem\">254</span> and <span class=\"chem\">268</span>. Determine which, if any, of the extreme values are outliers, and state the endpoints of the two whiskers on a box-and-whisker plot. <strong>[5 marks]</strong>": "15 人の選手の反応時間（ミリ秒）の最小値は <span class=\"chem\">142</span>、第 1 四分位数は <span class=\"chem\">Q_1 = 180</span>、中央値は <span class=\"chem\">196</span>、第 3 四分位数は <span class=\"chem\">Q_3 = 212</span>、最も大きい 2 つの値は <span class=\"chem\">254</span> と <span class=\"chem\">268</span> である。外れ値があればどれかを決定し (Determine)、箱ひげ図の左右のひげの端点を述べなさい (state)。 <strong>[5 marks]</strong>",

    // Sampling methods, cumulative frequency and box plots > worked example > data-title attribute
    "Calculate the interquartile range (IQR)": "四分位範囲 (IQR) を計算する",

    // Sampling methods, cumulative frequency and box plots > worked example > p
    "The outlier fences depend on IQR = Q₃ − Q₁.": "外れ値の境界は IQR = Q₃ − Q₁ によって決まります。",

    // Sampling methods, cumulative frequency and box plots > worked example > data-title attribute
    "Compute both 1.5 × IQR outlier fences": "両側の 1.5 × IQR 外れ値境界を計算する",

    // Sampling methods, cumulative frequency and box plots > worked example > p
    "Any value below Q₁ − 1.5(IQR) or above Q₃ + 1.5(IQR) is classified as an outlier.": "Q₁ − 1.5(IQR) より小さい値、または Q₃ + 1.5(IQR) より大きい値が外れ値と判定されます。",

    // Sampling methods, cumulative frequency and box plots > worked example > maths line
    "Lower fence = 180 − 48 = 132, Upper fence = 212 + 48 = 260 <b>[M1 A1]</b>": "下側境界 = 180 − 48 = 132, 上側境界 = 212 + 48 = 260 <b>[M1 A1]</b>",

    // Sampling methods, cumulative frequency and box plots > worked example > data-title attribute
    "Compare the minimum and the two largest values against the fences": "最小値と大きい 2 つの値を境界と比較する",

    // Sampling methods, cumulative frequency and box plots > worked example > p
    "Whiskers extend to the most extreme data points that are NOT outliers.": "ひげは、外れ値ではない最も端のデータ点まで伸びます。",

    // Sampling methods, cumulative frequency and box plots > worked example > maths line
    "Since 142 ≥ 132, the minimum 142 is <b>not</b> a lower outlier (left whisker ends at 142). <b>[R1]</b>": "142 ≥ 132 より、最小値 142 は下側の外れ値では<b>ない</b>（左のひげの端点は 142）。 <b>[R1]</b>",

    // Sampling methods, cumulative frequency and box plots > worked example > maths line
    "Since 268 &gt; 260 but 254 ≤ 260, <b>268 is an outlier</b> and the right whisker ends at <b>254</b>. <b>[A1]</b>": "268 &gt; 260 かつ 254 ≤ 260 より、<b>268 は外れ値</b>であり、右のひげの端点は <b>254</b> である。 <b>[A1]</b>",

    // Sampling methods, cumulative frequency and box plots > worked example > p
    "Only 268 is an outlier; the whiskers end at 142 and 254.": "268 のみが外れ値であり、ひげの端点は 142 と 254 です。",

    // Sampling methods, cumulative frequency and box plots > try it > p
    "A dataset has lower quartile <span class=\"chem\">Q_1 = 35</span> and upper quartile <span class=\"chem\">Q_3 = 53</span>. Calculate the upper outlier fence <span class=\"chem\">Q_3 + 1.5 × IQR</span>.": "あるデータセットの第 1 四分位数が <span class=\"chem\">Q_1 = 35</span>、第 3 四分位数が <span class=\"chem\">Q_3 = 53</span> である。上側の外れ値境界 <span class=\"chem\">Q_3 + 1.5 × IQR</span> を計算しなさい (Calculate)。",

    // Sampling methods, cumulative frequency and box plots > try it > li
    "First find <span class=\"chem\">IQR = Q_3 - Q_1 = 53 - 35</span>.": "まず <span class=\"chem\">IQR = Q_3 - Q_1 = 53 - 35</span> を求めます。",

    // Sampling methods, cumulative frequency and box plots > try it > li
    "Multiply <span class=\"chem\">IQR = 18</span> by <span class=\"chem\">1.5</span> and add the result to <span class=\"chem\">Q_3 = 53</span>.": "<span class=\"chem\">IQR = 18</span> に <span class=\"chem\">1.5</span> を掛け、その結果を <span class=\"chem\">Q_3 = 53</span> に足します。",

    // Sampling methods, cumulative frequency and box plots > try it > maths line
    "Upper fence = 53 + 1.5(18) = 53 + 27 = <b>80</b>": "上側境界 = 53 + 1.5(18) = 53 + 27 = <b>80</b>",

    // Measures of center, standard deviation and linear coding > data-toc attribute
    "Mean, SD & coding": "平均・標準偏差・1 次変換",

    // Measures of center, standard deviation and linear coding > h2
    "Measures of center, standard deviation and linear coding": "代表値・標準偏差と 1 次変換（線形変換）",

    // Measures of center, standard deviation and linear coding > p
    "For a dataset with values <span class=\"chem\">x_1, x_2, ..., x_k</span> occurring with frequencies <span class=\"chem\">f_1, f_2, ..., f_k</span> (where <span class=\"chem\">n = Σ f_i</span>), the mean <span class=\"chem\">x̄</span> and population standard deviation <span class=\"chem\">σ</span> measure the center and typical distance from the mean:": "値 <span class=\"chem\">x_1, x_2, ..., x_k</span> がそれぞれ度数 <span class=\"chem\">f_1, f_2, ..., f_k</span>（<span class=\"chem\">n = Σ f_i</span>）で現れるデータセットでは、平均値 <span class=\"chem\">x̄</span> と母標準偏差 <span class=\"chem\">σ</span> が中心と平均からの典型的な散らばりを表します：",

    // Measures of center, standard deviation and linear coding > equation > dt
    "x<sub>i</sub>": "x<sub>i</sub>",

    // Measures of center, standard deviation and linear coding > equation > dd
    "data value (or <strong>mid-interval value</strong> for grouped data)": "データ値（階級分けされたデータでは<strong>階級値</strong>）",

    // Measures of center, standard deviation and linear coding > equation > dt
    "f<sub>i</sub>": "f<sub>i</sub>",

    // Measures of center, standard deviation and linear coding > equation > dd
    "frequency of class <span class=\"chem\">i</span>, with total sample size <span class=\"chem\">n = Σ f_i</span>": "階級 <span class=\"chem\">i</span> の度数（総度数 <span class=\"chem\">n = Σ f_i</span>）",

    // Measures of center, standard deviation and linear coding > equation > dd
    "population standard deviation and population variance": "母標準偏差と母分散",

    // Measures of center, standard deviation and linear coding > common mistake > p
    "<strong>GDC Trap — Always read <span class=\"mono\">σx</span>, never <span class=\"mono\">sx</span>:</strong> When you run <span class=\"mono\">1-Var Stats</span> on your GDC, it displays two standard deviations: <span class=\"mono\">sx</span> (which divides by <span class=\"chem\">n - 1</span>) and <span class=\"mono\">σx</span> (which divides by <span class=\"chem\">n</span>). In IB Math AA (both SL and HL), the standard deviation of a dataset is defined as <strong><span class=\"mono\">σx</span></strong>. For grouped tables, enter the class <strong>midpoints</strong> in <span class=\"mono\">L1</span> and the frequencies in <span class=\"mono\">L2</span> (<span class=\"mono\">FreqList: L2</span>).": "<strong>GDC の罠 — 必ず <span class=\"mono\">σx</span> を読み取り、<span class=\"mono\">sx</span> は使わない：</strong> GDC で <span class=\"mono\">1-Var Stats</span> を実行すると 2 つの標準偏差が表示されます：<span class=\"mono\">sx</span>（<span class=\"chem\">n - 1</span> で割る）と <span class=\"mono\">σx</span>（<span class=\"chem\">n</span> で割る）です。IB Math AA（SL・HL 共通）では、データの標準偏差は <strong><span class=\"mono\">σx</span></strong> として定義されます。度数分布表では <span class=\"mono\">L1</span> に<strong>階級値</strong>、<span class=\"mono\">L2</span> に度数（<span class=\"mono\">FreqList: L2</span>）を入力します。",

    // Measures of center, standard deviation and linear coding > h3
    "Linear coding: shifting by <span class=\"chem\">+b</span> vs scaling by <span class=\"chem\">×a</span>": "1 次変換：<span class=\"chem\">+b</span> の平行移動 vs <span class=\"chem\">×a</span> の定数倍",

    // Measures of center, standard deviation and linear coding > p
    "Suppose every value <span class=\"chem\">x_i</span> in a dataset is transformed by the linear rule <span class=\"chem\">y_i = a x_i + b</span> (for example, converting temperatures from Celsius to Fahrenheit or rescaling exam marks):": "データセットのすべての値 <span class=\"chem\">x_i</span> が 1 次式 <span class=\"chem\">y_i = a x_i + b</span> で変換される場合（例：摂氏から華氏への換算や試験の得点調整）を考えます：",

    // Measures of center, standard deviation and linear coding > li
    "<strong>Measures of position (mean, median, mode, <span class=\"chem\">Q_1, Q_3</span>)</strong> are multiplied by <span class=\"chem\">a</span> <em>and</em> shifted by <span class=\"chem\">+b</span>: <span class=\"chem\">ȳ = a x̄ + b</span>. If <span class=\"chem\">a &lt; 0</span> the order reverses: the new <span class=\"chem\">Q_1</span> is <span class=\"chem\">aQ_3 + b</span> and the new <span class=\"chem\">Q_3</span> is <span class=\"chem\">aQ_1 + b</span>.": "<strong>位置の尺度（平均値・中央値・最頻値・<span class=\"chem\">Q_1, Q_3</span>）</strong>は <span class=\"chem\">a</span> 倍された<em>うえで</em> <span class=\"chem\">+b</span> だけ平行移動します：<span class=\"chem\">ȳ = a x̄ + b</span>。<span class=\"chem\">a &lt; 0</span> のときは順序が逆になり、新しい <span class=\"chem\">Q_1</span> は <span class=\"chem\">aQ_3 + b</span>、新しい <span class=\"chem\">Q_3</span> は <span class=\"chem\">aQ_1 + b</span> になります。",

    // Measures of center, standard deviation and linear coding > li
    "<strong>Measures of spread (standard deviation <span class=\"chem\">σ</span>, <span class=\"chem\">IQR</span>, range)</strong> are multiplied by <span class=\"chem\">|a|</span> and are <strong>completely unaffected by <span class=\"chem\">+b</span></strong>: <span class=\"chem\">σ_y = |a|σ_x</span> and <span class=\"chem\">IQR_y = |a|IQR_x</span>.": "<strong>散らばりの尺度（標準偏差 <span class=\"chem\">σ</span>・<span class=\"chem\">IQR</span>・範囲）</strong>は <span class=\"chem\">|a|</span> 倍され、<strong><span class=\"chem\">+b</span> の影響をまったく受けません</strong>：<span class=\"chem\">σ_y = |a|σ_x</span>、<span class=\"chem\">IQR_y = |a|IQR_x</span>。",

    // Measures of center, standard deviation and linear coding > li
    "<strong>Variance <span class=\"chem\">σ^2</span></strong> is multiplied by <span class=\"chem\">a^2</span> (and unaffected by <span class=\"chem\">+b</span>): <span class=\"chem\">σ_y^2 = a^2 σ_x^2</span>.": "<strong>分散 <span class=\"chem\">σ^2</span></strong> は <span class=\"chem\">a^2</span> 倍されます（<span class=\"chem\">+b</span> の影響は受けません）：<span class=\"chem\">σ_y^2 = a^2 σ_x^2</span>。",

    // Measures of center, standard deviation and linear coding > worked example > h3
    "Paper 1 linear coding and finding ∑x² from mean and variance": "Paper 1 の 1 次変換と、平均・分散から ∑x² を求める",

    // Measures of center, standard deviation and linear coding > worked example > p
    "A sample of <span class=\"chem\">n = 10</span> measurements <span class=\"chem\">x_1, x_2, ..., x_{10}</span> has mean <span class=\"chem\">x̄ = 6</span> and standard deviation <span class=\"chem\">σ_x = 2</span>.<br> (a) Find the mean, standard deviation, and variance of the coded dataset <span class=\"chem\">y_i = 20 - 3x_i</span>. <strong>[3 marks]</strong><br> (b) Find the value of <span class=\"chem\">∑_{i=1}^{10} x_i^2</span>. <strong>[3 marks]</strong>": "<span class=\"chem\">n = 10</span> 個の測定値 <span class=\"chem\">x_1, x_2, ..., x_{10}</span> の平均値が <span class=\"chem\">x̄ = 6</span>、標準偏差が <span class=\"chem\">σ_x = 2</span> である。<br> (a) 変換されたデータセット <span class=\"chem\">y_i = 20 - 3x_i</span> の平均値・標準偏差・分散を求めなさい (Find)。 <strong>[3 marks]</strong><br> (b) <span class=\"chem\">∑_{i=1}^{10} x_i^2</span> の値を求めなさい (Find)。 <strong>[3 marks]</strong>",

    // Measures of center, standard deviation and linear coding > worked example > data-title attribute
    "(a) Apply linear coding with a = −3 and b = 20": "(a) a = −3、b = 20 として 1 次変換を適用する",

    // Measures of center, standard deviation and linear coding > worked example > p
    "The mean follows the full linear rule, whereas standard deviation scales by |−3| = +3 (never negative!).": "平均値は 1 次変換の式全体に従いますが、標準偏差は |−3| = +3 倍になります（決して負になりません！）。",

    // Measures of center, standard deviation and linear coding > worked example > data-title attribute
    "(b) Use the variance identity σ² = (∑x² / n) − x̄²": "(b) 分散の公式 σ² = (∑x² / n) − x̄² を使う",

    // Measures of center, standard deviation and linear coding > worked example > p
    "Writing variance in terms of the mean of the squares lets us solve directly for ∑x².": "分散を 2 乗の平均で表すことで、∑x² を直接求めることができます。",

    // Measures of center, standard deviation and linear coding > worked example > data-title attribute
    "Solve for ∑x²": "∑x² について解く",

    // Measures of center, standard deviation and linear coding > worked example > p
    "Add 36 to both sides and multiply by n = 10.": "両辺に 36 を足し、n = 10 を掛けます。",

    // Measures of center, standard deviation and linear coding > try it > p
    "A dataset <span class=\"chem\">X</span> has mean <span class=\"chem\">15</span> and standard deviation <span class=\"chem\">σ_X = 3</span>. Every value is transformed by <span class=\"chem\">Y = 100 - 4X</span>. Find the standard deviation <span class=\"chem\">σ_Y</span> of the transformed dataset.": "データセット <span class=\"chem\">X</span> の平均値が <span class=\"chem\">15</span>、標準偏差が <span class=\"chem\">σ_X = 3</span> である。すべての値を <span class=\"chem\">Y = 100 - 4X</span> で変換したとき、変換後の標準偏差 <span class=\"chem\">σ_Y</span> を求めなさい (Find)。",

    // Measures of center, standard deviation and linear coding > try it > li
    "Adding <span class=\"chem\">100</span> shifts the data without changing its spread.": "<span class=\"chem\">100</span> を足してもデータは平行移動するだけで、散らばりは変わりません。",

    // Measures of center, standard deviation and linear coding > try it > li
    "Multiplying by <span class=\"chem\">-4</span> scales the standard deviation by <span class=\"chem\">|-4| = 4</span>.": "<span class=\"chem\">-4</span> を掛けると、標準偏差は <span class=\"chem\">|-4| = 4</span> 倍になります。",

    // Correlation and the two least-squares regression lines > data-toc attribute
    "Correlation & regression": "相関と回帰",

    // Correlation and the two least-squares regression lines > h2
    "Correlation and the two least-squares regression lines": "相関係数と 2 つの最小二乗回帰直線",

    // Correlation and the two least-squares regression lines > p
    "<strong>Before you start:</strong> you need the gradient and <span class=\"chem\">y</span>-intercept of a straight line from <a href=\"t2-1.html\">2.1 Lines, functions, domains, inverses and composites</a>.": "<strong>始める前に：</strong><a href=\"t2-1.html\">2.1 直線・関数・定義域・逆関数と合成関数</a> で学ぶ直線の傾きと <span class=\"chem\">y</span> 切片が必要です。",

    // Correlation and the two least-squares regression lines > p
    "<dfn data-def=\"A measure of the strength and direction of the linear relationship between two quantitative variables x and y, satisfying −1 ≤ r ≤ 1.\">Pearson's product-moment correlation coefficient</dfn> <span class=\"chem\">r</span> measures how closely bivariate data points <span class=\"chem\">(x_i, y_i)</span> cluster around a straight line:": "<dfn data-def=\"2 つの量的変数 x と y の間の直線的な関係の強さと向きを表す指標で、−1 ≤ r ≤ 1 を満たす。\">ピアソンの積率相関係数 <span class=\"en-term\">(Pearson's product-moment correlation coefficient)</span></dfn> <span class=\"chem\">r</span> は、2 変量データ <span class=\"chem\">(x_i, y_i)</span> がどの程度 1 本の直線の周りに集まっているかを測ります：",

    // Correlation and the two least-squares regression lines > data-def attribute
    "A measure of the strength and direction of the linear relationship between two quantitative variables x and y, satisfying −1 ≤ r ≤ 1.": "2 つの量的変数 x と y の間の直線的な関係の強さと向きを表す指標で、−1 ≤ r ≤ 1 を満たす。",

    // Correlation and the two least-squares regression lines > li
    "<span class=\"chem\">r = +1</span>: perfect positive linear correlation; <span class=\"chem\">r = -1</span>: perfect negative linear correlation; <span class=\"chem\">r = 0</span>: no linear correlation.": "<span class=\"chem\">r = +1</span>：完全な正の相関；<span class=\"chem\">r = -1</span>：完全な負の相関；<span class=\"chem\">r = 0</span>：無相関（直線関係なし）。",

    // Correlation and the two least-squares regression lines > li
    "<strong>Rough guide to strength</strong> (a rule of thumb only; IB does not define fixed cut-offs): <span class=\"chem\">0.75 ≤ |r| ≤ 1</span> (strong), <span class=\"chem\">0.5 ≤ |r| &lt; 0.75</span> (moderate), <span class=\"chem\">|r| &lt; 0.5</span> (weak).": "<strong>強さのおおまかな目安</strong>（経験則にすぎず、IB は固定の境界値を定めていません）：<span class=\"chem\">0.75 ≤ |r| ≤ 1</span>（強い）、<span class=\"chem\">0.5 ≤ |r| &lt; 0.75</span>（中程度）、<span class=\"chem\">|r| &lt; 0.5</span>（弱い）。",
    "Interpreting the gradient <span class=\"chem\">a</span> and the intercept <span class=\"chem\">b</span>": "傾き <span class=\"chem\">a</span> と切片 <span class=\"chem\">b</span> の解釈",
    "On a scatter diagram, a line of best fit drawn by eye should pass through the mean point <span class=\"chem\">(x̄, ȳ)</span>. In the exam you find <span class=\"chem\">r</span> and the regression line <span class=\"chem\">y = ax + b</span> from the raw data on your GDC (<span class=\"mono\">LinReg(ax+b)</span>), and then interpret the parameters in context:": "散布図では、目分量で引く最適な直線は平均点 <span class=\"chem\">(x̄, ȳ)</span> を通るようにします。試験では生データから GDC（<span class=\"mono\">LinReg(ax+b)</span>）で <span class=\"chem\">r</span> と回帰直線 <span class=\"chem\">y = ax + b</span> を求め、そのうえでパラメータを文脈の中で解釈します：",
    "<strong>Gradient <span class=\"chem\">a</span></strong>: the estimated change in <span class=\"chem\">y</span> for each increase of one unit in <span class=\"chem\">x</span> (for example, “each extra hour of revision is associated with about <span class=\"chem\">a</span> more marks”).": "<strong>傾き <span class=\"chem\">a</span></strong>：<span class=\"chem\">x</span> が 1 単位増えるごとの <span class=\"chem\">y</span> の推定変化量（例：「復習を 1 時間増やすごとに、点数がおよそ <span class=\"chem\">a</span> 点高くなる傾向がある」）。",
    "<strong>Intercept <span class=\"chem\">b</span></strong>: the estimated value of <span class=\"chem\">y</span> when <span class=\"chem\">x = 0</span>. It is only meaningful if <span class=\"chem\">x = 0</span> lies within the range of the data; otherwise it is an extrapolation and should not be interpreted.": "<strong>切片 <span class=\"chem\">b</span></strong>：<span class=\"chem\">x = 0</span> のときの <span class=\"chem\">y</span> の推定値。<span class=\"chem\">x = 0</span> がデータの範囲内にあるときだけ意味をもち、そうでなければ外挿になるので解釈すべきではありません。",
    "Comparing two distributions with box plots": "箱ひげ図による 2 つの分布の比較",
    "To compare two box plots, comment on a measure of <strong>centre</strong> (compare the medians) and a measure of <strong>spread</strong> (compare the <span class=\"chem\">IQR</span>s or ranges), and say what each comparison means in context. For example: “Class B has the higher median, so Class B generally scored higher; Class A has the larger <span class=\"chem\">IQR</span>, so the middle 50% of Class A's scores are more spread out.”": "2 つの箱ひげ図を比較するときは、<strong>中心</strong>の尺度（中央値を比較）と<strong>散らばり</strong>の尺度（<span class=\"chem\">IQR</span> または範囲を比較）について述べ、それぞれの比較が文脈の中で何を意味するかを書きます。例：「B 組のほうが中央値が高いので、B 組のほうが全体的に得点が高い。A 組のほうが <span class=\"chem\">IQR</span> が大きいので、A 組の中央 50% の得点のほうが散らばっている。」",

    // Correlation and the two least-squares regression lines > li
    "<strong>Linear coding on <span class=\"chem\">r</span></strong>: Rescaling <span class=\"chem\">x</span> or <span class=\"chem\">y</span> by positive multipliers leaves <span class=\"chem\">r</span> <strong>unchanged</strong>. Multiplying one variable by a negative constant flips the sign of <span class=\"chem\">r</span>.": "<strong>1 次変換と <span class=\"chem\">r</span></strong>：<span class=\"chem\">x</span> や <span class=\"chem\">y</span> を正の定数倍しても <span class=\"chem\">r</span> は<strong>変わりません</strong>。一方の変数に負の定数を掛けると <span class=\"chem\">r</span> の符号が反転します。",

    // Correlation and the two least-squares regression lines > h3
    "Why there are two different regression lines (<span class=\"chem\">y</span> on <span class=\"chem\">x</span> vs <span class=\"chem\">x</span> on <span class=\"chem\">y</span>)": "なぜ 2 本の異なる回帰直線があるのか（<span class=\"chem\">y</span> on <span class=\"chem\">x</span> vs <span class=\"chem\">x</span> on <span class=\"chem\">y</span>）",

    // Correlation and the two least-squares regression lines > p
    "When neither <span class=\"chem\">x</span> nor <span class=\"chem\">y</span> is controlled in an experiment (for example, height <span class=\"chem\">x</span> and arm span <span class=\"chem\">y</span> of students), there are <strong>two</strong> least-squares regression lines:": "実験で <span class=\"chem\">x</span> も <span class=\"chem\">y</span> も制御されていない場合（例：生徒の身長 <span class=\"chem\">x</span> と両腕を広げた長さ <span class=\"chem\">y</span>）、<strong>2 本</strong>の最小二乗回帰直線が存在します：",

    // Correlation and the two least-squares regression lines > equation > maths line
    "<i>y</i> on <i>x</i>: &nbsp; <i>y</i> − <i>ȳ</i> = <i>a</i>(<i>x</i> − <i>x̄</i>) &nbsp; (<i>y</i> = <i>ax</i> + <i>b</i>) &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <i>x</i> on <i>y</i>: &nbsp; <i>x</i> − <i>x̄</i> = <i>c</i>(<i>y</i> − <i>ȳ</i>) &nbsp; (<i>x</i> = <i>cy</i> + <i>d</i>)": "<i>y</i> の <i>x</i> への回帰: &nbsp; <i>y</i> − <i>ȳ</i> = <i>a</i>(<i>x</i> − <i>x̄</i>) &nbsp; (<i>y</i> = <i>ax</i> + <i>b</i>) &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <i>x</i> の <i>y</i> への回帰: &nbsp; <i>x</i> − <i>x̄</i> = <i>c</i>(<i>y</i> − <i>ȳ</i>) &nbsp; (<i>x</i> = <i>cy</i> + <i>d</i>)",

    // Correlation and the two least-squares regression lines > equation > dt
    "y on x": "y on x（y の x への回帰直線）",

    // Correlation and the two least-squares regression lines > equation > dd
    "minimizes squared <strong>vertical</strong> distances; use to estimate <span class=\"chem\">y</span> from a given <span class=\"chem\">x</span>": "<strong>縦方向</strong>の距離の 2 乗和を最小化；与えられた <span class=\"chem\">x</span> から <span class=\"chem\">y</span> を推定するときに使う",

    // Correlation and the two least-squares regression lines > equation > dt
    "x on y": "x on y（x の y への回帰直線）",

    // Correlation and the two least-squares regression lines > equation > dd
    "minimizes squared <strong>horizontal</strong> distances; use to estimate <span class=\"chem\">x</span> from a given <span class=\"chem\">y</span>": "<strong>横方向</strong>の距離の 2 乗和を最小化；与えられた <span class=\"chem\">y</span> から <span class=\"chem\">x</span> を推定するときに使う",

    // Correlation and the two least-squares regression lines > equation > dd
    "the mean point where <strong>both regression lines always intersect</strong>": "<strong>2 本の回帰直線が常に交わる</strong>平均点",

    // Correlation and the two least-squares regression lines > key idea > p
    "<strong>Extension (beyond the AA guide). Why the two lines only coincide when <span class=\"chem\">|r| = 1</span>:</strong> The gradient of the <span class=\"chem\">y</span> on <span class=\"chem\">x</span> line is <span class=\"chem\">a = r(σ_y / σ_x)</span>, while the coefficient of <span class=\"chem\">y</span> in the <span class=\"chem\">x</span> on <span class=\"chem\">y</span> line is <span class=\"chem\">c = r(σ_x / σ_y)</span>. Multiplying them gives <span class=\"chem\">a · c = r^2</span>! Therefore, the two lines are identical if and only if <span class=\"chem\">r^2 = 1</span> (<span class=\"chem\">r = ±1</span>), and they always cross at the mean point <span class=\"chem\">(x̄, ȳ)</span>. The identities <span class=\"chem\">a = r(σ_y / σ_x)</span> and <span class=\"chem\">a · c = r^2</span> are not in the AA guide or the formula booklet: in the exam, <span class=\"chem\">r</span> comes from your GDC.": "<strong>発展（AA ガイドの範囲外）。なぜ <span class=\"chem\">|r| = 1</span> のときだけ 2 直線が一致するのか：</strong> <span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線の傾きは <span class=\"chem\">a = r(σ_y / σ_x)</span> であり、<span class=\"chem\">x</span> の <span class=\"chem\">y</span> への回帰直線の <span class=\"chem\">y</span> の係数は <span class=\"chem\">c = r(σ_x / σ_y)</span> です。これらを掛けると <span class=\"chem\">a · c = r^2</span> になります！したがって、2 直線が一致するのは <span class=\"chem\">r^2 = 1</span>（<span class=\"chem\">r = ±1</span>）のときだけであり、常に平均点 <span class=\"chem\">(x̄, ȳ)</span> で交わります。恒等式 <span class=\"chem\">a = r(σ_y / σ_x)</span> と <span class=\"chem\">a · c = r^2</span> は AA ガイドにも公式集にもありません：試験では <span class=\"chem\">r</span> は GDC で求めます。",

    // Correlation and the two least-squares regression lines > widget > data-title attribute
    "Interactive y-on-x vs x-on-y regression explorer": "y on x vs x on y 回帰直線エクスプローラー",

    // Correlation and the two least-squares regression lines > widget > figcaption
    "Adjust the correlation slider <span class=\"chem\">r</span>. Notice how both lines always pivot through the green mean point <span class=\"chem\">(x̄, ȳ) = (5, 6)</span>. When <span class=\"chem\">|r| = 1</span>, the solid <span class=\"chem\">y</span>-on-<span class=\"chem\">x</span> line and dashed <span class=\"chem\">x</span>-on-<span class=\"chem\">y</span> line merge into one; as <span class=\"chem\">|r| → 0</span>, they scissor apart until they are perpendicular at <span class=\"chem\">r = 0</span>.": "相関係数スライダー <span class=\"chem\">r</span> を動かしてみましょう。どちらの直線も常に緑色の平均点 <span class=\"chem\">(x̄, ȳ) = (5, 6)</span> を通って回転します。<span class=\"chem\">|r| = 1</span> のとき実線の <span class=\"chem\">y</span>-on-<span class=\"chem\">x</span> と破線の <span class=\"chem\">x</span>-on-<span class=\"chem\">y</span> は 1 本に重なり、<span class=\"chem\">|r| → 0</span> につれて開いて <span class=\"chem\">r = 0</span> で直交します。",

    // Correlation and the two least-squares regression lines > worked example > h3
    "Using both regression lines to find the mean point and predict x from y": "2 本の回帰直線から平均点を求め、y から x を予測する",

    // Correlation and the two least-squares regression lines > worked example > p
    "For a bivariate dataset <span class=\"chem\">(x, y)</span> with <span class=\"chem\">10 ≤ x ≤ 30</span> and <span class=\"chem\">15 ≤ y ≤ 45</span>, the regression line of <span class=\"chem\">y</span> on <span class=\"chem\">x</span> is <span class=\"chem\">y = 1.2x + 6</span> and the regression line of <span class=\"chem\">x</span> on <span class=\"chem\">y</span> is <span class=\"chem\">x = 0.6y + 2</span>.<br> (a) Find the mean values <span class=\"chem\">x̄</span> and <span class=\"chem\">ȳ</span>. <strong>[3 marks]</strong><br> (b) <em>(Extension, beyond the AA guide)</em> Find Pearson's correlation coefficient <span class=\"chem\">r</span>. <strong>[2 marks]</strong><br> (c) Estimate <span class=\"chem\">x</span> when <span class=\"chem\">y = 25</span>, and explain why your estimate is reliable. <strong>[3 marks]</strong>": "<span class=\"chem\">10 ≤ x ≤ 30</span> かつ <span class=\"chem\">15 ≤ y ≤ 45</span> の 2 変量データ <span class=\"chem\">(x, y)</span> において、<span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線が <span class=\"chem\">y = 1.2x + 6</span>、<span class=\"chem\">x</span> の <span class=\"chem\">y</span> への回帰直線が <span class=\"chem\">x = 0.6y + 2</span> である。<br> (a) 平均値 <span class=\"chem\">x̄</span> と <span class=\"chem\">ȳ</span> を求めなさい (Find)。 <strong>[3 marks]</strong><br> (b) <em>（発展、AA ガイドの範囲外）</em>ピアソンの相関係数 <span class=\"chem\">r</span> を求めなさい (Find)。 <strong>[2 marks]</strong><br> (c) <span class=\"chem\">y = 25</span> のときの <span class=\"chem\">x</span> を推定し、その推定値が信頼できる理由を説明しなさい。 <strong>[3 marks]</strong>",

    // Correlation and the two least-squares regression lines > worked example > data-title attribute
    "(a) Solve the two regression equations simultaneously for (x̄, ȳ)": "(a) 2 つの回帰方程式を連立して (x̄, ȳ) を求める",

    // Correlation and the two least-squares regression lines > worked example > p
    "Both regression lines pass through the mean point (x̄, ȳ).": "どちらの回帰直線も平均点 (x̄, ȳ) を通ります。",

    // Correlation and the two least-squares regression lines > worked example > maths line
    "Substitute <i>ȳ</i> = 1.2<i>x̄</i> + 6 into <i>x̄</i> = 0.6<i>ȳ</i> + 2: <b>[M1]</b>": "<i>ȳ</i> = 1.2<i>x̄</i> + 6 を <i>x̄</i> = 0.6<i>ȳ</i> + 2 に代入する： <b>[M1]</b>",

    // Correlation and the two least-squares regression lines > worked example > data-title attribute
    "(b) Extension: use a · c = r² and match the sign of the slopes": "(b) 発展：a · c = r² を使い、傾きの符号を合わせる",

    // Correlation and the two least-squares regression lines > worked example > p
    "Extension only: in the exam r comes from the GDC. Since a = 1.2 &gt; 0 and c = 0.6 &gt; 0, the correlation is positive and r² = a · c.": "発展のみ：試験では r は GDC で求めます。a = 1.2 &gt; 0 かつ c = 0.6 &gt; 0 なので、相関は正であり r² = a · c です。",

    // Correlation and the two least-squares regression lines > worked example > maths line
    "<i>r</i><sup>2</sup> = 1.2 × 0.6 = 0.72 ⇒ <i>r</i> = +√0.72 ≈ <b>0.849</b> (or <span class=\"frac\"><span>3√2</span><span>5</span></span>) <b>[M1 A1]</b>": "<i>r</i><sup>2</sup> = 1.2 × 0.6 = 0.72 ⇒ <i>r</i> = +√0.72 ≈ <b>0.849</b> （または <span class=\"frac\"><span>3√2</span><span>5</span></span>） <b>[M1 A1]</b>",

    // Correlation and the two least-squares regression lines > worked example > data-title attribute
    "(c) Use the x on y line to estimate x when y = 25": "(c) y = 25 のとき x on y の直線を使って x を推定する",

    // Correlation and the two least-squares regression lines > worked example > p
    "Because y = 25 is given and x is being predicted, we must use the x on y line.": "y = 25 が与えられていて x を予測するので、x on y の直線を使わなければなりません。",

    // Correlation and the two least-squares regression lines > worked example > maths line
    "Reliable because <i>r</i> ≈ 0.849 indicates strong positive correlation AND <i>y</i> = 25 lies within [15, 45] (<b>interpolation</b>). <b>[R1]</b>": "<i>r</i> ≈ 0.849 が強い正の相関を示し、かつ <i>y</i> = 25 が [15, 45] の範囲内（<b>内挿</b>）にあるため信頼できる。 <b>[R1]</b>",

    // Correlation and the two least-squares regression lines > worked example > p
    "(a) x̄ = 20, ȳ = 30; (b) r ≈ 0.849; (c) x = 17 (reliable by strong correlation and interpolation)": "(a) x̄ = 20, ȳ = 30；(b) r ≈ 0.849；(c) x = 17（強い相関と内挿により信頼できる）",

    // Correlation and the two least-squares regression lines > try it > p
    "For a bivariate dataset, the regression line of <span class=\"chem\">y</span> on <span class=\"chem\">x</span> is <span class=\"chem\">y = 2x + 10</span> and the regression line of <span class=\"chem\">x</span> on <span class=\"chem\">y</span> is <span class=\"chem\">x = 0.4y + 8</span>. Calculate the value of <span class=\"chem\">ȳ</span> (the mean of <span class=\"chem\">y</span>).": "ある 2 変量データにおいて、<span class=\"chem\">y</span> の <span class=\"chem\">x</span> への回帰直線が <span class=\"chem\">y = 2x + 10</span>、<span class=\"chem\">x</span> の <span class=\"chem\">y</span> への回帰直線が <span class=\"chem\">x = 0.4y + 8</span> である。<span class=\"chem\">ȳ</span>（<span class=\"chem\">y</span> の平均値）の値を計算しなさい (Calculate)。",

    // Correlation and the two least-squares regression lines > try it > li
    "Both lines intersect at <span class=\"chem\">(x̄, ȳ)</span>, so substitute <span class=\"chem\">x̄ = 0.4ȳ + 8</span> into <span class=\"chem\">ȳ = 2x̄ + 10</span>.": "2 直線は <span class=\"chem\">(x̄, ȳ)</span> で交わるので、<span class=\"chem\">x̄ = 0.4ȳ + 8</span> を <span class=\"chem\">ȳ = 2x̄ + 10</span> に代入します。",

    // Correlation and the two least-squares regression lines > try it > li
    "Solve <span class=\"chem\">ȳ = 2(0.4ȳ + 8) + 10 = 0.8ȳ + 26</span> for <span class=\"chem\">ȳ</span>.": "<span class=\"chem\">ȳ = 2(0.4ȳ + 8) + 10 = 0.8ȳ + 26</span> を <span class=\"chem\">ȳ</span> について解きます。",

    // Quick practice > data-toc attribute
    "Practice": "演習",

    // Quick practice > h2
    "Quick practice": "確認問題",

    // Quick practice > h3
    "Foundation: sampling, averages and spread": "基礎：標本抽出・代表値・散らばり",

    // Quick practice > data-title attribute
    "4.1 foundation": "4.1 基礎",

    // Quick practice > h3
    "Exam standard: Paper 1 and Paper 2 (GDC statistics from raw data)": "試験標準：Paper 1 と Paper 2（生データから GDC で統計量を求める）",

    // Quick practice > data-title attribute
    "4.1 exam standard": "4.1 試験標準",

    // Quick practice > h3
    "Challenge: decode the context first": "発展：まず状況を読み解く",

    // Quick practice > data-title attribute
    "4.1 challenge": "4.1 発展",

    // widget string (assets/js/widgets-t4-1.js)
    "Base dataset (10 values)": "基本データセット（10 個の値）",

    // widget string (assets/js/widgets-t4-1.js)
    "Balanced sample": "バランスのとれた標本",

    // widget string (assets/js/widgets-t4-1.js)
    "Right-skewed sample": "右に歪んだ標本",

    // widget string (assets/js/widgets-t4-1.js)
    "Compact low-IQR sample": "IQR が小さい密集した標本",

    // widget string (assets/js/widgets-t4-1.js)
    "11th data value x₁₁": "11 番目のデータ値 x₁₁",

    // widget string (assets/js/widgets-t4-1.js)
    "Constant shift +k": "定数シフト +k",

    // widget string (assets/js/widgets-t4-1.js)
    "Five-number summary": "5 数要約",

    // widget string (assets/js/widgets-t4-1.js)
    "IQR & outlier fences": "IQR と外れ値の境界",

    // widget string (assets/js/widgets-t4-1.js)
    "Outlier test for x₁₁": "x₁₁ の外れ値判定",

    // widget string (assets/js/widgets-t4-1.js)
    "Box-and-whisker plot with 1.5 IQR lower and upper outlier fences": "1.5 IQR の下側・上側外れ値境界付きの箱ひげ図",

    // widget string (assets/js/widgets-t4-1.js)
    "Upper outlier — whisker stops at": "上側の外れ値 — ひげの端は",

    // widget string (assets/js/widgets-t4-1.js)
    "Lower outlier — whisker stops at": "下側の外れ値 — ひげの端は",

    // widget string (assets/js/widgets-t4-1.js)
    "Not an outlier": "外れ値ではない",

    // widget string (assets/js/widgets-t4-1.js)
    "Correlation r": "相関係数 r",

    // widget string (assets/js/widgets-t4-1.js)
    "Target y₀ (to predict x)": "目標値 y₀（x を予測）",

    // widget string (assets/js/widgets-t4-1.js)
    "y on x line (predict y from x)": "y on x の直線（x から y を予測）",

    // widget string (assets/js/widgets-t4-1.js)
    "x on y line (predict x from y)": "x on y の直線（y から x を予測）",

    // widget string (assets/js/widgets-t4-1.js)
    "Estimate of x when y = y₀": "y = y₀ のときの x の推定値",

    // widget string (assets/js/widgets-t4-1.js)
    "lines coincide since |r| = 1": "|r| = 1 のため 2 直線が一致",

    // widget string (assets/js/widgets-t4-1.js)
    "r = 0: lines are perpendicular!": "r = 0：2 直線は直交！",

    // widget string (assets/js/widgets-t4-1.js)
    "via x on y": "x on y を使用",

    // widget string (assets/js/widgets-t4-1.js)
    "wrong if rearranging y on x": "y on x を変形すると誤り",

    // widget string (assets/js/widgets-t4-1.js)
    "y on x (predict y)": "y on x（y を予測）",

    // widget string (assets/js/widgets-t4-1.js)
    "x on y (predict x)": "x on y（x を予測）",

    // widget string (assets/js/widgets-t4-1.js)
    "Scatter plot with y-on-x and x-on-y regression lines intersecting at the mean point": "平均点で交わる y on x と x on y の回帰直線を描いた散布図",

  }
});
