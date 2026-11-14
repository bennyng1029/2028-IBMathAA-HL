/* t5-2.q — zh-Hant question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't5-2.q', {
  questions: {

    // ── t5-2-q001 · mcq · foundation · SL · SL 5.10 · 2 marks
    "t5-2-q001": {
      // EN: <p>Find <span class="chem">int (6x^2 - 4e^{2x} + cos(3x)) dx</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">int (6x^2 - 4e^{2x} + cos(3x)) dx</span>。</p>",
      options: [
        // EN: <span class="chem">2x^3 - 2e^{2x} + (1/3) sin(3x) + C</span>
        "<span class=\"chem\">2x^3 - 2e^{2x} + (1/3) sin(3x) + C</span>",
        // EN: <span class="chem">2x^3 - 8e^{2x} - 3 sin(3x) + C</span>
        "<span class=\"chem\">2x^3 - 8e^{2x} - 3 sin(3x) + C</span>",
        // EN: <span class="chem">2x^3 - 2e^{2x} - (1/3) sin(3x) + C</span>
        "<span class=\"chem\">2x^3 - 2e^{2x} - (1/3) sin(3x) + C</span>",
        // EN: <span class="chem">12x - 2e^{2x} + (1/3) sin(3x) + C</span>
        "<span class=\"chem\">12x - 2e^{2x} + (1/3) sin(3x) + C</span>",
      ],
      hints: [
        // EN: Integrate term by term using <span class="chem">int x^n dx = x^{n+1}/(n+1)</span>, <span class="chem">int e^{ax} dx = (1/a)e^{ax}</span>, and <span class="chem">int cos(ax) dx = (1/a)sin(ax)</span>.
        "使用 <span class=\"chem\">int x^n dx = x^{n+1}/(n+1)</span>、<span class=\"chem\">int e^{ax} dx = (1/a)e^{ax}</span> 與 <span class=\"chem\">int cos(ax) dx = (1/a)sin(ax)</span> 逐項積分。",
        // EN: Check the sign of <span class="chem">int cos(3x) dx</span> by differentiating your answer: <span class="chem">d/dx ((1/3) sin(3x)) = +cos(3x)</span>.
        "透過求導驗算 <span class=\"chem\">int cos(3x) dx</span> 的正負號：<span class=\"chem\">d/dx ((1/3) sin(3x)) = +cos(3x)</span>。",
      ],
      // EN: <p>Integrating term by term: <span class="chem">int 6x^2 dx = 6(x^3/3) = 2x^3</span>, <span class="chem">int (-4e^{2x}) dx = -(4/2)e^{2x} = -2e^{2x}</span>, and <span class="chem">int cos(3x) dx = (1/3) sin(3x)</span>. Including the constant of integration gives <span class="chem">2x^3 - 2e^{2x} + (1/3) sin(3x) + C</span>.</p>
      solution: "<p>逐項積分：<span class=\"chem\">int 6x^2 dx = 6(x^3/3) = 2x^3</span>、<span class=\"chem\">int (-4e^{2x}) dx = -(4/2)e^{2x} = -2e^{2x}</span> 及 <span class=\"chem\">int cos(3x) dx = (1/3) sin(3x)</span>。加上積分常數得 <span class=\"chem\">2x^3 - 2e^{2x} + (1/3) sin(3x) + C</span>。</p>",
      misconception: {
        // EN (option B): You multiplied by the inner coefficients (2 and 3) instead of dividing by them, and also flipped the sign of the cosine integral.
        "1": "你乘以了內層係數（2 與 3）而非除以它們，同時亦反轉了餘弦積分的正負號。",
        // EN (option C): The integral of cos(kx) is +(1/k) sin(kx) + C, not −(1/k) sin(kx) + C (it is sin(kx) that integrates to −(1/k) cos(kx)).
        "2": "cos(kx) 的積分是 +(1/k) sin(kx) + C，而非 −(1/k) sin(kx) + C（sin(kx) 積分才是 −(1/k) cos(kx)）。",
        // EN (option D): You differentiated 6x² to get 12x instead of integrating 6x² to get 2x³.
        "3": "你把 6x² 求導成 12x，而非將 6x² 積分成 2x³。",
      },
    },

    // ── t5-2-q002 · numeric · foundation · SL · SL 5.5 · 4 marks
    "t5-2-q002": {
      // EN: <p>A curve <span class="chem">y = f(x)</span> (<span class="chem">x &gt; 0</span>) has gradient <span class="chem">f'(x) = 3x^2 - 4 / x^2</span> and passes through the point <span class="chem">(1, 7)</span>. Find the value of <span class="chem">f(2)</span>.</p>
      stem: "<p>曲線 <span class=\"chem\">y = f(x)</span>（<span class=\"chem\">x &gt; 0</span>）的斜率為 <span class=\"chem\">f'(x) = 3x^2 - 4 / x^2</span>，且通過點 <span class=\"chem\">(1, 7)</span>。求 (Find) <span class=\"chem\">f(2)</span> 的值。</p>",
      hints: [
        // EN: Rewrite <span class="chem">-4 / x^2</span> as <span class="chem">-4x^{-2}</span> before integrating.
        "積分前先把 <span class=\"chem\">-4 / x^2</span> 改寫為 <span class=\"chem\">-4x^{-2}</span>。",
        // EN: Find <span class="chem">f(x) = x^3 + 4/x + C</span>, use <span class="chem">f(1) = 7</span> to solve for <span class="chem">C</span>, then evaluate <span class="chem">f(2)</span>.
        "求得 <span class=\"chem\">f(x) = x^3 + 4/x + C</span>，利用 <span class=\"chem\">f(1) = 7</span> 解出 <span class=\"chem\">C</span>，再計算 <span class=\"chem\">f(2)</span>。",
      ],
      // EN: <p>Rewrite <span class="chem">f'(x) = 3x^2 - 4x^{-2}</span>. Integrating gives <span class="chem">f(x) = x^3 - 4(x^{-1}/(-1)) + C = x^3 + 4/x + C</span>. Using <span class="chem">f(1) = 7</span>: <span class="chem">1^3 + 4/1 + C = 7 =&gt; C = 2</span>. Therefore <span class="chem">f(2) = 2^3 + 4/2 + 2 = 8 + 2 + 2 = 12</span>.</p>
      solution: "<p>改寫 <span class=\"chem\">f'(x) = 3x^2 - 4x^{-2}</span>。積分得 <span class=\"chem\">f(x) = x^3 - 4(x^{-1}/(-1)) + C = x^3 + 4/x + C</span>。利用 <span class=\"chem\">f(1) = 7</span>：<span class=\"chem\">1^3 + 4/1 + C = 7 =&gt; C = 2</span>。因此 <span class=\"chem\">f(2) = 2^3 + 4/2 + 2 = 8 + 2 + 2 = 12</span>。</p>",
    },

    // ── t5-2-q003 · mcq · foundation · SL · SL 5.10 · 2 marks
    "t5-2-q003": {
      // EN: <p>Find <span class="chem">int (8x / (2x^2 + 3)) dx</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">int (8x / (2x^2 + 3)) dx</span>。</p>",
      options: [
        // EN: <span class="chem">2 ln(2x^2 + 3) + C</span>
        "<span class=\"chem\">2 ln(2x^2 + 3) + C</span>",
        // EN: <span class="chem">8 ln(2x^2 + 3) + C</span>
        "<span class=\"chem\">8 ln(2x^2 + 3) + C</span>",
        // EN: <span class="chem">4x^2 / (2x^2 + 3) + C</span>
        "<span class=\"chem\">4x^2 / (2x^2 + 3) + C</span>",
        // EN: <span class="chem">2 / (2x^2 + 3)^2 + C</span>
        "<span class=\"chem\">2 / (2x^2 + 3)^2 + C</span>",
      ],
      hints: [
        // EN: Let <span class="chem">u = 2x^2 + 3</span>, so <span class="chem">du = 4x dx</span>.
        "設 <span class=\"chem\">u = 2x^2 + 3</span>，則 <span class=\"chem\">du = 4x dx</span>。",
        // EN: Rewrite <span class="chem">8x dx</span> as <span class="chem">2(4x dx) = 2 du</span> and integrate <span class="chem">int (2/u) du</span>.
        "將 <span class=\"chem\">8x dx</span> 改寫為 <span class=\"chem\">2(4x dx) = 2 du</span> 並積分 <span class=\"chem\">int (2/u) du</span>。",
      ],
      // EN: <p>Let <span class="chem">u = 2x^2 + 3</span>, so <span class="chem">du = 4x dx</span>. Since <span class="chem">8x dx = 2 du</span>, the integral becomes <span class="chem">int (2/u) du = 2 ln|u| + C = 2 ln(2x^2 + 3) + C</span> (since <span class="chem">2x^2 + 3 &gt; 0</span>).</p>
      solution: "<p>設 <span class=\"chem\">u = 2x^2 + 3</span>，故 <span class=\"chem\">du = 4x dx</span>。由於 <span class=\"chem\">8x dx = 2 du</span>，積分變為 <span class=\"chem\">int (2/u) du = 2 ln|u| + C = 2 ln(2x^2 + 3) + C</span>（因 <span class=\"chem\">2x^2 + 3 &gt; 0</span>）。</p>",
      misconception: {
        // EN (option B): The derivative of the denominator 2x² + 3 is 4x, not 8x, so 8x = 2(4x) gives 2 ln(2x² + 3), not 8 ln(2x² + 3).
        "1": "分母 2x² + 3 的導數是 4x，而非 8x，故 8x = 2(4x) 給出 2 ln(2x² + 3)，而非 8 ln(2x² + 3)。",
        // EN (option C): You cannot integrate the numerator 8x while leaving the denominator unchanged.
        "2": "不能只對分子 8x 積分而保持分母不變。",
        // EN (option D): You used a power-rule form instead of recognizing the g'(x)/g(x) logarithmic pattern.
        "3": "你套用了冪法則形式，而未辨識出 g'(x)/g(x) 對數模式。",
      },
    },

    // ── t5-2-q004 · numeric · foundation · SL · SL 5.10, 5.11 · 3 marks
    "t5-2-q004": {
      // EN: <p>Evaluate the definite integral <span class="chem">int_0^{ln 3} 6e^{2x} dx</span>.</p>
      stem: "<p>計算 (Evaluate) 定積分 <span class=\"chem\">int_0^{ln 3} 6e^{2x} dx</span>。</p>",
      hints: [
        // EN: An antiderivative of <span class="chem">6e^{2x}</span> is <span class="chem">(6/2)e^{2x} = 3e^{2x}</span>.
        "<span class=\"chem\">6e^{2x}</span> 的一個原函數為 <span class=\"chem\">(6/2)e^{2x} = 3e^{2x}</span>。",
        // EN: Recall that <span class="chem">e^{2 ln 3} = e^{ln(3^2)} = 9</span> and <span class="chem">e^0 = 1</span>.
        "緊記 <span class=\"chem\">e^{2 ln 3} = e^{ln(3^2)} = 9</span> 及 <span class=\"chem\">e^0 = 1</span>。",
      ],
      // EN: <p><span class="chem">int_0^{ln 3} 6e^{2x} dx = [3e^{2x}]_0^{ln 3} = 3e^{2 ln 3} - 3e^0 = 3(9) - 3(1) = 27 - 3 = 24</span>.</p>
      solution: "<p><span class=\"chem\">int_0^{ln 3} 6e^{2x} dx = [3e^{2x}]_0^{ln 3} = 3e^{2 ln 3} - 3e^0 = 3(9) - 3(1) = 27 - 3 = 24</span>。</p>",
    },

    // ── t5-2-q005 · numeric · exam · SL · SL 5.11 · 5 marks
    "t5-2-q005": {
      // EN: <p>Given that <span class="chem">int_1^5 f(x) dx = 14</span> and <span class="chem">int_3^5 f(x) dx = 6</span>, find the value of <span class="chem">int_1^3 (3f(x) + 2) dx</span>.</p>
      stem: "<p>已知 <span class=\"chem\">int_1^5 f(x) dx = 14</span> 及 <span class=\"chem\">int_3^5 f(x) dx = 6</span>，求 (find) <span class=\"chem\">int_1^3 (3f(x) + 2) dx</span> 的值。</p>",
      hints: [
        // EN: Use additivity <span class="chem">int_1^3 f(x) dx + int_3^5 f(x) dx = int_1^5 f(x) dx</span> to find <span class="chem">int_1^3 f(x) dx</span>.
        "利用區間可加性 <span class=\"chem\">int_1^3 f(x) dx + int_3^5 f(x) dx = int_1^5 f(x) dx</span> 求 <span class=\"chem\">int_1^3 f(x) dx</span>。",
        // EN: Split the target integral: <span class="chem">3 int_1^3 f(x) dx + int_1^3 2 dx</span>, remembering <span class="chem">int_1^3 2 dx = 2(3 - 1)</span>.
        "分拆目標積分：<span class=\"chem\">3 int_1^3 f(x) dx + int_1^3 2 dx</span>，緊記 <span class=\"chem\">int_1^3 2 dx = 2(3 - 1)</span>。",
      ],
      // EN: <p>By additivity, <span class="chem">int_1^3 f(x) dx = int_1^5 f(x) dx - int_3^5 f(x) dx = 14 - 6 = 8</span>. By linearity, <span class="chem">int_1^3 (3f(x) + 2) dx = 3 int_1^3 f(x) dx + int_1^3 2 dx = 3(8) + 2(3 - 1) = 24 + 4 = 28</span>.</p>
      solution: "<p>由區間可加性，<span class=\"chem\">int_1^3 f(x) dx = int_1^5 f(x) dx - int_3^5 f(x) dx = 14 - 6 = 8</span>。由線性性質，<span class=\"chem\">int_1^3 (3f(x) + 2) dx = 3 int_1^3 f(x) dx + int_1^3 2 dx = 3(8) + 2(3 - 1) = 24 + 4 = 28</span>。</p>",
    },

    // ── t5-2-q006 · mcq · exam · SL · SL 5.10, 5.11 · 2 marks
    "t5-2-q006": {
      // EN: <p>Evaluate <span class="chem">int_1^e ((ln x)^2 / x) dx</span>.</p>
      stem: "<p>計算 (Evaluate) <span class=\"chem\">int_1^e ((ln x)^2 / x) dx</span>。</p>",
      options: [
        // EN: <span class="chem">1/3</span>
        "<span class=\"chem\">1/3</span>",
        // EN: <span class="chem">1</span>
        "<span class=\"chem\">1</span>",
        // EN: <span class="chem">1/3 - e^{-1}</span>
        "<span class=\"chem\">1/3 - e^{-1}</span>",
        // EN: <span class="chem">2/e</span>
        "<span class=\"chem\">2/e</span>",
      ],
      hints: [
        // EN: Let <span class="chem">u = ln x</span>, so <span class="chem">du = (1/x) dx</span>.
        "設 <span class=\"chem\">u = ln x</span>，則 <span class=\"chem\">du = (1/x) dx</span>。",
        // EN: Change the limits: when <span class="chem">x = 1</span>, <span class="chem">u = ln 1 = 0</span>; when <span class="chem">x = e</span>, <span class="chem">u = ln e = 1</span>.
        "更換積分限：當 <span class=\"chem\">x = 1</span> 時，<span class=\"chem\">u = ln 1 = 0</span>；當 <span class=\"chem\">x = e</span> 時，<span class=\"chem\">u = ln e = 1</span>。",
      ],
      // EN: <p>Let <span class="chem">u = ln x</span>, so <span class="chem">du = (1/x) dx</span>. The limits become <span class="chem">u = 0</span> to <span class="chem">u = 1</span>. Thus <span class="chem">int_0^1 u^2 du = [u^3 / 3]_0^1 = 1/3 - 0 = 1/3</span>.</p>
      solution: "<p>設 <span class=\"chem\">u = ln x</span>，故 <span class=\"chem\">du = (1/x) dx</span>。積分限變為 <span class=\"chem\">u = 0</span> 至 <span class=\"chem\">u = 1</span>。因此 <span class=\"chem\">int_0^1 u^2 du = [u^3 / 3]_0^1 = 1/3 - 0 = 1/3</span>。</p>",
      misconception: {
        // EN (option B): You forgot to divide by the new exponent 3 when integrating u² du = u³/3.
        "1": "積分 u² du = u³/3 時你忘記除以新指數 3。",
        // EN (option C): After substituting u = ln x, the limits change to u(1) = ln 1 = 0 and u(e) = ln e = 1; there is no e⁻¹ term.
        "2": "代換 u = ln x 後，積分限變為 u(1) = ln 1 = 0 與 u(e) = ln e = 1；並不存在 e⁻¹ 項。",
        // EN (option D): You differentiated (ln x)² to get (2 ln x)/x and evaluated it at x = e, instead of integrating.
        "3": "你把 (ln x)² 求導得到 (2 ln x)/x，並在 x = e 處取值，而不是進行積分。",
      },
    },

    // ── t5-2-q007 · multi · exam · SL · SL 5.11 · 5 marks
    "t5-2-q007": {
      // EN: <p>A continuous function <span class="chem">y = f(x)</span> satisfies <span class="chem">f(x) &gt;= 0</span> on <span class="chem">[0, 2]</span> and <span class="chem">f(x) &lt;= 0</span> on <span class="chem">[2, 5]</span>. The geometric area between the curve and the <span class="chem">x</span>-axis on <span class="chem">[0, 2]</span> is <span class="chem">5</span>, and the geometric area between the curve and the <span class="chem">x</span>-axis on <span class="chem">[2, 5]</span> is <span class="chem">8</span>. Select <strong>all</strong> true statements.</p>
      stem: "<p>連續函數 <span class=\"chem\">y = f(x)</span> 在 <span class=\"chem\">[0, 2]</span> 上滿足 <span class=\"chem\">f(x) &gt;= 0</span>，在 <span class=\"chem\">[2, 5]</span> 上滿足 <span class=\"chem\">f(x) &lt;= 0</span>。曲線與 <span class=\"chem\">x</span> 軸在 <span class=\"chem\">[0, 2]</span> 上所圍成的幾何面積為 <span class=\"chem\">5</span>，而曲線與 <span class=\"chem\">x</span> 軸在 <span class=\"chem\">[2, 5]</span> 上所圍成的幾何面積為 <span class=\"chem\">8</span>。選出<strong>所有</strong>正確的陳述。</p>",
      options: [
        // EN: <span class="chem">int_0^5 f(x) dx = -3</span>
        "<span class=\"chem\">int_0^5 f(x) dx = -3</span>",
        // EN: <span class="chem">int_0^5 |f(x)| dx = 13</span>
        "<span class=\"chem\">int_0^5 |f(x)| dx = 13</span>",
        // EN: <span class="chem">int_5^2 f(x) dx = 8</span>
        "<span class=\"chem\">int_5^2 f(x) dx = 8</span>",
        // EN: <span class="chem">int_0^5 f(x) dx = 13</span>
        "<span class=\"chem\">int_0^5 f(x) dx = 13</span>",
      ],
      hints: [
        // EN: On <span class="chem">[2, 5]</span>, <span class="chem">f(x) &lt;= 0</span>, so <span class="chem">int_2^5 f(x) dx = -8</span>.
        "在 <span class=\"chem\">[2, 5]</span> 上 <span class=\"chem\">f(x) &lt;= 0</span>，故 <span class=\"chem\">int_2^5 f(x) dx = -8</span>。",
        // EN: Reversing the limits of integration flips the sign: <span class="chem">int_5^2 f(x) dx = -int_2^5 f(x) dx</span>.
        "對調積分上下限會反轉正負號：<span class=\"chem\">int_5^2 f(x) dx = -int_2^5 f(x) dx</span>。",
      ],
      // EN: <p>Since <span class="chem">f(x) &gt;= 0</span> on <span class="chem">[0, 2]</span>, <span class="chem">int_0^2 f(x) dx = +5</span>. Since <span class="chem">f(x) &lt;= 0</span> on <span class="chem">[2, 5]</span>, <span class="chem">int_2^5 f(x) dx = -8</span>. Therefore <span class="chem">int_0^5 f(x) dx = 5 + (-8) = -3</span>, <span class="chem">int_0^5 |f(x)| dx = 5 + 8 = 13</span>, and <span class="chem">int_5^2 f(x) dx = -int_2^5 f(x) dx = -(-8) = 8</span>.</p>
      solution: "<p>由於在 <span class=\"chem\">[0, 2]</span> 上 <span class=\"chem\">f(x) &gt;= 0</span>，故 <span class=\"chem\">int_0^2 f(x) dx = +5</span>。由於在 <span class=\"chem\">[2, 5]</span> 上 <span class=\"chem\">f(x) &lt;= 0</span>，故 <span class=\"chem\">int_2^5 f(x) dx = -8</span>。因此 <span class=\"chem\">int_0^5 f(x) dx = 5 + (-8) = -3</span>、<span class=\"chem\">int_0^5 |f(x)| dx = 5 + 8 = 13</span>，及 <span class=\"chem\">int_5^2 f(x) dx = -int_2^5 f(x) dx = -(-8) = 8</span>。</p>",
      misconception: {
        // EN (option D): 13 is the total geometric area ∫ |f(x)| dx. Because f(x) ≤ 0 on [2, 5], that region contributes −8 to the signed integral ∫ f(x) dx, giving 5 − 8 = −3.
        "3": "13 是總幾何面積 ∫ |f(x)| dx。由於在 [2, 5] 上 f(x) ≤ 0，該區域對帶號積分 ∫ f(x) dx 貢獻 −8，故得 5 − 8 = −3。",
      },
    },

    // ── t5-2-q008 · numeric · exam · SL · SL 5.11 · 6 marks
    "t5-2-q008": {
      // EN: <p>Find the total geometric area enclosed between the curve <span class="chem">y = 3x^2 - 6x</span>, the <span class="chem">x</span>-axis, and the vertical lines <span class="chem">x = 0</span> and <span class="chem">x = 3</span>.</p>
      stem: "<p>求 (Find) 由曲線 <span class=\"chem\">y = 3x^2 - 6x</span>、<span class=\"chem\">x</span> 軸與鉛垂線 <span class=\"chem\">x = 0</span> 及 <span class=\"chem\">x = 3</span> 所圍成的總幾何面積。</p>",
      hints: [
        // EN: First solve <span class="chem">3x^2 - 6x = 0</span> to see where the curve crosses the <span class="chem">x</span>-axis inside <span class="chem">[0, 3]</span>.
        "先解 <span class=\"chem\">3x^2 - 6x = 0</span>，找出曲線在 <span class=\"chem\">[0, 3]</span> 內何處穿過 <span class=\"chem\">x</span> 軸。",
        // EN: The curve is below the <span class="chem">x</span>-axis on <span class="chem">[0, 2]</span> and above it on <span class="chem">[2, 3]</span>, so compute <span class="chem">|int_0^2 (3x^2 - 6x) dx| + int_2^3 (3x^2 - 6x) dx</span>.
        "曲線在 <span class=\"chem\">[0, 2]</span> 上位於 <span class=\"chem\">x</span> 軸下方，在 <span class=\"chem\">[2, 3]</span> 上位於上方，故計算 <span class=\"chem\">|int_0^2 (3x^2 - 6x) dx| + int_2^3 (3x^2 - 6x) dx</span>。",
      ],
      // EN: <p>Setting <span class="chem">3x(x - 2) = 0</span> gives <span class="chem">x = 0</span> and <span class="chem">x = 2</span>. On <span class="chem">[0, 2]</span>, <span class="chem">y &lt;= 0</span>: <span class="chem">int_0^2 (3x^2 - 6x) dx = [x^3 - 3x^2]_0^2 = 8 - 12 = -4</span>, giving area <span class="chem">4</span>. On <span class="chem">[2, 3]</span>, <span class="chem">y &gt;= 0</span>: <span class="chem">[x^3 - 3x^2]_2^3 = (27 - 27) - (8 - 12) = 4</span>. Total enclosed area <span class="chem">= 4 + 4 = 8</span>.</p>
      solution: "<p>令 <span class=\"chem\">3x(x - 2) = 0</span> 得 <span class=\"chem\">x = 0</span> 與 <span class=\"chem\">x = 2</span>。在 <span class=\"chem\">[0, 2]</span> 上 <span class=\"chem\">y &lt;= 0</span>：<span class=\"chem\">int_0^2 (3x^2 - 6x) dx = [x^3 - 3x^2]_0^2 = 8 - 12 = -4</span>，得面積 <span class=\"chem\">4</span>。在 <span class=\"chem\">[2, 3]</span> 上 <span class=\"chem\">y &gt;= 0</span>：<span class=\"chem\">[x^3 - 3x^2]_2^3 = (27 - 27) - (8 - 12) = 4</span>。總所圍面積 <span class=\"chem\">= 4 + 4 = 8</span>。</p>",
    },

    // ── t5-2-q009 · numeric · exam · SL · SL 5.11 · 6 marks
    "t5-2-q009": {
      // EN: <p>Find the exact area of the finite region enclosed between the parabola <span class="chem">y = 8 - x^2</span> and the line <span class="chem">y = 2x</span>.</p>
      stem: "<p>求 (Find) 拋物線 <span class=\"chem\">y = 8 - x^2</span> 與直線 <span class=\"chem\">y = 2x</span> 之間所圍成有限區域的準確面積。</p>",
      hints: [
        // EN: Solve <span class="chem">8 - x^2 = 2x</span> to find the intersection <span class="chem">x</span>-coordinates.
        "解 <span class=\"chem\">8 - x^2 = 2x</span> 以求交點的 <span class=\"chem\">x</span> 坐標。",
        // EN: On <span class="chem">[-4, 2]</span>, <span class="chem">8 - x^2 &gt;= 2x</span>, so evaluate <span class="chem">int_{-4}^2 (8 - 2x - x^2) dx</span>.
        "在 <span class=\"chem\">[-4, 2]</span> 上 <span class=\"chem\">8 - x^2 &gt;= 2x</span>，故計算 <span class=\"chem\">int_{-4}^2 (8 - 2x - x^2) dx</span>。",
      ],
      // EN: <p>Equating the curves: <span class="chem">x^2 + 2x - 8 = 0 =&gt; (x + 4)(x - 2) = 0</span>, so <span class="chem">x = -4</span> and <span class="chem">x = 2</span>. Since <span class="chem">8 - x^2 &gt;= 2x</span> on <span class="chem">[-4, 2]</span>, the area is <span class="chem">int_{-4}^2 (8 - 2x - x^2) dx = [8x - x^2 - x^3/3]_{-4}^2 = (16 - 4 - 8/3) - (-32 - 16 + 64/3) = (12 - 8/3) - (-48 + 64/3) = 60 - 72/3 = 36</span>.</p>
      solution: "<p>聯立曲線：<span class=\"chem\">x^2 + 2x - 8 = 0 =&gt; (x + 4)(x - 2) = 0</span>，故 <span class=\"chem\">x = -4</span> 與 <span class=\"chem\">x = 2</span>。由於在 <span class=\"chem\">[-4, 2]</span> 上 <span class=\"chem\">8 - x^2 &gt;= 2x</span>，面積為 <span class=\"chem\">int_{-4}^2 (8 - 2x - x^2) dx = [8x - x^2 - x^3/3]_{-4}^2 = (16 - 4 - 8/3) - (-32 - 16 + 64/3) = (12 - 8/3) - (-48 + 64/3) = 60 - 72/3 = 36</span>。</p>",
    },

    // ── t5-2-q010 · order · exam · SL · SL 5.9 · 4 marks
    "t5-2-q010": {
      // EN: <p>Arrange the steps in the correct logical order to find the total distance travelled by a particle with velocity <span class="chem">v(t) = 6t - 12</span> <span class="unit">m s-1</span> over the time interval <span class="chem">0 &lt;= t &lt;= 5</span>.</p>
      stem: "<p>按正確的邏輯順序排列以下步驟，以求速度為 <span class=\"chem\">v(t) = 6t - 12</span> <span class=\"unit\">m s-1</span> 的質點在時間區間 <span class=\"chem\">0 &lt;= t &lt;= 5</span> 內所行的總路程。</p>",
      options: [
        // EN: Solve <span class="chem">v(t) = 6t - 12 = 0</span> to find the turning time <span class="chem">t = 2</span> <span class="unit">s</span> inside <span class="chem">(0, 5)</span>.
        "解 <span class=\"chem\">v(t) = 6t - 12 = 0</span> 找出 <span class=\"chem\">(0, 5)</span> 內的轉向時刻 <span class=\"chem\">t = 2</span> <span class=\"unit\">s</span>。",
        // EN: Split the total distance integral at <span class="chem">t = 2</span>: <span class="chem">d = |int_0^2 (6t - 12) dt| + |int_2^5 (6t - 12) dt|</span>.
        "在 <span class=\"chem\">t = 2</span> 處分拆總路程積分：<span class=\"chem\">d = |int_0^2 (6t - 12) dt| + |int_2^5 (6t - 12) dt|</span>。",
        // EN: Evaluate each definite integral using <span class="chem">[3t^2 - 12t]</span> to get <span class="chem">-12</span> on <span class="chem">[0, 2]</span> and <span class="chem">+27</span> on <span class="chem">[2, 5]</span>.
        "利用 <span class=\"chem\">[3t^2 - 12t]</span> 計算各定積分，在 <span class=\"chem\">[0, 2]</span> 上得 <span class=\"chem\">-12</span>，在 <span class=\"chem\">[2, 5]</span> 上得 <span class=\"chem\">+27</span>。",
        // EN: Sum the absolute values of both legs to obtain total distance <span class="chem">d = |-12| + 27 = 39</span> <span class="unit">m</span>.
        "將兩段路程的絕對值相加，得總路程 <span class=\"chem\">d = |-12| + 27 = 39</span> <span class=\"unit\">m</span>。",
      ],
      hints: [
        // EN: Before integrating for distance, you must check whether <span class="chem">v(t)</span> changes sign inside <span class="chem">(0, 5)</span>.
        "積分求路程前，必須先檢查 <span class=\"chem\">v(t)</span> 在 <span class=\"chem\">(0, 5)</span> 內是否改變正負號。",
        // EN: Once you split at <span class="chem">t = 2</span>, compute the signed integral of each leg and take absolute values at the end.
        "在 <span class=\"chem\">t = 2</span> 處分拆後，計算每段的帶號積分，最後再取絕對值。",
      ],
      // EN: <p>To find total distance on Paper 1: (1) solve <span class="chem">v(t) = 0</span> to locate turning times, (2) split <span class="chem">int_0^5 |v(t)| dt</span> at <span class="chem">t = 2</span>, (3) evaluate each sub-integral, and (4) sum their absolute values: <span class="chem">12 + 27 = 39</span> <span class="unit">m</span>.</p>
      solution: "<p>在 Paper 1 求總路程：(1) 解 <span class=\"chem\">v(t) = 0</span> 找出轉向時刻，(2) 在 <span class=\"chem\">t = 2</span> 處分拆 <span class=\"chem\">int_0^5 |v(t)| dt</span>，(3) 計算各分段積分，及 (4) 把各段絕對值相加：<span class=\"chem\">12 + 27 = 39</span> <span class=\"unit\">m</span>。</p>",
    },

    // ── t5-2-q011 · numeric · exam · SL · SL 5.9, 5.11 · 5 marks
    "t5-2-q011": {
      // EN: <p>A particle moves along a straight line with velocity <span class="chem">v(t) = 4 sin(t) - t + 1</span> <span class="unit">m s-1</span> for <span class="chem">0 &lt;= t &lt;= 4</span> (where <span class="chem">t</span> is in seconds). Using your GDC, calculate the <strong>total distance travelled</strong> by the particle from <span class="chem">t = 0</span> to <span class="chem">t = 4</span>, correct to 3 significant figures.</p>
      stem: "<p>質點沿直線運動，在 <span class=\"chem\">0 &lt;= t &lt;= 4</span> 時的速度為 <span class=\"chem\">v(t) = 4 sin(t) - t + 1</span> <span class=\"unit\">m s-1</span>（其中 <span class=\"chem\">t</span> 以秒為單位）。利用 GDC，計算 (calculate) 質點由 <span class=\"chem\">t = 0</span> 至 <span class=\"chem\">t = 4</span> 所行的<strong>總路程</strong>，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Total distance travelled is <span class="chem">d = int_0^4 |v(t)| dt</span>, not <span class="chem">int_0^4 v(t) dt</span>.
        "總路程是 <span class=\"chem\">d = int_0^4 |v(t)| dt</span>，而非 <span class=\"chem\">int_0^4 v(t) dt</span>。",
        // EN: Make sure your GDC is in <strong>radian mode</strong> and use its numerical integration command (TI: fnInt; Casio: ∫dx) on <span class="chem">|4 sin(t) - t + 1|</span> from <span class="chem">t = 0</span> to <span class="chem">t = 4</span>.
        "確保你的 GDC 處於<strong>弧度模式 (radian mode)</strong>，並用其數值積分指令（TI：fnInt；Casio：∫dx）計算 <span class=\"chem\">|4 sin(t) - t + 1|</span> 由 <span class=\"chem\">t = 0</span> 至 <span class=\"chem\">t = 4</span> 的積分。",
      ],
      // EN: <p>In radian mode on a GDC, <span class="chem">d = int_0^4 |4 sin(t) - t + 1| dt ≈ 10.728...</span>, which rounds to <span class="chem">10.7</span> <span class="unit">m</span> (3 s.f.). (Note: the net displacement is only <span class="chem">int_0^4 v(t) dt ≈ 2.61</span> <span class="unit">m</span> because <span class="chem">v(t)</span> turns negative around <span class="chem">t ≈ 2.70</span> <span class="unit">s</span>.)</p>
      solution: "<p>在 GDC 的弧度模式下，<span class=\"chem\">d = int_0^4 |4 sin(t) - t + 1| dt ≈ 10.728...</span>，捨入為 <span class=\"chem\">10.7</span> <span class=\"unit\">m</span>（3 位有效數字）。（註：淨位移僅為 <span class=\"chem\">int_0^4 v(t) dt ≈ 2.61</span> <span class=\"unit\">m</span>，因 <span class=\"chem\">v(t)</span> 在約 <span class=\"chem\">t ≈ 2.70</span> <span class=\"unit\">s</span> 處轉負。）</p>",
    },

    // ── t5-2-q012 · mcq · exam · SL · SL 5.9 · 2 marks
    "t5-2-q012": {
      // EN: <p>A particle moves along a straight line with displacement <span class="chem">s(t) = t^3 - 6t^2 + 9t</span> <span class="unit">m</span> for <span class="chem">t &gt;= 0</span>. During which time intervals is the particle <strong>slowing down</strong>?</p>
      stem: "<p>質點沿直線運動，在 <span class=\"chem\">t &gt;= 0</span> 時的位移為 <span class=\"chem\">s(t) = t^3 - 6t^2 + 9t</span> <span class=\"unit\">m</span>。質點在哪些時間區間內正在<strong>減速</strong>？</p>",
      options: [
        // EN: <span class="chem">0 &lt; t &lt; 1</span> and <span class="chem">2 &lt; t &lt; 3</span>
        "<span class=\"chem\">0 &lt; t &lt; 1</span> 與 <span class=\"chem\">2 &lt; t &lt; 3</span>",
        // EN: <span class="chem">0 &lt; t &lt; 2</span> only
        "僅 <span class=\"chem\">0 &lt; t &lt; 2</span>",
        // EN: <span class="chem">1 &lt; t &lt; 3</span> only
        "僅 <span class=\"chem\">1 &lt; t &lt; 3</span>",
        // EN: <span class="chem">1 &lt; t &lt; 2</span> and <span class="chem">t &gt; 3</span>
        "<span class=\"chem\">1 &lt; t &lt; 2</span> 與 <span class=\"chem\">t &gt; 3</span>",
      ],
      hints: [
        // EN: Find both <span class="chem">v(t) = s'(t) = 3(t - 1)(t - 3)</span> and <span class="chem">a(t) = v'(t) = 6(t - 2)</span>.
        "同時求 <span class=\"chem\">v(t) = s'(t) = 3(t - 1)(t - 3)</span> 與 <span class=\"chem\">a(t) = v'(t) = 6(t - 2)</span>。",
        // EN: A particle is slowing down when <span class="chem">v(t)</span> and <span class="chem">a(t)</span> have <strong>opposite signs</strong> (<span class="chem">v(t) * a(t) &lt; 0</span>).
        "當 <span class=\"chem\">v(t)</span> 與 <span class=\"chem\">a(t)</span> <strong>異號</strong>（<span class=\"chem\">v(t) * a(t) &lt; 0</span>）時，質點正在減速。",
      ],
      // EN: <p>We have <span class="chem">v(t) = 3t^2 - 12t + 9 = 3(t - 1)(t - 3)</span> and <span class="chem">a(t) = 6t - 12 = 6(t - 2)</span>. Testing the four intervals:<br>• <span class="chem">0 &lt; t &lt; 1</span>: <span class="chem">v &gt; 0, a &lt; 0</span> (opposite signs → slowing down)<br>• <span class="chem">1 &lt; t &lt; 2</span>: <span class="chem">v &lt; 0, a &lt; 0</span> (same sign → speeding up)<br>• <span class="chem">2 &lt; t &lt; 3</span>: <span class="chem">v &lt; 0, a &gt; 0</span> (opposite signs → slowing down)<br>• <span class="chem">t &gt; 3</span>: <span class="chem">v &gt; 0, a &gt; 0</span> (same sign → speeding up)<br>Thus the particle is slowing down for <span class="chem">0 &lt; t &lt; 1</span> and <span class="chem">2 &lt; t &lt; 3</span>.</p>
      solution: "<p>我們有 <span class=\"chem\">v(t) = 3t^2 - 12t + 9 = 3(t - 1)(t - 3)</span> 及 <span class=\"chem\">a(t) = 6t - 12 = 6(t - 2)</span>。檢驗四個區間：<br>• <span class=\"chem\">0 &lt; t &lt; 1</span>：<span class=\"chem\">v &gt; 0, a &lt; 0</span>（異號 → 減速）<br>• <span class=\"chem\">1 &lt; t &lt; 2</span>：<span class=\"chem\">v &lt; 0, a &lt; 0</span>（同號 → 加速）<br>• <span class=\"chem\">2 &lt; t &lt; 3</span>：<span class=\"chem\">v &lt; 0, a &gt; 0</span>（異號 → 減速）<br>• <span class=\"chem\">t &gt; 3</span>：<span class=\"chem\">v &gt; 0, a &gt; 0</span>（同號 → 加速）<br>因此質點在 <span class=\"chem\">0 &lt; t &lt; 1</span> 與 <span class=\"chem\">2 &lt; t &lt; 3</span> 時減速。</p>",
      misconception: {
        // EN (option B): a(t) = 6(t − 2) < 0 on 0 < t < 2, but negative acceleration only means slowing down when velocity v(t) is positive; on 1 < t < 2 both v(t) and a(t) are negative, so the particle is speeding up!
        "1": "在 0 < t < 2 上 a(t) = 6(t − 2) < 0，但負加速度只有在速度 v(t) 為正時才代表減速；在 1 < t < 2 上 v(t) 與 a(t) 皆為負，故質點其實正在加速！",
        // EN (option C): v(t) < 0 on 1 < t < 3, which only tells you the particle is moving in the negative direction, not whether it is slowing down.
        "2": "在 1 < t < 3 上 v(t) < 0 只告訴你質點正往負方向移動，並不能說明它是否在減速。",
        // EN (option D): On 1 < t < 2 (both negative) and t > 3 (both positive), v(t) and a(t) have the same sign, so the particle is speeding up.
        "3": "在 1 < t < 2（皆為負）與 t > 3（皆為正）上，v(t) 與 a(t) 同號，故質點正在加速。",
      },
    },

    // ── t5-2-q013 · short · exam · SL · SL 5.6, 5.10, 5.11 · 6 marks
    "t5-2-q013": {
      // EN: <p>(a) Differentiate <span class="chem">F(x) = x e^{2x}</span> with respect to <span class="chem">x</span>. <strong>[2 marks]</strong><br>(b) Hence find <span class="chem">int x e^{2x} dx</span>, and evaluate <span class="chem">int_0^1 x e^{2x} dx</span> in exact form. <strong>[4 marks]</strong></p>
      stem: "<p>(a) 求 <span class=\"chem\">F(x) = x e^{2x}</span> 關於 <span class=\"chem\">x</span> 的導數。<strong>[2 marks]</strong><br>(b) 由此求 (Hence find) <span class=\"chem\">int x e^{2x} dx</span>，並以準確值形式計算 (evaluate) <span class=\"chem\">int_0^1 x e^{2x} dx</span>。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: For part (a), use the product rule with <span class="chem">u = x</span> and <span class="chem">v = e^{2x}</span>.
        "對於 (a) 部，使用乘積法則，其中 <span class=\"chem\">u = x</span> 及 <span class=\"chem\">v = e^{2x}</span>。",
        // EN: For part (b), “Hence” means integrate both sides of <span class="chem">d/dx(x e^{2x}) = e^{2x} + 2x e^{2x}</span> and isolate <span class="chem">int x e^{2x} dx</span>.
        "對於 (b) 部，「由此 (Hence)」代表對 <span class=\"chem\">d/dx(x e^{2x}) = e^{2x} + 2x e^{2x}</span> 兩邊積分，再分離出 <span class=\"chem\">int x e^{2x} dx</span>。",
      ],
      // EN: <p>(a) By the product rule, <span class="chem">F'(x) = e^{2x} + 2x e^{2x}</span>.<br>(b) Integrating both sides gives <span class="chem">x e^{2x} = int e^{2x} dx + 2 int x e^{2x} dx = (1/2)e^{2x} + 2 int x e^{2x} dx</span> (up to a constant). Solving for the integral gives <span class="chem">int x e^{2x} dx = (1/2)x e^{2x} - (1/4)e^{2x} + C</span>. Evaluating from <span class="chem">0</span> to <span class="chem">1</span>: <span class="chem">[((2x - 1)/4)e^{2x}]_0^1 = (1/4)e^2 - (-1/4)e^0 = (e^2 + 1)/4</span>.</p>
      solution: "<p>(a) 由乘積法則，<span class=\"chem\">F'(x) = e^{2x} + 2x e^{2x}</span>。<br>(b) 兩邊積分得 <span class=\"chem\">x e^{2x} = int e^{2x} dx + 2 int x e^{2x} dx = (1/2)e^{2x} + 2 int x e^{2x} dx</span>（差一常數）。解出該積分得 <span class=\"chem\">int x e^{2x} dx = (1/2)x e^{2x} - (1/4)e^{2x} + C</span>。由 <span class=\"chem\">0</span> 積分至 <span class=\"chem\">1</span>：<span class=\"chem\">[((2x - 1)/4)e^{2x}]_0^1 = (1/4)e^2 - (-1/4)e^0 = (e^2 + 1)/4</span>。</p>",
      // EN: <p>(a) <span class="chem">F'(x) = (2x + 1)e^{2x}</span><br>(b) <span class="chem">int x e^{2x} dx = (1/2)x e^{2x} - (1/4)e^{2x} + C</span>; <span class="chem">int_0^1 x e^{2x} dx = (e^2 + 1) / 4</span></p>
      answer: "<p>(a) <span class=\"chem\">F'(x) = (2x + 1)e^{2x}</span><br>(b) <span class=\"chem\">int x e^{2x} dx = (1/2)x e^{2x} - (1/4)e^{2x} + C</span>；<span class=\"chem\">int_0^1 x e^{2x} dx = (e^2 + 1) / 4</span></p>",
      markscheme: [
        // EN: M1: Apply the product rule with <span class="chem">u = x</span> and <span class="chem">v = e^{2x}</span>.
        "M1：以 <span class=\"chem\">u = x</span> 及 <span class=\"chem\">v = e^{2x}</span> 套用乘積法則。",
        // EN: A1: <span class="chem">F'(x) = 1 * e^{2x} + x(2e^{2x}) = e^{2x} + 2x e^{2x}</span>.
        "A1：<span class=\"chem\">F'(x) = 1 * e^{2x} + x(2e^{2x}) = e^{2x} + 2x e^{2x}</span>。",
        // EN: M1: Integrate both sides of part (a): <span class="chem">x e^{2x} = int e^{2x} dx + 2 int x e^{2x} dx</span>.
        "M1：對 (a) 部兩邊積分：<span class=\"chem\">x e^{2x} = int e^{2x} dx + 2 int x e^{2x} dx</span>。",
        // EN: A1: Rearrange to obtain <span class="chem">int x e^{2x} dx = (1/2) x e^{2x} - (1/4) e^{2x} + C</span>.
        "A1：移項整理得 <span class=\"chem\">int x e^{2x} dx = (1/2) x e^{2x} - (1/4) e^{2x} + C</span>。",
        // EN: M1: Substitute limits <span class="chem">0</span> and <span class="chem">1</span>: <span class="chem">((1/2)e^2 - (1/4)e^2) - (0 - 1/4)</span>.
        "M1：代入上下限 <span class=\"chem\">0</span> 與 <span class=\"chem\">1</span>：<span class=\"chem\">((1/2)e^2 - (1/4)e^2) - (0 - 1/4)</span>。",
        // EN: A1: <span class="chem">= (e^2 + 1) / 4</span>.
        "A1：<span class=\"chem\">= (e^2 + 1) / 4</span>。",
      ],
    },

    // ── t5-2-q014 · numeric · challenge · SL · SL 5.5, 5.11 · 6 marks
    "t5-2-q014": {
      // EN: <p>The finite region enclosed between the curve <span class="chem">y = k x (4 - x)</span> (where <span class="chem">k &gt; 0</span>) and the <span class="chem">x</span>-axis has an area of <span class="chem">32</span> square units. Find the value of <span class="chem">k</span>.</p>
      stem: "<p>曲線 <span class=\"chem\">y = k x (4 - x)</span>（其中 <span class=\"chem\">k &gt; 0</span>）與 <span class=\"chem\">x</span> 軸之間所圍成的有限區域面積為 <span class=\"chem\">32</span> 平方單位。求 (Find) <span class=\"chem\">k</span> 的值。</p>",
      hints: [
        // EN: Decode: the unknown <span class="chem">k</span> is inside the integrand. Find where the curve meets the <span class="chem">x</span>-axis, write the area as an expression in <span class="chem">k</span>, then set it equal to <span class="chem">32</span>.
        "解碼：未知數 <span class=\"chem\">k</span> 在被積函數之內。先求曲線與 <span class=\"chem\">x</span> 軸的交點，把面積寫成 <span class=\"chem\">k</span> 的式子，再令它等於 <span class=\"chem\">32</span>。",
        // EN: The curve crosses the <span class="chem">x</span>-axis at <span class="chem">x = 0</span> and <span class="chem">x = 4</span>, and lies above the <span class="chem">x</span>-axis on <span class="chem">[0, 4]</span> since <span class="chem">k &gt; 0</span>.
        "曲線在 <span class=\"chem\">x = 0</span> 與 <span class=\"chem\">x = 4</span> 處穿過 <span class=\"chem\">x</span> 軸，且因 <span class=\"chem\">k &gt; 0</span> 在 <span class=\"chem\">[0, 4]</span> 上位於 <span class=\"chem\">x</span> 軸上方。",
        // EN: Set <span class="chem">k int_0^4 (4x - x^2) dx = 32</span> and solve for <span class="chem">k</span>.
        "令 <span class=\"chem\">k int_0^4 (4x - x^2) dx = 32</span> 並解出 <span class=\"chem\">k</span>。",
      ],
      // EN: <p>Since <span class="chem">k &gt; 0</span>, <span class="chem">y &gt;= 0</span> on <span class="chem">[0, 4]</span>. The area is <span class="chem">int_0^4 k(4x - x^2) dx = k[2x^2 - x^3/3]_0^4 = k(32 - 64/3) = (32/3)k</span>. Setting <span class="chem">(32/3)k = 32</span> gives <span class="chem">k = 3</span>.</p>
      solution: "<p>由於 <span class=\"chem\">k &gt; 0</span>，在 <span class=\"chem\">[0, 4]</span> 上 <span class=\"chem\">y &gt;= 0</span>。面積為 <span class=\"chem\">int_0^4 k(4x - x^2) dx = k[2x^2 - x^3/3]_0^4 = k(32 - 64/3) = (32/3)k</span>。令 <span class=\"chem\">(32/3)k = 32</span> 得 <span class=\"chem\">k = 3</span>。</p>",
    },

    // ── t5-2-q015 · mcq · challenge · SL · SL 5.10, 5.11 · 2 marks
    "t5-2-q015": {
      // EN: <p>Given that <span class="chem">int_2^6 f(x) dx = 10</span>, find the value of <span class="chem">int_0^4 (f(x + 2) + 3) dx</span>.</p>
      stem: "<p>已知 <span class=\"chem\">int_2^6 f(x) dx = 10</span>，求 (find) <span class=\"chem\">int_0^4 (f(x + 2) + 3) dx</span> 的值。</p>",
      options: [
        // EN: <span class="chem">22</span>
        "<span class=\"chem\">22</span>",
        // EN: <span class="chem">13</span>
        "<span class=\"chem\">13</span>",
        // EN: <span class="chem">16</span>
        "<span class=\"chem\">16</span>",
        // EN: <span class="chem">10</span>
        "<span class=\"chem\">10</span>",
      ],
      hints: [
        // EN: Decode: you do not know <span class="chem">f</span>, so the only route is to turn <span class="chem">int_0^4 f(x + 2) dx</span> into the given integral <span class="chem">int_2^6 f(x) dx</span> by shifting the variable.
        "解碼：你不知道 <span class=\"chem\">f</span> 是甚麼，所以唯一的方法是透過平移變數，把 <span class=\"chem\">int_0^4 f(x + 2) dx</span> 化為已知的積分 <span class=\"chem\">int_2^6 f(x) dx</span>。",
        // EN: Split the integral into <span class="chem">int_0^4 f(x + 2) dx + int_0^4 3 dx</span>.
        "將積分分拆為 <span class=\"chem\">int_0^4 f(x + 2) dx + int_0^4 3 dx</span>。",
        // EN: For the first integral, substitute <span class="chem">u = x + 2</span> (<span class="chem">du = dx</span>) and update the limits from <span class="chem">x = 0, 4</span> to <span class="chem">u = 2, 6</span>.
        "對第一個積分作代換 <span class=\"chem\">u = x + 2</span>（<span class=\"chem\">du = dx</span>），並將積分限由 <span class=\"chem\">x = 0, 4</span> 更新為 <span class=\"chem\">u = 2, 6</span>。",
      ],
      // EN: <p>Using linearity, <span class="chem">int_0^4 (f(x + 2) + 3) dx = int_0^4 f(x + 2) dx + int_0^4 3 dx</span>. Let <span class="chem">u = x + 2</span> (<span class="chem">du = dx</span>): when <span class="chem">x = 0</span>, <span class="chem">u = 2</span>; when <span class="chem">x = 4</span>, <span class="chem">u = 6</span>. So <span class="chem">int_0^4 f(x + 2) dx = int_2^6 f(u) du = 10</span>. Adding <span class="chem">int_0^4 3 dx = 3(4 - 0) = 12</span> gives <span class="chem">10 + 12 = 22</span>.</p>
      solution: "<p>由線性性質，<span class=\"chem\">int_0^4 (f(x + 2) + 3) dx = int_0^4 f(x + 2) dx + int_0^4 3 dx</span>。設 <span class=\"chem\">u = x + 2</span>（<span class=\"chem\">du = dx</span>）：當 <span class=\"chem\">x = 0</span> 時 <span class=\"chem\">u = 2</span>；當 <span class=\"chem\">x = 4</span> 時 <span class=\"chem\">u = 6</span>。故 <span class=\"chem\">int_0^4 f(x + 2) dx = int_2^6 f(u) du = 10</span>。加上 <span class=\"chem\">int_0^4 3 dx = 3(4 - 0) = 12</span> 得 <span class=\"chem\">10 + 12 = 22</span>。</p>",
      misconception: {
        // EN (option B): Integrating the constant 3 from 0 to 4 gives 3(4 − 0) = 12, not just 3.
        "1": "把常數 3 由 0 積分至 4 得 3(4 − 0) = 12，而不只是 3。",
        // EN (option C): Check the limits: ∫₀⁴ 3 dx = 3 × 4 = 12, not 6.
        "2": "檢查積分限：∫₀⁴ 3 dx = 3 × 4 = 12，而非 6。",
        // EN (option D): You cannot ignore the +3 term inside the integrand; ∫₀⁴ (f(x + 2) + 3) dx = ∫₂⁶ f(u) du + ∫₀⁴ 3 dx.
        "3": "不能忽略被積函數內的 +3 項；∫₀⁴ (f(x + 2) + 3) dx = ∫₂⁶ f(u) du + ∫₀⁴ 3 dx。",
      },
    },

    // ── t5-2-q016 · numeric · exam · SL · SL 5.11 · 6 marks
    "t5-2-q016": {
      // EN: <p>Using your GDC, find the area of the finite region enclosed between the curves <span class="chem">y = 4 - x^2</span> and <span class="chem">y = e^{0.5x}</span>, correct to 3 significant figures.</p>
      stem: "<p>利用 GDC，求 (find) 曲線 <span class=\"chem\">y = 4 - x^2</span> 與 <span class=\"chem\">y = e^{0.5x}</span> 之間所圍成有限區域的面積，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Graph both curves on your GDC and find the two intersection <span class="chem">x</span>-coordinates: <span class="chem">a ≈ -1.9009</span> and <span class="chem">b ≈ 1.4069</span>.
        "在 GDC 上繪出兩條曲線並求兩個交點的 <span class=\"chem\">x</span> 坐標：<span class=\"chem\">a ≈ -1.9009</span> 與 <span class=\"chem\">b ≈ 1.4069</span>。",
        // EN: Store the exact intersection values (to full GDC precision) and evaluate <span class="chem">int_a^b ((4 - x^2) - e^{0.5x}) dx</span>.
        "儲存交點的準確數值（保留 GDC 全精度）並計算 <span class=\"chem\">int_a^b ((4 - x^2) - e^{0.5x}) dx</span>。",
      ],
      // EN: <p>Solving <span class="chem">4 - x^2 = e^{0.5x}</span> on a GDC gives intersection points at <span class="chem">a ≈ -1.90090</span> and <span class="chem">b ≈ 1.40688</span>. Between these limits, <span class="chem">4 - x^2 &gt;= e^{0.5x}</span>, so <span class="chem">A = int_a^b (4 - x^2 - e^{0.5x}) dx ≈ 6.7451...</span>, which rounds to <span class="chem">6.75</span> (3 s.f.).</p>
      solution: "<p>在 GDC 上解 <span class=\"chem\">4 - x^2 = e^{0.5x}</span> 得交點 <span class=\"chem\">a ≈ -1.90090</span> 與 <span class=\"chem\">b ≈ 1.40688</span>。在這兩者之間 <span class=\"chem\">4 - x^2 &gt;= e^{0.5x}</span>，故 <span class=\"chem\">A = int_a^b (4 - x^2 - e^{0.5x}) dx ≈ 6.7451...</span>，捨入為 <span class=\"chem\">6.75</span>（3 位有效數字）。</p>",
    },

    // ── t5-2-q017 · short · challenge · SL · SL 5.9 · 8 marks
    "t5-2-q017": {
      // EN: <p>A particle starts from rest at <span class="chem">t = 0</span> with initial displacement <span class="chem">s(0) = 2</span> <span class="unit">m</span> from an origin <span class="chem">O</span>, and moves along a straight line with acceleration <span class="chem">a(t) = 6t - 12</span> <span class="unit">m s-2</span> for <span class="chem">t &gt;= 0</span>.<br>(a) Find expressions for the velocity <span class="chem">v(t)</span> and the displacement <span class="chem">s(t)</span>. <strong>[4 marks]</strong><br>(b) Find the total distance travelled by the particle in the first <span class="chem">5</span> seconds (<span class="chem">0 &lt;= t &lt;= 5</span>). <strong>[4 marks]</strong></p>
      stem: "<p>質點在 <span class=\"chem\">t = 0</span> 時從靜止出發，相對於原點 <span class=\"chem\">O</span> 的初始位移為 <span class=\"chem\">s(0) = 2</span> <span class=\"unit\">m</span>，並以加速度 <span class=\"chem\">a(t) = 6t - 12</span> <span class=\"unit\">m s-2</span>（<span class=\"chem\">t &gt;= 0</span>）沿直線運動。<br>(a) 求 (Find) 速度 <span class=\"chem\">v(t)</span> 與位移 <span class=\"chem\">s(t)</span> 的表達式。<strong>[4 marks]</strong><br>(b) 求 (Find) 質點在首 <span class=\"chem\">5</span> 秒（<span class=\"chem\">0 &lt;= t &lt;= 5</span>）內所行的總路程。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: “starts from rest” and “initial displacement” are two boundary conditions, and “total distance” means you must find where the particle turns before using <span class="chem">int |v| dt</span>.
        "解碼：「從靜止出發」和「初始位移」是兩個邊界條件；「總路程」表示在使用 <span class=\"chem\">int |v| dt</span> 之前，必須先找出質點轉向的時刻。",
        // EN: “Starts from rest” means <span class="chem">v(0) = 0</span>; use this to find the first constant of integration, then use <span class="chem">s(0) = 2</span> for the second.
        "「從靜止出發」代表 <span class=\"chem\">v(0) = 0</span>；利用此條件求第一個積分常數，再用 <span class=\"chem\">s(0) = 2</span> 求第二個積分常數。",
        // EN: For part (b), solve <span class="chem">v(t) = 0</span> to find when the particle reverses direction before computing total distance.
        "對於 (b) 部，計算總路程前先解 <span class=\"chem\">v(t) = 0</span> 找出質點何時折返。",
      ],
      // EN: <p>(a) Integrating <span class="chem">a(t) = 6t - 12</span> gives <span class="chem">v(t) = 3t^2 - 12t + C_1</span>. Since <span class="chem">v(0) = 0</span>, <span class="chem">C_1 = 0</span>, so <span class="chem">v(t) = 3t^2 - 12t</span>. Integrating again gives <span class="chem">s(t) = t^3 - 6t^2 + C_2</span>. Since <span class="chem">s(0) = 2</span>, <span class="chem">C_2 = 2</span>, so <span class="chem">s(t) = t^3 - 6t^2 + 2</span>.<br>(b) Setting <span class="chem">v(t) = 3t(t - 4) = 0</span> gives <span class="chem">t = 0</span> and <span class="chem">t = 4</span> <span class="unit">s</span>. Evaluating position at the endpoints and turning time: <span class="chem">s(0) = 2</span>, <span class="chem">s(4) = 64 - 96 + 2 = -30</span>, and <span class="chem">s(5) = 125 - 150 + 2 = -23</span>. Therefore, total distance <span class="chem">d = |s(4) - s(0)| + |s(5) - s(4)| = |-32| + |7| = 39</span> <span class="unit">m</span>.</p>
      solution: "<p>(a) 對 <span class=\"chem\">a(t) = 6t - 12</span> 積分得 <span class=\"chem\">v(t) = 3t^2 - 12t + C_1</span>。因 <span class=\"chem\">v(0) = 0</span>，故 <span class=\"chem\">C_1 = 0</span>，即 <span class=\"chem\">v(t) = 3t^2 - 12t</span>。再積分得 <span class=\"chem\">s(t) = t^3 - 6t^2 + C_2</span>。因 <span class=\"chem\">s(0) = 2</span>，故 <span class=\"chem\">C_2 = 2</span>，即 <span class=\"chem\">s(t) = t^3 - 6t^2 + 2</span>。<br>(b) 令 <span class=\"chem\">v(t) = 3t(t - 4) = 0</span> 得 <span class=\"chem\">t = 0</span> 與 <span class=\"chem\">t = 4</span> <span class=\"unit\">s</span>。計算端點與轉向時刻的位置：<span class=\"chem\">s(0) = 2</span>、<span class=\"chem\">s(4) = 64 - 96 + 2 = -30</span> 及 <span class=\"chem\">s(5) = 125 - 150 + 2 = -23</span>。因此總路程 <span class=\"chem\">d = |s(4) - s(0)| + |s(5) - s(4)| = |-32| + |7| = 39</span> <span class=\"unit\">m</span>。</p>",
      // EN: <p>(a) <span class="chem">v(t) = 3t^2 - 12t</span> <span class="unit">m s-1</span>; <span class="chem">s(t) = t^3 - 6t^2 + 2</span> <span class="unit">m</span><br>(b) <span class="chem">39</span> <span class="unit">m</span></p>
      answer: "<p>(a) <span class=\"chem\">v(t) = 3t^2 - 12t</span> <span class=\"unit\">m s-1</span>；<span class=\"chem\">s(t) = t^3 - 6t^2 + 2</span> <span class=\"unit\">m</span><br>(b) <span class=\"chem\">39</span> <span class=\"unit\">m</span></p>",
      markscheme: [
        // EN: M1: Integrate <span class="chem">a(t)</span> and use <span class="chem">v(0) = 0</span> (“starts from rest”) to find the constant.
        "M1：對 <span class=\"chem\">a(t)</span> 積分並利用 <span class=\"chem\">v(0) = 0</span>（「從靜止出發」）求常數。",
        // EN: A1: <span class="chem">v(t) = 3t^2 - 12t</span>.
        "A1：<span class=\"chem\">v(t) = 3t^2 - 12t</span>。",
        // EN: M1: Integrate <span class="chem">v(t)</span> and use <span class="chem">s(0) = 2</span> to find the constant.
        "M1：對 <span class=\"chem\">v(t)</span> 積分並利用 <span class=\"chem\">s(0) = 2</span> 求常數。",
        // EN: A1: <span class="chem">s(t) = t^3 - 6t^2 + 2</span>.
        "A1：<span class=\"chem\">s(t) = t^3 - 6t^2 + 2</span>。",
        // EN: M1: Solve <span class="chem">v(t) = 3t(t - 4) = 0</span>.
        "M1：解 <span class=\"chem\">v(t) = 3t(t - 4) = 0</span>。",
        // EN: A1: The particle turns at <span class="chem">t = 4</span> <span class="unit">s</span>, which lies in <span class="chem">(0, 5)</span>.
        "A1：質點在 <span class=\"chem\">t = 4</span> <span class=\"unit\">s</span> 轉向，此時刻位於 <span class=\"chem\">(0, 5)</span> 內。",
        // EN: M1: Evaluate <span class="chem">s(0) = 2</span>, <span class="chem">s(4) = -30</span>, <span class="chem">s(5) = -23</span> (or split the integral at <span class="chem">t = 4</span>).
        "M1：計算 <span class=\"chem\">s(0) = 2</span>、<span class=\"chem\">s(4) = -30</span>、<span class=\"chem\">s(5) = -23</span>（或在 <span class=\"chem\">t = 4</span> 處分拆積分）。",
        // EN: A1: <span class="chem">d = |-30 - 2| + |-23 - (-30)| = 32 + 7 = 39</span> <span class="unit">m</span>.
        "A1：<span class=\"chem\">d = |-30 - 2| + |-23 - (-30)| = 32 + 7 = 39</span> <span class=\"unit\">m</span>。",
      ],
    },

  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('zh-Hant', 't5-2.q', {
  questions: {

    // ── t5-2-q018 · numeric · foundation · SL · SL 5.5 · 2 marks
    "t5-2-q018": {
      // EN: <p>Use your GDC to calculate <span class="chem">int_0^2 sqrt(1 + x^3) dx</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>利用 GDC 計算 (calculate) <span class=\"chem\">int_0^2 sqrt(1 + x^3) dx</span>。答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: <span class="chem">sqrt(1 + x^3)</span> has no antiderivative you can write down, so this is a job for the numerical integration command on your GDC (TI: fnInt; Casio: ∫dx; or the ∫ template).
        "<span class=\"chem\">sqrt(1 + x^3)</span> 沒有可以寫出的原函數，所以須使用 GDC 的數值積分指令（TI：fnInt；Casio：∫dx；或 ∫ 模板）。",
        // EN: Enter the integrand <span class="chem">sqrt(1 + x^3)</span> with lower limit <span class="chem">0</span> and upper limit <span class="chem">2</span>, then round the result to 3 s.f.
        "輸入被積函數 <span class=\"chem\">sqrt(1 + x^3)</span>，下限為 <span class=\"chem\">0</span>、上限為 <span class=\"chem\">2</span>，然後把結果捨入至 3 位有效數字。",
      ],
      // EN: <p>Using the GDC numerical integration command, <span class="chem">int_0^2 sqrt(1 + x^3) dx = 3.24130…</span>, so the answer is <span class="chem">3.24</span> (3 s.f.).</p>
      solution: "<p>使用 GDC 的數值積分指令，<span class=\"chem\">int_0^2 sqrt(1 + x^3) dx = 3.24130…</span>，故答案為 <span class=\"chem\">3.24</span>（3 位有效數字）。</p>",
    },

    // ── t5-2-q019 · numeric · exam · SL · SL 5.5, 5.11 · 5 marks
    "t5-2-q019": {
      // EN: <p>The curve <span class="chem">y = x^3 - 4x^2 + x + 3</span> crosses the positive <span class="chem">x</span>-axis at the points <span class="chem">A</span> and <span class="chem">B</span>, where <span class="chem">A</span> is to the left of <span class="chem">B</span>. Find the area of the region enclosed by the curve and the <span class="chem">x</span>-axis between <span class="chem">A</span> and <span class="chem">B</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>曲線 <span class=\"chem\">y = x^3 - 4x^2 + x + 3</span> 與正 <span class=\"chem\">x</span> 軸相交於點 <span class=\"chem\">A</span> 和 <span class=\"chem\">B</span>，其中 <span class=\"chem\">A</span> 在 <span class=\"chem\">B</span> 的左方。求 (Find) 曲線與 <span class=\"chem\">x</span> 軸在 <span class=\"chem\">A</span> 與 <span class=\"chem\">B</span> 之間所圍成區域的面積。答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: you need the two positive <span class="chem">x</span>-intercepts first (the cubic does not factorise nicely, so use the GDC root/zero tool), then an area. Check where the curve is between them: above or below the axis?
        "解碼：先要求出兩個正的 <span class=\"chem\">x</span> 截距（這個三次函數不易因式分解，所以用 GDC 的求根／零點功能），然後才求面積。檢查曲線在兩者之間的位置：在軸的上方還是下方？",
        // EN: The GDC gives <span class="chem">x_A ≈ 1.2391</span> and <span class="chem">x_B ≈ 3.4605</span>. Test a point such as <span class="chem">x = 2</span>: <span class="chem">y = -3 &lt; 0</span>, so the region lies <strong>below</strong> the axis.
        "GDC 給出 <span class=\"chem\">x_A ≈ 1.2391</span> 及 <span class=\"chem\">x_B ≈ 3.4605</span>。代入一點，例如 <span class=\"chem\">x = 2</span>：<span class=\"chem\">y = -3 &lt; 0</span>，所以區域位於軸的<strong>下方</strong>。",
        // EN: The definite integral between the roots is negative. The area is its absolute value: <span class="chem">A = |int_{x_A}^{x_B} (x^3 - 4x^2 + x + 3) dx|</span> (or integrate <span class="chem">|y|</span> directly).
        "兩根之間的定積分是負數。面積是它的絕對值：<span class=\"chem\">A = |int_{x_A}^{x_B} (x^3 - 4x^2 + x + 3) dx|</span>（或直接對 <span class=\"chem\">|y|</span> 積分）。",
      ],
      // EN: <p>Decode: area between two GDC roots, with the region below the axis. The GDC gives the positive roots <span class="chem">x_A = 1.23912…</span> and <span class="chem">x_B = 3.46050…</span> (the third root, <span class="chem">x ≈ -0.700</span>, is negative). Since <span class="chem">y(2) = -3 &lt; 0</span>, the curve is below the <span class="chem">x</span>-axis on <span class="chem">(x_A, x_B)</span>. Using stored roots, <span class="chem">int_{x_A}^{x_B} (x^3 - 4x^2 + x + 3) dx = -5.57107…</span>, so the area is <span class="chem">5.57</span> (3 s.f.). A negative answer can never be an area.</p>
      solution: "<p>解碼：兩個 GDC 根之間的面積，而區域位於軸的下方。GDC 給出正根 <span class=\"chem\">x_A = 1.23912…</span> 及 <span class=\"chem\">x_B = 3.46050…</span>（第三個根 <span class=\"chem\">x ≈ -0.700</span> 是負數）。由於 <span class=\"chem\">y(2) = -3 &lt; 0</span>，曲線在 <span class=\"chem\">(x_A, x_B)</span> 上位於 <span class=\"chem\">x</span> 軸下方。使用已儲存的根，<span class=\"chem\">int_{x_A}^{x_B} (x^3 - 4x^2 + x + 3) dx = -5.57107…</span>，故面積為 <span class=\"chem\">5.57</span>（3 位有效數字）。負數答案永遠不可能是面積。</p>",
    },

    // ── t5-2-q020 · numeric · exam · SL · SL 5.5, 5.11 · 5 marks
    "t5-2-q020": {
      // EN: <p>Find the area of the finite region enclosed between the curves <span class="chem">y = 2 cos x</span> and <span class="chem">y = x^2 - 1</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>求 (Find) 曲線 <span class=\"chem\">y = 2 cos x</span> 與 <span class=\"chem\">y = x^2 - 1</span> 之間所圍成有限區域的面積。答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Put your GDC in <strong>radian mode</strong>, graph both curves and use the intersect tool to find the two intersection points.
        "把 GDC 設定為<strong>弧度模式</strong>，繪出兩條曲線，並用求交點功能找出兩個交點。",
        // EN: The intersections are at <span class="chem">x ≈ ±1.2654</span>. At <span class="chem">x = 0</span>, <span class="chem">2 cos 0 = 2 &gt; -1</span>, so <span class="chem">y = 2 cos x</span> is the upper curve.
        "交點位於 <span class=\"chem\">x ≈ ±1.2654</span>。在 <span class=\"chem\">x = 0</span> 處，<span class=\"chem\">2 cos 0 = 2 &gt; -1</span>，所以 <span class=\"chem\">y = 2 cos x</span> 是上方的曲線。",
        // EN: Evaluate <span class="chem">int_{-1.2654}^{1.2654} (2 cos x - x^2 + 1) dx</span> using the stored intersection values.
        "使用已儲存的交點數值計算 <span class=\"chem\">int_{-1.2654}^{1.2654} (2 cos x - x^2 + 1) dx</span>。",
      ],
      // EN: <p>Solving <span class="chem">2 cos x = x^2 - 1</span> on a GDC (radians) gives <span class="chem">x = ±1.26542…</span>. On this interval <span class="chem">2 cos x &gt;= x^2 - 1</span>, so <span class="chem">A = int_{-1.26542}^{1.26542} (2 cos x - (x^2 - 1)) dx = 4.99490…</span>, which is <span class="chem">4.99</span> (3 s.f.). Part of the lower curve is below the <span class="chem">x</span>-axis, but “upper minus lower” already accounts for that.</p>
      solution: "<p>在 GDC（弧度）上解 <span class=\"chem\">2 cos x = x^2 - 1</span> 得 <span class=\"chem\">x = ±1.26542…</span>。在此區間上 <span class=\"chem\">2 cos x &gt;= x^2 - 1</span>，故 <span class=\"chem\">A = int_{-1.26542}^{1.26542} (2 cos x - (x^2 - 1)) dx = 4.99490…</span>，即 <span class=\"chem\">4.99</span>（3 位有效數字）。下方曲線有一部分位於 <span class=\"chem\">x</span> 軸下方，但「上方減下方」已經把這一點考慮在內。</p>",
    },

    // ── t5-2-q021 · numeric · exam · SL · SL 5.5, 5.11 · 5 marks
    "t5-2-q021": {
      // EN: <p>Let <span class="chem">f(x) = 4 sin x - x</span> for <span class="chem">0 &lt;= x &lt;= 4</span>. Find the total area of the regions enclosed by the graph of <span class="chem">f</span>, the <span class="chem">x</span>-axis and the line <span class="chem">x = 4</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = 4 sin x - x</span>，其中 <span class=\"chem\">0 &lt;= x &lt;= 4</span>。求 (Find) <span class=\"chem\">f</span> 的圖像、<span class=\"chem\">x</span> 軸與直線 <span class=\"chem\">x = 4</span> 所圍成各區域的總面積。答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: “total area of the regions” means every region counts as positive. Sketch <span class="chem">f</span> on your GDC (radians) and look for where it crosses the axis.
        "解碼：「各區域的總面積」表示每個區域都按正值計算。在 GDC（弧度）上繪出 <span class=\"chem\">f</span> 的草圖，找出它與軸相交之處。",
        // EN: The graph crosses the axis at <span class="chem">x = 0</span> and at <span class="chem">x ≈ 2.4746</span>; it is above the axis before that and below it after.
        "圖像在 <span class=\"chem\">x = 0</span> 及 <span class=\"chem\">x ≈ 2.4746</span> 處與軸相交；在此之前位於軸上方，之後位於軸下方。",
        // EN: Either add <span class="chem">int_0^{2.4746} f(x) dx</span> and <span class="chem">|int_{2.4746}^4 f(x) dx|</span>, or enter <span class="chem">int_0^4 |f(x)| dx</span> directly. Note that <span class="chem">int_0^4 f(x) dx ≈ -1.39</span> is <strong>not</strong> the area.
        "可以把 <span class=\"chem\">int_0^{2.4746} f(x) dx</span> 與 <span class=\"chem\">|int_{2.4746}^4 f(x) dx|</span> 相加，或直接輸入 <span class=\"chem\">int_0^4 |f(x)| dx</span>。注意 <span class=\"chem\">int_0^4 f(x) dx ≈ -1.39</span> <strong>不是</strong>面積。",
      ],
      // EN: <p>The root of <span class="chem">4 sin x = x</span> in <span class="chem">(0, 4)</span> is <span class="chem">c = 2.47457…</span>. Then <span class="chem">int_0^c f(x) dx = 4.08092…</span> (above the axis) and <span class="chem">int_c^4 f(x) dx = -5.46634…</span> (below the axis). Total area <span class="chem">= 4.08092 + 5.46634 = 9.54726…</span>, i.e. <span class="chem">int_0^4 |f(x)| dx = 9.55</span> (3 s.f.). The signed integral, <span class="chem">-1.39</span>, lets the two regions cancel and is not an area.</p>
      solution: "<p><span class=\"chem\">4 sin x = x</span> 在 <span class=\"chem\">(0, 4)</span> 內的根為 <span class=\"chem\">c = 2.47457…</span>。於是 <span class=\"chem\">int_0^c f(x) dx = 4.08092…</span>（在軸上方）及 <span class=\"chem\">int_c^4 f(x) dx = -5.46634…</span>（在軸下方）。總面積 <span class=\"chem\">= 4.08092 + 5.46634 = 9.54726…</span>，即 <span class=\"chem\">int_0^4 |f(x)| dx = 9.55</span>（3 位有效數字）。帶符號的積分 <span class=\"chem\">-1.39</span> 讓兩個區域互相抵消，所以不是面積。</p>",
    },

    // ── t5-2-q022 · numeric · challenge · SL · SL 5.5, 5.11 · 6 marks
    "t5-2-q022": {
      // EN: <p>A landscape architect draws a pond on a plan where 1 unit represents 1 metre. The pond is the region enclosed by the curves <span class="chem">y = ln x</span> and <span class="chem">y = (x - 2)^2</span>. A straight wooden bridge is built along the line <span class="chem">x = 2</span>, which splits the pond into two parts. Find the surface area of the <strong>larger</strong> part of the pond, in <span class="unit">m2</span>, correct to 3 significant figures.</p>
      stem: "<p>一位園景設計師在平面圖上繪畫一個池塘，圖中 1 單位代表 1 米。池塘是曲線 <span class=\"chem\">y = ln x</span> 與 <span class=\"chem\">y = (x - 2)^2</span> 所圍成的區域。沿直線 <span class=\"chem\">x = 2</span> 建造了一條筆直的木橋，把池塘分成兩部分。求 (Find) 池塘<strong>較大</strong>部分的水面面積，以 <span class=\"unit\">m2</span> 為單位，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: this is an area between two curves, but you are asked for only one of the two pieces on either side of <span class="chem">x = 2</span>. You need the intersection points, the area on each side of <span class="chem">x = 2</span>, and then the bigger one.
        "解碼：這是兩曲線之間的面積，但題目只要求 <span class=\"chem\">x = 2</span> 兩側兩部分中的其中一部分。你需要交點、<span class=\"chem\">x = 2</span> 每一側的面積，然後取較大者。",
        // EN: The GDC intersections are <span class="chem">x = a ≈ 1.4124</span> and <span class="chem">x = b ≈ 3.0571</span>. Between them, <span class="chem">ln x</span> is the upper curve (test <span class="chem">x = 2</span>: <span class="chem">ln 2 &gt; 0</span>).
        "GDC 求得交點為 <span class=\"chem\">x = a ≈ 1.4124</span> 及 <span class=\"chem\">x = b ≈ 3.0571</span>。在兩者之間，<span class=\"chem\">ln x</span> 是上方的曲線（以 <span class=\"chem\">x = 2</span> 檢驗：<span class=\"chem\">ln 2 &gt; 0</span>）。",
        // EN: Compute <span class="chem">int_a^2 (ln x - (x - 2)^2) dx</span> and <span class="chem">int_2^b (ln x - (x - 2)^2) dx</span>, and compare.
        "分別計算 <span class=\"chem\">int_a^2 (ln x - (x - 2)^2) dx</span> 與 <span class=\"chem\">int_2^b (ln x - (x - 2)^2) dx</span>，並加以比較。",
      ],
      // EN: <p>Decode: the bridge <span class="chem">x = 2</span> is a vertical cut, so the two parts are the areas between the curves on <span class="chem">[a, 2]</span> and <span class="chem">[2, b]</span>. The GDC gives <span class="chem">a = 1.41239…</span> and <span class="chem">b = 3.05710…</span>, with <span class="chem">ln x &gt;= (x - 2)^2</span> between them. Left part: <span class="chem">int_a^2 (ln x - (x - 2)^2) dx = 0.24338…</span>. Right part: <span class="chem">int_2^b (ln x - (x - 2)^2) dx = 0.57906…</span>. The larger part has area <span class="chem">0.579</span> <span class="unit">m2</span> (3 s.f.). (Check: the whole pond is <span class="chem">0.822</span> <span class="unit">m2</span>.)</p>
      solution: "<p>解碼：木橋 <span class=\"chem\">x = 2</span> 是一條鉛垂的分割線，所以兩部分分別是在 <span class=\"chem\">[a, 2]</span> 及 <span class=\"chem\">[2, b]</span> 上兩曲線之間的面積。GDC 給出 <span class=\"chem\">a = 1.41239…</span> 及 <span class=\"chem\">b = 3.05710…</span>，且兩者之間 <span class=\"chem\">ln x &gt;= (x - 2)^2</span>。左部分：<span class=\"chem\">int_a^2 (ln x - (x - 2)^2) dx = 0.24338…</span>。右部分：<span class=\"chem\">int_2^b (ln x - (x - 2)^2) dx = 0.57906…</span>。較大部分的面積為 <span class=\"chem\">0.579</span> <span class=\"unit\">m2</span>（3 位有效數字）。（驗算：整個池塘為 <span class=\"chem\">0.822</span> <span class=\"unit\">m2</span>。）</p>",
    },

    // ── t5-2-q023 · short · exam · SL · SL 5.5, 5.8, 5.11 · 9 marks
    "t5-2-q023": {
      // EN: <p>Let <span class="chem">f(x) = 8x e^{-x/2}</span> and <span class="chem">g(x) = x</span>, for <span class="chem">x &gt;= 0</span>.<br>(a) Find the coordinates of the maximum point on the graph of <span class="chem">f</span>. <strong>[2 marks]</strong><br>(b) Find the <span class="chem">x</span>-coordinates of the points where the graphs of <span class="chem">f</span> and <span class="chem">g</span> intersect. <strong>[2 marks]</strong><br>(c) Find the area of the region enclosed between the graphs of <span class="chem">f</span> and <span class="chem">g</span>. <strong>[3 marks]</strong><br>(d) Find the area of the region enclosed by the graph of <span class="chem">f</span>, the <span class="chem">x</span>-axis and the line <span class="chem">x = 6</span>. <strong>[2 marks]</strong><br>Give non-exact answers correct to 3 significant figures.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = 8x e^{-x/2}</span> 及 <span class=\"chem\">g(x) = x</span>，其中 <span class=\"chem\">x &gt;= 0</span>。<br>(a) 求 (Find) <span class=\"chem\">f</span> 的圖像上極大點的坐標。<strong>[2 marks]</strong><br>(b) 求 (Find) <span class=\"chem\">f</span> 與 <span class=\"chem\">g</span> 的圖像交點的 <span class=\"chem\">x</span> 坐標。<strong>[2 marks]</strong><br>(c) 求 (Find) <span class=\"chem\">f</span> 與 <span class=\"chem\">g</span> 的圖像之間所圍成區域的面積。<strong>[3 marks]</strong><br>(d) 求 (Find) <span class=\"chem\">f</span> 的圖像、<span class=\"chem\">x</span> 軸與直線 <span class=\"chem\">x = 6</span> 所圍成區域的面積。<strong>[2 marks]</strong><br>非準確值的答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: (a) and (b) are GDC graph-reading tasks; (c) is “upper minus lower” between the intersections from (b); (d) is a plain area under <span class="chem">f</span>, because <span class="chem">f(x) &gt;= 0</span> for <span class="chem">x &gt;= 0</span>.
        "解碼：(a) 和 (b) 是 GDC 讀圖題；(c) 是在 (b) 所得交點之間計算「上方減下方」；(d) 是 <span class=\"chem\">f</span> 下方的一般面積，因為當 <span class=\"chem\">x &gt;= 0</span> 時 <span class=\"chem\">f(x) &gt;= 0</span>。",
        // EN: For (b), the graphs meet at the origin and once more. Store the second intersection in your GDC so you can use it as a limit in (c).
        "在 (b) 中，兩圖像在原點相交，另外再相交一次。把第二個交點儲存在 GDC 中，以便在 (c) 中用作積分限。",
        // EN: Neither <span class="chem">int x e^{-x/2} dx</span> (integration by parts is AHL) nor the area needs to be done by hand here: use the GDC numerical integration.
        "這裏無論是 <span class=\"chem\">int x e^{-x/2} dx</span>（分部積分法屬 AHL）還是面積，都不必用人手計算：使用 GDC 的數值積分即可。",
      ],
      // EN: <p>(a) <span class="chem">f'(x) = 8e^{-x/2} - 4x e^{-x/2} = 8e^{-x/2}(1 - x/2)</span>, which is zero at <span class="chem">x = 2</span>; <span class="chem">f(2) = 16e^{-1} = 5.886…</span>. Maximum <span class="chem">(2, 5.89)</span>.<br>(b) <span class="chem">8x e^{-x/2} = x</span> gives <span class="chem">x = 0</span> or <span class="chem">e^{-x/2} = 1/8</span>, i.e. <span class="chem">x = 2 ln 8 = 6 ln 2 = 4.1588…</span>.<br>(c) For <span class="chem">0 &lt; x &lt; 6 ln 2</span>, <span class="chem">f(x) &gt; g(x)</span> (e.g. <span class="chem">f(2) = 5.89 &gt; 2</span>). GDC: <span class="chem">int_0^{6 ln 2} (8x e^{-x/2} - x) dx = 11.034…</span>, so the area is <span class="chem">11.0</span>.<br>(d) <span class="chem">f(x) &gt;= 0</span> on <span class="chem">[0, 6]</span>, so the area is <span class="chem">int_0^6 8x e^{-x/2} dx = 25.627… ≈ 25.6</span>.</p>
      solution: "<p>(a) <span class=\"chem\">f'(x) = 8e^{-x/2} - 4x e^{-x/2} = 8e^{-x/2}(1 - x/2)</span>，它在 <span class=\"chem\">x = 2</span> 處為零；<span class=\"chem\">f(2) = 16e^{-1} = 5.886…</span>。極大點 <span class=\"chem\">(2, 5.89)</span>。<br>(b) <span class=\"chem\">8x e^{-x/2} = x</span> 得 <span class=\"chem\">x = 0</span> 或 <span class=\"chem\">e^{-x/2} = 1/8</span>，即 <span class=\"chem\">x = 2 ln 8 = 6 ln 2 = 4.1588…</span>。<br>(c) 當 <span class=\"chem\">0 &lt; x &lt; 6 ln 2</span> 時，<span class=\"chem\">f(x) &gt; g(x)</span>（例如 <span class=\"chem\">f(2) = 5.89 &gt; 2</span>）。GDC：<span class=\"chem\">int_0^{6 ln 2} (8x e^{-x/2} - x) dx = 11.034…</span>，故面積為 <span class=\"chem\">11.0</span>。<br>(d) 在 <span class=\"chem\">[0, 6]</span> 上 <span class=\"chem\">f(x) &gt;= 0</span>，故面積為 <span class=\"chem\">int_0^6 8x e^{-x/2} dx = 25.627… ≈ 25.6</span>。</p>",
      // EN: <p>(a) <span class="chem">(2, 5.89)</span> (exactly <span class="chem">(2, 16/e)</span>)<br>(b) <span class="chem">x = 0</span> and <span class="chem">x = 4.16</span> (exactly <span class="chem">6 ln 2</span>)<br>(c) <span class="chem">11.0</span><br>(d) <span class="chem">25.6</span></p>
      answer: "<p>(a) <span class=\"chem\">(2, 5.89)</span>（準確值為 <span class=\"chem\">(2, 16/e)</span>）<br>(b) <span class=\"chem\">x = 0</span> 及 <span class=\"chem\">x = 4.16</span>（準確值為 <span class=\"chem\">6 ln 2</span>）<br>(c) <span class=\"chem\">11.0</span><br>(d) <span class=\"chem\">25.6</span></p>",
      markscheme: [
        // EN: M1: Uses the GDC maximum tool (or solves <span class="chem">f'(x) = 8e^{-x/2}(1 - x/2) = 0</span>).
        "M1：使用 GDC 的極大值功能（或解 <span class=\"chem\">f'(x) = 8e^{-x/2}(1 - x/2) = 0</span>）。",
        // EN: A1: <span class="chem">(2, 5.89)</span>.
        "A1：<span class=\"chem\">(2, 5.89)</span>。",
        // EN: M1: Solves <span class="chem">8x e^{-x/2} = x</span> (graphically, or <span class="chem">x = 0</span> or <span class="chem">e^{-x/2} = 1/8</span>).
        "M1：解 <span class=\"chem\">8x e^{-x/2} = x</span>（用圖像法，或 <span class=\"chem\">x = 0</span> 或 <span class=\"chem\">e^{-x/2} = 1/8</span>）。",
        // EN: A1: <span class="chem">x = 0</span> and <span class="chem">x = 4.16</span> (<span class="chem">6 ln 2</span>).
        "A1：<span class=\"chem\">x = 0</span> 及 <span class=\"chem\">x = 4.16</span>（<span class=\"chem\">6 ln 2</span>）。",
        // EN: M1: Sets up an integral of (upper − lower) between the intersections.
        "M1：在兩交點之間列出（上方 − 下方）的積分。",
        // EN: A1: <span class="chem">int_0^{4.1589} (8x e^{-x/2} - x) dx</span>, with <span class="chem">f</span> above <span class="chem">g</span>.
        "A1：<span class=\"chem\">int_0^{4.1589} (8x e^{-x/2} - x) dx</span>，其中 <span class=\"chem\">f</span> 在 <span class=\"chem\">g</span> 上方。",
        // EN: A1: Area <span class="chem">= 11.0</span> (11.034…).
        "A1：面積 <span class=\"chem\">= 11.0</span>（11.034…）。",
        // EN: M1: <span class="chem">int_0^6 8x e^{-x/2} dx</span> (f ≥ 0 on [0, 6]).
        "M1：<span class=\"chem\">int_0^6 8x e^{-x/2} dx</span>（在 [0, 6] 上 f ≥ 0）。",
        // EN: A1: <span class="chem">25.6</span> (25.627…).
        "A1：<span class=\"chem\">25.6</span>（25.627…）。",
      ],
    },

    // ── t5-2-q024 · numeric · exam · SL · SL 5.5, 5.9 · 5 marks
    "t5-2-q024": {
      // EN: <p>A particle moves in a straight line with velocity <span class="chem">v(t) = t^2 e^{-0.5t} - 1</span> <span class="unit">m s-1</span>, for <span class="chem">0 &lt;= t &lt;= 8</span>, where <span class="chem">t</span> is in seconds. Find the total distance travelled by the particle in these 8 seconds. Give your answer correct to 3 significant figures.</p>
      stem: "<p>質點沿直線運動，速度為 <span class=\"chem\">v(t) = t^2 e^{-0.5t} - 1</span> <span class=\"unit\">m s-1</span>，其中 <span class=\"chem\">0 &lt;= t &lt;= 8</span>，<span class=\"chem\">t</span> 以秒為單位。求 (Find) 質點在這 8 秒內所行的總路程。答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Total distance is <span class="chem">int_0^8 |v(t)| dt</span>. The displacement <span class="chem">int_0^8 v(t) dt</span> is smaller, because the particle moves backwards at first.
        "總路程是 <span class=\"chem\">int_0^8 |v(t)| dt</span>。位移 <span class=\"chem\">int_0^8 v(t) dt</span> 較小，因為質點起初向後移動。",
        // EN: Graph <span class="chem">v</span>: it starts at <span class="chem">v(0) = -1</span> and becomes positive at <span class="chem">t ≈ 1.430</span>, staying positive up to <span class="chem">t = 8</span>.
        "繪出 <span class=\"chem\">v</span> 的圖像：它從 <span class=\"chem\">v(0) = -1</span> 開始，在 <span class=\"chem\">t ≈ 1.430</span> 變為正數，並一直保持正數至 <span class=\"chem\">t = 8</span>。",
        // EN: Enter <span class="chem">int_0^8 |t^2 e^{-0.5t} - 1| dt</span> on the GDC, or add <span class="chem">|int_0^{1.430} v dt|</span> and <span class="chem">int_{1.430}^8 v dt</span>.
        "在 GDC 上輸入 <span class=\"chem\">int_0^8 |t^2 e^{-0.5t} - 1| dt</span>，或把 <span class=\"chem\">|int_0^{1.430} v dt|</span> 與 <span class=\"chem\">int_{1.430}^8 v dt</span> 相加。",
      ],
      // EN: <p>The velocity is negative for <span class="chem">0 &lt;= t &lt; 1.42961…</span> and positive after that (check <span class="chem">v(8) = 64e^{-4} - 1 ≈ 0.172 &gt; 0</span>). Total distance <span class="chem">= int_0^8 |v(t)| dt = 0.85413… + 5.04447… = 5.89860…</span>, so <span class="chem">5.90</span> <span class="unit">m</span> (3 s.f.). For comparison, the displacement is only <span class="chem">int_0^8 v(t) dt ≈ 4.19</span> <span class="unit">m</span>.</p>
      solution: "<p>當 <span class=\"chem\">0 &lt;= t &lt; 1.42961…</span> 時速度為負，之後為正（驗證 <span class=\"chem\">v(8) = 64e^{-4} - 1 ≈ 0.172 &gt; 0</span>）。總路程 <span class=\"chem\">= int_0^8 |v(t)| dt = 0.85413… + 5.04447… = 5.89860…</span>，故 <span class=\"chem\">5.90</span> <span class=\"unit\">m</span>（3 位有效數字）。作為比較，位移只有 <span class=\"chem\">int_0^8 v(t) dt ≈ 4.19</span> <span class=\"unit\">m</span>。</p>",
    },

    // ── t5-2-q025 · numeric · exam · SL · SL 5.5, 5.9 · 4 marks
    "t5-2-q025": {
      // EN: <p>A particle moves along a straight line so that its velocity is <span class="chem">v(t) = 6 cos(t^2 / 5)</span> <span class="unit">m s-1</span>, for <span class="chem">0 &lt;= t &lt;= 5</span> seconds. When <span class="chem">t = 0</span>, the particle is <span class="chem">1</span> <span class="unit">m</span> to the right of a fixed point <span class="chem">O</span> (so <span class="chem">s(0) = 1</span>). Find the displacement <span class="chem">s(5)</span> of the particle from <span class="chem">O</span> when <span class="chem">t = 5</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>質點沿直線運動，其速度為 <span class=\"chem\">v(t) = 6 cos(t^2 / 5)</span> <span class=\"unit\">m s-1</span>，其中 <span class=\"chem\">0 &lt;= t &lt;= 5</span> 秒。當 <span class=\"chem\">t = 0</span> 時，質點位於定點 <span class=\"chem\">O</span> 右方 <span class=\"chem\">1</span> <span class=\"unit\">m</span> 處（即 <span class=\"chem\">s(0) = 1</span>）。求 (Find) 當 <span class=\"chem\">t = 5</span> 時質點相對於 <span class=\"chem\">O</span> 的位移 <span class=\"chem\">s(5)</span>。答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: you cannot integrate <span class="chem">cos(t^2/5)</span> by hand, but you do not need <span class="chem">s(t)</span> as a formula: <span class="chem">s(5) = s(0) + int_0^5 v(t) dt</span>.
        "解碼：你不能用人手對 <span class=\"chem\">cos(t^2/5)</span> 積分，但你不需要 <span class=\"chem\">s(t)</span> 的公式：<span class=\"chem\">s(5) = s(0) + int_0^5 v(t) dt</span>。",
        // EN: Use the GDC (radians) for <span class="chem">int_0^5 6 cos(t^2 / 5) dt</span>, then add the starting position <span class="chem">1</span>.
        "用 GDC（弧度）計算 <span class=\"chem\">int_0^5 6 cos(t^2 / 5) dt</span>，然後加上起始位置 <span class=\"chem\">1</span>。",
      ],
      // EN: <p>By the fundamental theorem, <span class="chem">s(5) - s(0) = int_0^5 v(t) dt</span>. The GDC (radians) gives <span class="chem">int_0^5 6 cos(t^2 / 5) dt = 5.52298…</span>. So <span class="chem">s(5) = 1 + 5.52298… = 6.52298…</span>, i.e. <span class="chem">6.52</span> <span class="unit">m</span> (3 s.f.). The velocity changes sign twice in <span class="chem">[0, 5]</span>, but that only matters for distance, not for displacement.</p>
      solution: "<p>根據微積分基本定理，<span class=\"chem\">s(5) - s(0) = int_0^5 v(t) dt</span>。GDC（弧度）給出 <span class=\"chem\">int_0^5 6 cos(t^2 / 5) dt = 5.52298…</span>。故 <span class=\"chem\">s(5) = 1 + 5.52298… = 6.52298…</span>，即 <span class=\"chem\">6.52</span> <span class=\"unit\">m</span>（3 位有效數字）。速度在 <span class=\"chem\">[0, 5]</span> 內改變符號兩次，但這只影響路程，不影響位移。</p>",
    },

    // ── t5-2-q026 · numeric · exam · SL · SL 5.9 · 5 marks
    "t5-2-q026": {
      // EN: <p>A particle moves in a straight line with velocity <span class="chem">v(t) = 3 - t + 2 sin(1.5t)</span> <span class="unit">m s-1</span>, for <span class="chem">0 &lt;= t &lt;= 8</span> seconds. Find the acceleration of the particle at the instant when it first changes direction. Give your answer correct to 3 significant figures.</p>
      stem: "<p>質點沿直線運動，速度為 <span class=\"chem\">v(t) = 3 - t + 2 sin(1.5t)</span> <span class=\"unit\">m s-1</span>，其中 <span class=\"chem\">0 &lt;= t &lt;= 8</span> 秒。求 (Find) 質點第一次改變方向那一瞬間的加速度。答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: “changes direction” means <span class="chem">v(t) = 0</span> <strong>and</strong> <span class="chem">v</span> changes sign there. Find the first such time, then evaluate <span class="chem">a(t) = v'(t)</span> at it.
        "解碼：「改變方向」表示 <span class=\"chem\">v(t) = 0</span>，<strong>而且</strong> <span class=\"chem\">v</span> 在該處改變符號。找出第一個這樣的時刻，然後計算該時刻的 <span class=\"chem\">a(t) = v'(t)</span>。",
        // EN: The GDC zero of <span class="chem">v</span> is <span class="chem">t ≈ 2.3242</span>, and the graph of <span class="chem">v</span> crosses (not just touches) the axis there.
        "<span class=\"chem\">v</span> 的 GDC 零點是 <span class=\"chem\">t ≈ 2.3242</span>，而 <span class=\"chem\">v</span> 的圖像在該處穿過（而非僅接觸）軸。",
        // EN: Differentiate: <span class="chem">a(t) = -1 + 3 cos(1.5t)</span> (or use the GDC derivative at that point).
        "求導：<span class=\"chem\">a(t) = -1 + 3 cos(1.5t)</span>（或在該點使用 GDC 的導數功能）。",
      ],
      // EN: <p>The only zero of <span class="chem">v</span> in <span class="chem">[0, 8]</span> is <span class="chem">t = 2.32418…</span> (radians), and <span class="chem">v</span> goes from positive to negative there, so the particle changes direction. <span class="chem">a(t) = v'(t) = -1 + 2(1.5) cos(1.5t) = -1 + 3 cos(1.5t)</span>. So <span class="chem">a(2.32418…) = -3.82354…</span>, i.e. <span class="chem">-3.82</span> <span class="unit">m s-2</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">v</span> 在 <span class=\"chem\">[0, 8]</span> 內唯一的零點是 <span class=\"chem\">t = 2.32418…</span>（弧度），而 <span class=\"chem\">v</span> 在該處由正變負，所以質點改變方向。<span class=\"chem\">a(t) = v'(t) = -1 + 2(1.5) cos(1.5t) = -1 + 3 cos(1.5t)</span>。故 <span class=\"chem\">a(2.32418…) = -3.82354…</span>，即 <span class=\"chem\">-3.82</span> <span class=\"unit\">m s-2</span>（3 位有效數字）。</p>",
    },

    // ── t5-2-q027 · short · exam · SL · SL 5.5, 5.9 · 11 marks
    "t5-2-q027": {
      // EN: <p>A toy car moves along a straight track. Its velocity is <span class="chem">v(t) = 10t e^{-0.5t} - 2</span> <span class="unit">m s-1</span>, for <span class="chem">0 &lt;= t &lt;= 10</span>, where <span class="chem">t</span> is in seconds.<br>(a) Write down the initial velocity of the car. <strong>[1 mark]</strong><br>(b) Find the values of <span class="chem">t</span> for which the car is at rest. <strong>[2 marks]</strong><br>(c) Find the maximum speed of the car. <strong>[2 marks]</strong><br>(d) Find the displacement of the car from its starting point when <span class="chem">t = 10</span>. <strong>[2 marks]</strong><br>(e) Find the total distance travelled by the car for <span class="chem">0 &lt;= t &lt;= 10</span>. <strong>[2 marks]</strong><br>(f) Find the acceleration of the car when <span class="chem">t = 1</span>. <strong>[2 marks]</strong><br>Give non-exact answers correct to 3 significant figures.</p>
      stem: "<p>一輛玩具車沿直線軌道移動。其速度為 <span class=\"chem\">v(t) = 10t e^{-0.5t} - 2</span> <span class=\"unit\">m s-1</span>，其中 <span class=\"chem\">0 &lt;= t &lt;= 10</span>，<span class=\"chem\">t</span> 以秒為單位。<br>(a) 寫出 (Write down) 車的初速度。<strong>[1 mark]</strong><br>(b) 求 (Find) 車處於靜止時 <span class=\"chem\">t</span> 的值。<strong>[2 marks]</strong><br>(c) 求 (Find) 車的最大速率。<strong>[2 marks]</strong><br>(d) 求 (Find) 當 <span class=\"chem\">t = 10</span> 時車相對於起點的位移。<strong>[2 marks]</strong><br>(e) 求 (Find) 在 <span class=\"chem\">0 &lt;= t &lt;= 10</span> 期間車所行的總路程。<strong>[2 marks]</strong><br>(f) 求 (Find) 當 <span class=\"chem\">t = 1</span> 時車的加速度。<strong>[2 marks]</strong><br>非準確值的答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: “at rest” is <span class="chem">v = 0</span>; “speed” is <span class="chem">|v|</span>, so a large negative velocity would also count; “displacement” is <span class="chem">int v dt</span> but “total distance” is <span class="chem">int |v| dt</span>.
        "解碼：「靜止」即 <span class=\"chem\">v = 0</span>；「速率」是 <span class=\"chem\">|v|</span>，所以很大的負速度也算；「位移」是 <span class=\"chem\">int v dt</span>，但「總路程」是 <span class=\"chem\">int |v| dt</span>。",
        // EN: Graph <span class="chem">v</span> on <span class="chem">[0, 10]</span>: it is negative at both ends and has one peak. Check the endpoint values before you claim a maximum speed.
        "在 <span class=\"chem\">[0, 10]</span> 上繪出 <span class=\"chem\">v</span> 的圖像：它在兩端都是負數，並有一個峰。在斷定最大速率之前，先檢查端點的值。",
        // EN: For (f), <span class="chem">a = dv/dt</span>; use the product rule on <span class="chem">10t e^{-0.5t}</span> or the GDC derivative command.
        "對於 (f)，<span class=\"chem\">a = dv/dt</span>；對 <span class=\"chem\">10t e^{-0.5t}</span> 使用積法則，或使用 GDC 的導數指令。",
      ],
      // EN: <p>(a) <span class="chem">v(0) = 0 - 2 = -2</span> <span class="unit">m s-1</span>.<br>(b) GDC zeros of <span class="chem">v</span>: <span class="chem">t = 0.22366…</span> and <span class="chem">t = 7.15430…</span>.<br>(c) <span class="chem">v'(t) = 10e^{-0.5t}(1 - 0.5t) = 0</span> at <span class="chem">t = 2</span>, where <span class="chem">v(2) = 20e^{-1} - 2 = 5.3576…</span>. At the ends <span class="chem">|v(0)| = 2</span> and <span class="chem">|v(10)| = |100e^{-5} - 2| = 1.326…</span>, so the maximum speed is <span class="chem">5.36</span> <span class="unit">m s-1</span>.<br>(d) <span class="chem">int_0^{10} v(t) dt = 18.3829…</span>, so <span class="chem">18.4</span> <span class="unit">m</span>.<br>(e) <span class="chem">int_0^{10} |v(t)| dt = 23.1937…</span>, so <span class="chem">23.2</span> <span class="unit">m</span>. It is larger than (d) because the car moves backwards for <span class="chem">t &lt; 0.224</span> and for <span class="chem">t &gt; 7.15</span>.<br>(f) <span class="chem">a(1) = 10e^{-0.5} - 5e^{-0.5} = 5e^{-0.5} = 3.0327…</span>, so <span class="chem">3.03</span> <span class="unit">m s-2</span>.</p>
      solution: "<p>(a) <span class=\"chem\">v(0) = 0 - 2 = -2</span> <span class=\"unit\">m s-1</span>。<br>(b) <span class=\"chem\">v</span> 的 GDC 零點：<span class=\"chem\">t = 0.22366…</span> 及 <span class=\"chem\">t = 7.15430…</span>。<br>(c) 在 <span class=\"chem\">t = 2</span> 處 <span class=\"chem\">v'(t) = 10e^{-0.5t}(1 - 0.5t) = 0</span>，其中 <span class=\"chem\">v(2) = 20e^{-1} - 2 = 5.3576…</span>。在兩端 <span class=\"chem\">|v(0)| = 2</span> 及 <span class=\"chem\">|v(10)| = |100e^{-5} - 2| = 1.326…</span>，所以最大速率為 <span class=\"chem\">5.36</span> <span class=\"unit\">m s-1</span>。<br>(d) <span class=\"chem\">int_0^{10} v(t) dt = 18.3829…</span>，故 <span class=\"chem\">18.4</span> <span class=\"unit\">m</span>。<br>(e) <span class=\"chem\">int_0^{10} |v(t)| dt = 23.1937…</span>，故 <span class=\"chem\">23.2</span> <span class=\"unit\">m</span>。它比 (d) 大，因為車在 <span class=\"chem\">t &lt; 0.224</span> 及 <span class=\"chem\">t &gt; 7.15</span> 期間向後移動。<br>(f) <span class=\"chem\">a(1) = 10e^{-0.5} - 5e^{-0.5} = 5e^{-0.5} = 3.0327…</span>，故 <span class=\"chem\">3.03</span> <span class=\"unit\">m s-2</span>。</p>",
      // EN: <p>(a) <span class="chem">-2</span> <span class="unit">m s-1</span><br>(b) <span class="chem">t = 0.224</span> and <span class="chem">t = 7.15</span><br>(c) <span class="chem">5.36</span> <span class="unit">m s-1</span><br>(d) <span class="chem">18.4</span> <span class="unit">m</span><br>(e) <span class="chem">23.2</span> <span class="unit">m</span><br>(f) <span class="chem">3.03</span> <span class="unit">m s-2</span></p>
      answer: "<p>(a) <span class=\"chem\">-2</span> <span class=\"unit\">m s-1</span><br>(b) <span class=\"chem\">t = 0.224</span> 及 <span class=\"chem\">t = 7.15</span><br>(c) <span class=\"chem\">5.36</span> <span class=\"unit\">m s-1</span><br>(d) <span class=\"chem\">18.4</span> <span class=\"unit\">m</span><br>(e) <span class=\"chem\">23.2</span> <span class=\"unit\">m</span><br>(f) <span class=\"chem\">3.03</span> <span class=\"unit\">m s-2</span></p>",
      markscheme: [
        // EN: A1: <span class="chem">v(0) = -2</span> <span class="unit">m s-1</span>.
        "A1：<span class=\"chem\">v(0) = -2</span> <span class=\"unit\">m s-1</span>。",
        // EN: M1: Solves <span class="chem">v(t) = 0</span> on the GDC.
        "M1：在 GDC 上解 <span class=\"chem\">v(t) = 0</span>。",
        // EN: A1: <span class="chem">t = 0.224</span> and <span class="chem">t = 7.15</span>.
        "A1：<span class=\"chem\">t = 0.224</span> 及 <span class=\"chem\">t = 7.15</span>。",
        // EN: M1: Finds the maximum of <span class="chem">|v|</span>, comparing the local maximum <span class="chem">v(2)</span> with the endpoint values <span class="chem">|v(0)| = 2</span> and <span class="chem">|v(10)| ≈ 1.33</span>.
        "M1：求 <span class=\"chem\">|v|</span> 的最大值，把極大值 <span class=\"chem\">v(2)</span> 與端點值 <span class=\"chem\">|v(0)| = 2</span> 及 <span class=\"chem\">|v(10)| ≈ 1.33</span> 比較。",
        // EN: A1: Maximum speed <span class="chem">= v(2) = 20e^{-1} - 2 = 5.36</span> <span class="unit">m s-1</span>.
        "A1：最大速率 <span class=\"chem\">= v(2) = 20e^{-1} - 2 = 5.36</span> <span class=\"unit\">m s-1</span>。",
        // EN: M1: <span class="chem">int_0^{10} v(t) dt</span>.
        "M1：<span class=\"chem\">int_0^{10} v(t) dt</span>。",
        // EN: A1: <span class="chem">18.4</span> <span class="unit">m</span> (18.38…).
        "A1：<span class=\"chem\">18.4</span> <span class=\"unit\">m</span>（18.38…）。",
        // EN: M1: <span class="chem">int_0^{10} |v(t)| dt</span> (or splits at both zeros and adds absolute values).
        "M1：<span class=\"chem\">int_0^{10} |v(t)| dt</span>（或在兩個零點處分拆，再把絕對值相加）。",
        // EN: A1: <span class="chem">23.2</span> <span class="unit">m</span> (23.19…).
        "A1：<span class=\"chem\">23.2</span> <span class=\"unit\">m</span>（23.19…）。",
        // EN: M1: <span class="chem">a(t) = v'(t) = 10e^{-0.5t} - 5t e^{-0.5t}</span> (or GDC derivative at <span class="chem">t = 1</span>).
        "M1：<span class=\"chem\">a(t) = v'(t) = 10e^{-0.5t} - 5t e^{-0.5t}</span>（或在 <span class=\"chem\">t = 1</span> 處使用 GDC 的導數功能）。",
        // EN: A1: <span class="chem">a(1) = 5e^{-0.5} = 3.03</span> <span class="unit">m s-2</span>.
        "A1：<span class=\"chem\">a(1) = 5e^{-0.5} = 3.03</span> <span class=\"unit\">m s-2</span>。",
      ],
    },

    // ── t5-2-q028 · numeric · challenge · SL · SL 5.5, 5.9 · 6 marks
    "t5-2-q028": {
      // EN: <p>A particle leaves a point <span class="chem">O</span> at <span class="chem">t = 0</span> and moves in a straight line with velocity <span class="chem">v(t) = 4 - t e^{0.3t}</span> <span class="unit">m s-1</span>, where <span class="chem">t &gt;= 0</span> is in seconds. Find the time, after it leaves, when the particle is next back at <span class="chem">O</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>質點在 <span class=\"chem\">t = 0</span> 時離開點 <span class=\"chem\">O</span>，並以速度 <span class=\"chem\">v(t) = 4 - t e^{0.3t}</span> <span class=\"unit\">m s-1</span> 沿直線運動，其中 <span class=\"chem\">t &gt;= 0</span> 以秒為單位。求 (Find) 質點離開後，下一次回到 <span class=\"chem\">O</span> 的時刻。答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: “back at O” means the <strong>displacement</strong> is zero, not the velocity. You need <span class="chem">T &gt; 0</span> with <span class="chem">int_0^T v(t) dt = 0</span>. Solving <span class="chem">v(t) = 0</span> only tells you when the particle turns round.
        "解碼：「回到 O」表示<strong>位移</strong>為零，而不是速度為零。你需要 <span class=\"chem\">T &gt; 0</span> 且 <span class=\"chem\">int_0^T v(t) dt = 0</span>。解 <span class=\"chem\">v(t) = 0</span> 只能告訴你質點何時折返。",
        // EN: The particle moves forwards until <span class="chem">v = 0</span> at <span class="chem">t ≈ 2.12</span>, then comes back. So the answer must be later than 2.12 s.
        "質點向前移動，直至在 <span class=\"chem\">t ≈ 2.12</span> 時 <span class=\"chem\">v = 0</span>，然後折返。所以答案必須遲於 2.12 s。",
        // EN: On the GDC, graph <span class="chem">y = int_0^x (4 - t e^{0.3t}) dt</span> (or tabulate it) and find where it returns to zero.
        "在 GDC 上繪出 <span class=\"chem\">y = int_0^x (4 - t e^{0.3t}) dt</span> 的圖像（或列表），找出它回到零的位置。",
      ],
      // EN: <p>Decode: returning to <span class="chem">O</span> means <span class="chem">s(T) = s(0)</span>, i.e. <span class="chem">int_0^T (4 - t e^{0.3t}) dt = 0</span> with <span class="chem">T &gt; 0</span>. The particle turns at <span class="chem">t = 2.1185…</span> (where <span class="chem">v = 0</span>), having travelled forwards, so it comes back afterwards. Solving the integral equation on the GDC gives <span class="chem">T = 3.69726…</span>, so the particle is back at <span class="chem">O</span> after <span class="chem">3.70</span> <span class="unit">s</span> (3 s.f.).</p>
      solution: "<p>解碼：回到 <span class=\"chem\">O</span> 表示 <span class=\"chem\">s(T) = s(0)</span>，即 <span class=\"chem\">int_0^T (4 - t e^{0.3t}) dt = 0</span> 且 <span class=\"chem\">T &gt; 0</span>。質點向前移動後在 <span class=\"chem\">t = 2.1185…</span> 折返（此時 <span class=\"chem\">v = 0</span>），所以之後會回來。在 GDC 上解這個積分方程得 <span class=\"chem\">T = 3.69726…</span>，故質點在 <span class=\"chem\">3.70</span> <span class=\"unit\">s</span> 後回到 <span class=\"chem\">O</span>（3 位有效數字）。</p>",
    },

    // ── t5-2-q029 · numeric · challenge · SL · SL 5.5, 5.9 · 6 marks
    "t5-2-q029": {
      // EN: <p>A particle moves along a straight line with velocity <span class="chem">v(t) = 2 cos t + 0.5t - 1</span> <span class="unit">m s-1</span>, where <span class="chem">t &gt;= 0</span> is in seconds. The particle has an odometer that records the total distance it has travelled since <span class="chem">t = 0</span>. Find the time at which the odometer first reads <span class="chem">10</span> <span class="unit">m</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>質點沿直線運動，速度為 <span class=\"chem\">v(t) = 2 cos t + 0.5t - 1</span> <span class=\"unit\">m s-1</span>，其中 <span class=\"chem\">t &gt;= 0</span> 以秒為單位。質點裝有一個里程計，記錄自 <span class=\"chem\">t = 0</span> 起所行的總路程。求 (Find) 里程計第一次顯示 <span class=\"chem\">10</span> <span class=\"unit\">m</span> 的時刻。答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: an odometer measures <strong>distance</strong>, which never decreases. You need <span class="chem">T</span> with <span class="chem">int_0^T |v(t)| dt = 10</span>; using <span class="chem">int_0^T v(t) dt = 10</span> would treat backward motion as negative.
        "解碼：里程計量度的是<strong>路程</strong>，而路程永不減少。你需要 <span class=\"chem\">T</span> 且 <span class=\"chem\">int_0^T |v(t)| dt = 10</span>；用 <span class=\"chem\">int_0^T v(t) dt = 10</span> 會把向後的運動當作負數。",
        // EN: In radians, <span class="chem">v</span> changes sign at <span class="chem">t ≈ 1.427</span> and <span class="chem">t ≈ 4.146</span>, and is positive after that.
        "在弧度下，<span class=\"chem\">v</span> 在 <span class=\"chem\">t ≈ 1.427</span> 及 <span class=\"chem\">t ≈ 4.146</span> 處改變符號，之後保持正數。",
        // EN: Graph <span class="chem">y = int_0^x |2 cos t + 0.5t - 1| dt</span> on the GDC and intersect it with <span class="chem">y = 10</span>.
        "在 GDC 上繪出 <span class=\"chem\">y = int_0^x |2 cos t + 0.5t - 1| dt</span> 的圖像，並求它與 <span class=\"chem\">y = 10</span> 的交點。",
      ],
      // EN: <p>Decode: the reading is the total distance <span class="chem">D(T) = int_0^T |v(t)| dt</span>, an increasing function. Solve <span class="chem">D(T) = 10</span>. The velocity is positive on <span class="chem">[0, 1.427)</span>, negative on <span class="chem">(1.427, 4.146)</span> and positive afterwards. The GDC gives <span class="chem">D(4.146…) ≈ 3.66</span>, so the 10 m mark is reached later, at <span class="chem">T = 6.57413…</span>, i.e. <span class="chem">6.57</span> <span class="unit">s</span> (3 s.f.). Solving <span class="chem">int_0^T v dt = 10</span> instead would give a later, wrong time.</p>
      solution: "<p>解碼：讀數是總路程 <span class=\"chem\">D(T) = int_0^T |v(t)| dt</span>，它是遞增函數。解 <span class=\"chem\">D(T) = 10</span>。速度在 <span class=\"chem\">[0, 1.427)</span> 上為正，在 <span class=\"chem\">(1.427, 4.146)</span> 上為負，之後為正。GDC 給出 <span class=\"chem\">D(4.146…) ≈ 3.66</span>，所以 10 m 的讀數在較後時間才達到，即 <span class=\"chem\">T = 6.57413…</span>，也就是 <span class=\"chem\">6.57</span> <span class=\"unit\">s</span>（3 位有效數字）。若改為解 <span class=\"chem\">int_0^T v dt = 10</span>，會得出一個較遲而錯誤的時刻。</p>",
    },

    // ── t5-2-q030 · numeric · challenge · SL · SL 5.5, 5.9 · 6 marks
    "t5-2-q030": {
      // EN: <p>A drone takes off vertically from the ground at <span class="chem">t = 0</span>. For the first <span class="chem">10</span> seconds of its flight its vertical velocity, measured upwards, is <span class="chem">v(t) = 6 - t - 2 sin t</span> <span class="unit">m s-1</span>. Find the greatest height above the ground that the drone reaches during these 10 seconds. Give your answer correct to 3 significant figures.</p>
      stem: "<p>一架無人機在 <span class=\"chem\">t = 0</span> 時從地面垂直起飛。在飛行的首 <span class=\"chem\">10</span> 秒內，其向上量度的鉛垂速度為 <span class=\"chem\">v(t) = 6 - t - 2 sin t</span> <span class=\"unit\">m s-1</span>。求 (Find) 無人機在這 10 秒內離地面的最大高度。答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: height is the displacement <span class="chem">s(t) = int_0^t v(u) du</span> (it starts at 0). Its greatest value occurs where <span class="chem">v</span> changes from positive to negative, not at <span class="chem">t = 10</span>.
        "解碼：高度是位移 <span class=\"chem\">s(t) = int_0^t v(u) du</span>（它從 0 開始）。其最大值出現在 <span class=\"chem\">v</span> 由正變負之處，而不是在 <span class=\"chem\">t = 10</span>。",
        // EN: In radians, the GDC gives the zero of <span class="chem">v</span> at <span class="chem">t ≈ 6.1887</span>; <span class="chem">v &gt; 0</span> before it and <span class="chem">v &lt; 0</span> after it.
        "在弧度下，GDC 給出 <span class=\"chem\">v</span> 的零點在 <span class=\"chem\">t ≈ 6.1887</span>；在此之前 <span class=\"chem\">v &gt; 0</span>，之後 <span class=\"chem\">v &lt; 0</span>。",
        // EN: Evaluate <span class="chem">int_0^{6.1887} (6 - t - 2 sin t) dt</span>.
        "計算 <span class=\"chem\">int_0^{6.1887} (6 - t - 2 sin t) dt</span>。",
      ],
      // EN: <p>Decode: maximum height = maximum of <span class="chem">s(t) = int_0^t v</span>, which occurs where <span class="chem">v</span> changes sign from + to −. The only zero of <span class="chem">v</span> in <span class="chem">[0, 10]</span> is <span class="chem">t_1 = 6.18869…</span>. The greatest height is <span class="chem">s(t_1) = int_0^{t_1} (6 - t - 2 sin t) dt = 17.9732…</span>, i.e. <span class="chem">18.0</span> <span class="unit">m</span> (3 s.f.). (At <span class="chem">t = 10</span> the drone is lower, at about <span class="chem">6.32</span> <span class="unit">m</span>, and it never reaches the ground in between.)</p>
      solution: "<p>解碼：最大高度 = <span class=\"chem\">s(t) = int_0^t v</span> 的最大值，出現在 <span class=\"chem\">v</span> 由 + 變為 − 之處。<span class=\"chem\">v</span> 在 <span class=\"chem\">[0, 10]</span> 內唯一的零點是 <span class=\"chem\">t_1 = 6.18869…</span>。最大高度為 <span class=\"chem\">s(t_1) = int_0^{t_1} (6 - t - 2 sin t) dt = 17.9732…</span>，即 <span class=\"chem\">18.0</span> <span class=\"unit\">m</span>（3 位有效數字）。（在 <span class=\"chem\">t = 10</span> 時無人機較低，約為 <span class=\"chem\">6.32</span> <span class=\"unit\">m</span>，而且期間從未觸及地面。）</p>",
    },

    // ── t5-2-q031 · numeric · exam · SL · SL 5.5 · 4 marks
    "t5-2-q031": {
      // EN: <p>A function <span class="chem">f</span> satisfies <span class="chem">f'(x) = e^{-x^2}</span> and <span class="chem">f(0) = 2</span>. Find <span class="chem">f(1.5)</span>, correct to 3 significant figures.</p>
      stem: "<p>函數 <span class=\"chem\">f</span> 滿足 <span class=\"chem\">f'(x) = e^{-x^2}</span> 及 <span class=\"chem\">f(0) = 2</span>。求 (Find) <span class=\"chem\">f(1.5)</span>，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: this is a boundary-condition question, but <span class="chem">e^{-x^2}</span> has no elementary antiderivative, so you cannot find <span class="chem">f(x)</span> as a formula. Use <span class="chem">f(1.5) = f(0) + int_0^{1.5} f'(x) dx</span> instead.
        "解碼：這是一道邊界條件的題目，但 <span class=\"chem\">e^{-x^2}</span> 沒有初等原函數，所以你無法把 <span class=\"chem\">f(x)</span> 寫成公式。改用 <span class=\"chem\">f(1.5) = f(0) + int_0^{1.5} f'(x) dx</span>。",
        // EN: Evaluate <span class="chem">int_0^{1.5} e^{-x^2} dx</span> on your GDC and add <span class="chem">2</span>.
        "在 GDC 上計算 <span class=\"chem\">int_0^{1.5} e^{-x^2} dx</span>，再加上 <span class=\"chem\">2</span>。",
      ],
      // EN: <p>Decode: “find <span class="chem">f</span> from <span class="chem">f'</span> and one point”, done with a definite integral. <span class="chem">f(1.5) - f(0) = int_0^{1.5} e^{-x^2} dx = 0.85619…</span> (GDC). So <span class="chem">f(1.5) = 2 + 0.85619… = 2.85619…</span>, i.e. <span class="chem">2.86</span> (3 s.f.).</p>
      solution: "<p>解碼：「由 <span class=\"chem\">f'</span> 及一點求 <span class=\"chem\">f</span>」，以定積分完成。<span class=\"chem\">f(1.5) - f(0) = int_0^{1.5} e^{-x^2} dx = 0.85619…</span>（GDC）。故 <span class=\"chem\">f(1.5) = 2 + 0.85619… = 2.85619…</span>，即 <span class=\"chem\">2.86</span>（3 位有效數字）。</p>",
    },

    // ── t5-2-q032 · numeric · challenge · SL · SL 5.5, 5.10, 5.11 · 6 marks
    "t5-2-q032": {
      // EN: <p>Given that <span class="chem">k &gt; 1</span> and <span class="chem">int_1^k (1/x + x/4) dx = 3</span>, find the value of <span class="chem">k</span>, correct to 3 significant figures.</p>
      stem: "<p>已知 <span class=\"chem\">k &gt; 1</span> 及 <span class=\"chem\">int_1^k (1/x + x/4) dx = 3</span>，求 (find) <span class=\"chem\">k</span> 的值，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: the unknown is a <strong>limit</strong> of the integral. Integrate first to get an equation in <span class="chem">k</span>, then solve that equation on the GDC (it mixes <span class="chem">ln k</span> and <span class="chem">k^2</span>, so it has no algebraic solution).
        "解碼：未知數是積分的一個<strong>積分限</strong>。先積分得出一條關於 <span class=\"chem\">k</span> 的方程，然後在 GDC 上解這條方程（它同時含有 <span class=\"chem\">ln k</span> 和 <span class=\"chem\">k^2</span>，所以沒有代數解）。",
        // EN: An antiderivative is <span class="chem">ln x + x^2/8</span>, so the equation is <span class="chem">ln k + (k^2 - 1)/8 = 3</span>.
        "一個原函數是 <span class=\"chem\">ln x + x^2/8</span>，所以方程為 <span class=\"chem\">ln k + (k^2 - 1)/8 = 3</span>。",
        // EN: Graph <span class="chem">y = ln x + (x^2 - 1)/8</span> and <span class="chem">y = 3</span> and intersect them for <span class="chem">x &gt; 1</span>.
        "繪出 <span class=\"chem\">y = ln x + (x^2 - 1)/8</span> 與 <span class=\"chem\">y = 3</span> 的圖像，並求 <span class=\"chem\">x &gt; 1</span> 時的交點。",
      ],
      // EN: <p>Decode: unknown upper limit, so integrate and then solve. <span class="chem">int_1^k (1/x + x/4) dx = [ln x + x^2/8]_1^k = ln k + k^2/8 - 1/8</span>. Setting this equal to 3: <span class="chem">ln k + (k^2 - 1)/8 = 3</span>. The left side is increasing for <span class="chem">k &gt; 1</span>, so there is one solution; the GDC gives <span class="chem">k = 3.78762…</span>, i.e. <span class="chem">3.79</span> (3 s.f.). (Alternatively, solve <span class="chem">int_1^k (1/x + x/4) dx - 3 = 0</span> directly with the GDC solver.)</p>
      solution: "<p>解碼：上限未知，所以先積分再解方程。<span class=\"chem\">int_1^k (1/x + x/4) dx = [ln x + x^2/8]_1^k = ln k + k^2/8 - 1/8</span>。令它等於 3：<span class=\"chem\">ln k + (k^2 - 1)/8 = 3</span>。左邊在 <span class=\"chem\">k &gt; 1</span> 時遞增，所以只有一個解；GDC 給出 <span class=\"chem\">k = 3.78762…</span>，即 <span class=\"chem\">3.79</span>（3 位有效數字）。（或者，直接用 GDC 的求解器解 <span class=\"chem\">int_1^k (1/x + x/4) dx - 3 = 0</span>。）</p>",
    },

    // ── t5-2-q033 · numeric · challenge · SL · SL 5.5 · 7 marks
    "t5-2-q033": {
      // EN: <p>At midnight (<span class="chem">t = 0</span>) a rainwater tank holds <span class="chem">200</span> litres. Over the next 24 hours, water flows in at a rate of <span class="chem">30 + 10 sin(pi t / 12)</span> litres per hour, while water is drawn off for a garden at a rate of <span class="chem">2t</span> litres per hour, where <span class="chem">t</span> is the time in hours after midnight. Find the greatest volume of water in the tank during these 24 hours, correct to 3 significant figures.</p>
      stem: "<p>在午夜（<span class=\"chem\">t = 0</span>）時，一個雨水缸盛有 <span class=\"chem\">200</span> 公升水。在其後 24 小時內，水以每小時 <span class=\"chem\">30 + 10 sin(pi t / 12)</span> 公升的速率流入，同時以每小時 <span class=\"chem\">2t</span> 公升的速率抽出用於灌溉花園，其中 <span class=\"chem\">t</span> 是午夜後的時間（以小時計）。求 (Find) 在這 24 小時內缸中水的最大體積，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: this is a net-change problem. The rate of change of volume is (rate in) − (rate out) <span class="chem">= 30 + 10 sin(pi t/12) - 2t</span>, and <span class="chem">V(T) = 200 + int_0^T (rate in - rate out) dt</span>. The volume is greatest when the net rate changes from positive to negative.
        "解碼：這是一道淨變化的題目。體積的變化率是（流入速率）−（流出速率）<span class=\"chem\">= 30 + 10 sin(pi t/12) - 2t</span>，且 <span class=\"chem\">V(T) = 200 + int_0^T (rate in - rate out) dt</span>。當淨速率由正變負時，體積最大。",
        // EN: Solve <span class="chem">30 + 10 sin(pi t / 12) - 2t = 0</span> on the GDC (radians): <span class="chem">t ≈ 13.31</span> hours.
        "在 GDC（弧度）上解 <span class=\"chem\">30 + 10 sin(pi t / 12) - 2t = 0</span>：<span class=\"chem\">t ≈ 13.31</span> 小時。",
        // EN: Evaluate <span class="chem">200 + int_0^{13.31} (30 + 10 sin(pi t / 12) - 2t) dt</span>, and check it is bigger than the value at the end points (<span class="chem">V(0) = 200</span>, <span class="chem">V(24) = 344</span>).
        "計算 <span class=\"chem\">200 + int_0^{13.31} (30 + 10 sin(pi t / 12) - 2t) dt</span>，並檢查它比端點的值（<span class=\"chem\">V(0) = 200</span>、<span class=\"chem\">V(24) = 344</span>）大。",
      ],
      // EN: <p>Decode: “flows in at a rate … drawn off at a rate” describes <span class="chem">dV/dt = 30 + 10 sin(pi t/12) - 2t</span>, and the start volume is a boundary condition. <span class="chem">dV/dt = 0</span> at <span class="chem">t_1 = 13.3138…</span>, with <span class="chem">dV/dt &gt; 0</span> before and <span class="chem">&lt; 0</span> after, so <span class="chem">V</span> has its maximum there. <span class="chem">V(t_1) = 200 + int_0^{t_1} (30 + 10 sin(pi t/12) - 2t) dt = 496.313…</span>. The end values are <span class="chem">V(0) = 200</span> and <span class="chem">V(24) = 200 + 720 + 0 - 576 = 344</span>. The greatest volume is <span class="chem">496</span> litres (3 s.f.).</p>
      solution: "<p>解碼：「以某速率流入……以某速率抽出」描述的是 <span class=\"chem\">dV/dt = 30 + 10 sin(pi t/12) - 2t</span>，而起始體積是一個邊界條件。在 <span class=\"chem\">t_1 = 13.3138…</span> 時 <span class=\"chem\">dV/dt = 0</span>，之前 <span class=\"chem\">dV/dt &gt; 0</span>、之後 <span class=\"chem\">&lt; 0</span>，所以 <span class=\"chem\">V</span> 在該處取得最大值。<span class=\"chem\">V(t_1) = 200 + int_0^{t_1} (30 + 10 sin(pi t/12) - 2t) dt = 496.313…</span>。端點值為 <span class=\"chem\">V(0) = 200</span> 及 <span class=\"chem\">V(24) = 200 + 720 + 0 - 576 = 344</span>。最大體積為 <span class=\"chem\">496</span> 公升（3 位有效數字）。</p>",
    },

    // ── t5-2-q034 · numeric · exam · SL · SL 5.5, 5.11 · 5 marks
    "t5-2-q034": {
      // EN: <p>The curves <span class="chem">y = x^2 - 4</span> and <span class="chem">y = -2 cos x</span> enclose a finite region <span class="chem">R</span>, most of which lies below the <span class="chem">x</span>-axis. Find the area of <span class="chem">R</span>, correct to 3 significant figures.</p>
      stem: "<p>曲線 <span class=\"chem\">y = x^2 - 4</span> 與 <span class=\"chem\">y = -2 cos x</span> 圍成一個有限區域 <span class=\"chem\">R</span>，其大部分位於 <span class=\"chem\">x</span> 軸下方。求 (Find) <span class=\"chem\">R</span> 的面積，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: the region being below the <span class="chem">x</span>-axis does not change the method for the area between two curves. Integrate (upper curve − lower curve) between the intersections; you do not split at the <span class="chem">x</span>-axis.
        "解碼：區域位於 <span class=\"chem\">x</span> 軸下方，並不會改變求兩曲線之間面積的方法。在交點之間對（上方曲線 − 下方曲線）積分；不必在 <span class=\"chem\">x</span> 軸處分拆。",
        // EN: In radians, the curves intersect at <span class="chem">x ≈ ±2.3136</span>. At <span class="chem">x = 0</span>: <span class="chem">-2 cos 0 = -2</span> and <span class="chem">0^2 - 4 = -4</span>, so <span class="chem">y = -2 cos x</span> is the upper curve.
        "在弧度下，兩曲線相交於 <span class=\"chem\">x ≈ ±2.3136</span>。在 <span class=\"chem\">x = 0</span> 處：<span class=\"chem\">-2 cos 0 = -2</span> 及 <span class=\"chem\">0^2 - 4 = -4</span>，所以 <span class=\"chem\">y = -2 cos x</span> 是上方的曲線。",
        // EN: Evaluate <span class="chem">int_{-2.3136}^{2.3136} (-2 cos x - x^2 + 4) dx</span>.
        "計算 <span class=\"chem\">int_{-2.3136}^{2.3136} (-2 cos x - x^2 + 4) dx</span>。",
      ],
      // EN: <p>Solving <span class="chem">x^2 - 4 = -2 cos x</span> on the GDC gives <span class="chem">x = ±2.31358…</span>. Between them, <span class="chem">-2 cos x &gt;= x^2 - 4</span>. Area <span class="chem">= int_{-2.31358}^{2.31358} (-2 cos x - (x^2 - 4)) dx = 7.30642…</span>, so <span class="chem">7.31</span> (3 s.f.). Because the integrand is (upper − lower) ≥ 0, the answer is positive even though both curves are below the axis for much of the interval.</p>
      solution: "<p>在 GDC 上解 <span class=\"chem\">x^2 - 4 = -2 cos x</span> 得 <span class=\"chem\">x = ±2.31358…</span>。在兩者之間，<span class=\"chem\">-2 cos x &gt;= x^2 - 4</span>。面積 <span class=\"chem\">= int_{-2.31358}^{2.31358} (-2 cos x - (x^2 - 4)) dx = 7.30642…</span>，故 <span class=\"chem\">7.31</span>（3 位有效數字）。由於被積函數是（上方 − 下方）≥ 0，即使兩條曲線在區間的大部分都位於軸下方，答案仍是正數。</p>",
    },

    // ── t5-2-q035 · numeric · foundation · SL · SL 5.5, 5.11 · 3 marks
    "t5-2-q035": {
      // EN: <p>Find the value of <span class="chem">int_1^2 (3x^2 + 2/x^2) dx</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">int_1^2 (3x^2 + 2/x^2) dx</span> 的值。</p>",
      hints: [
        // EN: Write <span class="chem">2/x^2</span> as <span class="chem">2x^{-2}</span>, which integrates to <span class="chem">2x^{-1}/(-1) = -2/x</span>.
        "把 <span class=\"chem\">2/x^2</span> 寫成 <span class=\"chem\">2x^{-2}</span>，其積分為 <span class=\"chem\">2x^{-1}/(-1) = -2/x</span>。",
        // EN: Evaluate <span class="chem">[x^3 - 2/x]_1^2</span> as <span class="chem">F(2) - F(1)</span>, keeping brackets around <span class="chem">F(1)</span>.
        "以 <span class=\"chem\">F(2) - F(1)</span> 計算 <span class=\"chem\">[x^3 - 2/x]_1^2</span>，並保留 <span class=\"chem\">F(1)</span> 外的括號。",
      ],
      // EN: <p><span class="chem">int_1^2 (3x^2 + 2x^{-2}) dx = [x^3 - 2/x]_1^2 = (8 - 1) - (1 - 2) = 7 + 1 = 8</span>.</p>
      solution: "<p><span class=\"chem\">int_1^2 (3x^2 + 2x^{-2}) dx = [x^3 - 2/x]_1^2 = (8 - 1) - (1 - 2) = 7 + 1 = 8</span>。</p>",
    },

    // ── t5-2-q036 · mcq · foundation · SL · SL 5.10 · 2 marks
    "t5-2-q036": {
      // EN: <p>Find <span class="chem">int sin(3x - 1) dx</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">int sin(3x - 1) dx</span>。</p>",
      options: [
        // EN: <span class="chem">(1/3) cos(3x - 1) + C</span>
        "<span class=\"chem\">(1/3) cos(3x - 1) + C</span>",
        // EN: <span class="chem">-3 cos(3x - 1) + C</span>
        "<span class=\"chem\">-3 cos(3x - 1) + C</span>",
        // EN: <span class="chem">-(1/3) cos(3x - 1) + C</span>
        "<span class=\"chem\">-(1/3) cos(3x - 1) + C</span>",
        // EN: <span class="chem">-cos((3x^2)/2 - x) + C</span>
        "<span class=\"chem\">-cos((3x^2)/2 - x) + C</span>",
      ],
      hints: [
        // EN: Use <span class="chem">int sin(ax + b) dx = -(1/a) cos(ax + b) + C</span>.
        "使用 <span class=\"chem\">int sin(ax + b) dx = -(1/a) cos(ax + b) + C</span>。",
        // EN: Check by differentiating your answer: the chain rule should bring out a factor <span class="chem">3</span> that cancels the <span class="chem">1/3</span>.
        "把答案求導來驗算：鏈式法則應會產生一個因子 <span class=\"chem\">3</span>，與 <span class=\"chem\">1/3</span> 互相抵消。",
      ],
      // EN: <p>With <span class="chem">a = 3</span>: <span class="chem">int sin(3x - 1) dx = -(1/3) cos(3x - 1) + C</span>. Check: <span class="chem">d/dx(-(1/3) cos(3x - 1)) = -(1/3)(-sin(3x - 1))(3) = sin(3x - 1)</span>.</p>
      solution: "<p>利用 <span class=\"chem\">a = 3</span>：<span class=\"chem\">int sin(3x - 1) dx = -(1/3) cos(3x - 1) + C</span>。驗算：<span class=\"chem\">d/dx(-(1/3) cos(3x - 1)) = -(1/3)(-sin(3x - 1))(3) = sin(3x - 1)</span>。</p>",
      misconception: {
        // EN (option A): You divided by 3 correctly but lost the minus sign: the integral of sin u is −cos u, so the answer is −(1/3) cos(3x − 1) + C.
        "0": "你正確地除以 3，但漏了負號：sin u 的積分是 −cos u，所以答案是 −(1/3) cos(3x − 1) + C。",
        // EN (option B): You multiplied by the inner coefficient 3 (as in the chain rule for differentiation) instead of dividing by it.
        "1": "你乘以內層係數 3（就像求導時的鏈式法則），而不是除以它。",
        // EN (option D): You integrated the inside 3x − 1 as well. For a linear composite f(ax + b), keep the bracket unchanged and divide by a.
        "3": "你把內層的 3x − 1 也積分了。對於線性複合函數 f(ax + b)，保持括號不變並除以 a。",
      },
    },

    // ── t5-2-q037 · numeric · foundation · SL · SL 5.5, 5.9 · 3 marks
    "t5-2-q037": {
      // EN: <p>A particle moves in a straight line with velocity <span class="chem">v(t) = 3t^2 - 2t + 1</span> <span class="unit">m s-1</span>, where <span class="chem">t</span> is in seconds. Its displacement from a fixed point <span class="chem">O</span> at <span class="chem">t = 0</span> is <span class="chem">4</span> <span class="unit">m</span>. Find its displacement from <span class="chem">O</span> when <span class="chem">t = 2</span>.</p>
      stem: "<p>質點沿直線運動，速度為 <span class=\"chem\">v(t) = 3t^2 - 2t + 1</span> <span class=\"unit\">m s-1</span>，其中 <span class=\"chem\">t</span> 以秒為單位。在 <span class=\"chem\">t = 0</span> 時，它相對於定點 <span class=\"chem\">O</span> 的位移為 <span class=\"chem\">4</span> <span class=\"unit\">m</span>。求 (Find) 當 <span class=\"chem\">t = 2</span> 時它相對於 <span class=\"chem\">O</span> 的位移。</p>",
      hints: [
        // EN: Displacement is the antiderivative of velocity: <span class="chem">s(t) = t^3 - t^2 + t + C</span>.
        "位移是速度的原函數：<span class=\"chem\">s(t) = t^3 - t^2 + t + C</span>。",
        // EN: Use <span class="chem">s(0) = 4</span> to find <span class="chem">C</span>, then substitute <span class="chem">t = 2</span>.
        "利用 <span class=\"chem\">s(0) = 4</span> 求 <span class=\"chem\">C</span>，然後代入 <span class=\"chem\">t = 2</span>。",
      ],
      // EN: <p><span class="chem">s(t) = int (3t^2 - 2t + 1) dt = t^3 - t^2 + t + C</span>. Since <span class="chem">s(0) = 4</span>, <span class="chem">C = 4</span>. Then <span class="chem">s(2) = 8 - 4 + 2 + 4 = 10</span> <span class="unit">m</span>.</p>
      solution: "<p><span class=\"chem\">s(t) = int (3t^2 - 2t + 1) dt = t^3 - t^2 + t + C</span>。由於 <span class=\"chem\">s(0) = 4</span>，<span class=\"chem\">C = 4</span>。於是 <span class=\"chem\">s(2) = 8 - 4 + 2 + 4 = 10</span> <span class=\"unit\">m</span>。</p>",
    },

    // ── t5-2-q038 · short · exam · SL · SL 5.10 · 6 marks
    "t5-2-q038": {
      // EN: <p>Find each of the following.<br>(a) <span class="chem">int (2x + 1)^5 dx</span> <strong>[2 marks]</strong><br>(b) <span class="chem">int 6/(3x - 2) dx</span>, for <span class="chem">x &gt; 2/3</span> <strong>[2 marks]</strong><br>(c) <span class="chem">int 4e^{1 - 2x} dx</span> <strong>[2 marks]</strong></p>
      stem: "<p>求 (Find) 下列各項。<br>(a) <span class=\"chem\">int (2x + 1)^5 dx</span> <strong>[2 marks]</strong><br>(b) <span class=\"chem\">int 6/(3x - 2) dx</span>，其中 <span class=\"chem\">x &gt; 2/3</span> <strong>[2 marks]</strong><br>(c) <span class=\"chem\">int 4e^{1 - 2x} dx</span> <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Each integrand is a standard function of a linear expression <span class="chem">ax + b</span>: integrate as usual, keep the bracket, and divide by <span class="chem">a</span>.
        "每個被積函數都是線性式 <span class=\"chem\">ax + b</span> 的標準函數：照常積分，保留括號，並除以 <span class=\"chem\">a</span>。",
        // EN: In (c) the inner coefficient is <span class="chem">a = -2</span>, so dividing by it changes the sign.
        "在 (c) 中內層係數是 <span class=\"chem\">a = -2</span>，所以除以它會改變符號。",
      ],
      // EN: <p>(a) <span class="chem">int (2x + 1)^5 dx = (2x + 1)^6 / (6 × 2) + C = (2x + 1)^6 / 12 + C</span>.<br>(b) <span class="chem">int 6/(3x - 2) dx = 6 × (1/3) ln|3x - 2| + C = 2 ln(3x - 2) + C</span>, since <span class="chem">3x - 2 &gt; 0</span>.<br>(c) <span class="chem">int 4e^{1 - 2x} dx = 4 × (1/(-2)) e^{1 - 2x} + C = -2e^{1 - 2x} + C</span>.</p>
      solution: "<p>(a) <span class=\"chem\">int (2x + 1)^5 dx = (2x + 1)^6 / (6 × 2) + C = (2x + 1)^6 / 12 + C</span>。<br>(b) <span class=\"chem\">int 6/(3x - 2) dx = 6 × (1/3) ln|3x - 2| + C = 2 ln(3x - 2) + C</span>，因為 <span class=\"chem\">3x - 2 &gt; 0</span>。<br>(c) <span class=\"chem\">int 4e^{1 - 2x} dx = 4 × (1/(-2)) e^{1 - 2x} + C = -2e^{1 - 2x} + C</span>。</p>",
      // EN: <p>(a) <span class="chem">(2x + 1)^6 / 12 + C</span><br>(b) <span class="chem">2 ln(3x - 2) + C</span><br>(c) <span class="chem">-2e^{1 - 2x} + C</span></p>
      answer: "<p>(a) <span class=\"chem\">(2x + 1)^6 / 12 + C</span><br>(b) <span class=\"chem\">2 ln(3x - 2) + C</span><br>(c) <span class=\"chem\">-2e^{1 - 2x} + C</span></p>",
      markscheme: [
        // EN: M1: Power <span class="chem">(2x + 1)^6</span> with a division by the inner coefficient <span class="chem">2</span>.
        "M1：冪 <span class=\"chem\">(2x + 1)^6</span>，並除以內層係數 <span class=\"chem\">2</span>。",
        // EN: A1: <span class="chem">(2x + 1)^6 / 12 + C</span>.
        "A1：<span class=\"chem\">(2x + 1)^6 / 12 + C</span>。",
        // EN: M1: Logarithm form <span class="chem">k ln(3x - 2)</span>.
        "M1：對數形式 <span class=\"chem\">k ln(3x - 2)</span>。",
        // EN: A1: <span class="chem">2 ln(3x - 2) + C</span> (modulus not needed as <span class="chem">x &gt; 2/3</span>).
        "A1：<span class=\"chem\">2 ln(3x - 2) + C</span>（由於 <span class=\"chem\">x &gt; 2/3</span>，不需要絕對值）。",
        // EN: M1: Exponential form <span class="chem">k e^{1 - 2x}</span>.
        "M1：指數形式 <span class=\"chem\">k e^{1 - 2x}</span>。",
        // EN: A1: <span class="chem">-2e^{1 - 2x} + C</span>.
        "A1：<span class=\"chem\">-2e^{1 - 2x} + C</span>。",
      ],
    },

    // ── t5-2-q039 · numeric · exam · SL · SL 3.6, 5.10, 5.11 · 5 marks
    "t5-2-q039": {
      // EN: <p>Find the exact value of <span class="chem">int_0^{pi/4} (sin x + cos x)^2 dx</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">int_0^{pi/4} (sin x + cos x)^2 dx</span> 的準確值。</p>",
      hints: [
        // EN: Decode: you cannot integrate a squared bracket of trig functions directly. Expand it and use identities to turn it into terms you can integrate.
        "解碼：你不能直接對三角函數括號的平方積分。先展開，再用恒等式把它化為可以積分的項。",
        // EN: <span class="chem">(sin x + cos x)^2 = sin^2 x + cos^2 x + 2 sin x cos x = 1 + sin(2x)</span>.
        "<span class=\"chem\">(sin x + cos x)^2 = sin^2 x + cos^2 x + 2 sin x cos x = 1 + sin(2x)</span>。",
        // EN: <span class="chem">int sin(2x) dx = -(1/2) cos(2x)</span>. Then use <span class="chem">cos(pi/2) = 0</span> and <span class="chem">cos 0 = 1</span>.
        "<span class=\"chem\">int sin(2x) dx = -(1/2) cos(2x)</span>。然後使用 <span class=\"chem\">cos(pi/2) = 0</span> 及 <span class=\"chem\">cos 0 = 1</span>。",
      ],
      // EN: <p>Expanding, <span class="chem">(sin x + cos x)^2 = 1 + 2 sin x cos x = 1 + sin(2x)</span>. So <span class="chem">int_0^{pi/4} (1 + sin(2x)) dx = [x - (1/2) cos(2x)]_0^{pi/4} = (pi/4 - (1/2)(0)) - (0 - 1/2) = pi/4 + 1/2</span>.</p>
      solution: "<p>展開得 <span class=\"chem\">(sin x + cos x)^2 = 1 + 2 sin x cos x = 1 + sin(2x)</span>。故 <span class=\"chem\">int_0^{pi/4} (1 + sin(2x)) dx = [x - (1/2) cos(2x)]_0^{pi/4} = (pi/4 - (1/2)(0)) - (0 - 1/2) = pi/4 + 1/2</span>。</p>",
    },

    // ── t5-2-q040 · numeric · exam · SL · SL 5.10, 5.11 · 4 marks
    "t5-2-q040": {
      // EN: <p>Find the exact value of <span class="chem">int_0^1 x(x^2 + 1)^3 dx</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">int_0^1 x(x^2 + 1)^3 dx</span> 的準確值。</p>",
      hints: [
        // EN: The factor <span class="chem">x</span> is (half of) the derivative of the inner function <span class="chem">x^2 + 1</span>: this is the reverse chain rule pattern <span class="chem">int g'(x) [g(x)]^n dx</span>.
        "因子 <span class=\"chem\">x</span> 是內層函數 <span class=\"chem\">x^2 + 1</span> 的導數（的一半）：這是逆鏈式法則的模式 <span class=\"chem\">int g'(x) [g(x)]^n dx</span>。",
        // EN: Let <span class="chem">u = x^2 + 1</span>, so <span class="chem">du = 2x dx</span> and the limits become <span class="chem">u = 1</span> to <span class="chem">u = 2</span>.
        "設 <span class=\"chem\">u = x^2 + 1</span>，則 <span class=\"chem\">du = 2x dx</span>，而積分限變為 <span class=\"chem\">u = 1</span> 至 <span class=\"chem\">u = 2</span>。",
      ],
      // EN: <p>With <span class="chem">u = x^2 + 1</span>, <span class="chem">x dx = (1/2) du</span>, and <span class="chem">x = 0, 1</span> give <span class="chem">u = 1, 2</span>. So the integral is <span class="chem">(1/2) int_1^2 u^3 du = (1/2)[u^4/4]_1^2 = (1/8)(16 - 1) = 15/8</span>.</p>
      solution: "<p>設 <span class=\"chem\">u = x^2 + 1</span>，則 <span class=\"chem\">x dx = (1/2) du</span>，而 <span class=\"chem\">x = 0, 1</span> 給出 <span class=\"chem\">u = 1, 2</span>。故積分為 <span class=\"chem\">(1/2) int_1^2 u^3 du = (1/2)[u^4/4]_1^2 = (1/8)(16 - 1) = 15/8</span>。</p>",
    },

    // ── t5-2-q041 · numeric · exam · SL · SL 5.10, 5.11 · 4 marks
    "t5-2-q041": {
      // EN: <p>Find the exact value of <span class="chem">int_0^{ln 2} e^x / (e^x + 1) dx</span>, giving your answer as a single logarithm.</p>
      stem: "<p>求 (Find) <span class=\"chem\">int_0^{ln 2} e^x / (e^x + 1) dx</span> 的準確值，答案以單一對數表示。</p>",
      hints: [
        // EN: The numerator <span class="chem">e^x</span> is exactly the derivative of the denominator <span class="chem">e^x + 1</span>, so the integral is of the form <span class="chem">int g'(x)/g(x) dx = ln|g(x)| + C</span>.
        "分子 <span class=\"chem\">e^x</span> 正好是分母 <span class=\"chem\">e^x + 1</span> 的導數，所以這個積分屬於 <span class=\"chem\">int g'(x)/g(x) dx = ln|g(x)| + C</span> 的形式。",
        // EN: Evaluate <span class="chem">[ln(e^x + 1)]_0^{ln 2}</span> using <span class="chem">e^{ln 2} = 2</span>.
        "利用 <span class=\"chem\">e^{ln 2} = 2</span> 計算 <span class=\"chem\">[ln(e^x + 1)]_0^{ln 2}</span>。",
      ],
      // EN: <p><span class="chem">int_0^{ln 2} e^x / (e^x + 1) dx = [ln(e^x + 1)]_0^{ln 2} = ln(2 + 1) - ln(1 + 1) = ln 3 - ln 2 = ln(3/2)</span>.</p>
      solution: "<p><span class=\"chem\">int_0^{ln 2} e^x / (e^x + 1) dx = [ln(e^x + 1)]_0^{ln 2} = ln(2 + 1) - ln(1 + 1) = ln 3 - ln 2 = ln(3/2)</span>。</p>",
    },

    // ── t5-2-q042 · short · exam · SL · SL 5.11 · 8 marks
    "t5-2-q042": {
      // EN: <p>Let <span class="chem">f(x) = x^2 - 4x + 3</span>.<br>(a) Find the <span class="chem">x</span>-intercepts of the graph of <span class="chem">f</span>. <strong>[2 marks]</strong><br>(b) Find the value of <span class="chem">int_0^4 f(x) dx</span>. <strong>[2 marks]</strong><br>(c) Find the total area of the regions enclosed by the graph of <span class="chem">f</span>, the <span class="chem">x</span>-axis and the lines <span class="chem">x = 0</span> and <span class="chem">x = 4</span>. <strong>[3 marks]</strong><br>(d) Explain why your answers to (b) and (c) are different. <strong>[1 mark]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = x^2 - 4x + 3</span>。<br>(a) 求 (Find) <span class=\"chem\">f</span> 的圖像的 <span class=\"chem\">x</span> 截距。<strong>[2 marks]</strong><br>(b) 求 (Find) <span class=\"chem\">int_0^4 f(x) dx</span> 的值。<strong>[2 marks]</strong><br>(c) 求 (Find) <span class=\"chem\">f</span> 的圖像、<span class=\"chem\">x</span> 軸與直線 <span class=\"chem\">x = 0</span> 及 <span class=\"chem\">x = 4</span> 所圍成各區域的總面積。<strong>[3 marks]</strong><br>(d) 解釋 (Explain) 為何你在 (b) 和 (c) 的答案不同。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: (b) asks for a signed integral, (c) asks for an area. They are equal only when the curve stays above the axis.
        "解碼：(b) 要求帶符號的積分，(c) 要求面積。只有當曲線一直位於軸上方時，兩者才相等。",
        // EN: Let <span class="chem">F(x) = x^3/3 - 2x^2 + 3x</span>. Then <span class="chem">F(0) = 0</span>, <span class="chem">F(1) = 4/3</span>, <span class="chem">F(3) = 0</span>, <span class="chem">F(4) = 4/3</span>.
        "設 <span class=\"chem\">F(x) = x^3/3 - 2x^2 + 3x</span>。則 <span class=\"chem\">F(0) = 0</span>、<span class=\"chem\">F(1) = 4/3</span>、<span class=\"chem\">F(3) = 0</span>、<span class=\"chem\">F(4) = 4/3</span>。",
        // EN: For (c), find <span class="chem">int_0^1</span>, <span class="chem">int_1^3</span> and <span class="chem">int_3^4</span> separately and add their absolute values.
        "對於 (c)，分別求 <span class=\"chem\">int_0^1</span>、<span class=\"chem\">int_1^3</span> 及 <span class=\"chem\">int_3^4</span>，再把它們的絕對值相加。",
      ],
      // EN: <p>(a) <span class="chem">x^2 - 4x + 3 = (x - 1)(x - 3) = 0</span>, so <span class="chem">x = 1, 3</span>.<br>(b) With <span class="chem">F(x) = x^3/3 - 2x^2 + 3x</span>: <span class="chem">int_0^4 f(x) dx = F(4) - F(0) = 64/3 - 32 + 12 = 4/3</span>.<br>(c) <span class="chem">int_0^1 f = F(1) - F(0) = 4/3</span>; <span class="chem">int_1^3 f = F(3) - F(1) = 0 - 4/3 = -4/3</span>; <span class="chem">int_3^4 f = F(4) - F(3) = 4/3</span>. Total area <span class="chem">= 4/3 + 4/3 + 4/3 = 4</span>.<br>(d) <span class="chem">f &lt; 0</span> on <span class="chem">(1, 3)</span>, so that region counts negatively in the integral: <span class="chem">4/3 - 4/3 + 4/3 = 4/3</span>. Area counts it positively.</p>
      solution: "<p>(a) <span class=\"chem\">x^2 - 4x + 3 = (x - 1)(x - 3) = 0</span>，故 <span class=\"chem\">x = 1, 3</span>。<br>(b) 利用 <span class=\"chem\">F(x) = x^3/3 - 2x^2 + 3x</span>：<span class=\"chem\">int_0^4 f(x) dx = F(4) - F(0) = 64/3 - 32 + 12 = 4/3</span>。<br>(c) <span class=\"chem\">int_0^1 f = F(1) - F(0) = 4/3</span>；<span class=\"chem\">int_1^3 f = F(3) - F(1) = 0 - 4/3 = -4/3</span>；<span class=\"chem\">int_3^4 f = F(4) - F(3) = 4/3</span>。總面積 <span class=\"chem\">= 4/3 + 4/3 + 4/3 = 4</span>。<br>(d) 在 <span class=\"chem\">(1, 3)</span> 上 <span class=\"chem\">f &lt; 0</span>，所以該區域在積分中以負值計算：<span class=\"chem\">4/3 - 4/3 + 4/3 = 4/3</span>。面積則把它按正值計算。</p>",
      // EN: <p>(a) <span class="chem">x = 1</span> and <span class="chem">x = 3</span><br>(b) <span class="chem">4/3</span><br>(c) <span class="chem">4</span><br>(d) The region between <span class="chem">x = 1</span> and <span class="chem">x = 3</span> is below the axis, so it contributes <span class="chem">-4/3</span> to the integral but <span class="chem">+4/3</span> to the area.</p>
      answer: "<p>(a) <span class=\"chem\">x = 1</span> 及 <span class=\"chem\">x = 3</span><br>(b) <span class=\"chem\">4/3</span><br>(c) <span class=\"chem\">4</span><br>(d) 在 <span class=\"chem\">x = 1</span> 與 <span class=\"chem\">x = 3</span> 之間的區域位於軸下方，所以它對積分的貢獻是 <span class=\"chem\">-4/3</span>，但對面積的貢獻是 <span class=\"chem\">+4/3</span>。</p>",
      markscheme: [
        // EN: M1: Factorises <span class="chem">(x - 1)(x - 3) = 0</span> (or uses the quadratic formula).
        "M1：把 <span class=\"chem\">(x - 1)(x - 3) = 0</span> 因式分解（或使用二次公式）。",
        // EN: A1: <span class="chem">x = 1</span> and <span class="chem">x = 3</span>.
        "A1：<span class=\"chem\">x = 1</span> 及 <span class=\"chem\">x = 3</span>。",
        // EN: M1: Antiderivative <span class="chem">x^3/3 - 2x^2 + 3x</span> evaluated from 0 to 4.
        "M1：原函數 <span class=\"chem\">x^3/3 - 2x^2 + 3x</span> 由 0 至 4 求值。",
        // EN: A1: <span class="chem">64/3 - 32 + 12 = 4/3</span>.
        "A1：<span class=\"chem\">64/3 - 32 + 12 = 4/3</span>。",
        // EN: M1: Splits at <span class="chem">x = 1</span> and <span class="chem">x = 3</span> and takes absolute values of the pieces.
        "M1：在 <span class=\"chem\">x = 1</span> 及 <span class=\"chem\">x = 3</span> 處分拆，並取各部分的絕對值。",
        // EN: A1: Pieces <span class="chem">4/3</span>, <span class="chem">-4/3</span>, <span class="chem">4/3</span>.
        "A1：各部分 <span class=\"chem\">4/3</span>、<span class=\"chem\">-4/3</span>、<span class=\"chem\">4/3</span>。",
        // EN: A1: Total area <span class="chem">= 4</span>.
        "A1：總面積 <span class=\"chem\">= 4</span>。",
        // EN: R1: The integral is signed: the part below the axis on <span class="chem">(1, 3)</span> is negative and cancels some of the positive parts, whereas area counts every region as positive.
        "R1：積分是帶符號的：在 <span class=\"chem\">(1, 3)</span> 上位於軸下方的部分為負，抵消了部分正值，而面積則把每個區域都按正值計算。",
      ],
    },

    // ── t5-2-q043 · short · exam · SL · SL 5.9 · 9 marks
    "t5-2-q043": {
      // EN: <p>A particle starts at a fixed point <span class="chem">O</span> and moves in a straight line with velocity <span class="chem">v(t) = t^2 - 6t + 8</span> <span class="unit">m s-1</span>, for <span class="chem">0 &lt;= t &lt;= 5</span>, where <span class="chem">t</span> is in seconds.<br>(a) Find the values of <span class="chem">t</span> when the particle is at rest. <strong>[2 marks]</strong><br>(b) Find the acceleration of the particle when <span class="chem">t = 4</span>. <strong>[2 marks]</strong><br>(c) Find the displacement of the particle from <span class="chem">O</span> when <span class="chem">t = 5</span>. <strong>[2 marks]</strong><br>(d) Find the total distance travelled by the particle for <span class="chem">0 &lt;= t &lt;= 5</span>. <strong>[3 marks]</strong></p>
      stem: "<p>質點從定點 <span class=\"chem\">O</span> 出發，以速度 <span class=\"chem\">v(t) = t^2 - 6t + 8</span> <span class=\"unit\">m s-1</span> 沿直線運動，其中 <span class=\"chem\">0 &lt;= t &lt;= 5</span>，<span class=\"chem\">t</span> 以秒為單位。<br>(a) 求 (Find) 質點處於靜止時 <span class=\"chem\">t</span> 的值。<strong>[2 marks]</strong><br>(b) 求 (Find) 當 <span class=\"chem\">t = 4</span> 時質點的加速度。<strong>[2 marks]</strong><br>(c) 求 (Find) 當 <span class=\"chem\">t = 5</span> 時質點相對於 <span class=\"chem\">O</span> 的位移。<strong>[2 marks]</strong><br>(d) 求 (Find) 在 <span class=\"chem\">0 &lt;= t &lt;= 5</span> 期間質點所行的總路程。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: “at rest” means <span class="chem">v = 0</span>; displacement uses <span class="chem">int v dt</span>; total distance uses <span class="chem">int |v| dt</span>, so you must split at every time from (a).
        "解碼：「靜止」表示 <span class=\"chem\">v = 0</span>；位移用 <span class=\"chem\">int v dt</span>；總路程用 <span class=\"chem\">int |v| dt</span>，所以你必須在 (a) 所得的每個時刻處分拆。",
        // EN: Let <span class="chem">s(t) = t^3/3 - 3t^2 + 8t</span> (this already has <span class="chem">s(0) = 0</span>). Find <span class="chem">s(2)</span>, <span class="chem">s(4)</span> and <span class="chem">s(5)</span>.
        "設 <span class=\"chem\">s(t) = t^3/3 - 3t^2 + 8t</span>（它已滿足 <span class=\"chem\">s(0) = 0</span>）。求 <span class=\"chem\">s(2)</span>、<span class=\"chem\">s(4)</span> 及 <span class=\"chem\">s(5)</span>。",
      ],
      // EN: <p>(a) <span class="chem">(t - 2)(t - 4) = 0</span>, so <span class="chem">t = 2</span> or <span class="chem">t = 4</span>.<br>(b) <span class="chem">a(t) = 2t - 6</span>, so <span class="chem">a(4) = 2</span> <span class="unit">m s-2</span>.<br>(c) <span class="chem">s(t) = t^3/3 - 3t^2 + 8t</span> (with <span class="chem">s(0) = 0</span>), so <span class="chem">s(5) = 125/3 - 75 + 40 = 20/3</span> <span class="unit">m</span>.<br>(d) <span class="chem">s(2) = 8/3 - 12 + 16 = 20/3</span>, <span class="chem">s(4) = 64/3 - 48 + 32 = 16/3</span>. Distance <span class="chem">= |20/3 - 0| + |16/3 - 20/3| + |20/3 - 16/3| = 20/3 + 4/3 + 4/3 = 28/3</span> <span class="unit">m</span>.</p>
      solution: "<p>(a) <span class=\"chem\">(t - 2)(t - 4) = 0</span>，故 <span class=\"chem\">t = 2</span> 或 <span class=\"chem\">t = 4</span>。<br>(b) <span class=\"chem\">a(t) = 2t - 6</span>，故 <span class=\"chem\">a(4) = 2</span> <span class=\"unit\">m s-2</span>。<br>(c) <span class=\"chem\">s(t) = t^3/3 - 3t^2 + 8t</span>（且 <span class=\"chem\">s(0) = 0</span>），故 <span class=\"chem\">s(5) = 125/3 - 75 + 40 = 20/3</span> <span class=\"unit\">m</span>。<br>(d) <span class=\"chem\">s(2) = 8/3 - 12 + 16 = 20/3</span>，<span class=\"chem\">s(4) = 64/3 - 48 + 32 = 16/3</span>。路程 <span class=\"chem\">= |20/3 - 0| + |16/3 - 20/3| + |20/3 - 16/3| = 20/3 + 4/3 + 4/3 = 28/3</span> <span class=\"unit\">m</span>。</p>",
      // EN: <p>(a) <span class="chem">t = 2</span> and <span class="chem">t = 4</span><br>(b) <span class="chem">2</span> <span class="unit">m s-2</span><br>(c) <span class="chem">20/3</span> <span class="unit">m</span><br>(d) <span class="chem">28/3</span> <span class="unit">m</span></p>
      answer: "<p>(a) <span class=\"chem\">t = 2</span> 及 <span class=\"chem\">t = 4</span><br>(b) <span class=\"chem\">2</span> <span class=\"unit\">m s-2</span><br>(c) <span class=\"chem\">20/3</span> <span class=\"unit\">m</span><br>(d) <span class=\"chem\">28/3</span> <span class=\"unit\">m</span></p>",
      markscheme: [
        // EN: M1: Solves <span class="chem">t^2 - 6t + 8 = (t - 2)(t - 4) = 0</span>.
        "M1：解 <span class=\"chem\">t^2 - 6t + 8 = (t - 2)(t - 4) = 0</span>。",
        // EN: A1: <span class="chem">t = 2</span> and <span class="chem">t = 4</span>.
        "A1：<span class=\"chem\">t = 2</span> 及 <span class=\"chem\">t = 4</span>。",
        // EN: M1: <span class="chem">a(t) = v'(t) = 2t - 6</span>.
        "M1：<span class=\"chem\">a(t) = v'(t) = 2t - 6</span>。",
        // EN: A1: <span class="chem">a(4) = 2</span> <span class="unit">m s-2</span>.
        "A1：<span class=\"chem\">a(4) = 2</span> <span class=\"unit\">m s-2</span>。",
        // EN: M1: <span class="chem">s(5) = int_0^5 (t^2 - 6t + 8) dt = [t^3/3 - 3t^2 + 8t]_0^5</span>.
        "M1：<span class=\"chem\">s(5) = int_0^5 (t^2 - 6t + 8) dt = [t^3/3 - 3t^2 + 8t]_0^5</span>。",
        // EN: A1: <span class="chem">20/3</span> <span class="unit">m</span>.
        "A1：<span class=\"chem\">20/3</span> <span class=\"unit\">m</span>。",
        // EN: M1: Splits the distance integral at <span class="chem">t = 2</span> and <span class="chem">t = 4</span> (or uses <span class="chem">s(0), s(2), s(4), s(5)</span>).
        "M1：在 <span class=\"chem\">t = 2</span> 及 <span class=\"chem\">t = 4</span> 處分拆路程積分（或使用 <span class=\"chem\">s(0), s(2), s(4), s(5)</span>）。",
        // EN: A1: Legs of <span class="chem">20/3</span>, <span class="chem">4/3</span> and <span class="chem">4/3</span> <span class="unit">m</span>.
        "A1：各段為 <span class=\"chem\">20/3</span>、<span class=\"chem\">4/3</span> 及 <span class=\"chem\">4/3</span> <span class=\"unit\">m</span>。",
        // EN: A1: Total distance <span class="chem">28/3</span> <span class="unit">m</span>.
        "A1：總路程 <span class=\"chem\">28/3</span> <span class=\"unit\">m</span>。",
      ],
    },

    // ── t5-2-q044 · numeric · exam · SL · SL 5.5 · 4 marks
    "t5-2-q044": {
      // EN: <p>The gradient of a curve is given by <span class="chem">dy/dx = 6x - 4/x^3</span>, for <span class="chem">x &gt; 0</span>. The curve passes through the point <span class="chem">(1, 2)</span>. Find the value of <span class="chem">y</span> when <span class="chem">x = 2</span>.</p>
      stem: "<p>曲線的斜率為 <span class=\"chem\">dy/dx = 6x - 4/x^3</span>，其中 <span class=\"chem\">x &gt; 0</span>。曲線通過點 <span class=\"chem\">(1, 2)</span>。求 (Find) 當 <span class=\"chem\">x = 2</span> 時 <span class=\"chem\">y</span> 的值。</p>",
      hints: [
        // EN: Write <span class="chem">-4/x^3 = -4x^{-3}</span>; integrating gives <span class="chem">-4x^{-2}/(-2) = 2x^{-2}</span>.
        "寫成 <span class=\"chem\">-4/x^3 = -4x^{-3}</span>；積分得 <span class=\"chem\">-4x^{-2}/(-2) = 2x^{-2}</span>。",
        // EN: So <span class="chem">y = 3x^2 + 2/x^2 + C</span>. Use the point <span class="chem">(1, 2)</span> to find <span class="chem">C</span>.
        "故 <span class=\"chem\">y = 3x^2 + 2/x^2 + C</span>。利用點 <span class=\"chem\">(1, 2)</span> 求 <span class=\"chem\">C</span>。",
      ],
      // EN: <p><span class="chem">y = int (6x - 4x^{-3}) dx = 3x^2 + 2x^{-2} + C</span>. At <span class="chem">(1, 2)</span>: <span class="chem">3 + 2 + C = 2</span>, so <span class="chem">C = -3</span>. When <span class="chem">x = 2</span>: <span class="chem">y = 12 + 2/4 - 3 = 9.5</span> (or <span class="chem">19/2</span>).</p>
      solution: "<p><span class=\"chem\">y = int (6x - 4x^{-3}) dx = 3x^2 + 2x^{-2} + C</span>。在 <span class=\"chem\">(1, 2)</span> 處：<span class=\"chem\">3 + 2 + C = 2</span>，故 <span class=\"chem\">C = -3</span>。當 <span class=\"chem\">x = 2</span> 時：<span class=\"chem\">y = 12 + 2/4 - 3 = 9.5</span>（或 <span class=\"chem\">19/2</span>）。</p>",
    },

    // ── t5-2-q045 · numeric · exam · SL · SL 5.10 · 5 marks
    "t5-2-q045": {
      // EN: <p>A function <span class="chem">f</span> has derivative <span class="chem">f'(x) = 2 cos(2x) + sin x</span>, and the graph of <span class="chem">f</span> passes through the point <span class="chem">(pi, 3)</span>. Find the exact value of <span class="chem">f(pi/3)</span>.</p>
      stem: "<p>函數 <span class=\"chem\">f</span> 的導數為 <span class=\"chem\">f'(x) = 2 cos(2x) + sin x</span>，且 <span class=\"chem\">f</span> 的圖像通過點 <span class=\"chem\">(pi, 3)</span>。求 (Find) <span class=\"chem\">f(pi/3)</span> 的準確值。</p>",
      hints: [
        // EN: Integrate term by term: <span class="chem">int 2 cos(2x) dx = sin(2x)</span> and <span class="chem">int sin x dx = -cos x</span>.
        "逐項積分：<span class=\"chem\">int 2 cos(2x) dx = sin(2x)</span> 及 <span class=\"chem\">int sin x dx = -cos x</span>。",
        // EN: Use <span class="chem">f(pi) = 3</span>, remembering <span class="chem">sin(2pi) = 0</span> and <span class="chem">cos pi = -1</span>, to find <span class="chem">C</span>.
        "利用 <span class=\"chem\">f(pi) = 3</span>，並記住 <span class=\"chem\">sin(2pi) = 0</span> 及 <span class=\"chem\">cos pi = -1</span>，求 <span class=\"chem\">C</span>。",
        // EN: Then use <span class="chem">sin(2pi/3) = sqrt(3)/2</span> and <span class="chem">cos(pi/3) = 1/2</span>.
        "然後使用 <span class=\"chem\">sin(2pi/3) = sqrt(3)/2</span> 及 <span class=\"chem\">cos(pi/3) = 1/2</span>。",
      ],
      // EN: <p><span class="chem">f(x) = sin(2x) - cos x + C</span>. From <span class="chem">f(pi) = 3</span>: <span class="chem">0 - (-1) + C = 3</span>, so <span class="chem">C = 2</span>. Then <span class="chem">f(pi/3) = sin(2pi/3) - cos(pi/3) + 2 = sqrt(3)/2 - 1/2 + 2 = (3 + sqrt(3))/2</span>.</p>
      solution: "<p><span class=\"chem\">f(x) = sin(2x) - cos x + C</span>。由 <span class=\"chem\">f(pi) = 3</span>：<span class=\"chem\">0 - (-1) + C = 3</span>，故 <span class=\"chem\">C = 2</span>。於是 <span class=\"chem\">f(pi/3) = sin(2pi/3) - cos(pi/3) + 2 = sqrt(3)/2 - 1/2 + 2 = (3 + sqrt(3))/2</span>。</p>",
    },

    // ── t5-2-q046 · numeric · challenge · SL · SL 5.11 · 6 marks
    "t5-2-q046": {
      // EN: <p>The curves <span class="chem">y = x^3</span> and <span class="chem">y = 4x</span> enclose two finite regions. A student writes: “The area enclosed is <span class="chem">int_{-2}^2 (4x - x^3) dx = 0</span>, so the curves enclose no area.” Find the correct total area of the two regions.</p>
      stem: "<p>曲線 <span class=\"chem\">y = x^3</span> 與 <span class=\"chem\">y = 4x</span> 圍成兩個有限區域。一位學生寫道：「所圍成的面積是 <span class=\"chem\">int_{-2}^2 (4x - x^3) dx = 0</span>，所以兩曲線沒有圍成任何面積。」求 (Find) 這兩個區域正確的總面積。</p>",
      hints: [
        // EN: Decode: the student used one integral across both regions. Find where the curves meet and which curve is on top in <strong>each</strong> region; the upper curve swaps at <span class="chem">x = 0</span>.
        "解碼：這位學生用一個積分橫跨兩個區域。找出兩曲線的交點，以及在<strong>每個</strong>區域中哪條曲線在上方；上方的曲線在 <span class=\"chem\">x = 0</span> 處互換。",
        // EN: <span class="chem">x^3 = 4x</span> gives <span class="chem">x = -2, 0, 2</span>. On <span class="chem">(0, 2)</span>, <span class="chem">4x &gt; x^3</span> (try <span class="chem">x = 1</span>); on <span class="chem">(-2, 0)</span>, <span class="chem">x^3 &gt; 4x</span> (try <span class="chem">x = -1</span>).
        "<span class=\"chem\">x^3 = 4x</span> 得 <span class=\"chem\">x = -2, 0, 2</span>。在 <span class=\"chem\">(0, 2)</span> 上，<span class=\"chem\">4x &gt; x^3</span>（試 <span class=\"chem\">x = 1</span>）；在 <span class=\"chem\">(-2, 0)</span> 上，<span class=\"chem\">x^3 &gt; 4x</span>（試 <span class=\"chem\">x = -1</span>）。",
        // EN: Compute <span class="chem">int_0^2 (4x - x^3) dx</span>, then use symmetry (or integrate <span class="chem">x^3 - 4x</span> on <span class="chem">[-2, 0]</span>).
        "計算 <span class=\"chem\">int_0^2 (4x - x^3) dx</span>，然後利用對稱性（或在 <span class=\"chem\">[-2, 0]</span> 上對 <span class=\"chem\">x^3 - 4x</span> 積分）。",
      ],
      // EN: <p>Decode: area between curves means (upper − lower) on each interval; the curves cross at <span class="chem">x = 0</span>, so the upper curve changes there. Intersections: <span class="chem">x^3 - 4x = x(x - 2)(x + 2) = 0</span>. On <span class="chem">[0, 2]</span>: <span class="chem">int_0^2 (4x - x^3) dx = [2x^2 - x^4/4]_0^2 = 8 - 4 = 4</span>. On <span class="chem">[-2, 0]</span>: <span class="chem">int_{-2}^0 (x^3 - 4x) dx = [x^4/4 - 2x^2]_{-2}^0 = 0 - (4 - 8) = 4</span>. Total area <span class="chem">= 8</span>. The student’s integral is 0 because the two pieces have opposite signs and cancel.</p>
      solution: "<p>解碼：兩曲線之間的面積是指在每個區間上計算（上方 − 下方）；兩曲線在 <span class=\"chem\">x = 0</span> 處相交，所以上方的曲線在該處改變。交點：<span class=\"chem\">x^3 - 4x = x(x - 2)(x + 2) = 0</span>。在 <span class=\"chem\">[0, 2]</span> 上：<span class=\"chem\">int_0^2 (4x - x^3) dx = [2x^2 - x^4/4]_0^2 = 8 - 4 = 4</span>。在 <span class=\"chem\">[-2, 0]</span> 上：<span class=\"chem\">int_{-2}^0 (x^3 - 4x) dx = [x^4/4 - 2x^2]_{-2}^0 = 0 - (4 - 8) = 4</span>。總面積 <span class=\"chem\">= 8</span>。學生的積分為 0，因為兩部分符號相反，互相抵消。</p>",
    },

    // ── t5-2-q047 · short · exam · SL · SL 5.6, 5.10, 5.11 · 5 marks
    "t5-2-q047": {
      // EN: <p>(a) Find <span class="chem">d/dx (x ln x)</span>. <strong>[2 marks]</strong><br>(b) Hence find the exact value of <span class="chem">int_1^e ln x dx</span>. <strong>[3 marks]</strong></p>
      stem: "<p>(a) 求 (Find) <span class=\"chem\">d/dx (x ln x)</span>。<strong>[2 marks]</strong><br>(b) 由此求 (Hence find) <span class=\"chem\">int_1^e ln x dx</span> 的準確值。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: For (a), the product rule gives <span class="chem">1 × ln x + x × (1/x)</span>.
        "對於 (a)，積法則給出 <span class=\"chem\">1 × ln x + x × (1/x)</span>。",
        // EN: “Hence”: integrate both sides of (a) from 1 to e: <span class="chem">int_1^e (ln x + 1) dx = [x ln x]_1^e</span>, then subtract <span class="chem">int_1^e 1 dx</span>.
        "「由此 (Hence)」：把 (a) 的兩邊由 1 至 e 積分：<span class=\"chem\">int_1^e (ln x + 1) dx = [x ln x]_1^e</span>，然後減去 <span class=\"chem\">int_1^e 1 dx</span>。",
      ],
      // EN: <p>(a) <span class="chem">d/dx (x ln x) = ln x + x(1/x) = ln x + 1</span>.<br>(b) From (a), <span class="chem">int_1^e (ln x + 1) dx = [x ln x]_1^e = e - 0 = e</span>. Since <span class="chem">int_1^e 1 dx = e - 1</span>, <span class="chem">int_1^e ln x dx = e - (e - 1) = 1</span>.</p>
      solution: "<p>(a) <span class=\"chem\">d/dx (x ln x) = ln x + x(1/x) = ln x + 1</span>。<br>(b) 由 (a)，<span class=\"chem\">int_1^e (ln x + 1) dx = [x ln x]_1^e = e - 0 = e</span>。由於 <span class=\"chem\">int_1^e 1 dx = e - 1</span>，<span class=\"chem\">int_1^e ln x dx = e - (e - 1) = 1</span>。</p>",
      // EN: <p>(a) <span class="chem">ln x + 1</span><br>(b) <span class="chem">1</span></p>
      answer: "<p>(a) <span class=\"chem\">ln x + 1</span><br>(b) <span class=\"chem\">1</span></p>",
      markscheme: [
        // EN: M1: Product rule with <span class="chem">u = x</span>, <span class="chem">v = ln x</span>.
        "M1：使用積法則，其中 <span class=\"chem\">u = x</span>、<span class=\"chem\">v = ln x</span>。",
        // EN: A1: <span class="chem">d/dx (x ln x) = ln x + 1</span>.
        "A1：<span class=\"chem\">d/dx (x ln x) = ln x + 1</span>。",
        // EN: M1: Integrates (a): <span class="chem">x ln x = int ln x dx + int 1 dx</span>, i.e. <span class="chem">int ln x dx = x ln x - x + C</span>.
        "M1：對 (a) 積分：<span class=\"chem\">x ln x = int ln x dx + int 1 dx</span>，即 <span class=\"chem\">int ln x dx = x ln x - x + C</span>。",
        // EN: A1: Substitutes the limits: <span class="chem">(e ln e - e) - (1 ln 1 - 1)</span>.
        "A1：代入積分限：<span class=\"chem\">(e ln e - e) - (1 ln 1 - 1)</span>。",
        // EN: A1: <span class="chem">= 0 - (-1) = 1</span>.
        "A1：<span class=\"chem\">= 0 - (-1) = 1</span>。",
      ],
    },

    // ── t5-2-q048 · numeric · exam · SL · SL 5.5, 5.11 · 4 marks
    "t5-2-q048": {
      // EN: <p>Given that <span class="chem">k &gt; 1</span> and <span class="chem">int_1^k (2x - 1) dx = 12</span>, find the value of <span class="chem">k</span>.</p>
      stem: "<p>已知 <span class=\"chem\">k &gt; 1</span> 及 <span class=\"chem\">int_1^k (2x - 1) dx = 12</span>，求 (find) <span class=\"chem\">k</span> 的值。</p>",
      hints: [
        // EN: Integrate to get an equation in <span class="chem">k</span>: <span class="chem">[x^2 - x]_1^k = k^2 - k - 0</span>.
        "積分得出一條關於 <span class=\"chem\">k</span> 的方程：<span class=\"chem\">[x^2 - x]_1^k = k^2 - k - 0</span>。",
        // EN: Solve <span class="chem">k^2 - k - 12 = 0</span> and use the condition <span class="chem">k &gt; 1</span> to choose the root.
        "解 <span class=\"chem\">k^2 - k - 12 = 0</span>，並利用條件 <span class=\"chem\">k &gt; 1</span> 選取適當的根。",
      ],
      // EN: <p><span class="chem">int_1^k (2x - 1) dx = [x^2 - x]_1^k = (k^2 - k) - (1 - 1) = k^2 - k</span>. So <span class="chem">k^2 - k - 12 = 0</span>, <span class="chem">(k - 4)(k + 3) = 0</span>. Since <span class="chem">k &gt; 1</span>, <span class="chem">k = 4</span> (reject <span class="chem">k = -3</span>).</p>
      solution: "<p><span class=\"chem\">int_1^k (2x - 1) dx = [x^2 - x]_1^k = (k^2 - k) - (1 - 1) = k^2 - k</span>。故 <span class=\"chem\">k^2 - k - 12 = 0</span>，<span class=\"chem\">(k - 4)(k + 3) = 0</span>。由於 <span class=\"chem\">k &gt; 1</span>，<span class=\"chem\">k = 4</span>（捨去 <span class=\"chem\">k = -3</span>）。</p>",
    },

    // ── t5-2-q049 · numeric · challenge · SL · SL 5.11 · 6 marks
    "t5-2-q049": {
      // EN: <p>The curve <span class="chem">y = x^2 - 4</span> and the line <span class="chem">y = 2x - 1</span> enclose a finite region <span class="chem">R</span>. The <span class="chem">x</span>-axis passes through <span class="chem">R</span>, so part of <span class="chem">R</span> lies above the <span class="chem">x</span>-axis and part lies below it. Find the exact area of <span class="chem">R</span>.</p>
      stem: "<p>曲線 <span class=\"chem\">y = x^2 - 4</span> 與直線 <span class=\"chem\">y = 2x - 1</span> 圍成一個有限區域 <span class=\"chem\">R</span>。<span class=\"chem\">x</span> 軸穿過 <span class=\"chem\">R</span>，所以 <span class=\"chem\">R</span> 的一部分位於 <span class=\"chem\">x</span> 軸上方，一部分位於其下方。求 (Find) <span class=\"chem\">R</span> 的準確面積。</p>",
      hints: [
        // EN: Decode: the region asked for is enclosed by the curve and the line only. The <span class="chem">x</span>-axis is a distraction: “upper minus lower” works even where both are below the axis, so do not split at the axis.
        "解碼：題目所求的區域只由曲線與直線圍成。<span class=\"chem\">x</span> 軸只是干擾：即使兩者都在軸下方，「上方減下方」仍然適用，所以不要在軸處分拆。",
        // EN: Solve <span class="chem">x^2 - 4 = 2x - 1</span>: <span class="chem">x^2 - 2x - 3 = 0</span>, so <span class="chem">x = -1</span> and <span class="chem">x = 3</span>. The line is above the curve between them (test <span class="chem">x = 0</span>).
        "解 <span class=\"chem\">x^2 - 4 = 2x - 1</span>：<span class=\"chem\">x^2 - 2x - 3 = 0</span>，故 <span class=\"chem\">x = -1</span> 及 <span class=\"chem\">x = 3</span>。在兩者之間直線位於曲線上方（以 <span class=\"chem\">x = 0</span> 檢驗）。",
        // EN: Evaluate <span class="chem">int_{-1}^3 ((2x - 1) - (x^2 - 4)) dx = int_{-1}^3 (3 + 2x - x^2) dx</span>.
        "計算 <span class=\"chem\">int_{-1}^3 ((2x - 1) - (x^2 - 4)) dx = int_{-1}^3 (3 + 2x - x^2) dx</span>。",
      ],
      // EN: <p>Decode: area between a line and a curve; the axis plays no part. Intersections: <span class="chem">(x - 3)(x + 1) = 0</span>, so <span class="chem">x = -1, 3</span>. At <span class="chem">x = 0</span>, the line gives <span class="chem">-1</span> and the curve <span class="chem">-4</span>, so the line is on top. <span class="chem">A = int_{-1}^3 (3 + 2x - x^2) dx = [3x + x^2 - x^3/3]_{-1}^3 = (9 + 9 - 9) - (-3 + 1 + 1/3) = 9 + 5/3 = 32/3</span>.</p>
      solution: "<p>解碼：直線與曲線之間的面積；坐標軸與此無關。交點：<span class=\"chem\">(x - 3)(x + 1) = 0</span>，故 <span class=\"chem\">x = -1, 3</span>。在 <span class=\"chem\">x = 0</span> 處，直線給出 <span class=\"chem\">-1</span>，曲線給出 <span class=\"chem\">-4</span>，所以直線在上方。<span class=\"chem\">A = int_{-1}^3 (3 + 2x - x^2) dx = [3x + x^2 - x^3/3]_{-1}^3 = (9 + 9 - 9) - (-3 + 1 + 1/3) = 9 + 5/3 = 32/3</span>。</p>",
    },

    // ── t5-2-q050 · short · challenge · SL · SL 5.9 · 10 marks
    "t5-2-q050": {
      // EN: <p>A particle moves along a straight line. Its acceleration is <span class="chem">a(t) = 6t - 6</span> <span class="unit">m s-2</span>, for <span class="chem">t &gt;= 0</span> seconds. Its initial velocity is <span class="chem">-9</span> <span class="unit">m s-1</span>, and it passes through a fixed point <span class="chem">O</span> on the line when <span class="chem">t = 1</span>. Let <span class="chem">s(t)</span> be its displacement from <span class="chem">O</span>.<br>(a) Find an expression for the velocity <span class="chem">v(t)</span>. <strong>[2 marks]</strong><br>(b) Find an expression for <span class="chem">s(t)</span>. <strong>[3 marks]</strong><br>(c) Find the distance of the particle from <span class="chem">O</span> when it is first at rest. <strong>[2 marks]</strong><br>(d) Find the total distance travelled by the particle in the first 4 seconds. <strong>[3 marks]</strong></p>
      stem: "<p>質點沿直線運動。其加速度為 <span class=\"chem\">a(t) = 6t - 6</span> <span class=\"unit\">m s-2</span>，其中 <span class=\"chem\">t &gt;= 0</span> 秒。其初速度為 <span class=\"chem\">-9</span> <span class=\"unit\">m s-1</span>，並在 <span class=\"chem\">t = 1</span> 時通過直線上的定點 <span class=\"chem\">O</span>。設 <span class=\"chem\">s(t)</span> 為它相對於 <span class=\"chem\">O</span> 的位移。<br>(a) 求 (Find) 速度 <span class=\"chem\">v(t)</span> 的表達式。<strong>[2 marks]</strong><br>(b) 求 (Find) <span class=\"chem\">s(t)</span> 的表達式。<strong>[3 marks]</strong><br>(c) 求 (Find) 質點第一次靜止時與 <span class=\"chem\">O</span> 的距離。<strong>[2 marks]</strong><br>(d) 求 (Find) 質點在首 4 秒內所行的總路程。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: two boundary conditions at <strong>different</strong> times. “Initial velocity” is <span class="chem">v(0) = -9</span>; “passes through O when t = 1” is <span class="chem">s(1) = 0</span>, so the particle does not start at <span class="chem">O</span>.
        "解碼：兩個邊界條件在<strong>不同</strong>的時刻。「初速度」是 <span class=\"chem\">v(0) = -9</span>；「在 t = 1 時通過 O」是 <span class=\"chem\">s(1) = 0</span>，所以質點並非從 <span class=\"chem\">O</span> 出發。",
        // EN: After (b), <span class="chem">s(0) = 11</span>: the particle starts 11 m from <span class="chem">O</span>. “First at rest” means the first <span class="chem">t &gt;= 0</span> with <span class="chem">v(t) = 0</span>.
        "完成 (b) 後，<span class=\"chem\">s(0) = 11</span>：質點從距 <span class=\"chem\">O</span> 11 m 處出發。「第一次靜止」是指第一個滿足 <span class=\"chem\">v(t) = 0</span> 的 <span class=\"chem\">t &gt;= 0</span>。",
        // EN: For (d), the particle turns at <span class="chem">t = 3</span>, so add <span class="chem">|s(3) - s(0)|</span> and <span class="chem">|s(4) - s(3)|</span>.
        "對於 (d)，質點在 <span class=\"chem\">t = 3</span> 處折返，所以把 <span class=\"chem\">|s(3) - s(0)|</span> 與 <span class=\"chem\">|s(4) - s(3)|</span> 相加。",
      ],
      // EN: <p>Decode: the constants come from <span class="chem">v(0) = -9</span> and <span class="chem">s(1) = 0</span>, and “distance from O” is <span class="chem">|s|</span>.<br>(a) <span class="chem">v(t) = 3t^2 - 6t + C_1</span>; <span class="chem">v(0) = -9</span> gives <span class="chem">C_1 = -9</span>, so <span class="chem">v(t) = 3t^2 - 6t - 9</span>.<br>(b) <span class="chem">s(t) = t^3 - 3t^2 - 9t + C_2</span>; <span class="chem">s(1) = 1 - 3 - 9 + C_2 = 0</span> gives <span class="chem">C_2 = 11</span>.<br>(c) <span class="chem">v(t) = 3(t^2 - 2t - 3) = 3(t - 3)(t + 1) = 0</span>, so <span class="chem">t = 3</span> (as <span class="chem">t &gt;= 0</span>). <span class="chem">s(3) = 27 - 27 - 27 + 11 = -16</span>: the particle is <span class="chem">16</span> <span class="unit">m</span> from <span class="chem">O</span> (on the negative side).<br>(d) <span class="chem">s(0) = 11</span>, <span class="chem">s(3) = -16</span>, <span class="chem">s(4) = 64 - 48 - 36 + 11 = -9</span>. Distance <span class="chem">= |-16 - 11| + |-9 - (-16)| = 27 + 7 = 34</span> <span class="unit">m</span>.</p>
      solution: "<p>解碼：常數來自 <span class=\"chem\">v(0) = -9</span> 及 <span class=\"chem\">s(1) = 0</span>，而「與 O 的距離」是 <span class=\"chem\">|s|</span>。<br>(a) <span class=\"chem\">v(t) = 3t^2 - 6t + C_1</span>；<span class=\"chem\">v(0) = -9</span> 給出 <span class=\"chem\">C_1 = -9</span>，故 <span class=\"chem\">v(t) = 3t^2 - 6t - 9</span>。<br>(b) <span class=\"chem\">s(t) = t^3 - 3t^2 - 9t + C_2</span>；<span class=\"chem\">s(1) = 1 - 3 - 9 + C_2 = 0</span> 給出 <span class=\"chem\">C_2 = 11</span>。<br>(c) <span class=\"chem\">v(t) = 3(t^2 - 2t - 3) = 3(t - 3)(t + 1) = 0</span>，故 <span class=\"chem\">t = 3</span>（因 <span class=\"chem\">t &gt;= 0</span>）。<span class=\"chem\">s(3) = 27 - 27 - 27 + 11 = -16</span>：質點距 <span class=\"chem\">O</span> <span class=\"chem\">16</span> <span class=\"unit\">m</span>（在負方向一側）。<br>(d) <span class=\"chem\">s(0) = 11</span>，<span class=\"chem\">s(3) = -16</span>，<span class=\"chem\">s(4) = 64 - 48 - 36 + 11 = -9</span>。路程 <span class=\"chem\">= |-16 - 11| + |-9 - (-16)| = 27 + 7 = 34</span> <span class=\"unit\">m</span>。</p>",
      // EN: <p>(a) <span class="chem">v(t) = 3t^2 - 6t - 9</span><br>(b) <span class="chem">s(t) = t^3 - 3t^2 - 9t + 11</span><br>(c) <span class="chem">16</span> <span class="unit">m</span><br>(d) <span class="chem">34</span> <span class="unit">m</span></p>
      answer: "<p>(a) <span class=\"chem\">v(t) = 3t^2 - 6t - 9</span><br>(b) <span class=\"chem\">s(t) = t^3 - 3t^2 - 9t + 11</span><br>(c) <span class=\"chem\">16</span> <span class=\"unit\">m</span><br>(d) <span class=\"chem\">34</span> <span class=\"unit\">m</span></p>",
      markscheme: [
        // EN: M1: Integrates <span class="chem">a(t)</span> and uses <span class="chem">v(0) = -9</span>.
        "M1：對 <span class=\"chem\">a(t)</span> 積分並使用 <span class=\"chem\">v(0) = -9</span>。",
        // EN: A1: <span class="chem">v(t) = 3t^2 - 6t - 9</span>.
        "A1：<span class=\"chem\">v(t) = 3t^2 - 6t - 9</span>。",
        // EN: M1: Integrates: <span class="chem">s(t) = t^3 - 3t^2 - 9t + C</span>.
        "M1：積分：<span class=\"chem\">s(t) = t^3 - 3t^2 - 9t + C</span>。",
        // EN: M1: Uses <span class="chem">s(1) = 0</span> (not <span class="chem">s(0) = 0</span>): <span class="chem">1 - 3 - 9 + C = 0</span>.
        "M1：使用 <span class=\"chem\">s(1) = 0</span>（而不是 <span class=\"chem\">s(0) = 0</span>）：<span class=\"chem\">1 - 3 - 9 + C = 0</span>。",
        // EN: A1: <span class="chem">s(t) = t^3 - 3t^2 - 9t + 11</span>.
        "A1：<span class=\"chem\">s(t) = t^3 - 3t^2 - 9t + 11</span>。",
        // EN: M1: Solves <span class="chem">v = 3(t - 3)(t + 1) = 0</span>, giving <span class="chem">t = 3</span> (rejecting <span class="chem">t = -1</span>).
        "M1：解 <span class=\"chem\">v = 3(t - 3)(t + 1) = 0</span>，得 <span class=\"chem\">t = 3</span>（捨去 <span class=\"chem\">t = -1</span>）。",
        // EN: A1: <span class="chem">s(3) = -16</span>, so the particle is <span class="chem">16</span> <span class="unit">m</span> from <span class="chem">O</span>.
        "A1：<span class=\"chem\">s(3) = -16</span>，所以質點距 <span class=\"chem\">O</span> <span class=\"chem\">16</span> <span class=\"unit\">m</span>。",
        // EN: M1: Uses <span class="chem">s(0) = 11</span>, <span class="chem">s(3) = -16</span>, <span class="chem">s(4) = -9</span> (or splits <span class="chem">int_0^4 |v| dt</span> at <span class="chem">t = 3</span>).
        "M1：使用 <span class=\"chem\">s(0) = 11</span>、<span class=\"chem\">s(3) = -16</span>、<span class=\"chem\">s(4) = -9</span>（或在 <span class=\"chem\">t = 3</span> 處分拆 <span class=\"chem\">int_0^4 |v| dt</span>）。",
        // EN: A1: Legs of <span class="chem">27</span> and <span class="chem">7</span> <span class="unit">m</span>.
        "A1：各段為 <span class=\"chem\">27</span> 及 <span class=\"chem\">7</span> <span class=\"unit\">m</span>。",
        // EN: A1: Total distance <span class="chem">34</span> <span class="unit">m</span>.
        "A1：總路程 <span class=\"chem\">34</span> <span class=\"unit\">m</span>。",
      ],
    },

    // ── t5-2-q051 · numeric · challenge · SL · SL 5.11 · 6 marks
    "t5-2-q051": {
      // EN: <p>The line <span class="chem">y = kx</span>, where <span class="chem">k &gt; 0</span>, and the curve <span class="chem">y = x^2</span> enclose a region of area <span class="chem">36</span> square units. Find the value of <span class="chem">k</span>.</p>
      stem: "<p>直線 <span class=\"chem\">y = kx</span>（其中 <span class=\"chem\">k &gt; 0</span>）與曲線 <span class=\"chem\">y = x^2</span> 圍成一個面積為 <span class=\"chem\">36</span> 平方單位的區域。求 (Find) <span class=\"chem\">k</span> 的值。</p>",
      hints: [
        // EN: Decode: the unknown <span class="chem">k</span> appears in both the integrand and a limit. Find the intersections in terms of <span class="chem">k</span>, write the area as an expression in <span class="chem">k</span>, then set it equal to 36.
        "解碼：未知數 <span class=\"chem\">k</span> 同時出現在被積函數和積分限中。以 <span class=\"chem\">k</span> 表示交點，把面積寫成 <span class=\"chem\">k</span> 的式子，再令它等於 36。",
        // EN: The curves meet where <span class="chem">x^2 = kx</span>, i.e. <span class="chem">x = 0</span> and <span class="chem">x = k</span>. The line is on top for <span class="chem">0 &lt; x &lt; k</span>.
        "兩者相交於 <span class=\"chem\">x^2 = kx</span>，即 <span class=\"chem\">x = 0</span> 及 <span class=\"chem\">x = k</span>。當 <span class=\"chem\">0 &lt; x &lt; k</span> 時直線在上方。",
        // EN: Show that <span class="chem">int_0^k (kx - x^2) dx = k^3/6</span>.
        "證明 (Show that) <span class=\"chem\">int_0^k (kx - x^2) dx = k^3/6</span>。",
      ],
      // EN: <p>Decode: area as a function of the parameter. Intersections at <span class="chem">x = 0</span> and <span class="chem">x = k</span>, with <span class="chem">kx &gt;= x^2</span> between them. <span class="chem">A = int_0^k (kx - x^2) dx = [kx^2/2 - x^3/3]_0^k = k^3/2 - k^3/3 = k^3/6</span>. Setting <span class="chem">k^3/6 = 36</span> gives <span class="chem">k^3 = 216</span>, so <span class="chem">k = 6</span>.</p>
      solution: "<p>解碼：面積作為參數的函數。交點在 <span class=\"chem\">x = 0</span> 及 <span class=\"chem\">x = k</span>，兩者之間 <span class=\"chem\">kx &gt;= x^2</span>。<span class=\"chem\">A = int_0^k (kx - x^2) dx = [kx^2/2 - x^3/3]_0^k = k^3/2 - k^3/3 = k^3/6</span>。令 <span class=\"chem\">k^3/6 = 36</span> 得 <span class=\"chem\">k^3 = 216</span>，故 <span class=\"chem\">k = 6</span>。</p>",
    },

    // ── t5-2-q052 · numeric · challenge · SL · SL 3.6, 5.10, 5.11 · 6 marks
    "t5-2-q052": {
      // EN: <p>Find the exact value of <span class="chem">int_0^{pi/2} sin(2x) cos^2 x dx</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">int_0^{pi/2} sin(2x) cos^2 x dx</span> 的準確值。</p>",
      hints: [
        // EN: Decode: this is a reverse chain rule integral in disguise. Rewrite <span class="chem">sin(2x)</span> with the double-angle identity so that the integrand becomes (a constant times) <span class="chem">g'(x) [g(x)]^n</span>.
        "解碼：這是一個經過偽裝的逆鏈式法則積分。用二倍角公式改寫 <span class=\"chem\">sin(2x)</span>，使被積函數變成（常數乘以）<span class=\"chem\">g'(x) [g(x)]^n</span>。",
        // EN: <span class="chem">sin(2x) cos^2 x = 2 sin x cos^3 x</span>. With <span class="chem">g(x) = cos x</span>, <span class="chem">g'(x) = -sin x</span>.
        "<span class=\"chem\">sin(2x) cos^2 x = 2 sin x cos^3 x</span>。設 <span class=\"chem\">g(x) = cos x</span>，則 <span class=\"chem\">g'(x) = -sin x</span>。",
        // EN: So <span class="chem">int 2 sin x cos^3 x dx = -(1/2) cos^4 x + C</span>. Use <span class="chem">cos(pi/2) = 0</span> and <span class="chem">cos 0 = 1</span>.
        "故 <span class=\"chem\">int 2 sin x cos^3 x dx = -(1/2) cos^4 x + C</span>。使用 <span class=\"chem\">cos(pi/2) = 0</span> 及 <span class=\"chem\">cos 0 = 1</span>。",
      ],
      // EN: <p>Decode: double angle, then inspection. <span class="chem">sin(2x) cos^2 x = 2 sin x cos x × cos^2 x = 2 sin x cos^3 x</span>. Since <span class="chem">d/dx (cos^4 x) = -4 sin x cos^3 x</span>, <span class="chem">int 2 sin x cos^3 x dx = -(1/2) cos^4 x + C</span>. Then <span class="chem">[-(1/2) cos^4 x]_0^{pi/2} = 0 - (-(1/2)(1)) = 1/2</span>.</p>
      solution: "<p>解碼：先用二倍角公式，再用觀察積分法。<span class=\"chem\">sin(2x) cos^2 x = 2 sin x cos x × cos^2 x = 2 sin x cos^3 x</span>。由於 <span class=\"chem\">d/dx (cos^4 x) = -4 sin x cos^3 x</span>，<span class=\"chem\">int 2 sin x cos^3 x dx = -(1/2) cos^4 x + C</span>。於是 <span class=\"chem\">[-(1/2) cos^4 x]_0^{pi/2} = 0 - (-(1/2)(1)) = 1/2</span>。</p>",
    },

    // ── t5-2-q053 · numeric · challenge · SL · SL 5.11 · 6 marks
    "t5-2-q053": {
      // EN: <p>Let <span class="chem">f(x) = 3x^2 - 12</span>. Region <span class="chem">P</span> is enclosed by the graph of <span class="chem">f</span>, the <span class="chem">x</span>-axis and the <span class="chem">y</span>-axis, for <span class="chem">0 &lt;= x &lt;= 2</span>. Region <span class="chem">Q</span> is enclosed by the graph of <span class="chem">f</span>, the <span class="chem">x</span>-axis and the line <span class="chem">x = b</span>, for <span class="chem">2 &lt;= x &lt;= b</span>. The regions <span class="chem">P</span> and <span class="chem">Q</span> have equal areas. Find the exact value of <span class="chem">b</span>.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = 3x^2 - 12</span>。區域 <span class=\"chem\">P</span> 由 <span class=\"chem\">f</span> 的圖像、<span class=\"chem\">x</span> 軸與 <span class=\"chem\">y</span> 軸圍成，其中 <span class=\"chem\">0 &lt;= x &lt;= 2</span>。區域 <span class=\"chem\">Q</span> 由 <span class=\"chem\">f</span> 的圖像、<span class=\"chem\">x</span> 軸與直線 <span class=\"chem\">x = b</span> 圍成，其中 <span class=\"chem\">2 &lt;= x &lt;= b</span>。區域 <span class=\"chem\">P</span> 與 <span class=\"chem\">Q</span> 的面積相等。求 (Find) <span class=\"chem\">b</span> 的準確值。</p>",
      hints: [
        // EN: Decode: <span class="chem">P</span> is below the axis and <span class="chem">Q</span> is above it. “Equal areas” means their signed integrals cancel, so the condition is simply <span class="chem">int_0^b f(x) dx = 0</span>.
        "解碼：<span class=\"chem\">P</span> 位於軸下方，<span class=\"chem\">Q</span> 位於軸上方。「面積相等」表示它們帶符號的積分互相抵消，所以條件就是 <span class=\"chem\">int_0^b f(x) dx = 0</span>。",
        // EN: <span class="chem">int_0^b (3x^2 - 12) dx = b^3 - 12b</span>.
        "<span class=\"chem\">int_0^b (3x^2 - 12) dx = b^3 - 12b</span>。",
        // EN: Solve <span class="chem">b^3 - 12b = 0</span> and use <span class="chem">b &gt; 2</span>.
        "解 <span class=\"chem\">b^3 - 12b = 0</span> 並使用 <span class=\"chem\">b &gt; 2</span>。",
      ],
      // EN: <p>Decode: area of <span class="chem">P</span> = <span class="chem">-int_0^2 f</span> and area of <span class="chem">Q</span> = <span class="chem">int_2^b f</span>; setting them equal gives <span class="chem">int_0^2 f + int_2^b f = int_0^b f = 0</span>. Now <span class="chem">int_0^b (3x^2 - 12) dx = [x^3 - 12x]_0^b = b^3 - 12b = b(b^2 - 12) = 0</span>. Since <span class="chem">b &gt; 2</span>, <span class="chem">b = sqrt(12) = 2sqrt(3)</span>. (Check: area of <span class="chem">P</span> is <span class="chem">|8 - 24| = 16</span>, and area of <span class="chem">Q</span> is <span class="chem">0 - (8 - 24) = 16</span>.)</p>
      solution: "<p>解碼：<span class=\"chem\">P</span> 的面積 = <span class=\"chem\">-int_0^2 f</span>，<span class=\"chem\">Q</span> 的面積 = <span class=\"chem\">int_2^b f</span>；令兩者相等得 <span class=\"chem\">int_0^2 f + int_2^b f = int_0^b f = 0</span>。現在 <span class=\"chem\">int_0^b (3x^2 - 12) dx = [x^3 - 12x]_0^b = b^3 - 12b = b(b^2 - 12) = 0</span>。由於 <span class=\"chem\">b &gt; 2</span>，<span class=\"chem\">b = sqrt(12) = 2sqrt(3)</span>。（驗算：<span class=\"chem\">P</span> 的面積為 <span class=\"chem\">|8 - 24| = 16</span>，<span class=\"chem\">Q</span> 的面積為 <span class=\"chem\">0 - (8 - 24) = 16</span>。）</p>",
    },

    // ── t5-2-q054 · short · challenge · SL · SL 5.5, 5.10, 5.11 · 10 marks
    "t5-2-q054": {
      // EN: <p>The region <span class="chem">R</span> is enclosed by the curve <span class="chem">y = sin x</span> and the <span class="chem">x</span>-axis, for <span class="chem">0 &lt;= x &lt;= pi</span>.<br>(a) Show that the area of <span class="chem">R</span> is <span class="chem">2</span>. <strong>[2 marks]</strong><br>The line <span class="chem">y = mx</span>, where <span class="chem">0 &lt; m &lt; 1</span>, meets the curve at the origin and at the point where <span class="chem">x = a</span>, with <span class="chem">0 &lt; a &lt; pi</span>.<br>(b) Show that the area of the region enclosed between the curve and the line is <span class="chem">1 - cos a - (a sin a)/2</span>. <strong>[4 marks]</strong><br>(c) The line divides <span class="chem">R</span> into two parts of equal area. Find the value of <span class="chem">a</span> and the value of <span class="chem">m</span>, each correct to 3 significant figures. <strong>[4 marks]</strong></p>
      stem: "<p>區域 <span class=\"chem\">R</span> 由曲線 <span class=\"chem\">y = sin x</span> 與 <span class=\"chem\">x</span> 軸圍成，其中 <span class=\"chem\">0 &lt;= x &lt;= pi</span>。<br>(a) 證明 (Show that) <span class=\"chem\">R</span> 的面積為 <span class=\"chem\">2</span>。<strong>[2 marks]</strong><br>直線 <span class=\"chem\">y = mx</span>（其中 <span class=\"chem\">0 &lt; m &lt; 1</span>）與曲線相交於原點及滿足 <span class=\"chem\">x = a</span> 的點，其中 <span class=\"chem\">0 &lt; a &lt; pi</span>。<br>(b) 證明 (Show that) 曲線與直線之間所圍成區域的面積為 <span class=\"chem\">1 - cos a - (a sin a)/2</span>。<strong>[4 marks]</strong><br>(c) 直線把 <span class=\"chem\">R</span> 分成面積相等的兩部分。求 (Find) <span class=\"chem\">a</span> 的值及 <span class=\"chem\">m</span> 的值，各準確至 3 位有效數字。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: the line cuts <span class="chem">R</span> into a piece between the curve and the line, and a piece under the line plus the rest. “Two parts of equal area” means the piece between the curve and the line has area <span class="chem">1</span>.
        "解碼：直線把 <span class=\"chem\">R</span> 切成兩塊：一塊在曲線與直線之間，另一塊是直線下方的部分加上其餘部分。「面積相等的兩部分」表示曲線與直線之間那一塊的面積為 <span class=\"chem\">1</span>。",
        // EN: For (b), you need two facts: (upper − lower) on <span class="chem">[0, a]</span> is <span class="chem">sin x - mx</span>, and <span class="chem">x = a</span> is on both graphs, so <span class="chem">sin a = ma</span>. Use the second to remove <span class="chem">m</span>.
        "對於 (b)，你需要兩個事實：在 <span class=\"chem\">[0, a]</span> 上（上方 − 下方）是 <span class=\"chem\">sin x - mx</span>，而且 <span class=\"chem\">x = a</span> 同時在兩個圖像上，所以 <span class=\"chem\">sin a = ma</span>。用第二個事實消去 <span class=\"chem\">m</span>。",
        // EN: For (c), solve <span class="chem">cos a + (a sin a)/2 = 0</span> on your GDC (radians) for <span class="chem">0 &lt; a &lt; pi</span>, then <span class="chem">m = (sin a)/a</span>.
        "對於 (c)，在 GDC（弧度）上解 <span class=\"chem\">cos a + (a sin a)/2 = 0</span> 求 <span class=\"chem\">0 &lt; a &lt; pi</span>，然後 <span class=\"chem\">m = (sin a)/a</span>。",
      ],
      // EN: <p>Decode: “equal parts” is a condition on the area between curve and line, which (b) gives as a function of <span class="chem">a</span>; set it to half of (a).<br>(a) <span class="chem">int_0^pi sin x dx = [-cos x]_0^pi = -(-1) - (-1) = 2</span>.<br>(b) On <span class="chem">(0, a)</span>, <span class="chem">sin x &gt; mx</span>, so the area is <span class="chem">int_0^a (sin x - mx) dx = [-cos x - mx^2/2]_0^a = 1 - cos a - ma^2/2</span>. The point <span class="chem">x = a</span> lies on both graphs, so <span class="chem">ma = sin a</span> and <span class="chem">ma^2/2 = (a sin a)/2</span>, giving <span class="chem">1 - cos a - (a sin a)/2</span>.<br>(c) Each part has area <span class="chem">1</span>, so <span class="chem">1 - cos a - (a sin a)/2 = 1</span>, i.e. <span class="chem">cos a + (a sin a)/2 = 0</span>. The GDC gives <span class="chem">a = 2.45871…</span> (the only root in <span class="chem">(0, pi)</span>), so <span class="chem">a = 2.46</span> and <span class="chem">m = sin(2.45871…)/2.45871… = 0.256649… ≈ 0.257</span>.</p>
      solution: "<p>解碼：「相等的兩部分」是關於曲線與直線之間面積的條件，而 (b) 把這面積表示為 <span class=\"chem\">a</span> 的函數；令它等於 (a) 的一半。<br>(a) <span class=\"chem\">int_0^pi sin x dx = [-cos x]_0^pi = -(-1) - (-1) = 2</span>。<br>(b) 在 <span class=\"chem\">(0, a)</span> 上，<span class=\"chem\">sin x &gt; mx</span>，所以面積為 <span class=\"chem\">int_0^a (sin x - mx) dx = [-cos x - mx^2/2]_0^a = 1 - cos a - ma^2/2</span>。點 <span class=\"chem\">x = a</span> 同時在兩個圖像上，所以 <span class=\"chem\">ma = sin a</span> 且 <span class=\"chem\">ma^2/2 = (a sin a)/2</span>，得 <span class=\"chem\">1 - cos a - (a sin a)/2</span>。<br>(c) 每部分的面積為 <span class=\"chem\">1</span>，故 <span class=\"chem\">1 - cos a - (a sin a)/2 = 1</span>，即 <span class=\"chem\">cos a + (a sin a)/2 = 0</span>。GDC 給出 <span class=\"chem\">a = 2.45871…</span>（在 <span class=\"chem\">(0, pi)</span> 內唯一的根），故 <span class=\"chem\">a = 2.46</span> 及 <span class=\"chem\">m = sin(2.45871…)/2.45871… = 0.256649… ≈ 0.257</span>。</p>",
      // EN: <p>(a) <span class="chem">int_0^pi sin x dx = [-cos x]_0^pi = 1 + 1 = 2</span><br>(b) <span class="chem">int_0^a (sin x - mx) dx = 1 - cos a - m a^2/2</span>, and <span class="chem">m a = sin a</span>, giving <span class="chem">1 - cos a - (a sin a)/2</span><br>(c) <span class="chem">a = 2.46</span>, <span class="chem">m = 0.257</span></p>
      answer: "<p>(a) <span class=\"chem\">int_0^pi sin x dx = [-cos x]_0^pi = 1 + 1 = 2</span><br>(b) <span class=\"chem\">int_0^a (sin x - mx) dx = 1 - cos a - m a^2/2</span>，且 <span class=\"chem\">m a = sin a</span>，得 <span class=\"chem\">1 - cos a - (a sin a)/2</span><br>(c) <span class=\"chem\">a = 2.46</span>，<span class=\"chem\">m = 0.257</span></p>",
      markscheme: [
        // EN: M1: <span class="chem">int_0^pi sin x dx = [-cos x]_0^pi</span>.
        "M1：<span class=\"chem\">int_0^pi sin x dx = [-cos x]_0^pi</span>。",
        // EN: A1: <span class="chem">= -cos pi + cos 0 = 1 + 1</span>. AG: area of <span class="chem">R = 2</span>; the given line itself earns no mark.
        "A1：<span class=\"chem\">= -cos pi + cos 0 = 1 + 1</span>。AG：<span class=\"chem\">R = 2</span> 的面積；只寫出已給出的那一行本身不得分。",
        // EN: M1: Area <span class="chem">= int_0^a (sin x - mx) dx</span> (curve above the line on <span class="chem">(0, a)</span>).
        "M1：面積 <span class=\"chem\">= int_0^a (sin x - mx) dx</span>（在 <span class=\"chem\">(0, a)</span> 上曲線位於直線上方）。",
        // EN: A1: <span class="chem">= [-cos x - m x^2/2]_0^a = 1 - cos a - m a^2/2</span>.
        "A1：<span class=\"chem\">= [-cos x - m x^2/2]_0^a = 1 - cos a - m a^2/2</span>。",
        // EN: M1: Uses the intersection condition <span class="chem">sin a = m a</span>, i.e. <span class="chem">m = (sin a)/a</span>.
        "M1：使用交點條件 <span class=\"chem\">sin a = m a</span>，即 <span class=\"chem\">m = (sin a)/a</span>。",
        // EN: A1: Substitutes: <span class="chem">m a^2/2 = (a sin a)/2</span>. AG: area <span class="chem">= 1 - cos a - (a sin a)/2</span>; the given line itself earns no mark.
        "A1：代入：<span class=\"chem\">m a^2/2 = (a sin a)/2</span>。AG：面積 <span class=\"chem\">= 1 - cos a - (a sin a)/2</span>；只寫出已給出的那一行本身不得分。",
        // EN: M1: Equal parts means the region between the curve and the line has area <span class="chem">1</span> (half of 2).
        "M1：相等的兩部分表示曲線與直線之間區域的面積為 <span class=\"chem\">1</span>（2 的一半）。",
        // EN: A1: <span class="chem">1 - cos a - (a sin a)/2 = 1</span>, i.e. <span class="chem">cos a + (a sin a)/2 = 0</span>.
        "A1：<span class=\"chem\">1 - cos a - (a sin a)/2 = 1</span>，即 <span class=\"chem\">cos a + (a sin a)/2 = 0</span>。",
        // EN: A1: <span class="chem">a = 2.46</span> (GDC, 2.4587…).
        "A1：<span class=\"chem\">a = 2.46</span>（GDC，2.4587…）。",
        // EN: A1: <span class="chem">m = (sin a)/a = 0.257</span> (0.25665…).
        "A1：<span class=\"chem\">m = (sin a)/a = 0.257</span>（0.25665…）。",
      ],
    },

    // ── t5-2-q055 · numeric · challenge · SL · SL 5.5, 5.11 · 6 marks
    "t5-2-q055": {
      // EN: <p>A gardener’s flower bed is the region in the first quadrant enclosed by the curve <span class="chem">y = 4 - x^2</span> and the coordinate axes (units in metres). A straight path is to be laid along a vertical line <span class="chem">x = p</span> so that the bed is split into two parts of equal area. Find the value of <span class="chem">p</span>, correct to 3 significant figures.</p>
      stem: "<p>一位園丁的花圃是第一象限內由曲線 <span class=\"chem\">y = 4 - x^2</span> 與坐標軸所圍成的區域（單位為米）。現要沿鉛垂線 <span class=\"chem\">x = p</span> 鋪設一條筆直的小徑，把花圃分成面積相等的兩部分。求 (Find) <span class=\"chem\">p</span> 的值，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: find the whole area first, then find the upper limit <span class="chem">p</span> for which <span class="chem">int_0^p (4 - x^2) dx</span> is half of it. The unknown is a limit of integration.
        "解碼：先求整個面積，再求使 <span class=\"chem\">int_0^p (4 - x^2) dx</span> 等於其一半的上限 <span class=\"chem\">p</span>。未知數是一個積分限。",
        // EN: The whole bed has area <span class="chem">int_0^2 (4 - x^2) dx = 16/3</span>, so you need <span class="chem">int_0^p (4 - x^2) dx = 8/3</span>.
        "整個花圃的面積為 <span class=\"chem\">int_0^2 (4 - x^2) dx = 16/3</span>，所以你需要 <span class=\"chem\">int_0^p (4 - x^2) dx = 8/3</span>。",
        // EN: This gives the cubic <span class="chem">4p - p^3/3 = 8/3</span>, i.e. <span class="chem">p^3 - 12p + 8 = 0</span>. Solve it on your GDC and choose the root with <span class="chem">0 &lt; p &lt; 2</span>.
        "這得出三次方程 <span class=\"chem\">4p - p^3/3 = 8/3</span>，即 <span class=\"chem\">p^3 - 12p + 8 = 0</span>。在 GDC 上解它，並選取滿足 <span class=\"chem\">0 &lt; p &lt; 2</span> 的根。",
      ],
      // EN: <p>Decode: “split into two parts of equal area” by a vertical line means <span class="chem">int_0^p f = (1/2) int_0^2 f</span>. The bed meets the <span class="chem">x</span>-axis at <span class="chem">x = 2</span> and has area <span class="chem">[4x - x^3/3]_0^2 = 8 - 8/3 = 16/3</span>. So <span class="chem">4p - p^3/3 = 8/3</span>, i.e. <span class="chem">p^3 - 12p + 8 = 0</span>. Its roots are about <span class="chem">-3.76</span>, <span class="chem">0.695</span> and <span class="chem">3.06</span>; only <span class="chem">p = 0.69459…</span> lies in <span class="chem">(0, 2)</span>. So <span class="chem">p = 0.695</span> <span class="unit">m</span> (3 s.f.). The path is not at <span class="chem">x = 1</span>, because the bed is taller near the <span class="chem">y</span>-axis.</p>
      solution: "<p>解碼：以鉛垂線「分成面積相等的兩部分」表示 <span class=\"chem\">int_0^p f = (1/2) int_0^2 f</span>。花圃與 <span class=\"chem\">x</span> 軸相交於 <span class=\"chem\">x = 2</span>，面積為 <span class=\"chem\">[4x - x^3/3]_0^2 = 8 - 8/3 = 16/3</span>。故 <span class=\"chem\">4p - p^3/3 = 8/3</span>，即 <span class=\"chem\">p^3 - 12p + 8 = 0</span>。它的根約為 <span class=\"chem\">-3.76</span>、<span class=\"chem\">0.695</span> 及 <span class=\"chem\">3.06</span>；只有 <span class=\"chem\">p = 0.69459…</span> 位於 <span class=\"chem\">(0, 2)</span> 內。故 <span class=\"chem\">p = 0.695</span> <span class=\"unit\">m</span>（3 位有效數字）。小徑不在 <span class=\"chem\">x = 1</span>，因為花圃在靠近 <span class=\"chem\">y</span> 軸處較高。</p>",
    },

    // ── t5-2-q056 · numeric · challenge · SL · SL 5.9, 5.10 · 6 marks
    "t5-2-q056": {
      // EN: <p>Two runners, Ana and Ben, start together from the same point on a long straight track at <span class="chem">t = 0</span> and run in the same direction. Ana’s velocity is <span class="chem">v_A(t) = 2 + sin t</span> <span class="unit">m s-1</span> and Ben’s velocity is <span class="chem">v_B(t) = 0.5t</span> <span class="unit">m s-1</span>, where <span class="chem">t</span> is in seconds. Find the time when the runners are next level with each other. Give your answer correct to 3 significant figures.</p>
      stem: "<p>兩名跑手 Ana 和 Ben 在 <span class=\"chem\">t = 0</span> 時從一條長直跑道上的同一點一同出發，並向同一方向跑。Ana 的速度為 <span class=\"chem\">v_A(t) = 2 + sin t</span> <span class=\"unit\">m s-1</span>，Ben 的速度為 <span class=\"chem\">v_B(t) = 0.5t</span> <span class=\"unit\">m s-1</span>，其中 <span class=\"chem\">t</span> 以秒為單位。求 (Find) 兩名跑手下一次並排的時刻。答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: “level with each other” means equal <strong>displacements</strong> from the start, not equal velocities. Find each displacement by integrating with <span class="chem">s(0) = 0</span>, then solve <span class="chem">s_A(t) = s_B(t)</span> for <span class="chem">t &gt; 0</span>.
        "解碼：「並排」表示相對於起點的<strong>位移</strong>相等，而不是速度相等。利用 <span class=\"chem\">s(0) = 0</span> 積分求出各自的位移，然後解 <span class=\"chem\">s_A(t) = s_B(t)</span> 求 <span class=\"chem\">t &gt; 0</span>。",
        // EN: <span class="chem">s_A(t) = 2t + 1 - cos t</span> (note the constant: <span class="chem">s_A(0) = 0</span> needs the <span class="chem">+1</span>) and <span class="chem">s_B(t) = t^2/4</span>.
        "<span class=\"chem\">s_A(t) = 2t + 1 - cos t</span>（注意常數：<span class=\"chem\">s_A(0) = 0</span> 需要 <span class=\"chem\">+1</span>）及 <span class=\"chem\">s_B(t) = t^2/4</span>。",
        // EN: Graph <span class="chem">y = 2x + 1 - cos x - x^2/4</span> (radians) and find its first zero after <span class="chem">x = 0</span>.
        "繪出 <span class=\"chem\">y = 2x + 1 - cos x - x^2/4</span> 的圖像（弧度），並找出它在 <span class=\"chem\">x = 0</span> 之後的第一個零點。",
      ],
      // EN: <p>Decode: meeting means equal positions. <span class="chem">s_A(t) = int_0^t (2 + sin u) du = 2t - cos t + 1</span> and <span class="chem">s_B(t) = int_0^t 0.5u du = t^2/4</span>. Solve <span class="chem">2t + 1 - cos t = t^2/4</span>. Apart from <span class="chem">t = 0</span>, the GDC gives <span class="chem">t = 8.82786…</span>, so they are level again after <span class="chem">8.83</span> <span class="unit">s</span> (3 s.f.). (Equal velocities, <span class="chem">2 + sin t = 0.5t</span>, happen earlier, at about <span class="chem">t = 3.43</span> s; that is when Ben is furthest behind, not when he catches up.)</p>
      solution: "<p>解碼：相遇表示位置相等。<span class=\"chem\">s_A(t) = int_0^t (2 + sin u) du = 2t - cos t + 1</span> 及 <span class=\"chem\">s_B(t) = int_0^t 0.5u du = t^2/4</span>。解 <span class=\"chem\">2t + 1 - cos t = t^2/4</span>。除了 <span class=\"chem\">t = 0</span> 之外，GDC 給出 <span class=\"chem\">t = 8.82786…</span>，所以他們在 <span class=\"chem\">8.83</span> <span class=\"unit\">s</span> 後再次並排（3 位有效數字）。（速度相等，即 <span class=\"chem\">2 + sin t = 0.5t</span>，發生得較早，約在 <span class=\"chem\">t = 3.43</span> s；那是 Ben 落後最遠的時刻，而不是他追上的時刻。）</p>",
    },

    // ── t5-2-q057 · numeric · challenge · SL · SL 5.5, 5.9 · 5 marks
    "t5-2-q057": {
      // EN: <p>A particle moves in a straight line with velocity <span class="chem">v(t) = 2t - 5 + 3 cos(2t)</span> <span class="unit">m s-1</span>, where <span class="chem">t &gt;= 0</span> is in seconds. Find the distance travelled by the particle during the third second of its motion. Give your answer correct to 3 significant figures.</p>
      stem: "<p>質點沿直線運動，速度為 <span class=\"chem\">v(t) = 2t - 5 + 3 cos(2t)</span> <span class=\"unit\">m s-1</span>，其中 <span class=\"chem\">t &gt;= 0</span> 以秒為單位。求 (Find) 質點在其運動的第三秒內所行的路程。答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: “the third second” is the interval from <span class="chem">t = 2</span> to <span class="chem">t = 3</span> (the first second is <span class="chem">0 &lt;= t &lt;= 1</span>). “Distance travelled” means <span class="chem">int |v| dt</span>.
        "解碼：「第三秒」是由 <span class=\"chem\">t = 2</span> 至 <span class=\"chem\">t = 3</span> 的時段（第一秒是 <span class=\"chem\">0 &lt;= t &lt;= 1</span>）。「所行的路程」是指 <span class=\"chem\">int |v| dt</span>。",
        // EN: Check the sign of <span class="chem">v</span> on <span class="chem">[2, 3]</span> (radians): it changes sign at <span class="chem">t ≈ 2.392</span>.
        "檢查 <span class=\"chem\">v</span> 在 <span class=\"chem\">[2, 3]</span> 上的符號（弧度）：它在 <span class=\"chem\">t ≈ 2.392</span> 處改變符號。",
        // EN: Evaluate <span class="chem">int_2^3 |2t - 5 + 3 cos(2t)| dt</span> on your GDC.
        "在 GDC 上計算 <span class=\"chem\">int_2^3 |2t - 5 + 3 cos(2t)| dt</span>。",
      ],
      // EN: <p>Decode: third second = <span class="chem">[2, 3]</span>, and distance = <span class="chem">int |v|</span>. In radians, <span class="chem">v(2) = -1 + 3 cos 4 ≈ -2.96 &lt; 0</span> and <span class="chem">v(3) = 1 + 3 cos 6 ≈ 3.88 &gt; 0</span>, with a single zero at <span class="chem">t = 2.39217…</span>. So the distance is <span class="chem">int_2^3 |v(t)| dt = 0.59929… + 1.31537… = 1.91466…</span>, i.e. <span class="chem">1.91</span> <span class="unit">m</span> (3 s.f.). The displacement over the same second is only <span class="chem">0.716</span> <span class="unit">m</span>.</p>
      solution: "<p>解碼：第三秒 = <span class=\"chem\">[2, 3]</span>，而路程 = <span class=\"chem\">int |v|</span>。在弧度下，<span class=\"chem\">v(2) = -1 + 3 cos 4 ≈ -2.96 &lt; 0</span> 及 <span class=\"chem\">v(3) = 1 + 3 cos 6 ≈ 3.88 &gt; 0</span>，且在 <span class=\"chem\">t = 2.39217…</span> 處只有一個零點。故路程為 <span class=\"chem\">int_2^3 |v(t)| dt = 0.59929… + 1.31537… = 1.91466…</span>，即 <span class=\"chem\">1.91</span> <span class=\"unit\">m</span>（3 位有效數字）。同一秒內的位移只有 <span class=\"chem\">0.716</span> <span class=\"unit\">m</span>。</p>",
    },

    // ── t5-2-q058 · short · exam · SL · SL 5.5, 5.10 · 9 marks
    "t5-2-q058": {
      // EN: <p>A seedling is planted when it is <span class="chem">5</span> <span class="unit">cm</span> tall. Its height <span class="chem">h</span> <span class="unit">cm</span> after <span class="chem">t</span> weeks grows at the rate <span class="chem">dh/dt = 8/(t + 2) + 0.4 cos t</span>, for <span class="chem">0 &lt;= t &lt;= 10</span>.<br>(a) Find an expression for <span class="chem">h</span> in terms of <span class="chem">t</span>. <strong>[5 marks]</strong><br>(b) Find the height of the seedling after 10 weeks. <strong>[2 marks]</strong><br>(c) Find the time when the seedling is first <span class="chem">15</span> <span class="unit">cm</span> tall. <strong>[2 marks]</strong><br>Give non-exact answers correct to 3 significant figures.</p>
      stem: "<p>一株幼苗在高 <span class=\"chem\">5</span> <span class=\"unit\">cm</span> 時種下。它在 <span class=\"chem\">t</span> 週後的高度 <span class=\"chem\">h</span> <span class=\"unit\">cm</span> 以速率 <span class=\"chem\">dh/dt = 8/(t + 2) + 0.4 cos t</span> 增長，其中 <span class=\"chem\">0 &lt;= t &lt;= 10</span>。<br>(a) 求 (Find) 以 <span class=\"chem\">t</span> 表示 <span class=\"chem\">h</span> 的表達式。<strong>[5 marks]</strong><br>(b) 求 (Find) 幼苗在 10 週後的高度。<strong>[2 marks]</strong><br>(c) 求 (Find) 幼苗第一次高 <span class=\"chem\">15</span> <span class=\"unit\">cm</span> 的時刻。<strong>[2 marks]</strong><br>非準確值的答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: “planted when it is 5 cm tall” is the boundary condition <span class="chem">h(0) = 5</span>. Integrate the rate, then use it to find the constant.
        "解碼：「在高 5 cm 時種下」是邊界條件 <span class=\"chem\">h(0) = 5</span>。先對速率積分，再用它求常數。",
        // EN: <span class="chem">int 8/(t + 2) dt = 8 ln(t + 2)</span> (no modulus needed as <span class="chem">t + 2 &gt; 0</span>) and <span class="chem">int 0.4 cos t dt = 0.4 sin t</span>.
        "<span class=\"chem\">int 8/(t + 2) dt = 8 ln(t + 2)</span>（由於 <span class=\"chem\">t + 2 &gt; 0</span>，不需要絕對值）及 <span class=\"chem\">int 0.4 cos t dt = 0.4 sin t</span>。",
        // EN: For (c), graph <span class="chem">h(t)</span> and <span class="chem">y = 15</span> in radian mode and find the first intersection.
        "對於 (c)，在弧度模式下繪出 <span class=\"chem\">h(t)</span> 及 <span class=\"chem\">y = 15</span> 的圖像，並找出第一個交點。",
      ],
      // EN: <p>(a) <span class="chem">h = int (8/(t + 2) + 0.4 cos t) dt = 8 ln(t + 2) + 0.4 sin t + C</span>. Since <span class="chem">h(0) = 5</span>: <span class="chem">8 ln 2 + 0 + C = 5</span>, so <span class="chem">C = 5 - 8 ln 2</span> and <span class="chem">h = 8 ln(t + 2) + 0.4 sin t + 5 - 8 ln 2</span> (equivalently <span class="chem">8 ln((t + 2)/2) + 0.4 sin t + 5</span>).<br>(b) <span class="chem">h(10) = 8 ln 6 + 0.4 sin 10 + 5 = 14.334… - 0.2176… + 5 = 19.116…</span>, so <span class="chem">19.1</span> <span class="unit">cm</span>.<br>(c) <span class="chem">dh/dt &gt; 0</span> throughout, so <span class="chem">h</span> is increasing and <span class="chem">h(t) = 15</span> has one solution: <span class="chem">t = 5.2810…</span>, i.e. <span class="chem">5.28</span> weeks.</p>
      solution: "<p>(a) <span class=\"chem\">h = int (8/(t + 2) + 0.4 cos t) dt = 8 ln(t + 2) + 0.4 sin t + C</span>。由於 <span class=\"chem\">h(0) = 5</span>：<span class=\"chem\">8 ln 2 + 0 + C = 5</span>，故 <span class=\"chem\">C = 5 - 8 ln 2</span> 及 <span class=\"chem\">h = 8 ln(t + 2) + 0.4 sin t + 5 - 8 ln 2</span>（等價地 <span class=\"chem\">8 ln((t + 2)/2) + 0.4 sin t + 5</span>）。<br>(b) <span class=\"chem\">h(10) = 8 ln 6 + 0.4 sin 10 + 5 = 14.334… - 0.2176… + 5 = 19.116…</span>，故 <span class=\"chem\">19.1</span> <span class=\"unit\">cm</span>。<br>(c) 在整個區間上 <span class=\"chem\">dh/dt &gt; 0</span>，所以 <span class=\"chem\">h</span> 是遞增的，而 <span class=\"chem\">h(t) = 15</span> 只有一個解：<span class=\"chem\">t = 5.2810…</span>，即 <span class=\"chem\">5.28</span> 週。</p>",
      // EN: <p>(a) <span class="chem">h = 8 ln(t + 2) + 0.4 sin t + 5 - 8 ln 2</span><br>(b) <span class="chem">19.1</span> <span class="unit">cm</span><br>(c) <span class="chem">t = 5.28</span> weeks</p>
      answer: "<p>(a) <span class=\"chem\">h = 8 ln(t + 2) + 0.4 sin t + 5 - 8 ln 2</span><br>(b) <span class=\"chem\">19.1</span> <span class=\"unit\">cm</span><br>(c) <span class=\"chem\">t = 5.28</span> 週</p>",
      markscheme: [
        // EN: M1: Integrates <span class="chem">dh/dt</span> term by term.
        "M1：對 <span class=\"chem\">dh/dt</span> 逐項積分。",
        // EN: A1: <span class="chem">8 ln(t + 2)</span>.
        "A1：<span class=\"chem\">8 ln(t + 2)</span>。",
        // EN: A1: <span class="chem">+ 0.4 sin t + C</span>.
        "A1：<span class=\"chem\">+ 0.4 sin t + C</span>。",
        // EN: M1: Uses <span class="chem">h(0) = 5</span>: <span class="chem">8 ln 2 + 0 + C = 5</span>.
        "M1：使用 <span class=\"chem\">h(0) = 5</span>：<span class=\"chem\">8 ln 2 + 0 + C = 5</span>。",
        // EN: A1: <span class="chem">C = 5 - 8 ln 2</span>, so <span class="chem">h = 8 ln(t + 2) + 0.4 sin t + 5 - 8 ln 2</span>.
        "A1：<span class=\"chem\">C = 5 - 8 ln 2</span>，故 <span class=\"chem\">h = 8 ln(t + 2) + 0.4 sin t + 5 - 8 ln 2</span>。",
        // EN: M1: Substitutes <span class="chem">t = 10</span> (radians): <span class="chem">8 ln 12 + 0.4 sin 10 + 5 - 8 ln 2</span>.
        "M1：代入 <span class=\"chem\">t = 10</span>（弧度）：<span class=\"chem\">8 ln 12 + 0.4 sin 10 + 5 - 8 ln 2</span>。",
        // EN: A1: <span class="chem">19.1</span> <span class="unit">cm</span> (19.116…).
        "A1：<span class=\"chem\">19.1</span> <span class=\"unit\">cm</span>（19.116…）。",
        // EN: M1: Solves <span class="chem">h(t) = 15</span> on the GDC.
        "M1：在 GDC 上解 <span class=\"chem\">h(t) = 15</span>。",
        // EN: A1: <span class="chem">t = 5.28</span> weeks.
        "A1：<span class=\"chem\">t = 5.28</span> 週。",
      ],
    },

    // ── t5-2-q059 · numeric · exam · SL · SL 5.5, 5.11 · 5 marks
    "t5-2-q059": {
      // EN: <p>The region <span class="chem">R</span> is enclosed by the curves <span class="chem">y = sqrt(x)</span> and <span class="chem">y = x^2 - 2</span> and the <span class="chem">y</span>-axis. Find the area of <span class="chem">R</span>, correct to 3 significant figures.</p>
      stem: "<p>區域 <span class=\"chem\">R</span> 由曲線 <span class=\"chem\">y = sqrt(x)</span> 與 <span class=\"chem\">y = x^2 - 2</span> 及 <span class=\"chem\">y</span> 軸圍成。求 (Find) <span class=\"chem\">R</span> 的面積，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: the left edge of <span class="chem">R</span> is the <span class="chem">y</span>-axis (<span class="chem">x = 0</span>) and the right edge is where the two curves meet. Part of <span class="chem">R</span> is below the <span class="chem">x</span>-axis, but you still integrate (upper − lower).
        "解碼：<span class=\"chem\">R</span> 的左邊界是 <span class=\"chem\">y</span> 軸（<span class=\"chem\">x = 0</span>），右邊界是兩曲線的交點。<span class=\"chem\">R</span> 有一部分位於 <span class=\"chem\">x</span> 軸下方，但你仍然對（上方 − 下方）積分。",
        // EN: The GDC intersection of <span class="chem">y = sqrt(x)</span> and <span class="chem">y = x^2 - 2</span> is at <span class="chem">x ≈ 1.8312</span>; <span class="chem">sqrt(x)</span> is the upper curve on <span class="chem">(0, 1.8312)</span>.
        "<span class=\"chem\">y = sqrt(x)</span> 與 <span class=\"chem\">y = x^2 - 2</span> 的 GDC 交點在 <span class=\"chem\">x ≈ 1.8312</span>；<span class=\"chem\">sqrt(x)</span> 在 <span class=\"chem\">(0, 1.8312)</span> 上是上方的曲線。",
        // EN: Evaluate <span class="chem">int_0^{1.8312} (sqrt(x) - x^2 + 2) dx</span>.
        "計算 <span class=\"chem\">int_0^{1.8312} (sqrt(x) - x^2 + 2) dx</span>。",
      ],
      // EN: <p>The curves meet (for <span class="chem">x &gt;= 0</span>) at <span class="chem">x = c = 1.83117…</span>. On <span class="chem">[0, c]</span>, <span class="chem">sqrt(x) &gt;= x^2 - 2</span> (e.g. at <span class="chem">x = 0</span>: <span class="chem">0 &gt; -2</span>). Area <span class="chem">= int_0^c (sqrt(x) - (x^2 - 2)) dx = 3.26755…</span>, i.e. <span class="chem">3.27</span> (3 s.f.). Splitting at the <span class="chem">x</span>-axis is unnecessary: the integrand (upper − lower) is never negative.</p>
      solution: "<p>兩曲線（當 <span class=\"chem\">x &gt;= 0</span> 時）相交於 <span class=\"chem\">x = c = 1.83117…</span>。在 <span class=\"chem\">[0, c]</span> 上，<span class=\"chem\">sqrt(x) &gt;= x^2 - 2</span>（例如在 <span class=\"chem\">x = 0</span> 處：<span class=\"chem\">0 &gt; -2</span>）。面積 <span class=\"chem\">= int_0^c (sqrt(x) - (x^2 - 2)) dx = 3.26755…</span>，即 <span class=\"chem\">3.27</span>（3 位有效數字）。不必在 <span class=\"chem\">x</span> 軸處分拆：被積函數（上方 − 下方）永不為負。</p>",
    },

  }
});
