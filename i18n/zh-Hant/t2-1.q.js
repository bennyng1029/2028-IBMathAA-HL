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
        // EN (option D): You moved the constant to the wrong side: 5x − 2y = 12 gives 5x − 2y − 12 = 0, not + 12. Check by substituting (2, −1): 10 + 2 + 12 ≠ 0.
        "3": "你把常數移錯了邊：5x − 2y = 12 應寫成 5x − 2y − 12 = 0，而不是 + 12。代入 (2, −1) 檢查：10 + 2 + 12 ≠ 0。",
      },
    },

    // ── t2-1-q002 · numeric · foundation · SL · SL 2.1 · 3 marks
    "t2-1-q002": {
      // EN: <p>The perpendicular bisector of the line segment joining <span class="chem">A(-1, 4)</span> and <span class="chem">B(5, 8)</span> intersects the <span class="chem">x</span>-axis at <span class="chem">(a, 0)</span>. Find the exact value of <span class="chem">a</span>.</p>
      stem: "<p>連接 <span class=\"chem\">A(-1, 4)</span> 與 <span class=\"chem\">B(5, 8)</span> 的線段之垂直平分線與 <span class=\"chem\">x</span> 軸相交於 <span class=\"chem\">(a, 0)</span>。求 (Find) <span class=\"chem\">a</span> 的準確值。</p>",
      hints: [
        // EN: Find the midpoint <span class="chem">M</span> of <span class="chem">A(-1, 4)</span> and <span class="chem">B(5, 8)</span> and the gradient <span class="chem">m_{AB}</span>.
        "求 <span class=\"chem\">A(-1, 4)</span> 與 <span class=\"chem\">B(5, 8)</span> 的中點 <span class=\"chem\">M</span> 及斜率 <span class=\"chem\">m_{AB}</span>。",
        // EN: With <span class="chem">M(2, 6)</span> and <span class="chem">m_{perp} = -3/2</span>, substitute <span class="chem">y = 0</span> into <span class="chem">y - 6 = (-3/2)(x - 2)</span>.
        "利用 <span class=\"chem\">M(2, 6)</span> 及 <span class=\"chem\">m_{perp} = -3/2</span>，把 <span class=\"chem\">y = 0</span> 代入 <span class=\"chem\">y - 6 = (-3/2)(x - 2)</span>。",
      ],
      // EN: <p>Midpoint <span class="chem">M = ((-1+5)/2, (4+8)/2) = (2, 6)</span>. Gradient <span class="chem">m_{AB} = (8 - 4)/(5 - (-1)) = 4/6 = 2/3</span>, so <span class="chem">m_{perp} = -3/2</span>. The perpendicular bisector is <span class="chem">y - 6 = (-3/2)(x - 2)</span>. Setting <span class="chem">y = 0</span> gives <span class="chem">-6 = (-3/2)(a - 2) => a - 2 = 4 => a = 6</span>.</p>
      solution: "<p>中點 <span class=\"chem\">M = ((-1+5)/2, (4+8)/2) = (2, 6)</span>。斜率 <span class=\"chem\">m_{AB} = (8 - 4)/(5 - (-1)) = 4/6 = 2/3</span>，故 <span class=\"chem\">m_{perp} = -3/2</span>。垂直平分線方程為 <span class=\"chem\">y - 6 = (-3/2)(x - 2)</span>。代入 <span class=\"chem\">y = 0</span> 得 <span class=\"chem\">-6 = (-3/2)(a - 2) => a - 2 = 4 => a = 6</span>。</p>",
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
        // EN (option C): From 10 − 2x ≥ 0 you get −2x ≥ −10; dividing by −2 reverses the sign, giving x ≤ 5, not x ≥ 5.
        "2": "由 10 − 2x ≥ 0 得 −2x ≥ −10；兩邊除以 −2 時不等號要倒轉，得 x ≤ 5，而不是 x ≥ 5。",
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
      // EN: <p>A one-to-one function <span class="chem">f</span> is defined by <span class="chem">f(x) = x^3 + 2x - 1</span> for <span class="chem">x ∈ ℝ</span>. Find the value of <span class="chem">f^{-1}(11)</span>.</p>
      stem: "<p>一對一函數 <span class=\"chem\">f</span> 定義為 <span class=\"chem\">f(x) = x^3 + 2x - 1</span>（<span class=\"chem\">x ∈ ℝ</span>）。求 (Find) <span class=\"chem\">f^{-1}(11)</span> 的值。</p>",
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
        // EN: For every <span class="chem">x ∈ [-2, 5]</span>, <span class="chem">(f^{-1} ∘ f)(x) = x</span>.
        "對每個 <span class=\"chem\">x ∈ [-2, 5]</span>，<span class=\"chem\">(f^{-1} ∘ f)(x) = x</span>。",
        // EN: For every <span class="chem">x ∈ [-2, 5]</span>, <span class="chem">f^{-1}(x) = 1 / f(x)</span>.
        "對每個 <span class=\"chem\">x ∈ [-2, 5]</span>，<span class=\"chem\">f^{-1}(x) = 1 / f(x)</span>。",
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
      // EN: <p>Let <span class="chem">f(x) = ln(x - 4)</span> for <span class="chem">x &gt; 4</span> and <span class="chem">g(x) = x^2 + k</span> for <span class="chem">x ∈ ℝ</span>. Find the set of values of the constant <span class="chem">k</span> for which the composite function <span class="chem">(f ∘ g)(x)</span> is defined for <strong>all</strong> real numbers <span class="chem">x ∈ ℝ</span>.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = ln(x - 4)</span>（<span class=\"chem\">x &gt; 4</span>）及 <span class=\"chem\">g(x) = x^2 + k</span>（<span class=\"chem\">x ∈ ℝ</span>）。求 (Find) 使複合函數 <span class=\"chem\">(f ∘ g)(x)</span> 對<strong>所有</strong>實數 <span class=\"chem\">x ∈ ℝ</span> 均有定義的常數 <span class=\"chem\">k</span> 的值範圍。</p>",
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
        "為使 <span class=\"chem\">(f ∘ g)(x) = f(g(x))</span> 對所有 <span class=\"chem\">x ∈ ℝ</span> 有定義，必須滿足 <span class=\"chem\">Range(g)</span> 是 <span class=\"chem\">Domain(f) = (4, infty)</span> 的子集。",
        // EN: What is the minimum value of <span class="chem">g(x) = x^2 + k</span> for <span class="chem">x ∈ ℝ</span>?
        "<span class=\"chem\">g(x) = x^2 + k</span> 在 <span class=\"chem\">x ∈ ℝ</span> 上的最小值是多少？",
      ],
      // EN: <p>The domain of <span class="chem">f</span> is <span class="chem">(4, infty)</span>. For <span class="chem">g(x) = x^2 + k</span> with <span class="chem">x ∈ ℝ</span>, the range of <span class="chem">g</span> is <span class="chem">[k, infty)</span> (minimum value <span class="chem">k</span> at <span class="chem">x = 0</span>). Requiring <span class="chem">Range(g) ⊆ Domain(f)</span> means every output in <span class="chem">[k, infty)</span> must be strictly greater than <span class="chem">4</span>, so <span class="chem">k &gt; 4</span>.</p>
      solution: "<p><span class=\"chem\">f</span> 的定義域為 <span class=\"chem\">(4, infty)</span>。對於 <span class=\"chem\">g(x) = x^2 + k</span>（<span class=\"chem\">x ∈ ℝ</span>），<span class=\"chem\">g</span> 的值域為 <span class=\"chem\">[k, infty)</span>（最小值 <span class=\"chem\">k</span> 出現在 <span class=\"chem\">x = 0</span>）。要求 <span class=\"chem\">Range(g) ⊆ Domain(f)</span>，即 <span class=\"chem\">[k, infty)</span> 內的每個輸出都必須嚴格大於 <span class=\"chem\">4</span>，因此 <span class=\"chem\">k &gt; 4</span>。</p>",
      misconception: {
        // EN (option B): If k = 4, then at x = 0 we get g(0) = 4, and f(4) = ln(4 − 4) = ln(0), which is undefined! The inequality must be strict: k > 4.
        "1": "若 k = 4，當 x = 0 時 g(0) = 4，則 f(4) = ln(4 − 4) = ln(0)，無定義！不等式必須嚴格大於：k > 4。",
        // EN (option C): You checked that g(x) > 0 instead of checking the actual domain of f, which is u > 4.
        "2": "你檢查了 g(x) > 0，而沒有檢查 f 真正的定義域 u > 4。",
        // EN (option D): You reversed the inequality sign when requiring the minimum of g(x) to exceed 4.
        "3": "在要求 g(x) 的最小值大於 4 時，把不等號方向倒轉了。",
      },
    },

    // ── t2-1-q012 · numeric · exam · AHL · AHL 2.14 · 3 marks
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
      // EN: <p>A triangle has vertices at <span class="chem">A(1, 1)</span>, <span class="chem">B(7, 5)</span>, and <span class="chem">C(3, 8)</span>.<br>(a) Find the equation of the perpendicular bisector of side <span class="chem">[AB]</span> in the form <span class="chem">ax + by + d = 0</span>, where <span class="chem">a, b, d ∈ ℤ</span>. <strong>[3 marks]</strong><br>(b) Determine whether vertex <span class="chem">C(3, 8)</span> is equidistant from <span class="chem">A</span> and <span class="chem">B</span>, justifying your answer. <strong>[2 marks]</strong></p>
      stem: "<p>一個三角形的頂點分別為 <span class=\"chem\">A(1, 1)</span>、<span class=\"chem\">B(7, 5)</span> 及 <span class=\"chem\">C(3, 8)</span>。<br>(a) 求 (Find) 邊 <span class=\"chem\">[AB]</span> 的垂直平分線方程，以 <span class=\"chem\">ax + by + d = 0</span> 形式表示，其中 <span class=\"chem\">a, b, d ∈ ℤ</span>。<strong>[3 marks]</strong><br>(b) 判斷 (Determine) 頂點 <span class=\"chem\">C(3, 8)</span> 是否與 <span class=\"chem\">A</span> 及 <span class=\"chem\">B</span> 等距，並說明理由。<strong>[2 marks]</strong></p>",
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
      // EN: <p>Let <span class="chem">f(x) = 3x - 2</span> for <span class="chem">x ∈ ℝ</span> and <span class="chem">g(x) = 5 / (x + 1)</span> for <span class="chem">x != -1</span>.<br>(a) Find an expression for <span class="chem">(g ∘ f)(x)</span> and state its largest possible domain. <strong>[3 marks]</strong><br>(b) Solve the equation <span class="chem">(f^{-1} ∘ g)(x) = 2</span>. <strong>[3 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = 3x - 2</span>（<span class=\"chem\">x ∈ ℝ</span>）及 <span class=\"chem\">g(x) = 5 / (x + 1)</span>（<span class=\"chem\">x != -1</span>）。<br>(a) 求 (Find) <span class=\"chem\">(g ∘ f)(x)</span> 的表式，並寫出 (state) 其最大可能定義域。<strong>[3 marks]</strong><br>(b) 解 (Solve) 方程 <span class=\"chem\">(f^{-1} ∘ g)(x) = 2</span>。<strong>[3 marks]</strong></p>",
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

    // ── t2-1-q016 · numeric · challenge · AHL · AHL 2.14 · 4 marks
    "t2-1-q016": {
      // EN: <p>The rational function <span class="chem">f(x) = (kx + 5)/(2x - 6)</span> (<span class="chem">x != 3</span>) is a <strong>self-inverse function</strong>, meaning that <span class="chem">f^{-1}(x) = f(x)</span> for all <span class="chem">x</span> in its domain. Find the value of the constant <span class="chem">k</span>.</p>
      stem: "<p>有理函數 <span class=\"chem\">f(x) = (kx + 5)/(2x - 6)</span>（<span class=\"chem\">x != 3</span>）是一個<strong>自反函數</strong>，即對定義域內所有 <span class=\"chem\">x</span> 皆有 <span class=\"chem\">f^{-1}(x) = f(x)</span>。求 (Find) 常數 <span class=\"chem\">k</span> 的值。</p>",
      hints: [
        // EN: Decode: "self-inverse" means that applying <span class="chem">f</span> twice gives back <span class="chem">x</span>, so the graph of <span class="chem">f</span> is its own reflection in <span class="chem">y = x</span>. Use the asymptotes (or find <span class="chem">f^{-1}</span> algebraically) and match the result with <span class="chem">f</span>.
        "解碼：「自反函數」表示把 <span class=\"chem\">f</span> 連續作用兩次會回到 <span class=\"chem\">x</span>，因此 <span class=\"chem\">f</span> 的圖像關於 <span class=\"chem\">y = x</span> 的反射就是它自己。利用漸近線（或用代數方法求出 <span class=\"chem\">f^{-1}</span>），再把結果與 <span class=\"chem\">f</span> 比較。",
        // EN: The domain of <span class="chem">f</span> is <span class="chem">x != 3</span> (vertical asymptote <span class="chem">x = 3</span>), and the range of <span class="chem">f</span> is <span class="chem">y != k/2</span> (horizontal asymptote <span class="chem">y = k/2</span>).
        "<span class=\"chem\">f</span> 的定義域為 <span class=\"chem\">x != 3</span>（垂直漸近線 <span class=\"chem\">x = 3</span>），而 <span class=\"chem\">f</span> 的值域為 <span class=\"chem\">y != k/2</span>（水平漸近線 <span class=\"chem\">y = k/2</span>）。",
        // EN: Because <span class="chem">f^{-1} = f</span>, we must have <span class="chem">Domain(f) = Range(f)</span>, so the excluded value <span class="chem">k/2</span> must equal <span class="chem">3</span>!
        "因為 <span class=\"chem\">f^{-1} = f</span>，必有 <span class=\"chem\">Domain(f) = Range(f)</span>，故被排除的值 <span class=\"chem\">k/2</span> 必等於 <span class=\"chem\">3</span>！",
      ],
      // EN: <p>Method 1 (Asymptote symmetry): For <span class="chem">f</span> to equal <span class="chem">f^{-1}</span>, its vertical asymptote <span class="chem">x = 3</span> and horizontal asymptote <span class="chem">y = k/2</span> must be reflections of each other in <span class="chem">y = x</span>. Hence <span class="chem">k/2 = 3 => k = 6</span>.<br>Method 2 (Algebraic inversion): Let <span class="chem">x = (ky + 5)/(2y - 6) => 2xy - 6x = ky + 5 => y(2x - k) = 6x + 5 => f^{-1}(x) = (6x + 5)/(2x - k)</span>. Matching <span class="chem">f^{-1}(x) = f(x)</span> gives <span class="chem">k = 6</span>.</p>
      solution: "<p>方法 1（漸近線對稱性）：要使 <span class=\"chem\">f</span> 等於 <span class=\"chem\">f^{-1}</span>，其垂直漸近線 <span class=\"chem\">x = 3</span> 與水平漸近線 <span class=\"chem\">y = k/2</span> 必須互為沿 <span class=\"chem\">y = x</span> 的反射。因此 <span class=\"chem\">k/2 = 3 => k = 6</span>。<br>方法 2（代數求逆）：設 <span class=\"chem\">x = (ky + 5)/(2y - 6) => 2xy - 6x = ky + 5 => y(2x - k) = 6x + 5 => f^{-1}(x) = (6x + 5)/(2x - k)</span>。比較 <span class=\"chem\">f^{-1}(x) = f(x)</span> 得 <span class=\"chem\">k = 6</span>。</p>",
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
        // EN: Decode: "the largest domain of <span class="chem">f ∘ g</span>" means the inputs <span class="chem">x</span> that <span class="chem">g</span> accepts AND whose outputs <span class="chem">g(x)</span> are allowed into <span class="chem">f</span>. Combine the two restrictions, then find the range from the simplified composite.
        "解碼：「<span class=\"chem\">f ∘ g</span> 的最大定義域」是指那些 <span class=\"chem\">g</span> 可以接受、而且輸出 <span class=\"chem\">g(x)</span> 可以代入 <span class=\"chem\">f</span> 的 <span class=\"chem\">x</span>。先把兩個限制結合起來，再由化簡後的合成函數求值域。",
        // EN: An input <span class="chem">x</span> is in the domain of <span class="chem">f ∘ g</span> if and only if <span class="chem">x ∈ Domain(g)</span> (<span class="chem">x &gt;= 0</span>) AND <span class="chem">g(x) ∈ Domain(f)</span> (<span class="chem">6 - x^2 &gt;= 2</span>).
        "輸入 <span class=\"chem\">x</span> 屬於 <span class=\"chem\">f ∘ g</span> 的定義域，當且僅當 <span class=\"chem\">x ∈ Domain(g)</span>（<span class=\"chem\">x &gt;= 0</span>）且 <span class=\"chem\">g(x) ∈ Domain(f)</span>（<span class=\"chem\">6 - x^2 &gt;= 2</span>）。",
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

    // ── t2-1-q018 · short · challenge · AHL · SL 2.5 / AHL 2.14 · 7 marks
    "t2-1-q018": {
      // EN: <p>The function <span class="chem">f</span> is defined by <span class="chem">f(x) = e^{2x} - 4e^x + 5</span> for <span class="chem">x &lt;= a</span>.<br>(a) By completing the square in terms of <span class="chem">e^x</span>, find the largest possible value of <span class="chem">a</span> such that <span class="chem">f^{-1}</span> exists. <strong>[3 marks]</strong><br>(b) For this value of <span class="chem">a</span>, find an expression for <span class="chem">f^{-1}(x)</span> and state the domain of <span class="chem">f^{-1}</span> carefully. <strong>[4 marks]</strong></p>
      stem: "<p>函數 <span class=\"chem\">f</span> 定義為 <span class=\"chem\">f(x) = e^{2x} - 4e^x + 5</span>（<span class=\"chem\">x &lt;= a</span>）。<br>(a) 透過對 <span class=\"chem\">e^x</span> 配方，求 (find) 使 <span class=\"chem\">f^{-1}</span> 存在的最大可能 <span class=\"chem\">a</span> 值。<strong>[3 marks]</strong><br>(b) 對於這個 <span class=\"chem\">a</span> 值，求 (find) <span class=\"chem\">f^{-1}(x)</span> 的表式並小心寫出 (state) <span class=\"chem\">f^{-1}</span> 的定義域。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: <span class="chem">e^{2x} = (e^x)^2</span>, so <span class="chem">f</span> is a quadratic in disguise. "The largest <span class="chem">a</span> such that <span class="chem">f^{-1}</span> exists" asks where <span class="chem">f</span> stops being one-to-one (its turning point), and the domain of <span class="chem">f^{-1}</span> is the range of <span class="chem">f</span> on <span class="chem">x &lt;= a</span>.
        "解碼：<span class=\"chem\">e^{2x} = (e^x)^2</span>，所以 <span class=\"chem\">f</span> 其實是一個偽裝的二次函數。「使 <span class=\"chem\">f^{-1}</span> 存在的最大 <span class=\"chem\">a</span>」是問 <span class=\"chem\">f</span> 在哪裡不再是一對一（即它的轉折點），而 <span class=\"chem\">f^{-1}</span> 的定義域是 <span class=\"chem\">f</span> 在 <span class=\"chem\">x &lt;= a</span> 上的值域。",
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
        "R1：選取負號 e^y = 2 − √(x − 1)，因為 y ≤ ln 2 意味着 e^y ≤ 2。",
        // EN: A1: Takes natural log to obtain f⁻¹(x) = ln(2 − √(x − 1)).
        "A1：取自然對數得 f⁻¹(x) = ln(2 − √(x − 1))。",
        // EN: A1: States the exact domain of f⁻¹ (= range of f for x ≤ ln 2) as 1 ≤ x < 5 (noting that as x → −∞, e^x → 0⁺ so f(x) → 5⁻).
        "A1：寫出 f⁻¹ 的準確定義域（即 x ≤ ln 2 時 f 的值域）為 1 ≤ x < 5（留意當 x → −∞ 時 e^x → 0⁺，故 f(x) → 5⁻）。",
      ],
    },

    // ── t2-1-q019 · short · exam · SL · SL 2.3 · 4 marks
    "t2-1-q019": {
      // EN: <p>Let <span class="chem">f(x) = e^x - x^2</span> for <span class="chem">-2 &lt;= x &lt;= 3</span>.<br>(a) Use your GDC to sketch the graph of <span class="chem">y = f(x)</span> on this domain, labelling the coordinates of any axis intercepts and of the end points. <strong>[3 marks]</strong><br>(b) Hence write down the number of solutions of <span class="chem">e^x = x^2</span> for <span class="chem">-2 &lt;= x &lt;= 3</span>. <strong>[1 mark]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = e^x - x^2</span>，其中 <span class=\"chem\">-2 &lt;= x &lt;= 3</span>。<br>(a) 利用 GDC 在此定義域上畫出 (Sketch) <span class=\"chem\">y = f(x)</span> 的草圖，並標示所有與坐標軸交點及端點的坐標。<strong>[3 marks]</strong><br>(b) 由此 (Hence) 寫出 (write down) 方程 <span class=\"chem\">e^x = x^2</span> 在 <span class=\"chem\">-2 &lt;= x &lt;= 3</span> 內的解的數目。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Enter <span class="chem">Y_1 = e^x - x^2</span> (or <span class="chem">Y_1 = e^x</span>, <span class="chem">Y_2 = x^2</span> and <span class="chem">Y_3 = Y_1 - Y_2</span>) and set the window to <span class="chem">-2 &lt;= x &lt;= 3</span>.
        "輸入 <span class=\"chem\">Y_1 = e^x - x^2</span>（或輸入 <span class=\"chem\">Y_1 = e^x</span>、<span class=\"chem\">Y_2 = x^2</span> 及 <span class=\"chem\">Y_3 = Y_1 - Y_2</span>），並把視窗設為 <span class=\"chem\">-2 &lt;= x &lt;= 3</span>。",
        // EN: Use the zero tool for the <span class="chem">x</span>-intercept and evaluate <span class="chem">f(-2)</span>, <span class="chem">f(0)</span> and <span class="chem">f(3)</span>. Solutions of <span class="chem">e^x = x^2</span> are the zeros of <span class="chem">f</span>.
        "用求零點功能找出 <span class=\"chem\">x</span> 軸截點，並計算 <span class=\"chem\">f(-2)</span>、<span class=\"chem\">f(0)</span> 和 <span class=\"chem\">f(3)</span>。<span class=\"chem\">e^x = x^2</span> 的解就是 <span class=\"chem\">f</span> 的零點。",
      ],
      // EN: <p>(a) On the GDC, <span class="chem">y = e^x - x^2</span> rises from <span class="chem">f(-2) = e^{-2} - 4 ≈ -3.86</span> to <span class="chem">f(3) = e^3 - 9 ≈ 11.1</span> with no turning points (it bends but never levels off). The zero tool gives the <span class="chem">x</span>-intercept <span class="chem">(-0.703, 0)</span>, and <span class="chem">f(0) = 1</span> gives the <span class="chem">y</span>-intercept <span class="chem">(0, 1)</span>. A sketch shows this shape and labels these four points; it does not need to be to scale. Do not extend the curve beyond <span class="chem">x = -2</span> or <span class="chem">x = 3</span>.<br>(b) The solutions of <span class="chem">e^x = x^2</span> are the zeros of <span class="chem">f</span>. The graph crosses the <span class="chem">x</span>-axis once, so there is <strong>one</strong> solution (<span class="chem">x ≈ -0.703</span>).</p>
      solution: "<p>(a) 在 GDC 上，<span class=\"chem\">y = e^x - x^2</span> 由 <span class=\"chem\">f(-2) = e^{-2} - 4 ≈ -3.86</span> 上升至 <span class=\"chem\">f(3) = e^3 - 9 ≈ 11.1</span>，中間沒有轉向點（曲線會彎曲，但不會變平）。求零點功能給出 <span class=\"chem\">x</span> 軸截點 <span class=\"chem\">(-0.703, 0)</span>，而 <span class=\"chem\">f(0) = 1</span> 給出 <span class=\"chem\">y</span> 軸截點 <span class=\"chem\">(0, 1)</span>。草圖要顯示這個形狀並標示這四個點，但不必按比例。不要把曲線延伸到 <span class=\"chem\">x = -2</span> 或 <span class=\"chem\">x = 3</span> 以外。<br>(b) <span class=\"chem\">e^x = x^2</span> 的解就是 <span class=\"chem\">f</span> 的零點。圖像與 <span class=\"chem\">x</span> 軸只相交一次，所以只有<strong>一個</strong>解（<span class=\"chem\">x ≈ -0.703</span>）。</p>",
      // EN: <p>(a) An increasing curve with no turning points from <span class="chem">(-2, -3.86)</span> to <span class="chem">(3, 11.1)</span>, crossing the <span class="chem">x</span>-axis at <span class="chem">(-0.703, 0)</span> and the <span class="chem">y</span>-axis at <span class="chem">(0, 1)</span>; (b) one solution.</p>
      answer: "<p>(a) 一條沒有轉向點的遞增曲線，由 <span class=\"chem\">(-2, -3.86)</span> 至 <span class=\"chem\">(3, 11.1)</span>，與 <span class=\"chem\">x</span> 軸相交於 <span class=\"chem\">(-0.703, 0)</span>，與 <span class=\"chem\">y</span> 軸相交於 <span class=\"chem\">(0, 1)</span>；(b) 一個解。</p>",
      markscheme: [
        // EN: A1: Correct shape: increasing throughout −2 ≤ x ≤ 3 with no turning points, drawn only on the given domain.
        "A1：形狀正確：在 −2 ≤ x ≤ 3 上一直遞增且沒有轉向點，並只畫在給定的定義域上。",
        // EN: A1: Axis intercepts labelled (−0.703, 0) and (0, 1).
        "A1：標示坐標軸交點 (−0.703, 0) 和 (0, 1)。",
        // EN: A1: End points labelled (−2, −3.86) and (3, 11.1).
        "A1：標示端點 (−2, −3.86) 和 (3, 11.1)。",
        // EN: A1: One solution (the graph crosses y = 0 once, at x ≈ −0.703).
        "A1：一個解（圖像只與 y = 0 相交一次，在 x ≈ −0.703）。",
      ],
    },

  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('zh-Hant', 't2-1.q', {
  questions: {

    // ── t2-1-q020 · numeric · foundation · SL · SL 2.1 · 3 marks
    "t2-1-q020": {
      // EN: <p>A straight line passes through the points <span class="chem">P(-3, 7)</span> and <span class="chem">Q(5, -5)</span>. Find the exact <span class="chem">y</span>-intercept of the line.</p>
      stem: "<p>一條直線通過點 <span class=\"chem\">P(-3, 7)</span> 和 <span class=\"chem\">Q(5, -5)</span>。求 (Find) 該直線的 <span class=\"chem\">y</span> 截距的準確值。</p>",
      hints: [
        // EN: Find the gradient first: <span class="chem">m = (y_2 - y_1)/(x_2 - x_1)</span>.
        "先求斜率：<span class=\"chem\">m = (y_2 - y_1)/(x_2 - x_1)</span>。",
        // EN: With <span class="chem">m = -3/2</span>, write <span class="chem">y - 7 = -(3/2)(x + 3)</span> and put <span class="chem">x = 0</span>.
        "得 <span class=\"chem\">m = -3/2</span> 後，寫出 <span class=\"chem\">y - 7 = -(3/2)(x + 3)</span>，並代入 <span class=\"chem\">x = 0</span>。",
      ],
      // EN: <p>Gradient <span class="chem">m = (-5 - 7)/(5 - (-3)) = -12/8 = -3/2</span>. Point-gradient form through <span class="chem">P</span>: <span class="chem">y - 7 = -(3/2)(x + 3)</span>. At <span class="chem">x = 0</span>: <span class="chem">y = 7 - 9/2 = 5/2</span>. The <span class="chem">y</span>-intercept is <span class="chem">5/2</span>. Check with <span class="chem">Q</span>: <span class="chem">-(3/2)(5) + 5/2 = -5</span>.</p>
      solution: "<p>斜率 <span class=\"chem\">m = (-5 - 7)/(5 - (-3)) = -12/8 = -3/2</span>。通過 <span class=\"chem\">P</span> 的點斜式：<span class=\"chem\">y - 7 = -(3/2)(x + 3)</span>。當 <span class=\"chem\">x = 0</span>：<span class=\"chem\">y = 7 - 9/2 = 5/2</span>。<span class=\"chem\">y</span> 截距為 <span class=\"chem\">5/2</span>。用 <span class=\"chem\">Q</span> 驗算：<span class=\"chem\">-(3/2)(5) + 5/2 = -5</span>。</p>",
    },

    // ── t2-1-q021 · numeric · foundation · SL · SL 2.2 · 3 marks
    "t2-1-q021": {
      // EN: <p>The function <span class="chem">f</span> is defined by <span class="chem">f(x) = (2x - 1)/(x + 3)</span> for <span class="chem">x != -3</span>. Find the value of <span class="chem">f^{-1}(3)</span>.</p>
      stem: "<p>函數 <span class=\"chem\">f</span> 定義為 <span class=\"chem\">f(x) = (2x - 1)/(x + 3)</span>，其中 <span class=\"chem\">x != -3</span>。求 (Find) <span class=\"chem\">f^{-1}(3)</span> 的值。</p>",
      hints: [
        // EN: You do not need a formula for <span class="chem">f^{-1}</span>. If <span class="chem">f^{-1}(3) = a</span>, then <span class="chem">f(a) = 3</span>.
        "你不需要求出 <span class=\"chem\">f^{-1}</span> 的公式。若 <span class=\"chem\">f^{-1}(3) = a</span>，則 <span class=\"chem\">f(a) = 3</span>。",
        // EN: Solve <span class="chem">(2a - 1)/(a + 3) = 3</span> by multiplying both sides by <span class="chem">a + 3</span>.
        "把 <span class=\"chem\">(2a - 1)/(a + 3) = 3</span> 兩邊乘以 <span class=\"chem\">a + 3</span> 來解。",
      ],
      // EN: <p>Let <span class="chem">f^{-1}(3) = a</span>, so <span class="chem">f(a) = 3</span>: <span class="chem">2a - 1 = 3(a + 3) = 3a + 9</span>, so <span class="chem">a = -10</span>. Check: <span class="chem">f(-10) = (-21)/(-7) = 3</span>. So <span class="chem">f^{-1}(3) = -10</span>.</p>
      solution: "<p>設 <span class=\"chem\">f^{-1}(3) = a</span>，則 <span class=\"chem\">f(a) = 3</span>：<span class=\"chem\">2a - 1 = 3(a + 3) = 3a + 9</span>，所以 <span class=\"chem\">a = -10</span>。驗算：<span class=\"chem\">f(-10) = (-21)/(-7) = 3</span>。所以 <span class=\"chem\">f^{-1}(3) = -10</span>。</p>",
    },

    // ── t2-1-q022 · numeric · foundation · SL · SL 2.5 · 3 marks
    "t2-1-q022": {
      // EN: <p>Let <span class="chem">f(x) = 5 - 2x</span> for <span class="chem">x ∈ ℝ</span>. Solve the equation <span class="chem">(f ∘ f)(x) = 7</span>.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = 5 - 2x</span>，其中 <span class=\"chem\">x ∈ ℝ</span>。解 (Solve) 方程 <span class=\"chem\">(f ∘ f)(x) = 7</span>。</p>",
      hints: [
        // EN: <span class="chem">(f ∘ f)(x) = f(f(x))</span>: replace every <span class="chem">x</span> in <span class="chem">5 - 2x</span> by <span class="chem">(5 - 2x)</span>.
        "<span class=\"chem\">(f ∘ f)(x) = f(f(x))</span>：把 <span class=\"chem\">5 - 2x</span> 中的每一個 <span class=\"chem\">x</span> 替換為 <span class=\"chem\">(5 - 2x)</span>。",
        // EN: You should get <span class="chem">(f ∘ f)(x) = 4x - 5</span>. Now set it equal to <span class="chem">7</span>.
        "你應得到 <span class=\"chem\">(f ∘ f)(x) = 4x - 5</span>。然後令它等於 <span class=\"chem\">7</span>。",
      ],
      // EN: <p><span class="chem">(f ∘ f)(x) = 5 - 2(5 - 2x) = 5 - 10 + 4x = 4x - 5</span>. Then <span class="chem">4x - 5 = 7 => x = 3</span>. Check: <span class="chem">f(3) = -1</span> and <span class="chem">f(-1) = 7</span>.</p>
      solution: "<p><span class=\"chem\">(f ∘ f)(x) = 5 - 2(5 - 2x) = 5 - 10 + 4x = 4x - 5</span>。於是 <span class=\"chem\">4x - 5 = 7 => x = 3</span>。驗算：<span class=\"chem\">f(3) = -1</span> 及 <span class=\"chem\">f(-1) = 7</span>。</p>",
    },

    // ── t2-1-q023 · short · exam · SL · SL 2.1 · 5 marks
    "t2-1-q023": {
      // EN: <p>The line <span class="chem">L_1</span> has equation <span class="chem">kx + 3y = 6</span> and the line <span class="chem">L_2</span> has equation <span class="chem">y = (2k - 1)x + 4</span>, where <span class="chem">k</span> is a constant.<br>(a) Find the value of <span class="chem">k</span> for which <span class="chem">L_1</span> and <span class="chem">L_2</span> are parallel. <strong>[2 marks]</strong><br>(b) Find the possible values of <span class="chem">k</span> for which <span class="chem">L_1</span> and <span class="chem">L_2</span> are perpendicular. <strong>[3 marks]</strong></p>
      stem: "<p>直線 <span class=\"chem\">L_1</span> 的方程為 <span class=\"chem\">kx + 3y = 6</span>，直線 <span class=\"chem\">L_2</span> 的方程為 <span class=\"chem\">y = (2k - 1)x + 4</span>，其中 <span class=\"chem\">k</span> 為常數。<br>(a) 求 (Find) 使 <span class=\"chem\">L_1</span> 與 <span class=\"chem\">L_2</span> 互相平行的 <span class=\"chem\">k</span> 值。<strong>[2 marks]</strong><br>(b) 求使 <span class=\"chem\">L_1</span> 與 <span class=\"chem\">L_2</span> 互相垂直的 <span class=\"chem\">k</span> 的可能值。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Write <span class="chem">L_1</span> in the form <span class="chem">y = mx + c</span> so you can read off its gradient in terms of <span class="chem">k</span>.
        "把 <span class=\"chem\">L_1</span> 寫成 <span class=\"chem\">y = mx + c</span> 的形式，便可讀出以 <span class=\"chem\">k</span> 表示的斜率。",
        // EN: Parallel: equal gradients. Perpendicular: gradients multiply to <span class="chem">-1</span>, which gives a quadratic in <span class="chem">k</span>.
        "平行：斜率相等。垂直：斜率之積為 <span class=\"chem\">-1</span>，這會得出一個關於 <span class=\"chem\">k</span> 的二次方程。",
      ],
      // EN: <p>(a) <span class="chem">L_1</span>: <span class="chem">y = -(k/3)x + 2</span>, gradient <span class="chem">-k/3</span>. <span class="chem">L_2</span> has gradient <span class="chem">2k - 1</span>. Parallel: <span class="chem">-k/3 = 2k - 1 => -k = 6k - 3 => k = 3/7</span>.<br>(b) Perpendicular: <span class="chem">(-k/3)(2k - 1) = -1 => k(2k - 1) = 3 => 2k^2 - k - 3 = 0 => (2k - 3)(k + 1) = 0</span>, so <span class="chem">k = 3/2</span> or <span class="chem">k = -1</span>. Check <span class="chem">k = -1</span>: gradients <span class="chem">1/3</span> and <span class="chem">-3</span>, product <span class="chem">-1</span>.</p>
      solution: "<p>(a) <span class=\"chem\">L_1</span>：<span class=\"chem\">y = -(k/3)x + 2</span>，斜率為 <span class=\"chem\">-k/3</span>。<span class=\"chem\">L_2</span> 的斜率為 <span class=\"chem\">2k - 1</span>。平行：<span class=\"chem\">-k/3 = 2k - 1 => -k = 6k - 3 => k = 3/7</span>。<br>(b) 垂直：<span class=\"chem\">(-k/3)(2k - 1) = -1 => k(2k - 1) = 3 => 2k^2 - k - 3 = 0 => (2k - 3)(k + 1) = 0</span>，所以 <span class=\"chem\">k = 3/2</span> 或 <span class=\"chem\">k = -1</span>。驗算 <span class=\"chem\">k = -1</span>：斜率為 <span class=\"chem\">1/3</span> 和 <span class=\"chem\">-3</span>，乘積為 <span class=\"chem\">-1</span>。</p>",
      // EN: <p>(a) <span class="chem">k = 3/7</span>; (b) <span class="chem">k = 3/2</span> or <span class="chem">k = -1</span>.</p>
      answer: "<p>(a) <span class=\"chem\">k = 3/7</span>；(b) <span class=\"chem\">k = 3/2</span> 或 <span class=\"chem\">k = -1</span>。</p>",
      markscheme: [
        // EN: M1: Rearranges L₁ to y = −(k/3)x + 2, so its gradient is −k/3, and sets −k/3 = 2k − 1.
        "M1：把 L₁ 整理為 y = −(k/3)x + 2，所以其斜率為 −k/3，並設 −k/3 = 2k − 1。",
        // EN: A1: k = 3/7.
        "A1：k = 3/7。",
        // EN: M1: Uses the product of gradients: (−k/3)(2k − 1) = −1.
        "M1：利用斜率之積：(−k/3)(2k − 1) = −1。",
        // EN: A1: Obtains the quadratic 2k² − k − 3 = 0 (or equivalent).
        "A1：得出二次方程 2k² − k − 3 = 0（或等價式）。",
        // EN: A1: Solves (2k − 3)(k + 1) = 0 to get k = 3/2 or k = −1.
        "A1：解 (2k − 3)(k + 1) = 0 得 k = 3/2 或 k = −1。",
      ],
    },

    // ── t2-1-q024 · numeric · exam · SL · SL 2.1 · 5 marks
    "t2-1-q024": {
      // EN: <p>The line <span class="chem">L</span> passes through <span class="chem">A(2, 5)</span> and is parallel to the line <span class="chem">4x - 3y = 12</span>. The line <span class="chem">L</span> meets the <span class="chem">x</span>-axis at <span class="chem">P</span> and the <span class="chem">y</span>-axis at <span class="chem">Q</span>. Find the exact area of triangle <span class="chem">OPQ</span>, where <span class="chem">O</span> is the origin.</p>
      stem: "<p>直線 <span class=\"chem\">L</span> 通過 <span class=\"chem\">A(2, 5)</span>，並與直線 <span class=\"chem\">4x - 3y = 12</span> 平行。直線 <span class=\"chem\">L</span> 與 <span class=\"chem\">x</span> 軸相交於 <span class=\"chem\">P</span>，與 <span class=\"chem\">y</span> 軸相交於 <span class=\"chem\">Q</span>。求 (Find) 三角形 <span class=\"chem\">OPQ</span> 面積的準確值，其中 <span class=\"chem\">O</span> 為原點。</p>",
      hints: [
        // EN: Decode: a parallel line keeps the same <span class="chem">x</span> and <span class="chem">y</span> coefficients, so <span class="chem">L</span> is <span class="chem">4x - 3y = c</span>. The triangle is right-angled at <span class="chem">O</span>, with legs equal to the distances from <span class="chem">O</span> to the two intercepts.
        "解碼：平行線保持相同的 <span class=\"chem\">x</span> 和 <span class=\"chem\">y</span> 係數，所以 <span class=\"chem\">L</span> 為 <span class=\"chem\">4x - 3y = c</span>。此三角形在 <span class=\"chem\">O</span> 處成直角，兩條直角邊分別等於 <span class=\"chem\">O</span> 至兩個截點的距離。",
        // EN: Substitute <span class="chem">A(2, 5)</span> to find <span class="chem">c</span>, then put <span class="chem">y = 0</span> and <span class="chem">x = 0</span> in turn.
        "代入 <span class=\"chem\">A(2, 5)</span> 求 <span class=\"chem\">c</span>，然後依次代入 <span class=\"chem\">y = 0</span> 和 <span class=\"chem\">x = 0</span>。",
        // EN: Area <span class="chem">= (1/2) × |OP| × |OQ|</span>. Lengths are positive even when an intercept is negative.
        "面積 <span class=\"chem\">= (1/2) × |OP| × |OQ|</span>。即使截距為負數，長度仍是正數。",
      ],
      // EN: <p><span class="chem">L</span>: <span class="chem">4x - 3y = c</span> with <span class="chem">4(2) - 3(5) = -7</span>, so <span class="chem">4x - 3y = -7</span>. At <span class="chem">y = 0</span>: <span class="chem">x = -7/4</span>, so <span class="chem">P(-7/4, 0)</span>. At <span class="chem">x = 0</span>: <span class="chem">y = 7/3</span>, so <span class="chem">Q(0, 7/3)</span>. Area <span class="chem">= (1/2)(7/4)(7/3) = 49/24</span>.</p>
      solution: "<p><span class=\"chem\">L</span>：<span class=\"chem\">4x - 3y = c</span>，其中 <span class=\"chem\">4(2) - 3(5) = -7</span>，所以 <span class=\"chem\">4x - 3y = -7</span>。當 <span class=\"chem\">y = 0</span>：<span class=\"chem\">x = -7/4</span>，所以 <span class=\"chem\">P(-7/4, 0)</span>。當 <span class=\"chem\">x = 0</span>：<span class=\"chem\">y = 7/3</span>，所以 <span class=\"chem\">Q(0, 7/3)</span>。面積 <span class=\"chem\">= (1/2)(7/4)(7/3) = 49/24</span>。</p>",
    },

    // ── t2-1-q025 · short · exam · SL · SL 2.2, 2.5 · 8 marks
    "t2-1-q025": {
      // EN: <p>Let <span class="chem">h(x) = sqrt(x + 5) - 2</span>.<br>(a) Write down the largest possible domain of <span class="chem">h</span>. <strong>[1 mark]</strong><br>(b) Write down the range of <span class="chem">h</span> for this domain. <strong>[1 mark]</strong><br>(c) Find <span class="chem">h^{-1}(x)</span>, stating its domain. <strong>[3 marks]</strong><br>(d) Solve the equation <span class="chem">h(x) = h^{-1}(x)</span>, giving your answer in exact form. <strong>[3 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">h(x) = sqrt(x + 5) - 2</span>。<br>(a) 寫出 (Write down) <span class=\"chem\">h</span> 的最大可能定義域。<strong>[1 mark]</strong><br>(b) 寫出在此定義域下 <span class=\"chem\">h</span> 的值域。<strong>[1 mark]</strong><br>(c) 求 (Find) <span class=\"chem\">h^{-1}(x)</span>，並寫出其定義域。<strong>[3 marks]</strong><br>(d) 解 (Solve) 方程 <span class=\"chem\">h(x) = h^{-1}(x)</span>，答案以準確形式表示。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: The square root needs <span class="chem">x + 5 &gt;= 0</span>, and its smallest output is <span class="chem">0</span>.
        "平方根要求 <span class=\"chem\">x + 5 &gt;= 0</span>，而它的最小輸出值是 <span class=\"chem\">0</span>。",
        // EN: For (c), swap <span class="chem">x</span> and <span class="chem">y</span> and square. The domain of <span class="chem">h^{-1}</span> is the range of <span class="chem">h</span>.
        "在 (c) 部中，對調 <span class=\"chem\">x</span> 和 <span class=\"chem\">y</span> 再平方。<span class=\"chem\">h^{-1}</span> 的定義域就是 <span class=\"chem\">h</span> 的值域。",
        // EN: For (d), <span class="chem">h</span> is increasing, so <span class="chem">h</span> and <span class="chem">h^{-1}</span> can only meet on <span class="chem">y = x</span>. Solve <span class="chem">h^{-1}(x) = x</span> and check which root lies in the domain <span class="chem">x &gt;= -2</span>.
        "在 (d) 部中，<span class=\"chem\">h</span> 是遞增函數，所以 <span class=\"chem\">h</span> 與 <span class=\"chem\">h^{-1}</span> 只能在 <span class=\"chem\">y = x</span> 上相交。解 <span class=\"chem\">h^{-1}(x) = x</span>，並檢查哪一個根在定義域 <span class=\"chem\">x &gt;= -2</span> 內。",
      ],
      // EN: <p>(a) <span class="chem">x + 5 &gt;= 0 => x &gt;= -5</span>.<br>(b) <span class="chem">sqrt(x + 5) &gt;= 0</span>, so <span class="chem">h(x) &gt;= -2</span>.<br>(c) <span class="chem">x = sqrt(y + 5) - 2 => (x + 2)^2 = y + 5 => h^{-1}(x) = (x + 2)^2 - 5</span>, with domain <span class="chem">x &gt;= -2</span> (the range of <span class="chem">h</span>).<br>(d) <span class="chem">h</span> is increasing, so intersections of <span class="chem">y = h(x)</span> and <span class="chem">y = h^{-1}(x)</span> lie on <span class="chem">y = x</span>. Solve <span class="chem">(x + 2)^2 - 5 = x => x^2 + 3x - 1 = 0 => x = (-3 +- sqrt(13))/2</span>. Since <span class="chem">(-3 - sqrt(13))/2 ≈ -3.30 &lt; -2</span>, reject it. So <span class="chem">x = (-3 + sqrt(13))/2</span>.</p>
      solution: "<p>(a) <span class=\"chem\">x + 5 &gt;= 0 => x &gt;= -5</span>。<br>(b) <span class=\"chem\">sqrt(x + 5) &gt;= 0</span>，所以 <span class=\"chem\">h(x) &gt;= -2</span>。<br>(c) <span class=\"chem\">x = sqrt(y + 5) - 2 => (x + 2)^2 = y + 5 => h^{-1}(x) = (x + 2)^2 - 5</span>，定義域為 <span class=\"chem\">x &gt;= -2</span>（即 <span class=\"chem\">h</span> 的值域）。<br>(d) <span class=\"chem\">h</span> 是遞增函數，所以 <span class=\"chem\">y = h(x)</span> 與 <span class=\"chem\">y = h^{-1}(x)</span> 的交點都在 <span class=\"chem\">y = x</span> 上。解 <span class=\"chem\">(x + 2)^2 - 5 = x => x^2 + 3x - 1 = 0 => x = (-3 +- sqrt(13))/2</span>。由於 <span class=\"chem\">(-3 - sqrt(13))/2 ≈ -3.30 &lt; -2</span>，捨去此根。所以 <span class=\"chem\">x = (-3 + sqrt(13))/2</span>。</p>",
      // EN: <p>(a) <span class="chem">x &gt;= -5</span>; (b) <span class="chem">h(x) &gt;= -2</span>; (c) <span class="chem">h^{-1}(x) = (x + 2)^2 - 5</span> for <span class="chem">x &gt;= -2</span>; (d) <span class="chem">x = (-3 + sqrt(13))/2</span>.</p>
      answer: "<p>(a) <span class=\"chem\">x &gt;= -5</span>；(b) <span class=\"chem\">h(x) &gt;= -2</span>；(c) <span class=\"chem\">h^{-1}(x) = (x + 2)^2 - 5</span>，其中 <span class=\"chem\">x &gt;= -2</span>；(d) <span class=\"chem\">x = (-3 + sqrt(13))/2</span>。</p>",
      markscheme: [
        // EN: A1: Domain x ≥ −5.
        "A1：定義域 x ≥ −5。",
        // EN: A1: Range h(x) ≥ −2.
        "A1：值域 h(x) ≥ −2。",
        // EN: M1: Swaps x and y: x = √(y + 5) − 2 (or makes x the subject first).
        "M1：對調 x 和 y：x = √(y + 5) − 2（或先把 x 變為主項）。",
        // EN: A1: h⁻¹(x) = (x + 2)² − 5.
        "A1：h⁻¹(x) = (x + 2)² − 5。",
        // EN: A1: Domain of h⁻¹ is x ≥ −2 (the range of h).
        "A1：h⁻¹ 的定義域為 x ≥ −2（即 h 的值域）。",
        // EN: M1: Uses that h is increasing, so the graphs meet on y = x: √(x + 5) − 2 = x, or (x + 2)² − 5 = x with x ≥ −2.
        "M1：利用 h 是遞增函數，所以兩圖像在 y = x 上相交：√(x + 5) − 2 = x，或 (x + 2)² − 5 = x 且 x ≥ −2。",
        // EN: A1: Obtains x² + 3x − 1 = 0.
        "A1：得出 x² + 3x − 1 = 0。",
        // EN: A1: x = (−3 + √13)/2 only, rejecting (−3 − √13)/2 because it is less than −2.
        "A1：只取 x = (−3 + √13)/2，並因 (−3 − √13)/2 小於 −2 而捨去它。",
      ],
    },

    // ── t2-1-q026 · short · exam · SL · SL 2.5 · 4 marks
    "t2-1-q026": {
      // EN: <p>Let <span class="chem">f(x) = 2x + 3</span> and <span class="chem">g(x) = x^2</span>, for <span class="chem">x ∈ ℝ</span>. Solve the equation <span class="chem">(f ∘ g)(x) = (g ∘ f)(x)</span>, giving your answers in the form <span class="chem">p +- sqrt(q)</span>, where <span class="chem">p, q ∈ ℤ</span>.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = 2x + 3</span> 及 <span class=\"chem\">g(x) = x^2</span>，其中 <span class=\"chem\">x ∈ ℝ</span>。解 (Solve) 方程 <span class=\"chem\">(f ∘ g)(x) = (g ∘ f)(x)</span>，答案以 <span class=\"chem\">p +- sqrt(q)</span> 的形式表示，其中 <span class=\"chem\">p, q ∈ ℤ</span>。</p>",
      hints: [
        // EN: The order matters: <span class="chem">(f ∘ g)(x) = f(g(x))</span> means "do <span class="chem">g</span> first".
        "次序很重要：<span class=\"chem\">(f ∘ g)(x) = f(g(x))</span> 表示「先做 <span class=\"chem\">g</span>」。",
        // EN: Expand <span class="chem">(2x + 3)^2</span>, collect terms, then complete the square or use the quadratic formula.
        "展開 <span class=\"chem\">(2x + 3)^2</span>，合併同類項，然後配方或使用二次公式。",
      ],
      // EN: <p><span class="chem">(f ∘ g)(x) = f(x^2) = 2x^2 + 3</span> and <span class="chem">(g ∘ f)(x) = (2x + 3)^2 = 4x^2 + 12x + 9</span>. Equating: <span class="chem">2x^2 + 12x + 6 = 0 => x^2 + 6x + 3 = 0 => (x + 3)^2 = 6 => x = -3 +- sqrt(6)</span>.</p>
      solution: "<p><span class=\"chem\">(f ∘ g)(x) = f(x^2) = 2x^2 + 3</span>，而 <span class=\"chem\">(g ∘ f)(x) = (2x + 3)^2 = 4x^2 + 12x + 9</span>。令兩者相等：<span class=\"chem\">2x^2 + 12x + 6 = 0 => x^2 + 6x + 3 = 0 => (x + 3)^2 = 6 => x = -3 +- sqrt(6)</span>。</p>",
      // EN: <p><span class="chem">x = -3 +- sqrt(6)</span></p>
      answer: "<p><span class=\"chem\">x = -3 +- sqrt(6)</span></p>",
      markscheme: [
        // EN: A1: (f ∘ g)(x) = 2x² + 3.
        "A1：(f ∘ g)(x) = 2x² + 3。",
        // EN: A1: (g ∘ f)(x) = (2x + 3)² = 4x² + 12x + 9.
        "A1：(g ∘ f)(x) = (2x + 3)² = 4x² + 12x + 9。",
        // EN: M1: Equates and simplifies to x² + 6x + 3 = 0 (or 2x² + 12x + 6 = 0).
        "M1：令兩者相等並化簡為 x² + 6x + 3 = 0（或 2x² + 12x + 6 = 0）。",
        // EN: A1: x = −3 ± √6.
        "A1：x = −3 ± √6。",
      ],
    },

    // ── t2-1-q027 · numeric · exam · SL · SL 2.5 · 4 marks
    "t2-1-q027": {
      // EN: <p>The functions <span class="chem">f</span> and <span class="chem">g</span> are defined for <span class="chem">x ∈ ℝ</span>. You are given that <span class="chem">f(x) = 2x + 1</span> and <span class="chem">(f ∘ g)(x) = 6x - 7</span>. Find the value of <span class="chem">g(4)</span>.</p>
      stem: "<p>函數 <span class=\"chem\">f</span> 和 <span class=\"chem\">g</span> 定義於 <span class=\"chem\">x ∈ ℝ</span>。已知 <span class=\"chem\">f(x) = 2x + 1</span> 及 <span class=\"chem\">(f ∘ g)(x) = 6x - 7</span>。求 (Find) <span class=\"chem\">g(4)</span> 的值。</p>",
      hints: [
        // EN: Decode: you know the outer function and the result of the composite, so you must undo the outer function to find the inner one. <span class="chem">(f ∘ g)(x) = f(g(x)) = 2g(x) + 1</span>.
        "解碼：你知道外層函數和複合函數的結果，所以必須「還原」外層函數來求內層函數。<span class=\"chem\">(f ∘ g)(x) = f(g(x)) = 2g(x) + 1</span>。",
        // EN: Set <span class="chem">2g(x) + 1 = 6x - 7</span> and make <span class="chem">g(x)</span> the subject.
        "設 <span class=\"chem\">2g(x) + 1 = 6x - 7</span>，並把 <span class=\"chem\">g(x)</span> 變為主項。",
        // EN: Or work with numbers only: <span class="chem">f(g(4)) = 6(4) - 7 = 17</span>, so <span class="chem">g(4) = f^{-1}(17)</span>.
        "或者只用數字：<span class=\"chem\">f(g(4)) = 6(4) - 7 = 17</span>，所以 <span class=\"chem\">g(4) = f^{-1}(17)</span>。",
      ],
      // EN: <p>Decode: <span class="chem">g</span> is the inner function. <span class="chem">f(g(x)) = 2g(x) + 1 = 6x - 7</span>, so <span class="chem">g(x) = 3x - 4</span> and <span class="chem">g(4) = 8</span>. (Check: <span class="chem">f(8) = 17 = 6(4) - 7</span>.)</p>
      solution: "<p>解碼：<span class=\"chem\">g</span> 是內層函數。<span class=\"chem\">f(g(x)) = 2g(x) + 1 = 6x - 7</span>，所以 <span class=\"chem\">g(x) = 3x - 4</span>，而 <span class=\"chem\">g(4) = 8</span>。（驗算：<span class=\"chem\">f(8) = 17 = 6(4) - 7</span>。）</p>",
    },

    // ── t2-1-q028 · short · exam · SL · SL 2.2, 2.5 · 6 marks
    "t2-1-q028": {
      // EN: <p>The function <span class="chem">f</span> is defined by <span class="chem">f(x) = 5 - e^{2x}</span> for <span class="chem">x ∈ ℝ</span>.<br>(a) Write down the range of <span class="chem">f</span>. <strong>[1 mark]</strong><br>(b) Find an expression for <span class="chem">f^{-1}(x)</span>. <strong>[3 marks]</strong><br>(c) Write down the domain of <span class="chem">f^{-1}</span>. <strong>[1 mark]</strong><br>(d) Write down the value of <span class="chem">x</span> for which <span class="chem">f^{-1}(x) = 0</span>. <strong>[1 mark]</strong></p>
      stem: "<p>函數 <span class=\"chem\">f</span> 定義為 <span class=\"chem\">f(x) = 5 - e^{2x}</span>，其中 <span class=\"chem\">x ∈ ℝ</span>。<br>(a) 寫出 (Write down) <span class=\"chem\">f</span> 的值域。<strong>[1 mark]</strong><br>(b) 求 (Find) <span class=\"chem\">f^{-1}(x)</span> 的表達式。<strong>[3 marks]</strong><br>(c) 寫出 <span class=\"chem\">f^{-1}</span> 的定義域。<strong>[1 mark]</strong><br>(d) 寫出使 <span class=\"chem\">f^{-1}(x) = 0</span> 的 <span class=\"chem\">x</span> 值。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: <span class="chem">e^{2x}</span> takes every positive value but never <span class="chem">0</span>. What does that do to <span class="chem">5 - e^{2x}</span>?
        "<span class=\"chem\">e^{2x}</span> 可取所有正值，但永遠不等於 <span class=\"chem\">0</span>。這對 <span class=\"chem\">5 - e^{2x}</span> 有甚麼影響？",
        // EN: For (b), isolate the exponential, then take <span class="chem">ln</span> of both sides (you need the logarithm laws from topic 1.2).
        "在 (b) 部中，先把指數部分分離，再對兩邊取 <span class=\"chem\">ln</span>（你需要用到 topic 1.2 的對數定律）。",
        // EN: For (d), you do not need the formula: <span class="chem">f^{-1}(x) = 0</span> means <span class="chem">x = f(0)</span>.
        "在 (d) 部中，你不需要公式：<span class=\"chem\">f^{-1}(x) = 0</span> 表示 <span class=\"chem\">x = f(0)</span>。",
      ],
      // EN: <p>(a) <span class="chem">e^{2x} &gt; 0</span> for all <span class="chem">x</span>, so <span class="chem">f(x) &lt; 5</span>.<br>(b) <span class="chem">x = 5 - e^{2y} => e^{2y} = 5 - x => 2y = ln(5 - x) => f^{-1}(x) = (1/2) ln(5 - x)</span>.<br>(c) Domain of <span class="chem">f^{-1}</span> = range of <span class="chem">f</span>: <span class="chem">x &lt; 5</span>.<br>(d) <span class="chem">f^{-1}(x) = 0 => x = f(0) = 5 - 1 = 4</span>.</p>
      solution: "<p>(a) 對所有 <span class=\"chem\">x</span>，<span class=\"chem\">e^{2x} &gt; 0</span>，所以 <span class=\"chem\">f(x) &lt; 5</span>。<br>(b) <span class=\"chem\">x = 5 - e^{2y} => e^{2y} = 5 - x => 2y = ln(5 - x) => f^{-1}(x) = (1/2) ln(5 - x)</span>。<br>(c) <span class=\"chem\">f^{-1}</span> 的定義域 = <span class=\"chem\">f</span> 的值域：<span class=\"chem\">x &lt; 5</span>。<br>(d) <span class=\"chem\">f^{-1}(x) = 0 => x = f(0) = 5 - 1 = 4</span>。</p>",
      // EN: <p>(a) <span class="chem">f(x) &lt; 5</span>; (b) <span class="chem">f^{-1}(x) = (1/2) ln(5 - x)</span>; (c) <span class="chem">x &lt; 5</span>; (d) <span class="chem">x = 4</span>.</p>
      answer: "<p>(a) <span class=\"chem\">f(x) &lt; 5</span>；(b) <span class=\"chem\">f^{-1}(x) = (1/2) ln(5 - x)</span>；(c) <span class=\"chem\">x &lt; 5</span>；(d) <span class=\"chem\">x = 4</span>。</p>",
      markscheme: [
        // EN: A1: Range f(x) < 5 (since e^{2x} > 0).
        "A1：值域 f(x) < 5（因為 e^{2x} > 0）。",
        // EN: M1: Swaps x and y: x = 5 − e^{2y}, so e^{2y} = 5 − x.
        "M1：對調 x 和 y：x = 5 − e^{2y}，所以 e^{2y} = 5 − x。",
        // EN: M1: Takes natural logarithms: 2y = ln(5 − x).
        "M1：取自然對數：2y = ln(5 − x)。",
        // EN: A1: f⁻¹(x) = (1/2) ln(5 − x).
        "A1：f⁻¹(x) = (1/2) ln(5 − x)。",
        // EN: A1: Domain of f⁻¹ is x < 5.
        "A1：f⁻¹ 的定義域為 x < 5。",
        // EN: A1: x = 4 (because f⁻¹(x) = 0 exactly when x = f(0) = 4).
        "A1：x = 4（因為 f⁻¹(x) = 0 恰好當 x = f(0) = 4 時成立）。",
      ],
    },

    // ── t2-1-q029 · numeric · exam · SL · SL 2.4 · 3 marks
    "t2-1-q029": {
      // EN: <p>The graph of <span class="chem">y = x^2 + bx + c</span> has axis of symmetry <span class="chem">x = 3</span> and passes through the point <span class="chem">(1, 0)</span>. The graph has a second zero at <span class="chem">x = q</span>. Find the value of <span class="chem">q</span>.</p>
      stem: "<p><span class=\"chem\">y = x^2 + bx + c</span> 的圖像以 <span class=\"chem\">x = 3</span> 為對稱軸，並通過點 <span class=\"chem\">(1, 0)</span>。此圖像的第二個零點在 <span class=\"chem\">x = q</span>。求 (Find) <span class=\"chem\">q</span> 的值。</p>",
      hints: [
        // EN: The zeros of a parabola are placed symmetrically about its axis of symmetry.
        "拋物線的零點關於其對稱軸對稱地分佈。",
        // EN: <span class="chem">x = 1</span> is <span class="chem">2</span> units to the left of <span class="chem">x = 3</span>. Where is the point <span class="chem">2</span> units to the right?
        "<span class=\"chem\">x = 1</span> 在 <span class=\"chem\">x = 3</span> 左方 <span class=\"chem\">2</span> 個單位。右方 <span class=\"chem\">2</span> 個單位的點在哪裏？",
      ],
      // EN: <p>By symmetry about <span class="chem">x = 3</span>, the zeros are equally far from <span class="chem">3</span>: <span class="chem">(1 + q)/2 = 3 => q = 5</span>. (Algebraic check: <span class="chem">-b/2 = 3 => b = -6</span>; <span class="chem">1 - 6 + c = 0 => c = 5</span>; <span class="chem">x^2 - 6x + 5 = (x - 1)(x - 5)</span>.)</p>
      solution: "<p>由於關於 <span class=\"chem\">x = 3</span> 對稱，兩個零點與 <span class=\"chem\">3</span> 的距離相等：<span class=\"chem\">(1 + q)/2 = 3 => q = 5</span>。（代數驗算：<span class=\"chem\">-b/2 = 3 => b = -6</span>；<span class=\"chem\">1 - 6 + c = 0 => c = 5</span>；<span class=\"chem\">x^2 - 6x + 5 = (x - 1)(x - 5)</span>。）</p>",
    },

    // ── t2-1-q030 · short · exam · AHL · AHL 2.14 · 5 marks
    "t2-1-q030": {
      // EN: <p>Let <span class="chem">f(x) = x^3/(x^2 + 4)</span> for <span class="chem">x ∈ ℝ</span>.<br>(a) Show that <span class="chem">f</span> is an odd function. <strong>[2 marks]</strong><br>The function <span class="chem">g</span> is even, with <span class="chem">g(3) = 7</span>. Let <span class="chem">h(x) = f(x) g(x)</span>.<br>(b) Determine whether <span class="chem">h</span> is odd, even or neither. Justify your answer. <strong>[2 marks]</strong><br>(c) Find the exact value of <span class="chem">h(-3)</span>. <strong>[1 mark]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = x^3/(x^2 + 4)</span>，其中 <span class=\"chem\">x ∈ ℝ</span>。<br>(a) 證明 (Show that) <span class=\"chem\">f</span> 是奇函數。<strong>[2 marks]</strong><br>函數 <span class=\"chem\">g</span> 是偶函數，且 <span class=\"chem\">g(3) = 7</span>。設 <span class=\"chem\">h(x) = f(x) g(x)</span>。<br>(b) 確定 (Determine) <span class=\"chem\">h</span> 是奇函數、偶函數或兩者皆不是，並提出理據 (Justify)。<strong>[2 marks]</strong><br>(c) 求 (Find) <span class=\"chem\">h(-3)</span> 的準確值。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Odd means <span class="chem">f(-x) = -f(x)</span> for every <span class="chem">x</span>; even means <span class="chem">g(-x) = g(x)</span>.
        "奇函數表示對每一個 <span class=\"chem\">x</span> 都有 <span class=\"chem\">f(-x) = -f(x)</span>；偶函數表示 <span class=\"chem\">g(-x) = g(x)</span>。",
        // EN: For (b), substitute <span class="chem">-x</span> into <span class="chem">h</span> and use the two facts. For (c), use <span class="chem">h(-3) = f(-3) g(-3)</span>.
        "在 (b) 部中，把 <span class=\"chem\">-x</span> 代入 <span class=\"chem\">h</span>，並利用這兩個性質。在 (c) 部中，利用 <span class=\"chem\">h(-3) = f(-3) g(-3)</span>。",
      ],
      // EN: <p>(a) <span class="chem">f(-x) = (-x)^3/((-x)^2 + 4) = -x^3/(x^2 + 4) = -f(x)</span> for all <span class="chem">x</span>, so <span class="chem">f</span> is odd.<br>(b) <span class="chem">h(-x) = f(-x) g(-x) = (-f(x))(g(x)) = -h(x)</span>, so <span class="chem">h</span> is odd (odd × even = odd).<br>(c) <span class="chem">f(-3) = -27/13</span> and <span class="chem">g(-3) = g(3) = 7</span>, so <span class="chem">h(-3) = -189/13</span>.</p>
      solution: "<p>(a) 對所有 <span class=\"chem\">x</span>，<span class=\"chem\">f(-x) = (-x)^3/((-x)^2 + 4) = -x^3/(x^2 + 4) = -f(x)</span>，所以 <span class=\"chem\">f</span> 是奇函數。<br>(b) <span class=\"chem\">h(-x) = f(-x) g(-x) = (-f(x))(g(x)) = -h(x)</span>，所以 <span class=\"chem\">h</span> 是奇函數（奇 × 偶 = 奇）。<br>(c) <span class=\"chem\">f(-3) = -27/13</span> 及 <span class=\"chem\">g(-3) = g(3) = 7</span>，所以 <span class=\"chem\">h(-3) = -189/13</span>。</p>",
      // EN: <p>(a) <span class="chem">f(-x) = -x^3/(x^2 + 4) = -f(x)</span>; (b) <span class="chem">h</span> is odd, since <span class="chem">h(-x) = f(-x) g(-x) = -f(x) g(x) = -h(x)</span>; (c) <span class="chem">h(-3) = -189/13</span>.</p>
      answer: "<p>(a) <span class=\"chem\">f(-x) = -x^3/(x^2 + 4) = -f(x)</span>；(b) <span class=\"chem\">h</span> 是奇函數，因為 <span class=\"chem\">h(-x) = f(-x) g(-x) = -f(x) g(x) = -h(x)</span>；(c) <span class=\"chem\">h(-3) = -189/13</span>。</p>",
      markscheme: [
        // EN: M1: Substitutes −x: f(−x) = (−x)³/((−x)² + 4).
        "M1：代入 −x：f(−x) = (−x)³/((−x)² + 4)。",
        // EN: A1: Simplifies to −x³/(x² + 4) = −f(x), so f is odd.
        "A1：化簡為 −x³/(x² + 4) = −f(x)，所以 f 是奇函數。",
        // EN: M1: Writes h(−x) = f(−x) g(−x) = (−f(x)) g(x).
        "M1：寫出 h(−x) = f(−x) g(−x) = (−f(x)) g(x)。",
        // EN: A1: Concludes h(−x) = −h(x), so h is odd.
        "A1：得出結論 h(−x) = −h(x)，所以 h 是奇函數。",
        // EN: A1: h(−3) = −h(3) = −(27/13)(7) = −189/13.
        "A1：h(−3) = −h(3) = −(27/13)(7) = −189/13。",
      ],
    },

    // ── t2-1-q031 · numeric · challenge · AHL · AHL 2.14 · 5 marks
    "t2-1-q031": {
      // EN: <p>The function <span class="chem">f(x) = (2x + b)/(x + c)</span>, <span class="chem">x != -c</span>, is its own inverse. The graph of <span class="chem">y = f(x)</span> passes through the point <span class="chem">(1, 4)</span>. Find the value of <span class="chem">b</span>.</p>
      stem: "<p>函數 <span class=\"chem\">f(x) = (2x + b)/(x + c)</span>，<span class=\"chem\">x != -c</span>，是它自己的反函數。<span class=\"chem\">y = f(x)</span> 的圖像通過點 <span class=\"chem\">(1, 4)</span>。求 (Find) <span class=\"chem\">b</span> 的值。</p>",
      hints: [
        // EN: Decode: "its own inverse" means <span class="chem">f</span> is self-inverse, so its graph is symmetric about <span class="chem">y = x</span>. For this rational function the vertical asymptote <span class="chem">x = -c</span> must be the reflection of the horizontal asymptote <span class="chem">y = 2</span>.
        "解碼：「是它自己的反函數」表示 <span class=\"chem\">f</span> 是自反函數，所以它的圖像關於 <span class=\"chem\">y = x</span> 對稱。對這個有理函數而言，垂直漸近線 <span class=\"chem\">x = -c</span> 必須是水平漸近線 <span class=\"chem\">y = 2</span> 的反射。",
        // EN: So <span class="chem">-c = 2</span>. Then use the point <span class="chem">(1, 4)</span> to find <span class="chem">b</span>.
        "所以 <span class=\"chem\">-c = 2</span>。然後利用點 <span class=\"chem\">(1, 4)</span> 求 <span class=\"chem\">b</span>。",
        // EN: Make sure the function is not a constant: check that <span class="chem">2c - b != 0</span>.
        "確保函數不是常數：檢查 <span class=\"chem\">2c - b != 0</span>。",
      ],
      // EN: <p>Decode: self-inverse means <span class="chem">f^{-1} = f</span>, so the graph is symmetric in <span class="chem">y = x</span>. The horizontal asymptote is <span class="chem">y = 2</span>, so the vertical asymptote must be <span class="chem">x = 2</span>: <span class="chem">-c = 2 => c = -2</span>. (Algebraically: <span class="chem">x = (2y + b)/(y + c) => y = (b - cx)/(x - 2)</span>, which equals <span class="chem">(2x + b)/(x + c)</span> only when <span class="chem">c = -2</span>.) Then <span class="chem">f(1) = (2 + b)/(1 - 2) = -(2 + b) = 4 => b = -6</span>. Check: <span class="chem">f(x) = (2x - 6)/(x - 2)</span> is not constant, since <span class="chem">2(-2) - (-6) = 2 != 0</span>.</p>
      solution: "<p>解碼：自反函數表示 <span class=\"chem\">f^{-1} = f</span>，所以圖像關於 <span class=\"chem\">y = x</span> 對稱。水平漸近線為 <span class=\"chem\">y = 2</span>，所以垂直漸近線必須是 <span class=\"chem\">x = 2</span>：<span class=\"chem\">-c = 2 => c = -2</span>。（代數方法：<span class=\"chem\">x = (2y + b)/(y + c) => y = (b - cx)/(x - 2)</span>，只有當 <span class=\"chem\">c = -2</span> 時它才等於 <span class=\"chem\">(2x + b)/(x + c)</span>。）於是 <span class=\"chem\">f(1) = (2 + b)/(1 - 2) = -(2 + b) = 4 => b = -6</span>。驗算：<span class=\"chem\">f(x) = (2x - 6)/(x - 2)</span> 不是常數，因為 <span class=\"chem\">2(-2) - (-6) = 2 != 0</span>。</p>",
    },

    // ── t2-1-q032 · numeric · challenge · SL · SL 2.5 · 5 marks
    "t2-1-q032": {
      // EN: <p>Let <span class="chem">f(x) = 2x - 3</span>. A calculator key applies <span class="chem">f</span> to whatever number is on the screen. The number <span class="chem">4</span> is entered and the key is pressed <span class="chem">n</span> times, so the screen shows <span class="chem">(f ∘ f ∘ … ∘ f)(4)</span> with <span class="chem">n</span> copies of <span class="chem">f</span>. Find the least number of presses for which the screen shows a number greater than <span class="chem">1000</span>.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = 2x - 3</span>。計算機上有一個按鍵，會把 <span class=\"chem\">f</span> 作用於屏幕上的數。輸入數 <span class=\"chem\">4</span> 後把該鍵按 <span class=\"chem\">n</span> 次，屏幕便顯示 <span class=\"chem\">(f ∘ f ∘ … ∘ f)(4)</span>，其中共有 <span class=\"chem\">n</span> 個 <span class=\"chem\">f</span>。求 (Find) 使屏幕顯示的數大於 <span class=\"chem\">1000</span> 的最少按鍵次數。</p>",
      hints: [
        // EN: Decode: this is repeated composition. Work out the first few outputs, spot the pattern, and write the result after <span class="chem">n</span> presses as a formula in <span class="chem">n</span>. The answer must be a positive integer.
        "解碼：這是重複的複合。先算出最初幾個輸出值，找出規律，再把按 <span class=\"chem\">n</span> 次後的結果寫成以 <span class=\"chem\">n</span> 表示的公式。答案必須是正整數。",
        // EN: The outputs are <span class="chem">5, 7, 11, 19, …</span>. Subtract <span class="chem">3</span> from each.
        "輸出值為 <span class=\"chem\">5, 7, 11, 19, …</span>。把每個值減去 <span class=\"chem\">3</span>。",
        // EN: After <span class="chem">n</span> presses the screen shows <span class="chem">2^n + 3</span>. Solve <span class="chem">2^n + 3 &gt; 1000</span> using powers of <span class="chem">2</span>.
        "按 <span class=\"chem\">n</span> 次後，屏幕顯示 <span class=\"chem\">2^n + 3</span>。利用 <span class=\"chem\">2</span> 的冪解 <span class=\"chem\">2^n + 3 &gt; 1000</span>。",
      ],
      // EN: <p>Decode: "press the key <span class="chem">n</span> times" is the <span class="chem">n</span>-fold composite of <span class="chem">f</span>. Outputs: <span class="chem">f(4) = 5</span>, <span class="chem">f(5) = 7</span>, <span class="chem">f(7) = 11</span>, <span class="chem">f(11) = 19</span>, which are <span class="chem">2^n + 3</span>. This continues because if <span class="chem">x = 2^n + 3</span>, then <span class="chem">f(x) = 2^{n+1} + 6 - 3 = 2^{n+1} + 3</span>. We need <span class="chem">2^n + 3 &gt; 1000 => 2^n &gt; 997</span>. Since <span class="chem">2^9 = 512</span> and <span class="chem">2^{10} = 1024</span>, the least number of presses is <span class="chem">n = 10</span> (screen shows <span class="chem">1027</span>).</p>
      solution: "<p>解碼：「把該鍵按 <span class=\"chem\">n</span> 次」就是 <span class=\"chem\">f</span> 的 <span class=\"chem\">n</span> 重複合。輸出值：<span class=\"chem\">f(4) = 5</span>、<span class=\"chem\">f(5) = 7</span>、<span class=\"chem\">f(7) = 11</span>、<span class=\"chem\">f(11) = 19</span>，即 <span class=\"chem\">2^n + 3</span>。這規律會持續，因為若 <span class=\"chem\">x = 2^n + 3</span>，則 <span class=\"chem\">f(x) = 2^{n+1} + 6 - 3 = 2^{n+1} + 3</span>。我們需要 <span class=\"chem\">2^n + 3 &gt; 1000 => 2^n &gt; 997</span>。由於 <span class=\"chem\">2^9 = 512</span> 而 <span class=\"chem\">2^{10} = 1024</span>，最少按鍵次數為 <span class=\"chem\">n = 10</span>（屏幕顯示 <span class=\"chem\">1027</span>）。</p>",
    },

    // ── t2-1-q033 · short · challenge · SL · SL 2.2, 2.5 · 7 marks
    "t2-1-q033": {
      // EN: <p>A currency exchange office first takes a fixed fee of <span class="chem">5</span> dollars from the amount handed in, then changes the rest into euros at <span class="chem">0.9</span> euros per dollar. So <span class="chem">d</span> dollars become <span class="chem">E(d) = 0.9(d - 5)</span> euros, for <span class="chem">d &gt; 5</span>. A second office changes <span class="chem">e</span> euros into <span class="chem">Y(e) = 160e - 200</span> yen.<br>(a) A traveller changes <span class="chem">d</span> dollars into euros at the first office, then changes all the euros into yen at the second office. Find, in the form <span class="chem">pd + q</span>, an expression for the number of yen received. <strong>[2 marks]</strong><br>(b) The traveller needs exactly <span class="chem">14 200</span> yen. Find the number of dollars that must be handed in. <strong>[3 marks]</strong><br>(c) Only whole numbers of dollars can be handed in. Find the least number of dollars for which the traveller receives a positive amount of yen. <strong>[2 marks]</strong></p>
      stem: "<p>一間外幣兌換店會先從交來的款額中收取 <span class=\"chem\">5</span> 美元的固定手續費，然後把餘款按每美元兌 <span class=\"chem\">0.9</span> 歐元兌換成歐元。所以 <span class=\"chem\">d</span> 美元會變成 <span class=\"chem\">E(d) = 0.9(d - 5)</span> 歐元，其中 <span class=\"chem\">d &gt; 5</span>。另一間兌換店把 <span class=\"chem\">e</span> 歐元兌換成 <span class=\"chem\">Y(e) = 160e - 200</span> 日圓。<br>(a) 一名旅客在第一間店把 <span class=\"chem\">d</span> 美元兌換成歐元，然後在第二間店把全部歐元兌換成日圓。求 (Find) 所得日圓數目的表達式，以 <span class=\"chem\">pd + q</span> 的形式表示。<strong>[2 marks]</strong><br>(b) 該旅客需要恰好 <span class=\"chem\">14 200</span> 日圓。求必須交出的美元數目。<strong>[3 marks]</strong><br>(c) 只可以交出整數美元。求使旅客收到正數日圓的最少美元數目。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: dollars go into the first office, and its output goes into the second. That is a composite with <span class="chem">E</span> applied first, so you want <span class="chem">(Y ∘ E)(d)</span>, not <span class="chem">(E ∘ Y)(d)</span>.
        "解碼：美元先進入第一間店，其輸出再進入第二間店。這是先作用 <span class=\"chem\">E</span> 的複合函數，所以你要的是 <span class=\"chem\">(Y ∘ E)(d)</span>，而不是 <span class=\"chem\">(E ∘ Y)(d)</span>。",
        // EN: For (b), you know the output and want the input, so you are using the inverse of the composite. Solve <span class="chem">(Y ∘ E)(d) = 14 200</span>.
        "在 (b) 部中，你知道輸出而要求輸入，所以你是在使用複合函數的反函數。解 <span class=\"chem\">(Y ∘ E)(d) = 14 200</span>。",
        // EN: For (c), "a positive amount" gives an inequality, and "whole numbers" means round <strong>up</strong> to the next integer.
        "在 (c) 部中，「正數」給出一個不等式，而「整數美元」表示要<strong>向上</strong>取整至下一個整數。",
      ],
      // EN: <p>Decode: two machines in a row form a composite, and the inner (first) function is <span class="chem">E</span>.<br>(a) <span class="chem">(Y ∘ E)(d) = 160(0.9(d - 5)) - 200 = 144(d - 5) - 200 = 144d - 920</span>.<br>(b) <span class="chem">144d - 920 = 14 200 => 144d = 15 120 => d = 105</span> dollars.<br>(c) <span class="chem">144d - 920 &gt; 0 => d &gt; 920/144 ≈ 6.39</span>. The least whole number of dollars is <span class="chem">7</span> (check: <span class="chem">144(6) - 920 = -56 &lt; 0</span> and <span class="chem">144(7) - 920 = 88 &gt; 0</span>).</p>
      solution: "<p>解碼：兩部機器相連就構成複合函數，而內層（先作用的）函數是 <span class=\"chem\">E</span>。<br>(a) <span class=\"chem\">(Y ∘ E)(d) = 160(0.9(d - 5)) - 200 = 144(d - 5) - 200 = 144d - 920</span>。<br>(b) <span class=\"chem\">144d - 920 = 14 200 => 144d = 15 120 => d = 105</span> 美元。<br>(c) <span class=\"chem\">144d - 920 &gt; 0 => d &gt; 920/144 ≈ 6.39</span>。最少的整數美元數目是 <span class=\"chem\">7</span>（驗算：<span class=\"chem\">144(6) - 920 = -56 &lt; 0</span> 而 <span class=\"chem\">144(7) - 920 = 88 &gt; 0</span>）。</p>",
      // EN: <p>(a) <span class="chem">(Y ∘ E)(d) = 144d - 920</span>; (b) <span class="chem">105</span> dollars; (c) <span class="chem">7</span> dollars.</p>
      answer: "<p>(a) <span class=\"chem\">(Y ∘ E)(d) = 144d - 920</span>；(b) <span class=\"chem\">105</span> 美元；(c) <span class=\"chem\">7</span> 美元。</p>",
      markscheme: [
        // EN: M1: Recognises the composite (Y ∘ E)(d) = Y(0.9(d − 5)) = 160 × 0.9(d − 5) − 200.
        "M1：辨識出複合函數 (Y ∘ E)(d) = Y(0.9(d − 5)) = 160 × 0.9(d − 5) − 200。",
        // EN: A1: (Y ∘ E)(d) = 144d − 920.
        "A1：(Y ∘ E)(d) = 144d − 920。",
        // EN: M1: Recognises that the answer is (Y ∘ E)⁻¹(14 200), i.e. sets 144d − 920 = 14 200.
        "M1：辨識出答案是 (Y ∘ E)⁻¹(14 200)，即設 144d − 920 = 14 200。",
        // EN: A1: 144d = 15 120.
        "A1：144d = 15 120。",
        // EN: A1: d = 105 dollars.
        "A1：d = 105 美元。",
        // EN: M1: Sets 144d − 920 > 0, so d > 920/144 = 6.39 (3 s.f.).
        "M1：設 144d − 920 > 0，所以 d > 920/144 = 6.39（3 位有效數字）。",
        // EN: A1: Least whole number of dollars is 7.
        "A1：最少的整數美元數目為 7。",
      ],
    },

    // ── t2-1-q034 · short · challenge · AHL · AHL 2.14 · 7 marks
    "t2-1-q034": {
      // EN: <p>Let <span class="chem">f(x) = x^4 - 8x^2</span> for <span class="chem">x &gt;= a</span>.<br>(a) By writing <span class="chem">f(x)</span> in the form <span class="chem">(x^2 - p)^2 - q</span>, find the smallest value of <span class="chem">a</span> for which <span class="chem">f^{-1}</span> exists. <strong>[3 marks]</strong><br>(b) For this value of <span class="chem">a</span>, find an expression for <span class="chem">f^{-1}(x)</span> and state its domain. <strong>[3 marks]</strong><br>(c) Write down the value of <span class="chem">x</span> for which <span class="chem">f^{-1}(x) = 3</span>. <strong>[1 mark]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = x^4 - 8x^2</span>，其中 <span class=\"chem\">x &gt;= a</span>。<br>(a) 把 <span class=\"chem\">f(x)</span> 寫成 <span class=\"chem\">(x^2 - p)^2 - q</span> 的形式，由此求 (find) 使 <span class=\"chem\">f^{-1}</span> 存在的 <span class=\"chem\">a</span> 的最小值。<strong>[3 marks]</strong><br>(b) 對於這個 <span class=\"chem\">a</span> 值，求 <span class=\"chem\">f^{-1}(x)</span> 的表達式，並寫出 (state) 其定義域。<strong>[3 marks]</strong><br>(c) 寫出 (Write down) 使 <span class=\"chem\">f^{-1}(x) = 3</span> 的 <span class=\"chem\">x</span> 值。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: an inverse exists only if <span class="chem">f</span> is one-to-one. Treat <span class="chem">x^2</span> as the variable and complete the square to see where <span class="chem">f</span> turns.
        "解碼：只有當 <span class=\"chem\">f</span> 是一對一函數時，反函數才存在。把 <span class=\"chem\">x^2</span> 當作變數並配方，看看 <span class=\"chem\">f</span> 在哪裏轉向。",
        // EN: <span class="chem">x^4 - 8x^2 = (x^2 - 4)^2 - 16</span>. As <span class="chem">x</span> increases from <span class="chem">0</span>, <span class="chem">x^2 - 4</span> is negative until <span class="chem">x = 2</span>, then positive.
        "<span class=\"chem\">x^4 - 8x^2 = (x^2 - 4)^2 - 16</span>。當 <span class=\"chem\">x</span> 由 <span class=\"chem\">0</span> 開始增加，<span class=\"chem\">x^2 - 4</span> 在 <span class=\"chem\">x = 2</span> 之前是負數，之後是正數。",
        // EN: For (b), you will take two square roots. Use the restriction <span class="chem">y &gt;= 2</span> to choose each sign.
        "在 (b) 部中，你需要取兩次平方根。利用限制 <span class=\"chem\">y &gt;= 2</span> 選取每次的正負號。",
        // EN: For (c), <span class="chem">f^{-1}(x) = 3</span> means <span class="chem">x = f(3)</span>.
        "在 (c) 部中，<span class=\"chem\">f^{-1}(x) = 3</span> 表示 <span class=\"chem\">x = f(3)</span>。",
      ],
      // EN: <p>Decode: "smallest <span class="chem">a</span> for which <span class="chem">f^{-1}</span> exists" asks for the largest interval of the form <span class="chem">x &gt;= a</span> on which <span class="chem">f</span> is one-to-one.<br>(a) <span class="chem">f(x) = (x^2 - 4)^2 - 16</span>. The minimum <span class="chem">-16</span> is at <span class="chem">x = 2</span> (for <span class="chem">x &gt;= 0</span>). On <span class="chem">0 &lt;= x &lt;= 2</span> the value <span class="chem">(x^2 - 4)^2</span> decreases, and for <span class="chem">x &gt;= 2</span> it increases. So <span class="chem">f</span> is one-to-one on <span class="chem">x &gt;= a</span> exactly when <span class="chem">a &gt;= 2</span>, and the smallest value is <span class="chem">a = 2</span>.<br>(b) <span class="chem">x = (y^2 - 4)^2 - 16 => y^2 - 4 = sqrt(x + 16)</span> (positive, since <span class="chem">y &gt;= 2</span>) <span class="chem">=> y = sqrt(4 + sqrt(x + 16))</span> (positive root). So <span class="chem">f^{-1}(x) = sqrt(4 + sqrt(x + 16))</span>, with domain <span class="chem">x &gt;= -16</span>.<br>(c) <span class="chem">x = f(3) = 81 - 72 = 9</span>.</p>
      solution: "<p>解碼：「使 <span class=\"chem\">f^{-1}</span> 存在的最小 <span class=\"chem\">a</span>」是要求形如 <span class=\"chem\">x &gt;= a</span> 而令 <span class=\"chem\">f</span> 為一對一的最大區間。<br>(a) <span class=\"chem\">f(x) = (x^2 - 4)^2 - 16</span>。最小值 <span class=\"chem\">-16</span> 在 <span class=\"chem\">x = 2</span> 取得（對於 <span class=\"chem\">x &gt;= 0</span>）。在 <span class=\"chem\">0 &lt;= x &lt;= 2</span> 上 <span class=\"chem\">(x^2 - 4)^2</span> 的值遞減，而在 <span class=\"chem\">x &gt;= 2</span> 上遞增。所以 <span class=\"chem\">f</span> 在 <span class=\"chem\">x &gt;= a</span> 上是一對一，恰好當 <span class=\"chem\">a &gt;= 2</span>，而最小值是 <span class=\"chem\">a = 2</span>。<br>(b) <span class=\"chem\">x = (y^2 - 4)^2 - 16 => y^2 - 4 = sqrt(x + 16)</span>（取正值，因為 <span class=\"chem\">y &gt;= 2</span>）<span class=\"chem\">=> y = sqrt(4 + sqrt(x + 16))</span>（取正根）。所以 <span class=\"chem\">f^{-1}(x) = sqrt(4 + sqrt(x + 16))</span>，定義域為 <span class=\"chem\">x &gt;= -16</span>。<br>(c) <span class=\"chem\">x = f(3) = 81 - 72 = 9</span>。</p>",
      // EN: <p>(a) <span class="chem">f(x) = (x^2 - 4)^2 - 16</span>, so <span class="chem">a = 2</span>; (b) <span class="chem">f^{-1}(x) = sqrt(4 + sqrt(x + 16))</span>, <span class="chem">x &gt;= -16</span>; (c) <span class="chem">x = 9</span>.</p>
      answer: "<p>(a) <span class=\"chem\">f(x) = (x^2 - 4)^2 - 16</span>，所以 <span class=\"chem\">a = 2</span>；(b) <span class=\"chem\">f^{-1}(x) = sqrt(4 + sqrt(x + 16))</span>，<span class=\"chem\">x &gt;= -16</span>；(c) <span class=\"chem\">x = 9</span>。</p>",
      markscheme: [
        // EN: A1: f(x) = (x² − 4)² − 16.
        "A1：f(x) = (x² − 4)² − 16。",
        // EN: R1: The minimum value −16 occurs at x² = 4, i.e. x = ±2; f decreases on 0 ≤ x ≤ 2 and increases for x ≥ 2, so any domain x ≥ a with a < 2 contains two inputs with the same output.
        "R1：最小值 −16 在 x² = 4，即 x = ±2 時取得；f 在 0 ≤ x ≤ 2 上遞減，在 x ≥ 2 上遞增，所以任何 a < 2 的定義域 x ≥ a 都包含兩個有相同輸出的輸入。",
        // EN: A1: Smallest a = 2.
        "A1：最小的 a = 2。",
        // EN: M1: Swaps x and y and rearranges: (y² − 4)² = x + 16, so y² = 4 ± √(x + 16).
        "M1：對調 x 和 y 並整理：(y² − 4)² = x + 16，所以 y² = 4 ± √(x + 16)。",
        // EN: A1: Chooses positive roots (since y ≥ 2 means y² − 4 ≥ 0): f⁻¹(x) = √(4 + √(x + 16)).
        "A1：選取正根（因為 y ≥ 2 表示 y² − 4 ≥ 0）：f⁻¹(x) = √(4 + √(x + 16))。",
        // EN: A1: Domain of f⁻¹ is x ≥ −16 (the range of f).
        "A1：f⁻¹ 的定義域為 x ≥ −16（即 f 的值域）。",
        // EN: A1: x = f(3) = 81 − 72 = 9.
        "A1：x = f(3) = 81 − 72 = 9。",
      ],
    },

    // ── t2-1-q035 · numeric · exam · SL · SL 2.4 · 3 marks
    "t2-1-q035": {
      // EN: <p>The curves <span class="chem">y = 2^x</span> and <span class="chem">y = x + 3</span> intersect at two points. Find the <span class="chem">x</span>-coordinate of the intersection point that lies in the first quadrant. Give your answer to 3 significant figures.</p>
      stem: "<p>曲線 <span class=\"chem\">y = 2^x</span> 與 <span class=\"chem\">y = x + 3</span> 相交於兩點。求 (Find) 位於第一象限的交點的 <span class=\"chem\">x</span> 坐標，答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Graph <span class="chem">Y_1 = 2^x</span> and <span class="chem">Y_2 = x + 3</span>, then use the intersect tool.
        "畫出 <span class=\"chem\">Y_1 = 2^x</span> 和 <span class=\"chem\">Y_2 = x + 3</span> 的圖像，然後使用求交點功能。",
        // EN: There is another intersection near <span class="chem">x = -2.86</span>. Choose the one with <span class="chem">x &gt; 0</span>.
        "另一個交點在 <span class=\"chem\">x = -2.86</span> 附近。選取 <span class=\"chem\">x &gt; 0</span> 的那一個。",
      ],
      // EN: <p>Using the GDC intersect tool on <span class="chem">y = 2^x</span> and <span class="chem">y = x + 3</span>: the intersections are at <span class="chem">x ≈ -2.86</span> and <span class="chem">x ≈ 2.4449</span>. The first-quadrant point has <span class="chem">x ≈ 2.44</span> (3 s.f.), with <span class="chem">y ≈ 5.44</span>. The equation <span class="chem">2^x = x + 3</span> cannot be solved algebraically, so technology is required.</p>
      solution: "<p>對 <span class=\"chem\">y = 2^x</span> 和 <span class=\"chem\">y = x + 3</span> 使用 GDC 的求交點功能：交點在 <span class=\"chem\">x ≈ -2.86</span> 和 <span class=\"chem\">x ≈ 2.4449</span>。第一象限的點的 <span class=\"chem\">x ≈ 2.44</span>（3 位有效數字），而 <span class=\"chem\">y ≈ 5.44</span>。方程 <span class=\"chem\">2^x = x + 3</span> 不能用代數方法求解，所以必須使用科技工具。</p>",
    },

    // ── t2-1-q036 · numeric · exam · SL · SL 2.2, 2.4 · 3 marks
    "t2-1-q036": {
      // EN: <p>Let <span class="chem">f(x) = 3 ln x - x + 2</span> for <span class="chem">1 &lt;= x &lt;= 10</span>. Find the least value of <span class="chem">f(x)</span> on this domain. Give your answer to 3 significant figures.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = 3 ln x - x + 2</span>，其中 <span class=\"chem\">1 &lt;= x &lt;= 10</span>。求 (Find) <span class=\"chem\">f(x)</span> 在此定義域上的最小值，答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Graph <span class="chem">y = 3 ln x - x + 2</span> with the window <span class="chem">1 &lt;= x &lt;= 10</span>. Does the graph have a local minimum on this interval?
        "以視窗 <span class=\"chem\">1 &lt;= x &lt;= 10</span> 畫出 <span class=\"chem\">y = 3 ln x - x + 2</span> 的圖像。圖像在此區間上有局部極小點嗎？",
        // EN: The only turning point is a maximum (at <span class="chem">x = 3</span>). The least value must be at one of the end points. Compare <span class="chem">f(1)</span> and <span class="chem">f(10)</span>.
        "唯一的轉向點是極大點（在 <span class=\"chem\">x = 3</span>）。最小值必定在其中一個端點。比較 <span class=\"chem\">f(1)</span> 和 <span class=\"chem\">f(10)</span>。",
      ],
      // EN: <p>On the GDC the graph rises to a maximum at <span class="chem">(3, 2.30)</span>, then falls. There is no local minimum, so the least value is at an end point: <span class="chem">f(1) = 0 - 1 + 2 = 1</span> and <span class="chem">f(10) = 3 ln 10 - 8 ≈ -1.0922</span>. The least value is <span class="chem">-1.09</span> (3 s.f.), so the range is <span class="chem">-1.09 &lt;= f(x) &lt;= 2.30</span>.</p>
      solution: "<p>在 GDC 上，圖像上升至極大點 <span class=\"chem\">(3, 2.30)</span>，然後下降。圖像沒有局部極小點，所以最小值在端點：<span class=\"chem\">f(1) = 0 - 1 + 2 = 1</span> 及 <span class=\"chem\">f(10) = 3 ln 10 - 8 ≈ -1.0922</span>。最小值為 <span class=\"chem\">-1.09</span>（3 位有效數字），所以值域為 <span class=\"chem\">-1.09 &lt;= f(x) &lt;= 2.30</span>。</p>",
    },

    // ── t2-1-q037 · numeric · exam · SL · SL 2.2 · 3 marks
    "t2-1-q037": {
      // EN: <p>The function <span class="chem">f(x) = x^3 + e^x</span>, <span class="chem">x ∈ ℝ</span>, is increasing, so its inverse <span class="chem">f^{-1}</span> exists. Find <span class="chem">f^{-1}(5)</span>, giving your answer to 3 significant figures.</p>
      stem: "<p>函數 <span class=\"chem\">f(x) = x^3 + e^x</span>，<span class=\"chem\">x ∈ ℝ</span>，是遞增函數，所以其反函數 <span class=\"chem\">f^{-1}</span> 存在。求 (Find) <span class=\"chem\">f^{-1}(5)</span>，答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: You cannot write down <span class="chem">f^{-1}(x)</span> as a formula. But <span class="chem">f^{-1}(5) = a</span> means <span class="chem">f(a) = 5</span>.
        "你不能把 <span class=\"chem\">f^{-1}(x)</span> 寫成公式。但 <span class=\"chem\">f^{-1}(5) = a</span> 表示 <span class=\"chem\">f(a) = 5</span>。",
        // EN: Graph <span class="chem">Y_1 = x^3 + e^x</span> and <span class="chem">Y_2 = 5</span> and find the intersection.
        "畫出 <span class=\"chem\">Y_1 = x^3 + e^x</span> 和 <span class=\"chem\">Y_2 = 5</span> 的圖像，並求交點。",
      ],
      // EN: <p>Let <span class="chem">f^{-1}(5) = a</span>, so <span class="chem">a^3 + e^a = 5</span>. The GDC (intersection of <span class="chem">y = x^3 + e^x</span> with <span class="chem">y = 5</span>) gives <span class="chem">a ≈ 1.19367</span>. So <span class="chem">f^{-1}(5) ≈ 1.19</span> (3 s.f.). Check: <span class="chem">1.1937^3 + e^{1.1937} ≈ 1.701 + 3.299 = 5.00</span>.</p>
      solution: "<p>設 <span class=\"chem\">f^{-1}(5) = a</span>，則 <span class=\"chem\">a^3 + e^a = 5</span>。GDC（<span class=\"chem\">y = x^3 + e^x</span> 與 <span class=\"chem\">y = 5</span> 的交點）給出 <span class=\"chem\">a ≈ 1.19367</span>。所以 <span class=\"chem\">f^{-1}(5) ≈ 1.19</span>（3 位有效數字）。驗算：<span class=\"chem\">1.1937^3 + e^{1.1937} ≈ 1.701 + 3.299 = 5.00</span>。</p>",
    },

    // ── t2-1-q038 · short · exam · SL · SL 2.3, 2.4 · 7 marks
    "t2-1-q038": {
      // EN: <p>Let <span class="chem">f(x) = ln(x + 1)</span> and <span class="chem">g(x) = 2 - 0.5x</span>. The function <span class="chem">h</span> is defined by <span class="chem">h(x) = f(x) + g(x)</span> for <span class="chem">0 &lt;= x &lt;= 10</span>.<br>(a) Sketch the graph of <span class="chem">y = h(x)</span> on this domain. On your sketch, label the coordinates of the maximum point, the <span class="chem">x</span>-intercept and both end points. <strong>[5 marks]</strong><br>(b) Hence write down the range of <span class="chem">h</span>. <strong>[2 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = ln(x + 1)</span> 及 <span class=\"chem\">g(x) = 2 - 0.5x</span>。函數 <span class=\"chem\">h</span> 定義為 <span class=\"chem\">h(x) = f(x) + g(x)</span>，其中 <span class=\"chem\">0 &lt;= x &lt;= 10</span>。<br>(a) 在此定義域上描繪 (Sketch) <span class=\"chem\">y = h(x)</span> 的略圖。在略圖上標示極大點、<span class=\"chem\">x</span> 軸截點及兩個端點的坐標。<strong>[5 marks]</strong><br>(b) 由此 (Hence) 寫出 (write down) <span class=\"chem\">h</span> 的值域。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Enter <span class="chem">Y_1 = ln(x + 1) + 2 - 0.5x</span> with window <span class="chem">0 &lt;= x &lt;= 10</span>. Use the maximum and zero tools.
        "以視窗 <span class=\"chem\">0 &lt;= x &lt;= 10</span> 輸入 <span class=\"chem\">Y_1 = ln(x + 1) + 2 - 0.5x</span>。使用求極大值和求零點功能。",
        // EN: A sketch shows the shape and the labelled key points; it does not need to be to scale. Do not extend it beyond the domain.
        "略圖要顯示形狀和已標示的關鍵點，不需要按比例繪畫。不要畫到定義域以外。",
        // EN: For the range, the least value is at an end point, not at a turning point.
        "就值域而言，最小值在端點，而不在轉向點。",
      ],
      // EN: <p>(a) On the GDC, <span class="chem">h(0) = 2</span>. The maximum tool gives <span class="chem">(1, 2.19)</span> (exactly <span class="chem">(1, 1.5 + ln 2)</span>). The zero tool gives <span class="chem">x ≈ 8.50</span>. At the right end, <span class="chem">h(10) = ln 11 - 3 ≈ -0.602</span>. The sketch rises from <span class="chem">(0, 2)</span> to <span class="chem">(1, 2.19)</span>, then falls through <span class="chem">(8.50, 0)</span> to <span class="chem">(10, -0.602)</span>.<br>(b) The greatest value is <span class="chem">2.19</span> and the least is <span class="chem">h(10) ≈ -0.602</span>, so <span class="chem">-0.602 &lt;= h(x) &lt;= 2.19</span>.</p>
      solution: "<p>(a) 在 GDC 上，<span class=\"chem\">h(0) = 2</span>。求極大值功能給出 <span class=\"chem\">(1, 2.19)</span>（準確值為 <span class=\"chem\">(1, 1.5 + ln 2)</span>）。求零點功能給出 <span class=\"chem\">x ≈ 8.50</span>。在右端點，<span class=\"chem\">h(10) = ln 11 - 3 ≈ -0.602</span>。略圖由 <span class=\"chem\">(0, 2)</span> 上升至 <span class=\"chem\">(1, 2.19)</span>，然後下降，經過 <span class=\"chem\">(8.50, 0)</span> 到達 <span class=\"chem\">(10, -0.602)</span>。<br>(b) 最大值為 <span class=\"chem\">2.19</span>，最小值為 <span class=\"chem\">h(10) ≈ -0.602</span>，所以 <span class=\"chem\">-0.602 &lt;= h(x) &lt;= 2.19</span>。</p>",
      // EN: <p>(a) A curve starting at <span class="chem">(0, 2)</span>, rising to a maximum at <span class="chem">(1, 2.19)</span>, then decreasing through the <span class="chem">x</span>-intercept <span class="chem">(8.50, 0)</span> to the end point <span class="chem">(10, -0.602)</span>; (b) <span class="chem">-0.602 &lt;= h(x) &lt;= 2.19</span>.</p>
      answer: "<p>(a) 曲線由 <span class=\"chem\">(0, 2)</span> 開始，上升至極大點 <span class=\"chem\">(1, 2.19)</span>，然後遞減，經過 <span class=\"chem\">x</span> 軸截點 <span class=\"chem\">(8.50, 0)</span> 到達端點 <span class=\"chem\">(10, -0.602)</span>；(b) <span class=\"chem\">-0.602 &lt;= h(x) &lt;= 2.19</span>。</p>",
      markscheme: [
        // EN: A1: Correct shape: rises then falls, drawn only for 0 ≤ x ≤ 10.
        "A1：形狀正確：先上升後下降，只畫在 0 ≤ x ≤ 10 上。",
        // EN: A1: Maximum point labelled (1, 2.19).
        "A1：標示極大點 (1, 2.19)。",
        // EN: A1: x-intercept labelled (8.50, 0).
        "A1：標示 x 軸截點 (8.50, 0)。",
        // EN: A1: Left end point labelled (0, 2).
        "A1：標示左端點 (0, 2)。",
        // EN: A1: Right end point labelled (10, −0.602).
        "A1：標示右端點 (10, −0.602)。",
        // EN: A1: Lower bound −0.602 (from the end point, not a turning point).
        "A1：下界 −0.602（來自端點，而不是轉向點）。",
        // EN: A1: Upper bound 2.19, both bounds included: −0.602 ≤ h(x) ≤ 2.19.
        "A1：上界 2.19，兩個界都包括在內：−0.602 ≤ h(x) ≤ 2.19。",
      ],
    },

    // ── t2-1-q039 · numeric · exam · SL · SL 2.2, 2.5 · 5 marks
    "t2-1-q039": {
      // EN: <p>A factory starts a production run at time <span class="chem">t = 0</span>. After <span class="chem">t</span> hours it has produced <span class="chem">n(t) = 200(1 - e^{-0.3t})</span> items. The total cost, in dollars, of producing <span class="chem">n</span> items is <span class="chem">C(n) = 500 + 4n + 0.01n^2</span>. Find the time, in hours, at which the total cost reaches <span class="chem">1200</span> dollars. Give your answer to 3 significant figures.</p>
      stem: "<p>一間工廠在時間 <span class=\"chem\">t = 0</span> 開始一輪生產。<span class=\"chem\">t</span> 小時後，它已生產了 <span class=\"chem\">n(t) = 200(1 - e^{-0.3t})</span> 件產品。生產 <span class=\"chem\">n</span> 件產品的總成本（以美元計）為 <span class=\"chem\">C(n) = 500 + 4n + 0.01n^2</span>。求 (Find) 總成本達到 <span class=\"chem\">1200</span> 美元的時間（以小時計），答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: cost depends on items, and items depend on time, so cost as a function of time is the composite <span class="chem">(C ∘ n)(t)</span>. You need to solve <span class="chem">C(n(t)) = 1200</span>.
        "解碼：成本取決於產品數量，而產品數量取決於時間，所以成本作為時間的函數就是複合函數 <span class=\"chem\">(C ∘ n)(t)</span>。你需要解 <span class=\"chem\">C(n(t)) = 1200</span>。",
        // EN: Either graph <span class="chem">Y_1 = C(n(t))</span> directly and intersect with <span class="chem">Y_2 = 1200</span>, or first solve <span class="chem">C(n) = 1200</span> for <span class="chem">n</span>, then solve <span class="chem">n(t) = n</span>.
        "你可以直接畫出 <span class=\"chem\">Y_1 = C(n(t))</span> 並與 <span class=\"chem\">Y_2 = 1200</span> 求交點；或者先解 <span class=\"chem\">C(n) = 1200</span> 求 <span class=\"chem\">n</span>，再解 <span class=\"chem\">n(t) = n</span>。",
        // EN: <span class="chem">C(n) = 1200</span> gives <span class="chem">n ≈ 131.66</span> items (reject the negative root).
        "<span class=\"chem\">C(n) = 1200</span> 給出 <span class=\"chem\">n ≈ 131.66</span> 件產品（捨去負根）。",
      ],
      // EN: <p>Decode: the cost after <span class="chem">t</span> hours is <span class="chem">C(n(t))</span>. Solve <span class="chem">C(n) = 1200</span>: <span class="chem">0.01n^2 + 4n - 700 = 0 => n ≈ 131.662</span> (the other root is negative). Then <span class="chem">200(1 - e^{-0.3t}) = 131.662 => e^{-0.3t} ≈ 0.341688 => t ≈ 3.5795</span>. The cost reaches <span class="chem">1200</span> dollars after about <span class="chem">3.58</span> hours. (Graphing <span class="chem">y = C(n(t))</span> and <span class="chem">y = 1200</span> gives the same value.)</p>
      solution: "<p>解碼：<span class=\"chem\">t</span> 小時後的成本是 <span class=\"chem\">C(n(t))</span>。解 <span class=\"chem\">C(n) = 1200</span>：<span class=\"chem\">0.01n^2 + 4n - 700 = 0 => n ≈ 131.662</span>（另一個根是負數）。於是 <span class=\"chem\">200(1 - e^{-0.3t}) = 131.662 => e^{-0.3t} ≈ 0.341688 => t ≈ 3.5795</span>。成本在大約 <span class=\"chem\">3.58</span> 小時後達到 <span class=\"chem\">1200</span> 美元。（畫出 <span class=\"chem\">y = C(n(t))</span> 和 <span class=\"chem\">y = 1200</span> 的圖像也得出相同的值。）</p>",
      // EN: hours
      unit: "小時",
    },

    // ── t2-1-q040 · short · exam · SL · SL 2.1, 2.4 · 7 marks
    "t2-1-q040": {
      // EN: <p>The line <span class="chem">L</span> has gradient <span class="chem">-0.5</span> and passes through the point <span class="chem">(1, 2)</span>.<br>(a) Find the equation of <span class="chem">L</span> in the form <span class="chem">y = mx + c</span>. <strong>[2 marks]</strong><br>(b) The line <span class="chem">L</span> meets the curve <span class="chem">y = ln x + 1</span> at the point <span class="chem">P</span>. Find the coordinates of <span class="chem">P</span>. <strong>[2 marks]</strong><br>(c) The line <span class="chem">N</span> passes through <span class="chem">P</span> and is perpendicular to <span class="chem">L</span>. Find the <span class="chem">x</span>-coordinate of the point where <span class="chem">N</span> meets the <span class="chem">x</span>-axis. <strong>[3 marks]</strong></p>
      stem: "<p>直線 <span class=\"chem\">L</span> 的斜率為 <span class=\"chem\">-0.5</span>，並通過點 <span class=\"chem\">(1, 2)</span>。<br>(a) 求 (Find) <span class=\"chem\">L</span> 的方程，以 <span class=\"chem\">y = mx + c</span> 的形式表示。<strong>[2 marks]</strong><br>(b) 直線 <span class=\"chem\">L</span> 與曲線 <span class=\"chem\">y = ln x + 1</span> 相交於點 <span class=\"chem\">P</span>。求 <span class=\"chem\">P</span> 的坐標。<strong>[2 marks]</strong><br>(c) 直線 <span class=\"chem\">N</span> 通過 <span class=\"chem\">P</span> 並垂直於 <span class=\"chem\">L</span>。求 <span class=\"chem\">N</span> 與 <span class=\"chem\">x</span> 軸交點的 <span class=\"chem\">x</span> 坐標。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Use point-gradient form <span class="chem">y - y_1 = m(x - x_1)</span>.
        "使用點斜式 <span class=\"chem\">y - y_1 = m(x - x_1)</span>。",
        // EN: For (b), graph both and use the intersect tool. Keep full accuracy for <span class="chem">P</span> in your GDC memory.
        "在 (b) 部中，畫出兩者的圖像並使用求交點功能。把 <span class=\"chem\">P</span> 的完整精確值保存在 GDC 的記憶中。",
        // EN: For (c), the perpendicular gradient is <span class="chem">-1/(-0.5) = 2</span>. Then put <span class="chem">y = 0</span>.
        "在 (c) 部中，垂直線的斜率為 <span class=\"chem\">-1/(-0.5) = 2</span>。然後代入 <span class=\"chem\">y = 0</span>。",
      ],
      // EN: <p>(a) <span class="chem">y - 2 = -0.5(x - 1) => y = -0.5x + 2.5</span>.<br>(b) GDC: <span class="chem">ln x + 1 = -0.5x + 2.5</span> gives <span class="chem">x ≈ 1.81159</span>, <span class="chem">y ≈ 1.59420</span>, so <span class="chem">P(1.81, 1.59)</span>.<br>(c) <span class="chem">N</span> has gradient <span class="chem">2</span>: <span class="chem">y - 1.59420 = 2(x - 1.81159)</span>. At <span class="chem">y = 0</span>: <span class="chem">x = 1.81159 - 0.79710 = 1.01449</span>, so <span class="chem">x ≈ 1.01</span>.</p>
      solution: "<p>(a) <span class=\"chem\">y - 2 = -0.5(x - 1) => y = -0.5x + 2.5</span>。<br>(b) GDC：<span class=\"chem\">ln x + 1 = -0.5x + 2.5</span> 給出 <span class=\"chem\">x ≈ 1.81159</span>、<span class=\"chem\">y ≈ 1.59420</span>，所以 <span class=\"chem\">P(1.81, 1.59)</span>。<br>(c) <span class=\"chem\">N</span> 的斜率為 <span class=\"chem\">2</span>：<span class=\"chem\">y - 1.59420 = 2(x - 1.81159)</span>。當 <span class=\"chem\">y = 0</span>：<span class=\"chem\">x = 1.81159 - 0.79710 = 1.01449</span>，所以 <span class=\"chem\">x ≈ 1.01</span>。</p>",
      // EN: <p>(a) <span class="chem">y = -0.5x + 2.5</span>; (b) <span class="chem">P(1.81, 1.59)</span>; (c) <span class="chem">x = 1.01</span> (3 s.f.).</p>
      answer: "<p>(a) <span class=\"chem\">y = -0.5x + 2.5</span>；(b) <span class=\"chem\">P(1.81, 1.59)</span>；(c) <span class=\"chem\">x = 1.01</span>（3 位有效數字）。</p>",
      markscheme: [
        // EN: M1: Substitutes into y − 2 = −0.5(x − 1).
        "M1：代入 y − 2 = −0.5(x − 1)。",
        // EN: A1: y = −0.5x + 2.5.
        "A1：y = −0.5x + 2.5。",
        // EN: M1: Uses the GDC to solve ln x + 1 = −0.5x + 2.5 (intersection of the two graphs).
        "M1：使用 GDC 解 ln x + 1 = −0.5x + 2.5（兩圖像的交點）。",
        // EN: A1: P(1.81, 1.59).
        "A1：P(1.81, 1.59)。",
        // EN: M1: Uses the perpendicular gradient 2 (from −0.5 × 2 = −1).
        "M1：使用垂直線的斜率 2（由 −0.5 × 2 = −1）。",
        // EN: A1: Equation of N: y − 1.594 = 2(x − 1.812) (or equivalent).
        "A1：N 的方程：y − 1.594 = 2(x − 1.812)（或等價式）。",
        // EN: A1: Puts y = 0 to get x = 1.01.
        "A1：代入 y = 0 得 x = 1.01。",
      ],
    },

    // ── t2-1-q041 · numeric · exam · SL · SL 2.4 · 3 marks
    "t2-1-q041": {
      // EN: <p>The graph of <span class="chem">f(x) = x^4 - 4x^2 + x</span> has two local minimum points and one local maximum point. Find the value of <span class="chem">f(x)</span> at the local maximum point. Give your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">f(x) = x^4 - 4x^2 + x</span> 的圖像有兩個局部極小點和一個局部極大點。求 (Find) <span class=\"chem\">f(x)</span> 在局部極大點的值，答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Graph <span class="chem">y = x^4 - 4x^2 + x</span> with a window such as <span class="chem">-2.5 &lt;= x &lt;= 2.5</span>, <span class="chem">-6 &lt;= y &lt;= 3</span>.
        "以例如 <span class=\"chem\">-2.5 &lt;= x &lt;= 2.5</span>、<span class=\"chem\">-6 &lt;= y &lt;= 3</span> 的視窗畫出 <span class=\"chem\">y = x^4 - 4x^2 + x</span> 的圖像。",
        // EN: The local maximum is close to the origin, so zoom in. Use the maximum tool and read the <span class="chem">y</span>-coordinate.
        "局部極大點很接近原點，所以要放大。使用求極大值功能並讀出 <span class=\"chem\">y</span> 坐標。",
      ],
      // EN: <p>The GDC shows local minima near <span class="chem">(-1.47, -5.44)</span> and <span class="chem">(1.35, -2.62)</span> and a local maximum at <span class="chem">(0.126, 0.0627)</span>. The value at the local maximum is <span class="chem">f(0.12600) ≈ 0.0627</span> (3 s.f.). The point is easy to miss in a standard window because it is so close to the origin.</p>
      solution: "<p>GDC 顯示局部極小點在 <span class=\"chem\">(-1.47, -5.44)</span> 和 <span class=\"chem\">(1.35, -2.62)</span> 附近，局部極大點在 <span class=\"chem\">(0.126, 0.0627)</span>。局部極大點的值為 <span class=\"chem\">f(0.12600) ≈ 0.0627</span>（3 位有效數字）。由於此點非常接近原點，在標準視窗中很容易忽略它。</p>",
    },

    // ── t2-1-q042 · short · exam · SL · SL 2.2, 2.5 · 7 marks
    "t2-1-q042": {
      // EN: <p>A cup of tea cools in a room. Its temperature, in °C, <span class="chem">t</span> minutes after it is poured is modelled by <span class="chem">T(t) = 20 + 70e^{-0.08t}</span>, <span class="chem">t &gt;= 0</span>.<br>(a) Write down the temperature of the tea when it is poured. <strong>[1 mark]</strong><br>(b) Write down the range of <span class="chem">T</span>. <strong>[2 marks]</strong><br>(c) Find the time taken for the tea to cool to <span class="chem">40</span>°C. <strong>[2 marks]</strong><br>(d) Explain what <span class="chem">T^{-1}(50)</span> represents in this context, and find its value. <strong>[2 marks]</strong></p>
      stem: "<p>一杯茶在房間內冷卻。倒出後 <span class=\"chem\">t</span> 分鐘，茶的溫度（以 °C 計）的模型為 <span class=\"chem\">T(t) = 20 + 70e^{-0.08t}</span>，<span class=\"chem\">t &gt;= 0</span>。<br>(a) 寫出 (Write down) 茶剛倒出時的溫度。<strong>[1 mark]</strong><br>(b) 寫出 <span class=\"chem\">T</span> 的值域。<strong>[2 marks]</strong><br>(c) 求 (Find) 茶冷卻至 <span class=\"chem\">40</span>°C 所需的時間。<strong>[2 marks]</strong><br>(d) 解釋 (Explain) 在此情境中 <span class=\"chem\">T^{-1}(50)</span> 代表甚麼，並求其值。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: As <span class="chem">t</span> increases, <span class="chem">e^{-0.08t}</span> decreases towards <span class="chem">0</span> but never reaches it. Which bound of the range is included?
        "當 <span class=\"chem\">t</span> 增加時，<span class=\"chem\">e^{-0.08t}</span> 遞減並趨向 <span class=\"chem\">0</span>，但永遠不會到達它。值域的哪一個界包括在內？",
        // EN: For (c), graph <span class="chem">Y_1 = T(t)</span> and <span class="chem">Y_2 = 40</span>, then intersect.
        "在 (c) 部中，畫出 <span class=\"chem\">Y_1 = T(t)</span> 和 <span class=\"chem\">Y_2 = 40</span> 的圖像，然後求交點。",
        // EN: An inverse function swaps input and output: <span class="chem">T^{-1}</span> takes a temperature and returns a time.
        "反函數對調了輸入和輸出：<span class=\"chem\">T^{-1}</span> 接收一個溫度並傳回一個時間。",
      ],
      // EN: <p>(a) <span class="chem">T(0) = 20 + 70 = 90</span>°C.<br>(b) <span class="chem">T</span> decreases from <span class="chem">90</span> and approaches <span class="chem">20</span> (the room temperature) without reaching it: <span class="chem">20 &lt; T &lt;= 90</span>.<br>(c) <span class="chem">70e^{-0.08t} = 20 => t = ln(3.5)/0.08 ≈ 15.66</span>, so about <span class="chem">15.7</span> minutes.<br>(d) <span class="chem">T^{-1}(50)</span> is the time after pouring at which the tea is at <span class="chem">50</span>°C. <span class="chem">70e^{-0.08t} = 30 => t = ln(7/3)/0.08 ≈ 10.59</span>, so about <span class="chem">10.6</span> minutes.</p>
      solution: "<p>(a) <span class=\"chem\">T(0) = 20 + 70 = 90</span>°C。<br>(b) <span class=\"chem\">T</span> 由 <span class=\"chem\">90</span> 開始遞減，並趨向 <span class=\"chem\">20</span>（室溫）但不會到達：<span class=\"chem\">20 &lt; T &lt;= 90</span>。<br>(c) <span class=\"chem\">70e^{-0.08t} = 20 => t = ln(3.5)/0.08 ≈ 15.66</span>，所以大約 <span class=\"chem\">15.7</span> 分鐘。<br>(d) <span class=\"chem\">T^{-1}(50)</span> 是倒出後茶的溫度為 <span class=\"chem\">50</span>°C 的時間。<span class=\"chem\">70e^{-0.08t} = 30 => t = ln(7/3)/0.08 ≈ 10.59</span>，所以大約 <span class=\"chem\">10.6</span> 分鐘。</p>",
      // EN: <p>(a) <span class="chem">90</span>°C; (b) <span class="chem">20 &lt; T &lt;= 90</span>; (c) <span class="chem">15.7</span> minutes; (d) the time (in minutes) at which the temperature is <span class="chem">50</span>°C; <span class="chem">T^{-1}(50) ≈ 10.6</span> minutes.</p>
      answer: "<p>(a) <span class=\"chem\">90</span>°C；(b) <span class=\"chem\">20 &lt; T &lt;= 90</span>；(c) <span class=\"chem\">15.7</span> 分鐘；(d) 溫度為 <span class=\"chem\">50</span>°C 時的時間（以分鐘計）；<span class=\"chem\">T^{-1}(50) ≈ 10.6</span> 分鐘。</p>",
      markscheme: [
        // EN: A1: T(0) = 90 °C.
        "A1：T(0) = 90 °C。",
        // EN: A1: Upper bound 90 included (T ≤ 90).
        "A1：上界 90 包括在內（T ≤ 90）。",
        // EN: A1: Lower bound 20 not included (T > 20), since e^{−0.08t} > 0 for all t; so 20 < T ≤ 90.
        "A1：下界 20 不包括在內（T > 20），因為對所有 t，e^{−0.08t} > 0；所以 20 < T ≤ 90。",
        // EN: M1: Solves 20 + 70e^{−0.08t} = 40 (GDC or logarithms).
        "M1：解 20 + 70e^{−0.08t} = 40（用 GDC 或對數）。",
        // EN: A1: t = 15.7 minutes.
        "A1：t = 15.7 分鐘。",
        // EN: R1: T⁻¹(50) is the time (minutes after pouring) at which the temperature is 50 °C.
        "R1：T⁻¹(50) 是溫度為 50 °C 時的時間（倒出後的分鐘數）。",
        // EN: A1: T⁻¹(50) = 10.6 minutes.
        "A1：T⁻¹(50) = 10.6 分鐘。",
      ],
    },

    // ── t2-1-q043 · numeric · exam · SL · SL 2.5 · 4 marks
    "t2-1-q043": {
      // EN: <p>Let <span class="chem">f(x) = x^3 + x</span> and <span class="chem">g(x) = 2x - 1</span>, for <span class="chem">x ∈ ℝ</span>. The composite function <span class="chem">f ∘ g</span> is one-to-one. Find <span class="chem">(f ∘ g)^{-1}(20)</span>, giving your answer to 3 significant figures.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = x^3 + x</span> 及 <span class=\"chem\">g(x) = 2x - 1</span>，其中 <span class=\"chem\">x ∈ ℝ</span>。複合函數 <span class=\"chem\">f ∘ g</span> 是一對一函數。求 (Find) <span class=\"chem\">(f ∘ g)^{-1}(20)</span>，答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: <span class="chem">(f ∘ g)^{-1}(20) = a</span> means <span class="chem">f(g(a)) = 20</span>. So you need the input that makes the composite equal to <span class="chem">20</span>.
        "解碼：<span class=\"chem\">(f ∘ g)^{-1}(20) = a</span> 表示 <span class=\"chem\">f(g(a)) = 20</span>。所以你需要求使複合函數等於 <span class=\"chem\">20</span> 的輸入。",
        // EN: Graph <span class="chem">Y_1 = (2x - 1)^3 + (2x - 1)</span> and <span class="chem">Y_2 = 20</span>, or first solve <span class="chem">u^3 + u = 20</span> for <span class="chem">u = g(a)</span>, then solve <span class="chem">2a - 1 = u</span>.
        "畫出 <span class=\"chem\">Y_1 = (2x - 1)^3 + (2x - 1)</span> 和 <span class=\"chem\">Y_2 = 20</span> 的圖像；或者先就 <span class=\"chem\">u = g(a)</span> 解 <span class=\"chem\">u^3 + u = 20</span>，再解 <span class=\"chem\">2a - 1 = u</span>。",
      ],
      // EN: <p>Decode: find <span class="chem">a</span> with <span class="chem">(f ∘ g)(a) = 20</span>. Let <span class="chem">u = g(a)</span>. Then <span class="chem">u^3 + u = 20</span>, and the GDC gives <span class="chem">u ≈ 2.59170</span>. So <span class="chem">2a - 1 = 2.59170 => a ≈ 1.79585</span>. <span class="chem">(f ∘ g)^{-1}(20) ≈ 1.80</span> (3 s.f.).</p>
      solution: "<p>解碼：求使 <span class=\"chem\">(f ∘ g)(a) = 20</span> 的 <span class=\"chem\">a</span>。設 <span class=\"chem\">u = g(a)</span>。則 <span class=\"chem\">u^3 + u = 20</span>，GDC 給出 <span class=\"chem\">u ≈ 2.59170</span>。所以 <span class=\"chem\">2a - 1 = 2.59170 => a ≈ 1.79585</span>。<span class=\"chem\">(f ∘ g)^{-1}(20) ≈ 1.80</span>（3 位有效數字）。</p>",
    },

    // ── t2-1-q044 · numeric · exam · SL · SL 2.3 · 4 marks
    "t2-1-q044": {
      // EN: <p>Let <span class="chem">f(x) = 6 ln(x + 1)</span> and <span class="chem">g(x) = x</span>, for <span class="chem">0 &lt;= x &lt;= 12</span>. On this interval the graph of <span class="chem">f</span> lies on or above the graph of <span class="chem">g</span>. Find the greatest vertical distance between the two graphs. Give your answer to 3 significant figures.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = 6 ln(x + 1)</span> 及 <span class=\"chem\">g(x) = x</span>，其中 <span class=\"chem\">0 &lt;= x &lt;= 12</span>。在此區間上，<span class=\"chem\">f</span> 的圖像位於 <span class=\"chem\">g</span> 的圖像之上或與之重合。求 (Find) 兩圖像之間的最大鉛垂距離，答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: the vertical distance at a given <span class="chem">x</span> is <span class="chem">f(x) - g(x)</span>. Graph the difference function <span class="chem">d(x) = 6 ln(x + 1) - x</span> and find its maximum.
        "解碼：在某個 <span class=\"chem\">x</span> 處的鉛垂距離為 <span class=\"chem\">f(x) - g(x)</span>。畫出差函數 <span class=\"chem\">d(x) = 6 ln(x + 1) - x</span> 的圖像並求其極大值。",
        // EN: Remember to check the end points too, not only the turning point.
        "記得也要檢查端點，而不只是轉向點。",
      ],
      // EN: <p>Decode: the vertical distance is the difference <span class="chem">d(x) = f(x) - g(x) = 6 ln(x + 1) - x</span>. The GDC maximum tool gives a maximum at <span class="chem">x = 5</span>, with <span class="chem">d(5) = 6 ln 6 - 5 ≈ 5.7506</span>. The end points give <span class="chem">d(0) = 0</span> and <span class="chem">d(12) ≈ 3.39</span>, which are smaller. The greatest vertical distance is <span class="chem">5.75</span> (3 s.f.).</p>
      solution: "<p>解碼：鉛垂距離是差 <span class=\"chem\">d(x) = f(x) - g(x) = 6 ln(x + 1) - x</span>。GDC 的求極大值功能給出極大點在 <span class=\"chem\">x = 5</span>，而 <span class=\"chem\">d(5) = 6 ln 6 - 5 ≈ 5.7506</span>。端點給出 <span class=\"chem\">d(0) = 0</span> 和 <span class=\"chem\">d(12) ≈ 3.39</span>，兩者都較小。最大鉛垂距離為 <span class=\"chem\">5.75</span>（3 位有效數字）。</p>",
    },

    // ── t2-1-q045 · short · exam · SL · SL 2.2, 2.4, 2.5 · 7 marks
    "t2-1-q045": {
      // EN: <p>Let <span class="chem">f(x) = 3 + 2 ln(x - 1)</span> for <span class="chem">x &gt; 1</span>.<br>(a) Find an expression for <span class="chem">f^{-1}(x)</span>. <strong>[3 marks]</strong><br>(b) Write down the range of <span class="chem">f^{-1}</span>. <strong>[1 mark]</strong><br>(c) The graphs of <span class="chem">y = f(x)</span> and <span class="chem">y = f^{-1}(x)</span> intersect at two points. Find the coordinates of both points. <strong>[3 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = 3 + 2 ln(x - 1)</span>，其中 <span class=\"chem\">x &gt; 1</span>。<br>(a) 求 (Find) <span class=\"chem\">f^{-1}(x)</span> 的表達式。<strong>[3 marks]</strong><br>(b) 寫出 (Write down) <span class=\"chem\">f^{-1}</span> 的值域。<strong>[1 mark]</strong><br>(c) <span class=\"chem\">y = f(x)</span> 與 <span class=\"chem\">y = f^{-1}(x)</span> 的圖像相交於兩點。求這兩點的坐標。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: For (a), swap <span class="chem">x</span> and <span class="chem">y</span>, isolate the logarithm and exponentiate.
        "在 (a) 部中，對調 <span class=\"chem\">x</span> 和 <span class=\"chem\">y</span>，把對數分離出來，然後取指數。",
        // EN: The range of <span class="chem">f^{-1}</span> is the domain of <span class="chem">f</span>.
        "<span class=\"chem\">f^{-1}</span> 的值域就是 <span class=\"chem\">f</span> 的定義域。",
        // EN: For an increasing function, the graphs of <span class="chem">f</span> and <span class="chem">f^{-1}</span> meet on the line <span class="chem">y = x</span>. Graph <span class="chem">y = 3 + 2 ln(x - 1)</span> and <span class="chem">y = x</span>.
        "對於遞增函數，<span class=\"chem\">f</span> 與 <span class=\"chem\">f^{-1}</span> 的圖像在直線 <span class=\"chem\">y = x</span> 上相交。畫出 <span class=\"chem\">y = 3 + 2 ln(x - 1)</span> 和 <span class=\"chem\">y = x</span> 的圖像。",
      ],
      // EN: <p>(a) <span class="chem">x = 3 + 2 ln(y - 1) => ln(y - 1) = (x - 3)/2 => f^{-1}(x) = 1 + e^{(x - 3)/2}</span>, <span class="chem">x ∈ ℝ</span>.<br>(b) Range of <span class="chem">f^{-1}</span> = domain of <span class="chem">f</span>: <span class="chem">f^{-1}(x) &gt; 1</span>.<br>(c) <span class="chem">f</span> is increasing, so intersections of <span class="chem">f</span> and <span class="chem">f^{-1}</span> lie on <span class="chem">y = x</span>. GDC: <span class="chem">3 + 2 ln(x - 1) = x</span> gives <span class="chem">x ≈ 1.46392</span> and <span class="chem">x ≈ 6.35669</span>. The points are <span class="chem">(1.46, 1.46)</span> and <span class="chem">(6.36, 6.36)</span>.</p>
      solution: "<p>(a) <span class=\"chem\">x = 3 + 2 ln(y - 1) => ln(y - 1) = (x - 3)/2 => f^{-1}(x) = 1 + e^{(x - 3)/2}</span>，<span class=\"chem\">x ∈ ℝ</span>。<br>(b) <span class=\"chem\">f^{-1}</span> 的值域 = <span class=\"chem\">f</span> 的定義域：<span class=\"chem\">f^{-1}(x) &gt; 1</span>。<br>(c) <span class=\"chem\">f</span> 是遞增函數，所以 <span class=\"chem\">f</span> 與 <span class=\"chem\">f^{-1}</span> 的交點都在 <span class=\"chem\">y = x</span> 上。GDC：<span class=\"chem\">3 + 2 ln(x - 1) = x</span> 給出 <span class=\"chem\">x ≈ 1.46392</span> 和 <span class=\"chem\">x ≈ 6.35669</span>。兩點為 <span class=\"chem\">(1.46, 1.46)</span> 和 <span class=\"chem\">(6.36, 6.36)</span>。</p>",
      // EN: <p>(a) <span class="chem">f^{-1}(x) = 1 + e^{(x - 3)/2}</span>; (b) <span class="chem">f^{-1}(x) &gt; 1</span>; (c) <span class="chem">(1.46, 1.46)</span> and <span class="chem">(6.36, 6.36)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">f^{-1}(x) = 1 + e^{(x - 3)/2}</span>；(b) <span class=\"chem\">f^{-1}(x) &gt; 1</span>；(c) <span class=\"chem\">(1.46, 1.46)</span> 和 <span class=\"chem\">(6.36, 6.36)</span>。</p>",
      markscheme: [
        // EN: M1: Swaps x and y: x = 3 + 2 ln(y − 1), so ln(y − 1) = (x − 3)/2.
        "M1：對調 x 和 y：x = 3 + 2 ln(y − 1)，所以 ln(y − 1) = (x − 3)/2。",
        // EN: M1: Takes the exponential: y − 1 = e^{(x − 3)/2}.
        "M1：取指數：y − 1 = e^{(x − 3)/2}。",
        // EN: A1: f⁻¹(x) = 1 + e^{(x − 3)/2}.
        "A1：f⁻¹(x) = 1 + e^{(x − 3)/2}。",
        // EN: A1: Range of f⁻¹ is f⁻¹(x) > 1 (the domain of f).
        "A1：f⁻¹ 的值域為 f⁻¹(x) > 1（即 f 的定義域）。",
        // EN: R1: Since f is increasing, the intersections lie on y = x, so solve 3 + 2 ln(x − 1) = x (or graph f and f⁻¹ on the GDC).
        "R1：由於 f 是遞增函數，交點都在 y = x 上，所以解 3 + 2 ln(x − 1) = x（或在 GDC 上畫出 f 和 f⁻¹ 的圖像）。",
        // EN: A1: (1.46, 1.46).
        "A1：(1.46, 1.46)。",
        // EN: A1: (6.36, 6.36).
        "A1：(6.36, 6.36)。",
      ],
    },

    // ── t2-1-q046 · numeric · exam · SL · SL 2.2 · 4 marks
    "t2-1-q046": {
      // EN: <p>The largest possible domain of <span class="chem">f(x) = sqrt(ln x - 0.1x)</span> is <span class="chem">a &lt;= x &lt;= b</span>. Find the value of <span class="chem">b</span>, giving your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">f(x) = sqrt(ln x - 0.1x)</span> 的最大可能定義域為 <span class=\"chem\">a &lt;= x &lt;= b</span>。求 (Find) <span class=\"chem\">b</span> 的值，答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: the domain is where the expression under the square root is not negative, so you need <span class="chem">ln x - 0.1x &gt;= 0</span>. The end points <span class="chem">a</span> and <span class="chem">b</span> are the zeros of <span class="chem">ln x - 0.1x</span>.
        "解碼：定義域是平方根內的式子不是負數的地方，所以你需要 <span class=\"chem\">ln x - 0.1x &gt;= 0</span>。端點 <span class=\"chem\">a</span> 和 <span class=\"chem\">b</span> 是 <span class=\"chem\">ln x - 0.1x</span> 的零點。",
        // EN: Graph <span class="chem">y = ln x - 0.1x</span>. The second zero is far to the right, so use a window up to about <span class="chem">x = 50</span>.
        "畫出 <span class=\"chem\">y = ln x - 0.1x</span> 的圖像。第二個零點在很右方，所以要使用延伸至大約 <span class=\"chem\">x = 50</span> 的視窗。",
      ],
      // EN: <p>Decode: we need <span class="chem">ln x - 0.1x &gt;= 0</span>. The GDC graph of <span class="chem">y = ln x - 0.1x</span> is above the <span class="chem">x</span>-axis between its two zeros, <span class="chem">x ≈ 1.12</span> and <span class="chem">x ≈ 35.7715</span>. So the domain is <span class="chem">1.12 &lt;= x &lt;= 35.8</span>, and <span class="chem">b ≈ 35.8</span> (3 s.f.).</p>
      solution: "<p>解碼：我們需要 <span class=\"chem\">ln x - 0.1x &gt;= 0</span>。在 GDC 上，<span class=\"chem\">y = ln x - 0.1x</span> 的圖像在其兩個零點 <span class=\"chem\">x ≈ 1.12</span> 與 <span class=\"chem\">x ≈ 35.7715</span> 之間位於 <span class=\"chem\">x</span> 軸之上。所以定義域為 <span class=\"chem\">1.12 &lt;= x &lt;= 35.8</span>，而 <span class=\"chem\">b ≈ 35.8</span>（3 位有效數字）。</p>",
    },

    // ── t2-1-q047 · short · exam · SL · SL 2.2, 2.4 · 5 marks
    "t2-1-q047": {
      // EN: <p>Let <span class="chem">f(x) = 4/(1 + e^{-x}) - 2</span>, for <span class="chem">x ∈ ℝ</span>.<br>(a) Write down the equations of the two horizontal asymptotes of the graph of <span class="chem">f</span>. <strong>[2 marks]</strong><br>(b) Hence write down the range of <span class="chem">f</span>. <strong>[1 mark]</strong><br>(c) Find the value of <span class="chem">x</span> for which <span class="chem">f(x) = 1.5</span>. <strong>[2 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = 4/(1 + e^{-x}) - 2</span>，其中 <span class=\"chem\">x ∈ ℝ</span>。<br>(a) 寫出 (Write down) <span class=\"chem\">f</span> 的圖像的兩條水平漸近線的方程。<strong>[2 marks]</strong><br>(b) 由此 (Hence) 寫出 <span class=\"chem\">f</span> 的值域。<strong>[1 mark]</strong><br>(c) 求 (Find) 使 <span class=\"chem\">f(x) = 1.5</span> 的 <span class=\"chem\">x</span> 值。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Use the GDC table for large positive and large negative <span class="chem">x</span>, or think about what <span class="chem">e^{-x}</span> does at each end.
        "使用 GDC 的數值表查看絕對值很大的正、負 <span class=\"chem\">x</span> 值，或者想想 <span class=\"chem\">e^{-x}</span> 在兩端的變化。",
        // EN: The graph approaches both asymptotes but never reaches them, so neither bound of the range is included.
        "圖像趨近兩條漸近線但永遠不會到達，所以值域的兩個界都不包括在內。",
        // EN: For (c), intersect <span class="chem">y = f(x)</span> with <span class="chem">y = 1.5</span>.
        "在 (c) 部中，求 <span class=\"chem\">y = f(x)</span> 與 <span class=\"chem\">y = 1.5</span> 的交點。",
      ],
      // EN: <p>(a) As <span class="chem">x -&gt; infty</span>, <span class="chem">e^{-x} -&gt; 0</span>, so <span class="chem">f(x) -&gt; 4 - 2 = 2</span>. As <span class="chem">x -&gt; -infty</span>, <span class="chem">e^{-x} -&gt; infty</span>, so <span class="chem">f(x) -&gt; -2</span>. Asymptotes <span class="chem">y = 2</span> and <span class="chem">y = -2</span>.<br>(b) <span class="chem">f</span> is increasing and never reaches either asymptote: <span class="chem">-2 &lt; f(x) &lt; 2</span>.<br>(c) <span class="chem">4/(1 + e^{-x}) = 3.5 => 1 + e^{-x} = 8/7 => e^{-x} = 1/7 => x = ln 7 ≈ 1.95</span>.</p>
      solution: "<p>(a) 當 <span class=\"chem\">x -&gt; infty</span>，<span class=\"chem\">e^{-x} -&gt; 0</span>，所以 <span class=\"chem\">f(x) -&gt; 4 - 2 = 2</span>。當 <span class=\"chem\">x -&gt; -infty</span>，<span class=\"chem\">e^{-x} -&gt; infty</span>，所以 <span class=\"chem\">f(x) -&gt; -2</span>。漸近線為 <span class=\"chem\">y = 2</span> 和 <span class=\"chem\">y = -2</span>。<br>(b) <span class=\"chem\">f</span> 是遞增函數，且永遠不會到達任何一條漸近線：<span class=\"chem\">-2 &lt; f(x) &lt; 2</span>。<br>(c) <span class=\"chem\">4/(1 + e^{-x}) = 3.5 => 1 + e^{-x} = 8/7 => e^{-x} = 1/7 => x = ln 7 ≈ 1.95</span>。</p>",
      // EN: <p>(a) <span class="chem">y = 2</span> and <span class="chem">y = -2</span>; (b) <span class="chem">-2 &lt; f(x) &lt; 2</span>; (c) <span class="chem">x = ln 7 ≈ 1.95</span>.</p>
      answer: "<p>(a) <span class=\"chem\">y = 2</span> 和 <span class=\"chem\">y = -2</span>；(b) <span class=\"chem\">-2 &lt; f(x) &lt; 2</span>；(c) <span class=\"chem\">x = ln 7 ≈ 1.95</span>。</p>",
      markscheme: [
        // EN: A1: y = 2 (as x → ∞, e^{−x} → 0).
        "A1：y = 2（當 x → ∞，e^{−x} → 0）。",
        // EN: A1: y = −2 (as x → −∞, e^{−x} → ∞).
        "A1：y = −2（當 x → −∞，e^{−x} → ∞）。",
        // EN: A1: Range −2 < f(x) < 2 (both bounds excluded).
        "A1：值域 −2 < f(x) < 2（兩個界都不包括在內）。",
        // EN: M1: Solves 4/(1 + e^{−x}) − 2 = 1.5 with the GDC, or rearranges to e^{−x} = 1/7.
        "M1：用 GDC 解 4/(1 + e^{−x}) − 2 = 1.5，或整理為 e^{−x} = 1/7。",
        // EN: A1: x = 1.95 (= ln 7).
        "A1：x = 1.95（= ln 7）。",
      ],
    },

    // ── t2-1-q048 · numeric · challenge · SL · SL 2.2, 2.5 · 5 marks
    "t2-1-q048": {
      // EN: <p>A spherical balloon is being inflated. Its radius, in cm, <span class="chem">t</span> seconds after inflation starts is <span class="chem">r(t) = 2 + 0.8 ln(t + 1)</span>. The volume of a sphere of radius <span class="chem">r</span> is <span class="chem">V(r) = (4/3)pi r^3</span>. The balloon bursts when its volume first reaches <span class="chem">300</span> <span class="unit">cm3</span>. Find how many seconds after inflation starts the balloon bursts. Give your answer to 3 significant figures.</p>
      stem: "<p>一個球形氣球正在充氣。開始充氣後 <span class=\"chem\">t</span> 秒，其半徑（以 cm 計）為 <span class=\"chem\">r(t) = 2 + 0.8 ln(t + 1)</span>。半徑為 <span class=\"chem\">r</span> 的球體的體積為 <span class=\"chem\">V(r) = (4/3)pi r^3</span>。當氣球的體積首次達到 <span class=\"chem\">300</span> <span class=\"unit\">cm3</span> 時，氣球會爆破。求 (Find) 開始充氣後多少秒氣球會爆破，答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: the volume as a function of time is the composite <span class="chem">(V ∘ r)(t)</span>. "First reaches <span class="chem">300</span>" means solve <span class="chem">V(r(t)) = 300</span> and take the smallest positive <span class="chem">t</span>.
        "解碼：體積作為時間的函數就是複合函數 <span class=\"chem\">(V ∘ r)(t)</span>。「首次達到 <span class=\"chem\">300</span>」表示解 <span class=\"chem\">V(r(t)) = 300</span> 並取最小的正 <span class=\"chem\">t</span>。",
        // EN: Work backwards: first find the radius at which <span class="chem">V = 300</span>, then the time at which <span class="chem">r(t)</span> equals that radius.
        "倒過來推算：先求使 <span class=\"chem\">V = 300</span> 的半徑，再求 <span class=\"chem\">r(t)</span> 等於該半徑的時間。",
        // EN: <span class="chem">(4/3)pi r^3 = 300</span> gives <span class="chem">r ≈ 4.1528</span> cm.
        "<span class=\"chem\">(4/3)pi r^3 = 300</span> 給出 <span class=\"chem\">r ≈ 4.1528</span> cm。",
      ],
      // EN: <p>Decode: we need the time when <span class="chem">(V ∘ r)(t) = 300</span>. From <span class="chem">(4/3)pi r^3 = 300</span>: <span class="chem">r = (225/pi)^{1/3} ≈ 4.15283</span>. Then <span class="chem">2 + 0.8 ln(t + 1) = 4.15283 => ln(t + 1) ≈ 2.69104 => t ≈ e^{2.69104} - 1 ≈ 13.747</span>. Since <span class="chem">r</span> (and so <span class="chem">V</span>) is increasing, this is the first time. The balloon bursts after about <span class="chem">13.7</span> seconds. (Graphing <span class="chem">y = (4/3)pi(2 + 0.8 ln(x + 1))^3</span> against <span class="chem">y = 300</span> gives the same value.)</p>
      solution: "<p>解碼：我們需要 <span class=\"chem\">(V ∘ r)(t) = 300</span> 的時間。由 <span class=\"chem\">(4/3)pi r^3 = 300</span>：<span class=\"chem\">r = (225/pi)^{1/3} ≈ 4.15283</span>。於是 <span class=\"chem\">2 + 0.8 ln(t + 1) = 4.15283 => ln(t + 1) ≈ 2.69104 => t ≈ e^{2.69104} - 1 ≈ 13.747</span>。由於 <span class=\"chem\">r</span>（因而 <span class=\"chem\">V</span>）是遞增的，這就是首次達到的時間。氣球在大約 <span class=\"chem\">13.7</span> 秒後爆破。（畫出 <span class=\"chem\">y = (4/3)pi(2 + 0.8 ln(x + 1))^3</span> 與 <span class=\"chem\">y = 300</span> 的圖像也得出相同的值。）</p>",
    },

    // ── t2-1-q049 · numeric · challenge · SL · SL 2.1 · 6 marks
    "t2-1-q049": {
      // EN: <p>On a coastal map with axes in kilometres, a ship sails in a straight line from the harbour <span class="chem">H(0, 1)</span> through the buoy <span class="chem">B(10, 4)</span> and beyond. A lighthouse stands at <span class="chem">L(4.2, 7.5)</span>. Find the shortest distance between the lighthouse and the path of the ship. Give your answer in kilometres to 3 significant figures.</p>
      stem: "<p>在一幅以公里為坐標軸單位的海岸地圖上，一艘船由港口 <span class=\"chem\">H(0, 1)</span> 沿直線駛經浮標 <span class=\"chem\">B(10, 4)</span> 並繼續前進。燈塔位於 <span class=\"chem\">L(4.2, 7.5)</span>。求 (Find) 燈塔與船的航道之間的最短距離，答案以公里為單位，並須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: the shortest distance from a point to a line is measured along the perpendicular. Find the foot of the perpendicular <span class="chem">F</span> from <span class="chem">L</span> to the line <span class="chem">HB</span>, then the length <span class="chem">LF</span>.
        "解碼：點到直線的最短距離是沿垂直方向量度的。求由 <span class=\"chem\">L</span> 到直線 <span class=\"chem\">HB</span> 的垂足 <span class=\"chem\">F</span>，再求長度 <span class=\"chem\">LF</span>。",
        // EN: Line <span class="chem">HB</span>: gradient <span class="chem">0.3</span>, so <span class="chem">y = 0.3x + 1</span>. The perpendicular through <span class="chem">L</span> has gradient <span class="chem">-10/3</span>.
        "直線 <span class=\"chem\">HB</span>：斜率為 <span class=\"chem\">0.3</span>，所以 <span class=\"chem\">y = 0.3x + 1</span>。通過 <span class=\"chem\">L</span> 的垂直線的斜率為 <span class=\"chem\">-10/3</span>。",
        // EN: Solve the two line equations simultaneously (GDC) to get <span class="chem">F</span>, then use the distance formula.
        "聯立解兩條直線的方程（用 GDC）得 <span class=\"chem\">F</span>，再使用距離公式。",
      ],
      // EN: <p>Decode: "shortest distance to a path" means the perpendicular distance. Line <span class="chem">HB</span>: <span class="chem">m = 3/10</span>, so <span class="chem">y = 0.3x + 1</span>. Perpendicular through <span class="chem">L</span>: <span class="chem">y - 7.5 = -(10/3)(x - 4.2)</span>. Solving simultaneously: <span class="chem">F ≈ (5.6422, 2.6927)</span>. Then <span class="chem">LF = sqrt((5.6422 - 4.2)^2 + (2.6927 - 7.5)^2) ≈ sqrt(2.0800 + 23.1101) ≈ 5.0190</span>. The shortest distance is <span class="chem">5.02</span> km (3 s.f.). Because <span class="chem">F</span> has <span class="chem">x &gt; 0</span>, it lies on the path of the ship after it leaves the harbour.</p>
      solution: "<p>解碼：「到航道的最短距離」就是垂直距離。直線 <span class=\"chem\">HB</span>：<span class=\"chem\">m = 3/10</span>，所以 <span class=\"chem\">y = 0.3x + 1</span>。通過 <span class=\"chem\">L</span> 的垂直線：<span class=\"chem\">y - 7.5 = -(10/3)(x - 4.2)</span>。聯立求解：<span class=\"chem\">F ≈ (5.6422, 2.6927)</span>。於是 <span class=\"chem\">LF = sqrt((5.6422 - 4.2)^2 + (2.6927 - 7.5)^2) ≈ sqrt(2.0800 + 23.1101) ≈ 5.0190</span>。最短距離為 <span class=\"chem\">5.02</span> km（3 位有效數字）。由於 <span class=\"chem\">F</span> 的 <span class=\"chem\">x &gt; 0</span>，它位於船離開港口後的航道上。</p>",
    },

    // ── t2-1-q050 · short · challenge · SL · SL 2.2, 2.3, 2.4 · 7 marks
    "t2-1-q050": {
      // EN: <p>After a patient takes a tablet, the concentration of the drug in the blood, in mg per litre, is modelled by <span class="chem">C(t) = 10t e^{-0.5t}</span>, where <span class="chem">t</span> is the time in hours, <span class="chem">0 &lt;= t &lt;= 12</span>. The drug is effective while its concentration is at least <span class="chem">2</span> mg per litre.<br>(a) Sketch the graph of <span class="chem">C</span>, labelling the coordinates of the maximum point and of the end point at <span class="chem">t = 12</span>. <strong>[3 marks]</strong><br>(b) Find the length of time for which the drug is effective. <strong>[4 marks]</strong></p>
      stem: "<p>病人服藥後，血液中藥物的濃度（以每升 mg 計）的模型為 <span class=\"chem\">C(t) = 10t e^{-0.5t}</span>，其中 <span class=\"chem\">t</span> 為時間（以小時計），<span class=\"chem\">0 &lt;= t &lt;= 12</span>。當藥物濃度至少為每升 <span class=\"chem\">2</span> mg 時，藥物才有效。<br>(a) 描繪 (Sketch) <span class=\"chem\">C</span> 的圖像的略圖，並標示極大點及在 <span class=\"chem\">t = 12</span> 的端點的坐標。<strong>[3 marks]</strong><br>(b) 求 (Find) 藥物有效的時間長度。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: "effective while at least 2" means you need the time interval where the curve is on or above the line <span class="chem">C = 2</span>. The question asks for the length of that interval, not the times themselves.
        "解碼：「至少為 2 時有效」表示你需要找出曲線位於直線 <span class=\"chem\">C = 2</span> 之上或與之相交的時間區間。題目要求的是該區間的長度，而不是時間本身。",
        // EN: Graph <span class="chem">Y_1 = 10x e^{-0.5x}</span> and <span class="chem">Y_2 = 2</span> for <span class="chem">0 &lt;= x &lt;= 12</span>. There are two intersections.
        "在 <span class=\"chem\">0 &lt;= x &lt;= 12</span> 上畫出 <span class=\"chem\">Y_1 = 10x e^{-0.5x}</span> 和 <span class=\"chem\">Y_2 = 2</span> 的圖像。兩者有兩個交點。",
        // EN: Subtract the two <span class="chem">t</span>-values using full GDC accuracy, then round.
        "以 GDC 的完整精確值把兩個 <span class=\"chem\">t</span> 值相減，然後才捨入。",
      ],
      // EN: <p>Decode: we need the length of the interval on which <span class="chem">C(t) &gt;= 2</span>.<br>(a) GDC: maximum at <span class="chem">(2, 20/e) ≈ (2, 7.36)</span>; <span class="chem">C(12) = 120e^{-6} ≈ 0.297</span>. The sketch rises from the origin to the maximum and then decays towards the <span class="chem">t</span>-axis.<br>(b) Intersections of <span class="chem">y = C(t)</span> and <span class="chem">y = 2</span>: <span class="chem">t_1 ≈ 0.22367</span> and <span class="chem">t_2 ≈ 7.15430</span>. The curve is above the line between them, so the drug is effective for <span class="chem">7.15430 - 0.22367 ≈ 6.93</span> hours.</p>
      solution: "<p>解碼：我們需要使 <span class=\"chem\">C(t) &gt;= 2</span> 的區間長度。<br>(a) GDC：極大點在 <span class=\"chem\">(2, 20/e) ≈ (2, 7.36)</span>；<span class=\"chem\">C(12) = 120e^{-6} ≈ 0.297</span>。略圖由原點上升至極大點，然後衰減並趨向 <span class=\"chem\">t</span> 軸。<br>(b) <span class=\"chem\">y = C(t)</span> 與 <span class=\"chem\">y = 2</span> 的交點：<span class=\"chem\">t_1 ≈ 0.22367</span> 和 <span class=\"chem\">t_2 ≈ 7.15430</span>。曲線在兩者之間位於直線之上，所以藥物有效的時間為 <span class=\"chem\">7.15430 - 0.22367 ≈ 6.93</span> 小時。</p>",
      // EN: <p>(a) A curve from <span class="chem">(0, 0)</span> rising to a maximum <span class="chem">(2, 7.36)</span>, then decreasing to <span class="chem">(12, 0.297)</span>; (b) effective for <span class="chem">0.224 &lt;= t &lt;= 7.15</span>, a length of <span class="chem">6.93</span> hours.</p>
      answer: "<p>(a) 曲線由 <span class=\"chem\">(0, 0)</span> 開始，上升至極大點 <span class=\"chem\">(2, 7.36)</span>，然後遞減至 <span class=\"chem\">(12, 0.297)</span>；(b) 在 <span class=\"chem\">0.224 &lt;= t &lt;= 7.15</span> 內有效，長度為 <span class=\"chem\">6.93</span> 小時。</p>",
      markscheme: [
        // EN: A1: Correct shape: starts at the origin, single maximum, decreasing towards (but above) the t-axis, only for 0 ≤ t ≤ 12.
        "A1：形狀正確：由原點開始，只有一個極大點，遞減並趨向（但位於其上）t 軸，只畫在 0 ≤ t ≤ 12 上。",
        // EN: A1: Maximum labelled (2, 7.36).
        "A1：標示極大點 (2, 7.36)。",
        // EN: A1: End point labelled (12, 0.297).
        "A1：標示端點 (12, 0.297)。",
        // EN: M1: Interprets "effective" as C(t) ≥ 2 and draws or uses the line C = 2.
        "M1：把「有效」理解為 C(t) ≥ 2，並畫出或使用直線 C = 2。",
        // EN: A1: t = 0.224 (first intersection).
        "A1：t = 0.224（第一個交點）。",
        // EN: A1: t = 7.15 (second intersection).
        "A1：t = 7.15（第二個交點）。",
        // EN: A1: Length of time 7.154 − 0.224 = 6.93 hours.
        "A1：時間長度 7.154 − 0.224 = 6.93 小時。",
      ],
    },

    // ── t2-1-q051 · numeric · challenge · SL · SL 2.4 · 5 marks
    "t2-1-q051": {
      // EN: <p>Consider the equation <span class="chem">x^2 e^{-x} = k</span>, where <span class="chem">k</span> is a positive constant and <span class="chem">x ∈ ℝ</span>. There is exactly one value of <span class="chem">k</span> for which the equation has exactly two solutions. Find this value of <span class="chem">k</span>, giving your answer to 3 significant figures.</p>
      stem: "<p>考慮方程 <span class=\"chem\">x^2 e^{-x} = k</span>，其中 <span class=\"chem\">k</span> 為正常數，<span class=\"chem\">x ∈ ℝ</span>。恰好有一個 <span class=\"chem\">k</span> 值使方程恰好有兩個解。求 (Find) 這個 <span class=\"chem\">k</span> 值，答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: the solutions are the intersections of the curve <span class="chem">y = x^2 e^{-x}</span> with the horizontal line <span class="chem">y = k</span>. Count intersections as the line moves up.
        "解碼：方程的解就是曲線 <span class=\"chem\">y = x^2 e^{-x}</span> 與水平線 <span class=\"chem\">y = k</span> 的交點。在水平線向上移動時數一數交點的數目。",
        // EN: Graph <span class="chem">y = x^2 e^{-x}</span>. For <span class="chem">x &lt; 0</span> it is decreasing; for <span class="chem">x &gt; 0</span> it rises to a local maximum and falls towards <span class="chem">0</span>.
        "畫出 <span class=\"chem\">y = x^2 e^{-x}</span> 的圖像。當 <span class=\"chem\">x &lt; 0</span> 時它是遞減的；當 <span class=\"chem\">x &gt; 0</span> 時它上升至局部極大點，然後下降並趨向 <span class=\"chem\">0</span>。",
        // EN: A horizontal line meets the curve exactly twice when it touches a turning point.
        "當水平線剛好接觸一個轉向點時，它與曲線恰好相交兩次。",
      ],
      // EN: <p>Decode: count the intersections of <span class="chem">y = x^2 e^{-x}</span> with the horizontal line <span class="chem">y = k</span>, <span class="chem">k &gt; 0</span>. The GDC shows a local minimum at <span class="chem">(0, 0)</span> and a local maximum at <span class="chem">(2, 0.541)</span>; the curve tends to <span class="chem">infty</span> as <span class="chem">x -&gt; -infty</span> and to <span class="chem">0</span> as <span class="chem">x -&gt; infty</span>. For <span class="chem">0 &lt; k &lt; 0.541</span> there are three intersections, for <span class="chem">k &gt; 0.541</span> there is one, and for <span class="chem">k = 4e^{-2} ≈ 0.5413</span> the line touches the maximum, giving exactly two. So <span class="chem">k ≈ 0.541</span>.</p>
      solution: "<p>解碼：數一數 <span class=\"chem\">y = x^2 e^{-x}</span> 與水平線 <span class=\"chem\">y = k</span>（<span class=\"chem\">k &gt; 0</span>）的交點數目。GDC 顯示局部極小點在 <span class=\"chem\">(0, 0)</span>，局部極大點在 <span class=\"chem\">(2, 0.541)</span>；當 <span class=\"chem\">x -&gt; -infty</span> 時曲線趨向 <span class=\"chem\">infty</span>，當 <span class=\"chem\">x -&gt; infty</span> 時趨向 <span class=\"chem\">0</span>。當 <span class=\"chem\">0 &lt; k &lt; 0.541</span> 時有三個交點，當 <span class=\"chem\">k &gt; 0.541</span> 時有一個，而當 <span class=\"chem\">k = 4e^{-2} ≈ 0.5413</span> 時水平線剛好接觸極大點，恰好有兩個交點。所以 <span class=\"chem\">k ≈ 0.541</span>。</p>",
    },

    // ── t2-1-q052 · short · challenge · SL · SL 2.2, 2.5 · 7 marks
    "t2-1-q052": {
      // EN: <p>Let <span class="chem">f(x) = x^2 - 4x + 1</span> and <span class="chem">g(x) = e^{0.5x}</span>, for <span class="chem">x ∈ ℝ</span>.<br>(a) Write down an expression for <span class="chem">(f ∘ g)(x)</span>. <strong>[1 mark]</strong><br>(b) Solve <span class="chem">(f ∘ g)(x) = 0</span>, giving your answers to 3 significant figures. <strong>[2 marks]</strong><br>(c) Find the range of <span class="chem">f ∘ g</span>. <strong>[2 marks]</strong><br>(d) Find the range of <span class="chem">g ∘ f</span>. <strong>[2 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = x^2 - 4x + 1</span> 及 <span class=\"chem\">g(x) = e^{0.5x}</span>，其中 <span class=\"chem\">x ∈ ℝ</span>。<br>(a) 寫出 (Write down) <span class=\"chem\">(f ∘ g)(x)</span> 的表達式。<strong>[1 mark]</strong><br>(b) 解 (Solve) <span class=\"chem\">(f ∘ g)(x) = 0</span>，答案須準確至 3 位有效數字。<strong>[2 marks]</strong><br>(c) 求 (Find) <span class=\"chem\">f ∘ g</span> 的值域。<strong>[2 marks]</strong><br>(d) 求 <span class=\"chem\">g ∘ f</span> 的值域。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: the range of a composite depends on which values the inner function can feed into the outer one. For <span class="chem">f ∘ g</span>, the inner outputs are <span class="chem">u = e^{0.5x} &gt; 0</span>; for <span class="chem">g ∘ f</span>, they are the outputs of the quadratic.
        "解碼：複合函數的值域取決於內層函數能把哪些值輸入外層函數。對於 <span class=\"chem\">f ∘ g</span>，內層輸出為 <span class=\"chem\">u = e^{0.5x} &gt; 0</span>；對於 <span class=\"chem\">g ∘ f</span>，內層輸出是該二次函數的輸出。",
        // EN: Complete the square: <span class="chem">f(u) = (u - 2)^2 - 3</span>. Is <span class="chem">u = 2</span> one of the values <span class="chem">e^{0.5x}</span> can take?
        "配方：<span class=\"chem\">f(u) = (u - 2)^2 - 3</span>。<span class=\"chem\">u = 2</span> 是 <span class=\"chem\">e^{0.5x}</span> 可以取得的值嗎？",
        // EN: Check each range on the GDC by graphing the composite and finding its minimum.
        "在 GDC 上畫出複合函數的圖像並求其最小值，以檢查每個值域。",
      ],
      // EN: <p>Decode: work out what the inner function feeds in, then apply the outer function to that set.<br>(a) <span class="chem">(f ∘ g)(x) = e^x - 4e^{0.5x} + 1</span>.<br>(b) GDC zeros: <span class="chem">x ≈ ±2.63</span> (exactly <span class="chem">x = 2 ln(2 +- sqrt(3))</span>, and these are negatives of each other because <span class="chem">(2 + sqrt(3))(2 - sqrt(3)) = 1</span>).<br>(c) <span class="chem">f(u) = (u - 2)^2 - 3</span> with <span class="chem">u = e^{0.5x} &gt; 0</span>. The value <span class="chem">u = 2</span> is attained (at <span class="chem">x = 2 ln 2</span>), so the minimum <span class="chem">-3</span> is reached and the range is <span class="chem">(f ∘ g)(x) &gt;= -3</span>.<br>(d) <span class="chem">f(x) &gt;= -3</span> for all real <span class="chem">x</span>, and <span class="chem">g</span> is increasing, so <span class="chem">(g ∘ f)(x) &gt;= e^{-1.5} ≈ 0.223</span>.</p>
      solution: "<p>解碼：先找出內層函數輸入了甚麼值，再把外層函數作用於該集合。<br>(a) <span class=\"chem\">(f ∘ g)(x) = e^x - 4e^{0.5x} + 1</span>。<br>(b) GDC 求得零點：<span class=\"chem\">x ≈ ±2.63</span>（準確值為 <span class=\"chem\">x = 2 ln(2 +- sqrt(3))</span>，兩者互為相反數，因為 <span class=\"chem\">(2 + sqrt(3))(2 - sqrt(3)) = 1</span>）。<br>(c) <span class=\"chem\">f(u) = (u - 2)^2 - 3</span>，其中 <span class=\"chem\">u = e^{0.5x} &gt; 0</span>。<span class=\"chem\">u = 2</span> 是可以取得的（在 <span class=\"chem\">x = 2 ln 2</span>），所以最小值 <span class=\"chem\">-3</span> 能夠達到，值域為 <span class=\"chem\">(f ∘ g)(x) &gt;= -3</span>。<br>(d) 對所有實數 <span class=\"chem\">x</span>，<span class=\"chem\">f(x) &gt;= -3</span>，而 <span class=\"chem\">g</span> 是遞增函數，所以 <span class=\"chem\">(g ∘ f)(x) &gt;= e^{-1.5} ≈ 0.223</span>。</p>",
      // EN: <p>(a) <span class="chem">e^x - 4e^{0.5x} + 1</span>; (b) <span class="chem">x = -2.63</span> or <span class="chem">x = 2.63</span>; (c) <span class="chem">(f ∘ g)(x) &gt;= -3</span>; (d) <span class="chem">(g ∘ f)(x) &gt;= 0.223</span>.</p>
      answer: "<p>(a) <span class=\"chem\">e^x - 4e^{0.5x} + 1</span>；(b) <span class=\"chem\">x = -2.63</span> 或 <span class=\"chem\">x = 2.63</span>；(c) <span class=\"chem\">(f ∘ g)(x) &gt;= -3</span>；(d) <span class=\"chem\">(g ∘ f)(x) &gt;= 0.223</span>。</p>",
      markscheme: [
        // EN: A1: (f ∘ g)(x) = (e^{0.5x})² − 4e^{0.5x} + 1 = e^x − 4e^{0.5x} + 1.
        "A1：(f ∘ g)(x) = (e^{0.5x})² − 4e^{0.5x} + 1 = e^x − 4e^{0.5x} + 1。",
        // EN: A1: x = −2.63 (GDC, or e^{0.5x} = 2 − √3).
        "A1：x = −2.63（用 GDC，或 e^{0.5x} = 2 − √3）。",
        // EN: A1: x = 2.63 (GDC, or e^{0.5x} = 2 + √3).
        "A1：x = 2.63（用 GDC，或 e^{0.5x} = 2 + √3）。",
        // EN: M1: Considers f on the range of g (u = e^{0.5x} > 0), where the vertex u = 2 is attained, or finds the minimum of the graph on the GDC.
        "M1：在 g 的值域（u = e^{0.5x} > 0）上考慮 f，其中頂點 u = 2 可以取得；或在 GDC 上求圖像的最小值。",
        // EN: A1: (f ∘ g)(x) ≥ −3.
        "A1：(f ∘ g)(x) ≥ −3。",
        // EN: M1: Uses the range of f, f(x) ≥ −3, and that g is increasing.
        "M1：利用 f 的值域 f(x) ≥ −3，以及 g 是遞增函數。",
        // EN: A1: (g ∘ f)(x) ≥ e^{−1.5} = 0.223.
        "A1：(g ∘ f)(x) ≥ e^{−1.5} = 0.223。",
      ],
    },

    // ── t2-1-q053 · numeric · challenge · AHL · AHL 2.14 · 5 marks
    "t2-1-q053": {
      // EN: <p>Let <span class="chem">f(x) = x^3 - 3x^2 - 9x + 4</span> for <span class="chem">x &gt;= a</span>, where <span class="chem">a</span> is the smallest value for which <span class="chem">f</span> has an inverse. Find <span class="chem">f^{-1}(5)</span>, giving your answer to 3 significant figures.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = x^3 - 3x^2 - 9x + 4</span>，其中 <span class=\"chem\">x &gt;= a</span>，而 <span class=\"chem\">a</span> 是使 <span class=\"chem\">f</span> 有反函數的最小值。求 (Find) <span class=\"chem\">f^{-1}(5)</span>，答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: there are two steps. First find the restricted domain (start at the last turning point, so that <span class="chem">f</span> is one-to-one). Then <span class="chem">f^{-1}(5)</span> is the solution of <span class="chem">f(x) = 5</span> that lies in that domain.
        "解碼：這裏有兩個步驟。先求受限制的定義域（由最後一個轉向點開始，使 <span class=\"chem\">f</span> 成為一對一函數）。然後 <span class=\"chem\">f^{-1}(5)</span> 就是 <span class=\"chem\">f(x) = 5</span> 在該定義域內的解。",
        // EN: Use the GDC to find the turning points of <span class="chem">f</span>: they are at <span class="chem">x = -1</span> and <span class="chem">x = 3</span>. So <span class="chem">a = 3</span>.
        "使用 GDC 求 <span class=\"chem\">f</span> 的轉向點：它們在 <span class=\"chem\">x = -1</span> 和 <span class=\"chem\">x = 3</span>。所以 <span class=\"chem\">a = 3</span>。",
        // EN: <span class="chem">f(x) = 5</span> has three real solutions. Only one of them satisfies <span class="chem">x &gt;= 3</span>.
        "<span class=\"chem\">f(x) = 5</span> 有三個實數解，其中只有一個滿足 <span class=\"chem\">x &gt;= 3</span>。",
      ],
      // EN: <p>Decode: restrict the domain first, then solve on that branch only. The GDC (or <span class="chem">f'(x) = 3(x - 3)(x + 1)</span>) gives a local maximum at <span class="chem">x = -1</span> and a local minimum at <span class="chem">x = 3</span>, so <span class="chem">f</span> is one-to-one on <span class="chem">x &gt;= a</span> exactly when <span class="chem">a &gt;= 3</span>, and <span class="chem">a = 3</span>. The equation <span class="chem">x^3 - 3x^2 - 9x + 4 = 5</span> has solutions <span class="chem">x ≈ -1.77</span>, <span class="chem">-0.116</span> and <span class="chem">4.8845</span>. Only <span class="chem">4.8845</span> is in the domain <span class="chem">x &gt;= 3</span>, so <span class="chem">f^{-1}(5) ≈ 4.88</span> (3 s.f.).</p>
      solution: "<p>解碼：先限制定義域，然後只在該分支上求解。GDC（或 <span class=\"chem\">f'(x) = 3(x - 3)(x + 1)</span>）給出局部極大點在 <span class=\"chem\">x = -1</span>，局部極小點在 <span class=\"chem\">x = 3</span>，所以 <span class=\"chem\">f</span> 在 <span class=\"chem\">x &gt;= a</span> 上是一對一，恰好當 <span class=\"chem\">a &gt;= 3</span>，因此 <span class=\"chem\">a = 3</span>。方程 <span class=\"chem\">x^3 - 3x^2 - 9x + 4 = 5</span> 的解為 <span class=\"chem\">x ≈ -1.77</span>、<span class=\"chem\">-0.116</span> 和 <span class=\"chem\">4.8845</span>。只有 <span class=\"chem\">4.8845</span> 在定義域 <span class=\"chem\">x &gt;= 3</span> 內，所以 <span class=\"chem\">f^{-1}(5) ≈ 4.88</span>（3 位有效數字）。</p>",
    },

    // ── t2-1-q054 · short · challenge · SL · SL 2.2, 2.4 · 7 marks
    "t2-1-q054": {
      // EN: <p>Two courier companies charge for a delivery of <span class="chem">x</span> km. Company A charges <span class="chem">A(x) = 40 + 12 sqrt(x)</span> dollars and company B charges <span class="chem">B(x) = 15 + 0.8x</span> dollars, for <span class="chem">x &gt; 0</span>.<br>(a) Find the charge of each company for a delivery of <span class="chem">100</span> km. <strong>[2 marks]</strong><br>(b) Find the distance for which both companies charge the same amount. <strong>[2 marks]</strong><br>(c) Write down the set of distances for which company A is cheaper. <strong>[1 mark]</strong><br>(d) A customer has a budget of <span class="chem">300</span> dollars and may choose either company. Find the greatest distance that can be paid for. <strong>[2 marks]</strong></p>
      stem: "<p>兩間速遞公司為 <span class=\"chem\">x</span> km 的送遞收費。A 公司收費 <span class=\"chem\">A(x) = 40 + 12 sqrt(x)</span> 美元，B 公司收費 <span class=\"chem\">B(x) = 15 + 0.8x</span> 美元，其中 <span class=\"chem\">x &gt; 0</span>。<br>(a) 求 (Find) 每間公司為 <span class=\"chem\">100</span> km 送遞的收費。<strong>[2 marks]</strong><br>(b) 求兩間公司收費相同時的距離。<strong>[2 marks]</strong><br>(c) 寫出 (Write down) A 公司較便宜時的距離集合。<strong>[1 mark]</strong><br>(d) 一名顧客的預算為 <span class=\"chem\">300</span> 美元，可選擇任何一間公司。求可付費的最大距離。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: each company is a function of distance. "Charge the same" is an intersection of the two graphs; "cheaper" is where one graph lies below the other.
        "解碼：每間公司的收費都是距離的函數。「收費相同」就是兩個圖像的交點；「較便宜」就是一個圖像位於另一個圖像之下的地方。",
        // EN: Graph <span class="chem">Y_1 = 40 + 12 sqrt(x)</span> and <span class="chem">Y_2 = 15 + 0.8x</span> for <span class="chem">0 &lt; x &lt;= 600</span>, <span class="chem">0 &lt;= y &lt;= 500</span>.
        "在 <span class=\"chem\">0 &lt; x &lt;= 600</span>、<span class=\"chem\">0 &lt;= y &lt;= 500</span> 上畫出 <span class=\"chem\">Y_1 = 40 + 12 sqrt(x)</span> 和 <span class=\"chem\">Y_2 = 15 + 0.8x</span> 的圖像。",
        // EN: For (d), the question is asking for the input that gives an output of <span class="chem">300</span>, for whichever company allows the longer distance.
        "在 (d) 部中，題目要求的是使輸出為 <span class=\"chem\">300</span> 的輸入，並選取容許較長距離的那間公司。",
      ],
      // EN: <p>Decode: compare two models graphically; part (d) asks for an inverse value.<br>(a) <span class="chem">A(100) = 160</span> dollars, <span class="chem">B(100) = 95</span> dollars.<br>(b) GDC intersection of <span class="chem">y = 40 + 12 sqrt(x)</span> and <span class="chem">y = 15 + 0.8x</span>: <span class="chem">x ≈ 284.06</span>, about <span class="chem">284</span> km (both charge about <span class="chem">242</span> dollars).<br>(c) For large <span class="chem">x</span> the linear charge grows faster, so A is cheaper for <span class="chem">x &gt; 284</span>.<br>(d) <span class="chem">A(x) = 300 => sqrt(x) = 260/12 => x ≈ 469.4</span>; <span class="chem">B(x) = 300 => x = 356.25</span>. The greatest distance is about <span class="chem">469</span> km, using company A.</p>
      solution: "<p>解碼：以圖像比較兩個模型；(d) 部要求的是反函數值。<br>(a) <span class=\"chem\">A(100) = 160</span> 美元，<span class=\"chem\">B(100) = 95</span> 美元。<br>(b) <span class=\"chem\">y = 40 + 12 sqrt(x)</span> 與 <span class=\"chem\">y = 15 + 0.8x</span> 在 GDC 上的交點：<span class=\"chem\">x ≈ 284.06</span>，大約 <span class=\"chem\">284</span> km（兩者收費都大約 <span class=\"chem\">242</span> 美元）。<br>(c) 當 <span class=\"chem\">x</span> 很大時，線性收費增長得較快，所以當 <span class=\"chem\">x &gt; 284</span> 時 A 較便宜。<br>(d) <span class=\"chem\">A(x) = 300 => sqrt(x) = 260/12 => x ≈ 469.4</span>；<span class=\"chem\">B(x) = 300 => x = 356.25</span>。最大距離大約為 <span class=\"chem\">469</span> km，選用 A 公司。</p>",
      // EN: <p>(a) A: <span class="chem">160</span> dollars, B: <span class="chem">95</span> dollars; (b) <span class="chem">284</span> km; (c) <span class="chem">x &gt; 284</span>; (d) <span class="chem">469</span> km (with company A).</p>
      answer: "<p>(a) A：<span class=\"chem\">160</span> 美元，B：<span class=\"chem\">95</span> 美元；(b) <span class=\"chem\">284</span> km；(c) <span class=\"chem\">x &gt; 284</span>；(d) <span class=\"chem\">469</span> km（選用 A 公司）。</p>",
      markscheme: [
        // EN: A1: A(100) = 40 + 12(10) = 160 dollars.
        "A1：A(100) = 40 + 12(10) = 160 美元。",
        // EN: A1: B(100) = 15 + 80 = 95 dollars.
        "A1：B(100) = 15 + 80 = 95 美元。",
        // EN: M1: Solves 40 + 12√x = 15 + 0.8x on the GDC (intersection).
        "M1：在 GDC 上解 40 + 12√x = 15 + 0.8x（交點）。",
        // EN: A1: x = 284 km.
        "A1：x = 284 km。",
        // EN: A1: Company A is cheaper for x > 284 (B is cheaper for 0 < x < 284).
        "A1：當 x > 284 時 A 公司較便宜（當 0 < x < 284 時 B 較便宜）。",
        // EN: M1: Solves A(x) = 300 and B(x) = 300 (or recognises A is cheaper at long distances and solves A(x) = 300).
        "M1：解 A(x) = 300 和 B(x) = 300（或辨識出長距離時 A 較便宜並解 A(x) = 300）。",
        // EN: A1: Greatest distance 469 km, using company A (company B allows only 356 km).
        "A1：最大距離 469 km，選用 A 公司（B 公司只容許 356 km）。",
      ],
    },

    // ── t2-1-q055 · numeric · challenge · SL · SL 2.2, 2.5 · 4 marks
    "t2-1-q055": {
      // EN: <p>Let <span class="chem">f(x) = x^3 + 2x</span> for <span class="chem">x ∈ ℝ</span>. The function <span class="chem">f</span> is increasing, so <span class="chem">f^{-1}</span> exists. Find the value of <span class="chem">(f^{-1} ∘ f^{-1})(10)</span>, giving your answer to 3 significant figures.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = x^3 + 2x</span>，其中 <span class=\"chem\">x ∈ ℝ</span>。函數 <span class=\"chem\">f</span> 是遞增函數，所以 <span class=\"chem\">f^{-1}</span> 存在。求 (Find) <span class=\"chem\">(f^{-1} ∘ f^{-1})(10)</span> 的值，答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: <span class="chem">(f^{-1} ∘ f^{-1})(10) = f^{-1}(f^{-1}(10))</span>. You cannot write <span class="chem">f^{-1}</span> as a formula, but you can find each inverse value by solving an equation.
        "解碼：<span class=\"chem\">(f^{-1} ∘ f^{-1})(10) = f^{-1}(f^{-1}(10))</span>。你不能把 <span class=\"chem\">f^{-1}</span> 寫成公式，但可以透過解方程求出每個反函數值。",
        // EN: First solve <span class="chem">x^3 + 2x = 10</span> to get <span class="chem">p = f^{-1}(10)</span>. Store it in the GDC.
        "先解 <span class=\"chem\">x^3 + 2x = 10</span> 得 <span class=\"chem\">p = f^{-1}(10)</span>。把它儲存在 GDC 中。",
        // EN: Then solve <span class="chem">x^3 + 2x = p</span>. Do not round <span class="chem">p</span> before the second step.
        "然後解 <span class=\"chem\">x^3 + 2x = p</span>。在第二步之前不要把 <span class=\"chem\">p</span> 捨入。",
      ],
      // EN: <p>Decode: applying <span class="chem">f^{-1}</span> twice means solving <span class="chem">f(x) = ...</span> twice. Step 1: <span class="chem">x^3 + 2x = 10</span> gives <span class="chem">p = f^{-1}(10) ≈ 1.84742</span>. Step 2: <span class="chem">x^3 + 2x = 1.84742</span> gives <span class="chem">x ≈ 0.729556</span>. So <span class="chem">(f^{-1} ∘ f^{-1})(10) ≈ 0.730</span> (3 s.f.). Check: <span class="chem">f(f(0.729556)) = f(1.84742) ≈ 10</span>.</p>
      solution: "<p>解碼：作用 <span class=\"chem\">f^{-1}</span> 兩次就是解 <span class=\"chem\">f(x) = ...</span> 兩次。第 1 步：<span class=\"chem\">x^3 + 2x = 10</span> 給出 <span class=\"chem\">p = f^{-1}(10) ≈ 1.84742</span>。第 2 步：<span class=\"chem\">x^3 + 2x = 1.84742</span> 給出 <span class=\"chem\">x ≈ 0.729556</span>。所以 <span class=\"chem\">(f^{-1} ∘ f^{-1})(10) ≈ 0.730</span>（3 位有效數字）。驗算：<span class=\"chem\">f(f(0.729556)) = f(1.84742) ≈ 10</span>。</p>",
    },

    // ── t2-1-q056 · short · challenge · SL · SL 2.2, 2.3, 2.4 · 8 marks
    "t2-1-q056": {
      // EN: <p>Let <span class="chem">f(x) = 4x/(x^2 + 1) + 1</span> for <span class="chem">-6 &lt;= x &lt;= 6</span>.<br>(a) Sketch the graph of <span class="chem">y = f(x)</span>. Label the coordinates of the local maximum and local minimum points, the <span class="chem">x</span>-intercepts and both end points. <strong>[4 marks]</strong><br>(b) Write down the range of <span class="chem">f</span>. <strong>[2 marks]</strong><br>(c) Find the number of solutions of the equation <span class="chem">f(x) = 1.5</span>. Justify your answer. <strong>[2 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = 4x/(x^2 + 1) + 1</span>，其中 <span class=\"chem\">-6 &lt;= x &lt;= 6</span>。<br>(a) 描繪 (Sketch) <span class=\"chem\">y = f(x)</span> 的圖像的略圖。標示局部極大點和局部極小點、<span class=\"chem\">x</span> 軸截點及兩個端點的坐標。<strong>[4 marks]</strong><br>(b) 寫出 (Write down) <span class=\"chem\">f</span> 的值域。<strong>[2 marks]</strong><br>(c) 求 (Find) 方程 <span class=\"chem\">f(x) = 1.5</span> 的解的數目，並提出理據 (Justify)。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: for (c), the answer depends on the <strong>domain</strong>. Count the intersections of <span class="chem">y = f(x)</span> and <span class="chem">y = 1.5</span> only for <span class="chem">-6 &lt;= x &lt;= 6</span>.
        "解碼：在 (c) 部中，答案取決於<strong>定義域</strong>。只在 <span class=\"chem\">-6 &lt;= x &lt;= 6</span> 上數 <span class=\"chem\">y = f(x)</span> 與 <span class=\"chem\">y = 1.5</span> 的交點。",
        // EN: Set the window to <span class="chem">-6 &lt;= x &lt;= 6</span>, <span class="chem">-2 &lt;= y &lt;= 4</span>. Use the maximum, minimum and zero tools, and evaluate <span class="chem">f(-6)</span> and <span class="chem">f(6)</span>.
        "把視窗設為 <span class=\"chem\">-6 &lt;= x &lt;= 6</span>、<span class=\"chem\">-2 &lt;= y &lt;= 4</span>。使用求極大值、求極小值和求零點功能，並計算 <span class=\"chem\">f(-6)</span> 和 <span class=\"chem\">f(6)</span>。",
        // EN: Compare <span class="chem">f(6)</span> with <span class="chem">1.5</span>. Does the curve drop below <span class="chem">1.5</span> before <span class="chem">x = 6</span>?
        "比較 <span class=\"chem\">f(6)</span> 與 <span class=\"chem\">1.5</span>。曲線在 <span class=\"chem\">x = 6</span> 之前會跌至 <span class=\"chem\">1.5</span> 以下嗎？",
      ],
      // EN: <p>Decode: (c) is a counting question in which the domain decides the answer.<br>(a) GDC: minimum <span class="chem">(-1, -1)</span>, maximum <span class="chem">(1, 3)</span>, zeros <span class="chem">x = -2 +- sqrt(3) ≈ -3.73, -0.268</span>, end points <span class="chem">f(-6) = 13/37 ≈ 0.351</span> and <span class="chem">f(6) = 61/37 ≈ 1.65</span>.<br>(b) <span class="chem">-1 &lt;= f(x) &lt;= 3</span>.<br>(c) <span class="chem">f(x) = 1.5 => 4x/(x^2 + 1) = 0.5 => x^2 - 8x + 1 = 0 => x = 4 +- sqrt(15) ≈ 0.127, 7.87</span>. Only <span class="chem">0.127</span> lies in the domain. On the GDC, the curve stays above <span class="chem">1.5</span> from <span class="chem">x ≈ 0.127</span> to <span class="chem">x = 6</span> (where <span class="chem">f(6) ≈ 1.65</span>). There is exactly <strong>one</strong> solution.</p>
      solution: "<p>解碼：(c) 是一道點算題，由定義域決定答案。<br>(a) GDC：極小點 <span class=\"chem\">(-1, -1)</span>，極大點 <span class=\"chem\">(1, 3)</span>，零點 <span class=\"chem\">x = -2 +- sqrt(3) ≈ -3.73, -0.268</span>，端點 <span class=\"chem\">f(-6) = 13/37 ≈ 0.351</span> 和 <span class=\"chem\">f(6) = 61/37 ≈ 1.65</span>。<br>(b) <span class=\"chem\">-1 &lt;= f(x) &lt;= 3</span>。<br>(c) <span class=\"chem\">f(x) = 1.5 => 4x/(x^2 + 1) = 0.5 => x^2 - 8x + 1 = 0 => x = 4 +- sqrt(15) ≈ 0.127, 7.87</span>。只有 <span class=\"chem\">0.127</span> 在定義域內。在 GDC 上，曲線由 <span class=\"chem\">x ≈ 0.127</span> 至 <span class=\"chem\">x = 6</span>（其中 <span class=\"chem\">f(6) ≈ 1.65</span>）都保持在 <span class=\"chem\">1.5</span> 之上。所以恰好有<strong>一個</strong>解。</p>",
      // EN: <p>(a) Starts at <span class="chem">(-6, 0.351)</span>, falls through <span class="chem">(-3.73, 0)</span> to the minimum <span class="chem">(-1, -1)</span>, rises through <span class="chem">(-0.268, 0)</span> to the maximum <span class="chem">(1, 3)</span>, then falls to <span class="chem">(6, 1.65)</span>; (b) <span class="chem">-1 &lt;= f(x) &lt;= 3</span>; (c) one solution, <span class="chem">x ≈ 0.127</span>, because the other solution of <span class="chem">f(x) = 1.5</span> is <span class="chem">x ≈ 7.87</span>, outside the domain.</p>
      answer: "<p>(a) 由 <span class=\"chem\">(-6, 0.351)</span> 開始，下降經過 <span class=\"chem\">(-3.73, 0)</span> 至極小點 <span class=\"chem\">(-1, -1)</span>，上升經過 <span class=\"chem\">(-0.268, 0)</span> 至極大點 <span class=\"chem\">(1, 3)</span>，然後下降至 <span class=\"chem\">(6, 1.65)</span>；(b) <span class=\"chem\">-1 &lt;= f(x) &lt;= 3</span>；(c) 一個解，<span class=\"chem\">x ≈ 0.127</span>，因為 <span class=\"chem\">f(x) = 1.5</span> 的另一個解 <span class=\"chem\">x ≈ 7.87</span> 在定義域以外。</p>",
      markscheme: [
        // EN: A1: Correct shape on −6 ≤ x ≤ 6 only (one minimum, one maximum).
        "A1：只在 −6 ≤ x ≤ 6 上形狀正確（一個極小點、一個極大點）。",
        // EN: A1: Minimum (−1, −1) and maximum (1, 3) labelled.
        "A1：標示極小點 (−1, −1) 和極大點 (1, 3)。",
        // EN: A1: x-intercepts (−3.73, 0) and (−0.268, 0) labelled.
        "A1：標示 x 軸截點 (−3.73, 0) 和 (−0.268, 0)。",
        // EN: A1: End points (−6, 0.351) and (6, 1.65) labelled.
        "A1：標示端點 (−6, 0.351) 和 (6, 1.65)。",
        // EN: A1: Lower bound −1 (from the minimum point).
        "A1：下界 −1（來自極小點）。",
        // EN: A1: Upper bound 3, with both included: −1 ≤ f(x) ≤ 3.
        "A1：上界 3，兩個界都包括在內：−1 ≤ f(x) ≤ 3。",
        // EN: R1: The line y = 1.5 meets the curve only once on the domain: for 1 < x ≤ 6, f(x) ≥ f(6) ≈ 1.65 > 1.5, and the second root x ≈ 7.87 lies outside the domain.
        "R1：在定義域上直線 y = 1.5 只與曲線相交一次：當 1 < x ≤ 6 時，f(x) ≥ f(6) ≈ 1.65 > 1.5，而第二個根 x ≈ 7.87 在定義域以外。",
        // EN: A1: One solution (x ≈ 0.127).
        "A1：一個解（x ≈ 0.127）。",
      ],
    },

    // ── t2-1-q057 · numeric · challenge · SL · SL 2.2, 2.4 · 5 marks
    "t2-1-q057": {
      // EN: <p>Let <span class="chem">f(x) = sqrt(4 - x) ln(x + 1)</span>. The function <span class="chem">f</span> is defined on its largest possible real domain, and its range is <span class="chem">f(x) &lt;= M</span>. Find the value of <span class="chem">M</span>, giving your answer to 3 significant figures.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = sqrt(4 - x) ln(x + 1)</span>。函數 <span class=\"chem\">f</span> 定義在其最大可能的實數定義域上，而其值域為 <span class=\"chem\">f(x) &lt;= M</span>。求 (Find) <span class=\"chem\">M</span> 的值，答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: first find the domain from both pieces: <span class="chem">4 - x &gt;= 0</span> and <span class="chem">x + 1 &gt; 0</span>. The range has the form <span class="chem">f(x) &lt;= M</span>, so <span class="chem">M</span> is the greatest value of <span class="chem">f</span> on that domain.
        "解碼：先由兩部分求定義域：<span class=\"chem\">4 - x &gt;= 0</span> 及 <span class=\"chem\">x + 1 &gt; 0</span>。值域的形式是 <span class=\"chem\">f(x) &lt;= M</span>，所以 <span class=\"chem\">M</span> 是 <span class=\"chem\">f</span> 在該定義域上的最大值。",
        // EN: The domain is <span class="chem">-1 &lt; x &lt;= 4</span>. Graph <span class="chem">f</span> on this interval: it tends to <span class="chem">-infty</span> as <span class="chem">x -&gt; -1^+</span>.
        "定義域為 <span class=\"chem\">-1 &lt; x &lt;= 4</span>。在此區間上畫出 <span class=\"chem\">f</span> 的圖像：當 <span class=\"chem\">x -&gt; -1^+</span> 時它趨向 <span class=\"chem\">-infty</span>。",
        // EN: Use the maximum tool on the GDC.
        "使用 GDC 的求極大值功能。",
      ],
      // EN: <p>Decode: the range is bounded above only, so <span class="chem">M</span> is the maximum value of <span class="chem">f</span> on its domain. Domain: <span class="chem">4 - x &gt;= 0</span> and <span class="chem">x + 1 &gt; 0</span>, so <span class="chem">-1 &lt; x &lt;= 4</span>. As <span class="chem">x -&gt; -1^+</span>, <span class="chem">ln(x + 1) -&gt; -infty</span> while <span class="chem">sqrt(4 - x) -&gt; sqrt(5)</span>, so <span class="chem">f -&gt; -infty</span>; and <span class="chem">f(4) = 0</span>. The GDC maximum is at <span class="chem">x ≈ 2.17</span>, with value <span class="chem">f ≈ 1.56074</span>. So <span class="chem">M ≈ 1.56</span> (3 s.f.).</p>
      solution: "<p>解碼：值域只有上界，所以 <span class=\"chem\">M</span> 是 <span class=\"chem\">f</span> 在其定義域上的最大值。定義域：<span class=\"chem\">4 - x &gt;= 0</span> 及 <span class=\"chem\">x + 1 &gt; 0</span>，所以 <span class=\"chem\">-1 &lt; x &lt;= 4</span>。當 <span class=\"chem\">x -&gt; -1^+</span>，<span class=\"chem\">ln(x + 1) -&gt; -infty</span> 而 <span class=\"chem\">sqrt(4 - x) -&gt; sqrt(5)</span>，所以 <span class=\"chem\">f -&gt; -infty</span>；且 <span class=\"chem\">f(4) = 0</span>。GDC 的極大點在 <span class=\"chem\">x ≈ 2.17</span>，其值為 <span class=\"chem\">f ≈ 1.56074</span>。所以 <span class=\"chem\">M ≈ 1.56</span>（3 位有效數字）。</p>",
    },

    // ── t2-1-q058 · short · challenge · SL · SL 2.2, 2.5 · 7 marks
    "t2-1-q058": {
      // EN: <p>Oil leaking from a damaged tanker spreads as a circle on the sea. The radius of the circle, in metres, <span class="chem">t</span> hours after the leak starts is <span class="chem">r(t) = 80t^{0.6}</span>. The area of a circle of radius <span class="chem">r</span> metres is <span class="chem">S(r) = pi r^2</span> square metres.<br>(a) Find an expression for <span class="chem">(S ∘ r)(t)</span> in the form <span class="chem">k t^n</span>, giving the exact value of <span class="chem">k</span>. <strong>[2 marks]</strong><br>(b) The coastguard must be told when the slick covers <span class="chem">1</span> <span class="unit">km2</span>. Find how many hours after the leak starts this happens. <strong>[3 marks]</strong><br>(c) Find <span class="chem">(S ∘ r)^{-1}(250 000)</span> and explain what it represents. <strong>[2 marks]</strong></p>
      stem: "<p>一艘受損油輪漏出的油在海面上擴散成一個圓形。漏油開始後 <span class=\"chem\">t</span> 小時，圓的半徑（以米計）為 <span class=\"chem\">r(t) = 80t^{0.6}</span>。半徑為 <span class=\"chem\">r</span> 米的圓的面積為 <span class=\"chem\">S(r) = pi r^2</span> 平方米。<br>(a) 求 (Find) <span class=\"chem\">(S ∘ r)(t)</span> 的表達式，以 <span class=\"chem\">k t^n</span> 的形式表示，並給出 <span class=\"chem\">k</span> 的準確值。<strong>[2 marks]</strong><br>(b) 當油污覆蓋 <span class=\"chem\">1</span> <span class=\"unit\">km2</span> 時，必須通知海岸警衞隊。求漏油開始後多少小時會發生這情況。<strong>[3 marks]</strong><br>(c) 求 <span class=\"chem\">(S ∘ r)^{-1}(250 000)</span>，並解釋 (explain) 它代表甚麼。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: area depends on radius, and radius depends on time, so area as a function of time is <span class="chem">S(r(t))</span>. Watch the units: the model uses metres, but (b) gives an area in square kilometres.
        "解碼：面積取決於半徑，而半徑取決於時間，所以面積作為時間的函數就是 <span class=\"chem\">S(r(t))</span>。注意單位：模型使用米，但 (b) 部給出的面積以平方公里為單位。",
        // EN: <span class="chem">1</span> <span class="unit">km2</span> <span class="chem">= 1000 × 1000 = 10^6</span> <span class="unit">m2</span>, not <span class="chem">1000</span> <span class="unit">m2</span>.
        "<span class=\"chem\">1</span> <span class=\"unit\">km2</span> <span class=\"chem\">= 1000 × 1000 = 10^6</span> <span class=\"unit\">m2</span>，而不是 <span class=\"chem\">1000</span> <span class=\"unit\">m2</span>。",
        // EN: An inverse takes an output (an area) and returns the input (a time). Solve <span class="chem">6400 pi t^{1.2} = 250 000</span>.
        "反函數接收一個輸出（面積）並傳回輸入（時間）。解 <span class=\"chem\">6400 pi t^{1.2} = 250 000</span>。",
      ],
      // EN: <p>Decode: build the composite, convert units, then use the inverse to go from area back to time.<br>(a) <span class="chem">(S ∘ r)(t) = pi(80t^{0.6})^2 = 6400 pi t^{1.2}</span>.<br>(b) <span class="chem">1</span> <span class="unit">km2</span> <span class="chem">= 10^6</span> <span class="unit">m2</span>. <span class="chem">6400 pi t^{1.2} = 10^6 => t^{1.2} ≈ 49.736 => t ≈ 25.9</span> hours.<br>(c) <span class="chem">6400 pi t^{1.2} = 250 000 => t ≈ 8.17</span>. So <span class="chem">(S ∘ r)^{-1}(250 000) ≈ 8.17</span>: the slick covers <span class="chem">250 000</span> <span class="unit">m2</span> about <span class="chem">8.17</span> hours after the leak starts.</p>
      solution: "<p>解碼：建立複合函數、換算單位，然後利用反函數由面積倒推時間。<br>(a) <span class=\"chem\">(S ∘ r)(t) = pi(80t^{0.6})^2 = 6400 pi t^{1.2}</span>。<br>(b) <span class=\"chem\">1</span> <span class=\"unit\">km2</span> <span class=\"chem\">= 10^6</span> <span class=\"unit\">m2</span>。<span class=\"chem\">6400 pi t^{1.2} = 10^6 => t^{1.2} ≈ 49.736 => t ≈ 25.9</span> 小時。<br>(c) <span class=\"chem\">6400 pi t^{1.2} = 250 000 => t ≈ 8.17</span>。所以 <span class=\"chem\">(S ∘ r)^{-1}(250 000) ≈ 8.17</span>：漏油開始後大約 <span class=\"chem\">8.17</span> 小時，油污覆蓋 <span class=\"chem\">250 000</span> <span class=\"unit\">m2</span>。</p>",
      // EN: <p>(a) <span class="chem">(S ∘ r)(t) = 6400 pi t^{1.2}</span>; (b) <span class="chem">25.9</span> hours; (c) <span class="chem">8.17</span>: the number of hours after the leak starts at which the slick covers <span class="chem">250 000</span> <span class="unit">m2</span> (<span class="chem">0.25</span> <span class="unit">km2</span>).</p>
      answer: "<p>(a) <span class=\"chem\">(S ∘ r)(t) = 6400 pi t^{1.2}</span>；(b) <span class=\"chem\">25.9</span> 小時；(c) <span class=\"chem\">8.17</span>：漏油開始後油污覆蓋 <span class=\"chem\">250 000</span> <span class=\"unit\">m2</span>（<span class=\"chem\">0.25</span> <span class=\"unit\">km2</span>）時所經過的小時數。</p>",
      markscheme: [
        // EN: M1: Substitutes r(t) into S: π(80t^{0.6})².
        "M1：把 r(t) 代入 S：π(80t^{0.6})²。",
        // EN: A1: (S ∘ r)(t) = 6400π t^{1.2}.
        "A1：(S ∘ r)(t) = 6400π t^{1.2}。",
        // EN: M1: Converts units: 1 km² = 1 000 000 m².
        "M1：換算單位：1 km² = 1 000 000 m²。",
        // EN: M1: Solves 6400π t^{1.2} = 1 000 000 (GDC or logarithms).
        "M1：解 6400π t^{1.2} = 1 000 000（用 GDC 或對數）。",
        // EN: A1: t = 25.9 hours.
        "A1：t = 25.9 小時。",
        // EN: A1: (S ∘ r)⁻¹(250 000) = 8.17.
        "A1：(S ∘ r)⁻¹(250 000) = 8.17。",
        // EN: R1: It is the time, in hours after the leak starts, at which the area of the slick is 250 000 m².
        "R1：它是油污面積為 250 000 m² 時的時間（漏油開始後的小時數）。",
      ],
    },

    // ── t2-1-q059 · numeric · challenge · SL · SL 2.2, 2.4 · 5 marks
    "t2-1-q059": {
      // EN: <p>Let <span class="chem">f(x) = 1 - x^3</span> for <span class="chem">x ∈ ℝ</span>. The graphs of <span class="chem">y = f(x)</span> and <span class="chem">y = f^{-1}(x)</span> intersect at exactly five points. Find the largest <span class="chem">x</span>-coordinate of these five points, giving your answer to 3 significant figures.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = 1 - x^3</span>，其中 <span class=\"chem\">x ∈ ℝ</span>。<span class=\"chem\">y = f(x)</span> 與 <span class=\"chem\">y = f^{-1}(x)</span> 的圖像恰好相交於五點。求 (Find) 這五點中最大的 <span class=\"chem\">x</span> 坐標，答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: this <span class="chem">f</span> is <strong>decreasing</strong>, so its graph can meet the graph of <span class="chem">f^{-1}</span> at points that are not on <span class="chem">y = x</span>. Solving <span class="chem">f(x) = x</span> finds only one of the five points.
        "解碼：這個 <span class=\"chem\">f</span> 是<strong>遞減</strong>函數，所以它的圖像可以在不在 <span class=\"chem\">y = x</span> 上的點與 <span class=\"chem\">f^{-1}</span> 的圖像相交。解 <span class=\"chem\">f(x) = x</span> 只能找到五點中的一點。",
        // EN: Find <span class="chem">f^{-1}(x) = (1 - x)^{1/3}</span> (a cube root, defined for all real <span class="chem">x</span>; use the GDC cube-root function so that negative values of <span class="chem">1 - x</span> are accepted), then graph both curves on the GDC.
        "求出 <span class=\"chem\">f^{-1}(x) = (1 - x)^{1/3}</span>（立方根，對所有實數 <span class=\"chem\">x</span> 都有定義；使用 GDC 的立方根函數，使 <span class=\"chem\">1 - x</span> 為負值時也能接受），然後在 GDC 上畫出兩條曲線。",
        // EN: Alternatively, a point <span class="chem">(a, f(a))</span> lies on both graphs exactly when <span class="chem">f(f(a)) = a</span>. Graph <span class="chem">y = f(f(x)) - x</span> and find its zeros. Two of them are easy to check by hand: <span class="chem">f(0) = 1</span> and <span class="chem">f(1) = 0</span>.
        "另一方法：點 <span class=\"chem\">(a, f(a))</span> 同時位於兩個圖像上，恰好當 <span class=\"chem\">f(f(a)) = a</span>。畫出 <span class=\"chem\">y = f(f(x)) - x</span> 的圖像並求其零點。其中兩個很容易用手驗算：<span class=\"chem\">f(0) = 1</span> 及 <span class=\"chem\">f(1) = 0</span>。",
      ],
      // EN: <p>Decode: for a decreasing function, intersections of <span class="chem">f</span> and <span class="chem">f^{-1}</span> need not lie on <span class="chem">y = x</span>, so solving <span class="chem">f(x) = x</span> is not enough. <span class="chem">f^{-1}(x) = (1 - x)^{1/3}</span>. The GDC gives the intersections of <span class="chem">y = 1 - x^3</span> and <span class="chem">y = (1 - x)^{1/3}</span> at <span class="chem">x ≈ -0.536</span>, <span class="chem">x = 0</span>, <span class="chem">x ≈ 0.682</span>, <span class="chem">x = 1</span> and <span class="chem">x ≈ 1.1537</span>. The points are <span class="chem">(-0.536, 1.15)</span>, <span class="chem">(0, 1)</span>, <span class="chem">(0.682, 0.682)</span> (the only one on <span class="chem">y = x</span>), <span class="chem">(1, 0)</span> and <span class="chem">(1.15, -0.536)</span>. The four points off <span class="chem">y = x</span> form two pairs of reflections in <span class="chem">y = x</span>: <span class="chem">(0, 1)</span> with <span class="chem">(1, 0)</span>, and <span class="chem">(-0.536, 1.15)</span> with <span class="chem">(1.15, -0.536)</span>. The largest <span class="chem">x</span>-coordinate is <span class="chem">1.15</span> (3 s.f.).</p>
      solution: "<p>解碼：對於遞減函數，<span class=\"chem\">f</span> 與 <span class=\"chem\">f^{-1}</span> 的交點不一定在 <span class=\"chem\">y = x</span> 上，所以只解 <span class=\"chem\">f(x) = x</span> 並不足夠。<span class=\"chem\">f^{-1}(x) = (1 - x)^{1/3}</span>。GDC 給出 <span class=\"chem\">y = 1 - x^3</span> 與 <span class=\"chem\">y = (1 - x)^{1/3}</span> 的交點在 <span class=\"chem\">x ≈ -0.536</span>、<span class=\"chem\">x = 0</span>、<span class=\"chem\">x ≈ 0.682</span>、<span class=\"chem\">x = 1</span> 和 <span class=\"chem\">x ≈ 1.1537</span>。這些點為 <span class=\"chem\">(-0.536, 1.15)</span>、<span class=\"chem\">(0, 1)</span>、<span class=\"chem\">(0.682, 0.682)</span>（唯一在 <span class=\"chem\">y = x</span> 上的點）、<span class=\"chem\">(1, 0)</span> 和 <span class=\"chem\">(1.15, -0.536)</span>。不在 <span class=\"chem\">y = x</span> 上的四點組成兩對沿 <span class=\"chem\">y = x</span> 反射的點：<span class=\"chem\">(0, 1)</span> 與 <span class=\"chem\">(1, 0)</span>，以及 <span class=\"chem\">(-0.536, 1.15)</span> 與 <span class=\"chem\">(1.15, -0.536)</span>。最大的 <span class=\"chem\">x</span> 坐標為 <span class=\"chem\">1.15</span>（3 位有效數字）。</p>",
    },

  }
});
