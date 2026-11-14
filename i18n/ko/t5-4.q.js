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

    // ── t5-4-q003 · mcq · foundation · AHL · AHL 5.18 · 3 marks
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
      // EN: <p>Find the exact coefficient of <span class="chem">x^3</span> in the Maclaurin series expansion of <span class="chem">f(x) = sin(2x)</span>. (You can enter an exact fraction like <span class="mono">-4/3</span>.)</p>
      stem: "<p><span class=\"chem\">f(x) = sin(2x)</span>의 매클로린 급수 전개에서 <span class=\"chem\">x^3</span>의 정확한 계수를 구하시오 (Find). (<span class=\"mono\">-4/3</span> 같은 정확한 분수로 입력할 수 있어요.)</p>",
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

    // ── t5-4-q010 · mcq · exam · AHL · AHL 5.19 · 3 marks
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
      // EN: <p>Find the exact coefficient of <span class="chem">x^3</span> in the Maclaurin series expansion of <span class="chem">g(x) = e^{2x} sin(x)</span>. (You can enter an exact fraction like <span class="mono">11/6</span>.)</p>
      stem: "<p><span class=\"chem\">g(x) = e^{2x} sin(x)</span>의 매클로린 급수 전개에서 <span class=\"chem\">x^3</span>의 정확한 계수를 구하시오 (Find). (<span class=\"mono\">11/6</span> 같은 정확한 분수로 입력할 수 있어요.)</p>",
      hints: [
        // EN: Write <span class="chem">e^{2x} = 1 + 2x + 2x^2 + (4/3)x^3 + ...</span> and <span class="chem">sin x = x - x^3/6 + ...</span>.
        "<span class=\"chem\">e^{2x} = 1 + 2x + 2x^2 + (4/3)x^3 + ...</span>와 <span class=\"chem\">sin x = x - x^3/6 + ...</span>를 적으세요.",
        // EN: Multiply the two polynomials and collect all terms that give <span class="chem">x^3</span>.
        "두 다항식을 곱하고 <span class=\"chem\">x^3</span>이 나오는 항을 모두 모으세요.",
      ],
      // EN: <p><span class="chem">e^{2x} sin x = (1 + 2x + 2x^2 + ...)(x - x^3/6 + ...)</span>. The <span class="chem">x^3</span> coefficient is <span class="chem">1(-1/6) + 2(1) = 11/6 ≈ 1.83</span>.</p>
      solution: "<p><span class=\"chem\">e^{2x} sin x = (1 + 2x + 2x^2 + ...)(x - x^3/6 + ...)</span>이에요. <span class=\"chem\">x^3</span>의 계수는 <span class=\"chem\">1(-1/6) + 2(1) = 11/6 ≈ 1.83</span>이에요.</p>",
    },

    // ── t5-4-q013 · mcq · exam · AHL · AHL 5.19 · 3 marks
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
        // EN: M1 A1: computes <span class="chem">I(x) = e^{-2 ln x} = x^{-2}</span> (or <span class="chem">1/x^2</span>).
        "M1 A1: <span class=\"chem\">I(x) = e^{-2 ln x} = x^{-2}</span> (또는 <span class=\"chem\">1/x^2</span>)를 구함.",
        // EN: M1: writes <span class="chem">d/dx(x^{-2} y) = cos x</span>.
        "M1: <span class=\"chem\">d/dx(x^{-2} y) = cos x</span>로 정리함.",
        // EN: A1: integrates to <span class="chem">x^{-2} y = sin x + C</span> (must include <span class="chem">+ C</span>).
        "A1: 적분해 <span class=\"chem\">x^{-2} y = sin x + C</span>를 얻음 (<span class=\"chem\">+ C</span> 필수).",
        // EN: M1 A1: substitutes <span class="chem">x = pi, y = 0</span> to find <span class="chem">C = 0</span> and concludes <span class="chem">y = x^2 sin x</span>.
        "M1 A1: <span class=\"chem\">x = pi, y = 0</span>을 대입해 <span class=\"chem\">C = 0</span>을 구하고 <span class=\"chem\">y = x^2 sin x</span>를 도출함.",
      ],
    },

    // ── t5-4-q015 · numeric · challenge · AHL · AHL 5.19 · 5 marks
    "t5-4-q015": {
      // EN: <p>Let <span class="chem">y(x)</span> be the solution to <span class="chem">dy/dx = y^2 - x</span> with <span class="chem">y(0) = 1</span>. Find the exact coefficient of <span class="chem">x^3</span> in the Maclaurin series expansion of <span class="chem">y(x)</span>. (You can enter an exact fraction like <span class="mono">2/3</span>.)</p>
      stem: "<p><span class=\"chem\">y(x)</span>가 <span class=\"chem\">y(0) = 1</span>을 만족하는 <span class=\"chem\">dy/dx = y^2 - x</span>의 해일 때, <span class=\"chem\">y(x)</span>의 매클로린 급수 전개에서 <span class=\"chem\">x^3</span>의 정확한 계수를 구하시오 (Find). (<span class=\"mono\">2/3</span> 같은 정확한 분수로 입력할 수 있어요.)</p>",
      hints: [
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
      // EN: <p>Solve the homogeneous differential equation <span class="chem">dy/dx = (x^2 + y^2) / (2xy)</span> (<span class="chem">x &gt; 0, y &gt; 0</span>) given <span class="chem">y(1) = 2</span>, and find the exact value of <span class="chem">y(4)</span>. (You can enter <span class="mono">2*sqrt(7)</span> or a 3 s.f. decimal.)</p>
      stem: "<p><span class=\"chem\">y(1) = 2</span>일 때 동차 미분방정식 <span class=\"chem\">dy/dx = (x^2 + y^2) / (2xy)</span> (<span class=\"chem\">x &gt; 0, y &gt; 0</span>)을 풀고, <span class=\"chem\">y(4)</span>의 정확한 값을 구하시오 (Find). (<span class=\"mono\">2*sqrt(7)</span> 또는 유효숫자 3자리(3 s.f.) 소수로 입력할 수 있어요.)</p>",
      hints: [
        // EN: Substitute <span class="chem">y = vx</span>: <span class="chem">v + x(dv/dx) = (1 + v^2)/(2v) => x(dv/dx) = (1 - v^2)/(2v)</span>.
        "<span class=\"chem\">y = vx</span>를 대입하세요: <span class=\"chem\">v + x(dv/dx) = (1 + v^2)/(2v) => x(dv/dx) = (1 - v^2)/(2v)</span>.",
        // EN: Separate variables: <span class="chem">int 2v / (1 - v^2) dv = int (1/x) dx => -ln|1 - v^2| = ln x + C</span>.
        "변수를 분리하세요: <span class=\"chem\">int 2v / (1 - v^2) dv = int (1/x) dx => -ln|1 - v^2| = ln x + C</span>.",
      ],
      // EN: <p>Setting <span class="chem">y = vx</span> gives <span class="chem">x(dv/dx) = (1 - v^2)/(2v)</span>, so <span class="chem">int 2v/(v^2 - 1) dv = int (-1/x) dx => ln|v^2 - 1| = -ln x + C => v^2 - 1 = A/x</span>. At <span class="chem">(1, 2)</span>, <span class="chem">v = 2 => A = 3</span>, giving <span class="chem">y^2 = x^2 + 3x</span>. Hence <span class="chem">y(4) = sqrt(16 + 12) = 2 sqrt(7) ≈ 5.29</span>.</p>
      solution: "<p><span class=\"chem\">y = vx</span>로 놓으면 <span class=\"chem\">x(dv/dx) = (1 - v^2)/(2v)</span>이므로 <span class=\"chem\">int 2v/(v^2 - 1) dv = int (-1/x) dx => ln|v^2 - 1| = -ln x + C => v^2 - 1 = A/x</span>예요. <span class=\"chem\">(1, 2)</span>에서 <span class=\"chem\">v = 2 => A = 3</span>이므로 <span class=\"chem\">y^2 = x^2 + 3x</span>가 돼요. 따라서 <span class=\"chem\">y(4) = sqrt(16 + 12) = 2 sqrt(7) ≈ 5.29</span>예요.</p>",
    },

    // ── t5-4-q017 · mcq · challenge · AHL · AHL 5.19 · 5 marks
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
        // EN: In part (a), integrating <span class="chem">d/dt(y(t) e^{t^2}) = e^{t^2}</span> from <span class="chem">t = 0</span> to <span class="chem">t = x</span> immediately incorporates <span class="chem">y(0) = 0</span>.
        "(a)에서는 <span class=\"chem\">d/dt(y(t) e^{t^2}) = e^{t^2}</span>을 <span class=\"chem\">t = 0</span>부터 <span class=\"chem\">t = x</span>까지 정적분하면 <span class=\"chem\">y(0) = 0</span> 조건이 바로 반영돼요.",
        // EN: In part (b), you can either integrate the series for <span class="chem">e^{t^2}</span> and multiply by <span class="chem">e^{-x^2}</span>, or differentiate <span class="chem">y' = 1 - 2xy</span> repeatedly at <span class="chem">x = 0</span>.
        "(b)에서는 <span class=\"chem\">e^{t^2}</span>의 급수를 적분한 뒤 <span class=\"chem\">e^{-x^2}</span>을 곱하거나, <span class=\"chem\">y' = 1 - 2xy</span>를 <span class=\"chem\">x = 0</span>에서 반복 미분하면 돼요.",
      ],
      // EN: <p>(a) The integrating factor is <span class="chem">I(x) = e^{int 2x dx} = e^{x^2}</span>. Multiplying gives <span class="chem">d/dx(y e^{x^2}) = e^{x^2}</span>. Integrating from <span class="chem">0</span> to <span class="chem">x</span> using <span class="chem">y(0) = 0</span> gives <span class="chem">y(x) e^{x^2} = int_0^x e^{t^2} dt => y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>.</p><p>(b) <span class="chem">int_0^x e^{t^2} dt = int_0^x (1 + t^2 + t^4/2 + ...) dt = x + x^3/3 + x^5/10 + ...</span>. Multiplying by <span class="chem">e^{-x^2} = 1 - x^2 + x^4/2 - ...</span> gives <span class="chem">y(x) = x + (1/3 - 1)x^3 + (1/10 - 1/3 + 1/2)x^5 + ... = x - (2/3)x^3 + (4/15)x^5 + ...</span>.</p>
      answer: "<p>(a) 적분인자는 <span class=\"chem\">I(x) = e^{int 2x dx} = e^{x^2}</span>이에요. 양변에 곱하면 <span class=\"chem\">d/dx(y e^{x^2}) = e^{x^2}</span>이고, <span class=\"chem\">y(0) = 0</span>을 이용해 <span class=\"chem\">0</span>에서 <span class=\"chem\">x</span>까지 적분하면 <span class=\"chem\">y(x) e^{x^2} = int_0^x e^{t^2} dt => y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>가 돼요.</p><p>(b) <span class=\"chem\">int_0^x e^{t^2} dt = int_0^x (1 + t^2 + t^4/2 + ...) dt = x + x^3/3 + x^5/10 + ...</span>이에요. 여기에 <span class=\"chem\">e^{-x^2} = 1 - x^2 + x^4/2 - ...</span>을 곱하면 <span class=\"chem\">y(x) = x + (1/3 - 1)x^3 + (1/10 - 1/3 + 1/2)x^5 + ... = x - (2/3)x^3 + (4/15)x^5 + ...</span>예요.</p>",
      markscheme: [
        // EN: M1 A1: computes integrating factor <span class="chem">I(x) = e^{x^2}</span> and writes <span class="chem">d/dx(y e^{x^2}) = e^{x^2}</span>.
        "M1 A1: 적분인자 <span class=\"chem\">I(x) = e^{x^2}</span>을 구하고 <span class=\"chem\">d/dx(y e^{x^2}) = e^{x^2}</span>로 씀.",
        // EN: A1: integrates from <span class="chem">0</span> to <span class="chem">x</span> using <span class="chem">y(0) = 0</span> to obtain the given integral expression (AG).
        "A1: <span class=\"chem\">y(0) = 0</span>을 이용해 <span class=\"chem\">0</span>에서 <span class=\"chem\">x</span>까지 적분하여 주어진 적분 식을 유도함 (AG).",
        // EN: M1: expands <span class="chem">e^{t^2} = 1 + t^2 + t^4/2 + ...</span> and integrates term by term to <span class="chem">x + x^3/3 + x^5/10</span> (or differentiates DE implicitly up to <span class="chem">y^{(5)}(0)</span>).
        "M1: <span class=\"chem\">e^{t^2} = 1 + t^2 + t^4/2 + ...</span>을 전개해 항별로 적분하여 <span class=\"chem\">x + x^3/3 + x^5/10</span>을 얻음 (또는 미분방정식을 <span class=\"chem\">y^{(5)}(0)</span>까지 음함수 미분함).",
        // EN: M1: multiplies by <span class="chem">e^{-x^2} = 1 - x^2 + x^4/2 - ...</span> (or substitutes derivatives into Maclaurin formula).
        "M1: <span class=\"chem\">e^{-x^2} = 1 - x^2 + x^4/2 - ...</span>을 곱함 (또는 도함수 값을 매클로린 공식에 대입함).",
        // EN: A1 A1 A1: obtains <span class="chem">x - (2/3)x^3 + (4/15)x^5</span>.
        "A1 A1 A1: <span class=\"chem\">x - (2/3)x^3 + (4/15)x^5</span>를 정확히 구함.",
      ],
    },

  }
});
