/* t5-4 — ja translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't5-4', {
  strings: {

    // page title (browser tab)
    "5.4 Differential equations and Maclaurin series | Analysis Lab": "5.4 微分方程式とマクローリン級数 | Analysis Lab",

    // Differential equations and Maclaurin series > page header > p
    "Topic 5.4 · AHL 5.18–5.19": "Topic 5.4 · AHL 5.18–5.19",

    // Differential equations and Maclaurin series > page header > h1
    "Differential equations and Maclaurin series": "微分方程式とマクローリン級数",

    // Differential equations and Maclaurin series > page header > span
    "How can a rule that specifies only the local rate of change reconstruct an entire function—either exactly, numerically step-by-step, or as an infinite power series?": "局所的な変化率だけを指定する規則から、どのようにして関数全体を（厳密に、数値的に 1 ステップずつ、あるいは無限べき級数として）再構成できるのでしょうか？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "チェックリスト",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > checklist > Additional HL > span
    "Approximate solutions of <span class=\"chem\">dy/dx = f(x, y)</span> numerically using Euler’s method <span class=\"chem\">y_{n+1} = y_n + h f(x_n, y_n)</span>, <span class=\"chem\">x_{n+1} = x_n + h</span>, and use concavity to explain whether an Euler estimate is too high or too low.": "オイラー法 <span class=\"chem\">y_{n+1} = y_n + h f(x_n, y_n)</span>、<span class=\"chem\">x_{n+1} = x_n + h</span> を用いて <span class=\"chem\">dy/dx = f(x, y)</span> の解を数値的に近似し、凹凸を用いてオイラー法の近似値が大きすぎるか小さすぎるかを説明できる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Solve first-order separable differential equations <span class=\"chem\">dy/dx = g(x) h(y)</span> by integrating <span class=\"chem\">int (1/h(y)) dy = int g(x) dx</span>, including exponential, cooling, and logistic growth models.": "変数分離形の 1 階微分方程式 <span class=\"chem\">dy/dx = g(x) h(y)</span> を <span class=\"chem\">int (1/h(y)) dy = int g(x) dx</span> により解き（指数モデル・冷却法則・ロジスティック成長モデルを含む）、解を求められる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Solve first-order homogeneous differential equations <span class=\"chem\">dy/dx = F(y/x)</span> using the substitution <span class=\"chem\">y = vx</span> and <span class=\"chem\">dy/dx = v + x (dv/dx)</span>.": "置換 <span class=\"chem\">y = vx</span> と <span class=\"chem\">dy/dx = v + x (dv/dx)</span> を用いて、同次形の 1 階微分方程式 <span class=\"chem\">dy/dx = F(y/x)</span> を解ける。",

    // What you need to be able to do > checklist > Additional HL > span
    "Solve first-order linear differential equations <span class=\"chem\">dy/dx + P(x)y = Q(x)</span> using the integrating factor <span class=\"chem\">I(x) = e^{int P(x) dx}</span>.": "積分因子 <span class=\"chem\">I(x) = e^{int P(x) dx}</span> を用いて、1 階線形微分方程式 <span class=\"chem\">dy/dx + P(x)y = Q(x)</span> を解ける。",

    // What you need to be able to do > checklist > Additional HL > span
    "Find Maclaurin series using <span class=\"chem\">f(x) = f(0) + x f'(0) + (x^2/2!) f''(0) + ...</span> and by substituting, multiplying, differentiating, or integrating the standard Formula Booklet series (<span class=\"chem\">e^x, sin x, cos x, arctan x, ln(1 + x), (1 + x)^p</span>).": "<span class=\"chem\">f(x) = f(0) + x f'(0) + (x^2/2!) f''(0) + ...</span> を用いる方法、および公式集の基本級数（<span class=\"chem\">e^x, sin x, cos x, arctan x, ln(1 + x), (1 + x)^p</span>）の代入・乗算・微分・積分によってマクローリン級数を求められる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Develop the Maclaurin series of a solution <span class=\"chem\">y(x)</span> directly from a differential equation <span class=\"chem\">dy/dx = f(x, y)</span> and initial condition <span class=\"chem\">y(0) = y_0</span> by repeated implicit differentiation.": "微分方程式 <span class=\"chem\">dy/dx = f(x, y)</span> と初期条件 <span class=\"chem\">y(0) = y_0</span> から、陰関数の微分を繰り返して解 <span class=\"chem\">y(x)</span> のマクローリン級数を直接導出できる。",

    // Question decoder: The 4-way first-order DE classifier &amp;  > data-toc attribute
    "Question decoder": "問題デコーダー",

    // Question decoder: The 4-way first-order DE classifier &amp;  > h2
    "Question decoder: The 4-way first-order DE classifier &amp; Maclaurin series": "問題デコーダー：1 階微分方程式の 4 分類とマクローリン級数",

    // Question decoder: The 4-way first-order DE classifier &amp;  > p
    "Every first-order DE question in IB Math AA HL is handled by one of four methods: three exact (separable, homogeneous, integrating factor) and one numerical (Euler’s method). Run through the 4-way classifier below in order, then check the Maclaurin series decoder for power-series questions.": "IB Math AA HL の 1 階微分方程式の問題は、すべて次の 4 つの方法のいずれかで扱えます：厳密に解く 3 つの方法（変数分離形、同次形、積分因子）と数値的な 1 つの方法（オイラー法）です。下の 4 分類表を上から順に確認し、べき級数の問題ではマクローリン級数デコーダーを参照しましょう。",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > caption
    "The 4-way first-order differential equation classifier": "1 階微分方程式の 4 分類ガイド",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "Archetype &amp; structural pattern": "型と式の構造パターン",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "Formula &amp; transformation setup": "公式と式変形のポイント",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "Paper 1 (No GDC) vs Paper 2 / 3 strategy": "Paper 1（電卓不可）vs Paper 2 / 3 戦略",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "1. Variables separable:<br><span class=\"chem\">dy/dx = g(x) h(y)</span><br>(pure product/quotient of an <i>x</i>-factor and a <i>y</i>-factor)": "1. 変数分離形：<br><span class=\"chem\">dy/dx = g(x) h(y)</span><br>（<i>x</i> の式と <i>y</i> の式の積・商）",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Divide by <span class=\"chem\">h(y)</span> and multiply by <span class=\"chem\">dx</span>:<br><span class=\"chem\">int (1 / h(y)) dy = int g(x) dx</span>.": "<span class=\"chem\">h(y)</span> で割り、<span class=\"chem\">dx</span> を掛けます：<br><span class=\"chem\">int (1 / h(y)) dy = int g(x) dx</span>。",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Add <span class=\"chem\">+ C</span> the instant you integrate! For logistic equations <span class=\"chem\">dP/dt = kP(M - P)</span>, use partial fractions on <span class=\"chem\">1/(P(M - P))</span>.": "積分した瞬間に <span class=\"chem\">+ C</span> を付けましょう！ロジスティック方程式 <span class=\"chem\">dP/dt = kP(M - P)</span> では <span class=\"chem\">1/(P(M - P))</span> を部分分数分解します。",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "2. Homogeneous DE:<br><span class=\"chem\">dy/dx = F(y/x)</span><br>(numerator and denominator are polynomials whose terms all have the same total degree, e.g. <span class=\"chem\">(x^2 + y^2)/(xy)</span>)": "2. 同次形微分方程式：<br><span class=\"chem\">dy/dx = F(y/x)</span><br>（分子と分母が多項式で、すべての項の次数が同じ、例：<span class=\"chem\">(x^2 + y^2)/(xy)</span>）",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Substitute <strong><span class=\"chem\">y = vx</span></strong> and <strong><span class=\"chem\">dy/dx = v + x(dv/dx)</span></strong>.<br>Simplifies to the separable equation:<br><span class=\"chem\">x(dv/dx) = F(v) - v =&gt; int 1/(F(v) - v) dv = int (1/x) dx</span>.": "<strong><span class=\"chem\">y = vx</span></strong> と <strong><span class=\"chem\">dy/dx = v + x(dv/dx)</span></strong> を代入します。<br>すると変数分離形に帰着します：<br><span class=\"chem\">x(dv/dx) = F(v) - v =&gt; int 1/(F(v) - v) dv = int (1/x) dx</span>。",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Neither <span class=\"chem\">y = vx</span> nor <span class=\"chem\">dy/dx = v + x(dv/dx)</span> is printed in the Formula Booklet—memorize both! Always replace <span class=\"chem\">v = y/x</span> at the end.": "<span class=\"chem\">y = vx</span> も <span class=\"chem\">dy/dx = v + x(dv/dx)</span> も公式集には載っていないので、両方暗記しましょう！最後に必ず <span class=\"chem\">v = y/x</span> に戻します。",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "3. First-order linear DE:<br><span class=\"chem\">dy/dx + P(x)y = Q(x)</span><br>(linear in <i>y</i> and <span class=\"chem\">dy/dx</span>, with functions of <i>x</i> only as coefficients)": "3. 1 階線形微分方程式：<br><span class=\"chem\">dy/dx + P(x)y = Q(x)</span><br>（<i>y</i> と <span class=\"chem\">dy/dx</span> について 1 次で、係数が <i>x</i> のみの関数）",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Compute the <strong>integrating factor</strong> (Booklet 5.18):<br><span class=\"chem\">I(x) = e^{int P(x) dx}</span>.<br>Multiplying through collapses the left side by the product rule:<br><span class=\"chem\">d/dx[I(x) y] = I(x) Q(x) =&gt; I(x) y = int I(x) Q(x) dx + C</span>.": "<strong>積分因子</strong>（公式集 5.18）を計算します：<br><span class=\"chem\">I(x) = e^{int P(x) dx}</span>。<br>両辺に掛けると積の微分法の逆で左辺がまとまります：<br><span class=\"chem\">d/dx[I(x) y] = I(x) Q(x) =&gt; I(x) y = int I(x) Q(x) dx + C</span>。",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "<strong>Trap:</strong> If there is a coefficient in front of <span class=\"chem\">dy/dx</span> (such as <span class=\"chem\">x(dy/dx) + 2y = x^3</span>), <strong>divide the entire equation by <i>x</i> first</strong> so <span class=\"chem\">P(x) = 2/x</span>!": "<strong>落とし穴：</strong> <span class=\"chem\">dy/dx</span> の前に係数があるとき（例：<span class=\"chem\">x(dy/dx) + 2y = x^3</span>）は、<strong>最初に方程式全体を <i>x</i> で割って</strong> <span class=\"chem\">P(x) = 2/x</span> にします！",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "4. “Use Euler’s method with step size <i>h</i> to estimate <span class=\"chem\">y(x_n)</span>”": "4. 「刻み幅 <i>h</i> のオイラー法を用いて <span class=\"chem\">y(x_n)</span> を近似せよ」",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Numerical recurrence (Booklet 5.18):<br><span class=\"chem\">x_{n+1} = x_n + h</span><br><span class=\"chem\">y_{n+1} = y_n + h × f(x_n, y_n)</span>": "数値漸化式（公式集 5.18）：<br><span class=\"chem\">x_{n+1} = x_n + h</span><br><span class=\"chem\">y_{n+1} = y_n + h × f(x_n, y_n)</span>",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "On Paper 2, draw a clear table with columns <span class=\"chem\">n, x_n, y_n, f(x_n, y_n), y_{n+1}</span> and keep full calculator precision until the final 3 s.f. rounding.": "Paper 2 では <span class=\"chem\">n, x_n, y_n, f(x_n, y_n), y_{n+1}</span> の列をもつ見やすい表を作り、最後の有効数字 3 桁への丸めまで電卓の桁数をすべて保持しましょう。",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > caption
    "Maclaurin series decoder — choosing the fastest expansion pathway": "マクローリン級数デコーダー — 最速の展開ルートを選ぶ",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "What the exam question asks": "試験問題の問い方",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "Fastest IB method": "IB での最速解法",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "Why students lose time or marks": "時間切れや減点の原因",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "Expand a composite or product of known functions, e.g. <span class=\"chem\">e^{2x} cos(3x)</span> or <span class=\"chem\">ln(1 + 2x^2)</span> up to <span class=\"chem\">x^4</span>": "既知の関数の合成や積を展開する（例：<span class=\"chem\">e^{2x} cos(3x)</span> や <span class=\"chem\">ln(1 + 2x^2)</span> を <span class=\"chem\">x^4</span> の項まで）",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "<strong>Build from standard Booklet series</strong> (<span class=\"chem\">e^x, sin x, cos x, arctan x, ln(1+x), (1+x)^p</span>): substitute the inner term, multiply polynomials, and drop powers above <span class=\"chem\">x^4</span>.": "<strong>公式集の基本級数から組み立てる</strong>（<span class=\"chem\">e^x, sin x, cos x, arctan x, ln(1+x), (1+x)^p</span>）：内側の式を代入し、多項式を掛けて <span class=\"chem\">x^4</span> より高次の項を切り捨てます。",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Differentiating <span class=\"chem\">e^{2x} cos(3x)</span> four times by the product rule takes 10 minutes and invites sign errors; multiplying the two Booklet series takes 45 seconds!": "<span class=\"chem\">e^{2x} cos(3x)</span> を積の微分法で 4 回微分すると 10 分かかり符号ミスも起きやすいですが、公式集の 2 つの級数を掛け合わせれば 45 秒で解けます！",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "Expand a non-standard function such as <span class=\"chem\">f(x) = tan x</span>, <span class=\"chem\">sec x</span>, or <span class=\"chem\">e^{sin x}</span> by repeated differentiation (using <span class=\"chem\">f^{(n)}(0)</span>)": "<span class=\"chem\">f(x) = tan x</span>、<span class=\"chem\">sec x</span>、<span class=\"chem\">e^{sin x}</span> などの標準的でない関数を、繰り返し微分して（<span class=\"chem\">f^{(n)}(0)</span> を用いて）展開する",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "<strong>Repeated differentiation</strong>: compute <span class=\"chem\">f(0), f'(0), f''(0), f'''(0)</span> and substitute into <span class=\"chem\">f(0) + x f'(0) + (x^2/2!)f''(0) + (x^3/3!)f'''(0) + ...</span>.": "<strong>高次微分の反復</strong>：<span class=\"chem\">f(0), f'(0), f''(0), f'''(0)</span> を計算して <span class=\"chem\">f(0) + x f'(0) + (x^2/2!)f''(0) + (x^3/3!)f'''(0) + ...</span> に代入します。",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Remember to divide by <span class=\"chem\">2! = 2</span>, <span class=\"chem\">3! = 6</span>, <span class=\"chem\">4! = 24</span>! Writing <span class=\"chem\">f''(0) x^2</span> without <span class=\"chem\">2!</span> is a classic slip.": "<span class=\"chem\">2! = 2</span>、<span class=\"chem\">3! = 6</span>、<span class=\"chem\">4! = 24</span> で割るのを忘れないでください！<span class=\"chem\">2!</span> を抜かして <span class=\"chem\">f''(0) x^2</span> と書くのは典型的なミスです。",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "Given <span class=\"chem\">dy/dx = f(x, y)</span> and <span class=\"chem\">y(0) = y_0</span>, find the Maclaurin series for <span class=\"chem\">y(x)</span> up to <span class=\"chem\">x^3</span>": "<span class=\"chem\">dy/dx = f(x, y)</span> と <span class=\"chem\">y(0) = y_0</span> が与えられ、<span class=\"chem\">y(x)</span> のマクローリン級数を <span class=\"chem\">x^3</span> まで求める",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "<strong>Implicit differentiation of the DE</strong>: differentiate <span class=\"chem\">y' = f(x, y)</span> with respect to <i>x</i> to express <span class=\"chem\">y''</span> in terms of <span class=\"chem\">x, y, y'</span>, then differentiate again for <span class=\"chem\">y'''</span>, and evaluate at <span class=\"chem\">x = 0</span>.": "<strong>微分方程式の陰関数微分</strong>：<span class=\"chem\">y' = f(x, y)</span> を <i>x</i> で微分して <span class=\"chem\">y''</span> を <span class=\"chem\">x, y, y'</span> で表し、さらに微分して <span class=\"chem\">y'''</span> を求めて <span class=\"chem\">x = 0</span> で評価します。",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Never try to solve a non-linear DE like <span class=\"chem\">dy/dx = x + y^2</span> analytically—differentiating the DE directly gives <span class=\"chem\">y''(0)</span> and <span class=\"chem\">y'''(0)</span> in two lines!": "<span class=\"chem\">dy/dx = x + y^2</span> のような非線形微分方程式を解析的に解こうとしてはいけません——微分方程式を直接微分すれば 2 行で <span class=\"chem\">y''(0)</span> と <span class=\"chem\">y'''(0)</span> が求まります！",

    // Slope fields, Euler’s method and separable differential equa > data-toc attribute
    "Euler & separable DEs": "オイラー法と変数分離形",

    // Slope fields, Euler’s method and separable differential equa > h2
    "Euler’s method and separable differential equations": "オイラー法と変数分離形の微分方程式",

    // Slope fields, Euler’s method and separable differential equa > p
    "A first-order differential equation <span class=\"chem\">dy/dx = f(x, y)</span> assigns a tangent gradient to every point <span class=\"chem\">(x, y)</span> in the plane. Plotting short line segments with slope <span class=\"chem\">f(x, y)</span> on a grid produces a <dfn data-def=\"A graphical grid of short line segments showing the gradient dy/dx = f(x, y) at each point (x, y), which solution curves must follow tangentially.\">slope field</dfn> (direction field). Any solution curve <span class=\"chem\">y(x)</span> passing through an initial point <span class=\"chem\">(x_0, y_0)</span> must be tangent to the slope-field segments everywhere along its path. Slope fields are not in the AA guide (they belong to Applications and Interpretation HL); they are shown here only to picture what Euler’s method does.": "1 階微分方程式 <span class=\"chem\">dy/dx = f(x, y)</span> は、平面上の各点 <span class=\"chem\">(x, y)</span> における接線の傾きを定めます。格子点ごとに傾き <span class=\"chem\">f(x, y)</span> の短い線分を描いた図を<dfn data-def=\"各点 (x, y) における傾き dy/dx = f(x, y) を短い線分の格子として表した図。解曲線は常にこの線分に接するように進む。\">方向場 <span class=\"en-term\">(slope field)</span></dfn>といいます。初期点 <span class=\"chem\">(x_0, y_0)</span> を通る解曲線 <span class=\"chem\">y(x)</span> は、その経路上のあらゆる点で方向場の線分に接します。方向場は AA ガイドの範囲外（AI HL の内容）で、ここではオイラー法の働きを視覚的に示すためだけに使っています。",

    // Slope fields, Euler’s method and separable differential equa > data-def attribute
    "A graphical grid of short line segments showing the gradient dy/dx = f(x, y) at each point (x, y), which solution curves must follow tangentially.": "各点 (x, y) における傾き dy/dx = f(x, y) を短い線分の格子として表した図。解曲線は常にこの線分に接するように進む。",

    // Slope fields, Euler’s method and separable differential equa > h3
    "Numerical approximation via Euler’s method": "オイラー法による数値近似",

    // Slope fields, Euler’s method and separable differential equa > p
    "When a differential equation cannot be solved algebraically, <dfn data-def=\"A numerical step-by-step algorithm that approximates the solution curve of dy/dx = f(x, y) by moving along the local tangent line over small horizontal steps of size h.\">Euler’s method</dfn> approximates the solution curve by stepping forward along the current tangent line in small increments of step length <i>h</i>:": "微分方程式を式で解けないとき、<dfn data-def=\"小さな横幅 h ごとにその点での接線に沿って進むことで、dy/dx = f(x, y) の解曲線を段階的に近似する数値計算アルゴリズム。\">オイラー法 <span class=\"en-term\">(Euler’s method)</span></dfn>では、刻み幅 <i>h</i> ずつ現在の接線に沿って前に進むことで解曲線を近似します：",

    // Slope fields, Euler’s method and separable differential equa > data-def attribute
    "A numerical step-by-step algorithm that approximates the solution curve of dy/dx = f(x, y) by moving along the local tangent line over small horizontal steps of size h.": "小さな横幅 h ごとにその点での接線に沿って進むことで、dy/dx = f(x, y) の解曲線を段階的に近似する数値計算アルゴリズム。",

    // Slope fields, Euler’s method and separable differential equa > equation > dd
    "constant horizontal step size": "一定の横方向の刻み幅",

    // Slope fields, Euler’s method and separable differential equa > equation > dt
    "f(x<sub>n</sub>, y<sub>n</sub>)": "f(x<sub>n</sub>, y<sub>n</sub>)",

    // Slope fields, Euler’s method and separable differential equa > equation > dd
    "gradient dy/dx evaluated at the current point (<i>x</i><sub><i>n</i></sub>, <i>y</i><sub><i>n</i></sub>)": "現在の点 (<i>x</i><sub><i>n</i></sub>, <i>y</i><sub><i>n</i></sub>) で計算した傾き dy/dx",

    // Slope fields, Euler’s method and separable differential equa > key idea > p
    "<strong>Overestimate vs underestimate (concavity analysis):</strong> Because Euler’s method follows the tangent line at each step:": "<strong>過大評価と過小評価（凹凸の分析）：</strong> オイラー法は各ステップで接線をたどるため：",

    // Slope fields, Euler’s method and separable differential equa > key idea > li
    "If the solution curve is <strong>concave up (<span class=\"chem\">d^2y/dx^2 &gt; 0</span>)</strong> on the interval, every tangent line lies <em>below</em> the curve, so Euler’s method gives an <strong>underestimate</strong>.": "区間で解曲線が<strong>下に凸（<span class=\"chem\">d^2y/dx^2 &gt; 0</span>）</strong>のとき、すべての接線は曲線の<em>下側</em>にあるため、オイラー法は<strong>過小評価（小さめの近似値）</strong>を与えます。",

    // Slope fields, Euler’s method and separable differential equa > key idea > li
    "If the solution curve is <strong>concave down (<span class=\"chem\">d^2y/dx^2 &lt; 0</span>)</strong>, every tangent line lies <em>above</em> the curve, so Euler’s method gives an <strong>overestimate</strong>.": "解曲線が<strong>上に凸（<span class=\"chem\">d^2y/dx^2 &lt; 0</span>）</strong>のとき、すべての接線は曲線の<em>上側</em>にあるため、オイラー法は<strong>過大評価（大きめの近似値）</strong>を与えます。",

    // Slope fields, Euler’s method and separable differential equa > key idea > li
    "Reducing the step size <i>h</i> (for example, halving <i>h</i>) reduces the truncation error and brings the Euler polygon closer to the exact curve.": "刻み幅 <i>h</i> を小さくする（例：<i>h</i> を半分にする）と打ち切り誤差が減り、オイラー法の折れ線が厳密な曲線に近づきます。",

    // Slope fields, Euler’s method and separable differential equa > widget > data-title attribute
    "Slope field & Euler’s method step explorer": "方向場とオイラー法のステップ・エクスプローラー",

    // Slope fields, Euler’s method and separable differential equa > widget > data-kicker attribute
    "AHL 5.18 · Interactive": "AHL 5.18 · インタラクティブ",

    // Slope fields, Euler’s method and separable differential equa > widget > figcaption
    "The background segments show the slope field <span class=\"chem\">dy/dx = f(x, y)</span>. The solid curve is the exact solution through <span class=\"chem\">(0, y_0)</span>, and the dashed polygon shows Euler’s method with step size <i>h</i>. Notice how concave-up regions cause Euler’s polygon to sit below the exact curve.": "背景の線分は方向場 <span class=\"chem\">dy/dx = f(x, y)</span> を表します。実線の曲線は <span class=\"chem\">(0, y_0)</span> を通る厳密解、破線の折れ線は刻み幅 <i>h</i> のオイラー法による近似です。下に凸の領域ではオイラー法の折れ線が厳密解の下側にくることに注目しましょう。",

    // Slope fields, Euler’s method and separable differential equa > h3
    "Separable differential equations and growth models": "変数分離形の微分方程式と成長モデル",

    // Slope fields, Euler’s method and separable differential equa > p
    "When <span class=\"chem\">dy/dx = g(x) h(y)</span>, separate the variables by placing all <i>y</i> terms with <span class=\"chem\">dy</span> and all <i>x</i> terms with <span class=\"chem\">dx</span>:": "<span class=\"chem\">dy/dx = g(x) h(y)</span> のとき、<i>y</i> の項をすべて <span class=\"chem\">dy</span> 側に、<i>x</i> の項をすべて <span class=\"chem\">dx</span> 側に集めて変数を分離します：",

    // Slope fields, Euler’s method and separable differential equa > p
    "<span class=\"chem\">int (1 / h(y)) dy = int g(x) dx</span>.": "<span class=\"chem\">int (1 / h(y)) dy = int g(x) dx</span>。",

    // Slope fields, Euler’s method and separable differential equa > p
    "Two classic scientific models in IB AA HL rely on separation of variables:": "IB AA HL に登場する 2 つの代表的な科学モデルは変数分離法に基づいています：",

    // Slope fields, Euler’s method and separable differential equa > li
    "<strong>Newton’s law of cooling / radioactive decay:</strong> <span class=\"chem\">dT/dt = -k(T - T_s) =&gt; int 1/(T - T_s) dT = int -k dt =&gt; T(t) = T_s + A e^{-kt}</span>.": "<strong>ニュートンの冷却の法則 / 放射性崩壊：</strong> <span class=\"chem\">dT/dt = -k(T - T_s) =&gt; int 1/(T - T_s) dT = int -k dt =&gt; T(t) = T_s + A e^{-kt}</span>。",

    // Slope fields, Euler’s method and separable differential equa > li
    "<strong>Logistic population growth:</strong> <span class=\"chem\">dP/dt = kP(M - P)</span>, where <i>M</i> is the carrying capacity. Separating gives <span class=\"chem\">int M/(P(M - P)) dP = int Mk dt</span>; splitting the left side by partial fractions <span class=\"chem\">1/P + 1/(M - P)</span> yields <span class=\"chem\">ln|P / (M - P)| = Mkt + C =&gt; P(t) = M / (1 + A e^{-Mkt})</span>.": "<strong>ロジスティック個体数成長：</strong> <span class=\"chem\">dP/dt = kP(M - P)</span>（<i>M</i> は環境収容力）。変数を分離すると <span class=\"chem\">int M/(P(M - P)) dP = int Mk dt</span> となり、左辺を <span class=\"chem\">1/P + 1/(M - P)</span> に部分分数分解すると <span class=\"chem\">ln|P / (M - P)| = Mkt + C =&gt; P(t) = M / (1 + A e^{-Mkt})</span> が得られます。",

    // Slope fields, Euler’s method and separable differential equa > worked example > h3
    "Using Euler’s method and solving a separable differential equation": "オイラー法の適用と変数分離形の微分方程式の解法",

    // Slope fields, Euler’s method and separable differential equa > worked example > p
    "Consider the differential equation <span class=\"chem\">dy/dx = 2xy^2</span> with initial condition <span class=\"chem\">y(0) = 1</span>.": "初期条件 <span class=\"chem\">y(0) = 1</span> を満たす微分方程式 <span class=\"chem\">dy/dx = 2xy^2</span> を考える。",

    // Slope fields, Euler’s method and separable differential equa > worked example > p
    "(a) Use Euler’s method with step size <span class=\"chem\">h = 0.2</span> to approximate <span class=\"chem\">y(0.4)</span>. <strong>[3 marks]</strong>": "(a) 刻み幅 <span class=\"chem\">h = 0.2</span> のオイラー法を用いて <span class=\"chem\">y(0.4)</span> の近似値を求めなさい。 <strong>[3 marks]</strong>",

    // Slope fields, Euler’s method and separable differential equa > worked example > p
    "(b) Solve the differential equation analytically to find the exact value of <span class=\"chem\">y(0.4)</span>, and explain why Euler’s method underestimated the exact value. <strong>[5 marks]</strong>": "(b) この微分方程式を解析的に解いて <span class=\"chem\">y(0.4)</span> の正確な値を求め (find)、オイラー法が正確な値より小さく見積もった理由を説明しなさい。 <strong>[5 marks]</strong>",

    // Slope fields, Euler’s method and separable differential equa > worked example > data-title attribute
    "Step through Euler’s recurrence from x₀ = 0 to x₂ = 0.4": "x₀ = 0 から x₂ = 0.4 までオイラー法の漸化式を順に計算する",

    // Slope fields, Euler’s method and separable differential equa > worked example > p
    "Apply y_{n+1} = y_n + 0.2(2 x_n y_n²) twice in a clear table.": "y_{n+1} = y_n + 0.2(2 x_n y_n²) を 2 回適用します。",

    // Slope fields, Euler’s method and separable differential equa > worked example > maths line
    "Step 0 → 1: <i>x</i><sub>0</sub> = 0, <i>y</i><sub>0</sub> = 1, <i>f</i>(0, 1) = 2(0)(1)<sup>2</sup> = 0 ⇒ <i>x</i><sub>1</sub> = 0.2, <i>y</i><sub>1</sub> = 1 + 0.2(0) = 1 <b>[M1 A1]</b>": "ステップ 0 → 1：<i>x</i><sub>0</sub> = 0, <i>y</i><sub>0</sub> = 1, <i>f</i>(0, 1) = 2(0)(1)<sup>2</sup> = 0 ⇒ <i>x</i><sub>1</sub> = 0.2, <i>y</i><sub>1</sub> = 1 + 0.2(0) = 1 <b>[M1 A1]</b>",

    // Slope fields, Euler’s method and separable differential equa > worked example > maths line
    "Step 1 → 2: <i>x</i><sub>1</sub> = 0.2, <i>y</i><sub>1</sub> = 1, <i>f</i>(0.2, 1) = 2(0.2)(1)<sup>2</sup> = 0.4 ⇒ <i>x</i><sub>2</sub> = 0.4, <i>y</i><sub>2</sub> = 1 + 0.2(0.4) = <b>1.08</b> <b>[A1]</b>": "ステップ 1 → 2：<i>x</i><sub>1</sub> = 0.2, <i>y</i><sub>1</sub> = 1, <i>f</i>(0.2, 1) = 2(0.2)(1)<sup>2</sup> = 0.4 ⇒ <i>x</i><sub>2</sub> = 0.4, <i>y</i><sub>2</sub> = 1 + 0.2(0.4) = <b>1.08</b> <b>[A1]</b>",

    // Slope fields, Euler’s method and separable differential equa > worked example > data-title attribute
    "Separate variables and integrate both sides": "変数を分離して両辺を積分する",

    // Slope fields, Euler’s method and separable differential equa > worked example > p
    "Divide by y² to isolate y on the left and x on the right.": "y² で割って左辺に y、右辺に x をまとめます。",

    // Slope fields, Euler’s method and separable differential equa > worked example > data-title attribute
    "Apply y(0) = 1, evaluate y(0.4), and compare concavity": "y(0) = 1 を代入して y(0.4) を計算し、凹凸を比較する",

    // Slope fields, Euler’s method and separable differential equa > worked example > p
    "Substitute x = 0, y = 1 to find C, then compute y(0.4).": "x = 0, y = 1 を代入して C を求め、y(0.4) を計算します。",

    // Slope fields, Euler’s method and separable differential equa > worked example > maths line
    "Exact value: <i>y</i>(0.4) = <span class=\"frac\"><span>1</span><span>1 − 0.16</span></span> = <span class=\"frac\"><span>1</span><span>0.84</span></span> = <b><span class=\"frac\"><span>25</span><span>21</span></span> ≈ 1.19</b>. Because <i>y</i>(<i>x</i>) is concave up (<i>y</i>″ &gt; 0) on [0, 0.4], the tangent lines lie below the curve, so Euler’s method underestimates <i>y</i>(0.4). <b>[A1 R1]</b>": "正確な値：<i>y</i>(0.4) = <span class=\"frac\"><span>1</span><span>1 − 0.16</span></span> = <span class=\"frac\"><span>1</span><span>0.84</span></span> = <b><span class=\"frac\"><span>25</span><span>21</span></span> ≈ 1.19</b>。[0, 0.4] で <i>y</i>(<i>x</i>) は下に凸（<i>y</i>″ &gt; 0）なので接線は曲線の下側にあり、オイラー法は <i>y</i>(0.4) を過小評価します。 <b>[A1 R1]</b>",

    // Slope fields, Euler’s method and separable differential equa > worked example > p
    "(a) 1.08; (b) 25/21 ≈ 1.19 (underestimate since curve is concave up)": "(a) 1.08；(b) 25/21 ≈ 1.19（曲線が下に凸なので過小評価）",

    // Slope fields, Euler’s method and separable differential equa > try it > p
    "Given the differential equation <span class=\"chem\">dy/dx = x + y</span> with initial condition <span class=\"chem\">y(0) = 1</span>, use Euler’s method with step length <span class=\"chem\">h = 0.1</span> to calculate the approximation <span class=\"chem\">y_2</span> for <span class=\"chem\">y(0.2)</span>.": "微分方程式 <span class=\"chem\">dy/dx = x + y</span> と初期条件 <span class=\"chem\">y(0) = 1</span> が与えられたとき、刻み幅 <span class=\"chem\">h = 0.1</span> のオイラー法を用いて <span class=\"chem\">y(0.2)</span> の近似値 <span class=\"chem\">y_2</span> を計算しなさい (calculate)。",

    // Slope fields, Euler’s method and separable differential equa > try it > li
    "For the first step (<span class=\"chem\">x_0 = 0, y_0 = 1</span>): <span class=\"chem\">f(0, 1) = 0 + 1 = 1</span>, so <span class=\"chem\">y_1 = 1 + 0.1(1) = 1.1</span> at <span class=\"chem\">x_1 = 0.1</span>.": "第 1 ステップ（<span class=\"chem\">x_0 = 0, y_0 = 1</span>）：<span class=\"chem\">f(0, 1) = 0 + 1 = 1</span> より、<span class=\"chem\">x_1 = 0.1</span> で <span class=\"chem\">y_1 = 1 + 0.1(1) = 1.1</span> です。",

    // Slope fields, Euler’s method and separable differential equa > try it > li
    "For the second step (<span class=\"chem\">x_1 = 0.1, y_1 = 1.1</span>): <span class=\"chem\">f(0.1, 1.1) = 0.1 + 1.1 = 1.2</span>, so <span class=\"chem\">y_2 = 1.1 + 0.1(1.2)</span>.": "第 2 ステップ（<span class=\"chem\">x_1 = 0.1, y_1 = 1.1</span>）：<span class=\"chem\">f(0.1, 1.1) = 0.1 + 1.1 = 1.2</span> より、<span class=\"chem\">y_2 = 1.1 + 0.1(1.2)</span> となります。",

    // Homogeneous differential equations and the integrating facto > data-toc attribute
    "Homogeneous & integrating factor": "同次形と積分因子",

    // Homogeneous differential equations and the integrating facto > h2
    "Homogeneous differential equations and the integrating factor": "同次形の微分方程式と積分因子",

    // Homogeneous differential equations and the integrating facto > h3
    "1. Homogeneous differential equations (<span class=\"chem\">y = vx</span>)": "1. 同次形の微分方程式 (<span class=\"chem\">y = vx</span>)",

    // Homogeneous differential equations and the integrating facto > p
    "A first-order differential equation is <dfn data-def=\"A differential equation that can be written in the form dy/dx = F(y/x), where every algebraic term in x and y has the same total degree.\">homogeneous</dfn> if it can be written as <span class=\"chem\">dy/dx = F(y/x)</span>—for example, <span class=\"chem\">dy/dx = (x^2 + 3y^2)/(2xy) = (1/2)(x/y) + (3/2)(y/x)</span>. Because the ratio <span class=\"chem\">y/x</span> couples the variables, we introduce the new variable <span class=\"chem\">v = y/x</span>:": "1 階微分方程式が <span class=\"chem\">dy/dx = F(y/x)</span> の形に書けるとき（例：<span class=\"chem\">dy/dx = (x^2 + 3y^2)/(2xy) = (1/2)(x/y) + (3/2)(y/x)</span>）、その微分方程式は<dfn data-def=\"dy/dx = F(y/x) の形に表すことができ、x と y に関するすべての代数項の総次数が等しい微分方程式。\">同次形 <span class=\"en-term\">(homogeneous)</span></dfn>であるといいます。比 <span class=\"chem\">y/x</span> が変数を結びつけているため、新しい変数 <span class=\"chem\">v = y/x</span> を導入します：",

    // Homogeneous differential equations and the integrating facto > data-def attribute
    "A differential equation that can be written in the form dy/dx = F(y/x), where every algebraic term in x and y has the same total degree.": "dy/dx = F(y/x) の形に表すことができ、x と y に関するすべての代数項の総次数が等しい微分方程式。",

    // Homogeneous differential equations and the integrating facto > equation > maths line
    "Let <i>y</i> = <i>vx</i> ⇒ <span class=\"frac\"><span><i>dy</i></span><span><i>dx</i></span></span> = <i>v</i> + <i>x</i> <span class=\"frac\"><span><i>dv</i></span><span><i>dx</i></span></span> ⇒ <i>x</i> <span class=\"frac\"><span><i>dv</i></span><span><i>dx</i></span></span> = <i>F</i>(<i>v</i>) − <i>v</i>": "<i>y</i> = <i>vx</i> とおく ⇒ <span class=\"frac\"><span><i>dy</i></span><span><i>dx</i></span></span> = <i>v</i> + <i>x</i> <span class=\"frac\"><span><i>dv</i></span><span><i>dx</i></span></span> ⇒ <i>x</i> <span class=\"frac\"><span><i>dv</i></span><span><i>dx</i></span></span> = <i>F</i>(<i>v</i>) − <i>v</i>",

    // Homogeneous differential equations and the integrating facto > equation > dd
    "dimensionless ratio substitution (must be memorized—not in the Formula Booklet!)": "無次元の比による置換（公式集に載っていないので暗記必須！）",

    // Homogeneous differential equations and the integrating facto > equation > dt
    "x(dv/dx) = F(v) − v": "x(dv/dx) = F(v) − v",

    // Homogeneous differential equations and the integrating facto > equation > dd
    "always separates into ∫ 1/(F(v) − v) dv = ∫ (1/x) dx": "必ず ∫ 1/(F(v) − v) dv = ∫ (1/x) dx に変数分離できる",

    // Homogeneous differential equations and the integrating facto > h3
    "2. First-order linear differential equations and the integrating factor": "2. 1 階線形微分方程式と積分因子",

    // Homogeneous differential equations and the integrating facto > p
    "When a differential equation is linear in both <span class=\"chem\">dy/dx</span> and <i>y</i>, first divide by any coefficient in front of <span class=\"chem\">dy/dx</span> to put it into standard form:": "微分方程式が <span class=\"chem\">dy/dx</span> と <i>y</i> の両方について 1 次であるとき、まず <span class=\"chem\">dy/dx</span> の前の係数で割って標準形に直します：",

    // Homogeneous differential equations and the integrating facto > p
    "<span class=\"chem\">dy/dx + P(x) y = Q(x)</span>.": "<span class=\"chem\">dy/dx + P(x) y = Q(x)</span>。",

    // Homogeneous differential equations and the integrating facto > p
    "Multiplying every term by the <dfn data-def=\"The function I(x) = e^{∫ P(x) dx} that turns the left-hand side of dy/dx + P(x)y = Q(x) into the exact product-rule derivative d/dx[I(x) y].\">integrating factor</dfn> <span class=\"chem\">I(x) = e^{int P(x) dx}</span> turns the left-hand side into a single product-rule derivative:": "すべての項に<dfn data-def=\"dy/dx + P(x)y = Q(x) の左辺を積の微分法の形 d/dx[I(x) y] に変える関数 I(x) = e^{∫ P(x) dx}。\">積分因子 <span class=\"en-term\">(integrating factor)</span></dfn> <span class=\"chem\">I(x) = e^{int P(x) dx}</span> を掛けると、左辺が 1 つの積の微分の形にまとまります：",

    // Homogeneous differential equations and the integrating facto > data-def attribute
    "The function I(x) = e^{∫ P(x) dx} that turns the left-hand side of dy/dx + P(x)y = Q(x) into the exact product-rule derivative d/dx[I(x) y].": "dy/dx + P(x)y = Q(x) の左辺を積の微分法の形 d/dx[I(x) y] に変える関数 I(x) = e^{∫ P(x) dx}。",

    // Homogeneous differential equations and the integrating facto > equation > dd
    "coefficient of <i>y</i> (including its plus or minus sign!) after making the coefficient of dy/dx equal to 1": "dy/dx の係数を 1 にした後の <i>y</i> の係数（プラス・マイナスの符号も含む！）",

    // Homogeneous differential equations and the integrating facto > common mistake > p
    "<strong>Two classic integrating-factor traps:</strong>": "<strong>積分因子でよくある 2 つの落とし穴：</strong>",

    // Homogeneous differential equations and the integrating facto > common mistake > li
    "<strong>Forgetting to divide by the leading coefficient first:</strong> In <span class=\"chem\">x(dy/dx) - 2y = x^4</span>, you must divide by <i>x</i> to get <span class=\"chem\">dy/dx - (2/x)y = x^3</span>. Thus <span class=\"chem\">P(x) = -2/x</span>, and <span class=\"chem\">I(x) = e^{int (-2/x) dx} = e^{-2 ln x} = e^{ln(x^{-2})} = x^{-2}</span> (not <span class=\"chem\">e^{-2x}</span>!).": "<strong>最初に先頭の係数で割り忘れる：</strong> <span class=\"chem\">x(dy/dx) - 2y = x^4</span> では、まず <i>x</i> で割って <span class=\"chem\">dy/dx - (2/x)y = x^3</span> にしなければなりません。よって <span class=\"chem\">P(x) = -2/x</span> となり、<span class=\"chem\">I(x) = e^{int (-2/x) dx} = e^{-2 ln x} = e^{ln(x^{-2})} = x^{-2}</span>（<span class=\"chem\">e^{-2x}</span> ではありません！）となります。",

    // Homogeneous differential equations and the integrating facto > common mistake > li
    "<strong>Forgetting to divide the constant <span class=\"chem\">+ C</span> by <span class=\"chem\">I(x)</span>:</strong> Write <span class=\"chem\">+ C</span> immediately when integrating <span class=\"chem\">int I(x) Q(x) dx</span>, then divide the <em>entire</em> right-hand side (including <i>C</i>) by <span class=\"chem\">I(x)</span>.": "<strong>定数 <span class=\"chem\">+ C</span> を <span class=\"chem\">I(x)</span> で割り忘れる：</strong> <span class=\"chem\">int I(x) Q(x) dx</span> を積分した直後に <span class=\"chem\">+ C</span> を書き、その後で（<i>C</i> を含めた）右辺<em>全体</em>を <span class=\"chem\">I(x)</span> で割りましょう。",

    // Homogeneous differential equations and the integrating facto > worked example > h3
    "Solving a first-order linear differential equation using an integrating factor": "積分因子を用いて 1 階線形微分方程式を解く",

    // Homogeneous differential equations and the integrating facto > worked example > p
    "Find the particular solution of the differential equation <span class=\"chem\">x (dy/dx) + 2y = 4x^2</span> (<span class=\"chem\">x &gt; 0</span>) given that <span class=\"chem\">y(1) = 3</span>. <strong>[6 marks]</strong>": "<span class=\"chem\">y(1) = 3</span> が与えられたとき、微分方程式 <span class=\"chem\">x (dy/dx) + 2y = 4x^2</span>（<span class=\"chem\">x &gt; 0</span>）の特殊解を求めなさい (Find)。 <strong>[6 marks]</strong>",

    // Homogeneous differential equations and the integrating facto > worked example > data-title attribute
    "Divide by x to write the equation in standard form dy/dx + P(x)y = Q(x)": "x で割って標準形 dy/dx + P(x)y = Q(x) に直す",

    // Homogeneous differential equations and the integrating facto > worked example > p
    "The integrating factor formula requires the coefficient of dy/dx to be 1.": "積分因子の公式を使うには dy/dx の係数が 1 である必要があります。",

    // Homogeneous differential equations and the integrating facto > worked example > maths line
    "<span class=\"frac\"><span><i>dy</i></span><span><i>dx</i></span></span> + <span class=\"frac\"><span>2</span><span><i>x</i></span></span><i>y</i> = 4<i>x</i> (so <i>P</i>(<i>x</i>) = <span class=\"frac\"><span>2</span><span><i>x</i></span></span>, <i>Q</i>(<i>x</i>) = 4<i>x</i>) <b>[M1]</b>": "<span class=\"frac\"><span><i>dy</i></span><span><i>dx</i></span></span> + <span class=\"frac\"><span>2</span><span><i>x</i></span></span><i>y</i> = 4<i>x</i> （よって <i>P</i>(<i>x</i>) = <span class=\"frac\"><span>2</span><span><i>x</i></span></span>, <i>Q</i>(<i>x</i>) = 4<i>x</i>） <b>[M1]</b>",

    // Homogeneous differential equations and the integrating facto > worked example > data-title attribute
    "Calculate the integrating factor I(x)": "積分因子 I(x) を計算する",

    // Homogeneous differential equations and the integrating facto > worked example > p
    "Use exponent and log rules to simplify e^{2 ln x} to x².": "指数・対数の法則を使って e^{2 ln x} を x² に簡単化します。",

    // Homogeneous differential equations and the integrating facto > worked example > data-title attribute
    "Multiply by x², integrate both sides, and apply y(1) = 3": "x² を掛けて両辺を積分し、y(1) = 3 を代入する",

    // Homogeneous differential equations and the integrating facto > worked example > p
    "The left side collapses to d/dx(x²y). Integrate the right side and don’t forget + C.": "左辺は d/dx(x²y) にまとまります。右辺を積分し、+ C を忘れないようにしましょう。",

    // Homogeneous differential equations and the integrating facto > worked example > maths line
    "Substitute <i>x</i> = 1, <i>y</i> = 3: (1)<sup>2</sup>(3) = 1<sup>4</sup> + <i>C</i> ⇒ <i>C</i> = 2 ⇒ <b><i>y</i> = <i>x</i><sup>2</sup> + <span class=\"frac\"><span>2</span><span><i>x</i><sup>2</sup></span></span></b> <b>[A1]</b>": "<i>x</i> = 1, <i>y</i> = 3 を代入：(1)<sup>2</sup>(3) = 1<sup>4</sup> + <i>C</i> ⇒ <i>C</i> = 2 ⇒ <b><i>y</i> = <i>x</i><sup>2</sup> + <span class=\"frac\"><span>2</span><span><i>x</i><sup>2</sup></span></span></b> <b>[A1]</b>",

    // Homogeneous differential equations and the integrating facto > try it > p
    "Solve the differential equation <span class=\"chem\">x (dy/dx) - y = 3x^2</span> (<span class=\"chem\">x &gt; 0</span>) given that <span class=\"chem\">y(1) = 2</span>, and find the exact value of <span class=\"chem\">y(2)</span>.": "<span class=\"chem\">y(1) = 2</span> を満たす微分方程式 <span class=\"chem\">x (dy/dx) - y = 3x^2</span>（<span class=\"chem\">x &gt; 0</span>）を解き、<span class=\"chem\">y(2)</span> の正確な値を求めなさい (find)。",

    // Homogeneous differential equations and the integrating facto > try it > li
    "Divide by <i>x</i>: <span class=\"chem\">dy/dx - (1/x)y = 3x</span>. The integrating factor is <span class=\"chem\">I(x) = e^{int (-1/x) dx} = e^{-ln x} = 1/x</span>.": "<i>x</i> で割ると <span class=\"chem\">dy/dx - (1/x)y = 3x</span>。積分因子は <span class=\"chem\">I(x) = e^{int (-1/x) dx} = e^{-ln x} = 1/x</span> です。",

    // Homogeneous differential equations and the integrating facto > try it > li
    "Multiply by <span class=\"chem\">1/x</span>: <span class=\"chem\">d/dx(y / x) = 3 =&gt; y / x = 3x + C</span>. Use <span class=\"chem\">y(1) = 2</span> to find <i>C</i>, then evaluate <span class=\"chem\">y(2)</span>.": "<span class=\"chem\">1/x</span> を掛けると <span class=\"chem\">d/dx(y / x) = 3 =&gt; y / x = 3x + C</span> となります。<span class=\"chem\">y(1) = 2</span> から <i>C</i> を求め、<span class=\"chem\">y(2)</span> を計算します。",

    // Maclaurin series expansions and differential equation series > data-toc attribute
    "Maclaurin series": "マクローリン級数",

    // Maclaurin series expansions and differential equation series > h2
    "Maclaurin series expansions and differential equation series": "マクローリン級数展開と微分方程式からの級数導出",

    // Maclaurin series expansions and differential equation series > p
    "A <dfn data-def=\"A power series expansion of a smooth function f(x) centred at x = 0, matching the function's value and all its derivatives at x = 0.\">Maclaurin series</dfn> approximates a smooth function <span class=\"chem\">f(x)</span> near <span class=\"chem\">x = 0</span> using a polynomial whose derivatives at <span class=\"chem\">x = 0</span> match those of <span class=\"chem\">f(x)</span> order by order:": "<dfn data-def=\"x = 0 を中心とした滑らかな関数 f(x) のべき級数展開。x = 0 における関数の値とすべての導関数の値を一致させる。\">マクローリン級数 <span class=\"en-term\">(Maclaurin series)</span></dfn>は、<span class=\"chem\">x = 0</span> における各階の導関数が <span class=\"chem\">f(x)</span> と一致するような多項式を用いて、<span class=\"chem\">x = 0</span> の近くで滑らかな関数 <span class=\"chem\">f(x)</span> を近似します：",

    // Maclaurin series expansions and differential equation series > data-def attribute
    "A power series expansion of a smooth function f(x) centred at x = 0, matching the function's value and all its derivatives at x = 0.": "x = 0 を中心とした滑らかな関数 f(x) のべき級数展開。x = 0 における関数の値とすべての導関数の値を一致させる。",

    // Maclaurin series expansions and differential equation series > equation > dd
    "<i>n</i>-th derivative of <i>f</i> evaluated at <i>x</i> = 0": "<i>x</i> = 0 における <i>f</i> の第 <i>n</i> 次導関数の値",

    // Maclaurin series expansions and differential equation series > equation > dd
    "factorial 1 × 2 × … × <i>n</i> (with 0! = 1)": "階乗 1 × 2 × … × <i>n</i>（ただし 0! = 1）",

    // Maclaurin series expansions and differential equation series > formula booklet note > p
    "<strong>Standard Maclaurin expansions in your Formula Booklet (Section 5.19 &amp; 1.10):</strong>": "<strong>公式集に掲載されている基本マクローリン展開 (Section 5.19 &amp; 1.10)：</strong>",

    // Maclaurin series expansions and differential equation series > formula booklet note > li
    "<span class=\"chem\">e^x = 1 + x + x^2/2! + x^3/3! + ...</span> (valid for all <span class=\"chem\">x in R</span>)": "<span class=\"chem\">e^x = 1 + x + x^2/2! + x^3/3! + ...</span>（すべての <span class=\"chem\">x in R</span> で収束）",

    // Maclaurin series expansions and differential equation series > formula booklet note > li
    "<span class=\"chem\">sin x = x - x^3/3! + x^5/5! - ...</span> (odd powers, alternating signs, all <span class=\"chem\">x in R</span>)": "<span class=\"chem\">sin x = x - x^3/3! + x^5/5! - ...</span>（奇数次・交代符号、すべての <span class=\"chem\">x in R</span> で収束）",

    // Maclaurin series expansions and differential equation series > formula booklet note > li
    "<span class=\"chem\">cos x = 1 - x^2/2! + x^4/4! - ...</span> (even powers, alternating signs, all <span class=\"chem\">x in R</span>)": "<span class=\"chem\">cos x = 1 - x^2/2! + x^4/4! - ...</span>（偶数次・交代符号、すべての <span class=\"chem\">x in R</span> で収束）",

    // Maclaurin series expansions and differential equation series > formula booklet note > li
    "<span class=\"chem\">ln(1 + x) = x - x^2/2 + x^3/3 - x^4/4 + ...</span> (divides by <i>n</i>, <strong>not</strong> <span class=\"chem\">n!</span>; valid for <span class=\"chem\">-1 &lt; x &lt;= 1</span>)": "<span class=\"chem\">ln(1 + x) = x - x^2/2 + x^3/3 - x^4/4 + ...</span>（分母は <span class=\"chem\">n!</span> では<strong>なく</strong> <i>n</i>；<span class=\"chem\">-1 &lt; x &lt;= 1</span> で収束）",

    // Maclaurin series expansions and differential equation series > formula booklet note > li
    "<span class=\"chem\">arctan x = x - x^3/3 + x^5/5 - ...</span> (odd powers divided by <span class=\"chem\">2k + 1</span>, <strong>not</strong> factorials; valid for <span class=\"chem\">|x| &lt;= 1</span>)": "<span class=\"chem\">arctan x = x - x^3/3 + x^5/5 - ...</span>（奇数次で分母は階乗では<strong>なく</strong> <span class=\"chem\">2k + 1</span>；<span class=\"chem\">|x| &lt;= 1</span> で収束）",

    // Maclaurin series expansions and differential equation series > formula booklet note > li
    "<span class=\"chem\">(1 + x)^p = 1 + px + p(p - 1)/2! x^2 + ...</span> (from Section 1.10; valid for <span class=\"chem\">|x| &lt; 1</span>)": "<span class=\"chem\">(1 + x)^p = 1 + px + p(p - 1)/2! x^2 + ...</span>（Section 1.10 より；<span class=\"chem\">|x| &lt; 1</span> で収束）",

    // Maclaurin series expansions and differential equation series > h3
    "Combining series and developing Maclaurin series from differential equations": "級数の組み合わせと微分方程式からのマクローリン級数導出",

    // Maclaurin series expansions and differential equation series > p
    "You can generate new Maclaurin series in four fast ways:": "新しいマクローリン級数は次の 4 つの方法で素早く作れます：",

    // Maclaurin series expansions and differential equation series > li
    "<strong>Substitution:</strong> Replace <i>x</i> with <span class=\"chem\">-x^2</span> in <span class=\"chem\">e^x</span> to get <span class=\"chem\">e^{-x^2} = 1 - x^2 + x^4/2! - x^6/3! + ...</span> immediately.": "<strong>代入：</strong> <span class=\"chem\">e^x</span> の <i>x</i> を <span class=\"chem\">-x^2</span> に置き換えると、直ちに <span class=\"chem\">e^{-x^2} = 1 - x^2 + x^4/2! - x^6/3! + ...</span> が得られます。",

    // Maclaurin series expansions and differential equation series > li
    "<strong>Multiplication:</strong> Multiply the truncated polynomials for <span class=\"chem\">f(x)</span> and <span class=\"chem\">g(x)</span> and collect like powers of <i>x</i> up to the required degree.": "<strong>乗算：</strong> <span class=\"chem\">f(x)</span> と <span class=\"chem\">g(x)</span> の打ち切り多項式を掛け合わせ、必要な次数まで <i>x</i> の同類項をまとめます。",

    // Maclaurin series expansions and differential equation series > li
    "<strong>Term-by-term differentiation or integration:</strong> Differentiating <span class=\"chem\">sin x</span> gives <span class=\"chem\">cos x</span>; integrating <span class=\"chem\">1/(1 + x^2) = 1 - x^2 + x^4 - ...</span> gives <span class=\"chem\">arctan x = x - x^3/3 + x^5/5 - ...</span>.": "<strong>項別微分・項別積分：</strong> <span class=\"chem\">sin x</span> を微分すると <span class=\"chem\">cos x</span> になり、<span class=\"chem\">1/(1 + x^2) = 1 - x^2 + x^4 - ...</span> を積分すると <span class=\"chem\">arctan x = x - x^3/3 + x^5/5 - ...</span> が得られます。",

    // Maclaurin series expansions and differential equation series > li
    "<strong>Implicit differentiation of a differential equation (Paper 3 favourite!):</strong> Given <span class=\"chem\">dy/dx = f(x, y)</span> and <span class=\"chem\">y(0) = y_0</span>, evaluate <span class=\"chem\">y'(0) = f(0, y_0)</span> directly from the DE, then differentiate the DE implicitly using the product and chain rules to find <span class=\"chem\">y''(0)</span>, <span class=\"chem\">y'''(0)</span>, and so on.": "<strong>微分方程式の陰関数微分（Paper 3 頻出！）：</strong> <span class=\"chem\">dy/dx = f(x, y)</span> と <span class=\"chem\">y(0) = y_0</span> が与えられたら、式から直接 <span class=\"chem\">y'(0) = f(0, y_0)</span> を求め、その後は積の微分法と合成関数の微分法を使って微分方程式を陰関数微分し、<span class=\"chem\">y''(0)</span>、<span class=\"chem\">y'''(0)</span> などを順に求めます。",

    // Maclaurin series expansions and differential equation series > not needed for IB > p
    "<strong>Not needed for IB Math AA HL:</strong>": "<strong>IB Math AA HL の範囲外：</strong>",

    // Maclaurin series expansions and differential equation series > not needed for IB > li
    "<strong>Second-order differential equations</strong> (<span class=\"chem\">a y'' + b y' + c y = f(x)</span>), characteristic auxiliary equations, and coupled linear systems (<span class=\"chem\">dx/dt = ax + by</span>) are <strong>not</strong> in the IB Math AA HL syllabus.": "<strong>2 階微分方程式</strong>（<span class=\"chem\">a y'' + b y' + c y = f(x)</span>）、特性方程式、連立線形微分方程式（<span class=\"chem\">dx/dt = ax + by</span>）は IB Math AA HL のシラバスに<strong>含まれません</strong>。",

    // Maclaurin series expansions and differential equation series > not needed for IB > li
    "<strong>General Taylor series centred at <span class=\"chem\">x = a != 0</span></strong>, formal ratio/root tests for radius of convergence, and the Lagrange error remainder bound are <strong>not</strong> required in IB Math AA HL (only Maclaurin series centred at <span class=\"chem\">x = 0</span> are examined).": "<strong><span class=\"chem\">x = a != 0</span> を中心とした一般のテイラー級数</strong>、収束半径を求めるダランベールの判定法・コーシーの判定法、およびラグランジュの剰余項による誤差評価は IB Math AA HL では<strong>不要</strong>です（<span class=\"chem\">x = 0</span> を中心とするマクローリン級数のみが出題されます）。",

    // Maclaurin series expansions and differential equation series > widget > data-title attribute
    "Maclaurin polynomial approximation studio": "マクローリン多項式近似スタジオ",

    // Maclaurin series expansions and differential equation series > widget > data-kicker attribute
    "AHL 5.19 · Interactive": "AHL 5.19 · インタラクティブ",

    // Maclaurin series expansions and differential equation series > widget > figcaption
    "As the degree <i>n</i> increases, the Maclaurin polynomial <span class=\"chem\">P_n(x)</span> matches higher derivatives at <span class=\"chem\">x = 0</span> and hugs <span class=\"chem\">f(x)</span> over a wider interval. Notice that <span class=\"chem\">(1 + x)^{-1}</span> converges only for <span class=\"chem\">|x| &lt; 1</span> and <span class=\"chem\">ln(1 + x)</span> only for <span class=\"chem\">-1 &lt; x &lt;= 1</span>, because of the vertical asymptote at <span class=\"chem\">x = -1</span>.": "次数 <i>n</i> が増えるにつれて、マクローリン多項式 <span class=\"chem\">P_n(x)</span> は <span class=\"chem\">x = 0</span> でより高次の導関数まで一致し、より広い区間で <span class=\"chem\">f(x)</span> に密着します。<span class=\"chem\">x = -1</span> に垂直漸近線があるため、<span class=\"chem\">(1 + x)^{-1}</span> は <span class=\"chem\">|x| &lt; 1</span> でのみ、<span class=\"chem\">ln(1 + x)</span> は <span class=\"chem\">-1 &lt; x &lt;= 1</span> でのみ収束することに注目しましょう。",

    // Maclaurin series expansions and differential equation series > worked example > h3
    "Finding a Maclaurin series directly from a non-linear differential equation": "非線形微分方程式から直接マクローリン級数を求める",

    // Maclaurin series expansions and differential equation series > worked example > p
    "Let <span class=\"chem\">y = f(x)</span> be the solution to the differential equation <span class=\"chem\">dy/dx = x + y^2</span> with initial condition <span class=\"chem\">y(0) = 1</span>. Find the Maclaurin series for <span class=\"chem\">y</span> up to and including the term in <span class=\"chem\">x^3</span>. <strong>[6 marks]</strong>": "<span class=\"chem\">y = f(x)</span> を初期条件 <span class=\"chem\">y(0) = 1</span> を満たす微分方程式 <span class=\"chem\">dy/dx = x + y^2</span> の解とする。<span class=\"chem\">y</span> のマクローリン級数を <span class=\"chem\">x^3</span> の項まで求めなさい (Find)。 <strong>[6 marks]</strong>",

    // Maclaurin series expansions and differential equation series > worked example > data-title attribute
    "Find y(0) and y′(0) directly from the differential equation": "微分方程式から直接 y(0) と y′(0) を求める",

    // Maclaurin series expansions and differential equation series > worked example > p
    "Substitute x = 0 and y(0) = 1 into dy/dx = x + y².": "dy/dx = x + y² に x = 0 と y(0) = 1 を代入します。",

    // Maclaurin series expansions and differential equation series > worked example > maths line
    "<i>y</i>(0) = 1, and <i>y</i>′(0) = 0 + (1)<sup>2</sup> = 1 <b>[A1]</b>": "<i>y</i>(0) = 1、かつ <i>y</i>′(0) = 0 + (1)<sup>2</sup> = 1 <b>[A1]</b>",

    // Maclaurin series expansions and differential equation series > worked example > data-title attribute
    "Differentiate the ODE implicitly to find y″(0) and y‴(0)": "微分方程式を陰関数微分して y″(0) と y‴(0) を求める",

    // Maclaurin series expansions and differential equation series > worked example > p
    "Use the chain rule d/dx(y²) = 2y y′, and then the product rule on 2y y′.": "合成関数の微分法 d/dx(y²) = 2y y′ を使い、次に 2y y′ に積の微分法を適用します。",

    // Maclaurin series expansions and differential equation series > worked example > data-title attribute
    "Substitute the derivatives at x = 0 into the Maclaurin formula": "x = 0 における導関数の値をマクローリン展開の公式に代入する",

    // Maclaurin series expansions and differential equation series > worked example > p
    "Divide by 2! = 2 and 3! = 6 and simplify the fractions.": "2! = 2 と 3! = 6 で割り、分数を約分します。",

    // Maclaurin series expansions and differential equation series > try it > p
    "In the Maclaurin series expansion of <span class=\"chem\">f(x) = e^{2x} cos(3x)</span>, find the exact coefficient of <span class=\"chem\">x^2</span>.": "<span class=\"chem\">f(x) = e^{2x} cos(3x)</span> のマクローリン級数展開における <span class=\"chem\">x^2</span> の正確な係数を求めなさい (find)。",

    // Maclaurin series expansions and differential equation series > try it > li
    "Write out the Booklet expansions up to <span class=\"chem\">x^2</span>: <span class=\"chem\">e^{2x} = 1 + 2x + (2x)^2/2! + ... = 1 + 2x + 2x^2 + ...</span> and <span class=\"chem\">cos(3x) = 1 - (3x)^2/2! + ... = 1 - (9/2)x^2 + ...</span>.": "公式集の展開を <span class=\"chem\">x^2</span> まで書き出します：<span class=\"chem\">e^{2x} = 1 + 2x + (2x)^2/2! + ... = 1 + 2x + 2x^2 + ...</span> および <span class=\"chem\">cos(3x) = 1 - (3x)^2/2! + ... = 1 - (9/2)x^2 + ...</span>。",

    // Maclaurin series expansions and differential equation series > try it > li
    "Multiply <span class=\"chem\">(1 + 2x + 2x^2)(1 - (9/2)x^2)</span> and collect the <span class=\"chem\">x^2</span> terms: <span class=\"chem\">1(-9/2) + 2(1)</span>.": "<span class=\"chem\">(1 + 2x + 2x^2)(1 - (9/2)x^2)</span> を掛けて <span class=\"chem\">x^2</span> の項を集めます：<span class=\"chem\">1(-9/2) + 2(1)</span>。",

    // Maclaurin series expansions and differential equation series > try it > maths line
    "Coefficient of <i>x</i><sup>2</sup> = 2 − <span class=\"frac\"><span>9</span><span>2</span></span> = <b>−<span class=\"frac\"><span>5</span><span>2</span></span> = −2.5</b>": "<i>x</i><sup>2</sup> の係数 = 2 − <span class=\"frac\"><span>9</span><span>2</span></span> = <b>−<span class=\"frac\"><span>5</span><span>2</span></span> = −2.5</b>",

    // Quick practice > data-toc attribute
    "Practice": "演習",

    // Quick practice > h2
    "Quick practice": "確認問題",

    // widget string (assets/js/widgets-t5-4.js)
    "Differential equation": "微分方程式",

    // widget string (assets/js/widgets-t5-4.js)
    "dy/dx = x + y": "dy/dx = x + y",

    // widget string (assets/js/widgets-t5-4.js)
    "dy/dx = 0.5 x y": "dy/dx = 0.5 x y",

    // widget string (assets/js/widgets-t5-4.js)
    "dy/dx = 0.6 y (3 − y)": "dy/dx = 0.6 y (3 − y)",

    // widget string (assets/js/widgets-t5-4.js)
    "dy/dx = cos(x) − 0.5y": "dy/dx = cos(x) − 0.5y",

    // widget string (assets/js/widgets-t5-4.js)
    "Step size h": "刻み幅 h",

    // widget string (assets/js/widgets-t5-4.js)
    "Initial condition y(0)": "初期条件 y(0)",

    // widget string (assets/js/widgets-t5-4.js)
    "Steps to x = {x}": "x = {x} までのステップ数",

    // widget string (assets/js/widgets-t5-4.js)
    "Euler estimate of y({x})": "オイラー法の近似値 y({x})",

    // widget string (assets/js/widgets-t5-4.js)
    "Exact value y({x})": "正確な値 y({x})",

    // widget string (assets/js/widgets-t5-4.js)
    "Global truncation error": "累積打ち切り誤差",

    // widget string (assets/js/widgets-t5-4.js)
    "Slope field, exact solution curve, and Euler polygon": "方向場、厳密解曲線、およびオイラー法の折れ線",

    // widget string (assets/js/widgets-t5-4.js)
    "Exact solution y(x)": "厳密解 y(x)",

    // widget string (assets/js/widgets-t5-4.js)
    "Euler polygon (h =": "オイラー法の折れ線 (h =",

    // widget string (assets/js/widgets-t5-4.js)
    "Exact": "厳密解",

    // widget string (assets/js/widgets-t5-4.js)
    "Euler": "オイラー法",

    // widget string (assets/js/widgets-t5-4.js)
    "Function f(x)": "関数 f(x)",

    // widget string (assets/js/widgets-t5-4.js)
    "f(x) = sin(x)": "f(x) = sin(x)",

    // widget string (assets/js/widgets-t5-4.js)
    "f(x) = cos(x)": "f(x) = cos(x)",

    // widget string (assets/js/widgets-t5-4.js)
    "f(x) = eˣ": "f(x) = eˣ",

    // widget string (assets/js/widgets-t5-4.js)
    "f(x) = ln(1 + x) (−1 < x ≤ 1)": "f(x) = ln(1 + x) (−1 < x ≤ 1)",

    // widget string (assets/js/widgets-t5-4.js)
    "f(x) = (1 + x)⁻¹ (|x| < 1)": "f(x) = (1 + x)⁻¹ (|x| < 1)",

    // widget string (assets/js/widgets-t5-4.js)
    "Maclaurin degree n": "マクローリン多項式の次数 n",

    // widget string (assets/js/widgets-t5-4.js)
    "Test point x": "評価点 x",

    // widget string (assets/js/widgets-t5-4.js)
    "Polynomial Pₙ(x)": "多項式 Pₙ(x)",

    // widget string (assets/js/widgets-t5-4.js)
    "Exact f(x)": "厳密値 f(x)",

    // widget string (assets/js/widgets-t5-4.js)
    "Approx Pₙ(x)": "近似値 Pₙ(x)",

    // widget string (assets/js/widgets-t5-4.js)
    "Error |f(x) − Pₙ(x)|": "誤差 |f(x) − Pₙ(x)|",

    // widget string (assets/js/widgets-t5-4.js)
    "Function f(x) and its degree-n Maclaurin polynomial Pₙ(x)": "関数 f(x) と n 次マクローリン多項式 Pₙ(x)",

  }
});
