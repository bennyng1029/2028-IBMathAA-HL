/* t3-2 — zh-Hant translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't3-2', {
  strings: {

    // page title (browser tab)
    "3.2 The unit circle, trig identities and periodic models | Analysis Lab": "3.2 單位圓、三角恒等式與週期模型 | Analysis Lab",

    // The unit circle, trig identities and periodic models > page header > p
    "Topic 3.2 · SL 3.5–3.8 + AHL 3.9–3.11": "課題 3.2 · SL 3.5–3.8 + AHL 3.9–3.11",

    // The unit circle, trig identities and periodic models > page header > h1
    "The unit circle, trig identities and periodic models": "單位圓、三角恒等式與週期模型",

    // The unit circle, trig identities and periodic models > page header > span
    "How does rotating a point around a unit circle turn right-angled triangle ratios into periodic waves that model tides, seasons, and oscillations?": "把一點繞單位圓旋轉，如何將直角三角形的三角比轉化為模擬潮汐、季節與振動的週期波？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "學習清單",

    // What you need to be able to do > h2
    "What you need to be able to do": "你需要掌握的能力",

    // What you need to be able to do > p
    "Tick each skill when you can do it without looking at your notes. Items marked <strong>AHL</strong> are tested on Higher Level papers only.": "當你能在不查閱筆記的情況下完成每項技能時，便可剔選該項。標有 <strong>AHL</strong> 的項目僅於高級程度試卷考核。",

    // What you need to be able to do > checklist > span
    "Define <span class=\"chem\">cos theta</span>, <span class=\"chem\">sin theta</span>, and <span class=\"chem\">tan theta</span> on the unit circle and state exact values for multiples of <span class=\"chem\">0, pi/6, pi/4, pi/3, pi/2</span> across all four quadrants.": "在單位圓上定義 <span class=\"chem\">cos theta</span>、<span class=\"chem\">sin theta</span> 與 <span class=\"chem\">tan theta</span>，並寫出在四個象限中 <span class=\"chem\">0, pi/6, pi/4, pi/3, pi/2</span> 倍數的準確值。",

    // What you need to be able to do > checklist > span
    "Apply <span class=\"chem\">tan theta = sin theta / cos theta</span>, <span class=\"chem\">cos^2 theta + sin^2 theta = 1</span>, and the double-angle identities for <span class=\"chem\">sin 2theta</span> and <span class=\"chem\">cos 2theta</span>.": "應用 <span class=\"chem\">tan theta = sin theta / cos theta</span>、<span class=\"chem\">cos^2 theta + sin^2 theta = 1</span>，以及 <span class=\"chem\">sin 2theta</span> 與 <span class=\"chem\">cos 2theta</span> 的二倍角公式。",

    // What you need to be able to do > checklist > span
    "Sketch and build periodic models <span class=\"chem\">y = a sin(b(x - c)) + d</span> and <span class=\"chem\">y = a cos(b(x - c)) + d</span> from amplitude, period, phase shift, and principal axis.": "根據振幅、週期、相移與主軸描繪並建立週期模型 <span class=\"chem\">y = a sin(b(x - c)) + d</span> 與 <span class=\"chem\">y = a cos(b(x - c)) + d</span>。",

    // What you need to be able to do > checklist > span
    "Solve linear, quadratic, and multiple-angle trigonometric equations analytically and graphically on a finite interval.": "在有限區間內以解析與圖解法解線性、二次及倍角三角方程。",

    // What you need to be able to do > checklist > Additional HL > span
    "Use reciprocal ratios <span class=\"chem\">sec theta, cosec theta, cot theta</span> and Pythagorean identities <span class=\"chem\">1 + tan^2 theta = sec^2 theta</span> and <span class=\"chem\">1 + cot^2 theta = cosec^2 theta</span>.": "運用倒數三角比 <span class=\"chem\">sec theta, cosec theta, cot theta</span> 及平方關係恒等式 <span class=\"chem\">1 + tan^2 theta = sec^2 theta</span> 與 <span class=\"chem\">1 + cot^2 theta = cosec^2 theta</span>。",

    // What you need to be able to do > checklist > Additional HL > span
    "Expand and simplify expressions using compound-angle identities <span class=\"chem\">sin(A +- B), cos(A +- B), tan(A +- B)</span> and <span class=\"chem\">tan 2theta</span>.": "運用複角公式 <span class=\"chem\">sin(A +- B), cos(A +- B), tan(A +- B)</span> 與 <span class=\"chem\">tan 2theta</span> 展開及化簡算式。",

    // What you need to be able to do > checklist > Additional HL > span
    "State the restricted domains and principal ranges of <span class=\"chem\">arcsin x, arccos x, arctan x</span>, sketch their graphs, and simplify compositions like <span class=\"chem\">cos(arcsin x)</span>.": "寫出 <span class=\"chem\">arcsin x, arccos x, arctan x</span> 的受限定義域與主值域、描繪其圖像，並化簡如 <span class=\"chem\">cos(arcsin x)</span> 的複合表達式。",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "題型解碼",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "題型解碼：辨識應採用的技巧",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — Unit circle, identities, periodic models and equations": "題型解碼 — 單位圓、恒等式、週期模型與方程",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "題目中的常見字眼",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "實際含義（公式與列式）",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1（不可用計算機）與 Paper 2（可用 GDC）策略",

    // Question decoder: spotting which technique to use > table > th
    "“Given <span class=\"chem\">sin theta = 3/5</span> and <span class=\"chem\">theta</span> is obtuse, find <span class=\"chem\">cos 2theta</span> and <span class=\"chem\">sin 2theta</span>”": "「已知 <span class=\"chem\">sin theta = 3/5</span> 且 <span class=\"chem\">theta</span> 為鈍角，求 <span class=\"chem\">cos 2theta</span> 與 <span class=\"chem\">sin 2theta</span>」",

    // Question decoder: spotting which technique to use > table > td
    "Draw a <span class=\"mono\">3-4-5</span> right triangle in Quadrant II (<span class=\"chem\">pi/2 &lt; theta &lt; pi</span>) where <span class=\"chem\">cos theta = -4/5</span> (negative!). Then substitute into <span class=\"chem\">cos 2theta = 1 - 2 sin^2 theta</span> and <span class=\"chem\">sin 2theta = 2 sin theta cos theta</span>.": "在第二象限（<span class=\"chem\">pi/2 &lt; theta &lt; pi</span>）畫一個 <span class=\"mono\">3-4-5</span> 直角三角形，其中 <span class=\"chem\">cos theta = -4/5</span>（負數！）。然後代入 <span class=\"chem\">cos 2theta = 1 - 2 sin^2 theta</span> 與 <span class=\"chem\">sin 2theta = 2 sin theta cos theta</span>。",

    // Question decoder: spotting which technique to use > table > td
    "Never try to find <span class=\"chem\">theta</span> in degrees/radians on Paper 1! You only need the fractions <span class=\"chem\">sin theta</span> and <span class=\"chem\">cos theta</span>.": "在 Paper 1 上切勿嘗試求出 <span class=\"chem\">theta</span> 的度數或弧度！你只需要分數 <span class=\"chem\">sin theta</span> 與 <span class=\"chem\">cos theta</span>。",

    // Question decoder: spotting which technique to use > table > th
    "“Solve <span class=\"chem\">cos 2x + 3 cos x + 2 = 0</span>” vs “Solve <span class=\"chem\">cos 2x - sin x = 0</span>”": "「解 <span class=\"chem\">cos 2x + 3 cos x + 2 = 0</span>」與「解 <span class=\"chem\">cos 2x - sin x = 0</span>」",

    // Question decoder: spotting which technique to use > table > td
    "Pick the form of <span class=\"chem\">cos 2x</span> that matches the linear term:<br>• With <span class=\"chem\">cos x</span>: use <span class=\"chem\">2 cos^2 x - 1</span>.<br>• With <span class=\"chem\">sin x</span>: use <span class=\"chem\">1 - 2 sin^2 x</span>.": "選擇配合一次項的 <span class=\"chem\">cos 2x</span> 形式：<br>• 配合 <span class=\"chem\">cos x</span>：用 <span class=\"chem\">2 cos^2 x - 1</span>。<br>• 配合 <span class=\"chem\">sin x</span>：用 <span class=\"chem\">1 - 2 sin^2 x</span>。",

    // Question decoder: spotting which technique to use > table > td
    "Factor the resulting quadratic in <span class=\"chem\">cos x</span> or <span class=\"chem\">sin x</span>. Reject any root outside <span class=\"chem\">[-1, 1]</span>.": "把所得關於 <span class=\"chem\">cos x</span> 或 <span class=\"chem\">sin x</span> 的二次方程因式分解，捨去在 <span class=\"chem\">[-1, 1]</span> 以外的根。",

    // Question decoder: spotting which technique to use > table > th
    "“A Ferris wheel / tide has maximum height <span class=\"chem\">M</span> at <span class=\"chem\">t = t_1</span> and minimum <span class=\"chem\">m</span> at <span class=\"chem\">t = t_2</span>”": "「摩天輪／潮汐在 <span class=\"chem\">t = t_1</span> 時達最高高度 <span class=\"chem\">M</span>，在 <span class=\"chem\">t = t_2</span> 時達最低高度 <span class=\"chem\">m</span>」",

    // Question decoder: spotting which technique to use > table > td
    "• Amplitude <span class=\"chem\">|a| = (M - m)/2</span><br>• Principal axis <span class=\"chem\">d = (M + m)/2</span><br>• Half-period <span class=\"chem\">T/2 = |t_2 - t_1|</span>, so <span class=\"chem\">T = 2|t_2 - t_1|</span> and <span class=\"chem\">b = 2pi / T</span>.": "• 振幅 <span class=\"chem\">|a| = (M - m)/2</span><br>• 主軸 <span class=\"chem\">d = (M + m)/2</span><br>• 半週期 <span class=\"chem\">T/2 = |t_2 - t_1|</span>，故 <span class=\"chem\">T = 2|t_2 - t_1|</span> 且 <span class=\"chem\">b = 2pi / T</span>。",

    // Question decoder: spotting which technique to use > table > td
    "Using <span class=\"chem\">y = a cos(b(t - t_1)) + d</span> with <span class=\"chem\">a &gt; 0</span> automatically places a maximum at <span class=\"chem\">t = t_1</span>!": "使用 <span class=\"chem\">y = a cos(b(t - t_1)) + d</span>（其中 <span class=\"chem\">a &gt; 0</span>）會自動將極大值置於 <span class=\"chem\">t = t_1</span>！",

    // Question decoder: spotting which technique to use > table > th
    "“Solve <span class=\"chem\">sin(2x) = 1/2</span> for <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>”": "「在 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span> 內解 <span class=\"chem\">sin(2x) = 1/2</span>」",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Expand the interval first!</strong> Since <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>, let <span class=\"chem\">u = 2x</span> so <span class=\"chem\">0 &lt;= u &lt;= 4pi</span>. Find all 4 values of <span class=\"chem\">u</span> in two full revolutions before dividing by 2.": "<strong>先擴展區間！</strong>由於 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>，設 <span class=\"chem\">u = 2x</span> 使 <span class=\"chem\">0 &lt;= u &lt;= 4pi</span>。在兩圈內找出全部 4 個 <span class=\"chem\">u</span> 值，然後再除以 2。",

    // Question decoder: spotting which technique to use > table > td
    "Dividing by 2 before listing coterminal angles loses half the solutions!": "若在列出同界角前先除以 2，會遺漏一半的解！",

    // Question decoder: spotting which technique to use > table > Additional HL > th
    "<strong>[AHL]</strong> “Simplify <span class=\"chem\">cos(arcsin x)</span> or <span class=\"chem\">tan(2 arctan(1/3))</span>”": "<strong>[AHL]</strong>「化簡 <span class=\"chem\">cos(arcsin x)</span> 或 <span class=\"chem\">tan(2 arctan(1/3))</span>」",

    // Question decoder: spotting which technique to use > table > Additional HL > td
    "Let <span class=\"chem\">theta = arcsin x</span>, so <span class=\"chem\">sin theta = x/1</span> on a right triangle with adjacent side <span class=\"chem\">sqrt(1 - x^2)</span>. For <span class=\"chem\">tan(2A)</span>, use <span class=\"chem\">(2 tan A)/(1 - tan^2 A)</span>.": "設 <span class=\"chem\">theta = arcsin x</span>，則在直角三角形上 <span class=\"chem\">sin theta = x/1</span>，鄰邊為 <span class=\"chem\">sqrt(1 - x^2)</span>。對於 <span class=\"chem\">tan(2A)</span>，使用 <span class=\"chem\">(2 tan A)/(1 - tan^2 A)</span>。",

    // Question decoder: spotting which technique to use > table > Additional HL > td
    "Always check that the angle lies in the principal range of the inverse trig function.": "務必檢查該角是否位於反三角函數的主值域內。",

    // The unit circle, exact ratios and fundamental identities > data-toc attribute
    "Unit circle & identities": "單位圓與恒等式",

    // The unit circle, exact ratios and fundamental identities > h2
    "The unit circle, exact ratios and fundamental identities": "單位圓、準確三角比與基本恒等式",

    // The unit circle, exact ratios and fundamental identities > p
    "The <dfn data-def=\"The circle of radius 1 centred at the origin (0, 0), with equation x² + y² = 1.\">unit circle</dfn> has centre <span class=\"chem\">(0, 0)</span> and radius <span class=\"mono\">1</span>. If a ray from the origin makes an angle <span class=\"chem\">theta</span> counter-clockwise from the positive <span class=\"chem\">x</span>-axis and meets the unit circle at <span class=\"chem\">P(x, y)</span>, then by definition:": "<dfn data-def=\"圓心在原點 (0, 0)、半徑為 1 的圓，方程為 x² + y² = 1。\">單位圓 <span class=\"en-term\">(unit circle)</span></dfn>的圓心為 <span class=\"chem\">(0, 0)</span>，半徑為 <span class=\"mono\">1</span>。若一條從原點出發的射線與正 <span class=\"chem\">x</span> 軸按逆時針方向成角 <span class=\"chem\">theta</span>，並與單位圓相交於 <span class=\"chem\">P(x, y)</span>，則按定義：",

    // The unit circle, exact ratios and fundamental identities > data-def attribute
    "The circle of radius 1 centred at the origin (0, 0), with equation x² + y² = 1.": "圓心在原點 (0, 0)、半徑為 1 的圓，方程為 x² + y² = 1。",

    // The unit circle, exact ratios and fundamental identities > equation > maths line
    "<i>x</i> = cos <i>θ</i>, &nbsp;&nbsp; <i>y</i> = sin <i>θ</i>, &nbsp;&nbsp; tan <i>θ</i> = <span class=\"frac\"><span>sin <i>θ</i></span><span>cos <i>θ</i></span></span> = <span class=\"frac\"><span><i>y</i></span><span><i>x</i></span></span> &nbsp; (gradient of <i>OP</i>)": "<i>x</i> = cos <i>θ</i>, &nbsp;&nbsp; <i>y</i> = sin <i>θ</i>, &nbsp;&nbsp; tan <i>θ</i> = <span class=\"frac\"><span>sin <i>θ</i></span><span>cos <i>θ</i></span></span> = <span class=\"frac\"><span><i>y</i></span><span><i>x</i></span></span> &nbsp;（<i>OP</i> 的斜率）",

    // The unit circle, exact ratios and fundamental identities > equation > dt
    "cos²θ + sin²θ = 1": "cos²θ + sin²θ = 1",

    // The unit circle, exact ratios and fundamental identities > equation > dd
    "Pythagoras' theorem <span class=\"chem\">x^2 + y^2 = 1</span> on the unit circle": "單位圓上的畢氏定理 <span class=\"chem\">x^2 + y^2 = 1</span>",

    // The unit circle, exact ratios and fundamental identities > equation > dt
    "sin 2θ = 2 sin θ cos θ": "sin 2θ = 2 sin θ cos θ",

    // The unit circle, exact ratios and fundamental identities > equation > dd
    "Double-angle identity for sine": "正弦的二倍角公式",

    // The unit circle, exact ratios and fundamental identities > equation > dt
    "cos 2θ": "cos 2θ",

    // The unit circle, exact ratios and fundamental identities > equation > dd
    "<span class=\"chem\">cos^2 theta - sin^2 theta = 2 cos^2 theta - 1 = 1 - 2 sin^2 theta</span>": "<span class=\"chem\">cos^2 theta - sin^2 theta = 2 cos^2 theta - 1 = 1 - 2 sin^2 theta</span>",

    // The unit circle, exact ratios and fundamental identities > h3
    "Exact trigonometric values (Paper 1 must-know table)": "準確三角比數值（Paper 1 必背表）",

    // The unit circle, exact ratios and fundamental identities > p
    "You are not given exact values in the Formula Booklet. An easy memory trick for the first quadrant is the <strong>square-root-over-2 ladder</strong>: for <span class=\"chem\">theta = 0, pi/6, pi/4, pi/3, pi/2</span>, <span class=\"chem\">sin theta</span> is <span class=\"chem\">sqrt(0)/2, sqrt(1)/2, sqrt(2)/2, sqrt(3)/2, sqrt(4)/2</span>, and <span class=\"chem\">cos theta</span> counts backwards!": "公式手冊並不提供準確三角比數值。第一象限的一個簡單記憶法是<strong>開方除以 2 階梯</strong>：對於 <span class=\"chem\">theta = 0, pi/6, pi/4, pi/3, pi/2</span>，<span class=\"chem\">sin theta</span> 依次為 <span class=\"chem\">sqrt(0)/2, sqrt(1)/2, sqrt(2)/2, sqrt(3)/2, sqrt(4)/2</span>，而 <span class=\"chem\">cos theta</span> 則倒數排列！",

    // The unit circle, exact ratios and fundamental identities > table > caption
    "Exact values in Quadrant I and sign rules across Quadrants I–IV": "第一象限的準確值及第 I–IV 象限的正負號規則",

    // The unit circle, exact ratios and fundamental identities > table > th
    "Angle (deg)": "角度（度）",

    // The unit circle, exact ratios and fundamental identities > table > th
    "Angle (rad)": "角度（弧度）",

    // The unit circle, exact ratios and fundamental identities > table > th
    "<span class=\"chem\">sin theta</span>": "<span class=\"chem\">sin theta</span>",

    // The unit circle, exact ratios and fundamental identities > table > th
    "<span class=\"chem\">cos theta</span>": "<span class=\"chem\">cos theta</span>",

    // The unit circle, exact ratios and fundamental identities > table > th
    "<span class=\"chem\">tan theta = sin/cos</span>": "<span class=\"chem\">tan theta = sin/cos</span>",

    // The unit circle, exact ratios and fundamental identities > table > td
    "<span class=\"chem\">pi / 6</span>": "<span class=\"chem\">pi / 6</span>",

    // The unit circle, exact ratios and fundamental identities > table > td
    "<span class=\"chem\">sqrt(3) / 2</span>": "<span class=\"chem\">sqrt(3) / 2</span>",

    // The unit circle, exact ratios and fundamental identities > table > td
    "<span class=\"chem\">1 / sqrt(3) = sqrt(3) / 3</span>": "<span class=\"chem\">1 / sqrt(3) = sqrt(3) / 3</span>",

    // The unit circle, exact ratios and fundamental identities > table > td
    "<span class=\"chem\">pi / 4</span>": "<span class=\"chem\">pi / 4</span>",

    // The unit circle, exact ratios and fundamental identities > table > td
    "<span class=\"chem\">sqrt(2) / 2</span>": "<span class=\"chem\">sqrt(2) / 2</span>",

    // The unit circle, exact ratios and fundamental identities > table > td
    "<span class=\"chem\">pi / 3</span>": "<span class=\"chem\">pi / 3</span>",

    // The unit circle, exact ratios and fundamental identities > table > td
    "<span class=\"chem\">sqrt(3)</span>": "<span class=\"chem\">sqrt(3)</span>",

    // The unit circle, exact ratios and fundamental identities > table > td
    "<span class=\"chem\">pi / 2</span>": "<span class=\"chem\">pi / 2</span>",

    // The unit circle, exact ratios and fundamental identities > table > td
    "undefined": "無定義",

    // The unit circle, exact ratios and fundamental identities > widget > data-title attribute
    "Interactive Unit Circle & Exact Radian Explorer": "互動單位圓與準確弧度探索器",

    // The unit circle, exact ratios and fundamental identities > widget > figcaption
    "Adjust the angle <i>θ</i> or click one of the special radian angles. Observe how the horizontal coordinate is cos <i>θ</i>, the vertical coordinate is sin <i>θ</i>, and the reference angle α determines the magnitude while the quadrant determines the sign (<strong>CAST / ASTC</strong>).": "調校角度 <i>θ</i> 或點擊其中一個特殊弧度角。觀察水平坐標為 cos <i>θ</i>、垂直坐標為 sin <i>θ</i>，參考角 α 決定大小而象限決定正負號（<strong>CAST / ASTC</strong>）。",

    // The unit circle, exact ratios and fundamental identities > worked example > data-kicker attribute
    "Worked example 1 (SL 3.6 — Paper 1 No-GDC)": "例題 1（SL 3.6 — Paper 1 不可用 GDC）",

    // The unit circle, exact ratios and fundamental identities > worked example > h3
    "Using quadrant signs and double-angle identities without finding θ": "在不求 θ 的情況下運用象限正負號與二倍角公式",

    // The unit circle, exact ratios and fundamental identities > worked example > p
    "Given that <span class=\"chem\">sin theta = -3/5</span> and <span class=\"chem\">pi &lt; theta &lt; 3pi/2</span> (Quadrant III), find the exact values of:<br> (a) <span class=\"chem\">cos theta</span> <strong>[2 marks]</strong> &nbsp;&nbsp; (b) <span class=\"chem\">sin 2theta</span> <strong>[2 marks]</strong> &nbsp;&nbsp; (c) <span class=\"chem\">cos 2theta</span> <strong>[2 marks]</strong>": "已知 <span class=\"chem\">sin theta = -3/5</span> 且 <span class=\"chem\">pi &lt; theta &lt; 3pi/2</span>（第三象限），求 (find) 以下各式的準確值：<br> (a) <span class=\"chem\">cos theta</span> <strong>[2 marks]</strong> &nbsp;&nbsp; (b) <span class=\"chem\">sin 2theta</span> <strong>[2 marks]</strong> &nbsp;&nbsp; (c) <span class=\"chem\">cos 2theta</span> <strong>[2 marks]</strong>",

    // The unit circle, exact ratios and fundamental identities > worked example > data-title attribute
    "Use cos²θ + sin²θ = 1 and choose the negative root for Quadrant III": "運用 cos²θ + sin²θ = 1 並為第三象限選取負平方根",

    // The unit circle, exact ratios and fundamental identities > worked example > p
    "In Quadrant III (π &lt; θ &lt; 3π/2), both x = cos θ and y = sin θ are negative.": "在第三象限（π &lt; θ &lt; 3π/2）中，x = cos θ 與 y = sin θ 皆為負數。",

    // The unit circle, exact ratios and fundamental identities > worked example > data-title attribute
    "Substitute into sin 2θ = 2 sin θ cos θ": "代入 sin 2θ = 2 sin θ cos θ",

    // The unit circle, exact ratios and fundamental identities > worked example > p
    "Since both sin θ and cos θ are negative, their product is positive (2θ lies in Quadrant I/II).": "由於 sin θ 與 cos θ 皆為負數，其積為正數（2θ 位於第一／二象限）。",

    // The unit circle, exact ratios and fundamental identities > worked example > data-title attribute
    "Substitute into cos 2θ = 1 − 2 sin²θ": "代入 cos 2θ = 1 − 2 sin²θ",

    // The unit circle, exact ratios and fundamental identities > worked example > p
    "Using 1 − 2 sin²θ uses the given value of sin θ directly and avoids carrying any slip from part (a).": "使用 1 − 2 sin²θ 可直接代入題目給出的 sin θ 值，避免把 (a) 部的任何誤差帶入。",

    // The unit circle, exact ratios and fundamental identities > try it > p
    "<strong>[Paper 1 — No GDC]</strong> Evaluate the exact value of <span class=\"chem\">cos(4*pi/3)</span>.": "<strong>[Paper 1 — 不可用 GDC]</strong> 計算 (Evaluate) <span class=\"chem\">cos(4*pi/3)</span> 的準確值。",

    // The unit circle, exact ratios and fundamental identities > try it > li
    "<span class=\"chem\">4*pi/3 = pi + pi/3</span> lies in Quadrant III, with acute reference angle <span class=\"chem\">alpha = pi/3</span> (<span class=\"mono\">60°</span>).": "<span class=\"chem\">4*pi/3 = pi + pi/3</span> 位於第三象限，銳角參考角為 <span class=\"chem\">alpha = pi/3</span>（<span class=\"mono\">60°</span>）。",

    // The unit circle, exact ratios and fundamental identities > try it > li
    "In Quadrant III, cosine is negative, so <span class=\"chem\">cos(4*pi/3) = -cos(pi/3)</span>.": "在第三象限中餘弦為負，因此 <span class=\"chem\">cos(4*pi/3) = -cos(pi/3)</span>。",

    // Sinusoidal periodic models and solving trigonometric equatio > data-toc attribute
    "Periodic models & equations": "週期模型與方程",

    // Sinusoidal periodic models and solving trigonometric equatio > h2
    "Sinusoidal periodic models and solving trigonometric equations": "正弦週期模型與解三角方程",

    // Sinusoidal periodic models and solving trigonometric equatio > p
    "Real-world phenomena that repeat in regular cycles—ocean tides, hours of daylight, alternating current, or the height of a rider on a Ferris wheel—are modelled by transformed sine or cosine functions:": "呈規律週期重複的現實現象——例如海潮、日照時數、交流電或摩天輪乘客的高度——皆可用變換後的正弦或餘弦函數模擬：",

    // Sinusoidal periodic models and solving trigonometric equatio > equation > maths line
    "<i>f</i>(<i>t</i>) = <i>a</i> sin(<i>b</i>(<i>t</i> − <i>c</i>)) + <i>d</i> &nbsp;&nbsp; or &nbsp;&nbsp; <i>f</i>(<i>t</i>) = <i>a</i> cos(<i>b</i>(<i>t</i> − <i>c</i>)) + <i>d</i>": "<i>f</i>(<i>t</i>) = <i>a</i> sin(<i>b</i>(<i>t</i> − <i>c</i>)) + <i>d</i> &nbsp;&nbsp; 或 &nbsp;&nbsp; <i>f</i>(<i>t</i>) = <i>a</i> cos(<i>b</i>(<i>t</i> − <i>c</i>)) + <i>d</i>",

    // Sinusoidal periodic models and solving trigonometric equatio > equation > dd
    "amplitude = <span class=\"chem\">(y_{max} - y_{min}) / 2</span> (vertical distance from mean line to peak)": "振幅 = <span class=\"chem\">(y_{max} - y_{min}) / 2</span>（由主軸至波峰的垂直距離）",

    // Sinusoidal periodic models and solving trigonometric equatio > equation > dd
    "vertical shift (principal axis <span class=\"chem\">y = d</span>) = <span class=\"chem\">(y_{max} + y_{min}) / 2</span>": "鉛垂平移（主軸 <span class=\"chem\">y = d</span>）= <span class=\"chem\">(y_{max} + y_{min}) / 2</span>",

    // Sinusoidal periodic models and solving trigonometric equatio > equation > dd
    "angular frequency: Period <span class=\"chem\">T = 2*pi / b</span> (in radians) so <span class=\"chem\">b = 2*pi / T</span>": "角頻率：週期 <span class=\"chem\">T = 2*pi / b</span>（以弧度表示），故 <span class=\"chem\">b = 2*pi / T</span>",

    // Sinusoidal periodic models and solving trigonometric equatio > equation > dd
    "horizontal phase shift: for <span class=\"chem\">+a cos(b(t - c)) + d</span>, <span class=\"chem\">c</span> is the time of a maximum; for <span class=\"chem\">+a sin(b(t - c)) + d</span>, <span class=\"chem\">c</span> is a rising crossing of <span class=\"chem\">y = d</span>": "水平相移：對於 <span class=\"chem\">+a cos(b(t - c)) + d</span>，<span class=\"chem\">c</span> 是出現極大值的時間；對於 <span class=\"chem\">+a sin(b(t - c)) + d</span>，<span class=\"chem\">c</span> 是向上穿過 <span class=\"chem\">y = d</span> 的時間",

    // Sinusoidal periodic models and solving trigonometric equatio > widget > data-title attribute
    "Sinusoidal Tide / Ferris Wheel Model Builder": "正弦潮汐／摩天輪模型建構器",

    // Sinusoidal periodic models and solving trigonometric equatio > widget > figcaption
    "Adjust amplitude <i>a</i>, frequency <i>b</i>, phase shift <i>c</i>, and principal axis <i>d</i>. Notice how the wave oscillates symmetrically between <i>y</i><sub>max</sub> = <i>d</i> + |<i>a</i>| and <i>y</i><sub>min</sub> = <i>d</i> − |<i>a</i>| with period <i>T</i> = 2π / <i>b</i>.": "調校振幅 <i>a</i>、頻率 <i>b</i>、相移 <i>c</i> 與主軸 <i>d</i>。留意波形如何在 <i>y</i><sub>max</sub> = <i>d</i> + |<i>a</i>| 與 <i>y</i><sub>min</sub> = <i>d</i> − |<i>a</i>| 之間對稱振盪，週期為 <i>T</i> = 2π / <i>b</i>。",

    // Sinusoidal periodic models and solving trigonometric equatio > h3
    "The graph of <span class=\"chem\">y = tan x</span>": "<span class=\"chem\">y = tan x</span> 的圖像",

    // Sinusoidal periodic models and solving trigonometric equatio > p
    "The tangent graph is <strong>not</strong> a sinusoid. Because <span class=\"chem\">tan x = sin x / cos x</span>, it has <strong>vertical asymptotes</strong> wherever <span class=\"chem\">cos x = 0</span>, that is at <span class=\"chem\">x = pi/2 + k*pi</span> (<span class=\"chem\">k \\in \\mathbb{Z}</span>). It has <strong>no amplitude</strong>, passes through <span class=\"chem\">(0, 0)</span> and <span class=\"chem\">(pi/4, 1)</span>, increases on every branch, and repeats with <strong>period <span class=\"chem\">pi</span></strong>, not <span class=\"chem\">2*pi</span>.": "正切圖像<strong>不是</strong>正弦型曲線。由於 <span class=\"chem\">tan x = sin x / cos x</span>，凡 <span class=\"chem\">cos x = 0</span> 之處均有<strong>垂直漸近線</strong>，即 <span class=\"chem\">x = pi/2 + k*pi</span>（<span class=\"chem\">k \\in \\mathbb{Z}</span>）。它<strong>沒有振幅</strong>，通過 <span class=\"chem\">(0, 0)</span> 及 <span class=\"chem\">(pi/4, 1)</span>，在每一支上都遞增，並以<strong>週期 <span class=\"chem\">pi</span></strong> 重複，而不是 <span class=\"chem\">2*pi</span>。",

    // Sinusoidal periodic models and solving trigonometric equatio > common mistake > p
    "<strong>Period of a stretched tangent:</strong> <span class=\"chem\">y = tan(bx)</span> has period <span class=\"chem\">pi / b</span>, so its asymptotes are <span class=\"chem\">pi / b</span> apart. When you solve <span class=\"chem\">tan(bx) = k</span>, consecutive solutions are also <span class=\"chem\">pi / b</span> apart: add multiples of <span class=\"chem\">pi</span> to the angle <span class=\"chem\">bx</span>, not multiples of <span class=\"chem\">2*pi</span>.": "<strong>伸縮後正切函數的週期：</strong><span class=\"chem\">y = tan(bx)</span> 的週期是 <span class=\"chem\">pi / b</span>，所以相鄰漸近線相距 <span class=\"chem\">pi / b</span>。解 <span class=\"chem\">tan(bx) = k</span> 時，相鄰的解亦相距 <span class=\"chem\">pi / b</span>：應在角 <span class=\"chem\">bx</span> 上加 <span class=\"chem\">pi</span> 的倍數，而不是 <span class=\"chem\">2*pi</span> 的倍數。",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > data-kicker attribute
    "Worked example 2 (SL 3.8 — Multiple-Angle & Quadratic Trig Equations)": "例題 2（SL 3.8 — 倍角與二次三角方程）",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > h3
    "Solving a quadratic trigonometric equation via double-angle substitution": "透過二倍角代換解二次三角方程",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > p
    "<strong>[Paper 1 — No GDC]</strong> Solve <span class=\"chem\">cos 2x + 3 sin x - 2 = 0</span> for <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>. <strong>[6 marks]</strong>": "<strong>[Paper 1 — 不可用 GDC]</strong> 在 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span> 內解 (Solve) <span class=\"chem\">cos 2x + 3 sin x - 2 = 0</span>。<strong>[6 marks]</strong>",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > data-title attribute
    "Replace cos 2x with 1 − 2 sin²x to create a quadratic in sin x": "以 1 − 2 sin²x 取代 cos 2x，構成關於 sin x 的二次方程",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > p
    "Because the linear term is +3 sin x, we choose the version of cos 2x that contains only sin²x.": "由於一次項為 +3 sin x，我們選用只含 sin²x 的 cos 2x 形式。",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > data-title attribute
    "Factor the quadratic in sin x": "把關於 sin x 的二次式因式分解",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > p
    "Treat u = sin x so 2u² − 3u + 1 = (2u − 1)(u − 1) = 0.": "令 u = sin x，則 2u² − 3u + 1 = (2u − 1)(u − 1) = 0。",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > maths line
    "(2 sin <i>x</i> − 1)(sin <i>x</i> − 1) = 0 ⇒ sin <i>x</i> = <span class=\"frac\"><span>1</span><span>2</span></span> &nbsp; or &nbsp; sin <i>x</i> = 1 <b>[M1 A1]</b>": "(2 sin <i>x</i> − 1)(sin <i>x</i> − 1) = 0 ⇒ sin <i>x</i> = <span class=\"frac\"><span>1</span><span>2</span></span> &nbsp; 或 &nbsp; sin <i>x</i> = 1 <b>[M1 A1]</b>",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > data-title attribute
    "Find all angles in [0, 2π] for each branch": "為每個分支找出 [0, 2π] 內的所有角",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > p
    "sin x = 1/2 is positive in Quadrants I and II (reference angle π/6); sin x = 1 occurs at the top of the unit circle.": "sin x = 1/2 在第一與第二象限為正（參考角 π/6）；sin x = 1 出現在單位圓的頂點。",

    // Sinusoidal periodic models and solving trigonometric equatio > common mistake > p
    "<strong>Never divide a trigonometric equation by <span class=\"chem\">sin x</span> or <span class=\"chem\">cos x</span> if it could equal zero!</strong> To solve <span class=\"chem\">sin 2x = cos x</span>, write <span class=\"chem\">2 sin x cos x - cos x = 0</span> and factor as <span class=\"chem\">cos x (2 sin x - 1) = 0</span>. Dividing by <span class=\"chem\">cos x</span> throws away the roots <span class=\"chem\">cos x = 0</span> (<span class=\"chem\">x = pi/2, 3pi/2</span>)!": "<strong>當 <span class=\"chem\">sin x</span> 或 <span class=\"chem\">cos x</span> 可能為零時，切勿用它去除三角方程！</strong>解 <span class=\"chem\">sin 2x = cos x</span> 時，寫成 <span class=\"chem\">2 sin x cos x - cos x = 0</span> 並因式分解為 <span class=\"chem\">cos x (2 sin x - 1) = 0</span>。若除以 <span class=\"chem\">cos x</span>，便會丟失 <span class=\"chem\">cos x = 0</span>（<span class=\"chem\">x = pi/2, 3pi/2</span>）的根！",

    // Sinusoidal periodic models and solving trigonometric equatio > try it > p
    "The depth of water in a harbour is modelled by <span class=\"chem\">D(t) = 4.5 cos((pi/6)t) + 9.5</span> metres, where <span class=\"chem\">t</span> is the time in hours after midnight. What is the maximum depth of water in the harbour?": "海港的水深以 <span class=\"chem\">D(t) = 4.5 cos((pi/6)t) + 9.5</span> 米模擬，其中 <span class=\"chem\">t</span> 為午夜後的時間（小時）。海港的最大水深是多少？",

    // Sinusoidal periodic models and solving trigonometric equatio > try it > li
    "Since the maximum value of <span class=\"chem\">cos((pi/6)t)</span> is <span class=\"mono\">1</span>, the maximum value of <span class=\"chem\">a cos(bt) + d</span> is <span class=\"chem\">|a| + d</span>.": "由於 <span class=\"chem\">cos((pi/6)t)</span> 的最大值為 <span class=\"mono\">1</span>，<span class=\"chem\">a cos(bt) + d</span> 的最大值為 <span class=\"chem\">|a| + d</span>。",

    // Sinusoidal periodic models and solving trigonometric equatio > try it > li
    "Add <span class=\"chem\">4.5 + 9.5</span>.": "計算 <span class=\"chem\">4.5 + 9.5</span>。",

    // Reciprocal ratios, compound-angle identities and inverse tri > Additional HL > data-toc attribute
    "Reciprocal, compound & inverse trig": "倒數、複角與反三角函數",

    // Reciprocal ratios, compound-angle identities and inverse tri > Additional HL > h2
    "Reciprocal ratios, compound-angle identities and inverse trig functions": "倒數三角比、複角公式與反三角函數",

    // Reciprocal ratios, compound-angle identities and inverse tri > Additional HL > p
    "At Higher Level, we introduce the three reciprocal trigonometric functions—<strong>secant</strong>, <strong>cosecant</strong>, and <strong>cotangent</strong>—along with compound-angle formulas for <span class=\"chem\">A +- B</span> and the inverse trigonometric functions <span class=\"chem\">arcsin, arccos, arctan</span>.": "在高級程度 (HL) 中，我們引入三個倒數三角函數——<strong>正割 (secant)</strong>、<strong>餘割 (cosecant)</strong> 與<strong>餘切 (cotangent)</strong>——以及 <span class=\"chem\">A +- B</span> 的複角公式和反三角函數 <span class=\"chem\">arcsin, arccos, arctan</span>。",

    // Reciprocal ratios, compound-angle identities and inverse tri > equation > Additional HL > dt
    "sin(A ± B)": "sin(A ± B)",

    // Reciprocal ratios, compound-angle identities and inverse tri > equation > Additional HL > dd
    "<span class=\"chem\">sin A cos B +- cos A sin B</span> &nbsp;(signs match)": "<span class=\"chem\">sin A cos B +- cos A sin B</span> &nbsp;（正負號相同）",

    // Reciprocal ratios, compound-angle identities and inverse tri > equation > Additional HL > dt
    "cos(A ± B)": "cos(A ± B)",

    // Reciprocal ratios, compound-angle identities and inverse tri > equation > Additional HL > dd
    "<span class=\"chem\">cos A cos B -+ sin A sin B</span> &nbsp;(signs flip!)": "<span class=\"chem\">cos A cos B -+ sin A sin B</span> &nbsp;（正負號相反！）",

    // Reciprocal ratios, compound-angle identities and inverse tri > equation > Additional HL > dt
    "tan(A ± B)": "tan(A ± B)",

    // Reciprocal ratios, compound-angle identities and inverse tri > equation > Additional HL > dd
    "<span class=\"chem\">(tan A +- tan B) / (1 -+ tan A tan B)</span>, and <span class=\"chem\">tan 2theta = (2 tan theta) / (1 - tan^2 theta)</span>": "<span class=\"chem\">(tan A +- tan B) / (1 -+ tan A tan B)</span>，以及 <span class=\"chem\">tan 2theta = (2 tan theta) / (1 - tan^2 theta)</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > Additional HL > h3
    "Principal domains and ranges of inverse trigonometric functions (AHL 3.9)": "反三角函數的受限定義域與主值域（AHL 3.9）",

    // Reciprocal ratios, compound-angle identities and inverse tri > Additional HL > p
    "Because <span class=\"chem\">sin x, cos x, tan x</span> are periodic (many-to-one), we must restrict their domains to a single monotonic branch before they can have an inverse function. Memorize this table—especially what happens when you plug a <strong>negative input</strong> into <span class=\"chem\">arcsin(-x)</span> versus <span class=\"chem\">arccos(-x)</span>!": "由於 <span class=\"chem\">sin x, cos x, tan x</span> 是週期函數（多對一），我們必須把其定義域限制在單一單調分支上，它們才會有反函數。熟記下表——尤其是把<strong>負數輸入</strong>代入 <span class=\"chem\">arcsin(-x)</span> 與 <span class=\"chem\">arccos(-x)</span> 時的分別！",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > caption
    "Principal domains, ranges and negative-input symmetry of inverse trig functions": "反三角函數的定義域、主值域與負輸入對稱性",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "Function": "函數",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "Domain (input <span class=\"chem\">x</span>)": "定義域（輸入 <span class=\"chem\">x</span>）",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "Principal range (output angle <span class=\"chem\">y</span>)": "主值域（輸出角 <span class=\"chem\">y</span>）",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "Quadrants covered": "涵蓋象限",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "Negative input rule": "負輸入規則",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "<span class=\"chem\">y = arcsin x</span>": "<span class=\"chem\">y = arcsin x</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">[-pi/2, pi/2]</span>": "<span class=\"chem\">[-pi/2, pi/2]</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Quadrants IV and I": "第 IV 及第 I 象限",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Odd: <span class=\"chem\">arcsin(-x) = -arcsin(x)</span>": "奇函數：<span class=\"chem\">arcsin(-x) = -arcsin(x)</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "<span class=\"chem\">y = arccos x</span>": "<span class=\"chem\">y = arccos x</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">[0, pi]</span>": "<span class=\"chem\">[0, pi]</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Quadrants I and II": "第 I 及第 II 象限",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">arccos(-x) = pi - arccos(x)</span>": "<span class=\"chem\">arccos(-x) = pi - arccos(x)</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "<span class=\"chem\">y = arctan x</span>": "<span class=\"chem\">y = arctan x</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">x in R</span> (<span class=\"chem\">(-infty, infty)</span>)": "<span class=\"chem\">x in R</span>（<span class=\"chem\">(-infty, infty)</span>）",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">(-pi/2, pi/2)</span>": "<span class=\"chem\">(-pi/2, pi/2)</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Quadrants IV and I (horizontal asymptotes <span class=\"chem\">y = +-pi/2</span>)": "第 IV 及第 I 象限（水平漸近線 <span class=\"chem\">y = +-pi/2</span>）",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Odd: <span class=\"chem\">arctan(-x) = -arctan(x)</span>": "奇函數：<span class=\"chem\">arctan(-x) = -arctan(x)</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > Additional HL > p
    "Each inverse graph is the reflection of the restricted branch in the line <span class=\"chem\">y = x</span>. The graph of <span class=\"chem\">y = arcsin x</span> rises from <span class=\"chem\">(-1, -pi/2)</span> through the origin to <span class=\"chem\">(1, pi/2)</span>. The graph of <span class=\"chem\">y = arccos x</span> falls from <span class=\"chem\">(-1, pi)</span> through <span class=\"chem\">(0, pi/2)</span> to <span class=\"chem\">(1, 0)</span>. The graph of <span class=\"chem\">y = arctan x</span> rises through the origin, with horizontal asymptotes <span class=\"chem\">y = -pi/2</span> and <span class=\"chem\">y = pi/2</span>.": "每個反函數的圖像都是受限分支沿直線 <span class=\"chem\">y = x</span> 反射所得。<span class=\"chem\">y = arcsin x</span> 的圖像由 <span class=\"chem\">(-1, -pi/2)</span> 經原點上升至 <span class=\"chem\">(1, pi/2)</span>。<span class=\"chem\">y = arccos x</span> 的圖像由 <span class=\"chem\">(-1, pi)</span> 經 <span class=\"chem\">(0, pi/2)</span> 下降至 <span class=\"chem\">(1, 0)</span>。<span class=\"chem\">y = arctan x</span> 的圖像經原點上升，水平漸近線為 <span class=\"chem\">y = -pi/2</span> 及 <span class=\"chem\">y = pi/2</span>。",

    // Reciprocal ratios, compound-angle identities and inverse tri > key idea > Additional HL > p
    "<strong>Complementary identity:</strong> For every <span class=\"chem\">x in [-1, 1]</span>, <span class=\"chem\">arcsin x + arccos x = pi/2</span>, and <span class=\"chem\">cos(arcsin x) = sin(arccos x) = sqrt(1 - x^2)</span>.": "<strong>餘角恒等式：</strong>對所有 <span class=\"chem\">x in [-1, 1]</span>，<span class=\"chem\">arcsin x + arccos x = pi/2</span>，且 <span class=\"chem\">cos(arcsin x) = sin(arccos x) = sqrt(1 - x^2)</span>。",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > data-kicker attribute
    "Worked example 3 (AHL 3.9–3.10)": "例題 3（AHL 3.9–3.10）",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > h3
    "Proving an inverse tangent sum using the compound-angle formula": "利用複角公式證明反正切之和",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > p
    "<strong>[Paper 1 — No GDC]</strong> Without using a calculator, show that <span class=\"chem\">arctan(1/2) + arctan(1/3) = pi/4</span>. <strong>[4 marks]</strong>": "<strong>[Paper 1 — 不可用 GDC]</strong> 在不使用計算機的情況下，證明 (show that) <span class=\"chem\">arctan(1/2) + arctan(1/3) = pi/4</span>。<strong>[4 marks]</strong>",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > data-title attribute
    "Label the two acute angles A and B": "將兩個銳角記為 A 與 B",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > p
    "Let A = arctan(1/2) and B = arctan(1/3), so tan A = 1/2 and tan B = 1/3 with 0 &lt; A, B &lt; π/4.": "設 A = arctan(1/2) 與 B = arctan(1/3)，則 tan A = 1/2 及 tan B = 1/3，且 0 &lt; A, B &lt; π/4。",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > data-title attribute
    "Apply the compound-angle formula for tan(A + B)": "應用 tan(A + B) 的複角公式",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > p
    "Substitute tan A and tan B into tan(A + B) = (tan A + tan B) / (1 − tan A tan B).": "將 tan A 與 tan B 代入 tan(A + B) = (tan A + tan B) / (1 − tan A tan B)。",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > data-title attribute
    "Justify why A + B = π/4 and not 5π/4": "解釋為何 A + B = π/4 而非 5π/4",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > p
    "Since tan θ = 1 has multiple solutions, we must bound A + B using the range of arctan.": "由於 tan θ = 1 有多個解，我們必須利用 arctan 的值域來界定 A + B 的範圍。",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > maths line
    "Since 0 &lt; tan <i>A</i>, tan <i>B</i> &lt; 1, we have 0 &lt; <i>A</i>, <i>B</i> &lt; <span class=\"frac\"><span><i>π</i></span><span>4</span></span> ⇒ 0 &lt; <i>A</i> + <i>B</i> &lt; <span class=\"frac\"><span><i>π</i></span><span>2</span></span> ⇒ <i>A</i> + <i>B</i> = <b><span class=\"frac\"><span><i>π</i></span><span>4</span></span></b> <b>[R1] [AG]</b>": "由於 0 &lt; tan <i>A</i>, tan <i>B</i> &lt; 1，我們有 0 &lt; <i>A</i>, <i>B</i> &lt; <span class=\"frac\"><span><i>π</i></span><span>4</span></span> ⇒ 0 &lt; <i>A</i> + <i>B</i> &lt; <span class=\"frac\"><span><i>π</i></span><span>2</span></span> ⇒ <i>A</i> + <i>B</i> = <b><span class=\"frac\"><span><i>π</i></span><span>4</span></span></b> <b>[R1] [AG]</b>",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > p
    "arctan(1/2) + arctan(1/3) = π/4": "arctan(1/2) + arctan(1/3) = π/4",

    // Reciprocal ratios, compound-angle identities and inverse tri > not needed for IB > Additional HL > p
    "<strong>Not required from memory in IB Math AA HL:</strong> Product-to-sum and sum-to-product (factor) identities such as <span class=\"chem\">sin A + sin B = 2 sin((A+B)/2) cos((A-B)/2)</span>, as well as the Weierstrass half-angle substitution <span class=\"chem\">t = tan(theta/2)</span>, are <strong>not</strong> in the AA HL syllabus or Formula Booklet. If a Paper 3 investigation uses one of them, the formula will be given in the question for you to prove using <span class=\"chem\">sin(A +- B)</span>.": "<strong>IB Math AA HL 不要求背誦的內容：</strong>積化和差與和差化積公式（例如 <span class=\"chem\">sin A + sin B = 2 sin((A+B)/2) cos((A-B)/2)</span>），以及萬能半角代換 <span class=\"chem\">t = tan(theta/2)</span>，均<strong>不在</strong> AA HL 課程大綱或公式手冊內。若 Paper 3 探究題用到其中之一，題目會給出公式讓你利用 <span class=\"chem\">sin(A +- B)</span> 證明。",

    // Reciprocal ratios, compound-angle identities and inverse tri > Additional HL > h3
    "Symmetry properties of the trigonometric graphs (AHL 3.11)": "三角函數圖像的對稱性質（AHL 3.11）",

    // Reciprocal ratios, compound-angle identities and inverse tri > Additional HL > p
    "Reflect the point <span class=\"chem\">P(cos theta, sin theta)</span> on the unit circle and you get the angles below. Each row is also a symmetry you can see on the graphs: <span class=\"chem\">y = sin x</span> and <span class=\"chem\">y = tan x</span> have rotational symmetry about the origin (they are <strong>odd</strong> functions), and <span class=\"chem\">y = cos x</span> is symmetric in the <span class=\"chem\">y</span>-axis (an <strong>even</strong> function).": "把單位圓上的點 <span class=\"chem\">P(cos theta, sin theta)</span> 反射，便得到下表中的角。每一行亦是圖像上可見的對稱性：<span class=\"chem\">y = sin x</span> 及 <span class=\"chem\">y = tan x</span> 關於原點旋轉對稱（它們是<strong>奇</strong>函數），而 <span class=\"chem\">y = cos x</span> 關於 <span class=\"chem\">y</span> 軸對稱（是<strong>偶</strong>函數）。",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > caption
    "Symmetry identities from the unit circle": "由單位圓得出的對稱恆等式",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "Angle": "角",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "Unit-circle move": "單位圓上的變換",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "Identities": "恆等式",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "What it says about the graphs": "對圖像的意義",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "<span class=\"chem\">-theta</span>": "<span class=\"chem\">-theta</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Reflect in the <span class=\"chem\">x</span>-axis": "沿 <span class=\"chem\">x</span> 軸反射",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">sin(-theta) = -sin theta</span>, <span class=\"chem\">cos(-theta) = cos theta</span>, <span class=\"chem\">tan(-theta) = -tan theta</span>": "<span class=\"chem\">sin(-theta) = -sin theta</span>, <span class=\"chem\">cos(-theta) = cos theta</span>, <span class=\"chem\">tan(-theta) = -tan theta</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "sin and tan are odd; cos is even.": "sin 及 tan 是奇函數；cos 是偶函數。",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "<span class=\"chem\">pi - theta</span>": "<span class=\"chem\">pi - theta</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Reflect in the <span class=\"chem\">y</span>-axis": "沿 <span class=\"chem\">y</span> 軸反射",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">sin(pi - theta) = sin theta</span>, <span class=\"chem\">cos(pi - theta) = -cos theta</span>, <span class=\"chem\">tan(pi - theta) = -tan theta</span>": "<span class=\"chem\">sin(pi - theta) = sin theta</span>, <span class=\"chem\">cos(pi - theta) = -cos theta</span>, <span class=\"chem\">tan(pi - theta) = -tan theta</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "The sine curve is symmetric about the line <span class=\"chem\">x = pi/2</span>.": "正弦曲線關於直線 <span class=\"chem\">x = pi/2</span> 對稱。",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "<span class=\"chem\">pi + theta</span>": "<span class=\"chem\">pi + theta</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Rotate by a half-turn about the origin": "繞原點旋轉半周",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">sin(pi + theta) = -sin theta</span>, <span class=\"chem\">cos(pi + theta) = -cos theta</span>, <span class=\"chem\">tan(pi + theta) = tan theta</span>": "<span class=\"chem\">sin(pi + theta) = -sin theta</span>, <span class=\"chem\">cos(pi + theta) = -cos theta</span>, <span class=\"chem\">tan(pi + theta) = tan theta</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "The tangent graph repeats every <span class=\"chem\">pi</span>.": "正切圖像每隔 <span class=\"chem\">pi</span> 重複一次。",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "<span class=\"chem\">pi/2 - theta</span>": "<span class=\"chem\">pi/2 - theta</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Reflect in the line <span class=\"chem\">y = x</span>": "沿直線 <span class=\"chem\">y = x</span> 反射",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">sin(pi/2 - theta) = cos theta</span>, <span class=\"chem\">cos(pi/2 - theta) = sin theta</span>": "<span class=\"chem\">sin(pi/2 - theta) = cos theta</span>, <span class=\"chem\">cos(pi/2 - theta) = sin theta</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "The cosine graph is the sine graph translated <span class=\"chem\">pi/2</span> to the left: <span class=\"chem\">cos x = sin(x + pi/2)</span>.": "餘弦圖像是正弦圖像向左平移 <span class=\"chem\">pi/2</span>：<span class=\"chem\">cos x = sin(x + pi/2)</span>。",

    // Reciprocal ratios, compound-angle identities and inverse tri > exam tip (shown in English + translation) > Additional HL > p
    "<strong>These identities are not in the Formula Booklet.</strong> If you forget one, derive it in one line from the compound-angle formulas, for example <span class=\"chem\">sin(pi - theta) = sin pi cos theta - cos pi sin theta = sin theta</span>, or sketch the graph and read off the symmetry.": "<strong>這些恆等式不在公式手冊內。</strong>若忘記了，可用複角公式一行推導，例如 <span class=\"chem\">sin(pi - theta) = sin pi cos theta - cos pi sin theta = sin theta</span>，或繪畫圖像讀出其對稱性。",

    // Reciprocal ratios, compound-angle identities and inverse tri > try it > Additional HL > p
    "<strong>[AHL · Paper 1]</strong> Evaluate the exact value of <span class=\"chem\">cos(arcsin(3/5))</span>.": "<strong>[AHL · Paper 1]</strong> 計算 (Evaluate) <span class=\"chem\">cos(arcsin(3/5))</span> 的準確值。",

    // Reciprocal ratios, compound-angle identities and inverse tri > try it > Additional HL > li
    "Let <span class=\"chem\">theta = arcsin(3/5)</span>, which is a Quadrant I acute angle with opposite side <span class=\"mono\">3</span> and hypotenuse <span class=\"mono\">5</span>.": "設 <span class=\"chem\">theta = arcsin(3/5)</span>，它是第一象限的銳角，對邊為 <span class=\"mono\">3</span>、斜邊為 <span class=\"mono\">5</span>。",

    // Reciprocal ratios, compound-angle identities and inverse tri > try it > Additional HL > li
    "By Pythagoras, the adjacent side is <span class=\"chem\">sqrt(5^2 - 3^2) = 4</span>, so <span class=\"chem\">cos theta = 4/5</span>.": "由畢氏定理，鄰邊為 <span class=\"chem\">sqrt(5^2 - 3^2) = 4</span>，故 <span class=\"chem\">cos theta = 4/5</span>。",

    // Reciprocal ratios, compound-angle identities and inverse tri > try it > Additional HL > maths line
    "cos(arcsin(<span class=\"frac\"><span>3</span><span>5</span></span>)) = √(1 − (<span class=\"frac\"><span>3</span><span>5</span></span>)<sup>2</sup>) = <b><span class=\"frac\"><span>4</span><span>5</span></span> = 0.8</b>": "cos(arcsin(<span class=\"frac\"><span>3</span><span>5</span></span>)) = √(1 − (<span class=\"frac\"><span>3</span><span>5</span></span>)<sup>2</sup>) = <b><span class=\"frac\"><span>4</span><span>5</span></span> = 0.8</b>",

    // Exam-style practice > data-toc attribute
    // Exam-style practice > h2
    "Exam-style practice": "考試題型練習",

    // Exam-style practice > p
    "Three sets covering SL unit-circle identities, sinusoidal models, and AHL reciprocal/compound/inverse trigonometry.": "三組練習，涵蓋 SL 單位圓恒等式、正弦模型，以及 AHL 倒數／複角／反三角函數。",

    // Exam-style practice > h3
    "Foundation: exact values and core identities": "基礎：準確值與核心恒等式",

    // Exam-style practice > data-title attribute
    "3.2 foundation": "3.2 基礎練習",

    // Exam-style practice > h3
    "Exam standard: Paper 1 and Paper 2": "考試標準：Paper 1 與 Paper 2",

    // Exam-style practice > data-title attribute
    "3.2 exam standard": "3.2 考試標準",

    // Exam-style practice > h3
    "Challenge: level 7 identities and equations": "挑戰：7 級恒等式與方程",

    // Exam-style practice > data-title attribute
    "3.2 challenge": "3.2 挑戰題",

  }
});
