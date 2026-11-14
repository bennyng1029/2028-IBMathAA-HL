/* t2-1.q — zh-Hant question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't2-1.q', {
  questions: {

    // ── t2-1-q001 · mcq · foundation · SL · SL 2.1 · 2 marks
    "t2-1-q001": {
      // EN: <p>A line <span class="chem">L_1</span> has equation <span class="chem">2x + 5y - 10 = 0</span>. A second line <span class="chem">L_2</span> is perpendicular to <span class="chem">L_1</span> and passes through the point <span class="chem">(2, -1)</span>. What is the equation of <span class="chem">L_2</span> in general form?</p>
      stem: "<p>直線 <span class=\"chem\">L_1</span> 的方程為 <span class=\"chem\">2x + 5y - 10 = 0</span>。另一條直線 <span class=\"chem\">L_2</span> 垂直於 <span class=\"chem\">L_1</span> 並通過點 <span class=\"chem\">(2, -1)</span>。<span class=\"chem\">L_2</span> 的一般式方程是甚麼？</p>",
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
        "把 <span class=\"chem\">2x + 5y - 10 = 0</span> 整理為 <span class=\"chem\">y = mx + c</span>，讀出 <span class=\"chem\">m_1 = -2/5</span>。",
        // EN: The perpendicular gradient is <span class="chem">m_2 = -1/m_1 = 5/2</span>. Substitute <span class="chem">(2, -1)</span> into <span class="chem">y - y_1 = m_2(x - x_1)</span>.
        "垂直斜率為 <span class=\"chem\">m_2 = -1/m_1 = 5/2</span>。把 <span class=\"chem\">(2, -1)</span> 代入 <span class=\"chem\">y - y_1 = m_2(x - x_1)</span>。",
      ],
      // EN: <p>Rearranging <span class="chem">L_1</span> gives <span class="chem">y = -(2/5)x + 2</span>, so <span class="chem">m_1 = -2/5</span> and <span class="chem">m_2 = 5/2</span>. Using point-gradient form through <span class="chem">(2, -1)</span>: <span class="chem">y + 1 = (5/2)(x - 2) => 2y + 2 = 5x - 10 => 5x - 2y - 12 = 0</span>.</p>
      solution: "<p>整理 <span class=\"chem\">L_1</span> 得 <span class=\"chem\">y = -(2/5)x + 2</span>，故 <span class=\"chem\">m_1 = -2/5</span> 及 <span class=\"chem\">m_2 = 5/2</span>。運用通過 <span class=\"chem\">(2, -1)</span> 的點斜式：<span class=\"chem\">y + 1 = (5/2)(x - 2) => 2y + 2 = 5x - 10 => 5x - 2y - 12 = 0</span>。</p>",
      misconception: {
        // EN (option B): You flipped the gradient from −2/5 to −5/2 without changing its sign. Perpendicular gradients have product −1, so m₂ = +5/2.
        "1": "你只把斜率由 −2/5 倒轉成 −5/2 而沒有變號。垂直斜率之積為 −1，故 m₂ = +5/2。",
        // EN (option C): You kept the fraction 2/5 instead of taking the reciprocal 5/2.
        "2": "你保留了分數 2/5 而沒有取倒數 5/2。",
        // EN (option D): You substituted (2, −1) with the wrong signs: 5(2) − 2(−1) = 12, so 5x − 2y = 12, giving 5x − 2y − 12 = 0.
        "3": "你代入 (2, −1) 時搞錯了正負號：5(2) − 2(−1) = 12，所以 5x − 2y = 12，即 5x − 2y − 12 = 0。",
      },
    },

    // ── t2-1-q002 · numeric · foundation · SL · SL 2.1 · 3 marks
    "t2-1-q002": {
      // EN: <p>The perpendicular bisector of the line segment joining <span class="chem">A(-1, 4)</span> and <span class="chem">B(5, 8)</span> intersects the <span class="chem">x</span>-axis at <span class="chem">(a, 0)</span>. Find the exact value of <span class="chem">a</span>.</p>
      stem: "<p>連接 <span class=\"chem\">A(-1, 4)</span> 與 <span class=\"chem\">B(5, 8)</span> 的線段之垂直平分線與 <span class=\"chem\">x</span> 軸相交於 <span class=\"chem\">(a, 0)</span>。求 (Find) <span class=\"chem\">a</span> 的準確值。</p>",
      hints: [
        // EN: Find the midpoint <span class="chem">M</span> of <span class="chem">A(-1, 4)</span> and <span class="chem">B(5, 8)</span> and the gradient <span class="chem">m_{AB}</span>.
        "求 <span class=\"chem\">A(-1, 4)</span> 與 <span class=\"chem\">B(5, 8)</span> 的中點 <span class=\"chem\">M</span> 及斜率 <span class=\"chem\">m_{AB}</span>。",
        // EN: With <span class="chem">M(2, 6)</span> and <span class="chem">m_perp = -3/2</span>, substitute <span class="chem">y = 0</span> into <span class="chem">y - 6 = (-3/2)(x - 2)</span>.
        "利用 <span class=\"chem\">M(2, 6)</span> 及 <span class=\"chem\">m_perp = -3/2</span>，把 <span class=\"chem\">y = 0</span> 代入 <span class=\"chem\">y - 6 = (-3/2)(x - 2)</span>。",
      ],
      // EN: <p>Midpoint <span class="chem">M = ((-1+5)/2, (4+8)/2) = (2, 6)</span>. Gradient <span class="chem">m_{AB} = (8 - 4)/(5 - (-1)) = 4/6 = 2/3</span>, so <span class="chem">m_perp = -3/2</span>. The perpendicular bisector is <span class="chem">y - 6 = (-3/2)(x - 2)</span>. Setting <span class="chem">y = 0</span> gives <span class="chem">-6 = (-3/2)(a - 2) => a - 2 = 4 => a = 6</span>.</p>
      solution: "<p>中點 <span class=\"chem\">M = ((-1+5)/2, (4+8)/2) = (2, 6)</span>。斜率 <span class=\"chem\">m_{AB} = (8 - 4)/(5 - (-1)) = 4/6 = 2/3</span>，故 <span class=\"chem\">m_perp = -3/2</span>。垂直平分線方程為 <span class=\"chem\">y - 6 = (-3/2)(x - 2)</span>。代入 <span class=\"chem\">y = 0</span> 得 <span class=\"chem\">-6 = (-3/2)(a - 2) => a - 2 = 4 => a = 6</span>。</p>",
    },

    // ── t2-1-q003 · mcq · foundation · SL · SL 2.2 · 2 marks
    "t2-1-q003": {
      // EN: <p>What is the largest possible real domain of the function <span class="chem">f(x) = sqrt(10 - 2x) / (x - 2)</span>?</p>
      stem: "<p>函數 <span class=\"chem\">f(x) = sqrt(10 - 2x) / (x - 2)</span> 的最大可能實數定義域是甚麼？</p>",
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
        "檢查兩項定義域限制：分子平方根內的被開方數必須 <span class=\"chem\">&gt;= 0</span>，而分母必須 <span class=\"chem\">!= 0</span>。",
      ],
      // EN: <p>For the square root in the numerator, <span class="chem">10 - 2x &gt;= 0 => 2x &lt;= 10 => x &lt;= 5</span>. For the denominator, <span class="chem">x - 2 != 0 => x != 2</span>. Since <span class="chem">2 &lt;= 5</span>, we must explicitly exclude <span class="chem">x = 2</span>, giving <span class="chem">x &lt;= 5, x != 2</span>.</p>
      solution: "<p>對於分子中的平方根，<span class=\"chem\">10 - 2x &gt;= 0 => 2x &lt;= 10 => x &lt;= 5</span>。對於分母，<span class=\"chem\">x - 2 != 0 => x != 2</span>。由於 <span class=\"chem\">2 &lt;= 5</span>，我們必須明確剔除 <span class=\"chem\">x = 2</span>，得 <span class=\"chem\">x &lt;= 5, x != 2</span>。</p>",
      misconception: {
        // EN (option B): The square root is in the numerator, not the denominator, so 10 − 2x = 0 (x = 5) is allowed.
        "1": "平方根在分子而非分母，因此 10 − 2x = 0（即 x = 5）是容許的。",
        // EN (option C): When dividing 10 ≥ 2x by −2, you forgot to reverse the inequality sign to x ≤ 5.
        "2": "把 10 ≥ 2x 兩邊同除以 −2 時，忘記把不等號方向倒轉為 x ≤ 5。",
        // EN (option D): You checked the square root 10 − 2x ≥ 0 (x ≤ 5), but forgot to exclude x = 2 where the denominator x − 2 equals zero.
        "3": "你檢查了平方根 10 − 2x ≥ 0 (x ≤ 5)，但忘記剔除使分母 x − 2 等於零的 x = 2。",
      },
    },

    // ── t2-1-q004 · mcq · exam · SL · SL 2.2 · 3 marks
    "t2-1-q004": {
      // EN: <p>The function <span class="chem">f(x) = -(x - 2)^2 + 9</span> is defined on the restricted domain <span class="chem">-1 &lt;= x &lt;= 4</span>. What is the range of <span class="chem">f</span>?</p>
      stem: "<p>函數 <span class=\"chem\">f(x) = -(x - 2)^2 + 9</span> 定義於受限定義域 <span class=\"chem\">-1 &lt;= x &lt;= 4</span>。<span class=\"chem\">f</span> 的值域是甚麼？</p>",
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
        "切勿只代入端點來求二次函數的值域！檢查頂點 <span class=\"chem\">x = 2</span> 是否位於 <span class=\"chem\">[-1, 4]</span> 內。",
        // EN: Evaluate <span class="chem">f(-1)</span>, <span class="chem">f(2)</span> (vertex), and <span class="chem">f(4)</span>, then take the minimum and maximum of those values.
        "計算 <span class=\"chem\">f(-1)</span>、<span class=\"chem\">f(2)</span>（頂點）及 <span class=\"chem\">f(4)</span>，再取這些值的最小值與最大值。",
      ],
      // EN: <p>The graph is a downward-opening parabola with vertex at <span class="chem">(2, 9)</span>. Since <span class="chem">x = 2</span> lies inside <span class="chem">[-1, 4]</span>, the maximum output is <span class="chem">f(2) = 9</span>. Checking the endpoints gives <span class="chem">f(-1) = -(-3)^2 + 9 = 0</span> and <span class="chem">f(4) = -(2)^2 + 9 = 5</span>. Hence the minimum is <span class="chem">0</span> and the range is <span class="chem">0 &lt;= f(x) &lt;= 9</span>.</p>
      solution: "<p>圖像為開口向下的拋物線，頂點在 <span class=\"chem\">(2, 9)</span>。由於 <span class=\"chem\">x = 2</span> 位於 <span class=\"chem\">[-1, 4]</span> 內，最大輸出為 <span class=\"chem\">f(2) = 9</span>。檢查端點得 <span class=\"chem\">f(-1) = -(-3)^2 + 9 = 0</span> 及 <span class=\"chem\">f(4) = -(2)^2 + 9 = 5</span>。因此最小值為 <span class=\"chem\">0</span>，值域為 <span class=\"chem\">0 &lt;= f(x) &lt;= 9</span>。</p>",
      misconception: {
        // EN (option B): You only plugged in the two endpoints f(−1) = 0 and f(4) = 5, missing the maximum vertex (2, 9) which lies inside [−1, 4]!
        "1": "你只代入了兩個端點 f(−1) = 0 與 f(4) = 5，漏掉了位於 [−1, 4] 內的最高頂點 (2, 9)！",
        // EN (option C): You evaluated the right endpoint f(4) = 5 and the vertex f(2) = 9, but missed the lower value at the left endpoint f(−1) = 0.
        "2": "你計算了右端點 f(4) = 5 與頂點 f(2) = 9，但漏掉了左端點更低的值 f(−1) = 0。",
        // EN (option D): You gave the range over all real numbers x ∈ ℝ instead of restricting to −1 ≤ x ≤ 4.
        "3": "你寫出了在全體實數 x ∈ ℝ 上的值域，而非受限於 −1 ≤ x ≤ 4 的值域。",
      },
    },

    // ── t2-1-q005 · numeric · foundation · SL · SL 2.5 · 2 marks
    "t2-1-q005": {
      // EN: <p>Let <span class="chem">f(x) = 3x - 4</span> and <span class="chem">g(x) = x^2 + 1</span>. Calculate the value of <span class="chem">(g ∘ f)(2)</span>.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = 3x - 4</span> 及 <span class=\"chem\">g(x) = x^2 + 1</span>。計算 (Calculate) <span class=\"chem\">(g ∘ f)(2)</span> 的值。</p>",
      hints: [
        // EN: In <span class="chem">(g ∘ f)(2) = g(f(2))</span>, evaluate the inner function <span class="chem">f(2)</span> first.
        "在 <span class=\"chem\">(g ∘ f)(2) = g(f(2))</span> 中，先計算內層函數 <span class=\"chem\">f(2)</span>。",
        // EN: Once you have <span class="chem">f(2) = 2</span>, substitute that output into <span class="chem">g(x) = x^2 + 1</span>.
        "求得 <span class=\"chem\">f(2) = 2</span> 後，把該輸出代入 <span class=\"chem\">g(x) = x^2 + 1</span>。",
      ],
      // EN: <p>Working inside-out: <span class="chem">f(2) = 3(2) - 4 = 2</span>. Then <span class="chem">(g ∘ f)(2) = g(f(2)) = g(2) = 2^2 + 1 = 5</span>.</p>
      solution: "<p>由內而外運算：<span class=\"chem\">f(2) = 3(2) - 4 = 2</span>。然後 <span class=\"chem\">(g ∘ f)(2) = g(f(2)) = g(2) = 2^2 + 1 = 5</span>。</p>",
    },

    // ── t2-1-q006 · numeric · exam · SL · SL 2.2 · 3 marks
    "t2-1-q006": {
      // EN: <p>A one-to-one function <span class="chem">f</span> is defined by <span class="chem">f(x) = x^3 + 2x - 1</span> for <span class="chem">x in R</span>. Find the value of <span class="chem">f^{-1}(11)</span>.</p>
      stem: "<p>一對一函數 <span class=\"chem\">f</span> 定義為 <span class=\"chem\">f(x) = x^3 + 2x - 1</span>（<span class=\"chem\">x in R</span>）。求 (Find) <span class=\"chem\">f^{-1}(11)</span> 的值。</p>",
      hints: [
        // EN: Do not try to invert a cubic formula! Remember that <span class="chem">f^{-1}(11) = x</span> means <span class="chem">f(x) = 11</span>.
        "不要嘗試硬求三次函數的反函數！緊記 <span class=\"chem\">f^{-1}(11) = x</span> 即表示 <span class=\"chem\">f(x) = 11</span>。",
        // EN: Test small integer values of <span class="chem">x</span> in <span class="chem">x^3 + 2x - 1 = 11</span>.
        "把細小的整數 <span class=\"chem\">x</span> 代入 <span class=\"chem\">x^3 + 2x - 1 = 11</span> 測試。",
      ],
      // EN: <p>Let <span class="chem">f^{-1}(11) = x</span>. By definition of the inverse function, <span class="chem">f(x) = 11</span>, so <span class="chem">x^3 + 2x - 1 = 11 => x^3 + 2x - 12 = 0</span>. Testing <span class="chem">x = 2</span> gives <span class="chem">2^3 + 2(2) - 12 = 8 + 4 - 12 = 0</span>. Since <span class="chem">f</span> is strictly increasing, <span class="chem">f^{-1}(11) = 2</span> is the unique solution.</p>
      solution: "<p>設 <span class=\"chem\">f^{-1}(11) = x</span>。根據反函數定義，<span class=\"chem\">f(x) = 11</span>，即 <span class=\"chem\">x^3 + 2x - 1 = 11 => x^3 + 2x - 12 = 0</span>。測試 <span class=\"chem\">x = 2</span> 得 <span class=\"chem\">2^3 + 2(2) - 12 = 8 + 4 - 12 = 0</span>。由於 <span class=\"chem\">f</span> 嚴格遞增，故唯一解為 <span class=\"chem\">f^{-1}(11) = 2</span>。</p>",
    },

    // ── t2-1-q007 · mcq · exam · SL · SL 2.5 · 4 marks
    "t2-1-q007": {
      // EN: <p>The function <span class="chem">f</span> is defined by <span class="chem">f(x) = x^2 - 6x + 11</span> for <span class="chem">x &lt;= 3</span>. Which of the following is the correct expression and domain for <span class="chem">f^{-1}(x)</span>?</p>
      stem: "<p>函數 <span class=\"chem\">f</span> 定義為 <span class=\"chem\">f(x) = x^2 - 6x + 11</span>（<span class=\"chem\">x &lt;= 3</span>）。下列哪一項給出 <span class=\"chem\">f^{-1}(x)</span> 的正確表式與定義域？</p>",
      options: [
        // EN: <span class="chem">f^{-1}(x) = 3 - sqrt(x - 2)</span> for <span class="chem">x &gt;= 2</span>
        "<span class=\"chem\">f^{-1}(x) = 3 - sqrt(x - 2)</span>（<span class=\"chem\">x &gt;= 2</span>）",
        // EN: <span class="chem">f^{-1}(x) = 3 + sqrt(x - 2)</span> for <span class="chem">x &gt;= 2</span>
        "<span class=\"chem\">f^{-1}(x) = 3 + sqrt(x - 2)</span>（<span class=\"chem\">x &gt;= 2</span>）",
        // EN: <span class="chem">f^{-1}(x) = 3 - sqrt(x - 2)</span> for <span class="chem">x &lt;= 3</span>
        "<span class=\"chem\">f^{-1}(x) = 3 - sqrt(x - 2)</span>（<span class=\"chem\">x &lt;= 3</span>）",
        // EN: <span class="chem">f^{-1}(x) = 3 - sqrt(x + 2)</span> for <span class="chem">x &gt;= -2</span>
        "<span class=\"chem\">f^{-1}(x) = 3 - sqrt(x + 2)</span>（<span class=\"chem\">x &gt;= -2</span>）",
      ],
      hints: [
        // EN: First complete the square: <span class="chem">f(x) = (x - 3)^2 + 2</span>. What is the range of <span class="chem">f</span>?
        "先配方：<span class=\"chem\">f(x) = (x - 3)^2 + 2</span>。<span class=\"chem\">f</span> 的值域是甚麼？",
        // EN: Swap <span class="chem">x</span> and <span class="chem">y</span> in <span class="chem">y = (x - 3)^2 + 2</span>, and use <span class="chem">Range(f^{-1}) = Domain(f) = (-infty, 3]</span> to select the negative sign.
        "在 <span class=\"chem\">y = (x - 3)^2 + 2</span> 中對調 <span class=\"chem\">x</span> 與 <span class=\"chem\">y</span>，並利用 <span class=\"chem\">Range(f^{-1}) = Domain(f) = (-infty, 3]</span> 選取負號。",
      ],
      // EN: <p>Completing the square gives <span class="chem">f(x) = (x - 3)^2 + 2</span>. Since <span class="chem">(x - 3)^2 &gt;= 0</span>, the range of <span class="chem">f</span> is <span class="chem">y &gt;= 2</span>, so the domain of <span class="chem">f^{-1}</span> is <span class="chem">x &gt;= 2</span>. Swapping <span class="chem">x</span> and <span class="chem">y</span>: <span class="chem">x = (y - 3)^2 + 2 => y = 3 +- sqrt(x - 2)</span>. Since <span class="chem">Range(f^{-1}) = Domain(f)</span> requires <span class="chem">y &lt;= 3</span>, we must choose the minus sign: <span class="chem">f^{-1}(x) = 3 - sqrt(x - 2)</span> for <span class="chem">x &gt;= 2</span>.</p>
      solution: "<p>配方得 <span class=\"chem\">f(x) = (x - 3)^2 + 2</span>。由於 <span class=\"chem\">(x - 3)^2 &gt;= 0</span>，<span class=\"chem\">f</span> 的值域為 <span class=\"chem\">y &gt;= 2</span>，故 <span class=\"chem\">f^{-1}</span> 的定義域為 <span class=\"chem\">x &gt;= 2</span>。對調 <span class=\"chem\">x</span> 與 <span class=\"chem\">y</span>：<span class=\"chem\">x = (y - 3)^2 + 2 => y = 3 +- sqrt(x - 2)</span>。由於 <span class=\"chem\">Range(f^{-1}) = Domain(f)</span> 要求 <span class=\"chem\">y &lt;= 3</span>，必須選取負號：<span class=\"chem\">f^{-1}(x) = 3 - sqrt(x - 2)</span>（<span class=\"chem\">x &gt;= 2</span>）。</p>",
      misconception: {
        // EN (option B): You chose the positive square root +√(x − 2). Because Domain(f) is x ≤ 3, Range(f⁻¹) must be y ≤ 3, which requires 3 − √(x − 2).
        "1": "你選了正平方根 +√(x − 2)。由於 Domain(f) 為 x ≤ 3，Range(f⁻¹) 必須為 y ≤ 3，故應取 3 − √(x − 2)。",
        // EN (option C): You found the right formula for f⁻¹(x), but forgot that Domain(f⁻¹) = Range(f) = [2, ∞), not Domain(f).
        "2": "你找對了 f⁻¹(x) 的公式，但忘記了 Domain(f⁻¹) = Range(f) = [2, ∞)，而不是 Domain(f)。",
        // EN (option D): When completing the square on x² − 6x + 11 = (x − 3)² − 9 + 11, the vertex k-value is +2, not −2.
        "3": "對 x² − 6x + 11 = (x − 3)² − 9 + 11 配方時，頂點的 k 值為 +2，而非 −2。",
      },
    },

    // ── t2-1-q008 · multi · exam · SL · SL 2.2 · 3 marks
    "t2-1-q008": {
      // EN: <p>Let <span class="chem">f</span> be a one-to-one function with domain <span class="chem">[-2, 5]</span> and range <span class="chem">[1, 10]</span>. Which of the following statements <strong>must</strong> be true for its inverse function <span class="chem">f^{-1}</span>?</p>
      stem: "<p>設 <span class=\"chem\">f</span> 為一個一對一函數，定義域為 <span class=\"chem\">[-2, 5]</span>，值域為 <span class=\"chem\">[1, 10]</span>。對於其反函數 <span class=\"chem\">f^{-1}</span>，下列哪些陳述<strong>必定</strong>正確？</p>",
      options: [
        // EN: The domain of <span class="chem">f^{-1}</span> is <span class="chem">[1, 10]</span> and the range of <span class="chem">f^{-1}</span> is <span class="chem">[-2, 5]</span>.
        "<span class=\"chem\">f^{-1}</span> 的定義域為 <span class=\"chem\">[1, 10]</span>，而 <span class=\"chem\">f^{-1}</span> 的值域為 <span class=\"chem\">[-2, 5]</span>。",
        // EN: The graph of <span class="chem">y = f^{-1}(x)</span> is the reflection of the graph of <span class="chem">y = f(x)</span> in the line <span class=\"chem">y = x</span>.
        "<span class=\"chem\">y = f^{-1}(x)</span> 的圖像是 <span class=\"chem\">y = f(x)</span> 的圖像沿直線 <span class=\"chem\">y = x</span> 的反射。",
        // EN: For every <span class="chem">x in [-2, 5]</span>, <span class="chem">(f^{-1} ∘ f)(x) = x</span>.
        "對每個 <span class=\"chem\">x in [-2, 5]</span>，<span class=\"chem\">(f^{-1} ∘ f)(x) = x</span>。",
        // EN: For every <span class="chem">x in [-2, 5]</span>, <span class="chem">f^{-1}(x) = 1 / f(x)</span>.
        "對每個 <span class=\"chem\">x in [-2, 5]</span>，<span class=\"chem\">f^{-1}(x) = 1 / f(x)</span>。",
      ],
      hints: [
        // EN: Check the three core properties of inverse functions: domain-range swap, reflection in <span class="chem">y = x</span>, and identity composition <span class="chem">f^{-1}(f(x)) = x</span>.
        "檢查反函數的三個核心性質：定義域與值域互換、沿 <span class=\"chem\">y = x</span> 反射，以及恒等複合 <span class=\"chem\">f^{-1}(f(x)) = x</span>。",
      ],
      // EN: <p>Statements A, B, and C are fundamental properties of every inverse function: <span class="chem">Domain(f^{-1}) = Range(f) = [1, 10]</span>, <span class="chem">Range(f^{-1}) = Domain(f) = [-2, 5]</span>, the graph reflects across <span class="chem">y = x</span>, and <span class="chem">(f^{-1} ∘ f)(x) = x</span> on <span class="chem">Domain(f)</span>. Statement D confuses the inverse function <span class="chem">f^{-1}(x)</span> with the reciprocal <span class="chem">[f(x)]^{-1} = 1/f(x)</span>.</p>
      solution: "<p>陳述 A、B、C 均為每個反函數的基本性質：<span class=\"chem\">Domain(f^{-1}) = Range(f) = [1, 10]</span>、<span class=\"chem\">Range(f^{-1}) = Domain(f) = [-2, 5]</span>、圖像沿 <span class=\"chem\">y = x</span> 反射，以及在 <span class=\"chem\">Domain(f)</span> 上滿足 <span class=\"chem\">(f^{-1} ∘ f)(x) = x</span>。陳述 D 把反函數 <span class=\"chem\">f^{-1}(x)</span> 與倒數 <span class=\"chem\">[f(x)]^{-1} = 1/f(x)</span> 混淆了。</p>",
      misconception: {
        // EN (option D): f⁻¹(x) denotes the inverse mapping that reverses input and output, never the reciprocal 1 / f(x).
        "3": "f⁻¹(x) 代表對調輸入與輸出的反函數映射，絕不是倒數 1 / f(x)。",
      },
    },

    // ── t2-1-q009 · order · foundation · SL · SL 2.5 · 3 marks
    "t2-1-q009": {
      // EN: <p>Arrange the following algebraic steps in logical order to find the inverse function <span class="chem">f^{-1}(x)</span> of <span class="chem">f(x) = (2x + 1)/(x - 3)</span> for <span class="chem">x != 3</span>.</p>
      stem: "<p>把下列代數步驟按邏輯順序排列，以求 <span class=\"chem\">f(x) = (2x + 1)/(x - 3)</span>（<span class=\"chem\">x != 3</span>）的反函數 <span class=\"chem\">f^{-1}(x)</span>。</p>",
      options: [
        // EN: Write <span class="chem">y = (2x + 1)/(x - 3)</span> and swap <span class="chem">x</span> and <span class="chem">y</span> to get <span class="chem">x = (2y + 1)/(y - 3)</span>.
        "寫出 <span class=\"chem\">y = (2x + 1)/(x - 3)</span> 並對調 <span class=\"chem\">x</span> 與 <span class=\"chem\">y</span>，得 <span class=\"chem\">x = (2y + 1)/(y - 3)</span>。",
        // EN: Multiply both sides by <span class="chem">(y - 3)</span> and expand: <span class="chem">xy - 3x = 2y + 1</span>.
        "兩邊同乘 <span class=\"chem\">(y - 3)</span> 並展開：<span class=\"chem\">xy - 3x = 2y + 1</span>。",
        // EN: Collect all terms containing <span class="chem">y</span> on one side and factor out <span class="chem">y</span>: <span class="chem">y(x - 2) = 3x + 1</span>.
        "把所有含 <span class=\"chem\">y</span> 的項移至同一邊並抽出 <span class=\"chem\">y</span>：<span class=\"chem\">y(x - 2) = 3x + 1</span>。",
        // EN: Divide by <span class="chem">(x - 2)</span> to obtain <span class="chem">f^{-1}(x) = (3x + 1)/(x - 2)</span> for <span class="chem">x != 2</span>.
        "除以 <span class=\"chem\">(x - 2)</span> 得 <span class=\"chem\">f^{-1}(x) = (3x + 1)/(x - 2)</span>（<span class=\"chem\">x != 2</span>）。",
      ],
      hints: [
        // EN: Start by swapping <span class="chem">x</span> and <span class="chem">y</span>, clear the fraction, group all <span class="chem">y</span>-terms together so you can factor out <span class="chem">y</span>, and finally divide.
        "先對調 <span class=\"chem\">x</span> 與 <span class=\"chem\">y</span>，去分母，把所有含 <span class=\"chem\">y</span> 的項集合並抽出 <span class=\"chem\">y</span>，最後相除。",
      ],
      // EN: <p>To isolate <span class="chem">y</span> when it appears in both numerator and denominator, swap <span class="chem">x</span> and <span class="chem">y</span>, multiply by the denominator <span class="chem">(y - 3)</span>, collect the <span class="chem">y</span> terms on the left (<span class="chem">xy - 2y = 3x + 1</span>), factor out <span class="chem">y</span> as <span class="chem">y(x - 2) = 3x + 1</span>, and divide by <span class="chem">(x - 2)</span>.</p>
      solution: "<p>當 <span class=\"chem\">y</span> 同時出現在分子與分母時，先對調 <span class=\"chem\">x</span> 與 <span class=\"chem\">y</span>，乘以分母 <span class=\"chem\">(y - 3)</span>，把 <span class=\"chem\">y</span> 項移到左方（<span class=\"chem\">xy - 2y = 3x + 1</span>），抽出 <span class=\"chem\">y</span> 得 <span class=\"chem\">y(x - 2) = 3x + 1</span>，再除以 <span class=\"chem\">(x - 2)</span>。</p>",
    },

    // ── t2-1-q010 · numeric · exam · SL · SL 2.5 · 4 marks
    "t2-1-q010": {
      // EN: <p>Let <span class="chem">f(x) = (x - 1)^2 - 1</span> for <span class="chem">x &gt;= 1</span>. The graphs of <span class="chem">y = f(x)</span> and <span class="chem">y = f^{-1}(x)</span> intersect at a single point <span class="chem">(a, a)</span> with <span class="chem">a &gt; 0</span>. Find the exact value of <span class="chem">a</span>.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = (x - 1)^2 - 1</span>（<span class=\"chem\">x &gt;= 1</span>）。<span class=\"chem\">y = f(x)</span> 與 <span class=\"chem\">y = f^{-1}(x)</span> 的圖像相交於單一點 <span class=\"chem\">(a, a)</span>（其中 <span class=\"chem\">a &gt; 0</span>）。求 (Find) <span class=\"chem\">a</span> 的準確值。</p>",
      hints: [
        // EN: Because <span class="chem">f</span> is increasing for <span class="chem">x &gt;= 1</span>, the intersection of <span class="chem">y = f(x)</span> and <span class="chem">y = f^{-1}(x)</span> lies on the mirror line <span class="chem">y = x</span>.
        "因為 <span class=\"chem\">f</span> 在 <span class=\"chem\">x &gt;= 1</span> 上遞增，所以 <span class=\"chem\">y = f(x)</span> 與 <span class=\"chem\">y = f^{-1}(x)</span> 的交點位於鏡線 <span class=\"chem\">y = x</span> 上。",
        // EN: Solve <span class="chem">f(x) = x</span>, i.e., <span class="chem">(x - 1)^2 - 1 = x</span>, and keep the root that satisfies <span class="chem">x &gt;= 1</span>.
        "解 <span class=\"chem\">f(x) = x</span>，即 <span class=\"chem\">(x - 1)^2 - 1 = x</span>，並保留滿足 <span class=\"chem\">x &gt;= 1</span> 的根。",
      ],
      // EN: <p>Instead of equating <span class="chem">f(x)</span> to <span class="chem">f^{-1}(x) = 1 + sqrt(x + 1)</span>, solve <span class="chem">f(x) = x</span> along the mirror line <span class="chem">y = x</span>: <span class="chem">(x - 1)^2 - 1 = x => x^2 - 2x + 1 - 1 - x = 0 => x^2 - 3x = 0 => x(x - 3) = 0</span>. Since the domain of <span class="chem">f</span> is <span class="chem">x &gt;= 1</span>, we reject <span class="chem">x = 0</span> and obtain <span class="chem">a = 3</span>.</p>
      solution: "<p>與其令 <span class=\"chem\">f(x)</span> 等於 <span class=\"chem\">f^{-1}(x) = 1 + sqrt(x + 1)</span>，不如在鏡線 <span class=\"chem\">y = x</span> 上解 <span class=\"chem\">f(x) = x</span>：<span class=\"chem\">(x - 1)^2 - 1 = x => x^2 - 2x + 1 - 1 - x = 0 => x^2 - 3x = 0 => x(x - 3) = 0</span>。由於 <span class=\"chem\">f</span> 的定義域為 <span class=\"chem\">x &gt;= 1</span>，捨去 <span class=\"chem\">x = 0</span>，得 <span class=\"chem\">a = 3</span>。</p>",
    },

    // ── t2-1-q011 · mcq · exam · SL · SL 2.5 · 4 marks
    "t2-1-q011": {
      // EN: <p>Let <span class="chem">f(x) = ln(x - 4)</span> for <span class="chem">x &gt; 4</span> and <span class="chem">g(x) = x^2 + k</span> for <span class="chem">x in R</span>. Find the set of values of the constant <span class="chem">k</span> for which the composite function <span class="chem">(f ∘ g)(x)</span> is defined for <strong>all</strong> real numbers <span class="chem">x in R</span>.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = ln(x - 4)</span>（<span class=\"chem\">x &gt; 4</span>）及 <span class=\"chem\">g(x) = x^2 + k</span>（<span class=\"chem\">x in R</span>）。求 (Find) 使複合函數 <span class=\"chem\">(f ∘ g)(x)</span> 對<strong>所有</strong>實數 <span class=\"chem\">x in R</span> 均有定義的常數 <span class=\"chem\">k</span> 的值範圍。</p>",
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
        "為使 <span class=\"chem\">(f ∘ g)(x) = f(g(x))</span> 對所有 <span class=\"chem\">x in R</span> 有定義，必須滿足 <span class=\"chem\">Range(g)</span> 是 <span class=\"chem\">Domain(f) = (4, infty)</span> 的子集。",
        // EN: What is the minimum value of <span class="chem">g(x) = x^2 + k</span> for <span class="chem">x in R</span>?
        "<span class=\"chem\">g(x) = x^2 + k</span> 在 <span class=\"chem\">x in R</span> 上的最小值是多少？",
      ],
      // EN: <p>The domain of <span class="chem">f</span> is <span class="chem">(4, infty)</span>. For <span class="chem">g(x) = x^2 + k</span> with <span class="chem">x in R</span>, the range of <span class="chem">g</span> is <span class="chem">[k, infty)</span> (minimum value <span class="chem">k</span> at <span class="chem">x = 0</span>). Requiring <span class="chem">Range(g) subset Domain(f)</span> means every output in <span class="chem">[k, infty)</span> must be strictly greater than <span class="chem">4</span>, so <span class="chem">k &gt; 4</span>.</p>
      solution: "<p><span class=\"chem\">f</span> 的定義域為 <span class=\"chem\">(4, infty)</span>。對於 <span class=\"chem\">g(x) = x^2 + k</span>（<span class=\"chem\">x in R</span>），<span class=\"chem\">g</span> 的值域為 <span class=\"chem\">[k, infty)</span>（最小值 <span class=\"chem\">k</span> 出現在 <span class=\"chem\">x = 0</span>）。要求 <span class=\"chem\">Range(g) subset Domain(f)</span>，即 <span class=\"chem\">[k, infty)</span> 內的每個輸出都必須嚴格大於 <span class=\"chem\">4</span>，因此 <span class=\"chem\">k &gt; 4</span>。</p>",
      misconception: {
        // EN (option B): If k = 4, then at x = 0 we get g(0) = 4, and f(4) = ln(4 − 4) = ln(0), which is undefined! The inequality must be strict: k > 4.
        "1": "若 k = 4，當 x = 0 時 g(0) = 4，則 f(4) = ln(4 − 4) = ln(0)，無定義！不等式必須嚴格大於：k > 4。",
        // EN (option C): You checked that g(x) > 0 instead of checking the actual domain of f, which is u > 4.
        "2": "你檢查了 g(x) > 0，而沒有檢查 f 真正的定義域 u > 4。",
        // EN (option D): You reversed the inequality sign when requiring the minimum of g(x) to exceed 4.
        "3": "在要求 g(x) 的最小值大於 4 時，把不等號方向倒轉了。",
      },
    },

    // ── t2-1-q012 · numeric · exam · SL · SL 2.2 · 3 marks
    "t2-1-q012": {
      // EN: <p>Let <span class="chem">f(x) = 2x^2 - 12x + 23</span> for <span class="chem">x &gt;= k</span>. Find the <strong>smallest</strong> possible value of <span class="chem">k</span> such that the inverse function <span class="chem">f^{-1}</span> exists.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = 2x^2 - 12x + 23</span>（<span class=\"chem\">x &gt;= k</span>）。求 (Find) 使反函數 <span class=\"chem\">f^{-1}</span> 存在的<strong>最小</strong>可能 <span class=\"chem\">k</span> 值。</p>",
      hints: [
        // EN: A quadratic function is one-to-one on <span class="chem">x &gt;= k</span> if and only if <span class="chem">k</span> is at or to the right of the axis of symmetry (the vertex <span class="chem">x</span>-coordinate).
        "二次函數在 <span class=\"chem\">x &gt;= k</span> 上為一對一，當且僅當 <span class=\"chem\">k</span> 位於對稱軸（頂點的 <span class=\"chem\">x</span> 坐標）或其右方。",
        // EN: Use <span class="chem">x = -b / (2a)</span> from your Formula Booklet.
        "使用公式手冊中的 <span class=\"chem\">x = -b / (2a)</span>。",
      ],
      // EN: <p>For <span class="chem">f(x) = 2x^2 - 12x + 23</span> to be one-to-one on <span class="chem">x &gt;= k</span>, the domain cannot extend to both sides of the vertex. The axis of symmetry is <span class="chem">x = -b/(2a) = -(-12)/(2 × 2) = 3</span>. Thus <span class="chem">f</span> is one-to-one for any <span class="chem">k &gt;= 3</span>, so the smallest value of <span class="chem">k</span> is <span class="chem">3</span>.</p>
      solution: "<p>要使 <span class=\"chem\">f(x) = 2x^2 - 12x + 23</span> 在 <span class=\"chem\">x &gt;= k</span> 上為一對一，定義域不能橫跨頂點兩側。對稱軸為 <span class=\"chem\">x = -b/(2a) = -(-12)/(2 × 2) = 3</span>。因此對任何 <span class=\"chem\">k &gt;= 3</span>，<span class=\"chem\">f</span> 皆為一對一，故 <span class=\"chem\">k</span> 的最小值為 <span class=\"chem\">3</span>。</p>",
    },

    // ── t2-1-q013 · numeric · exam · SL · SL 2.4 · 3 marks
    "t2-1-q013": {
      // EN: <p>Consider the function <span class="chem">f(x) = x e^{-0.5x}</span> for <span class="chem">x &gt;= 0</span>. Using your GDC or otherwise, find the maximum value in the range of <span class="chem">f</span>, giving your answer to 3 significant figures.</p>
      stem: "<p>考慮函數 <span class=\"chem\">f(x) = x e^{-0.5x}</span>（<span class=\"chem\">x &gt;= 0</span>）。使用你的 GDC 或其他方法，求 (find) <span class=\"chem\">f</span> 值域中的最大值，答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Graph <span class="chem">y = x e^{-0.5x}</span> on your GDC for <span class="chem">x &gt;= 0</span> and locate the local maximum.
        "在 GDC 上繪出 <span class=\"chem\">y = x e^{-0.5x}</span>（<span class=\"chem\">x &gt;= 0</span>）的圖像並找出局部極大值。",
        // EN: The maximum occurs at <span class="chem">x = 2</span>, where <span class="chem">f(2) = 2 e^{-1} = 2/e</span>.
        "最大值出現在 <span class=\"chem\">x = 2</span>，該處 <span class=\"chem\">f(2) = 2 e^{-1} = 2/e</span>。",
      ],
      // EN: <p>Graphing <span class="chem">y = x e^{-0.5x}</span> on a GDC (or setting <span class="chem">f'(x) = (1 - 0.5x)e^{-0.5x} = 0</span>) shows a local maximum at <span class="chem">x = 2</span> with value <span class="chem">f(2) = 2e^{-1} ≈ 0.73576 = 0.736</span> (3 s.f.). Since <span class="chem">f(0) = 0</span> and <span class="chem">f(x) -&gt; 0</span> as <span class="chem">x -&gt; infty</span>, the maximum value in the range is <span class="chem">0.736</span>.</p>
      solution: "<p>在 GDC 上繪出 <span class=\"chem\">y = x e^{-0.5x}</span>（或令 <span class=\"chem\">f'(x) = (1 - 0.5x)e^{-0.5x} = 0</span>），顯示局部極大值在 <span class=\"chem\">x = 2</span>，其值為 <span class=\"chem\">f(2) = 2e^{-1} ≈ 0.73576 = 0.736</span>（3 位有效數字）。由於 <span class=\"chem\">f(0) = 0</span> 且當 <span class=\"chem\">x -&gt; infty</span> 時 <span class=\"chem\">f(x) -&gt; 0</span>，值域中的最大值為 <span class=\"chem\">0.736</span>。</p>",
    },

    // ── t2-1-q014 · short · exam · SL · SL 2.1 · 5 marks
    "t2-1-q014": {
      // EN: <p>A triangle has vertices at <span class="chem">A(1, 1)</span>, <span class="chem">B(7, 5)</span>, and <span class="chem">C(3, 8)</span>.<br>(a) Find the equation of the perpendicular bisector of side <span class="chem">[AB]</span> in the form <span class="chem">ax + by + d = 0</span>, where <span class="chem">a, b, d in Z</span>. <strong>[3 marks]</strong><br>(b) Determine whether vertex <span class="chem">C(3, 8)</span> is equidistant from <span class="chem">A</span> and <span class="chem">B</span>, justifying your answer. <strong>[2 marks]</strong></p>
      stem: "<p>一個三角形的頂點分別為 <span class=\"chem\">A(1, 1)</span>、<span class=\"chem\">B(7, 5)</span> 及 <span class=\"chem\">C(3, 8)</span>。<br>(a) 求 (Find) 邊 <span class=\"chem\">[AB]</span> 的垂直平分線方程，以 <span class=\"chem\">ax + by + d = 0</span> 形式表示，其中 <span class=\"chem\">a, b, d in Z</span>。<strong>[3 marks]</strong><br>(b) 判斷 (Determine) 頂點 <span class=\"chem\">C(3, 8)</span> 是否與 <span class=\"chem\">A</span> 及 <span class=\"chem\">B</span> 等距，並說明理由。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: For part (a), find the midpoint <span class="chem">M</span> and negative reciprocal gradient of <span class="chem">[AB]</span>.
        "在 (a) 部中，求 <span class=\"chem\">[AB]</span> 的中點 <span class=\"chem\">M</span> 與負倒數斜率。",
        // EN: For part (b), recall that the perpendicular bisector of <span class="chem">[AB]</span> is the exact set of points equidistant from <span class="chem">A</span> and <span class="chem">B</span>!
        "在 (b) 部中，回想 <span class=\"chem\">[AB]</span> 的垂直平分線正是與 <span class=\"chem\">A</span> 及 <span class=\"chem\">B</span> 等距的所有點之集合！",
      ],
      // EN: <p>(a) The midpoint of <span class="chem">[AB]</span> is <span class="chem">M((1+7)/2, (1+5)/2) = (4, 3)</span>. The gradient of <span class="chem">[AB]</span> is <span class="chem">(5-1)/(7-1) = 2/3</span>, so the perpendicular gradient is <span class="chem">-3/2</span>. Thus <span class="chem">y - 3 = (-3/2)(x - 4) => 2y - 6 = -3x + 12 => 3x + 2y - 18 = 0</span>.<br>(b) A point is equidistant from <span class="chem">A</span> and <span class="chem">B</span> if and only if it lies on the perpendicular bisector of <span class="chem">[AB]</span>. Substituting <span class="chem">C(3, 8)</span> gives <span class="chem">3(3) + 2(8) - 18 = 9 + 16 - 18 = 7 != 0</span>, so <span class="chem">C</span> is not equidistant from <span class="chem">A</span> and <span class="chem">B</span>.</p>
      solution: "<p>(a) <span class=\"chem\">[AB]</span> 的中點為 <span class=\"chem\">M((1+7)/2, (1+5)/2) = (4, 3)</span>。<span class=\"chem\">[AB]</span> 的斜率為 <span class=\"chem\">(5-1)/(7-1) = 2/3</span>，故垂直斜率為 <span class=\"chem\">-3/2</span>。因此 <span class=\"chem\">y - 3 = (-3/2)(x - 4) => 2y - 6 = -3x + 12 => 3x + 2y - 18 = 0</span>。<br>(b) 一點與 <span class=\"chem\">A</span> 及 <span class=\"chem\">B</span> 等距，當且僅當該點位於 <span class=\"chem\">[AB]</span> 的垂直平分線上。代入 <span class=\"chem\">C(3, 8)</span> 得 <span class=\"chem\">3(3) + 2(8) - 18 = 9 + 16 - 18 = 7 != 0</span>，故 <span class=\"chem\">C</span> 並非與 <span class=\"chem\">A</span> 及 <span class=\"chem\">B</span> 等距。</p>",
      // EN: <p>(a) <span class="chem">3x + 2y - 18 = 0</span>; (b) Not equidistant because <span class="chem">3(3) + 2(8) - 18 = 7 != 0</span> (so <span class="chem">C</span> does not lie on the perpendicular bisector of <span class="chem">[AB]</span>).</p>
      answer: "<p>(a) <span class=\"chem\">3x + 2y - 18 = 0</span>；(b) 並非等距，因為 <span class=\"chem\">3(3) + 2(8) - 18 = 7 != 0</span>（即 <span class=\"chem\">C</span> 不位於 <span class=\"chem\">[AB]</span> 的垂直平分線上）。</p>",
      markscheme: [
        // EN: A1: Finds midpoint of [AB] as M(4, 3).
        "A1：求得 [AB] 的中點為 M(4, 3)。",
        // EN: M1: Finds gradient m_AB = (5 − 1)/(7 − 1) = 2/3 and takes negative reciprocal m_⊥ = −3/2.
        "M1：求得斜率 m_AB = (5 − 1)/(7 − 1) = 2/3 並取負倒數 m_⊥ = −3/2。",
        // EN: A1: Substitutes into y − 3 = (−3/2)(x − 4) and rearranges to integer general form 3x + 2y − 18 = 0.
        "A1：代入 y − 3 = (−3/2)(x − 4) 並整理為整數一般式 3x + 2y − 18 = 0。",
        // EN: M1: Substitutes C(3, 8) into 3x + 2y − 18 (or computes distances AC = √53 and BC = √25 = 5).
        "M1：把 C(3, 8) 代入 3x + 2y − 18（或計算距離 AC = √53 與 BC = √25 = 5）。",
        // EN: R1: States that since 3(3) + 2(8) − 18 = 7 ≠ 0 (or AC ≠ BC), C is NOT equidistant from A and B.
        "R1：寫明由於 3(3) + 2(8) − 18 = 7 ≠ 0（或 AC ≠ BC），C 並非與 A 及 B 等距。",
      ],
    },

    // ── t2-1-q015 · short · exam · SL · SL 2.5 · 6 marks
    "t2-1-q015": {
      // EN: <p>Let <span class="chem">f(x) = 3x - 2</span> for <span class="chem">x in R</span> and <span class="chem">g(x) = 5 / (x + 1)</span> for <span class="chem">x != -1</span>.<br>(a) Find an expression for <span class="chem">(g ∘ f)(x)</span> and state its largest possible domain. <strong>[3 marks]</strong><br>(b) Solve the equation <span class="chem">(f^{-1} ∘ g)(x) = 2</span>. <strong>[3 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = 3x - 2</span>（<span class=\"chem\">x in R</span>）及 <span class=\"chem\">g(x) = 5 / (x + 1)</span>（<span class=\"chem\">x != -1</span>）。<br>(a) 求 (Find) <span class=\"chem\">(g ∘ f)(x)</span> 的表式，並寫出 (state) 其最大可能定義域。<strong>[3 marks]</strong><br>(b) 解 (Solve) 方程 <span class=\"chem\">(f^{-1} ∘ g)(x) = 2</span>。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: For part (a), replace <span class="chem">x</span> in <span class="chem">g(x) = 5/(x + 1)</span> with <span class="chem">(3x - 2)</span>.
        "在 (a) 部中，把 <span class=\"chem\">g(x) = 5/(x + 1)</span> 中的 <span class=\"chem\">x</span> 替換為 <span class=\"chem\">(3x - 2)</span>。",
        // EN: For part (b), apply <span class="chem">f</span> to both sides of <span class="chem">f^{-1}(g(x)) = 2</span> to get <span class="chem">g(x) = f(2)</span> immediately!
        "在 (b) 部中，對 <span class=\"chem\">f^{-1}(g(x)) = 2</span> 兩邊同時作用 <span class=\"chem\">f</span>，立即得 <span class=\"chem\">g(x) = f(2)</span>！",
      ],
      // EN: <p>(a) <span class="chem">(g ∘ f)(x) = g(3x - 2) = 5 / ((3x - 2) + 1) = 5 / (3x - 1)</span>, which is defined for all real <span class="chem">x != 1/3</span>.<br>(b) Applying <span class="chem">f</span> to both sides of <span class="chem">f^{-1}(g(x)) = 2</span> gives <span class="chem">g(x) = f(2) = 3(2) - 2 = 4</span>. Therefore <span class="chem">5 / (x + 1) = 4 => x + 1 = 5/4 => x = 1/4</span>.</p>
      solution: "<p>(a) <span class=\"chem\">(g ∘ f)(x) = g(3x - 2) = 5 / ((3x - 2) + 1) = 5 / (3x - 1)</span>，對所有實數 <span class=\"chem\">x != 1/3</span> 有定義。<br>(b) 對 <span class=\"chem\">f^{-1}(g(x)) = 2</span> 兩邊同時作用 <span class=\"chem\">f</span> 得 <span class=\"chem\">g(x) = f(2) = 3(2) - 2 = 4</span>。因此 <span class=\"chem\">5 / (x + 1) = 4 => x + 1 = 5/4 => x = 1/4</span>。</p>",
      // EN: <p>(a) <span class="chem">(g ∘ f)(x) = 5 / (3x - 1)</span> with domain <span class="chem">x != 1/3</span>; (b) <span class="chem">x = 1/4</span> (or <span class="chem">0.25</span>).</p>
      answer: "<p>(a) <span class=\"chem\">(g ∘ f)(x) = 5 / (3x - 1)</span>，定義域為 <span class=\"chem\">x != 1/3</span>；(b) <span class=\"chem\">x = 1/4</span>（或 <span class=\"chem\">0.25</span>）。</p>",
      markscheme: [
        // EN: M1: Substitutes f(x) into g(x) to write g(3x − 2) = 5 / ((3x − 2) + 1).
        "M1：把 f(x) 代入 g(x)，寫出 g(3x − 2) = 5 / ((3x − 2) + 1)。",
        // EN: A1: Simplifies to (g ∘ f)(x) = 5 / (3x − 1).
        "A1：化簡為 (g ∘ f)(x) = 5 / (3x − 1)。",
        // EN: A1: States domain x ≠ 1/3 (x ∈ ℝ, x ≠ 1/3).
        "A1：寫出定義域 x ≠ 1/3（x ∈ ℝ, x ≠ 1/3）。",
        // EN: M1: Applies f to both sides of f⁻¹(g(x)) = 2 to write g(x) = f(2) (or finds f⁻¹(u) = (u + 2)/3 and sets (g(x) + 2)/3 = 2).
        "M1：對 f⁻¹(g(x)) = 2 兩邊作用 f 得 g(x) = f(2)（或求 f⁻¹(u) = (u + 2)/3 並設 (g(x) + 2)/3 = 2）。",
        // EN: A1: Evaluates g(x) = 3(2) − 2 = 4, so 5 / (x + 1) = 4.
        "A1：計出 g(x) = 3(2) − 2 = 4，即 5 / (x + 1) = 4。",
        // EN: A1: Solves x + 1 = 5/4 to get x = 1/4.
        "A1：解 x + 1 = 5/4 得 x = 1/4。",
      ],
    },

    // ── t2-1-q016 · numeric · challenge · SL · SL 2.5 · 4 marks
    "t2-1-q016": {
      // EN: <p>The rational function <span class="chem">f(x) = (kx + 5)/(2x - 6)</span> (<span class="chem">x != 3</span>) is a <strong>self-inverse function</strong>, meaning that <span class="chem">f^{-1}(x) = f(x)</span> for all <span class="chem">x</span> in its domain. Find the value of the constant <span class="chem">k</span>.</p>
      stem: "<p>有理函數 <span class=\"chem\">f(x) = (kx + 5)/(2x - 6)</span>（<span class=\"chem\">x != 3</span>）是一個<strong>自反函數</strong>，即對定義域內所有 <span class=\"chem\">x</span> 皆有 <span class=\"chem\">f^{-1}(x) = f(x)</span>。求 (Find) 常數 <span class=\"chem\">k</span> 的值。</p>",
      hints: [
        // EN: The domain of <span class="chem">f</span> is <span class="chem">x != 3</span> (vertical asymptote <span class="chem">x = 3</span>), and the range of <span class="chem">f</span> is <span class="chem">y != k/2</span> (horizontal asymptote <span class="chem">y = k/2</span>).
        "<span class=\"chem\">f</span> 的定義域為 <span class=\"chem\">x != 3</span>（鉛垂漸近線 <span class=\"chem\">x = 3</span>），而 <span class=\"chem\">f</span> 的值域為 <span class=\"chem\">y != k/2</span>（水平漸近線 <span class=\"chem\">y = k/2</span>）。",
        // EN: Because <span class="chem">f^{-1} = f</span>, we must have <span class="chem">Domain(f) = Range(f)</span>, so the excluded value <span class="chem">k/2</span> must equal <span class="chem">3</span>!
        "因為 <span class=\"chem\">f^{-1} = f</span>，必有 <span class=\"chem\">Domain(f) = Range(f)</span>，故被排除的值 <span class=\"chem\">k/2</span> 必等於 <span class=\"chem\">3</span>！",
      ],
      // EN: <p>Method 1 (Asymptote symmetry): For <span class="chem">f</span> to equal <span class="chem">f^{-1}</span>, its vertical asymptote <span class="chem">x = 3</span> and horizontal asymptote <span class="chem">y = k/2</span> must be reflections of each other in <span class="chem">y = x</span>. Hence <span class="chem">k/2 = 3 => k = 6</span>.<br>Method 2 (Algebraic inversion): Let <span class="chem">x = (ky + 5)/(2y - 6) => 2xy - 6x = ky + 5 => y(2x - k) = 6x + 5 => f^{-1}(x) = (6x + 5)/(2x - k)</span>. Matching <span class="chem">f^{-1}(x) = f(x)</span> gives <span class="chem">k = 6</span>.</p>
      solution: "<p>方法 1（漸近線對稱性）：要使 <span class=\"chem\">f</span> 等於 <span class=\"chem\">f^{-1}</span>，其鉛垂漸近線 <span class=\"chem\">x = 3</span> 與水平漸近線 <span class=\"chem\">y = k/2</span> 必須互為沿 <span class=\"chem\">y = x</span> 的反射。因此 <span class=\"chem\">k/2 = 3 => k = 6</span>。<br>方法 2（代數求逆）：設 <span class=\"chem\">x = (ky + 5)/(2y - 6) => 2xy - 6x = ky + 5 => y(2x - k) = 6x + 5 => f^{-1}(x) = (6x + 5)/(2x - k)</span>。比較 <span class=\"chem\">f^{-1}(x) = f(x)</span> 得 <span class=\"chem\">k = 6</span>。</p>",
    },

    // ── t2-1-q017 · mcq · challenge · SL · SL 2.5 · 4 marks
    "t2-1-q017": {
      // EN: <p>Let <span class="chem">f(x) = sqrt(x - 2)</span> for <span class="chem">x &gt;= 2</span> and <span class="chem">g(x) = 6 - x^2</span> for <span class="chem">x &gt;= 0</span>. What is the largest domain and corresponding range of the composite function <span class="chem">(f ∘ g)(x)</span>?</p>
      stem: "<p>設 <span class=\"chem\">f(x) = sqrt(x - 2)</span>（<span class=\"chem\">x &gt;= 2</span>）及 <span class=\"chem\">g(x) = 6 - x^2</span>（<span class=\"chem\">x &gt;= 0</span>）。複合函數 <span class=\"chem\">(f ∘ g)(x)</span> 的最大定義域及對應值域是甚麼？</p>",
      options: [
        // EN: Domain: <span class="chem">0 &lt;= x &lt;= 2</span>; Range: <span class="chem">0 &lt;= y &lt;= 2</span>
        "定義域：<span class=\"chem\">0 &lt;= x &lt;= 2</span>；值域：<span class=\"chem\">0 &lt;= y &lt;= 2</span>",
        // EN: Domain: <span class="chem">-2 &lt;= x &lt;= 2</span>; Range: <span class="chem">0 &lt;= y &lt;= 2</span>
        "定義域：<span class=\"chem\">-2 &lt;= x &lt;= 2</span>；值域：<span class=\"chem\">0 &lt;= y &lt;= 2</span>",
        // EN: Domain: <span class="chem">0 &lt;= x &lt;= sqrt(6)</span>; Range: <span class=\"chem">0 &lt;= y &lt;= 2</span>
        "定義域：<span class=\"chem\">0 &lt;= x &lt;= sqrt(6)</span>；值域：<span class=\"chem\">0 &lt;= y &lt;= 2</span>",
        // EN: Domain: <span class="chem">x &gt;= 0</span>; Range: <span class="chem">0 &lt;= y &lt;= sqrt(6)</span>
        "定義域：<span class=\"chem\">x &gt;= 0</span>；值域：<span class=\"chem\">0 &lt;= y &lt;= sqrt(6)</span>",
      ],
      hints: [
        // EN: An input <span class="chem">x</span> is in the domain of <span class="chem">f ∘ g</span> if and only if <span class="chem">x in Domain(g)</span> (<span class="chem">x &gt;= 0</span>) AND <span class="chem">g(x) in Domain(f)</span> (<span class="chem">6 - x^2 &gt;= 2</span>).
        "輸入 <span class=\"chem\">x</span> 屬於 <span class=\"chem\">f ∘ g</span> 的定義域，當且僅當 <span class=\"chem\">x in Domain(g)</span>（<span class=\"chem\">x &gt;= 0</span>）且 <span class=\"chem\">g(x) in Domain(f)</span>（<span class=\"chem\">6 - x^2 &gt;= 2</span>）。",
        // EN: Solve <span class="chem">6 - x^2 &gt;= 2</span> for <span class="chem">x &gt;= 0</span>, then evaluate <span class="chem">f(g(x)) = sqrt(4 - x^2)</span> on that interval.
        "對 <span class=\"chem\">x &gt;= 0</span> 解 <span class=\"chem\">6 - x^2 &gt;= 2</span>，再在該區間上求 <span class=\"chem\">f(g(x)) = sqrt(4 - x^2)</span> 的值域。",
      ],
      // EN: <p>We require both <span class="chem">x &gt;= 0</span> (from <span class="chem">Domain(g)</span>) and <span class="chem">g(x) &gt;= 2</span> (from <span class="chem">Domain(f)</span>): <span class="chem">6 - x^2 &gt;= 2 => x^2 &lt;= 4 => -2 &lt;= x &lt;= 2</span>. Intersecting with <span class="chem">x &gt;= 0</span> gives the domain <span class="chem">0 &lt;= x &lt;= 2</span>. On <span class="chem">0 &lt;= x &lt;= 2</span>, <span class="chem">(f ∘ g)(x) = sqrt((6 - x^2) - 2) = sqrt(4 - x^2)</span> decreases from <span class="chem">sqrt(4) = 2</span> at <span class="chem">x = 0</span> to <span class="chem">0</span> at <span class="chem">x = 2</span>, so the range is <span class="chem">0 &lt;= y &lt;= 2</span>.</p>
      solution: "<p>我們同時需要 <span class=\"chem\">x &gt;= 0</span>（來自 <span class=\"chem\">Domain(g)</span>）及 <span class=\"chem\">g(x) &gt;= 2</span>（來自 <span class=\"chem\">Domain(f)</span>）：<span class=\"chem\">6 - x^2 &gt;= 2 => x^2 &lt;= 4 => -2 &lt;= x &lt;= 2</span>。與 <span class=\"chem\">x &gt;= 0</span> 取交集得定義域 <span class=\"chem\">0 &lt;= x &lt;= 2</span>。在 <span class=\"chem\">0 &lt;= x &lt;= 2</span> 上，<span class=\"chem\">(f ∘ g)(x) = sqrt((6 - x^2) - 2) = sqrt(4 - x^2)</span> 從 <span class=\"chem\">x = 0</span> 時的 <span class=\"chem\">sqrt(4) = 2</span> 遞減至 <span class=\"chem\">x = 2</span> 時的 <span class=\"chem\">0</span>，故值域為 <span class=\"chem\">0 &lt;= y &lt;= 2</span>。</p>",
      misconception: {
        // EN (option B): You solved 6 − x² ≥ 2 ⇒ −2 ≤ x ≤ 2, but forgot that the given domain of the inner function g already restricts x ≥ 0.
        "1": "你解出了 6 − x² ≥ 2 ⇒ −2 ≤ x ≤ 2，但忘記題目已規定內層函數 g 的定義域為 x ≥ 0。",
        // EN (option C): You required g(x) ≥ 0 (x ≤ √6) instead of requiring g(x) to lie in Domain(f) = [2, ∞), which requires 6 − x² ≥ 2 ⇒ x ≤ 2.
        "2": "你只要求 g(x) ≥ 0 (x ≤ √6)，而沒有要求 g(x) 必須位於 Domain(f) = [2, ∞) 內（即 6 − x² ≥ 2 ⇒ x ≤ 2）。",
        // EN (option D): Without restricting x ≤ 2, outputs of g(x) fall below 2 and make √(g(x) − 2) undefined.
        "3": "若不限制 x ≤ 2，g(x) 的輸出會小於 2，使 √(g(x) − 2) 無定義。",
      },
    },

    // ── t2-1-q018 · short · challenge · SL · SL 2.5 · 7 marks
    "t2-1-q018": {
      // EN: <p>The function <span class="chem">f</span> is defined by <span class="chem">f(x) = e^{2x} - 4e^x + 5</span> for <span class="chem">x &lt;= a</span>.<br>(a) By completing the square in terms of <span class="chem">e^x</span>, find the largest possible value of <span class="chem">a</span> such that <span class="chem">f^{-1}</span> exists. <strong>[3 marks]</strong><br>(b) For this value of <span class="chem">a</span>, find an expression for <span class="chem">f^{-1}(x)</span> and state the domain of <span class="chem">f^{-1}</span> carefully. <strong>[4 marks]</strong></p>
      stem: "<p>函數 <span class=\"chem\">f</span> 定義為 <span class=\"chem\">f(x) = e^{2x} - 4e^x + 5</span>（<span class=\"chem\">x &lt;= a</span>）。<br>(a) 透過對 <span class=\"chem\">e^x</span> 配方，求 (find) 使 <span class=\"chem\">f^{-1}</span> 存在的最大可能 <span class=\"chem\">a</span> 值。<strong>[3 marks]</strong><br>(b) 對於這個 <span class=\"chem\">a</span> 值，求 (find) <span class=\"chem\">f^{-1}(x)</span> 的表式並小心寫出 (state) <span class=\"chem\">f^{-1}</span> 的定義域。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Treat <span class="chem">u = e^x</span> as the variable in <span class="chem">u^2 - 4u + 5 = (u - 2)^2 + 1</span>.
        "把 <span class=\"chem\">u = e^x</span> 視為變數，配方得 <span class=\"chem\">u^2 - 4u + 5 = (u - 2)^2 + 1</span>。",
        // EN: Watch out for the upper bound of the range of <span class="chem">f</span>: as <span class="chem">x -&gt; -infty</span>, <span class="chem">e^x -&gt; 0^+</span>, so <span class="chem">f(x)</span> approaches <span class="chem">(0 - 2)^2 + 1 = 5</span> from below without ever reaching <span class="chem">5</span>!
        "小心 <span class=\"chem\">f</span> 值域的上界：當 <span class=\"chem\">x -&gt; -infty</span> 時，<span class=\"chem\">e^x -&gt; 0^+</span>，因此 <span class=\"chem\">f(x)</span> 從下方趨近 <span class=\"chem\">(0 - 2)^2 + 1 = 5</span>，但永遠不會達到 <span class=\"chem\">5</span>！",
      ],
      // EN: <p>(a) Completing the square in <span class="chem">e^x</span> gives <span class="chem">f(x) = (e^x - 2)^2 + 1</span>. The minimum occurs when <span class="chem">e^x = 2 => x = ln 2</span>. Hence the largest value of <span class="chem">a</span> for which <span class="chem">f</span> is one-to-one on <span class="chem">(-infty, a]</span> is <span class="chem">a = ln 2</span>.<br>(b) As <span class="chem">x</span> increases from <span class="chem">-infty</span> to <span class="chem">ln 2</span>, <span class="chem">e^x</span> increases across <span class="chem">(0, 2]</span>, so <span class="chem">f(x) = (e^x - 2)^2 + 1</span> decreases from <span class="chem">5</span> (excluded, since <span class="chem">e^x &gt; 0</span>) down to <span class="chem">1</span> (included at <span class="chem">x = ln 2</span>). Thus <span class="chem">Domain(f^{-1}) = Range(f) = [1, 5)</span>, i.e., <span class="chem">1 &lt;= x &lt; 5</span>. Swapping <span class="chem">x</span> and <span class="chem">y</span>: <span class="chem">x = (e^y - 2)^2 + 1 => e^y = 2 - sqrt(x - 1)</span> (minus sign since <span class="chem">e^y &lt;= 2</span>), so <span class="chem">f^{-1}(x) = ln(2 - sqrt(x - 1))</span>.</p>
      solution: "<p>(a) 對 <span class=\"chem\">e^x</span> 配方得 <span class=\"chem\">f(x) = (e^x - 2)^2 + 1</span>。最小值出現在 <span class=\"chem\">e^x = 2 => x = ln 2</span>。因此使 <span class=\"chem\">f</span> 在 <span class=\"chem\">(-infty, a]</span> 上為一對一的最大 <span class=\"chem\">a</span> 值為 <span class=\"chem\">a = ln 2</span>。<br>(b) 當 <span class=\"chem\">x</span> 由 <span class=\"chem\">-infty</span> 增至 <span class=\"chem\">ln 2</span> 時，<span class=\"chem\">e^x</span> 在 <span class=\"chem\">(0, 2]</span> 上遞增，故 <span class=\"chem\">f(x) = (e^x - 2)^2 + 1</span> 從 <span class=\"chem\">5</span>（不包括，因 <span class=\"chem\">e^x &gt; 0</span>）遞減至 <span class=\"chem\">1</span>（包括，於 <span class=\"chem\">x = ln 2</span>）。因此 <span class=\"chem\">Domain(f^{-1}) = Range(f) = [1, 5)</span>，即 <span class=\"chem\">1 &lt;= x &lt; 5</span>。對調 <span class=\"chem\">x</span> 與 <span class=\"chem\">y</span>：<span class=\"chem\">x = (e^y - 2)^2 + 1 => e^y = 2 - sqrt(x - 1)</span>（取負號因 <span class=\"chem\">e^y &lt;= 2</span>），故 <span class=\"chem\">f^{-1}(x) = ln(2 - sqrt(x - 1))</span>。</p>",
      // EN: <p>(a) <span class="chem">a = ln 2</span>; (b) <span class="chem">f^{-1}(x) = ln(2 - sqrt(x - 1))</span> with domain <span class="chem">1 &lt;= x &lt; 5</span>.</p>
      answer: "<p>(a) <span class=\"chem\">a = ln 2</span>；(b) <span class=\"chem\">f^{-1}(x) = ln(2 - sqrt(x - 1))</span>，定義域為 <span class=\"chem\">1 &lt;= x &lt; 5</span>。</p>",
      markscheme: [
        // EN: M1: Rewrites f(x) as a quadratic in u = e^x and completes the square: f(x) = (e^x − 2)^2 + 1.
        "M1：把 f(x) 改寫為關於 u = e^x 的二次式並配方：f(x) = (e^x − 2)^2 + 1。",
        // EN: A1: Identifies the turning point at e^x = 2, so a = ln 2.
        "A1：找出極值點在 e^x = 2，故 a = ln 2。",
        // EN: R1: Explains or shows that for x ≤ ln 2, 0 < e^x ≤ 2, where u ↦ (u − 2)^2 + 1 is strictly decreasing (one-to-one).
        "R1：解釋或證明當 x ≤ ln 2 時，0 < e^x ≤ 2，在此區間上 u ↦ (u − 2)^2 + 1 嚴格遞減（一對一）。",
        // EN: M1: Swaps x and y in y = (e^x − 2)^2 + 1 to write (e^y − 2)^2 = x − 1 ⇒ e^y = 2 ± √(x − 1).
        "M1：在 y = (e^x − 2)^2 + 1 中對調 x 與 y，寫出 (e^y − 2)^2 = x − 1 ⇒ e^y = 2 ± √(x − 1)。",
        // EN: R1: Selects the minus sign e^y = 2 − √(x − 1) because y ≤ ln 2 means e^y ≤ 2.
        "R1：選取負號 e^y = 2 − √(x − 1)，因為 y ≤ ln 2 意味著 e^y ≤ 2。",
        // EN: A1: Takes natural log to obtain f⁻¹(x) = ln(2 − √(x − 1)).
        "A1：取自然對數得 f⁻¹(x) = ln(2 − √(x − 1))。",
        // EN: A1: States the exact domain of f⁻¹ (= range of f for x ≤ ln 2) as 1 ≤ x < 5 (noting that as x → −∞, e^x → 0⁺ so f(x) → 5⁻).
        "A1：寫出 f⁻¹ 的準確定義域（即 x ≤ ln 2 時 f 的值域）為 1 ≤ x < 5（留意當 x → −∞ 時 e^x → 0⁺，故 f(x) → 5⁻）。",
      ],
    },

  }
});
