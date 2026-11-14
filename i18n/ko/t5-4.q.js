/* t5-4.q — ko question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't5-4.q', {
  questions: {

    // ── t5-4-q001 · numeric · foundation · AHL · AHL 5.18 · 3 marks
    "t5-4-q001": {
      // EN: <p>Given <span class="chem">dy/dx = 2x - y</span> with initial condition <span class="chem">y(0) = 2</span>, use Euler’s method with step size <span class="chem">h = 0.2</span> to approximate <span class="chem">y(0.4)</span>.</p>
      stem: "<p>초기조건 <span class=\"chem\">y(0) = 2</span>인 미분방정식 <span class=\"chem\">dy/dx = 2x - y</span>가 주어졌을 때, 단계 크기 <span class=\"chem\">h = 0.2</span>인 오일러 방법을 사용하여 <span class=\"chem\">y(0.4)</span>의 근삿값을 구하시오 (approximate).</p>",
      hints: [
        // EN: First step (<span class="chem">x_0 = 0, y_0 = 2</span>): <span class="chem">y_1 = 2 + 0.2(2(0) - 2) = 1.6</span> at <span class="chem">x_1 = 0.2</span>.
        "첫 번째 단계(<span class=\"chem\">x_0 = 0, y_0 = 2</span>): <span class=\"chem\">x_1 = 0.2</span>에서 <span class=\"chem\">y_1 = 2 + 0.2(2(0) - 2) = 1.6</span>이에요.",
        // EN: Second step (<span class="chem">x_1 = 0.2, y_1 = 1.6</span>): <span class="chem">y_2 = 1.6 + 0.2(2(0.2) - 1.6)</span>.
        "두 번째 단계(<span class=\"chem\">x_1 = 0.2, y_1 = 1.6</span>): <span class=\"chem\">y_2 = 1.6 + 0.2(2(0.2) - 1.6)</span>예요.",
      ],
      // EN: <p>Step 1: <span class="chem">y_1 = 2 + 0.2(0 - 2) = 1.6</span> at <span class="chem">x_1 = 0.2</span>. Step 2: <span class="chem">y_2 = 1.6 + 0.2(0.4 - 1.6) = 1.6 - 0.24 = 1.36</span>.</p>
      solution: "<p>1단계: <span class=\"chem\">x_1 = 0.2</span>에서 <span class=\"chem\">y_1 = 2 + 0.2(0 - 2) = 1.6</span>이에요. 2단계: <span class=\"chem\">y_2 = 1.6 + 0.2(0.4 - 1.6) = 1.6 - 0.24 = 1.36</span>이에요.</p>",
    },

    // ── t5-4-q002 · mcq · foundation · AHL · AHL 5.18 · 2 marks
    "t5-4-q002": {
      // EN: <p>A solution curve <span class="chem">y = f(x)</span> is <strong>concave down</strong> (<span class="chem">d^2y/dx^2 &lt; 0</span>) on the interval <span class="chem">[0, 1]</span>. What can be concluded about an Euler’s method approximation of <span class="chem">f(1)</span> starting from <span class="chem">(0, f(0))</span>?</p>
      stem: "<p>해곡선 <span class=\"chem\">y = f(x)</span>가 구간 <span class=\"chem\">[0, 1]</span>에서 <strong>위로 볼록</strong>(<span class=\"chem\">d^2y/dx^2 &lt; 0</span>)해요. <span class=\"chem\">(0, f(0))</span>에서 출발하여 오일러 방법으로 구한 <span class=\"chem\">f(1)</span>의 근삿값에 대해 무엇을 알 수 있나요?</p>",
      options: [
        // EN: It gives an <strong>overestimate</strong> because the tangent lines lie above the curve.
        "접선들이 곡선 위에 놓이므로 <strong>과대평가</strong>해요.",
        // EN: It gives an <strong>underestimate</strong> because the tangent lines lie below the curve.
        "접선들이 곡선 아래에 놓이므로 <strong>과소평가</strong>해요.",
        // EN: It gives the exact value because Euler’s method is independent of concavity.
        "오일러 방법은 오목과 볼록에 무관하므로 정확한 값을 주어요.",
        // EN: It gives an <strong>underestimate</strong> whenever <span class="chem">dy/dx &gt; 0</span> and an overestimate whenever <span class="chem">dy/dx &lt; 0</span>.
        "<span class=\"chem\">dy/dx &gt; 0</span>일 때는 <strong>과소평가</strong>하고, <span class=\"chem\">dy/dx &lt; 0</span>일 때는 과대평가해요.",
      ],
      hints: [
        // EN: Sketch a concave-down curve (shaped like an arch) and draw its tangent line at the starting point.
        "위로 볼록한 곡선(아치 모양)을 그리고 출발점에서의 접선을 그려 보세요.",
      ],
      // EN: <p>When <span class="chem">d^2y/dx^2 &lt; 0</span>, the gradient is decreasing, so every tangent line sits above the curve. Stepping along tangent lines therefore produces an overestimate.</p>
      solution: "<p><span class=\"chem\">d^2y/dx^2 &lt; 0</span>이면 기울기가 감소하므로 모든 접선이 곡선 위에 놓여요. 따라서 접선을 따라 이동하면 과대평가된 값이 나와요.</p>",
      misconception: {
        // EN (option B): Tangent lines lie below a curve only when it is concave <em>up</em> (<span class="chem">d^2y/dx^2 &gt; 0</span>).
        "1": "접선이 곡선 아래에 놓이는 것은 <em>아래로 볼록</em>(<span class=\"chem\">d^2y/dx^2 &gt; 0</span>)할 때예요.",
        // EN (option C): Euler’s method follows straight tangent segments, so curvature (<span class="chem">d^2y/dx^2 != 0</span>) always introduces truncation error.
        "2": "오일러 방법은 직선인 접선 조각을 따라가므로 곡률(<span class=\"chem\">d^2y/dx^2 != 0</span>)이 있으면 항상 절단 오차가 생겨요.",
        // EN (option D): The direction of the bias depends on the sign of the second derivative (concavity), not the first derivative.
        "3": "오차의 방향은 일계도함수가 아니라 이계도함수의 부호(오목과 볼록)에 따라 결정돼요.",
      },
    },

    // ── t5-4-q003 · mcq · foundation · AHL · AHL 5.18 · 2 marks
    "t5-4-q003": {
      // EN: <p>Solve the separable differential equation <span class="chem">dy/dx = 2y / x</span> (<span class="chem">x &gt; 0, y &gt; 0</span>) given that <span class="chem">y(1) = 3</span>.</p>
      stem: "<p><span class=\"chem\">y(1) = 3</span>일 때 변수분리형 미분방정식 <span class=\"chem\">dy/dx = 2y / x</span> (<span class=\"chem\">x &gt; 0, y &gt; 0</span>)을 푸시오 (Solve).</p>",
      options: [
        // EN: <span class="chem">y = 3x^2</span>
        "<span class=\"chem\">y = 3x^2</span>",
        // EN: <span class="chem">y = x^2 + 2</span>
        "<span class=\"chem\">y = x^2 + 2</span>",
        // EN: <span class="chem">y = 3e^{2x}</span>
        "<span class=\"chem\">y = 3e^{2x}</span>",
        // EN: <span class="chem">y = 3 sqrt(x)</span>
        "<span class=\"chem\">y = 3 sqrt(x)</span>",
      ],
      hints: [
        // EN: Separate variables: <span class="chem">int (1/y) dy = int (2/x) dx</span>.
        "변수를 분리하세요: <span class=\"chem\">int (1/y) dy = int (2/x) dx</span>.",
        // EN: Use <span class="chem">2 ln x = ln(x^2)</span> before exponentiating both sides.
        "양변에 지수를 취하기 전에 <span class=\"chem\">2 ln x = ln(x^2)</span>를 쓰세요.",
      ],
      // EN: <p><span class="chem">int (1/y) dy = int (2/x) dx => ln y = 2 ln x + C => y = A x^2</span>. Since <span class="chem">y(1) = 3</span>, <span class="chem">A = 3</span>, giving <span class="chem">y = 3x^2</span>.</p>
      solution: "<p><span class=\"chem\">int (1/y) dy = int (2/x) dx => ln y = 2 ln x + C => y = A x^2</span>예요. <span class=\"chem\">y(1) = 3</span>이므로 <span class=\"chem\">A = 3</span>이 되어 <span class=\"chem\">y = 3x^2</span>이에요.</p>",
      misconception: {
        // EN (option B): After integrating <span class="chem">ln y = 2 ln x + C</span>, exponentiating gives <span class="chem">y = A x^2</span> (a multiplicative constant), not <span class="chem">x^2 + C</span>.
        "1": "<span class=\"chem\">ln y = 2 ln x + C</span>를 적분한 뒤 양변을 지수화하면 <span class=\"chem\">x^2 + C</span>가 아니라 곱셈 상수가 붙은 <span class=\"chem\">y = A x^2</span>가 돼요.",
        // EN (option C): The right-hand side is <span class="chem">int (2/x) dx = 2 ln x</span>, not <span class="chem">2x</span>.
        "2": "우변은 <span class=\"chem\">2x</span>가 아니라 <span class=\"chem\">int (2/x) dx = 2 ln x</span>예요.",
        // EN (option D): Notice <span class="chem">2 ln x = ln(x^2)</span>, not <span class="chem">ln(x^{1/2})</span>.
        "3": "<span class=\"chem\">2 ln x = ln(x^2)</span>이지 <span class=\"chem\">ln(x^{1/2})</span>가 아니에요.",
      },
    },

    // ── t5-4-q004 · multi · foundation · AHL · AHL 5.18–5.19 · 3 marks
    "t5-4-q004": {
      // EN: <p>Select <strong>all</strong> statements that are true in the IB Math AA HL syllabus.</p>
      stem: "<p>IB Math AA HL 교육과정에서 옳은 설명을 <strong>모두</strong> 고르시오.</p>",
      options: [
        // EN: The integrating factor for <span class="chem">dy/dx + P(x)y = Q(x)</span> is <span class="chem">I(x) = e^{int P(x) dx}</span>.
        "<span class=\"chem\">dy/dx + P(x)y = Q(x)</span>의 적분인자는 <span class=\"chem\">I(x) = e^{int P(x) dx}</span>이다.",
        // EN: The substitution <span class="chem">y = vx</span> transforms any homogeneous DE <span class="chem">dy/dx = F(y/x)</span> into a separable DE in <span class="chem">v</span> and <span class="chem">x</span>.
        "치환 <span class=\"chem\">y = vx</span>는 모든 동차 미분방정식 <span class=\"chem\">dy/dx = F(y/x)</span>를 <span class=\"chem\">v</span>와 <span class=\"chem\">x</span>에 대한 변수분리형 미분방정식으로 바꾼다.",
        // EN: In the Maclaurin series for <span class="chem">ln(1 + x)</span>, the <span class="chem">x^n</span> term has denominator <span class="chem">n</span>, not <span class="chem">n!</span>.
        "<span class=\"chem\">ln(1 + x)</span>의 매클로린 급수에서 <span class=\"chem\">x^n</span>항의 분모는 <span class=\"chem\">n!</span>이 아니라 <span class=\"chem\">n</span>이다.",
        // EN: In the Maclaurin series for <span class="chem">arctan x</span>, the <span class="chem">x^3</span> term is <span class="chem">-x^3 / 3!</span>.
        "<span class=\"chem\">arctan x</span>의 매클로린 급수에서 <span class=\"chem\">x^3</span>항은 <span class=\"chem\">-x^3 / 3!</span>이다.",
      ],
      hints: [
        // EN: Check the Formula Booklet expansions for <span class="chem">ln(1 + x)</span> and <span class="chem">arctan x</span> carefully.
        "공식집에서 <span class=\"chem\">ln(1 + x)</span>와 <span class=\"chem\">arctan x</span>의 전개를 주의 깊게 확인해 보세요.",
      ],
      // EN: <p>The first three statements are all true. For <span class="chem">arctan x</span>, the denominators are odd integers <span class="chem">1, 3, 5, ...</span> without factorials.</p>
      solution: "<p>처음 세 설명은 모두 참이에요. <span class=\"chem\">arctan x</span>의 분모는 계승이 없는 홀수 <span class=\"chem\">1, 3, 5, ...</span>예요.</p>",
      misconception: {
        // EN (option D): <span class="chem">arctan x = x - x^3/3 + x^5/5 - ...</span> divides by <span class="chem">3</span>, not <span class="chem">3! = 6</span>.
        "3": "<span class=\"chem\">arctan x = x - x^3/3 + x^5/5 - ...</span>는 <span class=\"chem\">3! = 6</span>이 아니라 <span class=\"chem\">3</span>으로 나누어요.",
      },
    },

    // ── t5-4-q005 · numeric · foundation · AHL · AHL 5.19 · 2 marks
    "t5-4-q005": {
      // EN: <p>Find the exact coefficient of <span class="chem">x^3</span> in the Maclaurin series expansion of <span class="chem">f(x) = sin(2x)</span>. (You can enter an exact fraction like <span class="mono">-5/7</span>.)</p>
      stem: "<p><span class=\"chem\">f(x) = sin(2x)</span>의 매클로린 급수 전개에서 <span class=\"chem\">x^3</span>의 정확한 계수를 구하시오 (Find). (<span class=\"mono\">-5/7</span> 같은 정확한 분수로 입력할 수 있어요.)</p>",
      hints: [
        // EN: Substitute <span class="chem">u = 2x</span> into the standard Formula Booklet series <span class="chem">sin u = u - u^3/3! + ...</span>.
        "공식집의 기본 급수 <span class=\"chem\">sin u = u - u^3/3! + ...</span>에 <span class=\"chem\">u = 2x</span>를 대입하세요.",
      ],
      // EN: <p><span class="chem">sin(2x) = 2x - (2x)^3 / 6 + ... = 2x - (8/6)x^3 + ... = 2x - (4/3)x^3 + ...</span>, so the coefficient of <span class="chem">x^3</span> is <span class="chem">-4/3</span>.</p>
      solution: "<p><span class=\"chem\">sin(2x) = 2x - (2x)^3 / 6 + ... = 2x - (8/6)x^3 + ... = 2x - (4/3)x^3 + ...</span>이므로 <span class=\"chem\">x^3</span>의 계수는 <span class=\"chem\">-4/3</span>이에요.</p>",
    },

    // ── t5-4-q006 · mcq · foundation · AHL · AHL 5.18 · 2 marks
    "t5-4-q006": {
      // EN: <p>To solve the linear differential equation <span class="chem">x^2 (dy/dx) + 3xy = e^x</span> (<span class="chem">x &gt; 0</span>) using an integrating factor, what is <span class="chem">P(x)</span> in the standard form <span class="chem">dy/dx + P(x)y = Q(x)</span>?</p>
      stem: "<p>선형 미분방정식 <span class=\"chem\">x^2 (dy/dx) + 3xy = e^x</span> (<span class=\"chem\">x &gt; 0</span>)을 적분인자로 풀 때, 표준형 <span class=\"chem\">dy/dx + P(x)y = Q(x)</span>에서 <span class=\"chem\">P(x)</span>는 무엇인가요?</p>",
      options: [
        // EN: <span class="chem">3 / x</span>
        "<span class=\"chem\">3 / x</span>",
        // EN: <span class="chem">3x</span>
        "<span class=\"chem\">3x</span>",
        // EN: <span class="chem">3 / x^2</span>
        "<span class=\"chem\">3 / x^2</span>",
        // EN: <span class="chem">e^x / x^2</span>
        "<span class=\"chem\">e^x / x^2</span>",
      ],
      hints: [
        // EN: Divide every term by <span class="chem">x^2</span> so the coefficient of <span class="chem">dy/dx</span> is <span class="chem">1</span>.
        "<span class=\"chem\">dy/dx</span>의 계수가 <span class=\"chem\">1</span>이 되도록 모든 항을 <span class=\"chem\">x^2</span>으로 나누세요.",
      ],
      // EN: <p>Dividing by <span class="chem">x^2</span> gives <span class="chem">dy/dx + (3/x)y = e^x / x^2</span>, so <span class="chem">P(x) = 3/x</span>.</p>
      solution: "<p><span class=\"chem\">x^2</span>으로 나누면 <span class=\"chem\">dy/dx + (3/x)y = e^x / x^2</span>이므로 <span class=\"chem\">P(x) = 3/x</span>예요.</p>",
      misconception: {
        // EN (option B): You must divide the entire equation by the leading coefficient <span class="chem">x^2</span> before reading off <span class="chem">P(x)</span>.
        "1": "<span class=\"chem\">P(x)</span>를 읽기 전에 먼저 식 전체를 최고차 계수 <span class=\"chem\">x^2</span>으로 나누어야 해요.",
        // EN (option C): <span class="chem">(3x) / x^2</span> simplifies to <span class="chem">3 / x</span>, not <span class="chem">3 / x^2</span>.
        "2": "<span class=\"chem\">(3x) / x^2</span>을 약분하면 <span class=\"chem\">3 / x^2</span>이 아니라 <span class=\"chem\">3 / x</span>예요.",
        // EN (option D): <span class="chem">e^x / x^2</span> is <span class="chem">Q(x)</span> on the right-hand side, not <span class="chem">P(x)</span>.
        "3": "<span class=\"chem\">e^x / x^2</span>은 <span class=\"chem\">P(x)</span>가 아니라 우변의 <span class=\"chem\">Q(x)</span>예요.",
      },
    },

    // ── t5-4-q007 · order · exam · AHL · AHL 5.18 · 4 marks
    "t5-4-q007": {
      // EN: <p>Arrange the steps in the correct logical order to solve a homogeneous differential equation <span class="chem">dy/dx = F(y/x)</span>.</p>
      stem: "<p>동차 미분방정식 <span class=\"chem\">dy/dx = F(y/x)</span>을 푸는 단계를 논리적인 순서대로 배열하시오.</p>",
      options: [
        // EN: Introduce the substitution <span class="chem">y = vx</span> and differentiate using the product rule to get <span class="chem">dy/dx = v + x(dv/dx)</span>.
        "치환 <span class=\"chem\">y = vx</span>를 도입하고 곱의 미분법으로 미분해 <span class=\"chem\">dy/dx = v + x(dv/dx)</span>를 얻는다.",
        // EN: Substitute both expressions into the DE to obtain <span class="chem">v + x(dv/dx) = F(v)</span>, so <span class="chem">x(dv/dx) = F(v) - v</span>.
        "두 식을 미분방정식에 대입해 <span class=\"chem\">v + x(dv/dx) = F(v)</span>, 즉 <span class=\"chem\">x(dv/dx) = F(v) - v</span>를 얻는다.",
        // EN: Separate variables to integrate <span class="chem">int 1/(F(v) - v) dv = int (1/x) dx</span>.
        "변수를 분리해 <span class=\"chem\">int 1/(F(v) - v) dv = int (1/x) dx</span>를 적분한다.",
        // EN: Replace <span class="chem">v = y/x</span> and apply the initial condition to find the particular solution.
        "<span class=\"chem\">v = y/x</span>로 되돌리고 초기조건을 대입해 특수해를 구한다.",
      ],
      hints: [
        // EN: Start by defining <span class="chem">y = vx</span> and differentiating it before substituting into the DE.
        "미분방정식에 대입하기 전에 먼저 <span class=\"chem\">y = vx</span>로 놓고 미분하세요.",
      ],
      // EN: <p>Define <span class="chem">y = vx</span> and <span class="chem">dy/dx = v + x(dv/dx)</span>, substitute to isolate <span class="chem">x(dv/dx) = F(v) - v</span>, separate variables and integrate, and finally substitute <span class="chem">v = y/x</span> back.</p>
      solution: "<p><span class=\"chem\">y = vx</span>와 <span class=\"chem\">dy/dx = v + x(dv/dx)</span>를 정하고 대입해 <span class=\"chem\">x(dv/dx) = F(v) - v</span>로 정리한 뒤, 변수분리 후 적분하고 마지막에 <span class=\"chem\">v = y/x</span>를 다시 대입해요.</p>",
    },

    // ── t5-4-q008 · numeric · exam · AHL · AHL 5.18 · 5 marks
    "t5-4-q008": {
      // EN: <p>Solve the homogeneous differential equation <span class="chem">dy/dx = (x + 2y) / x</span> (<span class="chem">x &gt; 0</span>) given that <span class="chem">y(1) = 1</span>, and find the exact value of <span class="chem">y(2)</span>.</p>
      stem: "<p><span class=\"chem\">y(1) = 1</span>일 때 동차 미분방정식 <span class=\"chem\">dy/dx = (x + 2y) / x</span> (<span class=\"chem\">x &gt; 0</span>)을 풀고, <span class=\"chem\">y(2)</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Let <span class="chem">y = vx</span> so <span class="chem">v + x(dv/dx) = 1 + 2v => x(dv/dx) = 1 + v</span>.
        "<span class=\"chem\">y = vx</span>로 놓으면 <span class=\"chem\">v + x(dv/dx) = 1 + 2v => x(dv/dx) = 1 + v</span>예요.",
        // EN: Separate variables: <span class="chem">int 1/(1 + v) dv = int (1/x) dx => 1 + v = A x</span>. Use <span class="chem">y(1) = 1</span> (<span class="chem">v = 1</span>) to find <span class="chem">A = 2</span>.
        "변수를 분리하세요: <span class=\"chem\">int 1/(1 + v) dv = int (1/x) dx => 1 + v = A x</span>. <span class=\"chem\">y(1) = 1</span> (<span class=\"chem\">v = 1</span>)을 이용해 <span class=\"chem\">A = 2</span>를 구하세요.",
      ],
      // EN: <p>With <span class="chem">y = vx</span>, <span class="chem">v + x(dv/dx) = 1 + 2v => x(dv/dx) = 1 + v</span>. Integrating gives <span class="chem">ln|1 + v| = ln x + C => 1 + y/x = A x</span>. Using <span class="chem">y(1) = 1</span> gives <span class="chem">A = 2</span>, so <span class="chem">y = 2x^2 - x</span>. Thus <span class="chem">y(2) = 2(4) - 2 = 6</span>.</p>
      solution: "<p><span class=\"chem\">y = vx</span>로 놓으면 <span class=\"chem\">v + x(dv/dx) = 1 + 2v => x(dv/dx) = 1 + v</span>예요. 적분하면 <span class=\"chem\">ln|1 + v| = ln x + C => 1 + y/x = A x</span>예요. <span class=\"chem\">y(1) = 1</span>에서 <span class=\"chem\">A = 2</span>이므로 <span class=\"chem\">y = 2x^2 - x</span>가 되고, <span class=\"chem\">y(2) = 2(4) - 2 = 6</span>이에요.</p>",
    },

    // ── t5-4-q009 · numeric · exam · AHL · AHL 5.18 · 5 marks
    "t5-4-q009": {
      // EN: <p>Solve the differential equation <span class="chem">dy/dx + 2y = 6e^x</span> given that <span class="chem">y(0) = 5</span>, and find the exact value of <span class="chem">y(ln 2)</span>.</p>
      stem: "<p><span class=\"chem\">y(0) = 5</span>일 때 미분방정식 <span class=\"chem\">dy/dx + 2y = 6e^x</span>을 풀고, <span class=\"chem\">y(ln 2)</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: The integrating factor is <span class="chem">I(x) = e^{int 2 dx} = e^{2x}</span>.
        "적분인자는 <span class=\"chem\">I(x) = e^{int 2 dx} = e^{2x}</span>예요.",
        // EN: Multiply through to get <span class="chem">d/dx(y e^{2x}) = 6 e^{3x} => y e^{2x} = 2 e^{3x} + C</span>. Apply <span class="chem">y(0) = 5</span> to find <span class="chem">C = 3</span>.
        "양변에 곱하면 <span class=\"chem\">d/dx(y e^{2x}) = 6 e^{3x} => y e^{2x} = 2 e^{3x} + C</span>예요. <span class=\"chem\">y(0) = 5</span>를 대입해 <span class=\"chem\">C = 3</span>을 구하세요.",
      ],
      // EN: <p>Multiplying by <span class="chem">I(x) = e^{2x}</span> gives <span class="chem">d/dx(y e^{2x}) = 6 e^{3x}</span>, so <span class="chem">y e^{2x} = 2 e^{3x} + C</span>. At <span class="chem">(0, 5)</span>: <span class="chem">5 = 2 + C => C = 3</span>, giving <span class="chem">y = 2e^x + 3e^{-2x}</span>. At <span class="chem">x = ln 2</span>: <span class="chem">y = 2(2) + 3(1/4) = 4.75</span>.</p>
      solution: "<p><span class=\"chem\">I(x) = e^{2x}</span>을 곱하면 <span class=\"chem\">d/dx(y e^{2x}) = 6 e^{3x}</span>이므로 <span class=\"chem\">y e^{2x} = 2 e^{3x} + C</span>예요. <span class=\"chem\">(0, 5)</span>를 대입하면 <span class=\"chem\">5 = 2 + C => C = 3</span>이므로 <span class=\"chem\">y = 2e^x + 3e^{-2x}</span>예요. <span class=\"chem\">x = ln 2</span>일 때 <span class=\"chem\">y = 2(2) + 3(1/4) = 4.75</span>예요.</p>",
    },

    // ── t5-4-q010 · mcq · exam · AHL · AHL 5.19 · 2 marks
    "t5-4-q010": {
      // EN: <p>What are the first two non-zero terms in the Maclaurin series expansion of <span class="chem">f(x) = ln(1 + 2x) - 2x</span>?</p>
      stem: "<p><span class=\"chem\">f(x) = ln(1 + 2x) - 2x</span>의 매클로린 급수 전개에서 0이 아닌 처음 두 항은 무엇인가요?</p>",
      options: [
        // EN: <span class="chem">-2x^2 + (8/3)x^3</span>
        "<span class=\"chem\">-2x^2 + (8/3)x^3</span>",
        // EN: <span class="chem">-x^2 + (2/3)x^3</span>
        "<span class=\"chem\">-x^2 + (2/3)x^3</span>",
        // EN: <span class="chem">-2x^2 + (4/3)x^3</span>
        "<span class=\"chem\">-2x^2 + (4/3)x^3</span>",
        // EN: <span class="chem">2x^2 - (8/3)x^3</span>
        "<span class=\"chem\">2x^2 - (8/3)x^3</span>",
      ],
      hints: [
        // EN: Substitute <span class="chem">u = 2x</span> into <span class="chem">ln(1 + u) = u - u^2/2 + u^3/3 - ...</span>, then subtract <span class="chem">2x</span>.
        "<span class=\"chem\">ln(1 + u) = u - u^2/2 + u^3/3 - ...</span>에 <span class=\"chem\">u = 2x</span>를 대입한 뒤 <span class=\"chem\">2x</span>를 빼세요.",
      ],
      // EN: <p><span class="chem">ln(1 + 2x) - 2x = (2x - (2x)^2/2 + (2x)^3/3 - ...) - 2x = -2x^2 + (8/3)x^3 - ...</span>.</p>
      solution: "<p><span class=\"chem\">ln(1 + 2x) - 2x = (2x - (2x)^2/2 + (2x)^3/3 - ...) - 2x = -2x^2 + (8/3)x^3 - ...</span>예요.</p>",
      misconception: {
        // EN (option B): Remember to replace <span class="chem">x</span> with <span class="chem">2x</span> inside the brackets: <span class="chem">(2x)^2/2 = 2x^2</span> and <span class="chem">(2x)^3/3 = (8/3)x^3</span>.
        "1": "괄호 안의 <span class=\"chem\">x</span>를 <span class=\"chem\">2x</span>로 바꾸어 <span class=\"chem\">(2x)^2/2 = 2x^2</span>, <span class=\"chem\">(2x)^3/3 = (8/3)x^3</span>로 계산해야 해요.",
        // EN (option C): In <span class="chem">ln(1 + u)</span>, the <span class="chem">u^3</span> term is divided by <span class="chem">3</span>, not <span class="chem">3! = 6</span>.
        "2": "<span class=\"chem\">ln(1 + u)</span>에서 <span class=\"chem\">u^3</span>항은 <span class=\"chem\">3! = 6</span>이 아니라 <span class=\"chem\">3</span>으로 나누어요.",
        // EN (option D): The signs in <span class="chem">ln(1 + u) = u - u^2/2 + u^3/3 - ...</span> alternate starting with <span class="chem">+u</span>, so the <span class="chem">x^2</span> term is negative.
        "3": "<span class=\"chem\">ln(1 + u) = u - u^2/2 + u^3/3 - ...</span>의 부호는 <span class=\"chem\">+u</span>부터 교대하므로 <span class=\"chem\">x^2</span>항은 음수예요.",
      },
    },

    // ── t5-4-q011 · numeric · exam · AHL · AHL 5.18 · 5 marks
    "t5-4-q011": {
      // EN: <p>A fish population <span class="chem">P(t)</span> satisfies the logistic differential equation <span class="chem">dP/dt = 0.002 P(500 - P)</span>, where <span class="chem">t</span> is in years and <span class="chem">P(0) = 100</span>. Find the population <span class="chem">P(2)</span> correct to 3 significant figures.</p>
      stem: "<p>물고기 개체수 <span class=\"chem\">P(t)</span>가 로지스틱 미분방정식 <span class=\"chem\">dP/dt = 0.002 P(500 - P)</span>를 만족해요. 여기서 <span class=\"chem\">t</span>는 연(year) 단위이고 <span class=\"chem\">P(0) = 100</span>일 때, <span class=\"chem\">P(2)</span>를 유효숫자 3자리(3 significant figures)로 구하시오 (Find).</p>",
      hints: [
        // EN: Use partial fractions <span class="chem">500 / (P(500 - P)) = 1/P + 1/(500 - P)</span> to separate variables: <span class="chem">int (1/P + 1/(500 - P)) dP = int 1 dt</span>.
        "부분분수 분해 <span class=\"chem\">500 / (P(500 - P)) = 1/P + 1/(500 - P)</span>를 이용해 변수를 분리하세요: <span class=\"chem\">int (1/P + 1/(500 - P)) dP = int 1 dt</span>.",
        // EN: Solve to get <span class="chem">P(t) = 500 / (1 + A e^{-t})</span>, find <span class="chem">A = 4</span> from <span class="chem">P(0) = 100</span>, and evaluate at <span class="chem">t = 2</span>.
        "풀어서 <span class=\"chem\">P(t) = 500 / (1 + A e^{-t})</span>를 얻고, <span class=\"chem\">P(0) = 100</span>에서 <span class=\"chem\">A = 4</span>를 구한 뒤 <span class=\"chem\">t = 2</span>일 때의 값을 계산하세요.",
      ],
      // EN: <p>Separating variables gives <span class="chem">ln(P / (500 - P)) = t + C => P(t) = 500 / (1 + A e^{-t})</span>. With <span class="chem">P(0) = 100</span>, <span class="chem">1 + A = 5 => A = 4</span>. Thus <span class="chem">P(2) = 500 / (1 + 4e^{-2}) ≈ 324</span>.</p>
      solution: "<p>변수를 분리하면 <span class=\"chem\">ln(P / (500 - P)) = t + C => P(t) = 500 / (1 + A e^{-t})</span>예요. <span class=\"chem\">P(0) = 100</span>에서 <span class=\"chem\">1 + A = 5 => A = 4</span>이므로 <span class=\"chem\">P(2) = 500 / (1 + 4e^{-2}) ≈ 324</span>예요.</p>",
    },

    // ── t5-4-q012 · numeric · exam · AHL · AHL 5.19 · 4 marks
    "t5-4-q012": {
      // EN: <p>Find the exact coefficient of <span class="chem">x^3</span> in the Maclaurin series expansion of <span class="chem">g(x) = e^{2x} sin(x)</span>. (You can enter an exact fraction like <span class="mono">7/4</span>.)</p>
      stem: "<p><span class=\"chem\">g(x) = e^{2x} sin(x)</span>의 매클로린 급수 전개에서 <span class=\"chem\">x^3</span>의 정확한 계수를 구하시오 (Find). (<span class=\"mono\">7/4</span> 같은 정확한 분수로 입력할 수 있어요.)</p>",
      hints: [
        // EN: Write <span class="chem">e^{2x} = 1 + 2x + 2x^2 + (4/3)x^3 + ...</span> and <span class="chem">sin x = x - x^3/6 + ...</span>.
        "<span class=\"chem\">e^{2x} = 1 + 2x + 2x^2 + (4/3)x^3 + ...</span>와 <span class=\"chem\">sin x = x - x^3/6 + ...</span>를 적으세요.",
        // EN: Multiply the two polynomials and collect all terms that give <span class="chem">x^3</span>.
        "두 다항식을 곱하고 <span class=\"chem\">x^3</span>이 나오는 항을 모두 모으세요.",
      ],
      // EN: <p><span class="chem">e^{2x} sin x = (1 + 2x + 2x^2 + ...)(x - x^3/6 + ...)</span>. The <span class="chem">x^3</span> coefficient is <span class="chem">1(-1/6) + 2(1) = 11/6 ≈ 1.83</span>.</p>
      solution: "<p><span class=\"chem\">e^{2x} sin x = (1 + 2x + 2x^2 + ...)(x - x^3/6 + ...)</span>이에요. <span class=\"chem\">x^3</span>의 계수는 <span class=\"chem\">1(-1/6) + 2(1) = 11/6 ≈ 1.83</span>이에요.</p>",
    },

    // ── t5-4-q013 · mcq · exam · AHL · AHL 5.19 · 2 marks
    "t5-4-q013": {
      // EN: <p>Use the Maclaurin series for <span class="chem">sin x</span> to evaluate <span class="chem">lim_{x->0} (sin x - x + x^3/6) / x^5</span>.</p>
      stem: "<p><span class=\"chem\">sin x</span>의 매클로린 급수를 이용하여 <span class=\"chem\">lim_{x->0} (sin x - x + x^3/6) / x^5</span>을 계산하시오 (evaluate).</p>",
      options: [
        // EN: <span class="chem">1 / 120</span>
        "<span class=\"chem\">1 / 120</span>",
        // EN: <span class="chem">-1 / 120</span>
        "<span class=\"chem\">-1 / 120</span>",
        // EN: <span class="chem">1 / 24</span>
        "<span class=\"chem\">1 / 24</span>",
        // EN: <span class="chem">0</span>
        "<span class=\"chem\">0</span>",
      ],
      hints: [
        // EN: Substitute <span class="chem">sin x = x - x^3/6 + x^5/120 - ...</span> into the numerator.
        "분자에 <span class=\"chem\">sin x = x - x^3/6 + x^5/120 - ...</span>를 대입하세요.",
      ],
      // EN: <p><span class="chem">sin x - x + x^3/6 = x^5/120 - x^7/5040 + ...</span>. Dividing by <span class="chem">x^5</span> and letting <span class="chem">x -> 0</span> gives <span class="chem">1/120</span>.</p>
      solution: "<p><span class=\"chem\">sin x - x + x^3/6 = x^5/120 - x^7/5040 + ...</span>이에요. <span class=\"chem\">x^5</span>으로 나누고 <span class=\"chem\">x -> 0</span>을 취하면 <span class=\"chem\">1/120</span>이에요.</p>",
      misconception: {
        // EN (option B): The signs in <span class="chem">sin x = x - x^3/3! + x^5/5! - ...</span> alternate, so the <span class="chem">x^5</span> term is positive (<span class="chem">+x^5/120</span>).
        "1": "<span class=\"chem\">sin x = x - x^3/3! + x^5/5! - ...</span>는 부호가 교대하므로 <span class=\"chem\">x^5</span>항은 양수(<span class=\"chem\">+x^5/120</span>)예요.",
        // EN (option C): <span class="chem">5! = 120</span>, whereas <span class="chem">4! = 24</span>.
        "2": "<span class=\"chem\">4! = 24</span>이고 <span class=\"chem\">5! = 120</span>이에요.",
        // EN (option D): After <span class="chem">x</span> and <span class="chem">-x^3/6</span> cancel, the leading term in the numerator is <span class="chem">x^5/120</span>, which cancels <span class="chem">x^5</span> in the denominator.
        "3": "<span class=\"chem\">x</span>와 <span class=\"chem\">-x^3/6</span>이 소거된 뒤 분자의 첫 항은 <span class=\"chem\">x^5/120</span>이므로 분모의 <span class=\"chem\">x^5</span>과 약분돼요.",
      },
    },

    // ── t5-4-q014 · short · exam · AHL · AHL 5.18 · 7 marks
    "t5-4-q014": {
      // EN: <p>Consider the differential equation <span class="chem">x (dy/dx) - 2y = x^3 cos(x)</span> for <span class="chem">x &gt; 0</span>, with <span class="chem">y(pi) = 0</span>.</p><p>(a) Find the integrating factor for this differential equation. <strong>[3 marks]</strong></p><p>(b) Hence solve the differential equation to find <span class="chem">y</span> in terms of <span class="chem">x</span>. <strong>[4 marks]</strong></p>
      stem: "<p><span class=\"chem\">x &gt; 0</span>이고 <span class=\"chem\">y(pi) = 0</span>일 때 미분방정식 <span class=\"chem\">x (dy/dx) - 2y = x^3 cos(x)</span>이 주어져 있어요.</p><p>(a) 이 미분방정식의 적분인자를 구하시오 (Find). <strong>[3 marks]</strong></p><p>(b) 이를 이용하여 (Hence) 미분방정식을 풀어 <span class=\"chem\">y</span>를 <span class=\"chem\">x</span>에 관한 식으로 나타내시오 (find). <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Divide by <span class="chem">x</span> first so the coefficient of <span class="chem">dy/dx</span> is <span class="chem">1</span>.
        "먼저 <span class=\"chem\">dy/dx</span>의 계수가 <span class=\"chem\">1</span>이 되도록 <span class=\"chem\">x</span>로 나누세요.",
        // EN: Use <span class="chem">e^{-2 ln x} = e^{ln(x^{-2})} = x^{-2}</span>.
        "<span class=\"chem\">e^{-2 ln x} = e^{ln(x^{-2})} = x^{-2}</span>를 이용하세요.",
      ],
      // EN: <p>(a) Dividing by <span class="chem">x</span> gives <span class="chem">dy/dx - (2/x)y = x^2 cos(x)</span>, so <span class="chem">P(x) = -2/x</span>. The integrating factor is <span class="chem">I(x) = e^{int (-2/x) dx} = e^{-2 ln x} = x^{-2}</span>.</p><p>(b) Multiplying by <span class="chem">x^{-2}</span> gives <span class="chem">d/dx(x^{-2} y) = cos(x)</span>. Integrating gives <span class="chem">x^{-2} y = sin(x) + C</span>. Since <span class="chem">y(pi) = 0</span>, <span class="chem">0 = sin(pi) + C => C = 0</span>, so <span class="chem">y = x^2 sin(x)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">x</span>로 나누면 <span class=\"chem\">dy/dx - (2/x)y = x^2 cos(x)</span>이므로 <span class=\"chem\">P(x) = -2/x</span>예요. 적분인자는 <span class=\"chem\">I(x) = e^{int (-2/x) dx} = e^{-2 ln x} = x^{-2}</span>예요.</p><p>(b) <span class=\"chem\">x^{-2}</span>을 곱하면 <span class=\"chem\">d/dx(x^{-2} y) = cos(x)</span>예요. 적분하면 <span class=\"chem\">x^{-2} y = sin(x) + C</span>이고, <span class=\"chem\">y(pi) = 0</span>이므로 <span class=\"chem\">0 = sin(pi) + C => C = 0</span>이 되어 <span class=\"chem\">y = x^2 sin(x)</span>예요.</p>",
      markscheme: [
        // EN: M1: divides by <span class="chem">x</span> to write <span class="chem">dy/dx - (2/x)y = x^2 cos x</span>.
        "M1: <span class=\"chem\">x</span>로 나누어 <span class=\"chem\">dy/dx - (2/x)y = x^2 cos x</span>로 씀.",
        // EN: M1: uses <span class="chem">I(x) = e^{int -2/x dx} = e^{-2 ln x}</span>.
        "M1: <span class=\"chem\">I(x) = e^{int -2/x dx} = e^{-2 ln x}</span>를 이용함.",
        // EN: A1: <span class="chem">I(x) = x^{-2}</span> (or <span class="chem">1/x^2</span>).
        "A1: <span class=\"chem\">I(x) = x^{-2}</span> (또는 <span class=\"chem\">1/x^2</span>).",
        // EN: M1: writes <span class="chem">d/dx(x^{-2} y) = cos x</span>.
        "M1: <span class=\"chem\">d/dx(x^{-2} y) = cos x</span>로 정리함.",
        // EN: A1: integrates to <span class="chem">x^{-2} y = sin x + C</span> (must include <span class="chem">+ C</span>).
        "A1: 적분해 <span class=\"chem\">x^{-2} y = sin x + C</span>를 얻음 (<span class=\"chem\">+ C</span> 필수).",
        // EN: M1: substitutes <span class="chem">x = pi, y = 0</span> to find <span class="chem">C = 0</span>.
        "M1: <span class=\"chem\">x = pi, y = 0</span>을 대입해 <span class=\"chem\">C = 0</span>을 구함.",
        // EN: A1: <span class="chem">y = x^2 sin x</span>.
        "A1: <span class=\"chem\">y = x^2 sin x</span>.",
      ],
    },

    // ── t5-4-q015 · numeric · challenge · AHL · AHL 5.19 · 5 marks
    "t5-4-q015": {
      // EN: <p>Let <span class="chem">y(x)</span> be the solution to <span class="chem">dy/dx = y^2 - x</span> with <span class="chem">y(0) = 1</span>. Find the exact coefficient of <span class="chem">x^3</span> in the Maclaurin series expansion of <span class="chem">y(x)</span>. (You can enter an exact fraction like <span class="mono">3/5</span>.)</p>
      stem: "<p><span class=\"chem\">y(x)</span>가 <span class=\"chem\">y(0) = 1</span>을 만족하는 <span class=\"chem\">dy/dx = y^2 - x</span>의 해일 때, <span class=\"chem\">y(x)</span>의 매클로린 급수 전개에서 <span class=\"chem\">x^3</span>의 정확한 계수를 구하시오 (Find). (<span class=\"mono\">3/5</span> 같은 정확한 분수로 입력할 수 있어요.)</p>",
      hints: [
        // EN: Decode: the DE gives the derivatives of <span class="chem">y</span> at <span class="chem">x = 0</span> one after another, so build the Maclaurin coefficients from <span class="chem">y(0)</span>, <span class="chem">y'(0)</span>, <span class="chem">y''(0)</span> and <span class="chem">y'''(0)</span> by implicit differentiation. The <span class="chem">x^3</span> coefficient is <span class="chem">y'''(0)/3!</span>.
        "해석: 미분방정식으로부터 <span class=\"chem\">x = 0</span>에서 <span class=\"chem\">y</span>의 도함수를 차례로 구할 수 있으므로, 음함수 미분으로 <span class=\"chem\">y(0)</span>, <span class=\"chem\">y'(0)</span>, <span class=\"chem\">y''(0)</span>, <span class=\"chem\">y'''(0)</span>를 구해 매클로린 계수를 만드세요. <span class=\"chem\">x^3</span>의 계수는 <span class=\"chem\">y'''(0)/3!</span>입니다.",
        // EN: Find <span class="chem">y'(0) = 1^2 - 0 = 1</span>, then differentiate implicitly: <span class="chem">y'' = 2y y' - 1</span>.
        "<span class=\"chem\">y'(0) = 1^2 - 0 = 1</span>을 구한 뒤 음함수 미분을 하세요: <span class=\"chem\">y'' = 2y y' - 1</span>.",
        // EN: Differentiate again: <span class="chem">y''' = 2(y')^2 + 2y y''</span>, evaluate <span class="chem">y'''(0)</span>, and divide by <span class="chem">3! = 6</span>.
        "한 번 더 미분해 <span class=\"chem\">y''' = 2(y')^2 + 2y y''</span>를 얻고, <span class=\"chem\">y'''(0)</span>을 구한 뒤 <span class=\"chem\">3! = 6</span>으로 나누세요.",
      ],
      // EN: <p><span class="chem">y(0) = 1</span> and <span class="chem">y'(0) = 1</span>. Differentiating gives <span class="chem">y'' = 2y y' - 1 => y''(0) = 2(1)(1) - 1 = 1</span>, and <span class="chem">y''' = 2(y')^2 + 2y y'' => y'''(0) = 2(1)^2 + 2(1)(1) = 4</span>. The coefficient of <span class="chem">x^3</span> is <span class="chem">4 / 3! = 2/3</span>.</p>
      solution: "<p><span class=\"chem\">y(0) = 1</span>, <span class=\"chem\">y'(0) = 1</span>이에요. 미분하면 <span class=\"chem\">y'' = 2y y' - 1 => y''(0) = 2(1)(1) - 1 = 1</span>이고, <span class=\"chem\">y''' = 2(y')^2 + 2y y'' => y'''(0) = 2(1)^2 + 2(1)(1) = 4</span>예요. 따라서 <span class=\"chem\">x^3</span>의 계수는 <span class=\"chem\">4 / 3! = 2/3</span>예요.</p>",
    },

    // ── t5-4-q016 · numeric · challenge · AHL · AHL 5.18 · 6 marks
    "t5-4-q016": {
      // EN: <p>Solve the homogeneous differential equation <span class="chem">dy/dx = (x^2 + y^2) / (2xy)</span> (<span class="chem">x &gt; 0, y &gt; 0</span>) given <span class="chem">y(1) = 2</span>, and find the exact value of <span class="chem">y(4)</span>. (Enter an exact expression such as <span class="mono">3*sqrt(2)</span>.)</p>
      stem: "<p><span class=\"chem\">y(1) = 2</span>일 때 동차 미분방정식 <span class=\"chem\">dy/dx = (x^2 + y^2) / (2xy)</span> (<span class=\"chem\">x &gt; 0, y &gt; 0</span>)을 풀고, <span class=\"chem\">y(4)</span>의 정확한 값을 구하시오 (Find). (<span class=\"mono\">3*sqrt(2)</span> 같은 정확한 식으로 입력하세요.)</p>",
      hints: [
        // EN: Decode: divide the top and bottom by <span class="chem">x^2</span>: the right-hand side depends only on <span class="chem">y/x</span>, so the DE is homogeneous and the substitution <span class="chem">y = vx</span> works.
        "해석: 분자와 분모를 <span class=\"chem\">x^2</span>으로 나누면 우변이 <span class=\"chem\">y/x</span>에만 의존하므로 동차 미분방정식이고, 치환 <span class=\"chem\">y = vx</span>를 쓸 수 있습니다.",
        // EN: Substitute <span class="chem">y = vx</span>: <span class="chem">v + x(dv/dx) = (1 + v^2)/(2v) => x(dv/dx) = (1 - v^2)/(2v)</span>.
        "<span class=\"chem\">y = vx</span>를 대입하세요: <span class=\"chem\">v + x(dv/dx) = (1 + v^2)/(2v) => x(dv/dx) = (1 - v^2)/(2v)</span>.",
        // EN: Separate variables: <span class="chem">int 2v / (1 - v^2) dv = int (1/x) dx => -ln|1 - v^2| = ln x + C</span>.
        "변수를 분리하세요: <span class=\"chem\">int 2v / (1 - v^2) dv = int (1/x) dx => -ln|1 - v^2| = ln x + C</span>.",
      ],
      // EN: <p>Setting <span class="chem">y = vx</span> gives <span class="chem">x(dv/dx) = (1 - v^2)/(2v)</span>, so <span class="chem">int 2v/(v^2 - 1) dv = int (-1/x) dx => ln|v^2 - 1| = -ln x + C => v^2 - 1 = A/x</span>. At <span class="chem">(1, 2)</span>, <span class="chem">v = 2 => A = 3</span>, giving <span class="chem">y^2 = x^2 + 3x</span>. Hence <span class="chem">y(4) = sqrt(16 + 12) = 2 sqrt(7) ≈ 5.29</span>.</p>
      solution: "<p><span class=\"chem\">y = vx</span>로 놓으면 <span class=\"chem\">x(dv/dx) = (1 - v^2)/(2v)</span>이므로 <span class=\"chem\">int 2v/(v^2 - 1) dv = int (-1/x) dx => ln|v^2 - 1| = -ln x + C => v^2 - 1 = A/x</span>예요. <span class=\"chem\">(1, 2)</span>에서 <span class=\"chem\">v = 2 => A = 3</span>이므로 <span class=\"chem\">y^2 = x^2 + 3x</span>가 돼요. 따라서 <span class=\"chem\">y(4) = sqrt(16 + 12) = 2 sqrt(7) ≈ 5.29</span>예요.</p>",
    },

    // ── t5-4-q017 · mcq · challenge · AHL · AHL 5.19 · 2 marks
    "t5-4-q017": {
      // EN: <p>Find the Maclaurin series expansion of <span class="chem">f(x) = e^{sin x}</span> up to and including the term in <span class="chem">x^3</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = e^{sin x}</span>의 매클로린 급수 전개를 <span class=\"chem\">x^3</span>항까지 구하시오 (Find).</p>",
      options: [
        // EN: <span class="chem">1 + x + (1/2)x^2</span> (the <span class="chem">x^3</span> coefficient is <span class="chem">0</span>)
        "<span class=\"chem\">1 + x + (1/2)x^2</span> (<span class=\"chem\">x^3</span>의 계수는 <span class=\"chem\">0</span>)",
        // EN: <span class="chem">1 + x + (1/2)x^2 + (1/6)x^3</span>
        "<span class=\"chem\">1 + x + (1/2)x^2 + (1/6)x^3</span>",
        // EN: <span class="chem">1 + x + (1/2)x^2 - (1/6)x^3</span>
        "<span class=\"chem\">1 + x + (1/2)x^2 - (1/6)x^3</span>",
        // EN: <span class="chem">1 + x + (1/2)x^2 + (1/3)x^3</span>
        "<span class=\"chem\">1 + x + (1/2)x^2 + (1/3)x^3</span>",
      ],
      hints: [
        // EN: Decode: <span class="chem">e^{sin x}</span> is a composite function, so substitute one known series into another (<span class="chem">e^u</span> with <span class="chem">u = sin x</span>) instead of differentiating three times.
        "해석: <span class=\"chem\">e^{sin x}</span>는 합성함수이므로 세 번 미분하는 대신 알려진 급수를 다른 급수에 대입하세요 (<span class=\"chem\">u = sin x</span>일 때 <span class=\"chem\">e^u</span>).",
        // EN: Substitute <span class="chem">u = sin x = x - x^3/6 + ...</span> into <span class="chem">e^u = 1 + u + u^2/2! + u^3/3! + ...</span> and drop terms above <span class="chem">x^3</span>.
        "<span class=\"chem\">e^u = 1 + u + u^2/2! + u^3/3! + ...</span>에 <span class=\"chem\">u = sin x = x - x^3/6 + ...</span>를 대입하고 <span class=\"chem\">x^3</span>보다 높은 차수는 버리세요.",
      ],
      // EN: <p><span class="chem">e^{sin x} = 1 + (x - x^3/6) + (x - ...)^2/2 + (x - ...)^3/6 + ... = 1 + x + (1/2)x^2 + (-1/6 + 1/6)x^3 + ... = 1 + x + (1/2)x^2</span> up to <span class="chem">x^3</span>.</p>
      solution: "<p><span class=\"chem\">x^3</span>항까지 구하면 <span class=\"chem\">e^{sin x} = 1 + (x - x^3/6) + (x - ...)^2/2 + (x - ...)^3/6 + ... = 1 + x + (1/2)x^2 + (-1/6 + 1/6)x^3 + ... = 1 + x + (1/2)x^2</span>예요.</p>",
      misconception: {
        // EN (option B): You forgot the <span class="chem">-x^3/6</span> term inside <span class="chem">sin x = x - x^3/6 + ...</span>, which cancels <span class="chem">+x^3/6</span> from <span class="chem">u^3/3!</span>.
        "1": "<span class=\"chem\">u^3/3!</span>에서 나온 <span class=\"chem\">+x^3/6</span>과 상쇄되는 <span class=\"chem\">sin x = x - x^3/6 + ...</span> 안의 <span class=\"chem\">-x^3/6</span>항을 빼먹었어요.",
        // EN (option C): You included <span class="chem">-x^3/6</span> from <span class="chem">sin x</span> but forgot <span class="chem">+u^3/3!</span> from the exponential series.
        "2": "<span class=\"chem\">sin x</span>의 <span class=\"chem\">-x^3/6</span>은 넣었지만 지수 급수의 <span class=\"chem\">+u^3/3!</span>을 빠뜨렸어요.",
        // EN (option D): Check the sign: <span class="chem">-1/6 + 1/6 = 0</span>, not <span class="chem">1/3</span>.
        "3": "부호를 확인하세요: <span class=\"chem\">-1/6 + 1/6 = 0</span>이지 <span class=\"chem\">1/3</span>이 아니에요.",
      },
    },

    // ── t5-4-q018 · short · challenge · AHL · AHL 5.18–5.19 · 8 marks
    "t5-4-q018": {
      // EN: <p>Consider the differential equation <span class="chem">dy/dx + 2xy = 1</span> with <span class="chem">y(0) = 0</span>.</p><p>(a) Using an integrating factor, show that <span class="chem">y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>. <strong>[3 marks]</strong></p><p>(b) By using the Maclaurin series for <span class="chem">e^{t^2}</span> (or by implicit differentiation of the DE), find the Maclaurin series for <span class="chem">y(x)</span> up to and including the term in <span class="chem">x^5</span>. <strong>[5 marks]</strong></p>
      stem: "<p><span class=\"chem\">y(0) = 0</span>을 만족하는 미분방정식 <span class=\"chem\">dy/dx + 2xy = 1</span>이 주어져 있어요.</p><p>(a) 적분인자를 이용하여 <span class=\"chem\">y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>임을 보이시오 (Show that). <strong>[3 marks]</strong></p><p>(b) <span class=\"chem\">e^{t^2}</span>의 매클로린 급수를 이용하거나 미분방정식을 음함수 미분하여 <span class=\"chem\">y(x)</span>의 매클로린 급수를 <span class=\"chem\">x^5</span>항까지 구하시오 (Find). <strong>[5 marks]</strong></p>",
      hints: [
        // EN: Decode: (a) is a linear DE, so use an integrating factor. In (b), the solution is <span class="chem">e^{-x^2}</span> times an integral that cannot be found exactly, so write both factors as series and multiply.
        "해석: (a)는 선형 미분방정식이므로 적분인자를 사용합니다. (b)에서 해는 <span class=\"chem\">e^{-x^2}</span>와 정확히 구할 수 없는 적분의 곱이므로, 두 인수를 모두 급수로 쓴 다음 곱하세요.",
        // EN: In part (a), integrating <span class="chem">d/dt(y(t) e^{t^2}) = e^{t^2}</span> from <span class="chem">t = 0</span> to <span class="chem">t = x</span> immediately incorporates <span class="chem">y(0) = 0</span>.
        "(a)에서는 <span class=\"chem\">d/dt(y(t) e^{t^2}) = e^{t^2}</span>을 <span class=\"chem\">t = 0</span>부터 <span class=\"chem\">t = x</span>까지 정적분하면 <span class=\"chem\">y(0) = 0</span> 조건이 바로 반영돼요.",
        // EN: In part (b), you can either integrate the series for <span class="chem">e^{t^2}</span> and multiply by <span class="chem">e^{-x^2}</span>, or differentiate <span class="chem">y' = 1 - 2xy</span> repeatedly at <span class="chem">x = 0</span>.
        "(b)에서는 <span class=\"chem\">e^{t^2}</span>의 급수를 적분한 뒤 <span class=\"chem\">e^{-x^2}</span>을 곱하거나, <span class=\"chem\">y' = 1 - 2xy</span>를 <span class=\"chem\">x = 0</span>에서 반복 미분하면 돼요.",
      ],
      // EN: <p>(a) The integrating factor is <span class="chem">I(x) = e^{int 2x dx} = e^{x^2}</span>. Multiplying gives <span class="chem">d/dx(y e^{x^2}) = e^{x^2}</span>. Integrating from <span class="chem">0</span> to <span class="chem">x</span> using <span class="chem">y(0) = 0</span> gives <span class="chem">y(x) e^{x^2} = int_0^x e^{t^2} dt => y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>.</p><p>(b) <span class="chem">int_0^x e^{t^2} dt = int_0^x (1 + t^2 + t^4/2 + ...) dt = x + x^3/3 + x^5/10 + ...</span>. Multiplying by <span class="chem">e^{-x^2} = 1 - x^2 + x^4/2 - ...</span> gives <span class="chem">y(x) = x + (1/3 - 1)x^3 + (1/10 - 1/3 + 1/2)x^5 + ... = x - (2/3)x^3 + (4/15)x^5 + ...</span>.</p>
      answer: "<p>(a) 적분인자는 <span class=\"chem\">I(x) = e^{int 2x dx} = e^{x^2}</span>이에요. 양변에 곱하면 <span class=\"chem\">d/dx(y e^{x^2}) = e^{x^2}</span>이고, <span class=\"chem\">y(0) = 0</span>을 이용해 <span class=\"chem\">0</span>에서 <span class=\"chem\">x</span>까지 적분하면 <span class=\"chem\">y(x) e^{x^2} = int_0^x e^{t^2} dt => y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>가 돼요.</p><p>(b) <span class=\"chem\">int_0^x e^{t^2} dt = int_0^x (1 + t^2 + t^4/2 + ...) dt = x + x^3/3 + x^5/10 + ...</span>이에요. 여기에 <span class=\"chem\">e^{-x^2} = 1 - x^2 + x^4/2 - ...</span>을 곱하면 <span class=\"chem\">y(x) = x + (1/3 - 1)x^3 + (1/10 - 1/3 + 1/2)x^5 + ... = x - (2/3)x^3 + (4/15)x^5 + ...</span>예요.</p>",
      markscheme: [
        // EN: M1: integrating factor <span class="chem">I(x) = e^{int 2x dx} = e^{x^2}</span>.
        "M1: 적분인자 <span class=\"chem\">I(x) = e^{int 2x dx} = e^{x^2}</span>.",
        // EN: A1: <span class="chem">d/dx(y e^{x^2}) = e^{x^2}</span>.
        "A1: <span class=\"chem\">d/dx(y e^{x^2}) = e^{x^2}</span>.",
        // EN: A1: integrates from <span class="chem">0</span> to <span class="chem">x</span> using <span class="chem">y(0) = 0</span>: <span class="chem">y(x) e^{x^2} = int_0^x e^{t^2} dt</span>. AG: <span class="chem">y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>; the given line itself earns no mark.
        "A1: <span class=\"chem\">y(0) = 0</span>을 이용해 <span class=\"chem\">0</span>에서 <span class=\"chem\">x</span>까지 적분하여 <span class=\"chem\">y(x) e^{x^2} = int_0^x e^{t^2} dt</span>를 얻음. AG: <span class=\"chem\">y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>; 주어진 식 자체에는 점수 없음.",
        // EN: M1: expands <span class="chem">e^{t^2} = 1 + t^2 + t^4/2 + ...</span> and integrates term by term to <span class="chem">x + x^3/3 + x^5/10</span> (or differentiates DE implicitly up to <span class="chem">y^{(5)}(0)</span>).
        "M1: <span class=\"chem\">e^{t^2} = 1 + t^2 + t^4/2 + ...</span>을 전개해 항별로 적분하여 <span class=\"chem\">x + x^3/3 + x^5/10</span>을 얻음 (또는 미분방정식을 <span class=\"chem\">y^{(5)}(0)</span>까지 음함수 미분함).",
        // EN: M1: multiplies by <span class="chem">e^{-x^2} = 1 - x^2 + x^4/2 - ...</span> (or substitutes derivatives into Maclaurin formula).
        "M1: <span class=\"chem\">e^{-x^2} = 1 - x^2 + x^4/2 - ...</span>을 곱함 (또는 도함수 값을 매클로린 공식에 대입함).",
        // EN: A1: first term <span class="chem">x</span>.
        "A1: 첫째 항 <span class=\"chem\">x</span>.",
        // EN: A1: <span class="chem">-(2/3)x^3</span>.
        "A1: <span class=\"chem\">-(2/3)x^3</span>.",
        // EN: A1: <span class="chem">(4/15)x^5</span>.
        "A1: <span class=\"chem\">(4/15)x^5</span>.",
      ],
    },

    // ── t5-4-q019 · numeric · exam · AHL · AHL 5.19 · 4 marks
    "t5-4-q019": {
      // EN: <p>Use the Maclaurin series for <span class="chem">(1 + x)^p</span> to find the coefficient of <span class="chem">x^2</span> in the Maclaurin series of <span class="chem">f(x) = sqrt(1 + 4x)</span>.</p>
      stem: "<p><span class=\"chem\">(1 + x)^p</span>의 매클로린 급수를 이용하여 <span class=\"chem\">f(x) = sqrt(1 + 4x)</span>의 매클로린 급수에서 <span class=\"chem\">x^2</span>의 계수를 구하시오 (find).</p>",
      hints: [
        // EN: Write <span class="chem">sqrt(1 + 4x) = (1 + u)^{1/2}</span> with <span class="chem">u = 4x</span>.
        "<span class=\"chem\">u = 4x</span>로 놓고 <span class=\"chem\">sqrt(1 + 4x) = (1 + u)^{1/2}</span>로 쓰세요.",
        // EN: Use <span class="chem">(1 + u)^p = 1 + pu + (p(p - 1)/2!) u^2 + ...</span> with <span class="chem">p = 1/2</span>.
        "<span class=\"chem\">p = 1/2</span>로 <span class=\"chem\">(1 + u)^p = 1 + pu + (p(p - 1)/2!) u^2 + ...</span>를 이용하세요.",
      ],
      // EN: <p>With <span class="chem">p = 1/2</span> and <span class="chem">u = 4x</span>, the <span class="chem">x^2</span> term is <span class="chem">((1/2)(-1/2)/2!)(4x)^2 = (-1/8)(16x^2) = -2x^2</span>, so the coefficient is <span class="chem">-2</span>. The series <span class="chem">1 + 2x - 2x^2 + ...</span> is valid for <span class="chem">|4x| &lt; 1</span>, that is <span class="chem">|x| &lt; 1/4</span>.</p>
      solution: "<p><span class=\"chem\">p = 1/2</span>, <span class=\"chem\">u = 4x</span>로 놓으면 <span class=\"chem\">x^2</span>항은 <span class=\"chem\">((1/2)(-1/2)/2!)(4x)^2 = (-1/8)(16x^2) = -2x^2</span>이므로 계수는 <span class=\"chem\">-2</span>예요. 급수 <span class=\"chem\">1 + 2x - 2x^2 + ...</span>는 <span class=\"chem\">|4x| &lt; 1</span>, 즉 <span class=\"chem\">|x| &lt; 1/4</span>에서 성립해요.</p>",
    },

    // ── t5-4-q020 · numeric · foundation · AHL · AHL 5.18 · 3 marks
    "t5-4-q020": {
      // EN: <p>The function <span class="chem">y(x)</span> satisfies <span class="chem">dy/dx = sqrt(x + y)</span> with <span class="chem">y(1) = 2</span>. Use Euler’s method with step size <span class="chem">h = 0.1</span> to estimate <span class="chem">y(1.5)</span>. Carry full calculator accuracy from one step to the next and give your answer correct to 3 significant figures.</p>
      stem: "",
      hints: [
        // EN: Five steps take you from <span class="chem">x = 1</span> to <span class="chem">x = 1.5</span>. Each step is <span class="chem">y_{n+1} = y_n + 0.1 sqrt(x_n + y_n)</span>, <span class="chem">x_{n+1} = x_n + 0.1</span>.
        "",
        // EN: On the GDC, store the values: start with <span class="chem">x = 1, y = 2</span>, then repeat “<span class="chem">y + 0.1 sqrt(x + y) -> y</span>, <span class="chem">x + 0.1 -> x</span>” five times. The first step gives <span class="chem">y_1 = 2 + 0.1 sqrt(3) = 2.1732…</span>
        "",
      ],
      // EN: <p>With <span class="chem">y_{n+1} = y_n + 0.1 sqrt(x_n + y_n)</span>:</p><p><span class="chem">x = 1.1: y_1 = 2.17321</span>; <span class="chem">x = 1.2: y_2 = 2.35413</span>; <span class="chem">x = 1.3: y_3 = 2.54265</span>; <span class="chem">x = 1.4: y_4 = 2.73868</span>; <span class="chem">x = 1.5: y_5 = 2.94211</span> (values shown to 5 d.p., full accuracy carried).</p><p>So <span class="chem">y(1.5) ≈ 2.94</span>.</p>
      solution: "",
    },

    // ── t5-4-q021 · short · exam · AHL · AHL 5.18 · 12 marks
    "t5-4-q021": {
      // EN: <p>Consider the differential equation <span class="chem">dy/dx = x e^{-y}</span> with <span class="chem">y(0) = 0</span>.</p><p>(a) Use Euler’s method with step size <span class="chem">h = 0.2</span> to estimate <span class="chem">y(1)</span>. Write each <span class="chem">y_n</span> correct to 4 decimal places, but use full calculator accuracy in the next step. <strong>[4 marks]</strong></p><p>(b) Solve the differential equation to find <span class="chem">y</span> in terms of <span class="chem">x</span>. <strong>[4 marks]</strong></p><p>(c) Find the percentage error of your estimate in part (a). <strong>[2 marks]</strong></p><p>(d) By finding <span class="chem">d^2y/dx^2</span>, explain why the Euler estimate is an underestimate. <strong>[2 marks]</strong></p>
      stem: "",
      hints: [
        // EN: Decode: (a) is a GDC Euler table, (b) is a separable DE, (c) compares the two, and (d) asks for the sign of the second derivative (concavity).
        "",
        // EN: For (b), multiply both sides by <span class="chem">e^y</span>: <span class="chem">e^y (dy/dx) = x</span>.
        "",
        // EN: For (d), differentiate <span class="chem">x e^{-y}</span> with the product rule and the chain rule, then substitute <span class="chem">dy/dx = x e^{-y}</span>.
        "",
      ],
      // EN: <p>(a) <span class="chem">y_{n+1} = y_n + 0.2 x_n e^{-y_n}</span>. Table: <span class="chem">x = 0.2: y_1 = 0</span>; <span class="chem">x = 0.4: y_2 = 0.0400</span>; <span class="chem">x = 0.6: y_3 = 0.1169</span>; <span class="chem">x = 0.8: y_4 = 0.2236</span>; <span class="chem">x = 1: y_5 = 0.3516</span>. So <span class="chem">y(1) ≈ 0.352</span>.</p><p>(b) <span class="chem">int e^y dy = int x dx => e^y = x^2/2 + C</span>. At <span class="chem">(0, 0)</span>, <span class="chem">C = 1</span>, so <span class="chem">y = ln(1 + x^2/2)</span>.</p><p>(c) Exact <span class="chem">y(1) = ln 1.5 = 0.405465…</span>. Percentage error <span class="chem">= |0.351566 - 0.405465| / 0.405465 × 100 ≈ 13.3%</span>.</p><p>(d) <span class="chem">d^2y/dx^2 = e^{-y} - x e^{-y} (dy/dx) = e^{-y}(1 - x^2 e^{-y})</span>. On the solution curve <span class="chem">x^2 e^{-y} = x^2/(1 + x^2/2) &lt; 1</span> for <span class="chem">0 &lt;= x &lt;= 1</span>, so <span class="chem">d^2y/dx^2 &gt; 0</span>: the curve is concave up, its tangent lines lie below it, and each Euler step lands below the curve.</p>
      answer: "",
      markscheme: [
        // EN: M1: uses <span class="chem">y_{n+1} = y_n + 0.2 x_n e^{-y_n}</span> with <span class="chem">x_{n+1} = x_n + 0.2</span>.
        "",
        // EN: A1: <span class="chem">y_1 = 0</span> and <span class="chem">y_2 = 0.0400</span>.
        "",
        // EN: A1: <span class="chem">y_3 = 0.1169</span> and <span class="chem">y_4 = 0.2236</span>.
        "",
        // EN: A1: <span class="chem">y(1) ≈ 0.3516</span> (accept 0.352).
        "",
        // EN: M1: separates variables: <span class="chem">int e^y dy = int x dx</span>.
        "",
        // EN: A1: <span class="chem">e^y = x^2/2 + C</span>.
        "",
        // EN: M1: uses <span class="chem">y(0) = 0</span> to get <span class="chem">C = 1</span>.
        "",
        // EN: A1: <span class="chem">y = ln(1 + x^2/2)</span>.
        "",
        // EN: M1: exact value <span class="chem">ln 1.5 = 0.405…</span> used in <span class="chem">|approx - exact| / exact × 100</span>.
        "",
        // EN: A1: <span class="chem">13.3%</span>.
        "",
        // EN: A1: <span class="chem">d^2y/dx^2 = e^{-y}(1 - x^2 e^{-y})</span> (or equivalent).
        "",
        // EN: R1: <span class="chem">d^2y/dx^2 &gt; 0</span> on <span class="chem">[0, 1]</span>, so the curve is concave up and the tangent steps lie below it.
        "",
      ],
    },

    // ── t5-4-q022 · numeric · exam · AHL · AHL 5.18 · 5 marks
    "t5-4-q022": {
      // EN: <p>A pie is taken out of an oven at <span class="chem">90</span> °C and left in a kitchen kept at <span class="chem">20</span> °C. Its temperature <span class="chem">T</span> °C after <span class="chem">t</span> minutes falls at a rate proportional to the difference between its temperature and the kitchen temperature. After 5 minutes the pie is at <span class="chem">70</span> °C. Find how many minutes after it leaves the oven the pie reaches <span class="chem">40</span> °C. Give your answer correct to 3 significant figures.</p>
      stem: "",
      hints: [
        // EN: Decode: “rate proportional to the difference” means <span class="chem">dT/dt = -k(T - 20)</span> with <span class="chem">k &gt; 0</span>. This is a separable DE; use the two data points to find the constant and <span class="chem">k</span>.
        "",
        // EN: Separating gives <span class="chem">ln|T - 20| = -kt + C</span>, so <span class="chem">T = 20 + 70 e^{-kt}</span>.
        "",
        // EN: Use <span class="chem">T(5) = 70</span>: <span class="chem">50 = 70 e^{-5k}</span>, so <span class="chem">k = (1/5) ln 1.4</span>. Then solve <span class="chem">20 + 70 e^{-kt} = 40</span>.
        "",
      ],
      // EN: <p><span class="chem">dT/dt = -k(T - 20) => int 1/(T - 20) dT = int -k dt => T = 20 + A e^{-kt}</span>. From <span class="chem">T(0) = 90</span>, <span class="chem">A = 70</span>. From <span class="chem">T(5) = 70</span>, <span class="chem">e^{-5k} = 5/7</span>, so <span class="chem">k = (1/5) ln(7/5) = 0.067294…</span>.</p><p>Then <span class="chem">70 e^{-kt} = 20 => t = ln(3.5)/k = 5 ln 3.5 / ln 1.4 ≈ 18.6</span> minutes.</p>
      solution: "",
    },

    // ── t5-4-q023 · short · exam · AHL · AHL 5.18 · 14 marks
    "t5-4-q023": {
      // EN: <p>The number of rabbits <span class="chem">N</span> on an island <span class="chem">t</span> years after 150 were released is modelled by <span class="chem">dN/dt = 0.4N(1 - N/2000)</span>, <span class="chem">N(0) = 150</span>.</p><p>(a) Show that <span class="chem">N = 2000 / (1 + A e^{-0.4t})</span>, and find the exact value of <span class="chem">A</span>. <strong>[5 marks]</strong></p><p>(b) Find the time at which the number of rabbits reaches 1500. <strong>[2 marks]</strong></p><p>(c) Find the value of <span class="chem">N</span> at which the population grows fastest, and the time at which this happens. <strong>[3 marks]</strong></p><p>(d) Use Euler’s method with <span class="chem">h = 0.5</span> to estimate <span class="chem">N(1)</span>, and find the percentage error of this estimate. <strong>[4 marks]</strong></p>
      stem: "",
      hints: [
        // EN: Decode: this is the logistic model. (a) is a separable DE needing partial fractions; (c) means “maximise <span class="chem">dN/dt</span>”, not “maximise <span class="chem">N</span>”.
        "",
        // EN: Write <span class="chem">1/(N(1 - N/2000)) = 2000/(N(2000 - N))</span> and split it into partial fractions.
        "",
        // EN: In (c), <span class="chem">dN/dt</span> as a function of <span class="chem">N</span> is a downward parabola: where is its vertex?
        "",
      ],
      // EN: <p>(a) <span class="chem">dN/dt = 0.4N(2000 - N)/2000</span>, so <span class="chem">int 2000/(N(2000 - N)) dN = int 0.4 dt</span>. Since <span class="chem">2000/(N(2000 - N)) = 1/N + 1/(2000 - N)</span>, <span class="chem">ln(N/(2000 - N)) = 0.4t + C</span>. So <span class="chem">(2000 - N)/N = A e^{-0.4t}</span>, giving <span class="chem">N = 2000/(1 + A e^{-0.4t})</span>. At <span class="chem">t = 0</span>: <span class="chem">150 = 2000/(1 + A)</span>, so <span class="chem">A = 37/3</span>.</p><p>(b) <span class="chem">1 + (37/3)e^{-0.4t} = 4/3 => e^{-0.4t} = 1/37 => t = ln(37)/0.4 ≈ 9.03</span> years.</p><p>(c) <span class="chem">dN/dt = 0.4N - 0.0002N^2</span> is a quadratic in <span class="chem">N</span> with its maximum at <span class="chem">N = 1000</span>. Then <span class="chem">(37/3)e^{-0.4t} = 1 => t = ln(37/3)/0.4 ≈ 6.28</span> years.</p><p>(d) <span class="chem">N_1 = 150 + 0.5(0.4)(150)(1 - 150/2000) = 177.75</span>; <span class="chem">N_2 = 177.75 + 0.5(0.4)(177.75)(1 - 177.75/2000) = 210.14…</span>. So <span class="chem">N(1) ≈ 210</span>. Exact <span class="chem">N(1) = 2000/(1 + (37/3)e^{-0.4}) = 215.81…</span>, so the percentage error is <span class="chem">≈ 2.63%</span>.</p>
      answer: "",
      markscheme: [
        // EN: M1: separates variables: <span class="chem">int 1/(N(1 - N/2000)) dN = int 0.4 dt</span> (or equivalent).
        "",
        // EN: M1: uses partial fractions <span class="chem">1/N + 1/(2000 - N)</span>.
        "",
        // EN: A1: <span class="chem">ln N - ln(2000 - N) = 0.4t + C</span>.
        "",
        // EN: A1: rearranges to <span class="chem">(2000 - N)/N = A e^{-0.4t}</span>. AG: <span class="chem">N = 2000/(1 + A e^{-0.4t})</span>; the given line itself earns no mark.
        "",
        // EN: A1: <span class="chem">A = 37/3</span> from <span class="chem">N(0) = 150</span>.
        "",
        // EN: M1: sets <span class="chem">2000/(1 + (37/3)e^{-0.4t}) = 1500</span> (or uses a GDC intersection).
        "",
        // EN: A1: <span class="chem">t = 9.03</span> years.
        "",
        // EN: R1: <span class="chem">dN/dt</span> is a quadratic in <span class="chem">N</span> (concave down) with vertex at the midpoint of its roots <span class="chem">0</span> and <span class="chem">2000</span>.
        "",
        // EN: A1: <span class="chem">N = 1000</span>.
        "",
        // EN: A1: <span class="chem">t = 6.28</span> years.
        "",
        // EN: M1: one correct Euler step: <span class="chem">N_1 = 177.75</span>.
        "",
        // EN: A1: <span class="chem">N(1) ≈ 210</span> (210.14).
        "",
        // EN: M1: exact <span class="chem">N(1) = 215.8…</span> used in the percentage error formula.
        "",
        // EN: A1: <span class="chem">2.63%</span>.
        "",
      ],
    },

    // ── t5-4-q024 · numeric · challenge · AHL · AHL 5.18 · 7 marks
    "t5-4-q024": {
      // EN: <p>A patient is given a drug through a drip. At time <span class="chem">t</span> hours after the drip starts, the drip delivers the drug at a rate of <span class="chem">4e^{-0.05t}</span> mg per hour, and the body removes the drug at a rate of <span class="chem">0.25A</span> mg per hour, where <span class="chem">A</span> mg is the amount of drug in the body. There is no drug in the body at the start. Find the greatest amount of the drug in the body, in mg, correct to 3 significant figures.</p>
      stem: "",
      hints: [
        // EN: Decode: “rate in minus rate out” gives the DE <span class="chem">dA/dt = 4e^{-0.05t} - 0.25A</span>, <span class="chem">A(0) = 0</span>. It is linear, so use an integrating factor; then maximise <span class="chem">A(t)</span>.
        "",
        // EN: Write <span class="chem">dA/dt + 0.25A = 4e^{-0.05t}</span>. The integrating factor is <span class="chem">e^{0.25t}</span>, so <span class="chem">d/dt(A e^{0.25t}) = 4e^{0.2t}</span>.
        "",
        // EN: You should get <span class="chem">A = 20(e^{-0.05t} - e^{-0.25t})</span>. Find its maximum with the GDC, or solve <span class="chem">dA/dt = 0</span>.
        "",
      ],
      // EN: <p><strong>Decode:</strong> the amount changes at (rate in) − (rate out), so <span class="chem">dA/dt = 4e^{-0.05t} - 0.25A</span>, a linear first-order DE; “greatest amount” means maximise its solution.</p><p>Integrating factor <span class="chem">e^{0.25t}</span>: <span class="chem">d/dt(A e^{0.25t}) = 4e^{0.2t} => A e^{0.25t} = 20e^{0.2t} + C</span>. With <span class="chem">A(0) = 0</span>, <span class="chem">C = -20</span>, so <span class="chem">A = 20(e^{-0.05t} - e^{-0.25t})</span>.</p><p><span class="chem">dA/dt = 0 => 0.05e^{-0.05t} = 0.25e^{-0.25t} => e^{0.2t} = 5 => t = 5 ln 5 ≈ 8.05</span> h. Then <span class="chem">A = 20(5^{-1/4} - 5^{-5/4}) = 16 × 5^{-1/4} ≈ 10.7</span> mg.</p>
      solution: "",
    },

    // ── t5-4-q025 · short · exam · AHL · AHL 5.19 · 7 marks
    "t5-4-q025": {
      // EN: <p>(a) Use the Maclaurin series for <span class="chem">e^x</span> to write down the Maclaurin series for <span class="chem">e^{-x^2}</span> up to and including the term in <span class="chem">x^6</span>. <strong>[2 marks]</strong></p><p>(b) Hence find an approximate value for <span class="chem">int_0^{0.8} e^{-x^2} dx</span>, giving your answer correct to 4 decimal places. <strong>[3 marks]</strong></p><p>(c) Use your GDC to find the percentage error of your approximation in part (b). <strong>[2 marks]</strong></p>
      stem: "",
      hints: [
        // EN: Decode: you cannot integrate <span class="chem">e^{-x^2}</span> by hand, so turn it into a polynomial first and integrate that.
        "",
        // EN: Put <span class="chem">u = -x^2</span> in <span class="chem">e^u = 1 + u + u^2/2! + u^3/3! + …</span>.
        "",
        // EN: Percentage error <span class="chem">= |approximate - exact| / exact × 100</span>, with the GDC value as “exact”.
        "",
      ],
      // EN: <p>(a) Replacing <span class="chem">x</span> by <span class="chem">-x^2</span>: <span class="chem">e^{-x^2} = 1 - x^2 + x^4/2 - x^6/6 + …</span></p><p>(b) <span class="chem">int_0^{0.8} (1 - x^2 + x^4/2 - x^6/6) dx = [x - x^3/3 + x^5/10 - x^7/42]_0^{0.8} = 0.8 - 0.170667 + 0.032768 - 0.004993 = 0.6571</span> (4 d.p.).</p><p>(c) GDC: <span class="chem">int_0^{0.8} e^{-x^2} dx = 0.657670…</span>. Percentage error <span class="chem">= |0.657108 - 0.657670| / 0.657670 × 100 ≈ 0.0854%</span>.</p>
      answer: "",
      markscheme: [
        // EN: M1: substitutes <span class="chem">-x^2</span> for <span class="chem">x</span> in the series for <span class="chem">e^x</span>.
        "",
        // EN: A1: <span class="chem">1 - x^2 + x^4/2 - x^6/6</span>.
        "",
        // EN: M1: integrates the polynomial term by term.
        "",
        // EN: A1: <span class="chem">[x - x^3/3 + x^5/10 - x^7/42]_0^{0.8}</span>.
        "",
        // EN: A1: <span class="chem">0.6571</span>.
        "",
        // EN: A1: GDC value <span class="chem">0.657670…</span>.
        "",
        // EN: A1: percentage error <span class="chem">0.0854%</span> (accept 0.085%).
        "",
      ],
    },

    // ── t5-4-q026 · numeric · challenge · AHL · AHL 5.19 · 5 marks
    "t5-4-q026": {
      // EN: <p>An engineer models small angles by replacing <span class="chem">cos x</span> with the quadratic <span class="chem">1 - x^2/2</span>, where <span class="chem">x</span> is in radians. She will accept the model only while the error <span class="chem">|cos x - (1 - x^2/2)|</span> is less than <span class="chem">0.001</span>. Find the largest value of <span class="chem">a</span> such that the error is less than <span class="chem">0.001</span> for all <span class="chem">0 &lt; x &lt; a</span>. Give your answer correct to 3 significant figures.</p>
      stem: "",
      hints: [
        // EN: Decode: <span class="chem">1 - x^2/2</span> is the degree-2 Maclaurin polynomial of <span class="chem">cos x</span>. You need the first positive <span class="chem">x</span> at which the error reaches <span class="chem">0.001</span>.
        "",
        // EN: The next term of the series is <span class="chem">x^4/24</span>, so the error is about <span class="chem">x^4/24</span>. This gives a first estimate <span class="chem">x ≈ (0.024)^{1/4}</span>.
        "",
        // EN: Now solve <span class="chem">cos x - 1 + x^2/2 = 0.001</span> with the GDC (graph both sides and find the intersection). The error increases for <span class="chem">x &gt; 0</span>, so the first intersection is the answer.
        "",
      ],
      // EN: <p><strong>Decode:</strong> “largest <span class="chem">a</span> with error below 0.001 for all <span class="chem">0 &lt; x &lt; a</span>” means the first positive solution of error = 0.001. Here <span class="chem">1 - x^2/2</span> is the Maclaurin polynomial of degree 2.</p><p>Since <span class="chem">cos x = 1 - x^2/2 + x^4/24 - …</span>, the error <span class="chem">cos x - (1 - x^2/2) ≈ x^4/24</span>, which is positive and increasing for small <span class="chem">x &gt; 0</span>. Estimate: <span class="chem">x^4/24 = 0.001 => x ≈ 0.394</span>.</p><p>GDC: solving <span class="chem">cos x - 1 + x^2/2 = 0.001</span> gives <span class="chem">x = 0.394108…</span>, so <span class="chem">a ≈ 0.394</span>.</p>
      solution: "",
    },

    // ── t5-4-q027 · short · exam · AHL · AHL 5.18 · 10 marks
    "t5-4-q027": {
      // EN: <p>Consider <span class="chem">dy/dx = y/x + x/y</span> for <span class="chem">x &gt; 0, y &gt; 0</span>, with <span class="chem">y(1) = 1</span>.</p><p>(a) Use Euler’s method with <span class="chem">h = 0.1</span> to estimate <span class="chem">y(1.5)</span>. Carry full calculator accuracy and give your answer correct to 4 significant figures. <strong>[3 marks]</strong></p><p>(b) Use the substitution <span class="chem">y = vx</span> to show that <span class="chem">y = x sqrt(2 ln x + 1)</span>. <strong>[5 marks]</strong></p><p>(c) Find the percentage error of your estimate in part (a). <strong>[2 marks]</strong></p>
      stem: "",
      hints: [
        // EN: Decode: the right-hand side depends only on <span class="chem">y/x</span>, so the DE is homogeneous: (b) is the <span class="chem">y = vx</span> method, and (a) is a GDC Euler table.
        "",
        // EN: After substituting, the <span class="chem">v</span> terms cancel and you are left with <span class="chem">x(dv/dx) = 1/v</span>.
        "",
      ],
      // EN: <p>(a) <span class="chem">y_{n+1} = y_n + 0.1(y_n/x_n + x_n/y_n)</span>: <span class="chem">y_1 = 1.2</span>, <span class="chem">y_2 = 1.40076</span>, <span class="chem">y_3 = 1.60316</span>, <span class="chem">y_4 = 1.80757</span>, <span class="chem">y_5 = 2.01413</span>. So <span class="chem">y(1.5) ≈ 2.014</span>.</p><p>(b) <span class="chem">y = vx => dy/dx = v + x(dv/dx)</span>. Then <span class="chem">v + x(dv/dx) = v + 1/v => v (dv/dx) = 1/x</span>. Integrating, <span class="chem">v^2/2 = ln x + C</span>. At <span class="chem">(1, 1)</span>, <span class="chem">v = 1</span>, so <span class="chem">C = 1/2</span>. Then <span class="chem">y^2/x^2 = 2 ln x + 1</span>, and since <span class="chem">x, y &gt; 0</span>, <span class="chem">y = x sqrt(2 ln x + 1)</span>.</p><p>(c) Exact <span class="chem">y(1.5) = 1.5 sqrt(2 ln 1.5 + 1) = 2.018562…</span>. Percentage error <span class="chem">= |2.014129 - 2.018562| / 2.018562 × 100 ≈ 0.220%</span>.</p>
      answer: "",
      markscheme: [
        // EN: M1: uses <span class="chem">y_{n+1} = y_n + 0.1(y_n/x_n + x_n/y_n)</span>.
        "",
        // EN: A1: at least two correct intermediate values (e.g. <span class="chem">y_1 = 1.2</span>, <span class="chem">y_2 = 1.4008</span>).
        "",
        // EN: A1: <span class="chem">y(1.5) ≈ 2.014</span>.
        "",
        // EN: M1: substitutes <span class="chem">y = vx</span> and <span class="chem">dy/dx = v + x(dv/dx)</span>.
        "",
        // EN: A1: <span class="chem">x(dv/dx) = 1/v</span>.
        "",
        // EN: M1: separates and integrates: <span class="chem">int v dv = int (1/x) dx</span>.
        "",
        // EN: A1: <span class="chem">v^2/2 = ln x + C</span>.
        "",
        // EN: A1: <span class="chem">C = 1/2</span> from <span class="chem">y(1) = 1</span>, giving <span class="chem">y^2 = x^2(2 ln x + 1)</span>. AG: <span class="chem">y = x sqrt(2 ln x + 1)</span>; the given line itself earns no mark.
        "",
        // EN: M1: exact value <span class="chem">2.0186</span> used in the percentage error formula.
        "",
        // EN: A1: <span class="chem">0.220%</span>.
        "",
      ],
    },

    // ── t5-4-q028 · short · exam · AHL · AHL 5.18, 5.19 · 11 marks
    "t5-4-q028": {
      // EN: <p>The function <span class="chem">y(x)</span> satisfies <span class="chem">dy/dx = x^2 + y^2</span> and <span class="chem">y(0) = 1</span>.</p><p>(a) Find the Maclaurin series for <span class="chem">y(x)</span> up to and including the term in <span class="chem">x^3</span>. <strong>[5 marks]</strong></p><p>(b) Hence estimate <span class="chem">y(0.2)</span>. <strong>[1 mark]</strong></p><p>(c) Use Euler’s method with <span class="chem">h = 0.1</span> to estimate <span class="chem">y(0.2)</span>. <strong>[3 marks]</strong></p><p>(d) A numerical solver gives <span class="chem">y(0.2) = 1.2530</span> to 4 decimal places. State which estimate is more accurate, and give a reason for the size of the Euler error. <strong>[2 marks]</strong></p>
      stem: "",
      hints: [
        // EN: Decode: (a) is a Maclaurin series built from the DE by repeated implicit differentiation; (c) is Euler with two steps.
        "",
        // EN: Differentiate <span class="chem">y' = x^2 + y^2</span> with respect to <span class="chem">x</span>: <span class="chem">d/dx(y^2) = 2y y'</span>.
        "",
        // EN: For <span class="chem">y'''</span>, differentiate <span class="chem">2y y'</span> with the product rule.
        "",
      ],
      // EN: <p>(a) <span class="chem">y'(0) = 0 + 1 = 1</span>. <span class="chem">y'' = 2x + 2y y'</span>, so <span class="chem">y''(0) = 2</span>. <span class="chem">y''' = 2 + 2(y')^2 + 2y y''</span>, so <span class="chem">y'''(0) = 2 + 2 + 4 = 8</span>. Hence <span class="chem">y ≈ 1 + x + (2/2!)x^2 + (8/3!)x^3 = 1 + x + x^2 + (4/3)x^3</span>.</p><p>(b) <span class="chem">y(0.2) ≈ 1 + 0.2 + 0.04 + (4/3)(0.008) = 1.2507</span> (to 4 d.p.).</p><p>(c) <span class="chem">y_1 = 1 + 0.1(0 + 1) = 1.1</span>; <span class="chem">y_2 = 1.1 + 0.1(0.01 + 1.21) = 1.222</span>.</p><p>(d) The series estimate (error about 0.002) is more accurate than Euler (error about 0.031). Euler follows tangent lines; the solution is concave up (<span class="chem">y'' &gt; 0</span>) and steep, so the tangent steps fall below the curve, and with only two large steps the error builds up.</p>
      answer: "",
      markscheme: [
        // EN: A1: <span class="chem">y'(0) = 1</span>.
        "",
        // EN: M1: differentiates implicitly: <span class="chem">y'' = 2x + 2y y'</span>.
        "",
        // EN: A1: <span class="chem">y''(0) = 2</span>.
        "",
        // EN: A1: <span class="chem">y'''(0) = 8</span> (from <span class="chem">y''' = 2 + 2(y')^2 + 2y y''</span>).
        "",
        // EN: A1: <span class="chem">1 + x + x^2 + (4/3)x^3</span>.
        "",
        // EN: A1: <span class="chem">y(0.2) ≈ 1.2507</span> (accept 1.25).
        "",
        // EN: M1: uses <span class="chem">y_{n+1} = y_n + 0.1(x_n^2 + y_n^2)</span>.
        "",
        // EN: A1: <span class="chem">y_1 = 1.1</span>.
        "",
        // EN: A1: <span class="chem">y_2 = 1.222</span>.
        "",
        // EN: A1: states that the Maclaurin estimate is more accurate.
        "",
        // EN: R1: the solution is concave up, so the Euler tangent steps lie below the curve (underestimate), and the error grows with the step size.
        "",
      ],
    },

    // ── t5-4-q029 · numeric · exam · AHL · AHL 5.18 · 5 marks
    "t5-4-q029": {
      // EN: <p>The function <span class="chem">y(x)</span> satisfies <span class="chem">dy/dx = (1 + y^2) e^{-x}</span> and <span class="chem">y(0) = 0</span>. Find <span class="chem">y(2)</span>, giving your answer correct to 3 significant figures.</p>
      stem: "",
      hints: [
        // EN: The DE is separable: <span class="chem">int 1/(1 + y^2) dy = int e^{-x} dx</span>.
        "",
        // EN: This gives <span class="chem">arctan y = -e^{-x} + C</span>. Use <span class="chem">y(0) = 0</span> to find <span class="chem">C</span>.
        "",
        // EN: Make sure your GDC is in radian mode when you evaluate <span class="chem">tan</span>.
        "",
      ],
      // EN: <p><span class="chem">int 1/(1 + y^2) dy = int e^{-x} dx => arctan y = -e^{-x} + C</span>. At <span class="chem">(0, 0)</span>: <span class="chem">0 = -1 + C => C = 1</span>. So <span class="chem">y = tan(1 - e^{-x})</span>, and <span class="chem">y(2) = tan(1 - e^{-2}) ≈ 1.17</span> (radians).</p>
      solution: "",
    },

    // ── t5-4-q030 · numeric · challenge · AHL · AHL 5.18 · 6 marks
    "t5-4-q030": {
      // EN: <p>An upright cylindrical water tank has internal radius <span class="chem">0.8</span> m. Water leaks from a small hole in its base, so that the volume of water in the tank decreases at a rate of <span class="chem">0.04 sqrt(h)</span> m<sup>3</sup> per minute, where <span class="chem">h</span> m is the depth of the water. At first the water is <span class="chem">1.8</span> m deep. Find the time, in minutes, for the depth of the water to fall to half its initial value. Give your answer correct to 3 significant figures.</p>
      stem: "",
      hints: [
        // EN: Decode: the rate is given for the volume <span class="chem">V</span>, but the question is about the depth <span class="chem">h</span>. Write <span class="chem">V = pi (0.8)^2 h</span>, turn <span class="chem">dV/dt</span> into <span class="chem">dh/dt</span>, then solve a separable DE.
        "",
        // EN: <span class="chem">dV/dt = 0.64 pi (dh/dt) = -0.04 sqrt(h)</span>, so <span class="chem">dh/dt = -sqrt(h)/(16 pi)</span>.
        "",
        // EN: Separate: <span class="chem">int h^{-1/2} dh = int -1/(16 pi) dt</span>, giving <span class="chem">2 sqrt(h) = -t/(16 pi) + C</span>. Find <span class="chem">C</span> from <span class="chem">h(0) = 1.8</span>, then set <span class="chem">h = 0.9</span>.
        "",
      ],
      // EN: <p><strong>Decode:</strong> the given rate is <span class="chem">dV/dt</span> (and it is a decrease, so it is negative); the question asks about <span class="chem">h</span>, and “half its initial value” means <span class="chem">h = 0.9</span>.</p><p><span class="chem">V = 0.64 pi h => 0.64 pi (dh/dt) = -0.04 sqrt(h) => dh/dt = -sqrt(h)/(16 pi)</span>.</p><p><span class="chem">int h^{-1/2} dh = -int 1/(16 pi) dt => 2 sqrt(h) = 2 sqrt(1.8) - t/(16 pi)</span>.</p><p>At <span class="chem">h = 0.9</span>: <span class="chem">t = 32 pi (sqrt(1.8) - sqrt(0.9)) ≈ 39.5</span> minutes.</p>
      solution: "",
    },

    // ── t5-4-q031 · numeric · exam · AHL · AHL 5.18 · 6 marks
    "t5-4-q031": {
      // EN: <p>The function <span class="chem">y(x)</span> satisfies <span class="chem">dy/dx + y = sin x</span> and <span class="chem">y(0) = 1</span>. You may use the result <span class="chem">int e^x sin x dx = (1/2) e^x (sin x - cos x) + C</span>. Find the smallest positive value of <span class="chem">x</span> for which <span class="chem">y = 0</span>. Give your answer correct to 3 significant figures.</p>
      stem: "",
      hints: [
        // EN: The integrating factor is <span class="chem">e^{int 1 dx} = e^x</span>, so <span class="chem">d/dx(y e^x) = e^x sin x</span>.
        "",
        // EN: Use the given integral, then <span class="chem">y(0) = 1</span>. You should reach <span class="chem">y = (1/2)(sin x - cos x) + (3/2)e^{-x}</span>.
        "",
        // EN: Graph <span class="chem">y</span> on the GDC for <span class="chem">x &gt; 0</span> and find the first zero.
        "",
      ],
      // EN: <p>With the integrating factor <span class="chem">e^x</span>: <span class="chem">y e^x = (1/2)e^x(sin x - cos x) + C</span>. At <span class="chem">x = 0</span>: <span class="chem">1 = -1/2 + C => C = 3/2</span>. So <span class="chem">y = (1/2)(sin x - cos x) + (3/2)e^{-x}</span>.</p><p>GDC: the first positive zero is <span class="chem">x = 3.96715… ≈ 3.97</span>.</p>
      solution: "",
    },

    // ── t5-4-q032 · short · challenge · AHL · AHL 5.18 · 12 marks
    "t5-4-q032": {
      // EN: <p>A skydiver jumps from a helicopter that is not moving. Her downward speed <span class="chem">v</span> m s<sup>−1</sup> after <span class="chem">t</span> seconds is modelled by <span class="chem">dv/dt = 9 - 0.0036v^2</span>, with <span class="chem">v(0) = 0</span>.</p><p>(a) Write down the speed she approaches as <span class="chem">t</span> increases (her terminal speed). <strong>[1 mark]</strong></p><p>(b) Show that <span class="chem">int 1/(2500 - v^2) dv = (1/100) ln((50 + v)/(50 - v)) + C</span> for <span class="chem">0 &lt;= v &lt; 50</span>. <strong>[3 marks]</strong></p><p>(c) Hence show that <span class="chem">v = 50(1 - e^{-0.36t})/(1 + e^{-0.36t})</span>. <strong>[4 marks]</strong></p><p>(d) Find the time taken to reach 90% of her terminal speed. <strong>[2 marks]</strong></p><p>(e) Find the distance she falls in this time. <strong>[2 marks]</strong></p>
      stem: "",
      hints: [
        // EN: Decode: “terminal speed” means the speed at which <span class="chem">dv/dt = 0</span>; “distance fallen” means integrate the speed.
        "",
        // EN: Take out the factor: <span class="chem">9 - 0.0036v^2 = 0.0036(2500 - v^2)</span>.
        "",
        // EN: For (e), use the GDC to integrate <span class="chem">v(t)</span> from <span class="chem">0</span> to your answer to (d) (use its unrounded value).
        "",
      ],
      // EN: <p><strong>Decode:</strong> “terminal speed” is where the speed stops changing, <span class="chem">dv/dt = 0</span>; the DE is separable with a partial-fraction integral; distance is the integral of speed.</p><p>(a) <span class="chem">9 - 0.0036v^2 = 0 => v = 50</span> m s<sup>−1</sup>.</p><p>(b) <span class="chem">1/(2500 - v^2) = 1/((50 - v)(50 + v)) = (1/100)(1/(50 - v) + 1/(50 + v))</span>. Integrating: <span class="chem">(1/100)(-ln(50 - v) + ln(50 + v)) + C = (1/100) ln((50 + v)/(50 - v)) + C</span>.</p><p>(c) <span class="chem">dv/dt = 0.0036(2500 - v^2)</span>, so <span class="chem">int 1/(2500 - v^2) dv = int 0.0036 dt</span>: <span class="chem">(1/100) ln((50 + v)/(50 - v)) = 0.0036t + C</span>, and <span class="chem">v(0) = 0</span> gives <span class="chem">C = 0</span>. So <span class="chem">(50 + v)/(50 - v) = e^{0.36t}</span>, <span class="chem">v(1 + e^{0.36t}) = 50(e^{0.36t} - 1)</span>, and dividing top and bottom by <span class="chem">e^{0.36t}</span> gives the result.</p><p>(d) <span class="chem">v = 45 => (95/5) = e^{0.36t} => t = ln(19)/0.36 ≈ 8.18</span> s.</p><p>(e) <span class="chem">int_0^{8.179} v dt ≈ 231</span> m (GDC).</p>
      answer: "",
      markscheme: [
        // EN: A1: <span class="chem">v = 50</span> m s<sup>−1</sup>.
        "",
        // EN: M1: factorises <span class="chem">2500 - v^2 = (50 - v)(50 + v)</span> and writes partial fractions.
        "",
        // EN: A1: <span class="chem">(1/100)(1/(50 - v) + 1/(50 + v))</span>.
        "",
        // EN: A1: integrates to <span class="chem">(1/100)(ln(50 + v) - ln(50 - v))</span>, including the sign from <span class="chem">int 1/(50 - v) dv = -ln(50 - v)</span>. AG: <span class="chem">(1/100) ln((50 + v)/(50 - v)) + C</span>; the given line itself earns no mark.
        "",
        // EN: M1: writes <span class="chem">dv/dt = 0.0036(2500 - v^2)</span> and separates variables.
        "",
        // EN: A1: <span class="chem">(1/100) ln((50 + v)/(50 - v)) = 0.0036t + C</span> with <span class="chem">C = 0</span>.
        "",
        // EN: M1: exponentiates: <span class="chem">(50 + v)/(50 - v) = e^{0.36t}</span>.
        "",
        // EN: A1: rearranges to <span class="chem">v = 50(e^{0.36t} - 1)/(e^{0.36t} + 1)</span>. AG: <span class="chem">v = 50(1 - e^{-0.36t})/(1 + e^{-0.36t})</span>; the given line itself earns no mark.
        "",
        // EN: M1: sets <span class="chem">v = 45</span>.
        "",
        // EN: A1: <span class="chem">t = 8.18</span> s.
        "",
        // EN: M1: distance <span class="chem">= int_0^{8.18} v dt</span>.
        "",
        // EN: A1: <span class="chem">231</span> m.
        "",
      ],
    },

    // ── t5-4-q033 · numeric · exam · AHL · AHL 5.19 · 5 marks
    "t5-4-q033": {
      // EN: <p>The cube root of 10 can be written as <span class="chem">10^{1/3} = 2(1 + 1/4)^{1/3}</span>. Use the first three terms of the Maclaurin series for <span class="chem">(1 + x)^{1/3}</span> to estimate <span class="chem">10^{1/3}</span>. Find the percentage error of this estimate compared with the GDC value of <span class="chem">10^{1/3}</span>, correct to 3 significant figures.</p>
      stem: "",
      hints: [
        // EN: Decode: you need two numbers, the series estimate and the calculator value, and then the percentage error between them. The factor 2 appears because <span class="chem">10 = 8 × 1.25</span>.
        "",
        // EN: Use <span class="chem">(1 + x)^p = 1 + px + (p(p - 1)/2!)x^2 + …</span> with <span class="chem">p = 1/3</span> and <span class="chem">x = 1/4</span>.
        "",
        // EN: You should get the estimate <span class="chem">2(1 + 1/12 - 1/144) = 2.15278</span>. Compare it with the GDC value of <span class="chem">10^{1/3}</span>.
        "",
      ],
      // EN: <p><span class="chem">(1 + x)^{1/3} ≈ 1 + (1/3)x + ((1/3)(-2/3)/2)x^2 = 1 + x/3 - x^2/9</span>. With <span class="chem">x = 1/4</span>: <span class="chem">1 + 1/12 - 1/144 = 155/144</span>, so the estimate is <span class="chem">2 × 155/144 = 2.152778</span>.</p><p>GDC: <span class="chem">10^{1/3} = 2.154435</span>. Percentage error <span class="chem">= |2.152778 - 2.154435| / 2.154435 × 100 ≈ 0.0769%</span>.</p>
      solution: "",
    },

    // ── t5-4-q034 · numeric · challenge · AHL · AHL 5.18 · 6 marks
    "t5-4-q034": {
      // EN: <p>The differential equation <span class="chem">dy/dx = -y</span>, <span class="chem">y(0) = 1</span>, is solved approximately with Euler’s method, using <span class="chem">n</span> equal steps from <span class="chem">x = 0</span> to <span class="chem">x = 1</span>. Find the least value of <span class="chem">n</span> for which the Euler estimate of <span class="chem">y(1)</span> is within <span class="chem">0.005</span> of the exact value.</p>
      stem: "",
      hints: [
        // EN: Decode: you need a formula for the Euler estimate in terms of <span class="chem">n</span> (with <span class="chem">h = 1/n</span>), the exact value <span class="chem">y(1)</span>, and then the least integer <span class="chem">n</span> that meets the condition.
        "",
        // EN: Each step is <span class="chem">y_{k+1} = y_k + h(-y_k) = (1 - h)y_k</span>, so after <span class="chem">n</span> steps the estimate is <span class="chem">(1 - 1/n)^n</span>. The exact solution is <span class="chem">y = e^{-x}</span>.
        "",
        // EN: Tabulate <span class="chem">e^{-1} - (1 - 1/n)^n</span> on the GDC and find the first <span class="chem">n</span> for which it is less than <span class="chem">0.005</span>.
        "",
      ],
      // EN: <p><strong>Decode:</strong> Euler’s steps here form a geometric sequence, so the estimate has a closed form in <span class="chem">n</span>; “least <span class="chem">n</span>” means search a GDC table.</p><p><span class="chem">y_{k+1} = (1 - 1/n)y_k => y_n = (1 - 1/n)^n</span>. Exact: <span class="chem">y(1) = e^{-1} = 0.367879…</span>.</p><p>GDC table of <span class="chem">e^{-1} - (1 - 1/n)^n</span>: <span class="chem">n = 37</span> gives <span class="chem">0.005028…</span> (too big), <span class="chem">n = 38</span> gives <span class="chem">0.004894…</span>. So the least <span class="chem">n</span> is <span class="chem">38</span>.</p>
      solution: "",
    },

    // ── t5-4-q035 · numeric · exam · AHL · AHL 5.19 · 4 marks
    "t5-4-q035": {
      // EN: <p>Since <span class="chem">arctan(1/sqrt(3)) = pi/6</span>, it follows that <span class="chem">pi = 6 arctan(1/sqrt(3))</span>. Use the first four non-zero terms of the Maclaurin series for <span class="chem">arctan x</span> to find an estimate for <span class="chem">pi</span>, correct to 5 significant figures.</p>
      stem: "",
      hints: [
        // EN: The first four non-zero terms are <span class="chem">x - x^3/3 + x^5/5 - x^7/7</span>.
        "",
        // EN: Substitute <span class="chem">x = 1/sqrt(3)</span> (store it in the GDC), then multiply the result by 6.
        "",
      ],
      // EN: <p>With <span class="chem">x = 1/sqrt(3) = 0.577350…</span>: <span class="chem">x - x^3/3 + x^5/5 - x^7/7 = 0.577350 - 0.064150 + 0.012830 - 0.003055 = 0.522975…</span>. Multiplying by 6 gives <span class="chem">pi ≈ 3.1379</span> (5 s.f.).</p>
      solution: "",
    },

    // ── t5-4-q036 · short · challenge · AHL · AHL 5.18 · 11 marks
    "t5-4-q036": {
      // EN: <p>A cup of coffee at <span class="chem">85</span> °C is placed in a room whose heating has just been switched on. The room temperature <span class="chem">t</span> minutes later is <span class="chem">(18 + 0.5t)</span> °C. The coffee’s temperature <span class="chem">T</span> °C changes at a rate equal to <span class="chem">0.2</span> times the difference between the room temperature and the coffee temperature.</p><p>(a) Show that <span class="chem">dT/dt + 0.2T = 3.6 + 0.1t</span>. <strong>[1 mark]</strong></p><p>(b) Use an integrating factor to show that <span class="chem">T = 15.5 + 0.5t + 69.5e^{-0.2t}</span>. <strong>[6 marks]</strong></p><p>(c) Find the time at which the coffee reaches <span class="chem">50</span> °C. <strong>[2 marks]</strong></p><p>(d) Find the time at which the coffee and the room are at the same temperature. <strong>[2 marks]</strong></p>
      stem: "",
      hints: [
        // EN: Decode: “rate equal to 0.2 times (room − coffee)” gives <span class="chem">dT/dt = 0.2(18 + 0.5t - T)</span>. Because the room temperature depends on <span class="chem">t</span>, use the integrating factor method.
        "",
        // EN: The integrating factor is <span class="chem">e^{0.2t}</span>. You need <span class="chem">int t e^{0.2t} dt</span> by parts, with <span class="chem">u = t</span>.
        "",
        // EN: For (d), set <span class="chem">T = 18 + 0.5t</span>: the <span class="chem">0.5t</span> terms cancel.
        "",
      ],
      // EN: <p><strong>Decode:</strong> the room temperature is not constant, so this is not the usual separable cooling model: it becomes a linear DE that needs an integrating factor and integration by parts.</p><p>(a) <span class="chem">dT/dt = 0.2((18 + 0.5t) - T) = 3.6 + 0.1t - 0.2T</span>, which rearranges to the result.</p><p>(b) IF <span class="chem">= e^{0.2t}</span>: <span class="chem">d/dt(T e^{0.2t}) = (3.6 + 0.1t)e^{0.2t}</span>. <span class="chem">int 3.6e^{0.2t} dt = 18e^{0.2t}</span>; by parts, <span class="chem">int 0.1t e^{0.2t} dt = 0.5t e^{0.2t} - 2.5e^{0.2t}</span>. So <span class="chem">T e^{0.2t} = (15.5 + 0.5t)e^{0.2t} + C</span>, <span class="chem">T = 15.5 + 0.5t + C e^{-0.2t}</span>, and <span class="chem">T(0) = 85</span> gives <span class="chem">C = 69.5</span>.</p><p>(c) GDC: <span class="chem">15.5 + 0.5t + 69.5e^{-0.2t} = 50 => t ≈ 3.78</span> minutes.</p><p>(d) <span class="chem">T - (18 + 0.5t) = 69.5e^{-0.2t} - 2.5 = 0 => t = 5 ln(27.8) ≈ 16.6</span> minutes.</p>
      answer: "",
      markscheme: [
        // EN: A1: writes <span class="chem">dT/dt = 0.2(18 + 0.5t - T)</span> and expands. AG: <span class="chem">dT/dt + 0.2T = 3.6 + 0.1t</span>; the given line itself earns no mark.
        "",
        // EN: M1: integrating factor <span class="chem">e^{int 0.2 dt} = e^{0.2t}</span>.
        "",
        // EN: A1: <span class="chem">d/dt(T e^{0.2t}) = (3.6 + 0.1t)e^{0.2t}</span>.
        "",
        // EN: M1: uses integration by parts on <span class="chem">int t e^{0.2t} dt</span>.
        "",
        // EN: A1: <span class="chem">int 0.1t e^{0.2t} dt = 0.5t e^{0.2t} - 2.5e^{0.2t}</span>.
        "",
        // EN: A1: <span class="chem">T e^{0.2t} = (15.5 + 0.5t)e^{0.2t} + C</span>.
        "",
        // EN: A1: <span class="chem">C = 69.5</span> from <span class="chem">T(0) = 85</span>. AG: <span class="chem">T = 15.5 + 0.5t + 69.5e^{-0.2t}</span>; the given line itself earns no mark.
        "",
        // EN: M1: sets <span class="chem">T = 50</span> and solves with the GDC.
        "",
        // EN: A1: <span class="chem">t = 3.78</span> minutes.
        "",
        // EN: M1: sets <span class="chem">T = 18 + 0.5t</span>, i.e. <span class="chem">69.5e^{-0.2t} = 2.5</span>.
        "",
        // EN: A1: <span class="chem">t = 16.6</span> minutes.
        "",
      ],
    },

    // ── t5-4-q037 · numeric · exam · AHL · AHL 5.18 · 6 marks
    "t5-4-q037": {
      // EN: <p>In a chemical reaction, the amount <span class="chem">x</span> grams of product formed after <span class="chem">t</span> minutes satisfies <span class="chem">dx/dt = 0.02(5 - x)(3 - x)</span>, with <span class="chem">x(0) = 0</span>. You may use <span class="chem">1/((5 - x)(3 - x)) = (1/2)(1/(3 - x) - 1/(5 - x))</span>. Find the amount of product after 10 minutes, correct to 3 significant figures.</p>
      stem: "",
      hints: [
        // EN: Decode: this is a separable DE; the partial fractions are given. While <span class="chem">0 &lt;= x &lt; 3</span>, both <span class="chem">5 - x</span> and <span class="chem">3 - x</span> are positive.
        "",
        // EN: Integrating gives <span class="chem">(1/2) ln((5 - x)/(3 - x)) = 0.02t + C</span>, with <span class="chem">C = (1/2) ln(5/3)</span>.
        "",
        // EN: So <span class="chem">(5 - x)/(3 - x) = (5/3)e^{0.04t}</span>. Put <span class="chem">t = 10</span> and solve for <span class="chem">x</span>.
        "",
      ],
      // EN: <p><span class="chem">int 1/((5 - x)(3 - x)) dx = int 0.02 dt => (1/2)(-ln(3 - x) + ln(5 - x)) = 0.02t + C</span>. At <span class="chem">t = 0, x = 0</span>: <span class="chem">C = (1/2) ln(5/3)</span>. So <span class="chem">(5 - x)/(3 - x) = (5/3)e^{0.04t}</span>.</p><p>At <span class="chem">t = 10</span>, let <span class="chem">K = (5/3)e^{0.4} = 2.48654…</span>. Then <span class="chem">5 - x = K(3 - x) => x = (3K - 5)/(K - 1) ≈ 1.65</span> g.</p>
      solution: "",
    },

    // ── t5-4-q038 · numeric · challenge · AHL · AHL 5.19 · 5 marks
    "t5-4-q038": {
      // EN: <p>A student estimates <span class="chem">sqrt(e)</span> by adding terms of the Maclaurin series for <span class="chem">e^x</span>. Let <span class="chem">P_n(x)</span> be the Maclaurin polynomial of <span class="chem">e^x</span> of degree <span class="chem">n</span>. Find the least value of <span class="chem">n</span> for which <span class="chem">|sqrt(e) - P_n(0.5)| &lt; 10^{-6}</span>.</p>
      stem: "",
      hints: [
        // EN: Decode: <span class="chem">sqrt(e) = e^{0.5}</span>, so this asks how many terms of <span class="chem">1 + x + x^2/2! + …</span> at <span class="chem">x = 0.5</span> you need to get within <span class="chem">10^{-6}</span>. Degree <span class="chem">n</span> means the last term is <span class="chem">x^n/n!</span>.
        "",
        // EN: Compute <span class="chem">P_n(0.5) = sum_{k=0}^{n} 0.5^k/k!</span> for increasing <span class="chem">n</span> (a GDC sum or table helps) and compare with the GDC value of <span class="chem">e^{0.5}</span>.
        "",
        // EN: The error is roughly the first term left out, <span class="chem">0.5^{n+1}/(n + 1)!</span>.
        "",
      ],
      // EN: <p><strong>Decode:</strong> <span class="chem">sqrt(e) = e^{0.5}</span>, and “degree <span class="chem">n</span>” means the polynomial stops at <span class="chem">x^n/n!</span>; we need the least <span class="chem">n</span> giving error below <span class="chem">10^{-6}</span>.</p><p>GDC: <span class="chem">e^{0.5} - P_6(0.5) = 1.65 × 10^{-6}</span> (not enough) and <span class="chem">e^{0.5} - P_7(0.5) = 1.03 × 10^{-7}</span>. So <span class="chem">n = 7</span>.</p>
      solution: "",
    },

    // ── t5-4-q039 · short · exam · AHL · AHL 5.18 · 9 marks
    "t5-4-q039": {
      // EN: <p>Consider <span class="chem">dy/dx = x - y^2</span> with <span class="chem">y(0) = 1</span>. In this question, carry full calculator accuracy between steps and give final answers correct to 4 decimal places.</p><p>(a) Use Euler’s method with <span class="chem">h = 0.2</span> to estimate <span class="chem">y(1)</span>. <strong>[3 marks]</strong></p><p>(b) Use Euler’s method with <span class="chem">h = 0.1</span> to estimate <span class="chem">y(1)</span>. <strong>[2 marks]</strong></p><p>(c) A numerical solver gives <span class="chem">y(1) = 0.8334</span> to 4 decimal places. Find the error in each estimate. <strong>[2 marks]</strong></p><p>(d) Comment on how the error changes when the step size is halved. <strong>[2 marks]</strong></p>
      stem: "",
      hints: [
        // EN: Decode: two GDC Euler tables (5 steps and 10 steps), then compare each with the given accurate value.
        "",
        // EN: Store <span class="chem">x</span> and <span class="chem">y</span> on the GDC and repeat <span class="chem">y + h(x - y^2) -> y</span>, <span class="chem">x + h -> x</span>.
        "",
        // EN: For (d), divide the larger error by the smaller one.
        "",
      ],
      // EN: <p>(a) <span class="chem">y_{n+1} = y_n + 0.2(x_n - y_n^2)</span>: <span class="chem">0.8, 0.712, 0.690611, 0.715222, 0.772914</span>. So <span class="chem">y(1) ≈ 0.7729</span>.</p><p>(b) Ten steps of <span class="chem">y_{n+1} = y_n + 0.1(x_n - y_n^2)</span> give <span class="chem">y(1) ≈ 0.8054</span> (0.805354).</p><p>(c) Errors: <span class="chem">0.8334 - 0.7729 = 0.0605</span> and <span class="chem">0.8334 - 0.8054 = 0.0280</span>.</p><p>(d) Halving <span class="chem">h</span> roughly halves the error (<span class="chem">0.0605/0.0280 ≈ 2.2</span>): the Euler error is roughly proportional to <span class="chem">h</span>. Both estimates are too low.</p>
      answer: "",
      markscheme: [
        // EN: M1: uses <span class="chem">y_{n+1} = y_n + 0.2(x_n - y_n^2)</span>.
        "",
        // EN: A1: correct intermediate values (e.g. <span class="chem">y_1 = 0.8</span>, <span class="chem">y_2 = 0.712</span>).
        "",
        // EN: A1: <span class="chem">y(1) ≈ 0.7729</span>.
        "",
        // EN: M1: ten steps with <span class="chem">h = 0.1</span>.
        "",
        // EN: A1: <span class="chem">y(1) ≈ 0.8054</span>.
        "",
        // EN: A1: error <span class="chem">0.0605</span> for <span class="chem">h = 0.2</span>.
        "",
        // EN: A1: error <span class="chem">0.0280</span> for <span class="chem">h = 0.1</span>.
        "",
        // EN: A1: the error is roughly halved (ratio about 2).
        "",
        // EN: R1: so the error is approximately proportional to the step size <span class="chem">h</span>.
        "",
      ],
    },

    // ── t5-4-q040 · numeric · challenge · AHL · AHL 5.18 · 5 marks
    "t5-4-q040": {
      // EN: <p>A fish farm models the number <span class="chem">P</span> of fish in a lake by <span class="chem">dP/dt = 0.5P(1 - P/1000) - 60</span>, where <span class="chem">t</span> is in years and 60 fish per year are caught. There is a critical starting population <span class="chem">P_c</span>: if <span class="chem">P(0) &lt; P_c</span> the fish eventually die out, and if <span class="chem">P(0)</span> is a little more than <span class="chem">P_c</span> the population survives. Find <span class="chem">P_c</span>, correct to 3 significant figures.</p>
      stem: "",
      hints: [
        // EN: Decode: you do not need to solve the DE. Find the constant (equilibrium) solutions, where <span class="chem">dP/dt = 0</span>, and look at the sign of <span class="chem">dP/dt</span> between them.
        "",
        // EN: <span class="chem">dP/dt = 0 => 0.5P - 0.0005P^2 - 60 = 0 => P^2 - 1000P + 120000 = 0</span>. Solve this with the GDC.
        "",
        // EN: Below the smaller root, <span class="chem">dP/dt &lt; 0</span>, so the population keeps falling. Between the roots, <span class="chem">dP/dt &gt; 0</span>.
        "",
      ],
      // EN: <p><strong>Decode:</strong> “critical starting population” is the boundary between falling and rising populations, that is, an equilibrium where <span class="chem">dP/dt = 0</span>.</p><p><span class="chem">P^2 - 1000P + 120000 = 0 => P = 139.44…</span> or <span class="chem">P = 860.55…</span>. <span class="chem">dP/dt</span> is a downward parabola in <span class="chem">P</span>, so <span class="chem">dP/dt &lt; 0</span> for <span class="chem">P &lt; 139.4</span> (decline to extinction) and <span class="chem">dP/dt &gt; 0</span> for <span class="chem">139.4 &lt; P &lt; 860.6</span> (growth towards 860.6). So <span class="chem">P_c ≈ 139</span>.</p>
      solution: "",
    },

    // ── t5-4-q041 · numeric · exam · AHL · AHL 5.19 · 5 marks
    "t5-4-q041": {
      // EN: <p>Use the first three non-zero terms of the Maclaurin series for <span class="chem">sin x</span> to find a polynomial approximation to <span class="chem">(sin x)/x</span>. Hence estimate <span class="chem">int_0^2 (sin x)/x dx</span>, and find the percentage error of this estimate compared with the value given by your GDC. Give the percentage error correct to 3 significant figures.</p>
      stem: "",
      hints: [
        // EN: Divide <span class="chem">x - x^3/6 + x^5/120</span> by <span class="chem">x</span>: <span class="chem">(sin x)/x ≈ 1 - x^2/6 + x^4/120</span>.
        "",
        // EN: Integrate from <span class="chem">0</span> to <span class="chem">2</span>: <span class="chem">[x - x^3/18 + x^5/600]_0^2</span>.
        "",
        // EN: Find the integral of <span class="chem">(sin x)/x</span> with the GDC, then use <span class="chem">|approx - exact| / exact × 100</span>.
        "",
      ],
      // EN: <p><span class="chem">int_0^2 (1 - x^2/6 + x^4/120) dx = 2 - 8/18 + 32/600 = 1.608889</span>. GDC: <span class="chem">int_0^2 (sin x)/x dx = 1.605413</span>. Percentage error <span class="chem">= 0.003476/1.605413 × 100 ≈ 0.217%</span>.</p>
      solution: "",
    },

    // ── t5-4-q042 · numeric · foundation · AHL · AHL 5.18 · 3 marks
    "t5-4-q042": {
      // EN: <p>The function <span class="chem">y(x)</span> satisfies <span class="chem">dy/dx = xy</span> with <span class="chem">y(1) = 2</span>. Use Euler’s method with step size <span class="chem">h = 0.5</span> to find an estimate for <span class="chem">y(2)</span>.</p>
      stem: "",
      hints: [
        // EN: Two steps of <span class="chem">0.5</span> take you from <span class="chem">x = 1</span> to <span class="chem">x = 2</span>. Use <span class="chem">y_{n+1} = y_n + 0.5 x_n y_n</span>.
        "",
        // EN: First step: <span class="chem">y_1 = 2 + 0.5(1)(2) = 3</span> at <span class="chem">x_1 = 1.5</span>.
        "",
      ],
      // EN: <p><span class="chem">y_1 = 2 + 0.5(1)(2) = 3</span> at <span class="chem">x = 1.5</span>. <span class="chem">y_2 = 3 + 0.5(1.5)(3) = 3 + 2.25 = 5.25</span> at <span class="chem">x = 2</span>. So <span class="chem">y(2) ≈ 5.25</span>.</p>
      solution: "",
    },

    // ── t5-4-q043 · numeric · foundation · AHL · AHL 5.19 · 2 marks
    "t5-4-q043": {
      // EN: <p>Find the exact coefficient of <span class="chem">x^4</span> in the Maclaurin series for <span class="chem">cos(3x)</span>.</p>
      stem: "",
      hints: [
        // EN: Substitute <span class="chem">u = 3x</span> into <span class="chem">cos u = 1 - u^2/2! + u^4/4! - …</span>.
        "",
        // EN: The <span class="chem">x^4</span> term is <span class="chem">(3x)^4/4!</span>. Simplify the fraction.
        "",
      ],
      // EN: <p><span class="chem">(3x)^4/4! = 81x^4/24 = (27/8)x^4</span>, so the coefficient is <span class="chem">27/8</span>.</p>
      solution: "",
    },

    // ── t5-4-q044 · short · exam · AHL · AHL 5.18 · 6 marks
    "t5-4-q044": {
      // EN: <p>Consider the differential equation <span class="chem">dy/dx = e^{x + y}</span> with <span class="chem">y(0) = 0</span>.</p><p>(a) Show that <span class="chem">y = -ln(2 - e^x)</span>. <strong>[4 marks]</strong></p><p>(b) State the largest interval containing <span class="chem">x = 0</span> on which this solution is defined, and justify your answer. <strong>[2 marks]</strong></p>
      stem: "",
      hints: [
        // EN: Use the index law <span class="chem">e^{x + y} = e^x × e^y</span> to separate the variables.
        "",
        // EN: Remember <span class="chem">int e^{-y} dy = -e^{-y}</span>.
        "",
      ],
      // EN: <p>(a) <span class="chem">e^{x + y} = e^x e^y</span>, so <span class="chem">int e^{-y} dy = int e^x dx => -e^{-y} = e^x + C</span>. At <span class="chem">(0, 0)</span>: <span class="chem">-1 = 1 + C => C = -2</span>. So <span class="chem">e^{-y} = 2 - e^x</span>, and <span class="chem">-y = ln(2 - e^x)</span>, giving <span class="chem">y = -ln(2 - e^x)</span>.</p><p>(b) The logarithm needs <span class="chem">2 - e^x &gt; 0</span>, that is <span class="chem">e^x &lt; 2</span>, so <span class="chem">x &lt; ln 2</span>. The interval is <span class="chem">-inf &lt; x &lt; ln 2</span> (as <span class="chem">x -> ln 2</span>, <span class="chem">y -> inf</span>).</p>
      answer: "",
      markscheme: [
        // EN: M1: writes <span class="chem">e^{x + y} = e^x e^y</span> and separates: <span class="chem">int e^{-y} dy = int e^x dx</span>.
        "",
        // EN: A1: <span class="chem">-e^{-y} = e^x + C</span>.
        "",
        // EN: M1: uses <span class="chem">y(0) = 0</span> to find <span class="chem">C = -2</span>.
        "",
        // EN: A1: <span class="chem">e^{-y} = 2 - e^x</span>. AG: <span class="chem">y = -ln(2 - e^x)</span>; the given line itself earns no mark.
        "",
        // EN: R1: requires <span class="chem">2 - e^x &gt; 0</span>.
        "",
        // EN: A1: <span class="chem">x &lt; ln 2</span>.
        "",
      ],
    },

    // ── t5-4-q045 · numeric · exam · AHL · AHL 5.18 · 6 marks
    "t5-4-q045": {
      // EN: <p>The function <span class="chem">y(x)</span>, where <span class="chem">x &gt; 1/2</span> and <span class="chem">y &gt; 0</span>, satisfies <span class="chem">dy/dx = (x^2 + 3y^2)/(2xy)</span> and <span class="chem">y(1) = 1</span>. Find the exact value of <span class="chem">y(2)</span>.</p>
      stem: "",
      hints: [
        // EN: Divide the top and bottom by <span class="chem">x^2</span>: the right-hand side depends only on <span class="chem">v = y/x</span>. Substitute <span class="chem">y = vx</span>.
        "",
        // EN: You should get <span class="chem">x(dv/dx) = (1 + v^2)/(2v)</span>.
        "",
        // EN: Separate and integrate: <span class="chem">int 2v/(1 + v^2) dv = int (1/x) dx</span>, so <span class="chem">1 + v^2 = Ax</span>.
        "",
      ],
      // EN: <p><span class="chem">y = vx</span>: <span class="chem">v + x(dv/dx) = (1 + 3v^2)/(2v) => x(dv/dx) = (1 + 3v^2 - 2v^2)/(2v) = (1 + v^2)/(2v)</span>.</p><p><span class="chem">int 2v/(1 + v^2) dv = int (1/x) dx => ln(1 + v^2) = ln x + C => 1 + v^2 = Ax</span>. At <span class="chem">(1, 1)</span>: <span class="chem">A = 2</span>. So <span class="chem">y^2 = x^2(2x - 1)</span>.</p><p><span class="chem">y(2) = sqrt(4 × 3) = 2 sqrt(3)</span>.</p>
      solution: "",
    },

    // ── t5-4-q046 · numeric · exam · AHL · AHL 5.18 · 6 marks
    "t5-4-q046": {
      // EN: <p>The function <span class="chem">y(x)</span>, for <span class="chem">-pi/2 &lt; x &lt; pi/2</span>, satisfies <span class="chem">dy/dx + y tan x = cos^2 x</span> and <span class="chem">y(0) = 2</span>. Find the exact value of <span class="chem">y(pi/3)</span>.</p>
      stem: "",
      hints: [
        // EN: The integrating factor is <span class="chem">e^{int tan x dx} = e^{-ln(cos x)}</span>. Simplify it.
        "",
        // EN: With <span class="chem">I(x) = sec x</span>: <span class="chem">d/dx(y sec x) = cos^2 x sec x = cos x</span>.
        "",
        // EN: So <span class="chem">y sec x = sin x + C</span>. Find <span class="chem">C</span>, then substitute <span class="chem">x = pi/3</span>.
        "",
      ],
      // EN: <p><span class="chem">I(x) = e^{int tan x dx} = e^{-ln(cos x)} = sec x</span> (since <span class="chem">cos x &gt; 0</span>). Then <span class="chem">d/dx(y sec x) = cos x => y sec x = sin x + C</span>. At <span class="chem">x = 0</span>: <span class="chem">2 = C</span>. So <span class="chem">y = sin x cos x + 2 cos x</span>.</p><p><span class="chem">y(pi/3) = (sqrt(3)/2)(1/2) + 2(1/2) = 1 + sqrt(3)/4</span>.</p>
      solution: "",
    },

    // ── t5-4-q047 · short · exam · AHL · AHL 5.13, 5.19 · 6 marks
    "t5-4-q047": {
      // EN: <p>(a) By substituting the Maclaurin series for <span class="chem">sin x</span> into the series for <span class="chem">ln(1 + u)</span>, show that the Maclaurin series for <span class="chem">ln(1 + sin x)</span> up to and including the term in <span class="chem">x^3</span> is <span class="chem">x - x^2/2 + x^3/6</span>. <strong>[4 marks]</strong></p><p>(b) Hence find <span class="chem">lim_{x->0} (ln(1 + sin x) - x)/x^2</span>. <strong>[2 marks]</strong></p>
      stem: "",
      hints: [
        // EN: Only keep terms up to <span class="chem">x^3</span>: <span class="chem">sin^2 x = x^2 - (1/3)x^4 + …</span>, so its <span class="chem">x^3</span> coefficient is 0.
        "",
        // EN: In (b), the <span class="chem">x</span> terms cancel; what is left starts with <span class="chem">-x^2/2</span>.
        "",
      ],
      // EN: <p>(a) With <span class="chem">u = sin x = x - x^3/6 + …</span>: <span class="chem">u^2 = x^2 + …</span> and <span class="chem">u^3 = x^3 + …</span> (up to <span class="chem">x^3</span>). So <span class="chem">ln(1 + sin x) = u - u^2/2 + u^3/3 - … = (x - x^3/6) - x^2/2 + x^3/3 + … = x - x^2/2 + (1/3 - 1/6)x^3 = x - x^2/2 + x^3/6</span>.</p><p>(b) <span class="chem">(ln(1 + sin x) - x)/x^2 = (-x^2/2 + x^3/6 + …)/x^2 = -1/2 + x/6 + … -> -1/2</span>.</p>
      answer: "",
      markscheme: [
        // EN: M1: substitutes <span class="chem">u = sin x</span> into <span class="chem">u - u^2/2 + u^3/3</span>.
        "",
        // EN: A1: <span class="chem">u^2 = x^2 + …</span> (no <span class="chem">x^3</span> term) and <span class="chem">u^3 = x^3 + …</span>.
        "",
        // EN: A1: <span class="chem">x^3</span> terms <span class="chem">-1/6 + 1/3</span> collected.
        "",
        // EN: A1: collects <span class="chem">x - x^2/2 + (1/6)x^3</span> correctly. AG: the given series; the given line itself earns no mark.
        "",
        // EN: M1: substitutes the series and divides by <span class="chem">x^2</span>.
        "",
        // EN: A1: <span class="chem">-1/2</span>.
        "",
      ],
    },

    // ── t5-4-q048 · short · exam · AHL · AHL 5.19 · 7 marks
    "t5-4-q048": {
      // EN: <p>(a) Use the series for <span class="chem">(1 + x)^p</span> to write down the Maclaurin series for <span class="chem">(1 - x)^{-1}</span>, and state the values of <span class="chem">x</span> for which it is valid. <strong>[2 marks]</strong></p><p>(b) By differentiating your series term by term, show that <span class="chem">(1 - x)^{-2} = 1 + 2x + 3x^2 + … + n x^{n - 1} + …</span>. <strong>[2 marks]</strong></p><p>(c) Hence find the exact value of <span class="chem">sum_{n=1}^{inf} n/3^n</span>. <strong>[3 marks]</strong></p>
      stem: "",
      hints: [
        // EN: Decode: (c) looks like a series question from Topic 1, but it is the differentiated series in (b) evaluated at a particular <span class="chem">x</span>.
        "",
        // EN: In <span class="chem">(1 + u)^p = 1 + pu + p(p - 1)u^2/2! + …</span>, put <span class="chem">p = -1</span> and <span class="chem">u = -x</span>.
        "",
        // EN: Take out a factor <span class="chem">1/3</span>: <span class="chem">n/3^n = (1/3) × n (1/3)^{n - 1}</span>.
        "",
      ],
      // EN: <p>(a) <span class="chem">p = -1</span>, <span class="chem">x</span> replaced by <span class="chem">-x</span>: <span class="chem">(1 - x)^{-1} = 1 + x + x^2 + x^3 + … + x^n + …</span>, valid for <span class="chem">|x| &lt; 1</span>.</p><p>(b) <span class="chem">d/dx (1 - x)^{-1} = (1 - x)^{-2}</span>, and differentiating each term <span class="chem">x^n</span> gives <span class="chem">n x^{n - 1}</span>: <span class="chem">(1 - x)^{-2} = 1 + 2x + 3x^2 + … + n x^{n - 1} + …</span>.</p><p>(c) <span class="chem">sum_{n=1}^{inf} n/3^n = (1/3) sum_{n=1}^{inf} n (1/3)^{n - 1} = (1/3)(1 - 1/3)^{-2} = (1/3)(9/4) = 3/4</span>, using <span class="chem">x = 1/3</span>, which satisfies <span class="chem">|x| &lt; 1</span>.</p>
      answer: "",
      markscheme: [
        // EN: A1: <span class="chem">1 + x + x^2 + x^3 + …</span>.
        "",
        // EN: A1: valid for <span class="chem">|x| &lt; 1</span>.
        "",
        // EN: M1: differentiates the left side: <span class="chem">d/dx (1 - x)^{-1} = (1 - x)^{-2}</span>.
        "",
        // EN: A1: differentiates each term <span class="chem">x^n -> n x^{n - 1}</span>. AG: the given series; the given line itself earns no mark.
        "",
        // EN: M1: writes <span class="chem">n/3^n = (1/3) n (1/3)^{n - 1}</span>.
        "",
        // EN: M1: substitutes <span class="chem">x = 1/3</span> into <span class="chem">(1 - x)^{-2}</span> (with <span class="chem">|1/3| &lt; 1</span>).
        "",
        // EN: A1: <span class="chem">3/4</span>.
        "",
      ],
    },

    // ── t5-4-q049 · numeric · exam · AHL · AHL 5.19 · 4 marks
    "t5-4-q049": {
      // EN: <p>Let <span class="chem">F(x) = int_0^x ln(1 + t)/t dt</span>. By integrating a series term by term, find the exact coefficient of <span class="chem">x^4</span> in the Maclaurin series for <span class="chem">F(x)</span>.</p>
      stem: "",
      hints: [
        // EN: Divide the series <span class="chem">ln(1 + t) = t - t^2/2 + t^3/3 - t^4/4 + …</span> by <span class="chem">t</span>.
        "",
        // EN: Then integrate each term from <span class="chem">0</span> to <span class="chem">x</span>. The <span class="chem">x^4</span> term comes from the <span class="chem">t^3</span> term.
        "",
      ],
      // EN: <p><span class="chem">ln(1 + t)/t = 1 - t/2 + t^2/3 - t^3/4 + …</span>. Integrating from 0 to <span class="chem">x</span>: <span class="chem">F(x) = x - x^2/4 + x^3/9 - x^4/16 + …</span>. The coefficient of <span class="chem">x^4</span> is <span class="chem">-1/16</span>.</p>
      solution: "",
    },

    // ── t5-4-q050 · numeric · challenge · AHL · AHL 5.19 · 6 marks
    "t5-4-q050": {
      // EN: <p>A curve passes through the origin. At every point <span class="chem">(x, y)</span> on the curve, the gradient is equal to the sum of the <span class="chem">x</span>-coordinate and the sine of the <span class="chem">y</span>-coordinate. Find the exact coefficient of <span class="chem">x^4</span> in the Maclaurin series of the curve’s equation <span class="chem">y = f(x)</span>.</p>
      stem: "",
      hints: [
        // EN: Decode: the words describe the DE <span class="chem">dy/dx = x + sin y</span> with <span class="chem">y(0) = 0</span>. You need <span class="chem">f^{(4)}(0)/4!</span>, found by repeated implicit differentiation.
        "",
        // EN: <span class="chem">y'(0) = 0 + sin 0 = 0</span>. Differentiate: <span class="chem">y'' = 1 + cos y × y'</span>, so <span class="chem">y''(0) = 1</span>.
        "",
        // EN: Next, <span class="chem">y''' = -sin y (y')^2 + cos y × y''</span>. Differentiate once more, and at <span class="chem">x = 0</span> use <span class="chem">y = 0, y' = 0</span>: most terms vanish.
        "",
      ],
      // EN: <p><strong>Decode:</strong> “gradient equals <span class="chem">x</span> plus sine of <span class="chem">y</span>” is <span class="chem">dy/dx = x + sin y</span>; “passes through the origin” is <span class="chem">y(0) = 0</span>. Build the series from derivatives at 0.</p><p><span class="chem">y'(0) = 0</span>. <span class="chem">y'' = 1 + cos y y' => y''(0) = 1</span>. <span class="chem">y''' = -sin y (y')^2 + cos y y'' => y'''(0) = 1</span>.</p><p><span class="chem">y^{(4)} = -cos y (y')^3 - 3 sin y y' y'' + cos y y'''</span>, so <span class="chem">y^{(4)}(0) = 0 - 0 + 1 = 1</span>.</p><p>The coefficient of <span class="chem">x^4</span> is <span class="chem">1/4! = 1/24</span>.</p>
      solution: "",
    },

    // ── t5-4-q051 · short · challenge · AHL · AHL 5.18 · 9 marks
    "t5-4-q051": {
      // EN: <p>A curve in the region <span class="chem">x &gt; 0</span> passes through <span class="chem">(1, 0)</span>. At each point <span class="chem">(x, y)</span> of the curve with <span class="chem">x != y</span>, its gradient is <span class="chem">(x + y)/(x - y)</span>.</p><p>(a) Use the substitution <span class="chem">y = vx</span> to show that <span class="chem">int (1 - v)/(1 + v^2) dv = int (1/x) dx</span>. <strong>[3 marks]</strong></p><p>(b) Hence show that the curve has equation <span class="chem">arctan(y/x) = ln sqrt(x^2 + y^2)</span>. <strong>[4 marks]</strong></p><p>(c) The curve meets the line <span class="chem">y = x/sqrt(3)</span> at the point <span class="chem">P</span> in the first quadrant. Find the exact distance from the origin <span class="chem">O</span> to <span class="chem">P</span>. <strong>[2 marks]</strong></p>
      stem: "",
      hints: [
        // EN: Decode: divide the top and bottom of <span class="chem">(x + y)/(x - y)</span> by <span class="chem">x</span>: the DE is homogeneous, so use <span class="chem">y = vx</span>. In (c), notice what <span class="chem">arctan(y/x)</span> and <span class="chem">sqrt(x^2 + y^2)</span> mean geometrically.
        "",
        // EN: After substituting, subtract <span class="chem">v</span> from both sides and simplify over the common denominator <span class="chem">1 - v</span>.
        "",
        // EN: For <span class="chem">int v/(1 + v^2) dv</span>, the numerator is half the derivative of the denominator.
        "",
      ],
      // EN: <p><strong>Decode:</strong> the gradient is a function of <span class="chem">y/x</span>, so the DE is homogeneous. In (c), <span class="chem">arctan(y/x)</span> is the angle <span class="chem">OP</span> makes with the <span class="chem">x</span>-axis and <span class="chem">sqrt(x^2 + y^2)</span> is the distance <span class="chem">OP</span>.</p><p>(a) <span class="chem">v + x(dv/dx) = (1 + v)/(1 - v) => x(dv/dx) = (1 + v - v + v^2)/(1 - v) = (1 + v^2)/(1 - v)</span>, so <span class="chem">int (1 - v)/(1 + v^2) dv = int (1/x) dx</span>.</p><p>(b) <span class="chem">int 1/(1 + v^2) dv - int v/(1 + v^2) dv = arctan v - (1/2) ln(1 + v^2)</span>. So <span class="chem">arctan v - (1/2) ln(1 + v^2) = ln x + C</span>. At <span class="chem">(1, 0)</span>, <span class="chem">v = 0</span>, so <span class="chem">C = 0</span>. Then <span class="chem">arctan(y/x) = ln x + (1/2) ln((x^2 + y^2)/x^2) = (1/2) ln(x^2 + y^2) = ln sqrt(x^2 + y^2)</span>.</p><p>(c) On <span class="chem">y = x/sqrt(3)</span>, <span class="chem">arctan(y/x) = arctan(1/sqrt(3)) = pi/6</span>. So <span class="chem">ln OP = pi/6</span> and <span class="chem">OP = e^{pi/6}</span>.</p>
      answer: "",
      markscheme: [
        // EN: M1: substitutes <span class="chem">y = vx</span>, <span class="chem">dy/dx = v + x(dv/dx)</span> and divides top and bottom by <span class="chem">x</span>.
        "",
        // EN: A1: <span class="chem">x(dv/dx) = (1 + v^2)/(1 - v)</span>.
        "",
        // EN: A1: separates variables correctly. AG: <span class="chem">int (1 - v)/(1 + v^2) dv = int (1/x) dx</span>; the given line itself earns no mark.
        "",
        // EN: M1: splits into <span class="chem">1/(1 + v^2) - v/(1 + v^2)</span>.
        "",
        // EN: A1: <span class="chem">arctan v - (1/2) ln(1 + v^2) = ln x + C</span>.
        "",
        // EN: A1: <span class="chem">C = 0</span> from <span class="chem">(1, 0)</span>.
        "",
        // EN: A1: combines the logarithms: <span class="chem">ln x + (1/2) ln(1 + y^2/x^2) = (1/2) ln(x^2 + y^2)</span>. AG: <span class="chem">arctan(y/x) = ln sqrt(x^2 + y^2)</span>; the given line itself earns no mark.
        "",
        // EN: M1: uses <span class="chem">y/x = 1/sqrt(3)</span>, so <span class="chem">arctan(y/x) = pi/6</span>, and <span class="chem">OP = sqrt(x^2 + y^2)</span>.
        "",
        // EN: A1: <span class="chem">OP = e^{pi/6}</span>.
        "",
      ],
    },

    // ── t5-4-q052 · numeric · challenge · AHL · AHL 5.18 · 6 marks
    "t5-4-q052": {
      // EN: <p>A function <span class="chem">f</span> satisfies <span class="chem">f(x) = 1 + int_0^x (f(t) + e^t) dt</span> for all <span class="chem">x ∈ ℝ</span>. Find the exact value of <span class="chem">f(1)</span>.</p>
      stem: "",
      hints: [
        // EN: Decode: this is a differential equation in disguise. Differentiate both sides (fundamental theorem of calculus) to get a DE, and put <span class="chem">x = 0</span> to get the initial condition.
        "",
        // EN: Differentiating gives <span class="chem">f'(x) = f(x) + e^x</span>; at <span class="chem">x = 0</span> the integral is zero, so <span class="chem">f(0) = 1</span>.
        "",
        // EN: Solve <span class="chem">dy/dx - y = e^x</span> with the integrating factor <span class="chem">e^{-x}</span>.
        "",
      ],
      // EN: <p><strong>Decode:</strong> an equation with <span class="chem">f</span> inside an integral with variable upper limit becomes a DE after differentiating; the initial value comes from putting <span class="chem">x = 0</span>.</p><p><span class="chem">f'(x) = f(x) + e^x</span> and <span class="chem">f(0) = 1 + 0 = 1</span>. With <span class="chem">y = f(x)</span>: <span class="chem">dy/dx - y = e^x</span>, IF <span class="chem">e^{-x}</span>: <span class="chem">d/dx(y e^{-x}) = 1 => y e^{-x} = x + C</span>. <span class="chem">f(0) = 1 => C = 1</span>, so <span class="chem">f(x) = (x + 1)e^x</span>.</p><p><span class="chem">f(1) = 2e</span>.</p>
      solution: "",
    },

    // ── t5-4-q053 · numeric · challenge · AHL · AHL 5.13, 5.19 · 5 marks
    "t5-4-q053": {
      // EN: <p>Find the exact value of <span class="chem">lim_{x->inf} x^2 (1 - x sin(1/x))</span>.</p>
      stem: "",
      hints: [
        // EN: Decode: this is a limit as <span class="chem">x -> inf</span>, but the substitution <span class="chem">u = 1/x</span> turns it into a limit as <span class="chem">u -> 0^+</span>, where Maclaurin series work.
        "",
        // EN: With <span class="chem">u = 1/x</span>: <span class="chem">x^2(1 - x sin(1/x)) = (1 - (sin u)/u)/u^2</span>.
        "",
        // EN: Use <span class="chem">sin u = u - u^3/6 + u^5/120 - …</span>, so <span class="chem">(sin u)/u = 1 - u^2/6 + …</span>.
        "",
      ],
      // EN: <p><strong>Decode:</strong> Maclaurin series only work near 0, so first rewrite the limit at infinity with <span class="chem">u = 1/x -> 0</span>.</p><p><span class="chem">x^2(1 - x sin(1/x)) = (1 - (sin u)/u)/u^2 = (1 - (1 - u^2/6 + u^4/120 - …))/u^2 = 1/6 - u^2/120 + … -> 1/6</span>.</p>
      solution: "",
    },

    // ── t5-4-q054 · short · exam · AHL · AHL 5.18 · 12 marks
    "t5-4-q054": {
      // EN: <p>Consider the differential equation <span class="chem">dy/dx = x^2 - y</span> with <span class="chem">y(0) = 1</span>.</p><p>(a) Use Euler’s method with step size <span class="chem">h = 0.5</span> to find an estimate for <span class="chem">y(1)</span>. <strong>[3 marks]</strong></p><p>(b) Show that <span class="chem">d^2y/dx^2 = 2x - x^2 + y</span>. <strong>[2 marks]</strong></p><p>(c) Hence explain whether the first Euler step gives an overestimate or an underestimate. <strong>[2 marks]</strong></p><p>(d) Use an integrating factor to solve the differential equation, and hence find the exact value of <span class="chem">y(1)</span>. <strong>[5 marks]</strong></p>
      stem: "",
      hints: [
        // EN: Decode: (a) is Euler by hand, (b)–(c) use concavity to predict the error, and (d) is a linear DE (integrating factor) needing integration by parts.
        "",
        // EN: In (b), differentiate both sides of <span class="chem">dy/dx = x^2 - y</span> with respect to <span class="chem">x</span>.
        "",
        // EN: In (d), rewrite the DE as <span class="chem">dy/dx + y = x^2</span>. For <span class="chem">int x^2 e^x dx</span>, use parts with <span class="chem">u = x^2</span>, then again with <span class="chem">u = x</span>.
        "",
      ],
      // EN: <p>(a) <span class="chem">y_1 = 1 + 0.5(0 - 1) = 0.5</span> at <span class="chem">x = 0.5</span>; <span class="chem">y_2 = 0.5 + 0.5(0.25 - 0.5) = 0.375</span>. So <span class="chem">y(1) ≈ 0.375</span>.</p><p>(b) <span class="chem">d^2y/dx^2 = 2x - dy/dx = 2x - (x^2 - y) = 2x - x^2 + y</span>.</p><p>(c) At <span class="chem">(0, 1)</span>, <span class="chem">d^2y/dx^2 = 1 &gt; 0</span>, so the curve is concave up there and lies above its tangent: the first Euler step is an underestimate.</p><p>(d) <span class="chem">dy/dx + y = x^2</span>, IF <span class="chem">e^x</span>: <span class="chem">d/dx(y e^x) = x^2 e^x</span>. By parts twice, <span class="chem">int x^2 e^x dx = (x^2 - 2x + 2)e^x + C</span>. So <span class="chem">y = x^2 - 2x + 2 + C e^{-x}</span>; <span class="chem">y(0) = 1 => C = -1</span>. <span class="chem">y(1) = 1 - 2 + 2 - e^{-1} = 1 - 1/e</span>.</p>
      answer: "",
      markscheme: [
        // EN: M1: uses <span class="chem">y_{n+1} = y_n + 0.5(x_n^2 - y_n)</span>.
        "",
        // EN: A1: <span class="chem">y_1 = 0.5</span>.
        "",
        // EN: A1: <span class="chem">y(1) ≈ 0.375</span>.
        "",
        // EN: M1: differentiates the DE: <span class="chem">d^2y/dx^2 = 2x - dy/dx</span>.
        "",
        // EN: A1: substitutes <span class="chem">dy/dx = x^2 - y</span>. AG: <span class="chem">d^2y/dx^2 = 2x - x^2 + y</span>; the given line itself earns no mark.
        "",
        // EN: A1: <span class="chem">d^2y/dx^2 = 1 &gt; 0</span> at <span class="chem">(0, 1)</span>.
        "",
        // EN: R1: concave up, so the tangent lies below the curve and the step underestimates.
        "",
        // EN: M1: integrating factor <span class="chem">e^x</span> for <span class="chem">dy/dx + y = x^2</span>.
        "",
        // EN: M1: integration by parts (twice) on <span class="chem">int x^2 e^x dx</span>.
        "",
        // EN: A1: <span class="chem">y e^x = (x^2 - 2x + 2)e^x + C</span>.
        "",
        // EN: A1: <span class="chem">C = -1</span>.
        "",
        // EN: A1: <span class="chem">y(1) = 1 - 1/e</span>.
        "",
      ],
    },

    // ── t5-4-q055 · numeric · exam · AHL · AHL 5.19 · 4 marks
    "t5-4-q055": {
      // EN: <p>Find the coefficient of <span class="chem">x^2</span> in the Maclaurin series for <span class="chem">sqrt(1 + 2x) e^{-x}</span>.</p>
      stem: "",
      hints: [
        // EN: Use <span class="chem">(1 + u)^{1/2} = 1 + u/2 - u^2/8 + …</span> with <span class="chem">u = 2x</span>: <span class="chem">sqrt(1 + 2x) = 1 + x - x^2/2 + …</span>.
        "",
        // EN: Multiply by <span class="chem">e^{-x} = 1 - x + x^2/2 - …</span> and collect the three products that give <span class="chem">x^2</span>.
        "",
      ],
      // EN: <p><span class="chem">sqrt(1 + 2x) = 1 + x + ((1/2)(-1/2)/2)(2x)^2 + … = 1 + x - x^2/2 + …</span>. Then <span class="chem">(1 + x - x^2/2)(1 - x + x^2/2)</span> has <span class="chem">x^2</span> coefficient <span class="chem">1(1/2) + 1(-1) + (-1/2)(1) = -1</span>.</p>
      solution: "",
    },

    // ── t5-4-q056 · short · challenge · AHL · AHL 5.18, 5.19 · 17 marks
    "t5-4-q056": {
      // EN: <p><strong>How fast does Euler’s method converge?</strong> This investigation looks at the error of Euler’s method for <span class="chem">dy/dx = y</span>, <span class="chem">y(0) = 1</span>, whose exact solution is <span class="chem">y = e^x</span>.</p><p>(a) Euler’s method is used with <span class="chem">n</span> equal steps of size <span class="chem">h = 1/n</span> from <span class="chem">x = 0</span> to <span class="chem">x = 1</span>. Show that the Euler estimate of <span class="chem">y(1)</span> is <span class="chem">(1 + 1/n)^n</span>. <strong>[3 marks]</strong></p><p>Let <span class="chem">E_n = e - (1 + 1/n)^n</span> be the error.</p><p>(b) Use your GDC to calculate <span class="chem">E_n</span> for <span class="chem">n = 10, 100</span> and <span class="chem">1000</span>, giving answers correct to 4 significant figures. <strong>[3 marks]</strong></p><p>(c) Calculate <span class="chem">nE_n</span> for each of these values of <span class="chem">n</span>, and suggest a value for <span class="chem">lim_{n->inf} nE_n</span>. <strong>[2 marks]</strong></p><p>(d) Use the Maclaurin series for <span class="chem">ln(1 + x)</span> to show that <span class="chem">n ln(1 + 1/n) = 1 - 1/(2n) + 1/(3n^2) - …</span>. <strong>[2 marks]</strong></p><p>(e) Hence, by using the Maclaurin series for <span class="chem">e^x</span>, show that <span class="chem">(1 + 1/n)^n = e(1 - 1/(2n) + 11/(24n^2) - …)</span>, and deduce the exact value of <span class="chem">lim_{n->inf} nE_n</span>. <strong>[4 marks]</strong></p><p>(f) Use the approximation <span class="chem">E_n ≈ e/(2n)</span> to estimate the least <span class="chem">n</span> for which <span class="chem">E_n &lt; 0.0005</span>. Use your GDC to find the true least value of <span class="chem">n</span>, and explain the difference using part (e). <strong>[3 marks]</strong></p>
      stem: "",
      hints: [
        // EN: Decode: this is a guided discovery — compute, spot a pattern, then prove it with series. The Euler steps form a geometric sequence, and the proof uses <span class="chem">a^b = e^{b ln a}</span>.
        "",
        // EN: In (e), write <span class="chem">(1 + 1/n)^n = e^{n ln(1 + 1/n)}</span> and use (d). You need <span class="chem">u^2/2</span> only up to the <span class="chem">1/n^2</span> term: <span class="chem">u^2 = 1/(4n^2) + …</span>.
        "",
        // EN: In (f), list <span class="chem">E_n</span> in a GDC table near <span class="chem">n = 2718</span>.
        "",
      ],
      // EN: <p>(a) <span class="chem">y_{k+1} = y_k + h y_k = (1 + h) y_k</span>, so <span class="chem">y_k = (1 + h)^k y_0 = (1 + h)^k</span>. After <span class="chem">n</span> steps of <span class="chem">1/n</span> we reach <span class="chem">x = 1</span>: <span class="chem">y(1) ≈ (1 + 1/n)^n</span>.</p><p>(b) <span class="chem">E_{10} = 0.1245</span>, <span class="chem">E_{100} = 0.01347</span>, <span class="chem">E_{1000} = 0.001358</span>.</p><p>(c) <span class="chem">nE_n = 1.245, 1.347, 1.358</span>. The limit appears to be about <span class="chem">1.36</span> (perhaps <span class="chem">e/2 = 1.359…</span>).</p><p>(d) With <span class="chem">x = 1/n</span>: <span class="chem">ln(1 + 1/n) = 1/n - 1/(2n^2) + 1/(3n^3) - …</span>; multiplying by <span class="chem">n</span> gives the result.</p><p>(e) <span class="chem">(1 + 1/n)^n = e^{n ln(1 + 1/n)} = e × e^u</span> with <span class="chem">u = -1/(2n) + 1/(3n^2) - …</span>. <span class="chem">e^u = 1 + u + u^2/2 + … = 1 - 1/(2n) + (1/3 + 1/8)(1/n^2) + … = 1 - 1/(2n) + 11/(24n^2) - …</span>. So <span class="chem">E_n = e/(2n) - 11e/(24n^2) + …</span> and <span class="chem">nE_n = e/2 - 11e/(24n) + … -> e/2</span>.</p><p>(f) <span class="chem">e/(2n) &lt; 0.0005 => n &gt; 1000e = 2718.28…</span>, so the estimate is <span class="chem">n = 2719</span>. GDC: <span class="chem">E_{2718} = 0.00049988… &lt; 0.0005</span> and <span class="chem">E_{2717} &gt; 0.0005</span>, so the true least value is <span class="chem">n = 2718</span>. The next term <span class="chem">-11e/(24n^2)</span> is negative, so <span class="chem">E_n</span> is slightly less than <span class="chem">e/(2n)</span>, and a slightly smaller <span class="chem">n</span> is enough.</p>
      answer: "",
      markscheme: [
        // EN: M1: <span class="chem">y_{k+1} = y_k + h y_k = (1 + h) y_k</span>.
        "",
        // EN: A1: recognises a geometric sequence: <span class="chem">y_k = (1 + h)^k</span>.
        "",
        // EN: A1: <span class="chem">n</span> steps of size <span class="chem">1/n</span> reach <span class="chem">x = 1</span>. AG: <span class="chem">y(1) ≈ (1 + 1/n)^n</span>; the given line itself earns no mark.
        "",
        // EN: A1: <span class="chem">E_{10} = 0.1245</span>.
        "",
        // EN: A1: <span class="chem">E_{100} = 0.01347</span>.
        "",
        // EN: A1: <span class="chem">E_{1000} = 0.001358</span>.
        "",
        // EN: A1: <span class="chem">nE_n = 1.245, 1.347, 1.358</span>.
        "",
        // EN: A1: suggests a limit of about <span class="chem">1.36</span> (accept any value in [1.35, 1.37]).
        "",
        // EN: M1: substitutes <span class="chem">x = 1/n</span> into <span class="chem">x - x^2/2 + x^3/3 - …</span>.
        "",
        // EN: A1: multiplies by <span class="chem">n</span> correctly. AG: <span class="chem">1 - 1/(2n) + 1/(3n^2) - …</span>; the given line itself earns no mark.
        "",
        // EN: M1: writes <span class="chem">(1 + 1/n)^n = e^{n ln(1 + 1/n)} = e × e^u</span>.
        "",
        // EN: M1: expands <span class="chem">e^u = 1 + u + u^2/2 + …</span> and keeps terms to <span class="chem">1/n^2</span>.
        "",
        // EN: A1: <span class="chem">1/(3n^2) + 1/(8n^2) = 11/(24n^2)</span>. AG: the given expansion; the given line itself earns no mark.
        "",
        // EN: A1: <span class="chem">nE_n = e/2 - 11e/(24n) + … -> e/2</span>.
        "",
        // EN: A1: estimate <span class="chem">n = 2719</span> (from <span class="chem">n &gt; 1000e</span>).
        "",
        // EN: A1: true least value <span class="chem">n = 2718</span>.
        "",
        // EN: R1: the <span class="chem">-11e/(24n^2)</span> term makes <span class="chem">E_n</span> a little smaller than <span class="chem">e/(2n)</span>.
        "",
      ],
    },

    // ── t5-4-q057 · short · challenge · AHL · AHL 5.18, 5.19 · 17 marks
    "t5-4-q057": {
      // EN: <p><strong>A series for tan x from its differential equation.</strong> The Formula Booklet does not give a series for <span class="chem">tan x</span>. This investigation builds one.</p><p>(a) Show that <span class="chem">y = tan x</span> satisfies the differential equation <span class="chem">dy/dx = 1 + y^2</span> with <span class="chem">y(0) = 0</span>. <strong>[2 marks]</strong></p><p>(b) Show that <span class="chem">d^2y/dx^2 = 2y(1 + y^2)</span> and <span class="chem">d^3y/dx^3 = 2(1 + y^2)(1 + 3y^2)</span>. <strong>[4 marks]</strong></p><p>(c) Hence find the Maclaurin series for <span class="chem">tan x</span> up to and including the term in <span class="chem">x^3</span>. <strong>[2 marks]</strong></p><p>(d) Explain why the Maclaurin series for <span class="chem">tan x</span> contains only odd powers of <span class="chem">x</span>. <strong>[1 mark]</strong></p><p>(e) Let <span class="chem">tan x = x + (1/3)x^3 + ax^5 + bx^7 + …</span>. By substituting this series into <span class="chem">dy/dx = 1 + y^2</span> and comparing coefficients, find the exact values of <span class="chem">a</span> and <span class="chem">b</span>. <strong>[5 marks]</strong></p><p>(f) Use the four terms of the series to estimate <span class="chem">tan 0.5</span>, and find the percentage error compared with the GDC value. <strong>[3 marks]</strong></p>
      stem: "",
      hints: [
        // EN: Decode: a series is built from a DE in two ways here: by repeated differentiation in (b)–(c), and by comparing coefficients in (e).
        "",
        // EN: In (b), write <span class="chem">y'' = 2y + 2y^3</span> before differentiating again, and replace each <span class="chem">y'</span> by <span class="chem">1 + y^2</span>.
        "",
        // EN: In (e), the <span class="chem">x^6</span> term of <span class="chem">y^2</span> comes from <span class="chem">(x^3/3)^2</span> and from <span class="chem">2 × x × ax^5</span>.
        "",
      ],
      // EN: <p>(a) <span class="chem">d/dx(tan x) = sec^2 x = 1 + tan^2 x</span>, so <span class="chem">dy/dx = 1 + y^2</span>; and <span class="chem">tan 0 = 0</span>.</p><p>(b) <span class="chem">y'' = 2y y' = 2y(1 + y^2)</span>. Writing <span class="chem">y'' = 2y + 2y^3</span>: <span class="chem">y''' = (2 + 6y^2) y' = 2(1 + 3y^2)(1 + y^2)</span>.</p><p>(c) <span class="chem">y(0) = 0</span>, <span class="chem">y'(0) = 1</span>, <span class="chem">y''(0) = 0</span>, <span class="chem">y'''(0) = 2</span>, so <span class="chem">tan x = x + (2/3!)x^3 + … = x + x^3/3 + …</span>.</p><p>(d) <span class="chem">tan(-x) = -tan x</span>: tan is an odd function, so every even-power coefficient must be zero.</p><p>(e) <span class="chem">dy/dx = 1 + x^2 + 5ax^4 + 7bx^6 + …</span>; <span class="chem">y^2 = x^2 + (2/3)x^4 + (1/9 + 2a)x^6 + …</span>. Comparing <span class="chem">x^4</span>: <span class="chem">5a = 2/3 => a = 2/15</span>. Comparing <span class="chem">x^6</span>: <span class="chem">7b = 1/9 + 4/15 = 17/45 => b = 17/315</span>.</p><p>(f) <span class="chem">0.5 + 0.125/3 + (2/15)(0.03125) + (17/315)(0.0078125) = 0.546255</span>. GDC: <span class="chem">tan 0.5 = 0.546302</span>. Percentage error <span class="chem">≈ 0.00870%</span>.</p>
      answer: "",
      markscheme: [
        // EN: M1: <span class="chem">d/dx(tan x) = sec^2 x</span>.
        "",
        // EN: A1: uses <span class="chem">sec^2 x = 1 + tan^2 x</span> and <span class="chem">tan 0 = 0</span>. AG: <span class="chem">dy/dx = 1 + y^2</span>, <span class="chem">y(0) = 0</span>; the given line itself earns no mark.
        "",
        // EN: M1: chain rule: <span class="chem">d/dx(y^2) = 2y (dy/dx)</span>.
        "",
        // EN: A1: <span class="chem">y'' = 2y(1 + y^2)</span>.
        "",
        // EN: M1: differentiates <span class="chem">2y + 2y^3</span> to <span class="chem">(2 + 6y^2) y'</span>.
        "",
        // EN: A1: substitutes <span class="chem">y' = 1 + y^2</span>. AG: <span class="chem">y''' = 2(1 + y^2)(1 + 3y^2)</span>; the given line itself earns no mark.
        "",
        // EN: A1: <span class="chem">y'(0) = 1</span>, <span class="chem">y''(0) = 0</span>, <span class="chem">y'''(0) = 2</span>.
        "",
        // EN: A1: <span class="chem">x + x^3/3</span>.
        "",
        // EN: R1: <span class="chem">tan x</span> is an odd function (<span class="chem">tan(-x) = -tan x</span>), so even-power coefficients are zero.
        "",
        // EN: M1: differentiates the series term by term.
        "",
        // EN: M1: squares the series, keeping terms up to <span class="chem">x^6</span>.
        "",
        // EN: A1: <span class="chem">y^2 = x^2 + (2/3)x^4 + (1/9 + 2a)x^6 + …</span>.
        "",
        // EN: A1: <span class="chem">a = 2/15</span>.
        "",
        // EN: A1: <span class="chem">b = 17/315</span>.
        "",
        // EN: A1: estimate <span class="chem">0.546255</span> (accept 0.5463).
        "",
        // EN: A1: GDC value <span class="chem">0.546302</span>.
        "",
        // EN: A1: percentage error <span class="chem">0.00870%</span>.
        "",
      ],
    },

    // ── t5-4-q058 · short · challenge · AHL · AHL 5.18 · 18 marks
    "t5-4-q058": {
      // EN: <p><strong>Two families of circles that cross at right angles.</strong> In this investigation, <span class="chem">x &gt; 0</span> and <span class="chem">y &gt; 0</span>.</p><p>(a) Use the substitution <span class="chem">y = vx</span> to show that the general solution of <span class="chem">dy/dx = (y^2 - x^2)/(2xy)</span> is <span class="chem">x^2 + y^2 = Cx</span>, where <span class="chem">C</span> is a constant. <strong>[5 marks]</strong></p><p>(b) Describe the curves <span class="chem">x^2 + y^2 = Cx</span> geometrically, giving the centre and radius in terms of <span class="chem">C</span>. <strong>[2 marks]</strong></p><p>A second family of curves satisfies <span class="chem">dy/dx = 2xy/(x^2 - y^2)</span>, for <span class="chem">x != y</span>.</p><p>(c) Show that, at any point where both are defined, a curve of the first family and a curve of the second family cross at right angles. <strong>[2 marks]</strong></p><p>(d) You are given that <span class="chem">(1 - v^2)/(v(1 + v^2)) = 1/v - 2v/(1 + v^2)</span>. Use the substitution <span class="chem">y = vx</span> to show that the second family is <span class="chem">x^2 + y^2 = Ky</span>, where <span class="chem">K</span> is a constant. <strong>[6 marks]</strong></p><p>(e) Find the members of each family that pass through the point <span class="chem">(3, 1)</span>, and verify that their gradients there have product <span class="chem">-1</span>. <strong>[3 marks]</strong></p>
      stem: "",
      hints: [
        // EN: Decode: both DEs are homogeneous (each is a function of <span class="chem">y/x</span>), so each part is the <span class="chem">y = vx</span> method; (c) is about perpendicular gradients <span class="chem">m_1 m_2 = -1</span>.
        "",
        // EN: In (a), after substituting, <span class="chem">(v^2 - 1)/(2v) - v = (v^2 - 1 - 2v^2)/(2v)</span>.
        "",
        // EN: In (b), complete the square in <span class="chem">x</span>. In (e), substitute <span class="chem">(3, 1)</span> into each family, and into each DE for the gradients.
        "",
      ],
      // EN: <p>(a) <span class="chem">v + x(dv/dx) = (v^2 - 1)/(2v) => x(dv/dx) = -(1 + v^2)/(2v)</span>. Then <span class="chem">int 2v/(1 + v^2) dv = -int (1/x) dx => ln(1 + v^2) = -ln x + c</span>, so <span class="chem">1 + v^2 = C/x</span>. Multiplying by <span class="chem">x^2</span>: <span class="chem">x^2 + y^2 = Cx</span>.</p><p>(b) <span class="chem">(x - C/2)^2 + y^2 = C^2/4</span>: circles with centre <span class="chem">(C/2, 0)</span> on the <span class="chem">x</span>-axis and radius <span class="chem">C/2</span>, all passing through the origin (and touching the <span class="chem">y</span>-axis there).</p><p>(c) <span class="chem">((y^2 - x^2)/(2xy)) × (2xy/(x^2 - y^2)) = -1</span>, so the tangents are perpendicular.</p><p>(d) <span class="chem">v + x(dv/dx) = 2v/(1 - v^2) => x(dv/dx) = (2v - v + v^3)/(1 - v^2) = v(1 + v^2)/(1 - v^2)</span>. So <span class="chem">int (1/v - 2v/(1 + v^2)) dv = int (1/x) dx => ln v - ln(1 + v^2) = ln x + c</span>, so <span class="chem">v/(1 + v^2) = Ax</span>. With <span class="chem">v = y/x</span>: <span class="chem">xy/(x^2 + y^2) = Ax</span>, so <span class="chem">x^2 + y^2 = Ky</span> with <span class="chem">K = 1/A</span>.</p><p>(e) <span class="chem">10 = 3C => C = 10/3</span>: <span class="chem">x^2 + y^2 = (10/3)x</span>. <span class="chem">10 = K</span>: <span class="chem">x^2 + y^2 = 10y</span>. Gradients at <span class="chem">(3, 1)</span>: <span class="chem">(1 - 9)/6 = -4/3</span> and <span class="chem">6/(9 - 1) = 3/4</span>; product <span class="chem">-1</span>.</p>
      answer: "",
      markscheme: [
        // EN: M1: substitutes <span class="chem">y = vx</span> and <span class="chem">dy/dx = v + x(dv/dx)</span>.
        "",
        // EN: A1: <span class="chem">x(dv/dx) = -(1 + v^2)/(2v)</span>.
        "",
        // EN: M1: separates: <span class="chem">int 2v/(1 + v^2) dv = -int (1/x) dx</span>.
        "",
        // EN: A1: <span class="chem">ln(1 + v^2) = -ln x + c</span>.
        "",
        // EN: A1: <span class="chem">1 + y^2/x^2 = C/x</span>. AG: <span class="chem">x^2 + y^2 = Cx</span>; the given line itself earns no mark.
        "",
        // EN: M1: completes the square: <span class="chem">(x - C/2)^2 + y^2 = (C/2)^2</span>.
        "",
        // EN: A1: circles, centre <span class="chem">(C/2, 0)</span>, radius <span class="chem">C/2</span> (through the origin).
        "",
        // EN: M1: multiplies the two gradient expressions.
        "",
        // EN: A1: product <span class="chem">= -1</span>, so the curves are perpendicular where they cross.
        "",
        // EN: M1: substitutes <span class="chem">y = vx</span> into the second DE.
        "",
        // EN: A1: <span class="chem">x(dv/dx) = v(1 + v^2)/(1 - v^2)</span>.
        "",
        // EN: M1: separates and uses the given partial fractions.
        "",
        // EN: A1: <span class="chem">ln v - ln(1 + v^2) = ln x + c</span>.
        "",
        // EN: M1: removes logarithms: <span class="chem">v/(1 + v^2) = Ax</span>.
        "",
        // EN: A1: substitutes <span class="chem">v = y/x</span> and simplifies to <span class="chem">xy/(x^2 + y^2) = Ax</span>. AG: <span class="chem">x^2 + y^2 = Ky</span>; the given line itself earns no mark.
        "",
        // EN: A1: <span class="chem">C = 10/3</span>.
        "",
        // EN: A1: <span class="chem">K = 10</span>.
        "",
        // EN: A1: gradients <span class="chem">-4/3</span> and <span class="chem">3/4</span>, product <span class="chem">-1</span>.
        "",
      ],
    },

    // ── t5-4-q059 · short · challenge · AHL · AHL 5.18 · 18 marks
    "t5-4-q059": {
      // EN: <p><strong>A family of linear differential equations.</strong> For each integer <span class="chem">n &gt;= 0</span>, let <span class="chem">y_n(x)</span> be the solution of <span class="chem">dy/dx + y = x^n</span> with <span class="chem">y(0) = 0</span>.</p><p>(a) Use an integrating factor to find <span class="chem">y_0(x)</span> and <span class="chem">y_1(x)</span>. <strong>[4 marks]</strong></p><p>(b) Show that <span class="chem">y_2(x) = x^2 - 2x + 2 - 2e^{-x}</span>. <strong>[3 marks]</strong></p><p>(c) By differentiating the equation <span class="chem">dy_n/dx + y_n = x^n</span>, show that, for <span class="chem">n &gt;= 1</span>, the function <span class="chem">z = (1/n)(dy_n/dx)</span> satisfies <span class="chem">dz/dx + z = x^{n - 1}</span> with <span class="chem">z(0) = 0</span>. Deduce that <span class="chem">dy_n/dx = n y_{n - 1}</span>, and verify this for <span class="chem">n = 2</span>. <strong>[3 marks]</strong></p><p>(d) Conjecture an expression for <span class="chem">y_3(x)</span>, and verify it by substituting into the differential equation. <strong>[4 marks]</strong></p><p>(e) Explain why <span class="chem">y_n(x) = e^{-x} int_0^x t^n e^t dt</span>. Use this and your GDC to find <span class="chem">y_3(1)</span>, and check that it agrees with your answer to (d). <strong>[2 marks]</strong></p><p>(f) Show that <span class="chem">0 &lt; y_n(1) &lt; 1/(n + 1)</span> for <span class="chem">n &gt;= 1</span>. <strong>[2 marks]</strong></p>
      stem: "",
      hints: [
        // EN: Decode: one method (integrating factor) for a whole family of DEs; the aim is to spot the pattern and prove it, not to solve each one from scratch.
        "",
        // EN: The integrating factor is always <span class="chem">e^x</span>. For (d), use <span class="chem">y_3' = 3y_2</span> from (c): integrate <span class="chem">3y_2</span> and choose the constant so that <span class="chem">y_3(0) = 0</span>.
        "",
        // EN: For (f), compare <span class="chem">t^n e^t</span> with <span class="chem">t^n e</span> on <span class="chem">0 &lt; t &lt; 1</span>.
        "",
      ],
      // EN: <p>(a) IF <span class="chem">e^x</span>: <span class="chem">d/dx(y e^x) = x^n e^x</span>. For <span class="chem">n = 0</span>: <span class="chem">y e^x = e^x + C</span>, <span class="chem">C = -1</span>, so <span class="chem">y_0 = 1 - e^{-x}</span>. For <span class="chem">n = 1</span>: by parts <span class="chem">int x e^x dx = (x - 1)e^x + C</span>, <span class="chem">C = 1</span>, so <span class="chem">y_1 = x - 1 + e^{-x}</span>.</p><p>(b) <span class="chem">int x^2 e^x dx = x^2 e^x - 2 int x e^x dx = (x^2 - 2x + 2)e^x + C</span>; <span class="chem">y(0) = 0 => C = -2</span>, so <span class="chem">y_2 = x^2 - 2x + 2 - 2e^{-x}</span>.</p><p>(c) Differentiating: <span class="chem">y_n'' + y_n' = n x^{n - 1}</span>; dividing by <span class="chem">n</span>: <span class="chem">z' + z = x^{n - 1}</span>. From the DE at <span class="chem">x = 0</span>: <span class="chem">y_n'(0) = 0^n - y_n(0) = 0</span> for <span class="chem">n &gt;= 1</span>, so <span class="chem">z(0) = 0</span>. Then <span class="chem">z</span> solves the same initial value problem as <span class="chem">y_{n - 1}</span>, so <span class="chem">z = y_{n - 1}</span> and <span class="chem">y_n' = n y_{n - 1}</span>. Check: <span class="chem">y_2' = 2x - 2 + 2e^{-x} = 2y_1</span>.</p><p>(d) Pattern: <span class="chem">y_3 = x^3 - 3x^2 + 6x - 6 + 6e^{-x}</span>. Then <span class="chem">y_3' = 3x^2 - 6x + 6 - 6e^{-x}</span>, and <span class="chem">y_3' + y_3 = x^3</span>; <span class="chem">y_3(0) = -6 + 6 = 0</span>. (Also <span class="chem">y_3' = 3y_2</span>.)</p><p>(e) Multiplying by the IF <span class="chem">e^x</span> and integrating <span class="chem">d/dt(y e^t) = t^n e^t</span> from 0 to <span class="chem">x</span> with <span class="chem">y(0) = 0</span> gives <span class="chem">y_n(x) e^x = int_0^x t^n e^t dt</span>. GDC: <span class="chem">e^{-1} int_0^1 t^3 e^t dt = 0.207277</span>, and (d) gives <span class="chem">y_3(1) = 1 - 3 + 6 - 6 + 6e^{-1} = 6/e - 2 = 0.207277</span>.</p><p>(f) On <span class="chem">0 &lt; t &lt; 1</span>, <span class="chem">0 &lt; t^n e^t &lt; e t^n</span>. So <span class="chem">0 &lt; y_n(1) = e^{-1} int_0^1 t^n e^t dt &lt; e^{-1} × e int_0^1 t^n dt = 1/(n + 1)</span>.</p>
      answer: "",
      markscheme: [
        // EN: M1: integrating factor <span class="chem">e^x</span>: <span class="chem">d/dx(y e^x) = x^n e^x</span>.
        "",
        // EN: A1: <span class="chem">y_0 = 1 - e^{-x}</span>.
        "",
        // EN: M1: integration by parts for <span class="chem">int x e^x dx</span>.
        "",
        // EN: A1: <span class="chem">y_1 = x - 1 + e^{-x}</span>.
        "",
        // EN: M1: integration by parts on <span class="chem">int x^2 e^x dx</span>.
        "",
        // EN: A1: <span class="chem">int x^2 e^x dx = (x^2 - 2x + 2)e^x + C</span>.
        "",
        // EN: A1: <span class="chem">C = -2</span>. AG: <span class="chem">y_2 = x^2 - 2x + 2 - 2e^{-x}</span>; the given line itself earns no mark.
        "",
        // EN: M1: differentiates the DE and divides by <span class="chem">n</span>.
        "",
        // EN: R1: <span class="chem">z(0) = (1/n)(0^n - y_n(0)) = 0</span>, so <span class="chem">z</span> and <span class="chem">y_{n - 1}</span> solve the same initial value problem.
        "",
        // EN: A1: verifies <span class="chem">y_2' = 2x - 2 + 2e^{-x} = 2y_1</span>.
        "",
        // EN: A1: conjecture <span class="chem">y_3 = x^3 - 3x^2 + 6x - 6 + 6e^{-x}</span>.
        "",
        // EN: M1: differentiates the conjecture.
        "",
        // EN: A1: shows <span class="chem">y_3' + y_3 = x^3</span>.
        "",
        // EN: A1: checks <span class="chem">y_3(0) = 0</span>.
        "",
        // EN: R1: integrating <span class="chem">d/dt(y e^t) = t^n e^t</span> from 0 to <span class="chem">x</span> with <span class="chem">y(0) = 0</span>.
        "",
        // EN: A1: <span class="chem">y_3(1) = 0.207277</span> from both methods (<span class="chem">6/e - 2</span>).
        "",
        // EN: M1: uses <span class="chem">0 &lt; e^t &lt; e</span> on <span class="chem">(0, 1)</span>.
        "",
        // EN: A1: <span class="chem">int_0^1 t^n dt = 1/(n + 1)</span>, giving the bounds.
        "",
      ],
    },

  }
});
