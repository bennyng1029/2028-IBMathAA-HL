/* t5-1 — zh-Hant translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't5-1', {
  strings: {

    // page title (browser tab)
    "5.1 Differentiation, curve analysis and optimization | Analysis Lab": "5.1 微分、曲線分析與優化 | Analysis Lab",

    // Differentiation, curve analysis and optimization > page header > p
    "Topic 5.1 · SL 5.1–5.4, 5.6–5.8": "課題 5.1 · SL 5.1–5.4, 5.6–5.8",

    // Differentiation, curve analysis and optimization > page header > h1
    "Differentiation, curve analysis and optimization": "微分、曲線分析與優化",

    // Differentiation, curve analysis and optimization > page header > span
    "How do the first and second derivatives reveal the exact gradient, turning points, concavity, and optimal values of a function?": "一階導數與二階導數如何揭示函數的準確斜率、轉向點、凹凸性與最優值？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "學習清單",

    // What you need to be able to do > h2
    "What you need to be able to do": "你需要掌握的能力",

    // What you need to be able to do > checklist > span
    "Interpret the derivative <span class=\"chem\">f'(x)</span> as the gradient of the tangent line and the instantaneous rate of change of <span class=\"chem\">y = f(x)</span>.": "將導數 <span class=\"chem\">f'(x)</span> 詮釋為切線斜率以及 <span class=\"chem\">y = f(x)</span> 的瞬時變率。",

    // What you need to be able to do > checklist > span
    "Differentiate powers <span class=\"chem\">x^n</span> (<span class=\"chem\">n</span> rational) and standard functions <span class=\"chem\">sin x</span>, <span class=\"chem\">cos x</span>, <span class=\"chem\">e^x</span>, and <span class=\"chem\">ln x</span>.": "求冪函數 <span class=\"chem\">x^n</span>（<span class=\"chem\">n</span> 為有理數）及標準函數 <span class=\"chem\">sin x</span>、<span class=\"chem\">cos x</span>、<span class=\"chem\">e^x</span> 與 <span class=\"chem\">ln x</span> 的導數。",

    // What you need to be able to do > checklist > span
    "Find equations of tangents and normals at a given point and find where they intersect axes or curves.": "求在指定點處的切線與法線方程，並求它們與坐標軸或曲線的交點。",

    // What you need to be able to do > checklist > span
    "Differentiate composite, product, and quotient functions using the chain rule, product rule, and quotient rule.": "利用鏈式法則、乘積法則與商法則求複合函數、乘積函數與商函數的導數。",

    // What you need to be able to do > checklist > span
    "Find intervals where <span class=\"chem\">f(x)</span> is increasing or decreasing, classify local maxima and minima using <span class=\"chem\">f'(x)</span> or <span class=\"chem\">f''(x)</span>, and identify stationary and non-stationary points of inflexion.": "求 <span class=\"chem\">f(x)</span> 遞增或遞減的區間、利用 <span class=\"chem\">f'(x)</span> 或 <span class=\"chem\">f''(x)</span> 分類局部極大值與局部極小值，並辨識駐拐點與非駐拐點。",

    // What you need to be able to do > checklist > span
    "Connect features across the graphs of <span class=\"chem\">f(x)</span>, <span class=\"chem\">f'(x)</span>, and <span class=\"chem\">f''(x)</span>.": "連貫 <span class=\"chem\">f(x)</span>、<span class=\"chem\">f'(x)</span> 與 <span class=\"chem\">f''(x)</span> 三者圖像的特徵。",

    // What you need to be able to do > checklist > span
    "Set up a single-variable objective function using a constraint equation and find maximum or minimum values in context.": "利用約束方程建立單變數目標函數，並在實際情境中求極大值或極小值。",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "題型解碼",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "題型解碼：辨識應採用的技巧",

    // Question decoder: spotting which technique to use > p
    "Calculus questions in IB Math AA use recurring trigger phrases. Use this table to translate the wording on the exam paper directly into the required equation and test.": "IB Math AA 的微積分題目經常出現固定的提示字眼。利用下表把試卷上的字眼直接轉化為所需的方程與檢驗方法。",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — Differentiation, curve analysis and optimization": "題型解碼 — 微分、曲線分析與優化",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "題目中的常見字眼",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "實際含義（公式與列式）",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1（不可用計算機）與 Paper 2（可用 GDC）策略",

    // Question decoder: spotting which technique to use > table > th
    "“Find the gradient of the curve at <span class=\"chem\">x = a</span>”": "「求曲線在 <span class=\"chem\">x = a</span> 處的斜率」",

    // Question decoder: spotting which technique to use > table > td
    "Differentiate <span class=\"chem\">f(x)</span> and evaluate <span class=\"chem\">m_T = f'(a)</span>.": "對 <span class=\"chem\">f(x)</span> 求導並計算 <span class=\"chem\">m_T = f'(a)</span>。",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Paper 1:</strong> Differentiate algebraically and substitute <span class=\"chem\">x = a</span>.<br><strong>Paper 2:</strong> Use <span class=\"mono\">nDeriv</span> (<span class=\"chem\">d/dx</span> at <span class=\"chem\">x = a</span>) directly on your GDC.": "<strong>Paper 1：</strong>以代數方法求導並代入 <span class=\"chem\">x = a</span>。<br><strong>Paper 2：</strong>直接在 GDC 上使用 <span class=\"mono\">nDeriv</span>（在 <span class=\"chem\">x = a</span> 處求 <span class=\"chem\">d/dx</span>）。",

    // Question decoder: spotting which technique to use > table > th
    "“Find the equation of the normal at <span class=\"chem\">x = a</span>”": "「求在 <span class=\"chem\">x = a</span> 處的法線方程」",

    // Question decoder: spotting which technique to use > table > td
    "Find point <span class=\"chem\">y_1 = f(a)</span>, tangent gradient <span class=\"chem\">m_T = f'(a)</span>, and normal gradient <span class=\"chem\">m_N = -1 / f'(a)</span>. Then use <span class=\"chem\">y - y_1 = m_N(x - a)</span>.": "求點 <span class=\"chem\">y_1 = f(a)</span>、切線斜率 <span class=\"chem\">m_T = f'(a)</span> 及法線斜率 <span class=\"chem\">m_N = -1 / f'(a)</span>。然後使用 <span class=\"chem\">y - y_1 = m_N(x - a)</span>。",

    // Question decoder: spotting which technique to use > table > td
    "Check if a specific form is requested (<span class=\"chem\">y = mx + c</span> or <span class=\"chem\">ax + by + d = 0</span> with integers). If <span class=\"chem\">f'(a) = 0</span>, the tangent is horizontal (<span class=\"chem\">y = y_1</span>) and the normal is vertical (<span class=\"chem\">x = a</span>).": "檢查題目是否要求特定形式（<span class=\"chem\">y = mx + c</span> 或整數係數的 <span class=\"chem\">ax + by + d = 0</span>）。若 <span class=\"chem\">f'(a) = 0</span>，切線為水平線（<span class=\"chem\">y = y_1</span>），而法線為鉛垂線（<span class=\"chem\">x = a</span>）。",

    // Question decoder: spotting which technique to use > table > th
    "“Find the coordinates of the stationary point(s) / turning point(s) / local maximum or minimum”": "「求駐點／轉向點／局部極大值或局部極小值的坐標」",

    // Question decoder: spotting which technique to use > table > td
    "Solve <span class=\"chem\">f'(x) = 0</span> for <span class=\"chem\">x</span>, substitute back into <strong>original</strong> <span class=\"chem\">f(x)</span> for <span class=\"chem\">y</span>, and test nature via sign change of <span class=\"chem\">f'(x)</span> or sign of <span class=\"chem\">f''(x)</span>.": "解 <span class=\"chem\">f'(x) = 0</span> 求 <span class=\"chem\">x</span>，代回<strong>原函數</strong> <span class=\"chem\">f(x)</span> 求 <span class=\"chem\">y</span>，並透過 <span class=\"chem\">f'(x)</span> 的變號或 <span class=\"chem\">f''(x)</span> 的正負號檢驗性質。",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Paper 1:</strong> Factor <span class=\"chem\">f'(x) = 0</span> and show a sign table or <span class=\"chem\">f''(a)</span> value.<br><strong>Paper 2:</strong> Graph <span class=\"chem\">y = f(x)</span> and use <span class=\"mono\">Maximum</span> / <span class=\"mono\">Minimum</span> (or zeros of <span class=\"chem\">f'(x)</span>).": "<strong>Paper 1：</strong>因式分解 <span class=\"chem\">f'(x) = 0</span> 並列出變號表或計算 <span class=\"chem\">f''(a)</span>。<br><strong>Paper 2：</strong>繪出 <span class=\"chem\">y = f(x)</span> 並使用 <span class=\"mono\">Maximum</span> / <span class=\"mono\">Minimum</span>（或求 <span class=\"chem\">f'(x)</span> 的零點）。",

    // Question decoder: spotting which technique to use > table > th
    "“Find the coordinates of the point(s) of inflexion”": "「求拐點的坐標」",

    // Question decoder: spotting which technique to use > table > td
    "Solve <span class=\"chem\">f''(x) = 0</span> <strong>AND</strong> verify that <span class=\"chem\">f''(x)</span> <strong>changes sign</strong> across that root (concavity switches between <span class=\"chem\">f'' &gt; 0</span> and <span class=\"chem\">f'' &lt; 0</span>).": "解 <span class=\"chem\">f''(x) = 0</span>，<strong>並且</strong>驗證 <span class=\"chem\">f''(x)</span> 在該根兩側<strong>改變正負號</strong>（凹凸性在 <span class=\"chem\">f'' &gt; 0</span> 與 <span class=\"chem\">f'' &lt; 0</span> 之間切換）。",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Warning:</strong> <span class=\"chem\">f''(a) = 0</span> alone is <em>not</em> enough (for example, <span class=\"chem\">y = x^4</span> has <span class=\"chem\">f''(0) = 0</span> but no inflexion point). Always draw a sign chart for <span class=\"chem\">f''(x)</span> to earn the reasoning mark <strong>[R1]</strong>!": "<strong>警告：</strong>單靠 <span class=\"chem\">f''(a) = 0</span> 並<em>不足夠</em>（例如 <span class=\"chem\">y = x^4</span> 滿足 <span class=\"chem\">f''(0) = 0</span> 但沒有拐點）。務必繪畫 <span class=\"chem\">f''(x)</span> 的正負號表以取得推理分 <strong>[R1]</strong>！",

    // Question decoder: spotting which technique to use > table > th
    "“The diagram shows the graph of <span class=\"chem\">y = f'(x)</span>. Find where <span class=\"chem\">f(x)</span> is increasing, has local extrema, or has points of inflexion.”": "「圖中顯示 <span class=\"chem\">y = f'(x)</span> 的圖像。求 <span class=\"chem\">f(x)</span> 遞增、具有局部極值或具有拐點的區間或位置。」",

    // Question decoder: spotting which technique to use > table > td
    "Read the given graph as the <em>derivative</em>:<br>• <span class=\"chem\">f(x)</span> increasing <span class=\"chem\">&lt;=&gt; f'(x) &gt; 0</span> (above <span class=\"chem\">x</span>-axis).<br>• Local max/min of <span class=\"chem\">f(x)</span> <span class=\"chem\">&lt;=&gt; f'(x)</span> crosses the <span class=\"chem\">x</span>-axis.<br>• Point of inflexion of <span class=\"chem\">f(x)</span> <span class=\"chem\">&lt;=&gt;</span> <strong>turning point (local max/min) of <span class=\"chem\">f'(x)</span></strong>!": "把所給圖像視為<em>導函數</em>：<br>• <span class=\"chem\">f(x)</span> 遞增 <span class=\"chem\">&lt;=&gt; f'(x) &gt; 0</span>（位於 <span class=\"chem\">x</span> 軸上方）。<br>• <span class=\"chem\">f(x)</span> 的局部極大／極小值 <span class=\"chem\">&lt;=&gt; f'(x)</span> 穿過 <span class=\"chem\">x</span> 軸。<br>• <span class=\"chem\">f(x)</span> 的拐點 <span class=\"chem\">&lt;=&gt;</span> <strong><span class=\"chem\">f'(x)</span> 的轉向點（局部極大／極小值）</strong>！",

    // Question decoder: spotting which technique to use > table > td
    "Before doing anything, circle the axis label (<span class=\"chem\">y = f(x)</span> vs <span class=\"chem\">y = f'(x)</span>). If <span class=\"chem\">f'(x)</span> touches the <span class=\"chem\">x</span>-axis without crossing it, <span class=\"chem\">f(x)</span> has a <strong>stationary point of inflexion</strong>.": "動筆前先圈出坐標軸標籤（<span class=\"chem\">y = f(x)</span> 抑或 <span class=\"chem\">y = f'(x)</span>）。若 <span class=\"chem\">f'(x)</span> 只觸及 <span class=\"chem\">x</span> 軸而未穿過它，則 <span class=\"chem\">f(x)</span> 具有<strong>駐拐點</strong>。",

    // Question decoder: spotting which technique to use > table > th
    "“Show that the surface area is given by <span class=\"chem\">A(x) = ...</span> and find the value of <span class=\"chem\">x</span> that minimizes <span class=\"chem\">A</span>”": "「證明表面積為 <span class=\"chem\">A(x) = ...</span> 並求使 <span class=\"chem\">A</span> 達至極小值的 <span class=\"chem\">x</span> 值」",

    // Question decoder: spotting which technique to use > table > td
    "1. Write the constraint equation (e.g. fixed volume <span class=\"chem\">V</span>) and isolate the second variable <span class=\"chem\">h</span>.<br>2. Substitute <span class=\"chem\">h</span> into the objective function <span class=\"chem\">A</span>.<br>3. Solve <span class=\"chem\">A'(x) = 0</span> and justify minimum via <span class=\"chem\">A''(x) &gt; 0</span>.": "1. 寫出約束方程（例如固定體積 <span class=\"chem\">V</span>）並分離出第二個變數 <span class=\"chem\">h</span>。<br>2. 將 <span class=\"chem\">h</span> 代入目標函數 <span class=\"chem\">A</span>。<br>3. 解 <span class=\"chem\">A'(x) = 0</span> 並透過 <span class=\"chem\">A''(x) &gt; 0</span> 證明為極小值。",

    // Question decoder: spotting which technique to use > table > td
    "Because the formula for <span class=\"chem\">A(x)</span> is given in a “Show that” part, you can still do the calculus part even if you get stuck on the geometry setup!": "由於「證明 (Show that)」部分已給出 <span class=\"chem\">A(x)</span> 的公式，即使你在幾何列式部分卡住了，仍可繼續完成後面的微積分部分！",

    // Limits, standard derivatives, tangents, normals and differen > data-toc attribute
    "Limits & rules": "極限與求導法則",

    // Limits, standard derivatives, tangents, normals and differen > h2
    "Limits, standard derivatives, tangents, normals and differentiation rules": "極限、標準導數、切線、法線與微分法則",

    // Limits, standard derivatives, tangents, normals and differen > p
    "When we zoom in closely on a smooth curve <span class=\"chem\">y = f(x)</span> near a point <span class=\"chem\">P(x, f(x))</span>, the curve looks like a straight line. If we pick a nearby point <span class=\"chem\">Q(x + h, f(x + h))</span>, the chord <span class=\"chem\">PQ</span> has gradient <span class=\"chem\">(f(x + h) - f(x)) / h</span>. As the step <span class=\"chem\">h -&gt; 0</span>, the chord approaches the <dfn data-def=\"A straight line that touches a curve at a point and has the exact same instantaneous gradient f'(x) as the curve at that point.\">tangent line</dfn>, and its limiting gradient is the <dfn data-def=\"The instantaneous rate of change of f(x) with respect to x, giving the gradient of the tangent to y = f(x) at any point x.\">derivative</dfn> <span class=\"chem\">f'(x)</span> (also written <span class=\"chem\">dy/dx</span>).": "當我們在光滑曲線 <span class=\"chem\">y = f(x)</span> 的點 <span class=\"chem\">P(x, f(x))</span> 附近不斷放大時，曲線看起來就像一條直線。若取鄰近點 <span class=\"chem\">Q(x + h, f(x + h))</span>，弦 <span class=\"chem\">PQ</span> 的斜率為 <span class=\"chem\">(f(x + h) - f(x)) / h</span>。當步長 <span class=\"chem\">h -&gt; 0</span> 時，割線趨近於<dfn data-def=\"在某一點與曲線相切，且在該點與曲線具有完全相同瞬時斜率 f'(x) 的直線。\">切線 <span class=\"en-term\">(tangent line)</span></dfn>，而其極限斜率即為<dfn data-def=\"f(x) 關於 x 的瞬時變率，給出 y = f(x) 在任意點 x 處切線的斜率。\">導數 <span class=\"en-term\">(derivative)</span></dfn><span class=\"chem\">f'(x)</span>（亦寫作 <span class=\"chem\">dy/dx</span>）。",

    // Limits, standard derivatives, tangents, normals and differen > data-def attribute
    "A straight line that touches a curve at a point and has the exact same instantaneous gradient f'(x) as the curve at that point.": "在某一點與曲線相切，且在該點與曲線具有完全相同瞬時斜率 f'(x) 的直線。",

    // Limits, standard derivatives, tangents, normals and differen > data-def attribute
    "The instantaneous rate of change of f(x) with respect to x, giving the gradient of the tangent to y = f(x) at any point x.": "f(x) 關於 x 的瞬時變率，給出 y = f(x) 在任意點 x 處切線的斜率。",

    // Limits, standard derivatives, tangents, normals and differen > h3
    "Power rule and standard derivatives": "冪法則與標準導數",

    // Limits, standard derivatives, tangents, normals and differen > p
    "For any rational power <span class=\"chem\">n</span>, the power rule brings the exponent down to the front and subtracts <span class=\"chem\">1</span> from the exponent. Before differentiating roots or fractions with <span class=\"chem\">x</span> in the denominator, always rewrite them in index form <span class=\"chem\">a x^n</span> first:": "對於任何有理數次冪 <span class=\"chem\">n</span>，冪法則把指數移到前面作為係數，再把指數減 <span class=\"chem\">1</span>。在對根式或分母含有 <span class=\"chem\">x</span> 的分式求導前，務必先改寫為指數形式 <span class=\"chem\">a x^n</span>：",

    // Limits, standard derivatives, tangents, normals and differen > li
    "<span class=\"chem\">1 / x^k = x^{-k}</span> (for example, <span class=\"chem\">1 / x^3 = x^{-3} -&gt; -3x^{-4} = -3 / x^4</span>).": "<span class=\"chem\">1 / x^k = x^{-k}</span>（例如 <span class=\"chem\">1 / x^3 = x^{-3} -&gt; -3x^{-4} = -3 / x^4</span>）。",

    // Limits, standard derivatives, tangents, normals and differen > li
    "<span class=\"chem\">sqrt(x) = x^{1/2} -&gt; (1/2)x^{-1/2} = 1 / (2 sqrt(x))</span>, and <span class=\"chem\">1 / sqrt(x) = x^{-1/2} -&gt; -(1/2)x^{-3/2}</span>.": "<span class=\"chem\">sqrt(x) = x^{1/2} -&gt; (1/2)x^{-1/2} = 1 / (2 sqrt(x))</span>，以及 <span class=\"chem\">1 / sqrt(x) = x^{-1/2} -&gt; -(1/2)x^{-3/2}</span>。",

    // Limits, standard derivatives, tangents, normals and differen > li
    "A standalone constant <span class=\"chem\">c</span> has gradient zero (<span class=\"chem\">d/dx (c) = 0</span>), and constants multiplying a function stay in front: <span class=\"chem\">d/dx [k f(x)] = k f'(x)</span>.": "獨立常數 <span class=\"chem\">c</span> 的導數為零（<span class=\"chem\">d/dx (c) = 0</span>），而乘在函數前的常數保持不變：<span class=\"chem\">d/dx [k f(x)] = k f'(x)</span>。",

    // Limits, standard derivatives, tangents, normals and differen > formula booklet note > p
    "<strong>In your formula booklet (SL 5.3 &amp; 5.6):</strong> Standard derivatives given in the booklet:": "<strong>公式手冊中的標準導數（SL 5.3 與 5.6）：</strong>",

    // Limits, standard derivatives, tangents, normals and differen > formula booklet note > li
    "<span class=\"chem\">f(x) = sin x =&gt; f'(x) = cos x</span> and <span class=\"chem\">f(x) = cos x =&gt; f'(x) = -sin x</span>": "<span class=\"chem\">f(x) = sin x =&gt; f'(x) = cos x</span> 與 <span class=\"chem\">f(x) = cos x =&gt; f'(x) = -sin x</span>",

    // Limits, standard derivatives, tangents, normals and differen > formula booklet note > li
    "<span class=\"chem\">f(x) = e^x =&gt; f'(x) = e^x</span> and <span class=\"chem\">f(x) = ln x =&gt; f'(x) = 1/x</span>": "<span class=\"chem\">f(x) = e^x =&gt; f'(x) = e^x</span> 與 <span class=\"chem\">f(x) = ln x =&gt; f'(x) = 1/x</span>",

    // Limits, standard derivatives, tangents, normals and differen > common mistake > p
    "<strong>Common mistake — Degrees vs radians and expanding before differentiating:</strong><br> 1. The formulas <span class=\"chem\">d/dx (sin x) = cos x</span> and <span class=\"chem\">d/dx (cos x) = -sin x</span> are valid <strong>only when <span class=\"chem\">x</span> is in radians</strong>.<br> 2. When given a single-term denominator like <span class=\"chem\">y = (x^3 - 4x + 1) / x^2</span>, do <em>not</em> jump straight to the quotient rule! Split the fraction into powers first: <span class=\"chem\">y = x - 4x^{-1} + x^{-2}</span>, then differentiate term by term in one line: <span class=\"chem\">dy/dx = 1 + 4x^{-2} - 2x^{-3}</span>.": "<strong>常見錯誤 — 角度與弧度制，以及求導前先拆項：</strong><br> 1. 公式 <span class=\"chem\">d/dx (sin x) = cos x</span> 與 <span class=\"chem\">d/dx (cos x) = -sin x</span> <strong>僅在 <span class=\"chem\">x</span> 以弧度為單位時成立</strong>。<br> 2. 遇到單項分母例如 <span class=\"chem\">y = (x^3 - 4x + 1) / x^2</span> 時，切<em>勿</em>直接套用商法則！先將分式拆成冪次項：<span class=\"chem\">y = x - 4x^{-1} + x^{-2}</span>，再逐項求導一行搞定：<span class=\"chem\">dy/dx = 1 + 4x^{-2} - 2x^{-3}</span>。",

    // Limits, standard derivatives, tangents, normals and differen > h3
    "Tangents and normals": "切線與法線",

    // Limits, standard derivatives, tangents, normals and differen > p
    "At the point on <span class=\"chem\">y = f(x)</span> where <span class=\"chem\">x = a</span>, the <span class=\"chem\">y</span>-coordinate is <span class=\"chem\">y_1 = f(a)</span> and the tangent gradient is <span class=\"chem\">m_T = f'(a)</span>. The <dfn data-def=\"The straight line perpendicular to the tangent line at the point of contact (a, f(a)), with gradient m_N = -1 / f'(a).\">normal line</dfn> is perpendicular to the tangent at <span class=\"chem\">(a, f(a))</span>, so its gradient is the negative reciprocal <span class=\"chem\">m_N = -1 / m_T = -1 / f'(a)</span> (provided <span class=\"chem\">f'(a) != 0</span>).": "在曲線 <span class=\"chem\">y = f(x)</span> 上 <span class=\"chem\">x = a</span> 的點處，<span class=\"chem\">y</span> 坐標為 <span class=\"chem\">y_1 = f(a)</span>，切線斜率為 <span class=\"chem\">m_T = f'(a)</span>。<dfn data-def=\"在切點 (a, f(a)) 處垂直於切線的直線，其斜率為 m_N = -1 / f'(a)。\">法線 <span class=\"en-term\">(normal line)</span></dfn>在 <span class=\"chem\">(a, f(a))</span> 處垂直於切線，故其斜率為負倒數 <span class=\"chem\">m_N = -1 / m_T = -1 / f'(a)</span>（只要 <span class=\"chem\">f'(a) != 0</span>）。",

    // Limits, standard derivatives, tangents, normals and differen > data-def attribute
    "The straight line perpendicular to the tangent line at the point of contact (a, f(a)), with gradient m_N = -1 / f'(a).": "在切點 (a, f(a)) 處垂直於切線的直線，其斜率為 m_N = -1 / f'(a)。",

    // Limits, standard derivatives, tangents, normals and differen > equation > maths line
    "Tangent: <i>y</i> − <i>f</i>(<i>a</i>) = <i>f'</i>(<i>a</i>)(<i>x</i> − <i>a</i>) &nbsp;&nbsp;|&nbsp;&nbsp; Normal: <i>y</i> − <i>f</i>(<i>a</i>) = −<span class=\"frac\"><span>1</span><span><i>f'</i>(<i>a</i>)</span></span>(<i>x</i> − <i>a</i>)": "切線：<i>y</i> − <i>f</i>(<i>a</i>) = <i>f'</i>(<i>a</i>)(<i>x</i> − <i>a</i>) &nbsp;&nbsp;|&nbsp;&nbsp; 法線：<i>y</i> − <i>f</i>(<i>a</i>) = −<span class=\"frac\"><span>1</span><span><i>f'</i>(<i>a</i>)</span></span>(<i>x</i> − <i>a</i>)",

    // Limits, standard derivatives, tangents, normals and differen > equation > dd
    "point of contact on the curve": "曲線上的切點",

    // Limits, standard derivatives, tangents, normals and differen > equation > dd
    "gradient of the tangent at <i>x</i> = <i>a</i>": "在 <i>x</i> = <i>a</i> 處的切線斜率",

    // Limits, standard derivatives, tangents, normals and differen > equation > dd
    "gradient of the normal at <i>x</i> = <i>a</i>": "在 <i>x</i> = <i>a</i> 處的法線斜率",

    // Limits, standard derivatives, tangents, normals and differen > widget > data-title attribute
    "Tangent, normal and secant limit explorer": "切線、法線與割線極限探索器",

    // Limits, standard derivatives, tangents, normals and differen > widget > figcaption
    "Choose a function, move the point of contact <span class=\"chem\">x_0</span>, and shrink the secant step <span class=\"chem\">h -&gt; 0</span> to see the secant chord lock onto the tangent line while the normal stays perpendicular.": "選擇一個函數、移動切點 <span class=\"chem\">x_0</span>，並把割線步長 <span class=\"chem\">h -&gt; 0</span> 縮小，觀察割線如何貼合切線而法線始終保持垂直。",

    // Limits, standard derivatives, tangents, normals and differen > h3
    "Chain rule, product rule, and quotient rule": "鏈式法則、乘積法則與商法則",

    // Limits, standard derivatives, tangents, normals and differen > p
    "When functions are combined by composition, multiplication, or division, you cannot simply differentiate each piece separately. Use the three structural rules from your Formula Booklet:": "當函數透過複合、相乘或相除結合時，不能直接分開各自求導。請使用公式手冊中的三條結構法則：",

    // Limits, standard derivatives, tangents, normals and differen > table > caption
    "Differentiation rules for composite, product and quotient functions (SL 5.6)": "複合函數、乘積函數與商函數的求導法則（SL 5.6）",

    // Limits, standard derivatives, tangents, normals and differen > table > th
    "Rule": "法則",

    // Limits, standard derivatives, tangents, normals and differen > table > th
    "When to use it": "適用情況",

    // Limits, standard derivatives, tangents, normals and differen > table > th
    "Formula Booklet form &amp; fast pattern": "公式手冊形式與快速口訣",

    // Limits, standard derivatives, tangents, normals and differen > table > th
    "Quick example": "快速示例",

    // Limits, standard derivatives, tangents, normals and differen > table > th
    "Chain rule": "鏈式法則",

    // Limits, standard derivatives, tangents, normals and differen > table > td
    "A function <em>inside</em> another function: <span class=\"chem\">y = f(g(x))</span>.": "一個函數<em>嵌套</em>在另一個函數之內：<span class=\"chem\">y = f(g(x))</span>。",

    // Limits, standard derivatives, tangents, normals and differen > table > td
    "<span class=\"chem\">dy/dx = (dy/du) * (du/dx) = f'(g(x)) * g'(x)</span><br><em>(“Differentiate the outside leaving the inside alone, then multiply by the derivative of the inside.”)</em>": "<span class=\"chem\">dy/dx = (dy/du) * (du/dx) = f'(g(x)) * g'(x)</span><br><em>（「先對外層求導並保留內層不變，再乘以內層的導數。」）</em>",

    // Limits, standard derivatives, tangents, normals and differen > table > td
    "<span class=\"chem\">d/dx [e^{3x^2}] = e^{3x^2} * 6x</span><br><span class=\"chem\">d/dx [ln(5x - 2)] = 5 / (5x - 2)</span><br><span class=\"chem\">d/dx [cos(4x)] = -4 sin(4x)</span>": "<span class=\"chem\">d/dx [e^{3x^2}] = e^{3x^2} * 6x</span><br><span class=\"chem\">d/dx [ln(5x - 2)] = 5 / (5x - 2)</span><br><span class=\"chem\">d/dx [cos(4x)] = -4 sin(4x)</span>",

    // Limits, standard derivatives, tangents, normals and differen > table > th
    "Product rule": "乘積法則",

    // Limits, standard derivatives, tangents, normals and differen > table > td
    "Two functions of <span class=\"chem\">x</span> multiplied together: <span class=\"chem\">y = u(x) v(x)</span>.": "兩個 <span class=\"chem\">x</span> 的函數相乘：<span class=\"chem\">y = u(x) v(x)</span>。",

    // Limits, standard derivatives, tangents, normals and differen > table > td
    "<span class=\"chem\">dy/dx = u (dv/dx) + v (du/dx) = u v' + v u'</span><br><em>(“First times derivative of second, plus second times derivative of first.”)</em>": "<span class=\"chem\">dy/dx = u (dv/dx) + v (du/dx) = u v' + v u'</span><br><em>（「前乘後導，加後乘前導。」）</em>",

    // Limits, standard derivatives, tangents, normals and differen > table > th
    "Quotient rule": "商法則",

    // Limits, standard derivatives, tangents, normals and differen > table > td
    "One function of <span class=\"chem\">x</span> divided by another: <span class=\"chem\">y = u(x) / v(x)</span>.": "一個 <span class=\"chem\">x</span> 的函數除以另一個：<span class=\"chem\">y = u(x) / v(x)</span>。",

    // Limits, standard derivatives, tangents, normals and differen > table > td
    "<span class=\"chem\">dy/dx = (v (du/dx) - u (dv/dx)) / v^2 = (v u' - u v') / v^2</span><br><em>(“Bottom times derivative of top, minus top times derivative of bottom, all over bottom squared.”)</em>": "<span class=\"chem\">dy/dx = (v (du/dx) - u (dv/dx)) / v^2 = (v u' - u v') / v^2</span><br><em>（「分母乘分子導，減分子乘分母導，全部除以分母平方。」）</em>",

    // Limits, standard derivatives, tangents, normals and differen > table > td
    "<span class=\"chem\">y = (ln x) / x</span>:<br><span class=\"chem\">y' = (x(1/x) - (ln x)(1)) / x^2 = (1 - ln x) / x^2</span>": "<span class=\"chem\">y = (ln x) / x</span>:<br><span class=\"chem\">y' = (x(1/x) - (ln x)(1)) / x^2 = (1 - ln x) / x^2</span>",

    // Limits, standard derivatives, tangents, normals and differen > exam tip (shown in English + translation) > p
    "<strong>Exam tip — Factoring after the product or quotient rule:</strong> Whenever a question asks you to solve <span class=\"chem\">f'(x) = 0</span> after using the product or quotient rule, <strong>do not expand</strong> brackets! Instead, factor out common terms (especially <span class=\"chem\">e^{kx}</span>, which is never zero, or fractional powers like <span class=\"chem\">(2x + 1)^{-1/2}</span>). For a quotient <span class=\"chem\">(v u' - u v') / v^2 = 0</span>, you only need to set the numerator <span class=\"chem\">v u' - u v' = 0</span> (checking that <span class=\"chem\">v != 0</span>).": "<strong>考試貼士 — 使用乘積或商法則後先抽公因式：</strong>每當題目要求在使用乘積或商法則後解 <span class=\"chem\">f'(x) = 0</span>，<strong>切勿展開</strong>括號！相反，應抽出公因式（特別是永不為零的 <span class=\"chem\">e^{kx}</span>，或如 <span class=\"chem\">(2x + 1)^{-1/2}</span> 的分數次冪）。對於分式 <span class=\"chem\">(v u' - u v') / v^2 = 0</span>，只需令分子 <span class=\"chem\">v u' - u v' = 0</span>（同時檢查 <span class=\"chem\">v != 0</span>）。",

    // Limits, standard derivatives, tangents, normals and differen > worked example > h3
    "Finding where a normal line intersects a coordinate axis": "求法線與坐標軸的交點",

    // Limits, standard derivatives, tangents, normals and differen > worked example > p
    "Consider the curve <span class=\"chem\">f(x) = e^{2x - 2} * (x^2 + 1)</span>. The normal to the curve at the point <span class=\"chem\">P</span> where <span class=\"chem\">x = 1</span> intersects the <span class=\"chem\">x</span>-axis at point <span class=\"chem\">Q</span>. Find the exact coordinates of <span class=\"chem\">Q</span>. <strong>[6 marks]</strong>": "考慮曲線 <span class=\"chem\">f(x) = e^{2x - 2} * (x^2 + 1)</span>。曲線在 <span class=\"chem\">x = 1</span> 的點 <span class=\"chem\">P</span> 處之法線與 <span class=\"chem\">x</span> 軸相交於點 <span class=\"chem\">Q</span>。求 (Find) <span class=\"chem\">Q</span> 的準確坐標。<strong>[6 marks]</strong>",

    // Limits, standard derivatives, tangents, normals and differen > worked example > data-title attribute
    "Find the y-coordinate of P at x = 1": "求在 x = 1 處點 P 的 y 坐標",

    // Limits, standard derivatives, tangents, normals and differen > worked example > p
    "Substitute x = 1 into f(x) first so we have the full coordinates of the point of contact P.": "先將 x = 1 代入 f(x)，以取得切點 P 的完整坐標。",

    // Limits, standard derivatives, tangents, normals and differen > worked example > data-title attribute
    "Differentiate f(x) using the product rule and chain rule": "利用乘積法則與鏈式法則對 f(x) 求導",

    // Limits, standard derivatives, tangents, normals and differen > worked example > p
    "f(x) is a product of u = e^{2x−2} (which needs the chain rule, u' = 2e^{2x−2}) and v = x² + 1 (v' = 2x).": "f(x) 是 u = e^{2x−2}（需用鏈式法則，u' = 2e^{2x−2}）與 v = x² + 1（v' = 2x）的乘積。",

    // Limits, standard derivatives, tangents, normals and differen > worked example > data-title attribute
    "Evaluate the tangent gradient m_T and normal gradient m_N at x = 1": "計算在 x = 1 處的切線斜率 m_T 與法線斜率 m_N",

    // Limits, standard derivatives, tangents, normals and differen > worked example > p
    "Substitute x = 1 into f'(x) to get m_T, then take the negative reciprocal for the normal.": "將 x = 1 代入 f'(x) 求得 m_T，再取負倒數得法線斜率。",

    // Limits, standard derivatives, tangents, normals and differen > worked example > data-title attribute
    "Write the equation of the normal and set y = 0 for the x-intercept Q": "寫出法線方程並令 y = 0 求 x 截距 Q",

    // Limits, standard derivatives, tangents, normals and differen > worked example > p
    "Use point-gradient form at P(1, 2), then substitute y = 0 where the normal crosses the x-axis.": "在 P(1, 2) 使用點斜式，再代入法線穿過 x 軸時的 y = 0。",

    // Limits, standard derivatives, tangents, normals and differen > try it > p
    "Let <span class=\"chem\">f(x) = x^3 - 6x + 4</span>. Calculate the gradient <span class=\"chem\">f'(1)</span> of the tangent to the curve at <span class=\"chem\">x = 1</span>.": "設 <span class=\"chem\">f(x) = x^3 - 6x + 4</span>。計算 (Calculate) 曲線在 <span class=\"chem\">x = 1</span> 處切線的斜率 <span class=\"chem\">f'(1)</span>。",

    // Limits, standard derivatives, tangents, normals and differen > try it > li
    "Differentiate term by term using the power rule: <span class=\"chem\">f'(x) = 3x^2 - 6</span>.": "利用冪法則逐項求導：<span class=\"chem\">f'(x) = 3x^2 - 6</span>。",

    // Limits, standard derivatives, tangents, normals and differen > try it > li
    "Substitute <span class=\"chem\">x = 1</span> into <span class=\"chem\">f'(x) = 3(1)^2 - 6</span>.": "將 <span class=\"chem\">x = 1</span> 代入 <span class=\"chem\">f'(x) = 3(1)^2 - 6</span>。",

    // Increasing and decreasing functions, concavity, and connecti > data-toc attribute
    "Curve analysis": "曲線分析",

    // Increasing and decreasing functions, concavity, and connecti > h2
    "Increasing and decreasing functions, concavity, and connecting <span class=\"chem\">f</span>, <span class=\"chem\">f'</span> and <span class=\"chem\">f''</span>": "遞增與遞減函數、凹凸性及連貫 <span class=\"chem\">f</span>、<span class=\"chem\">f'</span> 與 <span class=\"chem\">f''</span>",

    // Increasing and decreasing functions, concavity, and connecti > p
    "The first derivative <span class=\"chem\">f'(x)</span> tells you the direction of the curve (going uphill or downhill), while the second derivative <span class=\"chem\">f''(x) = d^2y / dx^2</span> tells you the rate of change of the gradient itself—that is, how the curve bends (<dfn data-def=\"Whether a curve bends upwards like a cup (concave up, f''(x) &gt; 0, tangent lies below the curve) or downwards like a cap (concave down, f''(x) &lt; 0, tangent lies above the curve).\">concavity</dfn>).": "一階導數 <span class=\"chem\">f'(x)</span> 告訴你曲線的方向（上坡或下坡），而二階導數 <span class=\"chem\">f''(x) = d^2y / dx^2</span> 則告訴你斜率本身的變率——即曲線如何彎曲（<dfn data-def=\"曲線向上彎曲如杯狀（上凹，f''(x) &gt; 0，切線位於曲線下方）或向下彎曲如帽狀（下凹，f''(x) &lt; 0，切線位於曲線上方）的性質。\">凹凸性 <span class=\"en-term\">(concavity)</span></dfn>）。",

    // Increasing and decreasing functions, concavity, and connecti > data-def attribute
    "Whether a curve bends upwards like a cup (concave up, f''(x) > 0, tangent lies below the curve) or downwards like a cap (concave down, f''(x) < 0, tangent lies above the curve).": "曲線向上彎曲如杯狀（上凹，f''(x) > 0，切線位於曲線下方）或向下彎曲如帽狀（下凹，f''(x) < 0，切線位於曲線上方）的性質。",

    // Increasing and decreasing functions, concavity, and connecti > h3
    "Classifying stationary points and points of inflexion": "駐點與拐點的分類",

    // Increasing and decreasing functions, concavity, and connecti > li
    "<strong>Local maximum:</strong> <span class=\"chem\">f'(x)</span> changes sign from <span class=\"chem\">+</span> to <span class=\"chem\">-</span> across <span class=\"chem\">x = a</span> (or <span class=\"chem\">f''(a) &lt; 0</span>, concave down).": "<strong>局部極大值：</strong><span class=\"chem\">f'(x)</span> 在 <span class=\"chem\">x = a</span> 兩側由 <span class=\"chem\">+</span> 變為 <span class=\"chem\">-</span>（或 <span class=\"chem\">f''(a) &lt; 0</span>，下凹）。",

    // Increasing and decreasing functions, concavity, and connecti > li
    "<strong>Local minimum:</strong> <span class=\"chem\">f'(x)</span> changes sign from <span class=\"chem\">-</span> to <span class=\"chem\">+</span> across <span class=\"chem\">x = a</span> (or <span class=\"chem\">f''(a) &gt; 0</span>, concave up).": "<strong>局部極小值：</strong><span class=\"chem\">f'(x)</span> 在 <span class=\"chem\">x = a</span> 兩側由 <span class=\"chem\">-</span> 變為 <span class=\"chem\">+</span>（或 <span class=\"chem\">f''(a) &gt; 0</span>，上凹）。",

    // Increasing and decreasing functions, concavity, and connecti > li
    "<strong>Stationary (horizontal) point of inflexion:</strong> <span class=\"chem\">f'(x)</span> has the <em>same</em> sign on both sides of <span class=\"chem\">x = a</span> (either <span class=\"chem\">+</span> to <span class=\"chem\">0</span> to <span class=\"chem\">+</span>, like <span class=\"chem\">y = x^3</span>, or <span class=\"chem\">-</span> to <span class=\"chem\">0</span> to <span class=\"chem\">-</span>). Here <span class=\"chem\">f''(a) = 0</span> and <span class=\"chem\">f''(x)</span> changes sign.": "<strong>駐（水平切線）拐點：</strong><span class=\"chem\">f'(x)</span> 在 <span class=\"chem\">x = a</span> 兩側具有<em>相同</em>的正負號（由 <span class=\"chem\">+</span> 經 <span class=\"chem\">0</span> 到 <span class=\"chem\">+</span>，如 <span class=\"chem\">y = x^3</span>，或由 <span class=\"chem\">-</span> 經 <span class=\"chem\">0</span> 到 <span class=\"chem\">-</span>）。此處 <span class=\"chem\">f''(a) = 0</span> 且 <span class=\"chem\">f''(x)</span> 改變正負號。",

    // Increasing and decreasing functions, concavity, and connecti > li
    "<strong>General <dfn data-def=\"A point on a curve where the concavity changes (from concave up to concave down, or vice versa), meaning f''(x) changes sign across the point.\">point of inflexion</dfn>:</strong> Any point where the curve switches between concave up (<span class=\"chem\">f''(x) &gt; 0</span>) and concave down (<span class=\"chem\">f''(x) &lt; 0</span>). A point of inflexion can be <strong>stationary</strong> (<span class=\"chem\">f'(a) = 0</span>) or <strong>non-stationary</strong> (<span class=\"chem\">f'(a) != 0</span>, where the gradient reaches a steepest local extremum).": "<strong>一般<dfn data-def=\"曲線上凹凸性發生改變（由上凹變為下凹，或反之）的點，即 f''(x) 在該點兩側改變正負號。\">拐點 <span class=\"en-term\">(point of inflexion)</span></dfn>：</strong>任何使曲線在上凹（<span class=\"chem\">f''(x) &gt; 0</span>）與下凹（<span class=\"chem\">f''(x) &lt; 0</span>）之間切換的點。拐點可以是<strong>駐點</strong>（<span class=\"chem\">f'(a) = 0</span>）或<strong>非駐點</strong>（<span class=\"chem\">f'(a) != 0</span>，此處斜率達到最陡峭的局部極值）。",

    // Increasing and decreasing functions, concavity, and connecti > data-def attribute
    "A point on a curve where the concavity changes (from concave up to concave down, or vice versa), meaning f''(x) changes sign across the point.": "曲線上凹凸性發生改變（由上凹變為下凹，或反之）的點，即 f''(x) 在該點兩側改變正負號。",

    // Increasing and decreasing functions, concavity, and connecti > common mistake > p
    "<strong>Crucial trap — <span class=\"chem\">f''(a) = 0</span> does NOT guarantee a point of inflexion!</strong><br> Consider <span class=\"chem\">f(x) = x^4</span> at <span class=\"chem\">x = 0</span>: we have <span class=\"chem\">f'(x) = 4x^3 = 0</span> and <span class=\"chem\">f''(x) = 12x^2 = 0</span> at <span class=\"chem\">x = 0</span>. However, for both <span class=\"chem\">x &lt; 0</span> and <span class=\"chem\">x &gt; 0</span>, <span class=\"chem\">f''(x) = 12x^2 &gt; 0</span> (concave up on both sides!), so <span class=\"chem\">(0, 0)</span> is a <strong>local minimum</strong>, not a point of inflexion. Whenever the Second Derivative Test gives <span class=\"chem\">f''(a) = 0</span>, the test is inconclusive—you <em>must</em> check a sign table of <span class=\"chem\">f'(x)</span> or <span class=\"chem\">f''(x)</span> on either side of <span class=\"chem\">x = a</span>.": "<strong>關鍵陷阱 — <span class=\"chem\">f''(a) = 0</span> 並不保證是拐點！</strong><br> 考慮 <span class=\"chem\">f(x) = x^4</span> 在 <span class=\"chem\">x = 0</span> 處：在 <span class=\"chem\">x = 0</span> 有 <span class=\"chem\">f'(x) = 4x^3 = 0</span> 及 <span class=\"chem\">f''(x) = 12x^2 = 0</span>。然而，無論 <span class=\"chem\">x &lt; 0</span> 還是 <span class=\"chem\">x &gt; 0</span>，都有 <span class=\"chem\">f''(x) = 12x^2 &gt; 0</span>（兩側皆上凹！），因此 <span class=\"chem\">(0, 0)</span> 是<strong>局部極小值</strong>，而非拐點。每當二階導數檢驗得出 <span class=\"chem\">f''(a) = 0</span> 時，該檢驗便無法下結論——你<em>必須</em>檢查 <span class=\"chem\">x = a</span> 兩側 <span class=\"chem\">f'(x)</span> 或 <span class=\"chem\">f''(x)</span> 的正負號表。",

    // Increasing and decreasing functions, concavity, and connecti > h3
    "Master dictionary: connecting <span class=\"chem\">f(x)</span>, <span class=\"chem\">f'(x)</span>, and <span class=\"chem\">f''(x)</span>": "總對照表：連貫 <span class=\"chem\">f(x)</span>、<span class=\"chem\">f'(x)</span> 與 <span class=\"chem\">f''(x)</span>",

    // Increasing and decreasing functions, concavity, and connecti > table > caption
    "How features of y = f(x) appear on the graphs of y = f'(x) and y = f''(x)": "y = f(x) 的特徵在 y = f'(x) 與 y = f''(x) 圖像上的表現",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "Feature on <span class=\"chem\">y = f(x)</span>": "<span class=\"chem\">y = f(x)</span> 上的特徵",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "What happens on <span class=\"chem\">y = f'(x)</span>": "<span class=\"chem\">y = f'(x)</span> 上的表現",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "What happens on <span class=\"chem\">y = f''(x)</span>": "<span class=\"chem\">y = f''(x)</span> 上的表現",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "<span class=\"chem\">f(x)</span> is increasing": "<span class=\"chem\">f(x)</span> 遞增",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">f'(x) &gt; 0</span> (graph of <span class=\"chem\">f'</span> lies <strong>above</strong> the <span class=\"chem\">x</span>-axis)": "<span class=\"chem\">f'(x) &gt; 0</span>（<span class=\"chem\">f'</span> 圖像位於 <span class=\"chem\">x</span> 軸<strong>上方</strong>）",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "<span class=\"chem\">f(x)</span> is decreasing": "<span class=\"chem\">f(x)</span> 遞減",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">f'(x) &lt; 0</span> (graph of <span class=\"chem\">f'</span> lies <strong>below</strong> the <span class=\"chem\">x</span>-axis)": "<span class=\"chem\">f'(x) &lt; 0</span>（<span class=\"chem\">f'</span> 圖像位於 <span class=\"chem\">x</span> 軸<strong>下方</strong>）",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "Local maximum of <span class=\"chem\">f(x)</span>": "<span class=\"chem\">f(x)</span> 的局部極大值",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">x</span>-intercept where <span class=\"chem\">f'(x)</span> crosses from <strong>above to below</strong> (<span class=\"chem\">+ -&gt; -</span>)": "<span class=\"chem\">f'(x)</span> 由<strong>上方穿過至下方</strong>的 <span class=\"chem\">x</span> 截距（<span class=\"chem\">+ -&gt; -</span>）",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">f''(x) &lt; 0</span> (below the <span class=\"chem\">x</span>-axis)": "<span class=\"chem\">f''(x) &lt; 0</span>（位於 <span class=\"chem\">x</span> 軸下方）",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "Local minimum of <span class=\"chem\">f(x)</span>": "<span class=\"chem\">f(x)</span> 的局部極小值",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">x</span>-intercept where <span class=\"chem\">f'(x)</span> crosses from <strong>below to above</strong> (<span class=\"chem\">- -&gt; +</span>)": "<span class=\"chem\">f'(x)</span> 由<strong>下方穿過至上方</strong>的 <span class=\"chem\">x</span> 截距（<span class=\"chem\">- -&gt; +</span>）",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">f''(x) &gt; 0</span> (above the <span class=\"chem\">x</span>-axis)": "<span class=\"chem\">f''(x) &gt; 0</span>（位於 <span class=\"chem\">x</span> 軸上方）",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "<span class=\"chem\">f(x)</span> is concave up (<span class=\"chem\">∪</span>)": "<span class=\"chem\">f(x)</span> 上凹（<span class=\"chem\">∪</span>）",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">f'(x)</span> is <strong>increasing</strong> (positive slope on <span class=\"chem\">f'</span>)": "<span class=\"chem\">f'(x)</span> <strong>遞增</strong>（<span class=\"chem\">f'</span> 斜率為正）",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "<span class=\"chem\">f(x)</span> is concave down (<span class=\"chem\">∩</span>)": "<span class=\"chem\">f(x)</span> 下凹（<span class=\"chem\">∩</span>）",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">f'(x)</span> is <strong>decreasing</strong> (negative slope on <span class=\"chem\">f'</span>)": "<span class=\"chem\">f'(x)</span> <strong>遞減</strong>（<span class=\"chem\">f'</span> 斜率為負）",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "Point of inflexion of <span class=\"chem\">f(x)</span>": "<span class=\"chem\">f(x)</span> 的拐點",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<strong>Local maximum or minimum (turning point) of <span class=\"chem\">f'(x)</span></strong>": "<strong><span class=\"chem\">f'(x)</span> 的局部極大值或極小值（轉向點）</strong>",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">x</span>-intercept where <span class=\"chem\">f''(x) = 0</span> <strong>and crosses the <span class=\"chem\">x</span>-axis</strong>": "<span class=\"chem\">f''(x) = 0</span> <strong>且穿過 <span class=\"chem\">x</span> 軸</strong>的 <span class=\"chem\">x</span> 截距",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "Stationary point of inflexion of <span class=\"chem\">f(x)</span>": "<span class=\"chem\">f(x)</span> 的駐拐點",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">f'(x) = 0</span> and <span class=\"chem\">f'(x)</span> <strong>touches</strong> the <span class=\"chem\">x</span>-axis without crossing": "<span class=\"chem\">f'(x) = 0</span> 且 <span class=\"chem\">f'(x)</span> <strong>觸及</strong> <span class=\"chem\">x</span> 軸而不穿過",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">f''(x) = 0</span> and <span class=\"chem\">f''(x)</span> crosses the <span class=\"chem\">x</span>-axis": "<span class=\"chem\">f''(x) = 0</span> 且 <span class=\"chem\">f''(x)</span> 穿過 <span class=\"chem\">x</span> 軸",

    // Increasing and decreasing functions, concavity, and connecti > widget > data-title attribute
    "Synchronized f(x), f'(x) and f''(x) explorer": "同步 f(x)、f'(x) 與 f''(x) 探索器",

    // Increasing and decreasing functions, concavity, and connecti > widget > figcaption
    "Drag <span class=\"chem\">x_0</span> across the domain and compare all three curves at once: zeros of <span class=\"chem\">f'(x)</span> align vertically with turning points of <span class=\"chem\">f(x)</span>, while turning points of <span class=\"chem\">f'(x)</span> (and sign-changing zeros of <span class=\"chem\">f''(x)</span>) align vertically with points of inflexion of <span class=\"chem\">f(x)</span>. Switch to <span class=\"chem\">f(x) = x^4</span> to see why <span class=\"chem\">f''(0) = 0</span> without a sign change is a minimum, not an inflexion point.": "在定義域上拖動 <span class=\"chem\">x_0</span> 並同時比較三條曲線：<span class=\"chem\">f'(x)</span> 的零點鉛垂對齊 <span class=\"chem\">f(x)</span> 的轉向點，而 <span class=\"chem\">f'(x)</span> 的轉向點（及 <span class=\"chem\">f''(x)</span> 的變號零點）則鉛垂對齊 <span class=\"chem\">f(x)</span> 的拐點。切換至 <span class=\"chem\">f(x) = x^4</span>，觀察為何沒有變號的 <span class=\"chem\">f''(0) = 0</span> 是極小值而非拐點。",

    // Increasing and decreasing functions, concavity, and connecti > worked example > h3
    "Classifying stationary and inflexion points of a polynomial": "多項式駐點與拐點的分類",

    // Increasing and decreasing functions, concavity, and connecti > worked example > p
    "Consider <span class=\"chem\">f(x) = x^4 - 4x^3 + 10</span>. Find the coordinates of all stationary points and points of inflexion on the graph of <span class=\"chem\">f</span>, justifying their nature. <strong>[7 marks]</strong>": "考慮 <span class=\"chem\">f(x) = x^4 - 4x^3 + 10</span>。求 (Find) <span class=\"chem\">f</span> 的圖像上所有駐點與拐點的坐標，並說明其性質。<strong>[7 marks]</strong>",

    // Increasing and decreasing functions, concavity, and connecti > worked example > data-title attribute
    "Find f'(x) and solve f'(x) = 0 for stationary points": "求 f'(x) 並解 f'(x) = 0 以求駐點",

    // Increasing and decreasing functions, concavity, and connecti > worked example > p
    "Factor out the highest common power of x to find all roots of f'(x) = 0 cleanly.": "抽出 x 的最高公冪，以清楚求出 f'(x) = 0 的所有根。",

    // Increasing and decreasing functions, concavity, and connecti > worked example > maths line
    "<i>f'</i>(<i>x</i>) = 4<i>x</i><sup>3</sup> − 12<i>x</i><sup>2</sup> = 4<i>x</i><sup>2</sup>(<i>x</i> − 3) = 0 ⇒ <i>x</i> = 0 or <i>x</i> = 3 <b>[M1 A1]</b>": "<i>f'</i>(<i>x</i>) = 4<i>x</i><sup>3</sup> − 12<i>x</i><sup>2</sup> = 4<i>x</i><sup>2</sup>(<i>x</i> − 3) = 0 ⇒ <i>x</i> = 0 或 <i>x</i> = 3 <b>[M1 A1]</b>",

    // Increasing and decreasing functions, concavity, and connecti > worked example > data-title attribute
    "Find f''(x) and solve f''(x) = 0 for candidate inflexion points": "求 f''(x) 並解 f''(x) = 0 以求候選拐點",

    // Increasing and decreasing functions, concavity, and connecti > worked example > p
    "Differentiate f'(x) to get f''(x) and factor to find where concavity can change.": "對 f'(x) 求導得 f''(x) 並因式分解，找出凹凸性可能改變的位置。",

    // Increasing and decreasing functions, concavity, and connecti > worked example > maths line
    "<i>f''</i>(<i>x</i>) = 12<i>x</i><sup>2</sup> − 24<i>x</i> = 12<i>x</i>(<i>x</i> − 2) = 0 ⇒ <i>x</i> = 0 or <i>x</i> = 2 <b>[M1 A1]</b>": "<i>f''</i>(<i>x</i>) = 12<i>x</i><sup>2</sup> − 24<i>x</i> = 12<i>x</i>(<i>x</i> − 2) = 0 ⇒ <i>x</i> = 0 或 <i>x</i> = 2 <b>[M1 A1]</b>",

    // Increasing and decreasing functions, concavity, and connecti > worked example > data-title attribute
    "Test sign changes of f''(x) and classify every point": "檢驗 f''(x) 的變號並將每個點分類",

    // Increasing and decreasing functions, concavity, and connecti > worked example > p
    "For x &lt; 0 (e.g. x = −1), f''(−1) = +36 &gt; 0. For 0 &lt; x &lt; 2 (e.g. x = 1), f''(1) = −12 &lt; 0. For x &gt; 2 (e.g. x = 3), f''(3) = +36 &gt; 0.": "當 x &lt; 0（例如 x = −1）時，f''(−1) = +36 &gt; 0。當 0 &lt; x &lt; 2（例如 x = 1）時，f''(1) = −12 &lt; 0。當 x &gt; 2（例如 x = 3）時，f''(3) = +36 &gt; 0。",

    // Increasing and decreasing functions, concavity, and connecti > worked example > maths line
    "At <i>x</i> = 3: <i>f'</i>(3) = 0 and <i>f''</i>(3) = 36 &gt; 0 ⇒ <b>(3, −17) is a local minimum</b> <b>[R1]</b>": "在 <i>x</i> = 3：<i>f'</i>(3) = 0 且 <i>f''</i>(3) = 36 &gt; 0 ⇒ <b>(3, −17) 為局部極小值</b> <b>[R1]</b>",

    // Increasing and decreasing functions, concavity, and connecti > worked example > maths line
    "At <i>x</i> = 0: <i>f'</i>(0) = 0, <i>f''</i>(0) = 0, and <i>f''</i>(<i>x</i>) changes sign (+ to −) ⇒ <b>(0, 10) is a stationary point of inflexion</b>": "在 <i>x</i> = 0：<i>f'</i>(0) = 0，<i>f''</i>(0) = 0，且 <i>f''</i>(<i>x</i>) 改變正負號（+ 變為 −）⇒ <b>(0, 10) 為駐拐點</b>",

    // Increasing and decreasing functions, concavity, and connecti > worked example > maths line
    "At <i>x</i> = 2: <i>f</i>(2) = 16 − 32 + 10 = −6, <i>f''</i>(2) = 0, and <i>f''</i>(<i>x</i>) changes sign (− to +) ⇒ <b>(2, −6) is a non-stationary point of inflexion</b> <b>[A1]</b>": "在 <i>x</i> = 2：<i>f</i>(2) = 16 − 32 + 10 = −6，<i>f''</i>(2) = 0，且 <i>f''</i>(<i>x</i>) 改變正負號（− 變為 +）⇒ <b>(2, −6) 為非駐拐點</b> <b>[A1]</b>",

    // Increasing and decreasing functions, concavity, and connecti > worked example > p
    "Local minimum at <span class=\"chem\">(3, -17)</span>; stationary point of inflexion at <span class=\"chem\">(0, 10)</span>; non-stationary point of inflexion at <span class=\"chem\">(2, -6)</span>.": "局部極小值位於 <span class=\"chem\">(3, -17)</span>；駐拐點位於 <span class=\"chem\">(0, 10)</span>；非駐拐點位於 <span class=\"chem\">(2, -6)</span>。",

    // Increasing and decreasing functions, concavity, and connecti > try it > p
    "For the cubic curve <span class=\"chem\">g(x) = x^3 - 6x^2 + 9x - 5</span>, calculate the <span class=\"chem\">y</span>-coordinate of its point of inflexion.": "對於三次曲線 <span class=\"chem\">g(x) = x^3 - 6x^2 + 9x - 5</span>，計算 (calculate) 其拐點的 <span class=\"chem\">y</span> 坐標。",

    // Increasing and decreasing functions, concavity, and connecti > try it > li
    "Differentiate twice: <span class=\"chem\">g'(x) = 3x^2 - 12x + 9</span> and <span class=\"chem\">g''(x) = 6x - 12</span>.": "求導兩次：<span class=\"chem\">g'(x) = 3x^2 - 12x + 9</span> 及 <span class=\"chem\">g''(x) = 6x - 12</span>。",

    // Increasing and decreasing functions, concavity, and connecti > try it > li
    "Set <span class=\"chem\">g''(x) = 0</span> to get <span class=\"chem\">x = 2</span> (where <span class=\"chem\">g''(x)</span> changes sign from negative to positive), then substitute <span class=\"chem\">x = 2</span> into <span class=\"chem\">g(x) = 2^3 - 6(2^2) + 9(2) - 5</span>.": "令 <span class=\"chem\">g''(x) = 0</span> 得 <span class=\"chem\">x = 2</span>（此處 <span class=\"chem\">g''(x)</span> 由負變正），再將 <span class=\"chem\">x = 2</span> 代入 <span class=\"chem\">g(x) = 2^3 - 6(2^2) + 9(2) - 5</span>。",

    // Optimization in geometric and real-world contexts > data-toc attribute
    "Optimization": "優化",

    // Optimization in geometric and real-world contexts > h2
    "Optimization in geometric and real-world contexts": "幾何與實際情境中的優化問題",

    // Optimization in geometric and real-world contexts > p
    "Optimization problems ask for the largest or smallest possible value of a quantity (such as volume, surface area, profit, or travel time) subject to a fixed constraint. Every IB optimization question follows a reliable four-step structure:": "優化問題要求在固定約束條件下求某個量（例如體積、表面積、利潤或行程時間）的最大或最小可能值。每道 IB 優化題都依循可靠的四步結構：",

    // Optimization in geometric and real-world contexts > li
    "<strong>Use the constraint to eliminate the second variable:</strong> Write the constraint equation (for example, fixed volume <span class=\"chem\">V = pi r^2 h = 500</span>), isolate the second variable (<span class=\"chem\">h = 500 / (pi r^2)</span>), and substitute it into the quantity you want to optimize so that your objective function has <strong>only one input variable</strong>.": "<strong>利用約束條件消去第二個變數：</strong>寫出約束方程（例如固定體積 <span class=\"chem\">V = pi r^2 h = 500</span>），分離出第二個變數（<span class=\"chem\">h = 500 / (pi r^2)</span>），再代入你想優化的量中，使目標函數<strong>只含一個自變數</strong>。",

    // Optimization in geometric and real-world contexts > li
    "<strong>Differentiate and set the derivative to zero:</strong> Rewrite fractions with negative exponents first (<span class=\"chem\">r^{-1}</span> or <span class=\"chem\">r^{-2}</span>), differentiate with respect to your variable, and solve <span class=\"chem\">f'(x) = 0</span>.": "<strong>求導並令導數為零：</strong>先把分式改寫為負指數（<span class=\"chem\">r^{-1}</span> 或 <span class=\"chem\">r^{-2}</span>），對你的變數求導，並解 <span class=\"chem\">f'(x) = 0</span>。",

    // Optimization in geometric and real-world contexts > li
    "<strong>Justify that you found a maximum or minimum:</strong> The markscheme nearly always awards a dedicated mark for proving that your stationary point is indeed a maximum (<span class=\"chem\">f''(x) &lt; 0</span>) or a minimum (<span class=\"chem\">f''(x) &gt; 0</span>).": "<strong>證明所求為極大值或極小值：</strong>評分標準幾乎必然會為證明駐點確為極大值（<span class=\"chem\">f''(x) &lt; 0</span>）或極小值（<span class=\"chem\">f''(x) &gt; 0</span>）給予專門分數。",

    // Optimization in geometric and real-world contexts > li
    "<strong>Check domain endpoints and answer the exact question:</strong> If <span class=\"chem\">x</span> is restricted to a closed interval <span class=\"chem\">a &lt;= x &lt;= b</span>, compare <span class=\"chem\">f(x)</span> at the stationary point with the endpoint values <span class=\"chem\">f(a)</span> and <span class=\"chem\">f(b)</span>. Finally, check whether the question asked for the optimal dimension <span class=\"chem\">x</span> or the optimal value <span class=\"chem\">f(x)</span>!": "<strong>檢查定義域端點並準確回答題目所問：</strong>若 <span class=\"chem\">x</span> 限制在閉區間 <span class=\"chem\">a &lt;= x &lt;= b</span> 內，比較駐點處的 <span class=\"chem\">f(x)</span> 與端點值 <span class=\"chem\">f(a)</span> 及 <span class=\"chem\">f(b)</span>。最後核對題目問的是最優尺寸 <span class=\"chem\">x</span> 還是最優值 <span class=\"chem\">f(x)</span>！",

    // Optimization in geometric and real-world contexts > not needed for IB > p
    "<strong>Not needed for IB (Scope boundary):</strong> Multivariable optimization using partial derivatives (<span class=\"chem\">∂f/∂x = 0</span>, <span class=\"chem\">∂f/∂y = 0</span>) or Lagrange multipliers is <strong>not</strong> in the IB Math AA syllabus. Every optimization problem in IB Math AA reduces to a function of a <strong>single variable</strong> after substituting the constraint.": "<strong>IB 不要求的內容（課程範圍界線）：</strong>使用偏導數（<span class=\"chem\">∂f/∂x = 0</span>，<span class=\"chem\">∂f/∂y = 0</span>）的多變數優化或拉格朗日乘數法均<strong>不在</strong> IB Math AA 課程大綱內。IB Math AA 中的每道優化題在代入約束條件後，都會化為<strong>單變數</strong>函數。",

    // Optimization in geometric and real-world contexts > worked example > h3
    "Minimizing the surface area of an open-top rectangular box": "使無蓋長方體盒子的表面積最小化",

    // Optimization in geometric and real-world contexts > worked example > p
    "An open-top rectangular container has a square base of side length <span class=\"chem\">x</span> <span class=\"unit\">cm</span>, height <span class=\"chem\">h</span> <span class=\"unit\">cm</span>, and a fixed volume of <span class=\"chem\">108</span> <span class=\"unit\">cm3</span>.<br> (a) Show that the total external surface area <span class=\"chem\">A</span> <span class=\"unit\">cm2</span> of the container is given by <span class=\"chem\">A(x) = x^2 + 432 / x</span>. <strong>[2 marks]</strong><br> (b) Find the value of <span class=\"chem\">x</span> that minimizes the surface area, justifying that it is a minimum, and state the minimum surface area. <strong>[5 marks]</strong>": "一個無蓋長方體容器具有邊長為 <span class=\"chem\">x</span> <span class=\"unit\">cm</span> 的正方形底面、高度 <span class=\"chem\">h</span> <span class=\"unit\">cm</span>，以及固定的體積 <span class=\"chem\">108</span> <span class=\"unit\">cm3</span>。<br> (a) 證明 (Show that) 容器的外表面積總和 <span class=\"chem\">A</span> <span class=\"unit\">cm2</span> 為 <span class=\"chem\">A(x) = x^2 + 432 / x</span>。<strong>[2 marks]</strong><br> (b) 求 (Find) 使表面積最小的 <span class=\"chem\">x</span> 值、證明其為極小值，並寫出最小表面積。<strong>[5 marks]</strong>",

    // Optimization in geometric and real-world contexts > worked example > data-title attribute
    "Part (a): Express h in terms of x using the volume constraint and substitute into A": "(a) 部：利用體積約束條件以 x 表示 h，並代入 A",

    // Optimization in geometric and real-world contexts > worked example > p
    "An open-top box has 1 square base of area x² and 4 vertical rectangular sides each of area xh. In a 'Show that' question, explicitly show the substitution of h.": "無蓋盒子有 1 個面積為 x² 的正方形底面與 4 個面積各為 xh 的鉛垂長方形側面。在「證明 (Show that)」題目中，必須明確寫出 h 的代入過程。",

    // Optimization in geometric and real-world contexts > worked example > data-title attribute
    "Part (b): Differentiate A(x) = x² + 432x⁻¹ and solve A'(x) = 0": "(b) 部：對 A(x) = x² + 432x⁻¹ 求導並解 A'(x) = 0",

    // Optimization in geometric and real-world contexts > worked example > p
    "Rewrite 432/x as 432x⁻¹ before differentiating, then set A'(x) = 0.": "求導前先把 432/x 改寫為 432x⁻¹，再令 A'(x) = 0。",

    // Optimization in geometric and real-world contexts > worked example > data-title attribute
    "Justify minimum using A''(x) and calculate A(6)": "利用 A''(x) 證明為極小值並計算 A(6)",

    // Optimization in geometric and real-world contexts > worked example > p
    "Show A''(6) &gt; 0 to prove it is a minimum, then substitute x = 6 into A(x).": "證明 A''(6) &gt; 0 以確認為極小值，然後將 x = 6 代入 A(x)。",

    // Optimization in geometric and real-world contexts > worked example > maths line
    "<i>A''</i>(<i>x</i>) = 2 + <span class=\"frac\"><span>864</span><span><i>x</i><sup>3</sup></span></span> ⇒ <i>A''</i>(6) = 2 + 4 = 6 &gt; 0, so <i>x</i> = 6 gives a minimum <b>[R1]</b>": "<i>A''</i>(<i>x</i>) = 2 + <span class=\"frac\"><span>864</span><span><i>x</i><sup>3</sup></span></span> ⇒ <i>A''</i>(6) = 2 + 4 = 6 &gt; 0，故 <i>x</i> = 6 給出極小值 <b>[R1]</b>",

    // Optimization in geometric and real-world contexts > worked example > p
    "<span class=\"chem\">x = 6</span> <span class=\"unit\">cm</span>; minimum surface area <span class=\"chem\">A = 108</span> <span class=\"unit\">cm2</span>.": "<span class=\"chem\">x = 6</span> <span class=\"unit\">cm</span>；最小表面積 <span class=\"chem\">A = 108</span> <span class=\"unit\">cm2</span>。",

    // Optimization in geometric and real-world contexts > try it > p
    "A rectangle has one side along the positive <span class=\"chem\">x</span>-axis, one side along the positive <span class=\"chem\">y</span>-axis, and its opposite vertex <span class=\"chem\">(x, y)</span> on the parabola <span class=\"chem\">y = 24 - 2x^2</span> in the first quadrant (<span class=\"chem\">0 &lt; x &lt; sqrt(12)</span>). Calculate the maximum possible area of the rectangle.": "一個長方形的一條邊沿正 <span class=\"chem\">x</span> 軸、另一條邊沿正 <span class=\"chem\">y</span> 軸，其對頂點 <span class=\"chem\">(x, y)</span> 位於第一象限內的拋物線 <span class=\"chem\">y = 24 - 2x^2</span> 上（<span class=\"chem\">0 &lt; x &lt; sqrt(12)</span>）。計算 (Calculate) 該長方形的最大可能面積。",

    // Optimization in geometric and real-world contexts > try it > li
    "Write the area function <span class=\"chem\">A(x) = x y = x(24 - 2x^2) = 24x - 2x^3</span> and differentiate: <span class=\"chem\">A'(x) = 24 - 6x^2</span>.": "寫出面積函數 <span class=\"chem\">A(x) = x y = x(24 - 2x^2) = 24x - 2x^3</span> 並求導：<span class=\"chem\">A'(x) = 24 - 6x^2</span>。",

    // Optimization in geometric and real-world contexts > try it > li
    "Set <span class=\"chem\">A'(x) = 0</span> with <span class=\"chem\">x &gt; 0</span> to get <span class=\"chem\">x = 2</span>, then evaluate <span class=\"chem\">A(2) = 2(24 - 2(4))</span>.": "在 <span class=\"chem\">x &gt; 0</span> 下令 <span class=\"chem\">A'(x) = 0</span> 得 <span class=\"chem\">x = 2</span>，再計算 <span class=\"chem\">A(2) = 2(24 - 2(4))</span>。",

    // Optimization in geometric and real-world contexts > try it > maths line
    "<i>A'</i>(<i>x</i>) = 24 − 6<i>x</i><sup>2</sup> = 0 ⇒ <i>x</i> = 2 (since <i>x</i> &gt; 0), and <i>A''</i>(2) = −24 &lt; 0": "<i>A'</i>(<i>x</i>) = 24 − 6<i>x</i><sup>2</sup> = 0 ⇒ <i>x</i> = 2（因 <i>x</i> &gt; 0），且 <i>A''</i>(2) = −24 &lt; 0",

    // Quick practice > data-toc attribute
    "Practice": "練習",

    // Quick practice > h2
    "Quick practice": "快速練習",

    // widget string (assets/js/widgets-t5-1.js)
    "vertical": "鉛垂",

    // widget string (assets/js/widgets-t5-1.js)
    "limit h → 0": "極限 h → 0",

    // widget string (assets/js/widgets-t5-1.js)
    "Tangent": "切線",

    // widget string (assets/js/widgets-t5-1.js)
    "Normal": "法線",

    // widget string (assets/js/widgets-t5-1.js)
    "Secant PQ": "割線 PQ",

    // widget string (assets/js/widgets-t5-1.js)
    "Graph of f(x) with tangent, normal and secant lines": "附有切線、法線與割線的 f(x) 圖像",

    // widget string (assets/js/widgets-t5-1.js)
    "Stationary point of inflexion (f' = 0, f'' = 0 & changes sign)": "駐拐點（f' = 0, f'' = 0 且變號）",

    // widget string (assets/js/widgets-t5-1.js)
    "Local minimum (f' = 0, f'' = 0 but f'' ≥ 0 on both sides!)": "局部極小值（f' = 0, f'' = 0 但兩側皆 f'' ≥ 0！）",

    // widget string (assets/js/widgets-t5-1.js)
    "Local maximum (f' = 0, f'' < 0)": "局部極大值（f' = 0, f'' < 0）",

    // widget string (assets/js/widgets-t5-1.js)
    "Local minimum (f' = 0, f'' > 0)": "局部極小值（f' = 0, f'' > 0）",

    // widget string (assets/js/widgets-t5-1.js)
    "Non-stationary point of inflexion (turning point of f', f'' changes sign)": "非駐拐點（f' 的轉向點，f'' 變號）",

    // widget string (assets/js/widgets-t5-1.js)
    "Increasing (f' > 0)": "遞增（f' > 0）",

    // widget string (assets/js/widgets-t5-1.js)
    "Decreasing (f' < 0)": "遞減（f' < 0）",

    // widget string (assets/js/widgets-t5-1.js)
    "concave up (f'' > 0)": "上凹（f'' > 0）",

    // widget string (assets/js/widgets-t5-1.js)
    "concave down (f'' < 0)": "下凹（f'' < 0）",

    // widget string (assets/js/widgets-t5-1.js)
    "Synchronized graphs of f(x), f'(x) and f''(x)": "f(x)、f'(x) 與 f''(x) 的同步圖像",

  }
});
