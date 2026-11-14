/* t2-3 — ja translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't2-3', {
  strings: {

    // page title (browser tab)
    "2.3 Transformations, polynomials and modulus functions | Analysis Lab": "2.3 グラフの変換・多項式・絶対値関数 | Analysis Lab",

    // Transformations, polynomials and modulus functions > page header > p
    "Topic 2.3 · SL 2.11 + AHL 2.12–2.16": "Topic 2.3 · SL 2.11 + AHL 2.12–2.16",

    // Transformations, polynomials and modulus functions > page header > h1
    "Transformations, polynomials and modulus functions": "グラフの変換・多項式・絶対値関数",

    // Transformations, polynomials and modulus functions > page header > span
    "How can we transform any graph systematically, extract polynomial roots and symmetries without expanding everything, and solve rational and modulus inequalities without losing solutions?": "あらゆるグラフを体系的に変換し、すべてを展開せずに多項式の解や対称性を読み取り、解を落とさずに分数不等式・絶対値不等式を解くにはどうすればよいでしょうか？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "チェックリスト",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > p
    "You need function notation, inverse functions and composite functions from <a href=\"t2-1.html\">2.1 Lines, functions, domains, inverses and composites</a>, and quadratics and rational functions from <a href=\"t2-2.html\">2.2 Quadratics, rational, exponential and log models</a>, before you start this page. Finding turning points (to restrict a domain) uses <span class=\"chem\">f'(x) = 0</span> from <a href=\"t5-1.html\">5.1 Differentiation, curve analysis and optimization</a>; on Paper 2 you can use the GDC maximum and minimum tools instead.": "このページを始める前に、<a href=\"t2-1.html\">2.1 直線、関数、定義域、逆関数と合成関数</a> の関数の記法・逆関数・合成関数と、<a href=\"t2-2.html\">2.2 二次関数、有理関数、指数・対数モデル</a> の 2 次関数・分数関数を身につけておく必要があります。（定義域を制限するために）極値をとる点を求めるには <a href=\"t5-1.html\">5.1 微分法・曲線の概形と最大最小問題（最適化）</a> の <span class=\"chem\">f'(x) = 0</span> を使います。Paper 2 では代わりに GDC の最大値・最小値機能を使えます。",

    // What you need to be able to do > checklist > span
    "Apply translations, reflections, and vertical/horizontal stretches—including composite transformations <span class=\"chem\">y = a f(b(x - h)) + k</span>—in the correct order and track key coordinates.": "平行移動、対称移動、縦・横方向の拡大・縮小（合成変換 <span class=\"chem\">y = a f(b(x - h)) + k</span> を含む）を正しい順序で適用し、代表点の座標を追跡できる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Use the Remainder Theorem (<span class=\"chem\">P(b/a)</span>) and Factor Theorem (<span class=\"chem\">P(k) = 0</span>) to factorise polynomials and find unknown coefficients.": "剰余の定理（<span class=\"chem\">P(b/a)</span>）と因数定理（<span class=\"chem\">P(k) = 0</span>）を使って多項式を因数分解し、未知の係数を求められる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Use Vieta's formulas for the sum and product of polynomial roots to evaluate symmetric expressions like <span class=\"chem\">alpha^2 + beta^2</span> without solving for individual roots.": "解と係数の関係（Vieta の公式）を使って、個々の解を求めずに <span class=\"chem\">alpha^2 + beta^2</span> のような対称式の値を計算できる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Sketch rational functions <span class=\"chem\">(ax + b)/(cx^2 + dx + e)</span> and <span class=\"chem\">(ax^2 + bx + c)/(dx + e)</span>, finding vertical, horizontal, and oblique asymptotes via polynomial division.": "分数関数 <span class=\"chem\">(ax + b)/(cx^2 + dx + e)</span> や <span class=\"chem\">(ax^2 + bx + c)/(dx + e)</span> の概形を描き、多項式の割り算から鉛直漸近線・水平漸近線・斜漸近線を求められる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Test for even (<span class=\"chem\">f(-x) = f(x)</span>), odd (<span class=\"chem\">f(-x) = -f(x)</span>), and self-inverse (<span class=\"chem\">f(f(x)) = x</span>) functions, and restrict a domain at a turning point so <span class=\"chem\">f^{-1}</span> exists.": "偶関数（<span class=\"chem\">f(-x) = f(x)</span>）、奇関数（<span class=\"chem\">f(-x) = -f(x)</span>）、自己逆関数（<span class=\"chem\">f(f(x)) = x</span>）を判定し、<span class=\"chem\">f^{-1}</span> が存在するように極値（停留点）で定義域を制限できる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Sketch <span class=\"chem\">y = |f(x)|</span>, <span class=\"chem\">y = f(|x|)</span>, <span class=\"chem\">y = 1/f(x)</span>, and <span class=\"chem\">y = [f(x)]^2</span>, and solve polynomial, rational, and modulus inequalities analytically and graphically.": "<span class=\"chem\">y = |f(x)|</span>、<span class=\"chem\">y = f(|x|)</span>、<span class=\"chem\">y = 1/f(x)</span>、<span class=\"chem\">y = [f(x)]^2</span> の概形を描き、多項式・分数・絶対値の不等式を代数的およびグラフで解ける。",

    // Question decoder: spotting transformation, polynomial &amp;  > data-toc attribute
    "Question decoder": "問題デコーダー",

    // Question decoder: spotting transformation, polynomial &amp;  > h2
    "Question decoder: spotting transformation, polynomial &amp; inequality cues": "問題デコーダー：変換・多項式・不等式の手がかりを見抜く",

    // Question decoder: spotting transformation, polynomial &amp;  > p
    "Exam questions in Topic 2.3 reward students who spot the algebraic shortcut immediately—especially when the question forbids finding roots explicitly or hides an asymptote inside an improper fraction.": "Topic 2.3 の試験問題では、特に「解を直接求めずに」と指定されたり、仮分数式のなかに漸近線が隠されていたりするときに、代数的な近道をすぐに見抜けるかが勝負になります。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > caption
    "Question decoder — Transformations, polynomials, rational functions &amp; modulus": "問題デコーダー — グラフの変換・多項式・分数関数・絶対値",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "What the exam question says": "試験問題に書かれている表現",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "What it means (formula &amp; setup)": "数学的な意味（公式と立式）",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1（電卓不可）vs Paper 2（GDC 可）",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "“Describe the sequence of transformations from <span class=\"chem\">f(x)</span> to <span class=\"chem\">a f(bx + c) + d</span>”": "「<span class=\"chem\">f(x)</span> から <span class=\"chem\">a f(bx + c) + d</span> への変換の手順を述べよ」",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Factor inside <span class=\"chem\">f</span> first: <span class=\"chem\">a f(b(x + c/b)) + d</span>. Horizontal stretch by <span class=\"chem\">1/b</span> <strong>then</strong> shift by <span class=\"chem\">-c/b</span>; vertical stretch by <span class=\"chem\">a</span> <strong>then</strong> shift by <span class=\"chem\">d</span>.": "まず <span class=\"chem\">f</span> の内側をくくります：<span class=\"chem\">a f(b(x + c/b)) + d</span>。横方向に <span class=\"chem\">1/b</span> 倍に拡大・縮小して<strong>から</strong> <span class=\"chem\">-c/b</span> 平行移動；縦方向に <span class=\"chem\">a</span> 倍して<strong>から</strong> <span class=\"chem\">d</span> 平行移動します。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Check any point <span class=\"chem\">(x_0, y_0)</span> using coordinate tracking: <span class=\"chem\">x_{new} = (x_0 - c)/b</span> and <span class=\"chem\">y_{new} = a y_0 + d</span>.": "任意の点 <span class=\"chem\">(x_0, y_0)</span> について座標を追跡して検算できます：<span class=\"chem\">x_{new} = (x_0 - c)/b</span> かつ <span class=\"chem\">y_{new} = a y_0 + d</span>。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "“<span class=\"chem\">P(x)</span> is divisible by <span class=\"chem\">(x - k)</span>” / “<span class=\"chem\">(x - k)</span> is a factor of <span class=\"chem\">P(x)</span>”": "「<span class=\"chem\">P(x)</span> は <span class=\"chem\">(x - k)</span> で割り切れる」 / 「<span class=\"chem\">(x - k)</span> は <span class=\"chem\">P(x)</span> の因数である」",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Apply the <strong>Factor Theorem</strong>: set <strong><span class=\"chem\">P(k) = 0</span></strong>.": "<strong>因数定理</strong>を適用し、<strong><span class=\"chem\">P(k) = 0</span></strong> とおきます。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Substitute <span class=\"chem\">x = k</span> directly into <span class=\"chem\">P(x)</span>—much faster than polynomial long division.": "<span class=\"chem\">x = k</span> を直接 <span class=\"chem\">P(x)</span> に代入します（筆算の割り算よりはるかに速いです）。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "“Find the remainder when <span class=\"chem\">P(x)</span> is divided by <span class=\"chem\">(ax - b)</span>”": "「<span class=\"chem\">P(x)</span> を <span class=\"chem\">(ax - b)</span> で割った余りを求めよ」",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Apply the <strong>Remainder Theorem</strong>: remainder is <strong><span class=\"chem\">P(b/a)</span></strong>.": "<strong>剰余の定理</strong>を適用すると、余りは <strong><span class=\"chem\">P(b/a)</span></strong> です。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "If divided by a quadratic <span class=\"chem\">(x - p)(x - q)</span>, write <span class=\"chem\">P(x) = Q(x)(x - p)(x - q) + mx + c</span> and plug in <span class=\"chem\">x = p</span> and <span class=\"chem\">x = q</span>.": "2 次式 <span class=\"chem\">(x - p)(x - q)</span> で割るときは、<span class=\"chem\">P(x) = Q(x)(x - p)(x - q) + mx + c</span> とおいて <span class=\"chem\">x = p</span> と <span class=\"chem\">x = q</span> を代入します。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "“Find <span class=\"chem\">alpha^2 + beta^2</span> (or <span class=\"chem\">1/alpha + 1/beta</span>) without finding the roots”": "「解を求めずに <span class=\"chem\">alpha^2 + beta^2</span>（または <span class=\"chem\">1/alpha + 1/beta</span>）を求めよ」",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Use <strong>Vieta's formulas</strong> for <span class=\"chem\">alpha + beta = -b/a</span> and <span class=\"chem\">alpha beta = c/a</span>, then rewrite <span class=\"chem\">alpha^2 + beta^2 = (alpha + beta)^2 - 2 alpha beta</span>.": "<strong>解と係数の関係</strong> <span class=\"chem\">alpha + beta = -b/a</span>、<span class=\"chem\">alpha beta = c/a</span> を使い、<span class=\"chem\">alpha^2 + beta^2 = (alpha + beta)^2 - 2 alpha beta</span> と変形します。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "For cubics, use <span class=\"chem\">sum alpha = -a_2/a_3</span>, <span class=\"chem\">sum alpha beta = a_1/a_3</span>, <span class=\"chem\">alpha beta gamma = -a_0/a_3</span>.": "3 次方程式では <span class=\"chem\">sum alpha = -a_2/a_3</span>、<span class=\"chem\">sum alpha beta = a_1/a_3</span>、<span class=\"chem\">alpha beta gamma = -a_0/a_3</span> を使います。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "“Find the equation of the oblique asymptote of <span class=\"chem\">(ax^2 + bx + c)/(dx + e)</span>”": "「<span class=\"chem\">(ax^2 + bx + c)/(dx + e)</span> の斜漸近線の方程式を求めよ」",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Divide numerator by denominator: <span class=\"chem\">f(x) = mx + k + R/(dx + e)</span>. As <span class=\"chem\">x -&gt; +-infty</span>, remainder <span class=\"chem\">-&gt; 0</span>.": "分子を分母で割ると <span class=\"chem\">f(x) = mx + k + R/(dx + e)</span> となります。<span class=\"chem\">x -&gt; +-infty</span> で余りの項は <span class=\"chem\">-&gt; 0</span> です。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "The oblique asymptote is the linear quotient <strong><span class=\"chem\">y = mx + k</span></strong> (must be written as <span class=\"chem\">y = …</span>).": "斜漸近線は商の 1 次式 <strong><span class=\"chem\">y = mx + k</span></strong> です（必ず <span class=\"chem\">y = …</span> の方程式で書きます）。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "“Find the largest domain containing <span class=\"chem\">x = a</span> for which <span class=\"chem\">f^{-1}</span> exists”": "「<span class=\"chem\">f^{-1}</span> が存在するための、<span class=\"chem\">x = a</span> を含む最大の定義域を求めよ」",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "<span class=\"chem\">f</span> must be <strong>one-to-one</strong>: cut the domain at the turning point where <strong><span class=\"chem\">f'(x) = 0</span></strong> (or vertex).": "<span class=\"chem\">f</span> は <strong>1 対 1</strong> でなければならないため、<strong><span class=\"chem\">f'(x) = 0</span></strong> となる極値（または頂点）で定義域を区切ります。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "On Paper 2, find the local max/min on the GDC; pick the branch around <span class=\"chem\">x = a</span> up to the turning point.": "Paper 2 では GDC で極大・極小を求め、<span class=\"chem\">x = a</span> を含む極値までの区間を選びます。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "“Sketch <span class=\"chem\">|f(x)|</span> vs <span class=\"chem\">f(|x|)</span> vs <span class=\"chem\">1/f(x)</span>”": "「<span class=\"chem\">|f(x)|</span>・<span class=\"chem\">f(|x|)</span>・<span class=\"chem\">1/f(x)</span> の概形を描け」",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "<span class=\"chem\">|f(x)|</span>: reflect <span class=\"chem\">y &lt; 0</span> up. <span class=\"chem\">f(|x|)</span>: copy <span class=\"chem\">x &gt;= 0</span> to <span class=\"chem\">x &lt; 0</span>. <span class=\"chem\">1/f(x)</span>: roots <span class=\"chem\">-&gt;</span> VAs, <span class=\"chem\">y = +-1</span> invariant.": "<span class=\"chem\">|f(x)|</span>：<span class=\"chem\">y &lt; 0</span> を上へ折り返す。<span class=\"chem\">f(|x|)</span>：<span class=\"chem\">x &gt;= 0</span> を <span class=\"chem\">x &lt; 0</span> へ対称コピー。<span class=\"chem\">1/f(x)</span>：解 <span class=\"chem\">-&gt;</span> 鉛直漸近線、<span class=\"chem\">y = +-1</span> は不変。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Always label <span class=\"chem\">x</span>-intercepts, cusps, asymptotes, and reciprocal extrema <span class=\"chem\">(a, 1/M)</span>.": "<span class=\"chem\">x</span> 切片、尖点（折り返し点）、漸近線、逆数の極値 <span class=\"chem\">(a, 1/M)</span> を必ず記入しましょう。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "“Solve <span class=\"chem\">(ax + b)/(cx + d) &gt;= k</span>” or “<span class=\"chem\">|2x - 1| &lt; |x + 3|</span>”": "「<span class=\"chem\">(ax + b)/(cx + d) &gt;= k</span>」または「<span class=\"chem\">|2x - 1| &lt; |x + 3|</span> を解け」",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Rational: subtract <span class=\"chem\">k</span> to one side, combine into one fraction, use a sign diagram. Two moduli: square both sides.": "分数不等式：<span class=\"chem\">k</span> を移項して 1 つの分数にまとめ、符号表を使います。両辺とも絶対値：両辺を 2 乗します。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "<strong>Never cross-multiply</strong> by <span class=\"chem\">(cx + d)</span>! On Paper 2, check your intervals against a GDC plot.": "<span class=\"chem\">(cx + d)</span> を<strong>そのまま両辺に掛けてはいけません</strong>！Paper 2 では GDC のグラフで区間を確認しましょう。",

    // Graph transformations and composite order > data-toc attribute
    "Transformations": "グラフの変換",

    // Graph transformations and composite order > h2
    "Graph transformations and composite order": "グラフの変換と合成変換の順序",

    // Graph transformations and composite order > p
    "Every transformation of <span class=\"chem\">y = f(x)</span> belongs to one of two independent worlds: <strong>vertical</strong> changes (outside <span class=\"chem\">f</span>, affecting <span class=\"chem\">y</span> directly) and <strong>horizontal</strong> changes (inside <span class=\"chem\">f</span>, affecting <span class=\"chem\">x</span> in the opposite direction).": "<span class=\"chem\">y = f(x)</span> の変換はすべて 2 つの独立した世界に分かれます：<strong>縦方向</strong>の変化（<span class=\"chem\">f</span> の外側で <span class=\"chem\">y</span> にそのまま作用）と<strong>横方向</strong>の変化（<span class=\"chem\">f</span> の内側で <span class=\"chem\">x</span> に逆向きに作用）です。",

    // Graph transformations and composite order > table > caption
    "Core graph transformations (SL 2.11)": "基本的なグラフの変換 (SL 2.11)",

    // Graph transformations and composite order > table > th
    "Equation": "方程式",

    // Graph transformations and composite order > table > th
    "Geometric transformation": "幾何学的変換",

    // Graph transformations and composite order > table > th
    "Effect on point <span class=\"chem\">(x_0, y_0)</span>": "点 <span class=\"chem\">(x_0, y_0)</span> への影響",

    // Graph transformations and composite order > table > td
    "Vertical translation by vector <span class=\"chem\">(0, k)</span>": "ベクトル <span class=\"chem\">(0, k)</span> による縦方向の平行移動",

    // Graph transformations and composite order > table > td
    "Horizontal translation by vector <span class=\"chem\">(h, 0)</span> (<span class=\"chem\">h &gt; 0</span> moves right)": "ベクトル <span class=\"chem\">(h, 0)</span> による横方向の平行移動（<span class=\"chem\">h &gt; 0</span> で右へ移動）",

    // Graph transformations and composite order > table > td
    "Reflection in the <span class=\"chem\">x</span>-axis": "<span class=\"chem\">x</span> 軸に関する対称移動",

    // Graph transformations and composite order > table > td
    "Reflection in the <span class=\"chem\">y</span>-axis": "<span class=\"chem\">y</span> 軸に関する対称移動",

    // Graph transformations and composite order > table > td
    "Vertical stretch of scale factor <span class=\"chem\">|a|</span> (plus <span class=\"chem\">x</span>-axis reflection if <span class=\"chem\">a &lt; 0</span>)": "縦方向に <span class=\"chem\">|a|</span> 倍の拡大・縮小（<span class=\"chem\">a &lt; 0</span> なら <span class=\"chem\">x</span> 軸対称移動を含む）",

    // Graph transformations and composite order > table > th
    "<span class=\"chem\">y = f(bx)</span>": "<span class=\"chem\">y = f(bx)</span>",

    // Graph transformations and composite order > table > td
    "Horizontal stretch of scale factor <span class=\"chem\">1/|b|</span> (plus <span class=\"chem\">y</span>-axis reflection if <span class=\"chem\">b &lt; 0</span>)": "横方向に <span class=\"chem\">1/|b|</span> 倍の拡大・縮小（<span class=\"chem\">b &lt; 0</span> なら <span class=\"chem\">y</span> 軸対称移動を含む）",

    // Graph transformations and composite order > h3
    "Composite transformations: why order matters": "合成変換：なぜ順序が重要なのか",

    // Graph transformations and composite order > p
    "When both a stretch and a translation act in the same direction—for example, <span class=\"chem\">y = a f(bx + c) + d</span>—the safest method is to <strong>factor <span class=\"chem\">b</span> out inside the bracket first</strong>:": "拡大・縮小と平行移動の両方が同じ方向に作用する場合（たとえば <span class=\"chem\">y = a f(bx + c) + d</span>）、最も安全な方法は<strong>最初に括弧の中から <span class=\"chem\">b</span> をくくり出す</strong>ことです：",

    // Graph transformations and composite order > equation > dt
    "Factored horizontal order": "くくり出した後の横方向の順序",

    // Graph transformations and composite order > equation > dd
    "1. Horizontal stretch by scale factor <span class=\"chem\">1/|b|</span> (and reflect in <span class=\"chem\">y</span>-axis if <span class=\"chem\">b &lt; 0</span>), <strong>then</strong> 2. Horizontal shift by <span class=\"chem\">h</span>.": "1. 横方向に倍率 <span class=\"chem\">1/|b|</span> で拡大・縮小（<span class=\"chem\">b &lt; 0</span> なら <span class=\"chem\">y</span> 軸対称移動）、<strong>そのあと</strong> 2. 横方向に <span class=\"chem\">h</span> 平行移動。",

    // Graph transformations and composite order > equation > dt
    "Vertical order": "縦方向の順序",

    // Graph transformations and composite order > equation > dd
    "1. Vertical stretch by scale factor <span class=\"chem\">|a|</span> (and reflect in <span class=\"chem\">x</span>-axis if <span class=\"chem\">a &lt; 0</span>), <strong>then</strong> 2. Vertical shift by <span class=\"chem\">k</span>.": "1. 縦方向に倍率 <span class=\"chem\">|a|</span> で拡大・縮小（<span class=\"chem\">a &lt; 0</span> なら <span class=\"chem\">x</span> 軸対称移動）、<strong>そのあと</strong> 2. 縦方向に <span class=\"chem\">k</span> 平行移動。",

    // Graph transformations and composite order > equation > dt
    "Unfactored <span class=\"chem\">f(bx + c)</span>": "くくり出さない <span class=\"chem\">f(bx + c)</span> の場合",

    // Graph transformations and composite order > equation > dd
    "If you do <em>not</em> factor out <span class=\"chem\">b</span>, you must shift by <span class=\"chem\">-c</span> <strong>first</strong>, then stretch by <span class=\"chem\">1/b</span> (since <span class=\"chem\">x_{new} = (x_0 - c)/b</span>).": "<span class=\"chem\">b</span> をくくり出さ<em>ない</em>場合は、<strong>先に</strong> <span class=\"chem\">-c</span> だけ平行移動してから <span class=\"chem\">1/b</span> 倍する必要があります（<span class=\"chem\">x_{new} = (x_0 - c)/b</span> だからです）。",

    // Graph transformations and composite order > common mistake > p
    "<strong>Common mistake — Wrong horizontal shift in <span class=\"chem\">f(2x - 6)</span>:</strong> Students often see <span class=\"chem\">- 6</span> and state a translation of <span class=\"chem\">6</span> units right after stretching by <span class=\"chem\">1/2</span>. Always factor first: <span class=\"chem\">f(2x - 6) = f(2(x - 3))</span>, so the translation is <strong><span class=\"chem\">3</span> units right</strong>, not <span class=\"chem\">6</span>!": "<strong>よくあるミス — <span class=\"chem\">f(2x - 6)</span> の横方向への平行移動量の間違い：</strong> <span class=\"chem\">- 6</span> を見て、<span class=\"chem\">1/2</span> 倍したあとに右へ <span class=\"chem\">6</span> 平行移動すると答えてしまう人が多くいます。必ず最初に <span class=\"chem\">f(2x - 6) = f(2(x - 3))</span> とくくりましょう。平行移動は <span class=\"chem\">6</span> ではなく<strong>右へ <span class=\"chem\">3</span></strong> です！",

    // Graph transformations and composite order > widget > data-title attribute
    "Interactive graph transformation studio: y = a f(b(x − h)) + k": "グラフ変換インタラクティブ・スタジオ：y = a f(b(x − h)) + k",

    // Graph transformations and composite order > widget > figcaption
    "Adjust <span class=\"chem\">a, b, h, k</span> to see how the parent curve <span class=\"chem\">f(x)</span> (dashed) transforms into <span class=\"chem\">g(x) = a f(b(x - h)) + k</span> (solid) and track how the key point <span class=\"chem\">P(x_0, y_0)</span> moves to <span class=\"chem\">P'(x_0/b + h, a y_0 + k)</span>.": "<span class=\"chem\">a, b, h, k</span> を動かして、元の曲線 <span class=\"chem\">f(x)</span>（破線）が <span class=\"chem\">g(x) = a f(b(x - h)) + k</span>（実線）へどう変換され、代表点 <span class=\"chem\">P(x_0, y_0)</span> が <span class=\"chem\">P'(x_0/b + h, a y_0 + k)</span> へどう移動するか確認しましょう。",

    // Graph transformations and composite order > worked example > h3
    "Finding the image of a point and describing composite transformations": "点の像を求め、合成変換の手順を説明する",

    // Graph transformations and composite order > worked example > p
    "The graph of <span class=\"chem\">y = f(x)</span> has a local maximum at <span class=\"chem\">P(-4, 6)</span>. Let <span class=\"chem\">g(x) = -2 f(3x + 6) + 1</span>.<br> (a) Describe a sequence of transformations that maps <span class=\"chem\">y = f(x)</span> onto <span class=\"chem\">y = g(x)</span>. <strong>[4 marks]</strong><br> (b) Find the coordinates of the image of <span class=\"chem\">P</span> on <span class=\"chem\">y = g(x)</span>. <strong>[2 marks]</strong>": "<span class=\"chem\">y = f(x)</span> のグラフが <span class=\"chem\">P(-4, 6)</span> で極大になる。<span class=\"chem\">g(x) = -2 f(3x + 6) + 1</span> とする。<br> (a) <span class=\"chem\">y = f(x)</span> を <span class=\"chem\">y = g(x)</span> に移す変換の順序を述べなさい (Describe)。 <strong>[4 marks]</strong><br> (b) <span class=\"chem\">y = g(x)</span> 上での点 <span class=\"chem\">P</span> の像の座標を求めなさい (Find)。 <strong>[2 marks]</strong>",

    // Graph transformations and composite order > worked example > data-title attribute
    "Factor out 3 inside the argument of f": "f の括弧の中から 3 をくくり出す",

    // Graph transformations and composite order > worked example > p
    "Factoring b = 3 reveals the true horizontal translation h = −2 once the stretch is applied first.": "b = 3 をくくり出すことで、拡大・縮小を先に行った後の正確な平行移動量 h = −2 が見えてきます。",

    // Graph transformations and composite order > worked example > data-title attribute
    "List the horizontal and vertical transformations in valid order": "横方向と縦方向の変換を正しい順序で並べる",

    // Graph transformations and composite order > worked example > p
    "In factored form, stretches/reflections come before translations in each direction.": "くくり出した形では、各方向で拡大・縮小・対称移動を平行移動より先に行います。",

    // Graph transformations and composite order > worked example > maths line
    "1. Horizontal stretch of scale factor <span class=\"frac\"><span>1</span><span>3</span></span> (parallel to the <i>x</i>-axis) &nbsp; <b>[A1]</b>": "1. 横方向に <span class=\"frac\"><span>1</span><span>3</span></span> 倍の拡大・縮小（<i>x</i> 軸に平行） &nbsp; <b>[A1]</b>",

    // Graph transformations and composite order > worked example > maths line
    "2. Translation of 2 units left: vector <span class=\"chem\">(-2, 0)</span> &nbsp; <b>[A1]</b>": "2. 左へ 2 だけ平行移動：ベクトル <span class=\"chem\">(-2, 0)</span> &nbsp; <b>[A1]</b>",

    // Graph transformations and composite order > worked example > maths line
    "3. Vertical stretch of scale factor 2 and reflection in the <i>x</i>-axis, followed by translation 1 unit up: vector <span class=\"chem\">(0, 1)</span> &nbsp; <b>[A1]</b>": "3. 縦方向に 2 倍し <i>x</i> 軸に関して対称移動した後、上へ 1 だけ平行移動：ベクトル <span class=\"chem\">(0, 1)</span> &nbsp; <b>[A1]</b>",

    // Graph transformations and composite order > worked example > data-title attribute
    "Track the coordinates of P(−4, 6) using x_new = x₀/b + h and y_new = a y₀ + k": "x_new = x₀/b + h と y_new = a y₀ + k を使って P(−4, 6) の座標を追跡する",

    // Graph transformations and composite order > worked example > p
    "Check both by applying the steps and by solving 3x_new + 6 = −4.": "手順を順に適用する方法と、3x_new + 6 = −4 を解く方法の両方で確認できます。",

    // Graph transformations and composite order > worked example > maths line
    "<i>y</i><sub>new</sub> = −2(6) + 1 = <b>−11</b> &nbsp; (now a local minimum!) &nbsp; <b>[A1]</b>": "<i>y</i><sub>new</sub> = −2(6) + 1 = <b>−11</b> &nbsp; （極小点になる！） &nbsp; <b>[A1]</b>",

    // Graph transformations and composite order > worked example > p
    "(a) H-stretch <span class=\"chem\">1/3</span>, shift <span class=\"chem\">(-2, 0)</span>, V-stretch <span class=\"chem\">2</span> + <span class=\"chem\">x</span>-axis reflection, shift <span class=\"chem\">(0, 1)</span>; (b) <span class=\"chem\">(-10/3, -11)</span>": "(a) 横方向に <span class=\"chem\">1/3</span> 倍、平行移動 <span class=\"chem\">(-2, 0)</span>、縦方向に <span class=\"chem\">2</span> 倍＋<span class=\"chem\">x</span> 軸対称移動、平行移動 <span class=\"chem\">(0, 1)</span>；(b) <span class=\"chem\">(-10/3, -11)</span>",

    // Graph transformations and composite order > try it > p
    "The point <span class=\"chem\">(6, -4)</span> lies on the graph of <span class=\"chem\">y = f(x)</span>. Find the <span class=\"chem\">y</span>-coordinate of its image on the graph of <span class=\"chem\">y = -3 f(2x - 4) - 1</span>.": "点 <span class=\"chem\">(6, -4)</span> が <span class=\"chem\">y = f(x)</span> のグラフ上にある。<span class=\"chem\">y = -3 f(2x - 4) - 1</span> のグラフ上でのこの点の像の <span class=\"chem\">y</span> 座標を求めなさい (Find)。",

    // Graph transformations and composite order > try it > li
    "Remember that only the outside parameters <span class=\"chem\">a = -3</span> and <span class=\"chem\">k = -1</span> affect the <span class=\"chem\">y</span>-coordinate.": "<span class=\"chem\">y</span> 座標に影響するのは外側のパラメーター <span class=\"chem\">a = -3</span> と <span class=\"chem\">k = -1</span> だけであることに注意しましょう。",

    // Graph transformations and composite order > try it > li
    "Compute <span class=\"chem\">y_{new} = -3(-4) - 1</span>.": "<span class=\"chem\">y_{new} = -3(-4) - 1</span> を計算します。",

    // Graph transformations and composite order > try it > maths line
    "<i>y</i><sub>new</sub> = −3(−4) − 1 = 12 − 1 = <b>11</b> (and <i>x</i><sub>new</sub> = 6/2 + 2 = 5, giving (5, 11)).": "<i>y</i><sub>new</sub> = −3(−4) − 1 = 12 − 1 = <b>11</b> （また <i>x</i><sub>new</sub> = 6/2 + 2 = 5 より (5, 11)）。",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > Additional HL > data-toc attribute
    "Polynomials & Vieta": "多項式と解と係数の関係",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > Additional HL > h2
    "Polynomial theorems, root multiplicity &amp; Vieta's formulas": "多項式の定理・重解の次数と解と係数の関係",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > Additional HL > p
    "When a polynomial <span class=\"chem\">P(x) = a_n x^n + a_{n-1} x^{n-1} + ... + a_1 x + a_0</span> (<span class=\"chem\">a_n != 0</span>) is divided by a linear divisor <span class=\"chem\">(ax - b)</span>, we can write <span class=\"chem\">P(x) = Q(x)(ax - b) + R</span>. Substituting <span class=\"chem\">x = b/a</span> eliminates <span class=\"chem\">Q(x)</span> immediately:": "多項式 <span class=\"chem\">P(x) = a_n x^n + a_{n-1} x^{n-1} + ... + a_1 x + a_0</span>（<span class=\"chem\">a_n != 0</span>）を 1 次式 <span class=\"chem\">(ax - b)</span> で割ると、<span class=\"chem\">P(x) = Q(x)(ax - b) + R</span> と書けます。<span class=\"chem\">x = b/a</span> を代入すると <span class=\"chem\">Q(x)</span> がすぐに消えます：",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > Additional HL > li
    "<strong>Remainder Theorem</strong>: When <span class=\"chem\">P(x)</span> is divided by <span class=\"chem\">(ax - b)</span>, the remainder is <span class=\"chem\">P(b/a)</span>. In particular, dividing by <span class=\"chem\">(x - k)</span> leaves remainder <span class=\"chem\">P(k)</span>.": "<strong>剰余の定理</strong>：<span class=\"chem\">P(x)</span> を <span class=\"chem\">(ax - b)</span> で割った余りは <span class=\"chem\">P(b/a)</span> です。特に <span class=\"chem\">(x - k)</span> で割った余りは <span class=\"chem\">P(k)</span> になります。",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > Additional HL > li
    "<strong>Factor Theorem</strong>: <span class=\"chem\">(ax - b)</span> is a factor of <span class=\"chem\">P(x)</span> if and only if <span class=\"chem\">P(b/a) = 0</span>.": "<strong>因数定理</strong>：<span class=\"chem\">(ax - b)</span> が <span class=\"chem\">P(x)</span> の因数であるのは、<span class=\"chem\">P(b/a) = 0</span> のとき、かつそのときに限ります。",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > Additional HL > li
    "<strong>Root multiplicity &amp; graph behaviour</strong>: At a single root <span class=\"chem\">(x - r)^1</span>, the graph <em>crosses</em> the <span class=\"chem\">x</span>-axis; at a double root <span class=\"chem\">(x - r)^2</span>, it is <em>tangent</em> to the <span class=\"chem\">x</span>-axis (bounces); at a triple root <span class=\"chem\">(x - r)^3</span>, it crosses with a <em>horizontal point of inflexion</em>.": "<strong>解の重複度とグラフの振る舞い</strong>：1 重解 <span class=\"chem\">(x - r)^1</span> ではグラフは <span class=\"chem\">x</span> 軸を<em>横切り</em>ます。2 重解 <span class=\"chem\">(x - r)^2</span> では <span class=\"chem\">x</span> 軸に<em>接し</em>（跳ね返り）ます。3 重解 <span class=\"chem\">(x - r)^3</span> では<em>水平な変曲点</em>を伴って横切ります。",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > formula booklet note > Additional HL > p
    "<strong>In your Formula Booklet (Section 2.12):</strong> For a polynomial equation <span class=\"chem\">sum_{r=0}^n a_r x^r = 0</span> of degree <span class=\"chem\">n</span>, the <strong>sum of roots</strong> is <span class=\"chem\">-a_{n-1} / a_n</span> and the <strong>product of roots</strong> is <span class=\"chem\">(-1)^n a_0 / a_n</span>.": "<strong>公式集に掲載 (Section 2.12)：</strong> <span class=\"chem\">n</span> 次方程式 <span class=\"chem\">sum_{r=0}^n a_r x^r = 0</span> において、<strong>解の和</strong>は <span class=\"chem\">-a_{n-1} / a_n</span>、<strong>解の積</strong>は <span class=\"chem\">(-1)^n a_0 / a_n</span> です。",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > equation > Additional HL > dt
    "Squared sum": "2 乗の和",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > equation > Additional HL > dd
    "<span class=\"chem\">alpha^2 + beta^2 + gamma^2 = (alpha + beta + gamma)^2 - 2(alpha beta + beta gamma + gamma alpha)</span>": "<span class=\"chem\">alpha^2 + beta^2 + gamma^2 = (alpha + beta + gamma)^2 - 2(alpha beta + beta gamma + gamma alpha)</span>",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > equation > Additional HL > dt
    "Reciprocal sum": "逆数の和",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > equation > Additional HL > dd
    "<span class=\"chem\">1/alpha + 1/beta + 1/gamma = (alpha beta + beta gamma + gamma alpha) / (alpha beta gamma)</span>": "<span class=\"chem\">1/alpha + 1/beta + 1/gamma = (alpha beta + beta gamma + gamma alpha) / (alpha beta gamma)</span>",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > common mistake > Additional HL > p
    "<strong>Common mistake — Sign of the product of roots:</strong> The formula has <span class=\"chem\">(-1)^n a_0 / a_n</span>. For an <strong>even</strong> degree (quadratic, quartic), the product is <span class=\"chem\">+a_0 / a_n</span>. For an <strong>odd</strong> degree (cubic), it is <span class=\"chem\">-a_0 / a_n</span>. Always alternate signs <span class=\"chem\">-, +, -, +, ...</span> starting from the <span class=\"chem\">x^{n-1}</span> term—and watch for missing terms with coefficient <span class=\"chem\">0</span>!": "<strong>よくあるミス — 解の積の符号：</strong> 公式には <span class=\"chem\">(-1)^n a_0 / a_n</span> が含まれます。<strong>偶数</strong>次（2 次・4 次）なら解の積は <span class=\"chem\">+a_0 / a_n</span>、<strong>奇数</strong>次（3 次）なら <span class=\"chem\">-a_0 / a_n</span> です。<span class=\"chem\">x^{n-1}</span> の項から始めて必ず <span class=\"chem\">-, +, -, +, ...</span> と符号を交互にし、係数が <span class=\"chem\">0</span> の抜けた項にも注意しましょう！",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > h3
    "Using Vieta's formulas and the Remainder Theorem together": "解と係数の関係と剰余の定理を組み合わせて使う",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > p
    "The cubic equation <span class=\"chem\">2x^3 - 5x^2 + kx - 6 = 0</span> has roots <span class=\"chem\">alpha, beta, gamma</span>.<br> (a) Given that <span class=\"chem\">(x - 2)</span> is a factor of <span class=\"chem\">P(x) = 2x^3 - 5x^2 + kx - 6</span>, find <span class=\"chem\">k</span>. <strong>[2 marks]</strong><br> (b) Hence find the exact value of <span class=\"chem\">alpha^2 + beta^2 + gamma^2</span> without solving for all three roots. <strong>[4 marks]</strong>": "3 次方程式 <span class=\"chem\">2x^3 - 5x^2 + kx - 6 = 0</span> の 3 つの解を <span class=\"chem\">alpha, beta, gamma</span> とする。<br> (a) <span class=\"chem\">(x - 2)</span> が <span class=\"chem\">P(x) = 2x^3 - 5x^2 + kx - 6</span> の因数であるとき、<span class=\"chem\">k</span> を求めなさい (Find)。 <strong>[2 marks]</strong><br> (b) これを用いて (Hence)、3 つの解をすべて求めずに <span class=\"chem\">alpha^2 + beta^2 + gamma^2</span> の厳密値（正確な値）を求めなさい (Find)。 <strong>[4 marks]</strong>",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > data-title attribute
    "Apply the Factor Theorem P(2) = 0 to find k": "因数定理 P(2) = 0 を適用して k を求める",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > p
    "Since (x − 2) is a factor, substituting x = 2 must give 0.": "(x − 2) が因数なので、x = 2 を代入すると 0 になります。",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > data-title attribute
    "Write Vieta's sum and pairwise-product relations for the cubic": "3 次方程式の解と係数の関係（和と 2 つずつの積の和）を書く",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > p
    "Alternate signs (−, +, −) with leading coefficient a₃ = 2.": "最高次係数 a₃ = 2 で割り、符号を交互（−, +, −）にします。",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > data-title attribute
    "Use the symmetric identity for α² + β² + γ²": "α² + β² + γ² の対称式を使う",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > p
    "Expanding (α + β + γ)² isolates α² + β² + γ² plus twice the pairwise products. (With k = 5, P(x) = (x − 2)(2x² − x + 3) and the other two roots are complex conjugates, which is why the total 5/4 is less than 2² = 4.)": "(α + β + γ)² を展開すると α² + β² + γ² と 2 つずつの積の和の 2 倍に分かれます。（k = 5 のとき P(x) = (x − 2)(2x² − x + 3) で、残りの 2 つの解は共役な複素数です。そのため合計 5/4 は 2² = 4 より小さくなります。）",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > p
    "(a) <span class=\"chem\">k = 5</span>; (b) <span class=\"chem\">5/4</span> (or <span class=\"chem\">1.25</span>)": "(a) <span class=\"chem\">k = 5</span>；(b) <span class=\"chem\">5/4</span>（または <span class=\"chem\">1.25</span>）",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > try it > Additional HL > p
    "The polynomial <span class=\"chem\">P(x) = x^3 + ax^2 - 7x + b</span> leaves a remainder of <span class=\"chem\">6</span> when divided by <span class=\"chem\">(x - 1)</span>. Find the value of <span class=\"chem\">a + b</span>.": "多項式 <span class=\"chem\">P(x) = x^3 + ax^2 - 7x + b</span> を <span class=\"chem\">(x - 1)</span> で割った余りが <span class=\"chem\">6</span> である。<span class=\"chem\">a + b</span> の値を求めなさい (Find)。",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > try it > Additional HL > li
    "By the Remainder Theorem, the remainder when <span class=\"chem\">P(x)</span> is divided by <span class=\"chem\">(x - 1)</span> is <span class=\"chem\">P(1)</span>.": "剰余の定理より、<span class=\"chem\">P(x)</span> を <span class=\"chem\">(x - 1)</span> で割った余りは <span class=\"chem\">P(1)</span> です。",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > try it > Additional HL > li
    "Set <span class=\"chem\">P(1) = 1^3 + a(1)^2 - 7(1) + b = 6</span> and solve for <span class=\"chem\">a + b</span>.": "<span class=\"chem\">P(1) = 1^3 + a(1)^2 - 7(1) + b = 6</span> とおいて <span class=\"chem\">a + b</span> を求めます。",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > not needed for IB > Additional HL > p
    "<strong>Not needed for IB:</strong> You do not need formal proofs of the Rational Root Theorem or Descartes' Rule of Signs. On Paper 1, any root needed to start factorising a cubic or quartic is either a small integer (<span class=\"chem\">+-1, +-2, +-3</span>) or guided by the question.": "<strong>IB の範囲外：</strong> 有理根の定理やデカルトの符号法則の厳密な証明は不要です。Paper 1 で 3 次・4 次式を因数分解する最初の手がかりとなる解は、小さな整数（<span class=\"chem\">+-1, +-2, +-3</span>）か問題文で誘導されています。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > Additional HL > data-toc attribute
    "Rational & symmetry": "分数関数と対称性",

    // Higher rational functions, oblique asymptotes &amp; symmetry > Additional HL > h2
    "Higher rational functions, oblique asymptotes &amp; symmetry": "高次分数関数・斜漸近線と対称性",

    // Higher rational functions, oblique asymptotes &amp; symmetry > Additional HL > p
    "Beyond the linear-over-linear hyperbolas of SL 2.8, AHL 2.13 covers two richer rational families:": "SL 2.8 の 1 次式分の 1 次式の双曲線に加え、AHL 2.13 ではさらに 2 種類の分数関数を扱います：",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > caption
    "AHL 2.13 rational function families and asymptotes": "AHL 2.13 の分数関数の種類と漸近線",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > th
    "Family": "関数の型",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > th
    "Vertical asymptotes (VA)": "鉛直漸近線 (VA)",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > th
    "Horizontal / Oblique asymptote": "水平漸近線 / 斜漸近線",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > th
    "<span class=\"chem\">f(x) = (ax + b) / (cx^2 + dx + e)</span>": "<span class=\"chem\">f(x) = (ax + b) / (cx^2 + dx + e)</span>",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > td
    "Solve <span class=\"chem\">cx^2 + dx + e = 0</span> (0, 1, or 2 VAs; check if numerator is also 0 for a hole).": "<span class=\"chem\">cx^2 + dx + e = 0</span> を解く（0, 1, または 2 本の鉛直漸近線；分子も 0 になる場合は白丸の穴に注意）。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > td
    "Denominator has higher degree, so <strong>horizontal asymptote is always <span class=\"chem\">y = 0</span></strong>.": "分母の次数の方が高いため、<strong>水平漸近線は常に <span class=\"chem\">y = 0</span></strong>。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > th
    "<span class=\"chem\">f(x) = (ax^2 + bx + c) / (dx + e)</span>": "<span class=\"chem\">f(x) = (ax^2 + bx + c) / (dx + e)</span>",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > td
    "Set <span class=\"chem\">dx + e = 0 =&gt; x = -e/d</span> (1 VA, unless <span class=\"chem\">(dx + e)</span> divides numerator).": "<span class=\"chem\">dx + e = 0 =&gt; x = -e/d</span>（<span class=\"chem\">(dx + e)</span> が分子を割り切らない限り鉛直漸近線は 1 本）。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > td
    "Numerator degree is 1 higher: divide to get <span class=\"chem\">mx + k + R/(dx + e)</span>. <strong>Oblique asymptote <span class=\"chem\">y = mx + k</span></strong>.": "分子の次数が 1 つ高い：割り算して <span class=\"chem\">mx + k + R/(dx + e)</span> にすると、<strong>斜漸近線は <span class=\"chem\">y = mx + k</span></strong>。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > Additional HL > h3
    "Even, odd, self-inverse &amp; domain restriction (AHL 2.14)": "偶関数・奇関数・自己逆関数と定義域の制限 (AHL 2.14)",

    // Higher rational functions, oblique asymptotes &amp; symmetry > Additional HL > li
    "<strong>Even function</strong>: <span class=\"chem\">f(-x) = f(x)</span> for all <span class=\"chem\">x</span> in the domain (symmetric about the <strong><span class=\"chem\">y</span>-axis</strong>; e.g., <span class=\"chem\">x^2, cos x, |x|</span>).": "<strong>偶関数</strong>：定義域内のすべての <span class=\"chem\">x</span> で <span class=\"chem\">f(-x) = f(x)</span>（<strong><span class=\"chem\">y</span> 軸対称</strong>；例：<span class=\"chem\">x^2, cos x, |x|</span>）。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > Additional HL > li
    "<strong>Odd function</strong>: <span class=\"chem\">f(-x) = -f(x)</span> for all <span class=\"chem\">x</span> in the domain (rotational symmetry of order 2 about the <strong>origin</strong>; e.g., <span class=\"chem\">x^3, sin x, 1/x</span>).": "<strong>奇関数</strong>：定義域内のすべての <span class=\"chem\">x</span> で <span class=\"chem\">f(-x) = -f(x)</span>（<strong>原点対称</strong>（180° 回転対称、order 2）；例：<span class=\"chem\">x^3, sin x, 1/x</span>）。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > Additional HL > li
    "<strong>Self-inverse function</strong>: <span class=\"chem\">f(f(x)) = x</span>, meaning <span class=\"chem\">f^{-1}(x) = f(x)</span> and the graph is symmetric about <span class=\"chem\">y = x</span>.": "<strong>自己逆関数</strong>：<span class=\"chem\">f(f(x)) = x</span>、つまり <span class=\"chem\">f^{-1}(x) = f(x)</span> であり、グラフは <span class=\"chem\">y = x</span> に関して対称です。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > Additional HL > li
    "<strong>Restricting a domain for <span class=\"chem\">f^{-1}</span></strong>: A function has an inverse if and only if it is <strong>one-to-one</strong> (passes the horizontal line test). For a many-to-one curve, cut the domain at its turning point(s) where <span class=\"chem\">f'(x) = 0</span>.": "<strong><span class=\"chem\">f^{-1}</span> のための定義域の制限</strong>：関数が逆関数をもつのは <strong>1 対 1</strong>（水平線テストを通過する）のとき、かつそのときに限ります。多対 1 の曲線では、<span class=\"chem\">f'(x) = 0</span> となる極値（停留点）で定義域を区切ります。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > exam tip (shown in English + translation) > Additional HL > p
    "<strong>Exam tip — Finding the range of <span class=\"chem\">(ax^2 + bx + c)/(dx + e)</span> without calculus:</strong> Set <span class=\"chem\">y = f(x)</span>, clear the denominator to form a quadratic in <span class=\"chem\">x</span>, and require <strong><span class=\"chem\">Delta_x &gt;= 0</span></strong> (since <span class=\"chem\">x ∈ ℝ</span>). Solving the resulting inequality in <span class=\"chem\">y</span> gives the exact range!": "<strong>試験のコツ — 微分を使わずに <span class=\"chem\">(ax^2 + bx + c)/(dx + e)</span> の値域を求める：</strong> <span class=\"chem\">y = f(x)</span> とおき、分母を払って <span class=\"chem\">x</span> の 2 次方程式を作り、<strong><span class=\"chem\">Delta_x &gt;= 0</span></strong>（<span class=\"chem\">x ∈ ℝ</span> より）を課します。得られた <span class=\"chem\">y</span> の不等式を解けば、正確な値域が求まります！",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > h3
    "Finding an oblique asymptote and range of a quadratic-over-linear function": "（2 次式）÷（1 次式）の斜漸近線と値域を求める",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > p
    "Consider <span class=\"chem\">f(x) = (2x^2 - 3x + 5)/(x - 2)</span> for <span class=\"chem\">x != 2</span>.<br> (a) Express <span class=\"chem\">f(x)</span> in the form <span class=\"chem\">mx + k + R/(x - 2)</span> and state the equation of the oblique asymptote. <strong>[3 marks]</strong><br> (b) Use the discriminant method to find the range of <span class=\"chem\">f</span>. <strong>[4 marks]</strong>": "<span class=\"chem\">x != 2</span> に対して <span class=\"chem\">f(x) = (2x^2 - 3x + 5)/(x - 2)</span> を考える。<br> (a) <span class=\"chem\">f(x)</span> を <span class=\"chem\">mx + k + R/(x - 2)</span> の形で表し、斜漸近線の方程式を述べなさい (State)。 <strong>[3 marks]</strong><br> (b) 判別式の方法を用いて <span class=\"chem\">f</span> の値域を求めなさい (Find)。 <strong>[4 marks]</strong>",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > data-title attribute
    "Divide 2x² − 3x + 5 by (x − 2)": "2x² − 3x + 5 を (x − 2) で割る",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > p
    "Synthetic or polynomial long division separates the linear quotient from the decaying remainder.": "組立除法または筆算の割り算で、1 次の商と 0 に近づく余りの項に分けます。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > maths line
    "Oblique asymptote: <b><i>y</i> = 2<i>x</i> + 1</b> &nbsp; (as <i>x</i> → ±∞, 7/(<i>x</i> − 2) → 0) &nbsp; <b>[A1]</b>": "斜漸近線：<b><i>y</i> = 2<i>x</i> + 1</b> &nbsp; （<i>x</i> → ±∞ で 7/(<i>x</i> − 2) → 0） &nbsp; <b>[A1]</b>",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > data-title attribute
    "Rearrange y = f(x) into a quadratic in x": "y = f(x) を x についての 2 次方程式に整理する",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > p
    "A value y lies in the range if and only if there is at least one real x producing it.": "値 y が値域に含まれるのは、その値をとる実数 x が少なくとも 1 つ存在するとき、かつそのときに限ります。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > data-title attribute
    "Set Δ_x ≥ 0 and solve for y": "Δ_x ≥ 0 とおいて y について解く",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > p
    "Real x exists iff the discriminant in x is non-negative.": "実数 x が存在するのは、x についての判別式が 0 以上のときです。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > maths line
    "Roots: <i>y</i> = <span class=\"frac\"><span>10 ± √(100 + 124)</span><span>2</span></span> = 5 ± √56 = 5 ± 2√14": "解：<i>y</i> = <span class=\"frac\"><span>10 ± √(100 + 124)</span><span>2</span></span> = 5 ± √56 = 5 ± 2√14",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > maths line
    "Range: <b><i>y</i> ≤ 5 − 2√14</b> or <b><i>y</i> ≥ 5 + 2√14</b> &nbsp; <b>[A1]</b>": "値域：<b><i>y</i> ≤ 5 − 2√14</b> または <b><i>y</i> ≥ 5 + 2√14</b> &nbsp; <b>[A1]</b>",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > p
    "(a) <span class=\"chem\">y = 2x + 1</span>; (b) <span class=\"chem\">y &lt;= 5 - 2 sqrt(14)</span> or <span class=\"chem\">y &gt;= 5 + 2 sqrt(14)</span>": "(a) <span class=\"chem\">y = 2x + 1</span>；(b) <span class=\"chem\">y &lt;= 5 - 2 sqrt(14)</span> または <span class=\"chem\">y &gt;= 5 + 2 sqrt(14)</span>",

    // Higher rational functions, oblique asymptotes &amp; symmetry > try it > Additional HL > p
    "The rational function <span class=\"chem\">f(x) = (x^2 + 3x - 2)/(x + 4)</span> has an oblique asymptote <span class=\"chem\">y = x + k</span>. Find the exact value of <span class=\"chem\">k</span>.": "分数関数 <span class=\"chem\">f(x) = (x^2 + 3x - 2)/(x + 4)</span> の斜漸近線が <span class=\"chem\">y = x + k</span> である。<span class=\"chem\">k</span> の厳密値（正確な値）を求めなさい (Find)。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > try it > Additional HL > li
    "Divide <span class=\"chem\">x^2 + 3x - 2</span> by <span class=\"chem\">(x + 4)</span>: start with <span class=\"chem\">x(x + 4) = x^2 + 4x</span>.": "<span class=\"chem\">x^2 + 3x - 2</span> を <span class=\"chem\">(x + 4)</span> で割ります：<span class=\"chem\">x(x + 4) = x^2 + 4x</span> から始めます。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > try it > Additional HL > li
    "Subtracting <span class=\"chem\">x^2 + 4x</span> leaves <span class=\"chem\">-x - 2 = -1(x + 4) + 2</span>, so the quotient is <span class=\"chem\">x - 1</span>.": "<span class=\"chem\">x^2 + 4x</span> を引くと <span class=\"chem\">-x - 2 = -1(x + 4) + 2</span> が残るので、商は <span class=\"chem\">x - 1</span> です。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > try it > Additional HL > maths line
    "<i>f</i>(<i>x</i>) = <i>x</i> − 1 + <span class=\"frac\"><span>2</span><span><i>x</i> + 4</span></span> ⇒ oblique asymptote is <i>y</i> = <i>x</i> − 1, so <i>k</i> = <b>−1</b>.": "<i>f</i>(<i>x</i>) = <i>x</i> − 1 + <span class=\"frac\"><span>2</span><span><i>x</i> + 4</span></span> ⇒ 斜漸近線は <i>y</i> = <i>x</i> − 1 なので、<i>k</i> = <b>−1</b>。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > not needed for IB > Additional HL > p
    "<strong>Not needed for IB:</strong> AHL 2.13 only examines <span class=\"chem\">linear / quadratic</span> and <span class=\"chem\">quadratic / linear</span> rational functions. Non-linear (parabolic) asymptotes from <span class=\"chem\">cubic / linear</span> are outside the IB syllabus.": "<strong>IB の範囲外：</strong> AHL 2.13 で出題されるのは <span class=\"chem\">linear / quadratic</span> と <span class=\"chem\">quadratic / linear</span> の分数関数のみです。<span class=\"chem\">cubic / linear</span> から生じる非線形（放物線）漸近線は IB の範囲外です。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > Additional HL > data-toc attribute
    "Modulus & reciprocal": "絶対値と逆数グラフ",

    // Modulus, reciprocal &amp; squared graphs and inequalities > Additional HL > h2
    "Modulus, reciprocal &amp; squared graphs and inequalities": "絶対値・逆数・2 乗のグラフと不等式",

    // Modulus, reciprocal &amp; squared graphs and inequalities > Additional HL > p
    "Given the graph of <span class=\"chem\">y = f(x)</span>, you must be able to sketch the derived graphs below and solve inequalities involving them:": "<span class=\"chem\">y = f(x)</span> のグラフが与えられたとき、次の派生グラフを描き、それらを含む不等式を解けるようになる必要があります：",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > caption
    "Derived graph transformations (AHL 2.16)": "派生グラフの変換 (AHL 2.16)",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > th
    "Transformation": "変換",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > th
    "Rule to sketch from <span class=\"chem\">y = f(x)</span>": "<span class=\"chem\">y = f(x)</span> からの描き方のルール",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > th
    "Key features to label": "記入すべき重要な特徴",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > td
    "Keep <span class=\"chem\">f(x) &gt;= 0</span> unchanged; reflect any part with <span class=\"chem\">f(x) &lt; 0</span> upwards in the <span class=\"chem\">x</span>-axis.": "<span class=\"chem\">f(x) &gt;= 0</span> の部分はそのまま残し、<span class=\"chem\">f(x) &lt; 0</span> の部分を <span class=\"chem\">x</span> 軸に関して上側に折り返します。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > td
    "Sharp corners (cusps) at simple <span class=\"chem\">x</span>-intercepts; no negative <span class=\"chem\">y</span>-values.": "1 重の <span class=\"chem\">x</span> 切片にとがった点（尖点）ができ、負の <span class=\"chem\">y</span> の値はなくなります。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > td
    "Delete the left half (<span class=\"chem\">x &lt; 0</span>); keep the right half (<span class=\"chem\">x &gt;= 0</span>) and add its mirror image in the <span class=\"chem\">y</span>-axis.": "左半分（<span class=\"chem\">x &lt; 0</span>）を消し、右半分（<span class=\"chem\">x &gt;= 0</span>）はそのまま残して、その <span class=\"chem\">y</span> 軸に関する鏡像を書き加えます。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > th
    "<span class=\"chem\">y = f(ax + b)</span>": "<span class=\"chem\">y = f(ax + b)</span>",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table
    "Write <span class=\"chem\">f(a(x + b/a))</span>: horizontal stretch by scale factor <span class=\"chem\">1/|a|</span> (reflecting in the <span class=\"chem\">y</span>-axis if <span class=\"chem\">a &lt; 0</span>), then translate by <span class=\"chem\">-b/a</span> parallel to the <span class=\"chem\">x</span>-axis (see SL 2.11).": "<span class=\"chem\">f(a(x + b/a))</span> と書きます：横方向に倍率 <span class=\"chem\">1/|a|</span> で拡大・縮小し（<span class=\"chem\">a &lt; 0</span> なら <span class=\"chem\">y</span> 軸対称移動）、そのあと <span class=\"chem\">x</span> 軸方向に <span class=\"chem\">-b/a</span> 平行移動します（SL 2.11 参照）。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table
    "A point <span class=\"chem\">(x_0, y_0)</span> maps to <span class=\"chem\">((x_0 - b)/a, y_0)</span>; <span class=\"chem\">y</span>-values and horizontal asymptotes are unchanged.": "点 <span class=\"chem\">(x_0, y_0)</span> は <span class=\"chem\">((x_0 - b)/a, y_0)</span> に移ります。<span class=\"chem\">y</span> の値と水平漸近線は変わりません。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > td
    "Always an <strong>even</strong> graph; cusp at <span class=\"chem\">(0, f(0))</span> unless <span class=\"chem\">f'(0) = 0</span>.": "常に<strong>偶関数</strong>のグラフになり、<span class=\"chem\">f'(0) = 0</span> でない限り <span class=\"chem\">(0, f(0))</span> に尖点ができます。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > td
    "Invert <span class=\"chem\">y</span>-values: roots become VAs; VAs become <span class=\"chem\">x</span>-intercepts; <span class=\"chem\">y -&gt; +-infty</span> becomes <span class=\"chem\">y -&gt; 0</span>.": "<span class=\"chem\">y</span> の値の逆数をとります：解は鉛直漸近線になり、鉛直漸近線は <span class=\"chem\">x</span> 切片になり、<span class=\"chem\">y -&gt; +-infty</span> は <span class=\"chem\">y -&gt; 0</span> になります。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > td
    "Invariant points at <span class=\"chem\">y = +-1</span>; local max <span class=\"chem\">(a, M)</span> becomes local min <span class=\"chem\">(a, 1/M)</span>.": "<span class=\"chem\">y = +-1</span> の点は動かず（不変点）、極大点 <span class=\"chem\">(a, M)</span> は極小点 <span class=\"chem\">(a, 1/M)</span> になります。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > td
    "Square all <span class=\"chem\">y</span>-values: non-negative everywhere; values in <span class=\"chem\">(0, 1)</span> shrink, <span class=\"chem\">|y| &gt; 1</span> grow.": "すべての <span class=\"chem\">y</span> の値を 2 乗します：どこでも 0 以上になり、<span class=\"chem\">(0, 1)</span> の値は小さくなり、<span class=\"chem\">|y| &gt; 1</span> の値は大きくなります。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > td
    "Invariant points at <span class=\"chem\">y = 0</span> and <span class=\"chem\">y = 1</span>; simple roots become smooth tangent minima.": "<span class=\"chem\">y = 0</span> と <span class=\"chem\">y = 1</span> の点が不変点で、1 重解は滑らかに接する極小点になります。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > widget > Additional HL > data-title attribute
    "Interactive AHL graph mapper: |f(x)|, f(|x|), and 1/f(x)": "AHL グラフ変換マッパー：|f(x)|, f(|x|), 1/f(x)",

    // Modulus, reciprocal &amp; squared graphs and inequalities > widget > Additional HL > figcaption
    "Choose a parent function <span class=\"chem\">f(x)</span> (dashed) and switch between <span class=\"chem\">|f(x)|</span>, <span class=\"chem\">f(|x|)</span>, and <span class=\"chem\">1/f(x)</span> to inspect cusps, <span class=\"chem\">y</span>-axis symmetry, invariant points <span class=\"chem\">y = +-1</span>, and roots turning into vertical asymptotes.": "元の関数 <span class=\"chem\">f(x)</span>（破線）を選び、<span class=\"chem\">|f(x)|</span>、<span class=\"chem\">f(|x|)</span>、<span class=\"chem\">1/f(x)</span> を切り替えて、尖点、<span class=\"chem\">y</span> 軸対称性、不変点 <span class=\"chem\">y = +-1</span>、解が鉛直漸近線に変わる様子を観察しましょう。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > common mistake > Additional HL > p
    "<strong>Common mistake — Cross-multiplying rational inequalities:</strong> Never multiply <span class=\"chem\">(2x - 1)/(x + 3) &gt;= 1</span> by <span class=\"chem\">(x + 3)</span> because <span class=\"chem\">x + 3</span> can be negative (which flips the inequality) or zero! Always move everything to one side (<span class=\"chem\">LHS - RHS &gt;= 0</span>), combine into a single fraction, and use a sign diagram—or multiply by <span class=\"chem\">(x + 3)^2 &gt; 0</span>.": "<strong>よくあるミス — 分数不等式で分母をそのまま掛けてしまう：</strong> <span class=\"chem\">x + 3</span> は負（不等号の向きが逆転する）にも 0 にもなり得るため、<span class=\"chem\">(2x - 1)/(x + 3) &gt;= 1</span> の両辺に <span class=\"chem\">(x + 3)</span> を掛けてはいけません！必ずすべてを左辺に移項し（<span class=\"chem\">LHS - RHS &gt;= 0</span>）、1 つの分数にまとめて符号表を使うか、あるいは <span class=\"chem\">(x + 3)^2 &gt; 0</span> を掛けましょう。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > h3
    "Solving a rational inequality and a modulus inequality": "分数不等式と絶対値不等式を解く",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > p
    "Solve the following inequalities analytically:<br> (a) <span class=\"chem\">(2x - 1)/(x + 3) &gt;= 1</span> <strong>[3 marks]</strong><br> (b) <span class=\"chem\">|2x - 3| &lt; |x + 1|</span> <strong>[4 marks]</strong>": "次の不等式を代数的に解きなさい：<br> (a) <span class=\"chem\">(2x - 1)/(x + 3) &gt;= 1</span> <strong>[3 marks]</strong><br> (b) <span class=\"chem\">|2x - 3| &lt; |x + 1|</span> <strong>[4 marks]</strong>",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > data-title attribute
    "Part (a): Subtract 1 to get a single fraction ≥ 0": "(a)：1 を引いて 1 つの分数 ≥ 0 にまとめる",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > p
    "Keeping everything in one fraction preserves the sign of the denominator (x + 3).": "1 つの分数にまとめることで、分母 (x + 3) の符号の情報が保たれます。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > maths line
    "Critical values: <i>x</i> = −3 (excluded, VA) and <i>x</i> = 4 (included). Sign diagram (+, −, +) gives <b><i>x</i> &lt; −3 or <i>x</i> ≥ 4</b> &nbsp; <b>[A1]</b>": "境界値：<i>x</i> = −3（除外、VA）と <i>x</i> = 4（含む）。符号表 (+, −, +) より <b><i>x</i> &lt; −3 または <i>x</i> ≥ 4</b> &nbsp; <b>[A1]</b>",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > data-title attribute
    "Part (b): Square both sides of |2x − 3| < |x + 1|": "(b)：|2x − 3| < |x + 1| の両辺を 2 乗する",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > p
    "Both sides are non-negative, so squaring preserves the inequality and removes both absolute value bars.": "両辺が 0 以上なので、2 乗しても不等号の向きは変わらず、絶対値記号が両方外れます。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > maths line
    "Upward parabola is &lt; 0 between the roots: <b><span class=\"frac\"><span>2</span><span>3</span></span> &lt; <i>x</i> &lt; 4</b> &nbsp; <b>[A1]</b>": "下に凸の放物線が &lt; 0 になるのは解の間：<b><span class=\"frac\"><span>2</span><span>3</span></span> &lt; <i>x</i> &lt; 4</b> &nbsp; <b>[A1]</b>",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > p
    "(a) <span class=\"chem\">x &lt; -3</span> or <span class=\"chem\">x &gt;= 4</span>; (b) <span class=\"chem\">2/3 &lt; x &lt; 4</span>": "(a) <span class=\"chem\">x &lt; -3</span> または <span class=\"chem\">x &gt;= 4</span>；(b) <span class=\"chem\">2/3 &lt; x &lt; 4</span>",

    // Modulus, reciprocal &amp; squared graphs and inequalities > try it > Additional HL > p
    "The graph of <span class=\"chem\">y = f(x)</span> has a local minimum at <span class=\"chem\">(3, 0.1)</span>. Find the <span class=\"chem\">y</span>-coordinate of the corresponding local maximum on the graph of <span class=\"chem\">y = 1/f(x)</span>.": "<span class=\"chem\">y = f(x)</span> のグラフが <span class=\"chem\">(3, 0.1)</span> で極小になる。<span class=\"chem\">y = 1/f(x)</span> のグラフ上で対応する極大点の <span class=\"chem\">y</span> 座標を求めなさい (Find)。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > try it > Additional HL > li
    "For <span class=\"chem\">y = 1/f(x)</span>, a positive local minimum at <span class=\"chem\">(a, m)</span> becomes a local maximum at <span class=\"chem\">(a, 1/m)</span>.": "<span class=\"chem\">y = 1/f(x)</span> では、正の極小点 <span class=\"chem\">(a, m)</span> が極大点 <span class=\"chem\">(a, 1/m)</span> に変わります。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > try it > Additional HL > li
    "Compute <span class=\"chem\">1 / 0.1</span>.": "<span class=\"chem\">1 / 0.1</span> を計算します。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > try it > Additional HL > maths line
    "<i>y</i><sub>max</sub> = <span class=\"frac\"><span>1</span><span>0.1</span></span> = <b>10</b> at <i>x</i> = 3.": "<i>x</i> = 3 で <i>y</i><sub>max</sub> = <span class=\"frac\"><span>1</span><span>0.1</span></span> = <b>10</b>。",

    // Quick practice > data-toc attribute
    "Practice": "演習問題",

    // Quick practice > h2
    "Quick practice": "確認問題",

    // Quick practice > h3
    "Foundation: transformations, factor theorem and graph features": "基礎：グラフの変換・因数定理・グラフの特徴",

    // Quick practice > data-title attribute
    "2.3 foundation": "2.3 基礎",

    // Quick practice > h3
    "Exam standard: Paper 1 and Paper 2": "試験標準：Paper 1 と Paper 2",

    // Quick practice > data-title attribute
    "2.3 exam standard": "2.3 試験標準",

    // Quick practice > h3
    "Challenge: decoding unfamiliar questions and Paper 3 investigations": "発展：見慣れない問題の読み解きと Paper 3 探究問題",

    // Quick practice > data-title attribute
    "2.3 challenge": "2.3 発展",

    // widget string (assets/js/widgets-t2-3.js)
    "Quadratic: f(x) = x² − 2x": "2 次関数：f(x) = x² − 2x",

    // widget string (assets/js/widgets-t2-3.js)
    "Cubic: f(x) = 0.5(x³ − 3x)": "3 次関数：f(x) = 0.5(x³ − 3x)",

    // widget string (assets/js/widgets-t2-3.js)
    "Exponential: f(x) = 2ˣ": "指数関数：f(x) = 2ˣ",

    // widget string (assets/js/widgets-t2-3.js)
    "Parent function f(x)": "元の関数 f(x)",

    // widget string (assets/js/widgets-t2-3.js)
    "Vertical scale a": "縦方向の倍率 a",

    // widget string (assets/js/widgets-t2-3.js)
    "Horizontal factor b": "横方向の倍率 b",

    // widget string (assets/js/widgets-t2-3.js)
    "Horizontal shift h": "横方向の平行移動 h",

    // widget string (assets/js/widgets-t2-3.js)
    "Vertical shift k": "縦方向の平行移動 k",

    // widget string (assets/js/widgets-t2-3.js)
    "Reset": "リセット",

    // widget string (assets/js/widgets-t2-3.js)
    "Transformed equation": "変換後の方程式",

    // widget string (assets/js/widgets-t2-3.js)
    "Tracked point P ↦ P'": "追跡点 P ↦ P'",

    // widget string (assets/js/widgets-t2-3.js)
    "Transformation sequence": "変換の手順",

    // widget string (assets/js/widgets-t2-3.js)
    "reflect in y-axis": "y 軸対称移動",

    // widget string (assets/js/widgets-t2-3.js)
    "H-stretch by": "横方向に拡大・縮小：",

    // widget string (assets/js/widgets-t2-3.js)
    "shift H by": "横方向に平行移動：",

    // widget string (assets/js/widgets-t2-3.js)
    "reflect in x-axis": "x 軸対称移動",

    // widget string (assets/js/widgets-t2-3.js)
    "V-stretch by": "縦方向に拡大・縮小：",

    // widget string (assets/js/widgets-t2-3.js)
    "shift V by": "縦方向に平行移動：",

    // widget string (assets/js/widgets-t2-3.js)
    "Identity (no transformation)": "恒等変換（変換なし）",

    // widget string (assets/js/widgets-t2-3.js)
    "Parent curve f(x) and transformed curve g(x) = a f(b(x − h)) + k": "元の曲線 f(x) と変換後の曲線 g(x) = a f(b(x − h)) + k",

    // widget string (assets/js/widgets-t2-3.js)
    "Quadratic: f(x) = x² − 2x − 3": "2 次関数：f(x) = x² − 2x − 3",

    // widget string (assets/js/widgets-t2-3.js)
    "Linear: f(x) = x − 1": "1 次関数：f(x) = x − 1",

    // widget string (assets/js/widgets-t2-3.js)
    "Cubic: f(x) = 0.4(x + 2)(x − 1)(x − 3)": "3 次関数：f(x) = 0.4(x + 2)(x − 1)(x − 3)",

    // widget string (assets/js/widgets-t2-3.js)
    "AHL transformation": "AHL の変換",

    // widget string (assets/js/widgets-t2-3.js)
    "y = |f(x)| (reflect y < 0 up)": "y = |f(x)|（y < 0 を上へ折り返し）",

    // widget string (assets/js/widgets-t2-3.js)
    "y = f(|x|) (even mirror of x ≥ 0)": "y = f(|x|)（x ≥ 0 を左右対称コピー）",

    // widget string (assets/js/widgets-t2-3.js)
    "y = 1 / f(x) (reciprocal)": "y = 1 / f(x)（逆数）",

    // widget string (assets/js/widgets-t2-3.js)
    "Mapping rule": "変換ルール",

    // widget string (assets/js/widgets-t2-3.js)
    "Key features": "主な特徴",

    // widget string (assets/js/widgets-t2-3.js)
    "Keep f(x) ≥ 0; reflect f(x) < 0 across the x-axis.": "f(x) ≥ 0 を残し、f(x) < 0 を x 軸で折り返す。",

    // widget string (assets/js/widgets-t2-3.js)
    "Sharp cusps at x-intercepts: x =": "x 切片に尖点：x =",

    // widget string (assets/js/widgets-t2-3.js)
    "Cusp (": "尖点 (",

    // widget string (assets/js/widgets-t2-3.js)
    "Discard x < 0; reflect x ≥ 0 across the y-axis (even).": "x < 0 を消し、x ≥ 0 を y 軸で折り返す（偶関数）。",

    // widget string (assets/js/widgets-t2-3.js)
    "Symmetric about x = 0; y-intercept at (0,": "x = 0 に関して対称；y 切片 (0,",

    // widget string (assets/js/widgets-t2-3.js)
    "Roots of f(x) become VAs; y = ±1 stay invariant; f(x) → ±∞ becomes y → 0.": "f(x) の解が鉛直漸近線になり、y = ±1 は不変、f(x) → ±∞ は y → 0 になる。",

    // widget string (assets/js/widgets-t2-3.js)
    "VAs at x =": "鉛直漸近線 x =",

    // widget string (assets/js/widgets-t2-3.js)
    "; HA: y = 0": "；水平漸近線 y = 0",

    // widget string (assets/js/widgets-t2-3.js)
    "Parent f(x) and AHL transformed curve": "元の曲線 f(x) と AHL 変換後の曲線",

  }
});
