/* t3-2 — ja translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't3-2', {
  strings: {

    // page title (browser tab)
    "3.2 The unit circle, trig identities and periodic models | Analysis Lab": "3.2 単位円・三角関数の恒等式と周期モデル | Analysis Lab",

    // The unit circle, trig identities and periodic models > page header > p
    "Topic 3.2 · SL 3.5–3.8 + AHL 3.9–3.11": "Topic 3.2 · SL 3.5–3.8 + AHL 3.9–3.11",

    // The unit circle, trig identities and periodic models > page header > h1
    "The unit circle, trig identities and periodic models": "単位円・三角関数の恒等式と周期モデル",

    // The unit circle, trig identities and periodic models > page header > span
    "How does rotating a point around a unit circle turn right-angled triangle ratios into periodic waves that model tides, seasons, and oscillations?": "単位円上の点の回転は、どのようにして直角三角形の三角比を潮汐や季節・振動をモデル化する周期的な波へと変えるのでしょうか？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "チェックリスト",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > p
    "Tick each skill when you can do it without looking at your notes. Items marked <strong>AHL</strong> are tested on Higher Level papers only.": "ノートを見ずに解けるようになったらチェックを入れましょう。<strong>AHL</strong> と書かれた項目は HL の試験のみで出題されます。",

    // What you need to be able to do > checklist > span
    "Define <span class=\"chem\">cos theta</span>, <span class=\"chem\">sin theta</span>, and <span class=\"chem\">tan theta</span> on the unit circle and state exact values for multiples of <span class=\"chem\">0, pi/6, pi/4, pi/3, pi/2</span> across all four quadrants.": "単位円上で <span class=\"chem\">cos theta</span>、<span class=\"chem\">sin theta</span>、<span class=\"chem\">tan theta</span> を定義し、全 4 象限で <span class=\"chem\">0, pi/6, pi/4, pi/3, pi/2</span> の倍数に対する正確な値を述べられる。",

    // What you need to be able to do > checklist > span
    "Apply <span class=\"chem\">tan theta = sin theta / cos theta</span>, <span class=\"chem\">cos^2 theta + sin^2 theta = 1</span>, and the double-angle identities for <span class=\"chem\">sin 2theta</span> and <span class=\"chem\">cos 2theta</span>.": "<span class=\"chem\">tan theta = sin theta / cos theta</span>、<span class=\"chem\">cos^2 theta + sin^2 theta = 1</span>、および <span class=\"chem\">sin 2theta</span> と <span class=\"chem\">cos 2theta</span> の 2 倍角の公式を適用できる。",

    // What you need to be able to do > checklist > span
    "Sketch and build periodic models <span class=\"chem\">y = a sin(b(x - c)) + d</span> and <span class=\"chem\">y = a cos(b(x - c)) + d</span> from amplitude, period, phase shift, and principal axis.": "振幅、周期、位相のずれ、中心軸から周期モデル <span class=\"chem\">y = a sin(b(x - c)) + d</span> や <span class=\"chem\">y = a cos(b(x - c)) + d</span> を組み立て、概形を描ける。",

    // What you need to be able to do > checklist > span
    "Solve linear, quadratic, and multiple-angle trigonometric equations analytically and graphically on a finite interval.": "有限区間上で、1 次・2 次・倍角を含む三角方程式を代数的およびグラフを用いて解ける。",

    // What you need to be able to do > checklist > Additional HL > span
    "Use reciprocal ratios <span class=\"chem\">sec theta, cosec theta, cot theta</span> and Pythagorean identities <span class=\"chem\">1 + tan^2 theta = sec^2 theta</span> and <span class=\"chem\">1 + cot^2 theta = cosec^2 theta</span>.": "正割・余割・余接 <span class=\"chem\">sec theta, cosec theta, cot theta</span> と三角関数の相互関係 <span class=\"chem\">1 + tan^2 theta = sec^2 theta</span>、<span class=\"chem\">1 + cot^2 theta = cosec^2 theta</span> を使える。",

    // What you need to be able to do > checklist > Additional HL > span
    "Expand and simplify expressions using compound-angle identities <span class=\"chem\">sin(A +- B), cos(A +- B), tan(A +- B)</span> and <span class=\"chem\">tan 2theta</span>.": "加法定理 <span class=\"chem\">sin(A +- B), cos(A +- B), tan(A +- B)</span> と <span class=\"chem\">tan 2theta</span> を使って式を展開・整理できる。",

    // What you need to be able to do > checklist > Additional HL > span
    "State the restricted domains and principal ranges of <span class=\"chem\">arcsin x, arccos x, arctan x</span>, sketch their graphs, and simplify compositions like <span class=\"chem\">cos(arcsin x)</span>.": "<span class=\"chem\">arcsin x, arccos x, arctan x</span> の制限された定義域と主値の範囲を述べ、グラフの概形を描き、<span class=\"chem\">cos(arcsin x)</span> のような合成式を簡単にできる。",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "問題デコーダー",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "問題デコーダー：使うべき解法を見抜く",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — Unit circle, identities, periodic models and equations": "問題デコーダー — 単位円・恒等式・周期モデル・方程式",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "試験問題に書かれている表現",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "数学的な意味（公式と立式）",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1（電卓不可）vs Paper 2（GDC 可）",

    // Question decoder: spotting which technique to use > table > th
    "“Given <span class=\"chem\">sin theta = 3/5</span> and <span class=\"chem\">theta</span> is obtuse, find <span class=\"chem\">cos 2theta</span> and <span class=\"chem\">sin 2theta</span>”": "「<span class=\"chem\">sin theta = 3/5</span> で <span class=\"chem\">theta</span> が鈍角のとき、<span class=\"chem\">cos 2theta</span> と <span class=\"chem\">sin 2theta</span> を求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "Draw a <span class=\"mono\">3-4-5</span> right triangle in Quadrant II (<span class=\"chem\">pi/2 &lt; theta &lt; pi</span>) where <span class=\"chem\">cos theta = -4/5</span> (negative!). Then substitute into <span class=\"chem\">cos 2theta = 1 - 2 sin^2 theta</span> and <span class=\"chem\">sin 2theta = 2 sin theta cos theta</span>.": "第 2 象限（<span class=\"chem\">pi/2 &lt; theta &lt; pi</span>）に <span class=\"mono\">3-4-5</span> の直角三角形を描くと <span class=\"chem\">cos theta = -4/5</span>（負！）になります。次に <span class=\"chem\">cos 2theta = 1 - 2 sin^2 theta</span> と <span class=\"chem\">sin 2theta = 2 sin theta cos theta</span> に代入します。",

    // Question decoder: spotting which technique to use > table > td
    "Never try to find <span class=\"chem\">theta</span> in degrees/radians on Paper 1! You only need the fractions <span class=\"chem\">sin theta</span> and <span class=\"chem\">cos theta</span>.": "Paper 1 で <span class=\"chem\">theta</span> を度やラジアンで求めようとしてはいけません！必要なのは分数 <span class=\"chem\">sin theta</span> と <span class=\"chem\">cos theta</span> だけです。",

    // Question decoder: spotting which technique to use > table > th
    "“Solve <span class=\"chem\">cos 2x + 3 cos x + 2 = 0</span>” vs “Solve <span class=\"chem\">cos 2x - sin x = 0</span>”": "「<span class=\"chem\">cos 2x + 3 cos x + 2 = 0</span> を解け」 vs 「<span class=\"chem\">cos 2x - sin x = 0</span> を解け」",

    // Question decoder: spotting which technique to use > table > td
    "Pick the form of <span class=\"chem\">cos 2x</span> that matches the linear term:<br>• With <span class=\"chem\">cos x</span>: use <span class=\"chem\">2 cos^2 x - 1</span>.<br>• With <span class=\"chem\">sin x</span>: use <span class=\"chem\">1 - 2 sin^2 x</span>.": "1 次の項に合う <span class=\"chem\">cos 2x</span> の形を選びます：<br>• <span class=\"chem\">cos x</span> がある場合：<span class=\"chem\">2 cos^2 x - 1</span> を使う。<br>• <span class=\"chem\">sin x</span> がある場合：<span class=\"chem\">1 - 2 sin^2 x</span> を使う。",

    // Question decoder: spotting which technique to use > table > td
    "Factor the resulting quadratic in <span class=\"chem\">cos x</span> or <span class=\"chem\">sin x</span>. Reject any root outside <span class=\"chem\">[-1, 1]</span>.": "得られた <span class=\"chem\">cos x</span> または <span class=\"chem\">sin x</span> の 2 次式を因数分解し、<span class=\"chem\">[-1, 1]</span> の外にある解を除外します。",

    // Question decoder: spotting which technique to use > table > th
    "“A Ferris wheel / tide has maximum height <span class=\"chem\">M</span> at <span class=\"chem\">t = t_1</span> and minimum <span class=\"chem\">m</span> at <span class=\"chem\">t = t_2</span>”": "「観覧車 / 潮位が <span class=\"chem\">t = t_1</span> で最大高さ <span class=\"chem\">M</span>、<span class=\"chem\">t = t_2</span> で最小値 <span class=\"chem\">m</span> をとる」",

    // Question decoder: spotting which technique to use > table > td
    "• Amplitude <span class=\"chem\">|a| = (M - m)/2</span><br>• Principal axis <span class=\"chem\">d = (M + m)/2</span><br>• Half-period <span class=\"chem\">T/2 = |t_2 - t_1|</span>, so <span class=\"chem\">T = 2|t_2 - t_1|</span> and <span class=\"chem\">b = 2pi / T</span>.": "• 振幅 <span class=\"chem\">|a| = (M - m)/2</span><br>• 中心軸 <span class=\"chem\">d = (M + m)/2</span><br>• 半周期 <span class=\"chem\">T/2 = |t_2 - t_1|</span> なので <span class=\"chem\">T = 2|t_2 - t_1|</span> かつ <span class=\"chem\">b = 2pi / T</span>。",

    // Question decoder: spotting which technique to use > table > td
    "Using <span class=\"chem\">y = a cos(b(t - t_1)) + d</span> with <span class=\"chem\">a &gt; 0</span> automatically places a maximum at <span class=\"chem\">t = t_1</span>!": "<span class=\"chem\">a &gt; 0</span> で <span class=\"chem\">y = a cos(b(t - t_1)) + d</span> を使うと、自動的に <span class=\"chem\">t = t_1</span> で最大値になります！",

    // Question decoder: spotting which technique to use > table > th
    "“Solve <span class=\"chem\">sin(2x) = 1/2</span> for <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>”": "「<span class=\"chem\">0 &lt;= x &lt;= 2pi</span> で <span class=\"chem\">sin(2x) = 1/2</span> を解け」",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Expand the interval first!</strong> Since <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>, let <span class=\"chem\">u = 2x</span> so <span class=\"chem\">0 &lt;= u &lt;= 4pi</span>. Find all 4 values of <span class=\"chem\">u</span> in two full revolutions before dividing by 2.": "<strong>最初に区間を広げましょう！</strong> <span class=\"chem\">0 &lt;= x &lt;= 2pi</span> なので <span class=\"chem\">u = 2x</span> とおくと <span class=\"chem\">0 &lt;= u &lt;= 4pi</span> です。2 で割る前に 2 周分の 4 つの <span class=\"chem\">u</span> の値をすべて求めます。",

    // Question decoder: spotting which technique to use > table > td
    "Dividing by 2 before listing coterminal angles loses half the solutions!": "一般角を列挙する前に 2 で割ると、解の半分を落としてしまいます！",

    // Question decoder: spotting which technique to use > table > Additional HL > th
    "<strong>[AHL]</strong> “Simplify <span class=\"chem\">cos(arcsin x)</span> or <span class=\"chem\">tan(2 arctan(1/3))</span>”": "<strong>[AHL]</strong> 「<span class=\"chem\">cos(arcsin x)</span> または <span class=\"chem\">tan(2 arctan(1/3))</span> を簡単にせよ」",

    // Question decoder: spotting which technique to use > table > Additional HL > td
    "Let <span class=\"chem\">theta = arcsin x</span>, so <span class=\"chem\">sin theta = x/1</span> on a right triangle with adjacent side <span class=\"chem\">sqrt(1 - x^2)</span>. For <span class=\"chem\">tan(2A)</span>, use <span class=\"chem\">(2 tan A)/(1 - tan^2 A)</span>.": "<span class=\"chem\">theta = arcsin x</span> とおくと、隣辺が <span class=\"chem\">sqrt(1 - x^2)</span> の直角三角形で <span class=\"chem\">sin theta = x/1</span> となります。<span class=\"chem\">tan(2A)</span> には <span class=\"chem\">(2 tan A)/(1 - tan^2 A)</span> を使います。",

    // Question decoder: spotting which technique to use > table > Additional HL > td
    "Always check that the angle lies in the principal range of the inverse trig function.": "角が逆三角関数の主値の範囲に収まっているか必ず確認しましょう。",

    // The unit circle, exact ratios and fundamental identities > data-toc attribute
    "Unit circle & identities": "単位円と恒等式",

    // The unit circle, exact ratios and fundamental identities > h2
    "The unit circle, exact ratios and fundamental identities": "単位円・正確な三角比と基本恒等式",

    // The unit circle, exact ratios and fundamental identities > p
    "The <dfn data-def=\"The circle of radius 1 centred at the origin (0, 0), with equation x² + y² = 1.\">unit circle</dfn> has centre <span class=\"chem\">(0, 0)</span> and radius <span class=\"mono\">1</span>. If a ray from the origin makes an angle <span class=\"chem\">theta</span> counter-clockwise from the positive <span class=\"chem\">x</span>-axis and meets the unit circle at <span class=\"chem\">P(x, y)</span>, then by definition:": "<dfn data-def=\"原点 (0, 0) を中心とする半径 1 の円。方程式は x² + y² = 1。\">単位円 <span class=\"en-term\">(unit circle)</span></dfn> は中心が <span class=\"chem\">(0, 0)</span>、半径が <span class=\"mono\">1</span> の円です。原点からの半直線が <span class=\"chem\">x</span> 軸の正の向きから反時計回りに角 <span class=\"chem\">theta</span> をなし、単位円と点 <span class=\"chem\">P(x, y)</span> で交わるとき、定義により次が成り立ちます：",

    // The unit circle, exact ratios and fundamental identities > data-def attribute
    "The circle of radius 1 centred at the origin (0, 0), with equation x² + y² = 1.": "原点 (0, 0) を中心とする半径 1 の円。方程式は x² + y² = 1。",

    // The unit circle, exact ratios and fundamental identities > equation > maths line
    "<i>x</i> = cos <i>θ</i>, &nbsp;&nbsp; <i>y</i> = sin <i>θ</i>, &nbsp;&nbsp; tan <i>θ</i> = <span class=\"frac\"><span>sin <i>θ</i></span><span>cos <i>θ</i></span></span> = <span class=\"frac\"><span><i>y</i></span><span><i>x</i></span></span> &nbsp; (gradient of <i>OP</i>)": "<i>x</i> = cos <i>θ</i>, &nbsp;&nbsp; <i>y</i> = sin <i>θ</i>, &nbsp;&nbsp; tan <i>θ</i> = <span class=\"frac\"><span>sin <i>θ</i></span><span>cos <i>θ</i></span></span> = <span class=\"frac\"><span><i>y</i></span><span><i>x</i></span></span> &nbsp; （<i>OP</i> の傾き）",

    // The unit circle, exact ratios and fundamental identities > equation > dt
    "cos²θ + sin²θ = 1": "cos²θ + sin²θ = 1",

    // The unit circle, exact ratios and fundamental identities > equation > dd
    "Pythagoras' theorem <span class=\"chem\">x^2 + y^2 = 1</span> on the unit circle": "単位円上の三平方の定理 <span class=\"chem\">x^2 + y^2 = 1</span>",

    // The unit circle, exact ratios and fundamental identities > equation > dt
    "sin 2θ = 2 sin θ cos θ": "sin 2θ = 2 sin θ cos θ",

    // The unit circle, exact ratios and fundamental identities > equation > dd
    "Double-angle identity for sine": "サインの 2 倍角の公式",

    // The unit circle, exact ratios and fundamental identities > equation > dt
    "cos 2θ": "cos 2θ",

    // The unit circle, exact ratios and fundamental identities > equation > dd
    "<span class=\"chem\">cos^2 theta - sin^2 theta = 2 cos^2 theta - 1 = 1 - 2 sin^2 theta</span>": "<span class=\"chem\">cos^2 theta - sin^2 theta = 2 cos^2 theta - 1 = 1 - 2 sin^2 theta</span>",

    // The unit circle, exact ratios and fundamental identities > h3
    "Exact trigonometric values (Paper 1 must-know table)": "有名な角の三角関数の値（Paper 1 必暗記表）",

    // The unit circle, exact ratios and fundamental identities > p
    "You are not given exact values in the Formula Booklet. An easy memory trick for the first quadrant is the <strong>square-root-over-2 ladder</strong>: for <span class=\"chem\">theta = 0, pi/6, pi/4, pi/3, pi/2</span>, <span class=\"chem\">sin theta</span> is <span class=\"chem\">sqrt(0)/2, sqrt(1)/2, sqrt(2)/2, sqrt(3)/2, sqrt(4)/2</span>, and <span class=\"chem\">cos theta</span> counts backwards!": "公式集には正確な値は載っていません。第 1 象限の簡単な覚え方は<strong>「2 分のルート」の階段</strong>です：<span class=\"chem\">theta = 0, pi/6, pi/4, pi/3, pi/2</span> に対して <span class=\"chem\">sin theta</span> は <span class=\"chem\">sqrt(0)/2, sqrt(1)/2, sqrt(2)/2, sqrt(3)/2, sqrt(4)/2</span> となり、<span class=\"chem\">cos theta</span> は逆順に減っていきます！",

    // The unit circle, exact ratios and fundamental identities > table > caption
    "Exact values in Quadrant I and sign rules across Quadrants I–IV": "第 1 象限の正確な値と第 1〜4 象限の符号のルール",

    // The unit circle, exact ratios and fundamental identities > table > th
    "Angle (deg)": "角度（度数法）",

    // The unit circle, exact ratios and fundamental identities > table > th
    "Angle (rad)": "角度（弧度法）",

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
    "undefined": "定義されない",

    // The unit circle, exact ratios and fundamental identities > widget > data-title attribute
    "Interactive Unit Circle & Exact Radian Explorer": "単位円＆弧度法インタラクティブ・エクスプローラー",

    // The unit circle, exact ratios and fundamental identities > widget > figcaption
    "Adjust the angle <i>θ</i> or click one of the special radian angles. Observe how the horizontal coordinate is cos <i>θ</i>, the vertical coordinate is sin <i>θ</i>, and the reference angle α determines the magnitude while the quadrant determines the sign (<strong>CAST / ASTC</strong>).": "角度 <i>θ</i> を動かすか、有名なラジアン角をクリックしてみましょう。横座標が cos <i>θ</i>、縦座標が sin <i>θ</i> であり、基準角 α が絶対値を、象限が符号（<strong>CAST / ASTC</strong>）を決めることがわかります。",

    // The unit circle, exact ratios and fundamental identities > worked example > data-kicker attribute
    "Worked example 1 (SL 3.6 — Paper 1 No-GDC)": "例題 1 (SL 3.6 — Paper 1 電卓不可)",

    // The unit circle, exact ratios and fundamental identities > worked example > h3
    "Using quadrant signs and double-angle identities without finding θ": "θ を求めずに象限の符号と 2 倍角の公式を使う",

    // The unit circle, exact ratios and fundamental identities > worked example > p
    "Given that <span class=\"chem\">sin theta = -3/5</span> and <span class=\"chem\">pi &lt; theta &lt; 3pi/2</span> (Quadrant III), find the exact values of:<br> (a) <span class=\"chem\">cos theta</span> <strong>[2 marks]</strong> &nbsp;&nbsp; (b) <span class=\"chem\">sin 2theta</span> <strong>[2 marks]</strong> &nbsp;&nbsp; (c) <span class=\"chem\">cos 2theta</span> <strong>[2 marks]</strong>": "<span class=\"chem\">sin theta = -3/5</span> かつ <span class=\"chem\">pi &lt; theta &lt; 3pi/2</span>（第 3 象限）のとき、次の厳密値（正確な値）を求めなさい (Find)：<br> (a) <span class=\"chem\">cos theta</span> <strong>[2 marks]</strong> &nbsp;&nbsp; (b) <span class=\"chem\">sin 2theta</span> <strong>[2 marks]</strong> &nbsp;&nbsp; (c) <span class=\"chem\">cos 2theta</span> <strong>[2 marks]</strong>",

    // The unit circle, exact ratios and fundamental identities > worked example > data-title attribute
    "Use cos²θ + sin²θ = 1 and choose the negative root for Quadrant III": "cos²θ + sin²θ = 1 を使い、第 3 象限なので負の平方根を選ぶ",

    // The unit circle, exact ratios and fundamental identities > worked example > p
    "In Quadrant III (π &lt; θ &lt; 3π/2), both x = cos θ and y = sin θ are negative.": "第 3 象限（π &lt; θ &lt; 3π/2）では、x = cos θ も y = sin θ も負です。",

    // The unit circle, exact ratios and fundamental identities > worked example > data-title attribute
    "Substitute into sin 2θ = 2 sin θ cos θ": "sin 2θ = 2 sin θ cos θ に代入する",

    // The unit circle, exact ratios and fundamental identities > worked example > p
    "Since both sin θ and cos θ are negative, their product is positive (2θ lies in Quadrant I/II).": "sin θ も cos θ も負なので、その積は正になります（2θ は第 1・第 2 象限にあります）。",

    // The unit circle, exact ratios and fundamental identities > worked example > data-title attribute
    "Substitute into cos 2θ = 1 − 2 sin²θ": "cos 2θ = 1 − 2 sin²θ に代入する",

    // The unit circle, exact ratios and fundamental identities > worked example > p
    "Using 1 − 2 sin²θ uses the given value of sin θ directly and avoids carrying any slip from part (a).": "1 − 2 sin²θ を使えば問題文で与えられた sin θ の値を直接使えるため、(a) の計算ミスを引きずらずに済みます。",

    // The unit circle, exact ratios and fundamental identities > try it > p
    "<strong>[Paper 1 — No GDC]</strong> Evaluate the exact value of <span class=\"chem\">cos(4*pi/3)</span>.": "<strong>[Paper 1 — 電卓不可]</strong> <span class=\"chem\">cos(4*pi/3)</span> の正確な値を求めなさい。",

    // The unit circle, exact ratios and fundamental identities > try it > li
    "<span class=\"chem\">4*pi/3 = pi + pi/3</span> lies in Quadrant III, with acute reference angle <span class=\"chem\">alpha = pi/3</span> (<span class=\"mono\">60°</span>).": "<span class=\"chem\">4*pi/3 = pi + pi/3</span> は第 3 象限にあり、鋭角の基準角は <span class=\"chem\">alpha = pi/3</span>（<span class=\"mono\">60°</span>）です。",

    // The unit circle, exact ratios and fundamental identities > try it > li
    "In Quadrant III, cosine is negative, so <span class=\"chem\">cos(4*pi/3) = -cos(pi/3)</span>.": "第 3 象限ではコサインが負なので、<span class=\"chem\">cos(4*pi/3) = -cos(pi/3)</span> です。",

    // Sinusoidal periodic models and solving trigonometric equatio > data-toc attribute
    "Periodic models & equations": "周期モデルと方程式",

    // Sinusoidal periodic models and solving trigonometric equatio > h2
    "Sinusoidal periodic models and solving trigonometric equations": "三角関数の周期モデルと三角方程式の解法",

    // Sinusoidal periodic models and solving trigonometric equatio > p
    "Real-world phenomena that repeat in regular cycles—ocean tides, hours of daylight, alternating current, or the height of a rider on a Ferris wheel—are modelled by transformed sine or cosine functions:": "潮汐、日照時間、交流電流、観覧車のゴンドラの高さなど、規則的な周期で繰り返す現実の現象は、変換されたサイン・コサイン関数でモデル化されます：",

    // Sinusoidal periodic models and solving trigonometric equatio > equation > maths line
    "<i>f</i>(<i>t</i>) = <i>a</i> sin(<i>b</i>(<i>t</i> − <i>c</i>)) + <i>d</i> &nbsp;&nbsp; or &nbsp;&nbsp; <i>f</i>(<i>t</i>) = <i>a</i> cos(<i>b</i>(<i>t</i> − <i>c</i>)) + <i>d</i>": "<i>f</i>(<i>t</i>) = <i>a</i> sin(<i>b</i>(<i>t</i> − <i>c</i>)) + <i>d</i> &nbsp;&nbsp; または &nbsp;&nbsp; <i>f</i>(<i>t</i>) = <i>a</i> cos(<i>b</i>(<i>t</i> − <i>c</i>)) + <i>d</i>",

    // Sinusoidal periodic models and solving trigonometric equatio > equation > dd
    "amplitude = <span class=\"chem\">(y_{max} - y_{min}) / 2</span> (vertical distance from mean line to peak)": "振幅 = <span class=\"chem\">(y_{max} - y_{min}) / 2</span>（中心軸から山の頂上までの縦の距離）",

    // Sinusoidal periodic models and solving trigonometric equatio > equation > dd
    "vertical shift (principal axis <span class=\"chem\">y = d</span>) = <span class=\"chem\">(y_{max} + y_{min}) / 2</span>": "上下の平行移動（中心軸 <span class=\"chem\">y = d</span>）= <span class=\"chem\">(y_{max} + y_{min}) / 2</span>",

    // Sinusoidal periodic models and solving trigonometric equatio > equation > dd
    "angular frequency: Period <span class=\"chem\">T = 2*pi / b</span> (in radians) so <span class=\"chem\">b = 2*pi / T</span>": "角振動数：周期 <span class=\"chem\">T = 2*pi / b</span>（ラジアン単位）なので <span class=\"chem\">b = 2*pi / T</span>",

    // Sinusoidal periodic models and solving trigonometric equatio > equation > dd
    "horizontal phase shift: for <span class=\"chem\">+a cos(b(t - c)) + d</span>, <span class=\"chem\">c</span> is the time of a maximum; for <span class=\"chem\">+a sin(b(t - c)) + d</span>, <span class=\"chem\">c</span> is a rising crossing of <span class=\"chem\">y = d</span>": "横方向の位相のずれ：<span class=\"chem\">+a cos(b(t - c)) + d</span> では <span class=\"chem\">c</span> は最大値をとる時刻；<span class=\"chem\">+a sin(b(t - c)) + d</span> では <span class=\"chem\">c</span> は <span class=\"chem\">y = d</span> を上向きに横切る時刻",

    // Sinusoidal periodic models and solving trigonometric equatio > widget > data-title attribute
    "Sinusoidal Tide / Ferris Wheel Model Builder": "潮汐・観覧車の周期モデルビルダー",

    // Sinusoidal periodic models and solving trigonometric equatio > widget > figcaption
    "Adjust amplitude <i>a</i>, frequency <i>b</i>, phase shift <i>c</i>, and principal axis <i>d</i>. Notice how the wave oscillates symmetrically between <i>y</i><sub>max</sub> = <i>d</i> + |<i>a</i>| and <i>y</i><sub>min</sub> = <i>d</i> − |<i>a</i>| with period <i>T</i> = 2π / <i>b</i>.": "振幅 <i>a</i>、角振動数 <i>b</i>、位相のずれ <i>c</i>、中心軸 <i>d</i> を動かしてみましょう。波が周期 <i>T</i> = 2π / <i>b</i> で <i>y</i><sub>max</sub> = <i>d</i> + |<i>a</i>| と <i>y</i><sub>min</sub> = <i>d</i> − |<i>a</i>| の間を対称に振動する様子がわかります。",

    // Sinusoidal periodic models and solving trigonometric equatio > h3
    "The graph of <span class=\"chem\">y = tan x</span>": "<span class=\"chem\">y = tan x</span> のグラフ",

    // Sinusoidal periodic models and solving trigonometric equatio > p
    "The tangent graph is <strong>not</strong> a sinusoid. Because <span class=\"chem\">tan x = sin x / cos x</span>, it has <strong>vertical asymptotes</strong> wherever <span class=\"chem\">cos x = 0</span>, that is at <span class=\"chem\">x = pi/2 + k*pi</span> (<span class=\"chem\">k \\in \\mathbb{Z}</span>). It has <strong>no amplitude</strong>, passes through <span class=\"chem\">(0, 0)</span> and <span class=\"chem\">(pi/4, 1)</span>, increases on every branch, and repeats with <strong>period <span class=\"chem\">pi</span></strong>, not <span class=\"chem\">2*pi</span>.": "タンジェントのグラフは正弦曲線では<strong>ありません</strong>。<span class=\"chem\">tan x = sin x / cos x</span> なので、<span class=\"chem\">cos x = 0</span> となる所、すなわち <span class=\"chem\">x = pi/2 + k*pi</span>（<span class=\"chem\">k \\in \\mathbb{Z}</span>）に<strong>垂直漸近線</strong>があります。<strong>振幅はなく</strong>、<span class=\"chem\">(0, 0)</span> と <span class=\"chem\">(pi/4, 1)</span> を通り、各枝で増加し、<span class=\"chem\">2*pi</span> ではなく<strong>周期 <span class=\"chem\">pi</span></strong> でくり返します。",

    // Sinusoidal periodic models and solving trigonometric equatio > common mistake > p
    "<strong>Period of a stretched tangent:</strong> <span class=\"chem\">y = tan(bx)</span> has period <span class=\"chem\">pi / b</span>, so its asymptotes are <span class=\"chem\">pi / b</span> apart. When you solve <span class=\"chem\">tan(bx) = k</span>, consecutive solutions are also <span class=\"chem\">pi / b</span> apart: add multiples of <span class=\"chem\">pi</span> to the angle <span class=\"chem\">bx</span>, not multiples of <span class=\"chem\">2*pi</span>.": "<strong>横に拡大・縮小したタンジェントの周期：</strong><span class=\"chem\">y = tan(bx)</span> の周期は <span class=\"chem\">pi / b</span> なので、漸近線の間隔は <span class=\"chem\">pi / b</span> です。<span class=\"chem\">tan(bx) = k</span> を解くとき、となり合う解の間隔も <span class=\"chem\">pi / b</span> です。角 <span class=\"chem\">bx</span> に足すのは <span class=\"chem\">2*pi</span> の倍数ではなく <span class=\"chem\">pi</span> の倍数です。",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > data-kicker attribute
    "Worked example 2 (SL 3.8 — Multiple-Angle & Quadratic Trig Equations)": "例題 2 (SL 3.8 — 倍角と 2 次の三角方程式)",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > h3
    "Solving a quadratic trigonometric equation via double-angle substitution": "2 倍角の置き換えで 2 次の三角方程式を解く",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > p
    "<strong>[Paper 1 — No GDC]</strong> Solve <span class=\"chem\">cos 2x + 3 sin x - 2 = 0</span> for <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>. <strong>[6 marks]</strong>": "<strong>[Paper 1 — 電卓不可]</strong> <span class=\"chem\">0 &lt;= x &lt;= 2pi</span> の範囲で <span class=\"chem\">cos 2x + 3 sin x - 2 = 0</span> を解きなさい。 <strong>[6 marks]</strong>",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > data-title attribute
    "Replace cos 2x with 1 − 2 sin²x to create a quadratic in sin x": "cos 2x を 1 − 2 sin²x に置き換えて sin x の 2 次式を作る",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > p
    "Because the linear term is +3 sin x, we choose the version of cos 2x that contains only sin²x.": "1 次の項が +3 sin x なので、sin²x だけを含む cos 2x の公式を選びます。",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > data-title attribute
    "Factor the quadratic in sin x": "sin x の 2 次式を因数分解する",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > p
    "Treat u = sin x so 2u² − 3u + 1 = (2u − 1)(u − 1) = 0.": "u = sin x とおくと 2u² − 3u + 1 = (2u − 1)(u − 1) = 0 となります。",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > maths line
    "(2 sin <i>x</i> − 1)(sin <i>x</i> − 1) = 0 ⇒ sin <i>x</i> = <span class=\"frac\"><span>1</span><span>2</span></span> &nbsp; or &nbsp; sin <i>x</i> = 1 <b>[M1 A1]</b>": "(2 sin <i>x</i> − 1)(sin <i>x</i> − 1) = 0 ⇒ sin <i>x</i> = <span class=\"frac\"><span>1</span><span>2</span></span> &nbsp; または &nbsp; sin <i>x</i> = 1 <b>[M1 A1]</b>",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > data-title attribute
    "Find all angles in [0, 2π] for each branch": "それぞれについて [0, 2π] の範囲の角をすべて求める",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > p
    "sin x = 1/2 is positive in Quadrants I and II (reference angle π/6); sin x = 1 occurs at the top of the unit circle.": "sin x = 1/2 は第 1・第 2 象限で正（基準角 π/6）；sin x = 1 は単位円のてっぺんで起こります。",

    // Sinusoidal periodic models and solving trigonometric equatio > common mistake > p
    "<strong>Never divide a trigonometric equation by <span class=\"chem\">sin x</span> or <span class=\"chem\">cos x</span> if it could equal zero!</strong> To solve <span class=\"chem\">sin 2x = cos x</span>, write <span class=\"chem\">2 sin x cos x - cos x = 0</span> and factor as <span class=\"chem\">cos x (2 sin x - 1) = 0</span>. Dividing by <span class=\"chem\">cos x</span> throws away the roots <span class=\"chem\">cos x = 0</span> (<span class=\"chem\">x = pi/2, 3pi/2</span>)!": "<strong>三角方程式の両辺を、0 になり得る <span class=\"chem\">sin x</span> や <span class=\"chem\">cos x</span> で決して割ってはいけません！</strong> <span class=\"chem\">sin 2x = cos x</span> を解くときは、<span class=\"chem\">2 sin x cos x - cos x = 0</span> と移項して <span class=\"chem\">cos x (2 sin x - 1) = 0</span> と因数分解します。<span class=\"chem\">cos x</span> で割ると、<span class=\"chem\">cos x = 0</span> の解（<span class=\"chem\">x = pi/2, 3pi/2</span>）を失ってしまいます！",

    // Sinusoidal periodic models and solving trigonometric equatio > try it > p
    "The depth of water in a harbour is modelled by <span class=\"chem\">D(t) = 4.5 cos((pi/6)t) + 9.5</span> metres, where <span class=\"chem\">t</span> is the time in hours after midnight. What is the maximum depth of water in the harbour?": "港の水深が <span class=\"chem\">D(t) = 4.5 cos((pi/6)t) + 9.5</span> メートルでモデル化されている（<span class=\"chem\">t</span> は午前 0 時からの時間）。港の最大水深は何メートルですか？",

    // Sinusoidal periodic models and solving trigonometric equatio > try it > li
    "Since the maximum value of <span class=\"chem\">cos((pi/6)t)</span> is <span class=\"mono\">1</span>, the maximum value of <span class=\"chem\">a cos(bt) + d</span> is <span class=\"chem\">|a| + d</span>.": "<span class=\"chem\">cos((pi/6)t)</span> の最大値は <span class=\"mono\">1</span> なので、<span class=\"chem\">a cos(bt) + d</span> の最大値は <span class=\"chem\">|a| + d</span> です。",

    // Sinusoidal periodic models and solving trigonometric equatio > try it > li
    "Add <span class=\"chem\">4.5 + 9.5</span>.": "<span class=\"chem\">4.5 + 9.5</span> を足します。",

    // Reciprocal ratios, compound-angle identities and inverse tri > Additional HL > data-toc attribute
    "Reciprocal, compound & inverse trig": "逆数比・加法定理・逆三角関数",

    // Reciprocal ratios, compound-angle identities and inverse tri > Additional HL > h2
    "Reciprocal ratios, compound-angle identities and inverse trig functions": "三角関数の逆数比・加法定理と逆三角関数",

    // Reciprocal ratios, compound-angle identities and inverse tri > Additional HL > p
    "At Higher Level, we introduce the three reciprocal trigonometric functions—<strong>secant</strong>, <strong>cosecant</strong>, and <strong>cotangent</strong>—along with compound-angle formulas for <span class=\"chem\">A +- B</span> and the inverse trigonometric functions <span class=\"chem\">arcsin, arccos, arctan</span>.": "HL では、3 つの逆数三角関数（<strong>正割 secant</strong>、<strong>余割 cosecant</strong>、<strong>余接 cotangent</strong>）と、<span class=\"chem\">A +- B</span> の加法定理、そして逆三角関数 <span class=\"chem\">arcsin, arccos, arctan</span>（それぞれ sin y = x, cos y = x, tan y = x の逆関数）を学びます。",

    // Reciprocal ratios, compound-angle identities and inverse tri > equation > Additional HL > dt
    "sin(A ± B)": "sin(A ± B)",

    // Reciprocal ratios, compound-angle identities and inverse tri > equation > Additional HL > dd
    "<span class=\"chem\">sin A cos B +- cos A sin B</span> &nbsp;(signs match)": "<span class=\"chem\">sin A cos B +- cos A sin B</span> &nbsp;（符号は同じ）",

    // Reciprocal ratios, compound-angle identities and inverse tri > equation > Additional HL > dt
    "cos(A ± B)": "cos(A ± B)",

    // Reciprocal ratios, compound-angle identities and inverse tri > equation > Additional HL > dd
    "<span class=\"chem\">cos A cos B -+ sin A sin B</span> &nbsp;(signs flip!)": "<span class=\"chem\">cos A cos B -+ sin A sin B</span> &nbsp;（符号が反転！）",

    // Reciprocal ratios, compound-angle identities and inverse tri > equation > Additional HL > dt
    "tan(A ± B)": "tan(A ± B)",

    // Reciprocal ratios, compound-angle identities and inverse tri > equation > Additional HL > dd
    "<span class=\"chem\">(tan A +- tan B) / (1 -+ tan A tan B)</span>, and <span class=\"chem\">tan 2theta = (2 tan theta) / (1 - tan^2 theta)</span>": "<span class=\"chem\">(tan A +- tan B) / (1 -+ tan A tan B)</span>、および <span class=\"chem\">tan 2theta = (2 tan theta) / (1 - tan^2 theta)</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > Additional HL > h3
    "Principal domains and ranges of inverse trigonometric functions (AHL 3.9)": "逆三角関数の主定義域と主値の範囲 (AHL 3.9)",

    // Reciprocal ratios, compound-angle identities and inverse tri > Additional HL > p
    "Because <span class=\"chem\">sin x, cos x, tan x</span> are periodic (many-to-one), we must restrict their domains to a single monotonic branch before they can have an inverse function. Memorize this table—especially what happens when you plug a <strong>negative input</strong> into <span class=\"chem\">arcsin(-x)</span> versus <span class=\"chem\">arccos(-x)</span>!": "<span class=\"chem\">sin x, cos x, tan x</span> は周期関数（多対 1）なので、逆関数をもつためには単調な 1 つの枝に定義域を制限する必要があります。この表を覚えましょう——特に <span class=\"chem\">arcsin(-x)</span> と <span class=\"chem\">arccos(-x)</span> に<strong>負の入力</strong>を入れたときの違いに注意！",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > caption
    "Principal domains, ranges and negative-input symmetry of inverse trig functions": "逆三角関数の定義域・主値の範囲と負の入力に対する対称性",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "Function": "関数",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "Domain (input <span class=\"chem\">x</span>)": "定義域（入力 <span class=\"chem\">x</span>）",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "Principal range (output angle <span class=\"chem\">y</span>)": "主値の範囲（出力角 <span class=\"chem\">y</span>）",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "Quadrants covered": "対応する象限",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "Negative input rule": "負の入力の公式",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "<span class=\"chem\">y = arcsin x</span>": "<span class=\"chem\">y = arcsin x</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">[-pi/2, pi/2]</span>": "<span class=\"chem\">[-pi/2, pi/2]</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Quadrants IV and I": "第 4・第 1 象限",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Odd: <span class=\"chem\">arcsin(-x) = -arcsin(x)</span>": "奇関数：<span class=\"chem\">arcsin(-x) = -arcsin(x)</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "<span class=\"chem\">y = arccos x</span>": "<span class=\"chem\">y = arccos x</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">[0, pi]</span>": "<span class=\"chem\">[0, pi]</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Quadrants I and II": "第 1・第 2 象限",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">arccos(-x) = pi - arccos(x)</span>": "<span class=\"chem\">arccos(-x) = pi - arccos(x)</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "<span class=\"chem\">y = arctan x</span>": "<span class=\"chem\">y = arctan x</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">x in R</span> (<span class=\"chem\">(-infty, infty)</span>)": "<span class=\"chem\">x in R</span>（<span class=\"chem\">(-infty, infty)</span>）",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">(-pi/2, pi/2)</span>": "<span class=\"chem\">(-pi/2, pi/2)</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Quadrants IV and I (horizontal asymptotes <span class=\"chem\">y = +-pi/2</span>)": "第 4・第 1 象限（水平漸近線 <span class=\"chem\">y = +-pi/2</span>）",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Odd: <span class=\"chem\">arctan(-x) = -arctan(x)</span>": "奇関数：<span class=\"chem\">arctan(-x) = -arctan(x)</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > Additional HL > p
    "Each inverse graph is the reflection of the restricted branch in the line <span class=\"chem\">y = x</span>. The graph of <span class=\"chem\">y = arcsin x</span> rises from <span class=\"chem\">(-1, -pi/2)</span> through the origin to <span class=\"chem\">(1, pi/2)</span>. The graph of <span class=\"chem\">y = arccos x</span> falls from <span class=\"chem\">(-1, pi)</span> through <span class=\"chem\">(0, pi/2)</span> to <span class=\"chem\">(1, 0)</span>. The graph of <span class=\"chem\">y = arctan x</span> rises through the origin, with horizontal asymptotes <span class=\"chem\">y = -pi/2</span> and <span class=\"chem\">y = pi/2</span>.": "逆関数のグラフは、それぞれ制限した枝を直線 <span class=\"chem\">y = x</span> に関して対称移動したものです。<span class=\"chem\">y = arcsin x</span> のグラフは <span class=\"chem\">(-1, -pi/2)</span> から原点を通って <span class=\"chem\">(1, pi/2)</span> まで増加します。<span class=\"chem\">y = arccos x</span> のグラフは <span class=\"chem\">(-1, pi)</span> から <span class=\"chem\">(0, pi/2)</span> を通って <span class=\"chem\">(1, 0)</span> まで減少します。<span class=\"chem\">y = arctan x</span> のグラフは原点を通って増加し、水平漸近線は <span class=\"chem\">y = -pi/2</span> と <span class=\"chem\">y = pi/2</span> です。",

    // Reciprocal ratios, compound-angle identities and inverse tri > key idea > Additional HL > p
    "<strong>Complementary identity:</strong> For every <span class=\"chem\">x in [-1, 1]</span>, <span class=\"chem\">arcsin x + arccos x = pi/2</span>, and <span class=\"chem\">cos(arcsin x) = sin(arccos x) = sqrt(1 - x^2)</span>.": "<strong>余角の恒等式：</strong> すべての <span class=\"chem\">x in [-1, 1]</span> に対して、<span class=\"chem\">arcsin x + arccos x = pi/2</span> および <span class=\"chem\">cos(arcsin x) = sin(arccos x) = sqrt(1 - x^2)</span> が成り立ちます。",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > data-kicker attribute
    "Worked example 3 (AHL 3.9–3.10)": "例題 3 (AHL 3.9–3.10)",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > h3
    "Proving an inverse tangent sum using the compound-angle formula": "加法定理を使って逆正接（arctan）の和を証明する",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > p
    "<strong>[Paper 1 — No GDC]</strong> Without using a calculator, show that <span class=\"chem\">arctan(1/2) + arctan(1/3) = pi/4</span>. <strong>[4 marks]</strong>": "<strong>[Paper 1 — 電卓不可]</strong> 電卓を使わずに、<span class=\"chem\">arctan(1/2) + arctan(1/3) = pi/4</span> であることを示しなさい (Show that)。 <strong>[4 marks]</strong>",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > data-title attribute
    "Label the two acute angles A and B": "2 つの鋭角を A と B とおく",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > p
    "Let A = arctan(1/2) and B = arctan(1/3), so tan A = 1/2 and tan B = 1/3 with 0 &lt; A, B &lt; π/4.": "A = arctan(1/2)、B = arctan(1/3) とおくと、tan A = 1/2、tan B = 1/3 で 0 &lt; A, B &lt; π/4 です。",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > data-title attribute
    "Apply the compound-angle formula for tan(A + B)": "tan(A + B) の加法定理を適用する",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > p
    "Substitute tan A and tan B into tan(A + B) = (tan A + tan B) / (1 − tan A tan B).": "tan(A + B) = (tan A + tan B) / (1 − tan A tan B) に tan A と tan B を代入します。",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > data-title attribute
    "Justify why A + B = π/4 and not 5π/4": "A + B が 5π/4 ではなく π/4 になる理由を示す",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > p
    "Since tan θ = 1 has multiple solutions, we must bound A + B using the range of arctan.": "tan θ = 1 には複数の解があるため、arctan の値域を使って A + B の範囲を絞る必要があります。",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > maths line
    "Since 0 &lt; tan <i>A</i>, tan <i>B</i> &lt; 1, we have 0 &lt; <i>A</i>, <i>B</i> &lt; <span class=\"frac\"><span><i>π</i></span><span>4</span></span> ⇒ 0 &lt; <i>A</i> + <i>B</i> &lt; <span class=\"frac\"><span><i>π</i></span><span>2</span></span> ⇒ <i>A</i> + <i>B</i> = <b><span class=\"frac\"><span><i>π</i></span><span>4</span></span></b> <b>[R1] [AG]</b>": "0 &lt; tan <i>A</i>, tan <i>B</i> &lt; 1 より 0 &lt; <i>A</i>, <i>B</i> &lt; <span class=\"frac\"><span><i>π</i></span><span>4</span></span> ⇒ 0 &lt; <i>A</i> + <i>B</i> &lt; <span class=\"frac\"><span><i>π</i></span><span>2</span></span> ⇒ <i>A</i> + <i>B</i> = <b><span class=\"frac\"><span><i>π</i></span><span>4</span></span></b> <b>[R1] [AG]</b>",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > p
    "arctan(1/2) + arctan(1/3) = π/4": "arctan(1/2) + arctan(1/3) = π/4",

    // Reciprocal ratios, compound-angle identities and inverse tri > not needed for IB > Additional HL > p
    "<strong>Not required from memory in IB Math AA HL:</strong> Product-to-sum and sum-to-product (factor) identities such as <span class=\"chem\">sin A + sin B = 2 sin((A+B)/2) cos((A-B)/2)</span>, as well as the Weierstrass half-angle substitution <span class=\"chem\">t = tan(theta/2)</span>, are <strong>not</strong> in the AA HL syllabus or Formula Booklet. If a Paper 3 investigation uses one of them, the formula will be given in the question for you to prove using <span class=\"chem\">sin(A +- B)</span>.": "<strong>IB Math AA HL で暗記不要なもの：</strong> 積和・和積の公式（<span class=\"chem\">sin A + sin B = 2 sin((A+B)/2) cos((A-B)/2)</span> など）やワイエルシュトラスの半角置換 <span class=\"chem\">t = tan(theta/2)</span> は AA HL のシラバスにも公式集にも含まれて<strong>いません</strong>。Paper 3 の探究問題でこれらを使う場合は、<span class=\"chem\">sin(A +- B)</span> を使って証明できるように問題文に公式が与えられます。",

    // Reciprocal ratios, compound-angle identities and inverse tri > Additional HL > h3
    "Symmetry properties of the trigonometric graphs (AHL 3.11)": "三角関数のグラフの対称性 (AHL 3.11)",

    // Reciprocal ratios, compound-angle identities and inverse tri > Additional HL > p
    "Reflect the point <span class=\"chem\">P(cos theta, sin theta)</span> on the unit circle and you get the angles below. Each row is also a symmetry you can see on the graphs: <span class=\"chem\">y = sin x</span> and <span class=\"chem\">y = tan x</span> have rotational symmetry about the origin (they are <strong>odd</strong> functions), and <span class=\"chem\">y = cos x</span> is symmetric in the <span class=\"chem\">y</span>-axis (an <strong>even</strong> function).": "単位円上の点 <span class=\"chem\">P(cos theta, sin theta)</span> を対称移動すると、下の表の角が得られます。各行はグラフで見える対称性でもあります：<span class=\"chem\">y = sin x</span> と <span class=\"chem\">y = tan x</span> は原点に関して対称（<strong>奇</strong>関数）、<span class=\"chem\">y = cos x</span> は <span class=\"chem\">y</span> 軸に関して対称（<strong>偶</strong>関数）です。",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > caption
    "Symmetry identities from the unit circle": "単位円から得られる対称性の恒等式",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "Angle": "角",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "Unit-circle move": "単位円上の移動",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "Identities": "恒等式",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "What it says about the graphs": "グラフについてわかること",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "<span class=\"chem\">-theta</span>": "<span class=\"chem\">-theta</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Reflect in the <span class=\"chem\">x</span>-axis": "<span class=\"chem\">x</span> 軸に関して対称移動",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">sin(-theta) = -sin theta</span>, <span class=\"chem\">cos(-theta) = cos theta</span>, <span class=\"chem\">tan(-theta) = -tan theta</span>": "<span class=\"chem\">sin(-theta) = -sin theta</span>, <span class=\"chem\">cos(-theta) = cos theta</span>, <span class=\"chem\">tan(-theta) = -tan theta</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "sin and tan are odd; cos is even.": "sin と tan は奇関数、cos は偶関数です。",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "<span class=\"chem\">pi - theta</span>": "<span class=\"chem\">pi - theta</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Reflect in the <span class=\"chem\">y</span>-axis": "<span class=\"chem\">y</span> 軸に関して対称移動",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">sin(pi - theta) = sin theta</span>, <span class=\"chem\">cos(pi - theta) = -cos theta</span>, <span class=\"chem\">tan(pi - theta) = -tan theta</span>": "<span class=\"chem\">sin(pi - theta) = sin theta</span>, <span class=\"chem\">cos(pi - theta) = -cos theta</span>, <span class=\"chem\">tan(pi - theta) = -tan theta</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "The sine curve is symmetric about the line <span class=\"chem\">x = pi/2</span>.": "正弦曲線は直線 <span class=\"chem\">x = pi/2</span> に関して対称です。",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "<span class=\"chem\">pi + theta</span>": "<span class=\"chem\">pi + theta</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Rotate by a half-turn about the origin": "原点のまわりに半回転",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">sin(pi + theta) = -sin theta</span>, <span class=\"chem\">cos(pi + theta) = -cos theta</span>, <span class=\"chem\">tan(pi + theta) = tan theta</span>": "<span class=\"chem\">sin(pi + theta) = -sin theta</span>, <span class=\"chem\">cos(pi + theta) = -cos theta</span>, <span class=\"chem\">tan(pi + theta) = tan theta</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "The tangent graph repeats every <span class=\"chem\">pi</span>.": "タンジェントのグラフは <span class=\"chem\">pi</span> ごとにくり返します。",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "<span class=\"chem\">pi/2 - theta</span>": "<span class=\"chem\">pi/2 - theta</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Reflect in the line <span class=\"chem\">y = x</span>": "直線 <span class=\"chem\">y = x</span> に関して対称移動",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">sin(pi/2 - theta) = cos theta</span>, <span class=\"chem\">cos(pi/2 - theta) = sin theta</span>": "<span class=\"chem\">sin(pi/2 - theta) = cos theta</span>, <span class=\"chem\">cos(pi/2 - theta) = sin theta</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "The cosine graph is the sine graph translated <span class=\"chem\">pi/2</span> to the left: <span class=\"chem\">cos x = sin(x + pi/2)</span>.": "コサインのグラフはサインのグラフを左へ <span class=\"chem\">pi/2</span> 平行移動したものです：<span class=\"chem\">cos x = sin(x + pi/2)</span>。",

    // Reciprocal ratios, compound-angle identities and inverse tri > exam tip (shown in English + translation) > Additional HL > p
    "<strong>These identities are not in the Formula Booklet.</strong> If you forget one, derive it in one line from the compound-angle formulas, for example <span class=\"chem\">sin(pi - theta) = sin pi cos theta - cos pi sin theta = sin theta</span>, or sketch the graph and read off the symmetry.": "<strong>これらの恒等式は公式集に載っていません。</strong>忘れたら、加法定理から 1 行で導けます。たとえば <span class=\"chem\">sin(pi - theta) = sin pi cos theta - cos pi sin theta = sin theta</span> です。または、グラフをかいて対称性を読み取りましょう。",

    // Reciprocal ratios, compound-angle identities and inverse tri > try it > Additional HL > p
    "<strong>[AHL · Paper 1]</strong> Evaluate the exact value of <span class=\"chem\">cos(arcsin(3/5))</span>.": "<strong>[AHL · Paper 1]</strong> <span class=\"chem\">cos(arcsin(3/5))</span> の正確な値を求めなさい。",

    // Reciprocal ratios, compound-angle identities and inverse tri > try it > Additional HL > li
    "Let <span class=\"chem\">theta = arcsin(3/5)</span>, which is a Quadrant I acute angle with opposite side <span class=\"mono\">3</span> and hypotenuse <span class=\"mono\">5</span>.": "<span class=\"chem\">theta = arcsin(3/5)</span> とおくと、対辺 <span class=\"mono\">3</span>、斜辺 <span class=\"mono\">5</span> の第 1 象限の鋭角になります。",

    // Reciprocal ratios, compound-angle identities and inverse tri > try it > Additional HL > li
    "By Pythagoras, the adjacent side is <span class=\"chem\">sqrt(5^2 - 3^2) = 4</span>, so <span class=\"chem\">cos theta = 4/5</span>.": "三平方の定理より隣辺は <span class=\"chem\">sqrt(5^2 - 3^2) = 4</span> なので、<span class=\"chem\">cos theta = 4/5</span> です。",

    // Reciprocal ratios, compound-angle identities and inverse tri > try it > Additional HL > maths line
    "cos(arcsin(<span class=\"frac\"><span>3</span><span>5</span></span>)) = √(1 − (<span class=\"frac\"><span>3</span><span>5</span></span>)<sup>2</sup>) = <b><span class=\"frac\"><span>4</span><span>5</span></span> = 0.8</b>": "cos(arcsin(<span class=\"frac\"><span>3</span><span>5</span></span>)) = √(1 − (<span class=\"frac\"><span>3</span><span>5</span></span>)<sup>2</sup>) = <b><span class=\"frac\"><span>4</span><span>5</span></span> = 0.8</b>",

    // Exam-style practice > data-toc attribute
    // Exam-style practice > h2
    "Exam-style practice": "実戦形式の演習",

    // Exam-style practice > p
    "Three sets covering SL unit-circle identities, sinusoidal models, and AHL reciprocal/compound/inverse trigonometry.": "SL の単位円と恒等式、周期モデル、および AHL の逆数比・加法定理・逆三角関数を網羅する 3 つのセットです。",

    // Exam-style practice > h3
    "Foundation: exact values and core identities": "基礎：正確な値と基本恒等式",

    // Exam-style practice > data-title attribute
    "3.2 foundation": "3.2 基礎",

    // Exam-style practice > h3
    "Exam standard: Paper 1 and Paper 2": "試験標準：Paper 1 と Paper 2",

    // Exam-style practice > data-title attribute
    "3.2 exam standard": "3.2 試験標準",

    // Exam-style practice > h3
    "Challenge: level 7 identities and equations": "発展：レベル 7 の恒等式と方程式",

    // Exam-style practice > data-title attribute
    "3.2 challenge": "3.2 発展",

  }
});
