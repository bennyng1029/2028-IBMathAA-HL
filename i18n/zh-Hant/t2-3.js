/* t2-3 — zh-Hant translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't2-3', {
  strings: {

    // page title (browser tab)
    "2.3 Transformations, polynomials and modulus functions | Analysis Lab": "2.3 圖像變換、多項式與絕對值函數 | Analysis Lab",

    // Transformations, polynomials and modulus functions > page header > p
    "Topic 2.3 · SL 2.11 + AHL 2.12–2.16": "課題 2.3 · SL 2.11 + AHL 2.12–2.16",

    // Transformations, polynomials and modulus functions > page header > h1
    "Transformations, polynomials and modulus functions": "圖像變換、多項式與絕對值函數",

    // Transformations, polynomials and modulus functions > page header > span
    "How can we transform any graph systematically, extract polynomial roots and symmetries without expanding everything, and solve rational and modulus inequalities without losing solutions?": "我們如何有系統地變換任何圖像？如何在不完全展開的情況下找出多項式的根與對稱性？又如何在不遺漏解的情況下解有理與絕對值不等式？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "學習清單",

    // What you need to be able to do > h2
    "What you need to be able to do": "你需要掌握的能力",

    // What you need to be able to do > checklist > span
    "Apply translations, reflections, and vertical/horizontal stretches—including composite transformations <span class=\"chem\">y = a f(b(x - h)) + k</span>—in the correct order and track key coordinates.": "按正確順序應用平移、反射與垂直／水平伸縮——包括複合變換 <span class=\"chem\">y = a f(b(x - h)) + k</span>——並追蹤關鍵點坐標。",

    // What you need to be able to do > checklist > Additional HL > span
    "Use the Remainder Theorem (<span class=\"chem\">P(b/a)</span>) and Factor Theorem (<span class=\"chem\">P(k) = 0</span>) to factorise polynomials and find unknown coefficients.": "運用餘式定理（<span class=\"chem\">P(b/a)</span>）與因式定理（<span class=\"chem\">P(k) = 0</span>）把多項式因式分解並求未知係數。",

    // What you need to be able to do > checklist > Additional HL > span
    "Use Vieta's formulas for the sum and product of polynomial roots to evaluate symmetric expressions like <span class=\"chem\">alpha^2 + beta^2</span> without solving for individual roots.": "運用韋達定理（根與係數關係）中的根之和與根之積，在不求出個別根的情況下計算如 <span class=\"chem\">alpha^2 + beta^2</span> 等對稱式。",

    // What you need to be able to do > checklist > Additional HL > span
    "Sketch rational functions <span class=\"chem\">(ax + b)/(cx^2 + dx + e)</span> and <span class=\"chem\">(ax^2 + bx + c)/(dx + e)</span>, finding vertical, horizontal, and oblique asymptotes via polynomial division.": "描繪有理函數 <span class=\"chem\">(ax + b)/(cx^2 + dx + e)</span> 與 <span class=\"chem\">(ax^2 + bx + c)/(dx + e)</span> 的圖像，並透過多項式除法求垂直、水平及斜漸近線。",

    // What you need to be able to do > checklist > Additional HL > span
    "Test for even (<span class=\"chem\">f(-x) = f(x)</span>), odd (<span class=\"chem\">f(-x) = -f(x)</span>), and self-inverse (<span class=\"chem\">f(f(x)) = x</span>) functions, and restrict a domain at a turning point so <span class=\"chem\">f^{-1}</span> exists.": "檢驗偶函數（<span class=\"chem\">f(-x) = f(x)</span>）、奇函數（<span class=\"chem\">f(-x) = -f(x)</span>）及自反函數（<span class=\"chem\">f(f(x)) = x</span>），並在極值點處限制定義域使 <span class=\"chem\">f^{-1}</span> 存在。",

    // What you need to be able to do > checklist > Additional HL > span
    "Sketch <span class=\"chem\">y = |f(x)|</span>, <span class=\"chem\">y = f(|x|)</span>, <span class=\"chem\">y = 1/f(x)</span>, and <span class=\"chem\">y = [f(x)]^2</span>, and solve polynomial, rational, and modulus inequalities analytically and graphically.": "描繪 <span class=\"chem\">y = |f(x)|</span>、<span class=\"chem\">y = f(|x|)</span>、<span class=\"chem\">y = 1/f(x)</span> 與 <span class=\"chem\">y = [f(x)]^2</span> 的圖像，並以解析與圖解法解多項式、有理及絕對值不等式。",

    // Question decoder: spotting transformation, polynomial &amp;  > data-toc attribute
    "Question decoder": "題型解碼",

    // Question decoder: spotting transformation, polynomial &amp;  > h2
    "Question decoder: spotting transformation, polynomial &amp; inequality cues": "題型解碼：辨識圖像變換、多項式與不等式提示",

    // Question decoder: spotting transformation, polynomial &amp;  > p
    "Exam questions in Topic 2.3 reward students who spot the algebraic shortcut immediately—especially when the question forbids finding roots explicitly or hides an asymptote inside an improper fraction.": "課題 2.3 的考題特別獎賞能即時看穿代數捷徑的同學——尤其是當題目禁止直接求根，或把漸近線藏在假分式之中。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > caption
    "Question decoder — Transformations, polynomials, rational functions &amp; modulus": "題型解碼 — 圖像變換、多項式、有理函數與絕對值",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "What the exam question says": "題目中的常見字眼",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "What it means (formula &amp; setup)": "實際含義（公式與列式）",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1（不可用計算機）與 Paper 2（可用 GDC）策略",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "“Describe the sequence of transformations from <span class=\"chem\">f(x)</span> to <span class=\"chem\">a f(bx + c) + d</span>”": "「描述由 <span class=\"chem\">f(x)</span> 變換至 <span class=\"chem\">a f(bx + c) + d</span> 的變換序列」",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Factor inside <span class=\"chem\">f</span> first: <span class=\"chem\">a f(b(x + c/b)) + d</span>. Horizontal stretch by <span class=\"chem\">1/b</span> <strong>then</strong> shift by <span class=\"chem\">-c/b</span>; vertical stretch by <span class=\"chem\">a</span> <strong>then</strong> shift by <span class=\"chem\">d</span>.": "先在 <span class=\"chem\">f</span> 內抽出公因數：<span class=\"chem\">a f(b(x + c/b)) + d</span>。先水平伸縮 <span class=\"chem\">1/b</span> 倍<strong>然後</strong>平移 <span class=\"chem\">-c/b</span>；先垂直伸縮 <span class=\"chem\">a</span> 倍<strong>然後</strong>平移 <span class=\"chem\">d</span>。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Check any point <span class=\"chem\">(x_0, y_0)</span> using coordinate tracking: <span class=\"chem\">x_{new} = (x_0 - c)/b</span> and <span class=\"chem\">y_{new} = a y_0 + d</span>.": "用坐標追蹤法驗算任意點 <span class=\"chem\">(x_0, y_0)</span>：<span class=\"chem\">x_{new} = (x_0 - c)/b</span> 及 <span class=\"chem\">y_{new} = a y_0 + d</span>。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "“<span class=\"chem\">P(x)</span> is divisible by <span class=\"chem\">(x - k)</span>” / “<span class=\"chem\">(x - k)</span> is a factor of <span class=\"chem\">P(x)</span>”": "「<span class=\"chem\">P(x)</span> 可被 <span class=\"chem\">(x - k)</span> 整除」／「<span class=\"chem\">(x - k)</span> 是 <span class=\"chem\">P(x)</span> 的因式」",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Apply the <strong>Factor Theorem</strong>: set <strong><span class=\"chem\">P(k) = 0</span></strong>.": "應用<strong>因式定理</strong>：設 <strong><span class=\"chem\">P(k) = 0</span></strong>。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Substitute <span class=\"chem\">x = k</span> directly into <span class=\"chem\">P(x)</span>—much faster than polynomial long division.": "直接把 <span class=\"chem\">x = k</span> 代入 <span class=\"chem\">P(x)</span>——比多項式長除法快得多。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "“Find the remainder when <span class=\"chem\">P(x)</span> is divided by <span class=\"chem\">(ax - b)</span>”": "「求 <span class=\"chem\">P(x)</span> 除以 <span class=\"chem\">(ax - b)</span> 的餘數」",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Apply the <strong>Remainder Theorem</strong>: remainder is <strong><span class=\"chem\">P(b/a)</span></strong>.": "應用<strong>餘式定理</strong>：餘數為 <strong><span class=\"chem\">P(b/a)</span></strong>。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "If divided by a quadratic <span class=\"chem\">(x - p)(x - q)</span>, write <span class=\"chem\">P(x) = Q(x)(x - p)(x - q) + mx + c</span> and plug in <span class=\"chem\">x = p</span> and <span class=\"chem\">x = q</span>.": "若除以二次式 <span class=\"chem\">(x - p)(x - q)</span>，寫成 <span class=\"chem\">P(x) = Q(x)(x - p)(x - q) + mx + c</span> 再代入 <span class=\"chem\">x = p</span> 與 <span class=\"chem\">x = q</span>。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "“Find <span class=\"chem\">alpha^2 + beta^2</span> (or <span class=\"chem\">1/alpha + 1/beta</span>) without finding the roots”": "「在不求根的情況下求 <span class=\"chem\">alpha^2 + beta^2</span>（或 <span class=\"chem\">1/alpha + 1/beta</span>）」",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Use <strong>Vieta's formulas</strong> for <span class=\"chem\">alpha + beta = -b/a</span> and <span class=\"chem\">alpha beta = c/a</span>, then rewrite <span class=\"chem\">alpha^2 + beta^2 = (alpha + beta)^2 - 2 alpha beta</span>.": "利用<strong>韋達定理</strong>求 <span class=\"chem\">alpha + beta = -b/a</span> 與 <span class=\"chem\">alpha beta = c/a</span>，再改寫 <span class=\"chem\">alpha^2 + beta^2 = (alpha + beta)^2 - 2 alpha beta</span>。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "For cubics, use <span class=\"chem\">sum alpha = -a_2/a_3</span>, <span class=\"chem\">sum alpha beta = a_1/a_3</span>, <span class=\"chem\">alpha beta gamma = -a_0/a_3</span>.": "對三次方程，使用 <span class=\"chem\">sum alpha = -a_2/a_3</span>、<span class=\"chem\">sum alpha beta = a_1/a_3</span>、<span class=\"chem\">alpha beta gamma = -a_0/a_3</span>。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "“Find the equation of the oblique asymptote of <span class=\"chem\">(ax^2 + bx + c)/(dx + e)</span>”": "「求 <span class=\"chem\">(ax^2 + bx + c)/(dx + e)</span> 的斜漸近線方程」",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Divide numerator by denominator: <span class=\"chem\">f(x) = mx + k + R/(dx + e)</span>. As <span class=\"chem\">x -&gt; +-infty</span>, remainder <span class=\"chem\">-&gt; 0</span>.": "分子除以分母：<span class=\"chem\">f(x) = mx + k + R/(dx + e)</span>。當 <span class=\"chem\">x -&gt; +-infty</span> 時，餘項 <span class=\"chem\">-&gt; 0</span>。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "The oblique asymptote is the linear quotient <strong><span class=\"chem\">y = mx + k</span></strong> (must be written as <span class=\"chem\">y = …</span>).": "斜漸近線為一次商式 <strong><span class=\"chem\">y = mx + k</span></strong>（必須寫成 <span class=\"chem\">y = …</span>）。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "“Find the largest domain containing <span class=\"chem\">x = a</span> for which <span class=\"chem\">f^{-1}</span> exists”": "「求包含 <span class=\"chem\">x = a</span> 且使 <span class=\"chem\">f^{-1}</span> 存在的最大定義域」",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "<span class=\"chem\">f</span> must be <strong>one-to-one</strong>: cut the domain at the turning point where <strong><span class=\"chem\">f'(x) = 0</span></strong> (or vertex).": "<span class=\"chem\">f</span> 必須為<strong>一對一</strong>：在 <strong><span class=\"chem\">f'(x) = 0</span></strong> 的極值點（或頂點）處截斷定義域。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "On Paper 2, find the local max/min on the GDC; pick the branch around <span class=\"chem\">x = a</span> up to the turning point.": "在 Paper 2 上用 GDC 找出局部極大／極小值；選取包含 <span class=\"chem\">x = a</span> 並延伸至極值點的分支。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "“Sketch <span class=\"chem\">|f(x)|</span> vs <span class=\"chem\">f(|x|)</span> vs <span class=\"chem\">1/f(x)</span>”": "「描繪 <span class=\"chem\">|f(x)|</span>、<span class=\"chem\">f(|x|)</span> 與 <span class=\"chem\">1/f(x)</span> 的略圖」",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "<span class=\"chem\">|f(x)|</span>: reflect <span class=\"chem\">y &lt; 0</span> up. <span class=\"chem\">f(|x|)</span>: copy <span class=\"chem\">x &gt;= 0</span> to <span class=\"chem\">x &lt; 0</span>. <span class=\"chem\">1/f(x)</span>: roots <span class=\"chem\">-&gt;</span> VAs, <span class=\"chem\">y = +-1</span> invariant.": "<span class=\"chem\">|f(x)|</span>：把 <span class=\"chem\">y &lt; 0</span> 向上反射。<span class=\"chem\">f(|x|)</span>：把 <span class=\"chem\">x &gt;= 0</span> 複製到 <span class=\"chem\">x &lt; 0</span>。<span class=\"chem\">1/f(x)</span>：根 <span class=\"chem\">-&gt;</span> 垂直漸近線，<span class=\"chem\">y = +-1</span> 不變。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Always label <span class=\"chem\">x</span>-intercepts, cusps, asymptotes, and reciprocal extrema <span class=\"chem\">(a, 1/M)</span>.": "務必標註 <span class=\"chem\">x</span> 軸截距、尖點、漸近線與倒數極值 <span class=\"chem\">(a, 1/M)</span>。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "“Solve <span class=\"chem\">(ax + b)/(cx + d) &gt;= k</span>” or “<span class=\"chem\">|2x - 1| &lt; |x + 3|</span>”": "「解 <span class=\"chem\">(ax + b)/(cx + d) &gt;= k</span>」或「<span class=\"chem\">|2x - 1| &lt; |x + 3|</span>」",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Rational: subtract <span class=\"chem\">k</span> to one side, combine into one fraction, use a sign diagram. Two moduli: square both sides.": "有理不等式：移 <span class=\"chem\">k</span> 至同邊、通分為單一分式、用正負號圖。雙絕對值：兩邊平方。",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "<strong>Never cross-multiply</strong> by <span class=\"chem\">(cx + d)</span>! On Paper 2, check your intervals against a GDC plot.": "<strong>切勿乘以</strong> <span class=\"chem\">(cx + d)</span>！在 Paper 2 上，用 GDC 圖像核對你的區間。",

    // Graph transformations and composite order > data-toc attribute
    "Transformations": "圖像變換",

    // Graph transformations and composite order > h2
    "Graph transformations and composite order": "圖像變換與複合變換順序",

    // Graph transformations and composite order > p
    "Every transformation of <span class=\"chem\">y = f(x)</span> belongs to one of two independent worlds: <strong>vertical</strong> changes (outside <span class=\"chem\">f</span>, affecting <span class=\"chem\">y</span> directly) and <strong>horizontal</strong> changes (inside <span class=\"chem\">f</span>, affecting <span class=\"chem\">x</span> in the opposite direction).": "<span class=\"chem\">y = f(x)</span> 的每種變換都屬於兩個獨立系統之一：<strong>垂直</strong>變化（在 <span class=\"chem\">f</span> 之外，直接影響 <span class=\"chem\">y</span>）與<strong>水平</strong>變化（在 <span class=\"chem\">f</span> 之內，以相反方向影響 <span class=\"chem\">x</span>）。",

    // Graph transformations and composite order > table > caption
    "Core graph transformations (SL 2.11)": "核心圖像變換（SL 2.11）",

    // Graph transformations and composite order > table > th
    "Equation": "方程",

    // Graph transformations and composite order > table > th
    "Geometric transformation": "幾何變換",

    // Graph transformations and composite order > table > th
    "Effect on point <span class=\"chem\">(x_0, y_0)</span>": "對點 <span class=\"chem\">(x_0, y_0)</span> 的影響",

    // Graph transformations and composite order > table > td
    "Vertical translation by vector <span class=\"chem\">(0, k)</span>": "沿向量 <span class=\"chem\">(0, k)</span> 垂直平移",

    // Graph transformations and composite order > table > td
    "Horizontal translation by vector <span class=\"chem\">(h, 0)</span> (<span class=\"chem\">h &gt; 0</span> moves right)": "沿向量 <span class=\"chem\">(h, 0)</span> 水平平移（<span class=\"chem\">h &gt; 0</span> 向右移）",

    // Graph transformations and composite order > table > td
    "Reflection in the <span class=\"chem\">x</span>-axis": "沿 <span class=\"chem\">x</span> 軸反射",

    // Graph transformations and composite order > table > td
    "Reflection in the <span class=\"chem\">y</span>-axis": "沿 <span class=\"chem\">y</span> 軸反射",

    // Graph transformations and composite order > table > td
    "Vertical stretch of scale factor <span class=\"chem\">|a|</span> (plus <span class=\"chem\">x</span>-axis reflection if <span class=\"chem\">a &lt; 0</span>)": "垂直伸縮比例因子 <span class=\"chem\">|a|</span>（若 <span class=\"chem\">a &lt; 0</span> 並沿 <span class=\"chem\">x</span> 軸反射）",

    // Graph transformations and composite order > table > th
    "<span class=\"chem\">y = f(bx)</span>": "<span class=\"chem\">y = f(bx)</span>",

    // Graph transformations and composite order > table > td
    "Horizontal stretch of scale factor <span class=\"chem\">1/|b|</span> (plus <span class=\"chem\">y</span>-axis reflection if <span class=\"chem\">b &lt; 0</span>)": "水平伸縮比例因子 <span class=\"chem\">1/|b|</span>（若 <span class=\"chem\">b &lt; 0</span> 並沿 <span class=\"chem\">y</span> 軸反射）",

    // Graph transformations and composite order > h3
    "Composite transformations: why order matters": "複合變換：為何順序至關重要",

    // Graph transformations and composite order > p
    "When both a stretch and a translation act in the same direction—for example, <span class=\"chem\">y = a f(bx + c) + d</span>—the safest method is to <strong>factor <span class=\"chem\">b</span> out inside the bracket first</strong>:": "當伸縮與平移同時作用於同一方向時——例如 <span class=\"chem\">y = a f(bx + c) + d</span>——最穩妥的做法是<strong>先在括號內抽出 <span class=\"chem\">b</span></strong>：",

    // Graph transformations and composite order > equation > dt
    "Factored horizontal order": "已抽公因數的水平順序",

    // Graph transformations and composite order > equation > dd
    "1. Horizontal stretch by scale factor <span class=\"chem\">1/|b|</span> (and reflect in <span class=\"chem\">y</span>-axis if <span class=\"chem\">b &lt; 0</span>), <strong>then</strong> 2. Horizontal shift by <span class=\"chem\">h</span>.": "1. 水平伸縮，比例因子為 <span class=\"chem\">1/|b|</span>（若 <span class=\"chem\">b &lt; 0</span> 則沿 <span class=\"chem\">y</span> 軸反射），<strong>然後</strong> 2. 水平平移 <span class=\"chem\">h</span>。",

    // Graph transformations and composite order > equation > dt
    "Vertical order": "垂直順序",

    // Graph transformations and composite order > equation > dd
    "1. Vertical stretch by scale factor <span class=\"chem\">|a|</span> (and reflect in <span class=\"chem\">x</span>-axis if <span class=\"chem\">a &lt; 0</span>), <strong>then</strong> 2. Vertical shift by <span class=\"chem\">k</span>.": "1. 垂直伸縮，比例因子為 <span class=\"chem\">|a|</span>（若 <span class=\"chem\">a &lt; 0</span> 則沿 <span class=\"chem\">x</span> 軸反射），<strong>然後</strong> 2. 垂直平移 <span class=\"chem\">k</span>。",

    // Graph transformations and composite order > equation > dt
    "Unfactored <span class=\"chem\">f(bx + c)</span>": "未抽公因數的 <span class=\"chem\">f(bx + c)</span>",

    // Graph transformations and composite order > equation > dd
    "If you do <em>not</em> factor out <span class=\"chem\">b</span>, you must shift by <span class=\"chem\">-c</span> <strong>first</strong>, then stretch by <span class=\"chem\">1/b</span> (since <span class=\"chem\">x_{new} = (x_0 - c)/b</span>).": "若你<em>沒有</em>抽出 <span class=\"chem\">b</span>，你必須<strong>先</strong>平移 <span class=\"chem\">-c</span>，再伸縮 <span class=\"chem\">1/b</span> 倍（因為 <span class=\"chem\">x_{new} = (x_0 - c)/b</span>）。",

    // Graph transformations and composite order > common mistake > p
    "<strong>Common mistake — Wrong horizontal shift in <span class=\"chem\">f(2x - 6)</span>:</strong> Students often see <span class=\"chem\">- 6</span> and state a translation of <span class=\"chem\">6</span> units right after stretching by <span class=\"chem\">1/2</span>. Always factor first: <span class=\"chem\">f(2x - 6) = f(2(x - 3))</span>, so the translation is <strong><span class=\"chem\">3</span> units right</strong>, not <span class=\"chem\">6</span>!": "<strong>常見錯誤 — 搞錯 <span class=\"chem\">f(2x - 6)</span> 的水平平移量：</strong>同學常看到 <span class=\"chem\">- 6</span> 便以為伸縮 <span class=\"chem\">1/2</span> 後是向右平移 <span class=\"chem\">6</span> 單位。務必先抽出公因數：<span class=\"chem\">f(2x - 6) = f(2(x - 3))</span>，所以平移是<strong>向右 <span class=\"chem\">3</span> 單位</strong>，而非 <span class=\"chem\">6</span>！",

    // Graph transformations and composite order > widget > data-title attribute
    "Interactive graph transformation studio: y = a f(b(x − h)) + k": "互動圖像變換工作室：y = a f(b(x − h)) + k",

    // Graph transformations and composite order > widget > figcaption
    "Adjust <span class=\"chem\">a, b, h, k</span> to see how the parent curve <span class=\"chem\">f(x)</span> (dashed) transforms into <span class=\"chem\">g(x) = a f(b(x - h)) + k</span> (solid) and track how the key point <span class=\"chem\">P(x_0, y_0)</span> moves to <span class=\"chem\">P'(x_0/b + h, a y_0 + k)</span>.": "調校 <span class=\"chem\">a, b, h, k</span>，觀察母曲線 <span class=\"chem\">f(x)</span>（虛線）如何變換為 <span class=\"chem\">g(x) = a f(b(x - h)) + k</span>（實線），並追蹤關鍵點 <span class=\"chem\">P(x_0, y_0)</span> 如何移動至 <span class=\"chem\">P'(x_0/b + h, a y_0 + k)</span>。",

    // Graph transformations and composite order > worked example > h3
    "Finding the image of a point and describing composite transformations": "求點的像及描述複合變換",

    // Graph transformations and composite order > worked example > p
    "The graph of <span class=\"chem\">y = f(x)</span> has a local maximum at <span class=\"chem\">P(-4, 6)</span>. Let <span class=\"chem\">g(x) = -2 f(3x + 6) + 1</span>.<br> (a) Describe a sequence of transformations that maps <span class=\"chem\">y = f(x)</span> onto <span class=\"chem\">y = g(x)</span>. <strong>[4 marks]</strong><br> (b) Find the coordinates of the image of <span class=\"chem\">P</span> on <span class=\"chem\">y = g(x)</span>. <strong>[2 marks]</strong>": "<span class=\"chem\">y = f(x)</span> 的圖像在 <span class=\"chem\">P(-4, 6)</span> 處有一個局部極大值。設 <span class=\"chem\">g(x) = -2 f(3x + 6) + 1</span>。<br> (a) 描述 (Describe) 把 <span class=\"chem\">y = f(x)</span> 映射至 <span class=\"chem\">y = g(x)</span> 的一連串變換。<strong>[4 marks]</strong><br> (b) 求 (Find) <span class=\"chem\">P</span> 在 <span class=\"chem\">y = g(x)</span> 上的像的坐標。<strong>[2 marks]</strong>",

    // Graph transformations and composite order > worked example > data-title attribute
    "Factor out 3 inside the argument of f": "在 f 的括號內抽出公因數 3",

    // Graph transformations and composite order > worked example > p
    "Factoring b = 3 reveals the true horizontal translation h = −2 once the stretch is applied first.": "抽出 b = 3 顯示了先伸縮後的真正水平平移量 h = −2。",

    // Graph transformations and composite order > worked example > data-title attribute
    "List the horizontal and vertical transformations in valid order": "按正確順序列出水平與垂直變換",

    // Graph transformations and composite order > worked example > p
    "In factored form, stretches/reflections come before translations in each direction.": "在已抽公因數的形式中，每個方向上的伸縮／反射都在平移之前進行。",

    // Graph transformations and composite order > worked example > maths line
    "1. Horizontal stretch of scale factor <span class=\"frac\"><span>1</span><span>3</span></span> (parallel to the <i>x</i>-axis) &nbsp; <b>[A1]</b>": "1. 比例因子為 <span class=\"frac\"><span>1</span><span>3</span></span> 的水平伸縮（平行於 <i>x</i> 軸）&nbsp; <b>[A1]</b>",

    // Graph transformations and composite order > worked example > maths line
    "2. Translation of 2 units left: vector <span class=\"chem\">(-2, 0)</span> &nbsp; <b>[A1]</b>": "2. 向左平移 2 單位：向量 <span class=\"chem\">(-2, 0)</span> &nbsp; <b>[A1]</b>",

    // Graph transformations and composite order > worked example > maths line
    "3. Vertical stretch of scale factor 2 and reflection in the <i>x</i>-axis, followed by translation 1 unit up: vector <span class=\"chem\">(0, 1)</span> &nbsp; <b>[A1]</b>": "3. 比例因子為 2 的垂直伸縮並沿 <i>x</i> 軸反射，再向上平移 1 單位：向量 <span class=\"chem\">(0, 1)</span> &nbsp; <b>[A1]</b>",

    // Graph transformations and composite order > worked example > data-title attribute
    "Track the coordinates of P(−4, 6) using x_new = x₀/b + h and y_new = a y₀ + k": "運用 x_new = x₀/b + h 與 y_new = a y₀ + k 追蹤 P(−4, 6) 的坐標",

    // Graph transformations and composite order > worked example > p
    "Check both by applying the steps and by solving 3x_new + 6 = −4.": "同時以逐步變換及解 3x_new + 6 = −4 來驗算。",

    // Graph transformations and composite order > worked example > maths line
    "<i>y</i><sub>new</sub> = −2(6) + 1 = <b>−11</b> &nbsp; (now a local minimum!) &nbsp; <b>[A1]</b>": "<i>y</i><sub>new</sub> = −2(6) + 1 = <b>−11</b> &nbsp;（現在是局部極小值！）&nbsp; <b>[A1]</b>",

    // Graph transformations and composite order > worked example > p
    "(a) H-stretch <span class=\"chem\">1/3</span>, shift <span class=\"chem\">(-2, 0)</span>, V-stretch <span class=\"chem\">2</span> + <span class=\"chem\">x</span>-axis reflection, shift <span class=\"chem\">(0, 1)</span>; (b) <span class=\"chem\">(-10/3, -11)</span>": "(a) 水平伸縮 <span class=\"chem\">1/3</span>、平移 <span class=\"chem\">(-2, 0)</span>、垂直伸縮 <span class=\"chem\">2</span> + 沿 <span class=\"chem\">x</span> 軸反射、平移 <span class=\"chem\">(0, 1)</span>；(b) <span class=\"chem\">(-10/3, -11)</span>",

    // Graph transformations and composite order > try it > p
    "The point <span class=\"chem\">(6, -4)</span> lies on the graph of <span class=\"chem\">y = f(x)</span>. Find the <span class=\"chem\">y</span>-coordinate of its image on the graph of <span class=\"chem\">y = -3 f(2x - 4) - 1</span>.": "點 <span class=\"chem\">(6, -4)</span> 位於 <span class=\"chem\">y = f(x)</span> 的圖像上。求 (Find) 它在 <span class=\"chem\">y = -3 f(2x - 4) - 1</span> 圖像上的像的 <span class=\"chem\">y</span> 坐標。",

    // Graph transformations and composite order > try it > li
    "Remember that only the outside parameters <span class=\"chem\">a = -3</span> and <span class=\"chem\">k = -1</span> affect the <span class=\"chem\">y</span>-coordinate.": "緊記只有外部參數 <span class=\"chem\">a = -3</span> 與 <span class=\"chem\">k = -1</span> 會影響 <span class=\"chem\">y</span> 坐標。",

    // Graph transformations and composite order > try it > li
    "Compute <span class=\"chem\">y_{new} = -3(-4) - 1</span>.": "計算 <span class=\"chem\">y_{new} = -3(-4) - 1</span>。",

    // Graph transformations and composite order > try it > maths line
    "<i>y</i><sub>new</sub> = −3(−4) − 1 = 12 − 1 = <b>11</b> (and <i>x</i><sub>new</sub> = 6/2 + 2 = 5, giving (5, 11)).": "<i>y</i><sub>new</sub> = −3(−4) − 1 = 12 − 1 = <b>11</b>（而 <i>x</i><sub>new</sub> = 6/2 + 2 = 5，即 (5, 11)）。",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > Additional HL > data-toc attribute
    "Polynomials & Vieta": "多項式與韋達定理",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > Additional HL > h2
    "Polynomial theorems, root multiplicity &amp; Vieta's formulas": "多項式定理、根的重數與韋達定理",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > Additional HL > p
    "When a polynomial <span class=\"chem\">P(x) = a_n x^n + a_{n-1} x^{n-1} + ... + a_1 x + a_0</span> (<span class=\"chem\">a_n != 0</span>) is divided by a linear divisor <span class=\"chem\">(ax - b)</span>, we can write <span class=\"chem\">P(x) = Q(x)(ax - b) + R</span>. Substituting <span class=\"chem\">x = b/a</span> eliminates <span class=\"chem\">Q(x)</span> immediately:": "當多項式 <span class=\"chem\">P(x) = a_n x^n + a_{n-1} x^{n-1} + ... + a_1 x + a_0</span>（<span class=\"chem\">a_n != 0</span>）除以一次除式 <span class=\"chem\">(ax - b)</span> 時，可寫成 <span class=\"chem\">P(x) = Q(x)(ax - b) + R</span>。代入 <span class=\"chem\">x = b/a</span> 即可立即消去 <span class=\"chem\">Q(x)</span>：",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > Additional HL > li
    "<strong>Remainder Theorem</strong>: When <span class=\"chem\">P(x)</span> is divided by <span class=\"chem\">(ax - b)</span>, the remainder is <span class=\"chem\">P(b/a)</span>. In particular, dividing by <span class=\"chem\">(x - k)</span> leaves remainder <span class=\"chem\">P(k)</span>.": "<strong>餘式定理</strong>：當 <span class=\"chem\">P(x)</span> 除以 <span class=\"chem\">(ax - b)</span> 時，餘數為 <span class=\"chem\">P(b/a)</span>。特別地，除以 <span class=\"chem\">(x - k)</span> 的餘數為 <span class=\"chem\">P(k)</span>。",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > Additional HL > li
    "<strong>Factor Theorem</strong>: <span class=\"chem\">(ax - b)</span> is a factor of <span class=\"chem\">P(x)</span> if and only if <span class=\"chem\">P(b/a) = 0</span>.": "<strong>因式定理</strong>：<span class=\"chem\">(ax - b)</span> 是 <span class=\"chem\">P(x)</span> 的因式，當且僅當 <span class=\"chem\">P(b/a) = 0</span>。",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > Additional HL > li
    "<strong>Root multiplicity &amp; graph behaviour</strong>: At a single root <span class=\"chem\">(x - r)^1</span>, the graph <em>crosses</em> the <span class=\"chem\">x</span>-axis; at a double root <span class=\"chem\">(x - r)^2</span>, it is <em>tangent</em> to the <span class=\"chem\">x</span>-axis (bounces); at a triple root <span class=\"chem\">(x - r)^3</span>, it crosses with a <em>horizontal point of inflexion</em>.": "<strong>根的重數與圖像形態</strong>：在單根 <span class=\"chem\">(x - r)^1</span> 處，圖像<em>穿過</em> <span class=\"chem\">x</span> 軸；在二重根 <span class=\"chem\">(x - r)^2</span> 處，圖像與 <span class=\"chem\">x</span> 軸<em>相切</em>（反彈）；在三重根 <span class=\"chem\">(x - r)^3</span> 處，圖像以<em>水平拐點</em>穿過。",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > formula booklet note > Additional HL > p
    "<strong>In your Formula Booklet (Section 2.12):</strong> For a polynomial equation <span class=\"chem\">sum_{r=0}^n a_r x^r = 0</span> of degree <span class=\"chem\">n</span>, the <strong>sum of roots</strong> is <span class=\"chem\">-a_{n-1} / a_n</span> and the <strong>product of roots</strong> is <span class=\"chem\">(-1)^n a_0 / a_n</span>.": "<strong>公式手冊（Section 2.12）：</strong>對於 <span class=\"chem\">n</span> 次多項式方程 <span class=\"chem\">sum_{r=0}^n a_r x^r = 0</span>，<strong>根之和</strong>為 <span class=\"chem\">-a_{n-1} / a_n</span>，而<strong>根之積</strong>為 <span class=\"chem\">(-1)^n a_0 / a_n</span>。",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > equation > Additional HL > dt
    "Squared sum": "平方和",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > equation > Additional HL > dd
    "<span class=\"chem\">alpha^2 + beta^2 + gamma^2 = (alpha + beta + gamma)^2 - 2(alpha beta + beta gamma + gamma alpha)</span>": "<span class=\"chem\">alpha^2 + beta^2 + gamma^2 = (alpha + beta + gamma)^2 - 2(alpha beta + beta gamma + gamma alpha)</span>",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > equation > Additional HL > dt
    "Reciprocal sum": "倒數和",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > equation > Additional HL > dd
    "<span class=\"chem\">1/alpha + 1/beta + 1/gamma = (alpha beta + beta gamma + gamma alpha) / (alpha beta gamma)</span>": "<span class=\"chem\">1/alpha + 1/beta + 1/gamma = (alpha beta + beta gamma + gamma alpha) / (alpha beta gamma)</span>",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > common mistake > Additional HL > p
    "<strong>Common mistake — Sign of the product of roots:</strong> The formula has <span class=\"chem\">(-1)^n a_0 / a_n</span>. For an <strong>even</strong> degree (quadratic, quartic), the product is <span class=\"chem\">+a_0 / a_n</span>. For an <strong>odd</strong> degree (cubic), it is <span class=\"chem\">-a_0 / a_n</span>. Always alternate signs <span class=\"chem\">-, +, -, +, ...</span> starting from the <span class=\"chem\">x^{n-1}</span> term—and watch for missing terms with coefficient <span class=\"chem\">0</span>!": "<strong>常見錯誤 — 根之積的正負號：</strong>公式為 <span class=\"chem\">(-1)^n a_0 / a_n</span>。對於<strong>偶數</strong>次方程（二次、四次），根之積為 <span class=\"chem\">+a_0 / a_n</span>；對於<strong>奇數</strong>次方程（三次），則為 <span class=\"chem\">-a_0 / a_n</span>。務必從 <span class=\"chem\">x^{n-1}</span> 項開始交替使用正負號 <span class=\"chem\">-, +, -, +, ...</span>——並小心係數為 <span class=\"chem\">0</span> 的缺項！",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > h3
    "Using Vieta's formulas and the Remainder Theorem together": "結合韋達定理與餘式定理",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > p
    "The cubic equation <span class=\"chem\">2x^3 - 5x^2 + kx - 6 = 0</span> has roots <span class=\"chem\">alpha, beta, gamma</span>.<br> (a) Given that <span class=\"chem\">(x - 2)</span> is a factor of <span class=\"chem\">P(x) = 2x^3 - 5x^2 + kx - 6</span>, find <span class=\"chem\">k</span>. <strong>[2 marks]</strong><br> (b) Hence find the exact value of <span class=\"chem\">alpha^2 + beta^2 + gamma^2</span> without solving for all three roots. <strong>[4 marks]</strong>": "三次方程 <span class=\"chem\">2x^3 - 5x^2 + kx - 6 = 0</span> 的根為 <span class=\"chem\">alpha, beta, gamma</span>。<br> (a) 已知 <span class=\"chem\">(x - 2)</span> 是 <span class=\"chem\">P(x) = 2x^3 - 5x^2 + kx - 6</span> 的因式，求 (find) <span class=\"chem\">k</span>。<strong>[2 marks]</strong><br> (b) 由此在不求出三個根的情況下，求 (Hence find) <span class=\"chem\">alpha^2 + beta^2 + gamma^2</span> 的準確值。<strong>[4 marks]</strong>",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > data-title attribute
    "Apply the Factor Theorem P(2) = 0 to find k": "應用因式定理 P(2) = 0 求 k",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > p
    "Since (x − 2) is a factor, substituting x = 2 must give 0.": "因為 (x − 2) 是因式，代入 x = 2 必得 0。",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > data-title attribute
    "Write Vieta's sum and pairwise-product relations for the cubic": "寫出三次方程的韋達根之和與兩兩乘積之和關係",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > p
    "Alternate signs (−, +, −) with leading coefficient a₃ = 2.": "以首項係數 a₃ = 2 配合交替正負號 (−, +, −)。",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > data-title attribute
    "Use the symmetric identity for α² + β² + γ²": "運用 α² + β² + γ² 的對稱恒等式",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > p
    "Expanding (α + β + γ)² isolates α² + β² + γ² plus twice the pairwise products. (With k = 5, P(x) = (x − 2)(2x² − x + 3) and the other two roots are complex conjugates, which is why the total 5/4 is less than 2² = 4.)": "展開 (α + β + γ)² 會分離出 α² + β² + γ² 及兩倍的兩兩乘積之和。（當 k = 5 時，P(x) = (x − 2)(2x² − x + 3)，另外兩個根是共軛複數，所以總和 5/4 小於 2² = 4。）",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > p
    "(a) <span class=\"chem\">k = 5</span>; (b) <span class=\"chem\">5/4</span> (or <span class=\"chem\">1.25</span>)": "(a) <span class=\"chem\">k = 5</span>；(b) <span class=\"chem\">5/4</span>（或 <span class=\"chem\">1.25</span>）",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > try it > Additional HL > p
    "The polynomial <span class=\"chem\">P(x) = x^3 + ax^2 - 7x + b</span> leaves a remainder of <span class=\"chem\">6</span> when divided by <span class=\"chem\">(x - 1)</span>. Find the value of <span class=\"chem\">a + b</span>.": "多項式 <span class=\"chem\">P(x) = x^3 + ax^2 - 7x + b</span> 除以 <span class=\"chem\">(x - 1)</span> 時餘數為 <span class=\"chem\">6</span>。求 (Find) <span class=\"chem\">a + b</span> 的值。",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > try it > Additional HL > li
    "By the Remainder Theorem, the remainder when <span class=\"chem\">P(x)</span> is divided by <span class=\"chem\">(x - 1)</span> is <span class=\"chem\">P(1)</span>.": "根據餘式定理，<span class=\"chem\">P(x)</span> 除以 <span class=\"chem\">(x - 1)</span> 的餘數為 <span class=\"chem\">P(1)</span>。",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > try it > Additional HL > li
    "Set <span class=\"chem\">P(1) = 1^3 + a(1)^2 - 7(1) + b = 6</span> and solve for <span class=\"chem\">a + b</span>.": "令 <span class=\"chem\">P(1) = 1^3 + a(1)^2 - 7(1) + b = 6</span> 並解出 <span class=\"chem\">a + b</span>。",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > not needed for IB > Additional HL > p
    "<strong>Not needed for IB:</strong> You do not need formal proofs of the Rational Root Theorem or Descartes' Rule of Signs. On Paper 1, any root needed to start factorising a cubic or quartic is either a small integer (<span class=\"chem\">+-1, +-2, +-3</span>) or guided by the question.": "<strong>IB 不要求的內容：</strong>你不需要有理根定理或笛卡兒符號法則的嚴格證明。在 Paper 1 中，因式分解三次或四次多項式所需的起始根要麼是細小整數（<span class=\"chem\">+-1, +-2, +-3</span>），要麼由題目引導給出。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > Additional HL > data-toc attribute
    "Rational & symmetry": "有理函數與對稱性",

    // Higher rational functions, oblique asymptotes &amp; symmetry > Additional HL > h2
    "Higher rational functions, oblique asymptotes &amp; symmetry": "高次有理函數、斜漸近線與對稱性",

    // Higher rational functions, oblique asymptotes &amp; symmetry > Additional HL > p
    "Beyond the linear-over-linear hyperbolas of SL 2.8, AHL 2.13 covers two richer rational families:": "除了 SL 2.8 的一次除一次雙曲線外，AHL 2.13 涵蓋兩類更豐富的有理函數族：",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > caption
    "AHL 2.13 rational function families and asymptotes": "AHL 2.13 有理函數族與漸近線",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > th
    "Family": "函數族",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > th
    "Vertical asymptotes (VA)": "垂直漸近線 (VA)",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > th
    "Horizontal / Oblique asymptote": "水平／斜漸近線",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > th
    "<span class=\"chem\">f(x) = (ax + b) / (cx^2 + dx + e)</span>": "<span class=\"chem\">f(x) = (ax + b) / (cx^2 + dx + e)</span>",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > td
    "Solve <span class=\"chem\">cx^2 + dx + e = 0</span> (0, 1, or 2 VAs; check if numerator is also 0 for a hole).": "解 <span class=\"chem\">cx^2 + dx + e = 0</span>（0、1 或 2 條垂直漸近線；若分子同時為 0 則為空心點）。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > td
    "Denominator has higher degree, so <strong>horizontal asymptote is always <span class=\"chem\">y = 0</span></strong>.": "分母次數較高，故<strong>水平漸近線恒為 <span class=\"chem\">y = 0</span></strong>。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > th
    "<span class=\"chem\">f(x) = (ax^2 + bx + c) / (dx + e)</span>": "<span class=\"chem\">f(x) = (ax^2 + bx + c) / (dx + e)</span>",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > td
    "Set <span class=\"chem\">dx + e = 0 =&gt; x = -e/d</span> (1 VA, unless <span class=\"chem\">(dx + e)</span> divides numerator).": "令 <span class=\"chem\">dx + e = 0 =&gt; x = -e/d</span>（1 條垂直漸近線，除非 <span class=\"chem\">(dx + e)</span> 整除分子）。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > td
    "Numerator degree is 1 higher: divide to get <span class=\"chem\">mx + k + R/(dx + e)</span>. <strong>Oblique asymptote <span class=\"chem\">y = mx + k</span></strong>.": "分子次數高 1 次：相除得 <span class=\"chem\">mx + k + R/(dx + e)</span>。<strong>斜漸近線 <span class=\"chem\">y = mx + k</span></strong>。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > Additional HL > h3
    "Even, odd, self-inverse &amp; domain restriction (AHL 2.14)": "偶函數、奇函數、自反函數與定義域限制（AHL 2.14）",

    // Higher rational functions, oblique asymptotes &amp; symmetry > Additional HL > li
    "<strong>Even function</strong>: <span class=\"chem\">f(-x) = f(x)</span> for all <span class=\"chem\">x</span> in the domain (symmetric about the <strong><span class=\"chem\">y</span>-axis</strong>; e.g., <span class=\"chem\">x^2, cos x, |x|</span>).": "<strong>偶函數</strong>：對定義域內所有 <span class=\"chem\">x</span> 皆有 <span class=\"chem\">f(-x) = f(x)</span>（關於 <strong><span class=\"chem\">y</span> 軸</strong>對稱；例如 <span class=\"chem\">x^2, cos x, |x|</span>）。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > Additional HL > li
    "<strong>Odd function</strong>: <span class=\"chem\">f(-x) = -f(x)</span> for all <span class=\"chem\">x</span> in the domain (rotational symmetry of order 2 about the <strong>origin</strong>; e.g., <span class=\"chem\">x^3, sin x, 1/x</span>).": "<strong>奇函數</strong>：對定義域內所有 <span class=\"chem\">x</span> 皆有 <span class=\"chem\">f(-x) = -f(x)</span>（關於<strong>原點</strong>作 2 階旋轉對稱；例如 <span class=\"chem\">x^3, sin x, 1/x</span>）。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > Additional HL > li
    "<strong>Self-inverse function</strong>: <span class=\"chem\">f(f(x)) = x</span>, meaning <span class=\"chem\">f^{-1}(x) = f(x)</span> and the graph is symmetric about <span class=\"chem\">y = x</span>.": "<strong>自反函數</strong>：<span class=\"chem\">f(f(x)) = x</span>，表示 <span class=\"chem\">f^{-1}(x) = f(x)</span> 且圖像關於 <span class=\"chem\">y = x</span> 對稱。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > Additional HL > li
    "<strong>Restricting a domain for <span class=\"chem\">f^{-1}</span></strong>: A function has an inverse if and only if it is <strong>one-to-one</strong> (passes the horizontal line test). For a many-to-one curve, cut the domain at its turning point(s) where <span class=\"chem\">f'(x) = 0</span>.": "<strong>為使 <span class=\"chem\">f^{-1}</span> 存在而限制定義域</strong>：函數有反函數，當且僅當它為<strong>一對一</strong>（通過水平線檢驗）。對於多對一曲線，須在 <span class=\"chem\">f'(x) = 0</span> 的極值點處截斷定義域。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > exam tip (shown in English + translation) > Additional HL > p
    "<strong>Exam tip — Finding the range of <span class=\"chem\">(ax^2 + bx + c)/(dx + e)</span> without calculus:</strong> Set <span class=\"chem\">y = f(x)</span>, clear the denominator to form a quadratic in <span class=\"chem\">x</span>, and require <strong><span class=\"chem\">Delta_x &gt;= 0</span></strong> (since <span class=\"chem\">x ∈ ℝ</span>). Solving the resulting inequality in <span class=\"chem\">y</span> gives the exact range!": "<strong>考試貼士 — 不用微積分求 <span class=\"chem\">(ax^2 + bx + c)/(dx + e)</span> 的值域：</strong>設 <span class=\"chem\">y = f(x)</span>，去分母整理成關於 <span class=\"chem\">x</span> 的二次方程，並要求 <strong><span class=\"chem\">Delta_x &gt;= 0</span></strong>（因 <span class=\"chem\">x ∈ ℝ</span>）。解出關於 <span class=\"chem\">y</span> 的不等式即可得準確值域！",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > h3
    "Finding an oblique asymptote and range of a quadratic-over-linear function": "求二次除一次有理函數的斜漸近線與值域",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > p
    "Consider <span class=\"chem\">f(x) = (2x^2 - 3x + 5)/(x - 2)</span> for <span class=\"chem\">x != 2</span>.<br> (a) Express <span class=\"chem\">f(x)</span> in the form <span class=\"chem\">mx + k + R/(x - 2)</span> and state the equation of the oblique asymptote. <strong>[3 marks]</strong><br> (b) Use the discriminant method to find the range of <span class=\"chem\">f</span>. <strong>[4 marks]</strong>": "考慮 <span class=\"chem\">f(x) = (2x^2 - 3x + 5)/(x - 2)</span>（<span class=\"chem\">x != 2</span>）。<br> (a) 把 <span class=\"chem\">f(x)</span> 表示為 (Express ... in the form) <span class=\"chem\">mx + k + R/(x - 2)</span>，並寫出 (state) 斜漸近線方程。<strong>[3 marks]</strong><br> (b) 利用判別式法求 (find) <span class=\"chem\">f</span> 的值域。<strong>[4 marks]</strong>",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > data-title attribute
    "Divide 2x² − 3x + 5 by (x − 2)": "用 (x − 2) 除 2x² − 3x + 5",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > p
    "Synthetic or polynomial long division separates the linear quotient from the decaying remainder.": "綜合除法或多項式長除法可把一次商式與趨向零的餘項分開。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > maths line
    "Oblique asymptote: <b><i>y</i> = 2<i>x</i> + 1</b> &nbsp; (as <i>x</i> → ±∞, 7/(<i>x</i> − 2) → 0) &nbsp; <b>[A1]</b>": "斜漸近線：<b><i>y</i> = 2<i>x</i> + 1</b> &nbsp;（當 <i>x</i> → ±∞，7/(<i>x</i> − 2) → 0）&nbsp; <b>[A1]</b>",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > data-title attribute
    "Rearrange y = f(x) into a quadratic in x": "把 y = f(x) 整理為關於 x 的二次方程",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > p
    "A value y lies in the range if and only if there is at least one real x producing it.": "數值 y 屬於值域，當且僅當至少存在一個實數 x 能產生它。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > data-title attribute
    "Set Δ_x ≥ 0 and solve for y": "設 Δ_x ≥ 0 並解出 y",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > p
    "Real x exists iff the discriminant in x is non-negative.": "實數 x 存在，當且僅當關於 x 的判別式非負。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > maths line
    "Roots: <i>y</i> = <span class=\"frac\"><span>10 ± √(100 + 124)</span><span>2</span></span> = 5 ± √56 = 5 ± 2√14": "根：<i>y</i> = <span class=\"frac\"><span>10 ± √(100 + 124)</span><span>2</span></span> = 5 ± √56 = 5 ± 2√14",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > maths line
    "Range: <b><i>y</i> ≤ 5 − 2√14</b> or <b><i>y</i> ≥ 5 + 2√14</b> &nbsp; <b>[A1]</b>": "值域：<b><i>y</i> ≤ 5 − 2√14</b> 或 <b><i>y</i> ≥ 5 + 2√14</b> &nbsp; <b>[A1]</b>",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > p
    "(a) <span class=\"chem\">y = 2x + 1</span>; (b) <span class=\"chem\">y &lt;= 5 - 2 sqrt(14)</span> or <span class=\"chem\">y &gt;= 5 + 2 sqrt(14)</span>": "(a) <span class=\"chem\">y = 2x + 1</span>；(b) <span class=\"chem\">y &lt;= 5 - 2 sqrt(14)</span> 或 <span class=\"chem\">y &gt;= 5 + 2 sqrt(14)</span>",

    // Higher rational functions, oblique asymptotes &amp; symmetry > try it > Additional HL > p
    "The rational function <span class=\"chem\">f(x) = (x^2 + 3x - 2)/(x + 4)</span> has an oblique asymptote <span class=\"chem\">y = x + k</span>. Find the exact value of <span class=\"chem\">k</span>.": "有理函數 <span class=\"chem\">f(x) = (x^2 + 3x - 2)/(x + 4)</span> 有一條斜漸近線 <span class=\"chem\">y = x + k</span>。求 (Find) <span class=\"chem\">k</span> 的準確值。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > try it > Additional HL > li
    "Divide <span class=\"chem\">x^2 + 3x - 2</span> by <span class=\"chem\">(x + 4)</span>: start with <span class=\"chem\">x(x + 4) = x^2 + 4x</span>.": "用 <span class=\"chem\">(x + 4)</span> 除 <span class=\"chem\">x^2 + 3x - 2</span>：先寫 <span class=\"chem\">x(x + 4) = x^2 + 4x</span>。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > try it > Additional HL > li
    "Subtracting <span class=\"chem\">x^2 + 4x</span> leaves <span class=\"chem\">-x - 2 = -1(x + 4) + 2</span>, so the quotient is <span class=\"chem\">x - 1</span>.": "減去 <span class=\"chem\">x^2 + 4x</span> 餘下 <span class=\"chem\">-x - 2 = -1(x + 4) + 2</span>，故商式為 <span class=\"chem\">x - 1</span>。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > try it > Additional HL > maths line
    "<i>f</i>(<i>x</i>) = <i>x</i> − 1 + <span class=\"frac\"><span>2</span><span><i>x</i> + 4</span></span> ⇒ oblique asymptote is <i>y</i> = <i>x</i> − 1, so <i>k</i> = <b>−1</b>.": "<i>f</i>(<i>x</i>) = <i>x</i> − 1 + <span class=\"frac\"><span>2</span><span><i>x</i> + 4</span></span> ⇒ 斜漸近線為 <i>y</i> = <i>x</i> − 1，故 <i>k</i> = <b>−1</b>。",

    // Higher rational functions, oblique asymptotes &amp; symmetry > not needed for IB > Additional HL > p
    "<strong>Not needed for IB:</strong> AHL 2.13 only examines <span class=\"chem\">linear / quadratic</span> and <span class=\"chem\">quadratic / linear</span> rational functions. Non-linear (parabolic) asymptotes from <span class=\"chem\">cubic / linear</span> are outside the IB syllabus.": "<strong>IB 不要求的內容：</strong>AHL 2.13 只考核<span class=\"chem\">linear / quadratic</span> 與 <span class=\"chem\">quadratic / linear</span> 有理函數。由 <span class=\"chem\">cubic / linear</span> 產生的非線性（拋物線）漸近線不在 IB 課程內。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > Additional HL > data-toc attribute
    "Modulus & reciprocal": "絕對值與倒數圖像",

    // Modulus, reciprocal &amp; squared graphs and inequalities > Additional HL > h2
    "Modulus, reciprocal &amp; squared graphs and inequalities": "絕對值、倒數與平方圖像及不等式",

    // Modulus, reciprocal &amp; squared graphs and inequalities > Additional HL > p
    "Given the graph of <span class=\"chem\">y = f(x)</span>, you must be able to sketch the derived graphs below and solve inequalities involving them:": "給定 <span class=\"chem\">y = f(x)</span> 的圖像，你必須能描繪下列衍生圖像並解相關不等式：",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > caption
    "Derived graph transformations (AHL 2.16)": "衍生圖像變換（AHL 2.16）",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > th
    "Transformation": "變換",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > th
    "Rule to sketch from <span class=\"chem\">y = f(x)</span>": "從 <span class=\"chem\">y = f(x)</span> 描繪的規則",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > th
    "Key features to label": "須標註的主要特徵",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > td
    "Keep <span class=\"chem\">f(x) &gt;= 0</span> unchanged; reflect any part with <span class=\"chem\">f(x) &lt; 0</span> upwards in the <span class=\"chem\">x</span>-axis.": "保留 <span class=\"chem\">f(x) &gt;= 0</span> 的部分不變；把 <span class=\"chem\">f(x) &lt; 0</span> 的部分沿 <span class=\"chem\">x</span> 軸向上反射。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > td
    "Sharp corners (cusps) at simple <span class=\"chem\">x</span>-intercepts; no negative <span class=\"chem\">y</span>-values.": "單根 <span class=\"chem\">x</span> 軸截距處出現尖點；沒有負 <span class=\"chem\">y</span> 值。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > td
    "Delete the left half (<span class=\"chem\">x &lt; 0</span>); keep the right half (<span class=\"chem\">x &gt;= 0</span>) and add its mirror image in the <span class=\"chem\">y</span>-axis.": "刪去左半部（<span class=\"chem\">x &lt; 0</span>）；保留右半部（<span class=\"chem\">x &gt;= 0</span>），並加上它沿 <span class=\"chem\">y</span> 軸的鏡像。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > th
    "<span class=\"chem\">y = f(ax + b)</span>": "<span class=\"chem\">y = f(ax + b)</span>",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table
    "Write <span class=\"chem\">f(a(x + b/a))</span>: horizontal stretch by scale factor <span class=\"chem\">1/|a|</span> (reflecting in the <span class=\"chem\">y</span>-axis if <span class=\"chem\">a &lt; 0</span>), then translate by <span class=\"chem\">-b/a</span> parallel to the <span class=\"chem\">x</span>-axis (see SL 2.11).": "寫成 <span class=\"chem\">f(a(x + b/a))</span>：先作水平伸縮，比例因子為 <span class=\"chem\">1/|a|</span>（若 <span class=\"chem\">a &lt; 0</span> 則沿 <span class=\"chem\">y</span> 軸反射），再沿 <span class=\"chem\">x</span> 軸方向平移 <span class=\"chem\">-b/a</span>（見 SL 2.11）。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table
    "A point <span class=\"chem\">(x_0, y_0)</span> maps to <span class=\"chem\">((x_0 - b)/a, y_0)</span>; <span class=\"chem\">y</span>-values and horizontal asymptotes are unchanged.": "點 <span class=\"chem\">(x_0, y_0)</span> 映射到 <span class=\"chem\">((x_0 - b)/a, y_0)</span>；<span class=\"chem\">y</span> 值及水平漸近線不變。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > td
    "Always an <strong>even</strong> graph; cusp at <span class=\"chem\">(0, f(0))</span> unless <span class=\"chem\">f'(0) = 0</span>.": "必為<strong>偶函數</strong>圖像；除非 <span class=\"chem\">f'(0) = 0</span>，否則在 <span class=\"chem\">(0, f(0))</span> 處有尖點。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > td
    "Invert <span class=\"chem\">y</span>-values: roots become VAs; VAs become <span class=\"chem\">x</span>-intercepts; <span class=\"chem\">y -&gt; +-infty</span> becomes <span class=\"chem\">y -&gt; 0</span>.": "取 <span class=\"chem\">y</span> 值的倒數：根變成垂直漸近線；垂直漸近線變成 <span class=\"chem\">x</span> 軸截距；<span class=\"chem\">y -&gt; +-infty</span> 變成 <span class=\"chem\">y -&gt; 0</span>。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > td
    "Invariant points at <span class=\"chem\">y = +-1</span>; local max <span class=\"chem\">(a, M)</span> becomes local min <span class=\"chem\">(a, 1/M)</span>.": "在 <span class=\"chem\">y = +-1</span> 處有不變點；局部極大 <span class=\"chem\">(a, M)</span> 變成局部極小 <span class=\"chem\">(a, 1/M)</span>。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > td
    "Square all <span class=\"chem\">y</span>-values: non-negative everywhere; values in <span class=\"chem\">(0, 1)</span> shrink, <span class=\"chem\">|y| &gt; 1</span> grow.": "把所有 <span class=\"chem\">y</span> 值平方：處處非負；位於 <span class=\"chem\">(0, 1)</span> 的值變小，<span class=\"chem\">|y| &gt; 1</span> 變大。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > td
    "Invariant points at <span class=\"chem\">y = 0</span> and <span class=\"chem\">y = 1</span>; simple roots become smooth tangent minima.": "在 <span class=\"chem\">y = 0</span> 與 <span class=\"chem\">y = 1</span> 處有不變點；單根變成平滑的相切極小值。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > widget > Additional HL > data-title attribute
    "Interactive AHL graph mapper: |f(x)|, f(|x|), and 1/f(x)": "互動 AHL 圖像變換器：|f(x)|、f(|x|) 與 1/f(x)",

    // Modulus, reciprocal &amp; squared graphs and inequalities > widget > Additional HL > figcaption
    "Choose a parent function <span class=\"chem\">f(x)</span> (dashed) and switch between <span class=\"chem\">|f(x)|</span>, <span class=\"chem\">f(|x|)</span>, and <span class=\"chem\">1/f(x)</span> to inspect cusps, <span class=\"chem\">y</span>-axis symmetry, invariant points <span class=\"chem\">y = +-1</span>, and roots turning into vertical asymptotes.": "選擇母函數 <span class=\"chem\">f(x)</span>（虛線），並在 <span class=\"chem\">|f(x)|</span>、<span class=\"chem\">f(|x|)</span> 與 <span class=\"chem\">1/f(x)</span> 之間切換，檢視尖點、<span class=\"chem\">y</span> 軸對稱性、不變點 <span class=\"chem\">y = +-1</span>，以及根如何變成垂直漸近線。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > common mistake > Additional HL > p
    "<strong>Common mistake — Cross-multiplying rational inequalities:</strong> Never multiply <span class=\"chem\">(2x - 1)/(x + 3) &gt;= 1</span> by <span class=\"chem\">(x + 3)</span> because <span class=\"chem\">x + 3</span> can be negative (which flips the inequality) or zero! Always move everything to one side (<span class=\"chem\">LHS - RHS &gt;= 0</span>), combine into a single fraction, and use a sign diagram—or multiply by <span class=\"chem\">(x + 3)^2 &gt; 0</span>.": "<strong>常見錯誤 — 對有理不等式交叉相乘：</strong>切勿把 <span class=\"chem\">(2x - 1)/(x + 3) &gt;= 1</span> 乘以 <span class=\"chem\">(x + 3)</span>，因為 <span class=\"chem\">x + 3</span> 可能為負（會令不等號方向反轉）或為零！務必把所有項移到同一邊（<span class=\"chem\">LHS - RHS &gt;= 0</span>），通分為單一分式並使用正負號圖——或乘以恒正的 <span class=\"chem\">(x + 3)^2 &gt; 0</span>。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > h3
    "Solving a rational inequality and a modulus inequality": "解有理不等式與絕對值不等式",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > p
    "Solve the following inequalities analytically:<br> (a) <span class=\"chem\">(2x - 1)/(x + 3) &gt;= 1</span> <strong>[3 marks]</strong><br> (b) <span class=\"chem\">|2x - 3| &lt; |x + 1|</span> <strong>[4 marks]</strong>": "用解析方法解 (Solve) 下列不等式：<br> (a) <span class=\"chem\">(2x - 1)/(x + 3) &gt;= 1</span> <strong>[3 marks]</strong><br> (b) <span class=\"chem\">|2x - 3| &lt; |x + 1|</span> <strong>[4 marks]</strong>",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > data-title attribute
    "Part (a): Subtract 1 to get a single fraction ≥ 0": "(a) 部：減去 1 以組成單一分式 ≥ 0",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > p
    "Keeping everything in one fraction preserves the sign of the denominator (x + 3).": "把所有項寫成單一分式可保留分母 (x + 3) 的正負號。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > maths line
    "Critical values: <i>x</i> = −3 (excluded, VA) and <i>x</i> = 4 (included). Sign diagram (+, −, +) gives <b><i>x</i> &lt; −3 or <i>x</i> ≥ 4</b> &nbsp; <b>[A1]</b>": "臨界值：<i>x</i> = −3（不包括，VA）及 <i>x</i> = 4（包括）。正負號圖 (+, −, +) 給出 <b><i>x</i> &lt; −3 或 <i>x</i> ≥ 4</b> &nbsp; <b>[A1]</b>",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > data-title attribute
    "Part (b): Square both sides of |2x − 3| < |x + 1|": "(b) 部：把 |2x − 3| < |x + 1| 兩邊平方",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > p
    "Both sides are non-negative, so squaring preserves the inequality and removes both absolute value bars.": "兩邊均為非負數，因此平方既保留不等號方向，又可移除兩邊的絕對值符號。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > maths line
    "Upward parabola is &lt; 0 between the roots: <b><span class=\"frac\"><span>2</span><span>3</span></span> &lt; <i>x</i> &lt; 4</b> &nbsp; <b>[A1]</b>": "開口向上的拋物線在兩根之間 &lt; 0：<b><span class=\"frac\"><span>2</span><span>3</span></span> &lt; <i>x</i> &lt; 4</b> &nbsp; <b>[A1]</b>",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > p
    "(a) <span class=\"chem\">x &lt; -3</span> or <span class=\"chem\">x &gt;= 4</span>; (b) <span class=\"chem\">2/3 &lt; x &lt; 4</span>": "(a) <span class=\"chem\">x &lt; -3</span> 或 <span class=\"chem\">x &gt;= 4</span>；(b) <span class=\"chem\">2/3 &lt; x &lt; 4</span>",

    // Modulus, reciprocal &amp; squared graphs and inequalities > try it > Additional HL > p
    "The graph of <span class=\"chem\">y = f(x)</span> has a local minimum at <span class=\"chem\">(3, 0.1)</span>. Find the <span class=\"chem\">y</span>-coordinate of the corresponding local maximum on the graph of <span class=\"chem\">y = 1/f(x)</span>.": "<span class=\"chem\">y = f(x)</span> 的圖像在 <span class=\"chem\">(3, 0.1)</span> 處有一個局部極小值。求 (Find) <span class=\"chem\">y = 1/f(x)</span> 圖像上對應的局部極大值之 <span class=\"chem\">y</span> 坐標。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > try it > Additional HL > li
    "For <span class=\"chem\">y = 1/f(x)</span>, a positive local minimum at <span class=\"chem\">(a, m)</span> becomes a local maximum at <span class=\"chem\">(a, 1/m)</span>.": "對於 <span class=\"chem\">y = 1/f(x)</span>，位於 <span class=\"chem\">(a, m)</span> 的正局部極小值會變成位於 <span class=\"chem\">(a, 1/m)</span> 的局部極大值。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > try it > Additional HL > li
    "Compute <span class=\"chem\">1 / 0.1</span>.": "計算 <span class=\"chem\">1 / 0.1</span>。",

    // Modulus, reciprocal &amp; squared graphs and inequalities > try it > Additional HL > maths line
    "<i>y</i><sub>max</sub> = <span class=\"frac\"><span>1</span><span>0.1</span></span> = <b>10</b> at <i>x</i> = 3.": "在 <i>x</i> = 3 處，<i>y</i><sub>max</sub> = <span class=\"frac\"><span>1</span><span>0.1</span></span> = <b>10</b>。",

    // Quick practice > data-toc attribute
    "Practice": "練習",

    // Quick practice > h2
    "Quick practice": "快速練習",

    // widget string (assets/js/widgets-t2-3.js)
    "Quadratic: f(x) = x² − 2x": "二次函數：f(x) = x² − 2x",

    // widget string (assets/js/widgets-t2-3.js)
    "Cubic: f(x) = 0.5(x³ − 3x)": "三次函數：f(x) = 0.5(x³ − 3x)",

    // widget string (assets/js/widgets-t2-3.js)
    "Exponential: f(x) = 2ˣ": "指數函數：f(x) = 2ˣ",

    // widget string (assets/js/widgets-t2-3.js)
    "Parent function f(x)": "母函數 f(x)",

    // widget string (assets/js/widgets-t2-3.js)
    "Vertical scale a": "垂直縮放 a",

    // widget string (assets/js/widgets-t2-3.js)
    "Horizontal factor b": "水平因子 b",

    // widget string (assets/js/widgets-t2-3.js)
    "Horizontal shift h": "水平平移 h",

    // widget string (assets/js/widgets-t2-3.js)
    "Vertical shift k": "垂直平移 k",

    // widget string (assets/js/widgets-t2-3.js)
    "Reset": "重設",

    // widget string (assets/js/widgets-t2-3.js)
    "Transformed equation": "變換後的方程",

    // widget string (assets/js/widgets-t2-3.js)
    "Tracked point P ↦ P'": "追蹤點 P ↦ P'",

    // widget string (assets/js/widgets-t2-3.js)
    "Transformation sequence": "變換序列",

    // widget string (assets/js/widgets-t2-3.js)
    "reflect in y-axis": "沿 y 軸反射",

    // widget string (assets/js/widgets-t2-3.js)
    "H-stretch by": "水平伸縮",

    // widget string (assets/js/widgets-t2-3.js)
    "shift H by": "水平平移",

    // widget string (assets/js/widgets-t2-3.js)
    "reflect in x-axis": "沿 x 軸反射",

    // widget string (assets/js/widgets-t2-3.js)
    "V-stretch by": "垂直伸縮",

    // widget string (assets/js/widgets-t2-3.js)
    "shift V by": "垂直平移",

    // widget string (assets/js/widgets-t2-3.js)
    "Identity (no transformation)": "恒等變換（無變換）",

    // widget string (assets/js/widgets-t2-3.js)
    "Parent curve f(x) and transformed curve g(x) = a f(b(x − h)) + k": "母曲線 f(x) 與變換曲線 g(x) = a f(b(x − h)) + k",

    // widget string (assets/js/widgets-t2-3.js)
    "Quadratic: f(x) = x² − 2x − 3": "二次函數：f(x) = x² − 2x − 3",

    // widget string (assets/js/widgets-t2-3.js)
    "Linear: f(x) = x − 1": "線性函數：f(x) = x − 1",

    // widget string (assets/js/widgets-t2-3.js)
    "Cubic: f(x) = 0.4(x + 2)(x − 1)(x − 3)": "三次函數：f(x) = 0.4(x + 2)(x − 1)(x − 3)",

    // widget string (assets/js/widgets-t2-3.js)
    "AHL transformation": "AHL 變換",

    // widget string (assets/js/widgets-t2-3.js)
    "y = |f(x)| (reflect y < 0 up)": "y = |f(x)|（把 y < 0 向上反射）",

    // widget string (assets/js/widgets-t2-3.js)
    "y = f(|x|) (even mirror of x ≥ 0)": "y = f(|x|)（x ≥ 0 的偶函數鏡像）",

    // widget string (assets/js/widgets-t2-3.js)
    "y = 1 / f(x) (reciprocal)": "y = 1 / f(x)（倒數）",

    // widget string (assets/js/widgets-t2-3.js)
    "Mapping rule": "映射規則",

    // widget string (assets/js/widgets-t2-3.js)
    "Key features": "主要特徵",

    // widget string (assets/js/widgets-t2-3.js)
    "Keep f(x) ≥ 0; reflect f(x) < 0 across the x-axis.": "保留 f(x) ≥ 0；把 f(x) < 0 沿 x 軸反射。",

    // widget string (assets/js/widgets-t2-3.js)
    "Sharp cusps at x-intercepts: x =": "x 軸截距處的尖點：x =",

    // widget string (assets/js/widgets-t2-3.js)
    "Cusp (": "尖點 (",

    // widget string (assets/js/widgets-t2-3.js)
    "Discard x < 0; reflect x ≥ 0 across the y-axis (even).": "捨去 x < 0；把 x ≥ 0 沿 y 軸反射（偶函數）。",

    // widget string (assets/js/widgets-t2-3.js)
    "Symmetric about x = 0; y-intercept at (0,": "關於 x = 0 對稱；y 軸截距為 (0,",

    // widget string (assets/js/widgets-t2-3.js)
    "Roots of f(x) become VAs; y = ±1 stay invariant; f(x) → ±∞ becomes y → 0.": "f(x) 的根變成垂直漸近線；y = ±1 保持不變；f(x) → ±∞ 變成 y → 0。",

    // widget string (assets/js/widgets-t2-3.js)
    "VAs at x =": "垂直漸近線於 x =",

    // widget string (assets/js/widgets-t2-3.js)
    "; HA: y = 0": "；水平漸近線：y = 0",

    // widget string (assets/js/widgets-t2-3.js)
    "Parent f(x) and AHL transformed curve": "母曲線 f(x) 與 AHL 變換曲線"

  }
});
