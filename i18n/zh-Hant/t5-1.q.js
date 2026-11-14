/* t5-1.q — zh-Hant question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't5-1.q', {
  questions: {

    // ── t5-1-q001 · mcq · foundation · SL · SL 5.3, 5.6 · 3 marks
    "t5-1-q001": {
      // EN: <p>Let <span class="chem">f(x) = 6 sqrt(x) - 4 / x^2 + 5</span> for <span class="chem">x &gt; 0</span>. Find <span class="chem">f'(x)</span>.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = 6 sqrt(x) - 4 / x^2 + 5</span>（<span class=\"chem\">x &gt; 0</span>）。求 (Find) <span class=\"chem\">f'(x)</span>。</p>",
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
        "先將各項改寫為有理數或負指數：<span class=\"chem\">f(x) = 6x^{1/2} - 4x^{-2} + 5</span>。",
        // EN: Apply the power rule <span class="chem">d/dx (x^n) = n x^{n-1}</span> to each term and remember that a standalone constant differentiates to <span class="chem">0</span>.
        "對各項應用冪法則 <span class=\"chem\">d/dx (x^n) = n x^{n-1}</span>，並緊記獨立常數的導數為 <span class=\"chem\">0</span>。",
      ],
      // EN: <p>Rewrite in index form: <span class="chem">f(x) = 6x^{1/2} - 4x^{-2} + 5</span>. Differentiating term by term gives <span class="chem">f'(x) = 6(1/2)x^{-1/2} - 4(-2)x^{-3} + 0 = 3 / sqrt(x) + 8 / x^3</span>.</p>
      solution: "<p>改寫為指數形式：<span class=\"chem\">f(x) = 6x^{1/2} - 4x^{-2} + 5</span>。逐項求導得 <span class=\"chem\">f'(x) = 6(1/2)x^{-1/2} - 4(-2)x^{-3} + 0 = 3 / sqrt(x) + 8 / x^3</span>。</p>",
      misconception: {
        // EN (option B): When differentiating −4x⁻², multiplying −4 by the negative exponent −2 gives +8x⁻³, not −8x⁻³.
        "1": "對 −4x⁻² 求導時，−4 乘以負指數 −2 應得 +8x⁻³，而非 −8x⁻³。",
        // EN (option C): Subtracting 1 from the exponent 1/2 gives −1/2 (so x⁻¹/² = 1/√x), and the derivative of the constant +5 is 0.
        "2": "指數 1/2 減 1 得 −1/2（故 x⁻¹/² = 1/√x），且常數 +5 的導數為 0。",
        // EN (option D): Rewrite −4/x² as −4x⁻² before differentiating; you cannot differentiate the denominator x² by itself.
        "3": "求導前須將 −4/x² 改寫為 −4x⁻²；不能單獨對分母 x² 求導。",
      },
    },

    // ── t5-1-q002 · numeric · foundation · SL · SL 5.4 · 4 marks
    "t5-1-q002": {
      // EN: <p>Consider the curve <span class="chem">y = x^3 - 5x^2 + 8x - 1</span>. The normal to the curve at <span class="chem">x = 1</span> has equation <span class="chem">y = m x + c</span>. Find the value of <span class="chem">c</span>.</p>
      stem: "<p>考慮曲線 <span class=\"chem\">y = x^3 - 5x^2 + 8x - 1</span>。該曲線在 <span class=\"chem\">x = 1</span> 處的法線方程為 <span class=\"chem\">y = m x + c</span>。求 (Find) <span class=\"chem\">c</span> 的值。</p>",
      hints: [
        // EN: First find the <span class="chem">y</span>-coordinate at <span class="chem">x = 1</span> and evaluate the derivative <span class="chem">dy/dx = 3x^2 - 10x + 8</span> at <span class="chem">x = 1</span>.
        "先求 <span class=\"chem\">x = 1</span> 處的 <span class=\"chem\">y</span> 坐標，並計算導數 <span class=\"chem\">dy/dx = 3x^2 - 10x + 8</span> 在 <span class=\"chem\">x = 1</span> 處的值。",
        // EN: Take the negative reciprocal <span class="chem">m_N = -1 / m_T</span> and substitute <span class="chem">(1, 3)</span> into <span class="chem">y - y_1 = m_N(x - 1)</span>.
        "取負倒數 <span class=\"chem\">m_N = -1 / m_T</span>，並將 <span class=\"chem\">(1, 3)</span> 代入 <span class=\"chem\">y - y_1 = m_N(x - 1)</span>。",
      ],
      // EN: <p>At <span class="chem">x = 1</span>, <span class="chem">y(1) = 1 - 5 + 8 - 1 = 3</span>. Differentiating gives <span class="chem">dy/dx = 3x^2 - 10x + 8</span>, so <span class="chem">m_T = 3 - 10 + 8 = 1</span> and the normal gradient is <span class="chem">m_N = -1 / 1 = -1</span>. Thus the normal is <span class="chem">y - 3 = -1(x - 1) =&gt; y = -x + 4</span>, giving <span class="chem">c = 4</span>.</p>
      solution: "<p>在 <span class=\"chem\">x = 1</span> 處，<span class=\"chem\">y(1) = 1 - 5 + 8 - 1 = 3</span>。求導得 <span class=\"chem\">dy/dx = 3x^2 - 10x + 8</span>，故 <span class=\"chem\">m_T = 3 - 10 + 8 = 1</span>，法線斜率為 <span class=\"chem\">m_N = -1 / 1 = -1</span>。因此法線為 <span class=\"chem\">y - 3 = -1(x - 1) =&gt; y = -x + 4</span>，得 <span class=\"chem\">c = 4</span>。</p>",
    },

    // ── t5-1-q003 · mcq · foundation · SL · SL 5.6 · 2 marks
    "t5-1-q003": {
      // EN: <p>Find the derivative of <span class="chem">f(x) = ln(3x^2 + 5)</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">f(x) = ln(3x^2 + 5)</span> 的導數。</p>",
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
        "對 <span class=\"chem\">f(x) = ln(u)</span> 使用鏈式法則，其中 <span class=\"chem\">u = 3x^2 + 5</span>。",
        // EN: Since <span class="chem">d/du (ln u) = 1/u</span> and <span class="chem">du/dx = 6x</span>, multiply them together.
        "由於 <span class=\"chem\">d/du (ln u) = 1/u</span> 及 <span class=\"chem\">du/dx = 6x</span>，將兩者相乘。",
      ],
      // EN: <p>By the chain rule, <span class="chem">f'(x) = (1 / (3x^2 + 5)) * d/dx(3x^2 + 5) = 6x / (3x^2 + 5)</span>.</p>
      solution: "<p>由鏈式法則，<span class=\"chem\">f'(x) = (1 / (3x^2 + 5)) * d/dx(3x^2 + 5) = 6x / (3x^2 + 5)</span>。</p>",
      misconception: {
        // EN (option B): You differentiated the outer function ln(u) to 1/u, but forgot to multiply by the derivative of the inner function u' = 6x (chain rule).
        "1": "你把外層函數 ln(u) 求導為 1/u，但忘記乘以內層函數的導數 u' = 6x（鏈式法則）。",
        // EN (option C): The denominator of d/dx[ln(u)] is the entire inner function u = 3x² + 5, not its derivative.
        "2": "d/dx[ln(u)] 的分母是整個內層函數 u = 3x² + 5，而非它的導數。",
        // EN (option D): The derivative of ln(u) is u'/u, not u' ln(u).
        "3": "ln(u) 的導數是 u'/u，而非 u' ln(u)。",
      },
    },

    // ── t5-1-q004 · numeric · foundation · SL · SL 5.6 · 3 marks
    "t5-1-q004": {
      // EN: <p>Let <span class="chem">f(x) = x^2 e^{3x}</span>. The derivative <span class="chem">f'(x)</span> can be written in the form <span class="chem">x e^{3x}(a x + b)</span>, where <span class="chem">a</span> and <span class="chem">b</span> are integers. Find the value of <span class="chem">b</span>.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = x^2 e^{3x}</span>。導數 <span class=\"chem\">f'(x)</span> 可寫成 <span class=\"chem\">x e^{3x}(a x + b)</span> 的形式，其中 <span class=\"chem\">a</span> 與 <span class=\"chem\">b</span> 為整數。求 (Find) <span class=\"chem\">b</span> 的值。</p>",
      hints: [
        // EN: Use the product rule <span class="chem">(u v)' = u v' + v u'</span> with <span class="chem">u = x^2</span> and <span class="chem">v = e^{3x}</span>.
        "利用乘積法則 <span class=\"chem\">(u v)' = u v' + v u'</span>，其中 <span class=\"chem\">u = x^2</span> 及 <span class=\"chem\">v = e^{3x}</span>。",
        // EN: Remember the chain rule when differentiating <span class="chem">e^{3x}</span>: <span class="chem">v' = 3e^{3x}</span>. Then factor out <span class="chem">x e^{3x}</span>.
        "對 <span class=\"chem\">e^{3x}</span> 求導時緊記鏈式法則：<span class=\"chem\">v' = 3e^{3x}</span>。然後抽出 <span class=\"chem\">x e^{3x}</span>。",
      ],
      // EN: <p>By the product rule, <span class="chem">f'(x) = x^2(3e^{3x}) + e^{3x}(2x) = x e^{3x}(3x + 2)</span>. Comparing with <span class="chem">x e^{3x}(a x + b)</span> gives <span class="chem">a = 3</span> and <span class="chem">b = 2</span>.</p>
      solution: "<p>由乘積法則，<span class=\"chem\">f'(x) = x^2(3e^{3x}) + e^{3x}(2x) = x e^{3x}(3x + 2)</span>。與 <span class=\"chem\">x e^{3x}(a x + b)</span> 比較得 <span class=\"chem\">a = 3</span> 及 <span class=\"chem\">b = 2</span>。</p>",
    },

    // ── t5-1-q005 · mcq · exam · SL · SL 5.6 · 5 marks
    "t5-1-q005": {
      // EN: <p>Consider <span class="chem">f(x) = cos(2x) / e^x</span>. Which expression equals <span class="chem">f'(x)</span>?</p>
      stem: "<p>考慮 <span class=\"chem\">f(x) = cos(2x) / e^x</span>。下列哪個代數式等於 <span class=\"chem\">f'(x)</span>？</p>",
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
        "套用商法則，其中 <span class=\"chem\">u = cos(2x)</span>（<span class=\"chem\">u' = -2 sin(2x)</span>）及 <span class=\"chem\">v = e^x</span>（<span class=\"chem\">v' = e^x</span>）。",
        // EN: Factor out <span class="chem">e^x</span> in the numerator and cancel with one factor of <span class="chem">e^x</span> in <span class="chem">(e^x)^2</span>.
        "在分子抽出 <span class=\"chem\">e^x</span> 並與分母 <span class=\"chem\">(e^x)^2</span> 中的一個 <span class=\"chem\">e^x</span> 約去。",
      ],
      // EN: <p>Using the quotient rule: <span class="chem">f'(x) = (e^x(-2 sin(2x)) - cos(2x)(e^x)) / (e^x)^2 = -(2 sin(2x) + cos(2x)) / e^x</span>.</p>
      solution: "<p>使用商法則：<span class=\"chem\">f'(x) = (e^x(-2 sin(2x)) - cos(2x)(e^x)) / (e^x)^2 = -(2 sin(2x) + cos(2x)) / e^x</span>。</p>",
      misconception: {
        // EN (option B): The derivative of cos(2x) is −2 sin(2x) (with a minus sign), not +2 sin(2x).
        "1": "cos(2x) 的導數是 −2 sin(2x)（帶負號），而非 +2 sin(2x)。",
        // EN (option C): You cannot differentiate the numerator and denominator separately; you must apply the quotient rule (v u' − u v') / v².
        "2": "不能把分子與分母分開求導；必須套用商法則 (v u' − u v') / v²。",
        // EN (option D): By the chain rule, d/dx[cos(2x)] = −2 sin(2x), and you can cancel one factor of e^x from numerator and denominator.
        "3": "由鏈式法則，d/dx[cos(2x)] = −2 sin(2x)，而且分子與分母可約去一個 e^x 因子。",
      },
    },

    // ── t5-1-q006 · numeric · exam · SL · SL 5.4 · 4 marks
    "t5-1-q006": {
      // EN: <p>The tangent to the curve <span class="chem">f(x) = k x^2 + 3x - 2</span> at the point where <span class="chem">x = 2</span> is parallel to the line <span class="chem">y = 11x - 5</span>. Find the value of <span class="chem">k</span>.</p>
      stem: "<p>曲線 <span class=\"chem\">f(x) = k x^2 + 3x - 2</span> 在 <span class=\"chem\">x = 2</span> 處的切線平行於直線 <span class=\"chem\">y = 11x - 5</span>。求 (Find) <span class=\"chem\">k</span> 的值。</p>",
      hints: [
        // EN: Parallel lines have the same gradient, so the tangent gradient at <span class="chem">x = 2</span> is <span class="chem">f'(2) = 11</span>.
        "平行線具有相同斜率，故在 <span class=\"chem\">x = 2</span> 處的切線斜率為 <span class=\"chem\">f'(2) = 11</span>。",
        // EN: Differentiate <span class="chem">f(x)</span> to get <span class="chem">f'(x) = 2k x + 3</span>, substitute <span class="chem">x = 2</span>, and solve <span class="chem">4k + 3 = 11</span>.
        "對 <span class=\"chem\">f(x)</span> 求導得 <span class=\"chem\">f'(x) = 2k x + 3</span>，代入 <span class=\"chem\">x = 2</span>，並解 <span class=\"chem\">4k + 3 = 11</span>。",
      ],
      // EN: <p>Since the tangent at <span class="chem">x = 2</span> is parallel to <span class="chem">y = 11x - 5</span>, we have <span class="chem">f'(2) = 11</span>. Differentiating gives <span class="chem">f'(x) = 2k x + 3</span>, so <span class="chem">f'(2) = 4k + 3 = 11 =&gt; 4k = 8 =&gt; k = 2</span>.</p>
      solution: "<p>由於在 <span class=\"chem\">x = 2</span> 處的切線平行於 <span class=\"chem\">y = 11x - 5</span>，我們有 <span class=\"chem\">f'(2) = 11</span>。求導得 <span class=\"chem\">f'(x) = 2k x + 3</span>，故 <span class=\"chem\">f'(2) = 4k + 3 = 11 =&gt; 4k = 8 =&gt; k = 2</span>。</p>",
    },

    // ── t5-1-q007 · multi · exam · SL · SL 5.2, 5.8 · 5 marks
    "t5-1-q007": {
      // EN: <p>A twice-differentiable function <span class="chem">y = f(x)</span> has derivative <span class="chem">f'(x) = (x + 2)^2 (x - 3)</span>. Select <strong>all</strong> true statements about the graph of <span class="chem">y = f(x)</span>.</p>
      stem: "<p>二階可微函數 <span class=\"chem\">y = f(x)</span> 的導數為 <span class=\"chem\">f'(x) = (x + 2)^2 (x - 3)</span>。選出<strong>所有</strong>關於 <span class=\"chem\">y = f(x)</span> 圖像的正確陳述。</p>",
      options: [
        // EN: <span class="chem">f(x)</span> has a stationary point of inflexion at <span class="chem">x = -2</span>.
        "<span class=\"chem\">f(x)</span> 在 <span class=\"chem\">x = -2</span> 處有一個駐拐點。",
        // EN: <span class="chem">f(x)</span> has a local minimum at <span class="chem">x = 3</span>.
        "<span class=\"chem\">f(x)</span> 在 <span class=\"chem\">x = 3</span> 處有一個局部極小值。",
        // EN: <span class="chem">f(x)</span> is increasing on the interval <span class="chem">-2 &lt; x &lt; 3</span>.
        "<span class=\"chem\">f(x)</span> 在區間 <span class=\"chem\">-2 &lt; x &lt; 3</span> 上遞增。",
        // EN: <span class="chem">f(x)</span> has a local maximum at <span class="chem">x = -2</span>.
        "<span class=\"chem\">f(x)</span> 在 <span class=\"chem\">x = -2</span> 處有一個局部極大值。",
      ],
      hints: [
        // EN: Find the sign of <span class="chem">f'(x) = (x + 2)^2 (x - 3)</span> in the three intervals <span class="chem">x &lt; -2</span>, <span class="chem">-2 &lt; x &lt; 3</span>, and <span class="chem">x &gt; 3</span>.
        "求出 <span class=\"chem\">f'(x) = (x + 2)^2 (x - 3)</span> 在三個區間 <span class=\"chem\">x &lt; -2</span>、<span class=\"chem\">-2 &lt; x &lt; 3</span> 與 <span class=\"chem\">x &gt; 3</span> 上的正負號。",
        // EN: Notice that <span class="chem">(x + 2)^2 &gt;= 0</span> for all <span class="chem">x</span>, so the sign of <span class="chem">f'(x)</span> is controlled by <span class="chem">(x - 3)</span>.
        "留意對所有 <span class=\"chem\">x</span> 皆有 <span class=\"chem\">(x + 2)^2 &gt;= 0</span>，故 <span class=\"chem\">f'(x)</span> 的正負號由 <span class=\"chem\">(x - 3)</span> 決定。",
      ],
      // EN: <p>The roots of <span class="chem">f'(x) = 0</span> are <span class="chem">x = -2</span> and <span class="chem">x = 3</span>. Because <span class="chem">(x + 2)^2 &gt; 0</span> for all <span class="chem">x != -2</span>, <span class="chem">f'(x) &lt; 0</span> for <span class="chem">x &lt; -2</span> and for <span class="chem">-2 &lt; x &lt; 3</span>, while <span class="chem">f'(x) &gt; 0</span> for <span class="chem">x &gt; 3</span>. Thus <span class="chem">x = -2</span> is a stationary point of inflexion (sign <span class="chem">- -&gt; 0 -&gt; -</span>) and <span class="chem">x = 3</span> is a local minimum (sign <span class="chem">- -&gt; 0 -&gt; +</span>).</p>
      solution: "<p><span class=\"chem\">f'(x) = 0</span> 的根為 <span class=\"chem\">x = -2</span> 與 <span class=\"chem\">x = 3</span>。由於對所有 <span class=\"chem\">x != -2</span> 皆有 <span class=\"chem\">(x + 2)^2 &gt; 0</span>，故在 <span class=\"chem\">x &lt; -2</span> 及 <span class=\"chem\">-2 &lt; x &lt; 3</span> 時 <span class=\"chem\">f'(x) &lt; 0</span>，而在 <span class=\"chem\">x &gt; 3</span> 時 <span class=\"chem\">f'(x) &gt; 0</span>。因此 <span class=\"chem\">x = -2</span> 是駐拐點（符號 <span class=\"chem\">- -&gt; 0 -&gt; -</span>），而 <span class=\"chem\">x = 3</span> 是局部極小值（符號 <span class=\"chem\">- -&gt; 0 -&gt; +</span>）。</p>",
      misconception: {
        // EN (option C): For x < 3 (with x ≠ −2), (x + 2)² > 0 and (x − 3) < 0, so f'(x) < 0 and f(x) is decreasing on −2 < x < 3.
        "2": "當 x < 3（且 x ≠ −2）時，(x + 2)² > 0 且 (x − 3) < 0，故 f'(x) < 0，因此 f(x) 在 −2 < x < 3 上遞減。",
        // EN (option D): At x = −2, the factor (x + 2)² is squared, so f'(x) does not change sign (it goes from − to 0 to −). That makes x = −2 a stationary point of inflexion, not a local maximum.
        "3": "在 x = −2 處，因子 (x + 2)² 帶有平方，故 f'(x) 並不變號（由 − 經 0 到 −）。這使 x = −2 成為駐拐點，而非局部極大值。",
      },
    },

    // ── t5-1-q008 · mcq · exam · SL · SL 5.7 · 5 marks
    "t5-1-q008": {
      // EN: <p>The graph of the <strong>derivative</strong> <span class="chem">y = f'(x)</span> is drawn for <span class="chem">-3 &lt;= x &lt;= 5</span>. The graph of <span class="chem">f'(x)</span> crosses the <span class="chem">x</span>-axis at <span class="chem">x = -1</span> and <span class="chem">x = 4</span>, and its only turning point is a local maximum at <span class="chem">(1.5, 6)</span>. At which value of <span class="chem">x</span> does the original curve <span class="chem">y = f(x)</span> have a point of inflexion?</p>
      stem: "<p>在 <span class=\"chem\">-3 &lt;= x &lt;= 5</span> 上畫出了<strong>導函數</strong> <span class=\"chem\">y = f'(x)</span> 的圖像。<span class=\"chem\">f'(x)</span> 的圖像於 <span class=\"chem\">x = -1</span> 與 <span class=\"chem\">x = 4</span> 穿過 <span class=\"chem\">x</span> 軸，而它唯一的轉向點是位於 <span class=\"chem\">(1.5, 6)</span> 的局部極大點。原曲線 <span class=\"chem\">y = f(x)</span> 在哪個 <span class=\"chem\">x</span> 值處有拐點？</p>",
      options: [
        // EN: <span class="chem">x = 1.5</span>
        "<span class=\"chem\">x = 1.5</span>",
        // EN: <span class="chem">x = -1</span> and <span class="chem">x = 4</span>
        "<span class=\"chem\">x = -1</span> 與 <span class=\"chem\">x = 4</span>",
        // EN: <span class="chem">x = 6</span>
        "<span class=\"chem\">x = 6</span>",
        // EN: Where the graph of <span class="chem">f'(x)</span> is concave down
        "<span class=\"chem\">f'(x)</span> 圖像呈下凹之處",
      ],
      hints: [
        // EN: A point of inflexion of <span class="chem">f(x)</span> occurs where <span class="chem">f''(x) = 0</span> and <span class="chem">f''(x)</span> changes sign.
        "<span class=\"chem\">f(x)</span> 的拐點出現在 <span class=\"chem\">f''(x) = 0</span> 且 <span class=\"chem\">f''(x)</span> 變號之處。",
        // EN: Since <span class="chem">f''(x)</span> is the gradient of <span class="chem">f'(x)</span>, where on the graph of <span class="chem">y = f'(x)</span> does its gradient equal zero and change sign?
        "由於 <span class=\"chem\">f''(x)</span> 是 <span class=\"chem\">f'(x)</span> 的斜率，在 <span class=\"chem\">y = f'(x)</span> 的圖像上，其斜率在哪裏等於零且變號？",
      ],
      // EN: <p>A point of inflexion on <span class="chem">y = f(x)</span> occurs where <span class="chem">f''(x) = 0</span> and changes sign. Since <span class="chem">f''(x)</span> is the derivative of <span class="chem">f'(x)</span>, this corresponds to a local maximum or minimum (turning point) on the graph of <span class="chem">y = f'(x)</span>, which is at <span class="chem">x = 1.5</span>.</p>
      solution: "<p><span class=\"chem\">y = f(x)</span> 上的拐點出現在 <span class=\"chem\">f''(x) = 0</span> 且變號之處。由於 <span class=\"chem\">f''(x)</span> 是 <span class=\"chem\">f'(x)</span> 的導數，這對應於 <span class=\"chem\">y = f'(x)</span> 圖像上的局部極大值或極小值（轉向點），即 <span class=\"chem\">x = 1.5</span>。</p>",
      misconception: {
        // EN (option B): x = −1 and x = 4 are the x-intercepts of f'(x), where f'(x) = 0 and changes sign; those are the local extrema (turning points) of f(x), not its points of inflexion.
        "1": "x = −1 與 x = 4 是 f'(x) 的 x 截距（f'(x) = 0 且變號）；它們是 f(x) 的局部極值（轉向點），而非拐點。",
        // EN (option C): y = 6 is the maximum value of the gradient f'(1.5), not an x-coordinate.
        "2": "y = 6 是斜率 f'(1.5) 的極大值，而非 x 坐標。",
        // EN (option D): A point of inflexion of f(x) occurs at a specific x-value where f''(x) = 0 and changes sign—which is a turning point (local max or min) of the graph of f'(x).
        "3": "f(x) 的拐點出現在 f''(x) = 0 且變號的特定 x 值處——即 f'(x) 圖像的轉向點（局部極大或極小值）。",
      },
    },

    // ── t5-1-q009 · numeric · exam · SL · SL 5.7, 5.8 · 6 marks
    "t5-1-q009": {
      // EN: <p>Let <span class="chem">f(x) = x e^{-x}</span> for <span class="chem">x in R</span>. Find the <span class="chem">x</span>-coordinate of the point of inflexion on the graph of <span class="chem">f</span>.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = x e^{-x}</span>（<span class=\"chem\">x in R</span>）。求 (Find) <span class=\"chem\">f</span> 圖像上拐點的 <span class=\"chem\">x</span> 坐標。</p>",
      hints: [
        // EN: Use the product rule to find <span class="chem">f'(x) = e^{-x} - x e^{-x} = (1 - x)e^{-x}</span>.
        "利用乘積法則求 <span class=\"chem\">f'(x) = e^{-x} - x e^{-x} = (1 - x)e^{-x}</span>。",
        // EN: Differentiate a second time to find <span class="chem">f''(x)</span>, factor out <span class="chem">e^{-x}</span>, and solve <span class="chem">f''(x) = 0</span>.
        "再求導一次求 <span class=\"chem\">f''(x)</span>，抽出 <span class=\"chem\">e^{-x}</span>，並解 <span class=\"chem\">f''(x) = 0</span>。",
      ],
      // EN: <p>First derivative: <span class="chem">f'(x) = (1)e^{-x} + x(-e^{-x}) = (1 - x)e^{-x}</span>.<br>Second derivative: <span class="chem">f''(x) = (-1)e^{-x} + (1 - x)(-e^{-x}) = (x - 2)e^{-x}</span>.<br>Since <span class="chem">e^{-x} &gt; 0</span> for all <span class="chem">x</span>, <span class="chem">f''(x) = 0 &lt;=&gt; x = 2</span>, and <span class="chem">f''(x)</span> changes sign from negative (<span class="chem">x &lt; 2</span>) to positive (<span class="chem">x &gt; 2</span>) at <span class="chem">x = 2</span>.</p>
      solution: "<p>一階導數：<span class=\"chem\">f'(x) = (1)e^{-x} + x(-e^{-x}) = (1 - x)e^{-x}</span>。<br>二階導數：<span class=\"chem\">f''(x) = (-1)e^{-x} + (1 - x)(-e^{-x}) = (x - 2)e^{-x}</span>。<br>由於對所有 <span class=\"chem\">x</span> 皆有 <span class=\"chem\">e^{-x} &gt; 0</span>，故 <span class=\"chem\">f''(x) = 0 &lt;=&gt; x = 2</span>，且 <span class=\"chem\">f''(x)</span> 在 <span class=\"chem\">x = 2</span> 處由負（<span class=\"chem\">x &lt; 2</span>）變正（<span class=\"chem\">x &gt; 2</span>）。</p>",
    },

    // ── t5-1-q010 · order · exam · SL · SL 5.8 · 4 marks
    "t5-1-q010": {
      // EN: <p>Arrange the steps in the correct logical order to find and justify the minimum surface area of a closed cylinder of fixed volume <span class="chem">V = 128 pi</span> <span class="unit">cm3</span>.</p>
      stem: "<p>按正確的邏輯順序排列以下步驟，以求出並證明固定體積為 <span class=\"chem\">V = 128 pi</span> <span class=\"unit\">cm3</span> 的封閉圓柱體之最小表面積。</p>",
      options: [
        // EN: Use the volume constraint <span class="chem">pi r^2 h = 128 pi</span> to write <span class="chem">h = 128 / r^2</span>.
        "利用體積約束條件 <span class=\"chem\">pi r^2 h = 128 pi</span> 寫出 <span class=\"chem\">h = 128 / r^2</span>。",
        // EN: Substitute <span class="chem">h = 128 / r^2</span> into <span class="chem">A = 2 pi r^2 + 2 pi r h</span> to obtain <span class="chem">A(r) = 2 pi r^2 + 256 pi r^{-1}</span>.
        "將 <span class=\"chem\">h = 128 / r^2</span> 代入 <span class=\"chem\">A = 2 pi r^2 + 2 pi r h</span>，得 <span class=\"chem\">A(r) = 2 pi r^2 + 256 pi r^{-1}</span>。",
        // EN: Differentiate with respect to <span class="chem">r</span> and solve <span class="chem">A'(r) = 4 pi r - 256 pi r^{-2} = 0</span> to find <span class="chem">r = 4</span> <span class="unit">cm</span>.
        "對 <span class=\"chem\">r</span> 求導並解 <span class=\"chem\">A'(r) = 4 pi r - 256 pi r^{-2} = 0</span>，求得 <span class=\"chem\">r = 4</span> <span class=\"unit\">cm</span>。",
        // EN: Evaluate <span class="chem">A''(4) = 4 pi + 512 pi / 4^3 = 12 pi &gt; 0</span> to justify a minimum, then compute <span class="chem">A(4) = 96 pi</span> <span class="unit">cm2</span>.
        "計算 <span class=\"chem\">A''(4) = 4 pi + 512 pi / 4^3 = 12 pi &gt; 0</span> 以證明為極小值，再計算 <span class=\"chem\">A(4) = 96 pi</span> <span class=\"unit\">cm2</span>。",
      ],
      hints: [
        // EN: Start by isolating the second variable <span class="chem">h</span> from the constraint equation before substituting into the objective function <span class="chem">A</span>.
        "先從約束方程分離出第二個變數 <span class=\"chem\">h</span>，再代入目標函數 <span class=\"chem\">A</span>。",
        // EN: Differentiate the single-variable function <span class="chem">A(r)</span> to find the stationary point <span class="chem">r = 4</span>, and finish with the second-derivative justification and minimum value.
        "對單變數函數 <span class=\"chem\">A(r)</span> 求導以求駐點 <span class=\"chem\">r = 4</span>，最後進行二階導數檢驗並求極小值。",
      ],
      // EN: <p>In any optimization problem: (1) isolate the second variable from the constraint, (2) substitute into the objective function to get one variable, (3) solve <span class="chem">A'(r) = 0</span>, and (4) verify <span class="chem">A''(r) &gt; 0</span> and evaluate the minimum value.</p>
      solution: "<p>在任何優化問題中：(1) 從約束條件分離出第二個變數，(2) 代入目標函數以化為單變數，(3) 解 <span class=\"chem\">A'(r) = 0</span>，及 (4) 驗證 <span class=\"chem\">A''(r) &gt; 0</span> 並計算極小值。</p>",
    },

    // ── t5-1-q011 · numeric · exam · SL · SL 5.8 · 6 marks
    "t5-1-q011": {
      // EN: <p>A closed cylindrical can has radius <span class="chem">r</span> <span class="unit">cm</span>, height <span class="chem">h</span> <span class="unit">cm</span>, and fixed volume <span class="chem">500</span> <span class="unit">cm3</span>. Calculate the value of <span class="chem">r</span> (in <span class="unit">cm</span>, to 3 s.f.) that minimizes the total external surface area <span class="chem">A = 2 pi r^2 + 2 pi r h</span>.</p>
      stem: "<p>一個封閉圓柱形罐子的半徑為 <span class=\"chem\">r</span> <span class=\"unit\">cm</span>、高度為 <span class=\"chem\">h</span> <span class=\"unit\">cm</span>，固定體積為 <span class=\"chem\">500</span> <span class=\"unit\">cm3</span>。計算 (Calculate) 使外表面積總和 <span class=\"chem\">A = 2 pi r^2 + 2 pi r h</span> 最小的 <span class=\"chem\">r</span> 值（以 <span class=\"unit\">cm</span> 為單位，準確至 3 位有效數字）。</p>",
      hints: [
        // EN: From <span class="chem">pi r^2 h = 500</span>, substitute <span class="chem">h = 500 / (pi r^2)</span> into <span class="chem">A</span> to get <span class="chem">A(r) = 2 pi r^2 + 1000 / r</span>.
        "由 <span class=\"chem\">pi r^2 h = 500</span>，將 <span class=\"chem\">h = 500 / (pi r^2)</span> 代入 <span class=\"chem\">A</span> 得 <span class=\"chem\">A(r) = 2 pi r^2 + 1000 / r</span>。",
        // EN: Solve <span class="chem">A'(r) = 4 pi r - 1000 / r^2 = 0 =&gt; r^3 = 250 / pi</span>.
        "解 <span class=\"chem\">A'(r) = 4 pi r - 1000 / r^2 = 0 =&gt; r^3 = 250 / pi</span>。",
      ],
      // EN: <p>Substituting <span class="chem">h = 500 / (pi r^2)</span> gives <span class="chem">A(r) = 2 pi r^2 + 1000 r^{-1}</span>. Setting <span class="chem">A'(r) = 4 pi r - 1000 r^{-2} = 0</span> gives <span class="chem">r^3 = 250 / pi ≈ 79.5775</span>, so <span class="chem">r = (250 / pi)^{1/3} ≈ 4.30</span> <span class="unit">cm</span> (3 s.f.).</p>
      solution: "<p>代入 <span class=\"chem\">h = 500 / (pi r^2)</span> 得 <span class=\"chem\">A(r) = 2 pi r^2 + 1000 r^{-1}</span>。令 <span class=\"chem\">A'(r) = 4 pi r - 1000 r^{-2} = 0</span> 得 <span class=\"chem\">r^3 = 250 / pi ≈ 79.5775</span>，故 <span class=\"chem\">r = (250 / pi)^{1/3} ≈ 4.30</span> <span class=\"unit\">cm</span>（3 位有效數字）。</p>",
    },

    // ── t5-1-q012 · numeric · exam · SL · SL 5.6, 5.8 · 6 marks
    "t5-1-q012": {
      // EN: <p>Consider <span class="chem">f(x) = (ln x) / x</span> for <span class="chem">x &gt; 0</span>. Find the exact maximum value of <span class="chem">f(x)</span>.</p>
      stem: "<p>考慮 <span class=\"chem\">f(x) = (ln x) / x</span>（<span class=\"chem\">x &gt; 0</span>）。求 (Find) <span class=\"chem\">f(x)</span> 的極大值的準確值。</p>",
      hints: [
        // EN: Differentiate using the quotient rule: <span class="chem">f'(x) = (x(1/x) - (ln x)(1)) / x^2 = (1 - ln x) / x^2</span>.
        "利用商法則求導：<span class=\"chem\">f'(x) = (x(1/x) - (ln x)(1)) / x^2 = (1 - ln x) / x^2</span>。",
        // EN: Set <span class="chem">f'(x) = 0</span> to find <span class="chem">ln x = 1 =&gt; x = e</span>, then evaluate <span class="chem">f(e)</span> exactly, using <span class="chem">ln e = 1</span>.
        "令 <span class=\"chem\">f'(x) = 0</span> 求得 <span class=\"chem\">ln x = 1 =&gt; x = e</span>，再利用 <span class=\"chem\">ln e = 1</span> 準確計算 <span class=\"chem\">f(e)</span>。",
      ],
      // EN: <p>By the quotient rule, <span class="chem">f'(x) = (1 - ln x) / x^2 = 0 =&gt; ln x = 1 =&gt; x = e</span>. For <span class="chem">0 &lt; x &lt; e</span>, <span class="chem">f'(x) &gt; 0</span>, and for <span class="chem">x &gt; e</span>, <span class="chem">f'(x) &lt; 0</span>, confirming a global maximum. The maximum value is <span class="chem">f(e) = (ln e) / e = 1 / e</span>.</p>
      solution: "<p>由商法則，<span class=\"chem\">f'(x) = (1 - ln x) / x^2 = 0 =&gt; ln x = 1 =&gt; x = e</span>。當 <span class=\"chem\">0 &lt; x &lt; e</span> 時 <span class=\"chem\">f'(x) &gt; 0</span>，當 <span class=\"chem\">x &gt; e</span> 時 <span class=\"chem\">f'(x) &lt; 0</span>，確認為全局極大值。極大值為 <span class=\"chem\">f(e) = (ln e) / e = 1 / e</span>。</p>",
    },

    // ── t5-1-q013 · short · exam · SL · SL 5.7, 5.8 · 7 marks
    "t5-1-q013": {
      // EN: <p>Let <span class="chem">f(x) = x^3 - 3x^2 - 9x + 11</span> for <span class="chem">x in R</span>.<br>(a) Find the coordinates of the two stationary points on the graph of <span class="chem">f</span>, and determine the nature of each point using the second derivative. <strong>[5 marks]</strong><br>(b) Find the coordinates of the point of inflexion and state the set of values of <span class="chem">x</span> for which the graph of <span class="chem">f</span> is concave down. <strong>[2 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = x^3 - 3x^2 - 9x + 11</span>（<span class=\"chem\">x in R</span>）。<br>(a) 求 (Find) <span class=\"chem\">f</span> 圖像上兩個駐點的坐標，並利用二階導數判斷每個點的性質。<strong>[5 marks]</strong><br>(b) 求 (Find) 拐點的坐標，並寫出 (state) <span class=\"chem\">f</span> 圖像呈下凹的 <span class=\"chem\">x</span> 值範圍。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: For part (a), factor <span class="chem">3x^2 - 6x - 9 = 0</span> by dividing through by <span class="chem">3</span> first.
        "對於 (a) 部，先把 <span class=\"chem\">3x^2 - 6x - 9 = 0</span> 全式除以 <span class=\"chem\">3</span> 再因式分解。",
        // EN: For part (b), solve <span class="chem">f''(x) &lt; 0</span> for concave down.
        "對於 (b) 部，解 <span class=\"chem\">f''(x) &lt; 0</span> 以求下凹區間。",
      ],
      // EN: <p>(a) <span class="chem">f'(x) = 3x^2 - 6x - 9 = 3(x - 3)(x + 1) = 0 =&gt; x = -1, 3</span>. Substituting into <span class="chem">f(x)</span> gives <span class="chem">f(-1) = -1 - 3 + 9 + 11 = 16</span> and <span class="chem">f(3) = 27 - 27 - 27 + 11 = -16</span>. Using <span class="chem">f''(x) = 6x - 6</span>, <span class="chem">f''(-1) = -12 &lt; 0</span> (local maximum at <span class="chem">(-1, 16)</span>) and <span class="chem">f''(3) = 12 &gt; 0</span> (local minimum at <span class="chem">(3, -16)</span>).<br>(b) <span class="chem">f''(x) = 6x - 6 = 0 =&gt; x = 1</span>, <span class="chem">f(1) = 1 - 3 - 9 + 11 = 0</span>, and <span class="chem">f''(x)</span> changes sign at <span class="chem">x = 1</span>, so the point of inflexion is <span class="chem">(1, 0)</span>. Since <span class="chem">6x - 6 &lt; 0 &lt;=&gt; x &lt; 1</span>, <span class="chem">f</span> is concave down for <span class="chem">x &lt; 1</span>.</p>
      solution: "<p>(a) <span class=\"chem\">f'(x) = 3x^2 - 6x - 9 = 3(x - 3)(x + 1) = 0 =&gt; x = -1, 3</span>。代入 <span class=\"chem\">f(x)</span> 得 <span class=\"chem\">f(-1) = -1 - 3 + 9 + 11 = 16</span> 及 <span class=\"chem\">f(3) = 27 - 27 - 27 + 11 = -16</span>。利用 <span class=\"chem\">f''(x) = 6x - 6</span>，<span class=\"chem\">f''(-1) = -12 &lt; 0</span>（<span class=\"chem\">(-1, 16)</span> 為局部極大值）且 <span class=\"chem\">f''(3) = 12 &gt; 0</span>（<span class=\"chem\">(3, -16)</span> 為局部極小值）。<br>(b) <span class=\"chem\">f''(x) = 6x - 6 = 0 =&gt; x = 1</span>，<span class=\"chem\">f(1) = 1 - 3 - 9 + 11 = 0</span>，且 <span class=\"chem\">f''(x)</span> 在 <span class=\"chem\">x = 1</span> 處變號，故拐點為 <span class=\"chem\">(1, 0)</span>。由於 <span class=\"chem\">6x - 6 &lt; 0 &lt;=&gt; x &lt; 1</span>，故 <span class=\"chem\">f</span> 在 <span class=\"chem\">x &lt; 1</span> 時呈下凹。</p>",
      // EN: <p>(a) Local maximum at <span class="chem">(-1, 16)</span>; local minimum at <span class="chem">(3, -16)</span>.<br>(b) Point of inflexion at <span class="chem">(1, 0)</span>; concave down for <span class="chem">x &lt; 1</span>.</p>
      answer: "<p>(a) 局部極大值位於 <span class=\"chem\">(-1, 16)</span>；局部極小值位於 <span class=\"chem\">(3, -16)</span>。<br>(b) 拐點位於 <span class=\"chem\">(1, 0)</span>；在 <span class=\"chem\">x &lt; 1</span> 時呈下凹。</p>",
      markscheme: [
        // EN: M1: Differentiate: <span class="chem">f'(x) = 3x^2 - 6x - 9</span>.
        "M1：求導：<span class=\"chem\">f'(x) = 3x^2 - 6x - 9</span>。",
        // EN: A1: Solve <span class="chem">f'(x) = 3(x - 3)(x + 1) = 0</span> to get <span class="chem">x = -1</span> and <span class="chem">x = 3</span>.
        "A1：解 <span class=\"chem\">f'(x) = 3(x - 3)(x + 1) = 0</span>，得 <span class=\"chem\">x = -1</span> 與 <span class=\"chem\">x = 3</span>。",
        // EN: A1: Find both stationary points: <span class="chem">(-1, 16)</span> and <span class="chem">(3, -16)</span>.
        "A1：求得兩個駐點：<span class=\"chem\">(-1, 16)</span> 與 <span class=\"chem\">(3, -16)</span>。",
        // EN: M1: Find <span class="chem">f''(x) = 6x - 6</span> and evaluate it at both stationary points.
        "M1：求得 <span class=\"chem\">f''(x) = 6x - 6</span>，並在兩個駐點計算其值。",
        // EN: R1: Since <span class="chem">f''(-1) = -12 &lt; 0</span>, <span class="chem">(-1, 16)</span> is a local maximum, and since <span class="chem">f''(3) = 12 &gt; 0</span>, <span class="chem">(3, -16)</span> is a local minimum.
        "R1：因 <span class=\"chem\">f''(-1) = -12 &lt; 0</span>，故 <span class=\"chem\">(-1, 16)</span> 為局部極大值；因 <span class=\"chem\">f''(3) = 12 &gt; 0</span>，故 <span class=\"chem\">(3, -16)</span> 為局部極小值。",
        // EN: A1: Solve <span class="chem">f''(x) = 6x - 6 = 0 =&gt; x = 1</span>, giving point of inflexion <span class="chem">(1, 0)</span>.
        "A1：解 <span class=\"chem\">f''(x) = 6x - 6 = 0 =&gt; x = 1</span>，得拐點 <span class=\"chem\">(1, 0)</span>。",
        // EN: A1: State that <span class="chem">f</span> is concave down (<span class="chem">f''(x) &lt; 0</span>) for <span class="chem">x &lt; 1</span>.
        "A1：寫出 <span class=\"chem\">f</span> 在 <span class=\"chem\">x &lt; 1</span> 時呈下凹（<span class=\"chem\">f''(x) &lt; 0</span>）。",
      ],
    },

    // ── t5-1-q014 · numeric · challenge · SL · SL 5.4 · 7 marks
    "t5-1-q014": {
      // EN: <p>A tangent to the parabola <span class="chem">y = x^2 + 5</span> at a point <span class="chem">P(a, a^2 + 5)</span> in the first quadrant (<span class="chem">a &gt; 0</span>) passes through the point <span class="chem">(0, -4)</span>. Find the value of <span class="chem">a</span>.</p>
      stem: "<p>拋物線 <span class=\"chem\">y = x^2 + 5</span> 在第一象限內一點 <span class=\"chem\">P(a, a^2 + 5)</span>（<span class=\"chem\">a &gt; 0</span>）處的切線通過點 <span class=\"chem\">(0, -4)</span>。求 (Find) <span class=\"chem\">a</span> 的值。</p>",
      hints: [
        // EN: Decode: “passes through <span class="chem">(0, -4)</span>” means that the point <span class="chem">(0, -4)</span> satisfies the equation of the tangent at <span class="chem">P</span>. So write that tangent in terms of <span class="chem">a</span> first, then substitute <span class="chem">x = 0</span>, <span class="chem">y = -4</span> to get an equation in <span class="chem">a</span>.
        "解碼：「通過 <span class=\"chem\">(0, -4)</span>」表示點 <span class=\"chem\">(0, -4)</span> 滿足 <span class=\"chem\">P</span> 處切線的方程。因此先以 <span class=\"chem\">a</span> 寫出該切線，再代入 <span class=\"chem\">x = 0</span>、<span class=\"chem\">y = -4</span>，得出一條關於 <span class=\"chem\">a</span> 的方程。",
        // EN: At <span class="chem">P(a, a^2 + 5)</span>, the gradient of the tangent is <span class="chem">dy/dx = 2a</span>, so the tangent equation is <span class="chem">y - (a^2 + 5) = 2a(x - a)</span>.
        "在 <span class=\"chem\">P(a, a^2 + 5)</span> 處，切線斜率為 <span class=\"chem\">dy/dx = 2a</span>，故切線方程為 <span class=\"chem\">y - (a^2 + 5) = 2a(x - a)</span>。",
        // EN: Substitute the external point <span class="chem">(x, y) = (0, -4)</span> into the tangent equation and solve for <span class="chem">a &gt; 0</span>.
        "將外部點 <span class=\"chem\">(x, y) = (0, -4)</span> 代入切線方程並解出 <span class=\"chem\">a &gt; 0</span>。",
      ],
      // EN: <p>At <span class="chem">P(a, a^2 + 5)</span>, <span class="chem">m_T = 2a</span>, so the tangent line is <span class="chem">y - (a^2 + 5) = 2a(x - a) =&gt; y = 2a x - a^2 + 5</span>. Since it passes through <span class="chem">(0, -4)</span>, substituting <span class="chem">x = 0, y = -4</span> gives <span class="chem">-4 = -a^2 + 5 =&gt; a^2 = 9</span>. Since <span class="chem">a &gt; 0</span>, <span class="chem">a = 3</span>.</p>
      solution: "<p>在 <span class=\"chem\">P(a, a^2 + 5)</span> 處，<span class=\"chem\">m_T = 2a</span>，故切線為 <span class=\"chem\">y - (a^2 + 5) = 2a(x - a) =&gt; y = 2a x - a^2 + 5</span>。因它通過 <span class=\"chem\">(0, -4)</span>，代入 <span class=\"chem\">x = 0, y = -4</span> 得 <span class=\"chem\">-4 = -a^2 + 5 =&gt; a^2 = 9</span>。由於 <span class=\"chem\">a &gt; 0</span>，故 <span class=\"chem\">a = 3</span>。</p>",
    },

    // ── t5-1-q015 · mcq · exam · SL · SL 5.6 · 4 marks
    "t5-1-q015": {
      // EN: <p>Given the table of values at <span class="chem">x = 2</span> and <span class="chem">x = 5</span>:<br><span class="chem">g(2) = 5, g'(2) = -3, f(2) = 4, f'(2) = 7, f(5) = -1, f'(5) = 6</span>.<br>If <span class="chem">h(x) = f(g(x))</span>, find <span class="chem">h'(2)</span>.</p>
      stem: "<p>已知在 <span class=\"chem\">x = 2</span> 與 <span class=\"chem\">x = 5</span> 處的數值表：<br><span class=\"chem\">g(2) = 5, g'(2) = -3, f(2) = 4, f'(2) = 7, f(5) = -1, f'(5) = 6</span>。<br>若 <span class=\"chem\">h(x) = f(g(x))</span>，求 (find) <span class=\"chem\">h'(2)</span>。</p>",
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
        "小心寫出鏈式法則：<span class=\"chem\">h'(x) = f'(g(x)) * g'(x)</span>。",
        // EN: At <span class="chem">x = 2</span>, <span class="chem">h'(2) = f'(g(2)) * g'(2)</span>. Look up <span class="chem">g(2) = 5</span> first, then find <span class="chem">f'(5)</span>.
        "在 <span class=\"chem\">x = 2</span> 處，<span class=\"chem\">h'(2) = f'(g(2)) * g'(2)</span>。先查出 <span class=\"chem\">g(2) = 5</span>，再求 <span class=\"chem\">f'(5)</span>。",
      ],
      // EN: <p>By the chain rule, <span class="chem">h'(2) = f'(g(2)) * g'(2) = f'(5) * (-3) = 6 * (-3) = -18</span>.</p>
      solution: "<p>由鏈式法則，<span class=\"chem\">h'(2) = f'(g(2)) * g'(2) = f'(5) * (-3) = 6 * (-3) = -18</span>。</p>",
      misconception: {
        // EN (option B): −21 comes from computing f'(2) × g'(2) = 7 × (−3). In the chain rule h'(2) = f'(g(2)) · g'(2), f' must be evaluated at g(2) = 5, not at 2!
        "1": "−21 是把 f'(2) × g'(2) = 7 × (−3) 相乘的結果。在鏈式法則 h'(2) = f'(g(2)) · g'(2) 中，f' 必須在 g(2) = 5 處計算，而非在 2 處！",
        // EN (option C): 42 comes from multiplying f'(2) × f'(5) = 7 × 6 instead of f'(g(2)) × g'(2).
        "2": "42 是把 f'(2) × f'(5) = 7 × 6 相乘，而非 f'(g(2)) × g'(2)。",
        // EN (option D): 15 comes from multiplying g(2) × (−g'(2)); use h'(2) = f'(g(2)) · g'(2).
        "3": "15 是把 g(2) × (−g'(2)) 相乘；應使用 h'(2) = f'(g(2)) · g'(2)。",
      },
    },

    // ── t5-1-q016 · short · challenge · SL · SL 5.8 · 8 marks
    "t5-1-q016": {
      // EN: <p>A lifeguard is at point <span class="chem">A</span> on a straight shoreline. A swimmer in distress is at point <span class="chem">B</span> in the water, <span class="chem">60</span> <span class="unit">m</span> perpendicular from a point <span class="chem">C</span> on the shoreline, where the distance <span class="chem">AC = 100</span> <span class="unit">m</span>. The lifeguard runs along the shore from <span class="chem">A</span> to a point <span class="chem">P</span> at a distance <span class="chem">x</span> <span class="unit">m</span> from <span class="chem">C</span> (<span class="chem">0 &lt;= x &lt;= 100</span>) at <span class="chem">5</span> <span class="unit">m s-1</span>, and then swims in a straight line from <span class="chem">P</span> to <span class="chem">B</span> at <span class="chem">3</span> <span class="unit">m s-1</span>.<br>(a) Show that the total time <span class="chem">T</span> seconds taken to reach the swimmer is <span class="chem">T(x) = (100 - x)/5 + sqrt(x^2 + 3600)/3</span>. <strong>[2 marks]</strong><br>(b) Find the value of <span class="chem">x</span> that minimizes <span class="chem">T(x)</span>, and calculate the minimum time required. <strong>[6 marks]</strong></p>
      stem: "<p>一名救生員位於筆直海岸線上的點 <span class=\"chem\">A</span>。一名遇溺泳客位於水中的點 <span class=\"chem\">B</span>，垂直距離海岸線上的點 <span class=\"chem\">C</span> 為 <span class=\"chem\">60</span> <span class=\"unit\">m</span>，其中距離 <span class=\"chem\">AC = 100</span> <span class=\"unit\">m</span>。救生員以 <span class=\"chem\">5</span> <span class=\"unit\">m s-1</span> 沿海岸從 <span class=\"chem\">A</span> 跑向距離 <span class=\"chem\">C</span> 為 <span class=\"chem\">x</span> <span class=\"unit\">m</span> 的點 <span class=\"chem\">P</span>（<span class=\"chem\">0 &lt;= x &lt;= 100</span>），然後以 <span class=\"chem\">3</span> <span class=\"unit\">m s-1</span> 從 <span class=\"chem\">P</span> 直線游向 <span class=\"chem\">B</span>。<br>(a) 證明 (Show that) 到達泳客所需的總時間 <span class=\"chem\">T</span> 秒為 <span class=\"chem\">T(x) = (100 - x)/5 + sqrt(x^2 + 3600)/3</span>。<strong>[2 marks]</strong><br>(b) 求 (Find) 使 <span class=\"chem\">T(x)</span> 最小的 <span class=\"chem\">x</span> 值，並計算 (calculate) 所需的最短時間。<strong>[6 marks]</strong></p>",
      hints: [
        // EN: Decode: the route has two legs at different speeds, so the total time is the sum of distance / speed for each leg. Then minimise <span class="chem">T(x)</span> on the closed interval <span class="chem">0 &lt;= x &lt;= 100</span>: compare the stationary value with the values at the endpoints.
        "解碼：路線分為兩段，速度不同，所以總時間是每一段的「距離 / 速度」之和。然後在閉區間 <span class=\"chem\">0 &lt;= x &lt;= 100</span> 上求 <span class=\"chem\">T(x)</span> 的最小值：把駐點的值與端點的值作比較。",
        // EN: For part (a), use <span class="chem">time = distance / speed</span> for the shore segment <span class="chem">AP = 100 - x</span> and the water hypotenuse <span class="chem">PB = sqrt(x^2 + 60^2)</span>.
        "對於 (a) 部，對岸上路段 <span class=\"chem\">AP = 100 - x</span> 及水中斜邊 <span class=\"chem\">PB = sqrt(x^2 + 60^2)</span> 使用 <span class=\"chem\">time = distance / speed</span>（時間 = 距離 / 速率）。",
        // EN: For part (b), write <span class="chem">sqrt(x^2 + 3600) = (x^2 + 3600)^{1/2}</span> and use the chain rule to differentiate.
        "對於 (b) 部，寫成 <span class=\"chem\">sqrt(x^2 + 3600) = (x^2 + 3600)^{1/2}</span> 並利用鏈式法則求導。",
      ],
      // EN: <p>(a) The shore distance is <span class="chem">AP = 100 - x</span> at <span class="chem">5</span> <span class="unit">m s-1</span>, taking <span class="chem">(100 - x)/5</span> seconds. By Pythagoras in right triangle <span class="chem">PCB</span>, <span class="chem">PB = sqrt(x^2 + 60^2) = sqrt(x^2 + 3600)</span> at <span class="chem">3</span> <span class="unit">m s-1</span>, giving <span class="chem">T(x) = (100 - x)/5 + sqrt(x^2 + 3600)/3</span>.<br>(b) Differentiating gives <span class="chem">T'(x) = -1/5 + (1/3) * (2x) / (2 sqrt(x^2 + 3600)) = 0 =&gt; 5x = 3 sqrt(x^2 + 3600)</span>. Squaring gives <span class="chem">25x^2 = 9x^2 + 32400 =&gt; 16x^2 = 32400 =&gt; x^2 = 2025 =&gt; x = 45</span> <span class="unit">m</span> (with <span class="chem">T'(x)</span> changing from <span class="chem">-</span> to <span class="chem">+</span>). Then <span class="chem">T(45) = (100 - 45)/5 + sqrt(2025 + 3600)/3 = 11 + 75/3 = 36</span> <span class="unit">s</span>.</p>
      solution: "<p>(a) 岸上距離為 <span class=\"chem\">AP = 100 - x</span>，速率為 <span class=\"chem\">5</span> <span class=\"unit\">m s-1</span>，需時 <span class=\"chem\">(100 - x)/5</span> 秒。在直角三角形 <span class=\"chem\">PCB</span> 中由畢氏定理得 <span class=\"chem\">PB = sqrt(x^2 + 60^2) = sqrt(x^2 + 3600)</span>，速率為 <span class=\"chem\">3</span> <span class=\"unit\">m s-1</span>，故 <span class=\"chem\">T(x) = (100 - x)/5 + sqrt(x^2 + 3600)/3</span>。<br>(b) 求導得 <span class=\"chem\">T'(x) = -1/5 + (1/3) * (2x) / (2 sqrt(x^2 + 3600)) = 0 =&gt; 5x = 3 sqrt(x^2 + 3600)</span>。兩邊平方得 <span class=\"chem\">25x^2 = 9x^2 + 32400 =&gt; 16x^2 = 32400 =&gt; x^2 = 2025 =&gt; x = 45</span> <span class=\"unit\">m</span>（且 <span class=\"chem\">T'(x)</span> 由 <span class=\"chem\">-</span> 變為 <span class=\"chem\">+</span>）。因此 <span class=\"chem\">T(45) = (100 - 45)/5 + sqrt(2025 + 3600)/3 = 11 + 75/3 = 36</span> <span class=\"unit\">s</span>。</p>",
      // EN: <p><span class="chem">x = 45</span> <span class="unit">m</span>; minimum time <span class="chem">T = 36</span> <span class="unit">s</span>.</p>
      answer: "<p><span class=\"chem\">x = 45</span> <span class=\"unit\">m</span>；最短時間 <span class=\"chem\">T = 36</span> <span class=\"unit\">s</span>。</p>",
      markscheme: [
        // EN: M1: Use Pythagoras' theorem for the swimming distance: <span class="chem">PB = sqrt(x^2 + 60^2)</span>.
        "M1：利用畢氏定理求游泳距離：<span class=\"chem\">PB = sqrt(x^2 + 60^2)</span>。",
        // EN: A1: Correct distances <span class="chem">AP = 100 - x</span> and <span class="chem">PB = sqrt(x^2 + 3600)</span>; dividing each by its speed gives <span class="chem">T(x) = (100 - x)/5 + sqrt(x^2 + 3600)/3</span> AG.
        "A1：正確的距離 <span class=\"chem\">AP = 100 - x</span> 及 <span class=\"chem\">PB = sqrt(x^2 + 3600)</span>；將各段距離除以其速率，得 <span class=\"chem\">T(x) = (100 - x)/5 + sqrt(x^2 + 3600)/3</span> AG。",
        // EN: M1: Differentiate using the chain rule.
        "M1：利用鏈式法則求導。",
        // EN: A1: <span class="chem">T'(x) = -1/5 + x / (3 sqrt(x^2 + 3600))</span>.
        "A1：<span class=\"chem\">T'(x) = -1/5 + x / (3 sqrt(x^2 + 3600))</span>。",
        // EN: M1: Set <span class="chem">T'(x) = 0 =&gt; 5x = 3 sqrt(x^2 + 3600)</span> and square both sides: <span class="chem">25x^2 = 9(x^2 + 3600)</span>.
        "M1：令 <span class=\"chem\">T'(x) = 0 =&gt; 5x = 3 sqrt(x^2 + 3600)</span> 並兩邊平方：<span class=\"chem\">25x^2 = 9(x^2 + 3600)</span>。",
        // EN: A1: Solve <span class="chem">16x^2 = 9 * 3600 =&gt; 4x = 3 * 60 =&gt; x = 45</span> <span class="unit">m</span>.
        "A1：解 <span class=\"chem\">16x^2 = 9 * 3600 =&gt; 4x = 3 * 60 =&gt; x = 45</span> <span class=\"unit\">m</span>。",
        // EN: R1: Justify the minimum: <span class="chem">T'(x)</span> changes sign from <span class="chem">-</span> to <span class="chem">+</span> at <span class="chem">x = 45</span> (or compare <span class="chem">T(45) = 36</span> with the endpoint values <span class="chem">T(0) = 40</span> and <span class="chem">T(100) ≈ 38.9</span>).
        "R1：證明為極小值：<span class=\"chem\">T'(x)</span> 在 <span class=\"chem\">x = 45</span> 處由 <span class=\"chem\">-</span> 變為 <span class=\"chem\">+</span>（或將 <span class=\"chem\">T(45) = 36</span> 與端點值 <span class=\"chem\">T(0) = 40</span> 及 <span class=\"chem\">T(100) ≈ 38.9</span> 比較）。",
        // EN: A1: Substitute <span class="chem">x = 45</span> into <span class="chem">T(x)</span>: <span class="chem">T(45) = 55/5 + sqrt(2025 + 3600)/3 = 11 + 75/3 = 36</span> <span class="unit">s</span>.
        "A1：將 <span class=\"chem\">x = 45</span> 代入 <span class=\"chem\">T(x)</span>：<span class=\"chem\">T(45) = 55/5 + sqrt(2025 + 3600)/3 = 11 + 75/3 = 36</span> <span class=\"unit\">s</span>。",
      ],
    },

    // ── t5-1-q017 · numeric · challenge · SL · SL 5.7, 5.8 · 6 marks
    "t5-1-q017": {
      // EN: <p>The cubic curve <span class="chem">f(x) = a x^3 + b x^2 + c x + d</span> has a local maximum at <span class="chem">(0, 4)</span> and a point of inflexion at <span class="chem">(1, 2)</span>. Find the value of <span class="chem">a</span>.</p>
      stem: "<p>三次曲線 <span class=\"chem\">f(x) = a x^3 + b x^2 + c x + d</span> 在 <span class=\"chem\">(0, 4)</span> 處有局部極大值，並在 <span class=\"chem\">(1, 2)</span> 處有拐點。求 (Find) <span class=\"chem\">a</span> 的值。</p>",
      hints: [
        // EN: Decode: each fact gives equations. A local maximum at <span class="chem">(0, 4)</span> gives <span class="chem">f(0) = 4</span> and <span class="chem">f'(0) = 0</span>; a point of inflexion at <span class="chem">(1, 2)</span> gives <span class="chem">f(1) = 2</span> and <span class="chem">f''(1) = 0</span>. That is four equations for the four unknowns <span class="chem">a, b, c, d</span>.
        "解碼：每項資料都給出方程。在 <span class=\"chem\">(0, 4)</span> 有局部極大值，給出 <span class=\"chem\">f(0) = 4</span> 及 <span class=\"chem\">f'(0) = 0</span>；在 <span class=\"chem\">(1, 2)</span> 有拐點，給出 <span class=\"chem\">f(1) = 2</span> 及 <span class=\"chem\">f''(1) = 0</span>。這就是四個未知數 <span class=\"chem\">a, b, c, d</span> 的四條方程。",
        // EN: Use <span class="chem">f(0) = 4</span> and <span class="chem">f'(0) = 0</span> to find <span class="chem">d = 4</span> and <span class="chem">c = 0</span> immediately!
        "利用 <span class=\"chem\">f(0) = 4</span> 與 <span class=\"chem\">f'(0) = 0</span> 立即求得 <span class=\"chem\">d = 4</span> 及 <span class=\"chem\">c = 0</span>！",
        // EN: Next use <span class="chem">f''(1) = 6a(1) + 2b = 0 =&gt; b = -3a</span>, and substitute into <span class="chem">f(1) = a + b + 4 = 2</span>.
        "接著利用 <span class=\"chem\">f''(1) = 6a(1) + 2b = 0 =&gt; b = -3a</span>，並代入 <span class=\"chem\">f(1) = a + b + 4 = 2</span>。",
      ],
      // EN: <p>We have <span class="chem">f'(x) = 3a x^2 + 2b x + c</span> and <span class="chem">f''(x) = 6a x + 2b</span>. Since <span class="chem">(0, 4)</span> is a local maximum, <span class="chem">f(0) = d = 4</span> and <span class="chem">f'(0) = c = 0</span>. Since <span class="chem">(1, 2)</span> is a point of inflexion, <span class="chem">f''(1) = 6a + 2b = 0 =&gt; b = -3a</span>, and <span class="chem">f(1) = a + b + 4 = 2 =&gt; a - 3a = -2 =&gt; -2a = -2 =&gt; a = 1</span>.</p>
      solution: "<p>我們有 <span class=\"chem\">f'(x) = 3a x^2 + 2b x + c</span> 及 <span class=\"chem\">f''(x) = 6a x + 2b</span>。由於 <span class=\"chem\">(0, 4)</span> 是局部極大值，故 <span class=\"chem\">f(0) = d = 4</span> 且 <span class=\"chem\">f'(0) = c = 0</span>。由於 <span class=\"chem\">(1, 2)</span> 是拐點，故 <span class=\"chem\">f''(1) = 6a + 2b = 0 =&gt; b = -3a</span>，且 <span class=\"chem\">f(1) = a + b + 4 = 2 =&gt; a - 3a = -2 =&gt; -2a = -2 =&gt; a = 1</span>。</p>",
    },

    // ── t5-1-q018 · numeric · foundation · SL · SL 5.1 · 2 marks
    "t5-1-q018": {
      // EN: <p>The depth of water in a tank is <span class="chem">D(t) = 2t^2 - 3t + 10</span> <span class="unit">cm</span>, where <span class="chem">t</span> is the time in minutes. The average rate of change of the depth between <span class="chem">t = 2</span> and <span class="chem">t = 2 + h</span> is <span class="chem">(D(2 + h) - D(2)) / h = 5 + 2h</span>. By considering the limit as <span class="chem">h -&gt; 0</span>, find the rate at which the depth is changing when <span class="chem">t = 2</span>, in <span class="unit">cm</span> per minute.</p>
      stem: "<p>水箱中的水深為 <span class=\"chem\">D(t) = 2t^2 - 3t + 10</span> <span class=\"unit\">cm</span>，其中 <span class=\"chem\">t</span> 為時間（分鐘）。水深在 <span class=\"chem\">t = 2</span> 與 <span class=\"chem\">t = 2 + h</span> 之間的平均變化率為 <span class=\"chem\">(D(2 + h) - D(2)) / h = 5 + 2h</span>。考慮 <span class=\"chem\">h -&gt; 0</span> 時的極限，求 (Find) 當 <span class=\"chem\">t = 2</span> 時水深的變化率（以每分鐘 <span class=\"unit\">cm</span> 為單位）。</p>",
      hints: [
        // EN: The instantaneous rate of change is the limit of the average rate of change (the gradient of the chord) as <span class="chem">h -&gt; 0</span>.
        "瞬時變化率是 <span class=\"chem\">h -&gt; 0</span> 時平均變化率（弦的斜率）的極限。",
        // EN: Let <span class="chem">h</span> get closer and closer to <span class="chem">0</span> in <span class="chem">5 + 2h</span>. You can check your answer with <span class="chem">D'(t) = 4t - 3</span>.
        "讓 <span class=\"chem\">5 + 2h</span> 中的 <span class=\"chem\">h</span> 愈來愈接近 <span class=\"chem\">0</span>。你可以用 <span class=\"chem\">D'(t) = 4t - 3</span> 驗算答案。",
      ],
      // EN: <p>As <span class="chem">h -&gt; 0</span>, <span class="chem">5 + 2h -&gt; 5</span>, so <span class="chem">D'(2) = 5</span>: the depth is increasing at <span class="chem">5</span> <span class="unit">cm</span> per minute when <span class="chem">t = 2</span>. Check: <span class="chem">D'(t) = 4t - 3</span>, so <span class="chem">D'(2) = 8 - 3 = 5</span>.</p>
      solution: "<p>當 <span class=\"chem\">h -&gt; 0</span> 時，<span class=\"chem\">5 + 2h -&gt; 5</span>，故 <span class=\"chem\">D'(2) = 5</span>：在 <span class=\"chem\">t = 2</span> 時，水深以每分鐘 <span class=\"chem\">5</span> <span class=\"unit\">cm</span> 的速率增加。驗算：<span class=\"chem\">D'(t) = 4t - 3</span>，故 <span class=\"chem\">D'(2) = 8 - 3 = 5</span>。</p>",
    },

  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('zh-Hant', 't5-1.q', {
  questions: {

    // ── t5-1-q019 · numeric · foundation · SL · SL 5.1 · 2 marks
    "t5-1-q019": {
      // EN: <p>The point <span class="chem">P(2, 8)</span> lies on the curve <span class="chem">y = x^3</span>. For the point <span class="chem">Q(2 + h, (2 + h)^3)</span>, the gradient of the chord <span class="chem">PQ</span> is <span class="chem">12.61</span> when <span class="chem">h = 0.1</span>, <span class="chem">12.0601</span> when <span class="chem">h = 0.01</span> and <span class="chem">12.006001</span> when <span class="chem">h = 0.001</span>. Deduce the gradient of the tangent to the curve at <span class="chem">P</span>.</p>
      stem: "<p>點 <span class=\"chem\">P(2, 8)</span> 位於曲線 <span class=\"chem\">y = x^3</span> 上。對於點 <span class=\"chem\">Q(2 + h, (2 + h)^3)</span>，當 <span class=\"chem\">h = 0.1</span> 時弦 <span class=\"chem\">PQ</span> 的斜率為 <span class=\"chem\">12.61</span>，當 <span class=\"chem\">h = 0.01</span> 時為 <span class=\"chem\">12.0601</span>，當 <span class=\"chem\">h = 0.001</span> 時為 <span class=\"chem\">12.006001</span>。推斷 (Deduce) 曲線在 <span class=\"chem\">P</span> 處的切線斜率。</p>",
      hints: [
        // EN: As <span class="chem">Q</span> slides along the curve towards <span class="chem">P</span> (that is, <span class="chem">h -&gt; 0</span>), the chord <span class="chem">PQ</span> turns into the tangent at <span class="chem">P</span>.
        "當 <span class=\"chem\">Q</span> 沿曲線向 <span class=\"chem\">P</span> 滑動（即 <span class=\"chem\">h -&gt; 0</span>）時，弦 <span class=\"chem\">PQ</span> 會變成 <span class=\"chem\">P</span> 處的切線。",
        // EN: Look at the pattern in the chord gradients as <span class="chem">h</span> gets smaller. What single number are they closing in on?
        "觀察 <span class=\"chem\">h</span> 越來越小時弦斜率的規律。它們正趨近哪一個數？",
      ],
      // EN: <p>The gradient of the tangent at <span class="chem">P</span> is the limit of the chord gradients as <span class="chem">h -&gt; 0</span>. The values <span class="chem">12.61, 12.0601, 12.006001</span> approach <span class="chem">12</span>, so the gradient at <span class="chem">P</span> is <span class="chem">12</span>. (Check: the chord gradient is <span class="chem">((2 + h)^3 - 8) / h = 12 + 6h + h^2 -&gt; 12</span>, and <span class="chem">dy/dx = 3x^2 = 12</span> at <span class="chem">x = 2</span>.)</p>
      solution: "<p><span class=\"chem\">P</span> 處的切線斜率是 <span class=\"chem\">h -&gt; 0</span> 時弦斜率的極限。數值 <span class=\"chem\">12.61, 12.0601, 12.006001</span> 趨近 <span class=\"chem\">12</span>，故 <span class=\"chem\">P</span> 處的斜率為 <span class=\"chem\">12</span>。（驗算：弦斜率為 <span class=\"chem\">((2 + h)^3 - 8) / h = 12 + 6h + h^2 -&gt; 12</span>，而在 <span class=\"chem\">x = 2</span> 處 <span class=\"chem\">dy/dx = 3x^2 = 12</span>。）</p>",
    },

    // ── t5-1-q020 · numeric · foundation · SL · SL 5.3 · 2 marks
    "t5-1-q020": {
      // EN: <p>Let <span class="chem">f(x) = 4x^3 - 6 / x + 7</span> for <span class="chem">x != 0</span>. Find <span class="chem">f'(-1)</span>.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = 4x^3 - 6 / x + 7</span>，其中 <span class=\"chem\">x != 0</span>。求 (Find) <span class=\"chem\">f'(-1)</span>。</p>",
      hints: [
        // EN: Write <span class="chem">6 / x</span> as <span class="chem">6x^{-1}</span> before you differentiate.
        "求導前先把 <span class=\"chem\">6 / x</span> 寫成 <span class=\"chem\">6x^{-1}</span>。",
        // EN: You should get <span class="chem">f'(x) = 12x^2 + 6x^{-2}</span>. Now substitute <span class="chem">x = -1</span> carefully.
        "你應得到 <span class=\"chem\">f'(x) = 12x^2 + 6x^{-2}</span>。然後小心代入 <span class=\"chem\">x = -1</span>。",
      ],
      // EN: <p><span class="chem">f(x) = 4x^3 - 6x^{-1} + 7</span>, so <span class="chem">f'(x) = 12x^2 + 6x^{-2} = 12x^2 + 6 / x^2</span>. Then <span class="chem">f'(-1) = 12(1) + 6 / 1 = 18</span>.</p>
      solution: "<p><span class=\"chem\">f(x) = 4x^3 - 6x^{-1} + 7</span>，故 <span class=\"chem\">f'(x) = 12x^2 + 6x^{-2} = 12x^2 + 6 / x^2</span>。於是 <span class=\"chem\">f'(-1) = 12(1) + 6 / 1 = 18</span>。</p>",
    },

    // ── t5-1-q021 · short · exam · SL · SL 5.2, 5.3 · 4 marks
    "t5-1-q021": {
      // EN: <p>Let <span class="chem">f(x) = 2x^3 - 9x^2 - 24x + 5</span>. Find the set of values of <span class="chem">x</span> for which <span class="chem">f</span> is decreasing. <strong>[4 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = 2x^3 - 9x^2 - 24x + 5</span>。求 (Find) 使 <span class=\"chem\">f</span> 遞減的 <span class=\"chem\">x</span> 值的集合。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: <span class="chem">f</span> is decreasing where its gradient <span class="chem">f'(x)</span> is negative.
        "<span class=\"chem\">f</span> 在其斜率 <span class=\"chem\">f'(x)</span> 為負的地方遞減。",
        // EN: Factorise <span class="chem">f'(x) = 6x^2 - 18x - 24 = 6(x^2 - 3x - 4)</span>, then decide where the quadratic is below the <span class="chem">x</span>-axis.
        "因式分解 <span class=\"chem\">f'(x) = 6x^2 - 18x - 24 = 6(x^2 - 3x - 4)</span>，然後判斷該二次式在 <span class=\"chem\">x</span> 軸下方的範圍。",
      ],
      // EN: <p><span class="chem">f'(x) = 6x^2 - 18x - 24 = 6(x - 4)(x + 1)</span>. This is a positive quadratic with roots <span class="chem">-1</span> and <span class="chem">4</span>, so <span class="chem">f'(x) &lt; 0</span> between the roots: <span class="chem">f</span> is decreasing for <span class="chem">-1 &lt; x &lt; 4</span>.</p>
      solution: "<p><span class=\"chem\">f'(x) = 6x^2 - 18x - 24 = 6(x - 4)(x + 1)</span>。這是一個首項係數為正的二次式，根為 <span class=\"chem\">-1</span> 及 <span class=\"chem\">4</span>，故在兩根之間 <span class=\"chem\">f'(x) &lt; 0</span>：<span class=\"chem\">f</span> 在 <span class=\"chem\">-1 &lt; x &lt; 4</span> 時遞減。</p>",
      // EN: <p><span class="chem">-1 &lt; x &lt; 4</span> (or <span class="chem">-1 &lt;= x &lt;= 4</span>).</p>
      answer: "<p><span class=\"chem\">-1 &lt; x &lt; 4</span>（或 <span class=\"chem\">-1 &lt;= x &lt;= 4</span>）。</p>",
      markscheme: [
        // EN: A1: <span class="chem">f'(x) = 6x^2 - 18x - 24</span>.
        "A1：<span class=\"chem\">f'(x) = 6x^2 - 18x - 24</span>。",
        // EN: M1: Sets <span class="chem">f'(x) &lt; 0</span> (or solves <span class="chem">f'(x) = 0</span>), e.g. <span class="chem">6(x - 4)(x + 1)</span>.
        "M1：設 <span class=\"chem\">f'(x) &lt; 0</span>（或解 <span class=\"chem\">f'(x) = 0</span>），例如 <span class=\"chem\">6(x - 4)(x + 1)</span>。",
        // EN: A1: Critical values <span class="chem">x = -1</span> and <span class="chem">x = 4</span>.
        "A1：臨界值 <span class=\"chem\">x = -1</span> 及 <span class=\"chem\">x = 4</span>。",
        // EN: A1: <span class="chem">-1 &lt; x &lt; 4</span> (accept <span class="chem">-1 &lt;= x &lt;= 4</span>).
        "A1：<span class=\"chem\">-1 &lt; x &lt; 4</span>（接受 <span class=\"chem\">-1 &lt;= x &lt;= 4</span>）。",
      ],
    },

    // ── t5-1-q022 · numeric · exam · SL · SL 5.6 · 4 marks
    "t5-1-q022": {
      // EN: <p>Let <span class="chem">f(x) = x sqrt(2x + 5)</span> for <span class="chem">x &gt; -5/2</span>. Find the exact value of <span class="chem">f'(2)</span>.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = x sqrt(2x + 5)</span>，其中 <span class=\"chem\">x &gt; -5/2</span>。求 (Find) <span class=\"chem\">f'(2)</span> 的準確值。</p>",
      hints: [
        // EN: This is a product <span class="chem">u v</span> with <span class="chem">u = x</span> and <span class="chem">v = (2x + 5)^{1/2}</span>. Differentiating <span class="chem">v</span> needs the chain rule.
        "這是一個乘積 <span class=\"chem\">u v</span>，其中 <span class=\"chem\">u = x</span> 及 <span class=\"chem\">v = (2x + 5)^{1/2}</span>。對 <span class=\"chem\">v</span> 求導需要用鏈式法則。",
        // EN: <span class="chem">v' = (1/2)(2x + 5)^{-1/2} * 2 = 1 / sqrt(2x + 5)</span>, so <span class="chem">f'(x) = sqrt(2x + 5) + x / sqrt(2x + 5)</span>.
        "<span class=\"chem\">v' = (1/2)(2x + 5)^{-1/2} * 2 = 1 / sqrt(2x + 5)</span>，故 <span class=\"chem\">f'(x) = sqrt(2x + 5) + x / sqrt(2x + 5)</span>。",
      ],
      // EN: <p>By the product and chain rules, <span class="chem">f'(x) = 1 * sqrt(2x + 5) + x * (1/2)(2x + 5)^{-1/2} * 2 = sqrt(2x + 5) + x / sqrt(2x + 5)</span>. At <span class="chem">x = 2</span>, <span class="chem">sqrt(9) = 3</span>, so <span class="chem">f'(2) = 3 + 2/3 = 11/3</span>.</p>
      solution: "<p>利用積法則及鏈式法則，<span class=\"chem\">f'(x) = 1 * sqrt(2x + 5) + x * (1/2)(2x + 5)^{-1/2} * 2 = sqrt(2x + 5) + x / sqrt(2x + 5)</span>。在 <span class=\"chem\">x = 2</span> 處，<span class=\"chem\">sqrt(9) = 3</span>，故 <span class=\"chem\">f'(2) = 3 + 2/3 = 11/3</span>。</p>",
    },

    // ── t5-1-q023 · numeric · exam · SL · SL 5.4, 5.6 · 5 marks
    "t5-1-q023": {
      // EN: <p>The tangent to the curve <span class="chem">y = e^{2x} ln x</span> at the point where <span class="chem">x = 1</span> meets the <span class="chem">y</span>-axis at <span class="chem">(0, k)</span>. Find the exact value of <span class="chem">k</span>.</p>
      stem: "<p>曲線 <span class=\"chem\">y = e^{2x} ln x</span> 在 <span class=\"chem\">x = 1</span> 的點處的切線與 <span class=\"chem\">y</span> 軸相交於 <span class=\"chem\">(0, k)</span>。求 (Find) <span class=\"chem\">k</span> 的準確值。</p>",
      hints: [
        // EN: First find the point of contact: at <span class="chem">x = 1</span>, <span class="chem">ln 1 = 0</span>, so <span class="chem">y = 0</span>.
        "先求切點：在 <span class=\"chem\">x = 1</span> 處，<span class=\"chem\">ln 1 = 0</span>，故 <span class=\"chem\">y = 0</span>。",
        // EN: Use the product rule: <span class="chem">dy/dx = 2e^{2x} ln x + e^{2x} / x</span>. Evaluate it at <span class="chem">x = 1</span>, write the tangent, then put <span class="chem">x = 0</span>.
        "利用積法則：<span class=\"chem\">dy/dx = 2e^{2x} ln x + e^{2x} / x</span>。求它在 <span class=\"chem\">x = 1</span> 處的值，寫出切線，然後代入 <span class=\"chem\">x = 0</span>。",
      ],
      // EN: <p>At <span class="chem">x = 1</span>, <span class="chem">y = e^2 ln 1 = 0</span>. By the product rule, <span class="chem">dy/dx = 2e^{2x} ln x + e^{2x} * (1/x)</span>, so at <span class="chem">x = 1</span> the gradient is <span class="chem">0 + e^2 = e^2</span>. The tangent is <span class="chem">y - 0 = e^2(x - 1)</span>. At <span class="chem">x = 0</span>, <span class="chem">y = -e^2</span>, so <span class="chem">k = -e^2</span>.</p>
      solution: "<p>在 <span class=\"chem\">x = 1</span> 處，<span class=\"chem\">y = e^2 ln 1 = 0</span>。利用積法則，<span class=\"chem\">dy/dx = 2e^{2x} ln x + e^{2x} * (1/x)</span>，故在 <span class=\"chem\">x = 1</span> 處的斜率為 <span class=\"chem\">0 + e^2 = e^2</span>。切線為 <span class=\"chem\">y - 0 = e^2(x - 1)</span>。當 <span class=\"chem\">x = 0</span> 時，<span class=\"chem\">y = -e^2</span>，故 <span class=\"chem\">k = -e^2</span>。</p>",
    },

    // ── t5-1-q024 · short · exam · SL · SL 5.6, 5.8 · 6 marks
    "t5-1-q024": {
      // EN: <p>Let <span class="chem">f(x) = (x + 1) / (x^2 + 3)</span> for <span class="chem">x \in \mathbb{R}</span>.<br>(a) Show that <span class="chem">f'(x) = (3 - 2x - x^2) / (x^2 + 3)^2</span>. <strong>[2 marks]</strong><br>(b) Hence find the coordinates of the local maximum point on the graph of <span class="chem">f</span>, justifying that it is a maximum. <strong>[4 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = (x + 1) / (x^2 + 3)</span>，其中 <span class=\"chem\">x \\in \\mathbb{R}</span>。<br>(a) 證明 (Show that) <span class=\"chem\">f'(x) = (3 - 2x - x^2) / (x^2 + 3)^2</span>。<strong>[2 marks]</strong><br>(b) 由此 (Hence) 求 <span class=\"chem\">f</span> 圖像上局部極大點的坐標，並說明它為何是極大點。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: For (a), take <span class="chem">u = x + 1</span> and <span class="chem">v = x^2 + 3</span> in <span class="chem">(v u' - u v') / v^2</span>.
        "對於 (a) 部，在 <span class=\"chem\">(v u' - u v') / v^2</span> 中取 <span class=\"chem\">u = x + 1</span> 及 <span class=\"chem\">v = x^2 + 3</span>。",
        // EN: For (b), the denominator <span class="chem">(x^2 + 3)^2</span> is always positive, so the sign of <span class="chem">f'(x)</span> is the sign of the numerator <span class="chem">-(x + 3)(x - 1)</span>.
        "對於 (b) 部，分母 <span class=\"chem\">(x^2 + 3)^2</span> 恆為正，故 <span class=\"chem\">f'(x)</span> 的正負與分子 <span class=\"chem\">-(x + 3)(x - 1)</span> 的正負相同。",
      ],
      // EN: <p>(a) <span class="chem">f'(x) = ((x^2 + 3) - (x + 1)(2x)) / (x^2 + 3)^2 = (x^2 + 3 - 2x^2 - 2x) / (x^2 + 3)^2 = (3 - 2x - x^2) / (x^2 + 3)^2</span>.<br>(b) <span class="chem">f'(x) = 0 &lt;=&gt; 3 - 2x - x^2 = -(x + 3)(x - 1) = 0</span>, so <span class="chem">x = -3</span> or <span class="chem">x = 1</span>. The denominator is positive, and the numerator is positive for <span class="chem">-3 &lt; x &lt; 1</span> and negative for <span class="chem">x &gt; 1</span>, so <span class="chem">f'</span> changes from <span class="chem">+</span> to <span class="chem">-</span> at <span class="chem">x = 1</span>: a local maximum. <span class="chem">f(1) = 2/4 = 1/2</span>, so the maximum is at <span class="chem">(1, 1/2)</span>. (At <span class="chem">x = -3</span> the sign goes from <span class="chem">-</span> to <span class="chem">+</span>: a local minimum <span class="chem">(-3, -1/6)</span>.)</p>
      solution: "<p>(a) <span class=\"chem\">f'(x) = ((x^2 + 3) - (x + 1)(2x)) / (x^2 + 3)^2 = (x^2 + 3 - 2x^2 - 2x) / (x^2 + 3)^2 = (3 - 2x - x^2) / (x^2 + 3)^2</span>。<br>(b) <span class=\"chem\">f'(x) = 0 &lt;=&gt; 3 - 2x - x^2 = -(x + 3)(x - 1) = 0</span>，故 <span class=\"chem\">x = -3</span> 或 <span class=\"chem\">x = 1</span>。分母為正，而分子在 <span class=\"chem\">-3 &lt; x &lt; 1</span> 時為正、在 <span class=\"chem\">x &gt; 1</span> 時為負，故 <span class=\"chem\">f'</span> 在 <span class=\"chem\">x = 1</span> 處由 <span class=\"chem\">+</span> 變為 <span class=\"chem\">-</span>：局部極大。<span class=\"chem\">f(1) = 2/4 = 1/2</span>，故極大點位於 <span class=\"chem\">(1, 1/2)</span>。（在 <span class=\"chem\">x = -3</span> 處正負號由 <span class=\"chem\">-</span> 變為 <span class=\"chem\">+</span>：局部極小點 <span class=\"chem\">(-3, -1/6)</span>。）</p>",
      // EN: <p>(a) Quotient rule, then simplify the numerator.<br>(b) Local maximum at <span class="chem">(1, 1/2)</span>; <span class="chem">f'</span> changes from positive to negative at <span class="chem">x = 1</span>.</p>
      answer: "<p>(a) 用商法則，然後化簡分子。<br>(b) 局部極大點位於 <span class=\"chem\">(1, 1/2)</span>；<span class=\"chem\">f'</span> 在 <span class=\"chem\">x = 1</span> 處由正變負。</p>",
      markscheme: [
        // EN: M1: Substitutes into the quotient rule: <span class="chem">f'(x) = ((x^2 + 3)(1) - (x + 1)(2x)) / (x^2 + 3)^2</span>.
        "M1：代入商法則：<span class=\"chem\">f'(x) = ((x^2 + 3)(1) - (x + 1)(2x)) / (x^2 + 3)^2</span>。",
        // EN: A1: Expands the numerator <span class="chem">x^2 + 3 - 2x^2 - 2x = 3 - 2x - x^2</span>, giving the result (AG).
        "A1：展開分子 <span class=\"chem\">x^2 + 3 - 2x^2 - 2x = 3 - 2x - x^2</span>，得出結果 (AG)。",
        // EN: M1: Sets the numerator equal to zero: <span class="chem">3 - 2x - x^2 = -(x + 3)(x - 1) = 0</span>.
        "M1：設分子等於零：<span class=\"chem\">3 - 2x - x^2 = -(x + 3)(x - 1) = 0</span>。",
        // EN: A1: <span class="chem">x = 1</span> (and <span class="chem">x = -3</span>).
        "A1：<span class=\"chem\">x = 1</span>（及 <span class=\"chem\">x = -3</span>）。",
        // EN: R1: <span class="chem">f'</span> changes from positive to negative at <span class="chem">x = 1</span> (e.g. <span class="chem">f'(0) = 1/3 &gt; 0</span>, <span class="chem">f'(2) = -5/49 &lt; 0</span>), so it is a maximum.
        "R1：<span class=\"chem\">f'</span> 在 <span class=\"chem\">x = 1</span> 處由正變負（例如 <span class=\"chem\">f'(0) = 1/3 &gt; 0</span>，<span class=\"chem\">f'(2) = -5/49 &lt; 0</span>），故為極大點。",
        // EN: A1: <span class="chem">(1, 1/2)</span>.
        "A1：<span class=\"chem\">(1, 1/2)</span>。",
      ],
    },

    // ── t5-1-q025 · short · exam · SL · SL 5.7, 5.8 · 7 marks
    "t5-1-q025": {
      // EN: <p>Let <span class="chem">f(x) = x^4 - 4x^3 + 10</span>.<br>(a) Find <span class="chem">f'(x)</span> and <span class="chem">f''(x)</span>. <strong>[2 marks]</strong><br>(b) Find the coordinates of the points of inflexion on the graph of <span class="chem">f</span>, justifying your answer. <strong>[4 marks]</strong><br>(c) Determine which of these points is a stationary point of inflexion. <strong>[1 mark]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = x^4 - 4x^3 + 10</span>。<br>(a) 求 (Find) <span class=\"chem\">f'(x)</span> 及 <span class=\"chem\">f''(x)</span>。<strong>[2 marks]</strong><br>(b) 求 (Find) <span class=\"chem\">f</span> 圖像上拐點的坐標，並說明理由。<strong>[4 marks]</strong><br>(c) 判斷 (Determine) 這些點中哪一點是駐拐點（水平拐點）。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: A point of inflexion needs two things: <span class="chem">f''(x) = 0</span> <strong>and</strong> <span class="chem">f''(x)</span> changes sign there.
        "拐點需要兩個條件：<span class=\"chem\">f''(x) = 0</span> <strong>及</strong> <span class=\"chem\">f''(x)</span> 在該處變號。",
        // EN: <span class="chem">f''(x) = 12x(x - 2)</span>. Test the sign of <span class="chem">f''</span> on each side of <span class="chem">x = 0</span> and <span class="chem">x = 2</span>. For (c), a stationary point of inflexion also has <span class="chem">f'(x) = 0</span>.
        "<span class=\"chem\">f''(x) = 12x(x - 2)</span>。檢驗 <span class=\"chem\">f''</span> 在 <span class=\"chem\">x = 0</span> 及 <span class=\"chem\">x = 2</span> 兩側的正負。對於 (c) 部，駐拐點還須滿足 <span class=\"chem\">f'(x) = 0</span>。",
      ],
      // EN: <p>(a) <span class="chem">f'(x) = 4x^3 - 12x^2</span> and <span class="chem">f''(x) = 12x^2 - 24x</span>.<br>(b) <span class="chem">f''(x) = 12x(x - 2) = 0 =&gt; x = 0</span> or <span class="chem">x = 2</span>. Signs: <span class="chem">f''(-1) = 36 &gt; 0</span>, <span class="chem">f''(1) = -12 &lt; 0</span>, <span class="chem">f''(3) = 36 &gt; 0</span>, so <span class="chem">f''</span> changes sign at both. <span class="chem">f(0) = 10</span> and <span class="chem">f(2) = 16 - 32 + 10 = -6</span>: the points of inflexion are <span class="chem">(0, 10)</span> and <span class="chem">(2, -6)</span>.<br>(c) <span class="chem">f'(0) = 0</span>, so <span class="chem">(0, 10)</span> is a stationary point of inflexion. <span class="chem">f'(2) = 32 - 48 = -16 != 0</span>, so <span class="chem">(2, -6)</span> is a non-stationary point of inflexion.</p>
      solution: "<p>(a) <span class=\"chem\">f'(x) = 4x^3 - 12x^2</span> 及 <span class=\"chem\">f''(x) = 12x^2 - 24x</span>。<br>(b) <span class=\"chem\">f''(x) = 12x(x - 2) = 0 =&gt; x = 0</span> 或 <span class=\"chem\">x = 2</span>。正負號：<span class=\"chem\">f''(-1) = 36 &gt; 0</span>，<span class=\"chem\">f''(1) = -12 &lt; 0</span>，<span class=\"chem\">f''(3) = 36 &gt; 0</span>，故 <span class=\"chem\">f''</span> 在兩處均變號。<span class=\"chem\">f(0) = 10</span> 及 <span class=\"chem\">f(2) = 16 - 32 + 10 = -6</span>：拐點為 <span class=\"chem\">(0, 10)</span> 及 <span class=\"chem\">(2, -6)</span>。<br>(c) <span class=\"chem\">f'(0) = 0</span>，故 <span class=\"chem\">(0, 10)</span> 是駐拐點。<span class=\"chem\">f'(2) = 32 - 48 = -16 != 0</span>，故 <span class=\"chem\">(2, -6)</span> 是非駐拐點。</p>",
      // EN: <p>(a) <span class="chem">f'(x) = 4x^3 - 12x^2</span>, <span class="chem">f''(x) = 12x^2 - 24x</span>.<br>(b) <span class="chem">(0, 10)</span> and <span class="chem">(2, -6)</span>.<br>(c) <span class="chem">(0, 10)</span>, since <span class="chem">f'(0) = 0</span> (while <span class="chem">f'(2) = -16</span>).</p>
      answer: "<p>(a) <span class=\"chem\">f'(x) = 4x^3 - 12x^2</span>，<span class=\"chem\">f''(x) = 12x^2 - 24x</span>。<br>(b) <span class=\"chem\">(0, 10)</span> 及 <span class=\"chem\">(2, -6)</span>。<br>(c) <span class=\"chem\">(0, 10)</span>，因為 <span class=\"chem\">f'(0) = 0</span>（而 <span class=\"chem\">f'(2) = -16</span>）。</p>",
      markscheme: [
        // EN: A1: <span class="chem">f'(x) = 4x^3 - 12x^2</span>.
        "A1：<span class=\"chem\">f'(x) = 4x^3 - 12x^2</span>。",
        // EN: A1: <span class="chem">f''(x) = 12x^2 - 24x</span>.
        "A1：<span class=\"chem\">f''(x) = 12x^2 - 24x</span>。",
        // EN: M1: Sets <span class="chem">f''(x) = 12x(x - 2) = 0</span>.
        "M1：設 <span class=\"chem\">f''(x) = 12x(x - 2) = 0</span>。",
        // EN: A1: <span class="chem">x = 0</span> and <span class="chem">x = 2</span>.
        "A1：<span class=\"chem\">x = 0</span> 及 <span class=\"chem\">x = 2</span>。",
        // EN: R1: <span class="chem">f''</span> changes sign at both values (e.g. <span class="chem">f''(-1) = 36</span>, <span class="chem">f''(1) = -12</span>, <span class="chem">f''(3) = 36</span>).
        "R1：<span class=\"chem\">f''</span> 在兩個值處均變號（例如 <span class=\"chem\">f''(-1) = 36</span>，<span class=\"chem\">f''(1) = -12</span>，<span class=\"chem\">f''(3) = 36</span>）。",
        // EN: A1: <span class="chem">(0, 10)</span> and <span class="chem">(2, -6)</span>.
        "A1：<span class=\"chem\">(0, 10)</span> 及 <span class=\"chem\">(2, -6)</span>。",
        // EN: A1: <span class="chem">f'(0) = 0</span> so <span class="chem">(0, 10)</span> is the stationary point of inflexion; <span class="chem">f'(2) = -16 != 0</span>, so <span class="chem">(2, -6)</span> is non-stationary.
        "A1：<span class=\"chem\">f'(0) = 0</span>，故 <span class=\"chem\">(0, 10)</span> 是駐拐點；<span class=\"chem\">f'(2) = -16 != 0</span>，故 <span class=\"chem\">(2, -6)</span> 是非駐拐點。",
      ],
    },

    // ── t5-1-q026 · short · challenge · SL · SL 5.7, 5.8 · 6 marks
    "t5-1-q026": {
      // EN: <p>Let <span class="chem">f(x) = x^4 - 4x^3 + 6x^2 + 2x</span>. A student writes: “<span class="chem">f''(1) = 0</span>, so the graph of <span class="chem">f</span> has a point of inflexion at <span class="chem">x = 1</span>.”<br>(a) Show that <span class="chem">f''(x) = 12(x - 1)^2</span>. <strong>[2 marks]</strong><br>(b) Explain why the student’s conclusion is wrong. <strong>[2 marks]</strong><br>(c) Show that <span class="chem">f</span> has exactly one stationary point, and determine its nature. <strong>[2 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = x^4 - 4x^3 + 6x^2 + 2x</span>。一名學生寫道：「<span class=\"chem\">f''(1) = 0</span>，故 <span class=\"chem\">f</span> 的圖像在 <span class=\"chem\">x = 1</span> 處有拐點。」<br>(a) 證明 (Show that) <span class=\"chem\">f''(x) = 12(x - 1)^2</span>。<strong>[2 marks]</strong><br>(b) 解釋 (Explain) 為何該學生的結論是錯誤的。<strong>[2 marks]</strong><br>(c) 證明 (Show that) <span class=\"chem\">f</span> 恰有一個駐點，並判斷其性質。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: the question is testing the full definition of a point of inflexion. <span class="chem">f''(x) = 0</span> is necessary but not sufficient: <span class="chem">f''</span> must also change sign.
        "解碼：本題考核拐點的完整定義。<span class=\"chem\">f''(x) = 0</span> 是必要條件但非充分條件：<span class=\"chem\">f''</span> 還必須變號。",
        // EN: For (b), look at the sign of <span class="chem">12(x - 1)^2</span> just to the left and just to the right of <span class="chem">x = 1</span>.
        "對於 (b) 部，觀察 <span class=\"chem\">12(x - 1)^2</span> 在 <span class=\"chem\">x = 1</span> 左側及右側附近的正負。",
        // EN: For (c), compare <span class="chem">f'(x)</span> with <span class="chem">4(x - 1)^3 = 4x^3 - 12x^2 + 12x - 4</span>. A cube equals a number at exactly one real value.
        "對於 (c) 部，把 <span class=\"chem\">f'(x)</span> 與 <span class=\"chem\">4(x - 1)^3 = 4x^3 - 12x^2 + 12x - 4</span> 比較。一個立方等於某個數時，恰有一個實數解。",
      ],
      // EN: <p><strong>Decode:</strong> the student used only half of the test for an inflexion point. We need <span class="chem">f''(x) = 0</span> and a change of sign of <span class="chem">f''</span>.<br>(a) <span class="chem">f'(x) = 4x^3 - 12x^2 + 12x + 2</span>, so <span class="chem">f''(x) = 12x^2 - 24x + 12 = 12(x - 1)^2</span>.<br>(b) <span class="chem">12(x - 1)^2 &gt; 0</span> for every <span class="chem">x != 1</span>, so <span class="chem">f''</span> is positive on both sides of <span class="chem">x = 1</span> and does not change sign. The concavity does not change, so there is no point of inflexion at <span class="chem">x = 1</span> (the graph is concave up everywhere).<br>(c) <span class="chem">4(x - 1)^3 = 4x^3 - 12x^2 + 12x - 4</span>, so <span class="chem">f'(x) = 4(x - 1)^3 + 6</span>. Then <span class="chem">f'(x) = 0 &lt;=&gt; (x - 1)^3 = -3/2 &lt;=&gt; x = 1 - (3/2)^{1/3}</span>, the only real solution. At this point <span class="chem">x != 1</span>, so <span class="chem">f''(x) &gt; 0</span>: a local minimum.</p>
      solution: "<p><strong>解碼：</strong>該學生只用了拐點判別的一半。我們需要 <span class=\"chem\">f''(x) = 0</span>，並且 <span class=\"chem\">f''</span> 要變號。<br>(a) <span class=\"chem\">f'(x) = 4x^3 - 12x^2 + 12x + 2</span>，故 <span class=\"chem\">f''(x) = 12x^2 - 24x + 12 = 12(x - 1)^2</span>。<br>(b) 對每個 <span class=\"chem\">x != 1</span>，<span class=\"chem\">12(x - 1)^2 &gt; 0</span>，故 <span class=\"chem\">f''</span> 在 <span class=\"chem\">x = 1</span> 兩側均為正，沒有變號。凹性沒有改變，故在 <span class=\"chem\">x = 1</span> 處沒有拐點（圖像處處上凹）。<br>(c) <span class=\"chem\">4(x - 1)^3 = 4x^3 - 12x^2 + 12x - 4</span>，故 <span class=\"chem\">f'(x) = 4(x - 1)^3 + 6</span>。於是 <span class=\"chem\">f'(x) = 0 &lt;=&gt; (x - 1)^3 = -3/2 &lt;=&gt; x = 1 - (3/2)^{1/3}</span>，這是唯一的實數解。在此點 <span class=\"chem\">x != 1</span>，故 <span class=\"chem\">f''(x) &gt; 0</span>：局部極小。</p>",
      // EN: <p>(a) <span class="chem">f'(x) = 4x^3 - 12x^2 + 12x + 2</span>, <span class="chem">f''(x) = 12x^2 - 24x + 12 = 12(x - 1)^2</span>.<br>(b) <span class="chem">f''(x) &gt;= 0</span> on both sides of <span class="chem">x = 1</span>, so it does not change sign: there is no point of inflexion (the graph is concave up everywhere).<br>(c) <span class="chem">f'(x) = 4(x - 1)^3 + 6 = 0</span> has the single solution <span class="chem">x = 1 - (3/2)^{1/3}</span>; there <span class="chem">f''(x) &gt; 0</span>, so it is a local minimum.</p>
      answer: "<p>(a) <span class=\"chem\">f'(x) = 4x^3 - 12x^2 + 12x + 2</span>，<span class=\"chem\">f''(x) = 12x^2 - 24x + 12 = 12(x - 1)^2</span>。<br>(b) <span class=\"chem\">f''(x) &gt;= 0</span> 在 <span class=\"chem\">x = 1</span> 兩側成立，故沒有變號：沒有拐點（圖像處處上凹）。<br>(c) <span class=\"chem\">f'(x) = 4(x - 1)^3 + 6 = 0</span> 只有一個解 <span class=\"chem\">x = 1 - (3/2)^{1/3}</span>；在該處 <span class=\"chem\">f''(x) &gt; 0</span>，故為局部極小。</p>",
      markscheme: [
        // EN: A1: <span class="chem">f'(x) = 4x^3 - 12x^2 + 12x + 2</span>.
        "A1：<span class=\"chem\">f'(x) = 4x^3 - 12x^2 + 12x + 2</span>。",
        // EN: A1: <span class="chem">f''(x) = 12x^2 - 24x + 12 = 12(x^2 - 2x + 1) = 12(x - 1)^2</span> (AG).
        "A1：<span class=\"chem\">f''(x) = 12x^2 - 24x + 12 = 12(x^2 - 2x + 1) = 12(x - 1)^2</span> (AG)。",
        // EN: R1: <span class="chem">f''(x) = 12(x - 1)^2 &gt;= 0</span> for all <span class="chem">x</span>, so <span class="chem">f''</span> does not change sign at <span class="chem">x = 1</span>.
        "R1：對所有 <span class=\"chem\">x</span>，<span class=\"chem\">f''(x) = 12(x - 1)^2 &gt;= 0</span>，故 <span class=\"chem\">f''</span> 在 <span class=\"chem\">x = 1</span> 處不變號。",
        // EN: A1: So <span class="chem">x = 1</span> is not a point of inflexion; <span class="chem">f''(x) = 0</span> alone is not enough.
        "A1：故 <span class=\"chem\">x = 1</span> 不是拐點；僅有 <span class=\"chem\">f''(x) = 0</span> 並不足夠。",
        // EN: M1: Writes <span class="chem">f'(x) = 4(x - 1)^3 + 6 = 0</span>, so <span class="chem">(x - 1)^3 = -3/2</span>, which has exactly one real solution <span class="chem">x = 1 - (3/2)^{1/3}</span>.
        "M1：寫出 <span class=\"chem\">f'(x) = 4(x - 1)^3 + 6 = 0</span>，故 <span class=\"chem\">(x - 1)^3 = -3/2</span>，它恰有一個實數解 <span class=\"chem\">x = 1 - (3/2)^{1/3}</span>。",
        // EN: R1: At this <span class="chem">x</span> (which is not <span class="chem">1</span>), <span class="chem">f''(x) &gt; 0</span>, so the stationary point is a local minimum.
        "R1：在此 <span class=\"chem\">x</span>（不等於 <span class=\"chem\">1</span>）處，<span class=\"chem\">f''(x) &gt; 0</span>，故該駐點是局部極小點。",
      ],
    },

    // ── t5-1-q027 · numeric · challenge · SL · SL 5.8 · 6 marks
    "t5-1-q027": {
      // EN: <p>A farmer builds a rectangular pen against a straight stone wall that is <span class="chem">30</span> <span class="unit">m</span> long. The wall forms one complete side of the pen, so no fence is needed on that side, and the side along the wall cannot be longer than the wall. The other three sides use exactly <span class="chem">80</span> <span class="unit">m</span> of fencing. Find the greatest possible area of the pen, in <span class="unit">m2</span>.</p>
      stem: "<p>一名農夫靠著一道長 <span class=\"chem\">30</span> <span class=\"unit\">m</span> 的筆直石牆建造一個長方形圍欄。石牆構成圍欄完整的一邊，故該邊無須圍欄，而且沿牆的一邊不能比石牆長。其餘三邊恰好用了 <span class=\"chem\">80</span> <span class=\"unit\">m</span> 的圍欄。求 (Find) 圍欄的最大可能面積，以 <span class=\"unit\">m2</span> 為單位。</p>",
      hints: [
        // EN: Decode: this is an optimisation with a hidden restriction. The side along the wall is at most 30 m, so the variable has a restricted domain, and the maximum may be at an endpoint rather than where the derivative is zero.
        "解碼：這是一道帶有隱藏限制的最優化問題。沿牆的一邊最多長 30 m，故變數的定義域受到限制，而最大值可能出現在端點，而不是導數為零之處。",
        // EN: Let each side perpendicular to the wall be <span class="chem">x</span> <span class="unit">m</span>. Then the side along the wall is <span class="chem">80 - 2x</span>, and <span class="chem">80 - 2x &lt;= 30</span> gives <span class="chem">x &gt;= 25</span>.
        "設與牆垂直的每一邊長 <span class=\"chem\">x</span> <span class=\"unit\">m</span>。則沿牆的一邊長 <span class=\"chem\">80 - 2x</span>，而由 <span class=\"chem\">80 - 2x &lt;= 30</span> 得 <span class=\"chem\">x &gt;= 25</span>。",
        // EN: <span class="chem">A(x) = x(80 - 2x)</span>, <span class="chem">A'(x) = 80 - 4x</span>. Where is <span class="chem">A'(x) = 0</span>? Is that value allowed? What is the sign of <span class="chem">A'</span> for <span class="chem">25 &lt;= x &lt; 40</span>?
        "<span class=\"chem\">A(x) = x(80 - 2x)</span>，<span class=\"chem\">A'(x) = 80 - 4x</span>。<span class=\"chem\">A'(x) = 0</span> 在哪裏？該值是否容許？在 <span class=\"chem\">25 &lt;= x &lt; 40</span> 時 <span class=\"chem\">A'</span> 的正負如何？",
      ],
      // EN: <p><strong>Decode:</strong> the wall length is a constraint on the domain, so we must check the endpoint, not just solve <span class="chem">A'(x) = 0</span>.<br>Let the two sides perpendicular to the wall be <span class="chem">x</span> <span class="unit">m</span>; the side along the wall is <span class="chem">80 - 2x</span> <span class="unit">m</span>. We need <span class="chem">0 &lt; 80 - 2x &lt;= 30</span>, so <span class="chem">25 &lt;= x &lt; 40</span>.<br><span class="chem">A(x) = x(80 - 2x) = 80x - 2x^2</span> and <span class="chem">A'(x) = 80 - 4x = 0 =&gt; x = 20</span>, which is <strong>not</strong> in the domain. For <span class="chem">25 &lt;= x &lt; 40</span>, <span class="chem">A'(x) &lt; 0</span>, so <span class="chem">A</span> is decreasing and its greatest value is at the endpoint <span class="chem">x = 25</span>: the pen is <span class="chem">25</span> <span class="unit">m</span> by <span class="chem">30</span> <span class="unit">m</span>, and <span class="chem">A = 25 * 30 = 750</span> <span class="unit">m2</span>. (The unrestricted answer <span class="chem">A(20) = 800</span> would need a 40 m wall.)</p>
      solution: "<p><strong>解碼：</strong>牆的長度是對定義域的限制，故必須檢查端點，而不能只解 <span class=\"chem\">A'(x) = 0</span>。<br>設與牆垂直的兩邊長 <span class=\"chem\">x</span> <span class=\"unit\">m</span>；沿牆的一邊長 <span class=\"chem\">80 - 2x</span> <span class=\"unit\">m</span>。我們需要 <span class=\"chem\">0 &lt; 80 - 2x &lt;= 30</span>，故 <span class=\"chem\">25 &lt;= x &lt; 40</span>。<br><span class=\"chem\">A(x) = x(80 - 2x) = 80x - 2x^2</span> 及 <span class=\"chem\">A'(x) = 80 - 4x = 0 =&gt; x = 20</span>，但它<strong>不</strong>在定義域內。在 <span class=\"chem\">25 &lt;= x &lt; 40</span> 時，<span class=\"chem\">A'(x) &lt; 0</span>，故 <span class=\"chem\">A</span> 遞減，其最大值出現在端點 <span class=\"chem\">x = 25</span>：圍欄為 <span class=\"chem\">25</span> <span class=\"unit\">m</span> 乘 <span class=\"chem\">30</span> <span class=\"unit\">m</span>，且 <span class=\"chem\">A = 25 * 30 = 750</span> <span class=\"unit\">m2</span>。（不考慮限制的答案 <span class=\"chem\">A(20) = 800</span> 需要一道 40 m 長的牆。）</p>",
    },

    // ── t5-1-q028 · short · exam · SL · SL 5.4 · 6 marks
    "t5-1-q028": {
      // EN: <p>The point <span class="chem">P(3, 2)</span> lies on the curve <span class="chem">y = x^2 - 4x + 5</span>.<br>(a) Find the equation of the normal to the curve at <span class="chem">P</span>. <strong>[3 marks]</strong><br>(b) The normal meets the curve again at <span class="chem">Q</span>. Find the coordinates of <span class="chem">Q</span>. <strong>[3 marks]</strong></p>
      stem: "<p>點 <span class=\"chem\">P(3, 2)</span> 位於曲線 <span class=\"chem\">y = x^2 - 4x + 5</span> 上。<br>(a) 求 (Find) 曲線在 <span class=\"chem\">P</span> 處的法線方程。<strong>[3 marks]</strong><br>(b) 法線與曲線再相交於 <span class=\"chem\">Q</span>。求 (Find) <span class=\"chem\">Q</span> 的坐標。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: The normal is perpendicular to the tangent, so its gradient is <span class="chem">-1 / (dy/dx)</span>.
        "法線垂直於切線，故其斜率為 <span class=\"chem\">-1 / (dy/dx)</span>。",
        // EN: For (b), set the curve equal to the normal. You already know one root, <span class="chem">x = 3</span>, which helps you factorise.
        "對於 (b) 部，令曲線方程等於法線方程。你已知其中一個根 <span class=\"chem\">x = 3</span>，這有助因式分解。",
      ],
      // EN: <p>(a) <span class="chem">dy/dx = 2x - 4 = 2</span> at <span class="chem">x = 3</span>, so the normal has gradient <span class="chem">-1/2</span>: <span class="chem">y - 2 = -(1/2)(x - 3) =&gt; y = -x/2 + 7/2</span>.<br>(b) <span class="chem">x^2 - 4x + 5 = -x/2 + 7/2 =&gt; 2x^2 - 8x + 10 = -x + 7 =&gt; 2x^2 - 7x + 3 = 0 =&gt; (2x - 1)(x - 3) = 0</span>. The root <span class="chem">x = 3</span> is <span class="chem">P</span>, so <span class="chem">x = 1/2</span> and <span class="chem">y = 1/4 - 2 + 5 = 13/4</span>: <span class="chem">Q(1/2, 13/4)</span>.</p>
      solution: "<p>(a) 在 <span class=\"chem\">x = 3</span> 處 <span class=\"chem\">dy/dx = 2x - 4 = 2</span>，故法線斜率為 <span class=\"chem\">-1/2</span>：<span class=\"chem\">y - 2 = -(1/2)(x - 3) =&gt; y = -x/2 + 7/2</span>。<br>(b) <span class=\"chem\">x^2 - 4x + 5 = -x/2 + 7/2 =&gt; 2x^2 - 8x + 10 = -x + 7 =&gt; 2x^2 - 7x + 3 = 0 =&gt; (2x - 1)(x - 3) = 0</span>。根 <span class=\"chem\">x = 3</span> 對應 <span class=\"chem\">P</span>，故 <span class=\"chem\">x = 1/2</span> 及 <span class=\"chem\">y = 1/4 - 2 + 5 = 13/4</span>：<span class=\"chem\">Q(1/2, 13/4)</span>。</p>",
      // EN: <p>(a) <span class="chem">y = -x/2 + 7/2</span> (or <span class="chem">x + 2y = 7</span>).<br>(b) <span class="chem">Q(1/2, 13/4)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">y = -x/2 + 7/2</span>（或 <span class=\"chem\">x + 2y = 7</span>）。<br>(b) <span class=\"chem\">Q(1/2, 13/4)</span>。</p>",
      markscheme: [
        // EN: A1: <span class="chem">dy/dx = 2x - 4</span>, so the gradient of the tangent at <span class="chem">P</span> is <span class="chem">2</span>.
        "A1：<span class=\"chem\">dy/dx = 2x - 4</span>，故在 <span class=\"chem\">P</span> 處的切線斜率為 <span class=\"chem\">2</span>。",
        // EN: M1: Gradient of the normal is <span class="chem">-1/2</span> (negative reciprocal).
        "M1：法線斜率為 <span class=\"chem\">-1/2</span>（負倒數）。",
        // EN: A1: <span class="chem">y - 2 = -(1/2)(x - 3)</span>, i.e. <span class="chem">y = -x/2 + 7/2</span>.
        "A1：<span class=\"chem\">y - 2 = -(1/2)(x - 3)</span>，即 <span class=\"chem\">y = -x/2 + 7/2</span>。",
        // EN: M1: Equates the curve and the normal: <span class="chem">x^2 - 4x + 5 = -x/2 + 7/2</span>.
        "M1：令曲線與法線相等：<span class=\"chem\">x^2 - 4x + 5 = -x/2 + 7/2</span>。",
        // EN: A1: <span class="chem">2x^2 - 7x + 3 = 0 =&gt; (2x - 1)(x - 3) = 0</span>, so <span class="chem">x = 1/2</span> (<span class="chem">x = 3</span> is <span class="chem">P</span>).
        "A1：<span class=\"chem\">2x^2 - 7x + 3 = 0 =&gt; (2x - 1)(x - 3) = 0</span>，故 <span class=\"chem\">x = 1/2</span>（<span class=\"chem\">x = 3</span> 對應 <span class=\"chem\">P</span>）。",
        // EN: A1: <span class="chem">Q(1/2, 13/4)</span>.
        "A1：<span class=\"chem\">Q(1/2, 13/4)</span>。",
      ],
    },

    // ── t5-1-q029 · short · exam · SL · SL 5.2, 5.7 · 6 marks
    "t5-1-q029": {
      // EN: <p>Let <span class="chem">f(x) = x^3 - 6x^2 + 9x + 1</span>.<br>(a) Find <span class="chem">f'(x)</span>. <strong>[1 mark]</strong><br>(b) Sketch the graph of <span class="chem">y = f'(x)</span> for <span class="chem">0 &lt;= x &lt;= 4</span>, labelling the intercepts with the axes and the vertex. <strong>[3 marks]</strong><br>(c) Using your sketch, write down (i) the interval on which <span class="chem">f</span> is decreasing; (ii) the <span class="chem">x</span>-coordinate of the point of inflexion on the graph of <span class="chem">f</span>. <strong>[2 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = x^3 - 6x^2 + 9x + 1</span>。<br>(a) 求 (Find) <span class=\"chem\">f'(x)</span>。<strong>[1 mark]</strong><br>(b) 在 <span class=\"chem\">0 &lt;= x &lt;= 4</span> 上草繪 (Sketch) <span class=\"chem\">y = f'(x)</span> 的圖像，並標示與坐標軸的截距及頂點。<strong>[3 marks]</strong><br>(c) 利用你的草圖，寫出 (write down) (i) <span class=\"chem\">f</span> 遞減的區間；(ii) <span class=\"chem\">f</span> 圖像上拐點的 <span class=\"chem\">x</span> 坐標。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: <span class="chem">f'(x)</span> is a quadratic: find its roots by factorising and its vertex by completing the square or using <span class="chem">x = -b / (2a)</span>.
        "<span class=\"chem\">f'(x)</span> 是二次式：以因式分解求其根，並以配方法或 <span class=\"chem\">x = -b / (2a)</span> 求其頂點。",
        // EN: <span class="chem">f</span> decreases where the graph of <span class="chem">f'</span> is below the axis. <span class="chem">f''</span> is the gradient of <span class="chem">f'</span>, so an inflexion of <span class="chem">f</span> is at a turning point of <span class="chem">f'</span>.
        "<span class=\"chem\">f</span> 在 <span class=\"chem\">f'</span> 的圖像位於軸下方之處遞減。<span class=\"chem\">f''</span> 是 <span class=\"chem\">f'</span> 的斜率，故 <span class=\"chem\">f</span> 的拐點位於 <span class=\"chem\">f'</span> 的轉向點。",
      ],
      // EN: <p>(a) <span class="chem">f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)</span>.<br>(b) <span class="chem">f'(0) = 9</span>, roots <span class="chem">x = 1, 3</span>, vertex at <span class="chem">x = 2</span> with <span class="chem">f'(2) = 12 - 24 + 9 = -3</span>, and <span class="chem">f'(4) = 9</span>. Draw a symmetric upward parabola through these points.<br>(c)(i) The graph of <span class="chem">f'</span> is below the <span class="chem">x</span>-axis for <span class="chem">1 &lt; x &lt; 3</span>, so <span class="chem">f</span> is decreasing there. (ii) The gradient of <span class="chem">f'</span> (that is, <span class="chem">f''</span>) is negative before the vertex and positive after it, so <span class="chem">f''</span> changes sign at <span class="chem">x = 2</span>: the point of inflexion of <span class="chem">f</span> is at <span class="chem">x = 2</span>.</p>
      solution: "<p>(a) <span class=\"chem\">f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)</span>。<br>(b) <span class=\"chem\">f'(0) = 9</span>，根 <span class=\"chem\">x = 1, 3</span>，頂點位於 <span class=\"chem\">x = 2</span> 且 <span class=\"chem\">f'(2) = 12 - 24 + 9 = -3</span>，以及 <span class=\"chem\">f'(4) = 9</span>。通過這些點畫出一條對稱、開口向上的拋物線。<br>(c)(i) 在 <span class=\"chem\">1 &lt; x &lt; 3</span> 時 <span class=\"chem\">f'</span> 的圖像位於 <span class=\"chem\">x</span> 軸下方，故 <span class=\"chem\">f</span> 在該區間遞減。(ii) <span class=\"chem\">f'</span> 的斜率（即 <span class=\"chem\">f''</span>）在頂點之前為負、之後為正，故 <span class=\"chem\">f''</span> 在 <span class=\"chem\">x = 2</span> 處變號：<span class=\"chem\">f</span> 的拐點位於 <span class=\"chem\">x = 2</span>。</p>",
      // EN: <p>(a) <span class="chem">f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)</span>.<br>(b) An upward parabola through <span class="chem">(0, 9)</span>, <span class="chem">(1, 0)</span>, <span class="chem">(3, 0)</span> and <span class="chem">(4, 9)</span>, with vertex <span class="chem">(2, -3)</span>.<br>(c)(i) <span class="chem">1 &lt; x &lt; 3</span>; (ii) <span class="chem">x = 2</span>.</p>
      answer: "<p>(a) <span class=\"chem\">f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)</span>。<br>(b) 一條開口向上的拋物線，通過 <span class=\"chem\">(0, 9)</span>、<span class=\"chem\">(1, 0)</span>、<span class=\"chem\">(3, 0)</span> 及 <span class=\"chem\">(4, 9)</span>，頂點為 <span class=\"chem\">(2, -3)</span>。<br>(c)(i) <span class=\"chem\">1 &lt; x &lt; 3</span>；(ii) <span class=\"chem\">x = 2</span>。</p>",
      markscheme: [
        // EN: A1: <span class="chem">f'(x) = 3x^2 - 12x + 9</span>.
        "A1：<span class=\"chem\">f'(x) = 3x^2 - 12x + 9</span>。",
        // EN: A1: Sketch is a concave-up parabola over <span class="chem">0 &lt;= x &lt;= 4</span>.
        "A1：草圖是在 <span class=\"chem\">0 &lt;= x &lt;= 4</span> 上一條上凹的拋物線。",
        // EN: A1: <span class="chem">x</span>-intercepts <span class="chem">(1, 0)</span>, <span class="chem">(3, 0)</span> and <span class="chem">y</span>-intercept <span class="chem">(0, 9)</span> labelled.
        "A1：標示 <span class=\"chem\">x</span> 軸截距 <span class=\"chem\">(1, 0)</span>、<span class=\"chem\">(3, 0)</span> 及 <span class=\"chem\">y</span> 軸截距 <span class=\"chem\">(0, 9)</span>。",
        // EN: A1: Vertex <span class="chem">(2, -3)</span> labelled.
        "A1：標示頂點 <span class=\"chem\">(2, -3)</span>。",
        // EN: A1: (i) <span class="chem">1 &lt; x &lt; 3</span> (where the graph of <span class="chem">f'</span> is below the <span class="chem">x</span>-axis).
        "A1：(i) <span class=\"chem\">1 &lt; x &lt; 3</span>（<span class=\"chem\">f'</span> 的圖像位於 <span class=\"chem\">x</span> 軸下方之處）。",
        // EN: A1: (ii) <span class="chem">x = 2</span> (the turning point of <span class="chem">f'</span>, where <span class="chem">f''</span> changes sign).
        "A1：(ii) <span class=\"chem\">x = 2</span>（<span class=\"chem\">f'</span> 的轉向點，<span class=\"chem\">f''</span> 在該處變號）。",
      ],
    },

    // ── t5-1-q030 · numeric · exam · SL · SL 5.6, 5.8 · 6 marks
    "t5-1-q030": {
      // EN: <p>Let <span class="chem">f(x) = 2 sin x + cos 2x</span> for <span class="chem">0 &lt;= x &lt;= pi</span>. Find the maximum value of <span class="chem">f</span>.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = 2 sin x + cos 2x</span>，其中 <span class=\"chem\">0 &lt;= x &lt;= pi</span>。求 (Find) <span class=\"chem\">f</span> 的最大值。</p>",
      hints: [
        // EN: Differentiate with the chain rule: <span class="chem">f'(x) = 2 cos x - 2 sin 2x</span>. Use <span class="chem">sin 2x = 2 sin x cos x</span> to factorise.
        "用鏈式法則求導：<span class=\"chem\">f'(x) = 2 cos x - 2 sin 2x</span>。利用 <span class=\"chem\">sin 2x = 2 sin x cos x</span> 進行因式分解。",
        // EN: <span class="chem">f'(x) = 2 cos x (1 - 2 sin x)</span>. Solve <span class="chem">cos x = 0</span> and <span class="chem">sin x = 1/2</span> in <span class="chem">[0, pi]</span>, then compare <span class="chem">f</span> at these points <strong>and</strong> at the endpoints.
        "<span class=\"chem\">f'(x) = 2 cos x (1 - 2 sin x)</span>。在 <span class=\"chem\">[0, pi]</span> 內解 <span class=\"chem\">cos x = 0</span> 及 <span class=\"chem\">sin x = 1/2</span>，然後比較 <span class=\"chem\">f</span> 在這些點<strong>及</strong>在端點的值。",
      ],
      // EN: <p><span class="chem">f'(x) = 2 cos x - 2 sin 2x = 2 cos x - 4 sin x cos x = 2 cos x (1 - 2 sin x)</span>. In <span class="chem">[0, pi]</span>: <span class="chem">cos x = 0 =&gt; x = pi/2</span>; <span class="chem">sin x = 1/2 =&gt; x = pi/6, 5pi/6</span>.<br>Values: <span class="chem">f(pi/6) = 1 + 1/2 = 3/2</span>, <span class="chem">f(pi/2) = 2 - 1 = 1</span>, <span class="chem">f(5pi/6) = 1 + 1/2 = 3/2</span>, and at the endpoints <span class="chem">f(0) = 1</span>, <span class="chem">f(pi) = 1</span>.<br>The maximum value is <span class="chem">3/2</span> (at <span class="chem">x = pi/6</span> and <span class="chem">x = 5pi/6</span>).</p>
      solution: "<p><span class=\"chem\">f'(x) = 2 cos x - 2 sin 2x = 2 cos x - 4 sin x cos x = 2 cos x (1 - 2 sin x)</span>。在 <span class=\"chem\">[0, pi]</span> 內：<span class=\"chem\">cos x = 0 =&gt; x = pi/2</span>；<span class=\"chem\">sin x = 1/2 =&gt; x = pi/6, 5pi/6</span>。<br>數值：<span class=\"chem\">f(pi/6) = 1 + 1/2 = 3/2</span>，<span class=\"chem\">f(pi/2) = 2 - 1 = 1</span>，<span class=\"chem\">f(5pi/6) = 1 + 1/2 = 3/2</span>，而在端點 <span class=\"chem\">f(0) = 1</span>，<span class=\"chem\">f(pi) = 1</span>。<br>最大值為 <span class=\"chem\">3/2</span>（在 <span class=\"chem\">x = pi/6</span> 及 <span class=\"chem\">x = 5pi/6</span> 處）。</p>",
    },

    // ── t5-1-q031 · numeric · challenge · SL · SL 5.4 · 7 marks
    "t5-1-q031": {
      // EN: <p>Two different tangents to the curve <span class="chem">y = x^2</span> pass through the point <span class="chem">P(1, -3)</span>, which does not lie on the curve. They touch the curve at <span class="chem">A</span> and <span class="chem">B</span>. Find the area of triangle <span class="chem">PAB</span>.</p>
      stem: "<p>曲線 <span class=\"chem\">y = x^2</span> 有兩條不同的切線通過不在曲線上的點 <span class=\"chem\">P(1, -3)</span>。它們分別在 <span class=\"chem\">A</span> 及 <span class=\"chem\">B</span> 與曲線相切。求 (Find) 三角形 <span class=\"chem\">PAB</span> 的面積。</p>",
      hints: [
        // EN: Decode: you do not know where the tangents touch the curve. Call a point of contact <span class="chem">(a, a^2)</span>, write the tangent there in terms of <span class="chem">a</span>, and use the fact that it passes through <span class="chem">P</span> to find <span class="chem">a</span>.
        "解碼：你不知道切線在哪裏與曲線相切。設切點為 <span class=\"chem\">(a, a^2)</span>，以 <span class=\"chem\">a</span> 寫出該處的切線，並利用它通過 <span class=\"chem\">P</span> 這一事實求 <span class=\"chem\">a</span>。",
        // EN: The tangent at <span class="chem">(a, a^2)</span> is <span class="chem">y = 2a x - a^2</span>. Substituting <span class="chem">(1, -3)</span> gives a quadratic in <span class="chem">a</span>.
        "<span class=\"chem\">(a, a^2)</span> 處的切線為 <span class=\"chem\">y = 2a x - a^2</span>。代入 <span class=\"chem\">(1, -3)</span> 得一條關於 <span class=\"chem\">a</span> 的二次方程。",
        // EN: You should find <span class="chem">A(3, 9)</span> and <span class="chem">B(-1, 1)</span>. Use the vectors <span class="chem">PA</span> and <span class="chem">PB</span> (or a rectangle minus three right triangles) to find the area.
        "你應得到 <span class=\"chem\">A(3, 9)</span> 及 <span class=\"chem\">B(-1, 1)</span>。利用向量 <span class=\"chem\">PA</span> 及 <span class=\"chem\">PB</span>（或用長方形減去三個直角三角形）求面積。",
      ],
      // EN: <p><strong>Decode:</strong> the unknowns are the points of contact, so let one be <span class="chem">(a, a^2)</span> and make the tangent there pass through <span class="chem">P</span>.<br>The gradient at <span class="chem">(a, a^2)</span> is <span class="chem">2a</span>, so the tangent is <span class="chem">y - a^2 = 2a(x - a) =&gt; y = 2a x - a^2</span>. Through <span class="chem">(1, -3)</span>: <span class="chem">-3 = 2a - a^2 =&gt; a^2 - 2a - 3 = 0 =&gt; (a - 3)(a + 1) = 0</span>, so <span class="chem">A(3, 9)</span> and <span class="chem">B(-1, 1)</span>.<br>With <span class="chem">PA = (2, 12)</span> and <span class="chem">PB = (-2, 4)</span>, the area is <span class="chem">(1/2)|2 * 4 - 12 * (-2)| = (1/2)(8 + 24) = 16</span>.</p>
      solution: "<p><strong>解碼：</strong>未知量是切點，故設其中一個為 <span class=\"chem\">(a, a^2)</span>，並使該處的切線通過 <span class=\"chem\">P</span>。<br><span class=\"chem\">(a, a^2)</span> 處的斜率為 <span class=\"chem\">2a</span>，故切線為 <span class=\"chem\">y - a^2 = 2a(x - a) =&gt; y = 2a x - a^2</span>。通過 <span class=\"chem\">(1, -3)</span>：<span class=\"chem\">-3 = 2a - a^2 =&gt; a^2 - 2a - 3 = 0 =&gt; (a - 3)(a + 1) = 0</span>，故 <span class=\"chem\">A(3, 9)</span> 及 <span class=\"chem\">B(-1, 1)</span>。<br>由 <span class=\"chem\">PA = (2, 12)</span> 及 <span class=\"chem\">PB = (-2, 4)</span>，面積為 <span class=\"chem\">(1/2)|2 * 4 - 12 * (-2)| = (1/2)(8 + 24) = 16</span>。</p>",
    },

    // ── t5-1-q032 · numeric · exam · SL · SL 5.1, 5.6 · 3 marks
    "t5-1-q032": {
      // EN: <p>The number of people, <span class="chem">N</span> hundred, who have heard a rumour <span class="chem">t</span> days after it starts is modelled by <span class="chem">N(t) = 60 - 40e^{-t/2}</span>. Find the rate at which <span class="chem">N</span> is increasing when <span class="chem">t = 2 ln 4</span>, in hundreds of people per day.</p>
      stem: "<p>謠言開始後 <span class=\"chem\">t</span> 天，聽過該謠言的人數為 <span class=\"chem\">N</span> 百人，其模型為 <span class=\"chem\">N(t) = 60 - 40e^{-t/2}</span>。求 (Find) 當 <span class=\"chem\">t = 2 ln 4</span> 時 <span class=\"chem\">N</span> 增加的速率，以每天多少百人為單位。</p>",
      hints: [
        // EN: The rate of increase is the derivative <span class="chem">N'(t)</span>. Use the chain rule on <span class="chem">e^{-t/2}</span>.
        "增加的速率就是導數 <span class=\"chem\">N'(t)</span>。對 <span class=\"chem\">e^{-t/2}</span> 使用鏈式法則。",
        // EN: <span class="chem">N'(t) = 20e^{-t/2}</span>. At <span class="chem">t = 2 ln 4</span>, <span class="chem">-t/2 = -ln 4</span>, and <span class="chem">e^{-ln 4} = 1/4</span>.
        "<span class=\"chem\">N'(t) = 20e^{-t/2}</span>。在 <span class=\"chem\">t = 2 ln 4</span> 時，<span class=\"chem\">-t/2 = -ln 4</span>，而 <span class=\"chem\">e^{-ln 4} = 1/4</span>。",
      ],
      // EN: <p><span class="chem">N'(t) = -40 * (-1/2) e^{-t/2} = 20e^{-t/2}</span>. When <span class="chem">t = 2 ln 4</span>, <span class="chem">e^{-t/2} = e^{-ln 4} = 1/4</span>, so <span class="chem">N'(2 ln 4) = 20 * 1/4 = 5</span>: the number is increasing at <span class="chem">5</span> hundred people per day.</p>
      solution: "<p><span class=\"chem\">N'(t) = -40 * (-1/2) e^{-t/2} = 20e^{-t/2}</span>。當 <span class=\"chem\">t = 2 ln 4</span> 時，<span class=\"chem\">e^{-t/2} = e^{-ln 4} = 1/4</span>，故 <span class=\"chem\">N'(2 ln 4) = 20 * 1/4 = 5</span>：人數以每天 <span class=\"chem\">5</span> 百人的速率增加。</p>",
    },

    // ── t5-1-q033 · numeric · challenge · SL · SL 5.8 · 7 marks
    "t5-1-q033": {
      // EN: <p>A ferry makes a <span class="chem">300</span> <span class="unit">km</span> crossing at a constant speed of <span class="chem">v</span> <span class="unit">km h-1</span>. Its running cost is <span class="chem">160 + 0.1v^2</span> dollars <strong>per hour</strong>. The greatest speed the ferry can reach is <span class="chem">32</span> <span class="unit">km h-1</span>. Find the minimum cost of one crossing, in dollars, correct to two decimal places.</p>
      stem: "<p>一艘渡輪以 <span class=\"chem\">v</span> <span class=\"unit\">km h-1</span> 的恆定速率完成一次 <span class=\"chem\">300</span> <span class=\"unit\">km</span> 的航程。其營運成本為<strong>每小時</strong> <span class=\"chem\">160 + 0.1v^2</span> 元。渡輪能達到的最高速率為 <span class=\"chem\">32</span> <span class=\"unit\">km h-1</span>。求 (Find) 一次航程的最低成本，以元為單位，答案準確至小數點後 2 位。</p>",
      hints: [
        // EN: Decode: the cost is given per hour, but the question wants the cost of the whole trip, so first multiply by the time taken, <span class="chem">300 / v</span> hours. Then remember the speed limit: <span class="chem">0 &lt; v &lt;= 32</span>.
        "解碼：成本是按每小時計算的，但題目要求整個航程的成本，故先乘以所需時間 <span class=\"chem\">300 / v</span> 小時。然後記住速率上限：<span class=\"chem\">0 &lt; v &lt;= 32</span>。",
        // EN: Total cost <span class="chem">C(v) = (300 / v)(160 + 0.1v^2) = 48000 / v + 30v</span>. Solve <span class="chem">C'(v) = 0</span>.
        "總成本 <span class=\"chem\">C(v) = (300 / v)(160 + 0.1v^2) = 48000 / v + 30v</span>。解 <span class=\"chem\">C'(v) = 0</span>。",
        // EN: The stationary point is at <span class="chem">v = 40</span>, which the ferry cannot reach. What is the sign of <span class="chem">C'(v)</span> for <span class="chem">0 &lt; v &lt;= 32</span>?
        "駐點位於 <span class=\"chem\">v = 40</span>，但渡輪無法達到該速率。在 <span class=\"chem\">0 &lt; v &lt;= 32</span> 時 <span class=\"chem\">C'(v)</span> 的正負如何？",
      ],
      // EN: <p><strong>Decode:</strong> convert the hourly cost into a trip cost, and treat the top speed as an endpoint of the domain.<br>Time <span class="chem">= 300 / v</span> hours, so <span class="chem">C(v) = (300 / v)(160 + 0.1v^2) = 48000v^{-1} + 30v</span> for <span class="chem">0 &lt; v &lt;= 32</span>.<br><span class="chem">C'(v) = -48000 / v^2 + 30 = 0 =&gt; v^2 = 1600 =&gt; v = 40</span>, outside the domain. For <span class="chem">0 &lt; v &lt;= 32</span>, <span class="chem">v^2 &lt; 1600</span> so <span class="chem">C'(v) &lt; 0</span>: the cost decreases all the way to the endpoint. The minimum is <span class="chem">C(32) = 48000/32 + 30(32) = 1500 + 960 = 2460</span>, i.e. <span class="chem">2460.00</span> dollars.</p>
      solution: "<p><strong>解碼：</strong>把每小時成本換算為航程成本，並把最高速率視為定義域的端點。<br>時間 <span class=\"chem\">= 300 / v</span> 小時，故在 <span class=\"chem\">0 &lt; v &lt;= 32</span> 時 <span class=\"chem\">C(v) = (300 / v)(160 + 0.1v^2) = 48000v^{-1} + 30v</span>。<br><span class=\"chem\">C'(v) = -48000 / v^2 + 30 = 0 =&gt; v^2 = 1600 =&gt; v = 40</span>，在定義域以外。在 <span class=\"chem\">0 &lt; v &lt;= 32</span> 時，<span class=\"chem\">v^2 &lt; 1600</span>，故 <span class=\"chem\">C'(v) &lt; 0</span>：成本一直遞減至端點。最小值為 <span class=\"chem\">C(32) = 48000/32 + 30(32) = 1500 + 960 = 2460</span>，即 <span class=\"chem\">2460.00</span> 元。</p>",
    },

    // ── t5-1-q034 · short · exam · SL · SL 5.3, 5.4 · 4 marks
    "t5-1-q034": {
      // EN: <p>Find the coordinates of the points on the curve <span class="chem">y = x^3 - 3x^2 + 1</span> at which the tangent is parallel to the line <span class="chem">y = 9x + 2</span>. <strong>[4 marks]</strong></p>
      stem: "<p>求 (Find) 曲線 <span class=\"chem\">y = x^3 - 3x^2 + 1</span> 上切線平行於直線 <span class=\"chem\">y = 9x + 2</span> 的點的坐標。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Parallel means the tangent has the same gradient as the line, <span class="chem">9</span>.
        "平行表示切線的斜率與該直線相同，即 <span class=\"chem\">9</span>。",
        // EN: Solve <span class="chem">dy/dx = 9</span>, then substitute each <span class="chem">x</span> back into the equation of the <strong>curve</strong> (not the line) to get <span class="chem">y</span>.
        "解 <span class=\"chem\">dy/dx = 9</span>，然後把每個 <span class=\"chem\">x</span> 代回<strong>曲線</strong>（而非直線）的方程求 <span class=\"chem\">y</span>。",
      ],
      // EN: <p><span class="chem">dy/dx = 3x^2 - 6x = 9 =&gt; x^2 - 2x - 3 = 0 =&gt; (x - 3)(x + 1) = 0</span>. At <span class="chem">x = 3</span>, <span class="chem">y = 27 - 27 + 1 = 1</span>; at <span class="chem">x = -1</span>, <span class="chem">y = -1 - 3 + 1 = -3</span>. The points are <span class="chem">(3, 1)</span> and <span class="chem">(-1, -3)</span>.</p>
      solution: "<p><span class=\"chem\">dy/dx = 3x^2 - 6x = 9 =&gt; x^2 - 2x - 3 = 0 =&gt; (x - 3)(x + 1) = 0</span>。在 <span class=\"chem\">x = 3</span> 處，<span class=\"chem\">y = 27 - 27 + 1 = 1</span>；在 <span class=\"chem\">x = -1</span> 處，<span class=\"chem\">y = -1 - 3 + 1 = -3</span>。所求的點為 <span class=\"chem\">(3, 1)</span> 及 <span class=\"chem\">(-1, -3)</span>。</p>",
      // EN: <p><span class="chem">(3, 1)</span> and <span class="chem">(-1, -3)</span>.</p>
      answer: "<p><span class=\"chem\">(3, 1)</span> 及 <span class=\"chem\">(-1, -3)</span>。</p>",
      markscheme: [
        // EN: A1: <span class="chem">dy/dx = 3x^2 - 6x</span>.
        "A1：<span class=\"chem\">dy/dx = 3x^2 - 6x</span>。",
        // EN: M1: Sets <span class="chem">3x^2 - 6x = 9</span> (parallel lines have equal gradients).
        "M1：設 <span class=\"chem\">3x^2 - 6x = 9</span>（平行線的斜率相等）。",
        // EN: A1: <span class="chem">x^2 - 2x - 3 = 0 =&gt; x = 3</span> or <span class="chem">x = -1</span>.
        "A1：<span class=\"chem\">x^2 - 2x - 3 = 0 =&gt; x = 3</span> 或 <span class=\"chem\">x = -1</span>。",
        // EN: A1: <span class="chem">(3, 1)</span> and <span class="chem">(-1, -3)</span>.
        "A1：<span class=\"chem\">(3, 1)</span> 及 <span class=\"chem\">(-1, -3)</span>。",
      ],
    },

    // ── t5-1-q035 · numeric · foundation · SL · SL 5.4, 5.6 · 2 marks
    "t5-1-q035": {
      // EN: <p>Let <span class="chem">f(x) = 3 sin(x) e^{-0.2x}</span>. Find the gradient of the tangent to the graph of <span class="chem">f</span> at the point where <span class="chem">x = 1.3</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = 3 sin(x) e^{-0.2x}</span>。求 (Find) <span class=\"chem\">f</span> 的圖像在 <span class=\"chem\">x = 1.3</span> 的點處的切線斜率。答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: The gradient of the tangent is <span class="chem">f'(1.3)</span>. Your GDC can evaluate a derivative at a point directly (e.g. the <span class="chem">dy/dx</span> or <span class="chem">d/dx</span> function).
        "切線斜率是 <span class=\"chem\">f'(1.3)</span>。你的 GDC 可直接計算某點的導數（例如 <span class=\"chem\">dy/dx</span> 或 <span class=\"chem\">d/dx</span> 功能）。",
        // EN: Make sure your GDC is in <strong>radian</strong> mode: calculus with trigonometric functions always uses radians.
        "確保 GDC 處於<strong>弧度</strong>模式：涉及三角函數的微積分總是使用弧度。",
      ],
      // EN: <p>Using the GDC (radian mode), <span class="chem">f'(1.3) ≈ 0.172994…</span>, so the gradient is <span class="chem">0.173</span> (3 s.f.). By hand, <span class="chem">f'(x) = e^{-0.2x}(3 cos x - 0.6 sin x)</span>, which gives the same value.</p>
      solution: "<p>使用 GDC（弧度模式），<span class=\"chem\">f'(1.3) ≈ 0.172994…</span>，故斜率為 <span class=\"chem\">0.173</span>（3 位有效數字）。以人手計算，<span class=\"chem\">f'(x) = e^{-0.2x}(3 cos x - 0.6 sin x)</span>，得到相同的值。</p>",
    },

    // ── t5-1-q036 · numeric · exam · SL · SL 5.8 · 5 marks
    "t5-1-q036": {
      // EN: <p>An open box is made from a rectangular sheet of card measuring <span class="chem">36</span> <span class="unit">cm</span> by <span class="chem">22</span> <span class="unit">cm</span>. A square of side <span class="chem">x</span> <span class="unit">cm</span> is cut from each corner and the sides are folded up. Find the maximum possible volume of the box, in <span class="unit">cm3</span>, correct to 3 significant figures.</p>
      stem: "<p>用一張 <span class=\"chem\">36</span> <span class=\"unit\">cm</span> 乘 <span class=\"chem\">22</span> <span class=\"unit\">cm</span> 的長方形卡紙製作一個無蓋盒子。從每個角剪去邊長 <span class=\"chem\">x</span> <span class=\"unit\">cm</span> 的正方形，再把四邊摺起。求 (Find) 盒子的最大可能體積，以 <span class=\"unit\">cm3</span> 為單位，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: The base of the box measures <span class="chem">(36 - 2x)</span> by <span class="chem">(22 - 2x)</span> and its height is <span class="chem">x</span>. State the domain: <span class="chem">0 &lt; x &lt; 11</span>.
        "盒底的尺寸為 <span class=\"chem\">(36 - 2x)</span> 乘 <span class=\"chem\">(22 - 2x)</span>，高為 <span class=\"chem\">x</span>。寫出定義域：<span class=\"chem\">0 &lt; x &lt; 11</span>。",
        // EN: Graph <span class="chem">V(x) = x(36 - 2x)(22 - 2x)</span> on <span class="chem">0 &lt; x &lt; 11</span> and use the GDC maximum feature (or solve <span class="chem">V'(x) = 0</span>).
        "在 <span class=\"chem\">0 &lt; x &lt; 11</span> 上繪畫 <span class=\"chem\">V(x) = x(36 - 2x)(22 - 2x)</span> 的圖像，並使用 GDC 的極大值功能（或解 <span class=\"chem\">V'(x) = 0</span>）。",
      ],
      // EN: <p><span class="chem">V(x) = x(36 - 2x)(22 - 2x)</span> for <span class="chem">0 &lt; x &lt; 11</span>. <span class="chem">V'(x) = 12x^2 - 232x + 792 = 0</span> gives <span class="chem">x ≈ 4.4279</span> (the other root, <span class="chem">x ≈ 14.9</span>, is outside the domain). <span class="chem">V</span> is <span class="chem">0</span> at both ends of the domain, so this stationary point is the maximum: <span class="chem">V_{max} = V(4.4279…) ≈ 1579.8</span>, i.e. <span class="chem">1580</span> <span class="unit">cm3</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">V(x) = x(36 - 2x)(22 - 2x)</span>，其中 <span class=\"chem\">0 &lt; x &lt; 11</span>。<span class=\"chem\">V'(x) = 12x^2 - 232x + 792 = 0</span> 得 <span class=\"chem\">x ≈ 4.4279</span>（另一根 <span class=\"chem\">x ≈ 14.9</span> 在定義域以外）。<span class=\"chem\">V</span> 在定義域兩端均為 <span class=\"chem\">0</span>，故此駐點為最大值：<span class=\"chem\">V_{max} = V(4.4279…) ≈ 1579.8</span>，即 <span class=\"chem\">1580</span> <span class=\"unit\">cm3</span>（3 位有效數字）。</p>",
    },

    // ── t5-1-q037 · numeric · exam · SL · SL 5.6, 5.8 · 4 marks
    "t5-1-q037": {
      // EN: <p>Let <span class="chem">f(x) = (x^2 - 3)e^{-0.4x}</span> for <span class="chem">x \in \mathbb{R}</span>. The graph of <span class="chem">f</span> has one local maximum point. Find the <span class="chem">y</span>-coordinate of this point, correct to 3 significant figures.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = (x^2 - 3)e^{-0.4x}</span>，其中 <span class=\"chem\">x \\in \\mathbb{R}</span>。<span class=\"chem\">f</span> 的圖像有一個局部極大點。求 (Find) 該點的 <span class=\"chem\">y</span> 坐標，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Sketch <span class="chem">y = f(x)</span> on your GDC first. The local maximum is to the right of the origin; you may need to widen the window (try <span class="chem">-3 &lt;= x &lt;= 15</span>).
        "先在 GDC 上繪畫 <span class=\"chem\">y = f(x)</span>。局部極大點位於原點右方；你可能需要擴大視窗（試用 <span class=\"chem\">-3 &lt;= x &lt;= 15</span>）。",
        // EN: Use the GDC maximum feature, or solve <span class="chem">f'(x) = e^{-0.4x}(2x - 0.4x^2 + 1.2) = 0</span>.
        "使用 GDC 的極大值功能，或解 <span class=\"chem\">f'(x) = e^{-0.4x}(2x - 0.4x^2 + 1.2) = 0</span>。",
      ],
      // EN: <p><span class="chem">f'(x) = 2x e^{-0.4x} - 0.4(x^2 - 3)e^{-0.4x} = e^{-0.4x}(-0.4x^2 + 2x + 1.2)</span>. Since <span class="chem">e^{-0.4x} &gt; 0</span>, <span class="chem">f'(x) = 0</span> when <span class="chem">x ≈ -0.541</span> or <span class="chem">x ≈ 5.541</span>. The quadratic factor is positive between the roots and negative after <span class="chem">5.541</span>, so <span class="chem">f'</span> changes from <span class="chem">+</span> to <span class="chem">-</span> there: a local maximum. <span class="chem">f(5.5414…) ≈ 3.0196</span>, so the <span class="chem">y</span>-coordinate is <span class="chem">3.02</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">f'(x) = 2x e^{-0.4x} - 0.4(x^2 - 3)e^{-0.4x} = e^{-0.4x}(-0.4x^2 + 2x + 1.2)</span>。由於 <span class=\"chem\">e^{-0.4x} &gt; 0</span>，當 <span class=\"chem\">x ≈ -0.541</span> 或 <span class=\"chem\">x ≈ 5.541</span> 時 <span class=\"chem\">f'(x) = 0</span>。二次因式在兩根之間為正、在 <span class=\"chem\">5.541</span> 之後為負，故 <span class=\"chem\">f'</span> 在該處由 <span class=\"chem\">+</span> 變為 <span class=\"chem\">-</span>：局部極大。<span class=\"chem\">f(5.5414…) ≈ 3.0196</span>，故 <span class=\"chem\">y</span> 坐標為 <span class=\"chem\">3.02</span>（3 位有效數字）。</p>",
    },

    // ── t5-1-q038 · short · exam · SL · SL 5.6, 5.7, 5.8 · 6 marks
    "t5-1-q038": {
      // EN: <p>Let <span class="chem">f(x) = x sin x</span> for <span class="chem">0 &lt; x &lt; pi</span>.<br>(a) Show that <span class="chem">f''(x) = 2 cos x - x sin x</span>. <strong>[2 marks]</strong><br>(b) Find the <span class="chem">x</span>-coordinate of the point of inflexion on the graph of <span class="chem">f</span>, and justify that it is a point of inflexion. <strong>[3 marks]</strong><br>(c) Find the gradient of the graph of <span class="chem">f</span> at the point of inflexion. <strong>[1 mark]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = x sin x</span>，其中 <span class=\"chem\">0 &lt; x &lt; pi</span>。<br>(a) 證明 (Show that) <span class=\"chem\">f''(x) = 2 cos x - x sin x</span>。<strong>[2 marks]</strong><br>(b) 求 (Find) <span class=\"chem\">f</span> 圖像上拐點的 <span class=\"chem\">x</span> 坐標，並說明它為何是拐點。<strong>[3 marks]</strong><br>(c) 求 (Find) <span class=\"chem\">f</span> 的圖像在拐點處的斜率。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: For (b) a point of inflexion needs <span class="chem">f''(x) = 0</span> <strong>and</strong> a change of sign of <span class="chem">f''</span>. The GDC gives the root; you still have to check the sign on each side.
        "對於 (b) 部，拐點需要 <span class=\"chem\">f''(x) = 0</span> <strong>及</strong> <span class=\"chem\">f''</span> 變號。GDC 會給出根；你仍須檢查兩側的正負。",
        // EN: For (c), the gradient is <span class="chem">f'(x) = sin x + x cos x</span> at your root (keep the full GDC value, not the rounded one).
        "對於 (c) 部，斜率是 <span class=\"chem\">f'(x) = sin x + x cos x</span> 在你所求的根處的值（保留 GDC 的完整數值，而非捨入後的值）。",
      ],
      // EN: <p>(a) <span class="chem">f'(x) = 1 * sin x + x cos x</span> and <span class="chem">f''(x) = cos x + (cos x - x sin x) = 2 cos x - x sin x</span>.<br>(b) The GDC gives one root of <span class="chem">2 cos x - x sin x = 0</span> in <span class="chem">0 &lt; x &lt; pi</span>: <span class="chem">x ≈ 1.07687</span>. Checking each side: <span class="chem">f''(1) ≈ 0.239 &gt; 0</span> and <span class="chem">f''(1.2) ≈ -0.394 &lt; 0</span>, so the concavity changes and <span class="chem">x ≈ 1.08</span> is a point of inflexion.<br>(c) <span class="chem">f'(1.07687…) = sin(1.07687…) + 1.07687… cos(1.07687…) ≈ 1.39</span>.</p>
      solution: "<p>(a) <span class=\"chem\">f'(x) = 1 * sin x + x cos x</span> 及 <span class=\"chem\">f''(x) = cos x + (cos x - x sin x) = 2 cos x - x sin x</span>。<br>(b) GDC 給出 <span class=\"chem\">2 cos x - x sin x = 0</span> 在 <span class=\"chem\">0 &lt; x &lt; pi</span> 內的一個根：<span class=\"chem\">x ≈ 1.07687</span>。檢查兩側：<span class=\"chem\">f''(1) ≈ 0.239 &gt; 0</span> 及 <span class=\"chem\">f''(1.2) ≈ -0.394 &lt; 0</span>，故凹性改變，<span class=\"chem\">x ≈ 1.08</span> 是拐點。<br>(c) <span class=\"chem\">f'(1.07687…) = sin(1.07687…) + 1.07687… cos(1.07687…) ≈ 1.39</span>。</p>",
      // EN: <p>(a) <span class="chem">f'(x) = sin x + x cos x</span>, so <span class="chem">f''(x) = 2 cos x - x sin x</span>.<br>(b) <span class="chem">x ≈ 1.08</span>; <span class="chem">f''</span> changes from positive to negative there.<br>(c) <span class="chem">f'(1.0769…) ≈ 1.39</span>.</p>
      answer: "<p>(a) <span class=\"chem\">f'(x) = sin x + x cos x</span>，故 <span class=\"chem\">f''(x) = 2 cos x - x sin x</span>。<br>(b) <span class=\"chem\">x ≈ 1.08</span>；<span class=\"chem\">f''</span> 在該處由正變負。<br>(c) <span class=\"chem\">f'(1.0769…) ≈ 1.39</span>。</p>",
      markscheme: [
        // EN: M1: Uses the product rule: <span class="chem">f'(x) = sin x + x cos x</span>.
        "M1：使用積法則：<span class=\"chem\">f'(x) = sin x + x cos x</span>。",
        // EN: A1: Differentiates again: <span class="chem">f''(x) = cos x + cos x - x sin x = 2 cos x - x sin x</span> (AG).
        "A1：再次求導：<span class=\"chem\">f''(x) = cos x + cos x - x sin x = 2 cos x - x sin x</span> (AG)。",
        // EN: M1: Solves <span class="chem">2 cos x - x sin x = 0</span> on the GDC.
        "M1：在 GDC 上解 <span class=\"chem\">2 cos x - x sin x = 0</span>。",
        // EN: A1: <span class="chem">x = 1.08</span> (<span class="chem">1.07687…</span>).
        "A1：<span class=\"chem\">x = 1.08</span>（<span class=\"chem\">1.07687…</span>）。",
        // EN: R1: <span class="chem">f''</span> changes sign there, e.g. <span class="chem">f''(1) ≈ 0.239 &gt; 0</span> and <span class="chem">f''(1.2) ≈ -0.394 &lt; 0</span>.
        "R1：<span class=\"chem\">f''</span> 在該處變號，例如 <span class=\"chem\">f''(1) ≈ 0.239 &gt; 0</span> 及 <span class=\"chem\">f''(1.2) ≈ -0.394 &lt; 0</span>。",
        // EN: A1: Gradient <span class="chem">f'(1.0769…) = 1.39</span>.
        "A1：斜率 <span class=\"chem\">f'(1.0769…) = 1.39</span>。",
      ],
    },

    // ── t5-1-q039 · numeric · exam · SL · SL 5.4, 5.6 · 5 marks
    "t5-1-q039": {
      // EN: <p>Consider the curve <span class="chem">y = e^x - 2x^2</span>. The tangent to the curve at the point where <span class="chem">x = 0</span> meets the curve again at the point <span class="chem">R</span>. Find the <span class="chem">x</span>-coordinate of <span class="chem">R</span>, correct to 3 significant figures.</p>
      stem: "<p>考慮曲線 <span class=\"chem\">y = e^x - 2x^2</span>。曲線在 <span class=\"chem\">x = 0</span> 的點處的切線與曲線再相交於點 <span class=\"chem\">R</span>。求 (Find) <span class=\"chem\">R</span> 的 <span class=\"chem\">x</span> 坐標，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: At <span class="chem">x = 0</span>: <span class="chem">y = 1</span> and <span class="chem">dy/dx = e^x - 4x = 1</span>, so the tangent is <span class="chem">y = x + 1</span>.
        "在 <span class=\"chem\">x = 0</span> 處：<span class=\"chem\">y = 1</span> 及 <span class=\"chem\">dy/dx = e^x - 4x = 1</span>，故切線為 <span class=\"chem\">y = x + 1</span>。",
        // EN: Graph <span class="chem">y = e^x - 2x^2</span> and <span class="chem">y = x + 1</span> and find their other intersection (the tangent touches at <span class="chem">x = 0</span>, so ignore that one).
        "繪畫 <span class=\"chem\">y = e^x - 2x^2</span> 及 <span class=\"chem\">y = x + 1</span> 的圖像，並求它們的另一個交點（切線在 <span class=\"chem\">x = 0</span> 處相切，故不用理會該點）。",
      ],
      // EN: <p>At <span class="chem">x = 0</span>, <span class="chem">y = 1</span> and <span class="chem">dy/dx = e^0 - 0 = 1</span>, so the tangent is <span class="chem">y = x + 1</span>. Solving <span class="chem">e^x - 2x^2 = x + 1</span> on the GDC gives <span class="chem">x = 0</span> (the point of contact) and <span class="chem">x ≈ 3.2136</span>. So <span class="chem">R</span> has <span class="chem">x</span>-coordinate <span class="chem">3.21</span> (3 s.f.).</p>
      solution: "<p>在 <span class=\"chem\">x = 0</span> 處，<span class=\"chem\">y = 1</span> 及 <span class=\"chem\">dy/dx = e^0 - 0 = 1</span>，故切線為 <span class=\"chem\">y = x + 1</span>。在 GDC 上解 <span class=\"chem\">e^x - 2x^2 = x + 1</span> 得 <span class=\"chem\">x = 0</span>（切點）及 <span class=\"chem\">x ≈ 3.2136</span>。故 <span class=\"chem\">R</span> 的 <span class=\"chem\">x</span> 坐標為 <span class=\"chem\">3.21</span>（3 位有效數字）。</p>",
    },

    // ── t5-1-q040 · short · exam · SL · SL 5.7, 5.8 · 6 marks
    "t5-1-q040": {
      // EN: <p>A function <span class="chem">f</span> is defined for <span class="chem">0 &lt;= x &lt;= 4</span>. Its <strong>derivative</strong> is <span class="chem">f'(x) = x cos x - 0.5</span>.<br>(a) Find the <span class="chem">x</span>-coordinate of the local maximum point of <span class="chem">f</span>, justifying your answer. <strong>[3 marks]</strong><br>(b) Find the <span class="chem">x</span>-coordinates of the points of inflexion of the graph of <span class="chem">f</span>. <strong>[3 marks]</strong></p>
      stem: "<p>函數 <span class=\"chem\">f</span> 的定義域為 <span class=\"chem\">0 &lt;= x &lt;= 4</span>。其<strong>導數</strong>為 <span class=\"chem\">f'(x) = x cos x - 0.5</span>。<br>(a) 求 (Find) <span class=\"chem\">f</span> 的局部極大點的 <span class=\"chem\">x</span> 坐標，並說明理由。<strong>[3 marks]</strong><br>(b) 求 (Find) <span class=\"chem\">f</span> 的圖像上各拐點的 <span class=\"chem\">x</span> 坐標。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: you are given the derivative <span class="chem">f'</span>, not <span class="chem">f</span>. Stationary points of <span class="chem">f</span> are the zeros of <span class="chem">f'</span>; inflexion points of <span class="chem">f</span> are the turning points of <span class="chem">f'</span>.
        "解碼：題目給出的是導數 <span class=\"chem\">f'</span>，而不是 <span class=\"chem\">f</span>。<span class=\"chem\">f</span> 的駐點是 <span class=\"chem\">f'</span> 的零點；<span class=\"chem\">f</span> 的拐點是 <span class=\"chem\">f'</span> 的轉向點。",
        // EN: Graph <span class="chem">y = x cos x - 0.5</span> for <span class="chem">0 &lt;= x &lt;= 4</span>. A local maximum of <span class="chem">f</span> is where this graph crosses the axis going <strong>down</strong>.
        "在 <span class=\"chem\">0 &lt;= x &lt;= 4</span> 上繪畫 <span class=\"chem\">y = x cos x - 0.5</span> 的圖像。<span class=\"chem\">f</span> 的局部極大點位於該圖像<strong>向下</strong>穿過軸之處。",
        // EN: Use the GDC maximum and minimum features on the graph of <span class="chem">f'</span> for (b).
        "對於 (b) 部，在 <span class=\"chem\">f'</span> 的圖像上使用 GDC 的極大值及極小值功能。",
      ],
      // EN: <p>(a) <span class="chem">f'(0) = -0.5 &lt; 0</span>. The GDC gives zeros of <span class="chem">f'</span> at <span class="chem">x ≈ 0.610</span> (where <span class="chem">f'</span> goes from <span class="chem">-</span> to <span class="chem">+</span>, a local minimum of <span class="chem">f</span>) and <span class="chem">x ≈ 1.098</span> (where <span class="chem">f'</span> goes from <span class="chem">+</span> to <span class="chem">-</span>). So the local maximum of <span class="chem">f</span> is at <span class="chem">x ≈ 1.10</span>.<br>(b) <span class="chem">f''</span> is the gradient of <span class="chem">f'</span>, so it is zero and changes sign at the turning points of <span class="chem">y = f'(x)</span>. The GDC gives a maximum of <span class="chem">f'</span> at <span class="chem">x ≈ 0.860</span> and a minimum at <span class="chem">x ≈ 3.43</span>. The points of inflexion are at <span class="chem">x ≈ 0.860</span> and <span class="chem">x ≈ 3.43</span>.</p>
      solution: "<p>(a) <span class=\"chem\">f'(0) = -0.5 &lt; 0</span>。GDC 給出 <span class=\"chem\">f'</span> 的零點在 <span class=\"chem\">x ≈ 0.610</span>（<span class=\"chem\">f'</span> 在該處由 <span class=\"chem\">-</span> 變為 <span class=\"chem\">+</span>，是 <span class=\"chem\">f</span> 的局部極小點）及 <span class=\"chem\">x ≈ 1.098</span>（<span class=\"chem\">f'</span> 在該處由 <span class=\"chem\">+</span> 變為 <span class=\"chem\">-</span>）。故 <span class=\"chem\">f</span> 的局部極大點位於 <span class=\"chem\">x ≈ 1.10</span>。<br>(b) <span class=\"chem\">f''</span> 是 <span class=\"chem\">f'</span> 的斜率，故它在 <span class=\"chem\">y = f'(x)</span> 的轉向點處為零並變號。GDC 給出 <span class=\"chem\">f'</span> 在 <span class=\"chem\">x ≈ 0.860</span> 處有極大值，在 <span class=\"chem\">x ≈ 3.43</span> 處有極小值。拐點位於 <span class=\"chem\">x ≈ 0.860</span> 及 <span class=\"chem\">x ≈ 3.43</span>。</p>",
      // EN: <p>(a) <span class="chem">x ≈ 1.10</span>, where <span class="chem">f'</span> changes from positive to negative.<br>(b) <span class="chem">x ≈ 0.860</span> and <span class="chem">x ≈ 3.43</span> (the turning points of <span class="chem">f'</span>).</p>
      answer: "<p>(a) <span class=\"chem\">x ≈ 1.10</span>，<span class=\"chem\">f'</span> 在該處由正變負。<br>(b) <span class=\"chem\">x ≈ 0.860</span> 及 <span class=\"chem\">x ≈ 3.43</span>（<span class=\"chem\">f'</span> 的轉向點）。</p>",
      markscheme: [
        // EN: M1: Solves <span class="chem">f'(x) = 0</span> on the GDC: <span class="chem">x = 0.610</span> and <span class="chem">x = 1.10</span>.
        "M1：在 GDC 上解 <span class=\"chem\">f'(x) = 0</span>：<span class=\"chem\">x = 0.610</span> 及 <span class=\"chem\">x = 1.10</span>。",
        // EN: R1: <span class="chem">f'</span> changes from positive to negative at <span class="chem">x = 1.10</span> (it goes from negative to positive at <span class="chem">0.610</span>, a minimum).
        "R1：<span class=\"chem\">f'</span> 在 <span class=\"chem\">x = 1.10</span> 處由正變負（在 <span class=\"chem\">0.610</span> 處由負變正，是極小點）。",
        // EN: A1: <span class="chem">x = 1.10</span> (<span class="chem">1.09800…</span>).
        "A1：<span class=\"chem\">x = 1.10</span>（<span class=\"chem\">1.09800…</span>）。",
        // EN: M1: Points of inflexion are at the turning points of <span class="chem">y = f'(x)</span> (where <span class="chem">f''(x) = cos x - x sin x = 0</span> and changes sign).
        "M1：拐點位於 <span class=\"chem\">y = f'(x)</span> 的轉向點（即 <span class=\"chem\">f''(x) = cos x - x sin x = 0</span> 並變號之處）。",
        // EN: A1: <span class="chem">x = 0.860</span>.
        "A1：<span class=\"chem\">x = 0.860</span>。",
        // EN: A1: <span class="chem">x = 3.43</span>.
        "A1：<span class=\"chem\">x = 3.43</span>。",
      ],
    },

    // ── t5-1-q041 · numeric · exam · SL · SL 5.8 · 5 marks
    "t5-1-q041": {
      // EN: <p>The entrance to a tunnel is modelled by the region between the <span class="chem">x</span>-axis and the curve <span class="chem">y = 8 cos(x/2)</span> for <span class="chem">-pi &lt;= x &lt;= pi</span>, where lengths are in metres. A rectangular door is fitted with its base on the <span class="chem">x</span>-axis and its two top corners on the curve, at <span class="chem">(-x, y)</span> and <span class="chem">(x, y)</span>. Find the maximum possible area of the door, in <span class="unit">m2</span>, correct to 3 significant figures.</p>
      stem: "<p>一條隧道的入口以 <span class=\"chem\">x</span> 軸與曲線 <span class=\"chem\">y = 8 cos(x/2)</span>（<span class=\"chem\">-pi &lt;= x &lt;= pi</span>）之間的區域作為模型，長度以米為單位。一道長方形門的底邊位於 <span class=\"chem\">x</span> 軸上，兩個上角位於曲線上的 <span class=\"chem\">(-x, y)</span> 及 <span class=\"chem\">(x, y)</span>。求 (Find) 門的最大可能面積，以 <span class=\"unit\">m2</span> 為單位，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: The door is <span class="chem">2x</span> wide and <span class="chem">8 cos(x/2)</span> high, so <span class="chem">A(x) = 16x cos(x/2)</span> for <span class="chem">0 &lt; x &lt; pi</span>.
        "門寬 <span class=\"chem\">2x</span>、高 <span class=\"chem\">8 cos(x/2)</span>，故 <span class=\"chem\">A(x) = 16x cos(x/2)</span>，其中 <span class=\"chem\">0 &lt; x &lt; pi</span>。",
        // EN: Graph <span class="chem">A(x)</span> on the GDC (radian mode) and use the maximum feature. Check that the area is <span class="chem">0</span> at both ends of the domain.
        "在 GDC（弧度模式）上繪畫 <span class=\"chem\">A(x)</span> 的圖像並使用極大值功能。檢查面積在定義域兩端均為 <span class=\"chem\">0</span>。",
      ],
      // EN: <p><span class="chem">A(x) = 2x * 8 cos(x/2) = 16x cos(x/2)</span>, <span class="chem">0 &lt; x &lt; pi</span>. <span class="chem">A'(x) = 16 cos(x/2) - 8x sin(x/2) = 0</span> gives <span class="chem">x ≈ 1.7207</span>. Since <span class="chem">A -&gt; 0</span> at both ends of the domain, this is the maximum: <span class="chem">A ≈ 17.955</span>, i.e. <span class="chem">18.0</span> <span class="unit">m2</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">A(x) = 2x * 8 cos(x/2) = 16x cos(x/2)</span>，<span class=\"chem\">0 &lt; x &lt; pi</span>。<span class=\"chem\">A'(x) = 16 cos(x/2) - 8x sin(x/2) = 0</span> 得 <span class=\"chem\">x ≈ 1.7207</span>。由於在定義域兩端 <span class=\"chem\">A -&gt; 0</span>，此為最大值：<span class=\"chem\">A ≈ 17.955</span>，即 <span class=\"chem\">18.0</span> <span class=\"unit\">m2</span>（3 位有效數字）。</p>",
    },

    // ── t5-1-q042 · numeric · challenge · SL · SL 5.7, 5.8 · 6 marks
    "t5-1-q042": {
      // EN: <p>After a tablet is taken, the concentration of a drug in the blood is <span class="chem">C(t) = 15(e^{-0.2t} - e^{-0.9t})</span> <span class="unit">mg L-1</span>, where <span class="chem">t</span> is the time in hours, <span class="chem">t &gt;= 0</span>. The concentration rises to a peak and then falls. Find the greatest rate at which the concentration is decreasing, in <span class="unit">mg L-1</span> per hour, correct to 3 significant figures.</p>
      stem: "<p>服下藥片後，血液中藥物的濃度為 <span class=\"chem\">C(t) = 15(e^{-0.2t} - e^{-0.9t})</span> <span class=\"unit\">mg L-1</span>，其中 <span class=\"chem\">t</span> 是以小時計的時間，<span class=\"chem\">t &gt;= 0</span>。濃度先上升至峰值，然後下降。求 (Find) 濃度下降的最大速率，以每小時 <span class=\"unit\">mg L-1</span> 為單位，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: “rate of decrease” is <span class="chem">-C'(t)</span>. Its greatest value is where <span class="chem">C'(t)</span> is most negative, i.e. the minimum of <span class="chem">C'</span>. That is where <span class="chem">C''(t) = 0</span>: a point of inflexion of <span class="chem">C</span>.
        "解碼：「下降速率」是 <span class=\"chem\">-C'(t)</span>。它的最大值出現在 <span class=\"chem\">C'(t)</span> 最負之處，即 <span class=\"chem\">C'</span> 的最小值。該處 <span class=\"chem\">C''(t) = 0</span>：是 <span class=\"chem\">C</span> 的拐點。",
        // EN: Graph <span class="chem">y = C'(t)</span> (enter it by hand, or as the GDC derivative of <span class="chem">C</span>) for <span class="chem">0 &lt;= t &lt;= 20</span> and find its minimum.
        "在 <span class=\"chem\">0 &lt;= t &lt;= 20</span> 上繪畫 <span class=\"chem\">y = C'(t)</span> 的圖像（以人手輸入，或用 GDC 對 <span class=\"chem\">C</span> 求導），並求其最小值。",
        // EN: Check the ends: <span class="chem">C'(0) = 10.5 &gt; 0</span> (the concentration is rising then), and <span class="chem">C'(t) -&gt; 0</span> as <span class="chem">t</span> grows, so the minimum of <span class="chem">C'</span> really is the turning point.
        "檢查兩端：<span class=\"chem\">C'(0) = 10.5 &gt; 0</span>（濃度當時正在上升），而當 <span class=\"chem\">t</span> 增大時 <span class=\"chem\">C'(t) -&gt; 0</span>，故 <span class=\"chem\">C'</span> 的最小值確實在轉向點。",
      ],
      // EN: <p><strong>Decode:</strong> the greatest rate of decrease is the most negative value of <span class="chem">C'(t)</span>, found where <span class="chem">C''(t) = 0</span> (the inflexion point of <span class="chem">C</span>).<br><span class="chem">C'(t) = 15(-0.2e^{-0.2t} + 0.9e^{-0.9t})</span> and <span class="chem">C''(t) = 15(0.04e^{-0.2t} - 0.81e^{-0.9t})</span>. <span class="chem">C''(t) = 0</span> at <span class="chem">t ≈ 4.297</span> (exactly <span class="chem">ln(20.25) / 0.7</span>), and <span class="chem">C''</span> changes from negative to positive there, so <span class="chem">C'</span> has its minimum. <span class="chem">C'(4.297…) ≈ -0.9879</span>. At <span class="chem">t = 0</span> the concentration is increasing (<span class="chem">C'(0) = 10.5</span>), and for large <span class="chem">t</span>, <span class="chem">C'(t) -&gt; 0</span>, so no endpoint gives a faster decrease. The greatest rate of decrease is <span class="chem">0.988</span> <span class="unit">mg L-1</span> per hour (3 s.f.).</p>
      solution: "<p><strong>解碼：</strong>最大下降速率是 <span class=\"chem\">C'(t)</span> 的最負值，出現在 <span class=\"chem\">C''(t) = 0</span> 之處（<span class=\"chem\">C</span> 的拐點）。<br><span class=\"chem\">C'(t) = 15(-0.2e^{-0.2t} + 0.9e^{-0.9t})</span> 及 <span class=\"chem\">C''(t) = 15(0.04e^{-0.2t} - 0.81e^{-0.9t})</span>。在 <span class=\"chem\">t ≈ 4.297</span> 時 <span class=\"chem\">C''(t) = 0</span>（準確值為 <span class=\"chem\">ln(20.25) / 0.7</span>），且 <span class=\"chem\">C''</span> 在該處由負變正，故 <span class=\"chem\">C'</span> 在該處取得最小值。<span class=\"chem\">C'(4.297…) ≈ -0.9879</span>。在 <span class=\"chem\">t = 0</span> 時濃度正在增加（<span class=\"chem\">C'(0) = 10.5</span>），而當 <span class=\"chem\">t</span> 很大時 <span class=\"chem\">C'(t) -&gt; 0</span>，故沒有端點給出更快的下降。最大下降速率為每小時 <span class=\"chem\">0.988</span> <span class=\"unit\">mg L-1</span>（3 位有效數字）。</p>",
    },

    // ── t5-1-q043 · numeric · challenge · SL · SL 5.8 · 6 marks
    "t5-1-q043": {
      // EN: <p>A sensor is placed at the point <span class="chem">A(2, 1)</span>. A cable is to be laid in a straight line from <span class="chem">A</span> to a point <span class="chem">P</span> on the curve <span class="chem">y = e^{x/2}</span>. Find the length of the shortest possible cable, correct to 3 significant figures.</p>
      stem: "<p>一個感應器放置於點 <span class=\"chem\">A(2, 1)</span>。要由 <span class=\"chem\">A</span> 沿直線鋪設電纜至曲線 <span class=\"chem\">y = e^{x/2}</span> 上的一點 <span class=\"chem\">P</span>。求 (Find) 最短可能的電纜長度，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: “shortest cable” means the minimum distance from <span class="chem">A</span> to a point <span class="chem">P(x, e^{x/2})</span> on the curve. Write the distance as a function of the single variable <span class="chem">x</span> and minimise it.
        "解碼：「最短電纜」是指由 <span class=\"chem\">A</span> 到曲線上一點 <span class=\"chem\">P(x, e^{x/2})</span> 的最短距離。把距離寫成單一變數 <span class=\"chem\">x</span> 的函數，再求其最小值。",
        // EN: <span class="chem">AP = sqrt((x - 2)^2 + (e^{x/2} - 1)^2)</span>. The square <span class="chem">D = AP^2</span> has its minimum at the same <span class="chem">x</span> and is easier to differentiate.
        "<span class=\"chem\">AP = sqrt((x - 2)^2 + (e^{x/2} - 1)^2)</span>。平方 <span class=\"chem\">D = AP^2</span> 在同一個 <span class=\"chem\">x</span> 處取得最小值，而且較易求導。",
        // EN: Use the GDC minimum on the graph of <span class="chem">AP</span> (or solve <span class="chem">D'(x) = 0</span>), then give the distance, not the <span class="chem">x</span>-value.
        "在 <span class=\"chem\">AP</span> 的圖像上使用 GDC 的極小值功能（或解 <span class=\"chem\">D'(x) = 0</span>），然後給出距離，而不是 <span class=\"chem\">x</span> 值。",
      ],
      // EN: <p><strong>Decode:</strong> minimise the distance <span class="chem">AP</span> where <span class="chem">P = (x, e^{x/2})</span>.<br><span class="chem">D(x) = AP^2 = (x - 2)^2 + (e^{x/2} - 1)^2</span>, <span class="chem">D'(x) = 2(x - 2) + e^{x/2}(e^{x/2} - 1) = 0</span>. The GDC gives the single solution <span class="chem">x ≈ 1.2230</span>, and the graph of <span class="chem">AP</span> shows it is a minimum (the distance grows without bound in both directions). Then <span class="chem">AP = sqrt(D(1.2230…)) ≈ 1.1466</span>, so the shortest cable is <span class="chem">1.15</span> units (3 s.f.).</p>
      solution: "<p><strong>解碼：</strong>求距離 <span class=\"chem\">AP</span> 的最小值，其中 <span class=\"chem\">P = (x, e^{x/2})</span>。<br><span class=\"chem\">D(x) = AP^2 = (x - 2)^2 + (e^{x/2} - 1)^2</span>，<span class=\"chem\">D'(x) = 2(x - 2) + e^{x/2}(e^{x/2} - 1) = 0</span>。GDC 給出唯一解 <span class=\"chem\">x ≈ 1.2230</span>，而 <span class=\"chem\">AP</span> 的圖像顯示它是最小值（距離在兩個方向上都無界地增大）。於是 <span class=\"chem\">AP = sqrt(D(1.2230…)) ≈ 1.1466</span>，故最短電纜長 <span class=\"chem\">1.15</span> 個單位（3 位有效數字）。</p>",
    },

    // ── t5-1-q044 · numeric · challenge · SL · SL 5.7, 5.8 · 6 marks
    "t5-1-q044": {
      // EN: <p>The depth of water in a harbour, <span class="chem">h</span> metres, <span class="chem">t</span> hours after midnight is modelled by <span class="chem">h(t) = 3 + 1.8 sin(0.5t) + 0.6 cos t</span> for <span class="chem">0 &lt;= t &lt;= 12</span>. Find the greatest rate at which the water is rising during this period, in metres per hour, correct to 3 significant figures.</p>
      stem: "<p>午夜後 <span class=\"chem\">t</span> 小時，港口的水深 <span class=\"chem\">h</span> 米的模型為 <span class=\"chem\">h(t) = 3 + 1.8 sin(0.5t) + 0.6 cos t</span>，其中 <span class=\"chem\">0 &lt;= t &lt;= 12</span>。求 (Find) 在這段時間內水位上升的最大速率，以每小時米為單位，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: “rate at which the water is rising” is <span class="chem">h'(t)</span>. You need the <strong>maximum of <span class="chem">h'</span></strong> on <span class="chem">[0, 12]</span>, not the maximum of <span class="chem">h</span>. Candidates are the turning points of <span class="chem">h'</span> and the two endpoints.
        "解碼：「水位上升的速率」是 <span class=\"chem\">h'(t)</span>。你需要求 <span class=\"chem\">[0, 12]</span> 上的 <strong><span class=\"chem\">h'</span> 的最大值</strong>，而不是 <span class=\"chem\">h</span> 的最大值。候選點是 <span class=\"chem\">h'</span> 的轉向點及兩個端點。",
        // EN: <span class="chem">h'(t) = 0.9 cos(0.5t) - 0.6 sin t</span>. Graph it for <span class="chem">0 &lt;= t &lt;= 12</span> (radian mode).
        "<span class=\"chem\">h'(t) = 0.9 cos(0.5t) - 0.6 sin t</span>。在 <span class=\"chem\">0 &lt;= t &lt;= 12</span> 上繪畫其圖像（弧度模式）。",
        // EN: There are two local maxima of <span class="chem">h'</span>. Compare them with <span class="chem">h'(0)</span> and <span class="chem">h'(12)</span>.
        "<span class=\"chem\">h'</span> 有兩個局部極大值。把它們與 <span class=\"chem\">h'(0)</span> 及 <span class=\"chem\">h'(12)</span> 比較。",
      ],
      // EN: <p><strong>Decode:</strong> maximise the rate of change <span class="chem">h'(t)</span> over the closed interval <span class="chem">[0, 12]</span>, checking the endpoints.<br><span class="chem">h'(t) = 0.9 cos(0.5t) - 0.6 sin t</span>. Its local maxima (where <span class="chem">h''(t) = -0.45 sin(0.5t) - 0.6 cos t = 0</span>) are <span class="chem">h'(3.952…) ≈ 0.080</span> and <span class="chem">h'(11.416…) ≈ 1.3029</span>. The endpoints give <span class="chem">h'(0) = 0.9</span> and <span class="chem">h'(12) ≈ 1.186</span>. The greatest is <span class="chem">1.30</span> metres per hour (3 s.f.), at <span class="chem">t ≈ 11.4</span>.</p>
      solution: "<p><strong>解碼：</strong>在閉區間 <span class=\"chem\">[0, 12]</span> 上求變化率 <span class=\"chem\">h'(t)</span> 的最大值，並檢查端點。<br><span class=\"chem\">h'(t) = 0.9 cos(0.5t) - 0.6 sin t</span>。其局部極大值（在 <span class=\"chem\">h''(t) = -0.45 sin(0.5t) - 0.6 cos t = 0</span> 之處）為 <span class=\"chem\">h'(3.952…) ≈ 0.080</span> 及 <span class=\"chem\">h'(11.416…) ≈ 1.3029</span>。端點給出 <span class=\"chem\">h'(0) = 0.9</span> 及 <span class=\"chem\">h'(12) ≈ 1.186</span>。最大值為每小時 <span class=\"chem\">1.30</span> 米（3 位有效數字），在 <span class=\"chem\">t ≈ 11.4</span> 時。</p>",
    },

    // ── t5-1-q045 · short · exam · SL · SL 5.2, 5.6 · 4 marks
    "t5-1-q045": {
      // EN: <p>Let <span class="chem">f(x) = e^{0.5x} - x^2</span>. Find the set of values of <span class="chem">x</span> for which <span class="chem">f</span> is decreasing. Give the endpoints of the interval correct to 3 significant figures. <strong>[4 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = e^{0.5x} - x^2</span>。求 (Find) 使 <span class=\"chem\">f</span> 遞減的 <span class=\"chem\">x</span> 值的集合。區間的端點須準確至 3 位有效數字。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: <span class="chem">f</span> is decreasing where <span class="chem">f'(x) &lt; 0</span>. This equation cannot be solved algebraically, so use the GDC.
        "<span class=\"chem\">f</span> 在 <span class=\"chem\">f'(x) &lt; 0</span> 之處遞減。此方程不能以代數方法求解，故須使用 GDC。",
        // EN: Graph <span class="chem">y = 0.5e^{0.5x} - 2x</span> with a wide enough window to see <strong>both</strong> zeros (try <span class="chem">-2 &lt;= x &lt;= 8</span>).
        "以足夠寬的視窗繪畫 <span class=\"chem\">y = 0.5e^{0.5x} - 2x</span> 的圖像，以看到<strong>兩個</strong>零點（試用 <span class=\"chem\">-2 &lt;= x &lt;= 8</span>）。",
      ],
      // EN: <p><span class="chem">f'(x) = 0.5e^{0.5x} - 2x</span>. The GDC gives zeros at <span class="chem">x ≈ 0.28884</span> and <span class="chem">x ≈ 6.5234</span>, and <span class="chem">f'(x) &lt; 0</span> between them (e.g. <span class="chem">f'(1) ≈ -1.18</span>). So <span class="chem">f</span> is decreasing for <span class="chem">0.289 &lt; x &lt; 6.52</span>.</p>
      solution: "<p><span class=\"chem\">f'(x) = 0.5e^{0.5x} - 2x</span>。GDC 給出零點在 <span class=\"chem\">x ≈ 0.28884</span> 及 <span class=\"chem\">x ≈ 6.5234</span>，而在兩者之間 <span class=\"chem\">f'(x) &lt; 0</span>（例如 <span class=\"chem\">f'(1) ≈ -1.18</span>）。故 <span class=\"chem\">f</span> 在 <span class=\"chem\">0.289 &lt; x &lt; 6.52</span> 時遞減。</p>",
      // EN: <p><span class="chem">0.289 &lt; x &lt; 6.52</span>.</p>
      answer: "<p><span class=\"chem\">0.289 &lt; x &lt; 6.52</span>。</p>",
      markscheme: [
        // EN: A1: <span class="chem">f'(x) = 0.5e^{0.5x} - 2x</span>.
        "A1：<span class=\"chem\">f'(x) = 0.5e^{0.5x} - 2x</span>。",
        // EN: M1: Solves <span class="chem">f'(x) = 0</span> (or <span class="chem">f'(x) &lt; 0</span>) using the GDC.
        "M1：使用 GDC 解 <span class=\"chem\">f'(x) = 0</span>（或 <span class=\"chem\">f'(x) &lt; 0</span>）。",
        // EN: A1: <span class="chem">x = 0.289</span> and <span class="chem">x = 6.52</span>.
        "A1：<span class=\"chem\">x = 0.289</span> 及 <span class=\"chem\">x = 6.52</span>。",
        // EN: A1: <span class="chem">0.289 &lt; x &lt; 6.52</span> (accept <span class="chem">&lt;=</span>).
        "A1：<span class=\"chem\">0.289 &lt; x &lt; 6.52</span>（接受 <span class=\"chem\">&lt;=</span>）。",
      ],
    },

    // ── t5-1-q046 · numeric · exam · SL · SL 5.7, 5.8 · 5 marks
    "t5-1-q046": {
      // EN: <p>Let <span class="chem">f(x) = x^3 / 6 - 2x - e^{-x}</span>. The graph of <span class="chem">f</span> has exactly one point of inflexion. Find its <span class="chem">x</span>-coordinate, correct to 3 significant figures.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = x^3 / 6 - 2x - e^{-x}</span>。<span class=\"chem\">f</span> 的圖像恰有一個拐點。求 (Find) 其 <span class=\"chem\">x</span> 坐標，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Differentiate twice: <span class="chem">f'(x) = x^2/2 - 2 + e^{-x}</span>, so <span class="chem">f''(x) = x - e^{-x}</span>.
        "求導兩次：<span class=\"chem\">f'(x) = x^2/2 - 2 + e^{-x}</span>，故 <span class=\"chem\">f''(x) = x - e^{-x}</span>。",
        // EN: Solve <span class="chem">x - e^{-x} = 0</span> on the GDC. Then check that <span class="chem">f''</span> changes sign there.
        "在 GDC 上解 <span class=\"chem\">x - e^{-x} = 0</span>。然後檢查 <span class=\"chem\">f''</span> 在該處變號。",
      ],
      // EN: <p><span class="chem">f'(x) = x^2/2 - 2 + e^{-x}</span> and <span class="chem">f''(x) = x - e^{-x}</span>. The GDC gives <span class="chem">f''(x) = 0</span> at <span class="chem">x ≈ 0.56714</span>. Since <span class="chem">f''</span> is increasing (its derivative <span class="chem">1 + e^{-x}</span> is always positive), it changes from negative to positive there, so this is a point of inflexion: <span class="chem">x = 0.567</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">f'(x) = x^2/2 - 2 + e^{-x}</span> 及 <span class=\"chem\">f''(x) = x - e^{-x}</span>。GDC 給出在 <span class=\"chem\">x ≈ 0.56714</span> 處 <span class=\"chem\">f''(x) = 0</span>。由於 <span class=\"chem\">f''</span> 是遞增的（其導數 <span class=\"chem\">1 + e^{-x}</span> 恆為正），它在該處由負變正，故這是拐點：<span class=\"chem\">x = 0.567</span>（3 位有效數字）。</p>",
    },

    // ── t5-1-q047 · numeric · challenge · SL · SL 5.8 · 6 marks
    "t5-1-q047": {
      // EN: <p>A workshop’s weekly profit is <span class="chem">P(x) = -0.02x^3 + 0.9x^2 + 5x - 40</span> thousand dollars, where <span class="chem">x</span> is the number of <strong>hundreds</strong> of chairs made in the week. The workshop can make at most <span class="chem">2500</span> chairs in a week. Find the number of chairs the workshop should make in a week to maximise its profit.</p>
      stem: "<p>一間工場每週的利潤為 <span class=\"chem\">P(x) = -0.02x^3 + 0.9x^2 + 5x - 40</span> 千元，其中 <span class=\"chem\">x</span> 是該週所製造椅子的<strong>百張</strong>數。工場每週最多可製造 <span class=\"chem\">2500</span> 張椅子。求 (Find) 工場每週應製造多少張椅子以使利潤最大。</p>",
      hints: [
        // EN: Decode: two hidden details. The capacity limit gives the domain <span class="chem">0 &lt;= x &lt;= 25</span> (in hundreds), and the answer must be the number of <strong>chairs</strong>, not the value of <span class="chem">x</span>.
        "解碼：兩個隱藏細節。產能上限給出定義域 <span class=\"chem\">0 &lt;= x &lt;= 25</span>（以百張計），而答案必須是<strong>椅子</strong>的數目，而不是 <span class=\"chem\">x</span> 的值。",
        // EN: Solve <span class="chem">P'(x) = -0.06x^2 + 1.8x + 5 = 0</span> with the GDC. Is the positive root inside the domain?
        "用 GDC 解 <span class=\"chem\">P'(x) = -0.06x^2 + 1.8x + 5 = 0</span>。正根是否在定義域內？",
        // EN: If <span class="chem">P'(x) &gt; 0</span> on the whole domain, then <span class="chem">P</span> is increasing and the maximum is at an endpoint.
        "若在整個定義域上 <span class=\"chem\">P'(x) &gt; 0</span>，則 <span class=\"chem\">P</span> 遞增，最大值出現在端點。",
      ],
      // EN: <p><strong>Decode:</strong> the domain is <span class="chem">0 &lt;= x &lt;= 25</span>, and the answer is <span class="chem">100x</span> chairs.<br><span class="chem">P'(x) = -0.06x^2 + 1.8x + 5 = 0</span> gives <span class="chem">x ≈ -2.56</span> or <span class="chem">x ≈ 32.6</span>, both outside <span class="chem">[0, 25]</span>. Since <span class="chem">P'(0) = 5 &gt; 0</span>, <span class="chem">P'(x) &gt; 0</span> throughout the domain, so <span class="chem">P</span> is increasing and its maximum is at the endpoint <span class="chem">x = 25</span>: <span class="chem">P(25) = -312.5 + 562.5 + 125 - 40 = 335</span> thousand dollars. The workshop should make <span class="chem">25 * 100 = 2500</span> chairs (its full capacity).</p>
      solution: "<p><strong>解碼：</strong>定義域為 <span class=\"chem\">0 &lt;= x &lt;= 25</span>，答案是 <span class=\"chem\">100x</span> 張椅子。<br><span class=\"chem\">P'(x) = -0.06x^2 + 1.8x + 5 = 0</span> 得 <span class=\"chem\">x ≈ -2.56</span> 或 <span class=\"chem\">x ≈ 32.6</span>，兩者均在 <span class=\"chem\">[0, 25]</span> 以外。由於 <span class=\"chem\">P'(0) = 5 &gt; 0</span>，在整個定義域上 <span class=\"chem\">P'(x) &gt; 0</span>，故 <span class=\"chem\">P</span> 遞增，最大值出現在端點 <span class=\"chem\">x = 25</span>：<span class=\"chem\">P(25) = -312.5 + 562.5 + 125 - 40 = 335</span> 千元。工場應每週製造 <span class=\"chem\">25 * 100 = 2500</span> 張椅子（即其全部產能）。</p>",
    },

    // ── t5-1-q048 · numeric · challenge · SL · SL 5.6, 5.8 · 7 marks
    "t5-1-q048": {
      // EN: <p>A corridor <span class="chem">2.4</span> <span class="unit">m</span> wide meets a corridor <span class="chem">1.6</span> <span class="unit">m</span> wide at a right angle. A straight pole touching the outer walls and the inner corner makes an angle <span class="chem">theta</span> with the walls of the wider corridor, and its length is <span class="chem">L(theta) = 2.4 / sin theta + 1.6 / cos theta</span>, <span class="chem">0 &lt; theta &lt; pi/2</span>. Find the length of the longest pole that can be carried horizontally around the corner, correct to 3 significant figures.</p>
      stem: "<p>一條寬 <span class=\"chem\">2.4</span> <span class=\"unit\">m</span> 的走廊與一條寬 <span class=\"chem\">1.6</span> <span class=\"unit\">m</span> 的走廊成直角相接。一支觸及外牆及內角的直桿與較寬走廊的牆成角 <span class=\"chem\">theta</span>，其長度為 <span class=\"chem\">L(theta) = 2.4 / sin theta + 1.6 / cos theta</span>，<span class=\"chem\">0 &lt; theta &lt; pi/2</span>。求 (Find) 能水平地搬過轉角的最長桿子的長度，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: a pole gets round the corner only if it is shorter than <span class="chem">L(theta)</span> for <strong>every</strong> angle on the way round. So the longest pole that fits equals the <strong>minimum</strong> of <span class="chem">L(theta)</span>, not its maximum.
        "解碼：只有當桿子在轉彎途中對<strong>每一個</strong>角度都比 <span class=\"chem\">L(theta)</span> 短時，它才能通過轉角。故能通過的最長桿子等於 <span class=\"chem\">L(theta)</span> 的<strong>最小值</strong>，而不是其最大值。",
        // EN: Graph <span class="chem">L(theta)</span> for <span class="chem">0 &lt; theta &lt; pi/2</span> (radian mode). It tends to infinity at both ends.
        "在 <span class=\"chem\">0 &lt; theta &lt; pi/2</span> 上繪畫 <span class=\"chem\">L(theta)</span> 的圖像（弧度模式）。它在兩端均趨向無限大。",
        // EN: Use the GDC minimum, or solve <span class="chem">L'(theta) = -2.4 cos theta / sin^2 theta + 1.6 sin theta / cos^2 theta = 0</span>.
        "使用 GDC 的極小值功能，或解 <span class=\"chem\">L'(theta) = -2.4 cos theta / sin^2 theta + 1.6 sin theta / cos^2 theta = 0</span>。",
      ],
      // EN: <p><strong>Decode:</strong> the tightest position of the corner limits the pole, so the longest pole that fits is the minimum value of <span class="chem">L(theta)</span>.<br><span class="chem">L'(theta) = -2.4 cos theta / sin^2 theta + 1.6 sin theta / cos^2 theta = 0 &lt;=&gt; tan^3 theta = 2.4 / 1.6 = 1.5</span>, so <span class="chem">theta ≈ 0.8528</span>. As <span class="chem">theta -&gt; 0</span> or <span class="chem">theta -&gt; pi/2</span>, <span class="chem">L -&gt; ∞</span>, so this is the minimum: <span class="chem">L(0.8528…) ≈ 5.6188</span>. The longest pole is <span class="chem">5.62</span> <span class="unit">m</span> (3 s.f.).</p>
      solution: "<p><strong>解碼：</strong>轉角處最窄的位置限制了桿子，故能通過的最長桿子是 <span class=\"chem\">L(theta)</span> 的最小值。<br><span class=\"chem\">L'(theta) = -2.4 cos theta / sin^2 theta + 1.6 sin theta / cos^2 theta = 0 &lt;=&gt; tan^3 theta = 2.4 / 1.6 = 1.5</span>，故 <span class=\"chem\">theta ≈ 0.8528</span>。當 <span class=\"chem\">theta -&gt; 0</span> 或 <span class=\"chem\">theta -&gt; pi/2</span> 時，<span class=\"chem\">L -&gt; ∞</span>，故這是最小值：<span class=\"chem\">L(0.8528…) ≈ 5.6188</span>。最長的桿子長 <span class=\"chem\">5.62</span> <span class=\"unit\">m</span>（3 位有效數字）。</p>",
    },

    // ── t5-1-q049 · numeric · exam · SL · SL 5.8 · 6 marks
    "t5-1-q049": {
      // EN: <p>A closed cylindrical can has radius <span class="chem">r</span> <span class="unit">cm</span> and volume <span class="chem">750</span> <span class="unit">cm3</span>. The metal for the top and bottom costs <span class="chem">$0.035</span> per <span class="unit">cm2</span>, and the metal for the curved side costs <span class="chem">$0.02</span> per <span class="unit">cm2</span>. Find the minimum cost of the metal for one can, in dollars, correct to two decimal places.</p>
      stem: "<p>一個密封的圓柱形罐的半徑為 <span class=\"chem\">r</span> <span class=\"unit\">cm</span>，體積為 <span class=\"chem\">750</span> <span class=\"unit\">cm3</span>。頂部及底部的金屬每 <span class=\"unit\">cm2</span> 成本為 <span class=\"chem\">$0.035</span>，曲面側面的金屬每 <span class=\"unit\">cm2</span> 成本為 <span class=\"chem\">$0.02</span>。求 (Find) 一個罐的金屬最低成本，以元為單位，答案準確至小數點後 2 位。</p>",
      hints: [
        // EN: Cost <span class="chem">= 0.035 * 2 pi r^2 + 0.02 * 2 pi r h</span>. Use <span class="chem">pi r^2 h = 750</span> to remove <span class="chem">h</span>.
        "成本 <span class=\"chem\">= 0.035 * 2 pi r^2 + 0.02 * 2 pi r h</span>。利用 <span class=\"chem\">pi r^2 h = 750</span> 消去 <span class=\"chem\">h</span>。",
        // EN: You should get <span class="chem">C(r) = 0.07 pi r^2 + 30 / r</span>, <span class="chem">r &gt; 0</span>. Find its minimum on the GDC.
        "你應得到 <span class=\"chem\">C(r) = 0.07 pi r^2 + 30 / r</span>，<span class=\"chem\">r &gt; 0</span>。在 GDC 上求其最小值。",
      ],
      // EN: <p><span class="chem">h = 750 / (pi r^2)</span>, so <span class="chem">C(r) = 0.035(2 pi r^2) + 0.02(2 pi r)(750 / (pi r^2)) = 0.07 pi r^2 + 30 / r</span>. <span class="chem">C'(r) = 0.14 pi r - 30 / r^2 = 0</span> gives <span class="chem">r ≈ 4.0858</span>; <span class="chem">C -&gt; ∞</span> as <span class="chem">r -&gt; 0</span> and as <span class="chem">r -&gt; ∞</span>, so this is the minimum. <span class="chem">C(4.0858…) ≈ 11.0137</span>, so the minimum cost is <span class="chem">$11.01</span>.</p>
      solution: "<p><span class=\"chem\">h = 750 / (pi r^2)</span>，故 <span class=\"chem\">C(r) = 0.035(2 pi r^2) + 0.02(2 pi r)(750 / (pi r^2)) = 0.07 pi r^2 + 30 / r</span>。<span class=\"chem\">C'(r) = 0.14 pi r - 30 / r^2 = 0</span> 得 <span class=\"chem\">r ≈ 4.0858</span>；當 <span class=\"chem\">r -&gt; 0</span> 及 <span class=\"chem\">r -&gt; ∞</span> 時 <span class=\"chem\">C -&gt; ∞</span>，故這是最小值。<span class=\"chem\">C(4.0858…) ≈ 11.0137</span>，故最低成本為 <span class=\"chem\">$11.01</span>。</p>",
    },

    // ── t5-1-q050 · numeric · exam · SL · SL 5.4, 5.6 · 5 marks
    "t5-1-q050": {
      // EN: <p>Consider the curve <span class="chem">y = 2 sin x + x</span>. The normal to the curve at the point where <span class="chem">x = 1</span> crosses the <span class="chem">x</span>-axis at <span class="chem">Q</span>. Find the <span class="chem">x</span>-coordinate of <span class="chem">Q</span>, correct to 3 significant figures.</p>
      stem: "<p>考慮曲線 <span class=\"chem\">y = 2 sin x + x</span>。曲線在 <span class=\"chem\">x = 1</span> 的點處的法線與 <span class=\"chem\">x</span> 軸相交於 <span class=\"chem\">Q</span>。求 (Find) <span class=\"chem\">Q</span> 的 <span class=\"chem\">x</span> 坐標，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Find the point (<span class="chem">y = 2 sin 1 + 1</span>) and the tangent gradient <span class="chem">m_T = 2 cos 1 + 1</span> (radians). Store both on your GDC.
        "求該點（<span class=\"chem\">y = 2 sin 1 + 1</span>）及切線斜率 <span class=\"chem\">m_T = 2 cos 1 + 1</span>（弧度）。把兩者儲存在 GDC 中。",
        // EN: The normal is <span class="chem">y - y_1 = -(1/m_T)(x - 1)</span>. Put <span class="chem">y = 0</span> and solve for <span class="chem">x</span>.
        "法線為 <span class=\"chem\">y - y_1 = -(1/m_T)(x - 1)</span>。代入 <span class=\"chem\">y = 0</span> 並解出 <span class=\"chem\">x</span>。",
      ],
      // EN: <p>At <span class="chem">x = 1</span>: <span class="chem">y_1 = 2 sin 1 + 1 ≈ 2.6829</span> and <span class="chem">m_T = 2 cos 1 + 1 ≈ 2.0806</span>. The normal is <span class="chem">y - y_1 = -(1/m_T)(x - 1)</span>. Setting <span class="chem">y = 0</span>: <span class="chem">x = 1 + m_T y_1 ≈ 1 + 2.0806 * 2.6829 ≈ 6.582</span>. So <span class="chem">Q</span> has <span class="chem">x</span>-coordinate <span class="chem">6.58</span> (3 s.f.).</p>
      solution: "<p>在 <span class=\"chem\">x = 1</span> 處：<span class=\"chem\">y_1 = 2 sin 1 + 1 ≈ 2.6829</span> 及 <span class=\"chem\">m_T = 2 cos 1 + 1 ≈ 2.0806</span>。法線為 <span class=\"chem\">y - y_1 = -(1/m_T)(x - 1)</span>。設 <span class=\"chem\">y = 0</span>：<span class=\"chem\">x = 1 + m_T y_1 ≈ 1 + 2.0806 * 2.6829 ≈ 6.582</span>。故 <span class=\"chem\">Q</span> 的 <span class=\"chem\">x</span> 坐標為 <span class=\"chem\">6.58</span>（3 位有效數字）。</p>",
    },

    // ── t5-1-q051 · numeric · challenge · SL · SL 5.4 · 6 marks
    "t5-1-q051": {
      // EN: <p>A straight line through the origin is a tangent to the curve <span class="chem">y = e^x + 2</span>. Find the gradient of this line, correct to 3 significant figures.</p>
      stem: "<p>一條通過原點的直線是曲線 <span class=\"chem\">y = e^x + 2</span> 的切線。求 (Find) 這條直線的斜率，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: the point of contact is unknown. Call it <span class="chem">(a, e^a + 2)</span>; the tangent there has gradient <span class="chem">e^a</span>, and it must pass through <span class="chem">(0, 0)</span>. Find <span class="chem">a</span> first, then the gradient.
        "解碼：切點是未知的。設切點為 <span class=\"chem\">(a, e^a + 2)</span>；該處切線的斜率為 <span class=\"chem\">e^a</span>，而且必須通過 <span class=\"chem\">(0, 0)</span>。先求 <span class=\"chem\">a</span>，再求斜率。",
        // EN: Tangent: <span class="chem">y - (e^a + 2) = e^a(x - a)</span>. Substituting <span class="chem">(0, 0)</span> gives <span class="chem">e^a(a - 1) = 2</span>.
        "切線：<span class=\"chem\">y - (e^a + 2) = e^a(x - a)</span>。代入 <span class=\"chem\">(0, 0)</span> 得 <span class=\"chem\">e^a(a - 1) = 2</span>。",
        // EN: Solve <span class="chem">e^a(a - 1) = 2</span> on the GDC; the question asks for the gradient <span class="chem">e^a</span>, not <span class="chem">a</span>.
        "在 GDC 上解 <span class=\"chem\">e^a(a - 1) = 2</span>；題目要求的是斜率 <span class=\"chem\">e^a</span>，而不是 <span class=\"chem\">a</span>。",
      ],
      // EN: <p><strong>Decode:</strong> introduce the unknown point of contact <span class="chem">(a, e^a + 2)</span> and use the condition that the tangent passes through the origin.<br>The tangent is <span class="chem">y - (e^a + 2) = e^a(x - a)</span>. Through <span class="chem">(0, 0)</span>: <span class="chem">-(e^a + 2) = -a e^a =&gt; e^a(a - 1) = 2</span>. The GDC gives <span class="chem">a ≈ 1.46306</span> (the only solution, as <span class="chem">e^a(a - 1) &lt; 0</span> for <span class="chem">a &lt; 1</span> and is increasing for <span class="chem">a &gt; 1</span>). The gradient is <span class="chem">e^a ≈ 4.3191</span>, i.e. <span class="chem">4.32</span> (3 s.f.).</p>
      solution: "<p><strong>解碼：</strong>引入未知切點 <span class=\"chem\">(a, e^a + 2)</span>，並利用切線通過原點這一條件。<br>切線為 <span class=\"chem\">y - (e^a + 2) = e^a(x - a)</span>。通過 <span class=\"chem\">(0, 0)</span>：<span class=\"chem\">-(e^a + 2) = -a e^a =&gt; e^a(a - 1) = 2</span>。GDC 給出 <span class=\"chem\">a ≈ 1.46306</span>（這是唯一解，因為在 <span class=\"chem\">a &lt; 1</span> 時 <span class=\"chem\">e^a(a - 1) &lt; 0</span>，而在 <span class=\"chem\">a &gt; 1</span> 時它是遞增的）。斜率為 <span class=\"chem\">e^a ≈ 4.3191</span>，即 <span class=\"chem\">4.32</span>（3 位有效數字）。</p>",
    },

    // ── t5-1-q052 · short · exam · SL · SL 5.6, 5.7, 5.8, 5.9 · 14 marks
    "t5-1-q052": {
      // EN: <p>An object on a spring oscillates so that its displacement from its rest position is <span class="chem">d(t) = 5e^{-0.3t} sin t</span> <span class="unit">cm</span>, where <span class="chem">t</span> is the time in seconds, <span class="chem">0 &lt;= t &lt;= 8</span>.<br>(a) Show that <span class="chem">d'(t) = e^{-0.3t}(5 cos t - 1.5 sin t)</span>. <strong>[2 marks]</strong><br>(b) Show that <span class="chem">d'(t) = 0</span> when <span class="chem">tan t = 10/3</span>. <strong>[2 marks]</strong><br>(c) Find the first time <span class="chem">t &gt; 0</span> at which the object is instantaneously at rest, and its displacement at that time. <strong>[3 marks]</strong><br>(d) Hence write down the number of times in <span class="chem">0 &lt; t &lt; 8</span> at which the object is instantaneously at rest. <strong>[1 mark]</strong><br>(e) For <span class="chem">0 &lt; t &lt; 4</span>, find the time at which the displacement is decreasing most rapidly, and the rate of decrease at that time. <strong>[4 marks]</strong><br>(f) Find the acceleration of the object when <span class="chem">t = 3</span>. <strong>[2 marks]</strong></p>
      stem: "<p>一個繫在彈簧上的物體振動，其相對靜止位置的位移為 <span class=\"chem\">d(t) = 5e^{-0.3t} sin t</span> <span class=\"unit\">cm</span>，其中 <span class=\"chem\">t</span> 是以秒計的時間，<span class=\"chem\">0 &lt;= t &lt;= 8</span>。<br>(a) 證明 (Show that) <span class=\"chem\">d'(t) = e^{-0.3t}(5 cos t - 1.5 sin t)</span>。<strong>[2 marks]</strong><br>(b) 證明 (Show that) 當 <span class=\"chem\">tan t = 10/3</span> 時 <span class=\"chem\">d'(t) = 0</span>。<strong>[2 marks]</strong><br>(c) 求 (Find) 物體瞬時靜止的第一個時刻 <span class=\"chem\">t &gt; 0</span>，以及該時刻的位移。<strong>[3 marks]</strong><br>(d) 由此 (Hence) 寫出 (write down) 物體在 <span class=\"chem\">0 &lt; t &lt; 8</span> 內瞬時靜止的次數。<strong>[1 mark]</strong><br>(e) 對於 <span class=\"chem\">0 &lt; t &lt; 4</span>，求 (find) 位移下降得最快的時刻，以及該時刻的下降速率。<strong>[4 marks]</strong><br>(f) 求 (Find) 物體在 <span class=\"chem\">t = 3</span> 時的加速度。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: “instantaneously at rest” means velocity <span class="chem">d'(t) = 0</span>; “decreasing most rapidly” means the most negative value of <span class="chem">d'(t)</span>; acceleration is <span class="chem">d''(t)</span>.
        "解碼：「瞬時靜止」表示速度 <span class=\"chem\">d'(t) = 0</span>；「下降得最快」表示 <span class=\"chem\">d'(t)</span> 的最負值；加速度是 <span class=\"chem\">d''(t)</span>。",
        // EN: For (d), <span class="chem">tan t</span> repeats every <span class="chem">pi</span>, so the solutions of <span class="chem">tan t = 10/3</span> are <span class="chem">1.279 + k pi</span>. How many lie in <span class="chem">(0, 8)</span>?
        "對於 (d) 部，<span class=\"chem\">tan t</span> 每隔 <span class=\"chem\">pi</span> 重複一次，故 <span class=\"chem\">tan t = 10/3</span> 的解為 <span class=\"chem\">1.279 + k pi</span>。有多少個位於 <span class=\"chem\">(0, 8)</span> 內？",
        // EN: For (e), graph <span class="chem">y = d'(t)</span> for <span class="chem">0 &lt; t &lt; 4</span> and find its minimum. Compare with the values near the ends of the interval.
        "對於 (e) 部，在 <span class=\"chem\">0 &lt; t &lt; 4</span> 上繪畫 <span class=\"chem\">y = d'(t)</span> 的圖像並求其最小值。把它與區間兩端附近的值比較。",
      ],
      // EN: <p>(a) Product rule: <span class="chem">d'(t) = 5(-0.3e^{-0.3t}) sin t + 5e^{-0.3t} cos t = e^{-0.3t}(5 cos t - 1.5 sin t)</span>.<br>(b) <span class="chem">e^{-0.3t} != 0</span>, so <span class="chem">5 cos t = 1.5 sin t =&gt; tan t = 5 / 1.5 = 10/3</span>.<br>(c) <span class="chem">t = arctan(10/3) ≈ 1.2793</span> <span class="unit">s</span>, and <span class="chem">d(1.2793…) = 5e^{-0.3838…} sin(1.2793…) ≈ 3.26</span> <span class="unit">cm</span>.<br>(d) The solutions are <span class="chem">1.279 + k pi</span>: <span class="chem">1.28, 4.42, 7.56</span> (the next, <span class="chem">10.7</span>, is too large). So <span class="chem">3</span> times.<br>(e) The displacement decreases most rapidly where <span class="chem">d'(t)</span> is most negative. The GDC gives the minimum of <span class="chem">d'</span> on <span class="chem">0 &lt; t &lt; 4</span> at <span class="chem">t ≈ 2.5587</span>, with <span class="chem">d'(2.5587…) ≈ -2.3206</span>. Near the ends, <span class="chem">d'(0) = 5</span> and <span class="chem">d'(4) ≈ -0.642</span>, which are larger. So at <span class="chem">t ≈ 2.56</span> <span class="unit">s</span> the displacement is decreasing at <span class="chem">2.32</span> <span class="unit">cm s-1</span>.<br>(f) <span class="chem">d''(t) = -0.3e^{-0.3t}(5 cos t - 1.5 sin t) + e^{-0.3t}(-5 sin t - 1.5 cos t) = e^{-0.3t}(-4.55 sin t - 3 cos t)</span>, so <span class="chem">d''(3) = e^{-0.9}(-4.55 sin 3 - 3 cos 3) ≈ 0.946</span> <span class="unit">cm s-2</span> (or use the GDC directly).</p>
      solution: "<p>(a) 積法則：<span class=\"chem\">d'(t) = 5(-0.3e^{-0.3t}) sin t + 5e^{-0.3t} cos t = e^{-0.3t}(5 cos t - 1.5 sin t)</span>。<br>(b) <span class=\"chem\">e^{-0.3t} != 0</span>，故 <span class=\"chem\">5 cos t = 1.5 sin t =&gt; tan t = 5 / 1.5 = 10/3</span>。<br>(c) <span class=\"chem\">t = arctan(10/3) ≈ 1.2793</span> <span class=\"unit\">s</span>，且 <span class=\"chem\">d(1.2793…) = 5e^{-0.3838…} sin(1.2793…) ≈ 3.26</span> <span class=\"unit\">cm</span>。<br>(d) 解為 <span class=\"chem\">1.279 + k pi</span>：<span class=\"chem\">1.28, 4.42, 7.56</span>（下一個 <span class=\"chem\">10.7</span> 太大）。故共 <span class=\"chem\">3</span> 次。<br>(e) 位移在 <span class=\"chem\">d'(t)</span> 最負之處下降得最快。GDC 給出 <span class=\"chem\">d'</span> 在 <span class=\"chem\">0 &lt; t &lt; 4</span> 上的最小值位於 <span class=\"chem\">t ≈ 2.5587</span>，且 <span class=\"chem\">d'(2.5587…) ≈ -2.3206</span>。在兩端附近，<span class=\"chem\">d'(0) = 5</span> 及 <span class=\"chem\">d'(4) ≈ -0.642</span>，均較大。故在 <span class=\"chem\">t ≈ 2.56</span> <span class=\"unit\">s</span> 時，位移以 <span class=\"chem\">2.32</span> <span class=\"unit\">cm s-1</span> 的速率下降。<br>(f) <span class=\"chem\">d''(t) = -0.3e^{-0.3t}(5 cos t - 1.5 sin t) + e^{-0.3t}(-5 sin t - 1.5 cos t) = e^{-0.3t}(-4.55 sin t - 3 cos t)</span>，故 <span class=\"chem\">d''(3) = e^{-0.9}(-4.55 sin 3 - 3 cos 3) ≈ 0.946</span> <span class=\"unit\">cm s-2</span>（或直接使用 GDC）。</p>",
      // EN: <p>(a), (b) See mark scheme.<br>(c) <span class="chem">t ≈ 1.28</span> <span class="unit">s</span>, <span class="chem">d ≈ 3.26</span> <span class="unit">cm</span>.<br>(d) <span class="chem">3</span> times.<br>(e) <span class="chem">t ≈ 2.56</span> <span class="unit">s</span>; decreasing at <span class="chem">2.32</span> <span class="unit">cm s-1</span>.<br>(f) <span class="chem">d''(3) ≈ 0.946</span> <span class="unit">cm s-2</span>.</p>
      answer: "<p>(a)、(b) 見評分準則。<br>(c) <span class=\"chem\">t ≈ 1.28</span> <span class=\"unit\">s</span>，<span class=\"chem\">d ≈ 3.26</span> <span class=\"unit\">cm</span>。<br>(d) <span class=\"chem\">3</span> 次。<br>(e) <span class=\"chem\">t ≈ 2.56</span> <span class=\"unit\">s</span>；以 <span class=\"chem\">2.32</span> <span class=\"unit\">cm s-1</span> 的速率下降。<br>(f) <span class=\"chem\">d''(3) ≈ 0.946</span> <span class=\"unit\">cm s-2</span>。</p>",
      markscheme: [
        // EN: M1: Uses the product rule, with the chain rule on <span class="chem">e^{-0.3t}</span>.
        "M1：使用積法則，並對 <span class=\"chem\">e^{-0.3t}</span> 使用鏈式法則。",
        // EN: A1: <span class="chem">d'(t) = 5(-0.3e^{-0.3t}) sin t + 5e^{-0.3t} cos t = -1.5e^{-0.3t} sin t + 5e^{-0.3t} cos t</span>, which factorises to <span class="chem">e^{-0.3t}(5 cos t - 1.5 sin t)</span> (AG).
        "A1：<span class=\"chem\">d'(t) = 5(-0.3e^{-0.3t}) sin t + 5e^{-0.3t} cos t = -1.5e^{-0.3t} sin t + 5e^{-0.3t} cos t</span>，因式分解為 <span class=\"chem\">e^{-0.3t}(5 cos t - 1.5 sin t)</span> (AG)。",
        // EN: M1: <span class="chem">e^{-0.3t} &gt; 0</span>, so <span class="chem">d'(t) = 0 &lt;=&gt; 5 cos t - 1.5 sin t = 0</span>.
        "M1：<span class=\"chem\">e^{-0.3t} &gt; 0</span>，故 <span class=\"chem\">d'(t) = 0 &lt;=&gt; 5 cos t - 1.5 sin t = 0</span>。",
        // EN: A1: <span class="chem">5 cos t = 1.5 sin t =&gt; sin t / cos t = 5 / 1.5</span>, so <span class="chem">tan t = 10/3</span> (AG).
        "A1：<span class=\"chem\">5 cos t = 1.5 sin t =&gt; sin t / cos t = 5 / 1.5</span>，故 <span class=\"chem\">tan t = 10/3</span> (AG)。",
        // EN: M1: <span class="chem">t = arctan(10/3)</span> (or solves <span class="chem">d'(t) = 0</span> on the GDC).
        "M1：<span class=\"chem\">t = arctan(10/3)</span>（或在 GDC 上解 <span class=\"chem\">d'(t) = 0</span>）。",
        // EN: A1: <span class="chem">t = 1.28</span> <span class="unit">s</span> (<span class="chem">1.27933…</span>).
        "A1：<span class=\"chem\">t = 1.28</span> <span class=\"unit\">s</span>（<span class=\"chem\">1.27933…</span>）。",
        // EN: A1: <span class="chem">d = 3.26</span> <span class="unit">cm</span>.
        "A1：<span class=\"chem\">d = 3.26</span> <span class=\"unit\">cm</span>。",
        // EN: A1: <span class="chem">3</span> (at <span class="chem">t ≈ 1.28, 4.42, 7.56</span>, which are <span class="chem">pi</span> apart).
        "A1：<span class=\"chem\">3</span>（在 <span class=\"chem\">t ≈ 1.28, 4.42, 7.56</span>，相隔 <span class=\"chem\">pi</span>）。",
        // EN: M1: Recognises that “decreasing most rapidly” means the minimum of <span class="chem">d'(t)</span> (where <span class="chem">d''(t) = 0</span>).
        "M1：認出「下降得最快」是指 <span class=\"chem\">d'(t)</span> 的最小值（<span class=\"chem\">d''(t) = 0</span> 之處）。",
        // EN: A1: <span class="chem">t = 2.56</span> <span class="unit">s</span> (<span class="chem">2.55867…</span>).
        "A1：<span class=\"chem\">t = 2.56</span> <span class=\"unit\">s</span>（<span class=\"chem\">2.55867…</span>）。",
        // EN: R1: Checks the ends of the interval: <span class="chem">d'(0) = 5</span>, <span class="chem">d'(4) ≈ -0.642</span>, so the turning point gives the most negative <span class="chem">d'</span>.
        "R1：檢查區間兩端：<span class=\"chem\">d'(0) = 5</span>，<span class=\"chem\">d'(4) ≈ -0.642</span>，故轉向點給出最負的 <span class=\"chem\">d'</span>。",
        // EN: A1: Rate of decrease <span class="chem">2.32</span> <span class="unit">cm s-1</span> (<span class="chem">d'(2.5587…) ≈ -2.32</span>).
        "A1：下降速率 <span class=\"chem\">2.32</span> <span class=\"unit\">cm s-1</span>（<span class=\"chem\">d'(2.5587…) ≈ -2.32</span>）。",
        // EN: M1: Acceleration is <span class="chem">d''(t)</span>; evaluates it at <span class="chem">t = 3</span> (GDC or by differentiating <span class="chem">d'</span>).
        "M1：加速度是 <span class=\"chem\">d''(t)</span>；求它在 <span class=\"chem\">t = 3</span> 時的值（用 GDC 或對 <span class=\"chem\">d'</span> 求導）。",
        // EN: A1: <span class="chem">0.946</span> <span class="unit">cm s-2</span>.
        "A1：<span class=\"chem\">0.946</span> <span class=\"unit\">cm s-2</span>。",
      ],
    },

    // ── t5-1-q053 · numeric · challenge · SL · SL 5.8 · 7 marks
    "t5-1-q053": {
      // EN: <p>A party hat in the shape of a right circular cone (with no base) is made from a circular sheet of paper of radius <span class="chem">12</span> <span class="unit">cm</span>. A sector is cut out of the sheet and thrown away, and the two straight edges of the remaining piece are joined. Find the angle, in radians, of the sector that must be cut out so that the cone has the greatest possible volume. Give your answer correct to 3 significant figures.</p>
      stem: "<p>一頂沒有底的直立圓錐形派對帽，以一張半徑 <span class=\"chem\">12</span> <span class=\"unit\">cm</span> 的圓形紙製成。從紙上剪去一個扇形並棄掉，再把餘下部分的兩條直邊接合。求 (Find) 要使圓錐的體積最大，須剪去的扇形的角度（以弧度表示）。答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: three things are linked. The slant height of the cone is the sheet radius, <span class="chem">12</span>, so <span class="chem">r^2 + h^2 = 144</span>. The arc of the piece that is kept becomes the base circumference. And the question asks for the angle of the piece thrown away, not <span class="chem">r</span> or the volume.
        "解碼：三件事互相關聯。圓錐的斜高等於紙的半徑 <span class=\"chem\">12</span>，故 <span class=\"chem\">r^2 + h^2 = 144</span>。保留部分的弧成為底面的圓周。而題目求的是棄掉部分的角度，而不是 <span class=\"chem\">r</span> 或體積。",
        // EN: Write the volume in one variable: <span class="chem">V(r) = (1/3) pi r^2 sqrt(144 - r^2)</span>, <span class="chem">0 &lt; r &lt; 12</span>. Find the <span class="chem">r</span> that maximises it on the GDC.
        "把體積寫成單一變數的函數：<span class=\"chem\">V(r) = (1/3) pi r^2 sqrt(144 - r^2)</span>，<span class=\"chem\">0 &lt; r &lt; 12</span>。在 GDC 上求使它最大的 <span class=\"chem\">r</span>。",
        // EN: If the kept sector has angle <span class="chem">alpha</span>, its arc is <span class="chem">12 alpha = 2 pi r</span>. The removed angle is <span class="chem">2 pi - alpha</span>.
        "若保留的扇形的角為 <span class=\"chem\">alpha</span>，則其弧長為 <span class=\"chem\">12 alpha = 2 pi r</span>。剪去的角為 <span class=\"chem\">2 pi - alpha</span>。",
      ],
      // EN: <p><strong>Decode:</strong> the slant height is <span class="chem">12</span>, the kept arc becomes the base circumference, and the required quantity is the removed angle.<br><span class="chem">V(r) = (1/3) pi r^2 h</span> with <span class="chem">h = sqrt(144 - r^2)</span>, so <span class="chem">V(r) = (1/3) pi r^2 sqrt(144 - r^2)</span>, <span class="chem">0 &lt; r &lt; 12</span>. <span class="chem">V -&gt; 0</span> at both ends, and the GDC maximum is at <span class="chem">r ≈ 9.7980</span> (exactly <span class="chem">4 sqrt(6)</span>).<br>Kept angle: <span class="chem">12 alpha = 2 pi r =&gt; alpha = 2 pi(9.7980…) / 12 ≈ 5.1302</span>. Removed angle: <span class="chem">2 pi - 5.1302 ≈ 1.15</span> radians (3 s.f.).</p>
      solution: "<p><strong>解碼：</strong>斜高為 <span class=\"chem\">12</span>，保留的弧成為底面圓周，而所求的量是剪去的角。<br><span class=\"chem\">V(r) = (1/3) pi r^2 h</span>，其中 <span class=\"chem\">h = sqrt(144 - r^2)</span>，故 <span class=\"chem\">V(r) = (1/3) pi r^2 sqrt(144 - r^2)</span>，<span class=\"chem\">0 &lt; r &lt; 12</span>。在兩端 <span class=\"chem\">V -&gt; 0</span>，而 GDC 給出極大值位於 <span class=\"chem\">r ≈ 9.7980</span>（準確值為 <span class=\"chem\">4 sqrt(6)</span>）。<br>保留的角：<span class=\"chem\">12 alpha = 2 pi r =&gt; alpha = 2 pi(9.7980…) / 12 ≈ 5.1302</span>。剪去的角：<span class=\"chem\">2 pi - 5.1302 ≈ 1.15</span> 弧度（3 位有效數字）。</p>",
    },

    // ── t5-1-q054 · numeric · foundation · SL · SL 5.1 · 2 marks
    "t5-1-q054": {
      // EN: <p>The gradient of the curve <span class="chem">y = 2^x</span> at the point <span class="chem">(0, 1)</span> is the limit of <span class="chem">(2^h - 1) / h</span> as <span class="chem">h -&gt; 0</span>. Use your GDC to evaluate <span class="chem">(2^h - 1) / h</span> for <span class="chem">h = 0.1</span>, <span class="chem">0.01</span> and <span class="chem">0.001</span>, and hence estimate this gradient correct to 3 significant figures.</p>
      stem: "<p>曲線 <span class=\"chem\">y = 2^x</span> 在點 <span class=\"chem\">(0, 1)</span> 處的斜率是當 <span class=\"chem\">h -&gt; 0</span> 時 <span class=\"chem\">(2^h - 1) / h</span> 的極限。用你的 GDC 計算 <span class=\"chem\">h = 0.1</span>、<span class=\"chem\">0.01</span> 及 <span class=\"chem\">0.001</span> 時 <span class=\"chem\">(2^h - 1) / h</span> 的值，並由此 (hence) 估計 (estimate) 這個斜率，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: <span class="chem">(2^h - 1) / h</span> is the gradient of the chord from <span class="chem">(0, 1)</span> to <span class="chem">(h, 2^h)</span>.
        "<span class=\"chem\">(2^h - 1) / h</span> 是由 <span class=\"chem\">(0, 1)</span> 到 <span class=\"chem\">(h, 2^h)</span> 的弦的斜率。",
        // EN: Make a table of values on the GDC. The first three significant figures stop changing once <span class="chem">h</span> is small enough.
        "在 GDC 上製作數值表。當 <span class=\"chem\">h</span> 足夠小時，首 3 位有效數字便不再改變。",
      ],
      // EN: <p>The values are <span class="chem">0.71773</span> (<span class="chem">h = 0.1</span>), <span class="chem">0.69556</span> (<span class="chem">h = 0.01</span>) and <span class="chem">0.69339</span> (<span class="chem">h = 0.001</span>). They are approaching about <span class="chem">0.693</span>, so the gradient at <span class="chem">(0, 1)</span> is approximately <span class="chem">0.693</span>. (The exact value is <span class="chem">ln 2</span>.)</p>
      solution: "<p>數值為 <span class=\"chem\">0.71773</span>（<span class=\"chem\">h = 0.1</span>）、<span class=\"chem\">0.69556</span>（<span class=\"chem\">h = 0.01</span>）及 <span class=\"chem\">0.69339</span>（<span class=\"chem\">h = 0.001</span>）。它們趨近約 <span class=\"chem\">0.693</span>，故在 <span class=\"chem\">(0, 1)</span> 處的斜率約為 <span class=\"chem\">0.693</span>。（準確值為 <span class=\"chem\">ln 2</span>。）</p>",
    },

    // ── t5-1-q055 · numeric · exam · SL · SL 5.4, 5.6 · 4 marks
    "t5-1-q055": {
      // EN: <p>Find the acute angle between the tangent to the curve <span class="chem">y = x e^{-x/3}</span> at the point where <span class="chem">x = 1</span> and the <span class="chem">x</span>-axis. Give your answer in degrees, correct to 3 significant figures.</p>
      stem: "<p>求 (Find) 曲線 <span class=\"chem\">y = x e^{-x/3}</span> 在 <span class=\"chem\">x = 1</span> 的點處的切線與 <span class=\"chem\">x</span> 軸之間的銳角。答案以度表示，並準確至 3 位有效數字。</p>",
      hints: [
        // EN: If a line has gradient <span class="chem">m</span>, the angle <span class="chem">theta</span> it makes with the positive <span class="chem">x</span>-axis satisfies <span class="chem">tan theta = m</span>.
        "若一條直線的斜率為 <span class=\"chem\">m</span>，則它與 <span class=\"chem\">x</span> 軸正方向所成的角 <span class=\"chem\">theta</span> 滿足 <span class=\"chem\">tan theta = m</span>。",
        // EN: Find <span class="chem">m = dy/dx</span> at <span class="chem">x = 1</span> (product rule or GDC), then <span class="chem">theta = arctan(m)</span> in degree mode.
        "求 <span class=\"chem\">m = dy/dx</span> 在 <span class=\"chem\">x = 1</span> 處的值（用積法則或 GDC），然後在角度模式下計算 <span class=\"chem\">theta = arctan(m)</span>。",
      ],
      // EN: <p><span class="chem">dy/dx = e^{-x/3} - (x/3)e^{-x/3} = e^{-x/3}(1 - x/3)</span>, so at <span class="chem">x = 1</span>, <span class="chem">m = (2/3)e^{-1/3} ≈ 0.47769</span>. The angle with the <span class="chem">x</span>-axis is <span class="chem">arctan(0.47769…) ≈ 25.5°</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">dy/dx = e^{-x/3} - (x/3)e^{-x/3} = e^{-x/3}(1 - x/3)</span>，故在 <span class=\"chem\">x = 1</span> 處，<span class=\"chem\">m = (2/3)e^{-1/3} ≈ 0.47769</span>。與 <span class=\"chem\">x</span> 軸所成的角為 <span class=\"chem\">arctan(0.47769…) ≈ 25.5°</span>（3 位有效數字）。</p>",
    },

    // ── t5-1-q056 · numeric · challenge · SL · SL 5.1, 5.8, 5.9 · 6 marks
    "t5-1-q056": {
      // EN: <p>A cyclist’s distance from the start of a training run, <span class="chem">t</span> seconds after the run begins, is <span class="chem">s(t) = 2t + 0.5t^2 - 0.03t^3 + sin t</span> metres, for <span class="chem">0 &lt;= t &lt;= 10</span>. Find the greatest speed of the cyclist during this time, correct to 3 significant figures.</p>
      stem: "<p>一名單車手在訓練開始後 <span class=\"chem\">t</span> 秒與起點的距離為 <span class=\"chem\">s(t) = 2t + 0.5t^2 - 0.03t^3 + sin t</span> 米，其中 <span class=\"chem\">0 &lt;= t &lt;= 10</span>。求 (Find) 單車手在這段時間內的最高速率，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: speed is the rate of change of distance, <span class="chem">v(t) = s'(t)</span>. You need the maximum of <span class="chem">v</span> (not of <span class="chem">s</span>) on the closed interval <span class="chem">[0, 10]</span>.
        "解碼：速率是距離的變化率 <span class=\"chem\">v(t) = s'(t)</span>。你需要求閉區間 <span class=\"chem\">[0, 10]</span> 上 <span class=\"chem\">v</span>（而不是 <span class=\"chem\">s</span>）的最大值。",
        // EN: <span class="chem">v(t) = 2 + t - 0.09t^2 + cos t</span>. Graph it on the GDC (radian mode) for <span class="chem">0 &lt;= t &lt;= 10</span>.
        "<span class=\"chem\">v(t) = 2 + t - 0.09t^2 + cos t</span>。在 GDC（弧度模式）上繪畫其在 <span class=\"chem\">0 &lt;= t &lt;= 10</span> 上的圖像。",
        // EN: The graph has two local maxima. Compare both with <span class="chem">v(0)</span> and <span class="chem">v(10)</span> before choosing.
        "圖像有兩個局部極大值。選擇前把兩者都與 <span class=\"chem\">v(0)</span> 及 <span class=\"chem\">v(10)</span> 比較。",
      ],
      // EN: <p><strong>Decode:</strong> maximise the speed <span class="chem">v(t) = s'(t)</span> on <span class="chem">[0, 10]</span>, comparing all local maxima with the endpoint values.<br><span class="chem">v(t) = 2 + t - 0.09t^2 + cos t</span> (positive throughout, so speed <span class="chem">= v</span>). Its local maxima are <span class="chem">v(0.971…) ≈ 3.45</span> and <span class="chem">v(6.172…) ≈ 5.737</span>; the endpoints give <span class="chem">v(0) = 3</span> and <span class="chem">v(10) ≈ 2.16</span>. The greatest speed is <span class="chem">5.74</span> <span class="unit">m s-1</span> (3 s.f.), at <span class="chem">t ≈ 6.17</span> <span class="unit">s</span>.</p>
      solution: "<p><strong>解碼：</strong>在 <span class=\"chem\">[0, 10]</span> 上求速率 <span class=\"chem\">v(t) = s'(t)</span> 的最大值，並把所有局部極大值與端點的值比較。<br><span class=\"chem\">v(t) = 2 + t - 0.09t^2 + cos t</span>（處處為正，故速率 <span class=\"chem\">= v</span>）。其局部極大值為 <span class=\"chem\">v(0.971…) ≈ 3.45</span> 及 <span class=\"chem\">v(6.172…) ≈ 5.737</span>；端點給出 <span class=\"chem\">v(0) = 3</span> 及 <span class=\"chem\">v(10) ≈ 2.16</span>。最高速率為 <span class=\"chem\">5.74</span> <span class=\"unit\">m s-1</span>（3 位有效數字），在 <span class=\"chem\">t ≈ 6.17</span> <span class=\"unit\">s</span> 時。</p>",
    },

    // ── t5-1-q057 · numeric · challenge · SL · SL 5.7, 5.8 · 5 marks
    "t5-1-q057": {
      // EN: <p>The number of fish in a newly stocked lake <span class="chem">t</span> days after stocking is modelled by <span class="chem">P(t) = 800 / (1 + 15e^{-0.4t})</span>, <span class="chem">t &gt;= 0</span>. Find the time at which the fish population is increasing most rapidly, correct to 3 significant figures.</p>
      stem: "<p>一個新放養魚苗的湖，放養後 <span class=\"chem\">t</span> 天的魚數模型為 <span class=\"chem\">P(t) = 800 / (1 + 15e^{-0.4t})</span>，<span class=\"chem\">t &gt;= 0</span>。求 (Find) 魚數增加得最快的時間，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: “increasing most rapidly” means the rate <span class="chem">P'(t)</span> is at its maximum. That happens where <span class="chem">P''(t) = 0</span> and changes sign: the point of inflexion of the graph of <span class="chem">P</span>.
        "解碼：「增加得最快」表示變化率 <span class=\"chem\">P'(t)</span> 達到最大值。這發生在 <span class=\"chem\">P''(t) = 0</span> 並變號之處：即 <span class=\"chem\">P</span> 圖像的拐點。",
        // EN: Graph <span class="chem">y = P'(t)</span> on the GDC (as the derivative of <span class="chem">P</span>) for <span class="chem">0 &lt;= t &lt;= 20</span> and find its maximum.
        "在 <span class=\"chem\">0 &lt;= t &lt;= 20</span> 上用 GDC 繪畫 <span class=\"chem\">y = P'(t)</span> 的圖像（作為 <span class=\"chem\">P</span> 的導數），並求其最大值。",
        // EN: Check the endpoint: <span class="chem">P'(0) = 18.75</span>, much less than the turning value.
        "檢查端點：<span class=\"chem\">P'(0) = 18.75</span>，遠小於轉向點的值。",
      ],
      // EN: <p><strong>Decode:</strong> the fastest increase is the maximum of <span class="chem">P'(t)</span>, i.e. the inflexion point of the S-shaped graph of <span class="chem">P</span>.<br>On the GDC, <span class="chem">P'(t)</span> has its maximum at <span class="chem">t ≈ 6.770</span>, where <span class="chem">P'(t) = 80</span> fish per day (exactly <span class="chem">t = ln 15 / 0.4</span>, where <span class="chem">P = 400</span>). <span class="chem">P''</span> changes from positive to negative there, and at the endpoint <span class="chem">P'(0) = 18.75 &lt; 80</span>. So the population increases most rapidly at <span class="chem">t ≈ 6.77</span> days (3 s.f.).</p>
      solution: "<p><strong>解碼：</strong>增加得最快之處是 <span class=\"chem\">P'(t)</span> 的最大值，即 <span class=\"chem\">P</span> 的 S 形圖像的拐點。<br>在 GDC 上，<span class=\"chem\">P'(t)</span> 在 <span class=\"chem\">t ≈ 6.770</span> 處取得最大值，此時每天 <span class=\"chem\">P'(t) = 80</span> 條魚（準確值為 <span class=\"chem\">t = ln 15 / 0.4</span>，此時 <span class=\"chem\">P = 400</span>）。<span class=\"chem\">P''</span> 在該處由正變負，而在端點 <span class=\"chem\">P'(0) = 18.75 &lt; 80</span>。故魚數在 <span class=\"chem\">t ≈ 6.77</span> 天時增加得最快（3 位有效數字）。</p>",
      // EN: days
      unit: "天",
    },

    // ── t5-1-q058 · numeric · exam · SL · SL 5.2, 5.8 · 4 marks
    "t5-1-q058": {
      // EN: <p>Let <span class="chem">f(x) = 0.5x^4 - 2x^3 + x^2 + 3x - 1</span>. The graph of <span class="chem">f</span> has two local minimum points and one local maximum point. Find the <span class="chem">y</span>-coordinate of the local maximum point, correct to 3 significant figures.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = 0.5x^4 - 2x^3 + x^2 + 3x - 1</span>。<span class=\"chem\">f</span> 的圖像有兩個局部極小點及一個局部極大點。求 (Find) 該局部極大點的 <span class=\"chem\">y</span> 坐標，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Graph <span class="chem">y = f(x)</span> for about <span class="chem">-2 &lt;= x &lt;= 4</span>. The local maximum lies between the two minima.
        "在大約 <span class=\"chem\">-2 &lt;= x &lt;= 4</span> 上繪畫 <span class=\"chem\">y = f(x)</span> 的圖像。局部極大點位於兩個極小點之間。",
        // EN: Use the GDC maximum feature, or solve the cubic <span class="chem">f'(x) = 2x^3 - 6x^2 + 2x + 3 = 0</span> and pick the middle root.
        "使用 GDC 的極大值功能，或解三次方程 <span class=\"chem\">f'(x) = 2x^3 - 6x^2 + 2x + 3 = 0</span> 並選取中間的根。",
      ],
      // EN: <p><span class="chem">f'(x) = 2x^3 - 6x^2 + 2x + 3</span>. The GDC gives roots <span class="chem">x ≈ -0.526</span>, <span class="chem">1.259</span>, <span class="chem">2.267</span>. Since <span class="chem">f''(x) = 6x^2 - 12x + 2</span> is negative at <span class="chem">x ≈ 1.259</span> (about <span class="chem">-3.6</span>), the middle point is the local maximum: <span class="chem">f(1.2587…) ≈ 1.6271</span>. The <span class="chem">y</span>-coordinate is <span class="chem">1.63</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">f'(x) = 2x^3 - 6x^2 + 2x + 3</span>。GDC 給出根 <span class=\"chem\">x ≈ -0.526</span>、<span class=\"chem\">1.259</span>、<span class=\"chem\">2.267</span>。由於 <span class=\"chem\">f''(x) = 6x^2 - 12x + 2</span> 在 <span class=\"chem\">x ≈ 1.259</span> 處為負（約 <span class=\"chem\">-3.6</span>），中間的點是局部極大點：<span class=\"chem\">f(1.2587…) ≈ 1.6271</span>。<span class=\"chem\">y</span> 坐標為 <span class=\"chem\">1.63</span>（3 位有效數字）。</p>",
    },

    // ── t5-1-q059 · short · challenge · SL · SL 5.8 · 9 marks
    "t5-1-q059": {
      // EN: <p>A garden is a rectangle <span class="chem">x</span> <span class="unit">m</span> long and <span class="chem">y</span> <span class="unit">m</span> wide, with a semicircle of diameter <span class="chem">y</span> attached to one of its short sides. A fence goes round the whole outside edge of the garden. The straight parts of the fence cost <span class="chem">$12</span> per metre, and the curved part costs <span class="chem">$20</span> per metre. The total cost of the fence is <span class="chem">$1200</span>.<br>(a) Show that <span class="chem">x = 50 - (6 + 5 pi)y / 12</span>. <strong>[2 marks]</strong><br>(b) Show that the area of the garden is <span class="chem">A = 50y - (6 + 5 pi)y^2 / 12 + pi y^2 / 8</span>. <strong>[2 marks]</strong><br>(c) Find the value of <span class="chem">y</span> that gives the greatest area, and the greatest area. <strong>[4 marks]</strong><br>(d) Verify that this design is possible. <strong>[1 mark]</strong></p>
      stem: "<p>一個花園由一個長 <span class=\"chem\">x</span> <span class=\"unit\">m</span>、寬 <span class=\"chem\">y</span> <span class=\"unit\">m</span> 的長方形，以及一個接在其中一條短邊上、直徑為 <span class=\"chem\">y</span> 的半圓組成。圍欄圍繞花園的整個外緣。圍欄直的部分每米成本為 <span class=\"chem\">$12</span>，彎曲的部分每米成本為 <span class=\"chem\">$20</span>。圍欄的總成本為 <span class=\"chem\">$1200</span>。<br>(a) 證明 (Show that) <span class=\"chem\">x = 50 - (6 + 5 pi)y / 12</span>。<strong>[2 marks]</strong><br>(b) 證明 (Show that) 花園的面積為 <span class=\"chem\">A = 50y - (6 + 5 pi)y^2 / 12 + pi y^2 / 8</span>。<strong>[2 marks]</strong><br>(c) 求 (Find) 使面積最大的 <span class=\"chem\">y</span> 值，以及最大面積。<strong>[4 marks]</strong><br>(d) 驗證 (Verify) 這個設計是可行的。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: list the fence pieces carefully. The side where the semicircle is attached has no fence; the remaining straight edges are two lengths <span class="chem">x</span> and one width <span class="chem">y</span>, plus a half-circle arc <span class="chem">pi y / 2</span>.
        "解碼：小心列出各段圍欄。接上半圓的一邊沒有圍欄；其餘的直邊是兩條長 <span class=\"chem\">x</span> 及一條寬 <span class=\"chem\">y</span>，另加半圓弧 <span class=\"chem\">pi y / 2</span>。",
        // EN: Cost: <span class="chem">12(2x + y) + 20(pi y / 2) = 1200</span>. Area: rectangle plus half a circle of radius <span class="chem">y/2</span>.
        "成本：<span class=\"chem\">12(2x + y) + 20(pi y / 2) = 1200</span>。面積：長方形加上半徑為 <span class=\"chem\">y/2</span> 的半圓。",
        // EN: For (c), graph <span class="chem">A(y)</span> for <span class="chem">y &gt; 0</span> and find the maximum. For (d), the length <span class="chem">x</span> must be positive.
        "對於 (c) 部，在 <span class=\"chem\">y &gt; 0</span> 上繪畫 <span class=\"chem\">A(y)</span> 的圖像並求其最大值。對於 (d) 部，長度 <span class=\"chem\">x</span> 必須為正。",
      ],
      // EN: <p><strong>Decode:</strong> work out which edges are fenced. The short side joined to the semicircle is inside the garden, so the fence is two lengths <span class="chem">x</span>, one width <span class="chem">y</span>, and the arc <span class="chem">pi y / 2</span>.<br>(a) <span class="chem">12(2x + y) + 20(pi y / 2) = 1200 =&gt; 24x = 1200 - (12 + 10 pi)y =&gt; x = 50 - (6 + 5 pi)y / 12</span>.<br>(b) <span class="chem">A = xy + (1/2) pi (y/2)^2 = xy + pi y^2 / 8 = 50y - (6 + 5 pi)y^2 / 12 + pi y^2 / 8</span>.<br>(c) <span class="chem">A'(y) = 50 - (6 + 5 pi)y / 6 + pi y / 4 = 0 =&gt; y = 600 / (12 + 7 pi) ≈ 17.65</span>. The coefficient of <span class="chem">y^2</span> is <span class="chem">-(6 + 5 pi)/12 + pi/8 ≈ -1.42 &lt; 0</span>, so this is a maximum: <span class="chem">A ≈ 441</span> <span class="unit">m2</span>.<br>(d) <span class="chem">x ≈ 50 - 1.809(17.65) ≈ 18.1 &gt; 0</span>, so the rectangle exists and the design is possible.</p>
      solution: "<p><strong>解碼：</strong>弄清哪些邊有圍欄。與半圓相接的短邊在花園內部，故圍欄由兩條長 <span class=\"chem\">x</span>、一條寬 <span class=\"chem\">y</span> 及弧 <span class=\"chem\">pi y / 2</span> 組成。<br>(a) <span class=\"chem\">12(2x + y) + 20(pi y / 2) = 1200 =&gt; 24x = 1200 - (12 + 10 pi)y =&gt; x = 50 - (6 + 5 pi)y / 12</span>。<br>(b) <span class=\"chem\">A = xy + (1/2) pi (y/2)^2 = xy + pi y^2 / 8 = 50y - (6 + 5 pi)y^2 / 12 + pi y^2 / 8</span>。<br>(c) <span class=\"chem\">A'(y) = 50 - (6 + 5 pi)y / 6 + pi y / 4 = 0 =&gt; y = 600 / (12 + 7 pi) ≈ 17.65</span>。<span class=\"chem\">y^2</span> 的係數為 <span class=\"chem\">-(6 + 5 pi)/12 + pi/8 ≈ -1.42 &lt; 0</span>，故這是最大值：<span class=\"chem\">A ≈ 441</span> <span class=\"unit\">m2</span>。<br>(d) <span class=\"chem\">x ≈ 50 - 1.809(17.65) ≈ 18.1 &gt; 0</span>，故長方形存在，設計是可行的。</p>",
      // EN: <p>(a), (b) See mark scheme.<br>(c) <span class="chem">y ≈ 17.7</span> <span class="unit">m</span>, <span class="chem">A ≈ 441</span> <span class="unit">m2</span>.<br>(d) <span class="chem">x ≈ 18.1 &gt; 0</span>.</p>
      answer: "<p>(a)、(b) 見評分準則。<br>(c) <span class=\"chem\">y ≈ 17.7</span> <span class=\"unit\">m</span>，<span class=\"chem\">A ≈ 441</span> <span class=\"unit\">m2</span>。<br>(d) <span class=\"chem\">x ≈ 18.1 &gt; 0</span>。</p>",
      markscheme: [
        // EN: M1: Cost equation: the straight fence is <span class="chem">2x + y</span> and the arc is <span class="chem">pi y / 2</span>, so <span class="chem">12(2x + y) + 20(pi y / 2) = 1200</span>.
        "M1：成本方程：直的圍欄為 <span class=\"chem\">2x + y</span>，弧為 <span class=\"chem\">pi y / 2</span>，故 <span class=\"chem\">12(2x + y) + 20(pi y / 2) = 1200</span>。",
        // EN: A1: <span class="chem">24x = 1200 - 12y - 10 pi y =&gt; x = 50 - (6 + 5 pi)y / 12</span> (AG).
        "A1：<span class=\"chem\">24x = 1200 - 12y - 10 pi y =&gt; x = 50 - (6 + 5 pi)y / 12</span> (AG)。",
        // EN: M1: Area <span class="chem">= xy + (1/2) pi (y/2)^2 = xy + pi y^2 / 8</span>.
        "M1：面積 <span class=\"chem\">= xy + (1/2) pi (y/2)^2 = xy + pi y^2 / 8</span>。",
        // EN: A1: Substitutes <span class="chem">x</span>: <span class="chem">A = 50y - (6 + 5 pi)y^2 / 12 + pi y^2 / 8</span> (AG).
        "A1：代入 <span class=\"chem\">x</span>：<span class=\"chem\">A = 50y - (6 + 5 pi)y^2 / 12 + pi y^2 / 8</span> (AG)。",
        // EN: M1: Solves <span class="chem">A'(y) = 50 - (6 + 5 pi)y / 6 + pi y / 4 = 0</span>, or uses the GDC maximum on the graph of <span class="chem">A</span>.
        "M1：解 <span class=\"chem\">A'(y) = 50 - (6 + 5 pi)y / 6 + pi y / 4 = 0</span>，或在 <span class=\"chem\">A</span> 的圖像上使用 GDC 的極大值功能。",
        // EN: A1: <span class="chem">y = 17.7</span> <span class="unit">m</span> (<span class="chem">17.6516…</span>, exactly <span class="chem">600 / (12 + 7 pi)</span>).
        "A1：<span class=\"chem\">y = 17.7</span> <span class=\"unit\">m</span>（<span class=\"chem\">17.6516…</span>，準確值為 <span class=\"chem\">600 / (12 + 7 pi)</span>）。",
        // EN: R1: Justifies a maximum, e.g. <span class="chem">A</span> is a quadratic in <span class="chem">y</span> with a negative coefficient of <span class="chem">y^2</span> (or <span class="chem">A''(y) &lt; 0</span>).
        "R1：說明是最大值，例如 <span class=\"chem\">A</span> 是 <span class=\"chem\">y</span> 的二次式，且 <span class=\"chem\">y^2</span> 的係數為負（或 <span class=\"chem\">A''(y) &lt; 0</span>）。",
        // EN: A1: <span class="chem">A = 441</span> <span class="unit">m2</span> (<span class="chem">441.29…</span>).
        "A1：<span class=\"chem\">A = 441</span> <span class=\"unit\">m2</span>（<span class=\"chem\">441.29…</span>）。",
        // EN: A1: <span class="chem">x = 50 - (6 + 5 pi)(17.65…) / 12 ≈ 18.1 &gt; 0</span>, so the design is possible.
        "A1：<span class=\"chem\">x = 50 - (6 + 5 pi)(17.65…) / 12 ≈ 18.1 &gt; 0</span>，故設計是可行的。",
      ],
    },

    // ── t5-1-q060 · short · challenge · SL · SL 5.2, 5.7, 5.8 · 8 marks
    "t5-1-q060": {
      // EN: <p>A function <span class="chem">f</span> is defined for <span class="chem">-2 &lt;= x &lt;= 3</span>, and its derivative is <span class="chem">f'(x) = x^2 - 4 sin x</span>.<br>(a) Find the <span class="chem">x</span>-coordinates of the stationary points of <span class="chem">f</span>, and determine the nature of each. <strong>[4 marks]</strong><br>(b) Find the <span class="chem">x</span>-coordinate of the point at which the graph of <span class="chem">f</span> is decreasing most rapidly. <strong>[3 marks]</strong><br>(c) State, with a reason, whether the graph of <span class="chem">f</span> has a point of inflexion at the point found in (b). <strong>[1 mark]</strong></p>
      stem: "<p>函數 <span class=\"chem\">f</span> 的定義域為 <span class=\"chem\">-2 &lt;= x &lt;= 3</span>，其導數為 <span class=\"chem\">f'(x) = x^2 - 4 sin x</span>。<br>(a) 求 (Find) <span class=\"chem\">f</span> 各駐點的 <span class=\"chem\">x</span> 坐標，並判斷 (determine) 每一點的性質。<strong>[4 marks]</strong><br>(b) 求 (Find) <span class=\"chem\">f</span> 的圖像遞減得最快的點的 <span class=\"chem\">x</span> 坐標。<strong>[3 marks]</strong><br>(c) 寫出 (State) <span class=\"chem\">f</span> 的圖像在 (b) 部所求的點處是否有拐點，並說明理由。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: you are told <span class="chem">f'</span>, not <span class="chem">f</span>. Stationary points are zeros of <span class="chem">f'</span>; “decreasing most rapidly” is the most negative value of <span class="chem">f'</span>, which could be at a turning point of <span class="chem">f'</span> or at an end of the domain.
        "解碼：題目給出的是 <span class=\"chem\">f'</span>，而不是 <span class=\"chem\">f</span>。駐點是 <span class=\"chem\">f'</span> 的零點；「遞減得最快」是 <span class=\"chem\">f'</span> 的最負值，它可能出現在 <span class=\"chem\">f'</span> 的轉向點，也可能出現在定義域的端點。",
        // EN: Graph <span class="chem">y = x^2 - 4 sin x</span> for <span class="chem">-2 &lt;= x &lt;= 3</span> (radian mode). Read off its zeros and its minimum.
        "在 <span class=\"chem\">-2 &lt;= x &lt;= 3</span> 上繪畫 <span class=\"chem\">y = x^2 - 4 sin x</span> 的圖像（弧度模式）。讀出其零點及最小值。",
        // EN: For (c), a turning point of <span class="chem">f'</span> is where <span class="chem">f''</span> is zero and changes sign.
        "對於 (c) 部，<span class=\"chem\">f'</span> 的轉向點是 <span class=\"chem\">f''</span> 為零並變號之處。",
      ],
      // EN: <p><strong>Decode:</strong> work entirely with the graph of <span class="chem">y = f'(x)</span>: its zeros give the stationary points of <span class="chem">f</span>, and its lowest point (checking the endpoints too) gives the steepest descent.<br>(a) <span class="chem">f'(x) = 0</span> at <span class="chem">x = 0</span> and <span class="chem">x ≈ 1.9338</span>. For <span class="chem">x &lt; 0</span>, <span class="chem">x^2 &gt; 0</span> and <span class="chem">-4 sin x &gt; 0</span>, so <span class="chem">f' &gt; 0</span>; just after <span class="chem">0</span>, <span class="chem">f' &lt; 0</span> (e.g. <span class="chem">f'(1) ≈ -2.37</span>). So <span class="chem">x = 0</span> is a local maximum, and since <span class="chem">f'</span> goes from <span class="chem">-</span> to <span class="chem">+</span> at <span class="chem">1.93</span> (e.g. <span class="chem">f'(2.5) ≈ 3.86</span>), <span class="chem">x ≈ 1.93</span> is a local minimum.<br>(b) The GDC minimum of <span class="chem">f'</span> is at <span class="chem">x ≈ 1.0299</span>, with <span class="chem">f' ≈ -2.37</span>. The endpoints give <span class="chem">f'(-2) ≈ 7.64</span> and <span class="chem">f'(3) ≈ 8.44</span>, so <span class="chem">f</span> decreases most rapidly at <span class="chem">x ≈ 1.03</span>.<br>(c) Yes. At a local minimum of <span class="chem">f'</span>, its gradient <span class="chem">f''(x) = 2x - 4 cos x</span> is zero and changes from negative to positive, so the concavity of <span class="chem">f</span> changes: a non-stationary point of inflexion.</p>
      solution: "<p><strong>解碼：</strong>完全利用 <span class=\"chem\">y = f'(x)</span> 的圖像：其零點給出 <span class=\"chem\">f</span> 的駐點，而其最低點（同時檢查端點）給出下降最陡之處。<br>(a) <span class=\"chem\">f'(x) = 0</span> 在 <span class=\"chem\">x = 0</span> 及 <span class=\"chem\">x ≈ 1.9338</span> 處。當 <span class=\"chem\">x &lt; 0</span> 時，<span class=\"chem\">x^2 &gt; 0</span> 且 <span class=\"chem\">-4 sin x &gt; 0</span>，故 <span class=\"chem\">f' &gt; 0</span>；剛過 <span class=\"chem\">0</span> 時，<span class=\"chem\">f' &lt; 0</span>（例如 <span class=\"chem\">f'(1) ≈ -2.37</span>）。故 <span class=\"chem\">x = 0</span> 是局部極大點；又由於 <span class=\"chem\">f'</span> 在 <span class=\"chem\">1.93</span> 處由 <span class=\"chem\">-</span> 變為 <span class=\"chem\">+</span>（例如 <span class=\"chem\">f'(2.5) ≈ 3.86</span>），<span class=\"chem\">x ≈ 1.93</span> 是局部極小點。<br>(b) <span class=\"chem\">f'</span> 的 GDC 最小值位於 <span class=\"chem\">x ≈ 1.0299</span>，且 <span class=\"chem\">f' ≈ -2.37</span>。端點給出 <span class=\"chem\">f'(-2) ≈ 7.64</span> 及 <span class=\"chem\">f'(3) ≈ 8.44</span>，故 <span class=\"chem\">f</span> 在 <span class=\"chem\">x ≈ 1.03</span> 處遞減得最快。<br>(c) 是。在 <span class=\"chem\">f'</span> 的局部極小點，其斜率 <span class=\"chem\">f''(x) = 2x - 4 cos x</span> 為零並由負變正，故 <span class=\"chem\">f</span> 的凹性改變：這是一個非駐拐點。</p>",
      // EN: <p>(a) <span class="chem">x = 0</span>: local maximum; <span class="chem">x ≈ 1.93</span>: local minimum.<br>(b) <span class="chem">x ≈ 1.03</span>.<br>(c) Yes: <span class="chem">f'</span> has a local minimum there, so <span class="chem">f''</span> is zero and changes sign.</p>
      answer: "<p>(a) <span class=\"chem\">x = 0</span>：局部極大；<span class=\"chem\">x ≈ 1.93</span>：局部極小。<br>(b) <span class=\"chem\">x ≈ 1.03</span>。<br>(c) 是：<span class=\"chem\">f'</span> 在該處有局部極小值，故 <span class=\"chem\">f''</span> 為零並變號。</p>",
      markscheme: [
        // EN: M1: Solves <span class="chem">x^2 - 4 sin x = 0</span> on the GDC.
        "M1：在 GDC 上解 <span class=\"chem\">x^2 - 4 sin x = 0</span>。",
        // EN: A1: <span class="chem">x = 0</span> and <span class="chem">x = 1.93</span> (<span class="chem">1.93375…</span>).
        "A1：<span class=\"chem\">x = 0</span> 及 <span class=\"chem\">x = 1.93</span>（<span class=\"chem\">1.93375…</span>）。",
        // EN: R1: <span class="chem">f'</span> changes from positive to negative at <span class="chem">x = 0</span>, so a local maximum.
        "R1：<span class=\"chem\">f'</span> 在 <span class=\"chem\">x = 0</span> 處由正變負，故為局部極大。",
        // EN: R1: <span class="chem">f'</span> changes from negative to positive at <span class="chem">x = 1.93</span>, so a local minimum.
        "R1：<span class=\"chem\">f'</span> 在 <span class=\"chem\">x = 1.93</span> 處由負變正，故為局部極小。",
        // EN: M1: Recognises that “decreasing most rapidly” means the minimum of <span class="chem">f'(x)</span>.
        "M1：認出「遞減得最快」是指 <span class=\"chem\">f'(x)</span> 的最小值。",
        // EN: A1: <span class="chem">x = 1.03</span> (<span class="chem">1.02987…</span>, where <span class="chem">f'(x) ≈ -2.37</span>).
        "A1：<span class=\"chem\">x = 1.03</span>（<span class=\"chem\">1.02987…</span>，此時 <span class=\"chem\">f'(x) ≈ -2.37</span>）。",
        // EN: R1: Checks the endpoints: <span class="chem">f'(-2) ≈ 7.64</span> and <span class="chem">f'(3) ≈ 8.44</span> are positive, so the minimum of <span class="chem">f'</span> is at the turning point.
        "R1：檢查端點：<span class=\"chem\">f'(-2) ≈ 7.64</span> 及 <span class=\"chem\">f'(3) ≈ 8.44</span> 均為正，故 <span class=\"chem\">f'</span> 的最小值位於轉向點。",
        // EN: R1: Yes: <span class="chem">f''(x) = 2x - 4 cos x</span> is zero at <span class="chem">x ≈ 1.03</span> and changes sign (from negative to positive), so it is a (non-stationary) point of inflexion.
        "R1：是：<span class=\"chem\">f''(x) = 2x - 4 cos x</span> 在 <span class=\"chem\">x ≈ 1.03</span> 處為零並變號（由負變正），故這是一個（非駐）拐點。",
      ],
    },

  }
});
