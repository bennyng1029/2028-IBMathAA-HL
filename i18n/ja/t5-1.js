/* t5-1 — ja translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't5-1', {
  strings: {

    // page title (browser tab)
    "5.1 Differentiation, curve analysis and optimization | Analysis Lab": "5.1 微分法・曲線の概形と最大最小問題 | Analysis Lab",

    // Differentiation, curve analysis and optimization > page header > p
    "Topic 5.1 · SL 5.1–5.4, 5.6–5.8": "Topic 5.1 · SL 5.1–5.4, 5.6–5.8",

    // Differentiation, curve analysis and optimization > page header > h1
    "Differentiation, curve analysis and optimization": "微分法・曲線の概形と最大最小問題（最適化）",

    // Differentiation, curve analysis and optimization > page header > span
    "How do the first and second derivatives reveal the exact gradient, turning points, concavity, and optimal values of a function?": "第 1 次導関数と第 2 次導関数は、関数の正確な傾き・極値・凹凸・最適値をどのように明らかにしてくれるのでしょうか？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "チェックリスト",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > checklist > span
    "Interpret the derivative <span class=\"chem\">f'(x)</span> as the gradient of the tangent line and the instantaneous rate of change of <span class=\"chem\">y = f(x)</span>.": "導関数 <span class=\"chem\">f'(x)</span> を接線の傾きおよび <span class=\"chem\">y = f(x)</span> の瞬間変化率として解釈できる。",

    // What you need to be able to do > checklist > span
    "Differentiate powers <span class=\"chem\">x^n</span> (<span class=\"chem\">n</span> rational) and standard functions <span class=\"chem\">sin x</span>, <span class=\"chem\">cos x</span>, <span class=\"chem\">e^x</span>, and <span class=\"chem\">ln x</span>.": "べき関数 <span class=\"chem\">x^n</span>（<span class=\"chem\">n</span> は有理数）および基本関数 <span class=\"chem\">sin x</span>、<span class=\"chem\">cos x</span>、<span class=\"chem\">e^x</span>、<span class=\"chem\">ln x</span> を微分できる。",

    // What you need to be able to do > checklist > span
    "Find equations of tangents and normals at a given point and find where they intersect axes or curves.": "与えられた点における接線と法線の方程式を求め、軸や曲線との交点を求められる。",

    // What you need to be able to do > checklist > span
    "Differentiate composite, product, and quotient functions using the chain rule, product rule, and quotient rule.": "合成関数の微分法（連鎖律）、積の微分法、商の微分法を用いて複合関数を微分できる。",

    // What you need to be able to do > checklist > span
    "Find intervals where <span class=\"chem\">f(x)</span> is increasing or decreasing, classify local maxima and minima using <span class=\"chem\">f'(x)</span> or <span class=\"chem\">f''(x)</span>, and identify stationary and non-stationary points of inflexion.": "<span class=\"chem\">f(x)</span> が増加または減少する区間を求め、<span class=\"chem\">f'(x)</span> や <span class=\"chem\">f''(x)</span> を用いて極大・極小を分類し、停留変曲点および非停留変曲点を特定できる。",

    // What you need to be able to do > checklist > span
    "Connect features across the graphs of <span class=\"chem\">f(x)</span>, <span class=\"chem\">f'(x)</span>, and <span class=\"chem\">f''(x)</span>.": "<span class=\"chem\">f(x)</span>、<span class=\"chem\">f'(x)</span>、<span class=\"chem\">f''(x)</span> のグラフの特徴を相互に結びつけられる。",

    // What you need to be able to do > checklist > span
    "Set up a single-variable objective function using a constraint equation and find maximum or minimum values in context.": "制約条件の式を使って 1 変数の目的関数を立て、文脈の中で最大値または最小値を求められる。",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "問題デコーダー",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "問題デコーダー：使うべき解法を見抜く",

    // Question decoder: spotting which technique to use > p
    "Calculus questions in IB Math AA use recurring trigger phrases. Use this table to translate the wording on the exam paper directly into the required equation and test.": "IB Math AA の微分問題では決まったキーワードが繰り返し登場します。この表を使って、試験問題の表現を必要な方程式と判定法へ直結させましょう。",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — Differentiation, curve analysis and optimization": "問題デコーダー — 微分法・曲線の概形・最適化",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "試験問題に書かれている表現",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "数学的な意味（公式と立式）",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1（電卓不可）vs Paper 2（GDC 可）",

    // Question decoder: spotting which technique to use > table > th
    "“Find the gradient of the curve at <span class=\"chem\">x = a</span>”": "「<span class=\"chem\">x = a</span> における曲線の傾きを求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "Differentiate <span class=\"chem\">f(x)</span> and evaluate <span class=\"chem\">m_T = f'(a)</span>.": "<span class=\"chem\">f(x)</span> を微分し、<span class=\"chem\">m_T = f'(a)</span> を計算します。",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Paper 1:</strong> Differentiate algebraically and substitute <span class=\"chem\">x = a</span>.<br><strong>Paper 2:</strong> Use <span class=\"mono\">nDeriv</span> (<span class=\"chem\">d/dx</span> at <span class=\"chem\">x = a</span>) directly on your GDC.": "<strong>Paper 1：</strong> 数式で微分して <span class=\"chem\">x = a</span> を代入します。<br><strong>Paper 2：</strong> GDC の <span class=\"mono\">nDeriv</span>（<span class=\"chem\">x = a</span> における <span class=\"chem\">d/dx</span>）を直接使います。",

    // Question decoder: spotting which technique to use > table > th
    "“Find the equation of the normal at <span class=\"chem\">x = a</span>”": "「<span class=\"chem\">x = a</span> における法線の方程式を求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "Find point <span class=\"chem\">y_1 = f(a)</span>, tangent gradient <span class=\"chem\">m_T = f'(a)</span>, and normal gradient <span class=\"chem\">m_N = -1 / f'(a)</span>. Then use <span class=\"chem\">y - y_1 = m_N(x - a)</span>.": "接点の座標 <span class=\"chem\">y_1 = f(a)</span>、接線の傾き <span class=\"chem\">m_T = f'(a)</span>、法線の傾き <span class=\"chem\">m_N = -1 / f'(a)</span> を求め、<span class=\"chem\">y - y_1 = m_N(x - a)</span> を使います。",

    // Question decoder: spotting which technique to use > table > td
    "Check if a specific form is requested (<span class=\"chem\">y = mx + c</span> or <span class=\"chem\">ax + by + d = 0</span> with integers). If <span class=\"chem\">f'(a) = 0</span>, the tangent is horizontal (<span class=\"chem\">y = y_1</span>) and the normal is vertical (<span class=\"chem\">x = a</span>).": "指定された形（<span class=\"chem\">y = mx + c</span> や整数係数の <span class=\"chem\">ax + by + d = 0</span>）があるか確認します。<span class=\"chem\">f'(a) = 0</span> のとき、接線は水平（<span class=\"chem\">y = y_1</span>）、法線は垂直（<span class=\"chem\">x = a</span>）になります。",

    // Question decoder: spotting which technique to use > table > th
    "“Find the coordinates of the stationary point(s) / turning point(s) / local maximum or minimum”": "「停留点・極値の座標を求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "Solve <span class=\"chem\">f'(x) = 0</span> for <span class=\"chem\">x</span>, substitute back into <strong>original</strong> <span class=\"chem\">f(x)</span> for <span class=\"chem\">y</span>, and test nature via sign change of <span class=\"chem\">f'(x)</span> or sign of <span class=\"chem\">f''(x)</span>.": "<span class=\"chem\">f'(x) = 0</span> を <span class=\"chem\">x</span> について解き、<strong>元の式</strong> <span class=\"chem\">f(x)</span> に戻して <span class=\"chem\">y</span> を求め、<span class=\"chem\">f'(x)</span> の符号変化または <span class=\"chem\">f''(x)</span> の符号で極値を判定します。",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Paper 1:</strong> Factor <span class=\"chem\">f'(x) = 0</span> and show a sign table or <span class=\"chem\">f''(a)</span> value.<br><strong>Paper 2:</strong> Graph <span class=\"chem\">y = f(x)</span> and use <span class=\"mono\">Maximum</span> / <span class=\"mono\">Minimum</span> (or zeros of <span class=\"chem\">f'(x)</span>).": "<strong>Paper 1：</strong> <span class=\"chem\">f'(x) = 0</span> を因数分解し、増減表または <span class=\"chem\">f''(a)</span> の値を示します。<br><strong>Paper 2：</strong> <span class=\"chem\">y = f(x)</span> のグラフを描き、<span class=\"mono\">Maximum</span> / <span class=\"mono\">Minimum</span>（または <span class=\"chem\">f'(x)</span> の零点）を使います。",

    // Question decoder: spotting which technique to use > table > th
    "“Find the coordinates of the point(s) of inflexion”": "「変曲点の座標を求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "Solve <span class=\"chem\">f''(x) = 0</span> <strong>AND</strong> verify that <span class=\"chem\">f''(x)</span> <strong>changes sign</strong> across that root (concavity switches between <span class=\"chem\">f'' &gt; 0</span> and <span class=\"chem\">f'' &lt; 0</span>).": "<span class=\"chem\">f''(x) = 0</span> を解き、<strong>さらに</strong>その解の前後で <span class=\"chem\">f''(x)</span> の<strong>符号が変わる</strong>（凹凸が <span class=\"chem\">f'' &gt; 0</span> と <span class=\"chem\">f'' &lt; 0</span> の間で切り替わる）ことを確かめます。",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Warning:</strong> <span class=\"chem\">f''(a) = 0</span> alone is <em>not</em> enough (for example, <span class=\"chem\">y = x^4</span> has <span class=\"chem\">f''(0) = 0</span> but no inflexion point). Always draw a sign chart for <span class=\"chem\">f''(x)</span> to earn the reasoning mark <strong>[R1]</strong>!": "<strong>注意：</strong> <span class=\"chem\">f''(a) = 0</span> だけでは<em>不十分</em>です（例：<span class=\"chem\">y = x^4</span> は <span class=\"chem\">f''(0) = 0</span> ですが変曲点はありません）。論証点 <strong>[R1]</strong> を取るために必ず <span class=\"chem\">f''(x)</span> の符号表を書きましょう！",

    // Question decoder: spotting which technique to use > table > th
    "“The diagram shows the graph of <span class=\"chem\">y = f'(x)</span>. Find where <span class=\"chem\">f(x)</span> is increasing, has local extrema, or has points of inflexion.”": "「図は <span class=\"chem\">y = f'(x)</span> のグラフである。<span class=\"chem\">f(x)</span> が増加する区間、極値、変曲点を求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "Read the given graph as the <em>derivative</em>:<br>• <span class=\"chem\">f(x)</span> increasing <span class=\"chem\">&lt;=&gt; f'(x) &gt; 0</span> (above <span class=\"chem\">x</span>-axis).<br>• Local max/min of <span class=\"chem\">f(x)</span> <span class=\"chem\">&lt;=&gt; f'(x)</span> crosses the <span class=\"chem\">x</span>-axis.<br>• Point of inflexion of <span class=\"chem\">f(x)</span> <span class=\"chem\">&lt;=&gt;</span> <strong>turning point (local max/min) of <span class=\"chem\">f'(x)</span></strong>!": "与えられたグラフを<em>導関数</em>として読み取ります：<br>• <span class=\"chem\">f(x)</span> が増加 <span class=\"chem\">&lt;=&gt; f'(x) &gt; 0</span>（<span class=\"chem\">x</span> 軸より上）。<br>• <span class=\"chem\">f(x)</span> の極大・極小 <span class=\"chem\">&lt;=&gt; f'(x)</span> が <span class=\"chem\">x</span> 軸を横切る。<br>• <span class=\"chem\">f(x)</span> の変曲点 <span class=\"chem\">&lt;=&gt;</span> <strong><span class=\"chem\">f'(x)</span> の極大・極小点</strong>！",

    // Question decoder: spotting which technique to use > table > td
    "Before doing anything, circle the axis label (<span class=\"chem\">y = f(x)</span> vs <span class=\"chem\">y = f'(x)</span>). If <span class=\"chem\">f'(x)</span> touches the <span class=\"chem\">x</span>-axis without crossing it, <span class=\"chem\">f(x)</span> has a <strong>stationary point of inflexion</strong>.": "何より先に軸のラベル（<span class=\"chem\">y = f(x)</span> か <span class=\"chem\">y = f'(x)</span> か）に丸をつけましょう。<span class=\"chem\">f'(x)</span> が <span class=\"chem\">x</span> 軸に接して横切らない場合、<span class=\"chem\">f(x)</span> には<strong>停留変曲点</strong>があります。",

    // Question decoder: spotting which technique to use > table > th
    "“Show that the surface area is given by <span class=\"chem\">A(x) = ...</span> and find the value of <span class=\"chem\">x</span> that minimizes <span class=\"chem\">A</span>”": "「表面積が <span class=\"chem\">A(x) = ...</span> で与えられることを示し、<span class=\"chem\">A</span> を最小にする <span class=\"chem\">x</span> の値を求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "1. Write the constraint equation (e.g. fixed volume <span class=\"chem\">V</span>) and isolate the second variable <span class=\"chem\">h</span>.<br>2. Substitute <span class=\"chem\">h</span> into the objective function <span class=\"chem\">A</span>.<br>3. Solve <span class=\"chem\">A'(x) = 0</span> and justify minimum via <span class=\"chem\">A''(x) &gt; 0</span>.": "1. 制約条件の式（例：一定の体積 <span class=\"chem\">V</span>）を書き、2 つ目の変数 <span class=\"chem\">h</span> を孤立させます。<br>2. <span class=\"chem\">h</span> を目的関数 <span class=\"chem\">A</span> に代入します。<br>3. <span class=\"chem\">A'(x) = 0</span> を解き、<span class=\"chem\">A''(x) &gt; 0</span> で最小値であることを示します。",

    // Question decoder: spotting which technique to use > table > td
    "Because the formula for <span class=\"chem\">A(x)</span> is given in a “Show that” part, you can still do the calculus part even if you get stuck on the geometry setup!": "“Show that” の小問で <span class=\"chem\">A(x)</span> の式が与えられているので、図形の設定で詰まっても微分の小問はそのまま解き進めることができます！",

    // Limits, standard derivatives, tangents, normals and differen > data-toc attribute
    "Limits & rules": "極限と微分の公式",

    // Limits, standard derivatives, tangents, normals and differen > h2
    "Limits, standard derivatives, tangents, normals and differentiation rules": "極限・基本関数の導関数・接線・法線と微分法則",

    // Limits, standard derivatives, tangents, normals and differen > p
    "When we zoom in closely on a smooth curve <span class=\"chem\">y = f(x)</span> near a point <span class=\"chem\">P(x, f(x))</span>, the curve looks like a straight line. If we pick a nearby point <span class=\"chem\">Q(x + h, f(x + h))</span>, the chord <span class=\"chem\">PQ</span> has gradient <span class=\"chem\">(f(x + h) - f(x)) / h</span>. As the step <span class=\"chem\">h -&gt; 0</span>, the chord approaches the <dfn data-def=\"A straight line that touches a curve at a point and has the exact same instantaneous gradient f'(x) as the curve at that point.\">tangent line</dfn>, and its limiting gradient is the <dfn data-def=\"The instantaneous rate of change of f(x) with respect to x, giving the gradient of the tangent to y = f(x) at any point x.\">derivative</dfn> <span class=\"chem\">f'(x)</span> (also written <span class=\"chem\">dy/dx</span>).": "滑らかな曲線 <span class=\"chem\">y = f(x)</span> の点 <span class=\"chem\">P(x, f(x))</span> の近くを拡大すると、曲線は直線のように見えます。近くの点 <span class=\"chem\">Q(x + h, f(x + h))</span> をとると、弦 <span class=\"chem\">PQ</span> の傾きは <span class=\"chem\">(f(x + h) - f(x)) / h</span> です。幅 <span class=\"chem\">h -&gt; 0</span> とすると、この弦は<dfn data-def=\"曲線上の 1 点で曲線に接し、その点における曲線の瞬間的な傾き f'(x) と同じ傾きをもつ直線。\">接線 <span class=\"en-term\">(tangent line)</span></dfn>に近づき、その極限の傾きが<dfn data-def=\"x に対する f(x) の瞬間変化率であり、任意の点 x における y = f(x) の接線の傾きを与える関数。\">導関数 <span class=\"en-term\">(derivative)</span></dfn> <span class=\"chem\">f'(x)</span>（<span class=\"chem\">dy/dx</span> とも書く）です。",

    // Limits, standard derivatives, tangents, normals and differen > data-def attribute
    "A straight line that touches a curve at a point and has the exact same instantaneous gradient f'(x) as the curve at that point.": "曲線上の 1 点で曲線に接し、その点における曲線の瞬間的な傾き f'(x) と同じ傾きをもつ直線。",

    // Limits, standard derivatives, tangents, normals and differen > data-def attribute
    "The instantaneous rate of change of f(x) with respect to x, giving the gradient of the tangent to y = f(x) at any point x.": "x に対する f(x) の瞬間変化率であり、任意の点 x における y = f(x) の接線の傾きを与える関数。",

    // Limits, standard derivatives, tangents, normals and differen > h3
    "Power rule and standard derivatives": "べき関数の微分と基本関数の導関数",

    // Limits, standard derivatives, tangents, normals and differen > p
    "For any rational power <span class=\"chem\">n</span>, the power rule brings the exponent down to the front and subtracts <span class=\"chem\">1</span> from the exponent. Before differentiating roots or fractions with <span class=\"chem\">x</span> in the denominator, always rewrite them in index form <span class=\"chem\">a x^n</span> first:": "任意の有理数乗 <span class=\"chem\">n</span> に対して、べき関数の微分公式は指数を前に出し、指数から <span class=\"chem\">1</span> を引きます。根号や分母に <span class=\"chem\">x</span> がある分数を微分する前に、必ず最初にべきの形 <span class=\"chem\">a x^n</span> に書き換えましょう：",

    // Limits, standard derivatives, tangents, normals and differen > li
    "<span class=\"chem\">1 / x^k = x^{-k}</span> (for example, <span class=\"chem\">1 / x^3 = x^{-3} -&gt; -3x^{-4} = -3 / x^4</span>).": "<span class=\"chem\">1 / x^k = x^{-k}</span>（例：<span class=\"chem\">1 / x^3 = x^{-3} -&gt; -3x^{-4} = -3 / x^4</span>）。",

    // Limits, standard derivatives, tangents, normals and differen > li
    "<span class=\"chem\">sqrt(x) = x^{1/2} -&gt; (1/2)x^{-1/2} = 1 / (2 sqrt(x))</span>, and <span class=\"chem\">1 / sqrt(x) = x^{-1/2} -&gt; -(1/2)x^{-3/2}</span>.": "<span class=\"chem\">sqrt(x) = x^{1/2} -&gt; (1/2)x^{-1/2} = 1 / (2 sqrt(x))</span>、また <span class=\"chem\">1 / sqrt(x) = x^{-1/2} -&gt; -(1/2)x^{-3/2}</span>。",

    // Limits, standard derivatives, tangents, normals and differen > li
    "A standalone constant <span class=\"chem\">c</span> has gradient zero (<span class=\"chem\">d/dx (c) = 0</span>), and constants multiplying a function stay in front: <span class=\"chem\">d/dx [k f(x)] = k f'(x)</span>.": "定数項 <span class=\"chem\">c</span> の微分は 0（<span class=\"chem\">d/dx (c) = 0</span>）であり、関数に掛かる定数はそのまま前に出ます：<span class=\"chem\">d/dx [k f(x)] = k f'(x)</span>。",

    // Limits, standard derivatives, tangents, normals and differen > formula booklet note > p
    "<strong>In your formula booklet (SL 5.3 &amp; 5.6):</strong> Standard derivatives given in the booklet:": "<strong>公式集（Formula booklet）に掲載 (SL 5.3 &amp; 5.6)：</strong> 公式集に載っている基本関数の導関数：",

    // Limits, standard derivatives, tangents, normals and differen > formula booklet note > li
    "<span class=\"chem\">f(x) = sin x =&gt; f'(x) = cos x</span> and <span class=\"chem\">f(x) = cos x =&gt; f'(x) = -sin x</span>": "<span class=\"chem\">f(x) = sin x =&gt; f'(x) = cos x</span> および <span class=\"chem\">f(x) = cos x =&gt; f'(x) = -sin x</span>",

    // Limits, standard derivatives, tangents, normals and differen > formula booklet note > li
    "<span class=\"chem\">f(x) = e^x =&gt; f'(x) = e^x</span> and <span class=\"chem\">f(x) = ln x =&gt; f'(x) = 1/x</span>": "<span class=\"chem\">f(x) = e^x =&gt; f'(x) = e^x</span> および <span class=\"chem\">f(x) = ln x =&gt; f'(x) = 1/x</span>",

    // Limits, standard derivatives, tangents, normals and differen > common mistake > p
    "<strong>Common mistake — Degrees vs radians and expanding before differentiating:</strong><br> 1. The formulas <span class=\"chem\">d/dx (sin x) = cos x</span> and <span class=\"chem\">d/dx (cos x) = -sin x</span> are valid <strong>only when <span class=\"chem\">x</span> is in radians</strong>.<br> 2. When given a single-term denominator like <span class=\"chem\">y = (x^3 - 4x + 1) / x^2</span>, do <em>not</em> jump straight to the quotient rule! Split the fraction into powers first: <span class=\"chem\">y = x - 4x^{-1} + x^{-2}</span>, then differentiate term by term in one line: <span class=\"chem\">dy/dx = 1 + 4x^{-2} - 2x^{-3}</span>.": "<strong>よくある間違い — 度数法と弧度法、および微分前の展開：</strong><br> 1. <span class=\"chem\">d/dx (sin x) = cos x</span> と <span class=\"chem\">d/dx (cos x) = -sin x</span> が成り立つのは、<strong><span class=\"chem\">x</span> がラジアン（弧度法）のときだけ</strong>です。<br> 2. <span class=\"chem\">y = (x^3 - 4x + 1) / x^2</span> のように分母が単項式のとき、いきなり商の微分法に飛びついては<em>いけません</em>！まず分数をべきの和に分け：<span class=\"chem\">y = x - 4x^{-1} + x^{-2}</span>、それから 1 行で項ごとに微分します：<span class=\"chem\">dy/dx = 1 + 4x^{-2} - 2x^{-3}</span>。",

    // Limits, standard derivatives, tangents, normals and differen > h3
    "Tangents and normals": "接線と法線",

    // Limits, standard derivatives, tangents, normals and differen > p
    "At the point on <span class=\"chem\">y = f(x)</span> where <span class=\"chem\">x = a</span>, the <span class=\"chem\">y</span>-coordinate is <span class=\"chem\">y_1 = f(a)</span> and the tangent gradient is <span class=\"chem\">m_T = f'(a)</span>. The <dfn data-def=\"The straight line perpendicular to the tangent line at the point of contact (a, f(a)), with gradient m_N = -1 / f'(a).\">normal line</dfn> is perpendicular to the tangent at <span class=\"chem\">(a, f(a))</span>, so its gradient is the negative reciprocal <span class=\"chem\">m_N = -1 / m_T = -1 / f'(a)</span> (provided <span class=\"chem\">f'(a) != 0</span>).": "<span class=\"chem\">y = f(x)</span> 上の <span class=\"chem\">x = a</span> の点では、<span class=\"chem\">y</span> 座標は <span class=\"chem\">y_1 = f(a)</span>、接線の傾きは <span class=\"chem\">m_T = f'(a)</span> です。<dfn data-def=\"接点 (a, f(a)) において接線に垂直な直線。傾きは m_N = -1 / f'(a)。\">法線 <span class=\"en-term\">(normal line)</span></dfn>は <span class=\"chem\">(a, f(a))</span> で接線に垂直なので、その傾きは負の逆数 <span class=\"chem\">m_N = -1 / m_T = -1 / f'(a)</span> です（<span class=\"chem\">f'(a) != 0</span> のとき）。",

    // Limits, standard derivatives, tangents, normals and differen > data-def attribute
    "The straight line perpendicular to the tangent line at the point of contact (a, f(a)), with gradient m_N = -1 / f'(a).": "接点 (a, f(a)) において接線に垂直な直線。傾きは m_N = -1 / f'(a)。",

    // Limits, standard derivatives, tangents, normals and differen > equation > maths line
    "Tangent: <i>y</i> − <i>f</i>(<i>a</i>) = <i>f'</i>(<i>a</i>)(<i>x</i> − <i>a</i>) &nbsp;&nbsp;|&nbsp;&nbsp; Normal: <i>y</i> − <i>f</i>(<i>a</i>) = −<span class=\"frac\"><span>1</span><span><i>f'</i>(<i>a</i>)</span></span>(<i>x</i> − <i>a</i>)": "接線：<i>y</i> − <i>f</i>(<i>a</i>) = <i>f'</i>(<i>a</i>)(<i>x</i> − <i>a</i>) &nbsp;&nbsp;|&nbsp;&nbsp; 法線：<i>y</i> − <i>f</i>(<i>a</i>) = −<span class=\"frac\"><span>1</span><span><i>f'</i>(<i>a</i>)</span></span>(<i>x</i> − <i>a</i>)",

    // Limits, standard derivatives, tangents, normals and differen > equation > dd
    "point of contact on the curve": "曲線上の接点",

    // Limits, standard derivatives, tangents, normals and differen > equation > dd
    "gradient of the tangent at <i>x</i> = <i>a</i>": "<i>x</i> = <i>a</i> における接線の傾き",

    // Limits, standard derivatives, tangents, normals and differen > equation > dd
    "gradient of the normal at <i>x</i> = <i>a</i>": "<i>x</i> = <i>a</i> における法線の傾き",

    // Limits, standard derivatives, tangents, normals and differen > widget > data-title attribute
    "Tangent, normal and secant limit explorer": "接線・法線・割線の極限エクスプローラー",

    // Limits, standard derivatives, tangents, normals and differen > widget > figcaption
    "Choose a function, move the point of contact <span class=\"chem\">x_0</span>, and shrink the secant step <span class=\"chem\">h -&gt; 0</span> to see the secant chord lock onto the tangent line while the normal stays perpendicular.": "関数を選び、接点 <span class=\"chem\">x_0</span> を動かし、割線の幅 <span class=\"chem\">h -&gt; 0</span> を縮めて、割線が接線に重なり法線が常に垂直を保つ様子を観察しましょう。",

    // Limits, standard derivatives, tangents, normals and differen > h3
    "Chain rule, product rule, and quotient rule": "合成関数の微分法・積の微分法・商の微分法",

    // Limits, standard derivatives, tangents, normals and differen > p
    "When functions are combined by composition, multiplication, or division, you cannot simply differentiate each piece separately. Use the three structural rules from your Formula Booklet:": "関数が合成・積・商で組み合わされているとき、各部分を別々に微分するだけではいけません。公式集にある 3 つの微分法則を使いましょう：",

    // Limits, standard derivatives, tangents, normals and differen > table > caption
    "Differentiation rules for composite, product and quotient functions (SL 5.6)": "合成関数・積・商の微分法則 (SL 5.6)",

    // Limits, standard derivatives, tangents, normals and differen > table > th
    "Rule": "法則",

    // Limits, standard derivatives, tangents, normals and differen > table > th
    "When to use it": "使う場面",

    // Limits, standard derivatives, tangents, normals and differen > table > th
    "Formula Booklet form &amp; fast pattern": "公式集の式と素早いパターン",

    // Limits, standard derivatives, tangents, normals and differen > table > th
    "Quick example": "例",

    // Limits, standard derivatives, tangents, normals and differen > table > th
    "Chain rule": "合成関数の微分法（連鎖律）",

    // Limits, standard derivatives, tangents, normals and differen > table > td
    "A function <em>inside</em> another function: <span class=\"chem\">y = f(g(x))</span>.": "関数<em>の中に</em>別の関数が入っている：<span class=\"chem\">y = f(g(x))</span>。",

    // Limits, standard derivatives, tangents, normals and differen > table > td
    "<span class=\"chem\">dy/dx = (dy/du) * (du/dx) = f'(g(x)) * g'(x)</span><br><em>(“Differentiate the outside leaving the inside alone, then multiply by the derivative of the inside.”)</em>": "<span class=\"chem\">dy/dx = (dy/du) * (du/dx) = f'(g(x)) * g'(x)</span><br><em>（「中身をそのままにして外側を微分し、中身の微分を掛ける。」）</em>",

    // Limits, standard derivatives, tangents, normals and differen > table > td
    "<span class=\"chem\">d/dx [e^{3x^2}] = e^{3x^2} * 6x</span><br><span class=\"chem\">d/dx [ln(5x - 2)] = 5 / (5x - 2)</span><br><span class=\"chem\">d/dx [cos(4x)] = -4 sin(4x)</span>": "<span class=\"chem\">d/dx [e^{3x^2}] = e^{3x^2} * 6x</span><br><span class=\"chem\">d/dx [ln(5x - 2)] = 5 / (5x - 2)</span><br><span class=\"chem\">d/dx [cos(4x)] = -4 sin(4x)</span>",

    // Limits, standard derivatives, tangents, normals and differen > table > th
    "Product rule": "積の微分法",

    // Limits, standard derivatives, tangents, normals and differen > table > td
    "Two functions of <span class=\"chem\">x</span> multiplied together: <span class=\"chem\">y = u(x) v(x)</span>.": "2 つの <span class=\"chem\">x</span> の関数が掛け合わされている：<span class=\"chem\">y = u(x) v(x)</span>。",

    // Limits, standard derivatives, tangents, normals and differen > table > td
    "<span class=\"chem\">dy/dx = u (dv/dx) + v (du/dx) = u v' + v u'</span><br><em>(“First times derivative of second, plus second times derivative of first.”)</em>": "<span class=\"chem\">dy/dx = u (dv/dx) + v (du/dx) = u v' + v u'</span><br><em>（「前そのまま×後ろ微分 ＋ 後ろそのまま×前微分。」）</em>",

    // Limits, standard derivatives, tangents, normals and differen > table > th
    "Quotient rule": "商の微分法",

    // Limits, standard derivatives, tangents, normals and differen > table > td
    "One function of <span class=\"chem\">x</span> divided by another: <span class=\"chem\">y = u(x) / v(x)</span>.": "ある <span class=\"chem\">x</span> の関数を別の関数で割っている：<span class=\"chem\">y = u(x) / v(x)</span>。",

    // Limits, standard derivatives, tangents, normals and differen > table > td
    "<span class=\"chem\">dy/dx = (v (du/dx) - u (dv/dx)) / v^2 = (v u' - u v') / v^2</span><br><em>(“Bottom times derivative of top, minus top times derivative of bottom, all over bottom squared.”)</em>": "<span class=\"chem\">dy/dx = (v (du/dx) - u (dv/dx)) / v^2 = (v u' - u v') / v^2</span><br><em>（「（分母×分子の微分 − 分子×分母の微分）÷ 分母の 2 乗。」）</em>",

    // Limits, standard derivatives, tangents, normals and differen > table > td
    "<span class=\"chem\">y = (ln x) / x</span>:<br><span class=\"chem\">y' = (x(1/x) - (ln x)(1)) / x^2 = (1 - ln x) / x^2</span>": "<span class=\"chem\">y = (ln x) / x</span>：<br><span class=\"chem\">y' = (x(1/x) - (ln x)(1)) / x^2 = (1 - ln x) / x^2</span>",

    // Limits, standard derivatives, tangents, normals and differen > exam tip (shown in English + translation) > p
    "<strong>Exam tip — Factoring after the product or quotient rule:</strong> Whenever a question asks you to solve <span class=\"chem\">f'(x) = 0</span> after using the product or quotient rule, <strong>do not expand</strong> brackets! Instead, factor out common terms (especially <span class=\"chem\">e^{kx}</span>, which is never zero, or fractional powers like <span class=\"chem\">(2x + 1)^{-1/2}</span>). For a quotient <span class=\"chem\">(v u' - u v') / v^2 = 0</span>, you only need to set the numerator <span class=\"chem\">v u' - u v' = 0</span> (checking that <span class=\"chem\">v != 0</span>).": "<strong>試験のポイント — 積・商の微分法の後で因数分解する：</strong> 積の微分法や商の微分法を使った後で <span class=\"chem\">f'(x) = 0</span> を解くときは、カッコを<strong>展開しないでください</strong>！代わりに共通因数（特に決して 0 にならない <span class=\"chem\">e^{kx}</span> や <span class=\"chem\">(2x + 1)^{-1/2}</span> のような分数乗）をくくり出しましょう。商 <span class=\"chem\">(v u' - u v') / v^2 = 0</span> では、分子 <span class=\"chem\">v u' - u v' = 0</span> だけをおけば十分です（<span class=\"chem\">v != 0</span> を確認）。",

    // Limits, standard derivatives, tangents, normals and differen > worked example > h3
    "Finding where a normal line intersects a coordinate axis": "法線と座標軸の交点を求める",

    // Limits, standard derivatives, tangents, normals and differen > worked example > p
    "Consider the curve <span class=\"chem\">f(x) = e^{2x - 2} * (x^2 + 1)</span>. The normal to the curve at the point <span class=\"chem\">P</span> where <span class=\"chem\">x = 1</span> intersects the <span class=\"chem\">x</span>-axis at point <span class=\"chem\">Q</span>. Find the exact coordinates of <span class=\"chem\">Q</span>. <strong>[6 marks]</strong>": "曲線 <span class=\"chem\">f(x) = e^{2x - 2} * (x^2 + 1)</span> を考える。<span class=\"chem\">x = 1</span> である点 <span class=\"chem\">P</span> におけるこの曲線の法線が <span class=\"chem\">x</span> 軸と点 <span class=\"chem\">Q</span> で交わる。<span class=\"chem\">Q</span> の正確な座標を求めなさい (Find)。 <strong>[6 marks]</strong>",

    // Limits, standard derivatives, tangents, normals and differen > worked example > data-title attribute
    "Find the y-coordinate of P at x = 1": "x = 1 における P の y 座標を求める",

    // Limits, standard derivatives, tangents, normals and differen > worked example > p
    "Substitute x = 1 into f(x) first so we have the full coordinates of the point of contact P.": "接点 P の完全な座標を得るため、最初に x = 1 を f(x) に代入します。",

    // Limits, standard derivatives, tangents, normals and differen > worked example > data-title attribute
    "Differentiate f(x) using the product rule and chain rule": "積の微分法と合成関数の微分法を使って f(x) を微分する",

    // Limits, standard derivatives, tangents, normals and differen > worked example > p
    "f(x) is a product of u = e^{2x−2} (which needs the chain rule, u' = 2e^{2x−2}) and v = x² + 1 (v' = 2x).": "f(x) は u = e^{2x−2}（合成関数の微分法が必要で u' = 2e^{2x−2}）と v = x² + 1（v' = 2x）の積です。",

    // Limits, standard derivatives, tangents, normals and differen > worked example > data-title attribute
    "Evaluate the tangent gradient m_T and normal gradient m_N at x = 1": "x = 1 における接線の傾き m_T と法線の傾き m_N を計算する",

    // Limits, standard derivatives, tangents, normals and differen > worked example > p
    "Substitute x = 1 into f'(x) to get m_T, then take the negative reciprocal for the normal.": "x = 1 を f'(x) に代入して m_T を求め、その負の逆数をとって法線の傾きにします。",

    // Limits, standard derivatives, tangents, normals and differen > worked example > data-title attribute
    "Write the equation of the normal and set y = 0 for the x-intercept Q": "法線の方程式を書き、x 切片 Q を求めるために y = 0 とおく",

    // Limits, standard derivatives, tangents, normals and differen > worked example > p
    "Use point-gradient form at P(1, 2), then substitute y = 0 where the normal crosses the x-axis.": "点 P(1, 2) を通る直線の式を作り、法線が x 軸と交わる点なので y = 0 を代入します。",

    // Limits, standard derivatives, tangents, normals and differen > try it > p
    "Let <span class=\"chem\">f(x) = x^3 - 6x + 4</span>. Calculate the gradient <span class=\"chem\">f'(1)</span> of the tangent to the curve at <span class=\"chem\">x = 1</span>.": "<span class=\"chem\">f(x) = x^3 - 6x + 4</span> とする。<span class=\"chem\">x = 1</span> における曲線の接線の傾き <span class=\"chem\">f'(1)</span> を計算しなさい (Calculate)。",

    // Limits, standard derivatives, tangents, normals and differen > try it > li
    "Differentiate term by term using the power rule: <span class=\"chem\">f'(x) = 3x^2 - 6</span>.": "べき関数の微分公式で項ごとに微分します：<span class=\"chem\">f'(x) = 3x^2 - 6</span>。",

    // Limits, standard derivatives, tangents, normals and differen > try it > li
    "Substitute <span class=\"chem\">x = 1</span> into <span class=\"chem\">f'(x) = 3(1)^2 - 6</span>.": "<span class=\"chem\">f'(x) = 3(1)^2 - 6</span> に <span class=\"chem\">x = 1</span> を代入します。",

    // Increasing and decreasing functions, concavity, and connecti > data-toc attribute
    "Curve analysis": "曲線の概形と凹凸",

    // Increasing and decreasing functions, concavity, and connecti > h2
    "Increasing and decreasing functions, concavity, and connecting <span class=\"chem\">f</span>, <span class=\"chem\">f'</span> and <span class=\"chem\">f''</span>": "増加・減少、凹凸と <span class=\"chem\">f</span>, <span class=\"chem\">f'</span>, <span class=\"chem\">f''</span> の関係",

    // Increasing and decreasing functions, concavity, and connecti > p
    "The first derivative <span class=\"chem\">f'(x)</span> tells you the direction of the curve (going uphill or downhill), while the second derivative <span class=\"chem\">f''(x) = d^2y / dx^2</span> tells you the rate of change of the gradient itself—that is, how the curve bends (<dfn data-def=\"Whether a curve bends upwards like a cup (concave up, f''(x) &gt; 0, tangent lies below the curve) or downwards like a cap (concave down, f''(x) &lt; 0, tangent lies above the curve).\">concavity</dfn>).": "第 1 次導関数 <span class=\"chem\">f'(x)</span> は曲線の向き（上りか下りか）を教え、第 2 次導関数 <span class=\"chem\">f''(x) = d^2y / dx^2</span> は傾き自体の変化率——すなわち曲線がどちらに曲がっているか（<dfn data-def=\"曲線がお椀のように上向きに曲がっているか（下に凸、f''(x) &gt; 0、接線が曲線の下にある）、傘のように下向きに曲がっているか（上に凸、f''(x) &lt; 0、接線が曲線の上にある）を表す性質。\">凹凸 <span class=\"en-term\">(concavity)</span></dfn>）を教えてくれます。",

    // Increasing and decreasing functions, concavity, and connecti > data-def attribute
    "Whether a curve bends upwards like a cup (concave up, f''(x) > 0, tangent lies below the curve) or downwards like a cap (concave down, f''(x) < 0, tangent lies above the curve).": "曲線がお椀のように上向きに曲がっているか（下に凸、f''(x) > 0、接線が曲線の下にある）、傘のように下向きに曲がっているか（上に凸、f''(x) < 0、接線が曲線の上にある）を表す性質。",

    // Increasing and decreasing functions, concavity, and connecti > h3
    "Classifying stationary points and points of inflexion": "停留点と変曲点の分類",

    // Increasing and decreasing functions, concavity, and connecti > li
    "<strong>Local maximum:</strong> <span class=\"chem\">f'(x)</span> changes sign from <span class=\"chem\">+</span> to <span class=\"chem\">-</span> across <span class=\"chem\">x = a</span> (or <span class=\"chem\">f''(a) &lt; 0</span>, concave down).": "<strong>極大値：</strong> <span class=\"chem\">x = a</span> の前後で <span class=\"chem\">f'(x)</span> の符号が <span class=\"chem\">+</span> から <span class=\"chem\">-</span> に変わる（または <span class=\"chem\">f''(a) &lt; 0</span> で上に凸）。",

    // Increasing and decreasing functions, concavity, and connecti > li
    "<strong>Local minimum:</strong> <span class=\"chem\">f'(x)</span> changes sign from <span class=\"chem\">-</span> to <span class=\"chem\">+</span> across <span class=\"chem\">x = a</span> (or <span class=\"chem\">f''(a) &gt; 0</span>, concave up).": "<strong>極小値：</strong> <span class=\"chem\">x = a</span> の前後で <span class=\"chem\">f'(x)</span> の符号が <span class=\"chem\">-</span> から <span class=\"chem\">+</span> に変わる（または <span class=\"chem\">f''(a) &gt; 0</span> で下に凸）。",

    // Increasing and decreasing functions, concavity, and connecti > li
    "<strong>Stationary (horizontal) point of inflexion:</strong> <span class=\"chem\">f'(x)</span> has the <em>same</em> sign on both sides of <span class=\"chem\">x = a</span> (either <span class=\"chem\">+</span> to <span class=\"chem\">0</span> to <span class=\"chem\">+</span>, like <span class=\"chem\">y = x^3</span>, or <span class=\"chem\">-</span> to <span class=\"chem\">0</span> to <span class=\"chem\">-</span>). Here <span class=\"chem\">f''(a) = 0</span> and <span class=\"chem\">f''(x)</span> changes sign.": "<strong>停留（水平）変曲点：</strong> <span class=\"chem\">x = a</span> の両側で <span class=\"chem\">f'(x)</span> が<em>同じ</em>符号をもつ（<span class=\"chem\">y = x^3</span> のように <span class=\"chem\">+</span> から <span class=\"chem\">0</span> を経て <span class=\"chem\">+</span>、または <span class=\"chem\">-</span> から <span class=\"chem\">0</span> を経て <span class=\"chem\">-</span>）。このとき <span class=\"chem\">f''(a) = 0</span> かつ <span class=\"chem\">f''(x)</span> の符号が変化します。",

    // Increasing and decreasing functions, concavity, and connecti > li
    "<strong>General <dfn data-def=\"A point on a curve where the concavity changes (from concave up to concave down, or vice versa), meaning f''(x) changes sign across the point.\">point of inflexion</dfn>:</strong> Any point where the curve switches between concave up (<span class=\"chem\">f''(x) &gt; 0</span>) and concave down (<span class=\"chem\">f''(x) &lt; 0</span>). A point of inflexion can be <strong>stationary</strong> (<span class=\"chem\">f'(a) = 0</span>) or <strong>non-stationary</strong> (<span class=\"chem\">f'(a) != 0</span>, where the gradient reaches a steepest local extremum).": "<strong>一般の<dfn data-def=\"曲線上で凹凸が切り替わる（下に凸から上に凸、またはその逆）点。すなわち前後で f''(x) の符号が変わる点。\">変曲点 <span class=\"en-term\">(point of inflexion)</span></dfn>：</strong> 曲線が下に凸（<span class=\"chem\">f''(x) &gt; 0</span>）と上に凸（<span class=\"chem\">f''(x) &lt; 0</span>）の間で切り替わるすべての点です。変曲点は<strong>停留点</strong>（<span class=\"chem\">f'(a) = 0</span>）の場合も、<strong>非停留点</strong>（<span class=\"chem\">f'(a) != 0</span> で傾きが極値になる点）の場合もあります。",

    // Increasing and decreasing functions, concavity, and connecti > data-def attribute
    "A point on a curve where the concavity changes (from concave up to concave down, or vice versa), meaning f''(x) changes sign across the point.": "曲線上で凹凸が切り替わる（下に凸から上に凸、またはその逆）点。すなわち前後で f''(x) の符号が変わる点。",

    // Increasing and decreasing functions, concavity, and connecti > common mistake > p
    "<strong>Crucial trap — <span class=\"chem\">f''(a) = 0</span> does NOT guarantee a point of inflexion!</strong><br> Consider <span class=\"chem\">f(x) = x^4</span> at <span class=\"chem\">x = 0</span>: we have <span class=\"chem\">f'(x) = 4x^3 = 0</span> and <span class=\"chem\">f''(x) = 12x^2 = 0</span> at <span class=\"chem\">x = 0</span>. However, for both <span class=\"chem\">x &lt; 0</span> and <span class=\"chem\">x &gt; 0</span>, <span class=\"chem\">f''(x) = 12x^2 &gt; 0</span> (concave up on both sides!), so <span class=\"chem\">(0, 0)</span> is a <strong>local minimum</strong>, not a point of inflexion. Whenever the Second Derivative Test gives <span class=\"chem\">f''(a) = 0</span>, the test is inconclusive—you <em>must</em> check a sign table of <span class=\"chem\">f'(x)</span> or <span class=\"chem\">f''(x)</span> on either side of <span class=\"chem\">x = a</span>.": "<strong>重要な罠 — <span class=\"chem\">f''(a) = 0</span> でも変曲点とは限らない！</strong><br> <span class=\"chem\">x = 0</span> における <span class=\"chem\">f(x) = x^4</span> を考えてみましょう：<span class=\"chem\">x = 0</span> で <span class=\"chem\">f'(x) = 4x^3 = 0</span> かつ <span class=\"chem\">f''(x) = 12x^2 = 0</span> です。しかし <span class=\"chem\">x &lt; 0</span> でも <span class=\"chem\">x &gt; 0</span> でも <span class=\"chem\">f''(x) = 12x^2 &gt; 0</span>（両側とも下に凸！）なので、<span class=\"chem\">(0, 0)</span> は変曲点ではなく<strong>極小点</strong>です。第 2 次導関数判定で <span class=\"chem\">f''(a) = 0</span> となったときは判定不能なので、<em>必ず</em> <span class=\"chem\">x = a</span> の両側で <span class=\"chem\">f'(x)</span> または <span class=\"chem\">f''(x)</span> の符号表を確認しましょう。",

    // Increasing and decreasing functions, concavity, and connecti > h3
    "Master dictionary: connecting <span class=\"chem\">f(x)</span>, <span class=\"chem\">f'(x)</span>, and <span class=\"chem\">f''(x)</span>": "完全対応表：<span class=\"chem\">f(x)</span>、<span class=\"chem\">f'(x)</span>、<span class=\"chem\">f''(x)</span> のつながり",

    // Increasing and decreasing functions, concavity, and connecti > table > caption
    "How features of y = f(x) appear on the graphs of y = f'(x) and y = f''(x)": "y = f(x) の特徴が y = f'(x) と y = f''(x) のグラフにどう現れるか",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "Feature on <span class=\"chem\">y = f(x)</span>": "<span class=\"chem\">y = f(x)</span> 上の特徴",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "What happens on <span class=\"chem\">y = f'(x)</span>": "<span class=\"chem\">y = f'(x)</span> での対応",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "What happens on <span class=\"chem\">y = f''(x)</span>": "<span class=\"chem\">y = f''(x)</span> での対応",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "<span class=\"chem\">f(x)</span> is increasing": "<span class=\"chem\">f(x)</span> が増加",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">f'(x) &gt; 0</span> (graph of <span class=\"chem\">f'</span> lies <strong>above</strong> the <span class=\"chem\">x</span>-axis)": "<span class=\"chem\">f'(x) &gt; 0</span>（<span class=\"chem\">f'</span> のグラフが <span class=\"chem\">x</span> 軸より<strong>上</strong>）",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "<span class=\"chem\">f(x)</span> is decreasing": "<span class=\"chem\">f(x)</span> が減少",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">f'(x) &lt; 0</span> (graph of <span class=\"chem\">f'</span> lies <strong>below</strong> the <span class=\"chem\">x</span>-axis)": "<span class=\"chem\">f'(x) &lt; 0</span>（<span class=\"chem\">f'</span> のグラフが <span class=\"chem\">x</span> 軸より<strong>下</strong>）",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "Local maximum of <span class=\"chem\">f(x)</span>": "<span class=\"chem\">f(x)</span> の極大",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">x</span>-intercept where <span class=\"chem\">f'(x)</span> crosses from <strong>above to below</strong> (<span class=\"chem\">+ -&gt; -</span>)": "<span class=\"chem\">f'(x)</span> が<strong>上から下</strong>（<span class=\"chem\">+ -&gt; -</span>）へ <span class=\"chem\">x</span> 軸を横切る切片",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">f''(x) &lt; 0</span> (below the <span class=\"chem\">x</span>-axis)": "<span class=\"chem\">f''(x) &lt; 0</span>（<span class=\"chem\">x</span> 軸より下）",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "Local minimum of <span class=\"chem\">f(x)</span>": "<span class=\"chem\">f(x)</span> の極小",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">x</span>-intercept where <span class=\"chem\">f'(x)</span> crosses from <strong>below to above</strong> (<span class=\"chem\">- -&gt; +</span>)": "<span class=\"chem\">f'(x)</span> が<strong>下から上</strong>（<span class=\"chem\">- -&gt; +</span>）へ <span class=\"chem\">x</span> 軸を横切る切片",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">f''(x) &gt; 0</span> (above the <span class=\"chem\">x</span>-axis)": "<span class=\"chem\">f''(x) &gt; 0</span>（<span class=\"chem\">x</span> 軸より上）",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "<span class=\"chem\">f(x)</span> is concave up (<span class=\"chem\">∪</span>)": "<span class=\"chem\">f(x)</span> が下に凸（<span class=\"chem\">∪</span>）",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">f'(x)</span> is <strong>increasing</strong> (positive slope on <span class=\"chem\">f'</span>)": "<span class=\"chem\">f'(x)</span> が<strong>増加</strong>（<span class=\"chem\">f'</span> の傾きが正）",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "<span class=\"chem\">f(x)</span> is concave down (<span class=\"chem\">∩</span>)": "<span class=\"chem\">f(x)</span> が上に凸（<span class=\"chem\">∩</span>）",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">f'(x)</span> is <strong>decreasing</strong> (negative slope on <span class=\"chem\">f'</span>)": "<span class=\"chem\">f'(x)</span> が<strong>減少</strong>（<span class=\"chem\">f'</span> の傾きが負）",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "Point of inflexion of <span class=\"chem\">f(x)</span>": "<span class=\"chem\">f(x)</span> の変曲点",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<strong>Local maximum or minimum (turning point) of <span class=\"chem\">f'(x)</span></strong>": "<strong><span class=\"chem\">f'(x)</span> の極大または極小点</strong>",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">x</span>-intercept where <span class=\"chem\">f''(x) = 0</span> <strong>and crosses the <span class=\"chem\">x</span>-axis</strong>": "<span class=\"chem\">f''(x) = 0</span> となり、<strong>かつ <span class=\"chem\">x</span> 軸を横切る</strong> <span class=\"chem\">x</span> 切片",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "Stationary point of inflexion of <span class=\"chem\">f(x)</span>": "<span class=\"chem\">f(x)</span> の停留変曲点",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">f'(x) = 0</span> and <span class=\"chem\">f'(x)</span> <strong>touches</strong> the <span class=\"chem\">x</span>-axis without crossing": "<span class=\"chem\">f'(x) = 0</span> で、<span class=\"chem\">f'(x)</span> が横切らずに <span class=\"chem\">x</span> 軸に<strong>接する</strong>",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">f''(x) = 0</span> and <span class=\"chem\">f''(x)</span> crosses the <span class=\"chem\">x</span>-axis": "<span class=\"chem\">f''(x) = 0</span> かつ <span class=\"chem\">f''(x)</span> が <span class=\"chem\">x</span> 軸を横切る",

    // Increasing and decreasing functions, concavity, and connecti > widget > data-title attribute
    "Synchronized f(x), f'(x) and f''(x) explorer": "f(x), f'(x), f''(x) 連動エクスプローラー",

    // Increasing and decreasing functions, concavity, and connecti > widget > figcaption
    "Drag <span class=\"chem\">x_0</span> across the domain and compare all three curves at once: zeros of <span class=\"chem\">f'(x)</span> align vertically with turning points of <span class=\"chem\">f(x)</span>, while turning points of <span class=\"chem\">f'(x)</span> (and sign-changing zeros of <span class=\"chem\">f''(x)</span>) align vertically with points of inflexion of <span class=\"chem\">f(x)</span>. Switch to <span class=\"chem\">f(x) = x^4</span> to see why <span class=\"chem\">f''(0) = 0</span> without a sign change is a minimum, not an inflexion point.": "<span class=\"chem\">x_0</span> を定義域内で動かして 3 つの曲線を同時に比べてみましょう：<span class=\"chem\">f'(x)</span> の零点は <span class=\"chem\">f(x)</span> の極値と縦に揃い、<span class=\"chem\">f'(x)</span> の極値（および符号が変わる <span class=\"chem\">f''(x)</span> の零点）は <span class=\"chem\">f(x)</span> の変曲点と縦に揃います。<span class=\"chem\">f(x) = x^4</span> に切り替えて、符号変化のない <span class=\"chem\">f''(0) = 0</span> が変曲点ではなく極小になる理由を確かめましょう。",

    // Increasing and decreasing functions, concavity, and connecti > worked example > h3
    "Classifying stationary and inflexion points of a polynomial": "多項式の停留点と変曲点の分類",

    // Increasing and decreasing functions, concavity, and connecti > worked example > p
    "Consider <span class=\"chem\">f(x) = x^4 - 4x^3 + 10</span>. Find the coordinates of all stationary points and points of inflexion on the graph of <span class=\"chem\">f</span>, justifying their nature. <strong>[7 marks]</strong>": "<span class=\"chem\">f(x) = x^4 - 4x^3 + 10</span> を考える。<span class=\"chem\">f</span> のグラフ上のすべての停留点と変曲点の座標を求め (Find)、その種類を根拠を示して判定しなさい。 <strong>[7 marks]</strong>",

    // Increasing and decreasing functions, concavity, and connecti > worked example > data-title attribute
    "Find f'(x) and solve f'(x) = 0 for stationary points": "f'(x) を求め、f'(x) = 0 を解いて停留点を求める",

    // Increasing and decreasing functions, concavity, and connecti > worked example > p
    "Factor out the highest common power of x to find all roots of f'(x) = 0 cleanly.": "x の最も高い共通のべきをくくり出して、f'(x) = 0 のすべての解をきれいに見つけます。",

    // Increasing and decreasing functions, concavity, and connecti > worked example > maths line
    "<i>f'</i>(<i>x</i>) = 4<i>x</i><sup>3</sup> − 12<i>x</i><sup>2</sup> = 4<i>x</i><sup>2</sup>(<i>x</i> − 3) = 0 ⇒ <i>x</i> = 0 or <i>x</i> = 3 <b>[M1 A1]</b>": "<i>f'</i>(<i>x</i>) = 4<i>x</i><sup>3</sup> − 12<i>x</i><sup>2</sup> = 4<i>x</i><sup>2</sup>(<i>x</i> − 3) = 0 ⇒ <i>x</i> = 0 または <i>x</i> = 3 <b>[M1 A1]</b>",

    // Increasing and decreasing functions, concavity, and connecti > worked example > data-title attribute
    "Find f''(x) and solve f''(x) = 0 for candidate inflexion points": "f''(x) を求め、f''(x) = 0 を解いて変曲点の候補を求める",

    // Increasing and decreasing functions, concavity, and connecti > worked example > p
    "Differentiate f'(x) to get f''(x) and factor to find where concavity can change.": "f'(x) を微分して f''(x) を求め、因数分解して凹凸が変わり得る点を探します。",

    // Increasing and decreasing functions, concavity, and connecti > worked example > maths line
    "<i>f''</i>(<i>x</i>) = 12<i>x</i><sup>2</sup> − 24<i>x</i> = 12<i>x</i>(<i>x</i> − 2) = 0 ⇒ <i>x</i> = 0 or <i>x</i> = 2 <b>[M1 A1]</b>": "<i>f''</i>(<i>x</i>) = 12<i>x</i><sup>2</sup> − 24<i>x</i> = 12<i>x</i>(<i>x</i> − 2) = 0 ⇒ <i>x</i> = 0 または <i>x</i> = 2 <b>[M1 A1]</b>",

    // Increasing and decreasing functions, concavity, and connecti > worked example > data-title attribute
    "Test sign changes of f''(x) and classify every point": "f''(x) の符号変化を調べ、すべての点を分類する",

    // Increasing and decreasing functions, concavity, and connecti > worked example > p
    "For x &lt; 0 (e.g. x = −1), f''(−1) = +36 &gt; 0. For 0 &lt; x &lt; 2 (e.g. x = 1), f''(1) = −12 &lt; 0. For x &gt; 2 (e.g. x = 3), f''(3) = +36 &gt; 0.": "x &lt; 0（例：x = −1）では f''(−1) = +36 &gt; 0。0 &lt; x &lt; 2（例：x = 1）では f''(1) = −12 &lt; 0。x &gt; 2（例：x = 3）では f''(3) = +36 &gt; 0。",

    // Increasing and decreasing functions, concavity, and connecti > worked example > maths line
    "At <i>x</i> = 3: <i>f'</i>(3) = 0 and <i>f''</i>(3) = 36 &gt; 0 ⇒ <b>(3, −17) is a local minimum</b> <b>[R1]</b>": "<i>x</i> = 3 のとき：<i>f'</i>(3) = 0 かつ <i>f''</i>(3) = 36 &gt; 0 ⇒ <b>(3, −17) は極小点</b> <b>[R1]</b>",

    // Increasing and decreasing functions, concavity, and connecti > worked example > maths line
    "At <i>x</i> = 0: <i>f'</i>(0) = 0, <i>f''</i>(0) = 0, and <i>f''</i>(<i>x</i>) changes sign (+ to −) ⇒ <b>(0, 10) is a stationary point of inflexion</b>": "<i>x</i> = 0 のとき：<i>f'</i>(0) = 0、<i>f''</i>(0) = 0 かつ <i>f''</i>(<i>x</i>) の符号が（+ から − へ）変化 ⇒ <b>(0, 10) は停留変曲点</b>",

    // Increasing and decreasing functions, concavity, and connecti > worked example > maths line
    "At <i>x</i> = 2: <i>f</i>(2) = 16 − 32 + 10 = −6, <i>f''</i>(2) = 0, and <i>f''</i>(<i>x</i>) changes sign (− to +) ⇒ <b>(2, −6) is a non-stationary point of inflexion</b> <b>[A1]</b>": "<i>x</i> = 2 のとき：<i>f</i>(2) = 16 − 32 + 10 = −6、<i>f''</i>(2) = 0 かつ <i>f''</i>(<i>x</i>) の符号が（− から + へ）変化 ⇒ <b>(2, −6) は非停留変曲点</b> <b>[A1]</b>",

    // Increasing and decreasing functions, concavity, and connecti > worked example > p
    "Local minimum at <span class=\"chem\">(3, -17)</span>; stationary point of inflexion at <span class=\"chem\">(0, 10)</span>; non-stationary point of inflexion at <span class=\"chem\">(2, -6)</span>.": "極小点 <span class=\"chem\">(3, -17)</span>；停留変曲点 <span class=\"chem\">(0, 10)</span>；非停留変曲点 <span class=\"chem\">(2, -6)</span>。",

    // Increasing and decreasing functions, concavity, and connecti > try it > p
    "For the cubic curve <span class=\"chem\">g(x) = x^3 - 6x^2 + 9x - 5</span>, calculate the <span class=\"chem\">y</span>-coordinate of its point of inflexion.": "3 次曲線 <span class=\"chem\">g(x) = x^3 - 6x^2 + 9x - 5</span> について、その変曲点の <span class=\"chem\">y</span> 座標を計算しなさい (Calculate)。",

    // Increasing and decreasing functions, concavity, and connecti > try it > li
    "Differentiate twice: <span class=\"chem\">g'(x) = 3x^2 - 12x + 9</span> and <span class=\"chem\">g''(x) = 6x - 12</span>.": "2 回微分します：<span class=\"chem\">g'(x) = 3x^2 - 12x + 9</span>、<span class=\"chem\">g''(x) = 6x - 12</span>。",

    // Increasing and decreasing functions, concavity, and connecti > try it > li
    "Set <span class=\"chem\">g''(x) = 0</span> to get <span class=\"chem\">x = 2</span> (where <span class=\"chem\">g''(x)</span> changes sign from negative to positive), then substitute <span class=\"chem\">x = 2</span> into <span class=\"chem\">g(x) = 2^3 - 6(2^2) + 9(2) - 5</span>.": "<span class=\"chem\">g''(x) = 0</span> とおいて <span class=\"chem\">x = 2</span>（ここで <span class=\"chem\">g''(x)</span> は負から正へ符号変化）を得たら、<span class=\"chem\">g(x) = 2^3 - 6(2^2) + 9(2) - 5</span> に <span class=\"chem\">x = 2</span> を代入します。",

    // Optimization in geometric and real-world contexts > data-toc attribute
    "Optimization": "最大・最小問題（最適化）",

    // Optimization in geometric and real-world contexts > h2
    "Optimization in geometric and real-world contexts": "図形・実社会における最大・最小問題（最適化）",

    // Optimization in geometric and real-world contexts > p
    "Optimization problems ask for the largest or smallest possible value of a quantity (such as volume, surface area, profit, or travel time) subject to a fixed constraint. Every IB optimization question follows a reliable four-step structure:": "最適化問題では、与えられた制約条件のもとで、ある量（体積、表面積、利益、移動時間など）の最大値または最小値を求めます。IB の最適化問題はどれも決まった 4 ステップで解けます：",

    // Optimization in geometric and real-world contexts > li
    "<strong>Use the constraint to eliminate the second variable:</strong> Write the constraint equation (for example, fixed volume <span class=\"chem\">V = pi r^2 h = 500</span>), isolate the second variable (<span class=\"chem\">h = 500 / (pi r^2)</span>), and substitute it into the quantity you want to optimize so that your objective function has <strong>only one input variable</strong>.": "<strong>制約条件を使って 2 つ目の変数を消去する：</strong> 制約条件の式（例：一定の体積 <span class=\"chem\">V = pi r^2 h = 500</span>）を書き、2 つ目の変数（<span class=\"chem\">h = 500 / (pi r^2)</span>）について解いて目的の式に代入し、<strong>1 変数だけの関数</strong>にします。",

    // Optimization in geometric and real-world contexts > li
    "<strong>Differentiate and set the derivative to zero:</strong> Rewrite fractions with negative exponents first (<span class=\"chem\">r^{-1}</span> or <span class=\"chem\">r^{-2}</span>), differentiate with respect to your variable, and solve <span class=\"chem\">f'(x) = 0</span>.": "<strong>微分して導関数を 0 とおく：</strong> まず分数を負の指数（<span class=\"chem\">r^{-1}</span> や <span class=\"chem\">r^{-2}</span>）に書き換え、変数で微分して <span class=\"chem\">f'(x) = 0</span> を解きます。",

    // Optimization in geometric and real-world contexts > li
    "<strong>Justify that you found a maximum or minimum:</strong> The markscheme nearly always awards a dedicated mark for proving that your stationary point is indeed a maximum (<span class=\"chem\">f''(x) &lt; 0</span>) or a minimum (<span class=\"chem\">f''(x) &gt; 0</span>).": "<strong>最大または最小であることを示す：</strong> 採点基準では、停留点が確かに極大（<span class=\"chem\">f''(x) &lt; 0</span>）または極小（<span class=\"chem\">f''(x) &gt; 0</span>）であることを証明する部分にほぼ毎回配点があります。",

    // Optimization in geometric and real-world contexts > li
    "<strong>Check domain endpoints and answer the exact question:</strong> If <span class=\"chem\">x</span> is restricted to a closed interval <span class=\"chem\">a &lt;= x &lt;= b</span>, compare <span class=\"chem\">f(x)</span> at the stationary point with the endpoint values <span class=\"chem\">f(a)</span> and <span class=\"chem\">f(b)</span>. Finally, check whether the question asked for the optimal dimension <span class=\"chem\">x</span> or the optimal value <span class=\"chem\">f(x)</span>!": "<strong>定義域の端点を確認し、聞かれていることに正確に答える：</strong> <span class=\"chem\">x</span> が閉区間 <span class=\"chem\">a &lt;= x &lt;= b</span> に制限されている場合は、停留点での <span class=\"chem\">f(x)</span> と端点の値 <span class=\"chem\">f(a)</span>、<span class=\"chem\">f(b)</span> を比較します。最後に、問われているのが最適な長さ <span class=\"chem\">x</span> なのか最適値 <span class=\"chem\">f(x)</span> なのかを確認しましょう！",

    // Optimization in geometric and real-world contexts > not needed for IB > p
    "<strong>Not needed for IB (Scope boundary):</strong> Multivariable optimization using partial derivatives (<span class=\"chem\">∂f/∂x = 0</span>, <span class=\"chem\">∂f/∂y = 0</span>) or Lagrange multipliers is <strong>not</strong> in the IB Math AA syllabus. Every optimization problem in IB Math AA reduces to a function of a <strong>single variable</strong> after substituting the constraint.": "<strong>IB で不要なもの（範囲の境界）：</strong> 偏微分（<span class=\"chem\">∂f/∂x = 0</span>、<span class=\"chem\">∂f/∂y = 0</span>）やラグランジュの未定乗数法を用いた多変数最適化は IB Math AA のシラバスに<strong>含まれません</strong>。IB Math AA の最適化問題はすべて、制約条件を代入すれば<strong>1 変数関数</strong>に帰着します。",

    // Optimization in geometric and real-world contexts > worked example > h3
    "Minimizing the surface area of an open-top rectangular box": "ふたのない直方体の箱の表面積を最小化する",

    // Optimization in geometric and real-world contexts > worked example > p
    "An open-top rectangular container has a square base of side length <span class=\"chem\">x</span> <span class=\"unit\">cm</span>, height <span class=\"chem\">h</span> <span class=\"unit\">cm</span>, and a fixed volume of <span class=\"chem\">108</span> <span class=\"unit\">cm3</span>.<br> (a) Show that the total external surface area <span class=\"chem\">A</span> <span class=\"unit\">cm2</span> of the container is given by <span class=\"chem\">A(x) = x^2 + 432 / x</span>. <strong>[2 marks]</strong><br> (b) Find the value of <span class=\"chem\">x</span> that minimizes the surface area, justifying that it is a minimum, and state the minimum surface area. <strong>[5 marks]</strong>": "ふたのない直方体の容器は、1 辺の長さ <span class=\"chem\">x</span> <span class=\"unit\">cm</span> の正方形の底面と高さ <span class=\"chem\">h</span> <span class=\"unit\">cm</span> をもち、体積が <span class=\"chem\">108</span> <span class=\"unit\">cm3</span> で一定である。<br> (a) 容器の外側の全表面積 <span class=\"chem\">A</span> <span class=\"unit\">cm2</span> が <span class=\"chem\">A(x) = x^2 + 432 / x</span> で与えられることを示しなさい (Show that)。 <strong>[2 marks]</strong><br> (b) 表面積を最小にする <span class=\"chem\">x</span> の値を求め (Find)、最小値である理由を示したうえで、最小の表面積を述べなさい (state)。 <strong>[5 marks]</strong>",

    // Optimization in geometric and real-world contexts > worked example > data-title attribute
    "Part (a): Express h in terms of x using the volume constraint and substitute into A": "(a) 体積の制約式を使って h を x で表し、A に代入する",

    // Optimization in geometric and real-world contexts > worked example > p
    "An open-top box has 1 square base of area x² and 4 vertical rectangular sides each of area xh. In a 'Show that' question, explicitly show the substitution of h.": "ふたのない箱は面積 x² の正方形の底面 1 つと、面積 xh の側面 4 つからなります。「示しなさい」の問題では、h の代入過程を明記しましょう。",

    // Optimization in geometric and real-world contexts > worked example > data-title attribute
    "Part (b): Differentiate A(x) = x² + 432x⁻¹ and solve A'(x) = 0": "(b) A(x) = x² + 432x⁻¹ を微分し、A'(x) = 0 を解く",

    // Optimization in geometric and real-world contexts > worked example > p
    "Rewrite 432/x as 432x⁻¹ before differentiating, then set A'(x) = 0.": "微分する前に 432/x を 432x⁻¹ と書き換えてから、A'(x) = 0 とおきます。",

    // Optimization in geometric and real-world contexts > worked example > data-title attribute
    "Justify minimum using A''(x) and calculate A(6)": "A''(x) で最小値であることを示し、A(6) を計算する",

    // Optimization in geometric and real-world contexts > worked example > p
    "Show A''(6) &gt; 0 to prove it is a minimum, then substitute x = 6 into A(x).": "A''(6) &gt; 0 を示して最小値であることを証明し、x = 6 を A(x) に代入します。",

    // Optimization in geometric and real-world contexts > worked example > maths line
    "<i>A''</i>(<i>x</i>) = 2 + <span class=\"frac\"><span>864</span><span><i>x</i><sup>3</sup></span></span> ⇒ <i>A''</i>(6) = 2 + 4 = 6 &gt; 0, so <i>x</i> = 6 gives a minimum <b>[R1]</b>": "<i>A''</i>(<i>x</i>) = 2 + <span class=\"frac\"><span>864</span><span><i>x</i><sup>3</sup></span></span> ⇒ <i>A''</i>(6) = 2 + 4 = 6 &gt; 0 より <i>x</i> = 6 で最小となる <b>[R1]</b>",

    // Optimization in geometric and real-world contexts > worked example > p
    "<span class=\"chem\">x = 6</span> <span class=\"unit\">cm</span>; minimum surface area <span class=\"chem\">A = 108</span> <span class=\"unit\">cm2</span>.": "<span class=\"chem\">x = 6</span> <span class=\"unit\">cm</span>；最小表面積 <span class=\"chem\">A = 108</span> <span class=\"unit\">cm2</span>。",

    // Optimization in geometric and real-world contexts > try it > p
    "A rectangle has one side along the positive <span class=\"chem\">x</span>-axis, one side along the positive <span class=\"chem\">y</span>-axis, and its opposite vertex <span class=\"chem\">(x, y)</span> on the parabola <span class=\"chem\">y = 24 - 2x^2</span> in the first quadrant (<span class=\"chem\">0 &lt; x &lt; sqrt(12)</span>). Calculate the maximum possible area of the rectangle.": "長方形の 1 辺が正の <span class=\"chem\">x</span> 軸上にあり、もう 1 辺が正の <span class=\"chem\">y</span> 軸上にあり、対角の頂点 <span class=\"chem\">(x, y)</span> が第 1 象限（<span class=\"chem\">0 &lt; x &lt; sqrt(12)</span>）の放物線 <span class=\"chem\">y = 24 - 2x^2</span> 上にある。この長方形の面積の最大値を計算しなさい (Calculate)。",

    // Optimization in geometric and real-world contexts > try it > li
    "Write the area function <span class=\"chem\">A(x) = x y = x(24 - 2x^2) = 24x - 2x^3</span> and differentiate: <span class=\"chem\">A'(x) = 24 - 6x^2</span>.": "面積の関数 <span class=\"chem\">A(x) = x y = x(24 - 2x^2) = 24x - 2x^3</span> を立てて微分します：<span class=\"chem\">A'(x) = 24 - 6x^2</span>。",

    // Optimization in geometric and real-world contexts > try it > li
    "Set <span class=\"chem\">A'(x) = 0</span> with <span class=\"chem\">x &gt; 0</span> to get <span class=\"chem\">x = 2</span>, then evaluate <span class=\"chem\">A(2) = 2(24 - 2(4))</span>.": "<span class=\"chem\">x &gt; 0</span> のもとで <span class=\"chem\">A'(x) = 0</span> とおくと <span class=\"chem\">x = 2</span> が得られるので、<span class=\"chem\">A(2) = 2(24 - 2(4))</span> を計算します。",

    // Optimization in geometric and real-world contexts > try it > maths line
    "<i>A'</i>(<i>x</i>) = 24 − 6<i>x</i><sup>2</sup> = 0 ⇒ <i>x</i> = 2 (since <i>x</i> &gt; 0), and <i>A''</i>(2) = −24 &lt; 0": "<i>A'</i>(<i>x</i>) = 24 − 6<i>x</i><sup>2</sup> = 0 ⇒ <i>x</i> = 2 （<i>x</i> &gt; 0 より）、かつ <i>A''</i>(2) = −24 &lt; 0",

    // Quick practice > data-toc attribute
    "Practice": "演習",

    // Quick practice > h2
    "Quick practice": "確認問題",

    // widget string (assets/js/widgets-t5-1.js)
    "vertical": "鉛直（垂直）",

    // widget string (assets/js/widgets-t5-1.js)
    "limit h → 0": "極限 h → 0",

    // widget string (assets/js/widgets-t5-1.js)
    "Tangent": "接線",

    // widget string (assets/js/widgets-t5-1.js)
    "Normal": "法線",

    // widget string (assets/js/widgets-t5-1.js)
    "Secant PQ": "割線 PQ",

    // widget string (assets/js/widgets-t5-1.js)
    "Graph of f(x) with tangent, normal and secant lines": "接線・法線・割線を描いた f(x) のグラフ",

    // widget string (assets/js/widgets-t5-1.js)
    "Stationary point of inflexion (f' = 0, f'' = 0 & changes sign)": "停留変曲点（f' = 0、f'' = 0 かつ符号変化）",

    // widget string (assets/js/widgets-t5-1.js)
    "Local minimum (f' = 0, f'' = 0 but f'' ≥ 0 on both sides!)": "極小点（f' = 0、f'' = 0 だが両側で f'' ≥ 0！）",

    // widget string (assets/js/widgets-t5-1.js)
    "Local maximum (f' = 0, f'' < 0)": "極大点（f' = 0、f'' < 0）",

    // widget string (assets/js/widgets-t5-1.js)
    "Local minimum (f' = 0, f'' > 0)": "極小点（f' = 0、f'' > 0）",

    // widget string (assets/js/widgets-t5-1.js)
    "Non-stationary point of inflexion (turning point of f', f'' changes sign)": "非停留変曲点（f' の極値、f'' の符号変化）",

    // widget string (assets/js/widgets-t5-1.js)
    "Increasing (f' > 0)": "増加（f' > 0）",

    // widget string (assets/js/widgets-t5-1.js)
    "Decreasing (f' < 0)": "減少（f' < 0）",

    // widget string (assets/js/widgets-t5-1.js)
    "concave up (f'' > 0)": "下に凸（f'' > 0）",

    // widget string (assets/js/widgets-t5-1.js)
    "concave down (f'' < 0)": "上に凸（f'' < 0）",

    // widget string (assets/js/widgets-t5-1.js)
    "Synchronized graphs of f(x), f'(x) and f''(x)": "f(x)、f'(x)、f''(x) の連動グラフ",

  }
});
