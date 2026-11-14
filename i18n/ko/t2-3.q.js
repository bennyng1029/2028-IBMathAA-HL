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
