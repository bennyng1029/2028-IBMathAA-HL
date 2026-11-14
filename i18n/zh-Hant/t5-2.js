/* t5-2 — zh-Hant translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't5-2', {
  strings: {

    // page title (browser tab)
    "5.2 Integration, areas between curves and kinematics | Analysis Lab": "5.2 積分、曲線間面積與運動學 | Analysis Lab",

    // Integration, areas between curves and kinematics > page header > p
    "Topic 5.2 · SL 5.5, 5.9–5.11": "課題 5.2 · SL 5.5, 5.9–5.11",

    // Integration, areas between curves and kinematics > page header > h1
    "Integration, areas between curves and kinematics": "積分、曲線間面積與運動學",

    // Integration, areas between curves and kinematics > page header > span
    "How does reversing differentiation let us reconstruct a function from its rate of change, measure exact areas between curves, and track the motion of a particle?": "逆轉微分如何讓我們從變率重建函數、量度曲線之間的準確面積，並追蹤質點的運動？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "學習清單",

    // What you need to be able to do > h2
    "What you need to be able to do": "你需要掌握的能力",

    // What you need to be able to do > checklist > span
    "Integrate powers <span class=\"chem\">x^n</span> (<span class=\"chem\">n != -1</span>), <span class=\"chem\">1/x</span>, <span class=\"chem\">sin x</span>, <span class=\"chem\">cos x</span>, and <span class=\"chem\">e^x</span>, including linear composites <span class=\"chem\">f(ax + b)</span>, and find the constant of integration <span class=\"chem\">+C</span> from a boundary condition.": "求冪函數 <span class=\"chem\">x^n</span>（<span class=\"chem\">n != -1</span>）、<span class=\"chem\">1/x</span>、<span class=\"chem\">sin x</span>、<span class=\"chem\">cos x</span> 與 <span class=\"chem\">e^x</span>（包括線性複合函數 <span class=\"chem\">f(ax + b)</span>）的積分，並從邊界條件求積分常數 <span class=\"chem\">+C</span>。",

    // What you need to be able to do > checklist > span
    "Recognize and evaluate integrals of the form <span class=\"chem\">int k g'(x) f(g(x)) dx</span> by inspection (reverse chain rule) or substitution.": "透過觀察（逆鏈式法則）或代換法辨識並計算形如 <span class=\"chem\">int k g'(x) f(g(x)) dx</span> 的積分。",

    // What you need to be able to do > checklist > span
    "Evaluate definite integrals using the Fundamental Theorem of Calculus <span class=\"chem\">int_a^b f'(x) dx = f(b) - f(a)</span> and apply definite integral properties.": "利用微積分基本定理 <span class=\"chem\">int_a^b f'(x) dx = f(b) - f(a)</span> 計算定積分，並應用定積分的性質。",

    // What you need to be able to do > checklist > span
    "Find the area enclosed between a curve and the <span class=\"chem\">x</span>-axis (<span class=\"chem\">int_a^b |y| dx</span>) and the area enclosed between two curves (<span class=\"chem\">int_a^b (y_top - y_bottom) dx</span>).": "求曲線與 <span class=\"chem\">x</span> 軸之間所圍成的面積（<span class=\"chem\">int_a^b |y| dx</span>）以及兩條曲線之間所圍成的面積（<span class=\"chem\">int_a^b (y_top - y_bottom) dx</span>）。",

    // What you need to be able to do > checklist > span
    "Move between displacement <span class=\"chem\">s(t)</span>, velocity <span class=\"chem\">v(t) = s'(t)</span>, and acceleration <span class=\"chem\">a(t) = v'(t)</span>, and distinguish net displacement <span class=\"chem\">int_{t_1}^{t_2} v(t) dt</span> from total distance travelled <span class=\"chem\">int_{t_1}^{t_2} |v(t)| dt</span>.": "在位移 <span class=\"chem\">s(t)</span>、速度 <span class=\"chem\">v(t) = s'(t)</span> 與加速度 <span class=\"chem\">a(t) = v'(t)</span> 之間轉換，並區分淨位移 <span class=\"chem\">int_{t_1}^{t_2} v(t) dt</span> 與總路程 <span class=\"chem\">int_{t_1}^{t_2} |v(t)| dt</span>。",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "題型解碼",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "題型解碼：辨識應採用的技巧",

    // Question decoder: spotting which technique to use > p
    "Integration and kinematics questions on IB exams rely on specific structural cues and motion words. Use this decoder to spot the right method immediately.": "IB 考題中的積分與運動學題目常依賴特定的結構線索與運動字眼。利用下表即時辨識正確的方法。",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — Integration, areas and kinematics": "題型解碼 — 積分、面積與運動學",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "題目中的常見字眼",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "實際含義（公式與列式）",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1（不可用計算機）與 Paper 2（可用 GDC）策略",

    // Question decoder: spotting which technique to use > table > th
    "Integrand has an inner function <span class=\"chem\">g(x)</span> multiplied by a constant multiple of <span class=\"chem\">g'(x)</span>": "被積函數含有內層函數 <span class=\"chem\">g(x)</span> 乘以 <span class=\"chem\">g'(x)</span> 的常數倍數",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Reverse chain rule (inspection) / <span class=\"chem\">u</span>-substitution:</strong><br>• <span class=\"chem\">int g'(x) [g(x)]^n dx = [g(x)]^{n+1} / (n + 1) + C</span><br>• <span class=\"chem\">int g'(x) e^{g(x)} dx = e^{g(x)} + C</span><br>• <span class=\"chem\">int (g'(x) / g(x)) dx = ln|g(x)| + C</span>": "<strong>逆鏈式法則（觀察法）／ <span class=\"chem\">u</span> 代換法：</strong><br>• <span class=\"chem\">int g'(x) [g(x)]^n dx = [g(x)]^{n+1} / (n + 1) + C</span><br>• <span class=\"chem\">int g'(x) e^{g(x)} dx = e^{g(x)} + C</span><br>• <span class=\"chem\">int (g'(x) / g(x)) dx = ln|g(x)| + C</span>",

    // Question decoder: spotting which technique to use > table > td
    "Let <span class=\"chem\">u = g(x)</span>, so <span class=\"chem\">du = g'(x) dx</span>. For a definite integral on Paper 1, <strong>change the limits</strong> from <span class=\"chem\">x = a, b</span> to <span class=\"chem\">u = g(a), g(b)</span> so you never have to substitute back!": "設 <span class=\"chem\">u = g(x)</span>，則 <span class=\"chem\">du = g'(x) dx</span>。在 Paper 1 計算定積分時，把積分限由 <span class=\"chem\">x = a, b</span> <strong>更換</strong>為 <span class=\"chem\">u = g(a), g(b)</span>，便無須代回原變數！",

    // Question decoder: spotting which technique to use > table > th
    "“(a) Differentiate <span class=\"chem\">F(x)</span>. (b) Hence find <span class=\"chem\">int f(x) dx</span>.”": "「(a) 對 <span class=\"chem\">F(x)</span> 求導。(b) 由此求 <span class=\"chem\">int f(x) dx</span>。」",

    // Question decoder: spotting which technique to use > table > td
    "“Hence” means you <strong>must</strong> reverse your answer from part (a): if <span class=\"chem\">F'(x) = k f(x) + h(x)</span>, then <span class=\"chem\">int f(x) dx = (1/k)[F(x) - int h(x) dx] + C</span>.": "「由此 (Hence)」代表你<strong>必須</strong>逆轉 (a) 部的答案：若 <span class=\"chem\">F'(x) = k f(x) + h(x)</span>，則 <span class=\"chem\">int f(x) dx = (1/k)[F(x) - int h(x) dx] + C</span>。",

    // Question decoder: spotting which technique to use > table > td
    "Write the integral of both sides of your part (a) equation immediately—never try to integrate <span class=\"chem\">f(x)</span> from scratch when “Hence” is used!": "立即對 (a) 部方程的兩邊取積分——當題目寫明「由此 (Hence)」時，切勿嘗試從頭直接對 <span class=\"chem\">f(x)</span> 積分！",

    // Question decoder: spotting which technique to use > table > th
    "“Find the area of the region enclosed by <span class=\"chem\">y = f(x)</span> and the <span class=\"chem\">x</span>-axis”": "「求由 <span class=\"chem\">y = f(x)</span> 與 <span class=\"chem\">x</span> 軸所圍成區域的面積」",

    // Question decoder: spotting which technique to use > table > td
    "Geometric area is always positive: <span class=\"chem\">A = int_a^b |f(x)| dx</span>.": "幾何面積永遠為正：<span class=\"chem\">A = int_a^b |f(x)| dx</span>。",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Paper 1:</strong> Find any <span class=\"chem\">x</span>-intercept <span class=\"chem\">c in (a, b)</span> where <span class=\"chem\">f(x) &lt; 0</span> and split: <span class=\"chem\">int_a^c f(x) dx - int_c^b f(x) dx</span>.<br><strong>Paper 2:</strong> Enter <span class=\"mono\">fnInt(abs(f(x)), x, a, b)</span> directly on GDC.": "<strong>Paper 1：</strong>找出在 <span class=\"chem\">c in (a, b)</span> 處使 <span class=\"chem\">f(x) &lt; 0</span> 的任何 <span class=\"chem\">x</span> 截距並分段：<span class=\"chem\">int_a^c f(x) dx - int_c^b f(x) dx</span>。<br><strong>Paper 2：</strong>直接在 GDC 輸入 <span class=\"mono\">fnInt(abs(f(x)), x, a, b)</span>。",

    // Question decoder: spotting which technique to use > table > th
    "“Initially” / “At the origin <span class=\"chem\">O</span>” / “Momentarily at rest / changes direction / maximum displacement”": "「最初」／「在原點 <span class=\"chem\">O</span>」／「瞬時靜止／改變方向／最大位移」",

    // Question decoder: spotting which technique to use > table > td
    "• <strong>Initially:</strong> <span class=\"chem\">t = 0</span><br>• <strong>At the origin:</strong> <span class=\"chem\">s(t) = 0</span><br>• <strong>At rest / max displacement:</strong> <span class=\"chem\">v(t) = 0</span><br>• <strong>Changes direction:</strong> <span class=\"chem\">v(t) = 0</span> <em>and</em> <span class=\"chem\">v(t)</span> changes sign!": "• <strong>最初：</strong><span class=\"chem\">t = 0</span><br>• <strong>在原點：</strong><span class=\"chem\">s(t) = 0</span><br>• <strong>靜止／最大位移：</strong><span class=\"chem\">v(t) = 0</span><br>• <strong>改變方向：</strong><span class=\"chem\">v(t) = 0</span> <em>且</em> <span class=\"chem\">v(t)</span> 改變正負號！",

    // Question decoder: spotting which technique to use > table > td
    "For “maximum/minimum velocity” or “constant velocity”, set acceleration <span class=\"chem\">a(t) = v'(t) = 0</span>. For “maximum speed”, maximize <span class=\"chem\">|v(t)|</span> (check turning points and endpoints!).": "對於「最大／最小速度」或「勻速」，令加速度 <span class=\"chem\">a(t) = v'(t) = 0</span>。對於「最大速率」，求 <span class=\"chem\">|v(t)|</span> 的極大值（須檢查轉向點與端點！）。",

    // Question decoder: spotting which technique to use > table > th
    "“Find the displacement vs total distance travelled from <span class=\"chem\">t = t_1</span> to <span class=\"chem\">t = t_2</span>”": "「求由 <span class=\"chem\">t = t_1</span> 至 <span class=\"chem\">t = t_2</span> 的位移與總路程」",

    // Question decoder: spotting which technique to use > table > td
    "• <strong>Displacement:</strong> <span class=\"chem\">Delta s = s(t_2) - s(t_1) = int_{t_1}^{t_2} v(t) dt</span><br>• <strong>Total distance:</strong> <span class=\"chem\">d = int_{t_1}^{t_2} |v(t)| dt</span>": "• <strong>位移：</strong><span class=\"chem\">Delta s = s(t_2) - s(t_1) = int_{t_1}^{t_2} v(t) dt</span><br>• <strong>總路程：</strong><span class=\"chem\">d = int_{t_1}^{t_2} |v(t)| dt</span>",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Paper 1:</strong> Solve <span class=\"chem\">v(t) = 0</span> to find any turning time <span class=\"chem\">t^* in (t_1, t_2)</span> and sum the absolute integrals of each leg.<br><strong>Paper 2:</strong> Integrate <span class=\"chem\">|v(t)|</span> on your GDC in one step.": "<strong>Paper 1：</strong>解 <span class=\"chem\">v(t) = 0</span> 找出任何轉向時間 <span class=\"chem\">t^* in (t_1, t_2)</span>，再把每段積分的絕對值相加。<br><strong>Paper 2：</strong>在 GDC 上一步對 <span class=\"chem\">|v(t)|</span> 積分。",

    // Indefinite integrals, standard forms and the reverse chain r > data-toc attribute
    "Antiderivatives & substitution": "原函數與代換法",

    // Indefinite integrals, standard forms and the reverse chain r > h2
    "Indefinite integrals, standard forms and the reverse chain rule": "不定積分、標準形式與逆鏈式法則",

    // Indefinite integrals, standard forms and the reverse chain r > p
    "Integration (anti-differentiation) reverses differentiation: if <span class=\"chem\">F'(x) = f(x)</span>, then the <dfn data-def=\"The family of all antiderivatives of f(x), written F(x) + C where F'(x) = f(x) and C is an arbitrary constant.\">indefinite integral</dfn> is <span class=\"chem\">int f(x) dx = F(x) + C</span>. Because any constant disappears when differentiated (<span class=\"chem\">d/dx (C) = 0</span>), you must always include <span class=\"chem\">+ C</span> on an indefinite integral. If the question gives one point <span class=\"chem\">(x_0, y_0)</span> on the curve (a <strong>boundary condition</strong> or <strong>initial condition</strong>), substitute <span class=\"chem\">x = x_0</span> and <span class=\"chem\">y = y_0</span> to find the exact value of <span class=\"chem\">C</span>.": "積分（反微分）是微分的逆運算：若 <span class=\"chem\">F'(x) = f(x)</span>，則<dfn data-def=\"f(x) 的所有原函數組成的函數族，寫作 F(x) + C，其中 F'(x) = f(x) 而 C 為任意常數。\">不定積分 <span class=\"en-term\">(indefinite integral)</span></dfn>為 <span class=\"chem\">int f(x) dx = F(x) + C</span>。由於任何常數求導後都會消失（<span class=\"chem\">d/dx (C) = 0</span>），計算不定積分時必須加上 <span class=\"chem\">+ C</span>。若題目給出曲線上的一點 <span class=\"chem\">(x_0, y_0)</span>（<strong>邊界條件</strong>或<strong>初始條件</strong>），代入 <span class=\"chem\">x = x_0</span> 與 <span class=\"chem\">y = y_0</span> 即可求得 <span class=\"chem\">C</span> 的準確值。",

    // Indefinite integrals, standard forms and the reverse chain r > data-def attribute
    "The family of all antiderivatives of f(x), written F(x) + C where F'(x) = f(x) and C is an arbitrary constant.": "f(x) 的所有原函數組成的函數族，寫作 F(x) + C，其中 F'(x) = f(x) 而 C 為任意常數。",

    // Indefinite integrals, standard forms and the reverse chain r > formula booklet note > p
    "<strong>In your formula booklet (SL 5.5):</strong> Standard integrals given in the booklet:": "<strong>公式手冊中的標準積分（SL 5.5）：</strong>",

    // Indefinite integrals, standard forms and the reverse chain r > formula booklet note > li
    "<span class=\"chem\">int x^n dx = x^{n+1} / (n + 1) + C</span> (<span class=\"chem\">n != -1</span>)": "<span class=\"chem\">int x^n dx = x^{n+1} / (n + 1) + C</span>（<span class=\"chem\">n != -1</span>）",

    // Indefinite integrals, standard forms and the reverse chain r > formula booklet note > li
    "<span class=\"chem\">int (1/x) dx = ln|x| + C</span>": "<span class=\"chem\">int (1/x) dx = ln|x| + C</span>",

    // Indefinite integrals, standard forms and the reverse chain r > formula booklet note > li
    "<span class=\"chem\">int sin x dx = -cos x + C</span> and <span class=\"chem\">int cos x dx = sin x + C</span>": "<span class=\"chem\">int sin x dx = -cos x + C</span> 及 <span class=\"chem\">int cos x dx = sin x + C</span>",

    // Indefinite integrals, standard forms and the reverse chain r > formula booklet note > li
    "<span class=\"chem\">int e^x dx = e^x + C</span>": "<span class=\"chem\">int e^x dx = e^x + C</span>",

    // Indefinite integrals, standard forms and the reverse chain r > h3
    "Composites with a linear inner function <span class=\"chem\">(ax + b)</span>": "帶有線性內層函數 <span class=\"chem\">(ax + b)</span> 的複合函數",

    // Indefinite integrals, standard forms and the reverse chain r > p
    "When differentiating <span class=\"chem\">F(ax + b)</span>, the chain rule multiplies by the constant <span class=\"chem\">a</span>. Therefore, when integrating <span class=\"chem\">f(ax + b)</span>, you reverse that step by <strong>dividing by <span class=\"chem\">a</span></strong> (multiplying by <span class=\"chem\">1/a</span>):": "對 <span class=\"chem\">F(ax + b)</span> 求導時，鏈式法會乘以常數 <span class=\"chem\">a</span>。因此對 <span class=\"chem\">f(ax + b)</span> 積分時，我們透過<strong>除以 <span class=\"chem\">a</span></strong>（即乘以 <span class=\"chem\">1/a</span>）來逆轉該步驟：",

    // Indefinite integrals, standard forms and the reverse chain r > li
    "<span class=\"chem\">int (ax + b)^n dx = (ax + b)^{n+1} / [a(n + 1)] + C</span> (<span class=\"chem\">n != -1</span>)": "<span class=\"chem\">int (ax + b)^n dx = (ax + b)^{n+1} / [a(n + 1)] + C</span>（<span class=\"chem\">n != -1</span>）",

    // Indefinite integrals, standard forms and the reverse chain r > li
    "<span class=\"chem\">int (1 / (ax + b)) dx = (1/a) ln|ax + b| + C</span>": "<span class=\"chem\">int (1 / (ax + b)) dx = (1/a) ln|ax + b| + C</span>",

    // Indefinite integrals, standard forms and the reverse chain r > li
    "<span class=\"chem\">int e^{ax+b} dx = (1/a) e^{ax+b} + C</span>": "<span class=\"chem\">int e^{ax+b} dx = (1/a) e^{ax+b} + C</span>",

    // Indefinite integrals, standard forms and the reverse chain r > li
    "<span class=\"chem\">int sin(ax + b) dx = -(1/a) cos(ax + b) + C</span> and <span class=\"chem\">int cos(ax + b) dx = (1/a) sin(ax + b) + C</span>": "<span class=\"chem\">int sin(ax + b) dx = -(1/a) cos(ax + b) + C</span> 及 <span class=\"chem\">int cos(ax + b) dx = (1/a) sin(ax + b) + C</span>",

    // Indefinite integrals, standard forms and the reverse chain r > common mistake > p
    "<strong>Common mistake — Dividing by a non-linear derivative:</strong> The “divide by <span class=\"chem\">a</span>” shortcut works <strong>only when the inside function is linear</strong> (<span class=\"chem\">ax + b</span>, whose derivative <span class=\"chem\">a</span> is a constant). You can <em>never</em> integrate <span class=\"chem\">int e^{x^2} dx</span> as <span class=\"chem\">e^{x^2} / (2x)</span>! If the inside function is non-linear (like <span class=\"chem\">x^2</span> or <span class=\"chem\">sin x</span>), its derivative <span class=\"chem\">g'(x)</span> must already be multiplying the integrand outside.": "<strong>常見錯誤 — 除以非線性導數：</strong>「除以 <span class=\"chem\">a</span>」的捷徑<strong>僅適用於內層函數為線性</strong>（<span class=\"chem\">ax + b</span>，其導數 <span class=\"chem\">a</span> 為常數）的情況。你絕<em>不能</em>把 <span class=\"chem\">int e^{x^2} dx</span> 積分為 <span class=\"chem\">e^{x^2} / (2x)</span>！若內層函數是非線性的（如 <span class=\"chem\">x^2</span> 或 <span class=\"chem\">sin x</span>），其導數 <span class=\"chem\">g'(x)</span> 必須本來就乘在被積函數外面。",

    // Indefinite integrals, standard forms and the reverse chain r > h3
    "Integration by inspection (reverse chain rule) and <span class=\"chem\">u</span>-substitution": "觀察積分法（逆鏈式法則）與 <span class=\"chem\">u</span> 代換法",

    // Indefinite integrals, standard forms and the reverse chain r > p
    "Whenever an integrand contains a composite function <span class=\"chem\">f(g(x))</span> multiplied by a constant multiple of the inner derivative <span class=\"chem\">g'(x)</span>, set <span class=\"chem\">u = g(x)</span> so that <span class=\"chem\">du = g'(x) dx</span>:": "每當被積函數包含複合函數 <span class=\"chem\">f(g(x))</span> 乘以內層導數 <span class=\"chem\">g'(x)</span> 的常數倍數時，設 <span class=\"chem\">u = g(x)</span> 使 <span class=\"chem\">du = g'(x) dx</span>：",

    // Indefinite integrals, standard forms and the reverse chain r > equation > dd
    "inner function (inside a power, root, exponent, denominator, or trig function)": "內層函數（位於冪次、根式、指數、分母或三角函數之內）",

    // Indefinite integrals, standard forms and the reverse chain r > equation > dt
    "du = g'(x) dx": "du = g'(x) dx",

    // Indefinite integrals, standard forms and the reverse chain r > equation > dd
    "differential that absorbs the outside factor g'(x) dx": "吸收外層因子 g'(x) dx 的微分",

    // Indefinite integrals, standard forms and the reverse chain r > p
    "Three reverse-chain-rule patterns appear constantly on Paper 1:": "以下三種逆鏈式法則模式在 Paper 1 中經常出現：",

    // Indefinite integrals, standard forms and the reverse chain r > li
    "<strong>Power / root pattern:</strong> <span class=\"chem\">int 6x (3x^2 + 1)^4 dx</span>. Since <span class=\"chem\">d/dx (3x^2 + 1) = 6x</span>, this is <span class=\"chem\">int u^4 du = (3x^2 + 1)^5 / 5 + C</span>.": "<strong>冪次／根式模式：</strong><span class=\"chem\">int 6x (3x^2 + 1)^4 dx</span>。由於 <span class=\"chem\">d/dx (3x^2 + 1) = 6x</span>，這即為 <span class=\"chem\">int u^4 du = (3x^2 + 1)^5 / 5 + C</span>。",

    // Indefinite integrals, standard forms and the reverse chain r > li
    "<strong>Exponential pattern:</strong> <span class=\"chem\">int x e^{x^2} dx</span>. Since <span class=\"chem\">d/dx (x^2) = 2x</span>, adjust by <span class=\"chem\">1/2</span>: <span class=\"chem\">(1/2) int 2x e^{x^2} dx = (1/2) e^{x^2} + C</span>.": "<strong>指數模式：</strong><span class=\"chem\">int x e^{x^2} dx</span>。由於 <span class=\"chem\">d/dx (x^2) = 2x</span>，乘以調整係數 <span class=\"chem\">1/2</span>：<span class=\"chem\">(1/2) int 2x e^{x^2} dx = (1/2) e^{x^2} + C</span>。",

    // Indefinite integrals, standard forms and the reverse chain r > li
    "<strong>Logarithmic fraction pattern (<span class=\"chem\">g'(x) / g(x)</span>):</strong> Whenever the numerator of a fraction is a constant multiple of the derivative of the denominator, the integral is a natural logarithm! For example, <span class=\"chem\">int (cos x / (2 + sin x)) dx = ln|2 + sin x| + C</span>, and <span class=\"chem\">int (x / (x^2 + 4)) dx = (1/2) ln(x^2 + 4) + C</span>.": "<strong>對數分式模式（<span class=\"chem\">g'(x) / g(x)</span>）：</strong>每當分式的分子是分母導數的常數倍數時，其積分即為自然對數！例如 <span class=\"chem\">int (cos x / (2 + sin x)) dx = ln|2 + sin x| + C</span>，及 <span class=\"chem\">int (x / (x^2 + 4)) dx = (1/2) ln(x^2 + 4) + C</span>。",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > h3
    "Finding a function from its gradient and a boundary condition": "從斜率函數與邊界條件求原函數",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > p
    "The gradient of a curve <span class=\"chem\">y = f(x)</span> at any point <span class=\"chem\">(x, y)</span> is given by <span class=\"chem\">f'(x) = (6x) / (x^2 + 3) + 4 e^{-2x}</span>. Given that the curve passes through the point <span class=\"chem\">(0, 3 ln 3)</span>, find an expression for <span class=\"chem\">f(x)</span>. <strong>[6 marks]</strong>": "曲線 <span class=\"chem\">y = f(x)</span> 在任意點 <span class=\"chem\">(x, y)</span> 處的斜率為 <span class=\"chem\">f'(x) = (6x) / (x^2 + 3) + 4 e^{-2x}</span>。已知該曲線通過點 <span class=\"chem\">(0, 3 ln 3)</span>，求 (find) <span class=\"chem\">f(x)</span> 的表達式。<strong>[6 marks]</strong>",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > data-title attribute
    "Spot the g'(x)/g(x) pattern on the first term and linear exponential on the second": "辨識第一項的 g'(x)/g(x) 模式與第二項的線性指數函數",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > p
    "For 6x / (x² + 3), the derivative of the denominator x² + 3 is 2x, so 6x = 3(2x). For 4e⁻²ˣ, the linear coefficient is a = −2.": "對於 6x / (x² + 3)，分母 x² + 3 的導數是 2x，故 6x = 3(2x)。對於 4e⁻²ˣ，線性係數為 a = −2。",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > data-title attribute
    "Substitute the boundary condition (0, 3 ln 3) to solve for C": "代入邊界條件 (0, 3 ln 3) 解出 C",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > p
    "Remember that e⁰ = 1 (never 0!), so substituting x = 0 does not make the exponential term vanish.": "緊記 e⁰ = 1（絕不是 0！），故代入 x = 0 不會令指數項消失。",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > data-title attribute
    "Write the complete equation for f(x)": "寫出 f(x) 的完整方程",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > p
    "Substitute C = 2 back into f(x).": "將 C = 2 代回 f(x)。",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > p
    "<span class=\"chem\">f(x) = 3 ln(x^2 + 3) - 2e^{-2x} + 2</span>": "<span class=\"chem\">f(x) = 3 ln(x^2 + 3) - 2e^{-2x} + 2</span>",

    // Indefinite integrals, standard forms and the reverse chain r > try it > p
    "A curve satisfies <span class=\"chem\">f'(x) = 6x (x^2 - 1)^2</span> and passes through the point <span class=\"chem\">(1, 14)</span>. Calculate the value of the <span class=\"chem\">y</span>-intercept <span class=\"chem\">f(0)</span>.": "某曲線滿足 <span class=\"chem\">f'(x) = 6x (x^2 - 1)^2</span> 且通過點 <span class=\"chem\">(1, 14)</span>。計算 (Calculate) <span class=\"chem\">y</span> 截距 <span class=\"chem\">f(0)</span> 的值。",

    // Indefinite integrals, standard forms and the reverse chain r > try it > li
    "Let <span class=\"chem\">u = x^2 - 1</span> so <span class=\"chem\">du = 2x dx</span>. Then <span class=\"chem\">f(x) = int 3(2x)(x^2 - 1)^2 dx = (x^2 - 1)^3 + C</span>.": "設 <span class=\"chem\">u = x^2 - 1</span>，故 <span class=\"chem\">du = 2x dx</span>。則 <span class=\"chem\">f(x) = int 3(2x)(x^2 - 1)^2 dx = (x^2 - 1)^3 + C</span>。",

    // Indefinite integrals, standard forms and the reverse chain r > try it > li
    "Use <span class=\"chem\">f(1) = (1^2 - 1)^3 + C = 14</span> to find <span class=\"chem\">C = 14</span>, then evaluate <span class=\"chem\">f(0) = (0 - 1)^3 + 14</span>.": "利用 <span class=\"chem\">f(1) = (1^2 - 1)^3 + C = 14</span> 求得 <span class=\"chem\">C = 14</span>，再計算 <span class=\"chem\">f(0) = (0 - 1)^3 + 14</span>。",

    // Definite integrals, signed integrals vs geometric area, and  > data-toc attribute
    "Definite integrals & areas": "定積分與面積",

    // Definite integrals, signed integrals vs geometric area, and  > h2
    "Definite integrals, signed integrals vs geometric area, and area between curves": "定積分、帶號積分與幾何面積，以及曲線間面積",

    // Definite integrals, signed integrals vs geometric area, and  > p
    "By the <dfn data-def=\"If F'(x) = f(x) on [a, b], then the definite integral of f(x) from x = a to x = b equals F(b) - F(a).\">Fundamental Theorem of Calculus</dfn>, if <span class=\"chem\">F(x)</span> is any antiderivative of <span class=\"chem\">f(x)</span>, then:": "根據<dfn data-def=\"若在 [a, b] 上 F'(x) = f(x)，則 f(x) 由 x = a 至 x = b 的定積分等於 F(b) - F(a)。\">微積分基本定理 <span class=\"en-term\">(Fundamental Theorem of Calculus)</span></dfn>，若 <span class=\"chem\">F(x)</span> 是 <span class=\"chem\">f(x)</span> 的任意一個原函數，則：",

    // Definite integrals, signed integrals vs geometric area, and  > data-def attribute
    "If F'(x) = f(x) on [a, b], then the definite integral of f(x) from x = a to x = b equals F(b) - F(a).": "若在 [a, b] 上 F'(x) = f(x)，則 f(x) 由 x = a 至 x = b 的定積分等於 F(b) - F(a)。",

    // Definite integrals, signed integrals vs geometric area, and  > equation > dd
    "lower and upper limits of integration": "積分的下限與上限",

    // Definite integrals, signed integrals vs geometric area, and  > equation > dd
    "any antiderivative satisfying <i>F'</i>(<i>x</i>) = <i>f</i>(<i>x</i>) (the +<i>C</i> cancels in <i>F</i>(<i>b</i>) − <i>F</i>(<i>a</i>))": "任何滿足 <i>F'</i>(<i>x</i>) = <i>f</i>(<i>x</i>) 的原函數（+<i>C</i> 在 <i>F</i>(<i>b</i>) − <i>F</i>(<i>a</i>) 中相消）",

    // Definite integrals, signed integrals vs geometric area, and  > h3
    "Key properties of definite integrals": "定積分的主要性質",

    // Definite integrals, signed integrals vs geometric area, and  > p
    "Paper 1 frequently tests whether you can manipulate definite integrals without knowing the formula for <span class=\"chem\">f(x)</span>:": "Paper 1 經常考驗你能否在不知道 <span class=\"chem\">f(x)</span> 解析式的情況下運算定積分：",

    // Definite integrals, signed integrals vs geometric area, and  > li
    "<strong>Reversing limits flips the sign:</strong> <span class=\"chem\">int_b^a f(x) dx = - int_a^b f(x) dx</span>, and <span class=\"chem\">int_a^a f(x) dx = 0</span>.": "<strong>對調上下限反轉正負號：</strong><span class=\"chem\">int_b^a f(x) dx = - int_a^b f(x) dx</span>，且 <span class=\"chem\">int_a^a f(x) dx = 0</span>。",

    // Definite integrals, signed integrals vs geometric area, and  > li
    "<strong>Linearity:</strong> <span class=\"chem\">int_a^b [k f(x) + c] dx = k int_a^b f(x) dx + c(b - a)</span>. <em>(Watch out for the constant <span class=\"chem\">c</span>: integrating a constant <span class=\"chem\">c</span> from <span class=\"chem\">a</span> to <span class=\"chem\">b</span> gives <span class=\"chem\">c(b - a)</span>, not just <span class=\"chem\">c</span>!)</em>": "<strong>線性性質：</strong><span class=\"chem\">int_a^b [k f(x) + c] dx = k int_a^b f(x) dx + c(b - a)</span>。<em>（留意常數 <span class=\"chem\">c</span>：把常數 <span class=\"chem\">c</span> 從 <span class=\"chem\">a</span> 積分至 <span class=\"chem\">b</span> 得 <span class=\"chem\">c(b - a)</span>，而不只是 <span class=\"chem\">c</span>！）</em>",

    // Definite integrals, signed integrals vs geometric area, and  > li
    "<strong>Additivity over adjacent intervals:</strong> <span class=\"chem\">int_a^b f(x) dx + int_b^c f(x) dx = int_a^c f(x) dx</span>.": "<strong>相鄰區間的可加性：</strong><span class=\"chem\">int_a^b f(x) dx + int_b^c f(x) dx = int_a^c f(x) dx</span>。",

    // Definite integrals, signed integrals vs geometric area, and  > li
    "<strong>Horizontal shift:</strong> <span class=\"chem\">int_a^b f(x - k) dx = int_{a-k}^{b-k} f(u) du</span> (shifting the curve right by <span class=\"chem\">k</span> shifts the limits right by <span class=\"chem\">k</span>).": "<strong>水平平移：</strong><span class=\"chem\">int_a^b f(x - k) dx = int_{a-k}^{b-k} f(u) du</span>（把曲線向右平移 <span class=\"chem\">k</span> 會使積分限亦向右平移 <span class=\"chem\">k</span>）。",

    // Definite integrals, signed integrals vs geometric area, and  > h3
    "Signed definite integral vs enclosed geometric area": "帶號定積分與所圍幾何面積",

    // Definite integrals, signed integrals vs geometric area, and  > p
    "A definite integral <span class=\"chem\">int_a^b f(x) dx</span> is a <strong>signed</strong> sum: regions where <span class=\"chem\">f(x) &gt; 0</span> (above the <span class=\"chem\">x</span>-axis) contribute positively, while regions where <span class=\"chem\">f(x) &lt; 0</span> (below the <span class=\"chem\">x</span>-axis) contribute <strong>negatively</strong>. In contrast, the <strong>geometric area</strong> enclosed by a curve and the <span class=\"chem\">x</span>-axis is always positive:": "定積分 <span class=\"chem\">int_a^b f(x) dx</span> 是<strong>帶號</strong>總和：<span class=\"chem\">f(x) &gt; 0</span> 的區域（位於 <span class=\"chem\">x</span> 軸上方）作正貢獻，而 <span class=\"chem\">f(x) &lt; 0</span> 的區域（位於 <span class=\"chem\">x</span> 軸下方）作<strong>負</strong>貢獻。相反，曲線與 <span class=\"chem\">x</span> 軸所圍成的<strong>幾何面積</strong>永遠為正：",

    // Definite integrals, signed integrals vs geometric area, and  > li
    "<strong>Area between <span class=\"chem\">y = f(x)</span> and the <span class=\"chem\">x</span>-axis on <span class=\"chem\">[a, b]</span>:</strong> <span class=\"chem\">A = int_a^b |f(x)| dx</span>. If <span class=\"chem\">f(x)</span> crosses the <span class=\"chem\">x</span>-axis at <span class=\"chem\">x = c</span> with <span class=\"chem\">f(x) &gt;= 0</span> on <span class=\"chem\">[a, c]</span> and <span class=\"chem\">f(x) &lt;= 0</span> on <span class=\"chem\">[c, b]</span>, split the integral at <span class=\"chem\">c</span>: <span class=\"chem\">A = int_a^c f(x) dx - int_c^b f(x) dx</span>.": "<strong><span class=\"chem\">y = f(x)</span> 與 <span class=\"chem\">x</span> 軸在 <span class=\"chem\">[a, b]</span> 上的面積：</strong><span class=\"chem\">A = int_a^b |f(x)| dx</span>。若 <span class=\"chem\">f(x)</span> 在 <span class=\"chem\">x = c</span> 處穿過 <span class=\"chem\">x</span> 軸（在 <span class=\"chem\">[a, c]</span> 上 <span class=\"chem\">f(x) &gt;= 0</span> 而 在 <span class=\"chem\">[c, b]</span> 上 <span class=\"chem\">f(x) &lt;= 0</span>），在 <span class=\"chem\">c</span> 處分拆積分：<span class=\"chem\">A = int_a^c f(x) dx - int_c^b f(x) dx</span>。",

    // Definite integrals, signed integrals vs geometric area, and  > li
    "<strong>Area enclosed between two curves <span class=\"chem\">y = f(x)</span> and <span class=\"chem\">y = g(x)</span>:</strong> First solve <span class=\"chem\">f(x) = g(x)</span> to find the intersection <span class=\"chem\">x</span>-coordinates <span class=\"chem\">a</span> and <span class=\"chem\">b</span>. Then integrate the upper curve minus the lower curve: <span class=\"chem\">A = int_a^b (y_top - y_bottom) dx = int_a^b |f(x) - g(x)| dx</span>. Because <span class=\"chem\">y_top - y_bottom &gt;= 0</span>, this formula automatically gives the right positive area even when one or both curves dip below the <span class=\"chem\">x</span>-axis!": "<strong>兩條曲線 <span class=\"chem\">y = f(x)</span> 與 <span class=\"chem\">y = g(x)</span> 之間所圍面積：</strong>先解 <span class=\"chem\">f(x) = g(x)</span> 求交點的 <span class=\"chem\">x</span> 坐標 <span class=\"chem\">a</span> 與 <span class=\"chem\">b</span>，再對上方曲線減下方曲線積分：<span class=\"chem\">A = int_a^b (y_top - y_bottom) dx = int_a^b |f(x) - g(x)| dx</span>。由於 <span class=\"chem\">y_top - y_bottom &gt;= 0</span>，即使其中一條或兩條曲線落於 <span class=\"chem\">x</span> 軸下方，此公式仍能自動得出正確的正面積！",

    // Definite integrals, signed integrals vs geometric area, and  > not needed for IB > p
    "<strong>Not needed for IB (Scope boundary):</strong> Numerical approximation of definite integrals using the <strong>trapezoidal rule</strong> (or Simpson's rule) belongs to <strong>IB Math AI</strong>, <strong>not</strong> IB Math AA! In Math AA, definite integrals are evaluated either analytically on Paper 1 or directly via your GDC's <span class=\"mono\">fnInt</span> (<span class=\"chem\">int</span>) command on Paper 2.": "<strong>IB 不要求的內容（課程範圍界線）：</strong>使用<strong>梯形法則</strong>（或辛普森法則）作定積分數值近似屬於 <strong>IB Math AI</strong>，並<strong>非</strong> IB Math AA！在 Math AA 中，定積分要麼在 Paper 1 以解析法計算，要麼在 Paper 2 直接透過 GDC 的 <span class=\"mono\">fnInt</span>（<span class=\"chem\">int</span>）指令計算。",

    // Definite integrals, signed integrals vs geometric area, and  > widget > data-title attribute
    "Signed integral, enclosed area and area between curves explorer": "帶號積分、所圍面積與曲線間面積探索器",

    // Definite integrals, signed integrals vs geometric area, and  > widget > figcaption
    "Adjust the integration bounds <span class=\"chem\">a</span> and <span class=\"chem\">b</span> and switch modes to see why negative lobes cancel in the signed integral <span class=\"chem\">int_a^b f(x) dx</span> but add positively in the enclosed geometric area <span class=\"chem\">int_a^b |f(x)| dx</span>.": "調校積分上下限 <span class=\"chem\">a</span> 與 <span class=\"chem\">b</span> 並切換模式，觀察為何負區域在帶號積分 <span class=\"chem\">int_a^b f(x) dx</span> 中會相消，但在所圍幾何面積 <span class=\"chem\">int_a^b |f(x)| dx</span> 中則作正相加。",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > h3
    "Finding the exact area enclosed between a parabola and a line": "求拋物線與直線所圍成的準確面積",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > p
    "Find the exact area of the finite region enclosed by the parabola <span class=\"chem\">y = 6 - x^2</span> and the line <span class=\"chem\">y = x + 4</span>. <strong>[6 marks]</strong>": "求 (Find) 由拋物線 <span class=\"chem\">y = 6 - x^2</span> 與直線 <span class=\"chem\">y = x + 4</span> 所圍成有限區域的準確面積。<strong>[6 marks]</strong>",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > data-title attribute
    "Equate the two functions to find the x-coordinates of intersection": "聯立兩個函數以求交點的 x 坐標",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > p
    "The limits of integration a and b are the x-values where the two curves cross.": "積分限 a 與 b 即為兩條曲線相交處的 x 值。",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > maths line
    "<i>x</i> = −2 and <i>x</i> = 1 <b>[A1]</b>": "<i>x</i> = −2 與 <i>x</i> = 1 <b>[A1]</b>",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > data-title attribute
    "Identify the upper curve y_top and set up ∫ (y_top − y_bottom) dx": "辨識上方曲線 y_top 並列出 ∫ (y_top − y_bottom) dx",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > p
    "At x = 0 ∈ (−2, 1), the parabola has y = 6 while the line has y = 4, so the parabola is on top.": "在 x = 0 ∈ (−2, 1) 處，拋物線的 y = 6 而直線的 y = 4，故拋物線位於上方。",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > data-title attribute
    "Integrate term by term and evaluate F(1) − F(−2)": "逐項積分並計算 F(1) − F(−2)",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > p
    "Use brackets around F(−2) to avoid sign errors with negative powers.": "為 F(−2) 加上括號，以免負數次冪產生正負號錯誤。",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > maths line
    "<i>A</i> = <span class=\"frac\"><span>7</span><span>6</span></span> − <big>(</big>−<span class=\"frac\"><span>10</span><span>3</span></span><big>)</big> = <span class=\"frac\"><span>27</span><span>6</span></span> = <b><span class=\"frac\"><span>9</span><span>2</span></span></b> (or 4.5) <b>[A1]</b>": "<i>A</i> = <span class=\"frac\"><span>7</span><span>6</span></span> − <big>(</big>−<span class=\"frac\"><span>10</span><span>3</span></span><big>)</big> = <span class=\"frac\"><span>27</span><span>6</span></span> = <b><span class=\"frac\"><span>9</span><span>2</span></span></b>（或 4.5）<b>[A1]</b>",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > p
    "<span class=\"chem\">9/2</span> (or <span class=\"chem\">4.5</span>)": "<span class=\"chem\">9/2</span>（或 <span class=\"chem\">4.5</span>）",

    // Definite integrals, signed integrals vs geometric area, and  > try it > p
    "Given that <span class=\"chem\">int_1^4 f(x) dx = 5</span>, calculate the value of <span class=\"chem\">int_1^4 (2 f(x) + 1) dx + int_4^1 f(x) dx</span>.": "已知 <span class=\"chem\">int_1^4 f(x) dx = 5</span>，計算 (calculate) <span class=\"chem\">int_1^4 (2 f(x) + 1) dx + int_4^1 f(x) dx</span> 的值。",

    // Definite integrals, signed integrals vs geometric area, and  > try it > li
    "Split the first integral using linearity: <span class=\"chem\">2 int_1^4 f(x) dx + int_1^4 1 dx</span>. Remember that <span class=\"chem\">int_1^4 1 dx = 1(4 - 1) = 3</span>!": "利用線性性質分拆第一個積分：<span class=\"chem\">2 int_1^4 f(x) dx + int_1^4 1 dx</span>。緊記 <span class=\"chem\">int_1^4 1 dx = 1(4 - 1) = 3</span>！",

    // Definite integrals, signed integrals vs geometric area, and  > try it > li
    "For the second term, reversing the limits flips the sign: <span class=\"chem\">int_4^1 f(x) dx = -int_1^4 f(x) dx = -5</span>.": "對於第二項，對調上下限會反轉正負號：<span class=\"chem\">int_4^1 f(x) dx = -int_1^4 f(x) dx = -5</span>。",

    // Kinematics: displacement, velocity, acceleration and total d > data-toc attribute
    "Kinematics": "運動學",

    // Kinematics: displacement, velocity, acceleration and total d > h2
    "Kinematics: displacement, velocity, acceleration and total distance": "運動學：位移、速度、加速度與總路程",

    // Kinematics: displacement, velocity, acceleration and total d > p
    "In one-dimensional kinematics, a particle moves along a straight line (usually the <span class=\"chem\">x</span>-axis or <span class=\"chem\">s</span>-axis) with position or <dfn data-def=\"The signed position s(t) of a particle relative to an origin O along a straight line.\">displacement</dfn> <span class=\"chem\">s(t)</span> relative to an origin <span class=\"chem\">O</span> at time <span class=\"chem\">t &gt;= 0</span>. Differentiation moves forward from position to velocity to acceleration, while integration moves backward:": "在一維運動學中，質點沿直線（通常為 <span class=\"chem\">x</span> 軸或 <span class=\"chem\">s</span> 軸）運動，在時刻 <span class=\"chem\">t &gt;= 0</span> 相對於原點 <span class=\"chem\">O</span> 的位置或<dfn data-def=\"質點沿直線相對於原點 O 的帶號位置 s(t)。\">位移 <span class=\"en-term\">(displacement)</span></dfn>為 <span class=\"chem\">s(t)</span>。微分由位置推至速度再到加速度，而積分則反向推進：",

    // Kinematics: displacement, velocity, acceleration and total d > data-def attribute
    "The signed position s(t) of a particle relative to an origin O along a straight line.": "質點沿直線相對於原點 O 的帶號位置 s(t)。",

    // Kinematics: displacement, velocity, acceleration and total d > equation > maths line
    "<i>s</i>(<i>t</i>) &nbsp; <span class=\"chem\">-- d/dt --&gt;</span> &nbsp; <i>v</i>(<i>t</i>) = <span class=\"frac\"><span>d<i>s</i></span><span>d<i>t</i></span></span> &nbsp; <span class=\"chem\">-- d/dt --&gt;</span> &nbsp; <i>a</i>(<i>t</i>) = <span class=\"frac\"><span>d<i>v</i></span><span>d<i>t</i></span></span> = <span class=\"frac\"><span>d<sup>2</sup><i>s</i></span><span>d<i>t</i><sup>2</sup></span></span>": "<i>s</i>(<i>t</i>) &nbsp; <span class=\"chem\">-- d/dt --&gt;</span> &nbsp; <i>v</i>(<i>t</i>) = <span class=\"frac\"><span>d<i>s</i></span><span>d<i>t</i></span></span> &nbsp; <span class=\"chem\">-- d/dt --&gt;</span> &nbsp; <i>a</i>(<i>t</i>) = <span class=\"frac\"><span>d<i>v</i></span><span>d<i>t</i></span></span> = <span class=\"frac\"><span>d<sup>2</sup><i>s</i></span><span>d<i>t</i><sup>2</sup></span></span>",

    // Kinematics: displacement, velocity, acceleration and total d > equation > dt
    "v(t) = ∫ a(t) dt": "v(t) = ∫ a(t) dt",

    // Kinematics: displacement, velocity, acceleration and total d > equation > dd
    "velocity (signed rate of change of displacement; speed is |<i>v</i>(<i>t</i>)|)": "速度（位移的帶號變率；速率為 |<i>v</i>(<i>t</i>)|）",

    // Kinematics: displacement, velocity, acceleration and total d > equation > dt
    "Δs = ∫<sub>t₁</sub><sup>t₂</sup> v(t) dt": "Δs = ∫<sub>t₁</sub><sup>t₂</sup> v(t) dt",

    // Kinematics: displacement, velocity, acceleration and total d > equation > dd
    "net displacement <i>s</i>(<i>t</i><sub>2</sub>) − <i>s</i>(<i>t</i><sub>1</sub>) over [<i>t</i><sub>1</sub>, <i>t</i><sub>2</sub>]": "在 [<i>t</i><sub>1</sub>, <i>t</i><sub>2</sub>] 內的淨位移 <i>s</i>(<i>t</i><sub>2</sub>) − <i>s</i>(<i>t</i><sub>1</sub>)",

    // Kinematics: displacement, velocity, acceleration and total d > equation > dt
    "d = ∫<sub>t₁</sub><sup>t₂</sup> |v(t)| dt": "d = ∫<sub>t₁</sub><sup>t₂</sup> |v(t)| dt",

    // Kinematics: displacement, velocity, acceleration and total d > equation > dd
    "total distance travelled over [<i>t</i><sub>1</sub>, <i>t</i><sub>2</sub>]": "在 [<i>t</i><sub>1</sub>, <i>t</i><sub>2</sub>] 內的總路程",

    // Kinematics: displacement, velocity, acceleration and total d > h3
    "Displacement vs total distance travelled": "位移與總路程",

    // Kinematics: displacement, velocity, acceleration and total d > p
    "Suppose a runner starts at the origin <span class=\"chem\">O</span>, runs <span class=\"chem\">10</span> <span class=\"unit\">m</span> East (<span class=\"chem\">+10</span>), turns around, and runs <span class=\"chem\">4</span> <span class=\"unit\">m</span> West (<span class=\"chem\">-4</span>):": "假設一名跑手從原點 <span class=\"chem\">O</span> 出發，向東跑 <span class=\"chem\">10</span> <span class=\"unit\">m</span>（<span class=\"chem\">+10</span>），轉身再向西跑 <span class=\"chem\">4</span> <span class=\"unit\">m</span>（<span class=\"chem\">-4</span>）：",

    // Kinematics: displacement, velocity, acceleration and total d > li
    "Their <strong>net displacement</strong> is <span class=\"chem\">Delta s = int_{t_1}^{t_2} v(t) dt = +10 - 4 = +6</span> <span class=\"unit\">m</span> (how far they end up from where they started).": "他的<strong>淨位移</strong>為 <span class=\"chem\">Delta s = int_{t_1}^{t_2} v(t) dt = +10 - 4 = +6</span> <span class=\"unit\">m</span>（最終位置與起點之間的距離）。",

    // Kinematics: displacement, velocity, acceleration and total d > li
    "Their <strong>total distance travelled</strong> is <span class=\"chem\">d = int_{t_1}^{t_2} |v(t)| dt = 10 + |-4| = 14</span> <span class=\"unit\">m</span> (what a pedometer on their shoe records).": "他的<strong>總路程</strong>為 <span class=\"chem\">d = int_{t_1}^{t_2} |v(t)| dt = 10 + |-4| = 14</span> <span class=\"unit\">m</span>（運動鞋上計步器所記錄的距離）。",

    // Kinematics: displacement, velocity, acceleration and total d > common mistake > p
    "<strong>Two classic kinematics traps to avoid:</strong><br> 1. <strong>Forgetting to check <span class=\"chem\">v(t) = 0</span> when finding total distance on Paper 1:</strong> Before integrating <span class=\"chem\">v(t)</span> from <span class=\"chem\">t_1</span> to <span class=\"chem\">t_2</span> to find distance, always solve <span class=\"chem\">v(t) = 0</span> first! If <span class=\"chem\">v(t)</span> changes sign at <span class=\"chem\">t = c</span> inside <span class=\"chem\">(t_1, t_2)</span>, you must split the integral at <span class=\"chem\">t = c</span> and add the absolute values: <span class=\"chem\">d = |int_{t_1}^c v(t) dt| + |int_c^{t_2} v(t) dt|</span>.<br> 2. <strong>Thinking <span class=\"chem\">a(t) &lt; 0</span> always means slowing down:</strong> A particle is <strong>speeding up</strong> whenever velocity <span class=\"chem\">v(t)</span> and acceleration <span class=\"chem\">a(t)</span> have the <strong>same sign</strong> (<span class=\"chem\">v(t) * a(t) &gt; 0</span>, either both positive or both negative!), and <strong>slowing down</strong> whenever <span class=\"chem\">v(t)</span> and <span class=\"chem\">a(t)</span> have <strong>opposite signs</strong> (<span class=\"chem\">v(t) * a(t) &lt; 0</span>).": "<strong>必須避開的兩個經典運動學陷阱：</strong><br> 1. <strong>在 Paper 1 求總路程時忘記檢查 <span class=\"chem\">v(t) = 0</span>：</strong>在把 <span class=\"chem\">v(t)</span> 從 <span class=\"chem\">t_1</span> 積分至 <span class=\"chem\">t_2</span> 求路程前，務必先解 <span class=\"chem\">v(t) = 0</span>！若 <span class=\"chem\">v(t)</span> 在 <span class=\"chem\">(t_1, t_2)</span> 內的 <span class=\"chem\">t = c</span> 處改變正負號，必須在 <span class=\"chem\">t = c</span> 處分拆積分並把各段絕對值相加：<span class=\"chem\">d = |int_{t_1}^c v(t) dt| + |int_c^{t_2} v(t) dt|</span>。<br> 2. <strong>誤以為 <span class=\"chem\">a(t) &lt; 0</span> 永遠代表減速：</strong>只要速度 <span class=\"chem\">v(t)</span> 與加速度 <span class=\"chem\">a(t)</span> <strong>同號</strong>（<span class=\"chem\">v(t) * a(t) &gt; 0</span>，即同為正或同為負！），質點便在<strong>加速</strong>；每當 <span class=\"chem\">v(t)</span> 與 <span class=\"chem\">a(t)</span> <strong>異號</strong>（<span class=\"chem\">v(t) * a(t) &lt; 0</span>），質點便在<strong>減速</strong>。",

    // Kinematics: displacement, velocity, acceleration and total d > widget > data-title attribute
    "Particle kinematics lab: displacement vs total distance": "質點運動學實驗室：位移與總路程",

    // Kinematics: displacement, velocity, acceleration and total d > widget > figcaption
    "Drag the time slider <span class=\"chem\">T</span> or press <strong>Play motion</strong> to watch the particle move along the track. Notice how the particle reverses direction at <span class=\"chem\">v(t) = 0</span>: after the turnaround, net displacement <span class=\"chem\">Delta s</span> decreases while total distance <span class=\"chem\">d = int_0^T |v(t)| dt</span> keeps growing.": "拖動時間滑桿 <span class=\"chem\">T</span> 或按<strong>播放運動 (Play motion)</strong>，觀察質點沿軌道移動。留意質點如何在 <span class=\"chem\">v(t) = 0</span> 處折返：折返後淨位移 <span class=\"chem\">Delta s</span> 減少，而總路程 <span class=\"chem\">d = int_0^T |v(t)| dt</span> 則持續增加。",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > h3
    "Finding displacement and total distance when a particle reverses direction": "求質點折返時的位移與總路程",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > p
    "A particle moves along a straight line so that its velocity <span class=\"chem\">v</span> <span class=\"unit\">m s-1</span> at time <span class=\"chem\">t</span> seconds (<span class=\"chem\">t &gt;= 0</span>) is given by <span class=\"chem\">v(t) = 3t^2 - 12t + 9</span>. Initially, the particle is at the origin <span class=\"chem\">O</span>.<br> (a) Find the times when the particle is momentarily at rest. <strong>[2 marks]</strong><br> (b) Find the displacement of the particle from <span class=\"chem\">O</span> at <span class=\"chem\">t = 4</span> <span class=\"unit\">s</span>, and find the total distance travelled by the particle in the first <span class=\"chem\">4</span> seconds. <strong>[5 marks]</strong>": "質點沿直線運動，在時刻 <span class=\"chem\">t</span> 秒（<span class=\"chem\">t &gt;= 0</span>）時的速度 <span class=\"chem\">v</span> <span class=\"unit\">m s-1</span> 為 <span class=\"chem\">v(t) = 3t^2 - 12t + 9</span>。最初，質點位於原點 <span class=\"chem\">O</span>。<br> (a) 求 (Find) 質點瞬時靜止的時刻。<strong>[2 marks]</strong><br> (b) 求 (Find) 質點在 <span class=\"chem\">t = 4</span> <span class=\"unit\">s</span> 時相對於 <span class=\"chem\">O</span> 的位移，並求質點在首 <span class=\"chem\">4</span> 秒內所行的總路程。<strong>[5 marks]</strong>",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > data-title attribute
    "Part (a): Solve v(t) = 0 to find when the particle reverses direction": "(a) 部：解 v(t) = 0 以求質點折返的時刻",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > p
    "A particle is at rest when its velocity is zero. Factor out 3 first.": "質點靜止時其速度為零。先抽出公因數 3。",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > maths line
    "3<i>t</i><sup>2</sup> − 12<i>t</i> + 9 = 3(<i>t</i> − 1)(<i>t</i> − 3) = 0 ⇒ <i>t</i> = 1 <span class=\"unit\">s</span> and <i>t</i> = 3 <span class=\"unit\">s</span> <b>[M1 A1]</b>": "3<i>t</i><sup>2</sup> − 12<i>t</i> + 9 = 3(<i>t</i> − 1)(<i>t</i> − 3) = 0 ⇒ <i>t</i> = 1 <span class=\"unit\">s</span> 與 <i>t</i> = 3 <span class=\"unit\">s</span> <b>[M1 A1]</b>",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > data-title attribute
    "Part (b): Integrate v(t) with s(0) = 0 to get s(t) and evaluate s(4)": "(b) 部：以 s(0) = 0 對 v(t) 積分求 s(t)，並計算 s(4)",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > p
    "Antidifferentiating v(t) gives the position s(t) at any time t, making both displacement and piecewise distance fast to compute.": "對 v(t) 求原函數可得任意時刻 t 的位置 s(t)，從而快速算出位移與分段路程。",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > maths line
    "Displacement at <i>t</i> = 4: &nbsp; <i>s</i>(4) = 4<sup>3</sup> − 6(4<sup>2</sup>) + 9(4) = 64 − 96 + 36 = <b>4 <span class=\"unit\">m</span></b> <b>[A1]</b>": "在 <i>t</i> = 4 的位移：&nbsp; <i>s</i>(4) = 4<sup>3</sup> − 6(4<sup>2</sup>) + 9(4) = 64 − 96 + 36 = <b>4 <span class=\"unit\">m</span></b> <b>[A1]</b>",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > data-title attribute
    "Split [0, 4] at the turning times t = 1 and t = 3 to sum the absolute distances": "在轉向時刻 t = 1 與 t = 3 處分拆 [0, 4]，並將各段絕對距離相加",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > p
    "Evaluate s(0) = 0, s(1) = 4, s(3) = 0, and s(4) = 4, then add the distance of each leg.": "計算 s(0) = 0、s(1) = 4、s(3) = 0 與 s(4) = 4，再將每段路程相加。",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > maths line
    "Total distance <i>d</i> = |<i>s</i>(1) − <i>s</i>(0)| + |<i>s</i>(3) − <i>s</i>(1)| + |<i>s</i>(4) − <i>s</i>(3)| = 4 + 4 + 4 = <b>12 <span class=\"unit\">m</span></b> <b>[M1 A1]</b>": "總路程 <i>d</i> = |<i>s</i>(1) − <i>s</i>(0)| + |<i>s</i>(3) − <i>s</i>(1)| + |<i>s</i>(4) − <i>s</i>(3)| = 4 + 4 + 4 = <b>12 <span class=\"unit\">m</span></b> <b>[M1 A1]</b>",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > p
    "(a) <span class=\"chem\">t = 1</span> <span class=\"unit\">s</span> and <span class=\"chem\">t = 3</span> <span class=\"unit\">s</span>; (b) displacement <span class=\"chem\">4</span> <span class=\"unit\">m</span>, total distance <span class=\"chem\">12</span> <span class=\"unit\">m</span>.": "(a) <span class=\"chem\">t = 1</span> <span class=\"unit\">s</span> 與 <span class=\"chem\">t = 3</span> <span class=\"unit\">s</span>；(b) 位移 <span class=\"chem\">4</span> <span class=\"unit\">m</span>，總路程 <span class=\"chem\">12</span> <span class=\"unit\">m</span>。",

    // Kinematics: displacement, velocity, acceleration and total d > try it > p
    "A particle moves along a line with velocity <span class=\"chem\">v(t) = 2t - 4</span> <span class=\"unit\">m s-1</span> for <span class=\"chem\">0 &lt;= t &lt;= 5</span>. Calculate the <strong>total distance travelled</strong> (in <span class=\"unit\">m</span>) by the particle between <span class=\"chem\">t = 0</span> and <span class=\"chem\">t = 5</span>.": "質點沿直線運動，在 <span class=\"chem\">0 &lt;= t &lt;= 5</span> 時的速度為 <span class=\"chem\">v(t) = 2t - 4</span> <span class=\"unit\">m s-1</span>。計算 (Calculate) 質點在 <span class=\"chem\">t = 0</span> 與 <span class=\"chem\">t = 5</span> 之間所行的<strong>總路程</strong>（以 <span class=\"unit\">m</span> 為單位）。",

    // Kinematics: displacement, velocity, acceleration and total d > try it > li
    "First find when <span class=\"chem\">v(t) = 0</span>: <span class=\"chem\">2t - 4 = 0 =&gt; t = 2</span> <span class=\"unit\">s</span>.": "先求何時 <span class=\"chem\">v(t) = 0</span>：<span class=\"chem\">2t - 4 = 0 =&gt; t = 2</span> <span class=\"unit\">s</span>。",

    // Kinematics: displacement, velocity, acceleration and total d > try it > li
    "Split the integral at <span class=\"chem\">t = 2</span>: <span class=\"chem\">d = |int_0^2 (2t - 4) dt| + |int_2^5 (2t - 4) dt|</span>.": "在 <span class=\"chem\">t = 2</span> 處分拆積分：<span class=\"chem\">d = |int_0^2 (2t - 4) dt| + |int_2^5 (2t - 4) dt|</span>。",

    // Kinematics: displacement, velocity, acceleration and total d > try it > maths line
    "Total distance = |−4| + 9 = <b>13 <span class=\"unit\">m</span></b>": "總路程 = |−4| + 9 = <b>13 <span class=\"unit\">m</span></b>",

    // Quick practice > data-toc attribute
    "Practice": "練習",

    // Quick practice > h2
    "Quick practice": "快速練習",

    // widget string (assets/js/widgets-t5-2.js)
    "Definite integral and enclosed area": "定積分與所圍面積",

    // widget string (assets/js/widgets-t5-2.js)
    "Momentarily at rest (v = 0)": "瞬時靜止（v = 0）",

    // widget string (assets/js/widgets-t5-2.js)
    "Speeding up (v and a have same sign)": "加速（v 與 a 同號）",

    // widget string (assets/js/widgets-t5-2.js)
    "Slowing down (v and a have opposite signs)": "減速（v 與 a 異號）",

    // widget string (assets/js/widgets-t5-2.js)
    "Velocity-time graph v(t)": "速度—時間圖像 v(t)",

  }
});
