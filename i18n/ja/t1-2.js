/* t1-2 — ja translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't1-2', {
  strings: {

    // page title (browser tab)
    "1.2 Exponents, logarithms and the binomial theorem | Analysis Lab": "1.2 指数・対数と二項定理 | Analysis Lab",

    // Exponents, logarithms and the binomial theorem > page header > p
    "Topic 1.2 · SL 1.5, 1.7, 1.9": "Topic 1.2 · SL 1.5, 1.7, 1.9",

    // Exponents, logarithms and the binomial theorem > page header > h1
    "Exponents, logarithms and the binomial theorem": "指数・対数と二項定理",

    // Exponents, logarithms and the binomial theorem > page header > span
    "How do logarithms invert exponential growth, and how can we extract a single power of <i>x</i> from a high-degree binomial without expanding the entire bracket?": "対数はどのように指数的な増加を逆転させるのか、そして高次の二項式全体をすべて展開せずに特定の <i>x</i> の累乗の項だけを取り出すにはどうすればよいのでしょうか？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "チェックリスト",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > p
    "Tick each skill when you can do it without looking at your notes. All skills in Topic 1.2 are SL core and frequently tested on Paper 1 (without a calculator).": "ノートを見ずに解けるようになったら、各項目にチェックを入れましょう。Topic 1.2 の内容はすべて SL 共通範囲であり、電卓使用不可の Paper 1 で頻繁に出題されます。",

    // What you need to be able to do > checklist > span
    "Manipulate expressions with integer, negative, and fractional exponents (<span class=\"chem\">a^{m/n}</span>).": "整数・負の数・分数の指数（<span class=\"chem\">a^{m/n}</span>）を含む式を自在に変形できる。",

    // What you need to be able to do > checklist > span
    "Convert fluently between exponential form <span class=\"chem\">a^x = b</span> and logarithmic form <span class=\"chem\">x = log_a b</span>.": "指数の形 <span class=\"chem\">a^x = b</span> と対数の形 <span class=\"chem\">x = log_a b</span> を自在に書き換えられる。",
    "Evaluate logarithms numerically with a GDC on Paper 2, for example <span class=\"chem\">log_7 50</span> or <span class=\"chem\">ln 0.3</span>.": "Paper 2 で GDC を使い、<span class=\"chem\">log_7 50</span> や <span class=\"chem\">ln 0.3</span> などの対数の値を数値で求めることができる。",

    // What you need to be able to do > checklist > span
    "Simplify expressions and solve equations using the product, quotient, power, and change-of-base laws of logarithms.": "対数の積・商・累乗の性質および底の変換公式を使って、式を簡単にしたり方程式を解いたりできる。",

    // What you need to be able to do > checklist > span
    "Spot and solve disguised quadratic equations in <span class=\"chem\">a^x</span> or <span class=\"chem\">log_a x</span>, checking domain restrictions (<span class=\"chem\">a^x &gt; 0</span>, log argument <span class=\"chem\">&gt; 0</span>).": "<span class=\"chem\">a^x</span> や <span class=\"chem\">log_a x</span> に関する二次方程式型を見抜いて解き、定義域の条件（<span class=\"chem\">a^x &gt; 0</span>、真数 <span class=\"chem\">&gt; 0</span>）を確認できる。",

    // What you need to be able to do > checklist > span
    "Expand <span class=\"chem\">(a + b)^n</span> for <span class=\"chem\">n</span> ∈ ℤ<sup>+</sup> using Pascal’s triangle or <span class=\"chem\">nCr</span>, and find any target term or constant term using the general term <span class=\"chem\">T_{r+1}</span>.": "パスカルの三角形や <span class=\"chem\">nCr</span> を用いて <span class=\"chem\">n</span> ∈ ℤ<sup>+</sup> に対する <span class=\"chem\">(a + b)^n</span> を展開でき、一般項 <span class=\"chem\">T_{r+1}</span> を使って目的の項や定数項を求められる。",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "問題デコーダー",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "問題デコーダー：どの解法を使うか見抜くコツ",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — Exponents, logarithms and binomial expansions": "問題デコーダー — 指数・対数・二項展開",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "試験問題に書かれている表現",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "数学的な意味（公式と立式）",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1（電卓不可）vs Paper 2（GDC 可）",

    // Question decoder: spotting which technique to use > table > th
    "“Solve <span class=\"chem\">9^x - 10(3^x) + 9 = 0</span>” or “Solve <span class=\"chem\">e^{2x} - 5e^x + 6 = 0</span>”": "「<span class=\"chem\">9^x - 10(3^x) + 9 = 0</span> を解け」または「<span class=\"chem\">e^{2x} - 5e^x + 6 = 0</span> を解け」",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Disguised quadratic</strong> in <span class=\"chem\">u = 3^x</span> or <span class=\"chem\">u = e^x</span> since <span class=\"chem\">9^x = (3^2)^x = (3^x)^2</span>.": "<span class=\"chem\">9^x = (3^2)^x = (3^x)^2</span> なので、<span class=\"chem\">u = 3^x</span> または <span class=\"chem\">u = e^x</span> の<strong>二次方程式型</strong>です。",

    // Question decoder: spotting which technique to use > table > td
    "Let <span class=\"chem\">u = a^x</span> (<span class=\"chem\">u &gt; 0</span>), factor the quadratic in <span class=\"chem\">u</span>, <strong>reject any <span class=\"chem\">u &lt;= 0</span></strong>, then solve <span class=\"chem\">a^x = u</span>.": "<span class=\"chem\">u = a^x</span>（<span class=\"chem\">u &gt; 0</span>）とおいて <span class=\"chem\">u</span> の二次方程式を因数分解し、<strong><span class=\"chem\">u &lt;= 0</span> を除外</strong>してから <span class=\"chem\">a^x = u</span> を解きます。",

    // Question decoder: spotting which technique to use > table > th
    "“Solve <span class=\"chem\">log_2 x + 6 log_x 2 = 5</span>” or logs with different bases <span class=\"chem\">log_2 x, log_8 x</span>": "「<span class=\"chem\">log_2 x + 6 log_x 2 = 5</span> を解け」や異なる底の対数 <span class=\"chem\">log_2 x, log_8 x</span>",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Change of base</strong> to a single common base (usually the smallest base).": "<strong>底の変換公式</strong>を使って、1 つの共通の底（通常は最も小さい底）にそろえます。",

    // Question decoder: spotting which technique to use > table > td
    "Replace <span class=\"chem\">log_x 2 = 1 / log_2 x</span> and <span class=\"chem\">log_8 x = log_2 x / log_2 8 = (1/3) log_2 x</span>.": "<span class=\"chem\">log_x 2 = 1 / log_2 x</span> や <span class=\"chem\">log_8 x = log_2 x / log_2 8 = (1/3) log_2 x</span> のように書き換えます。",

    // Question decoder: spotting which technique to use > table > th
    "“Express <span class=\"chem\">ln(a^2 / sqrt(b))</span> in terms of <span class=\"chem\">p = ln a</span> and <span class=\"chem\">q = ln b</span>”": "「<span class=\"chem\">ln(a^2 / sqrt(b))</span> を <span class=\"chem\">p = ln a</span> と <span class=\"chem\">q = ln b</span> で表せ」",

    // Question decoder: spotting which technique to use > table > td
    "Split products into sums, quotients into differences, and bring powers to the front.": "積は和に、商は差に分解し、指数を前に出します。",

    // Question decoder: spotting which technique to use > table > td
    "<span class=\"chem\">ln(a^2 b^{-1/2}) = 2 ln a - (1/2) ln b = 2p - (1/2)q</span>.": "<span class=\"chem\">ln(a^2 b^{-1/2}) = 2 ln a - (1/2) ln b = 2p - (1/2)q</span> となります。",

    // Question decoder: spotting which technique to use > table > th
    "“Find the constant term / term independent of <i>x</i> in <span class=\"chem\">(ax^p + b/x^q)^n</span>”": "「<span class=\"chem\">(ax^p + b/x^q)^n</span> の展開式における定数項（<i>x</i> を含まない項）を求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "The term in the expansion where the <strong>net exponent of <i>x</i> equals 0</strong>.": "展開式の中で、<strong><i>x</i> の指数の合計が 0 になる項</strong>です。",

    // Question decoder: spotting which technique to use > table > td
    "Write <span class=\"chem\">T_{r+1} = nCr (ax^p)^{n-r}(bx^{-q})^r</span>, set the exponent <span class=\"chem\">p(n-r) - qr = 0</span> to find <span class=\"chem\">r</span>, then evaluate.": "<span class=\"chem\">T_{r+1} = nCr (ax^p)^{n-r}(bx^{-q})^r</span> と書き、指数 <span class=\"chem\">p(n-r) - qr = 0</span> から <span class=\"chem\">r</span> を求めて計算します。",

    // Question decoder: spotting which technique to use > table > th
    "“Find the coefficient of <span class=\"chem\">x^k</span> in <span class=\"chem\">(c + dx)(a + bx)^n</span>”": "「<span class=\"chem\">(c + dx)(a + bx)^n</span> における <span class=\"chem\">x^k</span> の係数を求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Product of two brackets</strong>: pair <span class=\"chem\">c</span> with the <span class=\"chem\">x^k</span> term and <span class=\"chem\">dx</span> with the <span class=\"chem\">x^{k-1}</span> term.": "<strong>2 つの括弧の積</strong>：<span class=\"chem\">c</span> には <span class=\"chem\">x^k</span> の項を、<span class=\"chem\">dx</span> には <span class=\"chem\">x^{k-1}</span> の項を組み合わせます。",

    // Question decoder: spotting which technique to use > table > td
    "Compute <span class=\"chem\">c × [coeff of x^k] + d × [coeff of x^{k-1}]</span>. Watch signs carefully!": "<span class=\"chem\">c × [coeff of x^k] + d × [coeff of x^{k-1}]</span>（x^k の係数と x^{k-1} の係数）を計算します。符号に注意しましょう。",

    // Laws of exponents, logarithms and change of base > data-toc attribute
    "Exponents & logs": "指数と対数",

    // Laws of exponents, logarithms and change of base > h2
    "Laws of exponents, logarithms and change of base": "指数法則・対数の性質と底の変換公式",

    // Laws of exponents, logarithms and change of base > p
    "For any positive base <span class=\"chem\">a &gt; 0</span> (<span class=\"chem\">a != 1</span>), a <dfn data-def=\"The exponent x to which the base a must be raised to produce b: log_a(b) = x ⇔ a^x = b.\">logarithm</dfn> answers the question: <em>“To what power must I raise <span class=\"chem\">a</span> to get <span class=\"chem\">b</span>?”</em>": "正の底 <span class=\"chem\">a &gt; 0</span>（<span class=\"chem\">a != 1</span>）に対して、<dfn data-def=\"b を作るために底 a を何乗すべきかを表す指数 x：log_a(b) = x ⇔ a^x = b。\">対数 <span class=\"en-term\">(logarithm)</span></dfn> は「<em><span class=\"chem\">a</span> を何乗すると <span class=\"chem\">b</span> になるか？</em>」という問いに答えるものです。",

    // Laws of exponents, logarithms and change of base > data-def attribute
    "The exponent x to which the base a must be raised to produce b: log_a(b) = x ⇔ a^x = b.": "b を作るために底 a を何乗すべきかを表す指数 x：log_a(b) = x ⇔ a^x = b。",

    // Laws of exponents, logarithms and change of base > formula booklet note > p
    "<strong>Sections 1.5 and 1.7 of your Formula Booklet</strong> give the equivalence between exponents and logarithms, the three core log laws, and the change-of-base formula:": "<strong>公式集（Formula booklet）の Sections 1.5 と 1.7</strong> には、指数と対数の関係、3 つの基本的な対数の性質、底の変換公式が掲載されています：",

    // Laws of exponents, logarithms and change of base > equation > maths line
    "log<sub><i>a</i></sub> <i>x</i> = <span class=\"frac\"><span>log<sub><i>b</i></sub> <i>x</i></span><span>log<sub><i>b</i></sub> <i>a</i></span></span> (change of base)": "log<sub><i>a</i></sub> <i>x</i> = <span class=\"frac\"><span>log<sub><i>b</i></sub> <i>x</i></span><span>log<sub><i>b</i></sub> <i>a</i></span></span> （底の変換公式）",

    // Laws of exponents, logarithms and change of base > p
    "Two special bases have their own shorthand: <span class=\"chem\">log x = log_{10} x</span> (common logarithm) and <span class=\"chem\">ln x = log_e x</span> (natural logarithm, where Euler’s constant <span class=\"chem\">e ≈ 2.718</span>). Also memorize the instant identities <span class=\"chem\">log_a(1) = 0</span>, <span class=\"chem\">log_a(a) = 1</span> and <span class=\"chem\">log_b(a) = 1 / log_a(b)</span>. You do not need to memorize <span class=\"chem\">a^{log_a x} = x</span>: it is printed in Section 2.9 of the Formula Booklet.": "2 つの特別な底には専用の省略記法があります：<span class=\"chem\">log x = log_{10} x</span>（常用対数）と <span class=\"chem\">ln x = log_e x</span>（自然対数、ネイピア数 <span class=\"chem\">e ≈ 2.718</span>）です。また、<span class=\"chem\">log_a(1) = 0</span>、<span class=\"chem\">log_a(a) = 1</span>、<span class=\"chem\">log_b(a) = 1 / log_a(b)</span> もすぐ使えるように覚えておきましょう。<span class=\"chem\">a^{log_a x} = x</span> は公式集の 2.9 節に載っているので、暗記する必要はありません。",
    "<strong>Integer exponents (SL 1.5).</strong> These laws are not in the Formula Booklet: <span class=\"chem\">a^m × a^n = a^{m+n}</span>, <span class=\"chem\">a^m / a^n = a^{m-n}</span>, <span class=\"chem\">(a^m)^n = a^{mn}</span>, <span class=\"chem\">a^0 = 1</span> and <span class=\"chem\">a^{-n} = 1 / a^n</span>. On Paper 2 you must also be able to <strong>evaluate logarithms numerically with your GDC</strong>, for example <span class=\"chem\">log_7 50 = ln 50 / ln 7 ≈ 2.01</span> and <span class=\"chem\">ln 0.3 ≈ -1.20</span>.": "<strong>整数の指数（SL 1.5）。</strong>次の法則は公式集に載っていません：<span class=\"chem\">a^m × a^n = a^{m+n}</span>、<span class=\"chem\">a^m / a^n = a^{m-n}</span>、<span class=\"chem\">(a^m)^n = a^{mn}</span>、<span class=\"chem\">a^0 = 1</span>、<span class=\"chem\">a^{-n} = 1 / a^n</span>。Paper 2 では、<strong>GDC を使って対数の値を数値で求める</strong>こともできなければなりません。例：<span class=\"chem\">log_7 50 = ln 50 / ln 7 ≈ 2.01</span>、<span class=\"chem\">ln 0.3 ≈ -1.20</span>。",

    // Laws of exponents, logarithms and change of base > widget > data-title attribute
    "Exponential & logarithm mirror + change of base": "指数関数と対数関数の対称性＋底の変換",

    // Laws of exponents, logarithms and change of base > widget > figcaption
    "Vary the base <i>a</i> and exponent <i>x</i>. Because <i>y</i> = log<sub><i>a</i></sub>(<i>x</i>) is the inverse of <i>y</i> = <i>a</i><sup><i>x</i></sup>, every point <i>P</i>(<i>x</i>, <i>b</i>) on the exponential curve reflects across the line <i>y</i> = <i>x</i> to <i>P</i>′(<i>b</i>, <i>x</i>) on the logarithmic curve.": "底 <i>a</i> と指数 <i>x</i> を変えてみましょう。<i>y</i> = log<sub><i>a</i></sub>(<i>x</i>) は <i>y</i> = <i>a</i><sup><i>x</i></sup> の逆関数であるため、指数関数上の点 <i>P</i>(<i>x</i>, <i>b</i>) を直線 <i>y</i> = <i>x</i> に関して対称移動させると、対数関数上の点 <i>P</i>′(<i>b</i>, <i>x</i>) に移ります。",

    // Laws of exponents, logarithms and change of base > common mistake > p
    "<strong>Beware of fake logarithm laws and missing domain checks:</strong><br> 1. <span class=\"chem\">log_a(x + y)</span> does <strong>not</strong> simplify! Never write <span class=\"chem\">log_a(x + y) = log_a x + log_a y</span>.<br> 2. <span class=\"chem\">(ln x)^2</span> is <span class=\"chem\">(ln x) × (ln x)</span>, whereas <span class=\"chem\">ln(x^2) = 2 ln x</span>.<br> 3. Whenever you combine <span class=\"chem\">log_a(f(x)) + log_a(g(x))</span> into <span class=\"chem\">log_a(f(x)g(x))</span>, you must test your final roots in the <strong>original</strong> equation and reject any value of <span class=\"chem\">x</span> that makes <span class=\"chem\">f(x) &lt;= 0</span> or <span class=\"chem\">g(x) &lt;= 0</span>.": "<strong>誤った対数法則と真数条件の確認漏れに注意：</strong><br> 1. <span class=\"chem\">log_a(x + y)</span> はそれ以上<strong>変形できません</strong>。<span class=\"chem\">log_a(x + y) = log_a x + log_a y</span> と書かないでください。<br> 2. <span class=\"chem\">(ln x)^2</span> は <span class=\"chem\">(ln x) × (ln x)</span> であり、<span class=\"chem\">ln(x^2) = 2 ln x</span> とは別物です。<br> 3. <span class=\"chem\">log_a(f(x)) + log_a(g(x))</span> を <span class=\"chem\">log_a(f(x)g(x))</span> にまとめるときは、求めた解を必ず<strong>元の</strong>方程式に戻して確かめ、<span class=\"chem\">f(x) &lt;= 0</span> または <span class=\"chem\">g(x) &lt;= 0</span> になる <span class=\"chem\">x</span> を除外しなければなりません。",

    // Laws of exponents, logarithms and change of base > worked example > h3
    "Solving a logarithmic equation with different bases": "底が異なる対数方程式を解く",

    // Laws of exponents, logarithms and change of base > worked example > p
    "Solve the equation <span class=\"chem\">log_2(x) + log_x(8) = 4</span> for <span class=\"chem\">x</span>. <strong>[5 marks]</strong>": "方程式 <span class=\"chem\">log_2(x) + log_x(8) = 4</span> を <span class=\"chem\">x</span> について解きなさい。<strong>[5 marks]</strong>",

    // Laws of exponents, logarithms and change of base > worked example > data-title attribute
    "Change the base of log_x(8) to base 2": "log_x(8) の底を 2 に変換する",

    // Laws of exponents, logarithms and change of base > worked example > p
    "Both logarithms must share the same base before we can solve algebraically.": "代数的に解くには、両方の対数の底を同じにする必要があります。",

    // Laws of exponents, logarithms and change of base > worked example > data-title attribute
    "Substitute u = log₂(x) and solve the quadratic": "u = log₂(x) とおいて二次方程式を解く",

    // Laws of exponents, logarithms and change of base > worked example > p
    "Multiplying through by u clears the fraction and gives a factorable quadratic.": "両辺に u を掛けて分母を払うと、因数分解できる二次方程式になります。",

    // Laws of exponents, logarithms and change of base > worked example > data-title attribute
    "Convert back from u = log₂(x) to x": "u = log₂(x) から x に戻す",

    // Laws of exponents, logarithms and change of base > worked example > p
    "Use log₂(x) = u ⇔ x = 2^u for each root.": "それぞれの解に対して log₂(x) = u ⇔ x = 2^u を使います。",

    // Laws of exponents, logarithms and change of base > worked example > maths line
    "log<sub>2</sub>(<i>x</i>) = 1 ⇒ <i>x</i> = 2, or log<sub>2</sub>(<i>x</i>) = 3 ⇒ <i>x</i> = 2<sup>3</sup> = 8 <b>[A1]</b>": "log<sub>2</sub>(<i>x</i>) = 1 ⇒ <i>x</i> = 2、または log<sub>2</sub>(<i>x</i>) = 3 ⇒ <i>x</i> = 2<sup>3</sup> = 8 <b>[A1]</b>",

    // Laws of exponents, logarithms and change of base > worked example > p
    "x = 2 or x = 8": "x = 2 または x = 8",

    // Laws of exponents, logarithms and change of base > try it > p
    "Solve <span class=\"chem\">log_2(x) + 4 log_x(2) = 5</span> and enter the <strong>larger</strong> of the two solutions for <span class=\"chem\">x</span>.": "<span class=\"chem\">log_2(x) + 4 log_x(2) = 5</span> を解き、2 つの解のうち<strong>大きい方</strong>の <span class=\"chem\">x</span> の値を入力しなさい。",

    // Laws of exponents, logarithms and change of base > try it > li
    "Rewrite <span class=\"chem\">log_x(2) = 1 / log_2(x)</span> and let <span class=\"chem\">u = log_2(x)</span>.": "<span class=\"chem\">log_x(2) = 1 / log_2(x)</span> と書き換え、<span class=\"chem\">u = log_2(x)</span> とおきます。",

    // Laws of exponents, logarithms and change of base > try it > li
    "Solve <span class=\"chem\">u^2 - 5u + 4 = 0</span> to get <span class=\"chem\">u = 1</span> or <span class=\"chem\">u = 4</span>, then compute <span class=\"chem\">x = 2^u</span>.": "<span class=\"chem\">u^2 - 5u + 4 = 0</span> を解いて <span class=\"chem\">u = 1</span> または <span class=\"chem\">u = 4</span> を得てから、<span class=\"chem\">x = 2^u</span> を計算します。",

    // Laws of exponents, logarithms and change of base > try it > maths line
    "<i>u</i> + 4/<i>u</i> = 5 ⇒ (<i>u</i> − 1)(<i>u</i> − 4) = 0 ⇒ <i>u</i> = 1 or <i>u</i> = 4": "<i>u</i> + 4/<i>u</i> = 5 ⇒ (<i>u</i> − 1)(<i>u</i> − 4) = 0 ⇒ <i>u</i> = 1 または <i>u</i> = 4",

    // Laws of exponents, logarithms and change of base > try it > maths line
    "<i>x</i> = 2<sup>1</sup> = 2 or <i>x</i> = 2<sup>4</sup> = <b>16</b>": "<i>x</i> = 2<sup>1</sup> = 2 または <i>x</i> = 2<sup>4</sup> = <b>16</b>",

    // Laws of exponents, logarithms and change of base > data-title attribute
    "Exponents & logarithms: quick check": "指数と対数：確認問題",

    // The binomial theorem for positive integers > data-toc attribute
    "Binomial theorem": "二項定理",

    // The binomial theorem for positive integers > h2
    "The binomial theorem for positive integers": "正の整数に対する二項定理",

    // The binomial theorem for positive integers > p
    "When a positive integer power <span class=\"chem\">(a + b)^n</span> is expanded, there are <span class=\"chem\">n + 1</span> terms. As you move from left to right across the expansion, the power of <span class=\"chem\">a</span> steps down from <span class=\"chem\">n</span> to <span class=\"chem\">0</span>, the power of <span class=\"chem\">b</span> steps up from <span class=\"chem\">0</span> to <span class=\"chem\">n</span> (so the two exponents always add up to <span class=\"chem\">n</span>), and the coefficients come from row <span class=\"chem\">n</span> of <dfn data-def=\"A triangular array of binomial coefficients nCr where each entry is the sum of the two entries directly above it.\">Pascal’s triangle</dfn> (counting the top 1 as row 0) or the combination formula <span class=\"chem\">nCr</span>.": "正の整数乗 <span class=\"chem\">(a + b)^n</span> を展開すると、<span class=\"chem\">n + 1</span> 個の項が現れます。左から右へ進むにつれて、<span class=\"chem\">a</span> の指数は <span class=\"chem\">n</span> から <span class=\"chem\">0</span> へ減り、<span class=\"chem\">b</span> の指数は <span class=\"chem\">0</span> から <span class=\"chem\">n</span> へ増えます（2 つの指数の和は常に <span class=\"chem\">n</span> になります）。係数は<dfn data-def=\"二項係数 nCr を三角形に並べた表。各数は真上の 2 つの数の和になっている。\">パスカルの三角形 <span class=\"en-term\">(Pascal’s triangle)</span></dfn> の第 <span class=\"chem\">n</span> 段（一番上の 1 を第 0 段と数えます）、または組合せの公式 <span class=\"chem\">nCr</span> から得られます。",

    // The binomial theorem for positive integers > data-def attribute
    "A triangular array of binomial coefficients nCr where each entry is the sum of the two entries directly above it.": "二項係数 nCr を三角形に並べた表。各数は真上の 2 つの数の和になっている。",

    // The binomial theorem for positive integers > formula booklet note > p
    "<strong>Section 1.9 of your Formula Booklet</strong> gives the binomial expansion and the combination formula:": "<strong>公式集（Formula booklet）の Section 1.9</strong> には、二項展開と組合せの公式が掲載されています：",

    // The binomial theorem for positive integers > equation > dd
    "positive integer power (<span class=\"chem\">n</span> ∈ ℤ<sup>+</sup>)": "正の整数の指数（<span class=\"chem\">n</span> ∈ ℤ<sup>+</sup>）",

    // The binomial theorem for positive integers > equation > dd
    "term index running from <span class=\"chem\">r = 0</span> to <span class=\"chem\">r = n</span>": "<span class=\"chem\">r = 0</span> から <span class=\"chem\">r = n</span> まで動く項の番号",

    // The binomial theorem for positive integers > equation > dt
    "T<sub>r+1</sub>": "T<sub>r+1</sub>",

    // The binomial theorem for positive integers > equation > dd
    "general <span class=\"chem\">(r + 1)</span>-th term of the expansion": "展開式の一般項（第 <span class=\"chem\">(r + 1)</span> 項）",

    // The binomial theorem for positive integers > key idea > p
    "<strong>How to isolate any target term without expanding the whole bracket:</strong><br> 1. Write down the general term <span class=\"chem\">T_{r+1} = nCr (a)^{n-r} (b)^r</span>, enclosing the entire second term (including its minus sign and fractional power of <span class=\"chem\">x</span>) inside <span class=\"chem\">(b)^r</span>.<br> 2. Separate the numerical factors from the powers of <span class=\"chem\">x</span>.<br> 3. Set the combined exponent of <span class=\"chem\">x</span> equal to the target power (or <span class=\"chem\">0</span> for the constant term), solve for <span class=\"chem\">r</span>, and substitute <span class=\"chem\">r</span> back in.": "<strong>全体を展開せずに目的の項だけを取り出す手順：</strong><br> 1. 一般項 <span class=\"chem\">T_{r+1} = nCr (a)^{n-r} (b)^r</span> を書きます。第 2 項（マイナス符号や <span class=\"chem\">x</span> の分数指数・負の指数を含む）を丸ごと <span class=\"chem\">(b)^r</span> の中に入れます。<br> 2. 数の部分と <span class=\"chem\">x</span> の累乗の部分を分けます。<br> 3. <span class=\"chem\">x</span> の指数の合計を目標の次数（定数項なら <span class=\"chem\">0</span>）と等しいとおいて <span class=\"chem\">r</span> を求め、その <span class=\"chem\">r</span> を元の式に代入します。",

    // The binomial theorem for positive integers > widget > data-title attribute
    "Binomial general term finder & Pascal row explorer": "二項展開の一般項ファインダー＆パスカルの三角形",

    // The binomial theorem for positive integers > widget > figcaption
    "Select a binomial expression and slide <i>r</i> from 0 to <i>n</i>. Watch how the powers of <i>x</i> from <i>a</i><sup><i>n</i>−<i>r</i></sup> and <i>b</i><sup><i>r</i></sup> combine, cancelling to <i>x</i><sup>0</sup> at the constant term.": "二項式を選び、<i>r</i> を 0 から <i>n</i> まで動かしてみましょう。<i>a</i><sup><i>n</i>−<i>r</i></sup> と <i>b</i><sup><i>r</i></sup> の <i>x</i> の指数が合わさり、定数項で <i>x</i><sup>0</sup> に打ち消し合う様子を確認できます。",

    // The binomial theorem for positive integers > worked example > h3
    "Finding the constant term in a binomial with a reciprocal term": "分数項を含む二項展開の定数項を求める",

    // The binomial theorem for positive integers > worked example > p
    "Find the constant term in the expansion of <span class=\"chem\">(3x - 2/x^2)^6</span>. <strong>[5 marks]</strong>": "<span class=\"chem\">(3x - 2/x^2)^6</span> の展開式における定数項を求めなさい (Find)。<strong>[5 marks]</strong>",

    // The binomial theorem for positive integers > worked example > data-title attribute
    "Write the general term T_{r+1} and separate coefficients from powers of x": "一般項 T_{r+1} を書き、係数と x の累乗を分ける",

    // The binomial theorem for positive integers > worked example > p
    "Rewrite −2/x² as −2x⁻² so all powers of x can be combined using exponent laws.": "−2/x² を −2x⁻² と書き直し、指数法則で x の累乗をまとめられるようにします。",

    // The binomial theorem for positive integers > worked example > data-title attribute
    "Set the net power of x equal to 0 to find r": "x の指数の合計を 0 とおいて r を求める",

    // The binomial theorem for positive integers > worked example > p
    "A constant term is independent of x, meaning its exponent on x is 0.": "定数項は x を含まない項なので、x の指数は 0 になります。",

    // The binomial theorem for positive integers > worked example > data-title attribute
    "Substitute r = 2 into the numerical coefficient": "r = 2 を数の係数に代入する",

    // The binomial theorem for positive integers > worked example > p
    "Compute ⁶C₂, 3⁴, and (−2)² carefully.": "⁶C₂、3⁴、(−2)² を丁寧に計算します。",

    // The binomial theorem for positive integers > try it > p
    "Find the constant term in the expansion of <span class=\"chem\">(3x - 1/x^2)^6</span>.": "<span class=\"chem\">(3x - 1/x^2)^6</span> の展開式における定数項を求めなさい (Find)。",

    // The binomial theorem for positive integers > try it > li
    "As in the worked example above, the power of <span class=\"chem\">x</span> is <span class=\"chem\">x^{6-3r}</span>, so the constant term occurs at <span class=\"chem\">r = 2</span>.": "上の例題と同様に、<span class=\"chem\">x</span> の累乗は <span class=\"chem\">x^{6-3r}</span> となるため、定数項は <span class=\"chem\">r = 2</span> のときに現れます。",

    // The binomial theorem for positive integers > try it > li
    "Evaluate <span class=\"chem\">^6C_2 × (3)^{6-2} × (-1)^2</span>.": "<span class=\"chem\">^6C_2 × (3)^{6-2} × (-1)^2</span> を計算します。",

    // The binomial theorem for positive integers > not needed for IB > p
    "<strong>What is NOT needed for IB:</strong> You do <strong>not</strong> need the multinomial theorem for <span class=\"chem\">(a + b + c)^n</span> using <span class=\"chem\">n! / (i! j! k!)</span>. Negative and fractional exponents <span class=\"chem\">(a + bx)^n</span> for <span class=\"chem\">n</span> ∈ ℚ are Additional HL content covered on the next page (<a href=\"t1-3.html\">Topic 1.3</a>).": "<strong>IB の範囲外：</strong> <span class=\"chem\">n! / (i! j! k!)</span> を使う <span class=\"chem\">(a + b + c)^n</span> の多項定理は<strong>不要</strong>です。<span class=\"chem\">n</span> ∈ ℚ（負の整数や分数）に対する <span class=\"chem\">(a + bx)^n</span> の展開は AHL 内容であり、次のページ（<a href=\"t1-3.html\">Topic 1.3</a>）で扱います。",

    // The binomial theorem for positive integers > data-title attribute
    "Binomial theorem & mixed exam practice": "二項定理と総合演習",

    // widget string (assets/js/widgets-t1-2.js)
    "Base a": "底 a",

    // widget string (assets/js/widgets-t1-2.js)
    "Exponent x (so b = a^x)": "指数 x（b = a^x）",

    // widget string (assets/js/widgets-t1-2.js)
    "Exponential form": "指数の形",

    // widget string (assets/js/widgets-t1-2.js)
    "Logarithmic form": "対数の形",

    // widget string (assets/js/widgets-t1-2.js)
    "Change of base (ln b / ln a)": "底の変換 (ln b / ln a)",

    // widget string (assets/js/widgets-t1-2.js)
    "Inverse reflection of y = a^x and y = log_a(x) across y = x": "y = x に関する y = a^x と y = log_a(x) の対称性",

    // widget string (assets/js/widgets-t1-2.js)
    "y = a^x": "y = a^x",

    // widget string (assets/js/widgets-t1-2.js)
    "y = log_a(x)": "y = log_a(x)",

    // widget string (assets/js/widgets-t1-2.js)
    "Binomial expression": "二項式",

    // widget string (assets/js/widgets-t1-2.js)
    "Term index r (for T_{r+1})": "項の番号 r（T_{r+1} 用）",

    // widget string (assets/js/widgets-t1-2.js)
    "General term T_{r+1}": "一般項 T_{r+1}",

    // widget string (assets/js/widgets-t1-2.js)
    "Net power of x": "x の指数の合計",

    // widget string (assets/js/widgets-t1-2.js)
    "Evaluated term": "計算された項",

    // widget string (assets/js/widgets-t1-2.js)
    "Constant term!": "定数項！",

    // widget string (assets/js/widgets-t1-2.js)
    "Pascal row n = {n} and all {m} terms:": "パスカルの三角形 n = {n} 段目と全 {m} 項：",

    // widget string (assets/js/widgets-t1-2.js)
    "Constant (x⁰)": "定数項 (x⁰)",

    "<i>T</i><sub><i>r</i>+1</sub> = <sup><i>n</i></sup>C<sub><i>r</i></sub> <i>a</i><sup><i>n</i>−<i>r</i></sup> <i>b</i><sup><i>r</i></sup>     (general term: not in the booklet, so learn it)": "<i>T</i><sub><i>r</i>+1</sub> = <sup><i>n</i></sup>C<sub><i>r</i></sub> <i>a</i><sup><i>n</i>−<i>r</i></sup> <i>b</i><sup><i>r</i></sup>     （一般項：公式集に載っていないので覚えること）",

    // Exam-style practice / exponents section (added with the 2026-11 question expansion)
    "<strong>Before you start:</strong> disguised quadratics such as <span class=\"chem\">e^{2x} - 5e^x + 6 = 0</span> need factorising, the quadratic formula and the discriminant from <a href=\"t2-2.html\">2.2 Quadratics, rational, exponential and log models</a>, where the graphs of <span class=\"chem\">y = a^x</span> and <span class=\"chem\">y = log_a x</span> are also studied.": "<strong>始める前に：</strong><span class=\"chem\">e^{2x} - 5e^x + 6 = 0</span> のような二次方程式型の問題には、<a href=\"t2-2.html\">2.2 二次関数、有理関数、指数・対数モデル</a> で学ぶ因数分解、解の公式、判別式が必要です。<span class=\"chem\">y = a^x</span> と <span class=\"chem\">y = log_a x</span> のグラフもそのページで扱います。",

    // Exam-style practice / exponents section (added with the 2026-11 question expansion)
    "Exam-style practice": "実戦形式の演習",

    // Exam-style practice / exponents section (added with the 2026-11 question expansion)
    "Three sets of original questions on exponents, logarithms, exponential models and the binomial theorem. Each set draws 10 questions at a time; reload it for a new selection. Questions tagged Paper 2 need your GDC. One challenge question links the binomial theorem to the binomial distribution of <a href=\"t4-2.html\">4.2 Probability, distributions, Bayes and continuous RVs</a>.": "指数、対数、指数モデル、二項定理に関するオリジナル問題の 3 つのセットです。各セットは一度に 10 問を出題します。再読み込みすると新しい問題が選ばれます。Paper 2 の表示がある問題には GDC が必要です。発展問題の 1 つは、二項定理を <a href=\"t4-2.html\">4.2 確率、分布、ベイズの定理と連続確率変数</a> の二項分布と結びつけています。",

    // Exam-style practice / exponents section (added with the 2026-11 question expansion)
    "Foundation: the core laws": "基礎：基本法則",

    // Exam-style practice / exponents section (added with the 2026-11 question expansion)
    "1.2 foundation": "1.2 基礎",

    // Exam-style practice / exponents section (added with the 2026-11 question expansion)
    "Exam standard: Paper 1 and Paper 2": "試験標準：Paper 1 と Paper 2",

    // Exam-style practice / exponents section (added with the 2026-11 question expansion)
    "1.2 exam standard": "1.2 試験標準",

    // Exam-style practice / exponents section (added with the 2026-11 question expansion)
    "Challenge: decoding wordy and unfamiliar questions": "発展：長文の問題や見慣れない問題を読み解く",

    // Exam-style practice / exponents section (added with the 2026-11 question expansion)
    "1.2 challenge": "1.2 発展",
  }
});
