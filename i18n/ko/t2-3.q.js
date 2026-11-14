/* t2-3.q — ko question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't2-3.q', {
  questions: {

    // ── t2-3-q001 · mcq · foundation · SL · SL 2.11 · 2 marks
    "t2-3-q001": {
      // EN: <p>The point <span class=\"chem\">P(4, -3)</span> lies on the graph of <span class=\"chem\">y = f(x)</span>. Find the coordinates of the image of <span class=\"chem\">P</span> on the graph of <span class=\"chem\">y = 2 f(x - 1) + 5</span>.</p>
      stem: "<p>점 <span class=\"chem\">P(4, -3)</span>이 <span class=\"chem\">y = f(x)</span>의 그래프 위에 있어요. <span class=\"chem\">y = 2 f(x - 1) + 5</span>의 그래프 위로 옮겨진 <span class=\"chem\">P</span>의 상의 좌표를 구하시오 (Find).</p>",
      options: [
        // EN: <span class=\"chem\">(5, -1)</span>
        "<span class=\"chem\">(5, -1)</span>",
        // EN: <span class=\"chem\">(3, -1)</span>
        "<span class=\"chem\">(3, -1)</span>",
        // EN: <span class=\"chem\">(5, -11)</span>
        "<span class=\"chem\">(5, -11)</span>",
        // EN: <span class=\"chem\">(8, 2)</span>
        "<span class=\"chem\">(8, 2)</span>",
      ],
      hints: [
        // EN: Horizontal shift <span class=\"chem\">f(x - 1)</span> adds <span class=\"chem\">1</span> to the <span class=\"chem\">x</span>-coordinate.
        "수평 평행이동 <span class=\"chem\">f(x - 1)</span>은 <span class=\"chem\">x</span>좌표에 <span class=\"chem\">1</span>을 더해요.",
        // EN: Vertical stretch and shift <span class=\"chem\">2y + 5</span> gives <span class=\"chem\">2(-3) + 5</span>.
        "수직 확대와 평행이동 <span class=\"chem\">2y + 5</span>는 <span class=\"chem\">2(-3) + 5</span>가 돼요.",
      ],
      // EN: <p>Using <span class=\"chem\">x_{new} = x_0 + 1 = 5</span> and <span class=\"chem\">y_{new} = 2y_0 + 5 = 2(-3) + 5 = -1</span>, the image is <span class=\"chem\">(5, -1)</span>.</p>
      solution: "<p><span class=\"chem\">x_{new} = x_0 + 1 = 5</span>이고 <span class=\"chem\">y_{new} = 2y_0 + 5 = 2(-3) + 5 = -1</span>이므로 상의 좌표는 <span class=\"chem\">(5, -1)</span>이에요.</p>",
      misconception: {
        // EN (option B): Inside f(x − 1), subtracting 1 shifts the graph 1 unit RIGHT (x_new = 4 + 1 = 5), not left.
        "1": "f(x − 1)에서 1을 빼는 것은 그래프를 왼쪽이 아니라 오른쪽으로 1만큼 이동(x_new = 4 + 1 = 5)시키는 거예요.",
        // EN (option C): You shifted down instead of up: 2(−3) − 5 = −11. The +5 in 2 f(x − 1) + 5 means up 5, giving 2(−3) + 5 = −1.
        "2": "위가 아니라 아래로 이동했어요: 2(−3) − 5 = −11. 2 f(x − 1) + 5의 +5는 위로 5만큼이라는 뜻이므로 2(−3) + 5 = −1이에요.",
        // EN (option D): The horizontal transformation is a translation by +1, not a stretch by 2.
        "3": "수평 변환은 2배 확대가 아니라 +1만큼 평행이동이에요.",
      },
    },

    // ── t2-3-q002 · numeric · foundation · SL · SL 2.11 · 2 marks
    "t2-3-q002": {
      // EN: <p>The point <span class=\"chem\">(-6, 5)</span> lies on <span class=\"chem\">y = f(x)</span>. Find the <span class=\"chem\">x</span>-coordinate of its image on the graph of <span class=\"chem\">y = -f(3x + 3) + 2</span>.</p>
      stem: "<p>점 <span class=\"chem\">(-6, 5)</span>가 <span class=\"chem\">y = f(x)</span> 위에 있어요. <span class=\"chem\">y = -f(3x + 3) + 2</span>의 그래프 위로 옮겨진 상의 <span class=\"chem\">x</span>좌표를 구하시오 (Find).</p>",
      hints: [
        // EN: Set the inside expression equal to the original <span class=\"chem\">x</span>-coordinate: <span class=\"chem\">3x_{new} + 3 = -6</span>.
        "괄호 안의 식을 원래 <span class=\"chem\">x</span>좌표와 같다고 놓으세요: <span class=\"chem\">3x_{new} + 3 = -6</span>.",
        // EN: Solve <span class=\"chem\">3x_{new} = -9</span> for <span class=\"chem\">x_{new}</span>.
        "<span class=\"chem\">3x_{new} = -9</span>를 <span class=\"chem\">x_{new}</span>에 관해 푸세요.",
      ],
      // EN: <p>Equating arguments gives <span class=\"chem\">3x_{new} + 3 = -6 => 3x_{new} = -9 => x_{new} = -3</span>. (Factoring <span class=\"chem\">3(x + 1)</span> also shows horizontal stretch by <span class=\"chem\">1/3</span> to <span class=\"chem\">-2</span>, then shift <span class=\"chem\">1</span> unit left to <span class=\"chem\">-3</span>.)</p>
      solution: "<p>괄호 안을 같다고 놓으면 <span class=\"chem\">3x_{new} + 3 = -6 => 3x_{new} = -9 => x_{new} = -3</span>이에요. (<span class=\"chem\">3(x + 1)</span>로 묶어 보면 <span class=\"chem\">1/3</span>배 수평 축소로 <span class=\"chem\">-2</span>가 된 뒤 왼쪽으로 <span class=\"chem\">1</span>만큼 이동해 <span class=\"chem\">-3</span>이 되는 것과 같아요.)</p>",
    },

    // ── t2-3-q003 · order · exam · SL · SL 2.11 · 4 marks
    "t2-3-q003": {
      // EN: <p>Arrange these transformations in order (top to bottom) to map <span class="chem">y = f(x)</span> onto <span class="chem">y = -3 f(2x - 8) + 1</span>. Use this convention: <strong>all horizontal transformations first, then the vertical ones</strong>, and in each direction the stretch (with any reflection) <strong>before</strong> the translation.</p>
      stem: "<p><span class=\"chem\">y = f(x)</span>를 <span class=\"chem\">y = -3 f(2x - 8) + 1</span>로 옮기는 순서대로 (위에서 아래로) 다음 변환을 배열하시오. 다음 규칙을 따르시오: <strong>수평 변환을 모두 먼저 하고 수직 변환은 그다음에</strong> 하며, 각 방향에서는 확대·축소(대칭 포함)를 평행이동보다 <strong>먼저</strong> 한다.</p>",
      options: [
        // EN: Horizontal stretch of scale factor <span class=\"chem\">1/2</span> parallel to the <span class=\"chem\">x</span>-axis
        "<span class=\"chem\">x</span>축과 나란한 방향으로 배율 <span class=\"chem\">1/2</span>의 수평 축소",
        // EN: Horizontal translation of <span class=\"chem\">4</span> units to the right
        "오른쪽으로 <span class=\"chem\">4</span>만큼 수평 평행이동",
        // EN: Vertical stretch of scale factor <span class=\"chem\">3</span> and reflection in the <span class=\"chem\">x</span>-axis
        "배율 <span class=\"chem\">3</span>의 수직 확대 및 <span class=\"chem\">x</span>축 대칭이동",
        // EN: Vertical translation of <span class=\"chem\">1</span> unit up
        "위로 <span class=\"chem\">1</span>만큼 수직 평행이동",
      ],
      hints: [
        // EN: Factor <span class=\"chem\">2</span> inside <span class=\"chem\">f</span> first: <span class=\"chem\">-3 f(2(x - 4)) + 1</span>.
        "먼저 <span class=\"chem\">f</span> 안에서 <span class=\"chem\">2</span>를 묶어 내세요: <span class=\"chem\">-3 f(2(x - 4)) + 1</span>.",
        // EN: In factored form, apply stretches/reflections before translations in each direction.
        "묶어 낸 꼴에서는 각 방향마다 확대·축소 및 대칭이동을 평행이동보다 먼저 적용하세요.",
      ],
      // EN: <p>Writing <span class="chem">y = -3 f(2(x - 4)) + 1</span>: horizontally stretch by <span class="chem">1/2</span> then translate <span class="chem">4</span> units right; vertically stretch by <span class="chem">3</span> with <span class="chem">x</span>-axis reflection then translate <span class="chem">1</span> unit up. (Horizontal and vertical steps do not affect each other, so in an exam other orders are also valid as long as, in each direction, the stretch comes before the translation; the convention in the question fixes one order.)</p>
      solution: "<p><span class=\"chem\">y = -3 f(2(x - 4)) + 1</span>로 쓰면: 수평으로 <span class=\"chem\">1/2</span>배 한 뒤 오른쪽으로 <span class=\"chem\">4</span>만큼 평행이동하고, 수직으로 <span class=\"chem\">3</span>배 하며 <span class=\"chem\">x</span>축 대칭한 뒤 위로 <span class=\"chem\">1</span>만큼 평행이동해요. (수평 단계와 수직 단계는 서로 영향을 주지 않으므로, 시험에서는 각 방향에서 확대·축소가 평행이동보다 먼저이기만 하면 다른 순서도 맞아요. 문제의 규칙은 순서를 하나로 정하기 위한 것이에요.)</p>",
    },

    // ── t2-3-q004 · mcq · foundation · AHL · AHL 2.12 · 2 marks
    "t2-3-q004": {
      // EN: <p>Find the remainder when <span class=\"chem\">P(x) = 2x^3 - 3x^2 + 4x - 5</span> is divided by <span class=\"chem\">(2x - 1)</span>.</p>
      stem: "<p><span class=\"chem\">P(x) = 2x^3 - 3x^2 + 4x - 5</span>를 <span class=\"chem\">(2x - 1)</span>로 나눈 나머지를 구하시오 (Find).</p>",
      options: [
        // EN: <span class=\"chem\">-7/2</span>
        "<span class=\"chem\">-7/2</span>",
        // EN: <span class=\"chem\">-2</span>
        "<span class=\"chem\">-2</span>",
        // EN: <span class=\"chem\">-8</span>
        "<span class=\"chem\">-8</span>",
        // EN: <span class=\"chem\">-5/2</span>
        "<span class=\"chem\">-5/2</span>",
      ],
      hints: [
        // EN: By the Remainder Theorem, the remainder when dividing by <span class=\"chem\">(2x - 1)</span> is <span class=\"chem\">P(1/2)</span>.
        "나머지정리에 의해 <span class=\"chem\">(2x - 1)</span>로 나눈 나머지는 <span class=\"chem\">P(1/2)</span>예요.",
        // EN: Compute <span class=\"chem\">2(1/8) - 3(1/4) + 4(1/2) - 5</span>.
        "<span class=\"chem\">2(1/8) - 3(1/4) + 4(1/2) - 5</span>를 계산하세요.",
      ],
      // EN: <p><span class=\"chem\">P(1/2) = 2(1/8) - 3(1/4) + 4(1/2) - 5 = 1/4 - 3/4 + 2 - 5 = -1/2 - 3 = -7/2</span>.</p>
      solution: "<p><span class=\"chem\">P(1/2) = 2(1/8) - 3(1/4) + 4(1/2) - 5 = 1/4 - 3/4 + 2 - 5 = -1/2 - 3 = -7/2</span>예요.</p>",
      misconception: {
        // EN (option B): You evaluated P(1) = 2 − 3 + 4 − 5 = −2 instead of P(1/2).
        "1": "P(1/2) 대신 P(1) = 2 − 3 + 4 − 5 = −2를 계산했어요.",
        // EN (option C): You evaluated P(−1/2) = −1/4 − 3/4 − 2 − 5 = −8 instead of P(1/2). The root of 2x − 1 = 0 is x = +1/2.
        "2": "P(1/2) 대신 P(−1/2) = −1/4 − 3/4 − 2 − 5 = −8을 계산했어요. 2x − 1 = 0의 근은 x = +1/2이에요.",
        // EN (option D): Sign slip: 1/4 − 3/4 = −1/2, not +1/2. With +1/2 you get 1/2 − 3 = −5/2 instead of −1/2 − 3 = −7/2.
        "3": "부호 실수예요: 1/4 − 3/4 = −1/2이고 +1/2가 아니에요. +1/2로 하면 1/2 − 3 = −5/2가 되지만, 올바르게는 −1/2 − 3 = −7/2예요.",
      },
    },

    // ── t2-3-q005 · numeric · exam · AHL · AHL 2.12 · 3 marks
    "t2-3-q005": {
      // EN: <p>The polynomial <span class=\"chem\">P(x) = x^3 + kx^2 - 5x + 6</span> is divisible by <span class=\"chem\">(x - 3)</span>. Find the exact value of <span class=\"chem\">k</span>.</p>
      stem: "<p>다항식 <span class=\"chem\">P(x) = x^3 + kx^2 - 5x + 6</span>이 <span class=\"chem\">(x - 3)</span>으로 나누어떨어져요. <span class=\"chem\">k</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: By the Factor Theorem, <span class=\"chem\">P(3) = 0</span>.
        "인수정리에 의해 <span class=\"chem\">P(3) = 0</span>이에요.",
        // EN: Substitute <span class=\"chem\">x = 3</span>: <span class=\"chem\">27 + 9k - 15 + 6 = 0</span>.
        "<span class=\"chem\">x = 3</span>을 대입하세요: <span class=\"chem\">27 + 9k - 15 + 6 = 0</span>.",
      ],
      // EN: <p>Setting <span class=\"chem\">P(3) = 0</span> gives <span class=\"chem\">3^3 + k(3)^2 - 5(3) + 6 = 0 => 27 + 9k - 15 + 6 = 0 => 9k + 18 = 0 => k = -2</span>.</p>
      solution: "<p><span class=\"chem\">P(3) = 0</span>으로 놓으면 <span class=\"chem\">3^3 + k(3)^2 - 5(3) + 6 = 0 => 27 + 9k - 15 + 6 = 0 => 9k + 18 = 0 => k = -2</span>예요.</p>",
    },

    // ── t2-3-q006 · mcq · exam · AHL · AHL 2.12 · 2 marks
    "t2-3-q006": {
      // EN: <p>The cubic equation <span class=\"chem\">3x^3 - 6x^2 + 4x + 9 = 0</span> has roots <span class=\"chem\">alpha, beta, gamma</span>. Find the value of <span class=\"chem\">alpha beta gamma</span>.</p>
      stem: "<p>삼차방정식 <span class=\"chem\">3x^3 - 6x^2 + 4x + 9 = 0</span>의 세 근이 <span class=\"chem\">alpha, beta, gamma</span>예요. <span class=\"chem\">alpha beta gamma</span>의 값을 구하시오 (Find).</p>",
      options: [
        // EN: <span class=\"chem\">-3</span>
        "<span class=\"chem\">-3</span>",
        // EN: <span class=\"chem\">3</span>
        "<span class=\"chem\">3</span>",
        // EN: <span class=\"chem\">2</span>
        "<span class=\"chem\">2</span>",
        // EN: <span class=\"chem\">4/3</span>
        "<span class=\"chem\">4/3</span>",
      ],
      hints: [
        // EN: Use Vieta's formula for the product of roots: <span class=\"chem\">(-1)^n a_0 / a_n</span>.
        "근과 계수의 관계에서 세 근의 곱 공식을 쓰세요: <span class=\"chem\">(-1)^n a_0 / a_n</span>.",
        // EN: Here <span class=\"chem\">n = 3</span>, <span class=\"chem\">a_0 = 9</span>, and <span class=\"chem\">a_3 = 3</span>.
        "여기서 <span class=\"chem\">n = 3</span>, <span class=\"chem\">a_0 = 9</span>, <span class=\"chem\">a_3 = 3</span>이에요.",
      ],
      // EN: <p>With <span class=\"chem\">n = 3</span>, <span class=\"chem\">alpha beta gamma = (-1)^3 (9 / 3) = -3</span>.</p>
      solution: "<p><span class=\"chem\">n = 3</span>이므로 <span class=\"chem\">alpha beta gamma = (-1)^3 (9 / 3) = -3</span>이에요.</p>",
      misconception: {
        // EN (option B): For an odd-degree polynomial (n = 3), the product of roots is (−1)³ a₀/a₃ = −9/3 = −3, not +3.
        "1": "홀수 차수 다항식(n = 3)에서 근의 곱은 (−1)³ a₀/a₃ = −9/3 = −3이에요 (+3이 아니에요).",
        // EN (option C): 2 is the sum of the roots α + β + γ = −(−6)/3, not the product.
        "2": "2는 세 근의 곱이 아니라 세 근의 합 α + β + γ = −(−6)/3이에요.",
        // EN (option D): 4/3 is the pairwise product sum αβ + βγ + γα = a₁/a₃.
        "3": "4/3은 두 근끼리의 곱의 합 αβ + βγ + γα = a₁/a₃이에요.",
      },
    },

    // ── t2-3-q007 · numeric · exam · AHL · AHL 2.12 · 3 marks
    "t2-3-q007": {
      // EN: <p>The quadratic equation <span class=\"chem\">2x^2 - 8x + 5 = 0</span> has roots <span class=\"chem\">alpha</span> and <span class=\"chem\">beta</span>. Without solving the equation, find the exact value of <span class=\"chem\">alpha^2 + beta^2</span>.</p>
      stem: "<p>이차방정식 <span class=\"chem\">2x^2 - 8x + 5 = 0</span>의 두 근이 <span class=\"chem\">alpha</span>와 <span class=\"chem\">beta</span>예요. 방정식을 직접 풀지 않고 <span class=\"chem\">alpha^2 + beta^2</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Find <span class=\"chem\">alpha + beta = -b/a = 4</span> and <span class=\"chem\">alpha beta = c/a = 5/2</span>.
        "<span class=\"chem\">alpha + beta = -b/a = 4</span>와 <span class=\"chem\">alpha beta = c/a = 5/2</span>를 구하세요.",
        // EN: Use the identity <span class=\"chem\">alpha^2 + beta^2 = (alpha + beta)^2 - 2 alpha beta</span>.
        "항등식 <span class=\"chem\">alpha^2 + beta^2 = (alpha + beta)^2 - 2 alpha beta</span>를 이용하세요.",
      ],
      // EN: <p>From Vieta's formulas, <span class=\"chem\">alpha + beta = 8/2 = 4</span> and <span class=\"chem\">alpha beta = 5/2</span>. Therefore <span class=\"chem\">alpha^2 + beta^2 = 4^2 - 2(5/2) = 16 - 5 = 11</span>.</p>
      solution: "<p>근과 계수의 관계에서 <span class=\"chem\">alpha + beta = 8/2 = 4</span>이고 <span class=\"chem\">alpha beta = 5/2</span>예요. 따라서 <span class=\"chem\">alpha^2 + beta^2 = 4^2 - 2(5/2) = 16 - 5 = 11</span>이에요.</p>",
    },

    // ── t2-3-q008 · short · challenge · AHL · AHL 2.12 · 5 marks
    "t2-3-q008": {
      // EN: <p>When a polynomial <span class=\"chem\">P(x)</span> is divided by <span class=\"chem\">(x - 1)</span>, the remainder is <span class=\"chem\">4</span>. When <span class=\"chem\">P(x)</span> is divided by <span class=\"chem\">(x + 2)</span>, the remainder is <span class=\"chem\">-5</span>. Find the remainder when <span class=\"chem\">P(x)</span> is divided by <span class=\"chem\">(x - 1)(x + 2)</span>.</p>
      stem: "<p>다항식 <span class=\"chem\">P(x)</span>를 <span class=\"chem\">(x - 1)</span>로 나눈 나머지는 <span class=\"chem\">4</span>이고, <span class=\"chem\">P(x)</span>를 <span class=\"chem\">(x + 2)</span>로 나눈 나머지는 <span class=\"chem\">-5</span>이다. <span class=\"chem\">P(x)</span>를 <span class=\"chem\">(x - 1)(x + 2)</span>로 나눈 나머지를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: "the remainder when divided by <span class="chem">(x - 1)(x + 2)</span>" means the remainder has degree less than 2, so write it as <span class="chem">ax + b</span>; the two given remainders are two equations for <span class="chem">a</span> and <span class="chem">b</span>.
        "해석: \"<span class=\"chem\">(x - 1)(x + 2)</span>로 나눈 나머지\"는 차수가 2보다 작으므로 <span class=\"chem\">ax + b</span>로 놓습니다. 주어진 두 나머지가 <span class=\"chem\">a</span>와 <span class=\"chem\">b</span>에 대한 두 방정식이 됩니다.",
        // EN: Since the divisor <span class=\"chem\">(x - 1)(x + 2)</span> has degree <span class=\"chem\">2</span>, the remainder has the linear form <span class=\"chem\">ax + b</span>.
        "나누는 식 <span class=\"chem\">(x - 1)(x + 2)</span>가 <span class=\"chem\">2</span>차식이므로 나머지는 일차식 <span class=\"chem\">ax + b</span> 꼴이에요.",
        // EN: Substitute <span class=\"chem\">x = 1</span> and <span class=\"chem\">x = -2</span> into <span class=\"chem\">P(x) = Q(x)(x - 1)(x + 2) + ax + b</span>.
        "<span class=\"chem\">P(x) = Q(x)(x - 1)(x + 2) + ax + b</span>에 <span class=\"chem\">x = 1</span>과 <span class=\"chem\">x = -2</span>를 대입하세요.",
      ],
      // EN: <p>Let <span class=\"chem\">P(x) = Q(x)(x - 1)(x + 2) + ax + b</span>. Then <span class=\"chem\">P(1) = a + b = 4</span> and <span class=\"chem\">P(-2) = -2a + b = -5</span>. Subtracting gives <span class=\"chem\">3a = 9 => a = 3</span>, so <span class=\"chem\">b = 1</span>. The remainder is <span class=\"chem\">3x + 1</span>.</p>
      solution: "<p><span class=\"chem\">P(x) = Q(x)(x - 1)(x + 2) + ax + b</span>라 하면, <span class=\"chem\">P(1) = a + b = 4</span>이고 <span class=\"chem\">P(-2) = -2a + b = -5</span>예요. 두 식을 빼면 <span class=\"chem\">3a = 9 => a = 3</span>이므로 <span class=\"chem\">b = 1</span>이에요. 따라서 나머지는 <span class=\"chem\">3x + 1</span>이에요.</p>",
      // EN: <p><span class="chem">3x + 1</span></p>
      answer: "<p><span class=\"chem\">3x + 1</span></p>",
      markscheme: [
        // EN: M1: Write P(x) = Q(x)(x − 1)(x + 2) + ax + b (recognising remainder has degree ≤ 1).
        "M1: P(x) = Q(x)(x − 1)(x + 2) + ax + b로 둠 (나머지의 차수가 ≤ 1임을 인식함).",
        // EN: A1: Apply Remainder Theorem: P(1) = a + b = 4.
        "A1: 나머지정리를 적용하여 P(1) = a + b = 4를 세움.",
        // EN: A1: Apply Remainder Theorem: P(−2) = −2a + b = −5.
        "A1: 나머지정리를 적용하여 P(−2) = −2a + b = −5를 세움.",
        // EN: M1: Solve the simultaneous linear equations (subtract to get 3a = 9).
        "M1: 연립일차방정식을 묾 (두 식을 빼서 3a = 9를 얻음).",
        // EN: A1: Obtain a = 3, b = 1, so the remainder is 3x + 1.
        "A1: a = 3, b = 1을 구하여 나머지가 3x + 1임을 답함.",
      ],
    },

    // ── t2-3-q009 · mcq · foundation · AHL · AHL 2.13 · 2 marks
    "t2-3-q009": {
      // EN: <p>Find the equation of the oblique asymptote of the rational function <span class=\"chem\">f(x) = (3x^2 + 5x - 1)/(x + 2)</span>.</p>
      stem: "<p>유리함수 <span class=\"chem\">f(x) = (3x^2 + 5x - 1)/(x + 2)</span>의 사선점근선의 방정식을 구하시오 (Find).</p>",
      options: [
        // EN: <span class=\"chem\">y = 3x - 1</span>
        "<span class=\"chem\">y = 3x - 1</span>",
        // EN: <span class=\"chem\">y = 3x + 11</span>
        "<span class=\"chem\">y = 3x + 11</span>",
        // EN: <span class=\"chem\">y = 3x + 5</span>
        "<span class=\"chem\">y = 3x + 5</span>",
        // EN: <span class=\"chem\">y = 3</span>
        "<span class=\"chem\">y = 3</span>",
      ],
      hints: [
        // EN: Divide <span class=\"chem\">3x^2 + 5x - 1</span> by <span class=\"chem\">(x + 2)</span>.
        "<span class=\"chem\">3x^2 + 5x - 1</span>을 <span class=\"chem\">(x + 2)</span>로 나누세요.",
        // EN: <span class=\"chem\">3x^2 + 5x - 1 = (3x - 1)(x + 2) + 1</span>.
        "<span class=\"chem\">3x^2 + 5x - 1 = (3x - 1)(x + 2) + 1</span>이에요.",
      ],
      // EN: <p>Dividing gives <span class=\"chem\">f(x) = 3x - 1 + 1/(x + 2)</span>. As <span class=\"chem\">x -&gt; +-infty</span>, <span class=\"chem\">1/(x + 2) -&gt; 0</span>, so the oblique asymptote is <span class=\"chem\">y = 3x - 1</span>.</p>
      solution: "<p>나눗셈을 하면 <span class=\"chem\">f(x) = 3x - 1 + 1/(x + 2)</span>예요. <span class=\"chem\">x -&gt; +-infty</span>일 때 <span class=\"chem\">1/(x + 2) -&gt; 0</span>이므로 사선점근선은 <span class=\"chem\">y = 3x - 1</span>이에요.</p>",
      misconception: {
        // EN (option B): You divided using x = +2 instead of the root x = −2 of (x + 2): synthetic division then gives 5 + 6 = 11, so y = 3x + 11.
        "1": "(x + 2)의 근 x = −2 대신 x = +2로 나눴어요: 조립제법에서 5 + 6 = 11이 되어 y = 3x + 11이 나와요.",
        // EN (option C): You cannot read the oblique asymptote from the first two numerator coefficients without dividing by (x + 2).
        "2": "(x + 2)로 나누지 않고 분자의 앞 두 계수만 보고 사선점근선을 읽을 수 없어요.",
        // EN (option D): Because the numerator has degree 2 and the denominator has degree 1, there is an oblique asymptote, not a horizontal asymptote y = 3.
        "3": "분자가 2차이고 분모가 1차이므로 수평점근선 y = 3이 아니라 사선점근선이 생겨요.",
      },
    },

    // ── t2-3-q010 · multi · exam · AHL · AHL 2.13 · 4 marks
    "t2-3-q010": {
      // EN: <p>Consider <span class=\"chem\">f(x) = (2x - 4)/(x^2 - 9)</span> for <span class=\"chem\">x != +-3</span>. Select <strong>all</strong> true statements about the graph of <span class=\"chem\">f</span>.</p>
      stem: "<p><span class=\"chem\">x != +-3</span>에서 <span class=\"chem\">f(x) = (2x - 4)/(x^2 - 9)</span>를 생각하자. <span class=\"chem\">f</span>의 그래프에 대한 설명 중 <strong>옳은 것을 모두</strong> 고르시오.</p>",
      options: [
        // EN: The vertical asymptotes are <span class=\"chem\">x = 3</span> and <span class=\"chem\">x = -3</span>.
        "수직점근선은 <span class=\"chem\">x = 3</span>과 <span class=\"chem\">x = -3</span>이다.",
        // EN: The horizontal asymptote is <span class=\"chem\">y = 0</span>.
        "수평점근선은 <span class=\"chem\">y = 0</span>이다.",
        // EN: The horizontal asymptote is <span class=\"chem\">y = 2</span>.
        "수평점근선은 <span class=\"chem\">y = 2</span>이다.",
        // EN: The <span class=\"chem\">x</span>-intercept is at <span class=\"chem\">(2, 0)</span>.
        "<span class=\"chem\">x</span>절편은 <span class=\"chem\">(2, 0)</span>이다.",
      ],
      hints: [
        // EN: Set the denominator <span class=\"chem\">x^2 - 9 = 0</span> for vertical asymptotes.
        "수직점근선을 구하려면 분모 <span class=\"chem\">x^2 - 9 = 0</span>으로 놓으세요.",
        // EN: Since <span class=\"chem\">deg(num) = 1 &lt; deg(denom) = 2</span>, <span class=\"chem\">f(x) -&gt; 0</span> as <span class=\"chem\">x -&gt; +-infty</span>.
        "<span class=\"chem\">deg(num) = 1 &lt; deg(denom) = 2</span>이므로 <span class=\"chem\">x -&gt; +-infty</span>일 때 <span class=\"chem\">f(x) -&gt; 0</span>이에요.",
      ],
      // EN: <p>Denominator <span class=\"chem\">x^2 - 9 = 0</span> gives VAs <span class=\"chem\">x = +-3</span>. Since degree of numerator is less than degree of denominator, HA is <span class=\"chem\">y = 0</span> (not <span class=\"chem\">y = 2</span>). Setting <span class=\"chem\">2x - 4 = 0</span> gives <span class=\"chem\">x</span>-intercept <span class=\"chem\">(2, 0)</span>.</p>
      solution: "<p>분모 <span class=\"chem\">x^2 - 9 = 0</span>에서 수직점근선은 <span class=\"chem\">x = +-3</span>이에요. 분자의 차수가 분모의 차수보다 작으므로 수평점근선은 <span class=\"chem\">y = 0</span>이에요 (<span class=\"chem\">y = 2</span>가 아니에요). <span class=\"chem\">2x - 4 = 0</span>으로 놓으면 <span class=\"chem\">x</span>절편은 <span class=\"chem\">(2, 0)</span>이에요.</p>",
    },

    // ── t2-3-q011 · mcq · foundation · AHL · AHL 2.14 · 2 marks
    "t2-3-q011": {
      // EN: <p>Which of the following functions is an <strong>odd</strong> function?</p>
      stem: "<p>다음 중 <strong>홀함수(기함수)</strong>인 것은 무엇인가요?</p>",
      options: [
        // EN: <span class=\"chem\">f(x) = x^3 - 4x</span>
        "<span class=\"chem\">f(x) = x^3 - 4x</span>",
        // EN: <span class=\"chem\">g(x) = x^2 + cos x</span>
        "<span class=\"chem\">g(x) = x^2 + cos x</span>",
        // EN: <span class=\"chem\">h(x) = x^3 + 1</span>
        "<span class=\"chem\">h(x) = x^3 + 1</span>",
        // EN: <span class=\"chem\">p(x) = |x| - x</span>
        "<span class=\"chem\">p(x) = |x| - x</span>",
      ],
      hints: [
        // EN: A function is odd if <span class=\"chem\">f(-x) = -f(x)</span> for all <span class=\"chem\">x</span>.
        "모든 <span class=\"chem\">x</span>에 대해 <span class=\"chem\">f(-x) = -f(x)</span>이면 홀함수예요.",
        // EN: Test replacing <span class=\"chem\">x</span> with <span class=\"chem\">-x</span> in each option.
        "각 보기에서 <span class=\"chem\">x</span> 대신 <span class=\"chem\">-x</span>를 대입해 확인하세요.",
      ],
      // EN: <p><span class=\"chem\">f(-x) = (-x)^3 - 4(-x) = -x^3 + 4x = -(x^3 - 4x) = -f(x)</span>, so <span class=\"chem\">f</span> is odd.</p>
      solution: "<p><span class=\"chem\">f(-x) = (-x)^3 - 4(-x) = -x^3 + 4x = -(x^3 - 4x) = -f(x)</span>이므로 <span class=\"chem\">f</span>는 홀함수예요.</p>",
      misconception: {
        // EN (option B): g(−x) = (−x)² + cos(−x) = x² + cos x = g(x), so g is EVEN, not odd.
        "1": "g(−x) = (−x)² + cos(−x) = x² + cos x = g(x)이므로 g는 홀함수가 아니라 짝함수(우함수)예요.",
        // EN (option C): Adding the constant +1 breaks odd symmetry: h(−x) = −x³ + 1 ≠ −h(x).
        "2": "상수항 +1이 더해지면 원점 대칭이 깨져요: h(−x) = −x³ + 1 ≠ −h(x).",
        // EN (option D): p(−x) = |x| + x, which equals neither p(x) nor −p(x).
        "3": "p(−x) = |x| + x이므로 p(x)와도 같지 않고 −p(x)와도 같지 않아요.",
      },
    },

    // ── t2-3-q012 · numeric · exam · AHL · AHL 2.14 · 3 marks
    "t2-3-q012": {
      // EN: <p>The function <span class=\"chem\">f(x) = x^3 - 12x + 5</span> is defined on the restricted domain <span class=\"chem\">x &gt;= k</span>. Find the smallest value of <span class=\"chem\">k</span> such that <span class=\"chem\">f^{-1}</span> exists.</p>
      stem: "<p>함수 <span class=\"chem\">f(x) = x^3 - 12x + 5</span>가 제한된 정의역 <span class=\"chem\">x &gt;= k</span>에서 정의되어 있어요. <span class=\"chem\">f^{-1}</span>가 존재하도록 하는 가장 작은 <span class=\"chem\">k</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: For <span class=\"chem\">f^{-1}</span> to exist, <span class=\"chem\">f</span> must be one-to-one (monotonic) on <span class=\"chem\">x &gt;= k</span>.
        "<span class=\"chem\">f^{-1}</span>가 존재하려면 <span class=\"chem\">f</span>가 <span class=\"chem\">x &gt;= k</span>에서 일대일함수(단조함수)여야 해요.",
        // EN: Find the turning points by solving <span class=\"chem\">f'(x) = 3x^2 - 12 = 0</span> and pick the rightmost turning point.
        "<span class=\"chem\">f'(x) = 3x^2 - 12 = 0</span>을 풀어 극점을 찾고 가장 오른쪽 극점을 선택하세요.",
      ],
      // EN: <p><span class=\"chem\">f'(x) = 3x^2 - 12 = 0 => x = +-2</span>. Since the cubic increases for <span class=\"chem\">x &gt;= 2</span>, the smallest <span class=\"chem\">k</span> for <span class=\"chem\">f</span> to be one-to-one on <span class=\"chem\">[k, infty)</span> is <span class=\"chem\">k = 2</span>.</p>
      solution: "<p><span class=\"chem\">f'(x) = 3x^2 - 12 = 0 => x = +-2</span>예요. 삼차함수가 <span class=\"chem\">x &gt;= 2</span>에서 증가하므로 <span class=\"chem\">[k, infty)</span>에서 <span class=\"chem\">f</span>가 일대일함수가 되기 위한 가장 작은 <span class=\"chem\">k</span>는 <span class=\"chem\">k = 2</span>예요.</p>",
    },

    // ── t2-3-q013 · mcq · exam · AHL · AHL 2.16 · 2 marks
    "t2-3-q013": {
      // EN: <p>The graph of <span class=\"chem\">y = f(x)</span> has a local minimum at <span class=\"chem\">(2, -5)</span> and <span class=\"chem\">x</span>-intercepts at <span class=\"chem\">(-1, 0)</span> and <span class=\"chem\">(5, 0)</span>. Which statement is true for the graph of <span class=\"chem\">y = |f(x)|</span>?</p>
      stem: "<p><span class=\"chem\">y = f(x)</span>의 그래프가 <span class=\"chem\">(2, -5)</span>에서 극솟값을 갖고 <span class=\"chem\">x</span>절편이 <span class=\"chem\">(-1, 0)</span>과 <span class=\"chem\">(5, 0)</span>이에요. <span class=\"chem\">y = |f(x)|</span>의 그래프에 대한 설명 중 옳은 것은 무엇인가요?</p>",
      options: [
        // EN: It has a local maximum at <span class=\"chem\">(2, 5)</span>.
        "<span class=\"chem\">(2, 5)</span>에서 극댓값을 갖는다.",
        // EN: It has a local minimum at <span class=\"chem\">(-2, -5)</span>.
        "<span class=\"chem\">(-2, -5)</span>에서 극솟값을 갖는다.",
        // EN: It has a cusp at <span class=\"chem\">(2, 5)</span>.
        "<span class=\"chem\">(2, 5)</span>에서 뾰족점(첨점)을 갖는다.",
        // EN: It has no <span class=\"chem\">x</span>-intercepts.
        "<span class=\"chem\">x</span>절편이 없다.",
      ],
      hints: [
        // EN: For <span class=\"chem\">y = |f(x)|</span>, points with <span class=\"chem\">f(x) &lt; 0</span> reflect across the <span class=\"chem\">x</span>-axis.
        "<span class=\"chem\">y = |f(x)|</span>에서는 <span class=\"chem\">f(x) &lt; 0</span>인 점들이 <span class=\"chem\">x</span>축에 대해 대칭이동해요.",
        // EN: Reflecting a local minimum at <span class=\"chem\">(2, -5)</span> across <span class=\"chem\">y = 0</span> turns it into a local maximum.
        "<span class=\"chem\">(2, -5)</span>의 극솟점을 <span class=\"chem\">y = 0</span>에 대칭이동하면 극댓점이 돼요.",
      ],
      // EN: <p>Since <span class=\"chem\">f(2) = -5 &lt; 0</span>, the smooth local minimum reflects across the <span class=\"chem\">x</span>-axis to become a local maximum at <span class=\"chem\">(2, 5)</span>.</p>
      solution: "<p><span class=\"chem\">f(2) = -5 &lt; 0</span>이므로 매끄러운 극솟점이 <span class=\"chem\">x</span>축에 대해 위로 대칭이동하여 <span class=\"chem\">(2, 5)</span>에서 극댓값이 돼요.</p>",
      misconception: {
        // EN (option B): |f(x)| reflects negative y-values across the x-axis (y → −y), not across the y-axis, and |f(x)| ≥ 0 everywhere.
        "1": "|f(x)|는 음수 y값을 y축이 아니라 x축에 대해 대칭이동(y → −y)하며, 모든 곳에서 |f(x)| ≥ 0이에요.",
        // EN (option C): Because (2, −5) is a smooth turning point below the x-axis, reflecting it up produces a smooth local maximum at (2, 5); cusps occur at the x-intercepts (−1, 0) and (5, 0).
        "2": "(2, −5)는 x축 아래의 매끄러운 극점이므로 위로 대칭이동하면 (2, 5)에서 매끄러운 극댓값이 돼요; 뾰족점은 x절편 (−1, 0)과 (5, 0)에서 생겨요.",
        // EN (option D): The x-intercepts (−1, 0) and (5, 0) have y = 0, so they remain on y = |f(x)|.
        "3": "x절편 (−1, 0)과 (5, 0)은 y = 0이므로 y = |f(x)| 위에도 그대로 남아요.",
      },
    },

    // ── t2-3-q014 · multi · exam · AHL · AHL 2.16 · 4 marks
    "t2-3-q014": {
      // EN: <p>The graph of <span class=\"chem\">y = f(x)</span> has an <span class=\"chem\">x</span>-intercept at <span class=\"chem\">(3, 0)</span>, a vertical asymptote <span class=\"chem\">x = -1</span>, a local maximum at <span class=\"chem\">(1, 4)</span>, and passes through <span class=\"chem\">(4, -1)</span>. Select <strong>all</strong> true statements for the reciprocal graph <span class=\"chem\">y = 1/f(x)</span>.</p>
      stem: "<p><span class=\"chem\">y = f(x)</span>의 그래프가 <span class=\"chem\">x</span>절편 <span class=\"chem\">(3, 0)</span>, 수직점근선 <span class=\"chem\">x = -1</span>, 극댓값 <span class=\"chem\">(1, 4)</span>를 갖고 점 <span class=\"chem\">(4, -1)</span>을 지나요. 역수 그래프 <span class=\"chem\">y = 1/f(x)</span>에 대한 설명 중 <strong>옳은 것을 모두</strong> 고르시오.</p>",
      options: [
        // EN: <span class=\"chem\">x = 3</span> is a vertical asymptote of <span class=\"chem\">y = 1/f(x)</span>.
        "<span class=\"chem\">x = 3</span>은 <span class=\"chem\">y = 1/f(x)</span>의 수직점근선이다.",
        // EN: <span class=\"chem\">(1, 0.25)</span> is a local minimum of <span class=\"chem\">y = 1/f(x)</span>.
        "<span class=\"chem\">(1, 0.25)</span>는 <span class=\"chem\">y = 1/f(x)</span>의 극솟값이다.",
        // EN: <span class=\"chem\">(4, -1)</span> is an invariant point on <span class=\"chem\">y = 1/f(x)</span>.
        "<span class=\"chem\">(4, -1)</span>은 <span class=\"chem\">y = 1/f(x)</span> 위의 고정점이다.",
        // EN: <span class=\"chem\">x = -1</span> is a vertical asymptote of <span class=\"chem\">y = 1/f(x)</span>.
        "<span class=\"chem\">x = -1</span>은 <span class=\"chem\">y = 1/f(x)</span>의 수직점근선이다.",
      ],
      hints: [
        // EN: Roots of <span class=\"chem\">f(x)</span> become vertical asymptotes of <span class=\"chem\">1/f(x)</span>, while VAs of <span class=\"chem\">f(x)</span> approach <span class=\"chem\">0</span>.
        "<span class=\"chem\">f(x)</span>의 근은 <span class=\"chem\">1/f(x)</span>의 수직점근선이 되고, <span class=\"chem\">f(x)</span>의 수직점근선에서는 <span class=\"chem\">0</span>으로 수렴해요.",
        // EN: Points with <span class=\"chem\">y = +-1</span> stay unchanged, and a positive local maximum <span class=\"chem\">(1, 4)</span> becomes a local minimum <span class=\"chem\">(1, 1/4)</span>.
        "<span class=\"chem\">y = +-1</span>인 점은 변하지 않고, 양수인 극댓값 <span class=\"chem\">(1, 4)</span>는 극솟값 <span class=\"chem\">(1, 1/4)</span>가 돼요.",
      ],
      // EN: <p>At <span class=\"chem\">x = 3</span>, <span class=\"chem\">f(3) = 0</span> so <span class=\"chem\">1/f(x)</span> has VA <span class=\"chem\">x = 3</span>. Local max <span class=\"chem\">(1, 4)</span> becomes local min <span class=\"chem\">(1, 0.25)</span>. At <span class=\"chem\">(4, -1)</span>, <span class=\"chem\">1/(-1) = -1</span> (invariant). As <span class=\"chem\">x -&gt; -1</span>, <span class=\"chem\">f(x) -&gt; +-infty</span> so <span class=\"chem\">1/f(x) -&gt; 0</span> (not a VA).</p>
      solution: "<p><span class=\"chem\">x = 3</span>에서 <span class=\"chem\">f(3) = 0</span>이므로 <span class=\"chem\">1/f(x)</span>는 수직점근선 <span class=\"chem\">x = 3</span>을 가져요. 극댓값 <span class=\"chem\">(1, 4)</span>는 극솟값 <span class=\"chem\">(1, 0.25)</span>가 돼요. <span class=\"chem\">(4, -1)</span>에서는 <span class=\"chem\">1/(-1) = -1</span>이므로 고정점이에요. <span class=\"chem\">x -&gt; -1</span>일 때 <span class=\"chem\">f(x) -&gt; +-infty</span>이므로 <span class=\"chem\">1/f(x) -&gt; 0</span>이에요 (수직점근선이 아니에요).</p>",
    },

    // ── t2-3-q015 · mcq · exam · AHL · AHL 2.15 · 2 marks
    "t2-3-q015": {
      // EN: <p>Solve the rational inequality <span class=\"chem\">(3x - 2)/(x - 4) &gt;= 2</span>.</p>
      stem: "<p>유리부등식 <span class=\"chem\">(3x - 2)/(x - 4) &gt;= 2</span>를 푸시오.</p>",
      options: [
        // EN: <span class=\"chem\">x &lt;= -6</span> or <span class=\"chem\">x &gt; 4</span>
        "<span class=\"chem\">x &lt;= -6</span> 또는 <span class=\"chem\">x &gt; 4</span>",
        // EN: <span class=\"chem\">x &gt;= -6</span>
        "<span class=\"chem\">x &gt;= -6</span>",
        // EN: <span class=\"chem\">-6 &lt;= x &lt; 4</span>
        "<span class=\"chem\">-6 &lt;= x &lt; 4</span>",
        // EN: <span class=\"chem\">x &lt;= -6</span> or <span class=\"chem\">x &gt;= 4</span>
        "<span class=\"chem\">x &lt;= -6</span> 또는 <span class=\"chem\">x &gt;= 4</span>",
      ],
      hints: [
        // EN: Subtract <span class=\"chem\">2</span> from both sides and combine into a single fraction <span class=\"chem\">(x + 6)/(x - 4) &gt;= 0</span>.
        "양변에서 <span class=\"chem\">2</span>를 빼고 하나의 분수 <span class=\"chem\">(x + 6)/(x - 4) &gt;= 0</span>으로 통분하세요.",
        // EN: Test the sign in the three intervals <span class=\"chem\">(-infty, -6)</span>, <span class=\"chem\">(-6, 4)</span>, and <span class=\"chem\">(4, infty)</span>.
        "세 구간 <span class=\"chem\">(-infty, -6)</span>, <span class=\"chem\">(-6, 4)</span>, <span class=\"chem\">(4, infty)</span>에서 부호를 확인하세요.",
      ],
      // EN: <p><span class=\"chem\">(3x - 2)/(x - 4) - 2 &gt;= 0 => (x + 6)/(x - 4) &gt;= 0</span>. Critical values are <span class=\"chem\">x = -6</span> (included) and <span class=\"chem\">x = 4</span> (excluded). Sign diagram gives <span class=\"chem\">x &lt;= -6</span> or <span class=\"chem\">x &gt; 4</span>.</p>
      solution: "<p><span class=\"chem\">(3x - 2)/(x - 4) - 2 &gt;= 0 => (x + 6)/(x - 4) &gt;= 0</span>이에요. 경계값은 <span class=\"chem\">x = -6</span> (포함)과 <span class=\"chem\">x = 4</span> (제외)예요. 부호표를 그리면 <span class=\"chem\">x &lt;= -6</span> 또는 <span class=\"chem\">x &gt; 4</span>예요.</p>",
      misconception: {
        // EN (option B): Cross-multiplying by (x − 4) assumes x − 4 > 0 and loses the sign flip when x < 4.
        "1": "(x − 4)를 양변에 바로 곱하면 x − 4 > 0이라고 가정한 셈이 되어 x < 4일 때 부등호가 뒤집히는 경우를 놓쳐요.",
        // EN (option C): You chose the interval where (x + 6)/(x − 4) is negative. The inequality needs (x + 6)/(x − 4) ≥ 0, which holds outside −6 and 4, not between them.
        "2": "(x + 6)/(x − 4)가 음수인 구간을 골랐습니다. 부등식은 (x + 6)/(x − 4) ≥ 0을 요구하며, 이는 −6과 4 사이가 아니라 바깥쪽에서 성립합니다.",
        // EN (option D): x = 4 makes the denominator zero, so x = 4 must be strictly excluded (x > 4, not x ≥ 4).
        "3": "x = 4는 분모를 0으로 만들므로 x = 4는 반드시 제외해야 해요 (x ≥ 4가 아니라 x > 4).",
      },
    },

    // ── t2-3-q016 · numeric · exam · AHL · AHL 2.16 · 3 marks
    "t2-3-q016": {
      // EN: <p>Solve <span class="chem">|3x - 5| = |x + 3|</span>. Give the smaller of the two solutions.</p>
      stem: "<p>방정식 <span class=\"chem\">|3x - 5| = |x + 3|</span>을 푸시오 (Solve). 두 해 중 작은 해를 쓰시오.</p>",
      hints: [
        // EN: Since both sides are moduli, either <span class="chem">3x - 5 = x + 3</span> or <span class="chem">3x - 5 = -(x + 3)</span>.
        "양변에 모두 절댓값이 있으므로 <span class=\"chem\">3x - 5 = x + 3</span>이거나 <span class=\"chem\">3x - 5 = -(x + 3)</span>이에요.",
        // EN: Solve both linear equations, check each solution in the original equation, and compare them.
        "두 일차방정식을 풀고, 각 해를 원래 방정식에 대입해 확인한 뒤 크기를 비교하세요.",
      ],
      // EN: <p>Case 1: <span class="chem">3x - 5 = x + 3 => x = 4</span>. Case 2: <span class="chem">3x - 5 = -x - 3 => 4x = 2 => x = 0.5</span>. Both satisfy the original equation (<span class="chem">|7| = |7|</span> and <span class="chem">|-3.5| = |3.5|</span>), so the smaller solution is <span class="chem">x = 0.5</span>.</p>
      solution: "<p>경우 1: <span class=\"chem\">3x - 5 = x + 3 => x = 4</span>. 경우 2: <span class=\"chem\">3x - 5 = -x - 3 => 4x = 2 => x = 0.5</span>. 두 해 모두 원래 방정식을 만족하므로(<span class=\"chem\">|7| = |7|</span>, <span class=\"chem\">|-3.5| = |3.5|</span>) 작은 해는 <span class=\"chem\">x = 0.5</span>예요.</p>",
    },

    // ── t2-3-q017 · numeric · challenge · AHL · AHL 2.13 · 4 marks
    "t2-3-q017": {
      // EN: <p>The range of <span class="chem">f(x) = (x^2 + 3)/(x - 1)</span> (<span class="chem">x != 1</span>) is <span class="chem">y &lt;= a</span> or <span class="chem">y &gt;= b</span>. Find the exact value of <span class="chem">b</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = (x^2 + 3)/(x - 1)</span> (<span class=\"chem\">x != 1</span>)의 치역이 <span class=\"chem\">y &lt;= a</span> 또는 <span class=\"chem\">y &gt;= b</span>예요. <span class=\"chem\">b</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: "the range is <span class="chem">y &lt;= a</span> or <span class="chem">y &gt;= b</span>" asks which <span class="chem">y</span>-values are actually reached. Turn that into "for which <span class="chem">y</span> does the equation <span class="chem">y = f(x)</span> have a real solution <span class="chem">x</span>?"
        "해석: \"치역이 <span class=\"chem\">y &lt;= a</span> 또는 <span class=\"chem\">y &gt;= b</span>\"라는 것은 실제로 나오는 <span class=\"chem\">y</span> 값이 무엇인지를 묻는 것입니다. 이를 \"어떤 <span class=\"chem\">y</span>에 대해 방정식 <span class=\"chem\">y = f(x)</span>가 실수해 <span class=\"chem\">x</span>를 갖는가?\"로 바꾸어 생각하세요.",
        // EN: Set <span class="chem">y = (x^2 + 3)/(x - 1)</span> and rearrange into a quadratic in <span class="chem">x</span>: <span class="chem">x^2 - yx + (y + 3) = 0</span>.
        "<span class=\"chem\">y = (x^2 + 3)/(x - 1)</span>로 놓고 <span class=\"chem\">x</span>에 대한 이차방정식으로 정리하세요: <span class=\"chem\">x^2 - yx + (y + 3) = 0</span>.",
        // EN: Real <span class="chem">x</span> exists only when the discriminant of this quadratic in <span class="chem">x</span> is non-negative: solve <span class="chem">y^2 - 4(y + 3) &gt;= 0</span> for <span class="chem">y</span>.
        "이 <span class=\"chem\">x</span>에 대한 이차방정식의 판별식이 0 이상일 때만 실수 <span class=\"chem\">x</span>가 존재해요: <span class=\"chem\">y^2 - 4(y + 3) &gt;= 0</span>을 <span class=\"chem\">y</span>에 대해 푸세요.",
      ],
      // EN: <p>Rearranging gives <span class="chem">x^2 - yx + (y + 3) = 0</span>. Real <span class="chem">x</span> exists iff the discriminant <span class="chem">y^2 - 4y - 12 = (y - 6)(y + 2) &gt;= 0</span>, so <span class="chem">y &lt;= -2</span> or <span class="chem">y &gt;= 6</span>. Thus <span class="chem">a = -2</span> and <span class="chem">b = 6</span>.</p>
      solution: "<p>정리하면 <span class=\"chem\">x^2 - yx + (y + 3) = 0</span>이에요. 실수 <span class=\"chem\">x</span>가 존재할 조건은 판별식 <span class=\"chem\">y^2 - 4y - 12 = (y - 6)(y + 2) &gt;= 0</span>이므로 <span class=\"chem\">y &lt;= -2</span> 또는 <span class=\"chem\">y &gt;= 6</span>이에요. 따라서 <span class=\"chem\">a = -2</span>, <span class=\"chem\">b = 6</span>이에요.</p>",
    },

    // ── t2-3-q018 · short · challenge · AHL · AHL 2.16 · 6 marks
    "t2-3-q018": {
      // EN: <p>(a) Solve the inequality <span class=\"chem\">|2x - 1| &gt; x + 2</span>. <strong>[4 marks]</strong><br>(b) Hence, or otherwise, solve <span class=\"chem\">|2|x| - 1| &gt; |x| + 2</span>. <strong>[2 marks]</strong></p>
      stem: "<p>(a) 부등식 <span class=\"chem\">|2x - 1| &gt; x + 2</span>를 푸시오. <strong>[4 marks]</strong><br>(b) 이를 이용하거나 다른 방법으로 (Hence, or otherwise), <span class=\"chem\">|2|x| - 1| &gt; |x| + 2</span>를 푸시오. <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: (a) is a modulus inequality whose right-hand side can be negative, so split into cases rather than squaring blindly. In (b), <span class="chem">|2|x| - 1| &gt; |x| + 2</span> is the inequality of (a) with <span class="chem">x</span> replaced by <span class="chem">|x|</span>.
        "해석: (a)는 우변이 음수가 될 수 있는 절댓값 부등식이므로 무작정 제곱하지 말고 경우를 나누세요. (b)의 <span class=\"chem\">|2|x| - 1| &gt; |x| + 2</span>는 (a)의 부등식에서 <span class=\"chem\">x</span>를 <span class=\"chem\">|x|</span>로 바꾼 것입니다.",
        // EN: For <span class=\"chem\">|A| &gt; B</span>, either <span class=\"chem\">A &gt; B</span> or <span class=\"chem\">A &lt; -B</span> (if <span class=\"chem\">B &lt; 0</span>, it holds automatically, which is already inside <span class=\"chem\">x &lt; -1/3</span>).
        "<span class=\"chem\">|A| &gt; B</span>에서는 <span class=\"chem\">A &gt; B</span>이거나 <span class=\"chem\">A &lt; -B</span>예요 (<span class=\"chem\">B &lt; 0</span>이면 항상 성립하며, 이는 이미 <span class=\"chem\">x &lt; -1/3</span>에 포함돼요).",
        // EN: In part (b), replace <span class=\"chem\">x</span> with <span class=\"chem\">|x|</span> in your answer to part (a).
        "(b)에서는 (a)의 답에서 <span class=\"chem\">x</span>를 <span class=\"chem\">|x|</span>로 바꾸세요.",
      ],
      // EN: <p>(a) <span class=\"chem\">2x - 1 &gt; x + 2 => x &gt; 3</span>, or <span class=\"chem\">2x - 1 &lt; -x - 2 => 3x &lt; -1 => x &lt; -1/3</span>. So <span class=\"chem\">x &lt; -1/3</span> or <span class=\"chem\">x &gt; 3</span>. (b) Replacing <span class=\"chem\">x</span> by <span class=\"chem\">|x|</span>: <span class=\"chem\">|x| &lt; -1/3</span> has no solution, while <span class=\"chem\">|x| &gt; 3</span> gives <span class=\"chem\">x &lt; -3</span> or <span class=\"chem\">x &gt; 3</span>.</p>
      solution: "<p>(a) <span class=\"chem\">2x - 1 &gt; x + 2 => x &gt; 3</span> 또는 <span class=\"chem\">2x - 1 &lt; -x - 2 => 3x &lt; -1 => x &lt; -1/3</span>이에요. 따라서 <span class=\"chem\">x &lt; -1/3</span> 또는 <span class=\"chem\">x &gt; 3</span>이에요. (b) <span class=\"chem\">x</span> 대신 <span class=\"chem\">|x|</span>를 넣으면 <span class=\"chem\">|x| &lt; -1/3</span>은 해가 없고, <span class=\"chem\">|x| &gt; 3</span>에서 <span class=\"chem\">x &lt; -3</span> 또는 <span class=\"chem\">x &gt; 3</span>을 얻어요.</p>",
      // EN: <p>(a) <span class="chem">x &lt; -1/3</span> or <span class="chem">x &gt; 3</span>; (b) <span class="chem">x &lt; -3</span> or <span class="chem">x &gt; 3</span></p>
      answer: "<p>(a) <span class=\"chem\">x &lt; -1/3</span> 또는 <span class=\"chem\">x &gt; 3</span>; (b) <span class=\"chem\">x &lt; -3</span> 또는 <span class=\"chem\">x &gt; 3</span></p>",
      markscheme: [
        // EN: M1: Split into two cases: 2x − 1 > x + 2 or 2x − 1 < −(x + 2) (or square when x + 2 ≥ 0).
        "M1: 두 경우로 나눔: 2x − 1 > x + 2 또는 2x − 1 < −(x + 2) (또는 x + 2 ≥ 0일 때 제곱함).",
        // EN: A1: First branch gives x > 3.
        "A1: 첫 번째 경우에서 x > 3을 구함.",
        // EN: A1: Second branch gives 3x < −1 ⇒ x < −1/3.
        "A1: 두 번째 경우에서 3x < −1 ⇒ x < −1/3을 구함.",
        // EN: A1: State full solution x < −1/3 or x > 3 (noting x < −2 is already covered).
        "A1: 전체 해 x < −1/3 또는 x > 3을 답함 (x < −2가 이미 포함됨을 확인).",
        // EN: M1: Substitute |x| in place of x from part (a): |x| < −1/3 (no solution) or |x| > 3.
        "M1: (a)의 결과에서 x 자리에 |x|를 대입함: |x| < −1/3 (해 없음) 또는 |x| > 3.",
        // EN: A1: Solve |x| > 3 to obtain x < −3 or x > 3.
        "A1: |x| > 3을 풀어 x < −3 또는 x > 3을 얻음.",
      ],
    },

    // ── t2-3-q019 · short · exam · AHL · AHL 2.15 · 4 marks
    "t2-3-q019": {
      // EN: <p>Using your GDC, solve the inequality <span class="chem">x^3 - 4x &gt; 1</span>. Give the end points of your intervals correct to 3 significant figures.</p>
      stem: "<p>GDC를 이용하여 부등식 <span class=\"chem\">x^3 - 4x &gt; 1</span>을 푸시오. 구간의 끝점은 유효숫자 3자리로 쓰시오.</p>",
      hints: [
        // EN: Rearrange to <span class="chem">x^3 - 4x - 1 &gt; 0</span> and graph <span class="chem">y = x^3 - 4x - 1</span>, or graph <span class="chem">Y_1 = x^3 - 4x</span> and <span class="chem">Y_2 = 1</span>.
        "<span class=\"chem\">x^3 - 4x - 1 &gt; 0</span>으로 정리하고 <span class=\"chem\">y = x^3 - 4x - 1</span>의 그래프를 그리거나, <span class=\"chem\">Y_1 = x^3 - 4x</span>와 <span class=\"chem\">Y_2 = 1</span>의 그래프를 그리세요.",
        // EN: Use the zero (or intersect) tool to find all three crossing points, then read off where the cubic is <strong>above</strong> the <span class="chem">x</span>-axis.
        "zero(또는 교점) 기능으로 세 교점을 모두 구한 다음, 삼차함수 그래프가 <span class=\"chem\">x</span>축 <strong>위</strong>에 있는 범위를 읽으세요.",
      ],
      // EN: <p>Graph <span class="chem">y = x^3 - 4x - 1</span>. The zero tool gives three roots: <span class="chem">x ≈ -1.8608</span>, <span class="chem">x ≈ -0.25410</span> and <span class="chem">x ≈ 2.1149</span>. A cubic with positive leading coefficient is above the <span class="chem">x</span>-axis between the first two roots and to the right of the third, so the solution is <span class="chem">-1.86 &lt; x &lt; -0.254</span> or <span class="chem">x &gt; 2.11</span>. (There is no exact method here, which is why this is a Paper 2 question.)</p>
      solution: "<p><span class=\"chem\">y = x^3 - 4x - 1</span>의 그래프를 그려요. zero 기능으로 세 근 <span class=\"chem\">x ≈ -1.8608</span>, <span class=\"chem\">x ≈ -0.25410</span>, <span class=\"chem\">x ≈ 2.1149</span>를 얻어요. 최고차항의 계수가 양수인 삼차함수는 첫째와 둘째 근 사이, 그리고 셋째 근의 오른쪽에서 <span class=\"chem\">x</span>축 위에 있으므로 해는 <span class=\"chem\">-1.86 &lt; x &lt; -0.254</span> 또는 <span class=\"chem\">x &gt; 2.11</span>예요. (정확한 대수적 풀이가 없어서 Paper 2 문제예요.)</p>",
      // EN: <p><span class="chem">-1.86 &lt; x &lt; -0.254</span> or <span class="chem">x &gt; 2.11</span></p>
      answer: "<p><span class=\"chem\">-1.86 &lt; x &lt; -0.254</span> 또는 <span class=\"chem\">x &gt; 2.11</span></p>",
      markscheme: [
        // EN: M1: Rearranges to x³ − 4x − 1 > 0 and graphs y = x³ − 4x − 1 (or graphs y = x³ − 4x and y = 1 and finds their intersections).
        "M1: x³ − 4x − 1 > 0으로 정리하고 y = x³ − 4x − 1의 그래프를 그림 (또는 y = x³ − 4x와 y = 1의 그래프를 그려 교점을 구함).",
        // EN: A1: Finds all three critical values x = −1.86, −0.254 and 2.11.
        "A1: 세 경곗값 x = −1.86, −0.254, 2.11을 모두 구함.",
        // EN: A1: −1.86 < x < −0.254.
        "A1: −1.86 < x < −0.254.",
        // EN: A1: x > 2.11 (both intervals, with strict inequalities).
        "A1: x > 2.11 (두 구간 모두, 등호 없는 부등호로).",
      ],
    },

    // ── t2-3-q020 · mcq · foundation · AHL · AHL 2.12 · 2 marks
    "t2-3-q020": {
      // EN: <p>The graph of a cubic <span class="chem">y = f(x)</span> touches the <span class="chem">x</span>-axis at <span class="chem">x = -1</span>, crosses the <span class="chem">x</span>-axis at <span class="chem">x = 3</span>, and has <span class="chem">y</span>-intercept <span class="chem">(0, -3)</span>. Which equation could be <span class="chem">f(x)</span>?</p>
      stem: "<p>삼차함수 <span class=\"chem\">y = f(x)</span>의 그래프는 <span class=\"chem\">x = -1</span>에서 <span class=\"chem\">x</span>축에 접하고, <span class=\"chem\">x = 3</span>에서 <span class=\"chem\">x</span>축을 통과하며, <span class=\"chem\">y</span>절편은 <span class=\"chem\">(0, -3)</span>이에요. <span class=\"chem\">f(x)</span>가 될 수 있는 식은 어느 것인가요?</p>",
      options: [
        // EN: <span class="chem">f(x) = (x + 1)^2 (x - 3)</span>
        "<span class=\"chem\">f(x) = (x + 1)^2 (x - 3)</span>",
        // EN: <span class="chem">f(x) = (x - 1)^2 (x + 3)</span>
        "<span class=\"chem\">f(x) = (x - 1)^2 (x + 3)</span>",
        // EN: <span class="chem">f(x) = (x + 1)(x - 3)^2</span>
        "<span class=\"chem\">f(x) = (x + 1)(x - 3)^2</span>",
        // EN: <span class="chem">f(x) = -(x + 1)^2 (x - 3)</span>
        "<span class=\"chem\">f(x) = -(x + 1)^2 (x - 3)</span>",
      ],
      hints: [
        // EN: A repeated (squared) factor <span class="chem">(x - a)^2</span> makes the graph touch the axis at <span class="chem">x = a</span>; a single factor makes it cross.
        "중복(제곱) 인수 <span class=\"chem\">(x - a)^2</span>가 있으면 그래프는 <span class=\"chem\">x = a</span>에서 축에 접하고, 일차 인수이면 축을 통과해요.",
        // EN: Check the <span class="chem">y</span>-intercept by substituting <span class="chem">x = 0</span>.
        "<span class=\"chem\">x = 0</span>을 대입해 <span class=\"chem\">y</span>절편을 확인하세요.",
      ],
      // EN: <p>Touching at <span class="chem">x = -1</span> needs the squared factor <span class="chem">(x + 1)^2</span>, and crossing at <span class="chem">x = 3</span> needs the single factor <span class="chem">(x - 3)</span>, so <span class="chem">f(x) = a(x + 1)^2 (x - 3)</span>. Then <span class="chem">f(0) = a(1)(-3) = -3a = -3 => a = 1</span>, which matches the <span class="chem">y</span>-intercept, so <span class="chem">f(x) = (x + 1)^2 (x - 3)</span>.</p>
      solution: "<p><span class=\"chem\">x = -1</span>에서 접하려면 제곱 인수 <span class=\"chem\">(x + 1)^2</span>, <span class=\"chem\">x = 3</span>에서 통과하려면 일차 인수 <span class=\"chem\">(x - 3)</span>가 필요하므로 <span class=\"chem\">f(x) = a(x + 1)^2 (x - 3)</span>예요. 그러면 <span class=\"chem\">f(0) = a(1)(-3) = -3a = -3 => a = 1</span>이고 <span class=\"chem\">y</span>절편과 일치하므로 <span class=\"chem\">f(x) = (x + 1)^2 (x - 3)</span>예요.</p>",
      misconception: {
        // EN (option B): A factor (x − 1) gives a root at x = +1, not x = −1: the graph touches the axis where (x + 1)² = 0.
        "1": "인수 (x − 1)은 x = −1이 아니라 x = +1에서 근을 만들어요. 그래프가 축에 접하는 곳은 (x + 1)² = 0인 곳이에요.",
        // EN (option C): Here the squared factor is (x − 3)², so the graph would touch at x = 3 and cross at x = −1, and f(0) = 9.
        "2": "여기서는 제곱 인수가 (x − 3)²이므로 그래프가 x = 3에서 접하고 x = −1에서 통과하며, f(0) = 9가 돼요.",
        // EN (option D): The roots are right, but f(0) = −(1)(−3) = +3, not −3. The leading coefficient must be positive.
        "3": "근은 맞지만 f(0) = −(1)(−3) = +3이고 −3이 아니에요. 최고차항의 계수가 양수여야 해요.",
      },
    },

    // ── t2-3-q021 · multi · exam · AHL · AHL 2.16 · 3 marks
    "t2-3-q021": {
      // EN: <p>The graph of <span class="chem">y = f(x)</span> has a local maximum at <span class="chem">(-1, 3)</span>, passes through <span class="chem">(0, 1)</span>, and crosses the <span class="chem">x</span>-axis at <span class="chem">(2, 0)</span>. Select <strong>all</strong> true statements about the graph of <span class="chem">y = [f(x)]^2</span>.</p>
      stem: "<p><span class=\"chem\">y = f(x)</span>의 그래프는 <span class=\"chem\">(-1, 3)</span>에서 극댓값을 갖고, <span class=\"chem\">(0, 1)</span>을 지나며, <span class=\"chem\">(2, 0)</span>에서 <span class=\"chem\">x</span>축을 통과해요. <span class=\"chem\">y = [f(x)]^2</span>의 그래프에 대한 설명 중 <strong>옳은 것을 모두</strong> 고르시오.</p>",
      options: [
        // EN: <span class="chem">(2, 0)</span> is a local minimum of <span class="chem">y = [f(x)]^2</span>.
        "<span class=\"chem\">(2, 0)</span>은 <span class=\"chem\">y = [f(x)]^2</span>의 극솟값이다.",
        // EN: <span class="chem">(-1, 9)</span> is a local maximum of <span class="chem">y = [f(x)]^2</span>.
        "<span class=\"chem\">(-1, 9)</span>는 <span class=\"chem\">y = [f(x)]^2</span>의 극댓값이다.",
        // EN: <span class="chem">(0, 1)</span> is an invariant point.
        "<span class=\"chem\">(0, 1)</span>은 고정점이다.",
        // EN: <span class="chem">x = 2</span> is a vertical asymptote of <span class="chem">y = [f(x)]^2</span>.
        "<span class=\"chem\">x = 2</span>는 <span class=\"chem\">y = [f(x)]^2</span>의 수직점근선이다.",
      ],
      hints: [
        // EN: Squaring keeps <span class="chem">y = 0</span> and <span class="chem">y = 1</span> unchanged, makes every <span class="chem">y</span>-value non-negative, and squares the size of the others.
        "제곱하면 <span class=\"chem\">y = 0</span>와 <span class=\"chem\">y = 1</span>인 점은 변하지 않고, 모든 <span class=\"chem\">y</span>값이 0 이상이 되며, 나머지 값은 제곱돼요.",
        // EN: Where <span class="chem">f</span> crosses the axis, <span class="chem">[f(x)]^2</span> touches it and has a minimum; a turning point with <span class="chem">f &gt; 0</span> stays a turning point of the same type.
        "<span class=\"chem\">f</span>가 축을 통과하는 곳에서 <span class=\"chem\">[f(x)]^2</span>는 축에 접하고 극솟값을 가지며, <span class=\"chem\">f &gt; 0</span>인 극점은 같은 종류의 극점으로 남아요.",
      ],
      // EN: <p>At <span class="chem">x = 2</span>, <span class="chem">f = 0</span> and <span class="chem">f</span> changes sign, so <span class="chem">[f(x)]^2</span> has a smooth local minimum <span class="chem">(2, 0)</span>. At <span class="chem">x = -1</span>, <span class="chem">f = 3 &gt; 0</span> and <span class="chem">f</span> is at a local maximum, so <span class="chem">[f(x)]^2</span> has a local maximum <span class="chem">(-1, 9)</span>. At <span class="chem">x = 0</span>, <span class="chem">1^2 = 1</span>, so <span class="chem">(0, 1)</span> is invariant. Squaring a finite value is finite, so <span class="chem">x = 2</span> is not an asymptote.</p>
      solution: "<p><span class=\"chem\">x = 2</span>에서 <span class=\"chem\">f = 0</span>이고 <span class=\"chem\">f</span>의 부호가 바뀌므로 <span class=\"chem\">[f(x)]^2</span>는 매끄러운 극솟값 <span class=\"chem\">(2, 0)</span>을 가져요. <span class=\"chem\">x = -1</span>에서 <span class=\"chem\">f = 3 &gt; 0</span>이고 <span class=\"chem\">f</span>가 극대이므로 <span class=\"chem\">[f(x)]^2</span>는 극댓값 <span class=\"chem\">(-1, 9)</span>를 가져요. <span class=\"chem\">x = 0</span>에서 <span class=\"chem\">1^2 = 1</span>이므로 <span class=\"chem\">(0, 1)</span>은 고정점이에요. 유한한 값을 제곱해도 유한하므로 <span class=\"chem\">x = 2</span>는 점근선이 아니에요.</p>",
      misconception: {
        // EN (option D): Squaring never creates an asymptote: at x = 2, [f(2)]² = 0, so the graph touches the x-axis there. Vertical asymptotes from roots belong to 1/f(x).
        "3": "제곱해도 점근선은 생기지 않아요: x = 2에서 [f(2)]² = 0이므로 그래프는 그곳에서 x축에 접해요. 근에서 수직점근선이 생기는 것은 1/f(x)예요.",
      },
    },

  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ko', 't2-3.q', {
  questions: {

    // ── t2-3-q022 · numeric · exam · SL · SL 2.11 · 5 marks
    "t2-3-q022": {
      // EN: <p>Let <span class="chem">f(x) = e^x - 3x</span>. The graph of <span class="chem">y = g(x)</span> is obtained from the graph of <span class="chem">y = f(x)</span> by a horizontal stretch with scale factor <span class="chem">2</span>, followed by a translation of <span class="chem">3</span> units up.</p><p>The equation <span class="chem">g(x) = 5</span> has one negative and one positive solution. Find the positive solution.</p>
      stem: "<p><span class=\"chem\">f(x) = e^x - 3x</span>라 하자. <span class=\"chem\">y = g(x)</span>의 그래프는 <span class=\"chem\">y = f(x)</span>의 그래프를 배율 <span class=\"chem\">2</span>로 수평 확대한 다음, 위로 <span class=\"chem\">3</span>만큼 평행이동하여 얻는다.</p><p>방정식 <span class=\"chem\">g(x) = 5</span>는 음의 해 하나와 양의 해 하나를 가진다. 양의 해를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: first build the formula for <span class="chem">g</span> from the words, then solve an equation that has no algebraic method, so use the GDC.
        "해석: 먼저 문장으로부터 <span class=\"chem\">g</span>의 식을 세우고, 대수적 풀이가 없는 방정식을 풀어야 하므로 GDC를 사용하세요.",
        // EN: A horizontal stretch with scale factor <span class="chem">2</span> replaces <span class="chem">x</span> by <span class="chem">x/2</span>; moving up <span class="chem">3</span> adds <span class="chem">3</span>. So <span class="chem">g(x) = e^{x/2} - 3(x/2) + 3</span>.
        "배율 <span class=\"chem\">2</span>의 수평 확대는 <span class=\"chem\">x</span>를 <span class=\"chem\">x/2</span>로 바꾸고, 위로 <span class=\"chem\">3</span>만큼 이동하면 <span class=\"chem\">3</span>을 더해요. 따라서 <span class=\"chem\">g(x) = e^{x/2} - 3(x/2) + 3</span>이에요.",
        // EN: Graph <span class="chem">Y_1 = e^{x/2} - 1.5x + 3</span> and <span class="chem">Y_2 = 5</span> and use the intersect tool on the right-hand crossing.
        "<span class=\"chem\">Y_1 = e^{x/2} - 1.5x + 3</span>과 <span class=\"chem\">Y_2 = 5</span>의 그래프를 그리고, 오른쪽 교점에 교점(intersect) 기능을 사용하세요.",
      ],
      // EN: <p><span class="chem">g(x) = f(x/2) + 3 = e^{x/2} - 1.5x + 3</span>. Solving <span class="chem">e^{x/2} - 1.5x + 3 = 5</span> on the GDC gives <span class="chem">x ≈ -0.910</span> and <span class="chem">x ≈ 4.25</span>. The positive solution is <span class="chem">x ≈ 4.25</span>.</p><p>Common slip: a horizontal stretch with scale factor <span class="chem">2</span> is <span class="chem">f(x/2)</span>, not <span class="chem">f(2x)</span>.</p>
      solution: "<p><span class=\"chem\">g(x) = f(x/2) + 3 = e^{x/2} - 1.5x + 3</span>이에요. GDC로 <span class=\"chem\">e^{x/2} - 1.5x + 3 = 5</span>를 풀면 <span class=\"chem\">x ≈ -0.910</span>과 <span class=\"chem\">x ≈ 4.25</span>를 얻어요. 양의 해는 <span class=\"chem\">x ≈ 4.25</span>예요.</p><p>흔한 실수: 배율 <span class=\"chem\">2</span>의 수평 확대는 <span class=\"chem\">f(x/2)</span>이고, <span class=\"chem\">f(2x)</span>가 아니에요.</p>",
    },

    // ── t2-3-q023 · numeric · challenge · SL · SL 2.11 · 6 marks
    "t2-3-q023": {
      // EN: <p>A standard response curve is modelled by <span class="chem">f(t) = t^2 e^{-t}</span>, <span class="chem">t &gt;= 0</span>. In a laboratory test, the response of a new sensor is found to follow <span class="chem">g(t) = A f(t/k)</span>, <span class="chem">t &gt;= 0</span>, where <span class="chem">A</span> and <span class="chem">k</span> are positive constants and <span class="chem">t</span> is the time in seconds. The data show that the response of the new sensor reaches its greatest value, <span class="chem">10</span> units, at <span class="chem">t = 6</span>.</p><p>Find the earliest time at which the response of the new sensor is <span class="chem">5</span> units.</p>
      stem: "<p>표준 반응 곡선이 <span class=\"chem\">f(t) = t^2 e^{-t}</span>, <span class=\"chem\">t &gt;= 0</span>로 모형화된다. 실험실 시험에서 새 센서의 반응은 <span class=\"chem\">g(t) = A f(t/k)</span>, <span class=\"chem\">t &gt;= 0</span>를 따르는 것으로 밝혀졌다. 여기서 <span class=\"chem\">A</span>와 <span class=\"chem\">k</span>는 양의 상수이고 <span class=\"chem\">t</span>는 초 단위의 시간이다. 자료에 따르면 새 센서의 반응은 <span class=\"chem\">t = 6</span>에서 최댓값 <span class=\"chem\">10</span>단위에 도달한다.</p><p>새 센서의 반응이 <span class=\"chem\">5</span>단위가 되는 가장 이른 시각을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: <span class="chem">g</span> is <span class="chem">f</span> after a vertical stretch (factor <span class="chem">A</span>) and a horizontal stretch (factor <span class="chem">k</span>). The peak of <span class="chem">g</span> is the image of the peak of <span class="chem">f</span>, so find the peak of <span class="chem">f</span> first, then <span class="chem">A</span> and <span class="chem">k</span>, then solve <span class="chem">g(t) = 5</span>.
        "해석: <span class=\"chem\">g</span>는 <span class=\"chem\">f</span>를 수직 확대(배율 <span class=\"chem\">A</span>)하고 수평 확대(배율 <span class=\"chem\">k</span>)한 것이에요. <span class=\"chem\">g</span>의 꼭대기는 <span class=\"chem\">f</span>의 꼭대기의 상이므로, 먼저 <span class=\"chem\">f</span>의 꼭대기를 구하고, 그다음 <span class=\"chem\">A</span>와 <span class=\"chem\">k</span>를 구한 뒤 <span class=\"chem\">g(t) = 5</span>를 푸세요.",
        // EN: Use the GDC maximum tool on <span class="chem">y = x^2 e^{-x}</span>: the peak is at <span class="chem">t = 2</span> with value <span class="chem">f(2) = 4e^{-2} ≈ 0.541</span>.
        "<span class=\"chem\">y = x^2 e^{-x}</span>에 GDC의 최댓값(maximum) 기능을 사용하세요: 꼭대기는 <span class=\"chem\">t = 2</span>에 있고 그 값은 <span class=\"chem\">f(2) = 4e^{-2} ≈ 0.541</span>이에요.",
        // EN: The horizontal stretch sends <span class="chem">t = 2</span> to <span class="chem">t = 2k = 6</span>, so <span class="chem">k = 3</span>. The vertical stretch sends <span class="chem">0.541</span> to <span class="chem">10</span>, so <span class="chem">A = 10/(4e^{-2}) ≈ 18.5</span>.
        "수평 확대는 <span class=\"chem\">t = 2</span>를 <span class=\"chem\">t = 2k = 6</span>으로 보내므로 <span class=\"chem\">k = 3</span>이에요. 수직 확대는 <span class=\"chem\">0.541</span>을 <span class=\"chem\">10</span>으로 보내므로 <span class=\"chem\">A = 10/(4e^{-2}) ≈ 18.5</span>예요.",
        // EN: Now intersect <span class="chem">y = A(x/3)^2 e^{-x/3}</span> with <span class="chem">y = 5</span> and take the smallest non-negative <span class="chem">x</span>.
        "이제 <span class=\"chem\">y = A(x/3)^2 e^{-x/3}</span>과 <span class=\"chem\">y = 5</span>의 교점을 구하고, 음이 아닌 가장 작은 <span class=\"chem\">x</span>를 택하세요.",
      ],
      // EN: <p><strong>Decode.</strong> The new curve is a stretched copy of <span class="chem">f</span>; its peak <span class="chem">(6, 10)</span> is the image of the peak of <span class="chem">f</span>.</p><p>On the GDC, <span class="chem">f</span> has its maximum at <span class="chem">(2, 0.5413…)</span> (indeed <span class="chem">f(2) = 4e^{-2}</span>). A horizontal stretch with factor <span class="chem">k</span> maps <span class="chem">t = 2</span> to <span class="chem">2k = 6</span>, so <span class="chem">k = 3</span>. A vertical stretch with factor <span class="chem">A</span> maps <span class="chem">4e^{-2}</span> to <span class="chem">10</span>, so <span class="chem">A = 2.5e^2 ≈ 18.47</span>.</p><p>Solving <span class="chem">18.47(t/3)^2 e^{-t/3} = 5</span> for <span class="chem">t &gt;= 0</span> gives <span class="chem">t ≈ 2.28</span> and <span class="chem">t ≈ 12.5</span> (the GDC also shows a negative root, which is outside the domain). The earliest time is <span class="chem">t ≈ 2.28</span> s.</p>
      solution: "<p><strong>해석.</strong> 새 곡선은 <span class=\"chem\">f</span>를 확대한 것이고, 그 꼭대기 <span class=\"chem\">(6, 10)</span>은 <span class=\"chem\">f</span>의 꼭대기의 상이에요.</p><p>GDC에서 <span class=\"chem\">f</span>는 <span class=\"chem\">(2, 0.5413…)</span>에서 최대가 돼요(실제로 <span class=\"chem\">f(2) = 4e^{-2}</span>). 배율 <span class=\"chem\">k</span>의 수평 확대는 <span class=\"chem\">t = 2</span>를 <span class=\"chem\">2k = 6</span>으로 옮기므로 <span class=\"chem\">k = 3</span>이에요. 배율 <span class=\"chem\">A</span>의 수직 확대는 <span class=\"chem\">4e^{-2}</span>를 <span class=\"chem\">10</span>으로 옮기므로 <span class=\"chem\">A = 2.5e^2 ≈ 18.47</span>이에요.</p><p><span class=\"chem\">t &gt;= 0</span>에서 <span class=\"chem\">18.47(t/3)^2 e^{-t/3} = 5</span>를 풀면 <span class=\"chem\">t ≈ 2.28</span>과 <span class=\"chem\">t ≈ 12.5</span>를 얻어요(GDC에는 음의 근도 보이지만 정의역 밖이에요). 가장 이른 시각은 <span class=\"chem\">t ≈ 2.28</span> s예요.</p>",
    },

    // ── t2-3-q024 · numeric · exam · AHL · AHL 2.12 · 3 marks
    "t2-3-q024": {
      // EN: <p>Let <span class="chem">P(x) = x^4 - 3x^3 - 2x^2 + 7x + 1</span>. The equation <span class="chem">P(x) = 0</span> has four real roots. Find the smallest positive root.</p>
      stem: "<p><span class=\"chem\">P(x) = x^4 - 3x^3 - 2x^2 + 7x + 1</span>이라 하자. 방정식 <span class=\"chem\">P(x) = 0</span>은 네 개의 실근을 가진다. 가장 작은 양의 근을 구하시오 (Find).</p>",
      hints: [
        // EN: Graph <span class="chem">y = x^4 - 3x^3 - 2x^2 + 7x + 1</span> in a window such as <span class="chem">-3 &lt;= x &lt;= 4</span> so that all four crossings are visible.
        "네 교점이 모두 보이도록 예를 들어 <span class=\"chem\">-3 &lt;= x &lt;= 4</span> 같은 창에서 <span class=\"chem\">y = x^4 - 3x^3 - 2x^2 + 7x + 1</span>의 그래프를 그리세요.",
        // EN: Two roots are negative. Use the zero (root) tool on the first crossing to the right of the <span class="chem">y</span>-axis.
        "두 근은 음수예요. <span class=\"chem\">y</span>축 오른쪽의 첫 번째 교점에 zero(근) 기능을 사용하세요.",
      ],
      // EN: <p>The GDC gives the roots <span class="chem">x ≈ -1.44</span>, <span class="chem">-0.139</span>, <span class="chem">1.82</span> and <span class="chem">2.76</span>. The smallest positive root is <span class="chem">x ≈ 1.82</span>.</p><p>Check: the four roots add up to <span class="chem">3</span>, which equals <span class="chem">-a_3/a_4 = -(-3)/1</span>.</p>
      solution: "<p>GDC로 근 <span class=\"chem\">x ≈ -1.44</span>, <span class=\"chem\">-0.139</span>, <span class=\"chem\">1.82</span>, <span class=\"chem\">2.76</span>을 얻어요. 가장 작은 양의 근은 <span class=\"chem\">x ≈ 1.82</span>예요.</p><p>확인: 네 근의 합은 <span class=\"chem\">3</span>이고, 이는 <span class=\"chem\">-a_3/a_4 = -(-3)/1</span>과 같아요.</p>",
    },

    // ── t2-3-q025 · short · challenge · AHL · AHL 2.12, 2.15 · 7 marks
    "t2-3-q025": {
      // EN: <p>An open box is made from a rectangular sheet of card measuring <span class="chem">30</span> cm by <span class="chem">20</span> cm. A square of side <span class="chem">x</span> cm is cut from each corner and the sides are folded up.</p><p>(a) Show that the volume of the box is <span class="chem">V = x(30 - 2x)(20 - 2x)</span> cm³, and write down the set of possible values of <span class="chem">x</span>. <strong>[2 marks]</strong></p><p>(b) The box must hold exactly <span class="chem">900</span> cm³. Find the possible values of <span class="chem">x</span>, and explain why the equation <span class="chem">V = 900</span> has a third root that must be rejected. <strong>[3 marks]</strong></p><p>(c) Find the set of values of <span class="chem">x</span> for which the box holds more than <span class="chem">900</span> cm³. <strong>[2 marks]</strong></p>
      stem: "<p>가로 <span class=\"chem\">30</span> cm, 세로 <span class=\"chem\">20</span> cm인 직사각형 판지로 뚜껑 없는 상자를 만든다. 각 모서리에서 한 변이 <span class=\"chem\">x</span> cm인 정사각형을 잘라 내고 옆면을 접어 올린다.</p><p>(a) 상자의 부피가 <span class=\"chem\">V = x(30 - 2x)(20 - 2x)</span> cm³임을 보이고 (Show that), <span class=\"chem\">x</span>가 가질 수 있는 값의 집합을 쓰시오 (Write down). <strong>[2 marks]</strong></p><p>(b) 상자의 부피는 정확히 <span class=\"chem\">900</span> cm³이어야 한다. <span class=\"chem\">x</span>의 가능한 값을 구하고 (Find), 방정식 <span class=\"chem\">V = 900</span>의 세 번째 근을 버려야 하는 이유를 설명하시오 (Explain). <strong>[3 marks]</strong></p><p>(c) 상자의 부피가 <span class=\"chem\">900</span> cm³보다 큰 <span class=\"chem\">x</span>의 값의 집합을 구하시오. <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: a real-life cubic. The physical situation hides a domain condition (every length must be positive), which decides which GDC roots you keep.
        "해석: 실생활 삼차함수 문제예요. 실제 상황에는 정의역 조건(모든 길이는 양수)이 숨어 있고, 이 조건이 GDC의 근 중 어느 것을 남길지 정해요.",
        // EN: After cutting, the base is <span class="chem">(30 - 2x)</span> by <span class="chem">(20 - 2x)</span> and the height is <span class="chem">x</span>. All three must be positive.
        "잘라 낸 뒤 밑면은 <span class=\"chem\">(30 - 2x)</span> × <span class=\"chem\">(20 - 2x)</span>이고 높이는 <span class=\"chem\">x</span>예요. 세 값 모두 양수여야 해요.",
        // EN: Graph <span class="chem">Y_1 = x(30 - 2x)(20 - 2x)</span> and <span class="chem">Y_2 = 900</span>; find all intersections, then keep the ones with <span class="chem">0 &lt; x &lt; 10</span>.
        "<span class=\"chem\">Y_1 = x(30 - 2x)(20 - 2x)</span>와 <span class=\"chem\">Y_2 = 900</span>의 그래프를 그리고 모든 교점을 구한 다음, <span class=\"chem\">0 &lt; x &lt; 10</span>을 만족하는 것만 남기세요.",
      ],
      // EN: <p><strong>Decode.</strong> The algebra gives a cubic with three roots, but the card only allows <span class="chem">0 &lt; x &lt; 10</span>.</p><p>(a) Folding up leaves a base <span class="chem">(30 - 2x)</span> by <span class="chem">(20 - 2x)</span> and height <span class="chem">x</span>, so <span class="chem">V = x(30 - 2x)(20 - 2x)</span>. We need <span class="chem">x &gt; 0</span> and <span class="chem">20 - 2x &gt; 0</span>, so <span class="chem">0 &lt; x &lt; 10</span>.</p><p>(b) The GDC gives <span class="chem">x ≈ 2.30</span>, <span class="chem">5.78</span> and <span class="chem">16.9</span>. Only the first two lie in <span class="chem">0 &lt; x &lt; 10</span>.</p><p>(c) On <span class="chem">0 &lt; x &lt; 10</span> the volume curve is above <span class="chem">900</span> between the two valid roots: <span class="chem">2.30 &lt; x &lt; 5.78</span>.</p>
      solution: "<p><strong>해석.</strong> 식을 세우면 근이 세 개인 삼차방정식이 나오지만, 판지의 크기 때문에 <span class=\"chem\">0 &lt; x &lt; 10</span>만 허용돼요.</p><p>(a) 접어 올리면 밑면은 <span class=\"chem\">(30 - 2x)</span> × <span class=\"chem\">(20 - 2x)</span>, 높이는 <span class=\"chem\">x</span>이므로 <span class=\"chem\">V = x(30 - 2x)(20 - 2x)</span>예요. <span class=\"chem\">x &gt; 0</span>이고 <span class=\"chem\">20 - 2x &gt; 0</span>이어야 하므로 <span class=\"chem\">0 &lt; x &lt; 10</span>이에요.</p><p>(b) GDC로 <span class=\"chem\">x ≈ 2.30</span>, <span class=\"chem\">5.78</span>, <span class=\"chem\">16.9</span>를 얻어요. <span class=\"chem\">0 &lt; x &lt; 10</span>에 속하는 것은 처음 두 개뿐이에요.</p><p>(c) <span class=\"chem\">0 &lt; x &lt; 10</span>에서 부피 곡선은 두 유효한 근 사이에서 <span class=\"chem\">900</span>보다 위에 있어요: <span class=\"chem\">2.30 &lt; x &lt; 5.78</span>.</p>",
      // EN: <p>(a) Length <span class="chem">30 - 2x</span>, width <span class="chem">20 - 2x</span>, height <span class="chem">x</span>, so <span class="chem">V = x(30 - 2x)(20 - 2x)</span>, with <span class="chem">0 &lt; x &lt; 10</span>.</p><p>(b) <span class="chem">x ≈ 2.30</span> or <span class="chem">x ≈ 5.78</span>. The third root <span class="chem">x ≈ 16.9</span> is rejected because it is not in <span class="chem">0 &lt; x &lt; 10</span> (the width <span class="chem">20 - 2x</span> would be negative).</p><p>(c) <span class="chem">2.30 &lt; x &lt; 5.78</span>.</p>
      answer: "<p>(a) 가로 <span class=\"chem\">30 - 2x</span>, 세로 <span class=\"chem\">20 - 2x</span>, 높이 <span class=\"chem\">x</span>이므로 <span class=\"chem\">V = x(30 - 2x)(20 - 2x)</span>이고, <span class=\"chem\">0 &lt; x &lt; 10</span>.</p><p>(b) <span class=\"chem\">x ≈ 2.30</span> 또는 <span class=\"chem\">x ≈ 5.78</span>. 세 번째 근 <span class=\"chem\">x ≈ 16.9</span>는 <span class=\"chem\">0 &lt; x &lt; 10</span>에 속하지 않으므로 버린다(세로 <span class=\"chem\">20 - 2x</span>가 음수가 됨).</p><p>(c) <span class=\"chem\">2.30 &lt; x &lt; 5.78</span>.</p>",
      markscheme: [
        // EN: A1: (a) states the dimensions <span class="chem">x</span>, <span class="chem">30 - 2x</span>, <span class="chem">20 - 2x</span> and multiplies them (the result <span class="chem">V = x(30 - 2x)(20 - 2x)</span> is given, AG).
        "A1: (a) 치수 <span class=\"chem\">x</span>, <span class=\"chem\">30 - 2x</span>, <span class=\"chem\">20 - 2x</span>를 쓰고 이를 곱함 (결과 <span class=\"chem\">V = x(30 - 2x)(20 - 2x)</span>는 주어진 답, AG).",
        // EN: A1: (a) <span class="chem">0 &lt; x &lt; 10</span>.
        "A1: (a) <span class=\"chem\">0 &lt; x &lt; 10</span>.",
        // EN: M1: (b) solves <span class="chem">x(30 - 2x)(20 - 2x) = 900</span> on the GDC (graph and intersect, or polynomial solver).
        "M1: (b) GDC로 <span class=\"chem\">x(30 - 2x)(20 - 2x) = 900</span>을 풂 (그래프와 교점, 또는 다항식 풀이 기능).",
        // EN: A1: (b) <span class="chem">x = 2.30</span> and <span class="chem">x = 5.78</span>.
        "A1: (b) <span class=\"chem\">x = 2.30</span>과 <span class=\"chem\">x = 5.78</span>.",
        // EN: R1: (b) rejects <span class="chem">x = 16.9</span> because it lies outside <span class="chem">0 &lt; x &lt; 10</span> (a side length would be negative).
        "R1: (b) <span class=\"chem\">x = 16.9</span>는 <span class=\"chem\">0 &lt; x &lt; 10</span> 밖에 있으므로 버림 (한 변의 길이가 음수가 됨).",
        // EN: M1: (c) the curve <span class="chem">y = V</span> lies above <span class="chem">y = 900</span> between the two valid roots.
        "M1: (c) 곡선 <span class=\"chem\">y = V</span>가 두 유효한 근 사이에서 <span class=\"chem\">y = 900</span>보다 위에 있음.",
        // EN: A1: (c) <span class="chem">2.30 &lt; x &lt; 5.78</span>.
        "A1: (c) <span class=\"chem\">2.30 &lt; x &lt; 5.78</span>.",
      ],
    },

    // ── t2-3-q026 · short · exam · AHL · AHL 2.12 · 5 marks
    "t2-3-q026": {
      // EN: <p>Consider the equation <span class="chem">x^4 - 2x^3 - 5x^2 + 4x + 3 = 0</span>.</p><p>(a) Use your GDC to find the four real roots. <strong>[2 marks]</strong></p><p>(b) Use the formula booklet to write down the sum and the product of the four roots. <strong>[2 marks]</strong></p><p>(c) Verify that your answers to (a) are consistent with (b). <strong>[1 mark]</strong></p>
      stem: "<p>방정식 <span class=\"chem\">x^4 - 2x^3 - 5x^2 + 4x + 3 = 0</span>을 생각하자.</p><p>(a) GDC를 이용하여 네 실근을 구하시오 (Find). <strong>[2 marks]</strong></p><p>(b) 공식집을 이용하여 네 근의 합과 곱을 쓰시오 (Write down). <strong>[2 marks]</strong></p><p>(c) (a)의 답이 (b)와 일치함을 확인하시오 (Verify). <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Use a window wide enough to show all four crossings, for example <span class="chem">-3 &lt;= x &lt;= 4</span>.
        "네 교점이 모두 보일 만큼 넓은 창을 사용하세요. 예를 들어 <span class=\"chem\">-3 &lt;= x &lt;= 4</span>.",
        // EN: Booklet: sum <span class="chem">= -a_{n-1}/a_n</span>, product <span class="chem">= (-1)^n a_0/a_n</span>, with <span class="chem">n = 4</span>.
        "공식집: 합 <span class=\"chem\">= -a_{n-1}/a_n</span>, 곱 <span class=\"chem\">= (-1)^n a_0/a_n</span>, 여기서 <span class=\"chem\">n = 4</span>.",
      ],
      // EN: <p>(a) The GDC gives <span class="chem">x ≈ -1.7045</span>, <span class="chem">-0.50892</span>, <span class="chem">1.1169</span>, <span class="chem">3.0965</span>.</p><p>(b) With <span class="chem">a_4 = 1</span>, <span class="chem">a_3 = -2</span>, <span class="chem">a_0 = 3</span>: sum <span class="chem">= 2</span>, product <span class="chem">= (+1)(3) = 3</span>.</p><p>(c) The stored roots add to <span class="chem">2.0000</span> and multiply to <span class="chem">3.0000</span>, as predicted. (Rounded values give only approximately <span class="chem">2</span> and <span class="chem">3</span>, so use stored values.)</p>
      solution: "<p>(a) GDC로 <span class=\"chem\">x ≈ -1.7045</span>, <span class=\"chem\">-0.50892</span>, <span class=\"chem\">1.1169</span>, <span class=\"chem\">3.0965</span>를 얻어요.</p><p>(b) <span class=\"chem\">a_4 = 1</span>, <span class=\"chem\">a_3 = -2</span>, <span class=\"chem\">a_0 = 3</span>이므로: 합 <span class=\"chem\">= 2</span>, 곱 <span class=\"chem\">= (+1)(3) = 3</span>.</p><p>(c) 저장된 근을 더하면 <span class=\"chem\">2.0000</span>, 곱하면 <span class=\"chem\">3.0000</span>이 되어 예상과 같아요. (반올림한 값으로는 대략 <span class=\"chem\">2</span>와 <span class=\"chem\">3</span>만 나오므로 저장된 값을 사용하세요.)</p>",
      // EN: <p>(a) <span class="chem">x ≈ -1.70, -0.509, 1.12, 3.10</span>.</p><p>(b) Sum <span class="chem">= -(-2)/1 = 2</span>; product <span class="chem">= (-1)^4 (3/1) = 3</span>.</p><p>(c) Using the full GDC values, <span class="chem">-1.7045 - 0.5089 + 1.1169 + 3.0965 ≈ 2.000</span> and the product is <span class="chem">≈ 3.000</span>.</p>
      answer: "<p>(a) <span class=\"chem\">x ≈ -1.70, -0.509, 1.12, 3.10</span>.</p><p>(b) 합 <span class=\"chem\">= -(-2)/1 = 2</span>; 곱 <span class=\"chem\">= (-1)^4 (3/1) = 3</span>.</p><p>(c) GDC의 전체 값을 사용하면 <span class=\"chem\">-1.7045 - 0.5089 + 1.1169 + 3.0965 ≈ 2.000</span>이고 곱은 <span class=\"chem\">≈ 3.000</span>.</p>",
      markscheme: [
        // EN: M1: (a) graphs the quartic (or uses a polynomial solver) and finds the zeros.
        "M1: (a) 사차함수의 그래프를 그려 (또는 다항식 풀이 기능을 사용하여) 영점을 구함.",
        // EN: A1: (a) all four roots <span class="chem">-1.70, -0.509, 1.12, 3.10</span>.
        "A1: (a) 네 근 모두 <span class=\"chem\">-1.70, -0.509, 1.12, 3.10</span>.",
        // EN: A1: (b) sum of roots <span class="chem">= 2</span>.
        "A1: (b) 근의 합 <span class=\"chem\">= 2</span>.",
        // EN: A1: (b) product of roots <span class="chem">= 3</span>.
        "A1: (b) 근의 곱 <span class=\"chem\">= 3</span>.",
        // EN: R1: (c) adds and multiplies the stored (unrounded) roots, obtaining <span class="chem">2</span> and <span class="chem">3</span>.
        "R1: (c) 저장된 (반올림하지 않은) 근을 더하고 곱하여 <span class=\"chem\">2</span>와 <span class=\"chem\">3</span>을 얻음.",
      ],
    },

    // ── t2-3-q027 · short · exam · AHL · AHL 2.13, 2.15 · 9 marks
    "t2-3-q027": {
      // EN: <p>Let <span class="chem">f(x) = (2x^2 + 3x - 1)/(x + 2)</span>, <span class="chem">x != -2</span>.</p><p>(a) Write down the equation of the vertical asymptote of the graph of <span class="chem">f</span>. <strong>[1 mark]</strong></p><p>(b) Find the equation of the oblique asymptote. <strong>[2 marks]</strong></p><p>(c) Show that the <span class="chem">x</span>-coordinates of the points where the graph of <span class="chem">f</span> meets the curve <span class="chem">y = x^2</span> satisfy <span class="chem">x^3 - 3x + 1 = 0</span>. <strong>[2 marks]</strong></p><p>(d) Hence solve <span class="chem">f(x) &gt;= x^2</span>. <strong>[4 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = (2x^2 + 3x - 1)/(x + 2)</span>, <span class=\"chem\">x != -2</span>라 하자.</p><p>(a) <span class=\"chem\">f</span>의 그래프의 수직점근선의 방정식을 쓰시오 (Write down). <strong>[1 mark]</strong></p><p>(b) 사선점근선의 방정식을 구하시오 (Find). <strong>[2 marks]</strong></p><p>(c) <span class=\"chem\">f</span>의 그래프와 곡선 <span class=\"chem\">y = x^2</span>가 만나는 점의 <span class=\"chem\">x</span>좌표가 <span class=\"chem\">x^3 - 3x + 1 = 0</span>을 만족함을 보이시오 (Show that). <strong>[2 marks]</strong></p><p>(d) 이를 이용하여 (Hence) <span class=\"chem\">f(x) &gt;= x^2</span>를 푸시오. <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: (d) is a rational inequality. Do not multiply through by <span class="chem">x + 2</span> (its sign changes); combine into one fraction or compare the graphs.
        "해석: (d)는 분수부등식이에요. 양변에 <span class=\"chem\">x + 2</span>를 곱하지 마세요(부호가 바뀌기 때문). 하나의 분수로 합치거나 그래프를 비교하세요.",
        // EN: Write <span class="chem">f(x) - x^2 = (2x^2 + 3x - 1 - x^2(x + 2))/(x + 2) = -(x^3 - 3x + 1)/(x + 2)</span>.
        "<span class=\"chem\">f(x) - x^2 = (2x^2 + 3x - 1 - x^2(x + 2))/(x + 2) = -(x^3 - 3x + 1)/(x + 2)</span>로 쓰세요.",
        // EN: The critical values are <span class="chem">-2</span> (excluded) and the three GDC roots of <span class="chem">x^3 - 3x + 1</span>. Test the sign on each interval, or graph <span class="chem">y = f(x) - x^2</span>.
        "경계값은 <span class=\"chem\">-2</span>(제외)와 <span class=\"chem\">x^3 - 3x + 1</span>의 GDC 근 세 개예요. 각 구간에서 부호를 확인하거나 <span class=\"chem\">y = f(x) - x^2</span>의 그래프를 그리세요.",
      ],
      // EN: <p>(a) <span class="chem">x = -2</span>.</p><p>(b) <span class="chem">2x^2 + 3x - 1 = (2x - 1)(x + 2) + 1</span>, so <span class="chem">f(x) = 2x - 1 + 1/(x + 2)</span> and the oblique asymptote is <span class="chem">y = 2x - 1</span>.</p><p>(c) <span class="chem">(2x^2 + 3x - 1)/(x + 2) = x^2 => 2x^2 + 3x - 1 = x^3 + 2x^2 => x^3 - 3x + 1 = 0</span>.</p><p>(d) <span class="chem">f(x) - x^2 = -(x^3 - 3x + 1)/(x + 2)</span>. The GDC gives roots <span class="chem">-1.879</span>, <span class="chem">0.3473</span>, <span class="chem">1.532</span>. The expression is <span class="chem">&gt;= 0</span> on <span class="chem">-2 &lt; x &lt;= -1.88</span> and on <span class="chem">0.347 &lt;= x &lt;= 1.53</span> (it is negative for <span class="chem">x &lt; -2</span>, on <span class="chem">(-1.88, 0.347)</span> and for <span class="chem">x &gt; 1.53</span>). <span class="chem">x = -2</span> is excluded because <span class="chem">f</span> is undefined there.</p>
      solution: "<p>(a) <span class=\"chem\">x = -2</span>.</p><p>(b) <span class=\"chem\">2x^2 + 3x - 1 = (2x - 1)(x + 2) + 1</span>이므로 <span class=\"chem\">f(x) = 2x - 1 + 1/(x + 2)</span>이고, 사선점근선은 <span class=\"chem\">y = 2x - 1</span>이에요.</p><p>(c) <span class=\"chem\">(2x^2 + 3x - 1)/(x + 2) = x^2 => 2x^2 + 3x - 1 = x^3 + 2x^2 => x^3 - 3x + 1 = 0</span>.</p><p>(d) <span class=\"chem\">f(x) - x^2 = -(x^3 - 3x + 1)/(x + 2)</span>. GDC로 근 <span class=\"chem\">-1.879</span>, <span class=\"chem\">0.3473</span>, <span class=\"chem\">1.532</span>를 얻어요. 이 식은 <span class=\"chem\">-2 &lt; x &lt;= -1.88</span>과 <span class=\"chem\">0.347 &lt;= x &lt;= 1.53</span>에서 <span class=\"chem\">&gt;= 0</span>이에요(<span class=\"chem\">x &lt; -2</span>, <span class=\"chem\">(-1.88, 0.347)</span>, <span class=\"chem\">x &gt; 1.53</span>에서는 음수). <span class=\"chem\">x = -2</span>에서는 <span class=\"chem\">f</span>가 정의되지 않으므로 제외해요.</p>",
      // EN: <p>(a) <span class="chem">x = -2</span>. (b) <span class="chem">y = 2x - 1</span>. (c) <span class="chem">2x^2 + 3x - 1 = x^3 + 2x^2</span> gives <span class="chem">x^3 - 3x + 1 = 0</span>. (d) <span class="chem">-2 &lt; x &lt;= -1.88</span> or <span class="chem">0.347 &lt;= x &lt;= 1.53</span>.</p>
      answer: "<p>(a) <span class=\"chem\">x = -2</span>. (b) <span class=\"chem\">y = 2x - 1</span>. (c) <span class=\"chem\">2x^2 + 3x - 1 = x^3 + 2x^2</span>에서 <span class=\"chem\">x^3 - 3x + 1 = 0</span>. (d) <span class=\"chem\">-2 &lt; x &lt;= -1.88</span> 또는 <span class=\"chem\">0.347 &lt;= x &lt;= 1.53</span>.</p>",
      markscheme: [
        // EN: A1: (a) <span class="chem">x = -2</span>.
        "A1: (a) <span class=\"chem\">x = -2</span>.",
        // EN: M1: (b) divides: <span class="chem">2x^2 + 3x - 1 = (2x - 1)(x + 2) + 1</span>.
        "M1: (b) 나눗셈을 함: <span class=\"chem\">2x^2 + 3x - 1 = (2x - 1)(x + 2) + 1</span>.",
        // EN: A1: (b) <span class="chem">y = 2x - 1</span>.
        "A1: (b) <span class=\"chem\">y = 2x - 1</span>.",
        // EN: M1: (c) sets <span class="chem">f(x) = x^2</span> and multiplies both sides by <span class="chem">(x + 2)</span>.
        "M1: (c) <span class=\"chem\">f(x) = x^2</span>로 놓고 양변에 <span class=\"chem\">(x + 2)</span>를 곱함.",
        // EN: A1: (c) correct expanded equation <span class="chem">2x^2 + 3x - 1 = x^3 + 2x^2</span> (rearranging to <span class="chem">x^3 - 3x + 1 = 0</span> is the given result, AG).
        "A1: (c) 올바르게 전개한 방정식 <span class=\"chem\">2x^2 + 3x - 1 = x^3 + 2x^2</span> (<span class=\"chem\">x^3 - 3x + 1 = 0</span>로 정리하는 것은 주어진 결과, AG).",
        // EN: A1: (d) roots of the cubic from the GDC: <span class="chem">-1.88, 0.347, 1.53</span>.
        "A1: (d) GDC로 구한 삼차방정식의 근: <span class=\"chem\">-1.88, 0.347, 1.53</span>.",
        // EN: M1: (d) considers the sign of <span class="chem">f(x) - x^2 = -(x^3 - 3x + 1)/(x + 2)</span>, including the critical value <span class="chem">x = -2</span> (or reads off where the graph of f is on or above <span class="chem">y = x^2</span>).
        "M1: (d) 경계값 <span class=\"chem\">x = -2</span>를 포함하여 <span class=\"chem\">f(x) - x^2 = -(x^3 - 3x + 1)/(x + 2)</span>의 부호를 고려함 (또는 f의 그래프가 <span class=\"chem\">y = x^2</span> 위에 있거나 그보다 위에 있는 범위를 읽음).",
        // EN: A1: (d) <span class="chem">-2 &lt; x &lt;= -1.88</span>.
        "A1: (d) <span class=\"chem\">-2 &lt; x &lt;= -1.88</span>.",
        // EN: A1: (d) <span class="chem">0.347 &lt;= x &lt;= 1.53</span>.
        "A1: (d) <span class=\"chem\">0.347 &lt;= x &lt;= 1.53</span>.",
      ],
    },

    // ── t2-3-q028 · numeric · exam · AHL · AHL 2.13, 2.15 · 5 marks
    "t2-3-q028": {
      // EN: <p>The concentration of a medicine in a patient's blood, <span class="chem">t</span> hours after an injection, is modelled by <span class="chem">C(t) = 15t/(t^2 + 2t + 6)</span> mg per litre, <span class="chem">t &gt;= 0</span>. The medicine is effective while the concentration is greater than <span class="chem">1.8</span> mg per litre.</p><p>Find the length of time, in hours, for which the medicine is effective.</p>
      stem: "<p>주사 후 <span class=\"chem\">t</span>시간이 지났을 때 환자의 혈중 약물 농도는 <span class=\"chem\">C(t) = 15t/(t^2 + 2t + 6)</span> mg/L, <span class=\"chem\">t &gt;= 0</span>으로 모형화된다. 약은 농도가 <span class=\"chem\">1.8</span> mg/L보다 클 때 효과가 있다.</p><p>약이 효과가 있는 시간의 길이(시간 단위)를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: "effective while greater than 1.8" is the inequality <span class="chem">C(t) &gt; 1.8</span>. The answer is the length of the time interval, not a single time.
        "해석: \"1.8보다 클 때 효과가 있다\"는 부등식 <span class=\"chem\">C(t) &gt; 1.8</span>이에요. 답은 한 시각이 아니라 시간 구간의 길이예요.",
        // EN: Graph <span class="chem">Y_1 = 15x/(x^2 + 2x + 6)</span> and <span class="chem">Y_2 = 1.8</span> and find both intersections.
        "<span class=\"chem\">Y_1 = 15x/(x^2 + 2x + 6)</span>과 <span class=\"chem\">Y_2 = 1.8</span>의 그래프를 그리고 두 교점을 모두 구하세요.",
        // EN: Subtract the earlier time from the later one.
        "늦은 시각에서 이른 시각을 빼세요.",
      ],
      // EN: <p>Solving <span class="chem">C(t) = 1.8</span> (GDC, or <span class="chem">1.8t^2 - 11.4t + 10.8 = 0</span>) gives <span class="chem">t ≈ 1.160</span> and <span class="chem">t ≈ 5.174</span>. Between these times the graph is above <span class="chem">1.8</span>, so the medicine is effective for <span class="chem">5.174 - 1.160 ≈ 4.01</span> hours.</p>
      solution: "<p><span class=\"chem\">C(t) = 1.8</span>을 풀면 (GDC 또는 <span class=\"chem\">1.8t^2 - 11.4t + 10.8 = 0</span>) <span class=\"chem\">t ≈ 1.160</span>과 <span class=\"chem\">t ≈ 5.174</span>를 얻어요. 이 두 시각 사이에서 그래프는 <span class=\"chem\">1.8</span>보다 위에 있으므로 약은 <span class=\"chem\">5.174 - 1.160 ≈ 4.01</span>시간 동안 효과가 있어요.</p>",
      // EN: hours
      unit: "시간",
    },

    // ── t2-3-q029 · short · exam · AHL · AHL 2.14 · 6 marks
    "t2-3-q029": {
      // EN: <p>Let <span class="chem">f(x) = x^3 - 2x^2 - 3x + 4</span>, <span class="chem">x &gt;= k</span>.</p><p>(a) Find the least value of <span class="chem">k</span> for which <span class="chem">f</span> has an inverse function. <strong>[2 marks]</strong></p><p>For this value of <span class="chem">k</span>:</p><p>(b) find the domain of <span class="chem">f^{-1}</span>; <strong>[2 marks]</strong></p><p>(c) find <span class="chem">f^{-1}(10)</span>. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = x^3 - 2x^2 - 3x + 4</span>, <span class=\"chem\">x &gt;= k</span>라 하자.</p><p>(a) <span class=\"chem\">f</span>가 역함수를 갖도록 하는 <span class=\"chem\">k</span>의 최솟값을 구하시오 (Find). <strong>[2 marks]</strong></p><p>이 <span class=\"chem\">k</span>의 값에 대하여:</p><p>(b) <span class=\"chem\">f^{-1}</span>의 정의역을 구하시오. <strong>[2 marks]</strong></p><p>(c) <span class=\"chem\">f^{-1}(10)</span>을 구하시오. <strong>[2 marks]</strong></p>",
      hints: [
        // EN: An inverse exists only if <span class="chem">f</span> is one-to-one. Where does the cubic stop decreasing and start increasing for good?
        "역함수는 <span class=\"chem\">f</span>가 일대일일 때만 존재해요. 이 삼차함수는 어디에서 감소를 멈추고 그 뒤로 계속 증가하기 시작하나요?",
        // EN: Use the GDC minimum tool: the local minimum is at about <span class="chem">(1.87, -2.06)</span>.
        "GDC의 최솟값(minimum) 기능을 사용하세요: 극소점은 대략 <span class=\"chem\">(1.87, -2.06)</span>이에요.",
        // EN: <span class="chem">f^{-1}(10)</span> is the value of <span class="chem">x &gt;= k</span> with <span class="chem">f(x) = 10</span>.
        "<span class=\"chem\">f^{-1}(10)</span>은 <span class=\"chem\">f(x) = 10</span>을 만족하고 <span class=\"chem\">x &gt;= k</span>인 값이에요.",
      ],
      // EN: <p>(a) The graph has a local maximum at <span class="chem">x ≈ -0.535</span> and a local minimum at <span class="chem">x ≈ 1.87</span>. To the right of the minimum, <span class="chem">f</span> is increasing, so the least <span class="chem">k</span> is <span class="chem">k ≈ 1.87</span> (exactly <span class="chem">(2 + sqrt(13))/3</span>).</p><p>(b) The range of <span class="chem">f</span> is <span class="chem">f(x) &gt;= f(k) ≈ -2.06</span>, so the domain of <span class="chem">f^{-1}</span> is <span class="chem">x &gt;= -2.06</span>.</p><p>(c) Solving <span class="chem">x^3 - 2x^2 - 3x + 4 = 10</span> on the GDC gives one root, <span class="chem">x ≈ 3.40</span>, so <span class="chem">f^{-1}(10) ≈ 3.40</span>.</p>
      solution: "<p>(a) 그래프는 <span class=\"chem\">x ≈ -0.535</span>에서 극대, <span class=\"chem\">x ≈ 1.87</span>에서 극소예요. 극소점의 오른쪽에서 <span class=\"chem\">f</span>는 증가하므로 가장 작은 <span class=\"chem\">k</span>는 <span class=\"chem\">k ≈ 1.87</span>(정확한 값은 <span class=\"chem\">(2 + sqrt(13))/3</span>)이에요.</p><p>(b) <span class=\"chem\">f</span>의 치역은 <span class=\"chem\">f(x) &gt;= f(k) ≈ -2.06</span>이므로 <span class=\"chem\">f^{-1}</span>의 정의역은 <span class=\"chem\">x &gt;= -2.06</span>이에요.</p><p>(c) GDC로 <span class=\"chem\">x^3 - 2x^2 - 3x + 4 = 10</span>을 풀면 근이 하나 <span class=\"chem\">x ≈ 3.40</span>뿐이므로 <span class=\"chem\">f^{-1}(10) ≈ 3.40</span>이에요.</p>",
      // EN: <p>(a) <span class="chem">k ≈ 1.87</span> (the <span class="chem">x</span>-coordinate of the local minimum, <span class="chem">(2 + sqrt(13))/3</span>). (b) <span class="chem">x &gt;= -2.06</span>. (c) <span class="chem">f^{-1}(10) ≈ 3.40</span>.</p>
      answer: "<p>(a) <span class=\"chem\">k ≈ 1.87</span> (극소점의 <span class=\"chem\">x</span>좌표, <span class=\"chem\">(2 + sqrt(13))/3</span>). (b) <span class=\"chem\">x &gt;= -2.06</span>. (c) <span class=\"chem\">f^{-1}(10) ≈ 3.40</span>.</p>",
      markscheme: [
        // EN: M1: (a) recognises that f must be one-to-one, so k is at the local minimum (GDC minimum tool or <span class="chem">f'(x) = 0</span>).
        "M1: (a) f가 일대일이어야 하므로 k가 극소점에 있음을 인식함 (GDC 최솟값 기능 또는 <span class=\"chem\">f'(x) = 0</span>).",
        // EN: A1: (a) <span class="chem">k = 1.87</span>.
        "A1: (a) <span class=\"chem\">k = 1.87</span>.",
        // EN: M1: (b) domain of <span class="chem">f^{-1}</span> = range of f, starting at <span class="chem">f(k)</span>.
        "M1: (b) <span class=\"chem\">f^{-1}</span>의 정의역 = f의 치역이며 <span class=\"chem\">f(k)</span>에서 시작함.",
        // EN: A1: (b) <span class="chem">x &gt;= -2.06</span>.
        "A1: (b) <span class=\"chem\">x &gt;= -2.06</span>.",
        // EN: M1: (c) solves <span class="chem">f(x) = 10</span> with <span class="chem">x &gt;= 1.87</span>.
        "M1: (c) <span class=\"chem\">x &gt;= 1.87</span>에서 <span class=\"chem\">f(x) = 10</span>을 풂.",
        // EN: A1: (c) <span class="chem">3.40</span>.
        "A1: (c) <span class=\"chem\">3.40</span>.",
      ],
    },

    // ── t2-3-q030 · numeric · challenge · AHL · AHL 2.14 · 5 marks
    "t2-3-q030": {
      // EN: <p>Let <span class="chem">f(x) = e^{x/2} - 2</span>, <span class="chem">x \in \mathbb{R}</span>. The graphs of <span class="chem">y = f(x)</span> and <span class="chem">y = f^{-1}(x)</span> meet at exactly two points. Find the <span class="chem">x</span>-coordinate of the point of intersection that lies in the first quadrant.</p>
      stem: "<p><span class=\"chem\">f(x) = e^{x/2} - 2</span>, <span class=\"chem\">x \\in \\mathbb{R}</span>이라 하자. <span class=\"chem\">y = f(x)</span>와 <span class=\"chem\">y = f^{-1}(x)</span>의 그래프는 정확히 두 점에서 만난다. 제1사분면에 있는 교점의 <span class=\"chem\">x</span>좌표를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: you do not need a formula for <span class="chem">f^{-1}</span>. Because <span class="chem">f</span> is increasing, every meeting point of <span class="chem">f</span> and <span class="chem">f^{-1}</span> lies on the line <span class="chem">y = x</span>.
        "해석: <span class=\"chem\">f^{-1}</span>의 식은 필요 없어요. <span class=\"chem\">f</span>는 증가함수이므로 <span class=\"chem\">f</span>와 <span class=\"chem\">f^{-1}</span>의 교점은 모두 직선 <span class=\"chem\">y = x</span> 위에 있어요.",
        // EN: So solve <span class="chem">f(x) = x</span>, that is <span class="chem">e^{x/2} - 2 = x</span>.
        "따라서 <span class=\"chem\">f(x) = x</span>, 즉 <span class=\"chem\">e^{x/2} - 2 = x</span>를 푸세요.",
        // EN: Graph <span class="chem">Y_1 = e^{x/2} - 2</span> and <span class="chem">Y_2 = x</span>; one crossing is in the third quadrant, the other in the first.
        "<span class=\"chem\">Y_1 = e^{x/2} - 2</span>와 <span class=\"chem\">Y_2 = x</span>의 그래프를 그리세요. 교점 하나는 제3사분면에, 다른 하나는 제1사분면에 있어요.",
      ],
      // EN: <p><strong>Decode.</strong> The graph of <span class="chem">f^{-1}</span> is the reflection of the graph of <span class="chem">f</span> in <span class="chem">y = x</span>. For an increasing function, the two graphs can only meet on that line, so solve <span class="chem">f(x) = x</span>.</p><p><span class="chem">e^{x/2} - 2 = x</span> has GDC solutions <span class="chem">x ≈ -1.54</span> (point <span class="chem">(-1.54, -1.54)</span>, third quadrant) and <span class="chem">x ≈ 3.36</span>. The first-quadrant point is <span class="chem">(3.36, 3.36)</span>, so <span class="chem">x ≈ 3.36</span>.</p>
      solution: "<p><strong>해석.</strong> <span class=\"chem\">f^{-1}</span>의 그래프는 <span class=\"chem\">f</span>의 그래프를 <span class=\"chem\">y = x</span>에 대하여 대칭이동한 것이에요. 증가함수에서는 두 그래프가 이 직선 위에서만 만날 수 있으므로 <span class=\"chem\">f(x) = x</span>를 푸세요.</p><p><span class=\"chem\">e^{x/2} - 2 = x</span>의 GDC 해는 <span class=\"chem\">x ≈ -1.54</span>(점 <span class=\"chem\">(-1.54, -1.54)</span>, 제3사분면)와 <span class=\"chem\">x ≈ 3.36</span>이에요. 제1사분면의 점은 <span class=\"chem\">(3.36, 3.36)</span>이므로 <span class=\"chem\">x ≈ 3.36</span>이에요.</p>",
    },

    // ── t2-3-q031 · numeric · exam · AHL · AHL 2.15 · 4 marks
    "t2-3-q031": {
      // EN: <p>The solution of the inequality <span class="chem">2^x &gt;= x + 3</span> is <span class="chem">x &lt;= a</span> or <span class="chem">x &gt;= b</span>, where <span class="chem">a &lt; 0 &lt; b</span>. Find the value of <span class="chem">b</span>.</p>
      stem: "<p>부등식 <span class=\"chem\">2^x &gt;= x + 3</span>의 해는 <span class=\"chem\">x &lt;= a</span> 또는 <span class=\"chem\">x &gt;= b</span>이다. 여기서 <span class=\"chem\">a &lt; 0 &lt; b</span>. <span class=\"chem\">b</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: There is no algebraic method for an equation mixing <span class="chem">2^x</span> and <span class="chem">x</span>: graph <span class="chem">Y_1 = 2^x</span> and <span class="chem">Y_2 = x + 3</span>.
        "<span class=\"chem\">2^x</span>와 <span class=\"chem\">x</span>가 섞인 방정식은 대수적 풀이가 없어요: <span class=\"chem\">Y_1 = 2^x</span>와 <span class=\"chem\">Y_2 = x + 3</span>의 그래프를 그리세요.",
        // EN: The curve is above the line to the left of the negative intersection and to the right of the positive one. Find the positive intersection.
        "곡선은 음의 교점의 왼쪽과 양의 교점의 오른쪽에서 직선보다 위에 있어요. 양의 교점을 구하세요.",
      ],
      // EN: <p>The GDC gives intersections at <span class="chem">x ≈ -2.86</span> and <span class="chem">x ≈ 2.44</span>. The exponential curve is on or above the line for <span class="chem">x &lt;= -2.86</span> and for <span class="chem">x &gt;= 2.44</span>, so <span class="chem">b ≈ 2.44</span>.</p>
      solution: "<p>GDC로 교점 <span class=\"chem\">x ≈ -2.86</span>과 <span class=\"chem\">x ≈ 2.44</span>를 얻어요. 지수함수 곡선은 <span class=\"chem\">x &lt;= -2.86</span>과 <span class=\"chem\">x &gt;= 2.44</span>에서 직선 위에 있거나 그보다 위에 있으므로 <span class=\"chem\">b ≈ 2.44</span>예요.</p>",
    },

    // ── t2-3-q032 · short · exam · AHL · AHL 2.15 · 4 marks
    "t2-3-q032": {
      // EN: <p>Solve the inequality <span class="chem">x^4 - 4x^2 + x + 1 &lt; 0</span>. Give the end points of your intervals correct to 3 significant figures.</p>
      stem: "<p>부등식 <span class=\"chem\">x^4 - 4x^2 + x + 1 &lt; 0</span>을 푸시오. 구간의 끝점은 유효숫자 3자리로 쓰시오.</p>",
      hints: [
        // EN: A quartic with positive leading coefficient is positive at both ends, so it is negative between the 1st and 2nd zeros and between the 3rd and 4th.
        "최고차항의 계수가 양수인 사차함수는 양 끝에서 양수이므로, 1번째와 2번째 영점 사이, 그리고 3번째와 4번째 영점 사이에서 음수예요.",
        // EN: Use the zero tool four times; a window <span class="chem">-3 &lt;= x &lt;= 3</span> works.
        "zero 기능을 네 번 사용하세요. 창은 <span class=\"chem\">-3 &lt;= x &lt;= 3</span>이면 충분해요.",
      ],
      // EN: <p>The GDC gives zeros <span class="chem">x ≈ -2.0615</span>, <span class="chem">-0.39634</span>, <span class="chem">0.69382</span>, <span class="chem">1.7640</span>. The graph is below the <span class="chem">x</span>-axis between the first and second and between the third and fourth zeros: <span class="chem">-2.06 &lt; x &lt; -0.396</span> or <span class="chem">0.694 &lt; x &lt; 1.76</span>.</p>
      solution: "<p>GDC로 영점 <span class=\"chem\">x ≈ -2.0615</span>, <span class=\"chem\">-0.39634</span>, <span class=\"chem\">0.69382</span>, <span class=\"chem\">1.7640</span>을 얻어요. 그래프는 첫째와 둘째 영점 사이, 셋째와 넷째 영점 사이에서 <span class=\"chem\">x</span>축 아래에 있어요: <span class=\"chem\">-2.06 &lt; x &lt; -0.396</span> 또는 <span class=\"chem\">0.694 &lt; x &lt; 1.76</span>.</p>",
      // EN: <p><span class="chem">-2.06 &lt; x &lt; -0.396</span> or <span class="chem">0.694 &lt; x &lt; 1.76</span></p>
      answer: "<p><span class=\"chem\">-2.06 &lt; x &lt; -0.396</span> 또는 <span class=\"chem\">0.694 &lt; x &lt; 1.76</span></p>",
      markscheme: [
        // EN: M1: graphs <span class="chem">y = x^4 - 4x^2 + x + 1</span> and finds its zeros.
        "M1: <span class=\"chem\">y = x^4 - 4x^2 + x + 1</span>의 그래프를 그리고 영점을 구함.",
        // EN: A1: zeros <span class="chem">-2.06, -0.396, 0.694, 1.76</span>.
        "A1: 영점 <span class=\"chem\">-2.06, -0.396, 0.694, 1.76</span>.",
        // EN: A1: <span class="chem">-2.06 &lt; x &lt; -0.396</span>.
        "A1: <span class=\"chem\">-2.06 &lt; x &lt; -0.396</span>.",
        // EN: A1: <span class="chem">0.694 &lt; x &lt; 1.76</span> (strict inequalities, both intervals).
        "A1: <span class=\"chem\">0.694 &lt; x &lt; 1.76</span> (등호 없는 부등호로, 두 구간 모두).",
      ],
    },

    // ── t2-3-q033 · numeric · challenge · AHL · AHL 2.12, 2.15 · 5 marks
    "t2-3-q033": {
      // EN: <p>A small factory makes <span class="chem">x</span> batches of a product each week, where <span class="chem">x</span> is a whole number with <span class="chem">0 &lt;= x &lt;= 12</span>. Its weekly profit, in thousands of dollars, is modelled by <span class="chem">P(x) = -0.5x^3 + 6x^2 + 4x - 40</span>.</p><p>The owners want a weekly profit of more than <span class="chem">50</span> thousand dollars. Find how many different weekly production levels meet this target.</p>
      stem: "<p>어느 작은 공장은 매주 제품을 <span class=\"chem\">x</span>묶음 생산하며, <span class=\"chem\">x</span>는 <span class=\"chem\">0 &lt;= x &lt;= 12</span>인 정수이다. 주간 이익(단위: 천 달러)은 <span class=\"chem\">P(x) = -0.5x^3 + 6x^2 + 4x - 40</span>으로 모형화된다.</p><p>공장 주인은 주간 이익이 <span class=\"chem\">50</span>천 달러보다 많기를 원한다. 이 목표를 만족하는 주간 생산량은 몇 가지인지 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: this is the cubic inequality <span class="chem">P(x) &gt; 50</span>, but the answer is a <strong>count of whole numbers</strong> in <span class="chem">0 &lt;= x &lt;= 12</span>, not an interval.
        "해석: 이것은 삼차부등식 <span class=\"chem\">P(x) &gt; 50</span>이지만, 답은 구간이 아니라 <span class=\"chem\">0 &lt;= x &lt;= 12</span>에 있는 <strong>정수의 개수</strong>예요.",
        // EN: Graph <span class="chem">Y_1 = -0.5x^3 + 6x^2 + 4x - 40</span> and <span class="chem">Y_2 = 50</span> on <span class="chem">0 &lt;= x &lt;= 12</span> and find where they meet.
        "<span class=\"chem\">0 &lt;= x &lt;= 12</span>에서 <span class=\"chem\">Y_1 = -0.5x^3 + 6x^2 + 4x - 40</span>과 <span class=\"chem\">Y_2 = 50</span>의 그래프를 그리고 만나는 점을 구하세요.",
        // EN: List the integers strictly between the two intersection values (or check them in a table of values).
        "두 교점 값 사이에 있는(양 끝 제외) 정수를 나열하세요(또는 값의 표로 확인하세요).",
      ],
      // EN: <p><strong>Decode.</strong> Solve <span class="chem">P(x) &gt; 50</span>, then count the whole numbers that satisfy it.</p><p>On the GDC, <span class="chem">P(x) = 50</span> at <span class="chem">x ≈ 4.36</span> and <span class="chem">x ≈ 11.3</span> in the domain (the third root, <span class="chem">-3.66</span>, is outside it). <span class="chem">P(x) &gt; 50</span> for <span class="chem">4.36 &lt; x &lt; 11.3</span>, so <span class="chem">x = 5, 6, 7, 8, 9, 10, 11</span>. A table confirms <span class="chem">P(4) = 40</span>, <span class="chem">P(5) = 67.5</span>, <span class="chem">P(11) = 64.5</span>, <span class="chem">P(12) = 8</span>. There are <span class="chem">7</span> production levels.</p>
      solution: "<p><strong>해석.</strong> <span class=\"chem\">P(x) &gt; 50</span>을 풀고, 이를 만족하는 정수를 세어요.</p><p>GDC에서 정의역 안에서 <span class=\"chem\">P(x) = 50</span>이 되는 곳은 <span class=\"chem\">x ≈ 4.36</span>과 <span class=\"chem\">x ≈ 11.3</span>이에요(세 번째 근 <span class=\"chem\">-3.66</span>은 정의역 밖이에요). <span class=\"chem\">4.36 &lt; x &lt; 11.3</span>에서 <span class=\"chem\">P(x) &gt; 50</span>이므로 <span class=\"chem\">x = 5, 6, 7, 8, 9, 10, 11</span>이에요. 표로 <span class=\"chem\">P(4) = 40</span>, <span class=\"chem\">P(5) = 67.5</span>, <span class=\"chem\">P(11) = 64.5</span>, <span class=\"chem\">P(12) = 8</span>을 확인할 수 있어요. 생산량은 <span class=\"chem\">7</span>가지예요.</p>",
    },

    // ── t2-3-q034 · short · exam · AHL · AHL 2.15 · 4 marks
    "t2-3-q034": {
      // EN: <p>Let <span class="chem">f(x) = x^2 - 2</span> and <span class="chem">g(x) = ln(x + 3)</span>, <span class="chem">x &gt; -3</span>. Solve <span class="chem">g(x) &gt;= f(x)</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = x^2 - 2</span>와 <span class=\"chem\">g(x) = ln(x + 3)</span>, <span class=\"chem\">x &gt; -3</span>이라 하자. <span class=\"chem\">g(x) &gt;= f(x)</span>를 푸시오.</p>",
      hints: [
        // EN: Decode: "<span class="chem">g(x) &gt;= f(x)</span>" means "where is the graph of <span class="chem">g</span> on or above the graph of <span class="chem">f</span>?"
        "해석: \"<span class=\"chem\">g(x) &gt;= f(x)</span>\"는 \"<span class=\"chem\">g</span>의 그래프가 <span class=\"chem\">f</span>의 그래프 위에 있거나 그보다 위에 있는 곳은 어디인가?\"라는 뜻이에요.",
        // EN: Graph both, find the two intersections, and read off the interval between them.
        "두 그래프를 그리고 두 교점을 구한 뒤, 그 사이의 구간을 읽으세요.",
      ],
      // EN: <p>The GDC gives intersections at <span class="chem">x ≈ -1.5418</span> and <span class="chem">x ≈ 1.8942</span>. Between them the logarithm curve is above the parabola, so <span class="chem">-1.54 &lt;= x &lt;= 1.89</span>. This interval lies inside the domain <span class="chem">x &gt; -3</span>.</p>
      solution: "<p>GDC로 교점 <span class=\"chem\">x ≈ -1.5418</span>과 <span class=\"chem\">x ≈ 1.8942</span>를 얻어요. 그 사이에서 로그함수 곡선이 포물선보다 위에 있으므로 <span class=\"chem\">-1.54 &lt;= x &lt;= 1.89</span>예요. 이 구간은 정의역 <span class=\"chem\">x &gt; -3</span> 안에 있어요.</p>",
      // EN: <p><span class="chem">-1.54 &lt;= x &lt;= 1.89</span></p>
      answer: "<p><span class=\"chem\">-1.54 &lt;= x &lt;= 1.89</span></p>",
      markscheme: [
        // EN: M1: graphs <span class="chem">y = ln(x + 3)</span> and <span class="chem">y = x^2 - 2</span> (or <span class="chem">y = ln(x + 3) - x^2 + 2</span>).
        "M1: <span class=\"chem\">y = ln(x + 3)</span>과 <span class=\"chem\">y = x^2 - 2</span>의 그래프를 그림 (또는 <span class=\"chem\">y = ln(x + 3) - x^2 + 2</span>).",
        // EN: A1: intersection <span class="chem">x = -1.54</span>.
        "A1: 교점 <span class=\"chem\">x = -1.54</span>.",
        // EN: A1: intersection <span class="chem">x = 1.89</span>.
        "A1: 교점 <span class=\"chem\">x = 1.89</span>.",
        // EN: A1: <span class="chem">-1.54 &lt;= x &lt;= 1.89</span> (inclusive end points).
        "A1: <span class=\"chem\">-1.54 &lt;= x &lt;= 1.89</span> (끝점 포함).",
      ],
    },

    // ── t2-3-q035 · numeric · exam · AHL · AHL 2.16 · 4 marks
    "t2-3-q035": {
      // EN: <p>The solution of the inequality <span class="chem">|e^x - 4| &lt; 2x</span> is <span class="chem">a &lt; x &lt; b</span>. Find the value of <span class="chem">a</span>.</p>
      stem: "<p>부등식 <span class=\"chem\">|e^x - 4| &lt; 2x</span>의 해는 <span class=\"chem\">a &lt; x &lt; b</span>이다. <span class=\"chem\">a</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Graph <span class="chem">Y_1 = abs(e^x - 4)</span> and <span class="chem">Y_2 = 2x</span>. The solution is where the V-shaped curve is <strong>below</strong> the line.
        "<span class=\"chem\">Y_1 = abs(e^x - 4)</span>와 <span class=\"chem\">Y_2 = 2x</span>의 그래프를 그리세요. 해는 V자 모양 곡선이 직선보다 <strong>아래</strong>에 있는 범위예요.",
        // EN: The left end point <span class="chem">a</span> is on the reflected part, where <span class="chem">e^x &lt; 4</span>, so it solves <span class="chem">4 - e^x = 2x</span>.
        "왼쪽 끝점 <span class=\"chem\">a</span>는 <span class=\"chem\">e^x &lt; 4</span>인 꺾여 올라간 부분에 있으므로 <span class=\"chem\">4 - e^x = 2x</span>의 해예요.",
      ],
      // EN: <p>The graphs meet at <span class="chem">x ≈ 0.841</span> (where <span class="chem">4 - e^x = 2x</span>) and <span class="chem">x ≈ 2.11</span> (where <span class="chem">e^x - 4 = 2x</span>). The modulus graph is below the line between them, so <span class="chem">a ≈ 0.841</span> and <span class="chem">b ≈ 2.11</span>. For <span class="chem">x &lt;= 0</span> the right-hand side is not positive, so there are no other solutions.</p>
      solution: "<p>두 그래프는 <span class=\"chem\">x ≈ 0.841</span>(<span class=\"chem\">4 - e^x = 2x</span>인 점)과 <span class=\"chem\">x ≈ 2.11</span>(<span class=\"chem\">e^x - 4 = 2x</span>인 점)에서 만나요. 절댓값 그래프는 그 사이에서 직선보다 아래에 있으므로 <span class=\"chem\">a ≈ 0.841</span>, <span class=\"chem\">b ≈ 2.11</span>이에요. <span class=\"chem\">x &lt;= 0</span>에서는 우변이 양수가 아니므로 다른 해는 없어요.</p>",
    },

    // ── t2-3-q036 · short · exam · AHL · AHL 2.16 · 6 marks
    "t2-3-q036": {
      // EN: <p>Solve the inequality <span class="chem">|x^3 - 4x| &gt;= 2</span>. Give the end points of your intervals correct to 3 significant figures.</p>
      stem: "<p>부등식 <span class=\"chem\">|x^3 - 4x| &gt;= 2</span>를 푸시오. 구간의 끝점은 유효숫자 3자리로 쓰시오.</p>",
      hints: [
        // EN: <span class="chem">|A| &gt;= 2</span> means <span class="chem">A &gt;= 2</span> or <span class="chem">A &lt;= -2</span>. Each gives a cubic equation with three GDC roots.
        "<span class=\"chem\">|A| &gt;= 2</span>는 <span class=\"chem\">A &gt;= 2</span> 또는 <span class=\"chem\">A &lt;= -2</span>를 뜻해요. 각각 GDC 근이 세 개인 삼차방정식이 돼요.",
        // EN: <span class="chem">x^3 - 4x</span> is odd, so the six critical values come in pairs <span class="chem">+-c</span>. Graph <span class="chem">y = abs(x^3 - 4x)</span> and <span class="chem">y = 2</span> to see which pieces lie above the line.
        "<span class=\"chem\">x^3 - 4x</span>는 홀함수이므로 여섯 개의 경계값은 <span class=\"chem\">+-c</span> 쌍으로 나타나요. <span class=\"chem\">y = abs(x^3 - 4x)</span>와 <span class=\"chem\">y = 2</span>의 그래프를 그려 어느 부분이 직선보다 위에 있는지 확인하세요.",
      ],
      // EN: <p><span class="chem">x^3 - 4x = 2</span> has roots <span class="chem">-1.675, -0.5392, 2.214</span>; <span class="chem">x^3 - 4x = -2</span> has roots <span class="chem">-2.214, 0.5392, 1.675</span>. The graph of <span class="chem">y = |x^3 - 4x|</span> touches <span class="chem">0</span> at <span class="chem">x = 0, +-2</span> and is on or above <span class="chem">y = 2</span> on four pieces: <span class="chem">x &lt;= -2.21</span>, <span class="chem">-1.68 &lt;= x &lt;= -0.539</span>, <span class="chem">0.539 &lt;= x &lt;= 1.68</span>, <span class="chem">x &gt;= 2.21</span>.</p>
      solution: "<p><span class=\"chem\">x^3 - 4x = 2</span>의 근은 <span class=\"chem\">-1.675, -0.5392, 2.214</span>이고, <span class=\"chem\">x^3 - 4x = -2</span>의 근은 <span class=\"chem\">-2.214, 0.5392, 1.675</span>예요. <span class=\"chem\">y = |x^3 - 4x|</span>의 그래프는 <span class=\"chem\">x = 0, +-2</span>에서 <span class=\"chem\">0</span>에 접하고, 네 부분 <span class=\"chem\">x &lt;= -2.21</span>, <span class=\"chem\">-1.68 &lt;= x &lt;= -0.539</span>, <span class=\"chem\">0.539 &lt;= x &lt;= 1.68</span>, <span class=\"chem\">x &gt;= 2.21</span>에서 <span class=\"chem\">y = 2</span> 위에 있거나 그보다 위에 있어요.</p>",
      // EN: <p><span class="chem">x &lt;= -2.21</span> or <span class="chem">-1.68 &lt;= x &lt;= -0.539</span> or <span class="chem">0.539 &lt;= x &lt;= 1.68</span> or <span class="chem">x &gt;= 2.21</span></p>
      answer: "<p><span class=\"chem\">x &lt;= -2.21</span> 또는 <span class=\"chem\">-1.68 &lt;= x &lt;= -0.539</span> 또는 <span class=\"chem\">0.539 &lt;= x &lt;= 1.68</span> 또는 <span class=\"chem\">x &gt;= 2.21</span></p>",
      markscheme: [
        // EN: M1: graphs <span class="chem">y = |x^3 - 4x|</span> and <span class="chem">y = 2</span> (or solves <span class="chem">x^3 - 4x = 2</span> and <span class="chem">x^3 - 4x = -2</span>).
        "M1: <span class=\"chem\">y = |x^3 - 4x|</span>와 <span class=\"chem\">y = 2</span>의 그래프를 그림 (또는 <span class=\"chem\">x^3 - 4x = 2</span>와 <span class=\"chem\">x^3 - 4x = -2</span>를 풂).",
        // EN: A1: critical values <span class="chem">+-2.21</span>.
        "A1: 경계값 <span class=\"chem\">+-2.21</span>.",
        // EN: A1: critical values <span class="chem">+-1.68</span>.
        "A1: 경계값 <span class=\"chem\">+-1.68</span>.",
        // EN: A1: critical values <span class="chem">+-0.539</span>.
        "A1: 경계값 <span class=\"chem\">+-0.539</span>.",
        // EN: A1: <span class="chem">x &lt;= -2.21</span> or <span class="chem">x &gt;= 2.21</span>.
        "A1: <span class=\"chem\">x &lt;= -2.21</span> 또는 <span class=\"chem\">x &gt;= 2.21</span>.",
        // EN: A1: <span class="chem">-1.68 &lt;= x &lt;= -0.539</span> or <span class="chem">0.539 &lt;= x &lt;= 1.68</span>.
        "A1: <span class=\"chem\">-1.68 &lt;= x &lt;= -0.539</span> 또는 <span class=\"chem\">0.539 &lt;= x &lt;= 1.68</span>.",
      ],
    },

    // ── t2-3-q037 · numeric · exam · AHL · AHL 2.16 · 3 marks
    "t2-3-q037": {
      // EN: <p>Let <span class="chem">f(x) = x^3 - 2x^2 - 4x + 6</span>. The graph of <span class="chem">y = 1/f(x)</span> has three vertical asymptotes. The equation of the one nearest to the <span class="chem">y</span>-axis is <span class="chem">x = c</span>. Find <span class="chem">c</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = x^3 - 2x^2 - 4x + 6</span>이라 하자. <span class=\"chem\">y = 1/f(x)</span>의 그래프는 수직점근선 세 개를 가진다. 그중 <span class=\"chem\">y</span>축에 가장 가까운 것의 방정식은 <span class=\"chem\">x = c</span>이다. <span class=\"chem\">c</span>를 구하시오 (Find).</p>",
      hints: [
        // EN: The vertical asymptotes of <span class="chem">y = 1/f(x)</span> are at the zeros of <span class="chem">f</span>.
        "<span class=\"chem\">y = 1/f(x)</span>의 수직점근선은 <span class=\"chem\">f</span>의 영점에 있어요.",
        // EN: Find the three zeros of the cubic with the GDC and choose the one with the smallest <span class="chem">|x|</span>.
        "GDC로 삼차함수의 세 영점을 구하고, <span class=\"chem\">|x|</span>가 가장 작은 것을 고르세요.",
      ],
      // EN: <p>The zeros of <span class="chem">f</span> are <span class="chem">x ≈ -1.87</span>, <span class="chem">1.21</span> and <span class="chem">2.66</span>, so <span class="chem">1/f</span> has vertical asymptotes there. The nearest to the <span class="chem">y</span>-axis is <span class="chem">x ≈ 1.21</span>.</p>
      solution: "<p><span class=\"chem\">f</span>의 영점은 <span class=\"chem\">x ≈ -1.87</span>, <span class=\"chem\">1.21</span>, <span class=\"chem\">2.66</span>이므로 <span class=\"chem\">1/f</span>는 그곳에 수직점근선을 가져요. <span class=\"chem\">y</span>축에 가장 가까운 것은 <span class=\"chem\">x ≈ 1.21</span>이에요.</p>",
    },

    // ── t2-3-q038 · short · challenge · AHL · AHL 2.16 · 6 marks
    "t2-3-q038": {
      // EN: <p>Let <span class="chem">f(x) = x^3 - 4x^2 + 3x + 1</span>.</p><p>(a) Find the coordinates of the local maximum and local minimum points of the graph of <span class="chem">y = f(x)</span>. <strong>[2 marks]</strong></p><p>(b) Sketch the graph of <span class="chem">y = f(|x|)</span> for <span class="chem">-4 &lt;= x &lt;= 4</span>. <strong>[2 marks]</strong></p><p>(c) Find the set of values of <span class="chem">k</span> for which the equation <span class="chem">f(|x|) = k</span> has exactly six solutions. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = x^3 - 4x^2 + 3x + 1</span>이라 하자.</p><p>(a) <span class=\"chem\">y = f(x)</span>의 그래프의 극대점과 극소점의 좌표를 구하시오 (Find). <strong>[2 marks]</strong></p><p>(b) <span class=\"chem\">-4 &lt;= x &lt;= 4</span>에서 <span class=\"chem\">y = f(|x|)</span>의 그래프의 개형을 그리시오 (Sketch). <strong>[2 marks]</strong></p><p>(c) 방정식 <span class=\"chem\">f(|x|) = k</span>가 정확히 여섯 개의 해를 갖도록 하는 <span class=\"chem\">k</span>의 값의 집합을 구하시오. <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: "exactly six solutions" means a horizontal line <span class="chem">y = k</span> meets the graph of <span class="chem">y = f(|x|)</span> six times. Because the graph is symmetric, count the meetings with the right half (<span class="chem">x &gt; 0</span>) and double.
        "해석: \"정확히 여섯 개의 해\"는 수평선 <span class=\"chem\">y = k</span>가 <span class=\"chem\">y = f(|x|)</span>의 그래프와 여섯 번 만난다는 뜻이에요. 그래프가 대칭이므로 오른쪽 절반(<span class=\"chem\">x &gt; 0</span>)과의 교점을 세어 두 배 하세요.",
        // EN: <span class="chem">f(|x|)</span> uses only the part of <span class="chem">f</span> with <span class="chem">x &gt;= 0</span>, then mirrors it. That part starts at <span class="chem">(0, 1)</span>, rises to the maximum, falls to the minimum, then rises again.
        "<span class=\"chem\">f(|x|)</span>는 <span class=\"chem\">f</span>의 <span class=\"chem\">x &gt;= 0</span>인 부분만 사용하고 그것을 대칭으로 옮겨요. 그 부분은 <span class=\"chem\">(0, 1)</span>에서 시작하여 극대점까지 올라가고, 극소점까지 내려간 뒤 다시 올라가요.",
        // EN: Three meetings on <span class="chem">x &gt; 0</span> need the line above the starting value <span class="chem">1</span> but below the maximum. What happens when <span class="chem">k = 1</span> exactly?
        "<span class=\"chem\">x &gt; 0</span>에서 세 번 만나려면 직선이 시작값 <span class=\"chem\">1</span>보다 위에 있고 극댓값보다 아래에 있어야 해요. <span class=\"chem\">k = 1</span>일 때는 어떻게 될까요?",
      ],
      // EN: <p><strong>Decode.</strong> Count intersections of <span class="chem">y = k</span> with a graph that is symmetric about the <span class="chem">y</span>-axis.</p><p>(a) GDC: maximum <span class="chem">(0.451, 1.63)</span>, minimum <span class="chem">(2.22, -1.11)</span>.</p><p>(b) For <span class="chem">x &gt;= 0</span>, <span class="chem">f(|x|) = f(x)</span>; reflect this half in the <span class="chem">y</span>-axis.</p><p>(c) On <span class="chem">x &gt; 0</span> the curve goes from <span class="chem">1</span> up to <span class="chem">1.63</span>, down to <span class="chem">-1.11</span>, then up without bound. A line <span class="chem">y = k</span> meets it three times exactly when <span class="chem">1 &lt; k &lt; 1.63</span>, giving six solutions in total. At <span class="chem">k = 1</span> the solution <span class="chem">x = 0</span> is shared by both halves, giving only five.</p>
      solution: "<p><strong>해석.</strong> <span class=\"chem\">y</span>축에 대하여 대칭인 그래프와 <span class=\"chem\">y = k</span>의 교점을 세어요.</p><p>(a) GDC: 극대점 <span class=\"chem\">(0.451, 1.63)</span>, 극소점 <span class=\"chem\">(2.22, -1.11)</span>.</p><p>(b) <span class=\"chem\">x &gt;= 0</span>에서 <span class=\"chem\">f(|x|) = f(x)</span>예요. 이 절반을 <span class=\"chem\">y</span>축에 대하여 대칭이동하세요.</p><p>(c) <span class=\"chem\">x &gt; 0</span>에서 곡선은 <span class=\"chem\">1</span>에서 <span class=\"chem\">1.63</span>까지 올라가고, <span class=\"chem\">-1.11</span>까지 내려간 뒤 한없이 올라가요. 직선 <span class=\"chem\">y = k</span>가 이와 정확히 세 번 만나는 것은 <span class=\"chem\">1 &lt; k &lt; 1.63</span>일 때이고, 이때 해는 모두 여섯 개예요. <span class=\"chem\">k = 1</span>일 때는 해 <span class=\"chem\">x = 0</span>이 두 절반에 공통이므로 해는 다섯 개뿐이에요.</p>",
      // EN: <p>(a) Maximum <span class="chem">(0.451, 1.63)</span>, minimum <span class="chem">(2.22, -1.11)</span>. (b) Keep the part of <span class="chem">y = f(x)</span> for <span class="chem">x &gt;= 0</span> (starting at <span class="chem">(0, 1)</span>) and reflect it in the <span class="chem">y</span>-axis; the graph is symmetric, with maxima at <span class="chem">(+-0.451, 1.63)</span>, minima at <span class="chem">(+-2.22, -1.11)</span> and a sharp point at <span class="chem">(0, 1)</span>. (c) <span class="chem">1 &lt; k &lt; 1.63</span>.</p>
      answer: "<p>(a) 극대점 <span class=\"chem\">(0.451, 1.63)</span>, 극소점 <span class=\"chem\">(2.22, -1.11)</span>. (b) <span class=\"chem\">x &gt;= 0</span>에서 <span class=\"chem\">y = f(x)</span>의 부분(<span class=\"chem\">(0, 1)</span>에서 시작)을 남기고 그것을 <span class=\"chem\">y</span>축에 대하여 대칭이동함. 그래프는 대칭이며 극대점은 <span class=\"chem\">(+-0.451, 1.63)</span>, 극소점은 <span class=\"chem\">(+-2.22, -1.11)</span>이고 <span class=\"chem\">(0, 1)</span>에서 뾰족점이 생김. (c) <span class=\"chem\">1 &lt; k &lt; 1.63</span>.</p>",
      markscheme: [
        // EN: A1: (a) maximum <span class="chem">(0.451, 1.63)</span>.
        "A1: (a) 극대점 <span class=\"chem\">(0.451, 1.63)</span>.",
        // EN: A1: (a) minimum <span class="chem">(2.22, -1.11)</span>.
        "A1: (a) 극소점 <span class=\"chem\">(2.22, -1.11)</span>.",
        // EN: A1: (b) right-hand half is <span class="chem">y = f(x)</span> for <span class="chem">x &gt;= 0</span>, through <span class="chem">(0, 1)</span>, with the turning points from (a).
        "A1: (b) 오른쪽 절반은 <span class=\"chem\">x &gt;= 0</span>에서의 <span class=\"chem\">y = f(x)</span>이며, <span class=\"chem\">(0, 1)</span>을 지나고 (a)의 극점을 가짐.",
        // EN: A1: (b) left-hand half is its reflection in the <span class="chem">y</span>-axis (symmetric graph, local minimum point at <span class="chem">(0, 1)</span>).
        "A1: (b) 왼쪽 절반은 이를 <span class=\"chem\">y</span>축에 대하여 대칭이동한 것 (대칭인 그래프, 극소점 <span class=\"chem\">(0, 1)</span>).",
        // EN: R1: (c) a horizontal line <span class="chem">y = k</span> must cut each half three times, which needs it strictly above <span class="chem">f(0) = 1</span> and strictly below the maximum.
        "R1: (c) 수평선 <span class=\"chem\">y = k</span>가 각 절반과 세 번씩 만나야 하며, 이를 위해서는 <span class=\"chem\">f(0) = 1</span>보다 엄격히 위에, 극댓값보다 엄격히 아래에 있어야 함.",
        // EN: A1: (c) <span class="chem">1 &lt; k &lt; 1.63</span>.
        "A1: (c) <span class=\"chem\">1 &lt; k &lt; 1.63</span>.",
      ],
    },

    // ── t2-3-q039 · short · challenge · AHL · SL 2.11, AHL 2.12, 2.15 · 15 marks
    "t2-3-q039": {
      // EN: <p>The cross-section of a hill is modelled by <span class="chem">h(x) = 0.004x(30 - x)(x + 10)</span>, <span class="chem">0 &lt;= x &lt;= 30</span>, where <span class="chem">x</span> is the horizontal distance in metres from the western foot of the hill and <span class="chem">h(x)</span> is the height in metres.</p><p>(a) Find the greatest height of the hill and the horizontal distance at which it occurs. <strong>[3 marks]</strong></p><p>(b) A footpath is to be built along the part of the hill that is at least <span class="chem">15</span> m high. Find the horizontal length of this part. <strong>[4 marks]</strong></p><p>A landscape architect redesigns the hill. The new cross-section is <span class="chem">g(x) = h(x/1.2) - 3</span>, <span class="chem">0 &lt;= x &lt;= 36</span>, where height is still measured from the original ground level.</p><p>(c) Describe fully the two transformations that map the graph of <span class="chem">h</span> onto the graph of <span class="chem">g</span>. <strong>[2 marks]</strong></p><p>(d) Write down the coordinates of the highest point of the new hill. <strong>[2 marks]</strong></p><p>(e) Find the horizontal distance between the two points at which the new hill meets the original ground level (<span class="chem">g(x) = 0</span>). <strong>[4 marks]</strong></p>
      stem: "<p>어느 언덕의 단면이 <span class=\"chem\">h(x) = 0.004x(30 - x)(x + 10)</span>, <span class=\"chem\">0 &lt;= x &lt;= 30</span>로 모형화된다. 여기서 <span class=\"chem\">x</span>는 언덕의 서쪽 기슭으로부터의 수평 거리(m)이고 <span class=\"chem\">h(x)</span>는 높이(m)이다.</p><p>(a) 언덕의 최대 높이와 그때의 수평 거리를 구하시오 (Find). <strong>[3 marks]</strong></p><p>(b) 언덕에서 높이가 <span class=\"chem\">15</span> m 이상인 부분을 따라 산책로를 만들려고 한다. 이 부분의 수평 길이를 구하시오. <strong>[4 marks]</strong></p><p>한 조경 설계가가 언덕을 다시 설계한다. 새 단면은 <span class=\"chem\">g(x) = h(x/1.2) - 3</span>, <span class=\"chem\">0 &lt;= x &lt;= 36</span>이며, 높이는 여전히 원래의 지면에서 잰다.</p><p>(c) <span class=\"chem\">h</span>의 그래프를 <span class=\"chem\">g</span>의 그래프로 옮기는 두 변환을 완전히 설명하시오 (Describe). <strong>[2 marks]</strong></p><p>(d) 새 언덕의 가장 높은 점의 좌표를 쓰시오 (Write down). <strong>[2 marks]</strong></p><p>(e) 새 언덕이 원래의 지면(<span class=\"chem\">g(x) = 0</span>)과 만나는 두 점 사이의 수평 거리를 구하시오. <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: (b) "at least 15 m high" is the inequality <span class="chem">h(x) &gt;= 15</span>, and "horizontal length" is the difference of the two end points. In (c)–(e), the new hill is a transformed copy, so turning points move with the transformation.
        "해석: (b)의 \"높이가 15 m 이상\"은 부등식 <span class=\"chem\">h(x) &gt;= 15</span>이고, \"수평 길이\"는 두 끝점의 차예요. (c)–(e)에서 새 언덕은 변환된 복사본이므로 극점도 변환을 따라 움직여요.",
        // EN: Enter <span class="chem">Y_1 = 0.004x(30 - x)(x + 10)</span> with window <span class="chem">0 &lt;= x &lt;= 36</span>, <span class="chem">-5 &lt;= y &lt;= 30</span>. Use maximum, then intersect with <span class="chem">Y_2 = 15</span>.
        "창을 <span class=\"chem\">0 &lt;= x &lt;= 36</span>, <span class=\"chem\">-5 &lt;= y &lt;= 30</span>으로 하고 <span class=\"chem\">Y_1 = 0.004x(30 - x)(x + 10)</span>을 입력하세요. 최댓값 기능을 쓴 다음 <span class=\"chem\">Y_2 = 15</span>와의 교점을 구하세요.",
        // EN: <span class="chem">h(x/1.2)</span> stretches horizontally by <span class="chem">1.2</span>; <span class="chem">-3</span> moves down. So the peak <span class="chem">(18.7, 24.3)</span> moves to <span class="chem">(1.2 × 18.7, 24.3 - 3)</span>.
        "<span class=\"chem\">h(x/1.2)</span>는 배율 <span class=\"chem\">1.2</span>의 수평 확대이고, <span class=\"chem\">-3</span>은 아래로의 이동이에요. 따라서 꼭대기 <span class=\"chem\">(18.7, 24.3)</span>은 <span class=\"chem\">(1.2 × 18.7, 24.3 - 3)</span>으로 옮겨져요.",
        // EN: For (e), graph <span class="chem">Y_3 = 0.004(x/1.2)(30 - x/1.2)(x/1.2 + 10) - 3</span> and find its zeros in <span class="chem">0 &lt;= x &lt;= 36</span>.
        "(e)에서는 <span class=\"chem\">Y_3 = 0.004(x/1.2)(30 - x/1.2)(x/1.2 + 10) - 3</span>의 그래프를 그리고 <span class=\"chem\">0 &lt;= x &lt;= 36</span>에서 영점을 구하세요.",
      ],
      // EN: <p><strong>Decode.</strong> (b) and (e) are inequality/equation questions about a cubic, solved on the GDC and restricted to the domain. (c) and (d) are transformation questions: track the peak.</p><p>(a) The GDC maximum on <span class="chem">0 &lt;= x &lt;= 30</span> is at <span class="chem">(18.685, 24.258)</span>: height <span class="chem">24.3</span> m at <span class="chem">x = 18.7</span> m.</p><p>(b) <span class="chem">h(x) = 15</span> at <span class="chem">x ≈ 9.384</span> and <span class="chem">x ≈ 25.99</span> (the root <span class="chem">-15.4</span> is outside the domain). The hill is at least <span class="chem">15</span> m high for <span class="chem">9.38 &lt;= x &lt;= 26.0</span>, a length of <span class="chem">16.6</span> m.</p><p>(c) <span class="chem">x -&gt; x/1.2</span>: horizontal stretch with scale factor <span class="chem">1.2</span>; <span class="chem">-3</span>: translation <span class="chem">3</span> units down.</p><p>(d) <span class="chem">(1.2 × 18.685, 24.258 - 3) = (22.4, 21.3)</span>.</p><p>(e) <span class="chem">g(x) = 0</span> at <span class="chem">x ≈ 2.652</span> and <span class="chem">x ≈ 35.22</span>, so the distance is <span class="chem">32.6</span> m. (Check: these are <span class="chem">1.2</span> times the solutions of <span class="chem">h(x) = 3</span>.)</p>
      solution: "<p><strong>해석.</strong> (b)와 (e)는 삼차함수에 대한 부등식·방정식 문제로, GDC로 풀고 정의역으로 제한해요. (c)와 (d)는 변환 문제로, 꼭대기를 추적해요.</p><p>(a) <span class=\"chem\">0 &lt;= x &lt;= 30</span>에서 GDC의 최댓값은 <span class=\"chem\">(18.685, 24.258)</span>이에요: <span class=\"chem\">x = 18.7</span> m에서 높이 <span class=\"chem\">24.3</span> m.</p><p>(b) <span class=\"chem\">h(x) = 15</span>가 되는 것은 <span class=\"chem\">x ≈ 9.384</span>와 <span class=\"chem\">x ≈ 25.99</span>예요(근 <span class=\"chem\">-15.4</span>는 정의역 밖이에요). 언덕의 높이가 <span class=\"chem\">15</span> m 이상인 것은 <span class=\"chem\">9.38 &lt;= x &lt;= 26.0</span>일 때이며, 길이는 <span class=\"chem\">16.6</span> m예요.</p><p>(c) <span class=\"chem\">x -&gt; x/1.2</span>: 배율 <span class=\"chem\">1.2</span>의 수평 확대; <span class=\"chem\">-3</span>: 아래로 <span class=\"chem\">3</span>만큼 평행이동.</p><p>(d) <span class=\"chem\">(1.2 × 18.685, 24.258 - 3) = (22.4, 21.3)</span>.</p><p>(e) <span class=\"chem\">g(x) = 0</span>가 되는 것은 <span class=\"chem\">x ≈ 2.652</span>와 <span class=\"chem\">x ≈ 35.22</span>이므로 거리는 <span class=\"chem\">32.6</span> m예요. (확인: 이 값들은 <span class=\"chem\">h(x) = 3</span>의 해의 <span class=\"chem\">1.2</span>배예요.)</p>",
      // EN: <p>(a) <span class="chem">24.3</span> m at <span class="chem">x = 18.7</span> m. (b) <span class="chem">h(x) &gt;= 15</span> for <span class="chem">9.38 &lt;= x &lt;= 26.0</span>; length <span class="chem">16.6</span> m. (c) Horizontal stretch with scale factor <span class="chem">1.2</span> (parallel to the <span class="chem">x</span>-axis), then translation <span class="chem">3</span> units down. (d) <span class="chem">(22.4, 21.3)</span>. (e) <span class="chem">g(x) = 0</span> at <span class="chem">x = 2.65</span> and <span class="chem">x = 35.2</span>; distance <span class="chem">32.6</span> m.</p>
      answer: "<p>(a) <span class=\"chem\">x = 18.7</span> m에서 <span class=\"chem\">24.3</span> m. (b) <span class=\"chem\">9.38 &lt;= x &lt;= 26.0</span>에서 <span class=\"chem\">h(x) &gt;= 15</span>; 길이 <span class=\"chem\">16.6</span> m. (c) 배율 <span class=\"chem\">1.2</span>의 수평 확대(<span class=\"chem\">x</span>축에 평행), 이어서 아래로 <span class=\"chem\">3</span>만큼 평행이동. (d) <span class=\"chem\">(22.4, 21.3)</span>. (e) <span class=\"chem\">x = 2.65</span>와 <span class=\"chem\">x = 35.2</span>에서 <span class=\"chem\">g(x) = 0</span>; 거리 <span class=\"chem\">32.6</span> m.</p>",
      markscheme: [
        // EN: M1: (a) uses the GDC maximum on <span class="chem">0 &lt;= x &lt;= 30</span>.
        "M1: (a) <span class=\"chem\">0 &lt;= x &lt;= 30</span>에서 GDC 최댓값 기능을 사용함.",
        // EN: A1: (a) greatest height <span class="chem">24.3</span> m.
        "A1: (a) 최대 높이 <span class=\"chem\">24.3</span> m.",
        // EN: A1: (a) at <span class="chem">x = 18.7</span> m.
        "A1: (a) 수평 거리 <span class=\"chem\">x = 18.7</span> m.",
        // EN: M1: (b) sets up <span class="chem">h(x) &gt;= 15</span> (or <span class="chem">h(x) = 15</span>).
        "M1: (b) <span class=\"chem\">h(x) &gt;= 15</span>(또는 <span class=\"chem\">h(x) = 15</span>)를 세움.",
        // EN: A1: (b) <span class="chem">x = 9.38</span>.
        "A1: (b) <span class=\"chem\">x = 9.38</span>.",
        // EN: A1: (b) <span class="chem">x = 26.0</span> (rejecting the negative root <span class="chem">-15.4</span>).
        "A1: (b) <span class=\"chem\">x = 26.0</span> (음의 근 <span class=\"chem\">-15.4</span>를 버림).",
        // EN: A1: (b) length <span class="chem">26.0 - 9.38 = 16.6</span> m.
        "A1: (b) 길이 <span class=\"chem\">26.0 - 9.38 = 16.6</span> m.",
        // EN: A1: (c) horizontal stretch, scale factor <span class="chem">1.2</span>.
        "A1: (c) 수평 확대, 배율 <span class=\"chem\">1.2</span>.",
        // EN: A1: (c) vertical translation of <span class="chem">3</span> units down.
        "A1: (c) 아래로 <span class=\"chem\">3</span>만큼 수직 평행이동.",
        // EN: A1: (d) <span class="chem">x = 1.2 × 18.7 = 22.4</span>.
        "A1: (d) <span class=\"chem\">x = 1.2 × 18.7 = 22.4</span>.",
        // EN: A1: (d) <span class="chem">y = 24.3 - 3 = 21.3</span>.
        "A1: (d) <span class=\"chem\">y = 24.3 - 3 = 21.3</span>.",
        // EN: M1: (e) solves <span class="chem">g(x) = 0</span>, i.e. <span class="chem">h(x/1.2) = 3</span>, on <span class="chem">0 &lt;= x &lt;= 36</span>.
        "M1: (e) <span class=\"chem\">0 &lt;= x &lt;= 36</span>에서 <span class=\"chem\">g(x) = 0</span>, 즉 <span class=\"chem\">h(x/1.2) = 3</span>을 풂.",
        // EN: A1: (e) <span class="chem">x = 2.65</span>.
        "A1: (e) <span class=\"chem\">x = 2.65</span>.",
        // EN: A1: (e) <span class="chem">x = 35.2</span>.
        "A1: (e) <span class=\"chem\">x = 35.2</span>.",
        // EN: A1: (e) distance <span class="chem">32.6</span> m.
        "A1: (e) 거리 <span class=\"chem\">32.6</span> m.",
      ],
    },

    // ── t2-3-q040 · short · exam · SL · SL 2.11 · 7 marks
    "t2-3-q040": {
      // EN: <p>Let <span class="chem">f(x) = x^3 - 3x</span>. The function <span class="chem">g</span> is defined by <span class="chem">g(x) = a f(x) + b</span>, where <span class="chem">a</span> and <span class="chem">b</span> are constants. A table of values of <span class="chem">g</span> includes <span class="chem">g(1) = 1</span> and <span class="chem">g(2) = 13</span>.</p><p>(a) Find the value of <span class="chem">a</span> and the value of <span class="chem">b</span>. <strong>[3 marks]</strong></p><p>(b) Hence describe a sequence of two transformations that maps the graph of <span class="chem">y = f(x)</span> onto the graph of <span class="chem">y = g(x)</span>. <strong>[2 marks]</strong></p><p>(c) Find the <span class="chem">x</span>-intercept of the graph of <span class="chem">y = g(x)</span>. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = x^3 - 3x</span>라 하자. 함수 <span class=\"chem\">g</span>는 <span class=\"chem\">g(x) = a f(x) + b</span>로 정의되며, 여기서 <span class=\"chem\">a</span>와 <span class=\"chem\">b</span>는 상수이다. <span class=\"chem\">g</span>의 값의 표에는 <span class=\"chem\">g(1) = 1</span>과 <span class=\"chem\">g(2) = 13</span>이 포함되어 있다.</p><p>(a) <span class=\"chem\">a</span>의 값과 <span class=\"chem\">b</span>의 값을 구하시오 (Find). <strong>[3 marks]</strong></p><p>(b) 이를 이용하여 (Hence) <span class=\"chem\">y = f(x)</span>의 그래프를 <span class=\"chem\">y = g(x)</span>의 그래프로 옮기는 두 변환의 순서를 설명하시오 (Describe). <strong>[2 marks]</strong></p><p>(c) <span class=\"chem\">y = g(x)</span>의 그래프의 <span class=\"chem\">x</span>절편을 구하시오. <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Evaluate <span class="chem">f(1)</span> and <span class="chem">f(2)</span>, then use the two data values to write two simultaneous equations in <span class="chem">a</span> and <span class="chem">b</span>.
        "<span class=\"chem\">f(1)</span>과 <span class=\"chem\">f(2)</span>를 계산한 다음, 두 자료값을 이용하여 <span class=\"chem\">a</span>와 <span class=\"chem\">b</span>에 대한 연립방정식 두 개를 세우세요.",
        // EN: In <span class="chem">a f(x) + b</span>, the stretch happens before the translation.
        "<span class=\"chem\">a f(x) + b</span>에서는 확대가 평행이동보다 먼저 일어나요.",
        // EN: <span class="chem">g(x) = 3x^3 - 9x + 7</span> has only one real zero; find it with the GDC.
        "<span class=\"chem\">g(x) = 3x^3 - 9x + 7</span>은 실수 영점이 하나뿐이에요. GDC로 구하세요.",
      ],
      // EN: <p>(a) <span class="chem">f(1) = -2</span> and <span class="chem">f(2) = 2</span>, so <span class="chem">-2a + b = 1</span> and <span class="chem">2a + b = 13</span>. Subtracting: <span class="chem">4a = 12</span>, so <span class="chem">a = 3</span> and <span class="chem">b = 7</span>.</p><p>(b) Vertical stretch with scale factor <span class="chem">3</span>, then translation of <span class="chem">7</span> units up. (In the other order the translation would have to be <span class="chem">7/3</span> units.)</p><p>(c) <span class="chem">g(x) = 3x^3 - 9x + 7 = 0</span> has one real root, <span class="chem">x ≈ -2.04</span> (the local minimum of <span class="chem">g</span>, at <span class="chem">(1, 1)</span>, is above the axis).</p>
      solution: "<p>(a) <span class=\"chem\">f(1) = -2</span>이고 <span class=\"chem\">f(2) = 2</span>이므로 <span class=\"chem\">-2a + b = 1</span>, <span class=\"chem\">2a + b = 13</span>이에요. 두 식을 빼면 <span class=\"chem\">4a = 12</span>이므로 <span class=\"chem\">a = 3</span>, <span class=\"chem\">b = 7</span>이에요.</p><p>(b) 배율 <span class=\"chem\">3</span>의 수직 확대, 이어서 위로 <span class=\"chem\">7</span>만큼 평행이동이에요. (순서를 반대로 하면 평행이동은 <span class=\"chem\">7/3</span>만큼이어야 해요.)</p><p>(c) <span class=\"chem\">g(x) = 3x^3 - 9x + 7 = 0</span>은 실근 <span class=\"chem\">x ≈ -2.04</span>를 하나 가져요(<span class=\"chem\">g</span>의 극소점 <span class=\"chem\">(1, 1)</span>은 축보다 위에 있어요).</p>",
      // EN: <p>(a) <span class="chem">a = 3</span>, <span class="chem">b = 7</span>. (b) Vertical stretch with scale factor <span class="chem">3</span>, then translation <span class="chem">7</span> units up. (c) <span class="chem">x ≈ -2.04</span>.</p>
      answer: "<p>(a) <span class=\"chem\">a = 3</span>, <span class=\"chem\">b = 7</span>. (b) 배율 <span class=\"chem\">3</span>의 수직 확대, 이어서 위로 <span class=\"chem\">7</span>만큼 평행이동. (c) <span class=\"chem\">x ≈ -2.04</span>.</p>",
      markscheme: [
        // EN: M1: (a) uses <span class="chem">f(1) = -2</span> and <span class="chem">f(2) = 2</span> to form <span class="chem">-2a + b = 1</span> and <span class="chem">2a + b = 13</span>.
        "M1: (a) <span class=\"chem\">f(1) = -2</span>와 <span class=\"chem\">f(2) = 2</span>를 이용하여 <span class=\"chem\">-2a + b = 1</span>과 <span class=\"chem\">2a + b = 13</span>을 세움.",
        // EN: A1: (a) <span class="chem">a = 3</span>.
        "A1: (a) <span class=\"chem\">a = 3</span>.",
        // EN: A1: (a) <span class="chem">b = 7</span>.
        "A1: (a) <span class=\"chem\">b = 7</span>.",
        // EN: A1: (b) vertical stretch, scale factor <span class="chem">3</span>.
        "A1: (b) 수직 확대, 배율 <span class=\"chem\">3</span>.",
        // EN: A1: (b) followed by a vertical translation of <span class="chem">7</span> units up.
        "A1: (b) 이어서 위로 <span class=\"chem\">7</span>만큼 수직 평행이동.",
        // EN: M1: (c) solves <span class="chem">3x^3 - 9x + 7 = 0</span> on the GDC.
        "M1: (c) GDC로 <span class=\"chem\">3x^3 - 9x + 7 = 0</span>을 풂.",
        // EN: A1: (c) <span class="chem">x = -2.04</span>.
        "A1: (c) <span class=\"chem\">x = -2.04</span>.",
      ],
    },

    // ── t2-3-q041 · numeric · challenge · AHL · AHL 2.13 · 4 marks
    "t2-3-q041": {
      // EN: <p>A workshop makes <span class="chem">x</span> chairs per week. The average cost per chair, in dollars, is <span class="chem">C(x) = (0.5x^2 + 30x + 1500)/(x + 20)</span>.</p><p>Find the number of chairs per week that gives the lowest average cost per chair.</p>
      stem: "<p>어느 공방은 매주 의자를 <span class=\"chem\">x</span>개 만든다. 의자 한 개당 평균 비용(달러)은 <span class=\"chem\">C(x) = (0.5x^2 + 30x + 1500)/(x + 20)</span>이다.</p><p>의자 한 개당 평균 비용이 가장 낮아지는 주당 의자 수를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: you are asked for a number of chairs, which must be a whole number. Find where <span class="chem">C</span> is least, then check the whole numbers on either side.
        "해석: 구하는 것은 의자의 개수이므로 정수여야 해요. <span class=\"chem\">C</span>가 최소가 되는 곳을 구한 다음, 양옆의 정수를 확인하세요.",
        // EN: Graph <span class="chem">Y_1 = (0.5x^2 + 30x + 1500)/(x + 20)</span> for <span class="chem">x &gt; 0</span> and use the minimum tool.
        "<span class=\"chem\">x &gt; 0</span>에서 <span class=\"chem\">Y_1 = (0.5x^2 + 30x + 1500)/(x + 20)</span>의 그래프를 그리고 최솟값 기능을 사용하세요.",
        // EN: The minimum is at <span class="chem">x ≈ 26.9</span>. Compare <span class="chem">C(26)</span> and <span class="chem">C(27)</span> in a table.
        "최솟값은 <span class=\"chem\">x ≈ 26.9</span>에서 나타나요. 표에서 <span class=\"chem\">C(26)</span>과 <span class=\"chem\">C(27)</span>을 비교하세요.",
      ],
      // EN: <p><strong>Decode.</strong> The answer must be a whole number of chairs, so the GDC minimum is only the first step.</p><p>The GDC minimum of <span class="chem">C</span> for <span class="chem">x &gt; 0</span> is at <span class="chem">x ≈ 26.90</span>, <span class="chem">C ≈ 56.904</span>. Checking whole numbers: <span class="chem">C(26) = 2618/46 ≈ 56.913</span> and <span class="chem">C(27) = 2674.5/47 ≈ 56.904</span>. The lowest average cost is at <span class="chem">27</span> chairs per week.</p><p>(Dividing gives <span class="chem">C(x) = 0.5x + 20 + 1100/(x + 20)</span>, so for large <span class="chem">x</span> the cost follows the oblique asymptote <span class="chem">y = 0.5x + 20</span> and rises again.)</p>
      solution: "<p><strong>해석.</strong> 답은 의자의 개수이므로 정수여야 하고, GDC의 최솟값은 첫 단계일 뿐이에요.</p><p><span class=\"chem\">x &gt; 0</span>에서 <span class=\"chem\">C</span>의 GDC 최솟값은 <span class=\"chem\">x ≈ 26.90</span>, <span class=\"chem\">C ≈ 56.904</span>예요. 정수를 확인하면 <span class=\"chem\">C(26) = 2618/46 ≈ 56.913</span>, <span class=\"chem\">C(27) = 2674.5/47 ≈ 56.904</span>예요. 평균 비용이 가장 낮은 것은 주당 <span class=\"chem\">27</span>개일 때예요.</p><p>(나눗셈을 하면 <span class=\"chem\">C(x) = 0.5x + 20 + 1100/(x + 20)</span>이므로, <span class=\"chem\">x</span>가 클 때 비용은 사선점근선 <span class=\"chem\">y = 0.5x + 20</span>을 따라 다시 증가해요.)</p>",
    },

    // ── t2-3-q042 · short · exam · AHL · AHL 2.12, 2.15 · 6 marks
    "t2-3-q042": {
      // EN: <p>Let <span class="chem">P(x) = x^3 + ax^2 - 7x + 3</span>. When <span class="chem">P(x)</span> is divided by <span class="chem">(x + 2)</span>, the remainder is <span class="chem">13</span>.</p><p>(a) Find the value of <span class="chem">a</span>. <strong>[2 marks]</strong></p><p>(b) Find the three roots of <span class="chem">P(x) = 0</span>. <strong>[2 marks]</strong></p><p>(c) Hence solve <span class="chem">P(x) &gt; 0</span>. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">P(x) = x^3 + ax^2 - 7x + 3</span>이라 하자. <span class=\"chem\">P(x)</span>를 <span class=\"chem\">(x + 2)</span>로 나눈 나머지는 <span class=\"chem\">13</span>이다.</p><p>(a) <span class=\"chem\">a</span>의 값을 구하시오 (Find). <strong>[2 marks]</strong></p><p>(b) <span class=\"chem\">P(x) = 0</span>의 세 근을 구하시오. <strong>[2 marks]</strong></p><p>(c) 이를 이용하여 (Hence) <span class=\"chem\">P(x) &gt; 0</span>을 푸시오. <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Remainder Theorem: the remainder on division by <span class="chem">(x + 2)</span> is <span class="chem">P(-2)</span>.
        "나머지정리: <span class=\"chem\">(x + 2)</span>로 나눈 나머지는 <span class=\"chem\">P(-2)</span>예요.",
        // EN: With <span class="chem">a = 1</span>, none of <span class="chem">+-1, +-3</span> is a root, so there is no "nice" factor: use the GDC.
        "<span class=\"chem\">a = 1</span>일 때 <span class=\"chem\">+-1, +-3</span> 중 어느 것도 근이 아니므로 \"깔끔한\" 인수가 없어요: GDC를 사용하세요.",
        // EN: A cubic with positive leading coefficient is positive between its first two roots and after its third.
        "최고차항의 계수가 양수인 삼차함수는 첫째와 둘째 근 사이, 그리고 셋째 근 이후에서 양수예요.",
      ],
      // EN: <p>(a) <span class="chem">P(-2) = -8 + 4a + 14 + 3 = 4a + 9 = 13</span>, so <span class="chem">a = 1</span>.</p><p>(b) <span class="chem">x^3 + x^2 - 7x + 3 = 0</span>: GDC roots <span class="chem">x ≈ -3.354</span>, <span class="chem">0.4765</span>, <span class="chem">1.877</span>.</p><p>(c) The graph is above the axis for <span class="chem">-3.35 &lt; x &lt; 0.476</span> and for <span class="chem">x &gt; 1.88</span>.</p>
      solution: "<p>(a) <span class=\"chem\">P(-2) = -8 + 4a + 14 + 3 = 4a + 9 = 13</span>이므로 <span class=\"chem\">a = 1</span>이에요.</p><p>(b) <span class=\"chem\">x^3 + x^2 - 7x + 3 = 0</span>: GDC 근 <span class=\"chem\">x ≈ -3.354</span>, <span class=\"chem\">0.4765</span>, <span class=\"chem\">1.877</span>.</p><p>(c) 그래프가 축보다 위에 있는 것은 <span class=\"chem\">-3.35 &lt; x &lt; 0.476</span>일 때와 <span class=\"chem\">x &gt; 1.88</span>일 때예요.</p>",
      // EN: <p>(a) <span class="chem">a = 1</span>. (b) <span class="chem">x ≈ -3.35, 0.476, 1.88</span>. (c) <span class="chem">-3.35 &lt; x &lt; 0.476</span> or <span class="chem">x &gt; 1.88</span>.</p>
      answer: "<p>(a) <span class=\"chem\">a = 1</span>. (b) <span class=\"chem\">x ≈ -3.35, 0.476, 1.88</span>. (c) <span class=\"chem\">-3.35 &lt; x &lt; 0.476</span> 또는 <span class=\"chem\">x &gt; 1.88</span>.</p>",
      markscheme: [
        // EN: M1: (a) Remainder Theorem: <span class="chem">P(-2) = -8 + 4a + 14 + 3 = 13</span>.
        "M1: (a) 나머지정리: <span class=\"chem\">P(-2) = -8 + 4a + 14 + 3 = 13</span>.",
        // EN: A1: (a) <span class="chem">a = 1</span>.
        "A1: (a) <span class=\"chem\">a = 1</span>.",
        // EN: M1: (b) substitutes <span class="chem">a = 1</span> and solves <span class="chem">x^3 + x^2 - 7x + 3 = 0</span> on the GDC (graph or polynomial solver).
        "M1: (b) <span class=\"chem\">a = 1</span>을 대입하고 GDC로 <span class=\"chem\">x^3 + x^2 - 7x + 3 = 0</span>을 풂 (그래프 또는 다항식 풀이 기능).",
        // EN: A1: (b) all three roots <span class="chem">-3.35, 0.476, 1.88</span>.
        "A1: (b) 세 근 모두 <span class=\"chem\">-3.35, 0.476, 1.88</span>.",
        // EN: A1: (c) <span class="chem">-3.35 &lt; x &lt; 0.476</span>.
        "A1: (c) <span class=\"chem\">-3.35 &lt; x &lt; 0.476</span>.",
        // EN: A1: (c) <span class="chem">x &gt; 1.88</span>.
        "A1: (c) <span class=\"chem\">x &gt; 1.88</span>.",
      ],
    },

    // ── t2-3-q043 · short · challenge · AHL · AHL 2.15, 2.16 · 5 marks
    "t2-3-q043": {
      // EN: <p>Solve the inequality <span class="chem">|ln x| &lt; 2 - x</span>.</p>
      stem: "<p>부등식 <span class=\"chem\">|ln x| &lt; 2 - x</span>를 푸시오.</p>",
      hints: [
        // EN: Decode: a modulus inequality with no algebraic method. Remember the hidden condition: <span class="chem">ln x</span> needs <span class="chem">x &gt; 0</span>. Solve it graphically.
        "해석: 대수적 풀이가 없는 절댓값 부등식이에요. 숨은 조건을 잊지 마세요: <span class=\"chem\">ln x</span>가 정의되려면 <span class=\"chem\">x &gt; 0</span>이어야 해요. 그래프로 푸세요.",
        // EN: Graph <span class="chem">Y_1 = abs(ln(x))</span> and <span class="chem">Y_2 = 2 - x</span>. The modulus graph has a sharp point at <span class="chem">(1, 0)</span>.
        "<span class=\"chem\">Y_1 = abs(ln(x))</span>와 <span class=\"chem\">Y_2 = 2 - x</span>의 그래프를 그리세요. 절댓값 그래프는 <span class=\"chem\">(1, 0)</span>에서 뾰족해요.",
        // EN: If you solve algebraically instead, <span class="chem">-ln x = 2 - x</span> has a second root, <span class="chem">x ≈ 3.15</span>; reject it, since that branch only applies for <span class="chem">x &lt; 1</span>.
        "대신 대수적으로 풀면 <span class=\"chem\">-ln x = 2 - x</span>는 두 번째 근 <span class=\"chem\">x ≈ 3.15</span>를 가져요. 이 경우는 <span class=\"chem\">x &lt; 1</span>에서만 성립하므로 이 근은 버리세요.",
      ],
      // EN: <p><strong>Decode.</strong> Where is the V-shaped graph <span class="chem">y = |ln x|</span>, defined for <span class="chem">x &gt; 0</span>, below the line <span class="chem">y = 2 - x</span>?</p><p>For <span class="chem">0 &lt; x &lt; 1</span>, <span class="chem">|ln x| = -ln x</span>; <span class="chem">-ln x = 2 - x</span> gives <span class="chem">x ≈ 0.159</span> (the other root <span class="chem">3.15</span> is not in this branch). For <span class="chem">x &gt;= 1</span>, <span class="chem">ln x = 2 - x</span> gives <span class="chem">x ≈ 1.56</span>. At <span class="chem">x = 1</span>, <span class="chem">0 &lt; 1</span>, so the solution is <span class="chem">0.159 &lt; x &lt; 1.56</span>.</p>
      solution: "<p><strong>해석.</strong> <span class=\"chem\">x &gt; 0</span>에서 정의된 V자 모양 그래프 <span class=\"chem\">y = |ln x|</span>가 직선 <span class=\"chem\">y = 2 - x</span>보다 아래에 있는 곳은 어디일까요?</p><p><span class=\"chem\">0 &lt; x &lt; 1</span>에서는 <span class=\"chem\">|ln x| = -ln x</span>이고, <span class=\"chem\">-ln x = 2 - x</span>에서 <span class=\"chem\">x ≈ 0.159</span>를 얻어요(다른 근 <span class=\"chem\">3.15</span>는 이 경우에 속하지 않아요). <span class=\"chem\">x &gt;= 1</span>에서는 <span class=\"chem\">ln x = 2 - x</span>에서 <span class=\"chem\">x ≈ 1.56</span>을 얻어요. <span class=\"chem\">x = 1</span>에서 <span class=\"chem\">0 &lt; 1</span>이므로 해는 <span class=\"chem\">0.159 &lt; x &lt; 1.56</span>이에요.</p>",
      // EN: <p><span class="chem">0.159 &lt; x &lt; 1.56</span></p>
      answer: "<p><span class=\"chem\">0.159 &lt; x &lt; 1.56</span></p>",
      markscheme: [
        // EN: R1: notes the domain <span class="chem">x &gt; 0</span>.
        "R1: 정의역 <span class=\"chem\">x &gt; 0</span>에 주의함.",
        // EN: M1: graphs <span class="chem">y = |ln x|</span> and <span class="chem">y = 2 - x</span> (or splits into <span class="chem">-ln x &lt; 2 - x</span> for <span class="chem">0 &lt; x &lt; 1</span> and <span class="chem">ln x &lt; 2 - x</span> for <span class="chem">x &gt;= 1</span>).
        "M1: <span class=\"chem\">y = |ln x|</span>와 <span class=\"chem\">y = 2 - x</span>의 그래프를 그림 (또는 <span class=\"chem\">0 &lt; x &lt; 1</span>에서의 <span class=\"chem\">-ln x &lt; 2 - x</span>와 <span class=\"chem\">x &gt;= 1</span>에서의 <span class=\"chem\">ln x &lt; 2 - x</span>로 경우를 나눔).",
        // EN: A1: <span class="chem">x = 0.159</span>.
        "A1: <span class=\"chem\">x = 0.159</span>.",
        // EN: A1: <span class="chem">x = 1.56</span>.
        "A1: <span class=\"chem\">x = 1.56</span>.",
        // EN: A1: <span class="chem">0.159 &lt; x &lt; 1.56</span>.
        "A1: <span class=\"chem\">0.159 &lt; x &lt; 1.56</span>.",
      ],
    },

    // ── t2-3-q044 · numeric · foundation · SL · SL 2.11 · 2 marks
    "t2-3-q044": {
      // EN: <p>The point <span class="chem">(2, -4)</span> lies on the graph of <span class="chem">y = f(x)</span>. The point <span class="chem">Q</span> is its image on the graph of <span class="chem">y = 3f(-x) - 2</span>. Find the <span class="chem">y</span>-coordinate of <span class="chem">Q</span>.</p>
      stem: "<p>점 <span class=\"chem\">(2, -4)</span>가 <span class=\"chem\">y = f(x)</span>의 그래프 위에 있다. 점 <span class=\"chem\">Q</span>는 <span class=\"chem\">y = 3f(-x) - 2</span>의 그래프 위에 있는 그 점의 상이다. <span class=\"chem\">Q</span>의 <span class=\"chem\">y</span>좌표를 구하시오 (Find).</p>",
      hints: [
        // EN: <span class="chem">f(-x)</span> reflects in the <span class="chem">y</span>-axis, so only the <span class="chem">x</span>-coordinate changes sign.
        "<span class=\"chem\">f(-x)</span>는 <span class=\"chem\">y</span>축에 대한 대칭이동이므로 <span class=\"chem\">x</span>좌표의 부호만 바뀌어요.",
        // EN: The outside of the function acts on <span class="chem">y</span>: multiply by <span class="chem">3</span>, then subtract <span class="chem">2</span>.
        "함수 바깥의 연산은 <span class=\"chem\">y</span>에 작용해요: <span class=\"chem\">3</span>을 곱한 다음 <span class=\"chem\">2</span>를 빼세요.",
      ],
      // EN: <p>The reflection sends <span class="chem">(2, -4)</span> to <span class="chem">(-2, -4)</span>. Then <span class="chem">y = 3(-4) - 2 = -14</span>, so <span class="chem">Q = (-2, -14)</span> and its <span class="chem">y</span>-coordinate is <span class="chem">-14</span>.</p>
      solution: "<p>대칭이동으로 <span class=\"chem\">(2, -4)</span>는 <span class=\"chem\">(-2, -4)</span>로 옮겨져요. 그다음 <span class=\"chem\">y = 3(-4) - 2 = -14</span>이므로 <span class=\"chem\">Q = (-2, -14)</span>이고, 그 <span class=\"chem\">y</span>좌표는 <span class=\"chem\">-14</span>예요.</p>",
    },

    // ── t2-3-q045 · short · exam · SL · SL 2.11 · 5 marks
    "t2-3-q045": {
      // EN: <p>(a) Write <span class="chem">2x^2 - 12x + 13</span> in the form <span class="chem">a(x - h)^2 + k</span>. <strong>[2 marks]</strong></p><p>(b) Hence describe a sequence of transformations that maps the graph of <span class="chem">y = x^2</span> onto the graph of <span class="chem">y = 2x^2 - 12x + 13</span>. <strong>[3 marks]</strong></p>
      stem: "<p>(a) <span class=\"chem\">2x^2 - 12x + 13</span>을 <span class=\"chem\">a(x - h)^2 + k</span>의 꼴로 나타내시오. <strong>[2 marks]</strong></p><p>(b) 이를 이용하여 (Hence) <span class=\"chem\">y = x^2</span>의 그래프를 <span class=\"chem\">y = 2x^2 - 12x + 13</span>의 그래프로 옮기는 변환의 순서를 설명하시오 (Describe). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Take out the factor <span class="chem">2</span> from the <span class="chem">x</span> terms first: <span class="chem">2(x^2 - 6x) + 13</span>.
        "먼저 <span class=\"chem\">x</span>가 있는 항에서 <span class=\"chem\">2</span>를 묶어 내세요: <span class=\"chem\">2(x^2 - 6x) + 13</span>.",
        // EN: Read <span class="chem">a(x - h)^2 + k</span> as: translate <span class="chem">h</span> horizontally, stretch vertically by <span class="chem">a</span>, then translate <span class="chem">k</span> vertically.
        "<span class=\"chem\">a(x - h)^2 + k</span>는 다음과 같이 읽어요: 수평으로 <span class=\"chem\">h</span>만큼 평행이동하고, 수직으로 <span class=\"chem\">a</span>배 확대한 다음, 수직으로 <span class=\"chem\">k</span>만큼 평행이동해요.",
      ],
      // EN: <p>(a) <span class="chem">2x^2 - 12x + 13 = 2(x^2 - 6x + 9) - 18 + 13 = 2(x - 3)^2 - 5</span>.</p><p>(b) Translate <span class="chem">3</span> right (<span class="chem">y = (x - 3)^2</span>), stretch vertically by factor <span class="chem">2</span> (<span class="chem">y = 2(x - 3)^2</span>), then translate <span class="chem">5</span> down. If you translate down before stretching, the stretch would double the shift to <span class="chem">-10</span>, which is wrong.</p>
      solution: "<p>(a) <span class=\"chem\">2x^2 - 12x + 13 = 2(x^2 - 6x + 9) - 18 + 13 = 2(x - 3)^2 - 5</span>.</p><p>(b) 오른쪽으로 <span class=\"chem\">3</span>만큼 평행이동하고(<span class=\"chem\">y = (x - 3)^2</span>), 수직으로 배율 <span class=\"chem\">2</span>만큼 확대한 다음(<span class=\"chem\">y = 2(x - 3)^2</span>), 아래로 <span class=\"chem\">5</span>만큼 평행이동해요. 확대하기 전에 아래로 이동하면 확대 때문에 이동량이 두 배인 <span class=\"chem\">-10</span>이 되어 틀려요.</p>",
      // EN: <p>(a) <span class="chem">2(x - 3)^2 - 5</span>. (b) Translation of <span class="chem">3</span> units right (horizontal translation), vertical stretch with scale factor <span class="chem">2</span>, then translation of <span class="chem">5</span> units down. (The vertical stretch must come before the downward translation.)</p>
      answer: "<p>(a) <span class=\"chem\">2(x - 3)^2 - 5</span>. (b) 오른쪽으로 <span class=\"chem\">3</span>만큼 평행이동(수평 평행이동), 배율 <span class=\"chem\">2</span>의 수직 확대, 이어서 아래로 <span class=\"chem\">5</span>만큼 평행이동. (수직 확대는 아래로의 평행이동보다 먼저 해야 함.)</p>",
      markscheme: [
        // EN: M1: (a) completes the square: <span class="chem">2(x^2 - 6x) + 13 = 2((x - 3)^2 - 9) + 13</span>.
        "M1: (a) 완전제곱식으로 변형함: <span class=\"chem\">2(x^2 - 6x) + 13 = 2((x - 3)^2 - 9) + 13</span>.",
        // EN: A1: (a) <span class="chem">2(x - 3)^2 - 5</span>.
        "A1: (a) <span class=\"chem\">2(x - 3)^2 - 5</span>.",
        // EN: A1: (b) horizontal translation of <span class="chem">3</span> units to the right.
        "A1: (b) 오른쪽으로 <span class=\"chem\">3</span>만큼 수평 평행이동.",
        // EN: A1: (b) vertical stretch with scale factor <span class="chem">2</span>.
        "A1: (b) 배율 <span class=\"chem\">2</span>의 수직 확대.",
        // EN: A1: (b) vertical translation of <span class="chem">5</span> units down, applied after the stretch.
        "A1: (b) 확대한 뒤에, 아래로 <span class=\"chem\">5</span>만큼 수직 평행이동.",
      ],
    },

    // ── t2-3-q046 · numeric · challenge · SL · SL 2.11 · 4 marks
    "t2-3-q046": {
      // EN: <p>Let <span class="chem">f(x) = x^2 - 4x</span>. The graph of <span class="chem">y = f(x)</span> is reflected in the <span class="chem">y</span>-axis, then translated <span class="chem">3</span> units to the right, then stretched vertically with scale factor <span class="chem">2</span>, giving the graph of <span class="chem">y = g(x)</span>. Find the <span class="chem">y</span>-intercept of the graph of <span class="chem">g</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = x^2 - 4x</span>라 하자. <span class=\"chem\">y = f(x)</span>의 그래프를 <span class=\"chem\">y</span>축에 대하여 대칭이동하고, 오른쪽으로 <span class=\"chem\">3</span>만큼 평행이동한 다음, 배율 <span class=\"chem\">2</span>로 수직 확대하면 <span class=\"chem\">y = g(x)</span>의 그래프가 된다. <span class=\"chem\">g</span>의 그래프의 <span class=\"chem\">y</span>절편을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: build <span class="chem">g(x)</span> one step at a time, in the order given. Each horizontal step replaces <span class="chem">x</span> in the <strong>current</strong> expression, then find <span class="chem">g(0)</span>.
        "해석: 주어진 순서대로 한 단계씩 <span class=\"chem\">g(x)</span>를 세우세요. 수평 방향의 각 단계는 <strong>현재</strong> 식의 <span class=\"chem\">x</span>를 바꾸고, 그다음 <span class=\"chem\">g(0)</span>을 구하세요.",
        // EN: Reflection in the <span class="chem">y</span>-axis: <span class="chem">f(-x)</span>. A translation of <span class="chem">3</span> right then replaces <span class="chem">x</span> by <span class="chem">x - 3</span>: <span class="chem">f(-(x - 3)) = f(3 - x)</span>, not <span class="chem">f(-x - 3)</span>.
        "<span class=\"chem\">y</span>축에 대한 대칭이동: <span class=\"chem\">f(-x)</span>. 이어서 오른쪽으로 <span class=\"chem\">3</span>만큼 평행이동하면 <span class=\"chem\">x</span>를 <span class=\"chem\">x - 3</span>으로 바꿔요: <span class=\"chem\">f(-(x - 3)) = f(3 - x)</span>이고, <span class=\"chem\">f(-x - 3)</span>가 아니에요.",
        // EN: So <span class="chem">g(x) = 2f(3 - x)</span> and <span class="chem">g(0) = 2f(3)</span>.
        "따라서 <span class=\"chem\">g(x) = 2f(3 - x)</span>이고 <span class=\"chem\">g(0) = 2f(3)</span>이에요.",
      ],
      // EN: <p><strong>Decode.</strong> Translate words into function notation in order; the translation acts on <span class="chem">x</span>, not on <span class="chem">-x</span>.</p><p>Reflect: <span class="chem">f(-x)</span>. Translate <span class="chem">3</span> right: <span class="chem">f(-(x - 3)) = f(3 - x)</span>. Stretch: <span class="chem">g(x) = 2f(3 - x)</span>. So <span class="chem">g(0) = 2f(3) = 2(9 - 12) = -6</span>.</p><p>Common slip: writing <span class="chem">f(-x - 3)</span> gives <span class="chem">2f(-3) = 2(9 + 12) = 42</span>, which is the translation applied before the reflection.</p>
      solution: "<p><strong>해석.</strong> 말로 된 설명을 순서대로 함수 기호로 옮기세요. 평행이동은 <span class=\"chem\">-x</span>가 아니라 <span class=\"chem\">x</span>에 작용해요.</p><p>대칭이동: <span class=\"chem\">f(-x)</span>. 오른쪽으로 <span class=\"chem\">3</span>만큼 평행이동: <span class=\"chem\">f(-(x - 3)) = f(3 - x)</span>. 확대: <span class=\"chem\">g(x) = 2f(3 - x)</span>. 따라서 <span class=\"chem\">g(0) = 2f(3) = 2(9 - 12) = -6</span>이에요.</p><p>흔한 실수: <span class=\"chem\">f(-x - 3)</span>라고 쓰면 <span class=\"chem\">2f(-3) = 2(9 + 12) = 42</span>가 되는데, 이는 대칭이동보다 평행이동을 먼저 한 결과예요.</p>",
    },

    // ── t2-3-q047 · numeric · exam · AHL · AHL 2.12 · 4 marks
    "t2-3-q047": {
      // EN: <p>The equation <span class="chem">2x^3 - 7x^2 + kx + 6 = 0</span> has roots <span class="chem">alpha</span>, <span class="chem">beta</span> and <span class="chem">gamma</span>. Given that <span class="chem">1/alpha + 1/beta + 1/gamma = 2</span>, find the value of <span class="chem">k</span>.</p>
      stem: "<p>방정식 <span class=\"chem\">2x^3 - 7x^2 + kx + 6 = 0</span>의 근을 <span class=\"chem\">alpha</span>, <span class=\"chem\">beta</span>, <span class=\"chem\">gamma</span>라 하자. <span class=\"chem\">1/alpha + 1/beta + 1/gamma = 2</span>일 때, <span class=\"chem\">k</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Write the sum of reciprocals over a common denominator: <span class="chem">(beta gamma + alpha gamma + alpha beta)/(alpha beta gamma)</span>.
        "역수의 합을 통분하세요: <span class=\"chem\">(beta gamma + alpha gamma + alpha beta)/(alpha beta gamma)</span>.",
        // EN: For a cubic <span class="chem">ax^3 + bx^2 + cx + d</span>: <span class="chem">alpha beta + beta gamma + gamma alpha = c/a</span> and <span class="chem">alpha beta gamma = -d/a</span>.
        "삼차식 <span class=\"chem\">ax^3 + bx^2 + cx + d</span>에 대하여: <span class=\"chem\">alpha beta + beta gamma + gamma alpha = c/a</span>이고 <span class=\"chem\">alpha beta gamma = -d/a</span>예요.",
      ],
      // EN: <p><span class="chem">alpha beta + beta gamma + gamma alpha = k/2</span> and <span class="chem">alpha beta gamma = -6/2 = -3</span>. Then <span class="chem">1/alpha + 1/beta + 1/gamma = (k/2)/(-3) = -k/6 = 2</span>, so <span class="chem">k = -12</span>.</p>
      solution: "<p><span class=\"chem\">alpha beta + beta gamma + gamma alpha = k/2</span>이고 <span class=\"chem\">alpha beta gamma = -6/2 = -3</span>이에요. 그러면 <span class=\"chem\">1/alpha + 1/beta + 1/gamma = (k/2)/(-3) = -k/6 = 2</span>이므로 <span class=\"chem\">k = -12</span>예요.</p>",
    },

    // ── t2-3-q048 · short · challenge · AHL · AHL 2.12 · 6 marks
    "t2-3-q048": {
      // EN: <p>The three roots of <span class="chem">x^3 - 12x^2 + kx - 28 = 0</span> form an arithmetic sequence.</p><p>(a) By writing the roots as <span class="chem">m - d</span>, <span class="chem">m</span> and <span class="chem">m + d</span>, show that <span class="chem">m = 4</span>. <strong>[2 marks]</strong></p><p>(b) Hence find the three roots and the value of <span class="chem">k</span>. <strong>[4 marks]</strong></p>
      stem: "<p><span class=\"chem\">x^3 - 12x^2 + kx - 28 = 0</span>의 세 근은 등차수열을 이룬다.</p><p>(a) 근을 <span class=\"chem\">m - d</span>, <span class=\"chem\">m</span>, <span class=\"chem\">m + d</span>로 놓아 <span class=\"chem\">m = 4</span>임을 보이시오 (Show that). <strong>[2 marks]</strong></p><p>(b) 이를 이용하여 (Hence) 세 근과 <span class=\"chem\">k</span>의 값을 구하시오 (Find). <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: "roots form an arithmetic sequence" is information about the roots, so use the sum and product of roots, not the Factor Theorem.
        "해석: \"근이 등차수열을 이룬다\"는 근에 대한 정보이므로, 인수정리가 아니라 근의 합과 곱을 사용하세요.",
        // EN: The sum of the roots is <span class="chem">-(-12)/1 = 12</span>, and with <span class="chem">m - d, m, m + d</span> the <span class="chem">d</span> terms cancel.
        "근의 합은 <span class=\"chem\">-(-12)/1 = 12</span>이고, <span class=\"chem\">m - d, m, m + d</span>에서는 <span class=\"chem\">d</span> 항이 소거돼요.",
        // EN: The product of the roots is <span class="chem">-(-28)/1 = 28</span>. Then <span class="chem">k</span> is the sum of the roots multiplied in pairs.
        "근의 곱은 <span class=\"chem\">-(-28)/1 = 28</span>이에요. 그리고 <span class=\"chem\">k</span>는 두 근씩 곱한 것의 합이에요.",
      ],
      // EN: <p><strong>Decode.</strong> Information about the pattern of the roots means using the formula-booklet sum and product of roots.</p><p>(a) Sum: <span class="chem">3m = 12</span>, so <span class="chem">m = 4</span>.</p><p>(b) Product: <span class="chem">4(16 - d^2) = 28</span>, so <span class="chem">d^2 = 9</span> and the roots are <span class="chem">1, 4, 7</span> (either sign of <span class="chem">d</span> gives the same set). Then <span class="chem">k = 1(4) + 4(7) + 7(1) = 39</span>. Check: <span class="chem">(x - 1)(x - 4)(x - 7) = x^3 - 12x^2 + 39x - 28</span>.</p>
      solution: "<p><strong>해석.</strong> 근의 배열 규칙에 대한 정보가 있으면 공식집의 근의 합과 곱을 사용해요.</p><p>(a) 합: <span class=\"chem\">3m = 12</span>이므로 <span class=\"chem\">m = 4</span>예요.</p><p>(b) 곱: <span class=\"chem\">4(16 - d^2) = 28</span>이므로 <span class=\"chem\">d^2 = 9</span>이고, 근은 <span class=\"chem\">1, 4, 7</span>이에요(<span class=\"chem\">d</span>의 부호가 어느 쪽이든 같은 근의 집합이 나와요). 그러면 <span class=\"chem\">k = 1(4) + 4(7) + 7(1) = 39</span>예요. 확인: <span class=\"chem\">(x - 1)(x - 4)(x - 7) = x^3 - 12x^2 + 39x - 28</span>.</p>",
      // EN: <p>(a) Sum of roots <span class="chem">3m = 12</span>, so <span class="chem">m = 4</span>. (b) Roots <span class="chem">1, 4, 7</span>; <span class="chem">k = 39</span>.</p>
      answer: "<p>(a) 근의 합 <span class=\"chem\">3m = 12</span>이므로 <span class=\"chem\">m = 4</span>. (b) 근 <span class=\"chem\">1, 4, 7</span>; <span class=\"chem\">k = 39</span>.</p>",
      markscheme: [
        // EN: M1: (a) sum of roots <span class="chem">(m - d) + m + (m + d) = 12</span>.
        "M1: (a) 근의 합 <span class=\"chem\">(m - d) + m + (m + d) = 12</span>.",
        // EN: A1: (a) <span class="chem">3m = 12</span> (so <span class="chem">m = 4</span>, AG).
        "A1: (a) <span class=\"chem\">3m = 12</span> (따라서 <span class=\"chem\">m = 4</span>, AG).",
        // EN: M1: (b) product of roots <span class="chem">(4 - d)(4)(4 + d) = 28</span>.
        "M1: (b) 근의 곱 <span class=\"chem\">(4 - d)(4)(4 + d) = 28</span>.",
        // EN: A1: (b) <span class="chem">16 - d^2 = 7</span>, so <span class="chem">d = +-3</span> and the roots are <span class="chem">1, 4, 7</span>.
        "A1: (b) <span class=\"chem\">16 - d^2 = 7</span>이므로 <span class=\"chem\">d = +-3</span>이고, 근은 <span class=\"chem\">1, 4, 7</span>.",
        // EN: M1: (b) <span class="chem">k</span> = sum of products in pairs: <span class="chem">1(4) + 4(7) + 1(7)</span>.
        "M1: (b) <span class=\"chem\">k</span> = 두 근씩 곱한 것의 합: <span class=\"chem\">1(4) + 4(7) + 1(7)</span>.",
        // EN: A1: (b) <span class="chem">k = 39</span>.
        "A1: (b) <span class=\"chem\">k = 39</span>.",
      ],
    },

    // ── t2-3-q049 · short · exam · AHL · AHL 2.12, 2.15 · 6 marks
    "t2-3-q049": {
      // EN: <p>Let <span class="chem">f(x) = -(x + 2)(x - 1)^2</span>.</p><p>(a) Sketch the graph of <span class="chem">y = f(x)</span>, showing the coordinates of all points where the graph meets the axes. <strong>[4 marks]</strong></p><p>(b) Hence solve <span class="chem">f(x) &gt;= 0</span>. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = -(x + 2)(x - 1)^2</span>라 하자.</p><p>(a) 그래프가 좌표축과 만나는 모든 점의 좌표를 나타내어 <span class=\"chem\">y = f(x)</span>의 그래프의 개형을 그리시오 (Sketch). <strong>[4 marks]</strong></p><p>(b) 이를 이용하여 (Hence) <span class=\"chem\">f(x) &gt;= 0</span>을 푸시오. <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Expand only the leading term: <span class="chem">-(x)(x^2) = -x^3</span>, so the graph starts high on the left and ends low on the right.
        "최고차항만 전개하세요: <span class=\"chem\">-(x)(x^2) = -x^3</span>이므로 그래프는 왼쪽 위에서 시작하여 오른쪽 아래에서 끝나요.",
        // EN: A single factor <span class="chem">(x + 2)</span> means the graph crosses; the squared factor <span class="chem">(x - 1)^2</span> means it touches and turns.
        "일차 인수 <span class=\"chem\">(x + 2)</span>는 그래프가 축을 지나간다는 뜻이고, 제곱 인수 <span class=\"chem\">(x - 1)^2</span>는 축에 접하고 방향을 바꾼다는 뜻이에요.",
        // EN: For (b), do not forget the isolated point where <span class="chem">f(x) = 0</span> without the graph going above the axis.
        "(b)에서는 그래프가 축 위로 올라가지 않으면서 <span class=\"chem\">f(x) = 0</span>이 되는 고립된 점을 잊지 마세요.",
      ],
      // EN: <p>(a) Leading term <span class="chem">-x^3</span>. Roots: <span class="chem">x = -2</span> (crosses), <span class="chem">x = 1</span> (double root, touches). <span class="chem">f(0) = -(2)(1) = -2</span>. Coming from the top left, the curve crosses at <span class="chem">-2</span>, dips to a minimum below the axis, rises to touch the axis at <span class="chem">(1, 0)</span>, then falls.</p><p>(b) The graph is on or above the axis for <span class="chem">x &lt;= -2</span>, and it touches the axis at <span class="chem">x = 1</span>. So <span class="chem">x &lt;= -2</span> or <span class="chem">x = 1</span>.</p>
      solution: "<p>(a) 최고차항은 <span class=\"chem\">-x^3</span>이에요. 근: <span class=\"chem\">x = -2</span>(지나감), <span class=\"chem\">x = 1</span>(중근, 접함). <span class=\"chem\">f(0) = -(2)(1) = -2</span>. 곡선은 왼쪽 위에서 내려와 <span class=\"chem\">-2</span>에서 축을 지나고, 축 아래에서 극소가 된 뒤 올라가 <span class=\"chem\">(1, 0)</span>에서 축에 접하고, 그다음 내려가요.</p><p>(b) 그래프는 <span class=\"chem\">x &lt;= -2</span>에서 축 위에 있거나 그보다 위에 있고, <span class=\"chem\">x = 1</span>에서 축에 접해요. 따라서 <span class=\"chem\">x &lt;= -2</span> 또는 <span class=\"chem\">x = 1</span>이에요.</p>",
      // EN: <p>(a) Cubic with negative leading coefficient (rises to the left, falls to the right); crosses the <span class="chem">x</span>-axis at <span class="chem">(-2, 0)</span>, touches it at <span class="chem">(1, 0)</span> (a local maximum), and meets the <span class="chem">y</span>-axis at <span class="chem">(0, -2)</span>. (b) <span class="chem">x &lt;= -2</span> or <span class="chem">x = 1</span>.</p>
      answer: "<p>(a) 최고차항의 계수가 음수인 삼차함수(왼쪽으로 올라가고 오른쪽으로 내려감); <span class=\"chem\">(-2, 0)</span>에서 <span class=\"chem\">x</span>축을 지나고, <span class=\"chem\">(1, 0)</span>에서 접하며(극대점), <span class=\"chem\">(0, -2)</span>에서 <span class=\"chem\">y</span>축과 만남. (b) <span class=\"chem\">x &lt;= -2</span> 또는 <span class=\"chem\">x = 1</span>.</p>",
      markscheme: [
        // EN: A1: (a) correct end behaviour: <span class="chem">y -&gt; +∞</span> as <span class="chem">x -&gt; -∞</span> and <span class="chem">y -&gt; -∞</span> as <span class="chem">x -&gt; +∞</span>.
        "A1: (a) 올바른 양 끝의 모양: <span class=\"chem\">x -&gt; -∞</span>일 때 <span class=\"chem\">y -&gt; +∞</span>, <span class=\"chem\">x -&gt; +∞</span>일 때 <span class=\"chem\">y -&gt; -∞</span>.",
        // EN: A1: (a) crosses the axis at <span class="chem">(-2, 0)</span>.
        "A1: (a) <span class=\"chem\">(-2, 0)</span>에서 축을 지남.",
        // EN: A1: (a) touches the axis at <span class="chem">(1, 0)</span> (repeated root, turning point).
        "A1: (a) <span class=\"chem\">(1, 0)</span>에서 축에 접함 (중근, 극점).",
        // EN: A1: (a) <span class="chem">y</span>-intercept <span class="chem">(0, -2)</span>.
        "A1: (a) <span class=\"chem\">y</span>절편 <span class=\"chem\">(0, -2)</span>.",
        // EN: A1: (b) <span class="chem">x &lt;= -2</span>.
        "A1: (b) <span class=\"chem\">x &lt;= -2</span>.",
        // EN: A1: (b) or <span class="chem">x = 1</span>.
        "A1: (b) 또는 <span class=\"chem\">x = 1</span>.",
      ],
    },

    // ── t2-3-q050 · short · exam · AHL · AHL 2.13 · 6 marks
    "t2-3-q050": {
      // EN: <p>Let <span class="chem">f(x) = (x + 1)/(x^2 - x - 6)</span>.</p><p>(a) Write down the equations of the vertical asymptotes and the horizontal asymptote of the graph of <span class="chem">f</span>. <strong>[3 marks]</strong></p><p>(b) Sketch the graph of <span class="chem">y = f(x)</span>, showing its asymptotes and the coordinates of its axis intercepts. <strong>[3 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = (x + 1)/(x^2 - x - 6)</span>이라 하자.</p><p>(a) <span class=\"chem\">f</span>의 그래프의 수직점근선과 수평점근선의 방정식을 쓰시오 (Write down). <strong>[3 marks]</strong></p><p>(b) 점근선과 좌표축과의 교점의 좌표를 나타내어 <span class=\"chem\">y = f(x)</span>의 그래프의 개형을 그리시오 (Sketch). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Factorise the denominator: <span class="chem">(x - 3)(x + 2)</span>. Check the numerator does not cancel a factor.
        "분모를 인수분해하세요: <span class=\"chem\">(x - 3)(x + 2)</span>. 분자가 인수와 약분되지 않는지 확인하세요.",
        // EN: Make a sign table of <span class="chem">(x + 1)/((x - 3)(x + 2))</span> on the four intervals cut by <span class="chem">-2, -1, 3</span>.
        "<span class=\"chem\">-2, -1, 3</span>로 나뉜 네 구간에서 <span class=\"chem\">(x + 1)/((x - 3)(x + 2))</span>의 부호표를 만드세요.",
      ],
      // EN: <p>(a) <span class="chem">x^2 - x - 6 = (x - 3)(x + 2)</span>, so the vertical asymptotes are <span class="chem">x = 3</span> and <span class="chem">x = -2</span>. The numerator has lower degree, so <span class="chem">y = 0</span> is the horizontal asymptote.</p><p>(b) <span class="chem">f(-1) = 0</span>, <span class="chem">f(0) = 1/(-6) = -1/6</span>. Sign: negative for <span class="chem">x &lt; -2</span>, positive on <span class="chem">(-2, -1)</span>, negative on <span class="chem">(-1, 3)</span>, positive for <span class="chem">x &gt; 3</span>. This fixes the direction of each branch near the asymptotes.</p>
      solution: "<p>(a) <span class=\"chem\">x^2 - x - 6 = (x - 3)(x + 2)</span>이므로 수직점근선은 <span class=\"chem\">x = 3</span>과 <span class=\"chem\">x = -2</span>예요. 분자의 차수가 더 낮으므로 <span class=\"chem\">y = 0</span>이 수평점근선이에요.</p><p>(b) <span class=\"chem\">f(-1) = 0</span>, <span class=\"chem\">f(0) = 1/(-6) = -1/6</span>. 부호: <span class=\"chem\">x &lt; -2</span>에서 음수, <span class=\"chem\">(-2, -1)</span>에서 양수, <span class=\"chem\">(-1, 3)</span>에서 음수, <span class=\"chem\">x &gt; 3</span>에서 양수. 이로써 점근선 근처에서 각 부분의 방향이 정해져요.</p>",
      // EN: <p>(a) <span class="chem">x = 3</span>, <span class="chem">x = -2</span>; <span class="chem">y = 0</span>. (b) Intercepts <span class="chem">(-1, 0)</span> and <span class="chem">(0, -1/6)</span>. Three branches: for <span class="chem">x &lt; -2</span> the curve is below the axis (<span class="chem">-&gt; 0^-</span> on the left, <span class="chem">-&gt; -∞</span> at <span class="chem">x = -2</span>); between the asymptotes it comes down from <span class="chem">+∞</span>, crosses at <span class="chem">(-1, 0)</span> and <span class="chem">(0, -1/6)</span> and goes to <span class="chem">-∞</span> at <span class="chem">x = 3</span>; for <span class="chem">x &gt; 3</span> it comes down from <span class="chem">+∞</span> towards <span class="chem">0^+</span>.</p>
      answer: "<p>(a) <span class=\"chem\">x = 3</span>, <span class=\"chem\">x = -2</span>; <span class=\"chem\">y = 0</span>. (b) 교점 <span class=\"chem\">(-1, 0)</span>과 <span class=\"chem\">(0, -1/6)</span>. 세 부분: <span class=\"chem\">x &lt; -2</span>에서 곡선은 축 아래에 있음(왼쪽에서 <span class=\"chem\">-&gt; 0^-</span>, <span class=\"chem\">x = -2</span>에서 <span class=\"chem\">-&gt; -∞</span>); 두 점근선 사이에서는 <span class=\"chem\">+∞</span>에서 내려와 <span class=\"chem\">(-1, 0)</span>과 <span class=\"chem\">(0, -1/6)</span>에서 축을 지나고 <span class=\"chem\">x = 3</span>에서 <span class=\"chem\">-∞</span>로 감; <span class=\"chem\">x &gt; 3</span>에서는 <span class=\"chem\">+∞</span>에서 내려와 <span class=\"chem\">0^+</span>에 가까워짐.</p>",
      markscheme: [
        // EN: A1: (a) <span class="chem">x = 3</span> and <span class="chem">x = -2</span> (from <span class="chem">x^2 - x - 6 = (x - 3)(x + 2)</span>).
        "A1: (a) <span class=\"chem\">x = 3</span>과 <span class=\"chem\">x = -2</span> (<span class=\"chem\">x^2 - x - 6 = (x - 3)(x + 2)</span>에서).",
        // EN: A1: (a) neither vertical asymptote cancels with the numerator (no hole).
        "A1: (a) 어느 수직점근선도 분자와 약분되지 않음 (구멍 없음).",
        // EN: A1: (a) <span class="chem">y = 0</span>, since the degree of the numerator is less than the degree of the denominator.
        "A1: (a) <span class=\"chem\">y = 0</span>, 분자의 차수가 분모의 차수보다 작기 때문.",
        // EN: A1: (b) intercepts <span class="chem">(-1, 0)</span> and <span class="chem">(0, -1/6)</span>.
        "A1: (b) 교점 <span class=\"chem\">(-1, 0)</span>과 <span class=\"chem\">(0, -1/6)</span>.",
        // EN: A1: (b) outer branches correct: below the axis for <span class="chem">x &lt; -2</span>, above for <span class="chem">x &gt; 3</span>, both approaching <span class="chem">y = 0</span>.
        "A1: (b) 바깥쪽 부분이 올바름: <span class=\"chem\">x &lt; -2</span>에서 축 아래, <span class=\"chem\">x &gt; 3</span>에서 축 위에 있으며 둘 다 <span class=\"chem\">y = 0</span>에 가까워짐.",
        // EN: A1: (b) middle branch from <span class="chem">+∞</span> near <span class="chem">x = -2</span> to <span class="chem">-∞</span> near <span class="chem">x = 3</span>, through both intercepts.
        "A1: (b) 가운데 부분은 <span class=\"chem\">x = -2</span> 근처의 <span class=\"chem\">+∞</span>에서 <span class=\"chem\">x = 3</span> 근처의 <span class=\"chem\">-∞</span>로 가며, 두 교점을 모두 지남.",
      ],
    },

    // ── t2-3-q051 · short · exam · AHL · AHL 2.14 · 7 marks
    "t2-3-q051": {
      // EN: <p>Let <span class="chem">f(x) = (3x + 5)/(2x - 3)</span>, <span class="chem">x != 3/2</span>.</p><p>(a) Show that <span class="chem">f(f(x)) = x</span>. <strong>[3 marks]</strong></p><p>(b) Hence write down <span class="chem">f^{-1}(x)</span>. <strong>[1 mark]</strong></p><p>(c) Find the exact <span class="chem">x</span>-coordinates of the points where the graph of <span class="chem">y = f(x)</span> meets the line <span class="chem">y = x</span>. <strong>[3 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = (3x + 5)/(2x - 3)</span>, <span class=\"chem\">x != 3/2</span>라 하자.</p><p>(a) <span class=\"chem\">f(f(x)) = x</span>임을 보이시오 (Show that). <strong>[3 marks]</strong></p><p>(b) 이를 이용하여 (Hence) <span class=\"chem\">f^{-1}(x)</span>를 쓰시오 (Write down). <strong>[1 mark]</strong></p><p>(c) <span class=\"chem\">y = f(x)</span>의 그래프와 직선 <span class=\"chem\">y = x</span>가 만나는 점의 <span class=\"chem\">x</span>좌표의 정확한 값을 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Replace every <span class="chem">x</span> in <span class="chem">f</span> by the whole fraction, then multiply top and bottom by <span class="chem">(2x - 3)</span>.
        "<span class=\"chem\">f</span>의 모든 <span class=\"chem\">x</span>를 분수 전체로 바꾸고, 분자와 분모에 <span class=\"chem\">(2x - 3)</span>을 곱하세요.",
        // EN: If <span class="chem">f(f(x)) = x</span>, then applying <span class="chem">f</span> undoes <span class="chem">f</span>: the function is its own inverse.
        "<span class=\"chem\">f(f(x)) = x</span>이면 <span class=\"chem\">f</span>를 적용하는 것은 <span class=\"chem\">f</span>를 되돌리는 것이에요: 이 함수는 자기 자신의 역함수예요.",
        // EN: For (c), cross-multiply <span class="chem">3x + 5 = x(2x - 3)</span>.
        "(c)에서는 <span class=\"chem\">3x + 5 = x(2x - 3)</span>의 분모를 없애세요.",
      ],
      // EN: <p>(a) Top: <span class="chem">3(3x + 5)/(2x - 3) + 5 = (9x + 15 + 10x - 15)/(2x - 3) = 19x/(2x - 3)</span>. Bottom: <span class="chem">2(3x + 5)/(2x - 3) - 3 = (6x + 10 - 6x + 9)/(2x - 3) = 19/(2x - 3)</span>. So <span class="chem">f(f(x)) = x</span>.</p><p>(b) <span class="chem">f</span> is self-inverse: <span class="chem">f^{-1}(x) = (3x + 5)/(2x - 3)</span>, <span class="chem">x != 3/2</span>. Its graph is symmetric in <span class="chem">y = x</span>.</p><p>(c) <span class="chem">3x + 5 = 2x^2 - 3x => 2x^2 - 6x - 5 = 0 => x = (6 +- sqrt(36 + 40))/4 = (3 +- sqrt(19))/2</span>.</p>
      solution: "<p>(a) 분자: <span class=\"chem\">3(3x + 5)/(2x - 3) + 5 = (9x + 15 + 10x - 15)/(2x - 3) = 19x/(2x - 3)</span>. 분모: <span class=\"chem\">2(3x + 5)/(2x - 3) - 3 = (6x + 10 - 6x + 9)/(2x - 3) = 19/(2x - 3)</span>. 따라서 <span class=\"chem\">f(f(x)) = x</span>예요.</p><p>(b) <span class=\"chem\">f</span>는 자기 역함수예요: <span class=\"chem\">f^{-1}(x) = (3x + 5)/(2x - 3)</span>, <span class=\"chem\">x != 3/2</span>. 그 그래프는 <span class=\"chem\">y = x</span>에 대하여 대칭이에요.</p><p>(c) <span class=\"chem\">3x + 5 = 2x^2 - 3x => 2x^2 - 6x - 5 = 0 => x = (6 +- sqrt(36 + 40))/4 = (3 +- sqrt(19))/2</span>.</p>",
      // EN: <p>(a) <span class="chem">f(f(x)) = (19x/(2x - 3))/(19/(2x - 3)) = x</span>. (b) <span class="chem">f^{-1}(x) = (3x + 5)/(2x - 3)</span>, <span class="chem">x != 3/2</span> (f is self-inverse). (c) <span class="chem">x = (3 +- sqrt(19))/2</span>.</p>
      answer: "<p>(a) <span class=\"chem\">f(f(x)) = (19x/(2x - 3))/(19/(2x - 3)) = x</span>. (b) <span class=\"chem\">f^{-1}(x) = (3x + 5)/(2x - 3)</span>, <span class=\"chem\">x != 3/2</span> (f는 자기 역함수). (c) <span class=\"chem\">x = (3 +- sqrt(19))/2</span>.</p>",
      markscheme: [
        // EN: M1: (a) substitutes: <span class="chem">f(f(x)) = (3((3x + 5)/(2x - 3)) + 5)/(2((3x + 5)/(2x - 3)) - 3)</span>.
        "M1: (a) 대입함: <span class=\"chem\">f(f(x)) = (3((3x + 5)/(2x - 3)) + 5)/(2((3x + 5)/(2x - 3)) - 3)</span>.",
        // EN: A1: (a) numerator simplifies to <span class="chem">19x/(2x - 3)</span>.
        "A1: (a) 분자를 정리하면 <span class=\"chem\">19x/(2x - 3)</span>.",
        // EN: A1: (a) denominator simplifies to <span class="chem">19/(2x - 3)</span> (dividing gives <span class="chem">f(f(x)) = x</span>, AG).
        "A1: (a) 분모를 정리하면 <span class=\"chem\">19/(2x - 3)</span> (나누면 <span class=\"chem\">f(f(x)) = x</span>, AG).",
        // EN: A1: (b) <span class="chem">f^{-1}(x) = (3x + 5)/(2x - 3)</span>, i.e. <span class="chem">f^{-1} = f</span>.
        "A1: (b) <span class=\"chem\">f^{-1}(x) = (3x + 5)/(2x - 3)</span>, 즉 <span class=\"chem\">f^{-1} = f</span>.",
        // EN: M1: (c) sets <span class="chem">(3x + 5)/(2x - 3) = x</span>, giving <span class="chem">2x^2 - 6x - 5 = 0</span>.
        "M1: (c) <span class=\"chem\">(3x + 5)/(2x - 3) = x</span>로 놓아 <span class=\"chem\">2x^2 - 6x - 5 = 0</span>을 얻음.",
        // EN: M1: (c) uses the quadratic formula: <span class="chem">x = (6 +- sqrt(76))/4</span>.
        "M1: (c) 근의 공식을 사용함: <span class=\"chem\">x = (6 +- sqrt(76))/4</span>.",
        // EN: A1: (c) <span class="chem">x = (3 +- sqrt(19))/2</span>.
        "A1: (c) <span class=\"chem\">x = (3 +- sqrt(19))/2</span>.",
      ],
    },

    // ── t2-3-q052 · numeric · challenge · AHL · AHL 2.12, 2.14 · 5 marks
    "t2-3-q052": {
      // EN: <p>A polynomial function <span class="chem">p</span> of degree <span class="chem">3</span> is an odd function. Given that <span class="chem">p(1) = -2</span> and <span class="chem">p(2) = 4</span>, find <span class="chem">p(3)</span>.</p>
      stem: "<p><span class=\"chem\">3</span>차 다항함수 <span class=\"chem\">p</span>는 홀함수이다. <span class=\"chem\">p(1) = -2</span>이고 <span class=\"chem\">p(2) = 4</span>일 때, <span class=\"chem\">p(3)</span>을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: "odd" tells you the form of the polynomial. For <span class="chem">p(-x) = -p(x)</span> to hold, every even power, including the constant term, must have coefficient <span class="chem">0</span>.
        "해석: \"홀함수\"라는 조건에서 다항식의 꼴을 알 수 있어요. <span class=\"chem\">p(-x) = -p(x)</span>가 성립하려면 상수항을 포함한 모든 짝수 차수 항의 계수가 <span class=\"chem\">0</span>이어야 해요.",
        // EN: So <span class="chem">p(x) = ax^3 + bx</span>. Use the two given values to make two equations.
        "따라서 <span class=\"chem\">p(x) = ax^3 + bx</span>예요. 주어진 두 값으로 방정식 두 개를 세우세요.",
        // EN: <span class="chem">a + b = -2</span> and <span class="chem">8a + 2b = 4</span>.
        "<span class=\"chem\">a + b = -2</span>이고 <span class=\"chem\">8a + 2b = 4</span>.",
      ],
      // EN: <p><strong>Decode.</strong> An odd polynomial contains only odd powers, so <span class="chem">p(x) = ax^3 + bx</span>.</p><p><span class="chem">p(1) = a + b = -2</span> and <span class="chem">p(2) = 8a + 2b = 4</span>. Subtracting twice the first equation from the second: <span class="chem">6a = 8</span>, so <span class="chem">a = 4/3</span> and <span class="chem">b = -10/3</span>. Then <span class="chem">p(3) = (4/3)(27) - (10/3)(3) = 36 - 10 = 26</span>.</p>
      solution: "<p><strong>해석.</strong> 홀함수인 다항식은 홀수 차수 항만 가지므로 <span class=\"chem\">p(x) = ax^3 + bx</span>예요.</p><p><span class=\"chem\">p(1) = a + b = -2</span>이고 <span class=\"chem\">p(2) = 8a + 2b = 4</span>. 둘째 식에서 첫째 식의 두 배를 빼면 <span class=\"chem\">6a = 8</span>이므로 <span class=\"chem\">a = 4/3</span>, <span class=\"chem\">b = -10/3</span>이에요. 그러면 <span class=\"chem\">p(3) = (4/3)(27) - (10/3)(3) = 36 - 10 = 26</span>이에요.</p>",
    },

    // ── t2-3-q053 · short · exam · AHL · AHL 2.15 · 5 marks
    "t2-3-q053": {
      // EN: <p>Solve the inequality <span class="chem">6/(x - 1) &gt;= x - 2</span>.</p>
      stem: "<p>부등식 <span class=\"chem\">6/(x - 1) &gt;= x - 2</span>를 푸시오.</p>",
      hints: [
        // EN: Do not multiply both sides by <span class="chem">(x - 1)</span>: its sign is unknown. Subtract <span class="chem">x - 2</span> and use a common denominator.
        "양변에 <span class=\"chem\">(x - 1)</span>을 곱하지 마세요: 그 부호를 알 수 없어요. <span class=\"chem\">x - 2</span>를 빼고 통분하세요.",
        // EN: The numerator <span class="chem">6 - (x^2 - 3x + 2) = -x^2 + 3x + 4 = -(x - 4)(x + 1)</span>.
        "분자는 <span class=\"chem\">6 - (x^2 - 3x + 2) = -x^2 + 3x + 4 = -(x - 4)(x + 1)</span>.",
      ],
      // EN: <p><span class="chem">6/(x - 1) - (x - 2) = (6 - x^2 + 3x - 2)/(x - 1) = -(x - 4)(x + 1)/(x - 1)</span>. We need <span class="chem">(x - 4)(x + 1)/(x - 1) &lt;= 0</span>. Sign diagram: negative for <span class="chem">x &lt; -1</span>, positive on <span class="chem">(-1, 1)</span>, negative on <span class="chem">(1, 4)</span>, positive for <span class="chem">x &gt; 4</span>. Including the zeros <span class="chem">-1</span> and <span class="chem">4</span> but not <span class="chem">1</span>: <span class="chem">x &lt;= -1</span> or <span class="chem">1 &lt; x &lt;= 4</span>.</p>
      solution: "<p><span class=\"chem\">6/(x - 1) - (x - 2) = (6 - x^2 + 3x - 2)/(x - 1) = -(x - 4)(x + 1)/(x - 1)</span>. <span class=\"chem\">(x - 4)(x + 1)/(x - 1) &lt;= 0</span>이어야 해요. 부호표: <span class=\"chem\">x &lt; -1</span>에서 음수, <span class=\"chem\">(-1, 1)</span>에서 양수, <span class=\"chem\">(1, 4)</span>에서 음수, <span class=\"chem\">x &gt; 4</span>에서 양수. 영점 <span class=\"chem\">-1</span>과 <span class=\"chem\">4</span>는 포함하고 <span class=\"chem\">1</span>은 포함하지 않으므로: <span class=\"chem\">x &lt;= -1</span> 또는 <span class=\"chem\">1 &lt; x &lt;= 4</span>.</p>",
      // EN: <p><span class="chem">x &lt;= -1</span> or <span class="chem">1 &lt; x &lt;= 4</span></p>
      answer: "<p><span class=\"chem\">x &lt;= -1</span> 또는 <span class=\"chem\">1 &lt; x &lt;= 4</span></p>",
      markscheme: [
        // EN: M1: moves everything to one side and combines: <span class="chem">(6 - (x - 2)(x - 1))/(x - 1) &gt;= 0</span>.
        "M1: 모든 항을 한쪽으로 옮겨 합침: <span class=\"chem\">(6 - (x - 2)(x - 1))/(x - 1) &gt;= 0</span>.",
        // EN: A1: <span class="chem">-(x - 4)(x + 1)/(x - 1) &gt;= 0</span> (or <span class="chem">(x - 4)(x + 1)/(x - 1) &lt;= 0</span>).
        "A1: <span class=\"chem\">-(x - 4)(x + 1)/(x - 1) &gt;= 0</span> (또는 <span class=\"chem\">(x - 4)(x + 1)/(x - 1) &lt;= 0</span>).",
        // EN: M1: sign diagram with critical values <span class="chem">-1, 1, 4</span>.
        "M1: 경계값 <span class=\"chem\">-1, 1, 4</span>로 부호표를 그림.",
        // EN: A1: <span class="chem">x &lt;= -1</span>.
        "A1: <span class=\"chem\">x &lt;= -1</span>.",
        // EN: A1: <span class="chem">1 &lt; x &lt;= 4</span> (with <span class="chem">x = 1</span> excluded).
        "A1: <span class=\"chem\">1 &lt; x &lt;= 4</span> (<span class=\"chem\">x = 1</span>은 제외).",
      ],
    },

    // ── t2-3-q054 · numeric · challenge · AHL · AHL 2.16 · 5 marks
    "t2-3-q054": {
      // EN: <p>Solve the equation <span class="chem">|x^2 - 6| = x</span>, and give the smallest solution.</p>
      stem: "<p>방정식 <span class=\"chem\">|x^2 - 6| = x</span>를 풀고, 가장 작은 해를 답하시오.</p>",
      hints: [
        // EN: Decode: the left side is never negative, so any solution must satisfy <span class="chem">x &gt;= 0</span>. This hidden condition removes some of the algebraic roots.
        "해석: 좌변은 결코 음수가 되지 않으므로 모든 해는 <span class=\"chem\">x &gt;= 0</span>을 만족해야 해요. 이 숨은 조건 때문에 대수적으로 구한 근 일부가 제외돼요.",
        // EN: Split into <span class="chem">x^2 - 6 = x</span> and <span class="chem">x^2 - 6 = -x</span>, and solve each quadratic.
        "<span class=\"chem\">x^2 - 6 = x</span>와 <span class=\"chem\">x^2 - 6 = -x</span>로 나누어 각 이차방정식을 푸세요.",
        // EN: You should get <span class="chem">x = 3, -2</span> and <span class="chem">x = 2, -3</span>. Check each one in the original equation.
        "<span class=\"chem\">x = 3, -2</span>와 <span class=\"chem\">x = 2, -3</span>을 얻어야 해요. 각각을 원래 방정식에 넣어 확인하세요.",
      ],
      // EN: <p><strong>Decode.</strong> <span class="chem">|x^2 - 6| &gt;= 0</span>, so <span class="chem">x &gt;= 0</span>.</p><p><span class="chem">x^2 - x - 6 = 0 => (x - 3)(x + 2) = 0 => x = 3</span> or <span class="chem">x = -2</span>. <span class="chem">x^2 + x - 6 = 0 => (x + 3)(x - 2) = 0 => x = -3</span> or <span class="chem">x = 2</span>. Rejecting the negative values: <span class="chem">x = 2</span> (<span class="chem">|4 - 6| = 2</span>) and <span class="chem">x = 3</span> (<span class="chem">|9 - 6| = 3</span>). The smallest solution is <span class="chem">2</span>; the tempting <span class="chem">-3</span> fails because <span class="chem">|9 - 6| = 3 != -3</span>.</p>
      solution: "<p><strong>해석.</strong> <span class=\"chem\">|x^2 - 6| &gt;= 0</span>이므로 <span class=\"chem\">x &gt;= 0</span>이에요.</p><p><span class=\"chem\">x^2 - x - 6 = 0 => (x - 3)(x + 2) = 0 => x = 3</span> 또는 <span class=\"chem\">x = -2</span>. <span class=\"chem\">x^2 + x - 6 = 0 => (x + 3)(x - 2) = 0 => x = -3</span> 또는 <span class=\"chem\">x = 2</span>. 음수 값을 버리면: <span class=\"chem\">x = 2</span>(<span class=\"chem\">|4 - 6| = 2</span>)와 <span class=\"chem\">x = 3</span>(<span class=\"chem\">|9 - 6| = 3</span>). 가장 작은 해는 <span class=\"chem\">2</span>예요. 고르고 싶어지는 <span class=\"chem\">-3</span>은 <span class=\"chem\">|9 - 6| = 3 != -3</span>이므로 성립하지 않아요.</p>",
    },

    // ── t2-3-q055 · short · challenge · AHL · AHL 2.16 · 8 marks
    "t2-3-q055": {
      // EN: <p>Let <span class="chem">f(x) = x^2 - 2x - 3</span>.</p><p>(a) Sketch the graph of <span class="chem">y = |f(x)|</span>, showing the coordinates of the axis intercepts and of any local maximum. <strong>[2 marks]</strong></p><p>(b) Find the value of <span class="chem">k</span> for which the equation <span class="chem">|f(x)| = k</span> has exactly three solutions. <strong>[2 marks]</strong></p><p>(c) Sketch the graph of <span class="chem">y = f(|x|)</span>, showing the coordinates of the axis intercepts and of the minimum points. <strong>[2 marks]</strong></p><p>(d) Find the value of <span class="chem">k</span> for which the equation <span class="chem">f(|x|) = k</span> has exactly three solutions. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = x^2 - 2x - 3</span>이라 하자.</p><p>(a) 좌표축과의 교점과 극대점의 좌표를 나타내어 <span class=\"chem\">y = |f(x)|</span>의 그래프의 개형을 그리시오 (Sketch). <strong>[2 marks]</strong></p><p>(b) 방정식 <span class=\"chem\">|f(x)| = k</span>가 정확히 세 개의 해를 갖도록 하는 <span class=\"chem\">k</span>의 값을 구하시오 (Find). <strong>[2 marks]</strong></p><p>(c) 좌표축과의 교점과 극소점의 좌표를 나타내어 <span class=\"chem\">y = f(|x|)</span>의 그래프의 개형을 그리시오. <strong>[2 marks]</strong></p><p>(d) 방정식 <span class=\"chem\">f(|x|) = k</span>가 정확히 세 개의 해를 갖도록 하는 <span class=\"chem\">k</span>의 값을 구하시오. <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: "exactly three solutions" means a horizontal line <span class="chem">y = k</span> meets the graph three times. Sketch first, then slide a horizontal line up and down.
        "해석: \"정확히 세 개의 해\"는 수평선 <span class=\"chem\">y = k</span>가 그래프와 세 번 만난다는 뜻이에요. 먼저 개형을 그린 다음, 수평선을 위아래로 움직여 보세요.",
        // EN: <span class="chem">f(x) = (x - 3)(x + 1) = (x - 1)^2 - 4</span>: vertex <span class="chem">(1, -4)</span>. <span class="chem">|f|</span> reflects the part below the axis; <span class="chem">f(|x|)</span> keeps the part with <span class="chem">x &gt;= 0</span> and mirrors it.
        "<span class=\"chem\">f(x) = (x - 3)(x + 1) = (x - 1)^2 - 4</span>: 꼭짓점 <span class=\"chem\">(1, -4)</span>. <span class=\"chem\">|f|</span>는 축 아래 부분을 위로 꺾어 올리고, <span class=\"chem\">f(|x|)</span>는 <span class=\"chem\">x &gt;= 0</span>인 부분을 남겨 대칭으로 옮겨요.",
        // EN: For <span class="chem">y = f(|x|)</span>, an odd number of solutions needs <span class="chem">x = 0</span> to be one of them (the others come in pairs <span class="chem">+-x</span>).
        "<span class=\"chem\">y = f(|x|)</span>에서 해의 개수가 홀수가 되려면 <span class=\"chem\">x = 0</span>이 해 중 하나여야 해요(나머지 해는 <span class=\"chem\">+-x</span> 쌍으로 나타나요).",
      ],
      // EN: <p><strong>Decode.</strong> Counting solutions means counting where a horizontal line meets each graph.</p><p>(a) <span class="chem">f(x) = (x - 3)(x + 1)</span> has vertex <span class="chem">(1, -4)</span>. In <span class="chem">|f|</span> the vertex becomes a local maximum <span class="chem">(1, 4)</span>; <span class="chem">|f(0)| = 3</span>.</p><p>(b) For <span class="chem">0 &lt; k &lt; 4</span> there are four solutions, for <span class="chem">k &gt; 4</span> two. At <span class="chem">k = 4</span> the line touches the maximum: three solutions (<span class="chem">x = 1, 1 +- 2sqrt(2)</span>).</p><p>(c) For <span class="chem">x &gt;= 0</span>, <span class="chem">f(|x|) = f(x)</span>, with minimum <span class="chem">(1, -4)</span> and intercepts <span class="chem">(0, -3)</span>, <span class="chem">(3, 0)</span>; reflect in the <span class="chem">y</span>-axis.</p><p>(d) Solutions come in pairs <span class="chem">+-x</span> unless <span class="chem">x = 0</span> is a solution, so <span class="chem">k = f(0) = -3</span>. Check: <span class="chem">x^2 - 2|x| - 3 = -3</span> gives <span class="chem">|x|(|x| - 2) = 0</span>, so <span class="chem">x = 0, +-2</span>: three solutions.</p>
      solution: "<p><strong>해석.</strong> 해의 개수를 세는 것은 수평선이 각 그래프와 만나는 점을 세는 것이에요.</p><p>(a) <span class=\"chem\">f(x) = (x - 3)(x + 1)</span>의 꼭짓점은 <span class=\"chem\">(1, -4)</span>이에요. <span class=\"chem\">|f|</span>에서는 이 꼭짓점이 극대점 <span class=\"chem\">(1, 4)</span>가 돼요; <span class=\"chem\">|f(0)| = 3</span>.</p><p>(b) <span class=\"chem\">0 &lt; k &lt; 4</span>이면 해가 네 개, <span class=\"chem\">k &gt; 4</span>이면 두 개예요. <span class=\"chem\">k = 4</span>이면 직선이 극대점에 닿아 해가 세 개예요(<span class=\"chem\">x = 1, 1 +- 2sqrt(2)</span>).</p><p>(c) <span class=\"chem\">x &gt;= 0</span>에서 <span class=\"chem\">f(|x|) = f(x)</span>이고, 극소점은 <span class=\"chem\">(1, -4)</span>, 교점은 <span class=\"chem\">(0, -3)</span>, <span class=\"chem\">(3, 0)</span>이에요. 이를 <span class=\"chem\">y</span>축에 대하여 대칭이동하세요.</p><p>(d) <span class=\"chem\">x = 0</span>이 해가 아니면 해는 <span class=\"chem\">+-x</span> 쌍으로 나타나므로 <span class=\"chem\">k = f(0) = -3</span>이에요. 확인: <span class=\"chem\">x^2 - 2|x| - 3 = -3</span>에서 <span class=\"chem\">|x|(|x| - 2) = 0</span>이므로 <span class=\"chem\">x = 0, +-2</span>: 해가 세 개예요.</p>",
      // EN: <p>(a) W-shape: <span class="chem">x</span>-intercepts <span class="chem">(-1, 0)</span>, <span class="chem">(3, 0)</span> (sharp points), <span class="chem">y</span>-intercept <span class="chem">(0, 3)</span>, local maximum <span class="chem">(1, 4)</span>. (b) <span class="chem">k = 4</span>. (c) Symmetric about the <span class="chem">y</span>-axis: minima <span class="chem">(+-1, -4)</span>, <span class="chem">x</span>-intercepts <span class="chem">(+-3, 0)</span>, <span class="chem">y</span>-intercept <span class="chem">(0, -3)</span> (a local maximum with a sharp point). (d) <span class="chem">k = -3</span>.</p>
      answer: "<p>(a) W자 모양: <span class=\"chem\">x</span>절편 <span class=\"chem\">(-1, 0)</span>, <span class=\"chem\">(3, 0)</span>(뾰족점), <span class=\"chem\">y</span>절편 <span class=\"chem\">(0, 3)</span>, 극대점 <span class=\"chem\">(1, 4)</span>. (b) <span class=\"chem\">k = 4</span>. (c) <span class=\"chem\">y</span>축에 대하여 대칭: 극소점 <span class=\"chem\">(+-1, -4)</span>, <span class=\"chem\">x</span>절편 <span class=\"chem\">(+-3, 0)</span>, <span class=\"chem\">y</span>절편 <span class=\"chem\">(0, -3)</span>(뾰족점이 있는 극대점). (d) <span class=\"chem\">k = -3</span>.</p>",
      markscheme: [
        // EN: A1: (a) part of the parabola below the axis, between <span class="chem">x = -1</span> and <span class="chem">x = 3</span>, reflected upwards, with sharp points at <span class="chem">(-1, 0)</span> and <span class="chem">(3, 0)</span>.
        "A1: (a) 포물선의 <span class=\"chem\">x = -1</span>과 <span class=\"chem\">x = 3</span> 사이에서 축 아래에 있는 부분을 위로 꺾어 올리고, <span class=\"chem\">(-1, 0)</span>과 <span class=\"chem\">(3, 0)</span>에서 뾰족점이 생김.",
        // EN: A1: (a) local maximum <span class="chem">(1, 4)</span> and <span class="chem">y</span>-intercept <span class="chem">(0, 3)</span>.
        "A1: (a) 극대점 <span class=\"chem\">(1, 4)</span>와 <span class=\"chem\">y</span>절편 <span class=\"chem\">(0, 3)</span>.",
        // EN: R1: (b) three intersections only when the line passes through the local maximum.
        "R1: (b) 교점이 세 개인 것은 직선이 극대점을 지날 때뿐임.",
        // EN: A1: (b) <span class="chem">k = 4</span>.
        "A1: (b) <span class=\"chem\">k = 4</span>.",
        // EN: A1: (c) right half is <span class="chem">y = f(x)</span> for <span class="chem">x &gt;= 0</span>, reflected in the <span class="chem">y</span>-axis.
        "A1: (c) 오른쪽 절반은 <span class=\"chem\">x &gt;= 0</span>에서의 <span class=\"chem\">y = f(x)</span>이고, 이를 <span class=\"chem\">y</span>축에 대하여 대칭이동함.",
        // EN: A1: (c) minima <span class="chem">(+-1, -4)</span>, intercepts <span class="chem">(+-3, 0)</span> and <span class="chem">(0, -3)</span>.
        "A1: (c) 극소점 <span class=\"chem\">(+-1, -4)</span>, 교점 <span class=\"chem\">(+-3, 0)</span>과 <span class=\"chem\">(0, -3)</span>.",
        // EN: R1: (d) three solutions only when the line passes through the point on the <span class="chem">y</span>-axis, <span class="chem">(0, -3)</span>.
        "R1: (d) 해가 세 개인 것은 직선이 <span class=\"chem\">y</span>축 위의 점 <span class=\"chem\">(0, -3)</span>을 지날 때뿐임.",
        // EN: A1: (d) <span class="chem">k = -3</span>.
        "A1: (d) <span class=\"chem\">k = -3</span>.",
      ],
    },

    // ── t2-3-q056 · numeric · foundation · AHL · AHL 2.16 · 2 marks
    "t2-3-q056": {
      // EN: <p>The graph of <span class="chem">y = f(x)</span> has a local maximum at <span class="chem">(2, 8)</span>. Find the <span class="chem">x</span>-coordinate of the local maximum of the graph of <span class="chem">y = f(2x + 4)</span>.</p>
      stem: "<p><span class=\"chem\">y = f(x)</span>의 그래프는 <span class=\"chem\">(2, 8)</span>에서 극대이다. <span class=\"chem\">y = f(2x + 4)</span>의 그래프의 극대점의 <span class=\"chem\">x</span>좌표를 구하시오 (Find).</p>",
      hints: [
        // EN: The new graph reaches the same height <span class="chem">8</span> when the input to <span class="chem">f</span> is <span class="chem">2</span>.
        "새 그래프는 <span class=\"chem\">f</span>의 입력값이 <span class=\"chem\">2</span>일 때 같은 높이 <span class=\"chem\">8</span>에 도달해요.",
        // EN: Solve <span class="chem">2x + 4 = 2</span>.
        "<span class=\"chem\">2x + 4 = 2</span>를 푸세요.",
      ],
      // EN: <p>The maximum of <span class="chem">f</span> occurs when its input is <span class="chem">2</span>, so <span class="chem">2x + 4 = 2 => x = -1</span>. The local maximum of <span class="chem">y = f(2x + 4)</span> is at <span class="chem">(-1, 8)</span>. (Equivalently: translate <span class="chem">4</span> left, then stretch horizontally by <span class="chem">1/2</span>: <span class="chem">(2 - 4)/2 = -1</span>.)</p>
      solution: "<p><span class=\"chem\">f</span>의 최댓값은 입력값이 <span class=\"chem\">2</span>일 때 나타나므로 <span class=\"chem\">2x + 4 = 2 => x = -1</span>이에요. <span class=\"chem\">y = f(2x + 4)</span>의 극대점은 <span class=\"chem\">(-1, 8)</span>이에요. (같은 방법으로: 왼쪽으로 <span class=\"chem\">4</span>만큼 평행이동한 다음 수평으로 <span class=\"chem\">1/2</span>배 축소하면 <span class=\"chem\">(2 - 4)/2 = -1</span>.)</p>",
    },

    // ── t2-3-q057 · numeric · exam · AHL · AHL 2.13 · 4 marks
    "t2-3-q057": {
      // EN: <p>The graph of <span class="chem">f(x) = (ax^2 + bx + 3)/(x - 1)</span>, <span class="chem">x != 1</span>, has oblique asymptote <span class="chem">y = 2x + 5</span>. Find the value of <span class="chem">b</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = (ax^2 + bx + 3)/(x - 1)</span>, <span class=\"chem\">x != 1</span>의 그래프는 사선점근선 <span class=\"chem\">y = 2x + 5</span>를 가진다. <span class=\"chem\">b</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Divide <span class="chem">ax^2 + bx + 3</span> by <span class="chem">(x - 1)</span>: the quotient is the oblique asymptote.
        "<span class=\"chem\">ax^2 + bx + 3</span>을 <span class=\"chem\">(x - 1)</span>로 나누세요: 몫이 사선점근선이에요.",
        // EN: The quotient is <span class="chem">ax + (a + b)</span>. Compare it with <span class="chem">2x + 5</span>.
        "몫은 <span class=\"chem\">ax + (a + b)</span>예요. 이를 <span class=\"chem\">2x + 5</span>와 비교하세요.",
      ],
      // EN: <p><span class="chem">ax^2 + bx + 3 = (x - 1)(ax + a + b) + (a + b + 3)</span>, so the oblique asymptote is <span class="chem">y = ax + (a + b)</span>. Matching with <span class="chem">y = 2x + 5</span>: <span class="chem">a = 2</span> and <span class="chem">a + b = 5</span>, so <span class="chem">b = 3</span>.</p>
      solution: "<p><span class=\"chem\">ax^2 + bx + 3 = (x - 1)(ax + a + b) + (a + b + 3)</span>이므로 사선점근선은 <span class=\"chem\">y = ax + (a + b)</span>예요. <span class=\"chem\">y = 2x + 5</span>와 비교하면 <span class=\"chem\">a = 2</span>, <span class=\"chem\">a + b = 5</span>이므로 <span class=\"chem\">b = 3</span>이에요.</p>",
    },

    // ── t2-3-q058 · short · challenge · AHL · AHL 2.12 · 16 marks
    "t2-3-q058": {
      // EN: <p>This investigation looks at sums of powers of the roots of a cubic without finding the roots.</p><p>The equation <span class="chem">x^3 - 4x + 1 = 0</span> has roots <span class="chem">alpha</span>, <span class="chem">beta</span>, <span class="chem">gamma</span>. Let <span class="chem">S_n = alpha^n + beta^n + gamma^n</span>.</p><p>(a) Write down the value of <span class="chem">S_1</span>. <strong>[1 mark]</strong></p><p>(b) Write down the value of <span class="chem">alpha beta + beta gamma + gamma alpha</span>, and hence show that <span class="chem">S_2 = 8</span>. <strong>[3 marks]</strong></p><p>(c) Show that <span class="chem">alpha^{n+3} = 4alpha^{n+1} - alpha^n</span>, and deduce that <span class="chem">S_{n+3} = 4S_{n+1} - S_n</span> for <span class="chem">n &gt;= 0</span>. <strong>[3 marks]</strong></p><p>(d) Find <span class="chem">S_3</span>, <span class="chem">S_4</span> and <span class="chem">S_5</span>. <strong>[3 marks]</strong></p><p>(e) Use your GDC to find the three roots, and verify your value of <span class="chem">S_4</span>. <strong>[2 marks]</strong></p><p>(f) Explain why <span class="chem">S_n</span> is an integer for every positive integer <span class="chem">n</span>. <strong>[2 marks]</strong></p><p>(g) Find the value of <span class="chem">1/alpha + 1/beta + 1/gamma</span>. <strong>[2 marks]</strong></p>
      stem: "<p>이 탐구에서는 삼차방정식의 근을 구하지 않고 근의 거듭제곱의 합을 살펴본다.</p><p>방정식 <span class=\"chem\">x^3 - 4x + 1 = 0</span>의 근을 <span class=\"chem\">alpha</span>, <span class=\"chem\">beta</span>, <span class=\"chem\">gamma</span>라 하자. <span class=\"chem\">S_n = alpha^n + beta^n + gamma^n</span>이라 하자.</p><p>(a) <span class=\"chem\">S_1</span>의 값을 쓰시오 (Write down). <strong>[1 mark]</strong></p><p>(b) <span class=\"chem\">alpha beta + beta gamma + gamma alpha</span>의 값을 쓰고, 이를 이용하여 (hence) <span class=\"chem\">S_2 = 8</span>임을 보이시오 (Show that). <strong>[3 marks]</strong></p><p>(c) <span class=\"chem\">alpha^{n+3} = 4alpha^{n+1} - alpha^n</span>임을 보이고, <span class=\"chem\">n &gt;= 0</span>에 대하여 <span class=\"chem\">S_{n+3} = 4S_{n+1} - S_n</span>임을 유도하시오 (Deduce). <strong>[3 marks]</strong></p><p>(d) <span class=\"chem\">S_3</span>, <span class=\"chem\">S_4</span>, <span class=\"chem\">S_5</span>를 구하시오 (Find). <strong>[3 marks]</strong></p><p>(e) GDC를 이용하여 세 근을 구하고, <span class=\"chem\">S_4</span>의 값을 확인하시오 (Verify). <strong>[2 marks]</strong></p><p>(f) 모든 양의 정수 <span class=\"chem\">n</span>에 대하여 <span class=\"chem\">S_n</span>이 정수인 이유를 설명하시오 (Explain). <strong>[2 marks]</strong></p><p>(g) <span class=\"chem\">1/alpha + 1/beta + 1/gamma</span>의 값을 구하시오. <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: the theme is "use the coefficients, not the roots". Part (a) and (b) are the formula-booklet sum and product of roots; (c) uses the fact that each root satisfies the equation.
        "해석: 주제는 \"근이 아니라 계수를 사용하기\"예요. (a)와 (b)는 공식집의 근의 합과 곱이고, (c)는 각 근이 방정식을 만족한다는 사실을 이용해요.",
        // EN: For <span class="chem">x^3 + 0x^2 - 4x + 1</span>: sum <span class="chem">= 0</span>, pair sum <span class="chem">= -4</span>, product <span class="chem">= -1</span>.
        "<span class=\"chem\">x^3 + 0x^2 - 4x + 1</span>에 대하여: 합 <span class=\"chem\">= 0</span>, 두 근씩 곱한 것의 합 <span class=\"chem\">= -4</span>, 곱 <span class=\"chem\">= -1</span>.",
        // EN: For (d), you need a starting value <span class="chem">S_0 = alpha^0 + beta^0 + gamma^0 = 3</span>.
        "(d)에서는 시작값 <span class=\"chem\">S_0 = alpha^0 + beta^0 + gamma^0 = 3</span>이 필요해요.",
        // EN: For (g), put the three fractions over the common denominator <span class="chem">alpha beta gamma</span>.
        "(g)에서는 세 분수를 공통분모 <span class=\"chem\">alpha beta gamma</span>로 통분하세요.",
      ],
      // EN: <p><strong>Decode.</strong> Every part replaces "find the roots" by "use the coefficients"; the GDC is only a check.</p><p>(a) <span class="chem">S_1 = alpha + beta + gamma = 0</span>. (b) Pair sum <span class="chem">= -4</span>; <span class="chem">S_2 = 0^2 - 2(-4) = 8</span>.</p><p>(c) <span class="chem">alpha^3 - 4alpha + 1 = 0 => alpha^3 = 4alpha - 1 => alpha^{n+3} = 4alpha^{n+1} - alpha^n</span>. Writing the same for <span class="chem">beta</span>, <span class="chem">gamma</span> and adding gives the recurrence.</p><p>(d) With <span class="chem">S_0 = 3</span>: <span class="chem">S_3 = 4(0) - 3 = -3</span>, <span class="chem">S_4 = 4(8) - 0 = 32</span>, <span class="chem">S_5 = 4(-3) - 8 = -20</span>. (Next: <span class="chem">S_6 = 4(32) + 3 = 131</span>.)</p><p>(e) Roots <span class="chem">-2.1149, 0.25410, 1.8608</span>; <span class="chem">(-2.1149)^4 + 0.25410^4 + 1.8608^4 ≈ 20.007 + 0.004 + 11.989 = 32.0</span>.</p><p>(f) The first three values are integers and the recurrence has integer coefficients, so by induction every <span class="chem">S_n</span> is an integer, even though the roots are irrational.</p><p>(g) <span class="chem">alpha beta gamma = -1</span>, so <span class="chem">1/alpha + 1/beta + 1/gamma = (-4)/(-1) = 4</span>.</p>
      solution: "<p><strong>해석.</strong> 모든 문항이 \"근을 구하기\" 대신 \"계수를 사용하기\"예요. GDC는 확인용일 뿐이에요.</p><p>(a) <span class=\"chem\">S_1 = alpha + beta + gamma = 0</span>. (b) 두 근씩 곱한 것의 합 <span class=\"chem\">= -4</span>; <span class=\"chem\">S_2 = 0^2 - 2(-4) = 8</span>.</p><p>(c) <span class=\"chem\">alpha^3 - 4alpha + 1 = 0 => alpha^3 = 4alpha - 1 => alpha^{n+3} = 4alpha^{n+1} - alpha^n</span>. <span class=\"chem\">beta</span>, <span class=\"chem\">gamma</span>에 대해서도 같은 식을 쓰고 더하면 점화식을 얻어요.</p><p>(d) <span class=\"chem\">S_0 = 3</span>을 이용하면: <span class=\"chem\">S_3 = 4(0) - 3 = -3</span>, <span class=\"chem\">S_4 = 4(8) - 0 = 32</span>, <span class=\"chem\">S_5 = 4(-3) - 8 = -20</span>. (다음 항: <span class=\"chem\">S_6 = 4(32) + 3 = 131</span>.)</p><p>(e) 근 <span class=\"chem\">-2.1149, 0.25410, 1.8608</span>; <span class=\"chem\">(-2.1149)^4 + 0.25410^4 + 1.8608^4 ≈ 20.007 + 0.004 + 11.989 = 32.0</span>.</p><p>(f) 처음 세 값이 정수이고 점화식의 계수가 정수이므로, 근은 무리수인데도 수학적 귀납법에 의해 모든 <span class=\"chem\">S_n</span>은 정수예요.</p><p>(g) <span class=\"chem\">alpha beta gamma = -1</span>이므로 <span class=\"chem\">1/alpha + 1/beta + 1/gamma = (-4)/(-1) = 4</span>예요.</p>",
      // EN: <p>(a) <span class="chem">S_1 = 0</span>. (b) <span class="chem">-4</span>; <span class="chem">S_2 = 0^2 - 2(-4) = 8</span>. (c) <span class="chem">alpha^3 = 4alpha - 1</span>; multiply by <span class="chem">alpha^n</span> and add the three versions. (d) <span class="chem">S_3 = -3</span>, <span class="chem">S_4 = 32</span>, <span class="chem">S_5 = -20</span>. (e) Roots <span class="chem">-2.11, 0.254, 1.86</span>; the sum of fourth powers is <span class="chem">32</span>. (f) <span class="chem">S_0 = 3</span>, <span class="chem">S_1 = 0</span>, <span class="chem">S_2 = 8</span> are integers and the recurrence uses only integer coefficients, so every later term is an integer (by induction). (g) <span class="chem">4</span>.</p>
      answer: "<p>(a) <span class=\"chem\">S_1 = 0</span>. (b) <span class=\"chem\">-4</span>; <span class=\"chem\">S_2 = 0^2 - 2(-4) = 8</span>. (c) <span class=\"chem\">alpha^3 = 4alpha - 1</span>; <span class=\"chem\">alpha^n</span>을 곱하고 세 식을 더함. (d) <span class=\"chem\">S_3 = -3</span>, <span class=\"chem\">S_4 = 32</span>, <span class=\"chem\">S_5 = -20</span>. (e) 근 <span class=\"chem\">-2.11, 0.254, 1.86</span>; 네제곱의 합은 <span class=\"chem\">32</span>. (f) <span class=\"chem\">S_0 = 3</span>, <span class=\"chem\">S_1 = 0</span>, <span class=\"chem\">S_2 = 8</span>은 정수이고 점화식은 정수 계수만 사용하므로, 그 이후의 모든 항도 정수임 (수학적 귀납법). (g) <span class=\"chem\">4</span>.</p>",
      markscheme: [
        // EN: A1: (a) <span class="chem">S_1 = -0/1 = 0</span>.
        "A1: (a) <span class=\"chem\">S_1 = -0/1 = 0</span>.",
        // EN: A1: (b) <span class="chem">alpha beta + beta gamma + gamma alpha = -4</span>.
        "A1: (b) <span class=\"chem\">alpha beta + beta gamma + gamma alpha = -4</span>.",
        // EN: M1: (b) uses <span class="chem">S_2 = (alpha + beta + gamma)^2 - 2(alpha beta + beta gamma + gamma alpha)</span>.
        "M1: (b) <span class=\"chem\">S_2 = (alpha + beta + gamma)^2 - 2(alpha beta + beta gamma + gamma alpha)</span>을 사용함.",
        // EN: A1: (b) correct substitution <span class="chem">S_2 = 0^2 - 2(-4)</span> (<span class="chem">= 8</span>, AG).
        "A1: (b) 올바른 대입 <span class=\"chem\">S_2 = 0^2 - 2(-4)</span> (<span class=\"chem\">= 8</span>, AG).",
        // EN: M1: (c) <span class="chem">alpha</span> is a root, so <span class="chem">alpha^3 = 4alpha - 1</span>.
        "M1: (c) <span class=\"chem\">alpha</span>가 근이므로 <span class=\"chem\">alpha^3 = 4alpha - 1</span>.",
        // EN: A1: (c) multiplies by <span class="chem">alpha^n</span>: <span class="chem">alpha^{n+3} = 4alpha^{n+1} - alpha^n</span>.
        "A1: (c) <span class=\"chem\">alpha^n</span>을 곱함: <span class=\"chem\">alpha^{n+3} = 4alpha^{n+1} - alpha^n</span>.",
        // EN: R1: (c) the same holds for <span class="chem">beta</span> and <span class="chem">gamma</span>; adding gives <span class="chem">S_{n+3} = 4S_{n+1} - S_n</span> (AG).
        "R1: (c) <span class=\"chem\">beta</span>와 <span class=\"chem\">gamma</span>에 대해서도 같은 식이 성립하고, 더하면 <span class=\"chem\">S_{n+3} = 4S_{n+1} - S_n</span> (AG).",
        // EN: A1: (d) <span class="chem">S_3 = 4S_1 - S_0 = 0 - 3 = -3</span> (using <span class="chem">S_0 = 3</span>).
        "A1: (d) <span class=\"chem\">S_3 = 4S_1 - S_0 = 0 - 3 = -3</span> (<span class=\"chem\">S_0 = 3</span> 사용).",
        // EN: A1: (d) <span class="chem">S_4 = 4S_2 - S_1 = 32</span>.
        "A1: (d) <span class=\"chem\">S_4 = 4S_2 - S_1 = 32</span>.",
        // EN: A1: (d) <span class="chem">S_5 = 4S_3 - S_2 = -12 - 8 = -20</span>.
        "A1: (d) <span class=\"chem\">S_5 = 4S_3 - S_2 = -12 - 8 = -20</span>.",
        // EN: A1: (e) roots <span class="chem">-2.11, 0.254, 1.86</span>.
        "A1: (e) 근 <span class=\"chem\">-2.11, 0.254, 1.86</span>.",
        // EN: A1: (e) sum of fourth powers of the stored roots <span class="chem">= 32</span>.
        "A1: (e) 저장된 근의 네제곱의 합 <span class=\"chem\">= 32</span>.",
        // EN: R1: (f) <span class="chem">S_0, S_1, S_2</span> are integers.
        "R1: (f) <span class=\"chem\">S_0, S_1, S_2</span>는 정수임.",
        // EN: R1: (f) each later term is an integer combination of earlier terms, so all are integers (induction).
        "R1: (f) 그 이후의 각 항은 앞의 항들의 정수 계수 결합이므로 모두 정수임 (수학적 귀납법).",
        // EN: M1: (g) <span class="chem">(alpha beta + beta gamma + gamma alpha)/(alpha beta gamma)</span> with <span class="chem">alpha beta gamma = -1</span>.
        "M1: (g) <span class=\"chem\">alpha beta gamma = -1</span>일 때 <span class=\"chem\">(alpha beta + beta gamma + gamma alpha)/(alpha beta gamma)</span>.",
        // EN: A1: (g) <span class="chem">(-4)/(-1) = 4</span>.
        "A1: (g) <span class=\"chem\">(-4)/(-1) = 4</span>.",
      ],
    },

    // ── t2-3-q059 · short · challenge · AHL · AHL 2.16 · 16 marks
    "t2-3-q059": {
      // EN: <p>This investigation looks at the reciprocal graphs of the family <span class="chem">f_c(x) = x^2 - 2x + c</span>, where <span class="chem">c</span> is a real constant.</p><p>(a) For <span class="chem">c = -3</span>, <span class="chem">c = 1</span> and <span class="chem">c = 5</span>, write down the number of vertical asymptotes of the graph of <span class="chem">y = 1/f_c(x)</span>. <strong>[3 marks]</strong></p><p>(b) Write <span class="chem">f_c(x)</span> in the form <span class="chem">(x - 1)^2 + q</span>, and hence state the condition on <span class="chem">c</span> for <span class="chem">y = 1/f_c(x)</span> to have exactly two vertical asymptotes. <strong>[2 marks]</strong></p><p>(c) For <span class="chem">c &gt; 1</span>, show that the graph of <span class="chem">y = 1/f_c(x)</span> has a maximum point at <span class="chem">(1, 1/(c - 1))</span>. <strong>[2 marks]</strong></p><p>The graphs of <span class="chem">y = f_c(x)</span> and <span class="chem">y = 1/f_c(x)</span> meet at <em>invariant points</em>, where <span class="chem">f_c(x) = 1</span> or <span class="chem">f_c(x) = -1</span>.</p><p>(d) Find the number of invariant points when <span class="chem">c = -3</span> and when <span class="chem">c = 1.5</span>. <strong>[3 marks]</strong></p><p>(e) Determine the number of invariant points for every value of <span class="chem">c</span>. <strong>[4 marks]</strong></p><p>(f) Find the value of <span class="chem">c</span> for which the maximum point in (c) is itself an invariant point, and check that this agrees with (e). <strong>[2 marks]</strong></p>
      stem: "<p>이 탐구에서는 <span class=\"chem\">c</span>가 실수인 상수일 때 함수족 <span class=\"chem\">f_c(x) = x^2 - 2x + c</span>의 역수 그래프를 살펴본다.</p><p>(a) <span class=\"chem\">c = -3</span>, <span class=\"chem\">c = 1</span>, <span class=\"chem\">c = 5</span> 각각에 대하여 <span class=\"chem\">y = 1/f_c(x)</span>의 그래프의 수직점근선의 개수를 쓰시오 (Write down). <strong>[3 marks]</strong></p><p>(b) <span class=\"chem\">f_c(x)</span>를 <span class=\"chem\">(x - 1)^2 + q</span>의 꼴로 나타내고, 이를 이용하여 (hence) <span class=\"chem\">y = 1/f_c(x)</span>가 정확히 두 개의 수직점근선을 갖기 위한 <span class=\"chem\">c</span>의 조건을 쓰시오 (State). <strong>[2 marks]</strong></p><p>(c) <span class=\"chem\">c &gt; 1</span>일 때, <span class=\"chem\">y = 1/f_c(x)</span>의 그래프가 <span class=\"chem\">(1, 1/(c - 1))</span>에서 극대점을 가짐을 보이시오 (Show that). <strong>[2 marks]</strong></p><p><span class=\"chem\">y = f_c(x)</span>와 <span class=\"chem\">y = 1/f_c(x)</span>의 그래프는 <em>고정점</em>에서 만나며, 고정점에서는 <span class=\"chem\">f_c(x) = 1</span> 또는 <span class=\"chem\">f_c(x) = -1</span>이다.</p><p>(d) <span class=\"chem\">c = -3</span>일 때와 <span class=\"chem\">c = 1.5</span>일 때 고정점의 개수를 구하시오 (Find). <strong>[3 marks]</strong></p><p>(e) <span class=\"chem\">c</span>의 모든 값에 대하여 고정점의 개수를 판단하시오 (Determine). <strong>[4 marks]</strong></p><p>(f) (c)의 극대점이 그 자체로 고정점이 되도록 하는 <span class=\"chem\">c</span>의 값을 구하고, 이것이 (e)와 일치하는지 확인하시오. <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: vertical asymptotes of <span class="chem">1/f</span> are the zeros of <span class="chem">f</span>; invariant points are where <span class="chem">f = +-1</span>. Each question is really "how many real roots does a quadratic have?"
        "해석: <span class=\"chem\">1/f</span>의 수직점근선은 <span class=\"chem\">f</span>의 영점이고, 고정점은 <span class=\"chem\">f = +-1</span>인 점이에요. 모든 질문은 사실 \"이차방정식이 실근을 몇 개 가지는가?\"예요.",
        // EN: Completing the square, <span class="chem">f_c(x) = (x - 1)^2 + (c - 1)</span>, so <span class="chem">f_c = k</span> becomes <span class="chem">(x - 1)^2 = k - c + 1</span>.
        "완전제곱식으로 변형하면 <span class=\"chem\">f_c(x) = (x - 1)^2 + (c - 1)</span>이므로 <span class=\"chem\">f_c = k</span>는 <span class=\"chem\">(x - 1)^2 = k - c + 1</span>이 돼요.",
        // EN: <span class="chem">(x - 1)^2 = r</span> has 2 roots if <span class="chem">r &gt; 0</span>, 1 if <span class="chem">r = 0</span> and none if <span class="chem">r &lt; 0</span>. Use <span class="chem">k = 1</span> and <span class="chem">k = -1</span> separately.
        "<span class=\"chem\">(x - 1)^2 = r</span>는 <span class=\"chem\">r &gt; 0</span>이면 근이 2개, <span class=\"chem\">r = 0</span>이면 1개, <span class=\"chem\">r &lt; 0</span>이면 없어요. <span class=\"chem\">k = 1</span>과 <span class=\"chem\">k = -1</span>을 따로 사용하세요.",
        // EN: Use your GDC to graph <span class="chem">f_c</span> and <span class="chem">1/f_c</span> for a few values of <span class="chem">c</span> to check your counts.
        "GDC로 여러 <span class=\"chem\">c</span> 값에 대해 <span class=\"chem\">f_c</span>와 <span class=\"chem\">1/f_c</span>의 그래프를 그려 센 개수를 확인하세요.",
      ],
      // EN: <p><strong>Decode.</strong> Every part reduces to counting the real roots of <span class="chem">(x - 1)^2 = r</span>.</p><p>(a) <span class="chem">c = -3</span>: zeros <span class="chem">3, -1</span> (2 asymptotes). <span class="chem">c = 1</span>: double zero at <span class="chem">1</span> (1 asymptote). <span class="chem">c = 5</span>: <span class="chem">(x - 1)^2 + 4 &gt; 0</span> (none).</p><p>(b) <span class="chem">f_c(x) = (x - 1)^2 + c - 1</span>; two zeros iff <span class="chem">c &lt; 1</span>.</p><p>(c) For <span class="chem">c &gt; 1</span>, <span class="chem">f_c &gt;= c - 1 &gt; 0</span> with equality at <span class="chem">x = 1</span>, so <span class="chem">1/f_c &lt;= 1/(c - 1)</span> with equality at <span class="chem">x = 1</span>.</p><p>(d), (e) <span class="chem">f_c = 1 &lt;=&gt; (x - 1)^2 = 2 - c</span>; <span class="chem">f_c = -1 &lt;=&gt; (x - 1)^2 = -c</span>. For <span class="chem">c = -3</span>: <span class="chem">5 &gt; 0</span> and <span class="chem">3 &gt; 0</span>, so 4 points. For <span class="chem">c = 1.5</span>: <span class="chem">0.5 &gt; 0</span> and <span class="chem">-1.5 &lt; 0</span>, so 2 points. In general: <span class="chem">c &lt; 0</span>: 4; <span class="chem">c = 0</span>: 2 + 1 = 3; <span class="chem">0 &lt; c &lt; 2</span>: 2; <span class="chem">c = 2</span>: 1; <span class="chem">c &gt; 2</span>: 0.</p><p>(f) <span class="chem">1/(c - 1) = 1 => c = 2</span>. Then <span class="chem">f_2(x) = (x - 1)^2 + 1</span> meets <span class="chem">y = 1</span> only at <span class="chem">(1, 1)</span>, matching the count of 1 in (e).</p>
      solution: "<p><strong>해석.</strong> 모든 문항은 <span class=\"chem\">(x - 1)^2 = r</span>의 실근의 개수를 세는 것으로 귀결돼요.</p><p>(a) <span class=\"chem\">c = -3</span>: 영점 <span class=\"chem\">3, -1</span> (점근선 2개). <span class=\"chem\">c = 1</span>: <span class=\"chem\">1</span>에서 중복 영점 (점근선 1개). <span class=\"chem\">c = 5</span>: <span class=\"chem\">(x - 1)^2 + 4 &gt; 0</span> (없음).</p><p>(b) <span class=\"chem\">f_c(x) = (x - 1)^2 + c - 1</span>; 영점이 두 개일 필요충분조건은 <span class=\"chem\">c &lt; 1</span>이에요.</p><p>(c) <span class=\"chem\">c &gt; 1</span>일 때 <span class=\"chem\">f_c &gt;= c - 1 &gt; 0</span>이고 등호는 <span class=\"chem\">x = 1</span>에서 성립하므로, <span class=\"chem\">1/f_c &lt;= 1/(c - 1)</span>이고 등호는 <span class=\"chem\">x = 1</span>에서 성립해요.</p><p>(d), (e) <span class=\"chem\">f_c = 1 &lt;=&gt; (x - 1)^2 = 2 - c</span>; <span class=\"chem\">f_c = -1 &lt;=&gt; (x - 1)^2 = -c</span>. <span class=\"chem\">c = -3</span>일 때: <span class=\"chem\">5 &gt; 0</span>이고 <span class=\"chem\">3 &gt; 0</span>이므로 4개의 점. <span class=\"chem\">c = 1.5</span>일 때: <span class=\"chem\">0.5 &gt; 0</span>이고 <span class=\"chem\">-1.5 &lt; 0</span>이므로 2개의 점. 일반적으로: <span class=\"chem\">c &lt; 0</span>: 4; <span class=\"chem\">c = 0</span>: 2 + 1 = 3; <span class=\"chem\">0 &lt; c &lt; 2</span>: 2; <span class=\"chem\">c = 2</span>: 1; <span class=\"chem\">c &gt; 2</span>: 0.</p><p>(f) <span class=\"chem\">1/(c - 1) = 1 => c = 2</span>. 이때 <span class=\"chem\">f_2(x) = (x - 1)^2 + 1</span>는 <span class=\"chem\">y = 1</span>과 <span class=\"chem\">(1, 1)</span>에서만 만나며, (e)의 1개라는 결과와 일치해요.</p>",
      // EN: <p>(a) <span class="chem">2</span>, <span class="chem">1</span>, <span class="chem">0</span>. (b) <span class="chem">(x - 1)^2 + c - 1</span>; two asymptotes when <span class="chem">c &lt; 1</span>. (c) For <span class="chem">c &gt; 1</span>, <span class="chem">f_c</span> has positive minimum <span class="chem">c - 1</span> at <span class="chem">x = 1</span>, so <span class="chem">1/f_c</span> has maximum <span class="chem">1/(c - 1)</span> there. (d) <span class="chem">c = -3</span>: <span class="chem">4</span>; <span class="chem">c = 1.5</span>: <span class="chem">2</span>. (e) <span class="chem">c &lt; 0</span>: 4; <span class="chem">c = 0</span>: 3; <span class="chem">0 &lt; c &lt; 2</span>: 2; <span class="chem">c = 2</span>: 1; <span class="chem">c &gt; 2</span>: 0. (f) <span class="chem">c = 2</span>, which gives exactly one invariant point <span class="chem">(1, 1)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">2</span>, <span class=\"chem\">1</span>, <span class=\"chem\">0</span>. (b) <span class=\"chem\">(x - 1)^2 + c - 1</span>; 점근선이 두 개인 것은 <span class=\"chem\">c &lt; 1</span>일 때. (c) <span class=\"chem\">c &gt; 1</span>일 때 <span class=\"chem\">f_c</span>는 <span class=\"chem\">x = 1</span>에서 양의 최솟값 <span class=\"chem\">c - 1</span>을 가지므로, <span class=\"chem\">1/f_c</span>는 그곳에서 최댓값 <span class=\"chem\">1/(c - 1)</span>을 가짐. (d) <span class=\"chem\">c = -3</span>: <span class=\"chem\">4</span>; <span class=\"chem\">c = 1.5</span>: <span class=\"chem\">2</span>. (e) <span class=\"chem\">c &lt; 0</span>: 4; <span class=\"chem\">c = 0</span>: 3; <span class=\"chem\">0 &lt; c &lt; 2</span>: 2; <span class=\"chem\">c = 2</span>: 1; <span class=\"chem\">c &gt; 2</span>: 0. (f) <span class=\"chem\">c = 2</span>, 이때 고정점은 정확히 하나 <span class=\"chem\">(1, 1)</span>임.</p>",
      markscheme: [
        // EN: A1: (a) <span class="chem">c = -3</span>: <span class="chem">f = (x - 3)(x + 1)</span>, two asymptotes.
        "A1: (a) <span class=\"chem\">c = -3</span>: <span class=\"chem\">f = (x - 3)(x + 1)</span>, 점근선 두 개.",
        // EN: A1: (a) <span class="chem">c = 1</span>: <span class="chem">f = (x - 1)^2</span>, one asymptote.
        "A1: (a) <span class=\"chem\">c = 1</span>: <span class=\"chem\">f = (x - 1)^2</span>, 점근선 한 개.",
        // EN: A1: (a) <span class="chem">c = 5</span>: <span class="chem">f &gt; 0</span> for all <span class="chem">x</span>, no asymptotes.
        "A1: (a) <span class=\"chem\">c = 5</span>: 모든 <span class=\"chem\">x</span>에 대하여 <span class=\"chem\">f &gt; 0</span>, 점근선 없음.",
        // EN: A1: (b) <span class="chem">f_c(x) = (x - 1)^2 + c - 1</span>.
        "A1: (b) <span class=\"chem\">f_c(x) = (x - 1)^2 + c - 1</span>.",
        // EN: A1: (b) two asymptotes when <span class="chem">c - 1 &lt; 0</span>, i.e. <span class="chem">c &lt; 1</span>.
        "A1: (b) 점근선이 두 개인 것은 <span class=\"chem\">c - 1 &lt; 0</span>, 즉 <span class=\"chem\">c &lt; 1</span>일 때.",
        // EN: M1: (c) <span class="chem">f_c</span> has minimum value <span class="chem">c - 1 &gt; 0</span> at <span class="chem">x = 1</span>.
        "M1: (c) <span class=\"chem\">f_c</span>는 <span class=\"chem\">x = 1</span>에서 최솟값 <span class=\"chem\">c - 1 &gt; 0</span>을 가짐.",
        // EN: R1: (c) the reciprocal of a positive minimum is a maximum, giving <span class="chem">(1, 1/(c - 1))</span> (AG).
        "R1: (c) 양의 최솟값의 역수는 최댓값이 되어 <span class=\"chem\">(1, 1/(c - 1))</span>을 얻음 (AG).",
        // EN: M1: (d) solves <span class="chem">(x - 1)^2 = 2 - c</span> and <span class="chem">(x - 1)^2 = -c</span>.
        "M1: (d) <span class=\"chem\">(x - 1)^2 = 2 - c</span>와 <span class=\"chem\">(x - 1)^2 = -c</span>를 풂.",
        // EN: A1: (d) <span class="chem">c = -3</span>: <span class="chem">2 + 2 = 4</span> points.
        "A1: (d) <span class=\"chem\">c = -3</span>: <span class=\"chem\">2 + 2 = 4</span>개의 점.",
        // EN: A1: (d) <span class="chem">c = 1.5</span>: <span class="chem">2 + 0 = 2</span> points.
        "A1: (d) <span class=\"chem\">c = 1.5</span>: <span class=\"chem\">2 + 0 = 2</span>개의 점.",
        // EN: M1: (e) counts the roots of <span class="chem">(x - 1)^2 = 2 - c</span> (2, 1, 0 as <span class="chem">c &lt; 2</span>, <span class="chem">= 2</span>, <span class="chem">&gt; 2</span>) and of <span class="chem">(x - 1)^2 = -c</span> (2, 1, 0 as <span class="chem">c &lt; 0</span>, <span class="chem">= 0</span>, <span class="chem">&gt; 0</span>).
        "M1: (e) <span class=\"chem\">(x - 1)^2 = 2 - c</span>의 근의 개수(<span class=\"chem\">c &lt; 2</span>, <span class=\"chem\">= 2</span>, <span class=\"chem\">&gt; 2</span>에 따라 2, 1, 0)와 <span class=\"chem\">(x - 1)^2 = -c</span>의 근의 개수(<span class=\"chem\">c &lt; 0</span>, <span class=\"chem\">= 0</span>, <span class=\"chem\">&gt; 0</span>에 따라 2, 1, 0)를 셈.",
        // EN: A1: (e) <span class="chem">c &lt; 0</span>: 4 and <span class="chem">c = 0</span>: 3.
        "A1: (e) <span class=\"chem\">c &lt; 0</span>: 4, <span class=\"chem\">c = 0</span>: 3.",
        // EN: A1: (e) <span class="chem">0 &lt; c &lt; 2</span>: 2.
        "A1: (e) <span class=\"chem\">0 &lt; c &lt; 2</span>: 2.",
        // EN: A1: (e) <span class="chem">c = 2</span>: 1 and <span class="chem">c &gt; 2</span>: 0.
        "A1: (e) <span class=\"chem\">c = 2</span>: 1, <span class=\"chem\">c &gt; 2</span>: 0.",
        // EN: A1: (f) <span class="chem">1/(c - 1) = 1 => c = 2</span>.
        "A1: (f) <span class=\"chem\">1/(c - 1) = 1 => c = 2</span>.",
        // EN: R1: (f) consistent with (e): at <span class="chem">c = 2</span> there is exactly one invariant point, <span class="chem">(1, 1)</span>.
        "R1: (f) (e)와 일치함: <span class=\"chem\">c = 2</span>일 때 고정점은 정확히 하나 <span class=\"chem\">(1, 1)</span>임.",
      ],
    },

    // ── t2-3-q060 · short · challenge · AHL · AHL 2.13, 2.14 · 15 marks
    "t2-3-q060": {
      // EN: <p>This investigation shows that functions can be split into an even part and an odd part.</p><p>For a function <span class="chem">f</span> defined for all <span class="chem">x</span> in a domain that is symmetric about <span class="chem">0</span>, define <span class="chem">E(x) = (f(x) + f(-x))/2</span> and <span class="chem">O(x) = (f(x) - f(-x))/2</span>.</p><p>(a) For <span class="chem">f(x) = x^3 + 2x^2 - 5x + 4</span>, find <span class="chem">E(x)</span> and <span class="chem">O(x)</span>. <strong>[2 marks]</strong></p><p>(b) Show that, for any such <span class="chem">f</span>, <span class="chem">E</span> is even, <span class="chem">O</span> is odd and <span class="chem">f = E + O</span>. <strong>[3 marks]</strong></p><p>(c) Suppose that <span class="chem">f = E_1 + O_1 = E_2 + O_2</span>, where <span class="chem">E_1, E_2</span> are even and <span class="chem">O_1, O_2</span> are odd. Prove that <span class="chem">E_1 = E_2</span> and <span class="chem">O_1 = O_2</span>. <strong>[3 marks]</strong></p><p>(d) For <span class="chem">f(x) = e^x</span>, write down <span class="chem">O(x)</span>, and use your GDC to solve <span class="chem">O(x) = 2</span>. <strong>[3 marks]</strong></p><p>(e) For <span class="chem">f(x) = 1/(x - 2)</span>, explain why <span class="chem">E</span> and <span class="chem">O</span> can only be defined for <span class="chem">x != +-2</span>, and find <span class="chem">E(x)</span> and <span class="chem">O(x)</span> as single fractions. <strong>[4 marks]</strong></p>
      stem: "<p>이 탐구에서는 함수를 짝함수 부분과 홀함수 부분으로 나눌 수 있음을 보인다.</p><p><span class=\"chem\">0</span>에 대하여 대칭인 정의역의 모든 <span class=\"chem\">x</span>에서 정의된 함수 <span class=\"chem\">f</span>에 대하여 <span class=\"chem\">E(x) = (f(x) + f(-x))/2</span>와 <span class=\"chem\">O(x) = (f(x) - f(-x))/2</span>를 정의한다.</p><p>(a) <span class=\"chem\">f(x) = x^3 + 2x^2 - 5x + 4</span>일 때, <span class=\"chem\">E(x)</span>와 <span class=\"chem\">O(x)</span>를 구하시오 (Find). <strong>[2 marks]</strong></p><p>(b) 이러한 임의의 <span class=\"chem\">f</span>에 대하여 <span class=\"chem\">E</span>는 짝함수, <span class=\"chem\">O</span>는 홀함수이고 <span class=\"chem\">f = E + O</span>임을 보이시오 (Show that). <strong>[3 marks]</strong></p><p>(c) <span class=\"chem\">f = E_1 + O_1 = E_2 + O_2</span>라고 가정하자. 여기서 <span class=\"chem\">E_1, E_2</span>는 짝함수이고 <span class=\"chem\">O_1, O_2</span>는 홀함수이다. <span class=\"chem\">E_1 = E_2</span>이고 <span class=\"chem\">O_1 = O_2</span>임을 증명하시오 (Prove). <strong>[3 marks]</strong></p><p>(d) <span class=\"chem\">f(x) = e^x</span>일 때, <span class=\"chem\">O(x)</span>를 쓰고 (Write down), GDC를 이용하여 <span class=\"chem\">O(x) = 2</span>를 푸시오. <strong>[3 marks]</strong></p><p>(e) <span class=\"chem\">f(x) = 1/(x - 2)</span>일 때, <span class=\"chem\">E</span>와 <span class=\"chem\">O</span>가 <span class=\"chem\">x != +-2</span>에서만 정의될 수 있는 이유를 설명하고 (Explain), <span class=\"chem\">E(x)</span>와 <span class=\"chem\">O(x)</span>를 각각 하나의 분수로 구하시오. <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: this is the odd/even test <span class="chem">f(-x) = +-f(x)</span> used as a tool. In each part, replace <span class="chem">x</span> by <span class="chem">-x</span> and simplify.
        "해석: 이것은 짝함수·홀함수 판정 <span class=\"chem\">f(-x) = +-f(x)</span>를 도구로 사용하는 문제예요. 각 문항에서 <span class=\"chem\">x</span>를 <span class=\"chem\">-x</span>로 바꾸고 정리하세요.",
        // EN: For a polynomial, <span class="chem">E</span> keeps the even powers (and the constant) and <span class="chem">O</span> keeps the odd powers.
        "다항식에서 <span class=\"chem\">E</span>는 짝수 차수 항(과 상수항)을, <span class=\"chem\">O</span>는 홀수 차수 항을 남겨요.",
        // EN: In (c), a function that is both even and odd satisfies <span class="chem">g(x) = -g(x)</span>.
        "(c)에서 짝함수이면서 홀함수인 함수는 <span class=\"chem\">g(x) = -g(x)</span>를 만족해요.",
        // EN: In (e), <span class="chem">1/(x - 2) - 1/(x + 2) = 4/(x^2 - 4)</span> and <span class="chem">1/(x - 2) + 1/(x + 2) = 2x/(x^2 - 4)</span>.
        "(e)에서는 <span class=\"chem\">1/(x - 2) - 1/(x + 2) = 4/(x^2 - 4)</span>이고 <span class=\"chem\">1/(x - 2) + 1/(x + 2) = 2x/(x^2 - 4)</span>예요.",
      ],
      // EN: <p><strong>Decode.</strong> Everything follows from substituting <span class="chem">-x</span> and comparing with the definitions of even and odd.</p><p>(a) <span class="chem">f(-x) = -x^3 + 2x^2 + 5x + 4</span>, so <span class="chem">E = 2x^2 + 4</span>, <span class="chem">O = x^3 - 5x</span>.</p><p>(b) Swapping <span class="chem">x</span> and <span class="chem">-x</span> leaves <span class="chem">E</span> unchanged and changes the sign of <span class="chem">O</span>; adding gives <span class="chem">f</span>.</p><p>(c) <span class="chem">g = E_1 - E_2 = O_2 - O_1</span> is even (difference of even functions) and odd (difference of odd functions). So <span class="chem">g(x) = g(-x) = -g(x)</span>, hence <span class="chem">g(x) = 0</span> for all <span class="chem">x</span>: the split is unique.</p><p>(d) <span class="chem">O(x) = (e^x - e^{-x})/2</span>. The GDC gives <span class="chem">x ≈ 1.44</span> (exactly <span class="chem">ln(2 + sqrt(5))</span>).</p><p>(e) Because <span class="chem">E</span> and <span class="chem">O</span> use both <span class="chem">f(x)</span> and <span class="chem">f(-x)</span>, we need <span class="chem">x != 2</span> and <span class="chem">-x != 2</span>. With <span class="chem">f(-x) = -1/(x + 2)</span>: <span class="chem">E = (1/2)(4/(x^2 - 4)) = 2/(x^2 - 4)</span> (even) and <span class="chem">O = (1/2)(2x/(x^2 - 4)) = x/(x^2 - 4)</span> (odd).</p>
      solution: "<p><strong>해석.</strong> 모든 것은 <span class=\"chem\">-x</span>를 대입하여 짝함수와 홀함수의 정의와 비교하는 것에서 나와요.</p><p>(a) <span class=\"chem\">f(-x) = -x^3 + 2x^2 + 5x + 4</span>이므로 <span class=\"chem\">E = 2x^2 + 4</span>, <span class=\"chem\">O = x^3 - 5x</span>예요.</p><p>(b) <span class=\"chem\">x</span>와 <span class=\"chem\">-x</span>를 바꾸면 <span class=\"chem\">E</span>는 변하지 않고 <span class=\"chem\">O</span>는 부호가 바뀌어요. 더하면 <span class=\"chem\">f</span>예요.</p><p>(c) <span class=\"chem\">g = E_1 - E_2 = O_2 - O_1</span>는 짝함수(짝함수의 차)이면서 홀함수(홀함수의 차)예요. 따라서 <span class=\"chem\">g(x) = g(-x) = -g(x)</span>이고, 그러므로 모든 <span class=\"chem\">x</span>에 대하여 <span class=\"chem\">g(x) = 0</span>이에요: 분해는 유일해요.</p><p>(d) <span class=\"chem\">O(x) = (e^x - e^{-x})/2</span>. GDC로 <span class=\"chem\">x ≈ 1.44</span>(정확한 값은 <span class=\"chem\">ln(2 + sqrt(5))</span>)를 얻어요.</p><p>(e) <span class=\"chem\">E</span>와 <span class=\"chem\">O</span>는 <span class=\"chem\">f(x)</span>와 <span class=\"chem\">f(-x)</span>를 모두 사용하므로 <span class=\"chem\">x != 2</span>이고 <span class=\"chem\">-x != 2</span>이어야 해요. <span class=\"chem\">f(-x) = -1/(x + 2)</span>를 이용하면: <span class=\"chem\">E = (1/2)(4/(x^2 - 4)) = 2/(x^2 - 4)</span>(짝함수)와 <span class=\"chem\">O = (1/2)(2x/(x^2 - 4)) = x/(x^2 - 4)</span>(홀함수).</p>",
      // EN: <p>(a) <span class="chem">E(x) = 2x^2 + 4</span>, <span class="chem">O(x) = x^3 - 5x</span>. (b) <span class="chem">E(-x) = (f(-x) + f(x))/2 = E(x)</span>; <span class="chem">O(-x) = (f(-x) - f(x))/2 = -O(x)</span>; <span class="chem">E + O = f</span>. (c) <span class="chem">E_1 - E_2 = O_2 - O_1 = g</span> is both even and odd, so <span class="chem">g(x) = g(-x) = -g(x)</span>, giving <span class="chem">g = 0</span>. (d) <span class="chem">O(x) = (e^x - e^{-x})/2</span>; <span class="chem">x ≈ 1.44</span>. (e) The domain must be symmetric: <span class="chem">f(-x)</span> needs <span class="chem">x != -2</span>. <span class="chem">E(x) = 2/(x^2 - 4)</span>, <span class="chem">O(x) = x/(x^2 - 4)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">E(x) = 2x^2 + 4</span>, <span class=\"chem\">O(x) = x^3 - 5x</span>. (b) <span class=\"chem\">E(-x) = (f(-x) + f(x))/2 = E(x)</span>; <span class=\"chem\">O(-x) = (f(-x) - f(x))/2 = -O(x)</span>; <span class=\"chem\">E + O = f</span>. (c) <span class=\"chem\">E_1 - E_2 = O_2 - O_1 = g</span>는 짝함수이면서 홀함수이므로 <span class=\"chem\">g(x) = g(-x) = -g(x)</span>이고, <span class=\"chem\">g = 0</span>을 얻음. (d) <span class=\"chem\">O(x) = (e^x - e^{-x})/2</span>; <span class=\"chem\">x ≈ 1.44</span>. (e) 정의역은 대칭이어야 함: <span class=\"chem\">f(-x)</span>에는 <span class=\"chem\">x != -2</span>가 필요함. <span class=\"chem\">E(x) = 2/(x^2 - 4)</span>, <span class=\"chem\">O(x) = x/(x^2 - 4)</span>.</p>",
      markscheme: [
        // EN: A1: (a) <span class="chem">E(x) = 2x^2 + 4</span>.
        "A1: (a) <span class=\"chem\">E(x) = 2x^2 + 4</span>.",
        // EN: A1: (a) <span class="chem">O(x) = x^3 - 5x</span>.
        "A1: (a) <span class=\"chem\">O(x) = x^3 - 5x</span>.",
        // EN: A1: (b) <span class="chem">E(-x) = (f(-x) + f(x))/2 = E(x)</span>, so E is even.
        "A1: (b) <span class=\"chem\">E(-x) = (f(-x) + f(x))/2 = E(x)</span>이므로 E는 짝함수.",
        // EN: A1: (b) <span class="chem">O(-x) = (f(-x) - f(x))/2 = -O(x)</span>, so O is odd.
        "A1: (b) <span class=\"chem\">O(-x) = (f(-x) - f(x))/2 = -O(x)</span>이므로 O는 홀함수.",
        // EN: A1: (b) <span class="chem">E(x) + O(x) = 2f(x)/2 = f(x)</span>.
        "A1: (b) <span class=\"chem\">E(x) + O(x) = 2f(x)/2 = f(x)</span>.",
        // EN: M1: (c) lets <span class="chem">g = E_1 - E_2 = O_2 - O_1</span>, which is both even and odd.
        "M1: (c) 짝함수이면서 홀함수인 <span class=\"chem\">g = E_1 - E_2 = O_2 - O_1</span>로 놓음.",
        // EN: M1: (c) <span class="chem">g(-x) = g(x)</span> and <span class="chem">g(-x) = -g(x)</span>, so <span class="chem">2g(x) = 0</span>.
        "M1: (c) <span class=\"chem\">g(-x) = g(x)</span>이고 <span class=\"chem\">g(-x) = -g(x)</span>이므로 <span class=\"chem\">2g(x) = 0</span>.",
        // EN: R1: (c) <span class="chem">g = 0</span>, so <span class="chem">E_1 = E_2</span> and <span class="chem">O_1 = O_2</span>.
        "R1: (c) <span class=\"chem\">g = 0</span>이므로 <span class=\"chem\">E_1 = E_2</span>이고 <span class=\"chem\">O_1 = O_2</span>.",
        // EN: A1: (d) <span class="chem">O(x) = (e^x - e^{-x})/2</span>.
        "A1: (d) <span class=\"chem\">O(x) = (e^x - e^{-x})/2</span>.",
        // EN: M1: (d) solves <span class="chem">(e^x - e^{-x})/2 = 2</span> graphically.
        "M1: (d) <span class=\"chem\">(e^x - e^{-x})/2 = 2</span>를 그래프로 풂.",
        // EN: A1: (d) <span class="chem">x = 1.44</span>.
        "A1: (d) <span class=\"chem\">x = 1.44</span>.",
        // EN: R1: (e) <span class="chem">E(x)</span> and <span class="chem">O(x)</span> use <span class="chem">f(-x) = 1/(-x - 2)</span>, which is undefined at <span class="chem">x = -2</span>, so both <span class="chem">+-2</span> are excluded.
        "R1: (e) <span class=\"chem\">E(x)</span>와 <span class=\"chem\">O(x)</span>는 <span class=\"chem\">f(-x) = 1/(-x - 2)</span>를 사용하는데, 이는 <span class=\"chem\">x = -2</span>에서 정의되지 않으므로 <span class=\"chem\">+-2</span> 모두 제외됨.",
        // EN: M1: (e) <span class="chem">f(-x) = -1/(x + 2)</span> and combines over <span class="chem">x^2 - 4</span>.
        "M1: (e) <span class=\"chem\">f(-x) = -1/(x + 2)</span>, <span class=\"chem\">x^2 - 4</span>로 통분하여 합침.",
        // EN: A1: (e) <span class="chem">E(x) = 2/(x^2 - 4)</span>.
        "A1: (e) <span class=\"chem\">E(x) = 2/(x^2 - 4)</span>.",
        // EN: A1: (e) <span class="chem">O(x) = x/(x^2 - 4)</span>.
        "A1: (e) <span class=\"chem\">O(x) = x/(x^2 - 4)</span>.",
      ],
    },

  }
});
