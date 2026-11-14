/* t5-3 — zh-Hant translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't5-3', {
  strings: {

    // page title (browser tab)
    "5.3 First principles, L’Hôpital, implicit, parts and volumes | Analysis Lab": "5.3 基本原理、洛必達法則、隱函數微分、分部積分與旋轉體體積 | Analysis Lab",

    // First principles, L’Hôpital, implicit, parts and volumes > page header > p
    "Topic 5.3 · AHL 5.12–5.17": "課題 5.3 · AHL 5.12–5.17",

    // First principles, L’Hôpital, implicit, parts and volumes > page header > h1
    "First principles, L’Hôpital, implicit, parts and volumes": "基本原理、洛必達法則、隱函數微分、分部積分與旋轉體體積",

    // First principles, L’Hôpital, implicit, parts and volumes > page header > span
    "How do local linear approximations unlock indeterminate limits, implicit curves, and the exact volume of three-dimensional solids of revolution?": "局部線性近似如何解鎖不定型極限、隱函數曲線，以及三維旋轉體的準確體積？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "學習清單",

    // What you need to be able to do > h2
    "What you need to be able to do": "你需要掌握的能力",

    // What you need to be able to do > checklist > Additional HL > span
    "Understand continuity and differentiability, and find derivatives from first principles <span class=\"chem\">f'(x) = lim_{h-&gt;0} (f(x + h) - f(x))/h</span> and higher derivatives <span class=\"chem\">f^{(n)}(x)</span>.": "理解連續性與可微性，並從基本原理 <span class=\"chem\">f'(x) = lim_{h-&gt;0} (f(x + h) - f(x))/h</span> 求導數及高階導數 <span class=\"chem\">f^{(n)}(x)</span>。",

    // What you need to be able to do > checklist > Additional HL > span
    "Evaluate indeterminate limits of the form <span class=\"chem\">0/0</span> or <span class=\"chem\">infty/infty</span> using L’Hôpital’s rule, including repeated applications and algebraic rearrangement.": "利用洛必達法則計算 <span class=\"chem\">0/0</span> 或 <span class=\"chem\">infty/infty</span> 型不定極限，包括重複應用及代數變形。",

    // What you need to be able to do > checklist > Additional HL > span
    "Differentiate implicit relations <span class=\"chem\">F(x, y) = 0</span> to find gradients, tangents, horizontal (<span class=\"chem\">dy/dx = 0</span>) and vertical (<span class=\"chem\">dx/dy = 0</span>) tangents, and solve related rates problems <span class=\"chem\">dy/dt = (dy/dx)(dx/dt)</span>.": "對隱函數關係 <span class=\"chem\">F(x, y) = 0</span> 求導以求斜率、切線、水平切線（<span class=\"chem\">dy/dx = 0</span>）與鉛垂切線（<span class=\"chem\">dx/dy = 0</span>），並解相關變率問題 <span class=\"chem\">dy/dt = (dy/dx)(dx/dt)</span>。",

    // What you need to be able to do > checklist > Additional HL > span
    "Differentiate and integrate reciprocal trig (<span class=\"chem\">tan x, sec x, cosec x, cot x</span>), general exponential/log (<span class=\"chem\">a^x, log_a x</span>), and inverse trig functions (<span class=\"chem\">arcsin x, arccos x, arctan x</span>).": "對倒數三角函數（<span class=\"chem\">tan x, sec x, cosec x, cot x</span>）、一般指數與對數函數（<span class=\"chem\">a^x, log_a x</span>）及反三角函數（<span class=\"chem\">arcsin x, arccos x, arctan x</span>）求導與積分。",

    // What you need to be able to do > checklist > Additional HL > span
    "Integrate using formal substitution <span class=\"chem\">u = g(x)</span> (changing definite limits), integration by parts <span class=\"chem\">int u dv = uv - int v du</span> (including repeated and cyclic parts), partial fractions, and double-angle identities.": "運用正式代換法 <span class=\"chem\">u = g(x)</span>（更換定積分上下限）、分部積分法 <span class=\"chem\">int u dv = uv - int v du</span>（包括重複與循環分部積分）、部分分式及二倍角恒等式進行積分。",

    // What you need to be able to do > checklist > Additional HL > span
    "Calculate areas bounded by the <i>y</i>-axis <span class=\"chem\">int_c^d |x| dy</span> and volumes of revolution about the <i>x</i>-axis <span class=\"chem\">pi int_a^b y^2 dx</span> or <i>y</i>-axis <span class=\"chem\">pi int_c^d x^2 dy</span>, including hollow washers between two curves.": "計算以 <i>y</i> 軸為界的面積 <span class=\"chem\">int_c^d |x| dy</span>，以及繞 <i>x</i> 軸（<span class=\"chem\">pi int_a^b y^2 dx</span>）或 <i>y</i> 軸（<span class=\"chem\">pi int_c^d x^2 dy</span>）旋轉的旋轉體體積，包括兩條曲線間的中空墊圈。",

    // Question decoder: Master integration &amp; advanced differen > data-toc attribute
    "Question decoder": "題型解碼",

    // Question decoder: Master integration &amp; advanced differen > h2
    "Question decoder: Master integration &amp; advanced differentiation classifier": "題型解碼：積分與進階微分總分類器",

    // Question decoder: Master integration &amp; advanced differen > p
    "In HL calculus exams, no question tells you <em>which</em> integration or differentiation rule to apply. Use the two decision tables below to spot the exact method within five seconds.": "在 HL 微積分考試中，題目不會告訴你該用<em>哪條</em>積分或求導法則。利用以下兩張決策表，在五秒內辨識準確的方法。",

    // Question decoder: Master integration &amp; advanced differen > table > caption
    "Master integration classifier — how to spot which integration technique to use": "積分方法總分類表 — 如何辨識應採用的積分技巧",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "Integrand pattern you see": "題目中的被積函數模式",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "Technique &amp; Formula Booklet link": "技巧與公式手冊對應",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "Key setup &amp; Paper 1 vs Paper 2 strategy": "關鍵列式與 Paper 1／Paper 2 策略",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "1. Standard AHL booklet forms:<br><span class=\"chem\">1/(x^2 + a^2)</span>, <span class=\"chem\">1/sqrt(a^2 - x^2)</span>, or <span class=\"chem\">tan x = sin x / cos x</span>": "1. AHL 公式手冊標準形式：<br><span class=\"chem\">1/(x^2 + a^2)</span>、<span class=\"chem\">1/sqrt(a^2 - x^2)</span> 或 <span class=\"chem\">tan x = sin x / cos x</span>",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "<strong>Direct Booklet / Log inspection</strong> (AHL 5.15)<br><span class=\"chem\">int 1/(a^2 + x^2) dx = (1/a) arctan(x/a) + C</span><br><span class=\"chem\">int 1/sqrt(a^2 - x^2) dx = arcsin(x/a) + C</span><br><span class=\"chem\">int tan x dx = -ln|cos x| + C = ln|sec x| + C</span>": "<strong>直接套用公式手冊／對數觀察法</strong>（AHL 5.15）<br><span class=\"chem\">int 1/(a^2 + x^2) dx = (1/a) arctan(x/a) + C</span><br><span class=\"chem\">int 1/sqrt(a^2 - x^2) dx = arcsin(x/a) + C</span><br><span class=\"chem\">int tan x dx = -ln|cos x| + C = ln|sec x| + C</span>",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "If the denominator is a quadratic <span class=\"chem\">x^2 + bx + c</span> with <strong>no <i>x</i> on top</strong> and negative discriminant, <strong>complete the square</strong> into <span class=\"chem\">(x + h)^2 + a^2</span> and apply the <span class=\"chem\">arctan</span> formula. Notice <span class=\"chem\">arcsin(x/a)</span> has <strong>no</strong> <span class=\"chem\">1/a</span> in front!": "若分母是二次式 <span class=\"chem\">x^2 + bx + c</span>、<strong>分子沒有 <i>x</i></strong> 且判別式為負，先<strong>配方</strong>成 <span class=\"chem\">(x + h)^2 + a^2</span> 再套用 <span class=\"chem\">arctan</span> 公式。留意 <span class=\"chem\">arcsin(x/a)</span> 前面<strong>沒有</strong> <span class=\"chem\">1/a</span>！",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "2. Composite function times inner derivative:<br><span class=\"chem\">int f(g(x)) g'(x) dx</span> or <span class=\"chem\">int g'(x)/g(x) dx</span>": "2. 複合函數乘以內層導數：<br><span class=\"chem\">int f(g(x)) g'(x) dx</span> 或 <span class=\"chem\">int g'(x)/g(x) dx</span>",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "<strong>Formal substitution <span class=\"chem\">u = g(x)</span></strong> (AHL 5.16)<br>Replace <span class=\"chem\">g'(x) dx = du</span>.<br>Special case: <span class=\"chem\">int g'(x)/g(x) dx = ln|g(x)| + C</span>.": "<strong>正式代換法 <span class=\"chem\">u = g(x)</span></strong>（AHL 5.16）<br>以 <span class=\"chem\">g'(x) dx = du</span> 替換。<br>特例：<span class=\"chem\">int g'(x)/g(x) dx = ln|g(x)| + C</span>。",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "<strong>Paper 1 definite integrals</strong>: Always transform the limits <span class=\"chem\">x = a -&gt; u = g(a)</span> and <span class=\"chem\">x = b -&gt; u = g(b)</span> immediately so you never have to substitute back to <i>x</i>.": "<strong>Paper 1 定積分</strong>：務必立即把積分限轉為 <span class=\"chem\">x = a -&gt; u = g(a)</span> 與 <span class=\"chem\">x = b -&gt; u = g(b)</span>，便無須代回 <i>x</i>。",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "3. Rational fraction with factorable quadratic denominator:<br><span class=\"chem\">int (px + q)/((x - a)(x - b)) dx</span>": "3. 分母可因式分解的有理分式：<br><span class=\"chem\">int (px + q)/((x - a)(x - b)) dx</span>",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "<strong>Partial fractions</strong> (AHL 1.11 + 5.16)<br>Split into <span class=\"chem\">int (A/(x - a) + B/(x - b)) dx</span><br><span class=\"chem\">= A ln|x - a| + B ln|x - b| + C</span>.": "<strong>部分分式</strong>（AHL 1.11 + 5.16）<br>拆分為 <span class=\"chem\">int (A/(x - a) + B/(x - b)) dx</span><br><span class=\"chem\">= A ln|x - a| + B ln|x - b| + C</span>。",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "If the degree of the numerator is ≥ the denominator (e.g. <span class=\"chem\">x^2/(x^2 - 1)</span>), perform <strong>polynomial long division</strong> (or algebraic splitting) first!": "若分子的次數 ≥ 分母的次數（例如 <span class=\"chem\">x^2/(x^2 - 1)</span>），必須先進行<strong>多項式長除法</strong>（或代數拆項）！",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "4. Product of two different families (<span class=\"chem\">x^n e^x</span>, <span class=\"chem\">x^n sin x</span>, <span class=\"chem\">x^n ln x</span>) or lone <span class=\"chem\">ln x</span>, <span class=\"chem\">arcsin x</span>, <span class=\"chem\">arctan x</span>": "4. 兩類不同函數的乘積（<span class=\"chem\">x^n e^x</span>、<span class=\"chem\">x^n sin x</span>、<span class=\"chem\">x^n ln x</span>）或單獨的 <span class=\"chem\">ln x</span>、<span class=\"chem\">arcsin x</span>、<span class=\"chem\">arctan x</span>",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "<strong>Integration by parts</strong> (AHL 5.16)<br><span class=\"chem\">int u (dv/dx) dx = uv - int v (du/dx) dx</span><br>Choose <i>u</i> using <strong>LIATE</strong> priority: <b>L</b>og, <b>I</b>nverse trig, <b>A</b>lgebraic (<span class=\"chem\">x^n</span>), <b>T</b>rig, <b>E</b>xponential.": "<strong>分部積分法</strong>（AHL 5.16）<br><span class=\"chem\">int u (dv/dx) dx = uv - int v (du/dx) dx</span><br>按 <strong>LIATE</strong> 優先次序選擇 <i>u</i>：<b>L</b>對數、<b>I</b>反三角、<b>A</b>代數（<span class=\"chem\">x^n</span>）、<b>T</b>三角、<b>E</b>指數。",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "For lone <span class=\"chem\">int ln x dx</span> or <span class=\"chem\">int arctan x dx</span>, choose <span class=\"chem\">u = ln x</span> (or <span class=\"chem\">arctan x</span>) and <span class=\"chem\">dv/dx = 1</span> (so <span class=\"chem\">v = x</span>).<br>For cyclic <span class=\"chem\">I = int e^{ax} sin(bx) dx</span>, integrate by parts <strong>twice</strong> with the same family choice and solve the linear equation for <i>I</i>.": "對於單獨的 <span class=\"chem\">int ln x dx</span> 或 <span class=\"chem\">int arctan x dx</span>，選 <span class=\"chem\">u = ln x</span>（或 <span class=\"chem\">arctan x</span>）及 <span class=\"chem\">dv/dx = 1</span>（故 <span class=\"chem\">v = x</span>）。<br>對於循環型 <span class=\"chem\">I = int e^{ax} sin(bx) dx</span>，以相同函數類別選擇作分部積分<strong>兩次</strong>，再解關於 <i>I</i> 的線性方程。",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "5. Even power of sine or cosine:<br><span class=\"chem\">int sin^2(kx) dx</span> or <span class=\"chem\">int cos^2(kx) dx</span>": "5. 正弦或餘弦的偶數次冪：<br><span class=\"chem\">int sin^2(kx) dx</span> 或 <span class=\"chem\">int cos^2(kx) dx</span>",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "<strong>Double-angle identity</strong> (SL 3.6 + AHL 5.16)<br><span class=\"chem\">cos^2 x = (1 + cos 2x)/2</span><br><span class=\"chem\">sin^2 x = (1 - cos 2x)/2</span>": "<strong>二倍角恒等式</strong>（SL 3.6 + AHL 5.16）<br><span class=\"chem\">cos^2 x = (1 + cos 2x)/2</span><br><span class=\"chem\">sin^2 x = (1 - cos 2x)/2</span>",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "Essential on Paper 1 whenever finding the volume of revolution <span class=\"chem\">pi int y^2 dx</span> of <span class=\"chem\">y = sin x</span> or <span class=\"chem\">y = cos x</span>!": "在 Paper 1 求 <span class=\"chem\">y = sin x</span> 或 <span class=\"chem\">y = cos x</span> 的旋轉體體積 <span class=\"chem\">pi int y^2 dx</span> 時不可或缺！",

    // Question decoder: Master integration &amp; advanced differen > table > caption
    "Advanced differentiation &amp; limits decoder": "進階微分與極限解碼表",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "What the exam question says": "題目中的常見字眼",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "What it means (formula &amp; setup)": "實際含義（公式與列式）",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "Crucial markscheme checkpoint": "評分標準關鍵得分點",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "“Differentiate <span class=\"chem\">f(x)</span> from first principles”": "「從基本原理求 <span class=\"chem\">f(x)</span> 的導數」",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "Write <span class=\"chem\">f'(x) = lim_{h-&gt;0} (f(x + h) - f(x))/h</span>, expand, cancel every term without <i>h</i>, divide by <i>h</i>, then evaluate as <span class=\"chem\">h -&gt; 0</span>.": "寫出 <span class=\"chem\">f'(x) = lim_{h-&gt;0} (f(x + h) - f(x))/h</span>，展開並消去所有不含 <i>h</i> 的項，除以 <i>h</i>，再令 <span class=\"chem\">h -&gt; 0</span> 求值。",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "Keep writing <span class=\"chem\">lim_{h-&gt;0}</span> on <strong>every line</strong> until you actually substitute <span class=\"chem\">h = 0</span>. Dropping the limit notation early loses the final reasoning mark.": "在實際代入 <span class=\"chem\">h = 0</span> 之前，<strong>每一行</strong>都要繼續寫出 <span class=\"chem\">lim_{h-&gt;0}</span>。過早省去極限符號會失去最後的推理分。",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "“Find <span class=\"chem\">lim_{x-&gt;a} f(x)/g(x)</span>”": "「求 <span class=\"chem\">lim_{x-&gt;a} f(x)/g(x)</span>」",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "First substitute <span class=\"chem\">x = a</span>. Only if you get the indeterminate form <span class=\"chem\">0/0</span> or <span class=\"chem\">infty/infty</span>, apply <strong>L’Hôpital’s rule</strong>: <span class=\"chem\">lim_{x-&gt;a} f'(x)/g'(x)</span>.": "先代入 <span class=\"chem\">x = a</span>。僅當出現 <span class=\"chem\">0/0</span> 或 <span class=\"chem\">infty/infty</span> 不定型時，才套用<strong>洛必達法則</strong>：<span class=\"chem\">lim_{x-&gt;a} f'(x)/g'(x)</span>。",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "Explicitly state <em>“Indeterminate form 0/0, apply L’Hôpital’s rule”</em>. Differentiate numerator and denominator <strong>separately</strong>—do NOT use the quotient rule!": "明確寫出<em>「不定型 0/0，應用洛必達法則」</em>。分子與分母<strong>分開</strong>求導——切勿使用商法則！",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "Equation with <i>x</i> and <i>y</i> mixed, e.g. <span class=\"chem\">x^2 + xy + y^3 = 7</span>": "<i>x</i> 與 <i>y</i> 混合的方程，例如 <span class=\"chem\">x^2 + xy + y^3 = 7</span>",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "<strong>Implicit differentiation</strong>: differentiate every term with respect to <i>x</i>. Multiply every <i>y</i>-derivative by <span class=\"chem\">dy/dx</span> (chain rule), and use the product rule on <span class=\"chem\">xy</span>.": "<strong>隱函數微分</strong>：每一項皆對 <i>x</i> 求導。每個含 <i>y</i> 的導數都要乘以 <span class=\"chem\">dy/dx</span>（鏈式法則），並對 <span class=\"chem\">xy</span> 使用乘積法則。",

    // Question decoder: Master integration &amp; advanced differen > table > li
    "Horizontal tangent (stationary point): set numerator of <span class=\"chem\">dy/dx</span> to <span class=\"chem\">0</span>.": "水平切線（駐點）：令 <span class=\"chem\">dy/dx</span> 的分子等於 <span class=\"chem\">0</span>。",

    // Question decoder: Master integration &amp; advanced differen > table > li
    "Vertical tangent (parallel to <i>y</i>-axis): set denominator of <span class=\"chem\">dy/dx</span> to <span class=\"chem\">0</span> (i.e. <span class=\"chem\">dx/dy = 0</span>).": "鉛垂切線（平行於 <i>y</i> 軸）：令 <span class=\"chem\">dy/dx</span> 的分母等於 <span class=\"chem\">0</span>（即 <span class=\"chem\">dx/dy = 0</span>）。",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "“Water is poured at a constant rate of <span class=\"unit\">5 cm3 s-1</span>… find the rate at which the height is increasing”": "「水以恒定速率 <span class=\"unit\">5 cm3 s-1</span> 注入……求高度增加的變率」",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "<strong>Related rates</strong> via the chain rule:<br><span class=\"chem\">dh/dt = (dh/dV) × (dV/dt)</span>.": "透過鏈式法則求<strong>相關變率</strong>：<br><span class=\"chem\">dh/dt = (dh/dV) × (dV/dt)</span>。",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "In a cone, eliminate the radius <i>r</i> using <strong>similar triangles</strong> (<span class=\"chem\">r/h = R/H</span>) <em>before</em> differentiating <span class=\"chem\">V = (1/3)pi r^2 h</span> with respect to <i>h</i>!": "在圓錐體問題中，<em>先</em>利用<strong>相似三角形</strong>（<span class=\"chem\">r/h = R/H</span>）消去半徑 <i>r</i>，再將 <span class=\"chem\">V = (1/3)pi r^2 h</span> 對 <i>h</i> 求導！",

    // First principles, continuity, higher derivatives and L’Hôpit > data-toc attribute
    "First principles & L'Hôpital": "基本原理與洛必達法則",

    // First principles, continuity, higher derivatives and L’Hôpit > h2
    "First principles, continuity, higher derivatives and L’Hôpital’s rule": "基本原理、連續性、高階導數與洛必達法則",

    // First principles, continuity, higher derivatives and L’Hôpit > p
    "A function <span class=\"chem\">f(x)</span> is <dfn data-def=\"A function is continuous at x = a if f(a) is defined, the two-sided limit as x approaches a exists, and lim_{x-&gt;a} f(x) = f(a).\">continuous</dfn> at <span class=\"chem\">x = a</span> if its graph has no holes, jumps, or vertical asymptotes there: <span class=\"chem\">lim_{x-&gt;a^-} f(x) = lim_{x-&gt;a^+} f(x) = f(a)</span>. It is <dfn data-def=\"A function is differentiable at x = a if the derivative limit from the left equals the derivative limit from the right.\">differentiable</dfn> at <span class=\"chem\">x = a</span> if the secant gradient approaches the same finite value from both the left and the right.": "若函數 <span class=\"chem\">f(x)</span> 的圖像在該處沒有空洞、跳躍或鉛垂漸近線，即 <span class=\"chem\">lim_{x-&gt;a^-} f(x) = lim_{x-&gt;a^+} f(x) = f(a)</span>，則它在 <span class=\"chem\">x = a</span> 處<dfn data-def=\"若 f(a) 有定義、當 x 趨近 a 時雙側極限存在，且 lim_{x->a} f(x) = f(a)，則函數在 x = a 處連續。\">連續 <span class=\"en-term\">(continuous)</span></dfn>。若割線斜率從左右兩側趨近同一個有限值，則它在 <span class=\"chem\">x = a</span> 處<dfn data-def=\"若從左側求得的導數極限等於從右側求得的導數極限，則函數在 x = a 處可微。\">可微 <span class=\"en-term\">(differentiable)</span></dfn>。",

    // First principles, continuity, higher derivatives and L’Hôpit > data-def attribute
    "A function is continuous at x = a if f(a) is defined, the two-sided limit as x approaches a exists, and lim_{x->a} f(x) = f(a).": "若 f(a) 有定義、當 x 趨近 a 時雙側極限存在，且 lim_{x->a} f(x) = f(a)，則函數在 x = a 處連續。",

    // First principles, continuity, higher derivatives and L’Hôpit > data-def attribute
    "A function is differentiable at x = a if the derivative limit from the left equals the derivative limit from the right.": "若從左側求得的導數極限等於從右側求得的導數極限，則函數在 x = a 處可微。",

    // First principles, continuity, higher derivatives and L’Hôpit > key idea > p
    "<strong>Differentiability vs continuity:</strong> Every function that is differentiable at <span class=\"chem\">x = a</span> is automatically continuous at <span class=\"chem\">x = a</span>. However, the converse is false: a function with a sharp corner or cusp (such as <span class=\"chem\">f(x) = |x|</span> at <span class=\"chem\">x = 0</span>, where the left gradient is <span class=\"chem\">-1</span> and the right gradient is <span class=\"chem\">+1</span>) is continuous but <strong>not differentiable</strong> at that point.": "<strong>可微性與連續性：</strong>凡在 <span class=\"chem\">x = a</span> 處可微的函數，在 <span class=\"chem\">x = a</span> 處必定連續。然而逆命題不成立：具有尖角或尖點的函數（例如 <span class=\"chem\">f(x) = |x|</span> 在 <span class=\"chem\">x = 0</span> 處，左斜率為 <span class=\"chem\">-1</span> 而右斜率為 <span class=\"chem\">+1</span>）在該點連續但<strong>不可微</strong>。",

    // First principles, continuity, higher derivatives and L’Hôpit > h3
    "Differentiation from first principles": "從基本原理求導",

    // First principles, continuity, higher derivatives and L’Hôpit > p
    "When an exam question says <em>“find <span class=\"chem\">f'(x)</span> from first principles”</em>, using shortcut derivative rules earns <strong>zero marks</strong>. You must start from the Formula Booklet limit definition:": "當考題要求<em>「從基本原理求 <span class=\"chem\">f'(x)</span>」</em>時，使用求導捷徑法則將得 <strong>0 分</strong>。你必須從公式手冊中的極限定義出發：",

    // First principles, continuity, higher derivatives and L’Hôpit > equation > dd
    "horizontal step between <i>x</i> and <i>x</i> + <i>h</i>": "<i>x</i> 與 <i>x</i> + <i>h</i> 之間的水平步長",

    // First principles, continuity, higher derivatives and L’Hôpit > equation > dd
    "gradient of the secant chord through (<i>x</i>, <i>f</i>(<i>x</i>)) and (<i>x</i> + <i>h</i>, <i>f</i>(<i>x</i> + <i>h</i>))": "通過 (<i>x</i>, <i>f</i>(<i>x</i>)) 與 (<i>x</i> + <i>h</i>, <i>f</i>(<i>x</i> + <i>h</i>)) 的割線斜率",

    // First principles, continuity, higher derivatives and L’Hôpit > p
    "Three algebraic techniques handle every first-principles proof in IB AA HL:": "以下三種代數技巧可應付 IB AA HL 的所有基本原理證明題：",

    // First principles, continuity, higher derivatives and L’Hôpit > li
    "<strong>Polynomials <span class=\"chem\">x^n</span></strong>: Expand <span class=\"chem\">(x + h)^n</span> using the binomial theorem, cancel <span class=\"chem\">x^n</span>, factor out <i>h</i>, and let <span class=\"chem\">h -&gt; 0</span>.": "<strong>多項式 <span class=\"chem\">x^n</span></strong>：利用二項式定理展開 <span class=\"chem\">(x + h)^n</span>，消去 <span class=\"chem\">x^n</span>，抽出 <i>h</i>，再令 <span class=\"chem\">h -&gt; 0</span>。",

    // First principles, continuity, higher derivatives and L’Hôpit > li
    "<strong>Fractions like <span class=\"chem\">1/x</span> or <span class=\"chem\">1/x^2</span></strong>: Combine <span class=\"chem\">1/(x + h) - 1/x = (x - (x + h))/(x(x + h)) = -h/(x(x + h))</span> over a common denominator so <i>h</i> cancels cleanly.": "<strong>分式如 <span class=\"chem\">1/x</span> 或 <span class=\"chem\">1/x^2</span></strong>：通分合併 <span class=\"chem\">1/(x + h) - 1/x = (x - (x + h))/(x(x + h)) = -h/(x(x + h))</span>，使 <i>h</i> 順利約去。",

    // First principles, continuity, higher derivatives and L’Hôpit > li
    "<strong>Square roots like <span class=\"chem\">sqrt(x)</span></strong>: Multiply numerator and denominator by the conjugate <span class=\"chem\">sqrt(x + h) + sqrt(x)</span> so the numerator becomes <span class=\"chem\">(x + h) - x = h</span>.": "<strong>平方根如 <span class=\"chem\">sqrt(x)</span></strong>：分子與分母同乘共軛式 <span class=\"chem\">sqrt(x + h) + sqrt(x)</span>，使分子化為 <span class=\"chem\">(x + h) - x = h</span>。",

    // First principles, continuity, higher derivatives and L’Hôpit > h3
    "Higher derivatives <span class=\"chem\">f^{(n)}(x)</span>": "高階導數 <span class=\"chem\">f^{(n)}(x)</span>",

    // First principles, continuity, higher derivatives and L’Hôpit > p
    "The <i>n</i>-th derivative of <span class=\"chem\">y = f(x)</span> is written <span class=\"chem\">f^{(n)}(x)</span> or <span class=\"chem\">d^n y / dx^n</span>. On Paper 1 and Paper 3, you are often asked to compute <span class=\"chem\">f'(x), f''(x), f'''(x)</span>, spot a pattern (such as powers of <span class=\"chem\">-1</span>, factorials <span class=\"chem\">n!</span>, or phase shifts <span class=\"chem\">sin(x + n pi / 2)</span>), and prove the formula for <span class=\"chem\">f^{(n)}(x)</span> by mathematical induction.": "<span class=\"chem\">y = f(x)</span> 的 <i>n</i> 階導數記作 <span class=\"chem\">f^{(n)}(x)</span> 或 <span class=\"chem\">d^n y / dx^n</span>。在 Paper 1 與 Paper 3 中，你常需計算 <span class=\"chem\">f'(x), f''(x), f'''(x)</span>、找出規律（例如 <span class=\"chem\">-1</span> 的冪次、階乘 <span class=\"chem\">n!</span> 或相移 <span class=\"chem\">sin(x + n pi / 2)</span>），並以數學歸納法證明 <span class=\"chem\">f^{(n)}(x)</span> 的公式。",

    // First principles, continuity, higher derivatives and L’Hôpit > h3
    "L’Hôpital’s rule for indeterminate limits": "求不定極限的洛必達法則",

    // First principles, continuity, higher derivatives and L’Hôpit > p
    "When direct substitution into <span class=\"chem\">lim_{x-&gt;a} f(x)/g(x)</span> produces the indeterminate form <span class=\"chem\">0/0</span> or <span class=\"chem\">infty/infty</span>, zooming in closely around <span class=\"chem\">x = a</span> makes both curves look like their tangent lines. Near <span class=\"chem\">x = a</span> when <span class=\"chem\">f(a) = g(a) = 0</span>, <span class=\"chem\">f(x) ≈ f'(a)(x - a)</span> and <span class=\"chem\">g(x) ≈ g'(a)(x - a)</span>, so the ratio of heights equals the ratio of gradients:": "當直接代入 <span class=\"chem\">lim_{x-&gt;a} f(x)/g(x)</span> 得出 <span class=\"chem\">0/0</span> 或 <span class=\"chem\">infty/infty</span> 不定型時，在 <span class=\"chem\">x = a</span> 附近不斷放大會使兩條曲線看似各自的切線。當 <span class=\"chem\">f(a) = g(a) = 0</span> 時，在 <span class=\"chem\">x = a</span> 附近有 <span class=\"chem\">f(x) ≈ f'(a)(x - a)</span> 及 <span class=\"chem\">g(x) ≈ g'(a)(x - a)</span>，故高度之比等於斜率之比：",

    // First principles, continuity, higher derivatives and L’Hôpit > equation > maths line
    "If lim<sub><i>x</i>→<i>a</i></sub> <i>f</i>(<i>x</i>) = lim<sub><i>x</i>→<i>a</i></sub> <i>g</i>(<i>x</i>) = 0 (or ±∞), then lim<sub><i>x</i>→<i>a</i></sub> <span class=\"frac\"><span><i>f</i>(<i>x</i>)</span><span><i>g</i>(<i>x</i>)</span></span> = lim<sub><i>x</i>→<i>a</i></sub> <span class=\"frac\"><span><i>f</i>′(<i>x</i>)</span><span><i>g</i>′(<i>x</i>)</span></span>": "若 lim<sub><i>x</i>→<i>a</i></sub> <i>f</i>(<i>x</i>) = lim<sub><i>x</i>→<i>a</i></sub> <i>g</i>(<i>x</i>) = 0（或 ±∞），則 lim<sub><i>x</i>→<i>a</i></sub> <span class=\"frac\"><span><i>f</i>(<i>x</i>)</span><span><i>g</i>(<i>x</i>)</span></span> = lim<sub><i>x</i>→<i>a</i></sub> <span class=\"frac\"><span><i>f</i>′(<i>x</i>)</span><span><i>g</i>′(<i>x</i>)</span></span>",

    // First principles, continuity, higher derivatives and L’Hôpit > equation > dd
    "differentiate numerator and denominator separately (provided the right-hand limit exists)": "分子與分母分開求導（只要右端極限存在）",

    // First principles, continuity, higher derivatives and L’Hôpit > common mistake > p
    "<strong>Verify <span class=\"chem\">0/0</span> or <span class=\"chem\">infty/infty</span> before every single application!</strong> If a limit is <span class=\"chem\">lim_{x-&gt;0} cos(x)/(x + 2) = 1/2</span>, applying L’Hôpital’s rule gives <span class=\"chem\">lim_{x-&gt;0} (-sin x)/1 = 0</span>, which is completely wrong because the original limit was <span class=\"chem\">1/2</span>, not <span class=\"chem\">0/0</span>. If you have a product <span class=\"chem\">0 × infty</span> (such as <span class=\"chem\">lim_{x-&gt;0^+} x ln x</span>), rewrite it as a fraction <span class=\"chem\">(ln x)/(1/x)</span> (<span class=\"chem\">-infty/infty</span>) first!": "<strong>每次套用前必須先驗證 <span class=\"chem\">0/0</span> 或 <span class=\"chem\">infty/infty</span>！</strong>若極限為 <span class=\"chem\">lim_{x-&gt;0} cos(x)/(x + 2) = 1/2</span>，盲目套用洛必達法則會得出 <span class=\"chem\">lim_{x-&gt;0} (-sin x)/1 = 0</span>，這是完全錯誤的，因為原極限是 <span class=\"chem\">1/2</span> 而非 <span class=\"chem\">0/0</span>。若遇到乘積 <span class=\"chem\">0 × infty</span>（例如 <span class=\"chem\">lim_{x-&gt;0^+} x ln x</span>），須先改寫為分式 <span class=\"chem\">(ln x)/(1/x)</span>（<span class=\"chem\">-infty/infty</span>）！",

    // First principles, continuity, higher derivatives and L’Hôpit > widget > data-title attribute
    "L’Hôpital’s rule local linearization explorer": "洛必達法則局部線性近似探索器",

    // First principles, continuity, higher derivatives and L’Hôpit > widget > data-kicker attribute
    "AHL 5.13 · Interactive": "AHL 5.13 · 互動探索",

    // First principles, continuity, higher derivatives and L’Hôpit > widget > figcaption
    "As you zoom in around <span class=\"chem\">x = a</span>, the functions <span class=\"chem\">f(x)</span> and <span class=\"chem\">g(x)</span> become indistinguishable from their tangent lines <span class=\"chem\">f'(a)(x - a)</span> and <span class=\"chem\">g'(a)(x - a)</span>. Because the <span class=\"chem\">(x - a)</span> factors cancel, the limit of <span class=\"chem\">f(x)/g(x)</span> equals the ratio of slopes <span class=\"chem\">f'(a)/g'(a)</span>.": "當你在 <span class=\"chem\">x = a</span> 附近放大時，函數 <span class=\"chem\">f(x)</span> 與 <span class=\"chem\">g(x)</span> 會與它們的切線 <span class=\"chem\">f'(a)(x - a)</span> 及 <span class=\"chem\">g'(a)(x - a)</span> 幾乎重合。由於 <span class=\"chem\">(x - a)</span> 因子相消，<span class=\"chem\">f(x)/g(x)</span> 的極限等於斜率之比 <span class=\"chem\">f'(a)/g'(a)</span>。",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > h3
    "Evaluating a limit that requires applying L’Hôpital’s rule twice": "計算需應用兩次洛必達法則的極限",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > p
    "Find the exact value of <span class=\"chem\">lim_{x-&gt;0} (e^{2x} - 1 - 2x) / (1 - cos(3x))</span>. <strong>[5 marks]</strong>": "求 (Find) <span class=\"chem\">lim_{x-&gt;0} (e^{2x} - 1 - 2x) / (1 - cos(3x))</span> 的準確值。<strong>[5 marks]</strong>",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > data-title attribute
    "Check the indeterminate form at x = 0": "檢查在 x = 0 處的不定型",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > p
    "IB markschemes require explicit verification that both numerator and denominator approach 0 before applying L’Hôpital’s rule.": "IB 評分標準要求在應用洛必達法則前，明確驗證分子與分母皆趨近 0。",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > maths line
    "As <i>x</i> → 0: numerator <i>e</i><sup>0</sup> − 1 − 0 = 0 and denominator 1 − cos(0) = 0 (indeterminate form 0/0) <b>[R1]</b>": "當 <i>x</i> → 0：分子 <i>e</i><sup>0</sup> − 1 − 0 = 0 且分母 1 − cos(0) = 0（不定型 0/0）<b>[R1]</b>",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > data-title attribute
    "Apply L’Hôpital’s rule once and re-test at x = 0": "應用洛必達法則一次並在 x = 0 處重新檢驗",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > p
    "Differentiate numerator and denominator separately with respect to x using the chain rule.": "利用鏈式法則把分子與分母分開對 x 求導。",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > maths line
    "At <i>x</i> = 0: numerator 2 − 2 = 0 and denominator 3 sin(0) = 0 (still form 0/0)": "在 <i>x</i> = 0：分子 2 − 2 = 0 且分母 3 sin(0) = 0（仍為 0/0 型）",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > data-title attribute
    "Apply L’Hôpital’s rule a second time and evaluate": "第二次應用洛必達法則並求值",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > p
    "Since the first derivative ratio is still 0/0, differentiate top and bottom one more time and substitute x = 0.": "由於一階導數之比仍為 0/0，將分子與分母再求導一次並代入 x = 0。",

    // First principles, continuity, higher derivatives and L’Hôpit > try it > p
    "Evaluate <span class=\"chem\">lim_{x-&gt;0} (3x - sin(3x)) / (2x^3)</span>. Give your answer as an exact fraction or decimal.": "計算 (Evaluate) <span class=\"chem\">lim_{x-&gt;0} (3x - sin(3x)) / (2x^3)</span>，答案以準確分數或小數表示。",

    // First principles, continuity, higher derivatives and L’Hôpit > try it > li
    "Verify that at <span class=\"chem\">x = 0</span>, both numerator and denominator are <span class=\"chem\">0</span>. Apply L’Hôpital’s rule once to get <span class=\"chem\">lim_{x-&gt;0} (3 - 3 cos(3x)) / (6x^2)</span>.": "驗證在 <span class=\"chem\">x = 0</span> 處分子與分母皆為 <span class=\"chem\">0</span>。應用一次洛必達法則得 <span class=\"chem\">lim_{x-&gt;0} (3 - 3 cos(3x)) / (6x^2)</span>。",

    // First principles, continuity, higher derivatives and L’Hôpit > try it > li
    "This is still <span class=\"chem\">0/0</span>. Differentiate top and bottom a second time to get <span class=\"chem\">lim_{x-&gt;0} (9 sin(3x)) / (12x)</span>, and a third time to get <span class=\"chem\">lim_{x-&gt;0} (27 cos(3x)) / 12</span>.": "這仍為 <span class=\"chem\">0/0</span>。分子分母求導第二次得 <span class=\"chem\">lim_{x-&gt;0} (9 sin(3x)) / (12x)</span>，第三次得 <span class=\"chem\">lim_{x-&gt;0} (27 cos(3x)) / 12</span>。",

    // Implicit differentiation, related rates and AHL derivatives > data-toc attribute
    "Implicit & related rates": "隱函數微分與相關變率",

    // Implicit differentiation, related rates and AHL derivatives > h2
    "Implicit differentiation, related rates and AHL derivatives": "隱函數微分、相關變率與 AHL 導數",

    // Implicit differentiation, related rates and AHL derivatives > p
    "Many geometric curves—such as circles <span class=\"chem\">x^2 + y^2 = r^2</span> or rotated ellipses <span class=\"chem\">x^2 + xy + y^2 = 7</span>—cannot easily be written in explicit form <span class=\"chem\">y = f(x)</span>. Using <dfn data-def=\"Differentiating both sides of an equation F(x, y) = 0 with respect to x by treating y as an implicit function y(x) and applying the chain rule d/dx(g(y)) = g'(y) dy/dx.\">implicit differentiation</dfn>, we differentiate every term with respect to <i>x</i> directly:": "許多幾何曲線——例如圓 <span class=\"chem\">x^2 + y^2 = r^2</span> 或旋轉橢圓 <span class=\"chem\">x^2 + xy + y^2 = 7</span>——難以寫成顯式 <span class=\"chem\">y = f(x)</span>。利用<dfn data-def=\"把 y 視為 x 的隱函數 y(x) 並套用鏈式法則 d/dx(g(y)) = g'(y) dy/dx，直接對方程 F(x, y) = 0 兩邊關於 x 求導。\">隱函數微分 <span class=\"en-term\">(implicit differentiation)</span></dfn>，我們直接對每一項關於 <i>x</i> 求導：",

    // Implicit differentiation, related rates and AHL derivatives > data-def attribute
    "Differentiating both sides of an equation F(x, y) = 0 with respect to x by treating y as an implicit function y(x) and applying the chain rule d/dx(g(y)) = g'(y) dy/dx.": "把 y 視為 x 的隱函數 y(x) 並套用鏈式法則 d/dx(g(y)) = g'(y) dy/dx，直接對方程 F(x, y) = 0 兩邊關於 x 求導。",

    // Implicit differentiation, related rates and AHL derivatives > li
    "Any term involving <i>y</i> is differentiated using the chain rule: <span class=\"chem\">d/dx(y^n) = n y^{n-1} (dy/dx)</span> and <span class=\"chem\">d/dx(e^y) = e^y (dy/dx)</span>.": "任何含 <i>y</i> 的項均使用鏈式法則求導：<span class=\"chem\">d/dx(y^n) = n y^{n-1} (dy/dx)</span> 及 <span class=\"chem\">d/dx(e^y) = e^y (dy/dx)</span>。",

    // Implicit differentiation, related rates and AHL derivatives > li
    "Any mixed product such as <span class=\"chem\">x^2 y</span> requires the product rule: <span class=\"chem\">d/dx(x^2 y) = x^2 (dy/dx) + 2xy</span>.": "任何混合乘積項如 <span class=\"chem\">x^2 y</span> 均須使用乘積法則：<span class=\"chem\">d/dx(x^2 y) = x^2 (dy/dx) + 2xy</span>。",

    // Implicit differentiation, related rates and AHL derivatives > li
    "After differentiating both sides, collect all terms containing <span class=\"chem\">dy/dx</span> on the left, factor out <span class=\"chem\">dy/dx</span>, and divide.": "兩邊求導後，把所有含 <span class=\"chem\">dy/dx</span> 的項移到左邊，抽出 <span class=\"chem\">dy/dx</span>，再相除。",

    // Implicit differentiation, related rates and AHL derivatives > exam tip (shown in English + translation) > p
    "<strong>Exam tip — Horizontal vs vertical tangents on implicit curves:</strong> If <span class=\"chem\">dy/dx = P(x, y) / Q(x, y)</span>:": "<strong>考試貼士 — 隱函數曲線的水平切線與鉛垂切線：</strong>若 <span class=\"chem\">dy/dx = P(x, y) / Q(x, y)</span>：",

    // Implicit differentiation, related rates and AHL derivatives > exam tip (shown in English + translation) > li
    "<strong>Horizontal tangent (stationary point / parallel to <i>x</i>-axis):</strong> Set the numerator <span class=\"chem\">P(x, y) = 0</span>, express <i>y</i> in terms of <i>x</i> (or vice versa), and <strong>substitute back into the original curve equation</strong> to find the coordinates!": "<strong>水平切線（駐點／平行於 <i>x</i> 軸）：</strong>令分子 <span class=\"chem\">P(x, y) = 0</span>，以 <i>x</i> 表示 <i>y</i>（或反之），再<strong>代回原曲線方程</strong>求坐標！",

    // Implicit differentiation, related rates and AHL derivatives > exam tip (shown in English + translation) > li
    "<strong>Vertical tangent (parallel to <i>y</i>-axis):</strong> Set the denominator <span class=\"chem\">Q(x, y) = 0</span> (which is equivalent to <span class=\"chem\">dx/dy = 0</span>) and substitute back into the original curve equation.": "<strong>鉛垂切線（平行於 <i>y</i> 軸）：</strong>令分母 <span class=\"chem\">Q(x, y) = 0</span>（等價於 <span class=\"chem\">dx/dy = 0</span>）並代回原曲線方程。",

    // Implicit differentiation, related rates and AHL derivatives > h3
    "Related rates of change": "相關變率",

    // Implicit differentiation, related rates and AHL derivatives > p
    "When two or more quantities vary with time <i>t</i> (such as the volume <i>V</i>, radius <i>r</i>, and depth <i>h</i> of water in a tank), the chain rule connects their rates of change:": "當兩個或多個量隨時間 <i>t</i> 變化時（例如水箱內水的體積 <i>V</i>、半徑 <i>r</i> 與水深 <i>h</i>），鏈式法則把它們的變率連接起來：",

    // Implicit differentiation, related rates and AHL derivatives > equation > dt
    "dV/dt": "dV/dt",

    // Implicit differentiation, related rates and AHL derivatives > equation > dd
    "rate of change of volume with respect to time (positive for inflow, negative for outflow/leaking)": "體積關於時間的變率（流入為正，流出／滲漏為負）",

    // Implicit differentiation, related rates and AHL derivatives > equation > dt
    "dh/dt": "dh/dt",

    // Implicit differentiation, related rates and AHL derivatives > equation > dd
    "rate of change of height with respect to time": "高度關於時間的變率",

    // Implicit differentiation, related rates and AHL derivatives > h3
    "AHL standard derivatives (Formula Booklet 5.15)": "AHL 標準導數（公式手冊 5.15）",

    // Implicit differentiation, related rates and AHL derivatives > formula booklet note > p
    "<strong>In your Formula Booklet (Section 5.15):</strong>": "<strong>公式手冊中（第 5.15 節）：</strong>",

    // Implicit differentiation, related rates and AHL derivatives > formula booklet note > li
    "Reciprocal &amp; tangent trig: <span class=\"chem\">d/dx(tan x) = sec^2 x</span>, <span class=\"chem\">d/dx(cot x) = -cosec^2 x</span>, <span class=\"chem\">d/dx(sec x) = sec x tan x</span>, <span class=\"chem\">d/dx(cosec x) = -cosec x cot x</span>. (Notice every “co-” function has a minus sign!)": "倒數與正切三角函數：<span class=\"chem\">d/dx(tan x) = sec^2 x</span>、<span class=\"chem\">d/dx(cot x) = -cosec^2 x</span>、<span class=\"chem\">d/dx(sec x) = sec x tan x</span>、<span class=\"chem\">d/dx(cosec x) = -cosec x cot x</span>。（留意每個「余 (co-)」函數都帶負號！）",

    // Implicit differentiation, related rates and AHL derivatives > formula booklet note > li
    "General exponential &amp; log: <span class=\"chem\">d/dx(a^x) = a^x ln a</span> and <span class=\"chem\">d/dx(log_a x) = 1/(x ln a)</span>.": "一般指數與對數：<span class=\"chem\">d/dx(a^x) = a^x ln a</span> 及 <span class=\"chem\">d/dx(log_a x) = 1/(x ln a)</span>。",

    // Implicit differentiation, related rates and AHL derivatives > formula booklet note > li
    "Inverse trig: <span class=\"chem\">d/dx(arcsin x) = 1/sqrt(1 - x^2)</span>, <span class=\"chem\">d/dx(arccos x) = -1/sqrt(1 - x^2)</span>, and <span class=\"chem\">d/dx(arctan x) = 1/(1 + x^2)</span>.": "反三角函數：<span class=\"chem\">d/dx(arcsin x) = 1/sqrt(1 - x^2)</span>、<span class=\"chem\">d/dx(arccos x) = -1/sqrt(1 - x^2)</span>，及 <span class=\"chem\">d/dx(arctan x) = 1/(1 + x^2)</span>。",

    // Implicit differentiation, related rates and AHL derivatives > worked example > h3
    "Finding points with a vertical tangent on an implicit curve": "求隱函數曲線上具有鉛垂切線的點",

    // Implicit differentiation, related rates and AHL derivatives > worked example > p
    "Consider the curve defined implicitly by <span class=\"chem\">x^2 - 2xy + 4y^2 = 12</span>. Find the coordinates of the two points on the curve where the tangent is parallel to the <i>y</i>-axis. <strong>[6 marks]</strong>": "考慮由隱函數方程 <span class=\"chem\">x^2 - 2xy + 4y^2 = 12</span> 定義的曲線。求 (Find) 曲線上切線平行於 <i>y</i> 軸的兩個點之坐標。<strong>[6 marks]</strong>",

    // Implicit differentiation, related rates and AHL derivatives > worked example > data-title attribute
    "Differentiate both sides implicitly with respect to x": "對兩邊關於 x 作隱函數求導",

    // Implicit differentiation, related rates and AHL derivatives > worked example > p
    "Apply the product rule to −2xy and the chain rule to 4y². Remember that the derivative of 12 is 0.": "對 −2xy 使用乘積法則，並對 4y² 使用鏈式法則。緊記 12 的導數為 0。",

    // Implicit differentiation, related rates and AHL derivatives > worked example > data-title attribute
    "Isolate dy/dx and apply the vertical tangent condition": "分離出 dy/dx 並套用鉛垂切線條件",

    // Implicit differentiation, related rates and AHL derivatives > worked example > p
    "A tangent parallel to the y-axis is vertical, which occurs where the denominator of dy/dx equals zero (dx/dy = 0).": "平行於 y 軸的切線是鉛垂線，出現在 dy/dx 的分母等於零（dx/dy = 0）之處。",

    // Implicit differentiation, related rates and AHL derivatives > worked example > maths line
    "Vertical tangent ⇒ 4<i>y</i> − <i>x</i> = 0 ⇒ <i>x</i> = 4<i>y</i> <b>[M1]</b>": "鉛垂切線 ⇒ 4<i>y</i> − <i>x</i> = 0 ⇒ <i>x</i> = 4<i>y</i> <b>[M1]</b>",

    // Implicit differentiation, related rates and AHL derivatives > worked example > data-title attribute
    "Substitute x = 4y back into the original curve equation": "將 x = 4y 代回原曲線方程",

    // Implicit differentiation, related rates and AHL derivatives > worked example > p
    "The points must lie on the curve x² − 2xy + 4y² = 12.": "所求的點必須位於曲線 x² − 2xy + 4y² = 12 上。",

    // Implicit differentiation, related rates and AHL derivatives > worked example > maths line
    "Since <i>x</i> = 4<i>y</i>, the points are <b>(4, 1)</b> and <b>(−4, −1)</b>. <b>[A1]</b>": "由於 <i>x</i> = 4<i>y</i>，該兩點為 <b>(4, 1)</b> 與 <b>(−4, −1)</b>。<b>[A1]</b>",

    // Implicit differentiation, related rates and AHL derivatives > worked example > p
    "(4, 1) and (−4, −1)": "(4, 1) 與 (−4, −1)",

    // Implicit differentiation, related rates and AHL derivatives > try it > p
    "An inverted right circular cone has base radius <span class=\"unit\">6 cm</span> and height <span class=\"unit\">12 cm</span>. Water is poured into the cone at a constant rate of <span class=\"unit\">8 cm3 s-1</span>. Find the rate <span class=\"chem\">dh/dt</span> at which the water depth <i>h</i> is rising when <span class=\"chem\">h = 4</span> <span class=\"unit\">cm</span>. (Give your answer to 3 s.f. or in terms of <span class=\"mono\">pi</span>.)": "一個倒置直立圓錐體的底半徑為 <span class=\"unit\">6 cm</span>，高為 <span class=\"unit\">12 cm</span>。水以恒定速率 <span class=\"unit\">8 cm3 s-1</span> 注入圓錐體內。求 (Find) 當水深 <span class=\"chem\">h = 4</span> <span class=\"unit\">cm</span> 時水深 <i>h</i> 上升的變率 <span class=\"chem\">dh/dt</span>。（答案準確至 3 位有效數字或以 <span class=\"mono\">pi</span> 表示。）",

    // Implicit differentiation, related rates and AHL derivatives > try it > li
    "By similar triangles, <span class=\"chem\">r / h = 6 / 12 = 1 / 2</span>, so <span class=\"chem\">r = h / 2</span>. Substitute this into <span class=\"chem\">V = (1/3)pi r^2 h</span> to get <span class=\"chem\">V = (pi / 12) h^3</span>.": "由相似三角形，<span class=\"chem\">r / h = 6 / 12 = 1 / 2</span>，故 <span class=\"chem\">r = h / 2</span>。代入 <span class=\"chem\">V = (1/3)pi r^2 h</span> 得 <span class=\"chem\">V = (pi / 12) h^3</span>。",

    // Implicit differentiation, related rates and AHL derivatives > try it > li
    "Differentiate with respect to <i>h</i>: <span class=\"chem\">dV/dh = (pi / 4) h^2</span>. At <span class=\"chem\">h = 4</span>, <span class=\"chem\">dV/dh = 4pi</span>, so <span class=\"chem\">dh/dt = (dV/dt) / (dV/dh) = 8 / (4pi) = 2 / pi</span>.": "對 <i>h</i> 求導：<span class=\"chem\">dV/dh = (pi / 4) h^2</span>。當 <span class=\"chem\">h = 4</span> 時，<span class=\"chem\">dV/dh = 4pi</span>，故 <span class=\"chem\">dh/dt = (dV/dt) / (dV/dh) = 8 / (4pi) = 2 / pi</span>。",

    // Standard AHL integrals, substitution, integration by parts a > data-toc attribute
    "Integration methods": "積分技巧",

    // Standard AHL integrals, substitution, integration by parts a > h2
    "Standard AHL integrals, substitution, integration by parts and partial fractions": "AHL 標準積分、代換法、分部積分法與部分分式",

    // Standard AHL integrals, substitution, integration by parts a > h3
    "1. Standard AHL integrals leading to <span class=\"chem\">arcsin</span> and <span class=\"chem\">arctan</span>": "1. 導出 <span class=\"chem\">arcsin</span> 與 <span class=\"chem\">arctan</span> 的 AHL 標準積分",

    // Standard AHL integrals, substitution, integration by parts a > p
    "The Formula Booklet gives two essential inverse trigonometric integrals for any positive constant <span class=\"chem\">a &gt; 0</span>:": "公式手冊為任意正常數 <span class=\"chem\">a &gt; 0</span> 提供了兩條必備的反三角函數積分：",

    // Standard AHL integrals, substitution, integration by parts a > equation > maths line
    "∫ <span class=\"frac\"><span>1</span><span><i>a</i><sup>2</sup> + <i>x</i><sup>2</sup></span></span> <i>dx</i> = <span class=\"frac\"><span>1</span><span><i>a</i></span></span> arctan<span class=\"frac\"><span><i>x</i></span><span><i>a</i></span></span> + <i>C</i>, ∫ <span class=\"frac\"><span>1</span><span>√(<i>a</i><sup>2</sup> − <i>x</i><sup>2</sup>)</span></span> <i>dx</i> = arcsin<span class=\"frac\"><span><i>x</i></span><span><i>a</i></span></span> + <i>C</i> (|<i>x</i>| &lt; <i>a</i>)": "∫ <span class=\"frac\"><span>1</span><span><i>a</i><sup>2</sup> + <i>x</i><sup>2</sup></span></span> <i>dx</i> = <span class=\"frac\"><span>1</span><span><i>a</i></span></span> arctan<span class=\"frac\"><span><i>x</i></span><span><i>a</i></span></span> + <i>C</i>, ∫ <span class=\"frac\"><span>1</span><span>√(<i>a</i><sup>2</sup> − <i>x</i><sup>2</sup>)</span></span> <i>dx</i> = arcsin<span class=\"frac\"><span><i>x</i></span><span><i>a</i></span></span> + <i>C</i> (|<i>x</i>| &lt; <i>a</i>)",

    // Standard AHL integrals, substitution, integration by parts a > equation > dt
    "1/a in arctan": "arctan 中的 1/a",

    // Standard AHL integrals, substitution, integration by parts a > equation > dd
    "present in arctan, but NOT in arcsin!": "存在於 arctan，但不存在於 arcsin！",

    // Standard AHL integrals, substitution, integration by parts a > p
    "When the denominator is an irreducible quadratic such as <span class=\"chem\">x^2 + 6x + 25</span>, complete the square first: <span class=\"chem\">x^2 + 6x + 25 = (x + 3)^2 + 4^2</span>, which integrates directly to <span class=\"chem\">(1/4) arctan((x + 3)/4) + C</span>.": "當分母為不可約二次式如 <span class=\"chem\">x^2 + 6x + 25</span> 時，先配方：<span class=\"chem\">x^2 + 6x + 25 = (x + 3)^2 + 4^2</span>，即可直接積分為 <span class=\"chem\">(1/4) arctan((x + 3)/4) + C</span>。",

    // Standard AHL integrals, substitution, integration by parts a > h3
    "2. Formal integration by substitution": "2. 正式代換積分法",

    // Standard AHL integrals, substitution, integration by parts a > p
    "To evaluate <span class=\"chem\">int_a^b f(g(x)) g'(x) dx</span> using <span class=\"chem\">u = g(x)</span>:": "使用 <span class=\"chem\">u = g(x)</span> 計算 <span class=\"chem\">int_a^b f(g(x)) g'(x) dx</span>：",

    // Standard AHL integrals, substitution, integration by parts a > li
    "Differentiate the substitution: <span class=\"chem\">du/dx = g'(x) =&gt; du = g'(x) dx</span>.": "對代換式求導：<span class=\"chem\">du/dx = g'(x) =&gt; du = g'(x) dx</span>。",

    // Standard AHL integrals, substitution, integration by parts a > li
    "<strong>Change the limits of integration</strong>: lower limit <span class=\"chem\">u_1 = g(a)</span>, upper limit <span class=\"chem\">u_2 = g(b)</span>.": "<strong>更換積分上下限</strong>：下限 <span class=\"chem\">u_1 = g(a)</span>，上限 <span class=\"chem\">u_2 = g(b)</span>。",

    // Standard AHL integrals, substitution, integration by parts a > li
    "Rewrite the entire integrand in terms of <i>u</i> and evaluate <span class=\"chem\">int_{u_1}^{u_2} f(u) du</span> directly—no back-substitution needed!": "把整個被積函數改寫為 <i>u</i> 的函數，直接計算 <span class=\"chem\">int_{u_1}^{u_2} f(u) du</span>——無須代回原變數！",

    // Standard AHL integrals, substitution, integration by parts a > h3
    "3. Integration by parts (<span class=\"chem\">LIATE</span>)": "3. 分部積分法（<span class=\"chem\">LIATE</span>）",

    // Standard AHL integrals, substitution, integration by parts a > p
    "Reversing the product rule gives the integration by parts formula in Section 5.16 of the Formula Booklet:": "逆轉乘積法則即得出公式手冊第 5.16 節的分部積分公式：",

    // Standard AHL integrals, substitution, integration by parts a > equation > dd
    "factor chosen to be differentiated (pick using LIATE: Log → Inverse trig → Algebraic → Trig → Exp)": "選作求導的因子（按 LIATE 挑選：對數 → 反三角 → 代數 → 三角 → 指數）",

    // Standard AHL integrals, substitution, integration by parts a > equation > dt
    "dv/dx": "dv/dx",

    // Standard AHL integrals, substitution, integration by parts a > equation > dd
    "factor chosen to be integrated to find <i>v</i>": "選作積分以求 <i>v</i> 的因子",

    // Standard AHL integrals, substitution, integration by parts a > key idea > p
    "<strong>Three classic IB integration by parts patterns:</strong>": "<strong>三種經典 IB 分部積分模式：</strong>",

    // Standard AHL integrals, substitution, integration by parts a > key idea > li
    "<strong>Polynomial times <span class=\"chem\">e^{kx}</span>, <span class=\"chem\">sin(kx)</span>, or <span class=\"chem\">cos(kx)</span>:</strong> Choose <span class=\"chem\">u = x^n</span> so each differentiation lowers the power of <i>x</i> until it becomes a constant.": "<strong>多項式乘以 <span class=\"chem\">e^{kx}</span>、<span class=\"chem\">sin(kx)</span> 或 <span class=\"chem\">cos(kx)</span>：</strong>選擇 <span class=\"chem\">u = x^n</span>，使每次求導都降低 <i>x</i> 的次數，直至化為常數。",

    // Standard AHL integrals, substitution, integration by parts a > key idea > li
    "<strong>Lone <span class=\"chem\">ln x</span>, <span class=\"chem\">arcsin x</span>, or <span class=\"chem\">arctan x</span> (or multiplied by <span class=\"chem\">x^n</span>):</strong> Always choose the log or inverse trig function as <i>u</i>! For <span class=\"chem\">int ln x dx</span>, let <span class=\"chem\">u = ln x</span> and <span class=\"chem\">dv/dx = 1</span>, giving <span class=\"chem\">x ln x - int x(1/x) dx = x ln x - x + C</span>.": "<strong>單獨的 <span class=\"chem\">ln x</span>、<span class=\"chem\">arcsin x</span> 或 <span class=\"chem\">arctan x</span>（或乘以 <span class=\"chem\">x^n</span>）：</strong>一律選擇對數或反三角函數作為 <i>u</i>！對於 <span class=\"chem\">int ln x dx</span>，設 <span class=\"chem\">u = ln x</span> 及 <span class=\"chem\">dv/dx = 1</span>，得 <span class=\"chem\">x ln x - int x(1/x) dx = x ln x - x + C</span>。",

    // Standard AHL integrals, substitution, integration by parts a > key idea > li
    "<strong>Cyclic <span class=\"chem\">I = int e^{ax} sin(bx) dx</span> or <span class=\"chem\">int e^{ax} cos(bx) dx</span>:</strong> Integrate by parts <strong>twice</strong> (keeping <span class=\"chem\">u = e^{ax}</span> both times) until the original integral <i>I</i> reappears on the right-hand side, then solve algebraically for <i>I</i>.": "<strong>循環型 <span class=\"chem\">I = int e^{ax} sin(bx) dx</span> 或 <span class=\"chem\">int e^{ax} cos(bx) dx</span>：</strong>作分部積分<strong>兩次</strong>（兩次均保持 <span class=\"chem\">u = e^{ax}</span>），直至原積分 <i>I</i> 再次出現於等號右邊，再以代數法解出 <i>I</i>。",

    // Standard AHL integrals, substitution, integration by parts a > h3
    "4. Integration using partial fractions": "4. 利用部分分式積分",

    // Standard AHL integrals, substitution, integration by parts a > p
    "When integrating a rational function <span class=\"chem\">P(x)/Q(x)</span> where the denominator factors into distinct linear terms <span class=\"chem\">(x - a)(x - b)</span>, decompose the fraction first (from Topic 1.3 / AHL 1.11):": "當對分母可因式分解為相異線性因子 <span class=\"chem\">(x - a)(x - b)</span> 的有理函數 <span class=\"chem\">P(x)/Q(x)</span> 積分時，先作部分分式分解（見課題 1.3 / AHL 1.11）：",

    // Standard AHL integrals, substitution, integration by parts a > p
    "<span class=\"chem\">int (px + q)/((x - a)(x - b)) dx = int (A/(x - a) + B/(x - b)) dx = A ln|x - a| + B ln|x - b| + C</span>.": "<span class=\"chem\">int (px + q)/((x - a)(x - b)) dx = int (A/(x - a) + B/(x - b)) dx = A ln|x - a| + B ln|x - b| + C</span>。",

    // Standard AHL integrals, substitution, integration by parts a > worked example > h3
    "Definite integration by parts with an inverse trigonometric function": "含反三角函數的定積分分部積分法",

    // Standard AHL integrals, substitution, integration by parts a > worked example > p
    "Find the exact value of <span class=\"chem\">int_0^1 arctan(x) dx</span>. <strong>[5 marks]</strong>": "求 (Find) <span class=\"chem\">int_0^1 arctan(x) dx</span> 的準確值。<strong>[5 marks]</strong>",

    // Standard AHL integrals, substitution, integration by parts a > worked example > data-title attribute
    "Set up u and dv/dx using LIATE": "利用 LIATE 設定 u 與 dv/dx",

    // Standard AHL integrals, substitution, integration by parts a > worked example > p
    "For a lone inverse trig function, set u = arctan x and dv/dx = 1 so that du/dx is purely algebraic.": "對於單獨的反三角函數，設 u = arctan x 及 dv/dx = 1，使 du/dx 化為純代數式。",

    // Standard AHL integrals, substitution, integration by parts a > worked example > maths line
    "Let <i>u</i> = arctan <i>x</i> ⇒ <span class=\"frac\"><span><i>du</i></span><span><i>dx</i></span></span> = <span class=\"frac\"><span>1</span><span>1 + <i>x</i><sup>2</sup></span></span>, and <span class=\"frac\"><span><i>dv</i></span><span><i>dx</i></span></span> = 1 ⇒ <i>v</i> = <i>x</i> <b>[M1 A1]</b>": "設 <i>u</i> = arctan <i>x</i> ⇒ <span class=\"frac\"><span><i>du</i></span><span><i>dx</i></span></span> = <span class=\"frac\"><span>1</span><span>1 + <i>x</i><sup>2</sup></span></span>，且 <span class=\"frac\"><span><i>dv</i></span><span><i>dx</i></span></span> = 1 ⇒ <i>v</i> = <i>x</i> <b>[M1 A1]</b>",

    // Standard AHL integrals, substitution, integration by parts a > worked example > data-title attribute
    "Apply the integration by parts formula": "套用分部積分公式",

    // Standard AHL integrals, substitution, integration by parts a > worked example > p
    "Substitute into [uv] − ∫ v du and recognize the remaining integral as a logarithmic inspection form.": "代入 [uv] − ∫ v du 並辨識餘下的積分為對數觀察形式。",

    // Standard AHL integrals, substitution, integration by parts a > worked example > maths line
    "∫<sub>0</sub><sup>1</sup> arctan <i>x</i> <i>dx</i> = [<i>x</i> arctan <i>x</i>]<sub>0</sub><sup>1</sup> − ∫<sub>0</sub><sup>1</sup> <span class=\"frac\"><span><i>x</i></span><span>1 + <i>x</i><sup>2</sup></span></span> <i>dx</i> <b>[A1]</b>": "∫<sub>0</sub><sup>1</sup> arctan <i>x</i> <i>dx</i> = [<i>x</i> arctan <i>x</i>]<sub>0</sub><sup>1</sup> − ∫<sub>0</sub><sup>1</sup> <span class=\"frac\"><span><i>x</i></span><span>1 + <i>x</i><sup>2</sup></span></span> <i>dx</i> <b>[A1]</b>",

    // Standard AHL integrals, substitution, integration by parts a > worked example > data-title attribute
    "Integrate x/(1 + x²) and evaluate at the limits 0 and 1": "對 x/(1 + x²) 積分並在上下限 0 與 1 處求值",

    // Standard AHL integrals, substitution, integration by parts a > worked example > p
    "Since d/dx(1 + x²) = 2x, the integral of x/(1 + x²) is (1/2) ln(1 + x²).": "由於 d/dx(1 + x²) = 2x，故 x/(1 + x²) 的積分為 (1/2) ln(1 + x²)。",

    // Standard AHL integrals, substitution, integration by parts a > worked example > maths line
    "= [<i>x</i> arctan <i>x</i> − <span class=\"frac\"><span>1</span><span>2</span></span> ln(1 + <i>x</i><sup>2</sup>)]<sub>0</sub><sup>1</sup> = (1 · <span class=\"frac\"><span>π</span><span>4</span></span> − <span class=\"frac\"><span>1</span><span>2</span></span> ln 2) − (0 − 0) = <b><span class=\"frac\"><span>π</span><span>4</span></span> − <span class=\"frac\"><span>1</span><span>2</span></span> ln 2</b> <b>[M1 A1]</b>": "= [<i>x</i> arctan <i>x</i> − <span class=\"frac\"><span>1</span><span>2</span></span> ln(1 + <i>x</i><sup>2</sup>)]<sub>0</sub><sup>1</sup> = (1 · <span class=\"frac\"><span>π</span><span>4</span></span> − <span class=\"frac\"><span>1</span><span>2</span></span> ln 2) − (0 − 0) = <b><span class=\"frac\"><span>π</span><span>4</span></span> − <span class=\"frac\"><span>1</span><span>2</span></span> ln 2</b> <b>[M1 A1]</b>",

    // Standard AHL integrals, substitution, integration by parts a > worked example > p
    "π/4 − (1/2) ln 2": "π/4 − (1/2) ln 2",

    // Standard AHL integrals, substitution, integration by parts a > try it > p
    "Find the exact value of <span class=\"chem\">int_0^3 2 / (x^2 + 9) dx</span>. (You can type an exact expression in terms of <span class=\"mono\">pi</span> such as <span class=\"mono\">pi/6</span>, or a 3 s.f. decimal.)": "求 (Find) <span class=\"chem\">int_0^3 2 / (x^2 + 9) dx</span> 的準確值。（可輸入以 <span class=\"mono\">pi</span> 表示的準確式如 <span class=\"mono\">pi/6</span>，或準確至 3 位有效數字的小數。）",

    // Standard AHL integrals, substitution, integration by parts a > try it > li
    "Match the integrand with the Formula Booklet standard integral <span class=\"chem\">int 1/(a^2 + x^2) dx = (1/a) arctan(x/a) + C</span> where <span class=\"chem\">a = 3</span>.": "將被積函數與公式手冊標準積分 <span class=\"chem\">int 1/(a^2 + x^2) dx = (1/a) arctan(x/a) + C</span> 配對，其中 <span class=\"chem\">a = 3</span>。",

    // Standard AHL integrals, substitution, integration by parts a > try it > li
    "Factor out the 2 to get <span class=\"chem\">[(2/3) arctan(x/3)]_0^3</span> and use <span class=\"chem\">arctan(1) = pi/4</span>.": "抽出常數 2 得 <span class=\"chem\">[(2/3) arctan(x/3)]_0^3</span>，並利用 <span class=\"chem\">arctan(1) = pi/4</span>。",

    // Standard AHL integrals, substitution, integration by parts a > try it > maths line
    "2 ∫<sub>0</sub><sup>3</sup> <span class=\"frac\"><span>1</span><span>3<sup>2</sup> + <i>x</i><sup>2</sup></span></span> <i>dx</i> = [<span class=\"frac\"><span>2</span><span>3</span></span> arctan(<span class=\"frac\"><span><i>x</i></span><span>3</span></span>)]<sub>0</sub><sup>3</sup> = <span class=\"frac\"><span>2</span><span>3</span></span>(arctan 1 − arctan 0) = <span class=\"frac\"><span>2</span><span>3</span></span> · <span class=\"frac\"><span>π</span><span>4</span></span> = <b><span class=\"frac\"><span>π</span><span>6</span></span> ≈ 0.524</b>": "2 ∫<sub>0</sub><sup>3</sup> <span class=\"frac\"><span>1</span><span>3<sup>2</sup> + <i>x</i><sup>2</sup></span></span> <i>dx</i> = [<span class=\"frac\"><span>2</span><span>3</span></span> arctan(<span class=\"frac\"><span><i>x</i></span><span>3</span></span>)]<sub>0</sub><sup>3</sup> = <span class=\"frac\"><span>2</span><span>3</span></span>(arctan 1 − arctan 0) = <span class=\"frac\"><span>2</span><span>3</span></span> · <span class=\"frac\"><span>π</span><span>4</span></span> = <b><span class=\"frac\"><span>π</span><span>6</span></span> ≈ 0.524</b>",

    // Area with the y-axis and volumes of revolution > data-toc attribute
    "Volumes of revolution": "旋轉體體積",

    // Area with the y-axis and volumes of revolution > h2
    "Area with the <i>y</i>-axis and volumes of revolution": "與 <i>y</i> 軸所圍面積及旋轉體體積",

    // Area with the y-axis and volumes of revolution > p
    "When a region is bounded by a curve <span class=\"chem\">x = g(y)</span> and the <i>y</i>-axis between <span class=\"chem\">y = c</span> and <span class=\"chem\">y = d</span>, slicing horizontally into strips of thickness <span class=\"chem\">dy</span> gives the area <span class=\"chem\">A = int_c^d |x| dy</span>.": "當區域由曲線 <span class=\"chem\">x = g(y)</span> 與 <i>y</i> 軸在 <span class=\"chem\">y = c</span> 與 <span class=\"chem\">y = d</span> 之間圍成時，水平切片成厚度為 <span class=\"chem\">dy</span> 的細條，即得面積 <span class=\"chem\">A = int_c^d |x| dy</span>。",

    // Area with the y-axis and volumes of revolution > p
    "If we rotate that region through <span class=\"chem\">2pi</span> radians (<span class=\"chem\">360°</span>) about one of the coordinate axes, each thin slice sweeps out a circular disc of radius <span class=\"chem\">R</span> and area <span class=\"chem\">pi R^2</span>:": "若將該區域繞其中一條坐標軸旋轉 <span class=\"chem\">2pi</span> 弧度（<span class=\"chem\">360°</span>），每塊薄片會掃出半徑為 <span class=\"chem\">R</span>、面積為 <span class=\"chem\">pi R^2</span> 的圓盤：",

    // Area with the y-axis and volumes of revolution > equation > maths line
    "<i>V</i><sub><i>x</i></sub> = π ∫<sub><i>a</i></sub><sup><i>b</i></sup> <i>y</i><sup>2</sup> <i>dx</i> (about the <i>x</i>-axis), <i>V</i><sub><i>y</i></sub> = π ∫<sub><i>c</i></sub><sup><i>d</i></sup> <i>x</i><sup>2</sup> <i>dy</i> (about the <i>y</i>-axis)": "<i>V</i><sub><i>x</i></sub> = π ∫<sub><i>a</i></sub><sup><i>b</i></sup> <i>y</i><sup>2</sup> <i>dx</i>（繞 <i>x</i> 軸）, <i>V</i><sub><i>y</i></sub> = π ∫<sub><i>c</i></sub><sup><i>d</i></sup> <i>x</i><sup>2</sup> <i>dy</i>（繞 <i>y</i> 軸）",

    // Area with the y-axis and volumes of revolution > equation > dt
    "V<sub>x</sub>": "V<sub>x</sub>",

    // Area with the y-axis and volumes of revolution > equation > dd
    "volume when rotated 2π radians about the <i>x</i>-axis (radius = <i>y</i>, limits are <i>x</i>-values)": "繞 <i>x</i> 軸旋轉 2π 弧度所得體積（半徑 = <i>y</i>，上下限為 <i>x</i> 值）",

    // Area with the y-axis and volumes of revolution > equation > dt
    "V<sub>y</sub>": "V<sub>y</sub>",

    // Area with the y-axis and volumes of revolution > equation > dd
    "volume when rotated 2π radians about the <i>y</i>-axis (radius = <i>x</i>, limits are <i>y</i>-values)": "繞 <i>y</i> 軸旋轉 2π 弧度所得體積（半徑 = <i>x</i>，上下限為 <i>y</i> 值）",

    // Area with the y-axis and volumes of revolution > h3
    "Hollow solids between two curves (the washer method)": "兩條曲線間的中空旋轉體（墊圈法）",

    // Area with the y-axis and volumes of revolution > p
    "When the region enclosed between an outer curve <span class=\"chem\">y_{outer} = f(x)</span> and an inner curve <span class=\"chem\">y_{inner} = g(x)</span> (with <span class=\"chem\">f(x) &gt;= g(x) &gt;= 0</span>) is rotated about the <i>x</i>-axis, each vertical cross-section is a hollow ring (washer) whose area is the outer circle minus the inner hole:": "當外曲線 <span class=\"chem\">y_{outer} = f(x)</span> 與內曲線 <span class=\"chem\">y_{inner} = g(x)</span>（滿足 <span class=\"chem\">f(x) &gt;= g(x) &gt;= 0</span>）之間所圍區域繞 <i>x</i> 軸旋轉時，每個鉛垂截面是一個中空圓環（墊圈），其面積為外圓減內孔：",

    // Area with the y-axis and volumes of revolution > p
    "<span class=\"chem\">V = pi int_a^b ([y_{outer}]^2 - [y_{inner}]^2) dx = pi int_a^b ([f(x)]^2 - [g(x)]^2) dx</span>.": "<span class=\"chem\">V = pi int_a^b ([y_{outer}]^2 - [y_{inner}]^2) dx = pi int_a^b ([f(x)]^2 - [g(x)]^2) dx</span>。",

    // Area with the y-axis and volumes of revolution > not needed for IB > p
    "<strong>Classic mistake &amp; IB syllabus boundary:</strong>": "<strong>經典錯誤與 IB 課程大綱界線：</strong>",

    // Area with the y-axis and volumes of revolution > not needed for IB > li
    "<strong>Never square the difference!</strong> Writing <span class=\"chem\">pi int_a^b (y_1 - y_2)^2 dx</span> instead of <span class=\"chem\">pi int_a^b (y_1^2 - y_2^2) dx</span> is the most common volume mistake in IB HL exams. Always subtract the squared radii: <strong>outer squared minus inner squared</strong>.": "<strong>切勿將差值平方！</strong>把 <span class=\"chem\">pi int_a^b (y_1^2 - y_2^2) dx</span> 誤寫成 <span class=\"chem\">pi int_a^b (y_1 - y_2)^2 dx</span> 是 IB HL 考試中最常見的體積錯誤。務必先平方再相減：<strong>外半徑平方減內半徑平方</strong>。",

    // Area with the y-axis and volumes of revolution > not needed for IB > li
    "<strong>Not needed for IB — Cylindrical shells:</strong> The cylindrical shell method (<span class=\"chem\">V = 2pi int_a^b x y dx</span>) often taught by AI tutors and US calculus textbooks is <strong>not</strong> in the IB Math AA HL syllabus. For rotation about the <i>y</i>-axis, rearrange the curve for <span class=\"chem\">x^2</span> in terms of <i>y</i> and use <span class=\"chem\">V = pi int_c^d x^2 dy</span>.": "<strong>IB 不要求的內容 — 柱殼法：</strong>AI 導師與美國微積分教科書常教的柱殼法（<span class=\"chem\">V = 2pi int_a^b x y dx</span>）<strong>不在</strong> IB Math AA HL 課程大綱內。繞 <i>y</i> 軸旋轉時，把曲線改寫為以 <i>y</i> 表示 <span class=\"chem\">x^2</span>，並使用 <span class=\"chem\">V = pi int_c^d x^2 dy</span>。",

    // Area with the y-axis and volumes of revolution > widget > data-title attribute
    "Volume of revolution disc & 3D solid explorer": "旋轉體圓盤與 3D 立體探索器",

    // Area with the y-axis and volumes of revolution > widget > data-kicker attribute
    "AHL 5.17 · Interactive": "AHL 5.17 · 互動探索",

    // Area with the y-axis and volumes of revolution > widget > figcaption
    "Left: the 2D profile <span class=\"chem\">y = f(x)</span> sliced into <i>N</i> rectangles of width <span class=\"chem\">Delta x</span>. Right: rotating each rectangle <span class=\"chem\">2pi</span> radians about the <i>x</i>-axis produces <i>N</i> circular discs of volume <span class=\"chem\">pi [f(x_i)]^2 Delta x</span>. Drag the 3D view to inspect the solid from any angle.": "左圖：將 2D 輪廓 <span class=\"chem\">y = f(x)</span> 切片成 <i>N</i> 個寬度為 <span class=\"chem\">Delta x</span> 的長方形。右圖：將每個長方形繞 <i>x</i> 軸旋轉 <span class=\"chem\">2pi</span> 弧度，產生 <i>N</i> 個體積為 <span class=\"chem\">pi [f(x_i)]^2 Delta x</span> 的圓盤。拖動 3D 視圖可從任何角度觀察立體。",

    // Area with the y-axis and volumes of revolution > worked example > h3
    "Volume of revolution between two curves about the x-axis": "兩條曲線繞 x 軸旋轉所得的旋轉體體積",

    // Area with the y-axis and volumes of revolution > worked example > p
    "The region <i>R</i> is enclosed by the curve <span class=\"chem\">y = sqrt(x)</span> and the line <span class=\"chem\">y = x / 2</span> in the first quadrant. Find the exact volume of the solid formed when <i>R</i> is rotated through <span class=\"chem\">2pi</span> radians about the <i>x</i>-axis. <strong>[6 marks]</strong>": "區域 <i>R</i> 由第一象限內的曲線 <span class=\"chem\">y = sqrt(x)</span> 與直線 <span class=\"chem\">y = x / 2</span> 圍成。求 (Find) 將 <i>R</i> 繞 <i>x</i> 軸旋轉 <span class=\"chem\">2pi</span> 弧度所形成立體的準確體積。<strong>[6 marks]</strong>",

    // Area with the y-axis and volumes of revolution > worked example > data-title attribute
    "Find the x-coordinates of the points of intersection": "求交點的 x 坐標",

    // Area with the y-axis and volumes of revolution > worked example > p
    "Equating the two curves gives the limits of integration a and b along the x-axis.": "聯立兩條曲線可得沿 x 軸的積分限 a 與 b。",

    // Area with the y-axis and volumes of revolution > worked example > maths line
    "√<i>x</i> = <span class=\"frac\"><span><i>x</i></span><span>2</span></span> ⇒ <i>x</i> = <span class=\"frac\"><span><i>x</i><sup>2</sup></span><span>4</span></span> ⇒ <i>x</i><sup>2</sup> − 4<i>x</i> = 0 ⇒ <i>x</i> = 0 or <i>x</i> = 4 <b>[M1 A1]</b>": "√<i>x</i> = <span class=\"frac\"><span><i>x</i></span><span>2</span></span> ⇒ <i>x</i> = <span class=\"frac\"><span><i>x</i><sup>2</sup></span><span>4</span></span> ⇒ <i>x</i><sup>2</sup> − 4<i>x</i> = 0 ⇒ <i>x</i> = 0 或 <i>x</i> = 4 <b>[M1 A1]</b>",

    // Area with the y-axis and volumes of revolution > worked example > data-title attribute
    "Set up the washer integral π ∫ (y_outer² − y_inner²) dx": "列出墊圈積分 π ∫ (y_outer² − y_inner²) dx",

    // Area with the y-axis and volumes of revolution > worked example > p
    "On [0, 4], √x ≥ x/2, so y_outer = √x and y_inner = x/2. Square each radius separately before subtracting.": "在 [0, 4] 上 √x ≥ x/2，故 y_outer = √x 且 y_inner = x/2。先各自平方再相減。",

    // Area with the y-axis and volumes of revolution > worked example > data-title attribute
    "Anti-differentiate and evaluate at the limits": "求原函數並在上下限處求值",

    // Area with the y-axis and volumes of revolution > worked example > p
    "Use the power rule and substitute x = 4 and x = 0.": "使用冪法則並代入 x = 4 與 x = 0。",

    // Area with the y-axis and volumes of revolution > try it > p
    "The region bounded by the curve <span class=\"chem\">y = x^2</span>, the <i>y</i>-axis, and the horizontal line <span class=\"chem\">y = 4</span> in the first quadrant is rotated through <span class=\"chem\">2pi</span> radians about the <strong><i>y</i>-axis</strong>. Find the volume of the solid generated (type an exact multiple of <span class=\"mono\">pi</span> such as <span class=\"mono\">8*pi</span>, or a 3 s.f. decimal).": "在第一象限內由曲線 <span class=\"chem\">y = x^2</span>、<i>y</i> 軸與水平線 <span class=\"chem\">y = 4</span> 所圍成的區域繞 <strong><i>y</i> 軸</strong>旋轉 <span class=\"chem\">2pi</span> 弧度。求 (Find) 所產生立體的體積（輸入 <span class=\"mono\">pi</span> 的準確倍數如 <span class=\"mono\">8*pi</span>，或準確至 3 位有效數字的小數）。",

    // Area with the y-axis and volumes of revolution > try it > li
    "For rotation about the <i>y</i>-axis, use <span class=\"chem\">V = pi int_c^d x^2 dy</span>. Since <span class=\"chem\">y = x^2</span>, we can substitute <span class=\"chem\">x^2 = y</span> directly!": "繞 <i>y</i> 軸旋轉時，使用 <span class=\"chem\">V = pi int_c^d x^2 dy</span>。由於 <span class=\"chem\">y = x^2</span>，我們可直接代入 <span class=\"chem\">x^2 = y</span>！",

    // Area with the y-axis and volumes of revolution > try it > li
    "Integrate with respect to <i>y</i> from <span class=\"chem\">y = 0</span> to <span class=\"chem\">y = 4</span>: <span class=\"chem\">V = pi int_0^4 y dy = pi [y^2 / 2]_0^4</span>.": "對 <i>y</i> 從 <span class=\"chem\">y = 0</span> 積分至 <span class=\"chem\">y = 4</span>：<span class=\"chem\">V = pi int_0^4 y dy = pi [y^2 / 2]_0^4</span>。",

    // Quick practice > data-toc attribute
    "Practice": "練習",

    // Quick practice > h2
    "Quick practice": "快速練習",

    // widget string (assets/js/widgets-t5-3.js)
    "Indeterminate 0/0 limit": "0/0 型不定極限",

    // widget string (assets/js/widgets-t5-3.js)
    "lim (x→0) sin(2x) / ln(1 + x)": "lim (x→0) sin(2x) / ln(1 + x)",

    // widget string (assets/js/widgets-t5-3.js)
    "lim (x→0) (e^x − 1) / sin(x)": "lim (x→0) (e^x − 1) / sin(x)",

    // widget string (assets/js/widgets-t5-3.js)
    "lim (x→1) ln(x) / (x^2 − 1)": "lim (x→1) ln(x) / (x^2 − 1)",

    // widget string (assets/js/widgets-t5-3.js)
    "lim (x→π/2) cos(x) / (2x − π)": "lim (x→π/2) cos(x) / (2x − π)",

    // widget string (assets/js/widgets-t5-3.js)
    "Zoom magnification around x = a": "圍繞 x = a 的放大倍率",

    // widget string (assets/js/widgets-t5-3.js)
    "At x = a": "在 x = a 處",

    // widget string (assets/js/widgets-t5-3.js)
    "Sample ratio f(x)/g(x)": "取樣比值 f(x)/g(x)",

    // widget string (assets/js/widgets-t5-3.js)
    "Tangent slope ratio f′(a)/g′(a)": "切線斜率之比 f′(a)/g′(a)",

    // widget string (assets/js/widgets-t5-3.js)
    "Linearization gap": "線性化差距",

    // widget string (assets/js/widgets-t5-3.js)
    "Local linearization of f(x) and g(x) near x = a": "f(x) 與 g(x) 在 x = a 附近的局部線性近似",

    // widget string (assets/js/widgets-t5-3.js)
    "Tangent f′(a)(x − a)": "切線 f′(a)(x − a)",

    // widget string (assets/js/widgets-t5-3.js)
    "Tangent g′(a)(x − a)": "切線 g′(a)(x − a)",

    // widget string (assets/js/widgets-t5-3.js)
    "Solid profile": "旋轉體輪廓",

    // widget string (assets/js/widgets-t5-3.js)
    "Disc: y = √x": "圓盤：y = √x",

    // widget string (assets/js/widgets-t5-3.js)
    "Disc: y = 0.5x (cone)": "圓盤：y = 0.5x（圓錐）",

    // widget string (assets/js/widgets-t5-3.js)
    "Disc: y = sin(x) + 0.8": "圓盤：y = sin(x) + 0.8",

    // widget string (assets/js/widgets-t5-3.js)
    "Washer: outer y = √x, inner y = 0.5x": "墊圈：外曲線 y = √x，內曲線 y = 0.5x",

    // widget string (assets/js/widgets-t5-3.js)
    "Upper limit b": "上限 b",

    // widget string (assets/js/widgets-t5-3.js)
    "Number of discs N": "圓盤數目 N",

    // widget string (assets/js/widgets-t5-3.js)
    "Riemann N-disc sum": "黎曼 N 個圓盤總和",

    // widget string (assets/js/widgets-t5-3.js)
    "Exact integral V = π ∫ y² dx": "準確積分 V = π ∫ y² dx",

    // widget string (assets/js/widgets-t5-3.js)
    "Approximation error": "近似誤差",

    // widget string (assets/js/widgets-t5-3.js)
    "2D cross-section and Riemann slices": "2D 截面與黎曼切片",

    // widget string (assets/js/widgets-t5-3.js)
    "3D solid of revolution about the x-axis": "繞 x 軸旋轉的 3D 旋轉體",

  }
});
