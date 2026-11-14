/* t5-4 — zh-Hant translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't5-4', {
  strings: {

    // page title (browser tab)
    "5.4 Differential equations and Maclaurin series | Analysis Lab": "5.4 微分方程與麥克勞林級數 | Analysis Lab",

    // Differential equations and Maclaurin series > page header > p
    "Topic 5.4 · AHL 5.18–5.19": "課題 5.4 · AHL 5.18–5.19",

    // Differential equations and Maclaurin series > page header > h1
    "Differential equations and Maclaurin series": "微分方程與麥克勞林級數",

    // Differential equations and Maclaurin series > page header > span
    "How can a rule that specifies only the local rate of change reconstruct an entire function—either exactly, numerically step-by-step, or as an infinite power series?": "只描述局部變化率的規則，如何能準確地、逐步數值地，或以無窮冪級數的形式重構整個函數？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "學習清單",

    // What you need to be able to do > h2
    "What you need to be able to do": "你需要掌握的能力",

    // What you need to be able to do > checklist > Additional HL > span
    "Approximate solutions of <span class=\"chem\">dy/dx = f(x, y)</span> numerically using Euler’s method <span class=\"chem\">y_{n+1} = y_n + h f(x_n, y_n)</span>, <span class=\"chem\">x_{n+1} = x_n + h</span>, and use concavity to explain whether an Euler estimate is too high or too low.": "運用歐拉法 <span class=\"chem\">y_{n+1} = y_n + h f(x_n, y_n)</span>、<span class=\"chem\">x_{n+1} = x_n + h</span> 數值近似 <span class=\"chem\">dy/dx = f(x, y)</span> 的解，並利用凹性判斷歐拉估計值偏高還是偏低。",

    // What you need to be able to do > checklist > Additional HL > span
    "Solve first-order separable differential equations <span class=\"chem\">dy/dx = g(x) h(y)</span> by integrating <span class=\"chem\">int (1/h(y)) dy = int g(x) dx</span>, including exponential, cooling, and logistic growth models.": "透過積分 <span class=\"chem\">int (1/h(y)) dy = int g(x) dx</span> 解一階可分離變數微分方程 <span class=\"chem\">dy/dx = g(x) h(y)</span>，包括指數模型、冷卻模型及邏輯斯蒂增長模型。",

    // What you need to be able to do > checklist > Additional HL > span
    "Solve first-order homogeneous differential equations <span class=\"chem\">dy/dx = F(y/x)</span> using the substitution <span class=\"chem\">y = vx</span> and <span class=\"chem\">dy/dx = v + x (dv/dx)</span>.": "使用代換 <span class=\"chem\">y = vx</span> 及 <span class=\"chem\">dy/dx = v + x (dv/dx)</span> 解一階齊次微分方程 <span class=\"chem\">dy/dx = F(y/x)</span>。",

    // What you need to be able to do > checklist > Additional HL > span
    "Solve first-order linear differential equations <span class=\"chem\">dy/dx + P(x)y = Q(x)</span> using the integrating factor <span class=\"chem\">I(x) = e^{int P(x) dx}</span>.": "利用積分因子 <span class=\"chem\">I(x) = e^{int P(x) dx}</span> 解一階線性微分方程 <span class=\"chem\">dy/dx + P(x)y = Q(x)</span>。",

    // What you need to be able to do > checklist > Additional HL > span
    "Find Maclaurin series using <span class=\"chem\">f(x) = f(0) + x f'(0) + (x^2/2!) f''(0) + ...</span> and by substituting, multiplying, differentiating, or integrating the standard Formula Booklet series (<span class=\"chem\">e^x, sin x, cos x, arctan x, ln(1 + x), (1 + x)^p</span>).": "運用 <span class=\"chem\">f(x) = f(0) + x f'(0) + (x^2/2!) f''(0) + ...</span>，以及透過對公式手冊標準級數（<span class=\"chem\">e^x, sin x, cos x, arctan x, ln(1 + x), (1 + x)^p</span>）進行代換、相乘、求導或積分來求麥克勞林級數。",

    // What you need to be able to do > checklist > Additional HL > span
    "Develop the Maclaurin series of a solution <span class=\"chem\">y(x)</span> directly from a differential equation <span class=\"chem\">dy/dx = f(x, y)</span> and initial condition <span class=\"chem\">y(0) = y_0</span> by repeated implicit differentiation.": "透過重複隱函數微分法，直接從微分方程 <span class=\"chem\">dy/dx = f(x, y)</span> 及初始條件 <span class=\"chem\">y(0) = y_0</span> 推導解 <span class=\"chem\">y(x)</span> 的麥克勞林級數。",

    // Question decoder: The 4-way first-order DE classifier &amp;  > data-toc attribute
    "Question decoder": "題型解碼",

    // Question decoder: The 4-way first-order DE classifier &amp;  > h2
    "Question decoder: The 4-way first-order DE classifier &amp; Maclaurin series": "題型解碼：一階微分方程 4 分類器與麥克勞林級數",

    // Question decoder: The 4-way first-order DE classifier &amp;  > p
    "Every first-order DE question in IB Math AA HL is handled by one of four methods: three exact (separable, homogeneous, integrating factor) and one numerical (Euler’s method). Run through the 4-way classifier below in order, then check the Maclaurin series decoder for power-series questions.": "IB Math AA HL 的每一道一階微分方程題目都可用以下四種方法之一處理：三種解析解法（可分離變數、齊次、積分因子）及一種數值方法（歐拉法）。按次序檢查下方的 4 分類器，並利用麥克勞林級數解碼器處理冪級數題目。",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > caption
    "The 4-way first-order differential equation classifier": "一階微分方程 4 分類表",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "Archetype &amp; structural pattern": "類型與結構特徵",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "Formula &amp; transformation setup": "公式與變換列式",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "Paper 1 (No GDC) vs Paper 2 / 3 strategy": "Paper 1（不用 GDC）與 Paper 2／3 策略",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "1. Variables separable:<br><span class=\"chem\">dy/dx = g(x) h(y)</span><br>(pure product/quotient of an <i>x</i>-factor and a <i>y</i>-factor)": "1. 可分離變數：<br><span class=\"chem\">dy/dx = g(x) h(y)</span><br>（純粹由 <i>x</i> 因子與 <i>y</i> 因子組成的積或商）",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Divide by <span class=\"chem\">h(y)</span> and multiply by <span class=\"chem\">dx</span>:<br><span class=\"chem\">int (1 / h(y)) dy = int g(x) dx</span>.": "兩邊除以 <span class=\"chem\">h(y)</span> 並乘以 <span class=\"chem\">dx</span>：<br><span class=\"chem\">int (1 / h(y)) dy = int g(x) dx</span>。",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Add <span class=\"chem\">+ C</span> the instant you integrate! For logistic equations <span class=\"chem\">dP/dt = kP(M - P)</span>, use partial fractions on <span class=\"chem\">1/(P(M - P))</span>.": "一完成積分便要立即加上 <span class=\"chem\">+ C</span>！對於邏輯斯蒂方程 <span class=\"chem\">dP/dt = kP(M - P)</span>，對 <span class=\"chem\">1/(P(M - P))</span> 使用部分分式分解。",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "2. Homogeneous DE:<br><span class=\"chem\">dy/dx = F(y/x)</span><br>(numerator and denominator are polynomials whose terms all have the same total degree, e.g. <span class=\"chem\">(x^2 + y^2)/(xy)</span>)": "2. 齊次微分方程：<br><span class=\"chem\">dy/dx = F(y/x)</span><br>（分子與分母均為多項式，且所有項的總次數相同，例如 <span class=\"chem\">(x^2 + y^2)/(xy)</span>）",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Substitute <strong><span class=\"chem\">y = vx</span></strong> and <strong><span class=\"chem\">dy/dx = v + x(dv/dx)</span></strong>.<br>Simplifies to the separable equation:<br><span class=\"chem\">x(dv/dx) = F(v) - v =&gt; int 1/(F(v) - v) dv = int (1/x) dx</span>.": "代換 <strong><span class=\"chem\">y = vx</span></strong> 及 <strong><span class=\"chem\">dy/dx = v + x(dv/dx)</span></strong>。<br>化簡為可分離變數方程：<br><span class=\"chem\">x(dv/dx) = F(v) - v =&gt; int 1/(F(v) - v) dv = int (1/x) dx</span>。",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Neither <span class=\"chem\">y = vx</span> nor <span class=\"chem\">dy/dx = v + x(dv/dx)</span> is printed in the Formula Booklet—memorize both! Always replace <span class=\"chem\">v = y/x</span> at the end.": "公式手冊並沒有列出 <span class=\"chem\">y = vx</span> 及 <span class=\"chem\">dy/dx = v + x(dv/dx)</span>，兩者皆須牢記！最後務必代回 <span class=\"chem\">v = y/x</span>。",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "3. First-order linear DE:<br><span class=\"chem\">dy/dx + P(x)y = Q(x)</span><br>(linear in <i>y</i> and <span class=\"chem\">dy/dx</span>, with functions of <i>x</i> only as coefficients)": "3. 一階線性微分方程：<br><span class=\"chem\">dy/dx + P(x)y = Q(x)</span><br>（對 <i>y</i> 及 <span class=\"chem\">dy/dx</span> 為線性，係數只含 <i>x</i> 的函數）",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Compute the <strong>integrating factor</strong> (Booklet 5.18):<br><span class=\"chem\">I(x) = e^{int P(x) dx}</span>.<br>Multiplying through collapses the left side by the product rule:<br><span class=\"chem\">d/dx[I(x) y] = I(x) Q(x) =&gt; I(x) y = int I(x) Q(x) dx + C</span>.": "計算<strong>積分因子</strong>（公式手冊 5.18）：<br><span class=\"chem\">I(x) = e^{int P(x) dx}</span>。<br>全式乘以積分因子後，左方藉積法則收縮為：<br><span class=\"chem\">d/dx[I(x) y] = I(x) Q(x) =&gt; I(x) y = int I(x) Q(x) dx + C</span>。",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "<strong>Trap:</strong> If there is a coefficient in front of <span class=\"chem\">dy/dx</span> (such as <span class=\"chem\">x(dy/dx) + 2y = x^3</span>), <strong>divide the entire equation by <i>x</i> first</strong> so <span class=\"chem\">P(x) = 2/x</span>!": "<strong>陷阱：</strong>若 <span class=\"chem\">dy/dx</span> 前面有係數（例如 <span class=\"chem\">x(dy/dx) + 2y = x^3</span>），必須<strong>先將整條方程除以 <i>x</i></strong>，使 <span class=\"chem\">P(x) = 2/x</span>！",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "4. “Use Euler’s method with step size <i>h</i> to estimate <span class=\"chem\">y(x_n)</span>”": "4. 「使用步長為 <i>h</i> 的歐拉法估計 <span class=\"chem\">y(x_n)</span>」",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Numerical recurrence (Booklet 5.18):<br><span class=\"chem\">x_{n+1} = x_n + h</span><br><span class=\"chem\">y_{n+1} = y_n + h × f(x_n, y_n)</span>": "數值遞推公式（公式手冊 5.18）：<br><span class=\"chem\">x_{n+1} = x_n + h</span><br><span class=\"chem\">y_{n+1} = y_n + h × f(x_n, y_n)</span>",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "On Paper 2, draw a clear table with columns <span class=\"chem\">n, x_n, y_n, f(x_n, y_n), y_{n+1}</span> and keep full calculator precision until the final 3 s.f. rounding.": "在 Paper 2 中，列出包含 <span class=\"chem\">n, x_n, y_n, f(x_n, y_n), y_{n+1}</span> 欄位的清晰表格，並保留計算機的完整精度直至最後才捨入至 3 位有效數字。",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > caption
    "Maclaurin series decoder — choosing the fastest expansion pathway": "麥克勞林級數解碼器 — 選擇最快的展開途徑",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "What the exam question asks": "試題要求",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "Fastest IB method": "最快的 IB 解法",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "Why students lose time or marks": "學生容易失時或失分的原因",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "Expand a composite or product of known functions, e.g. <span class=\"chem\">e^{2x} cos(3x)</span> or <span class=\"chem\">ln(1 + 2x^2)</span> up to <span class=\"chem\">x^4</span>": "展開已知函數的複合或乘積，例如將 <span class=\"chem\">e^{2x} cos(3x)</span> 或 <span class=\"chem\">ln(1 + 2x^2)</span> 展開至 <span class=\"chem\">x^4</span> 項",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "<strong>Build from standard Booklet series</strong> (<span class=\"chem\">e^x, sin x, cos x, arctan x, ln(1+x), (1+x)^p</span>): substitute the inner term, multiply polynomials, and drop powers above <span class=\"chem\">x^4</span>.": "<strong>由公式手冊標準級數建立</strong>（<span class=\"chem\">e^x, sin x, cos x, arctan x, ln(1+x), (1+x)^p</span>）：代入內層項、將多項式相乘，並略去高於 <span class=\"chem\">x^4</span> 的冪次。",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Differentiating <span class=\"chem\">e^{2x} cos(3x)</span> four times by the product rule takes 10 minutes and invites sign errors; multiplying the two Booklet series takes 45 seconds!": "用積法則對 <span class=\"chem\">e^{2x} cos(3x)</span> 求導四次需時 10 分鐘且極易出錯；將兩個公式手冊級數相乘只需 45 秒！",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "Expand a non-standard function such as <span class=\"chem\">f(x) = tan x</span>, <span class=\"chem\">sec x</span>, or <span class=\"chem\">e^{sin x}</span> by repeated differentiation (using <span class=\"chem\">f^{(n)}(0)</span>)": "以重複求導（利用 <span class=\"chem\">f^{(n)}(0)</span>）展開非標準函數，例如 <span class=\"chem\">f(x) = tan x</span>、<span class=\"chem\">sec x</span> 或 <span class=\"chem\">e^{sin x}</span>",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "<strong>Repeated differentiation</strong>: compute <span class=\"chem\">f(0), f'(0), f''(0), f'''(0)</span> and substitute into <span class=\"chem\">f(0) + x f'(0) + (x^2/2!)f''(0) + (x^3/3!)f'''(0) + ...</span>.": "<strong>重複求導</strong>：計算 <span class=\"chem\">f(0), f'(0), f''(0), f'''(0)</span> 並代入 <span class=\"chem\">f(0) + x f'(0) + (x^2/2!)f''(0) + (x^3/3!)f'''(0) + ...</span>。",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Remember to divide by <span class=\"chem\">2! = 2</span>, <span class=\"chem\">3! = 6</span>, <span class=\"chem\">4! = 24</span>! Writing <span class=\"chem\">f''(0) x^2</span> without <span class=\"chem\">2!</span> is a classic slip.": "切記除以 <span class=\"chem\">2! = 2</span>、<span class=\"chem\">3! = 6</span>、<span class=\"chem\">4! = 24</span>！漏除 <span class=\"chem\">2!</span> 而寫成 <span class=\"chem\">f''(0) x^2</span> 是經典失誤。",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "Given <span class=\"chem\">dy/dx = f(x, y)</span> and <span class=\"chem\">y(0) = y_0</span>, find the Maclaurin series for <span class=\"chem\">y(x)</span> up to <span class=\"chem\">x^3</span>": "已知 <span class=\"chem\">dy/dx = f(x, y)</span> 及 <span class=\"chem\">y(0) = y_0</span>，求 <span class=\"chem\">y(x)</span> 展開至 <span class=\"chem\">x^3</span> 項的麥克勞林級數",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "<strong>Implicit differentiation of the DE</strong>: differentiate <span class=\"chem\">y' = f(x, y)</span> with respect to <i>x</i> to express <span class=\"chem\">y''</span> in terms of <span class=\"chem\">x, y, y'</span>, then differentiate again for <span class=\"chem\">y'''</span>, and evaluate at <span class=\"chem\">x = 0</span>.": "<strong>對微分方程作隱式求導</strong>：將 <span class=\"chem\">y' = f(x, y)</span> 關於 <i>x</i> 求導，以 <span class=\"chem\">x, y, y'</span> 表示 <span class=\"chem\">y''</span>，再求導得出 <span class=\"chem\">y'''</span>，並於 <span class=\"chem\">x = 0</span> 處求值。",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Never try to solve a non-linear DE like <span class=\"chem\">dy/dx = x + y^2</span> analytically—differentiating the DE directly gives <span class=\"chem\">y''(0)</span> and <span class=\"chem\">y'''(0)</span> in two lines!": "切勿嘗試解析求解如 <span class=\"chem\">dy/dx = x + y^2</span> 的非線性微分方程——直接對微分方程求導，兩行即可得出 <span class=\"chem\">y''(0)</span> 與 <span class=\"chem\">y'''(0)</span>！",

    // Slope fields, Euler’s method and separable differential equa > data-toc attribute
    "Euler & separable DEs": "歐拉法與可分離微分方程",

    // Slope fields, Euler’s method and separable differential equa > h2
    "Euler’s method and separable differential equations": "歐拉法與可分離變數微分方程",

    // Slope fields, Euler’s method and separable differential equa > p
    "A first-order differential equation <span class=\"chem\">dy/dx = f(x, y)</span> assigns a tangent gradient to every point <span class=\"chem\">(x, y)</span> in the plane. Plotting short line segments with slope <span class=\"chem\">f(x, y)</span> on a grid produces a <dfn data-def=\"A graphical grid of short line segments showing the gradient dy/dx = f(x, y) at each point (x, y), which solution curves must follow tangentially.\">slope field</dfn> (direction field). Any solution curve <span class=\"chem\">y(x)</span> passing through an initial point <span class=\"chem\">(x_0, y_0)</span> must be tangent to the slope-field segments everywhere along its path. Slope fields are not in the AA guide (they belong to Applications and Interpretation HL); they are shown here only to picture what Euler’s method does.": "一階微分方程 <span class=\"chem\">dy/dx = f(x, y)</span> 為平面上每一點 <span class=\"chem\">(x, y)</span> 指定一個切線斜率。在網格上繪畫斜率為 <span class=\"chem\">f(x, y)</span> 的短線段，便形成<dfn data-def=\"在網格上以短線段顯示每點 (x, y) 處斜率 dy/dx = f(x, y) 的圖像，解曲線必須沿線段相切。\">斜率場 <span class=\"en-term\">(slope field)</span></dfn>（方向場）。任何通過初始點 <span class=\"chem\">(x_0, y_0)</span> 的解曲線 <span class=\"chem\">y(x)</span>，沿途每一處都必須與斜率場線段相切。斜率場不在 AA 課程指引內（屬於應用與詮釋 HL 的內容），這裏只用來直觀展示歐拉法的運作。",

    // Slope fields, Euler’s method and separable differential equa > data-def attribute
    "A graphical grid of short line segments showing the gradient dy/dx = f(x, y) at each point (x, y), which solution curves must follow tangentially.": "在網格上以短線段顯示每點 (x, y) 處斜率 dy/dx = f(x, y) 的圖像，解曲線必須沿線段相切。",

    // Slope fields, Euler’s method and separable differential equa > h3
    "Numerical approximation via Euler’s method": "透過歐拉法進行數值近似",

    // Slope fields, Euler’s method and separable differential equa > p
    "When a differential equation cannot be solved algebraically, <dfn data-def=\"A numerical step-by-step algorithm that approximates the solution curve of dy/dx = f(x, y) by moving along the local tangent line over small horizontal steps of size h.\">Euler’s method</dfn> approximates the solution curve by stepping forward along the current tangent line in small increments of step length <i>h</i>:": "當微分方程無法以代數方法求解時，<dfn data-def=\"一種逐步數值演算法，透過沿局部切線以小水平步長 h 前進來近似 dy/dx = f(x, y) 的解曲線。\">歐拉法 <span class=\"en-term\">(Euler’s method)</span></dfn> 透過沿當前切線以小步長 <i>h</i> 向前推進來近似解曲線：",

    // Slope fields, Euler’s method and separable differential equa > data-def attribute
    "A numerical step-by-step algorithm that approximates the solution curve of dy/dx = f(x, y) by moving along the local tangent line over small horizontal steps of size h.": "一種逐步數值演算法，透過沿局部切線以小水平步長 h 前進來近似 dy/dx = f(x, y) 的解曲線。",

    // Slope fields, Euler’s method and separable differential equa > equation > dd
    "constant horizontal step size": "恆定水平步長",

    // Slope fields, Euler’s method and separable differential equa > equation > dt
    "f(x<sub>n</sub>, y<sub>n</sub>)": "f(x<sub>n</sub>, y<sub>n</sub>)",

    // Slope fields, Euler’s method and separable differential equa > equation > dd
    "gradient dy/dx evaluated at the current point (<i>x</i><sub><i>n</i></sub>, <i>y</i><sub><i>n</i></sub>)": "在當前點 (<i>x</i><sub><i>n</i></sub>, <i>y</i><sub><i>n</i></sub>) 計算的斜率 dy/dx",

    // Slope fields, Euler’s method and separable differential equa > key idea > p
    "<strong>Overestimate vs underestimate (concavity analysis):</strong> Because Euler’s method follows the tangent line at each step:": "<strong>高估與低估（凹性分析）：</strong>由於歐拉法在每一步都沿切線前進：",

    // Slope fields, Euler’s method and separable differential equa > key idea > li
    "If the solution curve is <strong>concave up (<span class=\"chem\">d^2y/dx^2 &gt; 0</span>)</strong> on the interval, every tangent line lies <em>below</em> the curve, so Euler’s method gives an <strong>underestimate</strong>.": "若解曲線在該區間上<strong>凹向上（<span class=\"chem\">d^2y/dx^2 &gt; 0</span>）</strong>，每條切線都位於曲線<em>下方</em>，因此歐拉法得出<strong>低估</strong>。",

    // Slope fields, Euler’s method and separable differential equa > key idea > li
    "If the solution curve is <strong>concave down (<span class=\"chem\">d^2y/dx^2 &lt; 0</span>)</strong>, every tangent line lies <em>above</em> the curve, so Euler’s method gives an <strong>overestimate</strong>.": "若解曲線<strong>凹向下（<span class=\"chem\">d^2y/dx^2 &lt; 0</span>）</strong>，每條切線都位於曲線<em>上方</em>，因此歐拉法得出<strong>高估</strong>。",

    // Slope fields, Euler’s method and separable differential equa > key idea > li
    "Reducing the step size <i>h</i> (for example, halving <i>h</i>) reduces the truncation error and brings the Euler polygon closer to the exact curve.": "減小步長 <i>h</i>（例如將 <i>h</i> 減半）可減小截斷誤差，使歐拉折線更貼近準確曲線。",

    // Slope fields, Euler’s method and separable differential equa > widget > data-title attribute
    "Slope field & Euler’s method step explorer": "斜率場與歐拉法步進探索器",

    // Slope fields, Euler’s method and separable differential equa > widget > data-kicker attribute
    "AHL 5.18 · Interactive": "AHL 5.18 · 互動探索",

    // Slope fields, Euler’s method and separable differential equa > widget > figcaption
    "The background segments show the slope field <span class=\"chem\">dy/dx = f(x, y)</span>. The solid curve is the exact solution through <span class=\"chem\">(0, y_0)</span>, and the dashed polygon shows Euler’s method with step size <i>h</i>. Notice how concave-up regions cause Euler’s polygon to sit below the exact curve.": "背景短線段顯示斜率場 <span class=\"chem\">dy/dx = f(x, y)</span>。實線為通過 <span class=\"chem\">(0, y_0)</span> 的準確解，虛線折線則顯示步長為 <i>h</i> 的歐拉法近似。留意凹向上區域如何使歐拉折線位於準確曲線下方。",

    // Slope fields, Euler’s method and separable differential equa > h3
    "Separable differential equations and growth models": "可分離變數微分方程與增長模型",

    // Slope fields, Euler’s method and separable differential equa > p
    "When <span class=\"chem\">dy/dx = g(x) h(y)</span>, separate the variables by placing all <i>y</i> terms with <span class=\"chem\">dy</span> and all <i>x</i> terms with <span class=\"chem\">dx</span>:": "當 <span class=\"chem\">dy/dx = g(x) h(y)</span> 時，把所有含 <i>y</i> 的項與 <span class=\"chem\">dy</span> 放在一邊，所有含 <i>x</i> 的項與 <span class=\"chem\">dx</span> 放在另一邊以分離變數：",

    // Slope fields, Euler’s method and separable differential equa > p
    "<span class=\"chem\">int (1 / h(y)) dy = int g(x) dx</span>.": "<span class=\"chem\">int (1 / h(y)) dy = int g(x) dx</span>。",

    // Slope fields, Euler’s method and separable differential equa > p
    "Two classic scientific models in IB AA HL rely on separation of variables:": "IB AA HL 中有兩個經典科學模型依賴分離變數法：",

    // Slope fields, Euler’s method and separable differential equa > li
    "<strong>Newton’s law of cooling / radioactive decay:</strong> <span class=\"chem\">dT/dt = -k(T - T_s) =&gt; int 1/(T - T_s) dT = int -k dt =&gt; T(t) = T_s + A e^{-kt}</span>.": "<strong>牛頓冷卻定律／放射性衰變：</strong><span class=\"chem\">dT/dt = -k(T - T_s) =&gt; int 1/(T - T_s) dT = int -k dt =&gt; T(t) = T_s + A e^{-kt}</span>。",

    // Slope fields, Euler’s method and separable differential equa > li
    "<strong>Logistic population growth:</strong> <span class=\"chem\">dP/dt = kP(M - P)</span>, where <i>M</i> is the carrying capacity. Separating gives <span class=\"chem\">int M/(P(M - P)) dP = int Mk dt</span>; splitting the left side by partial fractions <span class=\"chem\">1/P + 1/(M - P)</span> yields <span class=\"chem\">ln|P / (M - P)| = Mkt + C =&gt; P(t) = M / (1 + A e^{-Mkt})</span>.": "<strong>邏輯斯蒂種群增長：</strong><span class=\"chem\">dP/dt = kP(M - P)</span>，其中 <i>M</i> 為環境承載力。分離變數得 <span class=\"chem\">int M/(P(M - P)) dP = int Mk dt</span>；用部分分式 <span class=\"chem\">1/P + 1/(M - P)</span> 拆分左方，可得 <span class=\"chem\">ln|P / (M - P)| = Mkt + C =&gt; P(t) = M / (1 + A e^{-Mkt})</span>。",

    // Slope fields, Euler’s method and separable differential equa > worked example > h3
    "Using Euler’s method and solving a separable differential equation": "應用歐拉法及解可分離變數微分方程",

    // Slope fields, Euler’s method and separable differential equa > worked example > p
    "Consider the differential equation <span class=\"chem\">dy/dx = 2xy^2</span> with initial condition <span class=\"chem\">y(0) = 1</span>.": "考慮微分方程 <span class=\"chem\">dy/dx = 2xy^2</span>，其初始條件為 <span class=\"chem\">y(0) = 1</span>。",

    // Slope fields, Euler’s method and separable differential equa > worked example > p
    "(a) Use Euler’s method with step size <span class=\"chem\">h = 0.2</span> to approximate <span class=\"chem\">y(0.4)</span>. <strong>[3 marks]</strong>": "(a) 使用步長 <span class=\"chem\">h = 0.2</span> 的歐拉法近似 <span class=\"chem\">y(0.4)</span>。<strong>[3 分]</strong>",

    // Slope fields, Euler’s method and separable differential equa > worked example > p
    "(b) Solve the differential equation analytically to find the exact value of <span class=\"chem\">y(0.4)</span>, and explain why Euler’s method underestimated the exact value. <strong>[5 marks]</strong>": "(b) 以解析方法解此微分方程，求 <span class=\"chem\">y(0.4)</span> 的準確值，並解釋為何歐拉法低估了準確值。<strong>[5 分]</strong>",

    // Slope fields, Euler’s method and separable differential equa > worked example > data-title attribute
    "Step through Euler’s recurrence from x₀ = 0 to x₂ = 0.4": "由 x₀ = 0 逐步遞推歐拉法至 x₂ = 0.4",

    // Slope fields, Euler’s method and separable differential equa > worked example > p
    "Apply y_{n+1} = y_n + 0.2(2 x_n y_n²) twice in a clear table.": "以清晰表格套用 y_{n+1} = y_n + 0.2(2 x_n y_n²) 兩次。",

    // Slope fields, Euler’s method and separable differential equa > worked example > maths line
    "Step 0 → 1: <i>x</i><sub>0</sub> = 0, <i>y</i><sub>0</sub> = 1, <i>f</i>(0, 1) = 2(0)(1)<sup>2</sup> = 0 ⇒ <i>x</i><sub>1</sub> = 0.2, <i>y</i><sub>1</sub> = 1 + 0.2(0) = 1 <b>[M1 A1]</b>": "第 0 → 1 步：<i>x</i><sub>0</sub> = 0, <i>y</i><sub>0</sub> = 1, <i>f</i>(0, 1) = 2(0)(1)<sup>2</sup> = 0 ⇒ <i>x</i><sub>1</sub> = 0.2, <i>y</i><sub>1</sub> = 1 + 0.2(0) = 1 <b>[M1 A1]</b>",

    // Slope fields, Euler’s method and separable differential equa > worked example > maths line
    "Step 1 → 2: <i>x</i><sub>1</sub> = 0.2, <i>y</i><sub>1</sub> = 1, <i>f</i>(0.2, 1) = 2(0.2)(1)<sup>2</sup> = 0.4 ⇒ <i>x</i><sub>2</sub> = 0.4, <i>y</i><sub>2</sub> = 1 + 0.2(0.4) = <b>1.08</b> <b>[A1]</b>": "第 1 → 2 步：<i>x</i><sub>1</sub> = 0.2, <i>y</i><sub>1</sub> = 1, <i>f</i>(0.2, 1) = 2(0.2)(1)<sup>2</sup> = 0.4 ⇒ <i>x</i><sub>2</sub> = 0.4, <i>y</i><sub>2</sub> = 1 + 0.2(0.4) = <b>1.08</b> <b>[A1]</b>",

    // Slope fields, Euler’s method and separable differential equa > worked example > data-title attribute
    "Separate variables and integrate both sides": "分離變數並對兩邊積分",

    // Slope fields, Euler’s method and separable differential equa > worked example > p
    "Divide by y² to isolate y on the left and x on the right.": "兩邊除以 y²，將 y 放在左方、x 放在右方。",

    // Slope fields, Euler’s method and separable differential equa > worked example > data-title attribute
    "Apply y(0) = 1, evaluate y(0.4), and compare concavity": "代入 y(0) = 1，計算 y(0.4) 並比較凹性",

    // Slope fields, Euler’s method and separable differential equa > worked example > p
    "Substitute x = 0, y = 1 to find C, then compute y(0.4).": "代入 x = 0, y = 1 求 C，然後計算 y(0.4)。",

    // Slope fields, Euler’s method and separable differential equa > worked example > maths line
    "Exact value: <i>y</i>(0.4) = <span class=\"frac\"><span>1</span><span>1 − 0.16</span></span> = <span class=\"frac\"><span>1</span><span>0.84</span></span> = <b><span class=\"frac\"><span>25</span><span>21</span></span> ≈ 1.19</b>. Because <i>y</i>(<i>x</i>) is concave up (<i>y</i>″ &gt; 0) on [0, 0.4], the tangent lines lie below the curve, so Euler’s method underestimates <i>y</i>(0.4). <b>[A1 R1]</b>": "準確值：<i>y</i>(0.4) = <span class=\"frac\"><span>1</span><span>1 − 0.16</span></span> = <span class=\"frac\"><span>1</span><span>0.84</span></span> = <b><span class=\"frac\"><span>25</span><span>21</span></span> ≈ 1.19</b>。由於 <i>y</i>(<i>x</i>) 在 [0, 0.4] 上凹向上（<i>y</i>″ &gt; 0），切線位於曲線下方，故歐拉法低估了 <i>y</i>(0.4)。<b>[A1 R1]</b>",

    // Slope fields, Euler’s method and separable differential equa > worked example > p
    "(a) 1.08; (b) 25/21 ≈ 1.19 (underestimate since curve is concave up)": "(a) 1.08；(b) 25/21 ≈ 1.19（由於曲線凹向上，故為低估）",

    // Slope fields, Euler’s method and separable differential equa > try it > p
    "Given the differential equation <span class=\"chem\">dy/dx = x + y</span> with initial condition <span class=\"chem\">y(0) = 1</span>, use Euler’s method with step length <span class=\"chem\">h = 0.1</span> to calculate the approximation <span class=\"chem\">y_2</span> for <span class=\"chem\">y(0.2)</span>.": "已知微分方程 <span class=\"chem\">dy/dx = x + y</span> 及初始條件 <span class=\"chem\">y(0) = 1</span>，使用步長 <span class=\"chem\">h = 0.1</span> 的歐拉法計算 <span class=\"chem\">y(0.2)</span> 的近似值 <span class=\"chem\">y_2</span>。",

    // Slope fields, Euler’s method and separable differential equa > try it > li
    "For the first step (<span class=\"chem\">x_0 = 0, y_0 = 1</span>): <span class=\"chem\">f(0, 1) = 0 + 1 = 1</span>, so <span class=\"chem\">y_1 = 1 + 0.1(1) = 1.1</span> at <span class=\"chem\">x_1 = 0.1</span>.": "第一步（<span class=\"chem\">x_0 = 0, y_0 = 1</span>）：<span class=\"chem\">f(0, 1) = 0 + 1 = 1</span>，故在 <span class=\"chem\">x_1 = 0.1</span> 處 <span class=\"chem\">y_1 = 1 + 0.1(1) = 1.1</span>。",

    // Slope fields, Euler’s method and separable differential equa > try it > li
    "For the second step (<span class=\"chem\">x_1 = 0.1, y_1 = 1.1</span>): <span class=\"chem\">f(0.1, 1.1) = 0.1 + 1.1 = 1.2</span>, so <span class=\"chem\">y_2 = 1.1 + 0.1(1.2)</span>.": "第二步（<span class=\"chem\">x_1 = 0.1, y_1 = 1.1</span>）：<span class=\"chem\">f(0.1, 1.1) = 0.1 + 1.1 = 1.2</span>，故 <span class=\"chem\">y_2 = 1.1 + 0.1(1.2)</span>。",

    // Homogeneous differential equations and the integrating facto > data-toc attribute
    "Homogeneous & integrating factor": "齊次方程與積分因子",

    // Homogeneous differential equations and the integrating facto > h2
    "Homogeneous differential equations and the integrating factor": "齊次微分方程與積分因子",

    // Homogeneous differential equations and the integrating facto > h3
    "1. Homogeneous differential equations (<span class=\"chem\">y = vx</span>)": "1. 齊次微分方程（<span class=\"chem\">y = vx</span>）",

    // Homogeneous differential equations and the integrating facto > p
    "A first-order differential equation is <dfn data-def=\"A differential equation that can be written in the form dy/dx = F(y/x), where every algebraic term in x and y has the same total degree.\">homogeneous</dfn> if it can be written as <span class=\"chem\">dy/dx = F(y/x)</span>—for example, <span class=\"chem\">dy/dx = (x^2 + 3y^2)/(2xy) = (1/2)(x/y) + (3/2)(y/x)</span>. Because the ratio <span class=\"chem\">y/x</span> couples the variables, we introduce the new variable <span class=\"chem\">v = y/x</span>:": "若一階微分方程可寫成 <span class=\"chem\">dy/dx = F(y/x)</span> 的形式——例如 <span class=\"chem\">dy/dx = (x^2 + 3y^2)/(2xy) = (1/2)(x/y) + (3/2)(y/x)</span>——則稱為<dfn data-def=\"可寫成 dy/dx = F(y/x) 形式的微分方程，其中 x 與 y 的每一代數項皆具有相同的總次數。\">齊次 <span class=\"en-term\">(homogeneous)</span></dfn>微分方程。由於比值 <span class=\"chem\">y/x</span> 把兩個變數耦合在一起，我們引入新變數 <span class=\"chem\">v = y/x</span>：",

    // Homogeneous differential equations and the integrating facto > data-def attribute
    "A differential equation that can be written in the form dy/dx = F(y/x), where every algebraic term in x and y has the same total degree.": "可寫成 dy/dx = F(y/x) 形式的微分方程，其中 x 與 y 的每一代數項皆具有相同的總次數。",

    // Homogeneous differential equations and the integrating facto > equation > maths line
    "Let <i>y</i> = <i>vx</i> ⇒ <span class=\"frac\"><span><i>dy</i></span><span><i>dx</i></span></span> = <i>v</i> + <i>x</i> <span class=\"frac\"><span><i>dv</i></span><span><i>dx</i></span></span> ⇒ <i>x</i> <span class=\"frac\"><span><i>dv</i></span><span><i>dx</i></span></span> = <i>F</i>(<i>v</i>) − <i>v</i>": "設 <i>y</i> = <i>vx</i> ⇒ <span class=\"frac\"><span><i>dy</i></span><span><i>dx</i></span></span> = <i>v</i> + <i>x</i> <span class=\"frac\"><span><i>dv</i></span><span><i>dx</i></span></span> ⇒ <i>x</i> <span class=\"frac\"><span><i>dv</i></span><span><i>dx</i></span></span> = <i>F</i>(<i>v</i>) − <i>v</i>",

    // Homogeneous differential equations and the integrating facto > equation > dd
    "dimensionless ratio substitution (must be memorized—not in the Formula Booklet!)": "無量綱比值代換（必須牢記——公式手冊沒有提供！）",

    // Homogeneous differential equations and the integrating facto > equation > dt
    "x(dv/dx) = F(v) − v": "x(dv/dx) = F(v) − v",

    // Homogeneous differential equations and the integrating facto > equation > dd
    "always separates into ∫ 1/(F(v) − v) dv = ∫ (1/x) dx": "必定可分離為 ∫ 1/(F(v) − v) dv = ∫ (1/x) dx",

    // Homogeneous differential equations and the integrating facto > h3
    "2. First-order linear differential equations and the integrating factor": "2. 一階線性微分方程與積分因子",

    // Homogeneous differential equations and the integrating facto > p
    "When a differential equation is linear in both <span class=\"chem\">dy/dx</span> and <i>y</i>, first divide by any coefficient in front of <span class=\"chem\">dy/dx</span> to put it into standard form:": "當微分方程對 <span class=\"chem\">dy/dx</span> 及 <i>y</i> 均為線性時，先除以 <span class=\"chem\">dy/dx</span> 前面的任何係數，將其化為標準形式：",

    // Homogeneous differential equations and the integrating facto > p
    "<span class=\"chem\">dy/dx + P(x) y = Q(x)</span>.": "<span class=\"chem\">dy/dx + P(x) y = Q(x)</span>。",

    // Homogeneous differential equations and the integrating facto > p
    "Multiplying every term by the <dfn data-def=\"The function I(x) = e^{∫ P(x) dx} that turns the left-hand side of dy/dx + P(x)y = Q(x) into the exact product-rule derivative d/dx[I(x) y].\">integrating factor</dfn> <span class=\"chem\">I(x) = e^{int P(x) dx}</span> turns the left-hand side into a single product-rule derivative:": "把每一項乘以<dfn data-def=\"函數 I(x) = e^{∫ P(x) dx}，能將 dy/dx + P(x)y = Q(x) 的左方轉化為積法則導數 d/dx[I(x) y]。\">積分因子 <span class=\"en-term\">(integrating factor)</span></dfn> <span class=\"chem\">I(x) = e^{int P(x) dx}</span>，可把左方化為單一積法則導數：",

    // Homogeneous differential equations and the integrating facto > data-def attribute
    "The function I(x) = e^{∫ P(x) dx} that turns the left-hand side of dy/dx + P(x)y = Q(x) into the exact product-rule derivative d/dx[I(x) y].": "函數 I(x) = e^{∫ P(x) dx}，能將 dy/dx + P(x)y = Q(x) 的左方轉化為積法則導數 d/dx[I(x) y]。",

    // Homogeneous differential equations and the integrating facto > equation > dd
    "coefficient of <i>y</i> (including its plus or minus sign!) after making the coefficient of dy/dx equal to 1": "把 dy/dx 的係數化為 1 後，<i>y</i> 的係數（包括其正負號！）",

    // Homogeneous differential equations and the integrating facto > common mistake > p
    "<strong>Two classic integrating-factor traps:</strong>": "<strong>兩個經典的積分因子陷阱：</strong>",

    // Homogeneous differential equations and the integrating facto > common mistake > li
    "<strong>Forgetting to divide by the leading coefficient first:</strong> In <span class=\"chem\">x(dy/dx) - 2y = x^4</span>, you must divide by <i>x</i> to get <span class=\"chem\">dy/dx - (2/x)y = x^3</span>. Thus <span class=\"chem\">P(x) = -2/x</span>, and <span class=\"chem\">I(x) = e^{int (-2/x) dx} = e^{-2 ln x} = e^{ln(x^{-2})} = x^{-2}</span> (not <span class=\"chem\">e^{-2x}</span>!).": "<strong>忘記先除以首項係數：</strong>在 <span class=\"chem\">x(dy/dx) - 2y = x^4</span> 中，必須先除以 <i>x</i> 得到 <span class=\"chem\">dy/dx - (2/x)y = x^3</span>。故 <span class=\"chem\">P(x) = -2/x</span>，且 <span class=\"chem\">I(x) = e^{int (-2/x) dx} = e^{-2 ln x} = e^{ln(x^{-2})} = x^{-2}</span>（並非 <span class=\"chem\">e^{-2x}</span>！）。",

    // Homogeneous differential equations and the integrating facto > common mistake > li
    "<strong>Forgetting to divide the constant <span class=\"chem\">+ C</span> by <span class=\"chem\">I(x)</span>:</strong> Write <span class=\"chem\">+ C</span> immediately when integrating <span class=\"chem\">int I(x) Q(x) dx</span>, then divide the <em>entire</em> right-hand side (including <i>C</i>) by <span class=\"chem\">I(x)</span>.": "<strong>忘記將常數 <span class=\"chem\">+ C</span> 除以 <span class=\"chem\">I(x)</span>：</strong>積分 <span class=\"chem\">int I(x) Q(x) dx</span> 時立即寫上 <span class=\"chem\">+ C</span>，然後將<em>整個</em>右方（包括 <i>C</i>）除以 <span class=\"chem\">I(x)</span>。",

    // Homogeneous differential equations and the integrating facto > worked example > h3
    "Solving a first-order linear differential equation using an integrating factor": "利用積分因子解一階線性微分方程",

    // Homogeneous differential equations and the integrating facto > worked example > p
    "Find the particular solution of the differential equation <span class=\"chem\">x (dy/dx) + 2y = 4x^2</span> (<span class=\"chem\">x &gt; 0</span>) given that <span class=\"chem\">y(1) = 3</span>. <strong>[6 marks]</strong>": "求微分方程 <span class=\"chem\">x (dy/dx) + 2y = 4x^2</span>（<span class=\"chem\">x &gt; 0</span>）滿足 <span class=\"chem\">y(1) = 3</span> 的特解。<strong>[6 分]</strong>",

    // Homogeneous differential equations and the integrating facto > worked example > data-title attribute
    "Divide by x to write the equation in standard form dy/dx + P(x)y = Q(x)": "除以 x 以將方程寫成標準形式 dy/dx + P(x)y = Q(x)",

    // Homogeneous differential equations and the integrating facto > worked example > p
    "The integrating factor formula requires the coefficient of dy/dx to be 1.": "積分因子公式要求 dy/dx 的係數必須為 1。",

    // Homogeneous differential equations and the integrating facto > worked example > maths line
    "<span class=\"frac\"><span><i>dy</i></span><span><i>dx</i></span></span> + <span class=\"frac\"><span>2</span><span><i>x</i></span></span><i>y</i> = 4<i>x</i> (so <i>P</i>(<i>x</i>) = <span class=\"frac\"><span>2</span><span><i>x</i></span></span>, <i>Q</i>(<i>x</i>) = 4<i>x</i>) <b>[M1]</b>": "<span class=\"frac\"><span><i>dy</i></span><span><i>dx</i></span></span> + <span class=\"frac\"><span>2</span><span><i>x</i></span></span><i>y</i> = 4<i>x</i>（故 <i>P</i>(<i>x</i>) = <span class=\"frac\"><span>2</span><span><i>x</i></span></span>, <i>Q</i>(<i>x</i>) = 4<i>x</i>）<b>[M1]</b>",

    // Homogeneous differential equations and the integrating facto > worked example > data-title attribute
    "Calculate the integrating factor I(x)": "計算積分因子 I(x)",

    // Homogeneous differential equations and the integrating facto > worked example > p
    "Use exponent and log rules to simplify e^{2 ln x} to x².": "利用指數及對數法則將 e^{2 ln x} 簡化為 x²。",

    // Homogeneous differential equations and the integrating facto > worked example > data-title attribute
    "Multiply by x², integrate both sides, and apply y(1) = 3": "乘以 x²、對兩邊積分，並代入 y(1) = 3",

    // Homogeneous differential equations and the integrating facto > worked example > p
    "The left side collapses to d/dx(x²y). Integrate the right side and don’t forget + C.": "左方收縮為 d/dx(x²y)。對右方積分，切勿忘記 + C。",

    // Homogeneous differential equations and the integrating facto > worked example > maths line
    "Substitute <i>x</i> = 1, <i>y</i> = 3: (1)<sup>2</sup>(3) = 1<sup>4</sup> + <i>C</i> ⇒ <i>C</i> = 2 ⇒ <b><i>y</i> = <i>x</i><sup>2</sup> + <span class=\"frac\"><span>2</span><span><i>x</i><sup>2</sup></span></span></b> <b>[A1]</b>": "代入 <i>x</i> = 1, <i>y</i> = 3：(1)<sup>2</sup>(3) = 1<sup>4</sup> + <i>C</i> ⇒ <i>C</i> = 2 ⇒ <b><i>y</i> = <i>x</i><sup>2</sup> + <span class=\"frac\"><span>2</span><span><i>x</i><sup>2</sup></span></span></b> <b>[A1]</b>",

    // Homogeneous differential equations and the integrating facto > try it > p
    "Solve the differential equation <span class=\"chem\">x (dy/dx) - y = 3x^2</span> (<span class=\"chem\">x &gt; 0</span>) given that <span class=\"chem\">y(1) = 2</span>, and find the exact value of <span class=\"chem\">y(2)</span>.": "解微分方程 <span class=\"chem\">x (dy/dx) - y = 3x^2</span>（<span class=\"chem\">x &gt; 0</span>），已知 <span class=\"chem\">y(1) = 2</span>，求 <span class=\"chem\">y(2)</span> 的準確值。",

    // Homogeneous differential equations and the integrating facto > try it > li
    "Divide by <i>x</i>: <span class=\"chem\">dy/dx - (1/x)y = 3x</span>. The integrating factor is <span class=\"chem\">I(x) = e^{int (-1/x) dx} = e^{-ln x} = 1/x</span>.": "除以 <i>x</i>：<span class=\"chem\">dy/dx - (1/x)y = 3x</span>。積分因子為 <span class=\"chem\">I(x) = e^{int (-1/x) dx} = e^{-ln x} = 1/x</span>。",

    // Homogeneous differential equations and the integrating facto > try it > li
    "Multiply by <span class=\"chem\">1/x</span>: <span class=\"chem\">d/dx(y / x) = 3 =&gt; y / x = 3x + C</span>. Use <span class=\"chem\">y(1) = 2</span> to find <i>C</i>, then evaluate <span class=\"chem\">y(2)</span>.": "乘以 <span class=\"chem\">1/x</span>：<span class=\"chem\">d/dx(y / x) = 3 =&gt; y / x = 3x + C</span>。利用 <span class=\"chem\">y(1) = 2</span> 求 <i>C</i>，然後計算 <span class=\"chem\">y(2)</span>。",

    // Maclaurin series expansions and differential equation series > data-toc attribute
    "Maclaurin series": "麥克勞林級數",

    // Maclaurin series expansions and differential equation series > h2
    "Maclaurin series expansions and differential equation series": "麥克勞林級數展開與微分方程級數解",

    // Maclaurin series expansions and differential equation series > p
    "A <dfn data-def=\"A power series expansion of a smooth function f(x) centred at x = 0, matching the function's value and all its derivatives at x = 0.\">Maclaurin series</dfn> approximates a smooth function <span class=\"chem\">f(x)</span> near <span class=\"chem\">x = 0</span> using a polynomial whose derivatives at <span class=\"chem\">x = 0</span> match those of <span class=\"chem\">f(x)</span> order by order:": "<dfn data-def=\"以 x = 0 為中心的光滑函數 f(x) 之冪級數展開，在 x = 0 處逐階吻合函數值及其各階導數。\">麥克勞林級數 <span class=\"en-term\">(Maclaurin series)</span></dfn>使用在 <span class=\"chem\">x = 0</span> 處逐階吻合 <span class=\"chem\">f(x)</span> 各階導數的多項式，於 <span class=\"chem\">x = 0</span> 附近近似光滑函數 <span class=\"chem\">f(x)</span>：",

    // Maclaurin series expansions and differential equation series > data-def attribute
    "A power series expansion of a smooth function f(x) centred at x = 0, matching the function's value and all its derivatives at x = 0.": "以 x = 0 為中心的光滑函數 f(x) 之冪級數展開，在 x = 0 處逐階吻合函數值及其各階導數。",

    // Maclaurin series expansions and differential equation series > equation > dd
    "<i>n</i>-th derivative of <i>f</i> evaluated at <i>x</i> = 0": "<i>f</i> 在 <i>x</i> = 0 處的 <i>n</i> 階導數",

    // Maclaurin series expansions and differential equation series > equation > dd
    "factorial 1 × 2 × … × <i>n</i> (with 0! = 1)": "階乘 1 × 2 × … × <i>n</i>（其中 0! = 1）",

    // Maclaurin series expansions and differential equation series > formula booklet note > p
    "<strong>Standard Maclaurin expansions in your Formula Booklet (Section 5.19 &amp; 1.10):</strong>": "<strong>公式手冊中的標準麥克勞林展開式（第 5.19 及 1.10 節）：</strong>",

    // Maclaurin series expansions and differential equation series > formula booklet note > li
    "<span class=\"chem\">e^x = 1 + x + x^2/2! + x^3/3! + ...</span> (valid for all <span class=\"chem\">x in R</span>)": "<span class=\"chem\">e^x = 1 + x + x^2/2! + x^3/3! + ...</span>（對所有 <span class=\"chem\">x in R</span> 成立）",

    // Maclaurin series expansions and differential equation series > formula booklet note > li
    "<span class=\"chem\">sin x = x - x^3/3! + x^5/5! - ...</span> (odd powers, alternating signs, all <span class=\"chem\">x in R</span>)": "<span class=\"chem\">sin x = x - x^3/3! + x^5/5! - ...</span>（奇數次冪，正負交替，對所有 <span class=\"chem\">x in R</span> 成立）",

    // Maclaurin series expansions and differential equation series > formula booklet note > li
    "<span class=\"chem\">cos x = 1 - x^2/2! + x^4/4! - ...</span> (even powers, alternating signs, all <span class=\"chem\">x in R</span>)": "<span class=\"chem\">cos x = 1 - x^2/2! + x^4/4! - ...</span>（偶數次冪，正負交替，對所有 <span class=\"chem\">x in R</span> 成立）",

    // Maclaurin series expansions and differential equation series > formula booklet note > li
    "<span class=\"chem\">ln(1 + x) = x - x^2/2 + x^3/3 - x^4/4 + ...</span> (divides by <i>n</i>, <strong>not</strong> <span class=\"chem\">n!</span>; valid for <span class=\"chem\">-1 &lt; x &lt;= 1</span>)": "<span class=\"chem\">ln(1 + x) = x - x^2/2 + x^3/3 - x^4/4 + ...</span>（分母為 <i>n</i>，<strong>而非</strong> <span class=\"chem\">n!</span>；於 <span class=\"chem\">-1 &lt; x &lt;= 1</span> 成立）",

    // Maclaurin series expansions and differential equation series > formula booklet note > li
    "<span class=\"chem\">arctan x = x - x^3/3 + x^5/5 - ...</span> (odd powers divided by <span class=\"chem\">2k + 1</span>, <strong>not</strong> factorials; valid for <span class=\"chem\">|x| &lt;= 1</span>)": "<span class=\"chem\">arctan x = x - x^3/3 + x^5/5 - ...</span>（奇數次冪除以 <span class=\"chem\">2k + 1</span>，<strong>而非</strong>階乘；於 <span class=\"chem\">|x| &lt;= 1</span> 成立）",

    // Maclaurin series expansions and differential equation series > formula booklet note > li
    "<span class=\"chem\">(1 + x)^p = 1 + px + p(p - 1)/2! x^2 + ...</span> (from Section 1.10; valid for <span class=\"chem\">|x| &lt; 1</span>)": "<span class=\"chem\">(1 + x)^p = 1 + px + p(p - 1)/2! x^2 + ...</span>（出自第 1.10 節；於 <span class=\"chem\">|x| &lt; 1</span> 成立）",

    // Maclaurin series expansions and differential equation series > h3
    "Combining series and developing Maclaurin series from differential equations": "組合級數及從微分方程推導麥克勞林級數",

    // Maclaurin series expansions and differential equation series > p
    "You can generate new Maclaurin series in four fast ways:": "你可以透過四種快捷方法生成新的麥克勞林級數：",

    // Maclaurin series expansions and differential equation series > li
    "<strong>Substitution:</strong> Replace <i>x</i> with <span class=\"chem\">-x^2</span> in <span class=\"chem\">e^x</span> to get <span class=\"chem\">e^{-x^2} = 1 - x^2 + x^4/2! - x^6/3! + ...</span> immediately.": "<strong>代換法：</strong>將 <span class=\"chem\">e^x</span> 中的 <i>x</i> 換成 <span class=\"chem\">-x^2</span>，立即得出 <span class=\"chem\">e^{-x^2} = 1 - x^2 + x^4/2! - x^6/3! + ...</span>。",

    // Maclaurin series expansions and differential equation series > li
    "<strong>Multiplication:</strong> Multiply the truncated polynomials for <span class=\"chem\">f(x)</span> and <span class=\"chem\">g(x)</span> and collect like powers of <i>x</i> up to the required degree.": "<strong>相乘法：</strong>將 <span class=\"chem\">f(x)</span> 與 <span class=\"chem\">g(x)</span> 的截斷多項式相乘，並合併 <i>x</i> 的同次冪直至所需次數。",

    // Maclaurin series expansions and differential equation series > li
    "<strong>Term-by-term differentiation or integration:</strong> Differentiating <span class=\"chem\">sin x</span> gives <span class=\"chem\">cos x</span>; integrating <span class=\"chem\">1/(1 + x^2) = 1 - x^2 + x^4 - ...</span> gives <span class=\"chem\">arctan x = x - x^3/3 + x^5/5 - ...</span>.": "<strong>逐項求導或積分：</strong>對 <span class=\"chem\">sin x</span> 求導可得 <span class=\"chem\">cos x</span>；對 <span class=\"chem\">1/(1 + x^2) = 1 - x^2 + x^4 - ...</span> 積分可得 <span class=\"chem\">arctan x = x - x^3/3 + x^5/5 - ...</span>。",

    // Maclaurin series expansions and differential equation series > li
    "<strong>Implicit differentiation of a differential equation (Paper 3 favourite!):</strong> Given <span class=\"chem\">dy/dx = f(x, y)</span> and <span class=\"chem\">y(0) = y_0</span>, evaluate <span class=\"chem\">y'(0) = f(0, y_0)</span> directly from the DE, then differentiate the DE implicitly using the product and chain rules to find <span class=\"chem\">y''(0)</span>, <span class=\"chem\">y'''(0)</span>, and so on.": "<strong>對微分方程作隱式求導（Paper 3 熱門考點！）：</strong>已知 <span class=\"chem\">dy/dx = f(x, y)</span> 及 <span class=\"chem\">y(0) = y_0</span>，直接從微分方程計算 <span class=\"chem\">y'(0) = f(0, y_0)</span>，再利用積法則與鏈式法則對微分方程隱式求導，依序求得 <span class=\"chem\">y''(0)</span>、<span class=\"chem\">y'''(0)</span> 等。",

    // Maclaurin series expansions and differential equation series > not needed for IB > p
    "<strong>Not needed for IB Math AA HL:</strong>": "<strong>IB Math AA HL 不要求：</strong>",

    // Maclaurin series expansions and differential equation series > not needed for IB > li
    "<strong>Second-order differential equations</strong> (<span class=\"chem\">a y'' + b y' + c y = f(x)</span>), characteristic auxiliary equations, and coupled linear systems (<span class=\"chem\">dx/dt = ax + by</span>) are <strong>not</strong> in the IB Math AA HL syllabus.": "<strong>二階微分方程</strong>（<span class=\"chem\">a y'' + b y' + c y = f(x)</span>）、特徵輔助方程以及耦合線性方程組（<span class=\"chem\">dx/dt = ax + by</span>）皆<strong>不在</strong> IB Math AA HL 課程大綱之內。",

    // Maclaurin series expansions and differential equation series > not needed for IB > li
    "<strong>General Taylor series centred at <span class=\"chem\">x = a != 0</span></strong>, formal ratio/root tests for radius of convergence, and the Lagrange error remainder bound are <strong>not</strong> required in IB Math AA HL (only Maclaurin series centred at <span class=\"chem\">x = 0</span> are examined).": "<strong>以 <span class=\"chem\">x = a != 0</span> 為中心的一般泰勒級數</strong>、判斷收斂半徑的正式比值／根值審斂法，以及拉格朗日餘項誤差界限均<strong>不屬於</strong> IB Math AA HL 的考核範圍（只考核以 <span class=\"chem\">x = 0</span> 為中心的麥克勞林級數）。",

    // Maclaurin series expansions and differential equation series > widget > data-title attribute
    "Maclaurin polynomial approximation studio": "麥克勞林多項式近似工作室",

    // Maclaurin series expansions and differential equation series > widget > data-kicker attribute
    "AHL 5.19 · Interactive": "AHL 5.19 · 互動探索",

    // Maclaurin series expansions and differential equation series > widget > figcaption
    "As the degree <i>n</i> increases, the Maclaurin polynomial <span class=\"chem\">P_n(x)</span> matches higher derivatives at <span class=\"chem\">x = 0</span> and hugs <span class=\"chem\">f(x)</span> over a wider interval. Notice that <span class=\"chem\">(1 + x)^{-1}</span> converges only for <span class=\"chem\">|x| &lt; 1</span> and <span class=\"chem\">ln(1 + x)</span> only for <span class=\"chem\">-1 &lt; x &lt;= 1</span>, because of the vertical asymptote at <span class=\"chem\">x = -1</span>.": "隨着次數 <i>n</i> 增加，麥克勞林多項式 <span class=\"chem\">P_n(x)</span> 在 <span class=\"chem\">x = 0</span> 處吻合更高階導數，並在更寬的區間內貼近 <span class=\"chem\">f(x)</span>。留意由於 <span class=\"chem\">x = -1</span> 處存在垂直漸近線，<span class=\"chem\">(1 + x)^{-1}</span> 只在 <span class=\"chem\">|x| &lt; 1</span> 內收斂，而 <span class=\"chem\">ln(1 + x)</span> 只在 <span class=\"chem\">-1 &lt; x &lt;= 1</span> 內收斂。",

    // Maclaurin series expansions and differential equation series > worked example > h3
    "Finding a Maclaurin series directly from a non-linear differential equation": "直接從非線性微分方程求麥克勞林級數",

    // Maclaurin series expansions and differential equation series > worked example > p
    "Let <span class=\"chem\">y = f(x)</span> be the solution to the differential equation <span class=\"chem\">dy/dx = x + y^2</span> with initial condition <span class=\"chem\">y(0) = 1</span>. Find the Maclaurin series for <span class=\"chem\">y</span> up to and including the term in <span class=\"chem\">x^3</span>. <strong>[6 marks]</strong>": "設 <span class=\"chem\">y = f(x)</span> 為微分方程 <span class=\"chem\">dy/dx = x + y^2</span> 滿足初始條件 <span class=\"chem\">y(0) = 1</span> 的解。求 <span class=\"chem\">y</span> 展開至 <span class=\"chem\">x^3</span> 項（包括該項）的麥克勞林級數。<strong>[6 分]</strong>",

    // Maclaurin series expansions and differential equation series > worked example > data-title attribute
    "Find y(0) and y′(0) directly from the differential equation": "直接從微分方程求 y(0) 與 y′(0)",

    // Maclaurin series expansions and differential equation series > worked example > p
    "Substitute x = 0 and y(0) = 1 into dy/dx = x + y².": "將 x = 0 及 y(0) = 1 代入 dy/dx = x + y²。",

    // Maclaurin series expansions and differential equation series > worked example > maths line
    "<i>y</i>(0) = 1, and <i>y</i>′(0) = 0 + (1)<sup>2</sup> = 1 <b>[A1]</b>": "<i>y</i>(0) = 1，且 <i>y</i>′(0) = 0 + (1)<sup>2</sup> = 1 <b>[A1]</b>",

    // Maclaurin series expansions and differential equation series > worked example > data-title attribute
    "Differentiate the ODE implicitly to find y″(0) and y‴(0)": "對常微分方程作隱式求導以求 y″(0) 與 y‴(0)",

    // Maclaurin series expansions and differential equation series > worked example > p
    "Use the chain rule d/dx(y²) = 2y y′, and then the product rule on 2y y′.": "運用鏈式法則 d/dx(y²) = 2y y′，然後對 2y y′ 運用積法則。",

    // Maclaurin series expansions and differential equation series > worked example > data-title attribute
    "Substitute the derivatives at x = 0 into the Maclaurin formula": "將 x = 0 處的各階導數代入麥克勞林公式",

    // Maclaurin series expansions and differential equation series > worked example > p
    "Divide by 2! = 2 and 3! = 6 and simplify the fractions.": "除以 2! = 2 及 3! = 6 並化簡分數。",

    // Maclaurin series expansions and differential equation series > try it > p
    "In the Maclaurin series expansion of <span class=\"chem\">f(x) = e^{2x} cos(3x)</span>, find the exact coefficient of <span class=\"chem\">x^2</span>.": "在 <span class=\"chem\">f(x) = e^{2x} cos(3x)</span> 的麥克勞林級數展開式中，求 <span class=\"chem\">x^2</span> 的準確係數。",

    // Maclaurin series expansions and differential equation series > try it > li
    "Write out the Booklet expansions up to <span class=\"chem\">x^2</span>: <span class=\"chem\">e^{2x} = 1 + 2x + (2x)^2/2! + ... = 1 + 2x + 2x^2 + ...</span> and <span class=\"chem\">cos(3x) = 1 - (3x)^2/2! + ... = 1 - (9/2)x^2 + ...</span>.": "寫出至 <span class=\"chem\">x^2</span> 項的公式手冊展開式：<span class=\"chem\">e^{2x} = 1 + 2x + (2x)^2/2! + ... = 1 + 2x + 2x^2 + ...</span> 及 <span class=\"chem\">cos(3x) = 1 - (3x)^2/2! + ... = 1 - (9/2)x^2 + ...</span>。",

    // Maclaurin series expansions and differential equation series > try it > li
    "Multiply <span class=\"chem\">(1 + 2x + 2x^2)(1 - (9/2)x^2)</span> and collect the <span class=\"chem\">x^2</span> terms: <span class=\"chem\">1(-9/2) + 2(1)</span>.": "展開 <span class=\"chem\">(1 + 2x + 2x^2)(1 - (9/2)x^2)</span> 並合併 <span class=\"chem\">x^2</span> 項：<span class=\"chem\">1(-9/2) + 2(1)</span>。",

    // Maclaurin series expansions and differential equation series > try it > maths line
    "Coefficient of <i>x</i><sup>2</sup> = 2 − <span class=\"frac\"><span>9</span><span>2</span></span> = <b>−<span class=\"frac\"><span>5</span><span>2</span></span> = −2.5</b>": "<i>x</i><sup>2</sup> 的係數 = 2 − <span class=\"frac\"><span>9</span><span>2</span></span> = <b>−<span class=\"frac\"><span>5</span><span>2</span></span> = −2.5</b>",

    // Quick practice > data-toc attribute
    "Practice": "練習",

    // Quick practice > h2
    "Quick practice": "快速練習",

    // widget string (assets/js/widgets-t5-4.js)
    "Differential equation": "微分方程",

    // widget string (assets/js/widgets-t5-4.js)
    "dy/dx = x + y": "dy/dx = x + y",

    // widget string (assets/js/widgets-t5-4.js)
    "dy/dx = 0.5 x y": "dy/dx = 0.5 x y",

    // widget string (assets/js/widgets-t5-4.js)
    "dy/dx = 0.6 y (3 − y)": "dy/dx = 0.6 y (3 − y)",

    // widget string (assets/js/widgets-t5-4.js)
    "dy/dx = cos(x) − 0.5y": "dy/dx = cos(x) − 0.5y",

    // widget string (assets/js/widgets-t5-4.js)
    "Step size h": "步長 h",

    // widget string (assets/js/widgets-t5-4.js)
    "Initial condition y(0)": "初始條件 y(0)",

    // widget string (assets/js/widgets-t5-4.js)
    "Steps to x = {x}": "至 x = {x} 的步數",

    // widget string (assets/js/widgets-t5-4.js)
    "Euler estimate of y({x})": "歐拉估計值 y({x})",

    // widget string (assets/js/widgets-t5-4.js)
    "Exact value y({x})": "準確值 y({x})",

    // widget string (assets/js/widgets-t5-4.js)
    "Global truncation error": "全局截斷誤差",

    // widget string (assets/js/widgets-t5-4.js)
    "Slope field, exact solution curve, and Euler polygon": "斜率場、準確解曲線與歐拉折線",

    // widget string (assets/js/widgets-t5-4.js)
    "Exact solution y(x)": "準確解 y(x)",

    // widget string (assets/js/widgets-t5-4.js)
    "Euler polygon (h =": "歐拉折線 (h =",

    // widget string (assets/js/widgets-t5-4.js)
    "Exact": "準確值",

    // widget string (assets/js/widgets-t5-4.js)
    "Euler": "歐拉法",

    // widget string (assets/js/widgets-t5-4.js)
    "Function f(x)": "函數 f(x)",

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
    "Maclaurin degree n": "麥克勞林次數 n",

    // widget string (assets/js/widgets-t5-4.js)
    "Test point x": "測試點 x",

    // widget string (assets/js/widgets-t5-4.js)
    "Polynomial Pₙ(x)": "多項式 Pₙ(x)",

    // widget string (assets/js/widgets-t5-4.js)
    "Exact f(x)": "準確值 f(x)",

    // widget string (assets/js/widgets-t5-4.js)
    "Approx Pₙ(x)": "近似值 Pₙ(x)",

    // widget string (assets/js/widgets-t5-4.js)
    "Error |f(x) − Pₙ(x)|": "誤差 |f(x) − Pₙ(x)|",

    // widget string (assets/js/widgets-t5-4.js)
    "Function f(x) and its degree-n Maclaurin polynomial Pₙ(x)": "函數 f(x) 及其 n 次麥克勞林多項式 Pₙ(x)",

  }
});
