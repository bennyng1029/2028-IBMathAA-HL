/* t5-2.q — ko question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't5-2.q', {
  questions: {

    // ── t5-2-q001 · mcq · foundation · SL · SL 5.10 · 2 marks
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

    // ── t5-2-q002 · numeric · foundation · SL · SL 5.5 · 4 marks
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

    // ── t5-2-q006 · mcq · exam · SL · SL 5.10, 5.11 · 2 marks
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
        // EN (option D): You differentiated (ln x)² to get (2 ln x)/x and evaluated it at x = e, instead of integrating.
        "3": "적분하는 대신 (ln x)²을 미분해 (2 ln x)/x를 얻고 x = e에서 값을 구했어요.",
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
        // EN: Make sure your GDC is in <strong>radian mode</strong> and use its numerical integration command (TI: fnInt; Casio: ∫dx) on <span class="chem">|4 sin(t) - t + 1|</span> from <span class="chem">t = 0</span> to <span class="chem">t = 4</span>.
        "GDC가 <strong>라디안(radian) 모드</strong>인지 확인하고, 수치 적분 기능(TI: fnInt, Casio: ∫dx)으로 <span class=\"chem\">|4 sin(t) - t + 1|</span>를 <span class=\"chem\">t = 0</span>부터 <span class=\"chem\">t = 4</span>까지 적분하세요.",
      ],
      // EN: <p>In radian mode on a GDC, <span class="chem">d = int_0^4 |4 sin(t) - t + 1| dt ≈ 10.728...</span>, which rounds to <span class="chem">10.7</span> <span class="unit">m</span> (3 s.f.). (Note: the net displacement is only <span class="chem">int_0^4 v(t) dt ≈ 2.61</span> <span class="unit">m</span> because <span class="chem">v(t)</span> turns negative around <span class="chem">t ≈ 2.70</span> <span class="unit">s</span>.)</p>
      solution: "<p>GDC 라디안 모드에서 <span class=\"chem\">d = int_0^4 |4 sin(t) - t + 1| dt ≈ 10.728...</span>이므로 유효숫자 3자리로 <span class=\"chem\">10.7</span> <span class=\"unit\">m</span>예요. (참고: <span class=\"chem\">t ≈ 2.70</span> <span class=\"unit\">s</span> 부근에서 <span class=\"chem\">v(t)</span>가 음수로 바뀌므로 알짜 변위는 <span class=\"chem\">int_0^4 v(t) dt ≈ 2.61</span> <span class=\"unit\">m</span>뿐이에요.)</p>",
    },

    // ── t5-2-q012 · mcq · exam · SL · SL 5.9 · 2 marks
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
        // EN: Decode: the unknown <span class="chem">k</span> is inside the integrand. Find where the curve meets the <span class="chem">x</span>-axis, write the area as an expression in <span class="chem">k</span>, then set it equal to <span class="chem">32</span>.
        "해석: 미지수 <span class=\"chem\">k</span>는 피적분함수 안에 있습니다. 곡선과 <span class=\"chem\">x</span>축의 교점을 구하고, 넓이를 <span class=\"chem\">k</span>에 대한 식으로 쓴 다음 <span class=\"chem\">32</span>와 같다고 놓으세요.",
        // EN: The curve crosses the <span class="chem">x</span>-axis at <span class="chem">x = 0</span> and <span class="chem">x = 4</span>, and lies above the <span class="chem">x</span>-axis on <span class="chem">[0, 4]</span> since <span class="chem">k &gt; 0</span>.
        "곡선은 <span class=\"chem\">x = 0</span>과 <span class=\"chem\">x = 4</span>에서 <span class=\"chem\">x</span>축과 만나며, <span class=\"chem\">k &gt; 0</span>이므로 <span class=\"chem\">[0, 4]</span>에서 <span class=\"chem\">x</span>축 위에 있어요.",
        // EN: Set <span class="chem">k int_0^4 (4x - x^2) dx = 32</span> and solve for <span class="chem">k</span>.
        "<span class=\"chem\">k int_0^4 (4x - x^2) dx = 32</span>로 놓고 <span class=\"chem\">k</span>를 푸세요.",
      ],
      // EN: <p>Since <span class="chem">k &gt; 0</span>, <span class="chem">y &gt;= 0</span> on <span class="chem">[0, 4]</span>. The area is <span class="chem">int_0^4 k(4x - x^2) dx = k[2x^2 - x^3/3]_0^4 = k(32 - 64/3) = (32/3)k</span>. Setting <span class="chem">(32/3)k = 32</span> gives <span class="chem">k = 3</span>.</p>
      solution: "<p><span class=\"chem\">k &gt; 0</span>이므로 <span class=\"chem\">[0, 4]</span>에서 <span class=\"chem\">y &gt;= 0</span>이에요. 넓이는 <span class=\"chem\">int_0^4 k(4x - x^2) dx = k[2x^2 - x^3/3]_0^4 = k(32 - 64/3) = (32/3)k</span>예요. <span class=\"chem\">(32/3)k = 32</span>로 놓으면 <span class=\"chem\">k = 3</span>이에요.</p>",
    },

    // ── t5-2-q015 · mcq · challenge · SL · SL 5.10, 5.11 · 2 marks
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
        // EN: Decode: you do not know <span class="chem">f</span>, so the only route is to turn <span class="chem">int_0^4 f(x + 2) dx</span> into the given integral <span class="chem">int_2^6 f(x) dx</span> by shifting the variable.
        "해석: <span class=\"chem\">f</span>를 모르므로, 변수를 평행이동하여 <span class=\"chem\">int_0^4 f(x + 2) dx</span>를 주어진 적분 <span class=\"chem\">int_2^6 f(x) dx</span>로 바꾸는 것이 유일한 방법입니다.",
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

    // ── t5-2-q016 · numeric · exam · SL · SL 5.11 · 6 marks
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
        // EN: Decode: “starts from rest” and “initial displacement” are two boundary conditions, and “total distance” means you must find where the particle turns before using <span class="chem">int |v| dt</span>.
        "해석: \"정지 상태에서 출발\"과 \"초기 변위\"는 두 개의 경계 조건이며, \"총 이동 거리\"는 <span class=\"chem\">int |v| dt</span>를 쓰기 전에 입자가 방향을 바꾸는 시각을 먼저 찾아야 한다는 뜻입니다.",
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

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ko', 't5-2.q', {
  questions: {

    // ── t5-2-q018 · numeric · foundation · SL · SL 5.5 · 2 marks
    "t5-2-q018": {
      // EN: <p>Use your GDC to calculate <span class="chem">int_0^2 sqrt(1 + x^3) dx</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>GDC를 이용하여 <span class=\"chem\">int_0^2 sqrt(1 + x^3) dx</span>을 계산하시오 (calculate). 답은 유효숫자 3자리로 구하시오.</p>",
      hints: [
        // EN: <span class="chem">sqrt(1 + x^3)</span> has no antiderivative you can write down, so this is a job for the numerical integration command on your GDC (TI: fnInt; Casio: ∫dx; or the ∫ template).
        "<span class=\"chem\">sqrt(1 + x^3)</span>은 식으로 쓸 수 있는 원시함수가 없으므로, GDC의 수치 적분 기능(TI: fnInt, Casio: ∫dx, 또는 ∫ 템플릿)을 써야 해요.",
        // EN: Enter the integrand <span class="chem">sqrt(1 + x^3)</span> with lower limit <span class="chem">0</span> and upper limit <span class="chem">2</span>, then round the result to 3 s.f.
        "피적분함수 <span class=\"chem\">sqrt(1 + x^3)</span>을 입력하고 아래끝을 <span class=\"chem\">0</span>, 위끝을 <span class=\"chem\">2</span>으로 한 다음, 결과를 유효숫자 3자리로 반올림하세요.",
      ],
      // EN: <p>Using the GDC numerical integration command, <span class="chem">int_0^2 sqrt(1 + x^3) dx = 3.24130…</span>, so the answer is <span class="chem">3.24</span> (3 s.f.).</p>
      solution: "<p>GDC의 수치 적분 기능을 이용하면 <span class=\"chem\">int_0^2 sqrt(1 + x^3) dx = 3.24130…</span>이므로, 답은 <span class=\"chem\">3.24</span> (유효숫자 3자리)예요.</p>",
    },

    // ── t5-2-q019 · numeric · exam · SL · SL 5.5, 5.11 · 5 marks
    "t5-2-q019": {
      // EN: <p>The curve <span class="chem">y = x^3 - 4x^2 + x + 3</span> crosses the positive <span class="chem">x</span>-axis at the points <span class="chem">A</span> and <span class="chem">B</span>, where <span class="chem">A</span> is to the left of <span class="chem">B</span>. Find the area of the region enclosed by the curve and the <span class="chem">x</span>-axis between <span class="chem">A</span> and <span class="chem">B</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>곡선 <span class=\"chem\">y = x^3 - 4x^2 + x + 3</span>은 양의 <span class=\"chem\">x</span>축과 점 <span class=\"chem\">A</span>, <span class=\"chem\">B</span>에서 만나며, <span class=\"chem\">A</span>는 <span class=\"chem\">B</span>의 왼쪽에 있다. <span class=\"chem\">A</span>과 <span class=\"chem\">B</span> 사이에서 곡선과 <span class=\"chem\">x</span>축으로 둘러싸인 영역의 넓이를 구하시오 (Find). 답은 유효숫자 3자리로 구하시오.</p>",
      hints: [
        // EN: Decode: you need the two positive <span class="chem">x</span>-intercepts first (the cubic does not factorise nicely, so use the GDC root/zero tool), then an area. Check where the curve is between them: above or below the axis?
        "해석: 먼저 양의 <span class=\"chem\">x</span>절편 두 개가 필요해요 (이 삼차식은 깔끔하게 인수분해되지 않으므로 GDC의 근/영점 기능을 쓰세요). 그다음에 넓이를 구해요. 그 사이에서 곡선이 축의 위쪽에 있는지 아래쪽에 있는지 확인하세요.",
        // EN: The GDC gives <span class="chem">x_A ≈ 1.2391</span> and <span class="chem">x_B ≈ 3.4605</span>. Test a point such as <span class="chem">x = 2</span>: <span class="chem">y = -3 &lt; 0</span>, so the region lies <strong>below</strong> the axis.
        "GDC로 <span class=\"chem\">x_A ≈ 1.2391</span>과 <span class=\"chem\">x_B ≈ 3.4605</span>를 얻어요. 예를 들어 <span class=\"chem\">x = 2</span>에서 확인하면 <span class=\"chem\">y = -3 &lt; 0</span>이므로, 영역은 축의 <strong>아래쪽</strong>에 있어요.",
        // EN: The definite integral between the roots is negative. The area is its absolute value: <span class="chem">A = |int_{x_A}^{x_B} (x^3 - 4x^2 + x + 3) dx|</span> (or integrate <span class="chem">|y|</span> directly).
        "두 근 사이의 정적분은 음수예요. 넓이는 그 절댓값이에요: <span class=\"chem\">A = |int_{x_A}^{x_B} (x^3 - 4x^2 + x + 3) dx|</span> (또는 <span class=\"chem\">|y|</span>를 직접 적분하세요).",
      ],
      // EN: <p>Decode: area between two GDC roots, with the region below the axis. The GDC gives the positive roots <span class="chem">x_A = 1.23912…</span> and <span class="chem">x_B = 3.46050…</span> (the third root, <span class="chem">x ≈ -0.700</span>, is negative). Since <span class="chem">y(2) = -3 &lt; 0</span>, the curve is below the <span class="chem">x</span>-axis on <span class="chem">(x_A, x_B)</span>. Using stored roots, <span class="chem">int_{x_A}^{x_B} (x^3 - 4x^2 + x + 3) dx = -5.57107…</span>, so the area is <span class="chem">5.57</span> (3 s.f.). A negative answer can never be an area.</p>
      solution: "<p>해석: GDC로 구한 두 근 사이의 넓이이고, 영역은 축의 아래쪽에 있어요. GDC로 양의 근 <span class=\"chem\">x_A = 1.23912…</span>과 <span class=\"chem\">x_B = 3.46050…</span>를 얻어요 (세 번째 근 <span class=\"chem\">x ≈ -0.700</span>은 음수예요). <span class=\"chem\">y(2) = -3 &lt; 0</span>이므로 <span class=\"chem\">(x_A, x_B)</span>에서 곡선은 <span class=\"chem\">x</span>축 아래에 있어요. 저장한 근을 이용하면 <span class=\"chem\">int_{x_A}^{x_B} (x^3 - 4x^2 + x + 3) dx = -5.57107…</span>이므로, 넓이는 <span class=\"chem\">5.57</span> (유효숫자 3자리)예요. 음수인 답은 절대로 넓이가 될 수 없어요.</p>",
    },

    // ── t5-2-q020 · numeric · exam · SL · SL 5.5, 5.11 · 5 marks
    "t5-2-q020": {
      // EN: <p>Find the area of the finite region enclosed between the curves <span class="chem">y = 2 cos x</span> and <span class="chem">y = x^2 - 1</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>두 곡선 <span class=\"chem\">y = 2 cos x</span>과 <span class=\"chem\">y = x^2 - 1</span>로 둘러싸인 유한 영역의 넓이를 구하시오 (Find). 답은 유효숫자 3자리로 구하시오.</p>",
      hints: [
        // EN: Put your GDC in <strong>radian mode</strong>, graph both curves and use the intersect tool to find the two intersection points.
        "GDC를 <strong>라디안 모드</strong>로 놓고 두 곡선의 그래프를 그린 다음, 교점 기능으로 두 교점을 구하세요.",
        // EN: The intersections are at <span class="chem">x ≈ ±1.2654</span>. At <span class="chem">x = 0</span>, <span class="chem">2 cos 0 = 2 &gt; -1</span>, so <span class="chem">y = 2 cos x</span> is the upper curve.
        "교점은 <span class=\"chem\">x ≈ ±1.2654</span>이에요. <span class=\"chem\">x = 0</span>에서 <span class=\"chem\">2 cos 0 = 2 &gt; -1</span>이므로 <span class=\"chem\">y = 2 cos x</span>가 위쪽 곡선이에요.",
        // EN: Evaluate <span class="chem">int_{-1.2654}^{1.2654} (2 cos x - x^2 + 1) dx</span> using the stored intersection values.
        "저장한 교점 값을 이용하여 <span class=\"chem\">int_{-1.2654}^{1.2654} (2 cos x - x^2 + 1) dx</span>을 계산하세요.",
      ],
      // EN: <p>Solving <span class="chem">2 cos x = x^2 - 1</span> on a GDC (radians) gives <span class="chem">x = ±1.26542…</span>. On this interval <span class="chem">2 cos x &gt;= x^2 - 1</span>, so <span class="chem">A = int_{-1.26542}^{1.26542} (2 cos x - (x^2 - 1)) dx = 4.99490…</span>, which is <span class="chem">4.99</span> (3 s.f.). Part of the lower curve is below the <span class="chem">x</span>-axis, but “upper minus lower” already accounts for that.</p>
      solution: "<p>GDC(라디안)로 <span class=\"chem\">2 cos x = x^2 - 1</span>을 풀면 <span class=\"chem\">x = ±1.26542…</span>예요. 이 구간에서 <span class=\"chem\">2 cos x &gt;= x^2 - 1</span>이므로 <span class=\"chem\">A = int_{-1.26542}^{1.26542} (2 cos x - (x^2 - 1)) dx = 4.99490…</span>이고, 이는 <span class=\"chem\">4.99</span> (유효숫자 3자리)예요. 아래쪽 곡선의 일부는 <span class=\"chem\">x</span>축 아래에 있지만, “위쪽 − 아래쪽”에 이미 그 점이 반영되어 있어요.</p>",
    },

    // ── t5-2-q021 · numeric · exam · SL · SL 5.5, 5.11 · 5 marks
    "t5-2-q021": {
      // EN: <p>Let <span class="chem">f(x) = 4 sin x - x</span> for <span class="chem">0 &lt;= x &lt;= 4</span>. Find the total area of the regions enclosed by the graph of <span class="chem">f</span>, the <span class="chem">x</span>-axis and the line <span class="chem">x = 4</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">0 &lt;= x &lt;= 4</span>에서 <span class=\"chem\">f(x) = 4 sin x - x</span>이라 하자. <span class=\"chem\">f</span>의 그래프, <span class=\"chem\">x</span>축, 직선 <span class=\"chem\">x = 4</span>로 둘러싸인 영역들의 넓이의 합을 구하시오 (Find). 답은 유효숫자 3자리로 구하시오.</p>",
      hints: [
        // EN: Decode: “total area of the regions” means every region counts as positive. Sketch <span class="chem">f</span> on your GDC (radians) and look for where it crosses the axis.
        "해석: “영역들의 넓이의 합”은 모든 영역을 양수로 센다는 뜻이에요. GDC(라디안)로 <span class=\"chem\">f</span>의 그래프를 그리고 축과 만나는 곳을 찾으세요.",
        // EN: The graph crosses the axis at <span class="chem">x = 0</span> and at <span class="chem">x ≈ 2.4746</span>; it is above the axis before that and below it after.
        "그래프는 <span class=\"chem\">x = 0</span>과 <span class=\"chem\">x ≈ 2.4746</span>에서 축과 만나요. 그 전에는 축 위에, 그 후에는 축 아래에 있어요.",
        // EN: Either add <span class="chem">int_0^{2.4746} f(x) dx</span> and <span class="chem">|int_{2.4746}^4 f(x) dx|</span>, or enter <span class="chem">int_0^4 |f(x)| dx</span> directly. Note that <span class="chem">int_0^4 f(x) dx ≈ -1.39</span> is <strong>not</strong> the area.
        "<span class=\"chem\">int_0^{2.4746} f(x) dx</span>과 <span class=\"chem\">|int_{2.4746}^4 f(x) dx|</span>를 더하거나, <span class=\"chem\">int_0^4 |f(x)| dx</span>을 직접 입력하세요. <span class=\"chem\">int_0^4 f(x) dx ≈ -1.39</span>는 넓이가 <strong>아니라는</strong> 점에 주의하세요.",
      ],
      // EN: <p>The root of <span class="chem">4 sin x = x</span> in <span class="chem">(0, 4)</span> is <span class="chem">c = 2.47457…</span>. Then <span class="chem">int_0^c f(x) dx = 4.08092…</span> (above the axis) and <span class="chem">int_c^4 f(x) dx = -5.46634…</span> (below the axis). Total area <span class="chem">= 4.08092 + 5.46634 = 9.54726…</span>, i.e. <span class="chem">int_0^4 |f(x)| dx = 9.55</span> (3 s.f.). The signed integral, <span class="chem">-1.39</span>, lets the two regions cancel and is not an area.</p>
      solution: "<p><span class=\"chem\">(0, 4)</span>에서 <span class=\"chem\">4 sin x = x</span>의 근은 <span class=\"chem\">c = 2.47457…</span>이에요. 그러면 <span class=\"chem\">int_0^c f(x) dx = 4.08092…</span> (축 위)와 <span class=\"chem\">int_c^4 f(x) dx = -5.46634…</span> (축 아래)예요. 넓이의 합은 <span class=\"chem\">= 4.08092 + 5.46634 = 9.54726…</span>, 즉 <span class=\"chem\">int_0^4 |f(x)| dx = 9.55</span> (유효숫자 3자리)예요. 부호가 있는 적분 <span class=\"chem\">-1.39</span>에서는 두 영역이 서로 상쇄되므로 넓이가 아니에요.</p>",
    },

    // ── t5-2-q022 · numeric · challenge · SL · SL 5.5, 5.11 · 6 marks
    "t5-2-q022": {
      // EN: <p>A landscape architect draws a pond on a plan where 1 unit represents 1 metre. The pond is the region enclosed by the curves <span class="chem">y = ln x</span> and <span class="chem">y = (x - 2)^2</span>. A straight wooden bridge is built along the line <span class="chem">x = 2</span>, which splits the pond into two parts. Find the surface area of the <strong>larger</strong> part of the pond, in <span class="unit">m2</span>, correct to 3 significant figures.</p>
      stem: "<p>한 조경 설계사가 1단위가 1미터를 나타내는 평면도에 연못을 그린다. 연못은 곡선 <span class=\"chem\">y = ln x</span>과 <span class=\"chem\">y = (x - 2)^2</span>로 둘러싸인 영역이다. 직선 <span class=\"chem\">x = 2</span>을 따라 곧은 나무 다리를 놓아 연못을 두 부분으로 나눈다. 연못의 <strong>더 큰</strong> 부분의 수면 넓이를 <span class=\"unit\">m2</span> 단위로, 유효숫자 3자리로 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: this is an area between two curves, but you are asked for only one of the two pieces on either side of <span class="chem">x = 2</span>. You need the intersection points, the area on each side of <span class="chem">x = 2</span>, and then the bigger one.
        "해석: 두 곡선 사이의 넓이지만, <span class=\"chem\">x = 2</span> 양쪽의 두 조각 중 하나만 구하라는 문제예요. 교점, <span class=\"chem\">x = 2</span> 양쪽 각각의 넓이를 구한 다음 더 큰 쪽을 고르세요.",
        // EN: The GDC intersections are <span class="chem">x = a ≈ 1.4124</span> and <span class="chem">x = b ≈ 3.0571</span>. Between them, <span class="chem">ln x</span> is the upper curve (test <span class="chem">x = 2</span>: <span class="chem">ln 2 &gt; 0</span>).
        "GDC로 구한 교점은 <span class=\"chem\">x = a ≈ 1.4124</span>과 <span class=\"chem\">x = b ≈ 3.0571</span>예요. 그 사이에서는 <span class=\"chem\">ln x</span>이 위쪽 곡선이에요 (<span class=\"chem\">x = 2</span>에서 확인: <span class=\"chem\">ln 2 &gt; 0</span>).",
        // EN: Compute <span class="chem">int_a^2 (ln x - (x - 2)^2) dx</span> and <span class="chem">int_2^b (ln x - (x - 2)^2) dx</span>, and compare.
        "<span class=\"chem\">int_a^2 (ln x - (x - 2)^2) dx</span>과 <span class=\"chem\">int_2^b (ln x - (x - 2)^2) dx</span>를 계산하여 비교하세요.",
      ],
      // EN: <p>Decode: the bridge <span class="chem">x = 2</span> is a vertical cut, so the two parts are the areas between the curves on <span class="chem">[a, 2]</span> and <span class="chem">[2, b]</span>. The GDC gives <span class="chem">a = 1.41239…</span> and <span class="chem">b = 3.05710…</span>, with <span class="chem">ln x &gt;= (x - 2)^2</span> between them. Left part: <span class="chem">int_a^2 (ln x - (x - 2)^2) dx = 0.24338…</span>. Right part: <span class="chem">int_2^b (ln x - (x - 2)^2) dx = 0.57906…</span>. The larger part has area <span class="chem">0.579</span> <span class="unit">m2</span> (3 s.f.). (Check: the whole pond is <span class="chem">0.822</span> <span class="unit">m2</span>.)</p>
      solution: "<p>해석: 다리 <span class=\"chem\">x = 2</span>은 세로로 자르는 선이므로, 두 부분은 <span class=\"chem\">[a, 2]</span>와 <span class=\"chem\">[2, b]</span>에서 두 곡선 사이의 넓이예요. GDC로 <span class=\"chem\">a = 1.41239…</span>와 <span class=\"chem\">b = 3.05710…</span>를 얻고, 그 사이에서 <span class=\"chem\">ln x &gt;= (x - 2)^2</span>이에요. 왼쪽 부분: <span class=\"chem\">int_a^2 (ln x - (x - 2)^2) dx = 0.24338…</span>. 오른쪽 부분: <span class=\"chem\">int_2^b (ln x - (x - 2)^2) dx = 0.57906…</span>. 더 큰 부분의 넓이는 <span class=\"chem\">0.579</span> <span class=\"unit\">m2</span> (유효숫자 3자리)예요. (확인: 연못 전체는 <span class=\"chem\">0.822</span> <span class=\"unit\">m2</span>예요.)</p>",
    },

    // ── t5-2-q023 · short · exam · SL · SL 5.5, 5.8, 5.11 · 9 marks
    "t5-2-q023": {
      // EN: <p>Let <span class="chem">f(x) = 8x e^{-x/2}</span> and <span class="chem">g(x) = x</span>, for <span class="chem">x &gt;= 0</span>.<br>(a) Find the coordinates of the maximum point on the graph of <span class="chem">f</span>. <strong>[2 marks]</strong><br>(b) Find the <span class="chem">x</span>-coordinates of the points where the graphs of <span class="chem">f</span> and <span class="chem">g</span> intersect. <strong>[2 marks]</strong><br>(c) Find the area of the region enclosed between the graphs of <span class="chem">f</span> and <span class="chem">g</span>. <strong>[3 marks]</strong><br>(d) Find the area of the region enclosed by the graph of <span class="chem">f</span>, the <span class="chem">x</span>-axis and the line <span class="chem">x = 6</span>. <strong>[2 marks]</strong><br>Give non-exact answers correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">x &gt;= 0</span>에 대하여 <span class=\"chem\">f(x) = 8x e^{-x/2}</span>, <span class=\"chem\">g(x) = x</span>라 하자.<br>(a) <span class=\"chem\">f</span>의 그래프에서 극대점의 좌표를 구하시오 (Find). <strong>[2 marks]</strong><br>(b) <span class=\"chem\">f</span>과 <span class=\"chem\">g</span>의 그래프가 만나는 점들의 <span class=\"chem\">x</span>좌표를 구하시오 (Find). <strong>[2 marks]</strong><br>(c) <span class=\"chem\">f</span>과 <span class=\"chem\">g</span>의 그래프로 둘러싸인 영역의 넓이를 구하시오 (Find). <strong>[3 marks]</strong><br>(d) <span class=\"chem\">f</span>의 그래프, <span class=\"chem\">x</span>축, 직선 <span class=\"chem\">x = 6</span>로 둘러싸인 영역의 넓이를 구하시오 (Find). <strong>[2 marks]</strong><br>정확한 값이 아닌 답은 유효숫자 3자리로 구하시오.</p>",
      hints: [
        // EN: Decode: (a) and (b) are GDC graph-reading tasks; (c) is “upper minus lower” between the intersections from (b); (d) is a plain area under <span class="chem">f</span>, because <span class="chem">f(x) &gt;= 0</span> for <span class="chem">x &gt;= 0</span>.
        "해석: (a)와 (b)는 GDC로 그래프를 읽는 문제이고, (c)는 (b)의 교점 사이에서 “위쪽 − 아래쪽”, (d)는 <span class=\"chem\">f</span> 아래의 일반적인 넓이예요. <span class=\"chem\">x &gt;= 0</span>에서 <span class=\"chem\">f(x) &gt;= 0</span>이기 때문이에요.",
        // EN: For (b), the graphs meet at the origin and once more. Store the second intersection in your GDC so you can use it as a limit in (c).
        "(b)에서 두 그래프는 원점과 또 한 점에서 만나요. (c)에서 적분 구간의 끝으로 쓸 수 있도록 두 번째 교점을 GDC에 저장해 두세요.",
        // EN: Neither <span class="chem">int x e^{-x/2} dx</span> (integration by parts is AHL) nor the area needs to be done by hand here: use the GDC numerical integration.
        "여기서는 <span class=\"chem\">int x e^{-x/2} dx</span> (부분적분법은 AHL 내용이에요)도 넓이도 손으로 계산할 필요가 없어요. GDC의 수치 적분을 쓰세요.",
      ],
      // EN: <p>(a) <span class="chem">f'(x) = 8e^{-x/2} - 4x e^{-x/2} = 8e^{-x/2}(1 - x/2)</span>, which is zero at <span class="chem">x = 2</span>; <span class="chem">f(2) = 16e^{-1} = 5.886…</span>. Maximum <span class="chem">(2, 5.89)</span>.<br>(b) <span class="chem">8x e^{-x/2} = x</span> gives <span class="chem">x = 0</span> or <span class="chem">e^{-x/2} = 1/8</span>, i.e. <span class="chem">x = 2 ln 8 = 6 ln 2 = 4.1588…</span>.<br>(c) For <span class="chem">0 &lt; x &lt; 6 ln 2</span>, <span class="chem">f(x) &gt; g(x)</span> (e.g. <span class="chem">f(2) = 5.89 &gt; 2</span>). GDC: <span class="chem">int_0^{6 ln 2} (8x e^{-x/2} - x) dx = 11.034…</span>, so the area is <span class="chem">11.0</span>.<br>(d) <span class="chem">f(x) &gt;= 0</span> on <span class="chem">[0, 6]</span>, so the area is <span class="chem">int_0^6 8x e^{-x/2} dx = 25.627… ≈ 25.6</span>.</p>
      solution: "<p>(a) <span class=\"chem\">f'(x) = 8e^{-x/2} - 4x e^{-x/2} = 8e^{-x/2}(1 - x/2)</span>이고, 이는 <span class=\"chem\">x = 2</span>에서 0이에요. <span class=\"chem\">f(2) = 16e^{-1} = 5.886…</span>. 극대점은 <span class=\"chem\">(2, 5.89)</span>예요.<br>(b) <span class=\"chem\">8x e^{-x/2} = x</span>에서 <span class=\"chem\">x = 0</span> 또는 <span class=\"chem\">e^{-x/2} = 1/8</span>, 즉 <span class=\"chem\">x = 2 ln 8 = 6 ln 2 = 4.1588…</span>이에요.<br>(c) <span class=\"chem\">0 &lt; x &lt; 6 ln 2</span>에서 <span class=\"chem\">f(x) &gt; g(x)</span>이에요 (예: <span class=\"chem\">f(2) = 5.89 &gt; 2</span>). GDC: <span class=\"chem\">int_0^{6 ln 2} (8x e^{-x/2} - x) dx = 11.034…</span>이므로 넓이는 <span class=\"chem\">11.0</span>이에요.<br>(d) <span class=\"chem\">[0, 6]</span>에서 <span class=\"chem\">f(x) &gt;= 0</span>이므로 넓이는 <span class=\"chem\">int_0^6 8x e^{-x/2} dx = 25.627… ≈ 25.6</span>이에요.</p>",
      // EN: <p>(a) <span class="chem">(2, 5.89)</span> (exactly <span class="chem">(2, 16/e)</span>)<br>(b) <span class="chem">x = 0</span> and <span class="chem">x = 4.16</span> (exactly <span class="chem">6 ln 2</span>)<br>(c) <span class="chem">11.0</span><br>(d) <span class="chem">25.6</span></p>
      answer: "<p>(a) <span class=\"chem\">(2, 5.89)</span> (정확한 값 <span class=\"chem\">(2, 16/e)</span>)<br>(b) <span class=\"chem\">x = 0</span>과 <span class=\"chem\">x = 4.16</span> (정확한 값 <span class=\"chem\">6 ln 2</span>)<br>(c) <span class=\"chem\">11.0</span><br>(d) <span class=\"chem\">25.6</span></p>",
      markscheme: [
        // EN: M1: Uses the GDC maximum tool (or solves <span class="chem">f'(x) = 8e^{-x/2}(1 - x/2) = 0</span>).
        "M1: GDC의 최댓값 기능을 이용함 (또는 <span class=\"chem\">f'(x) = 8e^{-x/2}(1 - x/2) = 0</span>을 풂).",
        // EN: A1: <span class="chem">(2, 5.89)</span>.
        "A1: <span class=\"chem\">(2, 5.89)</span>.",
        // EN: M1: Solves <span class="chem">8x e^{-x/2} = x</span> (graphically, or <span class="chem">x = 0</span> or <span class="chem">e^{-x/2} = 1/8</span>).
        "M1: <span class=\"chem\">8x e^{-x/2} = x</span>을 풂 (그래프로, 또는 <span class=\"chem\">x = 0</span> 또는 <span class=\"chem\">e^{-x/2} = 1/8</span>).",
        // EN: A1: <span class="chem">x = 0</span> and <span class="chem">x = 4.16</span> (<span class="chem">6 ln 2</span>).
        "A1: <span class=\"chem\">x = 0</span>과 <span class=\"chem\">x = 4.16</span> (<span class=\"chem\">6 ln 2</span>).",
        // EN: M1: Sets up an integral of (upper − lower) between the intersections.
        "M1: 교점 사이에서 (위쪽 − 아래쪽)의 적분을 세움.",
        // EN: A1: <span class="chem">int_0^{4.1589} (8x e^{-x/2} - x) dx</span>, with <span class="chem">f</span> above <span class="chem">g</span>.
        "A1: <span class=\"chem\">int_0^{4.1589} (8x e^{-x/2} - x) dx</span>, 이때 <span class=\"chem\">f</span>가 <span class=\"chem\">g</span>보다 위에 있음.",
        // EN: A1: Area <span class="chem">= 11.0</span> (11.034…).
        "A1: 넓이 <span class=\"chem\">= 11.0</span> (11.034…).",
        // EN: M1: <span class="chem">int_0^6 8x e^{-x/2} dx</span> (f ≥ 0 on [0, 6]).
        "M1: <span class=\"chem\">int_0^6 8x e^{-x/2} dx</span> ([0, 6]에서 f ≥ 0).",
        // EN: A1: <span class="chem">25.6</span> (25.627…).
        "A1: <span class=\"chem\">25.6</span> (25.627…).",
      ],
    },

    // ── t5-2-q024 · numeric · exam · SL · SL 5.5, 5.9 · 5 marks
    "t5-2-q024": {
      // EN: <p>A particle moves in a straight line with velocity <span class="chem">v(t) = t^2 e^{-0.5t} - 1</span> <span class="unit">m s-1</span>, for <span class="chem">0 &lt;= t &lt;= 8</span>, where <span class="chem">t</span> is in seconds. Find the total distance travelled by the particle in these 8 seconds. Give your answer correct to 3 significant figures.</p>
      stem: "<p>한 입자가 <span class=\"chem\">0 &lt;= t &lt;= 8</span>에서 속도 <span class=\"chem\">v(t) = t^2 e^{-0.5t} - 1</span> <span class=\"unit\">m s-1</span>로 직선 위를 움직이며, <span class=\"chem\">t</span>는 초 단위이다. 이 8초 동안 입자가 움직인 총 이동 거리를 구하시오 (Find). 답은 유효숫자 3자리로 구하시오.</p>",
      hints: [
        // EN: Total distance is <span class="chem">int_0^8 |v(t)| dt</span>. The displacement <span class="chem">int_0^8 v(t) dt</span> is smaller, because the particle moves backwards at first.
        "총 이동 거리는 <span class=\"chem\">int_0^8 |v(t)| dt</span>이에요. 입자가 처음에 뒤로 움직이기 때문에 변위 <span class=\"chem\">int_0^8 v(t) dt</span>가 더 작아요.",
        // EN: Graph <span class="chem">v</span>: it starts at <span class="chem">v(0) = -1</span> and becomes positive at <span class="chem">t ≈ 1.430</span>, staying positive up to <span class="chem">t = 8</span>.
        "<span class=\"chem\">v</span>의 그래프를 그리세요. <span class=\"chem\">v(0) = -1</span>에서 시작하여 <span class=\"chem\">t ≈ 1.430</span>에서 양수가 되고, <span class=\"chem\">t = 8</span>까지 양수로 유지돼요.",
        // EN: Enter <span class="chem">int_0^8 |t^2 e^{-0.5t} - 1| dt</span> on the GDC, or add <span class="chem">|int_0^{1.430} v dt|</span> and <span class="chem">int_{1.430}^8 v dt</span>.
        "GDC에 <span class=\"chem\">int_0^8 |t^2 e^{-0.5t} - 1| dt</span>을 입력하거나, <span class=\"chem\">|int_0^{1.430} v dt|</span>와 <span class=\"chem\">int_{1.430}^8 v dt</span>을 더하세요.",
      ],
      // EN: <p>The velocity is negative for <span class="chem">0 &lt;= t &lt; 1.42961…</span> and positive after that (check <span class="chem">v(8) = 64e^{-4} - 1 ≈ 0.172 &gt; 0</span>). Total distance <span class="chem">= int_0^8 |v(t)| dt = 0.85413… + 5.04447… = 5.89860…</span>, so <span class="chem">5.90</span> <span class="unit">m</span> (3 s.f.). For comparison, the displacement is only <span class="chem">int_0^8 v(t) dt ≈ 4.19</span> <span class="unit">m</span>.</p>
      solution: "<p>속도는 <span class=\"chem\">0 &lt;= t &lt; 1.42961…</span>에서 음수이고 그 후에는 양수예요 (<span class=\"chem\">v(8) = 64e^{-4} - 1 ≈ 0.172 &gt; 0</span> 확인). 총 이동 거리는 <span class=\"chem\">= int_0^8 |v(t)| dt = 0.85413… + 5.04447… = 5.89860…</span>이므로 <span class=\"chem\">5.90</span> <span class=\"unit\">m</span> (유효숫자 3자리)예요. 비교하면, 변위는 <span class=\"chem\">int_0^8 v(t) dt ≈ 4.19</span> <span class=\"unit\">m</span>뿐이에요.</p>",
    },

    // ── t5-2-q025 · numeric · exam · SL · SL 5.5, 5.9 · 4 marks
    "t5-2-q025": {
      // EN: <p>A particle moves along a straight line so that its velocity is <span class="chem">v(t) = 6 cos(t^2 / 5)</span> <span class="unit">m s-1</span>, for <span class="chem">0 &lt;= t &lt;= 5</span> seconds. When <span class="chem">t = 0</span>, the particle is <span class="chem">1</span> <span class="unit">m</span> to the right of a fixed point <span class="chem">O</span> (so <span class="chem">s(0) = 1</span>). Find the displacement <span class="chem">s(5)</span> of the particle from <span class="chem">O</span> when <span class="chem">t = 5</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>한 입자가 <span class=\"chem\">0 &lt;= t &lt;= 5</span>초에서 속도 <span class=\"chem\">v(t) = 6 cos(t^2 / 5)</span> <span class=\"unit\">m s-1</span>로 직선 위를 움직인다. <span class=\"chem\">t = 0</span>일 때 입자는 고정점 <span class=\"chem\">O</span>의 오른쪽 <span class=\"chem\">1</span> <span class=\"unit\">m</span> 위치에 있다 (즉 <span class=\"chem\">s(0) = 1</span>). <span class=\"chem\">t = 5</span>일 때 <span class=\"chem\">O</span>으로부터 입자의 변위 <span class=\"chem\">s(5)</span>를 구하시오 (Find). 답은 유효숫자 3자리로 구하시오.</p>",
      hints: [
        // EN: Decode: you cannot integrate <span class="chem">cos(t^2/5)</span> by hand, but you do not need <span class="chem">s(t)</span> as a formula: <span class="chem">s(5) = s(0) + int_0^5 v(t) dt</span>.
        "해석: <span class=\"chem\">cos(t^2/5)</span>은 손으로 적분할 수 없지만, <span class=\"chem\">s(t)</span>를 식으로 구할 필요는 없어요: <span class=\"chem\">s(5) = s(0) + int_0^5 v(t) dt</span>.",
        // EN: Use the GDC (radians) for <span class="chem">int_0^5 6 cos(t^2 / 5) dt</span>, then add the starting position <span class="chem">1</span>.
        "GDC(라디안)로 <span class=\"chem\">int_0^5 6 cos(t^2 / 5) dt</span>을 계산한 다음, 출발 위치 <span class=\"chem\">1</span>를 더하세요.",
      ],
      // EN: <p>By the fundamental theorem, <span class="chem">s(5) - s(0) = int_0^5 v(t) dt</span>. The GDC (radians) gives <span class="chem">int_0^5 6 cos(t^2 / 5) dt = 5.52298…</span>. So <span class="chem">s(5) = 1 + 5.52298… = 6.52298…</span>, i.e. <span class="chem">6.52</span> <span class="unit">m</span> (3 s.f.). The velocity changes sign twice in <span class="chem">[0, 5]</span>, but that only matters for distance, not for displacement.</p>
      solution: "<p>미적분의 기본정리에 의해 <span class=\"chem\">s(5) - s(0) = int_0^5 v(t) dt</span>이에요. GDC(라디안)로 <span class=\"chem\">int_0^5 6 cos(t^2 / 5) dt = 5.52298…</span>를 얻어요. 따라서 <span class=\"chem\">s(5) = 1 + 5.52298… = 6.52298…</span>, 즉 <span class=\"chem\">6.52</span> <span class=\"unit\">m</span> (유효숫자 3자리)예요. 속도는 <span class=\"chem\">[0, 5]</span>에서 부호가 두 번 바뀌지만, 이는 이동 거리에만 관계있고 변위와는 관계없어요.</p>",
    },

    // ── t5-2-q026 · numeric · exam · SL · SL 5.9 · 5 marks
    "t5-2-q026": {
      // EN: <p>A particle moves in a straight line with velocity <span class="chem">v(t) = 3 - t + 2 sin(1.5t)</span> <span class="unit">m s-1</span>, for <span class="chem">0 &lt;= t &lt;= 8</span> seconds. Find the acceleration of the particle at the instant when it first changes direction. Give your answer correct to 3 significant figures.</p>
      stem: "<p>한 입자가 <span class=\"chem\">0 &lt;= t &lt;= 8</span>초에서 속도 <span class=\"chem\">v(t) = 3 - t + 2 sin(1.5t)</span> <span class=\"unit\">m s-1</span>로 직선 위를 움직인다. 입자가 처음으로 방향을 바꾸는 순간의 가속도를 구하시오 (Find). 답은 유효숫자 3자리로 구하시오.</p>",
      hints: [
        // EN: Decode: “changes direction” means <span class="chem">v(t) = 0</span> <strong>and</strong> <span class="chem">v</span> changes sign there. Find the first such time, then evaluate <span class="chem">a(t) = v'(t)</span> at it.
        "해석: “방향을 바꾼다”는 <span class=\"chem\">v(t) = 0</span>이고 <strong>또한</strong> <span class=\"chem\">v</span>가 그 점에서 부호가 바뀐다는 뜻이에요. 그런 첫 번째 시각을 찾은 다음, 그 시각에서 <span class=\"chem\">a(t) = v'(t)</span>을 계산하세요.",
        // EN: The GDC zero of <span class="chem">v</span> is <span class="chem">t ≈ 2.3242</span>, and the graph of <span class="chem">v</span> crosses (not just touches) the axis there.
        "<span class=\"chem\">v</span>의 GDC 영점은 <span class=\"chem\">t ≈ 2.3242</span>이고, <span class=\"chem\">v</span>의 그래프는 그 점에서 축을 (접하기만 하는 것이 아니라) 가로질러요.",
        // EN: Differentiate: <span class="chem">a(t) = -1 + 3 cos(1.5t)</span> (or use the GDC derivative at that point).
        "미분하세요: <span class=\"chem\">a(t) = -1 + 3 cos(1.5t)</span> (또는 그 점에서 GDC의 미분 기능을 쓰세요).",
      ],
      // EN: <p>The only zero of <span class="chem">v</span> in <span class="chem">[0, 8]</span> is <span class="chem">t = 2.32418…</span> (radians), and <span class="chem">v</span> goes from positive to negative there, so the particle changes direction. <span class="chem">a(t) = v'(t) = -1 + 2(1.5) cos(1.5t) = -1 + 3 cos(1.5t)</span>. So <span class="chem">a(2.32418…) = -3.82354…</span>, i.e. <span class="chem">-3.82</span> <span class="unit">m s-2</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">[0, 8]</span>에서 <span class=\"chem\">v</span>의 영점은 <span class=\"chem\">t = 2.32418…</span> (라디안) 하나뿐이고, 그 점에서 <span class=\"chem\">v</span>가 양에서 음으로 바뀌므로 입자는 방향을 바꿔요. <span class=\"chem\">a(t) = v'(t) = -1 + 2(1.5) cos(1.5t) = -1 + 3 cos(1.5t)</span>. 따라서 <span class=\"chem\">a(2.32418…) = -3.82354…</span>, 즉 <span class=\"chem\">-3.82</span> <span class=\"unit\">m s-2</span> (유효숫자 3자리)예요.</p>",
    },

    // ── t5-2-q027 · short · exam · SL · SL 5.5, 5.9 · 11 marks
    "t5-2-q027": {
      // EN: <p>A toy car moves along a straight track. Its velocity is <span class="chem">v(t) = 10t e^{-0.5t} - 2</span> <span class="unit">m s-1</span>, for <span class="chem">0 &lt;= t &lt;= 10</span>, where <span class="chem">t</span> is in seconds.<br>(a) Write down the initial velocity of the car. <strong>[1 mark]</strong><br>(b) Find the values of <span class="chem">t</span> for which the car is at rest. <strong>[2 marks]</strong><br>(c) Find the maximum speed of the car. <strong>[2 marks]</strong><br>(d) Find the displacement of the car from its starting point when <span class="chem">t = 10</span>. <strong>[2 marks]</strong><br>(e) Find the total distance travelled by the car for <span class="chem">0 &lt;= t &lt;= 10</span>. <strong>[2 marks]</strong><br>(f) Find the acceleration of the car when <span class="chem">t = 1</span>. <strong>[2 marks]</strong><br>Give non-exact answers correct to 3 significant figures.</p>
      stem: "<p>장난감 자동차가 곧은 트랙 위를 움직인다. <span class=\"chem\">0 &lt;= t &lt;= 10</span>에서 속도는 <span class=\"chem\">v(t) = 10t e^{-0.5t} - 2</span> <span class=\"unit\">m s-1</span>이며, <span class=\"chem\">t</span>는 초 단위이다.<br>(a) 자동차의 처음 속도를 쓰시오 (Write down). <strong>[1 mark]</strong><br>(b) 자동차가 정지해 있는 <span class=\"chem\">t</span>의 값을 구하시오 (Find). <strong>[2 marks]</strong><br>(c) 자동차의 최대 속력을 구하시오 (Find). <strong>[2 marks]</strong><br>(d) <span class=\"chem\">t = 10</span>일 때 출발점으로부터 자동차의 변위를 구하시오 (Find). <strong>[2 marks]</strong><br>(e) <span class=\"chem\">0 &lt;= t &lt;= 10</span>에서 자동차가 움직인 총 이동 거리를 구하시오 (Find). <strong>[2 marks]</strong><br>(f) <span class=\"chem\">t = 1</span>일 때 자동차의 가속도를 구하시오 (Find). <strong>[2 marks]</strong><br>정확한 값이 아닌 답은 유효숫자 3자리로 구하시오.</p>",
      hints: [
        // EN: Decode: “at rest” is <span class="chem">v = 0</span>; “speed” is <span class="chem">|v|</span>, so a large negative velocity would also count; “displacement” is <span class="chem">int v dt</span> but “total distance” is <span class="chem">int |v| dt</span>.
        "해석: “정지”는 <span class=\"chem\">v = 0</span>, “속력”은 <span class=\"chem\">|v|</span>이므로 절댓값이 큰 음의 속도도 해당돼요. “변위”는 <span class=\"chem\">int v dt</span>이지만 “총 이동 거리”는 <span class=\"chem\">int |v| dt</span>예요.",
        // EN: Graph <span class="chem">v</span> on <span class="chem">[0, 10]</span>: it is negative at both ends and has one peak. Check the endpoint values before you claim a maximum speed.
        "<span class=\"chem\">[0, 10]</span>에서 <span class=\"chem\">v</span>의 그래프를 그리세요. 양 끝에서 음수이고 봉우리가 하나 있어요. 최대 속력을 정하기 전에 끝점의 값을 확인하세요.",
        // EN: For (f), <span class="chem">a = dv/dt</span>; use the product rule on <span class="chem">10t e^{-0.5t}</span> or the GDC derivative command.
        "(f)에서는 <span class=\"chem\">a = dv/dt</span>이에요. <span class=\"chem\">10t e^{-0.5t}</span>에 곱의 미분법을 쓰거나 GDC의 미분 기능을 쓰세요.",
      ],
      // EN: <p>(a) <span class="chem">v(0) = 0 - 2 = -2</span> <span class="unit">m s-1</span>.<br>(b) GDC zeros of <span class="chem">v</span>: <span class="chem">t = 0.22366…</span> and <span class="chem">t = 7.15430…</span>.<br>(c) <span class="chem">v'(t) = 10e^{-0.5t}(1 - 0.5t) = 0</span> at <span class="chem">t = 2</span>, where <span class="chem">v(2) = 20e^{-1} - 2 = 5.3576…</span>. At the ends <span class="chem">|v(0)| = 2</span> and <span class="chem">|v(10)| = |100e^{-5} - 2| = 1.326…</span>, so the maximum speed is <span class="chem">5.36</span> <span class="unit">m s-1</span>.<br>(d) <span class="chem">int_0^{10} v(t) dt = 18.3829…</span>, so <span class="chem">18.4</span> <span class="unit">m</span>.<br>(e) <span class="chem">int_0^{10} |v(t)| dt = 23.1937…</span>, so <span class="chem">23.2</span> <span class="unit">m</span>. It is larger than (d) because the car moves backwards for <span class="chem">t &lt; 0.224</span> and for <span class="chem">t &gt; 7.15</span>.<br>(f) <span class="chem">a(1) = 10e^{-0.5} - 5e^{-0.5} = 5e^{-0.5} = 3.0327…</span>, so <span class="chem">3.03</span> <span class="unit">m s-2</span>.</p>
      solution: "<p>(a) <span class=\"chem\">v(0) = 0 - 2 = -2</span> <span class=\"unit\">m s-1</span>.<br>(b) <span class=\"chem\">v</span>의 GDC 영점: <span class=\"chem\">t = 0.22366…</span>와 <span class=\"chem\">t = 7.15430…</span>.<br>(c) <span class=\"chem\">t = 2</span>에서 <span class=\"chem\">v'(t) = 10e^{-0.5t}(1 - 0.5t) = 0</span>이고, 이때 <span class=\"chem\">v(2) = 20e^{-1} - 2 = 5.3576…</span>이에요. 양 끝에서는 <span class=\"chem\">|v(0)| = 2</span>, <span class=\"chem\">|v(10)| = |100e^{-5} - 2| = 1.326…</span>이므로 최대 속력은 <span class=\"chem\">5.36</span> <span class=\"unit\">m s-1</span>예요.<br>(d) <span class=\"chem\">int_0^{10} v(t) dt = 18.3829…</span>이므로 <span class=\"chem\">18.4</span> <span class=\"unit\">m</span>예요.<br>(e) <span class=\"chem\">int_0^{10} |v(t)| dt = 23.1937…</span>이므로 <span class=\"chem\">23.2</span> <span class=\"unit\">m</span>이에요. 자동차가 <span class=\"chem\">t &lt; 0.224</span>와 <span class=\"chem\">t &gt; 7.15</span>에서 뒤로 움직이기 때문에 (d)보다 커요.<br>(f) <span class=\"chem\">a(1) = 10e^{-0.5} - 5e^{-0.5} = 5e^{-0.5} = 3.0327…</span>이므로 <span class=\"chem\">3.03</span> <span class=\"unit\">m s-2</span>이에요.</p>",
      // EN: <p>(a) <span class="chem">-2</span> <span class="unit">m s-1</span><br>(b) <span class="chem">t = 0.224</span> and <span class="chem">t = 7.15</span><br>(c) <span class="chem">5.36</span> <span class="unit">m s-1</span><br>(d) <span class="chem">18.4</span> <span class="unit">m</span><br>(e) <span class="chem">23.2</span> <span class="unit">m</span><br>(f) <span class="chem">3.03</span> <span class="unit">m s-2</span></p>
      answer: "<p>(a) <span class=\"chem\">-2</span> <span class=\"unit\">m s-1</span><br>(b) <span class=\"chem\">t = 0.224</span>과 <span class=\"chem\">t = 7.15</span><br>(c) <span class=\"chem\">5.36</span> <span class=\"unit\">m s-1</span><br>(d) <span class=\"chem\">18.4</span> <span class=\"unit\">m</span><br>(e) <span class=\"chem\">23.2</span> <span class=\"unit\">m</span><br>(f) <span class=\"chem\">3.03</span> <span class=\"unit\">m s-2</span></p>",
      markscheme: [
        // EN: A1: <span class="chem">v(0) = -2</span> <span class="unit">m s-1</span>.
        "A1: <span class=\"chem\">v(0) = -2</span> <span class=\"unit\">m s-1</span>.",
        // EN: M1: Solves <span class="chem">v(t) = 0</span> on the GDC.
        "M1: GDC로 <span class=\"chem\">v(t) = 0</span>을 풂.",
        // EN: A1: <span class="chem">t = 0.224</span> and <span class="chem">t = 7.15</span>.
        "A1: <span class=\"chem\">t = 0.224</span>과 <span class=\"chem\">t = 7.15</span>.",
        // EN: M1: Finds the maximum of <span class="chem">|v|</span>, comparing the local maximum <span class="chem">v(2)</span> with the endpoint values <span class="chem">|v(0)| = 2</span> and <span class="chem">|v(10)| ≈ 1.33</span>.
        "M1: <span class=\"chem\">|v|</span>의 최댓값을 구하고, 극댓값 <span class=\"chem\">v(2)</span>를 끝점의 값 <span class=\"chem\">|v(0)| = 2</span>, <span class=\"chem\">|v(10)| ≈ 1.33</span>와 비교함.",
        // EN: A1: Maximum speed <span class="chem">= v(2) = 20e^{-1} - 2 = 5.36</span> <span class="unit">m s-1</span>.
        "A1: 최대 속력 <span class=\"chem\">= v(2) = 20e^{-1} - 2 = 5.36</span> <span class=\"unit\">m s-1</span>.",
        // EN: M1: <span class="chem">int_0^{10} v(t) dt</span>.
        "M1: <span class=\"chem\">int_0^{10} v(t) dt</span>.",
        // EN: A1: <span class="chem">18.4</span> <span class="unit">m</span> (18.38…).
        "A1: <span class=\"chem\">18.4</span> <span class=\"unit\">m</span> (18.38…).",
        // EN: M1: <span class="chem">int_0^{10} |v(t)| dt</span> (or splits at both zeros and adds absolute values).
        "M1: <span class=\"chem\">int_0^{10} |v(t)| dt</span> (또는 두 영점에서 나누고 절댓값을 더함).",
        // EN: A1: <span class="chem">23.2</span> <span class="unit">m</span> (23.19…).
        "A1: <span class=\"chem\">23.2</span> <span class=\"unit\">m</span> (23.19…).",
        // EN: M1: <span class="chem">a(t) = v'(t) = 10e^{-0.5t} - 5t e^{-0.5t}</span> (or GDC derivative at <span class="chem">t = 1</span>).
        "M1: <span class=\"chem\">a(t) = v'(t) = 10e^{-0.5t} - 5t e^{-0.5t}</span> (또는 <span class=\"chem\">t = 1</span>에서 GDC 미분).",
        // EN: A1: <span class="chem">a(1) = 5e^{-0.5} = 3.03</span> <span class="unit">m s-2</span>.
        "A1: <span class=\"chem\">a(1) = 5e^{-0.5} = 3.03</span> <span class=\"unit\">m s-2</span>.",
      ],
    },

    // ── t5-2-q028 · numeric · challenge · SL · SL 5.5, 5.9 · 6 marks
    "t5-2-q028": {
      // EN: <p>A particle leaves a point <span class="chem">O</span> at <span class="chem">t = 0</span> and moves in a straight line with velocity <span class="chem">v(t) = 4 - t e^{0.3t}</span> <span class="unit">m s-1</span>, where <span class="chem">t &gt;= 0</span> is in seconds. Find the time, after it leaves, when the particle is next back at <span class="chem">O</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>한 입자가 <span class=\"chem\">t = 0</span>에 점 <span class=\"chem\">O</span>을 떠나 속도 <span class=\"chem\">v(t) = 4 - t e^{0.3t}</span> <span class=\"unit\">m s-1</span>로 직선 위를 움직이며, <span class=\"chem\">t &gt;= 0</span>는 초 단위이다. 떠난 후 입자가 다음에 <span class=\"chem\">O</span>으로 돌아오는 시각을 구하시오 (Find). 답은 유효숫자 3자리로 구하시오.</p>",
      hints: [
        // EN: Decode: “back at O” means the <strong>displacement</strong> is zero, not the velocity. You need <span class="chem">T &gt; 0</span> with <span class="chem">int_0^T v(t) dt = 0</span>. Solving <span class="chem">v(t) = 0</span> only tells you when the particle turns round.
        "해석: “O로 돌아온다”는 속도가 아니라 <strong>변위</strong>가 0이라는 뜻이에요. <span class=\"chem\">int_0^T v(t) dt = 0</span>일 때 <span class=\"chem\">T &gt; 0</span>이 필요해요. <span class=\"chem\">v(t) = 0</span>을 풀면 입자가 방향을 바꾸는 시각만 알 수 있어요.",
        // EN: The particle moves forwards until <span class="chem">v = 0</span> at <span class="chem">t ≈ 2.12</span>, then comes back. So the answer must be later than 2.12 s.
        "입자는 <span class=\"chem\">t ≈ 2.12</span>에서 <span class=\"chem\">v = 0</span>이 될 때까지 앞으로 움직인 다음 되돌아와요. 따라서 답은 2.12 s보다 뒤여야 해요.",
        // EN: On the GDC, graph <span class="chem">y = int_0^x (4 - t e^{0.3t}) dt</span> (or tabulate it) and find where it returns to zero.
        "GDC로 <span class=\"chem\">y = int_0^x (4 - t e^{0.3t}) dt</span>의 그래프를 그리고 (또는 표를 만들고) 0으로 돌아오는 곳을 찾으세요.",
      ],
      // EN: <p>Decode: returning to <span class="chem">O</span> means <span class="chem">s(T) = s(0)</span>, i.e. <span class="chem">int_0^T (4 - t e^{0.3t}) dt = 0</span> with <span class="chem">T &gt; 0</span>. The particle turns at <span class="chem">t = 2.1185…</span> (where <span class="chem">v = 0</span>), having travelled forwards, so it comes back afterwards. Solving the integral equation on the GDC gives <span class="chem">T = 3.69726…</span>, so the particle is back at <span class="chem">O</span> after <span class="chem">3.70</span> <span class="unit">s</span> (3 s.f.).</p>
      solution: "<p>해석: <span class=\"chem\">O</span>로 돌아온다는 것은 <span class=\"chem\">s(T) = s(0)</span>, 즉 <span class=\"chem\">T &gt; 0</span>일 때 <span class=\"chem\">int_0^T (4 - t e^{0.3t}) dt = 0</span>이라는 뜻이에요. 입자는 앞으로 움직인 후 <span class=\"chem\">t = 2.1185…</span>에서 방향을 바꾸므로 (이때 <span class=\"chem\">v = 0</span>) 그 후에 되돌아와요. 이 적분 방정식을 GDC로 풀면 <span class=\"chem\">T = 3.69726…</span>이므로, 입자는 <span class=\"chem\">3.70</span> <span class=\"unit\">s</span> 후에 <span class=\"chem\">O</span>로 돌아와요 (유효숫자 3자리).</p>",
    },

    // ── t5-2-q029 · numeric · challenge · SL · SL 5.5, 5.9 · 6 marks
    "t5-2-q029": {
      // EN: <p>A particle moves along a straight line with velocity <span class="chem">v(t) = 2 cos t + 0.5t - 1</span> <span class="unit">m s-1</span>, where <span class="chem">t &gt;= 0</span> is in seconds. The particle has an odometer that records the total distance it has travelled since <span class="chem">t = 0</span>. Find the time at which the odometer first reads <span class="chem">10</span> <span class="unit">m</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>한 입자가 속도 <span class=\"chem\">v(t) = 2 cos t + 0.5t - 1</span> <span class=\"unit\">m s-1</span>로 직선 위를 움직이며, <span class=\"chem\">t &gt;= 0</span>은 초 단위이다. 입자에는 <span class=\"chem\">t = 0</span>부터 움직인 총 이동 거리를 기록하는 주행 거리계가 있다. 주행 거리계가 처음으로 <span class=\"chem\">10</span> <span class=\"unit\">m</span>을 가리키는 시각을 구하시오 (Find). 답은 유효숫자 3자리로 구하시오.</p>",
      hints: [
        // EN: Decode: an odometer measures <strong>distance</strong>, which never decreases. You need <span class="chem">T</span> with <span class="chem">int_0^T |v(t)| dt = 10</span>; using <span class="chem">int_0^T v(t) dt = 10</span> would treat backward motion as negative.
        "해석: 주행 거리계는 <strong>이동 거리</strong>를 재고, 이 값은 절대 줄어들지 않아요. <span class=\"chem\">int_0^T |v(t)| dt = 10</span>일 때 <span class=\"chem\">T</span>이 필요해요. <span class=\"chem\">int_0^T v(t) dt = 10</span>을 쓰면 뒤로 가는 운동을 음수로 처리하게 돼요.",
        // EN: In radians, <span class="chem">v</span> changes sign at <span class="chem">t ≈ 1.427</span> and <span class="chem">t ≈ 4.146</span>, and is positive after that.
        "라디안에서 <span class=\"chem\">v</span>은 <span class=\"chem\">t ≈ 1.427</span>와 <span class=\"chem\">t ≈ 4.146</span>에서 부호가 바뀌고, 그 후에는 양수예요.",
        // EN: Graph <span class="chem">y = int_0^x |2 cos t + 0.5t - 1| dt</span> on the GDC and intersect it with <span class="chem">y = 10</span>.
        "GDC로 <span class=\"chem\">y = int_0^x |2 cos t + 0.5t - 1| dt</span>의 그래프를 그리고 <span class=\"chem\">y = 10</span>와의 교점을 구하세요.",
      ],
      // EN: <p>Decode: the reading is the total distance <span class="chem">D(T) = int_0^T |v(t)| dt</span>, an increasing function. Solve <span class="chem">D(T) = 10</span>. The velocity is positive on <span class="chem">[0, 1.427)</span>, negative on <span class="chem">(1.427, 4.146)</span> and positive afterwards. The GDC gives <span class="chem">D(4.146…) ≈ 3.66</span>, so the 10 m mark is reached later, at <span class="chem">T = 6.57413…</span>, i.e. <span class="chem">6.57</span> <span class="unit">s</span> (3 s.f.). Solving <span class="chem">int_0^T v dt = 10</span> instead would give a later, wrong time.</p>
      solution: "<p>해석: 표시값은 총 이동 거리 <span class=\"chem\">D(T) = int_0^T |v(t)| dt</span>이고, 이는 증가함수예요. <span class=\"chem\">D(T) = 10</span>를 풀어요. 속도는 <span class=\"chem\">[0, 1.427)</span>에서 양수, <span class=\"chem\">(1.427, 4.146)</span>에서 음수, 그 후에는 양수예요. GDC로 <span class=\"chem\">D(4.146…) ≈ 3.66</span>이므로, 10 m 표시에는 더 나중인 <span class=\"chem\">T = 6.57413…</span>, 즉 <span class=\"chem\">6.57</span> <span class=\"unit\">s</span> (유효숫자 3자리)에 도달해요. 대신 <span class=\"chem\">int_0^T v dt = 10</span>를 풀면 더 늦은 잘못된 시각이 나와요.</p>",
    },

    // ── t5-2-q030 · numeric · challenge · SL · SL 5.5, 5.9 · 6 marks
    "t5-2-q030": {
      // EN: <p>A drone takes off vertically from the ground at <span class="chem">t = 0</span>. For the first <span class="chem">10</span> seconds of its flight its vertical velocity, measured upwards, is <span class="chem">v(t) = 6 - t - 2 sin t</span> <span class="unit">m s-1</span>. Find the greatest height above the ground that the drone reaches during these 10 seconds. Give your answer correct to 3 significant figures.</p>
      stem: "<p>드론이 <span class=\"chem\">t = 0</span>에 지면에서 수직으로 이륙한다. 비행을 시작한 처음 <span class=\"chem\">10</span>초 동안, 위쪽 방향을 양으로 잰 수직 속도는 <span class=\"chem\">v(t) = 6 - t - 2 sin t</span> <span class=\"unit\">m s-1</span>이다. 이 10초 동안 드론이 도달하는 지면으로부터의 최대 높이를 구하시오 (Find). 답은 유효숫자 3자리로 구하시오.</p>",
      hints: [
        // EN: Decode: height is the displacement <span class="chem">s(t) = int_0^t v(u) du</span> (it starts at 0). Its greatest value occurs where <span class="chem">v</span> changes from positive to negative, not at <span class="chem">t = 10</span>.
        "해석: 높이는 변위 <span class=\"chem\">s(t) = int_0^t v(u) du</span>이에요 (0에서 시작해요). 최댓값은 <span class=\"chem\">t = 10</span>이 아니라 <span class=\"chem\">v</span>가 양에서 음으로 바뀌는 곳에서 나타나요.",
        // EN: In radians, the GDC gives the zero of <span class="chem">v</span> at <span class="chem">t ≈ 6.1887</span>; <span class="chem">v &gt; 0</span> before it and <span class="chem">v &lt; 0</span> after it.
        "라디안에서 GDC로 구한 <span class=\"chem\">v</span>의 영점은 <span class=\"chem\">t ≈ 6.1887</span>예요. 그 전에는 <span class=\"chem\">v &gt; 0</span>, 그 후에는 <span class=\"chem\">v &lt; 0</span>예요.",
        // EN: Evaluate <span class="chem">int_0^{6.1887} (6 - t - 2 sin t) dt</span>.
        "<span class=\"chem\">int_0^{6.1887} (6 - t - 2 sin t) dt</span>을 계산하세요.",
      ],
      // EN: <p>Decode: maximum height = maximum of <span class="chem">s(t) = int_0^t v</span>, which occurs where <span class="chem">v</span> changes sign from + to −. The only zero of <span class="chem">v</span> in <span class="chem">[0, 10]</span> is <span class="chem">t_1 = 6.18869…</span>. The greatest height is <span class="chem">s(t_1) = int_0^{t_1} (6 - t - 2 sin t) dt = 17.9732…</span>, i.e. <span class="chem">18.0</span> <span class="unit">m</span> (3 s.f.). (At <span class="chem">t = 10</span> the drone is lower, at about <span class="chem">6.32</span> <span class="unit">m</span>, and it never reaches the ground in between.)</p>
      solution: "<p>해석: 최대 높이 = <span class=\"chem\">s(t) = int_0^t v</span>의 최댓값이고, 이는 <span class=\"chem\">v</span>의 부호가 +에서 −로 바뀌는 곳에서 나타나요. <span class=\"chem\">[0, 10]</span>에서 <span class=\"chem\">v</span>의 영점은 <span class=\"chem\">t_1 = 6.18869…</span> 하나뿐이에요. 최대 높이는 <span class=\"chem\">s(t_1) = int_0^{t_1} (6 - t - 2 sin t) dt = 17.9732…</span>, 즉 <span class=\"chem\">18.0</span> <span class=\"unit\">m</span> (유효숫자 3자리)예요. (<span class=\"chem\">t = 10</span>에서 드론은 더 낮은 약 <span class=\"chem\">6.32</span> <span class=\"unit\">m</span> 위치에 있고, 그 사이에 지면에 닿는 일은 없어요.)</p>",
    },

    // ── t5-2-q031 · numeric · exam · SL · SL 5.5 · 4 marks
    "t5-2-q031": {
      // EN: <p>A function <span class="chem">f</span> satisfies <span class="chem">f'(x) = e^{-x^2}</span> and <span class="chem">f(0) = 2</span>. Find <span class="chem">f(1.5)</span>, correct to 3 significant figures.</p>
      stem: "<p>함수 <span class=\"chem\">f</span>은 <span class=\"chem\">f'(x) = e^{-x^2}</span>와 <span class=\"chem\">f(0) = 2</span>을 만족한다. <span class=\"chem\">f(1.5)</span>를 유효숫자 3자리로 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: this is a boundary-condition question, but <span class="chem">e^{-x^2}</span> has no elementary antiderivative, so you cannot find <span class="chem">f(x)</span> as a formula. Use <span class="chem">f(1.5) = f(0) + int_0^{1.5} f'(x) dx</span> instead.
        "해석: 경계 조건 문제이지만, <span class=\"chem\">e^{-x^2}</span>은 초등적인 원시함수가 없으므로 <span class=\"chem\">f(x)</span>를 식으로 구할 수 없어요. 대신 <span class=\"chem\">f(1.5) = f(0) + int_0^{1.5} f'(x) dx</span>을 쓰세요.",
        // EN: Evaluate <span class="chem">int_0^{1.5} e^{-x^2} dx</span> on your GDC and add <span class="chem">2</span>.
        "GDC로 <span class=\"chem\">int_0^{1.5} e^{-x^2} dx</span>을 계산하고 <span class=\"chem\">2</span>를 더하세요.",
      ],
      // EN: <p>Decode: “find <span class="chem">f</span> from <span class="chem">f'</span> and one point”, done with a definite integral. <span class="chem">f(1.5) - f(0) = int_0^{1.5} e^{-x^2} dx = 0.85619…</span> (GDC). So <span class="chem">f(1.5) = 2 + 0.85619… = 2.85619…</span>, i.e. <span class="chem">2.86</span> (3 s.f.).</p>
      solution: "<p>해석: “<span class=\"chem\">f'</span>와 한 점으로부터 <span class=\"chem\">f</span> 구하기”를 정적분으로 해결해요. <span class=\"chem\">f(1.5) - f(0) = int_0^{1.5} e^{-x^2} dx = 0.85619…</span> (GDC). 따라서 <span class=\"chem\">f(1.5) = 2 + 0.85619… = 2.85619…</span>, 즉 <span class=\"chem\">2.86</span> (유효숫자 3자리)예요.</p>",
    },

    // ── t5-2-q032 · numeric · challenge · SL · SL 5.5, 5.10, 5.11 · 6 marks
    "t5-2-q032": {
      // EN: <p>Given that <span class="chem">k &gt; 1</span> and <span class="chem">int_1^k (1/x + x/4) dx = 3</span>, find the value of <span class="chem">k</span>, correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">k &gt; 1</span>이고 <span class=\"chem\">int_1^k (1/x + x/4) dx = 3</span>일 때, <span class=\"chem\">k</span>의 값을 유효숫자 3자리로 구하시오 (find).</p>",
      hints: [
        // EN: Decode: the unknown is a <strong>limit</strong> of the integral. Integrate first to get an equation in <span class="chem">k</span>, then solve that equation on the GDC (it mixes <span class="chem">ln k</span> and <span class="chem">k^2</span>, so it has no algebraic solution).
        "해석: 미지수는 적분의 <strong>끝</strong>이에요. 먼저 적분하여 <span class=\"chem\">k</span>에 대한 방정식을 만든 다음, 그 방정식을 GDC로 푸세요 (<span class=\"chem\">ln k</span>와 <span class=\"chem\">k^2</span>이 섞여 있어 대수적인 해가 없어요).",
        // EN: An antiderivative is <span class="chem">ln x + x^2/8</span>, so the equation is <span class="chem">ln k + (k^2 - 1)/8 = 3</span>.
        "원시함수 하나는 <span class=\"chem\">ln x + x^2/8</span>이므로, 방정식은 <span class=\"chem\">ln k + (k^2 - 1)/8 = 3</span>예요.",
        // EN: Graph <span class="chem">y = ln x + (x^2 - 1)/8</span> and <span class="chem">y = 3</span> and intersect them for <span class="chem">x &gt; 1</span>.
        "<span class=\"chem\">y = ln x + (x^2 - 1)/8</span>과 <span class=\"chem\">y = 3</span>의 그래프를 그리고 <span class=\"chem\">x &gt; 1</span>에서 교점을 구하세요.",
      ],
      // EN: <p>Decode: unknown upper limit, so integrate and then solve. <span class="chem">int_1^k (1/x + x/4) dx = [ln x + x^2/8]_1^k = ln k + k^2/8 - 1/8</span>. Setting this equal to 3: <span class="chem">ln k + (k^2 - 1)/8 = 3</span>. The left side is increasing for <span class="chem">k &gt; 1</span>, so there is one solution; the GDC gives <span class="chem">k = 3.78762…</span>, i.e. <span class="chem">3.79</span> (3 s.f.). (Alternatively, solve <span class="chem">int_1^k (1/x + x/4) dx - 3 = 0</span> directly with the GDC solver.)</p>
      solution: "<p>해석: 위끝이 미지수이므로 적분한 다음 풀어요. <span class=\"chem\">int_1^k (1/x + x/4) dx = [ln x + x^2/8]_1^k = ln k + k^2/8 - 1/8</span>. 이것을 3과 같다고 놓으면: <span class=\"chem\">ln k + (k^2 - 1)/8 = 3</span>. 좌변은 <span class=\"chem\">k &gt; 1</span>에서 증가하므로 해는 하나예요. GDC로 <span class=\"chem\">k = 3.78762…</span>, 즉 <span class=\"chem\">3.79</span> (유효숫자 3자리)예요. (또는 GDC의 방정식 풀이 기능으로 <span class=\"chem\">int_1^k (1/x + x/4) dx - 3 = 0</span>을 직접 풀어요.)</p>",
    },

    // ── t5-2-q033 · numeric · challenge · SL · SL 5.5 · 7 marks
    "t5-2-q033": {
      // EN: <p>At midnight (<span class="chem">t = 0</span>) a rainwater tank holds <span class="chem">200</span> litres. Over the next 24 hours, water flows in at a rate of <span class="chem">30 + 10 sin(pi t / 12)</span> litres per hour, while water is drawn off for a garden at a rate of <span class="chem">2t</span> litres per hour, where <span class="chem">t</span> is the time in hours after midnight. Find the greatest volume of water in the tank during these 24 hours, correct to 3 significant figures.</p>
      stem: "<p>자정(<span class=\"chem\">t = 0</span>)에 빗물 탱크에는 <span class=\"chem\">200</span>리터의 물이 들어 있다. 이후 24시간 동안 물은 시간당 <span class=\"chem\">30 + 10 sin(pi t / 12)</span>리터의 비율로 들어오고, 동시에 정원에 쓰기 위해 시간당 <span class=\"chem\">2t</span>리터의 비율로 빠져나간다. 여기서 <span class=\"chem\">t</span>는 자정 이후의 시간(시간 단위)이다. 이 24시간 동안 탱크 안 물의 최대 부피를 유효숫자 3자리로 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: this is a net-change problem. The rate of change of volume is (rate in) − (rate out) <span class="chem">= 30 + 10 sin(pi t/12) - 2t</span>, and <span class="chem">V(T) = 200 + int_0^T (rate in - rate out) dt</span>. The volume is greatest when the net rate changes from positive to negative.
        "해석: 순변화 문제예요. 부피의 변화율은 (들어오는 비율) − (나가는 비율) <span class=\"chem\">= 30 + 10 sin(pi t/12) - 2t</span>이고, <span class=\"chem\">V(T) = 200 + int_0^T (rate in - rate out) dt</span>예요. 순비율이 양에서 음으로 바뀔 때 부피가 최대예요.",
        // EN: Solve <span class="chem">30 + 10 sin(pi t / 12) - 2t = 0</span> on the GDC (radians): <span class="chem">t ≈ 13.31</span> hours.
        "GDC(라디안)로 <span class=\"chem\">30 + 10 sin(pi t / 12) - 2t = 0</span>을 푸세요: <span class=\"chem\">t ≈ 13.31</span>시간.",
        // EN: Evaluate <span class="chem">200 + int_0^{13.31} (30 + 10 sin(pi t / 12) - 2t) dt</span>, and check it is bigger than the value at the end points (<span class="chem">V(0) = 200</span>, <span class="chem">V(24) = 344</span>).
        "<span class=\"chem\">200 + int_0^{13.31} (30 + 10 sin(pi t / 12) - 2t) dt</span>을 계산하고, 끝점에서의 값(<span class=\"chem\">V(0) = 200</span>, <span class=\"chem\">V(24) = 344</span>)보다 큰지 확인하세요.",
      ],
      // EN: <p>Decode: “flows in at a rate … drawn off at a rate” describes <span class="chem">dV/dt = 30 + 10 sin(pi t/12) - 2t</span>, and the start volume is a boundary condition. <span class="chem">dV/dt = 0</span> at <span class="chem">t_1 = 13.3138…</span>, with <span class="chem">dV/dt &gt; 0</span> before and <span class="chem">&lt; 0</span> after, so <span class="chem">V</span> has its maximum there. <span class="chem">V(t_1) = 200 + int_0^{t_1} (30 + 10 sin(pi t/12) - 2t) dt = 496.313…</span>. The end values are <span class="chem">V(0) = 200</span> and <span class="chem">V(24) = 200 + 720 + 0 - 576 = 344</span>. The greatest volume is <span class="chem">496</span> litres (3 s.f.).</p>
      solution: "<p>해석: “…의 비율로 들어오고 …의 비율로 빠져나간다”는 <span class=\"chem\">dV/dt = 30 + 10 sin(pi t/12) - 2t</span>을 나타내고, 처음 부피는 경계 조건이에요. <span class=\"chem\">t_1 = 13.3138…</span>에서 <span class=\"chem\">dV/dt = 0</span>이고, 그 전에는 <span class=\"chem\">dV/dt &gt; 0</span>, 그 후에는 <span class=\"chem\">&lt; 0</span>이므로 <span class=\"chem\">V</span>은 그곳에서 최댓값을 가져요. <span class=\"chem\">V(t_1) = 200 + int_0^{t_1} (30 + 10 sin(pi t/12) - 2t) dt = 496.313…</span>. 끝점에서의 값은 <span class=\"chem\">V(0) = 200</span>과 <span class=\"chem\">V(24) = 200 + 720 + 0 - 576 = 344</span>예요. 최대 부피는 <span class=\"chem\">496</span>리터 (유효숫자 3자리)예요.</p>",
    },

    // ── t5-2-q034 · numeric · exam · SL · SL 5.5, 5.11 · 5 marks
    "t5-2-q034": {
      // EN: <p>The curves <span class="chem">y = x^2 - 4</span> and <span class="chem">y = -2 cos x</span> enclose a finite region <span class="chem">R</span>, most of which lies below the <span class="chem">x</span>-axis. Find the area of <span class="chem">R</span>, correct to 3 significant figures.</p>
      stem: "<p>곡선 <span class=\"chem\">y = x^2 - 4</span>과 <span class=\"chem\">y = -2 cos x</span>는 유한 영역 <span class=\"chem\">R</span>을 둘러싸며, 그 대부분은 <span class=\"chem\">x</span>축 아래에 있다. <span class=\"chem\">R</span>의 넓이를 유효숫자 3자리로 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: the region being below the <span class="chem">x</span>-axis does not change the method for the area between two curves. Integrate (upper curve − lower curve) between the intersections; you do not split at the <span class="chem">x</span>-axis.
        "해석: 영역이 <span class=\"chem\">x</span>축 아래에 있어도 두 곡선 사이의 넓이를 구하는 방법은 바뀌지 않아요. 교점 사이에서 (위쪽 곡선 − 아래쪽 곡선)을 적분하세요. <span class=\"chem\">x</span>축에서 나눌 필요는 없어요.",
        // EN: In radians, the curves intersect at <span class="chem">x ≈ ±2.3136</span>. At <span class="chem">x = 0</span>: <span class="chem">-2 cos 0 = -2</span> and <span class="chem">0^2 - 4 = -4</span>, so <span class="chem">y = -2 cos x</span> is the upper curve.
        "라디안에서 두 곡선은 <span class=\"chem\">x ≈ ±2.3136</span>에서 만나요. <span class=\"chem\">x = 0</span>에서 <span class=\"chem\">-2 cos 0 = -2</span>, <span class=\"chem\">0^2 - 4 = -4</span>이므로 <span class=\"chem\">y = -2 cos x</span>가 위쪽 곡선이에요.",
        // EN: Evaluate <span class="chem">int_{-2.3136}^{2.3136} (-2 cos x - x^2 + 4) dx</span>.
        "<span class=\"chem\">int_{-2.3136}^{2.3136} (-2 cos x - x^2 + 4) dx</span>을 계산하세요.",
      ],
      // EN: <p>Solving <span class="chem">x^2 - 4 = -2 cos x</span> on the GDC gives <span class="chem">x = ±2.31358…</span>. Between them, <span class="chem">-2 cos x &gt;= x^2 - 4</span>. Area <span class="chem">= int_{-2.31358}^{2.31358} (-2 cos x - (x^2 - 4)) dx = 7.30642…</span>, so <span class="chem">7.31</span> (3 s.f.). Because the integrand is (upper − lower) ≥ 0, the answer is positive even though both curves are below the axis for much of the interval.</p>
      solution: "<p>GDC로 <span class=\"chem\">x^2 - 4 = -2 cos x</span>을 풀면 <span class=\"chem\">x = ±2.31358…</span>예요. 그 사이에서 <span class=\"chem\">-2 cos x &gt;= x^2 - 4</span>이에요. 넓이는 <span class=\"chem\">= int_{-2.31358}^{2.31358} (-2 cos x - (x^2 - 4)) dx = 7.30642…</span>이므로 <span class=\"chem\">7.31</span> (유효숫자 3자리)예요. 피적분함수가 (위쪽 − 아래쪽) ≥ 0이므로, 구간의 대부분에서 두 곡선이 모두 축 아래에 있어도 답은 양수예요.</p>",
    },

    // ── t5-2-q035 · numeric · foundation · SL · SL 5.5, 5.11 · 3 marks
    "t5-2-q035": {
      // EN: <p>Find the value of <span class="chem">int_1^2 (3x^2 + 2/x^2) dx</span>.</p>
      stem: "<p><span class=\"chem\">int_1^2 (3x^2 + 2/x^2) dx</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Write <span class="chem">2/x^2</span> as <span class="chem">2x^{-2}</span>, which integrates to <span class="chem">2x^{-1}/(-1) = -2/x</span>.
        "<span class=\"chem\">2/x^2</span>을 <span class=\"chem\">2x^{-2}</span>로 쓰면, 적분은 <span class=\"chem\">2x^{-1}/(-1) = -2/x</span>이 돼요.",
        // EN: Evaluate <span class="chem">[x^3 - 2/x]_1^2</span> as <span class="chem">F(2) - F(1)</span>, keeping brackets around <span class="chem">F(1)</span>.
        "<span class=\"chem\">F(1)</span>의 괄호를 그대로 두고, <span class=\"chem\">[x^3 - 2/x]_1^2</span>을 <span class=\"chem\">F(2) - F(1)</span>로 계산하세요.",
      ],
      // EN: <p><span class="chem">int_1^2 (3x^2 + 2x^{-2}) dx = [x^3 - 2/x]_1^2 = (8 - 1) - (1 - 2) = 7 + 1 = 8</span>.</p>
      solution: "<p><span class=\"chem\">int_1^2 (3x^2 + 2x^{-2}) dx = [x^3 - 2/x]_1^2 = (8 - 1) - (1 - 2) = 7 + 1 = 8</span>.</p>",
    },

    // ── t5-2-q036 · mcq · foundation · SL · SL 5.10 · 2 marks
    "t5-2-q036": {
      // EN: <p>Find <span class="chem">int sin(3x - 1) dx</span>.</p>
      stem: "<p><span class=\"chem\">int sin(3x - 1) dx</span>을 구하시오 (Find).</p>",
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
        "<span class=\"chem\">int sin(ax + b) dx = -(1/a) cos(ax + b) + C</span>을 이용하세요.",
        // EN: Check by differentiating your answer: the chain rule should bring out a factor <span class="chem">3</span> that cancels the <span class="chem">1/3</span>.
        "답을 미분하여 확인하세요. 연쇄법칙에 의해 인수 <span class=\"chem\">3</span>이 나와서 <span class=\"chem\">1/3</span>와 약분되어야 해요.",
      ],
      // EN: <p>With <span class="chem">a = 3</span>: <span class="chem">int sin(3x - 1) dx = -(1/3) cos(3x - 1) + C</span>. Check: <span class="chem">d/dx(-(1/3) cos(3x - 1)) = -(1/3)(-sin(3x - 1))(3) = sin(3x - 1)</span>.</p>
      solution: "<p><span class=\"chem\">a = 3</span>을 이용하면: <span class=\"chem\">int sin(3x - 1) dx = -(1/3) cos(3x - 1) + C</span>. 확인: <span class=\"chem\">d/dx(-(1/3) cos(3x - 1)) = -(1/3)(-sin(3x - 1))(3) = sin(3x - 1)</span>.</p>",
      misconception: {
        // EN (option A): You divided by 3 correctly but lost the minus sign: the integral of sin u is −cos u, so the answer is −(1/3) cos(3x − 1) + C.
        "0": "3으로는 바르게 나누었지만 마이너스 부호를 빠뜨렸어요. sin u의 적분은 −cos u이므로 답은 −(1/3) cos(3x − 1) + C예요.",
        // EN (option B): You multiplied by the inner coefficient 3 (as in the chain rule for differentiation) instead of dividing by it.
        "1": "안쪽 계수 3으로 나누지 않고, (미분의 연쇄법칙처럼) 곱해 버렸어요.",
        // EN (option D): You integrated the inside 3x − 1 as well. For a linear composite f(ax + b), keep the bracket unchanged and divide by a.
        "3": "안쪽의 3x − 1까지 적분해 버렸어요. 일차식과의 합성함수 f(ax + b)에서는 괄호를 그대로 두고 a로 나눠요.",
      },
    },

    // ── t5-2-q037 · numeric · foundation · SL · SL 5.5, 5.9 · 3 marks
    "t5-2-q037": {
      // EN: <p>A particle moves in a straight line with velocity <span class="chem">v(t) = 3t^2 - 2t + 1</span> <span class="unit">m s-1</span>, where <span class="chem">t</span> is in seconds. Its displacement from a fixed point <span class="chem">O</span> at <span class="chem">t = 0</span> is <span class="chem">4</span> <span class="unit">m</span>. Find its displacement from <span class="chem">O</span> when <span class="chem">t = 2</span>.</p>
      stem: "<p>한 입자가 속도 <span class=\"chem\">v(t) = 3t^2 - 2t + 1</span> <span class=\"unit\">m s-1</span>로 직선 위를 움직이며, <span class=\"chem\">t</span>은 초 단위이다. <span class=\"chem\">t = 0</span>에서 고정점 <span class=\"chem\">O</span>로부터의 변위는 <span class=\"chem\">4</span> <span class=\"unit\">m</span>이다. <span class=\"chem\">t = 2</span>일 때 <span class=\"chem\">O</span>로부터의 변위를 구하시오 (Find).</p>",
      hints: [
        // EN: Displacement is the antiderivative of velocity: <span class="chem">s(t) = t^3 - t^2 + t + C</span>.
        "변위는 속도의 원시함수예요: <span class=\"chem\">s(t) = t^3 - t^2 + t + C</span>.",
        // EN: Use <span class="chem">s(0) = 4</span> to find <span class="chem">C</span>, then substitute <span class="chem">t = 2</span>.
        "<span class=\"chem\">s(0) = 4</span>을 이용하여 <span class=\"chem\">C</span>를 구한 다음, <span class=\"chem\">t = 2</span>을 대입하세요.",
      ],
      // EN: <p><span class="chem">s(t) = int (3t^2 - 2t + 1) dt = t^3 - t^2 + t + C</span>. Since <span class="chem">s(0) = 4</span>, <span class="chem">C = 4</span>. Then <span class="chem">s(2) = 8 - 4 + 2 + 4 = 10</span> <span class="unit">m</span>.</p>
      solution: "<p><span class=\"chem\">s(t) = int (3t^2 - 2t + 1) dt = t^3 - t^2 + t + C</span>. <span class=\"chem\">s(0) = 4</span>이므로 <span class=\"chem\">C = 4</span>. 그러면 <span class=\"chem\">s(2) = 8 - 4 + 2 + 4 = 10</span> <span class=\"unit\">m</span>예요.</p>",
    },

    // ── t5-2-q038 · short · exam · SL · SL 5.10 · 6 marks
    "t5-2-q038": {
      // EN: <p>Find each of the following.<br>(a) <span class="chem">int (2x + 1)^5 dx</span> <strong>[2 marks]</strong><br>(b) <span class="chem">int 6/(3x - 2) dx</span>, for <span class="chem">x &gt; 2/3</span> <strong>[2 marks]</strong><br>(c) <span class="chem">int 4e^{1 - 2x} dx</span> <strong>[2 marks]</strong></p>
      stem: "<p>다음을 각각 구하시오 (Find).<br>(a) <span class=\"chem\">int (2x + 1)^5 dx</span> <strong>[2 marks]</strong><br>(b) <span class=\"chem\">int 6/(3x - 2) dx</span> (단, <span class=\"chem\">x &gt; 2/3</span>) <strong>[2 marks]</strong><br>(c) <span class=\"chem\">int 4e^{1 - 2x} dx</span> <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Each integrand is a standard function of a linear expression <span class="chem">ax + b</span>: integrate as usual, keep the bracket, and divide by <span class="chem">a</span>.
        "각 피적분함수는 일차식 <span class=\"chem\">ax + b</span>의 기본 함수예요. 평소처럼 적분하고, 괄호는 그대로 두고, <span class=\"chem\">a</span>로 나누세요.",
        // EN: In (c) the inner coefficient is <span class="chem">a = -2</span>, so dividing by it changes the sign.
        "(c)에서는 안쪽 계수가 <span class=\"chem\">a = -2</span>이므로, 그것으로 나누면 부호가 바뀌어요.",
      ],
      // EN: <p>(a) <span class="chem">int (2x + 1)^5 dx = (2x + 1)^6 / (6 × 2) + C = (2x + 1)^6 / 12 + C</span>.<br>(b) <span class="chem">int 6/(3x - 2) dx = 6 × (1/3) ln|3x - 2| + C = 2 ln(3x - 2) + C</span>, since <span class="chem">3x - 2 &gt; 0</span>.<br>(c) <span class="chem">int 4e^{1 - 2x} dx = 4 × (1/(-2)) e^{1 - 2x} + C = -2e^{1 - 2x} + C</span>.</p>
      solution: "<p>(a) <span class=\"chem\">int (2x + 1)^5 dx = (2x + 1)^6 / (6 × 2) + C = (2x + 1)^6 / 12 + C</span>.<br>(b) <span class=\"chem\">3x - 2 &gt; 0</span>이므로 <span class=\"chem\">int 6/(3x - 2) dx = 6 × (1/3) ln|3x - 2| + C = 2 ln(3x - 2) + C</span>.<br>(c) <span class=\"chem\">int 4e^{1 - 2x} dx = 4 × (1/(-2)) e^{1 - 2x} + C = -2e^{1 - 2x} + C</span>.</p>",
      // EN: <p>(a) <span class="chem">(2x + 1)^6 / 12 + C</span><br>(b) <span class="chem">2 ln(3x - 2) + C</span><br>(c) <span class="chem">-2e^{1 - 2x} + C</span></p>
      answer: "<p>(a) <span class=\"chem\">(2x + 1)^6 / 12 + C</span><br>(b) <span class=\"chem\">2 ln(3x - 2) + C</span><br>(c) <span class=\"chem\">-2e^{1 - 2x} + C</span></p>",
      markscheme: [
        // EN: M1: Power <span class="chem">(2x + 1)^6</span> with a division by the inner coefficient <span class="chem">2</span>.
        "M1: 거듭제곱 <span class=\"chem\">(2x + 1)^6</span>과 안쪽 계수 <span class=\"chem\">2</span>로 나눔.",
        // EN: A1: <span class="chem">(2x + 1)^6 / 12 + C</span>.
        "A1: <span class=\"chem\">(2x + 1)^6 / 12 + C</span>.",
        // EN: M1: Logarithm form <span class="chem">k ln(3x - 2)</span>.
        "M1: 로그 꼴 <span class=\"chem\">k ln(3x - 2)</span>.",
        // EN: A1: <span class="chem">2 ln(3x - 2) + C</span> (modulus not needed as <span class="chem">x &gt; 2/3</span>).
        "A1: <span class=\"chem\">2 ln(3x - 2) + C</span> (<span class=\"chem\">x &gt; 2/3</span>이므로 절댓값 필요 없음).",
        // EN: M1: Exponential form <span class="chem">k e^{1 - 2x}</span>.
        "M1: 지수 꼴 <span class=\"chem\">k e^{1 - 2x}</span>.",
        // EN: A1: <span class="chem">-2e^{1 - 2x} + C</span>.
        "A1: <span class=\"chem\">-2e^{1 - 2x} + C</span>.",
      ],
    },

    // ── t5-2-q039 · numeric · exam · SL · SL 3.6, 5.10, 5.11 · 5 marks
    "t5-2-q039": {
      // EN: <p>Find the exact value of <span class="chem">int_0^{pi/4} (sin x + cos x)^2 dx</span>.</p>
      stem: "<p><span class=\"chem\">int_0^{pi/4} (sin x + cos x)^2 dx</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: you cannot integrate a squared bracket of trig functions directly. Expand it and use identities to turn it into terms you can integrate.
        "해석: 삼각함수 괄호의 제곱은 바로 적분할 수 없어요. 전개하고 공식을 이용하여 적분할 수 있는 항으로 바꾸세요.",
        // EN: <span class="chem">(sin x + cos x)^2 = sin^2 x + cos^2 x + 2 sin x cos x = 1 + sin(2x)</span>.
        "<span class=\"chem\">(sin x + cos x)^2 = sin^2 x + cos^2 x + 2 sin x cos x = 1 + sin(2x)</span>.",
        // EN: <span class="chem">int sin(2x) dx = -(1/2) cos(2x)</span>. Then use <span class="chem">cos(pi/2) = 0</span> and <span class="chem">cos 0 = 1</span>.
        "<span class=\"chem\">int sin(2x) dx = -(1/2) cos(2x)</span>. 그다음 <span class=\"chem\">cos(pi/2) = 0</span>와 <span class=\"chem\">cos 0 = 1</span>을 이용하세요.",
      ],
      // EN: <p>Expanding, <span class="chem">(sin x + cos x)^2 = 1 + 2 sin x cos x = 1 + sin(2x)</span>. So <span class="chem">int_0^{pi/4} (1 + sin(2x)) dx = [x - (1/2) cos(2x)]_0^{pi/4} = (pi/4 - (1/2)(0)) - (0 - 1/2) = pi/4 + 1/2</span>.</p>
      solution: "<p>전개하면 <span class=\"chem\">(sin x + cos x)^2 = 1 + 2 sin x cos x = 1 + sin(2x)</span>. 따라서 <span class=\"chem\">int_0^{pi/4} (1 + sin(2x)) dx = [x - (1/2) cos(2x)]_0^{pi/4} = (pi/4 - (1/2)(0)) - (0 - 1/2) = pi/4 + 1/2</span>예요.</p>",
    },

    // ── t5-2-q040 · numeric · exam · SL · SL 5.10, 5.11 · 4 marks
    "t5-2-q040": {
      // EN: <p>Find the exact value of <span class="chem">int_0^1 x(x^2 + 1)^3 dx</span>.</p>
      stem: "<p><span class=\"chem\">int_0^1 x(x^2 + 1)^3 dx</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: The factor <span class="chem">x</span> is (half of) the derivative of the inner function <span class="chem">x^2 + 1</span>: this is the reverse chain rule pattern <span class="chem">int g'(x) [g(x)]^n dx</span>.
        "인수 <span class=\"chem\">x</span>은 안쪽 함수 <span class=\"chem\">x^2 + 1</span>의 도함수(의 절반)예요. 이것은 연쇄법칙의 역 패턴 <span class=\"chem\">int g'(x) [g(x)]^n dx</span>이에요.",
        // EN: Let <span class="chem">u = x^2 + 1</span>, so <span class="chem">du = 2x dx</span> and the limits become <span class="chem">u = 1</span> to <span class="chem">u = 2</span>.
        "<span class=\"chem\">u = x^2 + 1</span>로 놓으면 <span class=\"chem\">du = 2x dx</span>이고, 적분 구간은 <span class=\"chem\">u = 1</span>에서 <span class=\"chem\">u = 2</span>로 바뀌어요.",
      ],
      // EN: <p>With <span class="chem">u = x^2 + 1</span>, <span class="chem">x dx = (1/2) du</span>, and <span class="chem">x = 0, 1</span> give <span class="chem">u = 1, 2</span>. So the integral is <span class="chem">(1/2) int_1^2 u^3 du = (1/2)[u^4/4]_1^2 = (1/8)(16 - 1) = 15/8</span>.</p>
      solution: "<p><span class=\"chem\">u = x^2 + 1</span>로 놓으면 <span class=\"chem\">x dx = (1/2) du</span>이고, <span class=\"chem\">x = 0, 1</span>에서 <span class=\"chem\">u = 1, 2</span>를 얻어요. 따라서 적분은 <span class=\"chem\">(1/2) int_1^2 u^3 du = (1/2)[u^4/4]_1^2 = (1/8)(16 - 1) = 15/8</span>예요.</p>",
    },

    // ── t5-2-q041 · numeric · exam · SL · SL 5.10, 5.11 · 4 marks
    "t5-2-q041": {
      // EN: <p>Find the exact value of <span class="chem">int_0^{ln 2} e^x / (e^x + 1) dx</span>, giving your answer as a single logarithm.</p>
      stem: "<p><span class=\"chem\">int_0^{ln 2} e^x / (e^x + 1) dx</span>의 정확한 값을 구하고, 답을 하나의 로그로 나타내시오 (Find).</p>",
      hints: [
        // EN: The numerator <span class="chem">e^x</span> is exactly the derivative of the denominator <span class="chem">e^x + 1</span>, so the integral is of the form <span class="chem">int g'(x)/g(x) dx = ln|g(x)| + C</span>.
        "분자 <span class=\"chem\">e^x</span>은 정확히 분모 <span class=\"chem\">e^x + 1</span>의 도함수이므로, 적분은 <span class=\"chem\">int g'(x)/g(x) dx = ln|g(x)| + C</span>의 꼴이에요.",
        // EN: Evaluate <span class="chem">[ln(e^x + 1)]_0^{ln 2}</span> using <span class="chem">e^{ln 2} = 2</span>.
        "<span class=\"chem\">e^{ln 2} = 2</span>를 이용하여 <span class=\"chem\">[ln(e^x + 1)]_0^{ln 2}</span>을 계산하세요.",
      ],
      // EN: <p><span class="chem">int_0^{ln 2} e^x / (e^x + 1) dx = [ln(e^x + 1)]_0^{ln 2} = ln(2 + 1) - ln(1 + 1) = ln 3 - ln 2 = ln(3/2)</span>.</p>
      solution: "<p><span class=\"chem\">int_0^{ln 2} e^x / (e^x + 1) dx = [ln(e^x + 1)]_0^{ln 2} = ln(2 + 1) - ln(1 + 1) = ln 3 - ln 2 = ln(3/2)</span>.</p>",
    },

    // ── t5-2-q042 · short · exam · SL · SL 5.11 · 8 marks
    "t5-2-q042": {
      // EN: <p>Let <span class="chem">f(x) = x^2 - 4x + 3</span>.<br>(a) Find the <span class="chem">x</span>-intercepts of the graph of <span class="chem">f</span>. <strong>[2 marks]</strong><br>(b) Find the value of <span class="chem">int_0^4 f(x) dx</span>. <strong>[2 marks]</strong><br>(c) Find the total area of the regions enclosed by the graph of <span class="chem">f</span>, the <span class="chem">x</span>-axis and the lines <span class="chem">x = 0</span> and <span class="chem">x = 4</span>. <strong>[3 marks]</strong><br>(d) Explain why your answers to (b) and (c) are different. <strong>[1 mark]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = x^2 - 4x + 3</span>이라 하자.<br>(a) <span class=\"chem\">f</span>의 그래프의 <span class=\"chem\">x</span>절편을 구하시오 (Find). <strong>[2 marks]</strong><br>(b) <span class=\"chem\">int_0^4 f(x) dx</span>의 값을 구하시오 (Find). <strong>[2 marks]</strong><br>(c) <span class=\"chem\">f</span>의 그래프, <span class=\"chem\">x</span>축, 직선 <span class=\"chem\">x = 0</span>과 <span class=\"chem\">x = 4</span>로 둘러싸인 영역들의 넓이의 합을 구하시오 (Find). <strong>[3 marks]</strong><br>(d) (b)와 (c)의 답이 다른 이유를 설명하시오 (Explain). <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: (b) asks for a signed integral, (c) asks for an area. They are equal only when the curve stays above the axis.
        "해석: (b)는 부호가 있는 적분을, (c)는 넓이를 묻고 있어요. 두 값은 곡선이 계속 축 위에 있을 때만 같아요.",
        // EN: Let <span class="chem">F(x) = x^3/3 - 2x^2 + 3x</span>. Then <span class="chem">F(0) = 0</span>, <span class="chem">F(1) = 4/3</span>, <span class="chem">F(3) = 0</span>, <span class="chem">F(4) = 4/3</span>.
        "<span class=\"chem\">F(x) = x^3/3 - 2x^2 + 3x</span>이라 하면 <span class=\"chem\">F(0) = 0</span>, <span class=\"chem\">F(1) = 4/3</span>, <span class=\"chem\">F(3) = 0</span>, <span class=\"chem\">F(4) = 4/3</span>예요.",
        // EN: For (c), find <span class="chem">int_0^1</span>, <span class="chem">int_1^3</span> and <span class="chem">int_3^4</span> separately and add their absolute values.
        "(c)에서는 <span class=\"chem\">int_0^1</span>, <span class=\"chem\">int_1^3</span>, <span class=\"chem\">int_3^4</span>을 각각 구하고 그 절댓값을 더하세요.",
      ],
      // EN: <p>(a) <span class="chem">x^2 - 4x + 3 = (x - 1)(x - 3) = 0</span>, so <span class="chem">x = 1, 3</span>.<br>(b) With <span class="chem">F(x) = x^3/3 - 2x^2 + 3x</span>: <span class="chem">int_0^4 f(x) dx = F(4) - F(0) = 64/3 - 32 + 12 = 4/3</span>.<br>(c) <span class="chem">int_0^1 f = F(1) - F(0) = 4/3</span>; <span class="chem">int_1^3 f = F(3) - F(1) = 0 - 4/3 = -4/3</span>; <span class="chem">int_3^4 f = F(4) - F(3) = 4/3</span>. Total area <span class="chem">= 4/3 + 4/3 + 4/3 = 4</span>.<br>(d) <span class="chem">f &lt; 0</span> on <span class="chem">(1, 3)</span>, so that region counts negatively in the integral: <span class="chem">4/3 - 4/3 + 4/3 = 4/3</span>. Area counts it positively.</p>
      solution: "<p>(a) <span class=\"chem\">x^2 - 4x + 3 = (x - 1)(x - 3) = 0</span>이므로 <span class=\"chem\">x = 1, 3</span>.<br>(b) <span class=\"chem\">F(x) = x^3/3 - 2x^2 + 3x</span>을 이용하면: <span class=\"chem\">int_0^4 f(x) dx = F(4) - F(0) = 64/3 - 32 + 12 = 4/3</span>.<br>(c) <span class=\"chem\">int_0^1 f = F(1) - F(0) = 4/3</span>; <span class=\"chem\">int_1^3 f = F(3) - F(1) = 0 - 4/3 = -4/3</span>; <span class=\"chem\">int_3^4 f = F(4) - F(3) = 4/3</span>. 넓이의 합은 <span class=\"chem\">= 4/3 + 4/3 + 4/3 = 4</span>이에요.<br>(d) <span class=\"chem\">(1, 3)</span>에서 <span class=\"chem\">f &lt; 0</span>이므로, 그 영역은 적분에서 음수로 세어져요: <span class=\"chem\">4/3 - 4/3 + 4/3 = 4/3</span>. 넓이에서는 양수로 세요.</p>",
      // EN: <p>(a) <span class="chem">x = 1</span> and <span class="chem">x = 3</span><br>(b) <span class="chem">4/3</span><br>(c) <span class="chem">4</span><br>(d) The region between <span class="chem">x = 1</span> and <span class="chem">x = 3</span> is below the axis, so it contributes <span class="chem">-4/3</span> to the integral but <span class="chem">+4/3</span> to the area.</p>
      answer: "<p>(a) <span class=\"chem\">x = 1</span>과 <span class=\"chem\">x = 3</span><br>(b) <span class=\"chem\">4/3</span><br>(c) <span class=\"chem\">4</span><br>(d) <span class=\"chem\">x = 1</span>와 <span class=\"chem\">x = 3</span> 사이의 영역은 축 아래에 있으므로, 적분에는 <span class=\"chem\">-4/3</span>만큼, 넓이에는 <span class=\"chem\">+4/3</span>만큼 기여해요.</p>",
      markscheme: [
        // EN: M1: Factorises <span class="chem">(x - 1)(x - 3) = 0</span> (or uses the quadratic formula).
        "M1: <span class=\"chem\">(x - 1)(x - 3) = 0</span>을 인수분해함 (또는 근의 공식을 이용함).",
        // EN: A1: <span class="chem">x = 1</span> and <span class="chem">x = 3</span>.
        "A1: <span class=\"chem\">x = 1</span>과 <span class=\"chem\">x = 3</span>.",
        // EN: M1: Antiderivative <span class="chem">x^3/3 - 2x^2 + 3x</span> evaluated from 0 to 4.
        "M1: 원시함수 <span class=\"chem\">x^3/3 - 2x^2 + 3x</span>을 0부터 4까지 계산함.",
        // EN: A1: <span class="chem">64/3 - 32 + 12 = 4/3</span>.
        "A1: <span class=\"chem\">64/3 - 32 + 12 = 4/3</span>.",
        // EN: M1: Splits at <span class="chem">x = 1</span> and <span class="chem">x = 3</span> and takes absolute values of the pieces.
        "M1: <span class=\"chem\">x = 1</span>과 <span class=\"chem\">x = 3</span>에서 나누고 각 조각의 절댓값을 취함.",
        // EN: A1: Pieces <span class="chem">4/3</span>, <span class="chem">-4/3</span>, <span class="chem">4/3</span>.
        "A1: 각 조각 <span class=\"chem\">4/3</span>, <span class=\"chem\">-4/3</span>, <span class=\"chem\">4/3</span>.",
        // EN: A1: Total area <span class="chem">= 4</span>.
        "A1: 넓이의 합 <span class=\"chem\">= 4</span>.",
        // EN: R1: The integral is signed: the part below the axis on <span class="chem">(1, 3)</span> is negative and cancels some of the positive parts, whereas area counts every region as positive.
        "R1: 적분은 부호를 가짐: <span class=\"chem\">(1, 3)</span>에서 축 아래에 있는 부분은 음수가 되어 양수 부분의 일부를 상쇄하지만, 넓이는 모든 영역을 양수로 셈.",
      ],
    },

    // ── t5-2-q043 · short · exam · SL · SL 5.9 · 9 marks
    "t5-2-q043": {
      // EN: <p>A particle starts at a fixed point <span class="chem">O</span> and moves in a straight line with velocity <span class="chem">v(t) = t^2 - 6t + 8</span> <span class="unit">m s-1</span>, for <span class="chem">0 &lt;= t &lt;= 5</span>, where <span class="chem">t</span> is in seconds.<br>(a) Find the values of <span class="chem">t</span> when the particle is at rest. <strong>[2 marks]</strong><br>(b) Find the acceleration of the particle when <span class="chem">t = 4</span>. <strong>[2 marks]</strong><br>(c) Find the displacement of the particle from <span class="chem">O</span> when <span class="chem">t = 5</span>. <strong>[2 marks]</strong><br>(d) Find the total distance travelled by the particle for <span class="chem">0 &lt;= t &lt;= 5</span>. <strong>[3 marks]</strong></p>
      stem: "<p>한 입자가 고정점 <span class=\"chem\">O</span>에서 출발하여 <span class=\"chem\">0 &lt;= t &lt;= 5</span>에서 속도 <span class=\"chem\">v(t) = t^2 - 6t + 8</span> <span class=\"unit\">m s-1</span>으로 직선 위를 움직이며, <span class=\"chem\">t</span>는 초 단위이다.<br>(a) 입자가 정지해 있을 때 <span class=\"chem\">t</span>의 값을 구하시오 (Find). <strong>[2 marks]</strong><br>(b) <span class=\"chem\">t = 4</span>일 때 입자의 가속도를 구하시오 (Find). <strong>[2 marks]</strong><br>(c) <span class=\"chem\">t = 5</span>일 때 <span class=\"chem\">O</span>로부터 입자의 변위를 구하시오 (Find). <strong>[2 marks]</strong><br>(d) <span class=\"chem\">0 &lt;= t &lt;= 5</span>에서 입자가 움직인 총 이동 거리를 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: “at rest” means <span class="chem">v = 0</span>; displacement uses <span class="chem">int v dt</span>; total distance uses <span class="chem">int |v| dt</span>, so you must split at every time from (a).
        "해석: “정지”는 <span class=\"chem\">v = 0</span>을 뜻해요. 변위는 <span class=\"chem\">int v dt</span>를, 총 이동 거리는 <span class=\"chem\">int |v| dt</span>을 이용하므로 (a)에서 구한 모든 시각에서 나눠야 해요.",
        // EN: Let <span class="chem">s(t) = t^3/3 - 3t^2 + 8t</span> (this already has <span class="chem">s(0) = 0</span>). Find <span class="chem">s(2)</span>, <span class="chem">s(4)</span> and <span class="chem">s(5)</span>.
        "<span class=\"chem\">s(t) = t^3/3 - 3t^2 + 8t</span>로 놓으세요 (이미 <span class=\"chem\">s(0) = 0</span>를 만족해요). <span class=\"chem\">s(2)</span>, <span class=\"chem\">s(4)</span>, <span class=\"chem\">s(5)</span>를 구하세요.",
      ],
      // EN: <p>(a) <span class="chem">(t - 2)(t - 4) = 0</span>, so <span class="chem">t = 2</span> or <span class="chem">t = 4</span>.<br>(b) <span class="chem">a(t) = 2t - 6</span>, so <span class="chem">a(4) = 2</span> <span class="unit">m s-2</span>.<br>(c) <span class="chem">s(t) = t^3/3 - 3t^2 + 8t</span> (with <span class="chem">s(0) = 0</span>), so <span class="chem">s(5) = 125/3 - 75 + 40 = 20/3</span> <span class="unit">m</span>.<br>(d) <span class="chem">s(2) = 8/3 - 12 + 16 = 20/3</span>, <span class="chem">s(4) = 64/3 - 48 + 32 = 16/3</span>. Distance <span class="chem">= |20/3 - 0| + |16/3 - 20/3| + |20/3 - 16/3| = 20/3 + 4/3 + 4/3 = 28/3</span> <span class="unit">m</span>.</p>
      solution: "<p>(a) <span class=\"chem\">(t - 2)(t - 4) = 0</span>이므로 <span class=\"chem\">t = 2</span> 또는 <span class=\"chem\">t = 4</span>.<br>(b) <span class=\"chem\">a(t) = 2t - 6</span>이므로 <span class=\"chem\">a(4) = 2</span> <span class=\"unit\">m s-2</span>.<br>(c) <span class=\"chem\">s(t) = t^3/3 - 3t^2 + 8t</span> (<span class=\"chem\">s(0) = 0</span>)이므로 <span class=\"chem\">s(5) = 125/3 - 75 + 40 = 20/3</span> <span class=\"unit\">m</span>.<br>(d) <span class=\"chem\">s(2) = 8/3 - 12 + 16 = 20/3</span>, <span class=\"chem\">s(4) = 64/3 - 48 + 32 = 16/3</span>. 이동 거리 <span class=\"chem\">= |20/3 - 0| + |16/3 - 20/3| + |20/3 - 16/3| = 20/3 + 4/3 + 4/3 = 28/3</span> <span class=\"unit\">m</span>.</p>",
      // EN: <p>(a) <span class="chem">t = 2</span> and <span class="chem">t = 4</span><br>(b) <span class="chem">2</span> <span class="unit">m s-2</span><br>(c) <span class="chem">20/3</span> <span class="unit">m</span><br>(d) <span class="chem">28/3</span> <span class="unit">m</span></p>
      answer: "<p>(a) <span class=\"chem\">t = 2</span>과 <span class=\"chem\">t = 4</span><br>(b) <span class=\"chem\">2</span> <span class=\"unit\">m s-2</span><br>(c) <span class=\"chem\">20/3</span> <span class=\"unit\">m</span><br>(d) <span class=\"chem\">28/3</span> <span class=\"unit\">m</span></p>",
      markscheme: [
        // EN: M1: Solves <span class="chem">t^2 - 6t + 8 = (t - 2)(t - 4) = 0</span>.
        "M1: <span class=\"chem\">t^2 - 6t + 8 = (t - 2)(t - 4) = 0</span>을 풂.",
        // EN: A1: <span class="chem">t = 2</span> and <span class="chem">t = 4</span>.
        "A1: <span class=\"chem\">t = 2</span>과 <span class=\"chem\">t = 4</span>.",
        // EN: M1: <span class="chem">a(t) = v'(t) = 2t - 6</span>.
        "M1: <span class=\"chem\">a(t) = v'(t) = 2t - 6</span>.",
        // EN: A1: <span class="chem">a(4) = 2</span> <span class="unit">m s-2</span>.
        "A1: <span class=\"chem\">a(4) = 2</span> <span class=\"unit\">m s-2</span>.",
        // EN: M1: <span class="chem">s(5) = int_0^5 (t^2 - 6t + 8) dt = [t^3/3 - 3t^2 + 8t]_0^5</span>.
        "M1: <span class=\"chem\">s(5) = int_0^5 (t^2 - 6t + 8) dt = [t^3/3 - 3t^2 + 8t]_0^5</span>.",
        // EN: A1: <span class="chem">20/3</span> <span class="unit">m</span>.
        "A1: <span class=\"chem\">20/3</span> <span class=\"unit\">m</span>.",
        // EN: M1: Splits the distance integral at <span class="chem">t = 2</span> and <span class="chem">t = 4</span> (or uses <span class="chem">s(0), s(2), s(4), s(5)</span>).
        "M1: 이동 거리 적분을 <span class=\"chem\">t = 2</span>과 <span class=\"chem\">t = 4</span>에서 나눔 (또는 <span class=\"chem\">s(0), s(2), s(4), s(5)</span>을 이용함).",
        // EN: A1: Legs of <span class="chem">20/3</span>, <span class="chem">4/3</span> and <span class="chem">4/3</span> <span class="unit">m</span>.
        "A1: 각 구간의 이동 거리 <span class=\"chem\">20/3</span>, <span class=\"chem\">4/3</span>, <span class=\"chem\">4/3</span> <span class=\"unit\">m</span>.",
        // EN: A1: Total distance <span class="chem">28/3</span> <span class="unit">m</span>.
        "A1: 총 이동 거리 <span class=\"chem\">28/3</span> <span class=\"unit\">m</span>.",
      ],
    },

    // ── t5-2-q044 · numeric · exam · SL · SL 5.5 · 4 marks
    "t5-2-q044": {
      // EN: <p>The gradient of a curve is given by <span class="chem">dy/dx = 6x - 4/x^3</span>, for <span class="chem">x &gt; 0</span>. The curve passes through the point <span class="chem">(1, 2)</span>. Find the value of <span class="chem">y</span> when <span class="chem">x = 2</span>.</p>
      stem: "<p><span class=\"chem\">x &gt; 0</span>에서 곡선의 기울기는 <span class=\"chem\">dy/dx = 6x - 4/x^3</span>로 주어진다. 곡선은 점 <span class=\"chem\">(1, 2)</span>을 지난다. <span class=\"chem\">x = 2</span>일 때 <span class=\"chem\">y</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Write <span class="chem">-4/x^3 = -4x^{-3}</span>; integrating gives <span class="chem">-4x^{-2}/(-2) = 2x^{-2}</span>.
        "<span class=\"chem\">-4/x^3 = -4x^{-3}</span>로 쓰세요. 적분하면 <span class=\"chem\">-4x^{-2}/(-2) = 2x^{-2}</span>예요.",
        // EN: So <span class="chem">y = 3x^2 + 2/x^2 + C</span>. Use the point <span class="chem">(1, 2)</span> to find <span class="chem">C</span>.
        "따라서 <span class=\"chem\">y = 3x^2 + 2/x^2 + C</span>. 점 <span class=\"chem\">(1, 2)</span>를 이용하여 <span class=\"chem\">C</span>을 구하세요.",
      ],
      // EN: <p><span class="chem">y = int (6x - 4x^{-3}) dx = 3x^2 + 2x^{-2} + C</span>. At <span class="chem">(1, 2)</span>: <span class="chem">3 + 2 + C = 2</span>, so <span class="chem">C = -3</span>. When <span class="chem">x = 2</span>: <span class="chem">y = 12 + 2/4 - 3 = 9.5</span> (or <span class="chem">19/2</span>).</p>
      solution: "<p><span class=\"chem\">y = int (6x - 4x^{-3}) dx = 3x^2 + 2x^{-2} + C</span>. <span class=\"chem\">(1, 2)</span>에서: <span class=\"chem\">3 + 2 + C = 2</span>이므로 <span class=\"chem\">C = -3</span>. <span class=\"chem\">x = 2</span>일 때: <span class=\"chem\">y = 12 + 2/4 - 3 = 9.5</span> (또는 <span class=\"chem\">19/2</span>).</p>",
    },

    // ── t5-2-q045 · numeric · exam · SL · SL 5.10 · 5 marks
    "t5-2-q045": {
      // EN: <p>A function <span class="chem">f</span> has derivative <span class="chem">f'(x) = 2 cos(2x) + sin x</span>, and the graph of <span class="chem">f</span> passes through the point <span class="chem">(pi, 3)</span>. Find the exact value of <span class="chem">f(pi/3)</span>.</p>
      stem: "<p>함수 <span class=\"chem\">f</span>의 도함수는 <span class=\"chem\">f'(x) = 2 cos(2x) + sin x</span>이고, <span class=\"chem\">f</span>의 그래프는 점 <span class=\"chem\">(pi, 3)</span>를 지난다. <span class=\"chem\">f(pi/3)</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Integrate term by term: <span class="chem">int 2 cos(2x) dx = sin(2x)</span> and <span class="chem">int sin x dx = -cos x</span>.
        "항별로 적분하세요: <span class=\"chem\">int 2 cos(2x) dx = sin(2x)</span>과 <span class=\"chem\">int sin x dx = -cos x</span>.",
        // EN: Use <span class="chem">f(pi) = 3</span>, remembering <span class="chem">sin(2pi) = 0</span> and <span class="chem">cos pi = -1</span>, to find <span class="chem">C</span>.
        "<span class=\"chem\">sin(2pi) = 0</span>와 <span class=\"chem\">cos pi = -1</span>에 주의하면서 <span class=\"chem\">f(pi) = 3</span>을 이용하여 <span class=\"chem\">C</span>를 구하세요.",
        // EN: Then use <span class="chem">sin(2pi/3) = sqrt(3)/2</span> and <span class="chem">cos(pi/3) = 1/2</span>.
        "그다음 <span class=\"chem\">sin(2pi/3) = sqrt(3)/2</span>과 <span class=\"chem\">cos(pi/3) = 1/2</span>를 이용하세요.",
      ],
      // EN: <p><span class="chem">f(x) = sin(2x) - cos x + C</span>. From <span class="chem">f(pi) = 3</span>: <span class="chem">0 - (-1) + C = 3</span>, so <span class="chem">C = 2</span>. Then <span class="chem">f(pi/3) = sin(2pi/3) - cos(pi/3) + 2 = sqrt(3)/2 - 1/2 + 2 = (3 + sqrt(3))/2</span>.</p>
      solution: "<p><span class=\"chem\">f(x) = sin(2x) - cos x + C</span>. <span class=\"chem\">f(pi) = 3</span>에서: <span class=\"chem\">0 - (-1) + C = 3</span>이므로 <span class=\"chem\">C = 2</span>. 그러면 <span class=\"chem\">f(pi/3) = sin(2pi/3) - cos(pi/3) + 2 = sqrt(3)/2 - 1/2 + 2 = (3 + sqrt(3))/2</span>예요.</p>",
    },

    // ── t5-2-q046 · numeric · challenge · SL · SL 5.11 · 6 marks
    "t5-2-q046": {
      // EN: <p>The curves <span class="chem">y = x^3</span> and <span class="chem">y = 4x</span> enclose two finite regions. A student writes: “The area enclosed is <span class="chem">int_{-2}^2 (4x - x^3) dx = 0</span>, so the curves enclose no area.” Find the correct total area of the two regions.</p>
      stem: "<p>곡선 <span class=\"chem\">y = x^3</span>과 <span class=\"chem\">y = 4x</span>는 두 개의 유한 영역을 둘러싼다. 한 학생이 “둘러싸인 넓이는 <span class=\"chem\">int_{-2}^2 (4x - x^3) dx = 0</span>이므로, 두 곡선은 넓이를 둘러싸지 않는다.”라고 썼다. 두 영역의 올바른 넓이의 합을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: the student used one integral across both regions. Find where the curves meet and which curve is on top in <strong>each</strong> region; the upper curve swaps at <span class="chem">x = 0</span>.
        "해석: 이 학생은 두 영역에 걸쳐 하나의 적분을 썼어요. 두 곡선이 만나는 곳과, <strong>각</strong> 영역에서 어느 곡선이 위에 있는지 찾으세요. 위쪽 곡선은 <span class=\"chem\">x = 0</span>에서 바뀌어요.",
        // EN: <span class="chem">x^3 = 4x</span> gives <span class="chem">x = -2, 0, 2</span>. On <span class="chem">(0, 2)</span>, <span class="chem">4x &gt; x^3</span> (try <span class="chem">x = 1</span>); on <span class="chem">(-2, 0)</span>, <span class="chem">x^3 &gt; 4x</span> (try <span class="chem">x = -1</span>).
        "<span class=\"chem\">x^3 = 4x</span>에서 <span class=\"chem\">x = -2, 0, 2</span>. <span class=\"chem\">(0, 2)</span>에서 <span class=\"chem\">4x &gt; x^3</span> (<span class=\"chem\">x = 1</span>로 확인); <span class=\"chem\">(-2, 0)</span>에서 <span class=\"chem\">x^3 &gt; 4x</span> (<span class=\"chem\">x = -1</span>로 확인).",
        // EN: Compute <span class="chem">int_0^2 (4x - x^3) dx</span>, then use symmetry (or integrate <span class="chem">x^3 - 4x</span> on <span class="chem">[-2, 0]</span>).
        "<span class=\"chem\">int_0^2 (4x - x^3) dx</span>을 계산한 다음 대칭성을 이용하세요 (또는 <span class=\"chem\">[-2, 0]</span>에서 <span class=\"chem\">x^3 - 4x</span>를 적분하세요).",
      ],
      // EN: <p>Decode: area between curves means (upper − lower) on each interval; the curves cross at <span class="chem">x = 0</span>, so the upper curve changes there. Intersections: <span class="chem">x^3 - 4x = x(x - 2)(x + 2) = 0</span>. On <span class="chem">[0, 2]</span>: <span class="chem">int_0^2 (4x - x^3) dx = [2x^2 - x^4/4]_0^2 = 8 - 4 = 4</span>. On <span class="chem">[-2, 0]</span>: <span class="chem">int_{-2}^0 (x^3 - 4x) dx = [x^4/4 - 2x^2]_{-2}^0 = 0 - (4 - 8) = 4</span>. Total area <span class="chem">= 8</span>. The student’s integral is 0 because the two pieces have opposite signs and cancel.</p>
      solution: "<p>해석: 두 곡선 사이의 넓이는 각 구간에서 (위쪽 − 아래쪽)을 뜻해요. 두 곡선은 <span class=\"chem\">x = 0</span>에서 만나므로 그곳에서 위쪽 곡선이 바뀌어요. 교점: <span class=\"chem\">x^3 - 4x = x(x - 2)(x + 2) = 0</span>. <span class=\"chem\">[0, 2]</span>에서: <span class=\"chem\">int_0^2 (4x - x^3) dx = [2x^2 - x^4/4]_0^2 = 8 - 4 = 4</span>. <span class=\"chem\">[-2, 0]</span>에서: <span class=\"chem\">int_{-2}^0 (x^3 - 4x) dx = [x^4/4 - 2x^2]_{-2}^0 = 0 - (4 - 8) = 4</span>. 넓이의 합은 <span class=\"chem\">= 8</span>이에요. 두 조각의 부호가 반대여서 상쇄되므로 학생의 적분은 0이에요.</p>",
    },

    // ── t5-2-q047 · short · exam · SL · SL 5.6, 5.10, 5.11 · 5 marks
    "t5-2-q047": {
      // EN: <p>(a) Find <span class="chem">d/dx (x ln x)</span>. <strong>[2 marks]</strong><br>(b) Hence find the exact value of <span class="chem">int_1^e ln x dx</span>. <strong>[3 marks]</strong></p>
      stem: "<p>(a) <span class=\"chem\">d/dx (x ln x)</span>을 구하시오 (Find). <strong>[2 marks]</strong><br>(b) 이를 이용하여 (Hence) <span class=\"chem\">int_1^e ln x dx</span>의 정확한 값을 구하시오 (find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: For (a), the product rule gives <span class="chem">1 × ln x + x × (1/x)</span>.
        "(a)에서는 곱의 미분법에 의해 <span class=\"chem\">1 × ln x + x × (1/x)</span>이에요.",
        // EN: “Hence”: integrate both sides of (a) from 1 to e: <span class="chem">int_1^e (ln x + 1) dx = [x ln x]_1^e</span>, then subtract <span class="chem">int_1^e 1 dx</span>.
        "“이를 이용하여 (Hence)”: (a)의 양변을 1부터 e까지 적분하면 <span class=\"chem\">int_1^e (ln x + 1) dx = [x ln x]_1^e</span>이고, 그다음 <span class=\"chem\">int_1^e 1 dx</span>를 빼세요.",
      ],
      // EN: <p>(a) <span class="chem">d/dx (x ln x) = ln x + x(1/x) = ln x + 1</span>.<br>(b) From (a), <span class="chem">int_1^e (ln x + 1) dx = [x ln x]_1^e = e - 0 = e</span>. Since <span class="chem">int_1^e 1 dx = e - 1</span>, <span class="chem">int_1^e ln x dx = e - (e - 1) = 1</span>.</p>
      solution: "<p>(a) <span class=\"chem\">d/dx (x ln x) = ln x + x(1/x) = ln x + 1</span>.<br>(b) (a)에서 <span class=\"chem\">int_1^e (ln x + 1) dx = [x ln x]_1^e = e - 0 = e</span>. <span class=\"chem\">int_1^e 1 dx = e - 1</span>이므로 <span class=\"chem\">int_1^e ln x dx = e - (e - 1) = 1</span>.</p>",
      // EN: <p>(a) <span class="chem">ln x + 1</span><br>(b) <span class="chem">1</span></p>
      answer: "<p>(a) <span class=\"chem\">ln x + 1</span><br>(b) <span class=\"chem\">1</span></p>",
      markscheme: [
        // EN: M1: Product rule with <span class="chem">u = x</span>, <span class="chem">v = ln x</span>.
        "M1: <span class=\"chem\">u = x</span>, <span class=\"chem\">v = ln x</span>로 곱의 미분법을 이용함.",
        // EN: A1: <span class="chem">d/dx (x ln x) = ln x + 1</span>.
        "A1: <span class=\"chem\">d/dx (x ln x) = ln x + 1</span>.",
        // EN: M1: Integrates (a): <span class="chem">x ln x = int ln x dx + int 1 dx</span>, i.e. <span class="chem">int ln x dx = x ln x - x + C</span>.
        "M1: (a)를 적분함: <span class=\"chem\">x ln x = int ln x dx + int 1 dx</span>, 즉 <span class=\"chem\">int ln x dx = x ln x - x + C</span>.",
        // EN: A1: Substitutes the limits: <span class="chem">(e ln e - e) - (1 ln 1 - 1)</span>.
        "A1: 적분 구간의 끝을 대입함: <span class=\"chem\">(e ln e - e) - (1 ln 1 - 1)</span>.",
        // EN: A1: <span class="chem">= 0 - (-1) = 1</span>.
        "A1: <span class=\"chem\">= 0 - (-1) = 1</span>.",
      ],
    },

    // ── t5-2-q048 · numeric · exam · SL · SL 5.5, 5.11 · 4 marks
    "t5-2-q048": {
      // EN: <p>Given that <span class="chem">k &gt; 1</span> and <span class="chem">int_1^k (2x - 1) dx = 12</span>, find the value of <span class="chem">k</span>.</p>
      stem: "<p><span class=\"chem\">k &gt; 1</span>이고 <span class=\"chem\">int_1^k (2x - 1) dx = 12</span>일 때, <span class=\"chem\">k</span>의 값을 구하시오 (find).</p>",
      hints: [
        // EN: Integrate to get an equation in <span class="chem">k</span>: <span class="chem">[x^2 - x]_1^k = k^2 - k - 0</span>.
        "적분하여 <span class=\"chem\">k</span>에 대한 방정식을 만드세요: <span class=\"chem\">[x^2 - x]_1^k = k^2 - k - 0</span>.",
        // EN: Solve <span class="chem">k^2 - k - 12 = 0</span> and use the condition <span class="chem">k &gt; 1</span> to choose the root.
        "<span class=\"chem\">k^2 - k - 12 = 0</span>을 풀고, 조건 <span class=\"chem\">k &gt; 1</span>를 이용하여 근을 고르세요.",
      ],
      // EN: <p><span class="chem">int_1^k (2x - 1) dx = [x^2 - x]_1^k = (k^2 - k) - (1 - 1) = k^2 - k</span>. So <span class="chem">k^2 - k - 12 = 0</span>, <span class="chem">(k - 4)(k + 3) = 0</span>. Since <span class="chem">k &gt; 1</span>, <span class="chem">k = 4</span> (reject <span class="chem">k = -3</span>).</p>
      solution: "<p><span class=\"chem\">int_1^k (2x - 1) dx = [x^2 - x]_1^k = (k^2 - k) - (1 - 1) = k^2 - k</span>. 따라서 <span class=\"chem\">k^2 - k - 12 = 0</span>, <span class=\"chem\">(k - 4)(k + 3) = 0</span>. <span class=\"chem\">k &gt; 1</span>이므로 <span class=\"chem\">k = 4</span> (<span class=\"chem\">k = -3</span>은 버림).</p>",
    },

    // ── t5-2-q049 · numeric · challenge · SL · SL 5.11 · 6 marks
    "t5-2-q049": {
      // EN: <p>The curve <span class="chem">y = x^2 - 4</span> and the line <span class="chem">y = 2x - 1</span> enclose a finite region <span class="chem">R</span>. The <span class="chem">x</span>-axis passes through <span class="chem">R</span>, so part of <span class="chem">R</span> lies above the <span class="chem">x</span>-axis and part lies below it. Find the exact area of <span class="chem">R</span>.</p>
      stem: "<p>곡선 <span class=\"chem\">y = x^2 - 4</span>과 직선 <span class=\"chem\">y = 2x - 1</span>는 유한 영역 <span class=\"chem\">R</span>을 둘러싼다. <span class=\"chem\">x</span>축이 <span class=\"chem\">R</span>를 지나므로, <span class=\"chem\">R</span>의 일부는 <span class=\"chem\">x</span>축 위에, 일부는 아래에 있다. <span class=\"chem\">R</span>의 정확한 넓이를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: the region asked for is enclosed by the curve and the line only. The <span class="chem">x</span>-axis is a distraction: “upper minus lower” works even where both are below the axis, so do not split at the axis.
        "해석: 구하는 영역은 곡선과 직선으로만 둘러싸여 있어요. <span class=\"chem\">x</span>축은 헷갈리게 하려는 것이에요. 둘 다 축 아래에 있어도 “위쪽 − 아래쪽”은 성립하므로 축에서 나누지 마세요.",
        // EN: Solve <span class="chem">x^2 - 4 = 2x - 1</span>: <span class="chem">x^2 - 2x - 3 = 0</span>, so <span class="chem">x = -1</span> and <span class="chem">x = 3</span>. The line is above the curve between them (test <span class="chem">x = 0</span>).
        "<span class=\"chem\">x^2 - 4 = 2x - 1</span>을 풀면 <span class=\"chem\">x^2 - 2x - 3 = 0</span>이므로 <span class=\"chem\">x = -1</span>과 <span class=\"chem\">x = 3</span>. 그 사이에서는 직선이 곡선 위에 있어요 (<span class=\"chem\">x = 0</span>로 확인).",
        // EN: Evaluate <span class="chem">int_{-1}^3 ((2x - 1) - (x^2 - 4)) dx = int_{-1}^3 (3 + 2x - x^2) dx</span>.
        "<span class=\"chem\">int_{-1}^3 ((2x - 1) - (x^2 - 4)) dx = int_{-1}^3 (3 + 2x - x^2) dx</span>을 계산하세요.",
      ],
      // EN: <p>Decode: area between a line and a curve; the axis plays no part. Intersections: <span class="chem">(x - 3)(x + 1) = 0</span>, so <span class="chem">x = -1, 3</span>. At <span class="chem">x = 0</span>, the line gives <span class="chem">-1</span> and the curve <span class="chem">-4</span>, so the line is on top. <span class="chem">A = int_{-1}^3 (3 + 2x - x^2) dx = [3x + x^2 - x^3/3]_{-1}^3 = (9 + 9 - 9) - (-3 + 1 + 1/3) = 9 + 5/3 = 32/3</span>.</p>
      solution: "<p>해석: 직선과 곡선 사이의 넓이이고, 축은 관계가 없어요. 교점: <span class=\"chem\">(x - 3)(x + 1) = 0</span>이므로 <span class=\"chem\">x = -1, 3</span>. <span class=\"chem\">x = 0</span>에서 직선은 <span class=\"chem\">-1</span>, 곡선은 <span class=\"chem\">-4</span>이므로 직선이 위에 있어요. <span class=\"chem\">A = int_{-1}^3 (3 + 2x - x^2) dx = [3x + x^2 - x^3/3]_{-1}^3 = (9 + 9 - 9) - (-3 + 1 + 1/3) = 9 + 5/3 = 32/3</span>.</p>",
    },

    // ── t5-2-q050 · short · challenge · SL · SL 5.9 · 10 marks
    "t5-2-q050": {
      // EN: <p>A particle moves along a straight line. Its acceleration is <span class="chem">a(t) = 6t - 6</span> <span class="unit">m s-2</span>, for <span class="chem">t &gt;= 0</span> seconds. Its initial velocity is <span class="chem">-9</span> <span class="unit">m s-1</span>, and it passes through a fixed point <span class="chem">O</span> on the line when <span class="chem">t = 1</span>. Let <span class="chem">s(t)</span> be its displacement from <span class="chem">O</span>.<br>(a) Find an expression for the velocity <span class="chem">v(t)</span>. <strong>[2 marks]</strong><br>(b) Find an expression for <span class="chem">s(t)</span>. <strong>[3 marks]</strong><br>(c) Find the distance of the particle from <span class="chem">O</span> when it is first at rest. <strong>[2 marks]</strong><br>(d) Find the total distance travelled by the particle in the first 4 seconds. <strong>[3 marks]</strong></p>
      stem: "<p>한 입자가 직선 위를 움직인다. <span class=\"chem\">t &gt;= 0</span>초에서 가속도는 <span class=\"chem\">a(t) = 6t - 6</span> <span class=\"unit\">m s-2</span>이다. 처음 속도는 <span class=\"chem\">-9</span> <span class=\"unit\">m s-1</span>이고, <span class=\"chem\">t = 1</span>일 때 직선 위의 고정점 <span class=\"chem\">O</span>을 지난다. <span class=\"chem\">O</span>로부터의 변위를 <span class=\"chem\">s(t)</span>이라 하자.<br>(a) 속도 <span class=\"chem\">v(t)</span>의 식을 구하시오 (Find). <strong>[2 marks]</strong><br>(b) <span class=\"chem\">s(t)</span>의 식을 구하시오 (Find). <strong>[3 marks]</strong><br>(c) 입자가 처음으로 정지할 때 <span class=\"chem\">O</span>로부터의 거리를 구하시오 (Find). <strong>[2 marks]</strong><br>(d) 처음 4초 동안 입자가 움직인 총 이동 거리를 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: two boundary conditions at <strong>different</strong> times. “Initial velocity” is <span class="chem">v(0) = -9</span>; “passes through O when t = 1” is <span class="chem">s(1) = 0</span>, so the particle does not start at <span class="chem">O</span>.
        "해석: <strong>서로 다른</strong> 시각에서의 두 경계 조건이에요. “처음 속도”는 <span class=\"chem\">v(0) = -9</span>이고, “t = 1일 때 O를 지난다”는 <span class=\"chem\">s(1) = 0</span>이므로, 입자는 <span class=\"chem\">O</span>에서 출발하지 않아요.",
        // EN: After (b), <span class="chem">s(0) = 11</span>: the particle starts 11 m from <span class="chem">O</span>. “First at rest” means the first <span class="chem">t &gt;= 0</span> with <span class="chem">v(t) = 0</span>.
        "(b) 이후에 <span class=\"chem\">s(0) = 11</span>: 입자는 <span class=\"chem\">O</span>로부터 11 m 떨어진 곳에서 출발해요. “처음으로 정지”는 <span class=\"chem\">v(t) = 0</span>인 첫 번째 <span class=\"chem\">t &gt;= 0</span>을 뜻해요.",
        // EN: For (d), the particle turns at <span class="chem">t = 3</span>, so add <span class="chem">|s(3) - s(0)|</span> and <span class="chem">|s(4) - s(3)|</span>.
        "(d)에서는 입자가 <span class=\"chem\">t = 3</span>에서 방향을 바꾸므로, <span class=\"chem\">|s(3) - s(0)|</span>와 <span class=\"chem\">|s(4) - s(3)|</span>을 더하세요.",
      ],
      // EN: <p>Decode: the constants come from <span class="chem">v(0) = -9</span> and <span class="chem">s(1) = 0</span>, and “distance from O” is <span class="chem">|s|</span>.<br>(a) <span class="chem">v(t) = 3t^2 - 6t + C_1</span>; <span class="chem">v(0) = -9</span> gives <span class="chem">C_1 = -9</span>, so <span class="chem">v(t) = 3t^2 - 6t - 9</span>.<br>(b) <span class="chem">s(t) = t^3 - 3t^2 - 9t + C_2</span>; <span class="chem">s(1) = 1 - 3 - 9 + C_2 = 0</span> gives <span class="chem">C_2 = 11</span>.<br>(c) <span class="chem">v(t) = 3(t^2 - 2t - 3) = 3(t - 3)(t + 1) = 0</span>, so <span class="chem">t = 3</span> (as <span class="chem">t &gt;= 0</span>). <span class="chem">s(3) = 27 - 27 - 27 + 11 = -16</span>: the particle is <span class="chem">16</span> <span class="unit">m</span> from <span class="chem">O</span> (on the negative side).<br>(d) <span class="chem">s(0) = 11</span>, <span class="chem">s(3) = -16</span>, <span class="chem">s(4) = 64 - 48 - 36 + 11 = -9</span>. Distance <span class="chem">= |-16 - 11| + |-9 - (-16)| = 27 + 7 = 34</span> <span class="unit">m</span>.</p>
      solution: "<p>해석: 상수는 <span class=\"chem\">v(0) = -9</span>과 <span class=\"chem\">s(1) = 0</span>에서 나오고, “O로부터의 거리”는 <span class=\"chem\">|s|</span>이에요.<br>(a) <span class=\"chem\">v(t) = 3t^2 - 6t + C_1</span>; <span class=\"chem\">v(0) = -9</span>에서 <span class=\"chem\">C_1 = -9</span>이므로 <span class=\"chem\">v(t) = 3t^2 - 6t - 9</span>.<br>(b) <span class=\"chem\">s(t) = t^3 - 3t^2 - 9t + C_2</span>; <span class=\"chem\">s(1) = 1 - 3 - 9 + C_2 = 0</span>에서 <span class=\"chem\">C_2 = 11</span>.<br>(c) <span class=\"chem\">v(t) = 3(t^2 - 2t - 3) = 3(t - 3)(t + 1) = 0</span>이므로 <span class=\"chem\">t = 3</span> (<span class=\"chem\">t &gt;= 0</span>이므로). <span class=\"chem\">s(3) = 27 - 27 - 27 + 11 = -16</span>: 입자는 <span class=\"chem\">O</span>로부터 <span class=\"chem\">16</span> <span class=\"unit\">m</span> 떨어져 있어요 (음의 쪽).<br>(d) <span class=\"chem\">s(0) = 11</span>, <span class=\"chem\">s(3) = -16</span>, <span class=\"chem\">s(4) = 64 - 48 - 36 + 11 = -9</span>. 이동 거리 <span class=\"chem\">= |-16 - 11| + |-9 - (-16)| = 27 + 7 = 34</span> <span class=\"unit\">m</span>.</p>",
      // EN: <p>(a) <span class="chem">v(t) = 3t^2 - 6t - 9</span><br>(b) <span class="chem">s(t) = t^3 - 3t^2 - 9t + 11</span><br>(c) <span class="chem">16</span> <span class="unit">m</span><br>(d) <span class="chem">34</span> <span class="unit">m</span></p>
      answer: "<p>(a) <span class=\"chem\">v(t) = 3t^2 - 6t - 9</span><br>(b) <span class=\"chem\">s(t) = t^3 - 3t^2 - 9t + 11</span><br>(c) <span class=\"chem\">16</span> <span class=\"unit\">m</span><br>(d) <span class=\"chem\">34</span> <span class=\"unit\">m</span></p>",
      markscheme: [
        // EN: M1: Integrates <span class="chem">a(t)</span> and uses <span class="chem">v(0) = -9</span>.
        "M1: <span class=\"chem\">a(t)</span>을 적분하고 <span class=\"chem\">v(0) = -9</span>를 이용함.",
        // EN: A1: <span class="chem">v(t) = 3t^2 - 6t - 9</span>.
        "A1: <span class=\"chem\">v(t) = 3t^2 - 6t - 9</span>.",
        // EN: M1: Integrates: <span class="chem">s(t) = t^3 - 3t^2 - 9t + C</span>.
        "M1: 적분함: <span class=\"chem\">s(t) = t^3 - 3t^2 - 9t + C</span>.",
        // EN: M1: Uses <span class="chem">s(1) = 0</span> (not <span class="chem">s(0) = 0</span>): <span class="chem">1 - 3 - 9 + C = 0</span>.
        "M1: (<span class=\"chem\">s(0) = 0</span>가 아니라) <span class=\"chem\">s(1) = 0</span>을 이용함: <span class=\"chem\">1 - 3 - 9 + C = 0</span>.",
        // EN: A1: <span class="chem">s(t) = t^3 - 3t^2 - 9t + 11</span>.
        "A1: <span class=\"chem\">s(t) = t^3 - 3t^2 - 9t + 11</span>.",
        // EN: M1: Solves <span class="chem">v = 3(t - 3)(t + 1) = 0</span>, giving <span class="chem">t = 3</span> (rejecting <span class="chem">t = -1</span>).
        "M1: <span class=\"chem\">v = 3(t - 3)(t + 1) = 0</span>을 풀어 <span class=\"chem\">t = 3</span>를 얻음 (<span class=\"chem\">t = -1</span>은 버림).",
        // EN: A1: <span class="chem">s(3) = -16</span>, so the particle is <span class="chem">16</span> <span class="unit">m</span> from <span class="chem">O</span>.
        "A1: <span class=\"chem\">s(3) = -16</span>이므로, 입자는 <span class=\"chem\">O</span>로부터 <span class=\"chem\">16</span> <span class=\"unit\">m</span> 떨어져 있음.",
        // EN: M1: Uses <span class="chem">s(0) = 11</span>, <span class="chem">s(3) = -16</span>, <span class="chem">s(4) = -9</span> (or splits <span class="chem">int_0^4 |v| dt</span> at <span class="chem">t = 3</span>).
        "M1: <span class=\"chem\">s(0) = 11</span>, <span class=\"chem\">s(3) = -16</span>, <span class=\"chem\">s(4) = -9</span>을 이용함 (또는 <span class=\"chem\">t = 3</span>에서 <span class=\"chem\">int_0^4 |v| dt</span>를 나눔).",
        // EN: A1: Legs of <span class="chem">27</span> and <span class="chem">7</span> <span class="unit">m</span>.
        "A1: 각 구간의 이동 거리 <span class=\"chem\">27</span>과 <span class=\"chem\">7</span> <span class=\"unit\">m</span>.",
        // EN: A1: Total distance <span class="chem">34</span> <span class="unit">m</span>.
        "A1: 총 이동 거리 <span class=\"chem\">34</span> <span class=\"unit\">m</span>.",
      ],
    },

    // ── t5-2-q051 · numeric · challenge · SL · SL 5.11 · 6 marks
    "t5-2-q051": {
      // EN: <p>The line <span class="chem">y = kx</span>, where <span class="chem">k &gt; 0</span>, and the curve <span class="chem">y = x^2</span> enclose a region of area <span class="chem">36</span> square units. Find the value of <span class="chem">k</span>.</p>
      stem: "<p>직선 <span class=\"chem\">y = kx</span> (단, <span class=\"chem\">k &gt; 0</span>)과 곡선 <span class=\"chem\">y = x^2</span>은 넓이가 <span class=\"chem\">36</span>인 영역을 둘러싼다. <span class=\"chem\">k</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: the unknown <span class="chem">k</span> appears in both the integrand and a limit. Find the intersections in terms of <span class="chem">k</span>, write the area as an expression in <span class="chem">k</span>, then set it equal to 36.
        "해석: 미지수 <span class=\"chem\">k</span>은 피적분함수와 적분 구간의 끝 모두에 나타나요. 교점을 <span class=\"chem\">k</span>로 나타내고, 넓이를 <span class=\"chem\">k</span>에 대한 식으로 쓴 다음, 36과 같다고 놓으세요.",
        // EN: The curves meet where <span class="chem">x^2 = kx</span>, i.e. <span class="chem">x = 0</span> and <span class="chem">x = k</span>. The line is on top for <span class="chem">0 &lt; x &lt; k</span>.
        "두 그래프는 <span class=\"chem\">x^2 = kx</span>, 즉 <span class=\"chem\">x = 0</span>와 <span class=\"chem\">x = k</span>에서 만나요. <span class=\"chem\">0 &lt; x &lt; k</span>에서는 직선이 위에 있어요.",
        // EN: Show that <span class="chem">int_0^k (kx - x^2) dx = k^3/6</span>.
        "<span class=\"chem\">int_0^k (kx - x^2) dx = k^3/6</span>임을 보이세요 (Show that).",
      ],
      // EN: <p>Decode: area as a function of the parameter. Intersections at <span class="chem">x = 0</span> and <span class="chem">x = k</span>, with <span class="chem">kx &gt;= x^2</span> between them. <span class="chem">A = int_0^k (kx - x^2) dx = [kx^2/2 - x^3/3]_0^k = k^3/2 - k^3/3 = k^3/6</span>. Setting <span class="chem">k^3/6 = 36</span> gives <span class="chem">k^3 = 216</span>, so <span class="chem">k = 6</span>.</p>
      solution: "<p>해석: 매개변수의 함수로서의 넓이예요. 교점은 <span class=\"chem\">x = 0</span>과 <span class=\"chem\">x = k</span>이고, 그 사이에서 <span class=\"chem\">kx &gt;= x^2</span>이에요. <span class=\"chem\">A = int_0^k (kx - x^2) dx = [kx^2/2 - x^3/3]_0^k = k^3/2 - k^3/3 = k^3/6</span>. <span class=\"chem\">k^3/6 = 36</span>로 놓으면 <span class=\"chem\">k^3 = 216</span>이므로 <span class=\"chem\">k = 6</span>이에요.</p>",
    },

    // ── t5-2-q052 · numeric · challenge · SL · SL 3.6, 5.10, 5.11 · 6 marks
    "t5-2-q052": {
      // EN: <p>Find the exact value of <span class="chem">int_0^{pi/2} sin(2x) cos^2 x dx</span>.</p>
      stem: "<p><span class=\"chem\">int_0^{pi/2} sin(2x) cos^2 x dx</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: this is a reverse chain rule integral in disguise. Rewrite <span class="chem">sin(2x)</span> with the double-angle identity so that the integrand becomes (a constant times) <span class="chem">g'(x) [g(x)]^n</span>.
        "해석: 겉모습을 바꾼, 연쇄법칙의 역을 이용하는 적분이에요. 배각의 공식으로 <span class=\"chem\">sin(2x)</span>을 다시 써서 피적분함수가 (상수배의) <span class=\"chem\">g'(x) [g(x)]^n</span>가 되게 하세요.",
        // EN: <span class="chem">sin(2x) cos^2 x = 2 sin x cos^3 x</span>. With <span class="chem">g(x) = cos x</span>, <span class="chem">g'(x) = -sin x</span>.
        "<span class=\"chem\">sin(2x) cos^2 x = 2 sin x cos^3 x</span>. <span class=\"chem\">g(x) = cos x</span>이면 <span class=\"chem\">g'(x) = -sin x</span>.",
        // EN: So <span class="chem">int 2 sin x cos^3 x dx = -(1/2) cos^4 x + C</span>. Use <span class="chem">cos(pi/2) = 0</span> and <span class="chem">cos 0 = 1</span>.
        "따라서 <span class=\"chem\">int 2 sin x cos^3 x dx = -(1/2) cos^4 x + C</span>. <span class=\"chem\">cos(pi/2) = 0</span>와 <span class=\"chem\">cos 0 = 1</span>을 이용하세요.",
      ],
      // EN: <p>Decode: double angle, then inspection. <span class="chem">sin(2x) cos^2 x = 2 sin x cos x × cos^2 x = 2 sin x cos^3 x</span>. Since <span class="chem">d/dx (cos^4 x) = -4 sin x cos^3 x</span>, <span class="chem">int 2 sin x cos^3 x dx = -(1/2) cos^4 x + C</span>. Then <span class="chem">[-(1/2) cos^4 x]_0^{pi/2} = 0 - (-(1/2)(1)) = 1/2</span>.</p>
      solution: "<p>해석: 배각의 공식을 쓴 다음, 눈으로 보고 적분해요. <span class=\"chem\">sin(2x) cos^2 x = 2 sin x cos x × cos^2 x = 2 sin x cos^3 x</span>. <span class=\"chem\">d/dx (cos^4 x) = -4 sin x cos^3 x</span>이므로 <span class=\"chem\">int 2 sin x cos^3 x dx = -(1/2) cos^4 x + C</span>. 그러면 <span class=\"chem\">[-(1/2) cos^4 x]_0^{pi/2} = 0 - (-(1/2)(1)) = 1/2</span>예요.</p>",
    },

    // ── t5-2-q053 · numeric · challenge · SL · SL 5.11 · 6 marks
    "t5-2-q053": {
      // EN: <p>Let <span class="chem">f(x) = 3x^2 - 12</span>. Region <span class="chem">P</span> is enclosed by the graph of <span class="chem">f</span>, the <span class="chem">x</span>-axis and the <span class="chem">y</span>-axis, for <span class="chem">0 &lt;= x &lt;= 2</span>. Region <span class="chem">Q</span> is enclosed by the graph of <span class="chem">f</span>, the <span class="chem">x</span>-axis and the line <span class="chem">x = b</span>, for <span class="chem">2 &lt;= x &lt;= b</span>. The regions <span class="chem">P</span> and <span class="chem">Q</span> have equal areas. Find the exact value of <span class="chem">b</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = 3x^2 - 12</span>이라 하자. 영역 <span class=\"chem\">P</span>는 <span class=\"chem\">0 &lt;= x &lt;= 2</span>에서 <span class=\"chem\">f</span>의 그래프, <span class=\"chem\">x</span>축, <span class=\"chem\">y</span>축으로 둘러싸여 있다. 영역 <span class=\"chem\">Q</span>은 <span class=\"chem\">2 &lt;= x &lt;= b</span>에서 <span class=\"chem\">f</span>의 그래프, <span class=\"chem\">x</span>축, 직선 <span class=\"chem\">x = b</span>으로 둘러싸여 있다. 영역 <span class=\"chem\">P</span>와 <span class=\"chem\">Q</span>의 넓이는 같다. <span class=\"chem\">b</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: <span class="chem">P</span> is below the axis and <span class="chem">Q</span> is above it. “Equal areas” means their signed integrals cancel, so the condition is simply <span class="chem">int_0^b f(x) dx = 0</span>.
        "해석: <span class=\"chem\">P</span>은 축 아래에, <span class=\"chem\">Q</span>는 축 위에 있어요. “넓이가 같다”는 부호가 있는 적분이 서로 상쇄된다는 뜻이므로, 조건은 간단히 <span class=\"chem\">int_0^b f(x) dx = 0</span>이에요.",
        // EN: <span class="chem">int_0^b (3x^2 - 12) dx = b^3 - 12b</span>.
        "<span class=\"chem\">int_0^b (3x^2 - 12) dx = b^3 - 12b</span>.",
        // EN: Solve <span class="chem">b^3 - 12b = 0</span> and use <span class="chem">b &gt; 2</span>.
        "<span class=\"chem\">b^3 - 12b = 0</span>을 풀고 <span class=\"chem\">b &gt; 2</span>를 이용하세요.",
      ],
      // EN: <p>Decode: area of <span class="chem">P</span> = <span class="chem">-int_0^2 f</span> and area of <span class="chem">Q</span> = <span class="chem">int_2^b f</span>; setting them equal gives <span class="chem">int_0^2 f + int_2^b f = int_0^b f = 0</span>. Now <span class="chem">int_0^b (3x^2 - 12) dx = [x^3 - 12x]_0^b = b^3 - 12b = b(b^2 - 12) = 0</span>. Since <span class="chem">b &gt; 2</span>, <span class="chem">b = sqrt(12) = 2sqrt(3)</span>. (Check: area of <span class="chem">P</span> is <span class="chem">|8 - 24| = 16</span>, and area of <span class="chem">Q</span> is <span class="chem">0 - (8 - 24) = 16</span>.)</p>
      solution: "<p>해석: <span class=\"chem\">P</span>의 넓이 = <span class=\"chem\">-int_0^2 f</span>, <span class=\"chem\">Q</span>의 넓이 = <span class=\"chem\">int_2^b f</span>이고, 둘을 같다고 놓으면 <span class=\"chem\">int_0^2 f + int_2^b f = int_0^b f = 0</span>예요. 이제 <span class=\"chem\">int_0^b (3x^2 - 12) dx = [x^3 - 12x]_0^b = b^3 - 12b = b(b^2 - 12) = 0</span>. <span class=\"chem\">b &gt; 2</span>이므로 <span class=\"chem\">b = sqrt(12) = 2sqrt(3)</span>. (확인: <span class=\"chem\">P</span>의 넓이는 <span class=\"chem\">|8 - 24| = 16</span>, <span class=\"chem\">Q</span>의 넓이는 <span class=\"chem\">0 - (8 - 24) = 16</span>예요.)</p>",
    },

    // ── t5-2-q054 · short · challenge · SL · SL 5.5, 5.10, 5.11 · 10 marks
    "t5-2-q054": {
      // EN: <p>The region <span class="chem">R</span> is enclosed by the curve <span class="chem">y = sin x</span> and the <span class="chem">x</span>-axis, for <span class="chem">0 &lt;= x &lt;= pi</span>.<br>(a) Show that the area of <span class="chem">R</span> is <span class="chem">2</span>. <strong>[2 marks]</strong><br>The line <span class="chem">y = mx</span>, where <span class="chem">0 &lt; m &lt; 1</span>, meets the curve at the origin and at the point where <span class="chem">x = a</span>, with <span class="chem">0 &lt; a &lt; pi</span>.<br>(b) Show that the area of the region enclosed between the curve and the line is <span class="chem">1 - cos a - (a sin a)/2</span>. <strong>[4 marks]</strong><br>(c) The line divides <span class="chem">R</span> into two parts of equal area. Find the value of <span class="chem">a</span> and the value of <span class="chem">m</span>, each correct to 3 significant figures. <strong>[4 marks]</strong></p>
      stem: "<p>영역 <span class=\"chem\">R</span>은 <span class=\"chem\">0 &lt;= x &lt;= pi</span>에서 곡선 <span class=\"chem\">y = sin x</span>와 <span class=\"chem\">x</span>축으로 둘러싸여 있다.<br>(a) <span class=\"chem\">R</span>의 넓이가 <span class=\"chem\">2</span>임을 보이시오 (Show that). <strong>[2 marks]</strong><br>직선 <span class=\"chem\">y = mx</span> (단, <span class=\"chem\">0 &lt; m &lt; 1</span>)은 원점과 <span class=\"chem\">x = a</span>인 점에서 곡선과 만나며, <span class=\"chem\">0 &lt; a &lt; pi</span>이다.<br>(b) 곡선과 직선으로 둘러싸인 영역의 넓이가 <span class=\"chem\">1 - cos a - (a sin a)/2</span>임을 보이시오 (Show that). <strong>[4 marks]</strong><br>(c) 직선은 <span class=\"chem\">R</span>를 넓이가 같은 두 부분으로 나눈다. <span class=\"chem\">a</span>의 값과 <span class=\"chem\">m</span>의 값을 각각 유효숫자 3자리로 구하시오 (Find). <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: the line cuts <span class="chem">R</span> into a piece between the curve and the line, and a piece under the line plus the rest. “Two parts of equal area” means the piece between the curve and the line has area <span class="chem">1</span>.
        "해석: 직선은 <span class=\"chem\">R</span>을 곡선과 직선 사이의 조각과, 직선 아래 부분 및 나머지 조각으로 나눠요. “넓이가 같은 두 부분”은 곡선과 직선 사이 조각의 넓이가 <span class=\"chem\">1</span>라는 뜻이에요.",
        // EN: For (b), you need two facts: (upper − lower) on <span class="chem">[0, a]</span> is <span class="chem">sin x - mx</span>, and <span class="chem">x = a</span> is on both graphs, so <span class="chem">sin a = ma</span>. Use the second to remove <span class="chem">m</span>.
        "(b)에서는 두 가지 사실이 필요해요: <span class=\"chem\">[0, a]</span>에서 (위쪽 − 아래쪽)은 <span class=\"chem\">sin x - mx</span>이고, <span class=\"chem\">x = a</span>이 두 그래프 위에 있으므로 <span class=\"chem\">sin a = ma</span>예요. 두 번째 사실을 이용하여 <span class=\"chem\">m</span>를 없애세요.",
        // EN: For (c), solve <span class="chem">cos a + (a sin a)/2 = 0</span> on your GDC (radians) for <span class="chem">0 &lt; a &lt; pi</span>, then <span class="chem">m = (sin a)/a</span>.
        "(c)에서는 GDC(라디안)로 <span class=\"chem\">cos a + (a sin a)/2 = 0</span>을 <span class=\"chem\">0 &lt; a &lt; pi</span>에 대하여 푼 다음, <span class=\"chem\">m = (sin a)/a</span>으로 구하세요.",
      ],
      // EN: <p>Decode: “equal parts” is a condition on the area between curve and line, which (b) gives as a function of <span class="chem">a</span>; set it to half of (a).<br>(a) <span class="chem">int_0^pi sin x dx = [-cos x]_0^pi = -(-1) - (-1) = 2</span>.<br>(b) On <span class="chem">(0, a)</span>, <span class="chem">sin x &gt; mx</span>, so the area is <span class="chem">int_0^a (sin x - mx) dx = [-cos x - mx^2/2]_0^a = 1 - cos a - ma^2/2</span>. The point <span class="chem">x = a</span> lies on both graphs, so <span class="chem">ma = sin a</span> and <span class="chem">ma^2/2 = (a sin a)/2</span>, giving <span class="chem">1 - cos a - (a sin a)/2</span>.<br>(c) Each part has area <span class="chem">1</span>, so <span class="chem">1 - cos a - (a sin a)/2 = 1</span>, i.e. <span class="chem">cos a + (a sin a)/2 = 0</span>. The GDC gives <span class="chem">a = 2.45871…</span> (the only root in <span class="chem">(0, pi)</span>), so <span class="chem">a = 2.46</span> and <span class="chem">m = sin(2.45871…)/2.45871… = 0.256649… ≈ 0.257</span>.</p>
      solution: "<p>해석: “같은 부분”은 곡선과 직선 사이의 넓이에 대한 조건이고, (b)가 그 넓이를 <span class=\"chem\">a</span>의 함수로 줘요. 그것을 (a)의 절반과 같다고 놓아요.<br>(a) <span class=\"chem\">int_0^pi sin x dx = [-cos x]_0^pi = -(-1) - (-1) = 2</span>.<br>(b) <span class=\"chem\">(0, a)</span>에서 <span class=\"chem\">sin x &gt; mx</span>이므로 넓이는 <span class=\"chem\">int_0^a (sin x - mx) dx = [-cos x - mx^2/2]_0^a = 1 - cos a - ma^2/2</span>예요. 점 <span class=\"chem\">x = a</span>은 두 그래프 위에 있으므로 <span class=\"chem\">ma = sin a</span>이고 <span class=\"chem\">ma^2/2 = (a sin a)/2</span>이어서 <span class=\"chem\">1 - cos a - (a sin a)/2</span>예요.<br>(c) 각 부분의 넓이는 <span class=\"chem\">1</span>이므로 <span class=\"chem\">1 - cos a - (a sin a)/2 = 1</span>, 즉 <span class=\"chem\">cos a + (a sin a)/2 = 0</span>예요. GDC로 <span class=\"chem\">a = 2.45871…</span> (<span class=\"chem\">(0, pi)</span>에서 유일한 근)이므로 <span class=\"chem\">a = 2.46</span>, <span class=\"chem\">m = sin(2.45871…)/2.45871… = 0.256649… ≈ 0.257</span>이에요.</p>",
      // EN: <p>(a) <span class="chem">int_0^pi sin x dx = [-cos x]_0^pi = 1 + 1 = 2</span><br>(b) <span class="chem">int_0^a (sin x - mx) dx = 1 - cos a - m a^2/2</span>, and <span class="chem">m a = sin a</span>, giving <span class="chem">1 - cos a - (a sin a)/2</span><br>(c) <span class="chem">a = 2.46</span>, <span class="chem">m = 0.257</span></p>
      answer: "<p>(a) <span class=\"chem\">int_0^pi sin x dx = [-cos x]_0^pi = 1 + 1 = 2</span><br>(b) <span class=\"chem\">int_0^a (sin x - mx) dx = 1 - cos a - m a^2/2</span>, 그리고 <span class=\"chem\">m a = sin a</span>이므로 <span class=\"chem\">1 - cos a - (a sin a)/2</span><br>(c) <span class=\"chem\">a = 2.46</span>, <span class=\"chem\">m = 0.257</span></p>",
      markscheme: [
        // EN: M1: <span class="chem">int_0^pi sin x dx = [-cos x]_0^pi</span>.
        "M1: <span class=\"chem\">int_0^pi sin x dx = [-cos x]_0^pi</span>.",
        // EN: A1: <span class="chem">= -cos pi + cos 0 = 1 + 1</span>. AG: area of <span class="chem">R = 2</span>; the given line itself earns no mark.
        "A1: <span class=\"chem\">= -cos pi + cos 0 = 1 + 1</span>. AG: <span class=\"chem\">R = 2</span>의 넓이; 주어진 식을 쓰는 것만으로는 점수가 없음.",
        // EN: M1: Area <span class="chem">= int_0^a (sin x - mx) dx</span> (curve above the line on <span class="chem">(0, a)</span>).
        "M1: 넓이 <span class=\"chem\">= int_0^a (sin x - mx) dx</span> (<span class=\"chem\">(0, a)</span>에서 곡선이 직선 위에 있음).",
        // EN: A1: <span class="chem">= [-cos x - m x^2/2]_0^a = 1 - cos a - m a^2/2</span>.
        "A1: <span class=\"chem\">= [-cos x - m x^2/2]_0^a = 1 - cos a - m a^2/2</span>.",
        // EN: M1: Uses the intersection condition <span class="chem">sin a = m a</span>, i.e. <span class="chem">m = (sin a)/a</span>.
        "M1: 교점 조건 <span class=\"chem\">sin a = m a</span>, 즉 <span class=\"chem\">m = (sin a)/a</span>를 이용함.",
        // EN: A1: Substitutes: <span class="chem">m a^2/2 = (a sin a)/2</span>. AG: area <span class="chem">= 1 - cos a - (a sin a)/2</span>; the given line itself earns no mark.
        "A1: 대입함: <span class=\"chem\">m a^2/2 = (a sin a)/2</span>. AG: 넓이 <span class=\"chem\">= 1 - cos a - (a sin a)/2</span>; 주어진 식을 쓰는 것만으로는 점수가 없음.",
        // EN: M1: Equal parts means the region between the curve and the line has area <span class="chem">1</span> (half of 2).
        "M1: 같은 부분이라는 것은 곡선과 직선 사이 영역의 넓이가 <span class=\"chem\">1</span> (2의 절반)이라는 뜻임.",
        // EN: A1: <span class="chem">1 - cos a - (a sin a)/2 = 1</span>, i.e. <span class="chem">cos a + (a sin a)/2 = 0</span>.
        "A1: <span class=\"chem\">1 - cos a - (a sin a)/2 = 1</span>, 즉 <span class=\"chem\">cos a + (a sin a)/2 = 0</span>.",
        // EN: A1: <span class="chem">a = 2.46</span> (GDC, 2.4587…).
        "A1: <span class=\"chem\">a = 2.46</span> (GDC, 2.4587…).",
        // EN: A1: <span class="chem">m = (sin a)/a = 0.257</span> (0.25665…).
        "A1: <span class=\"chem\">m = (sin a)/a = 0.257</span> (0.25665…).",
      ],
    },

    // ── t5-2-q055 · numeric · challenge · SL · SL 5.5, 5.11 · 6 marks
    "t5-2-q055": {
      // EN: <p>A gardener’s flower bed is the region in the first quadrant enclosed by the curve <span class="chem">y = 4 - x^2</span> and the coordinate axes (units in metres). A straight path is to be laid along a vertical line <span class="chem">x = p</span> so that the bed is split into two parts of equal area. Find the value of <span class="chem">p</span>, correct to 3 significant figures.</p>
      stem: "<p>한 정원사의 화단은 제1사분면에서 곡선 <span class=\"chem\">y = 4 - x^2</span>과 좌표축으로 둘러싸인 영역이다 (단위는 미터). 화단을 넓이가 같은 두 부분으로 나누도록 세로선 <span class=\"chem\">x = p</span>를 따라 곧은 길을 낸다. <span class=\"chem\">p</span>의 값을 유효숫자 3자리로 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: find the whole area first, then find the upper limit <span class="chem">p</span> for which <span class="chem">int_0^p (4 - x^2) dx</span> is half of it. The unknown is a limit of integration.
        "해석: 먼저 전체 넓이를 구한 다음, <span class=\"chem\">int_0^p (4 - x^2) dx</span>가 그 절반이 되는 위끝 <span class=\"chem\">p</span>을 구하세요. 미지수는 적분 구간의 끝이에요.",
        // EN: The whole bed has area <span class="chem">int_0^2 (4 - x^2) dx = 16/3</span>, so you need <span class="chem">int_0^p (4 - x^2) dx = 8/3</span>.
        "화단 전체의 넓이는 <span class=\"chem\">int_0^2 (4 - x^2) dx = 16/3</span>이므로, <span class=\"chem\">int_0^p (4 - x^2) dx = 8/3</span>가 필요해요.",
        // EN: This gives the cubic <span class="chem">4p - p^3/3 = 8/3</span>, i.e. <span class="chem">p^3 - 12p + 8 = 0</span>. Solve it on your GDC and choose the root with <span class="chem">0 &lt; p &lt; 2</span>.
        "이로부터 삼차방정식 <span class=\"chem\">4p - p^3/3 = 8/3</span>, 즉 <span class=\"chem\">p^3 - 12p + 8 = 0</span>를 얻어요. GDC로 풀고 <span class=\"chem\">0 &lt; p &lt; 2</span>을 만족하는 근을 고르세요.",
      ],
      // EN: <p>Decode: “split into two parts of equal area” by a vertical line means <span class="chem">int_0^p f = (1/2) int_0^2 f</span>. The bed meets the <span class="chem">x</span>-axis at <span class="chem">x = 2</span> and has area <span class="chem">[4x - x^3/3]_0^2 = 8 - 8/3 = 16/3</span>. So <span class="chem">4p - p^3/3 = 8/3</span>, i.e. <span class="chem">p^3 - 12p + 8 = 0</span>. Its roots are about <span class="chem">-3.76</span>, <span class="chem">0.695</span> and <span class="chem">3.06</span>; only <span class="chem">p = 0.69459…</span> lies in <span class="chem">(0, 2)</span>. So <span class="chem">p = 0.695</span> <span class="unit">m</span> (3 s.f.). The path is not at <span class="chem">x = 1</span>, because the bed is taller near the <span class="chem">y</span>-axis.</p>
      solution: "<p>해석: 세로선으로 “넓이가 같은 두 부분으로 나눈다”는 것은 <span class=\"chem\">int_0^p f = (1/2) int_0^2 f</span>이라는 뜻이에요. 화단은 <span class=\"chem\">x = 2</span>에서 <span class=\"chem\">x</span>축과 만나고 넓이는 <span class=\"chem\">[4x - x^3/3]_0^2 = 8 - 8/3 = 16/3</span>예요. 따라서 <span class=\"chem\">4p - p^3/3 = 8/3</span>, 즉 <span class=\"chem\">p^3 - 12p + 8 = 0</span>이에요. 그 근은 약 <span class=\"chem\">-3.76</span>, <span class=\"chem\">0.695</span>, <span class=\"chem\">3.06</span>이고, <span class=\"chem\">(0, 2)</span>에 있는 것은 <span class=\"chem\">p = 0.69459…</span>뿐이에요. 따라서 <span class=\"chem\">p = 0.695</span> <span class=\"unit\">m</span> (유효숫자 3자리)예요. 화단은 <span class=\"chem\">y</span>축 근처에서 더 높기 때문에 길은 <span class=\"chem\">x = 1</span>에 있지 않아요.</p>",
    },

    // ── t5-2-q056 · numeric · challenge · SL · SL 5.9, 5.10 · 6 marks
    "t5-2-q056": {
      // EN: <p>Two runners, Ana and Ben, start together from the same point on a long straight track at <span class="chem">t = 0</span> and run in the same direction. Ana’s velocity is <span class="chem">v_A(t) = 2 + sin t</span> <span class="unit">m s-1</span> and Ben’s velocity is <span class="chem">v_B(t) = 0.5t</span> <span class="unit">m s-1</span>, where <span class="chem">t</span> is in seconds. Find the time when the runners are next level with each other. Give your answer correct to 3 significant figures.</p>
      stem: "<p>두 달리기 선수 Ana와 Ben이 <span class=\"chem\">t = 0</span>에 길고 곧은 트랙 위의 같은 지점에서 함께 출발하여 같은 방향으로 달린다. Ana의 속도는 <span class=\"chem\">v_A(t) = 2 + sin t</span> <span class=\"unit\">m s-1</span>이고 Ben의 속도는 <span class=\"chem\">v_B(t) = 0.5t</span> <span class=\"unit\">m s-1</span>이며, <span class=\"chem\">t</span>은 초 단위이다. 두 선수가 다음에 나란히 있게 되는 시각을 구하시오 (Find). 답은 유효숫자 3자리로 구하시오.</p>",
      hints: [
        // EN: Decode: “level with each other” means equal <strong>displacements</strong> from the start, not equal velocities. Find each displacement by integrating with <span class="chem">s(0) = 0</span>, then solve <span class="chem">s_A(t) = s_B(t)</span> for <span class="chem">t &gt; 0</span>.
        "해석: “나란히 있다”는 속도가 같다는 것이 아니라 출발점으로부터의 <strong>변위</strong>가 같다는 뜻이에요. <span class=\"chem\">s(0) = 0</span>로 적분하여 각각의 변위를 구한 다음, <span class=\"chem\">t &gt; 0</span>에 대하여 <span class=\"chem\">s_A(t) = s_B(t)</span>를 푸세요.",
        // EN: <span class="chem">s_A(t) = 2t + 1 - cos t</span> (note the constant: <span class="chem">s_A(0) = 0</span> needs the <span class="chem">+1</span>) and <span class="chem">s_B(t) = t^2/4</span>.
        "<span class=\"chem\">s_A(t) = 2t + 1 - cos t</span> (상수에 주의: <span class=\"chem\">s_A(0) = 0</span>에는 <span class=\"chem\">+1</span>이 필요해요)과 <span class=\"chem\">s_B(t) = t^2/4</span>.",
        // EN: Graph <span class="chem">y = 2x + 1 - cos x - x^2/4</span> (radians) and find its first zero after <span class="chem">x = 0</span>.
        "<span class=\"chem\">y = 2x + 1 - cos x - x^2/4</span>의 그래프(라디안)를 그리고 <span class=\"chem\">x = 0</span> 이후의 첫 번째 영점을 찾으세요.",
      ],
      // EN: <p>Decode: meeting means equal positions. <span class="chem">s_A(t) = int_0^t (2 + sin u) du = 2t - cos t + 1</span> and <span class="chem">s_B(t) = int_0^t 0.5u du = t^2/4</span>. Solve <span class="chem">2t + 1 - cos t = t^2/4</span>. Apart from <span class="chem">t = 0</span>, the GDC gives <span class="chem">t = 8.82786…</span>, so they are level again after <span class="chem">8.83</span> <span class="unit">s</span> (3 s.f.). (Equal velocities, <span class="chem">2 + sin t = 0.5t</span>, happen earlier, at about <span class="chem">t = 3.43</span> s; that is when Ben is furthest behind, not when he catches up.)</p>
      solution: "<p>해석: 만난다는 것은 위치가 같다는 뜻이에요. <span class=\"chem\">s_A(t) = int_0^t (2 + sin u) du = 2t - cos t + 1</span>, <span class=\"chem\">s_B(t) = int_0^t 0.5u du = t^2/4</span>. <span class=\"chem\">2t + 1 - cos t = t^2/4</span>을 풀어요. <span class=\"chem\">t = 0</span> 말고는 GDC로 <span class=\"chem\">t = 8.82786…</span>이므로, 두 선수는 <span class=\"chem\">8.83</span> <span class=\"unit\">s</span> 후에 다시 나란히 있어요 (유효숫자 3자리). (속도가 같아지는 <span class=\"chem\">2 + sin t = 0.5t</span>은 그보다 이른 약 <span class=\"chem\">t = 3.43</span> s이고, 그때는 Ben이 가장 많이 뒤처져 있을 때이지 따라잡을 때가 아니에요.)</p>",
    },

    // ── t5-2-q057 · numeric · challenge · SL · SL 5.5, 5.9 · 5 marks
    "t5-2-q057": {
      // EN: <p>A particle moves in a straight line with velocity <span class="chem">v(t) = 2t - 5 + 3 cos(2t)</span> <span class="unit">m s-1</span>, where <span class="chem">t &gt;= 0</span> is in seconds. Find the distance travelled by the particle during the third second of its motion. Give your answer correct to 3 significant figures.</p>
      stem: "<p>한 입자가 속도 <span class=\"chem\">v(t) = 2t - 5 + 3 cos(2t)</span> <span class=\"unit\">m s-1</span>로 직선 위를 움직이며, <span class=\"chem\">t &gt;= 0</span>은 초 단위이다. 운동의 3초째 동안 입자가 움직인 이동 거리를 구하시오 (Find). 답은 유효숫자 3자리로 구하시오.</p>",
      hints: [
        // EN: Decode: “the third second” is the interval from <span class="chem">t = 2</span> to <span class="chem">t = 3</span> (the first second is <span class="chem">0 &lt;= t &lt;= 1</span>). “Distance travelled” means <span class="chem">int |v| dt</span>.
        "해석: “3초째”는 <span class=\"chem\">t = 2</span>부터 <span class=\"chem\">t = 3</span>까지의 구간이에요 (1초째는 <span class=\"chem\">0 &lt;= t &lt;= 1</span>). “움직인 이동 거리”는 <span class=\"chem\">int |v| dt</span>를 뜻해요.",
        // EN: Check the sign of <span class="chem">v</span> on <span class="chem">[2, 3]</span> (radians): it changes sign at <span class="chem">t ≈ 2.392</span>.
        "<span class=\"chem\">[2, 3]</span>에서 <span class=\"chem\">v</span>의 부호를 확인하세요 (라디안). <span class=\"chem\">t ≈ 2.392</span>에서 부호가 바뀌어요.",
        // EN: Evaluate <span class="chem">int_2^3 |2t - 5 + 3 cos(2t)| dt</span> on your GDC.
        "GDC로 <span class=\"chem\">int_2^3 |2t - 5 + 3 cos(2t)| dt</span>을 계산하세요.",
      ],
      // EN: <p>Decode: third second = <span class="chem">[2, 3]</span>, and distance = <span class="chem">int |v|</span>. In radians, <span class="chem">v(2) = -1 + 3 cos 4 ≈ -2.96 &lt; 0</span> and <span class="chem">v(3) = 1 + 3 cos 6 ≈ 3.88 &gt; 0</span>, with a single zero at <span class="chem">t = 2.39217…</span>. So the distance is <span class="chem">int_2^3 |v(t)| dt = 0.59929… + 1.31537… = 1.91466…</span>, i.e. <span class="chem">1.91</span> <span class="unit">m</span> (3 s.f.). The displacement over the same second is only <span class="chem">0.716</span> <span class="unit">m</span>.</p>
      solution: "<p>해석: 3초째 = <span class=\"chem\">[2, 3]</span>, 이동 거리 = <span class=\"chem\">int |v|</span>예요. 라디안에서 <span class=\"chem\">v(2) = -1 + 3 cos 4 ≈ -2.96 &lt; 0</span>, <span class=\"chem\">v(3) = 1 + 3 cos 6 ≈ 3.88 &gt; 0</span>이고, 영점은 <span class=\"chem\">t = 2.39217…</span> 하나뿐이에요. 따라서 이동 거리는 <span class=\"chem\">int_2^3 |v(t)| dt = 0.59929… + 1.31537… = 1.91466…</span>, 즉 <span class=\"chem\">1.91</span> <span class=\"unit\">m</span> (유효숫자 3자리)예요. 같은 1초 동안의 변위는 <span class=\"chem\">0.716</span> <span class=\"unit\">m</span>뿐이에요.</p>",
    },

    // ── t5-2-q058 · short · exam · SL · SL 5.5, 5.10 · 9 marks
    "t5-2-q058": {
      // EN: <p>A seedling is planted when it is <span class="chem">5</span> <span class="unit">cm</span> tall. Its height <span class="chem">h</span> <span class="unit">cm</span> after <span class="chem">t</span> weeks grows at the rate <span class="chem">dh/dt = 8/(t + 2) + 0.4 cos t</span>, for <span class="chem">0 &lt;= t &lt;= 10</span>.<br>(a) Find an expression for <span class="chem">h</span> in terms of <span class="chem">t</span>. <strong>[5 marks]</strong><br>(b) Find the height of the seedling after 10 weeks. <strong>[2 marks]</strong><br>(c) Find the time when the seedling is first <span class="chem">15</span> <span class="unit">cm</span> tall. <strong>[2 marks]</strong><br>Give non-exact answers correct to 3 significant figures.</p>
      stem: "<p>묘목을 키가 <span class=\"chem\">5</span> <span class=\"unit\">cm</span>일 때 심는다. <span class=\"chem\">t</span>주 후의 키 <span class=\"chem\">h</span> <span class=\"unit\">cm</span>는 <span class=\"chem\">0 &lt;= t &lt;= 10</span>에서 비율 <span class=\"chem\">dh/dt = 8/(t + 2) + 0.4 cos t</span>으로 자란다.<br>(a) <span class=\"chem\">h</span>을 <span class=\"chem\">t</span>에 대한 식으로 구하시오 (Find). <strong>[5 marks]</strong><br>(b) 10주 후 묘목의 키를 구하시오 (Find). <strong>[2 marks]</strong><br>(c) 묘목의 키가 처음으로 <span class=\"chem\">15</span> <span class=\"unit\">cm</span>이 되는 시각을 구하시오 (Find). <strong>[2 marks]</strong><br>정확한 값이 아닌 답은 유효숫자 3자리로 구하시오.</p>",
      hints: [
        // EN: Decode: “planted when it is 5 cm tall” is the boundary condition <span class="chem">h(0) = 5</span>. Integrate the rate, then use it to find the constant.
        "해석: “키가 5 cm일 때 심는다”는 경계 조건 <span class=\"chem\">h(0) = 5</span>이에요. 비율을 적분한 다음, 그것을 이용하여 상수를 구하세요.",
        // EN: <span class="chem">int 8/(t + 2) dt = 8 ln(t + 2)</span> (no modulus needed as <span class="chem">t + 2 &gt; 0</span>) and <span class="chem">int 0.4 cos t dt = 0.4 sin t</span>.
        "<span class=\"chem\">int 8/(t + 2) dt = 8 ln(t + 2)</span> (<span class=\"chem\">t + 2 &gt; 0</span>이므로 절댓값 필요 없음)과 <span class=\"chem\">int 0.4 cos t dt = 0.4 sin t</span>.",
        // EN: For (c), graph <span class="chem">h(t)</span> and <span class="chem">y = 15</span> in radian mode and find the first intersection.
        "(c)에서는 라디안 모드에서 <span class=\"chem\">h(t)</span>과 <span class=\"chem\">y = 15</span>의 그래프를 그리고 첫 번째 교점을 찾으세요.",
      ],
      // EN: <p>(a) <span class="chem">h = int (8/(t + 2) + 0.4 cos t) dt = 8 ln(t + 2) + 0.4 sin t + C</span>. Since <span class="chem">h(0) = 5</span>: <span class="chem">8 ln 2 + 0 + C = 5</span>, so <span class="chem">C = 5 - 8 ln 2</span> and <span class="chem">h = 8 ln(t + 2) + 0.4 sin t + 5 - 8 ln 2</span> (equivalently <span class="chem">8 ln((t + 2)/2) + 0.4 sin t + 5</span>).<br>(b) <span class="chem">h(10) = 8 ln 6 + 0.4 sin 10 + 5 = 14.334… - 0.2176… + 5 = 19.116…</span>, so <span class="chem">19.1</span> <span class="unit">cm</span>.<br>(c) <span class="chem">dh/dt &gt; 0</span> throughout, so <span class="chem">h</span> is increasing and <span class="chem">h(t) = 15</span> has one solution: <span class="chem">t = 5.2810…</span>, i.e. <span class="chem">5.28</span> weeks.</p>
      solution: "<p>(a) <span class=\"chem\">h = int (8/(t + 2) + 0.4 cos t) dt = 8 ln(t + 2) + 0.4 sin t + C</span>. <span class=\"chem\">h(0) = 5</span>에서: <span class=\"chem\">8 ln 2 + 0 + C = 5</span>이므로 <span class=\"chem\">C = 5 - 8 ln 2</span>, <span class=\"chem\">h = 8 ln(t + 2) + 0.4 sin t + 5 - 8 ln 2</span> (같은 식 <span class=\"chem\">8 ln((t + 2)/2) + 0.4 sin t + 5</span>).<br>(b) <span class=\"chem\">h(10) = 8 ln 6 + 0.4 sin 10 + 5 = 14.334… - 0.2176… + 5 = 19.116…</span>이므로 <span class=\"chem\">19.1</span> <span class=\"unit\">cm</span>.<br>(c) 전체 구간에서 <span class=\"chem\">dh/dt &gt; 0</span>이므로 <span class=\"chem\">h</span>은 증가하고 <span class=\"chem\">h(t) = 15</span>의 해는 하나예요: <span class=\"chem\">t = 5.2810…</span>, 즉 <span class=\"chem\">5.28</span>주.</p>",
      // EN: <p>(a) <span class="chem">h = 8 ln(t + 2) + 0.4 sin t + 5 - 8 ln 2</span><br>(b) <span class="chem">19.1</span> <span class="unit">cm</span><br>(c) <span class="chem">t = 5.28</span> weeks</p>
      answer: "<p>(a) <span class=\"chem\">h = 8 ln(t + 2) + 0.4 sin t + 5 - 8 ln 2</span><br>(b) <span class=\"chem\">19.1</span> <span class=\"unit\">cm</span><br>(c) <span class=\"chem\">t = 5.28</span>주</p>",
      markscheme: [
        // EN: M1: Integrates <span class="chem">dh/dt</span> term by term.
        "M1: <span class=\"chem\">dh/dt</span>을 항별로 적분함.",
        // EN: A1: <span class="chem">8 ln(t + 2)</span>.
        "A1: <span class=\"chem\">8 ln(t + 2)</span>.",
        // EN: A1: <span class="chem">+ 0.4 sin t + C</span>.
        "A1: <span class=\"chem\">+ 0.4 sin t + C</span>.",
        // EN: M1: Uses <span class="chem">h(0) = 5</span>: <span class="chem">8 ln 2 + 0 + C = 5</span>.
        "M1: <span class=\"chem\">h(0) = 5</span>을 이용함: <span class=\"chem\">8 ln 2 + 0 + C = 5</span>.",
        // EN: A1: <span class="chem">C = 5 - 8 ln 2</span>, so <span class="chem">h = 8 ln(t + 2) + 0.4 sin t + 5 - 8 ln 2</span>.
        "A1: <span class=\"chem\">C = 5 - 8 ln 2</span>이므로 <span class=\"chem\">h = 8 ln(t + 2) + 0.4 sin t + 5 - 8 ln 2</span>.",
        // EN: M1: Substitutes <span class="chem">t = 10</span> (radians): <span class="chem">8 ln 12 + 0.4 sin 10 + 5 - 8 ln 2</span>.
        "M1: <span class=\"chem\">t = 10</span>을 대입함 (라디안): <span class=\"chem\">8 ln 12 + 0.4 sin 10 + 5 - 8 ln 2</span>.",
        // EN: A1: <span class="chem">19.1</span> <span class="unit">cm</span> (19.116…).
        "A1: <span class=\"chem\">19.1</span> <span class=\"unit\">cm</span> (19.116…).",
        // EN: M1: Solves <span class="chem">h(t) = 15</span> on the GDC.
        "M1: GDC로 <span class=\"chem\">h(t) = 15</span>을 풂.",
        // EN: A1: <span class="chem">t = 5.28</span> weeks.
        "A1: <span class=\"chem\">t = 5.28</span>주.",
      ],
    },

    // ── t5-2-q059 · numeric · exam · SL · SL 5.5, 5.11 · 5 marks
    "t5-2-q059": {
      // EN: <p>The region <span class="chem">R</span> is enclosed by the curves <span class="chem">y = sqrt(x)</span> and <span class="chem">y = x^2 - 2</span> and the <span class="chem">y</span>-axis. Find the area of <span class="chem">R</span>, correct to 3 significant figures.</p>
      stem: "<p>영역 <span class=\"chem\">R</span>은 곡선 <span class=\"chem\">y = sqrt(x)</span>, <span class=\"chem\">y = x^2 - 2</span>과 <span class=\"chem\">y</span>축으로 둘러싸여 있다. <span class=\"chem\">R</span>의 넓이를 유효숫자 3자리로 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: the left edge of <span class="chem">R</span> is the <span class="chem">y</span>-axis (<span class="chem">x = 0</span>) and the right edge is where the two curves meet. Part of <span class="chem">R</span> is below the <span class="chem">x</span>-axis, but you still integrate (upper − lower).
        "해석: <span class=\"chem\">R</span>의 왼쪽 경계는 <span class=\"chem\">y</span>축(<span class=\"chem\">x = 0</span>)이고 오른쪽 경계는 두 곡선이 만나는 곳이에요. <span class=\"chem\">R</span>의 일부는 <span class=\"chem\">x</span>축 아래에 있지만, 그래도 (위쪽 − 아래쪽)을 적분해요.",
        // EN: The GDC intersection of <span class="chem">y = sqrt(x)</span> and <span class="chem">y = x^2 - 2</span> is at <span class="chem">x ≈ 1.8312</span>; <span class="chem">sqrt(x)</span> is the upper curve on <span class="chem">(0, 1.8312)</span>.
        "<span class=\"chem\">y = sqrt(x)</span>과 <span class=\"chem\">y = x^2 - 2</span>의 GDC 교점은 <span class=\"chem\">x ≈ 1.8312</span>이에요. <span class=\"chem\">(0, 1.8312)</span>에서 <span class=\"chem\">sqrt(x)</span>가 위쪽 곡선이에요.",
        // EN: Evaluate <span class="chem">int_0^{1.8312} (sqrt(x) - x^2 + 2) dx</span>.
        "<span class=\"chem\">int_0^{1.8312} (sqrt(x) - x^2 + 2) dx</span>을 계산하세요.",
      ],
      // EN: <p>The curves meet (for <span class="chem">x &gt;= 0</span>) at <span class="chem">x = c = 1.83117…</span>. On <span class="chem">[0, c]</span>, <span class="chem">sqrt(x) &gt;= x^2 - 2</span> (e.g. at <span class="chem">x = 0</span>: <span class="chem">0 &gt; -2</span>). Area <span class="chem">= int_0^c (sqrt(x) - (x^2 - 2)) dx = 3.26755…</span>, i.e. <span class="chem">3.27</span> (3 s.f.). Splitting at the <span class="chem">x</span>-axis is unnecessary: the integrand (upper − lower) is never negative.</p>
      solution: "<p>두 곡선은 (<span class=\"chem\">x &gt;= 0</span>에서) <span class=\"chem\">x = c = 1.83117…</span>에서 만나요. <span class=\"chem\">[0, c]</span>에서 <span class=\"chem\">sqrt(x) &gt;= x^2 - 2</span> (예: <span class=\"chem\">x = 0</span>에서 <span class=\"chem\">0 &gt; -2</span>). 넓이는 <span class=\"chem\">= int_0^c (sqrt(x) - (x^2 - 2)) dx = 3.26755…</span>, 즉 <span class=\"chem\">3.27</span> (유효숫자 3자리)예요. <span class=\"chem\">x</span>축에서 나눌 필요는 없어요. 피적분함수 (위쪽 − 아래쪽)은 절대 음수가 되지 않아요.</p>",
    },

  }
});
