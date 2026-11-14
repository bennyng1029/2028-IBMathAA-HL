/* t2-1.q — ko question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't2-1.q', {
  questions: {

    // ── t2-1-q001 · mcq · foundation · SL · SL 2.1 · 2 marks
    "t2-1-q001": {
      // EN: <p>A line <span class="chem">L_1</span> has equation <span class="chem">2x + 5y - 10 = 0</span>. A second line <span class="chem">L_2</span> is perpendicular to <span class="chem">L_1</span> and passes through the point <span class="chem">(2, -1)</span>. What is the equation of <span class="chem">L_2</span> in general form?</p>
      stem: "<p>직선 <span class=\"chem\">L_1</span>의 방정식이 <span class=\"chem\">2x + 5y - 10 = 0</span>이에요. 또 다른 직선 <span class=\"chem\">L_2</span>는 <span class=\"chem\">L_1</span>에 수직이고 점 <span class=\"chem\">(2, -1)</span>을 지나요. 직선 <span class=\"chem\">L_2</span>의 방정식을 일반형으로 나타낸 것은 무엇인가요?</p>",
      options: [
        // EN: <span class="chem">5x - 2y - 12 = 0</span>
        "<span class=\"chem\">5x - 2y - 12 = 0</span>",
        // EN: <span class="chem">5x + 2y - 8 = 0</span>
        "<span class=\"chem\">5x + 2y - 8 = 0</span>",
        // EN: <span class="chem">2x - 5y - 9 = 0</span>
        "<span class=\"chem\">2x - 5y - 9 = 0</span>",
        // EN: <span class="chem">5x - 2y + 12 = 0</span>
        "<span class=\"chem\">5x - 2y + 12 = 0</span>",
      ],
      hints: [
        // EN: Rearrange <span class="chem">2x + 5y - 10 = 0</span> into <span class="chem">y = mx + c</span> to read off <span class="chem">m_1 = -2/5</span>.
        "<span class=\"chem\">2x + 5y - 10 = 0</span>을 <span class=\"chem\">y = mx + c</span> 꼴로 정리해 <span class=\"chem\">m_1 = -2/5</span>를 읽으세요.",
        // EN: The perpendicular gradient is <span class="chem">m_2 = -1/m_1 = 5/2</span>. Substitute <span class="chem">(2, -1)</span> into <span class="chem">y - y_1 = m_2(x - x_1)</span>.
        "수직인 직선의 기울기는 <span class=\"chem\">m_2 = -1/m_1 = 5/2</span>예요. <span class=\"chem\">y - y_1 = m_2(x - x_1)</span>에 <span class=\"chem\">(2, -1)</span>을 대입하세요.",
      ],
      // EN: <p>Rearranging <span class="chem">L_1</span> gives <span class="chem">y = -(2/5)x + 2</span>, so <span class="chem">m_1 = -2/5</span> and <span class="chem">m_2 = 5/2</span>. Using point-gradient form through <span class="chem">(2, -1)</span>: <span class="chem">y + 1 = (5/2)(x - 2) => 2y + 2 = 5x - 10 => 5x - 2y - 12 = 0</span>.</p>
      solution: "<p><span class=\"chem\">L_1</span>을 정리하면 <span class=\"chem\">y = -(2/5)x + 2</span>이므로 <span class=\"chem\">m_1 = -2/5</span>이고 <span class=\"chem\">m_2 = 5/2</span>예요. 점 <span class=\"chem\">(2, -1)</span>을 지나는 직선의 방정식은 <span class=\"chem\">y + 1 = (5/2)(x - 2) => 2y + 2 = 5x - 10 => 5x - 2y - 12 = 0</span>이에요.</p>",
      misconception: {
        // EN (option B): You flipped the gradient from −2/5 to −5/2 without changing its sign. Perpendicular gradients have product −1, so m₂ = +5/2.
        "1": "기울기 −2/5를 −5/2로 뒤집기만 하고 부호를 바꾸지 않았어요. 수직인 두 기울기의 곱은 −1이므로 m₂ = +5/2예요.",
        // EN (option C): You kept the fraction 2/5 instead of taking the reciprocal 5/2.
        "2": "역수 5/2를 취하지 않고 분수 2/5를 그대로 두었어요.",
        // EN (option D): You moved the constant to the wrong side: 5x − 2y = 12 gives 5x − 2y − 12 = 0, not + 12. Check by substituting (2, −1): 10 + 2 + 12 ≠ 0.
        "3": "상수를 이항할 때 부호를 잘못 처리했어요: 5x − 2y = 12는 5x − 2y − 12 = 0이 되고, + 12가 아니에요. (2, −1)을 대입해 확인해 보세요: 10 + 2 + 12 ≠ 0.",
      },
    },

    // ── t2-1-q002 · numeric · foundation · SL · SL 2.1 · 3 marks
    "t2-1-q002": {
      // EN: <p>The perpendicular bisector of the line segment joining <span class="chem">A(-1, 4)</span> and <span class="chem">B(5, 8)</span> intersects the <span class="chem">x</span>-axis at <span class="chem">(a, 0)</span>. Find the exact value of <span class="chem">a</span>.</p>
      stem: "<p>두 점 <span class=\"chem\">A(-1, 4)</span>와 <span class=\"chem\">B(5, 8)</span>을 잇는 선분의 수직이등분선이 <span class=\"chem\">x</span>축과 점 <span class=\"chem\">(a, 0)</span>에서 만나요. <span class=\"chem\">a</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Find the midpoint <span class="chem">M</span> of <span class="chem">A(-1, 4)</span> and <span class="chem">B(5, 8)</span> and the gradient <span class="chem">m_{AB}</span>.
        "<span class=\"chem\">A(-1, 4)</span>와 <span class=\"chem\">B(5, 8)</span>의 중점 <span class=\"chem\">M</span>과 기울기 <span class=\"chem\">m_{AB}</span>를 구하세요.",
        // EN: With <span class="chem">M(2, 6)</span> and <span class="chem">m_{perp} = -3/2</span>, substitute <span class="chem">y = 0</span> into <span class="chem">y - 6 = (-3/2)(x - 2)</span>.
        "<span class=\"chem\">M(2, 6)</span>과 <span class=\"chem\">m_{perp} = -3/2</span>를 이용해 <span class=\"chem\">y - 6 = (-3/2)(x - 2)</span>에 <span class=\"chem\">y = 0</span>을 대입하세요.",
      ],
      // EN: <p>Midpoint <span class="chem">M = ((-1+5)/2, (4+8)/2) = (2, 6)</span>. Gradient <span class="chem">m_{AB} = (8 - 4)/(5 - (-1)) = 4/6 = 2/3</span>, so <span class="chem">m_{perp} = -3/2</span>. The perpendicular bisector is <span class="chem">y - 6 = (-3/2)(x - 2)</span>. Setting <span class="chem">y = 0</span> gives <span class="chem">-6 = (-3/2)(a - 2) => a - 2 = 4 => a = 6</span>.</p>
      solution: "<p>중점은 <span class=\"chem\">M = ((-1+5)/2, (4+8)/2) = (2, 6)</span>이에요. 기울기는 <span class=\"chem\">m_{AB} = (8 - 4)/(5 - (-1)) = 4/6 = 2/3</span>이므로 <span class=\"chem\">m_{perp} = -3/2</span>예요. 수직이등분선은 <span class=\"chem\">y - 6 = (-3/2)(x - 2)</span>이고, <span class=\"chem\">y = 0</span>을 대입하면 <span class=\"chem\">-6 = (-3/2)(a - 2) => a - 2 = 4 => a = 6</span>이에요.</p>",
    },

    // ── t2-1-q003 · mcq · foundation · SL · SL 2.2 · 2 marks
    "t2-1-q003": {
      // EN: <p>What is the largest possible real domain of the function <span class="chem">f(x) = sqrt(10 - 2x) / (x - 2)</span>?</p>
      stem: "<p>함수 <span class=\"chem\">f(x) = sqrt(10 - 2x) / (x - 2)</span>의 가능한 가장 큰 실수 정의역은 무엇인가요?</p>",
      options: [
        // EN: <span class="chem">x &lt;= 5, x != 2</span>
        "<span class=\"chem\">x &lt;= 5, x != 2</span>",
        // EN: <span class="chem">x &lt; 5, x != 2</span>
        "<span class=\"chem\">x &lt; 5, x != 2</span>",
        // EN: <span class="chem">x &gt;= 5</span>
        "<span class=\"chem\">x &gt;= 5</span>",
        // EN: <span class="chem">x &lt;= 5</span>
        "<span class=\"chem\">x &lt;= 5</span>",
      ],
      hints: [
        // EN: Check both domain restrictions: the radicand inside the numerator square root must be <span class="chem">&gt;= 0</span>, and the denominator must be <span class="chem">!= 0</span>.
        "두 가지 정의역 조건을 모두 확인하세요: 분자 제곱근 안의 식은 <span class=\"chem\">&gt;= 0</span>이어야 하고, 분모는 <span class=\"chem\">!= 0</span>이어야 해요.",
      ],
      // EN: <p>For the square root in the numerator, <span class="chem">10 - 2x &gt;= 0 => 2x &lt;= 10 => x &lt;= 5</span>. For the denominator, <span class="chem">x - 2 != 0 => x != 2</span>. Since <span class="chem">2 &lt;= 5</span>, we must explicitly exclude <span class="chem">x = 2</span>, giving <span class="chem">x &lt;= 5, x != 2</span>.</p>
      solution: "<p>분자의 제곱근에서 <span class=\"chem\">10 - 2x &gt;= 0 => 2x &lt;= 10 => x &lt;= 5</span>이고, 분모에서 <span class=\"chem\">x - 2 != 0 => x != 2</span>예요. <span class=\"chem\">2 &lt;= 5</span>이므로 <span class=\"chem\">x = 2</span>를 반드시 제외해야 해서 <span class=\"chem\">x &lt;= 5, x != 2</span>예요.</p>",
      misconception: {
        // EN (option B): The square root is in the numerator, not the denominator, so 10 − 2x = 0 (x = 5) is allowed.
        "1": "제곱근이 분모가 아니라 분자에 있으므로 10 − 2x = 0 (x = 5)도 허용돼요.",
        // EN (option C): From 10 − 2x ≥ 0 you get −2x ≥ −10; dividing by −2 reverses the sign, giving x ≤ 5, not x ≥ 5.
        "2": "10 − 2x ≥ 0에서 −2x ≥ −10이 되고, −2로 나누면 부등호 방향이 바뀌어 x ≤ 5가 돼요. x ≥ 5가 아니에요.",
        // EN (option D): You checked the square root 10 − 2x ≥ 0 (x ≤ 5), but forgot to exclude x = 2 where the denominator x − 2 equals zero.
        "3": "제곱근 조건 10 − 2x ≥ 0 (x ≤ 5)은 확인했지만, 분모 x − 2가 0이 되는 x = 2를 제외하는 것을 빠뜨렸어요.",
      },
    },

    // ── t2-1-q004 · mcq · exam · SL · SL 2.2 · 3 marks
    "t2-1-q004": {
      // EN: <p>The function <span class="chem">f(x) = -(x - 2)^2 + 9</span> is defined on the restricted domain <span class="chem">-1 &lt;= x &lt;= 4</span>. What is the range of <span class="chem">f</span>?</p>
      stem: "<p>함수 <span class=\"chem\">f(x) = -(x - 2)^2 + 9</span>가 제한된 정의역 <span class=\"chem\">-1 &lt;= x &lt;= 4</span>에서 정의되어 있어요. <span class=\"chem\">f</span>의 치역은 무엇인가요?</p>",
      options: [
        // EN: <span class="chem">0 &lt;= f(x) &lt;= 9</span>
        "<span class=\"chem\">0 &lt;= f(x) &lt;= 9</span>",
        // EN: <span class="chem">0 &lt;= f(x) &lt;= 5</span>
        "<span class=\"chem\">0 &lt;= f(x) &lt;= 5</span>",
        // EN: <span class="chem">5 &lt;= f(x) &lt;= 9</span>
        "<span class=\"chem\">5 &lt;= f(x) &lt;= 9</span>",
        // EN: <span class="chem">f(x) &lt;= 9</span>
        "<span class=\"chem\">f(x) &lt;= 9</span>",
      ],
      hints: [
        // EN: Never find the range of a quadratic by plugging in only the endpoints! Check whether the vertex <span class="chem">x = 2</span> lies inside <span class="chem">[-1, 4]</span>.
        "절대 양 끝점만 대입해 이차함수의 치역을 구하지 마세요! 꼭짓점 <span class=\"chem\">x = 2</span>가 <span class=\"chem\">[-1, 4]</span> 안에 있는지 확인하세요.",
        // EN: Evaluate <span class="chem">f(-1)</span>, <span class="chem">f(2)</span> (vertex), and <span class="chem">f(4)</span>, then take the minimum and maximum of those values.
        "<span class=\"chem\">f(-1)</span>, <span class=\"chem\">f(2)</span> (꼭짓점), <span class=\"chem\">f(4)</span>를 모두 계산한 뒤 최솟값과 최댓값을 찾으세요.",
      ],
      // EN: <p>The graph is a downward-opening parabola with vertex at <span class="chem">(2, 9)</span>. Since <span class="chem">x = 2</span> lies inside <span class="chem">[-1, 4]</span>, the maximum output is <span class="chem">f(2) = 9</span>. Checking the endpoints gives <span class="chem">f(-1) = -(-3)^2 + 9 = 0</span> and <span class="chem">f(4) = -(2)^2 + 9 = 5</span>. Hence the minimum is <span class="chem">0</span> and the range is <span class="chem">0 &lt;= f(x) &lt;= 9</span>.</p>
      solution: "<p>그래프는 꼭짓점이 <span class=\"chem\">(2, 9)</span>인 위로 볼록한 포물선이에요. <span class=\"chem\">x = 2</span>가 <span class=\"chem\">[-1, 4]</span> 안에 있으므로 최댓값은 <span class=\"chem\">f(2) = 9</span>예요. 양 끝점을 계산하면 <span class=\"chem\">f(-1) = -(-3)^2 + 9 = 0</span>, <span class=\"chem\">f(4) = -(2)^2 + 9 = 5</span>이므로 최솟값은 <span class=\"chem\">0</span>이고 치역은 <span class=\"chem\">0 &lt;= f(x) &lt;= 9</span>예요.</p>",
      misconception: {
        // EN (option B): You only plugged in the two endpoints f(−1) = 0 and f(4) = 5, missing the maximum vertex (2, 9) which lies inside [−1, 4]!
        "1": "양 끝점 f(−1) = 0과 f(4) = 5만 대입해서 [−1, 4] 안에 있는 최댓값 꼭짓점 (2, 9)를 놓쳤어요!",
        // EN (option C): You evaluated the right endpoint f(4) = 5 and the vertex f(2) = 9, but missed the lower value at the left endpoint f(−1) = 0.
        "2": "오른쪽 끝점 f(4) = 5와 꼭짓점 f(2) = 9만 확인하고 왼쪽 끝점 f(−1) = 0의 더 작은 값을 놓쳤어요.",
        // EN (option D): You gave the range over all real numbers x ∈ ℝ instead of restricting to −1 ≤ x ≤ 4.
        "3": "−1 ≤ x ≤ 4로 제한하지 않고 전체 실수 x ∈ ℝ에 대한 치역을 적었어요.",
      },
    },

    // ── t2-1-q005 · numeric · foundation · SL · SL 2.5 · 2 marks
    "t2-1-q005": {
      // EN: <p>Let <span class="chem">f(x) = 3x - 4</span> and <span class="chem">g(x) = x^2 + 1</span>. Calculate the value of <span class="chem">(g ∘ f)(2)</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = 3x - 4</span>, <span class=\"chem\">g(x) = x^2 + 1</span>이라 하자. <span class=\"chem\">(g ∘ f)(2)</span>의 값을 계산하시오 (Calculate).</p>",
      hints: [
        // EN: In <span class="chem">(g ∘ f)(2) = g(f(2))</span>, evaluate the inner function <span class="chem">f(2)</span> first.
        "<span class=\"chem\">(g ∘ f)(2) = g(f(2))</span>에서 안쪽 함수 <span class=\"chem\">f(2)</span>를 먼저 계산하세요.",
        // EN: Once you have <span class="chem">f(2) = 2</span>, substitute that output into <span class="chem">g(x) = x^2 + 1</span>.
        "<span class=\"chem\">f(2) = 2</span>를 구한 뒤 그 값을 <span class=\"chem\">g(x) = x^2 + 1</span>에 대입하세요.",
      ],
      // EN: <p>Working inside-out: <span class="chem">f(2) = 3(2) - 4 = 2</span>. Then <span class="chem">(g ∘ f)(2) = g(f(2)) = g(2) = 2^2 + 1 = 5</span>.</p>
      solution: "<p>안쪽부터 계산하면 <span class=\"chem\">f(2) = 3(2) - 4 = 2</span>예요. 따라서 <span class=\"chem\">(g ∘ f)(2) = g(f(2)) = g(2) = 2^2 + 1 = 5</span>예요.</p>",
    },

    // ── t2-1-q006 · numeric · exam · SL · SL 2.2 · 3 marks
    "t2-1-q006": {
      // EN: <p>A one-to-one function <span class="chem">f</span> is defined by <span class="chem">f(x) = x^3 + 2x - 1</span> for <span class="chem">x ∈ ℝ</span>. Find the value of <span class="chem">f^{-1}(11)</span>.</p>
      stem: "<p>일대일함수 <span class=\"chem\">f</span>가 <span class=\"chem\">x ∈ ℝ</span>에서 <span class=\"chem\">f(x) = x^3 + 2x - 1</span>로 정의되어 있어요. <span class=\"chem\">f^{-1}(11)</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Do not try to invert a cubic formula! Remember that <span class="chem">f^{-1}(11) = x</span> means <span class="chem">f(x) = 11</span>.
        "삼차식의 역함수를 직접 구하려 하지 마세요! <span class=\"chem\">f^{-1}(11) = x</span>는 <span class=\"chem\">f(x) = 11</span>을 뜻해요.",
        // EN: Test small integer values of <span class="chem">x</span> in <span class="chem">x^3 + 2x - 1 = 11</span>.
        "<span class=\"chem\">x^3 + 2x - 1 = 11</span>에 작은 정수 <span class=\"chem\">x</span>를 대입해 보세요.",
      ],
      // EN: <p>Let <span class="chem">f^{-1}(11) = x</span>. By definition of the inverse function, <span class="chem">f(x) = 11</span>, so <span class="chem">x^3 + 2x - 1 = 11 => x^3 + 2x - 12 = 0</span>. Testing <span class="chem">x = 2</span> gives <span class="chem">2^3 + 2(2) - 12 = 8 + 4 - 12 = 0</span>. Since <span class="chem">f</span> is strictly increasing, <span class="chem">f^{-1}(11) = 2</span> is the unique solution.</p>
      solution: "<p><span class=\"chem\">f^{-1}(11) = x</span>라 하면 역함수의 정의에 의해 <span class=\"chem\">f(x) = 11</span>이므로 <span class=\"chem\">x^3 + 2x - 1 = 11 => x^3 + 2x - 12 = 0</span>이에요. <span class=\"chem\">x = 2</span>를 대입하면 <span class=\"chem\">2^3 + 2(2) - 12 = 8 + 4 - 12 = 0</span>이 성립해요. <span class=\"chem\">f</span>는 순증가함수이므로 <span class=\"chem\">f^{-1}(11) = 2</span>가 유일한 해예요.</p>",
    },

    // ── t2-1-q007 · mcq · exam · SL · SL 2.5 · 4 marks
    "t2-1-q007": {
      // EN: <p>The function <span class="chem">f</span> is defined by <span class="chem">f(x) = x^2 - 6x + 11</span> for <span class="chem">x &lt;= 3</span>. Which of the following is the correct expression and domain for <span class="chem">f^{-1}(x)</span>?</p>
      stem: "<p>함수 <span class=\"chem\">f</span>가 <span class=\"chem\">x &lt;= 3</span>에서 <span class=\"chem\">f(x) = x^2 - 6x + 11</span>로 정의되어 있어요. <span class=\"chem\">f^{-1}(x)</span>의 식과 정의역으로 옳은 것은 어느 것인가요?</p>",
      options: [
        // EN: <span class="chem">f^{-1}(x) = 3 - sqrt(x - 2)</span> for <span class="chem">x &gt;= 2</span>
        "<span class=\"chem\">x &gt;= 2</span>에서 <span class=\"chem\">f^{-1}(x) = 3 - sqrt(x - 2)</span>",
        // EN: <span class="chem">f^{-1}(x) = 3 + sqrt(x - 2)</span> for <span class="chem">x &gt;= 2</span>
        "<span class=\"chem\">x &gt;= 2</span>에서 <span class=\"chem\">f^{-1}(x) = 3 + sqrt(x - 2)</span>",
        // EN: <span class="chem">f^{-1}(x) = 3 - sqrt(x - 2)</span> for <span class="chem">x &lt;= 3</span>
        "<span class=\"chem\">x &lt;= 3</span>에서 <span class=\"chem\">f^{-1}(x) = 3 - sqrt(x - 2)</span>",
        // EN: <span class="chem">f^{-1}(x) = 3 - sqrt(x + 2)</span> for <span class="chem">x &gt;= -2</span>
        "<span class=\"chem\">x &gt;= -2</span>에서 <span class=\"chem\">f^{-1}(x) = 3 - sqrt(x + 2)</span>",
      ],
      hints: [
        // EN: First complete the square: <span class="chem">f(x) = (x - 3)^2 + 2</span>. What is the range of <span class="chem">f</span>?
        "먼저 완전제곱식으로 고치세요: <span class=\"chem\">f(x) = (x - 3)^2 + 2</span>. <span class=\"chem\">f</span>의 치역은 무엇인가요?",
        // EN: Swap <span class="chem">x</span> and <span class="chem">y</span> in <span class="chem">y = (x - 3)^2 + 2</span>, and use <span class="chem">Range(f^{-1}) = Domain(f) = (-infty, 3]</span> to select the negative sign.
        "<span class=\"chem\">y = (x - 3)^2 + 2</span>에서 <span class=\"chem\">x</span>와 <span class=\"chem\">y</span>를 바꾸고, <span class=\"chem\">Range(f^{-1}) = Domain(f) = (-infty, 3]</span>을 이용해 음수 부호를 고르세요.",
      ],
      // EN: <p>Completing the square gives <span class="chem">f(x) = (x - 3)^2 + 2</span>. Since <span class="chem">(x - 3)^2 &gt;= 0</span>, the range of <span class="chem">f</span> is <span class="chem">y &gt;= 2</span>, so the domain of <span class="chem">f^{-1}</span> is <span class="chem">x &gt;= 2</span>. Swapping <span class="chem">x</span> and <span class="chem">y</span>: <span class="chem">x = (y - 3)^2 + 2 => y = 3 +- sqrt(x - 2)</span>. Since <span class="chem">Range(f^{-1}) = Domain(f)</span> requires <span class="chem">y &lt;= 3</span>, we must choose the minus sign: <span class="chem">f^{-1}(x) = 3 - sqrt(x - 2)</span> for <span class="chem">x &gt;= 2</span>.</p>
      solution: "<p>완전제곱식으로 고치면 <span class=\"chem\">f(x) = (x - 3)^2 + 2</span>예요. <span class=\"chem\">(x - 3)^2 &gt;= 0</span>이므로 <span class=\"chem\">f</span>의 치역은 <span class=\"chem\">y &gt;= 2</span>이고, 따라서 <span class=\"chem\">f^{-1}</span>의 정의역은 <span class=\"chem\">x &gt;= 2</span>예요. <span class=\"chem\">x</span>와 <span class=\"chem\">y</span>를 바꾸면 <span class=\"chem\">x = (y - 3)^2 + 2 => y = 3 +- sqrt(x - 2)</span>인데, <span class=\"chem\">Range(f^{-1}) = Domain(f)</span>에 의해 <span class=\"chem\">y &lt;= 3</span>이어야 하므로 마이너스 부호를 골라야 해요: <span class=\"chem\">x &gt;= 2</span>에서 <span class=\"chem\">f^{-1}(x) = 3 - sqrt(x - 2)</span>.</p>",
      misconception: {
        // EN (option B): You chose the positive square root +√(x − 2). Because Domain(f) is x ≤ 3, Range(f⁻¹) must be y ≤ 3, which requires 3 − √(x − 2).
        "1": "양의 제곱근 +√(x − 2)를 선택했어요. Domain(f)가 x ≤ 3이므로 Range(f⁻¹)는 y ≤ 3이어야 하고, 따라서 3 − √(x − 2)가 맞아요.",
        // EN (option C): You found the right formula for f⁻¹(x), but forgot that Domain(f⁻¹) = Range(f) = [2, ∞), not Domain(f).
        "2": "f⁻¹(x) 식은 맞게 구했지만, Domain(f⁻¹)이 Domain(f)가 아니라 Range(f) = [2, ∞)라는 점을 잊었어요.",
        // EN (option D): When completing the square on x² − 6x + 11 = (x − 3)² − 9 + 11, the vertex k-value is +2, not −2.
        "3": "x² − 6x + 11 = (x − 3)² − 9 + 11로 완전제곱식을 만들 때 꼭짓점의 상수항은 −2가 아니라 +2예요.",
      },
    },

    // ── t2-1-q008 · multi · exam · SL · SL 2.2 · 3 marks
    "t2-1-q008": {
      // EN: <p>Let <span class="chem">f</span> be a one-to-one function with domain <span class="chem">[-2, 5]</span> and range <span class="chem">[1, 10]</span>. Which of the following statements <strong>must</strong> be true for its inverse function <span class="chem">f^{-1}</span>?</p>
      stem: "<p>일대일함수 <span class=\"chem\">f</span>의 정의역이 <span class=\"chem\">[-2, 5]</span>이고 치역이 <span class=\"chem\">[1, 10]</span>이에요. 역함수 <span class=\"chem\">f^{-1}</span>에 대해 <strong>반드시</strong> 참인 설명을 모두 고르시오.</p>",
      options: [
        // EN: The domain of <span class="chem">f^{-1}</span> is <span class="chem">[1, 10]</span> and the range of <span class="chem">f^{-1}</span> is <span class="chem">[-2, 5]</span>.
        "<span class=\"chem\">f^{-1}</span>의 정의역은 <span class=\"chem\">[1, 10]</span>이고 <span class=\"chem\">f^{-1}</span>의 치역은 <span class=\"chem\">[-2, 5]</span>이다.",
        // EN: The graph of <span class="chem">y = f^{-1}(x)</span> is the reflection of the graph of <span class="chem">y = f(x)</span> in the line <span class="chem">y = x</span>.
        "<span class=\"chem\">y = f^{-1}(x)</span>의 그래프는 <span class=\"chem\">y = f(x)</span>의 그래프를 직선 <span class=\"chem\">y = x</span>에 대해 대칭이동한 것이다.",
        // EN: For every <span class="chem">x ∈ [-2, 5]</span>, <span class="chem">(f^{-1} ∘ f)(x) = x</span>.
        "모든 <span class=\"chem\">x ∈ [-2, 5]</span>에 대해 <span class=\"chem\">(f^{-1} ∘ f)(x) = x</span>이다.",
        // EN: For every <span class="chem">x ∈ [-2, 5]</span>, <span class="chem">f^{-1}(x) = 1 / f(x)</span>.
        "모든 <span class=\"chem\">x ∈ [-2, 5]</span>에 대해 <span class=\"chem\">f^{-1}(x) = 1 / f(x)</span>이다.",
      ],
      hints: [
        // EN: Check the three core properties of inverse functions: domain-range swap, reflection in <span class="chem">y = x</span>, and identity composition <span class="chem">f^{-1}(f(x)) = x</span>.
        "역함수의 세 가지 핵심 성질을 확인하세요: 정의역·치역 맞바꿈, <span class=\"chem\">y = x</span> 대칭, 항등 합성 <span class=\"chem\">f^{-1}(f(x)) = x</span>.",
      ],
      // EN: <p>Statements A, B, and C are fundamental properties of every inverse function: <span class="chem">Domain(f^{-1}) = Range(f) = [1, 10]</span>, <span class="chem">Range(f^{-1}) = Domain(f) = [-2, 5]</span>, the graph reflects across <span class="chem">y = x</span>, and <span class="chem">(f^{-1} ∘ f)(x) = x</span> on <span class="chem">Domain(f)</span>. Statement D confuses the inverse function <span class="chem">f^{-1}(x)</span> with the reciprocal <span class="chem">[f(x)]^{-1} = 1/f(x)</span>.</p>
      solution: "<p>A, B, C 보기는 모든 역함수의 기본 성질이에요: <span class=\"chem\">Domain(f^{-1}) = Range(f) = [1, 10]</span>, <span class=\"chem\">Range(f^{-1}) = Domain(f) = [-2, 5]</span>, <span class=\"chem\">y = x</span> 대칭, 그리고 <span class=\"chem\">Domain(f)</span> 위에서 <span class=\"chem\">(f^{-1} ∘ f)(x) = x</span>. D 보기는 역함수 <span class=\"chem\">f^{-1}(x)</span>와 역수 <span class=\"chem\">[f(x)]^{-1} = 1/f(x)</span>를 혼동한 것이에요.</p>",
      misconception: {
        // EN (option D): f⁻¹(x) denotes the inverse mapping that reverses input and output, never the reciprocal 1 / f(x).
        "3": "f⁻¹(x)는 입력과 출력을 뒤바꾸는 역함수를 뜻하며, 절대 역수 1 / f(x)가 아니에요.",
      },
    },

    // ── t2-1-q009 · order · foundation · SL · SL 2.5 · 3 marks
    "t2-1-q009": {
      // EN: <p>Arrange the following algebraic steps in logical order to find the inverse function <span class="chem">f^{-1}(x)</span> of <span class="chem">f(x) = (2x + 1)/(x - 3)</span> for <span class="chem">x != 3</span>.</p>
      stem: "<p><span class=\"chem\">x != 3</span>일 때 함수 <span class=\"chem\">f(x) = (2x + 1)/(x - 3)</span>의 역함수 <span class=\"chem\">f^{-1}(x)</span>를 구하는 대수적 단계를 논리적인 순서로 배열하시오.</p>",
      options: [
        // EN: Write <span class="chem">y = (2x + 1)/(x - 3)</span> and swap <span class="chem">x</span> and <span class="chem">y</span> to get <span class="chem">x = (2y + 1)/(y - 3)</span>.
        "<span class=\"chem\">y = (2x + 1)/(x - 3)</span>로 쓰고 <span class=\"chem\">x</span>와 <span class=\"chem\">y</span>를 바꾸어 <span class=\"chem\">x = (2y + 1)/(y - 3)</span>을 얻는다.",
        // EN: Multiply both sides by <span class="chem">(y - 3)</span> and expand: <span class="chem">xy - 3x = 2y + 1</span>.
        "양변에 <span class=\"chem\">(y - 3)</span>을 곱하고 전개한다: <span class=\"chem\">xy - 3x = 2y + 1</span>.",
        // EN: Collect all terms containing <span class="chem">y</span> on one side and factor out <span class="chem">y</span>: <span class="chem">y(x - 2) = 3x + 1</span>.
        "<span class=\"chem\">y</span>가 포함된 모든 항을 한쪽으로 모으고 <span class=\"chem\">y</span>로 묶어 낸다: <span class=\"chem\">y(x - 2) = 3x + 1</span>.",
        // EN: Divide by <span class="chem">(x - 2)</span> to obtain <span class="chem">f^{-1}(x) = (3x + 1)/(x - 2)</span> for <span class="chem">x != 2</span>.
        "<span class=\"chem\">(x - 2)</span>로 나누어 <span class=\"chem\">x != 2</span>일 때 <span class=\"chem\">f^{-1}(x) = (3x + 1)/(x - 2)</span>를 얻는다.",
      ],
      hints: [
        // EN: Start by swapping <span class="chem">x</span> and <span class="chem">y</span>, clear the fraction, group all <span class="chem">y</span>-terms together so you can factor out <span class="chem">y</span>, and finally divide.
        "먼저 <span class=\"chem\">x</span>와 <span class=\"chem\">y</span>를 바꾸고, 분모를 없앤 뒤, <span class=\"chem\">y</span>항을 모두 모아 <span class=\"chem\">y</span>로 묶고 마지막으로 나누세요.",
      ],
      // EN: <p>To isolate <span class="chem">y</span> when it appears in both numerator and denominator, swap <span class="chem">x</span> and <span class="chem">y</span>, multiply by the denominator <span class="chem">(y - 3)</span>, collect the <span class="chem">y</span> terms on the left (<span class="chem">xy - 2y = 3x + 1</span>), factor out <span class="chem">y</span> as <span class="chem">y(x - 2) = 3x + 1</span>, and divide by <span class="chem">(x - 2)</span>.</p>
      solution: "<p>분자와 분모에 모두 <span class=\"chem\">y</span>가 들어 있을 때는 <span class=\"chem\">x</span>와 <span class=\"chem\">y</span>를 바꾼 뒤 분모 <span class=\"chem\">(y - 3)</span>을 곱하고, <span class=\"chem\">y</span>항을 좌변에 모아(<span class=\"chem\">xy - 2y = 3x + 1</span>) <span class=\"chem\">y</span>로 묶어 <span class=\"chem\">y(x - 2) = 3x + 1</span>을 만든 다음 <span class=\"chem\">(x - 2)</span>로 나누면 돼요.</p>",
    },

    // ── t2-1-q010 · numeric · exam · SL · SL 2.5 · 4 marks
    "t2-1-q010": {
      // EN: <p>Let <span class="chem">f(x) = (x - 1)^2 - 1</span> for <span class="chem">x &gt;= 1</span>. The graphs of <span class="chem">y = f(x)</span> and <span class="chem">y = f^{-1}(x)</span> intersect at a single point <span class="chem">(a, a)</span> with <span class="chem">a &gt; 0</span>. Find the exact value of <span class="chem">a</span>.</p>
      stem: "<p><span class=\"chem\">x &gt;= 1</span>에서 <span class=\"chem\">f(x) = (x - 1)^2 - 1</span>이라 하자. 두 그래프 <span class=\"chem\">y = f(x)</span>와 <span class=\"chem\">y = f^{-1}(x)</span>가 <span class=\"chem\">a &gt; 0</span>인 한 점 <span class=\"chem\">(a, a)</span>에서 만나요. <span class=\"chem\">a</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Because <span class="chem">f</span> is increasing for <span class="chem">x &gt;= 1</span>, the intersection of <span class="chem">y = f(x)</span> and <span class="chem">y = f^{-1}(x)</span> lies on the mirror line <span class="chem">y = x</span>.
        "<span class=\"chem\">x &gt;= 1</span>에서 <span class=\"chem\">f</span>가 증가함수이므로 <span class=\"chem\">y = f(x)</span>와 <span class=\"chem\">y = f^{-1}(x)</span>의 교점은 대칭축 <span class=\"chem\">y = x</span> 위에 있어요.",
        // EN: Solve <span class="chem">f(x) = x</span>, i.e., <span class="chem">(x - 1)^2 - 1 = x</span>, and keep the root that satisfies <span class="chem">x &gt;= 1</span>.
        "<span class=\"chem\">f(x) = x</span>, 즉 <span class=\"chem\">(x - 1)^2 - 1 = x</span>를 풀고 <span class=\"chem\">x &gt;= 1</span>을 만족하는 근을 선택하세요.",
      ],
      // EN: <p>Instead of equating <span class="chem">f(x)</span> to <span class="chem">f^{-1}(x) = 1 + sqrt(x + 1)</span>, solve <span class="chem">f(x) = x</span> along the mirror line <span class="chem">y = x</span>: <span class="chem">(x - 1)^2 - 1 = x => x^2 - 2x + 1 - 1 - x = 0 => x^2 - 3x = 0 => x(x - 3) = 0</span>. Since the domain of <span class="chem">f</span> is <span class="chem">x &gt;= 1</span>, we reject <span class="chem">x = 0</span> and obtain <span class="chem">a = 3</span>.</p>
      solution: "<p><span class=\"chem\">f(x)</span>와 <span class=\"chem\">f^{-1}(x) = 1 + sqrt(x + 1)</span>을 같다고 놓는 대신 대칭축 <span class=\"chem\">y = x</span> 위에서 <span class=\"chem\">f(x) = x</span>를 푸세요: <span class=\"chem\">(x - 1)^2 - 1 = x => x^2 - 2x + 1 - 1 - x = 0 => x^2 - 3x = 0 => x(x - 3) = 0</span>. <span class=\"chem\">f</span>의 정의역이 <span class=\"chem\">x &gt;= 1</span>이므로 <span class=\"chem\">x = 0</span>은 제외하고 <span class=\"chem\">a = 3</span>을 얻어요.</p>",
    },

    // ── t2-1-q011 · mcq · exam · SL · SL 2.5 · 4 marks
    "t2-1-q011": {
      // EN: <p>Let <span class="chem">f(x) = ln(x - 4)</span> for <span class="chem">x &gt; 4</span> and <span class="chem">g(x) = x^2 + k</span> for <span class="chem">x ∈ ℝ</span>. Find the set of values of the constant <span class="chem">k</span> for which the composite function <span class="chem">(f ∘ g)(x)</span> is defined for <strong>all</strong> real numbers <span class="chem">x ∈ ℝ</span>.</p>
      stem: "<p><span class=\"chem\">x &gt; 4</span>에서 <span class=\"chem\">f(x) = ln(x - 4)</span>이고, <span class=\"chem\">x ∈ ℝ</span>에서 <span class=\"chem\">g(x) = x^2 + k</span>라 하자. 합성함수 <span class=\"chem\">(f ∘ g)(x)</span>가 <strong>모든</strong> 실수 <span class=\"chem\">x ∈ ℝ</span>에 대하여 정의되도록 하는 상수 <span class=\"chem\">k</span>의 값의 범위를 구하시오 (Find).</p>",
      options: [
        // EN: <span class="chem">k &gt; 4</span>
        "<span class=\"chem\">k &gt; 4</span>",
        // EN: <span class="chem">k &gt;= 4</span>
        "<span class=\"chem\">k &gt;= 4</span>",
        // EN: <span class="chem">k &gt; 0</span>
        "<span class=\"chem\">k &gt; 0</span>",
        // EN: <span class="chem">k &lt; 4</span>
        "<span class=\"chem\">k &lt; 4</span>",
      ],
      hints: [
        // EN: For <span class="chem">(f ∘ g)(x) = f(g(x))</span> to be defined for all <span class="chem">x ∈ ℝ</span>, we need <span class="chem">Range(g)</span> to be a subset of <span class="chem">Domain(f) = (4, infty)</span>.
        "모든 <span class=\"chem\">x ∈ ℝ</span>에 대해 <span class=\"chem\">(f ∘ g)(x) = f(g(x))</span>가 정의되려면 <span class=\"chem\">Range(g)</span>가 <span class=\"chem\">Domain(f) = (4, infty)</span>의 부분집합이어야 해요.",
        // EN: What is the minimum value of <span class="chem">g(x) = x^2 + k</span> for <span class="chem">x ∈ ℝ</span>?
        "<span class=\"chem\">x ∈ ℝ</span>에서 <span class=\"chem\">g(x) = x^2 + k</span>의 최솟값은 무엇인가요?",
      ],
      // EN: <p>The domain of <span class="chem">f</span> is <span class="chem">(4, infty)</span>. For <span class="chem">g(x) = x^2 + k</span> with <span class="chem">x ∈ ℝ</span>, the range of <span class="chem">g</span> is <span class="chem">[k, infty)</span> (minimum value <span class="chem">k</span> at <span class="chem">x = 0</span>). Requiring <span class="chem">Range(g) ⊆ Domain(f)</span> means every output in <span class="chem">[k, infty)</span> must be strictly greater than <span class="chem">4</span>, so <span class="chem">k &gt; 4</span>.</p>
      solution: "<p><span class=\"chem\">f</span>의 정의역은 <span class=\"chem\">(4, infty)</span>예요. <span class=\"chem\">x ∈ ℝ</span>에서 <span class=\"chem\">g(x) = x^2 + k</span>에 대해 <span class=\"chem\">g</span>의 치역은 <span class=\"chem\">[k, infty)</span> (<span class=\"chem\">x = 0</span>일 때 최솟값 <span class=\"chem\">k</span>)예요. <span class=\"chem\">Range(g) ⊆ Domain(f)</span>가 성립하려면 <span class=\"chem\">[k, infty)</span>의 모든 값이 <span class=\"chem\">4</span>보다 커야 하므로 <span class=\"chem\">k &gt; 4</span>예요.</p>",
      misconception: {
        // EN (option B): If k = 4, then at x = 0 we get g(0) = 4, and f(4) = ln(4 − 4) = ln(0), which is undefined! The inequality must be strict: k > 4.
        "1": "k = 4이면 x = 0일 때 g(0) = 4가 되어 f(4) = ln(4 − 4) = ln(0)이 정의되지 않아요! 등호가 없는 k > 4여야 해요.",
        // EN (option C): You checked that g(x) > 0 instead of checking the actual domain of f, which is u > 4.
        "2": "f의 실제 정의역인 u > 4가 아니라 g(x) > 0을 확인했어요.",
        // EN (option D): You reversed the inequality sign when requiring the minimum of g(x) to exceed 4.
        "3": "g(x)의 최솟값이 4보다 커야 하는데 부등호 방향을 반대로 적었어요.",
      },
    },

    // ── t2-1-q012 · numeric · exam · AHL · AHL 2.14 · 3 marks
    "t2-1-q012": {
      // EN: <p>Let <span class="chem">f(x) = 2x^2 - 12x + 23</span> for <span class="chem">x &gt;= k</span>. Find the <strong>smallest</strong> possible value of <span class="chem">k</span> such that the inverse function <span class="chem">f^{-1}</span> exists.</p>
      stem: "<p><span class=\"chem\">x &gt;= k</span>에서 <span class=\"chem\">f(x) = 2x^2 - 12x + 23</span>이라 하자. 역함수 <span class=\"chem\">f^{-1}</span>가 존재하도록 하는 <span class=\"chem\">k</span>의 <strong>최솟값</strong>을 구하시오 (Find).</p>",
      hints: [
        // EN: A quadratic function is one-to-one on <span class="chem">x &gt;= k</span> if and only if <span class="chem">k</span> is at or to the right of the axis of symmetry (the vertex <span class="chem">x</span>-coordinate).
        "이차함수가 <span class=\"chem\">x &gt;= k</span>에서 일대일함수가 되려면 <span class=\"chem\">k</span>가 대칭축(꼭짓점의 <span class=\"chem\">x</span>좌표) 이상이어야 해요.",
        // EN: Use <span class="chem">x = -b / (2a)</span> from your Formula Booklet.
        "공식집(Formula Booklet)의 <span class=\"chem\">x = -b / (2a)</span>를 이용하세요.",
      ],
      // EN: <p>For <span class="chem">f(x) = 2x^2 - 12x + 23</span> to be one-to-one on <span class="chem">x &gt;= k</span>, the domain cannot extend to both sides of the vertex. The axis of symmetry is <span class="chem">x = -b/(2a) = -(-12)/(2 × 2) = 3</span>. Thus <span class="chem">f</span> is one-to-one for any <span class="chem">k &gt;= 3</span>, so the smallest value of <span class="chem">k</span> is <span class="chem">3</span>.</p>
      solution: "<p><span class=\"chem\">f(x) = 2x^2 - 12x + 23</span>이 <span class=\"chem\">x &gt;= k</span>에서 일대일함수가 되려면 정의역이 꼭짓점의 양쪽을 모두 포함하면 안 돼요. 대칭축은 <span class=\"chem\">x = -b/(2a) = -(-12)/(2 × 2) = 3</span>이에요. 따라서 <span class=\"chem\">k &gt;= 3</span>일 때 <span class=\"chem\">f</span>는 일대일함수이므로 <span class=\"chem\">k</span>의 최솟값은 <span class=\"chem\">3</span>이에요.</p>",
    },

    // ── t2-1-q013 · numeric · exam · SL · SL 2.4 · 3 marks
    "t2-1-q013": {
      // EN: <p>Consider the function <span class="chem">f(x) = x e^{-0.5x}</span> for <span class="chem">x &gt;= 0</span>. Using your GDC or otherwise, find the maximum value in the range of <span class="chem">f</span>, giving your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">x &gt;= 0</span>에서 함수 <span class=\"chem\">f(x) = x e^{-0.5x}</span>를 생각하자. GDC 또는 다른 방법을 이용하여 <span class=\"chem\">f</span>의 치역에서 최댓값을 구하고 (Find) 유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: Graph <span class="chem">y = x e^{-0.5x}</span> on your GDC for <span class="chem">x &gt;= 0</span> and locate the local maximum.
        "GDC에서 <span class=\"chem\">x &gt;= 0</span> 범위에 <span class=\"chem\">y = x e^{-0.5x}</span>의 그래프를 그리고 극댓값을 찾으세요.",
        // EN: The maximum occurs at <span class="chem">x = 2</span>, where <span class="chem">f(2) = 2 e^{-1} = 2/e</span>.
        "최댓값은 <span class=\"chem\">x = 2</span>에서 나오며 그 값은 <span class=\"chem\">f(2) = 2 e^{-1} = 2/e</span>예요.",
      ],
      // EN: <p>Graphing <span class="chem">y = x e^{-0.5x}</span> on a GDC (or setting <span class="chem">f'(x) = (1 - 0.5x)e^{-0.5x} = 0</span>) shows a local maximum at <span class="chem">x = 2</span> with value <span class="chem">f(2) = 2e^{-1} ≈ 0.73576 = 0.736</span> (3 s.f.). Since <span class="chem">f(0) = 0</span> and <span class="chem">f(x) -&gt; 0</span> as <span class="chem">x -&gt; infty</span>, the maximum value in the range is <span class="chem">0.736</span>.</p>
      solution: "<p>GDC로 <span class=\"chem\">y = x e^{-0.5x}</span>의 그래프를 그리면(또는 <span class=\"chem\">f'(x) = (1 - 0.5x)e^{-0.5x} = 0</span>을 풀면) <span class=\"chem\">x = 2</span>에서 극댓값 <span class=\"chem\">f(2) = 2e^{-1} ≈ 0.73576 = 0.736</span> (3 s.f.)을 가져요. <span class=\"chem\">f(0) = 0</span>이고 <span class=\"chem\">x -&gt; infty</span>일 때 <span class=\"chem\">f(x) -&gt; 0</span>이므로 치역의 최댓값은 <span class=\"chem\">0.736</span>이에요.</p>",
    },

    // ── t2-1-q014 · short · exam · SL · SL 2.1 · 5 marks
    "t2-1-q014": {
      // EN: <p>A triangle has vertices at <span class="chem">A(1, 1)</span>, <span class="chem">B(7, 5)</span>, and <span class="chem">C(3, 8)</span>.<br>(a) Find the equation of the perpendicular bisector of side <span class="chem">[AB]</span> in the form <span class="chem">ax + by + d = 0</span>, where <span class="chem">a, b, d ∈ ℤ</span>. <strong>[3 marks]</strong><br>(b) Determine whether vertex <span class="chem">C(3, 8)</span> is equidistant from <span class="chem">A</span> and <span class="chem">B</span>, justifying your answer. <strong>[2 marks]</strong></p>
      stem: "<p>삼각형의 세 꼭짓점이 <span class=\"chem\">A(1, 1)</span>, <span class=\"chem\">B(7, 5)</span>, <span class=\"chem\">C(3, 8)</span>이에요.<br>(a) 변 <span class=\"chem\">[AB]</span>의 수직이등분선의 방정식을 <span class=\"chem\">ax + by + d = 0</span> (<span class=\"chem\">a, b, d ∈ ℤ</span>) 꼴로 구하시오 (Find). <strong>[3 marks]</strong><br>(b) 꼭짓점 <span class=\"chem\">C(3, 8)</span>이 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>로부터 같은 거리에 있는지 판별하고 (Determine), 그 이유를 설명하시오. <strong>[2 marks]</strong></p>",
      hints: [
        // EN: For part (a), find the midpoint <span class="chem">M</span> and negative reciprocal gradient of <span class="chem">[AB]</span>.
        "(a)에서는 <span class=\"chem\">[AB]</span>의 중점 <span class=\"chem\">M</span>과 음의 역수 기울기를 구하세요.",
        // EN: For part (b), recall that the perpendicular bisector of <span class="chem">[AB]</span> is the exact set of points equidistant from <span class="chem">A</span> and <span class="chem">B</span>!
        "(b)에서는 <span class=\"chem\">[AB]</span>의 수직이등분선이 바로 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>로부터 같은 거리에 있는 점들의 집합임을 떠올리세요!",
      ],
      // EN: <p>(a) The midpoint of <span class="chem">[AB]</span> is <span class="chem">M((1+7)/2, (1+5)/2) = (4, 3)</span>. The gradient of <span class="chem">[AB]</span> is <span class="chem">(5-1)/(7-1) = 2/3</span>, so the perpendicular gradient is <span class="chem">-3/2</span>. Thus <span class="chem">y - 3 = (-3/2)(x - 4) => 2y - 6 = -3x + 12 => 3x + 2y - 18 = 0</span>.<br>(b) A point is equidistant from <span class="chem">A</span> and <span class="chem">B</span> if and only if it lies on the perpendicular bisector of <span class="chem">[AB]</span>. Substituting <span class="chem">C(3, 8)</span> gives <span class="chem">3(3) + 2(8) - 18 = 9 + 16 - 18 = 7 != 0</span>, so <span class="chem">C</span> is not equidistant from <span class="chem">A</span> and <span class="chem">B</span>.</p>
      solution: "<p>(a) <span class=\"chem\">[AB]</span>의 중점은 <span class=\"chem\">M((1+7)/2, (1+5)/2) = (4, 3)</span>이에요. <span class=\"chem\">[AB]</span>의 기울기는 <span class=\"chem\">(5-1)/(7-1) = 2/3</span>이므로 수직 기울기는 <span class=\"chem\">-3/2</span>예요. 따라서 <span class=\"chem\">y - 3 = (-3/2)(x - 4) => 2y - 6 = -3x + 12 => 3x + 2y - 18 = 0</span>이에요.<br>(b) 어떤 점이 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>로부터 같은 거리에 있는 것은 그 점이 <span class=\"chem\">[AB]</span>의 수직이등분선 위에 있을 때뿐이에요. <span class=\"chem\">C(3, 8)</span>을 대입하면 <span class=\"chem\">3(3) + 2(8) - 18 = 9 + 16 - 18 = 7 != 0</span>이므로 <span class=\"chem\">C</span>는 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>로부터 같은 거리에 있지 않아요.</p>",
      // EN: <p>(a) <span class="chem">3x + 2y - 18 = 0</span>; (b) Not equidistant because <span class="chem">3(3) + 2(8) - 18 = 7 != 0</span> (so <span class="chem">C</span> does not lie on the perpendicular bisector of <span class="chem">[AB]</span>).</p>
      answer: "<p>(a) <span class=\"chem\">3x + 2y - 18 = 0</span>; (b) <span class=\"chem\">3(3) + 2(8) - 18 = 7 != 0</span>이므로 (<span class=\"chem\">C</span>가 <span class=\"chem\">[AB]</span>의 수직이등분선 위에 있지 않으므로) 같은 거리에 있지 않다.</p>",
      markscheme: [
        // EN: A1: Finds midpoint of [AB] as M(4, 3).
        "A1: [AB]의 중점 M(4, 3)을 구함.",
        // EN: M1: Finds gradient m_AB = (5 − 1)/(7 − 1) = 2/3 and takes negative reciprocal m_⊥ = −3/2.
        "M1: 기울기 m_AB = (5 − 1)/(7 − 1) = 2/3을 구하고 음의 역수 m_⊥ = −3/2를 취함.",
        // EN: A1: Substitutes into y − 3 = (−3/2)(x − 4) and rearranges to integer general form 3x + 2y − 18 = 0.
        "A1: y − 3 = (−3/2)(x − 4)에 대입하고 정수 일반형 3x + 2y − 18 = 0으로 정리함.",
        // EN: M1: Substitutes C(3, 8) into 3x + 2y − 18 (or computes distances AC = √53 and BC = √25 = 5).
        "M1: 3x + 2y − 18에 C(3, 8)을 대입함 (또는 거리 AC = √53, BC = √25 = 5를 계산함).",
        // EN: R1: States that since 3(3) + 2(8) − 18 = 7 ≠ 0 (or AC ≠ BC), C is NOT equidistant from A and B.
        "R1: 3(3) + 2(8) − 18 = 7 ≠ 0 (또는 AC ≠ BC)이므로 C는 A와 B로부터 같은 거리에 있지 않음을 서술함.",
      ],
    },

    // ── t2-1-q015 · short · exam · SL · SL 2.5 · 6 marks
    "t2-1-q015": {
      // EN: <p>Let <span class="chem">f(x) = 3x - 2</span> for <span class="chem">x ∈ ℝ</span> and <span class="chem">g(x) = 5 / (x + 1)</span> for <span class="chem">x != -1</span>.<br>(a) Find an expression for <span class="chem">(g ∘ f)(x)</span> and state its largest possible domain. <strong>[3 marks]</strong><br>(b) Solve the equation <span class="chem">(f^{-1} ∘ g)(x) = 2</span>. <strong>[3 marks]</strong></p>
      stem: "<p><span class=\"chem\">x ∈ ℝ</span>에서 <span class=\"chem\">f(x) = 3x - 2</span>이고 <span class=\"chem\">x != -1</span>에서 <span class=\"chem\">g(x) = 5 / (x + 1)</span>이라 하자.<br>(a) <span class=\"chem\">(g ∘ f)(x)</span>의 식을 구하고 (Find) 가능한 가장 큰 정의역을 쓰시오 (State). <strong>[3 marks]</strong><br>(b) 방정식 <span class=\"chem\">(f^{-1} ∘ g)(x) = 2</span>를 푸시오. <strong>[3 marks]</strong></p>",
      hints: [
        // EN: For part (a), replace <span class="chem">x</span> in <span class="chem">g(x) = 5/(x + 1)</span> with <span class="chem">(3x - 2)</span>.
        "(a)에서는 <span class=\"chem\">g(x) = 5/(x + 1)</span>의 <span class=\"chem\">x</span> 자리에 <span class=\"chem\">(3x - 2)</span>를 대입하세요.",
        // EN: For part (b), apply <span class="chem">f</span> to both sides of <span class="chem">f^{-1}(g(x)) = 2</span> to get <span class="chem">g(x) = f(2)</span> immediately!
        "(b)에서는 <span class=\"chem\">f^{-1}(g(x)) = 2</span>의 양변에 <span class=\"chem\">f</span>를 적용해 바로 <span class=\"chem\">g(x) = f(2)</span>를 얻으세요!",
      ],
      // EN: <p>(a) <span class="chem">(g ∘ f)(x) = g(3x - 2) = 5 / ((3x - 2) + 1) = 5 / (3x - 1)</span>, which is defined for all real <span class="chem">x != 1/3</span>.<br>(b) Applying <span class="chem">f</span> to both sides of <span class="chem">f^{-1}(g(x)) = 2</span> gives <span class="chem">g(x) = f(2) = 3(2) - 2 = 4</span>. Therefore <span class="chem">5 / (x + 1) = 4 => x + 1 = 5/4 => x = 1/4</span>.</p>
      solution: "<p>(a) <span class=\"chem\">(g ∘ f)(x) = g(3x - 2) = 5 / ((3x - 2) + 1) = 5 / (3x - 1)</span>이며 모든 실수 <span class=\"chem\">x != 1/3</span>에서 정의돼요.<br>(b) <span class=\"chem\">f^{-1}(g(x)) = 2</span>의 양변에 <span class=\"chem\">f</span>를 적용하면 <span class=\"chem\">g(x) = f(2) = 3(2) - 2 = 4</span>가 돼요. 따라서 <span class=\"chem\">5 / (x + 1) = 4 => x + 1 = 5/4 => x = 1/4</span>이에요.</p>",
      // EN: <p>(a) <span class="chem">(g ∘ f)(x) = 5 / (3x - 1)</span> with domain <span class="chem">x != 1/3</span>; (b) <span class="chem">x = 1/4</span> (or <span class="chem">0.25</span>).</p>
      answer: "<p>(a) <span class=\"chem\">(g ∘ f)(x) = 5 / (3x - 1)</span> (정의역: <span class=\"chem\">x != 1/3</span>); (b) <span class=\"chem\">x = 1/4</span> (또는 <span class=\"chem\">0.25</span>).</p>",
      markscheme: [
        // EN: M1: Substitutes f(x) into g(x) to write g(3x − 2) = 5 / ((3x − 2) + 1).
        "M1: f(x)를 g(x)에 대입해 g(3x − 2) = 5 / ((3x − 2) + 1)을 세움.",
        // EN: A1: Simplifies to (g ∘ f)(x) = 5 / (3x − 1).
        "A1: (g ∘ f)(x) = 5 / (3x − 1)로 간단히 정리함.",
        // EN: A1: States domain x ≠ 1/3 (x ∈ ℝ, x ≠ 1/3).
        "A1: 정의역 x ≠ 1/3 (x ∈ ℝ, x ≠ 1/3)을 답함.",
        // EN: M1: Applies f to both sides of f⁻¹(g(x)) = 2 to write g(x) = f(2) (or finds f⁻¹(u) = (u + 2)/3 and sets (g(x) + 2)/3 = 2).
        "M1: f⁻¹(g(x)) = 2의 양변에 f를 적용해 g(x) = f(2)를 세움 (또는 f⁻¹(u) = (u + 2)/3을 구해 (g(x) + 2)/3 = 2를 세움).",
        // EN: A1: Evaluates g(x) = 3(2) − 2 = 4, so 5 / (x + 1) = 4.
        "A1: g(x) = 3(2) − 2 = 4를 구해 5 / (x + 1) = 4를 얻음.",
        // EN: A1: Solves x + 1 = 5/4 to get x = 1/4.
        "A1: x + 1 = 5/4를 풀어 x = 1/4을 구함.",
      ],
    },

    // ── t2-1-q016 · numeric · challenge · AHL · AHL 2.14 · 4 marks
    "t2-1-q016": {
      // EN: <p>The rational function <span class="chem">f(x) = (kx + 5)/(2x - 6)</span> (<span class="chem">x != 3</span>) is a <strong>self-inverse function</strong>, meaning that <span class="chem">f^{-1}(x) = f(x)</span> for all <span class="chem">x</span> in its domain. Find the value of the constant <span class="chem">k</span>.</p>
      stem: "<p>유리함수 <span class=\"chem\">f(x) = (kx + 5)/(2x - 6)</span> (<span class=\"chem\">x != 3</span>)은 정의역의 모든 <span class=\"chem\">x</span>에 대해 <span class=\"chem\">f^{-1}(x) = f(x)</span>를 만족하는 <strong>자기역함수(self-inverse function)</strong>예요. 상수 <span class=\"chem\">k</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: "self-inverse" means that applying <span class="chem">f</span> twice gives back <span class="chem">x</span>, so the graph of <span class="chem">f</span> is its own reflection in <span class="chem">y = x</span>. Use the asymptotes (or find <span class="chem">f^{-1}</span> algebraically) and match the result with <span class="chem">f</span>.
        "해석: \"자기역함수\"란 <span class=\"chem\">f</span>를 두 번 적용하면 <span class=\"chem\">x</span>로 돌아온다는 뜻이므로, <span class=\"chem\">f</span>의 그래프는 <span class=\"chem\">y = x</span>에 대해 대칭 이동해도 자기 자신이 됩니다. 점근선을 이용하거나 (또는 <span class=\"chem\">f^{-1}</span>를 대수적으로 구하여) 그 결과를 <span class=\"chem\">f</span>와 비교하세요.",
        // EN: The domain of <span class="chem">f</span> is <span class="chem">x != 3</span> (vertical asymptote <span class="chem">x = 3</span>), and the range of <span class="chem">f</span> is <span class="chem">y != k/2</span> (horizontal asymptote <span class="chem">y = k/2</span>).
        "<span class=\"chem\">f</span>의 정의역은 <span class=\"chem\">x != 3</span> (수직점근선 <span class=\"chem\">x = 3</span>)이고 <span class=\"chem\">f</span>의 치역은 <span class=\"chem\">y != k/2</span> (수평점근선 <span class=\"chem\">y = k/2</span>)예요.",
        // EN: Because <span class="chem">f^{-1} = f</span>, we must have <span class="chem">Domain(f) = Range(f)</span>, so the excluded value <span class="chem">k/2</span> must equal <span class="chem">3</span>!
        "<span class=\"chem\">f^{-1} = f</span>이므로 <span class=\"chem\">Domain(f) = Range(f)</span>여야 하고, 따라서 제외되는 값 <span class=\"chem\">k/2</span>가 <span class=\"chem\">3</span>과 같아야 해요!",
      ],
      // EN: <p>Method 1 (Asymptote symmetry): For <span class="chem">f</span> to equal <span class="chem">f^{-1}</span>, its vertical asymptote <span class="chem">x = 3</span> and horizontal asymptote <span class="chem">y = k/2</span> must be reflections of each other in <span class="chem">y = x</span>. Hence <span class="chem">k/2 = 3 => k = 6</span>.<br>Method 2 (Algebraic inversion): Let <span class="chem">x = (ky + 5)/(2y - 6) => 2xy - 6x = ky + 5 => y(2x - k) = 6x + 5 => f^{-1}(x) = (6x + 5)/(2x - k)</span>. Matching <span class="chem">f^{-1}(x) = f(x)</span> gives <span class="chem">k = 6</span>.</p>
      solution: "<p>풀이 1 (점근선 대칭): <span class=\"chem\">f</span>와 <span class=\"chem\">f^{-1}</span>가 같으려면 수직점근선 <span class=\"chem\">x = 3</span>과 수평점근선 <span class=\"chem\">y = k/2</span>가 <span class=\"chem\">y = x</span>에 대해 서로 대칭이어야 해요. 따라서 <span class=\"chem\">k/2 = 3 => k = 6</span>이에요.<br>풀이 2 (대수적 역함수): <span class=\"chem\">x = (ky + 5)/(2y - 6) => 2xy - 6x = ky + 5 => y(2x - k) = 6x + 5 => f^{-1}(x) = (6x + 5)/(2x - k)</span>이므로 <span class=\"chem\">f^{-1}(x) = f(x)</span>와 비교하면 <span class=\"chem\">k = 6</span>이에요.</p>",
    },

    // ── t2-1-q017 · mcq · challenge · SL · SL 2.5 · 4 marks
    "t2-1-q017": {
      // EN: <p>Let <span class="chem">f(x) = sqrt(x - 2)</span> for <span class="chem">x &gt;= 2</span> and <span class="chem">g(x) = 6 - x^2</span> for <span class="chem">x &gt;= 0</span>. What is the largest domain and corresponding range of the composite function <span class="chem">(f ∘ g)(x)</span>?</p>
      stem: "<p><span class=\"chem\">x &gt;= 2</span>에서 <span class=\"chem\">f(x) = sqrt(x - 2)</span>이고 <span class=\"chem\">x &gt;= 0</span>에서 <span class=\"chem\">g(x) = 6 - x^2</span>이라 하자. 합성함수 <span class=\"chem\">(f ∘ g)(x)</span>의 가능한 가장 큰 정의역과 그에 따른 치역은 무엇인가요?</p>",
      options: [
        // EN: Domain: <span class="chem">0 &lt;= x &lt;= 2</span>; Range: <span class="chem">0 &lt;= y &lt;= 2</span>
        "정의역: <span class=\"chem\">0 &lt;= x &lt;= 2</span>; 치역: <span class=\"chem\">0 &lt;= y &lt;= 2</span>",
        // EN: Domain: <span class="chem">-2 &lt;= x &lt;= 2</span>; Range: <span class="chem">0 &lt;= y &lt;= 2</span>
        "정의역: <span class=\"chem\">-2 &lt;= x &lt;= 2</span>; 치역: <span class=\"chem\">0 &lt;= y &lt;= 2</span>",
        // EN: Domain: <span class="chem">0 &lt;= x &lt;= sqrt(6)</span>; Range: <span class="chem">0 &lt;= y &lt;= 2</span>
        "정의역: <span class=\"chem\">0 &lt;= x &lt;= sqrt(6)</span>; 치역: <span class=\"chem\">0 &lt;= y &lt;= 2</span>",
        // EN: Domain: <span class="chem">x &gt;= 0</span>; Range: <span class="chem">0 &lt;= y &lt;= sqrt(6)</span>
        "정의역: <span class=\"chem\">x &gt;= 0</span>; 치역: <span class=\"chem\">0 &lt;= y &lt;= sqrt(6)</span>",
      ],
      hints: [
        // EN: Decode: "the largest domain of <span class="chem">f ∘ g</span>" means the inputs <span class="chem">x</span> that <span class="chem">g</span> accepts AND whose outputs <span class="chem">g(x)</span> are allowed into <span class="chem">f</span>. Combine the two restrictions, then find the range from the simplified composite.
        "해석: \"<span class=\"chem\">f ∘ g</span>의 가장 큰 정의역\"은 <span class=\"chem\">g</span>에 입력할 수 있고 그 출력 <span class=\"chem\">g(x)</span>가 <span class=\"chem\">f</span>에 입력될 수 있는 <span class=\"chem\">x</span>들입니다. 두 제한을 결합한 다음, 간단히 한 합성함수에서 치역을 구하세요.",
        // EN: An input <span class="chem">x</span> is in the domain of <span class="chem">f ∘ g</span> if and only if <span class="chem">x ∈ Domain(g)</span> (<span class="chem">x &gt;= 0</span>) AND <span class="chem">g(x) ∈ Domain(f)</span> (<span class="chem">6 - x^2 &gt;= 2</span>).
        "입력 <span class=\"chem\">x</span>가 <span class=\"chem\">f ∘ g</span>의 정의역에 속하려면 <span class=\"chem\">x ∈ Domain(g)</span> (<span class=\"chem\">x &gt;= 0</span>)이면서 동시에 <span class=\"chem\">g(x) ∈ Domain(f)</span> (<span class=\"chem\">6 - x^2 &gt;= 2</span>)여야 해요.",
        // EN: Solve <span class="chem">6 - x^2 &gt;= 2</span> for <span class="chem">x &gt;= 0</span>, then evaluate <span class="chem">f(g(x)) = sqrt(4 - x^2)</span> on that interval.
        "<span class=\"chem\">x &gt;= 0</span>에서 <span class=\"chem\">6 - x^2 &gt;= 2</span>를 푼 뒤, 그 구간에서 <span class=\"chem\">f(g(x)) = sqrt(4 - x^2)</span>의 값의 범위를 구하세요.",
      ],
      // EN: <p>We require both <span class="chem">x &gt;= 0</span> (from <span class="chem">Domain(g)</span>) and <span class="chem">g(x) &gt;= 2</span> (from <span class="chem">Domain(f)</span>): <span class="chem">6 - x^2 &gt;= 2 => x^2 &lt;= 4 => -2 &lt;= x &lt;= 2</span>. Intersecting with <span class="chem">x &gt;= 0</span> gives the domain <span class="chem">0 &lt;= x &lt;= 2</span>. On <span class="chem">0 &lt;= x &lt;= 2</span>, <span class="chem">(f ∘ g)(x) = sqrt((6 - x^2) - 2) = sqrt(4 - x^2)</span> decreases from <span class="chem">sqrt(4) = 2</span> at <span class="chem">x = 0</span> to <span class="chem">0</span> at <span class="chem">x = 2</span>, so the range is <span class="chem">0 &lt;= y &lt;= 2</span>.</p>
      solution: "<p><span class=\"chem\">x &gt;= 0</span> (<span class=\"chem\">Domain(g)</span>)과 <span class=\"chem\">g(x) &gt;= 2</span> (<span class=\"chem\">Domain(f)</span>)를 모두 만족해야 해요: <span class=\"chem\">6 - x^2 &gt;= 2 => x^2 &lt;= 4 => -2 &lt;= x &lt;= 2</span>. <span class=\"chem\">x &gt;= 0</span>과 교집합을 구하면 정의역은 <span class=\"chem\">0 &lt;= x &lt;= 2</span>예요. <span class=\"chem\">0 &lt;= x &lt;= 2</span>에서 <span class=\"chem\">(f ∘ g)(x) = sqrt((6 - x^2) - 2) = sqrt(4 - x^2)</span>은 <span class=\"chem\">x = 0</span>일 때 <span class=\"chem\">sqrt(4) = 2</span>에서 <span class=\"chem\">x = 2</span>일 때 <span class=\"chem\">0</span>까지 감소하므로 치역은 <span class=\"chem\">0 &lt;= y &lt;= 2</span>예요.</p>",
      misconception: {
        // EN (option B): You solved 6 − x² ≥ 2 ⇒ −2 ≤ x ≤ 2, but forgot that the given domain of the inner function g already restricts x ≥ 0.
        "1": "6 − x² ≥ 2 ⇒ −2 ≤ x ≤ 2는 풀었지만, 안쪽 함수 g의 주어진 정의역이 이미 x ≥ 0으로 제한되어 있음을 빠뜨렸어요.",
        // EN (option C): You required g(x) ≥ 0 (x ≤ √6) instead of requiring g(x) to lie in Domain(f) = [2, ∞), which requires 6 − x² ≥ 2 ⇒ x ≤ 2.
        "2": "g(x)가 Domain(f) = [2, ∞)에 들어가야 하므로 6 − x² ≥ 2 ⇒ x ≤ 2여야 하는데, g(x) ≥ 0 (x ≤ √6)으로 풀었어요.",
        // EN (option D): Without restricting x ≤ 2, outputs of g(x) fall below 2 and make √(g(x) − 2) undefined.
        "3": "x ≤ 2로 제한하지 않으면 g(x)의 출력이 2보다 작아져 √(g(x) − 2)가 정의되지 않아요.",
      },
    },

    // ── t2-1-q018 · short · challenge · AHL · SL 2.5 / AHL 2.14 · 7 marks
    "t2-1-q018": {
      // EN: <p>The function <span class="chem">f</span> is defined by <span class="chem">f(x) = e^{2x} - 4e^x + 5</span> for <span class="chem">x &lt;= a</span>.<br>(a) By completing the square in terms of <span class="chem">e^x</span>, find the largest possible value of <span class="chem">a</span> such that <span class="chem">f^{-1}</span> exists. <strong>[3 marks]</strong><br>(b) For this value of <span class="chem">a</span>, find an expression for <span class="chem">f^{-1}(x)</span> and state the domain of <span class="chem">f^{-1}</span> carefully. <strong>[4 marks]</strong></p>
      stem: "<p>함수 <span class=\"chem\">f</span>가 <span class=\"chem\">x &lt;= a</span>에서 <span class=\"chem\">f(x) = e^{2x} - 4e^x + 5</span>로 정의되어 있어요.<br>(a) <span class=\"chem\">e^x</span>에 대한 완전제곱식으로 변형하여, <span class=\"chem\">f^{-1}</span>가 존재하도록 하는 <span class=\"chem\">a</span>의 가능한 최댓값을 구하시오 (Find). <strong>[3 marks]</strong><br>(b) 이 <span class=\"chem\">a</span>의 값에 대해 <span class=\"chem\">f^{-1}(x)</span>의 식을 구하고 (Find), <span class=\"chem\">f^{-1}</span>의 정의역을 정확히 쓰시오 (State). <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: <span class="chem">e^{2x} = (e^x)^2</span>, so <span class="chem">f</span> is a quadratic in disguise. "The largest <span class="chem">a</span> such that <span class="chem">f^{-1}</span> exists" asks where <span class="chem">f</span> stops being one-to-one (its turning point), and the domain of <span class="chem">f^{-1}</span> is the range of <span class="chem">f</span> on <span class="chem">x &lt;= a</span>.
        "해석: <span class=\"chem\">e^{2x} = (e^x)^2</span>이므로 <span class=\"chem\">f</span>는 모양을 바꾼 이차함수입니다. \"<span class=\"chem\">f^{-1}</span>가 존재하는 가장 큰 <span class=\"chem\">a</span>\"는 <span class=\"chem\">f</span>가 일대일이 아니게 되는 곳(꼭짓점)을 묻는 것이고, <span class=\"chem\">f^{-1}</span>의 정의역은 <span class=\"chem\">x &lt;= a</span>에서 <span class=\"chem\">f</span>의 치역입니다.",
        // EN: Treat <span class="chem">u = e^x</span> as the variable in <span class="chem">u^2 - 4u + 5 = (u - 2)^2 + 1</span>.
        "<span class=\"chem\">u = e^x</span>를 변수로 보고 <span class=\"chem\">u^2 - 4u + 5 = (u - 2)^2 + 1</span>로 완전제곱식을 만드세요.",
        // EN: Watch out for the upper bound of the range of <span class="chem">f</span>: as <span class="chem">x -&gt; -infty</span>, <span class="chem">e^x -&gt; 0^+</span>, so <span class="chem">f(x)</span> approaches <span class="chem">(0 - 2)^2 + 1 = 5</span> from below without ever reaching <span class="chem">5</span>!
        "<span class=\"chem\">f</span>의 치역의 상한을 주의하세요: <span class=\"chem\">x -&gt; -infty</span>일 때 <span class=\"chem\">e^x -&gt; 0^+</span>이므로 <span class=\"chem\">f(x)</span>는 <span class=\"chem\">5</span>에 도달하지 못하고 아래에서 <span class=\"chem\">(0 - 2)^2 + 1 = 5</span>에 가까워져요!",
      ],
      // EN: <p>(a) Completing the square in <span class="chem">e^x</span> gives <span class="chem">f(x) = (e^x - 2)^2 + 1</span>. The minimum occurs when <span class="chem">e^x = 2 => x = ln 2</span>. Hence the largest value of <span class="chem">a</span> for which <span class="chem">f</span> is one-to-one on <span class="chem">(-infty, a]</span> is <span class="chem">a = ln 2</span>.<br>(b) As <span class="chem">x</span> increases from <span class="chem">-infty</span> to <span class="chem">ln 2</span>, <span class="chem">e^x</span> increases across <span class="chem">(0, 2]</span>, so <span class="chem">f(x) = (e^x - 2)^2 + 1</span> decreases from <span class="chem">5</span> (excluded, since <span class="chem">e^x &gt; 0</span>) down to <span class="chem">1</span> (included at <span class="chem">x = ln 2</span>). Thus <span class="chem">Domain(f^{-1}) = Range(f) = [1, 5)</span>, i.e., <span class="chem">1 &lt;= x &lt; 5</span>. Swapping <span class="chem">x</span> and <span class="chem">y</span>: <span class="chem">x = (e^y - 2)^2 + 1 => e^y = 2 - sqrt(x - 1)</span> (minus sign since <span class="chem">e^y &lt;= 2</span>), so <span class="chem">f^{-1}(x) = ln(2 - sqrt(x - 1))</span>.</p>
      solution: "<p>(a) <span class=\"chem\">e^x</span>에 대해 완전제곱식으로 고치면 <span class=\"chem\">f(x) = (e^x - 2)^2 + 1</span>이에요. 최솟값은 <span class=\"chem\">e^x = 2 => x = ln 2</span>일 때 나와요. 따라서 <span class=\"chem\">(-infty, a]</span>에서 <span class=\"chem\">f</span>가 일대일함수가 되도록 하는 <span class=\"chem\">a</span>의 최댓값은 <span class=\"chem\">a = ln 2</span>예요.<br>(b) <span class=\"chem\">x</span>가 <span class=\"chem\">-infty</span>에서 <span class=\"chem\">ln 2</span>까지 증가할 때 <span class=\"chem\">e^x</span>는 <span class=\"chem\">(0, 2]</span>에서 증가하므로 <span class=\"chem\">f(x) = (e^x - 2)^2 + 1</span>은 <span class=\"chem\">5</span> (<span class=\"chem\">e^x &gt; 0</span>이므로 제외)에서 <span class=\"chem\">1</span> (<span class=\"chem\">x = ln 2</span>에서 포함)까지 감소해요. 따라서 <span class=\"chem\">Domain(f^{-1}) = Range(f) = [1, 5)</span>, 즉 <span class=\"chem\">1 &lt;= x &lt; 5</span>예요. <span class=\"chem\">x</span>와 <span class=\"chem\">y</span>를 바꾸면 <span class=\"chem\">x = (e^y - 2)^2 + 1 => e^y = 2 - sqrt(x - 1)</span> (<span class=\"chem\">e^y &lt;= 2</span>이므로 마이너스 부호 선택)이므로 <span class=\"chem\">f^{-1}(x) = ln(2 - sqrt(x - 1))</span>이에요.</p>",
      // EN: <p>(a) <span class="chem">a = ln 2</span>; (b) <span class="chem">f^{-1}(x) = ln(2 - sqrt(x - 1))</span> with domain <span class="chem">1 &lt;= x &lt; 5</span>.</p>
      answer: "<p>(a) <span class=\"chem\">a = ln 2</span>; (b) <span class=\"chem\">f^{-1}(x) = ln(2 - sqrt(x - 1))</span> (정의역: <span class=\"chem\">1 &lt;= x &lt; 5</span>).</p>",
      markscheme: [
        // EN: M1: Rewrites f(x) as a quadratic in u = e^x and completes the square: f(x) = (e^x − 2)^2 + 1.
        "M1: f(x)를 u = e^x에 대한 이차식으로 보고 완전제곱식으로 변형함: f(x) = (e^x − 2)^2 + 1.",
        // EN: A1: Identifies the turning point at e^x = 2, so a = ln 2.
        "A1: 꼭짓점이 e^x = 2일 때임을 구해 a = ln 2를 찾음.",
        // EN: R1: Explains or shows that for x ≤ ln 2, 0 < e^x ≤ 2, where u ↦ (u − 2)^2 + 1 is strictly decreasing (one-to-one).
        "R1: x ≤ ln 2일 때 0 < e^x ≤ 2이므로 u ↦ (u − 2)^2 + 1이 순감소(일대일함수)함을 설명하거나 보임.",
        // EN: M1: Swaps x and y in y = (e^x − 2)^2 + 1 to write (e^y − 2)^2 = x − 1 ⇒ e^y = 2 ± √(x − 1).
        "M1: y = (e^x − 2)^2 + 1에서 x와 y를 바꾸어 (e^y − 2)^2 = x − 1 ⇒ e^y = 2 ± √(x − 1)을 세움.",
        // EN: R1: Selects the minus sign e^y = 2 − √(x − 1) because y ≤ ln 2 means e^y ≤ 2.
        "R1: y ≤ ln 2는 e^y ≤ 2를 뜻하므로 마이너스 부호 e^y = 2 − √(x − 1)을 선택함.",
        // EN: A1: Takes natural log to obtain f⁻¹(x) = ln(2 − √(x − 1)).
        "A1: 자연로그를 취해 f⁻¹(x) = ln(2 − √(x − 1))을 구함.",
        // EN: A1: States the exact domain of f⁻¹ (= range of f for x ≤ ln 2) as 1 ≤ x < 5 (noting that as x → −∞, e^x → 0⁺ so f(x) → 5⁻).
        "A1: f⁻¹의 정확한 정의역(= x ≤ ln 2에서 f의 치역)을 1 ≤ x < 5로 답함 (x → −∞일 때 e^x → 0⁺이므로 f(x) → 5⁻임을 확인).",
      ],
    },

    // ── t2-1-q019 · short · exam · SL · SL 2.3 · 4 marks
    "t2-1-q019": {
      // EN: <p>Let <span class="chem">f(x) = e^x - x^2</span> for <span class="chem">-2 &lt;= x &lt;= 3</span>.<br>(a) Use your GDC to sketch the graph of <span class="chem">y = f(x)</span> on this domain, labelling the coordinates of any axis intercepts and of the end points. <strong>[3 marks]</strong><br>(b) Hence write down the number of solutions of <span class="chem">e^x = x^2</span> for <span class="chem">-2 &lt;= x &lt;= 3</span>. <strong>[1 mark]</strong></p>
      stem: "<p><span class=\"chem\">-2 &lt;= x &lt;= 3</span>에서 <span class=\"chem\">f(x) = e^x - x^2</span>라 하자.<br>(a) GDC를 이용하여 이 정의역에서 <span class=\"chem\">y = f(x)</span>의 그래프를 개형으로 그리고 (Sketch), 좌표축과의 교점과 끝점의 좌표를 표시하시오. <strong>[3 marks]</strong><br>(b) 이를 이용하여 (Hence) <span class=\"chem\">-2 &lt;= x &lt;= 3</span>에서 방정식 <span class=\"chem\">e^x = x^2</span>의 해의 개수를 쓰시오 (Write down). <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Enter <span class="chem">Y_1 = e^x - x^2</span> (or <span class="chem">Y_1 = e^x</span>, <span class="chem">Y_2 = x^2</span> and <span class="chem">Y_3 = Y_1 - Y_2</span>) and set the window to <span class="chem">-2 &lt;= x &lt;= 3</span>.
        "<span class=\"chem\">Y_1 = e^x - x^2</span>(또는 <span class=\"chem\">Y_1 = e^x</span>, <span class=\"chem\">Y_2 = x^2</span>, <span class=\"chem\">Y_3 = Y_1 - Y_2</span>)를 입력하고 화면 범위를 <span class=\"chem\">-2 &lt;= x &lt;= 3</span>으로 맞추세요.",
        // EN: Use the zero tool for the <span class="chem">x</span>-intercept and evaluate <span class="chem">f(-2)</span>, <span class="chem">f(0)</span> and <span class="chem">f(3)</span>. Solutions of <span class="chem">e^x = x^2</span> are the zeros of <span class="chem">f</span>.
        "zero 기능으로 <span class=\"chem\">x</span>절편을 구하고 <span class=\"chem\">f(-2)</span>, <span class=\"chem\">f(0)</span>, <span class=\"chem\">f(3)</span>을 계산하세요. <span class=\"chem\">e^x = x^2</span>의 해는 <span class=\"chem\">f</span>의 영점이에요.",
      ],
      // EN: <p>(a) On the GDC, <span class="chem">y = e^x - x^2</span> rises from <span class="chem">f(-2) = e^{-2} - 4 ≈ -3.86</span> to <span class="chem">f(3) = e^3 - 9 ≈ 11.1</span> with no turning points (it bends but never levels off). The zero tool gives the <span class="chem">x</span>-intercept <span class="chem">(-0.703, 0)</span>, and <span class="chem">f(0) = 1</span> gives the <span class="chem">y</span>-intercept <span class="chem">(0, 1)</span>. A sketch shows this shape and labels these four points; it does not need to be to scale. Do not extend the curve beyond <span class="chem">x = -2</span> or <span class="chem">x = 3</span>.<br>(b) The solutions of <span class="chem">e^x = x^2</span> are the zeros of <span class="chem">f</span>. The graph crosses the <span class="chem">x</span>-axis once, so there is <strong>one</strong> solution (<span class="chem">x ≈ -0.703</span>).</p>
      solution: "<p>(a) GDC에서 <span class=\"chem\">y = e^x - x^2</span>는 <span class=\"chem\">f(-2) = e^{-2} - 4 ≈ -3.86</span>에서 <span class=\"chem\">f(3) = e^3 - 9 ≈ 11.1</span>까지 증가하고 극점이 없어요(휘는 정도는 바뀌지만 평평해지지는 않아요). zero 기능으로 <span class=\"chem\">x</span>절편 <span class=\"chem\">(-0.703, 0)</span>을 얻고, <span class=\"chem\">f(0) = 1</span>에서 <span class=\"chem\">y</span>절편 <span class=\"chem\">(0, 1)</span>을 얻어요. 개형에는 이 모양과 네 점을 표시하면 되고, 축척을 정확히 맞출 필요는 없어요. 곡선을 <span class=\"chem\">x = -2</span>나 <span class=\"chem\">x = 3</span> 밖으로 늘이지 마세요.<br>(b) <span class=\"chem\">e^x = x^2</span>의 해는 <span class=\"chem\">f</span>의 영점이에요. 그래프가 <span class=\"chem\">x</span>축과 한 번만 만나므로 해는 <strong>1개</strong>(<span class=\"chem\">x ≈ -0.703</span>)예요.</p>",
      // EN: <p>(a) An increasing curve with no turning points from <span class="chem">(-2, -3.86)</span> to <span class="chem">(3, 11.1)</span>, crossing the <span class="chem">x</span>-axis at <span class="chem">(-0.703, 0)</span> and the <span class="chem">y</span>-axis at <span class="chem">(0, 1)</span>; (b) one solution.</p>
      answer: "<p>(a) <span class=\"chem\">(-2, -3.86)</span>에서 <span class=\"chem\">(3, 11.1)</span>까지 극점이 없는 증가 곡선으로, <span class=\"chem\">x</span>축과 <span class=\"chem\">(-0.703, 0)</span>, <span class=\"chem\">y</span>축과 <span class=\"chem\">(0, 1)</span>에서 만나요; (b) 해는 1개.</p>",
      markscheme: [
        // EN: A1: Correct shape: increasing throughout −2 ≤ x ≤ 3 with no turning points, drawn only on the given domain.
        "A1: 올바른 모양: −2 ≤ x ≤ 3에서 계속 증가하고 극점(전환점)이 없으며, 주어진 정의역에서만 그림.",
        // EN: A1: Axis intercepts labelled (−0.703, 0) and (0, 1).
        "A1: 좌표축과의 교점 (−0.703, 0)과 (0, 1)을 표시함.",
        // EN: A1: End points labelled (−2, −3.86) and (3, 11.1).
        "A1: 끝점 (−2, −3.86)과 (3, 11.1)을 표시함.",
        // EN: A1: One solution (the graph crosses y = 0 once, at x ≈ −0.703).
        "A1: 해는 1개 (그래프가 x ≈ −0.703에서 y = 0과 한 번만 만남).",
      ],
    },

  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ko', 't2-1.q', {
  questions: {

    // ── t2-1-q020 · numeric · foundation · SL · SL 2.1 · 3 marks
    "t2-1-q020": {
      // EN: <p>A straight line passes through the points <span class="chem">P(-3, 7)</span> and <span class="chem">Q(5, -5)</span>. Find the exact <span class="chem">y</span>-intercept of the line.</p>
      stem: "<p>직선이 두 점 <span class=\"chem\">P(-3, 7)</span>과 <span class=\"chem\">Q(5, -5)</span>를 지난다. 이 직선의 <span class=\"chem\">y</span>절편의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Find the gradient first: <span class="chem">m = (y_2 - y_1)/(x_2 - x_1)</span>.
        "먼저 기울기를 구하세요: <span class=\"chem\">m = (y_2 - y_1)/(x_2 - x_1)</span>.",
        // EN: With <span class="chem">m = -3/2</span>, write <span class="chem">y - 7 = -(3/2)(x + 3)</span> and put <span class="chem">x = 0</span>.
        "<span class=\"chem\">m = -3/2</span>을 이용해 <span class=\"chem\">y - 7 = -(3/2)(x + 3)</span>을 세우고 <span class=\"chem\">x = 0</span>을 대입하세요.",
      ],
      // EN: <p>Gradient <span class="chem">m = (-5 - 7)/(5 - (-3)) = -12/8 = -3/2</span>. Point-gradient form through <span class="chem">P</span>: <span class="chem">y - 7 = -(3/2)(x + 3)</span>. At <span class="chem">x = 0</span>: <span class="chem">y = 7 - 9/2 = 5/2</span>. The <span class="chem">y</span>-intercept is <span class="chem">5/2</span>. Check with <span class="chem">Q</span>: <span class="chem">-(3/2)(5) + 5/2 = -5</span>.</p>
      solution: "<p>기울기는 <span class=\"chem\">m = (-5 - 7)/(5 - (-3)) = -12/8 = -3/2</span>이에요. <span class=\"chem\">P</span>를 지나는 점-기울기 형태는 <span class=\"chem\">y - 7 = -(3/2)(x + 3)</span>이에요. <span class=\"chem\">x = 0</span>일 때 <span class=\"chem\">y = 7 - 9/2 = 5/2</span>예요. 따라서 <span class=\"chem\">y</span>절편은 <span class=\"chem\">5/2</span>예요. <span class=\"chem\">Q</span>로 확인하면 <span class=\"chem\">-(3/2)(5) + 5/2 = -5</span>예요.</p>",
    },

    // ── t2-1-q021 · numeric · foundation · SL · SL 2.2 · 3 marks
    "t2-1-q021": {
      // EN: <p>The function <span class="chem">f</span> is defined by <span class="chem">f(x) = (2x - 1)/(x + 3)</span> for <span class="chem">x != -3</span>. Find the value of <span class="chem">f^{-1}(3)</span>.</p>
      stem: "<p>함수 <span class=\"chem\">f</span>는 <span class=\"chem\">x != -3</span>에서 <span class=\"chem\">f(x) = (2x - 1)/(x + 3)</span>으로 정의된다. <span class=\"chem\">f^{-1}(3)</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: You do not need a formula for <span class="chem">f^{-1}</span>. If <span class="chem">f^{-1}(3) = a</span>, then <span class="chem">f(a) = 3</span>.
        "<span class=\"chem\">f^{-1}</span>의 식은 필요 없어요. <span class=\"chem\">f^{-1}(3) = a</span>이면 <span class=\"chem\">f(a) = 3</span>이에요.",
        // EN: Solve <span class="chem">(2a - 1)/(a + 3) = 3</span> by multiplying both sides by <span class="chem">a + 3</span>.
        "<span class=\"chem\">(2a - 1)/(a + 3) = 3</span>의 양변에 <span class=\"chem\">a + 3</span>을 곱해서 푸세요.",
      ],
      // EN: <p>Let <span class="chem">f^{-1}(3) = a</span>, so <span class="chem">f(a) = 3</span>: <span class="chem">2a - 1 = 3(a + 3) = 3a + 9</span>, so <span class="chem">a = -10</span>. Check: <span class="chem">f(-10) = (-21)/(-7) = 3</span>. So <span class="chem">f^{-1}(3) = -10</span>.</p>
      solution: "<p><span class=\"chem\">f^{-1}(3) = a</span>라 하면 <span class=\"chem\">f(a) = 3</span>이므로 <span class=\"chem\">2a - 1 = 3(a + 3) = 3a + 9</span>, 즉 <span class=\"chem\">a = -10</span>이에요. 확인: <span class=\"chem\">f(-10) = (-21)/(-7) = 3</span>. 따라서 <span class=\"chem\">f^{-1}(3) = -10</span>이에요.</p>",
    },

    // ── t2-1-q022 · numeric · foundation · SL · SL 2.5 · 3 marks
    "t2-1-q022": {
      // EN: <p>Let <span class="chem">f(x) = 5 - 2x</span> for <span class="chem">x ∈ ℝ</span>. Solve the equation <span class="chem">(f ∘ f)(x) = 7</span>.</p>
      stem: "<p><span class=\"chem\">x ∈ ℝ</span>에서 <span class=\"chem\">f(x) = 5 - 2x</span>라 하자. 방정식 <span class=\"chem\">(f ∘ f)(x) = 7</span>을 푸시오 (Solve).</p>",
      hints: [
        // EN: <span class="chem">(f ∘ f)(x) = f(f(x))</span>: replace every <span class="chem">x</span> in <span class="chem">5 - 2x</span> by <span class="chem">(5 - 2x)</span>.
        "<span class=\"chem\">(f ∘ f)(x) = f(f(x))</span>예요. <span class=\"chem\">5 - 2x</span>의 모든 <span class=\"chem\">x</span> 자리에 <span class=\"chem\">(5 - 2x)</span>를 대입하세요.",
        // EN: You should get <span class="chem">(f ∘ f)(x) = 4x - 5</span>. Now set it equal to <span class="chem">7</span>.
        "<span class=\"chem\">(f ∘ f)(x) = 4x - 5</span>가 나와야 해요. 이제 이것을 <span class=\"chem\">7</span>과 같다고 놓으세요.",
      ],
      // EN: <p><span class="chem">(f ∘ f)(x) = 5 - 2(5 - 2x) = 5 - 10 + 4x = 4x - 5</span>. Then <span class="chem">4x - 5 = 7 => x = 3</span>. Check: <span class="chem">f(3) = -1</span> and <span class="chem">f(-1) = 7</span>.</p>
      solution: "<p><span class=\"chem\">(f ∘ f)(x) = 5 - 2(5 - 2x) = 5 - 10 + 4x = 4x - 5</span>예요. 따라서 <span class=\"chem\">4x - 5 = 7 => x = 3</span>이에요. 확인: <span class=\"chem\">f(3) = -1</span>, <span class=\"chem\">f(-1) = 7</span>.</p>",
    },

    // ── t2-1-q023 · short · exam · SL · SL 2.1 · 5 marks
    "t2-1-q023": {
      // EN: <p>The line <span class="chem">L_1</span> has equation <span class="chem">kx + 3y = 6</span> and the line <span class="chem">L_2</span> has equation <span class="chem">y = (2k - 1)x + 4</span>, where <span class="chem">k</span> is a constant.<br>(a) Find the value of <span class="chem">k</span> for which <span class="chem">L_1</span> and <span class="chem">L_2</span> are parallel. <strong>[2 marks]</strong><br>(b) Find the possible values of <span class="chem">k</span> for which <span class="chem">L_1</span> and <span class="chem">L_2</span> are perpendicular. <strong>[3 marks]</strong></p>
      stem: "<p>직선 <span class=\"chem\">L_1</span>의 방정식은 <span class=\"chem\">kx + 3y = 6</span>이고 직선 <span class=\"chem\">L_2</span>의 방정식은 <span class=\"chem\">y = (2k - 1)x + 4</span>이다. 단, <span class=\"chem\">k</span>는 상수이다.<br>(a) <span class=\"chem\">L_1</span>과 <span class=\"chem\">L_2</span>가 평행하도록 하는 <span class=\"chem\">k</span>의 값을 구하시오 (Find). <strong>[2 marks]</strong><br>(b) <span class=\"chem\">L_1</span>과 <span class=\"chem\">L_2</span>가 수직이 되도록 하는 <span class=\"chem\">k</span>의 값을 모두 구하시오. <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Write <span class="chem">L_1</span> in the form <span class="chem">y = mx + c</span> so you can read off its gradient in terms of <span class="chem">k</span>.
        "<span class=\"chem\">L_1</span>을 <span class=\"chem\">y = mx + c</span> 꼴로 바꾸면 기울기를 <span class=\"chem\">k</span>로 나타내어 읽을 수 있어요.",
        // EN: Parallel: equal gradients. Perpendicular: gradients multiply to <span class="chem">-1</span>, which gives a quadratic in <span class="chem">k</span>.
        "평행: 기울기가 같아요. 수직: 기울기의 곱이 <span class=\"chem\">-1</span>이고, 이것은 <span class=\"chem\">k</span>에 대한 이차방정식이 돼요.",
      ],
      // EN: <p>(a) <span class="chem">L_1</span>: <span class="chem">y = -(k/3)x + 2</span>, gradient <span class="chem">-k/3</span>. <span class="chem">L_2</span> has gradient <span class="chem">2k - 1</span>. Parallel: <span class="chem">-k/3 = 2k - 1 => -k = 6k - 3 => k = 3/7</span>.<br>(b) Perpendicular: <span class="chem">(-k/3)(2k - 1) = -1 => k(2k - 1) = 3 => 2k^2 - k - 3 = 0 => (2k - 3)(k + 1) = 0</span>, so <span class="chem">k = 3/2</span> or <span class="chem">k = -1</span>. Check <span class="chem">k = -1</span>: gradients <span class="chem">1/3</span> and <span class="chem">-3</span>, product <span class="chem">-1</span>.</p>
      solution: "<p>(a) <span class=\"chem\">L_1</span>: <span class=\"chem\">y = -(k/3)x + 2</span>이므로 기울기는 <span class=\"chem\">-k/3</span>이에요. <span class=\"chem\">L_2</span>의 기울기는 <span class=\"chem\">2k - 1</span>이에요. 평행: <span class=\"chem\">-k/3 = 2k - 1 => -k = 6k - 3 => k = 3/7</span>.<br>(b) 수직: <span class=\"chem\">(-k/3)(2k - 1) = -1 => k(2k - 1) = 3 => 2k^2 - k - 3 = 0 => (2k - 3)(k + 1) = 0</span>이므로 <span class=\"chem\">k = 3/2</span> 또는 <span class=\"chem\">k = -1</span>이에요. <span class=\"chem\">k = -1</span>을 확인하면 기울기는 <span class=\"chem\">1/3</span>과 <span class=\"chem\">-3</span>이고 곱은 <span class=\"chem\">-1</span>이에요.</p>",
      // EN: <p>(a) <span class="chem">k = 3/7</span>; (b) <span class="chem">k = 3/2</span> or <span class="chem">k = -1</span>.</p>
      answer: "<p>(a) <span class=\"chem\">k = 3/7</span>; (b) <span class=\"chem\">k = 3/2</span> 또는 <span class=\"chem\">k = -1</span>.</p>",
      markscheme: [
        // EN: M1: Rearranges L₁ to y = −(k/3)x + 2, so its gradient is −k/3, and sets −k/3 = 2k − 1.
        "M1: L₁을 y = −(k/3)x + 2로 변형해 기울기가 −k/3임을 알고 −k/3 = 2k − 1을 세움.",
        // EN: A1: k = 3/7.
        "A1: k = 3/7.",
        // EN: M1: Uses the product of gradients: (−k/3)(2k − 1) = −1.
        "M1: 기울기의 곱을 이용함: (−k/3)(2k − 1) = −1.",
        // EN: A1: Obtains the quadratic 2k² − k − 3 = 0 (or equivalent).
        "A1: 이차방정식 2k² − k − 3 = 0 (또는 동치인 식)을 얻음.",
        // EN: A1: Solves (2k − 3)(k + 1) = 0 to get k = 3/2 or k = −1.
        "A1: (2k − 3)(k + 1) = 0을 풀어 k = 3/2 또는 k = −1을 구함.",
      ],
    },

    // ── t2-1-q024 · numeric · exam · SL · SL 2.1 · 5 marks
    "t2-1-q024": {
      // EN: <p>The line <span class="chem">L</span> passes through <span class="chem">A(2, 5)</span> and is parallel to the line <span class="chem">4x - 3y = 12</span>. The line <span class="chem">L</span> meets the <span class="chem">x</span>-axis at <span class="chem">P</span> and the <span class="chem">y</span>-axis at <span class="chem">Q</span>. Find the exact area of triangle <span class="chem">OPQ</span>, where <span class="chem">O</span> is the origin.</p>
      stem: "<p>직선 <span class=\"chem\">L</span>은 <span class=\"chem\">A(2, 5)</span>를 지나고 직선 <span class=\"chem\">4x - 3y = 12</span>에 평행하다. 직선 <span class=\"chem\">L</span>은 <span class=\"chem\">x</span>축과 <span class=\"chem\">P</span>에서, <span class=\"chem\">y</span>축과 <span class=\"chem\">Q</span>에서 만난다. <span class=\"chem\">O</span>가 원점일 때, 삼각형 <span class=\"chem\">OPQ</span>의 넓이의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: a parallel line keeps the same <span class="chem">x</span> and <span class="chem">y</span> coefficients, so <span class="chem">L</span> is <span class="chem">4x - 3y = c</span>. The triangle is right-angled at <span class="chem">O</span>, with legs equal to the distances from <span class="chem">O</span> to the two intercepts.
        "해석: 평행한 직선은 <span class=\"chem\">x</span>와 <span class=\"chem\">y</span>의 계수가 같으므로 <span class=\"chem\">L</span>은 <span class=\"chem\">4x - 3y = c</span>예요. 이 삼각형은 <span class=\"chem\">O</span>에서 직각이고, 직각을 낀 두 변의 길이는 <span class=\"chem\">O</span>에서 두 절편까지의 거리와 같아요.",
        // EN: Substitute <span class="chem">A(2, 5)</span> to find <span class="chem">c</span>, then put <span class="chem">y = 0</span> and <span class="chem">x = 0</span> in turn.
        "<span class=\"chem\">A(2, 5)</span>를 대입해 <span class=\"chem\">c</span>를 구한 뒤, <span class=\"chem\">y = 0</span>과 <span class=\"chem\">x = 0</span>을 차례로 대입하세요.",
        // EN: Area <span class="chem">= (1/2) × |OP| × |OQ|</span>. Lengths are positive even when an intercept is negative.
        "넓이 <span class=\"chem\">= (1/2) × |OP| × |OQ|</span>. 절편이 음수여도 길이는 양수예요.",
      ],
      // EN: <p><span class="chem">L</span>: <span class="chem">4x - 3y = c</span> with <span class="chem">4(2) - 3(5) = -7</span>, so <span class="chem">4x - 3y = -7</span>. At <span class="chem">y = 0</span>: <span class="chem">x = -7/4</span>, so <span class="chem">P(-7/4, 0)</span>. At <span class="chem">x = 0</span>: <span class="chem">y = 7/3</span>, so <span class="chem">Q(0, 7/3)</span>. Area <span class="chem">= (1/2)(7/4)(7/3) = 49/24</span>.</p>
      solution: "<p><span class=\"chem\">L</span>: <span class=\"chem\">4x - 3y = c</span>이고 <span class=\"chem\">4(2) - 3(5) = -7</span>이므로 <span class=\"chem\">4x - 3y = -7</span>이에요. <span class=\"chem\">y = 0</span>일 때 <span class=\"chem\">x = -7/4</span>이므로 <span class=\"chem\">P(-7/4, 0)</span>, <span class=\"chem\">x = 0</span>일 때 <span class=\"chem\">y = 7/3</span>이므로 <span class=\"chem\">Q(0, 7/3)</span>이에요. 넓이 <span class=\"chem\">= (1/2)(7/4)(7/3) = 49/24</span>예요.</p>",
    },

    // ── t2-1-q025 · short · exam · SL · SL 2.2, 2.5 · 8 marks
    "t2-1-q025": {
      // EN: <p>Let <span class="chem">h(x) = sqrt(x + 5) - 2</span>.<br>(a) Write down the largest possible domain of <span class="chem">h</span>. <strong>[1 mark]</strong><br>(b) Write down the range of <span class="chem">h</span> for this domain. <strong>[1 mark]</strong><br>(c) Find <span class="chem">h^{-1}(x)</span>, stating its domain. <strong>[3 marks]</strong><br>(d) Solve the equation <span class="chem">h(x) = h^{-1}(x)</span>, giving your answer in exact form. <strong>[3 marks]</strong></p>
      stem: "<p><span class=\"chem\">h(x) = sqrt(x + 5) - 2</span>라 하자.<br>(a) <span class=\"chem\">h</span>의 가능한 가장 큰 정의역을 쓰시오 (Write down). <strong>[1 mark]</strong><br>(b) 이 정의역에서 <span class=\"chem\">h</span>의 치역을 쓰시오. <strong>[1 mark]</strong><br>(c) <span class=\"chem\">h^{-1}(x)</span>를 구하고 (Find) 그 정의역을 쓰시오. <strong>[3 marks]</strong><br>(d) 방정식 <span class=\"chem\">h(x) = h^{-1}(x)</span>를 풀고 (Solve), 답을 정확한 꼴로 나타내시오. <strong>[3 marks]</strong></p>",
      hints: [
        // EN: The square root needs <span class="chem">x + 5 &gt;= 0</span>, and its smallest output is <span class="chem">0</span>.
        "제곱근이 정의되려면 <span class=\"chem\">x + 5 &gt;= 0</span>이어야 하고, 제곱근의 가장 작은 출력값은 <span class=\"chem\">0</span>이에요.",
        // EN: For (c), swap <span class="chem">x</span> and <span class="chem">y</span> and square. The domain of <span class="chem">h^{-1}</span> is the range of <span class="chem">h</span>.
        "(c)에서는 <span class=\"chem\">x</span>와 <span class=\"chem\">y</span>를 바꾸고 양변을 제곱하세요. <span class=\"chem\">h^{-1}</span>의 정의역은 <span class=\"chem\">h</span>의 치역이에요.",
        // EN: For (d), <span class="chem">h</span> is increasing, so <span class="chem">h</span> and <span class="chem">h^{-1}</span> can only meet on <span class="chem">y = x</span>. Solve <span class="chem">h^{-1}(x) = x</span> and check which root lies in the domain <span class="chem">x &gt;= -2</span>.
        "(d)에서 <span class=\"chem\">h</span>는 증가함수이므로 <span class=\"chem\">h</span>와 <span class=\"chem\">h^{-1}</span>는 <span class=\"chem\">y = x</span> 위에서만 만날 수 있어요. <span class=\"chem\">h^{-1}(x) = x</span>를 풀고 어느 근이 정의역 <span class=\"chem\">x &gt;= -2</span>에 속하는지 확인하세요.",
      ],
      // EN: <p>(a) <span class="chem">x + 5 &gt;= 0 => x &gt;= -5</span>.<br>(b) <span class="chem">sqrt(x + 5) &gt;= 0</span>, so <span class="chem">h(x) &gt;= -2</span>.<br>(c) <span class="chem">x = sqrt(y + 5) - 2 => (x + 2)^2 = y + 5 => h^{-1}(x) = (x + 2)^2 - 5</span>, with domain <span class="chem">x &gt;= -2</span> (the range of <span class="chem">h</span>).<br>(d) <span class="chem">h</span> is increasing, so intersections of <span class="chem">y = h(x)</span> and <span class="chem">y = h^{-1}(x)</span> lie on <span class="chem">y = x</span>. Solve <span class="chem">(x + 2)^2 - 5 = x => x^2 + 3x - 1 = 0 => x = (-3 +- sqrt(13))/2</span>. Since <span class="chem">(-3 - sqrt(13))/2 ≈ -3.30 &lt; -2</span>, reject it. So <span class="chem">x = (-3 + sqrt(13))/2</span>.</p>
      solution: "<p>(a) <span class=\"chem\">x + 5 &gt;= 0 => x &gt;= -5</span>.<br>(b) <span class=\"chem\">sqrt(x + 5) &gt;= 0</span>이므로 <span class=\"chem\">h(x) &gt;= -2</span>예요.<br>(c) <span class=\"chem\">x = sqrt(y + 5) - 2 => (x + 2)^2 = y + 5 => h^{-1}(x) = (x + 2)^2 - 5</span>이고, 정의역은 <span class=\"chem\">x &gt;= -2</span> (<span class=\"chem\">h</span>의 치역)예요.<br>(d) <span class=\"chem\">h</span>는 증가함수이므로 <span class=\"chem\">y = h(x)</span>와 <span class=\"chem\">y = h^{-1}(x)</span>의 교점은 <span class=\"chem\">y = x</span> 위에 있어요. <span class=\"chem\">(x + 2)^2 - 5 = x => x^2 + 3x - 1 = 0 => x = (-3 +- sqrt(13))/2</span>를 풀어요. <span class=\"chem\">(-3 - sqrt(13))/2 ≈ -3.30 &lt; -2</span>이므로 이 근은 버려요. 따라서 <span class=\"chem\">x = (-3 + sqrt(13))/2</span>예요.</p>",
      // EN: <p>(a) <span class="chem">x &gt;= -5</span>; (b) <span class="chem">h(x) &gt;= -2</span>; (c) <span class="chem">h^{-1}(x) = (x + 2)^2 - 5</span> for <span class="chem">x &gt;= -2</span>; (d) <span class="chem">x = (-3 + sqrt(13))/2</span>.</p>
      answer: "<p>(a) <span class=\"chem\">x &gt;= -5</span>; (b) <span class=\"chem\">h(x) &gt;= -2</span>; (c) <span class=\"chem\">h^{-1}(x) = (x + 2)^2 - 5</span> (<span class=\"chem\">x &gt;= -2</span>); (d) <span class=\"chem\">x = (-3 + sqrt(13))/2</span>.</p>",
      markscheme: [
        // EN: A1: Domain x ≥ −5.
        "A1: 정의역 x ≥ −5.",
        // EN: A1: Range h(x) ≥ −2.
        "A1: 치역 h(x) ≥ −2.",
        // EN: M1: Swaps x and y: x = √(y + 5) − 2 (or makes x the subject first).
        "M1: x와 y를 바꿈: x = √(y + 5) − 2 (또는 먼저 x에 대해 정리함).",
        // EN: A1: h⁻¹(x) = (x + 2)² − 5.
        "A1: h⁻¹(x) = (x + 2)² − 5.",
        // EN: A1: Domain of h⁻¹ is x ≥ −2 (the range of h).
        "A1: h⁻¹의 정의역은 x ≥ −2 (h의 치역).",
        // EN: M1: Uses that h is increasing, so the graphs meet on y = x: √(x + 5) − 2 = x, or (x + 2)² − 5 = x with x ≥ −2.
        "M1: h가 증가함수이므로 두 그래프가 y = x 위에서 만난다는 것을 이용함: √(x + 5) − 2 = x, 또는 x ≥ −2에서 (x + 2)² − 5 = x.",
        // EN: A1: Obtains x² + 3x − 1 = 0.
        "A1: x² + 3x − 1 = 0을 얻음.",
        // EN: A1: x = (−3 + √13)/2 only, rejecting (−3 − √13)/2 because it is less than −2.
        "A1: x = (−3 + √13)/2만 답하고, (−3 − √13)/2는 −2보다 작으므로 버림.",
      ],
    },

    // ── t2-1-q026 · short · exam · SL · SL 2.5 · 4 marks
    "t2-1-q026": {
      // EN: <p>Let <span class="chem">f(x) = 2x + 3</span> and <span class="chem">g(x) = x^2</span>, for <span class="chem">x ∈ ℝ</span>. Solve the equation <span class="chem">(f ∘ g)(x) = (g ∘ f)(x)</span>, giving your answers in the form <span class="chem">p +- sqrt(q)</span>, where <span class="chem">p, q ∈ ℤ</span>.</p>
      stem: "<p><span class=\"chem\">x ∈ ℝ</span>에서 <span class=\"chem\">f(x) = 2x + 3</span>, <span class=\"chem\">g(x) = x^2</span>이라 하자. 방정식 <span class=\"chem\">(f ∘ g)(x) = (g ∘ f)(x)</span>를 풀고 (Solve), 답을 <span class=\"chem\">p +- sqrt(q)</span> 꼴로 나타내시오. 단, <span class=\"chem\">p, q ∈ ℤ</span>이다.</p>",
      hints: [
        // EN: The order matters: <span class="chem">(f ∘ g)(x) = f(g(x))</span> means "do <span class="chem">g</span> first".
        "순서가 중요해요: <span class=\"chem\">(f ∘ g)(x) = f(g(x))</span>는 \"<span class=\"chem\">g</span>를 먼저\"라는 뜻이에요.",
        // EN: Expand <span class="chem">(2x + 3)^2</span>, collect terms, then complete the square or use the quadratic formula.
        "<span class=\"chem\">(2x + 3)^2</span>을 전개하고 정리한 뒤, 완전제곱식으로 변형하거나 근의 공식을 이용하세요.",
      ],
      // EN: <p><span class="chem">(f ∘ g)(x) = f(x^2) = 2x^2 + 3</span> and <span class="chem">(g ∘ f)(x) = (2x + 3)^2 = 4x^2 + 12x + 9</span>. Equating: <span class="chem">2x^2 + 12x + 6 = 0 => x^2 + 6x + 3 = 0 => (x + 3)^2 = 6 => x = -3 +- sqrt(6)</span>.</p>
      solution: "<p><span class=\"chem\">(f ∘ g)(x) = f(x^2) = 2x^2 + 3</span>이고 <span class=\"chem\">(g ∘ f)(x) = (2x + 3)^2 = 4x^2 + 12x + 9</span>예요. 두 식을 같다고 놓으면 <span class=\"chem\">2x^2 + 12x + 6 = 0 => x^2 + 6x + 3 = 0 => (x + 3)^2 = 6 => x = -3 +- sqrt(6)</span>이에요.</p>",
      // EN: <p><span class="chem">x = -3 +- sqrt(6)</span></p>
      answer: "<p><span class=\"chem\">x = -3 +- sqrt(6)</span></p>",
      markscheme: [
        // EN: A1: (f ∘ g)(x) = 2x² + 3.
        "A1: (f ∘ g)(x) = 2x² + 3.",
        // EN: A1: (g ∘ f)(x) = (2x + 3)² = 4x² + 12x + 9.
        "A1: (g ∘ f)(x) = (2x + 3)² = 4x² + 12x + 9.",
        // EN: M1: Equates and simplifies to x² + 6x + 3 = 0 (or 2x² + 12x + 6 = 0).
        "M1: 두 식을 같다고 놓고 x² + 6x + 3 = 0 (또는 2x² + 12x + 6 = 0)으로 정리함.",
        // EN: A1: x = −3 ± √6.
        "A1: x = −3 ± √6.",
      ],
    },

    // ── t2-1-q027 · numeric · exam · SL · SL 2.5 · 4 marks
    "t2-1-q027": {
      // EN: <p>The functions <span class="chem">f</span> and <span class="chem">g</span> are defined for <span class="chem">x ∈ ℝ</span>. You are given that <span class="chem">f(x) = 2x + 1</span> and <span class="chem">(f ∘ g)(x) = 6x - 7</span>. Find the value of <span class="chem">g(4)</span>.</p>
      stem: "<p>함수 <span class=\"chem\">f</span>와 <span class=\"chem\">g</span>는 <span class=\"chem\">x ∈ ℝ</span>에서 정의된다. <span class=\"chem\">f(x) = 2x + 1</span>이고 <span class=\"chem\">(f ∘ g)(x) = 6x - 7</span>이다. <span class=\"chem\">g(4)</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: you know the outer function and the result of the composite, so you must undo the outer function to find the inner one. <span class="chem">(f ∘ g)(x) = f(g(x)) = 2g(x) + 1</span>.
        "해석: 바깥쪽 함수와 합성함수의 결과를 알고 있으므로, 바깥쪽 함수를 되돌려서 안쪽 함수를 구해야 해요. <span class=\"chem\">(f ∘ g)(x) = f(g(x)) = 2g(x) + 1</span>이에요.",
        // EN: Set <span class="chem">2g(x) + 1 = 6x - 7</span> and make <span class="chem">g(x)</span> the subject.
        "<span class=\"chem\">2g(x) + 1 = 6x - 7</span>로 놓고 <span class=\"chem\">g(x)</span>에 대해 정리하세요.",
        // EN: Or work with numbers only: <span class="chem">f(g(4)) = 6(4) - 7 = 17</span>, so <span class="chem">g(4) = f^{-1}(17)</span>.
        "또는 숫자만으로 풀 수도 있어요: <span class=\"chem\">f(g(4)) = 6(4) - 7 = 17</span>이므로 <span class=\"chem\">g(4) = f^{-1}(17)</span>이에요.",
      ],
      // EN: <p>Decode: <span class="chem">g</span> is the inner function. <span class="chem">f(g(x)) = 2g(x) + 1 = 6x - 7</span>, so <span class="chem">g(x) = 3x - 4</span> and <span class="chem">g(4) = 8</span>. (Check: <span class="chem">f(8) = 17 = 6(4) - 7</span>.)</p>
      solution: "<p>해석: <span class=\"chem\">g</span>가 안쪽 함수예요. <span class=\"chem\">f(g(x)) = 2g(x) + 1 = 6x - 7</span>이므로 <span class=\"chem\">g(x) = 3x - 4</span>이고 <span class=\"chem\">g(4) = 8</span>이에요. (확인: <span class=\"chem\">f(8) = 17 = 6(4) - 7</span>.)</p>",
    },

    // ── t2-1-q028 · short · exam · SL · SL 2.2, 2.5 · 6 marks
    "t2-1-q028": {
      // EN: <p>The function <span class="chem">f</span> is defined by <span class="chem">f(x) = 5 - e^{2x}</span> for <span class="chem">x ∈ ℝ</span>.<br>(a) Write down the range of <span class="chem">f</span>. <strong>[1 mark]</strong><br>(b) Find an expression for <span class="chem">f^{-1}(x)</span>. <strong>[3 marks]</strong><br>(c) Write down the domain of <span class="chem">f^{-1}</span>. <strong>[1 mark]</strong><br>(d) Write down the value of <span class="chem">x</span> for which <span class="chem">f^{-1}(x) = 0</span>. <strong>[1 mark]</strong></p>
      stem: "<p>함수 <span class=\"chem\">f</span>는 <span class=\"chem\">x ∈ ℝ</span>에서 <span class=\"chem\">f(x) = 5 - e^{2x}</span>로 정의된다.<br>(a) <span class=\"chem\">f</span>의 치역을 쓰시오 (Write down). <strong>[1 mark]</strong><br>(b) <span class=\"chem\">f^{-1}(x)</span>의 식을 구하시오 (Find). <strong>[3 marks]</strong><br>(c) <span class=\"chem\">f^{-1}</span>의 정의역을 쓰시오. <strong>[1 mark]</strong><br>(d) <span class=\"chem\">f^{-1}(x) = 0</span>을 만족시키는 <span class=\"chem\">x</span>의 값을 쓰시오. <strong>[1 mark]</strong></p>",
      hints: [
        // EN: <span class="chem">e^{2x}</span> takes every positive value but never <span class="chem">0</span>. What does that do to <span class="chem">5 - e^{2x}</span>?
        "<span class=\"chem\">e^{2x}</span>는 모든 양수 값을 갖지만 절대 <span class=\"chem\">0</span>이 되지는 않아요. 이것이 <span class=\"chem\">5 - e^{2x}</span>에 어떤 영향을 줄까요?",
        // EN: For (b), isolate the exponential, then take <span class="chem">ln</span> of both sides (you need the logarithm laws from topic 1.2).
        "(b)에서는 지수 부분을 따로 떼어 낸 뒤 양변에 <span class=\"chem\">ln</span>을 취하세요 (topic 1.2의 로그 법칙이 필요해요).",
        // EN: For (d), you do not need the formula: <span class="chem">f^{-1}(x) = 0</span> means <span class="chem">x = f(0)</span>.
        "(d)에서는 식이 필요 없어요: <span class=\"chem\">f^{-1}(x) = 0</span>은 <span class=\"chem\">x = f(0)</span>이라는 뜻이에요.",
      ],
      // EN: <p>(a) <span class="chem">e^{2x} &gt; 0</span> for all <span class="chem">x</span>, so <span class="chem">f(x) &lt; 5</span>.<br>(b) <span class="chem">x = 5 - e^{2y} => e^{2y} = 5 - x => 2y = ln(5 - x) => f^{-1}(x) = (1/2) ln(5 - x)</span>.<br>(c) Domain of <span class="chem">f^{-1}</span> = range of <span class="chem">f</span>: <span class="chem">x &lt; 5</span>.<br>(d) <span class="chem">f^{-1}(x) = 0 => x = f(0) = 5 - 1 = 4</span>.</p>
      solution: "<p>(a) 모든 <span class=\"chem\">x</span>에 대해 <span class=\"chem\">e^{2x} &gt; 0</span>이므로 <span class=\"chem\">f(x) &lt; 5</span>예요.<br>(b) <span class=\"chem\">x = 5 - e^{2y} => e^{2y} = 5 - x => 2y = ln(5 - x) => f^{-1}(x) = (1/2) ln(5 - x)</span>.<br>(c) <span class=\"chem\">f^{-1}</span>의 정의역 = <span class=\"chem\">f</span>의 치역: <span class=\"chem\">x &lt; 5</span>.<br>(d) <span class=\"chem\">f^{-1}(x) = 0 => x = f(0) = 5 - 1 = 4</span>.</p>",
      // EN: <p>(a) <span class="chem">f(x) &lt; 5</span>; (b) <span class="chem">f^{-1}(x) = (1/2) ln(5 - x)</span>; (c) <span class="chem">x &lt; 5</span>; (d) <span class="chem">x = 4</span>.</p>
      answer: "<p>(a) <span class=\"chem\">f(x) &lt; 5</span>; (b) <span class=\"chem\">f^{-1}(x) = (1/2) ln(5 - x)</span>; (c) <span class=\"chem\">x &lt; 5</span>; (d) <span class=\"chem\">x = 4</span>.</p>",
      markscheme: [
        // EN: A1: Range f(x) < 5 (since e^{2x} > 0).
        "A1: 치역 f(x) < 5 (e^{2x} > 0이므로).",
        // EN: M1: Swaps x and y: x = 5 − e^{2y}, so e^{2y} = 5 − x.
        "M1: x와 y를 바꿈: x = 5 − e^{2y}, 따라서 e^{2y} = 5 − x.",
        // EN: M1: Takes natural logarithms: 2y = ln(5 − x).
        "M1: 자연로그를 취함: 2y = ln(5 − x).",
        // EN: A1: f⁻¹(x) = (1/2) ln(5 − x).
        "A1: f⁻¹(x) = (1/2) ln(5 − x).",
        // EN: A1: Domain of f⁻¹ is x < 5.
        "A1: f⁻¹의 정의역은 x < 5.",
        // EN: A1: x = 4 (because f⁻¹(x) = 0 exactly when x = f(0) = 4).
        "A1: x = 4 (f⁻¹(x) = 0이 되는 것은 정확히 x = f(0) = 4일 때이므로).",
      ],
    },

    // ── t2-1-q029 · numeric · exam · SL · SL 2.4 · 3 marks
    "t2-1-q029": {
      // EN: <p>The graph of <span class="chem">y = x^2 + bx + c</span> has axis of symmetry <span class="chem">x = 3</span> and passes through the point <span class="chem">(1, 0)</span>. The graph has a second zero at <span class="chem">x = q</span>. Find the value of <span class="chem">q</span>.</p>
      stem: "<p><span class=\"chem\">y = x^2 + bx + c</span>의 그래프는 대칭축이 <span class=\"chem\">x = 3</span>이고 점 <span class=\"chem\">(1, 0)</span>을 지난다. 이 그래프의 또 다른 영점은 <span class=\"chem\">x = q</span>이다. <span class=\"chem\">q</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: The zeros of a parabola are placed symmetrically about its axis of symmetry.
        "포물선의 영점들은 대칭축을 기준으로 대칭인 위치에 있어요.",
        // EN: <span class="chem">x = 1</span> is <span class="chem">2</span> units to the left of <span class="chem">x = 3</span>. Where is the point <span class="chem">2</span> units to the right?
        "<span class=\"chem\">x = 1</span>은 <span class=\"chem\">x = 3</span>에서 왼쪽으로 <span class=\"chem\">2</span>만큼 떨어져 있어요. 오른쪽으로 <span class=\"chem\">2</span>만큼 떨어진 점은 어디일까요?",
      ],
      // EN: <p>By symmetry about <span class="chem">x = 3</span>, the zeros are equally far from <span class="chem">3</span>: <span class="chem">(1 + q)/2 = 3 => q = 5</span>. (Algebraic check: <span class="chem">-b/2 = 3 => b = -6</span>; <span class="chem">1 - 6 + c = 0 => c = 5</span>; <span class="chem">x^2 - 6x + 5 = (x - 1)(x - 5)</span>.)</p>
      solution: "<p><span class=\"chem\">x = 3</span>에 대한 대칭성에 의해 두 영점은 <span class=\"chem\">3</span>에서 같은 거리에 있어요: <span class=\"chem\">(1 + q)/2 = 3 => q = 5</span>. (대수적 확인: <span class=\"chem\">-b/2 = 3 => b = -6</span>; <span class=\"chem\">1 - 6 + c = 0 => c = 5</span>; <span class=\"chem\">x^2 - 6x + 5 = (x - 1)(x - 5)</span>.)</p>",
    },

    // ── t2-1-q030 · short · exam · AHL · AHL 2.14 · 5 marks
    "t2-1-q030": {
      // EN: <p>Let <span class="chem">f(x) = x^3/(x^2 + 4)</span> for <span class="chem">x ∈ ℝ</span>.<br>(a) Show that <span class="chem">f</span> is an odd function. <strong>[2 marks]</strong><br>The function <span class="chem">g</span> is even, with <span class="chem">g(3) = 7</span>. Let <span class="chem">h(x) = f(x) g(x)</span>.<br>(b) Determine whether <span class="chem">h</span> is odd, even or neither. Justify your answer. <strong>[2 marks]</strong><br>(c) Find the exact value of <span class="chem">h(-3)</span>. <strong>[1 mark]</strong></p>
      stem: "<p><span class=\"chem\">x ∈ ℝ</span>에서 <span class=\"chem\">f(x) = x^3/(x^2 + 4)</span>라 하자.<br>(a) <span class=\"chem\">f</span>가 홀함수임을 보이시오 (Show that). <strong>[2 marks]</strong><br>함수 <span class=\"chem\">g</span>는 짝함수이고 <span class=\"chem\">g(3) = 7</span>이다. <span class=\"chem\">h(x) = f(x) g(x)</span>라 하자.<br>(b) <span class=\"chem\">h</span>가 홀함수인지, 짝함수인지, 둘 다 아닌지 결정하고 (Determine), 근거를 들어 설명하시오 (Justify). <strong>[2 marks]</strong><br>(c) <span class=\"chem\">h(-3)</span>의 정확한 값을 구하시오 (Find). <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Odd means <span class="chem">f(-x) = -f(x)</span> for every <span class="chem">x</span>; even means <span class="chem">g(-x) = g(x)</span>.
        "홀함수는 모든 <span class=\"chem\">x</span>에 대해 <span class=\"chem\">f(-x) = -f(x)</span>라는 뜻이고, 짝함수는 <span class=\"chem\">g(-x) = g(x)</span>라는 뜻이에요.",
        // EN: For (b), substitute <span class="chem">-x</span> into <span class="chem">h</span> and use the two facts. For (c), use <span class="chem">h(-3) = f(-3) g(-3)</span>.
        "(b)에서는 <span class=\"chem\">h</span>에 <span class=\"chem\">-x</span>를 대입하고 두 성질을 이용하세요. (c)에서는 <span class=\"chem\">h(-3) = f(-3) g(-3)</span>을 이용하세요.",
      ],
      // EN: <p>(a) <span class="chem">f(-x) = (-x)^3/((-x)^2 + 4) = -x^3/(x^2 + 4) = -f(x)</span> for all <span class="chem">x</span>, so <span class="chem">f</span> is odd.<br>(b) <span class="chem">h(-x) = f(-x) g(-x) = (-f(x))(g(x)) = -h(x)</span>, so <span class="chem">h</span> is odd (odd × even = odd).<br>(c) <span class="chem">f(-3) = -27/13</span> and <span class="chem">g(-3) = g(3) = 7</span>, so <span class="chem">h(-3) = -189/13</span>.</p>
      solution: "<p>(a) 모든 <span class=\"chem\">x</span>에 대해 <span class=\"chem\">f(-x) = (-x)^3/((-x)^2 + 4) = -x^3/(x^2 + 4) = -f(x)</span>이므로 <span class=\"chem\">f</span>는 홀함수예요.<br>(b) <span class=\"chem\">h(-x) = f(-x) g(-x) = (-f(x))(g(x)) = -h(x)</span>이므로 <span class=\"chem\">h</span>는 홀함수예요 (홀 × 짝 = 홀).<br>(c) <span class=\"chem\">f(-3) = -27/13</span>이고 <span class=\"chem\">g(-3) = g(3) = 7</span>이므로 <span class=\"chem\">h(-3) = -189/13</span>이에요.</p>",
      // EN: <p>(a) <span class="chem">f(-x) = -x^3/(x^2 + 4) = -f(x)</span>; (b) <span class="chem">h</span> is odd, since <span class="chem">h(-x) = f(-x) g(-x) = -f(x) g(x) = -h(x)</span>; (c) <span class="chem">h(-3) = -189/13</span>.</p>
      answer: "<p>(a) <span class=\"chem\">f(-x) = -x^3/(x^2 + 4) = -f(x)</span>; (b) <span class=\"chem\">h(-x) = f(-x) g(-x) = -f(x) g(x) = -h(x)</span>이므로 <span class=\"chem\">h</span>는 홀함수; (c) <span class=\"chem\">h(-3) = -189/13</span>.</p>",
      markscheme: [
        // EN: M1: Substitutes −x: f(−x) = (−x)³/((−x)² + 4).
        "M1: −x를 대입함: f(−x) = (−x)³/((−x)² + 4).",
        // EN: A1: Simplifies to −x³/(x² + 4) = −f(x), so f is odd.
        "A1: −x³/(x² + 4) = −f(x)로 정리하여 f가 홀함수임을 보임.",
        // EN: M1: Writes h(−x) = f(−x) g(−x) = (−f(x)) g(x).
        "M1: h(−x) = f(−x) g(−x) = (−f(x)) g(x)를 씀.",
        // EN: A1: Concludes h(−x) = −h(x), so h is odd.
        "A1: h(−x) = −h(x)이므로 h는 홀함수라고 결론 내림.",
        // EN: A1: h(−3) = −h(3) = −(27/13)(7) = −189/13.
        "A1: h(−3) = −h(3) = −(27/13)(7) = −189/13.",
      ],
    },

    // ── t2-1-q031 · numeric · challenge · AHL · AHL 2.14 · 5 marks
    "t2-1-q031": {
      // EN: <p>The function <span class="chem">f(x) = (2x + b)/(x + c)</span>, <span class="chem">x != -c</span>, is its own inverse. The graph of <span class="chem">y = f(x)</span> passes through the point <span class="chem">(1, 4)</span>. Find the value of <span class="chem">b</span>.</p>
      stem: "<p>함수 <span class=\"chem\">f(x) = (2x + b)/(x + c)</span>, <span class=\"chem\">x != -c</span>는 자기 자신의 역함수이다. <span class=\"chem\">y = f(x)</span>의 그래프는 점 <span class=\"chem\">(1, 4)</span>를 지난다. <span class=\"chem\">b</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: "its own inverse" means <span class="chem">f</span> is self-inverse, so its graph is symmetric about <span class="chem">y = x</span>. For this rational function the vertical asymptote <span class="chem">x = -c</span> must be the reflection of the horizontal asymptote <span class="chem">y = 2</span>.
        "해석: \"자기 자신의 역함수\"란 <span class=\"chem\">f</span>가 자기역함수라는 뜻이므로 그래프가 <span class=\"chem\">y = x</span>에 대해 대칭이에요. 이 유리함수에서는 수직점근선 <span class=\"chem\">x = -c</span>가 수평점근선 <span class=\"chem\">y = 2</span>를 대칭이동한 것이어야 해요.",
        // EN: So <span class="chem">-c = 2</span>. Then use the point <span class="chem">(1, 4)</span> to find <span class="chem">b</span>.
        "따라서 <span class=\"chem\">-c = 2</span>예요. 그다음 점 <span class=\"chem\">(1, 4)</span>를 이용해 <span class=\"chem\">b</span>를 구하세요.",
        // EN: Make sure the function is not a constant: check that <span class="chem">2c - b != 0</span>.
        "함수가 상수함수가 아닌지 꼭 확인하세요: <span class=\"chem\">2c - b != 0</span>인지 확인해요.",
      ],
      // EN: <p>Decode: self-inverse means <span class="chem">f^{-1} = f</span>, so the graph is symmetric in <span class="chem">y = x</span>. The horizontal asymptote is <span class="chem">y = 2</span>, so the vertical asymptote must be <span class="chem">x = 2</span>: <span class="chem">-c = 2 => c = -2</span>. (Algebraically: <span class="chem">x = (2y + b)/(y + c) => y = (b - cx)/(x - 2)</span>, which equals <span class="chem">(2x + b)/(x + c)</span> only when <span class="chem">c = -2</span>.) Then <span class="chem">f(1) = (2 + b)/(1 - 2) = -(2 + b) = 4 => b = -6</span>. Check: <span class="chem">f(x) = (2x - 6)/(x - 2)</span> is not constant, since <span class="chem">2(-2) - (-6) = 2 != 0</span>.</p>
      solution: "<p>해석: 자기역함수는 <span class=\"chem\">f^{-1} = f</span>라는 뜻이므로 그래프는 <span class=\"chem\">y = x</span>에 대해 대칭이에요. 수평점근선이 <span class=\"chem\">y = 2</span>이므로 수직점근선은 <span class=\"chem\">x = 2</span>여야 해요: <span class=\"chem\">-c = 2 => c = -2</span>. (대수적으로: <span class=\"chem\">x = (2y + b)/(y + c) => y = (b - cx)/(x - 2)</span>이고, 이것이 <span class=\"chem\">(2x + b)/(x + c)</span>와 같아지는 것은 <span class=\"chem\">c = -2</span>일 때뿐이에요.) 그러면 <span class=\"chem\">f(1) = (2 + b)/(1 - 2) = -(2 + b) = 4 => b = -6</span>이에요. 확인: <span class=\"chem\">2(-2) - (-6) = 2 != 0</span>이므로 <span class=\"chem\">f(x) = (2x - 6)/(x - 2)</span>는 상수함수가 아니에요.</p>",
    },

    // ── t2-1-q032 · numeric · challenge · SL · SL 2.5 · 5 marks
    "t2-1-q032": {
      // EN: <p>Let <span class="chem">f(x) = 2x - 3</span>. A calculator key applies <span class="chem">f</span> to whatever number is on the screen. The number <span class="chem">4</span> is entered and the key is pressed <span class="chem">n</span> times, so the screen shows <span class="chem">(f ∘ f ∘ … ∘ f)(4)</span> with <span class="chem">n</span> copies of <span class="chem">f</span>. Find the least number of presses for which the screen shows a number greater than <span class="chem">1000</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = 2x - 3</span>이라 하자. 어떤 계산기 키는 화면에 있는 수에 <span class=\"chem\">f</span>를 적용한다. 수 <span class=\"chem\">4</span>를 입력하고 이 키를 <span class=\"chem\">n</span>번 누르면, 화면에는 <span class=\"chem\">f</span>를 <span class=\"chem\">n</span>개 합성한 <span class=\"chem\">(f ∘ f ∘ … ∘ f)(4)</span>가 나타난다. 화면에 <span class=\"chem\">1000</span>보다 큰 수가 나타나도록 하는 키를 누르는 최소 횟수를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: this is repeated composition. Work out the first few outputs, spot the pattern, and write the result after <span class="chem">n</span> presses as a formula in <span class="chem">n</span>. The answer must be a positive integer.
        "해석: 이것은 합성을 반복하는 문제예요. 처음 몇 개의 출력값을 계산해 규칙을 찾고, <span class=\"chem\">n</span>번 누른 뒤의 결과를 <span class=\"chem\">n</span>에 대한 식으로 나타내세요. 답은 양의 정수여야 해요.",
        // EN: The outputs are <span class="chem">5, 7, 11, 19, …</span>. Subtract <span class="chem">3</span> from each.
        "출력값은 <span class=\"chem\">5, 7, 11, 19, …</span>예요. 각각에서 <span class=\"chem\">3</span>을 빼 보세요.",
        // EN: After <span class="chem">n</span> presses the screen shows <span class="chem">2^n + 3</span>. Solve <span class="chem">2^n + 3 &gt; 1000</span> using powers of <span class="chem">2</span>.
        "<span class=\"chem\">n</span>번 누른 뒤 화면에는 <span class=\"chem\">2^n + 3</span>이 나타나요. <span class=\"chem\">2</span>의 거듭제곱을 이용해 <span class=\"chem\">2^n + 3 &gt; 1000</span>을 푸세요.",
      ],
      // EN: <p>Decode: "press the key <span class="chem">n</span> times" is the <span class="chem">n</span>-fold composite of <span class="chem">f</span>. Outputs: <span class="chem">f(4) = 5</span>, <span class="chem">f(5) = 7</span>, <span class="chem">f(7) = 11</span>, <span class="chem">f(11) = 19</span>, which are <span class="chem">2^n + 3</span>. This continues because if <span class="chem">x = 2^n + 3</span>, then <span class="chem">f(x) = 2^{n+1} + 6 - 3 = 2^{n+1} + 3</span>. We need <span class="chem">2^n + 3 &gt; 1000 => 2^n &gt; 997</span>. Since <span class="chem">2^9 = 512</span> and <span class="chem">2^{10} = 1024</span>, the least number of presses is <span class="chem">n = 10</span> (screen shows <span class="chem">1027</span>).</p>
      solution: "<p>해석: \"키를 <span class=\"chem\">n</span>번 누른다\"는 것은 <span class=\"chem\">f</span>를 <span class=\"chem\">n</span>번 합성한다는 뜻이에요. 출력값: <span class=\"chem\">f(4) = 5</span>, <span class=\"chem\">f(5) = 7</span>, <span class=\"chem\">f(7) = 11</span>, <span class=\"chem\">f(11) = 19</span>이고, 이는 <span class=\"chem\">2^n + 3</span>이에요. <span class=\"chem\">x = 2^n + 3</span>이면 <span class=\"chem\">f(x) = 2^{n+1} + 6 - 3 = 2^{n+1} + 3</span>이므로 이 규칙은 계속돼요. <span class=\"chem\">2^n + 3 &gt; 1000 => 2^n &gt; 997</span>이어야 해요. <span class=\"chem\">2^9 = 512</span>이고 <span class=\"chem\">2^{10} = 1024</span>이므로 최소 횟수는 <span class=\"chem\">n = 10</span>이에요 (화면에는 <span class=\"chem\">1027</span>이 나타나요).</p>",
    },

    // ── t2-1-q033 · short · challenge · SL · SL 2.2, 2.5 · 7 marks
    "t2-1-q033": {
      // EN: <p>A currency exchange office first takes a fixed fee of <span class="chem">5</span> dollars from the amount handed in, then changes the rest into euros at <span class="chem">0.9</span> euros per dollar. So <span class="chem">d</span> dollars become <span class="chem">E(d) = 0.9(d - 5)</span> euros, for <span class="chem">d &gt; 5</span>. A second office changes <span class="chem">e</span> euros into <span class="chem">Y(e) = 160e - 200</span> yen.<br>(a) A traveller changes <span class="chem">d</span> dollars into euros at the first office, then changes all the euros into yen at the second office. Find, in the form <span class="chem">pd + q</span>, an expression for the number of yen received. <strong>[2 marks]</strong><br>(b) The traveller needs exactly <span class="chem">14 200</span> yen. Find the number of dollars that must be handed in. <strong>[3 marks]</strong><br>(c) Only whole numbers of dollars can be handed in. Find the least number of dollars for which the traveller receives a positive amount of yen. <strong>[2 marks]</strong></p>
      stem: "<p>어떤 환전소는 받은 금액에서 먼저 <span class=\"chem\">5</span>달러의 고정 수수료를 떼고, 나머지를 달러당 <span class=\"chem\">0.9</span>유로로 환전한다. 따라서 <span class=\"chem\">d</span>달러는 <span class=\"chem\">E(d) = 0.9(d - 5)</span>유로가 된다 (<span class=\"chem\">d &gt; 5</span>). 두 번째 환전소는 <span class=\"chem\">e</span>유로를 <span class=\"chem\">Y(e) = 160e - 200</span>엔으로 환전한다.<br>(a) 한 여행자가 첫 번째 환전소에서 <span class=\"chem\">d</span>달러를 유로로 바꾼 뒤, 두 번째 환전소에서 그 유로를 모두 엔으로 바꾼다. 받는 엔의 액수를 나타내는 식을 <span class=\"chem\">pd + q</span> 꼴로 구하시오 (Find). <strong>[2 marks]</strong><br>(b) 여행자에게 정확히 <span class=\"chem\">14 200</span>엔이 필요하다. 내야 하는 달러의 액수를 구하시오. <strong>[3 marks]</strong><br>(c) 달러는 정수 단위로만 낼 수 있다. 여행자가 양의 액수의 엔을 받기 위한 최소 달러 액수를 구하시오. <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: dollars go into the first office, and its output goes into the second. That is a composite with <span class="chem">E</span> applied first, so you want <span class="chem">(Y ∘ E)(d)</span>, not <span class="chem">(E ∘ Y)(d)</span>.
        "해석: 달러가 첫 번째 환전소에 들어가고, 그 출력이 두 번째 환전소에 들어가요. 이것은 <span class=\"chem\">E</span>를 먼저 적용하는 합성함수이므로 구해야 하는 것은 <span class=\"chem\">(E ∘ Y)(d)</span>가 아니라 <span class=\"chem\">(Y ∘ E)(d)</span>예요.",
        // EN: For (b), you know the output and want the input, so you are using the inverse of the composite. Solve <span class="chem">(Y ∘ E)(d) = 14 200</span>.
        "(b)에서는 출력을 알고 입력을 구하므로 합성함수의 역함수를 이용하는 셈이에요. <span class=\"chem\">(Y ∘ E)(d) = 14 200</span>을 푸세요.",
        // EN: For (c), "a positive amount" gives an inequality, and "whole numbers" means round <strong>up</strong> to the next integer.
        "(c)에서 \"양의 액수\"는 부등식을 주고, \"정수 단위\"는 다음 정수로 <strong>올림</strong>해야 한다는 뜻이에요.",
      ],
      // EN: <p>Decode: two machines in a row form a composite, and the inner (first) function is <span class="chem">E</span>.<br>(a) <span class="chem">(Y ∘ E)(d) = 160(0.9(d - 5)) - 200 = 144(d - 5) - 200 = 144d - 920</span>.<br>(b) <span class="chem">144d - 920 = 14 200 => 144d = 15 120 => d = 105</span> dollars.<br>(c) <span class="chem">144d - 920 &gt; 0 => d &gt; 920/144 ≈ 6.39</span>. The least whole number of dollars is <span class="chem">7</span> (check: <span class="chem">144(6) - 920 = -56 &lt; 0</span> and <span class="chem">144(7) - 920 = 88 &gt; 0</span>).</p>
      solution: "<p>해석: 두 기계를 연달아 거치면 합성함수가 되고, 안쪽 (먼저 적용하는) 함수는 <span class=\"chem\">E</span>예요.<br>(a) <span class=\"chem\">(Y ∘ E)(d) = 160(0.9(d - 5)) - 200 = 144(d - 5) - 200 = 144d - 920</span>.<br>(b) <span class=\"chem\">144d - 920 = 14 200 => 144d = 15 120 => d = 105</span>달러.<br>(c) <span class=\"chem\">144d - 920 &gt; 0 => d &gt; 920/144 ≈ 6.39</span>. 최소 정수 달러는 <span class=\"chem\">7</span>이에요 (확인: <span class=\"chem\">144(6) - 920 = -56 &lt; 0</span>, <span class=\"chem\">144(7) - 920 = 88 &gt; 0</span>).</p>",
      // EN: <p>(a) <span class="chem">(Y ∘ E)(d) = 144d - 920</span>; (b) <span class="chem">105</span> dollars; (c) <span class="chem">7</span> dollars.</p>
      answer: "<p>(a) <span class=\"chem\">(Y ∘ E)(d) = 144d - 920</span>; (b) <span class=\"chem\">105</span>달러; (c) <span class=\"chem\">7</span>달러.</p>",
      markscheme: [
        // EN: M1: Recognises the composite (Y ∘ E)(d) = Y(0.9(d − 5)) = 160 × 0.9(d − 5) − 200.
        "M1: 합성함수 (Y ∘ E)(d) = Y(0.9(d − 5)) = 160 × 0.9(d − 5) − 200임을 인식함.",
        // EN: A1: (Y ∘ E)(d) = 144d − 920.
        "A1: (Y ∘ E)(d) = 144d − 920.",
        // EN: M1: Recognises that the answer is (Y ∘ E)⁻¹(14 200), i.e. sets 144d − 920 = 14 200.
        "M1: 답이 (Y ∘ E)⁻¹(14 200)임을 인식함, 즉 144d − 920 = 14 200을 세움.",
        // EN: A1: 144d = 15 120.
        "A1: 144d = 15 120.",
        // EN: A1: d = 105 dollars.
        "A1: d = 105달러.",
        // EN: M1: Sets 144d − 920 > 0, so d > 920/144 = 6.39 (3 s.f.).
        "M1: 144d − 920 > 0을 세워 d > 920/144 = 6.39 (유효숫자 3자리)를 얻음.",
        // EN: A1: Least whole number of dollars is 7.
        "A1: 최소 정수 달러는 7.",
      ],
    },

    // ── t2-1-q034 · short · challenge · AHL · AHL 2.14 · 7 marks
    "t2-1-q034": {
      // EN: <p>Let <span class="chem">f(x) = x^4 - 8x^2</span> for <span class="chem">x &gt;= a</span>.<br>(a) By writing <span class="chem">f(x)</span> in the form <span class="chem">(x^2 - p)^2 - q</span>, find the smallest value of <span class="chem">a</span> for which <span class="chem">f^{-1}</span> exists. <strong>[3 marks]</strong><br>(b) For this value of <span class="chem">a</span>, find an expression for <span class="chem">f^{-1}(x)</span> and state its domain. <strong>[3 marks]</strong><br>(c) Write down the value of <span class="chem">x</span> for which <span class="chem">f^{-1}(x) = 3</span>. <strong>[1 mark]</strong></p>
      stem: "<p><span class=\"chem\">x &gt;= a</span>에서 <span class=\"chem\">f(x) = x^4 - 8x^2</span>이라 하자.<br>(a) <span class=\"chem\">f(x)</span>를 <span class=\"chem\">(x^2 - p)^2 - q</span> 꼴로 나타내어, <span class=\"chem\">f^{-1}</span>가 존재하도록 하는 <span class=\"chem\">a</span>의 최솟값을 구하시오 (Find). <strong>[3 marks]</strong><br>(b) 이 <span class=\"chem\">a</span>의 값에 대해 <span class=\"chem\">f^{-1}(x)</span>의 식을 구하고 그 정의역을 쓰시오 (State). <strong>[3 marks]</strong><br>(c) <span class=\"chem\">f^{-1}(x) = 3</span>을 만족시키는 <span class=\"chem\">x</span>의 값을 쓰시오 (Write down). <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: an inverse exists only if <span class="chem">f</span> is one-to-one. Treat <span class="chem">x^2</span> as the variable and complete the square to see where <span class="chem">f</span> turns.
        "해석: 역함수는 <span class=\"chem\">f</span>가 일대일함수일 때만 존재해요. <span class=\"chem\">x^2</span>을 변수로 보고 완전제곱식으로 변형해 <span class=\"chem\">f</span>가 어디에서 방향을 바꾸는지 확인하세요.",
        // EN: <span class="chem">x^4 - 8x^2 = (x^2 - 4)^2 - 16</span>. As <span class="chem">x</span> increases from <span class="chem">0</span>, <span class="chem">x^2 - 4</span> is negative until <span class="chem">x = 2</span>, then positive.
        "<span class=\"chem\">x^4 - 8x^2 = (x^2 - 4)^2 - 16</span>이에요. <span class=\"chem\">x</span>가 <span class=\"chem\">0</span>에서부터 증가할 때 <span class=\"chem\">x^2 - 4</span>는 <span class=\"chem\">x = 2</span>까지는 음수이고 그 뒤로는 양수예요.",
        // EN: For (b), you will take two square roots. Use the restriction <span class="chem">y &gt;= 2</span> to choose each sign.
        "(b)에서는 제곱근을 두 번 취하게 돼요. 조건 <span class=\"chem\">y &gt;= 2</span>를 이용해 각각의 부호를 고르세요.",
        // EN: For (c), <span class="chem">f^{-1}(x) = 3</span> means <span class="chem">x = f(3)</span>.
        "(c)에서 <span class=\"chem\">f^{-1}(x) = 3</span>은 <span class=\"chem\">x = f(3)</span>이라는 뜻이에요.",
      ],
      // EN: <p>Decode: "smallest <span class="chem">a</span> for which <span class="chem">f^{-1}</span> exists" asks for the largest interval of the form <span class="chem">x &gt;= a</span> on which <span class="chem">f</span> is one-to-one.<br>(a) <span class="chem">f(x) = (x^2 - 4)^2 - 16</span>. The minimum <span class="chem">-16</span> is at <span class="chem">x = 2</span> (for <span class="chem">x &gt;= 0</span>). On <span class="chem">0 &lt;= x &lt;= 2</span> the value <span class="chem">(x^2 - 4)^2</span> decreases, and for <span class="chem">x &gt;= 2</span> it increases. So <span class="chem">f</span> is one-to-one on <span class="chem">x &gt;= a</span> exactly when <span class="chem">a &gt;= 2</span>, and the smallest value is <span class="chem">a = 2</span>.<br>(b) <span class="chem">x = (y^2 - 4)^2 - 16 => y^2 - 4 = sqrt(x + 16)</span> (positive, since <span class="chem">y &gt;= 2</span>) <span class="chem">=> y = sqrt(4 + sqrt(x + 16))</span> (positive root). So <span class="chem">f^{-1}(x) = sqrt(4 + sqrt(x + 16))</span>, with domain <span class="chem">x &gt;= -16</span>.<br>(c) <span class="chem">x = f(3) = 81 - 72 = 9</span>.</p>
      solution: "<p>해석: \"<span class=\"chem\">f^{-1}</span>가 존재하도록 하는 가장 작은 <span class=\"chem\">a</span>\"는 <span class=\"chem\">f</span>가 일대일이 되는 <span class=\"chem\">x &gt;= a</span> 꼴의 가장 큰 구간을 묻는 거예요.<br>(a) <span class=\"chem\">f(x) = (x^2 - 4)^2 - 16</span>. 최솟값 <span class=\"chem\">-16</span>은 (<span class=\"chem\">x &gt;= 0</span>에서) <span class=\"chem\">x = 2</span>일 때예요. <span class=\"chem\">0 &lt;= x &lt;= 2</span>에서는 <span class=\"chem\">(x^2 - 4)^2</span>의 값이 감소하고, <span class=\"chem\">x &gt;= 2</span>에서는 증가해요. 따라서 <span class=\"chem\">f</span>가 <span class=\"chem\">x &gt;= a</span>에서 일대일인 것은 정확히 <span class=\"chem\">a &gt;= 2</span>일 때이고, 최솟값은 <span class=\"chem\">a = 2</span>예요.<br>(b) <span class=\"chem\">x = (y^2 - 4)^2 - 16 => y^2 - 4 = sqrt(x + 16)</span> (<span class=\"chem\">y &gt;= 2</span>이므로 양수) <span class=\"chem\">=> y = sqrt(4 + sqrt(x + 16))</span> (양의 제곱근). 따라서 <span class=\"chem\">f^{-1}(x) = sqrt(4 + sqrt(x + 16))</span>이고 정의역은 <span class=\"chem\">x &gt;= -16</span>이에요.<br>(c) <span class=\"chem\">x = f(3) = 81 - 72 = 9</span>.</p>",
      // EN: <p>(a) <span class="chem">f(x) = (x^2 - 4)^2 - 16</span>, so <span class="chem">a = 2</span>; (b) <span class="chem">f^{-1}(x) = sqrt(4 + sqrt(x + 16))</span>, <span class="chem">x &gt;= -16</span>; (c) <span class="chem">x = 9</span>.</p>
      answer: "<p>(a) <span class=\"chem\">f(x) = (x^2 - 4)^2 - 16</span>이므로 <span class=\"chem\">a = 2</span>; (b) <span class=\"chem\">f^{-1}(x) = sqrt(4 + sqrt(x + 16))</span>, <span class=\"chem\">x &gt;= -16</span>; (c) <span class=\"chem\">x = 9</span>.</p>",
      markscheme: [
        // EN: A1: f(x) = (x² − 4)² − 16.
        "A1: f(x) = (x² − 4)² − 16.",
        // EN: R1: The minimum value −16 occurs at x² = 4, i.e. x = ±2; f decreases on 0 ≤ x ≤ 2 and increases for x ≥ 2, so any domain x ≥ a with a < 2 contains two inputs with the same output.
        "R1: 최솟값 −16은 x² = 4, 즉 x = ±2일 때 나타남; f는 0 ≤ x ≤ 2에서 감소하고 x ≥ 2에서 증가하므로, a < 2인 정의역 x ≥ a에는 출력값이 같은 두 입력이 포함됨.",
        // EN: A1: Smallest a = 2.
        "A1: a의 최솟값은 2.",
        // EN: M1: Swaps x and y and rearranges: (y² − 4)² = x + 16, so y² = 4 ± √(x + 16).
        "M1: x와 y를 바꾸고 정리함: (y² − 4)² = x + 16, 따라서 y² = 4 ± √(x + 16).",
        // EN: A1: Chooses positive roots (since y ≥ 2 means y² − 4 ≥ 0): f⁻¹(x) = √(4 + √(x + 16)).
        "A1: 양의 제곱근을 고름 (y ≥ 2이면 y² − 4 ≥ 0이므로): f⁻¹(x) = √(4 + √(x + 16)).",
        // EN: A1: Domain of f⁻¹ is x ≥ −16 (the range of f).
        "A1: f⁻¹의 정의역은 x ≥ −16 (f의 치역).",
        // EN: A1: x = f(3) = 81 − 72 = 9.
        "A1: x = f(3) = 81 − 72 = 9.",
      ],
    },

    // ── t2-1-q035 · numeric · exam · SL · SL 2.4 · 3 marks
    "t2-1-q035": {
      // EN: <p>The curves <span class="chem">y = 2^x</span> and <span class="chem">y = x + 3</span> intersect at two points. Find the <span class="chem">x</span>-coordinate of the intersection point that lies in the first quadrant. Give your answer to 3 significant figures.</p>
      stem: "<p>곡선 <span class=\"chem\">y = 2^x</span>과 <span class=\"chem\">y = x + 3</span>은 두 점에서 만난다. 제1사분면에 있는 교점의 <span class=\"chem\">x</span>좌표를 구하시오 (Find). 답은 유효숫자 3자리로 쓰시오.</p>",
      hints: [
        // EN: Graph <span class="chem">Y_1 = 2^x</span> and <span class="chem">Y_2 = x + 3</span>, then use the intersect tool.
        "<span class=\"chem\">Y_1 = 2^x</span>과 <span class=\"chem\">Y_2 = x + 3</span>의 그래프를 그린 뒤 intersect (교점) 기능을 이용하세요.",
        // EN: There is another intersection near <span class="chem">x = -2.86</span>. Choose the one with <span class="chem">x &gt; 0</span>.
        "다른 교점은 <span class=\"chem\">x = -2.86</span> 근처에 있어요. <span class=\"chem\">x &gt; 0</span>인 교점을 고르세요.",
      ],
      // EN: <p>Using the GDC intersect tool on <span class="chem">y = 2^x</span> and <span class="chem">y = x + 3</span>: the intersections are at <span class="chem">x ≈ -2.86</span> and <span class="chem">x ≈ 2.4449</span>. The first-quadrant point has <span class="chem">x ≈ 2.44</span> (3 s.f.), with <span class="chem">y ≈ 5.44</span>. The equation <span class="chem">2^x = x + 3</span> cannot be solved algebraically, so technology is required.</p>
      solution: "<p><span class=\"chem\">y = 2^x</span>과 <span class=\"chem\">y = x + 3</span>에 GDC의 교점 기능을 이용하면 교점은 <span class=\"chem\">x ≈ -2.86</span>과 <span class=\"chem\">x ≈ 2.4449</span>예요. 제1사분면의 점은 <span class=\"chem\">x ≈ 2.44</span> (유효숫자 3자리)이고 <span class=\"chem\">y ≈ 5.44</span>예요. 방정식 <span class=\"chem\">2^x = x + 3</span>은 대수적으로 풀 수 없으므로 공학 도구가 필요해요.</p>",
    },

    // ── t2-1-q036 · numeric · exam · SL · SL 2.2, 2.4 · 3 marks
    "t2-1-q036": {
      // EN: <p>Let <span class="chem">f(x) = 3 ln x - x + 2</span> for <span class="chem">1 &lt;= x &lt;= 10</span>. Find the least value of <span class="chem">f(x)</span> on this domain. Give your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">1 &lt;= x &lt;= 10</span>에서 <span class=\"chem\">f(x) = 3 ln x - x + 2</span>라 하자. 이 정의역에서 <span class=\"chem\">f(x)</span>의 최솟값을 구하시오 (Find). 답은 유효숫자 3자리로 쓰시오.</p>",
      hints: [
        // EN: Graph <span class="chem">y = 3 ln x - x + 2</span> with the window <span class="chem">1 &lt;= x &lt;= 10</span>. Does the graph have a local minimum on this interval?
        "화면 범위를 <span class=\"chem\">1 &lt;= x &lt;= 10</span>으로 하여 <span class=\"chem\">y = 3 ln x - x + 2</span>의 그래프를 그리세요. 이 구간에서 그래프에 극소점이 있나요?",
        // EN: The only turning point is a maximum (at <span class="chem">x = 3</span>). The least value must be at one of the end points. Compare <span class="chem">f(1)</span> and <span class="chem">f(10)</span>.
        "유일한 극점은 극대점 (<span class=\"chem\">x = 3</span>)이에요. 따라서 최솟값은 양 끝점 중 하나에서 나타나요. <span class=\"chem\">f(1)</span>과 <span class=\"chem\">f(10)</span>을 비교하세요.",
      ],
      // EN: <p>On the GDC the graph rises to a maximum at <span class="chem">(3, 2.30)</span>, then falls. There is no local minimum, so the least value is at an end point: <span class="chem">f(1) = 0 - 1 + 2 = 1</span> and <span class="chem">f(10) = 3 ln 10 - 8 ≈ -1.0922</span>. The least value is <span class="chem">-1.09</span> (3 s.f.), so the range is <span class="chem">-1.09 &lt;= f(x) &lt;= 2.30</span>.</p>
      solution: "<p>GDC에서 그래프는 극대점 <span class=\"chem\">(3, 2.30)</span>까지 증가한 뒤 감소해요. 극소점이 없으므로 최솟값은 끝점에서 나타나요: <span class=\"chem\">f(1) = 0 - 1 + 2 = 1</span>, <span class=\"chem\">f(10) = 3 ln 10 - 8 ≈ -1.0922</span>. 최솟값은 <span class=\"chem\">-1.09</span> (유효숫자 3자리)이고, 치역은 <span class=\"chem\">-1.09 &lt;= f(x) &lt;= 2.30</span>이에요.</p>",
    },

    // ── t2-1-q037 · numeric · exam · SL · SL 2.2 · 3 marks
    "t2-1-q037": {
      // EN: <p>The function <span class="chem">f(x) = x^3 + e^x</span>, <span class="chem">x ∈ ℝ</span>, is increasing, so its inverse <span class="chem">f^{-1}</span> exists. Find <span class="chem">f^{-1}(5)</span>, giving your answer to 3 significant figures.</p>
      stem: "<p>함수 <span class=\"chem\">f(x) = x^3 + e^x</span>, <span class=\"chem\">x ∈ ℝ</span>는 증가함수이므로 역함수 <span class=\"chem\">f^{-1}</span>가 존재한다. <span class=\"chem\">f^{-1}(5)</span>를 구하시오 (Find). 답은 유효숫자 3자리로 쓰시오.</p>",
      hints: [
        // EN: You cannot write down <span class="chem">f^{-1}(x)</span> as a formula. But <span class="chem">f^{-1}(5) = a</span> means <span class="chem">f(a) = 5</span>.
        "<span class=\"chem\">f^{-1}(x)</span>를 식으로 쓸 수는 없어요. 하지만 <span class=\"chem\">f^{-1}(5) = a</span>는 <span class=\"chem\">f(a) = 5</span>라는 뜻이에요.",
        // EN: Graph <span class="chem">Y_1 = x^3 + e^x</span> and <span class="chem">Y_2 = 5</span> and find the intersection.
        "<span class=\"chem\">Y_1 = x^3 + e^x</span>과 <span class=\"chem\">Y_2 = 5</span>의 그래프를 그리고 교점을 구하세요.",
      ],
      // EN: <p>Let <span class="chem">f^{-1}(5) = a</span>, so <span class="chem">a^3 + e^a = 5</span>. The GDC (intersection of <span class="chem">y = x^3 + e^x</span> with <span class="chem">y = 5</span>) gives <span class="chem">a ≈ 1.19367</span>. So <span class="chem">f^{-1}(5) ≈ 1.19</span> (3 s.f.). Check: <span class="chem">1.1937^3 + e^{1.1937} ≈ 1.701 + 3.299 = 5.00</span>.</p>
      solution: "<p><span class=\"chem\">f^{-1}(5) = a</span>라 하면 <span class=\"chem\">a^3 + e^a = 5</span>예요. GDC (<span class=\"chem\">y = x^3 + e^x</span>과 <span class=\"chem\">y = 5</span>의 교점)에서 <span class=\"chem\">a ≈ 1.19367</span>이에요. 따라서 <span class=\"chem\">f^{-1}(5) ≈ 1.19</span> (유효숫자 3자리)예요. 확인: <span class=\"chem\">1.1937^3 + e^{1.1937} ≈ 1.701 + 3.299 = 5.00</span>.</p>",
    },

    // ── t2-1-q038 · short · exam · SL · SL 2.3, 2.4 · 7 marks
    "t2-1-q038": {
      // EN: <p>Let <span class="chem">f(x) = ln(x + 1)</span> and <span class="chem">g(x) = 2 - 0.5x</span>. The function <span class="chem">h</span> is defined by <span class="chem">h(x) = f(x) + g(x)</span> for <span class="chem">0 &lt;= x &lt;= 10</span>.<br>(a) Sketch the graph of <span class="chem">y = h(x)</span> on this domain. On your sketch, label the coordinates of the maximum point, the <span class="chem">x</span>-intercept and both end points. <strong>[5 marks]</strong><br>(b) Hence write down the range of <span class="chem">h</span>. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = ln(x + 1)</span>, <span class=\"chem\">g(x) = 2 - 0.5x</span>라 하자. 함수 <span class=\"chem\">h</span>는 <span class=\"chem\">0 &lt;= x &lt;= 10</span>에서 <span class=\"chem\">h(x) = f(x) + g(x)</span>로 정의된다.<br>(a) 이 정의역에서 <span class=\"chem\">y = h(x)</span>의 그래프의 개형을 그리시오 (Sketch). 그래프에 극대점, <span class=\"chem\">x</span>절편, 양 끝점의 좌표를 표시하시오. <strong>[5 marks]</strong><br>(b) 이를 이용하여 (Hence) <span class=\"chem\">h</span>의 치역을 쓰시오 (write down). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Enter <span class="chem">Y_1 = ln(x + 1) + 2 - 0.5x</span> with window <span class="chem">0 &lt;= x &lt;= 10</span>. Use the maximum and zero tools.
        "화면 범위를 <span class=\"chem\">0 &lt;= x &lt;= 10</span>으로 하여 <span class=\"chem\">Y_1 = ln(x + 1) + 2 - 0.5x</span>를 입력하세요. maximum 기능과 zero 기능을 이용하세요.",
        // EN: A sketch shows the shape and the labelled key points; it does not need to be to scale. Do not extend it beyond the domain.
        "개형은 모양과 표시된 핵심 점들을 보여 주는 것이며, 축척에 맞출 필요는 없어요. 정의역 밖으로 그리지 마세요.",
        // EN: For the range, the least value is at an end point, not at a turning point.
        "치역에서 최솟값은 극점이 아니라 끝점에서 나타나요.",
      ],
      // EN: <p>(a) On the GDC, <span class="chem">h(0) = 2</span>. The maximum tool gives <span class="chem">(1, 2.19)</span> (exactly <span class="chem">(1, 1.5 + ln 2)</span>). The zero tool gives <span class="chem">x ≈ 8.50</span>. At the right end, <span class="chem">h(10) = ln 11 - 3 ≈ -0.602</span>. The sketch rises from <span class="chem">(0, 2)</span> to <span class="chem">(1, 2.19)</span>, then falls through <span class="chem">(8.50, 0)</span> to <span class="chem">(10, -0.602)</span>.<br>(b) The greatest value is <span class="chem">2.19</span> and the least is <span class="chem">h(10) ≈ -0.602</span>, so <span class="chem">-0.602 &lt;= h(x) &lt;= 2.19</span>.</p>
      solution: "<p>(a) GDC에서 <span class=\"chem\">h(0) = 2</span>예요. maximum 기능으로 <span class=\"chem\">(1, 2.19)</span> (정확히는 <span class=\"chem\">(1, 1.5 + ln 2)</span>)를 얻어요. zero 기능으로 <span class=\"chem\">x ≈ 8.50</span>을 얻어요. 오른쪽 끝에서는 <span class=\"chem\">h(10) = ln 11 - 3 ≈ -0.602</span>예요. 개형은 <span class=\"chem\">(0, 2)</span>에서 <span class=\"chem\">(1, 2.19)</span>까지 증가한 뒤, <span class=\"chem\">(8.50, 0)</span>을 지나 <span class=\"chem\">(10, -0.602)</span>까지 감소해요.<br>(b) 최댓값은 <span class=\"chem\">2.19</span>이고 최솟값은 <span class=\"chem\">h(10) ≈ -0.602</span>이므로 <span class=\"chem\">-0.602 &lt;= h(x) &lt;= 2.19</span>예요.</p>",
      // EN: <p>(a) A curve starting at <span class="chem">(0, 2)</span>, rising to a maximum at <span class="chem">(1, 2.19)</span>, then decreasing through the <span class="chem">x</span>-intercept <span class="chem">(8.50, 0)</span> to the end point <span class="chem">(10, -0.602)</span>; (b) <span class="chem">-0.602 &lt;= h(x) &lt;= 2.19</span>.</p>
      answer: "<p>(a) <span class=\"chem\">(0, 2)</span>에서 시작해 극대점 <span class=\"chem\">(1, 2.19)</span>까지 증가한 뒤, <span class=\"chem\">x</span>절편 <span class=\"chem\">(8.50, 0)</span>을 지나 끝점 <span class=\"chem\">(10, -0.602)</span>까지 감소하는 곡선; (b) <span class=\"chem\">-0.602 &lt;= h(x) &lt;= 2.19</span>.</p>",
      markscheme: [
        // EN: A1: Correct shape: rises then falls, drawn only for 0 ≤ x ≤ 10.
        "A1: 올바른 모양: 증가했다가 감소하며, 0 ≤ x ≤ 10에서만 그림.",
        // EN: A1: Maximum point labelled (1, 2.19).
        "A1: 극대점 (1, 2.19)를 표시함.",
        // EN: A1: x-intercept labelled (8.50, 0).
        "A1: x절편 (8.50, 0)을 표시함.",
        // EN: A1: Left end point labelled (0, 2).
        "A1: 왼쪽 끝점 (0, 2)를 표시함.",
        // EN: A1: Right end point labelled (10, −0.602).
        "A1: 오른쪽 끝점 (10, −0.602)를 표시함.",
        // EN: A1: Lower bound −0.602 (from the end point, not a turning point).
        "A1: 하한 −0.602 (극점이 아니라 끝점에서 나옴).",
        // EN: A1: Upper bound 2.19, both bounds included: −0.602 ≤ h(x) ≤ 2.19.
        "A1: 상한 2.19, 양 끝을 모두 포함함: −0.602 ≤ h(x) ≤ 2.19.",
      ],
    },

    // ── t2-1-q039 · numeric · exam · SL · SL 2.2, 2.5 · 5 marks
    "t2-1-q039": {
      // EN: <p>A factory starts a production run at time <span class="chem">t = 0</span>. After <span class="chem">t</span> hours it has produced <span class="chem">n(t) = 200(1 - e^{-0.3t})</span> items. The total cost, in dollars, of producing <span class="chem">n</span> items is <span class="chem">C(n) = 500 + 4n + 0.01n^2</span>. Find the time, in hours, at which the total cost reaches <span class="chem">1200</span> dollars. Give your answer to 3 significant figures.</p>
      stem: "<p>어떤 공장이 시각 <span class=\"chem\">t = 0</span>에 생산을 시작한다. <span class=\"chem\">t</span>시간 후까지 <span class=\"chem\">n(t) = 200(1 - e^{-0.3t})</span>개의 제품을 생산했다. 제품 <span class=\"chem\">n</span>개를 생산하는 총비용(달러)은 <span class=\"chem\">C(n) = 500 + 4n + 0.01n^2</span>이다. 총비용이 <span class=\"chem\">1200</span>달러에 도달하는 시각(시간)을 구하시오 (Find). 답은 유효숫자 3자리로 쓰시오.</p>",
      hints: [
        // EN: Decode: cost depends on items, and items depend on time, so cost as a function of time is the composite <span class="chem">(C ∘ n)(t)</span>. You need to solve <span class="chem">C(n(t)) = 1200</span>.
        "해석: 비용은 제품 수에 따라 정해지고 제품 수는 시간에 따라 정해지므로, 시간에 대한 비용은 합성함수 <span class=\"chem\">(C ∘ n)(t)</span>예요. <span class=\"chem\">C(n(t)) = 1200</span>을 풀어야 해요.",
        // EN: Either graph <span class="chem">Y_1 = C(n(t))</span> directly and intersect with <span class="chem">Y_2 = 1200</span>, or first solve <span class="chem">C(n) = 1200</span> for <span class="chem">n</span>, then solve <span class="chem">n(t) = n</span>.
        "<span class=\"chem\">Y_1 = C(n(t))</span>의 그래프를 바로 그려 <span class=\"chem\">Y_2 = 1200</span>과의 교점을 구하거나, 먼저 <span class=\"chem\">C(n) = 1200</span>을 <span class=\"chem\">n</span>에 대해 푼 뒤 <span class=\"chem\">n(t) = n</span>을 푸세요.",
        // EN: <span class="chem">C(n) = 1200</span> gives <span class="chem">n ≈ 131.66</span> items (reject the negative root).
        "<span class=\"chem\">C(n) = 1200</span>에서 <span class=\"chem\">n ≈ 131.66</span>개를 얻어요 (음의 근은 버려요).",
      ],
      // EN: <p>Decode: the cost after <span class="chem">t</span> hours is <span class="chem">C(n(t))</span>. Solve <span class="chem">C(n) = 1200</span>: <span class="chem">0.01n^2 + 4n - 700 = 0 => n ≈ 131.662</span> (the other root is negative). Then <span class="chem">200(1 - e^{-0.3t}) = 131.662 => e^{-0.3t} ≈ 0.341688 => t ≈ 3.5795</span>. The cost reaches <span class="chem">1200</span> dollars after about <span class="chem">3.58</span> hours. (Graphing <span class="chem">y = C(n(t))</span> and <span class="chem">y = 1200</span> gives the same value.)</p>
      solution: "<p>해석: <span class=\"chem\">t</span>시간 후의 비용은 <span class=\"chem\">C(n(t))</span>예요. <span class=\"chem\">C(n) = 1200</span>을 풀면 <span class=\"chem\">0.01n^2 + 4n - 700 = 0 => n ≈ 131.662</span> (다른 근은 음수)예요. 그러면 <span class=\"chem\">200(1 - e^{-0.3t}) = 131.662 => e^{-0.3t} ≈ 0.341688 => t ≈ 3.5795</span>예요. 비용은 약 <span class=\"chem\">3.58</span>시간 후에 <span class=\"chem\">1200</span>달러에 도달해요. (<span class=\"chem\">y = C(n(t))</span>와 <span class=\"chem\">y = 1200</span>의 그래프를 그려도 같은 값을 얻어요.)</p>",
      // EN: hours
      unit: "시간",
    },

    // ── t2-1-q040 · short · exam · SL · SL 2.1, 2.4 · 7 marks
    "t2-1-q040": {
      // EN: <p>The line <span class="chem">L</span> has gradient <span class="chem">-0.5</span> and passes through the point <span class="chem">(1, 2)</span>.<br>(a) Find the equation of <span class="chem">L</span> in the form <span class="chem">y = mx + c</span>. <strong>[2 marks]</strong><br>(b) The line <span class="chem">L</span> meets the curve <span class="chem">y = ln x + 1</span> at the point <span class="chem">P</span>. Find the coordinates of <span class="chem">P</span>. <strong>[2 marks]</strong><br>(c) The line <span class="chem">N</span> passes through <span class="chem">P</span> and is perpendicular to <span class="chem">L</span>. Find the <span class="chem">x</span>-coordinate of the point where <span class="chem">N</span> meets the <span class="chem">x</span>-axis. <strong>[3 marks]</strong></p>
      stem: "<p>직선 <span class=\"chem\">L</span>은 기울기가 <span class=\"chem\">-0.5</span>이고 점 <span class=\"chem\">(1, 2)</span>를 지난다.<br>(a) <span class=\"chem\">L</span>의 방정식을 <span class=\"chem\">y = mx + c</span> 꼴로 구하시오 (Find). <strong>[2 marks]</strong><br>(b) 직선 <span class=\"chem\">L</span>은 곡선 <span class=\"chem\">y = ln x + 1</span>과 점 <span class=\"chem\">P</span>에서 만난다. <span class=\"chem\">P</span>의 좌표를 구하시오. <strong>[2 marks]</strong><br>(c) 직선 <span class=\"chem\">N</span>은 <span class=\"chem\">P</span>를 지나고 <span class=\"chem\">L</span>에 수직이다. <span class=\"chem\">N</span>이 <span class=\"chem\">x</span>축과 만나는 점의 <span class=\"chem\">x</span>좌표를 구하시오. <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Use point-gradient form <span class="chem">y - y_1 = m(x - x_1)</span>.
        "점-기울기 형태 <span class=\"chem\">y - y_1 = m(x - x_1)</span>을 이용하세요.",
        // EN: For (b), graph both and use the intersect tool. Keep full accuracy for <span class="chem">P</span> in your GDC memory.
        "(b)에서는 두 그래프를 그리고 교점 기능을 이용하세요. <span class=\"chem\">P</span>의 값은 반올림하지 말고 GDC 메모리에 저장해 두세요.",
        // EN: For (c), the perpendicular gradient is <span class="chem">-1/(-0.5) = 2</span>. Then put <span class="chem">y = 0</span>.
        "(c)에서 수직인 직선의 기울기는 <span class=\"chem\">-1/(-0.5) = 2</span>예요. 그다음 <span class=\"chem\">y = 0</span>을 대입하세요.",
      ],
      // EN: <p>(a) <span class="chem">y - 2 = -0.5(x - 1) => y = -0.5x + 2.5</span>.<br>(b) GDC: <span class="chem">ln x + 1 = -0.5x + 2.5</span> gives <span class="chem">x ≈ 1.81159</span>, <span class="chem">y ≈ 1.59420</span>, so <span class="chem">P(1.81, 1.59)</span>.<br>(c) <span class="chem">N</span> has gradient <span class="chem">2</span>: <span class="chem">y - 1.59420 = 2(x - 1.81159)</span>. At <span class="chem">y = 0</span>: <span class="chem">x = 1.81159 - 0.79710 = 1.01449</span>, so <span class="chem">x ≈ 1.01</span>.</p>
      solution: "<p>(a) <span class=\"chem\">y - 2 = -0.5(x - 1) => y = -0.5x + 2.5</span>.<br>(b) GDC: <span class=\"chem\">ln x + 1 = -0.5x + 2.5</span>에서 <span class=\"chem\">x ≈ 1.81159</span>, <span class=\"chem\">y ≈ 1.59420</span>이므로 <span class=\"chem\">P(1.81, 1.59)</span>예요.<br>(c) <span class=\"chem\">N</span>의 기울기는 <span class=\"chem\">2</span>이므로 <span class=\"chem\">y - 1.59420 = 2(x - 1.81159)</span>예요. <span class=\"chem\">y = 0</span>일 때 <span class=\"chem\">x = 1.81159 - 0.79710 = 1.01449</span>이므로 <span class=\"chem\">x ≈ 1.01</span>이에요.</p>",
      // EN: <p>(a) <span class="chem">y = -0.5x + 2.5</span>; (b) <span class="chem">P(1.81, 1.59)</span>; (c) <span class="chem">x = 1.01</span> (3 s.f.).</p>
      answer: "<p>(a) <span class=\"chem\">y = -0.5x + 2.5</span>; (b) <span class=\"chem\">P(1.81, 1.59)</span>; (c) <span class=\"chem\">x = 1.01</span> (유효숫자 3자리).</p>",
      markscheme: [
        // EN: M1: Substitutes into y − 2 = −0.5(x − 1).
        "M1: y − 2 = −0.5(x − 1)에 대입함.",
        // EN: A1: y = −0.5x + 2.5.
        "A1: y = −0.5x + 2.5.",
        // EN: M1: Uses the GDC to solve ln x + 1 = −0.5x + 2.5 (intersection of the two graphs).
        "M1: GDC로 ln x + 1 = −0.5x + 2.5를 풂 (두 그래프의 교점).",
        // EN: A1: P(1.81, 1.59).
        "A1: P(1.81, 1.59).",
        // EN: M1: Uses the perpendicular gradient 2 (from −0.5 × 2 = −1).
        "M1: 수직인 직선의 기울기 2를 이용함 (−0.5 × 2 = −1에서).",
        // EN: A1: Equation of N: y − 1.594 = 2(x − 1.812) (or equivalent).
        "A1: N의 방정식: y − 1.594 = 2(x − 1.812) (또는 동치인 식).",
        // EN: A1: Puts y = 0 to get x = 1.01.
        "A1: y = 0을 대입해 x = 1.01을 얻음.",
      ],
    },

    // ── t2-1-q041 · numeric · exam · SL · SL 2.4 · 3 marks
    "t2-1-q041": {
      // EN: <p>The graph of <span class="chem">f(x) = x^4 - 4x^2 + x</span> has two local minimum points and one local maximum point. Find the value of <span class="chem">f(x)</span> at the local maximum point. Give your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">f(x) = x^4 - 4x^2 + x</span>의 그래프에는 극소점이 두 개, 극대점이 한 개 있다. 극대점에서 <span class=\"chem\">f(x)</span>의 값을 구하시오 (Find). 답은 유효숫자 3자리로 쓰시오.</p>",
      hints: [
        // EN: Graph <span class="chem">y = x^4 - 4x^2 + x</span> with a window such as <span class="chem">-2.5 &lt;= x &lt;= 2.5</span>, <span class="chem">-6 &lt;= y &lt;= 3</span>.
        "<span class=\"chem\">-2.5 &lt;= x &lt;= 2.5</span>, <span class=\"chem\">-6 &lt;= y &lt;= 3</span>과 같은 화면 범위로 <span class=\"chem\">y = x^4 - 4x^2 + x</span>의 그래프를 그리세요.",
        // EN: The local maximum is close to the origin, so zoom in. Use the maximum tool and read the <span class="chem">y</span>-coordinate.
        "극대점은 원점에 아주 가까우므로 확대해서 보세요. maximum 기능을 이용해 <span class=\"chem\">y</span>좌표를 읽으세요.",
      ],
      // EN: <p>The GDC shows local minima near <span class="chem">(-1.47, -5.44)</span> and <span class="chem">(1.35, -2.62)</span> and a local maximum at <span class="chem">(0.126, 0.0627)</span>. The value at the local maximum is <span class="chem">f(0.12600) ≈ 0.0627</span> (3 s.f.). The point is easy to miss in a standard window because it is so close to the origin.</p>
      solution: "<p>GDC에서 극소점은 <span class=\"chem\">(-1.47, -5.44)</span>와 <span class=\"chem\">(1.35, -2.62)</span> 근처에 있고, 극대점은 <span class=\"chem\">(0.126, 0.0627)</span>에 있어요. 극대점에서의 값은 <span class=\"chem\">f(0.12600) ≈ 0.0627</span> (유효숫자 3자리)이에요. 이 점은 원점에 매우 가까워서 기본 화면 범위에서는 놓치기 쉬워요.</p>",
    },

    // ── t2-1-q042 · short · exam · SL · SL 2.2, 2.5 · 7 marks
    "t2-1-q042": {
      // EN: <p>A cup of tea cools in a room. Its temperature, in °C, <span class="chem">t</span> minutes after it is poured is modelled by <span class="chem">T(t) = 20 + 70e^{-0.08t}</span>, <span class="chem">t &gt;= 0</span>.<br>(a) Write down the temperature of the tea when it is poured. <strong>[1 mark]</strong><br>(b) Write down the range of <span class="chem">T</span>. <strong>[2 marks]</strong><br>(c) Find the time taken for the tea to cool to <span class="chem">40</span>°C. <strong>[2 marks]</strong><br>(d) Explain what <span class="chem">T^{-1}(50)</span> represents in this context, and find its value. <strong>[2 marks]</strong></p>
      stem: "<p>방 안에서 차 한 잔이 식고 있다. 차를 따른 지 <span class=\"chem\">t</span>분 후의 온도(°C)는 <span class=\"chem\">T(t) = 20 + 70e^{-0.08t}</span>, <span class=\"chem\">t &gt;= 0</span>으로 모델링된다.<br>(a) 차를 따랐을 때의 온도를 쓰시오 (Write down). <strong>[1 mark]</strong><br>(b) <span class=\"chem\">T</span>의 치역을 쓰시오. <strong>[2 marks]</strong><br>(c) 차가 <span class=\"chem\">40</span>°C로 식는 데 걸리는 시간을 구하시오 (Find). <strong>[2 marks]</strong><br>(d) 이 상황에서 <span class=\"chem\">T^{-1}(50)</span>이 무엇을 나타내는지 설명하고 (Explain), 그 값을 구하시오. <strong>[2 marks]</strong></p>",
      hints: [
        // EN: As <span class="chem">t</span> increases, <span class="chem">e^{-0.08t}</span> decreases towards <span class="chem">0</span> but never reaches it. Which bound of the range is included?
        "<span class=\"chem\">t</span>가 증가하면 <span class=\"chem\">e^{-0.08t}</span>는 <span class=\"chem\">0</span>을 향해 감소하지만 절대 도달하지 않아요. 치역의 어느 쪽 경계가 포함될까요?",
        // EN: For (c), graph <span class="chem">Y_1 = T(t)</span> and <span class="chem">Y_2 = 40</span>, then intersect.
        "(c)에서는 <span class=\"chem\">Y_1 = T(t)</span>와 <span class=\"chem\">Y_2 = 40</span>의 그래프를 그리고 교점을 구하세요.",
        // EN: An inverse function swaps input and output: <span class="chem">T^{-1}</span> takes a temperature and returns a time.
        "역함수는 입력과 출력을 바꿔요: <span class=\"chem\">T^{-1}</span>는 온도를 받아서 시간을 돌려줘요.",
      ],
      // EN: <p>(a) <span class="chem">T(0) = 20 + 70 = 90</span>°C.<br>(b) <span class="chem">T</span> decreases from <span class="chem">90</span> and approaches <span class="chem">20</span> (the room temperature) without reaching it: <span class="chem">20 &lt; T &lt;= 90</span>.<br>(c) <span class="chem">70e^{-0.08t} = 20 => t = ln(3.5)/0.08 ≈ 15.66</span>, so about <span class="chem">15.7</span> minutes.<br>(d) <span class="chem">T^{-1}(50)</span> is the time after pouring at which the tea is at <span class="chem">50</span>°C. <span class="chem">70e^{-0.08t} = 30 => t = ln(7/3)/0.08 ≈ 10.59</span>, so about <span class="chem">10.6</span> minutes.</p>
      solution: "<p>(a) <span class=\"chem\">T(0) = 20 + 70 = 90</span>°C.<br>(b) <span class=\"chem\">T</span>는 <span class=\"chem\">90</span>에서부터 감소하며 <span class=\"chem\">20</span> (실내 온도)에 가까워지지만 도달하지 않아요: <span class=\"chem\">20 &lt; T &lt;= 90</span>.<br>(c) <span class=\"chem\">70e^{-0.08t} = 20 => t = ln(3.5)/0.08 ≈ 15.66</span>이므로 약 <span class=\"chem\">15.7</span>분이에요.<br>(d) <span class=\"chem\">T^{-1}(50)</span>은 차를 따른 뒤 차의 온도가 <span class=\"chem\">50</span>°C가 되는 시각이에요. <span class=\"chem\">70e^{-0.08t} = 30 => t = ln(7/3)/0.08 ≈ 10.59</span>이므로 약 <span class=\"chem\">10.6</span>분이에요.</p>",
      // EN: <p>(a) <span class="chem">90</span>°C; (b) <span class="chem">20 &lt; T &lt;= 90</span>; (c) <span class="chem">15.7</span> minutes; (d) the time (in minutes) at which the temperature is <span class="chem">50</span>°C; <span class="chem">T^{-1}(50) ≈ 10.6</span> minutes.</p>
      answer: "<p>(a) <span class=\"chem\">90</span>°C; (b) <span class=\"chem\">20 &lt; T &lt;= 90</span>; (c) <span class=\"chem\">15.7</span>분; (d) 온도가 <span class=\"chem\">50</span>°C가 되는 시각 (분); <span class=\"chem\">T^{-1}(50) ≈ 10.6</span>분.</p>",
      markscheme: [
        // EN: A1: T(0) = 90 °C.
        "A1: T(0) = 90 °C.",
        // EN: A1: Upper bound 90 included (T ≤ 90).
        "A1: 상한 90을 포함함 (T ≤ 90).",
        // EN: A1: Lower bound 20 not included (T > 20), since e^{−0.08t} > 0 for all t; so 20 < T ≤ 90.
        "A1: 하한 20은 포함하지 않음 (T > 20), 모든 t에 대해 e^{−0.08t} > 0이므로; 따라서 20 < T ≤ 90.",
        // EN: M1: Solves 20 + 70e^{−0.08t} = 40 (GDC or logarithms).
        "M1: 20 + 70e^{−0.08t} = 40을 풂 (GDC 또는 로그).",
        // EN: A1: t = 15.7 minutes.
        "A1: t = 15.7분.",
        // EN: R1: T⁻¹(50) is the time (minutes after pouring) at which the temperature is 50 °C.
        "R1: T⁻¹(50)은 온도가 50 °C가 되는 시각 (차를 따른 뒤의 분)임.",
        // EN: A1: T⁻¹(50) = 10.6 minutes.
        "A1: T⁻¹(50) = 10.6분.",
      ],
    },

    // ── t2-1-q043 · numeric · exam · SL · SL 2.5 · 4 marks
    "t2-1-q043": {
      // EN: <p>Let <span class="chem">f(x) = x^3 + x</span> and <span class="chem">g(x) = 2x - 1</span>, for <span class="chem">x ∈ ℝ</span>. The composite function <span class="chem">f ∘ g</span> is one-to-one. Find <span class="chem">(f ∘ g)^{-1}(20)</span>, giving your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">x ∈ ℝ</span>에서 <span class=\"chem\">f(x) = x^3 + x</span>, <span class=\"chem\">g(x) = 2x - 1</span>이라 하자. 합성함수 <span class=\"chem\">f ∘ g</span>는 일대일함수이다. <span class=\"chem\">(f ∘ g)^{-1}(20)</span>을 구하시오 (Find). 답은 유효숫자 3자리로 쓰시오.</p>",
      hints: [
        // EN: Decode: <span class="chem">(f ∘ g)^{-1}(20) = a</span> means <span class="chem">f(g(a)) = 20</span>. So you need the input that makes the composite equal to <span class="chem">20</span>.
        "해석: <span class=\"chem\">(f ∘ g)^{-1}(20) = a</span>는 <span class=\"chem\">f(g(a)) = 20</span>이라는 뜻이에요. 즉 합성함수의 값이 <span class=\"chem\">20</span>이 되게 하는 입력을 구해야 해요.",
        // EN: Graph <span class="chem">Y_1 = (2x - 1)^3 + (2x - 1)</span> and <span class="chem">Y_2 = 20</span>, or first solve <span class="chem">u^3 + u = 20</span> for <span class="chem">u = g(a)</span>, then solve <span class="chem">2a - 1 = u</span>.
        "<span class=\"chem\">Y_1 = (2x - 1)^3 + (2x - 1)</span>과 <span class=\"chem\">Y_2 = 20</span>의 그래프를 그리거나, 먼저 <span class=\"chem\">u = g(a)</span>에 대해 <span class=\"chem\">u^3 + u = 20</span>을 푼 뒤 <span class=\"chem\">2a - 1 = u</span>를 푸세요.",
      ],
      // EN: <p>Decode: find <span class="chem">a</span> with <span class="chem">(f ∘ g)(a) = 20</span>. Let <span class="chem">u = g(a)</span>. Then <span class="chem">u^3 + u = 20</span>, and the GDC gives <span class="chem">u ≈ 2.59170</span>. So <span class="chem">2a - 1 = 2.59170 => a ≈ 1.79585</span>. <span class="chem">(f ∘ g)^{-1}(20) ≈ 1.80</span> (3 s.f.).</p>
      solution: "<p>해석: <span class=\"chem\">(f ∘ g)(a) = 20</span>인 <span class=\"chem\">a</span>를 구해요. <span class=\"chem\">u = g(a)</span>라 하면 <span class=\"chem\">u^3 + u = 20</span>이고, GDC에서 <span class=\"chem\">u ≈ 2.59170</span>이에요. 따라서 <span class=\"chem\">2a - 1 = 2.59170 => a ≈ 1.79585</span>예요. <span class=\"chem\">(f ∘ g)^{-1}(20) ≈ 1.80</span> (유효숫자 3자리).</p>",
    },

    // ── t2-1-q044 · numeric · exam · SL · SL 2.3 · 4 marks
    "t2-1-q044": {
      // EN: <p>Let <span class="chem">f(x) = 6 ln(x + 1)</span> and <span class="chem">g(x) = x</span>, for <span class="chem">0 &lt;= x &lt;= 12</span>. On this interval the graph of <span class="chem">f</span> lies on or above the graph of <span class="chem">g</span>. Find the greatest vertical distance between the two graphs. Give your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">0 &lt;= x &lt;= 12</span>에서 <span class=\"chem\">f(x) = 6 ln(x + 1)</span>, <span class=\"chem\">g(x) = x</span>라 하자. 이 구간에서 <span class=\"chem\">f</span>의 그래프는 <span class=\"chem\">g</span>의 그래프보다 위에 있거나 만난다. 두 그래프 사이의 수직 거리의 최댓값을 구하시오 (Find). 답은 유효숫자 3자리로 쓰시오.</p>",
      hints: [
        // EN: Decode: the vertical distance at a given <span class="chem">x</span> is <span class="chem">f(x) - g(x)</span>. Graph the difference function <span class="chem">d(x) = 6 ln(x + 1) - x</span> and find its maximum.
        "해석: 주어진 <span class=\"chem\">x</span>에서의 수직 거리는 <span class=\"chem\">f(x) - g(x)</span>예요. 차의 함수 <span class=\"chem\">d(x) = 6 ln(x + 1) - x</span>의 그래프를 그리고 최댓값을 구하세요.",
        // EN: Remember to check the end points too, not only the turning point.
        "극점뿐 아니라 끝점도 꼭 확인하세요.",
      ],
      // EN: <p>Decode: the vertical distance is the difference <span class="chem">d(x) = f(x) - g(x) = 6 ln(x + 1) - x</span>. The GDC maximum tool gives a maximum at <span class="chem">x = 5</span>, with <span class="chem">d(5) = 6 ln 6 - 5 ≈ 5.7506</span>. The end points give <span class="chem">d(0) = 0</span> and <span class="chem">d(12) ≈ 3.39</span>, which are smaller. The greatest vertical distance is <span class="chem">5.75</span> (3 s.f.).</p>
      solution: "<p>해석: 수직 거리는 차 <span class=\"chem\">d(x) = f(x) - g(x) = 6 ln(x + 1) - x</span>예요. GDC의 maximum 기능으로 <span class=\"chem\">x = 5</span>에서 최대이고, <span class=\"chem\">d(5) = 6 ln 6 - 5 ≈ 5.7506</span>이에요. 끝점에서는 <span class=\"chem\">d(0) = 0</span>, <span class=\"chem\">d(12) ≈ 3.39</span>로 더 작아요. 수직 거리의 최댓값은 <span class=\"chem\">5.75</span> (유효숫자 3자리)예요.</p>",
    },

    // ── t2-1-q045 · short · exam · SL · SL 2.2, 2.4, 2.5 · 7 marks
    "t2-1-q045": {
      // EN: <p>Let <span class="chem">f(x) = 3 + 2 ln(x - 1)</span> for <span class="chem">x &gt; 1</span>.<br>(a) Find an expression for <span class="chem">f^{-1}(x)</span>. <strong>[3 marks]</strong><br>(b) Write down the range of <span class="chem">f^{-1}</span>. <strong>[1 mark]</strong><br>(c) The graphs of <span class="chem">y = f(x)</span> and <span class="chem">y = f^{-1}(x)</span> intersect at two points. Find the coordinates of both points. <strong>[3 marks]</strong></p>
      stem: "<p><span class=\"chem\">x &gt; 1</span>에서 <span class=\"chem\">f(x) = 3 + 2 ln(x - 1)</span>이라 하자.<br>(a) <span class=\"chem\">f^{-1}(x)</span>의 식을 구하시오 (Find). <strong>[3 marks]</strong><br>(b) <span class=\"chem\">f^{-1}</span>의 치역을 쓰시오 (Write down). <strong>[1 mark]</strong><br>(c) <span class=\"chem\">y = f(x)</span>와 <span class=\"chem\">y = f^{-1}(x)</span>의 그래프는 두 점에서 만난다. 두 점의 좌표를 모두 구하시오. <strong>[3 marks]</strong></p>",
      hints: [
        // EN: For (a), swap <span class="chem">x</span> and <span class="chem">y</span>, isolate the logarithm and exponentiate.
        "(a)에서는 <span class=\"chem\">x</span>와 <span class=\"chem\">y</span>를 바꾸고, 로그를 따로 떼어 낸 뒤 지수를 취하세요.",
        // EN: The range of <span class="chem">f^{-1}</span> is the domain of <span class="chem">f</span>.
        "<span class=\"chem\">f^{-1}</span>의 치역은 <span class=\"chem\">f</span>의 정의역이에요.",
        // EN: For an increasing function, the graphs of <span class="chem">f</span> and <span class="chem">f^{-1}</span> meet on the line <span class="chem">y = x</span>. Graph <span class="chem">y = 3 + 2 ln(x - 1)</span> and <span class="chem">y = x</span>.
        "증가함수에서는 <span class=\"chem\">f</span>와 <span class=\"chem\">f^{-1}</span>의 그래프가 직선 <span class=\"chem\">y = x</span> 위에서 만나요. <span class=\"chem\">y = 3 + 2 ln(x - 1)</span>과 <span class=\"chem\">y = x</span>의 그래프를 그리세요.",
      ],
      // EN: <p>(a) <span class="chem">x = 3 + 2 ln(y - 1) => ln(y - 1) = (x - 3)/2 => f^{-1}(x) = 1 + e^{(x - 3)/2}</span>, <span class="chem">x ∈ ℝ</span>.<br>(b) Range of <span class="chem">f^{-1}</span> = domain of <span class="chem">f</span>: <span class="chem">f^{-1}(x) &gt; 1</span>.<br>(c) <span class="chem">f</span> is increasing, so intersections of <span class="chem">f</span> and <span class="chem">f^{-1}</span> lie on <span class="chem">y = x</span>. GDC: <span class="chem">3 + 2 ln(x - 1) = x</span> gives <span class="chem">x ≈ 1.46392</span> and <span class="chem">x ≈ 6.35669</span>. The points are <span class="chem">(1.46, 1.46)</span> and <span class="chem">(6.36, 6.36)</span>.</p>
      solution: "<p>(a) <span class=\"chem\">x = 3 + 2 ln(y - 1) => ln(y - 1) = (x - 3)/2 => f^{-1}(x) = 1 + e^{(x - 3)/2}</span>, <span class=\"chem\">x ∈ ℝ</span>.<br>(b) <span class=\"chem\">f^{-1}</span>의 치역 = <span class=\"chem\">f</span>의 정의역: <span class=\"chem\">f^{-1}(x) &gt; 1</span>.<br>(c) <span class=\"chem\">f</span>는 증가함수이므로 <span class=\"chem\">f</span>와 <span class=\"chem\">f^{-1}</span>의 교점은 <span class=\"chem\">y = x</span> 위에 있어요. GDC: <span class=\"chem\">3 + 2 ln(x - 1) = x</span>에서 <span class=\"chem\">x ≈ 1.46392</span>와 <span class=\"chem\">x ≈ 6.35669</span>를 얻어요. 두 점은 <span class=\"chem\">(1.46, 1.46)</span>과 <span class=\"chem\">(6.36, 6.36)</span>이에요.</p>",
      // EN: <p>(a) <span class="chem">f^{-1}(x) = 1 + e^{(x - 3)/2}</span>; (b) <span class="chem">f^{-1}(x) &gt; 1</span>; (c) <span class="chem">(1.46, 1.46)</span> and <span class="chem">(6.36, 6.36)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">f^{-1}(x) = 1 + e^{(x - 3)/2}</span>; (b) <span class=\"chem\">f^{-1}(x) &gt; 1</span>; (c) <span class=\"chem\">(1.46, 1.46)</span>과 <span class=\"chem\">(6.36, 6.36)</span>.</p>",
      markscheme: [
        // EN: M1: Swaps x and y: x = 3 + 2 ln(y − 1), so ln(y − 1) = (x − 3)/2.
        "M1: x와 y를 바꿈: x = 3 + 2 ln(y − 1), 따라서 ln(y − 1) = (x − 3)/2.",
        // EN: M1: Takes the exponential: y − 1 = e^{(x − 3)/2}.
        "M1: 지수를 취함: y − 1 = e^{(x − 3)/2}.",
        // EN: A1: f⁻¹(x) = 1 + e^{(x − 3)/2}.
        "A1: f⁻¹(x) = 1 + e^{(x − 3)/2}.",
        // EN: A1: Range of f⁻¹ is f⁻¹(x) > 1 (the domain of f).
        "A1: f⁻¹의 치역은 f⁻¹(x) > 1 (f의 정의역).",
        // EN: R1: Since f is increasing, the intersections lie on y = x, so solve 3 + 2 ln(x − 1) = x (or graph f and f⁻¹ on the GDC).
        "R1: f가 증가함수이므로 교점은 y = x 위에 있음, 따라서 3 + 2 ln(x − 1) = x를 풂 (또는 GDC로 f와 f⁻¹의 그래프를 그림).",
        // EN: A1: (1.46, 1.46).
        "A1: (1.46, 1.46).",
        // EN: A1: (6.36, 6.36).
        "A1: (6.36, 6.36).",
      ],
    },

    // ── t2-1-q046 · numeric · exam · SL · SL 2.2 · 4 marks
    "t2-1-q046": {
      // EN: <p>The largest possible domain of <span class="chem">f(x) = sqrt(ln x - 0.1x)</span> is <span class="chem">a &lt;= x &lt;= b</span>. Find the value of <span class="chem">b</span>, giving your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">f(x) = sqrt(ln x - 0.1x)</span>의 가능한 가장 큰 정의역은 <span class=\"chem\">a &lt;= x &lt;= b</span>이다. <span class=\"chem\">b</span>의 값을 구하시오 (Find). 답은 유효숫자 3자리로 쓰시오.</p>",
      hints: [
        // EN: Decode: the domain is where the expression under the square root is not negative, so you need <span class="chem">ln x - 0.1x &gt;= 0</span>. The end points <span class="chem">a</span> and <span class="chem">b</span> are the zeros of <span class="chem">ln x - 0.1x</span>.
        "해석: 정의역은 제곱근 안의 식이 음수가 아닌 곳이므로 <span class=\"chem\">ln x - 0.1x &gt;= 0</span>이어야 해요. 끝점 <span class=\"chem\">a</span>와 <span class=\"chem\">b</span>는 <span class=\"chem\">ln x - 0.1x</span>의 영점이에요.",
        // EN: Graph <span class="chem">y = ln x - 0.1x</span>. The second zero is far to the right, so use a window up to about <span class="chem">x = 50</span>.
        "<span class=\"chem\">y = ln x - 0.1x</span>의 그래프를 그리세요. 두 번째 영점은 오른쪽으로 멀리 있으므로 대략 <span class=\"chem\">x = 50</span>까지 보이는 화면 범위를 이용하세요.",
      ],
      // EN: <p>Decode: we need <span class="chem">ln x - 0.1x &gt;= 0</span>. The GDC graph of <span class="chem">y = ln x - 0.1x</span> is above the <span class="chem">x</span>-axis between its two zeros, <span class="chem">x ≈ 1.12</span> and <span class="chem">x ≈ 35.7715</span>. So the domain is <span class="chem">1.12 &lt;= x &lt;= 35.8</span>, and <span class="chem">b ≈ 35.8</span> (3 s.f.).</p>
      solution: "<p>해석: <span class=\"chem\">ln x - 0.1x &gt;= 0</span>이어야 해요. GDC로 그린 <span class=\"chem\">y = ln x - 0.1x</span>의 그래프는 두 영점 <span class=\"chem\">x ≈ 1.12</span>와 <span class=\"chem\">x ≈ 35.7715</span> 사이에서 <span class=\"chem\">x</span>축보다 위에 있어요. 따라서 정의역은 <span class=\"chem\">1.12 &lt;= x &lt;= 35.8</span>이고, <span class=\"chem\">b ≈ 35.8</span> (유효숫자 3자리)예요.</p>",
    },

    // ── t2-1-q047 · short · exam · SL · SL 2.2, 2.4 · 5 marks
    "t2-1-q047": {
      // EN: <p>Let <span class="chem">f(x) = 4/(1 + e^{-x}) - 2</span>, for <span class="chem">x ∈ ℝ</span>.<br>(a) Write down the equations of the two horizontal asymptotes of the graph of <span class="chem">f</span>. <strong>[2 marks]</strong><br>(b) Hence write down the range of <span class="chem">f</span>. <strong>[1 mark]</strong><br>(c) Find the value of <span class="chem">x</span> for which <span class="chem">f(x) = 1.5</span>. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">x ∈ ℝ</span>에서 <span class=\"chem\">f(x) = 4/(1 + e^{-x}) - 2</span>라 하자.<br>(a) <span class=\"chem\">f</span>의 그래프의 두 수평점근선의 방정식을 쓰시오 (Write down). <strong>[2 marks]</strong><br>(b) 이를 이용하여 (Hence) <span class=\"chem\">f</span>의 치역을 쓰시오. <strong>[1 mark]</strong><br>(c) <span class=\"chem\">f(x) = 1.5</span>를 만족시키는 <span class=\"chem\">x</span>의 값을 구하시오 (Find). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Use the GDC table for large positive and large negative <span class="chem">x</span>, or think about what <span class="chem">e^{-x}</span> does at each end.
        "GDC의 표 (table)로 절댓값이 큰 양수와 음수 <span class=\"chem\">x</span>를 확인하거나, 양 끝에서 <span class=\"chem\">e^{-x}</span>가 어떻게 되는지 생각해 보세요.",
        // EN: The graph approaches both asymptotes but never reaches them, so neither bound of the range is included.
        "그래프는 두 점근선에 가까워지지만 절대 도달하지 않으므로, 치역의 양쪽 경계는 모두 포함되지 않아요.",
        // EN: For (c), intersect <span class="chem">y = f(x)</span> with <span class="chem">y = 1.5</span>.
        "(c)에서는 <span class=\"chem\">y = f(x)</span>와 <span class=\"chem\">y = 1.5</span>의 교점을 구하세요.",
      ],
      // EN: <p>(a) As <span class="chem">x -&gt; infty</span>, <span class="chem">e^{-x} -&gt; 0</span>, so <span class="chem">f(x) -&gt; 4 - 2 = 2</span>. As <span class="chem">x -&gt; -infty</span>, <span class="chem">e^{-x} -&gt; infty</span>, so <span class="chem">f(x) -&gt; -2</span>. Asymptotes <span class="chem">y = 2</span> and <span class="chem">y = -2</span>.<br>(b) <span class="chem">f</span> is increasing and never reaches either asymptote: <span class="chem">-2 &lt; f(x) &lt; 2</span>.<br>(c) <span class="chem">4/(1 + e^{-x}) = 3.5 => 1 + e^{-x} = 8/7 => e^{-x} = 1/7 => x = ln 7 ≈ 1.95</span>.</p>
      solution: "<p>(a) <span class=\"chem\">x -&gt; infty</span>일 때 <span class=\"chem\">e^{-x} -&gt; 0</span>이므로 <span class=\"chem\">f(x) -&gt; 4 - 2 = 2</span>예요. <span class=\"chem\">x -&gt; -infty</span>일 때 <span class=\"chem\">e^{-x} -&gt; infty</span>이므로 <span class=\"chem\">f(x) -&gt; -2</span>예요. 점근선은 <span class=\"chem\">y = 2</span>와 <span class=\"chem\">y = -2</span>예요.<br>(b) <span class=\"chem\">f</span>는 증가함수이고 어느 점근선에도 도달하지 않아요: <span class=\"chem\">-2 &lt; f(x) &lt; 2</span>.<br>(c) <span class=\"chem\">4/(1 + e^{-x}) = 3.5 => 1 + e^{-x} = 8/7 => e^{-x} = 1/7 => x = ln 7 ≈ 1.95</span>.</p>",
      // EN: <p>(a) <span class="chem">y = 2</span> and <span class="chem">y = -2</span>; (b) <span class="chem">-2 &lt; f(x) &lt; 2</span>; (c) <span class="chem">x = ln 7 ≈ 1.95</span>.</p>
      answer: "<p>(a) <span class=\"chem\">y = 2</span>와 <span class=\"chem\">y = -2</span>; (b) <span class=\"chem\">-2 &lt; f(x) &lt; 2</span>; (c) <span class=\"chem\">x = ln 7 ≈ 1.95</span>.</p>",
      markscheme: [
        // EN: A1: y = 2 (as x → ∞, e^{−x} → 0).
        "A1: y = 2 (x → ∞일 때 e^{−x} → 0).",
        // EN: A1: y = −2 (as x → −∞, e^{−x} → ∞).
        "A1: y = −2 (x → −∞일 때 e^{−x} → ∞).",
        // EN: A1: Range −2 < f(x) < 2 (both bounds excluded).
        "A1: 치역 −2 < f(x) < 2 (양쪽 경계 모두 제외).",
        // EN: M1: Solves 4/(1 + e^{−x}) − 2 = 1.5 with the GDC, or rearranges to e^{−x} = 1/7.
        "M1: GDC로 4/(1 + e^{−x}) − 2 = 1.5를 풀거나, e^{−x} = 1/7로 정리함.",
        // EN: A1: x = 1.95 (= ln 7).
        "A1: x = 1.95 (= ln 7).",
      ],
    },

    // ── t2-1-q048 · numeric · challenge · SL · SL 2.2, 2.5 · 5 marks
    "t2-1-q048": {
      // EN: <p>A spherical balloon is being inflated. Its radius, in cm, <span class="chem">t</span> seconds after inflation starts is <span class="chem">r(t) = 2 + 0.8 ln(t + 1)</span>. The volume of a sphere of radius <span class="chem">r</span> is <span class="chem">V(r) = (4/3)pi r^3</span>. The balloon bursts when its volume first reaches <span class="chem">300</span> <span class="unit">cm3</span>. Find how many seconds after inflation starts the balloon bursts. Give your answer to 3 significant figures.</p>
      stem: "<p>구 모양의 풍선에 바람을 넣고 있다. 바람을 넣기 시작한 지 <span class=\"chem\">t</span>초 후의 반지름(cm)은 <span class=\"chem\">r(t) = 2 + 0.8 ln(t + 1)</span>이다. 반지름이 <span class=\"chem\">r</span>인 구의 부피는 <span class=\"chem\">V(r) = (4/3)pi r^3</span>이다. 풍선은 부피가 처음으로 <span class=\"chem\">300</span> <span class=\"unit\">cm3</span>에 도달할 때 터진다. 바람을 넣기 시작한 지 몇 초 후에 풍선이 터지는지 구하시오 (Find). 답은 유효숫자 3자리로 쓰시오.</p>",
      hints: [
        // EN: Decode: the volume as a function of time is the composite <span class="chem">(V ∘ r)(t)</span>. "First reaches <span class="chem">300</span>" means solve <span class="chem">V(r(t)) = 300</span> and take the smallest positive <span class="chem">t</span>.
        "해석: 시간에 대한 부피는 합성함수 <span class=\"chem\">(V ∘ r)(t)</span>예요. \"처음으로 <span class=\"chem\">300</span>에 도달\"한다는 것은 <span class=\"chem\">V(r(t)) = 300</span>을 풀어 가장 작은 양의 <span class=\"chem\">t</span>를 택한다는 뜻이에요.",
        // EN: Work backwards: first find the radius at which <span class="chem">V = 300</span>, then the time at which <span class="chem">r(t)</span> equals that radius.
        "거꾸로 풀어 보세요: 먼저 <span class=\"chem\">V = 300</span>이 되는 반지름을 구하고, 그다음 <span class=\"chem\">r(t)</span>가 그 반지름이 되는 시각을 구하세요.",
        // EN: <span class="chem">(4/3)pi r^3 = 300</span> gives <span class="chem">r ≈ 4.1528</span> cm.
        "<span class=\"chem\">(4/3)pi r^3 = 300</span>에서 <span class=\"chem\">r ≈ 4.1528</span> cm예요.",
      ],
      // EN: <p>Decode: we need the time when <span class="chem">(V ∘ r)(t) = 300</span>. From <span class="chem">(4/3)pi r^3 = 300</span>: <span class="chem">r = (225/pi)^{1/3} ≈ 4.15283</span>. Then <span class="chem">2 + 0.8 ln(t + 1) = 4.15283 => ln(t + 1) ≈ 2.69104 => t ≈ e^{2.69104} - 1 ≈ 13.747</span>. Since <span class="chem">r</span> (and so <span class="chem">V</span>) is increasing, this is the first time. The balloon bursts after about <span class="chem">13.7</span> seconds. (Graphing <span class="chem">y = (4/3)pi(2 + 0.8 ln(x + 1))^3</span> against <span class="chem">y = 300</span> gives the same value.)</p>
      solution: "<p>해석: <span class=\"chem\">(V ∘ r)(t) = 300</span>이 되는 시각이 필요해요. <span class=\"chem\">(4/3)pi r^3 = 300</span>에서 <span class=\"chem\">r = (225/pi)^{1/3} ≈ 4.15283</span>이에요. 그러면 <span class=\"chem\">2 + 0.8 ln(t + 1) = 4.15283 => ln(t + 1) ≈ 2.69104 => t ≈ e^{2.69104} - 1 ≈ 13.747</span>이에요. <span class=\"chem\">r</span> (따라서 <span class=\"chem\">V</span>)는 증가하므로 이것이 처음 도달하는 시각이에요. 풍선은 약 <span class=\"chem\">13.7</span>초 후에 터져요. (<span class=\"chem\">y = (4/3)pi(2 + 0.8 ln(x + 1))^3</span>과 <span class=\"chem\">y = 300</span>의 그래프를 그려도 같은 값을 얻어요.)</p>",
    },

    // ── t2-1-q049 · numeric · challenge · SL · SL 2.1 · 6 marks
    "t2-1-q049": {
      // EN: <p>On a coastal map with axes in kilometres, a ship sails in a straight line from the harbour <span class="chem">H(0, 1)</span> through the buoy <span class="chem">B(10, 4)</span> and beyond. A lighthouse stands at <span class="chem">L(4.2, 7.5)</span>. Find the shortest distance between the lighthouse and the path of the ship. Give your answer in kilometres to 3 significant figures.</p>
      stem: "<p>좌표축의 단위가 km인 해안 지도에서, 배가 항구 <span class=\"chem\">H(0, 1)</span>에서 출발해 부표 <span class=\"chem\">B(10, 4)</span>를 지나 그 너머까지 직선으로 항해한다. 등대는 <span class=\"chem\">L(4.2, 7.5)</span>에 있다. 등대와 배의 항로 사이의 최단 거리를 구하시오 (Find). 답은 km 단위로, 유효숫자 3자리로 쓰시오.</p>",
      hints: [
        // EN: Decode: the shortest distance from a point to a line is measured along the perpendicular. Find the foot of the perpendicular <span class="chem">F</span> from <span class="chem">L</span> to the line <span class="chem">HB</span>, then the length <span class="chem">LF</span>.
        "해석: 점과 직선 사이의 최단 거리는 수선을 따라 재요. <span class=\"chem\">L</span>에서 직선 <span class=\"chem\">HB</span>에 내린 수선의 발 <span class=\"chem\">F</span>를 구한 뒤 길이 <span class=\"chem\">LF</span>를 구하세요.",
        // EN: Line <span class="chem">HB</span>: gradient <span class="chem">0.3</span>, so <span class="chem">y = 0.3x + 1</span>. The perpendicular through <span class="chem">L</span> has gradient <span class="chem">-10/3</span>.
        "직선 <span class=\"chem\">HB</span>: 기울기가 <span class=\"chem\">0.3</span>이므로 <span class=\"chem\">y = 0.3x + 1</span>이에요. <span class=\"chem\">L</span>을 지나는 수선의 기울기는 <span class=\"chem\">-10/3</span>이에요.",
        // EN: Solve the two line equations simultaneously (GDC) to get <span class="chem">F</span>, then use the distance formula.
        "두 직선의 방정식을 연립해 (GDC로) 풀어 <span class=\"chem\">F</span>를 구한 뒤 두 점 사이의 거리 공식을 이용하세요.",
      ],
      // EN: <p>Decode: "shortest distance to a path" means the perpendicular distance. Line <span class="chem">HB</span>: <span class="chem">m = 3/10</span>, so <span class="chem">y = 0.3x + 1</span>. Perpendicular through <span class="chem">L</span>: <span class="chem">y - 7.5 = -(10/3)(x - 4.2)</span>. Solving simultaneously: <span class="chem">F ≈ (5.6422, 2.6927)</span>. Then <span class="chem">LF = sqrt((5.6422 - 4.2)^2 + (2.6927 - 7.5)^2) ≈ sqrt(2.0800 + 23.1101) ≈ 5.0190</span>. The shortest distance is <span class="chem">5.02</span> km (3 s.f.). Because <span class="chem">F</span> has <span class="chem">x &gt; 0</span>, it lies on the path of the ship after it leaves the harbour.</p>
      solution: "<p>해석: \"항로까지의 최단 거리\"는 수직 거리를 뜻해요. 직선 <span class=\"chem\">HB</span>: <span class=\"chem\">m = 3/10</span>이므로 <span class=\"chem\">y = 0.3x + 1</span>. <span class=\"chem\">L</span>을 지나는 수선: <span class=\"chem\">y - 7.5 = -(10/3)(x - 4.2)</span>. 연립해서 풀면 <span class=\"chem\">F ≈ (5.6422, 2.6927)</span>이에요. 그러면 <span class=\"chem\">LF = sqrt((5.6422 - 4.2)^2 + (2.6927 - 7.5)^2) ≈ sqrt(2.0800 + 23.1101) ≈ 5.0190</span>이에요. 최단 거리는 <span class=\"chem\">5.02</span> km (유효숫자 3자리)예요. <span class=\"chem\">F</span>는 <span class=\"chem\">x &gt; 0</span>이므로 배가 항구를 떠난 뒤의 항로 위에 있어요.</p>",
    },

    // ── t2-1-q050 · short · challenge · SL · SL 2.2, 2.3, 2.4 · 7 marks
    "t2-1-q050": {
      // EN: <p>After a patient takes a tablet, the concentration of the drug in the blood, in mg per litre, is modelled by <span class="chem">C(t) = 10t e^{-0.5t}</span>, where <span class="chem">t</span> is the time in hours, <span class="chem">0 &lt;= t &lt;= 12</span>. The drug is effective while its concentration is at least <span class="chem">2</span> mg per litre.<br>(a) Sketch the graph of <span class="chem">C</span>, labelling the coordinates of the maximum point and of the end point at <span class="chem">t = 12</span>. <strong>[3 marks]</strong><br>(b) Find the length of time for which the drug is effective. <strong>[4 marks]</strong></p>
      stem: "<p>환자가 알약을 먹은 뒤 혈액 속 약물의 농도(리터당 mg)는 <span class=\"chem\">C(t) = 10t e^{-0.5t}</span>로 모델링된다. 단, <span class=\"chem\">t</span>는 시간(시간)이고 <span class=\"chem\">0 &lt;= t &lt;= 12</span>이다. 약물은 농도가 리터당 <span class=\"chem\">2</span> mg 이상인 동안 효과가 있다.<br>(a) <span class=\"chem\">C</span>의 그래프의 개형을 그리고 (Sketch), 극대점과 <span class=\"chem\">t = 12</span>인 끝점의 좌표를 표시하시오. <strong>[3 marks]</strong><br>(b) 약물이 효과가 있는 시간의 길이를 구하시오 (Find). <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: "effective while at least 2" means you need the time interval where the curve is on or above the line <span class="chem">C = 2</span>. The question asks for the length of that interval, not the times themselves.
        "해석: \"2 이상인 동안 효과\"란 곡선이 직선 <span class=\"chem\">C = 2</span>보다 위에 있거나 만나는 시간 구간을 구해야 한다는 뜻이에요. 묻는 것은 그 구간의 길이이지 시각 자체가 아니에요.",
        // EN: Graph <span class="chem">Y_1 = 10x e^{-0.5x}</span> and <span class="chem">Y_2 = 2</span> for <span class="chem">0 &lt;= x &lt;= 12</span>. There are two intersections.
        "<span class=\"chem\">0 &lt;= x &lt;= 12</span>에서 <span class=\"chem\">Y_1 = 10x e^{-0.5x}</span>와 <span class=\"chem\">Y_2 = 2</span>의 그래프를 그리세요. 교점이 두 개 있어요.",
        // EN: Subtract the two <span class="chem">t</span>-values using full GDC accuracy, then round.
        "두 <span class=\"chem\">t</span> 값을 GDC의 전체 정밀도로 뺀 뒤에 반올림하세요.",
      ],
      // EN: <p>Decode: we need the length of the interval on which <span class="chem">C(t) &gt;= 2</span>.<br>(a) GDC: maximum at <span class="chem">(2, 20/e) ≈ (2, 7.36)</span>; <span class="chem">C(12) = 120e^{-6} ≈ 0.297</span>. The sketch rises from the origin to the maximum and then decays towards the <span class="chem">t</span>-axis.<br>(b) Intersections of <span class="chem">y = C(t)</span> and <span class="chem">y = 2</span>: <span class="chem">t_1 ≈ 0.22367</span> and <span class="chem">t_2 ≈ 7.15430</span>. The curve is above the line between them, so the drug is effective for <span class="chem">7.15430 - 0.22367 ≈ 6.93</span> hours.</p>
      solution: "<p>해석: <span class=\"chem\">C(t) &gt;= 2</span>인 구간의 길이가 필요해요.<br>(a) GDC: 극대점은 <span class=\"chem\">(2, 20/e) ≈ (2, 7.36)</span>; <span class=\"chem\">C(12) = 120e^{-6} ≈ 0.297</span>. 개형은 원점에서 극대점까지 증가한 뒤 <span class=\"chem\">t</span>축을 향해 감소해요.<br>(b) <span class=\"chem\">y = C(t)</span>와 <span class=\"chem\">y = 2</span>의 교점: <span class=\"chem\">t_1 ≈ 0.22367</span>, <span class=\"chem\">t_2 ≈ 7.15430</span>. 그 사이에서는 곡선이 직선보다 위에 있으므로 약물은 <span class=\"chem\">7.15430 - 0.22367 ≈ 6.93</span>시간 동안 효과가 있어요.</p>",
      // EN: <p>(a) A curve from <span class="chem">(0, 0)</span> rising to a maximum <span class="chem">(2, 7.36)</span>, then decreasing to <span class="chem">(12, 0.297)</span>; (b) effective for <span class="chem">0.224 &lt;= t &lt;= 7.15</span>, a length of <span class="chem">6.93</span> hours.</p>
      answer: "<p>(a) <span class=\"chem\">(0, 0)</span>에서 극대점 <span class=\"chem\">(2, 7.36)</span>까지 증가한 뒤 <span class=\"chem\">(12, 0.297)</span>까지 감소하는 곡선; (b) <span class=\"chem\">0.224 &lt;= t &lt;= 7.15</span>에서 효과가 있으며, 그 길이는 <span class=\"chem\">6.93</span>시간.</p>",
      markscheme: [
        // EN: A1: Correct shape: starts at the origin, single maximum, decreasing towards (but above) the t-axis, only for 0 ≤ t ≤ 12.
        "A1: 올바른 모양: 원점에서 시작하고, 극대점이 하나이며, t축을 향해 (t축보다 위에서) 감소하고, 0 ≤ t ≤ 12에서만 그림.",
        // EN: A1: Maximum labelled (2, 7.36).
        "A1: 극대점 (2, 7.36)을 표시함.",
        // EN: A1: End point labelled (12, 0.297).
        "A1: 끝점 (12, 0.297)을 표시함.",
        // EN: M1: Interprets "effective" as C(t) ≥ 2 and draws or uses the line C = 2.
        "M1: \"효과가 있다\"를 C(t) ≥ 2로 해석하고 직선 C = 2를 그리거나 이용함.",
        // EN: A1: t = 0.224 (first intersection).
        "A1: t = 0.224 (첫 번째 교점).",
        // EN: A1: t = 7.15 (second intersection).
        "A1: t = 7.15 (두 번째 교점).",
        // EN: A1: Length of time 7.154 − 0.224 = 6.93 hours.
        "A1: 시간의 길이 7.154 − 0.224 = 6.93시간.",
      ],
    },

    // ── t2-1-q051 · numeric · challenge · SL · SL 2.4 · 5 marks
    "t2-1-q051": {
      // EN: <p>Consider the equation <span class="chem">x^2 e^{-x} = k</span>, where <span class="chem">k</span> is a positive constant and <span class="chem">x ∈ ℝ</span>. There is exactly one value of <span class="chem">k</span> for which the equation has exactly two solutions. Find this value of <span class="chem">k</span>, giving your answer to 3 significant figures.</p>
      stem: "<p>방정식 <span class=\"chem\">x^2 e^{-x} = k</span>를 생각하자. 단, <span class=\"chem\">k</span>는 양의 상수이고 <span class=\"chem\">x ∈ ℝ</span>이다. 이 방정식이 정확히 두 개의 해를 갖도록 하는 <span class=\"chem\">k</span>의 값은 정확히 하나 있다. 이 <span class=\"chem\">k</span>의 값을 구하시오 (Find). 답은 유효숫자 3자리로 쓰시오.</p>",
      hints: [
        // EN: Decode: the solutions are the intersections of the curve <span class="chem">y = x^2 e^{-x}</span> with the horizontal line <span class="chem">y = k</span>. Count intersections as the line moves up.
        "해석: 해는 곡선 <span class=\"chem\">y = x^2 e^{-x}</span>와 수평선 <span class=\"chem\">y = k</span>의 교점이에요. 수평선을 위로 움직이면서 교점의 개수를 세어 보세요.",
        // EN: Graph <span class="chem">y = x^2 e^{-x}</span>. For <span class="chem">x &lt; 0</span> it is decreasing; for <span class="chem">x &gt; 0</span> it rises to a local maximum and falls towards <span class="chem">0</span>.
        "<span class=\"chem\">y = x^2 e^{-x}</span>의 그래프를 그리세요. <span class=\"chem\">x &lt; 0</span>에서는 감소하고, <span class=\"chem\">x &gt; 0</span>에서는 극대점까지 증가한 뒤 <span class=\"chem\">0</span>을 향해 감소해요.",
        // EN: A horizontal line meets the curve exactly twice when it touches a turning point.
        "수평선이 곡선과 정확히 두 번 만나는 것은 극점에 접할 때예요.",
      ],
      // EN: <p>Decode: count the intersections of <span class="chem">y = x^2 e^{-x}</span> with the horizontal line <span class="chem">y = k</span>, <span class="chem">k &gt; 0</span>. The GDC shows a local minimum at <span class="chem">(0, 0)</span> and a local maximum at <span class="chem">(2, 0.541)</span>; the curve tends to <span class="chem">infty</span> as <span class="chem">x -&gt; -infty</span> and to <span class="chem">0</span> as <span class="chem">x -&gt; infty</span>. For <span class="chem">0 &lt; k &lt; 0.541</span> there are three intersections, for <span class="chem">k &gt; 0.541</span> there is one, and for <span class="chem">k = 4e^{-2} ≈ 0.5413</span> the line touches the maximum, giving exactly two. So <span class="chem">k ≈ 0.541</span>.</p>
      solution: "<p>해석: <span class=\"chem\">y = x^2 e^{-x}</span>와 수평선 <span class=\"chem\">y = k</span> (<span class=\"chem\">k &gt; 0</span>)의 교점의 개수를 세요. GDC에서 극소점은 <span class=\"chem\">(0, 0)</span>, 극대점은 <span class=\"chem\">(2, 0.541)</span>이고, 곡선은 <span class=\"chem\">x -&gt; -infty</span>일 때 <span class=\"chem\">infty</span>로, <span class=\"chem\">x -&gt; infty</span>일 때 <span class=\"chem\">0</span>으로 가요. <span class=\"chem\">0 &lt; k &lt; 0.541</span>이면 교점이 세 개, <span class=\"chem\">k &gt; 0.541</span>이면 한 개이고, <span class=\"chem\">k = 4e^{-2} ≈ 0.5413</span>이면 수평선이 극대점에 접해서 정확히 두 개예요. 따라서 <span class=\"chem\">k ≈ 0.541</span>이에요.</p>",
    },

    // ── t2-1-q052 · short · challenge · SL · SL 2.2, 2.5 · 7 marks
    "t2-1-q052": {
      // EN: <p>Let <span class="chem">f(x) = x^2 - 4x + 1</span> and <span class="chem">g(x) = e^{0.5x}</span>, for <span class="chem">x ∈ ℝ</span>.<br>(a) Write down an expression for <span class="chem">(f ∘ g)(x)</span>. <strong>[1 mark]</strong><br>(b) Solve <span class="chem">(f ∘ g)(x) = 0</span>, giving your answers to 3 significant figures. <strong>[2 marks]</strong><br>(c) Find the range of <span class="chem">f ∘ g</span>. <strong>[2 marks]</strong><br>(d) Find the range of <span class="chem">g ∘ f</span>. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">x ∈ ℝ</span>에서 <span class=\"chem\">f(x) = x^2 - 4x + 1</span>, <span class=\"chem\">g(x) = e^{0.5x}</span>라 하자.<br>(a) <span class=\"chem\">(f ∘ g)(x)</span>의 식을 쓰시오 (Write down). <strong>[1 mark]</strong><br>(b) <span class=\"chem\">(f ∘ g)(x) = 0</span>을 푸시오 (Solve). 답은 유효숫자 3자리로 쓰시오. <strong>[2 marks]</strong><br>(c) <span class=\"chem\">f ∘ g</span>의 치역을 구하시오 (Find). <strong>[2 marks]</strong><br>(d) <span class=\"chem\">g ∘ f</span>의 치역을 구하시오. <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: the range of a composite depends on which values the inner function can feed into the outer one. For <span class="chem">f ∘ g</span>, the inner outputs are <span class="chem">u = e^{0.5x} &gt; 0</span>; for <span class="chem">g ∘ f</span>, they are the outputs of the quadratic.
        "해석: 합성함수의 치역은 안쪽 함수가 바깥쪽 함수에 어떤 값들을 넣어 줄 수 있는지에 따라 달라져요. <span class=\"chem\">f ∘ g</span>에서 안쪽 출력은 <span class=\"chem\">u = e^{0.5x} &gt; 0</span>이고, <span class=\"chem\">g ∘ f</span>에서는 이차함수의 출력이에요.",
        // EN: Complete the square: <span class="chem">f(u) = (u - 2)^2 - 3</span>. Is <span class="chem">u = 2</span> one of the values <span class="chem">e^{0.5x}</span> can take?
        "완전제곱식으로 변형하세요: <span class=\"chem\">f(u) = (u - 2)^2 - 3</span>. <span class=\"chem\">u = 2</span>는 <span class=\"chem\">e^{0.5x}</span>가 가질 수 있는 값인가요?",
        // EN: Check each range on the GDC by graphing the composite and finding its minimum.
        "GDC로 합성함수의 그래프를 그리고 최솟값을 구해 각 치역을 확인하세요.",
      ],
      // EN: <p>Decode: work out what the inner function feeds in, then apply the outer function to that set.<br>(a) <span class="chem">(f ∘ g)(x) = e^x - 4e^{0.5x} + 1</span>.<br>(b) GDC zeros: <span class="chem">x ≈ ±2.63</span> (exactly <span class="chem">x = 2 ln(2 +- sqrt(3))</span>, and these are negatives of each other because <span class="chem">(2 + sqrt(3))(2 - sqrt(3)) = 1</span>).<br>(c) <span class="chem">f(u) = (u - 2)^2 - 3</span> with <span class="chem">u = e^{0.5x} &gt; 0</span>. The value <span class="chem">u = 2</span> is attained (at <span class="chem">x = 2 ln 2</span>), so the minimum <span class="chem">-3</span> is reached and the range is <span class="chem">(f ∘ g)(x) &gt;= -3</span>.<br>(d) <span class="chem">f(x) &gt;= -3</span> for all real <span class="chem">x</span>, and <span class="chem">g</span> is increasing, so <span class="chem">(g ∘ f)(x) &gt;= e^{-1.5} ≈ 0.223</span>.</p>
      solution: "<p>해석: 안쪽 함수가 넣어 주는 값들을 먼저 구하고, 그 집합에 바깥쪽 함수를 적용하세요.<br>(a) <span class=\"chem\">(f ∘ g)(x) = e^x - 4e^{0.5x} + 1</span>.<br>(b) GDC로 구한 영점: <span class=\"chem\">x ≈ ±2.63</span> (정확히는 <span class=\"chem\">x = 2 ln(2 +- sqrt(3))</span>이고, <span class=\"chem\">(2 + sqrt(3))(2 - sqrt(3)) = 1</span>이므로 서로 부호만 반대인 값이에요).<br>(c) <span class=\"chem\">f(u) = (u - 2)^2 - 3</span>, <span class=\"chem\">u = e^{0.5x} &gt; 0</span>이에요. 값 <span class=\"chem\">u = 2</span>는 (<span class=\"chem\">x = 2 ln 2</span>에서) 실제로 나오므로 최솟값 <span class=\"chem\">-3</span>에 도달하고, 치역은 <span class=\"chem\">(f ∘ g)(x) &gt;= -3</span>이에요.<br>(d) 모든 실수 <span class=\"chem\">x</span>에 대해 <span class=\"chem\">f(x) &gt;= -3</span>이고 <span class=\"chem\">g</span>는 증가함수이므로 <span class=\"chem\">(g ∘ f)(x) &gt;= e^{-1.5} ≈ 0.223</span>이에요.</p>",
      // EN: <p>(a) <span class="chem">e^x - 4e^{0.5x} + 1</span>; (b) <span class="chem">x = -2.63</span> or <span class="chem">x = 2.63</span>; (c) <span class="chem">(f ∘ g)(x) &gt;= -3</span>; (d) <span class="chem">(g ∘ f)(x) &gt;= 0.223</span>.</p>
      answer: "<p>(a) <span class=\"chem\">e^x - 4e^{0.5x} + 1</span>; (b) <span class=\"chem\">x = -2.63</span> 또는 <span class=\"chem\">x = 2.63</span>; (c) <span class=\"chem\">(f ∘ g)(x) &gt;= -3</span>; (d) <span class=\"chem\">(g ∘ f)(x) &gt;= 0.223</span>.</p>",
      markscheme: [
        // EN: A1: (f ∘ g)(x) = (e^{0.5x})² − 4e^{0.5x} + 1 = e^x − 4e^{0.5x} + 1.
        "A1: (f ∘ g)(x) = (e^{0.5x})² − 4e^{0.5x} + 1 = e^x − 4e^{0.5x} + 1.",
        // EN: A1: x = −2.63 (GDC, or e^{0.5x} = 2 − √3).
        "A1: x = −2.63 (GDC, 또는 e^{0.5x} = 2 − √3).",
        // EN: A1: x = 2.63 (GDC, or e^{0.5x} = 2 + √3).
        "A1: x = 2.63 (GDC, 또는 e^{0.5x} = 2 + √3).",
        // EN: M1: Considers f on the range of g (u = e^{0.5x} > 0), where the vertex u = 2 is attained, or finds the minimum of the graph on the GDC.
        "M1: g의 치역 (u = e^{0.5x} > 0)에서 f를 생각하고 꼭짓점 u = 2가 실제로 나온다는 것을 이용하거나, GDC로 그래프의 최솟값을 구함.",
        // EN: A1: (f ∘ g)(x) ≥ −3.
        "A1: (f ∘ g)(x) ≥ −3.",
        // EN: M1: Uses the range of f, f(x) ≥ −3, and that g is increasing.
        "M1: f의 치역 f(x) ≥ −3과 g가 증가함수라는 것을 이용함.",
        // EN: A1: (g ∘ f)(x) ≥ e^{−1.5} = 0.223.
        "A1: (g ∘ f)(x) ≥ e^{−1.5} = 0.223.",
      ],
    },

    // ── t2-1-q053 · numeric · challenge · AHL · AHL 2.14 · 5 marks
    "t2-1-q053": {
      // EN: <p>Let <span class="chem">f(x) = x^3 - 3x^2 - 9x + 4</span> for <span class="chem">x &gt;= a</span>, where <span class="chem">a</span> is the smallest value for which <span class="chem">f</span> has an inverse. Find <span class="chem">f^{-1}(5)</span>, giving your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">x &gt;= a</span>에서 <span class=\"chem\">f(x) = x^3 - 3x^2 - 9x + 4</span>라 하자. 단, <span class=\"chem\">a</span>는 <span class=\"chem\">f</span>가 역함수를 갖도록 하는 가장 작은 값이다. <span class=\"chem\">f^{-1}(5)</span>를 구하시오 (Find). 답은 유효숫자 3자리로 쓰시오.</p>",
      hints: [
        // EN: Decode: there are two steps. First find the restricted domain (start at the last turning point, so that <span class="chem">f</span> is one-to-one). Then <span class="chem">f^{-1}(5)</span> is the solution of <span class="chem">f(x) = 5</span> that lies in that domain.
        "해석: 두 단계가 있어요. 먼저 제한된 정의역을 구하세요 (<span class=\"chem\">f</span>가 일대일이 되도록 마지막 극점에서 시작해요). 그다음 <span class=\"chem\">f^{-1}(5)</span>는 <span class=\"chem\">f(x) = 5</span>의 해 중 그 정의역에 있는 것이에요.",
        // EN: Use the GDC to find the turning points of <span class="chem">f</span>: they are at <span class="chem">x = -1</span> and <span class="chem">x = 3</span>. So <span class="chem">a = 3</span>.
        "GDC로 <span class=\"chem\">f</span>의 극점을 구하세요: <span class=\"chem\">x = -1</span>과 <span class=\"chem\">x = 3</span>에 있어요. 따라서 <span class=\"chem\">a = 3</span>이에요.",
        // EN: <span class="chem">f(x) = 5</span> has three real solutions. Only one of them satisfies <span class="chem">x &gt;= 3</span>.
        "<span class=\"chem\">f(x) = 5</span>는 실근이 세 개 있어요. 그중 <span class=\"chem\">x &gt;= 3</span>을 만족시키는 것은 하나뿐이에요.",
      ],
      // EN: <p>Decode: restrict the domain first, then solve on that branch only. The GDC (or <span class="chem">f'(x) = 3(x - 3)(x + 1)</span>) gives a local maximum at <span class="chem">x = -1</span> and a local minimum at <span class="chem">x = 3</span>, so <span class="chem">f</span> is one-to-one on <span class="chem">x &gt;= a</span> exactly when <span class="chem">a &gt;= 3</span>, and <span class="chem">a = 3</span>. The equation <span class="chem">x^3 - 3x^2 - 9x + 4 = 5</span> has solutions <span class="chem">x ≈ -1.77</span>, <span class="chem">-0.116</span> and <span class="chem">4.8845</span>. Only <span class="chem">4.8845</span> is in the domain <span class="chem">x &gt;= 3</span>, so <span class="chem">f^{-1}(5) ≈ 4.88</span> (3 s.f.).</p>
      solution: "<p>해석: 먼저 정의역을 제한하고, 그 가지에서만 푸세요. GDC (또는 <span class=\"chem\">f'(x) = 3(x - 3)(x + 1)</span>)에서 <span class=\"chem\">x = -1</span>에서 극대, <span class=\"chem\">x = 3</span>에서 극소이므로, <span class=\"chem\">f</span>가 <span class=\"chem\">x &gt;= a</span>에서 일대일인 것은 정확히 <span class=\"chem\">a &gt;= 3</span>일 때이고 <span class=\"chem\">a = 3</span>이에요. 방정식 <span class=\"chem\">x^3 - 3x^2 - 9x + 4 = 5</span>의 해는 <span class=\"chem\">x ≈ -1.77</span>, <span class=\"chem\">-0.116</span>, <span class=\"chem\">4.8845</span>예요. 정의역 <span class=\"chem\">x &gt;= 3</span>에 있는 것은 <span class=\"chem\">4.8845</span>뿐이므로 <span class=\"chem\">f^{-1}(5) ≈ 4.88</span> (유효숫자 3자리)이에요.</p>",
    },

    // ── t2-1-q054 · short · challenge · SL · SL 2.2, 2.4 · 7 marks
    "t2-1-q054": {
      // EN: <p>Two courier companies charge for a delivery of <span class="chem">x</span> km. Company A charges <span class="chem">A(x) = 40 + 12 sqrt(x)</span> dollars and company B charges <span class="chem">B(x) = 15 + 0.8x</span> dollars, for <span class="chem">x &gt; 0</span>.<br>(a) Find the charge of each company for a delivery of <span class="chem">100</span> km. <strong>[2 marks]</strong><br>(b) Find the distance for which both companies charge the same amount. <strong>[2 marks]</strong><br>(c) Write down the set of distances for which company A is cheaper. <strong>[1 mark]</strong><br>(d) A customer has a budget of <span class="chem">300</span> dollars and may choose either company. Find the greatest distance that can be paid for. <strong>[2 marks]</strong></p>
      stem: "<p>두 택배 회사가 <span class=\"chem\">x</span> km 배송에 요금을 받는다. 회사 A는 <span class=\"chem\">A(x) = 40 + 12 sqrt(x)</span>달러, 회사 B는 <span class=\"chem\">B(x) = 15 + 0.8x</span>달러를 받는다 (<span class=\"chem\">x &gt; 0</span>).<br>(a) <span class=\"chem\">100</span> km 배송에 대한 각 회사의 요금을 구하시오 (Find). <strong>[2 marks]</strong><br>(b) 두 회사의 요금이 같아지는 거리를 구하시오. <strong>[2 marks]</strong><br>(c) 회사 A가 더 싼 거리의 집합을 쓰시오 (Write down). <strong>[1 mark]</strong><br>(d) 한 고객의 예산은 <span class=\"chem\">300</span>달러이고 어느 회사든 고를 수 있다. 지불할 수 있는 가장 먼 거리를 구하시오. <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: each company is a function of distance. "Charge the same" is an intersection of the two graphs; "cheaper" is where one graph lies below the other.
        "해석: 각 회사의 요금은 거리의 함수예요. \"요금이 같다\"는 두 그래프의 교점이고, \"더 싸다\"는 한 그래프가 다른 그래프보다 아래에 있는 곳이에요.",
        // EN: Graph <span class="chem">Y_1 = 40 + 12 sqrt(x)</span> and <span class="chem">Y_2 = 15 + 0.8x</span> for <span class="chem">0 &lt; x &lt;= 600</span>, <span class="chem">0 &lt;= y &lt;= 500</span>.
        "<span class=\"chem\">0 &lt; x &lt;= 600</span>, <span class=\"chem\">0 &lt;= y &lt;= 500</span>에서 <span class=\"chem\">Y_1 = 40 + 12 sqrt(x)</span>와 <span class=\"chem\">Y_2 = 15 + 0.8x</span>의 그래프를 그리세요.",
        // EN: For (d), the question is asking for the input that gives an output of <span class="chem">300</span>, for whichever company allows the longer distance.
        "(d)에서 묻는 것은 출력이 <span class=\"chem\">300</span>이 되는 입력이에요. 더 먼 거리를 허용하는 회사를 기준으로 하세요.",
      ],
      // EN: <p>Decode: compare two models graphically; part (d) asks for an inverse value.<br>(a) <span class="chem">A(100) = 160</span> dollars, <span class="chem">B(100) = 95</span> dollars.<br>(b) GDC intersection of <span class="chem">y = 40 + 12 sqrt(x)</span> and <span class="chem">y = 15 + 0.8x</span>: <span class="chem">x ≈ 284.06</span>, about <span class="chem">284</span> km (both charge about <span class="chem">242</span> dollars).<br>(c) For large <span class="chem">x</span> the linear charge grows faster, so A is cheaper for <span class="chem">x &gt; 284</span>.<br>(d) <span class="chem">A(x) = 300 => sqrt(x) = 260/12 => x ≈ 469.4</span>; <span class="chem">B(x) = 300 => x = 356.25</span>. The greatest distance is about <span class="chem">469</span> km, using company A.</p>
      solution: "<p>해석: 두 모델을 그래프로 비교해요. (d)는 역함수 값을 묻고 있어요.<br>(a) <span class=\"chem\">A(100) = 160</span>달러, <span class=\"chem\">B(100) = 95</span>달러.<br>(b) GDC에서 <span class=\"chem\">y = 40 + 12 sqrt(x)</span>와 <span class=\"chem\">y = 15 + 0.8x</span>의 교점: <span class=\"chem\">x ≈ 284.06</span>, 약 <span class=\"chem\">284</span> km (두 회사 모두 약 <span class=\"chem\">242</span>달러).<br>(c) <span class=\"chem\">x</span>가 크면 일차식 요금이 더 빨리 증가하므로 A는 <span class=\"chem\">x &gt; 284</span>에서 더 싸요.<br>(d) <span class=\"chem\">A(x) = 300 => sqrt(x) = 260/12 => x ≈ 469.4</span>; <span class=\"chem\">B(x) = 300 => x = 356.25</span>. 가장 먼 거리는 회사 A를 이용해 약 <span class=\"chem\">469</span> km예요.</p>",
      // EN: <p>(a) A: <span class="chem">160</span> dollars, B: <span class="chem">95</span> dollars; (b) <span class="chem">284</span> km; (c) <span class="chem">x &gt; 284</span>; (d) <span class="chem">469</span> km (with company A).</p>
      answer: "<p>(a) A: <span class=\"chem\">160</span>달러, B: <span class=\"chem\">95</span>달러; (b) <span class=\"chem\">284</span> km; (c) <span class=\"chem\">x &gt; 284</span>; (d) <span class=\"chem\">469</span> km (회사 A 이용).</p>",
      markscheme: [
        // EN: A1: A(100) = 40 + 12(10) = 160 dollars.
        "A1: A(100) = 40 + 12(10) = 160달러.",
        // EN: A1: B(100) = 15 + 80 = 95 dollars.
        "A1: B(100) = 15 + 80 = 95달러.",
        // EN: M1: Solves 40 + 12√x = 15 + 0.8x on the GDC (intersection).
        "M1: GDC로 40 + 12√x = 15 + 0.8x를 풂 (교점).",
        // EN: A1: x = 284 km.
        "A1: x = 284 km.",
        // EN: A1: Company A is cheaper for x > 284 (B is cheaper for 0 < x < 284).
        "A1: x > 284일 때 회사 A가 더 쌈 (0 < x < 284에서는 B가 더 쌈).",
        // EN: M1: Solves A(x) = 300 and B(x) = 300 (or recognises A is cheaper at long distances and solves A(x) = 300).
        "M1: A(x) = 300과 B(x) = 300을 풂 (또는 먼 거리에서는 A가 더 싸다는 것을 알고 A(x) = 300을 풂).",
        // EN: A1: Greatest distance 469 km, using company A (company B allows only 356 km).
        "A1: 가장 먼 거리는 회사 A를 이용한 469 km (회사 B로는 356 km까지만 가능함).",
      ],
    },

    // ── t2-1-q055 · numeric · challenge · SL · SL 2.2, 2.5 · 4 marks
    "t2-1-q055": {
      // EN: <p>Let <span class="chem">f(x) = x^3 + 2x</span> for <span class="chem">x ∈ ℝ</span>. The function <span class="chem">f</span> is increasing, so <span class="chem">f^{-1}</span> exists. Find the value of <span class="chem">(f^{-1} ∘ f^{-1})(10)</span>, giving your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">x ∈ ℝ</span>에서 <span class=\"chem\">f(x) = x^3 + 2x</span>라 하자. 함수 <span class=\"chem\">f</span>는 증가함수이므로 <span class=\"chem\">f^{-1}</span>가 존재한다. <span class=\"chem\">(f^{-1} ∘ f^{-1})(10)</span>의 값을 구하시오 (Find). 답은 유효숫자 3자리로 쓰시오.</p>",
      hints: [
        // EN: Decode: <span class="chem">(f^{-1} ∘ f^{-1})(10) = f^{-1}(f^{-1}(10))</span>. You cannot write <span class="chem">f^{-1}</span> as a formula, but you can find each inverse value by solving an equation.
        "해석: <span class=\"chem\">(f^{-1} ∘ f^{-1})(10) = f^{-1}(f^{-1}(10))</span>이에요. <span class=\"chem\">f^{-1}</span>를 식으로 쓸 수는 없지만, 방정식을 풀어서 각 역함수 값을 구할 수 있어요.",
        // EN: First solve <span class="chem">x^3 + 2x = 10</span> to get <span class="chem">p = f^{-1}(10)</span>. Store it in the GDC.
        "먼저 <span class=\"chem\">x^3 + 2x = 10</span>을 풀어 <span class=\"chem\">p = f^{-1}(10)</span>을 구하세요. 이 값을 GDC에 저장하세요.",
        // EN: Then solve <span class="chem">x^3 + 2x = p</span>. Do not round <span class="chem">p</span> before the second step.
        "그다음 <span class=\"chem\">x^3 + 2x = p</span>를 푸세요. 두 번째 단계 전에 <span class=\"chem\">p</span>를 반올림하지 마세요.",
      ],
      // EN: <p>Decode: applying <span class="chem">f^{-1}</span> twice means solving <span class="chem">f(x) = ...</span> twice. Step 1: <span class="chem">x^3 + 2x = 10</span> gives <span class="chem">p = f^{-1}(10) ≈ 1.84742</span>. Step 2: <span class="chem">x^3 + 2x = 1.84742</span> gives <span class="chem">x ≈ 0.729556</span>. So <span class="chem">(f^{-1} ∘ f^{-1})(10) ≈ 0.730</span> (3 s.f.). Check: <span class="chem">f(f(0.729556)) = f(1.84742) ≈ 10</span>.</p>
      solution: "<p>해석: <span class=\"chem\">f^{-1}</span>를 두 번 적용한다는 것은 <span class=\"chem\">f(x) = ...</span>를 두 번 푼다는 뜻이에요. 1단계: <span class=\"chem\">x^3 + 2x = 10</span>에서 <span class=\"chem\">p = f^{-1}(10) ≈ 1.84742</span>. 2단계: <span class=\"chem\">x^3 + 2x = 1.84742</span>에서 <span class=\"chem\">x ≈ 0.729556</span>. 따라서 <span class=\"chem\">(f^{-1} ∘ f^{-1})(10) ≈ 0.730</span> (유효숫자 3자리)이에요. 확인: <span class=\"chem\">f(f(0.729556)) = f(1.84742) ≈ 10</span>.</p>",
    },

    // ── t2-1-q056 · short · challenge · SL · SL 2.2, 2.3, 2.4 · 8 marks
    "t2-1-q056": {
      // EN: <p>Let <span class="chem">f(x) = 4x/(x^2 + 1) + 1</span> for <span class="chem">-6 &lt;= x &lt;= 6</span>.<br>(a) Sketch the graph of <span class="chem">y = f(x)</span>. Label the coordinates of the local maximum and local minimum points, the <span class="chem">x</span>-intercepts and both end points. <strong>[4 marks]</strong><br>(b) Write down the range of <span class="chem">f</span>. <strong>[2 marks]</strong><br>(c) Find the number of solutions of the equation <span class="chem">f(x) = 1.5</span>. Justify your answer. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">-6 &lt;= x &lt;= 6</span>에서 <span class=\"chem\">f(x) = 4x/(x^2 + 1) + 1</span>이라 하자.<br>(a) <span class=\"chem\">y = f(x)</span>의 그래프의 개형을 그리시오 (Sketch). 극대점과 극소점, <span class=\"chem\">x</span>절편, 양 끝점의 좌표를 표시하시오. <strong>[4 marks]</strong><br>(b) <span class=\"chem\">f</span>의 치역을 쓰시오 (Write down). <strong>[2 marks]</strong><br>(c) 방정식 <span class=\"chem\">f(x) = 1.5</span>의 해의 개수를 구하고 (Find), 근거를 들어 설명하시오 (Justify). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: for (c), the answer depends on the <strong>domain</strong>. Count the intersections of <span class="chem">y = f(x)</span> and <span class="chem">y = 1.5</span> only for <span class="chem">-6 &lt;= x &lt;= 6</span>.
        "해석: (c)의 답은 <strong>정의역</strong>에 따라 달라져요. <span class=\"chem\">y = f(x)</span>와 <span class=\"chem\">y = 1.5</span>의 교점을 <span class=\"chem\">-6 &lt;= x &lt;= 6</span>에서만 세세요.",
        // EN: Set the window to <span class="chem">-6 &lt;= x &lt;= 6</span>, <span class="chem">-2 &lt;= y &lt;= 4</span>. Use the maximum, minimum and zero tools, and evaluate <span class="chem">f(-6)</span> and <span class="chem">f(6)</span>.
        "화면 범위를 <span class=\"chem\">-6 &lt;= x &lt;= 6</span>, <span class=\"chem\">-2 &lt;= y &lt;= 4</span>로 하세요. maximum, minimum, zero 기능을 이용하고 <span class=\"chem\">f(-6)</span>과 <span class=\"chem\">f(6)</span>을 계산하세요.",
        // EN: Compare <span class="chem">f(6)</span> with <span class="chem">1.5</span>. Does the curve drop below <span class="chem">1.5</span> before <span class="chem">x = 6</span>?
        "<span class=\"chem\">f(6)</span>과 <span class=\"chem\">1.5</span>를 비교하세요. 곡선이 <span class=\"chem\">x = 6</span>에 이르기 전에 <span class=\"chem\">1.5</span>보다 아래로 내려가나요?",
      ],
      // EN: <p>Decode: (c) is a counting question in which the domain decides the answer.<br>(a) GDC: minimum <span class="chem">(-1, -1)</span>, maximum <span class="chem">(1, 3)</span>, zeros <span class="chem">x = -2 +- sqrt(3) ≈ -3.73, -0.268</span>, end points <span class="chem">f(-6) = 13/37 ≈ 0.351</span> and <span class="chem">f(6) = 61/37 ≈ 1.65</span>.<br>(b) <span class="chem">-1 &lt;= f(x) &lt;= 3</span>.<br>(c) <span class="chem">f(x) = 1.5 => 4x/(x^2 + 1) = 0.5 => x^2 - 8x + 1 = 0 => x = 4 +- sqrt(15) ≈ 0.127, 7.87</span>. Only <span class="chem">0.127</span> lies in the domain. On the GDC, the curve stays above <span class="chem">1.5</span> from <span class="chem">x ≈ 0.127</span> to <span class="chem">x = 6</span> (where <span class="chem">f(6) ≈ 1.65</span>). There is exactly <strong>one</strong> solution.</p>
      solution: "<p>해석: (c)는 정의역이 답을 결정하는 개수 세기 문제예요.<br>(a) GDC: 극소점 <span class=\"chem\">(-1, -1)</span>, 극대점 <span class=\"chem\">(1, 3)</span>, 영점 <span class=\"chem\">x = -2 +- sqrt(3) ≈ -3.73, -0.268</span>, 끝점 <span class=\"chem\">f(-6) = 13/37 ≈ 0.351</span>과 <span class=\"chem\">f(6) = 61/37 ≈ 1.65</span>.<br>(b) <span class=\"chem\">-1 &lt;= f(x) &lt;= 3</span>.<br>(c) <span class=\"chem\">f(x) = 1.5 => 4x/(x^2 + 1) = 0.5 => x^2 - 8x + 1 = 0 => x = 4 +- sqrt(15) ≈ 0.127, 7.87</span>. 정의역에 있는 것은 <span class=\"chem\">0.127</span>뿐이에요. GDC에서 곡선은 <span class=\"chem\">x ≈ 0.127</span>부터 <span class=\"chem\">x = 6</span> (<span class=\"chem\">f(6) ≈ 1.65</span>)까지 <span class=\"chem\">1.5</span>보다 위에 있어요. 해는 정확히 <strong>한 개</strong>예요.</p>",
      // EN: <p>(a) Starts at <span class="chem">(-6, 0.351)</span>, falls through <span class="chem">(-3.73, 0)</span> to the minimum <span class="chem">(-1, -1)</span>, rises through <span class="chem">(-0.268, 0)</span> to the maximum <span class="chem">(1, 3)</span>, then falls to <span class="chem">(6, 1.65)</span>; (b) <span class="chem">-1 &lt;= f(x) &lt;= 3</span>; (c) one solution, <span class="chem">x ≈ 0.127</span>, because the other solution of <span class="chem">f(x) = 1.5</span> is <span class="chem">x ≈ 7.87</span>, outside the domain.</p>
      answer: "<p>(a) <span class=\"chem\">(-6, 0.351)</span>에서 시작해 <span class=\"chem\">(-3.73, 0)</span>을 지나 극소점 <span class=\"chem\">(-1, -1)</span>까지 감소하고, <span class=\"chem\">(-0.268, 0)</span>을 지나 극대점 <span class=\"chem\">(1, 3)</span>까지 증가한 뒤 <span class=\"chem\">(6, 1.65)</span>까지 감소함; (b) <span class=\"chem\">-1 &lt;= f(x) &lt;= 3</span>; (c) 해는 한 개, <span class=\"chem\">x ≈ 0.127</span>. <span class=\"chem\">f(x) = 1.5</span>의 다른 해 <span class=\"chem\">x ≈ 7.87</span>은 정의역 밖에 있기 때문.</p>",
      markscheme: [
        // EN: A1: Correct shape on −6 ≤ x ≤ 6 only (one minimum, one maximum).
        "A1: −6 ≤ x ≤ 6에서만 올바른 모양 (극소점 하나, 극대점 하나).",
        // EN: A1: Minimum (−1, −1) and maximum (1, 3) labelled.
        "A1: 극소점 (−1, −1)과 극대점 (1, 3)을 표시함.",
        // EN: A1: x-intercepts (−3.73, 0) and (−0.268, 0) labelled.
        "A1: x절편 (−3.73, 0)과 (−0.268, 0)을 표시함.",
        // EN: A1: End points (−6, 0.351) and (6, 1.65) labelled.
        "A1: 끝점 (−6, 0.351)과 (6, 1.65)를 표시함.",
        // EN: A1: Lower bound −1 (from the minimum point).
        "A1: 하한 −1 (극소점에서 나옴).",
        // EN: A1: Upper bound 3, with both included: −1 ≤ f(x) ≤ 3.
        "A1: 상한 3, 양 끝을 모두 포함함: −1 ≤ f(x) ≤ 3.",
        // EN: R1: The line y = 1.5 meets the curve only once on the domain: for 1 < x ≤ 6, f(x) ≥ f(6) ≈ 1.65 > 1.5, and the second root x ≈ 7.87 lies outside the domain.
        "R1: 정의역에서 직선 y = 1.5는 곡선과 한 번만 만남: 1 < x ≤ 6에서 f(x) ≥ f(6) ≈ 1.65 > 1.5이고, 두 번째 근 x ≈ 7.87은 정의역 밖에 있음.",
        // EN: A1: One solution (x ≈ 0.127).
        "A1: 해는 한 개 (x ≈ 0.127).",
      ],
    },

    // ── t2-1-q057 · numeric · challenge · SL · SL 2.2, 2.4 · 5 marks
    "t2-1-q057": {
      // EN: <p>Let <span class="chem">f(x) = sqrt(4 - x) ln(x + 1)</span>. The function <span class="chem">f</span> is defined on its largest possible real domain, and its range is <span class="chem">f(x) &lt;= M</span>. Find the value of <span class="chem">M</span>, giving your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">f(x) = sqrt(4 - x) ln(x + 1)</span>이라 하자. 함수 <span class=\"chem\">f</span>는 가능한 가장 큰 실수 정의역에서 정의되고, 그 치역은 <span class=\"chem\">f(x) &lt;= M</span>이다. <span class=\"chem\">M</span>의 값을 구하시오 (Find). 답은 유효숫자 3자리로 쓰시오.</p>",
      hints: [
        // EN: Decode: first find the domain from both pieces: <span class="chem">4 - x &gt;= 0</span> and <span class="chem">x + 1 &gt; 0</span>. The range has the form <span class="chem">f(x) &lt;= M</span>, so <span class="chem">M</span> is the greatest value of <span class="chem">f</span> on that domain.
        "해석: 먼저 두 부분에서 정의역을 구하세요: <span class=\"chem\">4 - x &gt;= 0</span>이고 <span class=\"chem\">x + 1 &gt; 0</span>. 치역이 <span class=\"chem\">f(x) &lt;= M</span> 꼴이므로 <span class=\"chem\">M</span>은 그 정의역에서 <span class=\"chem\">f</span>의 최댓값이에요.",
        // EN: The domain is <span class="chem">-1 &lt; x &lt;= 4</span>. Graph <span class="chem">f</span> on this interval: it tends to <span class="chem">-infty</span> as <span class="chem">x -&gt; -1^+</span>.
        "정의역은 <span class=\"chem\">-1 &lt; x &lt;= 4</span>예요. 이 구간에서 <span class=\"chem\">f</span>의 그래프를 그리세요: <span class=\"chem\">x -&gt; -1^+</span>일 때 <span class=\"chem\">-infty</span>로 가요.",
        // EN: Use the maximum tool on the GDC.
        "GDC의 maximum 기능을 이용하세요.",
      ],
      // EN: <p>Decode: the range is bounded above only, so <span class="chem">M</span> is the maximum value of <span class="chem">f</span> on its domain. Domain: <span class="chem">4 - x &gt;= 0</span> and <span class="chem">x + 1 &gt; 0</span>, so <span class="chem">-1 &lt; x &lt;= 4</span>. As <span class="chem">x -&gt; -1^+</span>, <span class="chem">ln(x + 1) -&gt; -infty</span> while <span class="chem">sqrt(4 - x) -&gt; sqrt(5)</span>, so <span class="chem">f -&gt; -infty</span>; and <span class="chem">f(4) = 0</span>. The GDC maximum is at <span class="chem">x ≈ 2.17</span>, with value <span class="chem">f ≈ 1.56074</span>. So <span class="chem">M ≈ 1.56</span> (3 s.f.).</p>
      solution: "<p>해석: 치역이 위로만 유계이므로 <span class=\"chem\">M</span>은 정의역에서 <span class=\"chem\">f</span>의 최댓값이에요. 정의역: <span class=\"chem\">4 - x &gt;= 0</span>이고 <span class=\"chem\">x + 1 &gt; 0</span>이므로 <span class=\"chem\">-1 &lt; x &lt;= 4</span>. <span class=\"chem\">x -&gt; -1^+</span>일 때 <span class=\"chem\">ln(x + 1) -&gt; -infty</span>이고 <span class=\"chem\">sqrt(4 - x) -&gt; sqrt(5)</span>이므로 <span class=\"chem\">f -&gt; -infty</span>이고, <span class=\"chem\">f(4) = 0</span>이에요. GDC에서 최대는 <span class=\"chem\">x ≈ 2.17</span>이고 그 값은 <span class=\"chem\">f ≈ 1.56074</span>예요. 따라서 <span class=\"chem\">M ≈ 1.56</span> (유효숫자 3자리)이에요.</p>",
    },

    // ── t2-1-q058 · short · challenge · SL · SL 2.2, 2.5 · 7 marks
    "t2-1-q058": {
      // EN: <p>Oil leaking from a damaged tanker spreads as a circle on the sea. The radius of the circle, in metres, <span class="chem">t</span> hours after the leak starts is <span class="chem">r(t) = 80t^{0.6}</span>. The area of a circle of radius <span class="chem">r</span> metres is <span class="chem">S(r) = pi r^2</span> square metres.<br>(a) Find an expression for <span class="chem">(S ∘ r)(t)</span> in the form <span class="chem">k t^n</span>, giving the exact value of <span class="chem">k</span>. <strong>[2 marks]</strong><br>(b) The coastguard must be told when the slick covers <span class="chem">1</span> <span class="unit">km2</span>. Find how many hours after the leak starts this happens. <strong>[3 marks]</strong><br>(c) Find <span class="chem">(S ∘ r)^{-1}(250 000)</span> and explain what it represents. <strong>[2 marks]</strong></p>
      stem: "<p>파손된 유조선에서 새어 나온 기름이 바다 위에 원 모양으로 퍼진다. 기름이 새기 시작한 지 <span class=\"chem\">t</span>시간 후 원의 반지름(미터)은 <span class=\"chem\">r(t) = 80t^{0.6}</span>이다. 반지름이 <span class=\"chem\">r</span>미터인 원의 넓이는 <span class=\"chem\">S(r) = pi r^2</span>제곱미터이다.<br>(a) <span class=\"chem\">(S ∘ r)(t)</span>의 식을 <span class=\"chem\">k t^n</span> 꼴로 구하시오 (Find). 단, <span class=\"chem\">k</span>는 정확한 값으로 쓰시오. <strong>[2 marks]</strong><br>(b) 기름띠가 <span class=\"chem\">1</span> <span class=\"unit\">km2</span>를 덮으면 해안경비대에 알려야 한다. 기름이 새기 시작한 지 몇 시간 후에 이렇게 되는지 구하시오. <strong>[3 marks]</strong><br>(c) <span class=\"chem\">(S ∘ r)^{-1}(250 000)</span>을 구하고, 그것이 무엇을 나타내는지 설명하시오 (explain). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: area depends on radius, and radius depends on time, so area as a function of time is <span class="chem">S(r(t))</span>. Watch the units: the model uses metres, but (b) gives an area in square kilometres.
        "해석: 넓이는 반지름에 따라 정해지고 반지름은 시간에 따라 정해지므로, 시간에 대한 넓이는 <span class=\"chem\">S(r(t))</span>예요. 단위에 주의하세요: 모델은 미터를 쓰지만 (b)의 넓이는 제곱킬로미터예요.",
        // EN: <span class="chem">1</span> <span class="unit">km2</span> <span class="chem">= 1000 × 1000 = 10^6</span> <span class="unit">m2</span>, not <span class="chem">1000</span> <span class="unit">m2</span>.
        "<span class=\"chem\">1</span> <span class=\"unit\">km2</span> <span class=\"chem\">= 1000 × 1000 = 10^6</span> <span class=\"unit\">m2</span>이고, <span class=\"chem\">1000</span> <span class=\"unit\">m2</span>가 아니에요.",
        // EN: An inverse takes an output (an area) and returns the input (a time). Solve <span class="chem">6400 pi t^{1.2} = 250 000</span>.
        "역함수는 출력 (넓이)을 받아서 입력 (시간)을 돌려줘요. <span class=\"chem\">6400 pi t^{1.2} = 250 000</span>을 푸세요.",
      ],
      // EN: <p>Decode: build the composite, convert units, then use the inverse to go from area back to time.<br>(a) <span class="chem">(S ∘ r)(t) = pi(80t^{0.6})^2 = 6400 pi t^{1.2}</span>.<br>(b) <span class="chem">1</span> <span class="unit">km2</span> <span class="chem">= 10^6</span> <span class="unit">m2</span>. <span class="chem">6400 pi t^{1.2} = 10^6 => t^{1.2} ≈ 49.736 => t ≈ 25.9</span> hours.<br>(c) <span class="chem">6400 pi t^{1.2} = 250 000 => t ≈ 8.17</span>. So <span class="chem">(S ∘ r)^{-1}(250 000) ≈ 8.17</span>: the slick covers <span class="chem">250 000</span> <span class="unit">m2</span> about <span class="chem">8.17</span> hours after the leak starts.</p>
      solution: "<p>해석: 합성함수를 만들고, 단위를 바꾸고, 역함수를 이용해 넓이에서 시간으로 되돌아가요.<br>(a) <span class=\"chem\">(S ∘ r)(t) = pi(80t^{0.6})^2 = 6400 pi t^{1.2}</span>.<br>(b) <span class=\"chem\">1</span> <span class=\"unit\">km2</span> <span class=\"chem\">= 10^6</span> <span class=\"unit\">m2</span>. <span class=\"chem\">6400 pi t^{1.2} = 10^6 => t^{1.2} ≈ 49.736 => t ≈ 25.9</span>시간.<br>(c) <span class=\"chem\">6400 pi t^{1.2} = 250 000 => t ≈ 8.17</span>. 따라서 <span class=\"chem\">(S ∘ r)^{-1}(250 000) ≈ 8.17</span>이에요: 기름이 새기 시작한 지 약 <span class=\"chem\">8.17</span>시간 후에 기름띠가 <span class=\"chem\">250 000</span> <span class=\"unit\">m2</span>를 덮어요.</p>",
      // EN: <p>(a) <span class="chem">(S ∘ r)(t) = 6400 pi t^{1.2}</span>; (b) <span class="chem">25.9</span> hours; (c) <span class="chem">8.17</span>: the number of hours after the leak starts at which the slick covers <span class="chem">250 000</span> <span class="unit">m2</span> (<span class="chem">0.25</span> <span class="unit">km2</span>).</p>
      answer: "<p>(a) <span class=\"chem\">(S ∘ r)(t) = 6400 pi t^{1.2}</span>; (b) <span class=\"chem\">25.9</span>시간; (c) <span class=\"chem\">8.17</span>: 기름띠가 <span class=\"chem\">250 000</span> <span class=\"unit\">m2</span> (<span class=\"chem\">0.25</span> <span class=\"unit\">km2</span>)를 덮는 때가 기름이 새기 시작한 지 몇 시간 후인지를 나타냄.</p>",
      markscheme: [
        // EN: M1: Substitutes r(t) into S: π(80t^{0.6})².
        "M1: r(t)를 S에 대입함: π(80t^{0.6})².",
        // EN: A1: (S ∘ r)(t) = 6400π t^{1.2}.
        "A1: (S ∘ r)(t) = 6400π t^{1.2}.",
        // EN: M1: Converts units: 1 km² = 1 000 000 m².
        "M1: 단위를 바꿈: 1 km² = 1 000 000 m².",
        // EN: M1: Solves 6400π t^{1.2} = 1 000 000 (GDC or logarithms).
        "M1: 6400π t^{1.2} = 1 000 000을 풂 (GDC 또는 로그).",
        // EN: A1: t = 25.9 hours.
        "A1: t = 25.9시간.",
        // EN: A1: (S ∘ r)⁻¹(250 000) = 8.17.
        "A1: (S ∘ r)⁻¹(250 000) = 8.17.",
        // EN: R1: It is the time, in hours after the leak starts, at which the area of the slick is 250 000 m².
        "R1: 기름띠의 넓이가 250 000 m²가 되는 시각 (기름이 새기 시작한 뒤의 시간 수)임.",
      ],
    },

    // ── t2-1-q059 · numeric · challenge · SL · SL 2.2, 2.4 · 5 marks
    "t2-1-q059": {
      // EN: <p>Let <span class="chem">f(x) = 1 - x^3</span> for <span class="chem">x ∈ ℝ</span>. The graphs of <span class="chem">y = f(x)</span> and <span class="chem">y = f^{-1}(x)</span> intersect at exactly five points. Find the largest <span class="chem">x</span>-coordinate of these five points, giving your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">x ∈ ℝ</span>에서 <span class=\"chem\">f(x) = 1 - x^3</span>이라 하자. <span class=\"chem\">y = f(x)</span>와 <span class=\"chem\">y = f^{-1}(x)</span>의 그래프는 정확히 다섯 점에서 만난다. 이 다섯 점의 <span class=\"chem\">x</span>좌표 중 가장 큰 값을 구하시오 (Find). 답은 유효숫자 3자리로 쓰시오.</p>",
      hints: [
        // EN: Decode: this <span class="chem">f</span> is <strong>decreasing</strong>, so its graph can meet the graph of <span class="chem">f^{-1}</span> at points that are not on <span class="chem">y = x</span>. Solving <span class="chem">f(x) = x</span> finds only one of the five points.
        "해석: 이 <span class=\"chem\">f</span>는 <strong>감소함수</strong>이므로, 그 그래프는 <span class=\"chem\">y = x</span> 위에 있지 않은 점에서 <span class=\"chem\">f^{-1}</span>의 그래프와 만날 수 있어요. <span class=\"chem\">f(x) = x</span>를 풀면 다섯 점 중 한 점만 찾을 수 있어요.",
        // EN: Find <span class="chem">f^{-1}(x) = (1 - x)^{1/3}</span> (a cube root, defined for all real <span class="chem">x</span>; use the GDC cube-root function so that negative values of <span class="chem">1 - x</span> are accepted), then graph both curves on the GDC.
        "<span class=\"chem\">f^{-1}(x) = (1 - x)^{1/3}</span>을 구하고 (세제곱근이며 모든 실수 <span class=\"chem\">x</span>에서 정의돼요; <span class=\"chem\">1 - x</span>가 음수일 때도 계산되도록 GDC의 세제곱근 함수를 쓰세요), GDC로 두 곡선을 그리세요.",
        // EN: Alternatively, a point <span class="chem">(a, f(a))</span> lies on both graphs exactly when <span class="chem">f(f(a)) = a</span>. Graph <span class="chem">y = f(f(x)) - x</span> and find its zeros. Two of them are easy to check by hand: <span class="chem">f(0) = 1</span> and <span class="chem">f(1) = 0</span>.
        "또 다른 방법: 점 <span class=\"chem\">(a, f(a))</span>가 두 그래프 위에 모두 있는 것은 정확히 <span class=\"chem\">f(f(a)) = a</span>일 때예요. <span class=\"chem\">y = f(f(x)) - x</span>의 그래프를 그리고 영점을 구하세요. 그중 두 개는 손으로 쉽게 확인할 수 있어요: <span class=\"chem\">f(0) = 1</span>, <span class=\"chem\">f(1) = 0</span>.",
      ],
      // EN: <p>Decode: for a decreasing function, intersections of <span class="chem">f</span> and <span class="chem">f^{-1}</span> need not lie on <span class="chem">y = x</span>, so solving <span class="chem">f(x) = x</span> is not enough. <span class="chem">f^{-1}(x) = (1 - x)^{1/3}</span>. The GDC gives the intersections of <span class="chem">y = 1 - x^3</span> and <span class="chem">y = (1 - x)^{1/3}</span> at <span class="chem">x ≈ -0.536</span>, <span class="chem">x = 0</span>, <span class="chem">x ≈ 0.682</span>, <span class="chem">x = 1</span> and <span class="chem">x ≈ 1.1537</span>. The points are <span class="chem">(-0.536, 1.15)</span>, <span class="chem">(0, 1)</span>, <span class="chem">(0.682, 0.682)</span> (the only one on <span class="chem">y = x</span>), <span class="chem">(1, 0)</span> and <span class="chem">(1.15, -0.536)</span>. The four points off <span class="chem">y = x</span> form two pairs of reflections in <span class="chem">y = x</span>: <span class="chem">(0, 1)</span> with <span class="chem">(1, 0)</span>, and <span class="chem">(-0.536, 1.15)</span> with <span class="chem">(1.15, -0.536)</span>. The largest <span class="chem">x</span>-coordinate is <span class="chem">1.15</span> (3 s.f.).</p>
      solution: "<p>해석: 감소함수에서는 <span class=\"chem\">f</span>와 <span class=\"chem\">f^{-1}</span>의 교점이 <span class=\"chem\">y = x</span> 위에 있지 않을 수도 있으므로, <span class=\"chem\">f(x) = x</span>를 푸는 것만으로는 부족해요. <span class=\"chem\">f^{-1}(x) = (1 - x)^{1/3}</span>. GDC에서 <span class=\"chem\">y = 1 - x^3</span>과 <span class=\"chem\">y = (1 - x)^{1/3}</span>의 교점은 <span class=\"chem\">x ≈ -0.536</span>, <span class=\"chem\">x = 0</span>, <span class=\"chem\">x ≈ 0.682</span>, <span class=\"chem\">x = 1</span>, <span class=\"chem\">x ≈ 1.1537</span>이에요. 교점은 <span class=\"chem\">(-0.536, 1.15)</span>, <span class=\"chem\">(0, 1)</span>, <span class=\"chem\">(0.682, 0.682)</span> (<span class=\"chem\">y = x</span> 위에 있는 유일한 점), <span class=\"chem\">(1, 0)</span>, <span class=\"chem\">(1.15, -0.536)</span>이에요. <span class=\"chem\">y = x</span> 위에 있지 않은 네 점은 <span class=\"chem\">y = x</span>에 대해 서로 대칭인 두 쌍을 이뤄요: <span class=\"chem\">(0, 1)</span>과 <span class=\"chem\">(1, 0)</span>, 그리고 <span class=\"chem\">(-0.536, 1.15)</span>와 <span class=\"chem\">(1.15, -0.536)</span>. 가장 큰 <span class=\"chem\">x</span>좌표는 <span class=\"chem\">1.15</span> (유효숫자 3자리)예요.</p>",
    },

  }
});
