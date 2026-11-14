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
