/* t5-1.q — ja question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't5-1.q', {
  questions: {

    // ── t5-1-q001 · mcq · foundation · SL · SL 5.3, 5.6 · 3 marks
    "t5-1-q001": {
      // EN: <p>Let <span class="chem">f(x) = 6 sqrt(x) - 4 / x^2 + 5</span> for <span class="chem">x &gt; 0</span>. Find <span class="chem">f'(x)</span>.</p>
      stem: "<p><span class=\"chem\">x &gt; 0</span> のとき <span class=\"chem\">f(x) = 6 sqrt(x) - 4 / x^2 + 5</span> とする。<span class=\"chem\">f'(x)</span> を求めなさい (Find)。</p>",
      options: [
        // EN: <span class="chem">3 / sqrt(x) + 8 / x^3</span>
        "<span class=\"chem\">3 / sqrt(x) + 8 / x^3</span>",
        // EN: <span class="chem">3 / sqrt(x) - 8 / x^3</span>
        "<span class=\"chem\">3 / sqrt(x) - 8 / x^3</span>",
        // EN: <span class="chem">3 sqrt(x) + 8 / x^3 + 5</span>
        "<span class=\"chem\">3 sqrt(x) + 8 / x^3 + 5</span>",
        // EN: <span class="chem">6 / (2 sqrt(x)) - 4 / (2x)</span>
        "<span class=\"chem\">6 / (2 sqrt(x)) - 4 / (2x)</span>",
      ],
      hints: [
        // EN: Rewrite each term using rational or negative exponents first: <span class="chem">f(x) = 6x^{1/2} - 4x^{-2} + 5</span>.
        "まず各項を有理数指数または負の指数で表します：<span class=\"chem\">f(x) = 6x^{1/2} - 4x^{-2} + 5</span>。",
        // EN: Apply the power rule <span class="chem">d/dx (x^n) = n x^{n-1}</span> to each term and remember that a standalone constant differentiates to <span class="chem">0</span>.
        "各項にべき関数の微分公式 <span class=\"chem\">d/dx (x^n) = n x^{n-1}</span> を適用し、定数項を微分すると <span class=\"chem\">0</span> になることを思い出しましょう。",
      ],
      // EN: <p>Rewrite in index form: <span class="chem">f(x) = 6x^{1/2} - 4x^{-2} + 5</span>. Differentiating term by term gives <span class="chem">f'(x) = 6(1/2)x^{-1/2} - 4(-2)x^{-3} + 0 = 3 / sqrt(x) + 8 / x^3</span>.</p>
      solution: "<p>指数の形に書き換えると <span class=\"chem\">f(x) = 6x^{1/2} - 4x^{-2} + 5</span> です。項ごとに微分すると <span class=\"chem\">f'(x) = 6(1/2)x^{-1/2} - 4(-2)x^{-3} + 0 = 3 / sqrt(x) + 8 / x^3</span> となります。</p>",
      misconception: {
        // EN (option B): When differentiating −4x⁻², multiplying −4 by the negative exponent −2 gives +8x⁻³, not −8x⁻³.
        "1": "−4x⁻² を微分するとき、−4 に負の指数 −2 を掛けると −8x⁻³ ではなく +8x⁻³ になります。",
        // EN (option C): Subtracting 1 from the exponent 1/2 gives −1/2 (so x⁻¹/² = 1/√x), and the derivative of the constant +5 is 0.
        "2": "指数 1/2 から 1 を引くと −1/2（つまり x⁻¹/² = 1/√x）になり、定数 +5 の微分は 0 です。",
        // EN (option D): Rewrite −4/x² as −4x⁻² before differentiating; you cannot differentiate the denominator x² by itself.
        "3": "微分する前に −4/x² を −4x⁻² に書き換える必要があります；分母の x² だけを微分することはできません。",
      },
    },

    // ── t5-1-q002 · numeric · foundation · SL · SL 5.4 · 4 marks
    "t5-1-q002": {
      // EN: <p>Consider the curve <span class="chem">y = x^3 - 5x^2 + 8x - 1</span>. The normal to the curve at <span class="chem">x = 1</span> has equation <span class="chem">y = m x + c</span>. Find the value of <span class="chem">c</span>.</p>
      stem: "<p>曲線 <span class=\"chem\">y = x^3 - 5x^2 + 8x - 1</span> を考える。<span class=\"chem\">x = 1</span> におけるこの曲線の法線の方程式が <span class=\"chem\">y = m x + c</span> であるとき、<span class=\"chem\">c</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: First find the <span class="chem">y</span>-coordinate at <span class="chem">x = 1</span> and evaluate the derivative <span class="chem">dy/dx = 3x^2 - 10x + 8</span> at <span class="chem">x = 1</span>.
        "まず <span class=\"chem\">x = 1</span> における <span class=\"chem\">y</span> 座標を求め、導関数 <span class=\"chem\">dy/dx = 3x^2 - 10x + 8</span> の <span class=\"chem\">x = 1</span> での値を計算します。",
        // EN: Take the negative reciprocal <span class="chem">m_N = -1 / m_T</span> and substitute <span class="chem">(1, 3)</span> into <span class="chem">y - y_1 = m_N(x - 1)</span>.
        "負の逆数 <span class=\"chem\">m_N = -1 / m_T</span> をとり、<span class=\"chem\">(1, 3)</span> を <span class=\"chem\">y - y_1 = m_N(x - 1)</span> に代入します。",
      ],
      // EN: <p>At <span class="chem">x = 1</span>, <span class="chem">y(1) = 1 - 5 + 8 - 1 = 3</span>. Differentiating gives <span class="chem">dy/dx = 3x^2 - 10x + 8</span>, so <span class="chem">m_T = 3 - 10 + 8 = 1</span> and the normal gradient is <span class="chem">m_N = -1 / 1 = -1</span>. Thus the normal is <span class="chem">y - 3 = -1(x - 1) =&gt; y = -x + 4</span>, giving <span class="chem">c = 4</span>.</p>
      solution: "<p><span class=\"chem\">x = 1</span> のとき <span class=\"chem\">y(1) = 1 - 5 + 8 - 1 = 3</span>。微分すると <span class=\"chem\">dy/dx = 3x^2 - 10x + 8</span> なので <span class=\"chem\">m_T = 3 - 10 + 8 = 1</span>、法線の傾きは <span class=\"chem\">m_N = -1 / 1 = -1</span> です。よって法線は <span class=\"chem\">y - 3 = -1(x - 1) =&gt; y = -x + 4</span> となり、<span class=\"chem\">c = 4</span> です。</p>",
    },

    // ── t5-1-q003 · mcq · foundation · SL · SL 5.6 · 2 marks
    "t5-1-q003": {
      // EN: <p>Find the derivative of <span class="chem">f(x) = ln(3x^2 + 5)</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = ln(3x^2 + 5)</span> の導関数を求めなさい (Find)。</p>",
      options: [
        // EN: <span class="chem">6x / (3x^2 + 5)</span>
        "<span class=\"chem\">6x / (3x^2 + 5)</span>",
        // EN: <span class="chem">1 / (3x^2 + 5)</span>
        "<span class=\"chem\">1 / (3x^2 + 5)</span>",
        // EN: <span class="chem">1 / (6x)</span>
        "<span class=\"chem\">1 / (6x)</span>",
        // EN: <span class="chem">6x ln(3x^2 + 5)</span>
        "<span class=\"chem\">6x ln(3x^2 + 5)</span>",
      ],
      hints: [
        // EN: Use the chain rule on <span class="chem">f(x) = ln(u)</span> where <span class="chem">u = 3x^2 + 5</span>.
        "<span class=\"chem\">u = 3x^2 + 5</span> とおいて <span class=\"chem\">f(x) = ln(u)</span> に合成関数の微分法を使います。",
        // EN: Since <span class="chem">d/du (ln u) = 1/u</span> and <span class="chem">du/dx = 6x</span>, multiply them together.
        "<span class=\"chem\">d/du (ln u) = 1/u</span> かつ <span class=\"chem\">du/dx = 6x</span> なので、これらを掛け合わせます。",
      ],
      // EN: <p>By the chain rule, <span class="chem">f'(x) = (1 / (3x^2 + 5)) * d/dx(3x^2 + 5) = 6x / (3x^2 + 5)</span>.</p>
      solution: "<p>合成関数の微分法より、<span class=\"chem\">f'(x) = (1 / (3x^2 + 5)) * d/dx(3x^2 + 5) = 6x / (3x^2 + 5)</span> です。</p>",
      misconception: {
        // EN (option B): You differentiated the outer function ln(u) to 1/u, but forgot to multiply by the derivative of the inner function u' = 6x (chain rule).
        "1": "外側の関数 ln(u) を 1/u に微分しましたが、内側の関数の微分 u' = 6x を掛け忘れています（合成関数の微分法）。",
        // EN (option C): The denominator of d/dx[ln(u)] is the entire inner function u = 3x² + 5, not its derivative.
        "2": "d/dx[ln(u)] の分母は内側の関数の微分ではなく、元の内側の関数 u = 3x² + 5 全体です。",
        // EN (option D): The derivative of ln(u) is u'/u, not u' ln(u).
        "3": "ln(u) の微分は u' ln(u) ではなく u'/u です。",
      },
    },

    // ── t5-1-q004 · numeric · foundation · SL · SL 5.6 · 3 marks
    "t5-1-q004": {
      // EN: <p>Let <span class="chem">f(x) = x^2 e^{3x}</span>. The derivative <span class="chem">f'(x)</span> can be written in the form <span class="chem">x e^{3x}(a x + b)</span>, where <span class="chem">a</span> and <span class="chem">b</span> are integers. Find the value of <span class="chem">b</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = x^2 e^{3x}</span> とする。導関数 <span class=\"chem\">f'(x)</span> は <span class=\"chem\">x e^{3x}(a x + b)</span>（<span class=\"chem\">a</span>, <span class=\"chem\">b</span> は整数）の形に表せる。<span class=\"chem\">b</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Use the product rule <span class="chem">(u v)' = u v' + v u'</span> with <span class="chem">u = x^2</span> and <span class="chem">v = e^{3x}</span>.
        "<span class=\"chem\">u = x^2</span>、<span class=\"chem\">v = e^{3x}</span> として積の微分法 <span class=\"chem\">(u v)' = u v' + v u'</span> を使います。",
        // EN: Remember the chain rule when differentiating <span class="chem">e^{3x}</span>: <span class="chem">v' = 3e^{3x}</span>. Then factor out <span class="chem">x e^{3x}</span>.
        "<span class=\"chem\">e^{3x}</span> を微分するときの合成関数の微分法（<span class=\"chem\">v' = 3e^{3x}</span>）に注意し、<span class=\"chem\">x e^{3x}</span> をくくり出します。",
      ],
      // EN: <p>By the product rule, <span class="chem">f'(x) = x^2(3e^{3x}) + e^{3x}(2x) = x e^{3x}(3x + 2)</span>. Comparing with <span class="chem">x e^{3x}(a x + b)</span> gives <span class="chem">a = 3</span> and <span class="chem">b = 2</span>.</p>
      solution: "<p>積の微分法より <span class=\"chem\">f'(x) = x^2(3e^{3x}) + e^{3x}(2x) = x e^{3x}(3x + 2)</span> です。<span class=\"chem\">x e^{3x}(a x + b)</span> と比較すると <span class=\"chem\">a = 3</span>、<span class=\"chem\">b = 2</span> です。</p>",
    },

    // ── t5-1-q005 · mcq · exam · SL · SL 5.6 · 5 marks
    "t5-1-q005": {
      // EN: <p>Consider <span class="chem">f(x) = cos(2x) / e^x</span>. Which expression equals <span class="chem">f'(x)</span>?</p>
      stem: "<p><span class=\"chem\">f(x) = cos(2x) / e^x</span> とするとき、<span class=\"chem\">f'(x)</span> に等しい式はどれですか？</p>",
      options: [
        // EN: <span class="chem">-(2 sin(2x) + cos(2x)) / e^x</span>
        "<span class=\"chem\">-(2 sin(2x) + cos(2x)) / e^x</span>",
        // EN: <span class="chem">(2 sin(2x) - cos(2x)) / e^x</span>
        "<span class=\"chem\">(2 sin(2x) - cos(2x)) / e^x</span>",
        // EN: <span class="chem">-2 sin(2x) / e^x</span>
        "<span class=\"chem\">-2 sin(2x) / e^x</span>",
        // EN: <span class="chem">(-sin(2x) - cos(2x)) / e^{2x}</span>
        "<span class=\"chem\">(-sin(2x) - cos(2x)) / e^{2x}</span>",
      ],
      hints: [
        // EN: Apply the quotient rule with <span class="chem">u = cos(2x)</span> (<span class="chem">u' = -2 sin(2x)</span>) and <span class="chem">v = e^x</span> (<span class="chem">v' = e^x</span>).
        "<span class=\"chem\">u = cos(2x)</span>（<span class=\"chem\">u' = -2 sin(2x)</span>）、<span class=\"chem\">v = e^x</span>（<span class=\"chem\">v' = e^x</span>）として商の微分法を適用します。",
        // EN: Factor out <span class="chem">e^x</span> in the numerator and cancel with one factor of <span class="chem">e^x</span> in <span class="chem">(e^x)^2</span>.
        "分子から <span class=\"chem\">e^x</span> をくくり出し、<span class=\"chem\">(e^x)^2</span> の <span class=\"chem\">e^x</span> 1 つ分と約分します。",
      ],
      // EN: <p>Using the quotient rule: <span class="chem">f'(x) = (e^x(-2 sin(2x)) - cos(2x)(e^x)) / (e^x)^2 = -(2 sin(2x) + cos(2x)) / e^x</span>.</p>
      solution: "<p>商の微分法より：<span class=\"chem\">f'(x) = (e^x(-2 sin(2x)) - cos(2x)(e^x)) / (e^x)^2 = -(2 sin(2x) + cos(2x)) / e^x</span>。</p>",
      misconception: {
        // EN (option B): The derivative of cos(2x) is −2 sin(2x) (with a minus sign), not +2 sin(2x).
        "1": "cos(2x) の微分は +2 sin(2x) ではなく −2 sin(2x)（マイナス符号）です。",
        // EN (option C): You cannot differentiate the numerator and denominator separately; you must apply the quotient rule (v u' − u v') / v².
        "2": "分子と分母を別々に微分することはできません；商の微分法 (v u' − u v') / v² を使う必要があります。",
        // EN (option D): By the chain rule, d/dx[cos(2x)] = −2 sin(2x), and you can cancel one factor of e^x from numerator and denominator.
        "3": "合成関数の微分法より d/dx[cos(2x)] = −2 sin(2x) となり、分子と分母から e^x を 1 つ約分できます。",
      },
    },

    // ── t5-1-q006 · numeric · exam · SL · SL 5.4 · 4 marks
    "t5-1-q006": {
      // EN: <p>The tangent to the curve <span class="chem">f(x) = k x^2 + 3x - 2</span> at the point where <span class="chem">x = 2</span> is parallel to the line <span class="chem">y = 11x - 5</span>. Find the value of <span class="chem">k</span>.</p>
      stem: "<p>曲線 <span class=\"chem\">f(x) = k x^2 + 3x - 2</span> の <span class=\"chem\">x = 2</span> における接線が、直線 <span class=\"chem\">y = 11x - 5</span> に平行である。<span class=\"chem\">k</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Parallel lines have the same gradient, so the tangent gradient at <span class="chem">x = 2</span> is <span class="chem">f'(2) = 11</span>.
        "平行な直線は同じ傾きをもつので、<span class=\"chem\">x = 2</span> における接線の傾きは <span class=\"chem\">f'(2) = 11</span> です。",
        // EN: Differentiate <span class="chem">f(x)</span> to get <span class="chem">f'(x) = 2k x + 3</span>, substitute <span class="chem">x = 2</span>, and solve <span class="chem">4k + 3 = 11</span>.
        "<span class=\"chem\">f(x)</span> を微分して <span class=\"chem\">f'(x) = 2k x + 3</span> を得て、<span class=\"chem\">x = 2</span> を代入し <span class=\"chem\">4k + 3 = 11</span> を解きます。",
      ],
      // EN: <p>Since the tangent at <span class="chem">x = 2</span> is parallel to <span class="chem">y = 11x - 5</span>, we have <span class="chem">f'(2) = 11</span>. Differentiating gives <span class="chem">f'(x) = 2k x + 3</span>, so <span class="chem">f'(2) = 4k + 3 = 11 =&gt; 4k = 8 =&gt; k = 2</span>.</p>
      solution: "<p><span class=\"chem\">x = 2</span> における接線が <span class=\"chem\">y = 11x - 5</span> に平行なので、<span class=\"chem\">f'(2) = 11</span> です。微分すると <span class=\"chem\">f'(x) = 2k x + 3</span> となるので、<span class=\"chem\">f'(2) = 4k + 3 = 11 =&gt; 4k = 8 =&gt; k = 2</span> です。</p>",
    },

    // ── t5-1-q007 · multi · exam · SL · SL 5.2, 5.8 · 5 marks
    "t5-1-q007": {
      // EN: <p>A twice-differentiable function <span class="chem">y = f(x)</span> has derivative <span class="chem">f'(x) = (x + 2)^2 (x - 3)</span>. Select <strong>all</strong> true statements about the graph of <span class="chem">y = f(x)</span>.</p>
      stem: "<p>2 回微分可能な関数 <span class=\"chem\">y = f(x)</span> の導関数が <span class=\"chem\">f'(x) = (x + 2)^2 (x - 3)</span> である。<span class=\"chem\">y = f(x)</span> のグラフについて正しい記述を<strong>すべて</strong>選びなさい。</p>",
      options: [
        // EN: <span class="chem">f(x)</span> has a stationary point of inflexion at <span class="chem">x = -2</span>.
        "<span class=\"chem\">f(x)</span> は <span class=\"chem\">x = -2</span> に停留変曲点をもつ。",
        // EN: <span class="chem">f(x)</span> has a local minimum at <span class="chem">x = 3</span>.
        "<span class=\"chem\">f(x)</span> は <span class=\"chem\">x = 3</span> で極小となる。",
        // EN: <span class="chem">f(x)</span> is increasing on the interval <span class="chem">-2 &lt; x &lt; 3</span>.
        "<span class=\"chem\">f(x)</span> は区間 <span class=\"chem\">-2 &lt; x &lt; 3</span> で増加する。",
        // EN: <span class="chem">f(x)</span> has a local maximum at <span class="chem">x = -2</span>.
        "<span class=\"chem\">f(x)</span> は <span class=\"chem\">x = -2</span> で極大となる。",
      ],
      hints: [
        // EN: Find the sign of <span class="chem">f'(x) = (x + 2)^2 (x - 3)</span> in the three intervals <span class="chem">x &lt; -2</span>, <span class="chem">-2 &lt; x &lt; 3</span>, and <span class="chem">x &gt; 3</span>.
        "3 つの区間 <span class=\"chem\">x &lt; -2</span>、<span class=\"chem\">-2 &lt; x &lt; 3</span>、<span class=\"chem\">x &gt; 3</span> における <span class=\"chem\">f'(x) = (x + 2)^2 (x - 3)</span> の符号を調べます。",
        // EN: Notice that <span class="chem">(x + 2)^2 &gt;= 0</span> for all <span class="chem">x</span>, so the sign of <span class="chem">f'(x)</span> is controlled by <span class="chem">(x - 3)</span>.
        "すべての <span class=\"chem\">x</span> で <span class=\"chem\">(x + 2)^2 &gt;= 0</span> なので、<span class=\"chem\">f'(x)</span> の符号は <span class=\"chem\">(x - 3)</span> によって決まることに注目しましょう。",
      ],
      // EN: <p>The roots of <span class="chem">f'(x) = 0</span> are <span class="chem">x = -2</span> and <span class="chem">x = 3</span>. Because <span class="chem">(x + 2)^2 &gt; 0</span> for all <span class="chem">x != -2</span>, <span class="chem">f'(x) &lt; 0</span> for <span class="chem">x &lt; -2</span> and for <span class="chem">-2 &lt; x &lt; 3</span>, while <span class="chem">f'(x) &gt; 0</span> for <span class="chem">x &gt; 3</span>. Thus <span class="chem">x = -2</span> is a stationary point of inflexion (sign <span class="chem">- -&gt; 0 -&gt; -</span>) and <span class="chem">x = 3</span> is a local minimum (sign <span class="chem">- -&gt; 0 -&gt; +</span>).</p>
      solution: "<p><span class=\"chem\">f'(x) = 0</span> の解は <span class=\"chem\">x = -2</span> と <span class=\"chem\">x = 3</span> です。<span class=\"chem\">x != -2</span> のすべてで <span class=\"chem\">(x + 2)^2 &gt; 0</span> なので、<span class=\"chem\">x &lt; -2</span> および <span class=\"chem\">-2 &lt; x &lt; 3</span> では <span class=\"chem\">f'(x) &lt; 0</span>、<span class=\"chem\">x &gt; 3</span> では <span class=\"chem\">f'(x) &gt; 0</span> となります。よって <span class=\"chem\">x = -2</span> は停留変曲点（符号 <span class=\"chem\">- -&gt; 0 -&gt; -</span>）、<span class=\"chem\">x = 3</span> は極小点（符号 <span class=\"chem\">- -&gt; 0 -&gt; +</span>）です。</p>",
      misconception: {
        // EN (option C): For x < 3 (with x ≠ −2), (x + 2)² > 0 and (x − 3) < 0, so f'(x) < 0 and f(x) is decreasing on −2 < x < 3.
        "2": "x < 3（x ≠ −2）のとき (x + 2)² > 0 かつ (x − 3) < 0 なので、f'(x) < 0 となり、f(x) は −2 < x < 3 で減少しています。",
        // EN (option D): At x = −2, the factor (x + 2)² is squared, so f'(x) does not change sign (it goes from − to 0 to −). That makes x = −2 a stationary point of inflexion, not a local maximum.
        "3": "x = −2 では因数 (x + 2)² が 2 乗されているため、f'(x) の符号は変わりません（− から 0 を経て −）。したがって x = −2 は極大点ではなく停留変曲点です。",
      },
    },

    // ── t5-1-q008 · mcq · exam · SL · SL 5.7 · 5 marks
    "t5-1-q008": {
      // EN: <p>The graph of the <strong>derivative</strong> <span class="chem">y = f'(x)</span> is drawn for <span class="chem">-3 &lt;= x &lt;= 5</span>. The graph of <span class="chem">f'(x)</span> crosses the <span class="chem">x</span>-axis at <span class="chem">x = -1</span> and <span class="chem">x = 4</span>, and its only turning point is a local maximum at <span class="chem">(1.5, 6)</span>. At which value of <span class="chem">x</span> does the original curve <span class="chem">y = f(x)</span> have a point of inflexion?</p>
      stem: "<p><span class=\"chem\">-3 &lt;= x &lt;= 5</span> における<strong>導関数</strong> <span class=\"chem\">y = f'(x)</span> のグラフがかかれている。<span class=\"chem\">f'(x)</span> のグラフは <span class=\"chem\">x = -1</span> と <span class=\"chem\">x = 4</span> で <span class=\"chem\">x</span> 軸と交わり、ただ 1 つの極値点は <span class=\"chem\">(1.5, 6)</span> における極大点である。元の曲線 <span class=\"chem\">y = f(x)</span> が変曲点をもつのは <span class=\"chem\">x</span> がいくつのときですか？</p>",
      options: [
        // EN: <span class="chem">x = 1.5</span>
        "<span class=\"chem\">x = 1.5</span>",
        // EN: <span class="chem">x = -1</span> and <span class="chem">x = 4</span>
        "<span class=\"chem\">x = -1</span> と <span class=\"chem\">x = 4</span>",
        // EN: <span class="chem">x = 6</span>
        "<span class=\"chem\">x = 6</span>",
        // EN: Where the graph of <span class="chem">f'(x)</span> is concave down
        "<span class=\"chem\">f'(x)</span> のグラフが上に凸である区間",
      ],
      hints: [
        // EN: A point of inflexion of <span class="chem">f(x)</span> occurs where <span class="chem">f''(x) = 0</span> and <span class="chem">f''(x)</span> changes sign.
        "<span class=\"chem\">f(x)</span> の変曲点は、<span class=\"chem\">f''(x) = 0</span> かつ <span class=\"chem\">f''(x)</span> の符号が変わるところに現れます。",
        // EN: Since <span class="chem">f''(x)</span> is the gradient of <span class="chem">f'(x)</span>, where on the graph of <span class="chem">y = f'(x)</span> does its gradient equal zero and change sign?
        "<span class=\"chem\">f''(x)</span> は <span class=\"chem\">f'(x)</span> の傾きなので、<span class=\"chem\">y = f'(x)</span> のグラフ上で傾きが 0 になり符号が変わるのはどこでしょうか？",
      ],
      // EN: <p>A point of inflexion on <span class="chem">y = f(x)</span> occurs where <span class="chem">f''(x) = 0</span> and changes sign. Since <span class="chem">f''(x)</span> is the derivative of <span class="chem">f'(x)</span>, this corresponds to a local maximum or minimum (turning point) on the graph of <span class="chem">y = f'(x)</span>, which is at <span class="chem">x = 1.5</span>.</p>
      solution: "<p><span class=\"chem\">y = f(x)</span> 上の変曲点は <span class=\"chem\">f''(x) = 0</span> かつ符号が変わるところに現れます。<span class=\"chem\">f''(x)</span> は <span class=\"chem\">f'(x)</span> の導関数なので、これは <span class=\"chem\">y = f'(x)</span> のグラフ上の極大または極小点に対応し、それは <span class=\"chem\">x = 1.5</span> です。</p>",
      misconception: {
        // EN (option B): x = −1 and x = 4 are the x-intercepts of f'(x), where f'(x) = 0 and changes sign; those are the local extrema (turning points) of f(x), not its points of inflexion.
        "1": "x = −1 と x = 4 は f'(x) の x 切片であり、f'(x) = 0 かつ符号が変わる点です；それらは f(x) の変曲点ではなく極値です。",
        // EN (option C): y = 6 is the maximum value of the gradient f'(1.5), not an x-coordinate.
        "2": "y = 6 は傾き f'(1.5) の最大値であり、x 座標ではありません。",
        // EN (option D): A point of inflexion of f(x) occurs at a specific x-value where f''(x) = 0 and changes sign—which is a turning point (local max or min) of the graph of f'(x).
        "3": "f(x) の変曲点は、f''(x) = 0 かつ符号が変わる特定の x の値——すなわち f'(x) のグラフの極大または極小点——で生じます。",
      },
    },

    // ── t5-1-q009 · numeric · exam · SL · SL 5.7, 5.8 · 6 marks
    "t5-1-q009": {
      // EN: <p>Let <span class="chem">f(x) = x e^{-x}</span> for <span class="chem">x in R</span>. Find the <span class="chem">x</span>-coordinate of the point of inflexion on the graph of <span class="chem">f</span>.</p>
      stem: "<p><span class=\"chem\">x in R</span> に対して <span class=\"chem\">f(x) = x e^{-x}</span> とする。<span class=\"chem\">f</span> のグラフ上の変曲点の <span class=\"chem\">x</span> 座標を求めなさい (Find)。</p>",
      hints: [
        // EN: Use the product rule to find <span class="chem">f'(x) = e^{-x} - x e^{-x} = (1 - x)e^{-x}</span>.
        "積の微分法を使って <span class=\"chem\">f'(x) = e^{-x} - x e^{-x} = (1 - x)e^{-x}</span> を求めます。",
        // EN: Differentiate a second time to find <span class="chem">f''(x)</span>, factor out <span class="chem">e^{-x}</span>, and solve <span class="chem">f''(x) = 0</span>.
        "もう一度微分して <span class=\"chem\">f''(x)</span> を求め、<span class=\"chem\">e^{-x}</span> をくくり出して <span class=\"chem\">f''(x) = 0</span> を解きます。",
      ],
      // EN: <p>First derivative: <span class="chem">f'(x) = (1)e^{-x} + x(-e^{-x}) = (1 - x)e^{-x}</span>.<br>Second derivative: <span class="chem">f''(x) = (-1)e^{-x} + (1 - x)(-e^{-x}) = (x - 2)e^{-x}</span>.<br>Since <span class="chem">e^{-x} &gt; 0</span> for all <span class="chem">x</span>, <span class="chem">f''(x) = 0 &lt;=&gt; x = 2</span>, and <span class="chem">f''(x)</span> changes sign from negative (<span class="chem">x &lt; 2</span>) to positive (<span class="chem">x &gt; 2</span>) at <span class="chem">x = 2</span>.</p>
      solution: "<p>第 1 次導関数：<span class=\"chem\">f'(x) = (1)e^{-x} + x(-e^{-x}) = (1 - x)e^{-x}</span>。<br>第 2 次導関数：<span class=\"chem\">f''(x) = (-1)e^{-x} + (1 - x)(-e^{-x}) = (x - 2)e^{-x}</span>。<br>すべての <span class=\"chem\">x</span> で <span class=\"chem\">e^{-x} &gt; 0</span> なので <span class=\"chem\">f''(x) = 0 &lt;=&gt; x = 2</span> であり、<span class=\"chem\">x = 2</span> で <span class=\"chem\">f''(x)</span> は負（<span class=\"chem\">x &lt; 2</span>）から正（<span class=\"chem\">x &gt; 2</span>）へ符号変化します。</p>",
    },

    // ── t5-1-q010 · order · exam · SL · SL 5.8 · 4 marks
    "t5-1-q010": {
      // EN: <p>Arrange the steps in the correct logical order to find and justify the minimum surface area of a closed cylinder of fixed volume <span class="chem">V = 128 pi</span> <span class="unit">cm3</span>.</p>
      stem: "<p>体積が <span class=\"chem\">V = 128 pi</span> <span class=\"unit\">cm3</span> で一定の閉じた円柱の表面積の最小値を求め、それが最小値であることを示す手順を正しい論理的順序に並べ替えなさい。</p>",
      options: [
        // EN: Use the volume constraint <span class="chem">pi r^2 h = 128 pi</span> to write <span class="chem">h = 128 / r^2</span>.
        "体積の制約条件 <span class=\"chem\">pi r^2 h = 128 pi</span> を使って <span class=\"chem\">h = 128 / r^2</span> と書く。",
        // EN: Substitute <span class="chem">h = 128 / r^2</span> into <span class="chem">A = 2 pi r^2 + 2 pi r h</span> to obtain <span class="chem">A(r) = 2 pi r^2 + 256 pi r^{-1}</span>.
        "<span class=\"chem\">h = 128 / r^2</span> を <span class=\"chem\">A = 2 pi r^2 + 2 pi r h</span> に代入して <span class=\"chem\">A(r) = 2 pi r^2 + 256 pi r^{-1}</span> を得る。",
        // EN: Differentiate with respect to <span class="chem">r</span> and solve <span class="chem">A'(r) = 4 pi r - 256 pi r^{-2} = 0</span> to find <span class="chem">r = 4</span> <span class="unit">cm</span>.
        "<span class=\"chem\">r</span> で微分し、<span class=\"chem\">A'(r) = 4 pi r - 256 pi r^{-2} = 0</span> を解いて <span class=\"chem\">r = 4</span> <span class=\"unit\">cm</span> を求める。",
        // EN: Evaluate <span class="chem">A''(4) = 4 pi + 512 pi / 4^3 = 12 pi &gt; 0</span> to justify a minimum, then compute <span class="chem">A(4) = 96 pi</span> <span class="unit">cm2</span>.
        "<span class=\"chem\">A''(4) = 4 pi + 512 pi / 4^3 = 12 pi &gt; 0</span> を計算して最小値であることを示し、<span class=\"chem\">A(4) = 96 pi</span> <span class=\"unit\">cm2</span> を求める。",
      ],
      hints: [
        // EN: Start by isolating the second variable <span class="chem">h</span> from the constraint equation before substituting into the objective function <span class="chem">A</span>.
        "目的関数 <span class=\"chem\">A</span> に代入する前に、まず制約条件の式から 2 つ目の変数 <span class=\"chem\">h</span> を孤立させましょう。",
        // EN: Differentiate the single-variable function <span class="chem">A(r)</span> to find the stationary point <span class="chem">r = 4</span>, and finish with the second-derivative justification and minimum value.
        "1 変数関数 <span class=\"chem\">A(r)</span> を微分して停留点 <span class=\"chem\">r = 4</span> を求め、最後に第 2 次導関数による根拠と最小値を出します。",
      ],
      // EN: <p>In any optimization problem: (1) isolate the second variable from the constraint, (2) substitute into the objective function to get one variable, (3) solve <span class="chem">A'(r) = 0</span>, and (4) verify <span class="chem">A''(r) &gt; 0</span> and evaluate the minimum value.</p>
      solution: "<p>どの最適化問題でも、(1) 制約条件から 2 つ目の変数を孤立させ、(2) 目的関数に代入して 1 変数にし、(3) <span class=\"chem\">A'(r) = 0</span> を解き、(4) <span class=\"chem\">A''(r) &gt; 0</span> を確認して最小値を計算します。</p>",
    },

    // ── t5-1-q011 · numeric · exam · SL · SL 5.8 · 6 marks
    "t5-1-q011": {
      // EN: <p>A closed cylindrical can has radius <span class="chem">r</span> <span class="unit">cm</span>, height <span class="chem">h</span> <span class="unit">cm</span>, and fixed volume <span class="chem">500</span> <span class="unit">cm3</span>. Calculate the value of <span class="chem">r</span> (in <span class="unit">cm</span>, to 3 s.f.) that minimizes the total external surface area <span class="chem">A = 2 pi r^2 + 2 pi r h</span>.</p>
      stem: "<p>閉じた円柱形の缶の半径が <span class=\"chem\">r</span> <span class=\"unit\">cm</span>、高さが <span class=\"chem\">h</span> <span class=\"unit\">cm</span>、体積が <span class=\"chem\">500</span> <span class=\"unit\">cm3</span> で一定である。外側の全表面積 <span class=\"chem\">A = 2 pi r^2 + 2 pi r h</span> を最小にする <span class=\"chem\">r</span> の値（<span class=\"unit\">cm</span>、有効数字 3 桁）を計算しなさい (Calculate)。</p>",
      hints: [
        // EN: From <span class="chem">pi r^2 h = 500</span>, substitute <span class="chem">h = 500 / (pi r^2)</span> into <span class="chem">A</span> to get <span class="chem">A(r) = 2 pi r^2 + 1000 / r</span>.
        "<span class=\"chem\">pi r^2 h = 500</span> より <span class=\"chem\">h = 500 / (pi r^2)</span> を <span class=\"chem\">A</span> に代入し、<span class=\"chem\">A(r) = 2 pi r^2 + 1000 / r</span> を得ます。",
        // EN: Solve <span class="chem">A'(r) = 4 pi r - 1000 / r^2 = 0 =&gt; r^3 = 250 / pi</span>.
        "<span class=\"chem\">A'(r) = 4 pi r - 1000 / r^2 = 0 =&gt; r^3 = 250 / pi</span> を解きます。",
      ],
      // EN: <p>Substituting <span class="chem">h = 500 / (pi r^2)</span> gives <span class="chem">A(r) = 2 pi r^2 + 1000 r^{-1}</span>. Setting <span class="chem">A'(r) = 4 pi r - 1000 r^{-2} = 0</span> gives <span class="chem">r^3 = 250 / pi ≈ 79.5775</span>, so <span class="chem">r = (250 / pi)^{1/3} ≈ 4.30</span> <span class="unit">cm</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">h = 500 / (pi r^2)</span> を代入すると <span class=\"chem\">A(r) = 2 pi r^2 + 1000 r^{-1}</span> となります。<span class=\"chem\">A'(r) = 4 pi r - 1000 r^{-2} = 0</span> とおくと <span class=\"chem\">r^3 = 250 / pi ≈ 79.5775</span> なので、<span class=\"chem\">r = (250 / pi)^{1/3} ≈ 4.30</span> <span class=\"unit\">cm</span>（有効数字 3 桁）です。</p>",
    },

    // ── t5-1-q012 · numeric · exam · SL · SL 5.6, 5.8 · 6 marks
    "t5-1-q012": {
      // EN: <p>Consider <span class="chem">f(x) = (ln x) / x</span> for <span class="chem">x &gt; 0</span>. Find the exact maximum value of <span class="chem">f(x)</span>.</p>
      stem: "<p><span class=\"chem\">x &gt; 0</span> に対して <span class=\"chem\">f(x) = (ln x) / x</span> を考える。<span class=\"chem\">f(x)</span> の最大値の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: Differentiate using the quotient rule: <span class="chem">f'(x) = (x(1/x) - (ln x)(1)) / x^2 = (1 - ln x) / x^2</span>.
        "商の微分法を使って微分します：<span class=\"chem\">f'(x) = (x(1/x) - (ln x)(1)) / x^2 = (1 - ln x) / x^2</span>。",
        // EN: Set <span class="chem">f'(x) = 0</span> to find <span class="chem">ln x = 1 =&gt; x = e</span>, then evaluate <span class="chem">f(e)</span> exactly, using <span class="chem">ln e = 1</span>.
        "<span class=\"chem\">f'(x) = 0</span> とおいて <span class=\"chem\">ln x = 1 =&gt; x = e</span> を求め、<span class=\"chem\">ln e = 1</span> を用いて <span class=\"chem\">f(e)</span> を正確に計算します。",
      ],
      // EN: <p>By the quotient rule, <span class="chem">f'(x) = (1 - ln x) / x^2 = 0 =&gt; ln x = 1 =&gt; x = e</span>. For <span class="chem">0 &lt; x &lt; e</span>, <span class="chem">f'(x) &gt; 0</span>, and for <span class="chem">x &gt; e</span>, <span class="chem">f'(x) &lt; 0</span>, confirming a global maximum. The maximum value is <span class="chem">f(e) = (ln e) / e = 1 / e</span>.</p>
      solution: "<p>商の微分法より <span class=\"chem\">f'(x) = (1 - ln x) / x^2 = 0 =&gt; ln x = 1 =&gt; x = e</span>。<span class=\"chem\">0 &lt; x &lt; e</span> で <span class=\"chem\">f'(x) &gt; 0</span>、<span class=\"chem\">x &gt; e</span> で <span class=\"chem\">f'(x) &lt; 0</span> となるため最大値であることが確かめられます。最大値は <span class=\"chem\">f(e) = (ln e) / e = 1 / e</span> です。</p>",
    },

    // ── t5-1-q013 · short · exam · SL · SL 5.7, 5.8 · 7 marks
    "t5-1-q013": {
      // EN: <p>Let <span class="chem">f(x) = x^3 - 3x^2 - 9x + 11</span> for <span class="chem">x in R</span>.<br>(a) Find the coordinates of the two stationary points on the graph of <span class="chem">f</span>, and determine the nature of each point using the second derivative. <strong>[5 marks]</strong><br>(b) Find the coordinates of the point of inflexion and state the set of values of <span class="chem">x</span> for which the graph of <span class="chem">f</span> is concave down. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">x in R</span> に対して <span class=\"chem\">f(x) = x^3 - 3x^2 - 9x + 11</span> とする。<br>(a) <span class=\"chem\">f</span> のグラフ上の 2 つの停留点の座標を求め (Find)、第 2 次導関数を用いてそれぞれの点の性質を判定しなさい (determine)。 <strong>[5 marks]</strong><br>(b) 変曲点の座標を求め (Find)、<span class=\"chem\">f</span> のグラフが上に凸となる <span class=\"chem\">x</span> の値の範囲を述べなさい (state)。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: For part (a), factor <span class="chem">3x^2 - 6x - 9 = 0</span> by dividing through by <span class="chem">3</span> first.
        "(a) では、まず両辺を <span class=\"chem\">3</span> で割ってから <span class=\"chem\">3x^2 - 6x - 9 = 0</span> を因数分解します。",
        // EN: For part (b), solve <span class="chem">f''(x) &lt; 0</span> for concave down.
        "(b) では、上に凸となる範囲を求めるために <span class=\"chem\">f''(x) &lt; 0</span> を解きます。",
      ],
      // EN: <p>(a) <span class="chem">f'(x) = 3x^2 - 6x - 9 = 3(x - 3)(x + 1) = 0 =&gt; x = -1, 3</span>. Substituting into <span class="chem">f(x)</span> gives <span class="chem">f(-1) = -1 - 3 + 9 + 11 = 16</span> and <span class="chem">f(3) = 27 - 27 - 27 + 11 = -16</span>. Using <span class="chem">f''(x) = 6x - 6</span>, <span class="chem">f''(-1) = -12 &lt; 0</span> (local maximum at <span class="chem">(-1, 16)</span>) and <span class="chem">f''(3) = 12 &gt; 0</span> (local minimum at <span class="chem">(3, -16)</span>).<br>(b) <span class="chem">f''(x) = 6x - 6 = 0 =&gt; x = 1</span>, <span class="chem">f(1) = 1 - 3 - 9 + 11 = 0</span>, and <span class="chem">f''(x)</span> changes sign at <span class="chem">x = 1</span>, so the point of inflexion is <span class="chem">(1, 0)</span>. Since <span class="chem">6x - 6 &lt; 0 &lt;=&gt; x &lt; 1</span>, <span class="chem">f</span> is concave down for <span class="chem">x &lt; 1</span>.</p>
      solution: "<p>(a) <span class=\"chem\">f'(x) = 3x^2 - 6x - 9 = 3(x - 3)(x + 1) = 0 =&gt; x = -1, 3</span>。<span class=\"chem\">f(x)</span> に代入すると <span class=\"chem\">f(-1) = -1 - 3 + 9 + 11 = 16</span> かつ <span class=\"chem\">f(3) = 27 - 27 - 27 + 11 = -16</span>。<span class=\"chem\">f''(x) = 6x - 6</span> を用いると <span class=\"chem\">f''(-1) = -12 &lt; 0</span>（<span class=\"chem\">(-1, 16)</span> は極大点）および <span class=\"chem\">f''(3) = 12 &gt; 0</span>（<span class=\"chem\">(3, -16)</span> は極小点）。<br>(b) <span class=\"chem\">f''(x) = 6x - 6 = 0 =&gt; x = 1</span>、<span class=\"chem\">f(1) = 1 - 3 - 9 + 11 = 0</span> であり、<span class=\"chem\">x = 1</span> で <span class=\"chem\">f''(x)</span> の符号が変わるので変曲点は <span class=\"chem\">(1, 0)</span>。<span class=\"chem\">6x - 6 &lt; 0 &lt;=&gt; x &lt; 1</span> より、<span class=\"chem\">f</span> は <span class=\"chem\">x &lt; 1</span> で上に凸である。</p>",
      // EN: <p>(a) Local maximum at <span class="chem">(-1, 16)</span>; local minimum at <span class="chem">(3, -16)</span>.<br>(b) Point of inflexion at <span class="chem">(1, 0)</span>; concave down for <span class="chem">x &lt; 1</span>.</p>
      answer: "<p>(a) <span class=\"chem\">(-1, 16)</span> で極大；<span class=\"chem\">(3, -16)</span> で極小。<br>(b) 変曲点は <span class=\"chem\">(1, 0)</span>；<span class=\"chem\">x &lt; 1</span> で上に凸。</p>",
      markscheme: [
        // EN: M1: Differentiate: <span class="chem">f'(x) = 3x^2 - 6x - 9</span>.
        "M1：微分する：<span class=\"chem\">f'(x) = 3x^2 - 6x - 9</span>。",
        // EN: A1: Solve <span class="chem">f'(x) = 3(x - 3)(x + 1) = 0</span> to get <span class="chem">x = -1</span> and <span class="chem">x = 3</span>.
        "A1：<span class=\"chem\">f'(x) = 3(x - 3)(x + 1) = 0</span> を解き、<span class=\"chem\">x = -1</span> と <span class=\"chem\">x = 3</span> を得る。",
        // EN: A1: Find both stationary points: <span class="chem">(-1, 16)</span> and <span class="chem">(3, -16)</span>.
        "A1：両方の停留点 <span class=\"chem\">(-1, 16)</span> と <span class=\"chem\">(3, -16)</span> を求める。",
        // EN: M1: Find <span class="chem">f''(x) = 6x - 6</span> and evaluate it at both stationary points.
        "M1：<span class=\"chem\">f''(x) = 6x - 6</span> を求め、両方の停留点で値を計算する。",
        // EN: R1: Since <span class="chem">f''(-1) = -12 &lt; 0</span>, <span class="chem">(-1, 16)</span> is a local maximum, and since <span class="chem">f''(3) = 12 &gt; 0</span>, <span class="chem">(3, -16)</span> is a local minimum.
        "R1：<span class=\"chem\">f''(-1) = -12 &lt; 0</span> より <span class=\"chem\">(-1, 16)</span> が極大点、<span class=\"chem\">f''(3) = 12 &gt; 0</span> より <span class=\"chem\">(3, -16)</span> が極小点。",
        // EN: A1: Solve <span class="chem">f''(x) = 6x - 6 = 0 =&gt; x = 1</span>, giving point of inflexion <span class="chem">(1, 0)</span>.
        "A1：<span class=\"chem\">f''(x) = 6x - 6 = 0 =&gt; x = 1</span> を解き、変曲点 <span class=\"chem\">(1, 0)</span> を得る。",
        // EN: A1: State that <span class="chem">f</span> is concave down (<span class="chem">f''(x) &lt; 0</span>) for <span class="chem">x &lt; 1</span>.
        "A1：<span class=\"chem\">x &lt; 1</span> で <span class=\"chem\">f</span> が上に凸（<span class=\"chem\">f''(x) &lt; 0</span>）であることを述べる。",
      ],
    },

    // ── t5-1-q014 · numeric · challenge · SL · SL 5.4 · 7 marks
    "t5-1-q014": {
      // EN: <p>A tangent to the parabola <span class="chem">y = x^2 + 5</span> at a point <span class="chem">P(a, a^2 + 5)</span> in the first quadrant (<span class="chem">a &gt; 0</span>) passes through the point <span class="chem">(0, -4)</span>. Find the value of <span class="chem">a</span>.</p>
      stem: "<p>放物線 <span class=\"chem\">y = x^2 + 5</span> の第 1 象限（<span class=\"chem\">a &gt; 0</span>）にある点 <span class=\"chem\">P(a, a^2 + 5)</span> における接線が点 <span class=\"chem\">(0, -4)</span> を通る。<span class=\"chem\">a</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: “passes through <span class="chem">(0, -4)</span>” means that the point <span class="chem">(0, -4)</span> satisfies the equation of the tangent at <span class="chem">P</span>. So write that tangent in terms of <span class="chem">a</span> first, then substitute <span class="chem">x = 0</span>, <span class="chem">y = -4</span> to get an equation in <span class="chem">a</span>.
        "解読：「<span class=\"chem\">(0, -4)</span> を通る」とは、点 <span class=\"chem\">(0, -4)</span> が <span class=\"chem\">P</span> における接線の方程式を満たすということです。まずその接線を <span class=\"chem\">a</span> を用いて表し、<span class=\"chem\">x = 0</span>、<span class=\"chem\">y = -4</span> を代入して <span class=\"chem\">a</span> の方程式をつくります。",
        // EN: At <span class="chem">P(a, a^2 + 5)</span>, the gradient of the tangent is <span class="chem">dy/dx = 2a</span>, so the tangent equation is <span class="chem">y - (a^2 + 5) = 2a(x - a)</span>.
        "<span class=\"chem\">P(a, a^2 + 5)</span> における接線の傾きは <span class=\"chem\">dy/dx = 2a</span> なので、接線の方程式は <span class=\"chem\">y - (a^2 + 5) = 2a(x - a)</span> です。",
        // EN: Substitute the external point <span class="chem">(x, y) = (0, -4)</span> into the tangent equation and solve for <span class="chem">a &gt; 0</span>.
        "外部の点 <span class=\"chem\">(x, y) = (0, -4)</span> を接線の方程式に代入し、<span class=\"chem\">a &gt; 0</span> について解きます。",
      ],
      // EN: <p>At <span class="chem">P(a, a^2 + 5)</span>, <span class="chem">m_T = 2a</span>, so the tangent line is <span class="chem">y - (a^2 + 5) = 2a(x - a) =&gt; y = 2a x - a^2 + 5</span>. Since it passes through <span class="chem">(0, -4)</span>, substituting <span class="chem">x = 0, y = -4</span> gives <span class="chem">-4 = -a^2 + 5 =&gt; a^2 = 9</span>. Since <span class="chem">a &gt; 0</span>, <span class="chem">a = 3</span>.</p>
      solution: "<p><span class=\"chem\">P(a, a^2 + 5)</span> において <span class=\"chem\">m_T = 2a</span> なので、接線は <span class=\"chem\">y - (a^2 + 5) = 2a(x - a) =&gt; y = 2a x - a^2 + 5</span> です。<span class=\"chem\">(0, -4)</span> を通るので <span class=\"chem\">x = 0, y = -4</span> を代入すると <span class=\"chem\">-4 = -a^2 + 5 =&gt; a^2 = 9</span>。<span class=\"chem\">a &gt; 0</span> より <span class=\"chem\">a = 3</span> です。</p>",
    },

    // ── t5-1-q015 · mcq · exam · SL · SL 5.6 · 4 marks
    "t5-1-q015": {
      // EN: <p>Given the table of values at <span class="chem">x = 2</span> and <span class="chem">x = 5</span>:<br><span class="chem">g(2) = 5, g'(2) = -3, f(2) = 4, f'(2) = 7, f(5) = -1, f'(5) = 6</span>.<br>If <span class="chem">h(x) = f(g(x))</span>, find <span class="chem">h'(2)</span>.</p>
      stem: "<p><span class=\"chem\">x = 2</span> と <span class=\"chem\">x = 5</span> における値の表が与えられている：<br><span class=\"chem\">g(2) = 5, g'(2) = -3, f(2) = 4, f'(2) = 7, f(5) = -1, f'(5) = 6</span>。<br><span class=\"chem\">h(x) = f(g(x))</span> のとき、<span class=\"chem\">h'(2)</span> を求めなさい (Find)。</p>",
      options: [
        // EN: <span class="chem">-18</span>
        "<span class=\"chem\">-18</span>",
        // EN: <span class="chem">-21</span>
        "<span class=\"chem\">-21</span>",
        // EN: <span class="chem">42</span>
        "<span class=\"chem\">42</span>",
        // EN: <span class="chem">15</span>
        "<span class=\"chem\">15</span>",
      ],
      hints: [
        // EN: Write down the chain rule carefully: <span class="chem">h'(x) = f'(g(x)) * g'(x)</span>.
        "合成関数の微分法を丁寧に書きましょう：<span class=\"chem\">h'(x) = f'(g(x)) * g'(x)</span>。",
        // EN: At <span class="chem">x = 2</span>, <span class="chem">h'(2) = f'(g(2)) * g'(2)</span>. Look up <span class="chem">g(2) = 5</span> first, then find <span class="chem">f'(5)</span>.
        "<span class=\"chem\">x = 2</span> で <span class=\"chem\">h'(2) = f'(g(2)) * g'(2)</span>。まず <span class=\"chem\">g(2) = 5</span> を読み取り、次に <span class=\"chem\">f'(5)</span> を探します。",
      ],
      // EN: <p>By the chain rule, <span class="chem">h'(2) = f'(g(2)) * g'(2) = f'(5) * (-3) = 6 * (-3) = -18</span>.</p>
      solution: "<p>合成関数の微分法より、<span class=\"chem\">h'(2) = f'(g(2)) * g'(2) = f'(5) * (-3) = 6 * (-3) = -18</span> です。</p>",
      misconception: {
        // EN (option B): −21 comes from computing f'(2) × g'(2) = 7 × (−3). In the chain rule h'(2) = f'(g(2)) · g'(2), f' must be evaluated at g(2) = 5, not at 2!
        "1": "−21 は f'(2) × g'(2) = 7 × (−3) を計算した結果です。合成関数の微分法 h'(2) = f'(g(2)) · g'(2) では、f' は 2 ではなく g(2) = 5 で評価しなければなりません！",
        // EN (option C): 42 comes from multiplying f'(2) × f'(5) = 7 × 6 instead of f'(g(2)) × g'(2).
        "2": "42 は f'(g(2)) × g'(2) ではなく f'(2) × f'(5) = 7 × 6 を掛けた結果です。",
        // EN (option D): 15 comes from multiplying g(2) × (−g'(2)); use h'(2) = f'(g(2)) · g'(2).
        "3": "15 は g(2) × (−g'(2)) を掛けた結果です；h'(2) = f'(g(2)) · g'(2) を使いましょう。",
      },
    },

    // ── t5-1-q016 · short · challenge · SL · SL 5.8 · 8 marks
    "t5-1-q016": {
      // EN: <p>A lifeguard is at point <span class="chem">A</span> on a straight shoreline. A swimmer in distress is at point <span class="chem">B</span> in the water, <span class="chem">60</span> <span class="unit">m</span> perpendicular from a point <span class="chem">C</span> on the shoreline, where the distance <span class="chem">AC = 100</span> <span class="unit">m</span>. The lifeguard runs along the shore from <span class="chem">A</span> to a point <span class="chem">P</span> at a distance <span class="chem">x</span> <span class="unit">m</span> from <span class="chem">C</span> (<span class="chem">0 &lt;= x &lt;= 100</span>) at <span class="chem">5</span> <span class="unit">m s-1</span>, and then swims in a straight line from <span class="chem">P</span> to <span class="chem">B</span> at <span class="chem">3</span> <span class="unit">m s-1</span>.<br>(a) Show that the total time <span class="chem">T</span> seconds taken to reach the swimmer is <span class="chem">T(x) = (100 - x)/5 + sqrt(x^2 + 3600)/3</span>. <strong>[2 marks]</strong><br>(b) Find the value of <span class="chem">x</span> that minimizes <span class="chem">T(x)</span>, and calculate the minimum time required. <strong>[6 marks]</strong></p>
      stem: "<p>ライフガードがまっすぐな海岸線上の点 <span class=\"chem\">A</span> にいる。溺れている泳者は水中の点 <span class=\"chem\">B</span> にあり、海岸線上の点 <span class=\"chem\">C</span> から垂直に <span class=\"chem\">60</span> <span class=\"unit\">m</span> 離れている（ただし <span class=\"chem\">AC = 100</span> <span class=\"unit\">m</span>）。ライフガードは <span class=\"chem\">A</span> から海岸線に沿って <span class=\"chem\">C</span> から距離 <span class=\"chem\">x</span> <span class=\"unit\">m</span>（<span class=\"chem\">0 &lt;= x &lt;= 100</span>）にある点 <span class=\"chem\">P</span> まで速さ <span class=\"chem\">5</span> <span class=\"unit\">m s-1</span> で走り、そこから <span class=\"chem\">P</span> から <span class=\"chem\">B</span> まで速さ <span class=\"chem\">3</span> <span class=\"unit\">m s-1</span> でまっすぐ泳ぐ。<br>(a) 泳者に到達するまでにかかる総時間 <span class=\"chem\">T</span> 秒が <span class=\"chem\">T(x) = (100 - x)/5 + sqrt(x^2 + 3600)/3</span> で与えられることを示しなさい (Show that)。 <strong>[2 marks]</strong><br>(b) <span class=\"chem\">T(x)</span> を最小にする <span class=\"chem\">x</span> の値を求め (Find)、最小時間を計算しなさい (calculate)。 <strong>[6 marks]</strong></p>",
      hints: [
        // EN: Decode: the route has two legs at different speeds, so the total time is the sum of distance / speed for each leg. Then minimise <span class="chem">T(x)</span> on the closed interval <span class="chem">0 &lt;= x &lt;= 100</span>: compare the stationary value with the values at the endpoints.
        "解読：経路は速さの異なる 2 つの区間からなるので、所要時間の合計は各区間の「距離 / 速さ」の和です。そのうえで閉区間 <span class=\"chem\">0 &lt;= x &lt;= 100</span> で <span class=\"chem\">T(x)</span> を最小化します。停留点での値と端点での値を比べましょう。",
        // EN: For part (a), use <span class="chem">time = distance / speed</span> for the shore segment <span class="chem">AP = 100 - x</span> and the water hypotenuse <span class="chem">PB = sqrt(x^2 + 60^2)</span>.
        "(a) では、海岸の区間 <span class=\"chem\">AP = 100 - x</span> と水中の斜辺 <span class=\"chem\">PB = sqrt(x^2 + 60^2)</span> に対して <span class=\"chem\">time = distance / speed</span>（時間＝距離÷速さ）を使います。",
        // EN: For part (b), write <span class="chem">sqrt(x^2 + 3600) = (x^2 + 3600)^{1/2}</span> and use the chain rule to differentiate.
        "(b) では、<span class=\"chem\">sqrt(x^2 + 3600) = (x^2 + 3600)^{1/2}</span> と書き、合成関数の微分法を使って微分します。",
      ],
      // EN: <p>(a) The shore distance is <span class="chem">AP = 100 - x</span> at <span class="chem">5</span> <span class="unit">m s-1</span>, taking <span class="chem">(100 - x)/5</span> seconds. By Pythagoras in right triangle <span class="chem">PCB</span>, <span class="chem">PB = sqrt(x^2 + 60^2) = sqrt(x^2 + 3600)</span> at <span class="chem">3</span> <span class="unit">m s-1</span>, giving <span class="chem">T(x) = (100 - x)/5 + sqrt(x^2 + 3600)/3</span>.<br>(b) Differentiating gives <span class="chem">T'(x) = -1/5 + (1/3) * (2x) / (2 sqrt(x^2 + 3600)) = 0 =&gt; 5x = 3 sqrt(x^2 + 3600)</span>. Squaring gives <span class="chem">25x^2 = 9x^2 + 32400 =&gt; 16x^2 = 32400 =&gt; x^2 = 2025 =&gt; x = 45</span> <span class="unit">m</span> (with <span class="chem">T'(x)</span> changing from <span class="chem">-</span> to <span class="chem">+</span>). Then <span class="chem">T(45) = (100 - 45)/5 + sqrt(2025 + 3600)/3 = 11 + 75/3 = 36</span> <span class="unit">s</span>.</p>
      solution: "<p>(a) 海岸の距離は <span class=\"chem\">AP = 100 - x</span> を速さ <span class=\"chem\">5</span> <span class=\"unit\">m s-1</span> で走るので <span class=\"chem\">(100 - x)/5</span> 秒かかる。直角三角形 <span class=\"chem\">PCB</span> で三平方の定理より <span class=\"chem\">PB = sqrt(x^2 + 60^2) = sqrt(x^2 + 3600)</span> を <span class=\"chem\">3</span> <span class=\"unit\">m s-1</span> で泳ぐので、<span class=\"chem\">T(x) = (100 - x)/5 + sqrt(x^2 + 3600)/3</span> となる。<br>(b) 微分すると <span class=\"chem\">T'(x) = -1/5 + (1/3) * (2x) / (2 sqrt(x^2 + 3600)) = 0 =&gt; 5x = 3 sqrt(x^2 + 3600)</span>。両辺を 2 乗すると <span class=\"chem\">25x^2 = 9x^2 + 32400 =&gt; 16x^2 = 32400 =&gt; x^2 = 2025 =&gt; x = 45</span> <span class=\"unit\">m</span>（<span class=\"chem\">T'(x)</span> は <span class=\"chem\">-</span> から <span class=\"chem\">+</span> へ変化）。よって <span class=\"chem\">T(45) = (100 - 45)/5 + sqrt(2025 + 3600)/3 = 11 + 75/3 = 36</span> <span class=\"unit\">s</span>。</p>",
      // EN: <p><span class="chem">x = 45</span> <span class="unit">m</span>; minimum time <span class="chem">T = 36</span> <span class="unit">s</span>.</p>
      answer: "<p><span class=\"chem\">x = 45</span> <span class=\"unit\">m</span>；最小時間 <span class=\"chem\">T = 36</span> <span class=\"unit\">s</span>。</p>",
      markscheme: [
        // EN: M1: Use Pythagoras' theorem for the swimming distance: <span class="chem">PB = sqrt(x^2 + 60^2)</span>.
        "M1：三平方の定理を用いて泳ぐ距離を表す：<span class=\"chem\">PB = sqrt(x^2 + 60^2)</span>。",
        // EN: A1: Correct distances <span class="chem">AP = 100 - x</span> and <span class="chem">PB = sqrt(x^2 + 3600)</span>; dividing each by its speed gives <span class="chem">T(x) = (100 - x)/5 + sqrt(x^2 + 3600)/3</span> AG.
        "A1：正しい距離 <span class=\"chem\">AP = 100 - x</span> と <span class=\"chem\">PB = sqrt(x^2 + 3600)</span>。それぞれを速さで割ると <span class=\"chem\">T(x) = (100 - x)/5 + sqrt(x^2 + 3600)/3</span> AG。",
        // EN: M1: Differentiate using the chain rule.
        "M1：合成関数の微分法を用いて微分する。",
        // EN: A1: <span class="chem">T'(x) = -1/5 + x / (3 sqrt(x^2 + 3600))</span>.
        "A1：<span class=\"chem\">T'(x) = -1/5 + x / (3 sqrt(x^2 + 3600))</span>。",
        // EN: M1: Set <span class="chem">T'(x) = 0 =&gt; 5x = 3 sqrt(x^2 + 3600)</span> and square both sides: <span class="chem">25x^2 = 9(x^2 + 3600)</span>.
        "M1：<span class=\"chem\">T'(x) = 0 =&gt; 5x = 3 sqrt(x^2 + 3600)</span> とおき、両辺を 2 乗する：<span class=\"chem\">25x^2 = 9(x^2 + 3600)</span>。",
        // EN: A1: Solve <span class="chem">16x^2 = 9 * 3600 =&gt; 4x = 3 * 60 =&gt; x = 45</span> <span class="unit">m</span>.
        "A1：<span class=\"chem\">16x^2 = 9 * 3600 =&gt; 4x = 3 * 60 =&gt; x = 45</span> <span class=\"unit\">m</span> を解く。",
        // EN: R1: Justify the minimum: <span class="chem">T'(x)</span> changes sign from <span class="chem">-</span> to <span class="chem">+</span> at <span class="chem">x = 45</span> (or compare <span class="chem">T(45) = 36</span> with the endpoint values <span class="chem">T(0) = 40</span> and <span class="chem">T(100) ≈ 38.9</span>).
        "R1：最小であることを示す：<span class=\"chem\">x = 45</span> で <span class=\"chem\">T'(x)</span> の符号が <span class=\"chem\">-</span> から <span class=\"chem\">+</span> に変わる（または <span class=\"chem\">T(45) = 36</span> を端点の値 <span class=\"chem\">T(0) = 40</span>、<span class=\"chem\">T(100) ≈ 38.9</span> と比較する）。",
        // EN: A1: Substitute <span class="chem">x = 45</span> into <span class="chem">T(x)</span>: <span class="chem">T(45) = 55/5 + sqrt(2025 + 3600)/3 = 11 + 75/3 = 36</span> <span class="unit">s</span>.
        "A1：<span class=\"chem\">x = 45</span> を <span class=\"chem\">T(x)</span> に代入する：<span class=\"chem\">T(45) = 55/5 + sqrt(2025 + 3600)/3 = 11 + 75/3 = 36</span> <span class=\"unit\">s</span>。",
      ],
    },

    // ── t5-1-q017 · numeric · challenge · SL · SL 5.7, 5.8 · 6 marks
    "t5-1-q017": {
      // EN: <p>The cubic curve <span class="chem">f(x) = a x^3 + b x^2 + c x + d</span> has a local maximum at <span class="chem">(0, 4)</span> and a point of inflexion at <span class="chem">(1, 2)</span>. Find the value of <span class="chem">a</span>.</p>
      stem: "<p>3 次曲線 <span class=\"chem\">f(x) = a x^3 + b x^2 + c x + d</span> が <span class=\"chem\">(0, 4)</span> に極大点をもち、<span class=\"chem\">(1, 2)</span> に変曲点をもつ。<span class=\"chem\">a</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: each fact gives equations. A local maximum at <span class="chem">(0, 4)</span> gives <span class="chem">f(0) = 4</span> and <span class="chem">f'(0) = 0</span>; a point of inflexion at <span class="chem">(1, 2)</span> gives <span class="chem">f(1) = 2</span> and <span class="chem">f''(1) = 0</span>. That is four equations for the four unknowns <span class="chem">a, b, c, d</span>.
        "解読：それぞれの条件から方程式が得られます。<span class=\"chem\">(0, 4)</span> で極大となることから <span class=\"chem\">f(0) = 4</span> と <span class=\"chem\">f'(0) = 0</span>、<span class=\"chem\">(1, 2)</span> が変曲点であることから <span class=\"chem\">f(1) = 2</span> と <span class=\"chem\">f''(1) = 0</span> が得られます。これで 4 つの未知数 <span class=\"chem\">a, b, c, d</span> に対する 4 つの方程式がそろいます。",
        // EN: Use <span class="chem">f(0) = 4</span> and <span class="chem">f'(0) = 0</span> to find <span class="chem">d = 4</span> and <span class="chem">c = 0</span> immediately!
        "<span class=\"chem\">f(0) = 4</span> と <span class=\"chem\">f'(0) = 0</span> を使うと、ただちに <span class=\"chem\">d = 4</span> と <span class=\"chem\">c = 0</span> が求まります！",
        // EN: Next use <span class="chem">f''(1) = 6a(1) + 2b = 0 =&gt; b = -3a</span>, and substitute into <span class="chem">f(1) = a + b + 4 = 2</span>.
        "次に <span class=\"chem\">f''(1) = 6a(1) + 2b = 0 =&gt; b = -3a</span> を使い、<span class=\"chem\">f(1) = a + b + 4 = 2</span> に代入します。",
      ],
      // EN: <p>We have <span class="chem">f'(x) = 3a x^2 + 2b x + c</span> and <span class="chem">f''(x) = 6a x + 2b</span>. Since <span class="chem">(0, 4)</span> is a local maximum, <span class="chem">f(0) = d = 4</span> and <span class="chem">f'(0) = c = 0</span>. Since <span class="chem">(1, 2)</span> is a point of inflexion, <span class="chem">f''(1) = 6a + 2b = 0 =&gt; b = -3a</span>, and <span class="chem">f(1) = a + b + 4 = 2 =&gt; a - 3a = -2 =&gt; -2a = -2 =&gt; a = 1</span>.</p>
      solution: "<p><span class=\"chem\">f'(x) = 3a x^2 + 2b x + c</span> かつ <span class=\"chem\">f''(x) = 6a x + 2b</span> です。<span class=\"chem\">(0, 4)</span> が極大点なので <span class=\"chem\">f(0) = d = 4</span> かつ <span class=\"chem\">f'(0) = c = 0</span>。<span class=\"chem\">(1, 2)</span> が変曲点なので <span class=\"chem\">f''(1) = 6a + 2b = 0 =&gt; b = -3a</span>、そして <span class=\"chem\">f(1) = a + b + 4 = 2 =&gt; a - 3a = -2 =&gt; -2a = -2 =&gt; a = 1</span> となります。</p>",
    },

    // ── t5-1-q018 · numeric · foundation · SL · SL 5.1 · 2 marks
    "t5-1-q018": {
      // EN: <p>The depth of water in a tank is <span class="chem">D(t) = 2t^2 - 3t + 10</span> <span class="unit">cm</span>, where <span class="chem">t</span> is the time in minutes. The average rate of change of the depth between <span class="chem">t = 2</span> and <span class="chem">t = 2 + h</span> is <span class="chem">(D(2 + h) - D(2)) / h = 5 + 2h</span>. By considering the limit as <span class="chem">h -&gt; 0</span>, find the rate at which the depth is changing when <span class="chem">t = 2</span>, in <span class="unit">cm</span> per minute.</p>
      stem: "<p>タンクの水深は <span class=\"chem\">D(t) = 2t^2 - 3t + 10</span> <span class=\"unit\">cm</span> で、<span class=\"chem\">t</span> は時間（分）である。<span class=\"chem\">t = 2</span> から <span class=\"chem\">t = 2 + h</span> までの水深の平均変化率は <span class=\"chem\">(D(2 + h) - D(2)) / h = 5 + 2h</span> である。<span class=\"chem\">h -&gt; 0</span> のときの極限を考えて、<span class=\"chem\">t = 2</span> における水深の変化率を毎分 <span class=\"unit\">cm</span> 単位で求めなさい (Find)。</p>",
      hints: [
        // EN: The instantaneous rate of change is the limit of the average rate of change (the gradient of the chord) as <span class="chem">h -&gt; 0</span>.
        "瞬間の変化率は、<span class=\"chem\">h -&gt; 0</span> のときの平均変化率（弦の傾き）の極限です。",
        // EN: Let <span class="chem">h</span> get closer and closer to <span class="chem">0</span> in <span class="chem">5 + 2h</span>. You can check your answer with <span class="chem">D'(t) = 4t - 3</span>.
        "<span class=\"chem\">5 + 2h</span> の <span class=\"chem\">h</span> をどんどん <span class=\"chem\">0</span> に近づけましょう。答えは <span class=\"chem\">D'(t) = 4t - 3</span> で確かめられます。",
      ],
      // EN: <p>As <span class="chem">h -&gt; 0</span>, <span class="chem">5 + 2h -&gt; 5</span>, so <span class="chem">D'(2) = 5</span>: the depth is increasing at <span class="chem">5</span> <span class="unit">cm</span> per minute when <span class="chem">t = 2</span>. Check: <span class="chem">D'(t) = 4t - 3</span>, so <span class="chem">D'(2) = 8 - 3 = 5</span>.</p>
      solution: "<p><span class=\"chem\">h -&gt; 0</span> のとき <span class=\"chem\">5 + 2h -&gt; 5</span> なので <span class=\"chem\">D'(2) = 5</span> です。つまり <span class=\"chem\">t = 2</span> のとき、水深は毎分 <span class=\"chem\">5</span> <span class=\"unit\">cm</span> の割合で増加しています。確認：<span class=\"chem\">D'(t) = 4t - 3</span> より <span class=\"chem\">D'(2) = 8 - 3 = 5</span>。</p>",
    },

  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ja', 't5-1.q', {
  questions: {

    // ── t5-1-q019 · numeric · foundation · SL · SL 5.1 · 2 marks
    "t5-1-q019": {
      // EN: <p>The point <span class="chem">P(2, 8)</span> lies on the curve <span class="chem">y = x^3</span>. For the point <span class="chem">Q(2 + h, (2 + h)^3)</span>, the gradient of the chord <span class="chem">PQ</span> is <span class="chem">12.61</span> when <span class="chem">h = 0.1</span>, <span class="chem">12.0601</span> when <span class="chem">h = 0.01</span> and <span class="chem">12.006001</span> when <span class="chem">h = 0.001</span>. Deduce the gradient of the tangent to the curve at <span class="chem">P</span>.</p>
      stem: "<p>点 <span class=\"chem\">P(2, 8)</span> は曲線 <span class=\"chem\">y = x^3</span> 上にある。点 <span class=\"chem\">Q(2 + h, (2 + h)^3)</span> について、弦 <span class=\"chem\">PQ</span> の傾きは <span class=\"chem\">h = 0.1</span> のとき <span class=\"chem\">12.61</span>、<span class=\"chem\">h = 0.01</span> のとき <span class=\"chem\">12.0601</span>、<span class=\"chem\">h = 0.001</span> のとき <span class=\"chem\">12.006001</span> である。<span class=\"chem\">P</span> における曲線の接線の傾きを導きなさい (Deduce)。</p>",
      hints: [
        // EN: As <span class="chem">Q</span> slides along the curve towards <span class="chem">P</span> (that is, <span class="chem">h -&gt; 0</span>), the chord <span class="chem">PQ</span> turns into the tangent at <span class="chem">P</span>.
        "<span class=\"chem\">Q</span> が曲線に沿って <span class=\"chem\">P</span> に近づく（つまり <span class=\"chem\">h -&gt; 0</span>）と、弦 <span class=\"chem\">PQ</span> は <span class=\"chem\">P</span> における接線になります。",
        // EN: Look at the pattern in the chord gradients as <span class="chem">h</span> gets smaller. What single number are they closing in on?
        "<span class=\"chem\">h</span> が小さくなるときの弦の傾きの規則性を見てみましょう。どの 1 つの数に近づいていますか？",
      ],
      // EN: <p>The gradient of the tangent at <span class="chem">P</span> is the limit of the chord gradients as <span class="chem">h -&gt; 0</span>. The values <span class="chem">12.61, 12.0601, 12.006001</span> approach <span class="chem">12</span>, so the gradient at <span class="chem">P</span> is <span class="chem">12</span>. (Check: the chord gradient is <span class="chem">((2 + h)^3 - 8) / h = 12 + 6h + h^2 -&gt; 12</span>, and <span class="chem">dy/dx = 3x^2 = 12</span> at <span class="chem">x = 2</span>.)</p>
      solution: "<p><span class=\"chem\">P</span> における接線の傾きは、<span class=\"chem\">h -&gt; 0</span> のときの弦の傾きの極限です。値 <span class=\"chem\">12.61, 12.0601, 12.006001</span> は <span class=\"chem\">12</span> に近づくので、<span class=\"chem\">P</span> における傾きは <span class=\"chem\">12</span> です。（確認：弦の傾きは <span class=\"chem\">((2 + h)^3 - 8) / h = 12 + 6h + h^2 -&gt; 12</span> であり、<span class=\"chem\">x = 2</span> で <span class=\"chem\">dy/dx = 3x^2 = 12</span> です。）</p>",
    },

    // ── t5-1-q020 · numeric · foundation · SL · SL 5.3 · 2 marks
    "t5-1-q020": {
      // EN: <p>Let <span class="chem">f(x) = 4x^3 - 6 / x + 7</span> for <span class="chem">x != 0</span>. Find <span class="chem">f'(-1)</span>.</p>
      stem: "<p><span class=\"chem\">x != 0</span> に対して <span class=\"chem\">f(x) = 4x^3 - 6 / x + 7</span> とする。<span class=\"chem\">f'(-1)</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: Write <span class="chem">6 / x</span> as <span class="chem">6x^{-1}</span> before you differentiate.
        "微分する前に <span class=\"chem\">6 / x</span> を <span class=\"chem\">6x^{-1}</span> と書き換えます。",
        // EN: You should get <span class="chem">f'(x) = 12x^2 + 6x^{-2}</span>. Now substitute <span class="chem">x = -1</span> carefully.
        "<span class=\"chem\">f'(x) = 12x^2 + 6x^{-2}</span> が得られるはずです。次に <span class=\"chem\">x = -1</span> を注意して代入します。",
      ],
      // EN: <p><span class="chem">f(x) = 4x^3 - 6x^{-1} + 7</span>, so <span class="chem">f'(x) = 12x^2 + 6x^{-2} = 12x^2 + 6 / x^2</span>. Then <span class="chem">f'(-1) = 12(1) + 6 / 1 = 18</span>.</p>
      solution: "<p><span class=\"chem\">f(x) = 4x^3 - 6x^{-1} + 7</span> なので <span class=\"chem\">f'(x) = 12x^2 + 6x^{-2} = 12x^2 + 6 / x^2</span> です。よって <span class=\"chem\">f'(-1) = 12(1) + 6 / 1 = 18</span> です。</p>",
    },

    // ── t5-1-q021 · short · exam · SL · SL 5.2, 5.3 · 4 marks
    "t5-1-q021": {
      // EN: <p>Let <span class="chem">f(x) = 2x^3 - 9x^2 - 24x + 5</span>. Find the set of values of <span class="chem">x</span> for which <span class="chem">f</span> is decreasing. <strong>[4 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = 2x^3 - 9x^2 - 24x + 5</span> とする。<span class=\"chem\">f</span> が減少する <span class=\"chem\">x</span> の値の範囲を求めなさい (Find)。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: <span class="chem">f</span> is decreasing where its gradient <span class="chem">f'(x)</span> is negative.
        "<span class=\"chem\">f</span> はその傾き <span class=\"chem\">f'(x)</span> が負となるところで減少します。",
        // EN: Factorise <span class="chem">f'(x) = 6x^2 - 18x - 24 = 6(x^2 - 3x - 4)</span>, then decide where the quadratic is below the <span class="chem">x</span>-axis.
        "<span class=\"chem\">f'(x) = 6x^2 - 18x - 24 = 6(x^2 - 3x - 4)</span> を因数分解し、その 2 次式が <span class=\"chem\">x</span> 軸より下にある範囲を判断します。",
      ],
      // EN: <p><span class="chem">f'(x) = 6x^2 - 18x - 24 = 6(x - 4)(x + 1)</span>. This is a positive quadratic with roots <span class="chem">-1</span> and <span class="chem">4</span>, so <span class="chem">f'(x) &lt; 0</span> between the roots: <span class="chem">f</span> is decreasing for <span class="chem">-1 &lt; x &lt; 4</span>.</p>
      solution: "<p><span class=\"chem\">f'(x) = 6x^2 - 18x - 24 = 6(x - 4)(x + 1)</span>。これは最高次の係数が正の 2 次式で、解は <span class=\"chem\">-1</span> と <span class=\"chem\">4</span> なので、2 つの解の間で <span class=\"chem\">f'(x) &lt; 0</span> となります：<span class=\"chem\">f</span> は <span class=\"chem\">-1 &lt; x &lt; 4</span> で減少します。</p>",
      // EN: <p><span class="chem">-1 &lt; x &lt; 4</span> (or <span class="chem">-1 &lt;= x &lt;= 4</span>).</p>
      answer: "<p><span class=\"chem\">-1 &lt; x &lt; 4</span>（または <span class=\"chem\">-1 &lt;= x &lt;= 4</span>）。</p>",
      markscheme: [
        // EN: A1: <span class="chem">f'(x) = 6x^2 - 18x - 24</span>.
        "A1：<span class=\"chem\">f'(x) = 6x^2 - 18x - 24</span>。",
        // EN: M1: Sets <span class="chem">f'(x) &lt; 0</span> (or solves <span class="chem">f'(x) = 0</span>), e.g. <span class="chem">6(x - 4)(x + 1)</span>.
        "M1：<span class=\"chem\">f'(x) &lt; 0</span> とおく（または <span class=\"chem\">f'(x) = 0</span> を解く）。例：<span class=\"chem\">6(x - 4)(x + 1)</span>。",
        // EN: A1: Critical values <span class="chem">x = -1</span> and <span class="chem">x = 4</span>.
        "A1：臨界値 <span class=\"chem\">x = -1</span> と <span class=\"chem\">x = 4</span>。",
        // EN: A1: <span class="chem">-1 &lt; x &lt; 4</span> (accept <span class="chem">-1 &lt;= x &lt;= 4</span>).
        "A1：<span class=\"chem\">-1 &lt; x &lt; 4</span>（<span class=\"chem\">-1 &lt;= x &lt;= 4</span> も可）。",
      ],
    },

    // ── t5-1-q022 · numeric · exam · SL · SL 5.6 · 4 marks
    "t5-1-q022": {
      // EN: <p>Let <span class="chem">f(x) = x sqrt(2x + 5)</span> for <span class="chem">x &gt; -5/2</span>. Find the exact value of <span class="chem">f'(2)</span>.</p>
      stem: "<p><span class=\"chem\">x &gt; -5/2</span> に対して <span class=\"chem\">f(x) = x sqrt(2x + 5)</span> とする。<span class=\"chem\">f'(2)</span> の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: This is a product <span class="chem">u v</span> with <span class="chem">u = x</span> and <span class="chem">v = (2x + 5)^{1/2}</span>. Differentiating <span class="chem">v</span> needs the chain rule.
        "これは積 <span class=\"chem\">u v</span> で、<span class=\"chem\">u = x</span>、<span class=\"chem\">v = (2x + 5)^{1/2}</span> です。<span class=\"chem\">v</span> の微分には合成関数の微分法が必要です。",
        // EN: <span class="chem">v' = (1/2)(2x + 5)^{-1/2} * 2 = 1 / sqrt(2x + 5)</span>, so <span class="chem">f'(x) = sqrt(2x + 5) + x / sqrt(2x + 5)</span>.
        "<span class=\"chem\">v' = (1/2)(2x + 5)^{-1/2} * 2 = 1 / sqrt(2x + 5)</span> なので <span class=\"chem\">f'(x) = sqrt(2x + 5) + x / sqrt(2x + 5)</span> です。",
      ],
      // EN: <p>By the product and chain rules, <span class="chem">f'(x) = 1 * sqrt(2x + 5) + x * (1/2)(2x + 5)^{-1/2} * 2 = sqrt(2x + 5) + x / sqrt(2x + 5)</span>. At <span class="chem">x = 2</span>, <span class="chem">sqrt(9) = 3</span>, so <span class="chem">f'(2) = 3 + 2/3 = 11/3</span>.</p>
      solution: "<p>積の微分法と合成関数の微分法より、<span class=\"chem\">f'(x) = 1 * sqrt(2x + 5) + x * (1/2)(2x + 5)^{-1/2} * 2 = sqrt(2x + 5) + x / sqrt(2x + 5)</span> です。<span class=\"chem\">x = 2</span> のとき <span class=\"chem\">sqrt(9) = 3</span> なので、<span class=\"chem\">f'(2) = 3 + 2/3 = 11/3</span> です。</p>",
    },

    // ── t5-1-q023 · numeric · exam · SL · SL 5.4, 5.6 · 5 marks
    "t5-1-q023": {
      // EN: <p>The tangent to the curve <span class="chem">y = e^{2x} ln x</span> at the point where <span class="chem">x = 1</span> meets the <span class="chem">y</span>-axis at <span class="chem">(0, k)</span>. Find the exact value of <span class="chem">k</span>.</p>
      stem: "<p>曲線 <span class=\"chem\">y = e^{2x} ln x</span> の <span class=\"chem\">x = 1</span> となる点における接線は、<span class=\"chem\">y</span> 軸と <span class=\"chem\">(0, k)</span> で交わる。<span class=\"chem\">k</span> の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: First find the point of contact: at <span class="chem">x = 1</span>, <span class="chem">ln 1 = 0</span>, so <span class="chem">y = 0</span>.
        "まず接点を求めます：<span class=\"chem\">x = 1</span> のとき <span class=\"chem\">ln 1 = 0</span> なので <span class=\"chem\">y = 0</span> です。",
        // EN: Use the product rule: <span class="chem">dy/dx = 2e^{2x} ln x + e^{2x} / x</span>. Evaluate it at <span class="chem">x = 1</span>, write the tangent, then put <span class="chem">x = 0</span>.
        "積の微分法を使います：<span class=\"chem\">dy/dx = 2e^{2x} ln x + e^{2x} / x</span>。<span class=\"chem\">x = 1</span> での値を求めて接線の方程式を書き、<span class=\"chem\">x = 0</span> を代入します。",
      ],
      // EN: <p>At <span class="chem">x = 1</span>, <span class="chem">y = e^2 ln 1 = 0</span>. By the product rule, <span class="chem">dy/dx = 2e^{2x} ln x + e^{2x} * (1/x)</span>, so at <span class="chem">x = 1</span> the gradient is <span class="chem">0 + e^2 = e^2</span>. The tangent is <span class="chem">y - 0 = e^2(x - 1)</span>. At <span class="chem">x = 0</span>, <span class="chem">y = -e^2</span>, so <span class="chem">k = -e^2</span>.</p>
      solution: "<p><span class=\"chem\">x = 1</span> のとき <span class=\"chem\">y = e^2 ln 1 = 0</span>。積の微分法より <span class=\"chem\">dy/dx = 2e^{2x} ln x + e^{2x} * (1/x)</span> なので、<span class=\"chem\">x = 1</span> における傾きは <span class=\"chem\">0 + e^2 = e^2</span> です。接線は <span class=\"chem\">y - 0 = e^2(x - 1)</span> です。<span class=\"chem\">x = 0</span> のとき <span class=\"chem\">y = -e^2</span> なので、<span class=\"chem\">k = -e^2</span> です。</p>",
    },

    // ── t5-1-q024 · short · exam · SL · SL 5.6, 5.8 · 6 marks
    "t5-1-q024": {
      // EN: <p>Let <span class="chem">f(x) = (x + 1) / (x^2 + 3)</span> for <span class="chem">x \in \mathbb{R}</span>.<br>(a) Show that <span class="chem">f'(x) = (3 - 2x - x^2) / (x^2 + 3)^2</span>. <strong>[2 marks]</strong><br>(b) Hence find the coordinates of the local maximum point on the graph of <span class="chem">f</span>, justifying that it is a maximum. <strong>[4 marks]</strong></p>
      stem: "<p><span class=\"chem\">x \\in \\mathbb{R}</span> に対して <span class=\"chem\">f(x) = (x + 1) / (x^2 + 3)</span> とする。<br>(a) <span class=\"chem\">f'(x) = (3 - 2x - x^2) / (x^2 + 3)^2</span> であることを示しなさい (Show that)。<strong>[2 marks]</strong><br>(b) これを用いて (Hence)、<span class=\"chem\">f</span> のグラフ上の極大点の座標を求め、それが極大であることを根拠を示して説明しなさい。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: For (a), take <span class="chem">u = x + 1</span> and <span class="chem">v = x^2 + 3</span> in <span class="chem">(v u' - u v') / v^2</span>.
        "(a) では、<span class=\"chem\">(v u' - u v') / v^2</span> において <span class=\"chem\">u = x + 1</span>、<span class=\"chem\">v = x^2 + 3</span> とします。",
        // EN: For (b), the denominator <span class="chem">(x^2 + 3)^2</span> is always positive, so the sign of <span class="chem">f'(x)</span> is the sign of the numerator <span class="chem">-(x + 3)(x - 1)</span>.
        "(b) では、分母 <span class=\"chem\">(x^2 + 3)^2</span> は常に正なので、<span class=\"chem\">f'(x)</span> の符号は分子 <span class=\"chem\">-(x + 3)(x - 1)</span> の符号と一致します。",
      ],
      // EN: <p>(a) <span class="chem">f'(x) = ((x^2 + 3) - (x + 1)(2x)) / (x^2 + 3)^2 = (x^2 + 3 - 2x^2 - 2x) / (x^2 + 3)^2 = (3 - 2x - x^2) / (x^2 + 3)^2</span>.<br>(b) <span class="chem">f'(x) = 0 &lt;=&gt; 3 - 2x - x^2 = -(x + 3)(x - 1) = 0</span>, so <span class="chem">x = -3</span> or <span class="chem">x = 1</span>. The denominator is positive, and the numerator is positive for <span class="chem">-3 &lt; x &lt; 1</span> and negative for <span class="chem">x &gt; 1</span>, so <span class="chem">f'</span> changes from <span class="chem">+</span> to <span class="chem">-</span> at <span class="chem">x = 1</span>: a local maximum. <span class="chem">f(1) = 2/4 = 1/2</span>, so the maximum is at <span class="chem">(1, 1/2)</span>. (At <span class="chem">x = -3</span> the sign goes from <span class="chem">-</span> to <span class="chem">+</span>: a local minimum <span class="chem">(-3, -1/6)</span>.)</p>
      solution: "<p>(a) <span class=\"chem\">f'(x) = ((x^2 + 3) - (x + 1)(2x)) / (x^2 + 3)^2 = (x^2 + 3 - 2x^2 - 2x) / (x^2 + 3)^2 = (3 - 2x - x^2) / (x^2 + 3)^2</span>。<br>(b) <span class=\"chem\">f'(x) = 0 &lt;=&gt; 3 - 2x - x^2 = -(x + 3)(x - 1) = 0</span> なので <span class=\"chem\">x = -3</span> または <span class=\"chem\">x = 1</span>。分母は正であり、分子は <span class=\"chem\">-3 &lt; x &lt; 1</span> で正、<span class=\"chem\">x &gt; 1</span> で負なので、<span class=\"chem\">f'</span> は <span class=\"chem\">x = 1</span> で <span class=\"chem\">+</span> から <span class=\"chem\">-</span> に変わります：極大です。<span class=\"chem\">f(1) = 2/4 = 1/2</span> なので、極大点は <span class=\"chem\">(1, 1/2)</span> です。（<span class=\"chem\">x = -3</span> では符号が <span class=\"chem\">-</span> から <span class=\"chem\">+</span> に変わるので極小点 <span class=\"chem\">(-3, -1/6)</span> です。）</p>",
      // EN: <p>(a) Quotient rule, then simplify the numerator.<br>(b) Local maximum at <span class="chem">(1, 1/2)</span>; <span class="chem">f'</span> changes from positive to negative at <span class="chem">x = 1</span>.</p>
      answer: "<p>(a) 商の微分法を用い、分子を整理する。<br>(b) 極大点は <span class=\"chem\">(1, 1/2)</span>；<span class=\"chem\">f'</span> は <span class=\"chem\">x = 1</span> で正から負に変わる。</p>",
      markscheme: [
        // EN: M1: Substitutes into the quotient rule: <span class="chem">f'(x) = ((x^2 + 3)(1) - (x + 1)(2x)) / (x^2 + 3)^2</span>.
        "M1：商の微分法に代入する：<span class=\"chem\">f'(x) = ((x^2 + 3)(1) - (x + 1)(2x)) / (x^2 + 3)^2</span>。",
        // EN: A1: Expands the numerator <span class="chem">x^2 + 3 - 2x^2 - 2x = 3 - 2x - x^2</span>, giving the result (AG).
        "A1：分子を展開して <span class=\"chem\">x^2 + 3 - 2x^2 - 2x = 3 - 2x - x^2</span> とし、結果を得る (AG)。",
        // EN: M1: Sets the numerator equal to zero: <span class="chem">3 - 2x - x^2 = -(x + 3)(x - 1) = 0</span>.
        "M1：分子を 0 とおく：<span class=\"chem\">3 - 2x - x^2 = -(x + 3)(x - 1) = 0</span>。",
        // EN: A1: <span class="chem">x = 1</span> (and <span class="chem">x = -3</span>).
        "A1：<span class=\"chem\">x = 1</span>（および <span class=\"chem\">x = -3</span>）。",
        // EN: R1: <span class="chem">f'</span> changes from positive to negative at <span class="chem">x = 1</span> (e.g. <span class="chem">f'(0) = 1/3 &gt; 0</span>, <span class="chem">f'(2) = -5/49 &lt; 0</span>), so it is a maximum.
        "R1：<span class=\"chem\">f'</span> は <span class=\"chem\">x = 1</span> で正から負に変わる（例：<span class=\"chem\">f'(0) = 1/3 &gt; 0</span>、<span class=\"chem\">f'(2) = -5/49 &lt; 0</span>）ので極大である。",
        // EN: A1: <span class="chem">(1, 1/2)</span>.
        "A1：<span class=\"chem\">(1, 1/2)</span>。",
      ],
    },

    // ── t5-1-q025 · short · exam · SL · SL 5.7, 5.8 · 7 marks
    "t5-1-q025": {
      // EN: <p>Let <span class="chem">f(x) = x^4 - 4x^3 + 10</span>.<br>(a) Find <span class="chem">f'(x)</span> and <span class="chem">f''(x)</span>. <strong>[2 marks]</strong><br>(b) Find the coordinates of the points of inflexion on the graph of <span class="chem">f</span>, justifying your answer. <strong>[4 marks]</strong><br>(c) Determine which of these points is a stationary point of inflexion. <strong>[1 mark]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = x^4 - 4x^3 + 10</span> とする。<br>(a) <span class=\"chem\">f'(x)</span> と <span class=\"chem\">f''(x)</span> を求めなさい (Find)。<strong>[2 marks]</strong><br>(b) <span class=\"chem\">f</span> のグラフ上の変曲点の座標を求め (Find)、その根拠を示しなさい。<strong>[4 marks]</strong><br>(c) これらの点のうちどれが停留変曲点であるかを判定しなさい (Determine)。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: A point of inflexion needs two things: <span class="chem">f''(x) = 0</span> <strong>and</strong> <span class="chem">f''(x)</span> changes sign there.
        "変曲点には 2 つの条件が必要です：<span class=\"chem\">f''(x) = 0</span> <strong>かつ</strong> その点で <span class=\"chem\">f''(x)</span> の符号が変わること。",
        // EN: <span class="chem">f''(x) = 12x(x - 2)</span>. Test the sign of <span class="chem">f''</span> on each side of <span class="chem">x = 0</span> and <span class="chem">x = 2</span>. For (c), a stationary point of inflexion also has <span class="chem">f'(x) = 0</span>.
        "<span class=\"chem\">f''(x) = 12x(x - 2)</span>。<span class=\"chem\">x = 0</span> と <span class=\"chem\">x = 2</span> の前後で <span class=\"chem\">f''</span> の符号を調べます。(c) では、停留変曲点はさらに <span class=\"chem\">f'(x) = 0</span> を満たします。",
      ],
      // EN: <p>(a) <span class="chem">f'(x) = 4x^3 - 12x^2</span> and <span class="chem">f''(x) = 12x^2 - 24x</span>.<br>(b) <span class="chem">f''(x) = 12x(x - 2) = 0 =&gt; x = 0</span> or <span class="chem">x = 2</span>. Signs: <span class="chem">f''(-1) = 36 &gt; 0</span>, <span class="chem">f''(1) = -12 &lt; 0</span>, <span class="chem">f''(3) = 36 &gt; 0</span>, so <span class="chem">f''</span> changes sign at both. <span class="chem">f(0) = 10</span> and <span class="chem">f(2) = 16 - 32 + 10 = -6</span>: the points of inflexion are <span class="chem">(0, 10)</span> and <span class="chem">(2, -6)</span>.<br>(c) <span class="chem">f'(0) = 0</span>, so <span class="chem">(0, 10)</span> is a stationary point of inflexion. <span class="chem">f'(2) = 32 - 48 = -16 != 0</span>, so <span class="chem">(2, -6)</span> is a non-stationary point of inflexion.</p>
      solution: "<p>(a) <span class=\"chem\">f'(x) = 4x^3 - 12x^2</span>、<span class=\"chem\">f''(x) = 12x^2 - 24x</span>。<br>(b) <span class=\"chem\">f''(x) = 12x(x - 2) = 0 =&gt; x = 0</span> または <span class=\"chem\">x = 2</span>。符号：<span class=\"chem\">f''(-1) = 36 &gt; 0</span>、<span class=\"chem\">f''(1) = -12 &lt; 0</span>、<span class=\"chem\">f''(3) = 36 &gt; 0</span> なので、<span class=\"chem\">f''</span> はどちらの点でも符号が変わります。<span class=\"chem\">f(0) = 10</span>、<span class=\"chem\">f(2) = 16 - 32 + 10 = -6</span> なので、変曲点は <span class=\"chem\">(0, 10)</span> と <span class=\"chem\">(2, -6)</span> です。<br>(c) <span class=\"chem\">f'(0) = 0</span> なので <span class=\"chem\">(0, 10)</span> は停留変曲点です。<span class=\"chem\">f'(2) = 32 - 48 = -16 != 0</span> なので <span class=\"chem\">(2, -6)</span> は非停留変曲点です。</p>",
      // EN: <p>(a) <span class="chem">f'(x) = 4x^3 - 12x^2</span>, <span class="chem">f''(x) = 12x^2 - 24x</span>.<br>(b) <span class="chem">(0, 10)</span> and <span class="chem">(2, -6)</span>.<br>(c) <span class="chem">(0, 10)</span>, since <span class="chem">f'(0) = 0</span> (while <span class="chem">f'(2) = -16</span>).</p>
      answer: "<p>(a) <span class=\"chem\">f'(x) = 4x^3 - 12x^2</span>、<span class=\"chem\">f''(x) = 12x^2 - 24x</span>。<br>(b) <span class=\"chem\">(0, 10)</span> と <span class=\"chem\">(2, -6)</span>。<br>(c) <span class=\"chem\">(0, 10)</span>。<span class=\"chem\">f'(0) = 0</span> であるため（一方 <span class=\"chem\">f'(2) = -16</span>）。</p>",
      markscheme: [
        // EN: A1: <span class="chem">f'(x) = 4x^3 - 12x^2</span>.
        "A1：<span class=\"chem\">f'(x) = 4x^3 - 12x^2</span>。",
        // EN: A1: <span class="chem">f''(x) = 12x^2 - 24x</span>.
        "A1：<span class=\"chem\">f''(x) = 12x^2 - 24x</span>。",
        // EN: M1: Sets <span class="chem">f''(x) = 12x(x - 2) = 0</span>.
        "M1：<span class=\"chem\">f''(x) = 12x(x - 2) = 0</span> とおく。",
        // EN: A1: <span class="chem">x = 0</span> and <span class="chem">x = 2</span>.
        "A1：<span class=\"chem\">x = 0</span> と <span class=\"chem\">x = 2</span>。",
        // EN: R1: <span class="chem">f''</span> changes sign at both values (e.g. <span class="chem">f''(-1) = 36</span>, <span class="chem">f''(1) = -12</span>, <span class="chem">f''(3) = 36</span>).
        "R1：<span class=\"chem\">f''</span> はどちらの値でも符号が変わる（例：<span class=\"chem\">f''(-1) = 36</span>、<span class=\"chem\">f''(1) = -12</span>、<span class=\"chem\">f''(3) = 36</span>）。",
        // EN: A1: <span class="chem">(0, 10)</span> and <span class="chem">(2, -6)</span>.
        "A1：<span class=\"chem\">(0, 10)</span> と <span class=\"chem\">(2, -6)</span>。",
        // EN: A1: <span class="chem">f'(0) = 0</span> so <span class="chem">(0, 10)</span> is the stationary point of inflexion; <span class="chem">f'(2) = -16 != 0</span>, so <span class="chem">(2, -6)</span> is non-stationary.
        "A1：<span class=\"chem\">f'(0) = 0</span> なので <span class=\"chem\">(0, 10)</span> が停留変曲点；<span class=\"chem\">f'(2) = -16 != 0</span> なので <span class=\"chem\">(2, -6)</span> は非停留。",
      ],
    },

    // ── t5-1-q026 · short · challenge · SL · SL 5.7, 5.8 · 6 marks
    "t5-1-q026": {
      // EN: <p>Let <span class="chem">f(x) = x^4 - 4x^3 + 6x^2 + 2x</span>. A student writes: “<span class="chem">f''(1) = 0</span>, so the graph of <span class="chem">f</span> has a point of inflexion at <span class="chem">x = 1</span>.”<br>(a) Show that <span class="chem">f''(x) = 12(x - 1)^2</span>. <strong>[2 marks]</strong><br>(b) Explain why the student’s conclusion is wrong. <strong>[2 marks]</strong><br>(c) Show that <span class="chem">f</span> has exactly one stationary point, and determine its nature. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = x^4 - 4x^3 + 6x^2 + 2x</span> とする。ある生徒が「<span class=\"chem\">f''(1) = 0</span> なので、<span class=\"chem\">f</span> のグラフは <span class=\"chem\">x = 1</span> に変曲点をもつ」と書いた。<br>(a) <span class=\"chem\">f''(x) = 12(x - 1)^2</span> であることを示しなさい (Show that)。<strong>[2 marks]</strong><br>(b) この生徒の結論が誤りである理由を説明しなさい (Explain)。<strong>[2 marks]</strong><br>(c) <span class=\"chem\">f</span> はただ 1 つの停留点をもつことを示し (Show that)、その性質を判定しなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: the question is testing the full definition of a point of inflexion. <span class="chem">f''(x) = 0</span> is necessary but not sufficient: <span class="chem">f''</span> must also change sign.
        "解読：この問題は変曲点の完全な定義を問うています。<span class=\"chem\">f''(x) = 0</span> は必要条件ですが十分条件ではありません：<span class=\"chem\">f''</span> の符号も変わる必要があります。",
        // EN: For (b), look at the sign of <span class="chem">12(x - 1)^2</span> just to the left and just to the right of <span class="chem">x = 1</span>.
        "(b) では、<span class=\"chem\">x = 1</span> のすぐ左とすぐ右で <span class=\"chem\">12(x - 1)^2</span> の符号を調べます。",
        // EN: For (c), compare <span class="chem">f'(x)</span> with <span class="chem">4(x - 1)^3 = 4x^3 - 12x^2 + 12x - 4</span>. A cube equals a number at exactly one real value.
        "(c) では、<span class=\"chem\">f'(x)</span> と <span class=\"chem\">4(x - 1)^3 = 4x^3 - 12x^2 + 12x - 4</span> を比べます。3 乗がある数に等しくなるのは、ちょうど 1 つの実数値においてです。",
      ],
      // EN: <p><strong>Decode:</strong> the student used only half of the test for an inflexion point. We need <span class="chem">f''(x) = 0</span> and a change of sign of <span class="chem">f''</span>.<br>(a) <span class="chem">f'(x) = 4x^3 - 12x^2 + 12x + 2</span>, so <span class="chem">f''(x) = 12x^2 - 24x + 12 = 12(x - 1)^2</span>.<br>(b) <span class="chem">12(x - 1)^2 &gt; 0</span> for every <span class="chem">x != 1</span>, so <span class="chem">f''</span> is positive on both sides of <span class="chem">x = 1</span> and does not change sign. The concavity does not change, so there is no point of inflexion at <span class="chem">x = 1</span> (the graph is concave up everywhere).<br>(c) <span class="chem">4(x - 1)^3 = 4x^3 - 12x^2 + 12x - 4</span>, so <span class="chem">f'(x) = 4(x - 1)^3 + 6</span>. Then <span class="chem">f'(x) = 0 &lt;=&gt; (x - 1)^3 = -3/2 &lt;=&gt; x = 1 - (3/2)^{1/3}</span>, the only real solution. At this point <span class="chem">x != 1</span>, so <span class="chem">f''(x) &gt; 0</span>: a local minimum.</p>
      solution: "<p><strong>解読：</strong>この生徒は変曲点の判定の半分しか使っていません。<span class=\"chem\">f''(x) = 0</span> であり、かつ <span class=\"chem\">f''</span> の符号が変わることが必要です。<br>(a) <span class=\"chem\">f'(x) = 4x^3 - 12x^2 + 12x + 2</span> なので <span class=\"chem\">f''(x) = 12x^2 - 24x + 12 = 12(x - 1)^2</span>。<br>(b) すべての <span class=\"chem\">x != 1</span> で <span class=\"chem\">12(x - 1)^2 &gt; 0</span> なので、<span class=\"chem\">f''</span> は <span class=\"chem\">x = 1</span> の両側で正であり、符号は変わりません。凹凸が変わらないので、<span class=\"chem\">x = 1</span> に変曲点はありません（グラフはいたるところで下に凸です）。<br>(c) <span class=\"chem\">4(x - 1)^3 = 4x^3 - 12x^2 + 12x - 4</span> なので <span class=\"chem\">f'(x) = 4(x - 1)^3 + 6</span>。よって <span class=\"chem\">f'(x) = 0 &lt;=&gt; (x - 1)^3 = -3/2 &lt;=&gt; x = 1 - (3/2)^{1/3}</span> となり、これが唯一の実数解です。この点では <span class=\"chem\">x != 1</span> なので <span class=\"chem\">f''(x) &gt; 0</span>：極小です。</p>",
      // EN: <p>(a) <span class="chem">f'(x) = 4x^3 - 12x^2 + 12x + 2</span>, <span class="chem">f''(x) = 12x^2 - 24x + 12 = 12(x - 1)^2</span>.<br>(b) <span class="chem">f''(x) &gt;= 0</span> on both sides of <span class="chem">x = 1</span>, so it does not change sign: there is no point of inflexion (the graph is concave up everywhere).<br>(c) <span class="chem">f'(x) = 4(x - 1)^3 + 6 = 0</span> has the single solution <span class="chem">x = 1 - (3/2)^{1/3}</span>; there <span class="chem">f''(x) &gt; 0</span>, so it is a local minimum.</p>
      answer: "<p>(a) <span class=\"chem\">f'(x) = 4x^3 - 12x^2 + 12x + 2</span>、<span class=\"chem\">f''(x) = 12x^2 - 24x + 12 = 12(x - 1)^2</span>。<br>(b) <span class=\"chem\">x = 1</span> の両側で <span class=\"chem\">f''(x) &gt;= 0</span> なので符号は変わらない：変曲点はない（グラフはいたるところで下に凸）。<br>(c) <span class=\"chem\">f'(x) = 4(x - 1)^3 + 6 = 0</span> はただ 1 つの解 <span class=\"chem\">x = 1 - (3/2)^{1/3}</span> をもつ；そこで <span class=\"chem\">f''(x) &gt; 0</span> なので極小である。</p>",
      markscheme: [
        // EN: A1: <span class="chem">f'(x) = 4x^3 - 12x^2 + 12x + 2</span>.
        "A1：<span class=\"chem\">f'(x) = 4x^3 - 12x^2 + 12x + 2</span>。",
        // EN: A1: <span class="chem">f''(x) = 12x^2 - 24x + 12 = 12(x^2 - 2x + 1) = 12(x - 1)^2</span> (AG).
        "A1：<span class=\"chem\">f''(x) = 12x^2 - 24x + 12 = 12(x^2 - 2x + 1) = 12(x - 1)^2</span> (AG)。",
        // EN: R1: <span class="chem">f''(x) = 12(x - 1)^2 &gt;= 0</span> for all <span class="chem">x</span>, so <span class="chem">f''</span> does not change sign at <span class="chem">x = 1</span>.
        "R1：すべての <span class=\"chem\">x</span> で <span class=\"chem\">f''(x) = 12(x - 1)^2 &gt;= 0</span> なので、<span class=\"chem\">f''</span> は <span class=\"chem\">x = 1</span> で符号が変わらない。",
        // EN: A1: So <span class="chem">x = 1</span> is not a point of inflexion; <span class="chem">f''(x) = 0</span> alone is not enough.
        "A1：よって <span class=\"chem\">x = 1</span> は変曲点ではない；<span class=\"chem\">f''(x) = 0</span> だけでは不十分である。",
        // EN: M1: Writes <span class="chem">f'(x) = 4(x - 1)^3 + 6 = 0</span>, so <span class="chem">(x - 1)^3 = -3/2</span>, which has exactly one real solution <span class="chem">x = 1 - (3/2)^{1/3}</span>.
        "M1：<span class=\"chem\">f'(x) = 4(x - 1)^3 + 6 = 0</span> と書き、<span class=\"chem\">(x - 1)^3 = -3/2</span> となる。これはただ 1 つの実数解 <span class=\"chem\">x = 1 - (3/2)^{1/3}</span> をもつ。",
        // EN: R1: At this <span class="chem">x</span> (which is not <span class="chem">1</span>), <span class="chem">f''(x) &gt; 0</span>, so the stationary point is a local minimum.
        "R1：この <span class=\"chem\">x</span>（<span class=\"chem\">1</span> ではない）において <span class=\"chem\">f''(x) &gt; 0</span> なので、停留点は極小点である。",
      ],
    },

    // ── t5-1-q027 · numeric · challenge · SL · SL 5.8 · 6 marks
    "t5-1-q027": {
      // EN: <p>A farmer builds a rectangular pen against a straight stone wall that is <span class="chem">30</span> <span class="unit">m</span> long. The wall forms one complete side of the pen, so no fence is needed on that side, and the side along the wall cannot be longer than the wall. The other three sides use exactly <span class="chem">80</span> <span class="unit">m</span> of fencing. Find the greatest possible area of the pen, in <span class="unit">m2</span>.</p>
      stem: "<p>ある農家が、長さ <span class=\"chem\">30</span> <span class=\"unit\">m</span> のまっすぐな石垣に沿って長方形の囲いをつくる。石垣が囲いの 1 辺全体となるのでその辺には柵は不要であり、石垣に沿った辺は石垣より長くできない。残りの 3 辺にはちょうど <span class=\"chem\">80</span> <span class=\"unit\">m</span> の柵を使う。囲いの面積の最大値を <span class=\"unit\">m2</span> 単位で求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: this is an optimisation with a hidden restriction. The side along the wall is at most 30 m, so the variable has a restricted domain, and the maximum may be at an endpoint rather than where the derivative is zero.
        "解読：これは隠れた制限のある最大・最小問題です。石垣に沿った辺は 30 m 以下なので変数の定義域が制限され、最大値は導関数が 0 となる点ではなく端点でとる可能性があります。",
        // EN: Let each side perpendicular to the wall be <span class="chem">x</span> <span class="unit">m</span>. Then the side along the wall is <span class="chem">80 - 2x</span>, and <span class="chem">80 - 2x &lt;= 30</span> gives <span class="chem">x &gt;= 25</span>.
        "石垣に垂直な各辺を <span class=\"chem\">x</span> <span class=\"unit\">m</span> とします。すると石垣に沿った辺は <span class=\"chem\">80 - 2x</span> であり、<span class=\"chem\">80 - 2x &lt;= 30</span> から <span class=\"chem\">x &gt;= 25</span> となります。",
        // EN: <span class="chem">A(x) = x(80 - 2x)</span>, <span class="chem">A'(x) = 80 - 4x</span>. Where is <span class="chem">A'(x) = 0</span>? Is that value allowed? What is the sign of <span class="chem">A'</span> for <span class="chem">25 &lt;= x &lt; 40</span>?
        "<span class=\"chem\">A(x) = x(80 - 2x)</span>、<span class=\"chem\">A'(x) = 80 - 4x</span>。<span class=\"chem\">A'(x) = 0</span> となるのはどこですか？その値は許されますか？<span class=\"chem\">25 &lt;= x &lt; 40</span> での <span class=\"chem\">A'</span> の符号はどうなりますか？",
      ],
      // EN: <p><strong>Decode:</strong> the wall length is a constraint on the domain, so we must check the endpoint, not just solve <span class="chem">A'(x) = 0</span>.<br>Let the two sides perpendicular to the wall be <span class="chem">x</span> <span class="unit">m</span>; the side along the wall is <span class="chem">80 - 2x</span> <span class="unit">m</span>. We need <span class="chem">0 &lt; 80 - 2x &lt;= 30</span>, so <span class="chem">25 &lt;= x &lt; 40</span>.<br><span class="chem">A(x) = x(80 - 2x) = 80x - 2x^2</span> and <span class="chem">A'(x) = 80 - 4x = 0 =&gt; x = 20</span>, which is <strong>not</strong> in the domain. For <span class="chem">25 &lt;= x &lt; 40</span>, <span class="chem">A'(x) &lt; 0</span>, so <span class="chem">A</span> is decreasing and its greatest value is at the endpoint <span class="chem">x = 25</span>: the pen is <span class="chem">25</span> <span class="unit">m</span> by <span class="chem">30</span> <span class="unit">m</span>, and <span class="chem">A = 25 * 30 = 750</span> <span class="unit">m2</span>. (The unrestricted answer <span class="chem">A(20) = 800</span> would need a 40 m wall.)</p>
      solution: "<p><strong>解読：</strong>石垣の長さは定義域に対する制約なので、<span class=\"chem\">A'(x) = 0</span> を解くだけでなく端点を調べる必要があります。<br>石垣に垂直な 2 辺を <span class=\"chem\">x</span> <span class=\"unit\">m</span> とすると、石垣に沿った辺は <span class=\"chem\">80 - 2x</span> <span class=\"unit\">m</span> です。<span class=\"chem\">0 &lt; 80 - 2x &lt;= 30</span> が必要なので <span class=\"chem\">25 &lt;= x &lt; 40</span> です。<br><span class=\"chem\">A(x) = x(80 - 2x) = 80x - 2x^2</span>、<span class=\"chem\">A'(x) = 80 - 4x = 0 =&gt; x = 20</span> ですが、これは定義域内に<strong>ありません</strong>。<span class=\"chem\">25 &lt;= x &lt; 40</span> では <span class=\"chem\">A'(x) &lt; 0</span> なので <span class=\"chem\">A</span> は減少し、最大値は端点 <span class=\"chem\">x = 25</span> でとります：囲いは <span class=\"chem\">25</span> <span class=\"unit\">m</span> × <span class=\"chem\">30</span> <span class=\"unit\">m</span> で、<span class=\"chem\">A = 25 * 30 = 750</span> <span class=\"unit\">m2</span> です。（制限を無視した答え <span class=\"chem\">A(20) = 800</span> には 40 m の石垣が必要になります。）</p>",
    },

    // ── t5-1-q028 · short · exam · SL · SL 5.4 · 6 marks
    "t5-1-q028": {
      // EN: <p>The point <span class="chem">P(3, 2)</span> lies on the curve <span class="chem">y = x^2 - 4x + 5</span>.<br>(a) Find the equation of the normal to the curve at <span class="chem">P</span>. <strong>[3 marks]</strong><br>(b) The normal meets the curve again at <span class="chem">Q</span>. Find the coordinates of <span class="chem">Q</span>. <strong>[3 marks]</strong></p>
      stem: "<p>点 <span class=\"chem\">P(3, 2)</span> は曲線 <span class=\"chem\">y = x^2 - 4x + 5</span> 上にある。<br>(a) <span class=\"chem\">P</span> における曲線の法線の方程式を求めなさい (Find)。<strong>[3 marks]</strong><br>(b) 法線は曲線と再び <span class=\"chem\">Q</span> で交わる。<span class=\"chem\">Q</span> の座標を求めなさい (Find)。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: The normal is perpendicular to the tangent, so its gradient is <span class="chem">-1 / (dy/dx)</span>.
        "法線は接線に垂直なので、その傾きは <span class=\"chem\">-1 / (dy/dx)</span> です。",
        // EN: For (b), set the curve equal to the normal. You already know one root, <span class="chem">x = 3</span>, which helps you factorise.
        "(b) では、曲線の式と法線の式を等しいとおきます。解の 1 つ <span class=\"chem\">x = 3</span> はすでにわかっているので、因数分解に役立ちます。",
      ],
      // EN: <p>(a) <span class="chem">dy/dx = 2x - 4 = 2</span> at <span class="chem">x = 3</span>, so the normal has gradient <span class="chem">-1/2</span>: <span class="chem">y - 2 = -(1/2)(x - 3) =&gt; y = -x/2 + 7/2</span>.<br>(b) <span class="chem">x^2 - 4x + 5 = -x/2 + 7/2 =&gt; 2x^2 - 8x + 10 = -x + 7 =&gt; 2x^2 - 7x + 3 = 0 =&gt; (2x - 1)(x - 3) = 0</span>. The root <span class="chem">x = 3</span> is <span class="chem">P</span>, so <span class="chem">x = 1/2</span> and <span class="chem">y = 1/4 - 2 + 5 = 13/4</span>: <span class="chem">Q(1/2, 13/4)</span>.</p>
      solution: "<p>(a) <span class=\"chem\">x = 3</span> で <span class=\"chem\">dy/dx = 2x - 4 = 2</span> なので、法線の傾きは <span class=\"chem\">-1/2</span> です：<span class=\"chem\">y - 2 = -(1/2)(x - 3) =&gt; y = -x/2 + 7/2</span>。<br>(b) <span class=\"chem\">x^2 - 4x + 5 = -x/2 + 7/2 =&gt; 2x^2 - 8x + 10 = -x + 7 =&gt; 2x^2 - 7x + 3 = 0 =&gt; (2x - 1)(x - 3) = 0</span>。解 <span class=\"chem\">x = 3</span> は <span class=\"chem\">P</span> に対応するので、<span class=\"chem\">x = 1/2</span>、<span class=\"chem\">y = 1/4 - 2 + 5 = 13/4</span>：<span class=\"chem\">Q(1/2, 13/4)</span> です。</p>",
      // EN: <p>(a) <span class="chem">y = -x/2 + 7/2</span> (or <span class="chem">x + 2y = 7</span>).<br>(b) <span class="chem">Q(1/2, 13/4)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">y = -x/2 + 7/2</span>（または <span class=\"chem\">x + 2y = 7</span>）。<br>(b) <span class=\"chem\">Q(1/2, 13/4)</span>。</p>",
      markscheme: [
        // EN: A1: <span class="chem">dy/dx = 2x - 4</span>, so the gradient of the tangent at <span class="chem">P</span> is <span class="chem">2</span>.
        "A1：<span class=\"chem\">dy/dx = 2x - 4</span> なので、<span class=\"chem\">P</span> における接線の傾きは <span class=\"chem\">2</span>。",
        // EN: M1: Gradient of the normal is <span class="chem">-1/2</span> (negative reciprocal).
        "M1：法線の傾きは <span class=\"chem\">-1/2</span>（負の逆数）。",
        // EN: A1: <span class="chem">y - 2 = -(1/2)(x - 3)</span>, i.e. <span class="chem">y = -x/2 + 7/2</span>.
        "A1：<span class=\"chem\">y - 2 = -(1/2)(x - 3)</span>、すなわち <span class=\"chem\">y = -x/2 + 7/2</span>。",
        // EN: M1: Equates the curve and the normal: <span class="chem">x^2 - 4x + 5 = -x/2 + 7/2</span>.
        "M1：曲線と法線の式を等しいとおく：<span class=\"chem\">x^2 - 4x + 5 = -x/2 + 7/2</span>。",
        // EN: A1: <span class="chem">2x^2 - 7x + 3 = 0 =&gt; (2x - 1)(x - 3) = 0</span>, so <span class="chem">x = 1/2</span> (<span class="chem">x = 3</span> is <span class="chem">P</span>).
        "A1：<span class=\"chem\">2x^2 - 7x + 3 = 0 =&gt; (2x - 1)(x - 3) = 0</span> なので <span class=\"chem\">x = 1/2</span>（<span class=\"chem\">x = 3</span> は <span class=\"chem\">P</span> に対応）。",
        // EN: A1: <span class="chem">Q(1/2, 13/4)</span>.
        "A1：<span class=\"chem\">Q(1/2, 13/4)</span>。",
      ],
    },

    // ── t5-1-q029 · short · exam · SL · SL 5.2, 5.7 · 6 marks
    "t5-1-q029": {
      // EN: <p>Let <span class="chem">f(x) = x^3 - 6x^2 + 9x + 1</span>.<br>(a) Find <span class="chem">f'(x)</span>. <strong>[1 mark]</strong><br>(b) Sketch the graph of <span class="chem">y = f'(x)</span> for <span class="chem">0 &lt;= x &lt;= 4</span>, labelling the intercepts with the axes and the vertex. <strong>[3 marks]</strong><br>(c) Using your sketch, write down (i) the interval on which <span class="chem">f</span> is decreasing; (ii) the <span class="chem">x</span>-coordinate of the point of inflexion on the graph of <span class="chem">f</span>. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = x^3 - 6x^2 + 9x + 1</span> とする。<br>(a) <span class=\"chem\">f'(x)</span> を求めなさい (Find)。<strong>[1 mark]</strong><br>(b) <span class=\"chem\">0 &lt;= x &lt;= 4</span> における <span class=\"chem\">y = f'(x)</span> のグラフをかき (Sketch)、座標軸との交点と頂点を記入しなさい。<strong>[3 marks]</strong><br>(c) かいたグラフを用いて、(i) <span class=\"chem\">f</span> が減少する区間、(ii) <span class=\"chem\">f</span> のグラフ上の変曲点の <span class=\"chem\">x</span> 座標を書きなさい (write down)。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: <span class="chem">f'(x)</span> is a quadratic: find its roots by factorising and its vertex by completing the square or using <span class="chem">x = -b / (2a)</span>.
        "<span class=\"chem\">f'(x)</span> は 2 次式です：因数分解で解を求め、平方完成または <span class=\"chem\">x = -b / (2a)</span> で頂点を求めます。",
        // EN: <span class="chem">f</span> decreases where the graph of <span class="chem">f'</span> is below the axis. <span class="chem">f''</span> is the gradient of <span class="chem">f'</span>, so an inflexion of <span class="chem">f</span> is at a turning point of <span class="chem">f'</span>.
        "<span class=\"chem\">f</span> は <span class=\"chem\">f'</span> のグラフが軸より下にあるところで減少します。<span class=\"chem\">f''</span> は <span class=\"chem\">f'</span> の傾きなので、<span class=\"chem\">f</span> の変曲点は <span class=\"chem\">f'</span> の極値点にあります。",
      ],
      // EN: <p>(a) <span class="chem">f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)</span>.<br>(b) <span class="chem">f'(0) = 9</span>, roots <span class="chem">x = 1, 3</span>, vertex at <span class="chem">x = 2</span> with <span class="chem">f'(2) = 12 - 24 + 9 = -3</span>, and <span class="chem">f'(4) = 9</span>. Draw a symmetric upward parabola through these points.<br>(c)(i) The graph of <span class="chem">f'</span> is below the <span class="chem">x</span>-axis for <span class="chem">1 &lt; x &lt; 3</span>, so <span class="chem">f</span> is decreasing there. (ii) The gradient of <span class="chem">f'</span> (that is, <span class="chem">f''</span>) is negative before the vertex and positive after it, so <span class="chem">f''</span> changes sign at <span class="chem">x = 2</span>: the point of inflexion of <span class="chem">f</span> is at <span class="chem">x = 2</span>.</p>
      solution: "<p>(a) <span class=\"chem\">f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)</span>。<br>(b) <span class=\"chem\">f'(0) = 9</span>、解 <span class=\"chem\">x = 1, 3</span>、頂点は <span class=\"chem\">x = 2</span> で <span class=\"chem\">f'(2) = 12 - 24 + 9 = -3</span>、さらに <span class=\"chem\">f'(4) = 9</span>。これらの点を通る、左右対称で下に凸の放物線をかきます。<br>(c)(i) <span class=\"chem\">1 &lt; x &lt; 3</span> で <span class=\"chem\">f'</span> のグラフは <span class=\"chem\">x</span> 軸より下にあるので、<span class=\"chem\">f</span> はそこで減少します。(ii) <span class=\"chem\">f'</span> の傾き（つまり <span class=\"chem\">f''</span>）は頂点の前で負、後で正なので、<span class=\"chem\">f''</span> は <span class=\"chem\">x = 2</span> で符号が変わります：<span class=\"chem\">f</span> の変曲点は <span class=\"chem\">x = 2</span> です。</p>",
      // EN: <p>(a) <span class="chem">f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)</span>.<br>(b) An upward parabola through <span class="chem">(0, 9)</span>, <span class="chem">(1, 0)</span>, <span class="chem">(3, 0)</span> and <span class="chem">(4, 9)</span>, with vertex <span class="chem">(2, -3)</span>.<br>(c)(i) <span class="chem">1 &lt; x &lt; 3</span>; (ii) <span class="chem">x = 2</span>.</p>
      answer: "<p>(a) <span class=\"chem\">f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)</span>。<br>(b) <span class=\"chem\">(0, 9)</span>、<span class=\"chem\">(1, 0)</span>、<span class=\"chem\">(3, 0)</span>、<span class=\"chem\">(4, 9)</span> を通り、頂点が <span class=\"chem\">(2, -3)</span> の下に凸の放物線。<br>(c)(i) <span class=\"chem\">1 &lt; x &lt; 3</span>；(ii) <span class=\"chem\">x = 2</span>。</p>",
      markscheme: [
        // EN: A1: <span class="chem">f'(x) = 3x^2 - 12x + 9</span>.
        "A1：<span class=\"chem\">f'(x) = 3x^2 - 12x + 9</span>。",
        // EN: A1: Sketch is a concave-up parabola over <span class="chem">0 &lt;= x &lt;= 4</span>.
        "A1：グラフは <span class=\"chem\">0 &lt;= x &lt;= 4</span> における下に凸の放物線である。",
        // EN: A1: <span class="chem">x</span>-intercepts <span class="chem">(1, 0)</span>, <span class="chem">(3, 0)</span> and <span class="chem">y</span>-intercept <span class="chem">(0, 9)</span> labelled.
        "A1：<span class=\"chem\">x</span> 軸との交点 <span class=\"chem\">(1, 0)</span>、<span class=\"chem\">(3, 0)</span> と <span class=\"chem\">y</span> 軸との交点 <span class=\"chem\">(0, 9)</span> を記入している。",
        // EN: A1: Vertex <span class="chem">(2, -3)</span> labelled.
        "A1：頂点 <span class=\"chem\">(2, -3)</span> を記入している。",
        // EN: A1: (i) <span class="chem">1 &lt; x &lt; 3</span> (where the graph of <span class="chem">f'</span> is below the <span class="chem">x</span>-axis).
        "A1：(i) <span class=\"chem\">1 &lt; x &lt; 3</span>（<span class=\"chem\">f'</span> のグラフが <span class=\"chem\">x</span> 軸より下にあるところ）。",
        // EN: A1: (ii) <span class="chem">x = 2</span> (the turning point of <span class="chem">f'</span>, where <span class="chem">f''</span> changes sign).
        "A1：(ii) <span class=\"chem\">x = 2</span>（<span class=\"chem\">f'</span> の極値点で、<span class=\"chem\">f''</span> の符号が変わる点）。",
      ],
    },

    // ── t5-1-q030 · numeric · exam · SL · SL 5.6, 5.8 · 6 marks
    "t5-1-q030": {
      // EN: <p>Let <span class="chem">f(x) = 2 sin x + cos 2x</span> for <span class="chem">0 &lt;= x &lt;= pi</span>. Find the maximum value of <span class="chem">f</span>.</p>
      stem: "<p><span class=\"chem\">0 &lt;= x &lt;= pi</span> に対して <span class=\"chem\">f(x) = 2 sin x + cos 2x</span> とする。<span class=\"chem\">f</span> の最大値を求めなさい (Find)。</p>",
      hints: [
        // EN: Differentiate with the chain rule: <span class="chem">f'(x) = 2 cos x - 2 sin 2x</span>. Use <span class="chem">sin 2x = 2 sin x cos x</span> to factorise.
        "合成関数の微分法で微分します：<span class=\"chem\">f'(x) = 2 cos x - 2 sin 2x</span>。<span class=\"chem\">sin 2x = 2 sin x cos x</span> を使って因数分解します。",
        // EN: <span class="chem">f'(x) = 2 cos x (1 - 2 sin x)</span>. Solve <span class="chem">cos x = 0</span> and <span class="chem">sin x = 1/2</span> in <span class="chem">[0, pi]</span>, then compare <span class="chem">f</span> at these points <strong>and</strong> at the endpoints.
        "<span class=\"chem\">f'(x) = 2 cos x (1 - 2 sin x)</span>。<span class=\"chem\">[0, pi]</span> において <span class=\"chem\">cos x = 0</span> と <span class=\"chem\">sin x = 1/2</span> を解き、これらの点<strong>および</strong>端点における <span class=\"chem\">f</span> の値を比べます。",
      ],
      // EN: <p><span class="chem">f'(x) = 2 cos x - 2 sin 2x = 2 cos x - 4 sin x cos x = 2 cos x (1 - 2 sin x)</span>. In <span class="chem">[0, pi]</span>: <span class="chem">cos x = 0 =&gt; x = pi/2</span>; <span class="chem">sin x = 1/2 =&gt; x = pi/6, 5pi/6</span>.<br>Values: <span class="chem">f(pi/6) = 1 + 1/2 = 3/2</span>, <span class="chem">f(pi/2) = 2 - 1 = 1</span>, <span class="chem">f(5pi/6) = 1 + 1/2 = 3/2</span>, and at the endpoints <span class="chem">f(0) = 1</span>, <span class="chem">f(pi) = 1</span>.<br>The maximum value is <span class="chem">3/2</span> (at <span class="chem">x = pi/6</span> and <span class="chem">x = 5pi/6</span>).</p>
      solution: "<p><span class=\"chem\">f'(x) = 2 cos x - 2 sin 2x = 2 cos x - 4 sin x cos x = 2 cos x (1 - 2 sin x)</span>。<span class=\"chem\">[0, pi]</span> において：<span class=\"chem\">cos x = 0 =&gt; x = pi/2</span>；<span class=\"chem\">sin x = 1/2 =&gt; x = pi/6, 5pi/6</span>。<br>値：<span class=\"chem\">f(pi/6) = 1 + 1/2 = 3/2</span>、<span class=\"chem\">f(pi/2) = 2 - 1 = 1</span>、<span class=\"chem\">f(5pi/6) = 1 + 1/2 = 3/2</span>、端点では <span class=\"chem\">f(0) = 1</span>、<span class=\"chem\">f(pi) = 1</span>。<br>最大値は <span class=\"chem\">3/2</span> です（<span class=\"chem\">x = pi/6</span> と <span class=\"chem\">x = 5pi/6</span> のとき）。</p>",
    },

    // ── t5-1-q031 · numeric · challenge · SL · SL 5.4 · 7 marks
    "t5-1-q031": {
      // EN: <p>Two different tangents to the curve <span class="chem">y = x^2</span> pass through the point <span class="chem">P(1, -3)</span>, which does not lie on the curve. They touch the curve at <span class="chem">A</span> and <span class="chem">B</span>. Find the area of triangle <span class="chem">PAB</span>.</p>
      stem: "<p>曲線 <span class=\"chem\">y = x^2</span> の異なる 2 本の接線が、曲線上にない点 <span class=\"chem\">P(1, -3)</span> を通る。それらは曲線と <span class=\"chem\">A</span>、<span class=\"chem\">B</span> で接する。三角形 <span class=\"chem\">PAB</span> の面積を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: you do not know where the tangents touch the curve. Call a point of contact <span class="chem">(a, a^2)</span>, write the tangent there in terms of <span class="chem">a</span>, and use the fact that it passes through <span class="chem">P</span> to find <span class="chem">a</span>.
        "解読：接線が曲線とどこで接するかはわかっていません。接点を <span class=\"chem\">(a, a^2)</span> とおき、そこでの接線を <span class=\"chem\">a</span> を用いて表し、それが <span class=\"chem\">P</span> を通ることを使って <span class=\"chem\">a</span> を求めます。",
        // EN: The tangent at <span class="chem">(a, a^2)</span> is <span class="chem">y = 2a x - a^2</span>. Substituting <span class="chem">(1, -3)</span> gives a quadratic in <span class="chem">a</span>.
        "<span class=\"chem\">(a, a^2)</span> における接線は <span class=\"chem\">y = 2a x - a^2</span> です。<span class=\"chem\">(1, -3)</span> を代入すると <span class=\"chem\">a</span> の 2 次方程式が得られます。",
        // EN: You should find <span class="chem">A(3, 9)</span> and <span class="chem">B(-1, 1)</span>. Use the vectors <span class="chem">PA</span> and <span class="chem">PB</span> (or a rectangle minus three right triangles) to find the area.
        "<span class=\"chem\">A(3, 9)</span> と <span class=\"chem\">B(-1, 1)</span> が得られるはずです。ベクトル <span class=\"chem\">PA</span> と <span class=\"chem\">PB</span>（または長方形から 3 つの直角三角形を引く方法）を使って面積を求めます。",
      ],
      // EN: <p><strong>Decode:</strong> the unknowns are the points of contact, so let one be <span class="chem">(a, a^2)</span> and make the tangent there pass through <span class="chem">P</span>.<br>The gradient at <span class="chem">(a, a^2)</span> is <span class="chem">2a</span>, so the tangent is <span class="chem">y - a^2 = 2a(x - a) =&gt; y = 2a x - a^2</span>. Through <span class="chem">(1, -3)</span>: <span class="chem">-3 = 2a - a^2 =&gt; a^2 - 2a - 3 = 0 =&gt; (a - 3)(a + 1) = 0</span>, so <span class="chem">A(3, 9)</span> and <span class="chem">B(-1, 1)</span>.<br>With <span class="chem">PA = (2, 12)</span> and <span class="chem">PB = (-2, 4)</span>, the area is <span class="chem">(1/2)|2 * 4 - 12 * (-2)| = (1/2)(8 + 24) = 16</span>.</p>
      solution: "<p><strong>解読：</strong>未知なのは接点なので、その 1 つを <span class=\"chem\">(a, a^2)</span> とおき、そこでの接線が <span class=\"chem\">P</span> を通るようにします。<br><span class=\"chem\">(a, a^2)</span> における傾きは <span class=\"chem\">2a</span> なので、接線は <span class=\"chem\">y - a^2 = 2a(x - a) =&gt; y = 2a x - a^2</span> です。<span class=\"chem\">(1, -3)</span> を通るので：<span class=\"chem\">-3 = 2a - a^2 =&gt; a^2 - 2a - 3 = 0 =&gt; (a - 3)(a + 1) = 0</span>。よって <span class=\"chem\">A(3, 9)</span>、<span class=\"chem\">B(-1, 1)</span> です。<br><span class=\"chem\">PA = (2, 12)</span>、<span class=\"chem\">PB = (-2, 4)</span> より、面積は <span class=\"chem\">(1/2)|2 * 4 - 12 * (-2)| = (1/2)(8 + 24) = 16</span> です。</p>",
    },

    // ── t5-1-q032 · numeric · exam · SL · SL 5.1, 5.6 · 3 marks
    "t5-1-q032": {
      // EN: <p>The number of people, <span class="chem">N</span> hundred, who have heard a rumour <span class="chem">t</span> days after it starts is modelled by <span class="chem">N(t) = 60 - 40e^{-t/2}</span>. Find the rate at which <span class="chem">N</span> is increasing when <span class="chem">t = 2 ln 4</span>, in hundreds of people per day.</p>
      stem: "<p>うわさが広まり始めてから <span class=\"chem\">t</span> 日後に、そのうわさを聞いた人数 <span class=\"chem\">N</span> 百人は <span class=\"chem\">N(t) = 60 - 40e^{-t/2}</span> でモデル化される。<span class=\"chem\">t = 2 ln 4</span> のときに <span class=\"chem\">N</span> が増加する割合を、1 日あたり何百人かで求めなさい (Find)。</p>",
      hints: [
        // EN: The rate of increase is the derivative <span class="chem">N'(t)</span>. Use the chain rule on <span class="chem">e^{-t/2}</span>.
        "増加する割合は導関数 <span class=\"chem\">N'(t)</span> です。<span class=\"chem\">e^{-t/2}</span> に合成関数の微分法を使います。",
        // EN: <span class="chem">N'(t) = 20e^{-t/2}</span>. At <span class="chem">t = 2 ln 4</span>, <span class="chem">-t/2 = -ln 4</span>, and <span class="chem">e^{-ln 4} = 1/4</span>.
        "<span class=\"chem\">N'(t) = 20e^{-t/2}</span>。<span class=\"chem\">t = 2 ln 4</span> のとき <span class=\"chem\">-t/2 = -ln 4</span> であり、<span class=\"chem\">e^{-ln 4} = 1/4</span> です。",
      ],
      // EN: <p><span class="chem">N'(t) = -40 * (-1/2) e^{-t/2} = 20e^{-t/2}</span>. When <span class="chem">t = 2 ln 4</span>, <span class="chem">e^{-t/2} = e^{-ln 4} = 1/4</span>, so <span class="chem">N'(2 ln 4) = 20 * 1/4 = 5</span>: the number is increasing at <span class="chem">5</span> hundred people per day.</p>
      solution: "<p><span class=\"chem\">N'(t) = -40 * (-1/2) e^{-t/2} = 20e^{-t/2}</span>。<span class=\"chem\">t = 2 ln 4</span> のとき <span class=\"chem\">e^{-t/2} = e^{-ln 4} = 1/4</span> なので <span class=\"chem\">N'(2 ln 4) = 20 * 1/4 = 5</span>：人数は 1 日あたり <span class=\"chem\">5</span> 百人の割合で増加しています。</p>",
    },

    // ── t5-1-q033 · numeric · challenge · SL · SL 5.8 · 7 marks
    "t5-1-q033": {
      // EN: <p>A ferry makes a <span class="chem">300</span> <span class="unit">km</span> crossing at a constant speed of <span class="chem">v</span> <span class="unit">km h-1</span>. Its running cost is <span class="chem">160 + 0.1v^2</span> dollars <strong>per hour</strong>. The greatest speed the ferry can reach is <span class="chem">32</span> <span class="unit">km h-1</span>. Find the minimum cost of one crossing, in dollars, correct to two decimal places.</p>
      stem: "<p>フェリーが <span class=\"chem\">300</span> <span class=\"unit\">km</span> の航路を一定の速さ <span class=\"chem\">v</span> <span class=\"unit\">km h-1</span> で横断する。運航費は<strong>1 時間あたり</strong> <span class=\"chem\">160 + 0.1v^2</span> ドルである。フェリーが出せる最高速度は <span class=\"chem\">32</span> <span class=\"unit\">km h-1</span> である。1 回の横断にかかる費用の最小値をドル単位で、小数第 2 位まで求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: the cost is given per hour, but the question wants the cost of the whole trip, so first multiply by the time taken, <span class="chem">300 / v</span> hours. Then remember the speed limit: <span class="chem">0 &lt; v &lt;= 32</span>.
        "解読：費用は 1 時間あたりで与えられていますが、問題は航路全体の費用を求めているので、まず所要時間 <span class=\"chem\">300 / v</span> 時間を掛けます。次に速度の上限 <span class=\"chem\">0 &lt; v &lt;= 32</span> を忘れないようにします。",
        // EN: Total cost <span class="chem">C(v) = (300 / v)(160 + 0.1v^2) = 48000 / v + 30v</span>. Solve <span class="chem">C'(v) = 0</span>.
        "総費用 <span class=\"chem\">C(v) = (300 / v)(160 + 0.1v^2) = 48000 / v + 30v</span>。<span class=\"chem\">C'(v) = 0</span> を解きます。",
        // EN: The stationary point is at <span class="chem">v = 40</span>, which the ferry cannot reach. What is the sign of <span class="chem">C'(v)</span> for <span class="chem">0 &lt; v &lt;= 32</span>?
        "停留点は <span class=\"chem\">v = 40</span> ですが、フェリーはその速さを出せません。<span class=\"chem\">0 &lt; v &lt;= 32</span> における <span class=\"chem\">C'(v)</span> の符号はどうなりますか？",
      ],
      // EN: <p><strong>Decode:</strong> convert the hourly cost into a trip cost, and treat the top speed as an endpoint of the domain.<br>Time <span class="chem">= 300 / v</span> hours, so <span class="chem">C(v) = (300 / v)(160 + 0.1v^2) = 48000v^{-1} + 30v</span> for <span class="chem">0 &lt; v &lt;= 32</span>.<br><span class="chem">C'(v) = -48000 / v^2 + 30 = 0 =&gt; v^2 = 1600 =&gt; v = 40</span>, outside the domain. For <span class="chem">0 &lt; v &lt;= 32</span>, <span class="chem">v^2 &lt; 1600</span> so <span class="chem">C'(v) &lt; 0</span>: the cost decreases all the way to the endpoint. The minimum is <span class="chem">C(32) = 48000/32 + 30(32) = 1500 + 960 = 2460</span>, i.e. <span class="chem">2460.00</span> dollars.</p>
      solution: "<p><strong>解読：</strong>1 時間あたりの費用を航路全体の費用に直し、最高速度を定義域の端点として扱います。<br>時間 <span class=\"chem\">= 300 / v</span> 時間なので、<span class=\"chem\">0 &lt; v &lt;= 32</span> に対して <span class=\"chem\">C(v) = (300 / v)(160 + 0.1v^2) = 48000v^{-1} + 30v</span> です。<br><span class=\"chem\">C'(v) = -48000 / v^2 + 30 = 0 =&gt; v^2 = 1600 =&gt; v = 40</span> となり、定義域の外です。<span class=\"chem\">0 &lt; v &lt;= 32</span> では <span class=\"chem\">v^2 &lt; 1600</span> なので <span class=\"chem\">C'(v) &lt; 0</span>：費用は端点まで減少し続けます。最小値は <span class=\"chem\">C(32) = 48000/32 + 30(32) = 1500 + 960 = 2460</span>、すなわち <span class=\"chem\">2460.00</span> ドルです。</p>",
    },

    // ── t5-1-q034 · short · exam · SL · SL 5.3, 5.4 · 4 marks
    "t5-1-q034": {
      // EN: <p>Find the coordinates of the points on the curve <span class="chem">y = x^3 - 3x^2 + 1</span> at which the tangent is parallel to the line <span class="chem">y = 9x + 2</span>. <strong>[4 marks]</strong></p>
      stem: "<p>曲線 <span class=\"chem\">y = x^3 - 3x^2 + 1</span> 上で、接線が直線 <span class=\"chem\">y = 9x + 2</span> に平行となる点の座標を求めなさい (Find)。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Parallel means the tangent has the same gradient as the line, <span class="chem">9</span>.
        "平行とは、接線の傾きが直線の傾き <span class=\"chem\">9</span> と等しいということです。",
        // EN: Solve <span class="chem">dy/dx = 9</span>, then substitute each <span class="chem">x</span> back into the equation of the <strong>curve</strong> (not the line) to get <span class="chem">y</span>.
        "<span class=\"chem\">dy/dx = 9</span> を解き、それぞれの <span class=\"chem\">x</span> を（直線ではなく）<strong>曲線</strong>の方程式に代入して <span class=\"chem\">y</span> を求めます。",
      ],
      // EN: <p><span class="chem">dy/dx = 3x^2 - 6x = 9 =&gt; x^2 - 2x - 3 = 0 =&gt; (x - 3)(x + 1) = 0</span>. At <span class="chem">x = 3</span>, <span class="chem">y = 27 - 27 + 1 = 1</span>; at <span class="chem">x = -1</span>, <span class="chem">y = -1 - 3 + 1 = -3</span>. The points are <span class="chem">(3, 1)</span> and <span class="chem">(-1, -3)</span>.</p>
      solution: "<p><span class=\"chem\">dy/dx = 3x^2 - 6x = 9 =&gt; x^2 - 2x - 3 = 0 =&gt; (x - 3)(x + 1) = 0</span>。<span class=\"chem\">x = 3</span> のとき <span class=\"chem\">y = 27 - 27 + 1 = 1</span>；<span class=\"chem\">x = -1</span> のとき <span class=\"chem\">y = -1 - 3 + 1 = -3</span>。求める点は <span class=\"chem\">(3, 1)</span> と <span class=\"chem\">(-1, -3)</span> です。</p>",
      // EN: <p><span class="chem">(3, 1)</span> and <span class="chem">(-1, -3)</span>.</p>
      answer: "<p><span class=\"chem\">(3, 1)</span> と <span class=\"chem\">(-1, -3)</span>。</p>",
      markscheme: [
        // EN: A1: <span class="chem">dy/dx = 3x^2 - 6x</span>.
        "A1：<span class=\"chem\">dy/dx = 3x^2 - 6x</span>。",
        // EN: M1: Sets <span class="chem">3x^2 - 6x = 9</span> (parallel lines have equal gradients).
        "M1：<span class=\"chem\">3x^2 - 6x = 9</span> とおく（平行な直線は傾きが等しい）。",
        // EN: A1: <span class="chem">x^2 - 2x - 3 = 0 =&gt; x = 3</span> or <span class="chem">x = -1</span>.
        "A1：<span class=\"chem\">x^2 - 2x - 3 = 0 =&gt; x = 3</span> または <span class=\"chem\">x = -1</span>。",
        // EN: A1: <span class="chem">(3, 1)</span> and <span class="chem">(-1, -3)</span>.
        "A1：<span class=\"chem\">(3, 1)</span> と <span class=\"chem\">(-1, -3)</span>。",
      ],
    },

    // ── t5-1-q035 · numeric · foundation · SL · SL 5.4, 5.6 · 2 marks
    "t5-1-q035": {
      // EN: <p>Let <span class="chem">f(x) = 3 sin(x) e^{-0.2x}</span>. Find the gradient of the tangent to the graph of <span class="chem">f</span> at the point where <span class="chem">x = 1.3</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">f(x) = 3 sin(x) e^{-0.2x}</span> とする。<span class=\"chem\">x = 1.3</span> となる点における <span class=\"chem\">f</span> のグラフの接線の傾きを求めなさい (Find)。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: The gradient of the tangent is <span class="chem">f'(1.3)</span>. Your GDC can evaluate a derivative at a point directly (e.g. the <span class="chem">dy/dx</span> or <span class="chem">d/dx</span> function).
        "接線の傾きは <span class=\"chem\">f'(1.3)</span> です。GDC では、ある点での微分係数を直接計算できます（例：<span class=\"chem\">dy/dx</span> や <span class=\"chem\">d/dx</span> の機能）。",
        // EN: Make sure your GDC is in <strong>radian</strong> mode: calculus with trigonometric functions always uses radians.
        "GDC が<strong>ラジアン</strong>モードになっていることを確認しましょう：三角関数の微分積分では常にラジアンを使います。",
      ],
      // EN: <p>Using the GDC (radian mode), <span class="chem">f'(1.3) ≈ 0.172994…</span>, so the gradient is <span class="chem">0.173</span> (3 s.f.). By hand, <span class="chem">f'(x) = e^{-0.2x}(3 cos x - 0.6 sin x)</span>, which gives the same value.</p>
      solution: "<p>GDC（ラジアンモード）を使うと <span class=\"chem\">f'(1.3) ≈ 0.172994…</span> なので、傾きは <span class=\"chem\">0.173</span>（有効数字 3 桁）です。手計算では <span class=\"chem\">f'(x) = e^{-0.2x}(3 cos x - 0.6 sin x)</span> となり、同じ値が得られます。</p>",
    },

    // ── t5-1-q036 · numeric · exam · SL · SL 5.8 · 5 marks
    "t5-1-q036": {
      // EN: <p>An open box is made from a rectangular sheet of card measuring <span class="chem">36</span> <span class="unit">cm</span> by <span class="chem">22</span> <span class="unit">cm</span>. A square of side <span class="chem">x</span> <span class="unit">cm</span> is cut from each corner and the sides are folded up. Find the maximum possible volume of the box, in <span class="unit">cm3</span>, correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">36</span> <span class=\"unit\">cm</span> × <span class=\"chem\">22</span> <span class=\"unit\">cm</span> の長方形の厚紙からふたのない箱をつくる。各隅から 1 辺 <span class=\"chem\">x</span> <span class=\"unit\">cm</span> の正方形を切り取り、側面を折り上げる。箱の体積の最大値を <span class=\"unit\">cm3</span> 単位で、有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: The base of the box measures <span class="chem">(36 - 2x)</span> by <span class="chem">(22 - 2x)</span> and its height is <span class="chem">x</span>. State the domain: <span class="chem">0 &lt; x &lt; 11</span>.
        "箱の底面は <span class=\"chem\">(36 - 2x)</span> × <span class=\"chem\">(22 - 2x)</span>、高さは <span class=\"chem\">x</span> です。定義域を述べましょう：<span class=\"chem\">0 &lt; x &lt; 11</span>。",
        // EN: Graph <span class="chem">V(x) = x(36 - 2x)(22 - 2x)</span> on <span class="chem">0 &lt; x &lt; 11</span> and use the GDC maximum feature (or solve <span class="chem">V'(x) = 0</span>).
        "<span class=\"chem\">0 &lt; x &lt; 11</span> で <span class=\"chem\">V(x) = x(36 - 2x)(22 - 2x)</span> のグラフをかき、GDC の最大値機能を使います（または <span class=\"chem\">V'(x) = 0</span> を解きます）。",
      ],
      // EN: <p><span class="chem">V(x) = x(36 - 2x)(22 - 2x)</span> for <span class="chem">0 &lt; x &lt; 11</span>. <span class="chem">V'(x) = 12x^2 - 232x + 792 = 0</span> gives <span class="chem">x ≈ 4.4279</span> (the other root, <span class="chem">x ≈ 14.9</span>, is outside the domain). <span class="chem">V</span> is <span class="chem">0</span> at both ends of the domain, so this stationary point is the maximum: <span class="chem">V_{max} = V(4.4279…) ≈ 1579.8</span>, i.e. <span class="chem">1580</span> <span class="unit">cm3</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">0 &lt; x &lt; 11</span> に対して <span class=\"chem\">V(x) = x(36 - 2x)(22 - 2x)</span>。<span class=\"chem\">V'(x) = 12x^2 - 232x + 792 = 0</span> から <span class=\"chem\">x ≈ 4.4279</span> が得られます（もう 1 つの解 <span class=\"chem\">x ≈ 14.9</span> は定義域の外です）。<span class=\"chem\">V</span> は定義域の両端で <span class=\"chem\">0</span> なので、この停留点で最大となります：<span class=\"chem\">V_{max} = V(4.4279…) ≈ 1579.8</span>、すなわち <span class=\"chem\">1580</span> <span class=\"unit\">cm3</span>（有効数字 3 桁）。</p>",
    },

    // ── t5-1-q037 · numeric · exam · SL · SL 5.6, 5.8 · 4 marks
    "t5-1-q037": {
      // EN: <p>Let <span class="chem">f(x) = (x^2 - 3)e^{-0.4x}</span> for <span class="chem">x \in \mathbb{R}</span>. The graph of <span class="chem">f</span> has one local maximum point. Find the <span class="chem">y</span>-coordinate of this point, correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">x \\in \\mathbb{R}</span> に対して <span class=\"chem\">f(x) = (x^2 - 3)e^{-0.4x}</span> とする。<span class=\"chem\">f</span> のグラフは極大点を 1 つもつ。この点の <span class=\"chem\">y</span> 座標を有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: Sketch <span class="chem">y = f(x)</span> on your GDC first. The local maximum is to the right of the origin; you may need to widen the window (try <span class="chem">-3 &lt;= x &lt;= 15</span>).
        "まず GDC で <span class=\"chem\">y = f(x)</span> のグラフをかきます。極大点は原点の右側にあります；表示範囲を広げる必要があるかもしれません（<span class=\"chem\">-3 &lt;= x &lt;= 15</span> を試しましょう）。",
        // EN: Use the GDC maximum feature, or solve <span class="chem">f'(x) = e^{-0.4x}(2x - 0.4x^2 + 1.2) = 0</span>.
        "GDC の最大値機能を使うか、<span class=\"chem\">f'(x) = e^{-0.4x}(2x - 0.4x^2 + 1.2) = 0</span> を解きます。",
      ],
      // EN: <p><span class="chem">f'(x) = 2x e^{-0.4x} - 0.4(x^2 - 3)e^{-0.4x} = e^{-0.4x}(-0.4x^2 + 2x + 1.2)</span>. Since <span class="chem">e^{-0.4x} &gt; 0</span>, <span class="chem">f'(x) = 0</span> when <span class="chem">x ≈ -0.541</span> or <span class="chem">x ≈ 5.541</span>. The quadratic factor is positive between the roots and negative after <span class="chem">5.541</span>, so <span class="chem">f'</span> changes from <span class="chem">+</span> to <span class="chem">-</span> there: a local maximum. <span class="chem">f(5.5414…) ≈ 3.0196</span>, so the <span class="chem">y</span>-coordinate is <span class="chem">3.02</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">f'(x) = 2x e^{-0.4x} - 0.4(x^2 - 3)e^{-0.4x} = e^{-0.4x}(-0.4x^2 + 2x + 1.2)</span>。<span class=\"chem\">e^{-0.4x} &gt; 0</span> なので、<span class=\"chem\">x ≈ -0.541</span> または <span class=\"chem\">x ≈ 5.541</span> のとき <span class=\"chem\">f'(x) = 0</span> です。2 次の因数は 2 つの解の間で正、<span class=\"chem\">5.541</span> より後で負なので、<span class=\"chem\">f'</span> はそこで <span class=\"chem\">+</span> から <span class=\"chem\">-</span> に変わります：極大です。<span class=\"chem\">f(5.5414…) ≈ 3.0196</span> なので、<span class=\"chem\">y</span> 座標は <span class=\"chem\">3.02</span>（有効数字 3 桁）です。</p>",
    },

    // ── t5-1-q038 · short · exam · SL · SL 5.6, 5.7, 5.8 · 6 marks
    "t5-1-q038": {
      // EN: <p>Let <span class="chem">f(x) = x sin x</span> for <span class="chem">0 &lt; x &lt; pi</span>.<br>(a) Show that <span class="chem">f''(x) = 2 cos x - x sin x</span>. <strong>[2 marks]</strong><br>(b) Find the <span class="chem">x</span>-coordinate of the point of inflexion on the graph of <span class="chem">f</span>, and justify that it is a point of inflexion. <strong>[3 marks]</strong><br>(c) Find the gradient of the graph of <span class="chem">f</span> at the point of inflexion. <strong>[1 mark]</strong></p>
      stem: "<p><span class=\"chem\">0 &lt; x &lt; pi</span> に対して <span class=\"chem\">f(x) = x sin x</span> とする。<br>(a) <span class=\"chem\">f''(x) = 2 cos x - x sin x</span> であることを示しなさい (Show that)。<strong>[2 marks]</strong><br>(b) <span class=\"chem\">f</span> のグラフ上の変曲点の <span class=\"chem\">x</span> 座標を求め (Find)、それが変曲点であることの根拠を示しなさい。<strong>[3 marks]</strong><br>(c) 変曲点における <span class=\"chem\">f</span> のグラフの傾きを求めなさい (Find)。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: For (b) a point of inflexion needs <span class="chem">f''(x) = 0</span> <strong>and</strong> a change of sign of <span class="chem">f''</span>. The GDC gives the root; you still have to check the sign on each side.
        "(b) では、変曲点には <span class=\"chem\">f''(x) = 0</span> <strong>かつ</strong> <span class=\"chem\">f''</span> の符号変化が必要です。GDC で解は求まりますが、両側の符号は自分で確認する必要があります。",
        // EN: For (c), the gradient is <span class="chem">f'(x) = sin x + x cos x</span> at your root (keep the full GDC value, not the rounded one).
        "(c) では、傾きは求めた解における <span class=\"chem\">f'(x) = sin x + x cos x</span> の値です（四捨五入した値ではなく GDC の値をそのまま使いましょう）。",
      ],
      // EN: <p>(a) <span class="chem">f'(x) = 1 * sin x + x cos x</span> and <span class="chem">f''(x) = cos x + (cos x - x sin x) = 2 cos x - x sin x</span>.<br>(b) The GDC gives one root of <span class="chem">2 cos x - x sin x = 0</span> in <span class="chem">0 &lt; x &lt; pi</span>: <span class="chem">x ≈ 1.07687</span>. Checking each side: <span class="chem">f''(1) ≈ 0.239 &gt; 0</span> and <span class="chem">f''(1.2) ≈ -0.394 &lt; 0</span>, so the concavity changes and <span class="chem">x ≈ 1.08</span> is a point of inflexion.<br>(c) <span class="chem">f'(1.07687…) = sin(1.07687…) + 1.07687… cos(1.07687…) ≈ 1.39</span>.</p>
      solution: "<p>(a) <span class=\"chem\">f'(x) = 1 * sin x + x cos x</span>、<span class=\"chem\">f''(x) = cos x + (cos x - x sin x) = 2 cos x - x sin x</span>。<br>(b) GDC により、<span class=\"chem\">0 &lt; x &lt; pi</span> における <span class=\"chem\">2 cos x - x sin x = 0</span> の解は 1 つで <span class=\"chem\">x ≈ 1.07687</span> です。両側を確認すると <span class=\"chem\">f''(1) ≈ 0.239 &gt; 0</span>、<span class=\"chem\">f''(1.2) ≈ -0.394 &lt; 0</span> なので凹凸が変わり、<span class=\"chem\">x ≈ 1.08</span> は変曲点です。<br>(c) <span class=\"chem\">f'(1.07687…) = sin(1.07687…) + 1.07687… cos(1.07687…) ≈ 1.39</span>。</p>",
      // EN: <p>(a) <span class="chem">f'(x) = sin x + x cos x</span>, so <span class="chem">f''(x) = 2 cos x - x sin x</span>.<br>(b) <span class="chem">x ≈ 1.08</span>; <span class="chem">f''</span> changes from positive to negative there.<br>(c) <span class="chem">f'(1.0769…) ≈ 1.39</span>.</p>
      answer: "<p>(a) <span class=\"chem\">f'(x) = sin x + x cos x</span> なので <span class=\"chem\">f''(x) = 2 cos x - x sin x</span>。<br>(b) <span class=\"chem\">x ≈ 1.08</span>；そこで <span class=\"chem\">f''</span> は正から負に変わる。<br>(c) <span class=\"chem\">f'(1.0769…) ≈ 1.39</span>。</p>",
      markscheme: [
        // EN: M1: Uses the product rule: <span class="chem">f'(x) = sin x + x cos x</span>.
        "M1：積の微分法を使う：<span class=\"chem\">f'(x) = sin x + x cos x</span>。",
        // EN: A1: Differentiates again: <span class="chem">f''(x) = cos x + cos x - x sin x = 2 cos x - x sin x</span> (AG).
        "A1：もう一度微分する：<span class=\"chem\">f''(x) = cos x + cos x - x sin x = 2 cos x - x sin x</span> (AG)。",
        // EN: M1: Solves <span class="chem">2 cos x - x sin x = 0</span> on the GDC.
        "M1：GDC で <span class=\"chem\">2 cos x - x sin x = 0</span> を解く。",
        // EN: A1: <span class="chem">x = 1.08</span> (<span class="chem">1.07687…</span>).
        "A1：<span class=\"chem\">x = 1.08</span>（<span class=\"chem\">1.07687…</span>）。",
        // EN: R1: <span class="chem">f''</span> changes sign there, e.g. <span class="chem">f''(1) ≈ 0.239 &gt; 0</span> and <span class="chem">f''(1.2) ≈ -0.394 &lt; 0</span>.
        "R1：そこで <span class=\"chem\">f''</span> の符号が変わる。例：<span class=\"chem\">f''(1) ≈ 0.239 &gt; 0</span>、<span class=\"chem\">f''(1.2) ≈ -0.394 &lt; 0</span>。",
        // EN: A1: Gradient <span class="chem">f'(1.0769…) = 1.39</span>.
        "A1：傾き <span class=\"chem\">f'(1.0769…) = 1.39</span>。",
      ],
    },

    // ── t5-1-q039 · numeric · exam · SL · SL 5.4, 5.6 · 5 marks
    "t5-1-q039": {
      // EN: <p>Consider the curve <span class="chem">y = e^x - 2x^2</span>. The tangent to the curve at the point where <span class="chem">x = 0</span> meets the curve again at the point <span class="chem">R</span>. Find the <span class="chem">x</span>-coordinate of <span class="chem">R</span>, correct to 3 significant figures.</p>
      stem: "<p>曲線 <span class=\"chem\">y = e^x - 2x^2</span> を考える。<span class=\"chem\">x = 0</span> となる点におけるこの曲線の接線は、曲線と再び点 <span class=\"chem\">R</span> で交わる。<span class=\"chem\">R</span> の <span class=\"chem\">x</span> 座標を有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: At <span class="chem">x = 0</span>: <span class="chem">y = 1</span> and <span class="chem">dy/dx = e^x - 4x = 1</span>, so the tangent is <span class="chem">y = x + 1</span>.
        "<span class=\"chem\">x = 0</span> のとき：<span class=\"chem\">y = 1</span>、<span class=\"chem\">dy/dx = e^x - 4x = 1</span> なので、接線は <span class=\"chem\">y = x + 1</span> です。",
        // EN: Graph <span class="chem">y = e^x - 2x^2</span> and <span class="chem">y = x + 1</span> and find their other intersection (the tangent touches at <span class="chem">x = 0</span>, so ignore that one).
        "<span class=\"chem\">y = e^x - 2x^2</span> と <span class=\"chem\">y = x + 1</span> のグラフをかき、もう 1 つの交点を求めます（接線は <span class=\"chem\">x = 0</span> で接するので、その点は除きます）。",
      ],
      // EN: <p>At <span class="chem">x = 0</span>, <span class="chem">y = 1</span> and <span class="chem">dy/dx = e^0 - 0 = 1</span>, so the tangent is <span class="chem">y = x + 1</span>. Solving <span class="chem">e^x - 2x^2 = x + 1</span> on the GDC gives <span class="chem">x = 0</span> (the point of contact) and <span class="chem">x ≈ 3.2136</span>. So <span class="chem">R</span> has <span class="chem">x</span>-coordinate <span class="chem">3.21</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">x = 0</span> のとき <span class=\"chem\">y = 1</span>、<span class=\"chem\">dy/dx = e^0 - 0 = 1</span> なので、接線は <span class=\"chem\">y = x + 1</span> です。GDC で <span class=\"chem\">e^x - 2x^2 = x + 1</span> を解くと <span class=\"chem\">x = 0</span>（接点）と <span class=\"chem\">x ≈ 3.2136</span> が得られます。よって <span class=\"chem\">R</span> の <span class=\"chem\">x</span> 座標は <span class=\"chem\">3.21</span>（有効数字 3 桁）です。</p>",
    },

    // ── t5-1-q040 · short · exam · SL · SL 5.7, 5.8 · 6 marks
    "t5-1-q040": {
      // EN: <p>A function <span class="chem">f</span> is defined for <span class="chem">0 &lt;= x &lt;= 4</span>. Its <strong>derivative</strong> is <span class="chem">f'(x) = x cos x - 0.5</span>.<br>(a) Find the <span class="chem">x</span>-coordinate of the local maximum point of <span class="chem">f</span>, justifying your answer. <strong>[3 marks]</strong><br>(b) Find the <span class="chem">x</span>-coordinates of the points of inflexion of the graph of <span class="chem">f</span>. <strong>[3 marks]</strong></p>
      stem: "<p>関数 <span class=\"chem\">f</span> は <span class=\"chem\">0 &lt;= x &lt;= 4</span> で定義されている。その<strong>導関数</strong>は <span class=\"chem\">f'(x) = x cos x - 0.5</span> である。<br>(a) <span class=\"chem\">f</span> の極大点の <span class=\"chem\">x</span> 座標を求め (Find)、その根拠を示しなさい。<strong>[3 marks]</strong><br>(b) <span class=\"chem\">f</span> のグラフの変曲点の <span class=\"chem\">x</span> 座標を求めなさい (Find)。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: you are given the derivative <span class="chem">f'</span>, not <span class="chem">f</span>. Stationary points of <span class="chem">f</span> are the zeros of <span class="chem">f'</span>; inflexion points of <span class="chem">f</span> are the turning points of <span class="chem">f'</span>.
        "解読：与えられているのは <span class=\"chem\">f</span> ではなく導関数 <span class=\"chem\">f'</span> です。<span class=\"chem\">f</span> の停留点は <span class=\"chem\">f'</span> の零点であり、<span class=\"chem\">f</span> の変曲点は <span class=\"chem\">f'</span> の極値点です。",
        // EN: Graph <span class="chem">y = x cos x - 0.5</span> for <span class="chem">0 &lt;= x &lt;= 4</span>. A local maximum of <span class="chem">f</span> is where this graph crosses the axis going <strong>down</strong>.
        "<span class=\"chem\">0 &lt;= x &lt;= 4</span> で <span class=\"chem\">y = x cos x - 0.5</span> のグラフをかきます。<span class=\"chem\">f</span> の極大点は、このグラフが<strong>下向き</strong>に軸を横切るところです。",
        // EN: Use the GDC maximum and minimum features on the graph of <span class="chem">f'</span> for (b).
        "(b) では、<span class=\"chem\">f'</span> のグラフに GDC の最大値・最小値機能を使います。",
      ],
      // EN: <p>(a) <span class="chem">f'(0) = -0.5 &lt; 0</span>. The GDC gives zeros of <span class="chem">f'</span> at <span class="chem">x ≈ 0.610</span> (where <span class="chem">f'</span> goes from <span class="chem">-</span> to <span class="chem">+</span>, a local minimum of <span class="chem">f</span>) and <span class="chem">x ≈ 1.098</span> (where <span class="chem">f'</span> goes from <span class="chem">+</span> to <span class="chem">-</span>). So the local maximum of <span class="chem">f</span> is at <span class="chem">x ≈ 1.10</span>.<br>(b) <span class="chem">f''</span> is the gradient of <span class="chem">f'</span>, so it is zero and changes sign at the turning points of <span class="chem">y = f'(x)</span>. The GDC gives a maximum of <span class="chem">f'</span> at <span class="chem">x ≈ 0.860</span> and a minimum at <span class="chem">x ≈ 3.43</span>. The points of inflexion are at <span class="chem">x ≈ 0.860</span> and <span class="chem">x ≈ 3.43</span>.</p>
      solution: "<p>(a) <span class=\"chem\">f'(0) = -0.5 &lt; 0</span>。GDC により <span class=\"chem\">f'</span> の零点は <span class=\"chem\">x ≈ 0.610</span>（<span class=\"chem\">f'</span> が <span class=\"chem\">-</span> から <span class=\"chem\">+</span> に変わり、<span class=\"chem\">f</span> の極小点）と <span class=\"chem\">x ≈ 1.098</span>（<span class=\"chem\">f'</span> が <span class=\"chem\">+</span> から <span class=\"chem\">-</span> に変わる）です。よって <span class=\"chem\">f</span> の極大点は <span class=\"chem\">x ≈ 1.10</span> です。<br>(b) <span class=\"chem\">f''</span> は <span class=\"chem\">f'</span> の傾きなので、<span class=\"chem\">y = f'(x)</span> の極値点で 0 となり符号が変わります。GDC により、<span class=\"chem\">f'</span> は <span class=\"chem\">x ≈ 0.860</span> で極大、<span class=\"chem\">x ≈ 3.43</span> で極小となります。変曲点は <span class=\"chem\">x ≈ 0.860</span> と <span class=\"chem\">x ≈ 3.43</span> です。</p>",
      // EN: <p>(a) <span class="chem">x ≈ 1.10</span>, where <span class="chem">f'</span> changes from positive to negative.<br>(b) <span class="chem">x ≈ 0.860</span> and <span class="chem">x ≈ 3.43</span> (the turning points of <span class="chem">f'</span>).</p>
      answer: "<p>(a) <span class=\"chem\">x ≈ 1.10</span>。そこで <span class=\"chem\">f'</span> は正から負に変わる。<br>(b) <span class=\"chem\">x ≈ 0.860</span> と <span class=\"chem\">x ≈ 3.43</span>（<span class=\"chem\">f'</span> の極値点）。</p>",
      markscheme: [
        // EN: M1: Solves <span class="chem">f'(x) = 0</span> on the GDC: <span class="chem">x = 0.610</span> and <span class="chem">x = 1.10</span>.
        "M1：GDC で <span class=\"chem\">f'(x) = 0</span> を解く：<span class=\"chem\">x = 0.610</span> と <span class=\"chem\">x = 1.10</span>。",
        // EN: R1: <span class="chem">f'</span> changes from positive to negative at <span class="chem">x = 1.10</span> (it goes from negative to positive at <span class="chem">0.610</span>, a minimum).
        "R1：<span class=\"chem\">f'</span> は <span class=\"chem\">x = 1.10</span> で正から負に変わる（<span class=\"chem\">0.610</span> では負から正に変わり、極小）。",
        // EN: A1: <span class="chem">x = 1.10</span> (<span class="chem">1.09800…</span>).
        "A1：<span class=\"chem\">x = 1.10</span>（<span class=\"chem\">1.09800…</span>）。",
        // EN: M1: Points of inflexion are at the turning points of <span class="chem">y = f'(x)</span> (where <span class="chem">f''(x) = cos x - x sin x = 0</span> and changes sign).
        "M1：変曲点は <span class=\"chem\">y = f'(x)</span> の極値点である（<span class=\"chem\">f''(x) = cos x - x sin x = 0</span> となり、符号が変わるところ）。",
        // EN: A1: <span class="chem">x = 0.860</span>.
        "A1：<span class=\"chem\">x = 0.860</span>。",
        // EN: A1: <span class="chem">x = 3.43</span>.
        "A1：<span class=\"chem\">x = 3.43</span>。",
      ],
    },

    // ── t5-1-q041 · numeric · exam · SL · SL 5.8 · 5 marks
    "t5-1-q041": {
      // EN: <p>The entrance to a tunnel is modelled by the region between the <span class="chem">x</span>-axis and the curve <span class="chem">y = 8 cos(x/2)</span> for <span class="chem">-pi &lt;= x &lt;= pi</span>, where lengths are in metres. A rectangular door is fitted with its base on the <span class="chem">x</span>-axis and its two top corners on the curve, at <span class="chem">(-x, y)</span> and <span class="chem">(x, y)</span>. Find the maximum possible area of the door, in <span class="unit">m2</span>, correct to 3 significant figures.</p>
      stem: "<p>トンネルの入口は、<span class=\"chem\">x</span> 軸と曲線 <span class=\"chem\">y = 8 cos(x/2)</span>（<span class=\"chem\">-pi &lt;= x &lt;= pi</span>）の間の領域としてモデル化される。ただし長さの単位はメートルである。長方形の扉を、底辺が <span class=\"chem\">x</span> 軸上、上の 2 つの角が曲線上の <span class=\"chem\">(-x, y)</span> と <span class=\"chem\">(x, y)</span> にくるように取り付ける。扉の面積の最大値を <span class=\"unit\">m2</span> 単位で、有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: The door is <span class="chem">2x</span> wide and <span class="chem">8 cos(x/2)</span> high, so <span class="chem">A(x) = 16x cos(x/2)</span> for <span class="chem">0 &lt; x &lt; pi</span>.
        "扉の幅は <span class=\"chem\">2x</span>、高さは <span class=\"chem\">8 cos(x/2)</span> なので、<span class=\"chem\">0 &lt; x &lt; pi</span> に対して <span class=\"chem\">A(x) = 16x cos(x/2)</span> です。",
        // EN: Graph <span class="chem">A(x)</span> on the GDC (radian mode) and use the maximum feature. Check that the area is <span class="chem">0</span> at both ends of the domain.
        "GDC（ラジアンモード）で <span class=\"chem\">A(x)</span> のグラフをかき、最大値機能を使います。定義域の両端で面積が <span class=\"chem\">0</span> になることを確認しましょう。",
      ],
      // EN: <p><span class="chem">A(x) = 2x * 8 cos(x/2) = 16x cos(x/2)</span>, <span class="chem">0 &lt; x &lt; pi</span>. <span class="chem">A'(x) = 16 cos(x/2) - 8x sin(x/2) = 0</span> gives <span class="chem">x ≈ 1.7207</span>. Since <span class="chem">A -&gt; 0</span> at both ends of the domain, this is the maximum: <span class="chem">A ≈ 17.955</span>, i.e. <span class="chem">18.0</span> <span class="unit">m2</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">A(x) = 2x * 8 cos(x/2) = 16x cos(x/2)</span>、<span class=\"chem\">0 &lt; x &lt; pi</span>。<span class=\"chem\">A'(x) = 16 cos(x/2) - 8x sin(x/2) = 0</span> から <span class=\"chem\">x ≈ 1.7207</span> が得られます。定義域の両端で <span class=\"chem\">A -&gt; 0</span> なので、これが最大です：<span class=\"chem\">A ≈ 17.955</span>、すなわち <span class=\"chem\">18.0</span> <span class=\"unit\">m2</span>（有効数字 3 桁）。</p>",
    },

    // ── t5-1-q042 · numeric · challenge · SL · SL 5.7, 5.8 · 6 marks
    "t5-1-q042": {
      // EN: <p>After a tablet is taken, the concentration of a drug in the blood is <span class="chem">C(t) = 15(e^{-0.2t} - e^{-0.9t})</span> <span class="unit">mg L-1</span>, where <span class="chem">t</span> is the time in hours, <span class="chem">t &gt;= 0</span>. The concentration rises to a peak and then falls. Find the greatest rate at which the concentration is decreasing, in <span class="unit">mg L-1</span> per hour, correct to 3 significant figures.</p>
      stem: "<p>錠剤を服用した後の血液中の薬物濃度は <span class=\"chem\">C(t) = 15(e^{-0.2t} - e^{-0.9t})</span> <span class=\"unit\">mg L-1</span> である。ただし <span class=\"chem\">t</span> は時間（時）で、<span class=\"chem\">t &gt;= 0</span> である。濃度は最高値まで上がり、その後下がる。濃度が減少する割合の最大値を、1 時間あたりの <span class=\"unit\">mg L-1</span> 単位で、有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: “rate of decrease” is <span class="chem">-C'(t)</span>. Its greatest value is where <span class="chem">C'(t)</span> is most negative, i.e. the minimum of <span class="chem">C'</span>. That is where <span class="chem">C''(t) = 0</span>: a point of inflexion of <span class="chem">C</span>.
        "解読：「減少する割合」は <span class=\"chem\">-C'(t)</span> です。その最大値は <span class=\"chem\">C'(t)</span> が最も負になるところ、すなわち <span class=\"chem\">C'</span> の最小値です。それは <span class=\"chem\">C''(t) = 0</span> となるところ：<span class=\"chem\">C</span> の変曲点です。",
        // EN: Graph <span class="chem">y = C'(t)</span> (enter it by hand, or as the GDC derivative of <span class="chem">C</span>) for <span class="chem">0 &lt;= t &lt;= 20</span> and find its minimum.
        "<span class=\"chem\">0 &lt;= t &lt;= 20</span> で <span class=\"chem\">y = C'(t)</span> のグラフをかき（手で入力するか、GDC で <span class=\"chem\">C</span> の導関数として入力）、その最小値を求めます。",
        // EN: Check the ends: <span class="chem">C'(0) = 10.5 &gt; 0</span> (the concentration is rising then), and <span class="chem">C'(t) -&gt; 0</span> as <span class="chem">t</span> grows, so the minimum of <span class="chem">C'</span> really is the turning point.
        "両端を確認します：<span class=\"chem\">C'(0) = 10.5 &gt; 0</span>（このとき濃度は上昇中）であり、<span class=\"chem\">t</span> が大きくなると <span class=\"chem\">C'(t) -&gt; 0</span> なので、<span class=\"chem\">C'</span> の最小値は確かに極値点です。",
      ],
      // EN: <p><strong>Decode:</strong> the greatest rate of decrease is the most negative value of <span class="chem">C'(t)</span>, found where <span class="chem">C''(t) = 0</span> (the inflexion point of <span class="chem">C</span>).<br><span class="chem">C'(t) = 15(-0.2e^{-0.2t} + 0.9e^{-0.9t})</span> and <span class="chem">C''(t) = 15(0.04e^{-0.2t} - 0.81e^{-0.9t})</span>. <span class="chem">C''(t) = 0</span> at <span class="chem">t ≈ 4.297</span> (exactly <span class="chem">ln(20.25) / 0.7</span>), and <span class="chem">C''</span> changes from negative to positive there, so <span class="chem">C'</span> has its minimum. <span class="chem">C'(4.297…) ≈ -0.9879</span>. At <span class="chem">t = 0</span> the concentration is increasing (<span class="chem">C'(0) = 10.5</span>), and for large <span class="chem">t</span>, <span class="chem">C'(t) -&gt; 0</span>, so no endpoint gives a faster decrease. The greatest rate of decrease is <span class="chem">0.988</span> <span class="unit">mg L-1</span> per hour (3 s.f.).</p>
      solution: "<p><strong>解読：</strong>減少の割合の最大値は <span class=\"chem\">C'(t)</span> の最も負の値であり、<span class=\"chem\">C''(t) = 0</span> となるところ（<span class=\"chem\">C</span> の変曲点）で得られます。<br><span class=\"chem\">C'(t) = 15(-0.2e^{-0.2t} + 0.9e^{-0.9t})</span>、<span class=\"chem\">C''(t) = 15(0.04e^{-0.2t} - 0.81e^{-0.9t})</span>。<span class=\"chem\">t ≈ 4.297</span> で <span class=\"chem\">C''(t) = 0</span>（正確には <span class=\"chem\">ln(20.25) / 0.7</span>）であり、そこで <span class=\"chem\">C''</span> は負から正に変わるので、<span class=\"chem\">C'</span> は最小になります。<span class=\"chem\">C'(4.297…) ≈ -0.9879</span>。<span class=\"chem\">t = 0</span> では濃度は増加中（<span class=\"chem\">C'(0) = 10.5</span>）であり、<span class=\"chem\">t</span> が大きいとき <span class=\"chem\">C'(t) -&gt; 0</span> なので、端点でより速く減少することはありません。減少の割合の最大値は 1 時間あたり <span class=\"chem\">0.988</span> <span class=\"unit\">mg L-1</span>（有効数字 3 桁）です。</p>",
    },

    // ── t5-1-q043 · numeric · challenge · SL · SL 5.8 · 6 marks
    "t5-1-q043": {
      // EN: <p>A sensor is placed at the point <span class="chem">A(2, 1)</span>. A cable is to be laid in a straight line from <span class="chem">A</span> to a point <span class="chem">P</span> on the curve <span class="chem">y = e^{x/2}</span>. Find the length of the shortest possible cable, correct to 3 significant figures.</p>
      stem: "<p>点 <span class=\"chem\">A(2, 1)</span> にセンサーが設置されている。<span class=\"chem\">A</span> から曲線 <span class=\"chem\">y = e^{x/2}</span> 上の点 <span class=\"chem\">P</span> までケーブルを一直線に敷く。ケーブルの長さの最小値を有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: “shortest cable” means the minimum distance from <span class="chem">A</span> to a point <span class="chem">P(x, e^{x/2})</span> on the curve. Write the distance as a function of the single variable <span class="chem">x</span> and minimise it.
        "解読：「最も短いケーブル」とは、<span class=\"chem\">A</span> から曲線上の点 <span class=\"chem\">P(x, e^{x/2})</span> までの距離の最小値のことです。距離を 1 つの変数 <span class=\"chem\">x</span> の関数として表し、最小化します。",
        // EN: <span class="chem">AP = sqrt((x - 2)^2 + (e^{x/2} - 1)^2)</span>. The square <span class="chem">D = AP^2</span> has its minimum at the same <span class="chem">x</span> and is easier to differentiate.
        "<span class=\"chem\">AP = sqrt((x - 2)^2 + (e^{x/2} - 1)^2)</span>。2 乗 <span class=\"chem\">D = AP^2</span> は同じ <span class=\"chem\">x</span> で最小となり、微分もしやすくなります。",
        // EN: Use the GDC minimum on the graph of <span class="chem">AP</span> (or solve <span class="chem">D'(x) = 0</span>), then give the distance, not the <span class="chem">x</span>-value.
        "<span class=\"chem\">AP</span> のグラフに GDC の最小値機能を使い（または <span class=\"chem\">D'(x) = 0</span> を解き）、<span class=\"chem\">x</span> の値ではなく距離を答えます。",
      ],
      // EN: <p><strong>Decode:</strong> minimise the distance <span class="chem">AP</span> where <span class="chem">P = (x, e^{x/2})</span>.<br><span class="chem">D(x) = AP^2 = (x - 2)^2 + (e^{x/2} - 1)^2</span>, <span class="chem">D'(x) = 2(x - 2) + e^{x/2}(e^{x/2} - 1) = 0</span>. The GDC gives the single solution <span class="chem">x ≈ 1.2230</span>, and the graph of <span class="chem">AP</span> shows it is a minimum (the distance grows without bound in both directions). Then <span class="chem">AP = sqrt(D(1.2230…)) ≈ 1.1466</span>, so the shortest cable is <span class="chem">1.15</span> units (3 s.f.).</p>
      solution: "<p><strong>解読：</strong><span class=\"chem\">P = (x, e^{x/2})</span> として距離 <span class=\"chem\">AP</span> を最小化します。<br><span class=\"chem\">D(x) = AP^2 = (x - 2)^2 + (e^{x/2} - 1)^2</span>、<span class=\"chem\">D'(x) = 2(x - 2) + e^{x/2}(e^{x/2} - 1) = 0</span>。GDC によりただ 1 つの解 <span class=\"chem\">x ≈ 1.2230</span> が得られ、<span class=\"chem\">AP</span> のグラフからそれが最小であることがわかります（距離はどちらの方向にも限りなく大きくなります）。よって <span class=\"chem\">AP = sqrt(D(1.2230…)) ≈ 1.1466</span> なので、最も短いケーブルは <span class=\"chem\">1.15</span> 単位（有効数字 3 桁）です。</p>",
    },

    // ── t5-1-q044 · numeric · challenge · SL · SL 5.7, 5.8 · 6 marks
    "t5-1-q044": {
      // EN: <p>The depth of water in a harbour, <span class="chem">h</span> metres, <span class="chem">t</span> hours after midnight is modelled by <span class="chem">h(t) = 3 + 1.8 sin(0.5t) + 0.6 cos t</span> for <span class="chem">0 &lt;= t &lt;= 12</span>. Find the greatest rate at which the water is rising during this period, in metres per hour, correct to 3 significant figures.</p>
      stem: "<p>港の水深 <span class=\"chem\">h</span> メートルは、午前 0 時から <span class=\"chem\">t</span> 時間後に <span class=\"chem\">h(t) = 3 + 1.8 sin(0.5t) + 0.6 cos t</span>（<span class=\"chem\">0 &lt;= t &lt;= 12</span>）でモデル化される。この時間内に水位が上昇する割合の最大値を、1 時間あたりのメートル単位で、有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: “rate at which the water is rising” is <span class="chem">h'(t)</span>. You need the <strong>maximum of <span class="chem">h'</span></strong> on <span class="chem">[0, 12]</span>, not the maximum of <span class="chem">h</span>. Candidates are the turning points of <span class="chem">h'</span> and the two endpoints.
        "解読：「水位が上昇する割合」は <span class=\"chem\">h'(t)</span> です。必要なのは <span class=\"chem\">h</span> の最大値ではなく、<span class=\"chem\">[0, 12]</span> における <strong><span class=\"chem\">h'</span> の最大値</strong>です。候補は <span class=\"chem\">h'</span> の極値点と 2 つの端点です。",
        // EN: <span class="chem">h'(t) = 0.9 cos(0.5t) - 0.6 sin t</span>. Graph it for <span class="chem">0 &lt;= t &lt;= 12</span> (radian mode).
        "<span class=\"chem\">h'(t) = 0.9 cos(0.5t) - 0.6 sin t</span>。<span class=\"chem\">0 &lt;= t &lt;= 12</span> でそのグラフをかきます（ラジアンモード）。",
        // EN: There are two local maxima of <span class="chem">h'</span>. Compare them with <span class="chem">h'(0)</span> and <span class="chem">h'(12)</span>.
        "<span class=\"chem\">h'</span> の極大値は 2 つあります。それらを <span class=\"chem\">h'(0)</span>、<span class=\"chem\">h'(12)</span> と比べます。",
      ],
      // EN: <p><strong>Decode:</strong> maximise the rate of change <span class="chem">h'(t)</span> over the closed interval <span class="chem">[0, 12]</span>, checking the endpoints.<br><span class="chem">h'(t) = 0.9 cos(0.5t) - 0.6 sin t</span>. Its local maxima (where <span class="chem">h''(t) = -0.45 sin(0.5t) - 0.6 cos t = 0</span>) are <span class="chem">h'(3.952…) ≈ 0.080</span> and <span class="chem">h'(11.416…) ≈ 1.3029</span>. The endpoints give <span class="chem">h'(0) = 0.9</span> and <span class="chem">h'(12) ≈ 1.186</span>. The greatest is <span class="chem">1.30</span> metres per hour (3 s.f.), at <span class="chem">t ≈ 11.4</span>.</p>
      solution: "<p><strong>解読：</strong>閉区間 <span class=\"chem\">[0, 12]</span> で変化率 <span class=\"chem\">h'(t)</span> を最大化し、端点も調べます。<br><span class=\"chem\">h'(t) = 0.9 cos(0.5t) - 0.6 sin t</span>。その極大値（<span class=\"chem\">h''(t) = -0.45 sin(0.5t) - 0.6 cos t = 0</span> となるところ）は <span class=\"chem\">h'(3.952…) ≈ 0.080</span> と <span class=\"chem\">h'(11.416…) ≈ 1.3029</span> です。端点では <span class=\"chem\">h'(0) = 0.9</span>、<span class=\"chem\">h'(12) ≈ 1.186</span> です。最大値は 1 時間あたり <span class=\"chem\">1.30</span> メートル（有効数字 3 桁）で、<span class=\"chem\">t ≈ 11.4</span> のときです。</p>",
    },

    // ── t5-1-q045 · short · exam · SL · SL 5.2, 5.6 · 4 marks
    "t5-1-q045": {
      // EN: <p>Let <span class="chem">f(x) = e^{0.5x} - x^2</span>. Find the set of values of <span class="chem">x</span> for which <span class="chem">f</span> is decreasing. Give the endpoints of the interval correct to 3 significant figures. <strong>[4 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = e^{0.5x} - x^2</span> とする。<span class=\"chem\">f</span> が減少する <span class=\"chem\">x</span> の値の範囲を求めなさい (Find)。区間の端点は有効数字 3 桁で答えなさい。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: <span class="chem">f</span> is decreasing where <span class="chem">f'(x) &lt; 0</span>. This equation cannot be solved algebraically, so use the GDC.
        "<span class=\"chem\">f</span> は <span class=\"chem\">f'(x) &lt; 0</span> となるところで減少します。この方程式は代数的に解けないので、GDC を使います。",
        // EN: Graph <span class="chem">y = 0.5e^{0.5x} - 2x</span> with a wide enough window to see <strong>both</strong> zeros (try <span class="chem">-2 &lt;= x &lt;= 8</span>).
        "<strong>2 つの</strong>零点がどちらも見えるように、十分広い表示範囲で <span class=\"chem\">y = 0.5e^{0.5x} - 2x</span> のグラフをかきます（<span class=\"chem\">-2 &lt;= x &lt;= 8</span> を試しましょう）。",
      ],
      // EN: <p><span class="chem">f'(x) = 0.5e^{0.5x} - 2x</span>. The GDC gives zeros at <span class="chem">x ≈ 0.28884</span> and <span class="chem">x ≈ 6.5234</span>, and <span class="chem">f'(x) &lt; 0</span> between them (e.g. <span class="chem">f'(1) ≈ -1.18</span>). So <span class="chem">f</span> is decreasing for <span class="chem">0.289 &lt; x &lt; 6.52</span>.</p>
      solution: "<p><span class=\"chem\">f'(x) = 0.5e^{0.5x} - 2x</span>。GDC により零点は <span class=\"chem\">x ≈ 0.28884</span> と <span class=\"chem\">x ≈ 6.5234</span> で、その間で <span class=\"chem\">f'(x) &lt; 0</span> です（例：<span class=\"chem\">f'(1) ≈ -1.18</span>）。よって <span class=\"chem\">f</span> は <span class=\"chem\">0.289 &lt; x &lt; 6.52</span> で減少します。</p>",
      // EN: <p><span class="chem">0.289 &lt; x &lt; 6.52</span>.</p>
      answer: "<p><span class=\"chem\">0.289 &lt; x &lt; 6.52</span>。</p>",
      markscheme: [
        // EN: A1: <span class="chem">f'(x) = 0.5e^{0.5x} - 2x</span>.
        "A1：<span class=\"chem\">f'(x) = 0.5e^{0.5x} - 2x</span>。",
        // EN: M1: Solves <span class="chem">f'(x) = 0</span> (or <span class="chem">f'(x) &lt; 0</span>) using the GDC.
        "M1：GDC を用いて <span class=\"chem\">f'(x) = 0</span>（または <span class=\"chem\">f'(x) &lt; 0</span>）を解く。",
        // EN: A1: <span class="chem">x = 0.289</span> and <span class="chem">x = 6.52</span>.
        "A1：<span class=\"chem\">x = 0.289</span> と <span class=\"chem\">x = 6.52</span>。",
        // EN: A1: <span class="chem">0.289 &lt; x &lt; 6.52</span> (accept <span class="chem">&lt;=</span>).
        "A1：<span class=\"chem\">0.289 &lt; x &lt; 6.52</span>（<span class=\"chem\">&lt;=</span> も可）。",
      ],
    },

    // ── t5-1-q046 · numeric · exam · SL · SL 5.7, 5.8 · 5 marks
    "t5-1-q046": {
      // EN: <p>Let <span class="chem">f(x) = x^3 / 6 - 2x - e^{-x}</span>. The graph of <span class="chem">f</span> has exactly one point of inflexion. Find its <span class="chem">x</span>-coordinate, correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">f(x) = x^3 / 6 - 2x - e^{-x}</span> とする。<span class=\"chem\">f</span> のグラフはただ 1 つの変曲点をもつ。その <span class=\"chem\">x</span> 座標を有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: Differentiate twice: <span class="chem">f'(x) = x^2/2 - 2 + e^{-x}</span>, so <span class="chem">f''(x) = x - e^{-x}</span>.
        "2 回微分します：<span class=\"chem\">f'(x) = x^2/2 - 2 + e^{-x}</span> なので <span class=\"chem\">f''(x) = x - e^{-x}</span>。",
        // EN: Solve <span class="chem">x - e^{-x} = 0</span> on the GDC. Then check that <span class="chem">f''</span> changes sign there.
        "GDC で <span class=\"chem\">x - e^{-x} = 0</span> を解きます。次に、そこで <span class=\"chem\">f''</span> の符号が変わることを確認します。",
      ],
      // EN: <p><span class="chem">f'(x) = x^2/2 - 2 + e^{-x}</span> and <span class="chem">f''(x) = x - e^{-x}</span>. The GDC gives <span class="chem">f''(x) = 0</span> at <span class="chem">x ≈ 0.56714</span>. Since <span class="chem">f''</span> is increasing (its derivative <span class="chem">1 + e^{-x}</span> is always positive), it changes from negative to positive there, so this is a point of inflexion: <span class="chem">x = 0.567</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">f'(x) = x^2/2 - 2 + e^{-x}</span>、<span class=\"chem\">f''(x) = x - e^{-x}</span>。GDC により <span class=\"chem\">x ≈ 0.56714</span> で <span class=\"chem\">f''(x) = 0</span> となります。<span class=\"chem\">f''</span> は増加関数（その導関数 <span class=\"chem\">1 + e^{-x}</span> は常に正）なので、そこで負から正に変わります。よってこれは変曲点です：<span class=\"chem\">x = 0.567</span>（有効数字 3 桁）。</p>",
    },

    // ── t5-1-q047 · numeric · challenge · SL · SL 5.8 · 6 marks
    "t5-1-q047": {
      // EN: <p>A workshop’s weekly profit is <span class="chem">P(x) = -0.02x^3 + 0.9x^2 + 5x - 40</span> thousand dollars, where <span class="chem">x</span> is the number of <strong>hundreds</strong> of chairs made in the week. The workshop can make at most <span class="chem">2500</span> chairs in a week. Find the number of chairs the workshop should make in a week to maximise its profit.</p>
      stem: "<p>ある工房の 1 週間の利益は <span class=\"chem\">P(x) = -0.02x^3 + 0.9x^2 + 5x - 40</span> 千ドルである。ただし <span class=\"chem\">x</span> はその週につくった椅子の数を<strong>百脚</strong>単位で表したものである。工房は 1 週間に最大 <span class=\"chem\">2500</span> 脚の椅子をつくることができる。利益を最大にするために、工房が 1 週間につくるべき椅子の数を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: two hidden details. The capacity limit gives the domain <span class="chem">0 &lt;= x &lt;= 25</span> (in hundreds), and the answer must be the number of <strong>chairs</strong>, not the value of <span class="chem">x</span>.
        "解読：隠れた点が 2 つあります。生産能力の上限から定義域は <span class=\"chem\">0 &lt;= x &lt;= 25</span>（百脚単位）となり、答えは <span class=\"chem\">x</span> の値ではなく<strong>椅子</strong>の数でなければなりません。",
        // EN: Solve <span class="chem">P'(x) = -0.06x^2 + 1.8x + 5 = 0</span> with the GDC. Is the positive root inside the domain?
        "GDC で <span class=\"chem\">P'(x) = -0.06x^2 + 1.8x + 5 = 0</span> を解きます。正の解は定義域内にありますか？",
        // EN: If <span class="chem">P'(x) &gt; 0</span> on the whole domain, then <span class="chem">P</span> is increasing and the maximum is at an endpoint.
        "定義域全体で <span class=\"chem\">P'(x) &gt; 0</span> ならば、<span class=\"chem\">P</span> は増加し、最大値は端点でとります。",
      ],
      // EN: <p><strong>Decode:</strong> the domain is <span class="chem">0 &lt;= x &lt;= 25</span>, and the answer is <span class="chem">100x</span> chairs.<br><span class="chem">P'(x) = -0.06x^2 + 1.8x + 5 = 0</span> gives <span class="chem">x ≈ -2.56</span> or <span class="chem">x ≈ 32.6</span>, both outside <span class="chem">[0, 25]</span>. Since <span class="chem">P'(0) = 5 &gt; 0</span>, <span class="chem">P'(x) &gt; 0</span> throughout the domain, so <span class="chem">P</span> is increasing and its maximum is at the endpoint <span class="chem">x = 25</span>: <span class="chem">P(25) = -312.5 + 562.5 + 125 - 40 = 335</span> thousand dollars. The workshop should make <span class="chem">25 * 100 = 2500</span> chairs (its full capacity).</p>
      solution: "<p><strong>解読：</strong>定義域は <span class=\"chem\">0 &lt;= x &lt;= 25</span> で、答えは <span class=\"chem\">100x</span> 脚です。<br><span class=\"chem\">P'(x) = -0.06x^2 + 1.8x + 5 = 0</span> から <span class=\"chem\">x ≈ -2.56</span> または <span class=\"chem\">x ≈ 32.6</span> が得られ、どちらも <span class=\"chem\">[0, 25]</span> の外です。<span class=\"chem\">P'(0) = 5 &gt; 0</span> なので定義域全体で <span class=\"chem\">P'(x) &gt; 0</span> であり、<span class=\"chem\">P</span> は増加し、最大値は端点 <span class=\"chem\">x = 25</span> でとります：<span class=\"chem\">P(25) = -312.5 + 562.5 + 125 - 40 = 335</span> 千ドル。工房は 1 週間に <span class=\"chem\">25 * 100 = 2500</span> 脚（最大の生産能力）つくるべきです。</p>",
    },

    // ── t5-1-q048 · numeric · challenge · SL · SL 5.6, 5.8 · 7 marks
    "t5-1-q048": {
      // EN: <p>A corridor <span class="chem">2.4</span> <span class="unit">m</span> wide meets a corridor <span class="chem">1.6</span> <span class="unit">m</span> wide at a right angle. A straight pole touching the outer walls and the inner corner makes an angle <span class="chem">theta</span> with the walls of the wider corridor, and its length is <span class="chem">L(theta) = 2.4 / sin theta + 1.6 / cos theta</span>, <span class="chem">0 &lt; theta &lt; pi/2</span>. Find the length of the longest pole that can be carried horizontally around the corner, correct to 3 significant figures.</p>
      stem: "<p>幅 <span class=\"chem\">2.4</span> <span class=\"unit\">m</span> の廊下と幅 <span class=\"chem\">1.6</span> <span class=\"unit\">m</span> の廊下が直角に交わっている。外側の壁と内側の角に接するまっすぐな棒は、広い方の廊下の壁と角 <span class=\"chem\">theta</span> をなし、その長さは <span class=\"chem\">L(theta) = 2.4 / sin theta + 1.6 / cos theta</span>、<span class=\"chem\">0 &lt; theta &lt; pi/2</span> である。角を水平に運んで曲がることのできる棒の長さの最大値を、有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: a pole gets round the corner only if it is shorter than <span class="chem">L(theta)</span> for <strong>every</strong> angle on the way round. So the longest pole that fits equals the <strong>minimum</strong> of <span class="chem">L(theta)</span>, not its maximum.
        "解読：棒が角を曲がれるのは、曲がる途中の<strong>すべての</strong>角度で <span class=\"chem\">L(theta)</span> より短いときだけです。よって通れる最も長い棒の長さは、<span class=\"chem\">L(theta)</span> の最大値ではなく<strong>最小値</strong>に等しくなります。",
        // EN: Graph <span class="chem">L(theta)</span> for <span class="chem">0 &lt; theta &lt; pi/2</span> (radian mode). It tends to infinity at both ends.
        "<span class=\"chem\">0 &lt; theta &lt; pi/2</span> で <span class=\"chem\">L(theta)</span> のグラフをかきます（ラジアンモード）。両端で無限大に発散します。",
        // EN: Use the GDC minimum, or solve <span class="chem">L'(theta) = -2.4 cos theta / sin^2 theta + 1.6 sin theta / cos^2 theta = 0</span>.
        "GDC の最小値機能を使うか、<span class=\"chem\">L'(theta) = -2.4 cos theta / sin^2 theta + 1.6 sin theta / cos^2 theta = 0</span> を解きます。",
      ],
      // EN: <p><strong>Decode:</strong> the tightest position of the corner limits the pole, so the longest pole that fits is the minimum value of <span class="chem">L(theta)</span>.<br><span class="chem">L'(theta) = -2.4 cos theta / sin^2 theta + 1.6 sin theta / cos^2 theta = 0 &lt;=&gt; tan^3 theta = 2.4 / 1.6 = 1.5</span>, so <span class="chem">theta ≈ 0.8528</span>. As <span class="chem">theta -&gt; 0</span> or <span class="chem">theta -&gt; pi/2</span>, <span class="chem">L -&gt; ∞</span>, so this is the minimum: <span class="chem">L(0.8528…) ≈ 5.6188</span>. The longest pole is <span class="chem">5.62</span> <span class="unit">m</span> (3 s.f.).</p>
      solution: "<p><strong>解読：</strong>角での最も窮屈な位置が棒の長さを制限するので、通れる最も長い棒の長さは <span class=\"chem\">L(theta)</span> の最小値です。<br><span class=\"chem\">L'(theta) = -2.4 cos theta / sin^2 theta + 1.6 sin theta / cos^2 theta = 0 &lt;=&gt; tan^3 theta = 2.4 / 1.6 = 1.5</span> なので <span class=\"chem\">theta ≈ 0.8528</span> です。<span class=\"chem\">theta -&gt; 0</span> または <span class=\"chem\">theta -&gt; pi/2</span> のとき <span class=\"chem\">L -&gt; ∞</span> なので、これが最小です：<span class=\"chem\">L(0.8528…) ≈ 5.6188</span>。最も長い棒は <span class=\"chem\">5.62</span> <span class=\"unit\">m</span>（有効数字 3 桁）です。</p>",
    },

    // ── t5-1-q049 · numeric · exam · SL · SL 5.8 · 6 marks
    "t5-1-q049": {
      // EN: <p>A closed cylindrical can has radius <span class="chem">r</span> <span class="unit">cm</span> and volume <span class="chem">750</span> <span class="unit">cm3</span>. The metal for the top and bottom costs <span class="chem">$0.035</span> per <span class="unit">cm2</span>, and the metal for the curved side costs <span class="chem">$0.02</span> per <span class="unit">cm2</span>. Find the minimum cost of the metal for one can, in dollars, correct to two decimal places.</p>
      stem: "<p>ふたのある円柱形の缶の半径は <span class=\"chem\">r</span> <span class=\"unit\">cm</span>、体積は <span class=\"chem\">750</span> <span class=\"unit\">cm3</span> である。上面と底面の金属は <span class=\"unit\">cm2</span> あたり <span class=\"chem\">$0.035</span>、側面の金属は <span class=\"unit\">cm2</span> あたり <span class=\"chem\">$0.02</span> かかる。缶 1 個あたりの金属の費用の最小値をドル単位で、小数第 2 位まで求めなさい (Find)。</p>",
      hints: [
        // EN: Cost <span class="chem">= 0.035 * 2 pi r^2 + 0.02 * 2 pi r h</span>. Use <span class="chem">pi r^2 h = 750</span> to remove <span class="chem">h</span>.
        "費用 <span class=\"chem\">= 0.035 * 2 pi r^2 + 0.02 * 2 pi r h</span>。<span class=\"chem\">pi r^2 h = 750</span> を使って <span class=\"chem\">h</span> を消去します。",
        // EN: You should get <span class="chem">C(r) = 0.07 pi r^2 + 30 / r</span>, <span class="chem">r &gt; 0</span>. Find its minimum on the GDC.
        "<span class=\"chem\">C(r) = 0.07 pi r^2 + 30 / r</span>、<span class=\"chem\">r &gt; 0</span> が得られるはずです。GDC でその最小値を求めます。",
      ],
      // EN: <p><span class="chem">h = 750 / (pi r^2)</span>, so <span class="chem">C(r) = 0.035(2 pi r^2) + 0.02(2 pi r)(750 / (pi r^2)) = 0.07 pi r^2 + 30 / r</span>. <span class="chem">C'(r) = 0.14 pi r - 30 / r^2 = 0</span> gives <span class="chem">r ≈ 4.0858</span>; <span class="chem">C -&gt; ∞</span> as <span class="chem">r -&gt; 0</span> and as <span class="chem">r -&gt; ∞</span>, so this is the minimum. <span class="chem">C(4.0858…) ≈ 11.0137</span>, so the minimum cost is <span class="chem">$11.01</span>.</p>
      solution: "<p><span class=\"chem\">h = 750 / (pi r^2)</span> なので <span class=\"chem\">C(r) = 0.035(2 pi r^2) + 0.02(2 pi r)(750 / (pi r^2)) = 0.07 pi r^2 + 30 / r</span>。<span class=\"chem\">C'(r) = 0.14 pi r - 30 / r^2 = 0</span> から <span class=\"chem\">r ≈ 4.0858</span> が得られます；<span class=\"chem\">r -&gt; 0</span> のときも <span class=\"chem\">r -&gt; ∞</span> のときも <span class=\"chem\">C -&gt; ∞</span> なので、これが最小です。<span class=\"chem\">C(4.0858…) ≈ 11.0137</span> なので、費用の最小値は <span class=\"chem\">$11.01</span> です。</p>",
    },

    // ── t5-1-q050 · numeric · exam · SL · SL 5.4, 5.6 · 5 marks
    "t5-1-q050": {
      // EN: <p>Consider the curve <span class="chem">y = 2 sin x + x</span>. The normal to the curve at the point where <span class="chem">x = 1</span> crosses the <span class="chem">x</span>-axis at <span class="chem">Q</span>. Find the <span class="chem">x</span>-coordinate of <span class="chem">Q</span>, correct to 3 significant figures.</p>
      stem: "<p>曲線 <span class=\"chem\">y = 2 sin x + x</span> を考える。<span class=\"chem\">x = 1</span> となる点におけるこの曲線の法線は <span class=\"chem\">x</span> 軸と <span class=\"chem\">Q</span> で交わる。<span class=\"chem\">Q</span> の <span class=\"chem\">x</span> 座標を有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: Find the point (<span class="chem">y = 2 sin 1 + 1</span>) and the tangent gradient <span class="chem">m_T = 2 cos 1 + 1</span> (radians). Store both on your GDC.
        "点（<span class=\"chem\">y = 2 sin 1 + 1</span>）と接線の傾き <span class=\"chem\">m_T = 2 cos 1 + 1</span>（ラジアン）を求めます。両方を GDC に記憶させましょう。",
        // EN: The normal is <span class="chem">y - y_1 = -(1/m_T)(x - 1)</span>. Put <span class="chem">y = 0</span> and solve for <span class="chem">x</span>.
        "法線は <span class=\"chem\">y - y_1 = -(1/m_T)(x - 1)</span> です。<span class=\"chem\">y = 0</span> を代入して <span class=\"chem\">x</span> について解きます。",
      ],
      // EN: <p>At <span class="chem">x = 1</span>: <span class="chem">y_1 = 2 sin 1 + 1 ≈ 2.6829</span> and <span class="chem">m_T = 2 cos 1 + 1 ≈ 2.0806</span>. The normal is <span class="chem">y - y_1 = -(1/m_T)(x - 1)</span>. Setting <span class="chem">y = 0</span>: <span class="chem">x = 1 + m_T y_1 ≈ 1 + 2.0806 * 2.6829 ≈ 6.582</span>. So <span class="chem">Q</span> has <span class="chem">x</span>-coordinate <span class="chem">6.58</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">x = 1</span> のとき：<span class=\"chem\">y_1 = 2 sin 1 + 1 ≈ 2.6829</span>、<span class=\"chem\">m_T = 2 cos 1 + 1 ≈ 2.0806</span>。法線は <span class=\"chem\">y - y_1 = -(1/m_T)(x - 1)</span> です。<span class=\"chem\">y = 0</span> とおくと <span class=\"chem\">x = 1 + m_T y_1 ≈ 1 + 2.0806 * 2.6829 ≈ 6.582</span>。よって <span class=\"chem\">Q</span> の <span class=\"chem\">x</span> 座標は <span class=\"chem\">6.58</span>（有効数字 3 桁）です。</p>",
    },

    // ── t5-1-q051 · numeric · challenge · SL · SL 5.4 · 6 marks
    "t5-1-q051": {
      // EN: <p>A straight line through the origin is a tangent to the curve <span class="chem">y = e^x + 2</span>. Find the gradient of this line, correct to 3 significant figures.</p>
      stem: "<p>原点を通る直線が曲線 <span class=\"chem\">y = e^x + 2</span> の接線である。この直線の傾きを有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: the point of contact is unknown. Call it <span class="chem">(a, e^a + 2)</span>; the tangent there has gradient <span class="chem">e^a</span>, and it must pass through <span class="chem">(0, 0)</span>. Find <span class="chem">a</span> first, then the gradient.
        "解読：接点はわかっていません。それを <span class=\"chem\">(a, e^a + 2)</span> とおくと、そこでの接線の傾きは <span class=\"chem\">e^a</span> で、この接線は <span class=\"chem\">(0, 0)</span> を通らなければなりません。まず <span class=\"chem\">a</span> を求め、次に傾きを求めます。",
        // EN: Tangent: <span class="chem">y - (e^a + 2) = e^a(x - a)</span>. Substituting <span class="chem">(0, 0)</span> gives <span class="chem">e^a(a - 1) = 2</span>.
        "接線：<span class=\"chem\">y - (e^a + 2) = e^a(x - a)</span>。<span class=\"chem\">(0, 0)</span> を代入すると <span class=\"chem\">e^a(a - 1) = 2</span> となります。",
        // EN: Solve <span class="chem">e^a(a - 1) = 2</span> on the GDC; the question asks for the gradient <span class="chem">e^a</span>, not <span class="chem">a</span>.
        "GDC で <span class=\"chem\">e^a(a - 1) = 2</span> を解きます；問われているのは <span class=\"chem\">a</span> ではなく傾き <span class=\"chem\">e^a</span> です。",
      ],
      // EN: <p><strong>Decode:</strong> introduce the unknown point of contact <span class="chem">(a, e^a + 2)</span> and use the condition that the tangent passes through the origin.<br>The tangent is <span class="chem">y - (e^a + 2) = e^a(x - a)</span>. Through <span class="chem">(0, 0)</span>: <span class="chem">-(e^a + 2) = -a e^a =&gt; e^a(a - 1) = 2</span>. The GDC gives <span class="chem">a ≈ 1.46306</span> (the only solution, as <span class="chem">e^a(a - 1) &lt; 0</span> for <span class="chem">a &lt; 1</span> and is increasing for <span class="chem">a &gt; 1</span>). The gradient is <span class="chem">e^a ≈ 4.3191</span>, i.e. <span class="chem">4.32</span> (3 s.f.).</p>
      solution: "<p><strong>解読：</strong>未知の接点 <span class=\"chem\">(a, e^a + 2)</span> を導入し、接線が原点を通るという条件を使います。<br>接線は <span class=\"chem\">y - (e^a + 2) = e^a(x - a)</span> です。<span class=\"chem\">(0, 0)</span> を通るので：<span class=\"chem\">-(e^a + 2) = -a e^a =&gt; e^a(a - 1) = 2</span>。GDC により <span class=\"chem\">a ≈ 1.46306</span> が得られます（<span class=\"chem\">a &lt; 1</span> では <span class=\"chem\">e^a(a - 1) &lt; 0</span> であり、<span class=\"chem\">a &gt; 1</span> では増加するので、これが唯一の解です）。傾きは <span class=\"chem\">e^a ≈ 4.3191</span>、すなわち <span class=\"chem\">4.32</span>（有効数字 3 桁）です。</p>",
    },

    // ── t5-1-q052 · short · exam · SL · SL 5.6, 5.7, 5.8, 5.9 · 14 marks
    "t5-1-q052": {
      // EN: <p>An object on a spring oscillates so that its displacement from its rest position is <span class="chem">d(t) = 5e^{-0.3t} sin t</span> <span class="unit">cm</span>, where <span class="chem">t</span> is the time in seconds, <span class="chem">0 &lt;= t &lt;= 8</span>.<br>(a) Show that <span class="chem">d'(t) = e^{-0.3t}(5 cos t - 1.5 sin t)</span>. <strong>[2 marks]</strong><br>(b) Show that <span class="chem">d'(t) = 0</span> when <span class="chem">tan t = 10/3</span>. <strong>[2 marks]</strong><br>(c) Find the first time <span class="chem">t &gt; 0</span> at which the object is instantaneously at rest, and its displacement at that time. <strong>[3 marks]</strong><br>(d) Hence write down the number of times in <span class="chem">0 &lt; t &lt; 8</span> at which the object is instantaneously at rest. <strong>[1 mark]</strong><br>(e) For <span class="chem">0 &lt; t &lt; 4</span>, find the time at which the displacement is decreasing most rapidly, and the rate of decrease at that time. <strong>[4 marks]</strong><br>(f) Find the acceleration of the object when <span class="chem">t = 3</span>. <strong>[2 marks]</strong></p>
      stem: "<p>ばねにつけた物体が振動し、静止位置からの変位は <span class=\"chem\">d(t) = 5e^{-0.3t} sin t</span> <span class=\"unit\">cm</span> である。ただし <span class=\"chem\">t</span> は時間（秒）で、<span class=\"chem\">0 &lt;= t &lt;= 8</span> である。<br>(a) <span class=\"chem\">d'(t) = e^{-0.3t}(5 cos t - 1.5 sin t)</span> であることを示しなさい (Show that)。<strong>[2 marks]</strong><br>(b) <span class=\"chem\">tan t = 10/3</span> のとき <span class=\"chem\">d'(t) = 0</span> であることを示しなさい (Show that)。<strong>[2 marks]</strong><br>(c) 物体が瞬間的に静止する最初の時刻 <span class=\"chem\">t &gt; 0</span> と、そのときの変位を求めなさい (Find)。<strong>[3 marks]</strong><br>(d) これを用いて (Hence)、<span class=\"chem\">0 &lt; t &lt; 8</span> において物体が瞬間的に静止する回数を書きなさい (write down)。<strong>[1 mark]</strong><br>(e) <span class=\"chem\">0 &lt; t &lt; 4</span> において、変位が最も速く減少する時刻と、そのときの減少の割合を求めなさい (find)。<strong>[4 marks]</strong><br>(f) <span class=\"chem\">t = 3</span> のときの物体の加速度を求めなさい (Find)。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: “instantaneously at rest” means velocity <span class="chem">d'(t) = 0</span>; “decreasing most rapidly” means the most negative value of <span class="chem">d'(t)</span>; acceleration is <span class="chem">d''(t)</span>.
        "解読：「瞬間的に静止」とは速度 <span class=\"chem\">d'(t) = 0</span> のこと；「最も速く減少」とは <span class=\"chem\">d'(t)</span> の最も負の値のこと；加速度は <span class=\"chem\">d''(t)</span> です。",
        // EN: For (d), <span class="chem">tan t</span> repeats every <span class="chem">pi</span>, so the solutions of <span class="chem">tan t = 10/3</span> are <span class="chem">1.279 + k pi</span>. How many lie in <span class="chem">(0, 8)</span>?
        "(d) では、<span class=\"chem\">tan t</span> は周期 <span class=\"chem\">pi</span> で繰り返すので、<span class=\"chem\">tan t = 10/3</span> の解は <span class=\"chem\">1.279 + k pi</span> です。<span class=\"chem\">(0, 8)</span> にはいくつありますか？",
        // EN: For (e), graph <span class="chem">y = d'(t)</span> for <span class="chem">0 &lt; t &lt; 4</span> and find its minimum. Compare with the values near the ends of the interval.
        "(e) では、<span class=\"chem\">0 &lt; t &lt; 4</span> で <span class=\"chem\">y = d'(t)</span> のグラフをかき、その最小値を求めます。区間の両端付近の値と比べましょう。",
      ],
      // EN: <p>(a) Product rule: <span class="chem">d'(t) = 5(-0.3e^{-0.3t}) sin t + 5e^{-0.3t} cos t = e^{-0.3t}(5 cos t - 1.5 sin t)</span>.<br>(b) <span class="chem">e^{-0.3t} != 0</span>, so <span class="chem">5 cos t = 1.5 sin t =&gt; tan t = 5 / 1.5 = 10/3</span>.<br>(c) <span class="chem">t = arctan(10/3) ≈ 1.2793</span> <span class="unit">s</span>, and <span class="chem">d(1.2793…) = 5e^{-0.3838…} sin(1.2793…) ≈ 3.26</span> <span class="unit">cm</span>.<br>(d) The solutions are <span class="chem">1.279 + k pi</span>: <span class="chem">1.28, 4.42, 7.56</span> (the next, <span class="chem">10.7</span>, is too large). So <span class="chem">3</span> times.<br>(e) The displacement decreases most rapidly where <span class="chem">d'(t)</span> is most negative. The GDC gives the minimum of <span class="chem">d'</span> on <span class="chem">0 &lt; t &lt; 4</span> at <span class="chem">t ≈ 2.5587</span>, with <span class="chem">d'(2.5587…) ≈ -2.3206</span>. Near the ends, <span class="chem">d'(0) = 5</span> and <span class="chem">d'(4) ≈ -0.642</span>, which are larger. So at <span class="chem">t ≈ 2.56</span> <span class="unit">s</span> the displacement is decreasing at <span class="chem">2.32</span> <span class="unit">cm s-1</span>.<br>(f) <span class="chem">d''(t) = -0.3e^{-0.3t}(5 cos t - 1.5 sin t) + e^{-0.3t}(-5 sin t - 1.5 cos t) = e^{-0.3t}(-4.55 sin t - 3 cos t)</span>, so <span class="chem">d''(3) = e^{-0.9}(-4.55 sin 3 - 3 cos 3) ≈ 0.946</span> <span class="unit">cm s-2</span> (or use the GDC directly).</p>
      solution: "<p>(a) 積の微分法：<span class=\"chem\">d'(t) = 5(-0.3e^{-0.3t}) sin t + 5e^{-0.3t} cos t = e^{-0.3t}(5 cos t - 1.5 sin t)</span>。<br>(b) <span class=\"chem\">e^{-0.3t} != 0</span> なので <span class=\"chem\">5 cos t = 1.5 sin t =&gt; tan t = 5 / 1.5 = 10/3</span>。<br>(c) <span class=\"chem\">t = arctan(10/3) ≈ 1.2793</span> <span class=\"unit\">s</span>、そして <span class=\"chem\">d(1.2793…) = 5e^{-0.3838…} sin(1.2793…) ≈ 3.26</span> <span class=\"unit\">cm</span>。<br>(d) 解は <span class=\"chem\">1.279 + k pi</span>：<span class=\"chem\">1.28, 4.42, 7.56</span>（次の <span class=\"chem\">10.7</span> は大きすぎます）。よって <span class=\"chem\">3</span> 回です。<br>(e) 変位が最も速く減少するのは <span class=\"chem\">d'(t)</span> が最も負になるところです。GDC により、<span class=\"chem\">0 &lt; t &lt; 4</span> における <span class=\"chem\">d'</span> の最小値は <span class=\"chem\">t ≈ 2.5587</span> で、<span class=\"chem\">d'(2.5587…) ≈ -2.3206</span> です。両端付近では <span class=\"chem\">d'(0) = 5</span>、<span class=\"chem\">d'(4) ≈ -0.642</span> で、これらはより大きい値です。よって <span class=\"chem\">t ≈ 2.56</span> <span class=\"unit\">s</span> のとき、変位は <span class=\"chem\">2.32</span> <span class=\"unit\">cm s-1</span> の割合で減少しています。<br>(f) <span class=\"chem\">d''(t) = -0.3e^{-0.3t}(5 cos t - 1.5 sin t) + e^{-0.3t}(-5 sin t - 1.5 cos t) = e^{-0.3t}(-4.55 sin t - 3 cos t)</span> なので <span class=\"chem\">d''(3) = e^{-0.9}(-4.55 sin 3 - 3 cos 3) ≈ 0.946</span> <span class=\"unit\">cm s-2</span>（または GDC を直接使います）。</p>",
      // EN: <p>(a), (b) See mark scheme.<br>(c) <span class="chem">t ≈ 1.28</span> <span class="unit">s</span>, <span class="chem">d ≈ 3.26</span> <span class="unit">cm</span>.<br>(d) <span class="chem">3</span> times.<br>(e) <span class="chem">t ≈ 2.56</span> <span class="unit">s</span>; decreasing at <span class="chem">2.32</span> <span class="unit">cm s-1</span>.<br>(f) <span class="chem">d''(3) ≈ 0.946</span> <span class="unit">cm s-2</span>.</p>
      answer: "<p>(a)、(b) 採点基準を参照。<br>(c) <span class=\"chem\">t ≈ 1.28</span> <span class=\"unit\">s</span>、<span class=\"chem\">d ≈ 3.26</span> <span class=\"unit\">cm</span>。<br>(d) <span class=\"chem\">3</span> 回。<br>(e) <span class=\"chem\">t ≈ 2.56</span> <span class=\"unit\">s</span>；<span class=\"chem\">2.32</span> <span class=\"unit\">cm s-1</span> の割合で減少。<br>(f) <span class=\"chem\">d''(3) ≈ 0.946</span> <span class=\"unit\">cm s-2</span>。</p>",
      markscheme: [
        // EN: M1: Uses the product rule, with the chain rule on <span class="chem">e^{-0.3t}</span>.
        "M1：積の微分法を使い、<span class=\"chem\">e^{-0.3t}</span> に合成関数の微分法を用いる。",
        // EN: A1: <span class="chem">d'(t) = 5(-0.3e^{-0.3t}) sin t + 5e^{-0.3t} cos t = -1.5e^{-0.3t} sin t + 5e^{-0.3t} cos t</span>, which factorises to <span class="chem">e^{-0.3t}(5 cos t - 1.5 sin t)</span> (AG).
        "A1：<span class=\"chem\">d'(t) = 5(-0.3e^{-0.3t}) sin t + 5e^{-0.3t} cos t = -1.5e^{-0.3t} sin t + 5e^{-0.3t} cos t</span> であり、因数分解して <span class=\"chem\">e^{-0.3t}(5 cos t - 1.5 sin t)</span> となる (AG)。",
        // EN: M1: <span class="chem">e^{-0.3t} &gt; 0</span>, so <span class="chem">d'(t) = 0 &lt;=&gt; 5 cos t - 1.5 sin t = 0</span>.
        "M1：<span class=\"chem\">e^{-0.3t} &gt; 0</span> なので <span class=\"chem\">d'(t) = 0 &lt;=&gt; 5 cos t - 1.5 sin t = 0</span>。",
        // EN: A1: <span class="chem">5 cos t = 1.5 sin t =&gt; sin t / cos t = 5 / 1.5</span>, so <span class="chem">tan t = 10/3</span> (AG).
        "A1：<span class=\"chem\">5 cos t = 1.5 sin t =&gt; sin t / cos t = 5 / 1.5</span> なので <span class=\"chem\">tan t = 10/3</span> (AG)。",
        // EN: M1: <span class="chem">t = arctan(10/3)</span> (or solves <span class="chem">d'(t) = 0</span> on the GDC).
        "M1：<span class=\"chem\">t = arctan(10/3)</span>（または GDC で <span class=\"chem\">d'(t) = 0</span> を解く）。",
        // EN: A1: <span class="chem">t = 1.28</span> <span class="unit">s</span> (<span class="chem">1.27933…</span>).
        "A1：<span class=\"chem\">t = 1.28</span> <span class=\"unit\">s</span>（<span class=\"chem\">1.27933…</span>）。",
        // EN: A1: <span class="chem">d = 3.26</span> <span class="unit">cm</span>.
        "A1：<span class=\"chem\">d = 3.26</span> <span class=\"unit\">cm</span>。",
        // EN: A1: <span class="chem">3</span> (at <span class="chem">t ≈ 1.28, 4.42, 7.56</span>, which are <span class="chem">pi</span> apart).
        "A1：<span class=\"chem\">3</span>（<span class=\"chem\">t ≈ 1.28, 4.42, 7.56</span> で、<span class=\"chem\">pi</span> ずつ離れている）。",
        // EN: M1: Recognises that “decreasing most rapidly” means the minimum of <span class="chem">d'(t)</span> (where <span class="chem">d''(t) = 0</span>).
        "M1：「最も速く減少」が <span class=\"chem\">d'(t)</span> の最小値（<span class=\"chem\">d''(t) = 0</span> となるところ）であると認識する。",
        // EN: A1: <span class="chem">t = 2.56</span> <span class="unit">s</span> (<span class="chem">2.55867…</span>).
        "A1：<span class=\"chem\">t = 2.56</span> <span class=\"unit\">s</span>（<span class=\"chem\">2.55867…</span>）。",
        // EN: R1: Checks the ends of the interval: <span class="chem">d'(0) = 5</span>, <span class="chem">d'(4) ≈ -0.642</span>, so the turning point gives the most negative <span class="chem">d'</span>.
        "R1：区間の両端を確認する：<span class=\"chem\">d'(0) = 5</span>、<span class=\"chem\">d'(4) ≈ -0.642</span> なので、極値点で <span class=\"chem\">d'</span> が最も負になる。",
        // EN: A1: Rate of decrease <span class="chem">2.32</span> <span class="unit">cm s-1</span> (<span class="chem">d'(2.5587…) ≈ -2.32</span>).
        "A1：減少の割合 <span class=\"chem\">2.32</span> <span class=\"unit\">cm s-1</span>（<span class=\"chem\">d'(2.5587…) ≈ -2.32</span>）。",
        // EN: M1: Acceleration is <span class="chem">d''(t)</span>; evaluates it at <span class="chem">t = 3</span> (GDC or by differentiating <span class="chem">d'</span>).
        "M1：加速度は <span class=\"chem\">d''(t)</span>；<span class=\"chem\">t = 3</span> での値を求める（GDC または <span class=\"chem\">d'</span> を微分）。",
        // EN: A1: <span class="chem">0.946</span> <span class="unit">cm s-2</span>.
        "A1：<span class=\"chem\">0.946</span> <span class=\"unit\">cm s-2</span>。",
      ],
    },

    // ── t5-1-q053 · numeric · challenge · SL · SL 5.8 · 7 marks
    "t5-1-q053": {
      // EN: <p>A party hat in the shape of a right circular cone (with no base) is made from a circular sheet of paper of radius <span class="chem">12</span> <span class="unit">cm</span>. A sector is cut out of the sheet and thrown away, and the two straight edges of the remaining piece are joined. Find the angle, in radians, of the sector that must be cut out so that the cone has the greatest possible volume. Give your answer correct to 3 significant figures.</p>
      stem: "<p>底のない直円錐の形をしたパーティー帽子を、半径 <span class=\"chem\">12</span> <span class=\"unit\">cm</span> の円形の紙からつくる。紙から扇形を切り取って捨て、残りの部分の 2 本の直線の縁を貼り合わせる。円錐の体積が最大となるように切り取るべき扇形の中心角をラジアンで求めなさい (Find)。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: three things are linked. The slant height of the cone is the sheet radius, <span class="chem">12</span>, so <span class="chem">r^2 + h^2 = 144</span>. The arc of the piece that is kept becomes the base circumference. And the question asks for the angle of the piece thrown away, not <span class="chem">r</span> or the volume.
        "解読：3 つのことが結びついています。円錐の母線の長さは紙の半径 <span class=\"chem\">12</span> なので <span class=\"chem\">r^2 + h^2 = 144</span> です。残した部分の弧が底面の円周になります。そして問われているのは <span class=\"chem\">r</span> や体積ではなく、捨てる部分の角です。",
        // EN: Write the volume in one variable: <span class="chem">V(r) = (1/3) pi r^2 sqrt(144 - r^2)</span>, <span class="chem">0 &lt; r &lt; 12</span>. Find the <span class="chem">r</span> that maximises it on the GDC.
        "体積を 1 つの変数で表します：<span class=\"chem\">V(r) = (1/3) pi r^2 sqrt(144 - r^2)</span>、<span class=\"chem\">0 &lt; r &lt; 12</span>。GDC でそれを最大にする <span class=\"chem\">r</span> を求めます。",
        // EN: If the kept sector has angle <span class="chem">alpha</span>, its arc is <span class="chem">12 alpha = 2 pi r</span>. The removed angle is <span class="chem">2 pi - alpha</span>.
        "残した扇形の中心角を <span class=\"chem\">alpha</span> とすると、その弧は <span class=\"chem\">12 alpha = 2 pi r</span> です。切り取る角は <span class=\"chem\">2 pi - alpha</span> です。",
      ],
      // EN: <p><strong>Decode:</strong> the slant height is <span class="chem">12</span>, the kept arc becomes the base circumference, and the required quantity is the removed angle.<br><span class="chem">V(r) = (1/3) pi r^2 h</span> with <span class="chem">h = sqrt(144 - r^2)</span>, so <span class="chem">V(r) = (1/3) pi r^2 sqrt(144 - r^2)</span>, <span class="chem">0 &lt; r &lt; 12</span>. <span class="chem">V -&gt; 0</span> at both ends, and the GDC maximum is at <span class="chem">r ≈ 9.7980</span> (exactly <span class="chem">4 sqrt(6)</span>).<br>Kept angle: <span class="chem">12 alpha = 2 pi r =&gt; alpha = 2 pi(9.7980…) / 12 ≈ 5.1302</span>. Removed angle: <span class="chem">2 pi - 5.1302 ≈ 1.15</span> radians (3 s.f.).</p>
      solution: "<p><strong>解読：</strong>母線の長さは <span class=\"chem\">12</span>、残した弧が底面の円周となり、求める量は切り取る角です。<br><span class=\"chem\">h = sqrt(144 - r^2)</span> として <span class=\"chem\">V(r) = (1/3) pi r^2 h</span> なので、<span class=\"chem\">V(r) = (1/3) pi r^2 sqrt(144 - r^2)</span>、<span class=\"chem\">0 &lt; r &lt; 12</span>。両端で <span class=\"chem\">V -&gt; 0</span> であり、GDC による最大点は <span class=\"chem\">r ≈ 9.7980</span>（正確には <span class=\"chem\">4 sqrt(6)</span>）です。<br>残す角：<span class=\"chem\">12 alpha = 2 pi r =&gt; alpha = 2 pi(9.7980…) / 12 ≈ 5.1302</span>。切り取る角：<span class=\"chem\">2 pi - 5.1302 ≈ 1.15</span> ラジアン（有効数字 3 桁）。</p>",
    },

    // ── t5-1-q054 · numeric · foundation · SL · SL 5.1 · 2 marks
    "t5-1-q054": {
      // EN: <p>The gradient of the curve <span class="chem">y = 2^x</span> at the point <span class="chem">(0, 1)</span> is the limit of <span class="chem">(2^h - 1) / h</span> as <span class="chem">h -&gt; 0</span>. Use your GDC to evaluate <span class="chem">(2^h - 1) / h</span> for <span class="chem">h = 0.1</span>, <span class="chem">0.01</span> and <span class="chem">0.001</span>, and hence estimate this gradient correct to 3 significant figures.</p>
      stem: "<p>曲線 <span class=\"chem\">y = 2^x</span> の点 <span class=\"chem\">(0, 1)</span> における傾きは、<span class=\"chem\">h -&gt; 0</span> のときの <span class=\"chem\">(2^h - 1) / h</span> の極限である。GDC を使って <span class=\"chem\">h = 0.1</span>、<span class=\"chem\">0.01</span>、<span class=\"chem\">0.001</span> に対する <span class=\"chem\">(2^h - 1) / h</span> の値を計算し、これを用いて (hence) この傾きを有効数字 3 桁で推定しなさい (estimate)。</p>",
      hints: [
        // EN: <span class="chem">(2^h - 1) / h</span> is the gradient of the chord from <span class="chem">(0, 1)</span> to <span class="chem">(h, 2^h)</span>.
        "<span class=\"chem\">(2^h - 1) / h</span> は <span class=\"chem\">(0, 1)</span> から <span class=\"chem\">(h, 2^h)</span> への弦の傾きです。",
        // EN: Make a table of values on the GDC. The first three significant figures stop changing once <span class="chem">h</span> is small enough.
        "GDC で数表をつくりましょう。<span class=\"chem\">h</span> が十分小さくなると、上から 3 桁の有効数字は変わらなくなります。",
      ],
      // EN: <p>The values are <span class="chem">0.71773</span> (<span class="chem">h = 0.1</span>), <span class="chem">0.69556</span> (<span class="chem">h = 0.01</span>) and <span class="chem">0.69339</span> (<span class="chem">h = 0.001</span>). They are approaching about <span class="chem">0.693</span>, so the gradient at <span class="chem">(0, 1)</span> is approximately <span class="chem">0.693</span>. (The exact value is <span class="chem">ln 2</span>.)</p>
      solution: "<p>値は <span class=\"chem\">0.71773</span>（<span class=\"chem\">h = 0.1</span>）、<span class=\"chem\">0.69556</span>（<span class=\"chem\">h = 0.01</span>）、<span class=\"chem\">0.69339</span>（<span class=\"chem\">h = 0.001</span>）です。これらは約 <span class=\"chem\">0.693</span> に近づいているので、<span class=\"chem\">(0, 1)</span> における傾きはおよそ <span class=\"chem\">0.693</span> です。（正確な値は <span class=\"chem\">ln 2</span> です。）</p>",
    },

    // ── t5-1-q055 · numeric · exam · SL · SL 5.4, 5.6 · 4 marks
    "t5-1-q055": {
      // EN: <p>Find the acute angle between the tangent to the curve <span class="chem">y = x e^{-x/3}</span> at the point where <span class="chem">x = 1</span> and the <span class="chem">x</span>-axis. Give your answer in degrees, correct to 3 significant figures.</p>
      stem: "<p>曲線 <span class=\"chem\">y = x e^{-x/3}</span> の <span class=\"chem\">x = 1</span> となる点における接線と <span class=\"chem\">x</span> 軸とのなす鋭角を求めなさい (Find)。度数法で、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: If a line has gradient <span class="chem">m</span>, the angle <span class="chem">theta</span> it makes with the positive <span class="chem">x</span>-axis satisfies <span class="chem">tan theta = m</span>.
        "直線の傾きが <span class=\"chem\">m</span> のとき、それが <span class=\"chem\">x</span> 軸の正の向きとなす角 <span class=\"chem\">theta</span> は <span class=\"chem\">tan theta = m</span> を満たします。",
        // EN: Find <span class="chem">m = dy/dx</span> at <span class="chem">x = 1</span> (product rule or GDC), then <span class="chem">theta = arctan(m)</span> in degree mode.
        "<span class=\"chem\">x = 1</span> における <span class=\"chem\">m = dy/dx</span> を求め（積の微分法または GDC）、度数モードで <span class=\"chem\">theta = arctan(m)</span> を計算します。",
      ],
      // EN: <p><span class="chem">dy/dx = e^{-x/3} - (x/3)e^{-x/3} = e^{-x/3}(1 - x/3)</span>, so at <span class="chem">x = 1</span>, <span class="chem">m = (2/3)e^{-1/3} ≈ 0.47769</span>. The angle with the <span class="chem">x</span>-axis is <span class="chem">arctan(0.47769…) ≈ 25.5°</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">dy/dx = e^{-x/3} - (x/3)e^{-x/3} = e^{-x/3}(1 - x/3)</span> なので、<span class=\"chem\">x = 1</span> のとき <span class=\"chem\">m = (2/3)e^{-1/3} ≈ 0.47769</span> です。<span class=\"chem\">x</span> 軸とのなす角は <span class=\"chem\">arctan(0.47769…) ≈ 25.5°</span>（有効数字 3 桁）です。</p>",
    },

    // ── t5-1-q056 · numeric · challenge · SL · SL 5.1, 5.8, 5.9 · 6 marks
    "t5-1-q056": {
      // EN: <p>A cyclist’s distance from the start of a training run, <span class="chem">t</span> seconds after the run begins, is <span class="chem">s(t) = 2t + 0.5t^2 - 0.03t^3 + sin t</span> metres, for <span class="chem">0 &lt;= t &lt;= 10</span>. Find the greatest speed of the cyclist during this time, correct to 3 significant figures.</p>
      stem: "<p>自転車選手のトレーニング走行の出発点からの距離は、走行開始から <span class=\"chem\">t</span> 秒後に <span class=\"chem\">s(t) = 2t + 0.5t^2 - 0.03t^3 + sin t</span> メートルである（<span class=\"chem\">0 &lt;= t &lt;= 10</span>）。この時間内の自転車選手の速さの最大値を有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: speed is the rate of change of distance, <span class="chem">v(t) = s'(t)</span>. You need the maximum of <span class="chem">v</span> (not of <span class="chem">s</span>) on the closed interval <span class="chem">[0, 10]</span>.
        "解読：速さは距離の変化率 <span class=\"chem\">v(t) = s'(t)</span> です。閉区間 <span class=\"chem\">[0, 10]</span> における（<span class=\"chem\">s</span> ではなく）<span class=\"chem\">v</span> の最大値が必要です。",
        // EN: <span class="chem">v(t) = 2 + t - 0.09t^2 + cos t</span>. Graph it on the GDC (radian mode) for <span class="chem">0 &lt;= t &lt;= 10</span>.
        "<span class=\"chem\">v(t) = 2 + t - 0.09t^2 + cos t</span>。GDC（ラジアンモード）で <span class=\"chem\">0 &lt;= t &lt;= 10</span> におけるそのグラフをかきます。",
        // EN: The graph has two local maxima. Compare both with <span class="chem">v(0)</span> and <span class="chem">v(10)</span> before choosing.
        "グラフには極大値が 2 つあります。答えを選ぶ前に、両方を <span class=\"chem\">v(0)</span>、<span class=\"chem\">v(10)</span> と比べましょう。",
      ],
      // EN: <p><strong>Decode:</strong> maximise the speed <span class="chem">v(t) = s'(t)</span> on <span class="chem">[0, 10]</span>, comparing all local maxima with the endpoint values.<br><span class="chem">v(t) = 2 + t - 0.09t^2 + cos t</span> (positive throughout, so speed <span class="chem">= v</span>). Its local maxima are <span class="chem">v(0.971…) ≈ 3.45</span> and <span class="chem">v(6.172…) ≈ 5.737</span>; the endpoints give <span class="chem">v(0) = 3</span> and <span class="chem">v(10) ≈ 2.16</span>. The greatest speed is <span class="chem">5.74</span> <span class="unit">m s-1</span> (3 s.f.), at <span class="chem">t ≈ 6.17</span> <span class="unit">s</span>.</p>
      solution: "<p><strong>解読：</strong><span class=\"chem\">[0, 10]</span> で速さ <span class=\"chem\">v(t) = s'(t)</span> を最大化し、すべての極大値を端点での値と比べます。<br><span class=\"chem\">v(t) = 2 + t - 0.09t^2 + cos t</span>（常に正なので、速さ <span class=\"chem\">= v</span>）。その極大値は <span class=\"chem\">v(0.971…) ≈ 3.45</span> と <span class=\"chem\">v(6.172…) ≈ 5.737</span>；端点では <span class=\"chem\">v(0) = 3</span>、<span class=\"chem\">v(10) ≈ 2.16</span> です。速さの最大値は <span class=\"chem\">5.74</span> <span class=\"unit\">m s-1</span>（有効数字 3 桁）で、<span class=\"chem\">t ≈ 6.17</span> <span class=\"unit\">s</span> のときです。</p>",
    },

    // ── t5-1-q057 · numeric · challenge · SL · SL 5.7, 5.8 · 5 marks
    "t5-1-q057": {
      // EN: <p>The number of fish in a newly stocked lake <span class="chem">t</span> days after stocking is modelled by <span class="chem">P(t) = 800 / (1 + 15e^{-0.4t})</span>, <span class="chem">t &gt;= 0</span>. Find the time at which the fish population is increasing most rapidly, correct to 3 significant figures.</p>
      stem: "<p>新たに魚を放流した湖の、放流から <span class=\"chem\">t</span> 日後の魚の数は <span class=\"chem\">P(t) = 800 / (1 + 15e^{-0.4t})</span>、<span class=\"chem\">t &gt;= 0</span> でモデル化される。魚の数が最も速く増加する時刻を有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: “increasing most rapidly” means the rate <span class="chem">P'(t)</span> is at its maximum. That happens where <span class="chem">P''(t) = 0</span> and changes sign: the point of inflexion of the graph of <span class="chem">P</span>.
        "解読：「最も速く増加」とは、変化率 <span class=\"chem\">P'(t)</span> が最大になることです。それは <span class=\"chem\">P''(t) = 0</span> となり符号が変わるところ、つまり <span class=\"chem\">P</span> のグラフの変曲点で起こります。",
        // EN: Graph <span class="chem">y = P'(t)</span> on the GDC (as the derivative of <span class="chem">P</span>) for <span class="chem">0 &lt;= t &lt;= 20</span> and find its maximum.
        "GDC で <span class=\"chem\">0 &lt;= t &lt;= 20</span> における <span class=\"chem\">y = P'(t)</span> のグラフを（<span class=\"chem\">P</span> の導関数として）かき、その最大値を求めます。",
        // EN: Check the endpoint: <span class="chem">P'(0) = 18.75</span>, much less than the turning value.
        "端点を確認します：<span class=\"chem\">P'(0) = 18.75</span> で、極値よりずっと小さい値です。",
      ],
      // EN: <p><strong>Decode:</strong> the fastest increase is the maximum of <span class="chem">P'(t)</span>, i.e. the inflexion point of the S-shaped graph of <span class="chem">P</span>.<br>On the GDC, <span class="chem">P'(t)</span> has its maximum at <span class="chem">t ≈ 6.770</span>, where <span class="chem">P'(t) = 80</span> fish per day (exactly <span class="chem">t = ln 15 / 0.4</span>, where <span class="chem">P = 400</span>). <span class="chem">P''</span> changes from positive to negative there, and at the endpoint <span class="chem">P'(0) = 18.75 &lt; 80</span>. So the population increases most rapidly at <span class="chem">t ≈ 6.77</span> days (3 s.f.).</p>
      solution: "<p><strong>解読：</strong>最も速い増加は <span class=\"chem\">P'(t)</span> の最大値、すなわち <span class=\"chem\">P</span> の S 字形のグラフの変曲点です。<br>GDC により、<span class=\"chem\">P'(t)</span> は <span class=\"chem\">t ≈ 6.770</span> で最大となり、そのとき <span class=\"chem\">P'(t) = 80</span> 匹/日です（正確には <span class=\"chem\">t = ln 15 / 0.4</span> で、このとき <span class=\"chem\">P = 400</span>）。そこで <span class=\"chem\">P''</span> は正から負に変わり、端点では <span class=\"chem\">P'(0) = 18.75 &lt; 80</span> です。よって魚の数が最も速く増加するのは <span class=\"chem\">t ≈ 6.77</span> 日のとき（有効数字 3 桁）です。</p>",
      // EN: days
      unit: "日",
    },

    // ── t5-1-q058 · numeric · exam · SL · SL 5.2, 5.8 · 4 marks
    "t5-1-q058": {
      // EN: <p>Let <span class="chem">f(x) = 0.5x^4 - 2x^3 + x^2 + 3x - 1</span>. The graph of <span class="chem">f</span> has two local minimum points and one local maximum point. Find the <span class="chem">y</span>-coordinate of the local maximum point, correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">f(x) = 0.5x^4 - 2x^3 + x^2 + 3x - 1</span> とする。<span class=\"chem\">f</span> のグラフは 2 つの極小点と 1 つの極大点をもつ。極大点の <span class=\"chem\">y</span> 座標を有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: Graph <span class="chem">y = f(x)</span> for about <span class="chem">-2 &lt;= x &lt;= 4</span>. The local maximum lies between the two minima.
        "およそ <span class=\"chem\">-2 &lt;= x &lt;= 4</span> で <span class=\"chem\">y = f(x)</span> のグラフをかきます。極大点は 2 つの極小点の間にあります。",
        // EN: Use the GDC maximum feature, or solve the cubic <span class="chem">f'(x) = 2x^3 - 6x^2 + 2x + 3 = 0</span> and pick the middle root.
        "GDC の最大値機能を使うか、3 次方程式 <span class=\"chem\">f'(x) = 2x^3 - 6x^2 + 2x + 3 = 0</span> を解いて中央の解を選びます。",
      ],
      // EN: <p><span class="chem">f'(x) = 2x^3 - 6x^2 + 2x + 3</span>. The GDC gives roots <span class="chem">x ≈ -0.526</span>, <span class="chem">1.259</span>, <span class="chem">2.267</span>. Since <span class="chem">f''(x) = 6x^2 - 12x + 2</span> is negative at <span class="chem">x ≈ 1.259</span> (about <span class="chem">-3.6</span>), the middle point is the local maximum: <span class="chem">f(1.2587…) ≈ 1.6271</span>. The <span class="chem">y</span>-coordinate is <span class="chem">1.63</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">f'(x) = 2x^3 - 6x^2 + 2x + 3</span>。GDC により解は <span class=\"chem\">x ≈ -0.526</span>、<span class=\"chem\">1.259</span>、<span class=\"chem\">2.267</span> です。<span class=\"chem\">f''(x) = 6x^2 - 12x + 2</span> は <span class=\"chem\">x ≈ 1.259</span> で負（約 <span class=\"chem\">-3.6</span>）なので、中央の点が極大点です：<span class=\"chem\">f(1.2587…) ≈ 1.6271</span>。<span class=\"chem\">y</span> 座標は <span class=\"chem\">1.63</span>（有効数字 3 桁）です。</p>",
    },

    // ── t5-1-q059 · short · challenge · SL · SL 5.8 · 9 marks
    "t5-1-q059": {
      // EN: <p>A garden is a rectangle <span class="chem">x</span> <span class="unit">m</span> long and <span class="chem">y</span> <span class="unit">m</span> wide, with a semicircle of diameter <span class="chem">y</span> attached to one of its short sides. A fence goes round the whole outside edge of the garden. The straight parts of the fence cost <span class="chem">$12</span> per metre, and the curved part costs <span class="chem">$20</span> per metre. The total cost of the fence is <span class="chem">$1200</span>.<br>(a) Show that <span class="chem">x = 50 - (6 + 5 pi)y / 12</span>. <strong>[2 marks]</strong><br>(b) Show that the area of the garden is <span class="chem">A = 50y - (6 + 5 pi)y^2 / 12 + pi y^2 / 8</span>. <strong>[2 marks]</strong><br>(c) Find the value of <span class="chem">y</span> that gives the greatest area, and the greatest area. <strong>[4 marks]</strong><br>(d) Verify that this design is possible. <strong>[1 mark]</strong></p>
      stem: "<p>庭は、縦 <span class=\"chem\">x</span> <span class=\"unit\">m</span>、横 <span class=\"chem\">y</span> <span class=\"unit\">m</span> の長方形と、その短い辺の 1 つに取り付けた直径 <span class=\"chem\">y</span> の半円からなる。庭の外周全体を柵で囲む。柵の直線部分は 1 メートルあたり <span class=\"chem\">$12</span>、曲線部分は 1 メートルあたり <span class=\"chem\">$20</span> かかる。柵の総費用は <span class=\"chem\">$1200</span> である。<br>(a) <span class=\"chem\">x = 50 - (6 + 5 pi)y / 12</span> であることを示しなさい (Show that)。<strong>[2 marks]</strong><br>(b) 庭の面積が <span class=\"chem\">A = 50y - (6 + 5 pi)y^2 / 12 + pi y^2 / 8</span> であることを示しなさい (Show that)。<strong>[2 marks]</strong><br>(c) 面積が最大となる <span class=\"chem\">y</span> の値と、面積の最大値を求めなさい (Find)。<strong>[4 marks]</strong><br>(d) この設計が実現可能であることを確かめなさい (Verify)。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: list the fence pieces carefully. The side where the semicircle is attached has no fence; the remaining straight edges are two lengths <span class="chem">x</span> and one width <span class="chem">y</span>, plus a half-circle arc <span class="chem">pi y / 2</span>.
        "解読：柵の各部分を注意深く挙げましょう。半円を取り付けた辺には柵がありません；残りの直線部分は長さ <span class=\"chem\">x</span> が 2 本と幅 <span class=\"chem\">y</span> が 1 本で、さらに半円の弧 <span class=\"chem\">pi y / 2</span> があります。",
        // EN: Cost: <span class="chem">12(2x + y) + 20(pi y / 2) = 1200</span>. Area: rectangle plus half a circle of radius <span class="chem">y/2</span>.
        "費用：<span class=\"chem\">12(2x + y) + 20(pi y / 2) = 1200</span>。面積：長方形と半径 <span class=\"chem\">y/2</span> の半円の和。",
        // EN: For (c), graph <span class="chem">A(y)</span> for <span class="chem">y &gt; 0</span> and find the maximum. For (d), the length <span class="chem">x</span> must be positive.
        "(c) では、<span class=\"chem\">y &gt; 0</span> で <span class=\"chem\">A(y)</span> のグラフをかき、最大値を求めます。(d) では、長さ <span class=\"chem\">x</span> が正でなければなりません。",
      ],
      // EN: <p><strong>Decode:</strong> work out which edges are fenced. The short side joined to the semicircle is inside the garden, so the fence is two lengths <span class="chem">x</span>, one width <span class="chem">y</span>, and the arc <span class="chem">pi y / 2</span>.<br>(a) <span class="chem">12(2x + y) + 20(pi y / 2) = 1200 =&gt; 24x = 1200 - (12 + 10 pi)y =&gt; x = 50 - (6 + 5 pi)y / 12</span>.<br>(b) <span class="chem">A = xy + (1/2) pi (y/2)^2 = xy + pi y^2 / 8 = 50y - (6 + 5 pi)y^2 / 12 + pi y^2 / 8</span>.<br>(c) <span class="chem">A'(y) = 50 - (6 + 5 pi)y / 6 + pi y / 4 = 0 =&gt; y = 600 / (12 + 7 pi) ≈ 17.65</span>. The coefficient of <span class="chem">y^2</span> is <span class="chem">-(6 + 5 pi)/12 + pi/8 ≈ -1.42 &lt; 0</span>, so this is a maximum: <span class="chem">A ≈ 441</span> <span class="unit">m2</span>.<br>(d) <span class="chem">x ≈ 50 - 1.809(17.65) ≈ 18.1 &gt; 0</span>, so the rectangle exists and the design is possible.</p>
      solution: "<p><strong>解読：</strong>どの辺に柵があるかを確認します。半円とつながった短い辺は庭の内部にあるので、柵は長さ <span class=\"chem\">x</span> が 2 本、幅 <span class=\"chem\">y</span> が 1 本、および弧 <span class=\"chem\">pi y / 2</span> です。<br>(a) <span class=\"chem\">12(2x + y) + 20(pi y / 2) = 1200 =&gt; 24x = 1200 - (12 + 10 pi)y =&gt; x = 50 - (6 + 5 pi)y / 12</span>。<br>(b) <span class=\"chem\">A = xy + (1/2) pi (y/2)^2 = xy + pi y^2 / 8 = 50y - (6 + 5 pi)y^2 / 12 + pi y^2 / 8</span>。<br>(c) <span class=\"chem\">A'(y) = 50 - (6 + 5 pi)y / 6 + pi y / 4 = 0 =&gt; y = 600 / (12 + 7 pi) ≈ 17.65</span>。<span class=\"chem\">y^2</span> の係数は <span class=\"chem\">-(6 + 5 pi)/12 + pi/8 ≈ -1.42 &lt; 0</span> なので、これは最大です：<span class=\"chem\">A ≈ 441</span> <span class=\"unit\">m2</span>。<br>(d) <span class=\"chem\">x ≈ 50 - 1.809(17.65) ≈ 18.1 &gt; 0</span> なので長方形は存在し、この設計は実現可能です。</p>",
      // EN: <p>(a), (b) See mark scheme.<br>(c) <span class="chem">y ≈ 17.7</span> <span class="unit">m</span>, <span class="chem">A ≈ 441</span> <span class="unit">m2</span>.<br>(d) <span class="chem">x ≈ 18.1 &gt; 0</span>.</p>
      answer: "<p>(a)、(b) 採点基準を参照。<br>(c) <span class=\"chem\">y ≈ 17.7</span> <span class=\"unit\">m</span>、<span class=\"chem\">A ≈ 441</span> <span class=\"unit\">m2</span>。<br>(d) <span class=\"chem\">x ≈ 18.1 &gt; 0</span>。</p>",
      markscheme: [
        // EN: M1: Cost equation: the straight fence is <span class="chem">2x + y</span> and the arc is <span class="chem">pi y / 2</span>, so <span class="chem">12(2x + y) + 20(pi y / 2) = 1200</span>.
        "M1：費用の式：直線の柵は <span class=\"chem\">2x + y</span>、弧は <span class=\"chem\">pi y / 2</span> なので <span class=\"chem\">12(2x + y) + 20(pi y / 2) = 1200</span>。",
        // EN: A1: <span class="chem">24x = 1200 - 12y - 10 pi y =&gt; x = 50 - (6 + 5 pi)y / 12</span> (AG).
        "A1：<span class=\"chem\">24x = 1200 - 12y - 10 pi y =&gt; x = 50 - (6 + 5 pi)y / 12</span> (AG)。",
        // EN: M1: Area <span class="chem">= xy + (1/2) pi (y/2)^2 = xy + pi y^2 / 8</span>.
        "M1：面積 <span class=\"chem\">= xy + (1/2) pi (y/2)^2 = xy + pi y^2 / 8</span>。",
        // EN: A1: Substitutes <span class="chem">x</span>: <span class="chem">A = 50y - (6 + 5 pi)y^2 / 12 + pi y^2 / 8</span> (AG).
        "A1：<span class=\"chem\">x</span> を代入する：<span class=\"chem\">A = 50y - (6 + 5 pi)y^2 / 12 + pi y^2 / 8</span> (AG)。",
        // EN: M1: Solves <span class="chem">A'(y) = 50 - (6 + 5 pi)y / 6 + pi y / 4 = 0</span>, or uses the GDC maximum on the graph of <span class="chem">A</span>.
        "M1：<span class=\"chem\">A'(y) = 50 - (6 + 5 pi)y / 6 + pi y / 4 = 0</span> を解く、または <span class=\"chem\">A</span> のグラフに GDC の最大値機能を使う。",
        // EN: A1: <span class="chem">y = 17.7</span> <span class="unit">m</span> (<span class="chem">17.6516…</span>, exactly <span class="chem">600 / (12 + 7 pi)</span>).
        "A1：<span class=\"chem\">y = 17.7</span> <span class=\"unit\">m</span>（<span class=\"chem\">17.6516…</span>、正確には <span class=\"chem\">600 / (12 + 7 pi)</span>）。",
        // EN: R1: Justifies a maximum, e.g. <span class="chem">A</span> is a quadratic in <span class="chem">y</span> with a negative coefficient of <span class="chem">y^2</span> (or <span class="chem">A''(y) &lt; 0</span>).
        "R1：最大であることを示す。例：<span class=\"chem\">A</span> は <span class=\"chem\">y</span> の 2 次式で、<span class=\"chem\">y^2</span> の係数が負（または <span class=\"chem\">A''(y) &lt; 0</span>）。",
        // EN: A1: <span class="chem">A = 441</span> <span class="unit">m2</span> (<span class="chem">441.29…</span>).
        "A1：<span class=\"chem\">A = 441</span> <span class=\"unit\">m2</span>（<span class=\"chem\">441.29…</span>）。",
        // EN: A1: <span class="chem">x = 50 - (6 + 5 pi)(17.65…) / 12 ≈ 18.1 &gt; 0</span>, so the design is possible.
        "A1：<span class=\"chem\">x = 50 - (6 + 5 pi)(17.65…) / 12 ≈ 18.1 &gt; 0</span> なので、この設計は実現可能である。",
      ],
    },

    // ── t5-1-q060 · short · challenge · SL · SL 5.2, 5.7, 5.8 · 8 marks
    "t5-1-q060": {
      // EN: <p>A function <span class="chem">f</span> is defined for <span class="chem">-2 &lt;= x &lt;= 3</span>, and its derivative is <span class="chem">f'(x) = x^2 - 4 sin x</span>.<br>(a) Find the <span class="chem">x</span>-coordinates of the stationary points of <span class="chem">f</span>, and determine the nature of each. <strong>[4 marks]</strong><br>(b) Find the <span class="chem">x</span>-coordinate of the point at which the graph of <span class="chem">f</span> is decreasing most rapidly. <strong>[3 marks]</strong><br>(c) State, with a reason, whether the graph of <span class="chem">f</span> has a point of inflexion at the point found in (b). <strong>[1 mark]</strong></p>
      stem: "<p>関数 <span class=\"chem\">f</span> は <span class=\"chem\">-2 &lt;= x &lt;= 3</span> で定義され、その導関数は <span class=\"chem\">f'(x) = x^2 - 4 sin x</span> である。<br>(a) <span class=\"chem\">f</span> の停留点の <span class=\"chem\">x</span> 座標を求め (Find)、それぞれの性質を判定しなさい (determine)。<strong>[4 marks]</strong><br>(b) <span class=\"chem\">f</span> のグラフが最も速く減少する点の <span class=\"chem\">x</span> 座標を求めなさい (Find)。<strong>[3 marks]</strong><br>(c) (b) で求めた点で <span class=\"chem\">f</span> のグラフが変曲点をもつかどうかを、理由をつけて述べなさい (State)。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: you are told <span class="chem">f'</span>, not <span class="chem">f</span>. Stationary points are zeros of <span class="chem">f'</span>; “decreasing most rapidly” is the most negative value of <span class="chem">f'</span>, which could be at a turning point of <span class="chem">f'</span> or at an end of the domain.
        "解読：与えられているのは <span class=\"chem\">f</span> ではなく <span class=\"chem\">f'</span> です。停留点は <span class=\"chem\">f'</span> の零点；「最も速く減少」とは <span class=\"chem\">f'</span> の最も負の値のことで、それは <span class=\"chem\">f'</span> の極値点か定義域の端点で起こり得ます。",
        // EN: Graph <span class="chem">y = x^2 - 4 sin x</span> for <span class="chem">-2 &lt;= x &lt;= 3</span> (radian mode). Read off its zeros and its minimum.
        "<span class=\"chem\">-2 &lt;= x &lt;= 3</span> で <span class=\"chem\">y = x^2 - 4 sin x</span> のグラフをかきます（ラジアンモード）。その零点と最小値を読み取ります。",
        // EN: For (c), a turning point of <span class="chem">f'</span> is where <span class="chem">f''</span> is zero and changes sign.
        "(c) では、<span class=\"chem\">f'</span> の極値点は <span class=\"chem\">f''</span> が 0 となり符号が変わるところです。",
      ],
      // EN: <p><strong>Decode:</strong> work entirely with the graph of <span class="chem">y = f'(x)</span>: its zeros give the stationary points of <span class="chem">f</span>, and its lowest point (checking the endpoints too) gives the steepest descent.<br>(a) <span class="chem">f'(x) = 0</span> at <span class="chem">x = 0</span> and <span class="chem">x ≈ 1.9338</span>. For <span class="chem">x &lt; 0</span>, <span class="chem">x^2 &gt; 0</span> and <span class="chem">-4 sin x &gt; 0</span>, so <span class="chem">f' &gt; 0</span>; just after <span class="chem">0</span>, <span class="chem">f' &lt; 0</span> (e.g. <span class="chem">f'(1) ≈ -2.37</span>). So <span class="chem">x = 0</span> is a local maximum, and since <span class="chem">f'</span> goes from <span class="chem">-</span> to <span class="chem">+</span> at <span class="chem">1.93</span> (e.g. <span class="chem">f'(2.5) ≈ 3.86</span>), <span class="chem">x ≈ 1.93</span> is a local minimum.<br>(b) The GDC minimum of <span class="chem">f'</span> is at <span class="chem">x ≈ 1.0299</span>, with <span class="chem">f' ≈ -2.37</span>. The endpoints give <span class="chem">f'(-2) ≈ 7.64</span> and <span class="chem">f'(3) ≈ 8.44</span>, so <span class="chem">f</span> decreases most rapidly at <span class="chem">x ≈ 1.03</span>.<br>(c) Yes. At a local minimum of <span class="chem">f'</span>, its gradient <span class="chem">f''(x) = 2x - 4 cos x</span> is zero and changes from negative to positive, so the concavity of <span class="chem">f</span> changes: a non-stationary point of inflexion.</p>
      solution: "<p><strong>解読：</strong>すべて <span class=\"chem\">y = f'(x)</span> のグラフで考えます：その零点から <span class=\"chem\">f</span> の停留点が、その最も低い点（端点も確認）から最も急な減少がわかります。<br>(a) <span class=\"chem\">x = 0</span> と <span class=\"chem\">x ≈ 1.9338</span> で <span class=\"chem\">f'(x) = 0</span> です。<span class=\"chem\">x &lt; 0</span> では <span class=\"chem\">x^2 &gt; 0</span> かつ <span class=\"chem\">-4 sin x &gt; 0</span> なので <span class=\"chem\">f' &gt; 0</span>；<span class=\"chem\">0</span> の直後では <span class=\"chem\">f' &lt; 0</span>（例：<span class=\"chem\">f'(1) ≈ -2.37</span>）。よって <span class=\"chem\">x = 0</span> は極大であり、<span class=\"chem\">1.93</span> で <span class=\"chem\">f'</span> が <span class=\"chem\">-</span> から <span class=\"chem\">+</span> に変わる（例：<span class=\"chem\">f'(2.5) ≈ 3.86</span>）ので、<span class=\"chem\">x ≈ 1.93</span> は極小です。<br>(b) GDC による <span class=\"chem\">f'</span> の最小値は <span class=\"chem\">x ≈ 1.0299</span> で、<span class=\"chem\">f' ≈ -2.37</span> です。端点では <span class=\"chem\">f'(-2) ≈ 7.64</span>、<span class=\"chem\">f'(3) ≈ 8.44</span> なので、<span class=\"chem\">f</span> が最も速く減少するのは <span class=\"chem\">x ≈ 1.03</span> です。<br>(c) はい。<span class=\"chem\">f'</span> の極小点では、その傾き <span class=\"chem\">f''(x) = 2x - 4 cos x</span> が 0 で負から正に変わるので、<span class=\"chem\">f</span> の凹凸が変わります：非停留変曲点です。</p>",
      // EN: <p>(a) <span class="chem">x = 0</span>: local maximum; <span class="chem">x ≈ 1.93</span>: local minimum.<br>(b) <span class="chem">x ≈ 1.03</span>.<br>(c) Yes: <span class="chem">f'</span> has a local minimum there, so <span class="chem">f''</span> is zero and changes sign.</p>
      answer: "<p>(a) <span class=\"chem\">x = 0</span>：極大；<span class=\"chem\">x ≈ 1.93</span>：極小。<br>(b) <span class=\"chem\">x ≈ 1.03</span>。<br>(c) はい：そこで <span class=\"chem\">f'</span> は極小となるので、<span class=\"chem\">f''</span> は 0 で符号が変わる。</p>",
      markscheme: [
        // EN: M1: Solves <span class="chem">x^2 - 4 sin x = 0</span> on the GDC.
        "M1：GDC で <span class=\"chem\">x^2 - 4 sin x = 0</span> を解く。",
        // EN: A1: <span class="chem">x = 0</span> and <span class="chem">x = 1.93</span> (<span class="chem">1.93375…</span>).
        "A1：<span class=\"chem\">x = 0</span> と <span class=\"chem\">x = 1.93</span>（<span class=\"chem\">1.93375…</span>）。",
        // EN: R1: <span class="chem">f'</span> changes from positive to negative at <span class="chem">x = 0</span>, so a local maximum.
        "R1：<span class=\"chem\">f'</span> は <span class=\"chem\">x = 0</span> で正から負に変わるので極大。",
        // EN: R1: <span class="chem">f'</span> changes from negative to positive at <span class="chem">x = 1.93</span>, so a local minimum.
        "R1：<span class=\"chem\">f'</span> は <span class=\"chem\">x = 1.93</span> で負から正に変わるので極小。",
        // EN: M1: Recognises that “decreasing most rapidly” means the minimum of <span class="chem">f'(x)</span>.
        "M1：「最も速く減少」が <span class=\"chem\">f'(x)</span> の最小値であると認識する。",
        // EN: A1: <span class="chem">x = 1.03</span> (<span class="chem">1.02987…</span>, where <span class="chem">f'(x) ≈ -2.37</span>).
        "A1：<span class=\"chem\">x = 1.03</span>（<span class=\"chem\">1.02987…</span>、このとき <span class=\"chem\">f'(x) ≈ -2.37</span>）。",
        // EN: R1: Checks the endpoints: <span class="chem">f'(-2) ≈ 7.64</span> and <span class="chem">f'(3) ≈ 8.44</span> are positive, so the minimum of <span class="chem">f'</span> is at the turning point.
        "R1：端点を確認する：<span class=\"chem\">f'(-2) ≈ 7.64</span>、<span class=\"chem\">f'(3) ≈ 8.44</span> はどちらも正なので、<span class=\"chem\">f'</span> の最小値は極値点にある。",
        // EN: R1: Yes: <span class="chem">f''(x) = 2x - 4 cos x</span> is zero at <span class="chem">x ≈ 1.03</span> and changes sign (from negative to positive), so it is a (non-stationary) point of inflexion.
        "R1：はい：<span class=\"chem\">f''(x) = 2x - 4 cos x</span> は <span class=\"chem\">x ≈ 1.03</span> で 0 となり符号が変わる（負から正）ので、（非停留）変曲点である。",
      ],
    },

  }
});
