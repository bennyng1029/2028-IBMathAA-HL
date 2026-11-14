/* t5-1.q — ko question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't5-1.q', {
  questions: {

    // ── t5-1-q001 · mcq · foundation · SL · SL 5.3, 5.6 · 3 marks
    "t5-1-q001": {
      // EN: <p>Let <span class="chem">f(x) = 6 sqrt(x) - 4 / x^2 + 5</span> for <span class="chem">x &gt; 0</span>. Find <span class="chem">f'(x)</span>.</p>
      stem: "<p><span class=\"chem\">x &gt; 0</span>에서 <span class=\"chem\">f(x) = 6 sqrt(x) - 4 / x^2 + 5</span>일 때, <span class=\"chem\">f'(x)</span>를 구하시오 (Find).</p>",
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
        "먼저 각 항을 유리수 또는 음수 지수로 고쳐 쓰세요: <span class=\"chem\">f(x) = 6x^{1/2} - 4x^{-2} + 5</span>.",
        // EN: Apply the power rule <span class="chem">d/dx (x^n) = n x^{n-1}</span> to each term and remember that a standalone constant differentiates to <span class="chem">0</span>.
        "각 항에 거듭제곱 미분 <span class=\"chem\">d/dx (x^n) = n x^{n-1}</span>을 적용하고, 상수항은 미분하면 <span class=\"chem\">0</span>이 됨을 기억하세요.",
      ],
      // EN: <p>Rewrite in index form: <span class="chem">f(x) = 6x^{1/2} - 4x^{-2} + 5</span>. Differentiating term by term gives <span class="chem">f'(x) = 6(1/2)x^{-1/2} - 4(-2)x^{-3} + 0 = 3 / sqrt(x) + 8 / x^3</span>.</p>
      solution: "<p>지수 꼴로 고치면 <span class=\"chem\">f(x) = 6x^{1/2} - 4x^{-2} + 5</span>예요. 항별로 미분하면 <span class=\"chem\">f'(x) = 6(1/2)x^{-1/2} - 4(-2)x^{-3} + 0 = 3 / sqrt(x) + 8 / x^3</span>이에요.</p>",
      misconception: {
        // EN (option B): When differentiating −4x⁻², multiplying −4 by the negative exponent −2 gives +8x⁻³, not −8x⁻³.
        "1": "−4x⁻²를 미분할 때 −4에 음수 지수 −2를 곱하면 −8x⁻³이 아니라 +8x⁻³이 돼요.",
        // EN (option C): Subtracting 1 from the exponent 1/2 gives −1/2 (so x⁻¹/² = 1/√x), and the derivative of the constant +5 is 0.
        "2": "지수 1/2에서 1을 빼면 −1/2 (즉 x⁻¹/² = 1/√x)이 되고, 상수 +5를 미분하면 0이에요.",
        // EN (option D): Rewrite −4/x² as −4x⁻² before differentiating; you cannot differentiate the denominator x² by itself.
        "3": "미분하기 전에 −4/x²을 −4x⁻²로 고쳐 써야 해요. 분모 x²만 따로 미분할 수는 없어요.",
      },
    },

    // ── t5-1-q002 · numeric · foundation · SL · SL 5.4 · 4 marks
    "t5-1-q002": {
      // EN: <p>Consider the curve <span class="chem">y = x^3 - 5x^2 + 8x - 1</span>. The normal to the curve at <span class="chem">x = 1</span> has equation <span class="chem">y = m x + c</span>. Find the value of <span class="chem">c</span>.</p>
      stem: "<p>곡선 <span class=\"chem\">y = x^3 - 5x^2 + 8x - 1</span> 위의 <span class=\"chem\">x = 1</span>인 점에서의 법선의 방정식이 <span class=\"chem\">y = m x + c</span>일 때, <span class=\"chem\">c</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: First find the <span class="chem">y</span>-coordinate at <span class="chem">x = 1</span> and evaluate the derivative <span class="chem">dy/dx = 3x^2 - 10x + 8</span> at <span class="chem">x = 1</span>.
        "먼저 <span class=\"chem\">x = 1</span>에서의 <span class=\"chem\">y</span>좌표를 구하고, 도함수 <span class=\"chem\">dy/dx = 3x^2 - 10x + 8</span>의 <span class=\"chem\">x = 1</span>에서의 값을 계산하세요.",
        // EN: Take the negative reciprocal <span class="chem">m_N = -1 / m_T</span> and substitute <span class="chem">(1, 3)</span> into <span class="chem">y - y_1 = m_N(x - 1)</span>.
        "음의 역수 <span class=\"chem\">m_N = -1 / m_T</span>를 취한 뒤 <span class=\"chem\">y - y_1 = m_N(x - 1)</span>에 <span class=\"chem\">(1, 3)</span>을 대입하세요.",
      ],
      // EN: <p>At <span class="chem">x = 1</span>, <span class="chem">y(1) = 1 - 5 + 8 - 1 = 3</span>. Differentiating gives <span class="chem">dy/dx = 3x^2 - 10x + 8</span>, so <span class="chem">m_T = 3 - 10 + 8 = 1</span> and the normal gradient is <span class="chem">m_N = -1 / 1 = -1</span>. Thus the normal is <span class="chem">y - 3 = -1(x - 1) =&gt; y = -x + 4</span>, giving <span class="chem">c = 4</span>.</p>
      solution: "<p><span class=\"chem\">x = 1</span>일 때 <span class=\"chem\">y(1) = 1 - 5 + 8 - 1 = 3</span>이에요. 미분하면 <span class=\"chem\">dy/dx = 3x^2 - 10x + 8</span>이므로 <span class=\"chem\">m_T = 3 - 10 + 8 = 1</span>이고 법선의 기울기는 <span class=\"chem\">m_N = -1 / 1 = -1</span>이에요. 따라서 법선은 <span class=\"chem\">y - 3 = -1(x - 1) =&gt; y = -x + 4</span>이므로 <span class=\"chem\">c = 4</span>예요.</p>",
    },

    // ── t5-1-q003 · mcq · foundation · SL · SL 5.6 · 2 marks
    "t5-1-q003": {
      // EN: <p>Find the derivative of <span class="chem">f(x) = ln(3x^2 + 5)</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = ln(3x^2 + 5)</span>의 도함수를 구하시오 (Find).</p>",
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
        "<span class=\"chem\">u = 3x^2 + 5</span>로 두고 <span class=\"chem\">f(x) = ln(u)</span>에 연쇄법칙을 쓰세요.",
        // EN: Since <span class="chem">d/du (ln u) = 1/u</span> and <span class="chem">du/dx = 6x</span>, multiply them together.
        "<span class=\"chem\">d/du (ln u) = 1/u</span>이고 <span class=\"chem\">du/dx = 6x</span>이므로 둘을 곱하세요.",
      ],
      // EN: <p>By the chain rule, <span class="chem">f'(x) = (1 / (3x^2 + 5)) * d/dx(3x^2 + 5) = 6x / (3x^2 + 5)</span>.</p>
      solution: "<p>연쇄법칙에 의해 <span class=\"chem\">f'(x) = (1 / (3x^2 + 5)) * d/dx(3x^2 + 5) = 6x / (3x^2 + 5)</span>이에요.</p>",
      misconception: {
        // EN (option B): You differentiated the outer function ln(u) to 1/u, but forgot to multiply by the derivative of the inner function u' = 6x (chain rule).
        "1": "겉함수 ln(u)를 1/u로 미분했지만, 속함수의 미분 u' = 6x를 곱하는 것(연쇄법칙)을 빠뜨렸어요.",
        // EN (option C): The denominator of d/dx[ln(u)] is the entire inner function u = 3x² + 5, not its derivative.
        "2": "d/dx[ln(u)]의 분모는 미분한 값이 아니라 속함수 전체 u = 3x² + 5예요.",
        // EN (option D): The derivative of ln(u) is u'/u, not u' ln(u).
        "3": "ln(u)의 도함수는 u' ln(u)가 아니라 u'/u예요.",
      },
    },

    // ── t5-1-q004 · numeric · foundation · SL · SL 5.6 · 3 marks
    "t5-1-q004": {
      // EN: <p>Let <span class="chem">f(x) = x^2 e^{3x}</span>. The derivative <span class="chem">f'(x)</span> can be written in the form <span class="chem">x e^{3x}(a x + b)</span>, where <span class="chem">a</span> and <span class="chem">b</span> are integers. Find the value of <span class="chem">b</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = x^2 e^{3x}</span>일 때, 도함수 <span class=\"chem\">f'(x)</span>는 <span class=\"chem\">x e^{3x}(a x + b)</span> 꼴로 나타낼 수 있어요. 여기서 <span class=\"chem\">a</span>와 <span class=\"chem\">b</span>는 정수예요. <span class=\"chem\">b</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Use the product rule <span class="chem">(u v)' = u v' + v u'</span> with <span class="chem">u = x^2</span> and <span class="chem">v = e^{3x}</span>.
        "<span class=\"chem\">u = x^2</span>, <span class=\"chem\">v = e^{3x}</span>로 두고 곱의 미분법 <span class=\"chem\">(u v)' = u v' + v u'</span>을 쓰세요.",
        // EN: Remember the chain rule when differentiating <span class="chem">e^{3x}</span>: <span class="chem">v' = 3e^{3x}</span>. Then factor out <span class="chem">x e^{3x}</span>.
        "<span class=\"chem\">e^{3x}</span>를 미분할 때 연쇄법칙 <span class=\"chem\">v' = 3e^{3x}</span>를 잊지 마세요. 그런 다음 <span class=\"chem\">x e^{3x}</span>를 묶어 내세요.",
      ],
      // EN: <p>By the product rule, <span class="chem">f'(x) = x^2(3e^{3x}) + e^{3x}(2x) = x e^{3x}(3x + 2)</span>. Comparing with <span class="chem">x e^{3x}(a x + b)</span> gives <span class="chem">a = 3</span> and <span class="chem">b = 2</span>.</p>
      solution: "<p>곱의 미분법에 의해 <span class=\"chem\">f'(x) = x^2(3e^{3x}) + e^{3x}(2x) = x e^{3x}(3x + 2)</span>예요. <span class=\"chem\">x e^{3x}(a x + b)</span>와 비교하면 <span class=\"chem\">a = 3</span>, <span class=\"chem\">b = 2</span>예요.</p>",
    },

    // ── t5-1-q005 · mcq · exam · SL · SL 5.6 · 5 marks
    "t5-1-q005": {
      // EN: <p>Consider <span class="chem">f(x) = cos(2x) / e^x</span>. Which expression equals <span class="chem">f'(x)</span>?</p>
      stem: "<p><span class=\"chem\">f(x) = cos(2x) / e^x</span>일 때, <span class=\"chem\">f'(x)</span>와 같은 식은 어느 것인가요?</p>",
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
        "<span class=\"chem\">u = cos(2x)</span> (<span class=\"chem\">u' = -2 sin(2x)</span>), <span class=\"chem\">v = e^x</span> (<span class=\"chem\">v' = e^x</span>)로 두고 몫의 미분법을 적용하세요.",
        // EN: Factor out <span class="chem">e^x</span> in the numerator and cancel with one factor of <span class="chem">e^x</span> in <span class="chem">(e^x)^2</span>.
        "분자에서 <span class=\"chem\">e^x</span>를 묶어 내고 <span class=\"chem\">(e^x)^2</span>의 <span class=\"chem\">e^x</span> 하나와 약분하세요.",
      ],
      // EN: <p>Using the quotient rule: <span class="chem">f'(x) = (e^x(-2 sin(2x)) - cos(2x)(e^x)) / (e^x)^2 = -(2 sin(2x) + cos(2x)) / e^x</span>.</p>
      solution: "<p>몫의 미분법을 쓰면 <span class=\"chem\">f'(x) = (e^x(-2 sin(2x)) - cos(2x)(e^x)) / (e^x)^2 = -(2 sin(2x) + cos(2x)) / e^x</span>예요.</p>",
      misconception: {
        // EN (option B): The derivative of cos(2x) is −2 sin(2x) (with a minus sign), not +2 sin(2x).
        "1": "cos(2x)의 도함수는 +2 sin(2x)가 아니라 −2 sin(2x) (마이너스 부호)예요.",
        // EN (option C): You cannot differentiate the numerator and denominator separately; you must apply the quotient rule (v u' − u v') / v².
        "2": "분자와 분모를 따로 미분할 수 없어요. 반드시 몫의 미분법 (v u' − u v') / v²을 적용해야 해요.",
        // EN (option D): By the chain rule, d/dx[cos(2x)] = −2 sin(2x), and you can cancel one factor of e^x from numerator and denominator.
        "3": "연쇄법칙에 의해 d/dx[cos(2x)] = −2 sin(2x)이고, 분자·분모에서 e^x 하나를 약분할 수 있어요.",
      },
    },

    // ── t5-1-q006 · numeric · exam · SL · SL 5.4 · 6 marks
    "t5-1-q006": {
      // EN: <p>The tangent to the curve <span class="chem">f(x) = k x^2 + 3x - 2</span> at the point where <span class="chem">x = 2</span> is parallel to the line <span class="chem">y = 11x - 5</span>. Find the value of <span class="chem">k</span>.</p>
      stem: "<p>곡선 <span class=\"chem\">f(x) = k x^2 + 3x - 2</span> 위의 <span class=\"chem\">x = 2</span>인 점에서의 접선이 직선 <span class=\"chem\">y = 11x - 5</span>와 평행해요. <span class=\"chem\">k</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Parallel lines have the same gradient, so the tangent gradient at <span class="chem">x = 2</span> is <span class="chem">f'(2) = 11</span>.
        "평행한 직선은 기울기가 같으므로 <span class=\"chem\">x = 2</span>에서의 접선의 기울기는 <span class=\"chem\">f'(2) = 11</span>이에요.",
        // EN: Differentiate <span class="chem">f(x)</span> to get <span class="chem">f'(x) = 2k x + 3</span>, substitute <span class="chem">x = 2</span>, and solve <span class="chem">4k + 3 = 11</span>.
        "<span class=\"chem\">f(x)</span>를 미분해 <span class=\"chem\">f'(x) = 2k x + 3</span>을 구하고 <span class=\"chem\">x = 2</span>를 대입해 <span class=\"chem\">4k + 3 = 11</span>을 푸세요.",
      ],
      // EN: <p>Since the tangent at <span class="chem">x = 2</span> is parallel to <span class="chem">y = 11x - 5</span>, we have <span class="chem">f'(2) = 11</span>. Differentiating gives <span class="chem">f'(x) = 2k x + 3</span>, so <span class="chem">f'(2) = 4k + 3 = 11 =&gt; 4k = 8 =&gt; k = 2</span>.</p>
      solution: "<p><span class=\"chem\">x = 2</span>에서의 접선이 <span class=\"chem\">y = 11x - 5</span>와 평행하므로 <span class=\"chem\">f'(2) = 11</span>이에요. 미분하면 <span class=\"chem\">f'(x) = 2k x + 3</span>이므로 <span class=\"chem\">f'(2) = 4k + 3 = 11 =&gt; 4k = 8 =&gt; k = 2</span>예요.</p>",
    },

    // ── t5-1-q007 · multi · exam · SL · SL 5.2, 5.8 · 5 marks
    "t5-1-q007": {
      // EN: <p>A twice-differentiable function <span class="chem">y = f(x)</span> has derivative <span class="chem">f'(x) = (x + 2)^2 (x - 3)</span>. Select <strong>all</strong> true statements about the graph of <span class="chem">y = f(x)</span>.</p>
      stem: "<p>두 번 미분 가능한 함수 <span class=\"chem\">y = f(x)</span>의 도함수가 <span class=\"chem\">f'(x) = (x + 2)^2 (x - 3)</span>이에요. <span class=\"chem\">y = f(x)</span>의 그래프에 대한 설명으로 옳은 것을 <strong>모두</strong> 고르시오.</p>",
      options: [
        // EN: <span class="chem">f(x)</span> has a stationary point of inflexion at <span class="chem">x = -2</span>.
        "<span class=\"chem\">f(x)</span>는 <span class=\"chem\">x = -2</span>에서 정류 변곡점을 갖는다.",
        // EN: <span class="chem">f(x)</span> has a local minimum at <span class="chem">x = 3</span>.
        "<span class=\"chem\">f(x)</span>는 <span class=\"chem\">x = 3</span>에서 극솟값을 갖는다.",
        // EN: <span class="chem">f(x)</span> is increasing on the interval <span class="chem">-2 &lt; x &lt; 3</span>.
        "<span class=\"chem\">f(x)</span>는 구간 <span class=\"chem\">-2 &lt; x &lt; 3</span>에서 증가한다.",
        // EN: <span class="chem">f(x)</span> has a local maximum at <span class="chem">x = -2</span>.
        "<span class=\"chem\">f(x)</span>는 <span class=\"chem\">x = -2</span>에서 극댓값을 갖는다.",
      ],
      hints: [
        // EN: Find the sign of <span class="chem">f'(x) = (x + 2)^2 (x - 3)</span> in the three intervals <span class="chem">x &lt; -2</span>, <span class="chem">-2 &lt; x &lt; 3</span>, and <span class="chem">x &gt; 3</span>.
        "세 구간 <span class=\"chem\">x &lt; -2</span>, <span class=\"chem\">-2 &lt; x &lt; 3</span>, <span class=\"chem\">x &gt; 3</span>에서 <span class=\"chem\">f'(x) = (x + 2)^2 (x - 3)</span>의 부호를 조사하세요.",
        // EN: Notice that <span class="chem">(x + 2)^2 &gt;= 0</span> for all <span class="chem">x</span>, so the sign of <span class="chem">f'(x)</span> is controlled by <span class="chem">(x - 3)</span>.
        "모든 <span class=\"chem\">x</span>에 대해 <span class=\"chem\">(x + 2)^2 &gt;= 0</span>이므로 <span class=\"chem\">f'(x)</span>의 부호는 <span class=\"chem\">(x - 3)</span>이 결정해요.",
      ],
      // EN: <p>The roots of <span class="chem">f'(x) = 0</span> are <span class="chem">x = -2</span> and <span class="chem">x = 3</span>. Because <span class="chem">(x + 2)^2 &gt; 0</span> for all <span class="chem">x != -2</span>, <span class="chem">f'(x) &lt; 0</span> for <span class="chem">x &lt; -2</span> and for <span class="chem">-2 &lt; x &lt; 3</span>, while <span class="chem">f'(x) &gt; 0</span> for <span class="chem">x &gt; 3</span>. Thus <span class="chem">x = -2</span> is a stationary point of inflexion (sign <span class="chem">- -&gt; 0 -&gt; -</span>) and <span class="chem">x = 3</span> is a local minimum (sign <span class="chem">- -&gt; 0 -&gt; +</span>).</p>
      solution: "<p><span class=\"chem\">f'(x) = 0</span>의 근은 <span class=\"chem\">x = -2</span>와 <span class=\"chem\">x = 3</span>이에요. <span class=\"chem\">x != -2</span>인 모든 x에 대해 <span class=\"chem\">(x + 2)^2 &gt; 0</span>이므로 <span class=\"chem\">x &lt; -2</span>와 <span class=\"chem\">-2 &lt; x &lt; 3</span>에서 <span class=\"chem\">f'(x) &lt; 0</span>이고, <span class=\"chem\">x &gt; 3</span>에서 <span class=\"chem\">f'(x) &gt; 0</span>이에요. 따라서 <span class=\"chem\">x = -2</span>는 정류 변곡점(부호 <span class=\"chem\">- -&gt; 0 -&gt; -</span>)이고 <span class=\"chem\">x = 3</span>은 극솟값(부호 <span class=\"chem\">- -&gt; 0 -&gt; +</span>)이에요.</p>",
      misconception: {
        // EN (option C): For x < 3 (with x ≠ −2), (x + 2)² > 0 and (x − 3) < 0, so f'(x) < 0 and f(x) is decreasing on −2 < x < 3.
        "2": "x < 3 (x ≠ −2)에서 (x + 2)² > 0이고 (x − 3) < 0이므로 f'(x) < 0, 즉 f(x)는 −2 < x < 3에서 감소해요.",
        // EN (option D): At x = −2, the factor (x + 2)² is squared, so f'(x) does not change sign (it goes from − to 0 to −). That makes x = −2 a stationary point of inflexion, not a local maximum.
        "3": "x = −2에서 인수 (x + 2)²이 제곱되어 있으므로 f'(x)의 부호가 바뀌지 않아요 (−에서 0을 거쳐 −). 따라서 x = −2는 극댓값이 아니라 정류 변곡점이에요.",
      },
    },

    // ── t5-1-q008 · mcq · exam · SL · SL 5.7 · 5 marks
    "t5-1-q008": {
      // EN: <p>An exam question displays the graph of the <strong>derivative</strong> <span class="chem">y = f'(x)</span> for <span class="chem">-3 &lt;= x &lt;= 5</span>. The graph of <span class="chem">f'(x)</span> crosses the <span class="chem">x</span>-axis at <span class="chem">x = -1</span> and <span class="chem">x = 4</span>, and has a local maximum turning point at <span class="chem">(1.5, 6)</span>. At which value of <span class="chem">x</span> does the original curve <span class="chem">y = f(x)</span> have a point of inflexion?</p>
      stem: "<p>시험 문제에 <span class=\"chem\">-3 &lt;= x &lt;= 5</span>에서 <strong>도함수</strong> <span class=\"chem\">y = f'(x)</span>의 그래프가 주어졌어요. <span class=\"chem\">f'(x)</span>의 그래프는 <span class=\"chem\">x = -1</span>과 <span class=\"chem\">x = 4</span>에서 <span class=\"chem\">x</span>축을 지나고, <span class=\"chem\">(1.5, 6)</span>에서 극대인 극점을 가져요. 원래 곡선 <span class=\"chem\">y = f(x)</span>는 어떤 <span class=\"chem\">x</span> 값에서 변곡점을 갖나요?</p>",
      options: [
        // EN: <span class="chem">x = 1.5</span>
        "<span class=\"chem\">x = 1.5</span>",
        // EN: <span class="chem">x = -1</span> and <span class="chem">x = 4</span>
        "<span class=\"chem\">x = -1</span>과 <span class=\"chem\">x = 4</span>",
        // EN: <span class="chem">x = 6</span>
        "<span class=\"chem\">x = 6</span>",
        // EN: Where the graph of <span class="chem">f'(x)</span> is concave down
        "<span class=\"chem\">f'(x)</span>의 그래프가 위로 볼록한 곳",
      ],
      hints: [
        // EN: A point of inflexion of <span class="chem">f(x)</span> occurs where <span class="chem">f''(x) = 0</span> and <span class="chem">f''(x)</span> changes sign.
        "<span class=\"chem\">f(x)</span>의 변곡점은 <span class=\"chem\">f''(x) = 0</span>이고 <span class=\"chem\">f''(x)</span>의 부호가 바뀌는 곳이에요.",
        // EN: Since <span class="chem">f''(x)</span> is the gradient of <span class="chem">f'(x)</span>, where on the graph of <span class="chem">y = f'(x)</span> does its gradient equal zero and change sign?
        "<span class=\"chem\">f''(x)</span>는 <span class=\"chem\">f'(x)</span>의 기울기이므로 <span class=\"chem\">y = f'(x)</span> 그래프의 어디에서 기울기가 0이 되고 부호가 바뀔까요?",
      ],
      // EN: <p>A point of inflexion on <span class="chem">y = f(x)</span> occurs where <span class="chem">f''(x) = 0</span> and changes sign. Since <span class="chem">f''(x)</span> is the derivative of <span class="chem">f'(x)</span>, this corresponds to a local maximum or minimum (turning point) on the graph of <span class="chem">y = f'(x)</span>, which is at <span class="chem">x = 1.5</span>.</p>
      solution: "<p><span class=\"chem\">y = f(x)</span>의 변곡점은 <span class=\"chem\">f''(x) = 0</span>이고 부호가 바뀌는 곳이에요. <span class=\"chem\">f''(x)</span>는 <span class=\"chem\">f'(x)</span>의 도함수이므로 <span class=\"chem\">y = f'(x)</span> 그래프의 극대 또는 극소(극점)에 해당하며, 이는 <span class=\"chem\">x = 1.5</span>예요.</p>",
      misconception: {
        // EN (option B): x = −1 and x = 4 are the x-intercepts of f'(x), where f'(x) = 0 and changes sign; those are the local extrema (turning points) of f(x), not its points of inflexion.
        "1": "x = −1과 x = 4는 f'(x)의 x절편으로 f'(x) = 0이고 부호가 바뀌는 곳이에요. 이는 f(x)의 변곡점이 아니라 극점(극대·극소)이에요.",
        // EN (option C): y = 6 is the maximum value of the gradient f'(1.5), not an x-coordinate.
        "2": "y = 6은 기울기 f'(1.5)의 최댓값이지 x좌표가 아니에요.",
        // EN (option D): A point of inflexion of f(x) occurs at a specific x-value where f''(x) = 0 and changes sign—which is a turning point (local max or min) of the graph of f'(x).
        "3": "f(x)의 변곡점은 f''(x) = 0이고 부호가 바뀌는 특정 x값에서 발생하며, 이는 f'(x) 그래프의 극점(극대 또는 극소)이에요.",
      },
    },

    // ── t5-1-q009 · numeric · exam · SL · SL 5.7, 5.8 · 6 marks
    "t5-1-q009": {
      // EN: <p>Let <span class="chem">f(x) = x e^{-x}</span> for <span class="chem">x in R</span>. Find the <span class="chem">x</span>-coordinate of the point of inflexion on the graph of <span class="chem">f</span>.</p>
      stem: "<p><span class=\"chem\">x in R</span>에서 <span class=\"chem\">f(x) = x e^{-x}</span>일 때, <span class=\"chem\">f</span>의 그래프 위의 변곡점의 <span class=\"chem\">x</span>좌표를 구하시오 (Find).</p>",
      hints: [
        // EN: Use the product rule to find <span class="chem">f'(x) = e^{-x} - x e^{-x} = (1 - x)e^{-x}</span>.
        "곱의 미분법으로 <span class=\"chem\">f'(x) = e^{-x} - x e^{-x} = (1 - x)e^{-x}</span>을 구하세요.",
        // EN: Differentiate a second time to find <span class="chem">f''(x)</span>, factor out <span class="chem">e^{-x}</span>, and solve <span class="chem">f''(x) = 0</span>.
        "한 번 더 미분해 <span class=\"chem\">f''(x)</span>를 구하고 <span class=\"chem\">e^{-x}</span>를 묶어 낸 뒤 <span class=\"chem\">f''(x) = 0</span>을 푸세요.",
      ],
      // EN: <p>First derivative: <span class="chem">f'(x) = (1)e^{-x} + x(-e^{-x}) = (1 - x)e^{-x}</span>.<br>Second derivative: <span class="chem">f''(x) = (-1)e^{-x} + (1 - x)(-e^{-x}) = (x - 2)e^{-x}</span>.<br>Since <span class="chem">e^{-x} &gt; 0</span> for all <span class="chem">x</span>, <span class="chem">f''(x) = 0 &lt;=&gt; x = 2</span>, and <span class="chem">f''(x)</span> changes sign from negative (<span class="chem">x &lt; 2</span>) to positive (<span class="chem">x &gt; 2</span>) at <span class="chem">x = 2</span>.</p>
      solution: "<p>일계도함수: <span class=\"chem\">f'(x) = (1)e^{-x} + x(-e^{-x}) = (1 - x)e^{-x}</span>.<br>이계도함수: <span class=\"chem\">f''(x) = (-1)e^{-x} + (1 - x)(-e^{-x}) = (x - 2)e^{-x}</span>.<br>모든 <span class=\"chem\">x</span>에 대해 <span class=\"chem\">e^{-x} &gt; 0</span>이므로 <span class=\"chem\">f''(x) = 0 &lt;=&gt; x = 2</span>이고, <span class=\"chem\">x = 2</span>에서 <span class=\"chem\">f''(x)</span>가 음수(<span class=\"chem\">x &lt; 2</span>)에서 양수(<span class=\"chem\">x &gt; 2</span>)로 바뀌어요.</p>",
    },

    // ── t5-1-q010 · order · exam · SL · SL 5.8 · 4 marks
    "t5-1-q010": {
      // EN: <p>Arrange the steps in the correct logical order to find and justify the minimum surface area of a closed cylinder of fixed volume <span class="chem">V = 128 pi</span> <span class="unit">cm3</span>.</p>
      stem: "<p>부피가 <span class=\"chem\">V = 128 pi</span> <span class=\"unit\">cm3</span>로 고정된 닫힌 원기둥의 최소 겉넓이를 구하고 정당화하는 단계를 올바른 논리적 순서로 배열하시오.</p>",
      options: [
        // EN: Use the volume constraint <span class="chem">pi r^2 h = 128 pi</span> to write <span class="chem">h = 128 / r^2</span>.
        "부피 제약 식 <span class=\"chem\">pi r^2 h = 128 pi</span>를 이용해 <span class=\"chem\">h = 128 / r^2</span>로 나타낸다.",
        // EN: Substitute <span class="chem">h = 128 / r^2</span> into <span class="chem">A = 2 pi r^2 + 2 pi r h</span> to obtain <span class="chem">A(r) = 2 pi r^2 + 256 pi r^{-1}</span>.
        "<span class=\"chem\">h = 128 / r^2</span>를 <span class=\"chem\">A = 2 pi r^2 + 2 pi r h</span>에 대입해 <span class=\"chem\">A(r) = 2 pi r^2 + 256 pi r^{-1}</span>을 얻는다.",
        // EN: Differentiate with respect to <span class="chem">r</span> and solve <span class="chem">A'(r) = 4 pi r - 256 pi r^{-2} = 0</span> to find <span class="chem">r = 4</span> <span class="unit">cm</span>.
        "<span class=\"chem\">r</span>에 대해 미분하고 <span class=\"chem\">A'(r) = 4 pi r - 256 pi r^{-2} = 0</span>을 풀어 <span class=\"chem\">r = 4</span> <span class=\"unit\">cm</span>를 구한다.",
        // EN: Evaluate <span class="chem">A''(4) = 4 pi + 512 pi / 4^3 = 12 pi &gt; 0</span> to justify a minimum, then compute <span class="chem">A(4) = 96 pi</span> <span class="unit">cm2</span>.
        "<span class=\"chem\">A''(4) = 4 pi + 512 pi / 4^3 = 12 pi &gt; 0</span>을 계산해 최솟값임을 정당화한 뒤 <span class=\"chem\">A(4) = 96 pi</span> <span class=\"unit\">cm2</span>를 구한다.",
      ],
      hints: [
        // EN: Start by isolating the second variable <span class="chem">h</span> from the constraint equation before substituting into the objective function <span class="chem">A</span>.
        "목적함수 <span class=\"chem\">A</span>에 대입하기 전에 먼저 제약 식에서 두 번째 변수 <span class=\"chem\">h</span>를 정리하세요.",
        // EN: Differentiate the single-variable function <span class="chem">A(r)</span> to find the stationary point <span class="chem">r = 4</span>, and finish with the second-derivative justification and minimum value.
        "일변수 함수 <span class=\"chem\">A(r)</span>을 미분해 정류점 <span class=\"chem\">r = 4</span>를 구한 뒤, 이계도함수 정당화와 최솟값 계산으로 마무리하세요.",
      ],
      // EN: <p>In any optimization problem: (1) isolate the second variable from the constraint, (2) substitute into the objective function to get one variable, (3) solve <span class="chem">A'(r) = 0</span>, and (4) verify <span class="chem">A''(r) &gt; 0</span> and evaluate the minimum value.</p>
      solution: "<p>모든 최적화 문제에서는 (1) 제약 식에서 두 번째 변수를 정리하고, (2) 목적함수에 대입해 일변수로 만든 뒤, (3) <span class=\"chem\">A'(r) = 0</span>을 풀고, (4) <span class=\"chem\">A''(r) &gt; 0</span>을 확인하여 최솟값을 구해요.</p>",
    },

    // ── t5-1-q011 · numeric · exam · SL · SL 5.8 · 6 marks
    "t5-1-q011": {
      // EN: <p>A closed cylindrical can has radius <span class="chem">r</span> <span class="unit">cm</span>, height <span class="chem">h</span> <span class="unit">cm</span>, and fixed volume <span class="chem">500</span> <span class="unit">cm3</span>. Calculate the value of <span class="chem">r</span> (in <span class="unit">cm</span>, to 3 s.f.) that minimizes the total external surface area <span class="chem">A = 2 pi r^2 + 2 pi r h</span>.</p>
      stem: "<p>닫힌 원기둥 모양 캔의 반지름이 <span class=\"chem\">r</span> <span class=\"unit\">cm</span>, 높이가 <span class=\"chem\">h</span> <span class=\"unit\">cm</span>이고 부피가 <span class=\"chem\">500</span> <span class=\"unit\">cm3</span>로 고정되어 있어요. 전체 바깥 겉넓이 <span class=\"chem\">A = 2 pi r^2 + 2 pi r h</span>를 최소화하는 <span class=\"chem\">r</span>의 값(<span class=\"unit\">cm</span> 단위, 유효숫자 3자리)을 계산하시오 (Calculate).</p>",
      hints: [
        // EN: From <span class="chem">pi r^2 h = 500</span>, substitute <span class="chem">h = 500 / (pi r^2)</span> into <span class="chem">A</span> to get <span class="chem">A(r) = 2 pi r^2 + 1000 / r</span>.
        "<span class=\"chem\">pi r^2 h = 500</span>에서 <span class=\"chem\">h = 500 / (pi r^2)</span>를 <span class=\"chem\">A</span>에 대입해 <span class=\"chem\">A(r) = 2 pi r^2 + 1000 / r</span>을 얻으세요.",
        // EN: Solve <span class="chem">A'(r) = 4 pi r - 1000 / r^2 = 0 =&gt; r^3 = 250 / pi</span>.
        "<span class=\"chem\">A'(r) = 4 pi r - 1000 / r^2 = 0 =&gt; r^3 = 250 / pi</span>를 푸세요.",
      ],
      // EN: <p>Substituting <span class="chem">h = 500 / (pi r^2)</span> gives <span class="chem">A(r) = 2 pi r^2 + 1000 r^{-1}</span>. Setting <span class="chem">A'(r) = 4 pi r - 1000 r^{-2} = 0</span> gives <span class="chem">r^3 = 250 / pi ≈ 79.5775</span>, so <span class="chem">r = (250 / pi)^{1/3} ≈ 4.30</span> <span class="unit">cm</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">h = 500 / (pi r^2)</span>를 대입하면 <span class=\"chem\">A(r) = 2 pi r^2 + 1000 r^{-1}</span>이에요. <span class=\"chem\">A'(r) = 4 pi r - 1000 r^{-2} = 0</span>으로 놓으면 <span class=\"chem\">r^3 = 250 / pi ≈ 79.5775</span>이므로 <span class=\"chem\">r = (250 / pi)^{1/3} ≈ 4.30</span> <span class=\"unit\">cm</span> (유효숫자 3자리)예요.</p>",
    },

    // ── t5-1-q012 · numeric · exam · SL · SL 5.6, 5.8 · 6 marks
    "t5-1-q012": {
      // EN: <p>Consider <span class="chem">f(x) = (ln x) / x</span> for <span class="chem">x &gt; 0</span>. Find the maximum value of <span class="chem">f(x)</span>. Give your answer correct to 3 significant figures (the exact value is in terms of <span class="chem">e</span>).</p>
      stem: "<p><span class=\"chem\">x &gt; 0</span>에서 <span class=\"chem\">f(x) = (ln x) / x</span>일 때, <span class=\"chem\">f(x)</span>의 최댓값을 구하시오 (Find). 답은 유효숫자 3자리로 쓰세요 (정확한 값은 <span class=\"chem\">e</span>를 사용해 나타내요).</p>",
      hints: [
        // EN: Differentiate using the quotient rule: <span class="chem">f'(x) = (x(1/x) - (ln x)(1)) / x^2 = (1 - ln x) / x^2</span>.
        "몫의 미분법으로 미분하세요: <span class=\"chem\">f'(x) = (x(1/x) - (ln x)(1)) / x^2 = (1 - ln x) / x^2</span>.",
        // EN: Set <span class="chem">f'(x) = 0</span> to find <span class="chem">ln x = 1 =&gt; x = e</span>, then evaluate <span class="chem">f(e) = (ln e) / e = 1 / e ≈ 0.368</span>.
        "<span class=\"chem\">f'(x) = 0</span>으로 놓아 <span class=\"chem\">ln x = 1 =&gt; x = e</span>를 구한 뒤 <span class=\"chem\">f(e) = (ln e) / e = 1 / e ≈ 0.368</span>을 계산하세요.",
      ],
      // EN: <p>By the quotient rule, <span class="chem">f'(x) = (1 - ln x) / x^2 = 0 =&gt; ln x = 1 =&gt; x = e</span>. For <span class="chem">0 &lt; x &lt; e</span>, <span class="chem">f'(x) &gt; 0</span>, and for <span class="chem">x &gt; e</span>, <span class="chem">f'(x) &lt; 0</span>, confirming a global maximum. The maximum value is <span class="chem">f(e) = 1 / e ≈ 0.368</span> (3 s.f.).</p>
      solution: "<p>몫의 미분법에 의해 <span class=\"chem\">f'(x) = (1 - ln x) / x^2 = 0 =&gt; ln x = 1 =&gt; x = e</span>예요. <span class=\"chem\">0 &lt; x &lt; e</span>에서 <span class=\"chem\">f'(x) &gt; 0</span>, <span class=\"chem\">x &gt; e</span>에서 <span class=\"chem\">f'(x) &lt; 0</span>이므로 전역 최댓값이에요. 최댓값은 <span class=\"chem\">f(e) = 1 / e ≈ 0.368</span> (유효숫자 3자리)예요.</p>",
    },

    // ── t5-1-q013 · short · exam · SL · SL 5.7, 5.8 · 7 marks
    "t5-1-q013": {
      // EN: <p>Let <span class="chem">f(x) = x^3 - 3x^2 - 9x + 11</span> for <span class="chem">x in R</span>.<br>(a) Find the coordinates of the two stationary points on the graph of <span class="chem">f</span>, and determine the nature of each point using the second derivative. <strong>[5 marks]</strong><br>(b) Find the coordinates of the point of inflexion and state the set of values of <span class="chem">x</span> for which the graph of <span class="chem">f</span> is concave down. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">x in R</span>에서 <span class=\"chem\">f(x) = x^3 - 3x^2 - 9x + 11</span>이라 하자.<br>(a) <span class=\"chem\">f</span>의 그래프 위의 두 정류점의 좌표를 구하고 (Find), 이계도함수를 이용해 각 점의 성질을 판별하시오 (determine). <strong>[5 marks]</strong><br>(b) 변곡점의 좌표를 구하고 (Find), <span class=\"chem\">f</span>의 그래프가 위로 볼록한 <span class=\"chem\">x</span>의 값의 범위를 답하시오 (state). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: For part (a), factor <span class="chem">3x^2 - 6x - 9 = 0</span> by dividing through by <span class="chem">3</span> first.
        "(a)에서는 먼저 <span class=\"chem\">3</span>으로 나누어 <span class=\"chem\">3x^2 - 6x - 9 = 0</span>을 인수분해하세요.",
        // EN: For part (b), solve <span class="chem">f''(x) &lt; 0</span> for concave down.
        "(b)에서는 위로 볼록한 구간을 찾기 위해 <span class=\"chem\">f''(x) &lt; 0</span>을 푸세요.",
      ],
      // EN: <p>(a) <span class="chem">f'(x) = 3x^2 - 6x - 9 = 3(x - 3)(x + 1) = 0 =&gt; x = -1, 3</span>. Substituting into <span class="chem">f(x)</span> gives <span class="chem">f(-1) = -1 - 3 + 9 + 11 = 16</span> and <span class="chem">f(3) = 27 - 27 - 27 + 11 = -16</span>. Using <span class="chem">f''(x) = 6x - 6</span>, <span class="chem">f''(-1) = -12 &lt; 0</span> (local maximum at <span class="chem">(-1, 16)</span>) and <span class="chem">f''(3) = 12 &gt; 0</span> (local minimum at <span class="chem">(3, -16)</span>).<br>(b) <span class="chem">f''(x) = 6x - 6 = 0 =&gt; x = 1</span>, <span class="chem">f(1) = 1 - 3 - 9 + 11 = 0</span>, and <span class="chem">f''(x)</span> changes sign at <span class="chem">x = 1</span>, so the point of inflexion is <span class="chem">(1, 0)</span>. Since <span class="chem">6x - 6 &lt; 0 &lt;=&gt; x &lt; 1</span>, <span class="chem">f</span> is concave down for <span class="chem">x &lt; 1</span>.</p>
      solution: "<p>(a) <span class=\"chem\">f'(x) = 3x^2 - 6x - 9 = 3(x - 3)(x + 1) = 0 =&gt; x = -1, 3</span>이에요. <span class=\"chem\">f(x)</span>에 대입하면 <span class=\"chem\">f(-1) = -1 - 3 + 9 + 11 = 16</span>, <span class=\"chem\">f(3) = 27 - 27 - 27 + 11 = -16</span>이에요. <span class=\"chem\">f''(x) = 6x - 6</span>을 쓰면 <span class=\"chem\">f''(-1) = -12 &lt; 0</span> (<span class=\"chem\">(-1, 16)</span>에서 극대)이고 <span class=\"chem\">f''(3) = 12 &gt; 0</span> (<span class=\"chem\">(3, -16)</span>에서 극소)이에요.<br>(b) <span class=\"chem\">f''(x) = 6x - 6 = 0 =&gt; x = 1</span>이고 <span class=\"chem\">f(1) = 1 - 3 - 9 + 11 = 0</span>이며 <span class=\"chem\">x = 1</span>에서 <span class=\"chem\">f''(x)</span>의 부호가 바뀌므로 변곡점은 <span class=\"chem\">(1, 0)</span>이에요. <span class=\"chem\">6x - 6 &lt; 0 &lt;=&gt; x &lt; 1</span>이므로 <span class=\"chem\">f</span>는 <span class=\"chem\">x &lt; 1</span>에서 위로 볼록해요.</p>",
      // EN: <p>(a) Local maximum at <span class="chem">(-1, 16)</span>; local minimum at <span class="chem">(3, -16)</span>.<br>(b) Point of inflexion at <span class="chem">(1, 0)</span>; concave down for <span class="chem">x &lt; 1</span>.</p>
      answer: "<p>(a) 극댓값 <span class=\"chem\">(-1, 16)</span>; 극솟값 <span class=\"chem\">(3, -16)</span>.<br>(b) 변곡점 <span class=\"chem\">(1, 0)</span>; <span class=\"chem\">x &lt; 1</span>에서 위로 볼록.</p>",
      markscheme: [
        // EN: M1: Differentiate: <span class="chem">f'(x) = 3x^2 - 6x - 9</span>.
        "M1: 미분함: <span class=\"chem\">f'(x) = 3x^2 - 6x - 9</span>.",
        // EN: A1: Solve <span class="chem">f'(x) = 3(x - 3)(x + 1) = 0</span> to get <span class="chem">x = -1</span> and <span class="chem">x = 3</span>.
        "A1: <span class=\"chem\">f'(x) = 3(x - 3)(x + 1) = 0</span>을 풀어 <span class=\"chem\">x = -1</span>과 <span class=\"chem\">x = 3</span>을 구함.",
        // EN: A1: Find both stationary points: <span class="chem">(-1, 16)</span> and <span class="chem">(3, -16)</span>.
        "A1: 두 정류점 <span class=\"chem\">(-1, 16)</span>과 <span class=\"chem\">(3, -16)</span>을 구함.",
        // EN: M1: Find <span class="chem">f''(x) = 6x - 6</span> and evaluate it at both stationary points.
        "M1: <span class=\"chem\">f''(x) = 6x - 6</span>을 구하고 두 정류점에서 값을 계산함.",
        // EN: R1: Since <span class="chem">f''(-1) = -12 &lt; 0</span>, <span class="chem">(-1, 16)</span> is a local maximum, and since <span class="chem">f''(3) = 12 &gt; 0</span>, <span class="chem">(3, -16)</span> is a local minimum.
        "R1: <span class=\"chem\">f''(-1) = -12 &lt; 0</span>이므로 <span class=\"chem\">(-1, 16)</span>은 극대, <span class=\"chem\">f''(3) = 12 &gt; 0</span>이므로 <span class=\"chem\">(3, -16)</span>은 극소임.",
        // EN: A1: Solve <span class="chem">f''(x) = 6x - 6 = 0 =&gt; x = 1</span>, giving point of inflexion <span class="chem">(1, 0)</span>.
        "A1: <span class=\"chem\">f''(x) = 6x - 6 = 0 =&gt; x = 1</span>을 풀어 변곡점 <span class=\"chem\">(1, 0)</span>을 구함.",
        // EN: A1: State that <span class="chem">f</span> is concave down (<span class="chem">f''(x) &lt; 0</span>) for <span class="chem">x &lt; 1</span>.
        "A1: <span class=\"chem\">x &lt; 1</span>에서 <span class=\"chem\">f</span>가 위로 볼록함(<span class=\"chem\">f''(x) &lt; 0</span>)을 답함.",
      ],
    },

    // ── t5-1-q014 · numeric · challenge · SL · SL 5.4 · 7 marks
    "t5-1-q014": {
      // EN: <p>A tangent to the parabola <span class="chem">y = x^2 + 5</span> at a point <span class="chem">P(a, a^2 + 5)</span> in the first quadrant (<span class="chem">a &gt; 0</span>) passes through the point <span class="chem">(0, -4)</span>. Find the value of <span class="chem">a</span>.</p>
      stem: "<p>제1사분면(<span class=\"chem\">a &gt; 0</span>)에 있는 포물선 <span class=\"chem\">y = x^2 + 5</span> 위의 점 <span class=\"chem\">P(a, a^2 + 5)</span>에서 그은 접선이 점 <span class=\"chem\">(0, -4)</span>를 지나요. <span class=\"chem\">a</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: At <span class="chem">P(a, a^2 + 5)</span>, the gradient of the tangent is <span class="chem">dy/dx = 2a</span>, so the tangent equation is <span class="chem">y - (a^2 + 5) = 2a(x - a)</span>.
        "<span class=\"chem\">P(a, a^2 + 5)</span>에서 접선의 기울기는 <span class=\"chem\">dy/dx = 2a</span>이므로 접선의 방정식은 <span class=\"chem\">y - (a^2 + 5) = 2a(x - a)</span>예요.",
        // EN: Substitute the external point <span class="chem">(x, y) = (0, -4)</span> into the tangent equation and solve for <span class="chem">a &gt; 0</span>.
        "접선의 방정식에 곡선 밖의 점 <span class=\"chem\">(x, y) = (0, -4)</span>를 대입해 <span class=\"chem\">a &gt; 0</span>을 구하세요.",
      ],
      // EN: <p>At <span class="chem">P(a, a^2 + 5)</span>, <span class="chem">m_T = 2a</span>, so the tangent line is <span class="chem">y - (a^2 + 5) = 2a(x - a) =&gt; y = 2a x - a^2 + 5</span>. Since it passes through <span class="chem">(0, -4)</span>, substituting <span class="chem">x = 0, y = -4</span> gives <span class="chem">-4 = -a^2 + 5 =&gt; a^2 = 9</span>. Since <span class="chem">a &gt; 0</span>, <span class="chem">a = 3</span>.</p>
      solution: "<p><span class=\"chem\">P(a, a^2 + 5)</span>에서 <span class=\"chem\">m_T = 2a</span>이므로 접선은 <span class=\"chem\">y - (a^2 + 5) = 2a(x - a) =&gt; y = 2a x - a^2 + 5</span>예요. 이 직선이 <span class=\"chem\">(0, -4)</span>를 지나므로 <span class=\"chem\">x = 0, y = -4</span>를 대입하면 <span class=\"chem\">-4 = -a^2 + 5 =&gt; a^2 = 9</span>예요. <span class=\"chem\">a &gt; 0</span>이므로 <span class=\"chem\">a = 3</span>이에요.</p>",
    },

    // ── t5-1-q015 · mcq · exam · SL · SL 5.6 · 4 marks
    "t5-1-q015": {
      // EN: <p>Given the table of values at <span class="chem">x = 2</span> and <span class="chem">x = 5</span>:<br><span class="chem">g(2) = 5, g'(2) = -3, f(2) = 4, f'(2) = 7, f(5) = -1, f'(5) = 6</span>.<br>If <span class="chem">h(x) = f(g(x))</span>, find <span class="chem">h'(2)</span>.</p>
      stem: "<p><span class=\"chem\">x = 2</span>와 <span class=\"chem\">x = 5</span>에서의 함숫값과 미분계수가 다음과 같아요:<br><span class=\"chem\">g(2) = 5, g'(2) = -3, f(2) = 4, f'(2) = 7, f(5) = -1, f'(5) = 6</span>.<br><span class=\"chem\">h(x) = f(g(x))</span>일 때, <span class=\"chem\">h'(2)</span>를 구하시오 (Find).</p>",
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
        "연쇄법칙을 정확히 적으세요: <span class=\"chem\">h'(x) = f'(g(x)) * g'(x)</span>.",
        // EN: At <span class="chem">x = 2</span>, <span class="chem">h'(2) = f'(g(2)) * g'(2)</span>. Look up <span class="chem">g(2) = 5</span> first, then find <span class="chem">f'(5)</span>.
        "<span class=\"chem\">x = 2</span>에서 <span class=\"chem\">h'(2) = f'(g(2)) * g'(2)</span>예요. 먼저 <span class=\"chem\">g(2) = 5</span>를 찾은 뒤 <span class=\"chem\">f'(5)</span>를 찾으세요.",
      ],
      // EN: <p>By the chain rule, <span class="chem">h'(2) = f'(g(2)) * g'(2) = f'(5) * (-3) = 6 * (-3) = -18</span>.</p>
      solution: "<p>연쇄법칙에 의해 <span class=\"chem\">h'(2) = f'(g(2)) * g'(2) = f'(5) * (-3) = 6 * (-3) = -18</span>이에요.</p>",
      misconception: {
        // EN (option B): −21 comes from computing f'(2) × g'(2) = 7 × (−3). In the chain rule h'(2) = f'(g(2)) · g'(2), f' must be evaluated at g(2) = 5, not at 2!
        "1": "−21은 f'(2) × g'(2) = 7 × (−3)을 계산한 값이에요. 연쇄법칙 h'(2) = f'(g(2)) · g'(2)에서는 f'을 2가 아니라 g(2) = 5에서 계산해야 해요!",
        // EN (option C): 42 comes from multiplying f'(2) × f'(5) = 7 × 6 instead of f'(g(2)) × g'(2).
        "2": "42는 f'(g(2)) × g'(2)가 아니라 f'(2) × f'(5) = 7 × 6을 곱한 값이에요.",
        // EN (option D): 15 comes from multiplying g(2) × (−g'(2)); use h'(2) = f'(g(2)) · g'(2).
        "3": "15는 g(2) × (−g'(2))를 곱한 값이에요. h'(2) = f'(g(2)) · g'(2)를 쓰세요.",
      },
    },

    // ── t5-1-q016 · short · challenge · SL · SL 5.8 · 8 marks
    "t5-1-q016": {
      // EN: <p>A lifeguard is at point <span class="chem">A</span> on a straight shoreline. A swimmer in distress is at point <span class="chem">B</span> in the water, <span class="chem">60</span> <span class="unit">m</span> perpendicular from a point <span class="chem">C</span> on the shoreline, where the distance <span class="chem">AC = 100</span> <span class="unit">m</span>. The lifeguard runs along the shore from <span class="chem">A</span> to a point <span class="chem">P</span> at a distance <span class="chem">x</span> <span class="unit">m</span> from <span class="chem">C</span> (<span class="chem">0 &lt;= x &lt;= 100</span>) at <span class="chem">5</span> <span class="unit">m s-1</span>, and then swims in a straight line from <span class="chem">P</span> to <span class="chem">B</span> at <span class="chem">3</span> <span class="unit">m s-1</span>.<br>(a) Show that the total time <span class="chem">T</span> seconds taken to reach the swimmer is <span class="chem">T(x) = (100 - x)/5 + sqrt(x^2 + 3600)/3</span>. <strong>[2 marks]</strong><br>(b) Find the value of <span class="chem">x</span> that minimizes <span class="chem">T(x)</span>, and calculate the minimum time required. <strong>[6 marks]</strong></p>
      stem: "<p>인명구조원이 직선 해안선 위의 점 <span class=\"chem\">A</span>에 있다. 물속에서 위험에 처한 수영객은 해안선 위의 점 <span class=\"chem\">C</span>에서 수직으로 <span class=\"chem\">60</span> <span class=\"unit\">m</span> 떨어진 점 <span class=\"chem\">B</span>에 있으며, 거리 <span class=\"chem\">AC = 100</span> <span class=\"unit\">m</span>이다. 구조원은 해안을 따라 <span class=\"chem\">A</span>에서 <span class=\"chem\">C</span>로부터 <span class=\"chem\">x</span> <span class=\"unit\">m</span> 떨어진 점 <span class=\"chem\">P</span> (<span class=\"chem\">0 &lt;= x &lt;= 100</span>)까지 <span class=\"chem\">5</span> <span class=\"unit\">m s-1</span>로 달린 뒤, <span class=\"chem\">P</span>에서 <span class=\"chem\">B</span>까지 직선으로 <span class=\"chem\">3</span> <span class=\"unit\">m s-1</span>로 헤엄쳐 간다.<br>(a) 수영객에게 도달하는 데 걸리는 총 시간 <span class=\"chem\">T</span>초가 <span class=\"chem\">T(x) = (100 - x)/5 + sqrt(x^2 + 3600)/3</span>임을 보이시오 (Show that). <strong>[2 marks]</strong><br>(b) <span class=\"chem\">T(x)</span>를 최소화하는 <span class=\"chem\">x</span>의 값을 구하고 (Find), 최소 소요 시간을 계산하시오 (calculate). <strong>[6 marks]</strong></p>",
      hints: [
        // EN: For part (a), use <span class="chem">time = distance / speed</span> for the shore segment <span class="chem">AP = 100 - x</span> and the water hypotenuse <span class="chem">PB = sqrt(x^2 + 60^2)</span>.
        "(a)에서는 해안 구간 <span class=\"chem\">AP = 100 - x</span>와 물속 빗변 <span class=\"chem\">PB = sqrt(x^2 + 60^2)</span>에 대해 <span class=\"chem\">time = distance / speed</span>를 쓰세요.",
        // EN: For part (b), write <span class="chem">sqrt(x^2 + 3600) = (x^2 + 3600)^{1/2}</span> and use the chain rule to differentiate.
        "(b)에서는 <span class=\"chem\">sqrt(x^2 + 3600) = (x^2 + 3600)^{1/2}</span>로 쓰고 연쇄법칙으로 미분하세요.",
      ],
      // EN: <p>(a) The shore distance is <span class="chem">AP = 100 - x</span> at <span class="chem">5</span> <span class="unit">m s-1</span>, taking <span class="chem">(100 - x)/5</span> seconds. By Pythagoras in right triangle <span class="chem">PCB</span>, <span class="chem">PB = sqrt(x^2 + 60^2) = sqrt(x^2 + 3600)</span> at <span class="chem">3</span> <span class="unit">m s-1</span>, giving <span class="chem">T(x) = (100 - x)/5 + sqrt(x^2 + 3600)/3</span>.<br>(b) Differentiating gives <span class="chem">T'(x) = -1/5 + (1/3) * (2x) / (2 sqrt(x^2 + 3600)) = 0 =&gt; 5x = 3 sqrt(x^2 + 3600)</span>. Squaring gives <span class="chem">25x^2 = 9x^2 + 32400 =&gt; 16x^2 = 32400 =&gt; x^2 = 2025 =&gt; x = 45</span> <span class="unit">m</span> (with <span class="chem">T'(x)</span> changing from <span class="chem">-</span> to <span class="chem">+</span>). Then <span class="chem">T(45) = (100 - 45)/5 + sqrt(2025 + 3600)/3 = 11 + 75/3 = 36</span> <span class="unit">s</span>.</p>
      solution: "<p>(a) 해안 거리는 <span class=\"chem\">AP = 100 - x</span>이고 속력은 <span class=\"chem\">5</span> <span class=\"unit\">m s-1</span>이므로 <span class=\"chem\">(100 - x)/5</span>초가 걸려요. 직각삼각형 <span class=\"chem\">PCB</span>에서 피타고라스 정리에 의해 <span class=\"chem\">PB = sqrt(x^2 + 60^2) = sqrt(x^2 + 3600)</span>이고 속력은 <span class=\"chem\">3</span> <span class=\"unit\">m s-1</span>이므로 <span class=\"chem\">T(x) = (100 - x)/5 + sqrt(x^2 + 3600)/3</span>이에요.<br>(b) 미분하면 <span class=\"chem\">T'(x) = -1/5 + (1/3) * (2x) / (2 sqrt(x^2 + 3600)) = 0 =&gt; 5x = 3 sqrt(x^2 + 3600)</span>이에요. 양변을 제곱하면 <span class=\"chem\">25x^2 = 9x^2 + 32400 =&gt; 16x^2 = 32400 =&gt; x^2 = 2025 =&gt; x = 45</span> <span class=\"unit\">m</span>예요 (<span class=\"chem\">T'(x)</span>의 부호가 <span class=\"chem\">-</span>에서 <span class=\"chem\">+</span>로 바뀜). 그러면 <span class=\"chem\">T(45) = (100 - 45)/5 + sqrt(2025 + 3600)/3 = 11 + 75/3 = 36</span> <span class=\"unit\">s</span>예요.</p>",
      // EN: <p><span class="chem">x = 45</span> <span class="unit">m</span>; minimum time <span class="chem">T = 36</span> <span class="unit">s</span>.</p>
      answer: "<p><span class=\"chem\">x = 45</span> <span class=\"unit\">m</span>; 최소 시간 <span class=\"chem\">T = 36</span> <span class=\"unit\">s</span>.</p>",
      markscheme: [
        // EN: M1: Use Pythagoras' theorem for the swimming distance: <span class="chem">PB = sqrt(x^2 + 60^2)</span>.
        "M1: 피타고라스 정리로 수영 거리를 나타냄: <span class=\"chem\">PB = sqrt(x^2 + 60^2)</span>.",
        // EN: A1: Correct distances <span class="chem">AP = 100 - x</span> and <span class="chem">PB = sqrt(x^2 + 3600)</span>; dividing each by its speed gives <span class="chem">T(x) = (100 - x)/5 + sqrt(x^2 + 3600)/3</span> AG.
        "A1: 올바른 거리 <span class=\"chem\">AP = 100 - x</span>와 <span class=\"chem\">PB = sqrt(x^2 + 3600)</span>; 각 거리를 속력으로 나누면 <span class=\"chem\">T(x) = (100 - x)/5 + sqrt(x^2 + 3600)/3</span> AG.",
        // EN: M1: Differentiate using the chain rule.
        "M1: 연쇄법칙으로 미분함.",
        // EN: A1: <span class="chem">T'(x) = -1/5 + x / (3 sqrt(x^2 + 3600))</span>.
        "A1: <span class=\"chem\">T'(x) = -1/5 + x / (3 sqrt(x^2 + 3600))</span>.",
        // EN: M1: Set <span class="chem">T'(x) = 0 =&gt; 5x = 3 sqrt(x^2 + 3600)</span> and square both sides: <span class="chem">25x^2 = 9(x^2 + 3600)</span>.
        "M1: <span class=\"chem\">T'(x) = 0 =&gt; 5x = 3 sqrt(x^2 + 3600)</span>으로 놓고 양변을 제곱함: <span class=\"chem\">25x^2 = 9(x^2 + 3600)</span>.",
        // EN: A1: Solve <span class="chem">16x^2 = 9 * 3600 =&gt; 4x = 3 * 60 =&gt; x = 45</span> <span class="unit">m</span>.
        "A1: <span class=\"chem\">16x^2 = 9 * 3600 =&gt; 4x = 3 * 60 =&gt; x = 45</span> <span class=\"unit\">m</span>를 구함.",
        // EN: R1: Justify the minimum: <span class="chem">T'(x)</span> changes sign from <span class="chem">-</span> to <span class="chem">+</span> at <span class="chem">x = 45</span> (or compare <span class="chem">T(45) = 36</span> with the endpoint values <span class="chem">T(0) = 40</span> and <span class="chem">T(100) ≈ 38.9</span>).
        "R1: 최솟값임을 보임: <span class=\"chem\">x = 45</span>에서 <span class=\"chem\">T'(x)</span>의 부호가 <span class=\"chem\">-</span>에서 <span class=\"chem\">+</span>로 바뀜 (또는 <span class=\"chem\">T(45) = 36</span>을 양 끝 값 <span class=\"chem\">T(0) = 40</span>, <span class=\"chem\">T(100) ≈ 38.9</span>와 비교함).",
        // EN: A1: Substitute <span class="chem">x = 45</span> into <span class="chem">T(x)</span>: <span class="chem">T(45) = 55/5 + sqrt(2025 + 3600)/3 = 11 + 75/3 = 36</span> <span class="unit">s</span>.
        "A1: <span class=\"chem\">T(x)</span>에 <span class=\"chem\">x = 45</span>를 대입함: <span class=\"chem\">T(45) = 55/5 + sqrt(2025 + 3600)/3 = 11 + 75/3 = 36</span> <span class=\"unit\">s</span>.",
      ],
    },

    // ── t5-1-q017 · numeric · challenge · SL · SL 5.7, 5.8 · 6 marks
    "t5-1-q017": {
      // EN: <p>The cubic curve <span class="chem">f(x) = a x^3 + b x^2 + c x + d</span> has a local maximum at <span class="chem">(0, 4)</span> and a point of inflexion at <span class="chem">(1, 2)</span>. Find the value of <span class="chem">a</span>.</p>
      stem: "<p>삼차곡선 <span class=\"chem\">f(x) = a x^3 + b x^2 + c x + d</span>가 <span class=\"chem\">(0, 4)</span>에서 극댓값을 갖고 <span class=\"chem\">(1, 2)</span>에서 변곡점을 가져요. <span class=\"chem\">a</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Use <span class="chem">f(0) = 4</span> and <span class="chem">f'(0) = 0</span> to find <span class="chem">d = 4</span> and <span class="chem">c = 0</span> immediately!
        "<span class=\"chem\">f(0) = 4</span>와 <span class=\"chem\">f'(0) = 0</span>을 쓰면 <span class=\"chem\">d = 4</span>와 <span class=\"chem\">c = 0</span>을 바로 구할 수 있어요!",
        // EN: Next use <span class="chem">f''(1) = 6a(1) + 2b = 0 =&gt; b = -3a</span>, and substitute into <span class="chem">f(1) = a + b + 4 = 2</span>.
        "다음으로 <span class=\"chem\">f''(1) = 6a(1) + 2b = 0 =&gt; b = -3a</span>를 구한 뒤 <span class=\"chem\">f(1) = a + b + 4 = 2</span>에 대입하세요.",
      ],
      // EN: <p>We have <span class="chem">f'(x) = 3a x^2 + 2b x + c</span> and <span class="chem">f''(x) = 6a x + 2b</span>. Since <span class="chem">(0, 4)</span> is a local maximum, <span class="chem">f(0) = d = 4</span> and <span class="chem">f'(0) = c = 0</span>. Since <span class="chem">(1, 2)</span> is a point of inflexion, <span class="chem">f''(1) = 6a + 2b = 0 =&gt; b = -3a</span>, and <span class="chem">f(1) = a + b + 4 = 2 =&gt; a - 3a = -2 =&gt; -2a = -2 =&gt; a = 1</span>.</p>
      solution: "<p><span class=\"chem\">f'(x) = 3a x^2 + 2b x + c</span>이고 <span class=\"chem\">f''(x) = 6a x + 2b</span>예요. <span class=\"chem\">(0, 4)</span>가 극댓값이므로 <span class=\"chem\">f(0) = d = 4</span>이고 <span class=\"chem\">f'(0) = c = 0</span>이에요. <span class=\"chem\">(1, 2)</span>가 변곡점이므로 <span class=\"chem\">f''(1) = 6a + 2b = 0 =&gt; b = -3a</span>이고, <span class=\"chem\">f(1) = a + b + 4 = 2 =&gt; a - 3a = -2 =&gt; -2a = -2 =&gt; a = 1</span>이에요.</p>",
    },

    // ── t5-1-q018 · numeric · foundation · SL · SL 5.1 · 2 marks
    "t5-1-q018": {
      // EN: <p>The depth of water in a tank is <span class="chem">D(t) = 2t^2 - 3t + 10</span> <span class="unit">cm</span>, where <span class="chem">t</span> is the time in minutes. The average rate of change of the depth between <span class="chem">t = 2</span> and <span class="chem">t = 2 + h</span> is <span class="chem">(D(2 + h) - D(2)) / h = 5 + 2h</span>. By considering the limit as <span class="chem">h -&gt; 0</span>, find the rate at which the depth is changing when <span class="chem">t = 2</span>, in <span class="unit">cm</span> per minute.</p>
      stem: "<p>탱크 속 물의 깊이는 <span class=\"chem\">D(t) = 2t^2 - 3t + 10</span> <span class=\"unit\">cm</span>이고, <span class=\"chem\">t</span>는 시간(분)이에요. <span class=\"chem\">t = 2</span>와 <span class=\"chem\">t = 2 + h</span> 사이에서 깊이의 평균변화율은 <span class=\"chem\">(D(2 + h) - D(2)) / h = 5 + 2h</span>예요. <span class=\"chem\">h -&gt; 0</span>일 때의 극한을 생각하여, <span class=\"chem\">t = 2</span>일 때 깊이가 변하는 비율을 분당 <span class=\"unit\">cm</span> 단위로 구하시오 (Find).</p>",
      hints: [
        // EN: The instantaneous rate of change is the limit of the average rate of change (the gradient of the chord) as <span class="chem">h -&gt; 0</span>.
        "순간변화율은 <span class=\"chem\">h -&gt; 0</span>일 때 평균변화율(할선의 기울기)의 극한이에요.",
        // EN: Let <span class="chem">h</span> get closer and closer to <span class="chem">0</span> in <span class="chem">5 + 2h</span>. You can check your answer with <span class="chem">D'(t) = 4t - 3</span>.
        "<span class=\"chem\">5 + 2h</span>에서 <span class=\"chem\">h</span>를 <span class=\"chem\">0</span>에 점점 가깝게 해 보세요. <span class=\"chem\">D'(t) = 4t - 3</span>으로 답을 확인할 수 있어요.",
      ],
      // EN: <p>As <span class="chem">h -&gt; 0</span>, <span class="chem">5 + 2h -&gt; 5</span>, so <span class="chem">D'(2) = 5</span>: the depth is increasing at <span class="chem">5</span> <span class="unit">cm</span> per minute when <span class="chem">t = 2</span>. Check: <span class="chem">D'(t) = 4t - 3</span>, so <span class="chem">D'(2) = 8 - 3 = 5</span>.</p>
      solution: "<p><span class=\"chem\">h -&gt; 0</span>일 때 <span class=\"chem\">5 + 2h -&gt; 5</span>이므로 <span class=\"chem\">D'(2) = 5</span>예요. 즉 <span class=\"chem\">t = 2</span>일 때 깊이는 분당 <span class=\"chem\">5</span> <span class=\"unit\">cm</span>씩 증가하고 있어요. 확인: <span class=\"chem\">D'(t) = 4t - 3</span>이므로 <span class=\"chem\">D'(2) = 8 - 3 = 5</span>.</p>",
    },

  }
});
