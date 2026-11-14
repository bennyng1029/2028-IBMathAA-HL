/* t5-2 — ja translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't5-2', {
  strings: {

    // page title (browser tab)
    "5.2 Integration, areas between curves and kinematics | Analysis Lab": "5.2 積分法・2 曲線間の面積と運動 | Analysis Lab",

    // Integration, areas between curves and kinematics > page header > p
    "Topic 5.2 · SL 5.5, 5.9–5.11": "Topic 5.2 · SL 5.5, 5.9–5.11",

    // Integration, areas between curves and kinematics > page header > h1
    "Integration, areas between curves and kinematics": "積分法・2 曲線間の面積と運動（力学）",

    // Integration, areas between curves and kinematics > page header > span
    "How does reversing differentiation let us reconstruct a function from its rate of change, measure exact areas between curves, and track the motion of a particle?": "微分の逆操作によって変化率から元の関数を復元し、曲線に囲まれた正確な面積を求め、粒子の運動を追跡するにはどうすればよいでしょうか？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "チェックリスト",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > checklist > span
    "Integrate powers <span class=\"chem\">x^n</span> (<span class=\"chem\">n != -1</span>), <span class=\"chem\">1/x</span>, <span class=\"chem\">sin x</span>, <span class=\"chem\">cos x</span>, and <span class=\"chem\">e^x</span>, including linear composites <span class=\"chem\">f(ax + b)</span>, and find the constant of integration <span class=\"chem\">+C</span> from a boundary condition.": "べき関数 <span class=\"chem\">x^n</span>（<span class=\"chem\">n != -1</span>）、<span class=\"chem\">1/x</span>、<span class=\"chem\">sin x</span>、<span class=\"chem\">cos x</span>、<span class=\"chem\">e^x</span> および 1 次式との合成 <span class=\"chem\">f(ax + b)</span> を積分でき、境界条件から積分定数 <span class=\"chem\">+C</span> を求められる。",

    // What you need to be able to do > checklist > span
    "Recognize and evaluate integrals of the form <span class=\"chem\">int k g'(x) f(g(x)) dx</span> by inspection (reverse chain rule) or substitution.": "<span class=\"chem\">int k g'(x) f(g(x)) dx</span> の形の積分を見抜き、逆連鎖律または置換積分法で計算できる。",

    // What you need to be able to do > checklist > span
    "Evaluate definite integrals using the Fundamental Theorem of Calculus <span class=\"chem\">int_a^b f'(x) dx = f(b) - f(a)</span> and apply definite integral properties.": "微分積分学の基本定理 <span class=\"chem\">int_a^b f'(x) dx = f(b) - f(a)</span> を用いて定積分を計算し、定積分の性質を適用できる。",

    // What you need to be able to do > checklist > span
    "Find the area enclosed between a curve and the <span class=\"chem\">x</span>-axis (<span class=\"chem\">int_a^b |y| dx</span>) and the area enclosed between two curves (<span class=\"chem\">int_a^b (y_{top} - y_{bottom}) dx</span>).": "曲線と <span class=\"chem\">x</span> 軸に囲まれた面積（<span class=\"chem\">int_a^b |y| dx</span>）および 2 曲線間の面積（<span class=\"chem\">int_a^b (y_{top} - y_{bottom}) dx</span>）を求められる。",

    // What you need to be able to do > checklist > span
    "Move between displacement <span class=\"chem\">s(t)</span>, velocity <span class=\"chem\">v(t) = s'(t)</span>, and acceleration <span class=\"chem\">a(t) = v'(t)</span>, and distinguish net displacement <span class=\"chem\">int_{t_1}^{t_2} v(t) dt</span> from total distance travelled <span class=\"chem\">int_{t_1}^{t_2} |v(t)| dt</span>.": "変位 <span class=\"chem\">s(t)</span>、速度 <span class=\"chem\">v(t) = s'(t)</span>、加速度 <span class=\"chem\">a(t) = v'(t)</span> の間を行き来でき、純変位 <span class=\"chem\">int_{t_1}^{t_2} v(t) dt</span> と総移動距離 <span class=\"chem\">int_{t_1}^{t_2} |v(t)| dt</span> を区別できる。",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "問題デコーダー",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "問題デコーダー：使うべき解法を見抜く",

    // Question decoder: spotting which technique to use > p
    "Integration and kinematics questions on IB exams rely on specific structural cues and motion words. Use this decoder to spot the right method immediately.": "IB 試験の積分や運動の問題は、数式の構造の手がかりや運動を表す語句に基づいています。この表を使って正しい解法を瞬時に見抜きましょう。",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — Integration, areas and kinematics": "問題デコーダー — 積分法・面積・運動",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "試験問題に書かれている表現",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "数学的な意味（公式と立式）",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1（電卓不可）vs Paper 2（GDC 可）",

    // Question decoder: spotting which technique to use > table > th
    "Integrand has an inner function <span class=\"chem\">g(x)</span> multiplied by a constant multiple of <span class=\"chem\">g'(x)</span>": "被積分関数が内側の関数 <span class=\"chem\">g(x)</span> と <span class=\"chem\">g'(x)</span> の定数倍の積になっている",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Reverse chain rule (inspection) / <span class=\"chem\">u</span>-substitution:</strong><br>• <span class=\"chem\">int g'(x) [g(x)]^n dx = [g(x)]^{n+1} / (n + 1) + C</span> (<span class=\"chem\">n != -1</span>)<br>• <span class=\"chem\">int g'(x) e^{g(x)} dx = e^{g(x)} + C</span><br>• <span class=\"chem\">int (g'(x) / g(x)) dx = ln|g(x)| + C</span>": "<strong>逆連鎖律 / <span class=\"chem\">u</span> 置換積分法：</strong><br>• <span class=\"chem\">int g'(x) [g(x)]^n dx = [g(x)]^{n+1} / (n + 1) + C</span>（<span class=\"chem\">n != -1</span>）<br>• <span class=\"chem\">int g'(x) e^{g(x)} dx = e^{g(x)} + C</span><br>• <span class=\"chem\">int (g'(x) / g(x)) dx = ln|g(x)| + C</span>",

    // Question decoder: spotting which technique to use > table > td
    "Let <span class=\"chem\">u = g(x)</span>, so <span class=\"chem\">du = g'(x) dx</span>. For a definite integral on Paper 1, <strong>change the limits</strong> from <span class=\"chem\">x = a, b</span> to <span class=\"chem\">u = g(a), g(b)</span> so you never have to substitute back!": "<span class=\"chem\">u = g(x)</span> とおくと <span class=\"chem\">du = g'(x) dx</span> です。Paper 1 の定積分では、積分区間を <span class=\"chem\">x = a, b</span> から <span class=\"chem\">u = g(a), g(b)</span> に<strong>書き換える</strong>と、元の変数に戻す手間が省けます！",

    // Question decoder: spotting which technique to use > table > th
    "“(a) Differentiate <span class=\"chem\">F(x)</span>. (b) Hence find <span class=\"chem\">int f(x) dx</span>.”": "「(a) <span class=\"chem\">F(x)</span> を微分せよ。(b) これを用いて (Hence) <span class=\"chem\">int f(x) dx</span> を求めよ。」",

    // Question decoder: spotting which technique to use > table > td
    "“Hence” means you <strong>must</strong> reverse your answer from part (a): if <span class=\"chem\">F'(x) = k f(x) + h(x)</span>, then <span class=\"chem\">int f(x) dx = (1/k)[F(x) - int h(x) dx] + C</span>.": "“Hence” は (a) の答えを<strong>必ず</strong>逆向きに使うことを意味します：<span class=\"chem\">F'(x) = k f(x) + h(x)</span> なら、<span class=\"chem\">int f(x) dx = (1/k)[F(x) - int h(x) dx] + C</span> です。",

    // Question decoder: spotting which technique to use > table > td
    "Write the integral of both sides of your part (a) equation immediately—never try to integrate <span class=\"chem\">f(x)</span> from scratch when “Hence” is used!": "すぐに (a) の式の両辺を積分した式を書きましょう——“Hence” があるときに <span class=\"chem\">f(x)</span> を一から積分しようとしてはいけません！",

    // Question decoder: spotting which technique to use > table > th
    "“Find the area of the region enclosed by <span class=\"chem\">y = f(x)</span> and the <span class=\"chem\">x</span>-axis”": "「<span class=\"chem\">y = f(x)</span> と <span class=\"chem\">x</span> 軸で囲まれた領域の面積を求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "Geometric area is always positive: <span class=\"chem\">A = int_a^b |f(x)| dx</span>.": "図形の面積は常に正です：<span class=\"chem\">A = int_a^b |f(x)| dx</span>。",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Paper 1:</strong> Find every <span class=\"chem\">x</span>-intercept <span class=\"chem\">c in (a, b)</span>, split the integral there and take the absolute value of each piece, e.g. <span class=\"chem\">int_a^c f(x) dx - int_c^b f(x) dx</span> when <span class=\"chem\">f(x) &gt;= 0</span> on <span class=\"chem\">[a, c]</span> and <span class=\"chem\">f(x) &lt;= 0</span> on <span class=\"chem\">[c, b]</span>.<br><strong>Paper 2:</strong> Integrate <span class=\"chem\">|f(x)|</span> from <span class=\"chem\">a</span> to <span class=\"chem\">b</span> directly with the GDC numerical integration command (TI: <span class=\"mono\">fnInt(abs(f(x)), x, a, b)</span>; Casio: <span class=\"mono\">∫dx</span> with Abs).": "<strong>Paper 1：</strong> <span class=\"chem\">c in (a, b)</span> となる <span class=\"chem\">x</span> 切片をすべて求め、そこで積分を分割して各部分の絶対値をとります。例えば <span class=\"chem\">[a, c]</span> で <span class=\"chem\">f(x) &gt;= 0</span>、<span class=\"chem\">[c, b]</span> で <span class=\"chem\">f(x) &lt;= 0</span> のときは <span class=\"chem\">int_a^c f(x) dx - int_c^b f(x) dx</span> です。<br><strong>Paper 2：</strong> GDC の数値積分コマンドで <span class=\"chem\">|f(x)|</span> を <span class=\"chem\">a</span> から <span class=\"chem\">b</span> まで直接積分します（TI：<span class=\"mono\">fnInt(abs(f(x)), x, a, b)</span>、Casio：Abs と <span class=\"mono\">∫dx</span>）。",

    // Question decoder: spotting which technique to use > table > th
    "“Initially” / “At the origin <span class=\"chem\">O</span>” / “Momentarily at rest / changes direction / maximum displacement”": "「最初に (Initially)」 / 「原点 <span class=\"chem\">O</span> で」 / 「一瞬静止する / 向きを変える / 最大変位」",

    // Question decoder: spotting which technique to use > table > td
    "• <strong>Initially:</strong> <span class=\"chem\">t = 0</span><br>• <strong>At the origin:</strong> <span class=\"chem\">s(t) = 0</span><br>• <strong>At rest / max displacement:</strong> <span class=\"chem\">v(t) = 0</span><br>• <strong>Changes direction:</strong> <span class=\"chem\">v(t) = 0</span> <em>and</em> <span class=\"chem\">v(t)</span> changes sign!": "• <strong>最初に：</strong> <span class=\"chem\">t = 0</span><br>• <strong>原点で：</strong> <span class=\"chem\">s(t) = 0</span><br>• <strong>静止 / 最大変位：</strong> <span class=\"chem\">v(t) = 0</span><br>• <strong>向きを変える：</strong> <span class=\"chem\">v(t) = 0</span> <em>かつ</em> <span class=\"chem\">v(t)</span> の符号が変わる！",

    // Question decoder: spotting which technique to use > table > td
    "For “maximum/minimum velocity” or “constant velocity”, set acceleration <span class=\"chem\">a(t) = v'(t) = 0</span>. For “maximum speed”, maximize <span class=\"chem\">|v(t)|</span> (check turning points and endpoints!).": "「最大・最小速度」や「等速度」では加速度 <span class=\"chem\">a(t) = v'(t) = 0</span> とおきます。「最大の速さ」では <span class=\"chem\">|v(t)|</span> を最大化します（極値と端点を確認！）。",

    // Question decoder: spotting which technique to use > table > th
    "“Find the displacement vs total distance travelled from <span class=\"chem\">t = t_1</span> to <span class=\"chem\">t = t_2</span>”": "「<span class=\"chem\">t = t_1</span> から <span class=\"chem\">t = t_2</span> までの変位 vs 総移動距離を求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "• <strong>Displacement:</strong> <span class=\"chem\">Delta s = s(t_2) - s(t_1) = int_{t_1}^{t_2} v(t) dt</span><br>• <strong>Total distance:</strong> <span class=\"chem\">d = int_{t_1}^{t_2} |v(t)| dt</span>": "• <strong>変位：</strong> <span class=\"chem\">Delta s = s(t_2) - s(t_1) = int_{t_1}^{t_2} v(t) dt</span><br>• <strong>総移動距離：</strong> <span class=\"chem\">d = int_{t_1}^{t_2} |v(t)| dt</span>",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Paper 1:</strong> Solve <span class=\"chem\">v(t) = 0</span> to find any turning time <span class=\"chem\">t^* in (t_1, t_2)</span> and sum the absolute integrals of each leg.<br><strong>Paper 2:</strong> Integrate <span class=\"chem\">|v(t)|</span> on your GDC in one step.": "<strong>Paper 1：</strong> <span class=\"chem\">v(t) = 0</span> を解いて折り返し時刻 <span class=\"chem\">t^* in (t_1, t_2)</span> を求め、各区間の積分の絶対値を足し合わせます。<br><strong>Paper 2：</strong> GDC で <span class=\"chem\">|v(t)|</span> を 1 回で積分します。",

    // Indefinite integrals, standard forms and the reverse chain r > data-toc attribute
    "Antiderivatives & substitution": "原始関数と置換積分法",

    // Indefinite integrals, standard forms and the reverse chain r > h2
    "Indefinite integrals, standard forms and the reverse chain rule": "不定積分・基本公式と逆連鎖律",

    // Indefinite integrals, standard forms and the reverse chain r > p
    "Integration (anti-differentiation) reverses differentiation: if <span class=\"chem\">F'(x) = f(x)</span>, then the <dfn data-def=\"The family of all antiderivatives of f(x), written F(x) + C where F'(x) = f(x) and C is an arbitrary constant.\">indefinite integral</dfn> is <span class=\"chem\">int f(x) dx = F(x) + C</span>. Because any constant disappears when differentiated (<span class=\"chem\">d/dx (C) = 0</span>), you must always include <span class=\"chem\">+ C</span> on an indefinite integral. If the question gives one point <span class=\"chem\">(x_0, y_0)</span> on the curve (a <strong>boundary condition</strong> or <strong>initial condition</strong>), substitute <span class=\"chem\">x = x_0</span> and <span class=\"chem\">y = y_0</span> to find the exact value of <span class=\"chem\">C</span>.": "積分は微分の逆演算です：<span class=\"chem\">F'(x) = f(x)</span> のとき、<dfn data-def=\"f(x) のすべての原始関数の集まり。F'(x) = f(x) となる F(x) と任意定数 C を用いて F(x) + C と書く。\">不定積分 <span class=\"en-term\">(indefinite integral)</span></dfn>は <span class=\"chem\">int f(x) dx = F(x) + C</span> です。定数は微分すると消える（<span class=\"chem\">d/dx (C) = 0</span>）ため、不定積分には必ず <span class=\"chem\">+ C</span> をつけなければなりません。曲線上の 1 点 <span class=\"chem\">(x_0, y_0)</span>（<strong>境界条件</strong>または<strong>初期条件</strong>）が与えられたら、<span class=\"chem\">x = x_0</span> と <span class=\"chem\">y = y_0</span> を代入して <span class=\"chem\">C</span> の値を求めます。",

    // Indefinite integrals, standard forms and the reverse chain r > data-def attribute
    "The family of all antiderivatives of f(x), written F(x) + C where F'(x) = f(x) and C is an arbitrary constant.": "f(x) のすべての原始関数の集まり。F'(x) = f(x) となる F(x) と任意定数 C を用いて F(x) + C と書く。",

    // Indefinite integrals, standard forms and the reverse chain r > formula booklet note > p
    "<strong>In your formula booklet (SL 5.5 &amp; 5.10):</strong> Standard integrals given in the booklet:": "<strong>公式集（Formula booklet）に掲載 (SL 5.5・5.10)：</strong> 公式集に載っている基本積分公式：",

    // Indefinite integrals, standard forms and the reverse chain r > formula booklet note > li
    "<span class=\"chem\">int x^n dx = x^{n+1} / (n + 1) + C</span> (<span class=\"chem\">n != -1</span>)": "<span class=\"chem\">int x^n dx = x^{n+1} / (n + 1) + C</span>（<span class=\"chem\">n != -1</span>）",

    // Indefinite integrals, standard forms and the reverse chain r > formula booklet note > li
    "<span class=\"chem\">int (1/x) dx = ln|x| + C</span>": "<span class=\"chem\">int (1/x) dx = ln|x| + C</span>",

    // Indefinite integrals, standard forms and the reverse chain r > formula booklet note > li
    "<span class=\"chem\">int sin x dx = -cos x + C</span> and <span class=\"chem\">int cos x dx = sin x + C</span>": "<span class=\"chem\">int sin x dx = -cos x + C</span> および <span class=\"chem\">int cos x dx = sin x + C</span>",

    // Indefinite integrals, standard forms and the reverse chain r > formula booklet note > li
    "<span class=\"chem\">int e^x dx = e^x + C</span>": "<span class=\"chem\">int e^x dx = e^x + C</span>",

    // Indefinite integrals, standard forms and the reverse chain r > h3
    "Composites with a linear inner function <span class=\"chem\">(ax + b)</span>": "1 次式 <span class=\"chem\">(ax + b)</span> を内側に含む合成関数の積分",

    // Indefinite integrals, standard forms and the reverse chain r > p
    "When differentiating <span class=\"chem\">F(ax + b)</span>, the chain rule multiplies by the constant <span class=\"chem\">a</span>. Therefore, when integrating <span class=\"chem\">f(ax + b)</span>, you reverse that step by <strong>dividing by <span class=\"chem\">a</span></strong> (multiplying by <span class=\"chem\">1/a</span>):": "<span class=\"chem\">F(ax + b)</span> を微分するとき、合成関数の微分法により定数 <span class=\"chem\">a</span> が掛かります。したがって <span class=\"chem\">f(ax + b)</span> を積分するときは、その逆操作として<strong><span class=\"chem\">a</span> で割ります</strong>（<span class=\"chem\">1/a</span> を掛けます）：",

    // Indefinite integrals, standard forms and the reverse chain r > li
    "<span class=\"chem\">int (ax + b)^n dx = (ax + b)^{n+1} / [a(n + 1)] + C</span> (<span class=\"chem\">n != -1</span>)": "<span class=\"chem\">int (ax + b)^n dx = (ax + b)^{n+1} / [a(n + 1)] + C</span>（<span class=\"chem\">n != -1</span>）",

    // Indefinite integrals, standard forms and the reverse chain r > li
    "<span class=\"chem\">int (1 / (ax + b)) dx = (1/a) ln|ax + b| + C</span>": "<span class=\"chem\">int (1 / (ax + b)) dx = (1/a) ln|ax + b| + C</span>",

    // Indefinite integrals, standard forms and the reverse chain r > li
    "<span class=\"chem\">int e^{ax+b} dx = (1/a) e^{ax+b} + C</span>": "<span class=\"chem\">int e^{ax+b} dx = (1/a) e^{ax+b} + C</span>",

    // Indefinite integrals, standard forms and the reverse chain r > li
    "<span class=\"chem\">int sin(ax + b) dx = -(1/a) cos(ax + b) + C</span> and <span class=\"chem\">int cos(ax + b) dx = (1/a) sin(ax + b) + C</span>": "<span class=\"chem\">int sin(ax + b) dx = -(1/a) cos(ax + b) + C</span> および <span class=\"chem\">int cos(ax + b) dx = (1/a) sin(ax + b) + C</span>",

    // Indefinite integrals, standard forms and the reverse chain r > common mistake > p
    "<strong>Common mistake — Dividing by a non-linear derivative:</strong> The “divide by <span class=\"chem\">a</span>” shortcut works <strong>only when the inside function is linear</strong> (<span class=\"chem\">ax + b</span>, whose derivative <span class=\"chem\">a</span> is a constant). You can <em>never</em> integrate <span class=\"chem\">int e^{x^2} dx</span> as <span class=\"chem\">e^{x^2} / (2x)</span>! If the inside function is non-linear (like <span class=\"chem\">x^2</span> or <span class=\"chem\">sin x</span>), its derivative <span class=\"chem\">g'(x)</span> must already be multiplying the integrand outside.": "<strong>よくある間違い — 1 次式でない関数の導関数で割ってしまう：</strong> 「<span class=\"chem\">a</span> で割る」近道が使えるのは、<strong>内側の関数が 1 次式のときだけ</strong>（導関数 <span class=\"chem\">a</span> が定数である <span class=\"chem\">ax + b</span>）です。<span class=\"chem\">int e^{x^2} dx</span> を <span class=\"chem\">e^{x^2} / (2x)</span> と積分することは<em>絶対に</em>できません！内側の関数が 1 次式でない場合（<span class=\"chem\">x^2</span> や <span class=\"chem\">sin x</span> など）は、その導関数 <span class=\"chem\">g'(x)</span> がすでに外側に掛かっている必要があります。",

    // Indefinite integrals, standard forms and the reverse chain r > h3
    "Integration by inspection (reverse chain rule) and <span class=\"chem\">u</span>-substitution": "逆連鎖律と <span class=\"chem\">u</span> 置換積分法",

    // Indefinite integrals, standard forms and the reverse chain r > p
    "Whenever an integrand contains a composite function <span class=\"chem\">f(g(x))</span> multiplied by a constant multiple of the inner derivative <span class=\"chem\">g'(x)</span>, set <span class=\"chem\">u = g(x)</span> so that <span class=\"chem\">du = g'(x) dx</span>:": "被積分関数が合成関数 <span class=\"chem\">f(g(x))</span> と内側の導関数 <span class=\"chem\">g'(x)</span> の定数倍との積を含んでいるときは、<span class=\"chem\">u = g(x)</span> とおいて <span class=\"chem\">du = g'(x) dx</span> とします：",

    // Indefinite integrals, standard forms and the reverse chain r > equation > dd
    "inner function (inside a power, root, exponent, denominator, or trig function)": "内側の関数（べき、根号、指数、分母、三角関数の中身）",

    // Indefinite integrals, standard forms and the reverse chain r > equation > dt
    "du = g'(x) dx": "du = g'(x) dx",

    // Indefinite integrals, standard forms and the reverse chain r > equation > dd
    "differential that absorbs the outside factor g'(x) dx": "外側の因数 g'(x) dx を吸収する微小量",

    // Indefinite integrals, standard forms and the reverse chain r > p
    "Three reverse-chain-rule patterns appear constantly on Paper 1:": "Paper 1 では次の 3 つの逆連鎖律パターンが頻出します：",

    // Indefinite integrals, standard forms and the reverse chain r > li
    "<strong>Power / root pattern:</strong> <span class=\"chem\">int 6x (3x^2 + 1)^4 dx</span>. Since <span class=\"chem\">d/dx (3x^2 + 1) = 6x</span>, this is <span class=\"chem\">int u^4 du = (3x^2 + 1)^5 / 5 + C</span>.": "<strong>べき・根号パターン：</strong> <span class=\"chem\">int 6x (3x^2 + 1)^4 dx</span>。<span class=\"chem\">d/dx (3x^2 + 1) = 6x</span> なので、<span class=\"chem\">int u^4 du = (3x^2 + 1)^5 / 5 + C</span> となります。",

    // Indefinite integrals, standard forms and the reverse chain r > li
    "<strong>Exponential pattern:</strong> <span class=\"chem\">int x e^{x^2} dx</span>. Since <span class=\"chem\">d/dx (x^2) = 2x</span>, adjust by <span class=\"chem\">1/2</span>: <span class=\"chem\">(1/2) int 2x e^{x^2} dx = (1/2) e^{x^2} + C</span>.": "<strong>指数関数パターン：</strong> <span class=\"chem\">int x e^{x^2} dx</span>。<span class=\"chem\">d/dx (x^2) = 2x</span> なので <span class=\"chem\">1/2</span> で調整します：<span class=\"chem\">(1/2) int 2x e^{x^2} dx = (1/2) e^{x^2} + C</span>。",

    // Indefinite integrals, standard forms and the reverse chain r > li
    "<strong>Logarithmic fraction pattern (<span class=\"chem\">g'(x) / g(x)</span>):</strong> Whenever the numerator of a fraction is a constant multiple of the derivative of the denominator, the integral is a natural logarithm! For example, <span class=\"chem\">int (cos x / (2 + sin x)) dx = ln|2 + sin x| + C</span>, and <span class=\"chem\">int (x / (x^2 + 4)) dx = (1/2) ln(x^2 + 4) + C</span>.": "<strong>対数分数パターン（<span class=\"chem\">g'(x) / g(x)</span>）：</strong> 分数の分子が分母の導関数の定数倍になっているときは、必ず自然対数になります！たとえば <span class=\"chem\">int (cos x / (2 + sin x)) dx = ln|2 + sin x| + C</span> や <span class=\"chem\">int (x / (x^2 + 4)) dx = (1/2) ln(x^2 + 4) + C</span> です。",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > h3
    "Finding a function from its gradient and a boundary condition": "傾きと境界条件から元の関数を求める",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > p
    "The gradient of a curve <span class=\"chem\">y = f(x)</span> at any point <span class=\"chem\">(x, y)</span> is given by <span class=\"chem\">f'(x) = (6x) / (x^2 + 3) + 4 e^{-2x}</span>. Given that the curve passes through the point <span class=\"chem\">(0, 3 ln 3)</span>, find an expression for <span class=\"chem\">f(x)</span>. <strong>[6 marks]</strong>": "曲線 <span class=\"chem\">y = f(x)</span> の任意の点 <span class=\"chem\">(x, y)</span> における傾きが <span class=\"chem\">f'(x) = (6x) / (x^2 + 3) + 4 e^{-2x}</span> で与えられている。この曲線が点 <span class=\"chem\">(0, 3 ln 3)</span> を通るとき、<span class=\"chem\">f(x)</span> の式を求めなさい (find)。 <strong>[6 marks]</strong>",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > data-title attribute
    "Spot the g'(x)/g(x) pattern on the first term and linear exponential on the second": "第 1 項の g'(x)/g(x) パターンと第 2 項の 1 次式指数を見抜く",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > p
    "For 6x / (x² + 3), the derivative of the denominator x² + 3 is 2x, so 6x = 3(2x). For 4e⁻²ˣ, the linear coefficient is a = −2.": "6x / (x² + 3) では分母 x² + 3 の微分が 2x なので 6x = 3(2x) です。4e⁻²ˣ では 1 次式の係数が a = −2 です。",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > data-title attribute
    "Substitute the boundary condition (0, 3 ln 3) to solve for C": "境界条件 (0, 3 ln 3) を代入して C を求める",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > p
    "Remember that e⁰ = 1 (never 0!), so substituting x = 0 does not make the exponential term vanish.": "e⁰ = 1（決して 0 ではない！）に注意してください。x = 0 を代入しても指数項は消えません。",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > data-title attribute
    "Write the complete equation for f(x)": "f(x) の完全な式を書く",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > p
    "Substitute C = 2 back into f(x).": "C = 2 を f(x) に戻します。",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > p
    "<span class=\"chem\">f(x) = 3 ln(x^2 + 3) - 2e^{-2x} + 2</span>": "<span class=\"chem\">f(x) = 3 ln(x^2 + 3) - 2e^{-2x} + 2</span>",

    // Indefinite integrals, standard forms and the reverse chain r > try it > p
    "A curve satisfies <span class=\"chem\">f'(x) = 6x (x^2 - 1)^2</span> and passes through the point <span class=\"chem\">(1, 14)</span>. Calculate the value of the <span class=\"chem\">y</span>-intercept <span class=\"chem\">f(0)</span>.": "曲線が <span class=\"chem\">f'(x) = 6x (x^2 - 1)^2</span> を満たし、点 <span class=\"chem\">(1, 14)</span> を通る。<span class=\"chem\">y</span> 切片 <span class=\"chem\">f(0)</span> の値を計算しなさい (Calculate)。",

    // Indefinite integrals, standard forms and the reverse chain r > try it > li
    "Let <span class=\"chem\">u = x^2 - 1</span> so <span class=\"chem\">du = 2x dx</span>. Then <span class=\"chem\">f(x) = int 3(2x)(x^2 - 1)^2 dx = (x^2 - 1)^3 + C</span>.": "<span class=\"chem\">u = x^2 - 1</span> とおくと <span class=\"chem\">du = 2x dx</span>。よって <span class=\"chem\">f(x) = int 3(2x)(x^2 - 1)^2 dx = (x^2 - 1)^3 + C</span> です。",

    // Indefinite integrals, standard forms and the reverse chain r > try it > li
    "Use <span class=\"chem\">f(1) = (1^2 - 1)^3 + C = 14</span> to find <span class=\"chem\">C = 14</span>, then evaluate <span class=\"chem\">f(0) = (0 - 1)^3 + 14</span>.": "<span class=\"chem\">f(1) = (1^2 - 1)^3 + C = 14</span> から <span class=\"chem\">C = 14</span> を求め、<span class=\"chem\">f(0) = (0 - 1)^3 + 14</span> を計算します。",

    // Definite integrals, signed integrals vs geometric area, and  > data-toc attribute
    "Definite integrals & areas": "定積分と面積",

    // Definite integrals, signed integrals vs geometric area, and  > h2
    "Definite integrals, signed integrals vs geometric area, and area between curves": "定積分・符号付き面積と図形の面積・2 曲線間の面積",

    // Definite integrals, signed integrals vs geometric area, and  > p
    "By the <dfn data-def=\"If F'(x) = f(x) on [a, b], then the definite integral of f(x) from x = a to x = b equals F(b) - F(a).\">Fundamental Theorem of Calculus</dfn>, if <span class=\"chem\">F(x)</span> is any antiderivative of <span class=\"chem\">f(x)</span>, then:": "<dfn data-def=\"[a, b] 上で F'(x) = f(x) ならば、x = a から x = b までの f(x) の定積分は F(b) - F(a) に等しいという定理。\">微分積分学の基本定理 <span class=\"en-term\">(Fundamental Theorem of Calculus)</span></dfn>により、<span class=\"chem\">F(x)</span> が <span class=\"chem\">f(x)</span> の任意の原始関数であるとき、次が成り立ちます：",

    // Definite integrals, signed integrals vs geometric area, and  > data-def attribute
    "If F'(x) = f(x) on [a, b], then the definite integral of f(x) from x = a to x = b equals F(b) - F(a).": "[a, b] 上で F'(x) = f(x) ならば、x = a から x = b までの f(x) の定積分は F(b) - F(a) に等しいという定理。",

    // Definite integrals, signed integrals vs geometric area, and  > equation > dd
    "lower and upper limits of integration": "積分の下端と上端",

    // Definite integrals, signed integrals vs geometric area, and  > equation > dd
    "any antiderivative satisfying <i>F'</i>(<i>x</i>) = <i>f</i>(<i>x</i>) (the +<i>C</i> cancels in <i>F</i>(<i>b</i>) − <i>F</i>(<i>a</i>))": "<i>F'</i>(<i>x</i>) = <i>f</i>(<i>x</i>) を満たす任意の原始関数（+<i>C</i> は <i>F</i>(<i>b</i>) − <i>F</i>(<i>a</i>) で相殺される）",

    // Definite integrals, signed integrals vs geometric area, and  > h3
    "Key properties of definite integrals": "定積分の重要な性質",

    // Definite integrals, signed integrals vs geometric area, and  > p
    "Paper 1 frequently tests whether you can manipulate definite integrals without knowing the formula for <span class=\"chem\">f(x)</span>:": "Paper 1 では、<span class=\"chem\">f(x)</span> の式がわからないまま定積分を変形できるかがよく問われます：",

    // Definite integrals, signed integrals vs geometric area, and  > li
    "<strong>Reversing limits flips the sign:</strong> <span class=\"chem\">int_b^a f(x) dx = - int_a^b f(x) dx</span>, and <span class=\"chem\">int_a^a f(x) dx = 0</span>.": "<strong>上下端を入れ替えると符号が反転する：</strong> <span class=\"chem\">int_b^a f(x) dx = - int_a^b f(x) dx</span>、および <span class=\"chem\">int_a^a f(x) dx = 0</span>。",

    // Definite integrals, signed integrals vs geometric area, and  > li
    "<strong>Linearity:</strong> <span class=\"chem\">int_a^b [k f(x) + c] dx = k int_a^b f(x) dx + c(b - a)</span>. <em>(Watch out for the constant <span class=\"chem\">c</span>: integrating a constant <span class=\"chem\">c</span> from <span class=\"chem\">a</span> to <span class=\"chem\">b</span> gives <span class=\"chem\">c(b - a)</span>, not just <span class=\"chem\">c</span>!)</em>": "<strong>線形性：</strong> <span class=\"chem\">int_a^b [k f(x) + c] dx = k int_a^b f(x) dx + c(b - a)</span>。<em>（定数 <span class=\"chem\">c</span> に注意：定数 <span class=\"chem\">c</span> を <span class=\"chem\">a</span> から <span class=\"chem\">b</span> まで積分すると <span class=\"chem\">c</span> ではなく <span class=\"chem\">c(b - a)</span> になります！）</em>",

    // Definite integrals, signed integrals vs geometric area, and  > li
    "<strong>Additivity over adjacent intervals:</strong> <span class=\"chem\">int_a^b f(x) dx + int_b^c f(x) dx = int_a^c f(x) dx</span>.": "<strong>隣接する区間での加法性：</strong> <span class=\"chem\">int_a^b f(x) dx + int_b^c f(x) dx = int_a^c f(x) dx</span>。",

    // Definite integrals, signed integrals vs geometric area, and  > li
    "<strong>Horizontal shift:</strong> <span class=\"chem\">int_a^b f(x - k) dx = int_{a-k}^{b-k} f(u) du</span> (the curve <span class=\"chem\">y = f(x - k)</span> is <span class=\"chem\">y = f(x)</span> shifted right by <span class=\"chem\">k</span>, so the area under it on <span class=\"chem\">[a, b]</span> equals the area under <span class=\"chem\">f</span> on <span class=\"chem\">[a - k, b - k]</span>).": "<strong>水平移動（平行移動）：</strong> <span class=\"chem\">int_a^b f(x - k) dx = int_{a-k}^{b-k} f(u) du</span>（曲線 <span class=\"chem\">y = f(x - k)</span> は <span class=\"chem\">y = f(x)</span> を右に <span class=\"chem\">k</span> だけ平行移動したものなので、<span class=\"chem\">[a, b]</span> 上でその曲線の下にある面積は、<span class=\"chem\">[a - k, b - k]</span> 上で <span class=\"chem\">f</span> の下にある面積に等しくなります）。",

    // Definite integrals, signed integrals vs geometric area, and  > h3
    "Signed definite integral vs enclosed geometric area": "符号付きの定積分 vs 囲まれた図形の面積",

    // Definite integrals, signed integrals vs geometric area, and  > p
    "A definite integral <span class=\"chem\">int_a^b f(x) dx</span> is a <strong>signed</strong> sum: regions where <span class=\"chem\">f(x) &gt; 0</span> (above the <span class=\"chem\">x</span>-axis) contribute positively, while regions where <span class=\"chem\">f(x) &lt; 0</span> (below the <span class=\"chem\">x</span>-axis) contribute <strong>negatively</strong>. In contrast, the <strong>geometric area</strong> enclosed by a curve and the <span class=\"chem\">x</span>-axis is always positive:": "定積分 <span class=\"chem\">int_a^b f(x) dx</span> は<strong>符号付きの</strong>和です：<span class=\"chem\">f(x) &gt; 0</span>（<span class=\"chem\">x</span> 軸より上）の領域は正に寄与し、<span class=\"chem\">f(x) &lt; 0</span>（<span class=\"chem\">x</span> 軸より下）の領域は<strong>負に</strong>寄与します。一方、曲線と <span class=\"chem\">x</span> 軸で囲まれた<strong>図形の面積</strong>は常に正です：",

    // Definite integrals, signed integrals vs geometric area, and  > li
    "<strong>Area between <span class=\"chem\">y = f(x)</span> and the <span class=\"chem\">x</span>-axis on <span class=\"chem\">[a, b]</span>:</strong> <span class=\"chem\">A = int_a^b |f(x)| dx</span>. If <span class=\"chem\">f(x)</span> crosses the <span class=\"chem\">x</span>-axis at <span class=\"chem\">x = c</span> with <span class=\"chem\">f(x) &gt;= 0</span> on <span class=\"chem\">[a, c]</span> and <span class=\"chem\">f(x) &lt;= 0</span> on <span class=\"chem\">[c, b]</span>, split the integral at <span class=\"chem\">c</span>: <span class=\"chem\">A = int_a^c f(x) dx - int_c^b f(x) dx</span>.": "<strong><span class=\"chem\">[a, b]</span> 上の <span class=\"chem\">y = f(x)</span> と <span class=\"chem\">x</span> 軸の間の面積：</strong> <span class=\"chem\">A = int_a^b |f(x)| dx</span>。<span class=\"chem\">f(x)</span> が <span class=\"chem\">x = c</span> で <span class=\"chem\">x</span> 軸を横切り、<span class=\"chem\">[a, c]</span> で <span class=\"chem\">f(x) &gt;= 0</span>、<span class=\"chem\">[c, b]</span> で <span class=\"chem\">f(x) &lt;= 0</span> ならば、<span class=\"chem\">c</span> で積分を分けます：<span class=\"chem\">A = int_a^c f(x) dx - int_c^b f(x) dx</span>。",

    // Definite integrals, signed integrals vs geometric area, and  > li
    "<strong>Area enclosed between two curves <span class=\"chem\">y = f(x)</span> and <span class=\"chem\">y = g(x)</span>:</strong> First solve <span class=\"chem\">f(x) = g(x)</span> to find the intersection <span class=\"chem\">x</span>-coordinates <span class=\"chem\">a</span> and <span class=\"chem\">b</span>. Then integrate the upper curve minus the lower curve: <span class=\"chem\">A = int_a^b (y_{top} - y_{bottom}) dx = int_a^b |f(x) - g(x)| dx</span>. Because <span class=\"chem\">y_{top} - y_{bottom} &gt;= 0</span>, this formula automatically gives the right positive area even when one or both curves dip below the <span class=\"chem\">x</span>-axis!": "<strong>2 曲線 <span class=\"chem\">y = f(x)</span> と <span class=\"chem\">y = g(x)</span> に囲まれた面積：</strong> まず <span class=\"chem\">f(x) = g(x)</span> を解いて交点の <span class=\"chem\">x</span> 座標 <span class=\"chem\">a</span> と <span class=\"chem\">b</span> を求めます。次に「上の曲線 − 下の曲線」を積分します：<span class=\"chem\">A = int_a^b (y_{top} - y_{bottom}) dx = int_a^b |f(x) - g(x)| dx</span>。<span class=\"chem\">y_{top} - y_{bottom} &gt;= 0</span> なので、片方または両方の曲線が <span class=\"chem\">x</span> 軸より下にあっても、この公式は自動的に正しい正の面積を与えます！",

    // Definite integrals, signed integrals vs geometric area, and  > not needed for IB > p
    "<strong>Not needed for IB Math AA:</strong> Numerical approximation of definite integrals using the <strong>trapezoidal rule</strong> (or Simpson's rule) belongs to <strong>IB Math AI (Applications and Interpretation)</strong>, the other IB mathematics course, not to Math AA. In Math AA, definite integrals are evaluated either analytically on Paper 1 or directly with your GDC's numerical integration command on Paper 2 (TI: <span class=\"mono\">fnInt</span>; Casio: <span class=\"mono\">∫dx</span>).": "<strong>IB Math AA で不要なもの：</strong> <strong>台形公式</strong>（やシンプソン則）を用いた定積分の数値近似は、もう一つの IB 数学コースである <strong>IB Math AI (Applications and Interpretation)</strong> の範囲であり、Math AA の範囲ではありません。Math AA では、定積分は Paper 1 で解析的に計算するか、Paper 2 で GDC の数値積分コマンド（TI：<span class=\"mono\">fnInt</span>、Casio：<span class=\"mono\">∫dx</span>）で直接計算します。",

    // Definite integrals, signed integrals vs geometric area, and  > widget > data-title attribute
    "Signed integral, enclosed area and area between curves explorer": "符号付き定積分・囲まれた面積・2 曲線間の面積エクスプローラー",

    // Definite integrals, signed integrals vs geometric area, and  > widget > figcaption
    "Adjust the integration bounds <span class=\"chem\">a</span> and <span class=\"chem\">b</span> and switch modes to see why negative lobes cancel in the signed integral <span class=\"chem\">int_a^b f(x) dx</span> but add positively in the enclosed geometric area <span class=\"chem\">int_a^b |f(x)| dx</span>.": "積分区間 <span class=\"chem\">a</span> と <span class=\"chem\">b</span> を調整し、モードを切り替えて、負の部分が符号付き積分 <span class=\"chem\">int_a^b f(x) dx</span> では打ち消し合うのに、囲まれた図形の面積 <span class=\"chem\">int_a^b |f(x)| dx</span> では正として足される理由を確かめましょう。",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > h3
    "Finding the exact area enclosed between a parabola and a line": "放物線と直線で囲まれた正確な面積を求める",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > p
    "Find the exact area of the finite region enclosed by the parabola <span class=\"chem\">y = 6 - x^2</span> and the line <span class=\"chem\">y = x + 4</span>. <strong>[6 marks]</strong>": "放物線 <span class=\"chem\">y = 6 - x^2</span> と直線 <span class=\"chem\">y = x + 4</span> で囲まれた有限領域の正確な面積を求めなさい (Find)。 <strong>[6 marks]</strong>",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > data-title attribute
    "Equate the two functions to find the x-coordinates of intersection": "2 つの関数を等置して交点の x 座標を求める",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > p
    "The limits of integration a and b are the x-values where the two curves cross.": "積分の下端 a と上端 b は 2 つの曲線が交わる x の値です。",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > maths line
    "<i>x</i> = −2 and <i>x</i> = 1 <b>[A1]</b>": "<i>x</i> = −2 かつ <i>x</i> = 1 <b>[A1]</b>",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > data-title attribute
    "Identify the upper curve and set up ∫ (upper − lower) dx": "上の曲線を見極め、∫ (上 − 下) dx を立てる",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > p
    "At x = 0 ∈ (−2, 1), the parabola has y = 6 while the line has y = 4, so the parabola is on top.": "x = 0 ∈ (−2, 1) で放物線は y = 6、直線は y = 4 なので、放物線が上にあります。",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > data-title attribute
    "Integrate term by term and evaluate F(1) − F(−2)": "項ごとに積分し、F(1) − F(−2) を計算する",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > p
    "Use brackets around F(−2) to avoid sign errors with negative powers.": "負の符号ミスを防ぐために F(−2) 全体をカッコでくくりましょう。",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > maths line
    "<i>A</i> = <span class=\"frac\"><span>7</span><span>6</span></span> − (−<span class=\"frac\"><span>10</span><span>3</span></span>) = <span class=\"frac\"><span>27</span><span>6</span></span> = <b><span class=\"frac\"><span>9</span><span>2</span></span></b> (or 4.5) <b>[A1]</b>": "<i>A</i> = <span class=\"frac\"><span>7</span><span>6</span></span> − (−<span class=\"frac\"><span>10</span><span>3</span></span>) = <span class=\"frac\"><span>27</span><span>6</span></span> = <b><span class=\"frac\"><span>9</span><span>2</span></span></b> （または 4.5） <b>[A1]</b>",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > p
    "<span class=\"chem\">9/2</span> (or <span class=\"chem\">4.5</span>)": "<span class=\"chem\">9/2</span>（または <span class=\"chem\">4.5</span>）",

    // Definite integrals, signed integrals vs geometric area, and  > try it > p
    "Given that <span class=\"chem\">int_1^4 f(x) dx = 5</span>, calculate the value of <span class=\"chem\">int_1^4 (2 f(x) + 1) dx + int_4^1 f(x) dx</span>.": "<span class=\"chem\">int_1^4 f(x) dx = 5</span> のとき、<span class=\"chem\">int_1^4 (2 f(x) + 1) dx + int_4^1 f(x) dx</span> の値を計算しなさい (calculate)。",

    // Definite integrals, signed integrals vs geometric area, and  > try it > li
    "Split the first integral using linearity: <span class=\"chem\">2 int_1^4 f(x) dx + int_1^4 1 dx</span>. Remember that <span class=\"chem\">int_1^4 1 dx = 1(4 - 1) = 3</span>!": "線形性を使って最初の積分を分けます：<span class=\"chem\">2 int_1^4 f(x) dx + int_1^4 1 dx</span>。<span class=\"chem\">int_1^4 1 dx = 1(4 - 1) = 3</span> に注意！",

    // Definite integrals, signed integrals vs geometric area, and  > try it > li
    "For the second term, reversing the limits flips the sign: <span class=\"chem\">int_4^1 f(x) dx = -int_1^4 f(x) dx = -5</span>.": "第 2 項は上下端を入れ替えると符号が反転します：<span class=\"chem\">int_4^1 f(x) dx = -int_1^4 f(x) dx = -5</span>。",

    // Kinematics: displacement, velocity, acceleration and total d > data-toc attribute
    "Kinematics": "運動（力学）",

    // Kinematics: displacement, velocity, acceleration and total d > h2
    "Kinematics: displacement, velocity, acceleration and total distance": "運動（位置・速度・加速度と総移動距離）",

    // Kinematics: displacement, velocity, acceleration and total d > p
    "In one-dimensional kinematics, a particle moves along a straight line (usually the <span class=\"chem\">x</span>-axis or <span class=\"chem\">s</span>-axis) with position or <dfn data-def=\"The signed position s(t) of a particle relative to an origin O along a straight line.\">displacement</dfn> <span class=\"chem\">s(t)</span> relative to an origin <span class=\"chem\">O</span> at time <span class=\"chem\">t &gt;= 0</span>. Differentiation moves forward from position to velocity to acceleration, while integration moves backward:": "1 次元の運動では、粒子が時刻 <span class=\"chem\">t &gt;= 0</span> に原点 <span class=\"chem\">O</span> を基準とした位置または<dfn data-def=\"直線上の原点 O に対する粒子の符号付き位置 s(t)。\">変位 <span class=\"en-term\">(displacement)</span></dfn> <span class=\"chem\">s(t)</span> をもって直線上（通常は <span class=\"chem\">x</span> 軸または <span class=\"chem\">s</span> 軸）を動きます。微分は位置→速度→加速度と進み、積分は逆向きに戻ります：",

    // Kinematics: displacement, velocity, acceleration and total d > data-def attribute
    "The signed position s(t) of a particle relative to an origin O along a straight line.": "直線上の原点 O に対する粒子の符号付き位置 s(t)。",

    // Kinematics: displacement, velocity, acceleration and total d > equation > maths line
    "<i>s</i>(<i>t</i>) &nbsp; <span class=\"chem\">-- d/dt --&gt;</span> &nbsp; <i>v</i>(<i>t</i>) = <span class=\"frac\"><span>d<i>s</i></span><span>d<i>t</i></span></span> &nbsp; <span class=\"chem\">-- d/dt --&gt;</span> &nbsp; <i>a</i>(<i>t</i>) = <span class=\"frac\"><span>d<i>v</i></span><span>d<i>t</i></span></span> = <span class=\"frac\"><span>d<sup>2</sup><i>s</i></span><span>d<i>t</i><sup>2</sup></span></span>": "<i>s</i>(<i>t</i>) &nbsp; <span class=\"chem\">-- d/dt --&gt;</span> &nbsp; <i>v</i>(<i>t</i>) = <span class=\"frac\"><span>d<i>s</i></span><span>d<i>t</i></span></span> &nbsp; <span class=\"chem\">-- d/dt --&gt;</span> &nbsp; <i>a</i>(<i>t</i>) = <span class=\"frac\"><span>d<i>v</i></span><span>d<i>t</i></span></span> = <span class=\"frac\"><span>d<sup>2</sup><i>s</i></span><span>d<i>t</i><sup>2</sup></span></span>",

    // Kinematics: displacement, velocity, acceleration and total d > equation > dt
    "v(t) = ∫ a(t) dt": "v(t) = ∫ a(t) dt",

    // Kinematics: displacement, velocity, acceleration and total d > equation > dd
    "velocity (signed rate of change of displacement; speed is |<i>v</i>(<i>t</i>)|)": "速度（変位の符号付き変化率；速さは |<i>v</i>(<i>t</i>)|）",

    // Kinematics: displacement, velocity, acceleration and total d > equation > dt
    "Δs = ∫<sub>t₁</sub><sup>t₂</sup> v(t) dt": "Δs = ∫<sub>t₁</sub><sup>t₂</sup> v(t) dt",

    // Kinematics: displacement, velocity, acceleration and total d > equation > dd
    "net displacement <i>s</i>(<i>t</i><sub>2</sub>) − <i>s</i>(<i>t</i><sub>1</sub>) over [<i>t</i><sub>1</sub>, <i>t</i><sub>2</sub>]": "[<i>t</i><sub>1</sub>, <i>t</i><sub>2</sub>] における純変位 <i>s</i>(<i>t</i><sub>2</sub>) − <i>s</i>(<i>t</i><sub>1</sub>)",

    // Kinematics: displacement, velocity, acceleration and total d > equation > dt
    "d = ∫<sub>t₁</sub><sup>t₂</sup> |v(t)| dt": "d = ∫<sub>t₁</sub><sup>t₂</sup> |v(t)| dt",

    // Kinematics: displacement, velocity, acceleration and total d > equation > dd
    "total distance travelled over [<i>t</i><sub>1</sub>, <i>t</i><sub>2</sub>]": "[<i>t</i><sub>1</sub>, <i>t</i><sub>2</sub>] における総移動距離",

    // Kinematics: displacement, velocity, acceleration and total d > h3
    "Displacement vs total distance travelled": "変位 vs 総移動距離",

    // Kinematics: displacement, velocity, acceleration and total d > p
    "Suppose a runner starts at the origin <span class=\"chem\">O</span>, runs <span class=\"chem\">10</span> <span class=\"unit\">m</span> East (<span class=\"chem\">+10</span>), turns around, and runs <span class=\"chem\">4</span> <span class=\"unit\">m</span> West (<span class=\"chem\">-4</span>):": "ランナーが原点 <span class=\"chem\">O</span> から出発し、東へ <span class=\"chem\">10</span> <span class=\"unit\">m</span>（<span class=\"chem\">+10</span>）走ってから折り返し、西へ <span class=\"chem\">4</span> <span class=\"unit\">m</span>（<span class=\"chem\">-4</span>）走ったとします：",

    // Kinematics: displacement, velocity, acceleration and total d > li
    "Their <strong>net displacement</strong> is <span class=\"chem\">Delta s = int_{t_1}^{t_2} v(t) dt = +10 - 4 = +6</span> <span class=\"unit\">m</span> (how far they end up from where they started).": "<strong>純変位</strong>は <span class=\"chem\">Delta s = int_{t_1}^{t_2} v(t) dt = +10 - 4 = +6</span> <span class=\"unit\">m</span>（出発点から最終的にどれだけ離れているか）です。",

    // Kinematics: displacement, velocity, acceleration and total d > li
    "Their <strong>total distance travelled</strong> is <span class=\"chem\">d = int_{t_1}^{t_2} |v(t)| dt = 10 + |-4| = 14</span> <span class=\"unit\">m</span> (what a pedometer on their shoe records).": "<strong>総移動距離</strong>は <span class=\"chem\">d = int_{t_1}^{t_2} |v(t)| dt = 10 + |-4| = 14</span> <span class=\"unit\">m</span>（靴の歩数計が記録する道のり）です。",

    // Kinematics: displacement, velocity, acceleration and total d > common mistake > p
    "<strong>Two classic kinematics traps to avoid:</strong><br> 1. <strong>Forgetting to check <span class=\"chem\">v(t) = 0</span> when finding total distance on Paper 1:</strong> Before integrating <span class=\"chem\">v(t)</span> from <span class=\"chem\">t_1</span> to <span class=\"chem\">t_2</span> to find distance, always solve <span class=\"chem\">v(t) = 0</span> first! If <span class=\"chem\">v(t)</span> changes sign at <span class=\"chem\">t = c</span> inside <span class=\"chem\">(t_1, t_2)</span>, you must split the integral at <span class=\"chem\">t = c</span> and add the absolute values: <span class=\"chem\">d = |int_{t_1}^c v(t) dt| + |int_c^{t_2} v(t) dt|</span>.<br> 2. <strong>Thinking <span class=\"chem\">a(t) &lt; 0</span> always means slowing down:</strong> A particle is <strong>speeding up</strong> whenever velocity <span class=\"chem\">v(t)</span> and acceleration <span class=\"chem\">a(t)</span> have the <strong>same sign</strong> (<span class=\"chem\">v(t) * a(t) &gt; 0</span>, either both positive or both negative!), and <strong>slowing down</strong> whenever <span class=\"chem\">v(t)</span> and <span class=\"chem\">a(t)</span> have <strong>opposite signs</strong> (<span class=\"chem\">v(t) * a(t) &lt; 0</span>).": "<strong>避けるべき 2 つの定番の罠：</strong><br> 1. <strong>Paper 1 で総移動距離を求めるとき <span class=\"chem\">v(t) = 0</span> の確認を忘れる：</strong> 移動距離を求めるために <span class=\"chem\">v(t)</span> を <span class=\"chem\">t_1</span> から <span class=\"chem\">t_2</span> まで積分する前に、必ず最初に <span class=\"chem\">v(t) = 0</span> を解きましょう！<span class=\"chem\">(t_1, t_2)</span> 内の <span class=\"chem\">t = c</span> で <span class=\"chem\">v(t)</span> の符号が変わるなら、<span class=\"chem\">t = c</span> で積分を分けて絶対値を足す必要があります：<span class=\"chem\">d = |int_{t_1}^c v(t) dt| + |int_c^{t_2} v(t) dt|</span>。<br> 2. <strong><span class=\"chem\">a(t) &lt; 0</span> なら常に減速していると思い込む：</strong> 速度 <span class=\"chem\">v(t)</span> と加速度 <span class=\"chem\">a(t)</span> が<strong>同じ符号</strong>（<span class=\"chem\">v(t) * a(t) &gt; 0</span>、両方正または両方負！）のとき粒子は<strong>加速</strong>しており、<span class=\"chem\">v(t)</span> と <span class=\"chem\">a(t)</span> が<strong>反対の符号</strong>（<span class=\"chem\">v(t) * a(t) &lt; 0</span>）のとき<strong>減速</strong>しています。",

    // Kinematics: displacement, velocity, acceleration and total d > widget > data-title attribute
    "Particle kinematics lab: displacement vs total distance": "粒子の運動ラボ：変位 vs 総移動距離",

    // Kinematics: displacement, velocity, acceleration and total d > widget > figcaption
    "Drag the time slider <span class=\"chem\">T</span> or press <strong>Play motion</strong> to watch the particle move along the track. Notice how the particle reverses direction at <span class=\"chem\">v(t) = 0</span>: after the turnaround, net displacement <span class=\"chem\">Delta s</span> decreases while total distance <span class=\"chem\">d = int_0^T |v(t)| dt</span> keeps growing.": "時刻スライダー <span class=\"chem\">T</span> を動かすか <strong>Play motion</strong> を押して、直線上の粒子の動きを見てみましょう。<span class=\"chem\">v(t) = 0</span> で粒子が向きを反転する様子に注目してください：折り返し後、純変位 <span class=\"chem\">Delta s</span> は減少しますが、総移動距離 <span class=\"chem\">d = int_0^T |v(t)| dt</span> は増え続けます。",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > h3
    "Finding displacement and total distance when a particle reverses direction": "粒子が向きを変えるときの変位と総移動距離を求める",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > p
    "A particle moves along a straight line so that its velocity <span class=\"chem\">v</span> <span class=\"unit\">m s-1</span> at time <span class=\"chem\">t</span> seconds (<span class=\"chem\">t &gt;= 0</span>) is given by <span class=\"chem\">v(t) = 3t^2 - 12t + 9</span>. Initially, the particle is at the origin <span class=\"chem\">O</span>.<br> (a) Find the times when the particle is momentarily at rest. <strong>[2 marks]</strong><br> (b) Find the displacement of the particle from <span class=\"chem\">O</span> at <span class=\"chem\">t = 4</span> <span class=\"unit\">s</span>, and find the total distance travelled by the particle in the first <span class=\"chem\">4</span> seconds. <strong>[5 marks]</strong>": "粒子が直線上を動き、時刻 <span class=\"chem\">t</span> 秒（<span class=\"chem\">t &gt;= 0</span>）における速度 <span class=\"chem\">v</span> <span class=\"unit\">m s-1</span> が <span class=\"chem\">v(t) = 3t^2 - 12t + 9</span> で与えられる。最初、粒子は原点 <span class=\"chem\">O</span> にある。<br> (a) 粒子が一瞬静止する時刻を求めなさい (Find)。 <strong>[2 marks]</strong><br> (b) <span class=\"chem\">t = 4</span> <span class=\"unit\">s</span> における <span class=\"chem\">O</span> からの粒子の変位と、最初の <span class=\"chem\">4</span> 秒間に粒子が進んだ総移動距離を求めなさい (find)。 <strong>[5 marks]</strong>",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > data-title attribute
    "Part (a): Solve v(t) = 0 to find when the particle reverses direction": "(a) v(t) = 0 を解いて粒子が向きを変える時刻を求める",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > p
    "A particle is at rest when its velocity is zero. Factor out 3 first.": "速度が 0 のとき粒子は静止しています。まず 3 をくくり出しましょう。",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > maths line
    "3<i>t</i><sup>2</sup> − 12<i>t</i> + 9 = 3(<i>t</i> − 1)(<i>t</i> − 3) = 0 ⇒ <i>t</i> = 1 <span class=\"unit\">s</span> and <i>t</i> = 3 <span class=\"unit\">s</span> <b>[M1 A1]</b>": "3<i>t</i><sup>2</sup> − 12<i>t</i> + 9 = 3(<i>t</i> − 1)(<i>t</i> − 3) = 0 ⇒ <i>t</i> = 1 <span class=\"unit\">s</span> かつ <i>t</i> = 3 <span class=\"unit\">s</span> <b>[M1 A1]</b>",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > data-title attribute
    "Part (b): Integrate v(t) with s(0) = 0 to get s(t) and evaluate s(4)": "(b) s(0) = 0 として v(t) を積分して s(t) を求め、s(4) を計算する",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > p
    "Antidifferentiating v(t) gives the position s(t) at any time t, making both displacement and piecewise distance fast to compute.": "v(t) の原始関数を求めると任意の時刻 t での位置 s(t) が得られ、変位も区間ごとの距離も素早く計算できます。",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > maths line
    "Displacement at <i>t</i> = 4: &nbsp; <i>s</i>(4) = 4<sup>3</sup> − 6(4<sup>2</sup>) + 9(4) = 64 − 96 + 36 = <b>4 <span class=\"unit\">m</span></b> <b>[A1]</b>": "<i>t</i> = 4 における変位： &nbsp; <i>s</i>(4) = 4<sup>3</sup> − 6(4<sup>2</sup>) + 9(4) = 64 − 96 + 36 = <b>4 <span class=\"unit\">m</span></b> <b>[A1]</b>",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > data-title attribute
    "Split [0, 4] at the turning times t = 1 and t = 3 to sum the absolute distances": "折り返し時刻 t = 1 と t = 3 で [0, 4] を分割し、距離の絶対値を足す",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > p
    "Evaluate s(0) = 0, s(1) = 4, s(3) = 0, and s(4) = 4, then add the distance of each leg.": "s(0) = 0、s(1) = 4、s(3) = 0、s(4) = 4 を計算し、各区間の距離を足します。",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > maths line
    "Total distance <i>d</i> = |<i>s</i>(1) − <i>s</i>(0)| + |<i>s</i>(3) − <i>s</i>(1)| + |<i>s</i>(4) − <i>s</i>(3)| = 4 + 4 + 4 = <b>12 <span class=\"unit\">m</span></b> <b>[M1 A1]</b>": "総移動距離 <i>d</i> = |<i>s</i>(1) − <i>s</i>(0)| + |<i>s</i>(3) − <i>s</i>(1)| + |<i>s</i>(4) − <i>s</i>(3)| = 4 + 4 + 4 = <b>12 <span class=\"unit\">m</span></b> <b>[M1 A1]</b>",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > p
    "(a) <span class=\"chem\">t = 1</span> <span class=\"unit\">s</span> and <span class=\"chem\">t = 3</span> <span class=\"unit\">s</span>; (b) displacement <span class=\"chem\">4</span> <span class=\"unit\">m</span>, total distance <span class=\"chem\">12</span> <span class=\"unit\">m</span>.": "(a) <span class=\"chem\">t = 1</span> <span class=\"unit\">s</span> および <span class=\"chem\">t = 3</span> <span class=\"unit\">s</span>；(b) 変位 <span class=\"chem\">4</span> <span class=\"unit\">m</span>、総移動距離 <span class=\"chem\">12</span> <span class=\"unit\">m</span>。",

    // Kinematics: displacement, velocity, acceleration and total d > try it > p
    "A particle moves along a line with velocity <span class=\"chem\">v(t) = 2t - 4</span> <span class=\"unit\">m s-1</span> for <span class=\"chem\">0 &lt;= t &lt;= 5</span>. Calculate the <strong>total distance travelled</strong> (in <span class=\"unit\">m</span>) by the particle between <span class=\"chem\">t = 0</span> and <span class=\"chem\">t = 5</span>.": "粒子が <span class=\"chem\">0 &lt;= t &lt;= 5</span> の間、速度 <span class=\"chem\">v(t) = 2t - 4</span> <span class=\"unit\">m s-1</span> で直線上を動く。<span class=\"chem\">t = 0</span> から <span class=\"chem\">t = 5</span> までに粒子が進んだ<strong>総移動距離</strong>（<span class=\"unit\">m</span>）を計算しなさい (Calculate)。",

    // Kinematics: displacement, velocity, acceleration and total d > try it > li
    "First find when <span class=\"chem\">v(t) = 0</span>: <span class=\"chem\">2t - 4 = 0 =&gt; t = 2</span> <span class=\"unit\">s</span>.": "まず <span class=\"chem\">v(t) = 0</span> となる時刻を求めます：<span class=\"chem\">2t - 4 = 0 =&gt; t = 2</span> <span class=\"unit\">s</span>。",

    // Kinematics: displacement, velocity, acceleration and total d > try it > li
    "Split the integral at <span class=\"chem\">t = 2</span>: <span class=\"chem\">d = |int_0^2 (2t - 4) dt| + |int_2^5 (2t - 4) dt|</span>.": "<span class=\"chem\">t = 2</span> で積分を分けます：<span class=\"chem\">d = |int_0^2 (2t - 4) dt| + |int_2^5 (2t - 4) dt|</span>。",

    // Kinematics: displacement, velocity, acceleration and total d > try it > maths line
    "Total distance = |−4| + 9 = <b>13 <span class=\"unit\">m</span></b>": "総移動距離 = |−4| + 9 = <b>13 <span class=\"unit\">m</span></b>",

    // Quick practice > data-toc attribute
    "Practice": "演習",

    // Quick practice > h2
    "Quick practice": "確認問題",

    // widget string (assets/js/widgets-t5-2.js)
    "Definite integral and enclosed area": "定積分と囲まれた面積",

    // widget string (assets/js/widgets-t5-2.js)
    "Momentarily at rest (v = 0)": "一瞬静止（v = 0）",

    // widget string (assets/js/widgets-t5-2.js)
    "Speeding up (v and a have same sign)": "加速中（v と a が同符号）",

    // widget string (assets/js/widgets-t5-2.js)
    "Slowing down (v and a have opposite signs)": "減速中（v と a が異符号）",

    // widget string (assets/js/widgets-t5-2.js)
    "Velocity-time graph v(t)": "速度-時間グラフ v(t)",

    // What you need to be able to do > p
    "Before this page: you need the differentiation rules (power, chain and product rules) from <a href=\"t5-1.html\">5.1 Differentiation, curve analysis and optimization</a>, because every integral here is a derivative read backwards. Trigonometric integrals and all GDC work use radians (<a href=\"t3-1.html\">3.1 3D geometry, triangle trigonometry and radians</a>).": "このページの前に：<a href=\"t5-1.html\">5.1 微分法・曲線の概形と最大最小問題（最適化）</a>の微分法則（べき乗の公式、合成関数・積の微分法）が必要です。ここで扱う積分はすべて、導関数を逆から読んだものだからです。三角関数の積分と GDC の計算はすべて弧度法（ラジアン）で行います（<a href=\"t3-1.html\">3.1 3D 幾何学・三角形の三角比と弧度法</a>）。",

    // Quick practice > data-title attribute
    "5.2 foundation": "5.2 基礎",

    // Quick practice > data-title attribute
    "5.2 exam standard": "5.2 試験標準",

    // Quick practice > data-title attribute
    "5.2 challenge": "5.2 発展",

  }
});
