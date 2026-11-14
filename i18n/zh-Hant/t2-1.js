/* t2-1 — zh-Hant translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't2-1', {
  strings: {

    // page title (browser tab)
    "2.1 Lines, functions, domains, inverses and composites | Analysis Lab": "2.1 直線、函數、定義域、反函數與複合函數 | Analysis Lab",

    // Lines, functions, domains, inverses and composites > page header > p
    "Topic 2.1 · SL 2.1–2.5": "課題 2.1 · SL 2.1–2.5",

    // Lines, functions, domains, inverses and composites > page header > h1
    "Lines, functions, domains, inverses and composites": "直線、函數、定義域、反函數與複合函數",

    // Lines, functions, domains, inverses and composites > page header > span
    "How do mathematical rules map allowed inputs to outputs, when can we chain two rules together, and when can a rule be reversed?": "數學規則如何把容許的輸入對應到輸出？何時可以把兩條規則串聯起來？又在甚麼條件下規則可以逆轉？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "學習清單",

    // What you need to be able to do > h2
    "What you need to be able to do": "你需要掌握的能力",

    // What you need to be able to do > checklist > span
    "Write and convert equations of straight lines between gradient-intercept form <span class=\"chem\">y = mx + c</span>, point-gradient form <span class=\"chem\">y - y_1 = m(x - x_1)</span>, and general form <span class=\"chem\">ax + by + d = 0</span>.": "寫出直線方程，並在斜截式 <span class=\"chem\">y = mx + c</span>、點斜式 <span class=\"chem\">y - y_1 = m(x - x_1)</span> 與一般式 <span class=\"chem\">ax + by + d = 0</span> 之間互相轉換。",

    // What you need to be able to do > checklist > span
    "Use parallel (<span class=\"chem\">m_1 = m_2</span>) and perpendicular (<span class=\"chem\">m_1 m_2 = -1</span>) gradients to find equations of normals and perpendicular bisectors.": "運用平行（<span class=\"chem\">m_1 = m_2</span>）與垂直（<span class=\"chem\">m_1 m_2 = -1</span>）斜率關係，求法線與垂直平分線的方程。",

    // What you need to be able to do > checklist > span
    "Find the natural domain and exact range of a function by checking denominators, even roots, logarithms, turning points, and asymptotes.": "透過檢查分母、偶次方根、對數、極值點與漸近線，求函數的自然定義域與準確值域。",

    // What you need to be able to do > checklist > span
    "Evaluate and simplify composite functions <span class=\"chem\">(f ∘ g)(x) = f(g(x))</span> and test whether <span class=\"chem\">Range(g)</span> fits inside <span class=\"chem\">Domain(f)</span>.": "計算並化簡複合函數 <span class=\"chem\">(f ∘ g)(x) = f(g(x))</span>，並檢驗 <span class=\"chem\">Range(g)</span> 是否包含於 <span class=\"chem\">Domain(f)</span> 之內。",

    // What you need to be able to do > checklist > span
    "Find the inverse function <span class=\"chem\">f^{-1}(x)</span> algebraically, state its domain and range by swapping with <span class=\"chem\">f</span>, and sketch <span class=\"chem\">y = f^{-1}(x)</span> as a reflection in <span class=\"chem\">y = x</span>.": "以代數方法求反函數 <span class=\"chem\">f^{-1}(x)</span>，透過與 <span class=\"chem\">f</span> 對調寫出其定義域與值域，並把 <span class=\"chem\">y = f^{-1}(x)</span> 描繪為沿直線 <span class=\"chem\">y = x</span> 的反射。",

    // What you need to be able to do > checklist > span
    "Solve <span class=\"chem\">f(x) = f^{-1}(x)</span> efficiently by solving <span class=\"chem\">f(x) = x</span> along the mirror line <span class=\"chem\">y = x</span>.": "透過在鏡線 <span class=\"chem\">y = x</span> 上解 <span class=\"chem\">f(x) = x</span>，快速解出 <span class=\"chem\">f(x) = f^{-1}(x)</span>。",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "題型解碼",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "題型解碼：如何辨識應用的方法",

    // Question decoder: spotting which technique to use > p
    "Topic 2 exam questions use short, standard phrases that point to a specific algebraic shortcut. Use this table to translate the wording before you start writing.": "課題 2 的考試題目常使用簡短而標準的字眼，指向特定的代數捷徑。動筆前先用下表解讀題目字眼。",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — Lines, domains, composites and inverses": "題型解碼 — 直線、定義域、複合函數與反函數",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "題目中的常見字眼",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "實際含義（公式與列式）",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1（不可用計算機）與 Paper 2（可用 GDC）策略",

    // Question decoder: spotting which technique to use > table > th
    "“Find the perpendicular bisector of <span class=\"chem\">[AB]</span>”": "「求 <span class=\"chem\">[AB]</span> 的垂直平分線」",

    // Question decoder: spotting which technique to use > table > td
    "Line through the <strong>midpoint</strong> <span class=\"chem\">M((x_1+x_2)/2, (y_1+y_2)/2)</span> with <strong>negative reciprocal gradient</strong> <span class=\"chem\">m_2 = -1 / m_1</span>.": "通過<strong>中點</strong> <span class=\"chem\">M((x_1+x_2)/2, (y_1+y_2)/2)</span> 且斜率為<strong>負倒數</strong> <span class=\"chem\">m_2 = -1 / m_1</span> 的直線。",

    // Question decoder: spotting which technique to use > table > td
    "Find <span class=\"chem\">M</span> and <span class=\"chem\">m_{AB}</span> first, flip and negate to get <span class=\"chem\">m_2</span>, then plug into <span class=\"chem\">y - y_M = m_2(x - x_M)</span>. Clear fractions if <span class=\"chem\">ax + by + d = 0</span> is requested.": "先求 <span class=\"chem\">M</span> 與 <span class=\"chem\">m_{AB}</span>，倒轉並變號得 <span class=\"chem\">m_2</span>，再代入 <span class=\"chem\">y - y_M = m_2(x - x_M)</span>。若題目要求 <span class=\"chem\">ax + by + d = 0</span>，記得去分母。",

    // Question decoder: spotting which technique to use > table > th
    "“State the largest possible domain of <span class=\"chem\">f</span>”": "「寫出 <span class=\"chem\">f</span> 的最大可能定義域」",

    // Question decoder: spotting which technique to use > table > td
    "Check the 3 domain exclusions: <strong>denominator <span class=\"chem\">!= 0</span></strong>, <strong>inside even root <span class=\"chem\">&gt;= 0</span></strong>, and <strong>inside log <span class=\"chem\">&gt; 0</span></strong>.": "檢查 3 個定義域限制：<strong>分母 <span class=\"chem\">!= 0</span></strong>、<strong>偶次根式內 <span class=\"chem\">&gt;= 0</span></strong>、<strong>對數內 <span class=\"chem\">&gt; 0</span></strong>。",

    // Question decoder: spotting which technique to use > table > td
    "<strong>P1</strong>: Solve the resulting linear or quadratic inequality. <strong>P2</strong>: Graph <span class=\"chem\">y = f(x)</span> to confirm where the curve exists and where vertical asymptotes sit.": "<strong>Paper 1</strong>：解出所得的一次或二次不等式。<strong>Paper 2</strong>：繪出 <span class=\"chem\">y = f(x)</span> 圖像以確認曲線存在區間與鉛垂漸近線位置。",

    // Question decoder: spotting which technique to use > table > th
    "“Find the range of <span class=\"chem\">f</span> on <span class=\"chem\">a &lt;= x &lt;= b</span>”": "「求 <span class=\"chem\">f</span> 在 <span class=\"chem\">a &lt;= x &lt;= b</span> 上的值域」",

    // Question decoder: spotting which technique to use > table > td
    "Set of all <strong><span class=\"chem\">y</span>-values</strong> reached on the given domain. <strong>Do NOT just plug in the endpoints!</strong>": "在指定定義域上所達到的所有 <strong><span class=\"chem\">y</span> 值</strong>集合。<strong>切勿只代入端點！</strong>",

    // Question decoder: spotting which technique to use > table > td
    "Always sketch the graph on <span class=\"chem\">[a, b]</span>. Check both endpoints <span class=\"chem\">f(a), f(b)</span> <em>and</em> any local maximum/minimum (vertex) inside <span class=\"chem\">[a, b]</span>.": "務必在 <span class=\"chem\">[a, b]</span> 上描繪圖像略圖。同時檢查兩個端點 <span class=\"chem\">f(a), f(b)</span> <em>以及</em>區間 <span class=\"chem\">[a, b]</span> 內的任何局部極大／極小值（頂點）。",

    // Question decoder: spotting which technique to use > table > th
    "“Find <span class=\"chem\">(f ∘ g)(x)</span>”": "「求 <span class=\"chem\">(f ∘ g)(x)</span>」",

    // Question decoder: spotting which technique to use > table > td
    "Work <strong>inside-out</strong>: <span class=\"chem\">(f ∘ g)(x) = f(g(x))</span>. Replace every <span class=\"chem\">x</span> in the formula for <span class=\"chem\">f</span> with the entire expression <span class=\"chem\">g(x)</span>.": "<strong>由內而外</strong>運算：<span class=\"chem\">(f ∘ g)(x) = f(g(x))</span>。把 <span class=\"chem\">f</span> 公式中的每個 <span class=\"chem\">x</span> 替換為整個表式 <span class=\"chem\">g(x)</span>。",

    // Question decoder: spotting which technique to use > table > td
    "If asked for a single number <span class=\"chem\">(f ∘ g)(2)</span>, calculate the number <span class=\"chem\">g(2)</span> first, then plug that number into <span class=\"chem\">f</span>.": "若題目要求單一數值 <span class=\"chem\">(f ∘ g)(2)</span>，先算出數值 <span class=\"chem\">g(2)</span>，再把該數值代入 <span class=\"chem\">f</span>。",

    // Question decoder: spotting which technique to use > table > th
    "“For <span class=\"chem\">(f ∘ g)(x)</span> to exist / be defined…”": "「為使 <span class=\"chem\">(f ∘ g)(x)</span> 存在／有定義……」",

    // Question decoder: spotting which technique to use > table > td
    "Every output of the inner function must be a legal input for the outer function: <span class=\"chem\">Range(g)</span> must be a subset of <span class=\"chem\">Domain(f)</span>.": "內層函數的每個輸出都必須是外層函數的合法輸入：<span class=\"chem\">Range(g)</span> 必須是 <span class=\"chem\">Domain(f)</span> 的子集。",

    // Question decoder: spotting which technique to use > table > td
    "Find <span class=\"chem\">Range(g)</span> first, then restrict the domain of <span class=\"chem\">g</span> (or adjust a parameter) so that every output satisfies <span class=\"chem\">Domain(f)</span>.": "先求 <span class=\"chem\">Range(g)</span>，再限制 <span class=\"chem\">g</span> 的定義域（或調整參數），使每個輸出都滿足 <span class=\"chem\">Domain(f)</span>。",

    // Question decoder: spotting which technique to use > table > th
    "“Find <span class=\"chem\">f^{-1}(a)</span>” (where <span class=\"chem\">a</span> is a number)": "「求 <span class=\"chem\">f^{-1}(a)</span>」（其中 <span class=\"chem\">a</span> 為常數）",

    // Question decoder: spotting which technique to use > table > td
    "An input to <span class=\"chem\">f^{-1}</span> is an <strong>output of <span class=\"chem\">f</span></strong>. Do not invert a messy function—just solve <span class=\"chem\">f(x) = a</span>!": "<span class=\"chem\">f^{-1}</span> 的輸入就是 <strong><span class=\"chem\">f</span> 的輸出</strong>。不要硬求複雜函數的反函數——直接解 <span class=\"chem\">f(x) = a</span> 即可！",

    // Question decoder: spotting which technique to use > table > td
    "<strong>P1</strong>: Solve <span class=\"chem\">f(x) = a</span> algebraically and keep the root inside <span class=\"chem\">Domain(f)</span>. <strong>P2</strong>: Intersect <span class=\"chem\">y = f(x)</span> with the horizontal line <span class=\"chem\">y = a</span>.": "<strong>Paper 1</strong>：以代數方法解 <span class=\"chem\">f(x) = a</span>，並保留位於 <span class=\"chem\">Domain(f)</span> 內的根。<strong>Paper 2</strong>：求 <span class=\"chem\">y = f(x)</span> 與水平線 <span class=\"chem\">y = a</span> 的交點。",

    // Question decoder: spotting which technique to use > table > th
    "“Solve <span class=\"chem\">f(x) = f^{-1}(x)</span>”": "「解 <span class=\"chem\">f(x) = f^{-1}(x)</span>」",

    // Question decoder: spotting which technique to use > table > td
    "A curve and its reflection in <span class=\"chem\">y = x</span> meet on the mirror line itself (for increasing functions). Solve <strong><span class=\"chem\">f(x) = x</span></strong> instead!": "曲線與其沿 <span class=\"chem\">y = x</span> 反射的圖像會在鏡線本身相交（對遞增函數而言）。改為解 <strong><span class=\"chem\">f(x) = x</span></strong>！",

    // Question decoder: spotting which technique to use > table > td
    "Instead of equating a quadratic to a square root (which creates a degree-4 equation), solve the simple equation <span class=\"chem\">f(x) = x</span> inside the restricted domain.": "與其把二次式等於平方根（會產生 4 次方程），不如在受限定義域內解簡單的方程 <span class=\"chem\">f(x) = x</span>。",

    // Equations of straight lines and perpendicular bisectors > data-toc attribute
    "Straight lines": "直線方程",

    // Equations of straight lines and perpendicular bisectors > h2
    "Equations of straight lines and perpendicular bisectors": "直線方程與垂直平分線",

    // Equations of straight lines and perpendicular bisectors > p
    "A straight line in the coordinate plane is completely determined by its steepness—called its <dfn data-def=\"The rate of change of y with respect to x along a line: m = (y₂ − y₁) / (x₂ − x₁).\">gradient</dfn> <span class=\"chem\">m</span>—and a single point on the line. Your Formula Booklet gives three equivalent ways to write the equation of a line.": "坐標平面上的直線完全由其傾斜程度——即<dfn data-def=\"直線上 y 相對於 x 的變化率：m = (y₂ − y₁) / (x₂ − x₁)。\">斜率 <span class=\"en-term\">(gradient)</span></dfn> <span class=\"chem\">m</span>——以及線上的一點所決定。你的公式手冊提供了三種等價的直線方程寫法。",

    // Equations of straight lines and perpendicular bisectors > data-def attribute
    "The rate of change of y with respect to x along a line: m = (y₂ − y₁) / (x₂ − x₁).": "直線上 y 相對於 x 的變化率：m = (y₂ − y₁) / (x₂ − x₁)。",

    // Equations of straight lines and perpendicular bisectors > equation > dd
    "gradient of the line (<span class=\"chem\">x_2 != x_1</span>)": "直線的斜率（<span class=\"chem\">x_2 != x_1</span>）",

    // Equations of straight lines and perpendicular bisectors > equation > dd
    "<i>y</i>-intercept (where the line crosses the <i>y</i>-axis at <span class=\"chem\">(0, c)</span>)": "<i>y</i> 軸截距（直線與 <i>y</i> 軸相交於 <span class=\"chem\">(0, c)</span>）",

    // Equations of straight lines and perpendicular bisectors > equation > dd
    "any known point lying on the line": "直線上任何已知的一點",

    // Equations of straight lines and perpendicular bisectors > equation > dd
    "constants in general form (by IB convention, integers with <span class=\"chem\">a &gt; 0</span>)": "一般式中的常數（按 IB 慣例，取整數且 <span class=\"chem\">a &gt; 0</span>）",

    // Equations of straight lines and perpendicular bisectors > formula booklet note > p
    "<strong>In your Formula Booklet (SL 2.1):</strong> The gradient formula <span class=\"chem\">m = (y_2 - y_1)/(x_2 - x_1)</span> and all three line equations are printed. You must memorize the parallel and perpendicular gradient relationships and the midpoint formula from Topic 3.1.": "<strong>公式手冊（SL 2.1）：</strong>手冊印有斜率公式 <span class=\"chem\">m = (y_2 - y_1)/(x_2 - x_1)</span> 及全部三種直線方程。你必須熟記平行與垂直斜率關係，以及課題 3.1 的中點公式。",

    // Equations of straight lines and perpendicular bisectors > h3
    "Parallel lines, perpendicular lines and perpendicular bisectors": "平行線、垂直線與垂直平分線",

    // Equations of straight lines and perpendicular bisectors > li
    "<strong>Parallel lines</strong> never intersect and have the <strong>same gradient</strong>: <span class=\"chem\">m_1 = m_2</span>.": "<strong>平行線</strong>永不相交，且具有<strong>相同的斜率</strong>：<span class=\"chem\">m_1 = m_2</span>。",

    // Equations of straight lines and perpendicular bisectors > li
    "<strong>Perpendicular lines</strong> meet at <span class=\"chem\">90°</span>. Their gradients are <strong>negative reciprocals</strong> of each other: <span class=\"chem\">m_1 m_2 = -1</span>, so <span class=\"chem\">m_2 = -1 / m_1</span>. (A horizontal line <span class=\"chem\">y = k</span> has gradient <span class=\"chem\">0</span> and is perpendicular to a vertical line <span class=\"chem\">x = h</span>, whose gradient is undefined.)": "<strong>垂直線</strong>以 <span class=\"chem\">90°</span> 相交，其斜率互為<strong>負倒數</strong>：<span class=\"chem\">m_1 m_2 = -1</span>，即 <span class=\"chem\">m_2 = -1 / m_1</span>。（水平線 <span class=\"chem\">y = k</span> 的斜率為 <span class=\"chem\">0</span>，並垂直於斜率無定義的鉛垂線 <span class=\"chem\">x = h</span>。）",

    // Equations of straight lines and perpendicular bisectors > data-def attribute
    "The line that passes through the midpoint of segment [AB] at a 90° angle to [AB]. Every point on it is equidistant from A and B.": "垂直並通過線段 [AB] 中點（呈 90° 角）的直線；其上每點與 A 及 B 等距。",

    // Equations of straight lines and perpendicular bisectors > li
    "Find the <strong>midpoint</strong> <span class=\"chem\">M = ((x_1 + x_2)/2, (y_1 + y_2)/2)</span>.": "求<strong>中點</strong> <span class=\"chem\">M = ((x_1 + x_2)/2, (y_1 + y_2)/2)</span>。",

    // Equations of straight lines and perpendicular bisectors > li
    "Find the segment gradient <span class=\"chem\">m_{AB}</span>, then flip and change the sign to get the perpendicular gradient <span class=\"chem\">m_perp = -1 / m_{AB}</span>.": "求線段斜率 <span class=\"chem\">m_{AB}</span>，然後倒轉並變號得垂直斜率 <span class=\"chem\">m_perp = -1 / m_{AB}</span>。",

    // Equations of straight lines and perpendicular bisectors > li
    "Substitute <span class=\"chem\">M</span> and <span class=\"chem\">m_perp</span> into point-gradient form <span class=\"chem\">y - y_M = m_perp(x - x_M)</span>.": "把 <span class=\"chem\">M</span> 與 <span class=\"chem\">m_perp</span> 代入點斜式 <span class=\"chem\">y - y_M = m_perp(x - x_M)</span>。",

    // Equations of straight lines and perpendicular bisectors > exam tip (shown in English + translation) > p
    "<strong>Exam tip — Check the requested format:</strong> If a question says <em>“Give your answer in the form <span class=\"chem\">ax + by + d = 0</span> where <span class=\"chem\">a, b, d in Z</span>”</em>, leaving your answer as <span class=\"chem\">y = (2/3)x - 5/3</span> loses the final <strong>[A1]</strong> mark. Multiply the entire equation by the common denominator (<span class=\"chem\">3</span>) and move all terms to one side: <span class=\"chem\">2x - 3y - 5 = 0</span>.": "<strong>考試貼士 — 核對題目要求的格式：</strong>若題目寫明<em>「以 <span class=\"chem\">ax + by + d = 0</span> 的形式給出答案，其中 <span class=\"chem\">a, b, d in Z</span>」</em>，若只寫成 <span class=\"chem\">y = (2/3)x - 5/3</span> 將失去最後的 <strong>[A1]</strong> 分數。把整條方程同乘公分母（<span class=\"chem\">3</span>）並移項至同一邊：<span class=\"chem\">2x - 3y - 5 = 0</span>。",

    // Equations of straight lines and perpendicular bisectors > worked example > h3
    "Finding the perpendicular bisector in general integer form": "求整數一般式表示的垂直平分線方程",

    // Equations of straight lines and perpendicular bisectors > worked example > p
    "Points <span class=\"chem\">A(-2, 7)</span> and <span class=\"chem\">B(4, 3)</span> lie in the Cartesian plane. Find the equation of the perpendicular bisector of <span class=\"chem\">[AB]</span>, giving your answer in the form <span class=\"chem\">ax + by + d = 0</span> where <span class=\"chem\">a, b, d</span> are integers. <strong>[4 marks]</strong>": "點 <span class=\"chem\">A(-2, 7)</span> 及 <span class=\"chem\">B(4, 3)</span> 位於直角坐標平面上。求 (Find) <span class=\"chem\">[AB]</span> 的垂直平分線方程，答案以 <span class=\"chem\">ax + by + d = 0</span> 形式表示，其中 <span class=\"chem\">a, b, d</span> 為整數。<strong>[4 marks]</strong>",

    // Equations of straight lines and perpendicular bisectors > worked example > data-title attribute
    "Find the midpoint M of segment [AB]": "求線段 [AB] 的中點 M",

    // Equations of straight lines and perpendicular bisectors > worked example > p
    "The bisector cuts segment [AB] in half, so it must pass through the average of the x- and y-coordinates.": "平分線把線段 [AB] 平分，因此必通過 x 與 y 坐標的平均值。",

    // Equations of straight lines and perpendicular bisectors > worked example > data-title attribute
    "Calculate the gradient of [AB] and the perpendicular gradient": "計算 [AB] 的斜率及垂直斜率",

    // Equations of straight lines and perpendicular bisectors > worked example > p
    "Because the bisector meets [AB] at 90°, its gradient is the negative reciprocal of the gradient of [AB].": "由於平分線與 [AB] 成 90° 相交，其斜率為 [AB] 斜率的負倒數。",

    // Equations of straight lines and perpendicular bisectors > worked example > data-title attribute
    "Use point-gradient form and rearrange to ax + by + d = 0": "運用點斜式並整理為 ax + by + d = 0",

    // Equations of straight lines and perpendicular bisectors > worked example > p
    "Substitute M(1, 5) and m = 3/2 into y − y₁ = m(x − x₁), then multiply by 2 to clear fractions.": "把 M(1, 5) 與 m = 3/2 代入 y − y₁ = m(x − x₁)，再同乘 2 以消去分數。",

    // Equations of straight lines and perpendicular bisectors > worked example > p
    "<span class=\"chem\">3x - 2y + 7 = 0</span> (or <span class=\"chem\">-3x + 2y - 7 = 0</span>)": "<span class=\"chem\">3x - 2y + 7 = 0</span>（或 <span class=\"chem\">-3x + 2y - 7 = 0</span>）",

    // Equations of straight lines and perpendicular bisectors > try it > p
    "The perpendicular bisector of the segment joining <span class=\"chem\">P(1, 2)</span> and <span class=\"chem\">Q(5, 10)</span> crosses the <span class=\"chem\">y</span>-axis at <span class=\"chem\">(0, c)</span>. Find the exact value of <span class=\"chem\">c</span>.": "連接 <span class=\"chem\">P(1, 2)</span> 與 <span class=\"chem\">Q(5, 10)</span> 的線段之垂直平分線與 <span class=\"chem\">y</span> 軸相交於 <span class=\"chem\">(0, c)</span>。求 (Find) <span class=\"chem\">c</span> 的準確值。",

    // Equations of straight lines and perpendicular bisectors > try it > li
    "Find the midpoint <span class=\"chem\">M</span> of <span class=\"chem\">P(1, 2)</span> and <span class=\"chem\">Q(5, 10)</span>, and the gradient <span class=\"chem\">m_{PQ} = (10 - 2)/(5 - 1)</span>.": "求 <span class=\"chem\">P(1, 2)</span> 與 <span class=\"chem\">Q(5, 10)</span> 的中點 <span class=\"chem\">M</span> 及斜率 <span class=\"chem\">m_{PQ} = (10 - 2)/(5 - 1)</span>。",

    // Equations of straight lines and perpendicular bisectors > try it > li
    "You should get <span class=\"chem\">M(3, 6)</span> and <span class=\"chem\">m_{PQ} = 2</span>, so the perpendicular gradient is <span class=\"chem\">m_perp = -1/2</span>. Substitute <span class=\"chem\">x = 0</span> into <span class=\"chem\">y - 6 = (-1/2)(x - 3)</span>.": "你應得出 <span class=\"chem\">M(3, 6)</span> 及 <span class=\"chem\">m_{PQ} = 2</span>，故垂直斜率為 <span class=\"chem\">m_perp = -1/2</span>。把 <span class=\"chem\">x = 0</span> 代入 <span class=\"chem\">y - 6 = (-1/2)(x - 3)</span>。",

    // Equations of straight lines and perpendicular bisectors > try it > maths line
    "<i>M</i> = (3, 6) and <i>m</i><sub><i>PQ</i></sub> = <span class=\"frac\"><span>10 − 2</span><span>5 − 1</span></span> = 2 ⇒ <i>m</i><sub>⊥</sub> = −<span class=\"frac\"><span>1</span><span>2</span></span>": "<i>M</i> = (3, 6) 且 <i>m</i><sub><i>PQ</i></sub> = <span class=\"frac\"><span>10 − 2</span><span>5 − 1</span></span> = 2 ⇒ <i>m</i><sub>⊥</sub> = −<span class=\"frac\"><span>1</span><span>2</span></span>",

    // Equations of straight lines and perpendicular bisectors > try it > maths line
    "<i>y</i> − 6 = −<span class=\"frac\"><span>1</span><span>2</span></span>(<i>x</i> − 3) ⇒ at <i>x</i> = 0, <i>c</i> = 6 + <span class=\"frac\"><span>3</span><span>2</span></span> = <b>7.5</b>": "<i>y</i> − 6 = −<span class=\"frac\"><span>1</span><span>2</span></span>(<i>x</i> − 3) ⇒ 當 <i>x</i> = 0，<i>c</i> = 6 + <span class=\"frac\"><span>3</span><span>2</span></span> = <b>7.5</b>",

    // Functions, natural domains, ranges and key graph features > data-toc attribute
    "Domain & range": "定義域與值域",

    // Functions, natural domains, ranges and key graph features > h2
    "Functions, natural domains, ranges and key graph features": "函數、自然定義域、值域與主要圖像特徵",

    // Functions, natural domains, ranges and key graph features > p
    "A <dfn data-def=\"A mapping that assigns each input x in the domain to exactly one output y = f(x) in the range.\">function</dfn> <span class=\"chem\">f</span> is a rule that takes an input <span class=\"chem\">x</span> from a set of allowed inputs—the <dfn data-def=\"The complete set of allowed input values (x-values) for which a function f(x) is defined.\">domain</dfn>—and produces <strong>exactly one</strong> output <span class=\"chem\">y = f(x)</span>. The set of all actual outputs produced is the <dfn data-def=\"The complete set of output values (y-values) that f(x) actually takes as x varies across the domain.\">range</dfn>.": "<dfn data-def=\"把定義域中的每個輸入 x 對應到值域中恰好一個輸出 y = f(x) 的映射規則。\">函數 <span class=\"en-term\">(function)</span></dfn> <span class=\"chem\">f</span> 是一條規則，從容許輸入的集合——即<dfn data-def=\"使函數 f(x) 有定義的所有容許輸入值（x 值）之集合。\">定義域 <span class=\"en-term\">(domain)</span></dfn>——中取一個輸入 <span class=\"chem\">x</span>，並產生<strong>恰好一個</strong>輸出 <span class=\"chem\">y = f(x)</span>。所有實際產生的輸出集合稱為<dfn data-def=\"當 x 遍歷整個定義域時，f(x) 實際取到的所有輸出值（y 值）之集合。\">值域 <span class=\"en-term\">(range)</span></dfn>。",

    // Functions, natural domains, ranges and key graph features > data-def attribute
    "A mapping that assigns each input x in the domain to exactly one output y = f(x) in the range.": "把定義域中的每個輸入 x 對應到值域中恰好一個輸出 y = f(x) 的映射規則。",

    // Functions, natural domains, ranges and key graph features > data-def attribute
    "The complete set of allowed input values (x-values) for which a function f(x) is defined.": "使函數 f(x) 有定義的所有容許輸入值（x 值）之集合。",

    // Functions, natural domains, ranges and key graph features > data-def attribute
    "The complete set of output values (y-values) that f(x) actually takes as x varies across the domain.": "當 x 遍歷整個定義域時，f(x) 實際取到的所有輸出值（y 值）之集合。",

    // Functions, natural domains, ranges and key graph features > li
    "<strong>Vertical line test (Is it a function?):</strong> A graph represents a function if and only if every vertical line <span class=\"chem\">x = k</span> hits the curve <strong>at most once</strong>. A circle <span class=\"chem\">x^2 + y^2 = 9</span> fails the vertical line test because <span class=\"chem\">x = 0</span> gives two outputs (<span class=\"chem\">y = 3</span> and <span class=\"chem\">y = -3</span>).": "<strong>鉛垂線檢驗（是否函數？）：</strong>圖像代表一個函數，當且僅當每條鉛垂線 <span class=\"chem\">x = k</span> 與曲線<strong>最多相交一次</strong>。圓 <span class=\"chem\">x^2 + y^2 = 9</span> 無法通過鉛垂線檢驗，因為 <span class=\"chem\">x = 0</span> 對應兩個輸出（<span class=\"chem\">y = 3</span> 與 <span class=\"chem\">y = -3</span>）。",

    // Functions, natural domains, ranges and key graph features > li
    "<strong>Horizontal line test (Is it one-to-one?):</strong> A function is <strong>one-to-one</strong> if every horizontal line <span class=\"chem\">y = k</span> hits the curve at most once. Only one-to-one functions have an inverse function on their full domain.": "<strong>水平線檢驗（是否一對一？）：</strong>若每條水平線 <span class=\"chem\">y = k</span> 與曲線最多相交一次，則該函數為<strong>一對一</strong>函數（one-to-one）。只有一對一函數在其完整定義域上才存在反函數。",

    // Functions, natural domains, ranges and key graph features > h3
    "The three natural domain killers": "決定自然定義域的三大限制",

    // Functions, natural domains, ranges and key graph features > p
    "When a question asks for the <strong>natural domain</strong> (or <em>“largest possible domain in <span class=\"chem\">R</span>”</em>) without specifying a restriction, start with all real numbers <span class=\"chem\">x in R</span> and remove any <span class=\"chem\">x</span> that breaks one of these three algebraic rules:": "當題目要求求<strong>自然定義域</strong>（或<em>「在 <span class=\"chem\">R</span> 中的最大可能定義域」</em>）而未設額外限制時，從所有實數 <span class=\"chem\">x in R</span> 出發，剔除任何違反以下三條代數規則的 <span class=\"chem\">x</span>：",

    // Functions, natural domains, ranges and key graph features > li
    "<strong>No division by zero:</strong> For <span class=\"chem\">1 / g(x)</span>, require <span class=\"chem\">g(x) != 0</span>.": "<strong>分母不可為零：</strong>對於 <span class=\"chem\">1 / g(x)</span>，必須滿足 <span class=\"chem\">g(x) != 0</span>。",

    // Functions, natural domains, ranges and key graph features > li
    "<strong>No negative numbers inside an even root:</strong> For <span class=\"chem\">sqrt(g(x))</span>, require <span class=\"chem\">g(x) &gt;= 0</span>. (If the square root is in a denominator, <span class=\"chem\">1 / sqrt(g(x))</span>, both rules combine to <span class=\"chem\">g(x) &gt; 0</span> strictly!)": "<strong>偶次方根內不可為負數：</strong>對於 <span class=\"chem\">sqrt(g(x))</span>，必須滿足 <span class=\"chem\">g(x) &gt;= 0</span>。（若平方根在分母 <span class=\"chem\">1 / sqrt(g(x))</span>，兩條規則合併為嚴格大於零 <span class=\"chem\">g(x) &gt; 0</span>！）",

    // Functions, natural domains, ranges and key graph features > li
    "<strong>Only strictly positive numbers inside a logarithm:</strong> For <span class=\"chem\">ln(g(x))</span> or <span class=\"chem\">log_a(g(x))</span>, require <span class=\"chem\">g(x) &gt; 0</span>.": "<strong>對數內必須嚴格大於零：</strong>對於 <span class=\"chem\">ln(g(x))</span> 或 <span class=\"chem\">log_a(g(x))</span>，必須滿足 <span class=\"chem\">g(x) &gt; 0</span>。",

    // Functions, natural domains, ranges and key graph features > common mistake > p
    "<strong>Common mistake — Finding the range by plugging in only the endpoints:</strong> Suppose <span class=\"chem\">f(x) = (x - 2)^2 + 1</span> on the domain <span class=\"chem\">0 &lt;= x &lt;= 5</span>. If you only compute <span class=\"chem\">f(0) = 5</span> and <span class=\"chem\">f(5) = 10</span>, you might write that the range is <span class=\"chem\">5 &lt;= y &lt;= 10</span>. That is <strong>wrong</strong>! At <span class=\"chem\">x = 2</span> (which lies inside <span class=\"chem\">[0, 5]</span>), the parabola dips down to its vertex <span class=\"chem\">(2, 1)</span>. The true range is <span class=\"chem\">1 &lt;= y &lt;= 10</span>. <strong>Always sketch the curve on the given domain before stating the range.</strong>": "<strong>常見錯誤 — 只代入端點來求值域：</strong>設 <span class=\"chem\">f(x) = (x - 2)^2 + 1</span> 的定義域為 <span class=\"chem\">0 &lt;= x &lt;= 5</span>。若只計算 <span class=\"chem\">f(0) = 5</span> 及 <span class=\"chem\">f(5) = 10</span>，你可能會寫出值域為 <span class=\"chem\">5 &lt;= y &lt;= 10</span>，這是<strong>錯</strong>的！在 <span class=\"chem\">x = 2</span>（位於 <span class=\"chem\">[0, 5]</span> 內），拋物線向下到達其頂點 <span class=\"chem\">(2, 1)</span>。真正的值域為 <span class=\"chem\">1 &lt;= y &lt;= 10</span>。<strong>寫出值域前務必先在指定定義域上描繪曲線略圖。</strong>",

    // Functions, natural domains, ranges and key graph features > worked example > h3
    "Finding the natural domain and exact range of a transformed function": "求變換函數的自然定義域與準確值域",

    // Functions, natural domains, ranges and key graph features > worked example > p
    "Consider the function <span class=\"chem\">f(x) = 5 - sqrt(2x + 6)</span>. State the largest possible domain of <span class=\"chem\">f</span> and find the corresponding range. <strong>[4 marks]</strong>": "考慮函數 <span class=\"chem\">f(x) = 5 - sqrt(2x + 6)</span>。寫出 (State) <span class=\"chem\">f</span> 的最大可能定義域，並求 (find) 其對應的值域。<strong>[4 marks]</strong>",

    // Functions, natural domains, ranges and key graph features > worked example > data-title attribute
    "Set the expression inside the square root ≥ 0 for the domain": "令平方根內的表式 ≥ 0 以求定義域",

    // Functions, natural domains, ranges and key graph features > worked example > p
    "A real square root is defined if and only if its radicand is non-negative.": "實數平方根有定義，當且僅當其被開方數非負。",

    // Functions, natural domains, ranges and key graph features > worked example > data-title attribute
    "Bound the output of the square root to deduce the range": "界定平方根的輸出範圍以推斷值域",

    // Functions, natural domains, ranges and key graph features > worked example > p
    "The principal square root √(2x + 6) takes every value from 0 upwards as x increases from −3 to ∞.": "當 x 由 −3 增至 ∞ 時，主平方根 √(2x + 6) 取遍從 0 向上的所有值。",

    // Functions, natural domains, ranges and key graph features > worked example > maths line
    "Since <span class=\"chem\">sqrt(2x + 6) &gt;= 0</span> for all <span class=\"chem\">x &gt;= -3</span>, multiplying by −1 and adding 5 gives: &nbsp; <b>[M1]</b>": "因為 <span class=\"chem\">sqrt(2x + 6) &gt;= 0</span> 對所有 <span class=\"chem\">x &gt;= -3</span> 皆成立，乘以 −1 再加 5 得：&nbsp; <b>[M1]</b>",

    // Functions, natural domains, ranges and key graph features > worked example > maths line
    "5 − <span class=\"chem\">sqrt(2x + 6) &lt;= 5</span> ⇒ <b><i>f</i>(<i>x</i>) ≤ 5</b> (or <span class=\"chem\">y in (-infty, 5]</span>) &nbsp; <b>[A1]</b>": "5 − <span class=\"chem\">sqrt(2x + 6) &lt;= 5</span> ⇒ <b><i>f</i>(<i>x</i>) ≤ 5</b>（或 <span class=\"chem\">y in (-infty, 5]</span>）&nbsp; <b>[A1]</b>",

    // Functions, natural domains, ranges and key graph features > worked example > p
    "Domain: <span class=\"chem\">x &gt;= -3</span>; Range: <span class=\"chem\">f(x) &lt;= 5</span>": "定義域：<span class=\"chem\">x &gt;= -3</span>；值域：<span class=\"chem\">f(x) &lt;= 5</span>",

    // Functions, natural domains, ranges and key graph features > try it > p
    "The function <span class=\"chem\">g(x) = (x - 3)^2 + 2</span> is defined on the restricted domain <span class=\"chem\">1 &lt;= x &lt;= 7</span>. Find the <strong>minimum</strong> value in the range of <span class=\"chem\">g</span>.": "函數 <span class=\"chem\">g(x) = (x - 3)^2 + 2</span> 定義於受限定義域 <span class=\"chem\">1 &lt;= x &lt;= 7</span>。求 (Find) <span class=\"chem\">g</span> 值域中的<strong>最小</strong>值。",

    // Functions, natural domains, ranges and key graph features > try it > li
    "Identify the vertex of the parabola <span class=\"chem\">y = (x - 3)^2 + 2</span> and check whether its <span class=\"chem\">x</span>-coordinate lies inside <span class=\"chem\">1 &lt;= x &lt;= 7</span>.": "找出拋物線 <span class=\"chem\">y = (x - 3)^2 + 2</span> 的頂點，並檢查其 <span class=\"chem\">x</span> 坐標是否位於 <span class=\"chem\">1 &lt;= x &lt;= 7</span> 內。",

    // Functions, natural domains, ranges and key graph features > try it > li
    "Since <span class=\"chem\">x = 3</span> is inside <span class=\"chem\">[1, 7]</span> and <span class=\"chem\">(x - 3)^2 &gt;= 0</span>, the minimum output occurs at the vertex <span class=\"chem\">x = 3</span>.": "由於 <span class=\"chem\">x = 3</span> 位於 <span class=\"chem\">[1, 7]</span> 內且 <span class=\"chem\">(x - 3)^2 &gt;= 0</span>，最小輸出出現在頂點 <span class=\"chem\">x = 3</span>。",

    // Functions, natural domains, ranges and key graph features > try it > maths line
    "At the endpoints: <i>g</i>(1) = (−2)<sup>2</sup> + 2 = 6 and <i>g</i>(7) = 4<sup>2</sup> + 2 = 18.": "在端點處：<i>g</i>(1) = (−2)<sup>2</sup> + 2 = 6 及 <i>g</i>(7) = 4<sup>2</sup> + 2 = 18。",

    // Functions, natural domains, ranges and key graph features > try it > maths line
    "However, the vertex at <i>x</i> = 3 lies inside [1, 7], giving minimum value <i>g</i>(3) = 0 + 2 = <b>2</b> (so the range is <span class=\"chem\">2 &lt;= y &lt;= 18</span>).": "然而，位於 <i>x</i> = 3 的頂點在 [1, 7] 內，給出最小值 <i>g</i>(3) = 0 + 2 = <b>2</b>（故值域為 <span class=\"chem\">2 &lt;= y &lt;= 18</span>）。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > data-toc attribute
    "Composites & inverses": "複合與反函數",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > h2
    "Composite functions <span class=\"chem\">(f ∘ g)(x)</span> and inverse functions <span class=\"chem\">f^{-1}(x)</span>": "複合函數 <span class=\"chem\">(f ∘ g)(x)</span> 與反函數 <span class=\"chem\">f^{-1}(x)</span>",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > p
    "When the output of one function <span class=\"chem\">g</span> is fed directly as the input into a second function <span class=\"chem\">f</span>, we form the <dfn data-def=\"The function formed by applying g first and then applying f to the result: (f ∘ g)(x) = f(g(x)).\">composite function</dfn> <span class=\"chem\">(f ∘ g)(x) = f(g(x))</span>. Read <span class=\"chem\">(f ∘ g)(x)</span> from the <strong>inside out</strong>: <span class=\"chem\">g</span> acts on <span class=\"chem\">x</span> first, and <span class=\"chem\">f</span> acts on <span class=\"chem\">g(x)</span> second.": "當函數 <span class=\"chem\">g</span> 的輸出直接作為第二個函數 <span class=\"chem\">f</span> 的輸入時，便構成<dfn data-def=\"先對 x 應用 g，再對結果應用 f 所組成的函數：(f ∘ g)(x) = f(g(x))。\">複合函數 <span class=\"en-term\">(composite function)</span></dfn> <span class=\"chem\">(f ∘ g)(x) = f(g(x))</span>。解讀 <span class=\"chem\">(f ∘ g)(x)</span> 時須<strong>由內而外</strong>：<span class=\"chem\">g</span> 先作用於 <span class=\"chem\">x</span>，然後 <span class=\"chem\">f</span> 再作用於 <span class=\"chem\">g(x)</span>。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > data-def attribute
    "The function formed by applying g first and then applying f to the result: (f ∘ g)(x) = f(g(x)).": "先對 x 應用 g，再對結果應用 f 所組成的函數：(f ∘ g)(x) = f(g(x))。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > equation > dd
    "inner function (applied first to input <i>x</i>)": "內層函數（最先作用於輸入 <i>x</i>）",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > equation > dd
    "outer function (applied second to the output <i>g</i>(<i>x</i>))": "外層函數（接著作用於輸出 <i>g</i>(<i>x</i>)）",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > equation > dt
    "Existence rule": "存在條件",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > equation > dd
    "<span class=\"chem\">Range(g)</span> must be a subset of <span class=\"chem\">Domain(f)</span>": "<span class=\"chem\">Range(g)</span> 必須是 <span class=\"chem\">Domain(f)</span> 的子集",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > equation > dd
    "inverse function (reverses <i>f</i>; exists only when <i>f</i> is one-to-one)": "反函數（逆轉 <i>f</i>；僅當 <i>f</i> 為一對一時存在）",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > widget > data-title attribute
    "Composite function pipeline & domain compatibility checker": "複合函數流程與定義域相容性檢查器",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > widget > figcaption
    "Choose an inner function <span class=\"chem\">g(x)</span>, an outer function <span class=\"chem\">f(x)</span>, and a test input <span class=\"chem\">x</span> to trace the two-stage pipeline <span class=\"chem\">x -&gt; g(x) -&gt; f(g(x))</span> and see whether <span class=\"chem\">Range(g)</span> fits inside <span class=\"chem\">Domain(f)</span>.": "選擇內層函數 <span class=\"chem\">g(x)</span>、外層函數 <span class=\"chem\">f(x)</span> 及測試輸入 <span class=\"chem\">x</span>，追蹤兩階段流程 <span class=\"chem\">x -&gt; g(x) -&gt; f(g(x))</span>，並觀察 <span class=\"chem\">Range(g)</span> 是否容納於 <span class=\"chem\">Domain(f)</span> 內。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > h3
    "Inverse functions and the mirror line <span class=\"chem\">y = x</span>": "反函數與鏡線 <span class=\"chem\">y = x</span>",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > p
    "The <dfn data-def=\"The function f⁻¹ that reverses the mapping of f, so that f⁻¹(y) = x whenever f(x) = y.\">inverse function</dfn> <span class=\"chem\">f^{-1}</span> undoes what <span class=\"chem\">f</span> does: if <span class=\"chem\">f</span> maps <span class=\"chem\">a -&gt; b</span>, then <span class=\"chem\">f^{-1}</span> maps <span class=\"chem\">b -&gt; a</span>. Because every <span class=\"chem\">(x, y)</span> coordinate pair swaps to <span class=\"chem\">(y, x)</span>, three powerful facts always hold:": "<dfn data-def=\"逆轉 f 映射關係的函數 f⁻¹，使得每當 f(x) = y 時必有 f⁻¹(y) = x。\">反函數 <span class=\"en-term\">(inverse function)</span></dfn> <span class=\"chem\">f^{-1}</span> 抵消了 <span class=\"chem\">f</span> 的作用：若 <span class=\"chem\">f</span> 把 <span class=\"chem\">a -&gt; b</span>，則 <span class=\"chem\">f^{-1}</span> 把 <span class=\"chem\">b -&gt; a</span>。因為每對坐標 <span class=\"chem\">(x, y)</span> 都對調為 <span class=\"chem\">(y, x)</span>，以下三個重要性質恒成立：",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > data-def attribute
    "The function f⁻¹ that reverses the mapping of f, so that f⁻¹(y) = x whenever f(x) = y.": "逆轉 f 映射關係的函數 f⁻¹，使得每當 f(x) = y 時必有 f⁻¹(y) = x。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > li
    "<strong>Algebraic recipe:</strong> Write <span class=\"chem\">y = f(x)</span>, swap <span class=\"chem\">x</span> and <span class=\"chem\">y</span>, and solve for <span class=\"chem\">y</span> in terms of <span class=\"chem\">x</span>. If a <span class=\"chem\">+-sqrt(...)</span> appears, use the restricted domain of <span class=\"chem\">f</span> (which becomes the range of <span class=\"chem\">f^{-1}</span>) to pick the correct sign!": "<strong>代數步驟：</strong>寫出 <span class=\"chem\">y = f(x)</span>，把 <span class=\"chem\">x</span> 與 <span class=\"chem\">y</span> 對調，再解出以 <span class=\"chem\">x</span> 表示的 <span class=\"chem\">y</span>。若出現 <span class=\"chem\">+-sqrt(...)</span>，利用 <span class=\"chem\">f</span> 的受限定義域（它會變成 <span class=\"chem\">f^{-1}</span> 的值域）來選擇正確的正負號！",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > li
    "<strong>Domain and range swap:</strong> <span class=\"chem\">Domain(f^{-1}) = Range(f)</span> and <span class=\"chem\">Range(f^{-1}) = Domain(f)</span>. If an exam question asks for the domain of <span class=\"chem\">f^{-1}</span>, just find the range of <span class=\"chem\">f</span>.": "<strong>定義域與值域互換：</strong><span class=\"chem\">Domain(f^{-1}) = Range(f)</span> 且 <span class=\"chem\">Range(f^{-1}) = Domain(f)</span>。若考題問 <span class=\"chem\">f^{-1}</span> 的定義域，只需找出 <span class=\"chem\">f</span> 的值域即可。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > li
    "<strong>Geometric reflection:</strong> The graph of <span class=\"chem\">y = f^{-1}(x)</span> is the reflection of <span class=\"chem\">y = f(x)</span> across the diagonal line <span class=\"chem\">y = x</span>. In particular, any intersection of an increasing function <span class=\"chem\">y = f(x)</span> with <span class=\"chem\">y = f^{-1}(x)</span> lies directly on the line <span class=\"chem\">y = x</span>, so you can solve <span class=\"chem\">f(x) = f^{-1}(x)</span> by solving <strong><span class=\"chem\">f(x) = x</span></strong>!": "<strong>幾何反射：</strong><span class=\"chem\">y = f^{-1}(x)</span> 的圖像是 <span class=\"chem\">y = f(x)</span> 沿對角線 <span class=\"chem\">y = x</span> 的反射。特別地，遞增函數 <span class=\"chem\">y = f(x)</span> 與 <span class=\"chem\">y = f^{-1}(x)</span> 的任何交點都直接落在直線 <span class=\"chem\">y = x</span> 上，因此你可以透過解 <strong><span class=\"chem\">f(x) = x</span></strong> 來解 <span class=\"chem\">f(x) = f^{-1}(x)</span>！",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > common mistake > p
    "<strong>Common mistake — Confusing <span class=\"chem\">f^{-1}(x)</span> with the reciprocal <span class=\"chem\">1 / f(x)</span>:</strong> In function notation, the superscript <span class=\"chem\">-1</span> in <span class=\"chem\">f^{-1}(x)</span> always means the <strong>inverse function</strong> (reversing input and output), <em>never</em> the reciprocal <span class=\"chem\">(f(x))^{-1} = 1 / f(x)</span>.": "<strong>常見錯誤 — 把 <span class=\"chem\">f^{-1}(x)</span> 與倒數 <span class=\"chem\">1 / f(x)</span> 混淆：</strong>在函數記號中，<span class=\"chem\">f^{-1}(x)</span> 的上標 <span class=\"chem\">-1</span> 永遠代表<strong>反函數</strong>（對調輸入與輸出），<em>絕不</em>代表倒數 <span class=\"chem\">(f(x))^{-1} = 1 / f(x)</span>。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > widget > data-title attribute
    "Inverse reflection explorer: y = f(x), y = x, and y = f⁻¹(x)": "反函數反射探索工具：y = f(x)、y = x 與 y = f⁻¹(x)",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > widget > figcaption
    "Switch between invertible functions and move input <span class=\"chem\">a</span> to watch point <span class=\"chem\">P(a, b)</span> on <span class=\"chem\">y = f(x)</span> reflect across the mirror line <span class=\"chem\">y = x</span> to <span class=\"chem\">P'(b, a)</span> on <span class=\"chem\">y = f^{-1}(x)</span>.": "切換不同的可逆函數並移動輸入值 <span class=\"chem\">a</span>，觀察 <span class=\"chem\">y = f(x)</span> 上的點 <span class=\"chem\">P(a, b)</span> 如何沿鏡線 <span class=\"chem\">y = x</span> 反射為 <span class=\"chem\">y = f^{-1}(x)</span> 上的點 <span class=\"chem\">P'(b, a)</span>。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > h3
    "Inverting a domain-restricted quadratic and solving f(x) = f⁻¹(x)": "求受限二次函數的反函數及解 f(x) = f⁻¹(x)",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > p
    "The function <span class=\"chem\">f</span> is defined by <span class=\"chem\">f(x) = (x - 3)^2 - 2</span> for <span class=\"chem\">x &lt;= 3</span>.<br> (a) Find an expression for <span class=\"chem\">f^{-1}(x)</span> and state its domain. <strong>[4 marks]</strong><br> (b) Solve the equation <span class=\"chem\">f(x) = f^{-1}(x)</span>. <strong>[3 marks]</strong>": "函數 <span class=\"chem\">f</span> 定義為 <span class=\"chem\">f(x) = (x - 3)^2 - 2</span>（<span class=\"chem\">x &lt;= 3</span>）。<br> (a) 求 (Find) <span class=\"chem\">f^{-1}(x)</span> 的表式並寫出 (state) 其定義域。<strong>[4 marks]</strong><br> (b) 解 (Solve) 方程 <span class=\"chem\">f(x) = f^{-1}(x)</span>。<strong>[3 marks]</strong>",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > data-title attribute
    "Find the range of f to get the domain of f⁻¹": "求 f 的值域以得出 f⁻¹ 的定義域",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > p
    "The vertex is at (3, −2) and the parabola opens upwards, so f(x) ≥ −2 for all x ≤ 3.": "頂點位於 (3, −2) 且拋物線開口向上，因此對所有 x ≤ 3 皆有 f(x) ≥ −2。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > maths line
    "Range of <i>f</i> is <i>y</i> ≥ −2 ⇒ <b>Domain of <i>f</i><sup>−1</sup> is <i>x</i> ≥ −2</b> &nbsp; <b>[A1]</b>": "<i>f</i> 的值域為 <i>y</i> ≥ −2 ⇒ <b><i>f</i><sup>−1</sup> 的定義域為 <i>x</i> ≥ −2</b> &nbsp; <b>[A1]</b>",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > data-title attribute
    "Swap x and y and choose the branch matching Range(f⁻¹)": "對調 x 與 y 並選取符合 Range(f⁻¹) 的分支",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > p
    "Because Domain(f) is x ≤ 3, Range(f⁻¹) must be y ≤ 3, which forces the negative square root.": "因為 Domain(f) 為 x ≤ 3，所以 Range(f⁻¹) 必為 y ≤ 3，這迫使我們選取負平方根。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > maths line
    "Since <i>y</i> ≤ 3, choose the minus sign: <b><i>f</i><sup>−1</sup>(<i>x</i>) = 3 − <span class=\"chem\">sqrt(x + 2)</span></b> &nbsp; <b>[R1 A1]</b>": "因為 <i>y</i> ≤ 3，選取負號：<b><i>f</i><sup>−1</sup>(<i>x</i>) = 3 − <span class=\"chem\">sqrt(x + 2)</span></b> &nbsp; <b>[R1 A1]</b>",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > data-title attribute
    "Solve f(x) = x on the mirror line y = x and filter by x ≤ 3": "在鏡線 y = x 上解 f(x) = x 並篩選符合 x ≤ 3 的根",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > p
    "Equating f(x) to x avoids squaring radicals. Only roots inside Domain(f) ∧ Domain(f⁻¹), namely −2 ≤ x ≤ 3, are valid.": "令 f(x) = x 可避免對根式平方。只有位於 Domain(f) ∧ Domain(f⁻¹)（即 −2 ≤ x ≤ 3）內的根才有效。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > maths line
    "Since <span class=\"chem\">sqrt(21) ≈ 4.58</span>, <span class=\"chem\">(7 + sqrt(21))/2 ≈ 5.79 &gt; 3</span> (reject). Thus <b><i>x</i> = <span class=\"frac\"><span>7 − <span class=\"chem\">sqrt(21)</span></span><span>2</span></span></b> &nbsp; <b>[A1]</b>": "由於 <span class=\"chem\">sqrt(21) ≈ 4.58</span>，<span class=\"chem\">(7 + sqrt(21))/2 ≈ 5.79 &gt; 3</span>（捨去）。故 <b><i>x</i> = <span class=\"frac\"><span>7 − <span class=\"chem\">sqrt(21)</span></span><span>2</span></span></b> &nbsp; <b>[A1]</b>",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > p
    "(a) <span class=\"chem\">f^{-1}(x) = 3 - sqrt(x + 2)</span> for <span class=\"chem\">x &gt;= -2</span>; (b) <span class=\"chem\">x = (7 - sqrt(21))/2</span>": "(a) <span class=\"chem\">f^{-1}(x) = 3 - sqrt(x + 2)</span>（<span class=\"chem\">x &gt;= -2</span>）；(b) <span class=\"chem\">x = (7 - sqrt(21))/2</span>",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > try it > p
    "Let <span class=\"chem\">f(x) = 2x + 3</span> and <span class=\"chem\">g(x) = x^2 - 4</span>. Solve the equation <span class=\"chem\">(f ∘ g)(x) = -0.5</span> for <span class=\"chem\">x &gt; 0</span>.": "設 <span class=\"chem\">f(x) = 2x + 3</span> 及 <span class=\"chem\">g(x) = x^2 - 4</span>。對 <span class=\"chem\">x &gt; 0</span> 解 (Solve) 方程 <span class=\"chem\">(f ∘ g)(x) = -0.5</span>。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > try it > li
    "Form the composite function from the inside out: <span class=\"chem\">f(g(x)) = 2(x^2 - 4) + 3 = 2x^2 - 5</span>.": "由內而外組成複合函數：<span class=\"chem\">f(g(x)) = 2(x^2 - 4) + 3 = 2x^2 - 5</span>。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > try it > li
    "Set <span class=\"chem\">2x^2 - 5 = -0.5</span>, solve for <span class=\"chem\">x^2 = 2.25</span>, and take the positive square root.": "令 <span class=\"chem\">2x^2 - 5 = -0.5</span>，解出 <span class=\"chem\">x^2 = 2.25</span>，並取正平方根。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > try it > maths line
    "2<i>x</i><sup>2</sup> = 4.5 ⇒ <i>x</i><sup>2</sup> = 2.25 ⇒ <i>x</i> = <b>1.5</b> (since <i>x</i> &gt; 0)": "2<i>x</i><sup>2</sup> = 4.5 ⇒ <i>x</i><sup>2</sup> = 2.25 ⇒ <i>x</i> = <b>1.5</b>（因為 <i>x</i> &gt; 0）",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > not needed for IB > p
    "<strong>Not needed for IB:</strong> You do not need formal university set-theory proofs of <em>surjectivity</em> onto an arbitrary codomain distinct from the range, nor epsilon-delta continuity proofs. In IB Math AA HL, a function is invertible if and only if it is <strong>one-to-one</strong> on its domain (passes the horizontal line test), with its codomain taken to be its range.": "<strong>IB 不要求的內容：</strong>你不需要進行大學集合論中關於映射到任意陪域的<em>滿射（surjectivity）</em>嚴格證明，也不需要 ε-δ 連續性證明。在 IB Math AA HL 中，函數可逆當且僅當它在其定義域上為<strong>一對一</strong>（通過水平線檢驗），並取其值域為陪域。",

    // Quick practice > data-toc attribute
    "Practice": "練習",

    // Quick practice > h2
    "Quick practice": "快速練習",

    // widget string (assets/js/widgets-t2-1.js)
    "Function pair": "函數配對",

    // widget string (assets/js/widgets-t2-1.js)
    "Input a on f(x)": "f(x) 的輸入值 a",

    // widget string (assets/js/widgets-t2-1.js)
    "Jump to f(x) = f⁻¹(x)": "跳至 f(x) = f⁻¹(x)",

    // widget string (assets/js/widgets-t2-1.js)
    "Point P on y = f(x)": "y = f(x) 上的點 P",

    // widget string (assets/js/widgets-t2-1.js)
    "Reflected P' on y = f⁻¹(x)": "y = f⁻¹(x) 上的反射點 P'",

    // widget string (assets/js/widgets-t2-1.js)
    "Domain & range of f": "f 的定義域與值域",

    // widget string (assets/js/widgets-t2-1.js)
    "Domain & range of f⁻¹": "f⁻¹ 的定義域與值域",

    // widget string (assets/js/widgets-t2-1.js)
    "Graph of y = f(x), mirror line y = x, and inverse y = f⁻¹(x)": "y = f(x)、鏡線 y = x 與反函數 y = f⁻¹(x) 的圖像",

    // widget string (assets/js/widgets-t2-1.js)
    "Composite pair (g first, then f)": "複合函數配對（先 g 後 f）",

    // widget string (assets/js/widgets-t2-1.js)
    "Test input x": "測試輸入 x",

    // widget string (assets/js/widgets-t2-1.js)
    "Stage 1: u = g(x)": "階段 1：u = g(x)",

    // widget string (assets/js/widgets-t2-1.js)
    "Stage 2: y = f(u) = (f ∘ g)(x)": "階段 2：y = f(u) = (f ∘ g)(x)",

    // widget string (assets/js/widgets-t2-1.js)
    "Composite formula": "複合函數公式",

    // widget string (assets/js/widgets-t2-1.js)
    "Domain compatibility check": "定義域相容性檢查",

    // widget string (assets/js/widgets-t2-1.js)
    "Graphs of inner function g(x) and composite function (f ∘ g)(x)": "內層函數 g(x) 與複合函數 (f ∘ g)(x) 的圖像"

  }
});
