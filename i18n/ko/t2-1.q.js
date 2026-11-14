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
        // EN (option D): You substituted (2, −1) with the wrong signs: 5(2) − 2(−1) = 12, so 5x − 2y = 12, giving 5x − 2y − 12 = 0.
        "3": "(2, −1)을 대입할 때 부호를 잘못 계산했어요: 5(2) − 2(−1) = 12이므로 5x − 2y = 12, 즉 5x − 2y − 12 = 0이에요.",
      },
    },

    // ── t2-1-q002 · numeric · foundation · SL · SL 2.1 · 3 marks
    "t2-1-q002": {
      // EN: <p>The perpendicular bisector of the line segment joining <span class="chem">A(-1, 4)</span> and <span class="chem">B(5, 8)</span> intersects the <span class="chem">x</span>-axis at <span class="chem">(a, 0)</span>. Find the exact value of <span class="chem">a</span>.</p>
      stem: "<p>두 점 <span class=\"chem\">A(-1, 4)</span>와 <span class=\"chem\">B(5, 8)</span>을 잇는 선분의 수직이등분선이 <span class=\"chem\">x</span>축과 점 <span class=\"chem\">(a, 0)</span>에서 만나요. <span class=\"chem\">a</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Find the midpoint <span class="chem">M</span> of <span class="chem">A(-1, 4)</span> and <span class="chem">B(5, 8)</span> and the gradient <span class="chem">m_{AB}</span>.
        "<span class=\"chem\">A(-1, 4)</span>와 <span class=\"chem\">B(5, 8)</span>의 중점 <span class=\"chem\">M</span>과 기울기 <span class=\"chem\">m_{AB}</span>를 구하세요.",
        // EN: With <span class="chem">M(2, 6)</span> and <span class="chem">m_perp = -3/2</span>, substitute <span class="chem">y = 0</span> into <span class="chem">y - 6 = (-3/2)(x - 2)</span>.
        "<span class=\"chem\">M(2, 6)</span>과 <span class=\"chem\">m_perp = -3/2</span>를 이용해 <span class=\"chem\">y - 6 = (-3/2)(x - 2)</span>에 <span class=\"chem\">y = 0</span>을 대입하세요.",
      ],
      // EN: <p>Midpoint <span class="chem">M = ((-1+5)/2, (4+8)/2) = (2, 6)</span>. Gradient <span class="chem">m_{AB} = (8 - 4)/(5 - (-1)) = 4/6 = 2/3</span>, so <span class="chem">m_perp = -3/2</span>. The perpendicular bisector is <span class="chem">y - 6 = (-3/2)(x - 2)</span>. Setting <span class="chem">y = 0</span> gives <span class="chem">-6 = (-3/2)(a - 2) => a - 2 = 4 => a = 6</span>.</p>
      solution: "<p>중점은 <span class=\"chem\">M = ((-1+5)/2, (4+8)/2) = (2, 6)</span>이에요. 기울기는 <span class=\"chem\">m_{AB} = (8 - 4)/(5 - (-1)) = 4/6 = 2/3</span>이므로 <span class=\"chem\">m_perp = -3/2</span>예요. 수직이등분선은 <span class=\"chem\">y - 6 = (-3/2)(x - 2)</span>이고, <span class=\"chem\">y = 0</span>을 대입하면 <span class=\"chem\">-6 = (-3/2)(a - 2) => a - 2 = 4 => a = 6</span>이에요.</p>",
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
        // EN (option C): When dividing 10 ≥ 2x by −2, you forgot to reverse the inequality sign to x ≤ 5.
        "2": "부등식 10 ≥ 2x를 풀거나 −2로 나눌 때 부등호 방향을 x ≤ 5로 바꾸는 것을 빠뜨렸어요.",
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
      // EN: <p>A one-to-one function <span class="chem">f</span> is defined by <span class="chem">f(x) = x^3 + 2x - 1</span> for <span class="chem">x in R</span>. Find the value of <span class="chem">f^{-1}(11)</span>.</p>
      stem: "<p>일대일함수 <span class=\"chem\">f</span>가 <span class=\"chem\">x in R</span>에서 <span class=\"chem\">f(x) = x^3 + 2x - 1</span>로 정의되어 있어요. <span class=\"chem\">f^{-1}(11)</span>의 값을 구하시오 (Find).</p>",
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
        // EN: For every <span class="chem">x in [-2, 5]</span>, <span class="chem">(f^{-1} ∘ f)(x) = x</span>.
        "모든 <span class=\"chem\">x in [-2, 5]</span>에 대해 <span class=\"chem\">(f^{-1} ∘ f)(x) = x</span>이다.",
        // EN: For every <span class="chem">x in [-2, 5]</span>, <span class="chem">f^{-1}(x) = 1 / f(x)</span>.
        "모든 <span class=\"chem\">x in [-2, 5]</span>에 대해 <span class=\"chem\">f^{-1}(x) = 1 / f(x)</span>이다.",
      ],
      hints: [
        // EN: Check the three core properties of inverse functions: domain-range swap, reflection in <span class="chem">y = x</span>, and identity composition <span class="chem">f^{-1}(f(x)) = x</span>.
        "역함수의 세 가지 핵심 성질을 확인하세요: 정의역·치역 맞바꿈, <span class=\"chem\">y = x</span> 대칭, 항등 합성 <span class=\"chem\">f^{-1}(f(x)) = x</span>.",
      ],
      // EN: <p>Statements A, B, and C are fundamental properties of every inverse function: <span class="chem">Domain(f^{-1}) = Range(f) = [1, 10]</span>, <span class="chem">Range(f^{-1}) = Domain(f) = [-2, 5]</span>, the graph reflects across <span class="chem">y = x</span>, and <span class="chem">(f^{-1} ∘ f)(x) = x</span> on <span class="chem">Domain(f)</span>. Statement D confuses the inverse function <span class="chem">f^{-1}(x)</span> with the reciprocal <span class="chem">[f(x)]^{-1} = 1/f(x)</span>.</p>
      solution: "<p>1, 2, 3번 보기는 모든 역함수의 기본 성질이에요: <span class=\"chem\">Domain(f^{-1}) = Range(f) = [1, 10]</span>, <span class=\"chem\">Range(f^{-1}) = Domain(f) = [-2, 5]</span>, <span class=\"chem\">y = x</span> 대칭, 그리고 <span class=\"chem\">Domain(f)</span> 위에서 <span class=\"chem\">(f^{-1} ∘ f)(x) = x</span>. 4번 보기는 역함수 <span class=\"chem\">f^{-1}(x)</span>와 역수 <span class=\"chem\">[f(x)]^{-1} = 1/f(x)</span>를 혼동한 것이에요.</p>",
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
      // EN: <p>Let <span class="chem">f(x) = ln(x - 4)</span> for <span class="chem">x &gt; 4</span> and <span class="chem">g(x) = x^2 + k</span> for <span class="chem">x in R</span>. Find the set of values of the constant <span class="chem">k</span> for which the composite function <span class="chem">(f ∘ g)(x)</span> is defined for <strong>all</strong> real numbers <span class="chem">x in R</span>.</p>
      stem: "<p><span class=\"chem\">x &gt; 4</span>에서 <span class=\"chem\">f(x) = ln(x - 4)</span>이고, <span class=\"chem\">x in R</span>에서 <span class=\"chem\">g(x) = x^2 + k</span>라 하자. 합성함수 <span class=\"chem\">(f ∘ g)(x)</span>가 <strong>모든</strong> 실수 <span class=\"chem\">x in R</span>에 대하여 정의되도록 하는 상수 <span class=\"chem\">k</span>의 값의 범위를 구하시오 (Find).</p>",
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
        // EN: For <span class="chem">(f ∘ g)(x) = f(g(x))</span> to be defined for all <span class="chem">x in R</span>, we need <span class="chem">Range(g)</span> to be a subset of <span class="chem">Domain(f) = (4, infty)</span>.
        "모든 <span class=\"chem\">x in R</span>에 대해 <span class=\"chem\">(f ∘ g)(x) = f(g(x))</span>가 정의되려면 <span class=\"chem\">Range(g)</span>가 <span class=\"chem\">Domain(f) = (4, infty)</span>의 부분집합이어야 해요.",
        // EN: What is the minimum value of <span class="chem">g(x) = x^2 + k</span> for <span class="chem">x in R</span>?
        "<span class=\"chem\">x in R</span>에서 <span class=\"chem\">g(x) = x^2 + k</span>의 최솟값은 무엇인가요?",
      ],
      // EN: <p>The domain of <span class="chem">f</span> is <span class="chem">(4, infty)</span>. For <span class="chem">g(x) = x^2 + k</span> with <span class="chem">x in R</span>, the range of <span class="chem">g</span> is <span class="chem">[k, infty)</span> (minimum value <span class="chem">k</span> at <span class="chem">x = 0</span>). Requiring <span class="chem">Range(g) subset Domain(f)</span> means every output in <span class="chem">[k, infty)</span> must be strictly greater than <span class="chem">4</span>, so <span class="chem">k &gt; 4</span>.</p>
      solution: "<p><span class=\"chem\">f</span>의 정의역은 <span class=\"chem\">(4, infty)</span>예요. <span class=\"chem\">x in R</span>에서 <span class=\"chem\">g(x) = x^2 + k</span>에 대해 <span class=\"chem\">g</span>의 치역은 <span class=\"chem\">[k, infty)</span> (<span class=\"chem\">x = 0</span>일 때 최솟값 <span class=\"chem\">k</span>)예요. <span class=\"chem\">Range(g) subset Domain(f)</span>가 성립하려면 <span class=\"chem\">[k, infty)</span>의 모든 값이 <span class=\"chem\">4</span>보다 커야 하므로 <span class=\"chem\">k &gt; 4</span>예요.</p>",
      misconception: {
        // EN (option B): If k = 4, then at x = 0 we get g(0) = 4, and f(4) = ln(4 − 4) = ln(0), which is undefined! The inequality must be strict: k > 4.
        "1": "k = 4이면 x = 0일 때 g(0) = 4가 되어 f(4) = ln(4 − 4) = ln(0)이 정의되지 않아요! 등호가 없는 k > 4여야 해요.",
        // EN (option C): You checked that g(x) > 0 instead of checking the actual domain of f, which is u > 4.
        "2": "f의 실제 정의역인 u > 4가 아니라 g(x) > 0을 확인했어요.",
        // EN (option D): You reversed the inequality sign when requiring the minimum of g(x) to exceed 4.
        "3": "g(x)의 최솟값이 4보다 커야 하는데 부등호 방향을 반대로 적었어요.",
      },
    },

    // ── t2-1-q012 · numeric · exam · SL · SL 2.2 · 3 marks
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
      // EN: <p>A triangle has vertices at <span class="chem">A(1, 1)</span>, <span class="chem">B(7, 5)</span>, and <span class="chem">C(3, 8)</span>.<br>(a) Find the equation of the perpendicular bisector of side <span class="chem">[AB]</span> in the form <span class="chem">ax + by + d = 0</span>, where <span class="chem">a, b, d in Z</span>. <strong>[3 marks]</strong><br>(b) Determine whether vertex <span class="chem">C(3, 8)</span> is equidistant from <span class="chem">A</span> and <span class="chem">B</span>, justifying your answer. <strong>[2 marks]</strong></p>
      stem: "<p>삼각형의 세 꼭짓점이 <span class=\"chem\">A(1, 1)</span>, <span class=\"chem\">B(7, 5)</span>, <span class=\"chem\">C(3, 8)</span>이에요.<br>(a) 변 <span class=\"chem\">[AB]</span>의 수직이등분선의 방정식을 <span class=\"chem\">ax + by + d = 0</span> (<span class=\"chem\">a, b, d in Z</span>) 꼴로 구하시오 (Find). <strong>[3 marks]</strong><br>(b) 꼭짓점 <span class=\"chem\">C(3, 8)</span>이 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>로부터 같은 거리에 있는지 판별하고 (Determine), 그 이유를 설명하시오. <strong>[2 marks]</strong></p>",
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
      // EN: <p>Let <span class="chem">f(x) = 3x - 2</span> for <span class="chem">x in R</span> and <span class="chem">g(x) = 5 / (x + 1)</span> for <span class="chem">x != -1</span>.<br>(a) Find an expression for <span class="chem">(g ∘ f)(x)</span> and state its largest possible domain. <strong>[3 marks]</strong><br>(b) Solve the equation <span class="chem">(f^{-1} ∘ g)(x) = 2</span>. <strong>[3 marks]</strong></p>
      stem: "<p><span class=\"chem\">x in R</span>에서 <span class=\"chem\">f(x) = 3x - 2</span>이고 <span class=\"chem\">x != -1</span>에서 <span class=\"chem\">g(x) = 5 / (x + 1)</span>이라 하자.<br>(a) <span class=\"chem\">(g ∘ f)(x)</span>의 식을 구하고 (Find) 가능한 가장 큰 정의역을 쓰시오 (State). <strong>[3 marks]</strong><br>(b) 방정식 <span class=\"chem\">(f^{-1} ∘ g)(x) = 2</span>를 푸시오. <strong>[3 marks]</strong></p>",
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

    // ── t2-1-q016 · numeric · challenge · SL · SL 2.5 · 4 marks
    "t2-1-q016": {
      // EN: <p>The rational function <span class="chem">f(x) = (kx + 5)/(2x - 6)</span> (<span class="chem">x != 3</span>) is a <strong>self-inverse function</strong>, meaning that <span class="chem">f^{-1}(x) = f(x)</span> for all <span class="chem">x</span> in its domain. Find the value of the constant <span class="chem">k</span>.</p>
      stem: "<p>유리함수 <span class=\"chem\">f(x) = (kx + 5)/(2x - 6)</span> (<span class=\"chem\">x != 3</span>)은 정의역의 모든 <span class=\"chem\">x</span>에 대해 <span class=\"chem\">f^{-1}(x) = f(x)</span>를 만족하는 <strong>자기역함수(self-inverse function)</strong>예요. 상수 <span class=\"chem\">k</span>의 값을 구하시오 (Find).</p>",
      hints: [
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
        // EN: An input <span class="chem">x</span> is in the domain of <span class="chem">f ∘ g</span> if and only if <span class="chem">x in Domain(g)</span> (<span class="chem">x &gt;= 0</span>) AND <span class="chem">g(x) in Domain(f)</span> (<span class="chem">6 - x^2 &gt;= 2</span>).
        "입력 <span class=\"chem\">x</span>가 <span class=\"chem\">f ∘ g</span>의 정의역에 속하려면 <span class=\"chem\">x in Domain(g)</span> (<span class=\"chem\">x &gt;= 0</span>)이면서 동시에 <span class=\"chem\">g(x) in Domain(f)</span> (<span class=\"chem\">6 - x^2 &gt;= 2</span>)여야 해요.",
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

    // ── t2-1-q018 · short · challenge · SL · SL 2.5 · 7 marks
    "t2-1-q018": {
      // EN: <p>The function <span class="chem">f</span> is defined by <span class="chem">f(x) = e^{2x} - 4e^x + 5</span> for <span class="chem">x &lt;= a</span>.<br>(a) By completing the square in terms of <span class="chem">e^x</span>, find the largest possible value of <span class="chem">a</span> such that <span class="chem">f^{-1}</span> exists. <strong>[3 marks]</strong><br>(b) For this value of <span class="chem">a</span>, find an expression for <span class="chem">f^{-1}(x)</span> and state the domain of <span class="chem">f^{-1}</span> carefully. <strong>[4 marks]</strong></p>
      stem: "<p>함수 <span class=\"chem\">f</span>가 <span class=\"chem\">x &lt;= a</span>에서 <span class=\"chem\">f(x) = e^{2x} - 4e^x + 5</span>로 정의되어 있어요.<br>(a) <span class=\"chem\">e^x</span>에 대한 완전제곱식으로 변형하여, <span class=\"chem\">f^{-1}</span>가 존재하도록 하는 <span class=\"chem\">a</span>의 가능한 최댓값을 구하시오 (Find). <strong>[3 marks]</strong><br>(b) 이 <span class=\"chem\">a</span>의 값에 대해 <span class=\"chem\">f^{-1}(x)</span>의 식을 구하고 (Find), <span class=\"chem\">f^{-1}</span>의 정의역을 정확히 쓰시오 (State). <strong>[4 marks]</strong></p>",
      hints: [
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

  }
});
