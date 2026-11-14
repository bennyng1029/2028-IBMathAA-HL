/* t2-1 — ja translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't2-1', {
  strings: {

    // page title (browser tab)
    "2.1 Lines, functions, domains, inverses and composites | Analysis Lab": "2.1 直線・関数・定義域・逆関数と合成関数 | Analysis Lab",

    // Lines, functions, domains, inverses and composites > page header > p
    "Topic 2.1 · SL 2.1–2.5": "Topic 2.1 · SL 2.1–2.5",

    // Lines, functions, domains, inverses and composites > page header > h1
    "Lines, functions, domains, inverses and composites": "直線・関数・定義域・逆関数と合成関数",

    // Lines, functions, domains, inverses and composites > page header > span
    "How do mathematical rules map allowed inputs to outputs, when can we chain two rules together, and when can a rule be reversed?": "数学的な規則はどのように許された入力を出力へ対応させるのか、2 つの規則をいつ連結できるのか、そしていつ規則を逆向きにたどれるのでしょうか？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "チェックリスト",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > checklist > span
    "Write and convert equations of straight lines between gradient-intercept form <span class=\"chem\">y = mx + c</span>, point-gradient form <span class=\"chem\">y - y_1 = m(x - x_1)</span>, and general form <span class=\"chem\">ax + by + d = 0</span>.": "直線の方程式を、傾き・切片形 <span class=\"chem\">y = mx + c</span>、点・傾き形 <span class=\"chem\">y - y_1 = m(x - x_1)</span>、一般形 <span class=\"chem\">ax + by + d = 0</span> の間で相互に書き換えられる。",

    // What you need to be able to do > checklist > span
    "Use parallel (<span class=\"chem\">m_1 = m_2</span>) and perpendicular (<span class=\"chem\">m_1 m_2 = -1</span>) gradients to find equations of normals and perpendicular bisectors.": "平行条件（<span class=\"chem\">m_1 = m_2</span>）と垂直条件（<span class=\"chem\">m_1 m_2 = -1</span>）を用いて、法線や垂直二等分線の方程式を求められる。",

    // What you need to be able to do > checklist > span
    "Find the natural domain and exact range of a function by checking denominators, even roots, logarithms, turning points, and asymptotes.": "分母・偶数の累乗根・対数・極値（頂点）・漸近線を確認して、関数の自然定義域と正確な値域を求められる。",

    // What you need to be able to do > checklist > span
    "Evaluate and simplify composite functions <span class=\"chem\">(f ∘ g)(x) = f(g(x))</span> and test whether <span class=\"chem\">Range(g)</span> fits inside <span class=\"chem\">Domain(f)</span>.": "合成関数 <span class=\"chem\">(f ∘ g)(x) = f(g(x))</span> を計算・整理でき、<span class=\"chem\">Range(g)</span> が <span class=\"chem\">Domain(f)</span> に収まるかを判定できる。",

    // What you need to be able to do > checklist > span
    "Find the inverse function <span class=\"chem\">f^{-1}(x)</span> algebraically, state its domain and range by swapping with <span class=\"chem\">f</span>, and sketch <span class=\"chem\">y = f^{-1}(x)</span> as a reflection in <span class=\"chem\">y = x</span>.": "逆関数 <span class=\"chem\">f^{-1}(x)</span> を代数的に求め、<span class=\"chem\">f</span> と入れ替えて定義域・値域を述べ、<span class=\"chem\">y = x</span> に関する対称移動として <span class=\"chem\">y = f^{-1}(x)</span> の概形を描ける。",

    // What you need to be able to do > checklist > span
    "Solve <span class=\"chem\">f(x) = f^{-1}(x)</span> efficiently by solving <span class=\"chem\">f(x) = x</span> along the mirror line <span class=\"chem\">y = x</span> (valid when <span class=\"chem\">f</span> is increasing).": "対称軸 <span class=\"chem\">y = x</span> 上で <span class=\"chem\">f(x) = x</span> を解くことにより、<span class=\"chem\">f(x) = f^{-1}(x)</span> を効率よく解ける（<span class=\"chem\">f</span> が増加関数のときに有効）。",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "問題デコーダー",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "問題デコーダー：どの解法を使うか見抜くコツ",

    // Question decoder: spotting which technique to use > p
    "Topic 2 exam questions use short, standard phrases that point to a specific algebraic shortcut. Use this table to translate the wording before you start writing.": "Topic 2 の試験問題では、特定の代数的近道を示す定型フレーズが使われます。解き始める前に、この表で問題文の表現を解法に変換しましょう。",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — Lines, domains, composites and inverses": "問題デコーダー — 直線・定義域・合成関数と逆関数",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "試験問題に書かれている表現",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "数学的な意味（公式と立式）",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1（電卓不可）vs Paper 2（GDC 可）",

    // Question decoder: spotting which technique to use > table > th
    "“Find the perpendicular bisector of <span class=\"chem\">[AB]</span>”": "「線分 <span class=\"chem\">[AB]</span> の垂直二等分線を求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "Line through the <strong>midpoint</strong> <span class=\"chem\">M((x_1+x_2)/2, (y_1+y_2)/2)</span> with <strong>negative reciprocal gradient</strong> <span class=\"chem\">m_2 = -1 / m_1</span>.": "<strong>中点</strong> <span class=\"chem\">M((x_1+x_2)/2, (y_1+y_2)/2)</span> を通り、<strong>負の逆数の傾き</strong> <span class=\"chem\">m_2 = -1 / m_1</span> をもつ直線です。",

    // Question decoder: spotting which technique to use > table > td
    "Find <span class=\"chem\">M</span> and <span class=\"chem\">m_{AB}</span> first, flip and negate to get <span class=\"chem\">m_2</span>, then plug into <span class=\"chem\">y - y_M = m_2(x - x_M)</span>. Clear fractions if <span class=\"chem\">ax + by + d = 0</span> is requested.": "まず <span class=\"chem\">M</span> と <span class=\"chem\">m_{AB}</span> を求め、逆数にして符号を変えた <span class=\"chem\">m_2</span> を <span class=\"chem\">y - y_M = m_2(x - x_M)</span> に代入します。<span class=\"chem\">ax + by + d = 0</span> が指定されていれば分母を払います。",

    // Question decoder: spotting which technique to use > table > th
    "“State the largest possible domain of <span class=\"chem\">f</span>”": "「<span class=\"chem\">f</span> の最大の定義域を述べよ」",

    // Question decoder: spotting which technique to use > table > td
    "Check the 3 domain exclusions: <strong>denominator <span class=\"chem\">!= 0</span></strong>, <strong>inside even root <span class=\"chem\">&gt;= 0</span></strong>, and <strong>inside log <span class=\"chem\">&gt; 0</span></strong>.": "定義域の 3 つの除外条件を確認します：<strong>分母 <span class=\"chem\">!= 0</span></strong>、<strong>偶数の累乗根の中 <span class=\"chem\">&gt;= 0</span></strong>、<strong>対数の中 <span class=\"chem\">&gt; 0</span></strong>。",

    // Question decoder: spotting which technique to use > table > td
    "<strong>P1</strong>: Solve the resulting linear or quadratic inequality. <strong>P2</strong>: Graph <span class=\"chem\">y = f(x)</span> to confirm where the curve exists and where vertical asymptotes sit.": "<strong>Paper 1</strong>：得られた 1 次・2 次不等式を解きます。<strong>Paper 2</strong>：<span class=\"chem\">y = f(x)</span> のグラフを描いて曲線が存在する範囲と鉛直漸近線の位置を確認します。",

    // Question decoder: spotting which technique to use > table > th
    "“Find the range of <span class=\"chem\">f</span> on <span class=\"chem\">a &lt;= x &lt;= b</span>”": "「<span class=\"chem\">a &lt;= x &lt;= b</span> における <span class=\"chem\">f</span> の値域を求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "Set of all <strong><span class=\"chem\">y</span>-values</strong> reached on the given domain. <strong>Do NOT just plug in the endpoints!</strong>": "与えられた定義域上でとるすべての <strong><span class=\"chem\">y</span> の値</strong>の集合です。<strong>端点だけを代入してはいけません！</strong>",

    // Question decoder: spotting which technique to use > table > td
    "Always sketch the graph on <span class=\"chem\">[a, b]</span>. Check both endpoints <span class=\"chem\">f(a), f(b)</span> <em>and</em> any local maximum/minimum (vertex) inside <span class=\"chem\">[a, b]</span>.": "必ず <span class=\"chem\">[a, b]</span> 上のグラフを描きましょう。両端 <span class=\"chem\">f(a), f(b)</span> <em>と</em> <span class=\"chem\">[a, b]</span> 内部の極大・極小（頂点）の両方を調べます。",

    // Question decoder: spotting which technique to use > table > th
    "“Find <span class=\"chem\">(f ∘ g)(x)</span>”": "「<span class=\"chem\">(f ∘ g)(x)</span> を求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "Work <strong>inside-out</strong>: <span class=\"chem\">(f ∘ g)(x) = f(g(x))</span>. Replace every <span class=\"chem\">x</span> in the formula for <span class=\"chem\">f</span> with the entire expression <span class=\"chem\">g(x)</span>.": "<strong>内側から外側へ</strong>計算します：<span class=\"chem\">(f ∘ g)(x) = f(g(x))</span>。<span class=\"chem\">f</span> の式の中のすべての <span class=\"chem\">x</span> を <span class=\"chem\">g(x)</span> の式全体で置き換えます。",

    // Question decoder: spotting which technique to use > table > td
    "If asked for a single number <span class=\"chem\">(f ∘ g)(2)</span>, calculate the number <span class=\"chem\">g(2)</span> first, then plug that number into <span class=\"chem\">f</span>.": "<span class=\"chem\">(f ∘ g)(2)</span> のような数値を問われた場合は、まず <span class=\"chem\">g(2)</span> の値を計算し、その数値を <span class=\"chem\">f</span> に代入します。",

    // Question decoder: spotting which technique to use > table > th
    "“For <span class=\"chem\">(f ∘ g)(x)</span> to exist / be defined…”": "「<span class=\"chem\">(f ∘ g)(x)</span> が存在する / 定義されるためには…」",

    // Question decoder: spotting which technique to use > table > td
    "Every output of the inner function must be a legal input for the outer function: <span class=\"chem\">Range(g)</span> must be a subset of <span class=\"chem\">Domain(f)</span>.": "内側の関数のすべての出力が外側の関数の許された入力になっていなければなりません：<span class=\"chem\">Range(g)</span> が <span class=\"chem\">Domain(f)</span> の部分集合である必要があります。",

    // Question decoder: spotting which technique to use > table > td
    "Find <span class=\"chem\">Range(g)</span> first, then restrict the domain of <span class=\"chem\">g</span> (or adjust a parameter) so that every output satisfies <span class=\"chem\">Domain(f)</span>.": "まず <span class=\"chem\">Range(g)</span> を求め、すべての出力が <span class=\"chem\">Domain(f)</span> を満たすように <span class=\"chem\">g</span> の定義域を制限する（またはパラメーターを調整する）必要があります。",

    // Question decoder: spotting which technique to use > table > th
    "“Find <span class=\"chem\">f^{-1}(a)</span>” (where <span class=\"chem\">a</span> is a number)": "「<span class=\"chem\">f^{-1}(a)</span> を求めよ」（<span class=\"chem\">a</span> は数値）",

    // Question decoder: spotting which technique to use > table > td
    "An input to <span class=\"chem\">f^{-1}</span> is an <strong>output of <span class=\"chem\">f</span></strong>. Do not invert a messy function—just solve <span class=\"chem\">f(x) = a</span>!": "<span class=\"chem\">f^{-1}</span> への入力は <strong><span class=\"chem\">f</span> の出力</strong>です。複雑な関数をわざわざ逆関数にせず、<span class=\"chem\">f(x) = a</span> をそのまま解きましょう！",

    // Question decoder: spotting which technique to use > table > td
    "<strong>P1</strong>: Solve <span class=\"chem\">f(x) = a</span> algebraically and keep the root inside <span class=\"chem\">Domain(f)</span>. <strong>P2</strong>: Intersect <span class=\"chem\">y = f(x)</span> with the horizontal line <span class=\"chem\">y = a</span>.": "<strong>Paper 1</strong>：<span class=\"chem\">f(x) = a</span> を代数的に解き、<span class=\"chem\">Domain(f)</span> に含まれる解を残します。<strong>Paper 2</strong>：<span class=\"chem\">y = f(x)</span> と水平線 <span class=\"chem\">y = a</span> の交点を求めます。",

    // Question decoder: spotting which technique to use > table > th
    "“Solve <span class=\"chem\">f(x) = f^{-1}(x)</span>”": "「<span class=\"chem\">f(x) = f^{-1}(x)</span> を解け」",

    // Question decoder: spotting which technique to use > table > td
    "A curve and its reflection in <span class=\"chem\">y = x</span> meet on the mirror line itself (for increasing functions). Solve <strong><span class=\"chem\">f(x) = x</span></strong> instead!": "曲線と <span class=\"chem\">y = x</span> に関する対称な曲線は、（増加関数の場合）対称軸そのものの上で交わります。代わりに <strong><span class=\"chem\">f(x) = x</span></strong> を解きましょう！",

    // Question decoder: spotting which technique to use > table > td
    "Instead of equating a quadratic to a square root (which creates a degree-4 equation), solve the simple equation <span class=\"chem\">f(x) = x</span> inside the restricted domain.": "2 次式と平方根を等置して 4 次方程式にする代わりに、制限された定義域内で簡単な方程式 <span class=\"chem\">f(x) = x</span> を解きます。",

    // Equations of straight lines and perpendicular bisectors > data-toc attribute
    "Straight lines": "直線の方程式",

    // Equations of straight lines and perpendicular bisectors > h2
    "Equations of straight lines and perpendicular bisectors": "直線の方程式と垂直二等分線",

    // Equations of straight lines and perpendicular bisectors > p
    "A straight line in the coordinate plane is completely determined by its steepness—called its <dfn data-def=\"The rate of change of y with respect to x along a line: m = (y₂ − y₁) / (x₂ − x₁).\">gradient</dfn> <span class=\"chem\">m</span>—and a single point on the line. Your Formula Booklet gives three equivalent ways to write the equation of a line.": "座標平面上の直線は、その急さ—<dfn data-def=\"直線に沿った x に対する y の変化率：m = (y₂ − y₁) / (x₂ − x₁)。\">傾き <span class=\"en-term\">(gradient)</span></dfn> <span class=\"chem\">m</span>—と直線上の 1 点によって完全に決まります。公式集（Formula booklet）には直線の方程式を表す 3 通りの同値な形が載っています。",

    // Equations of straight lines and perpendicular bisectors > data-def attribute
    "The rate of change of y with respect to x along a line: m = (y₂ − y₁) / (x₂ − x₁).": "直線に沿った x に対する y の変化率：m = (y₂ − y₁) / (x₂ − x₁)。",

    // Equations of straight lines and perpendicular bisectors > equation > dd
    "gradient of the line (<span class=\"chem\">x_2 != x_1</span>)": "直線の傾き（<span class=\"chem\">x_2 != x_1</span>）",

    // Equations of straight lines and perpendicular bisectors > equation > dd
    "<i>y</i>-intercept (where the line crosses the <i>y</i>-axis at <span class=\"chem\">(0, c)</span>)": "<i>y</i> 切片（直線が <i>y</i> 軸と交わる点 <span class=\"chem\">(0, c)</span>）",

    // Equations of straight lines and perpendicular bisectors > equation > dd
    "any known point lying on the line": "直線上の既知の 1 点",

    // Equations of straight lines and perpendicular bisectors > equation > dd
    "constants in general form (usually integers; any non-zero multiple of the equation is equivalent unless the question says otherwise)": "一般形の定数（通常は整数。問題で指定がない限り、方程式を 0 でない定数倍したものも同値）",

    // Equations of straight lines and perpendicular bisectors > formula booklet note > p
    "<strong>In your Formula Booklet (SL 2.1):</strong> The gradient formula <span class=\"chem\">m = (y_2 - y_1)/(x_2 - x_1)</span> and all three line equations are printed. You must memorize the parallel and perpendicular gradient relationships (the midpoint formula is in the booklet under SL 3.1).": "<strong>公式集（Formula booklet）に掲載 (SL 2.1)：</strong> 傾きの公式 <span class=\"chem\">m = (y_2 - y_1)/(x_2 - x_1)</span> と 3 通りの直線の方程式はすべて掲載されています。平行・垂直の傾きの関係は覚えておく必要があります（中点の公式は公式集の SL 3.1 に掲載されています）。",

    // Equations of straight lines and perpendicular bisectors > h3
    "Parallel lines, perpendicular lines and perpendicular bisectors": "平行線・垂線と垂直二等分線",

    // Equations of straight lines and perpendicular bisectors > li
    "<strong>Parallel lines</strong> never intersect and have the <strong>same gradient</strong>: <span class=\"chem\">m_1 = m_2</span>.": "<strong>平行線</strong>は決して交わらず、<strong>同じ傾き</strong>をもちます：<span class=\"chem\">m_1 = m_2</span>。",

    // Equations of straight lines and perpendicular bisectors > li
    "<strong>Perpendicular lines</strong> meet at <span class=\"chem\">90°</span>. Their gradients are <strong>negative reciprocals</strong> of each other: <span class=\"chem\">m_1 m_2 = -1</span>, so <span class=\"chem\">m_2 = -1 / m_1</span>. (A horizontal line <span class=\"chem\">y = k</span> has gradient <span class=\"chem\">0</span> and is perpendicular to a vertical line <span class=\"chem\">x = h</span>, whose gradient is undefined.)": "<strong>垂線</strong>は <span class=\"chem\">90°</span> で交わります。傾きは互いに<strong>負の逆数</strong>になります：<span class=\"chem\">m_1 m_2 = -1</span>、すなわち <span class=\"chem\">m_2 = -1 / m_1</span>。（水平線 <span class=\"chem\">y = k</span> の傾きは <span class=\"chem\">0</span> であり、傾きが未定義の鉛直線 <span class=\"chem\">x = h</span> と直交します。）",

    // Equations of straight lines and perpendicular bisectors > data-def attribute
    "The line that passes through the midpoint of segment [AB] at a 90° angle to [AB]. Every point on it is equidistant from A and B.": "線分 [AB] の中点を通り、[AB] と 90° で交わる直線。その上のすべての点は A と B から等距離にある。",

    // Equations of straight lines and perpendicular bisectors > li
    "Find the <strong>midpoint</strong> <span class=\"chem\">M = ((x_1 + x_2)/2, (y_1 + y_2)/2)</span>.": "<strong>中点</strong> <span class=\"chem\">M = ((x_1 + x_2)/2, (y_1 + y_2)/2)</span> を求めます。",

    // Equations of straight lines and perpendicular bisectors > li
    "Find the segment gradient <span class=\"chem\">m_{AB}</span>, then flip and change the sign to get the perpendicular gradient <span class=\"chem\">m_{perp} = -1 / m_{AB}</span>.": "線分の傾き <span class=\"chem\">m_{AB}</span> を求め、逆数にして符号を変えて垂直な傾き <span class=\"chem\">m_{perp} = -1 / m_{AB}</span> を得ます。",

    // Equations of straight lines and perpendicular bisectors > li
    "Substitute <span class=\"chem\">M</span> and <span class=\"chem\">m_{perp}</span> into point-gradient form <span class=\"chem\">y - y_M = m_{perp}(x - x_M)</span>.": "<span class=\"chem\">M</span> と <span class=\"chem\">m_{perp}</span> を点・傾き形 <span class=\"chem\">y - y_M = m_{perp}(x - x_M)</span> に代入します。",

    // Equations of straight lines and perpendicular bisectors > exam tip (shown in English + translation) > p
    "<strong>Exam tip — Check the requested format:</strong> If a question says <em>“Give your answer in the form <span class=\"chem\">ax + by + d = 0</span> where <span class=\"chem\">a, b, d ∈ ℤ</span>”</em>, leaving your answer as <span class=\"chem\">y = (2/3)x - 5/3</span> loses the final <strong>[A1]</strong> mark. Multiply the entire equation by the common denominator (<span class=\"chem\">3</span>) and move all terms to one side: <span class=\"chem\">2x - 3y - 5 = 0</span>.": "<strong>試験のコツ — 指定された解答形式を確認しましょう：</strong> 問題文に<em>「<span class=\"chem\">a, b, d ∈ ℤ</span> として <span class=\"chem\">ax + by + d = 0</span> の形で答えよ」</em>とある場合、<span class=\"chem\">y = (2/3)x - 5/3</span> のままにすると最後の <strong>[A1]</strong> 点を失います。両辺に共通の分母（<span class=\"chem\">3</span>）を掛けてすべての項を片辺に集め、<span class=\"chem\">2x - 3y - 5 = 0</span> としましょう。",

    // Equations of straight lines and perpendicular bisectors > worked example > h3
    "Finding the perpendicular bisector in general integer form": "垂直二等分線を整数の一般形で求める",

    // Equations of straight lines and perpendicular bisectors > worked example > p
    "Points <span class=\"chem\">A(-2, 7)</span> and <span class=\"chem\">B(4, 3)</span> lie in the Cartesian plane. Find the equation of the perpendicular bisector of <span class=\"chem\">[AB]</span>, giving your answer in the form <span class=\"chem\">ax + by + d = 0</span> where <span class=\"chem\">a, b, d</span> are integers. <strong>[4 marks]</strong>": "座標平面上に点 <span class=\"chem\">A(-2, 7)</span> と <span class=\"chem\">B(4, 3)</span> がある。線分 <span class=\"chem\">[AB]</span> の垂直二等分線の方程式を求め (Find)、<span class=\"chem\">a, b, d</span> を整数として <span class=\"chem\">ax + by + d = 0</span> の形で答えなさい。 <strong>[4 marks]</strong>",

    // Equations of straight lines and perpendicular bisectors > worked example > data-title attribute
    "Find the midpoint M of segment [AB]": "線分 [AB] の中点 M を求める",

    // Equations of straight lines and perpendicular bisectors > worked example > p
    "The bisector cuts segment [AB] in half, so it must pass through the average of the x- and y-coordinates.": "垂直二等分線は線分 [AB] を二等分するため、x 座標・y 座標の平均である中点を通ります。",

    // Equations of straight lines and perpendicular bisectors > worked example > data-title attribute
    "Calculate the gradient of [AB] and the perpendicular gradient": "[AB] の傾きと垂直な傾きを計算する",

    // Equations of straight lines and perpendicular bisectors > worked example > p
    "Because the bisector meets [AB] at 90°, its gradient is the negative reciprocal of the gradient of [AB].": "垂直二等分線は [AB] と 90° で交わるため、その傾きは [AB] の傾きの負の逆数になります。",

    // Equations of straight lines and perpendicular bisectors > worked example > data-title attribute
    "Use point-gradient form and rearrange to ax + by + d = 0": "点・傾き形を使い、ax + by + d = 0 に整理する",

    // Equations of straight lines and perpendicular bisectors > worked example > p
    "Substitute M(1, 5) and m = 3/2 into y − y₁ = m(x − x₁), then multiply by 2 to clear fractions.": "M(1, 5) と m = 3/2 を y − y₁ = m(x − x₁) に代入し、2 を掛けて分母を払います。",

    // Equations of straight lines and perpendicular bisectors > worked example > p
    "<span class=\"chem\">3x - 2y + 7 = 0</span> (or <span class=\"chem\">-3x + 2y - 7 = 0</span>)": "<span class=\"chem\">3x - 2y + 7 = 0</span> （または <span class=\"chem\">-3x + 2y - 7 = 0</span>）",

    // Equations of straight lines and perpendicular bisectors > try it > p
    "The perpendicular bisector of the segment joining <span class=\"chem\">P(1, 2)</span> and <span class=\"chem\">Q(5, 10)</span> crosses the <span class=\"chem\">y</span>-axis at <span class=\"chem\">(0, c)</span>. Find the exact value of <span class=\"chem\">c</span>.": "<span class=\"chem\">P(1, 2)</span> と <span class=\"chem\">Q(5, 10)</span> を結ぶ線分の垂直二等分線が <span class=\"chem\">y</span> 軸と <span class=\"chem\">(0, c)</span> で交わる。<span class=\"chem\">c</span> の厳密値（正確な値）を求めなさい (Find)。",

    // Equations of straight lines and perpendicular bisectors > try it > li
    "Find the midpoint <span class=\"chem\">M</span> of <span class=\"chem\">P(1, 2)</span> and <span class=\"chem\">Q(5, 10)</span>, and the gradient <span class=\"chem\">m_{PQ} = (10 - 2)/(5 - 1)</span>.": "<span class=\"chem\">P(1, 2)</span> と <span class=\"chem\">Q(5, 10)</span> の中点 <span class=\"chem\">M</span> と傾き <span class=\"chem\">m_{PQ} = (10 - 2)/(5 - 1)</span> を求めます。",

    // Equations of straight lines and perpendicular bisectors > try it > li
    "You should get <span class=\"chem\">M(3, 6)</span> and <span class=\"chem\">m_{PQ} = 2</span>, so the perpendicular gradient is <span class=\"chem\">m_{perp} = -1/2</span>. Substitute <span class=\"chem\">x = 0</span> into <span class=\"chem\">y - 6 = (-1/2)(x - 3)</span>.": "<span class=\"chem\">M(3, 6)</span> と <span class=\"chem\">m_{PQ} = 2</span> が得られるので、垂直な傾きは <span class=\"chem\">m_{perp} = -1/2</span> です。<span class=\"chem\">y - 6 = (-1/2)(x - 3)</span> に <span class=\"chem\">x = 0</span> を代入します。",

    // Equations of straight lines and perpendicular bisectors > try it > maths line
    "<i>M</i> = (3, 6) and <i>m</i><sub><i>PQ</i></sub> = <span class=\"frac\"><span>10 − 2</span><span>5 − 1</span></span> = 2 ⇒ <i>m</i><sub>⊥</sub> = −<span class=\"frac\"><span>1</span><span>2</span></span>": "<i>M</i> = (3, 6) かつ <i>m</i><sub><i>PQ</i></sub> = <span class=\"frac\"><span>10 − 2</span><span>5 − 1</span></span> = 2 ⇒ <i>m</i><sub>⊥</sub> = −<span class=\"frac\"><span>1</span><span>2</span></span>",

    // Equations of straight lines and perpendicular bisectors > try it > maths line
    "<i>y</i> − 6 = −<span class=\"frac\"><span>1</span><span>2</span></span>(<i>x</i> − 3) ⇒ at <i>x</i> = 0, <i>c</i> = 6 + <span class=\"frac\"><span>3</span><span>2</span></span> = <b>7.5</b>": "<i>y</i> − 6 = −<span class=\"frac\"><span>1</span><span>2</span></span>(<i>x</i> − 3) ⇒ <i>x</i> = 0 のとき、<i>c</i> = 6 + <span class=\"frac\"><span>3</span><span>2</span></span> = <b>7.5</b>",

    // Functions, natural domains, ranges and key graph features > data-toc attribute
    "Domain & range": "定義域と値域",

    // Functions, natural domains, ranges and key graph features > h2
    "Functions, natural domains, ranges and key graph features": "関数・自然定義域・値域とグラフの主な特徴",

    // Functions, natural domains, ranges and key graph features > p
    "A <dfn data-def=\"A mapping that assigns each input x in the domain to exactly one output y = f(x) in the range.\">function</dfn> <span class=\"chem\">f</span> is a rule that takes an input <span class=\"chem\">x</span> from a set of allowed inputs—the <dfn data-def=\"The complete set of allowed input values (x-values) for which a function f(x) is defined.\">domain</dfn>—and produces <strong>exactly one</strong> output <span class=\"chem\">y = f(x)</span>. The set of all actual outputs produced is the <dfn data-def=\"The complete set of output values (y-values) that f(x) actually takes as x varies across the domain.\">range</dfn>.": "<dfn data-def=\"定義域内の各入力 x を、値域内のただ 1 つの出力 y = f(x) に対応づける規則。\">関数 <span class=\"en-term\">(function)</span></dfn> <span class=\"chem\">f</span> とは、許された入力の集合—<dfn data-def=\"関数 f(x) が定義されるすべての許された入力値（x の値）の集合。\">定義域 <span class=\"en-term\">(domain)</span></dfn>—から入力 <span class=\"chem\">x</span> を受け取り、<strong>ただ 1 つ</strong>の出力 <span class=\"chem\">y = f(x)</span> を返す規則です。実際に生じるすべての出力の集合を<dfn data-def=\"x が定義域全体を動くときに f(x) が実際にとるすべての出力値（y の値）の集合。\">値域 <span class=\"en-term\">(range)</span></dfn> といいます。",

    // Functions, natural domains, ranges and key graph features > data-def attribute
    "A mapping that assigns each input x in the domain to exactly one output y = f(x) in the range.": "定義域内の各入力 x を、値域内のただ 1 つの出力 y = f(x) に対応づける規則。",

    // Functions, natural domains, ranges and key graph features > data-def attribute
    "The complete set of allowed input values (x-values) for which a function f(x) is defined.": "関数 f(x) が定義されるすべての許された入力値（x の値）の集合。",

    // Functions, natural domains, ranges and key graph features > data-def attribute
    "The complete set of output values (y-values) that f(x) actually takes as x varies across the domain.": "x が定義域全体を動くときに f(x) が実際にとるすべての出力値（y の値）の集合。",

    // Functions, natural domains, ranges and key graph features > li
    "<strong>Vertical line test (Is it a function?):</strong> A graph represents a function if and only if every vertical line <span class=\"chem\">x = k</span> hits the curve <strong>at most once</strong>. A circle <span class=\"chem\">x^2 + y^2 = 9</span> fails the vertical line test because <span class=\"chem\">x = 0</span> gives two outputs (<span class=\"chem\">y = 3</span> and <span class=\"chem\">y = -3</span>).": "<strong>鉛直線テスト（関数かどうか？）：</strong> グラフが関数を表すのは、すべての鉛直線 <span class=\"chem\">x = k</span> が曲線と<strong>高々 1 回</strong>しか交わらないとき、かつそのときに限ります。円 <span class=\"chem\">x^2 + y^2 = 9</span> は <span class=\"chem\">x = 0</span> で 2 つの出力（<span class=\"chem\">y = 3</span> と <span class=\"chem\">y = -3</span>）をもつため鉛直線テストに合格しません。",

    // Functions, natural domains, ranges and key graph features > li
    "<strong>Horizontal line test (Is it one-to-one?):</strong> A function is <strong>one-to-one</strong> if every horizontal line <span class=\"chem\">y = k</span> hits the curve at most once. Only one-to-one functions have an inverse function on their full domain.": "<strong>水平線テスト（1 対 1 かどうか？）：</strong> すべての水平線 <span class=\"chem\">y = k</span> が曲線と高々 1 回しか交わらないとき、関数は <strong>1 対 1（one-to-one）</strong>であるといいます。定義域全体で逆関数をもつのは 1 対 1 の関数だけです。",

    // Functions, natural domains, ranges and key graph features > h3
    "The three natural domain killers": "自然定義域を決める 3 つの制限",

    // Functions, natural domains, ranges and key graph features > p
    "When a question asks for the <strong>natural domain</strong> (or <em>“largest possible domain in <span class=\"chem\">ℝ</span>”</em>) without specifying a restriction, start with all real numbers <span class=\"chem\">x ∈ ℝ</span> and remove any <span class=\"chem\">x</span> that breaks one of these three algebraic rules:": "問題が制限を指定せずに<strong>自然定義域</strong>（または<em>「<span class=\"chem\">ℝ</span> における最大の定義域」</em>）を尋ねているときは、すべての実数 <span class=\"chem\">x ∈ ℝ</span> から始めて、次の 3 つの代数的ルールのいずれかに反する <span class=\"chem\">x</span> を取り除きます：",

    // Functions, natural domains, ranges and key graph features > li
    "<strong>No division by zero:</strong> For <span class=\"chem\">1 / g(x)</span>, require <span class=\"chem\">g(x) != 0</span>.": "<strong>0 で割ってはいけない：</strong> <span class=\"chem\">1 / g(x)</span> では <span class=\"chem\">g(x) != 0</span> が必要です。",

    // Functions, natural domains, ranges and key graph features > li
    "<strong>No negative numbers inside an even root:</strong> For <span class=\"chem\">sqrt(g(x))</span>, require <span class=\"chem\">g(x) &gt;= 0</span>. (If the square root is in a denominator, <span class=\"chem\">1 / sqrt(g(x))</span>, both rules combine to <span class=\"chem\">g(x) &gt; 0</span> strictly!)": "<strong>偶数の累乗根の中は負になってはいけない：</strong> <span class=\"chem\">sqrt(g(x))</span> では <span class=\"chem\">g(x) &gt;= 0</span> が必要です。（平方根が分母 <span class=\"chem\">1 / sqrt(g(x))</span> にある場合は両方のルールが合わさり、厳密に <span class=\"chem\">g(x) &gt; 0</span> になります！）",

    // Functions, natural domains, ranges and key graph features > li
    "<strong>Only strictly positive numbers inside a logarithm:</strong> For <span class=\"chem\">ln(g(x))</span> or <span class=\"chem\">log_a(g(x))</span>, require <span class=\"chem\">g(x) &gt; 0</span>.": "<strong>対数の中は真に正でなければならない：</strong> <span class=\"chem\">ln(g(x))</span> や <span class=\"chem\">log_a(g(x))</span> では <span class=\"chem\">g(x) &gt; 0</span> が必要です。",

    // Functions, natural domains, ranges and key graph features > common mistake > p
    "<strong>Common mistake — Finding the range by plugging in only the endpoints:</strong> Suppose <span class=\"chem\">f(x) = (x - 2)^2 + 1</span> on the domain <span class=\"chem\">0 &lt;= x &lt;= 5</span>. If you only compute <span class=\"chem\">f(0) = 5</span> and <span class=\"chem\">f(5) = 10</span>, you might write that the range is <span class=\"chem\">5 &lt;= y &lt;= 10</span>. That is <strong>wrong</strong>! At <span class=\"chem\">x = 2</span> (which lies inside <span class=\"chem\">[0, 5]</span>), the parabola dips down to its vertex <span class=\"chem\">(2, 1)</span>. The true range is <span class=\"chem\">1 &lt;= y &lt;= 10</span>. <strong>Always sketch the curve on the given domain before stating the range.</strong>": "<strong>よくあるミス — 端点だけを代入して値域を求めてしまう：</strong> 定義域 <span class=\"chem\">0 &lt;= x &lt;= 5</span> 上の <span class=\"chem\">f(x) = (x - 2)^2 + 1</span> を考えます。<span class=\"chem\">f(0) = 5</span> と <span class=\"chem\">f(5) = 10</span> だけを計算して値域を <span class=\"chem\">5 &lt;= y &lt;= 10</span> と書いてしまうのは<strong>誤り</strong>です！<span class=\"chem\">[0, 5]</span> の内側にある <span class=\"chem\">x = 2</span> で放物線は頂点 <span class=\"chem\">(2, 1)</span> まで下がるため、正しい値域は <span class=\"chem\">1 &lt;= y &lt;= 10</span> です。<strong>値域を答える前には必ず与えられた定義域上でグラフの概形を描きましょう。</strong>",

    // Functions, natural domains, ranges and key graph features > worked example > h3
    "Finding the natural domain and exact range of a transformed function": "変換された関数の自然定義域と正確な値域を求める",

    // Functions, natural domains, ranges and key graph features > worked example > p
    "Consider the function <span class=\"chem\">f(x) = 5 - sqrt(2x + 6)</span>. State the largest possible domain of <span class=\"chem\">f</span> and find the corresponding range. <strong>[4 marks]</strong>": "関数 <span class=\"chem\">f(x) = 5 - sqrt(2x + 6)</span> を考える。<span class=\"chem\">f</span> の最大の定義域を述べ (State)、それに対応する値域を求めなさい (Find)。 <strong>[4 marks]</strong>",

    // Functions, natural domains, ranges and key graph features > worked example > data-title attribute
    "Set the expression inside the square root ≥ 0 for the domain": "定義域を求めるために平方根の中身を ≥ 0 とおく",

    // Functions, natural domains, ranges and key graph features > worked example > p
    "A real square root is defined if and only if its radicand is non-negative.": "実数の平方根が定義されるのは、根号の中身が負でないとき、かつそのときに限ります。",

    // Functions, natural domains, ranges and key graph features > worked example > data-title attribute
    "Bound the output of the square root to deduce the range": "平方根の出力の範囲から値域を導く",

    // Functions, natural domains, ranges and key graph features > worked example > p
    "The principal square root √(2x + 6) takes every value from 0 upwards as x increases from −3 to ∞.": "x が −3 から ∞ まで増えるとき、主平方根 √(2x + 6) は 0 以上のすべての値をとります。",

    // Functions, natural domains, ranges and key graph features > worked example > maths line
    "Since <span class=\"chem\">sqrt(2x + 6) &gt;= 0</span> for all <span class=\"chem\">x &gt;= -3</span>, multiplying by −1 and adding 5 gives: &nbsp; <b>[M1]</b>": "<span class=\"chem\">sqrt(2x + 6) &gt;= 0</span>（すべての <span class=\"chem\">x &gt;= -3</span>）なので、−1 を掛けて 5 を足すと： &nbsp; <b>[M1]</b>",

    // Functions, natural domains, ranges and key graph features > worked example > maths line
    "5 − <span class=\"chem\">sqrt(2x + 6) &lt;= 5</span> ⇒ <b><i>f</i>(<i>x</i>) ≤ 5</b> (or <span class=\"chem\">y ∈ (-infty, 5]</span>) &nbsp; <b>[A1]</b>": "5 − <span class=\"chem\">sqrt(2x + 6) &lt;= 5</span> ⇒ <b><i>f</i>(<i>x</i>) ≤ 5</b> （または <span class=\"chem\">y ∈ (-infty, 5]</span>） &nbsp; <b>[A1]</b>",

    // Functions, natural domains, ranges and key graph features > worked example > p
    "Domain: <span class=\"chem\">x &gt;= -3</span>; Range: <span class=\"chem\">f(x) &lt;= 5</span>": "定義域：<span class=\"chem\">x &gt;= -3</span>；値域：<span class=\"chem\">f(x) &lt;= 5</span>",

    // Functions, natural domains, ranges and key graph features > try it > p
    "The function <span class=\"chem\">g(x) = (x - 3)^2 + 2</span> is defined on the restricted domain <span class=\"chem\">1 &lt;= x &lt;= 7</span>. Find the <strong>minimum</strong> value in the range of <span class=\"chem\">g</span>.": "関数 <span class=\"chem\">g(x) = (x - 3)^2 + 2</span> が制限された定義域 <span class=\"chem\">1 &lt;= x &lt;= 7</span> 上で定義されている。<span class=\"chem\">g</span> の値域における<strong>最小値</strong>を求めなさい (Find)。",

    // Functions, natural domains, ranges and key graph features > try it > li
    "Identify the vertex of the parabola <span class=\"chem\">y = (x - 3)^2 + 2</span> and check whether its <span class=\"chem\">x</span>-coordinate lies inside <span class=\"chem\">1 &lt;= x &lt;= 7</span>.": "放物線 <span class=\"chem\">y = (x - 3)^2 + 2</span> の頂点を求め、その <span class=\"chem\">x</span> 座標が <span class=\"chem\">1 &lt;= x &lt;= 7</span> に含まれるか確認します。",

    // Functions, natural domains, ranges and key graph features > try it > li
    "Since <span class=\"chem\">x = 3</span> is inside <span class=\"chem\">[1, 7]</span> and <span class=\"chem\">(x - 3)^2 &gt;= 0</span>, the minimum output occurs at the vertex <span class=\"chem\">x = 3</span>.": "<span class=\"chem\">x = 3</span> は <span class=\"chem\">[1, 7]</span> に含まれており <span class=\"chem\">(x - 3)^2 &gt;= 0</span> なので、出力の最小値は頂点 <span class=\"chem\">x = 3</span> で生じます。",

    // Functions, natural domains, ranges and key graph features > try it > maths line
    "At the endpoints: <i>g</i>(1) = (−2)<sup>2</sup> + 2 = 6 and <i>g</i>(7) = 4<sup>2</sup> + 2 = 18.": "端点では：<i>g</i>(1) = (−2)<sup>2</sup> + 2 = 6、<i>g</i>(7) = 4<sup>2</sup> + 2 = 18。",

    // Functions, natural domains, ranges and key graph features > try it > maths line
    "However, the vertex at <i>x</i> = 3 lies inside [1, 7], giving minimum value <i>g</i>(3) = 0 + 2 = <b>2</b> (so the range is <span class=\"chem\">2 &lt;= y &lt;= 18</span>).": "しかし、頂点 <i>x</i> = 3 が [1, 7] の内側にあるため、最小値は <i>g</i>(3) = 0 + 2 = <b>2</b> となります（よって値域は <span class=\"chem\">2 &lt;= y &lt;= 18</span>）。",

    // Functions, natural domains, ranges and key graph features > h3
    "Sketching graphs and graphing with technology": "グラフの概形とテクノロジーによる作図",

    // Functions, natural domains, ranges and key graph features > p
    "A <strong>sketch</strong> shows the shape of a graph and its key features, labelled with coordinates or equations: axis intercepts, turning points, asymptotes and the end points of a restricted domain. It does not need to be to scale. To <strong>draw</strong> a graph means to plot it accurately on given axes. When you transfer a graph from your GDC screen to paper, use the same window (mark the <span class=\"chem\">x</span>- and <span class=\"chem\">y</span>-range on your axes), keep the shape, and write the coordinates the GDC gives next to each feature.": "<strong>概形 (sketch)</strong> では、グラフの形と主な特徴を座標や方程式とともに示します：座標軸との交点、極値をとる点（転回点）、漸近線、制限された定義域の端点です。縮尺を正確にする必要はありません。<strong>描く (draw)</strong> とは、与えられた座標軸上にグラフを正確にかくことです。GDC の画面のグラフを紙に写すときは、同じ表示範囲を使い（軸に <span class=\"chem\">x</span> と <span class=\"chem\">y</span> の範囲を書き入れる）、形を保ち、GDC で得た座標をそれぞれの特徴の横に書きます。",

    // Functions, natural domains, ranges and key graph features > p
    "Your GDC can also graph sums and differences of functions: enter <span class=\"chem\">Y_1</span> and <span class=\"chem\">Y_2</span>, then <span class=\"chem\">Y_3 = Y_1 + Y_2</span> or <span class=\"chem\">Y_3 = Y_1 - Y_2</span>. The zeros of <span class=\"chem\">Y_1 - Y_2</span> are the <span class=\"chem\">x</span>-coordinates where the graphs of <span class=\"chem\">Y_1</span> and <span class=\"chem\">Y_2</span> intersect.": "GDC では関数の和や差のグラフもかけます：<span class=\"chem\">Y_1</span> と <span class=\"chem\">Y_2</span> を入力し、<span class=\"chem\">Y_3 = Y_1 + Y_2</span> または <span class=\"chem\">Y_3 = Y_1 - Y_2</span> と入力します。<span class=\"chem\">Y_1 - Y_2</span> の零点は、<span class=\"chem\">Y_1</span> と <span class=\"chem\">Y_2</span> のグラフが交わる点の <span class=\"chem\">x</span> 座標です。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > data-toc attribute
    "Composites & inverses": "合成関数と逆関数",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > h2
    "Composite functions <span class=\"chem\">(f ∘ g)(x)</span> and inverse functions <span class=\"chem\">f^{-1}(x)</span>": "合成関数 <span class=\"chem\">(f ∘ g)(x)</span> と逆関数 <span class=\"chem\">f^{-1}(x)</span>",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > p
    "When the output of one function <span class=\"chem\">g</span> is fed directly as the input into a second function <span class=\"chem\">f</span>, we form the <dfn data-def=\"The function formed by applying g first and then applying f to the result: (f ∘ g)(x) = f(g(x)).\">composite function</dfn> <span class=\"chem\">(f ∘ g)(x) = f(g(x))</span>. Read <span class=\"chem\">(f ∘ g)(x)</span> from the <strong>inside out</strong>: <span class=\"chem\">g</span> acts on <span class=\"chem\">x</span> first, and <span class=\"chem\">f</span> acts on <span class=\"chem\">g(x)</span> second.": "ある関数 <span class=\"chem\">g</span> の出力をそのまま別の関数 <span class=\"chem\">f</span> の入力として渡すと、<dfn data-def=\"まず g を適用し、その結果に f を適用して作られる関数：(f ∘ g)(x) = f(g(x))。\">合成関数 <span class=\"en-term\">(composite function)</span></dfn> <span class=\"chem\">(f ∘ g)(x) = f(g(x))</span> が得られます。<span class=\"chem\">(f ∘ g)(x)</span> は<strong>内側から外側へ</strong>読みます：最初に <span class=\"chem\">g</span> が <span class=\"chem\">x</span> に作用し、次に <span class=\"chem\">f</span> が <span class=\"chem\">g(x)</span> に作用します。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > data-def attribute
    "The function formed by applying g first and then applying f to the result: (f ∘ g)(x) = f(g(x)).": "まず g を適用し、その結果に f を適用して作られる関数：(f ∘ g)(x) = f(g(x))。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > equation > dd
    "inner function (applied first to input <i>x</i>)": "内側の関数（入力 <i>x</i> に最初に作用する）",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > equation > dd
    "outer function (applied second to the output <i>g</i>(<i>x</i>))": "外側の関数（出力 <i>g</i>(<i>x</i>) に 2 番目に作用する）",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > equation > dt
    "Existence rule": "存在条件",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > equation > dd
    "<span class=\"chem\">Range(g)</span> must be a subset of <span class=\"chem\">Domain(f)</span>": "<span class=\"chem\">Range(g)</span> が <span class=\"chem\">Domain(f)</span> の部分集合であること",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > equation > dd
    "inverse function (reverses <i>f</i>; exists only when <i>f</i> is one-to-one)": "逆関数（<i>f</i> を逆向きに対応づける；<i>f</i> が 1 対 1 のときにのみ存在）",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > widget > data-title attribute
    "Composite function pipeline & domain compatibility checker": "合成関数パイプライン＆定義域適合チェッカー",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > widget > figcaption
    "Choose an inner function <span class=\"chem\">g(x)</span>, an outer function <span class=\"chem\">f(x)</span>, and a test input <span class=\"chem\">x</span> to trace the two-stage pipeline <span class=\"chem\">x -&gt; g(x) -&gt; f(g(x))</span> and see whether <span class=\"chem\">Range(g)</span> fits inside <span class=\"chem\">Domain(f)</span>.": "内側の関数 <span class=\"chem\">g(x)</span>、外側の関数 <span class=\"chem\">f(x)</span>、および入力 <span class=\"chem\">x</span> を選んで、<span class=\"chem\">x -&gt; g(x) -&gt; f(g(x))</span> の 2 段階の流れをたどり、<span class=\"chem\">Range(g)</span> が <span class=\"chem\">Domain(f)</span> に収まるか確認しましょう。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > h3
    "Inverse functions and the mirror line <span class=\"chem\">y = x</span>": "逆関数と対称軸 <span class=\"chem\">y = x</span>",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > p
    "The <dfn data-def=\"The function f⁻¹ that reverses the mapping of f, so that f⁻¹(y) = x whenever f(x) = y.\">inverse function</dfn> <span class=\"chem\">f^{-1}</span> undoes what <span class=\"chem\">f</span> does: if <span class=\"chem\">f</span> maps <span class=\"chem\">a -&gt; b</span>, then <span class=\"chem\">f^{-1}</span> maps <span class=\"chem\">b -&gt; a</span>. Because every <span class=\"chem\">(x, y)</span> coordinate pair swaps to <span class=\"chem\">(y, x)</span>, three powerful facts always hold:": "<dfn data-def=\"f の対応を逆向きにする関数 f⁻¹。f(x) = y のとき常に f⁻¹(y) = x となる。\">逆関数 <span class=\"en-term\">(inverse function)</span></dfn> <span class=\"chem\">f^{-1}</span> は <span class=\"chem\">f</span> の操作を元に戻します：<span class=\"chem\">f</span> が <span class=\"chem\">a -&gt; b</span> に対応づけるなら、<span class=\"chem\">f^{-1}</span> は <span class=\"chem\">b -&gt; a</span> に対応づけます。すべての座標 <span class=\"chem\">(x, y)</span> が <span class=\"chem\">(y, x)</span> に入れ替わるため、次の 3 つの重要な性質が常に成り立ちます：",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > data-def attribute
    "The function f⁻¹ that reverses the mapping of f, so that f⁻¹(y) = x whenever f(x) = y.": "f の対応を逆向きにする関数 f⁻¹。f(x) = y のとき常に f⁻¹(y) = x となる。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > li
    "<strong>Algebraic recipe:</strong> Write <span class=\"chem\">y = f(x)</span>, swap <span class=\"chem\">x</span> and <span class=\"chem\">y</span>, and solve for <span class=\"chem\">y</span> in terms of <span class=\"chem\">x</span>. If a <span class=\"chem\">+-sqrt(...)</span> appears, use the restricted domain of <span class=\"chem\">f</span> (which becomes the range of <span class=\"chem\">f^{-1}</span>) to pick the correct sign!": "<strong>代数的な求め方：</strong> <span class=\"chem\">y = f(x)</span> とおき、<span class=\"chem\">x</span> と <span class=\"chem\">y</span> を入れ替えて <span class=\"chem\">y</span> を <span class=\"chem\">x</span> の式で解きます。<span class=\"chem\">+-sqrt(...)</span> が出てきたときは、<span class=\"chem\">f</span> の制限された定義域（これが <span class=\"chem\">f^{-1}</span> の値域になります）を使って正しい符号を選びます。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > li
    "<strong>Domain and range swap:</strong> <span class=\"chem\">Domain(f^{-1}) = Range(f)</span> and <span class=\"chem\">Range(f^{-1}) = Domain(f)</span>. If an exam question asks for the domain of <span class=\"chem\">f^{-1}</span>, just find the range of <span class=\"chem\">f</span>.": "<strong>定義域と値域の入れ替え：</strong> <span class=\"chem\">Domain(f^{-1}) = Range(f)</span> かつ <span class=\"chem\">Range(f^{-1}) = Domain(f)</span> です。試験で <span class=\"chem\">f^{-1}</span> の定義域を聞かれたら、<span class=\"chem\">f</span> の値域を求めればよいのです。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > li
    "<strong>Geometric reflection:</strong> The graph of <span class=\"chem\">y = f^{-1}(x)</span> is the reflection of <span class=\"chem\">y = f(x)</span> across the diagonal line <span class=\"chem\">y = x</span>. In particular, any intersection of an increasing function <span class=\"chem\">y = f(x)</span> with <span class=\"chem\">y = f^{-1}(x)</span> lies directly on the line <span class=\"chem\">y = x</span>, so you can solve <span class=\"chem\">f(x) = f^{-1}(x)</span> by solving <strong><span class=\"chem\">f(x) = x</span></strong>!": "<strong>幾何学的な対称移動：</strong> <span class=\"chem\">y = f^{-1}(x)</span> のグラフは、<span class=\"chem\">y = f(x)</span> を直線 <span class=\"chem\">y = x</span> に関して対称移動したものです。特に、増加関数 <span class=\"chem\">y = f(x)</span> と <span class=\"chem\">y = f^{-1}(x)</span> の交点はすべて直線 <span class=\"chem\">y = x</span> 上にあるため、<span class=\"chem\">f(x) = f^{-1}(x)</span> は <strong><span class=\"chem\">f(x) = x</span></strong> を解くことで求められます。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > common mistake > p
    "<strong>Common mistake — Confusing <span class=\"chem\">f^{-1}(x)</span> with the reciprocal <span class=\"chem\">1 / f(x)</span>:</strong> In function notation, the superscript <span class=\"chem\">-1</span> in <span class=\"chem\">f^{-1}(x)</span> always means the <strong>inverse function</strong> (reversing input and output), <em>never</em> the reciprocal <span class=\"chem\">(f(x))^{-1} = 1 / f(x)</span>.": "<strong>よくあるミス — <span class=\"chem\">f^{-1}(x)</span> と逆数 <span class=\"chem\">1 / f(x)</span> を混同する：</strong> 関数記号において、<span class=\"chem\">f^{-1}(x)</span> の上付き <span class=\"chem\">-1</span> は常に<strong>逆関数</strong>（入力と出力の逆転）を意味し、<em>決して</em>逆数 <span class=\"chem\">(f(x))^{-1} = 1 / f(x)</span> ではありません。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > widget > data-title attribute
    "Inverse reflection explorer: y = f(x), y = x, and y = f⁻¹(x)": "逆関数の対称移動エクスプローラー：y = f(x), y = x, y = f⁻¹(x)",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > widget > figcaption
    "Switch between invertible functions and move input <span class=\"chem\">a</span> to watch point <span class=\"chem\">P(a, b)</span> on <span class=\"chem\">y = f(x)</span> reflect across the mirror line <span class=\"chem\">y = x</span> to <span class=\"chem\">P'(b, a)</span> on <span class=\"chem\">y = f^{-1}(x)</span>.": "逆関数をもつ関数を切り替え、入力 <span class=\"chem\">a</span> を動かして、<span class=\"chem\">y = f(x)</span> 上の点 <span class=\"chem\">P(a, b)</span> が直線 <span class=\"chem\">y = x</span> に関して対称な <span class=\"chem\">y = f^{-1}(x)</span> 上の点 <span class=\"chem\">P'(b, a)</span> に移る様子を観察しましょう。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > h3
    "Inverting a domain-restricted quadratic and solving f(x) = f⁻¹(x)": "定義域が制限された 2 次関数の逆関数を求め、f(x) = f⁻¹(x) を解く",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > p
    "The function <span class=\"chem\">f</span> is defined by <span class=\"chem\">f(x) = (x - 3)^2 - 2</span> for <span class=\"chem\">x &lt;= 3</span>.<br> (a) Find an expression for <span class=\"chem\">f^{-1}(x)</span> and state its domain. <strong>[4 marks]</strong><br> (b) Solve the equation <span class=\"chem\">f(x) = f^{-1}(x)</span>. <strong>[4 marks]</strong>": "関数 <span class=\"chem\">f</span> が <span class=\"chem\">x &lt;= 3</span> に対して <span class=\"chem\">f(x) = (x - 3)^2 - 2</span> で定義されている。<br> (a) <span class=\"chem\">f^{-1}(x)</span> の式を求め (Find)、その定義域を述べなさい (State)。 <strong>[4 marks]</strong><br> (b) 方程式 <span class=\"chem\">f(x) = f^{-1}(x)</span> を解きなさい。 <strong>[4 marks]</strong>",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > data-title attribute
    "Find the range of f to get the domain of f⁻¹": "f⁻¹ の定義域を得るために f の値域を求める",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > p
    "The vertex is at (3, −2) and the parabola opens upwards, so f(x) ≥ −2 for all x ≤ 3.": "頂点は (3, −2) で下に凸の放物線なので、すべての x ≤ 3 に対して f(x) ≥ −2 です。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > maths line
    "Range of <i>f</i> is <i>y</i> ≥ −2 ⇒ <b>Domain of <i>f</i><sup>−1</sup> is <i>x</i> ≥ −2</b> &nbsp; <b>[A1]</b>": "<i>f</i> の値域は <i>y</i> ≥ −2 ⇒ <b><i>f</i><sup>−1</sup> の定義域は <i>x</i> ≥ −2</b> &nbsp; <b>[A1]</b>",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > data-title attribute
    "Swap x and y and choose the branch matching Range(f⁻¹)": "x と y を入れ替え、Range(f⁻¹) に合う符号を選ぶ",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > p
    "Because Domain(f) is x ≤ 3, Range(f⁻¹) must be y ≤ 3, which forces the negative square root.": "Domain(f) が x ≤ 3 なので Range(f⁻¹) は y ≤ 3 となり、負の平方根を選ぶ必要があります。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > maths line
    "Since <i>y</i> ≤ 3, choose the minus sign: <b><i>f</i><sup>−1</sup>(<i>x</i>) = 3 − <span class=\"chem\">sqrt(x + 2)</span></b> &nbsp; <b>[R1 A1]</b>": "<i>y</i> ≤ 3 より負の符号を選ぶ：<b><i>f</i><sup>−1</sup>(<i>x</i>) = 3 − <span class=\"chem\">sqrt(x + 2)</span></b> &nbsp; <b>[R1 A1]</b>",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > data-title attribute
    "Solve f(x) = x on the mirror line y = x and filter by x ≤ 3": "対称軸 y = x 上で f(x) = x を解き、x ≤ 3 で絞り込む",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > p
    "Equating f(x) to x avoids squaring radicals. Only roots inside Domain(f) ∩ Domain(f⁻¹), namely −2 ≤ x ≤ 3, are valid. Because f is decreasing, f and f⁻¹ could also meet off the line y = x, so that must be checked too.": "f(x) = x とおくことで根号を 2 乗する手間を避けられます。Domain(f) ∩ Domain(f⁻¹)、すなわち −2 ≤ x ≤ 3 の範囲の解だけが有効です。f は減少関数なので、f と f⁻¹ は直線 y = x 以外でも交わる可能性があり、それも確認する必要があります。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > maths line
    "Since <span class=\"chem\">sqrt(21) ≈ 4.58</span>, <span class=\"chem\">(7 + sqrt(21))/2 ≈ 5.79 &gt; 3</span> (reject). Thus <b><i>x</i> = <span class=\"frac\"><span>7 − <span class=\"chem\">sqrt(21)</span></span><span>2</span></span></b> &nbsp; <b>[A1]</b>": "<span class=\"chem\">sqrt(21) ≈ 4.58</span> より、<span class=\"chem\">(7 + sqrt(21))/2 ≈ 5.79 &gt; 3</span>（不適）。よって <b><i>x</i> = <span class=\"frac\"><span>7 − <span class=\"chem\">sqrt(21)</span></span><span>2</span></span></b> &nbsp; <b>[A1]</b>",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > maths line
    "Off the mirror line, <span class=\"chem\">f(f(x)) = x</span> also gives the pair <span class=\"chem\">x = (5 - sqrt(17))/2 ≈ 0.438</span>, <span class=\"chem\">f(x) ≈ 4.56</span>; since <span class=\"chem\">4.56 &gt; 3</span> is not in Domain(<i>f</i>), it is rejected, so the only intersection lies on <i>y</i> = <i>x</i> &nbsp; <b>[R1]</b>": "対称軸の外では、<span class=\"chem\">f(f(x)) = x</span> から組 <span class=\"chem\">x = (5 - sqrt(17))/2 ≈ 0.438</span>、<span class=\"chem\">f(x) ≈ 4.56</span> も得られるが、<span class=\"chem\">4.56 &gt; 3</span> は Domain(<i>f</i>) に含まれないので不適。よって交点は <i>y</i> = <i>x</i> 上のものだけである &nbsp; <b>[R1]</b>",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > p
    "(a) <span class=\"chem\">f^{-1}(x) = 3 - sqrt(x + 2)</span> for <span class=\"chem\">x &gt;= -2</span>; (b) <span class=\"chem\">x = (7 - sqrt(21))/2</span>": "(a) <span class=\"chem\">x &gt;= -2</span> に対して <span class=\"chem\">f^{-1}(x) = 3 - sqrt(x + 2)</span>；(b) <span class=\"chem\">x = (7 - sqrt(21))/2</span>",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > try it > p
    "Let <span class=\"chem\">f(x) = 2x + 3</span> and <span class=\"chem\">g(x) = x^2 - 4</span>. Solve the equation <span class=\"chem\">(f ∘ g)(x) = -0.5</span> for <span class=\"chem\">x &gt; 0</span>.": "<span class=\"chem\">f(x) = 2x + 3</span>、<span class=\"chem\">g(x) = x^2 - 4</span> とする。<span class=\"chem\">x &gt; 0</span> の範囲で方程式 <span class=\"chem\">(f ∘ g)(x) = -0.5</span> を解きなさい。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > try it > li
    "Form the composite function from the inside out: <span class=\"chem\">f(g(x)) = 2(x^2 - 4) + 3 = 2x^2 - 5</span>.": "内側から外側へ合成関数を作ります：<span class=\"chem\">f(g(x)) = 2(x^2 - 4) + 3 = 2x^2 - 5</span>。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > try it > li
    "Set <span class=\"chem\">2x^2 - 5 = -0.5</span>, solve for <span class=\"chem\">x^2 = 2.25</span>, and take the positive square root.": "<span class=\"chem\">2x^2 - 5 = -0.5</span> とおいて <span class=\"chem\">x^2 = 2.25</span> を解き、正の平方根をとります。",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > try it > maths line
    "2<i>x</i><sup>2</sup> = 4.5 ⇒ <i>x</i><sup>2</sup> = 2.25 ⇒ <i>x</i> = <b>1.5</b> (since <i>x</i> &gt; 0)": "2<i>x</i><sup>2</sup> = 4.5 ⇒ <i>x</i><sup>2</sup> = 2.25 ⇒ <i>x</i> = <b>1.5</b> （<i>x</i> &gt; 0 より）",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > not needed for IB > p
    "<strong>Not needed for IB:</strong> You do not need formal university set-theory proofs of <em>surjectivity</em> onto an arbitrary codomain distinct from the range, nor epsilon-delta continuity proofs. In IB Math AA HL, a function is invertible if and only if it is <strong>one-to-one</strong> on its domain (passes the horizontal line test), with its codomain taken to be its range.": "<strong>IB の範囲外：</strong> 値域とは異なる任意の終域に対する<em>全射性</em>の大学レベルの集合論的証明や、ε-δ 論法による連続性の証明は不要です。IB Math AA HL では、終域を値域と一致させて考え、定義域上で <strong>1 対 1</strong>（水平線テストを通過）であれば逆関数が存在します。",

    // Quick practice > data-toc attribute
    "Practice": "演習問題",

    // Quick practice > h2
    "Quick practice": "確認問題",

    // widget string (assets/js/widgets-t2-1.js)
    "Function pair": "関数のペア",

    // widget string (assets/js/widgets-t2-1.js)
    "Input a on f(x)": "f(x) への入力 a",

    // widget string (assets/js/widgets-t2-1.js)
    "Jump to a fixed point on y = x": "y = x 上の不動点へ移動",

    // widget string (assets/js/widgets-t2-1.js)
    "Point P on y = f(x)": "y = f(x) 上の点 P",

    // widget string (assets/js/widgets-t2-1.js)
    "Reflected P' on y = f⁻¹(x)": "y = f⁻¹(x) 上の対称点 P'",

    // widget string (assets/js/widgets-t2-1.js)
    "Domain & range of f": "f の定義域と値域",

    // widget string (assets/js/widgets-t2-1.js)
    "Domain & range of f⁻¹": "f⁻¹ の定義域と値域",

    // widget string (assets/js/widgets-t2-1.js)
    "Graph of y = f(x), mirror line y = x, and inverse y = f⁻¹(x)": "y = f(x)、対称軸 y = x、逆関数 y = f⁻¹(x) のグラフ",

    // widget string (assets/js/widgets-t2-1.js)
    "Composite pair (g first, then f)": "合成ペア（先に g、次に f）",

    // widget string (assets/js/widgets-t2-1.js)
    "Test input x": "テスト入力 x",

    // widget string (assets/js/widgets-t2-1.js)
    "Stage 1: u = g(x)": "第 1 段階：u = g(x)",

    // widget string (assets/js/widgets-t2-1.js)
    "Stage 2: y = f(u) = (f ∘ g)(x)": "第 2 段階：y = f(u) = (f ∘ g)(x)",

    // widget string (assets/js/widgets-t2-1.js)
    "Composite formula": "合成関数の式",

    // widget string (assets/js/widgets-t2-1.js)
    "Domain compatibility check": "定義域の適合チェック",

    // widget string (assets/js/widgets-t2-1.js)
    "Graphs of inner function g(x) and composite function (f ∘ g)(x)": "内側の関数 g(x) と合成関数 (f ∘ g)(x) のグラフ",

  }
});
