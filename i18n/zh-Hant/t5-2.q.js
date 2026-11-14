/* t5-2.q — zh-Hant question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't5-2.q', {
  questions: {

    // ── t5-2-q001 · mcq · foundation · SL · SL 5.5 · 4 marks
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

    // ── t5-2-q002 · numeric · foundation · SL · SL 5.5 · 5 marks
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

    // ── t5-2-q003 · mcq · foundation · SL · SL 5.10 · 4 marks
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
        // EN (option B): The derivative of the denominator 2x² + 3 is 4x, not x, so 8x = 2(4x) gives a leading factor of 2, not 8.
        "1": "分母 2x² + 3 的導數是 4x，而非 x，故 8x = 2(4x) 給出的前置係數是 2，而非 8。",
        // EN (option C): You cannot integrate the numerator 8x while leaving the denominator unchanged.
        "2": "不能只對分子 8x 積分而保持分母不變。",
        // EN (option D): You used a power-rule form instead of recognizing the g'(x)/g(x) logarithmic pattern.
        "3": "你套用了冪法則形式，而未辨識出 g'(x)/g(x) 對數模式。",
      },
    },

    // ── t5-2-q004 · numeric · foundation · SL · SL 5.5 · 4 marks
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

    // ── t5-2-q005 · numeric · exam · SL · SL 5.5 · 5 marks
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

    // ── t5-2-q006 · mcq · exam · SL · SL 5.10 · 5 marks
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
        // EN (option D): You differentiated (ln x)²/x instead of integrating it.
        "3": "你對 (ln x)²/x 求導而非積分。",
      },
    },

    // ── t5-2-q007 · multi · exam · SL · SL 5.11 · 5 marks
    "t5-2-q007": {
      // EN: <p>A continuous function <span class="chem">y = f(x)</span> satisfies <span class="chem">f(x) &gt;= 0</span> on <span class="chem">[0, 2]</span> and <span class="chem">f(x) &lt;= 0</span> on <span class="chem">[2, 5]</span>. The geometric area between the curve and the <span class="chem">x</span>-axis on <span class="chem">[0, 2]</span> is <span class="chem">5</span>, and the geometric area between the curve and the <span class="chem">x</span>-axis on <span class="chem">[2, 5]</span> is <span class="chem">8</span>. Select <strong>all</strong> true statements.</p>
      stem: "<p>連續函數 <span class=\"chem\">y = f(x)</span> 在 <span class=\"chem\">[0, 2]</span> 上滿足 <span class=\"chem\">f(x) &gt;= 0</span>，在 <span class=\"chem\">[2, 5]</span> 上滿足 <span class=\"chem\">f(x) &lt;= 0</span>。曲線與 <span class=\"chem\">x</span> 軸在 <span class=\"chem\">[0, 2]</span> 上所圍成的幾何面積為 <span class=\"chem\">5</span>，而曲線與 <span class=\"chem\">x</span> 軸在 <span class=\"chem\">[2, 5]</span> 上所圍成的幾何面積為 <span class=\"chem\">8</span>。選出<strong>所有</strong>正確的陳述。</p>",
      options: [
        // EN: <span class="chem">int_0^5 f(x) dx = -3</span>
        "<span class=\"chem\">int_0^5 f(x) dx = -3</span>",
        // EN: <span class=\"chem">int_0^5 |f(x)| dx = 13</span>
        "<span class=\"chem\">int_0^5 |f(x)| dx = 13</span>",
        // EN: <span class=\"chem">int_5^2 f(x) dx = 8</span>
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
        // EN: Make sure your GDC is in <strong>radian mode</strong> and enter <span class="mono">fnInt(abs(4*sin(t) - t + 1), t, 0, 4)</span>.
        "確保你的 GDC 處於<strong>弧度模式 (radian mode)</strong>，並輸入 <span class=\"mono\">fnInt(abs(4*sin(t) - t + 1), t, 0, 4)</span>。",
      ],
      // EN: <p>In radian mode on a GDC, <span class="chem">d = int_0^4 |4 sin(t) - t + 1| dt ≈ 10.728...</span>, which rounds to <span class="chem">10.7</span> <span class="unit">m</span> (3 s.f.). (Note: the net displacement is only <span class="chem">int_0^4 v(t) dt ≈ 2.61</span> <span class="unit">m</span> because <span class="chem">v(t)</span> turns negative around <span class="chem">t ≈ 2.74</span> <span class="unit">s</span>.)</p>
      solution: "<p>在 GDC 的弧度模式下，<span class=\"chem\">d = int_0^4 |4 sin(t) - t + 1| dt ≈ 10.728...</span>，捨入為 <span class=\"chem\">10.7</span> <span class=\"unit\">m</span>（3 位有效數字）。（註：淨位移僅為 <span class=\"chem\">int_0^4 v(t) dt ≈ 2.61</span> <span class=\"unit\">m</span>，因 <span class=\"chem\">v(t)</span> 在約 <span class=\"chem\">t ≈ 2.74</span> <span class=\"unit\">s</span> 處轉負。）</p>",
    },

    // ── t5-2-q012 · mcq · exam · SL · SL 5.9 · 5 marks
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

    // ── t5-2-q013 · short · exam · SL · SL 5.5, 5.10 · 6 marks
    "t5-2-q013": {
      // EN: <p>(a) Differentiate <span class="chem">F(x) = x e^{2x}</span> with respect to <span class="chem">x</span>. <strong>[2 marks]</strong><br>(b) Hence find <span class="chem">int x e^{2x} dx</span>, and evaluate <span class="chem">int_0^1 x e^{2x} dx</span> in exact form. <strong>[4 marks]</strong></p>
      stem: "<p>(a) 求 <span class=\"chem\">F(x) = x e^{2x}</span> 關於 <span class=\"chem\">x</span> 的導數。<strong>[2 marks]</strong><br>(b) 由此求 (Hence find) <span class=\"chem\">int x e^{2x} dx</span>，並以準確值形式計算 (evaluate) <span class=\"chem\">int_0^1 x e^{2x} dx</span>。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: For part (a), use the product rule with <span class="chem">u = x</span> and <span class="chem">v = e^{2x}</span>.
        "對於 (a) 部，使用乘積法則，其中 <span class=\"chem\">u = x</span> 及 <span class=\"chem\">v = e^{2x}</span>。",
        // EN: For part (b), “Hence” means integrate both sides of <span class="chem">d/dx(x e^{2x}) = e^{2x} + 2x e^{2x}</span> and isolate <span class=\"chem">int x e^{2x} dx</span>.
        "對於 (b) 部，「由此 (Hence)」代表對 <span class=\"chem\">d/dx(x e^{2x}) = e^{2x} + 2x e^{2x}</span> 兩邊積分，再分離出 <span class=\"chem\">int x e^{2x} dx</span>。",
      ],
      // EN: <p>(a) By the product rule, <span class="chem">F'(x) = e^{2x} + 2x e^{2x}</span>.<br>(b) Integrating both sides gives <span class="chem">x e^{2x} = int e^{2x} dx + 2 int x e^{2x} dx = (1/2)e^{2x} + 2 int x e^{2x} dx</span> (up to a constant). Solving for the integral gives <span class="chem">int x e^{2x} dx = (1/2)x e^{2x} - (1/4)e^{2x} + C</span>. Evaluating from <span class="chem">0</span> to <span class="chem">1</span>: <span class="chem">[((2x - 1)/4)e^{2x}]_0^1 = (1/4)e^2 - (-1/4)e^0 = (e^2 + 1)/4</span>.</p>
      solution: "<p>(a) 由乘積法則，<span class=\"chem\">F'(x) = e^{2x} + 2x e^{2x}</span>。<br>(b) 兩邊積分得 <span class=\"chem\">x e^{2x} = int e^{2x} dx + 2 int x e^{2x} dx = (1/2)e^{2x} + 2 int x e^{2x} dx</span>（差一常數）。解出該積分得 <span class=\"chem\">int x e^{2x} dx = (1/2)x e^{2x} - (1/4)e^{2x} + C</span>。由 <span class=\"chem\">0</span> 積分至 <span class=\"chem\">1</span>：<span class=\"chem\">[((2x - 1)/4)e^{2x}]_0^1 = (1/4)e^2 - (-1/4)e^0 = (e^2 + 1)/4</span>。</p>",
      // EN: <p>(a) <span class="chem">F'(x) = (2x + 1)e^{2x}</span><br>(b) <span class="chem">int x e^{2x} dx = (1/2)x e^{2x} - (1/4)e^{2x} + C</span>; <span class="chem">int_0^1 x e^{2x} dx = (e^2 + 1) / 4</span></p>
      answer: "<p>(a) <span class=\"chem\">F'(x) = (2x + 1)e^{2x}</span><br>(b) <span class=\"chem\">int x e^{2x} dx = (1/2)x e^{2x} - (1/4)e^{2x} + C</span>；<span class=\"chem\">int_0^1 x e^{2x} dx = (e^2 + 1) / 4</span></p>",
      markscheme: [
        // EN: M1 A1: Apply the product rule to get <span class="chem">F'(x) = 1 * e^{2x} + x(2e^{2x}) = e^{2x} + 2x e^{2x}</span>.
        "M1 A1：套用乘積法則得 <span class=\"chem\">F'(x) = 1 * e^{2x} + x(2e^{2x}) = e^{2x} + 2x e^{2x}</span>。",
        // EN: M1: Integrate both sides of part (a): <span class="chem">x e^{2x} = int e^{2x} dx + 2 int x e^{2x} dx</span>.
        "M1：對 (a) 部兩邊積分：<span class=\"chem\">x e^{2x} = int e^{2x} dx + 2 int x e^{2x} dx</span>。",
        // EN: A1: Rearrange to obtain <span class="chem">int x e^{2x} dx = (1/2) x e^{2x} - (1/4) e^{2x} + C</span>.
        "A1：移項整理得 <span class=\"chem\">int x e^{2x} dx = (1/2) x e^{2x} - (1/4) e^{2x} + C</span>。",
        // EN: M1 A1: Substitute limits <span class="chem">0</span> and <span class="chem">1</span>: <span class="chem">((1/2)e^2 - (1/4)e^2) - (0 - 1/4) = (e^2 + 1) / 4</span>.
        "M1 A1：代入上下限 <span class=\"chem\">0</span> 與 <span class=\"chem\">1</span>：<span class=\"chem\">((1/2)e^2 - (1/4)e^2) - (0 - 1/4) = (e^2 + 1) / 4</span>。",
      ],
    },

    // ── t5-2-q014 · numeric · challenge · SL · SL 5.5, 5.11 · 6 marks
    "t5-2-q014": {
      // EN: <p>The finite region enclosed between the curve <span class="chem">y = k x (4 - x)</span> (where <span class="chem">k &gt; 0</span>) and the <span class="chem">x</span>-axis has an area of <span class="chem">32</span> square units. Find the value of <span class="chem">k</span>.</p>
      stem: "<p>曲線 <span class=\"chem\">y = k x (4 - x)</span>（其中 <span class=\"chem\">k &gt; 0</span>）與 <span class=\"chem\">x</span> 軸之間所圍成的有限區域面積為 <span class=\"chem\">32</span> 平方單位。求 (Find) <span class=\"chem\">k</span> 的值。</p>",
      hints: [
        // EN: The curve crosses the <span class="chem">x</span>-axis at <span class="chem">x = 0</span> and <span class="chem">x = 4</span>, and lies above the <span class="chem">x</span>-axis on <span class="chem">[0, 4]</span> since <span class="chem">k &gt; 0</span>.
        "曲線在 <span class=\"chem\">x = 0</span> 與 <span class=\"chem\">x = 4</span> 處穿過 <span class=\"chem\">x</span> 軸，且因 <span class=\"chem\">k &gt; 0</span> 在 <span class=\"chem\">[0, 4]</span> 上位於 <span class=\"chem\">x</span> 軸上方。",
        // EN: Set <span class="chem">k int_0^4 (4x - x^2) dx = 32</span> and solve for <span class="chem">k</span>.
        "令 <span class=\"chem\">k int_0^4 (4x - x^2) dx = 32</span> 並解出 <span class=\"chem\">k</span>。",
      ],
      // EN: <p>Since <span class="chem">k &gt; 0</span>, <span class="chem">y &gt;= 0</span> on <span class="chem">[0, 4]</span>. The area is <span class="chem">int_0^4 k(4x - x^2) dx = k[2x^2 - x^3/3]_0^4 = k(32 - 64/3) = (32/3)k</span>. Setting <span class="chem">(32/3)k = 32</span> gives <span class="chem">k = 3</span>.</p>
      solution: "<p>由於 <span class=\"chem\">k &gt; 0</span>，在 <span class=\"chem\">[0, 4]</span> 上 <span class=\"chem\">y &gt;= 0</span>。面積為 <span class=\"chem\">int_0^4 k(4x - x^2) dx = k[2x^2 - x^3/3]_0^4 = k(32 - 64/3) = (32/3)k</span>。令 <span class=\"chem\">(32/3)k = 32</span> 得 <span class=\"chem\">k = 3</span>。</p>",
    },

    // ── t5-2-q015 · mcq · challenge · SL · SL 5.5, 5.10 · 5 marks
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

    // ── t5-2-q016 · numeric · challenge · SL · SL 5.11 · 6 marks
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
        // EN: M1 A1: Integrate <span class="chem">a(t)</span> and use <span class="chem">v(0) = 0</span> (“starts from rest”) to obtain <span class="chem">v(t) = 3t^2 - 12t</span>.
        "M1 A1：對 <span class=\"chem\">a(t)</span> 積分並利用 <span class=\"chem\">v(0) = 0</span>（「從靜止出發」）求得 <span class=\"chem\">v(t) = 3t^2 - 12t</span>。",
        // EN: M1 A1: Integrate <span class="chem">v(t)</span> and use <span class="chem">s(0) = 2</span> to obtain <span class="chem">s(t) = t^3 - 6t^2 + 2</span>.
        "M1 A1：對 <span class=\"chem\">v(t)</span> 積分並利用 <span class=\"chem\">s(0) = 2</span> 求得 <span class=\"chem\">s(t) = t^3 - 6t^2 + 2</span>。",
        // EN: M1: Solve <span class="chem">v(t) = 3t(t - 4) = 0</span> to find the turning time <span class="chem">t = 4</span> <span class="unit">s</span> in <span class="chem">(0, 5)</span>.
        "M1：解 <span class=\"chem\">v(t) = 3t(t - 4) = 0</span> 找出 <span class=\"chem\">(0, 5)</span> 內的轉向時刻 <span class=\"chem\">t = 4</span> <span class=\"unit\">s</span>。",
        // EN: M1 A1: Evaluate <span class="chem">s(0) = 2</span>, <span class="chem">s(4) = -30</span>, <span class="chem">s(5) = -23</span> (or split the integral at <span class="chem">t = 4</span>) to get <span class="chem">d = |-30 - 2| + |-23 - (-30)| = 32 + 7 = 39</span> <span class="unit">m</span>.
        "M1 A1：計算 <span class=\"chem\">s(0) = 2</span>、<span class=\"chem\">s(4) = -30</span>、<span class=\"chem\">s(5) = -23</span>（或在 <span class=\"chem\">t = 4</span> 處分拆積分）得 <span class=\"chem\">d = |-30 - 2| + |-23 - (-30)| = 32 + 7 = 39</span> <span class=\"unit\">m</span>。",
      ],
    },

  }
});
