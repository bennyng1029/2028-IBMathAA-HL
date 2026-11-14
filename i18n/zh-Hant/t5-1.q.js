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
