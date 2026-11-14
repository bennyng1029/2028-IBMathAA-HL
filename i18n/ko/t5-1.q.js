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

    // ── t5-1-q006 · numeric · exam · SL · SL 5.4 · 4 marks
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
      // EN: <p>The graph of the <strong>derivative</strong> <span class="chem">y = f'(x)</span> is drawn for <span class="chem">-3 &lt;= x &lt;= 5</span>. The graph of <span class="chem">f'(x)</span> crosses the <span class="chem">x</span>-axis at <span class="chem">x = -1</span> and <span class="chem">x = 4</span>, and its only turning point is a local maximum at <span class="chem">(1.5, 6)</span>. At which value of <span class="chem">x</span> does the original curve <span class="chem">y = f(x)</span> have a point of inflexion?</p>
      stem: "<p><span class=\"chem\">-3 &lt;= x &lt;= 5</span>에서 <strong>도함수</strong> <span class=\"chem\">y = f'(x)</span>의 그래프가 그려져 있어요. <span class=\"chem\">f'(x)</span>의 그래프는 <span class=\"chem\">x = -1</span>과 <span class=\"chem\">x = 4</span>에서 <span class=\"chem\">x</span>축을 지나고, 유일한 극점은 <span class=\"chem\">(1.5, 6)</span>에서의 극대점이에요. 원래 곡선 <span class=\"chem\">y = f(x)</span>는 어떤 <span class=\"chem\">x</span> 값에서 변곡점을 갖나요?</p>",
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
      // EN: <p>Consider <span class="chem">f(x) = (ln x) / x</span> for <span class="chem">x &gt; 0</span>. Find the exact maximum value of <span class="chem">f(x)</span>.</p>
      stem: "<p><span class=\"chem\">x &gt; 0</span>에서 <span class=\"chem\">f(x) = (ln x) / x</span>일 때, <span class=\"chem\">f(x)</span>의 최댓값의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Differentiate using the quotient rule: <span class="chem">f'(x) = (x(1/x) - (ln x)(1)) / x^2 = (1 - ln x) / x^2</span>.
        "몫의 미분법으로 미분하세요: <span class=\"chem\">f'(x) = (x(1/x) - (ln x)(1)) / x^2 = (1 - ln x) / x^2</span>.",
        // EN: Set <span class="chem">f'(x) = 0</span> to find <span class="chem">ln x = 1 =&gt; x = e</span>, then evaluate <span class="chem">f(e)</span> exactly, using <span class="chem">ln e = 1</span>.
        "<span class=\"chem\">f'(x) = 0</span>으로 놓아 <span class=\"chem\">ln x = 1 =&gt; x = e</span>를 구한 뒤, <span class=\"chem\">ln e = 1</span>을 이용해 <span class=\"chem\">f(e)</span>를 정확히 계산하세요.",
      ],
      // EN: <p>By the quotient rule, <span class="chem">f'(x) = (1 - ln x) / x^2 = 0 =&gt; ln x = 1 =&gt; x = e</span>. For <span class="chem">0 &lt; x &lt; e</span>, <span class="chem">f'(x) &gt; 0</span>, and for <span class="chem">x &gt; e</span>, <span class="chem">f'(x) &lt; 0</span>, confirming a global maximum. The maximum value is <span class="chem">f(e) = (ln e) / e = 1 / e</span>.</p>
      solution: "<p>몫의 미분법에 의해 <span class=\"chem\">f'(x) = (1 - ln x) / x^2 = 0 =&gt; ln x = 1 =&gt; x = e</span>예요. <span class=\"chem\">0 &lt; x &lt; e</span>에서 <span class=\"chem\">f'(x) &gt; 0</span>, <span class=\"chem\">x &gt; e</span>에서 <span class=\"chem\">f'(x) &lt; 0</span>이므로 전역 최댓값이에요. 최댓값은 <span class=\"chem\">f(e) = (ln e) / e = 1 / e</span>예요.</p>",
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
        // EN: Decode: “passes through <span class="chem">(0, -4)</span>” means that the point <span class="chem">(0, -4)</span> satisfies the equation of the tangent at <span class="chem">P</span>. So write that tangent in terms of <span class="chem">a</span> first, then substitute <span class="chem">x = 0</span>, <span class="chem">y = -4</span> to get an equation in <span class="chem">a</span>.
        "해석: \"<span class=\"chem\">(0, -4)</span>를 지난다\"는 점 <span class=\"chem\">(0, -4)</span>가 <span class=\"chem\">P</span>에서의 접선의 방정식을 만족한다는 뜻입니다. 먼저 그 접선을 <span class=\"chem\">a</span>로 나타낸 뒤 <span class=\"chem\">x = 0</span>, <span class=\"chem\">y = -4</span>를 대입하여 <span class=\"chem\">a</span>에 대한 방정식을 만드세요.",
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
        // EN: Decode: the route has two legs at different speeds, so the total time is the sum of distance / speed for each leg. Then minimise <span class="chem">T(x)</span> on the closed interval <span class="chem">0 &lt;= x &lt;= 100</span>: compare the stationary value with the values at the endpoints.
        "해석: 경로는 속력이 다른 두 구간으로 이루어져 있으므로, 전체 시간은 각 구간의 \"거리 / 속력\"의 합입니다. 그다음 닫힌구간 <span class=\"chem\">0 &lt;= x &lt;= 100</span>에서 <span class=\"chem\">T(x)</span>를 최소화하세요: 정상점에서의 값과 끝점에서의 값을 비교합니다.",
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
        // EN: Decode: each fact gives equations. A local maximum at <span class="chem">(0, 4)</span> gives <span class="chem">f(0) = 4</span> and <span class="chem">f'(0) = 0</span>; a point of inflexion at <span class="chem">(1, 2)</span> gives <span class="chem">f(1) = 2</span> and <span class="chem">f''(1) = 0</span>. That is four equations for the four unknowns <span class="chem">a, b, c, d</span>.
        "해석: 각 조건에서 방정식이 나옵니다. <span class=\"chem\">(0, 4)</span>에서 극대이므로 <span class=\"chem\">f(0) = 4</span>이고 <span class=\"chem\">f'(0) = 0</span>이며, <span class=\"chem\">(1, 2)</span>가 변곡점이므로 <span class=\"chem\">f(1) = 2</span>이고 <span class=\"chem\">f''(1) = 0</span>입니다. 네 미지수 <span class=\"chem\">a, b, c, d</span>에 대한 방정식 네 개가 됩니다.",
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

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ko', 't5-1.q', {
  questions: {

    // ── t5-1-q019 · numeric · foundation · SL · SL 5.1 · 2 marks
    "t5-1-q019": {
      // EN: <p>The point <span class="chem">P(2, 8)</span> lies on the curve <span class="chem">y = x^3</span>. For the point <span class="chem">Q(2 + h, (2 + h)^3)</span>, the gradient of the chord <span class="chem">PQ</span> is <span class="chem">12.61</span> when <span class="chem">h = 0.1</span>, <span class="chem">12.0601</span> when <span class="chem">h = 0.01</span> and <span class="chem">12.006001</span> when <span class="chem">h = 0.001</span>. Deduce the gradient of the tangent to the curve at <span class="chem">P</span>.</p>
      stem: "<p>점 <span class=\"chem\">P(2, 8)</span>은 곡선 <span class=\"chem\">y = x^3</span> 위에 있어요. 점 <span class=\"chem\">Q(2 + h, (2 + h)^3)</span>에 대하여 현 <span class=\"chem\">PQ</span>의 기울기는 <span class=\"chem\">h = 0.1</span>일 때 <span class=\"chem\">12.61</span>, <span class=\"chem\">h = 0.01</span>일 때 <span class=\"chem\">12.0601</span>, <span class=\"chem\">h = 0.001</span>일 때 <span class=\"chem\">12.006001</span>예요. <span class=\"chem\">P</span>에서 곡선의 접선의 기울기를 추론하시오 (Deduce).</p>",
      hints: [
        // EN: As <span class="chem">Q</span> slides along the curve towards <span class="chem">P</span> (that is, <span class="chem">h -&gt; 0</span>), the chord <span class="chem">PQ</span> turns into the tangent at <span class="chem">P</span>.
        "<span class=\"chem\">Q</span>가 곡선을 따라 <span class=\"chem\">P</span>에 가까워지면(즉 <span class=\"chem\">h -&gt; 0</span>), 현 <span class=\"chem\">PQ</span>는 <span class=\"chem\">P</span>에서의 접선이 돼요.",
        // EN: Look at the pattern in the chord gradients as <span class="chem">h</span> gets smaller. What single number are they closing in on?
        "<span class=\"chem\">h</span>가 작아질 때 현의 기울기가 보이는 규칙을 살펴보세요. 어떤 한 수에 가까워지고 있나요?",
      ],
      // EN: <p>The gradient of the tangent at <span class="chem">P</span> is the limit of the chord gradients as <span class="chem">h -&gt; 0</span>. The values <span class="chem">12.61, 12.0601, 12.006001</span> approach <span class="chem">12</span>, so the gradient at <span class="chem">P</span> is <span class="chem">12</span>. (Check: the chord gradient is <span class="chem">((2 + h)^3 - 8) / h = 12 + 6h + h^2 -&gt; 12</span>, and <span class="chem">dy/dx = 3x^2 = 12</span> at <span class="chem">x = 2</span>.)</p>
      solution: "<p><span class=\"chem\">P</span>에서의 접선의 기울기는 <span class=\"chem\">h -&gt; 0</span>일 때 현의 기울기의 극한이에요. 값 <span class=\"chem\">12.61, 12.0601, 12.006001</span>은 <span class=\"chem\">12</span>에 가까워지므로 <span class=\"chem\">P</span>에서의 기울기는 <span class=\"chem\">12</span>이에요. (확인: 현의 기울기는 <span class=\"chem\">((2 + h)^3 - 8) / h = 12 + 6h + h^2 -&gt; 12</span>이고, <span class=\"chem\">x = 2</span>에서 <span class=\"chem\">dy/dx = 3x^2 = 12</span>이에요.)</p>",
    },

    // ── t5-1-q020 · numeric · foundation · SL · SL 5.3 · 2 marks
    "t5-1-q020": {
      // EN: <p>Let <span class="chem">f(x) = 4x^3 - 6 / x + 7</span> for <span class="chem">x != 0</span>. Find <span class="chem">f'(-1)</span>.</p>
      stem: "<p><span class=\"chem\">x != 0</span>에서 <span class=\"chem\">f(x) = 4x^3 - 6 / x + 7</span>이라 하자. <span class=\"chem\">f'(-1)</span>을 구하시오 (Find).</p>",
      hints: [
        // EN: Write <span class="chem">6 / x</span> as <span class="chem">6x^{-1}</span> before you differentiate.
        "미분하기 전에 <span class=\"chem\">6 / x</span>을 <span class=\"chem\">6x^{-1}</span>로 바꾸어 쓰세요.",
        // EN: You should get <span class="chem">f'(x) = 12x^2 + 6x^{-2}</span>. Now substitute <span class="chem">x = -1</span> carefully.
        "<span class=\"chem\">f'(x) = 12x^2 + 6x^{-2}</span>을 얻어야 해요. 이제 <span class=\"chem\">x = -1</span>를 주의해서 대입하세요.",
      ],
      // EN: <p><span class="chem">f(x) = 4x^3 - 6x^{-1} + 7</span>, so <span class="chem">f'(x) = 12x^2 + 6x^{-2} = 12x^2 + 6 / x^2</span>. Then <span class="chem">f'(-1) = 12(1) + 6 / 1 = 18</span>.</p>
      solution: "<p><span class=\"chem\">f(x) = 4x^3 - 6x^{-1} + 7</span>이므로 <span class=\"chem\">f'(x) = 12x^2 + 6x^{-2} = 12x^2 + 6 / x^2</span>예요. 따라서 <span class=\"chem\">f'(-1) = 12(1) + 6 / 1 = 18</span>이에요.</p>",
    },

    // ── t5-1-q021 · short · exam · SL · SL 5.2, 5.3 · 4 marks
    "t5-1-q021": {
      // EN: <p>Let <span class="chem">f(x) = 2x^3 - 9x^2 - 24x + 5</span>. Find the set of values of <span class="chem">x</span> for which <span class="chem">f</span> is decreasing. <strong>[4 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = 2x^3 - 9x^2 - 24x + 5</span>이라 하자. <span class=\"chem\">f</span>가 감소하는 <span class=\"chem\">x</span>의 값의 범위를 구하시오 (Find). <strong>[4 marks]</strong></p>",
      hints: [
        // EN: <span class="chem">f</span> is decreasing where its gradient <span class="chem">f'(x)</span> is negative.
        "<span class=\"chem\">f</span>는 기울기 <span class=\"chem\">f'(x)</span>가 음수인 곳에서 감소해요.",
        // EN: Factorise <span class="chem">f'(x) = 6x^2 - 18x - 24 = 6(x^2 - 3x - 4)</span>, then decide where the quadratic is below the <span class="chem">x</span>-axis.
        "<span class=\"chem\">f'(x) = 6x^2 - 18x - 24 = 6(x^2 - 3x - 4)</span>로 인수분해한 뒤, 이차식이 <span class=\"chem\">x</span>축 아래에 있는 범위를 판단하세요.",
      ],
      // EN: <p><span class="chem">f'(x) = 6x^2 - 18x - 24 = 6(x - 4)(x + 1)</span>. This is a positive quadratic with roots <span class="chem">-1</span> and <span class="chem">4</span>, so <span class="chem">f'(x) &lt; 0</span> between the roots: <span class="chem">f</span> is decreasing for <span class="chem">-1 &lt; x &lt; 4</span>.</p>
      solution: "<p><span class=\"chem\">f'(x) = 6x^2 - 18x - 24 = 6(x - 4)(x + 1)</span>이에요. 이것은 최고차항의 계수가 양수인 이차식이고 근이 <span class=\"chem\">-1</span>와 <span class=\"chem\">4</span>이므로, 두 근 사이에서 <span class=\"chem\">f'(x) &lt; 0</span>예요: <span class=\"chem\">f</span>는 <span class=\"chem\">-1 &lt; x &lt; 4</span>에서 감소해요.</p>",
      // EN: <p><span class="chem">-1 &lt; x &lt; 4</span> (or <span class="chem">-1 &lt;= x &lt;= 4</span>).</p>
      answer: "<p><span class=\"chem\">-1 &lt; x &lt; 4</span> (또는 <span class=\"chem\">-1 &lt;= x &lt;= 4</span>).</p>",
      markscheme: [
        // EN: A1: <span class="chem">f'(x) = 6x^2 - 18x - 24</span>.
        "A1: <span class=\"chem\">f'(x) = 6x^2 - 18x - 24</span>.",
        // EN: M1: Sets <span class="chem">f'(x) &lt; 0</span> (or solves <span class="chem">f'(x) = 0</span>), e.g. <span class="chem">6(x - 4)(x + 1)</span>.
        "M1: <span class=\"chem\">f'(x) &lt; 0</span>로 놓음 (또는 <span class=\"chem\">f'(x) = 0</span>를 풂), 예: <span class=\"chem\">6(x - 4)(x + 1)</span>.",
        // EN: A1: Critical values <span class="chem">x = -1</span> and <span class="chem">x = 4</span>.
        "A1: 임계값 <span class=\"chem\">x = -1</span>과 <span class=\"chem\">x = 4</span>.",
        // EN: A1: <span class="chem">-1 &lt; x &lt; 4</span> (accept <span class="chem">-1 &lt;= x &lt;= 4</span>).
        "A1: <span class=\"chem\">-1 &lt; x &lt; 4</span> (<span class=\"chem\">-1 &lt;= x &lt;= 4</span>도 인정).",
      ],
    },

    // ── t5-1-q022 · numeric · exam · SL · SL 5.6 · 4 marks
    "t5-1-q022": {
      // EN: <p>Let <span class="chem">f(x) = x sqrt(2x + 5)</span> for <span class="chem">x &gt; -5/2</span>. Find the exact value of <span class="chem">f'(2)</span>.</p>
      stem: "<p><span class=\"chem\">x &gt; -5/2</span>에서 <span class=\"chem\">f(x) = x sqrt(2x + 5)</span>이라 하자. <span class=\"chem\">f'(2)</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: This is a product <span class="chem">u v</span> with <span class="chem">u = x</span> and <span class="chem">v = (2x + 5)^{1/2}</span>. Differentiating <span class="chem">v</span> needs the chain rule.
        "이것은 곱 <span class=\"chem\">u v</span>이고 <span class=\"chem\">u = x</span>, <span class=\"chem\">v = (2x + 5)^{1/2}</span>이에요. <span class=\"chem\">v</span>를 미분할 때는 연쇄법칙이 필요해요.",
        // EN: <span class="chem">v' = (1/2)(2x + 5)^{-1/2} * 2 = 1 / sqrt(2x + 5)</span>, so <span class="chem">f'(x) = sqrt(2x + 5) + x / sqrt(2x + 5)</span>.
        "<span class=\"chem\">v' = (1/2)(2x + 5)^{-1/2} * 2 = 1 / sqrt(2x + 5)</span>이므로 <span class=\"chem\">f'(x) = sqrt(2x + 5) + x / sqrt(2x + 5)</span>예요.",
      ],
      // EN: <p>By the product and chain rules, <span class="chem">f'(x) = 1 * sqrt(2x + 5) + x * (1/2)(2x + 5)^{-1/2} * 2 = sqrt(2x + 5) + x / sqrt(2x + 5)</span>. At <span class="chem">x = 2</span>, <span class="chem">sqrt(9) = 3</span>, so <span class="chem">f'(2) = 3 + 2/3 = 11/3</span>.</p>
      solution: "<p>곱의 미분법과 연쇄법칙에 의해 <span class=\"chem\">f'(x) = 1 * sqrt(2x + 5) + x * (1/2)(2x + 5)^{-1/2} * 2 = sqrt(2x + 5) + x / sqrt(2x + 5)</span>이에요. <span class=\"chem\">x = 2</span>에서 <span class=\"chem\">sqrt(9) = 3</span>이므로 <span class=\"chem\">f'(2) = 3 + 2/3 = 11/3</span>예요.</p>",
    },

    // ── t5-1-q023 · numeric · exam · SL · SL 5.4, 5.6 · 5 marks
    "t5-1-q023": {
      // EN: <p>The tangent to the curve <span class="chem">y = e^{2x} ln x</span> at the point where <span class="chem">x = 1</span> meets the <span class="chem">y</span>-axis at <span class="chem">(0, k)</span>. Find the exact value of <span class="chem">k</span>.</p>
      stem: "<p>곡선 <span class=\"chem\">y = e^{2x} ln x</span> 위의 <span class=\"chem\">x = 1</span>인 점에서의 접선이 <span class=\"chem\">y</span>축과 <span class=\"chem\">(0, k)</span>에서 만나요. <span class=\"chem\">k</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: First find the point of contact: at <span class="chem">x = 1</span>, <span class="chem">ln 1 = 0</span>, so <span class="chem">y = 0</span>.
        "먼저 접점을 구하세요: <span class=\"chem\">x = 1</span>에서 <span class=\"chem\">ln 1 = 0</span>이므로 <span class=\"chem\">y = 0</span>이에요.",
        // EN: Use the product rule: <span class="chem">dy/dx = 2e^{2x} ln x + e^{2x} / x</span>. Evaluate it at <span class="chem">x = 1</span>, write the tangent, then put <span class="chem">x = 0</span>.
        "곱의 미분법을 이용하세요: <span class=\"chem\">dy/dx = 2e^{2x} ln x + e^{2x} / x</span>. <span class=\"chem\">x = 1</span>에서의 값을 구하고 접선의 방정식을 쓴 뒤 <span class=\"chem\">x = 0</span>을 대입하세요.",
      ],
      // EN: <p>At <span class="chem">x = 1</span>, <span class="chem">y = e^2 ln 1 = 0</span>. By the product rule, <span class="chem">dy/dx = 2e^{2x} ln x + e^{2x} * (1/x)</span>, so at <span class="chem">x = 1</span> the gradient is <span class="chem">0 + e^2 = e^2</span>. The tangent is <span class="chem">y - 0 = e^2(x - 1)</span>. At <span class="chem">x = 0</span>, <span class="chem">y = -e^2</span>, so <span class="chem">k = -e^2</span>.</p>
      solution: "<p><span class=\"chem\">x = 1</span>에서 <span class=\"chem\">y = e^2 ln 1 = 0</span>이에요. 곱의 미분법에 의해 <span class=\"chem\">dy/dx = 2e^{2x} ln x + e^{2x} * (1/x)</span>이므로 <span class=\"chem\">x = 1</span>에서의 기울기는 <span class=\"chem\">0 + e^2 = e^2</span>예요. 접선은 <span class=\"chem\">y - 0 = e^2(x - 1)</span>이에요. <span class=\"chem\">x = 0</span>일 때 <span class=\"chem\">y = -e^2</span>이므로 <span class=\"chem\">k = -e^2</span>예요.</p>",
    },

    // ── t5-1-q024 · short · exam · SL · SL 5.6, 5.8 · 6 marks
    "t5-1-q024": {
      // EN: <p>Let <span class="chem">f(x) = (x + 1) / (x^2 + 3)</span> for <span class="chem">x \in \mathbb{R}</span>.<br>(a) Show that <span class="chem">f'(x) = (3 - 2x - x^2) / (x^2 + 3)^2</span>. <strong>[2 marks]</strong><br>(b) Hence find the coordinates of the local maximum point on the graph of <span class="chem">f</span>, justifying that it is a maximum. <strong>[4 marks]</strong></p>
      stem: "<p><span class=\"chem\">x \\in \\mathbb{R}</span>에서 <span class=\"chem\">f(x) = (x + 1) / (x^2 + 3)</span>이라 하자.<br>(a) <span class=\"chem\">f'(x) = (3 - 2x - x^2) / (x^2 + 3)^2</span>임을 보이시오 (Show that). <strong>[2 marks]</strong><br>(b) 이를 이용하여 (Hence) <span class=\"chem\">f</span>의 그래프 위의 극대점의 좌표를 구하고, 그것이 극대임을 근거를 들어 설명하시오. <strong>[4 marks]</strong></p>",
      hints: [
        // EN: For (a), take <span class="chem">u = x + 1</span> and <span class="chem">v = x^2 + 3</span> in <span class="chem">(v u' - u v') / v^2</span>.
        "(a)에서는 <span class=\"chem\">(v u' - u v') / v^2</span>에 <span class=\"chem\">u = x + 1</span>, <span class=\"chem\">v = x^2 + 3</span>를 넣으세요.",
        // EN: For (b), the denominator <span class="chem">(x^2 + 3)^2</span> is always positive, so the sign of <span class="chem">f'(x)</span> is the sign of the numerator <span class="chem">-(x + 3)(x - 1)</span>.
        "(b)에서는 분모 <span class=\"chem\">(x^2 + 3)^2</span>이 항상 양수이므로 <span class=\"chem\">f'(x)</span>의 부호는 분자 <span class=\"chem\">-(x + 3)(x - 1)</span>의 부호와 같아요.",
      ],
      // EN: <p>(a) <span class="chem">f'(x) = ((x^2 + 3) - (x + 1)(2x)) / (x^2 + 3)^2 = (x^2 + 3 - 2x^2 - 2x) / (x^2 + 3)^2 = (3 - 2x - x^2) / (x^2 + 3)^2</span>.<br>(b) <span class="chem">f'(x) = 0 &lt;=&gt; 3 - 2x - x^2 = -(x + 3)(x - 1) = 0</span>, so <span class="chem">x = -3</span> or <span class="chem">x = 1</span>. The denominator is positive, and the numerator is positive for <span class="chem">-3 &lt; x &lt; 1</span> and negative for <span class="chem">x &gt; 1</span>, so <span class="chem">f'</span> changes from <span class="chem">+</span> to <span class="chem">-</span> at <span class="chem">x = 1</span>: a local maximum. <span class="chem">f(1) = 2/4 = 1/2</span>, so the maximum is at <span class="chem">(1, 1/2)</span>. (At <span class="chem">x = -3</span> the sign goes from <span class="chem">-</span> to <span class="chem">+</span>: a local minimum <span class="chem">(-3, -1/6)</span>.)</p>
      solution: "<p>(a) <span class=\"chem\">f'(x) = ((x^2 + 3) - (x + 1)(2x)) / (x^2 + 3)^2 = (x^2 + 3 - 2x^2 - 2x) / (x^2 + 3)^2 = (3 - 2x - x^2) / (x^2 + 3)^2</span>.<br>(b) <span class=\"chem\">f'(x) = 0 &lt;=&gt; 3 - 2x - x^2 = -(x + 3)(x - 1) = 0</span>이므로 <span class=\"chem\">x = -3</span> 또는 <span class=\"chem\">x = 1</span>예요. 분모는 양수이고 분자는 <span class=\"chem\">-3 &lt; x &lt; 1</span>에서 양수, <span class=\"chem\">x &gt; 1</span>에서 음수이므로 <span class=\"chem\">f'</span>은 <span class=\"chem\">x = 1</span>에서 <span class=\"chem\">+</span>에서 <span class=\"chem\">-</span>로 바뀌어요: 극대예요. <span class=\"chem\">f(1) = 2/4 = 1/2</span>이므로 극대점은 <span class=\"chem\">(1, 1/2)</span>예요. (<span class=\"chem\">x = -3</span>에서는 부호가 <span class=\"chem\">-</span>에서 <span class=\"chem\">+</span>로 바뀌므로 극소점 <span class=\"chem\">(-3, -1/6)</span>이에요.)</p>",
      // EN: <p>(a) Quotient rule, then simplify the numerator.<br>(b) Local maximum at <span class="chem">(1, 1/2)</span>; <span class="chem">f'</span> changes from positive to negative at <span class="chem">x = 1</span>.</p>
      answer: "<p>(a) 몫의 미분법을 쓴 뒤 분자를 정리함.<br>(b) 극대점 <span class=\"chem\">(1, 1/2)</span>; <span class=\"chem\">f'</span>은 <span class=\"chem\">x = 1</span>에서 양에서 음으로 바뀜.</p>",
      markscheme: [
        // EN: M1: Substitutes into the quotient rule: <span class="chem">f'(x) = ((x^2 + 3)(1) - (x + 1)(2x)) / (x^2 + 3)^2</span>.
        "M1: 몫의 미분법에 대입함: <span class=\"chem\">f'(x) = ((x^2 + 3)(1) - (x + 1)(2x)) / (x^2 + 3)^2</span>.",
        // EN: A1: Expands the numerator <span class="chem">x^2 + 3 - 2x^2 - 2x = 3 - 2x - x^2</span>, giving the result (AG).
        "A1: 분자를 전개하여 <span class=\"chem\">x^2 + 3 - 2x^2 - 2x = 3 - 2x - x^2</span>을 얻고, 결과를 보임 (AG).",
        // EN: M1: Sets the numerator equal to zero: <span class="chem">3 - 2x - x^2 = -(x + 3)(x - 1) = 0</span>.
        "M1: 분자를 0으로 놓음: <span class=\"chem\">3 - 2x - x^2 = -(x + 3)(x - 1) = 0</span>.",
        // EN: A1: <span class="chem">x = 1</span> (and <span class="chem">x = -3</span>).
        "A1: <span class=\"chem\">x = 1</span> (그리고 <span class=\"chem\">x = -3</span>).",
        // EN: R1: <span class="chem">f'</span> changes from positive to negative at <span class="chem">x = 1</span> (e.g. <span class="chem">f'(0) = 1/3 &gt; 0</span>, <span class="chem">f'(2) = -5/49 &lt; 0</span>), so it is a maximum.
        "R1: <span class=\"chem\">f'</span>은 <span class=\"chem\">x = 1</span>에서 양에서 음으로 바뀌므로 (예: <span class=\"chem\">f'(0) = 1/3 &gt; 0</span>, <span class=\"chem\">f'(2) = -5/49 &lt; 0</span>) 극대임.",
        // EN: A1: <span class="chem">(1, 1/2)</span>.
        "A1: <span class=\"chem\">(1, 1/2)</span>.",
      ],
    },

    // ── t5-1-q025 · short · exam · SL · SL 5.7, 5.8 · 7 marks
    "t5-1-q025": {
      // EN: <p>Let <span class="chem">f(x) = x^4 - 4x^3 + 10</span>.<br>(a) Find <span class="chem">f'(x)</span> and <span class="chem">f''(x)</span>. <strong>[2 marks]</strong><br>(b) Find the coordinates of the points of inflexion on the graph of <span class="chem">f</span>, justifying your answer. <strong>[4 marks]</strong><br>(c) Determine which of these points is a stationary point of inflexion. <strong>[1 mark]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = x^4 - 4x^3 + 10</span>이라 하자.<br>(a) <span class=\"chem\">f'(x)</span>와 <span class=\"chem\">f''(x)</span>을 구하시오 (Find). <strong>[2 marks]</strong><br>(b) <span class=\"chem\">f</span>의 그래프 위의 변곡점의 좌표를 구하고 (Find), 그 근거를 설명하시오. <strong>[4 marks]</strong><br>(c) 이 점들 중 어느 것이 정류 변곡점인지 판별하시오 (Determine). <strong>[1 mark]</strong></p>",
      hints: [
        // EN: A point of inflexion needs two things: <span class="chem">f''(x) = 0</span> <strong>and</strong> <span class="chem">f''(x)</span> changes sign there.
        "변곡점에는 두 가지 조건이 필요해요: <span class=\"chem\">f''(x) = 0</span> <strong>그리고</strong> 그 점에서 <span class=\"chem\">f''(x)</span>의 부호가 바뀌어야 해요.",
        // EN: <span class="chem">f''(x) = 12x(x - 2)</span>. Test the sign of <span class="chem">f''</span> on each side of <span class="chem">x = 0</span> and <span class="chem">x = 2</span>. For (c), a stationary point of inflexion also has <span class="chem">f'(x) = 0</span>.
        "<span class=\"chem\">f''(x) = 12x(x - 2)</span>. <span class=\"chem\">x = 0</span>과 <span class=\"chem\">x = 2</span>의 양쪽에서 <span class=\"chem\">f''</span>의 부호를 조사하세요. (c)에서 정류 변곡점은 <span class=\"chem\">f'(x) = 0</span>도 만족해요.",
      ],
      // EN: <p>(a) <span class="chem">f'(x) = 4x^3 - 12x^2</span> and <span class="chem">f''(x) = 12x^2 - 24x</span>.<br>(b) <span class="chem">f''(x) = 12x(x - 2) = 0 =&gt; x = 0</span> or <span class="chem">x = 2</span>. Signs: <span class="chem">f''(-1) = 36 &gt; 0</span>, <span class="chem">f''(1) = -12 &lt; 0</span>, <span class="chem">f''(3) = 36 &gt; 0</span>, so <span class="chem">f''</span> changes sign at both. <span class="chem">f(0) = 10</span> and <span class="chem">f(2) = 16 - 32 + 10 = -6</span>: the points of inflexion are <span class="chem">(0, 10)</span> and <span class="chem">(2, -6)</span>.<br>(c) <span class="chem">f'(0) = 0</span>, so <span class="chem">(0, 10)</span> is a stationary point of inflexion. <span class="chem">f'(2) = 32 - 48 = -16 != 0</span>, so <span class="chem">(2, -6)</span> is a non-stationary point of inflexion.</p>
      solution: "<p>(a) <span class=\"chem\">f'(x) = 4x^3 - 12x^2</span>, <span class=\"chem\">f''(x) = 12x^2 - 24x</span>.<br>(b) <span class=\"chem\">f''(x) = 12x(x - 2) = 0 =&gt; x = 0</span> 또는 <span class=\"chem\">x = 2</span>. 부호: <span class=\"chem\">f''(-1) = 36 &gt; 0</span>, <span class=\"chem\">f''(1) = -12 &lt; 0</span>, <span class=\"chem\">f''(3) = 36 &gt; 0</span>이므로 <span class=\"chem\">f''</span>은 두 점 모두에서 부호가 바뀌어요. <span class=\"chem\">f(0) = 10</span>, <span class=\"chem\">f(2) = 16 - 32 + 10 = -6</span>이므로 변곡점은 <span class=\"chem\">(0, 10)</span>과 <span class=\"chem\">(2, -6)</span>예요.<br>(c) <span class=\"chem\">f'(0) = 0</span>이므로 <span class=\"chem\">(0, 10)</span>은 정류 변곡점이에요. <span class=\"chem\">f'(2) = 32 - 48 = -16 != 0</span>이므로 <span class=\"chem\">(2, -6)</span>은 비정류 변곡점이에요.</p>",
      // EN: <p>(a) <span class="chem">f'(x) = 4x^3 - 12x^2</span>, <span class="chem">f''(x) = 12x^2 - 24x</span>.<br>(b) <span class="chem">(0, 10)</span> and <span class="chem">(2, -6)</span>.<br>(c) <span class="chem">(0, 10)</span>, since <span class="chem">f'(0) = 0</span> (while <span class="chem">f'(2) = -16</span>).</p>
      answer: "<p>(a) <span class=\"chem\">f'(x) = 4x^3 - 12x^2</span>, <span class=\"chem\">f''(x) = 12x^2 - 24x</span>.<br>(b) <span class=\"chem\">(0, 10)</span>과 <span class=\"chem\">(2, -6)</span>.<br>(c) <span class=\"chem\">(0, 10)</span>, <span class=\"chem\">f'(0) = 0</span>이기 때문 (반면 <span class=\"chem\">f'(2) = -16</span>).</p>",
      markscheme: [
        // EN: A1: <span class="chem">f'(x) = 4x^3 - 12x^2</span>.
        "A1: <span class=\"chem\">f'(x) = 4x^3 - 12x^2</span>.",
        // EN: A1: <span class="chem">f''(x) = 12x^2 - 24x</span>.
        "A1: <span class=\"chem\">f''(x) = 12x^2 - 24x</span>.",
        // EN: M1: Sets <span class="chem">f''(x) = 12x(x - 2) = 0</span>.
        "M1: <span class=\"chem\">f''(x) = 12x(x - 2) = 0</span>로 놓음.",
        // EN: A1: <span class="chem">x = 0</span> and <span class="chem">x = 2</span>.
        "A1: <span class=\"chem\">x = 0</span>과 <span class=\"chem\">x = 2</span>.",
        // EN: R1: <span class="chem">f''</span> changes sign at both values (e.g. <span class="chem">f''(-1) = 36</span>, <span class="chem">f''(1) = -12</span>, <span class="chem">f''(3) = 36</span>).
        "R1: <span class=\"chem\">f''</span>은 두 값 모두에서 부호가 바뀜 (예: <span class=\"chem\">f''(-1) = 36</span>, <span class=\"chem\">f''(1) = -12</span>, <span class=\"chem\">f''(3) = 36</span>).",
        // EN: A1: <span class="chem">(0, 10)</span> and <span class="chem">(2, -6)</span>.
        "A1: <span class=\"chem\">(0, 10)</span>과 <span class=\"chem\">(2, -6)</span>.",
        // EN: A1: <span class="chem">f'(0) = 0</span> so <span class="chem">(0, 10)</span> is the stationary point of inflexion; <span class="chem">f'(2) = -16 != 0</span>, so <span class="chem">(2, -6)</span> is non-stationary.
        "A1: <span class=\"chem\">f'(0) = 0</span>이므로 <span class=\"chem\">(0, 10)</span>이 정류 변곡점; <span class=\"chem\">f'(2) = -16 != 0</span>이므로 <span class=\"chem\">(2, -6)</span>은 비정류.",
      ],
    },

    // ── t5-1-q026 · short · challenge · SL · SL 5.7, 5.8 · 6 marks
    "t5-1-q026": {
      // EN: <p>Let <span class="chem">f(x) = x^4 - 4x^3 + 6x^2 + 2x</span>. A student writes: “<span class="chem">f''(1) = 0</span>, so the graph of <span class="chem">f</span> has a point of inflexion at <span class="chem">x = 1</span>.”<br>(a) Show that <span class="chem">f''(x) = 12(x - 1)^2</span>. <strong>[2 marks]</strong><br>(b) Explain why the student’s conclusion is wrong. <strong>[2 marks]</strong><br>(c) Show that <span class="chem">f</span> has exactly one stationary point, and determine its nature. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = x^4 - 4x^3 + 6x^2 + 2x</span>이라 하자. 한 학생이 “<span class=\"chem\">f''(1) = 0</span>이므로 <span class=\"chem\">f</span>의 그래프는 <span class=\"chem\">x = 1</span>에서 변곡점을 가진다.”라고 썼어요.<br>(a) <span class=\"chem\">f''(x) = 12(x - 1)^2</span>임을 보이시오 (Show that). <strong>[2 marks]</strong><br>(b) 이 학생의 결론이 틀린 이유를 설명하시오 (Explain). <strong>[2 marks]</strong><br>(c) <span class=\"chem\">f</span>가 정류점을 정확히 하나 가짐을 보이고 (Show that), 그 성질을 판별하시오. <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: the question is testing the full definition of a point of inflexion. <span class="chem">f''(x) = 0</span> is necessary but not sufficient: <span class="chem">f''</span> must also change sign.
        "해석: 이 문제는 변곡점의 완전한 정의를 묻고 있어요. <span class=\"chem\">f''(x) = 0</span>은 필요조건이지만 충분조건은 아니에요: <span class=\"chem\">f''</span>의 부호도 바뀌어야 해요.",
        // EN: For (b), look at the sign of <span class="chem">12(x - 1)^2</span> just to the left and just to the right of <span class="chem">x = 1</span>.
        "(b)에서는 <span class=\"chem\">x = 1</span>의 바로 왼쪽과 바로 오른쪽에서 <span class=\"chem\">12(x - 1)^2</span>의 부호를 살펴보세요.",
        // EN: For (c), compare <span class="chem">f'(x)</span> with <span class="chem">4(x - 1)^3 = 4x^3 - 12x^2 + 12x - 4</span>. A cube equals a number at exactly one real value.
        "(c)에서는 <span class=\"chem\">f'(x)</span>을 <span class=\"chem\">4(x - 1)^3 = 4x^3 - 12x^2 + 12x - 4</span>와 비교하세요. 세제곱이 어떤 수와 같아지는 실수는 정확히 하나예요.",
      ],
      // EN: <p><strong>Decode:</strong> the student used only half of the test for an inflexion point. We need <span class="chem">f''(x) = 0</span> and a change of sign of <span class="chem">f''</span>.<br>(a) <span class="chem">f'(x) = 4x^3 - 12x^2 + 12x + 2</span>, so <span class="chem">f''(x) = 12x^2 - 24x + 12 = 12(x - 1)^2</span>.<br>(b) <span class="chem">12(x - 1)^2 &gt; 0</span> for every <span class="chem">x != 1</span>, so <span class="chem">f''</span> is positive on both sides of <span class="chem">x = 1</span> and does not change sign. The concavity does not change, so there is no point of inflexion at <span class="chem">x = 1</span> (the graph is concave up everywhere).<br>(c) <span class="chem">4(x - 1)^3 = 4x^3 - 12x^2 + 12x - 4</span>, so <span class="chem">f'(x) = 4(x - 1)^3 + 6</span>. Then <span class="chem">f'(x) = 0 &lt;=&gt; (x - 1)^3 = -3/2 &lt;=&gt; x = 1 - (3/2)^{1/3}</span>, the only real solution. At this point <span class="chem">x != 1</span>, so <span class="chem">f''(x) &gt; 0</span>: a local minimum.</p>
      solution: "<p><strong>해석:</strong> 이 학생은 변곡점 판정의 절반만 사용했어요. <span class=\"chem\">f''(x) = 0</span>이고 동시에 <span class=\"chem\">f''</span>의 부호가 바뀌어야 해요.<br>(a) <span class=\"chem\">f'(x) = 4x^3 - 12x^2 + 12x + 2</span>이므로 <span class=\"chem\">f''(x) = 12x^2 - 24x + 12 = 12(x - 1)^2</span>예요.<br>(b) 모든 <span class=\"chem\">x != 1</span>에 대해 <span class=\"chem\">12(x - 1)^2 &gt; 0</span>이므로 <span class=\"chem\">f''</span>은 <span class=\"chem\">x = 1</span>의 양쪽에서 양수이고 부호가 바뀌지 않아요. 오목·볼록이 바뀌지 않으므로 <span class=\"chem\">x = 1</span>에서 변곡점이 없어요 (그래프는 모든 곳에서 아래로 볼록해요).<br>(c) <span class=\"chem\">4(x - 1)^3 = 4x^3 - 12x^2 + 12x - 4</span>이므로 <span class=\"chem\">f'(x) = 4(x - 1)^3 + 6</span>이에요. 그러면 <span class=\"chem\">f'(x) = 0 &lt;=&gt; (x - 1)^3 = -3/2 &lt;=&gt; x = 1 - (3/2)^{1/3}</span>이고, 이것이 유일한 실근이에요. 이 점에서 <span class=\"chem\">x != 1</span>이므로 <span class=\"chem\">f''(x) &gt; 0</span>: 극소예요.</p>",
      // EN: <p>(a) <span class="chem">f'(x) = 4x^3 - 12x^2 + 12x + 2</span>, <span class="chem">f''(x) = 12x^2 - 24x + 12 = 12(x - 1)^2</span>.<br>(b) <span class="chem">f''(x) &gt;= 0</span> on both sides of <span class="chem">x = 1</span>, so it does not change sign: there is no point of inflexion (the graph is concave up everywhere).<br>(c) <span class="chem">f'(x) = 4(x - 1)^3 + 6 = 0</span> has the single solution <span class="chem">x = 1 - (3/2)^{1/3}</span>; there <span class="chem">f''(x) &gt; 0</span>, so it is a local minimum.</p>
      answer: "<p>(a) <span class=\"chem\">f'(x) = 4x^3 - 12x^2 + 12x + 2</span>, <span class=\"chem\">f''(x) = 12x^2 - 24x + 12 = 12(x - 1)^2</span>.<br>(b) <span class=\"chem\">x = 1</span>의 양쪽에서 <span class=\"chem\">f''(x) &gt;= 0</span>이므로 부호가 바뀌지 않음: 변곡점이 없음 (그래프는 모든 곳에서 아래로 볼록).<br>(c) <span class=\"chem\">f'(x) = 4(x - 1)^3 + 6 = 0</span>는 유일한 해 <span class=\"chem\">x = 1 - (3/2)^{1/3}</span>을 가짐; 그곳에서 <span class=\"chem\">f''(x) &gt; 0</span>이므로 극소임.</p>",
      markscheme: [
        // EN: A1: <span class="chem">f'(x) = 4x^3 - 12x^2 + 12x + 2</span>.
        "A1: <span class=\"chem\">f'(x) = 4x^3 - 12x^2 + 12x + 2</span>.",
        // EN: A1: <span class="chem">f''(x) = 12x^2 - 24x + 12 = 12(x^2 - 2x + 1) = 12(x - 1)^2</span> (AG).
        "A1: <span class=\"chem\">f''(x) = 12x^2 - 24x + 12 = 12(x^2 - 2x + 1) = 12(x - 1)^2</span> (AG).",
        // EN: R1: <span class="chem">f''(x) = 12(x - 1)^2 &gt;= 0</span> for all <span class="chem">x</span>, so <span class="chem">f''</span> does not change sign at <span class="chem">x = 1</span>.
        "R1: 모든 <span class=\"chem\">x</span>에 대해 <span class=\"chem\">f''(x) = 12(x - 1)^2 &gt;= 0</span>이므로 <span class=\"chem\">f''</span>은 <span class=\"chem\">x = 1</span>에서 부호가 바뀌지 않음.",
        // EN: A1: So <span class="chem">x = 1</span> is not a point of inflexion; <span class="chem">f''(x) = 0</span> alone is not enough.
        "A1: 따라서 <span class=\"chem\">x = 1</span>은 변곡점이 아님; <span class=\"chem\">f''(x) = 0</span>만으로는 충분하지 않음.",
        // EN: M1: Writes <span class="chem">f'(x) = 4(x - 1)^3 + 6 = 0</span>, so <span class="chem">(x - 1)^3 = -3/2</span>, which has exactly one real solution <span class="chem">x = 1 - (3/2)^{1/3}</span>.
        "M1: <span class=\"chem\">f'(x) = 4(x - 1)^3 + 6 = 0</span>로 쓰면 <span class=\"chem\">(x - 1)^3 = -3/2</span>이고, 이는 정확히 하나의 실근 <span class=\"chem\">x = 1 - (3/2)^{1/3}</span>을 가짐.",
        // EN: R1: At this <span class="chem">x</span> (which is not <span class="chem">1</span>), <span class="chem">f''(x) &gt; 0</span>, so the stationary point is a local minimum.
        "R1: 이 <span class=\"chem\">x</span>(<span class=\"chem\">1</span>이 아님)에서 <span class=\"chem\">f''(x) &gt; 0</span>이므로 정류점은 극소점임.",
      ],
    },

    // ── t5-1-q027 · numeric · challenge · SL · SL 5.8 · 6 marks
    "t5-1-q027": {
      // EN: <p>A farmer builds a rectangular pen against a straight stone wall that is <span class="chem">30</span> <span class="unit">m</span> long. The wall forms one complete side of the pen, so no fence is needed on that side, and the side along the wall cannot be longer than the wall. The other three sides use exactly <span class="chem">80</span> <span class="unit">m</span> of fencing. Find the greatest possible area of the pen, in <span class="unit">m2</span>.</p>
      stem: "<p>한 농부가 길이 <span class=\"chem\">30</span> <span class=\"unit\">m</span>인 곧은 돌담에 붙여 직사각형 우리를 만들어요. 돌담이 우리의 한 변 전체가 되므로 그 변에는 울타리가 필요 없고, 돌담을 따라가는 변은 돌담보다 길 수 없어요. 나머지 세 변에는 울타리를 정확히 <span class=\"chem\">80</span> <span class=\"unit\">m</span> 사용해요. 우리의 넓이의 최댓값을 <span class=\"unit\">m2</span> 단위로 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: this is an optimisation with a hidden restriction. The side along the wall is at most 30 m, so the variable has a restricted domain, and the maximum may be at an endpoint rather than where the derivative is zero.
        "해석: 이것은 숨은 제한이 있는 최대·최소 문제예요. 돌담을 따라가는 변은 최대 30 m이므로 변수의 정의역이 제한되고, 최댓값은 도함수가 0인 곳이 아니라 끝점에서 나타날 수 있어요.",
        // EN: Let each side perpendicular to the wall be <span class="chem">x</span> <span class="unit">m</span>. Then the side along the wall is <span class="chem">80 - 2x</span>, and <span class="chem">80 - 2x &lt;= 30</span> gives <span class="chem">x &gt;= 25</span>.
        "돌담에 수직인 각 변을 <span class=\"chem\">x</span> <span class=\"unit\">m</span>라 하세요. 그러면 돌담을 따라가는 변은 <span class=\"chem\">80 - 2x</span>이고, <span class=\"chem\">80 - 2x &lt;= 30</span>에서 <span class=\"chem\">x &gt;= 25</span>를 얻어요.",
        // EN: <span class="chem">A(x) = x(80 - 2x)</span>, <span class="chem">A'(x) = 80 - 4x</span>. Where is <span class="chem">A'(x) = 0</span>? Is that value allowed? What is the sign of <span class="chem">A'</span> for <span class="chem">25 &lt;= x &lt; 40</span>?
        "<span class=\"chem\">A(x) = x(80 - 2x)</span>, <span class=\"chem\">A'(x) = 80 - 4x</span>. <span class=\"chem\">A'(x) = 0</span>인 곳은 어디인가요? 그 값은 허용되나요? <span class=\"chem\">25 &lt;= x &lt; 40</span>에서 <span class=\"chem\">A'</span>의 부호는 어떤가요?",
      ],
      // EN: <p><strong>Decode:</strong> the wall length is a constraint on the domain, so we must check the endpoint, not just solve <span class="chem">A'(x) = 0</span>.<br>Let the two sides perpendicular to the wall be <span class="chem">x</span> <span class="unit">m</span>; the side along the wall is <span class="chem">80 - 2x</span> <span class="unit">m</span>. We need <span class="chem">0 &lt; 80 - 2x &lt;= 30</span>, so <span class="chem">25 &lt;= x &lt; 40</span>.<br><span class="chem">A(x) = x(80 - 2x) = 80x - 2x^2</span> and <span class="chem">A'(x) = 80 - 4x = 0 =&gt; x = 20</span>, which is <strong>not</strong> in the domain. For <span class="chem">25 &lt;= x &lt; 40</span>, <span class="chem">A'(x) &lt; 0</span>, so <span class="chem">A</span> is decreasing and its greatest value is at the endpoint <span class="chem">x = 25</span>: the pen is <span class="chem">25</span> <span class="unit">m</span> by <span class="chem">30</span> <span class="unit">m</span>, and <span class="chem">A = 25 * 30 = 750</span> <span class="unit">m2</span>. (The unrestricted answer <span class="chem">A(20) = 800</span> would need a 40 m wall.)</p>
      solution: "<p><strong>해석:</strong> 돌담의 길이는 정의역에 대한 제약이므로 <span class=\"chem\">A'(x) = 0</span>을 푸는 것만이 아니라 끝점을 확인해야 해요.<br>돌담에 수직인 두 변을 <span class=\"chem\">x</span> <span class=\"unit\">m</span>라 하면 돌담을 따라가는 변은 <span class=\"chem\">80 - 2x</span> <span class=\"unit\">m</span>예요. <span class=\"chem\">0 &lt; 80 - 2x &lt;= 30</span>이어야 하므로 <span class=\"chem\">25 &lt;= x &lt; 40</span>이에요.<br><span class=\"chem\">A(x) = x(80 - 2x) = 80x - 2x^2</span>, <span class=\"chem\">A'(x) = 80 - 4x = 0 =&gt; x = 20</span>이지만 이 값은 정의역 안에 <strong>없어요</strong>. <span class=\"chem\">25 &lt;= x &lt; 40</span>에서 <span class=\"chem\">A'(x) &lt; 0</span>이므로 <span class=\"chem\">A</span>는 감소하고, 최댓값은 끝점 <span class=\"chem\">x = 25</span>에서 나타나요: 우리는 <span class=\"chem\">25</span> <span class=\"unit\">m</span> × <span class=\"chem\">30</span> <span class=\"unit\">m</span>이고 <span class=\"chem\">A = 25 * 30 = 750</span> <span class=\"unit\">m2</span>예요. (제한을 무시한 답 <span class=\"chem\">A(20) = 800</span>에는 40 m 길이의 돌담이 필요해요.)</p>",
    },

    // ── t5-1-q028 · short · exam · SL · SL 5.4 · 6 marks
    "t5-1-q028": {
      // EN: <p>The point <span class="chem">P(3, 2)</span> lies on the curve <span class="chem">y = x^2 - 4x + 5</span>.<br>(a) Find the equation of the normal to the curve at <span class="chem">P</span>. <strong>[3 marks]</strong><br>(b) The normal meets the curve again at <span class="chem">Q</span>. Find the coordinates of <span class="chem">Q</span>. <strong>[3 marks]</strong></p>
      stem: "<p>점 <span class=\"chem\">P(3, 2)</span>은 곡선 <span class=\"chem\">y = x^2 - 4x + 5</span> 위에 있어요.<br>(a) <span class=\"chem\">P</span>에서 곡선의 법선의 방정식을 구하시오 (Find). <strong>[3 marks]</strong><br>(b) 법선은 곡선과 <span class=\"chem\">Q</span>에서 다시 만나요. <span class=\"chem\">Q</span>의 좌표를 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: The normal is perpendicular to the tangent, so its gradient is <span class="chem">-1 / (dy/dx)</span>.
        "법선은 접선에 수직이므로 그 기울기는 <span class=\"chem\">-1 / (dy/dx)</span>이에요.",
        // EN: For (b), set the curve equal to the normal. You already know one root, <span class="chem">x = 3</span>, which helps you factorise.
        "(b)에서는 곡선의 식과 법선의 식을 같게 놓으세요. 근 하나 <span class=\"chem\">x = 3</span>를 이미 알고 있으니 인수분해에 도움이 돼요.",
      ],
      // EN: <p>(a) <span class="chem">dy/dx = 2x - 4 = 2</span> at <span class="chem">x = 3</span>, so the normal has gradient <span class="chem">-1/2</span>: <span class="chem">y - 2 = -(1/2)(x - 3) =&gt; y = -x/2 + 7/2</span>.<br>(b) <span class="chem">x^2 - 4x + 5 = -x/2 + 7/2 =&gt; 2x^2 - 8x + 10 = -x + 7 =&gt; 2x^2 - 7x + 3 = 0 =&gt; (2x - 1)(x - 3) = 0</span>. The root <span class="chem">x = 3</span> is <span class="chem">P</span>, so <span class="chem">x = 1/2</span> and <span class="chem">y = 1/4 - 2 + 5 = 13/4</span>: <span class="chem">Q(1/2, 13/4)</span>.</p>
      solution: "<p>(a) <span class=\"chem\">x = 3</span>에서 <span class=\"chem\">dy/dx = 2x - 4 = 2</span>이므로 법선의 기울기는 <span class=\"chem\">-1/2</span>이에요: <span class=\"chem\">y - 2 = -(1/2)(x - 3) =&gt; y = -x/2 + 7/2</span>.<br>(b) <span class=\"chem\">x^2 - 4x + 5 = -x/2 + 7/2 =&gt; 2x^2 - 8x + 10 = -x + 7 =&gt; 2x^2 - 7x + 3 = 0 =&gt; (2x - 1)(x - 3) = 0</span>. 근 <span class=\"chem\">x = 3</span>은 <span class=\"chem\">P</span>에 해당하므로 <span class=\"chem\">x = 1/2</span>, <span class=\"chem\">y = 1/4 - 2 + 5 = 13/4</span>: <span class=\"chem\">Q(1/2, 13/4)</span>이에요.</p>",
      // EN: <p>(a) <span class="chem">y = -x/2 + 7/2</span> (or <span class="chem">x + 2y = 7</span>).<br>(b) <span class="chem">Q(1/2, 13/4)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">y = -x/2 + 7/2</span> (또는 <span class=\"chem\">x + 2y = 7</span>).<br>(b) <span class=\"chem\">Q(1/2, 13/4)</span>.</p>",
      markscheme: [
        // EN: A1: <span class="chem">dy/dx = 2x - 4</span>, so the gradient of the tangent at <span class="chem">P</span> is <span class="chem">2</span>.
        "A1: <span class=\"chem\">dy/dx = 2x - 4</span>이므로 <span class=\"chem\">P</span>에서 접선의 기울기는 <span class=\"chem\">2</span>.",
        // EN: M1: Gradient of the normal is <span class="chem">-1/2</span> (negative reciprocal).
        "M1: 법선의 기울기는 <span class=\"chem\">-1/2</span> (음의 역수).",
        // EN: A1: <span class="chem">y - 2 = -(1/2)(x - 3)</span>, i.e. <span class="chem">y = -x/2 + 7/2</span>.
        "A1: <span class=\"chem\">y - 2 = -(1/2)(x - 3)</span>, 즉 <span class=\"chem\">y = -x/2 + 7/2</span>.",
        // EN: M1: Equates the curve and the normal: <span class="chem">x^2 - 4x + 5 = -x/2 + 7/2</span>.
        "M1: 곡선과 법선의 식을 같게 놓음: <span class=\"chem\">x^2 - 4x + 5 = -x/2 + 7/2</span>.",
        // EN: A1: <span class="chem">2x^2 - 7x + 3 = 0 =&gt; (2x - 1)(x - 3) = 0</span>, so <span class="chem">x = 1/2</span> (<span class="chem">x = 3</span> is <span class="chem">P</span>).
        "A1: <span class=\"chem\">2x^2 - 7x + 3 = 0 =&gt; (2x - 1)(x - 3) = 0</span>이므로 <span class=\"chem\">x = 1/2</span> (<span class=\"chem\">x = 3</span>은 <span class=\"chem\">P</span>에 해당).",
        // EN: A1: <span class="chem">Q(1/2, 13/4)</span>.
        "A1: <span class=\"chem\">Q(1/2, 13/4)</span>.",
      ],
    },

    // ── t5-1-q029 · short · exam · SL · SL 5.2, 5.7 · 6 marks
    "t5-1-q029": {
      // EN: <p>Let <span class="chem">f(x) = x^3 - 6x^2 + 9x + 1</span>.<br>(a) Find <span class="chem">f'(x)</span>. <strong>[1 mark]</strong><br>(b) Sketch the graph of <span class="chem">y = f'(x)</span> for <span class="chem">0 &lt;= x &lt;= 4</span>, labelling the intercepts with the axes and the vertex. <strong>[3 marks]</strong><br>(c) Using your sketch, write down (i) the interval on which <span class="chem">f</span> is decreasing; (ii) the <span class="chem">x</span>-coordinate of the point of inflexion on the graph of <span class="chem">f</span>. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = x^3 - 6x^2 + 9x + 1</span>이라 하자.<br>(a) <span class=\"chem\">f'(x)</span>을 구하시오 (Find). <strong>[1 mark]</strong><br>(b) <span class=\"chem\">0 &lt;= x &lt;= 4</span>에서 <span class=\"chem\">y = f'(x)</span>의 그래프를 그리고 (Sketch), 좌표축과의 교점과 꼭짓점을 표시하시오. <strong>[3 marks]</strong><br>(c) 그린 그래프를 이용하여 (i) <span class=\"chem\">f</span>가 감소하는 구간; (ii) <span class=\"chem\">f</span>의 그래프 위의 변곡점의 <span class=\"chem\">x</span>좌표를 쓰시오 (write down). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: <span class="chem">f'(x)</span> is a quadratic: find its roots by factorising and its vertex by completing the square or using <span class="chem">x = -b / (2a)</span>.
        "<span class=\"chem\">f'(x)</span>은 이차식이에요: 인수분해로 근을 구하고, 완전제곱식이나 <span class=\"chem\">x = -b / (2a)</span>를 이용해 꼭짓점을 구하세요.",
        // EN: <span class="chem">f</span> decreases where the graph of <span class="chem">f'</span> is below the axis. <span class="chem">f''</span> is the gradient of <span class="chem">f'</span>, so an inflexion of <span class="chem">f</span> is at a turning point of <span class="chem">f'</span>.
        "<span class=\"chem\">f</span>는 <span class=\"chem\">f'</span>의 그래프가 축 아래에 있는 곳에서 감소해요. <span class=\"chem\">f''</span>은 <span class=\"chem\">f'</span>의 기울기이므로 <span class=\"chem\">f</span>의 변곡점은 <span class=\"chem\">f'</span>의 극점에 있어요.",
      ],
      // EN: <p>(a) <span class="chem">f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)</span>.<br>(b) <span class="chem">f'(0) = 9</span>, roots <span class="chem">x = 1, 3</span>, vertex at <span class="chem">x = 2</span> with <span class="chem">f'(2) = 12 - 24 + 9 = -3</span>, and <span class="chem">f'(4) = 9</span>. Draw a symmetric upward parabola through these points.<br>(c)(i) The graph of <span class="chem">f'</span> is below the <span class="chem">x</span>-axis for <span class="chem">1 &lt; x &lt; 3</span>, so <span class="chem">f</span> is decreasing there. (ii) The gradient of <span class="chem">f'</span> (that is, <span class="chem">f''</span>) is negative before the vertex and positive after it, so <span class="chem">f''</span> changes sign at <span class="chem">x = 2</span>: the point of inflexion of <span class="chem">f</span> is at <span class="chem">x = 2</span>.</p>
      solution: "<p>(a) <span class=\"chem\">f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)</span>.<br>(b) <span class=\"chem\">f'(0) = 9</span>, 근 <span class=\"chem\">x = 1, 3</span>, 꼭짓점은 <span class=\"chem\">x = 2</span>이고 <span class=\"chem\">f'(2) = 12 - 24 + 9 = -3</span>, 그리고 <span class=\"chem\">f'(4) = 9</span>. 이 점들을 지나는 대칭인 아래로 볼록한 포물선을 그려요.<br>(c)(i) <span class=\"chem\">1 &lt; x &lt; 3</span>에서 <span class=\"chem\">f'</span>의 그래프는 <span class=\"chem\">x</span>축 아래에 있으므로 <span class=\"chem\">f</span>는 그 구간에서 감소해요. (ii) <span class=\"chem\">f'</span>의 기울기(즉 <span class=\"chem\">f''</span>)는 꼭짓점 앞에서 음수, 뒤에서 양수이므로 <span class=\"chem\">f''</span>은 <span class=\"chem\">x = 2</span>에서 부호가 바뀌어요: <span class=\"chem\">f</span>의 변곡점은 <span class=\"chem\">x = 2</span>에 있어요.</p>",
      // EN: <p>(a) <span class="chem">f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)</span>.<br>(b) An upward parabola through <span class="chem">(0, 9)</span>, <span class="chem">(1, 0)</span>, <span class="chem">(3, 0)</span> and <span class="chem">(4, 9)</span>, with vertex <span class="chem">(2, -3)</span>.<br>(c)(i) <span class="chem">1 &lt; x &lt; 3</span>; (ii) <span class="chem">x = 2</span>.</p>
      answer: "<p>(a) <span class=\"chem\">f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)</span>.<br>(b) <span class=\"chem\">(0, 9)</span>, <span class=\"chem\">(1, 0)</span>, <span class=\"chem\">(3, 0)</span>, <span class=\"chem\">(4, 9)</span>를 지나고 꼭짓점이 <span class=\"chem\">(2, -3)</span>인 아래로 볼록한 포물선.<br>(c)(i) <span class=\"chem\">1 &lt; x &lt; 3</span>; (ii) <span class=\"chem\">x = 2</span>.</p>",
      markscheme: [
        // EN: A1: <span class="chem">f'(x) = 3x^2 - 12x + 9</span>.
        "A1: <span class=\"chem\">f'(x) = 3x^2 - 12x + 9</span>.",
        // EN: A1: Sketch is a concave-up parabola over <span class="chem">0 &lt;= x &lt;= 4</span>.
        "A1: 그래프가 <span class=\"chem\">0 &lt;= x &lt;= 4</span>에서 아래로 볼록한 포물선임.",
        // EN: A1: <span class="chem">x</span>-intercepts <span class="chem">(1, 0)</span>, <span class="chem">(3, 0)</span> and <span class="chem">y</span>-intercept <span class="chem">(0, 9)</span> labelled.
        "A1: <span class=\"chem\">x</span>절편 <span class=\"chem\">(1, 0)</span>, <span class=\"chem\">(3, 0)</span>과 <span class=\"chem\">y</span>절편 <span class=\"chem\">(0, 9)</span>를 표시함.",
        // EN: A1: Vertex <span class="chem">(2, -3)</span> labelled.
        "A1: 꼭짓점 <span class=\"chem\">(2, -3)</span>을 표시함.",
        // EN: A1: (i) <span class="chem">1 &lt; x &lt; 3</span> (where the graph of <span class="chem">f'</span> is below the <span class="chem">x</span>-axis).
        "A1: (i) <span class=\"chem\">1 &lt; x &lt; 3</span> (<span class=\"chem\">f'</span>의 그래프가 <span class=\"chem\">x</span>축 아래에 있는 곳).",
        // EN: A1: (ii) <span class="chem">x = 2</span> (the turning point of <span class="chem">f'</span>, where <span class="chem">f''</span> changes sign).
        "A1: (ii) <span class=\"chem\">x = 2</span> (<span class=\"chem\">f'</span>의 극점으로, <span class=\"chem\">f''</span>의 부호가 바뀌는 곳).",
      ],
    },

    // ── t5-1-q030 · numeric · exam · SL · SL 5.6, 5.8 · 6 marks
    "t5-1-q030": {
      // EN: <p>Let <span class="chem">f(x) = 2 sin x + cos 2x</span> for <span class="chem">0 &lt;= x &lt;= pi</span>. Find the maximum value of <span class="chem">f</span>.</p>
      stem: "<p><span class=\"chem\">0 &lt;= x &lt;= pi</span>에서 <span class=\"chem\">f(x) = 2 sin x + cos 2x</span>이라 하자. <span class=\"chem\">f</span>의 최댓값을 구하시오 (Find).</p>",
      hints: [
        // EN: Differentiate with the chain rule: <span class="chem">f'(x) = 2 cos x - 2 sin 2x</span>. Use <span class="chem">sin 2x = 2 sin x cos x</span> to factorise.
        "연쇄법칙으로 미분하세요: <span class=\"chem\">f'(x) = 2 cos x - 2 sin 2x</span>. <span class=\"chem\">sin 2x = 2 sin x cos x</span>를 이용해 인수분해하세요.",
        // EN: <span class="chem">f'(x) = 2 cos x (1 - 2 sin x)</span>. Solve <span class="chem">cos x = 0</span> and <span class="chem">sin x = 1/2</span> in <span class="chem">[0, pi]</span>, then compare <span class="chem">f</span> at these points <strong>and</strong> at the endpoints.
        "<span class=\"chem\">f'(x) = 2 cos x (1 - 2 sin x)</span>. <span class=\"chem\">[0, pi]</span>에서 <span class=\"chem\">cos x = 0</span>와 <span class=\"chem\">sin x = 1/2</span>을 풀고, 이 점들<strong>과</strong> 끝점에서 <span class=\"chem\">f</span>의 값을 비교하세요.",
      ],
      // EN: <p><span class="chem">f'(x) = 2 cos x - 2 sin 2x = 2 cos x - 4 sin x cos x = 2 cos x (1 - 2 sin x)</span>. In <span class="chem">[0, pi]</span>: <span class="chem">cos x = 0 =&gt; x = pi/2</span>; <span class="chem">sin x = 1/2 =&gt; x = pi/6, 5pi/6</span>.<br>Values: <span class="chem">f(pi/6) = 1 + 1/2 = 3/2</span>, <span class="chem">f(pi/2) = 2 - 1 = 1</span>, <span class="chem">f(5pi/6) = 1 + 1/2 = 3/2</span>, and at the endpoints <span class="chem">f(0) = 1</span>, <span class="chem">f(pi) = 1</span>.<br>The maximum value is <span class="chem">3/2</span> (at <span class="chem">x = pi/6</span> and <span class="chem">x = 5pi/6</span>).</p>
      solution: "<p><span class=\"chem\">f'(x) = 2 cos x - 2 sin 2x = 2 cos x - 4 sin x cos x = 2 cos x (1 - 2 sin x)</span>. <span class=\"chem\">[0, pi]</span>에서: <span class=\"chem\">cos x = 0 =&gt; x = pi/2</span>; <span class=\"chem\">sin x = 1/2 =&gt; x = pi/6, 5pi/6</span>.<br>값: <span class=\"chem\">f(pi/6) = 1 + 1/2 = 3/2</span>, <span class=\"chem\">f(pi/2) = 2 - 1 = 1</span>, <span class=\"chem\">f(5pi/6) = 1 + 1/2 = 3/2</span>, 그리고 끝점에서 <span class=\"chem\">f(0) = 1</span>, <span class=\"chem\">f(pi) = 1</span>.<br>최댓값은 <span class=\"chem\">3/2</span>이에요 (<span class=\"chem\">x = pi/6</span>과 <span class=\"chem\">x = 5pi/6</span>에서).</p>",
    },

    // ── t5-1-q031 · numeric · challenge · SL · SL 5.4 · 7 marks
    "t5-1-q031": {
      // EN: <p>Two different tangents to the curve <span class="chem">y = x^2</span> pass through the point <span class="chem">P(1, -3)</span>, which does not lie on the curve. They touch the curve at <span class="chem">A</span> and <span class="chem">B</span>. Find the area of triangle <span class="chem">PAB</span>.</p>
      stem: "<p>곡선 <span class=\"chem\">y = x^2</span>의 서로 다른 두 접선이 곡선 위에 있지 않은 점 <span class=\"chem\">P(1, -3)</span>를 지나요. 두 접선은 곡선과 <span class=\"chem\">A</span>, <span class=\"chem\">B</span>에서 접해요. 삼각형 <span class=\"chem\">PAB</span>의 넓이를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: you do not know where the tangents touch the curve. Call a point of contact <span class="chem">(a, a^2)</span>, write the tangent there in terms of <span class="chem">a</span>, and use the fact that it passes through <span class="chem">P</span> to find <span class="chem">a</span>.
        "해석: 접선이 곡선과 어디에서 접하는지 모르고 있어요. 접점을 <span class=\"chem\">(a, a^2)</span>로 놓고 그곳에서의 접선을 <span class=\"chem\">a</span>로 나타낸 뒤, 그 접선이 <span class=\"chem\">P</span>를 지난다는 사실을 이용해 <span class=\"chem\">a</span>를 구하세요.",
        // EN: The tangent at <span class="chem">(a, a^2)</span> is <span class="chem">y = 2a x - a^2</span>. Substituting <span class="chem">(1, -3)</span> gives a quadratic in <span class="chem">a</span>.
        "<span class=\"chem\">(a, a^2)</span>에서의 접선은 <span class=\"chem\">y = 2a x - a^2</span>예요. <span class=\"chem\">(1, -3)</span>을 대입하면 <span class=\"chem\">a</span>에 대한 이차방정식을 얻어요.",
        // EN: You should find <span class="chem">A(3, 9)</span> and <span class="chem">B(-1, 1)</span>. Use the vectors <span class="chem">PA</span> and <span class="chem">PB</span> (or a rectangle minus three right triangles) to find the area.
        "<span class=\"chem\">A(3, 9)</span>과 <span class=\"chem\">B(-1, 1)</span>을 얻어야 해요. 벡터 <span class=\"chem\">PA</span>와 <span class=\"chem\">PB</span>(또는 직사각형에서 직각삼각형 세 개를 빼는 방법)를 이용해 넓이를 구하세요.",
      ],
      // EN: <p><strong>Decode:</strong> the unknowns are the points of contact, so let one be <span class="chem">(a, a^2)</span> and make the tangent there pass through <span class="chem">P</span>.<br>The gradient at <span class="chem">(a, a^2)</span> is <span class="chem">2a</span>, so the tangent is <span class="chem">y - a^2 = 2a(x - a) =&gt; y = 2a x - a^2</span>. Through <span class="chem">(1, -3)</span>: <span class="chem">-3 = 2a - a^2 =&gt; a^2 - 2a - 3 = 0 =&gt; (a - 3)(a + 1) = 0</span>, so <span class="chem">A(3, 9)</span> and <span class="chem">B(-1, 1)</span>.<br>With <span class="chem">PA = (2, 12)</span> and <span class="chem">PB = (-2, 4)</span>, the area is <span class="chem">(1/2)|2 * 4 - 12 * (-2)| = (1/2)(8 + 24) = 16</span>.</p>
      solution: "<p><strong>해석:</strong> 미지수는 접점이므로 그중 하나를 <span class=\"chem\">(a, a^2)</span>로 놓고, 그곳에서의 접선이 <span class=\"chem\">P</span>를 지나게 해요.<br><span class=\"chem\">(a, a^2)</span>에서의 기울기는 <span class=\"chem\">2a</span>이므로 접선은 <span class=\"chem\">y - a^2 = 2a(x - a) =&gt; y = 2a x - a^2</span>예요. <span class=\"chem\">(1, -3)</span>을 지나므로: <span class=\"chem\">-3 = 2a - a^2 =&gt; a^2 - 2a - 3 = 0 =&gt; (a - 3)(a + 1) = 0</span>, 따라서 <span class=\"chem\">A(3, 9)</span>, <span class=\"chem\">B(-1, 1)</span>이에요.<br><span class=\"chem\">PA = (2, 12)</span>, <span class=\"chem\">PB = (-2, 4)</span>이므로 넓이는 <span class=\"chem\">(1/2)|2 * 4 - 12 * (-2)| = (1/2)(8 + 24) = 16</span>예요.</p>",
    },

    // ── t5-1-q032 · numeric · exam · SL · SL 5.1, 5.6 · 3 marks
    "t5-1-q032": {
      // EN: <p>The number of people, <span class="chem">N</span> hundred, who have heard a rumour <span class="chem">t</span> days after it starts is modelled by <span class="chem">N(t) = 60 - 40e^{-t/2}</span>. Find the rate at which <span class="chem">N</span> is increasing when <span class="chem">t = 2 ln 4</span>, in hundreds of people per day.</p>
      stem: "<p>소문이 퍼지기 시작한 지 <span class=\"chem\">t</span>일 후 그 소문을 들은 사람의 수 <span class=\"chem\">N</span>백 명은 <span class=\"chem\">N(t) = 60 - 40e^{-t/2}</span>으로 모델링돼요. <span class=\"chem\">t = 2 ln 4</span>일 때 <span class=\"chem\">N</span>이 증가하는 비율을 하루에 몇백 명 단위로 구하시오 (Find).</p>",
      hints: [
        // EN: The rate of increase is the derivative <span class="chem">N'(t)</span>. Use the chain rule on <span class="chem">e^{-t/2}</span>.
        "증가하는 비율은 도함수 <span class=\"chem\">N'(t)</span>이에요. <span class=\"chem\">e^{-t/2}</span>에 연쇄법칙을 쓰세요.",
        // EN: <span class="chem">N'(t) = 20e^{-t/2}</span>. At <span class="chem">t = 2 ln 4</span>, <span class="chem">-t/2 = -ln 4</span>, and <span class="chem">e^{-ln 4} = 1/4</span>.
        "<span class=\"chem\">N'(t) = 20e^{-t/2}</span>. <span class=\"chem\">t = 2 ln 4</span>에서 <span class=\"chem\">-t/2 = -ln 4</span>이고, <span class=\"chem\">e^{-ln 4} = 1/4</span>예요.",
      ],
      // EN: <p><span class="chem">N'(t) = -40 * (-1/2) e^{-t/2} = 20e^{-t/2}</span>. When <span class="chem">t = 2 ln 4</span>, <span class="chem">e^{-t/2} = e^{-ln 4} = 1/4</span>, so <span class="chem">N'(2 ln 4) = 20 * 1/4 = 5</span>: the number is increasing at <span class="chem">5</span> hundred people per day.</p>
      solution: "<p><span class=\"chem\">N'(t) = -40 * (-1/2) e^{-t/2} = 20e^{-t/2}</span>. <span class=\"chem\">t = 2 ln 4</span>일 때 <span class=\"chem\">e^{-t/2} = e^{-ln 4} = 1/4</span>이므로 <span class=\"chem\">N'(2 ln 4) = 20 * 1/4 = 5</span>: 사람 수는 하루에 <span class=\"chem\">5</span>백 명의 비율로 증가하고 있어요.</p>",
    },

    // ── t5-1-q033 · numeric · challenge · SL · SL 5.8 · 7 marks
    "t5-1-q033": {
      // EN: <p>A ferry makes a <span class="chem">300</span> <span class="unit">km</span> crossing at a constant speed of <span class="chem">v</span> <span class="unit">km h-1</span>. Its running cost is <span class="chem">160 + 0.1v^2</span> dollars <strong>per hour</strong>. The greatest speed the ferry can reach is <span class="chem">32</span> <span class="unit">km h-1</span>. Find the minimum cost of one crossing, in dollars, correct to two decimal places.</p>
      stem: "<p>여객선이 <span class=\"chem\">v</span> <span class=\"unit\">km h-1</span>의 일정한 속력으로 <span class=\"chem\">300</span> <span class=\"unit\">km</span>를 건너요. 운항 비용은 <strong>시간당</strong> <span class=\"chem\">160 + 0.1v^2</span>달러예요. 여객선이 낼 수 있는 최고 속력은 <span class=\"chem\">32</span> <span class=\"unit\">km h-1</span>예요. 한 번 건너는 데 드는 최소 비용을 달러 단위로 소수점 아래 2자리까지 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: the cost is given per hour, but the question wants the cost of the whole trip, so first multiply by the time taken, <span class="chem">300 / v</span> hours. Then remember the speed limit: <span class="chem">0 &lt; v &lt;= 32</span>.
        "해석: 비용은 시간당으로 주어졌지만 문제는 전체 운항 비용을 묻고 있으므로, 먼저 걸리는 시간 <span class=\"chem\">300 / v</span>시간을 곱하세요. 그리고 속력 제한 <span class=\"chem\">0 &lt; v &lt;= 32</span>를 잊지 마세요.",
        // EN: Total cost <span class="chem">C(v) = (300 / v)(160 + 0.1v^2) = 48000 / v + 30v</span>. Solve <span class="chem">C'(v) = 0</span>.
        "총비용 <span class=\"chem\">C(v) = (300 / v)(160 + 0.1v^2) = 48000 / v + 30v</span>. <span class=\"chem\">C'(v) = 0</span>를 푸세요.",
        // EN: The stationary point is at <span class="chem">v = 40</span>, which the ferry cannot reach. What is the sign of <span class="chem">C'(v)</span> for <span class="chem">0 &lt; v &lt;= 32</span>?
        "정류점은 <span class=\"chem\">v = 40</span>인데, 여객선은 그 속력에 도달할 수 없어요. <span class=\"chem\">0 &lt; v &lt;= 32</span>에서 <span class=\"chem\">C'(v)</span>의 부호는 어떤가요?",
      ],
      // EN: <p><strong>Decode:</strong> convert the hourly cost into a trip cost, and treat the top speed as an endpoint of the domain.<br>Time <span class="chem">= 300 / v</span> hours, so <span class="chem">C(v) = (300 / v)(160 + 0.1v^2) = 48000v^{-1} + 30v</span> for <span class="chem">0 &lt; v &lt;= 32</span>.<br><span class="chem">C'(v) = -48000 / v^2 + 30 = 0 =&gt; v^2 = 1600 =&gt; v = 40</span>, outside the domain. For <span class="chem">0 &lt; v &lt;= 32</span>, <span class="chem">v^2 &lt; 1600</span> so <span class="chem">C'(v) &lt; 0</span>: the cost decreases all the way to the endpoint. The minimum is <span class="chem">C(32) = 48000/32 + 30(32) = 1500 + 960 = 2460</span>, i.e. <span class="chem">2460.00</span> dollars.</p>
      solution: "<p><strong>해석:</strong> 시간당 비용을 운항 전체 비용으로 바꾸고, 최고 속력을 정의역의 끝점으로 다뤄요.<br>시간 <span class=\"chem\">= 300 / v</span>시간이므로 <span class=\"chem\">0 &lt; v &lt;= 32</span>에서 <span class=\"chem\">C(v) = (300 / v)(160 + 0.1v^2) = 48000v^{-1} + 30v</span>예요.<br><span class=\"chem\">C'(v) = -48000 / v^2 + 30 = 0 =&gt; v^2 = 1600 =&gt; v = 40</span>이고, 이는 정의역 밖이에요. <span class=\"chem\">0 &lt; v &lt;= 32</span>에서 <span class=\"chem\">v^2 &lt; 1600</span>이므로 <span class=\"chem\">C'(v) &lt; 0</span>: 비용은 끝점까지 계속 감소해요. 최솟값은 <span class=\"chem\">C(32) = 48000/32 + 30(32) = 1500 + 960 = 2460</span>, 즉 <span class=\"chem\">2460.00</span>달러예요.</p>",
    },

    // ── t5-1-q034 · short · exam · SL · SL 5.3, 5.4 · 4 marks
    "t5-1-q034": {
      // EN: <p>Find the coordinates of the points on the curve <span class="chem">y = x^3 - 3x^2 + 1</span> at which the tangent is parallel to the line <span class="chem">y = 9x + 2</span>. <strong>[4 marks]</strong></p>
      stem: "<p>곡선 <span class=\"chem\">y = x^3 - 3x^2 + 1</span> 위에서 접선이 직선 <span class=\"chem\">y = 9x + 2</span>와 평행한 점의 좌표를 구하시오 (Find). <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Parallel means the tangent has the same gradient as the line, <span class="chem">9</span>.
        "평행하다는 것은 접선의 기울기가 직선의 기울기 <span class=\"chem\">9</span>와 같다는 뜻이에요.",
        // EN: Solve <span class="chem">dy/dx = 9</span>, then substitute each <span class="chem">x</span> back into the equation of the <strong>curve</strong> (not the line) to get <span class="chem">y</span>.
        "<span class=\"chem\">dy/dx = 9</span>를 푼 뒤, 각 <span class=\"chem\">x</span>를 (직선이 아니라) <strong>곡선</strong>의 방정식에 대입하여 <span class=\"chem\">y</span>를 구하세요.",
      ],
      // EN: <p><span class="chem">dy/dx = 3x^2 - 6x = 9 =&gt; x^2 - 2x - 3 = 0 =&gt; (x - 3)(x + 1) = 0</span>. At <span class="chem">x = 3</span>, <span class="chem">y = 27 - 27 + 1 = 1</span>; at <span class="chem">x = -1</span>, <span class="chem">y = -1 - 3 + 1 = -3</span>. The points are <span class="chem">(3, 1)</span> and <span class="chem">(-1, -3)</span>.</p>
      solution: "<p><span class=\"chem\">dy/dx = 3x^2 - 6x = 9 =&gt; x^2 - 2x - 3 = 0 =&gt; (x - 3)(x + 1) = 0</span>. <span class=\"chem\">x = 3</span>에서 <span class=\"chem\">y = 27 - 27 + 1 = 1</span>; <span class=\"chem\">x = -1</span>에서 <span class=\"chem\">y = -1 - 3 + 1 = -3</span>. 구하는 점은 <span class=\"chem\">(3, 1)</span>과 <span class=\"chem\">(-1, -3)</span>이에요.</p>",
      // EN: <p><span class="chem">(3, 1)</span> and <span class="chem">(-1, -3)</span>.</p>
      answer: "<p><span class=\"chem\">(3, 1)</span>과 <span class=\"chem\">(-1, -3)</span>.</p>",
      markscheme: [
        // EN: A1: <span class="chem">dy/dx = 3x^2 - 6x</span>.
        "A1: <span class=\"chem\">dy/dx = 3x^2 - 6x</span>.",
        // EN: M1: Sets <span class="chem">3x^2 - 6x = 9</span> (parallel lines have equal gradients).
        "M1: <span class=\"chem\">3x^2 - 6x = 9</span>로 놓음 (평행한 직선은 기울기가 같음).",
        // EN: A1: <span class="chem">x^2 - 2x - 3 = 0 =&gt; x = 3</span> or <span class="chem">x = -1</span>.
        "A1: <span class=\"chem\">x^2 - 2x - 3 = 0 =&gt; x = 3</span> 또는 <span class=\"chem\">x = -1</span>.",
        // EN: A1: <span class="chem">(3, 1)</span> and <span class="chem">(-1, -3)</span>.
        "A1: <span class=\"chem\">(3, 1)</span>과 <span class=\"chem\">(-1, -3)</span>.",
      ],
    },

    // ── t5-1-q035 · numeric · foundation · SL · SL 5.4, 5.6 · 2 marks
    "t5-1-q035": {
      // EN: <p>Let <span class="chem">f(x) = 3 sin(x) e^{-0.2x}</span>. Find the gradient of the tangent to the graph of <span class="chem">f</span> at the point where <span class="chem">x = 1.3</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">f(x) = 3 sin(x) e^{-0.2x}</span>이라 하자. <span class=\"chem\">x = 1.3</span>인 점에서 <span class=\"chem\">f</span>의 그래프의 접선의 기울기를 구하시오 (Find). 답은 유효숫자 3자리로 쓰시오.</p>",
      hints: [
        // EN: The gradient of the tangent is <span class="chem">f'(1.3)</span>. Your GDC can evaluate a derivative at a point directly (e.g. the <span class="chem">dy/dx</span> or <span class="chem">d/dx</span> function).
        "접선의 기울기는 <span class=\"chem\">f'(1.3)</span>이에요. GDC로 한 점에서의 미분계수를 바로 계산할 수 있어요 (예: <span class=\"chem\">dy/dx</span> 또는 <span class=\"chem\">d/dx</span> 기능).",
        // EN: Make sure your GDC is in <strong>radian</strong> mode: calculus with trigonometric functions always uses radians.
        "GDC가 <strong>라디안</strong> 모드인지 꼭 확인하세요: 삼각함수의 미적분에서는 항상 라디안을 써요.",
      ],
      // EN: <p>Using the GDC (radian mode), <span class="chem">f'(1.3) ≈ 0.172994…</span>, so the gradient is <span class="chem">0.173</span> (3 s.f.). By hand, <span class="chem">f'(x) = e^{-0.2x}(3 cos x - 0.6 sin x)</span>, which gives the same value.</p>
      solution: "<p>GDC(라디안 모드)를 이용하면 <span class=\"chem\">f'(1.3) ≈ 0.172994…</span>이므로 기울기는 <span class=\"chem\">0.173</span> (3 s.f.)예요. 손으로 계산하면 <span class=\"chem\">f'(x) = e^{-0.2x}(3 cos x - 0.6 sin x)</span>이고, 같은 값을 얻어요.</p>",
    },

    // ── t5-1-q036 · numeric · exam · SL · SL 5.8 · 5 marks
    "t5-1-q036": {
      // EN: <p>An open box is made from a rectangular sheet of card measuring <span class="chem">36</span> <span class="unit">cm</span> by <span class="chem">22</span> <span class="unit">cm</span>. A square of side <span class="chem">x</span> <span class="unit">cm</span> is cut from each corner and the sides are folded up. Find the maximum possible volume of the box, in <span class="unit">cm3</span>, correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">36</span> <span class=\"unit\">cm</span> × <span class=\"chem\">22</span> <span class=\"unit\">cm</span>인 직사각형 판지로 뚜껑 없는 상자를 만들어요. 각 모퉁이에서 한 변이 <span class=\"chem\">x</span> <span class=\"unit\">cm</span>인 정사각형을 잘라 내고 옆면을 접어 올려요. 상자의 부피의 최댓값을 <span class=\"unit\">cm3</span> 단위로 유효숫자 3자리까지 구하시오 (Find).</p>",
      hints: [
        // EN: The base of the box measures <span class="chem">(36 - 2x)</span> by <span class="chem">(22 - 2x)</span> and its height is <span class="chem">x</span>. State the domain: <span class="chem">0 &lt; x &lt; 11</span>.
        "상자의 밑면은 <span class=\"chem\">(36 - 2x)</span> × <span class=\"chem\">(22 - 2x)</span>이고 높이는 <span class=\"chem\">x</span>이에요. 정의역을 쓰세요: <span class=\"chem\">0 &lt; x &lt; 11</span>.",
        // EN: Graph <span class="chem">V(x) = x(36 - 2x)(22 - 2x)</span> on <span class="chem">0 &lt; x &lt; 11</span> and use the GDC maximum feature (or solve <span class="chem">V'(x) = 0</span>).
        "<span class=\"chem\">0 &lt; x &lt; 11</span>에서 <span class=\"chem\">V(x) = x(36 - 2x)(22 - 2x)</span>의 그래프를 그리고 GDC의 최댓값 기능을 이용하세요 (또는 <span class=\"chem\">V'(x) = 0</span>을 푸세요).",
      ],
      // EN: <p><span class="chem">V(x) = x(36 - 2x)(22 - 2x)</span> for <span class="chem">0 &lt; x &lt; 11</span>. <span class="chem">V'(x) = 12x^2 - 232x + 792 = 0</span> gives <span class="chem">x ≈ 4.4279</span> (the other root, <span class="chem">x ≈ 14.9</span>, is outside the domain). <span class="chem">V</span> is <span class="chem">0</span> at both ends of the domain, so this stationary point is the maximum: <span class="chem">V_{max} = V(4.4279…) ≈ 1579.8</span>, i.e. <span class="chem">1580</span> <span class="unit">cm3</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">0 &lt; x &lt; 11</span>에서 <span class=\"chem\">V(x) = x(36 - 2x)(22 - 2x)</span>. <span class=\"chem\">V'(x) = 12x^2 - 232x + 792 = 0</span>에서 <span class=\"chem\">x ≈ 4.4279</span>를 얻어요 (다른 근 <span class=\"chem\">x ≈ 14.9</span>는 정의역 밖이에요). <span class=\"chem\">V</span>는 정의역의 양 끝에서 <span class=\"chem\">0</span>이므로 이 정류점에서 최대예요: <span class=\"chem\">V_{max} = V(4.4279…) ≈ 1579.8</span>, 즉 <span class=\"chem\">1580</span> <span class=\"unit\">cm3</span> (3 s.f.).</p>",
    },

    // ── t5-1-q037 · numeric · exam · SL · SL 5.6, 5.8 · 4 marks
    "t5-1-q037": {
      // EN: <p>Let <span class="chem">f(x) = (x^2 - 3)e^{-0.4x}</span> for <span class="chem">x \in \mathbb{R}</span>. The graph of <span class="chem">f</span> has one local maximum point. Find the <span class="chem">y</span>-coordinate of this point, correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">x \\in \\mathbb{R}</span>에서 <span class=\"chem\">f(x) = (x^2 - 3)e^{-0.4x}</span>이라 하자. <span class=\"chem\">f</span>의 그래프는 극대점을 하나 가져요. 이 점의 <span class=\"chem\">y</span>좌표를 유효숫자 3자리까지 구하시오 (Find).</p>",
      hints: [
        // EN: Sketch <span class="chem">y = f(x)</span> on your GDC first. The local maximum is to the right of the origin; you may need to widen the window (try <span class="chem">-3 &lt;= x &lt;= 15</span>).
        "먼저 GDC로 <span class=\"chem\">y = f(x)</span>의 그래프를 그리세요. 극대점은 원점의 오른쪽에 있어요; 화면 범위를 넓혀야 할 수도 있어요 (<span class=\"chem\">-3 &lt;= x &lt;= 15</span>로 해 보세요).",
        // EN: Use the GDC maximum feature, or solve <span class="chem">f'(x) = e^{-0.4x}(2x - 0.4x^2 + 1.2) = 0</span>.
        "GDC의 최댓값 기능을 이용하거나 <span class=\"chem\">f'(x) = e^{-0.4x}(2x - 0.4x^2 + 1.2) = 0</span>을 푸세요.",
      ],
      // EN: <p><span class="chem">f'(x) = 2x e^{-0.4x} - 0.4(x^2 - 3)e^{-0.4x} = e^{-0.4x}(-0.4x^2 + 2x + 1.2)</span>. Since <span class="chem">e^{-0.4x} &gt; 0</span>, <span class="chem">f'(x) = 0</span> when <span class="chem">x ≈ -0.541</span> or <span class="chem">x ≈ 5.541</span>. The quadratic factor is positive between the roots and negative after <span class="chem">5.541</span>, so <span class="chem">f'</span> changes from <span class="chem">+</span> to <span class="chem">-</span> there: a local maximum. <span class="chem">f(5.5414…) ≈ 3.0196</span>, so the <span class="chem">y</span>-coordinate is <span class="chem">3.02</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">f'(x) = 2x e^{-0.4x} - 0.4(x^2 - 3)e^{-0.4x} = e^{-0.4x}(-0.4x^2 + 2x + 1.2)</span>. <span class=\"chem\">e^{-0.4x} &gt; 0</span>이므로 <span class=\"chem\">x ≈ -0.541</span> 또는 <span class=\"chem\">x ≈ 5.541</span>일 때 <span class=\"chem\">f'(x) = 0</span>이에요. 이차식 인수는 두 근 사이에서 양수이고 <span class=\"chem\">5.541</span> 이후에서 음수이므로, <span class=\"chem\">f'</span>은 그곳에서 <span class=\"chem\">+</span>에서 <span class=\"chem\">-</span>로 바뀌어요: 극대예요. <span class=\"chem\">f(5.5414…) ≈ 3.0196</span>이므로 <span class=\"chem\">y</span>좌표는 <span class=\"chem\">3.02</span> (3 s.f.)예요.</p>",
    },

    // ── t5-1-q038 · short · exam · SL · SL 5.6, 5.7, 5.8 · 6 marks
    "t5-1-q038": {
      // EN: <p>Let <span class="chem">f(x) = x sin x</span> for <span class="chem">0 &lt; x &lt; pi</span>.<br>(a) Show that <span class="chem">f''(x) = 2 cos x - x sin x</span>. <strong>[2 marks]</strong><br>(b) Find the <span class="chem">x</span>-coordinate of the point of inflexion on the graph of <span class="chem">f</span>, and justify that it is a point of inflexion. <strong>[3 marks]</strong><br>(c) Find the gradient of the graph of <span class="chem">f</span> at the point of inflexion. <strong>[1 mark]</strong></p>
      stem: "<p><span class=\"chem\">0 &lt; x &lt; pi</span>에서 <span class=\"chem\">f(x) = x sin x</span>이라 하자.<br>(a) <span class=\"chem\">f''(x) = 2 cos x - x sin x</span>임을 보이시오 (Show that). <strong>[2 marks]</strong><br>(b) <span class=\"chem\">f</span>의 그래프 위의 변곡점의 <span class=\"chem\">x</span>좌표를 구하고 (Find), 그것이 변곡점임을 근거를 들어 설명하시오. <strong>[3 marks]</strong><br>(c) 변곡점에서 <span class=\"chem\">f</span>의 그래프의 기울기를 구하시오 (Find). <strong>[1 mark]</strong></p>",
      hints: [
        // EN: For (b) a point of inflexion needs <span class="chem">f''(x) = 0</span> <strong>and</strong> a change of sign of <span class="chem">f''</span>. The GDC gives the root; you still have to check the sign on each side.
        "(b)에서 변곡점이 되려면 <span class=\"chem\">f''(x) = 0</span> <strong>그리고</strong> <span class=\"chem\">f''</span>의 부호 변화가 필요해요. GDC가 근을 알려 주지만, 양쪽의 부호는 직접 확인해야 해요.",
        // EN: For (c), the gradient is <span class="chem">f'(x) = sin x + x cos x</span> at your root (keep the full GDC value, not the rounded one).
        "(c)에서 기울기는 구한 근에서의 <span class=\"chem\">f'(x) = sin x + x cos x</span>의 값이에요 (반올림한 값이 아니라 GDC의 전체 값을 그대로 쓰세요).",
      ],
      // EN: <p>(a) <span class="chem">f'(x) = 1 * sin x + x cos x</span> and <span class="chem">f''(x) = cos x + (cos x - x sin x) = 2 cos x - x sin x</span>.<br>(b) The GDC gives one root of <span class="chem">2 cos x - x sin x = 0</span> in <span class="chem">0 &lt; x &lt; pi</span>: <span class="chem">x ≈ 1.07687</span>. Checking each side: <span class="chem">f''(1) ≈ 0.239 &gt; 0</span> and <span class="chem">f''(1.2) ≈ -0.394 &lt; 0</span>, so the concavity changes and <span class="chem">x ≈ 1.08</span> is a point of inflexion.<br>(c) <span class="chem">f'(1.07687…) = sin(1.07687…) + 1.07687… cos(1.07687…) ≈ 1.39</span>.</p>
      solution: "<p>(a) <span class=\"chem\">f'(x) = 1 * sin x + x cos x</span>, <span class=\"chem\">f''(x) = cos x + (cos x - x sin x) = 2 cos x - x sin x</span>.<br>(b) GDC로 <span class=\"chem\">0 &lt; x &lt; pi</span>에서 <span class=\"chem\">2 cos x - x sin x = 0</span>의 근 하나를 구하면 <span class=\"chem\">x ≈ 1.07687</span>예요. 양쪽을 확인하면 <span class=\"chem\">f''(1) ≈ 0.239 &gt; 0</span>, <span class=\"chem\">f''(1.2) ≈ -0.394 &lt; 0</span>이므로 오목·볼록이 바뀌고 <span class=\"chem\">x ≈ 1.08</span>은 변곡점이에요.<br>(c) <span class=\"chem\">f'(1.07687…) = sin(1.07687…) + 1.07687… cos(1.07687…) ≈ 1.39</span>.</p>",
      // EN: <p>(a) <span class="chem">f'(x) = sin x + x cos x</span>, so <span class="chem">f''(x) = 2 cos x - x sin x</span>.<br>(b) <span class="chem">x ≈ 1.08</span>; <span class="chem">f''</span> changes from positive to negative there.<br>(c) <span class="chem">f'(1.0769…) ≈ 1.39</span>.</p>
      answer: "<p>(a) <span class=\"chem\">f'(x) = sin x + x cos x</span>이므로 <span class=\"chem\">f''(x) = 2 cos x - x sin x</span>.<br>(b) <span class=\"chem\">x ≈ 1.08</span>; 그곳에서 <span class=\"chem\">f''</span>은 양에서 음으로 바뀜.<br>(c) <span class=\"chem\">f'(1.0769…) ≈ 1.39</span>.</p>",
      markscheme: [
        // EN: M1: Uses the product rule: <span class="chem">f'(x) = sin x + x cos x</span>.
        "M1: 곱의 미분법을 이용함: <span class=\"chem\">f'(x) = sin x + x cos x</span>.",
        // EN: A1: Differentiates again: <span class="chem">f''(x) = cos x + cos x - x sin x = 2 cos x - x sin x</span> (AG).
        "A1: 한 번 더 미분함: <span class=\"chem\">f''(x) = cos x + cos x - x sin x = 2 cos x - x sin x</span> (AG).",
        // EN: M1: Solves <span class="chem">2 cos x - x sin x = 0</span> on the GDC.
        "M1: GDC로 <span class=\"chem\">2 cos x - x sin x = 0</span>을 풂.",
        // EN: A1: <span class="chem">x = 1.08</span> (<span class="chem">1.07687…</span>).
        "A1: <span class=\"chem\">x = 1.08</span> (<span class=\"chem\">1.07687…</span>).",
        // EN: R1: <span class="chem">f''</span> changes sign there, e.g. <span class="chem">f''(1) ≈ 0.239 &gt; 0</span> and <span class="chem">f''(1.2) ≈ -0.394 &lt; 0</span>.
        "R1: 그곳에서 <span class=\"chem\">f''</span>의 부호가 바뀜, 예: <span class=\"chem\">f''(1) ≈ 0.239 &gt; 0</span>, <span class=\"chem\">f''(1.2) ≈ -0.394 &lt; 0</span>.",
        // EN: A1: Gradient <span class="chem">f'(1.0769…) = 1.39</span>.
        "A1: 기울기 <span class=\"chem\">f'(1.0769…) = 1.39</span>.",
      ],
    },

    // ── t5-1-q039 · numeric · exam · SL · SL 5.4, 5.6 · 5 marks
    "t5-1-q039": {
      // EN: <p>Consider the curve <span class="chem">y = e^x - 2x^2</span>. The tangent to the curve at the point where <span class="chem">x = 0</span> meets the curve again at the point <span class="chem">R</span>. Find the <span class="chem">x</span>-coordinate of <span class="chem">R</span>, correct to 3 significant figures.</p>
      stem: "<p>곡선 <span class=\"chem\">y = e^x - 2x^2</span>을 생각하자. <span class=\"chem\">x = 0</span>인 점에서 곡선의 접선이 곡선과 점 <span class=\"chem\">R</span>에서 다시 만나요. <span class=\"chem\">R</span>의 <span class=\"chem\">x</span>좌표를 유효숫자 3자리까지 구하시오 (Find).</p>",
      hints: [
        // EN: At <span class="chem">x = 0</span>: <span class="chem">y = 1</span> and <span class="chem">dy/dx = e^x - 4x = 1</span>, so the tangent is <span class="chem">y = x + 1</span>.
        "<span class=\"chem\">x = 0</span>에서: <span class=\"chem\">y = 1</span>, <span class=\"chem\">dy/dx = e^x - 4x = 1</span>이므로 접선은 <span class=\"chem\">y = x + 1</span>이에요.",
        // EN: Graph <span class="chem">y = e^x - 2x^2</span> and <span class="chem">y = x + 1</span> and find their other intersection (the tangent touches at <span class="chem">x = 0</span>, so ignore that one).
        "<span class=\"chem\">y = e^x - 2x^2</span>과 <span class=\"chem\">y = x + 1</span>의 그래프를 그리고 다른 교점을 구하세요 (접선은 <span class=\"chem\">x = 0</span>에서 접하므로 그 점은 제외해요).",
      ],
      // EN: <p>At <span class="chem">x = 0</span>, <span class="chem">y = 1</span> and <span class="chem">dy/dx = e^0 - 0 = 1</span>, so the tangent is <span class="chem">y = x + 1</span>. Solving <span class="chem">e^x - 2x^2 = x + 1</span> on the GDC gives <span class="chem">x = 0</span> (the point of contact) and <span class="chem">x ≈ 3.2136</span>. So <span class="chem">R</span> has <span class="chem">x</span>-coordinate <span class="chem">3.21</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">x = 0</span>에서 <span class=\"chem\">y = 1</span>, <span class=\"chem\">dy/dx = e^0 - 0 = 1</span>이므로 접선은 <span class=\"chem\">y = x + 1</span>이에요. GDC로 <span class=\"chem\">e^x - 2x^2 = x + 1</span>을 풀면 <span class=\"chem\">x = 0</span>(접점)과 <span class=\"chem\">x ≈ 3.2136</span>을 얻어요. 따라서 <span class=\"chem\">R</span>의 <span class=\"chem\">x</span>좌표는 <span class=\"chem\">3.21</span> (3 s.f.)예요.</p>",
    },

    // ── t5-1-q040 · short · exam · SL · SL 5.7, 5.8 · 6 marks
    "t5-1-q040": {
      // EN: <p>A function <span class="chem">f</span> is defined for <span class="chem">0 &lt;= x &lt;= 4</span>. Its <strong>derivative</strong> is <span class="chem">f'(x) = x cos x - 0.5</span>.<br>(a) Find the <span class="chem">x</span>-coordinate of the local maximum point of <span class="chem">f</span>, justifying your answer. <strong>[3 marks]</strong><br>(b) Find the <span class="chem">x</span>-coordinates of the points of inflexion of the graph of <span class="chem">f</span>. <strong>[3 marks]</strong></p>
      stem: "<p>함수 <span class=\"chem\">f</span>는 <span class=\"chem\">0 &lt;= x &lt;= 4</span>에서 정의돼요. 그 <strong>도함수</strong>는 <span class=\"chem\">f'(x) = x cos x - 0.5</span>예요.<br>(a) <span class=\"chem\">f</span>의 극대점의 <span class=\"chem\">x</span>좌표를 구하고 (Find), 그 근거를 설명하시오. <strong>[3 marks]</strong><br>(b) <span class=\"chem\">f</span>의 그래프의 변곡점의 <span class=\"chem\">x</span>좌표를 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: you are given the derivative <span class="chem">f'</span>, not <span class="chem">f</span>. Stationary points of <span class="chem">f</span> are the zeros of <span class="chem">f'</span>; inflexion points of <span class="chem">f</span> are the turning points of <span class="chem">f'</span>.
        "해석: 주어진 것은 <span class=\"chem\">f</span>가 아니라 도함수 <span class=\"chem\">f'</span>이에요. <span class=\"chem\">f</span>의 정류점은 <span class=\"chem\">f'</span>의 영점이고, <span class=\"chem\">f</span>의 변곡점은 <span class=\"chem\">f'</span>의 극점이에요.",
        // EN: Graph <span class="chem">y = x cos x - 0.5</span> for <span class="chem">0 &lt;= x &lt;= 4</span>. A local maximum of <span class="chem">f</span> is where this graph crosses the axis going <strong>down</strong>.
        "<span class=\"chem\">0 &lt;= x &lt;= 4</span>에서 <span class=\"chem\">y = x cos x - 0.5</span>의 그래프를 그리세요. <span class=\"chem\">f</span>의 극대점은 이 그래프가 축을 <strong>아래로</strong> 가로지르는 곳이에요.",
        // EN: Use the GDC maximum and minimum features on the graph of <span class="chem">f'</span> for (b).
        "(b)에서는 <span class=\"chem\">f'</span>의 그래프에 GDC의 최댓값·최솟값 기능을 이용하세요.",
      ],
      // EN: <p>(a) <span class="chem">f'(0) = -0.5 &lt; 0</span>. The GDC gives zeros of <span class="chem">f'</span> at <span class="chem">x ≈ 0.610</span> (where <span class="chem">f'</span> goes from <span class="chem">-</span> to <span class="chem">+</span>, a local minimum of <span class="chem">f</span>) and <span class="chem">x ≈ 1.098</span> (where <span class="chem">f'</span> goes from <span class="chem">+</span> to <span class="chem">-</span>). So the local maximum of <span class="chem">f</span> is at <span class="chem">x ≈ 1.10</span>.<br>(b) <span class="chem">f''</span> is the gradient of <span class="chem">f'</span>, so it is zero and changes sign at the turning points of <span class="chem">y = f'(x)</span>. The GDC gives a maximum of <span class="chem">f'</span> at <span class="chem">x ≈ 0.860</span> and a minimum at <span class="chem">x ≈ 3.43</span>. The points of inflexion are at <span class="chem">x ≈ 0.860</span> and <span class="chem">x ≈ 3.43</span>.</p>
      solution: "<p>(a) <span class=\"chem\">f'(0) = -0.5 &lt; 0</span>. GDC로 <span class=\"chem\">f'</span>의 영점은 <span class=\"chem\">x ≈ 0.610</span>(<span class=\"chem\">f'</span>이 <span class=\"chem\">-</span>에서 <span class=\"chem\">+</span>으로 바뀌어 <span class=\"chem\">f</span>의 극소점)과 <span class=\"chem\">x ≈ 1.098</span>(<span class=\"chem\">f'</span>이 <span class=\"chem\">+</span>에서 <span class=\"chem\">-</span>로 바뀜)이에요. 따라서 <span class=\"chem\">f</span>의 극대점은 <span class=\"chem\">x ≈ 1.10</span>에 있어요.<br>(b) <span class=\"chem\">f''</span>은 <span class=\"chem\">f'</span>의 기울기이므로 <span class=\"chem\">y = f'(x)</span>의 극점에서 0이 되고 부호가 바뀌어요. GDC로 <span class=\"chem\">f'</span>은 <span class=\"chem\">x ≈ 0.860</span>에서 극대, <span class=\"chem\">x ≈ 3.43</span>에서 극소예요. 변곡점은 <span class=\"chem\">x ≈ 0.860</span>과 <span class=\"chem\">x ≈ 3.43</span>에 있어요.</p>",
      // EN: <p>(a) <span class="chem">x ≈ 1.10</span>, where <span class="chem">f'</span> changes from positive to negative.<br>(b) <span class="chem">x ≈ 0.860</span> and <span class="chem">x ≈ 3.43</span> (the turning points of <span class="chem">f'</span>).</p>
      answer: "<p>(a) <span class=\"chem\">x ≈ 1.10</span>, 그곳에서 <span class=\"chem\">f'</span>은 양에서 음으로 바뀜.<br>(b) <span class=\"chem\">x ≈ 0.860</span>과 <span class=\"chem\">x ≈ 3.43</span> (<span class=\"chem\">f'</span>의 극점).</p>",
      markscheme: [
        // EN: M1: Solves <span class="chem">f'(x) = 0</span> on the GDC: <span class="chem">x = 0.610</span> and <span class="chem">x = 1.10</span>.
        "M1: GDC로 <span class=\"chem\">f'(x) = 0</span>을 풂: <span class=\"chem\">x = 0.610</span>와 <span class=\"chem\">x = 1.10</span>.",
        // EN: R1: <span class="chem">f'</span> changes from positive to negative at <span class="chem">x = 1.10</span> (it goes from negative to positive at <span class="chem">0.610</span>, a minimum).
        "R1: <span class=\"chem\">f'</span>은 <span class=\"chem\">x = 1.10</span>에서 양에서 음으로 바뀜 (<span class=\"chem\">0.610</span>에서는 음에서 양으로 바뀌어 극소).",
        // EN: A1: <span class="chem">x = 1.10</span> (<span class="chem">1.09800…</span>).
        "A1: <span class=\"chem\">x = 1.10</span> (<span class=\"chem\">1.09800…</span>).",
        // EN: M1: Points of inflexion are at the turning points of <span class="chem">y = f'(x)</span> (where <span class="chem">f''(x) = cos x - x sin x = 0</span> and changes sign).
        "M1: 변곡점은 <span class=\"chem\">y = f'(x)</span>의 극점에 있음 (<span class=\"chem\">f''(x) = cos x - x sin x = 0</span>이고 부호가 바뀌는 곳).",
        // EN: A1: <span class="chem">x = 0.860</span>.
        "A1: <span class=\"chem\">x = 0.860</span>.",
        // EN: A1: <span class="chem">x = 3.43</span>.
        "A1: <span class=\"chem\">x = 3.43</span>.",
      ],
    },

    // ── t5-1-q041 · numeric · exam · SL · SL 5.8 · 5 marks
    "t5-1-q041": {
      // EN: <p>The entrance to a tunnel is modelled by the region between the <span class="chem">x</span>-axis and the curve <span class="chem">y = 8 cos(x/2)</span> for <span class="chem">-pi &lt;= x &lt;= pi</span>, where lengths are in metres. A rectangular door is fitted with its base on the <span class="chem">x</span>-axis and its two top corners on the curve, at <span class="chem">(-x, y)</span> and <span class="chem">(x, y)</span>. Find the maximum possible area of the door, in <span class="unit">m2</span>, correct to 3 significant figures.</p>
      stem: "<p>터널 입구는 <span class=\"chem\">x</span>축과 곡선 <span class=\"chem\">y = 8 cos(x/2)</span> (<span class=\"chem\">-pi &lt;= x &lt;= pi</span>) 사이의 영역으로 모델링되고, 길이의 단위는 미터예요. 직사각형 문을 밑변이 <span class=\"chem\">x</span>축 위에 있고 위쪽 두 꼭짓점이 곡선 위의 <span class=\"chem\">(-x, y)</span>와 <span class=\"chem\">(x, y)</span>에 오도록 설치해요. 문의 넓이의 최댓값을 <span class=\"unit\">m2</span> 단위로 유효숫자 3자리까지 구하시오 (Find).</p>",
      hints: [
        // EN: The door is <span class="chem">2x</span> wide and <span class="chem">8 cos(x/2)</span> high, so <span class="chem">A(x) = 16x cos(x/2)</span> for <span class="chem">0 &lt; x &lt; pi</span>.
        "문의 너비는 <span class=\"chem\">2x</span>, 높이는 <span class=\"chem\">8 cos(x/2)</span>이므로 <span class=\"chem\">0 &lt; x &lt; pi</span>에서 <span class=\"chem\">A(x) = 16x cos(x/2)</span>이에요.",
        // EN: Graph <span class="chem">A(x)</span> on the GDC (radian mode) and use the maximum feature. Check that the area is <span class="chem">0</span> at both ends of the domain.
        "GDC(라디안 모드)로 <span class=\"chem\">A(x)</span>의 그래프를 그리고 최댓값 기능을 이용하세요. 정의역의 양 끝에서 넓이가 <span class=\"chem\">0</span>임을 확인하세요.",
      ],
      // EN: <p><span class="chem">A(x) = 2x * 8 cos(x/2) = 16x cos(x/2)</span>, <span class="chem">0 &lt; x &lt; pi</span>. <span class="chem">A'(x) = 16 cos(x/2) - 8x sin(x/2) = 0</span> gives <span class="chem">x ≈ 1.7207</span>. Since <span class="chem">A -&gt; 0</span> at both ends of the domain, this is the maximum: <span class="chem">A ≈ 17.955</span>, i.e. <span class="chem">18.0</span> <span class="unit">m2</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">A(x) = 2x * 8 cos(x/2) = 16x cos(x/2)</span>, <span class=\"chem\">0 &lt; x &lt; pi</span>. <span class=\"chem\">A'(x) = 16 cos(x/2) - 8x sin(x/2) = 0</span>에서 <span class=\"chem\">x ≈ 1.7207</span>를 얻어요. 정의역의 양 끝에서 <span class=\"chem\">A -&gt; 0</span>이므로 이것이 최댓값이에요: <span class=\"chem\">A ≈ 17.955</span>, 즉 <span class=\"chem\">18.0</span> <span class=\"unit\">m2</span> (3 s.f.).</p>",
    },

    // ── t5-1-q042 · numeric · challenge · SL · SL 5.7, 5.8 · 6 marks
    "t5-1-q042": {
      // EN: <p>After a tablet is taken, the concentration of a drug in the blood is <span class="chem">C(t) = 15(e^{-0.2t} - e^{-0.9t})</span> <span class="unit">mg L-1</span>, where <span class="chem">t</span> is the time in hours, <span class="chem">t &gt;= 0</span>. The concentration rises to a peak and then falls. Find the greatest rate at which the concentration is decreasing, in <span class="unit">mg L-1</span> per hour, correct to 3 significant figures.</p>
      stem: "<p>알약을 먹은 뒤 혈액 속 약물의 농도는 <span class=\"chem\">C(t) = 15(e^{-0.2t} - e^{-0.9t})</span> <span class=\"unit\">mg L-1</span>이고, <span class=\"chem\">t</span>는 시간(시간 단위), <span class=\"chem\">t &gt;= 0</span>예요. 농도는 최고점까지 올라간 뒤 떨어져요. 농도가 감소하는 비율의 최댓값을 시간당 <span class=\"unit\">mg L-1</span> 단위로 유효숫자 3자리까지 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: “rate of decrease” is <span class="chem">-C'(t)</span>. Its greatest value is where <span class="chem">C'(t)</span> is most negative, i.e. the minimum of <span class="chem">C'</span>. That is where <span class="chem">C''(t) = 0</span>: a point of inflexion of <span class="chem">C</span>.
        "해석: “감소하는 비율”은 <span class=\"chem\">-C'(t)</span>이에요. 그 최댓값은 <span class=\"chem\">C'(t)</span>가 가장 음수인 곳, 즉 <span class=\"chem\">C'</span>의 최솟값이에요. 그곳은 <span class=\"chem\">C''(t) = 0</span>인 곳으로, <span class=\"chem\">C</span>의 변곡점이에요.",
        // EN: Graph <span class="chem">y = C'(t)</span> (enter it by hand, or as the GDC derivative of <span class="chem">C</span>) for <span class="chem">0 &lt;= t &lt;= 20</span> and find its minimum.
        "<span class=\"chem\">0 &lt;= t &lt;= 20</span>에서 <span class=\"chem\">y = C'(t)</span>의 그래프를 그리고 (직접 입력하거나 GDC로 <span class=\"chem\">C</span>의 도함수를 입력) 최솟값을 구하세요.",
        // EN: Check the ends: <span class="chem">C'(0) = 10.5 &gt; 0</span> (the concentration is rising then), and <span class="chem">C'(t) -&gt; 0</span> as <span class="chem">t</span> grows, so the minimum of <span class="chem">C'</span> really is the turning point.
        "양 끝을 확인하세요: <span class=\"chem\">C'(0) = 10.5 &gt; 0</span>(이때 농도는 올라가는 중)이고, <span class=\"chem\">t</span>가 커지면 <span class=\"chem\">C'(t) -&gt; 0</span>이므로 <span class=\"chem\">C'</span>의 최솟값은 정말로 극점이에요.",
      ],
      // EN: <p><strong>Decode:</strong> the greatest rate of decrease is the most negative value of <span class="chem">C'(t)</span>, found where <span class="chem">C''(t) = 0</span> (the inflexion point of <span class="chem">C</span>).<br><span class="chem">C'(t) = 15(-0.2e^{-0.2t} + 0.9e^{-0.9t})</span> and <span class="chem">C''(t) = 15(0.04e^{-0.2t} - 0.81e^{-0.9t})</span>. <span class="chem">C''(t) = 0</span> at <span class="chem">t ≈ 4.297</span> (exactly <span class="chem">ln(20.25) / 0.7</span>), and <span class="chem">C''</span> changes from negative to positive there, so <span class="chem">C'</span> has its minimum. <span class="chem">C'(4.297…) ≈ -0.9879</span>. At <span class="chem">t = 0</span> the concentration is increasing (<span class="chem">C'(0) = 10.5</span>), and for large <span class="chem">t</span>, <span class="chem">C'(t) -&gt; 0</span>, so no endpoint gives a faster decrease. The greatest rate of decrease is <span class="chem">0.988</span> <span class="unit">mg L-1</span> per hour (3 s.f.).</p>
      solution: "<p><strong>해석:</strong> 감소하는 비율의 최댓값은 <span class=\"chem\">C'(t)</span>의 가장 작은 음수 값이고, <span class=\"chem\">C''(t) = 0</span>인 곳(<span class=\"chem\">C</span>의 변곡점)에서 나타나요.<br><span class=\"chem\">C'(t) = 15(-0.2e^{-0.2t} + 0.9e^{-0.9t})</span>, <span class=\"chem\">C''(t) = 15(0.04e^{-0.2t} - 0.81e^{-0.9t})</span>. <span class=\"chem\">t ≈ 4.297</span>에서 <span class=\"chem\">C''(t) = 0</span>(정확히는 <span class=\"chem\">ln(20.25) / 0.7</span>)이고, 그곳에서 <span class=\"chem\">C''</span>은 음에서 양으로 바뀌므로 <span class=\"chem\">C'</span>은 최솟값을 가져요. <span class=\"chem\">C'(4.297…) ≈ -0.9879</span>. <span class=\"chem\">t = 0</span>에서 농도는 증가하는 중이고(<span class=\"chem\">C'(0) = 10.5</span>), <span class=\"chem\">t</span>가 크면 <span class=\"chem\">C'(t) -&gt; 0</span>이므로 어떤 끝점도 더 빠른 감소를 주지 않아요. 감소하는 비율의 최댓값은 시간당 <span class=\"chem\">0.988</span> <span class=\"unit\">mg L-1</span> (3 s.f.)예요.</p>",
    },

    // ── t5-1-q043 · numeric · challenge · SL · SL 5.8 · 6 marks
    "t5-1-q043": {
      // EN: <p>A sensor is placed at the point <span class="chem">A(2, 1)</span>. A cable is to be laid in a straight line from <span class="chem">A</span> to a point <span class="chem">P</span> on the curve <span class="chem">y = e^{x/2}</span>. Find the length of the shortest possible cable, correct to 3 significant figures.</p>
      stem: "<p>점 <span class=\"chem\">A(2, 1)</span>에 센서가 놓여 있어요. <span class=\"chem\">A</span>에서 곡선 <span class=\"chem\">y = e^{x/2}</span> 위의 점 <span class=\"chem\">P</span>까지 케이블을 일직선으로 깔려고 해요. 가능한 가장 짧은 케이블의 길이를 유효숫자 3자리까지 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: “shortest cable” means the minimum distance from <span class="chem">A</span> to a point <span class="chem">P(x, e^{x/2})</span> on the curve. Write the distance as a function of the single variable <span class="chem">x</span> and minimise it.
        "해석: “가장 짧은 케이블”은 <span class=\"chem\">A</span>에서 곡선 위의 점 <span class=\"chem\">P(x, e^{x/2})</span>까지의 거리의 최솟값을 뜻해요. 거리를 하나의 변수 <span class=\"chem\">x</span>의 함수로 나타내고 최소화하세요.",
        // EN: <span class="chem">AP = sqrt((x - 2)^2 + (e^{x/2} - 1)^2)</span>. The square <span class="chem">D = AP^2</span> has its minimum at the same <span class="chem">x</span> and is easier to differentiate.
        "<span class=\"chem\">AP = sqrt((x - 2)^2 + (e^{x/2} - 1)^2)</span>. 제곱 <span class=\"chem\">D = AP^2</span>는 같은 <span class=\"chem\">x</span>에서 최솟값을 가지며 미분하기도 더 쉬워요.",
        // EN: Use the GDC minimum on the graph of <span class="chem">AP</span> (or solve <span class="chem">D'(x) = 0</span>), then give the distance, not the <span class="chem">x</span>-value.
        "<span class=\"chem\">AP</span>의 그래프에서 GDC의 최솟값 기능을 이용한 뒤 (또는 <span class=\"chem\">D'(x) = 0</span>를 푼 뒤), <span class=\"chem\">x</span>의 값이 아니라 거리를 답하세요.",
      ],
      // EN: <p><strong>Decode:</strong> minimise the distance <span class="chem">AP</span> where <span class="chem">P = (x, e^{x/2})</span>.<br><span class="chem">D(x) = AP^2 = (x - 2)^2 + (e^{x/2} - 1)^2</span>, <span class="chem">D'(x) = 2(x - 2) + e^{x/2}(e^{x/2} - 1) = 0</span>. The GDC gives the single solution <span class="chem">x ≈ 1.2230</span>, and the graph of <span class="chem">AP</span> shows it is a minimum (the distance grows without bound in both directions). Then <span class="chem">AP = sqrt(D(1.2230…)) ≈ 1.1466</span>, so the shortest cable is <span class="chem">1.15</span> units (3 s.f.).</p>
      solution: "<p><strong>해석:</strong> <span class=\"chem\">P = (x, e^{x/2})</span>일 때 거리 <span class=\"chem\">AP</span>을 최소화해요.<br><span class=\"chem\">D(x) = AP^2 = (x - 2)^2 + (e^{x/2} - 1)^2</span>, <span class=\"chem\">D'(x) = 2(x - 2) + e^{x/2}(e^{x/2} - 1) = 0</span>. GDC로 유일한 해 <span class=\"chem\">x ≈ 1.2230</span>를 얻고, <span class=\"chem\">AP</span>의 그래프로 그것이 최솟값임을 알 수 있어요 (거리는 양쪽 방향으로 한없이 커져요). 따라서 <span class=\"chem\">AP = sqrt(D(1.2230…)) ≈ 1.1466</span>이므로 가장 짧은 케이블은 <span class=\"chem\">1.15</span> 단위 (3 s.f.)예요.</p>",
    },

    // ── t5-1-q044 · numeric · challenge · SL · SL 5.7, 5.8 · 6 marks
    "t5-1-q044": {
      // EN: <p>The depth of water in a harbour, <span class="chem">h</span> metres, <span class="chem">t</span> hours after midnight is modelled by <span class="chem">h(t) = 3 + 1.8 sin(0.5t) + 0.6 cos t</span> for <span class="chem">0 &lt;= t &lt;= 12</span>. Find the greatest rate at which the water is rising during this period, in metres per hour, correct to 3 significant figures.</p>
      stem: "<p>자정으로부터 <span class=\"chem\">t</span>시간 후 항구의 수심 <span class=\"chem\">h</span>미터는 <span class=\"chem\">h(t) = 3 + 1.8 sin(0.5t) + 0.6 cos t</span> (<span class=\"chem\">0 &lt;= t &lt;= 12</span>)으로 모델링돼요. 이 기간 동안 수위가 올라가는 비율의 최댓값을 시간당 미터 단위로 유효숫자 3자리까지 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: “rate at which the water is rising” is <span class="chem">h'(t)</span>. You need the <strong>maximum of <span class="chem">h'</span></strong> on <span class="chem">[0, 12]</span>, not the maximum of <span class="chem">h</span>. Candidates are the turning points of <span class="chem">h'</span> and the two endpoints.
        "해석: “수위가 올라가는 비율”은 <span class=\"chem\">h'(t)</span>이에요. 구해야 하는 것은 <span class=\"chem\">h</span>의 최댓값이 아니라 <span class=\"chem\">[0, 12]</span>에서의 <strong><span class=\"chem\">h'</span>의 최댓값</strong>이에요. 후보는 <span class=\"chem\">h'</span>의 극점과 두 끝점이에요.",
        // EN: <span class="chem">h'(t) = 0.9 cos(0.5t) - 0.6 sin t</span>. Graph it for <span class="chem">0 &lt;= t &lt;= 12</span> (radian mode).
        "<span class=\"chem\">h'(t) = 0.9 cos(0.5t) - 0.6 sin t</span>. <span class=\"chem\">0 &lt;= t &lt;= 12</span>에서 그 그래프를 그리세요 (라디안 모드).",
        // EN: There are two local maxima of <span class="chem">h'</span>. Compare them with <span class="chem">h'(0)</span> and <span class="chem">h'(12)</span>.
        "<span class=\"chem\">h'</span>의 극댓값은 두 개예요. 그것들을 <span class=\"chem\">h'(0)</span>, <span class=\"chem\">h'(12)</span>과 비교하세요.",
      ],
      // EN: <p><strong>Decode:</strong> maximise the rate of change <span class="chem">h'(t)</span> over the closed interval <span class="chem">[0, 12]</span>, checking the endpoints.<br><span class="chem">h'(t) = 0.9 cos(0.5t) - 0.6 sin t</span>. Its local maxima (where <span class="chem">h''(t) = -0.45 sin(0.5t) - 0.6 cos t = 0</span>) are <span class="chem">h'(3.952…) ≈ 0.080</span> and <span class="chem">h'(11.416…) ≈ 1.3029</span>. The endpoints give <span class="chem">h'(0) = 0.9</span> and <span class="chem">h'(12) ≈ 1.186</span>. The greatest is <span class="chem">1.30</span> metres per hour (3 s.f.), at <span class="chem">t ≈ 11.4</span>.</p>
      solution: "<p><strong>해석:</strong> 닫힌구간 <span class=\"chem\">[0, 12]</span>에서 변화율 <span class=\"chem\">h'(t)</span>을 최대화하고 끝점도 확인해요.<br><span class=\"chem\">h'(t) = 0.9 cos(0.5t) - 0.6 sin t</span>. 그 극댓값(<span class=\"chem\">h''(t) = -0.45 sin(0.5t) - 0.6 cos t = 0</span>인 곳)은 <span class=\"chem\">h'(3.952…) ≈ 0.080</span>와 <span class=\"chem\">h'(11.416…) ≈ 1.3029</span>이에요. 끝점에서는 <span class=\"chem\">h'(0) = 0.9</span>, <span class=\"chem\">h'(12) ≈ 1.186</span>이에요. 최댓값은 시간당 <span class=\"chem\">1.30</span>미터 (3 s.f.)이고, <span class=\"chem\">t ≈ 11.4</span>일 때예요.</p>",
    },

    // ── t5-1-q045 · short · exam · SL · SL 5.2, 5.6 · 4 marks
    "t5-1-q045": {
      // EN: <p>Let <span class="chem">f(x) = e^{0.5x} - x^2</span>. Find the set of values of <span class="chem">x</span> for which <span class="chem">f</span> is decreasing. Give the endpoints of the interval correct to 3 significant figures. <strong>[4 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = e^{0.5x} - x^2</span>이라 하자. <span class=\"chem\">f</span>가 감소하는 <span class=\"chem\">x</span>의 값의 범위를 구하시오 (Find). 구간의 끝점은 유효숫자 3자리로 쓰시오. <strong>[4 marks]</strong></p>",
      hints: [
        // EN: <span class="chem">f</span> is decreasing where <span class="chem">f'(x) &lt; 0</span>. This equation cannot be solved algebraically, so use the GDC.
        "<span class=\"chem\">f</span>는 <span class=\"chem\">f'(x) &lt; 0</span>인 곳에서 감소해요. 이 방정식은 대수적으로 풀 수 없으므로 GDC를 이용하세요.",
        // EN: Graph <span class="chem">y = 0.5e^{0.5x} - 2x</span> with a wide enough window to see <strong>both</strong> zeros (try <span class="chem">-2 &lt;= x &lt;= 8</span>).
        "<strong>두</strong> 영점이 모두 보이도록 충분히 넓은 화면 범위로 <span class=\"chem\">y = 0.5e^{0.5x} - 2x</span>의 그래프를 그리세요 (<span class=\"chem\">-2 &lt;= x &lt;= 8</span>로 해 보세요).",
      ],
      // EN: <p><span class="chem">f'(x) = 0.5e^{0.5x} - 2x</span>. The GDC gives zeros at <span class="chem">x ≈ 0.28884</span> and <span class="chem">x ≈ 6.5234</span>, and <span class="chem">f'(x) &lt; 0</span> between them (e.g. <span class="chem">f'(1) ≈ -1.18</span>). So <span class="chem">f</span> is decreasing for <span class="chem">0.289 &lt; x &lt; 6.52</span>.</p>
      solution: "<p><span class=\"chem\">f'(x) = 0.5e^{0.5x} - 2x</span>. GDC로 영점은 <span class=\"chem\">x ≈ 0.28884</span>와 <span class=\"chem\">x ≈ 6.5234</span>이고, 그 사이에서 <span class=\"chem\">f'(x) &lt; 0</span>예요 (예: <span class=\"chem\">f'(1) ≈ -1.18</span>). 따라서 <span class=\"chem\">f</span>는 <span class=\"chem\">0.289 &lt; x &lt; 6.52</span>에서 감소해요.</p>",
      // EN: <p><span class="chem">0.289 &lt; x &lt; 6.52</span>.</p>
      answer: "<p><span class=\"chem\">0.289 &lt; x &lt; 6.52</span>.</p>",
      markscheme: [
        // EN: A1: <span class="chem">f'(x) = 0.5e^{0.5x} - 2x</span>.
        "A1: <span class=\"chem\">f'(x) = 0.5e^{0.5x} - 2x</span>.",
        // EN: M1: Solves <span class="chem">f'(x) = 0</span> (or <span class="chem">f'(x) &lt; 0</span>) using the GDC.
        "M1: GDC를 이용해 <span class=\"chem\">f'(x) = 0</span> (또는 <span class=\"chem\">f'(x) &lt; 0</span>)을 풂.",
        // EN: A1: <span class="chem">x = 0.289</span> and <span class="chem">x = 6.52</span>.
        "A1: <span class=\"chem\">x = 0.289</span>과 <span class=\"chem\">x = 6.52</span>.",
        // EN: A1: <span class="chem">0.289 &lt; x &lt; 6.52</span> (accept <span class="chem">&lt;=</span>).
        "A1: <span class=\"chem\">0.289 &lt; x &lt; 6.52</span> (<span class=\"chem\">&lt;=</span>도 인정).",
      ],
    },

    // ── t5-1-q046 · numeric · exam · SL · SL 5.7, 5.8 · 5 marks
    "t5-1-q046": {
      // EN: <p>Let <span class="chem">f(x) = x^3 / 6 - 2x - e^{-x}</span>. The graph of <span class="chem">f</span> has exactly one point of inflexion. Find its <span class="chem">x</span>-coordinate, correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">f(x) = x^3 / 6 - 2x - e^{-x}</span>이라 하자. <span class=\"chem\">f</span>의 그래프는 변곡점을 정확히 하나 가져요. 그 <span class=\"chem\">x</span>좌표를 유효숫자 3자리까지 구하시오 (Find).</p>",
      hints: [
        // EN: Differentiate twice: <span class="chem">f'(x) = x^2/2 - 2 + e^{-x}</span>, so <span class="chem">f''(x) = x - e^{-x}</span>.
        "두 번 미분하세요: <span class=\"chem\">f'(x) = x^2/2 - 2 + e^{-x}</span>이므로 <span class=\"chem\">f''(x) = x - e^{-x}</span>예요.",
        // EN: Solve <span class="chem">x - e^{-x} = 0</span> on the GDC. Then check that <span class="chem">f''</span> changes sign there.
        "GDC로 <span class=\"chem\">x - e^{-x} = 0</span>을 푸세요. 그런 다음 그곳에서 <span class=\"chem\">f''</span>의 부호가 바뀌는지 확인하세요.",
      ],
      // EN: <p><span class="chem">f'(x) = x^2/2 - 2 + e^{-x}</span> and <span class="chem">f''(x) = x - e^{-x}</span>. The GDC gives <span class="chem">f''(x) = 0</span> at <span class="chem">x ≈ 0.56714</span>. Since <span class="chem">f''</span> is increasing (its derivative <span class="chem">1 + e^{-x}</span> is always positive), it changes from negative to positive there, so this is a point of inflexion: <span class="chem">x = 0.567</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">f'(x) = x^2/2 - 2 + e^{-x}</span>, <span class=\"chem\">f''(x) = x - e^{-x}</span>. GDC로 <span class=\"chem\">x ≈ 0.56714</span>에서 <span class=\"chem\">f''(x) = 0</span>이에요. <span class=\"chem\">f''</span>은 증가하므로(그 도함수 <span class=\"chem\">1 + e^{-x}</span>는 항상 양수) 그곳에서 음에서 양으로 바뀌어요. 따라서 이것은 변곡점이에요: <span class=\"chem\">x = 0.567</span> (3 s.f.).</p>",
    },

    // ── t5-1-q047 · numeric · challenge · SL · SL 5.8 · 6 marks
    "t5-1-q047": {
      // EN: <p>A workshop’s weekly profit is <span class="chem">P(x) = -0.02x^3 + 0.9x^2 + 5x - 40</span> thousand dollars, where <span class="chem">x</span> is the number of <strong>hundreds</strong> of chairs made in the week. The workshop can make at most <span class="chem">2500</span> chairs in a week. Find the number of chairs the workshop should make in a week to maximise its profit.</p>
      stem: "<p>어느 공방의 주간 이익은 <span class=\"chem\">P(x) = -0.02x^3 + 0.9x^2 + 5x - 40</span>천 달러이고, <span class=\"chem\">x</span>는 그 주에 만든 의자의 수를 <strong>백 개</strong> 단위로 나타낸 것이에요. 공방은 일주일에 최대 <span class=\"chem\">2500</span>개의 의자를 만들 수 있어요. 이익을 최대로 하려면 공방이 일주일에 의자를 몇 개 만들어야 하는지 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: two hidden details. The capacity limit gives the domain <span class="chem">0 &lt;= x &lt;= 25</span> (in hundreds), and the answer must be the number of <strong>chairs</strong>, not the value of <span class="chem">x</span>.
        "해석: 숨은 조건이 두 가지예요. 생산 능력의 한계로 정의역은 <span class=\"chem\">0 &lt;= x &lt;= 25</span>(백 개 단위)이 되고, 답은 <span class=\"chem\">x</span>의 값이 아니라 <strong>의자</strong>의 개수여야 해요.",
        // EN: Solve <span class="chem">P'(x) = -0.06x^2 + 1.8x + 5 = 0</span> with the GDC. Is the positive root inside the domain?
        "GDC로 <span class=\"chem\">P'(x) = -0.06x^2 + 1.8x + 5 = 0</span>을 푸세요. 양수인 근이 정의역 안에 있나요?",
        // EN: If <span class="chem">P'(x) &gt; 0</span> on the whole domain, then <span class="chem">P</span> is increasing and the maximum is at an endpoint.
        "정의역 전체에서 <span class=\"chem\">P'(x) &gt; 0</span>이면 <span class=\"chem\">P</span>는 증가하고 최댓값은 끝점에서 나타나요.",
      ],
      // EN: <p><strong>Decode:</strong> the domain is <span class="chem">0 &lt;= x &lt;= 25</span>, and the answer is <span class="chem">100x</span> chairs.<br><span class="chem">P'(x) = -0.06x^2 + 1.8x + 5 = 0</span> gives <span class="chem">x ≈ -2.56</span> or <span class="chem">x ≈ 32.6</span>, both outside <span class="chem">[0, 25]</span>. Since <span class="chem">P'(0) = 5 &gt; 0</span>, <span class="chem">P'(x) &gt; 0</span> throughout the domain, so <span class="chem">P</span> is increasing and its maximum is at the endpoint <span class="chem">x = 25</span>: <span class="chem">P(25) = -312.5 + 562.5 + 125 - 40 = 335</span> thousand dollars. The workshop should make <span class="chem">25 * 100 = 2500</span> chairs (its full capacity).</p>
      solution: "<p><strong>해석:</strong> 정의역은 <span class=\"chem\">0 &lt;= x &lt;= 25</span>이고 답은 의자 <span class=\"chem\">100x</span>개예요.<br><span class=\"chem\">P'(x) = -0.06x^2 + 1.8x + 5 = 0</span>에서 <span class=\"chem\">x ≈ -2.56</span> 또는 <span class=\"chem\">x ≈ 32.6</span>를 얻는데, 둘 다 <span class=\"chem\">[0, 25]</span> 밖이에요. <span class=\"chem\">P'(0) = 5 &gt; 0</span>이므로 정의역 전체에서 <span class=\"chem\">P'(x) &gt; 0</span>이고, 따라서 <span class=\"chem\">P</span>는 증가하며 최댓값은 끝점 <span class=\"chem\">x = 25</span>에서 나타나요: <span class=\"chem\">P(25) = -312.5 + 562.5 + 125 - 40 = 335</span>천 달러. 공방은 일주일에 의자를 <span class=\"chem\">25 * 100 = 2500</span>개(최대 생산 능력) 만들어야 해요.</p>",
    },

    // ── t5-1-q048 · numeric · challenge · SL · SL 5.6, 5.8 · 7 marks
    "t5-1-q048": {
      // EN: <p>A corridor <span class="chem">2.4</span> <span class="unit">m</span> wide meets a corridor <span class="chem">1.6</span> <span class="unit">m</span> wide at a right angle. A straight pole touching the outer walls and the inner corner makes an angle <span class="chem">theta</span> with the walls of the wider corridor, and its length is <span class="chem">L(theta) = 2.4 / sin theta + 1.6 / cos theta</span>, <span class="chem">0 &lt; theta &lt; pi/2</span>. Find the length of the longest pole that can be carried horizontally around the corner, correct to 3 significant figures.</p>
      stem: "<p>폭 <span class=\"chem\">2.4</span> <span class=\"unit\">m</span>인 복도와 폭 <span class=\"chem\">1.6</span> <span class=\"unit\">m</span>인 복도가 직각으로 만나요. 바깥쪽 벽과 안쪽 모서리에 닿는 곧은 막대는 넓은 복도의 벽과 각 <span class=\"chem\">theta</span>를 이루고, 그 길이는 <span class=\"chem\">L(theta) = 2.4 / sin theta + 1.6 / cos theta</span>, <span class=\"chem\">0 &lt; theta &lt; pi/2</span>이에요. 모퉁이를 수평으로 돌아 옮길 수 있는 가장 긴 막대의 길이를 유효숫자 3자리까지 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: a pole gets round the corner only if it is shorter than <span class="chem">L(theta)</span> for <strong>every</strong> angle on the way round. So the longest pole that fits equals the <strong>minimum</strong> of <span class="chem">L(theta)</span>, not its maximum.
        "해석: 막대가 모퉁이를 돌 수 있으려면 도는 동안의 <strong>모든</strong> 각에서 <span class=\"chem\">L(theta)</span>보다 짧아야 해요. 따라서 통과할 수 있는 가장 긴 막대의 길이는 <span class=\"chem\">L(theta)</span>의 최댓값이 아니라 <strong>최솟값</strong>과 같아요.",
        // EN: Graph <span class="chem">L(theta)</span> for <span class="chem">0 &lt; theta &lt; pi/2</span> (radian mode). It tends to infinity at both ends.
        "<span class=\"chem\">0 &lt; theta &lt; pi/2</span>에서 <span class=\"chem\">L(theta)</span>의 그래프를 그리세요 (라디안 모드). 양 끝에서 무한대로 발산해요.",
        // EN: Use the GDC minimum, or solve <span class="chem">L'(theta) = -2.4 cos theta / sin^2 theta + 1.6 sin theta / cos^2 theta = 0</span>.
        "GDC의 최솟값 기능을 이용하거나 <span class=\"chem\">L'(theta) = -2.4 cos theta / sin^2 theta + 1.6 sin theta / cos^2 theta = 0</span>을 푸세요.",
      ],
      // EN: <p><strong>Decode:</strong> the tightest position of the corner limits the pole, so the longest pole that fits is the minimum value of <span class="chem">L(theta)</span>.<br><span class="chem">L'(theta) = -2.4 cos theta / sin^2 theta + 1.6 sin theta / cos^2 theta = 0 &lt;=&gt; tan^3 theta = 2.4 / 1.6 = 1.5</span>, so <span class="chem">theta ≈ 0.8528</span>. As <span class="chem">theta -&gt; 0</span> or <span class="chem">theta -&gt; pi/2</span>, <span class="chem">L -&gt; ∞</span>, so this is the minimum: <span class="chem">L(0.8528…) ≈ 5.6188</span>. The longest pole is <span class="chem">5.62</span> <span class="unit">m</span> (3 s.f.).</p>
      solution: "<p><strong>해석:</strong> 모퉁이에서 가장 꽉 끼는 위치가 막대를 제한하므로, 통과할 수 있는 가장 긴 막대의 길이는 <span class=\"chem\">L(theta)</span>의 최솟값이에요.<br><span class=\"chem\">L'(theta) = -2.4 cos theta / sin^2 theta + 1.6 sin theta / cos^2 theta = 0 &lt;=&gt; tan^3 theta = 2.4 / 1.6 = 1.5</span>이므로 <span class=\"chem\">theta ≈ 0.8528</span>이에요. <span class=\"chem\">theta -&gt; 0</span> 또는 <span class=\"chem\">theta -&gt; pi/2</span>일 때 <span class=\"chem\">L -&gt; ∞</span>이므로 이것이 최솟값이에요: <span class=\"chem\">L(0.8528…) ≈ 5.6188</span>. 가장 긴 막대는 <span class=\"chem\">5.62</span> <span class=\"unit\">m</span> (3 s.f.)예요.</p>",
    },

    // ── t5-1-q049 · numeric · exam · SL · SL 5.8 · 6 marks
    "t5-1-q049": {
      // EN: <p>A closed cylindrical can has radius <span class="chem">r</span> <span class="unit">cm</span> and volume <span class="chem">750</span> <span class="unit">cm3</span>. The metal for the top and bottom costs <span class="chem">$0.035</span> per <span class="unit">cm2</span>, and the metal for the curved side costs <span class="chem">$0.02</span> per <span class="unit">cm2</span>. Find the minimum cost of the metal for one can, in dollars, correct to two decimal places.</p>
      stem: "<p>뚜껑이 있는 원기둥 모양 캔의 반지름은 <span class=\"chem\">r</span> <span class=\"unit\">cm</span>, 부피는 <span class=\"chem\">750</span> <span class=\"unit\">cm3</span>예요. 윗면과 밑면의 금속은 <span class=\"unit\">cm2</span>당 <span class=\"chem\">$0.035</span>, 옆면(곡면)의 금속은 <span class=\"unit\">cm2</span>당 <span class=\"chem\">$0.02</span>의 비용이 들어요. 캔 하나의 금속 비용의 최솟값을 달러 단위로 소수점 아래 2자리까지 구하시오 (Find).</p>",
      hints: [
        // EN: Cost <span class="chem">= 0.035 * 2 pi r^2 + 0.02 * 2 pi r h</span>. Use <span class="chem">pi r^2 h = 750</span> to remove <span class="chem">h</span>.
        "비용 <span class=\"chem\">= 0.035 * 2 pi r^2 + 0.02 * 2 pi r h</span>. <span class=\"chem\">pi r^2 h = 750</span>를 이용해 <span class=\"chem\">h</span>를 소거하세요.",
        // EN: You should get <span class="chem">C(r) = 0.07 pi r^2 + 30 / r</span>, <span class="chem">r &gt; 0</span>. Find its minimum on the GDC.
        "<span class=\"chem\">C(r) = 0.07 pi r^2 + 30 / r</span>, <span class=\"chem\">r &gt; 0</span>를 얻어야 해요. GDC로 최솟값을 구하세요.",
      ],
      // EN: <p><span class="chem">h = 750 / (pi r^2)</span>, so <span class="chem">C(r) = 0.035(2 pi r^2) + 0.02(2 pi r)(750 / (pi r^2)) = 0.07 pi r^2 + 30 / r</span>. <span class="chem">C'(r) = 0.14 pi r - 30 / r^2 = 0</span> gives <span class="chem">r ≈ 4.0858</span>; <span class="chem">C -&gt; ∞</span> as <span class="chem">r -&gt; 0</span> and as <span class="chem">r -&gt; ∞</span>, so this is the minimum. <span class="chem">C(4.0858…) ≈ 11.0137</span>, so the minimum cost is <span class="chem">$11.01</span>.</p>
      solution: "<p><span class=\"chem\">h = 750 / (pi r^2)</span>이므로 <span class=\"chem\">C(r) = 0.035(2 pi r^2) + 0.02(2 pi r)(750 / (pi r^2)) = 0.07 pi r^2 + 30 / r</span>예요. <span class=\"chem\">C'(r) = 0.14 pi r - 30 / r^2 = 0</span>에서 <span class=\"chem\">r ≈ 4.0858</span>를 얻어요; <span class=\"chem\">r -&gt; 0</span>일 때와 <span class=\"chem\">r -&gt; ∞</span>일 때 모두 <span class=\"chem\">C -&gt; ∞</span>이므로 이것이 최솟값이에요. <span class=\"chem\">C(4.0858…) ≈ 11.0137</span>이므로 최소 비용은 <span class=\"chem\">$11.01</span>예요.</p>",
    },

    // ── t5-1-q050 · numeric · exam · SL · SL 5.4, 5.6 · 5 marks
    "t5-1-q050": {
      // EN: <p>Consider the curve <span class="chem">y = 2 sin x + x</span>. The normal to the curve at the point where <span class="chem">x = 1</span> crosses the <span class="chem">x</span>-axis at <span class="chem">Q</span>. Find the <span class="chem">x</span>-coordinate of <span class="chem">Q</span>, correct to 3 significant figures.</p>
      stem: "<p>곡선 <span class=\"chem\">y = 2 sin x + x</span>을 생각하자. <span class=\"chem\">x = 1</span>인 점에서 곡선의 법선이 <span class=\"chem\">x</span>축과 <span class=\"chem\">Q</span>에서 만나요. <span class=\"chem\">Q</span>의 <span class=\"chem\">x</span>좌표를 유효숫자 3자리까지 구하시오 (Find).</p>",
      hints: [
        // EN: Find the point (<span class="chem">y = 2 sin 1 + 1</span>) and the tangent gradient <span class="chem">m_T = 2 cos 1 + 1</span> (radians). Store both on your GDC.
        "점(<span class=\"chem\">y = 2 sin 1 + 1</span>)과 접선의 기울기 <span class=\"chem\">m_T = 2 cos 1 + 1</span>(라디안)를 구하세요. 둘 다 GDC에 저장하세요.",
        // EN: The normal is <span class="chem">y - y_1 = -(1/m_T)(x - 1)</span>. Put <span class="chem">y = 0</span> and solve for <span class="chem">x</span>.
        "법선은 <span class=\"chem\">y - y_1 = -(1/m_T)(x - 1)</span>이에요. <span class=\"chem\">y = 0</span>을 대입하고 <span class=\"chem\">x</span>에 대해 푸세요.",
      ],
      // EN: <p>At <span class="chem">x = 1</span>: <span class="chem">y_1 = 2 sin 1 + 1 ≈ 2.6829</span> and <span class="chem">m_T = 2 cos 1 + 1 ≈ 2.0806</span>. The normal is <span class="chem">y - y_1 = -(1/m_T)(x - 1)</span>. Setting <span class="chem">y = 0</span>: <span class="chem">x = 1 + m_T y_1 ≈ 1 + 2.0806 * 2.6829 ≈ 6.582</span>. So <span class="chem">Q</span> has <span class="chem">x</span>-coordinate <span class="chem">6.58</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">x = 1</span>에서: <span class=\"chem\">y_1 = 2 sin 1 + 1 ≈ 2.6829</span>, <span class=\"chem\">m_T = 2 cos 1 + 1 ≈ 2.0806</span>. 법선은 <span class=\"chem\">y - y_1 = -(1/m_T)(x - 1)</span>이에요. <span class=\"chem\">y = 0</span>으로 놓으면: <span class=\"chem\">x = 1 + m_T y_1 ≈ 1 + 2.0806 * 2.6829 ≈ 6.582</span>. 따라서 <span class=\"chem\">Q</span>의 <span class=\"chem\">x</span>좌표는 <span class=\"chem\">6.58</span> (3 s.f.)예요.</p>",
    },

    // ── t5-1-q051 · numeric · challenge · SL · SL 5.4 · 6 marks
    "t5-1-q051": {
      // EN: <p>A straight line through the origin is a tangent to the curve <span class="chem">y = e^x + 2</span>. Find the gradient of this line, correct to 3 significant figures.</p>
      stem: "<p>원점을 지나는 직선이 곡선 <span class=\"chem\">y = e^x + 2</span>의 접선이에요. 이 직선의 기울기를 유효숫자 3자리까지 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: the point of contact is unknown. Call it <span class="chem">(a, e^a + 2)</span>; the tangent there has gradient <span class="chem">e^a</span>, and it must pass through <span class="chem">(0, 0)</span>. Find <span class="chem">a</span> first, then the gradient.
        "해석: 접점을 모르고 있어요. 그 점을 <span class=\"chem\">(a, e^a + 2)</span>로 놓으면 그곳에서 접선의 기울기는 <span class=\"chem\">e^a</span>이고, 이 접선은 <span class=\"chem\">(0, 0)</span>을 지나야 해요. 먼저 <span class=\"chem\">a</span>를 구한 뒤 기울기를 구하세요.",
        // EN: Tangent: <span class="chem">y - (e^a + 2) = e^a(x - a)</span>. Substituting <span class="chem">(0, 0)</span> gives <span class="chem">e^a(a - 1) = 2</span>.
        "접선: <span class=\"chem\">y - (e^a + 2) = e^a(x - a)</span>. <span class=\"chem\">(0, 0)</span>을 대입하면 <span class=\"chem\">e^a(a - 1) = 2</span>를 얻어요.",
        // EN: Solve <span class="chem">e^a(a - 1) = 2</span> on the GDC; the question asks for the gradient <span class="chem">e^a</span>, not <span class="chem">a</span>.
        "GDC로 <span class=\"chem\">e^a(a - 1) = 2</span>를 푸세요; 문제에서 묻는 것은 <span class=\"chem\">a</span>가 아니라 기울기 <span class=\"chem\">e^a</span>예요.",
      ],
      // EN: <p><strong>Decode:</strong> introduce the unknown point of contact <span class="chem">(a, e^a + 2)</span> and use the condition that the tangent passes through the origin.<br>The tangent is <span class="chem">y - (e^a + 2) = e^a(x - a)</span>. Through <span class="chem">(0, 0)</span>: <span class="chem">-(e^a + 2) = -a e^a =&gt; e^a(a - 1) = 2</span>. The GDC gives <span class="chem">a ≈ 1.46306</span> (the only solution, as <span class="chem">e^a(a - 1) &lt; 0</span> for <span class="chem">a &lt; 1</span> and is increasing for <span class="chem">a &gt; 1</span>). The gradient is <span class="chem">e^a ≈ 4.3191</span>, i.e. <span class="chem">4.32</span> (3 s.f.).</p>
      solution: "<p><strong>해석:</strong> 미지의 접점 <span class=\"chem\">(a, e^a + 2)</span>을 도입하고, 접선이 원점을 지난다는 조건을 이용해요.<br>접선은 <span class=\"chem\">y - (e^a + 2) = e^a(x - a)</span>예요. <span class=\"chem\">(0, 0)</span>을 지나므로: <span class=\"chem\">-(e^a + 2) = -a e^a =&gt; e^a(a - 1) = 2</span>. GDC로 <span class=\"chem\">a ≈ 1.46306</span>를 얻어요 (<span class=\"chem\">a &lt; 1</span>에서 <span class=\"chem\">e^a(a - 1) &lt; 0</span>이고 <span class=\"chem\">a &gt; 1</span>에서는 증가하므로 이것이 유일한 해예요). 기울기는 <span class=\"chem\">e^a ≈ 4.3191</span>, 즉 <span class=\"chem\">4.32</span> (3 s.f.)예요.</p>",
    },

    // ── t5-1-q052 · short · exam · SL · SL 5.6, 5.7, 5.8, 5.9 · 14 marks
    "t5-1-q052": {
      // EN: <p>An object on a spring oscillates so that its displacement from its rest position is <span class="chem">d(t) = 5e^{-0.3t} sin t</span> <span class="unit">cm</span>, where <span class="chem">t</span> is the time in seconds, <span class="chem">0 &lt;= t &lt;= 8</span>.<br>(a) Show that <span class="chem">d'(t) = e^{-0.3t}(5 cos t - 1.5 sin t)</span>. <strong>[2 marks]</strong><br>(b) Show that <span class="chem">d'(t) = 0</span> when <span class="chem">tan t = 10/3</span>. <strong>[2 marks]</strong><br>(c) Find the first time <span class="chem">t &gt; 0</span> at which the object is instantaneously at rest, and its displacement at that time. <strong>[3 marks]</strong><br>(d) Hence write down the number of times in <span class="chem">0 &lt; t &lt; 8</span> at which the object is instantaneously at rest. <strong>[1 mark]</strong><br>(e) For <span class="chem">0 &lt; t &lt; 4</span>, find the time at which the displacement is decreasing most rapidly, and the rate of decrease at that time. <strong>[4 marks]</strong><br>(f) Find the acceleration of the object when <span class="chem">t = 3</span>. <strong>[2 marks]</strong></p>
      stem: "<p>용수철에 매단 물체가 진동하며, 정지 위치로부터의 변위는 <span class=\"chem\">d(t) = 5e^{-0.3t} sin t</span> <span class=\"unit\">cm</span>이고, <span class=\"chem\">t</span>는 시간(초), <span class=\"chem\">0 &lt;= t &lt;= 8</span>예요.<br>(a) <span class=\"chem\">d'(t) = e^{-0.3t}(5 cos t - 1.5 sin t)</span>임을 보이시오 (Show that). <strong>[2 marks]</strong><br>(b) <span class=\"chem\">tan t = 10/3</span>일 때 <span class=\"chem\">d'(t) = 0</span>임을 보이시오 (Show that). <strong>[2 marks]</strong><br>(c) 물체가 순간적으로 정지하는 첫 시각 <span class=\"chem\">t &gt; 0</span>과 그때의 변위를 구하시오 (Find). <strong>[3 marks]</strong><br>(d) 이를 이용하여 (Hence) <span class=\"chem\">0 &lt; t &lt; 8</span>에서 물체가 순간적으로 정지하는 횟수를 쓰시오 (write down). <strong>[1 mark]</strong><br>(e) <span class=\"chem\">0 &lt; t &lt; 4</span>에서 변위가 가장 빠르게 감소하는 시각과 그때의 감소 비율을 구하시오 (find). <strong>[4 marks]</strong><br>(f) <span class=\"chem\">t = 3</span>일 때 물체의 가속도를 구하시오 (Find). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: “instantaneously at rest” means velocity <span class="chem">d'(t) = 0</span>; “decreasing most rapidly” means the most negative value of <span class="chem">d'(t)</span>; acceleration is <span class="chem">d''(t)</span>.
        "해석: “순간적으로 정지”는 속도 <span class=\"chem\">d'(t) = 0</span>을 뜻해요; “가장 빠르게 감소”는 <span class=\"chem\">d'(t)</span>의 가장 작은 음수 값을 뜻해요; 가속도는 <span class=\"chem\">d''(t)</span>이에요.",
        // EN: For (d), <span class="chem">tan t</span> repeats every <span class="chem">pi</span>, so the solutions of <span class="chem">tan t = 10/3</span> are <span class="chem">1.279 + k pi</span>. How many lie in <span class="chem">(0, 8)</span>?
        "(d)에서 <span class=\"chem\">tan t</span>는 주기 <span class=\"chem\">pi</span>로 반복되므로 <span class=\"chem\">tan t = 10/3</span>의 해는 <span class=\"chem\">1.279 + k pi</span>예요. <span class=\"chem\">(0, 8)</span>에는 몇 개가 있나요?",
        // EN: For (e), graph <span class="chem">y = d'(t)</span> for <span class="chem">0 &lt; t &lt; 4</span> and find its minimum. Compare with the values near the ends of the interval.
        "(e)에서는 <span class=\"chem\">0 &lt; t &lt; 4</span>에서 <span class=\"chem\">y = d'(t)</span>의 그래프를 그리고 최솟값을 구하세요. 구간의 양 끝 근처의 값과 비교하세요.",
      ],
      // EN: <p>(a) Product rule: <span class="chem">d'(t) = 5(-0.3e^{-0.3t}) sin t + 5e^{-0.3t} cos t = e^{-0.3t}(5 cos t - 1.5 sin t)</span>.<br>(b) <span class="chem">e^{-0.3t} != 0</span>, so <span class="chem">5 cos t = 1.5 sin t =&gt; tan t = 5 / 1.5 = 10/3</span>.<br>(c) <span class="chem">t = arctan(10/3) ≈ 1.2793</span> <span class="unit">s</span>, and <span class="chem">d(1.2793…) = 5e^{-0.3838…} sin(1.2793…) ≈ 3.26</span> <span class="unit">cm</span>.<br>(d) The solutions are <span class="chem">1.279 + k pi</span>: <span class="chem">1.28, 4.42, 7.56</span> (the next, <span class="chem">10.7</span>, is too large). So <span class="chem">3</span> times.<br>(e) The displacement decreases most rapidly where <span class="chem">d'(t)</span> is most negative. The GDC gives the minimum of <span class="chem">d'</span> on <span class="chem">0 &lt; t &lt; 4</span> at <span class="chem">t ≈ 2.5587</span>, with <span class="chem">d'(2.5587…) ≈ -2.3206</span>. Near the ends, <span class="chem">d'(0) = 5</span> and <span class="chem">d'(4) ≈ -0.642</span>, which are larger. So at <span class="chem">t ≈ 2.56</span> <span class="unit">s</span> the displacement is decreasing at <span class="chem">2.32</span> <span class="unit">cm s-1</span>.<br>(f) <span class="chem">d''(t) = -0.3e^{-0.3t}(5 cos t - 1.5 sin t) + e^{-0.3t}(-5 sin t - 1.5 cos t) = e^{-0.3t}(-4.55 sin t - 3 cos t)</span>, so <span class="chem">d''(3) = e^{-0.9}(-4.55 sin 3 - 3 cos 3) ≈ 0.946</span> <span class="unit">cm s-2</span> (or use the GDC directly).</p>
      solution: "<p>(a) 곱의 미분법: <span class=\"chem\">d'(t) = 5(-0.3e^{-0.3t}) sin t + 5e^{-0.3t} cos t = e^{-0.3t}(5 cos t - 1.5 sin t)</span>.<br>(b) <span class=\"chem\">e^{-0.3t} != 0</span>이므로 <span class=\"chem\">5 cos t = 1.5 sin t =&gt; tan t = 5 / 1.5 = 10/3</span>.<br>(c) <span class=\"chem\">t = arctan(10/3) ≈ 1.2793</span> <span class=\"unit\">s</span>, 그리고 <span class=\"chem\">d(1.2793…) = 5e^{-0.3838…} sin(1.2793…) ≈ 3.26</span> <span class=\"unit\">cm</span>.<br>(d) 해는 <span class=\"chem\">1.279 + k pi</span>: <span class=\"chem\">1.28, 4.42, 7.56</span> (다음 해 <span class=\"chem\">10.7</span>은 너무 커요). 따라서 <span class=\"chem\">3</span>번이에요.<br>(e) 변위가 가장 빠르게 감소하는 곳은 <span class=\"chem\">d'(t)</span>가 가장 작은 음수인 곳이에요. GDC로 <span class=\"chem\">0 &lt; t &lt; 4</span>에서 <span class=\"chem\">d'</span>의 최솟값은 <span class=\"chem\">t ≈ 2.5587</span>에서 나타나고, <span class=\"chem\">d'(2.5587…) ≈ -2.3206</span>이에요. 양 끝 근처에서는 <span class=\"chem\">d'(0) = 5</span>, <span class=\"chem\">d'(4) ≈ -0.642</span>로 더 큰 값이에요. 따라서 <span class=\"chem\">t ≈ 2.56</span> <span class=\"unit\">s</span>일 때 변위는 <span class=\"chem\">2.32</span> <span class=\"unit\">cm s-1</span>의 비율로 감소해요.<br>(f) <span class=\"chem\">d''(t) = -0.3e^{-0.3t}(5 cos t - 1.5 sin t) + e^{-0.3t}(-5 sin t - 1.5 cos t) = e^{-0.3t}(-4.55 sin t - 3 cos t)</span>이므로 <span class=\"chem\">d''(3) = e^{-0.9}(-4.55 sin 3 - 3 cos 3) ≈ 0.946</span> <span class=\"unit\">cm s-2</span> (또는 GDC를 직접 이용해요).</p>",
      // EN: <p>(a), (b) See mark scheme.<br>(c) <span class="chem">t ≈ 1.28</span> <span class="unit">s</span>, <span class="chem">d ≈ 3.26</span> <span class="unit">cm</span>.<br>(d) <span class="chem">3</span> times.<br>(e) <span class="chem">t ≈ 2.56</span> <span class="unit">s</span>; decreasing at <span class="chem">2.32</span> <span class="unit">cm s-1</span>.<br>(f) <span class="chem">d''(3) ≈ 0.946</span> <span class="unit">cm s-2</span>.</p>
      answer: "<p>(a), (b) 채점 기준 참고.<br>(c) <span class=\"chem\">t ≈ 1.28</span> <span class=\"unit\">s</span>, <span class=\"chem\">d ≈ 3.26</span> <span class=\"unit\">cm</span>.<br>(d) <span class=\"chem\">3</span>번.<br>(e) <span class=\"chem\">t ≈ 2.56</span> <span class=\"unit\">s</span>; <span class=\"chem\">2.32</span> <span class=\"unit\">cm s-1</span>의 비율로 감소.<br>(f) <span class=\"chem\">d''(3) ≈ 0.946</span> <span class=\"unit\">cm s-2</span>.</p>",
      markscheme: [
        // EN: M1: Uses the product rule, with the chain rule on <span class="chem">e^{-0.3t}</span>.
        "M1: 곱의 미분법을 이용하고, <span class=\"chem\">e^{-0.3t}</span>에 연쇄법칙을 씀.",
        // EN: A1: <span class="chem">d'(t) = 5(-0.3e^{-0.3t}) sin t + 5e^{-0.3t} cos t = -1.5e^{-0.3t} sin t + 5e^{-0.3t} cos t</span>, which factorises to <span class="chem">e^{-0.3t}(5 cos t - 1.5 sin t)</span> (AG).
        "A1: <span class=\"chem\">d'(t) = 5(-0.3e^{-0.3t}) sin t + 5e^{-0.3t} cos t = -1.5e^{-0.3t} sin t + 5e^{-0.3t} cos t</span>이고, 이를 인수분해하면 <span class=\"chem\">e^{-0.3t}(5 cos t - 1.5 sin t)</span> (AG).",
        // EN: M1: <span class="chem">e^{-0.3t} &gt; 0</span>, so <span class="chem">d'(t) = 0 &lt;=&gt; 5 cos t - 1.5 sin t = 0</span>.
        "M1: <span class=\"chem\">e^{-0.3t} &gt; 0</span>이므로 <span class=\"chem\">d'(t) = 0 &lt;=&gt; 5 cos t - 1.5 sin t = 0</span>.",
        // EN: A1: <span class="chem">5 cos t = 1.5 sin t =&gt; sin t / cos t = 5 / 1.5</span>, so <span class="chem">tan t = 10/3</span> (AG).
        "A1: <span class=\"chem\">5 cos t = 1.5 sin t =&gt; sin t / cos t = 5 / 1.5</span>이므로 <span class=\"chem\">tan t = 10/3</span> (AG).",
        // EN: M1: <span class="chem">t = arctan(10/3)</span> (or solves <span class="chem">d'(t) = 0</span> on the GDC).
        "M1: <span class=\"chem\">t = arctan(10/3)</span> (또는 GDC로 <span class=\"chem\">d'(t) = 0</span>를 풂).",
        // EN: A1: <span class="chem">t = 1.28</span> <span class="unit">s</span> (<span class="chem">1.27933…</span>).
        "A1: <span class=\"chem\">t = 1.28</span> <span class=\"unit\">s</span> (<span class=\"chem\">1.27933…</span>).",
        // EN: A1: <span class="chem">d = 3.26</span> <span class="unit">cm</span>.
        "A1: <span class=\"chem\">d = 3.26</span> <span class=\"unit\">cm</span>.",
        // EN: A1: <span class="chem">3</span> (at <span class="chem">t ≈ 1.28, 4.42, 7.56</span>, which are <span class="chem">pi</span> apart).
        "A1: <span class=\"chem\">3</span> (<span class=\"chem\">t ≈ 1.28, 4.42, 7.56</span>에서, 간격은 <span class=\"chem\">pi</span>).",
        // EN: M1: Recognises that “decreasing most rapidly” means the minimum of <span class="chem">d'(t)</span> (where <span class="chem">d''(t) = 0</span>).
        "M1: “가장 빠르게 감소”가 <span class=\"chem\">d'(t)</span>의 최솟값(<span class=\"chem\">d''(t) = 0</span>인 곳)임을 인식함.",
        // EN: A1: <span class="chem">t = 2.56</span> <span class="unit">s</span> (<span class="chem">2.55867…</span>).
        "A1: <span class=\"chem\">t = 2.56</span> <span class=\"unit\">s</span> (<span class=\"chem\">2.55867…</span>).",
        // EN: R1: Checks the ends of the interval: <span class="chem">d'(0) = 5</span>, <span class="chem">d'(4) ≈ -0.642</span>, so the turning point gives the most negative <span class="chem">d'</span>.
        "R1: 구간의 양 끝을 확인함: <span class=\"chem\">d'(0) = 5</span>, <span class=\"chem\">d'(4) ≈ -0.642</span>이므로 극점에서 <span class=\"chem\">d'</span>이 가장 작은 음수가 됨.",
        // EN: A1: Rate of decrease <span class="chem">2.32</span> <span class="unit">cm s-1</span> (<span class="chem">d'(2.5587…) ≈ -2.32</span>).
        "A1: 감소 비율 <span class=\"chem\">2.32</span> <span class=\"unit\">cm s-1</span> (<span class=\"chem\">d'(2.5587…) ≈ -2.32</span>).",
        // EN: M1: Acceleration is <span class="chem">d''(t)</span>; evaluates it at <span class="chem">t = 3</span> (GDC or by differentiating <span class="chem">d'</span>).
        "M1: 가속도는 <span class=\"chem\">d''(t)</span>; <span class=\"chem\">t = 3</span>에서 값을 구함 (GDC 또는 <span class=\"chem\">d'</span>을 미분).",
        // EN: A1: <span class="chem">0.946</span> <span class="unit">cm s-2</span>.
        "A1: <span class=\"chem\">0.946</span> <span class=\"unit\">cm s-2</span>.",
      ],
    },

    // ── t5-1-q053 · numeric · challenge · SL · SL 5.8 · 7 marks
    "t5-1-q053": {
      // EN: <p>A party hat in the shape of a right circular cone (with no base) is made from a circular sheet of paper of radius <span class="chem">12</span> <span class="unit">cm</span>. A sector is cut out of the sheet and thrown away, and the two straight edges of the remaining piece are joined. Find the angle, in radians, of the sector that must be cut out so that the cone has the greatest possible volume. Give your answer correct to 3 significant figures.</p>
      stem: "<p>밑면이 없는 직원뿔 모양의 파티 모자를 반지름 <span class=\"chem\">12</span> <span class=\"unit\">cm</span>인 원형 종이로 만들어요. 종이에서 부채꼴 하나를 잘라 내어 버리고, 남은 부분의 두 직선 모서리를 붙여요. 원뿔의 부피가 최대가 되도록 잘라 내야 하는 부채꼴의 중심각을 라디안으로 구하시오 (Find). 답은 유효숫자 3자리로 쓰시오.</p>",
      hints: [
        // EN: Decode: three things are linked. The slant height of the cone is the sheet radius, <span class="chem">12</span>, so <span class="chem">r^2 + h^2 = 144</span>. The arc of the piece that is kept becomes the base circumference. And the question asks for the angle of the piece thrown away, not <span class="chem">r</span> or the volume.
        "해석: 세 가지가 연결되어 있어요. 원뿔의 모선의 길이는 종이의 반지름 <span class=\"chem\">12</span>이므로 <span class=\"chem\">r^2 + h^2 = 144</span>예요. 남긴 부분의 호가 밑면의 둘레가 돼요. 그리고 문제에서 묻는 것은 <span class=\"chem\">r</span>나 부피가 아니라 버리는 부분의 각이에요.",
        // EN: Write the volume in one variable: <span class="chem">V(r) = (1/3) pi r^2 sqrt(144 - r^2)</span>, <span class="chem">0 &lt; r &lt; 12</span>. Find the <span class="chem">r</span> that maximises it on the GDC.
        "부피를 한 변수로 나타내세요: <span class=\"chem\">V(r) = (1/3) pi r^2 sqrt(144 - r^2)</span>, <span class=\"chem\">0 &lt; r &lt; 12</span>. GDC로 부피를 최대로 하는 <span class=\"chem\">r</span>를 구하세요.",
        // EN: If the kept sector has angle <span class="chem">alpha</span>, its arc is <span class="chem">12 alpha = 2 pi r</span>. The removed angle is <span class="chem">2 pi - alpha</span>.
        "남긴 부채꼴의 중심각을 <span class=\"chem\">alpha</span>라 하면 그 호의 길이는 <span class=\"chem\">12 alpha = 2 pi r</span>예요. 잘라 낸 각은 <span class=\"chem\">2 pi - alpha</span>이에요.",
      ],
      // EN: <p><strong>Decode:</strong> the slant height is <span class="chem">12</span>, the kept arc becomes the base circumference, and the required quantity is the removed angle.<br><span class="chem">V(r) = (1/3) pi r^2 h</span> with <span class="chem">h = sqrt(144 - r^2)</span>, so <span class="chem">V(r) = (1/3) pi r^2 sqrt(144 - r^2)</span>, <span class="chem">0 &lt; r &lt; 12</span>. <span class="chem">V -&gt; 0</span> at both ends, and the GDC maximum is at <span class="chem">r ≈ 9.7980</span> (exactly <span class="chem">4 sqrt(6)</span>).<br>Kept angle: <span class="chem">12 alpha = 2 pi r =&gt; alpha = 2 pi(9.7980…) / 12 ≈ 5.1302</span>. Removed angle: <span class="chem">2 pi - 5.1302 ≈ 1.15</span> radians (3 s.f.).</p>
      solution: "<p><strong>해석:</strong> 모선의 길이는 <span class=\"chem\">12</span>, 남긴 호는 밑면의 둘레가 되고, 구하는 양은 잘라 낸 각이에요.<br><span class=\"chem\">h = sqrt(144 - r^2)</span>일 때 <span class=\"chem\">V(r) = (1/3) pi r^2 h</span>이므로 <span class=\"chem\">V(r) = (1/3) pi r^2 sqrt(144 - r^2)</span>, <span class=\"chem\">0 &lt; r &lt; 12</span>. 양 끝에서 <span class=\"chem\">V -&gt; 0</span>이고, GDC로 구한 최댓값은 <span class=\"chem\">r ≈ 9.7980</span>(정확히는 <span class=\"chem\">4 sqrt(6)</span>)에서 나타나요.<br>남긴 각: <span class=\"chem\">12 alpha = 2 pi r =&gt; alpha = 2 pi(9.7980…) / 12 ≈ 5.1302</span>. 잘라 낸 각: <span class=\"chem\">2 pi - 5.1302 ≈ 1.15</span>라디안 (3 s.f.).</p>",
    },

    // ── t5-1-q054 · numeric · foundation · SL · SL 5.1 · 2 marks
    "t5-1-q054": {
      // EN: <p>The gradient of the curve <span class="chem">y = 2^x</span> at the point <span class="chem">(0, 1)</span> is the limit of <span class="chem">(2^h - 1) / h</span> as <span class="chem">h -&gt; 0</span>. Use your GDC to evaluate <span class="chem">(2^h - 1) / h</span> for <span class="chem">h = 0.1</span>, <span class="chem">0.01</span> and <span class="chem">0.001</span>, and hence estimate this gradient correct to 3 significant figures.</p>
      stem: "<p>점 <span class=\"chem\">(0, 1)</span>에서 곡선 <span class=\"chem\">y = 2^x</span>의 기울기는 <span class=\"chem\">h -&gt; 0</span>일 때 <span class=\"chem\">(2^h - 1) / h</span>의 극한이에요. GDC를 이용해 <span class=\"chem\">h = 0.1</span>, <span class=\"chem\">0.01</span>, <span class=\"chem\">0.001</span>에 대해 <span class=\"chem\">(2^h - 1) / h</span>의 값을 계산하고, 이를 이용하여 (hence) 이 기울기를 유효숫자 3자리까지 추정하시오 (estimate).</p>",
      hints: [
        // EN: <span class="chem">(2^h - 1) / h</span> is the gradient of the chord from <span class="chem">(0, 1)</span> to <span class="chem">(h, 2^h)</span>.
        "<span class=\"chem\">(2^h - 1) / h</span>은 <span class=\"chem\">(0, 1)</span>에서 <span class=\"chem\">(h, 2^h)</span>까지의 현의 기울기예요.",
        // EN: Make a table of values on the GDC. The first three significant figures stop changing once <span class="chem">h</span> is small enough.
        "GDC로 값의 표를 만드세요. <span class=\"chem\">h</span>가 충분히 작아지면 앞의 유효숫자 3자리는 더 이상 바뀌지 않아요.",
      ],
      // EN: <p>The values are <span class="chem">0.71773</span> (<span class="chem">h = 0.1</span>), <span class="chem">0.69556</span> (<span class="chem">h = 0.01</span>) and <span class="chem">0.69339</span> (<span class="chem">h = 0.001</span>). They are approaching about <span class="chem">0.693</span>, so the gradient at <span class="chem">(0, 1)</span> is approximately <span class="chem">0.693</span>. (The exact value is <span class="chem">ln 2</span>.)</p>
      solution: "<p>값은 <span class=\"chem\">0.71773</span> (<span class=\"chem\">h = 0.1</span>), <span class=\"chem\">0.69556</span> (<span class=\"chem\">h = 0.01</span>), <span class=\"chem\">0.69339</span> (<span class=\"chem\">h = 0.001</span>)예요. 이 값들은 약 <span class=\"chem\">0.693</span>에 가까워지므로 <span class=\"chem\">(0, 1)</span>에서의 기울기는 약 <span class=\"chem\">0.693</span>예요. (정확한 값은 <span class=\"chem\">ln 2</span>이에요.)</p>",
    },

    // ── t5-1-q055 · numeric · exam · SL · SL 5.4, 5.6 · 4 marks
    "t5-1-q055": {
      // EN: <p>Find the acute angle between the tangent to the curve <span class="chem">y = x e^{-x/3}</span> at the point where <span class="chem">x = 1</span> and the <span class="chem">x</span>-axis. Give your answer in degrees, correct to 3 significant figures.</p>
      stem: "<p>곡선 <span class=\"chem\">y = x e^{-x/3}</span> 위의 <span class=\"chem\">x = 1</span>인 점에서의 접선과 <span class=\"chem\">x</span>축이 이루는 예각을 구하시오 (Find). 답은 도 단위로, 유효숫자 3자리까지 쓰시오.</p>",
      hints: [
        // EN: If a line has gradient <span class="chem">m</span>, the angle <span class="chem">theta</span> it makes with the positive <span class="chem">x</span>-axis satisfies <span class="chem">tan theta = m</span>.
        "직선의 기울기가 <span class=\"chem\">m</span>이면, 그 직선이 <span class=\"chem\">x</span>축의 양의 방향과 이루는 각 <span class=\"chem\">theta</span>는 <span class=\"chem\">tan theta = m</span>를 만족해요.",
        // EN: Find <span class="chem">m = dy/dx</span> at <span class="chem">x = 1</span> (product rule or GDC), then <span class="chem">theta = arctan(m)</span> in degree mode.
        "<span class=\"chem\">x = 1</span>에서 <span class=\"chem\">m = dy/dx</span>을 구한 뒤 (곱의 미분법 또는 GDC), 도(degree) 모드에서 <span class=\"chem\">theta = arctan(m)</span>를 계산하세요.",
      ],
      // EN: <p><span class="chem">dy/dx = e^{-x/3} - (x/3)e^{-x/3} = e^{-x/3}(1 - x/3)</span>, so at <span class="chem">x = 1</span>, <span class="chem">m = (2/3)e^{-1/3} ≈ 0.47769</span>. The angle with the <span class="chem">x</span>-axis is <span class="chem">arctan(0.47769…) ≈ 25.5°</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">dy/dx = e^{-x/3} - (x/3)e^{-x/3} = e^{-x/3}(1 - x/3)</span>이므로 <span class=\"chem\">x = 1</span>에서 <span class=\"chem\">m = (2/3)e^{-1/3} ≈ 0.47769</span>이에요. <span class=\"chem\">x</span>축과 이루는 각은 <span class=\"chem\">arctan(0.47769…) ≈ 25.5°</span> (3 s.f.)예요.</p>",
    },

    // ── t5-1-q056 · numeric · challenge · SL · SL 5.1, 5.8, 5.9 · 6 marks
    "t5-1-q056": {
      // EN: <p>A cyclist’s distance from the start of a training run, <span class="chem">t</span> seconds after the run begins, is <span class="chem">s(t) = 2t + 0.5t^2 - 0.03t^3 + sin t</span> metres, for <span class="chem">0 &lt;= t &lt;= 10</span>. Find the greatest speed of the cyclist during this time, correct to 3 significant figures.</p>
      stem: "<p>훈련 주행을 시작한 지 <span class=\"chem\">t</span>초 후 자전거 선수의 출발점으로부터의 거리는 <span class=\"chem\">s(t) = 2t + 0.5t^2 - 0.03t^3 + sin t</span>미터예요 (<span class=\"chem\">0 &lt;= t &lt;= 10</span>). 이 시간 동안 자전거 선수의 최고 속력을 유효숫자 3자리까지 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: speed is the rate of change of distance, <span class="chem">v(t) = s'(t)</span>. You need the maximum of <span class="chem">v</span> (not of <span class="chem">s</span>) on the closed interval <span class="chem">[0, 10]</span>.
        "해석: 속력은 거리의 변화율 <span class=\"chem\">v(t) = s'(t)</span>이에요. 닫힌구간 <span class=\"chem\">[0, 10]</span>에서 (<span class=\"chem\">s</span>가 아니라) <span class=\"chem\">v</span>의 최댓값이 필요해요.",
        // EN: <span class="chem">v(t) = 2 + t - 0.09t^2 + cos t</span>. Graph it on the GDC (radian mode) for <span class="chem">0 &lt;= t &lt;= 10</span>.
        "<span class=\"chem\">v(t) = 2 + t - 0.09t^2 + cos t</span>. GDC(라디안 모드)로 <span class=\"chem\">0 &lt;= t &lt;= 10</span>에서 그 그래프를 그리세요.",
        // EN: The graph has two local maxima. Compare both with <span class="chem">v(0)</span> and <span class="chem">v(10)</span> before choosing.
        "그래프에는 극댓값이 두 개 있어요. 답을 고르기 전에 둘 다 <span class=\"chem\">v(0)</span>, <span class=\"chem\">v(10)</span>와 비교하세요.",
      ],
      // EN: <p><strong>Decode:</strong> maximise the speed <span class="chem">v(t) = s'(t)</span> on <span class="chem">[0, 10]</span>, comparing all local maxima with the endpoint values.<br><span class="chem">v(t) = 2 + t - 0.09t^2 + cos t</span> (positive throughout, so speed <span class="chem">= v</span>). Its local maxima are <span class="chem">v(0.971…) ≈ 3.45</span> and <span class="chem">v(6.172…) ≈ 5.737</span>; the endpoints give <span class="chem">v(0) = 3</span> and <span class="chem">v(10) ≈ 2.16</span>. The greatest speed is <span class="chem">5.74</span> <span class="unit">m s-1</span> (3 s.f.), at <span class="chem">t ≈ 6.17</span> <span class="unit">s</span>.</p>
      solution: "<p><strong>해석:</strong> <span class=\"chem\">[0, 10]</span>에서 속력 <span class=\"chem\">v(t) = s'(t)</span>을 최대화하고, 모든 극댓값을 끝점의 값과 비교해요.<br><span class=\"chem\">v(t) = 2 + t - 0.09t^2 + cos t</span> (항상 양수이므로 속력 <span class=\"chem\">= v</span>). 그 극댓값은 <span class=\"chem\">v(0.971…) ≈ 3.45</span>와 <span class=\"chem\">v(6.172…) ≈ 5.737</span>이고, 끝점에서는 <span class=\"chem\">v(0) = 3</span>, <span class=\"chem\">v(10) ≈ 2.16</span>이에요. 최고 속력은 <span class=\"chem\">5.74</span> <span class=\"unit\">m s-1</span> (3 s.f.)이고, <span class=\"chem\">t ≈ 6.17</span> <span class=\"unit\">s</span>일 때예요.</p>",
    },

    // ── t5-1-q057 · numeric · challenge · SL · SL 5.7, 5.8 · 5 marks
    "t5-1-q057": {
      // EN: <p>The number of fish in a newly stocked lake <span class="chem">t</span> days after stocking is modelled by <span class="chem">P(t) = 800 / (1 + 15e^{-0.4t})</span>, <span class="chem">t &gt;= 0</span>. Find the time at which the fish population is increasing most rapidly, correct to 3 significant figures.</p>
      stem: "<p>새로 물고기를 방류한 호수에서 방류 <span class=\"chem\">t</span>일 후 물고기의 수는 <span class=\"chem\">P(t) = 800 / (1 + 15e^{-0.4t})</span>, <span class=\"chem\">t &gt;= 0</span>으로 모델링돼요. 물고기 수가 가장 빠르게 증가하는 시각을 유효숫자 3자리까지 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: “increasing most rapidly” means the rate <span class="chem">P'(t)</span> is at its maximum. That happens where <span class="chem">P''(t) = 0</span> and changes sign: the point of inflexion of the graph of <span class="chem">P</span>.
        "해석: “가장 빠르게 증가”는 변화율 <span class=\"chem\">P'(t)</span>이 최대라는 뜻이에요. 그것은 <span class=\"chem\">P''(t) = 0</span>이고 부호가 바뀌는 곳, 즉 <span class=\"chem\">P</span>의 그래프의 변곡점에서 일어나요.",
        // EN: Graph <span class="chem">y = P'(t)</span> on the GDC (as the derivative of <span class="chem">P</span>) for <span class="chem">0 &lt;= t &lt;= 20</span> and find its maximum.
        "GDC로 <span class=\"chem\">0 &lt;= t &lt;= 20</span>에서 <span class=\"chem\">y = P'(t)</span>의 그래프를 (<span class=\"chem\">P</span>의 도함수로) 그리고 최댓값을 구하세요.",
        // EN: Check the endpoint: <span class="chem">P'(0) = 18.75</span>, much less than the turning value.
        "끝점을 확인하세요: <span class=\"chem\">P'(0) = 18.75</span>로, 극점의 값보다 훨씬 작아요.",
      ],
      // EN: <p><strong>Decode:</strong> the fastest increase is the maximum of <span class="chem">P'(t)</span>, i.e. the inflexion point of the S-shaped graph of <span class="chem">P</span>.<br>On the GDC, <span class="chem">P'(t)</span> has its maximum at <span class="chem">t ≈ 6.770</span>, where <span class="chem">P'(t) = 80</span> fish per day (exactly <span class="chem">t = ln 15 / 0.4</span>, where <span class="chem">P = 400</span>). <span class="chem">P''</span> changes from positive to negative there, and at the endpoint <span class="chem">P'(0) = 18.75 &lt; 80</span>. So the population increases most rapidly at <span class="chem">t ≈ 6.77</span> days (3 s.f.).</p>
      solution: "<p><strong>해석:</strong> 가장 빠른 증가는 <span class=\"chem\">P'(t)</span>의 최댓값, 즉 <span class=\"chem\">P</span>의 S자 모양 그래프의 변곡점이에요.<br>GDC로 <span class=\"chem\">P'(t)</span>은 <span class=\"chem\">t ≈ 6.770</span>에서 최댓값을 가지며, 그때 하루에 <span class=\"chem\">P'(t) = 80</span>마리예요 (정확히는 <span class=\"chem\">t = ln 15 / 0.4</span>이고, 이때 <span class=\"chem\">P = 400</span>). 그곳에서 <span class=\"chem\">P''</span>은 양에서 음으로 바뀌고, 끝점에서는 <span class=\"chem\">P'(0) = 18.75 &lt; 80</span>예요. 따라서 물고기 수는 <span class=\"chem\">t ≈ 6.77</span>일에 가장 빠르게 증가해요 (3 s.f.).</p>",
      // EN: days
      unit: "일",
    },

    // ── t5-1-q058 · numeric · exam · SL · SL 5.2, 5.8 · 4 marks
    "t5-1-q058": {
      // EN: <p>Let <span class="chem">f(x) = 0.5x^4 - 2x^3 + x^2 + 3x - 1</span>. The graph of <span class="chem">f</span> has two local minimum points and one local maximum point. Find the <span class="chem">y</span>-coordinate of the local maximum point, correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">f(x) = 0.5x^4 - 2x^3 + x^2 + 3x - 1</span>이라 하자. <span class=\"chem\">f</span>의 그래프는 극소점 두 개와 극대점 한 개를 가져요. 극대점의 <span class=\"chem\">y</span>좌표를 유효숫자 3자리까지 구하시오 (Find).</p>",
      hints: [
        // EN: Graph <span class="chem">y = f(x)</span> for about <span class="chem">-2 &lt;= x &lt;= 4</span>. The local maximum lies between the two minima.
        "대략 <span class=\"chem\">-2 &lt;= x &lt;= 4</span>에서 <span class=\"chem\">y = f(x)</span>의 그래프를 그리세요. 극대점은 두 극소점 사이에 있어요.",
        // EN: Use the GDC maximum feature, or solve the cubic <span class="chem">f'(x) = 2x^3 - 6x^2 + 2x + 3 = 0</span> and pick the middle root.
        "GDC의 최댓값 기능을 이용하거나, 삼차방정식 <span class=\"chem\">f'(x) = 2x^3 - 6x^2 + 2x + 3 = 0</span>을 풀어 가운데 근을 고르세요.",
      ],
      // EN: <p><span class="chem">f'(x) = 2x^3 - 6x^2 + 2x + 3</span>. The GDC gives roots <span class="chem">x ≈ -0.526</span>, <span class="chem">1.259</span>, <span class="chem">2.267</span>. Since <span class="chem">f''(x) = 6x^2 - 12x + 2</span> is negative at <span class="chem">x ≈ 1.259</span> (about <span class="chem">-3.6</span>), the middle point is the local maximum: <span class="chem">f(1.2587…) ≈ 1.6271</span>. The <span class="chem">y</span>-coordinate is <span class="chem">1.63</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">f'(x) = 2x^3 - 6x^2 + 2x + 3</span>. GDC로 근은 <span class=\"chem\">x ≈ -0.526</span>, <span class=\"chem\">1.259</span>, <span class=\"chem\">2.267</span>예요. <span class=\"chem\">f''(x) = 6x^2 - 12x + 2</span>은 <span class=\"chem\">x ≈ 1.259</span>에서 음수(약 <span class=\"chem\">-3.6</span>)이므로 가운데 점이 극대점이에요: <span class=\"chem\">f(1.2587…) ≈ 1.6271</span>. <span class=\"chem\">y</span>좌표는 <span class=\"chem\">1.63</span> (3 s.f.)예요.</p>",
    },

    // ── t5-1-q059 · short · challenge · SL · SL 5.8 · 9 marks
    "t5-1-q059": {
      // EN: <p>A garden is a rectangle <span class="chem">x</span> <span class="unit">m</span> long and <span class="chem">y</span> <span class="unit">m</span> wide, with a semicircle of diameter <span class="chem">y</span> attached to one of its short sides. A fence goes round the whole outside edge of the garden. The straight parts of the fence cost <span class="chem">$12</span> per metre, and the curved part costs <span class="chem">$20</span> per metre. The total cost of the fence is <span class="chem">$1200</span>.<br>(a) Show that <span class="chem">x = 50 - (6 + 5 pi)y / 12</span>. <strong>[2 marks]</strong><br>(b) Show that the area of the garden is <span class="chem">A = 50y - (6 + 5 pi)y^2 / 12 + pi y^2 / 8</span>. <strong>[2 marks]</strong><br>(c) Find the value of <span class="chem">y</span> that gives the greatest area, and the greatest area. <strong>[4 marks]</strong><br>(d) Verify that this design is possible. <strong>[1 mark]</strong></p>
      stem: "<p>정원은 길이 <span class=\"chem\">x</span> <span class=\"unit\">m</span>, 폭 <span class=\"chem\">y</span> <span class=\"unit\">m</span>인 직사각형과, 그 짧은 변 하나에 붙인 지름 <span class=\"chem\">y</span>인 반원으로 이루어져 있어요. 울타리가 정원의 바깥 둘레 전체를 둘러싸요. 울타리의 직선 부분은 미터당 <span class=\"chem\">$12</span>, 곡선 부분은 미터당 <span class=\"chem\">$20</span>의 비용이 들어요. 울타리의 총비용은 <span class=\"chem\">$1200</span>예요.<br>(a) <span class=\"chem\">x = 50 - (6 + 5 pi)y / 12</span>임을 보이시오 (Show that). <strong>[2 marks]</strong><br>(b) 정원의 넓이가 <span class=\"chem\">A = 50y - (6 + 5 pi)y^2 / 12 + pi y^2 / 8</span>임을 보이시오 (Show that). <strong>[2 marks]</strong><br>(c) 넓이가 최대가 되는 <span class=\"chem\">y</span>의 값과 넓이의 최댓값을 구하시오 (Find). <strong>[4 marks]</strong><br>(d) 이 설계가 가능함을 확인하시오 (Verify). <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: list the fence pieces carefully. The side where the semicircle is attached has no fence; the remaining straight edges are two lengths <span class="chem">x</span> and one width <span class="chem">y</span>, plus a half-circle arc <span class="chem">pi y / 2</span>.
        "해석: 울타리의 각 부분을 주의해서 나열하세요. 반원이 붙은 변에는 울타리가 없어요; 나머지 직선 부분은 길이 <span class=\"chem\">x</span> 두 개와 폭 <span class=\"chem\">y</span> 하나이고, 여기에 반원의 호 <span class=\"chem\">pi y / 2</span>가 더해져요.",
        // EN: Cost: <span class="chem">12(2x + y) + 20(pi y / 2) = 1200</span>. Area: rectangle plus half a circle of radius <span class="chem">y/2</span>.
        "비용: <span class=\"chem\">12(2x + y) + 20(pi y / 2) = 1200</span>. 넓이: 직사각형에 반지름 <span class=\"chem\">y/2</span>인 반원을 더한 것.",
        // EN: For (c), graph <span class="chem">A(y)</span> for <span class="chem">y &gt; 0</span> and find the maximum. For (d), the length <span class="chem">x</span> must be positive.
        "(c)에서는 <span class=\"chem\">y &gt; 0</span>에서 <span class=\"chem\">A(y)</span>의 그래프를 그리고 최댓값을 구하세요. (d)에서는 길이 <span class=\"chem\">x</span>가 양수여야 해요.",
      ],
      // EN: <p><strong>Decode:</strong> work out which edges are fenced. The short side joined to the semicircle is inside the garden, so the fence is two lengths <span class="chem">x</span>, one width <span class="chem">y</span>, and the arc <span class="chem">pi y / 2</span>.<br>(a) <span class="chem">12(2x + y) + 20(pi y / 2) = 1200 =&gt; 24x = 1200 - (12 + 10 pi)y =&gt; x = 50 - (6 + 5 pi)y / 12</span>.<br>(b) <span class="chem">A = xy + (1/2) pi (y/2)^2 = xy + pi y^2 / 8 = 50y - (6 + 5 pi)y^2 / 12 + pi y^2 / 8</span>.<br>(c) <span class="chem">A'(y) = 50 - (6 + 5 pi)y / 6 + pi y / 4 = 0 =&gt; y = 600 / (12 + 7 pi) ≈ 17.65</span>. The coefficient of <span class="chem">y^2</span> is <span class="chem">-(6 + 5 pi)/12 + pi/8 ≈ -1.42 &lt; 0</span>, so this is a maximum: <span class="chem">A ≈ 441</span> <span class="unit">m2</span>.<br>(d) <span class="chem">x ≈ 50 - 1.809(17.65) ≈ 18.1 &gt; 0</span>, so the rectangle exists and the design is possible.</p>
      solution: "<p><strong>해석:</strong> 어느 변에 울타리가 있는지 확인해요. 반원과 붙은 짧은 변은 정원 안쪽에 있으므로 울타리는 길이 <span class=\"chem\">x</span> 두 개, 폭 <span class=\"chem\">y</span> 하나, 그리고 호 <span class=\"chem\">pi y / 2</span>예요.<br>(a) <span class=\"chem\">12(2x + y) + 20(pi y / 2) = 1200 =&gt; 24x = 1200 - (12 + 10 pi)y =&gt; x = 50 - (6 + 5 pi)y / 12</span>.<br>(b) <span class=\"chem\">A = xy + (1/2) pi (y/2)^2 = xy + pi y^2 / 8 = 50y - (6 + 5 pi)y^2 / 12 + pi y^2 / 8</span>.<br>(c) <span class=\"chem\">A'(y) = 50 - (6 + 5 pi)y / 6 + pi y / 4 = 0 =&gt; y = 600 / (12 + 7 pi) ≈ 17.65</span>. <span class=\"chem\">y^2</span>의 계수는 <span class=\"chem\">-(6 + 5 pi)/12 + pi/8 ≈ -1.42 &lt; 0</span>이므로 이것은 최댓값이에요: <span class=\"chem\">A ≈ 441</span> <span class=\"unit\">m2</span>.<br>(d) <span class=\"chem\">x ≈ 50 - 1.809(17.65) ≈ 18.1 &gt; 0</span>이므로 직사각형이 존재하고 설계가 가능해요.</p>",
      // EN: <p>(a), (b) See mark scheme.<br>(c) <span class="chem">y ≈ 17.7</span> <span class="unit">m</span>, <span class="chem">A ≈ 441</span> <span class="unit">m2</span>.<br>(d) <span class="chem">x ≈ 18.1 &gt; 0</span>.</p>
      answer: "<p>(a), (b) 채점 기준 참고.<br>(c) <span class=\"chem\">y ≈ 17.7</span> <span class=\"unit\">m</span>, <span class=\"chem\">A ≈ 441</span> <span class=\"unit\">m2</span>.<br>(d) <span class=\"chem\">x ≈ 18.1 &gt; 0</span>.</p>",
      markscheme: [
        // EN: M1: Cost equation: the straight fence is <span class="chem">2x + y</span> and the arc is <span class="chem">pi y / 2</span>, so <span class="chem">12(2x + y) + 20(pi y / 2) = 1200</span>.
        "M1: 비용 방정식: 직선 울타리는 <span class=\"chem\">2x + y</span>, 호는 <span class=\"chem\">pi y / 2</span>이므로 <span class=\"chem\">12(2x + y) + 20(pi y / 2) = 1200</span>.",
        // EN: A1: <span class="chem">24x = 1200 - 12y - 10 pi y =&gt; x = 50 - (6 + 5 pi)y / 12</span> (AG).
        "A1: <span class=\"chem\">24x = 1200 - 12y - 10 pi y =&gt; x = 50 - (6 + 5 pi)y / 12</span> (AG).",
        // EN: M1: Area <span class="chem">= xy + (1/2) pi (y/2)^2 = xy + pi y^2 / 8</span>.
        "M1: 넓이 <span class=\"chem\">= xy + (1/2) pi (y/2)^2 = xy + pi y^2 / 8</span>.",
        // EN: A1: Substitutes <span class="chem">x</span>: <span class="chem">A = 50y - (6 + 5 pi)y^2 / 12 + pi y^2 / 8</span> (AG).
        "A1: <span class=\"chem\">x</span>를 대입함: <span class=\"chem\">A = 50y - (6 + 5 pi)y^2 / 12 + pi y^2 / 8</span> (AG).",
        // EN: M1: Solves <span class="chem">A'(y) = 50 - (6 + 5 pi)y / 6 + pi y / 4 = 0</span>, or uses the GDC maximum on the graph of <span class="chem">A</span>.
        "M1: <span class=\"chem\">A'(y) = 50 - (6 + 5 pi)y / 6 + pi y / 4 = 0</span>을 풀거나, <span class=\"chem\">A</span>의 그래프에 GDC의 최댓값 기능을 이용함.",
        // EN: A1: <span class="chem">y = 17.7</span> <span class="unit">m</span> (<span class="chem">17.6516…</span>, exactly <span class="chem">600 / (12 + 7 pi)</span>).
        "A1: <span class=\"chem\">y = 17.7</span> <span class=\"unit\">m</span> (<span class=\"chem\">17.6516…</span>, 정확히는 <span class=\"chem\">600 / (12 + 7 pi)</span>).",
        // EN: R1: Justifies a maximum, e.g. <span class="chem">A</span> is a quadratic in <span class="chem">y</span> with a negative coefficient of <span class="chem">y^2</span> (or <span class="chem">A''(y) &lt; 0</span>).
        "R1: 최댓값임을 보임, 예: <span class=\"chem\">A</span>는 <span class=\"chem\">y</span>에 대한 이차식이고 <span class=\"chem\">y^2</span>의 계수가 음수임 (또는 <span class=\"chem\">A''(y) &lt; 0</span>).",
        // EN: A1: <span class="chem">A = 441</span> <span class="unit">m2</span> (<span class="chem">441.29…</span>).
        "A1: <span class=\"chem\">A = 441</span> <span class=\"unit\">m2</span> (<span class=\"chem\">441.29…</span>).",
        // EN: A1: <span class="chem">x = 50 - (6 + 5 pi)(17.65…) / 12 ≈ 18.1 &gt; 0</span>, so the design is possible.
        "A1: <span class=\"chem\">x = 50 - (6 + 5 pi)(17.65…) / 12 ≈ 18.1 &gt; 0</span>이므로 설계가 가능함.",
      ],
    },

    // ── t5-1-q060 · short · challenge · SL · SL 5.2, 5.7, 5.8 · 8 marks
    "t5-1-q060": {
      // EN: <p>A function <span class="chem">f</span> is defined for <span class="chem">-2 &lt;= x &lt;= 3</span>, and its derivative is <span class="chem">f'(x) = x^2 - 4 sin x</span>.<br>(a) Find the <span class="chem">x</span>-coordinates of the stationary points of <span class="chem">f</span>, and determine the nature of each. <strong>[4 marks]</strong><br>(b) Find the <span class="chem">x</span>-coordinate of the point at which the graph of <span class="chem">f</span> is decreasing most rapidly. <strong>[3 marks]</strong><br>(c) State, with a reason, whether the graph of <span class="chem">f</span> has a point of inflexion at the point found in (b). <strong>[1 mark]</strong></p>
      stem: "<p>함수 <span class=\"chem\">f</span>는 <span class=\"chem\">-2 &lt;= x &lt;= 3</span>에서 정의되고, 그 도함수는 <span class=\"chem\">f'(x) = x^2 - 4 sin x</span>이에요.<br>(a) <span class=\"chem\">f</span>의 정류점의 <span class=\"chem\">x</span>좌표를 구하고 (Find), 각각의 성질을 판별하시오 (determine). <strong>[4 marks]</strong><br>(b) <span class=\"chem\">f</span>의 그래프가 가장 빠르게 감소하는 점의 <span class=\"chem\">x</span>좌표를 구하시오 (Find). <strong>[3 marks]</strong><br>(c) (b)에서 구한 점에서 <span class=\"chem\">f</span>의 그래프가 변곡점을 가지는지 이유와 함께 답하시오 (State). <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: you are told <span class="chem">f'</span>, not <span class="chem">f</span>. Stationary points are zeros of <span class="chem">f'</span>; “decreasing most rapidly” is the most negative value of <span class="chem">f'</span>, which could be at a turning point of <span class="chem">f'</span> or at an end of the domain.
        "해석: 주어진 것은 <span class=\"chem\">f</span>가 아니라 <span class=\"chem\">f'</span>이에요. 정류점은 <span class=\"chem\">f'</span>의 영점이고, “가장 빠르게 감소”는 <span class=\"chem\">f'</span>의 가장 작은 음수 값으로, <span class=\"chem\">f'</span>의 극점이나 정의역의 끝점에서 나타날 수 있어요.",
        // EN: Graph <span class="chem">y = x^2 - 4 sin x</span> for <span class="chem">-2 &lt;= x &lt;= 3</span> (radian mode). Read off its zeros and its minimum.
        "<span class=\"chem\">-2 &lt;= x &lt;= 3</span>에서 <span class=\"chem\">y = x^2 - 4 sin x</span>의 그래프를 그리세요 (라디안 모드). 영점과 최솟값을 읽으세요.",
        // EN: For (c), a turning point of <span class="chem">f'</span> is where <span class="chem">f''</span> is zero and changes sign.
        "(c)에서 <span class=\"chem\">f'</span>의 극점은 <span class=\"chem\">f''</span>가 0이 되고 부호가 바뀌는 곳이에요.",
      ],
      // EN: <p><strong>Decode:</strong> work entirely with the graph of <span class="chem">y = f'(x)</span>: its zeros give the stationary points of <span class="chem">f</span>, and its lowest point (checking the endpoints too) gives the steepest descent.<br>(a) <span class="chem">f'(x) = 0</span> at <span class="chem">x = 0</span> and <span class="chem">x ≈ 1.9338</span>. For <span class="chem">x &lt; 0</span>, <span class="chem">x^2 &gt; 0</span> and <span class="chem">-4 sin x &gt; 0</span>, so <span class="chem">f' &gt; 0</span>; just after <span class="chem">0</span>, <span class="chem">f' &lt; 0</span> (e.g. <span class="chem">f'(1) ≈ -2.37</span>). So <span class="chem">x = 0</span> is a local maximum, and since <span class="chem">f'</span> goes from <span class="chem">-</span> to <span class="chem">+</span> at <span class="chem">1.93</span> (e.g. <span class="chem">f'(2.5) ≈ 3.86</span>), <span class="chem">x ≈ 1.93</span> is a local minimum.<br>(b) The GDC minimum of <span class="chem">f'</span> is at <span class="chem">x ≈ 1.0299</span>, with <span class="chem">f' ≈ -2.37</span>. The endpoints give <span class="chem">f'(-2) ≈ 7.64</span> and <span class="chem">f'(3) ≈ 8.44</span>, so <span class="chem">f</span> decreases most rapidly at <span class="chem">x ≈ 1.03</span>.<br>(c) Yes. At a local minimum of <span class="chem">f'</span>, its gradient <span class="chem">f''(x) = 2x - 4 cos x</span> is zero and changes from negative to positive, so the concavity of <span class="chem">f</span> changes: a non-stationary point of inflexion.</p>
      solution: "<p><strong>해석:</strong> 모든 것을 <span class=\"chem\">y = f'(x)</span>의 그래프로 생각해요: 그 영점은 <span class=\"chem\">f</span>의 정류점을, 가장 낮은 점(끝점도 확인)은 가장 가파른 감소를 알려 줘요.<br>(a) <span class=\"chem\">x = 0</span>와 <span class=\"chem\">x ≈ 1.9338</span>에서 <span class=\"chem\">f'(x) = 0</span>이에요. <span class=\"chem\">x &lt; 0</span>에서 <span class=\"chem\">x^2 &gt; 0</span>이고 <span class=\"chem\">-4 sin x &gt; 0</span>이므로 <span class=\"chem\">f' &gt; 0</span>; <span class=\"chem\">0</span> 바로 다음에서는 <span class=\"chem\">f' &lt; 0</span> (예: <span class=\"chem\">f'(1) ≈ -2.37</span>). 따라서 <span class=\"chem\">x = 0</span>은 극대이고, <span class=\"chem\">1.93</span>에서 <span class=\"chem\">f'</span>이 <span class=\"chem\">-</span>에서 <span class=\"chem\">+</span>로 바뀌므로 (예: <span class=\"chem\">f'(2.5) ≈ 3.86</span>) <span class=\"chem\">x ≈ 1.93</span>는 극소예요.<br>(b) GDC로 구한 <span class=\"chem\">f'</span>의 최솟값은 <span class=\"chem\">x ≈ 1.0299</span>에서 나타나고, <span class=\"chem\">f' ≈ -2.37</span>예요. 끝점에서는 <span class=\"chem\">f'(-2) ≈ 7.64</span>, <span class=\"chem\">f'(3) ≈ 8.44</span>이므로 <span class=\"chem\">f</span>는 <span class=\"chem\">x ≈ 1.03</span>에서 가장 빠르게 감소해요.<br>(c) 예. <span class=\"chem\">f'</span>의 극소점에서 그 기울기 <span class=\"chem\">f''(x) = 2x - 4 cos x</span>는 0이고 음에서 양으로 바뀌므로 <span class=\"chem\">f</span>의 오목·볼록이 바뀌어요: 비정류 변곡점이에요.</p>",
      // EN: <p>(a) <span class="chem">x = 0</span>: local maximum; <span class="chem">x ≈ 1.93</span>: local minimum.<br>(b) <span class="chem">x ≈ 1.03</span>.<br>(c) Yes: <span class="chem">f'</span> has a local minimum there, so <span class="chem">f''</span> is zero and changes sign.</p>
      answer: "<p>(a) <span class=\"chem\">x = 0</span>: 극대; <span class=\"chem\">x ≈ 1.93</span>: 극소.<br>(b) <span class=\"chem\">x ≈ 1.03</span>.<br>(c) 예: 그곳에서 <span class=\"chem\">f'</span>이 극솟값을 가지므로 <span class=\"chem\">f''</span>은 0이고 부호가 바뀜.</p>",
      markscheme: [
        // EN: M1: Solves <span class="chem">x^2 - 4 sin x = 0</span> on the GDC.
        "M1: GDC로 <span class=\"chem\">x^2 - 4 sin x = 0</span>를 풂.",
        // EN: A1: <span class="chem">x = 0</span> and <span class="chem">x = 1.93</span> (<span class="chem">1.93375…</span>).
        "A1: <span class=\"chem\">x = 0</span>과 <span class=\"chem\">x = 1.93</span> (<span class=\"chem\">1.93375…</span>).",
        // EN: R1: <span class="chem">f'</span> changes from positive to negative at <span class="chem">x = 0</span>, so a local maximum.
        "R1: <span class=\"chem\">f'</span>은 <span class=\"chem\">x = 0</span>에서 양에서 음으로 바뀌므로 극대.",
        // EN: R1: <span class="chem">f'</span> changes from negative to positive at <span class="chem">x = 1.93</span>, so a local minimum.
        "R1: <span class=\"chem\">f'</span>은 <span class=\"chem\">x = 1.93</span>에서 음에서 양으로 바뀌므로 극소.",
        // EN: M1: Recognises that “decreasing most rapidly” means the minimum of <span class="chem">f'(x)</span>.
        "M1: “가장 빠르게 감소”가 <span class=\"chem\">f'(x)</span>의 최솟값임을 인식함.",
        // EN: A1: <span class="chem">x = 1.03</span> (<span class="chem">1.02987…</span>, where <span class="chem">f'(x) ≈ -2.37</span>).
        "A1: <span class=\"chem\">x = 1.03</span> (<span class=\"chem\">1.02987…</span>, 이때 <span class=\"chem\">f'(x) ≈ -2.37</span>).",
        // EN: R1: Checks the endpoints: <span class="chem">f'(-2) ≈ 7.64</span> and <span class="chem">f'(3) ≈ 8.44</span> are positive, so the minimum of <span class="chem">f'</span> is at the turning point.
        "R1: 끝점을 확인함: <span class=\"chem\">f'(-2) ≈ 7.64</span>, <span class=\"chem\">f'(3) ≈ 8.44</span>는 양수이므로 <span class=\"chem\">f'</span>의 최솟값은 극점에 있음.",
        // EN: R1: Yes: <span class="chem">f''(x) = 2x - 4 cos x</span> is zero at <span class="chem">x ≈ 1.03</span> and changes sign (from negative to positive), so it is a (non-stationary) point of inflexion.
        "R1: 예: <span class=\"chem\">f''(x) = 2x - 4 cos x</span>는 <span class=\"chem\">x ≈ 1.03</span>에서 0이고 부호가 바뀌므로 (음에서 양으로) (비정류) 변곡점임.",
      ],
    },

  }
});
