/* t5-3 — ja translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't5-3', {
  strings: {

    // page title (browser tab)
    "5.3 First principles, L’Hôpital, implicit, parts and volumes | Analysis Lab": "5.3 微分の定義・ロピタルの定理・陰関数・部分積分と回転体の体積 | Analysis Lab",

    // First principles, L’Hôpital, implicit, parts and volumes > page header > p
    "Topic 5.3 · AHL 5.12–5.17": "Topic 5.3 · AHL 5.12–5.17",

    // First principles, L’Hôpital, implicit, parts and volumes > page header > h1
    "First principles, L’Hôpital, implicit, parts and volumes": "微分の定義・ロピタルの定理・陰関数の微分・部分積分と回転体の体積",

    // First principles, L’Hôpital, implicit, parts and volumes > page header > span
    "How do local linear approximations unlock indeterminate limits, implicit curves, and the exact volume of three-dimensional solids of revolution?": "局所的な線形近似は、不定形の極限や陰関数曲線、そして 3 次元の回転体の正確な体積をどのように解き明かすのでしょうか？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "チェックリスト",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > checklist > Additional HL > span
    "Understand continuity and differentiability, and find derivatives from first principles <span class=\"chem\">f'(x) = lim_{h-&gt;0} (f(x + h) - f(x))/h</span> and higher derivatives <span class=\"chem\">f^{(n)}(x)</span>.": "連続性と微分可能性を理解し、定義に従った微分 <span class=\"chem\">f'(x) = lim_{h-&gt;0} (f(x + h) - f(x))/h</span> や高次導関数 <span class=\"chem\">f^{(n)}(x)</span> を求められる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Evaluate indeterminate limits of the form <span class=\"chem\">0/0</span> or <span class=\"chem\">infty/infty</span> using L’Hôpital’s rule, including repeated applications and algebraic rearrangement.": "ロピタルの定理を用いて <span class=\"chem\">0/0</span> や <span class=\"chem\">infty/infty</span> の不定形の極限を（複数回の適用や式変形を含めて）計算できる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Differentiate implicit relations <span class=\"chem\">F(x, y) = 0</span> to find gradients, tangents, horizontal (<span class=\"chem\">dy/dx = 0</span>) and vertical (<span class=\"chem\">dx/dy = 0</span>) tangents, and solve related rates problems <span class=\"chem\">dy/dt = (dy/dx)(dx/dt)</span>.": "陰関数 <span class=\"chem\">F(x, y) = 0</span> を微分して傾き・接線・水平な接線（<span class=\"chem\">dy/dx = 0</span>）・垂直な接線（<span class=\"chem\">dx/dy = 0</span>）を求め、関連変化率の問題 <span class=\"chem\">dy/dt = (dy/dx)(dx/dt)</span> を解ける。",

    // What you need to be able to do > checklist > Additional HL > span
    "Differentiate <span class=\"chem\">tan x, sec x, cosec x, cot x</span>, general exponential/log functions (<span class=\"chem\">a^x, log_a x</span>) and inverse trig functions (<span class=\"chem\">arcsin x, arccos x, arctan x</span>), and integrate their derivatives (e.g. <span class=\"chem\">int sec^2 x dx</span>, <span class=\"chem\">int sec x tan x dx</span>, <span class=\"chem\">int a^x dx</span>, <span class=\"chem\">int 1/(1 + x^2) dx</span>); use partial fractions (two distinct linear factors) to rearrange an integrand.": "<span class=\"chem\">tan x, sec x, cosec x, cot x</span>、一般の指数・対数関数（<span class=\"chem\">a^x, log_a x</span>）、逆三角関数（<span class=\"chem\">arcsin x, arccos x, arctan x</span>）を微分でき、それらの導関数を積分できる（例：<span class=\"chem\">int sec^2 x dx</span>、<span class=\"chem\">int sec x tan x dx</span>、<span class=\"chem\">int a^x dx</span>、<span class=\"chem\">int 1/(1 + x^2) dx</span>）。部分分数分解（異なる 2 つの 1 次因数）を用いて被積分関数を変形できる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Integrate using formal substitution <span class=\"chem\">u = g(x)</span> (changing definite limits), integration by parts <span class=\"chem\">int u dv = uv - int v du</span> (including repeated and cyclic parts), and double-angle identities.": "置換積分法 <span class=\"chem\">u = g(x)</span>（積分区間の変換を含む）、部分積分法 <span class=\"chem\">int u dv = uv - int v du</span>（反復・循環型を含む）、2 倍角の公式を用いて積分できる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Calculate areas bounded by the <i>y</i>-axis <span class=\"chem\">int_c^d |x| dy</span> and volumes of revolution about the <i>x</i>-axis <span class=\"chem\">pi int_a^b y^2 dx</span> or <i>y</i>-axis <span class=\"chem\">pi int_c^d x^2 dy</span>, including hollow washers between two curves.": "<i>y</i> 軸で囲まれた面積 <span class=\"chem\">int_c^d |x| dy</span> や、<i>x</i> 軸の周りの回転体の体積 <span class=\"chem\">pi int_a^b y^2 dx</span>・<i>y</i> 軸の周りの回転体の体積 <span class=\"chem\">pi int_c^d x^2 dy</span>（2 曲線間の空洞のある回転体を含む）を計算できる。",

    // Question decoder: Master integration &amp; advanced differen > data-toc attribute
    "Question decoder": "問題デコーダー",

    // Question decoder: Master integration &amp; advanced differen > h2
    "Question decoder: Master integration &amp; advanced differentiation classifier": "問題デコーダー：積分法・発展微分法の分類ガイド",

    // Question decoder: Master integration &amp; advanced differen > p
    "In HL calculus exams, no question tells you <em>which</em> integration or differentiation rule to apply. Use the two decision tables below to spot the exact method within five seconds.": "HL の微積分の試験では、<em>どの</em>積分法や微分法を使うかは問題文に書かれていません。下の 2 つの判定表を使って、5 秒以内に正確な解法を見抜きましょう。",

    // Question decoder: Master integration &amp; advanced differen > table > caption
    "Master integration classifier — how to spot which integration technique to use": "積分法マスター分類表 — どの積分テクニックを使うかを見抜く",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "Integrand pattern you see": "被積分関数のパターン",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "Technique &amp; Formula Booklet link": "解法と公式集（Formula booklet）の対応",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "Key setup &amp; Paper 1 vs Paper 2 strategy": "立式のポイントと Paper 1 vs Paper 2 戦略",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "1. Standard AHL booklet forms:<br><span class=\"chem\">1/(x^2 + a^2)</span>, <span class=\"chem\">1/sqrt(a^2 - x^2)</span>; also <span class=\"chem\">tan x = sin x / cos x</span> (not in the booklet: log inspection)": "1. AHL 公式集の基本形：<br><span class=\"chem\">1/(x^2 + a^2)</span>、<span class=\"chem\">1/sqrt(a^2 - x^2)</span>。また <span class=\"chem\">tan x = sin x / cos x</span>（公式集にはない：対数形として見抜く）",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "<strong>Direct Booklet / Log inspection</strong> (AHL 5.15)<br><span class=\"chem\">int 1/(a^2 + x^2) dx = (1/a) arctan(x/a) + C</span><br><span class=\"chem\">int 1/sqrt(a^2 - x^2) dx = arcsin(x/a) + C</span><br><span class=\"chem\">int tan x dx = -ln|cos x| + C = ln|sec x| + C</span>": "<strong>公式集の直接適用・対数形</strong> (AHL 5.15)<br><span class=\"chem\">int 1/(a^2 + x^2) dx = (1/a) arctan(x/a) + C</span><br><span class=\"chem\">int 1/sqrt(a^2 - x^2) dx = arcsin(x/a) + C</span><br><span class=\"chem\">int tan x dx = -ln|cos x| + C = ln|sec x| + C</span>",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "If the denominator is a quadratic <span class=\"chem\">x^2 + bx + c</span> with <strong>no <i>x</i> on top</strong> and negative discriminant, <strong>complete the square</strong> into <span class=\"chem\">(x + h)^2 + a^2</span> and apply the <span class=\"chem\">arctan</span> formula. Notice <span class=\"chem\">arcsin(x/a)</span> has <strong>no</strong> <span class=\"chem\">1/a</span> in front!": "分母が 2 次式 <span class=\"chem\">x^2 + bx + c</span> で<strong>分子に <i>x</i> がなく</strong>判別式が負のときは、<strong>平方完成</strong>して <span class=\"chem\">(x + h)^2 + a^2</span> の形にし、<span class=\"chem\">arctan</span> の公式を適用します。<span class=\"chem\">arcsin(x/a)</span> の前には <span class=\"chem\">1/a</span> が<strong>ない</strong>点に注意！",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "2. Composite function times inner derivative:<br><span class=\"chem\">int f(g(x)) g'(x) dx</span> or <span class=\"chem\">int g'(x)/g(x) dx</span>": "2. 合成関数 × 内側の導関数：<br><span class=\"chem\">int f(g(x)) g'(x) dx</span> または <span class=\"chem\">int g'(x)/g(x) dx</span>",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "<strong>Formal substitution <span class=\"chem\">u = g(x)</span></strong> (AHL 5.16)<br>Replace <span class=\"chem\">g'(x) dx = du</span>.<br>Special case: <span class=\"chem\">int g'(x)/g(x) dx = ln|g(x)| + C</span>.": "<strong>置換積分法 <span class=\"chem\">u = g(x)</span></strong> (AHL 5.16)<br><span class=\"chem\">g'(x) dx = du</span> に置き換えます。<br>特別な場合：<span class=\"chem\">int g'(x)/g(x) dx = ln|g(x)| + C</span>。",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "<strong>Paper 1 definite integrals</strong>: Always transform the limits <span class=\"chem\">x = a -&gt; u = g(a)</span> and <span class=\"chem\">x = b -&gt; u = g(b)</span> immediately so you never have to substitute back to <i>x</i>.": "<strong>Paper 1 の定積分</strong>：必ずすぐに積分区間を <span class=\"chem\">x = a -&gt; u = g(a)</span>、<span class=\"chem\">x = b -&gt; u = g(b)</span> に変換し、<i>x</i> に戻さずに計算できるようにしましょう。",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "3. Rational fraction with factorable quadratic denominator:<br><span class=\"chem\">int (px + q)/((x - a)(x - b)) dx</span>": "3. 分母が因数分解できる分数関数：<br><span class=\"chem\">int (px + q)/((x - a)(x - b)) dx</span>",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "<strong>Partial fractions</strong> (AHL 1.11 + 5.15)<br>Split into <span class=\"chem\">int (A/(x - a) + B/(x - b)) dx</span><br><span class=\"chem\">= A ln|x - a| + B ln|x - b| + C</span>.": "<strong>部分分数分解</strong> (AHL 1.11 + 5.15)<br><span class=\"chem\">int (A/(x - a) + B/(x - b)) dx</span> に分解し<br><span class=\"chem\">= A ln|x - a| + B ln|x - b| + C</span>。",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "If the degree of the numerator is ≥ the denominator (e.g. <span class=\"chem\">x^2/(x^2 - 1)</span>), perform <strong>polynomial long division</strong> (or algebraic splitting) first! (Improper fractions are beyond the AA guide, which uses proper fractions only; an exam would guide you through this step.)": "分子の次数が分母の次数以上のとき（例：<span class=\"chem\">x^2/(x^2 - 1)</span>）は、最初に<strong>多項式の筆算（割り算）</strong>または式変形を行いましょう！（仮分数は AA ガイドの範囲外で、ガイドは真分数のみを扱います。試験ではこの手順が誘導されます。）",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "4. Product of two different families (<span class=\"chem\">x^n e^x</span>, <span class=\"chem\">x^n sin x</span>, <span class=\"chem\">x^n ln x</span>) or lone <span class=\"chem\">ln x</span>, <span class=\"chem\">arcsin x</span>, <span class=\"chem\">arctan x</span>": "4. 異なる種類の関数の積（<span class=\"chem\">x^n e^x</span>, <span class=\"chem\">x^n sin x</span>, <span class=\"chem\">x^n ln x</span>）または単独の <span class=\"chem\">ln x</span>, <span class=\"chem\">arcsin x</span>, <span class=\"chem\">arctan x</span>",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "<strong>Integration by parts</strong> (AHL 5.16)<br><span class=\"chem\">int u (dv/dx) dx = uv - int v (du/dx) dx</span><br>Choose <i>u</i> using <strong>LIATE</strong> priority: <b>L</b>og, <b>I</b>nverse trig, <b>A</b>lgebraic (<span class=\"chem\">x^n</span>), <b>T</b>rig, <b>E</b>xponential.": "<strong>部分積分法</strong> (AHL 5.16)<br><span class=\"chem\">int u (dv/dx) dx = uv - int v (du/dx) dx</span><br><strong>LIATE</strong> の優先順位で <i>u</i> を選びます：<b>L</b>対数、<b>I</b>逆三角、<b>A</b>整式（<span class=\"chem\">x^n</span>）、<b>T</b>三角、<b>E</b>指数。",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "For lone <span class=\"chem\">int ln x dx</span> or <span class=\"chem\">int arctan x dx</span>, choose <span class=\"chem\">u = ln x</span> (or <span class=\"chem\">arctan x</span>) and <span class=\"chem\">dv/dx = 1</span> (so <span class=\"chem\">v = x</span>).<br>For cyclic <span class=\"chem\">I = int e^{ax} sin(bx) dx</span>, integrate by parts <strong>twice</strong> with the same family choice and solve the linear equation for <i>I</i>.": "単独の <span class=\"chem\">int ln x dx</span> や <span class=\"chem\">int arctan x dx</span> では、<span class=\"chem\">u = ln x</span>（または <span class=\"chem\">arctan x</span>）、<span class=\"chem\">dv/dx = 1</span>（よって <span class=\"chem\">v = x</span>）とおきます。<br>循環型 <span class=\"chem\">I = int e^{ax} sin(bx) dx</span> では、同じ種類の選び方で<strong>2 回</strong>部分積分を行い、<i>I</i> についての 1 次方程式を解きます。",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "5. Even power of sine or cosine:<br><span class=\"chem\">int sin^2(kx) dx</span> or <span class=\"chem\">int cos^2(kx) dx</span>": "5. 正弦・余弦の偶数乗：<br><span class=\"chem\">int sin^2(kx) dx</span> または <span class=\"chem\">int cos^2(kx) dx</span>",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "<strong>Double-angle identity</strong> (SL 3.6 + AHL 5.16)<br><span class=\"chem\">cos^2 x = (1 + cos 2x)/2</span><br><span class=\"chem\">sin^2 x = (1 - cos 2x)/2</span>": "<strong>2 倍角の公式（半角の公式）</strong> (SL 3.6 + AHL 5.16)<br><span class=\"chem\">cos^2 x = (1 + cos 2x)/2</span><br><span class=\"chem\">sin^2 x = (1 - cos 2x)/2</span>",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "Essential on Paper 1 whenever finding the volume of revolution <span class=\"chem\">pi int y^2 dx</span> of <span class=\"chem\">y = sin x</span> or <span class=\"chem\">y = cos x</span>!": "<span class=\"chem\">y = sin x</span> や <span class=\"chem\">y = cos x</span> の回転体の体積 <span class=\"chem\">pi int y^2 dx</span> を求めるとき、Paper 1 で必須です！",

    // Question decoder: Master integration &amp; advanced differen > table > caption
    "Advanced differentiation &amp; limits decoder": "発展微分法と極限デコーダー",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "What the exam question says": "試験問題に書かれている表現",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "What it means (formula &amp; setup)": "数学的な意味（公式と立式）",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "Crucial markscheme checkpoint": "採点基準の重要チェックポイント",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "“Differentiate <span class=\"chem\">f(x)</span> from first principles”": "「<span class=\"chem\">f(x)</span> を定義に従って微分せよ」",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "Write <span class=\"chem\">f'(x) = lim_{h-&gt;0} (f(x + h) - f(x))/h</span>, expand, cancel every term without <i>h</i>, divide by <i>h</i>, then evaluate as <span class=\"chem\">h -&gt; 0</span>.": "<span class=\"chem\">f'(x) = lim_{h-&gt;0} (f(x + h) - f(x))/h</span> と書き、展開して <i>h</i> を含まない項をすべて消し、<i>h</i> で割ってから <span class=\"chem\">h -&gt; 0</span> の極限を求めます。",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "Keep writing <span class=\"chem\">lim_{h-&gt;0}</span> on <strong>every line</strong> until you actually substitute <span class=\"chem\">h = 0</span>. Dropping the limit notation early loses the final reasoning mark.": "実際に <span class=\"chem\">h = 0</span> を代入するまで、<strong>すべての行に</strong> <span class=\"chem\">lim_{h-&gt;0}</span> を書き続けましょう。途中で極限記号を落とすと最後の論証点を失います。",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "“Find <span class=\"chem\">lim_{x-&gt;a} f(x)/g(x)</span>”": "「<span class=\"chem\">lim_{x-&gt;a} f(x)/g(x)</span> を求めよ」",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "First substitute <span class=\"chem\">x = a</span>. Only if you get the indeterminate form <span class=\"chem\">0/0</span> or <span class=\"chem\">infty/infty</span>, apply <strong>L’Hôpital’s rule</strong>: <span class=\"chem\">lim_{x-&gt;a} f'(x)/g'(x)</span>.": "まず <span class=\"chem\">x = a</span> を代入します。<span class=\"chem\">0/0</span> または <span class=\"chem\">infty/infty</span> の不定形になった場合のみ、<strong>ロピタルの定理</strong> <span class=\"chem\">lim_{x-&gt;a} f'(x)/g'(x)</span> を適用します。",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "Explicitly state <em>“Indeterminate form 0/0, apply L’Hôpital’s rule”</em>. Differentiate numerator and denominator <strong>separately</strong>—do NOT use the quotient rule!": "<em>「0/0 の不定形であるためロピタルの定理を適用する」</em>と明記しましょう。分子と分母を<strong>別々に</strong>微分します——商の微分法を使ってはいけません！",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "Equation with <i>x</i> and <i>y</i> mixed, e.g. <span class=\"chem\">x^2 + xy + y^3 = 7</span>": "<i>x</i> と <i>y</i> が混ざった方程式（例：<span class=\"chem\">x^2 + xy + y^3 = 7</span>）",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "<strong>Implicit differentiation</strong>: differentiate every term with respect to <i>x</i>. Multiply every <i>y</i>-derivative by <span class=\"chem\">dy/dx</span> (chain rule), and use the product rule on <span class=\"chem\">xy</span>.": "<strong>陰関数の微分法</strong>：すべての項を <i>x</i> で微分します。<i>y</i> を微分するたびに <span class=\"chem\">dy/dx</span> を掛け（合成関数の微分法）、<span class=\"chem\">xy</span> には積の微分法を使います。",

    // Question decoder: Master integration &amp; advanced differen > table > li
    "Horizontal tangent (stationary point): set numerator of <span class=\"chem\">dy/dx</span> to <span class=\"chem\">0</span>.": "水平な接線（停留点）：<span class=\"chem\">dy/dx</span> の分子を <span class=\"chem\">0</span> とおきます。",

    // Question decoder: Master integration &amp; advanced differen > table > li
    "Vertical tangent (parallel to <i>y</i>-axis): set denominator of <span class=\"chem\">dy/dx</span> to <span class=\"chem\">0</span> (i.e. <span class=\"chem\">dx/dy = 0</span>).": "垂直な接線（<i>y</i> 軸に平行）：<span class=\"chem\">dy/dx</span> の分母を <span class=\"chem\">0</span>（すなわち <span class=\"chem\">dx/dy = 0</span>）とおきます。",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "“Water is poured at a constant rate of <span class=\"unit\">5 cm3 s-1</span>… find the rate at which the height is increasing”": "「水が一定の割合 <span class=\"unit\">5 cm3 s-1</span> で注がれている…高さが増加する速さを求めよ」",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "<strong>Related rates</strong> via the chain rule:<br><span class=\"chem\">dh/dt = (dh/dV) × (dV/dt)</span>.": "合成関数の微分法による<strong>関連変化率</strong>：<br><span class=\"chem\">dh/dt = (dh/dV) × (dV/dt)</span>。",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "In a cone, eliminate the radius <i>r</i> using <strong>similar triangles</strong> (<span class=\"chem\">r/h = R/H</span>) <em>before</em> differentiating <span class=\"chem\">V = (1/3)pi r^2 h</span> with respect to <i>h</i>!": "円錐の問題では、<span class=\"chem\">V = (1/3)pi r^2 h</span> を <i>h</i> で微分する<em>前に</em>、<strong>三角形の相似</strong>（<span class=\"chem\">r/h = R/H</span>）を使って半径 <i>r</i> を消去しましょう！",

    // First principles, continuity, higher derivatives and L’Hôpit > data-toc attribute
    "First principles & L'Hôpital": "微分の定義とロピタル",

    // First principles, continuity, higher derivatives and L’Hôpit > h2
    "First principles, continuity, higher derivatives and L’Hôpital’s rule": "微分の定義・連続性・高次導関数とロピタルの定理",

    // First principles, continuity, higher derivatives and L’Hôpit > p
    "A function <span class=\"chem\">f(x)</span> is <dfn data-def=\"A function is continuous at x = a if f(a) is defined, the two-sided limit as x approaches a exists, and lim_{x-&gt;a} f(x) = f(a).\">continuous</dfn> at <span class=\"chem\">x = a</span> if its graph has no holes, jumps, or vertical asymptotes there: <span class=\"chem\">lim_{x-&gt;a^-} f(x) = lim_{x-&gt;a^+} f(x) = f(a)</span>. It is <dfn data-def=\"A function is differentiable at x = a if the left and right limits of (f(a + h) − f(a))/h as h → 0 both exist, are finite and are equal.\">differentiable</dfn> at <span class=\"chem\">x = a</span> if the secant gradient approaches the same finite value from both the left and the right.": "関数 <span class=\"chem\">f(x)</span> のグラフが <span class=\"chem\">x = a</span> で穴・飛び・垂直漸近線をもたないとき、すなわち <span class=\"chem\">lim_{x-&gt;a^-} f(x) = lim_{x-&gt;a^+} f(x) = f(a)</span> が成り立つとき、その関数はそこで<dfn data-def=\"f(a) が定義されており、x -> a の両側極限が存在し、lim_{x-&gt;a} f(x) = f(a) を満たすこと。\">連続 <span class=\"en-term\">(continuous)</span></dfn>であるといいます。また、割線の傾きが左からも右からも同じ有限の値に近づくとき、<span class=\"chem\">x = a</span> で<dfn data-def=\"h → 0 のときの (f(a + h) − f(a))/h の左極限と右極限がともに存在し、有限で、互いに等しいこと。\">微分可能 <span class=\"en-term\">(differentiable)</span></dfn>であるといいます。",

    // First principles, continuity, higher derivatives and L’Hôpit > data-def attribute
    "A function is continuous at x = a if f(a) is defined, the two-sided limit as x approaches a exists, and lim_{x->a} f(x) = f(a).": "f(a) が定義されており、x -> a の両側極限が存在し、lim_{x->a} f(x) = f(a) を満たすこと。",

    // First principles, continuity, higher derivatives and L’Hôpit > data-def attribute
    "A function is differentiable at x = a if the left and right limits of (f(a + h) − f(a))/h as h → 0 both exist, are finite and are equal.": "h → 0 のときの (f(a + h) − f(a))/h の左極限と右極限がともに存在し、有限で、互いに等しいこと。",

    // First principles, continuity, higher derivatives and L’Hôpit > key idea > p
    "<strong>Differentiability vs continuity:</strong> Every function that is differentiable at <span class=\"chem\">x = a</span> is automatically continuous at <span class=\"chem\">x = a</span>. However, the converse is false: a function with a sharp corner or cusp (such as <span class=\"chem\">f(x) = |x|</span> at <span class=\"chem\">x = 0</span>, where the left gradient is <span class=\"chem\">-1</span> and the right gradient is <span class=\"chem\">+1</span>) is continuous but <strong>not differentiable</strong> at that point.": "<strong>微分可能性と連続性の関係：</strong> <span class=\"chem\">x = a</span> で微分可能な関数はすべて <span class=\"chem\">x = a</span> で連続です。しかし逆は成り立ちません：とがった角（尖点）をもつ関数（例：<span class=\"chem\">x = 0</span> における <span class=\"chem\">f(x) = |x|</span> は左側の傾きが <span class=\"chem\">-1</span>、右側の傾きが <span class=\"chem\">+1</span>）は連続ですが、その点で<strong>微分可能ではありません</strong>。",

    // First principles, continuity, higher derivatives and L’Hôpit > h3
    "Differentiation from first principles": "定義に従った微分",

    // First principles, continuity, higher derivatives and L’Hôpit > p
    "When an exam question says <em>“find <span class=\"chem\">f'(x)</span> from first principles”</em>, using shortcut derivative rules earns <strong>zero marks</strong>. You must start from the Formula Booklet limit definition:": "試験問題で<em>「定義に従って <span class=\"chem\">f'(x)</span> を求めよ (from first principles)」</em>と問われたとき、微分の公式を使ってショートカットすると <strong>0 点</strong>になります。必ず公式集にある極限の定義から始めましょう：",

    // First principles, continuity, higher derivatives and L’Hôpit > equation > dd
    "horizontal step between <i>x</i> and <i>x</i> + <i>h</i>": "<i>x</i> と <i>x</i> + <i>h</i> の間の横方向の幅",

    // First principles, continuity, higher derivatives and L’Hôpit > equation > dd
    "gradient of the secant chord through (<i>x</i>, <i>f</i>(<i>x</i>)) and (<i>x</i> + <i>h</i>, <i>f</i>(<i>x</i> + <i>h</i>))": "(<i>x</i>, <i>f</i>(<i>x</i>)) と (<i>x</i> + <i>h</i>, <i>f</i>(<i>x</i> + <i>h</i>)) を通る割線の傾き",

    // First principles, continuity, higher derivatives and L’Hôpit > p
    "Three algebraic techniques handle first-principles proofs, from polynomials to <span class=\"chem\">1/x</span> and <span class=\"chem\">sqrt(x)</span>:": "定義に従った微分には、多項式から <span class=\"chem\">1/x</span> や <span class=\"chem\">sqrt(x)</span> まで、次の 3 つの式変形テクニックを使います：",

    // First principles, continuity, higher derivatives and L’Hôpit > li
    "<strong>Polynomials <span class=\"chem\">x^n</span></strong>: Expand <span class=\"chem\">(x + h)^n</span> using the binomial theorem, cancel <span class=\"chem\">x^n</span>, factor out <i>h</i>, and let <span class=\"chem\">h -&gt; 0</span>.": "<strong>多項式 <span class=\"chem\">x^n</span></strong>：二項定理で <span class=\"chem\">(x + h)^n</span> を展開し、<span class=\"chem\">x^n</span> を消し、<i>h</i> をくくり出してから <span class=\"chem\">h -&gt; 0</span> とします。",

    // First principles, continuity, higher derivatives and L’Hôpit > li
    "<strong>Fractions like <span class=\"chem\">1/x</span> or <span class=\"chem\">1/x^2</span></strong>: Combine <span class=\"chem\">1/(x + h) - 1/x = (x - (x + h))/(x(x + h)) = -h/(x(x + h))</span> over a common denominator so <i>h</i> cancels cleanly.": "<strong><span class=\"chem\">1/x</span> や <span class=\"chem\">1/x^2</span> のような分数</strong>：通分して <span class=\"chem\">1/(x + h) - 1/x = (x - (x + h))/(x(x + h)) = -h/(x(x + h))</span> とまとめ、<i>h</i> をきれいに約分します。",

    // First principles, continuity, higher derivatives and L’Hôpit > li
    "<strong>Square roots like <span class=\"chem\">sqrt(x)</span></strong>: Multiply numerator and denominator by the conjugate <span class=\"chem\">sqrt(x + h) + sqrt(x)</span> so the numerator becomes <span class=\"chem\">(x + h) - x = h</span>.": "<strong><span class=\"chem\">sqrt(x)</span> のような平方根</strong>：分母・分子に共役な式 <span class=\"chem\">sqrt(x + h) + sqrt(x)</span> を掛けて有理化し、分子を <span class=\"chem\">(x + h) - x = h</span> にします。",

    // First principles, continuity, higher derivatives and L’Hôpit > h3
    "Higher derivatives <span class=\"chem\">f^{(n)}(x)</span>": "高次導関数 <span class=\"chem\">f^{(n)}(x)</span>",

    // First principles, continuity, higher derivatives and L’Hôpit > p
    "The <i>n</i>-th derivative of <span class=\"chem\">y = f(x)</span> is written <span class=\"chem\">f^{(n)}(x)</span> or <span class=\"chem\">d^n y / dx^n</span>. On Paper 1 and Paper 3, you are often asked to compute <span class=\"chem\">f'(x), f''(x), f'''(x)</span>, spot a pattern (such as powers of <span class=\"chem\">-1</span>, factorials <span class=\"chem\">n!</span>, or phase shifts <span class=\"chem\">sin(x + n pi / 2)</span>), and prove the formula for <span class=\"chem\">f^{(n)}(x)</span> by mathematical induction.": "<span class=\"chem\">y = f(x)</span> の第 <i>n</i> 次導関数は <span class=\"chem\">f^{(n)}(x)</span> または <span class=\"chem\">d^n y / dx^n</span> と書きます。Paper 1 や Paper 3 では、<span class=\"chem\">f'(x), f''(x), f'''(x)</span> を計算して規則性（<span class=\"chem\">-1</span> のべき乗、階乗 <span class=\"chem\">n!</span>、位相のずれ <span class=\"chem\">sin(x + n pi / 2)</span> など）を見抜き、<span class=\"chem\">f^{(n)}(x)</span> の公式を数学的帰納法で証明する問題がよく出題されます。",

    // First principles, continuity, higher derivatives and L’Hôpit > h3
    "L’Hôpital’s rule for indeterminate limits": "不定形の極限とロピタルの定理",

    // First principles, continuity, higher derivatives and L’Hôpit > p
    "When direct substitution into <span class=\"chem\">lim_{x-&gt;a} f(x)/g(x)</span> produces the indeterminate form <span class=\"chem\">0/0</span> or <span class=\"chem\">infty/infty</span>, zooming in closely around <span class=\"chem\">x = a</span> makes both curves look like their tangent lines. Near <span class=\"chem\">x = a</span> when <span class=\"chem\">f(a) = g(a) = 0</span>, <span class=\"chem\">f(x) ≈ f'(a)(x - a)</span> and <span class=\"chem\">g(x) ≈ g'(a)(x - a)</span>, so the ratio of heights equals the ratio of gradients:": "<span class=\"chem\">lim_{x-&gt;a} f(x)/g(x)</span> に直接代入して <span class=\"chem\">0/0</span> や <span class=\"chem\">infty/infty</span> の不定形になるとき、<span class=\"chem\">x = a</span> の周辺を拡大すると 2 つの曲線はそれぞれの接線とほぼ同じに見えます。<span class=\"chem\">f(a) = g(a) = 0</span> のとき <span class=\"chem\">x = a</span> の近くでは <span class=\"chem\">f(x) ≈ f'(a)(x - a)</span> かつ <span class=\"chem\">g(x) ≈ g'(a)(x - a)</span> なので、高さの比は傾きの比に等しくなります：",

    // First principles, continuity, higher derivatives and L’Hôpit > equation > maths line
    "If lim<sub><i>x</i>→<i>a</i></sub> <i>f</i>(<i>x</i>) = lim<sub><i>x</i>→<i>a</i></sub> <i>g</i>(<i>x</i>) = 0 (or ±∞), then lim<sub><i>x</i>→<i>a</i></sub> <span class=\"frac\"><span><i>f</i>(<i>x</i>)</span><span><i>g</i>(<i>x</i>)</span></span> = lim<sub><i>x</i>→<i>a</i></sub> <span class=\"frac\"><span><i>f</i>′(<i>x</i>)</span><span><i>g</i>′(<i>x</i>)</span></span>": "lim<sub><i>x</i>→<i>a</i></sub> <i>f</i>(<i>x</i>) = lim<sub><i>x</i>→<i>a</i></sub> <i>g</i>(<i>x</i>) = 0（または ±∞）のとき、lim<sub><i>x</i>→<i>a</i></sub> <span class=\"frac\"><span><i>f</i>(<i>x</i>)</span><span><i>g</i>(<i>x</i>)</span></span> = lim<sub><i>x</i>→<i>a</i></sub> <span class=\"frac\"><span><i>f</i>′(<i>x</i>)</span><span><i>g</i>′(<i>x</i>)</span></span>",

    // First principles, continuity, higher derivatives and L’Hôpit > equation > dd
    "differentiate numerator and denominator separately (provided the right-hand limit exists)": "分子と分母を別々に微分する（右辺の極限が存在するとき）",

    // First principles, continuity, higher derivatives and L’Hôpit > common mistake > p
    "<strong>Verify <span class=\"chem\">0/0</span> or <span class=\"chem\">infty/infty</span> before every single application!</strong> If a limit is <span class=\"chem\">lim_{x-&gt;0} cos(x)/(x + 2) = 1/2</span>, applying L’Hôpital’s rule gives <span class=\"chem\">lim_{x-&gt;0} (-sin x)/1 = 0</span>, which is completely wrong because the original limit was <span class=\"chem\">1/2</span>, not <span class=\"chem\">0/0</span>. Beyond the guide, which only uses <span class=\"chem\">f(x)/g(x)</span> forms: if you meet a product <span class=\"chem\">0 × infty</span> (such as <span class=\"chem\">lim_{x-&gt;0^+} x ln x</span>), rewrite it as a fraction <span class=\"chem\">(ln x)/(1/x)</span> (<span class=\"chem\">-infty/infty</span>) first!": "<strong>毎回必ず <span class=\"chem\">0/0</span> または <span class=\"chem\">infty/infty</span> であることを確認しましょう！</strong> <span class=\"chem\">lim_{x-&gt;0} cos(x)/(x + 2) = 1/2</span> にロピタルの定理を誤って使うと <span class=\"chem\">lim_{x-&gt;0} (-sin x)/1 = 0</span> となり、元の極限が <span class=\"chem\">0/0</span> ではなく <span class=\"chem\">1/2</span> であるため完全に誤答になります。AA ガイドの範囲外（ガイドは <span class=\"chem\">f(x)/g(x)</span> の形のみ）ですが、<span class=\"chem\">0 × infty</span> の積（例：<span class=\"chem\">lim_{x-&gt;0^+} x ln x</span>）の場合は、まず分数 <span class=\"chem\">(ln x)/(1/x)</span>（<span class=\"chem\">-infty/infty</span>）に書き換えてから使います！",

    // First principles, continuity, higher derivatives and L’Hôpit > widget > data-title attribute
    "L’Hôpital’s rule local linearization explorer": "ロピタルの定理：局所線形近似エクスプローラー",

    // First principles, continuity, higher derivatives and L’Hôpit > widget > data-kicker attribute
    "AHL 5.13 · Interactive": "AHL 5.13 · インタラクティブ",

    // First principles, continuity, higher derivatives and L’Hôpit > widget > figcaption
    "As you zoom in around <span class=\"chem\">x = a</span>, the functions <span class=\"chem\">f(x)</span> and <span class=\"chem\">g(x)</span> become indistinguishable from their tangent lines <span class=\"chem\">f'(a)(x - a)</span> and <span class=\"chem\">g'(a)(x - a)</span>. Because the <span class=\"chem\">(x - a)</span> factors cancel, the limit of <span class=\"chem\">f(x)/g(x)</span> equals the ratio of slopes <span class=\"chem\">f'(a)/g'(a)</span>.": "<span class=\"chem\">x = a</span> の周りを拡大すると、関数 <span class=\"chem\">f(x)</span> と <span class=\"chem\">g(x)</span> は接線 <span class=\"chem\">f'(a)(x - a)</span> と <span class=\"chem\">g'(a)(x - a)</span> と見分けがつかなくなります。<span class=\"chem\">(x - a)</span> が約分されるため、<span class=\"chem\">f(x)/g(x)</span> の極限は傾きの比 <span class=\"chem\">f'(a)/g'(a)</span> に等しくなります。",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > h3
    "Evaluating a limit that requires applying L’Hôpital’s rule twice": "ロピタルの定理を 2 回適用して極限を求める",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > p
    "Find the exact value of <span class=\"chem\">lim_{x-&gt;0} (e^{2x} - 1 - 2x) / (1 - cos(3x))</span>. <strong>[5 marks]</strong>": "<span class=\"chem\">lim_{x-&gt;0} (e^{2x} - 1 - 2x) / (1 - cos(3x))</span> の正確な値を求めなさい (Find)。 <strong>[5 marks]</strong>",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > data-title attribute
    "Check the indeterminate form at x = 0": "x = 0 で不定形になるか確認する",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > p
    "IB markschemes require explicit verification that both numerator and denominator approach 0 before applying L’Hôpital’s rule.": "IB の採点基準では、ロピタルの定理を適用する前に分子と分母の両方が 0 に近づくことを明示する必要があります。",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > maths line
    "As <i>x</i> → 0: numerator <i>e</i><sup>0</sup> − 1 − 0 = 0 and denominator 1 − cos(0) = 0 (indeterminate form 0/0) <b>[R1]</b>": "<i>x</i> → 0 のとき：分子 <i>e</i><sup>0</sup> − 1 − 0 = 0 かつ分母 1 − cos(0) = 0（0/0 の不定形） <b>[R1]</b>",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > data-title attribute
    "Apply L’Hôpital’s rule once and re-test at x = 0": "ロピタルの定理を 1 回適用し、x = 0 で再確認する",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > p
    "Differentiate numerator and denominator separately with respect to x using the chain rule.": "合成関数の微分法を用いて、分子と分母をそれぞれ x で微分します。",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > maths line
    "At <i>x</i> = 0: numerator 2 − 2 = 0 and denominator 3 sin(0) = 0 (still form 0/0)": "<i>x</i> = 0 のとき：分子 2 − 2 = 0 かつ分母 3 sin(0) = 0（まだ 0/0 の不定形）",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > data-title attribute
    "Apply L’Hôpital’s rule a second time and evaluate": "ロピタルの定理を 2 回目適用して計算する",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > p
    "Since the first derivative ratio is still 0/0, differentiate top and bottom one more time and substitute x = 0.": "1 回微分した比もまだ 0/0 なので、もう一度分子と分母を微分して x = 0 を代入します。",

    // First principles, continuity, higher derivatives and L’Hôpit > try it > p
    "Evaluate <span class=\"chem\">lim_{x-&gt;0} (3x - sin(3x)) / (2x^3)</span>. Give your answer as an exact fraction or decimal.": "<span class=\"chem\">lim_{x-&gt;0} (3x - sin(3x)) / (2x^3)</span> を計算しなさい。正確な分数または小数で答えなさい。",

    // First principles, continuity, higher derivatives and L’Hôpit > try it > li
    "Verify that at <span class=\"chem\">x = 0</span>, both numerator and denominator are <span class=\"chem\">0</span>. Apply L’Hôpital’s rule once to get <span class=\"chem\">lim_{x-&gt;0} (3 - 3 cos(3x)) / (6x^2)</span>.": "<span class=\"chem\">x = 0</span> で分子・分母がともに <span class=\"chem\">0</span> になることを確認します。ロピタルの定理を 1 回適用すると <span class=\"chem\">lim_{x-&gt;0} (3 - 3 cos(3x)) / (6x^2)</span> になります。",

    // First principles, continuity, higher derivatives and L’Hôpit > try it > li
    "This is still <span class=\"chem\">0/0</span>. Differentiate top and bottom a second time to get <span class=\"chem\">lim_{x-&gt;0} (9 sin(3x)) / (12x)</span>, and a third time to get <span class=\"chem\">lim_{x-&gt;0} (27 cos(3x)) / 12</span>.": "これもまだ <span class=\"chem\">0/0</span> です。2 回目の微分で <span class=\"chem\">lim_{x-&gt;0} (9 sin(3x)) / (12x)</span>、3 回目の微分で <span class=\"chem\">lim_{x-&gt;0} (27 cos(3x)) / 12</span> になります。",

    // Implicit differentiation, related rates and AHL derivatives > data-toc attribute
    "Implicit & related rates": "陰関数の微分と関連変化率",

    // Implicit differentiation, related rates and AHL derivatives > h2
    "Implicit differentiation, related rates and AHL derivatives": "陰関数の微分法・関連変化率・AHL の導関数",

    // Implicit differentiation, related rates and AHL derivatives > p
    "Many geometric curves—such as circles <span class=\"chem\">x^2 + y^2 = r^2</span> or rotated ellipses <span class=\"chem\">x^2 + xy + y^2 = 7</span>—cannot easily be written in explicit form <span class=\"chem\">y = f(x)</span>. Using <dfn data-def=\"Differentiating both sides of an equation F(x, y) = 0 with respect to x by treating y as an implicit function y(x) and applying the chain rule d/dx(g(y)) = g'(y) dy/dx.\">implicit differentiation</dfn>, we differentiate every term with respect to <i>x</i> directly:": "円 <span class=\"chem\">x^2 + y^2 = r^2</span> や傾いた楕円 <span class=\"chem\">x^2 + xy + y^2 = 7</span> のように、陽な形 <span class=\"chem\">y = f(x)</span> で表しにくい図形は多くあります。<dfn data-def=\"y を x の陰関数 y(x) とみなし、合成関数の微分法 d/dx(g(y)) = g'(y) dy/dx を適用して方程式 F(x, y) = 0 の両辺を x で直接微分する方法。\">陰関数の微分法 <span class=\"en-term\">(implicit differentiation)</span></dfn>を使うと、すべての項を直接 <i>x</i> で微分できます：",

    // Implicit differentiation, related rates and AHL derivatives > data-def attribute
    "Differentiating both sides of an equation F(x, y) = 0 with respect to x by treating y as an implicit function y(x) and applying the chain rule d/dx(g(y)) = g'(y) dy/dx.": "y を x の陰関数 y(x) とみなし、合成関数の微分法 d/dx(g(y)) = g'(y) dy/dx を適用して方程式 F(x, y) = 0 の両辺を x で直接微分する方法。",

    // Implicit differentiation, related rates and AHL derivatives > li
    "Any term involving <i>y</i> is differentiated using the chain rule: <span class=\"chem\">d/dx(y^n) = n y^{n-1} (dy/dx)</span> and <span class=\"chem\">d/dx(e^y) = e^y (dy/dx)</span>.": "<i>y</i> を含む項はすべて合成関数の微分法で微分します：<span class=\"chem\">d/dx(y^n) = n y^{n-1} (dy/dx)</span>、<span class=\"chem\">d/dx(e^y) = e^y (dy/dx)</span>。",

    // Implicit differentiation, related rates and AHL derivatives > li
    "Any mixed product such as <span class=\"chem\">x^2 y</span> requires the product rule: <span class=\"chem\">d/dx(x^2 y) = x^2 (dy/dx) + 2xy</span>.": "<span class=\"chem\">x^2 y</span> のように x と y の積には積の微分法が必要です：<span class=\"chem\">d/dx(x^2 y) = x^2 (dy/dx) + 2xy</span>。",

    // Implicit differentiation, related rates and AHL derivatives > li
    "After differentiating both sides, collect all terms containing <span class=\"chem\">dy/dx</span> on the left, factor out <span class=\"chem\">dy/dx</span>, and divide.": "両辺を微分した後、<span class=\"chem\">dy/dx</span> を含む項をすべて左辺に集め、<span class=\"chem\">dy/dx</span> でくくって割ります。",

    // Implicit differentiation, related rates and AHL derivatives > exam tip (shown in English + translation) > p
    "<strong>Exam tip — Horizontal vs vertical tangents on implicit curves:</strong> If <span class=\"chem\">dy/dx = P(x, y) / Q(x, y)</span>:": "<strong>試験のポイント — 陰関数曲線の水平接線と垂直接線：</strong> <span class=\"chem\">dy/dx = P(x, y) / Q(x, y)</span> のとき：",

    // Implicit differentiation, related rates and AHL derivatives > exam tip (shown in English + translation) > li
    "<strong>Horizontal tangent (stationary point / parallel to <i>x</i>-axis):</strong> Set the numerator <span class=\"chem\">P(x, y) = 0</span>, express <i>y</i> in terms of <i>x</i> (or vice versa), and <strong>substitute back into the original curve equation</strong> to find the coordinates!": "<strong>水平な接線（停留点 / <i>x</i> 軸に平行）：</strong> 分子 <span class=\"chem\">P(x, y) = 0</span> とおき、<i>y</i> を <i>x</i> で表して（またはその逆）、<strong>元の曲線の方程式に代入</strong>して座標を求めます！",

    // Implicit differentiation, related rates and AHL derivatives > exam tip (shown in English + translation) > li
    "<strong>Vertical tangent (parallel to <i>y</i>-axis):</strong> Set the denominator <span class=\"chem\">Q(x, y) = 0</span> (which is equivalent to <span class=\"chem\">dx/dy = 0</span>) and substitute back into the original curve equation.": "<strong>垂直な接線（<i>y</i> 軸に平行）：</strong> 分母 <span class=\"chem\">Q(x, y) = 0</span>（<span class=\"chem\">dx/dy = 0</span> と同値）とおき、元の曲線の方程式に代入します。",

    // Implicit differentiation, related rates and AHL derivatives > h3
    "Related rates of change": "関連変化率（時間変化率）",

    // Implicit differentiation, related rates and AHL derivatives > p
    "When two or more quantities vary with time <i>t</i> (such as the volume <i>V</i>, radius <i>r</i>, and depth <i>h</i> of water in a tank), the chain rule connects their rates of change:": "2 つ以上の量（タンク内の水の体積 <i>V</i>、半径 <i>r</i>、深さ <i>h</i> など）が時間 <i>t</i> とともに変化するとき、合成関数の微分法でそれらの変化率を結びつけます：",

    // Implicit differentiation, related rates and AHL derivatives > equation > dt
    "dV/dt": "dV/dt",

    // Implicit differentiation, related rates and AHL derivatives > equation > dd
    "rate of change of volume with respect to time (positive for inflow, negative for outflow/leaking)": "時間に対する体積の変化率（流入は正、流出・漏れは負）",

    // Implicit differentiation, related rates and AHL derivatives > equation > dt
    "dh/dt": "dh/dt",

    // Implicit differentiation, related rates and AHL derivatives > equation > dd
    "rate of change of height with respect to time": "時間に対する高さの変化率",

    // Implicit differentiation, related rates and AHL derivatives > h3
    "AHL standard derivatives (Formula Booklet 5.15)": "AHL の基本関数の導関数（公式集 5.15）",

    // Implicit differentiation, related rates and AHL derivatives > formula booklet note > p
    "<strong>In your Formula Booklet (Section 5.15):</strong>": "<strong>公式集（Formula booklet）に掲載 (Section 5.15)：</strong>",

    // Implicit differentiation, related rates and AHL derivatives > formula booklet note > li
    "Reciprocal &amp; tangent trig: <span class=\"chem\">d/dx(tan x) = sec^2 x</span>, <span class=\"chem\">d/dx(cot x) = -cosec^2 x</span>, <span class=\"chem\">d/dx(sec x) = sec x tan x</span>, <span class=\"chem\">d/dx(cosec x) = -cosec x cot x</span>. (Notice every “co-” function has a minus sign!)": "正接・逆数三角関数：<span class=\"chem\">d/dx(tan x) = sec^2 x</span>、<span class=\"chem\">d/dx(cot x) = -cosec^2 x</span>、<span class=\"chem\">d/dx(sec x) = sec x tan x</span>、<span class=\"chem\">d/dx(cosec x) = -cosec x cot x</span>。（“co-” がつく関数はすべてマイナス符号がつくことに注目！）",

    // Implicit differentiation, related rates and AHL derivatives > formula booklet note > li
    "General exponential &amp; log: <span class=\"chem\">d/dx(a^x) = a^x ln a</span> and <span class=\"chem\">d/dx(log_a x) = 1/(x ln a)</span>.": "一般の指数・対数関数：<span class=\"chem\">d/dx(a^x) = a^x ln a</span> および <span class=\"chem\">d/dx(log_a x) = 1/(x ln a)</span>。",

    // Implicit differentiation, related rates and AHL derivatives > formula booklet note > li
    "Inverse trig: <span class=\"chem\">d/dx(arcsin x) = 1/sqrt(1 - x^2)</span>, <span class=\"chem\">d/dx(arccos x) = -1/sqrt(1 - x^2)</span>, and <span class=\"chem\">d/dx(arctan x) = 1/(1 + x^2)</span>.": "逆三角関数：<span class=\"chem\">d/dx(arcsin x) = 1/sqrt(1 - x^2)</span>、<span class=\"chem\">d/dx(arccos x) = -1/sqrt(1 - x^2)</span>、<span class=\"chem\">d/dx(arctan x) = 1/(1 + x^2)</span>。",

    // Implicit differentiation, related rates and AHL derivatives > worked example > h3
    "Finding points with a vertical tangent on an implicit curve": "陰関数曲線上で垂直な接線をもつ点を求める",

    // Implicit differentiation, related rates and AHL derivatives > worked example > p
    "Consider the curve defined implicitly by <span class=\"chem\">x^2 - 2xy + 4y^2 = 12</span>. Find the coordinates of the two points on the curve where the tangent is parallel to the <i>y</i>-axis. <strong>[6 marks]</strong>": "陰関数 <span class=\"chem\">x^2 - 2xy + 4y^2 = 12</span> で定められる曲線を考える。接線が <i>y</i> 軸に平行になる曲線上の 2 点の座標を求めなさい (Find)。 <strong>[6 marks]</strong>",

    // Implicit differentiation, related rates and AHL derivatives > worked example > data-title attribute
    "Differentiate both sides implicitly with respect to x": "両辺を x で陰関数微分する",

    // Implicit differentiation, related rates and AHL derivatives > worked example > p
    "Apply the product rule to −2xy and the chain rule to 4y². Remember that the derivative of 12 is 0.": "−2xy には積の微分法、4y² には合成関数の微分法を適用します。定数 12 の微分は 0 であることに注意しましょう。",

    // Implicit differentiation, related rates and AHL derivatives > worked example > data-title attribute
    "Isolate dy/dx and apply the vertical tangent condition": "dy/dx を孤立させ、垂直接線の条件を適用する",

    // Implicit differentiation, related rates and AHL derivatives > worked example > p
    "A tangent parallel to the y-axis is vertical, which occurs where the denominator of dy/dx equals zero (dx/dy = 0).": "y 軸に平行な接線は垂直であり、dy/dx の分母が 0（dx/dy = 0）となるところで生じます。",

    // Implicit differentiation, related rates and AHL derivatives > worked example > maths line
    "Vertical tangent ⇒ 4<i>y</i> − <i>x</i> = 0 ⇒ <i>x</i> = 4<i>y</i> <b>[M1]</b>": "垂直な接線 ⇒ 4<i>y</i> − <i>x</i> = 0 ⇒ <i>x</i> = 4<i>y</i> <b>[M1]</b>",

    // Implicit differentiation, related rates and AHL derivatives > worked example > data-title attribute
    "Substitute x = 4y back into the original curve equation": "x = 4y を元の曲線の方程式に戻して代入する",

    // Implicit differentiation, related rates and AHL derivatives > worked example > p
    "The points must lie on the curve x² − 2xy + 4y² = 12.": "求める点は曲線 x² − 2xy + 4y² = 12 上になければなりません。",

    // Implicit differentiation, related rates and AHL derivatives > worked example > maths line
    "Since <i>x</i> = 4<i>y</i>, the points are <b>(4, 1)</b> and <b>(−4, −1)</b>. <b>[A1]</b>": "<i>x</i> = 4<i>y</i> より、求める点は <b>(4, 1)</b> と <b>(−4, −1)</b> です。 <b>[A1]</b>",

    // Implicit differentiation, related rates and AHL derivatives > worked example > p
    "(4, 1) and (−4, −1)": "(4, 1) および (−4, −1)",

    // Implicit differentiation, related rates and AHL derivatives > try it > p
    "An inverted right circular cone has base radius <span class=\"unit\">6 cm</span> and height <span class=\"unit\">12 cm</span>. Water is poured into the cone at a constant rate of <span class=\"unit\">8 cm3 s-1</span>. Find the rate <span class=\"chem\">dh/dt</span> at which the water depth <i>h</i> is rising when <span class=\"chem\">h = 4</span> <span class=\"unit\">cm</span>. (Give your answer to 3 s.f. or in terms of <span class=\"mono\">pi</span>.)": "頂点を下にした直円錐の容器があり、底面の半径は <span class=\"unit\">6 cm</span>、高さは <span class=\"unit\">12 cm</span> である。水が一定の割合 <span class=\"unit\">8 cm3 s-1</span> で注がれているとき、水深 <i>h</i> が <span class=\"chem\">h = 4</span> <span class=\"unit\">cm</span> になった瞬間の水面の上昇速度 <span class=\"chem\">dh/dt</span> を求めなさい (Find)。（有効数字 3 桁または <span class=\"mono\">pi</span> を用いた式で答えなさい。）",

    // Implicit differentiation, related rates and AHL derivatives > try it > li
    "By similar triangles, <span class=\"chem\">r / h = 6 / 12 = 1 / 2</span>, so <span class=\"chem\">r = h / 2</span>. Substitute this into <span class=\"chem\">V = (1/3)pi r^2 h</span> to get <span class=\"chem\">V = (pi / 12) h^3</span>.": "三角形の相似より <span class=\"chem\">r / h = 6 / 12 = 1 / 2</span>、よって <span class=\"chem\">r = h / 2</span>。これを <span class=\"chem\">V = (1/3)pi r^2 h</span> に代入すると <span class=\"chem\">V = (pi / 12) h^3</span> を得ます。",

    // Implicit differentiation, related rates and AHL derivatives > try it > li
    "Differentiate with respect to <i>h</i>: <span class=\"chem\">dV/dh = (pi / 4) h^2</span>. At <span class=\"chem\">h = 4</span>, <span class=\"chem\">dV/dh = 4pi</span>, so <span class=\"chem\">dh/dt = (dV/dt) / (dV/dh) = 8 / (4pi) = 2 / pi</span>.": "<i>h</i> で微分すると <span class=\"chem\">dV/dh = (pi / 4) h^2</span>。<span class=\"chem\">h = 4</span> のとき <span class=\"chem\">dV/dh = 4pi</span> なので、<span class=\"chem\">dh/dt = (dV/dt) / (dV/dh) = 8 / (4pi) = 2 / pi</span> となります。",

    // Standard AHL integrals, substitution, integration by parts a > data-toc attribute
    "Integration methods": "積分のテクニック",

    // Standard AHL integrals, substitution, integration by parts a > h2
    "Standard AHL integrals, substitution, integration by parts and partial fractions": "AHL の基本積分・置換積分・部分積分・部分分数分解",

    // Standard AHL integrals, substitution, integration by parts a > h3
    "1. Standard AHL integrals leading to <span class=\"chem\">arcsin</span> and <span class=\"chem\">arctan</span>": "1. <span class=\"chem\">arcsin</span> と <span class=\"chem\">arctan</span> になる AHL の基本積分",

    // Standard AHL integrals, substitution, integration by parts a > p
    "The Formula Booklet gives two essential inverse trigonometric integrals for any positive constant <span class=\"chem\">a &gt; 0</span>:": "公式集には、任意の正の定数 <span class=\"chem\">a &gt; 0</span> に対する 2 つの重要な逆三角関数の積分公式が載っています：",

    // Standard AHL integrals, substitution, integration by parts a > equation > maths line
    "∫ <span class=\"frac\"><span>1</span><span><i>a</i><sup>2</sup> + <i>x</i><sup>2</sup></span></span> <i>dx</i> = <span class=\"frac\"><span>1</span><span><i>a</i></span></span> arctan<span class=\"frac\"><span><i>x</i></span><span><i>a</i></span></span> + <i>C</i>, ∫ <span class=\"frac\"><span>1</span><span>√(<i>a</i><sup>2</sup> − <i>x</i><sup>2</sup>)</span></span> <i>dx</i> = arcsin<span class=\"frac\"><span><i>x</i></span><span><i>a</i></span></span> + <i>C</i> (|<i>x</i>| &lt; <i>a</i>)": "∫ <span class=\"frac\"><span>1</span><span><i>a</i><sup>2</sup> + <i>x</i><sup>2</sup></span></span> <i>dx</i> = <span class=\"frac\"><span>1</span><span><i>a</i></span></span> arctan<span class=\"frac\"><span><i>x</i></span><span><i>a</i></span></span> + <i>C</i>, ∫ <span class=\"frac\"><span>1</span><span>√(<i>a</i><sup>2</sup> − <i>x</i><sup>2</sup>)</span></span> <i>dx</i> = arcsin<span class=\"frac\"><span><i>x</i></span><span><i>a</i></span></span> + <i>C</i> (|<i>x</i>| &lt; <i>a</i>)",

    // Standard AHL integrals, substitution, integration by parts a > equation > dt
    "1/a in arctan": "arctan の 1/a",

    // Standard AHL integrals, substitution, integration by parts a > equation > dd
    "present in arctan, but NOT in arcsin!": "arctan には付くが、arcsin には付かない！",

    // Standard AHL integrals, substitution, integration by parts a > p
    "The booklet also gives <span class=\"chem\">int a^x dx = a^x / ln a + C</span> (<span class=\"chem\">a &gt; 0, a != 1</span>), the reverse of <span class=\"chem\">d/dx(a^x) = a^x ln a</span>. For example, <span class=\"chem\">int_0^1 2^x dx = [2^x / ln 2]_0^1 = 1/ln 2</span>.": "公式集には <span class=\"chem\">int a^x dx = a^x / ln a + C</span>（<span class=\"chem\">a &gt; 0, a != 1</span>）も載っています。これは <span class=\"chem\">d/dx(a^x) = a^x ln a</span> の逆の計算です。例えば <span class=\"chem\">int_0^1 2^x dx = [2^x / ln 2]_0^1 = 1/ln 2</span> です。",

    "When the denominator is an irreducible quadratic such as <span class=\"chem\">x^2 + 6x + 25</span>, complete the square first: <span class=\"chem\">x^2 + 6x + 25 = (x + 3)^2 + 4^2</span>, which integrates directly to <span class=\"chem\">(1/4) arctan((x + 3)/4) + C</span>.": "分母が <span class=\"chem\">x^2 + 6x + 25</span> のように因数分解できない 2 次式のときは、まず平方完成します：<span class=\"chem\">x^2 + 6x + 25 = (x + 3)^2 + 4^2</span> より、積分すると直ちに <span class=\"chem\">(1/4) arctan((x + 3)/4) + C</span> となります。",

    // Standard AHL integrals, substitution, integration by parts a > h3
    "2. Formal integration by substitution": "2. 置換積分法",

    // Standard AHL integrals, substitution, integration by parts a > p
    "To evaluate <span class=\"chem\">int_a^b f(g(x)) g'(x) dx</span> using <span class=\"chem\">u = g(x)</span>:": "<span class=\"chem\">u = g(x)</span> を用いて <span class=\"chem\">int_a^b f(g(x)) g'(x) dx</span> を計算する手順：",

    // Standard AHL integrals, substitution, integration by parts a > li
    "Differentiate the substitution: <span class=\"chem\">du/dx = g'(x) =&gt; du = g'(x) dx</span>.": "置換した式を微分します：<span class=\"chem\">du/dx = g'(x) =&gt; du = g'(x) dx</span>。",

    // Standard AHL integrals, substitution, integration by parts a > li
    "<strong>Change the limits of integration</strong>: lower limit <span class=\"chem\">u_1 = g(a)</span>, upper limit <span class=\"chem\">u_2 = g(b)</span>.": "<strong>積分区間を変換します</strong>：下端 <span class=\"chem\">u_1 = g(a)</span>、上端 <span class=\"chem\">u_2 = g(b)</span>。",

    // Standard AHL integrals, substitution, integration by parts a > li
    "Rewrite the entire integrand in terms of <i>u</i> and evaluate <span class=\"chem\">int_{u_1}^{u_2} f(u) du</span> directly—no back-substitution needed!": "被積分関数全体を <i>u</i> で書き換え、<span class=\"chem\">int_{u_1}^{u_2} f(u) du</span> を直接計算します——元の変数に戻す必要はありません！",

    // Standard AHL integrals, substitution, integration by parts a > h3
    "3. Integration by parts (<span class=\"chem\">LIATE</span>)": "3. 部分積分法 (<span class=\"chem\">LIATE</span>)",

    // Standard AHL integrals, substitution, integration by parts a > p
    "Reversing the product rule gives the integration by parts formula in Section 5.16 of the Formula Booklet:": "積の微分法を逆向きに使うと、公式集 Section 5.16 にある部分積分法の公式が得られます：",

    // Standard AHL integrals, substitution, integration by parts a > equation > dd
    "factor chosen to be differentiated (pick using LIATE: Log → Inverse trig → Algebraic → Trig → Exp)": "微分する側に選ぶ因子（LIATE の順に選ぶ：対数 → 逆三角 → 整式 → 三角 → 指数）",

    // Standard AHL integrals, substitution, integration by parts a > equation > dt
    "dv/dx": "dv/dx",

    // Standard AHL integrals, substitution, integration by parts a > equation > dd
    "factor chosen to be integrated to find <i>v</i>": "積分して <i>v</i> を求める側に選ぶ因子",

    // Standard AHL integrals, substitution, integration by parts a > key idea > p
    "<strong>Three classic IB integration by parts patterns:</strong>": "<strong>IB でよく出る部分積分法の 3 パターン：</strong>",

    // Standard AHL integrals, substitution, integration by parts a > key idea > li
    "<strong>Polynomial times <span class=\"chem\">e^{kx}</span>, <span class=\"chem\">sin(kx)</span>, or <span class=\"chem\">cos(kx)</span>:</strong> Choose <span class=\"chem\">u = x^n</span> so each differentiation lowers the power of <i>x</i> until it becomes a constant.": "<strong>多項式 × <span class=\"chem\">e^{kx}</span>, <span class=\"chem\">sin(kx)</span>, <span class=\"chem\">cos(kx)</span>：</strong> <span class=\"chem\">u = x^n</span> とおくと、微分するたびに <i>x</i> の次数が下がり最終的に定数になります。",

    // Standard AHL integrals, substitution, integration by parts a > key idea > li
    "<strong>Lone <span class=\"chem\">ln x</span>, <span class=\"chem\">arcsin x</span>, or <span class=\"chem\">arctan x</span> (or multiplied by <span class=\"chem\">x^n</span>):</strong> Always choose the log or inverse trig function as <i>u</i>! For <span class=\"chem\">int ln x dx</span>, let <span class=\"chem\">u = ln x</span> and <span class=\"chem\">dv/dx = 1</span>, giving <span class=\"chem\">x ln x - int x(1/x) dx = x ln x - x + C</span>.": "<strong>単独の <span class=\"chem\">ln x</span>, <span class=\"chem\">arcsin x</span>, <span class=\"chem\">arctan x</span>（または <span class=\"chem\">x^n</span> との積）：</strong> 必ず対数または逆三角関数を <i>u</i> に選びます！<span class=\"chem\">int ln x dx</span> では <span class=\"chem\">u = ln x</span>、<span class=\"chem\">dv/dx = 1</span> とおくと、<span class=\"chem\">x ln x - int x(1/x) dx = x ln x - x + C</span> となります。",

    // Standard AHL integrals, substitution, integration by parts a > key idea > li
    "<strong>Cyclic <span class=\"chem\">I = int e^{ax} sin(bx) dx</span> or <span class=\"chem\">int e^{ax} cos(bx) dx</span>:</strong> Integrate by parts <strong>twice</strong> (keeping <span class=\"chem\">u = e^{ax}</span> both times) until the original integral <i>I</i> reappears on the right-hand side, then solve algebraically for <i>I</i>.": "<strong>循環型 <span class=\"chem\">I = int e^{ax} sin(bx) dx</span> や <span class=\"chem\">int e^{ax} cos(bx) dx</span>：</strong> （2 回とも <span class=\"chem\">u = e^{ax}</span> などを保ったまま）部分積分を<strong>2 回</strong>行い、右辺に元の積分 <i>I</i> を再び登場させてから <i>I</i> について解きます。",

    // Standard AHL integrals, substitution, integration by parts a > h3
    "4. Integration using partial fractions": "4. 部分分数分解を用いた積分",

    // Standard AHL integrals, substitution, integration by parts a > p
    "When integrating a rational function <span class=\"chem\">P(x)/Q(x)</span> where the denominator factors into distinct linear terms <span class=\"chem\">(x - a)(x - b)</span>, decompose the fraction first (from Topic 1.3 / AHL 1.11):": "分母が異なる 1 次式 <span class=\"chem\">(x - a)(x - b)</span> に因数分解できる有理関数 <span class=\"chem\">P(x)/Q(x)</span> を積分するときは、まず部分分数に分解します（Topic 1.3 / AHL 1.11）：",

    // Standard AHL integrals, substitution, integration by parts a > p
    "<span class=\"chem\">int (px + q)/((x - a)(x - b)) dx = int (A/(x - a) + B/(x - b)) dx = A ln|x - a| + B ln|x - b| + C</span>.": "<span class=\"chem\">int (px + q)/((x - a)(x - b)) dx = int (A/(x - a) + B/(x - b)) dx = A ln|x - a| + B ln|x - b| + C</span>。",

    // Standard AHL integrals, substitution, integration by parts a > worked example > h3
    "Definite integration by parts with an inverse trigonometric function": "逆三角関数を含む定積分を部分積分法で求める",

    // Standard AHL integrals, substitution, integration by parts a > worked example > p
    "Find the exact value of <span class=\"chem\">int_0^1 arctan(x) dx</span>. <strong>[5 marks]</strong>": "<span class=\"chem\">int_0^1 arctan(x) dx</span> の正確な値を求めなさい (Find)。 <strong>[5 marks]</strong>",

    // Standard AHL integrals, substitution, integration by parts a > worked example > data-title attribute
    "Set up u and dv/dx using LIATE": "LIATE を使って u と dv/dx を設定する",

    // Standard AHL integrals, substitution, integration by parts a > worked example > p
    "For a lone inverse trig function, set u = arctan x and dv/dx = 1 so that du/dx is purely algebraic.": "単独の逆三角関数では、du/dx が代数的な式になるよう u = arctan x、dv/dx = 1 とおきます。",

    // Standard AHL integrals, substitution, integration by parts a > worked example > maths line
    "Let <i>u</i> = arctan <i>x</i> ⇒ <span class=\"frac\"><span><i>du</i></span><span><i>dx</i></span></span> = <span class=\"frac\"><span>1</span><span>1 + <i>x</i><sup>2</sup></span></span>, and <span class=\"frac\"><span><i>dv</i></span><span><i>dx</i></span></span> = 1 ⇒ <i>v</i> = <i>x</i> <b>[M1 A1]</b>": "<i>u</i> = arctan <i>x</i> ⇒ <span class=\"frac\"><span><i>du</i></span><span><i>dx</i></span></span> = <span class=\"frac\"><span>1</span><span>1 + <i>x</i><sup>2</sup></span></span>、かつ <span class=\"frac\"><span><i>dv</i></span><span><i>dx</i></span></span> = 1 ⇒ <i>v</i> = <i>x</i> とおく <b>[M1 A1]</b>",

    // Standard AHL integrals, substitution, integration by parts a > worked example > data-title attribute
    "Apply the integration by parts formula": "部分積分法の公式を適用する",

    // Standard AHL integrals, substitution, integration by parts a > worked example > p
    "Substitute into [uv] − ∫ v du and recognize the remaining integral as a logarithmic inspection form.": "[uv] − ∫ v du に代入し、残った積分が対数の形になることを見抜きます。",

    // Standard AHL integrals, substitution, integration by parts a > worked example > maths line
    "∫<sub>0</sub><sup>1</sup> arctan <i>x</i> <i>dx</i> = [<i>x</i> arctan <i>x</i>]<sub>0</sub><sup>1</sup> − ∫<sub>0</sub><sup>1</sup> <span class=\"frac\"><span><i>x</i></span><span>1 + <i>x</i><sup>2</sup></span></span> <i>dx</i> <b>[A1]</b>": "∫<sub>0</sub><sup>1</sup> arctan <i>x</i> <i>dx</i> = [<i>x</i> arctan <i>x</i>]<sub>0</sub><sup>1</sup> − ∫<sub>0</sub><sup>1</sup> <span class=\"frac\"><span><i>x</i></span><span>1 + <i>x</i><sup>2</sup></span></span> <i>dx</i> <b>[A1]</b>",

    // Standard AHL integrals, substitution, integration by parts a > worked example > data-title attribute
    "Integrate x/(1 + x²) and evaluate at the limits 0 and 1": "x/(1 + x²) を積分し、0 から 1 までで評価する",

    // Standard AHL integrals, substitution, integration by parts a > worked example > p
    "Since d/dx(1 + x²) = 2x, the integral of x/(1 + x²) is (1/2) ln(1 + x²).": "d/dx(1 + x²) = 2x なので、x/(1 + x²) の積分は (1/2) ln(1 + x²) となります。",

    // Standard AHL integrals, substitution, integration by parts a > worked example > maths line
    "= [<i>x</i> arctan <i>x</i> − <span class=\"frac\"><span>1</span><span>2</span></span> ln(1 + <i>x</i><sup>2</sup>)]<sub>0</sub><sup>1</sup> = (1 · <span class=\"frac\"><span>π</span><span>4</span></span> − <span class=\"frac\"><span>1</span><span>2</span></span> ln 2) − (0 − 0) = <b><span class=\"frac\"><span>π</span><span>4</span></span> − <span class=\"frac\"><span>1</span><span>2</span></span> ln 2</b> <b>[M1 A1]</b>": "= [<i>x</i> arctan <i>x</i> − <span class=\"frac\"><span>1</span><span>2</span></span> ln(1 + <i>x</i><sup>2</sup>)]<sub>0</sub><sup>1</sup> = (1 · <span class=\"frac\"><span>π</span><span>4</span></span> − <span class=\"frac\"><span>1</span><span>2</span></span> ln 2) − (0 − 0) = <b><span class=\"frac\"><span>π</span><span>4</span></span> − <span class=\"frac\"><span>1</span><span>2</span></span> ln 2</b> <b>[M1 A1]</b>",

    // Standard AHL integrals, substitution, integration by parts a > worked example > p
    "π/4 − (1/2) ln 2": "π/4 − (1/2) ln 2",

    // Standard AHL integrals, substitution, integration by parts a > try it > p
    "Find the exact value of <span class=\"chem\">int_0^3 2 / (x^2 + 9) dx</span>. (You can type an exact expression in terms of <span class=\"mono\">pi</span> such as <span class=\"mono\">pi/3</span>, or a 3 s.f. decimal.)": "<span class=\"chem\">int_0^3 2 / (x^2 + 9) dx</span> の正確な値を求めなさい (Find)。（<span class=\"mono\">pi/3</span> のように <span class=\"mono\">pi</span> を用いた正確な式、または有効数字 3 桁の小数で入力できます。）",

    // Standard AHL integrals, substitution, integration by parts a > try it > li
    "Match the integrand with the Formula Booklet standard integral <span class=\"chem\">int 1/(a^2 + x^2) dx = (1/a) arctan(x/a) + C</span> where <span class=\"chem\">a = 3</span>.": "被積分関数を <span class=\"chem\">a = 3</span> の公式集の基本積分 <span class=\"chem\">int 1/(a^2 + x^2) dx = (1/a) arctan(x/a) + C</span> に当てはめます。",

    // Standard AHL integrals, substitution, integration by parts a > try it > li
    "Factor out the 2 to get <span class=\"chem\">[(2/3) arctan(x/3)]_0^3</span> and use <span class=\"chem\">arctan(1) = pi/4</span>.": "2 を前に出して <span class=\"chem\">[(2/3) arctan(x/3)]_0^3</span> とし、<span class=\"chem\">arctan(1) = pi/4</span> を使います。",

    // Standard AHL integrals, substitution, integration by parts a > try it > maths line
    "2 ∫<sub>0</sub><sup>3</sup> <span class=\"frac\"><span>1</span><span>3<sup>2</sup> + <i>x</i><sup>2</sup></span></span> <i>dx</i> = [<span class=\"frac\"><span>2</span><span>3</span></span> arctan(<span class=\"frac\"><span><i>x</i></span><span>3</span></span>)]<sub>0</sub><sup>3</sup> = <span class=\"frac\"><span>2</span><span>3</span></span>(arctan 1 − arctan 0) = <span class=\"frac\"><span>2</span><span>3</span></span> · <span class=\"frac\"><span>π</span><span>4</span></span> = <b><span class=\"frac\"><span>π</span><span>6</span></span> ≈ 0.524</b>": "2 ∫<sub>0</sub><sup>3</sup> <span class=\"frac\"><span>1</span><span>3<sup>2</sup> + <i>x</i><sup>2</sup></span></span> <i>dx</i> = [<span class=\"frac\"><span>2</span><span>3</span></span> arctan(<span class=\"frac\"><span><i>x</i></span><span>3</span></span>)]<sub>0</sub><sup>3</sup> = <span class=\"frac\"><span>2</span><span>3</span></span>(arctan 1 − arctan 0) = <span class=\"frac\"><span>2</span><span>3</span></span> · <span class=\"frac\"><span>π</span><span>4</span></span> = <b><span class=\"frac\"><span>π</span><span>6</span></span> ≈ 0.524</b>",

    // Area with the y-axis and volumes of revolution > data-toc attribute
    "Volumes of revolution": "回転体の体積",

    // Area with the y-axis and volumes of revolution > h2
    "Area with the <i>y</i>-axis and volumes of revolution": "<i>y</i> 軸との間の面積と回転体の体積",

    // Area with the y-axis and volumes of revolution > p
    "When a region is bounded by a curve <span class=\"chem\">x = g(y)</span> and the <i>y</i>-axis between <span class=\"chem\">y = c</span> and <span class=\"chem\">y = d</span>, slicing horizontally into strips of thickness <span class=\"chem\">dy</span> gives the area <span class=\"chem\">A = int_c^d |x| dy</span>.": "領域が曲線 <span class=\"chem\">x = g(y)</span> と <i>y</i> 軸、および <span class=\"chem\">y = c</span> から <span class=\"chem\">y = d</span> の間で囲まれているとき、厚さ <span class=\"chem\">dy</span> の水平な短冊に分割すると面積は <span class=\"chem\">A = int_c^d |x| dy</span> となります。",

    // Area with the y-axis and volumes of revolution > p
    "If we rotate that region through <span class=\"chem\">2pi</span> radians (<span class=\"chem\">360°</span>) about one of the coordinate axes, each thin slice sweeps out a circular disc of radius <span class=\"chem\">R</span> and area <span class=\"chem\">pi R^2</span>:": "その領域を座標軸の周りに <span class=\"chem\">2pi</span> ラジアン（<span class=\"chem\">360°</span>）回転させると、各薄い短冊は半径 <span class=\"chem\">R</span>、面積 <span class=\"chem\">pi R^2</span> の円板を描きます：",

    // Area with the y-axis and volumes of revolution > equation > maths line
    "<i>V</i><sub><i>x</i></sub> = π ∫<sub><i>a</i></sub><sup><i>b</i></sup> <i>y</i><sup>2</sup> <i>dx</i> (about the <i>x</i>-axis), <i>V</i><sub><i>y</i></sub> = π ∫<sub><i>c</i></sub><sup><i>d</i></sup> <i>x</i><sup>2</sup> <i>dy</i> (about the <i>y</i>-axis)": "<i>V</i><sub><i>x</i></sub> = π ∫<sub><i>a</i></sub><sup><i>b</i></sup> <i>y</i><sup>2</sup> <i>dx</i>（<i>x</i> 軸の周り）、<i>V</i><sub><i>y</i></sub> = π ∫<sub><i>c</i></sub><sup><i>d</i></sup> <i>x</i><sup>2</sup> <i>dy</i>（<i>y</i> 軸の周り）",

    // Area with the y-axis and volumes of revolution > equation > dt
    "V<sub>x</sub>": "V<sub>x</sub>",

    // Area with the y-axis and volumes of revolution > equation > dd
    "volume when rotated 2π radians about the <i>x</i>-axis (radius = <i>y</i>, limits are <i>x</i>-values)": "<i>x</i> 軸の周りに 2π ラジアン回転させた体積（半径 = <i>y</i>、積分区間は <i>x</i> の値）",

    // Area with the y-axis and volumes of revolution > equation > dt
    "V<sub>y</sub>": "V<sub>y</sub>",

    // Area with the y-axis and volumes of revolution > equation > dd
    "volume when rotated 2π radians about the <i>y</i>-axis (radius = <i>x</i>, limits are <i>y</i>-values)": "<i>y</i> 軸の周りに 2π ラジアン回転させた体積（半径 = <i>x</i>、積分区間は <i>y</i> の値）",

    // Area with the y-axis and volumes of revolution > h3
    "Hollow solids between two curves (the washer method)": "2 曲線間の空洞のある回転体",

    // Area with the y-axis and volumes of revolution > p
    "When the region enclosed between an outer curve <span class=\"chem\">y_{outer} = f(x)</span> and an inner curve <span class=\"chem\">y_{inner} = g(x)</span> (with <span class=\"chem\">f(x) &gt;= g(x) &gt;= 0</span>) is rotated about the <i>x</i>-axis, each vertical cross-section is a hollow ring (washer) whose area is the outer circle minus the inner hole:": "外側の曲線 <span class=\"chem\">y_{outer} = f(x)</span> と内側の曲線 <span class=\"chem\">y_{inner} = g(x)</span>（<span class=\"chem\">f(x) &gt;= g(x) &gt;= 0</span>）に囲まれた領域を <i>x</i> 軸の周りに回転させると、垂直な断面は外側の円から内側の穴を引いたドーナツ形（円環）になります：",

    // Area with the y-axis and volumes of revolution > p
    "<span class=\"chem\">V = pi int_a^b ([y_{outer}]^2 - [y_{inner}]^2) dx = pi int_a^b ([f(x)]^2 - [g(x)]^2) dx</span>.": "<span class=\"chem\">V = pi int_a^b ([y_{outer}]^2 - [y_{inner}]^2) dx = pi int_a^b ([f(x)]^2 - [g(x)]^2) dx</span>。",

    // Area with the y-axis and volumes of revolution > not needed for IB > li
    "<strong>Never square the difference!</strong> Writing <span class=\"chem\">pi int_a^b (y_1 - y_2)^2 dx</span> instead of <span class=\"chem\">pi int_a^b (y_1^2 - y_2^2) dx</span> is the most common volume mistake in IB HL exams. Always subtract the squared radii: <strong>outer squared minus inner squared</strong>.": "<strong>差を 2 乗してはいけません！</strong> <span class=\"chem\">pi int_a^b (y_1^2 - y_2^2) dx</span> の代わりに <span class=\"chem\">pi int_a^b (y_1 - y_2)^2 dx</span> と書いてしまうのが IB HL の体積問題で最も多いミスです。必ずそれぞれの 2 乗を引きます：<strong>（外側の 2 乗）−（内側の 2 乗）</strong>。",

    // Area with the y-axis and volumes of revolution > not needed for IB > li
    "<strong>Not needed for IB — Cylindrical shells:</strong> The cylindrical shell method (<span class=\"chem\">V = 2pi int_a^b x y dx</span>) often taught in other calculus courses and textbooks is <strong>not</strong> in the IB Math AA HL syllabus. For rotation about the <i>y</i>-axis, rearrange the curve for <span class=\"chem\">x^2</span> in terms of <i>y</i> and use <span class=\"chem\">V = pi int_c^d x^2 dy</span>.": "<strong>IB の範囲外 — 円筒殻法（バウムクーヘン積分）：</strong> 他の微積分の課程や教科書でよく教えられる円筒殻法（<span class=\"chem\">V = 2pi int_a^b x y dx</span>）は IB Math AA HL のシラバスに<strong>含まれません</strong>。<i>y</i> 軸の周りの回転では、式を変形して <span class=\"chem\">x^2</span> を <i>y</i> で表し、<span class=\"chem\">V = pi int_c^d x^2 dy</span> を使いましょう。",

    // Area with the y-axis and volumes of revolution > widget > data-title attribute
    "Volume of revolution disc & 3D solid explorer": "回転体の体積：円板分割と 3D 立体エクスプローラー",

    // Area with the y-axis and volumes of revolution > widget > data-kicker attribute
    "AHL 5.17 · Interactive": "AHL 5.17 · インタラクティブ",

    // Area with the y-axis and volumes of revolution > widget > figcaption
    "Left: the 2D profile <span class=\"chem\">y = f(x)</span> sliced into <i>N</i> rectangles of width <span class=\"chem\">Delta x</span>. Right: rotating each rectangle <span class=\"chem\">2pi</span> radians about the <i>x</i>-axis produces <i>N</i> circular discs of volume <span class=\"chem\">pi [f(x_i)]^2 Delta x</span>. Drag the 3D view to inspect the solid from any angle.": "左：幅 <span class=\"chem\">Delta x</span> の <i>N</i> 個の長方形に分割した 2 次元断面 <span class=\"chem\">y = f(x)</span>。右：各長方形を <i>x</i> 軸の周りに <span class=\"chem\">2pi</span> ラジアン回転させると、体積 <span class=\"chem\">pi [f(x_i)]^2 Delta x</span> の円板が <i>N</i> 個できます。3D ビューをドラッグして好きな角度から立体を観察しましょう。",

    // Area with the y-axis and volumes of revolution > worked example > h3
    "Volume of revolution between two curves about the x-axis": "2 曲線に囲まれた領域の x 軸周りの回転体の体積",

    // Area with the y-axis and volumes of revolution > worked example > p
    "The region <i>R</i> is enclosed by the curve <span class=\"chem\">y = sqrt(x)</span> and the line <span class=\"chem\">y = x / 2</span> in the first quadrant. Find the exact volume of the solid formed when <i>R</i> is rotated through <span class=\"chem\">2pi</span> radians about the <i>x</i>-axis. <strong>[6 marks]</strong>": "第 1 象限において、曲線 <span class=\"chem\">y = sqrt(x)</span> と直線 <span class=\"chem\">y = x / 2</span> で囲まれた領域を <i>R</i> とする。<i>R</i> を <i>x</i> 軸の周りに <span class=\"chem\">2pi</span> ラジアン回転させてできる立体の正確な体積を求めなさい (Find)。 <strong>[6 marks]</strong>",

    // Area with the y-axis and volumes of revolution > worked example > data-title attribute
    "Find the x-coordinates of the points of intersection": "交点の x 座標を求める",

    // Area with the y-axis and volumes of revolution > worked example > p
    "Equating the two curves gives the limits of integration a and b along the x-axis.": "2 つの式を等しいとおくと、x 軸に沿った積分区間 a と b が得られます。",

    // Area with the y-axis and volumes of revolution > worked example > maths line
    "√<i>x</i> = <span class=\"frac\"><span><i>x</i></span><span>2</span></span> ⇒ <i>x</i> = <span class=\"frac\"><span><i>x</i><sup>2</sup></span><span>4</span></span> ⇒ <i>x</i><sup>2</sup> − 4<i>x</i> = 0 ⇒ <i>x</i> = 0 or <i>x</i> = 4 <b>[M1 A1]</b>": "√<i>x</i> = <span class=\"frac\"><span><i>x</i></span><span>2</span></span> ⇒ <i>x</i> = <span class=\"frac\"><span><i>x</i><sup>2</sup></span><span>4</span></span> ⇒ <i>x</i><sup>2</sup> − 4<i>x</i> = 0 ⇒ <i>x</i> = 0 または <i>x</i> = 4 <b>[M1 A1]</b>",

    // Area with the y-axis and volumes of revolution > worked example > data-title attribute
    "Set up the washer integral π ∫ (y_outer² − y_inner²) dx": "円環の積分 π ∫ (y_outer² − y_inner²) dx を立てる",

    // Area with the y-axis and volumes of revolution > worked example > p
    "On [0, 4], √x ≥ x/2, so y_outer = √x and y_inner = x/2. Square each radius separately before subtracting.": "[0, 4] では √x ≥ x/2 なので、y_outer = √x、y_inner = x/2 です。引く前にそれぞれの半径を別々に 2 乗します。",

    // Area with the y-axis and volumes of revolution > worked example > data-title attribute
    "Anti-differentiate and evaluate at the limits": "不定積分を求め、積分区間の値を代入する",

    // Area with the y-axis and volumes of revolution > worked example > p
    "Use the power rule and substitute x = 4 and x = 0.": "べき関数の積分公式を使い、x = 4 と x = 0 を代入します。",

    // Area with the y-axis and volumes of revolution > try it > p
    "The region bounded by the curve <span class=\"chem\">y = x^2</span>, the <i>y</i>-axis, and the horizontal line <span class=\"chem\">y = 4</span> in the first quadrant is rotated through <span class=\"chem\">2pi</span> radians about the <strong><i>y</i>-axis</strong>. Find the volume of the solid generated (type an exact multiple of <span class=\"mono\">pi</span> such as <span class=\"mono\">3*pi</span>, or a 3 s.f. decimal).": "第 1 象限において、曲線 <span class=\"chem\">y = x^2</span>、<i>y</i> 軸、および水平な直線 <span class=\"chem\">y = 4</span> で囲まれた領域を <strong><i>y</i> 軸</strong>の周りに <span class=\"chem\">2pi</span> ラジアン回転させる。できる立体の体積を求めなさい (Find)（<span class=\"mono\">3*pi</span> のような <span class=\"mono\">pi</span> の正確な倍数、または有効数字 3 桁の小数で入力）。",

    // Area with the y-axis and volumes of revolution > try it > li
    "For rotation about the <i>y</i>-axis, use <span class=\"chem\">V = pi int_c^d x^2 dy</span>. Since <span class=\"chem\">y = x^2</span>, we can substitute <span class=\"chem\">x^2 = y</span> directly!": "<i>y</i> 軸の周りの回転なので <span class=\"chem\">V = pi int_c^d x^2 dy</span> を使います。<span class=\"chem\">y = x^2</span> なので <span class=\"chem\">x^2 = y</span> をそのまま代入できます！",

    // Area with the y-axis and volumes of revolution > try it > li
    "Integrate with respect to <i>y</i> from <span class=\"chem\">y = 0</span> to <span class=\"chem\">y = 4</span>: <span class=\"chem\">V = pi int_0^4 y dy = pi [y^2 / 2]_0^4</span>.": "<span class=\"chem\">y = 0</span> から <span class=\"chem\">y = 4</span> まで <i>y</i> で積分します：<span class=\"chem\">V = pi int_0^4 y dy = pi [y^2 / 2]_0^4</span>。",

    // Quick practice > data-toc attribute
    "Practice": "演習",

    // Quick practice > h2
    "Quick practice": "確認問題",

    // widget string (assets/js/widgets-t5-3.js)
    "Indeterminate 0/0 limit": "0/0 の不定形の極限",

    // widget string (assets/js/widgets-t5-3.js)
    "lim (x→0) sin(2x) / ln(1 + x)": "lim (x→0) sin(2x) / ln(1 + x)",

    // widget string (assets/js/widgets-t5-3.js)
    "lim (x→0) (eˣ − 1) / sin(x)": "lim (x→0) (eˣ − 1) / sin(x)",

    // widget string (assets/js/widgets-t5-3.js)
    "lim (x→1) ln(x) / (x² − 1)": "lim (x→1) ln(x) / (x² − 1)",

    // widget string (assets/js/widgets-t5-3.js)
    "lim (x→π/2) cos(x) / (2x − π)": "lim (x→π/2) cos(x) / (2x − π)",

    // widget string (assets/js/widgets-t5-3.js)
    "Zoom magnification around x = a": "x = a 周辺の拡大倍率",

    // widget string (assets/js/widgets-t5-3.js)
    "At x = a": "x = a において",

    // widget string (assets/js/widgets-t5-3.js)
    "Sample ratio f(x)/g(x)": "値の比 f(x)/g(x)",

    // widget string (assets/js/widgets-t5-3.js)
    "Tangent slope ratio f′(a)/g′(a)": "接線の傾きの比 f′(a)/g′(a)",

    // widget string (assets/js/widgets-t5-3.js)
    "Linearization gap": "線形近似の誤差",

    // widget string (assets/js/widgets-t5-3.js)
    "Local linearization of f(x) and g(x) near x = a": "x = a 付近における f(x) と g(x) の局所線形近似",

    // widget string (assets/js/widgets-t5-3.js)
    "Tangent f′(a)(x − a)": "接線 f′(a)(x − a)",

    // widget string (assets/js/widgets-t5-3.js)
    "Tangent g′(a)(x − a)": "接線 g′(a)(x − a)",

    // widget string (assets/js/widgets-t5-3.js)
    "Solid profile": "立体の断面形状",

    // widget string (assets/js/widgets-t5-3.js)
    "Disc: y = √x": "円板：y = √x",

    // widget string (assets/js/widgets-t5-3.js)
    "Disc: y = 0.5x (cone)": "円板：y = 0.5x（円錐）",

    // widget string (assets/js/widgets-t5-3.js)
    "Disc: y = sin(x) + 0.8": "円板：y = sin(x) + 0.8",

    // widget string (assets/js/widgets-t5-3.js)
    "Washer: outer y = √x, inner y = 0.5x": "円環：外側 y = √x、内側 y = 0.5x",

    // widget string (assets/js/widgets-t5-3.js)
    "Upper limit b": "上端 b",

    // widget string (assets/js/widgets-t5-3.js)
    "Number of discs N": "円板の個数 N",

    // widget string (assets/js/widgets-t5-3.js)
    "Riemann N-disc sum": "N 個の円板のリーマン和",

    // widget string (assets/js/widgets-t5-3.js)
    "Exact integral V = π ∫ y² dx": "正確な積分値 V = π ∫ y² dx",

    // widget string (assets/js/widgets-t5-3.js)
    "Exact integral V = π ∫ (R² − r²) dx (R outer, r inner radius)": "正確な積分値 V = π ∫ (R² − r²) dx（R は外半径、r は内半径）",

    // widget string (assets/js/widgets-t5-3.js)
    "Approximation error": "近似誤差",

    // widget string (assets/js/widgets-t5-3.js)
    "2D cross-section and Riemann slices": "2D 断面図とリーマン分割",

    // widget string (assets/js/widgets-t5-3.js)
    "Outer radius R(x)": "外半径 R(x)",

    // widget string (assets/js/widgets-t5-3.js)
    "Inner radius r(x)": "内半径 r(x)",

    // widget string (assets/js/widgets-t5-3.js)
    "3D solid of revolution about the x-axis": "x 軸周りの 3D 回転体",

  }
});
