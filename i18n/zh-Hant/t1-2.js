/* t1-2 — zh-Hant translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't1-2', {
  strings: {

    // page title (browser tab)
    "1.2 Exponents, logarithms and the binomial theorem | Analysis Lab": "1.2 指數、對數與二項式定理 | Analysis Lab",

    // Exponents, logarithms and the binomial theorem > page header > p
    "Topic 1.2 · SL 1.5, 1.7, 1.9": "課題 1.2 · SL 1.5, 1.7, 1.9",

    // Exponents, logarithms and the binomial theorem > page header > h1
    "Exponents, logarithms and the binomial theorem": "指數、對數與二項式定理",

    // Exponents, logarithms and the binomial theorem > page header > span
    "How do logarithms invert exponential growth, and how can we extract a single power of <i>x</i> from a high-degree binomial without expanding the entire bracket?": "對數如何作為指數增長的反運算？我們又如何在不展開整個括號的情況下，從高次二項式中抽出單一的 <i>x</i> 冪項？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "學習清單",

    // What you need to be able to do > h2
    "What you need to be able to do": "你需要掌握的能力",

    // What you need to be able to do > p
    "Tick each skill when you can do it without looking at your notes. All skills in Topic 1.2 are SL core and frequently tested on Paper 1 (without a calculator).": "當你可以不看筆記便完成以下各項技能時，請逐項剔選。課題 1.2 的所有技能均屬 SL 核心課程，並經常在 Paper 1（不可使用計算機）中考核。",

    // What you need to be able to do > checklist > span
    "Manipulate expressions with integer, negative, and fractional exponents (<span class=\"chem\">a^{m/n}</span>).": "處理含整數、負數及分數指數（<span class=\"chem\">a^{m/n}</span>）的代數式。",

    // What you need to be able to do > checklist > span
    "Convert fluently between exponential form <span class=\"chem\">a^x = b</span> and logarithmic form <span class=\"chem\">x = log_a b</span>.": "熟練地在指數形式 <span class=\"chem\">a^x = b</span> 與對數形式 <span class=\"chem\">x = log_a b</span> 之間互相轉換。",
    "Evaluate logarithms numerically with a GDC on Paper 2, for example <span class=\"chem\">log_7 50</span> or <span class=\"chem\">ln 0.3</span>.": "在 Paper 2 用 GDC 計算對數的數值，例如 <span class=\"chem\">log_7 50</span> 或 <span class=\"chem\">ln 0.3</span>。",

    // What you need to be able to do > checklist > span
    "Simplify expressions and solve equations using the product, quotient, power, and change-of-base laws of logarithms.": "運用對數的積法則、商法則、冪法則及換底公式化簡代數式並解方程。",

    // What you need to be able to do > checklist > span
    "Spot and solve disguised quadratic equations in <span class=\"chem\">a^x</span> or <span class=\"chem\">log_a x</span>, checking domain restrictions (<span class=\"chem\">a^x &gt; 0</span>, log argument <span class=\"chem\">&gt; 0</span>).": "辨識並解出以 <span class=\"chem\">a^x</span> 或 <span class=\"chem\">log_a x</span> 偽裝的二次方程，並檢查定義域限制（<span class=\"chem\">a^x &gt; 0</span>，對數真數 <span class=\"chem\">&gt; 0</span>）。",

    // What you need to be able to do > checklist > span
    "Expand <span class=\"chem\">(a + b)^n</span> for <span class=\"chem\">n</span> ∈ ℤ<sup>+</sup> using Pascal’s triangle or <span class=\"chem\">nCr</span>, and find any target term or constant term using the general term <span class=\"chem\">T_{r+1}</span>.": "對於 <span class=\"chem\">n</span> ∈ ℤ<sup>+</sup>，利用帕斯卡三角形或 <span class=\"chem\">nCr</span> 展開 <span class=\"chem\">(a + b)^n</span>，並利用通項 <span class=\"chem\">T_{r+1}</span> 求任意目標項或常數項。",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "題型解碼",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "題型解碼：如何辨識應用的方法",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — Exponents, logarithms and binomial expansions": "題型解碼 — 指數、對數與二項式展開式",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "題目中的常見字眼",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "實際含義（公式與列式）",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1（不可用計算機）與 Paper 2（可用 GDC）策略",

    // Question decoder: spotting which technique to use > table > th
    "“Solve <span class=\"chem\">9^x - 10(3^x) + 9 = 0</span>” or “Solve <span class=\"chem\">e^{2x} - 5e^x + 6 = 0</span>”": "「解 <span class=\"chem\">9^x - 10(3^x) + 9 = 0</span>」或「解 <span class=\"chem\">e^{2x} - 5e^x + 6 = 0</span>」",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Disguised quadratic</strong> in <span class=\"chem\">u = 3^x</span> or <span class=\"chem\">u = e^x</span> since <span class=\"chem\">9^x = (3^2)^x = (3^x)^2</span>.": "以 <span class=\"chem\">u = 3^x</span> 或 <span class=\"chem\">u = e^x</span> 構成的<strong>偽裝二次方程</strong>，因為 <span class=\"chem\">9^x = (3^2)^x = (3^x)^2</span>。",

    // Question decoder: spotting which technique to use > table > td
    "Let <span class=\"chem\">u = a^x</span> (<span class=\"chem\">u &gt; 0</span>), factor the quadratic in <span class=\"chem\">u</span>, <strong>reject any <span class=\"chem\">u &lt;= 0</span></strong>, then solve <span class=\"chem\">a^x = u</span>.": "設 <span class=\"chem\">u = a^x</span>（<span class=\"chem\">u &gt; 0</span>），因式分解關於 <span class=\"chem\">u</span> 的二次式，<strong>捨去任何 <span class=\"chem\">u &lt;= 0</span></strong>，再解 <span class=\"chem\">a^x = u</span>。",

    // Question decoder: spotting which technique to use > table > th
    "“Solve <span class=\"chem\">log_2 x + 6 log_x 2 = 5</span>” or logs with different bases <span class=\"chem\">log_2 x, log_8 x</span>": "「解 <span class=\"chem\">log_2 x + 6 log_x 2 = 5</span>」或不同底數的對數 <span class=\"chem\">log_2 x, log_8 x</span>",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Change of base</strong> to a single common base (usually the smallest base).": "<strong>換底公式</strong>：轉換為單一共同底數（通常是最小的底數）。",

    // Question decoder: spotting which technique to use > table > td
    "Replace <span class=\"chem\">log_x 2 = 1 / log_2 x</span> and <span class=\"chem\">log_8 x = log_2 x / log_2 8 = (1/3) log_2 x</span>.": "把 <span class=\"chem\">log_x 2 = 1 / log_2 x</span> 及 <span class=\"chem\">log_8 x = log_2 x / log_2 8 = (1/3) log_2 x</span> 代換。",

    // Question decoder: spotting which technique to use > table > th
    "“Express <span class=\"chem\">ln(a^2 / sqrt(b))</span> in terms of <span class=\"chem\">p = ln a</span> and <span class=\"chem\">q = ln b</span>”": "「以 <span class=\"chem\">p = ln a</span> 及 <span class=\"chem\">q = ln b</span> 表示 <span class=\"chem\">ln(a^2 / sqrt(b))</span>」",

    // Question decoder: spotting which technique to use > table > td
    "Split products into sums, quotients into differences, and bring powers to the front.": "把積拆成和、商拆成差，並把指數移到對數前方。",

    // Question decoder: spotting which technique to use > table > td
    "<span class=\"chem\">ln(a^2 b^{-1/2}) = 2 ln a - (1/2) ln b = 2p - (1/2)q</span>.": "<span class=\"chem\">ln(a^2 b^{-1/2}) = 2 ln a - (1/2) ln b = 2p - (1/2)q</span>。",

    // Question decoder: spotting which technique to use > table > th
    "“Find the constant term / term independent of <i>x</i> in <span class=\"chem\">(ax^p + b/x^q)^n</span>”": "「求 <span class=\"chem\">(ax^p + b/x^q)^n</span> 展開式中的常數項／與 <i>x</i> 無關的項」",

    // Question decoder: spotting which technique to use > table > td
    "The term in the expansion where the <strong>net exponent of <i>x</i> equals 0</strong>.": "展開式中 <strong><i>x</i> 的淨指數等於 0</strong> 的那一項。",

    // Question decoder: spotting which technique to use > table > td
    "Write <span class=\"chem\">T_{r+1} = nCr (ax^p)^{n-r}(bx^{-q})^r</span>, set the exponent <span class=\"chem\">p(n-r) - qr = 0</span> to find <span class=\"chem\">r</span>, then evaluate.": "寫出 <span class=\"chem\">T_{r+1} = nCr (ax^p)^{n-r}(bx^{-q})^r</span>，令指數 <span class=\"chem\">p(n-r) - qr = 0</span> 求 <span class=\"chem\">r</span>，再計算數值。",

    // Question decoder: spotting which technique to use > table > th
    "“Find the coefficient of <span class=\"chem\">x^k</span> in <span class=\"chem\">(c + dx)(a + bx)^n</span>”": "「求 <span class=\"chem\">(c + dx)(a + bx)^n</span> 展開式中 <span class=\"chem\">x^k</span> 的係數」",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Product of two brackets</strong>: pair <span class=\"chem\">c</span> with the <span class=\"chem\">x^k</span> term and <span class=\"chem\">dx</span> with the <span class=\"chem\">x^{k-1}</span> term.": "<strong>兩個括號之積</strong>：將 <span class=\"chem\">c</span> 配對 <span class=\"chem\">x^k</span> 項，並將 <span class=\"chem\">dx</span> 配對 <span class=\"chem\">x^{k-1}</span> 項。",

    // Question decoder: spotting which technique to use > table > td
    "Compute <span class=\"chem\">c × [coeff of x^k] + d × [coeff of x^{k-1}]</span>. Watch signs carefully!": "計算 <span class=\"chem\">c × [coeff of x^k] + d × [coeff of x^{k-1}]</span>（即 c 乘 x^k 係數加 d 乘 x^{k-1} 係數）。小心正負號！",

    // Laws of exponents, logarithms and change of base > data-toc attribute
    "Exponents & logs": "指數與對數",

    // Laws of exponents, logarithms and change of base > h2
    "Laws of exponents, logarithms and change of base": "指數定律、對數定律與換底公式",

    // Laws of exponents, logarithms and change of base > p
    "For any positive base <span class=\"chem\">a &gt; 0</span> (<span class=\"chem\">a != 1</span>), a <dfn data-def=\"The exponent x to which the base a must be raised to produce b: log_a(b) = x ⇔ a^x = b.\">logarithm</dfn> answers the question: <em>“To what power must I raise <span class=\"chem\">a</span> to get <span class=\"chem\">b</span>?”</em>": "對於任何正底數 <span class=\"chem\">a &gt; 0</span>（<span class=\"chem\">a != 1</span>），<dfn data-def=\"使底數 a 的該次冪等於 b 的指數 x：log_a(b) = x ⇔ a^x = b。\">對數 <span class=\"en-term\">(logarithm)</span></dfn>回答的問題是：<em>「要把 <span class=\"chem\">a</span> 升至多少次方才能得到 <span class=\"chem\">b</span>？」</em>",

    // Laws of exponents, logarithms and change of base > data-def attribute
    "The exponent x to which the base a must be raised to produce b: log_a(b) = x ⇔ a^x = b.": "使底數 a 的該次冪等於 b 的指數 x：log_a(b) = x ⇔ a^x = b。",

    // Laws of exponents, logarithms and change of base > formula booklet note > p
    "<strong>Sections 1.5 and 1.7 of your Formula Booklet</strong> give the equivalence between exponents and logarithms, the three core log laws, and the change-of-base formula:": "<strong>公式手冊第 1.5 及 1.7 節</strong>列出了指數與對數的等價關係、三條核心對數定律及換底公式：",

    // Laws of exponents, logarithms and change of base > equation > maths line
    "log<sub><i>a</i></sub> <i>x</i> = <span class=\"frac\"><span>log<sub><i>b</i></sub> <i>x</i></span><span>log<sub><i>b</i></sub> <i>a</i></span></span> (change of base)": "log<sub><i>a</i></sub> <i>x</i> = <span class=\"frac\"><span>log<sub><i>b</i></sub> <i>x</i></span><span>log<sub><i>b</i></sub> <i>a</i></span></span> （換底公式）",

    // Laws of exponents, logarithms and change of base > p
    "Two special bases have their own shorthand: <span class=\"chem\">log x = log_{10} x</span> (common logarithm) and <span class=\"chem\">ln x = log_e x</span> (natural logarithm, where Euler’s constant <span class=\"chem\">e ≈ 2.718</span>). Also memorize the instant identities <span class=\"chem\">log_a(1) = 0</span>, <span class=\"chem\">log_a(a) = 1</span> and <span class=\"chem\">log_b(a) = 1 / log_a(b)</span>. You do not need to memorize <span class=\"chem\">a^{log_a x} = x</span>: it is printed in Section 2.9 of the Formula Booklet.": "兩個常用底數有專屬簡寫：<span class=\"chem\">log x = log_{10} x</span>（常用對數）及 <span class=\"chem\">ln x = log_e x</span>（自然對數，其中歐拉常數 <span class=\"chem\">e ≈ 2.718</span>）。同時須牢記常用恒等式 <span class=\"chem\">log_a(1) = 0</span>、<span class=\"chem\">log_a(a) = 1</span> 及 <span class=\"chem\">log_b(a) = 1 / log_a(b)</span>。<span class=\"chem\">a^{log_a x} = x</span> 則不必背誦：它印在公式手冊第 2.9 節。",
    "<strong>Integer exponents (SL 1.5).</strong> These laws are not in the Formula Booklet: <span class=\"chem\">a^m × a^n = a^{m+n}</span>, <span class=\"chem\">a^m / a^n = a^{m-n}</span>, <span class=\"chem\">(a^m)^n = a^{mn}</span>, <span class=\"chem\">a^0 = 1</span> and <span class=\"chem\">a^{-n} = 1 / a^n</span>. On Paper 2 you must also be able to <strong>evaluate logarithms numerically with your GDC</strong>, for example <span class=\"chem\">log_7 50 = ln 50 / ln 7 ≈ 2.01</span> and <span class=\"chem\">ln 0.3 ≈ -1.20</span>.": "<strong>整數指數（SL 1.5）。</strong>以下定律不在公式手冊內：<span class=\"chem\">a^m × a^n = a^{m+n}</span>、<span class=\"chem\">a^m / a^n = a^{m-n}</span>、<span class=\"chem\">(a^m)^n = a^{mn}</span>、<span class=\"chem\">a^0 = 1</span> 及 <span class=\"chem\">a^{-n} = 1 / a^n</span>。在 Paper 2 中，你亦須能夠<strong>用 GDC 計算對數的數值</strong>，例如 <span class=\"chem\">log_7 50 = ln 50 / ln 7 ≈ 2.01</span> 及 <span class=\"chem\">ln 0.3 ≈ -1.20</span>。",

    // Laws of exponents, logarithms and change of base > widget > data-title attribute
    "Exponential & logarithm mirror + change of base": "指數與對數鏡像及換底公式",

    // Laws of exponents, logarithms and change of base > widget > figcaption
    "Vary the base <i>a</i> and exponent <i>x</i>. Because <i>y</i> = log<sub><i>a</i></sub>(<i>x</i>) is the inverse of <i>y</i> = <i>a</i><sup><i>x</i></sup>, every point <i>P</i>(<i>x</i>, <i>b</i>) on the exponential curve reflects across the line <i>y</i> = <i>x</i> to <i>P</i>′(<i>b</i>, <i>x</i>) on the logarithmic curve.": "調校底數 <i>a</i> 與指數 <i>x</i>。由於 <i>y</i> = log<sub><i>a</i></sub>(<i>x</i>) 是 <i>y</i> = <i>a</i><sup><i>x</i></sup> 的反函數，指數曲線上的每一點 <i>P</i>(<i>x</i>, <i>b</i>) 沿直線 <i>y</i> = <i>x</i> 反射後，都會對應對數曲線上的點 <i>P</i>′(<i>b</i>, <i>x</i>)。",

    // Laws of exponents, logarithms and change of base > common mistake > p
    "<strong>Beware of fake logarithm laws and missing domain checks:</strong><br> 1. <span class=\"chem\">log_a(x + y)</span> does <strong>not</strong> simplify! Never write <span class=\"chem\">log_a(x + y) = log_a x + log_a y</span>.<br> 2. <span class=\"chem\">(ln x)^2</span> is <span class=\"chem\">(ln x) × (ln x)</span>, whereas <span class=\"chem\">ln(x^2) = 2 ln x</span>.<br> 3. Whenever you combine <span class=\"chem\">log_a(f(x)) + log_a(g(x))</span> into <span class=\"chem\">log_a(f(x)g(x))</span>, you must test your final roots in the <strong>original</strong> equation and reject any value of <span class=\"chem\">x</span> that makes <span class=\"chem\">f(x) &lt;= 0</span> or <span class=\"chem\">g(x) &lt;= 0</span>.": "<strong>提防虛假的對數定律及遺漏定義域檢查：</strong><br> 1. <span class=\"chem\">log_a(x + y)</span> <strong>不能</strong>化簡！切勿寫成 <span class=\"chem\">log_a(x + y) = log_a x + log_a y</span>。<br> 2. <span class=\"chem\">(ln x)^2</span> 代表 <span class=\"chem\">(ln x) × (ln x)</span>，而 <span class=\"chem\">ln(x^2) = 2 ln x</span>。<br> 3. 每當你把 <span class=\"chem\">log_a(f(x)) + log_a(g(x))</span> 合併為 <span class=\"chem\">log_a(f(x)g(x))</span> 時，必須把最後求得的根代回<strong>原方程</strong>檢驗，並捨去任何使 <span class=\"chem\">f(x) &lt;= 0</span> 或 <span class=\"chem\">g(x) &lt;= 0</span> 的 <span class=\"chem\">x</span> 值。",

    // Laws of exponents, logarithms and change of base > worked example > h3
    "Solving a logarithmic equation with different bases": "解不同底數的對數方程",

    // Laws of exponents, logarithms and change of base > worked example > p
    "Solve the equation <span class=\"chem\">log_2(x) + log_x(8) = 4</span> for <span class=\"chem\">x</span>. <strong>[5 marks]</strong>": "解 (Solve) 方程 <span class=\"chem\">log_2(x) + log_x(8) = 4</span> 求 <span class=\"chem\">x</span>。<strong>[5 marks]</strong>",

    // Laws of exponents, logarithms and change of base > worked example > data-title attribute
    "Change the base of log_x(8) to base 2": "把 log_x(8) 換底為以 2 為底",

    // Laws of exponents, logarithms and change of base > worked example > p
    "Both logarithms must share the same base before we can solve algebraically.": "兩個對數必須先轉換成相同的底數，才可進行代數求解。",

    // Laws of exponents, logarithms and change of base > worked example > data-title attribute
    "Substitute u = log₂(x) and solve the quadratic": "代換 u = log₂(x) 並解二次方程",

    // Laws of exponents, logarithms and change of base > worked example > p
    "Multiplying through by u clears the fraction and gives a factorable quadratic.": "全式乘以 u 以消去分母，得出可因式分解的二次方程。",

    // Laws of exponents, logarithms and change of base > worked example > data-title attribute
    "Convert back from u = log₂(x) to x": "從 u = log₂(x) 轉換回 x",

    // Laws of exponents, logarithms and change of base > worked example > p
    "Use log₂(x) = u ⇔ x = 2^u for each root.": "對每個根使用 log₂(x) = u ⇔ x = 2^u。",

    // Laws of exponents, logarithms and change of base > worked example > maths line
    "log<sub>2</sub>(<i>x</i>) = 1 ⇒ <i>x</i> = 2, or log<sub>2</sub>(<i>x</i>) = 3 ⇒ <i>x</i> = 2<sup>3</sup> = 8 <b>[A1]</b>": "log<sub>2</sub>(<i>x</i>) = 1 ⇒ <i>x</i> = 2，或 log<sub>2</sub>(<i>x</i>) = 3 ⇒ <i>x</i> = 2<sup>3</sup> = 8 <b>[A1]</b>",

    // Laws of exponents, logarithms and change of base > worked example > p
    "x = 2 or x = 8": "x = 2 或 x = 8",

    // Laws of exponents, logarithms and change of base > try it > p
    "Solve <span class=\"chem\">log_2(x) + 4 log_x(2) = 5</span> and enter the <strong>larger</strong> of the two solutions for <span class=\"chem\">x</span>.": "解 (Solve) <span class=\"chem\">log_2(x) + 4 log_x(2) = 5</span>，並輸入 <span class=\"chem\">x</span> 的兩個解之中<strong>較大</strong>的一個。",

    // Laws of exponents, logarithms and change of base > try it > li
    "Rewrite <span class=\"chem\">log_x(2) = 1 / log_2(x)</span> and let <span class=\"chem\">u = log_2(x)</span>.": "改寫 <span class=\"chem\">log_x(2) = 1 / log_2(x)</span>，並設 <span class=\"chem\">u = log_2(x)</span>。",

    // Laws of exponents, logarithms and change of base > try it > li
    "Solve <span class=\"chem\">u^2 - 5u + 4 = 0</span> to get <span class=\"chem\">u = 1</span> or <span class=\"chem\">u = 4</span>, then compute <span class=\"chem\">x = 2^u</span>.": "解 <span class=\"chem\">u^2 - 5u + 4 = 0</span> 得 <span class=\"chem\">u = 1</span> 或 <span class=\"chem\">u = 4</span>，再計算 <span class=\"chem\">x = 2^u</span>。",

    // Laws of exponents, logarithms and change of base > try it > maths line
    "<i>u</i> + 4/<i>u</i> = 5 ⇒ (<i>u</i> − 1)(<i>u</i> − 4) = 0 ⇒ <i>u</i> = 1 or <i>u</i> = 4": "<i>u</i> + 4/<i>u</i> = 5 ⇒ (<i>u</i> − 1)(<i>u</i> − 4) = 0 ⇒ <i>u</i> = 1 或 <i>u</i> = 4",

    // Laws of exponents, logarithms and change of base > try it > maths line
    "<i>x</i> = 2<sup>1</sup> = 2 or <i>x</i> = 2<sup>4</sup> = <b>16</b>": "<i>x</i> = 2<sup>1</sup> = 2 或 <i>x</i> = 2<sup>4</sup> = <b>16</b>",

    // Laws of exponents, logarithms and change of base > data-title attribute
    "Exponents & logarithms: quick check": "指數與對數：小測",

    // The binomial theorem for positive integers > data-toc attribute
    "Binomial theorem": "二項式定理",

    // The binomial theorem for positive integers > h2
    "The binomial theorem for positive integers": "正整數指數的二項式定理",

    // The binomial theorem for positive integers > p
    "When a positive integer power <span class=\"chem\">(a + b)^n</span> is expanded, there are <span class=\"chem\">n + 1</span> terms. As you move from left to right across the expansion, the power of <span class=\"chem\">a</span> steps down from <span class=\"chem\">n</span> to <span class=\"chem\">0</span>, the power of <span class=\"chem\">b</span> steps up from <span class=\"chem\">0</span> to <span class=\"chem\">n</span> (so the two exponents always add up to <span class=\"chem\">n</span>), and the coefficients come from row <span class=\"chem\">n</span> of <dfn data-def=\"A triangular array of binomial coefficients nCr where each entry is the sum of the two entries directly above it.\">Pascal’s triangle</dfn> (counting the top 1 as row 0) or the combination formula <span class=\"chem\">nCr</span>.": "當正整數次冪 <span class=\"chem\">(a + b)^n</span> 展開時，共有 <span class=\"chem\">n + 1</span> 項。由左至右觀察展開式，<span class=\"chem\">a</span> 的冪由 <span class=\"chem\">n</span> 遞減至 <span class=\"chem\">0</span>，<span class=\"chem\">b</span> 的冪由 <span class=\"chem\">0</span> 遞增至 <span class=\"chem\">n</span>（因此兩者的指數之和恒等於 <span class=\"chem\">n</span>），而二項式係數則來自<dfn data-def=\"由二項式係數 nCr 排成的三角形數陣，當中每個數字等於其上方兩個數字之和。\">帕斯卡三角形 <span class=\"en-term\">(Pascal’s triangle)</span></dfn>的第 <span class=\"chem\">n</span> 行（頂端的 1 算作第 0 行），或組合公式 <span class=\"chem\">nCr</span>。",

    // The binomial theorem for positive integers > data-def attribute
    "A triangular array of binomial coefficients nCr where each entry is the sum of the two entries directly above it.": "由二項式係數 nCr 排成的三角形數陣，當中每個數字等於其上方兩個數字之和。",

    // The binomial theorem for positive integers > formula booklet note > p
    "<strong>Section 1.9 of your Formula Booklet</strong> gives the binomial expansion and the combination formula:": "<strong>公式手冊第 1.9 節</strong>列出了二項式展開式及組合公式：",

    // The binomial theorem for positive integers > equation > dd
    "positive integer power (<span class=\"chem\">n</span> ∈ ℤ<sup>+</sup>)": "正整數指數（<span class=\"chem\">n</span> ∈ ℤ<sup>+</sup>）",

    // The binomial theorem for positive integers > equation > dd
    "term index running from <span class=\"chem\">r = 0</span> to <span class=\"chem\">r = n</span>": "由 <span class=\"chem\">r = 0</span> 至 <span class=\"chem\">r = n</span> 的項數指標",

    // The binomial theorem for positive integers > equation > dt
    "T<sub>r+1</sub>": "T<sub>r+1</sub>",

    // The binomial theorem for positive integers > equation > dd
    "general <span class=\"chem\">(r + 1)</span>-th term of the expansion": "展開式的第 <span class=\"chem\">(r + 1)</span> 通項",

    // The binomial theorem for positive integers > key idea > p
    "<strong>How to isolate any target term without expanding the whole bracket:</strong><br> 1. Write down the general term <span class=\"chem\">T_{r+1} = nCr (a)^{n-r} (b)^r</span>, enclosing the entire second term (including its minus sign and fractional power of <span class=\"chem\">x</span>) inside <span class=\"chem\">(b)^r</span>.<br> 2. Separate the numerical factors from the powers of <span class=\"chem\">x</span>.<br> 3. Set the combined exponent of <span class=\"chem\">x</span> equal to the target power (or <span class=\"chem\">0</span> for the constant term), solve for <span class=\"chem\">r</span>, and substitute <span class=\"chem\">r</span> back in.": "<strong>如何在不展開整個括號的情況下抽出任何目標項：</strong><br> 1. 寫出通項 <span class=\"chem\">T_{r+1} = nCr (a)^{n-r} (b)^r</span>，務必把整個第二項（包括負號及 <span class=\"chem\">x</span> 的分數冪）包在 <span class=\"chem\">(b)^r</span> 內。<br> 2. 把數字因子與 <span class=\"chem\">x</span> 的冪分開。<br> 3. 令合併後的 <span class=\"chem\">x</span> 指數等於目標次方（求常數項則令其等於 <span class=\"chem\">0</span>），解出 <span class=\"chem\">r</span>，再把 <span class=\"chem\">r</span> 代回計算。",

    // The binomial theorem for positive integers > widget > data-title attribute
    "Binomial general term finder & Pascal row explorer": "二項式通項計算器與帕斯卡三角形探索工具",

    // The binomial theorem for positive integers > widget > figcaption
    "Select a binomial expression and slide <i>r</i> from 0 to <i>n</i>. Watch how the powers of <i>x</i> from <i>a</i><sup><i>n</i>−<i>r</i></sup> and <i>b</i><sup><i>r</i></sup> combine, cancelling to <i>x</i><sup>0</sup> at the constant term.": "選擇一個二項式，並把 <i>r</i> 由 0 滑動至 <i>n</i>。觀察來自 <i>a</i><sup><i>n</i>−<i>r</i></sup> 與 <i>b</i><sup><i>r</i></sup> 的 <i>x</i> 冪如何合併，並在常數項處抵消為 <i>x</i><sup>0</sup>。",

    // The binomial theorem for positive integers > worked example > h3
    "Finding the constant term in a binomial with a reciprocal term": "求含倒數項的二項式展開式中的常數項",

    // The binomial theorem for positive integers > worked example > p
    "Find the constant term in the expansion of <span class=\"chem\">(3x - 2/x^2)^6</span>. <strong>[5 marks]</strong>": "求 (Find) <span class=\"chem\">(3x - 2/x^2)^6</span> 展開式中的常數項。<strong>[5 marks]</strong>",

    // The binomial theorem for positive integers > worked example > data-title attribute
    "Write the general term T_{r+1} and separate coefficients from powers of x": "寫出通項 T_{r+1} 並把係數與 x 的冪分開",

    // The binomial theorem for positive integers > worked example > p
    "Rewrite −2/x² as −2x⁻² so all powers of x can be combined using exponent laws.": "把 −2/x² 改寫為 −2x⁻²，以便運用指數定律合併所有 x 的冪。",

    // The binomial theorem for positive integers > worked example > data-title attribute
    "Set the net power of x equal to 0 to find r": "令 x 的淨次方等於 0 以求 r",

    // The binomial theorem for positive integers > worked example > p
    "A constant term is independent of x, meaning its exponent on x is 0.": "常數項與 x 無關，即其 x 的指數為 0。",

    // The binomial theorem for positive integers > worked example > data-title attribute
    "Substitute r = 2 into the numerical coefficient": "把 r = 2 代入數字係數",

    // The binomial theorem for positive integers > worked example > p
    "Compute ⁶C₂, 3⁴, and (−2)² carefully.": "小心計算 ⁶C₂、3⁴ 及 (−2)²。",

    // The binomial theorem for positive integers > try it > p
    "Find the constant term in the expansion of <span class=\"chem\">(3x - 1/x^2)^6</span>.": "求 (Find) <span class=\"chem\">(3x - 1/x^2)^6</span> 展開式中的常數項。",

    // The binomial theorem for positive integers > try it > li
    "As in the worked example above, the power of <span class=\"chem\">x</span> is <span class=\"chem\">x^{6-3r}</span>, so the constant term occurs at <span class=\"chem\">r = 2</span>.": "如上述例題所示，<span class=\"chem\">x</span> 的冪為 <span class=\"chem\">x^{6-3r}</span>，因此常數項出現於 <span class=\"chem\">r = 2</span>。",

    // The binomial theorem for positive integers > try it > li
    "Evaluate <span class=\"chem\">^6C_2 × (3)^{6-2} × (-1)^2</span>.": "計算 <span class=\"chem\">^6C_2 × (3)^{6-2} × (-1)^2</span>。",

    // The binomial theorem for positive integers > not needed for IB > p
    "<strong>What is NOT needed for IB:</strong> You do <strong>not</strong> need the multinomial theorem for <span class=\"chem\">(a + b + c)^n</span> using <span class=\"chem\">n! / (i! j! k!)</span>. Negative and fractional exponents <span class=\"chem\">(a + bx)^n</span> for <span class=\"chem\">n</span> ∈ ℚ are Additional HL content covered on the next page (<a href=\"t1-3.html\">Topic 1.3</a>).": "<strong>IB 不要求的內容：</strong>你<strong>不需要</strong>學習使用 <span class=\"chem\">n! / (i! j! k!)</span> 展開 <span class=\"chem\">(a + b + c)^n</span> 的多項式定理。至於 <span class=\"chem\">n</span> ∈ ℚ 的負數及分數指數二項式 <span class=\"chem\">(a + bx)^n</span>，則屬於 Additional HL 內容，會在下一頁（<a href=\"t1-3.html\">課題 1.3</a>）介紹。",

    // The binomial theorem for positive integers > data-title attribute
    "Binomial theorem & mixed exam practice": "二項式定理與綜合考試練習",

    // widget string (assets/js/widgets-t1-2.js)
    "Base a": "底數 a",

    // widget string (assets/js/widgets-t1-2.js)
    "Exponent x (so b = a^x)": "指數 x（使 b = a^x）",

    // widget string (assets/js/widgets-t1-2.js)
    "Exponential form": "指數形式",

    // widget string (assets/js/widgets-t1-2.js)
    "Logarithmic form": "對數形式",

    // widget string (assets/js/widgets-t1-2.js)
    "Change of base (ln b / ln a)": "換底公式 (ln b / ln a)",

    // widget string (assets/js/widgets-t1-2.js)
    "Inverse reflection of y = a^x and y = log_a(x) across y = x": "y = a^x 與 y = log_a(x) 沿 y = x 的反函數反射",

    // widget string (assets/js/widgets-t1-2.js)
    "y = a^x": "y = a^x",

    // widget string (assets/js/widgets-t1-2.js)
    "y = log_a(x)": "y = log_a(x)",

    // widget string (assets/js/widgets-t1-2.js)
    "Binomial expression": "二項式表式",

    // widget string (assets/js/widgets-t1-2.js)
    "Term index r (for T_{r+1})": "項數指標 r（對應 T_{r+1}）",

    // widget string (assets/js/widgets-t1-2.js)
    "General term T_{r+1}": "通項 T_{r+1}",

    // widget string (assets/js/widgets-t1-2.js)
    "Net power of x": "x 的淨次方",

    // widget string (assets/js/widgets-t1-2.js)
    "Evaluated term": "化簡後的項",

    // widget string (assets/js/widgets-t1-2.js)
    "Constant term!": "常數項！",

    // widget string (assets/js/widgets-t1-2.js)
    "Pascal row n = {n} and all {m} terms:": "帕斯卡三角形第 n = {n} 行及全部 {m} 項：",

    // widget string (assets/js/widgets-t1-2.js)
    "Constant (x⁰)": "常數項 (x⁰)",
    "<i>T</i><sub><i>r</i>+1</sub> = <sup><i>n</i></sup>C<sub><i>r</i></sub> <i>a</i><sup><i>n</i>−<i>r</i></sup> <i>b</i><sup><i>r</i></sup>     (general term: not in the booklet, so learn it)": "<i>T</i><sub><i>r</i>+1</sub> = <sup><i>n</i></sup>C<sub><i>r</i></sub> <i>a</i><sup><i>n</i>−<i>r</i></sup> <i>b</i><sup><i>r</i></sup>     （通項：不在公式手冊內，須熟記）",
  }
});
