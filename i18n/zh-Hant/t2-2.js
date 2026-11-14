/* t2-2 — zh-Hant translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't2-2', {
  strings: {

    // page title (browser tab)
    "2.2 Quadratics, rational, exponential and log models | Analysis Lab": "2.2 二次函數、有理函數、指數與對數模型 | Analysis Lab",

    // Quadratics, rational, exponential and log models > page header > p
    "Topic 2.2 · SL 2.6–2.10": "課題 2.2 · SL 2.6–2.10",

    // Quadratics, rational, exponential and log models > page header > h1
    "Quadratics, rational, exponential and log models": "二次函數、有理函數、指數與對數模型",

    // Quadratics, rational, exponential and log models > page header > span
    "How do algebraic parameters control turning points, root counts, and asymptotes across the core families of mathematical models?": "代數參數如何控制核心數學模型族的極值點、根的數目與漸近線？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "學習清單",

    // What you need to be able to do > h2
    "What you need to be able to do": "你需要掌握的能力",

    // What you need to be able to do > checklist > span
    "Convert quadratics between standard form <span class=\"chem\">ax^2 + bx + c</span>, vertex form <span class=\"chem\">a(x - h)^2 + k</span> (by completing the square), and factored form <span class=\"chem\">a(x - p)(x - q)</span>.": "在一般式 <span class=\"chem\">ax^2 + bx + c</span>、頂點式 <span class=\"chem\">a(x - h)^2 + k</span>（透過配方法）與因式分解式 <span class=\"chem\">a(x - p)(x - q)</span> 之間轉換二次函數。",

    // What you need to be able to do > checklist > span
    "Use the discriminant <span class=\"chem\">Delta = b^2 - 4ac</span> to determine the number of real roots or line-curve intersections (<span class=\"chem\">Delta &gt; 0</span>, <span class=\"chem\">Delta = 0</span>, <span class=\"chem\">Delta &lt; 0</span>, <span class=\"chem\">Delta &gt;= 0</span>).": "運用判別式 <span class=\"chem\">Delta = b^2 - 4ac</span> 判斷實根或直線與曲線交點的數目（<span class=\"chem\">Delta &gt; 0</span>、<span class=\"chem\">Delta = 0</span>、<span class=\"chem\">Delta &lt; 0</span>、<span class=\"chem\">Delta &gt;= 0</span>）。",

    // What you need to be able to do > checklist > span
    "Solve quadratic inequalities (including parameters inside <span class=\"chem\">Delta</span>) by sketching the parabola or drawing a sign diagram.": "透過描繪拋物線略圖或繪製正負號圖，解二次不等式（包括 <span class=\"chem\">Delta</span> 內含參數的情況）。",

    // What you need to be able to do > checklist > span
    "Sketch linear rational functions <span class=\"chem\">f(x) = (ax + b)/(cx + d)</span>, stating the equations of the vertical asymptote <span class=\"chem\">x = -d/c</span> and horizontal asymptote <span class=\"chem\">y = a/c</span>.": "描繪一次有理函數 <span class=\"chem\">f(x) = (ax + b)/(cx + d)</span> 的圖像，並寫出鉛垂漸近線 <span class=\"chem\">x = -d/c</span> 與水平漸近線 <span class=\"chem\">y = a/c</span> 的方程。",

    // What you need to be able to do > checklist > span
    "Model growth and decay with <span class=\"chem\">f(t) = a e^{kt} + c</span> and sketch logarithmic graphs <span class=\"chem\">y = ln(x - h)</span> with their asymptotes and intercepts.": "利用 <span class=\"chem\">f(t) = a e^{kt} + c</span> 建立增長與衰減模型，並描繪對數圖像 <span class=\"chem\">y = ln(x - h)</span> 及其漸近線與截距。",

    // What you need to be able to do > checklist > span
    "Solve transcendental equations <span class=\"chem\">f(x) = g(x)</span> on Paper 2 using GDC graph intersections and sketch the curves to earn method marks.": "在 Paper 2 利用 GDC 圖像交點解超越方程 <span class=\"chem\">f(x) = g(x)</span>，並描繪曲線略圖以取得方法分。",

    // Question decoder: spotting disguised discriminant &amp; mode > data-toc attribute
    "Question decoder": "題型解碼",

    // Question decoder: spotting disguised discriminant &amp; mode > h2
    "Question decoder: spotting disguised discriminant &amp; modelling cues": "題型解碼：辨識隱藏的判別式與建模提示",

    // Question decoder: spotting disguised discriminant &amp; mode > p
    "More than half of Paper 1 quadratic questions never use the word “discriminant”—they disguise <span class=\"chem\">Delta = b^2 - 4ac</span> behind geometric words like <em>tangent</em>, <em>never meets</em>, or <em>always positive</em>.": "超過一半的 Paper 1 二次函數題目從不直接寫出「判別式」一詞——它們會把 <span class=\"chem\">Delta = b^2 - 4ac</span> 隱藏在<em>相切</em>、<em>永不相交</em>或<em>恒為正</em>等幾何字眼背後。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > caption
    "Question decoder — Quadratics, rational functions, exponentials &amp; GDC solving": "題型解碼 — 二次函數、有理函數、指數函數與 GDC 解題",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "What the exam question says": "題目中的常見字眼",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "What it means (formula &amp; setup)": "實際含義（公式與列式）",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1（不可用計算機）與 Paper 2（可用 GDC）策略",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "“Two distinct real roots” / “Line intersects the curve twice”": "「兩個相異實根」／「直線與曲線相交兩次」",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Equate <span class=\"chem\">f(x) = g(x)</span>, rearrange to <span class=\"chem\">Ax^2 + Bx + C = 0</span>, and set <strong><span class=\"chem\">Delta = B^2 - 4AC &gt; 0</span></strong>.": "令 <span class=\"chem\">f(x) = g(x)</span>，整理成 <span class=\"chem\">Ax^2 + Bx + C = 0</span>，並設 <strong><span class=\"chem\">Delta = B^2 - 4AC &gt; 0</span></strong>。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "If <span class=\"chem\">Delta &gt; 0</span> gives a quadratic inequality in <span class=\"chem\">k</span>, sketch a mini parabola in <span class=\"chem\">k</span> to pick the right intervals!": "若 <span class=\"chem\">Delta &gt; 0</span> 得出關於 <span class=\"chem\">k</span> 的二次不等式，描繪一條關於 <span class=\"chem\">k</span> 的小拋物線以選出正確區間！",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "“Touches the <span class=\"chem\">x</span>-axis” / “Line is tangent to the parabola” / “Equal (repeated) root”": "「與 <span class=\"chem\">x</span> 軸相切」／「直線與拋物線相切」／「等根（重根）」",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Rearrange to <span class=\"chem\">Ax^2 + Bx + C = 0</span> and set <strong><span class=\"chem\">Delta = B^2 - 4AC = 0</span></strong>.": "整理成 <span class=\"chem\">Ax^2 + Bx + C = 0</span> 並設 <strong><span class=\"chem\">Delta = B^2 - 4AC = 0</span></strong>。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Setting <span class=\"chem\">Delta = 0</span> is much faster than using derivatives when an unknown parameter <span class=\"chem\">k</span> appears in multiple terms.": "當未知參數 <span class=\"chem\">k</span> 出現在多項中時，設 <span class=\"chem\">Delta = 0</span> 比求導快得多。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "“No real roots” / “Line never meets the curve” / “Always positive for all <span class=\"chem\">x in R</span>”": "「沒有實根」／「直線與曲線永不相交」／「對所有 <span class=\"chem\">x in R</span> 恒正」",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Set <strong><span class=\"chem\">Delta = B^2 - 4AC &lt; 0</span></strong> (and require leading coefficient <strong><span class=\"chem\">a &gt; 0</span></strong> for “always positive”, or <span class=\"chem\">a &lt; 0</span> for “always negative”).": "設 <strong><span class=\"chem\">Delta = B^2 - 4AC &lt; 0</span></strong>（若為「恒正」須同時滿足首項係數 <strong><span class=\"chem\">a &gt; 0</span></strong>；「恒負」則須 <span class=\"chem\">a &lt; 0</span>）。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Remember: a parabola lies entirely above the <span class=\"chem\">x</span>-axis if and only if it opens upwards (<span class=\"chem\">a &gt; 0</span>) <em>and</em> never crosses the axis (<span class=\"chem\">Delta &lt; 0</span>).": "緊記：拋物線完全位於 <span class=\"chem\">x</span> 軸上方，當且僅當它開口向上（<span class=\"chem\">a &gt; 0</span>）<em>且</em>永不與軸相交（<span class=\"chem\">Delta &lt; 0</span>）。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "“The equation has real roots”": "「方程有實根」",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Could be 1 repeated root <em>or</em> 2 distinct roots: set <strong><span class=\"chem\">Delta = b^2 - 4ac &gt;= 0</span></strong> (non-strict!).": "可能是 1 個重根<em>或</em> 2 個相異根：設 <strong><span class=\"chem\">Delta = b^2 - 4ac &gt;= 0</span></strong>（非嚴格大於！）。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Watch the wording carefully: “real roots” (<span class=\"chem\">Delta &gt;= 0</span>) vs “two distinct real roots” (<span class=\"chem\">Delta &gt; 0</span>).": "小心留意字眼：「實根」（<span class=\"chem\">Delta &gt;= 0</span>）與「兩個相異實根」（<span class=\"chem\">Delta &gt; 0</span>）不同。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "“Solve <span class=\"chem\">ax^2 + bx + c &gt; 0</span> (or <span class=\"chem\">&lt;= 0</span>)”": "「解 <span class=\"chem\">ax^2 + bx + c &gt; 0</span>（或 <span class=\"chem\">&lt;= 0</span>）」",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Factor to find the roots <span class=\"chem\">p, q</span>, then <strong>always sketch the parabola</strong> or a sign diagram.": "因式分解求根 <span class=\"chem\">p, q</span>，然後<strong>務必描繪拋物線略圖</strong>或正負號圖。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Never write <span class=\"chem\">x &gt; +-3</span>! For <span class=\"chem\">a &gt; 0</span>: <span class=\"chem\">&lt; 0</span> is <em>between</em> the roots (<span class=\"chem\">p &lt; x &lt; q</span>); <span class=\"chem\">&gt; 0</span> is <em>outside</em> the roots (<span class=\"chem\">x &lt; p</span> or <span class=\"chem\">x &gt; q</span>).": "切勿寫成 <span class=\"chem\">x &gt; +-3</span>！當 <span class=\"chem\">a &gt; 0</span> 時：<span class=\"chem\">&lt; 0</span> 在兩根<em>之間</em>（<span class=\"chem\">p &lt; x &lt; q</span>）；<span class=\"chem\">&gt; 0</span> 在兩根<em>之外</em>（<span class=\"chem\">x &lt; p</span> 或 <span class=\"chem\">x &gt; q</span>）。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "“Find the initial population / temperature”": "「求初始種群數量／初始溫度」",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Substitute <strong><span class=\"chem\">t = 0</span></strong> into the model and use <span class=\"chem\">b^0 = 1</span> or <span class=\"chem\">e^0 = 1</span>.": "把 <strong><span class=\"chem\">t = 0</span></strong> 代入模型並使用 <span class=\"chem\">b^0 = 1</span> 或 <span class=\"chem\">e^0 = 1</span>。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "In <span class=\"chem\">P(t) = A + B e^{-kt}</span>, the initial value is <span class=\"chem\">P(0) = A + B</span>, <em>not</em> <span class=\"chem\">A</span> and <em>not</em> <span class=\"chem\">B</span> alone!": "在 <span class=\"chem\">P(t) = A + B e^{-kt}</span> 中，初始值為 <span class=\"chem\">P(0) = A + B</span>，<em>不是</em> <span class=\"chem\">A</span>，也<em>不是</em>單獨的 <span class=\"chem\">B</span>！",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "“Find the long-term / limiting value as <span class=\"chem\">t -&gt; infty</span>”": "「求當 <span class=\"chem\">t -&gt; infty</span> 時的長期／極限值」",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Horizontal asymptote of the decay/growth model: since <span class=\"chem\">e^{-kt} -&gt; 0</span> (for <span class=\"chem\">k &gt; 0</span>), <span class=\"chem\">P(t) -&gt; A</span>.": "衰減／增長模型的水平漸近線：由於（當 <span class=\"chem\">k &gt; 0</span> 時）<span class=\"chem\">e^{-kt} -&gt; 0</span>，故 <span class=\"chem\">P(t) -&gt; A</span>。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Write <em>“As <span class=\"chem\">t -&gt; infty, e^{-kt} -&gt; 0</span>”</em> explicitly if the question says <em>Explain</em> or <em>Show that</em>.": "若題目寫有<em>Explain</em> 或 <em>Show that</em>，必須明確寫出<em>「當 <span class=\"chem\">t -&gt; infty, e^{-kt} -&gt; 0</span>」</em>。",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "“Solve <span class=\"chem\">e^x = 5 - x^2</span>”": "「解 <span class=\"chem\">e^x = 5 - x^2</span>」",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Mixed exponential + polynomial equation has no algebraic closed form. Use <strong>Paper 2 GDC graph intersection</strong>!": "混合指數與多項式的方程沒有代數解析解，請使用 <strong>Paper 2 GDC 圖像求交點</strong>！",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Plot <span class=\"chem\">Y_1 = e^x</span> and <span class=\"chem\">Y_2 = 5 - x^2</span> (or <span class=\"chem\">Y_1 = e^x + x^2 - 5</span> zeroes). Draw a quick sketch showing the intersections to secure <strong>[M1]</strong>.": "繪出 <span class=\"chem\">Y_1 = e^x</span> 與 <span class=\"chem\">Y_2 = 5 - x^2</span>（或 <span class=\"chem\">Y_1 = e^x + x^2 - 5</span> 的零點）。在答題簿繪出顯示交點的略圖以穩取 <strong>[M1]</strong>。",

    // Quadratic forms, completing the square and the discriminant > data-toc attribute
    "Quadratics & Δ": "二次函數與 Δ",

    // Quadratic forms, completing the square and the discriminant > h2
    "Quadratic forms, completing the square and the discriminant": "二次函數形式、配方法與判別式",

    // Quadratic forms, completing the square and the discriminant > p
    "Every quadratic function <span class=\"chem\">f(x) = ax^2 + bx + c</span> (<span class=\"chem\">a != 0</span>) graphs as a symmetrical parabola. Depending on what the question gives or asks for, you should pick the most direct of the three quadratic forms:": "每個二次函數 <span class=\"chem\">f(x) = ax^2 + bx + c</span>（<span class=\"chem\">a != 0</span>）的圖像都是一條對稱拋物線。視乎題目所給或所求的資訊，你應選用三種二次函數形式中最直接的一種：",

    // Quadratic forms, completing the square and the discriminant > table > caption
    "The three quadratic forms and what each reveals immediately": "三種二次函數形式及其直接顯示的資訊",

    // Quadratic forms, completing the square and the discriminant > table > th
    "Form": "形式",

    // Quadratic forms, completing the square and the discriminant > table > th
    "Equation": "方程",

    // Quadratic forms, completing the square and the discriminant > table > th
    "What you can read off immediately": "可直接讀出的資訊",

    // Quadratic forms, completing the square and the discriminant > table > th
    "Standard form": "一般式（標準式）",

    // Quadratic forms, completing the square and the discriminant > table > td
    "<span class=\"chem\">f(x) = ax^2 + bx + c</span>": "<span class=\"chem\">f(x) = ax^2 + bx + c</span>",

    // Quadratic forms, completing the square and the discriminant > table > td
    "<span class=\"chem\">y</span>-intercept at <span class=\"chem\">(0, c)</span>; axis of symmetry <span class=\"chem\">x = -b / (2a)</span>; concavity (<span class=\"chem\">a &gt; 0</span> opens up, <span class=\"chem\">a &lt; 0</span> opens down).": "<span class=\"chem\">y</span> 軸截距為 <span class=\"chem\">(0, c)</span>；對稱軸為 <span class=\"chem\">x = -b / (2a)</span>；開口方向（<span class=\"chem\">a &gt; 0</span> 向上，<span class=\"chem\">a &lt; 0</span> 向下）。",

    // Quadratic forms, completing the square and the discriminant > table > th
    "Vertex (completed square) form": "頂點式（配方形式）",

    // Quadratic forms, completing the square and the discriminant > table > td
    "Vertex (turning point) at <span class=\"chem\">(h, k)</span>; axis of symmetry <span class=\"chem\">x = h</span>; range is <span class=\"chem\">y &gt;= k</span> (if <span class=\"chem\">a &gt; 0</span>) or <span class=\"chem\">y &lt;= k</span> (if <span class=\"chem\">a &lt; 0</span>).": "頂點（極值點）為 <span class=\"chem\">(h, k)</span>；對稱軸為 <span class=\"chem\">x = h</span>；值域為 <span class=\"chem\">y &gt;= k</span>（若 <span class=\"chem\">a &gt; 0</span>）或 <span class=\"chem\">y &lt;= k</span>（若 <span class=\"chem\">a &lt; 0</span>）。",

    // Quadratic forms, completing the square and the discriminant > table > th
    "Factored (intercept) form": "因式分解式（截距式）",

    // Quadratic forms, completing the square and the discriminant > table > td
    "<span class=\"chem\">x</span>-intercepts (roots) at <span class=\"chem\">(p, 0)</span> and <span class=\"chem\">(q, 0)</span>; axis of symmetry halfway between roots at <span class=\"chem\">x = (p + q) / 2</span>.": "<span class=\"chem\">x</span> 軸截距（根）為 <span class=\"chem\">(p, 0)</span> 及 <span class=\"chem\">(q, 0)</span>；對稱軸位於兩根正中 <span class=\"chem\">x = (p + q) / 2</span>。",

    // Quadratic forms, completing the square and the discriminant > h3
    "Completing the square when <span class=\"chem\">a != 1</span>": "當 <span class=\"chem\">a != 1</span> 時的配方法",

    // Quadratic forms, completing the square and the discriminant > p
    "To convert <span class=\"chem\">ax^2 + bx + c</span> into vertex form <span class=\"chem\">a(x - h)^2 + k</span> without making sign errors, <strong>factor <span class=\"chem\">a</span> out of the first two terms only</strong>, halve the coefficient of <span class=\"chem\">x</span>, and remember to multiply the subtracted square by <span class=\"chem\">a</span> when bringing it outside the bracket:": "要把 <span class=\"chem\">ax^2 + bx + c</span> 轉化為頂點式 <span class=\"chem\">a(x - h)^2 + k</span> 而不出正負號錯誤，<strong>只從前兩項抽出 <span class=\"chem\">a</span></strong>，把 <span class=\"chem\">x</span> 的係數減半，並緊記把減去的平方項移出括號外時要乘以 <span class=\"chem\">a</span>：",

    // Quadratic forms, completing the square and the discriminant > equation > dd
    "shortcut check: <span class=\"chem\">h = -(-12)/(2 × 2) = 3</span> and <span class=\"chem\">k = f(3) = 2(9) - 36 + 11 = -7</span>": "快速驗算：<span class=\"chem\">h = -(-12)/(2 × 2) = 3</span> 及 <span class=\"chem\">k = f(3) = 2(9) - 36 + 11 = -7</span>",

    // Quadratic forms, completing the square and the discriminant > equation > dt
    "Δ = b<sup>2</sup> − 4ac": "Δ = b<sup>2</sup> − 4ac",

    // Quadratic forms, completing the square and the discriminant > equation > dd
    "<dfn data-def=\"The quantity Δ = b² − 4ac under the square root in the quadratic formula, which determines the number and nature of roots.\">discriminant</dfn>: <span class=\"chem\">Delta &gt; 0</span> (2 distinct real roots), <span class=\"chem\">Delta = 0</span> (1 repeated root), <span class=\"chem\">Delta &lt; 0</span> (no real roots)": "<dfn data-def=\"二次公式平方根內的數值 Δ = b² − 4ac，用以決定根的數目與性質。\">判別式 <span class=\"en-term\">(discriminant)</span></dfn>：<span class=\"chem\">Delta &gt; 0</span>（2 個相異實根）、<span class=\"chem\">Delta = 0</span>（1 個重根）、<span class=\"chem\">Delta &lt; 0</span>（無實根）",

    // Quadratic forms, completing the square and the discriminant > equation > data-def attribute
    "The quantity Δ = b² − 4ac under the square root in the quadratic formula, which determines the number and nature of roots.": "二次公式平方根內的數值 Δ = b² − 4ac，用以決定根的數目與性質。",

    // Quadratic forms, completing the square and the discriminant > widget > data-title attribute
    "Interactive quadratic & line-parabola discriminant lab": "互動二次函數與直線－拋物線判別式實驗室",

    // Quadratic forms, completing the square and the discriminant > widget > figcaption
    "Adjust the quadratic coefficients <span class=\"chem\">a, b, c</span> and optional line <span class=\"chem\">y = mx + d</span> to see how the discriminant <span class=\"chem\">Delta</span> controls the number of intersections and the vertex <span class=\"chem\">(h, k)</span>.": "調校二次係數 <span class=\"chem\">a, b, c</span> 及直線 <span class=\"chem\">y = mx + d</span>，觀察判別式 <span class=\"chem\">Delta</span> 如何控制交點數目與頂點 <span class=\"chem\">(h, k)</span>。",

    // Quadratic forms, completing the square and the discriminant > worked example > h3
    "Solving a disguised discriminant inequality for a tangent/non-intersecting line": "解隱藏判別式不等式（直線與拋物線相切／不相交）",

    // Quadratic forms, completing the square and the discriminant > worked example > p
    "Consider the quadratic curve <span class=\"chem\">y = x^2 + (k - 2)x + 5</span> and the straight line <span class=\"chem\">y = 2x + 1</span>, where <span class=\"chem\">k in R</span>. Find the set of values of <span class=\"chem\">k</span> for which the line and the curve <strong>never intersect</strong>. <strong>[5 marks]</strong>": "考慮二次曲線 <span class=\"chem\">y = x^2 + (k - 2)x + 5</span> 與直線 <span class=\"chem\">y = 2x + 1</span>，其中 <span class=\"chem\">k in R</span>。求 (Find) 使該直線與曲線<strong>永不相交</strong>的 <span class=\"chem\">k</span> 值範圍。<strong>[5 marks]</strong>",

    // Quadratic forms, completing the square and the discriminant > worked example > data-title attribute
    "Equate the curve and line and rearrange to Ax² + Bx + C = 0": "令曲線與直線相等並整理為 Ax² + Bx + C = 0",

    // Quadratic forms, completing the square and the discriminant > worked example > p
    "Intersections occur where both y-values are equal; standard quadratic form lets us identify A, B, and C.": "交點出現在兩者的 y 值相等處；標準二次式讓我們辨識出 A、B 與 C。",

    // Quadratic forms, completing the square and the discriminant > worked example > data-title attribute
    "Set the discriminant Δ < 0 for no real intersections": "設判別式 Δ < 0 以確保沒有實數交點",

    // Quadratic forms, completing the square and the discriminant > worked example > p
    "The line and parabola never meet if and only if the intersection equation has no real roots.": "直線與拋物線永不相交，當且僅當交點方程沒有實根。",

    // Quadratic forms, completing the square and the discriminant > worked example > data-title attribute
    "Find the critical values and use a parabolic sketch to write the interval": "求臨界值並利用拋物線略圖寫出區間",

    // Quadratic forms, completing the square and the discriminant > worked example > p
    "Difference of two squares (or expanding k² − 8k &lt; 0) gives critical values k = 0 and k = 8. Since this quadratic in k opens upwards, it is negative between the roots.": "平方差（或展開 k² − 8k &lt; 0）得出臨界值 k = 0 與 k = 8。由於這條關於 k 的拋物線開口向上，在兩根之間為負。",

    // Quadratic forms, completing the square and the discriminant > worked example > maths line
    "<i>k</i>(<i>k</i> − 8) &lt; 0 ⇒ critical values <i>k</i> = 0, 8 &nbsp; <b>[(A1)]</b>": "<i>k</i>(<i>k</i> − 8) &lt; 0 ⇒ 臨界值 <i>k</i> = 0, 8 &nbsp; <b>[(A1)]</b>",

    // Quadratic forms, completing the square and the discriminant > try it > p
    "The quadratic function <span class=\"chem\">f(x) = 2x^2 - 6x + k</span> has <strong>one repeated real root</strong> (its graph is tangent to the <span class=\"chem\">x</span>-axis). Find the exact value of <span class=\"chem\">k</span>.": "二次函數 <span class=\"chem\">f(x) = 2x^2 - 6x + k</span> 有<strong>一個重實根</strong>（其圖像與 <span class=\"chem\">x</span> 軸相切）。求 (Find) <span class=\"chem\">k</span> 的準確值。",

    // Quadratic forms, completing the square and the discriminant > try it > li
    "For a quadratic to have one repeated root (touch the <span class=\"chem\">x</span>-axis), set its discriminant <span class=\"chem\">Delta = b^2 - 4ac = 0</span>.": "要使二次函數有一個重根（與 <span class=\"chem\">x</span> 軸相切），令其判別式 <span class=\"chem\">Delta = b^2 - 4ac = 0</span>。",

    // Quadratic forms, completing the square and the discriminant > try it > li
    "Substitute <span class=\"chem\">a = 2</span>, <span class=\"chem\">b = -6</span>, and <span class=\"chem\">c = k</span> into <span class=\"chem\">(-6)^2 - 4(2)(k) = 0</span>.": "把 <span class=\"chem\">a = 2</span>、<span class=\"chem\">b = -6</span> 及 <span class=\"chem\">c = k</span> 代入 <span class=\"chem\">(-6)^2 - 4(2)(k) = 0</span>。",

    // Quadratic forms, completing the square and the discriminant > try it > maths line
    "8<i>k</i> = 36 ⇒ <i>k</i> = <span class=\"frac\"><span>36</span><span>8</span></span> = <b>4.5</b> (or 9/2)": "8<i>k</i> = 36 ⇒ <i>k</i> = <span class=\"frac\"><span>36</span><span>8</span></span> = <b>4.5</b>（或 9/2）",

    // Reciprocal and linear rational functions > data-toc attribute
    "Rational functions": "有理函數",

    // Reciprocal and linear rational functions > h2
    "Reciprocal and linear rational functions": "倒數函數與一次有理函數",

    // Reciprocal and linear rational functions > p
    "A linear-over-linear <dfn data-def=\"A function of the form f(x) = (ax + b)/(cx + d) with c ≠ 0, whose graph is a rectangular hyperbola with one vertical and one horizontal asymptote.\">rational function</dfn> has the form <span class=\"chem\">f(x) = (ax + b)/(cx + d)</span> with <span class=\"chem\">c != 0</span>. Its graph is a transformation of the basic reciprocal hyperbola <span class=\"chem\">y = 1/x</span> and is anchored by two perpendicular asymptotes:": "一次除一次的<dfn data-def=\"形如 f(x) = (ax + b)/(cx + d) (c ≠ 0) 的函數，其圖像為具有一條鉛垂漸近線及一條水平漸近線的直角雙曲線。\">有理函數 <span class=\"en-term\">(rational function)</span></dfn>形如 <span class=\"chem\">f(x) = (ax + b)/(cx + d)</span>（<span class=\"chem\">c != 0</span>）。其圖像是基本倒數雙曲線 <span class=\"chem\">y = 1/x</span> 的變換，並由兩條互相垂直的漸近線定位：",

    // Reciprocal and linear rational functions > data-def attribute
    "A function of the form f(x) = (ax + b)/(cx + d) with c ≠ 0, whose graph is a rectangular hyperbola with one vertical and one horizontal asymptote.": "形如 f(x) = (ax + b)/(cx + d) (c ≠ 0) 的函數，其圖像為具有一條鉛垂漸近線及一條水平漸近線的直角雙曲線。",

    // Reciprocal and linear rational functions > equation > dt
    "Vertical asymptote": "鉛垂漸近線",

    // Reciprocal and linear rational functions > equation > dd
    "set denominator <span class=\"chem\">cx + d = 0</span> to get the line <span class=\"chem\">x = -d/c</span> (excluded from domain)": "令分母 <span class=\"chem\">cx + d = 0</span> 得直線 <span class=\"chem\">x = -d/c</span>（從定義域中排除）",

    // Reciprocal and linear rational functions > equation > dt
    "Horizontal asymptote": "水平漸近線",

    // Reciprocal and linear rational functions > equation > dd
    "ratio of leading <span class=\"chem\">x</span>-coefficients as <span class=\"chem\">x -&gt; +-infty</span> gives the line <span class=\"chem\">y = a/c</span> (excluded from range)": "當 <span class=\"chem\">x -&gt; +-infty</span> 時首項 <span class=\"chem\">x</span> 係數之比，給出直線 <span class=\"chem\">y = a/c</span>（從值域中排除）",

    // Reciprocal and linear rational functions > equation > dt
    // widget string (assets/js/widgets-t2-2.js)
    "Axial intercepts": "軸截距",

    // Reciprocal and linear rational functions > equation > dd
    "<span class=\"chem\">y</span>-intercept at <span class=\"chem\">x = 0</span> gives <span class=\"chem\">(0, b/d)</span>; <span class=\"chem\">x</span>-intercept at <span class=\"chem\">y = 0</span> (<span class=\"chem\">ax + b = 0</span>) gives <span class=\"chem\">(-b/a, 0)</span>": "<span class=\"chem\">x = 0</span> 時的 <span class=\"chem\">y</span> 軸截距為 <span class=\"chem\">(0, b/d)</span>；<span class=\"chem\">y = 0</span>（<span class=\"chem\">ax + b = 0</span>）時的 <span class=\"chem\">x</span> 軸截距為 <span class=\"chem\">(-b/a, 0)</span>",

    // Reciprocal and linear rational functions > common mistake > p
    "<strong>Common mistake — Writing an asymptote as a number instead of an equation:</strong> Writing <em>“Vertical asymptote = 2”</em> or <em>“HA = 3”</em> scores <strong>zero marks</strong> on every IB markscheme! An asymptote is a straight line, so you <strong>must</strong> write the full equation <strong><span class=\"chem\">x = 2</span></strong> for a vertical asymptote and <strong><span class=\"chem\">y = 3</span></strong> for a horizontal asymptote.": "<strong>常見錯誤 — 把漸近線寫成數字而非方程：</strong>寫成<em>「Vertical asymptote = 2」</em>或<em>「HA = 3」</em>在所有 IB 評分準則中均得<strong>零分</strong>！漸近線是一條直線，因此你<strong>必須</strong>為鉛垂漸近線寫出完整方程 <strong><span class=\"chem\">x = 2</span></strong>，為水平漸近線寫出 <strong><span class=\"chem\">y = 3</span></strong>。",

    // Reciprocal and linear rational functions > widget > data-title attribute
    "Linear rational function explorer: f(x) = (ax + b) / (cx + d)": "一次有理函數探索工具：f(x) = (ax + b) / (cx + d)",

    // Reciprocal and linear rational functions > widget > figcaption
    "Adjust <span class=\"chem\">a, b, c, d</span> to see how the vertical asymptote <span class=\"chem\">x = -d/c</span>, horizontal asymptote <span class=\"chem\">y = a/c</span>, axial intercepts, and decomposed form <span class=\"chem\">A + B/(cx + d)</span> update in real time.": "調校 <span class=\"chem\">a, b, c, d</span>，即時觀察鉛垂漸近線 <span class=\"chem\">x = -d/c</span>、水平漸近線 <span class=\"chem\">y = a/c</span>、軸截距及分解形式 <span class=\"chem\">A + B/(cx + d)</span> 的變化。",

    // Reciprocal and linear rational functions > worked example > h3
    "Rewriting a rational function to identify asymptotes and intercepts": "改寫有理函數以找出漸近線與截距",

    // Reciprocal and linear rational functions > worked example > p
    "The function <span class=\"chem\">f</span> is defined by <span class=\"chem\">f(x) = (3x - 5)/(x - 2)</span> for <span class=\"chem\">x != 2</span>.<br> (a) State the equations of the vertical and horizontal asymptotes of the graph of <span class=\"chem\">f</span>. <strong>[2 marks]</strong><br> (b) Express <span class=\"chem\">f(x)</span> in the form <span class=\"chem\">A + B/(x - 2)</span>, where <span class=\"chem\">A, B in Z</span>. <strong>[2 marks]</strong>": "函數 <span class=\"chem\">f</span> 定義為 <span class=\"chem\">f(x) = (3x - 5)/(x - 2)</span>（<span class=\"chem\">x != 2</span>）。<br> (a) 寫出 (State) <span class=\"chem\">f</span> 圖像的鉛垂漸近線與水平漸近線方程。<strong>[2 marks]</strong><br> (b) 把 <span class=\"chem\">f(x)</span> 表示為 (Express ... in the form) <span class=\"chem\">A + B/(x - 2)</span>，其中 <span class=\"chem\">A, B in Z</span>。<strong>[2 marks]</strong>",

    // Reciprocal and linear rational functions > worked example > data-title attribute
    "Find the vertical and horizontal asymptotes as line equations": "以直線方程形式寫出鉛垂與水平漸近線",

    // Reciprocal and linear rational functions > worked example > p
    "Set the denominator to 0 for the vertical asymptote, and take the ratio of x-coefficients for the horizontal asymptote.": "令分母等於 0 得鉛垂漸近線，取 x 係數之比得水平漸近線。",

    // Reciprocal and linear rational functions > worked example > maths line
    "Vertical asymptote: <b><i>x</i> = 2</b> &nbsp; <b>[A1]</b>": "鉛垂漸近線：<b><i>x</i> = 2</b> &nbsp; <b>[A1]</b>",

    // Reciprocal and linear rational functions > worked example > maths line
    "Horizontal asymptote: <b><i>y</i> = 3</b> &nbsp; (from <span class=\"chem\">3x / x</span>) &nbsp; <b>[A1]</b>": "水平漸近線：<b><i>y</i> = 3</b> &nbsp;（來自 <span class=\"chem\">3x / x</span>）&nbsp; <b>[A1]</b>",

    // Reciprocal and linear rational functions > worked example > data-title attribute
    "Rewrite the numerator in terms of (x − 2) and split the fraction": "以 (x − 2) 改寫分子並分拆分數",

    // Reciprocal and linear rational functions > worked example > p
    "Creating 3(x − 2) in the numerator lets (x − 2) cancel cleanly into the constant horizontal asymptote value A = 3.": "在分子構造 3(x − 2) 可讓 (x − 2) 整齊約去，得出水平漸近線常數值 A = 3。",

    // Reciprocal and linear rational functions > worked example > p
    "(a) VA: <span class=\"chem\">x = 2</span>, HA: <span class=\"chem\">y = 3</span>; (b) <span class=\"chem\">3 + 1/(x - 2)</span>": "(a) VA：<span class=\"chem\">x = 2</span>，HA：<span class=\"chem\">y = 3</span>；(b) <span class=\"chem\">3 + 1/(x - 2)</span>",

    // Reciprocal and linear rational functions > try it > p
    "The graph of <span class=\"chem\">f(x) = (4x + 7)/(2x + 5)</span> has a vertical asymptote with equation <span class=\"chem\">x = k</span>. Find the exact value of <span class=\"chem\">k</span>.": "<span class=\"chem\">f(x) = (4x + 7)/(2x + 5)</span> 的圖像有一條方程為 <span class=\"chem\">x = k</span> 的鉛垂漸近線。求 (Find) <span class=\"chem\">k</span> 的準確值。",

    // Reciprocal and linear rational functions > try it > li
    "A vertical asymptote occurs where the denominator equals zero (provided the numerator is non-zero there).": "鉛垂漸近線出現在分母等於零的位置（前提是分子在該處不為零）。",

    // Reciprocal and linear rational functions > try it > li
    "Solve <span class=\"chem\">2x + 5 = 0</span> for <span class=\"chem\">x</span>.": "解 <span class=\"chem\">2x + 5 = 0</span> 求 <span class=\"chem\">x</span>。",

    // Reciprocal and linear rational functions > try it > maths line
    "2<i>x</i> + 5 = 0 ⇒ 2<i>x</i> = −5 ⇒ <i>k</i> = <b>−2.5</b> (or −5/2)": "2<i>x</i> + 5 = 0 ⇒ 2<i>x</i> = −5 ⇒ <i>k</i> = <b>−2.5</b>（或 −5/2）",

    // Exponential models, logarithmic graphs and GDC equation solv > data-toc attribute
    "Exp & log models": "指數與對數模型",

    // Exponential models, logarithmic graphs and GDC equation solv > h2
    "Exponential models, logarithmic graphs and GDC equation solving": "指數模型、對數圖像與 GDC 解方程",

    // Exponential models, logarithmic graphs and GDC equation solv > p
    "Exponential and logarithmic functions are <strong>inverse pairs</strong>: <span class=\"chem\">y = a^x</span> and <span class=\"chem\">y = log_a x</span> (and in particular <span class=\"chem\">y = e^x</span> and <span class=\"chem\">y = ln x</span>) are reflections of each other across the line <span class=\"chem\">y = x</span>.": "指數函數與對數函數互為<strong>反函數對</strong>：<span class=\"chem\">y = a^x</span> 與 <span class=\"chem\">y = log_a x</span>（特別是 <span class=\"chem\">y = e^x</span> 與 <span class=\"chem\">y = ln x</span>）互為沿直線 <span class=\"chem\">y = x</span> 的反射。",

    // Exponential models, logarithmic graphs and GDC equation solv > table > caption
    "Comparing shifted exponential and logarithmic graphs": "平移指數圖像與對數圖像的比較",

    // Exponential models, logarithmic graphs and GDC equation solv > table > th
    "Feature": "特徵",

    // Exponential models, logarithmic graphs and GDC equation solv > table > th
    "Exponential model <span class=\"chem\">f(t) = A e^{kt} + C</span>": "指數模型 <span class=\"chem\">f(t) = A e^{kt} + C</span>",

    // Exponential models, logarithmic graphs and GDC equation solv > table > th
    "Logarithmic model <span class=\"chem\">g(x) = a ln(x - h) + d</span>": "對數模型 <span class=\"chem\">g(x) = a ln(x - h) + d</span>",

    // Exponential models, logarithmic graphs and GDC equation solv > table > th
    "Domain": "定義域",

    // Exponential models, logarithmic graphs and GDC equation solv > table > td
    "All real numbers <span class=\"chem\">t in R</span> (or <span class=\"chem\">t &gt;= 0</span> in time contexts)": "所有實數 <span class=\"chem\">t in R</span>（或在時間情境中為 <span class=\"chem\">t &gt;= 0</span>）",

    // Exponential models, logarithmic graphs and GDC equation solv > table > td
    "Restricted: <span class=\"chem\">x - h &gt; 0 =&gt; x &gt; h</span>": "受限：<span class=\"chem\">x - h &gt; 0 =&gt; x &gt; h</span>",

    // Exponential models, logarithmic graphs and GDC equation solv > table > th
    "Range": "值域",

    // Exponential models, logarithmic graphs and GDC equation solv > table > td
    "Restricted: <span class=\"chem\">y &gt; C</span> (if <span class=\"chem\">A &gt; 0</span>) or <span class=\"chem\">y &lt; C</span> (if <span class=\"chem\">A &lt; 0</span>)": "受限：<span class=\"chem\">y &gt; C</span>（若 <span class=\"chem\">A &gt; 0</span>）或 <span class=\"chem\">y &lt; C</span>（若 <span class=\"chem\">A &lt; 0</span>）",

    // Exponential models, logarithmic graphs and GDC equation solv > table > td
    "All real numbers <span class=\"chem\">y in R</span>": "所有實數 <span class=\"chem\">y in R</span>",

    // Exponential models, logarithmic graphs and GDC equation solv > table > th
    "Asymptote": "漸近線",

    // Exponential models, logarithmic graphs and GDC equation solv > table > td
    "<strong>Horizontal asymptote <span class=\"chem\">y = C</span></strong> (since <span class=\"chem\">e^{kt} -&gt; 0</span> as <span class=\"chem\">kt -&gt; -infty</span>)": "<strong>水平漸近線 <span class=\"chem\">y = C</span></strong>（因當 <span class=\"chem\">kt -&gt; -infty</span> 時 <span class=\"chem\">e^{kt} -&gt; 0</span>）",

    // Exponential models, logarithmic graphs and GDC equation solv > table > td
    "<strong>Vertical asymptote <span class=\"chem\">x = h</span></strong> (where the log argument hits <span class=\"chem\">0</span>)": "<strong>鉛垂漸近線 <span class=\"chem\">x = h</span></strong>（對數自變量等於 <span class=\"chem\">0</span> 處）",

    // Exponential models, logarithmic graphs and GDC equation solv > table > th
    "Initial / key point": "初始點／關鍵點",

    // Exponential models, logarithmic graphs and GDC equation solv > table > td
    "At <span class=\"chem\">t = 0</span>, <span class=\"chem\">f(0) = A e^0 + C = A + C</span>": "當 <span class=\"chem\">t = 0</span> 時，<span class=\"chem\">f(0) = A e^0 + C = A + C</span>",

    // Exponential models, logarithmic graphs and GDC equation solv > table > td
    "When <span class=\"chem\">x - h = 1</span> (<span class=\"chem\">x = h + 1</span>), <span class=\"chem\">ln(1) = 0</span> so <span class=\"chem\">g(h + 1) = d</span>": "當 <span class=\"chem\">x - h = 1</span>（<span class=\"chem\">x = h + 1</span>）時，<span class=\"chem\">ln(1) = 0</span>，故 <span class=\"chem\">g(h + 1) = d</span>",

    // Exponential models, logarithmic graphs and GDC equation solv > exam tip (shown in English + translation) > p
    "<strong>Exam tip — Earning full marks on Paper 2 GDC intersection questions:</strong> When a Paper 2 question asks you to solve an equation like <span class=\"chem\">e^{-0.4x} = x^2 - 3</span> where x appears both inside an exponential/log and inside a polynomial, <strong>do not try to isolate <span class=\"chem\">x</span> algebraically</strong>—it is impossible! Instead, graph <span class=\"chem\">Y_1 = e^{-0.4x}</span> and <span class=\"chem\">Y_2 = x^2 - 3</span> on your GDC, <strong>draw a small labelled sketch</strong> showing the curves and their intersection point(s) in your answer booklet (this secures the <strong>[M1]</strong> method mark even if you misread a digit), and write the coordinates to 3 s.f.": "<strong>考試貼士 — 在 Paper 2 GDC 交點題取得滿分：</strong>當 Paper 2 題目要求解如 <span class=\"chem\">e^{-0.4x} = x^2 - 3</span> 等 x 同時出現在指數／對數與多項式內的方程時，<strong>切勿嘗試以代數方法分離 <span class=\"chem\">x</span></strong>——這是不可能的！應在 GDC 上繪出 <span class=\"chem\">Y_1 = e^{-0.4x}</span> 與 <span class=\"chem\">Y_2 = x^2 - 3</span>，在答題簿上<strong>畫出一個標註清楚的小略圖</strong>顯示兩條曲線及其交點（即使讀錯一個數字也能穩取 <strong>[M1]</strong> 方法分），然後把坐標寫至 3 位有效數字。",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > h3
    "Modelling Newton's cooling with an exponential decay function": "以指數衰減函數建立牛頓冷卻模型",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > p
    "The temperature <span class=\"chem\">T</span> (in <span class=\"unit\">°C</span>) of a cup of coffee <span class=\"chem\">t</span> minutes after it is poured is modelled by <span class=\"chem\">T(t) = 22 + 68 e^{-0.08t}</span> for <span class=\"chem\">t &gt;= 0</span>.<br> (a) Write down the initial temperature of the coffee and the room temperature it approaches after a very long time. <strong>[2 marks]</strong><br> (b) Find the exact time <span class=\"chem\">t</span> when the coffee reaches <span class=\"chem\">56</span> <span class=\"unit\">°C</span>, giving your answer in the form <span class=\"chem\">a ln 2</span>. <strong>[3 marks]</strong>": "一杯咖啡倒出後 <span class=\"chem\">t</span> 分鐘的溫度 <span class=\"chem\">T</span>（單位：<span class=\"unit\">°C</span>）以 <span class=\"chem\">T(t) = 22 + 68 e^{-0.08t}</span>（<span class=\"chem\">t &gt;= 0</span>）模擬。<br> (a) 寫出 (Write down) 咖啡的初始溫度，以及經過很長時間後它所趨近的室溫。<strong>[2 marks]</strong><br> (b) 求 (Find) 咖啡溫度降至 <span class=\"chem\">56</span> <span class=\"unit\">°C</span> 的準確時間 <span class=\"chem\">t</span>，答案以 <span class=\"chem\">a ln 2</span> 形式表示。<strong>[3 marks]</strong>",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > data-title attribute
    "Evaluate t = 0 for initial temperature and t → ∞ for limiting temperature": "代入 t = 0 求初始溫度及令 t → ∞ 求極限溫度",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > p
    "At t = 0, e⁰ = 1; as t → ∞, e^(−0.08t) → 0, leaving the horizontal asymptote T = 22.": "當 t = 0 時 e⁰ = 1；當 t → ∞ 時 e^(−0.08t) → 0，剩下水平漸近線 T = 22。",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > maths line
    "Initial temperature: <i>T</i>(0) = 22 + 68(1) = <b>90 °C</b> &nbsp; <b>[A1]</b>": "初始溫度：<i>T</i>(0) = 22 + 68(1) = <b>90 °C</b> &nbsp; <b>[A1]</b>",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > maths line
    "Long-term room temperature (as <i>t</i> → ∞): <b>22 °C</b> &nbsp; <b>[A1]</b>": "長期室溫（當 <i>t</i> → ∞）：<b>22 °C</b> &nbsp; <b>[A1]</b>",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > data-title attribute
    "Isolate the exponential term e^(−0.08t) before taking natural logs": "取自然對數前先分離指數項 e^(−0.08t)",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > p
    "Always subtract 22 and divide by 68 BEFORE applying ln to both sides.": "對兩邊取 ln 之前，務必先減去 22 並除以 68。",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > data-title attribute
    "Take natural logs and use ln(1/2) = −ln 2": "取自然對數並運用 ln(1/2) = −ln 2",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > p
    "Writing ln(1/2) = −ln 2 cancels the negative sign and gives the exact form a ln 2.": "寫成 ln(1/2) = −ln 2 可消去負號並得出準確形式 a ln 2。",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > maths line
    "−0.08<i>t</i> = ln(1/2) = −ln 2 ⇒ <i>t</i> = <span class=\"frac\"><span>ln 2</span><span>0.08</span></span> = <b>12.5 ln 2</b> (or <span class=\"frac\"><span>25</span><span>2</span></span> ln 2) minutes &nbsp; <b>[A1]</b>": "−0.08<i>t</i> = ln(1/2) = −ln 2 ⇒ <i>t</i> = <span class=\"frac\"><span>ln 2</span><span>0.08</span></span> = <b>12.5 ln 2</b>（或 <span class=\"frac\"><span>25</span><span>2</span></span> ln 2）分鐘 &nbsp; <b>[A1]</b>",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > p
    "(a) Initial: <span class=\"chem\">90</span> <span class=\"unit\">°C</span>, Long-term: <span class=\"chem\">22</span> <span class=\"unit\">°C</span>; (b) <span class=\"chem\">t = 12.5 ln 2</span> minutes": "(a) 初始：<span class=\"chem\">90</span> <span class=\"unit\">°C</span>，長期：<span class=\"chem\">22</span> <span class=\"unit\">°C</span>；(b) <span class=\"chem\">t = 12.5 ln 2</span> 分鐘",

    // Exponential models, logarithmic graphs and GDC equation solv > try it > p
    "Using your GDC, find the positive root of the equation <span class=\"chem\">e^x = 6 - x^2</span>, giving your answer correct to 3 significant figures.": "利用你的 GDC，求 (find) 方程 <span class=\"chem\">e^x = 6 - x^2</span> 的正數根，答案須準確至 3 位有效數字。",

    // Exponential models, logarithmic graphs and GDC equation solv > try it > li
    "Plot <span class=\"chem\">Y_1 = e^x</span> and <span class=\"chem\">Y_2 = 6 - x^2</span> on your GDC (or find the positive zero of <span class=\"chem\">f(x) = e^x + x^2 - 6</span>).": "在 GDC 上繪出 <span class=\"chem\">Y_1 = e^x</span> 與 <span class=\"chem\">Y_2 = 6 - x^2</span>（或求 <span class=\"chem\">f(x) = e^x + x^2 - 6</span> 的正零點）。",

    // Exponential models, logarithmic graphs and GDC equation solv > try it > li
    "Use the GDC intersection tool in the first quadrant (<span class=\"chem\">x &gt; 0</span>) and round <span class=\"chem\">x ≈ 1.39808</span> to 3 significant figures.": "在第一象限（<span class=\"chem\">x &gt; 0</span>）使用 GDC 求交點工具，並把 <span class=\"chem\">x ≈ 1.39808</span> 捨入至 3 位有效數字。",

    // Exponential models, logarithmic graphs and GDC equation solv > try it > maths line
    "Intersecting <i>y</i> = <i>e</i><sup><i>x</i></sup> and <i>y</i> = 6 − <i>x</i><sup>2</sup> for <i>x</i> &gt; 0 gives (1.398, 4.047) ⇒ <i>x</i> = <b>1.40</b> (3 s.f.).": "求 <i>y</i> = <i>e</i><sup><i>x</i></sup> 與 <i>y</i> = 6 − <i>x</i><sup>2</sup> 在 <i>x</i> &gt; 0 時的交點得 (1.398, 4.047) ⇒ <i>x</i> = <b>1.40</b>（3 位有效數字）。",

    // Exponential models, logarithmic graphs and GDC equation solv > not needed for IB > p
    "<strong>Not needed for IB:</strong> You do not need focus-directrix definitions of parabolas, standard equations of ellipses (<span class=\"chem\">x^2/a^2 + y^2/b^2 = 1</span>) or hyperbolas (<span class=\"chem\">x^2/a^2 - y^2/b^2 = 1</span>), or the Lambert <span class=\"chem\">W</span>-function for solving <span class=\"chem\">x e^x = c</span> analytically.": "<strong>IB 不要求的內容：</strong>你不需要拋物線的焦點－準線定義、橢圓（<span class=\"chem\">x^2/a^2 + y^2/b^2 = 1</span>）或雙曲線（<span class=\"chem\">x^2/a^2 - y^2/b^2 = 1</span>）的標準方程，也不需要用朗伯 <span class=\"chem\">W</span> 函數解析求解 <span class=\"chem\">x e^x = c</span>。",

    // Quick practice > data-toc attribute
    "Practice": "練習",

    // Quick practice > h2
    "Quick practice": "快速練習",

    // widget string (assets/js/widgets-t2-2.js)
    "Coefficient a": "係數 a",

    // widget string (assets/js/widgets-t2-2.js)
    "Coefficient b": "係數 b",

    // widget string (assets/js/widgets-t2-2.js)
    "Constant c": "常數 c",

    // widget string (assets/js/widgets-t2-2.js)
    "Line gradient m (y = mx)": "直線斜率 m (y = mx)",

    // widget string (assets/js/widgets-t2-2.js)
    "Tangent (Δ = 0)": "相切 (Δ = 0)",

    // widget string (assets/js/widgets-t2-2.js)
    "Always positive (Δ < 0)": "恒正 (Δ < 0)",

    // widget string (assets/js/widgets-t2-2.js)
    "Parabola vertex & axis": "拋物線頂點與對稱軸",

    // widget string (assets/js/widgets-t2-2.js)
    "Intersection equation f(x) = mx": "交點方程 f(x) = mx",

    // widget string (assets/js/widgets-t2-2.js)
    "Discriminant Δ = B² − 4AC": "判別式 Δ = B² − 4AC",

    // widget string (assets/js/widgets-t2-2.js)
    "Geometric interpretation": "幾何解釋",

    // widget string (assets/js/widgets-t2-2.js)
    "Δ = 0 → 1 repeated real root (line is tangent at x =": "Δ = 0 → 1 個重實根（直線相切於 x =",

    // widget string (assets/js/widgets-t2-2.js)
    "Δ > 0 → 2 distinct real intersections (x =": "Δ > 0 → 2 個相異實數交點 (x =",

    // widget string (assets/js/widgets-t2-2.js)
    "Δ < 0 → 0 real intersections (curve and line never meet)": "Δ < 0 → 0 個實數交點（曲線與直線永不相交）",

    // widget string (assets/js/widgets-t2-2.js)
    "Parabola y = ax² + bx + c and line y = mx": "拋物線 y = ax² + bx + c 與直線 y = mx",

    // widget string (assets/js/widgets-t2-2.js)
    "Numerator a (in ax + b)": "分子 a (於 ax + b)",

    // widget string (assets/js/widgets-t2-2.js)
    "Numerator b (in ax + b)": "分子 b (於 ax + b)",

    // widget string (assets/js/widgets-t2-2.js)
    "Denominator c (in cx + d)": "分母 c (於 cx + d)",

    // widget string (assets/js/widgets-t2-2.js)
    "Denominator d (in cx + d)": "分母 d (於 cx + d)",

    // widget string (assets/js/widgets-t2-2.js)
    "Vertical asymptote (VA)": "鉛垂漸近線 (VA)",

    // widget string (assets/js/widgets-t2-2.js)
    "Horizontal asymptote (HA)": "水平漸近線 (HA)",

    // widget string (assets/js/widgets-t2-2.js)
    "Decomposed form A + B/(cx + d)": "分解形式 A + B/(cx + d)",

    // widget string (assets/js/widgets-t2-2.js)
    "Graph of rational function f(x) = (ax + b)/(cx + d) with asymptotes": "有理函數 f(x) = (ax + b)/(cx + d) 及其漸近線圖像"

  }
});
