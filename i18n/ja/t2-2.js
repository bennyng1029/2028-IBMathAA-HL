/* t2-2 — ja translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't2-2', {
  strings: {

    // page title (browser tab)
    "2.2 Quadratics, rational, exponential and log models | Analysis Lab": "2.2 2 次関数・分数関数・指数モデルと対数モデル | Analysis Lab",

    // Quadratics, rational, exponential and log models > page header > p
    "Topic 2.2 · SL 2.6–2.10": "Topic 2.2 · SL 2.6–2.10",

    // Quadratics, rational, exponential and log models > page header > h1
    "Quadratics, rational, exponential and log models": "2 次関数・分数関数・指数モデルと対数モデル",

    // Quadratics, rational, exponential and log models > page header > span
    "How do algebraic parameters control turning points, root counts, and asymptotes across the core families of mathematical models?": "数式のパラメーターは、代表的な数理モデルにおける極値（頂点）、解の個数、漸近線をどのように制御しているのでしょうか？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "チェックリスト",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > checklist > span
    "Convert quadratics between standard form <span class=\"chem\">ax^2 + bx + c</span>, vertex form <span class=\"chem\">a(x - h)^2 + k</span> (by completing the square), and factored form <span class=\"chem\">a(x - p)(x - q)</span>.": "2 次関数を標準形 <span class=\"chem\">ax^2 + bx + c</span>、頂点形 <span class=\"chem\">a(x - h)^2 + k</span>（平方完成による）、因数分解形 <span class=\"chem\">a(x - p)(x - q)</span> の間で相互に変形できる。",

    // What you need to be able to do > checklist > span
    "Use the discriminant <span class=\"chem\">Delta = b^2 - 4ac</span> to determine the number of real roots or line-curve intersections (<span class=\"chem\">Delta &gt; 0</span>, <span class=\"chem\">Delta = 0</span>, <span class=\"chem\">Delta &lt; 0</span>, <span class=\"chem\">Delta &gt;= 0</span>).": "判別式 <span class=\"chem\">Delta = b^2 - 4ac</span> を用いて、実数解の個数や直線と曲線の交点の個数（<span class=\"chem\">Delta &gt; 0</span>、<span class=\"chem\">Delta = 0</span>、<span class=\"chem\">Delta &lt; 0</span>、<span class=\"chem\">Delta &gt;= 0</span>）を判定できる。",

    // What you need to be able to do > checklist > span
    "Solve quadratic inequalities (including parameters inside <span class=\"chem\">Delta</span>) by sketching the parabola or drawing a sign diagram.": "放物線の概形や符号表を描いて、2 次不等式（<span class=\"chem\">Delta</span> にパラメーターを含む場合も含む）を解ける。",

    // What you need to be able to do > checklist > span
    "Sketch linear rational functions <span class=\"chem\">f(x) = (ax + b)/(cx + d)</span>, stating the equations of the vertical asymptote <span class=\"chem\">x = -d/c</span> and horizontal asymptote <span class=\"chem\">y = a/c</span>.": "1 次分数関数 <span class=\"chem\">f(x) = (ax + b)/(cx + d)</span> の概形を描き、鉛直漸近線 <span class=\"chem\">x = -d/c</span> と水平漸近線 <span class=\"chem\">y = a/c</span> の方程式を述べられる。",

    // What you need to be able to do > checklist > span
    "Model growth and decay with <span class=\"chem\">f(t) = a e^{kt} + c</span> and sketch logarithmic graphs <span class=\"chem\">y = ln(x - h)</span> with their asymptotes and intercepts.": "<span class=\"chem\">f(t) = a e^{kt} + c</span> を用いて増加・減衰をモデル化し、対数グラフ <span class=\"chem\">y = ln(x - h)</span> の概形を漸近線や切片とともに描ける。",

    // What you need to be able to do > checklist > span
    "Solve transcendental equations <span class=\"chem\">f(x) = g(x)</span> on Paper 2 using GDC graph intersections and sketch the curves to earn method marks.": "Paper 2 で GDC のグラフの交点を用いて超越方程式 <span class=\"chem\">f(x) = g(x)</span> を解き、方法点（M1）を得るための概形を描ける。",

    // Question decoder: spotting disguised discriminant &amp; mode > data-toc attribute
    "Question decoder": "問題デコーダー",

    // Question decoder: spotting disguised discriminant &amp; mode > h2
    "Question decoder: spotting disguised discriminant &amp; modelling cues": "問題デコーダー：隠れた判別式とモデリングの手がかり",

    // Question decoder: spotting disguised discriminant &amp; mode > p
    "Many Paper 1 quadratic questions never use the word “discriminant”—they disguise <span class=\"chem\">Delta = b^2 - 4ac</span> behind geometric words like <em>tangent</em>, <em>never meets</em>, or <em>always positive</em>.": "Paper 1 の 2 次関数の問題の多くは「discriminant（判別式）」という言葉を使いません。代わりに<em>「接する（tangent）」</em>、<em>「交わらない（never meets）」</em>、<em>「常に正（always positive）」</em>といった幾何学的な表現の裏に <span class=\"chem\">Delta = b^2 - 4ac</span> を隠しています。",

    // Exponential models, logarithmic graphs and GDC equation solving > callout > p
    "<strong>In your Formula Booklet (SL 2.9):</strong> <span class=\"chem\">a^x = e^{x ln a}</span> and <span class=\"chem\">log_a a^x = x = a^{log_a x}</span> (for <span class=\"chem\">a &gt; 0</span>, <span class=\"chem\">a != 1</span>, and <span class=\"chem\">x &gt; 0</span> in the second form) are printed. Use the first to rewrite any exponential with base <span class=\"chem\">e</span>, for example <span class=\"chem\">2^x = e^{x ln 2}</span>.": "<strong>公式集（Formula booklet）に掲載 (SL 2.9)：</strong> <span class=\"chem\">a^x = e^{x ln a}</span> と <span class=\"chem\">log_a a^x = x = a^{log_a x}</span>（<span class=\"chem\">a &gt; 0</span>、<span class=\"chem\">a != 1</span>。2 つ目の式ではさらに <span class=\"chem\">x &gt; 0</span>）が掲載されています。1 つ目の式を使うと、どんな指数関数も底 <span class=\"chem\">e</span> で書き直せます。例：<span class=\"chem\">2^x = e^{x ln 2}</span>。",

    // Reciprocal and linear rational functions > p > data-def attribute
    "The function f(x) = 1/x, x ≠ 0. Its graph is a rectangular hyperbola with asymptotes x = 0 and y = 0.": "関数 f(x) = 1/x（x ≠ 0）。グラフは x = 0 と y = 0 を漸近線とする直角双曲線。",

    // Reciprocal and linear rational functions > p
    "The <dfn data-def=\"The function f(x) = 1/x, x ≠ 0. Its graph is a rectangular hyperbola with asymptotes x = 0 and y = 0.\">reciprocal function</dfn> <span class=\"chem\">f(x) = 1/x</span> (<span class=\"chem\">x != 0</span>) has asymptotes <span class=\"chem\">x = 0</span> and <span class=\"chem\">y = 0</span>. It is <strong>self-inverse</strong>: <span class=\"chem\">f(f(x)) = 1/(1/x) = x</span>, so <span class=\"chem\">f^{-1}(x) = f(x)</span>, and its graph is symmetric in the line <span class=\"chem\">y = x</span>.": "<dfn data-def=\"関数 f(x) = 1/x（x ≠ 0）。グラフは x = 0 と y = 0 を漸近線とする直角双曲線。\">分数関数 <span class=\"en-term\">(reciprocal function)</span></dfn> <span class=\"chem\">f(x) = 1/x</span>（<span class=\"chem\">x != 0</span>）の漸近線は <span class=\"chem\">x = 0</span> と <span class=\"chem\">y = 0</span> です。この関数は<strong>自己逆関数</strong>です：<span class=\"chem\">f(f(x)) = 1/(1/x) = x</span> なので <span class=\"chem\">f^{-1}(x) = f(x)</span> となり、グラフは直線 <span class=\"chem\">y = x</span> に関して対称です。",

    // Quadratic forms, completing the square and the discriminant > callout > p
    "<strong>In your Formula Booklet (SL 2.6 and SL 2.7):</strong> The axis of symmetry <span class=\"chem\">x = -b/(2a)</span>, the quadratic formula <span class=\"chem\">x = (-b +- sqrt(b^2 - 4ac))/(2a)</span> and the discriminant <span class=\"chem\">Delta = b^2 - 4ac</span> are printed. What each sign of <span class=\"chem\">Delta</span> tells you about the roots is not printed, so learn it.": "<strong>公式集（Formula booklet）に掲載 (SL 2.6・SL 2.7)：</strong> 軸の方程式 <span class=\"chem\">x = -b/(2a)</span>、解の公式 <span class=\"chem\">x = (-b +- sqrt(b^2 - 4ac))/(2a)</span>、判別式 <span class=\"chem\">Delta = b^2 - 4ac</span> が掲載されています。<span class=\"chem\">Delta</span> の符号から解について何がわかるかは掲載されていないので、覚えておきましょう。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > caption
    "Question decoder — Quadratics, rational functions, exponentials &amp; GDC solving": "問題デコーダー — 2 次関数・分数関数・指数関数と GDC による求解",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "What the exam question says": "試験問題に書かれている表現",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "What it means (formula &amp; setup)": "数学的な意味（公式と立式）",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1（電卓不可）vs Paper 2（GDC 可）",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "“Two distinct real roots” / “Line intersects the curve twice”": "「異なる 2 つの実数解」 / 「直線が曲線と 2 回交わる」",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Equate <span class=\"chem\">f(x) = g(x)</span>, rearrange to <span class=\"chem\">Ax^2 + Bx + C = 0</span>, and set <strong><span class=\"chem\">Delta = B^2 - 4AC &gt; 0</span></strong>.": "<span class=\"chem\">f(x) = g(x)</span> とおいて <span class=\"chem\">Ax^2 + Bx + C = 0</span> に整理し、<strong><span class=\"chem\">Delta = B^2 - 4AC &gt; 0</span></strong> とします。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "If <span class=\"chem\">Delta &gt; 0</span> gives a quadratic inequality in <span class=\"chem\">k</span>, sketch a mini parabola in <span class=\"chem\">k</span> to pick the right intervals!": "<span class=\"chem\">Delta &gt; 0</span> が <span class=\"chem\">k</span> の 2 次不等式になったら、<span class=\"chem\">k</span> についての小さな放物線を描いて正しい区間を選びましょう！",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "“Touches the <span class=\"chem\">x</span>-axis” / “Line is tangent to the parabola” / “Equal (repeated) root”": "「<span class=\"chem\">x</span> 軸に接する」 / 「直線が放物線に接する」 / 「重解をもつ」",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Rearrange to <span class=\"chem\">Ax^2 + Bx + C = 0</span> and set <strong><span class=\"chem\">Delta = B^2 - 4AC = 0</span></strong>.": "<span class=\"chem\">Ax^2 + Bx + C = 0</span> に整理し、<strong><span class=\"chem\">Delta = B^2 - 4AC = 0</span></strong> とします。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Setting <span class=\"chem\">Delta = 0</span> is much faster than using derivatives when an unknown parameter <span class=\"chem\">k</span> appears in multiple terms.": "未知のパラメーター <span class=\"chem\">k</span> が複数の項に含まれているときは、微分を使うよりも <span class=\"chem\">Delta = 0</span> を使う方がはるかに速く解けます。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "“No real roots” / “Line never meets the curve” / “Always positive for all <span class=\"chem\">x ∈ ℝ</span>”": "「実数解なし」 / 「直線が曲線と交わらない」 / 「すべての <span class=\"chem\">x ∈ ℝ</span> で常に正」",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Set <strong><span class=\"chem\">Delta = B^2 - 4AC &lt; 0</span></strong> (and require leading coefficient <strong><span class=\"chem\">a &gt; 0</span></strong> for “always positive”, or <span class=\"chem\">a &lt; 0</span> for “always negative”).": "<strong><span class=\"chem\">Delta = B^2 - 4AC &lt; 0</span></strong> とおきます（さらに「常に正」なら最高次係数 <strong><span class=\"chem\">a &gt; 0</span></strong>、「常に負」なら <span class=\"chem\">a &lt; 0</span> が必要です）。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Remember: a parabola lies entirely above the <span class=\"chem\">x</span>-axis if and only if it opens upwards (<span class=\"chem\">a &gt; 0</span>) <em>and</em> never crosses the axis (<span class=\"chem\">Delta &lt; 0</span>).": "放物線が完全に <span class=\"chem\">x</span> 軸より上にあるのは、下に凸（<span class=\"chem\">a &gt; 0</span>）<em>かつ</em>軸と交わらない（<span class=\"chem\">Delta &lt; 0</span>）とき、かつそのときに限ります。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "“The equation has real roots”": "「方程式が実数解をもつ」",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Could be 1 repeated root <em>or</em> 2 distinct roots: set <strong><span class=\"chem\">Delta = b^2 - 4ac &gt;= 0</span></strong> (non-strict!).": "1 つの重解<em>または</em> 2 つの異なる実数解の両方があり得るので、<strong><span class=\"chem\">Delta = b^2 - 4ac &gt;= 0</span></strong>（等号付き！）とします。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Watch the wording carefully: “real roots” (<span class=\"chem\">Delta &gt;= 0</span>) vs “two distinct real roots” (<span class=\"chem\">Delta &gt; 0</span>).": "言葉遣いに注意しましょう：「real roots（実数解）」は <span class=\"chem\">Delta &gt;= 0</span>、「two distinct real roots（異なる 2 つの実数解）」は <span class=\"chem\">Delta &gt; 0</span> です。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "“Solve <span class=\"chem\">ax^2 + bx + c &gt; 0</span> (or <span class=\"chem\">&lt;= 0</span>)”": "「<span class=\"chem\">ax^2 + bx + c &gt; 0</span>（または <span class=\"chem\">&lt;= 0</span>）を解け」",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Factor to find the roots <span class=\"chem\">p, q</span>, then <strong>always sketch the parabola</strong> or a sign diagram.": "因数分解して解 <span class=\"chem\">p, q</span> を求め、<strong>必ず放物線の概形</strong>または符号表を描きます。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Never write <span class=\"chem\">x &gt; +-3</span>! For <span class=\"chem\">a &gt; 0</span>: <span class=\"chem\">&lt; 0</span> is <em>between</em> the roots (<span class=\"chem\">p &lt; x &lt; q</span>); <span class=\"chem\">&gt; 0</span> is <em>outside</em> the roots (<span class=\"chem\">x &lt; p</span> or <span class=\"chem\">x &gt; q</span>).": "<span class=\"chem\">x &gt; +-3</span> などと書いてはいけません！<span class=\"chem\">a &gt; 0</span> のとき、<span class=\"chem\">&lt; 0</span> は解の<em>内側</em>（<span class=\"chem\">p &lt; x &lt; q</span>）、<span class=\"chem\">&gt; 0</span> は解の<em>外側</em>（<span class=\"chem\">x &lt; p</span> または <span class=\"chem\">x &gt; q</span>）です。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "“Find the initial population / temperature”": "「初期の個体数 / 温度を求めよ」",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Substitute <strong><span class=\"chem\">t = 0</span></strong> into the model and use <span class=\"chem\">b^0 = 1</span> or <span class=\"chem\">e^0 = 1</span>.": "モデル式に <strong><span class=\"chem\">t = 0</span></strong> を代入し、<span class=\"chem\">b^0 = 1</span> または <span class=\"chem\">e^0 = 1</span> を使います。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "In <span class=\"chem\">P(t) = A + B e^{-kt}</span>, the initial value is <span class=\"chem\">P(0) = A + B</span>, <em>not</em> <span class=\"chem\">A</span> and <em>not</em> <span class=\"chem\">B</span> alone!": "<span class=\"chem\">P(t) = A + B e^{-kt}</span> では、初期値は <span class=\"chem\">A</span> <em>だけ</em>でも <span class=\"chem\">B</span> <em>だけ</em>でもなく、<span class=\"chem\">P(0) = A + B</span> です！",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "“Find the long-term / limiting value as <span class=\"chem\">t -&gt; infty</span>”": "「<span class=\"chem\">t -&gt; infty</span> のときの長期的な値 / 極限値を求めよ」",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Horizontal asymptote of the decay/growth model: since <span class=\"chem\">e^{-kt} -&gt; 0</span> (for <span class=\"chem\">k &gt; 0</span>), <span class=\"chem\">P(t) -&gt; A</span>.": "減衰・成長モデルの水平漸近線：<span class=\"chem\">k &gt; 0</span> のとき <span class=\"chem\">e^{-kt} -&gt; 0</span> なので <span class=\"chem\">P(t) -&gt; A</span> です。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Write <em>“As <span class=\"chem\">t -&gt; infty, e^{-kt} -&gt; 0</span>”</em> explicitly if the question says <em>Explain</em> or <em>Show that</em>.": "問題が <em>Explain</em> や <em>Show that</em> であれば、<em>「<span class=\"chem\">t -&gt; infty, e^{-kt} -&gt; 0</span> のとき」</em>と明記しましょう。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "“Solve <span class=\"chem\">e^x = 5 - x^2</span>”": "「<span class=\"chem\">e^x = 5 - x^2</span> を解け」",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Mixed exponential + polynomial equation has no algebraic closed form. Use <strong>Paper 2 GDC graph intersection</strong>!": "指数と多項式が混ざった方程式は代数的に解けません。<strong>Paper 2 の GDC グラフ交点機能</strong>を使いましょう！",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Plot <span class=\"chem\">Y_1 = e^x</span> and <span class=\"chem\">Y_2 = 5 - x^2</span> (or <span class=\"chem\">Y_1 = e^x + x^2 - 5</span> zeroes). Draw a quick sketch showing the intersections to secure <strong>[M1]</strong>.": "<span class=\"chem\">Y_1 = e^x</span> と <span class=\"chem\">Y_2 = 5 - x^2</span> を描きます（または <span class=\"chem\">Y_1 = e^x + x^2 - 5</span> の零点を求めます）。<strong>[M1]</strong> を得るために交点を示す簡単な概形を描きましょう。",

    // Quadratic forms, completing the square and the discriminant > data-toc attribute
    "Quadratics & Δ": "2 次関数と Δ",

    // Quadratic forms, completing the square and the discriminant > h2
    "Quadratic forms, completing the square and the discriminant": "2 次関数の 3 つの形・平方完成と判別式",

    // Quadratic forms, completing the square and the discriminant > p
    "Every quadratic function <span class=\"chem\">f(x) = ax^2 + bx + c</span> (<span class=\"chem\">a != 0</span>) graphs as a symmetrical parabola. Depending on what the question gives or asks for, you should pick the most direct of the three quadratic forms:": "すべての 2 次関数 <span class=\"chem\">f(x) = ax^2 + bx + c</span>（<span class=\"chem\">a != 0</span>）のグラフは対称な放物線になります。問題で与えられている情報や問われている内容に応じて、次の 3 つの形から最も直接的なものを選びましょう：",

    // Quadratic forms, completing the square and the discriminant > table > caption
    "The three quadratic forms and what each reveals immediately": "2 次関数の 3 つの形とそれぞれからすぐわかる情報",

    // Quadratic forms, completing the square and the discriminant > table > th
    "Form": "形",

    // Quadratic forms, completing the square and the discriminant > table > th
    "Equation": "方程式",

    // Quadratic forms, completing the square and the discriminant > table > th
    "What you can read off immediately": "式からすぐ読み取れる情報",

    // Quadratic forms, completing the square and the discriminant > table > th
    "Standard form": "標準形",

    // Quadratic forms, completing the square and the discriminant > table > td
    "<span class=\"chem\">f(x) = ax^2 + bx + c</span>": "<span class=\"chem\">f(x) = ax^2 + bx + c</span>",

    // Quadratic forms, completing the square and the discriminant > table > td
    "<span class=\"chem\">y</span>-intercept at <span class=\"chem\">(0, c)</span>; axis of symmetry <span class=\"chem\">x = -b / (2a)</span>; concavity (<span class=\"chem\">a &gt; 0</span> opens up, <span class=\"chem\">a &lt; 0</span> opens down).": "<span class=\"chem\">y</span> 切片 <span class=\"chem\">(0, c)</span>；対称軸 <span class=\"chem\">x = -b / (2a)</span>；凸性（<span class=\"chem\">a &gt; 0</span> で下に凸、<span class=\"chem\">a &lt; 0</span> で上に凸）。",

    // Quadratic forms, completing the square and the discriminant > table > th
    "Vertex (completed square) form": "頂点形（平方完成形）",

    // Quadratic forms, completing the square and the discriminant > table > td
    "Vertex (turning point) at <span class=\"chem\">(h, k)</span>; axis of symmetry <span class=\"chem\">x = h</span>; range is <span class=\"chem\">y &gt;= k</span> (if <span class=\"chem\">a &gt; 0</span>) or <span class=\"chem\">y &lt;= k</span> (if <span class=\"chem\">a &lt; 0</span>).": "頂点 <span class=\"chem\">(h, k)</span>；対称軸 <span class=\"chem\">x = h</span>；値域は <span class=\"chem\">a &gt; 0</span> なら <span class=\"chem\">y &gt;= k</span>、<span class=\"chem\">a &lt; 0</span> なら <span class=\"chem\">y &lt;= k</span>。",

    // Quadratic forms, completing the square and the discriminant > table > th
    "Factored (intercept) form": "因数分解形（切片形）",

    // Quadratic forms, completing the square and the discriminant > table > td
    "<span class=\"chem\">x</span>-intercepts (roots) at <span class=\"chem\">(p, 0)</span> and <span class=\"chem\">(q, 0)</span>; axis of symmetry halfway between roots at <span class=\"chem\">x = (p + q) / 2</span>.": "<span class=\"chem\">x</span> 切片（解）<span class=\"chem\">(p, 0)</span> と <span class=\"chem\">(q, 0)</span>；対称軸は 2 解のちょうど真ん中 <span class=\"chem\">x = (p + q) / 2</span>。",

    // Quadratic forms, completing the square and the discriminant > h3
    "Completing the square when <span class=\"chem\">a != 1</span>": "<span class=\"chem\">a != 1</span> のときの平方完成",

    // Quadratic forms, completing the square and the discriminant > p
    "To convert <span class=\"chem\">ax^2 + bx + c</span> into vertex form <span class=\"chem\">a(x - h)^2 + k</span> without making sign errors, <strong>factor <span class=\"chem\">a</span> out of the first two terms only</strong>, halve the coefficient of <span class=\"chem\">x</span>, and remember to multiply the subtracted square by <span class=\"chem\">a</span> when bringing it outside the bracket:": "符号ミスをせずに <span class=\"chem\">ax^2 + bx + c</span> を頂点形 <span class=\"chem\">a(x - h)^2 + k</span> に直すには、<strong>最初の 2 項だけから <span class=\"chem\">a</span> をくくり出し</strong>、<span class=\"chem\">x</span> の係数を半分にして、括弧の外に出すときに引いた平方数へ <span class=\"chem\">a</span> を掛け忘れないようにします：",

    // Quadratic forms, completing the square and the discriminant > equation > dd
    "shortcut check: <span class=\"chem\">h = -(-12)/(2 × 2) = 3</span> and <span class=\"chem\">k = f(3) = 2(9) - 36 + 11 = -7</span>": "検算の近道：<span class=\"chem\">h = -(-12)/(2 × 2) = 3</span> かつ <span class=\"chem\">k = f(3) = 2(9) - 36 + 11 = -7</span>",

    // Quadratic forms, completing the square and the discriminant > equation > dt
    "Δ = b<sup>2</sup> − 4ac": "Δ = b<sup>2</sup> − 4ac",

    // Quadratic forms, completing the square and the discriminant > equation > dd
    "<dfn data-def=\"The quantity Δ = b² − 4ac under the square root in the quadratic formula, which determines the number and nature of roots.\">discriminant</dfn>: <span class=\"chem\">Delta &gt; 0</span> (2 distinct real roots), <span class=\"chem\">Delta = 0</span> (1 repeated root), <span class=\"chem\">Delta &lt; 0</span> (no real roots)": "<dfn data-def=\"2 次方程式の解の公式の根号の中にある Δ = b² − 4ac。実数解の個数と性質を決定する。\">判別式 <span class=\"en-term\">(discriminant)</span></dfn>：<span class=\"chem\">Delta &gt; 0</span>（異なる 2 つの実数解）、<span class=\"chem\">Delta = 0</span>（1 つの重解）、<span class=\"chem\">Delta &lt; 0</span>（実数解なし）",

    // Quadratic forms, completing the square and the discriminant > equation > data-def attribute
    "The quantity Δ = b² − 4ac under the square root in the quadratic formula, which determines the number and nature of roots.": "2 次方程式の解の公式の根号の中にある Δ = b² − 4ac。実数解の個数と性質を決定する。",

    // Quadratic forms, completing the square and the discriminant > widget > data-title attribute
    "Interactive quadratic & line-parabola discriminant lab": "2 次関数＆直線・放物線の判別式ラボ",

    // Quadratic forms, completing the square and the discriminant > widget > figcaption
    "Adjust the quadratic coefficients <span class=\"chem\">a, b, c</span> and optional line <span class=\"chem\">y = mx + d</span> to see how the discriminant <span class=\"chem\">Delta</span> controls the number of intersections and the vertex <span class=\"chem\">(h, k)</span>.": "2 次関数の係数 <span class=\"chem\">a, b, c</span> と直線 <span class=\"chem\">y = mx + d</span> を動かして、判別式 <span class=\"chem\">Delta</span> が交点の個数と頂点 <span class=\"chem\">(h, k)</span> をどう決めるか確認しましょう。",

    // Quadratic forms, completing the square and the discriminant > worked example > h3
    "Solving a disguised discriminant inequality for a tangent/non-intersecting line": "交わらない直線に対する隠れた判別式の不等式を解く",

    // Quadratic forms, completing the square and the discriminant > worked example > p
    "Consider the quadratic curve <span class=\"chem\">y = x^2 + (k - 2)x + 5</span> and the straight line <span class=\"chem\">y = 2x + 1</span>, where <span class=\"chem\">k ∈ ℝ</span>. Find the set of values of <span class=\"chem\">k</span> for which the line and the curve <strong>never intersect</strong>. <strong>[5 marks]</strong>": "2 次曲線 <span class=\"chem\">y = x^2 + (k - 2)x + 5</span> と直線 <span class=\"chem\">y = 2x + 1</span>（<span class=\"chem\">k ∈ ℝ</span>）を考える。直線と曲線が<strong>決して交わらない</strong>ような <span class=\"chem\">k</span> の値の範囲を求めなさい (Find)。 <strong>[5 marks]</strong>",

    // Quadratic forms, completing the square and the discriminant > worked example > data-title attribute
    "Equate the curve and line and rearrange to Ax² + Bx + C = 0": "曲線と直線を等置して Ax² + Bx + C = 0 に整理する",

    // Quadratic forms, completing the square and the discriminant > worked example > p
    "Intersections occur where both y-values are equal; standard quadratic form lets us identify A, B, and C.": "交点は両方の y 座標が等しい点なので、標準形に整理すると A, B, C が読み取れます。",

    // Quadratic forms, completing the square and the discriminant > worked example > data-title attribute
    "Set the discriminant Δ < 0 for no real intersections": "実交点をもたない条件 Δ < 0 を立てる",

    // Quadratic forms, completing the square and the discriminant > worked example > p
    "The line and parabola never meet if and only if the intersection equation has no real roots.": "直線と放物線が交わらないのは、交点の方程式が実数解をもたないとき、かつそのときに限ります。",

    // Quadratic forms, completing the square and the discriminant > worked example > data-title attribute
    "Find the critical values and use a parabolic sketch to write the interval": "境界値を求め、放物線の概形から区間を答える",

    // Quadratic forms, completing the square and the discriminant > worked example > p
    "Difference of two squares (or expanding k² − 8k &lt; 0) gives critical values k = 0 and k = 8. Since this quadratic in k opens upwards, it is negative between the roots.": "平方の差（または k² − 8k &lt; 0 の展開）より境界値は k = 0 と k = 8 になります。k の 2 次式は下に凸なので、2 解の間で負になります。",

    // Quadratic forms, completing the square and the discriminant > worked example > maths line
    "<i>k</i>(<i>k</i> − 8) &lt; 0 ⇒ critical values <i>k</i> = 0, 8 &nbsp; <b>[(A1)]</b>": "<i>k</i>(<i>k</i> − 8) &lt; 0 ⇒ 境界値 <i>k</i> = 0, 8 &nbsp; <b>[(A1)]</b>",

    // Quadratic forms, completing the square and the discriminant > try it > p
    "The quadratic function <span class=\"chem\">f(x) = 2x^2 - 6x + k</span> has <strong>one repeated real root</strong> (its graph is tangent to the <span class=\"chem\">x</span>-axis). Find the exact value of <span class=\"chem\">k</span>.": "2 次関数 <span class=\"chem\">f(x) = 2x^2 - 6x + k</span> が<strong>1 つの重解</strong>をもつ（グラフが <span class=\"chem\">x</span> 軸に接する）。<span class=\"chem\">k</span> の厳密値（正確な値）を求めなさい (Find)。",

    // Quadratic forms, completing the square and the discriminant > try it > li
    "For a quadratic to have one repeated root (touch the <span class=\"chem\">x</span>-axis), set its discriminant <span class=\"chem\">Delta = b^2 - 4ac = 0</span>.": "2 次関数が重解をもつ（<span class=\"chem\">x</span> 軸に接する）条件は、判別式 <span class=\"chem\">Delta = b^2 - 4ac = 0</span> です。",

    // Quadratic forms, completing the square and the discriminant > try it > li
    "Substitute <span class=\"chem\">a = 2</span>, <span class=\"chem\">b = -6</span>, and <span class=\"chem\">c = k</span> into <span class=\"chem\">(-6)^2 - 4(2)(k) = 0</span>.": "<span class=\"chem\">(-6)^2 - 4(2)(k) = 0</span> に <span class=\"chem\">a = 2</span>、<span class=\"chem\">b = -6</span>、<span class=\"chem\">c = k</span> を代入します。",

    // Quadratic forms, completing the square and the discriminant > try it > maths line
    "8<i>k</i> = 36 ⇒ <i>k</i> = <span class=\"frac\"><span>36</span><span>8</span></span> = <b>4.5</b> (or 9/2)": "8<i>k</i> = 36 ⇒ <i>k</i> = <span class=\"frac\"><span>36</span><span>8</span></span> = <b>4.5</b> （または 9/2）",

    // Reciprocal and linear rational functions > data-toc attribute
    "Rational functions": "分数関数",

    // Reciprocal and linear rational functions > h2
    "Reciprocal and linear rational functions": "反比例と 1 次分数関数",

    // Reciprocal and linear rational functions > p
    "A linear-over-linear <dfn data-def=\"A function of the form f(x) = (ax + b)/(cx + d) with c ≠ 0 and ad − bc ≠ 0, whose graph is a rectangular hyperbola with one vertical and one horizontal asymptote.\">rational function</dfn> has the form <span class=\"chem\">f(x) = (ax + b)/(cx + d)</span> with <span class=\"chem\">c != 0</span> and <span class=\"chem\">ad - bc != 0</span> (otherwise <span class=\"chem\">f</span> is a constant with a hole). Its graph is a transformation of the basic reciprocal hyperbola <span class=\"chem\">y = 1/x</span> and is anchored by two perpendicular asymptotes:": "1 次式分の 1 次式の<dfn data-def=\"c ≠ 0、ad − bc ≠ 0 として f(x) = (ax + b)/(cx + d) の形で表される関数。グラフは鉛直漸近線と水平漸近線を 1 本ずつもつ直角双曲線になる。\">分数関数（有理関数） <span class=\"en-term\">(rational function)</span></dfn> は、<span class=\"chem\">c != 0</span>、<span class=\"chem\">ad - bc != 0</span> として <span class=\"chem\">f(x) = (ax + b)/(cx + d)</span> の形をとります（そうでないと <span class=\"chem\">f</span> は穴のあいた定数関数になります）。そのグラフは基本的な双曲線 <span class=\"chem\">y = 1/x</span> を平行移動・拡大したものであり、直交する 2 本の漸近線で特徴づけられます：",

    // Reciprocal and linear rational functions > data-def attribute
    "A function of the form f(x) = (ax + b)/(cx + d) with c ≠ 0 and ad − bc ≠ 0, whose graph is a rectangular hyperbola with one vertical and one horizontal asymptote.": "c ≠ 0、ad − bc ≠ 0 として f(x) = (ax + b)/(cx + d) の形で表される関数。グラフは鉛直漸近線と水平漸近線を 1 本ずつもつ直角双曲線になる。",

    // Reciprocal and linear rational functions > equation > dt
    "Vertical asymptote": "鉛直漸近線",

    // Reciprocal and linear rational functions > equation > dd
    "set denominator <span class=\"chem\">cx + d = 0</span> to get the line <span class=\"chem\">x = -d/c</span> (excluded from domain)": "分母 <span class=\"chem\">cx + d = 0</span> とおいて直線 <span class=\"chem\">x = -d/c</span> を得る（定義域から除外）",

    // Reciprocal and linear rational functions > equation > dt
    "Horizontal asymptote": "水平漸近線",

    // Reciprocal and linear rational functions > equation > dd
    "ratio of leading <span class=\"chem\">x</span>-coefficients as <span class=\"chem\">x -&gt; +-infty</span> gives the line <span class=\"chem\">y = a/c</span> (excluded from range)": "<span class=\"chem\">x -&gt; +-infty</span> のときの <span class=\"chem\">x</span> の係数の比から直線 <span class=\"chem\">y = a/c</span> を得る（値域から除外）",

    // Reciprocal and linear rational functions > equation > dt
    // widget string (assets/js/widgets-t2-2.js)
    "Axial intercepts": "座標軸との交点（切片）",

    // widget string (assets/js/widgets-t2-2.js)
    "hole": "穴",

    // widget string (assets/js/widgets-t2-2.js)
    "every x ≠ ": "すべての x ≠ ",

    // widget string (assets/js/widgets-t2-2.js)
    "hole at": "穴の位置",

    // widget string (assets/js/widgets-t2-2.js)
    "none: ad − bc = 0, so f is constant": "なし：ad − bc = 0 なので f は定数関数",

    // widget string (assets/js/widgets-t2-2.js)
    "a = 0 is not a quadratic: choose a ≠ 0": "a = 0 のときは 2 次関数ではありません：a ≠ 0 を選んでください",

    // Reciprocal and linear rational functions > equation > dd
    "<span class=\"chem\">y</span>-intercept at <span class=\"chem\">x = 0</span> gives <span class=\"chem\">(0, b/d)</span>; <span class=\"chem\">x</span>-intercept at <span class=\"chem\">y = 0</span> (<span class=\"chem\">ax + b = 0</span>) gives <span class=\"chem\">(-b/a, 0)</span>": "<span class=\"chem\">x = 0</span> で <span class=\"chem\">y</span> 切片 <span class=\"chem\">(0, b/d)</span>；<span class=\"chem\">y = 0</span>（<span class=\"chem\">ax + b = 0</span>）で <span class=\"chem\">x</span> 切片 <span class=\"chem\">(-b/a, 0)</span>",

    // Reciprocal and linear rational functions > common mistake > p
    "<strong>Common mistake — Writing an asymptote as a number instead of an equation:</strong> Writing <em>“Vertical asymptote = 2”</em> or <em>“HA = 3”</em> usually loses the mark: markschemes expect an equation. An asymptote is a straight line, so you <strong>must</strong> write the full equation <strong><span class=\"chem\">x = 2</span></strong> for a vertical asymptote and <strong><span class=\"chem\">y = 3</span></strong> for a horizontal asymptote.": "<strong>よくあるミス — 漸近線を方程式ではなく数値だけで書いてしまう：</strong> <em>「鉛直漸近線 = 2」</em>や<em>「HA = 3」</em>と書くと、たいてい点を失います。採点基準は方程式を求めているからです。漸近線は直線なので、鉛直漸近線は<strong>必ず</strong> <strong><span class=\"chem\">x = 2</span></strong>、水平漸近線は必ず <strong><span class=\"chem\">y = 3</span></strong> と方程式で書きましょう。",

    // Reciprocal and linear rational functions > widget > data-title attribute
    "Linear rational function explorer: f(x) = (ax + b) / (cx + d)": "1 次分数関数エクスプローラー：f(x) = (ax + b) / (cx + d)",

    // Reciprocal and linear rational functions > widget > figcaption
    "Adjust <span class=\"chem\">a, b, c, d</span> to see how the vertical asymptote <span class=\"chem\">x = -d/c</span>, horizontal asymptote <span class=\"chem\">y = a/c</span>, axial intercepts, and decomposed form <span class=\"chem\">A + B/(cx + d)</span> update in real time.": "<span class=\"chem\">a, b, c, d</span> を動かして、鉛直漸近線 <span class=\"chem\">x = -d/c</span>、水平漸近線 <span class=\"chem\">y = a/c</span>、軸との交点、および帯分数形 <span class=\"chem\">A + B/(cx + d)</span> がリアルタイムでどう変わるか確認しましょう。",

    // Reciprocal and linear rational functions > worked example > h3
    "Rewriting a rational function to identify asymptotes and intercepts": "分数関数を変形して漸近線と切片を求める",

    // Reciprocal and linear rational functions > worked example > p
    "The function <span class=\"chem\">f</span> is defined by <span class=\"chem\">f(x) = (3x - 5)/(x - 2)</span> for <span class=\"chem\">x != 2</span>.<br> (a) State the equations of the vertical and horizontal asymptotes of the graph of <span class=\"chem\">f</span>. <strong>[2 marks]</strong><br> (b) Express <span class=\"chem\">f(x)</span> in the form <span class=\"chem\">A + B/(x - 2)</span>, where <span class=\"chem\">A, B ∈ ℤ</span>. <strong>[2 marks]</strong>": "関数 <span class=\"chem\">f</span> が <span class=\"chem\">x != 2</span> に対して <span class=\"chem\">f(x) = (3x - 5)/(x - 2)</span> で定義されている。<br> (a) <span class=\"chem\">f</span> のグラフの鉛直漸近線と水平漸近線の方程式を述べなさい (State)。 <strong>[2 marks]</strong><br> (b) <span class=\"chem\">A, B ∈ ℤ</span> として <span class=\"chem\">f(x)</span> を <span class=\"chem\">A + B/(x - 2)</span> の形で表しなさい。 <strong>[2 marks]</strong>",

    // Reciprocal and linear rational functions > worked example > data-title attribute
    "Find the vertical and horizontal asymptotes as line equations": "鉛直漸近線と水平漸近線を直線の方程式として求める",

    // Reciprocal and linear rational functions > worked example > p
    "Set the denominator to 0 for the vertical asymptote, and take the ratio of x-coefficients for the horizontal asymptote.": "分母 = 0 から鉛直漸近線を、x の係数の比から水平漸近線を求めます。",

    // Reciprocal and linear rational functions > worked example > maths line
    "Vertical asymptote: <b><i>x</i> = 2</b> &nbsp; <b>[A1]</b>": "鉛直漸近線：<b><i>x</i> = 2</b> &nbsp; <b>[A1]</b>",

    // Reciprocal and linear rational functions > worked example > maths line
    "Horizontal asymptote: <b><i>y</i> = 3</b> &nbsp; (from <span class=\"chem\">3x / x</span>) &nbsp; <b>[A1]</b>": "水平漸近線：<b><i>y</i> = 3</b> &nbsp; （<span class=\"chem\">3x / x</span> より） &nbsp; <b>[A1]</b>",

    // Reciprocal and linear rational functions > worked example > data-title attribute
    "Rewrite the numerator in terms of (x − 2) and split the fraction": "分子を (x − 2) を用いて書き換え、分数を分ける",

    // Reciprocal and linear rational functions > worked example > p
    "Creating 3(x − 2) in the numerator lets (x − 2) cancel cleanly into the constant horizontal asymptote value A = 3.": "分子に 3(x − 2) を作ることで、(x − 2) が約分されて水平漸近線の定数 A = 3 がきれいに現れます。",

    // Reciprocal and linear rational functions > worked example > p
    "(a) VA: <span class=\"chem\">x = 2</span>, HA: <span class=\"chem\">y = 3</span>; (b) <span class=\"chem\">3 + 1/(x - 2)</span>": "(a) VA：<span class=\"chem\">x = 2</span>、HA：<span class=\"chem\">y = 3</span>；(b) <span class=\"chem\">3 + 1/(x - 2)</span>",

    // Reciprocal and linear rational functions > try it > p
    "The graph of <span class=\"chem\">f(x) = (4x + 7)/(2x + 5)</span> has a vertical asymptote with equation <span class=\"chem\">x = k</span>. Find the exact value of <span class=\"chem\">k</span>.": "<span class=\"chem\">f(x) = (4x + 7)/(2x + 5)</span> のグラフの鉛直漸近線の方程式が <span class=\"chem\">x = k</span> である。<span class=\"chem\">k</span> の厳密値（正確な値）を求めなさい (Find)。",

    // Reciprocal and linear rational functions > try it > li
    "A vertical asymptote occurs where the denominator equals zero (provided the numerator is non-zero there).": "鉛直漸近線は、分母が 0 になる場所（ただし分子が 0 でないとき）に現れます。",

    // Reciprocal and linear rational functions > try it > li
    "Solve <span class=\"chem\">2x + 5 = 0</span> for <span class=\"chem\">x</span>.": "<span class=\"chem\">2x + 5 = 0</span> を <span class=\"chem\">x</span> について解きます。",

    // Reciprocal and linear rational functions > try it > maths line
    "2<i>x</i> + 5 = 0 ⇒ 2<i>x</i> = −5 ⇒ <i>k</i> = <b>−2.5</b> (or −5/2)": "2<i>x</i> + 5 = 0 ⇒ 2<i>x</i> = −5 ⇒ <i>k</i> = <b>−2.5</b> （または −5/2）",

    // Exponential models, logarithmic graphs and GDC equation solv > data-toc attribute
    "Exp & log models": "指数・対数モデル",

    // Exponential models, logarithmic graphs and GDC equation solv > h2
    "Exponential models, logarithmic graphs and GDC equation solving": "指数モデル・対数グラフと GDC による方程式の求解",

    // Exponential models, logarithmic graphs and GDC equation solv > p
    "Exponential and logarithmic functions are <strong>inverse pairs</strong>: <span class=\"chem\">y = a^x</span> and <span class=\"chem\">y = log_a x</span> (and in particular <span class=\"chem\">y = e^x</span> and <span class=\"chem\">y = ln x</span>) are reflections of each other across the line <span class=\"chem\">y = x</span>.": "指数関数と対数関数は互いに<strong>逆関数のペア</strong>です：<span class=\"chem\">y = a^x</span> と <span class=\"chem\">y = log_a x</span>（特に <span class=\"chem\">y = e^x</span> と <span class=\"chem\">y = ln x</span>）は直線 <span class=\"chem\">y = x</span> に関して互いに対称です。",

    // Exponential models, logarithmic graphs and GDC equation solv > table > caption
    "Comparing shifted exponential and logarithmic graphs": "平行移動した指数関数と対数関数のグラフの比較",

    // Exponential models, logarithmic graphs and GDC equation solv > table > th
    "Feature": "特徴",

    // Exponential models, logarithmic graphs and GDC equation solv > table > th
    "Exponential model <span class=\"chem\">f(t) = A e^{kt} + C</span>": "指数モデル <span class=\"chem\">f(t) = A e^{kt} + C</span>",

    // Exponential models, logarithmic graphs and GDC equation solv > table > th
    "Logarithmic model <span class=\"chem\">g(x) = a ln(x - h) + d</span>": "対数モデル <span class=\"chem\">g(x) = a ln(x - h) + d</span>",

    // Exponential models, logarithmic graphs and GDC equation solv > table > th
    "Domain": "定義域",

    // Exponential models, logarithmic graphs and GDC equation solv > table > td
    "All real numbers <span class=\"chem\">t ∈ ℝ</span> (or <span class=\"chem\">t &gt;= 0</span> in time contexts)": "すべての実数 <span class=\"chem\">t ∈ ℝ</span>（時間の文脈では <span class=\"chem\">t &gt;= 0</span>）",

    // Exponential models, logarithmic graphs and GDC equation solv > table > td
    "Restricted: <span class=\"chem\">x - h &gt; 0 =&gt; x &gt; h</span>": "制限あり：<span class=\"chem\">x - h &gt; 0 =&gt; x &gt; h</span>",

    // Exponential models, logarithmic graphs and GDC equation solv > table > th
    "Range": "値域",

    // Exponential models, logarithmic graphs and GDC equation solv > table > td
    "Restricted: <span class=\"chem\">y &gt; C</span> (if <span class=\"chem\">A &gt; 0</span>) or <span class=\"chem\">y &lt; C</span> (if <span class=\"chem\">A &lt; 0</span>)": "制限あり：<span class=\"chem\">A &gt; 0</span> なら <span class=\"chem\">y &gt; C</span>、<span class=\"chem\">A &lt; 0</span> なら <span class=\"chem\">y &lt; C</span>",

    // Exponential models, logarithmic graphs and GDC equation solv > table > td
    "All real numbers <span class=\"chem\">y ∈ ℝ</span>": "すべての実数 <span class=\"chem\">y ∈ ℝ</span>",

    // Exponential models, logarithmic graphs and GDC equation solv > table > th
    "Asymptote": "漸近線",

    // Exponential models, logarithmic graphs and GDC equation solv > table > td
    "<strong>Horizontal asymptote <span class=\"chem\">y = C</span></strong> (since <span class=\"chem\">e^{kt} -&gt; 0</span> as <span class=\"chem\">kt -&gt; -infty</span>)": "<strong>水平漸近線 <span class=\"chem\">y = C</span></strong>（<span class=\"chem\">kt -&gt; -infty</span> で <span class=\"chem\">e^{kt} -&gt; 0</span> より）",

    // Exponential models, logarithmic graphs and GDC equation solv > table > td
    "<strong>Vertical asymptote <span class=\"chem\">x = h</span></strong> (where the log argument hits <span class=\"chem\">0</span>)": "<strong>鉛直漸近線 <span class=\"chem\">x = h</span></strong>（真数が <span class=\"chem\">0</span> になる場所）",

    // Exponential models, logarithmic graphs and GDC equation solv > table > th
    "Initial / key point": "初期値 / 代表点",

    // Exponential models, logarithmic graphs and GDC equation solv > table > td
    "At <span class=\"chem\">t = 0</span>, <span class=\"chem\">f(0) = A e^0 + C = A + C</span>": "<span class=\"chem\">t = 0</span> で <span class=\"chem\">f(0) = A e^0 + C = A + C</span>",

    // Exponential models, logarithmic graphs and GDC equation solv > table > td
    "When <span class=\"chem\">x - h = 1</span> (<span class=\"chem\">x = h + 1</span>), <span class=\"chem\">ln(1) = 0</span> so <span class=\"chem\">g(h + 1) = d</span>": "<span class=\"chem\">x - h = 1</span>（<span class=\"chem\">x = h + 1</span>）のとき <span class=\"chem\">ln(1) = 0</span> なので <span class=\"chem\">g(h + 1) = d</span>",

    // Exponential models, logarithmic graphs and GDC equation solv > exam tip (shown in English + translation) > p
    "<strong>Exam tip — Earning full marks on Paper 2 GDC intersection questions:</strong> When a Paper 2 question asks you to solve an equation like <span class=\"chem\">e^{-0.4x} = x^2 - 3</span> where x appears both inside an exponential/log and inside a polynomial, <strong>do not try to isolate <span class=\"chem\">x</span> algebraically</strong>—it is impossible! Instead, graph <span class=\"chem\">Y_1 = e^{-0.4x}</span> and <span class=\"chem\">Y_2 = x^2 - 3</span> on your GDC, <strong>draw a small labelled sketch</strong> showing the curves and their intersection point(s) in your answer booklet (this secures the <strong>[M1]</strong> method mark even if you misread a digit), and write the coordinates to 3 s.f.": "<strong>試験のコツ — Paper 2 の GDC 交点問題で満点を取る方法：</strong> Paper 2 で <span class=\"chem\">e^{-0.4x} = x^2 - 3</span> のように x が指数・対数の中と多項式の両方に現れる方程式を解くときは、<strong><span class=\"chem\">x</span> について代数的に解こうとしてはいけません</strong>（不可能です！）。代わりに GDC で <span class=\"chem\">Y_1 = e^{-0.4x}</span> と <span class=\"chem\">Y_2 = x^2 - 3</span> を描き、答案用紙に曲線と交点を示す<strong>ラベル付きの小さな概形</strong>を描いて（数値を 1 桁読み間違えても方法点 <strong>[M1]</strong> が確保できます）、座標を有効数字 3 桁で書きましょう。",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > h3
    "Modelling Newton's cooling with an exponential decay function": "指数減衰関数によるニュートンの冷却法則のモデリング",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > p
    "The temperature <span class=\"chem\">T</span> (in <span class=\"unit\">°C</span>) of a cup of coffee <span class=\"chem\">t</span> minutes after it is poured is modelled by <span class=\"chem\">T(t) = 22 + 68 e^{-0.08t}</span> for <span class=\"chem\">t &gt;= 0</span>.<br> (a) Write down the initial temperature of the coffee and the room temperature it approaches after a very long time. <strong>[2 marks]</strong><br> (b) Find the exact time <span class=\"chem\">t</span> when the coffee reaches <span class=\"chem\">56</span> <span class=\"unit\">°C</span>, giving your answer in the form <span class=\"chem\">a ln 2</span>. <strong>[3 marks]</strong>": "注いでから <span class=\"chem\">t</span> 分後のコーヒーの温度 <span class=\"chem\">T</span>（<span class=\"unit\">°C</span>）が <span class=\"chem\">t &gt;= 0</span> に対して <span class=\"chem\">T(t) = 22 + 68 e^{-0.08t}</span> でモデル化されている。<br> (a) コーヒーの初期温度と、十分に時間が経過した後に近づく室温を答えなさい (Write down)。 <strong>[2 marks]</strong><br> (b) コーヒーが <span class=\"chem\">56</span> <span class=\"unit\">°C</span> に達する正確な時刻 <span class=\"chem\">t</span> を <span class=\"chem\">a ln 2</span> の形で求めなさい (Find)。 <strong>[3 marks]</strong>",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > data-title attribute
    "Evaluate t = 0 for initial temperature and t → ∞ for limiting temperature": "t = 0 で初期温度、t → ∞ で極限温度を求める",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > p
    "At t = 0, e⁰ = 1; as t → ∞, e^(−0.08t) → 0, leaving the horizontal asymptote T = 22.": "t = 0 で e⁰ = 1、t → ∞ で e^(−0.08t) → 0 となり、水平漸近線 T = 22 が残ります。",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > maths line
    "Initial temperature: <i>T</i>(0) = 22 + 68(1) = <b>90 °C</b> &nbsp; <b>[A1]</b>": "初期温度：<i>T</i>(0) = 22 + 68(1) = <b>90 °C</b> &nbsp; <b>[A1]</b>",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > maths line
    "Long-term room temperature (as <i>t</i> → ∞): <b>22 °C</b> &nbsp; <b>[A1]</b>": "長期的な室温（<i>t</i> → ∞ のとき）：<b>22 °C</b> &nbsp; <b>[A1]</b>",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > data-title attribute
    "Isolate the exponential term e^(−0.08t) before taking natural logs": "自然対数をとる前に指数項 e^(−0.08t) を孤立させる",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > p
    "Always subtract 22 and divide by 68 BEFORE applying ln to both sides.": "両辺に ln をとる前に、必ず 22 を引いて 68 で割ります。",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > data-title attribute
    "Take natural logs and use ln(1/2) = −ln 2": "自然対数をとり、ln(1/2) = −ln 2 を使う",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > p
    "Writing ln(1/2) = −ln 2 cancels the negative sign and gives the exact form a ln 2.": "ln(1/2) = −ln 2 と書くことで負号が消え、正確な形 a ln 2 が得られます。",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > maths line
    "−0.08<i>t</i> = ln(1/2) = −ln 2 ⇒ <i>t</i> = <span class=\"frac\"><span>ln 2</span><span>0.08</span></span> = <b>12.5 ln 2</b> (or <span class=\"frac\"><span>25</span><span>2</span></span> ln 2) minutes &nbsp; <b>[A1]</b>": "−0.08<i>t</i> = ln(1/2) = −ln 2 ⇒ <i>t</i> = <span class=\"frac\"><span>ln 2</span><span>0.08</span></span> = <b>12.5 ln 2</b> （または <span class=\"frac\"><span>25</span><span>2</span></span> ln 2）分 &nbsp; <b>[A1]</b>",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > p
    "(a) Initial: <span class=\"chem\">90</span> <span class=\"unit\">°C</span>, Long-term: <span class=\"chem\">22</span> <span class=\"unit\">°C</span>; (b) <span class=\"chem\">t = 12.5 ln 2</span> minutes": "(a) 初期：<span class=\"chem\">90</span> <span class=\"unit\">°C</span>、長期：<span class=\"chem\">22</span> <span class=\"unit\">°C</span>；(b) <span class=\"chem\">t = 12.5 ln 2</span> 分",

    // Exponential models, logarithmic graphs and GDC equation solv > try it > p
    "Using your GDC, find the positive root of the equation <span class=\"chem\">e^x = 6 - x^2</span>, giving your answer correct to 3 significant figures.": "GDC を用いて方程式 <span class=\"chem\">e^x = 6 - x^2</span> の正の解を求め (Find)、有効数字 3 桁で答えなさい。",

    // Exponential models, logarithmic graphs and GDC equation solv > try it > li
    "Plot <span class=\"chem\">Y_1 = e^x</span> and <span class=\"chem\">Y_2 = 6 - x^2</span> on your GDC (or find the positive zero of <span class=\"chem\">f(x) = e^x + x^2 - 6</span>).": "GDC で <span class=\"chem\">Y_1 = e^x</span> と <span class=\"chem\">Y_2 = 6 - x^2</span> を描きます（または <span class=\"chem\">f(x) = e^x + x^2 - 6</span> の正の零点を求めます）。",

    // Exponential models, logarithmic graphs and GDC equation solv > try it > li
    "Use the GDC intersection tool in the first quadrant (<span class=\"chem\">x &gt; 0</span>) and round <span class=\"chem\">x ≈ 1.39778</span> to 3 significant figures.": "第 1 象限（<span class=\"chem\">x &gt; 0</span>）で GDC の交点機能を使い、<span class=\"chem\">x ≈ 1.39778</span> を有効数字 3 桁に丸めます。",

    // Exponential models, logarithmic graphs and GDC equation solv > try it > maths line
    "Intersecting <i>y</i> = <i>e</i><sup><i>x</i></sup> and <i>y</i> = 6 − <i>x</i><sup>2</sup> for <i>x</i> &gt; 0 gives (1.398, 4.046) ⇒ <i>x</i> = <b>1.40</b> (3 s.f.).": "<i>y</i> = <i>e</i><sup><i>x</i></sup> と <i>y</i> = 6 − <i>x</i><sup>2</sup> の <i>x</i> &gt; 0 での交点を求めると (1.398, 4.046) ⇒ <i>x</i> = <b>1.40</b> （有効数字 3 桁）。",

    // Exponential models, logarithmic graphs and GDC equation solv > not needed for IB > p
    "<strong>Not needed for IB:</strong> You do not need focus-directrix definitions of parabolas, standard equations of ellipses (<span class=\"chem\">x^2/a^2 + y^2/b^2 = 1</span>) or hyperbolas (<span class=\"chem\">x^2/a^2 - y^2/b^2 = 1</span>), or the Lambert <span class=\"chem\">W</span>-function for solving <span class=\"chem\">x e^x = c</span> analytically.": "<strong>IB の範囲外：</strong> 放物線の焦点と準線による定義、楕円（<span class=\"chem\">x^2/a^2 + y^2/b^2 = 1</span>）や双曲線（<span class=\"chem\">x^2/a^2 - y^2/b^2 = 1</span>）の標準方程式、あるいは <span class=\"chem\">x e^x = c</span> を解析的に解くランベルトの <span class=\"chem\">W</span> 関数は不要です。",

    // Quick practice > data-toc attribute
    "Practice": "演習問題",

    // Quick practice > h2
    "Quick practice": "確認問題",

    // widget string (assets/js/widgets-t2-2.js)
    "Coefficient a": "係数 a",

    // widget string (assets/js/widgets-t2-2.js)
    "Coefficient b": "係数 b",

    // widget string (assets/js/widgets-t2-2.js)
    "Constant c": "定数 c",

    // widget string (assets/js/widgets-t2-2.js)
    "Line gradient m (y = mx)": "直線の傾き m (y = mx)",

    // widget string (assets/js/widgets-t2-2.js)
    "Tangent (Δ = 0)": "接線 (Δ = 0)",

    // widget string (assets/js/widgets-t2-2.js)
    "Always positive (Δ < 0)": "常に正 (Δ < 0)",

    // widget string (assets/js/widgets-t2-2.js)
    "Parabola vertex & axis": "放物線の頂点と対称軸",

    // widget string (assets/js/widgets-t2-2.js)
    "Intersection equation f(x) = mx": "交点の方程式 f(x) = mx",

    // widget string (assets/js/widgets-t2-2.js)
    "Discriminant Δ = B² − 4AC": "判別式 Δ = B² − 4AC",

    // widget string (assets/js/widgets-t2-2.js)
    "Geometric interpretation": "幾何学的解釈",

    // widget string (assets/js/widgets-t2-2.js)
    "Δ = 0 → 1 repeated real root (line is tangent at x =": "Δ = 0 → 1 つの重解（直線は次で接する x =",

    // widget string (assets/js/widgets-t2-2.js)
    "Δ > 0 → 2 distinct real intersections (x =": "Δ > 0 → 2 つの異なる実交点 (x =",

    // widget string (assets/js/widgets-t2-2.js)
    "Δ < 0 → 0 real intersections (curve and line never meet)": "Δ < 0 → 実交点 0 個（曲線と直線は交わらない）",

    // widget string (assets/js/widgets-t2-2.js)
    "Parabola y = ax² + bx + c and line y = mx": "放物線 y = ax² + bx + c と直線 y = mx",

    // widget string (assets/js/widgets-t2-2.js)
    "Numerator a (in ax + b)": "分子 a (ax + b の)",

    // widget string (assets/js/widgets-t2-2.js)
    "Numerator b (in ax + b)": "分子 b (ax + b の)",

    // widget string (assets/js/widgets-t2-2.js)
    "Denominator c (in cx + d)": "分母 c (cx + d の)",

    // widget string (assets/js/widgets-t2-2.js)
    "Denominator d (in cx + d)": "分母 d (cx + d の)",

    // widget string (assets/js/widgets-t2-2.js)
    "Vertical asymptote (VA)": "鉛直漸近線 (VA)",

    // widget string (assets/js/widgets-t2-2.js)
    "Horizontal asymptote (HA)": "水平漸近線 (HA)",

    // widget string (assets/js/widgets-t2-2.js)
    "Decomposed form A + B/(cx + d)": "帯分数形 A + B/(cx + d)",

    // widget string (assets/js/widgets-t2-2.js)
    "Graph of rational function f(x) = (ax + b)/(cx + d) with asymptotes": "分数関数 f(x) = (ax + b)/(cx + d) のグラフと漸近線",

  }
});
