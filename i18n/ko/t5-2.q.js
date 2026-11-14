/* t5-2.q — ko question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't5-2.q', {
  questions: {

    // ── t5-2-q001 · mcq · foundation · SL · SL 5.10 · 3 marks
    "t5-2-q001": {
      // EN: <p>Find <span class="chem">int (6x^2 - 4e^{2x} + cos(3x)) dx</span>.</p>
      stem: "<p><span class=\"chem\">int (6x^2 - 4e^{2x} + cos(3x)) dx</span>를 구하시오 (Find).</p>",
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
        "<span class=\"chem\">int x^n dx = x^{n+1}/(n+1)</span>, <span class=\"chem\">int e^{ax} dx = (1/a)e^{ax}</span>, <span class=\"chem\">int cos(ax) dx = (1/a)sin(ax)</span>를 써서 항별로 적분하세요.",
        // EN: Check the sign of <span class="chem">int cos(3x) dx</span> by differentiating your answer: <span class="chem">d/dx ((1/3) sin(3x)) = +cos(3x)</span>.
        "답을 미분해 <span class=\"chem\">int cos(3x) dx</span>의 부호를 확인하세요: <span class=\"chem\">d/dx ((1/3) sin(3x)) = +cos(3x)</span>.",
      ],
      // EN: <p>Integrating term by term: <span class="chem">int 6x^2 dx = 6(x^3/3) = 2x^3</span>, <span class="chem">int (-4e^{2x}) dx = -(4/2)e^{2x} = -2e^{2x}</span>, and <span class="chem">int cos(3x) dx = (1/3) sin(3x)</span>. Including the constant of integration gives <span class="chem">2x^3 - 2e^{2x} + (1/3) sin(3x) + C</span>.</p>
      solution: "<p>항별로 적분하면 <span class=\"chem\">int 6x^2 dx = 6(x^3/3) = 2x^3</span>, <span class=\"chem\">int (-4e^{2x}) dx = -(4/2)e^{2x} = -2e^{2x}</span>, <span class=\"chem\">int cos(3x) dx = (1/3) sin(3x)</span>예요. 적분상수를 포함하면 <span class=\"chem\">2x^3 - 2e^{2x} + (1/3) sin(3x) + C</span>예요.</p>",
      misconception: {
        // EN (option B): You multiplied by the inner coefficients (2 and 3) instead of dividing by them, and also flipped the sign of the cosine integral.
        "1": "속함수의 계수(2와 3)로 나누는 대신 곱했고, 코사인 적분의 부호도 반대로 썼어요.",
        // EN (option C): The integral of cos(kx) is +(1/k) sin(kx) + C, not −(1/k) sin(kx) + C (it is sin(kx) that integrates to −(1/k) cos(kx)).
        "2": "cos(kx)의 적분은 −(1/k) sin(kx) + C가 아니라 +(1/k) sin(kx) + C예요 (적분해서 −(1/k) cos(kx)가 되는 것은 sin(kx)예요).",
        // EN (option D): You differentiated 6x² to get 12x instead of integrating 6x² to get 2x³.
        "3": "6x²을 적분해 2x³을 얻는 대신 6x²을 미분해 12x를 얻었어요.",
      },
    },

    // ── t5-2-q002 · numeric · foundation · SL · SL 5.5 · 5 marks
    "t5-2-q002": {
      // EN: <p>A curve <span class="chem">y = f(x)</span> (<span class="chem">x &gt; 0</span>) has gradient <span class="chem">f'(x) = 3x^2 - 4 / x^2</span> and passes through the point <span class="chem">(1, 7)</span>. Find the value of <span class="chem">f(2)</span>.</p>
      stem: "<p>곡선 <span class=\"chem\">y = f(x)</span> (<span class=\"chem\">x &gt; 0</span>)의 기울기가 <span class=\"chem\">f'(x) = 3x^2 - 4 / x^2</span>이고 점 <span class=\"chem\">(1, 7)</span>을 지나요. <span class=\"chem\">f(2)</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Rewrite <span class="chem">-4 / x^2</span> as <span class="chem">-4x^{-2}</span> before integrating.
        "적분하기 전에 <span class=\"chem\">-4 / x^2</span>를 <span class=\"chem\">-4x^{-2}</span>로 고쳐 쓰세요.",
        // EN: Find <span class="chem">f(x) = x^3 + 4/x + C</span>, use <span class="chem">f(1) = 7</span> to solve for <span class="chem">C</span>, then evaluate <span class="chem">f(2)</span>.
        "<span class=\"chem\">f(x) = x^3 + 4/x + C</span>를 구한 뒤 <span class=\"chem\">f(1) = 7</span>로 <span class=\"chem\">C</span>를 구하고 <span class=\"chem\">f(2)</span>를 계산하세요.",
      ],
      // EN: <p>Rewrite <span class="chem">f'(x) = 3x^2 - 4x^{-2}</span>. Integrating gives <span class="chem">f(x) = x^3 - 4(x^{-1}/(-1)) + C = x^3 + 4/x + C</span>. Using <span class="chem">f(1) = 7</span>: <span class="chem">1^3 + 4/1 + C = 7 =&gt; C = 2</span>. Therefore <span class="chem">f(2) = 2^3 + 4/2 + 2 = 8 + 2 + 2 = 12</span>.</p>
      solution: "<p><span class=\"chem\">f'(x) = 3x^2 - 4x^{-2}</span>로 고쳐 쓰면 <span class=\"chem\">f(x) = x^3 - 4(x^{-1}/(-1)) + C = x^3 + 4/x + C</span>예요. <span class=\"chem\">f(1) = 7</span>을 쓰면 <span class=\"chem\">1^3 + 4/1 + C = 7 =&gt; C = 2</span>예요. 따라서 <span class=\"chem\">f(2) = 2^3 + 4/2 + 2 = 8 + 2 + 2 = 12</span>예요.</p>",
    },

    // ── t5-2-q003 · mcq · foundation · SL · SL 5.10 · 2 marks
    "t5-2-q003": {
      // EN: <p>Find <span class="chem">int (8x / (2x^2 + 3)) dx</span>.</p>
      stem: "<p><span class=\"chem\">int (8x / (2x^2 + 3)) dx</span>를 구하시오 (Find).</p>",
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
        "<span class=\"chem\">u = 2x^2 + 3</span>으로 놓으면 <span class=\"chem\">du = 4x dx</span>예요.",
        // EN: Rewrite <span class="chem">8x dx</span> as <span class="chem">2(4x dx) = 2 du</span> and integrate <span class="chem">int (2/u) du</span>.
        "<span class=\"chem\">8x dx</span>를 <span class=\"chem\">2(4x dx) = 2 du</span>로 고쳐 쓰고 <span class=\"chem\">int (2/u) du</span>를 적분하세요.",
      ],
      // EN: <p>Let <span class="chem">u = 2x^2 + 3</span>, so <span class="chem">du = 4x dx</span>. Since <span class="chem">8x dx = 2 du</span>, the integral becomes <span class="chem">int (2/u) du = 2 ln|u| + C = 2 ln(2x^2 + 3) + C</span> (since <span class="chem">2x^2 + 3 &gt; 0</span>).</p>
      solution: "<p><span class=\"chem\">u = 2x^2 + 3</span>으로 놓으면 <span class=\"chem\">du = 4x dx</span>예요. <span class=\"chem\">8x dx = 2 du</span>이므로 적분은 <span class=\"chem\">int (2/u) du = 2 ln|u| + C = 2 ln(2x^2 + 3) + C</span>가 돼요 (<span class=\"chem\">2x^2 + 3 &gt; 0</span>이므로).</p>",
      misconception: {
        // EN (option B): The derivative of the denominator 2x² + 3 is 4x, not 8x, so 8x = 2(4x) gives 2 ln(2x² + 3), not 8 ln(2x² + 3).
        "1": "분모 2x² + 3의 도함수는 8x가 아니라 4x이므로 8x = 2(4x)에서 8 ln(2x² + 3)이 아니라 2 ln(2x² + 3)이 돼요.",
        // EN (option C): You cannot integrate the numerator 8x while leaving the denominator unchanged.
        "2": "분모는 그대로 두고 분자 8x만 따로 적분할 수는 없어요.",
        // EN (option D): You used a power-rule form instead of recognizing the g'(x)/g(x) logarithmic pattern.
        "3": "g'(x)/g(x) 로그 패턴을 알아보지 못하고 거듭제곱 적분 꼴을 썼어요.",
      },
    },

    // ── t5-2-q004 · numeric · foundation · SL · SL 5.10, 5.11 · 3 marks
    "t5-2-q004": {
      // EN: <p>Evaluate the definite integral <span class="chem">int_0^{ln 3} 6e^{2x} dx</span>.</p>
      stem: "<p>정적분 <span class=\"chem\">int_0^{ln 3} 6e^{2x} dx</span>의 값을 구하시오 (Evaluate).</p>",
      hints: [
        // EN: An antiderivative of <span class="chem">6e^{2x}</span> is <span class="chem">(6/2)e^{2x} = 3e^{2x}</span>.
        "<span class=\"chem\">6e^{2x}</span>의 원시함수는 <span class=\"chem\">(6/2)e^{2x} = 3e^{2x}</span>예요.",
        // EN: Recall that <span class="chem">e^{2 ln 3} = e^{ln(3^2)} = 9</span> and <span class="chem">e^0 = 1</span>.
        "<span class=\"chem\">e^{2 ln 3} = e^{ln(3^2)} = 9</span>이고 <span class=\"chem\">e^0 = 1</span>임을 기억하세요.",
      ],
      // EN: <p><span class="chem">int_0^{ln 3} 6e^{2x} dx = [3e^{2x}]_0^{ln 3} = 3e^{2 ln 3} - 3e^0 = 3(9) - 3(1) = 27 - 3 = 24</span>.</p>
      solution: "<p><span class=\"chem\">int_0^{ln 3} 6e^{2x} dx = [3e^{2x}]_0^{ln 3} = 3e^{2 ln 3} - 3e^0 = 3(9) - 3(1) = 27 - 3 = 24</span>이에요.</p>",
    },

    // ── t5-2-q005 · numeric · exam · SL · SL 5.11 · 5 marks
    "t5-2-q005": {
      // EN: <p>Given that <span class="chem">int_1^5 f(x) dx = 14</span> and <span class="chem">int_3^5 f(x) dx = 6</span>, find the value of <span class="chem">int_1^3 (3f(x) + 2) dx</span>.</p>
      stem: "<p><span class=\"chem\">int_1^5 f(x) dx = 14</span>이고 <span class=\"chem\">int_3^5 f(x) dx = 6</span>일 때, <span class=\"chem\">int_1^3 (3f(x) + 2) dx</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Use additivity <span class="chem">int_1^3 f(x) dx + int_3^5 f(x) dx = int_1^5 f(x) dx</span> to find <span class="chem">int_1^3 f(x) dx</span>.
        "덧셈 성질 <span class=\"chem\">int_1^3 f(x) dx + int_3^5 f(x) dx = int_1^5 f(x) dx</span>를 써서 <span class=\"chem\">int_1^3 f(x) dx</span>를 구하세요.",
        // EN: Split the target integral: <span class="chem">3 int_1^3 f(x) dx + int_1^3 2 dx</span>, remembering <span class="chem">int_1^3 2 dx = 2(3 - 1)</span>.
        "구하는 적분을 <span class=\"chem\">3 int_1^3 f(x) dx + int_1^3 2 dx</span>로 나누고 <span class=\"chem\">int_1^3 2 dx = 2(3 - 1)</span>임을 기억하세요.",
      ],
      // EN: <p>By additivity, <span class="chem">int_1^3 f(x) dx = int_1^5 f(x) dx - int_3^5 f(x) dx = 14 - 6 = 8</span>. By linearity, <span class="chem">int_1^3 (3f(x) + 2) dx = 3 int_1^3 f(x) dx + int_1^3 2 dx = 3(8) + 2(3 - 1) = 24 + 4 = 28</span>.</p>
      solution: "<p>덧셈 성질에 의해 <span class=\"chem\">int_1^3 f(x) dx = int_1^5 f(x) dx - int_3^5 f(x) dx = 14 - 6 = 8</span>이에요. 선형성에 의해 <span class=\"chem\">int_1^3 (3f(x) + 2) dx = 3 int_1^3 f(x) dx + int_1^3 2 dx = 3(8) + 2(3 - 1) = 24 + 4 = 28</span>이에요.</p>",
    },

    // ── t5-2-q006 · mcq · exam · SL · SL 5.10, 5.11 · 5 marks
    "t5-2-q006": {
      // EN: <p>Evaluate <span class="chem">int_1^e ((ln x)^2 / x) dx</span>.</p>
      stem: "<p><span class=\"chem\">int_1^e ((ln x)^2 / x) dx</span>의 값을 구하시오 (Evaluate).</p>",
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
        "<span class=\"chem\">u = ln x</span>로 놓으면 <span class=\"chem\">du = (1/x) dx</span>예요.",
        // EN: Change the limits: when <span class="chem">x = 1</span>, <span class="chem">u = ln 1 = 0</span>; when <span class="chem">x = e</span>, <span class="chem">u = ln e = 1</span>.
        "적분 구간을 바꾸세요: <span class=\"chem\">x = 1</span>일 때 <span class=\"chem\">u = ln 1 = 0</span>, <span class=\"chem\">x = e</span>일 때 <span class=\"chem\">u = ln e = 1</span>이에요.",
      ],
      // EN: <p>Let <span class="chem">u = ln x</span>, so <span class="chem">du = (1/x) dx</span>. The limits become <span class="chem">u = 0</span> to <span class="chem">u = 1</span>. Thus <span class="chem">int_0^1 u^2 du = [u^3 / 3]_0^1 = 1/3 - 0 = 1/3</span>.</p>
      solution: "<p><span class=\"chem\">u = ln x</span>로 놓으면 <span class=\"chem\">du = (1/x) dx</span>이고 적분 구간은 <span class=\"chem\">u = 0</span>에서 <span class=\"chem\">u = 1</span>이 돼요. 따라서 <span class=\"chem\">int_0^1 u^2 du = [u^3 / 3]_0^1 = 1/3 - 0 = 1/3</span>이에요.</p>",
      misconception: {
        // EN (option B): You forgot to divide by the new exponent 3 when integrating u² du = u³/3.
        "1": "u² du = u³/3으로 적분할 때 새 지수 3으로 나누는 것을 빠뜨렸어요.",
        // EN (option C): After substituting u = ln x, the limits change to u(1) = ln 1 = 0 and u(e) = ln e = 1; there is no e⁻¹ term.
        "2": "u = ln x로 치환하면 적분 구간이 u(1) = ln 1 = 0과 u(e) = ln e = 1로 바뀌므로 e⁻¹ 항은 나오지 않아요.",
        // EN (option D): You differentiated (ln x)²/x instead of integrating it.
        "3": "(ln x)²/x를 적분하는 대신 미분했어요.",
      },
    },

    // ── t5-2-q007 · multi · exam · SL · SL 5.11 · 5 marks
    "t5-2-q007": {
      // EN: <p>A continuous function <span class="chem">y = f(x)</span> satisfies <span class="chem">f(x) &gt;= 0</span> on <span class="chem">[0, 2]</span> and <span class="chem">f(x) &lt;= 0</span> on <span class="chem">[2, 5]</span>. The geometric area between the curve and the <span class="chem">x</span>-axis on <span class="chem">[0, 2]</span> is <span class="chem">5</span>, and the geometric area between the curve and the <span class="chem">x</span>-axis on <span class="chem">[2, 5]</span> is <span class="chem">8</span>. Select <strong>all</strong> true statements.</p>
      stem: "<p>연속함수 <span class=\"chem\">y = f(x)</span>가 <span class=\"chem\">[0, 2]</span>에서 <span class=\"chem\">f(x) &gt;= 0</span>이고 <span class=\"chem\">[2, 5]</span>에서 <span class=\"chem\">f(x) &lt;= 0</span>이에요. <span class=\"chem\">[0, 2]</span>에서 곡선과 <span class=\"chem\">x</span>축 사이의 기하학적 넓이가 <span class=\"chem\">5</span>이고 <span class=\"chem\">[2, 5]</span>에서 곡선과 <span class=\"chem\">x</span>축 사이의 기하학적 넓이가 <span class=\"chem\">8</span>일 때, 옳은 설명을 <strong>모두</strong> 고르시오.</p>",
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
        "<span class=\"chem\">[2, 5]</span>에서 <span class=\"chem\">f(x) &lt;= 0</span>이므로 <span class=\"chem\">int_2^5 f(x) dx = -8</span>이에요.",
        // EN: Reversing the limits of integration flips the sign: <span class="chem">int_5^2 f(x) dx = -int_2^5 f(x) dx</span>.
        "적분의 아래끝과 위끝을 바꾸면 부호가 반대로 바뀌어요: <span class=\"chem\">int_5^2 f(x) dx = -int_2^5 f(x) dx</span>.",
      ],
      // EN: <p>Since <span class="chem">f(x) &gt;= 0</span> on <span class="chem">[0, 2]</span>, <span class="chem">int_0^2 f(x) dx = +5</span>. Since <span class="chem">f(x) &lt;= 0</span> on <span class="chem">[2, 5]</span>, <span class="chem">int_2^5 f(x) dx = -8</span>. Therefore <span class="chem">int_0^5 f(x) dx = 5 + (-8) = -3</span>, <span class="chem">int_0^5 |f(x)| dx = 5 + 8 = 13</span>, and <span class="chem">int_5^2 f(x) dx = -int_2^5 f(x) dx = -(-8) = 8</span>.</p>
      solution: "<p><span class=\"chem\">[0, 2]</span>에서 <span class=\"chem\">f(x) &gt;= 0</span>이므로 <span class=\"chem\">int_0^2 f(x) dx = +5</span>이고, <span class=\"chem\">[2, 5]</span>에서 <span class=\"chem\">f(x) &lt;= 0</span>이므로 <span class=\"chem\">int_2^5 f(x) dx = -8</span>이에요. 따라서 <span class=\"chem\">int_0^5 f(x) dx = 5 + (-8) = -3</span>, <span class=\"chem\">int_0^5 |f(x)| dx = 5 + 8 = 13</span>, <span class=\"chem\">int_5^2 f(x) dx = -int_2^5 f(x) dx = -(-8) = 8</span>이에요.</p>",
      misconception: {
        // EN (option D): 13 is the total geometric area ∫ |f(x)| dx. Because f(x) ≤ 0 on [2, 5], that region contributes −8 to the signed integral ∫ f(x) dx, giving 5 − 8 = −3.
        "3": "13은 전체 기하학적 넓이 ∫ |f(x)| dx예요. [2, 5]에서 f(x) ≤ 0이므로 부호 있는 적분 ∫ f(x) dx에는 −8로 더해져 5 − 8 = −3이 돼요.",
      },
    },

    // ── t5-2-q008 · numeric · exam · SL · SL 5.11 · 6 marks
    "t5-2-q008": {
      // EN: <p>Find the total geometric area enclosed between the curve <span class="chem">y = 3x^2 - 6x</span>, the <span class="chem">x</span>-axis, and the vertical lines <span class="chem">x = 0</span> and <span class="chem">x = 3</span>.</p>
      stem: "<p>곡선 <span class=\"chem\">y = 3x^2 - 6x</span>, <span class=\"chem\">x</span>축, 그리고 두 직선 <span class=\"chem\">x = 0</span>과 <span class=\"chem\">x = 3</span>으로 둘러싸인 총 기하학적 넓이를 구하시오 (Find).</p>",
      hints: [
        // EN: First solve <span class="chem">3x^2 - 6x = 0</span> to see where the curve crosses the <span class="chem">x</span>-axis inside <span class="chem">[0, 3]</span>.
        "먼저 <span class=\"chem\">3x^2 - 6x = 0</span>을 풀어 <span class=\"chem\">[0, 3]</span> 안에서 곡선이 <span class=\"chem\">x</span>축과 만나는 점을 찾으세요.",
        // EN: The curve is below the <span class="chem">x</span>-axis on <span class="chem">[0, 2]</span> and above it on <span class="chem">[2, 3]</span>, so compute <span class="chem">|int_0^2 (3x^2 - 6x) dx| + int_2^3 (3x^2 - 6x) dx</span>.
        "곡선은 <span class=\"chem\">[0, 2]</span>에서 <span class=\"chem\">x</span>축 아래에, <span class=\"chem\">[2, 3]</span>에서 그 위에 있으므로 <span class=\"chem\">|int_0^2 (3x^2 - 6x) dx| + int_2^3 (3x^2 - 6x) dx</span>를 계산하세요.",
      ],
      // EN: <p>Setting <span class="chem">3x(x - 2) = 0</span> gives <span class="chem">x = 0</span> and <span class="chem">x = 2</span>. On <span class="chem">[0, 2]</span>, <span class="chem">y &lt;= 0</span>: <span class="chem">int_0^2 (3x^2 - 6x) dx = [x^3 - 3x^2]_0^2 = 8 - 12 = -4</span>, giving area <span class="chem">4</span>. On <span class="chem">[2, 3]</span>, <span class="chem">y &gt;= 0</span>: <span class="chem">[x^3 - 3x^2]_2^3 = (27 - 27) - (8 - 12) = 4</span>. Total enclosed area <span class="chem">= 4 + 4 = 8</span>.</p>
      solution: "<p><span class=\"chem\">3x(x - 2) = 0</span>으로 놓으면 <span class=\"chem\">x = 0</span>과 <span class=\"chem\">x = 2</span>예요. <span class=\"chem\">[0, 2]</span>에서 <span class=\"chem\">y &lt;= 0</span>이므로 <span class=\"chem\">int_0^2 (3x^2 - 6x) dx = [x^3 - 3x^2]_0^2 = 8 - 12 = -4</span>, 넓이는 <span class=\"chem\">4</span>예요. <span class=\"chem\">[2, 3]</span>에서 <span class=\"chem\">y &gt;= 0</span>이므로 <span class=\"chem\">[x^3 - 3x^2]_2^3 = (27 - 27) - (8 - 12) = 4</span>예요. 총 넓이 <span class=\"chem\">= 4 + 4 = 8</span>이에요.</p>",
    },

    // ── t5-2-q009 · numeric · exam · SL · SL 5.11 · 6 marks
    "t5-2-q009": {
      // EN: <p>Find the exact area of the finite region enclosed between the parabola <span class="chem">y = 8 - x^2</span> and the line <span class="chem">y = 2x</span>.</p>
      stem: "<p>포물선 <span class=\"chem\">y = 8 - x^2</span>와 직선 <span class=\"chem\">y = 2x</span>로 둘러싸인 유한 영역의 정확한 넓이를 구하시오 (Find).</p>",
      hints: [
        // EN: Solve <span class="chem">8 - x^2 = 2x</span> to find the intersection <span class="chem">x</span>-coordinates.
        "<span class=\"chem\">8 - x^2 = 2x</span>를 풀어 교점의 <span class=\"chem\">x</span>좌표를 구하세요.",
        // EN: On <span class="chem">[-4, 2]</span>, <span class="chem">8 - x^2 &gt;= 2x</span>, so evaluate <span class="chem">int_{-4}^2 (8 - 2x - x^2) dx</span>.
        "<span class=\"chem\">[-4, 2]</span>에서 <span class=\"chem\">8 - x^2 &gt;= 2x</span>이므로 <span class=\"chem\">int_{-4}^2 (8 - 2x - x^2) dx</span>를 계산하세요.",
      ],
      // EN: <p>Equating the curves: <span class="chem">x^2 + 2x - 8 = 0 =&gt; (x + 4)(x - 2) = 0</span>, so <span class="chem">x = -4</span> and <span class="chem">x = 2</span>. Since <span class="chem">8 - x^2 &gt;= 2x</span> on <span class="chem">[-4, 2]</span>, the area is <span class="chem">int_{-4}^2 (8 - 2x - x^2) dx = [8x - x^2 - x^3/3]_{-4}^2 = (16 - 4 - 8/3) - (-32 - 16 + 64/3) = (12 - 8/3) - (-48 + 64/3) = 60 - 72/3 = 36</span>.</p>
      solution: "<p>두 식을 같다고 놓으면 <span class=\"chem\">x^2 + 2x - 8 = 0 =&gt; (x + 4)(x - 2) = 0</span>이므로 <span class=\"chem\">x = -4</span>, <span class=\"chem\">x = 2</span>예요. <span class=\"chem\">[-4, 2]</span>에서 <span class=\"chem\">8 - x^2 &gt;= 2x</span>이므로 넓이는 <span class=\"chem\">int_{-4}^2 (8 - 2x - x^2) dx = [8x - x^2 - x^3/3]_{-4}^2 = (16 - 4 - 8/3) - (-32 - 16 + 64/3) = (12 - 8/3) - (-48 + 64/3) = 60 - 72/3 = 36</span>이에요.</p>",
    },

    // ── t5-2-q010 · order · exam · SL · SL 5.9 · 4 marks
    "t5-2-q010": {
      // EN: <p>Arrange the steps in the correct logical order to find the total distance travelled by a particle with velocity <span class="chem">v(t) = 6t - 12</span> <span class="unit">m s-1</span> over the time interval <span class="chem">0 &lt;= t &lt;= 5</span>.</p>
      stem: "<p>속도가 <span class=\"chem\">v(t) = 6t - 12</span> <span class=\"unit\">m s-1</span>인 입자가 시간 구간 <span class=\"chem\">0 &lt;= t &lt;= 5</span> 동안 움직인 총 이동 거리를 구하는 단계를 올바른 논리적 순서로 배열하시오.</p>",
      options: [
        // EN: Solve <span class="chem">v(t) = 6t - 12 = 0</span> to find the turning time <span class="chem">t = 2</span> <span class="unit">s</span> inside <span class="chem">(0, 5)</span>.
        "<span class=\"chem\">v(t) = 6t - 12 = 0</span>을 풀어 <span class=\"chem\">(0, 5)</span> 안의 방향 전환 시각 <span class=\"chem\">t = 2</span> <span class=\"unit\">s</span>를 찾는다.",
        // EN: Split the total distance integral at <span class="chem">t = 2</span>: <span class="chem">d = |int_0^2 (6t - 12) dt| + |int_2^5 (6t - 12) dt|</span>.
        "<span class=\"chem\">t = 2</span>에서 총 이동 거리 적분을 나눈다: <span class=\"chem\">d = |int_0^2 (6t - 12) dt| + |int_2^5 (6t - 12) dt|</span>.",
        // EN: Evaluate each definite integral using <span class="chem">[3t^2 - 12t]</span> to get <span class="chem">-12</span> on <span class="chem">[0, 2]</span> and <span class="chem">+27</span> on <span class="chem">[2, 5]</span>.
        "<span class=\"chem\">[3t^2 - 12t]</span>를 이용해 각 정적분을 계산하면 <span class=\"chem\">[0, 2]</span>에서 <span class=\"chem\">-12</span>, <span class=\"chem\">[2, 5]</span>에서 <span class=\"chem\">+27</span>을 얻는다.",
        // EN: Sum the absolute values of both legs to obtain total distance <span class="chem">d = |-12| + 27 = 39</span> <span class="unit">m</span>.
        "두 구간의 절댓값을 더해 총 이동 거리 <span class=\"chem\">d = |-12| + 27 = 39</span> <span class=\"unit\">m</span>를 얻는다.",
      ],
      hints: [
        // EN: Before integrating for distance, you must check whether <span class="chem">v(t)</span> changes sign inside <span class="chem">(0, 5)</span>.
        "이동 거리를 적분하기 전에 먼저 <span class=\"chem\">(0, 5)</span> 안에서 <span class=\"chem\">v(t)</span>의 부호가 바뀌는지 확인해야 해요.",
        // EN: Once you split at <span class="chem">t = 2</span>, compute the signed integral of each leg and take absolute values at the end.
        "<span class=\"chem\">t = 2</span>에서 나눈 뒤 각 구간의 정적분을 계산하고 마지막에 절댓값을 취하세요.",
      ],
      // EN: <p>To find total distance on Paper 1: (1) solve <span class="chem">v(t) = 0</span> to locate turning times, (2) split <span class="chem">int_0^5 |v(t)| dt</span> at <span class="chem">t = 2</span>, (3) evaluate each sub-integral, and (4) sum their absolute values: <span class="chem">12 + 27 = 39</span> <span class="unit">m</span>.</p>
      solution: "<p>Paper 1에서 총 이동 거리를 구하려면 (1) <span class=\"chem\">v(t) = 0</span>을 풀어 방향 전환 시각을 찾고, (2) <span class=\"chem\">t = 2</span>에서 <span class=\"chem\">int_0^5 |v(t)| dt</span>를 나눈 뒤, (3) 각 구간 정적분을 계산해 (4) 절댓값을 더해요: <span class=\"chem\">12 + 27 = 39</span> <span class=\"unit\">m</span>.</p>",
    },

    // ── t5-2-q011 · numeric · exam · SL · SL 5.9, 5.11 · 5 marks
    "t5-2-q011": {
      // EN: <p>A particle moves along a straight line with velocity <span class="chem">v(t) = 4 sin(t) - t + 1</span> <span class="unit">m s-1</span> for <span class="chem">0 &lt;= t &lt;= 4</span> (where <span class="chem">t</span> is in seconds). Using your GDC, calculate the <strong>total distance travelled</strong> by the particle from <span class="chem">t = 0</span> to <span class="chem">t = 4</span>, correct to 3 significant figures.</p>
      stem: "<p>한 입자가 <span class=\"chem\">0 &lt;= t &lt;= 4</span> (<span class=\"chem\">t</span>는 초 단위)에서 속도 <span class=\"chem\">v(t) = 4 sin(t) - t + 1</span> <span class=\"unit\">m s-1</span>로 직선 위를 움직여요. GDC를 이용해 <span class=\"chem\">t = 0</span>에서 <span class=\"chem\">t = 4</span>까지 입자가 움직인 <strong>총 이동 거리</strong>를 유효숫자 3자리로 계산하시오 (calculate).</p>",
      hints: [
        // EN: Total distance travelled is <span class="chem">d = int_0^4 |v(t)| dt</span>, not <span class="chem">int_0^4 v(t) dt</span>.
        "총 이동 거리는 <span class=\"chem\">int_0^4 v(t) dt</span>가 아니라 <span class=\"chem\">d = int_0^4 |v(t)| dt</span>예요.",
        // EN: Make sure your GDC is in <strong>radian mode</strong> and enter <span class="mono">fnInt(abs(4*sin(t) - t + 1), t, 0, 4)</span>.
        "GDC가 <strong>라디안(radian) 모드</strong>인지 확인하고 <span class=\"mono\">fnInt(abs(4*sin(t) - t + 1), t, 0, 4)</span>를 입력하세요.",
      ],
      // EN: <p>In radian mode on a GDC, <span class="chem">d = int_0^4 |4 sin(t) - t + 1| dt ≈ 10.728...</span>, which rounds to <span class="chem">10.7</span> <span class="unit">m</span> (3 s.f.). (Note: the net displacement is only <span class="chem">int_0^4 v(t) dt ≈ 2.61</span> <span class="unit">m</span> because <span class="chem">v(t)</span> turns negative around <span class="chem">t ≈ 2.70</span> <span class="unit">s</span>.)</p>
      solution: "<p>GDC 라디안 모드에서 <span class=\"chem\">d = int_0^4 |4 sin(t) - t + 1| dt ≈ 10.728...</span>이므로 유효숫자 3자리로 <span class=\"chem\">10.7</span> <span class=\"unit\">m</span>예요. (참고: <span class=\"chem\">t ≈ 2.70</span> <span class=\"unit\">s</span> 부근에서 <span class=\"chem\">v(t)</span>가 음수로 바뀌므로 알짜 변위는 <span class=\"chem\">int_0^4 v(t) dt ≈ 2.61</span> <span class=\"unit\">m</span>뿐이에요.)</p>",
    },

    // ── t5-2-q012 · mcq · exam · SL · SL 5.9 · 5 marks
    "t5-2-q012": {
      // EN: <p>A particle moves along a straight line with displacement <span class="chem">s(t) = t^3 - 6t^2 + 9t</span> <span class="unit">m</span> for <span class="chem">t &gt;= 0</span>. During which time intervals is the particle <strong>slowing down</strong>?</p>
      stem: "<p>한 입자가 <span class=\"chem\">t &gt;= 0</span>에서 변위 <span class=\"chem\">s(t) = t^3 - 6t^2 + 9t</span> <span class=\"unit\">m</span>로 직선 위를 움직여요. 입자의 속력이 <strong>줄어들고 있는(slowing down)</strong> 시간 구간은 어디인가요?</p>",
      options: [
        // EN: <span class="chem">0 &lt; t &lt; 1</span> and <span class="chem">2 &lt; t &lt; 3</span>
        "<span class=\"chem\">0 &lt; t &lt; 1</span> 그리고 <span class=\"chem\">2 &lt; t &lt; 3</span>",
        // EN: <span class="chem">0 &lt; t &lt; 2</span> only
        "<span class=\"chem\">0 &lt; t &lt; 2</span>만",
        // EN: <span class="chem">1 &lt; t &lt; 3</span> only
        "<span class=\"chem\">1 &lt; t &lt; 3</span>만",
        // EN: <span class="chem">1 &lt; t &lt; 2</span> and <span class="chem">t &gt; 3</span>
        "<span class=\"chem\">1 &lt; t &lt; 2</span> 그리고 <span class=\"chem\">t &gt; 3</span>",
      ],
      hints: [
        // EN: Find both <span class="chem">v(t) = s'(t) = 3(t - 1)(t - 3)</span> and <span class="chem">a(t) = v'(t) = 6(t - 2)</span>.
        "<span class=\"chem\">v(t) = s'(t) = 3(t - 1)(t - 3)</span>과 <span class=\"chem\">a(t) = v'(t) = 6(t - 2)</span>를 모두 구하세요.",
        // EN: A particle is slowing down when <span class="chem">v(t)</span> and <span class="chem">a(t)</span> have <strong>opposite signs</strong> (<span class="chem">v(t) * a(t) &lt; 0</span>).
        "입자의 속력이 줄어들 때는 <span class=\"chem\">v(t)</span>와 <span class=\"chem\">a(t)</span>가 <strong>반대 부호</strong>(<span class=\"chem\">v(t) * a(t) &lt; 0</span>)일 때예요.",
      ],
      // EN: <p>We have <span class="chem">v(t) = 3t^2 - 12t + 9 = 3(t - 1)(t - 3)</span> and <span class="chem">a(t) = 6t - 12 = 6(t - 2)</span>. Testing the four intervals:<br>• <span class="chem">0 &lt; t &lt; 1</span>: <span class="chem">v &gt; 0, a &lt; 0</span> (opposite signs → slowing down)<br>• <span class="chem">1 &lt; t &lt; 2</span>: <span class="chem">v &lt; 0, a &lt; 0</span> (same sign → speeding up)<br>• <span class="chem">2 &lt; t &lt; 3</span>: <span class="chem">v &lt; 0, a &gt; 0</span> (opposite signs → slowing down)<br>• <span class="chem">t &gt; 3</span>: <span class="chem">v &gt; 0, a &gt; 0</span> (same sign → speeding up)<br>Thus the particle is slowing down for <span class="chem">0 &lt; t &lt; 1</span> and <span class="chem">2 &lt; t &lt; 3</span>.</p>
      solution: "<p><span class=\"chem\">v(t) = 3t^2 - 12t + 9 = 3(t - 1)(t - 3)</span>이고 <span class=\"chem\">a(t) = 6t - 12 = 6(t - 2)</span>예요. 네 구간을 확인하면:<br>• <span class=\"chem\">0 &lt; t &lt; 1</span>: <span class=\"chem\">v &gt; 0, a &lt; 0</span> (반대 부호 → 느려짐)<br>• <span class=\"chem\">1 &lt; t &lt; 2</span>: <span class=\"chem\">v &lt; 0, a &lt; 0</span> (같은 부호 → 빨라짐)<br>• <span class=\"chem\">2 &lt; t &lt; 3</span>: <span class=\"chem\">v &lt; 0, a &gt; 0</span> (반대 부호 → 느려짐)<br>• <span class=\"chem\">t &gt; 3</span>: <span class=\"chem\">v &gt; 0, a &gt; 0</span> (같은 부호 → 빨라짐)<br>따라서 입자가 느려지는 구간은 <span class=\"chem\">0 &lt; t &lt; 1</span>과 <span class=\"chem\">2 &lt; t &lt; 3</span>이에요.</p>",
      misconception: {
        // EN (option B): a(t) = 6(t − 2) < 0 on 0 < t < 2, but negative acceleration only means slowing down when velocity v(t) is positive; on 1 < t < 2 both v(t) and a(t) are negative, so the particle is speeding up!
        "1": "0 < t < 2에서 a(t) = 6(t − 2) < 0이지만, 음의 가속도는 속도 v(t)가 양수일 때만 느려지는 것을 의미해요. 1 < t < 2에서는 v(t)와 a(t)가 모두 음수이므로 오히려 빨라지고 있어요!",
        // EN (option C): v(t) < 0 on 1 < t < 3, which only tells you the particle is moving in the negative direction, not whether it is slowing down.
        "2": "1 < t < 3에서 v(t) < 0이라는 것은 입자가 음의 방향으로 움직인다는 뜻일 뿐, 느려지는지 빨라지는지는 알려주지 않아요.",
        // EN (option D): On 1 < t < 2 (both negative) and t > 3 (both positive), v(t) and a(t) have the same sign, so the particle is speeding up.
        "3": "1 < t < 2 (둘 다 음수)와 t > 3 (둘 다 양수)에서는 v(t)와 a(t)의 부호가 같으므로 입자가 빨라지고 있어요.",
      },
    },

    // ── t5-2-q013 · short · exam · SL · SL 5.6, 5.10, 5.11 · 6 marks
    "t5-2-q013": {
      // EN: <p>(a) Differentiate <span class="chem">F(x) = x e^{2x}</span> with respect to <span class="chem">x</span>. <strong>[2 marks]</strong><br>(b) Hence find <span class="chem">int x e^{2x} dx</span>, and evaluate <span class="chem">int_0^1 x e^{2x} dx</span> in exact form. <strong>[4 marks]</strong></p>
      stem: "<p>(a) <span class=\"chem\">F(x) = x e^{2x}</span>를 <span class=\"chem\">x</span>에 대해 미분하시오 (Differentiate). <strong>[2 marks]</strong><br>(b) 이를 이용하여 (Hence) <span class=\"chem\">int x e^{2x} dx</span>를 구하고, <span class=\"chem\">int_0^1 x e^{2x} dx</span>를 정확한 값으로 계산하시오. <strong>[4 marks]</strong></p>",
      hints: [
        // EN: For part (a), use the product rule with <span class="chem">u = x</span> and <span class="chem">v = e^{2x}</span>.
        "(a)에서는 <span class=\"chem\">u = x</span>, <span class=\"chem\">v = e^{2x}</span>로 두고 곱의 미분법을 쓰세요.",
        // EN: For part (b), “Hence” means integrate both sides of <span class="chem">d/dx(x e^{2x}) = e^{2x} + 2x e^{2x}</span> and isolate <span class="chem">int x e^{2x} dx</span>.
        "(b)에서 “Hence”는 <span class=\"chem\">d/dx(x e^{2x}) = e^{2x} + 2x e^{2x}</span>의 양변을 적분해 <span class=\"chem\">int x e^{2x} dx</span>를 정리하라는 뜻이에요.",
      ],
      // EN: <p>(a) By the product rule, <span class="chem">F'(x) = e^{2x} + 2x e^{2x}</span>.<br>(b) Integrating both sides gives <span class="chem">x e^{2x} = int e^{2x} dx + 2 int x e^{2x} dx = (1/2)e^{2x} + 2 int x e^{2x} dx</span> (up to a constant). Solving for the integral gives <span class="chem">int x e^{2x} dx = (1/2)x e^{2x} - (1/4)e^{2x} + C</span>. Evaluating from <span class="chem">0</span> to <span class="chem">1</span>: <span class="chem">[((2x - 1)/4)e^{2x}]_0^1 = (1/4)e^2 - (-1/4)e^0 = (e^2 + 1)/4</span>.</p>
      solution: "<p>(a) 곱의 미분법에 의해 <span class=\"chem\">F'(x) = e^{2x} + 2x e^{2x}</span>예요.<br>(b) 양변을 적분하면 <span class=\"chem\">x e^{2x} = int e^{2x} dx + 2 int x e^{2x} dx = (1/2)e^{2x} + 2 int x e^{2x} dx</span> (상수 제외)예요. 적분에 대해 풀면 <span class=\"chem\">int x e^{2x} dx = (1/2)x e^{2x} - (1/4)e^{2x} + C</span>예요. <span class=\"chem\">0</span>에서 <span class=\"chem\">1</span>까지 계산하면 <span class=\"chem\">[((2x - 1)/4)e^{2x}]_0^1 = (1/4)e^2 - (-1/4)e^0 = (e^2 + 1)/4</span>예요.</p>",
      // EN: <p>(a) <span class="chem">F'(x) = (2x + 1)e^{2x}</span><br>(b) <span class="chem">int x e^{2x} dx = (1/2)x e^{2x} - (1/4)e^{2x} + C</span>; <span class="chem">int_0^1 x e^{2x} dx = (e^2 + 1) / 4</span></p>
      answer: "<p>(a) <span class=\"chem\">F'(x) = (2x + 1)e^{2x}</span><br>(b) <span class=\"chem\">int x e^{2x} dx = (1/2)x e^{2x} - (1/4)e^{2x} + C</span>; <span class=\"chem\">int_0^1 x e^{2x} dx = (e^2 + 1) / 4</span></p>",
      markscheme: [
        // EN: M1: Apply the product rule with <span class="chem">u = x</span> and <span class="chem">v = e^{2x}</span>.
        "M1: <span class=\"chem\">u = x</span>, <span class=\"chem\">v = e^{2x}</span>로 놓고 곱의 미분법을 적용함.",
        // EN: A1: <span class="chem">F'(x) = 1 * e^{2x} + x(2e^{2x}) = e^{2x} + 2x e^{2x}</span>.
        "A1: <span class=\"chem\">F'(x) = 1 * e^{2x} + x(2e^{2x}) = e^{2x} + 2x e^{2x}</span>.",
        // EN: M1: Integrate both sides of part (a): <span class="chem">x e^{2x} = int e^{2x} dx + 2 int x e^{2x} dx</span>.
        "M1: (a) 식의 양변을 적분함: <span class=\"chem\">x e^{2x} = int e^{2x} dx + 2 int x e^{2x} dx</span>.",
        // EN: A1: Rearrange to obtain <span class="chem">int x e^{2x} dx = (1/2) x e^{2x} - (1/4) e^{2x} + C</span>.
        "A1: 이항하여 <span class=\"chem\">int x e^{2x} dx = (1/2) x e^{2x} - (1/4) e^{2x} + C</span>를 얻음.",
        // EN: M1: Substitute limits <span class="chem">0</span> and <span class="chem">1</span>: <span class="chem">((1/2)e^2 - (1/4)e^2) - (0 - 1/4)</span>.
        "M1: 위끝과 아래끝 <span class=\"chem\">0</span>, <span class=\"chem\">1</span>을 대입함: <span class=\"chem\">((1/2)e^2 - (1/4)e^2) - (0 - 1/4)</span>.",
        // EN: A1: <span class="chem">= (e^2 + 1) / 4</span>.
        "A1: <span class=\"chem\">= (e^2 + 1) / 4</span>.",
      ],
    },

    // ── t5-2-q014 · numeric · challenge · SL · SL 5.5, 5.11 · 6 marks
    "t5-2-q014": {
      // EN: <p>The finite region enclosed between the curve <span class="chem">y = k x (4 - x)</span> (where <span class="chem">k &gt; 0</span>) and the <span class="chem">x</span>-axis has an area of <span class="chem">32</span> square units. Find the value of <span class="chem">k</span>.</p>
      stem: "<p>곡선 <span class=\"chem\">y = k x (4 - x)</span> (<span class=\"chem\">k &gt; 0</span>)와 <span class=\"chem\">x</span>축으로 둘러싸인 유한 영역의 넓이가 <span class=\"chem\">32</span>예요. <span class=\"chem\">k</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: The curve crosses the <span class="chem">x</span>-axis at <span class="chem">x = 0</span> and <span class="chem">x = 4</span>, and lies above the <span class="chem">x</span>-axis on <span class="chem">[0, 4]</span> since <span class="chem">k &gt; 0</span>.
        "곡선은 <span class=\"chem\">x = 0</span>과 <span class=\"chem\">x = 4</span>에서 <span class=\"chem\">x</span>축과 만나며, <span class=\"chem\">k &gt; 0</span>이므로 <span class=\"chem\">[0, 4]</span>에서 <span class=\"chem\">x</span>축 위에 있어요.",
        // EN: Set <span class="chem">k int_0^4 (4x - x^2) dx = 32</span> and solve for <span class="chem">k</span>.
        "<span class=\"chem\">k int_0^4 (4x - x^2) dx = 32</span>로 놓고 <span class=\"chem\">k</span>를 푸세요.",
      ],
      // EN: <p>Since <span class="chem">k &gt; 0</span>, <span class="chem">y &gt;= 0</span> on <span class="chem">[0, 4]</span>. The area is <span class="chem">int_0^4 k(4x - x^2) dx = k[2x^2 - x^3/3]_0^4 = k(32 - 64/3) = (32/3)k</span>. Setting <span class="chem">(32/3)k = 32</span> gives <span class="chem">k = 3</span>.</p>
      solution: "<p><span class=\"chem\">k &gt; 0</span>이므로 <span class=\"chem\">[0, 4]</span>에서 <span class=\"chem\">y &gt;= 0</span>이에요. 넓이는 <span class=\"chem\">int_0^4 k(4x - x^2) dx = k[2x^2 - x^3/3]_0^4 = k(32 - 64/3) = (32/3)k</span>예요. <span class=\"chem\">(32/3)k = 32</span>로 놓으면 <span class=\"chem\">k = 3</span>이에요.</p>",
    },

    // ── t5-2-q015 · mcq · challenge · SL · SL 5.10, 5.11 · 5 marks
    "t5-2-q015": {
      // EN: <p>Given that <span class="chem">int_2^6 f(x) dx = 10</span>, find the value of <span class="chem">int_0^4 (f(x + 2) + 3) dx</span>.</p>
      stem: "<p><span class=\"chem\">int_2^6 f(x) dx = 10</span>일 때, <span class=\"chem\">int_0^4 (f(x + 2) + 3) dx</span>의 값을 구하시오 (Find).</p>",
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
        "적분을 <span class=\"chem\">int_0^4 f(x + 2) dx + int_0^4 3 dx</span>로 나누세요.",
        // EN: For the first integral, substitute <span class="chem">u = x + 2</span> (<span class="chem">du = dx</span>) and update the limits from <span class="chem">x = 0, 4</span> to <span class="chem">u = 2, 6</span>.
        "첫 번째 적분에서 <span class=\"chem\">u = x + 2</span> (<span class=\"chem\">du = dx</span>)로 치환하고 적분 구간을 <span class=\"chem\">x = 0, 4</span>에서 <span class=\"chem\">u = 2, 6</span>으로 바꾸세요.",
      ],
      // EN: <p>Using linearity, <span class="chem">int_0^4 (f(x + 2) + 3) dx = int_0^4 f(x + 2) dx + int_0^4 3 dx</span>. Let <span class="chem">u = x + 2</span> (<span class="chem">du = dx</span>): when <span class="chem">x = 0</span>, <span class="chem">u = 2</span>; when <span class="chem">x = 4</span>, <span class="chem">u = 6</span>. So <span class="chem">int_0^4 f(x + 2) dx = int_2^6 f(u) du = 10</span>. Adding <span class="chem">int_0^4 3 dx = 3(4 - 0) = 12</span> gives <span class="chem">10 + 12 = 22</span>.</p>
      solution: "<p>선형성에 의해 <span class=\"chem\">int_0^4 (f(x + 2) + 3) dx = int_0^4 f(x + 2) dx + int_0^4 3 dx</span>예요. <span class=\"chem\">u = x + 2</span> (<span class=\"chem\">du = dx</span>)로 놓으면 <span class=\"chem\">x = 0</span>일 때 <span class=\"chem\">u = 2</span>, <span class=\"chem\">x = 4</span>일 때 <span class=\"chem\">u = 6</span>이에요. 따라서 <span class=\"chem\">int_0^4 f(x + 2) dx = int_2^6 f(u) du = 10</span>이고, <span class=\"chem\">int_0^4 3 dx = 3(4 - 0) = 12</span>를 더하면 <span class=\"chem\">10 + 12 = 22</span>예요.</p>",
      misconception: {
        // EN (option B): Integrating the constant 3 from 0 to 4 gives 3(4 − 0) = 12, not just 3.
        "1": "0에서 4까지 상수 3을 적분하면 그냥 3이 아니라 3(4 − 0) = 12가 돼요.",
        // EN (option C): Check the limits: ∫₀⁴ 3 dx = 3 × 4 = 12, not 6.
        "2": "적분 구간을 확인하세요: ∫₀⁴ 3 dx = 3 × 4 = 12이지 6이 아니에요.",
        // EN (option D): You cannot ignore the +3 term inside the integrand; ∫₀⁴ (f(x + 2) + 3) dx = ∫₂⁶ f(u) du + ∫₀⁴ 3 dx.
        "3": "피적분함수 안의 +3 항을 무시할 수 없어요. ∫₀⁴ (f(x + 2) + 3) dx = ∫₂⁶ f(u) du + ∫₀⁴ 3 dx예요.",
      },
    },

    // ── t5-2-q016 · numeric · challenge · SL · SL 5.11 · 6 marks
    "t5-2-q016": {
      // EN: <p>Using your GDC, find the area of the finite region enclosed between the curves <span class="chem">y = 4 - x^2</span> and <span class="chem">y = e^{0.5x}</span>, correct to 3 significant figures.</p>
      stem: "<p>GDC를 이용하여 두 곡선 <span class=\"chem\">y = 4 - x^2</span>과 <span class=\"chem\">y = e^{0.5x}</span>로 둘러싸인 유한 영역의 넓이를 유효숫자 3자리로 구하시오 (find).</p>",
      hints: [
        // EN: Graph both curves on your GDC and find the two intersection <span class="chem">x</span>-coordinates: <span class="chem">a ≈ -1.9009</span> and <span class="chem">b ≈ 1.4069</span>.
        "GDC에 두 곡선을 그려 두 교점의 <span class=\"chem\">x</span>좌표를 찾으세요: <span class=\"chem\">a ≈ -1.9009</span>, <span class=\"chem\">b ≈ 1.4069</span>.",
        // EN: Store the exact intersection values (to full GDC precision) and evaluate <span class="chem">int_a^b ((4 - x^2) - e^{0.5x}) dx</span>.
        "교점 값을 GDC의 최대 정밀도로 저장한 뒤 <span class=\"chem\">int_a^b ((4 - x^2) - e^{0.5x}) dx</span>를 계산하세요.",
      ],
      // EN: <p>Solving <span class="chem">4 - x^2 = e^{0.5x}</span> on a GDC gives intersection points at <span class="chem">a ≈ -1.90090</span> and <span class="chem">b ≈ 1.40688</span>. Between these limits, <span class="chem">4 - x^2 &gt;= e^{0.5x}</span>, so <span class="chem">A = int_a^b (4 - x^2 - e^{0.5x}) dx ≈ 6.7451...</span>, which rounds to <span class="chem">6.75</span> (3 s.f.).</p>
      solution: "<p>GDC에서 <span class=\"chem\">4 - x^2 = e^{0.5x}</span>를 풀면 교점은 <span class=\"chem\">a ≈ -1.90090</span>, <span class=\"chem\">b ≈ 1.40688</span>이에요. 이 구간에서 <span class=\"chem\">4 - x^2 &gt;= e^{0.5x}</span>이므로 <span class=\"chem\">A = int_a^b (4 - x^2 - e^{0.5x}) dx ≈ 6.7451...</span>이고, 유효숫자 3자리로 반올림하면 <span class=\"chem\">6.75</span>예요.</p>",
    },

    // ── t5-2-q017 · short · challenge · SL · SL 5.9 · 8 marks
    "t5-2-q017": {
      // EN: <p>A particle starts from rest at <span class="chem">t = 0</span> with initial displacement <span class="chem">s(0) = 2</span> <span class="unit">m</span> from an origin <span class="chem">O</span>, and moves along a straight line with acceleration <span class="chem">a(t) = 6t - 12</span> <span class="unit">m s-2</span> for <span class="chem">t &gt;= 0</span>.<br>(a) Find expressions for the velocity <span class="chem">v(t)</span> and the displacement <span class="chem">s(t)</span>. <strong>[4 marks]</strong><br>(b) Find the total distance travelled by the particle in the first <span class="chem">5</span> seconds (<span class="chem">0 &lt;= t &lt;= 5</span>). <strong>[4 marks]</strong></p>
      stem: "<p>한 입자가 <span class=\"chem\">t = 0</span>에서 원점 <span class=\"chem\">O</span>로부터 초기 변위 <span class=\"chem\">s(0) = 2</span> <span class=\"unit\">m</span>인 위치에서 정지 상태로 출발하여, <span class=\"chem\">t &gt;= 0</span>에서 가속도 <span class=\"chem\">a(t) = 6t - 12</span> <span class=\"unit\">m s-2</span>로 직선 위를 움직인다.<br>(a) 속도 <span class=\"chem\">v(t)</span>와 변위 <span class=\"chem\">s(t)</span>의 식을 구하시오 (Find). <strong>[4 marks]</strong><br>(b) 처음 <span class=\"chem\">5</span>초 (<span class=\"chem\">0 &lt;= t &lt;= 5</span>) 동안 입자가 움직인 총 이동 거리를 구하시오 (Find). <strong>[4 marks]</strong></p>",
      hints: [
        // EN: “Starts from rest” means <span class="chem">v(0) = 0</span>; use this to find the first constant of integration, then use <span class="chem">s(0) = 2</span> for the second.
        "“정지 상태로 출발(starts from rest)”은 <span class=\"chem\">v(0) = 0</span>을 뜻해요. 이것으로 첫 번째 적분상수를 구하고, <span class=\"chem\">s(0) = 2</span>로 두 번째 적분상수를 구하세요.",
        // EN: For part (b), solve <span class="chem">v(t) = 0</span> to find when the particle reverses direction before computing total distance.
        "(b)에서는 총 이동 거리를 구하기 전에 <span class=\"chem\">v(t) = 0</span>을 풀어 입자가 방향을 바꾸는 시각을 찾으세요.",
      ],
      // EN: <p>(a) Integrating <span class="chem">a(t) = 6t - 12</span> gives <span class="chem">v(t) = 3t^2 - 12t + C_1</span>. Since <span class="chem">v(0) = 0</span>, <span class="chem">C_1 = 0</span>, so <span class="chem">v(t) = 3t^2 - 12t</span>. Integrating again gives <span class="chem">s(t) = t^3 - 6t^2 + C_2</span>. Since <span class="chem">s(0) = 2</span>, <span class="chem">C_2 = 2</span>, so <span class="chem">s(t) = t^3 - 6t^2 + 2</span>.<br>(b) Setting <span class="chem">v(t) = 3t(t - 4) = 0</span> gives <span class="chem">t = 0</span> and <span class="chem">t = 4</span> <span class="unit">s</span>. Evaluating position at the endpoints and turning time: <span class="chem">s(0) = 2</span>, <span class="chem">s(4) = 64 - 96 + 2 = -30</span>, and <span class="chem">s(5) = 125 - 150 + 2 = -23</span>. Therefore, total distance <span class="chem">d = |s(4) - s(0)| + |s(5) - s(4)| = |-32| + |7| = 39</span> <span class="unit">m</span>.</p>
      solution: "<p>(a) <span class=\"chem\">a(t) = 6t - 12</span>를 적분하면 <span class=\"chem\">v(t) = 3t^2 - 12t + C_1</span>이에요. <span class=\"chem\">v(0) = 0</span>이므로 <span class=\"chem\">C_1 = 0</span>, 즉 <span class=\"chem\">v(t) = 3t^2 - 12t</span>예요. 다시 적분하면 <span class=\"chem\">s(t) = t^3 - 6t^2 + C_2</span>이고 <span class=\"chem\">s(0) = 2</span>이므로 <span class=\"chem\">C_2 = 2</span>, 즉 <span class=\"chem\">s(t) = t^3 - 6t^2 + 2</span>예요.<br>(b) <span class=\"chem\">v(t) = 3t(t - 4) = 0</span>으로 놓으면 <span class=\"chem\">t = 0</span>과 <span class=\"chem\">t = 4</span> <span class=\"unit\">s</span>예요. 양 끝점과 방향 전환 시각에서의 위치를 구하면 <span class=\"chem\">s(0) = 2</span>, <span class=\"chem\">s(4) = 64 - 96 + 2 = -30</span>, <span class=\"chem\">s(5) = 125 - 150 + 2 = -23</span>이에요. 따라서 총 이동 거리는 <span class=\"chem\">d = |s(4) - s(0)| + |s(5) - s(4)| = |-32| + |7| = 39</span> <span class=\"unit\">m</span>예요.</p>",
      // EN: <p>(a) <span class="chem">v(t) = 3t^2 - 12t</span> <span class="unit">m s-1</span>; <span class="chem">s(t) = t^3 - 6t^2 + 2</span> <span class="unit">m</span><br>(b) <span class="chem">39</span> <span class="unit">m</span></p>
      answer: "<p>(a) <span class=\"chem\">v(t) = 3t^2 - 12t</span> <span class=\"unit\">m s-1</span>; <span class=\"chem\">s(t) = t^3 - 6t^2 + 2</span> <span class=\"unit\">m</span><br>(b) <span class=\"chem\">39</span> <span class=\"unit\">m</span></p>",
      markscheme: [
        // EN: M1: Integrate <span class="chem">a(t)</span> and use <span class="chem">v(0) = 0</span> (“starts from rest”) to find the constant.
        "M1: <span class=\"chem\">a(t)</span>를 적분하고 <span class=\"chem\">v(0) = 0</span> (“정지 상태로 출발”)을 이용해 상수를 구함.",
        // EN: A1: <span class="chem">v(t) = 3t^2 - 12t</span>.
        "A1: <span class=\"chem\">v(t) = 3t^2 - 12t</span>.",
        // EN: M1: Integrate <span class="chem">v(t)</span> and use <span class="chem">s(0) = 2</span> to find the constant.
        "M1: <span class=\"chem\">v(t)</span>를 적분하고 <span class=\"chem\">s(0) = 2</span>를 이용해 상수를 구함.",
        // EN: A1: <span class="chem">s(t) = t^3 - 6t^2 + 2</span>.
        "A1: <span class=\"chem\">s(t) = t^3 - 6t^2 + 2</span>.",
        // EN: M1: Solve <span class="chem">v(t) = 3t(t - 4) = 0</span>.
        "M1: <span class=\"chem\">v(t) = 3t(t - 4) = 0</span>을 풂.",
        // EN: A1: The particle turns at <span class="chem">t = 4</span> <span class="unit">s</span>, which lies in <span class="chem">(0, 5)</span>.
        "A1: 입자는 <span class=\"chem\">t = 4</span> <span class=\"unit\">s</span>에서 방향을 바꾸며, 이 시각은 <span class=\"chem\">(0, 5)</span> 안에 있음.",
        // EN: M1: Evaluate <span class="chem">s(0) = 2</span>, <span class="chem">s(4) = -30</span>, <span class="chem">s(5) = -23</span> (or split the integral at <span class="chem">t = 4</span>).
        "M1: <span class=\"chem\">s(0) = 2</span>, <span class=\"chem\">s(4) = -30</span>, <span class=\"chem\">s(5) = -23</span>을 계산함 (또는 <span class=\"chem\">t = 4</span>에서 적분을 나눔).",
        // EN: A1: <span class="chem">d = |-30 - 2| + |-23 - (-30)| = 32 + 7 = 39</span> <span class="unit">m</span>.
        "A1: <span class=\"chem\">d = |-30 - 2| + |-23 - (-30)| = 32 + 7 = 39</span> <span class=\"unit\">m</span>.",
      ],
    },

  }
});
