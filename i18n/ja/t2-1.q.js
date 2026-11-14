/* t2-1.q — ja question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't2-1.q', {
  questions: {

    // ── t2-1-q001 · mcq · foundation · SL · SL 2.1 · 2 marks
    "t2-1-q001": {
      // EN: <p>A line <span class="chem">L_1</span> has equation <span class="chem">2x + 5y - 10 = 0</span>. A second line <span class="chem">L_2</span> is perpendicular to <span class="chem">L_1</span> and passes through the point <span class="chem">(2, -1)</span>. What is the equation of <span class="chem">L_2</span> in general form?</p>
      stem: "<p>直線 <span class=\"chem\">L_1</span> の方程式は <span class=\"chem\">2x + 5y - 10 = 0</span> である。直線 <span class=\"chem\">L_2</span> は <span class=\"chem\">L_1</span> に垂直で、点 <span class=\"chem\">(2, -1)</span> を通る。<span class=\"chem\">L_2</span> の一般形の方程式はどれですか？</p>",
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
        "<span class=\"chem\">2x + 5y - 10 = 0</span> を <span class=\"chem\">y = mx + c</span> の形に直して <span class=\"chem\">m_1 = -2/5</span> を読み取ります。",
        // EN: The perpendicular gradient is <span class="chem">m_2 = -1/m_1 = 5/2</span>. Substitute <span class="chem">(2, -1)</span> into <span class="chem">y - y_1 = m_2(x - x_1)</span>.
        "垂直な直線の傾きは <span class=\"chem\">m_2 = -1/m_1 = 5/2</span> です。<span class=\"chem\">y - y_1 = m_2(x - x_1)</span> に <span class=\"chem\">(2, -1)</span> を代入します。",
      ],
      // EN: <p>Rearranging <span class="chem">L_1</span> gives <span class="chem">y = -(2/5)x + 2</span>, so <span class="chem">m_1 = -2/5</span> and <span class="chem">m_2 = 5/2</span>. Using point-gradient form through <span class="chem">(2, -1)</span>: <span class="chem">y + 1 = (5/2)(x - 2) => 2y + 2 = 5x - 10 => 5x - 2y - 12 = 0</span>.</p>
      solution: "<p><span class=\"chem\">L_1</span> を変形すると <span class=\"chem\">y = -(2/5)x + 2</span> となるため、<span class=\"chem\">m_1 = -2/5</span>、<span class=\"chem\">m_2 = 5/2</span> です。<span class=\"chem\">(2, -1)</span> を通る点・傾き形より <span class=\"chem\">y + 1 = (5/2)(x - 2) => 2y + 2 = 5x - 10 => 5x - 2y - 12 = 0</span> となります。</p>",
      misconception: {
        // EN (option B): You flipped the gradient from −2/5 to −5/2 without changing its sign. Perpendicular gradients have product −1, so m₂ = +5/2.
        "1": "傾きを −2/5 から −5/2 に逆数にしただけで符号を変えていません。垂直な直線の傾きの積は −1 なので m₂ = +5/2 です。",
        // EN (option C): You kept the fraction 2/5 instead of taking the reciprocal 5/2.
        "2": "逆数 5/2 をとらずに 2/5 のままにしています。",
        // EN (option D): You moved the constant to the wrong side: 5x − 2y = 12 gives 5x − 2y − 12 = 0, not + 12. Check by substituting (2, −1): 10 + 2 + 12 ≠ 0.
        "3": "定数を移項するときの符号を間違えています：5x − 2y = 12 は 5x − 2y − 12 = 0 となり、+ 12 ではありません。(2, −1) を代入して確かめましょう：10 + 2 + 12 ≠ 0。",
      },
    },

    // ── t2-1-q002 · numeric · foundation · SL · SL 2.1 · 3 marks
    "t2-1-q002": {
      // EN: <p>The perpendicular bisector of the line segment joining <span class="chem">A(-1, 4)</span> and <span class="chem">B(5, 8)</span> intersects the <span class="chem">x</span>-axis at <span class="chem">(a, 0)</span>. Find the exact value of <span class="chem">a</span>.</p>
      stem: "<p><span class=\"chem\">A(-1, 4)</span> と <span class=\"chem\">B(5, 8)</span> を結ぶ線分の垂直二等分線が <span class=\"chem\">x</span> 軸と <span class=\"chem\">(a, 0)</span> で交わる。<span class=\"chem\">a</span> の厳密値（正確な値）を求めなさい (Find)。</p>",
      hints: [
        // EN: Find the midpoint <span class="chem">M</span> of <span class="chem">A(-1, 4)</span> and <span class="chem">B(5, 8)</span> and the gradient <span class="chem">m_{AB}</span>.
        "<span class=\"chem\">A(-1, 4)</span> と <span class=\"chem\">B(5, 8)</span> の中点 <span class=\"chem\">M</span> と傾き <span class=\"chem\">m_{AB}</span> を求めます。",
        // EN: With <span class="chem">M(2, 6)</span> and <span class="chem">m_{perp} = -3/2</span>, substitute <span class="chem">y = 0</span> into <span class="chem">y - 6 = (-3/2)(x - 2)</span>.
        "<span class=\"chem\">M(2, 6)</span> と <span class=\"chem\">m_{perp} = -3/2</span> を用いて、<span class=\"chem\">y - 6 = (-3/2)(x - 2)</span> に <span class=\"chem\">y = 0</span> を代入します。",
      ],
      // EN: <p>Midpoint <span class="chem">M = ((-1+5)/2, (4+8)/2) = (2, 6)</span>. Gradient <span class="chem">m_{AB} = (8 - 4)/(5 - (-1)) = 4/6 = 2/3</span>, so <span class="chem">m_{perp} = -3/2</span>. The perpendicular bisector is <span class="chem">y - 6 = (-3/2)(x - 2)</span>. Setting <span class="chem">y = 0</span> gives <span class="chem">-6 = (-3/2)(a - 2) => a - 2 = 4 => a = 6</span>.</p>
      solution: "<p>中点は <span class=\"chem\">M = ((-1+5)/2, (4+8)/2) = (2, 6)</span>、傾きは <span class=\"chem\">m_{AB} = (8 - 4)/(5 - (-1)) = 4/6 = 2/3</span> なので <span class=\"chem\">m_{perp} = -3/2</span> です。垂直二等分線は <span class=\"chem\">y - 6 = (-3/2)(x - 2)</span> であり、<span class=\"chem\">y = 0</span> を代入すると <span class=\"chem\">-6 = (-3/2)(a - 2) => a - 2 = 4 => a = 6</span> となります。</p>",
    },

    // ── t2-1-q003 · mcq · foundation · SL · SL 2.2 · 2 marks
    "t2-1-q003": {
      // EN: <p>What is the largest possible real domain of the function <span class="chem">f(x) = sqrt(10 - 2x) / (x - 2)</span>?</p>
      stem: "<p>関数 <span class=\"chem\">f(x) = sqrt(10 - 2x) / (x - 2)</span> の最大の実数定義域はどれですか？</p>",
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
        "定義域の 2 つの制限を確認しましょう：分子の平方根の中身は <span class=\"chem\">&gt;= 0</span> で、分母は <span class=\"chem\">!= 0</span> でなければなりません。",
      ],
      // EN: <p>For the square root in the numerator, <span class="chem">10 - 2x &gt;= 0 => 2x &lt;= 10 => x &lt;= 5</span>. For the denominator, <span class="chem">x - 2 != 0 => x != 2</span>. Since <span class="chem">2 &lt;= 5</span>, we must explicitly exclude <span class="chem">x = 2</span>, giving <span class="chem">x &lt;= 5, x != 2</span>.</p>
      solution: "<p>分子の平方根より <span class=\"chem\">10 - 2x &gt;= 0 => 2x &lt;= 10 => x &lt;= 5</span>、分母より <span class=\"chem\">x - 2 != 0 => x != 2</span> です。<span class=\"chem\">2 &lt;= 5</span> なので <span class=\"chem\">x = 2</span> を明示的に除外し、<span class=\"chem\">x &lt;= 5, x != 2</span> となります。</p>",
      misconception: {
        // EN (option B): The square root is in the numerator, not the denominator, so 10 − 2x = 0 (x = 5) is allowed.
        "1": "平方根は分母ではなく分子にあるため、10 − 2x = 0（x = 5）は許されます。",
        // EN (option C): From 10 − 2x ≥ 0 you get −2x ≥ −10; dividing by −2 reverses the sign, giving x ≤ 5, not x ≥ 5.
        "2": "10 − 2x ≥ 0 から −2x ≥ −10 となり、−2 で割ると不等号の向きが逆になるので x ≤ 5 です。x ≥ 5 ではありません。",
        // EN (option D): You checked the square root 10 − 2x ≥ 0 (x ≤ 5), but forgot to exclude x = 2 where the denominator x − 2 equals zero.
        "3": "平方根 10 − 2x ≥ 0（x ≤ 5）は確認できましたが、分母 x − 2 が 0 になる x = 2 を除外し忘れています。",
      },
    },

    // ── t2-1-q004 · mcq · exam · SL · SL 2.2 · 3 marks
    "t2-1-q004": {
      // EN: <p>The function <span class="chem">f(x) = -(x - 2)^2 + 9</span> is defined on the restricted domain <span class="chem">-1 &lt;= x &lt;= 4</span>. What is the range of <span class="chem">f</span>?</p>
      stem: "<p>関数 <span class=\"chem\">f(x) = -(x - 2)^2 + 9</span> が制限された定義域 <span class=\"chem\">-1 &lt;= x &lt;= 4</span> 上で定義されている。<span class=\"chem\">f</span> の値域はどれですか？</p>",
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
        "端点だけを代入して 2 次関数の値域を求めてはいけません！頂点 <span class=\"chem\">x = 2</span> が <span class=\"chem\">[-1, 4]</span> の中にあるか確認しましょう。",
        // EN: Evaluate <span class="chem">f(-1)</span>, <span class="chem">f(2)</span> (vertex), and <span class="chem">f(4)</span>, then take the minimum and maximum of those values.
        "<span class=\"chem\">f(-1)</span>、<span class=\"chem\">f(2)</span>（頂点）、<span class=\"chem\">f(4)</span> を計算し、それらの最小値と最大値をとります。",
      ],
      // EN: <p>The graph is a downward-opening parabola with vertex at <span class="chem">(2, 9)</span>. Since <span class="chem">x = 2</span> lies inside <span class="chem">[-1, 4]</span>, the maximum output is <span class="chem">f(2) = 9</span>. Checking the endpoints gives <span class="chem">f(-1) = -(-3)^2 + 9 = 0</span> and <span class="chem">f(4) = -(2)^2 + 9 = 5</span>. Hence the minimum is <span class="chem">0</span> and the range is <span class="chem">0 &lt;= f(x) &lt;= 9</span>.</p>
      solution: "<p>グラフは頂点 <span class=\"chem\">(2, 9)</span> の上に凸の放物線です。<span class=\"chem\">x = 2</span> が <span class=\"chem\">[-1, 4]</span> に含まれるため最大値は <span class=\"chem\">f(2) = 9</span>、端点では <span class=\"chem\">f(-1) = -(-3)^2 + 9 = 0</span>、<span class=\"chem\">f(4) = -(2)^2 + 9 = 5</span> となります。よって最小値は <span class=\"chem\">0</span> であり、値域は <span class=\"chem\">0 &lt;= f(x) &lt;= 9</span> です。</p>",
      misconception: {
        // EN (option B): You only plugged in the two endpoints f(−1) = 0 and f(4) = 5, missing the maximum vertex (2, 9) which lies inside [−1, 4]!
        "1": "両端の値 f(−1) = 0 と f(4) = 5 だけを計算して、区間 [−1, 4] の内部にある最大値の頂点 (2, 9) を見落としています！",
        // EN (option C): You evaluated the right endpoint f(4) = 5 and the vertex f(2) = 9, but missed the lower value at the left endpoint f(−1) = 0.
        "2": "右端 f(4) = 5 と頂点 f(2) = 9 は調べましたが、左端 f(−1) = 0 でさらに小さい値をとることを見落としています。",
        // EN (option D): You gave the range over all real numbers x ∈ ℝ instead of restricting to −1 ≤ x ≤ 4.
        "3": "−1 ≤ x ≤ 4 に制限せず、すべての実数 x ∈ ℝ に対する値域を答えています。",
      },
    },

    // ── t2-1-q005 · numeric · foundation · SL · SL 2.5 · 2 marks
    "t2-1-q005": {
      // EN: <p>Let <span class="chem">f(x) = 3x - 4</span> and <span class="chem">g(x) = x^2 + 1</span>. Calculate the value of <span class="chem">(g ∘ f)(2)</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = 3x - 4</span>、<span class=\"chem\">g(x) = x^2 + 1</span> とする。<span class=\"chem\">(g ∘ f)(2)</span> の値を計算しなさい (Calculate)。</p>",
      hints: [
        // EN: In <span class="chem">(g ∘ f)(2) = g(f(2))</span>, evaluate the inner function <span class="chem">f(2)</span> first.
        "<span class=\"chem\">(g ∘ f)(2) = g(f(2))</span> なので、まず内側の関数 <span class=\"chem\">f(2)</span> を計算します。",
        // EN: Once you have <span class="chem">f(2) = 2</span>, substitute that output into <span class="chem">g(x) = x^2 + 1</span>.
        "<span class=\"chem\">f(2) = 2</span> が求まったら、その出力を <span class=\"chem\">g(x) = x^2 + 1</span> に代入します。",
      ],
      // EN: <p>Working inside-out: <span class="chem">f(2) = 3(2) - 4 = 2</span>. Then <span class="chem">(g ∘ f)(2) = g(f(2)) = g(2) = 2^2 + 1 = 5</span>.</p>
      solution: "<p>内側から計算します：<span class=\"chem\">f(2) = 3(2) - 4 = 2</span>。次に <span class=\"chem\">(g ∘ f)(2) = g(f(2)) = g(2) = 2^2 + 1 = 5</span> となります。</p>",
    },

    // ── t2-1-q006 · numeric · exam · SL · SL 2.2 · 3 marks
    "t2-1-q006": {
      // EN: <p>A one-to-one function <span class="chem">f</span> is defined by <span class="chem">f(x) = x^3 + 2x - 1</span> for <span class="chem">x ∈ ℝ</span>. Find the value of <span class="chem">f^{-1}(11)</span>.</p>
      stem: "<p>1 対 1 の関数 <span class=\"chem\">f</span> が <span class=\"chem\">x ∈ ℝ</span> に対して <span class=\"chem\">f(x) = x^3 + 2x - 1</span> で定義されている。<span class=\"chem\">f^{-1}(11)</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Do not try to invert a cubic formula! Remember that <span class="chem">f^{-1}(11) = x</span> means <span class="chem">f(x) = 11</span>.
        "3 次式の逆関数を力技で求めようとしないでください！<span class=\"chem\">f^{-1}(11) = x</span> は <span class=\"chem\">f(x) = 11</span> を意味します。",
        // EN: Test small integer values of <span class="chem">x</span> in <span class="chem">x^3 + 2x - 1 = 11</span>.
        "<span class=\"chem\">x^3 + 2x - 1 = 11</span> に小さな整数 <span class=\"chem\">x</span> を代入して調べます。",
      ],
      // EN: <p>Let <span class="chem">f^{-1}(11) = x</span>. By definition of the inverse function, <span class="chem">f(x) = 11</span>, so <span class="chem">x^3 + 2x - 1 = 11 => x^3 + 2x - 12 = 0</span>. Testing <span class="chem">x = 2</span> gives <span class="chem">2^3 + 2(2) - 12 = 8 + 4 - 12 = 0</span>. Since <span class="chem">f</span> is strictly increasing, <span class="chem">f^{-1}(11) = 2</span> is the unique solution.</p>
      solution: "<p><span class=\"chem\">f^{-1}(11) = x</span> とおくと、逆関数の定義より <span class=\"chem\">f(x) = 11</span>、すなわち <span class=\"chem\">x^3 + 2x - 1 = 11 => x^3 + 2x - 12 = 0</span> となります。<span class=\"chem\">x = 2</span> を代入すると <span class=\"chem\">2^3 + 2(2) - 12 = 8 + 4 - 12 = 0</span> が成り立ち、<span class=\"chem\">f</span> は単調増加なので <span class=\"chem\">f^{-1}(11) = 2</span> が唯一の解です。</p>",
    },

    // ── t2-1-q007 · mcq · exam · SL · SL 2.5 · 4 marks
    "t2-1-q007": {
      // EN: <p>The function <span class="chem">f</span> is defined by <span class="chem">f(x) = x^2 - 6x + 11</span> for <span class="chem">x &lt;= 3</span>. Which of the following is the correct expression and domain for <span class="chem">f^{-1}(x)</span>?</p>
      stem: "<p>関数 <span class=\"chem\">f</span> が <span class=\"chem\">x &lt;= 3</span> に対して <span class=\"chem\">f(x) = x^2 - 6x + 11</span> で定義されている。<span class=\"chem\">f^{-1}(x)</span> の式と定義域の正しい組み合わせはどれですか？</p>",
      options: [
        // EN: <span class="chem">f^{-1}(x) = 3 - sqrt(x - 2)</span> for <span class="chem">x &gt;= 2</span>
        "<span class=\"chem\">x &gt;= 2</span> に対して <span class=\"chem\">f^{-1}(x) = 3 - sqrt(x - 2)</span>",
        // EN: <span class="chem">f^{-1}(x) = 3 + sqrt(x - 2)</span> for <span class="chem">x &gt;= 2</span>
        "<span class=\"chem\">x &gt;= 2</span> に対して <span class=\"chem\">f^{-1}(x) = 3 + sqrt(x - 2)</span>",
        // EN: <span class="chem">f^{-1}(x) = 3 - sqrt(x - 2)</span> for <span class="chem">x &lt;= 3</span>
        "<span class=\"chem\">x &lt;= 3</span> に対して <span class=\"chem\">f^{-1}(x) = 3 - sqrt(x - 2)</span>",
        // EN: <span class="chem">f^{-1}(x) = 3 - sqrt(x + 2)</span> for <span class="chem">x &gt;= -2</span>
        "<span class=\"chem\">x &gt;= -2</span> に対して <span class=\"chem\">f^{-1}(x) = 3 - sqrt(x + 2)</span>",
      ],
      hints: [
        // EN: First complete the square: <span class="chem">f(x) = (x - 3)^2 + 2</span>. What is the range of <span class="chem">f</span>?
        "まず平方完成します：<span class=\"chem\">f(x) = (x - 3)^2 + 2</span>。<span class=\"chem\">f</span> の値域は何になりますか？",
        // EN: Swap <span class="chem">x</span> and <span class="chem">y</span> in <span class="chem">y = (x - 3)^2 + 2</span>, and use <span class="chem">Range(f^{-1}) = Domain(f) = (-infty, 3]</span> to select the negative sign.
        "<span class=\"chem\">y = (x - 3)^2 + 2</span> の <span class=\"chem\">x</span> と <span class=\"chem\">y</span> を入れ替え、<span class=\"chem\">Range(f^{-1}) = Domain(f) = (-infty, 3]</span> を使って負の符号を選びます。",
      ],
      // EN: <p>Completing the square gives <span class="chem">f(x) = (x - 3)^2 + 2</span>. Since <span class="chem">(x - 3)^2 &gt;= 0</span>, the range of <span class="chem">f</span> is <span class="chem">y &gt;= 2</span>, so the domain of <span class="chem">f^{-1}</span> is <span class="chem">x &gt;= 2</span>. Swapping <span class="chem">x</span> and <span class="chem">y</span>: <span class="chem">x = (y - 3)^2 + 2 => y = 3 +- sqrt(x - 2)</span>. Since <span class="chem">Range(f^{-1}) = Domain(f)</span> requires <span class="chem">y &lt;= 3</span>, we must choose the minus sign: <span class="chem">f^{-1}(x) = 3 - sqrt(x - 2)</span> for <span class="chem">x &gt;= 2</span>.</p>
      solution: "<p>平方完成すると <span class=\"chem\">f(x) = (x - 3)^2 + 2</span> となります。<span class=\"chem\">(x - 3)^2 &gt;= 0</span> より <span class=\"chem\">f</span> の値域は <span class=\"chem\">y &gt;= 2</span> なので、<span class=\"chem\">f^{-1}</span> の定義域は <span class=\"chem\">x &gt;= 2</span> です。<span class=\"chem\">x</span> と <span class=\"chem\">y</span> を入れ替えると <span class=\"chem\">x = (y - 3)^2 + 2 => y = 3 +- sqrt(x - 2)</span> となり、<span class=\"chem\">Range(f^{-1}) = Domain(f)</span> より <span class=\"chem\">y &lt;= 3</span> が必要なため負の符号を選びます：すなわち <span class=\"chem\">x &gt;= 2</span> に対して <span class=\"chem\">f^{-1}(x) = 3 - sqrt(x - 2)</span>。</p>",
      misconception: {
        // EN (option B): You chose the positive square root +√(x − 2). Because Domain(f) is x ≤ 3, Range(f⁻¹) must be y ≤ 3, which requires 3 − √(x − 2).
        "1": "正の平方根 +√(x − 2) を選んでしまいました。Domain(f) が x ≤ 3 なので Range(f⁻¹) は y ≤ 3 となり、3 − √(x − 2) を選ぶ必要があります。",
        // EN (option C): You found the right formula for f⁻¹(x), but forgot that Domain(f⁻¹) = Range(f) = [2, ∞), not Domain(f).
        "2": "f⁻¹(x) の式は正しいですが、Domain(f⁻¹) が Domain(f) ではなく Range(f) = [2, ∞) であることを忘れています。",
        // EN (option D): When completing the square on x² − 6x + 11 = (x − 3)² − 9 + 11, the vertex k-value is +2, not −2.
        "3": "x² − 6x + 11 = (x − 3)² − 9 + 11 を平方完成したときの頂点の y 座標は −2 ではなく +2 です。",
      },
    },

    // ── t2-1-q008 · multi · exam · SL · SL 2.2 · 3 marks
    "t2-1-q008": {
      // EN: <p>Let <span class="chem">f</span> be a one-to-one function with domain <span class="chem">[-2, 5]</span> and range <span class="chem">[1, 10]</span>. Which of the following statements <strong>must</strong> be true for its inverse function <span class="chem">f^{-1}</span>?</p>
      stem: "<p><span class=\"chem\">f</span> を定義域 <span class=\"chem\">[-2, 5]</span>、値域 <span class=\"chem\">[1, 10]</span> の 1 対 1 の関数とする。その逆関数 <span class=\"chem\">f^{-1}</span> について、<strong>必ず</strong>成り立つ記述をすべて選びなさい。</p>",
      options: [
        // EN: The domain of <span class="chem">f^{-1}</span> is <span class="chem">[1, 10]</span> and the range of <span class="chem">f^{-1}</span> is <span class="chem">[-2, 5]</span>.
        "<span class=\"chem\">f^{-1}</span> の定義域は <span class=\"chem\">[1, 10]</span> であり、<span class=\"chem\">f^{-1}</span> の値域は <span class=\"chem\">[-2, 5]</span> である。",
        // EN: The graph of <span class="chem">y = f^{-1}(x)</span> is the reflection of the graph of <span class="chem">y = f(x)</span> in the line <span class="chem">y = x</span>.
        "<span class=\"chem\">y = f^{-1}(x)</span> のグラフは、<span class=\"chem\">y = f(x)</span> のグラフを直線 <span class=\"chem\">y = x</span> に関して対称移動したものである。",
        // EN: For every <span class="chem">x ∈ [-2, 5]</span>, <span class="chem">(f^{-1} ∘ f)(x) = x</span>.
        "すべての <span class=\"chem\">x ∈ [-2, 5]</span> に対して <span class=\"chem\">(f^{-1} ∘ f)(x) = x</span> である。",
        // EN: For every <span class="chem">x ∈ [-2, 5]</span>, <span class="chem">f^{-1}(x) = 1 / f(x)</span>.
        "すべての <span class=\"chem\">x ∈ [-2, 5]</span> に対して <span class=\"chem\">f^{-1}(x) = 1 / f(x)</span> である。",
      ],
      hints: [
        // EN: Check the three core properties of inverse functions: domain-range swap, reflection in <span class="chem">y = x</span>, and identity composition <span class="chem">f^{-1}(f(x)) = x</span>.
        "逆関数の 3 つの基本性質を確認しましょう：定義域と値域の入れ替え、<span class=\"chem\">y = x</span> に関する対称性、および恒等写像 <span class=\"chem\">f^{-1}(f(x)) = x</span>。",
      ],
      // EN: <p>Statements A, B, and C are fundamental properties of every inverse function: <span class="chem">Domain(f^{-1}) = Range(f) = [1, 10]</span>, <span class="chem">Range(f^{-1}) = Domain(f) = [-2, 5]</span>, the graph reflects across <span class="chem">y = x</span>, and <span class="chem">(f^{-1} ∘ f)(x) = x</span> on <span class="chem">Domain(f)</span>. Statement D confuses the inverse function <span class="chem">f^{-1}(x)</span> with the reciprocal <span class="chem">[f(x)]^{-1} = 1/f(x)</span>.</p>
      solution: "<p>A、B、C はすべての逆関数に成り立つ基本的な性質です：<span class=\"chem\">Domain(f^{-1}) = Range(f) = [1, 10]</span>、<span class=\"chem\">Range(f^{-1}) = Domain(f) = [-2, 5]</span>、グラフは <span class=\"chem\">y = x</span> に関して対称、そして <span class=\"chem\">Domain(f)</span> 上で <span class=\"chem\">(f^{-1} ∘ f)(x) = x</span> となります。D は逆関数 <span class=\"chem\">f^{-1}(x)</span> と逆数 <span class=\"chem\">[f(x)]^{-1} = 1/f(x)</span> を混同しています。</p>",
      misconception: {
        // EN (option D): f⁻¹(x) denotes the inverse mapping that reverses input and output, never the reciprocal 1 / f(x).
        "3": "f⁻¹(x) は入力と出力を逆転させる逆関数を表し、逆数 1 / f(x) ではありません。",
      },
    },

    // ── t2-1-q009 · order · foundation · SL · SL 2.5 · 3 marks
    "t2-1-q009": {
      // EN: <p>Arrange the following algebraic steps in logical order to find the inverse function <span class="chem">f^{-1}(x)</span> of <span class="chem">f(x) = (2x + 1)/(x - 3)</span> for <span class="chem">x != 3</span>.</p>
      stem: "<p><span class=\"chem\">x != 3</span> に対する <span class=\"chem\">f(x) = (2x + 1)/(x - 3)</span> の逆関数 <span class=\"chem\">f^{-1}(x)</span> を求める手順を正しい論理的順序に並べ替えなさい。</p>",
      options: [
        // EN: Write <span class="chem">y = (2x + 1)/(x - 3)</span> and swap <span class="chem">x</span> and <span class="chem">y</span> to get <span class="chem">x = (2y + 1)/(y - 3)</span>.
        "<span class=\"chem\">y = (2x + 1)/(x - 3)</span> とおき、<span class=\"chem\">x</span> と <span class=\"chem\">y</span> を入れ替えて <span class=\"chem\">x = (2y + 1)/(y - 3)</span> を得る。",
        // EN: Multiply both sides by <span class="chem">(y - 3)</span> and expand: <span class="chem">xy - 3x = 2y + 1</span>.
        "両辺に <span class=\"chem\">(y - 3)</span> を掛けて展開する：<span class=\"chem\">xy - 3x = 2y + 1</span>。",
        // EN: Collect all terms containing <span class="chem">y</span> on one side and factor out <span class="chem">y</span>: <span class="chem">y(x - 2) = 3x + 1</span>.
        "<span class=\"chem\">y</span> を含む項を片辺に集めて <span class=\"chem\">y</span> でくくる：<span class=\"chem\">y(x - 2) = 3x + 1</span>。",
        // EN: Divide by <span class="chem">(x - 2)</span> to obtain <span class="chem">f^{-1}(x) = (3x + 1)/(x - 2)</span> for <span class="chem">x != 2</span>.
        "<span class=\"chem\">(x - 2)</span> で割って、<span class=\"chem\">x != 2</span> に対する <span class=\"chem\">f^{-1}(x) = (3x + 1)/(x - 2)</span> を得る。",
      ],
      hints: [
        // EN: Start by swapping <span class="chem">x</span> and <span class="chem">y</span>, clear the fraction, group all <span class="chem">y</span>-terms together so you can factor out <span class="chem">y</span>, and finally divide.
        "まず <span class=\"chem\">x</span> と <span class=\"chem\">y</span> を入れ替え、分母を払い、<span class=\"chem\">y</span> を含む項をまとめて <span class=\"chem\">y</span> でくくり、最後に割ります。",
      ],
      // EN: <p>To isolate <span class="chem">y</span> when it appears in both numerator and denominator, swap <span class="chem">x</span> and <span class="chem">y</span>, multiply by the denominator <span class="chem">(y - 3)</span>, collect the <span class="chem">y</span> terms on the left (<span class="chem">xy - 2y = 3x + 1</span>), factor out <span class="chem">y</span> as <span class="chem">y(x - 2) = 3x + 1</span>, and divide by <span class="chem">(x - 2)</span>.</p>
      solution: "<p>分母と分子の両方に <span class=\"chem\">y</span> が現れるときに <span class=\"chem\">y</span> について解くには、<span class=\"chem\">x</span> と <span class=\"chem\">y</span> を入れ替え、分母 <span class=\"chem\">(y - 3)</span> を掛けて払い、<span class=\"chem\">y</span> の項を左辺に集めて（<span class=\"chem\">xy - 2y = 3x + 1</span>）、<span class=\"chem\">y(x - 2) = 3x + 1</span> とくくり、<span class=\"chem\">(x - 2)</span> で割ります。</p>",
    },

    // ── t2-1-q010 · numeric · exam · SL · SL 2.5 · 4 marks
    "t2-1-q010": {
      // EN: <p>Let <span class="chem">f(x) = (x - 1)^2 - 1</span> for <span class="chem">x &gt;= 1</span>. The graphs of <span class="chem">y = f(x)</span> and <span class="chem">y = f^{-1}(x)</span> intersect at a single point <span class="chem">(a, a)</span> with <span class="chem">a &gt; 0</span>. Find the exact value of <span class="chem">a</span>.</p>
      stem: "<p><span class=\"chem\">x &gt;= 1</span> に対して <span class=\"chem\">f(x) = (x - 1)^2 - 1</span> とする。<span class=\"chem\">y = f(x)</span> と <span class=\"chem\">y = f^{-1}(x)</span> のグラフが <span class=\"chem\">a &gt; 0</span> を満たすただ 1 点 <span class=\"chem\">(a, a)</span> で交わるとき、<span class=\"chem\">a</span> の厳密値（正確な値）を求めなさい (Find)。</p>",
      hints: [
        // EN: Because <span class="chem">f</span> is increasing for <span class="chem">x &gt;= 1</span>, the intersection of <span class="chem">y = f(x)</span> and <span class="chem">y = f^{-1}(x)</span> lies on the mirror line <span class="chem">y = x</span>.
        "<span class=\"chem\">f</span> は <span class=\"chem\">x &gt;= 1</span> で増加関数なので、<span class=\"chem\">y = f(x)</span> と <span class=\"chem\">y = f^{-1}(x)</span> の交点は対称軸 <span class=\"chem\">y = x</span> 上にあります。",
        // EN: Solve <span class="chem">f(x) = x</span>, i.e., <span class="chem">(x - 1)^2 - 1 = x</span>, and keep the root that satisfies <span class="chem">x &gt;= 1</span>.
        "<span class=\"chem\">f(x) = x</span>、すなわち <span class=\"chem\">(x - 1)^2 - 1 = x</span> を解き、<span class=\"chem\">x &gt;= 1</span> を満たす解を選びます。",
      ],
      // EN: <p>Instead of equating <span class="chem">f(x)</span> to <span class="chem">f^{-1}(x) = 1 + sqrt(x + 1)</span>, solve <span class="chem">f(x) = x</span> along the mirror line <span class="chem">y = x</span>: <span class="chem">(x - 1)^2 - 1 = x => x^2 - 2x + 1 - 1 - x = 0 => x^2 - 3x = 0 => x(x - 3) = 0</span>. Since the domain of <span class="chem">f</span> is <span class="chem">x &gt;= 1</span>, we reject <span class="chem">x = 0</span> and obtain <span class="chem">a = 3</span>.</p>
      solution: "<p><span class=\"chem\">f(x)</span> と <span class=\"chem\">f^{-1}(x) = 1 + sqrt(x + 1)</span> を直接等置する代わりに、対称軸 <span class=\"chem\">y = x</span> 上で <span class=\"chem\">f(x) = x</span> を解きます：<span class=\"chem\">(x - 1)^2 - 1 = x => x^2 - 2x + 1 - 1 - x = 0 => x^2 - 3x = 0 => x(x - 3) = 0</span>。<span class=\"chem\">f</span> の定義域は <span class=\"chem\">x &gt;= 1</span> なので <span class=\"chem\">x = 0</span> は不適となり、<span class=\"chem\">a = 3</span> が得られます。</p>",
    },

    // ── t2-1-q011 · mcq · exam · SL · SL 2.5 · 4 marks
    "t2-1-q011": {
      // EN: <p>Let <span class="chem">f(x) = ln(x - 4)</span> for <span class="chem">x &gt; 4</span> and <span class="chem">g(x) = x^2 + k</span> for <span class="chem">x ∈ ℝ</span>. Find the set of values of the constant <span class="chem">k</span> for which the composite function <span class="chem">(f ∘ g)(x)</span> is defined for <strong>all</strong> real numbers <span class="chem">x ∈ ℝ</span>.</p>
      stem: "<p><span class=\"chem\">x &gt; 4</span> に対して <span class=\"chem\">f(x) = ln(x - 4)</span>、<span class=\"chem\">x ∈ ℝ</span> に対して <span class=\"chem\">g(x) = x^2 + k</span> とする。合成関数 <span class=\"chem\">(f ∘ g)(x)</span> が<strong>すべて</strong>の実数 <span class=\"chem\">x ∈ ℝ</span> で定義されるような定数 <span class=\"chem\">k</span> の値の範囲を求めなさい (Find)。</p>",
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
        "<span class=\"chem\">(f ∘ g)(x) = f(g(x))</span> がすべての <span class=\"chem\">x ∈ ℝ</span> で定義されるには、<span class=\"chem\">Range(g)</span> が <span class=\"chem\">Domain(f) = (4, infty)</span> の部分集合である必要があります。",
        // EN: What is the minimum value of <span class="chem">g(x) = x^2 + k</span> for <span class="chem">x ∈ ℝ</span>?
        "<span class=\"chem\">x ∈ ℝ</span> における <span class=\"chem\">g(x) = x^2 + k</span> の最小値は何ですか？",
      ],
      // EN: <p>The domain of <span class="chem">f</span> is <span class="chem">(4, infty)</span>. For <span class="chem">g(x) = x^2 + k</span> with <span class="chem">x ∈ ℝ</span>, the range of <span class="chem">g</span> is <span class="chem">[k, infty)</span> (minimum value <span class="chem">k</span> at <span class="chem">x = 0</span>). Requiring <span class="chem">Range(g) ⊆ Domain(f)</span> means every output in <span class="chem">[k, infty)</span> must be strictly greater than <span class="chem">4</span>, so <span class="chem">k &gt; 4</span>.</p>
      solution: "<p><span class=\"chem\">f</span> の定義域は <span class=\"chem\">(4, infty)</span> です。<span class=\"chem\">x ∈ ℝ</span> に対する <span class=\"chem\">g(x) = x^2 + k</span> で、<span class=\"chem\">g</span> の値域は <span class=\"chem\">[k, infty)</span>（<span class=\"chem\">x = 0</span> で最小値 <span class=\"chem\">k</span>）です。<span class=\"chem\">Range(g) ⊆ Domain(f)</span> であるには <span class=\"chem\">[k, infty)</span> のすべての値が <span class=\"chem\">4</span> より真に大きくなければならないため、<span class=\"chem\">k &gt; 4</span> となります。</p>",
      misconception: {
        // EN (option B): If k = 4, then at x = 0 we get g(0) = 4, and f(4) = ln(4 − 4) = ln(0), which is undefined! The inequality must be strict: k > 4.
        "1": "k = 4 のとき x = 0 で g(0) = 4 となり、f(4) = ln(4 − 4) = ln(0) は未定義になってしまいます！等号なしの k > 4 でなければなりません。",
        // EN (option C): You checked that g(x) > 0 instead of checking the actual domain of f, which is u > 4.
        "2": "f の本来の定義域 u > 4 ではなく、g(x) > 0 を調べてしまいました。",
        // EN (option D): You reversed the inequality sign when requiring the minimum of g(x) to exceed 4.
        "3": "g(x) の最小値が 4 より大きいという条件で不等号の向きを逆にしてしまいました。",
      },
    },

    // ── t2-1-q012 · numeric · exam · AHL · AHL 2.14 · 3 marks
    "t2-1-q012": {
      // EN: <p>Let <span class="chem">f(x) = 2x^2 - 12x + 23</span> for <span class="chem">x &gt;= k</span>. Find the <strong>smallest</strong> possible value of <span class="chem">k</span> such that the inverse function <span class="chem">f^{-1}</span> exists.</p>
      stem: "<p><span class=\"chem\">x &gt;= k</span> に対して <span class=\"chem\">f(x) = 2x^2 - 12x + 23</span> とする。逆関数 <span class=\"chem\">f^{-1}</span> が存在するような <span class=\"chem\">k</span> の<strong>最小値</strong>を求めなさい (Find)。</p>",
      hints: [
        // EN: A quadratic function is one-to-one on <span class="chem">x &gt;= k</span> if and only if <span class="chem">k</span> is at or to the right of the axis of symmetry (the vertex <span class="chem">x</span>-coordinate).
        "2 次関数が <span class=\"chem\">x &gt;= k</span> 上で 1 対 1 になるのは、<span class=\"chem\">k</span> が対称軸（頂点の <span class=\"chem\">x</span> 座標）上またはそれより右にあるときです。",
        // EN: Use <span class="chem">x = -b / (2a)</span> from your Formula Booklet.
        "公式集（Formula booklet）の <span class=\"chem\">x = -b / (2a)</span> を使います。",
      ],
      // EN: <p>For <span class="chem">f(x) = 2x^2 - 12x + 23</span> to be one-to-one on <span class="chem">x &gt;= k</span>, the domain cannot extend to both sides of the vertex. The axis of symmetry is <span class="chem">x = -b/(2a) = -(-12)/(2 × 2) = 3</span>. Thus <span class="chem">f</span> is one-to-one for any <span class="chem">k &gt;= 3</span>, so the smallest value of <span class="chem">k</span> is <span class="chem">3</span>.</p>
      solution: "<p><span class=\"chem\">f(x) = 2x^2 - 12x + 23</span> が <span class=\"chem\">x &gt;= k</span> で 1 対 1 になるには、定義域が頂点の両側にまたがらないようにする必要があります。対称軸は <span class=\"chem\">x = -b/(2a) = -(-12)/(2 × 2) = 3</span> なので、<span class=\"chem\">k &gt;= 3</span> のとき <span class=\"chem\">f</span> は 1 対 1 になり、<span class=\"chem\">k</span> の最小値は <span class=\"chem\">3</span> です。</p>",
    },

    // ── t2-1-q013 · numeric · exam · SL · SL 2.4 · 3 marks
    "t2-1-q013": {
      // EN: <p>Consider the function <span class="chem">f(x) = x e^{-0.5x}</span> for <span class="chem">x &gt;= 0</span>. Using your GDC or otherwise, find the maximum value in the range of <span class="chem">f</span>, giving your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">x &gt;= 0</span> に対して関数 <span class=\"chem\">f(x) = x e^{-0.5x}</span> を考える。GDC などを用いて、<span class=\"chem\">f</span> の値域における最大値を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Graph <span class="chem">y = x e^{-0.5x}</span> on your GDC for <span class="chem">x &gt;= 0</span> and locate the local maximum.
        "GDC で <span class=\"chem\">x &gt;= 0</span> の範囲に <span class=\"chem\">y = x e^{-0.5x}</span> のグラフを描き、極大値の位置を調べます。",
        // EN: The maximum occurs at <span class="chem">x = 2</span>, where <span class="chem">f(2) = 2 e^{-1} = 2/e</span>.
        "最大値は <span class=\"chem\">x = 2</span> のときに生じ、<span class=\"chem\">f(2) = 2 e^{-1} = 2/e</span> となります。",
      ],
      // EN: <p>Graphing <span class="chem">y = x e^{-0.5x}</span> on a GDC (or setting <span class="chem">f'(x) = (1 - 0.5x)e^{-0.5x} = 0</span>) shows a local maximum at <span class="chem">x = 2</span> with value <span class="chem">f(2) = 2e^{-1} ≈ 0.73576 = 0.736</span> (3 s.f.). Since <span class="chem">f(0) = 0</span> and <span class="chem">f(x) -&gt; 0</span> as <span class="chem">x -&gt; infty</span>, the maximum value in the range is <span class="chem">0.736</span>.</p>
      solution: "<p>GDC で <span class=\"chem\">y = x e^{-0.5x}</span> を描く（または <span class=\"chem\">f'(x) = (1 - 0.5x)e^{-0.5x} = 0</span> を解く）と、<span class=\"chem\">x = 2</span> で極大となり、その値は <span class=\"chem\">f(2) = 2e^{-1} ≈ 0.73576 = 0.736</span>（有効数字 3 桁）です。<span class=\"chem\">f(0) = 0</span> かつ <span class=\"chem\">x -&gt; infty</span> で <span class=\"chem\">f(x) -&gt; 0</span> なので、値域の最大値は <span class=\"chem\">0.736</span> です。</p>",
    },

    // ── t2-1-q014 · short · exam · SL · SL 2.1 · 5 marks
    "t2-1-q014": {
      // EN: <p>A triangle has vertices at <span class="chem">A(1, 1)</span>, <span class="chem">B(7, 5)</span>, and <span class="chem">C(3, 8)</span>.<br>(a) Find the equation of the perpendicular bisector of side <span class="chem">[AB]</span> in the form <span class="chem">ax + by + d = 0</span>, where <span class="chem">a, b, d ∈ ℤ</span>. <strong>[3 marks]</strong><br>(b) Determine whether vertex <span class="chem">C(3, 8)</span> is equidistant from <span class="chem">A</span> and <span class="chem">B</span>, justifying your answer. <strong>[2 marks]</strong></p>
      stem: "<p>三角形の頂点が <span class=\"chem\">A(1, 1)</span>、<span class=\"chem\">B(7, 5)</span>、<span class=\"chem\">C(3, 8)</span> である。<br>(a) 辺 <span class=\"chem\">[AB]</span> の垂直二等分線の方程式を <span class=\"chem\">a, b, d ∈ ℤ</span> として <span class=\"chem\">ax + by + d = 0</span> の形で求めなさい (Find)。 <strong>[3 marks]</strong><br>(b) 頂点 <span class=\"chem\">C(3, 8)</span> が <span class=\"chem\">A</span> と <span class=\"chem\">B</span> から等距離にあるかどうかを、理由を示して判定しなさい (Determine)。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: For part (a), find the midpoint <span class="chem">M</span> and negative reciprocal gradient of <span class="chem">[AB]</span>.
        "(a) では、<span class=\"chem\">[AB]</span> の中点 <span class=\"chem\">M</span> と負の逆数の傾きを求めます。",
        // EN: For part (b), recall that the perpendicular bisector of <span class="chem">[AB]</span> is the exact set of points equidistant from <span class="chem">A</span> and <span class="chem">B</span>!
        "(b) では、<span class=\"chem\">[AB]</span> の垂直二等分線が <span class=\"chem\">A</span> と <span class=\"chem\">B</span> から等距離にある点全体の集合であることを思い出しましょう！",
      ],
      // EN: <p>(a) The midpoint of <span class="chem">[AB]</span> is <span class="chem">M((1+7)/2, (1+5)/2) = (4, 3)</span>. The gradient of <span class="chem">[AB]</span> is <span class="chem">(5-1)/(7-1) = 2/3</span>, so the perpendicular gradient is <span class="chem">-3/2</span>. Thus <span class="chem">y - 3 = (-3/2)(x - 4) => 2y - 6 = -3x + 12 => 3x + 2y - 18 = 0</span>.<br>(b) A point is equidistant from <span class="chem">A</span> and <span class="chem">B</span> if and only if it lies on the perpendicular bisector of <span class="chem">[AB]</span>. Substituting <span class="chem">C(3, 8)</span> gives <span class="chem">3(3) + 2(8) - 18 = 9 + 16 - 18 = 7 != 0</span>, so <span class="chem">C</span> is not equidistant from <span class="chem">A</span> and <span class="chem">B</span>.</p>
      solution: "<p>(a) <span class=\"chem\">[AB]</span> の中点は <span class=\"chem\">M((1+7)/2, (1+5)/2) = (4, 3)</span>、<span class=\"chem\">[AB]</span> の傾きは <span class=\"chem\">(5-1)/(7-1) = 2/3</span> なので垂直な傾きは <span class=\"chem\">-3/2</span> です。よって <span class=\"chem\">y - 3 = (-3/2)(x - 4) => 2y - 6 = -3x + 12 => 3x + 2y - 18 = 0</span>。<br>(b) ある点が <span class=\"chem\">A</span> と <span class=\"chem\">B</span> から等距離にあることと、<span class=\"chem\">[AB]</span> の垂直二等分線上にあることは同値です。<span class=\"chem\">C(3, 8)</span> を代入すると <span class=\"chem\">3(3) + 2(8) - 18 = 9 + 16 - 18 = 7 != 0</span> なので、<span class=\"chem\">C</span> は <span class=\"chem\">A</span> と <span class=\"chem\">B</span> から等距離にはありません。</p>",
      // EN: <p>(a) <span class="chem">3x + 2y - 18 = 0</span>; (b) Not equidistant because <span class="chem">3(3) + 2(8) - 18 = 7 != 0</span> (so <span class="chem">C</span> does not lie on the perpendicular bisector of <span class="chem">[AB]</span>).</p>
      answer: "<p>(a) <span class=\"chem\">3x + 2y - 18 = 0</span>；(b) <span class=\"chem\">3(3) + 2(8) - 18 = 7 != 0</span> であるため等距離ではない（<span class=\"chem\">C</span> は <span class=\"chem\">[AB]</span> の垂直二等分線上にない）。</p>",
      markscheme: [
        // EN: A1: Finds midpoint of [AB] as M(4, 3).
        "A1：[AB] の中点を M(4, 3) と求める。",
        // EN: M1: Finds gradient m_AB = (5 − 1)/(7 − 1) = 2/3 and takes negative reciprocal m_⊥ = −3/2.
        "M1：傾き m_AB = (5 − 1)/(7 − 1) = 2/3 を求め、負の逆数 m_⊥ = −3/2 をとる。",
        // EN: A1: Substitutes into y − 3 = (−3/2)(x − 4) and rearranges to integer general form 3x + 2y − 18 = 0.
        "A1：y − 3 = (−3/2)(x − 4) に代入し、整数の一般形 3x + 2y − 18 = 0 に整理する。",
        // EN: M1: Substitutes C(3, 8) into 3x + 2y − 18 (or computes distances AC = √53 and BC = √25 = 5).
        "M1：C(3, 8) を 3x + 2y − 18 に代入する（または距離 AC = √53 と BC = √25 = 5 を計算する）。",
        // EN: R1: States that since 3(3) + 2(8) − 18 = 7 ≠ 0 (or AC ≠ BC), C is NOT equidistant from A and B.
        "R1：3(3) + 2(8) − 18 = 7 ≠ 0（または AC ≠ BC）なので、C は A と B から等距離ではないと述べる。",
      ],
    },

    // ── t2-1-q015 · short · exam · SL · SL 2.5 · 6 marks
    "t2-1-q015": {
      // EN: <p>Let <span class="chem">f(x) = 3x - 2</span> for <span class="chem">x ∈ ℝ</span> and <span class="chem">g(x) = 5 / (x + 1)</span> for <span class="chem">x != -1</span>.<br>(a) Find an expression for <span class="chem">(g ∘ f)(x)</span> and state its largest possible domain. <strong>[3 marks]</strong><br>(b) Solve the equation <span class="chem">(f^{-1} ∘ g)(x) = 2</span>. <strong>[3 marks]</strong></p>
      stem: "<p><span class=\"chem\">x ∈ ℝ</span> に対して <span class=\"chem\">f(x) = 3x - 2</span>、<span class=\"chem\">x != -1</span> に対して <span class=\"chem\">g(x) = 5 / (x + 1)</span> とする。<br>(a) <span class=\"chem\">(g ∘ f)(x)</span> の式を求め (Find)、その最大の定義域を述べなさい (State)。 <strong>[3 marks]</strong><br>(b) 方程式 <span class=\"chem\">(f^{-1} ∘ g)(x) = 2</span> を解きなさい。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: For part (a), replace <span class="chem">x</span> in <span class="chem">g(x) = 5/(x + 1)</span> with <span class="chem">(3x - 2)</span>.
        "(a) では、<span class=\"chem\">g(x) = 5/(x + 1)</span> の <span class=\"chem\">x</span> を <span class=\"chem\">(3x - 2)</span> で置き換えます。",
        // EN: For part (b), apply <span class="chem">f</span> to both sides of <span class="chem">f^{-1}(g(x)) = 2</span> to get <span class="chem">g(x) = f(2)</span> immediately!
        "(b) では、<span class=\"chem\">f^{-1}(g(x)) = 2</span> の両辺に <span class=\"chem\">f</span> を適用するとすぐに <span class=\"chem\">g(x) = f(2)</span> が得られます！",
      ],
      // EN: <p>(a) <span class="chem">(g ∘ f)(x) = g(3x - 2) = 5 / ((3x - 2) + 1) = 5 / (3x - 1)</span>, which is defined for all real <span class="chem">x != 1/3</span>.<br>(b) Applying <span class="chem">f</span> to both sides of <span class="chem">f^{-1}(g(x)) = 2</span> gives <span class="chem">g(x) = f(2) = 3(2) - 2 = 4</span>. Therefore <span class="chem">5 / (x + 1) = 4 => x + 1 = 5/4 => x = 1/4</span>.</p>
      solution: "<p>(a) <span class=\"chem\">(g ∘ f)(x) = g(3x - 2) = 5 / ((3x - 2) + 1) = 5 / (3x - 1)</span> であり、<span class=\"chem\">x != 1/3</span> のすべての実数で定義されます。<br>(b) <span class=\"chem\">f^{-1}(g(x)) = 2</span> の両辺に <span class=\"chem\">f</span> を適用すると <span class=\"chem\">g(x) = f(2) = 3(2) - 2 = 4</span> となります。よって <span class=\"chem\">5 / (x + 1) = 4 => x + 1 = 5/4 => x = 1/4</span> です。</p>",
      // EN: <p>(a) <span class="chem">(g ∘ f)(x) = 5 / (3x - 1)</span> with domain <span class="chem">x != 1/3</span>; (b) <span class="chem">x = 1/4</span> (or <span class="chem">0.25</span>).</p>
      answer: "<p>(a) <span class=\"chem\">(g ∘ f)(x) = 5 / (3x - 1)</span>、定義域は <span class=\"chem\">x != 1/3</span>；(b) <span class=\"chem\">x = 1/4</span>（または <span class=\"chem\">0.25</span>）。</p>",
      markscheme: [
        // EN: M1: Substitutes f(x) into g(x) to write g(3x − 2) = 5 / ((3x − 2) + 1).
        "M1：f(x) を g(x) に代入して g(3x − 2) = 5 / ((3x − 2) + 1) と書く。",
        // EN: A1: Simplifies to (g ∘ f)(x) = 5 / (3x − 1).
        "A1：(g ∘ f)(x) = 5 / (3x − 1) に整理する。",
        // EN: A1: States domain x ≠ 1/3 (x ∈ ℝ, x ≠ 1/3).
        "A1：定義域 x ≠ 1/3（x ∈ ℝ, x ≠ 1/3）を述べる。",
        // EN: M1: Applies f to both sides of f⁻¹(g(x)) = 2 to write g(x) = f(2) (or finds f⁻¹(u) = (u + 2)/3 and sets (g(x) + 2)/3 = 2).
        "M1：f⁻¹(g(x)) = 2 の両辺に f を適用して g(x) = f(2) と書く（または f⁻¹(u) = (u + 2)/3 を求めて (g(x) + 2)/3 = 2 とおく）。",
        // EN: A1: Evaluates g(x) = 3(2) − 2 = 4, so 5 / (x + 1) = 4.
        "A1：g(x) = 3(2) − 2 = 4 を計算し、5 / (x + 1) = 4 とする。",
        // EN: A1: Solves x + 1 = 5/4 to get x = 1/4.
        "A1：x + 1 = 5/4 を解いて x = 1/4 を得る。",
      ],
    },

    // ── t2-1-q016 · numeric · challenge · AHL · AHL 2.14 · 4 marks
    "t2-1-q016": {
      // EN: <p>The rational function <span class="chem">f(x) = (kx + 5)/(2x - 6)</span> (<span class="chem">x != 3</span>) is a <strong>self-inverse function</strong>, meaning that <span class="chem">f^{-1}(x) = f(x)</span> for all <span class="chem">x</span> in its domain. Find the value of the constant <span class="chem">k</span>.</p>
      stem: "<p>分数関数 <span class=\"chem\">f(x) = (kx + 5)/(2x - 6)</span>（<span class=\"chem\">x != 3</span>）は<strong>自己逆関数</strong>であり、定義域のすべての <span class=\"chem\">x</span> に対して <span class=\"chem\">f^{-1}(x) = f(x)</span> を満たす。定数 <span class=\"chem\">k</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: "self-inverse" means that applying <span class="chem">f</span> twice gives back <span class="chem">x</span>, so the graph of <span class="chem">f</span> is its own reflection in <span class="chem">y = x</span>. Use the asymptotes (or find <span class="chem">f^{-1}</span> algebraically) and match the result with <span class="chem">f</span>.
        "解読：「自己逆関数」とは、<span class=\"chem\">f</span> を 2 回施すと <span class=\"chem\">x</span> に戻ること、つまり <span class=\"chem\">f</span> のグラフが <span class=\"chem\">y = x</span> に関して自分自身と対称であることを意味します。漸近線を使って（または <span class=\"chem\">f^{-1}</span> を代数的に求めて）、その結果を <span class=\"chem\">f</span> と比較します。",
        // EN: The domain of <span class="chem">f</span> is <span class="chem">x != 3</span> (vertical asymptote <span class="chem">x = 3</span>), and the range of <span class="chem">f</span> is <span class="chem">y != k/2</span> (horizontal asymptote <span class="chem">y = k/2</span>).
        "<span class=\"chem\">f</span> の定義域は <span class=\"chem\">x != 3</span>（鉛直漸近線 <span class=\"chem\">x = 3</span>）、<span class=\"chem\">f</span> の値域は <span class=\"chem\">y != k/2</span>（水平漸近線 <span class=\"chem\">y = k/2</span>）です。",
        // EN: Because <span class="chem">f^{-1} = f</span>, we must have <span class="chem">Domain(f) = Range(f)</span>, so the excluded value <span class="chem">k/2</span> must equal <span class="chem">3</span>!
        "<span class=\"chem\">f^{-1} = f</span> なので <span class=\"chem\">Domain(f) = Range(f)</span> でなければならず、除外される値 <span class=\"chem\">k/2</span> は <span class=\"chem\">3</span> に等しくなります！",
      ],
      // EN: <p>Method 1 (Asymptote symmetry): For <span class="chem">f</span> to equal <span class="chem">f^{-1}</span>, its vertical asymptote <span class="chem">x = 3</span> and horizontal asymptote <span class="chem">y = k/2</span> must be reflections of each other in <span class="chem">y = x</span>. Hence <span class="chem">k/2 = 3 => k = 6</span>.<br>Method 2 (Algebraic inversion): Let <span class="chem">x = (ky + 5)/(2y - 6) => 2xy - 6x = ky + 5 => y(2x - k) = 6x + 5 => f^{-1}(x) = (6x + 5)/(2x - k)</span>. Matching <span class="chem">f^{-1}(x) = f(x)</span> gives <span class="chem">k = 6</span>.</p>
      solution: "<p>解法 1（漸近線の対称性）：<span class=\"chem\">f</span> と <span class=\"chem\">f^{-1}</span> が等しくなるには、鉛直漸近線 <span class=\"chem\">x = 3</span> と水平漸近線 <span class=\"chem\">y = k/2</span> が <span class=\"chem\">y = x</span> に関して互いに対称でなければなりません。よって <span class=\"chem\">k/2 = 3 => k = 6</span>。<br>解法 2（逆関数の直接計算）：<span class=\"chem\">x = (ky + 5)/(2y - 6) => 2xy - 6x = ky + 5 => y(2x - k) = 6x + 5 => f^{-1}(x) = (6x + 5)/(2x - k)</span> となり、<span class=\"chem\">f^{-1}(x) = f(x)</span> と比較して <span class=\"chem\">k = 6</span> が得られます。</p>",
    },

    // ── t2-1-q017 · mcq · challenge · SL · SL 2.5 · 4 marks
    "t2-1-q017": {
      // EN: <p>Let <span class="chem">f(x) = sqrt(x - 2)</span> for <span class="chem">x &gt;= 2</span> and <span class="chem">g(x) = 6 - x^2</span> for <span class="chem">x &gt;= 0</span>. What is the largest domain and corresponding range of the composite function <span class="chem">(f ∘ g)(x)</span>?</p>
      stem: "<p><span class=\"chem\">x &gt;= 2</span> に対して <span class=\"chem\">f(x) = sqrt(x - 2)</span>、<span class=\"chem\">x &gt;= 0</span> に対して <span class=\"chem\">g(x) = 6 - x^2</span> とする。合成関数 <span class=\"chem\">(f ∘ g)(x)</span> の最大の定義域とそれに対応する値域はどれですか？</p>",
      options: [
        // EN: Domain: <span class="chem">0 &lt;= x &lt;= 2</span>; Range: <span class="chem">0 &lt;= y &lt;= 2</span>
        "定義域：<span class=\"chem\">0 &lt;= x &lt;= 2</span>；値域：<span class=\"chem\">0 &lt;= y &lt;= 2</span>",
        // EN: Domain: <span class="chem">-2 &lt;= x &lt;= 2</span>; Range: <span class="chem">0 &lt;= y &lt;= 2</span>
        "定義域：<span class=\"chem\">-2 &lt;= x &lt;= 2</span>；値域：<span class=\"chem\">0 &lt;= y &lt;= 2</span>",
        // EN: Domain: <span class="chem">0 &lt;= x &lt;= sqrt(6)</span>; Range: <span class="chem">0 &lt;= y &lt;= 2</span>
        "定義域：<span class=\"chem\">0 &lt;= x &lt;= sqrt(6)</span>；値域：<span class=\"chem\">0 &lt;= y &lt;= 2</span>",
        // EN: Domain: <span class="chem">x &gt;= 0</span>; Range: <span class="chem">0 &lt;= y &lt;= sqrt(6)</span>
        "定義域：<span class=\"chem\">x &gt;= 0</span>；値域：<span class=\"chem\">0 &lt;= y &lt;= sqrt(6)</span>",
      ],
      hints: [
        // EN: Decode: "the largest domain of <span class="chem">f ∘ g</span>" means the inputs <span class="chem">x</span> that <span class="chem">g</span> accepts AND whose outputs <span class="chem">g(x)</span> are allowed into <span class="chem">f</span>. Combine the two restrictions, then find the range from the simplified composite.
        "解読：「<span class=\"chem\">f ∘ g</span> の最大の定義域」とは、<span class=\"chem\">g</span> に入力でき、かつその出力 <span class=\"chem\">g(x)</span> を <span class=\"chem\">f</span> に入力できるような <span class=\"chem\">x</span> の集合です。2 つの制限を組み合わせ、簡単にした合成関数から値域を求めます。",
        // EN: An input <span class="chem">x</span> is in the domain of <span class="chem">f ∘ g</span> if and only if <span class="chem">x ∈ Domain(g)</span> (<span class="chem">x &gt;= 0</span>) AND <span class="chem">g(x) ∈ Domain(f)</span> (<span class="chem">6 - x^2 &gt;= 2</span>).
        "入力 <span class=\"chem\">x</span> が <span class=\"chem\">f ∘ g</span> の定義域に入るのは、<span class=\"chem\">x ∈ Domain(g)</span>（<span class=\"chem\">x &gt;= 0</span>）かつ <span class=\"chem\">g(x) ∈ Domain(f)</span>（<span class=\"chem\">6 - x^2 &gt;= 2</span>）のとき、かつそのときに限ります。",
        // EN: Solve <span class="chem">6 - x^2 &gt;= 2</span> for <span class="chem">x &gt;= 0</span>, then evaluate <span class="chem">f(g(x)) = sqrt(4 - x^2)</span> on that interval.
        "<span class=\"chem\">x &gt;= 0</span> のもとで <span class=\"chem\">6 - x^2 &gt;= 2</span> を解き、その区間で <span class=\"chem\">f(g(x)) = sqrt(4 - x^2)</span> の値域を求めます。",
      ],
      // EN: <p>We require both <span class="chem">x &gt;= 0</span> (from <span class="chem">Domain(g)</span>) and <span class="chem">g(x) &gt;= 2</span> (from <span class="chem">Domain(f)</span>): <span class="chem">6 - x^2 &gt;= 2 => x^2 &lt;= 4 => -2 &lt;= x &lt;= 2</span>. Intersecting with <span class="chem">x &gt;= 0</span> gives the domain <span class="chem">0 &lt;= x &lt;= 2</span>. On <span class="chem">0 &lt;= x &lt;= 2</span>, <span class="chem">(f ∘ g)(x) = sqrt((6 - x^2) - 2) = sqrt(4 - x^2)</span> decreases from <span class="chem">sqrt(4) = 2</span> at <span class="chem">x = 0</span> to <span class="chem">0</span> at <span class="chem">x = 2</span>, so the range is <span class="chem">0 &lt;= y &lt;= 2</span>.</p>
      solution: "<p><span class=\"chem\">x &gt;= 0</span>（<span class=\"chem\">Domain(g)</span> より）と <span class=\"chem\">g(x) &gt;= 2</span>（<span class=\"chem\">Domain(f)</span> より）の両方が必要です：<span class=\"chem\">6 - x^2 &gt;= 2 => x^2 &lt;= 4 => -2 &lt;= x &lt;= 2</span>。<span class=\"chem\">x &gt;= 0</span> との共通部分をとると定義域は <span class=\"chem\">0 &lt;= x &lt;= 2</span> となります。<span class=\"chem\">0 &lt;= x &lt;= 2</span> 上で <span class=\"chem\">(f ∘ g)(x) = sqrt((6 - x^2) - 2) = sqrt(4 - x^2)</span> は <span class=\"chem\">x = 0</span> の <span class=\"chem\">sqrt(4) = 2</span> から <span class=\"chem\">x = 2</span> の <span class=\"chem\">0</span> まで減少するため、値域は <span class=\"chem\">0 &lt;= y &lt;= 2</span> です。</p>",
      misconception: {
        // EN (option B): You solved 6 − x² ≥ 2 ⇒ −2 ≤ x ≤ 2, but forgot that the given domain of the inner function g already restricts x ≥ 0.
        "1": "6 − x² ≥ 2 ⇒ −2 ≤ x ≤ 2 を解きましたが、内側の関数 g の定義域がすでに x ≥ 0 に制限されていることを忘れています。",
        // EN (option C): You required g(x) ≥ 0 (x ≤ √6) instead of requiring g(x) to lie in Domain(f) = [2, ∞), which requires 6 − x² ≥ 2 ⇒ x ≤ 2.
        "2": "g(x) が Domain(f) = [2, ∞) に入る条件 6 − x² ≥ 2 ⇒ x ≤ 2 ではなく、g(x) ≥ 0（x ≤ √6）を調べてしまいました。",
        // EN (option D): Without restricting x ≤ 2, outputs of g(x) fall below 2 and make √(g(x) − 2) undefined.
        "3": "x ≤ 2 に制限しないと g(x) の出力が 2 未満になり、√(g(x) − 2) が未定義になってしまいます。",
      },
    },

    // ── t2-1-q018 · short · challenge · AHL · SL 2.5 / AHL 2.14 · 7 marks
    "t2-1-q018": {
      // EN: <p>The function <span class="chem">f</span> is defined by <span class="chem">f(x) = e^{2x} - 4e^x + 5</span> for <span class="chem">x &lt;= a</span>.<br>(a) By completing the square in terms of <span class="chem">e^x</span>, find the largest possible value of <span class="chem">a</span> such that <span class="chem">f^{-1}</span> exists. <strong>[3 marks]</strong><br>(b) For this value of <span class="chem">a</span>, find an expression for <span class="chem">f^{-1}(x)</span> and state the domain of <span class="chem">f^{-1}</span> carefully. <strong>[4 marks]</strong></p>
      stem: "<p>関数 <span class=\"chem\">f</span> が <span class=\"chem\">x &lt;= a</span> に対して <span class=\"chem\">f(x) = e^{2x} - 4e^x + 5</span> で定義されている。<br>(a) <span class=\"chem\">e^x</span> について平方完成することにより、<span class=\"chem\">f^{-1}</span> が存在するような最大の <span class=\"chem\">a</span> の値を求めなさい (Find)。 <strong>[3 marks]</strong><br>(b) この <span class=\"chem\">a</span> の値に対して、<span class=\"chem\">f^{-1}(x)</span> の式を求め (Find)、<span class=\"chem\">f^{-1}</span> の定義域を正確に述べなさい (State)。 <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: <span class="chem">e^{2x} = (e^x)^2</span>, so <span class="chem">f</span> is a quadratic in disguise. "The largest <span class="chem">a</span> such that <span class="chem">f^{-1}</span> exists" asks where <span class="chem">f</span> stops being one-to-one (its turning point), and the domain of <span class="chem">f^{-1}</span> is the range of <span class="chem">f</span> on <span class="chem">x &lt;= a</span>.
        "解読：<span class=\"chem\">e^{2x} = (e^x)^2</span> なので、<span class=\"chem\">f</span> は形を変えた 2 次関数です。「<span class=\"chem\">f^{-1}</span> が存在する最大の <span class=\"chem\">a</span>」は <span class=\"chem\">f</span> が 1 対 1 でなくなる点（極値点）を問うており、<span class=\"chem\">f^{-1}</span> の定義域は <span class=\"chem\">x &lt;= a</span> における <span class=\"chem\">f</span> の値域です。",
        // EN: Treat <span class="chem">u = e^x</span> as the variable in <span class="chem">u^2 - 4u + 5 = (u - 2)^2 + 1</span>.
        "<span class=\"chem\">u = e^x</span> を変数とみて、<span class=\"chem\">u^2 - 4u + 5 = (u - 2)^2 + 1</span> と平方完成します。",
        // EN: Watch out for the upper bound of the range of <span class="chem">f</span>: as <span class="chem">x -&gt; -infty</span>, <span class="chem">e^x -&gt; 0^+</span>, so <span class="chem">f(x)</span> approaches <span class="chem">(0 - 2)^2 + 1 = 5</span> from below without ever reaching <span class="chem">5</span>!
        "<span class=\"chem\">f</span> の値域の上限に注意しましょう：<span class=\"chem\">x -&gt; -infty</span> のとき <span class=\"chem\">e^x -&gt; 0^+</span> なので、<span class=\"chem\">f(x)</span> は <span class=\"chem\">5</span> に達することなく下から <span class=\"chem\">(0 - 2)^2 + 1 = 5</span> に近づきます！",
      ],
      // EN: <p>(a) Completing the square in <span class="chem">e^x</span> gives <span class="chem">f(x) = (e^x - 2)^2 + 1</span>. The minimum occurs when <span class="chem">e^x = 2 => x = ln 2</span>. Hence the largest value of <span class="chem">a</span> for which <span class="chem">f</span> is one-to-one on <span class="chem">(-infty, a]</span> is <span class="chem">a = ln 2</span>.<br>(b) As <span class="chem">x</span> increases from <span class="chem">-infty</span> to <span class="chem">ln 2</span>, <span class="chem">e^x</span> increases across <span class="chem">(0, 2]</span>, so <span class="chem">f(x) = (e^x - 2)^2 + 1</span> decreases from <span class="chem">5</span> (excluded, since <span class="chem">e^x &gt; 0</span>) down to <span class="chem">1</span> (included at <span class="chem">x = ln 2</span>). Thus <span class="chem">Domain(f^{-1}) = Range(f) = [1, 5)</span>, i.e., <span class="chem">1 &lt;= x &lt; 5</span>. Swapping <span class="chem">x</span> and <span class="chem">y</span>: <span class="chem">x = (e^y - 2)^2 + 1 => e^y = 2 - sqrt(x - 1)</span> (minus sign since <span class="chem">e^y &lt;= 2</span>), so <span class="chem">f^{-1}(x) = ln(2 - sqrt(x - 1))</span>.</p>
      solution: "<p>(a) <span class=\"chem\">e^x</span> について平方完成すると <span class=\"chem\">f(x) = (e^x - 2)^2 + 1</span> となります。最小値は <span class=\"chem\">e^x = 2 => x = ln 2</span> のときに生じるため、<span class=\"chem\">(-infty, a]</span> で <span class=\"chem\">f</span> が 1 対 1 になる最大の <span class=\"chem\">a</span> は <span class=\"chem\">a = ln 2</span> です。<br>(b) <span class=\"chem\">x</span> が <span class=\"chem\">-infty</span> から <span class=\"chem\">ln 2</span> まで増えると <span class=\"chem\">e^x</span> は <span class=\"chem\">(0, 2]</span> を動くので、<span class=\"chem\">f(x) = (e^x - 2)^2 + 1</span> は <span class=\"chem\">5</span>（<span class=\"chem\">e^x &gt; 0</span> のため含まない）から <span class=\"chem\">1</span>（<span class=\"chem\">x = ln 2</span> で含む）まで減少します。よって <span class=\"chem\">Domain(f^{-1}) = Range(f) = [1, 5)</span>、すなわち <span class=\"chem\">1 &lt;= x &lt; 5</span> です。<span class=\"chem\">x</span> と <span class=\"chem\">y</span> を入れ替えると <span class=\"chem\">x = (e^y - 2)^2 + 1 => e^y = 2 - sqrt(x - 1)</span>（<span class=\"chem\">e^y &lt;= 2</span> より負の符号）となるため、<span class=\"chem\">f^{-1}(x) = ln(2 - sqrt(x - 1))</span> となります。</p>",
      // EN: <p>(a) <span class="chem">a = ln 2</span>; (b) <span class="chem">f^{-1}(x) = ln(2 - sqrt(x - 1))</span> with domain <span class="chem">1 &lt;= x &lt; 5</span>.</p>
      answer: "<p>(a) <span class=\"chem\">a = ln 2</span>；(b) <span class=\"chem\">f^{-1}(x) = ln(2 - sqrt(x - 1))</span>、定義域は <span class=\"chem\">1 &lt;= x &lt; 5</span>。</p>",
      markscheme: [
        // EN: M1: Rewrites f(x) as a quadratic in u = e^x and completes the square: f(x) = (e^x − 2)^2 + 1.
        "M1：f(x) を u = e^x の 2 次式とみて平方完成する：f(x) = (e^x − 2)^2 + 1。",
        // EN: A1: Identifies the turning point at e^x = 2, so a = ln 2.
        "A1：極小点が e^x = 2 であることを特定し、a = ln 2 を求める。",
        // EN: R1: Explains or shows that for x ≤ ln 2, 0 < e^x ≤ 2, where u ↦ (u − 2)^2 + 1 is strictly decreasing (one-to-one).
        "R1：x ≤ ln 2 のとき 0 < e^x ≤ 2 となり、u ↦ (u − 2)^2 + 1 が狭義単調減少（1 対 1）であることを説明または示す。",
        // EN: M1: Swaps x and y in y = (e^x − 2)^2 + 1 to write (e^y − 2)^2 = x − 1 ⇒ e^y = 2 ± √(x − 1).
        "M1：y = (e^x − 2)^2 + 1 の x と y を入れ替えて (e^y − 2)^2 = x − 1 ⇒ e^y = 2 ± √(x − 1) と書く。",
        // EN: R1: Selects the minus sign e^y = 2 − √(x − 1) because y ≤ ln 2 means e^y ≤ 2.
        "R1：y ≤ ln 2 より e^y ≤ 2 であるため、負の符号 e^y = 2 − √(x − 1) を選ぶ。",
        // EN: A1: Takes natural log to obtain f⁻¹(x) = ln(2 − √(x − 1)).
        "A1：自然対数をとって f⁻¹(x) = ln(2 − √(x − 1)) を得る。",
        // EN: A1: States the exact domain of f⁻¹ (= range of f for x ≤ ln 2) as 1 ≤ x < 5 (noting that as x → −∞, e^x → 0⁺ so f(x) → 5⁻).
        "A1：f⁻¹ の正確な定義域（x ≤ ln 2 における f の値域）を 1 ≤ x < 5 と述べる（x → −∞ のとき e^x → 0⁺ より f(x) → 5⁻ となること）。",
      ],
    },

    // ── t2-1-q019 · short · exam · SL · SL 2.3 · 4 marks
    "t2-1-q019": {
      // EN: <p>Let <span class="chem">f(x) = e^x - x^2</span> for <span class="chem">-2 &lt;= x &lt;= 3</span>.<br>(a) Use your GDC to sketch the graph of <span class="chem">y = f(x)</span> on this domain, labelling the coordinates of any axis intercepts and of the end points. <strong>[3 marks]</strong><br>(b) Hence write down the number of solutions of <span class="chem">e^x = x^2</span> for <span class="chem">-2 &lt;= x &lt;= 3</span>. <strong>[1 mark]</strong></p>
      stem: "<p><span class=\"chem\">-2 &lt;= x &lt;= 3</span> に対して <span class=\"chem\">f(x) = e^x - x^2</span> とする。<br>(a) GDC を用いて、この定義域での <span class=\"chem\">y = f(x)</span> のグラフの概形をかき (Sketch)、座標軸との交点と端点の座標を書き入れなさい。<strong>[3 marks]</strong><br>(b) これを用いて (Hence)、<span class=\"chem\">-2 &lt;= x &lt;= 3</span> における方程式 <span class=\"chem\">e^x = x^2</span> の解の個数を書きなさい (Write down)。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Enter <span class="chem">Y_1 = e^x - x^2</span> (or <span class="chem">Y_1 = e^x</span>, <span class="chem">Y_2 = x^2</span> and <span class="chem">Y_3 = Y_1 - Y_2</span>) and set the window to <span class="chem">-2 &lt;= x &lt;= 3</span>.
        "<span class=\"chem\">Y_1 = e^x - x^2</span>（または <span class=\"chem\">Y_1 = e^x</span>、<span class=\"chem\">Y_2 = x^2</span>、<span class=\"chem\">Y_3 = Y_1 - Y_2</span>）を入力し、表示範囲を <span class=\"chem\">-2 &lt;= x &lt;= 3</span> にします。",
        // EN: Use the zero tool for the <span class="chem">x</span>-intercept and evaluate <span class="chem">f(-2)</span>, <span class="chem">f(0)</span> and <span class="chem">f(3)</span>. Solutions of <span class="chem">e^x = x^2</span> are the zeros of <span class="chem">f</span>.
        "zero 機能で <span class=\"chem\">x</span> 切片を求め、<span class=\"chem\">f(-2)</span>、<span class=\"chem\">f(0)</span>、<span class=\"chem\">f(3)</span> を計算します。<span class=\"chem\">e^x = x^2</span> の解は <span class=\"chem\">f</span> の零点です。",
      ],
      // EN: <p>(a) On the GDC, <span class="chem">y = e^x - x^2</span> rises from <span class="chem">f(-2) = e^{-2} - 4 ≈ -3.86</span> to <span class="chem">f(3) = e^3 - 9 ≈ 11.1</span> with no turning points (it bends but never levels off). The zero tool gives the <span class="chem">x</span>-intercept <span class="chem">(-0.703, 0)</span>, and <span class="chem">f(0) = 1</span> gives the <span class="chem">y</span>-intercept <span class="chem">(0, 1)</span>. A sketch shows this shape and labels these four points; it does not need to be to scale. Do not extend the curve beyond <span class="chem">x = -2</span> or <span class="chem">x = 3</span>.<br>(b) The solutions of <span class="chem">e^x = x^2</span> are the zeros of <span class="chem">f</span>. The graph crosses the <span class="chem">x</span>-axis once, so there is <strong>one</strong> solution (<span class="chem">x ≈ -0.703</span>).</p>
      solution: "<p>(a) GDC で見ると、<span class=\"chem\">y = e^x - x^2</span> は <span class=\"chem\">f(-2) = e^{-2} - 4 ≈ -3.86</span> から <span class=\"chem\">f(3) = e^3 - 9 ≈ 11.1</span> まで増加し、極値をもちません（曲がり方は変わりますが、水平にはなりません）。zero 機能で <span class=\"chem\">x</span> 切片 <span class=\"chem\">(-0.703, 0)</span> が得られ、<span class=\"chem\">f(0) = 1</span> から <span class=\"chem\">y</span> 切片は <span class=\"chem\">(0, 1)</span> です。概形ではこの形とこれら 4 点を示せばよく、縮尺を正確にする必要はありません。曲線を <span class=\"chem\">x = -2</span> や <span class=\"chem\">x = 3</span> の外までかかないようにしましょう。<br>(b) <span class=\"chem\">e^x = x^2</span> の解は <span class=\"chem\">f</span> の零点です。グラフは <span class=\"chem\">x</span> 軸と 1 回だけ交わるので、解は <strong>1 個</strong>（<span class=\"chem\">x ≈ -0.703</span>）です。</p>",
      // EN: <p>(a) An increasing curve with no turning points from <span class="chem">(-2, -3.86)</span> to <span class="chem">(3, 11.1)</span>, crossing the <span class="chem">x</span>-axis at <span class="chem">(-0.703, 0)</span> and the <span class="chem">y</span>-axis at <span class="chem">(0, 1)</span>; (b) one solution.</p>
      answer: "<p>(a) <span class=\"chem\">(-2, -3.86)</span> から <span class=\"chem\">(3, 11.1)</span> まで、極値をもたない増加する曲線で、<span class=\"chem\">x</span> 軸と <span class=\"chem\">(-0.703, 0)</span>、<span class=\"chem\">y</span> 軸と <span class=\"chem\">(0, 1)</span> で交わる；(b) 解は 1 個。</p>",
      markscheme: [
        // EN: A1: Correct shape: increasing throughout −2 ≤ x ≤ 3 with no turning points, drawn only on the given domain.
        "A1：形が正しい：−2 ≤ x ≤ 3 で常に増加し、極値（転回点）をもたず、与えられた定義域だけにかかれている。",
        // EN: A1: Axis intercepts labelled (−0.703, 0) and (0, 1).
        "A1：座標軸との交点 (−0.703, 0) と (0, 1) が書き入れてある。",
        // EN: A1: End points labelled (−2, −3.86) and (3, 11.1).
        "A1：端点 (−2, −3.86) と (3, 11.1) が書き入れてある。",
        // EN: A1: One solution (the graph crosses y = 0 once, at x ≈ −0.703).
        "A1：解は 1 個（グラフは x ≈ −0.703 で y = 0 と 1 回だけ交わる）。",
      ],
    },

  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ja', 't2-1.q', {
  questions: {

    // ── t2-1-q020 · numeric · foundation · SL · SL 2.1 · 3 marks
    "t2-1-q020": {
      // EN: <p>A straight line passes through the points <span class="chem">P(-3, 7)</span> and <span class="chem">Q(5, -5)</span>. Find the exact <span class="chem">y</span>-intercept of the line.</p>
      stem: "<p>直線が 2 点 <span class=\"chem\">P(-3, 7)</span> と <span class=\"chem\">Q(5, -5)</span> を通る。この直線の <span class=\"chem\">y</span> 切片の厳密値（正確な値）を求めなさい (Find)。</p>",
      hints: [
        // EN: Find the gradient first: <span class="chem">m = (y_2 - y_1)/(x_2 - x_1)</span>.
        "まず傾きを求めます：<span class=\"chem\">m = (y_2 - y_1)/(x_2 - x_1)</span>。",
        // EN: With <span class="chem">m = -3/2</span>, write <span class="chem">y - 7 = -(3/2)(x + 3)</span> and put <span class="chem">x = 0</span>.
        "<span class=\"chem\">m = -3/2</span> を用いて <span class=\"chem\">y - 7 = -(3/2)(x + 3)</span> と書き、<span class=\"chem\">x = 0</span> を代入します。",
      ],
      // EN: <p>Gradient <span class="chem">m = (-5 - 7)/(5 - (-3)) = -12/8 = -3/2</span>. Point-gradient form through <span class="chem">P</span>: <span class="chem">y - 7 = -(3/2)(x + 3)</span>. At <span class="chem">x = 0</span>: <span class="chem">y = 7 - 9/2 = 5/2</span>. The <span class="chem">y</span>-intercept is <span class="chem">5/2</span>. Check with <span class="chem">Q</span>: <span class="chem">-(3/2)(5) + 5/2 = -5</span>.</p>
      solution: "<p>傾きは <span class=\"chem\">m = (-5 - 7)/(5 - (-3)) = -12/8 = -3/2</span> です。<span class=\"chem\">P</span> を通る点・傾き形は <span class=\"chem\">y - 7 = -(3/2)(x + 3)</span> です。<span class=\"chem\">x = 0</span> のとき <span class=\"chem\">y = 7 - 9/2 = 5/2</span> となります。<span class=\"chem\">y</span> 切片は <span class=\"chem\">5/2</span> です。<span class=\"chem\">Q</span> で確かめると <span class=\"chem\">-(3/2)(5) + 5/2 = -5</span> です。</p>",
    },

    // ── t2-1-q021 · numeric · foundation · SL · SL 2.2 · 3 marks
    "t2-1-q021": {
      // EN: <p>The function <span class="chem">f</span> is defined by <span class="chem">f(x) = (2x - 1)/(x + 3)</span> for <span class="chem">x != -3</span>. Find the value of <span class="chem">f^{-1}(3)</span>.</p>
      stem: "<p>関数 <span class=\"chem\">f</span> が <span class=\"chem\">x != -3</span> に対して <span class=\"chem\">f(x) = (2x - 1)/(x + 3)</span> で定義されている。<span class=\"chem\">f^{-1}(3)</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: You do not need a formula for <span class="chem">f^{-1}</span>. If <span class="chem">f^{-1}(3) = a</span>, then <span class="chem">f(a) = 3</span>.
        "<span class=\"chem\">f^{-1}</span> の式は必要ありません。<span class=\"chem\">f^{-1}(3) = a</span> ならば <span class=\"chem\">f(a) = 3</span> です。",
        // EN: Solve <span class="chem">(2a - 1)/(a + 3) = 3</span> by multiplying both sides by <span class="chem">a + 3</span>.
        "<span class=\"chem\">(2a - 1)/(a + 3) = 3</span> の両辺に <span class=\"chem\">a + 3</span> を掛けて解きます。",
      ],
      // EN: <p>Let <span class="chem">f^{-1}(3) = a</span>, so <span class="chem">f(a) = 3</span>: <span class="chem">2a - 1 = 3(a + 3) = 3a + 9</span>, so <span class="chem">a = -10</span>. Check: <span class="chem">f(-10) = (-21)/(-7) = 3</span>. So <span class="chem">f^{-1}(3) = -10</span>.</p>
      solution: "<p><span class=\"chem\">f^{-1}(3) = a</span> とおくと <span class=\"chem\">f(a) = 3</span> なので、<span class=\"chem\">2a - 1 = 3(a + 3) = 3a + 9</span> より <span class=\"chem\">a = -10</span> です。確認：<span class=\"chem\">f(-10) = (-21)/(-7) = 3</span>。よって <span class=\"chem\">f^{-1}(3) = -10</span> です。</p>",
    },

    // ── t2-1-q022 · numeric · foundation · SL · SL 2.5 · 3 marks
    "t2-1-q022": {
      // EN: <p>Let <span class="chem">f(x) = 5 - 2x</span> for <span class="chem">x ∈ ℝ</span>. Solve the equation <span class="chem">(f ∘ f)(x) = 7</span>.</p>
      stem: "<p><span class=\"chem\">x ∈ ℝ</span> に対して <span class=\"chem\">f(x) = 5 - 2x</span> とする。方程式 <span class=\"chem\">(f ∘ f)(x) = 7</span> を解きなさい (Solve)。</p>",
      hints: [
        // EN: <span class="chem">(f ∘ f)(x) = f(f(x))</span>: replace every <span class="chem">x</span> in <span class="chem">5 - 2x</span> by <span class="chem">(5 - 2x)</span>.
        "<span class=\"chem\">(f ∘ f)(x) = f(f(x))</span> です。<span class=\"chem\">5 - 2x</span> のすべての <span class=\"chem\">x</span> を <span class=\"chem\">(5 - 2x)</span> で置き換えます。",
        // EN: You should get <span class="chem">(f ∘ f)(x) = 4x - 5</span>. Now set it equal to <span class="chem">7</span>.
        "<span class=\"chem\">(f ∘ f)(x) = 4x - 5</span> となるはずです。これを <span class=\"chem\">7</span> とおきます。",
      ],
      // EN: <p><span class="chem">(f ∘ f)(x) = 5 - 2(5 - 2x) = 5 - 10 + 4x = 4x - 5</span>. Then <span class="chem">4x - 5 = 7 => x = 3</span>. Check: <span class="chem">f(3) = -1</span> and <span class="chem">f(-1) = 7</span>.</p>
      solution: "<p><span class=\"chem\">(f ∘ f)(x) = 5 - 2(5 - 2x) = 5 - 10 + 4x = 4x - 5</span> です。よって <span class=\"chem\">4x - 5 = 7 => x = 3</span> となります。確認：<span class=\"chem\">f(3) = -1</span>、<span class=\"chem\">f(-1) = 7</span>。</p>",
    },

    // ── t2-1-q023 · short · exam · SL · SL 2.1 · 5 marks
    "t2-1-q023": {
      // EN: <p>The line <span class="chem">L_1</span> has equation <span class="chem">kx + 3y = 6</span> and the line <span class="chem">L_2</span> has equation <span class="chem">y = (2k - 1)x + 4</span>, where <span class="chem">k</span> is a constant.<br>(a) Find the value of <span class="chem">k</span> for which <span class="chem">L_1</span> and <span class="chem">L_2</span> are parallel. <strong>[2 marks]</strong><br>(b) Find the possible values of <span class="chem">k</span> for which <span class="chem">L_1</span> and <span class="chem">L_2</span> are perpendicular. <strong>[3 marks]</strong></p>
      stem: "<p>直線 <span class=\"chem\">L_1</span> の方程式は <span class=\"chem\">kx + 3y = 6</span>、直線 <span class=\"chem\">L_2</span> の方程式は <span class=\"chem\">y = (2k - 1)x + 4</span> である。ただし <span class=\"chem\">k</span> は定数である。<br>(a) <span class=\"chem\">L_1</span> と <span class=\"chem\">L_2</span> が平行になる <span class=\"chem\">k</span> の値を求めなさい (Find)。 <strong>[2 marks]</strong><br>(b) <span class=\"chem\">L_1</span> と <span class=\"chem\">L_2</span> が垂直になる <span class=\"chem\">k</span> の値をすべて求めなさい。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Write <span class="chem">L_1</span> in the form <span class="chem">y = mx + c</span> so you can read off its gradient in terms of <span class="chem">k</span>.
        "<span class=\"chem\">L_1</span> を <span class=\"chem\">y = mx + c</span> の形に直すと、傾きを <span class=\"chem\">k</span> で表して読み取れます。",
        // EN: Parallel: equal gradients. Perpendicular: gradients multiply to <span class="chem">-1</span>, which gives a quadratic in <span class="chem">k</span>.
        "平行：傾きが等しい。垂直：傾きの積が <span class=\"chem\">-1</span> で、これは <span class=\"chem\">k</span> の 2 次方程式になります。",
      ],
      // EN: <p>(a) <span class="chem">L_1</span>: <span class="chem">y = -(k/3)x + 2</span>, gradient <span class="chem">-k/3</span>. <span class="chem">L_2</span> has gradient <span class="chem">2k - 1</span>. Parallel: <span class="chem">-k/3 = 2k - 1 => -k = 6k - 3 => k = 3/7</span>.<br>(b) Perpendicular: <span class="chem">(-k/3)(2k - 1) = -1 => k(2k - 1) = 3 => 2k^2 - k - 3 = 0 => (2k - 3)(k + 1) = 0</span>, so <span class="chem">k = 3/2</span> or <span class="chem">k = -1</span>. Check <span class="chem">k = -1</span>: gradients <span class="chem">1/3</span> and <span class="chem">-3</span>, product <span class="chem">-1</span>.</p>
      solution: "<p>(a) <span class=\"chem\">L_1</span>：<span class=\"chem\">y = -(k/3)x + 2</span> より傾きは <span class=\"chem\">-k/3</span> です。<span class=\"chem\">L_2</span> の傾きは <span class=\"chem\">2k - 1</span> です。平行なので <span class=\"chem\">-k/3 = 2k - 1 => -k = 6k - 3 => k = 3/7</span> です。<br>(b) 垂直なので <span class=\"chem\">(-k/3)(2k - 1) = -1 => k(2k - 1) = 3 => 2k^2 - k - 3 = 0 => (2k - 3)(k + 1) = 0</span> となり、<span class=\"chem\">k = 3/2</span> または <span class=\"chem\">k = -1</span> です。<span class=\"chem\">k = -1</span> を確かめると、傾きは <span class=\"chem\">1/3</span> と <span class=\"chem\">-3</span> で、積は <span class=\"chem\">-1</span> です。</p>",
      // EN: <p>(a) <span class="chem">k = 3/7</span>; (b) <span class="chem">k = 3/2</span> or <span class="chem">k = -1</span>.</p>
      answer: "<p>(a) <span class=\"chem\">k = 3/7</span>；(b) <span class=\"chem\">k = 3/2</span> または <span class=\"chem\">k = -1</span>。</p>",
      markscheme: [
        // EN: M1: Rearranges L₁ to y = −(k/3)x + 2, so its gradient is −k/3, and sets −k/3 = 2k − 1.
        "M1：L₁ を y = −(k/3)x + 2 と変形し、傾きが −k/3 であることから −k/3 = 2k − 1 とおく。",
        // EN: A1: k = 3/7.
        "A1：k = 3/7。",
        // EN: M1: Uses the product of gradients: (−k/3)(2k − 1) = −1.
        "M1：傾きの積を用いる：(−k/3)(2k − 1) = −1。",
        // EN: A1: Obtains the quadratic 2k² − k − 3 = 0 (or equivalent).
        "A1：2 次方程式 2k² − k − 3 = 0（または同値な式）を得る。",
        // EN: A1: Solves (2k − 3)(k + 1) = 0 to get k = 3/2 or k = −1.
        "A1：(2k − 3)(k + 1) = 0 を解いて k = 3/2 または k = −1 を得る。",
      ],
    },

    // ── t2-1-q024 · numeric · exam · SL · SL 2.1 · 5 marks
    "t2-1-q024": {
      // EN: <p>The line <span class="chem">L</span> passes through <span class="chem">A(2, 5)</span> and is parallel to the line <span class="chem">4x - 3y = 12</span>. The line <span class="chem">L</span> meets the <span class="chem">x</span>-axis at <span class="chem">P</span> and the <span class="chem">y</span>-axis at <span class="chem">Q</span>. Find the exact area of triangle <span class="chem">OPQ</span>, where <span class="chem">O</span> is the origin.</p>
      stem: "<p>直線 <span class=\"chem\">L</span> は <span class=\"chem\">A(2, 5)</span> を通り、直線 <span class=\"chem\">4x - 3y = 12</span> に平行である。直線 <span class=\"chem\">L</span> は <span class=\"chem\">x</span> 軸と <span class=\"chem\">P</span> で、<span class=\"chem\">y</span> 軸と <span class=\"chem\">Q</span> で交わる。<span class=\"chem\">O</span> を原点とするとき、三角形 <span class=\"chem\">OPQ</span> の面積の厳密値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: a parallel line keeps the same <span class="chem">x</span> and <span class="chem">y</span> coefficients, so <span class="chem">L</span> is <span class="chem">4x - 3y = c</span>. The triangle is right-angled at <span class="chem">O</span>, with legs equal to the distances from <span class="chem">O</span> to the two intercepts.
        "解読：平行な直線は <span class=\"chem\">x</span> と <span class=\"chem\">y</span> の係数が同じなので、<span class=\"chem\">L</span> は <span class=\"chem\">4x - 3y = c</span> です。三角形は <span class=\"chem\">O</span> で直角になり、直角をはさむ 2 辺は <span class=\"chem\">O</span> から 2 つの切片までの距離に等しくなります。",
        // EN: Substitute <span class="chem">A(2, 5)</span> to find <span class="chem">c</span>, then put <span class="chem">y = 0</span> and <span class="chem">x = 0</span> in turn.
        "<span class=\"chem\">A(2, 5)</span> を代入して <span class=\"chem\">c</span> を求め、次に <span class=\"chem\">y = 0</span> と <span class=\"chem\">x = 0</span> を順に代入します。",
        // EN: Area <span class="chem">= (1/2) × |OP| × |OQ|</span>. Lengths are positive even when an intercept is negative.
        "面積 <span class=\"chem\">= (1/2) × |OP| × |OQ|</span>。切片が負の値でも、長さは正です。",
      ],
      // EN: <p><span class="chem">L</span>: <span class="chem">4x - 3y = c</span> with <span class="chem">4(2) - 3(5) = -7</span>, so <span class="chem">4x - 3y = -7</span>. At <span class="chem">y = 0</span>: <span class="chem">x = -7/4</span>, so <span class="chem">P(-7/4, 0)</span>. At <span class="chem">x = 0</span>: <span class="chem">y = 7/3</span>, so <span class="chem">Q(0, 7/3)</span>. Area <span class="chem">= (1/2)(7/4)(7/3) = 49/24</span>.</p>
      solution: "<p><span class=\"chem\">L</span>：<span class=\"chem\">4x - 3y = c</span> で <span class=\"chem\">4(2) - 3(5) = -7</span> なので、<span class=\"chem\">4x - 3y = -7</span> です。<span class=\"chem\">y = 0</span> のとき <span class=\"chem\">x = -7/4</span> なので <span class=\"chem\">P(-7/4, 0)</span>、<span class=\"chem\">x = 0</span> のとき <span class=\"chem\">y = 7/3</span> なので <span class=\"chem\">Q(0, 7/3)</span> です。面積 <span class=\"chem\">= (1/2)(7/4)(7/3) = 49/24</span> です。</p>",
    },

    // ── t2-1-q025 · short · exam · SL · SL 2.2, 2.5 · 8 marks
    "t2-1-q025": {
      // EN: <p>Let <span class="chem">h(x) = sqrt(x + 5) - 2</span>.<br>(a) Write down the largest possible domain of <span class="chem">h</span>. <strong>[1 mark]</strong><br>(b) Write down the range of <span class="chem">h</span> for this domain. <strong>[1 mark]</strong><br>(c) Find <span class="chem">h^{-1}(x)</span>, stating its domain. <strong>[3 marks]</strong><br>(d) Solve the equation <span class="chem">h(x) = h^{-1}(x)</span>, giving your answer in exact form. <strong>[3 marks]</strong></p>
      stem: "<p><span class=\"chem\">h(x) = sqrt(x + 5) - 2</span> とする。<br>(a) <span class=\"chem\">h</span> の最大の定義域を書きなさい (Write down)。 <strong>[1 mark]</strong><br>(b) この定義域における <span class=\"chem\">h</span> の値域を書きなさい。 <strong>[1 mark]</strong><br>(c) <span class=\"chem\">h^{-1}(x)</span> を求め (Find)、その定義域を述べなさい (State)。 <strong>[3 marks]</strong><br>(d) 方程式 <span class=\"chem\">h(x) = h^{-1}(x)</span> を解き (Solve)、答えを厳密な形で表しなさい。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: The square root needs <span class="chem">x + 5 &gt;= 0</span>, and its smallest output is <span class="chem">0</span>.
        "平方根には <span class=\"chem\">x + 5 &gt;= 0</span> が必要で、その最小の出力は <span class=\"chem\">0</span> です。",
        // EN: For (c), swap <span class="chem">x</span> and <span class="chem">y</span> and square. The domain of <span class="chem">h^{-1}</span> is the range of <span class="chem">h</span>.
        "(c) では <span class=\"chem\">x</span> と <span class=\"chem\">y</span> を入れ替えて 2 乗します。<span class=\"chem\">h^{-1}</span> の定義域は <span class=\"chem\">h</span> の値域です。",
        // EN: For (d), <span class="chem">h</span> is increasing, so <span class="chem">h</span> and <span class="chem">h^{-1}</span> can only meet on <span class="chem">y = x</span>. Solve <span class="chem">h^{-1}(x) = x</span> and check which root lies in the domain <span class="chem">x &gt;= -2</span>.
        "(d) では、<span class=\"chem\">h</span> は増加関数なので、<span class=\"chem\">h</span> と <span class=\"chem\">h^{-1}</span> は <span class=\"chem\">y = x</span> 上でしか交わりません。<span class=\"chem\">h^{-1}(x) = x</span> を解き、どの解が定義域 <span class=\"chem\">x &gt;= -2</span> に入るか確かめます。",
      ],
      // EN: <p>(a) <span class="chem">x + 5 &gt;= 0 => x &gt;= -5</span>.<br>(b) <span class="chem">sqrt(x + 5) &gt;= 0</span>, so <span class="chem">h(x) &gt;= -2</span>.<br>(c) <span class="chem">x = sqrt(y + 5) - 2 => (x + 2)^2 = y + 5 => h^{-1}(x) = (x + 2)^2 - 5</span>, with domain <span class="chem">x &gt;= -2</span> (the range of <span class="chem">h</span>).<br>(d) <span class="chem">h</span> is increasing, so intersections of <span class="chem">y = h(x)</span> and <span class="chem">y = h^{-1}(x)</span> lie on <span class="chem">y = x</span>. Solve <span class="chem">(x + 2)^2 - 5 = x => x^2 + 3x - 1 = 0 => x = (-3 +- sqrt(13))/2</span>. Since <span class="chem">(-3 - sqrt(13))/2 ≈ -3.30 &lt; -2</span>, reject it. So <span class="chem">x = (-3 + sqrt(13))/2</span>.</p>
      solution: "<p>(a) <span class=\"chem\">x + 5 &gt;= 0 => x &gt;= -5</span>。<br>(b) <span class=\"chem\">sqrt(x + 5) &gt;= 0</span> なので <span class=\"chem\">h(x) &gt;= -2</span> です。<br>(c) <span class=\"chem\">x = sqrt(y + 5) - 2 => (x + 2)^2 = y + 5 => h^{-1}(x) = (x + 2)^2 - 5</span> で、定義域は <span class=\"chem\">x &gt;= -2</span>（<span class=\"chem\">h</span> の値域）です。<br>(d) <span class=\"chem\">h</span> は増加関数なので、<span class=\"chem\">y = h(x)</span> と <span class=\"chem\">y = h^{-1}(x)</span> の交点は <span class=\"chem\">y = x</span> 上にあります。<span class=\"chem\">(x + 2)^2 - 5 = x => x^2 + 3x - 1 = 0 => x = (-3 +- sqrt(13))/2</span> を解きます。<span class=\"chem\">(-3 - sqrt(13))/2 ≈ -3.30 &lt; -2</span> なので、こちらは不適です。よって <span class=\"chem\">x = (-3 + sqrt(13))/2</span> です。</p>",
      // EN: <p>(a) <span class="chem">x &gt;= -5</span>; (b) <span class="chem">h(x) &gt;= -2</span>; (c) <span class="chem">h^{-1}(x) = (x + 2)^2 - 5</span> for <span class="chem">x &gt;= -2</span>; (d) <span class="chem">x = (-3 + sqrt(13))/2</span>.</p>
      answer: "<p>(a) <span class=\"chem\">x &gt;= -5</span>；(b) <span class=\"chem\">h(x) &gt;= -2</span>；(c) <span class=\"chem\">h^{-1}(x) = (x + 2)^2 - 5</span>（<span class=\"chem\">x &gt;= -2</span>）；(d) <span class=\"chem\">x = (-3 + sqrt(13))/2</span>。</p>",
      markscheme: [
        // EN: A1: Domain x ≥ −5.
        "A1：定義域 x ≥ −5。",
        // EN: A1: Range h(x) ≥ −2.
        "A1：値域 h(x) ≥ −2。",
        // EN: M1: Swaps x and y: x = √(y + 5) − 2 (or makes x the subject first).
        "M1：x と y を入れ替える：x = √(y + 5) − 2（または先に x について解く）。",
        // EN: A1: h⁻¹(x) = (x + 2)² − 5.
        "A1：h⁻¹(x) = (x + 2)² − 5。",
        // EN: A1: Domain of h⁻¹ is x ≥ −2 (the range of h).
        "A1：h⁻¹ の定義域は x ≥ −2（h の値域）。",
        // EN: M1: Uses that h is increasing, so the graphs meet on y = x: √(x + 5) − 2 = x, or (x + 2)² − 5 = x with x ≥ −2.
        "M1：h が増加関数なので 2 つのグラフが y = x 上で交わることを用いる：√(x + 5) − 2 = x、または x ≥ −2 で (x + 2)² − 5 = x。",
        // EN: A1: Obtains x² + 3x − 1 = 0.
        "A1：x² + 3x − 1 = 0 を得る。",
        // EN: A1: x = (−3 + √13)/2 only, rejecting (−3 − √13)/2 because it is less than −2.
        "A1：x = (−3 + √13)/2 のみ。(−3 − √13)/2 は −2 より小さいので不適とする。",
      ],
    },

    // ── t2-1-q026 · short · exam · SL · SL 2.5 · 4 marks
    "t2-1-q026": {
      // EN: <p>Let <span class="chem">f(x) = 2x + 3</span> and <span class="chem">g(x) = x^2</span>, for <span class="chem">x ∈ ℝ</span>. Solve the equation <span class="chem">(f ∘ g)(x) = (g ∘ f)(x)</span>, giving your answers in the form <span class="chem">p +- sqrt(q)</span>, where <span class="chem">p, q ∈ ℤ</span>.</p>
      stem: "<p><span class=\"chem\">x ∈ ℝ</span> に対して <span class=\"chem\">f(x) = 2x + 3</span>、<span class=\"chem\">g(x) = x^2</span> とする。方程式 <span class=\"chem\">(f ∘ g)(x) = (g ∘ f)(x)</span> を解き (Solve)、答えを <span class=\"chem\">p +- sqrt(q)</span>（ただし <span class=\"chem\">p, q ∈ ℤ</span>）の形で表しなさい。</p>",
      hints: [
        // EN: The order matters: <span class="chem">(f ∘ g)(x) = f(g(x))</span> means "do <span class="chem">g</span> first".
        "順序が大切です：<span class=\"chem\">(f ∘ g)(x) = f(g(x))</span> は「先に <span class=\"chem\">g</span>」という意味です。",
        // EN: Expand <span class="chem">(2x + 3)^2</span>, collect terms, then complete the square or use the quadratic formula.
        "<span class=\"chem\">(2x + 3)^2</span> を展開して整理し、平方完成するか解の公式を使います。",
      ],
      // EN: <p><span class="chem">(f ∘ g)(x) = f(x^2) = 2x^2 + 3</span> and <span class="chem">(g ∘ f)(x) = (2x + 3)^2 = 4x^2 + 12x + 9</span>. Equating: <span class="chem">2x^2 + 12x + 6 = 0 => x^2 + 6x + 3 = 0 => (x + 3)^2 = 6 => x = -3 +- sqrt(6)</span>.</p>
      solution: "<p><span class=\"chem\">(f ∘ g)(x) = f(x^2) = 2x^2 + 3</span>、<span class=\"chem\">(g ∘ f)(x) = (2x + 3)^2 = 4x^2 + 12x + 9</span> です。等しいとおくと <span class=\"chem\">2x^2 + 12x + 6 = 0 => x^2 + 6x + 3 = 0 => (x + 3)^2 = 6 => x = -3 +- sqrt(6)</span> となります。</p>",
      // EN: <p><span class="chem">x = -3 +- sqrt(6)</span></p>
      answer: "<p><span class=\"chem\">x = -3 +- sqrt(6)</span></p>",
      markscheme: [
        // EN: A1: (f ∘ g)(x) = 2x² + 3.
        "A1：(f ∘ g)(x) = 2x² + 3。",
        // EN: A1: (g ∘ f)(x) = (2x + 3)² = 4x² + 12x + 9.
        "A1：(g ∘ f)(x) = (2x + 3)² = 4x² + 12x + 9。",
        // EN: M1: Equates and simplifies to x² + 6x + 3 = 0 (or 2x² + 12x + 6 = 0).
        "M1：等しいとおいて x² + 6x + 3 = 0（または 2x² + 12x + 6 = 0）に整理する。",
        // EN: A1: x = −3 ± √6.
        "A1：x = −3 ± √6。",
      ],
    },

    // ── t2-1-q027 · numeric · exam · SL · SL 2.5 · 4 marks
    "t2-1-q027": {
      // EN: <p>The functions <span class="chem">f</span> and <span class="chem">g</span> are defined for <span class="chem">x ∈ ℝ</span>. You are given that <span class="chem">f(x) = 2x + 1</span> and <span class="chem">(f ∘ g)(x) = 6x - 7</span>. Find the value of <span class="chem">g(4)</span>.</p>
      stem: "<p>関数 <span class=\"chem\">f</span> と <span class=\"chem\">g</span> は <span class=\"chem\">x ∈ ℝ</span> で定義されている。<span class=\"chem\">f(x) = 2x + 1</span>、<span class=\"chem\">(f ∘ g)(x) = 6x - 7</span> が与えられている。<span class=\"chem\">g(4)</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: you know the outer function and the result of the composite, so you must undo the outer function to find the inner one. <span class="chem">(f ∘ g)(x) = f(g(x)) = 2g(x) + 1</span>.
        "解読：外側の関数と合成関数の結果がわかっているので、外側の関数を「元に戻して」内側の関数を求めます。<span class=\"chem\">(f ∘ g)(x) = f(g(x)) = 2g(x) + 1</span> です。",
        // EN: Set <span class="chem">2g(x) + 1 = 6x - 7</span> and make <span class="chem">g(x)</span> the subject.
        "<span class=\"chem\">2g(x) + 1 = 6x - 7</span> とおき、<span class=\"chem\">g(x)</span> について解きます。",
        // EN: Or work with numbers only: <span class="chem">f(g(4)) = 6(4) - 7 = 17</span>, so <span class="chem">g(4) = f^{-1}(17)</span>.
        "または数値だけで考えます：<span class=\"chem\">f(g(4)) = 6(4) - 7 = 17</span> なので、<span class=\"chem\">g(4) = f^{-1}(17)</span> です。",
      ],
      // EN: <p>Decode: <span class="chem">g</span> is the inner function. <span class="chem">f(g(x)) = 2g(x) + 1 = 6x - 7</span>, so <span class="chem">g(x) = 3x - 4</span> and <span class="chem">g(4) = 8</span>. (Check: <span class="chem">f(8) = 17 = 6(4) - 7</span>.)</p>
      solution: "<p>解読：<span class=\"chem\">g</span> は内側の関数です。<span class=\"chem\">f(g(x)) = 2g(x) + 1 = 6x - 7</span> より <span class=\"chem\">g(x) = 3x - 4</span>、よって <span class=\"chem\">g(4) = 8</span> です。（確認：<span class=\"chem\">f(8) = 17 = 6(4) - 7</span>。）</p>",
    },

    // ── t2-1-q028 · short · exam · SL · SL 2.2, 2.5 · 6 marks
    "t2-1-q028": {
      // EN: <p>The function <span class="chem">f</span> is defined by <span class="chem">f(x) = 5 - e^{2x}</span> for <span class="chem">x ∈ ℝ</span>.<br>(a) Write down the range of <span class="chem">f</span>. <strong>[1 mark]</strong><br>(b) Find an expression for <span class="chem">f^{-1}(x)</span>. <strong>[3 marks]</strong><br>(c) Write down the domain of <span class="chem">f^{-1}</span>. <strong>[1 mark]</strong><br>(d) Write down the value of <span class="chem">x</span> for which <span class="chem">f^{-1}(x) = 0</span>. <strong>[1 mark]</strong></p>
      stem: "<p>関数 <span class=\"chem\">f</span> が <span class=\"chem\">x ∈ ℝ</span> に対して <span class=\"chem\">f(x) = 5 - e^{2x}</span> で定義されている。<br>(a) <span class=\"chem\">f</span> の値域を書きなさい (Write down)。 <strong>[1 mark]</strong><br>(b) <span class=\"chem\">f^{-1}(x)</span> の式を求めなさい (Find)。 <strong>[3 marks]</strong><br>(c) <span class=\"chem\">f^{-1}</span> の定義域を書きなさい。 <strong>[1 mark]</strong><br>(d) <span class=\"chem\">f^{-1}(x) = 0</span> となる <span class=\"chem\">x</span> の値を書きなさい。 <strong>[1 mark]</strong></p>",
      hints: [
        // EN: <span class="chem">e^{2x}</span> takes every positive value but never <span class="chem">0</span>. What does that do to <span class="chem">5 - e^{2x}</span>?
        "<span class=\"chem\">e^{2x}</span> はすべての正の値をとりますが、<span class=\"chem\">0</span> にはなりません。それは <span class=\"chem\">5 - e^{2x}</span> にどう影響しますか？",
        // EN: For (b), isolate the exponential, then take <span class="chem">ln</span> of both sides (you need the logarithm laws from topic 1.2).
        "(b) では、指数の部分を分離してから両辺の <span class=\"chem\">ln</span> をとります（topic 1.2 の対数法則が必要です）。",
        // EN: For (d), you do not need the formula: <span class="chem">f^{-1}(x) = 0</span> means <span class="chem">x = f(0)</span>.
        "(d) では式は必要ありません：<span class=\"chem\">f^{-1}(x) = 0</span> は <span class=\"chem\">x = f(0)</span> を意味します。",
      ],
      // EN: <p>(a) <span class="chem">e^{2x} &gt; 0</span> for all <span class="chem">x</span>, so <span class="chem">f(x) &lt; 5</span>.<br>(b) <span class="chem">x = 5 - e^{2y} => e^{2y} = 5 - x => 2y = ln(5 - x) => f^{-1}(x) = (1/2) ln(5 - x)</span>.<br>(c) Domain of <span class="chem">f^{-1}</span> = range of <span class="chem">f</span>: <span class="chem">x &lt; 5</span>.<br>(d) <span class="chem">f^{-1}(x) = 0 => x = f(0) = 5 - 1 = 4</span>.</p>
      solution: "<p>(a) すべての <span class=\"chem\">x</span> で <span class=\"chem\">e^{2x} &gt; 0</span> なので、<span class=\"chem\">f(x) &lt; 5</span> です。<br>(b) <span class=\"chem\">x = 5 - e^{2y} => e^{2y} = 5 - x => 2y = ln(5 - x) => f^{-1}(x) = (1/2) ln(5 - x)</span>。<br>(c) <span class=\"chem\">f^{-1}</span> の定義域 = <span class=\"chem\">f</span> の値域：<span class=\"chem\">x &lt; 5</span>。<br>(d) <span class=\"chem\">f^{-1}(x) = 0 => x = f(0) = 5 - 1 = 4</span>。</p>",
      // EN: <p>(a) <span class="chem">f(x) &lt; 5</span>; (b) <span class="chem">f^{-1}(x) = (1/2) ln(5 - x)</span>; (c) <span class="chem">x &lt; 5</span>; (d) <span class="chem">x = 4</span>.</p>
      answer: "<p>(a) <span class=\"chem\">f(x) &lt; 5</span>；(b) <span class=\"chem\">f^{-1}(x) = (1/2) ln(5 - x)</span>；(c) <span class=\"chem\">x &lt; 5</span>；(d) <span class=\"chem\">x = 4</span>。</p>",
      markscheme: [
        // EN: A1: Range f(x) < 5 (since e^{2x} > 0).
        "A1：値域 f(x) < 5（e^{2x} > 0 だから）。",
        // EN: M1: Swaps x and y: x = 5 − e^{2y}, so e^{2y} = 5 − x.
        "M1：x と y を入れ替える：x = 5 − e^{2y}、よって e^{2y} = 5 − x。",
        // EN: M1: Takes natural logarithms: 2y = ln(5 − x).
        "M1：自然対数をとる：2y = ln(5 − x)。",
        // EN: A1: f⁻¹(x) = (1/2) ln(5 − x).
        "A1：f⁻¹(x) = (1/2) ln(5 − x)。",
        // EN: A1: Domain of f⁻¹ is x < 5.
        "A1：f⁻¹ の定義域は x < 5。",
        // EN: A1: x = 4 (because f⁻¹(x) = 0 exactly when x = f(0) = 4).
        "A1：x = 4（f⁻¹(x) = 0 となるのは x = f(0) = 4 のときに限るから）。",
      ],
    },

    // ── t2-1-q029 · numeric · exam · SL · SL 2.4 · 3 marks
    "t2-1-q029": {
      // EN: <p>The graph of <span class="chem">y = x^2 + bx + c</span> has axis of symmetry <span class="chem">x = 3</span> and passes through the point <span class="chem">(1, 0)</span>. The graph has a second zero at <span class="chem">x = q</span>. Find the value of <span class="chem">q</span>.</p>
      stem: "<p><span class=\"chem\">y = x^2 + bx + c</span> のグラフは軸（対称軸）が <span class=\"chem\">x = 3</span> で、点 <span class=\"chem\">(1, 0)</span> を通る。このグラフのもう 1 つの零点は <span class=\"chem\">x = q</span> である。<span class=\"chem\">q</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: The zeros of a parabola are placed symmetrically about its axis of symmetry.
        "放物線の零点は、軸に関して対称な位置にあります。",
        // EN: <span class="chem">x = 1</span> is <span class="chem">2</span> units to the left of <span class="chem">x = 3</span>. Where is the point <span class="chem">2</span> units to the right?
        "<span class=\"chem\">x = 1</span> は <span class=\"chem\">x = 3</span> の <span class=\"chem\">2</span> だけ左にあります。<span class=\"chem\">2</span> だけ右にある点はどこですか？",
      ],
      // EN: <p>By symmetry about <span class="chem">x = 3</span>, the zeros are equally far from <span class="chem">3</span>: <span class="chem">(1 + q)/2 = 3 => q = 5</span>. (Algebraic check: <span class="chem">-b/2 = 3 => b = -6</span>; <span class="chem">1 - 6 + c = 0 => c = 5</span>; <span class="chem">x^2 - 6x + 5 = (x - 1)(x - 5)</span>.)</p>
      solution: "<p><span class=\"chem\">x = 3</span> に関する対称性より、2 つの零点は <span class=\"chem\">3</span> から等距離にあります：<span class=\"chem\">(1 + q)/2 = 3 => q = 5</span>。（代数的な確認：<span class=\"chem\">-b/2 = 3 => b = -6</span>、<span class=\"chem\">1 - 6 + c = 0 => c = 5</span>、<span class=\"chem\">x^2 - 6x + 5 = (x - 1)(x - 5)</span>。）</p>",
    },

    // ── t2-1-q030 · short · exam · AHL · AHL 2.14 · 5 marks
    "t2-1-q030": {
      // EN: <p>Let <span class="chem">f(x) = x^3/(x^2 + 4)</span> for <span class="chem">x ∈ ℝ</span>.<br>(a) Show that <span class="chem">f</span> is an odd function. <strong>[2 marks]</strong><br>The function <span class="chem">g</span> is even, with <span class="chem">g(3) = 7</span>. Let <span class="chem">h(x) = f(x) g(x)</span>.<br>(b) Determine whether <span class="chem">h</span> is odd, even or neither. Justify your answer. <strong>[2 marks]</strong><br>(c) Find the exact value of <span class="chem">h(-3)</span>. <strong>[1 mark]</strong></p>
      stem: "<p><span class=\"chem\">x ∈ ℝ</span> に対して <span class=\"chem\">f(x) = x^3/(x^2 + 4)</span> とする。<br>(a) <span class=\"chem\">f</span> が奇関数であることを示しなさい (Show that)。 <strong>[2 marks]</strong><br>関数 <span class=\"chem\">g</span> は偶関数で、<span class=\"chem\">g(3) = 7</span> である。<span class=\"chem\">h(x) = f(x) g(x)</span> とする。<br>(b) <span class=\"chem\">h</span> が奇関数か、偶関数か、どちらでもないかを決定し (Determine)、理由を示しなさい (Justify)。 <strong>[2 marks]</strong><br>(c) <span class=\"chem\">h(-3)</span> の厳密値を求めなさい (Find)。 <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Odd means <span class="chem">f(-x) = -f(x)</span> for every <span class="chem">x</span>; even means <span class="chem">g(-x) = g(x)</span>.
        "奇関数とはすべての <span class=\"chem\">x</span> で <span class=\"chem\">f(-x) = -f(x)</span> となること、偶関数とは <span class=\"chem\">g(-x) = g(x)</span> となることです。",
        // EN: For (b), substitute <span class="chem">-x</span> into <span class="chem">h</span> and use the two facts. For (c), use <span class="chem">h(-3) = f(-3) g(-3)</span>.
        "(b) では <span class=\"chem\">h</span> に <span class=\"chem\">-x</span> を代入し、2 つの性質を使います。(c) では <span class=\"chem\">h(-3) = f(-3) g(-3)</span> を使います。",
      ],
      // EN: <p>(a) <span class="chem">f(-x) = (-x)^3/((-x)^2 + 4) = -x^3/(x^2 + 4) = -f(x)</span> for all <span class="chem">x</span>, so <span class="chem">f</span> is odd.<br>(b) <span class="chem">h(-x) = f(-x) g(-x) = (-f(x))(g(x)) = -h(x)</span>, so <span class="chem">h</span> is odd (odd × even = odd).<br>(c) <span class="chem">f(-3) = -27/13</span> and <span class="chem">g(-3) = g(3) = 7</span>, so <span class="chem">h(-3) = -189/13</span>.</p>
      solution: "<p>(a) すべての <span class=\"chem\">x</span> で <span class=\"chem\">f(-x) = (-x)^3/((-x)^2 + 4) = -x^3/(x^2 + 4) = -f(x)</span> なので、<span class=\"chem\">f</span> は奇関数です。<br>(b) <span class=\"chem\">h(-x) = f(-x) g(-x) = (-f(x))(g(x)) = -h(x)</span> なので、<span class=\"chem\">h</span> は奇関数です（奇 × 偶 = 奇）。<br>(c) <span class=\"chem\">f(-3) = -27/13</span>、<span class=\"chem\">g(-3) = g(3) = 7</span> なので、<span class=\"chem\">h(-3) = -189/13</span> です。</p>",
      // EN: <p>(a) <span class="chem">f(-x) = -x^3/(x^2 + 4) = -f(x)</span>; (b) <span class="chem">h</span> is odd, since <span class="chem">h(-x) = f(-x) g(-x) = -f(x) g(x) = -h(x)</span>; (c) <span class="chem">h(-3) = -189/13</span>.</p>
      answer: "<p>(a) <span class=\"chem\">f(-x) = -x^3/(x^2 + 4) = -f(x)</span>；(b) <span class=\"chem\">h(-x) = f(-x) g(-x) = -f(x) g(x) = -h(x)</span> より <span class=\"chem\">h</span> は奇関数；(c) <span class=\"chem\">h(-3) = -189/13</span>。</p>",
      markscheme: [
        // EN: M1: Substitutes −x: f(−x) = (−x)³/((−x)² + 4).
        "M1：−x を代入する：f(−x) = (−x)³/((−x)² + 4)。",
        // EN: A1: Simplifies to −x³/(x² + 4) = −f(x), so f is odd.
        "A1：−x³/(x² + 4) = −f(x) と整理し、f は奇関数であるとする。",
        // EN: M1: Writes h(−x) = f(−x) g(−x) = (−f(x)) g(x).
        "M1：h(−x) = f(−x) g(−x) = (−f(x)) g(x) と書く。",
        // EN: A1: Concludes h(−x) = −h(x), so h is odd.
        "A1：h(−x) = −h(x) より h は奇関数であると結論する。",
        // EN: A1: h(−3) = −h(3) = −(27/13)(7) = −189/13.
        "A1：h(−3) = −h(3) = −(27/13)(7) = −189/13。",
      ],
    },

    // ── t2-1-q031 · numeric · challenge · AHL · AHL 2.14 · 5 marks
    "t2-1-q031": {
      // EN: <p>The function <span class="chem">f(x) = (2x + b)/(x + c)</span>, <span class="chem">x != -c</span>, is its own inverse. The graph of <span class="chem">y = f(x)</span> passes through the point <span class="chem">(1, 4)</span>. Find the value of <span class="chem">b</span>.</p>
      stem: "<p>関数 <span class=\"chem\">f(x) = (2x + b)/(x + c)</span>（<span class=\"chem\">x != -c</span>）は自分自身の逆関数である。<span class=\"chem\">y = f(x)</span> のグラフは点 <span class=\"chem\">(1, 4)</span> を通る。<span class=\"chem\">b</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: "its own inverse" means <span class="chem">f</span> is self-inverse, so its graph is symmetric about <span class="chem">y = x</span>. For this rational function the vertical asymptote <span class="chem">x = -c</span> must be the reflection of the horizontal asymptote <span class="chem">y = 2</span>.
        "解読：「自分自身の逆関数」とは <span class=\"chem\">f</span> が自己逆関数であること、つまりグラフが <span class=\"chem\">y = x</span> に関して対称であることを意味します。この分数関数では、鉛直漸近線 <span class=\"chem\">x = -c</span> が水平漸近線 <span class=\"chem\">y = 2</span> の対称移動でなければなりません。",
        // EN: So <span class="chem">-c = 2</span>. Then use the point <span class="chem">(1, 4)</span> to find <span class="chem">b</span>.
        "よって <span class=\"chem\">-c = 2</span> です。次に点 <span class=\"chem\">(1, 4)</span> を使って <span class=\"chem\">b</span> を求めます。",
        // EN: Make sure the function is not a constant: check that <span class="chem">2c - b != 0</span>.
        "関数が定数関数にならないことを確かめましょう：<span class=\"chem\">2c - b != 0</span> を確認します。",
      ],
      // EN: <p>Decode: self-inverse means <span class="chem">f^{-1} = f</span>, so the graph is symmetric in <span class="chem">y = x</span>. The horizontal asymptote is <span class="chem">y = 2</span>, so the vertical asymptote must be <span class="chem">x = 2</span>: <span class="chem">-c = 2 => c = -2</span>. (Algebraically: <span class="chem">x = (2y + b)/(y + c) => y = (b - cx)/(x - 2)</span>, which equals <span class="chem">(2x + b)/(x + c)</span> only when <span class="chem">c = -2</span>.) Then <span class="chem">f(1) = (2 + b)/(1 - 2) = -(2 + b) = 4 => b = -6</span>. Check: <span class="chem">f(x) = (2x - 6)/(x - 2)</span> is not constant, since <span class="chem">2(-2) - (-6) = 2 != 0</span>.</p>
      solution: "<p>解読：自己逆関数とは <span class=\"chem\">f^{-1} = f</span> のことなので、グラフは <span class=\"chem\">y = x</span> に関して対称です。水平漸近線は <span class=\"chem\">y = 2</span> なので、鉛直漸近線は <span class=\"chem\">x = 2</span> でなければなりません：<span class=\"chem\">-c = 2 => c = -2</span>。（代数的には：<span class=\"chem\">x = (2y + b)/(y + c) => y = (b - cx)/(x - 2)</span> で、これが <span class=\"chem\">(2x + b)/(x + c)</span> に等しくなるのは <span class=\"chem\">c = -2</span> のときに限ります。）次に <span class=\"chem\">f(1) = (2 + b)/(1 - 2) = -(2 + b) = 4 => b = -6</span> です。確認：<span class=\"chem\">2(-2) - (-6) = 2 != 0</span> なので、<span class=\"chem\">f(x) = (2x - 6)/(x - 2)</span> は定数関数ではありません。</p>",
    },

    // ── t2-1-q032 · numeric · challenge · SL · SL 2.5 · 5 marks
    "t2-1-q032": {
      // EN: <p>Let <span class="chem">f(x) = 2x - 3</span>. A calculator key applies <span class="chem">f</span> to whatever number is on the screen. The number <span class="chem">4</span> is entered and the key is pressed <span class="chem">n</span> times, so the screen shows <span class="chem">(f ∘ f ∘ … ∘ f)(4)</span> with <span class="chem">n</span> copies of <span class="chem">f</span>. Find the least number of presses for which the screen shows a number greater than <span class="chem">1000</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = 2x - 3</span> とする。ある電卓のキーは、画面に表示されている数に <span class=\"chem\">f</span> を施す。数 <span class=\"chem\">4</span> を入力してこのキーを <span class=\"chem\">n</span> 回押すと、画面には <span class=\"chem\">f</span> を <span class=\"chem\">n</span> 個並べた <span class=\"chem\">(f ∘ f ∘ … ∘ f)(4)</span> が表示される。画面に <span class=\"chem\">1000</span> より大きい数が表示されるための、キーを押す最小の回数を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: this is repeated composition. Work out the first few outputs, spot the pattern, and write the result after <span class="chem">n</span> presses as a formula in <span class="chem">n</span>. The answer must be a positive integer.
        "解読：これは合成の繰り返しです。最初のいくつかの出力を計算し、規則性を見つけて、<span class=\"chem\">n</span> 回押した後の結果を <span class=\"chem\">n</span> の式で表します。答えは正の整数でなければなりません。",
        // EN: The outputs are <span class="chem">5, 7, 11, 19, …</span>. Subtract <span class="chem">3</span> from each.
        "出力は <span class=\"chem\">5, 7, 11, 19, …</span> です。それぞれから <span class=\"chem\">3</span> を引いてみましょう。",
        // EN: After <span class="chem">n</span> presses the screen shows <span class="chem">2^n + 3</span>. Solve <span class="chem">2^n + 3 &gt; 1000</span> using powers of <span class="chem">2</span>.
        "<span class=\"chem\">n</span> 回押した後の画面は <span class=\"chem\">2^n + 3</span> です。<span class=\"chem\">2</span> の累乗を使って <span class=\"chem\">2^n + 3 &gt; 1000</span> を解きます。",
      ],
      // EN: <p>Decode: "press the key <span class="chem">n</span> times" is the <span class="chem">n</span>-fold composite of <span class="chem">f</span>. Outputs: <span class="chem">f(4) = 5</span>, <span class="chem">f(5) = 7</span>, <span class="chem">f(7) = 11</span>, <span class="chem">f(11) = 19</span>, which are <span class="chem">2^n + 3</span>. This continues because if <span class="chem">x = 2^n + 3</span>, then <span class="chem">f(x) = 2^{n+1} + 6 - 3 = 2^{n+1} + 3</span>. We need <span class="chem">2^n + 3 &gt; 1000 => 2^n &gt; 997</span>. Since <span class="chem">2^9 = 512</span> and <span class="chem">2^{10} = 1024</span>, the least number of presses is <span class="chem">n = 10</span> (screen shows <span class="chem">1027</span>).</p>
      solution: "<p>解読：「キーを <span class=\"chem\">n</span> 回押す」は <span class=\"chem\">f</span> の <span class=\"chem\">n</span> 回の合成です。出力は <span class=\"chem\">f(4) = 5</span>、<span class=\"chem\">f(5) = 7</span>、<span class=\"chem\">f(7) = 11</span>、<span class=\"chem\">f(11) = 19</span> で、これらは <span class=\"chem\">2^n + 3</span> です。<span class=\"chem\">x = 2^n + 3</span> ならば <span class=\"chem\">f(x) = 2^{n+1} + 6 - 3 = 2^{n+1} + 3</span> となるので、この規則は続きます。<span class=\"chem\">2^n + 3 &gt; 1000 => 2^n &gt; 997</span> が必要です。<span class=\"chem\">2^9 = 512</span>、<span class=\"chem\">2^{10} = 1024</span> なので、最小の回数は <span class=\"chem\">n = 10</span> です（画面には <span class=\"chem\">1027</span> が表示されます）。</p>",
    },

    // ── t2-1-q033 · short · challenge · SL · SL 2.2, 2.5 · 7 marks
    "t2-1-q033": {
      // EN: <p>A currency exchange office first takes a fixed fee of <span class="chem">5</span> dollars from the amount handed in, then changes the rest into euros at <span class="chem">0.9</span> euros per dollar. So <span class="chem">d</span> dollars become <span class="chem">E(d) = 0.9(d - 5)</span> euros, for <span class="chem">d &gt; 5</span>. A second office changes <span class="chem">e</span> euros into <span class="chem">Y(e) = 160e - 200</span> yen.<br>(a) A traveller changes <span class="chem">d</span> dollars into euros at the first office, then changes all the euros into yen at the second office. Find, in the form <span class="chem">pd + q</span>, an expression for the number of yen received. <strong>[2 marks]</strong><br>(b) The traveller needs exactly <span class="chem">14 200</span> yen. Find the number of dollars that must be handed in. <strong>[3 marks]</strong><br>(c) Only whole numbers of dollars can be handed in. Find the least number of dollars for which the traveller receives a positive amount of yen. <strong>[2 marks]</strong></p>
      stem: "<p>ある両替所では、受け取った金額からまず <span class=\"chem\">5</span> ドルの固定手数料をとり、残りを 1 ドルあたり <span class=\"chem\">0.9</span> ユーロでユーロに両替する。したがって <span class=\"chem\">d</span> ドルは <span class=\"chem\">E(d) = 0.9(d - 5)</span> ユーロになる（<span class=\"chem\">d &gt; 5</span>）。別の両替所では <span class=\"chem\">e</span> ユーロを <span class=\"chem\">Y(e) = 160e - 200</span> 円に両替する。<br>(a) ある旅行者が最初の両替所で <span class=\"chem\">d</span> ドルをユーロに両替し、次に 2 つ目の両替所でそのユーロをすべて円に両替する。受け取る円の額を表す式を <span class=\"chem\">pd + q</span> の形で求めなさい (Find)。 <strong>[2 marks]</strong><br>(b) 旅行者はちょうど <span class=\"chem\">14 200</span> 円を必要としている。渡さなければならないドルの額を求めなさい。 <strong>[3 marks]</strong><br>(c) 渡せるのは整数のドルだけである。旅行者が正の額の円を受け取るための最小のドルの額を求めなさい。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: dollars go into the first office, and its output goes into the second. That is a composite with <span class="chem">E</span> applied first, so you want <span class="chem">(Y ∘ E)(d)</span>, not <span class="chem">(E ∘ Y)(d)</span>.
        "解読：ドルは最初の両替所に入り、その出力が 2 つ目の両替所に入ります。これは <span class=\"chem\">E</span> を先に施す合成関数なので、求めるのは <span class=\"chem\">(E ∘ Y)(d)</span> ではなく <span class=\"chem\">(Y ∘ E)(d)</span> です。",
        // EN: For (b), you know the output and want the input, so you are using the inverse of the composite. Solve <span class="chem">(Y ∘ E)(d) = 14 200</span>.
        "(b) では、出力がわかっていて入力を求めるので、合成関数の逆関数を使っていることになります。<span class=\"chem\">(Y ∘ E)(d) = 14 200</span> を解きます。",
        // EN: For (c), "a positive amount" gives an inequality, and "whole numbers" means round <strong>up</strong> to the next integer.
        "(c) では、「正の額」から不等式が得られ、「整数のドル」は次の整数に<strong>切り上げる</strong>ことを意味します。",
      ],
      // EN: <p>Decode: two machines in a row form a composite, and the inner (first) function is <span class="chem">E</span>.<br>(a) <span class="chem">(Y ∘ E)(d) = 160(0.9(d - 5)) - 200 = 144(d - 5) - 200 = 144d - 920</span>.<br>(b) <span class="chem">144d - 920 = 14 200 => 144d = 15 120 => d = 105</span> dollars.<br>(c) <span class="chem">144d - 920 &gt; 0 => d &gt; 920/144 ≈ 6.39</span>. The least whole number of dollars is <span class="chem">7</span> (check: <span class="chem">144(6) - 920 = -56 &lt; 0</span> and <span class="chem">144(7) - 920 = 88 &gt; 0</span>).</p>
      solution: "<p>解読：2 つの機械を続けて通すと合成関数になり、内側（先に施す）関数は <span class=\"chem\">E</span> です。<br>(a) <span class=\"chem\">(Y ∘ E)(d) = 160(0.9(d - 5)) - 200 = 144(d - 5) - 200 = 144d - 920</span>。<br>(b) <span class=\"chem\">144d - 920 = 14 200 => 144d = 15 120 => d = 105</span> ドルです。<br>(c) <span class=\"chem\">144d - 920 &gt; 0 => d &gt; 920/144 ≈ 6.39</span>。最小の整数のドルは <span class=\"chem\">7</span> です（確認：<span class=\"chem\">144(6) - 920 = -56 &lt; 0</span>、<span class=\"chem\">144(7) - 920 = 88 &gt; 0</span>）。</p>",
      // EN: <p>(a) <span class="chem">(Y ∘ E)(d) = 144d - 920</span>; (b) <span class="chem">105</span> dollars; (c) <span class="chem">7</span> dollars.</p>
      answer: "<p>(a) <span class=\"chem\">(Y ∘ E)(d) = 144d - 920</span>；(b) <span class=\"chem\">105</span> ドル；(c) <span class=\"chem\">7</span> ドル。</p>",
      markscheme: [
        // EN: M1: Recognises the composite (Y ∘ E)(d) = Y(0.9(d − 5)) = 160 × 0.9(d − 5) − 200.
        "M1：合成関数 (Y ∘ E)(d) = Y(0.9(d − 5)) = 160 × 0.9(d − 5) − 200 であると認識する。",
        // EN: A1: (Y ∘ E)(d) = 144d − 920.
        "A1：(Y ∘ E)(d) = 144d − 920。",
        // EN: M1: Recognises that the answer is (Y ∘ E)⁻¹(14 200), i.e. sets 144d − 920 = 14 200.
        "M1：答えが (Y ∘ E)⁻¹(14 200) であると認識し、144d − 920 = 14 200 とおく。",
        // EN: A1: 144d = 15 120.
        "A1：144d = 15 120。",
        // EN: A1: d = 105 dollars.
        "A1：d = 105 ドル。",
        // EN: M1: Sets 144d − 920 > 0, so d > 920/144 = 6.39 (3 s.f.).
        "M1：144d − 920 > 0 とおき、d > 920/144 = 6.39（有効数字 3 桁）を得る。",
        // EN: A1: Least whole number of dollars is 7.
        "A1：最小の整数のドルは 7。",
      ],
    },

    // ── t2-1-q034 · short · challenge · AHL · AHL 2.14 · 7 marks
    "t2-1-q034": {
      // EN: <p>Let <span class="chem">f(x) = x^4 - 8x^2</span> for <span class="chem">x &gt;= a</span>.<br>(a) By writing <span class="chem">f(x)</span> in the form <span class="chem">(x^2 - p)^2 - q</span>, find the smallest value of <span class="chem">a</span> for which <span class="chem">f^{-1}</span> exists. <strong>[3 marks]</strong><br>(b) For this value of <span class="chem">a</span>, find an expression for <span class="chem">f^{-1}(x)</span> and state its domain. <strong>[3 marks]</strong><br>(c) Write down the value of <span class="chem">x</span> for which <span class="chem">f^{-1}(x) = 3</span>. <strong>[1 mark]</strong></p>
      stem: "<p><span class=\"chem\">x &gt;= a</span> に対して <span class=\"chem\">f(x) = x^4 - 8x^2</span> とする。<br>(a) <span class=\"chem\">f(x)</span> を <span class=\"chem\">(x^2 - p)^2 - q</span> の形に表すことにより、<span class=\"chem\">f^{-1}</span> が存在するような <span class=\"chem\">a</span> の最小値を求めなさい (Find)。 <strong>[3 marks]</strong><br>(b) この <span class=\"chem\">a</span> の値に対して、<span class=\"chem\">f^{-1}(x)</span> の式を求め、その定義域を述べなさい (State)。 <strong>[3 marks]</strong><br>(c) <span class=\"chem\">f^{-1}(x) = 3</span> となる <span class=\"chem\">x</span> の値を書きなさい (Write down)。 <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: an inverse exists only if <span class="chem">f</span> is one-to-one. Treat <span class="chem">x^2</span> as the variable and complete the square to see where <span class="chem">f</span> turns.
        "解読：逆関数が存在するのは <span class=\"chem\">f</span> が 1 対 1 のときだけです。<span class=\"chem\">x^2</span> を変数とみて平方完成し、<span class=\"chem\">f</span> がどこで向きを変えるかを調べます。",
        // EN: <span class="chem">x^4 - 8x^2 = (x^2 - 4)^2 - 16</span>. As <span class="chem">x</span> increases from <span class="chem">0</span>, <span class="chem">x^2 - 4</span> is negative until <span class="chem">x = 2</span>, then positive.
        "<span class=\"chem\">x^4 - 8x^2 = (x^2 - 4)^2 - 16</span> です。<span class=\"chem\">x</span> が <span class=\"chem\">0</span> から増加するとき、<span class=\"chem\">x^2 - 4</span> は <span class=\"chem\">x = 2</span> までは負で、その後は正です。",
        // EN: For (b), you will take two square roots. Use the restriction <span class="chem">y &gt;= 2</span> to choose each sign.
        "(b) では平方根を 2 回とります。制限 <span class=\"chem\">y &gt;= 2</span> を使ってそれぞれの符号を選びます。",
        // EN: For (c), <span class="chem">f^{-1}(x) = 3</span> means <span class="chem">x = f(3)</span>.
        "(c) では、<span class=\"chem\">f^{-1}(x) = 3</span> は <span class=\"chem\">x = f(3)</span> を意味します。",
      ],
      // EN: <p>Decode: "smallest <span class="chem">a</span> for which <span class="chem">f^{-1}</span> exists" asks for the largest interval of the form <span class="chem">x &gt;= a</span> on which <span class="chem">f</span> is one-to-one.<br>(a) <span class="chem">f(x) = (x^2 - 4)^2 - 16</span>. The minimum <span class="chem">-16</span> is at <span class="chem">x = 2</span> (for <span class="chem">x &gt;= 0</span>). On <span class="chem">0 &lt;= x &lt;= 2</span> the value <span class="chem">(x^2 - 4)^2</span> decreases, and for <span class="chem">x &gt;= 2</span> it increases. So <span class="chem">f</span> is one-to-one on <span class="chem">x &gt;= a</span> exactly when <span class="chem">a &gt;= 2</span>, and the smallest value is <span class="chem">a = 2</span>.<br>(b) <span class="chem">x = (y^2 - 4)^2 - 16 => y^2 - 4 = sqrt(x + 16)</span> (positive, since <span class="chem">y &gt;= 2</span>) <span class="chem">=> y = sqrt(4 + sqrt(x + 16))</span> (positive root). So <span class="chem">f^{-1}(x) = sqrt(4 + sqrt(x + 16))</span>, with domain <span class="chem">x &gt;= -16</span>.<br>(c) <span class="chem">x = f(3) = 81 - 72 = 9</span>.</p>
      solution: "<p>解読：「<span class=\"chem\">f^{-1}</span> が存在するような最小の <span class=\"chem\">a</span>」とは、<span class=\"chem\">f</span> が 1 対 1 になる <span class=\"chem\">x &gt;= a</span> の形の最大の区間を求めることです。<br>(a) <span class=\"chem\">f(x) = (x^2 - 4)^2 - 16</span>。最小値 <span class=\"chem\">-16</span> は（<span class=\"chem\">x &gt;= 0</span> では）<span class=\"chem\">x = 2</span> でとります。<span class=\"chem\">0 &lt;= x &lt;= 2</span> では <span class=\"chem\">(x^2 - 4)^2</span> の値は減少し、<span class=\"chem\">x &gt;= 2</span> では増加します。よって <span class=\"chem\">f</span> が <span class=\"chem\">x &gt;= a</span> で 1 対 1 になるのは <span class=\"chem\">a &gt;= 2</span> のときに限り、最小値は <span class=\"chem\">a = 2</span> です。<br>(b) <span class=\"chem\">x = (y^2 - 4)^2 - 16 => y^2 - 4 = sqrt(x + 16)</span>（<span class=\"chem\">y &gt;= 2</span> なので正）<span class=\"chem\">=> y = sqrt(4 + sqrt(x + 16))</span>（正の平方根）。よって <span class=\"chem\">f^{-1}(x) = sqrt(4 + sqrt(x + 16))</span> で、定義域は <span class=\"chem\">x &gt;= -16</span> です。<br>(c) <span class=\"chem\">x = f(3) = 81 - 72 = 9</span>。</p>",
      // EN: <p>(a) <span class="chem">f(x) = (x^2 - 4)^2 - 16</span>, so <span class="chem">a = 2</span>; (b) <span class="chem">f^{-1}(x) = sqrt(4 + sqrt(x + 16))</span>, <span class="chem">x &gt;= -16</span>; (c) <span class="chem">x = 9</span>.</p>
      answer: "<p>(a) <span class=\"chem\">f(x) = (x^2 - 4)^2 - 16</span> より <span class=\"chem\">a = 2</span>；(b) <span class=\"chem\">f^{-1}(x) = sqrt(4 + sqrt(x + 16))</span>、<span class=\"chem\">x &gt;= -16</span>；(c) <span class=\"chem\">x = 9</span>。</p>",
      markscheme: [
        // EN: A1: f(x) = (x² − 4)² − 16.
        "A1：f(x) = (x² − 4)² − 16。",
        // EN: R1: The minimum value −16 occurs at x² = 4, i.e. x = ±2; f decreases on 0 ≤ x ≤ 2 and increases for x ≥ 2, so any domain x ≥ a with a < 2 contains two inputs with the same output.
        "R1：最小値 −16 は x² = 4、すなわち x = ±2 でとる。f は 0 ≤ x ≤ 2 で減少し x ≥ 2 で増加するので、a < 2 である定義域 x ≥ a には同じ出力をもつ 2 つの入力が含まれる。",
        // EN: A1: Smallest a = 2.
        "A1：a の最小値は 2。",
        // EN: M1: Swaps x and y and rearranges: (y² − 4)² = x + 16, so y² = 4 ± √(x + 16).
        "M1：x と y を入れ替えて変形する：(y² − 4)² = x + 16、よって y² = 4 ± √(x + 16)。",
        // EN: A1: Chooses positive roots (since y ≥ 2 means y² − 4 ≥ 0): f⁻¹(x) = √(4 + √(x + 16)).
        "A1：正の平方根を選ぶ（y ≥ 2 より y² − 4 ≥ 0）：f⁻¹(x) = √(4 + √(x + 16))。",
        // EN: A1: Domain of f⁻¹ is x ≥ −16 (the range of f).
        "A1：f⁻¹ の定義域は x ≥ −16（f の値域）。",
        // EN: A1: x = f(3) = 81 − 72 = 9.
        "A1：x = f(3) = 81 − 72 = 9。",
      ],
    },

    // ── t2-1-q035 · numeric · exam · SL · SL 2.4 · 3 marks
    "t2-1-q035": {
      // EN: <p>The curves <span class="chem">y = 2^x</span> and <span class="chem">y = x + 3</span> intersect at two points. Find the <span class="chem">x</span>-coordinate of the intersection point that lies in the first quadrant. Give your answer to 3 significant figures.</p>
      stem: "<p>曲線 <span class=\"chem\">y = 2^x</span> と <span class=\"chem\">y = x + 3</span> は 2 点で交わる。第 1 象限にある交点の <span class=\"chem\">x</span> 座標を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Graph <span class="chem">Y_1 = 2^x</span> and <span class="chem">Y_2 = x + 3</span>, then use the intersect tool.
        "<span class=\"chem\">Y_1 = 2^x</span> と <span class=\"chem\">Y_2 = x + 3</span> のグラフを描き、交点 (intersect) 機能を使います。",
        // EN: There is another intersection near <span class="chem">x = -2.86</span>. Choose the one with <span class="chem">x &gt; 0</span>.
        "もう 1 つの交点は <span class=\"chem\">x = -2.86</span> 付近にあります。<span class=\"chem\">x &gt; 0</span> の方を選びます。",
      ],
      // EN: <p>Using the GDC intersect tool on <span class="chem">y = 2^x</span> and <span class="chem">y = x + 3</span>: the intersections are at <span class="chem">x ≈ -2.86</span> and <span class="chem">x ≈ 2.4449</span>. The first-quadrant point has <span class="chem">x ≈ 2.44</span> (3 s.f.), with <span class="chem">y ≈ 5.44</span>. The equation <span class="chem">2^x = x + 3</span> cannot be solved algebraically, so technology is required.</p>
      solution: "<p><span class=\"chem\">y = 2^x</span> と <span class=\"chem\">y = x + 3</span> に GDC の交点機能を使うと、交点は <span class=\"chem\">x ≈ -2.86</span> と <span class=\"chem\">x ≈ 2.4449</span> です。第 1 象限の点は <span class=\"chem\">x ≈ 2.44</span>（有効数字 3 桁）で、<span class=\"chem\">y ≈ 5.44</span> です。方程式 <span class=\"chem\">2^x = x + 3</span> は代数的には解けないので、テクノロジーが必要です。</p>",
    },

    // ── t2-1-q036 · numeric · exam · SL · SL 2.2, 2.4 · 3 marks
    "t2-1-q036": {
      // EN: <p>Let <span class="chem">f(x) = 3 ln x - x + 2</span> for <span class="chem">1 &lt;= x &lt;= 10</span>. Find the least value of <span class="chem">f(x)</span> on this domain. Give your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">1 &lt;= x &lt;= 10</span> に対して <span class=\"chem\">f(x) = 3 ln x - x + 2</span> とする。この定義域における <span class=\"chem\">f(x)</span> の最小値を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Graph <span class="chem">y = 3 ln x - x + 2</span> with the window <span class="chem">1 &lt;= x &lt;= 10</span>. Does the graph have a local minimum on this interval?
        "表示範囲を <span class=\"chem\">1 &lt;= x &lt;= 10</span> として <span class=\"chem\">y = 3 ln x - x + 2</span> のグラフを描きます。この区間でグラフに極小はありますか？",
        // EN: The only turning point is a maximum (at <span class="chem">x = 3</span>). The least value must be at one of the end points. Compare <span class="chem">f(1)</span> and <span class="chem">f(10)</span>.
        "ただ 1 つの転回点は極大（<span class=\"chem\">x = 3</span>）です。最小値はどちらかの端点でとるはずです。<span class=\"chem\">f(1)</span> と <span class=\"chem\">f(10)</span> を比べます。",
      ],
      // EN: <p>On the GDC the graph rises to a maximum at <span class="chem">(3, 2.30)</span>, then falls. There is no local minimum, so the least value is at an end point: <span class="chem">f(1) = 0 - 1 + 2 = 1</span> and <span class="chem">f(10) = 3 ln 10 - 8 ≈ -1.0922</span>. The least value is <span class="chem">-1.09</span> (3 s.f.), so the range is <span class="chem">-1.09 &lt;= f(x) &lt;= 2.30</span>.</p>
      solution: "<p>GDC では、グラフは極大点 <span class=\"chem\">(3, 2.30)</span> まで増加し、その後減少します。極小はないので、最小値は端点でとります：<span class=\"chem\">f(1) = 0 - 1 + 2 = 1</span>、<span class=\"chem\">f(10) = 3 ln 10 - 8 ≈ -1.0922</span>。最小値は <span class=\"chem\">-1.09</span>（有効数字 3 桁）で、値域は <span class=\"chem\">-1.09 &lt;= f(x) &lt;= 2.30</span> です。</p>",
    },

    // ── t2-1-q037 · numeric · exam · SL · SL 2.2 · 3 marks
    "t2-1-q037": {
      // EN: <p>The function <span class="chem">f(x) = x^3 + e^x</span>, <span class="chem">x ∈ ℝ</span>, is increasing, so its inverse <span class="chem">f^{-1}</span> exists. Find <span class="chem">f^{-1}(5)</span>, giving your answer to 3 significant figures.</p>
      stem: "<p>関数 <span class=\"chem\">f(x) = x^3 + e^x</span>（<span class=\"chem\">x ∈ ℝ</span>）は増加関数なので、逆関数 <span class=\"chem\">f^{-1}</span> が存在する。<span class=\"chem\">f^{-1}(5)</span> を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: You cannot write down <span class="chem">f^{-1}(x)</span> as a formula. But <span class="chem">f^{-1}(5) = a</span> means <span class="chem">f(a) = 5</span>.
        "<span class=\"chem\">f^{-1}(x)</span> を式で書き表すことはできません。しかし <span class=\"chem\">f^{-1}(5) = a</span> は <span class=\"chem\">f(a) = 5</span> を意味します。",
        // EN: Graph <span class="chem">Y_1 = x^3 + e^x</span> and <span class="chem">Y_2 = 5</span> and find the intersection.
        "<span class=\"chem\">Y_1 = x^3 + e^x</span> と <span class=\"chem\">Y_2 = 5</span> のグラフを描き、交点を求めます。",
      ],
      // EN: <p>Let <span class="chem">f^{-1}(5) = a</span>, so <span class="chem">a^3 + e^a = 5</span>. The GDC (intersection of <span class="chem">y = x^3 + e^x</span> with <span class="chem">y = 5</span>) gives <span class="chem">a ≈ 1.19367</span>. So <span class="chem">f^{-1}(5) ≈ 1.19</span> (3 s.f.). Check: <span class="chem">1.1937^3 + e^{1.1937} ≈ 1.701 + 3.299 = 5.00</span>.</p>
      solution: "<p><span class=\"chem\">f^{-1}(5) = a</span> とおくと <span class=\"chem\">a^3 + e^a = 5</span> です。GDC（<span class=\"chem\">y = x^3 + e^x</span> と <span class=\"chem\">y = 5</span> の交点）より <span class=\"chem\">a ≈ 1.19367</span> です。よって <span class=\"chem\">f^{-1}(5) ≈ 1.19</span>（有効数字 3 桁）です。確認：<span class=\"chem\">1.1937^3 + e^{1.1937} ≈ 1.701 + 3.299 = 5.00</span>。</p>",
    },

    // ── t2-1-q038 · short · exam · SL · SL 2.3, 2.4 · 7 marks
    "t2-1-q038": {
      // EN: <p>Let <span class="chem">f(x) = ln(x + 1)</span> and <span class="chem">g(x) = 2 - 0.5x</span>. The function <span class="chem">h</span> is defined by <span class="chem">h(x) = f(x) + g(x)</span> for <span class="chem">0 &lt;= x &lt;= 10</span>.<br>(a) Sketch the graph of <span class="chem">y = h(x)</span> on this domain. On your sketch, label the coordinates of the maximum point, the <span class="chem">x</span>-intercept and both end points. <strong>[5 marks]</strong><br>(b) Hence write down the range of <span class="chem">h</span>. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = ln(x + 1)</span>、<span class=\"chem\">g(x) = 2 - 0.5x</span> とする。関数 <span class=\"chem\">h</span> は <span class=\"chem\">0 &lt;= x &lt;= 10</span> に対して <span class=\"chem\">h(x) = f(x) + g(x)</span> で定義される。<br>(a) この定義域で <span class=\"chem\">y = h(x)</span> のグラフの概形を描きなさい (Sketch)。グラフには極大点、<span class=\"chem\">x</span> 軸との交点、両端点の座標を書き入れなさい。 <strong>[5 marks]</strong><br>(b) これを用いて (Hence) <span class=\"chem\">h</span> の値域を書きなさい (write down)。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Enter <span class="chem">Y_1 = ln(x + 1) + 2 - 0.5x</span> with window <span class="chem">0 &lt;= x &lt;= 10</span>. Use the maximum and zero tools.
        "表示範囲を <span class=\"chem\">0 &lt;= x &lt;= 10</span> として <span class=\"chem\">Y_1 = ln(x + 1) + 2 - 0.5x</span> を入力します。最大 (maximum) 機能と零点 (zero) 機能を使います。",
        // EN: A sketch shows the shape and the labelled key points; it does not need to be to scale. Do not extend it beyond the domain.
        "概形は形と主要な点（座標を書き入れる）を示すもので、縮尺どおりである必要はありません。定義域の外までは描きません。",
        // EN: For the range, the least value is at an end point, not at a turning point.
        "値域については、最小値は転回点ではなく端点でとります。",
      ],
      // EN: <p>(a) On the GDC, <span class="chem">h(0) = 2</span>. The maximum tool gives <span class="chem">(1, 2.19)</span> (exactly <span class="chem">(1, 1.5 + ln 2)</span>). The zero tool gives <span class="chem">x ≈ 8.50</span>. At the right end, <span class="chem">h(10) = ln 11 - 3 ≈ -0.602</span>. The sketch rises from <span class="chem">(0, 2)</span> to <span class="chem">(1, 2.19)</span>, then falls through <span class="chem">(8.50, 0)</span> to <span class="chem">(10, -0.602)</span>.<br>(b) The greatest value is <span class="chem">2.19</span> and the least is <span class="chem">h(10) ≈ -0.602</span>, so <span class="chem">-0.602 &lt;= h(x) &lt;= 2.19</span>.</p>
      solution: "<p>(a) GDC では <span class=\"chem\">h(0) = 2</span> です。最大機能で <span class=\"chem\">(1, 2.19)</span>（厳密には <span class=\"chem\">(1, 1.5 + ln 2)</span>）、零点機能で <span class=\"chem\">x ≈ 8.50</span> が得られます。右端では <span class=\"chem\">h(10) = ln 11 - 3 ≈ -0.602</span> です。概形は <span class=\"chem\">(0, 2)</span> から <span class=\"chem\">(1, 2.19)</span> まで増加し、その後 <span class=\"chem\">(8.50, 0)</span> を通って <span class=\"chem\">(10, -0.602)</span> まで減少します。<br>(b) 最大値は <span class=\"chem\">2.19</span>、最小値は <span class=\"chem\">h(10) ≈ -0.602</span> なので、<span class=\"chem\">-0.602 &lt;= h(x) &lt;= 2.19</span> です。</p>",
      // EN: <p>(a) A curve starting at <span class="chem">(0, 2)</span>, rising to a maximum at <span class="chem">(1, 2.19)</span>, then decreasing through the <span class="chem">x</span>-intercept <span class="chem">(8.50, 0)</span> to the end point <span class="chem">(10, -0.602)</span>; (b) <span class="chem">-0.602 &lt;= h(x) &lt;= 2.19</span>.</p>
      answer: "<p>(a) <span class=\"chem\">(0, 2)</span> から始まり、極大点 <span class=\"chem\">(1, 2.19)</span> まで増加し、その後 <span class=\"chem\">x</span> 軸との交点 <span class=\"chem\">(8.50, 0)</span> を通って端点 <span class=\"chem\">(10, -0.602)</span> まで減少する曲線；(b) <span class=\"chem\">-0.602 &lt;= h(x) &lt;= 2.19</span>。</p>",
      markscheme: [
        // EN: A1: Correct shape: rises then falls, drawn only for 0 ≤ x ≤ 10.
        "A1：形が正しい：増加してから減少し、0 ≤ x ≤ 10 だけにかかれている。",
        // EN: A1: Maximum point labelled (1, 2.19).
        "A1：極大点 (1, 2.19) が書き入れてある。",
        // EN: A1: x-intercept labelled (8.50, 0).
        "A1：x 軸との交点 (8.50, 0) が書き入れてある。",
        // EN: A1: Left end point labelled (0, 2).
        "A1：左端点 (0, 2) が書き入れてある。",
        // EN: A1: Right end point labelled (10, −0.602).
        "A1：右端点 (10, −0.602) が書き入れてある。",
        // EN: A1: Lower bound −0.602 (from the end point, not a turning point).
        "A1：下限 −0.602（転回点ではなく端点から）。",
        // EN: A1: Upper bound 2.19, both bounds included: −0.602 ≤ h(x) ≤ 2.19.
        "A1：上限 2.19 で、両端を含む：−0.602 ≤ h(x) ≤ 2.19。",
      ],
    },

    // ── t2-1-q039 · numeric · exam · SL · SL 2.2, 2.5 · 5 marks
    "t2-1-q039": {
      // EN: <p>A factory starts a production run at time <span class="chem">t = 0</span>. After <span class="chem">t</span> hours it has produced <span class="chem">n(t) = 200(1 - e^{-0.3t})</span> items. The total cost, in dollars, of producing <span class="chem">n</span> items is <span class="chem">C(n) = 500 + 4n + 0.01n^2</span>. Find the time, in hours, at which the total cost reaches <span class="chem">1200</span> dollars. Give your answer to 3 significant figures.</p>
      stem: "<p>ある工場が時刻 <span class=\"chem\">t = 0</span> に生産を開始する。<span class=\"chem\">t</span> 時間後までに <span class=\"chem\">n(t) = 200(1 - e^{-0.3t})</span> 個の製品を生産している。<span class=\"chem\">n</span> 個の製品を生産する総費用（ドル）は <span class=\"chem\">C(n) = 500 + 4n + 0.01n^2</span> である。総費用が <span class=\"chem\">1200</span> ドルに達する時刻（時間）を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: cost depends on items, and items depend on time, so cost as a function of time is the composite <span class="chem">(C ∘ n)(t)</span>. You need to solve <span class="chem">C(n(t)) = 1200</span>.
        "解読：費用は製品の個数で決まり、個数は時間で決まるので、時間の関数としての費用は合成関数 <span class=\"chem\">(C ∘ n)(t)</span> です。<span class=\"chem\">C(n(t)) = 1200</span> を解く必要があります。",
        // EN: Either graph <span class="chem">Y_1 = C(n(t))</span> directly and intersect with <span class="chem">Y_2 = 1200</span>, or first solve <span class="chem">C(n) = 1200</span> for <span class="chem">n</span>, then solve <span class="chem">n(t) = n</span>.
        "<span class=\"chem\">Y_1 = C(n(t))</span> のグラフを直接描いて <span class=\"chem\">Y_2 = 1200</span> との交点を求めるか、まず <span class=\"chem\">C(n) = 1200</span> を <span class=\"chem\">n</span> について解き、次に <span class=\"chem\">n(t) = n</span> を解きます。",
        // EN: <span class="chem">C(n) = 1200</span> gives <span class="chem">n ≈ 131.66</span> items (reject the negative root).
        "<span class=\"chem\">C(n) = 1200</span> より <span class=\"chem\">n ≈ 131.66</span> 個です（負の解は不適）。",
      ],
      // EN: <p>Decode: the cost after <span class="chem">t</span> hours is <span class="chem">C(n(t))</span>. Solve <span class="chem">C(n) = 1200</span>: <span class="chem">0.01n^2 + 4n - 700 = 0 => n ≈ 131.662</span> (the other root is negative). Then <span class="chem">200(1 - e^{-0.3t}) = 131.662 => e^{-0.3t} ≈ 0.341688 => t ≈ 3.5795</span>. The cost reaches <span class="chem">1200</span> dollars after about <span class="chem">3.58</span> hours. (Graphing <span class="chem">y = C(n(t))</span> and <span class="chem">y = 1200</span> gives the same value.)</p>
      solution: "<p>解読：<span class=\"chem\">t</span> 時間後の費用は <span class=\"chem\">C(n(t))</span> です。<span class=\"chem\">C(n) = 1200</span> を解くと <span class=\"chem\">0.01n^2 + 4n - 700 = 0 => n ≈ 131.662</span>（もう 1 つの解は負）。次に <span class=\"chem\">200(1 - e^{-0.3t}) = 131.662 => e^{-0.3t} ≈ 0.341688 => t ≈ 3.5795</span> です。費用は約 <span class=\"chem\">3.58</span> 時間後に <span class=\"chem\">1200</span> ドルに達します。（<span class=\"chem\">y = C(n(t))</span> と <span class=\"chem\">y = 1200</span> のグラフを描いても同じ値が得られます。）</p>",
      // EN: hours
      unit: "時間",
    },

    // ── t2-1-q040 · short · exam · SL · SL 2.1, 2.4 · 7 marks
    "t2-1-q040": {
      // EN: <p>The line <span class="chem">L</span> has gradient <span class="chem">-0.5</span> and passes through the point <span class="chem">(1, 2)</span>.<br>(a) Find the equation of <span class="chem">L</span> in the form <span class="chem">y = mx + c</span>. <strong>[2 marks]</strong><br>(b) The line <span class="chem">L</span> meets the curve <span class="chem">y = ln x + 1</span> at the point <span class="chem">P</span>. Find the coordinates of <span class="chem">P</span>. <strong>[2 marks]</strong><br>(c) The line <span class="chem">N</span> passes through <span class="chem">P</span> and is perpendicular to <span class="chem">L</span>. Find the <span class="chem">x</span>-coordinate of the point where <span class="chem">N</span> meets the <span class="chem">x</span>-axis. <strong>[3 marks]</strong></p>
      stem: "<p>直線 <span class=\"chem\">L</span> は傾きが <span class=\"chem\">-0.5</span> で、点 <span class=\"chem\">(1, 2)</span> を通る。<br>(a) <span class=\"chem\">L</span> の方程式を <span class=\"chem\">y = mx + c</span> の形で求めなさい (Find)。 <strong>[2 marks]</strong><br>(b) 直線 <span class=\"chem\">L</span> は曲線 <span class=\"chem\">y = ln x + 1</span> と点 <span class=\"chem\">P</span> で交わる。<span class=\"chem\">P</span> の座標を求めなさい。 <strong>[2 marks]</strong><br>(c) 直線 <span class=\"chem\">N</span> は <span class=\"chem\">P</span> を通り <span class=\"chem\">L</span> に垂直である。<span class=\"chem\">N</span> と <span class=\"chem\">x</span> 軸との交点の <span class=\"chem\">x</span> 座標を求めなさい。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Use point-gradient form <span class="chem">y - y_1 = m(x - x_1)</span>.
        "点・傾き形 <span class=\"chem\">y - y_1 = m(x - x_1)</span> を使います。",
        // EN: For (b), graph both and use the intersect tool. Keep full accuracy for <span class="chem">P</span> in your GDC memory.
        "(b) では、両方のグラフを描いて交点機能を使います。<span class=\"chem\">P</span> は丸めずに GDC のメモリに保存しておきます。",
        // EN: For (c), the perpendicular gradient is <span class="chem">-1/(-0.5) = 2</span>. Then put <span class="chem">y = 0</span>.
        "(c) では、垂直な直線の傾きは <span class=\"chem\">-1/(-0.5) = 2</span> です。そして <span class=\"chem\">y = 0</span> を代入します。",
      ],
      // EN: <p>(a) <span class="chem">y - 2 = -0.5(x - 1) => y = -0.5x + 2.5</span>.<br>(b) GDC: <span class="chem">ln x + 1 = -0.5x + 2.5</span> gives <span class="chem">x ≈ 1.81159</span>, <span class="chem">y ≈ 1.59420</span>, so <span class="chem">P(1.81, 1.59)</span>.<br>(c) <span class="chem">N</span> has gradient <span class="chem">2</span>: <span class="chem">y - 1.59420 = 2(x - 1.81159)</span>. At <span class="chem">y = 0</span>: <span class="chem">x = 1.81159 - 0.79710 = 1.01449</span>, so <span class="chem">x ≈ 1.01</span>.</p>
      solution: "<p>(a) <span class=\"chem\">y - 2 = -0.5(x - 1) => y = -0.5x + 2.5</span>。<br>(b) GDC：<span class=\"chem\">ln x + 1 = -0.5x + 2.5</span> より <span class=\"chem\">x ≈ 1.81159</span>、<span class=\"chem\">y ≈ 1.59420</span> なので <span class=\"chem\">P(1.81, 1.59)</span> です。<br>(c) <span class=\"chem\">N</span> の傾きは <span class=\"chem\">2</span> なので <span class=\"chem\">y - 1.59420 = 2(x - 1.81159)</span> です。<span class=\"chem\">y = 0</span> のとき <span class=\"chem\">x = 1.81159 - 0.79710 = 1.01449</span> なので、<span class=\"chem\">x ≈ 1.01</span> です。</p>",
      // EN: <p>(a) <span class="chem">y = -0.5x + 2.5</span>; (b) <span class="chem">P(1.81, 1.59)</span>; (c) <span class="chem">x = 1.01</span> (3 s.f.).</p>
      answer: "<p>(a) <span class=\"chem\">y = -0.5x + 2.5</span>；(b) <span class=\"chem\">P(1.81, 1.59)</span>；(c) <span class=\"chem\">x = 1.01</span>（有効数字 3 桁）。</p>",
      markscheme: [
        // EN: M1: Substitutes into y − 2 = −0.5(x − 1).
        "M1：y − 2 = −0.5(x − 1) に代入する。",
        // EN: A1: y = −0.5x + 2.5.
        "A1：y = −0.5x + 2.5。",
        // EN: M1: Uses the GDC to solve ln x + 1 = −0.5x + 2.5 (intersection of the two graphs).
        "M1：GDC を使って ln x + 1 = −0.5x + 2.5 を解く（2 つのグラフの交点）。",
        // EN: A1: P(1.81, 1.59).
        "A1：P(1.81, 1.59)。",
        // EN: M1: Uses the perpendicular gradient 2 (from −0.5 × 2 = −1).
        "M1：垂直な直線の傾き 2 を使う（−0.5 × 2 = −1 より）。",
        // EN: A1: Equation of N: y − 1.594 = 2(x − 1.812) (or equivalent).
        "A1：N の方程式：y − 1.594 = 2(x − 1.812)（または同値な式）。",
        // EN: A1: Puts y = 0 to get x = 1.01.
        "A1：y = 0 とおいて x = 1.01 を得る。",
      ],
    },

    // ── t2-1-q041 · numeric · exam · SL · SL 2.4 · 3 marks
    "t2-1-q041": {
      // EN: <p>The graph of <span class="chem">f(x) = x^4 - 4x^2 + x</span> has two local minimum points and one local maximum point. Find the value of <span class="chem">f(x)</span> at the local maximum point. Give your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">f(x) = x^4 - 4x^2 + x</span> のグラフには極小点が 2 つ、極大点が 1 つある。極大点における <span class=\"chem\">f(x)</span> の値を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Graph <span class="chem">y = x^4 - 4x^2 + x</span> with a window such as <span class="chem">-2.5 &lt;= x &lt;= 2.5</span>, <span class="chem">-6 &lt;= y &lt;= 3</span>.
        "<span class=\"chem\">-2.5 &lt;= x &lt;= 2.5</span>、<span class=\"chem\">-6 &lt;= y &lt;= 3</span> などの表示範囲で <span class=\"chem\">y = x^4 - 4x^2 + x</span> のグラフを描きます。",
        // EN: The local maximum is close to the origin, so zoom in. Use the maximum tool and read the <span class="chem">y</span>-coordinate.
        "極大点は原点のすぐ近くにあるので、拡大します。最大機能を使って <span class=\"chem\">y</span> 座標を読み取ります。",
      ],
      // EN: <p>The GDC shows local minima near <span class="chem">(-1.47, -5.44)</span> and <span class="chem">(1.35, -2.62)</span> and a local maximum at <span class="chem">(0.126, 0.0627)</span>. The value at the local maximum is <span class="chem">f(0.12600) ≈ 0.0627</span> (3 s.f.). The point is easy to miss in a standard window because it is so close to the origin.</p>
      solution: "<p>GDC では、極小点が <span class=\"chem\">(-1.47, -5.44)</span> と <span class=\"chem\">(1.35, -2.62)</span> の付近にあり、極大点が <span class=\"chem\">(0.126, 0.0627)</span> にあります。極大点における値は <span class=\"chem\">f(0.12600) ≈ 0.0627</span>（有効数字 3 桁）です。この点は原点にとても近いので、標準の表示範囲では見落としやすいです。</p>",
    },

    // ── t2-1-q042 · short · exam · SL · SL 2.2, 2.5 · 7 marks
    "t2-1-q042": {
      // EN: <p>A cup of tea cools in a room. Its temperature, in °C, <span class="chem">t</span> minutes after it is poured is modelled by <span class="chem">T(t) = 20 + 70e^{-0.08t}</span>, <span class="chem">t &gt;= 0</span>.<br>(a) Write down the temperature of the tea when it is poured. <strong>[1 mark]</strong><br>(b) Write down the range of <span class="chem">T</span>. <strong>[2 marks]</strong><br>(c) Find the time taken for the tea to cool to <span class="chem">40</span>°C. <strong>[2 marks]</strong><br>(d) Explain what <span class="chem">T^{-1}(50)</span> represents in this context, and find its value. <strong>[2 marks]</strong></p>
      stem: "<p>部屋の中で 1 杯の紅茶が冷めていく。注いでから <span class=\"chem\">t</span> 分後の温度（°C）は <span class=\"chem\">T(t) = 20 + 70e^{-0.08t}</span>（<span class=\"chem\">t &gt;= 0</span>）でモデル化される。<br>(a) 注いだときの紅茶の温度を書きなさい (Write down)。 <strong>[1 mark]</strong><br>(b) <span class=\"chem\">T</span> の値域を書きなさい。 <strong>[2 marks]</strong><br>(c) 紅茶が <span class=\"chem\">40</span>°C まで冷めるのにかかる時間を求めなさい (Find)。 <strong>[2 marks]</strong><br>(d) この文脈で <span class=\"chem\">T^{-1}(50)</span> が何を表すかを説明し (Explain)、その値を求めなさい。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: As <span class="chem">t</span> increases, <span class="chem">e^{-0.08t}</span> decreases towards <span class="chem">0</span> but never reaches it. Which bound of the range is included?
        "<span class=\"chem\">t</span> が増加すると、<span class=\"chem\">e^{-0.08t}</span> は <span class=\"chem\">0</span> に向かって減少しますが、決してそこには達しません。値域のどちらの端が含まれますか？",
        // EN: For (c), graph <span class="chem">Y_1 = T(t)</span> and <span class="chem">Y_2 = 40</span>, then intersect.
        "(c) では、<span class=\"chem\">Y_1 = T(t)</span> と <span class=\"chem\">Y_2 = 40</span> のグラフを描き、交点を求めます。",
        // EN: An inverse function swaps input and output: <span class="chem">T^{-1}</span> takes a temperature and returns a time.
        "逆関数は入力と出力を入れ替えます：<span class=\"chem\">T^{-1}</span> は温度を受け取って時間を返します。",
      ],
      // EN: <p>(a) <span class="chem">T(0) = 20 + 70 = 90</span>°C.<br>(b) <span class="chem">T</span> decreases from <span class="chem">90</span> and approaches <span class="chem">20</span> (the room temperature) without reaching it: <span class="chem">20 &lt; T &lt;= 90</span>.<br>(c) <span class="chem">70e^{-0.08t} = 20 => t = ln(3.5)/0.08 ≈ 15.66</span>, so about <span class="chem">15.7</span> minutes.<br>(d) <span class="chem">T^{-1}(50)</span> is the time after pouring at which the tea is at <span class="chem">50</span>°C. <span class="chem">70e^{-0.08t} = 30 => t = ln(7/3)/0.08 ≈ 10.59</span>, so about <span class="chem">10.6</span> minutes.</p>
      solution: "<p>(a) <span class=\"chem\">T(0) = 20 + 70 = 90</span>°C。<br>(b) <span class=\"chem\">T</span> は <span class=\"chem\">90</span> から減少し、<span class=\"chem\">20</span>（室温）に近づきますが達しません：<span class=\"chem\">20 &lt; T &lt;= 90</span>。<br>(c) <span class=\"chem\">70e^{-0.08t} = 20 => t = ln(3.5)/0.08 ≈ 15.66</span> なので、約 <span class=\"chem\">15.7</span> 分です。<br>(d) <span class=\"chem\">T^{-1}(50)</span> は、注いでから紅茶が <span class=\"chem\">50</span>°C になるまでの時間です。<span class=\"chem\">70e^{-0.08t} = 30 => t = ln(7/3)/0.08 ≈ 10.59</span> なので、約 <span class=\"chem\">10.6</span> 分です。</p>",
      // EN: <p>(a) <span class="chem">90</span>°C; (b) <span class="chem">20 &lt; T &lt;= 90</span>; (c) <span class="chem">15.7</span> minutes; (d) the time (in minutes) at which the temperature is <span class="chem">50</span>°C; <span class="chem">T^{-1}(50) ≈ 10.6</span> minutes.</p>
      answer: "<p>(a) <span class=\"chem\">90</span>°C；(b) <span class=\"chem\">20 &lt; T &lt;= 90</span>；(c) <span class=\"chem\">15.7</span> 分；(d) 温度が <span class=\"chem\">50</span>°C になる時刻（分）；<span class=\"chem\">T^{-1}(50) ≈ 10.6</span> 分。</p>",
      markscheme: [
        // EN: A1: T(0) = 90 °C.
        "A1：T(0) = 90 °C。",
        // EN: A1: Upper bound 90 included (T ≤ 90).
        "A1：上限 90 を含む（T ≤ 90）。",
        // EN: A1: Lower bound 20 not included (T > 20), since e^{−0.08t} > 0 for all t; so 20 < T ≤ 90.
        "A1：下限 20 は含まない（T > 20）。すべての t で e^{−0.08t} > 0 だから。よって 20 < T ≤ 90。",
        // EN: M1: Solves 20 + 70e^{−0.08t} = 40 (GDC or logarithms).
        "M1：20 + 70e^{−0.08t} = 40 を解く（GDC または対数）。",
        // EN: A1: t = 15.7 minutes.
        "A1：t = 15.7 分。",
        // EN: R1: T⁻¹(50) is the time (minutes after pouring) at which the temperature is 50 °C.
        "R1：T⁻¹(50) は温度が 50 °C になる時刻（注いでからの分数）である。",
        // EN: A1: T⁻¹(50) = 10.6 minutes.
        "A1：T⁻¹(50) = 10.6 分。",
      ],
    },

    // ── t2-1-q043 · numeric · exam · SL · SL 2.5 · 4 marks
    "t2-1-q043": {
      // EN: <p>Let <span class="chem">f(x) = x^3 + x</span> and <span class="chem">g(x) = 2x - 1</span>, for <span class="chem">x ∈ ℝ</span>. The composite function <span class="chem">f ∘ g</span> is one-to-one. Find <span class="chem">(f ∘ g)^{-1}(20)</span>, giving your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">x ∈ ℝ</span> に対して <span class=\"chem\">f(x) = x^3 + x</span>、<span class=\"chem\">g(x) = 2x - 1</span> とする。合成関数 <span class=\"chem\">f ∘ g</span> は 1 対 1 である。<span class=\"chem\">(f ∘ g)^{-1}(20)</span> を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: <span class="chem">(f ∘ g)^{-1}(20) = a</span> means <span class="chem">f(g(a)) = 20</span>. So you need the input that makes the composite equal to <span class="chem">20</span>.
        "解読：<span class=\"chem\">(f ∘ g)^{-1}(20) = a</span> は <span class=\"chem\">f(g(a)) = 20</span> を意味します。つまり合成関数の値が <span class=\"chem\">20</span> になる入力を求めます。",
        // EN: Graph <span class="chem">Y_1 = (2x - 1)^3 + (2x - 1)</span> and <span class="chem">Y_2 = 20</span>, or first solve <span class="chem">u^3 + u = 20</span> for <span class="chem">u = g(a)</span>, then solve <span class="chem">2a - 1 = u</span>.
        "<span class=\"chem\">Y_1 = (2x - 1)^3 + (2x - 1)</span> と <span class=\"chem\">Y_2 = 20</span> のグラフを描くか、まず <span class=\"chem\">u = g(a)</span> として <span class=\"chem\">u^3 + u = 20</span> を解き、次に <span class=\"chem\">2a - 1 = u</span> を解きます。",
      ],
      // EN: <p>Decode: find <span class="chem">a</span> with <span class="chem">(f ∘ g)(a) = 20</span>. Let <span class="chem">u = g(a)</span>. Then <span class="chem">u^3 + u = 20</span>, and the GDC gives <span class="chem">u ≈ 2.59170</span>. So <span class="chem">2a - 1 = 2.59170 => a ≈ 1.79585</span>. <span class="chem">(f ∘ g)^{-1}(20) ≈ 1.80</span> (3 s.f.).</p>
      solution: "<p>解読：<span class=\"chem\">(f ∘ g)(a) = 20</span> となる <span class=\"chem\">a</span> を求めます。<span class=\"chem\">u = g(a)</span> とおくと <span class=\"chem\">u^3 + u = 20</span> で、GDC より <span class=\"chem\">u ≈ 2.59170</span> です。よって <span class=\"chem\">2a - 1 = 2.59170 => a ≈ 1.79585</span>。<span class=\"chem\">(f ∘ g)^{-1}(20) ≈ 1.80</span>（有効数字 3 桁）です。</p>",
    },

    // ── t2-1-q044 · numeric · exam · SL · SL 2.3 · 4 marks
    "t2-1-q044": {
      // EN: <p>Let <span class="chem">f(x) = 6 ln(x + 1)</span> and <span class="chem">g(x) = x</span>, for <span class="chem">0 &lt;= x &lt;= 12</span>. On this interval the graph of <span class="chem">f</span> lies on or above the graph of <span class="chem">g</span>. Find the greatest vertical distance between the two graphs. Give your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">0 &lt;= x &lt;= 12</span> に対して <span class=\"chem\">f(x) = 6 ln(x + 1)</span>、<span class=\"chem\">g(x) = x</span> とする。この区間では、<span class=\"chem\">f</span> のグラフは <span class=\"chem\">g</span> のグラフの上にあるか、または重なっている。2 つのグラフの間の鉛直方向の距離の最大値を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: the vertical distance at a given <span class="chem">x</span> is <span class="chem">f(x) - g(x)</span>. Graph the difference function <span class="chem">d(x) = 6 ln(x + 1) - x</span> and find its maximum.
        "解読：ある <span class=\"chem\">x</span> における鉛直方向の距離は <span class=\"chem\">f(x) - g(x)</span> です。差の関数 <span class=\"chem\">d(x) = 6 ln(x + 1) - x</span> のグラフを描き、その最大値を求めます。",
        // EN: Remember to check the end points too, not only the turning point.
        "転回点だけでなく、端点も忘れずに調べましょう。",
      ],
      // EN: <p>Decode: the vertical distance is the difference <span class="chem">d(x) = f(x) - g(x) = 6 ln(x + 1) - x</span>. The GDC maximum tool gives a maximum at <span class="chem">x = 5</span>, with <span class="chem">d(5) = 6 ln 6 - 5 ≈ 5.7506</span>. The end points give <span class="chem">d(0) = 0</span> and <span class="chem">d(12) ≈ 3.39</span>, which are smaller. The greatest vertical distance is <span class="chem">5.75</span> (3 s.f.).</p>
      solution: "<p>解読：鉛直方向の距離は差 <span class=\"chem\">d(x) = f(x) - g(x) = 6 ln(x + 1) - x</span> です。GDC の最大機能より、<span class=\"chem\">x = 5</span> で最大となり、<span class=\"chem\">d(5) = 6 ln 6 - 5 ≈ 5.7506</span> です。端点では <span class=\"chem\">d(0) = 0</span>、<span class=\"chem\">d(12) ≈ 3.39</span> で、これらはより小さいです。鉛直方向の距離の最大値は <span class=\"chem\">5.75</span>（有効数字 3 桁）です。</p>",
    },

    // ── t2-1-q045 · short · exam · SL · SL 2.2, 2.4, 2.5 · 7 marks
    "t2-1-q045": {
      // EN: <p>Let <span class="chem">f(x) = 3 + 2 ln(x - 1)</span> for <span class="chem">x &gt; 1</span>.<br>(a) Find an expression for <span class="chem">f^{-1}(x)</span>. <strong>[3 marks]</strong><br>(b) Write down the range of <span class="chem">f^{-1}</span>. <strong>[1 mark]</strong><br>(c) The graphs of <span class="chem">y = f(x)</span> and <span class="chem">y = f^{-1}(x)</span> intersect at two points. Find the coordinates of both points. <strong>[3 marks]</strong></p>
      stem: "<p><span class=\"chem\">x &gt; 1</span> に対して <span class=\"chem\">f(x) = 3 + 2 ln(x - 1)</span> とする。<br>(a) <span class=\"chem\">f^{-1}(x)</span> の式を求めなさい (Find)。 <strong>[3 marks]</strong><br>(b) <span class=\"chem\">f^{-1}</span> の値域を書きなさい (Write down)。 <strong>[1 mark]</strong><br>(c) <span class=\"chem\">y = f(x)</span> と <span class=\"chem\">y = f^{-1}(x)</span> のグラフは 2 点で交わる。2 つの交点の座標を求めなさい。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: For (a), swap <span class="chem">x</span> and <span class="chem">y</span>, isolate the logarithm and exponentiate.
        "(a) では、<span class=\"chem\">x</span> と <span class=\"chem\">y</span> を入れ替え、対数を分離してから指数をとります。",
        // EN: The range of <span class="chem">f^{-1}</span> is the domain of <span class="chem">f</span>.
        "<span class=\"chem\">f^{-1}</span> の値域は <span class=\"chem\">f</span> の定義域です。",
        // EN: For an increasing function, the graphs of <span class="chem">f</span> and <span class="chem">f^{-1}</span> meet on the line <span class="chem">y = x</span>. Graph <span class="chem">y = 3 + 2 ln(x - 1)</span> and <span class="chem">y = x</span>.
        "増加関数では、<span class=\"chem\">f</span> と <span class=\"chem\">f^{-1}</span> のグラフは直線 <span class=\"chem\">y = x</span> 上で交わります。<span class=\"chem\">y = 3 + 2 ln(x - 1)</span> と <span class=\"chem\">y = x</span> のグラフを描きます。",
      ],
      // EN: <p>(a) <span class="chem">x = 3 + 2 ln(y - 1) => ln(y - 1) = (x - 3)/2 => f^{-1}(x) = 1 + e^{(x - 3)/2}</span>, <span class="chem">x ∈ ℝ</span>.<br>(b) Range of <span class="chem">f^{-1}</span> = domain of <span class="chem">f</span>: <span class="chem">f^{-1}(x) &gt; 1</span>.<br>(c) <span class="chem">f</span> is increasing, so intersections of <span class="chem">f</span> and <span class="chem">f^{-1}</span> lie on <span class="chem">y = x</span>. GDC: <span class="chem">3 + 2 ln(x - 1) = x</span> gives <span class="chem">x ≈ 1.46392</span> and <span class="chem">x ≈ 6.35669</span>. The points are <span class="chem">(1.46, 1.46)</span> and <span class="chem">(6.36, 6.36)</span>.</p>
      solution: "<p>(a) <span class=\"chem\">x = 3 + 2 ln(y - 1) => ln(y - 1) = (x - 3)/2 => f^{-1}(x) = 1 + e^{(x - 3)/2}</span>、<span class=\"chem\">x ∈ ℝ</span>。<br>(b) <span class=\"chem\">f^{-1}</span> の値域 = <span class=\"chem\">f</span> の定義域：<span class=\"chem\">f^{-1}(x) &gt; 1</span>。<br>(c) <span class=\"chem\">f</span> は増加関数なので、<span class=\"chem\">f</span> と <span class=\"chem\">f^{-1}</span> の交点は <span class=\"chem\">y = x</span> 上にあります。GDC で <span class=\"chem\">3 + 2 ln(x - 1) = x</span> を解くと <span class=\"chem\">x ≈ 1.46392</span>、<span class=\"chem\">x ≈ 6.35669</span> です。交点は <span class=\"chem\">(1.46, 1.46)</span> と <span class=\"chem\">(6.36, 6.36)</span> です。</p>",
      // EN: <p>(a) <span class="chem">f^{-1}(x) = 1 + e^{(x - 3)/2}</span>; (b) <span class="chem">f^{-1}(x) &gt; 1</span>; (c) <span class="chem">(1.46, 1.46)</span> and <span class="chem">(6.36, 6.36)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">f^{-1}(x) = 1 + e^{(x - 3)/2}</span>；(b) <span class=\"chem\">f^{-1}(x) &gt; 1</span>；(c) <span class=\"chem\">(1.46, 1.46)</span> と <span class=\"chem\">(6.36, 6.36)</span>。</p>",
      markscheme: [
        // EN: M1: Swaps x and y: x = 3 + 2 ln(y − 1), so ln(y − 1) = (x − 3)/2.
        "M1：x と y を入れ替える：x = 3 + 2 ln(y − 1)、よって ln(y − 1) = (x − 3)/2。",
        // EN: M1: Takes the exponential: y − 1 = e^{(x − 3)/2}.
        "M1：指数をとる：y − 1 = e^{(x − 3)/2}。",
        // EN: A1: f⁻¹(x) = 1 + e^{(x − 3)/2}.
        "A1：f⁻¹(x) = 1 + e^{(x − 3)/2}。",
        // EN: A1: Range of f⁻¹ is f⁻¹(x) > 1 (the domain of f).
        "A1：f⁻¹ の値域は f⁻¹(x) > 1（f の定義域）。",
        // EN: R1: Since f is increasing, the intersections lie on y = x, so solve 3 + 2 ln(x − 1) = x (or graph f and f⁻¹ on the GDC).
        "R1：f は増加関数なので交点は y = x 上にある。よって 3 + 2 ln(x − 1) = x を解く（または GDC で f と f⁻¹ のグラフを描く）。",
        // EN: A1: (1.46, 1.46).
        "A1：(1.46, 1.46)。",
        // EN: A1: (6.36, 6.36).
        "A1：(6.36, 6.36)。",
      ],
    },

    // ── t2-1-q046 · numeric · exam · SL · SL 2.2 · 4 marks
    "t2-1-q046": {
      // EN: <p>The largest possible domain of <span class="chem">f(x) = sqrt(ln x - 0.1x)</span> is <span class="chem">a &lt;= x &lt;= b</span>. Find the value of <span class="chem">b</span>, giving your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">f(x) = sqrt(ln x - 0.1x)</span> の最大の定義域は <span class=\"chem\">a &lt;= x &lt;= b</span> である。<span class=\"chem\">b</span> の値を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: the domain is where the expression under the square root is not negative, so you need <span class="chem">ln x - 0.1x &gt;= 0</span>. The end points <span class="chem">a</span> and <span class="chem">b</span> are the zeros of <span class="chem">ln x - 0.1x</span>.
        "解読：定義域は平方根の中の式が負でないところなので、<span class=\"chem\">ln x - 0.1x &gt;= 0</span> が必要です。端点 <span class=\"chem\">a</span> と <span class=\"chem\">b</span> は <span class=\"chem\">ln x - 0.1x</span> の零点です。",
        // EN: Graph <span class="chem">y = ln x - 0.1x</span>. The second zero is far to the right, so use a window up to about <span class="chem">x = 50</span>.
        "<span class=\"chem\">y = ln x - 0.1x</span> のグラフを描きます。2 つ目の零点はかなり右にあるので、<span class=\"chem\">x = 50</span> 程度までの表示範囲を使います。",
      ],
      // EN: <p>Decode: we need <span class="chem">ln x - 0.1x &gt;= 0</span>. The GDC graph of <span class="chem">y = ln x - 0.1x</span> is above the <span class="chem">x</span>-axis between its two zeros, <span class="chem">x ≈ 1.12</span> and <span class="chem">x ≈ 35.7715</span>. So the domain is <span class="chem">1.12 &lt;= x &lt;= 35.8</span>, and <span class="chem">b ≈ 35.8</span> (3 s.f.).</p>
      solution: "<p>解読：<span class=\"chem\">ln x - 0.1x &gt;= 0</span> が必要です。GDC で描いた <span class=\"chem\">y = ln x - 0.1x</span> のグラフは、2 つの零点 <span class=\"chem\">x ≈ 1.12</span> と <span class=\"chem\">x ≈ 35.7715</span> の間で <span class=\"chem\">x</span> 軸より上にあります。よって定義域は <span class=\"chem\">1.12 &lt;= x &lt;= 35.8</span> で、<span class=\"chem\">b ≈ 35.8</span>（有効数字 3 桁）です。</p>",
    },

    // ── t2-1-q047 · short · exam · SL · SL 2.2, 2.4 · 5 marks
    "t2-1-q047": {
      // EN: <p>Let <span class="chem">f(x) = 4/(1 + e^{-x}) - 2</span>, for <span class="chem">x ∈ ℝ</span>.<br>(a) Write down the equations of the two horizontal asymptotes of the graph of <span class="chem">f</span>. <strong>[2 marks]</strong><br>(b) Hence write down the range of <span class="chem">f</span>. <strong>[1 mark]</strong><br>(c) Find the value of <span class="chem">x</span> for which <span class="chem">f(x) = 1.5</span>. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">x ∈ ℝ</span> に対して <span class=\"chem\">f(x) = 4/(1 + e^{-x}) - 2</span> とする。<br>(a) <span class=\"chem\">f</span> のグラフの 2 本の水平漸近線の方程式を書きなさい (Write down)。 <strong>[2 marks]</strong><br>(b) これを用いて (Hence) <span class=\"chem\">f</span> の値域を書きなさい。 <strong>[1 mark]</strong><br>(c) <span class=\"chem\">f(x) = 1.5</span> となる <span class=\"chem\">x</span> の値を求めなさい (Find)。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Use the GDC table for large positive and large negative <span class="chem">x</span>, or think about what <span class="chem">e^{-x}</span> does at each end.
        "GDC の表 (table) を使って絶対値の大きい正・負の <span class=\"chem\">x</span> の値を調べるか、両端で <span class=\"chem\">e^{-x}</span> がどうなるかを考えます。",
        // EN: The graph approaches both asymptotes but never reaches them, so neither bound of the range is included.
        "グラフは 2 本の漸近線に近づきますが決して達しないので、値域の端はどちらも含まれません。",
        // EN: For (c), intersect <span class="chem">y = f(x)</span> with <span class="chem">y = 1.5</span>.
        "(c) では、<span class=\"chem\">y = f(x)</span> と <span class=\"chem\">y = 1.5</span> の交点を求めます。",
      ],
      // EN: <p>(a) As <span class="chem">x -&gt; infty</span>, <span class="chem">e^{-x} -&gt; 0</span>, so <span class="chem">f(x) -&gt; 4 - 2 = 2</span>. As <span class="chem">x -&gt; -infty</span>, <span class="chem">e^{-x} -&gt; infty</span>, so <span class="chem">f(x) -&gt; -2</span>. Asymptotes <span class="chem">y = 2</span> and <span class="chem">y = -2</span>.<br>(b) <span class="chem">f</span> is increasing and never reaches either asymptote: <span class="chem">-2 &lt; f(x) &lt; 2</span>.<br>(c) <span class="chem">4/(1 + e^{-x}) = 3.5 => 1 + e^{-x} = 8/7 => e^{-x} = 1/7 => x = ln 7 ≈ 1.95</span>.</p>
      solution: "<p>(a) <span class=\"chem\">x -&gt; infty</span> のとき <span class=\"chem\">e^{-x} -&gt; 0</span> なので <span class=\"chem\">f(x) -&gt; 4 - 2 = 2</span>。<span class=\"chem\">x -&gt; -infty</span> のとき <span class=\"chem\">e^{-x} -&gt; infty</span> なので <span class=\"chem\">f(x) -&gt; -2</span>。漸近線は <span class=\"chem\">y = 2</span> と <span class=\"chem\">y = -2</span> です。<br>(b) <span class=\"chem\">f</span> は増加関数で、どちらの漸近線にも達しません：<span class=\"chem\">-2 &lt; f(x) &lt; 2</span>。<br>(c) <span class=\"chem\">4/(1 + e^{-x}) = 3.5 => 1 + e^{-x} = 8/7 => e^{-x} = 1/7 => x = ln 7 ≈ 1.95</span>。</p>",
      // EN: <p>(a) <span class="chem">y = 2</span> and <span class="chem">y = -2</span>; (b) <span class="chem">-2 &lt; f(x) &lt; 2</span>; (c) <span class="chem">x = ln 7 ≈ 1.95</span>.</p>
      answer: "<p>(a) <span class=\"chem\">y = 2</span> と <span class=\"chem\">y = -2</span>；(b) <span class=\"chem\">-2 &lt; f(x) &lt; 2</span>；(c) <span class=\"chem\">x = ln 7 ≈ 1.95</span>。</p>",
      markscheme: [
        // EN: A1: y = 2 (as x → ∞, e^{−x} → 0).
        "A1：y = 2（x → ∞ のとき e^{−x} → 0）。",
        // EN: A1: y = −2 (as x → −∞, e^{−x} → ∞).
        "A1：y = −2（x → −∞ のとき e^{−x} → ∞）。",
        // EN: A1: Range −2 < f(x) < 2 (both bounds excluded).
        "A1：値域 −2 < f(x) < 2（両端とも含まない）。",
        // EN: M1: Solves 4/(1 + e^{−x}) − 2 = 1.5 with the GDC, or rearranges to e^{−x} = 1/7.
        "M1：GDC で 4/(1 + e^{−x}) − 2 = 1.5 を解く、または e^{−x} = 1/7 と変形する。",
        // EN: A1: x = 1.95 (= ln 7).
        "A1：x = 1.95（= ln 7）。",
      ],
    },

    // ── t2-1-q048 · numeric · challenge · SL · SL 2.2, 2.5 · 5 marks
    "t2-1-q048": {
      // EN: <p>A spherical balloon is being inflated. Its radius, in cm, <span class="chem">t</span> seconds after inflation starts is <span class="chem">r(t) = 2 + 0.8 ln(t + 1)</span>. The volume of a sphere of radius <span class="chem">r</span> is <span class="chem">V(r) = (4/3)pi r^3</span>. The balloon bursts when its volume first reaches <span class="chem">300</span> <span class="unit">cm3</span>. Find how many seconds after inflation starts the balloon bursts. Give your answer to 3 significant figures.</p>
      stem: "<p>球形の風船をふくらませている。ふくらませ始めてから <span class=\"chem\">t</span> 秒後の半径（cm）は <span class=\"chem\">r(t) = 2 + 0.8 ln(t + 1)</span> である。半径 <span class=\"chem\">r</span> の球の体積は <span class=\"chem\">V(r) = (4/3)pi r^3</span> である。風船は体積が初めて <span class=\"chem\">300</span> <span class=\"unit\">cm3</span> に達したときに破裂する。ふくらませ始めてから何秒後に風船が破裂するかを求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: the volume as a function of time is the composite <span class="chem">(V ∘ r)(t)</span>. "First reaches <span class="chem">300</span>" means solve <span class="chem">V(r(t)) = 300</span> and take the smallest positive <span class="chem">t</span>.
        "解読：時間の関数としての体積は合成関数 <span class=\"chem\">(V ∘ r)(t)</span> です。「初めて <span class=\"chem\">300</span> に達する」とは、<span class=\"chem\">V(r(t)) = 300</span> を解いて最小の正の <span class=\"chem\">t</span> をとることです。",
        // EN: Work backwards: first find the radius at which <span class="chem">V = 300</span>, then the time at which <span class="chem">r(t)</span> equals that radius.
        "逆向きに考えます：まず <span class=\"chem\">V = 300</span> となる半径を求め、次に <span class=\"chem\">r(t)</span> がその半径になる時刻を求めます。",
        // EN: <span class="chem">(4/3)pi r^3 = 300</span> gives <span class="chem">r ≈ 4.1528</span> cm.
        "<span class=\"chem\">(4/3)pi r^3 = 300</span> より <span class=\"chem\">r ≈ 4.1528</span> cm です。",
      ],
      // EN: <p>Decode: we need the time when <span class="chem">(V ∘ r)(t) = 300</span>. From <span class="chem">(4/3)pi r^3 = 300</span>: <span class="chem">r = (225/pi)^{1/3} ≈ 4.15283</span>. Then <span class="chem">2 + 0.8 ln(t + 1) = 4.15283 => ln(t + 1) ≈ 2.69104 => t ≈ e^{2.69104} - 1 ≈ 13.747</span>. Since <span class="chem">r</span> (and so <span class="chem">V</span>) is increasing, this is the first time. The balloon bursts after about <span class="chem">13.7</span> seconds. (Graphing <span class="chem">y = (4/3)pi(2 + 0.8 ln(x + 1))^3</span> against <span class="chem">y = 300</span> gives the same value.)</p>
      solution: "<p>解読：<span class=\"chem\">(V ∘ r)(t) = 300</span> となる時刻が必要です。<span class=\"chem\">(4/3)pi r^3 = 300</span> より <span class=\"chem\">r = (225/pi)^{1/3} ≈ 4.15283</span>。次に <span class=\"chem\">2 + 0.8 ln(t + 1) = 4.15283 => ln(t + 1) ≈ 2.69104 => t ≈ e^{2.69104} - 1 ≈ 13.747</span> です。<span class=\"chem\">r</span>（したがって <span class=\"chem\">V</span>）は増加するので、これが初めて達する時刻です。風船は約 <span class=\"chem\">13.7</span> 秒後に破裂します。（<span class=\"chem\">y = (4/3)pi(2 + 0.8 ln(x + 1))^3</span> と <span class=\"chem\">y = 300</span> のグラフを描いても同じ値が得られます。）</p>",
    },

    // ── t2-1-q049 · numeric · challenge · SL · SL 2.1 · 6 marks
    "t2-1-q049": {
      // EN: <p>On a coastal map with axes in kilometres, a ship sails in a straight line from the harbour <span class="chem">H(0, 1)</span> through the buoy <span class="chem">B(10, 4)</span> and beyond. A lighthouse stands at <span class="chem">L(4.2, 7.5)</span>. Find the shortest distance between the lighthouse and the path of the ship. Give your answer in kilometres to 3 significant figures.</p>
      stem: "<p>座標軸の単位が km の海岸地図上で、船が港 <span class=\"chem\">H(0, 1)</span> から浮標 <span class=\"chem\">B(10, 4)</span> を通ってさらにその先へと直進する。灯台は <span class=\"chem\">L(4.2, 7.5)</span> にある。灯台と船の航路との最短距離を求め (Find)、km 単位で有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: the shortest distance from a point to a line is measured along the perpendicular. Find the foot of the perpendicular <span class="chem">F</span> from <span class="chem">L</span> to the line <span class="chem">HB</span>, then the length <span class="chem">LF</span>.
        "解読：点から直線までの最短距離は垂線に沿って測ります。<span class=\"chem\">L</span> から直線 <span class=\"chem\">HB</span> に下ろした垂線の足 <span class=\"chem\">F</span> を求め、次に長さ <span class=\"chem\">LF</span> を求めます。",
        // EN: Line <span class="chem">HB</span>: gradient <span class="chem">0.3</span>, so <span class="chem">y = 0.3x + 1</span>. The perpendicular through <span class="chem">L</span> has gradient <span class="chem">-10/3</span>.
        "直線 <span class=\"chem\">HB</span>：傾きは <span class=\"chem\">0.3</span> なので <span class=\"chem\">y = 0.3x + 1</span> です。<span class=\"chem\">L</span> を通る垂線の傾きは <span class=\"chem\">-10/3</span> です。",
        // EN: Solve the two line equations simultaneously (GDC) to get <span class="chem">F</span>, then use the distance formula.
        "2 つの直線の方程式を連立して（GDC で）解いて <span class=\"chem\">F</span> を求め、2 点間の距離の公式を使います。",
      ],
      // EN: <p>Decode: "shortest distance to a path" means the perpendicular distance. Line <span class="chem">HB</span>: <span class="chem">m = 3/10</span>, so <span class="chem">y = 0.3x + 1</span>. Perpendicular through <span class="chem">L</span>: <span class="chem">y - 7.5 = -(10/3)(x - 4.2)</span>. Solving simultaneously: <span class="chem">F ≈ (5.6422, 2.6927)</span>. Then <span class="chem">LF = sqrt((5.6422 - 4.2)^2 + (2.6927 - 7.5)^2) ≈ sqrt(2.0800 + 23.1101) ≈ 5.0190</span>. The shortest distance is <span class="chem">5.02</span> km (3 s.f.). Because <span class="chem">F</span> has <span class="chem">x &gt; 0</span>, it lies on the path of the ship after it leaves the harbour.</p>
      solution: "<p>解読：「航路までの最短距離」とは垂線の長さのことです。直線 <span class=\"chem\">HB</span>：<span class=\"chem\">m = 3/10</span> なので <span class=\"chem\">y = 0.3x + 1</span>。<span class=\"chem\">L</span> を通る垂線：<span class=\"chem\">y - 7.5 = -(10/3)(x - 4.2)</span>。連立して解くと <span class=\"chem\">F ≈ (5.6422, 2.6927)</span> です。よって <span class=\"chem\">LF = sqrt((5.6422 - 4.2)^2 + (2.6927 - 7.5)^2) ≈ sqrt(2.0800 + 23.1101) ≈ 5.0190</span>。最短距離は <span class=\"chem\">5.02</span> km（有効数字 3 桁）です。<span class=\"chem\">F</span> は <span class=\"chem\">x &gt; 0</span> なので、港を出た後の船の航路上にあります。</p>",
    },

    // ── t2-1-q050 · short · challenge · SL · SL 2.2, 2.3, 2.4 · 7 marks
    "t2-1-q050": {
      // EN: <p>After a patient takes a tablet, the concentration of the drug in the blood, in mg per litre, is modelled by <span class="chem">C(t) = 10t e^{-0.5t}</span>, where <span class="chem">t</span> is the time in hours, <span class="chem">0 &lt;= t &lt;= 12</span>. The drug is effective while its concentration is at least <span class="chem">2</span> mg per litre.<br>(a) Sketch the graph of <span class="chem">C</span>, labelling the coordinates of the maximum point and of the end point at <span class="chem">t = 12</span>. <strong>[3 marks]</strong><br>(b) Find the length of time for which the drug is effective. <strong>[4 marks]</strong></p>
      stem: "<p>患者が錠剤を飲んだ後の血中の薬の濃度（リットルあたりの mg）は <span class=\"chem\">C(t) = 10t e^{-0.5t}</span> でモデル化される。ただし <span class=\"chem\">t</span> は時間（時間）で、<span class=\"chem\">0 &lt;= t &lt;= 12</span> である。薬は濃度がリットルあたり <span class=\"chem\">2</span> mg 以上である間だけ有効である。<br>(a) <span class=\"chem\">C</span> のグラフの概形を描き (Sketch)、極大点と <span class=\"chem\">t = 12</span> における端点の座標を書き入れなさい。 <strong>[3 marks]</strong><br>(b) 薬が有効である時間の長さを求めなさい (Find)。 <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: "effective while at least 2" means you need the time interval where the curve is on or above the line <span class="chem">C = 2</span>. The question asks for the length of that interval, not the times themselves.
        "解読：「2 以上である間有効」とは、曲線が直線 <span class=\"chem\">C = 2</span> の上にあるか重なる時間の区間を求めることです。問われているのはその区間の長さで、時刻そのものではありません。",
        // EN: Graph <span class="chem">Y_1 = 10x e^{-0.5x}</span> and <span class="chem">Y_2 = 2</span> for <span class="chem">0 &lt;= x &lt;= 12</span>. There are two intersections.
        "<span class=\"chem\">0 &lt;= x &lt;= 12</span> で <span class=\"chem\">Y_1 = 10x e^{-0.5x}</span> と <span class=\"chem\">Y_2 = 2</span> のグラフを描きます。交点は 2 つあります。",
        // EN: Subtract the two <span class="chem">t</span>-values using full GDC accuracy, then round.
        "2 つの <span class=\"chem\">t</span> の値を GDC の精度のまま引き算してから丸めます。",
      ],
      // EN: <p>Decode: we need the length of the interval on which <span class="chem">C(t) &gt;= 2</span>.<br>(a) GDC: maximum at <span class="chem">(2, 20/e) ≈ (2, 7.36)</span>; <span class="chem">C(12) = 120e^{-6} ≈ 0.297</span>. The sketch rises from the origin to the maximum and then decays towards the <span class="chem">t</span>-axis.<br>(b) Intersections of <span class="chem">y = C(t)</span> and <span class="chem">y = 2</span>: <span class="chem">t_1 ≈ 0.22367</span> and <span class="chem">t_2 ≈ 7.15430</span>. The curve is above the line between them, so the drug is effective for <span class="chem">7.15430 - 0.22367 ≈ 6.93</span> hours.</p>
      solution: "<p>解読：<span class=\"chem\">C(t) &gt;= 2</span> となる区間の長さが必要です。<br>(a) GDC：極大点は <span class=\"chem\">(2, 20/e) ≈ (2, 7.36)</span>、<span class=\"chem\">C(12) = 120e^{-6} ≈ 0.297</span> です。概形は原点から極大点まで増加し、その後 <span class=\"chem\">t</span> 軸に向かって減衰します。<br>(b) <span class=\"chem\">y = C(t)</span> と <span class=\"chem\">y = 2</span> の交点は <span class=\"chem\">t_1 ≈ 0.22367</span> と <span class=\"chem\">t_2 ≈ 7.15430</span> です。その間では曲線が直線より上にあるので、薬が有効な時間は <span class=\"chem\">7.15430 - 0.22367 ≈ 6.93</span> 時間です。</p>",
      // EN: <p>(a) A curve from <span class="chem">(0, 0)</span> rising to a maximum <span class="chem">(2, 7.36)</span>, then decreasing to <span class="chem">(12, 0.297)</span>; (b) effective for <span class="chem">0.224 &lt;= t &lt;= 7.15</span>, a length of <span class="chem">6.93</span> hours.</p>
      answer: "<p>(a) <span class=\"chem\">(0, 0)</span> から極大点 <span class=\"chem\">(2, 7.36)</span> まで増加し、その後 <span class=\"chem\">(12, 0.297)</span> まで減少する曲線；(b) <span class=\"chem\">0.224 &lt;= t &lt;= 7.15</span> で有効で、長さは <span class=\"chem\">6.93</span> 時間。</p>",
      markscheme: [
        // EN: A1: Correct shape: starts at the origin, single maximum, decreasing towards (but above) the t-axis, only for 0 ≤ t ≤ 12.
        "A1：形が正しい：原点から始まり、極大はただ 1 つで、t 軸に向かって（ただし t 軸より上で）減少し、0 ≤ t ≤ 12 だけにかかれている。",
        // EN: A1: Maximum labelled (2, 7.36).
        "A1：極大点 (2, 7.36) が書き入れてある。",
        // EN: A1: End point labelled (12, 0.297).
        "A1：端点 (12, 0.297) が書き入れてある。",
        // EN: M1: Interprets "effective" as C(t) ≥ 2 and draws or uses the line C = 2.
        "M1：「有効」を C(t) ≥ 2 と解釈し、直線 C = 2 を描くか用いる。",
        // EN: A1: t = 0.224 (first intersection).
        "A1：t = 0.224（1 つ目の交点）。",
        // EN: A1: t = 7.15 (second intersection).
        "A1：t = 7.15（2 つ目の交点）。",
        // EN: A1: Length of time 7.154 − 0.224 = 6.93 hours.
        "A1：時間の長さ 7.154 − 0.224 = 6.93 時間。",
      ],
    },

    // ── t2-1-q051 · numeric · challenge · SL · SL 2.4 · 5 marks
    "t2-1-q051": {
      // EN: <p>Consider the equation <span class="chem">x^2 e^{-x} = k</span>, where <span class="chem">k</span> is a positive constant and <span class="chem">x ∈ ℝ</span>. There is exactly one value of <span class="chem">k</span> for which the equation has exactly two solutions. Find this value of <span class="chem">k</span>, giving your answer to 3 significant figures.</p>
      stem: "<p>方程式 <span class=\"chem\">x^2 e^{-x} = k</span> を考える。ただし <span class=\"chem\">k</span> は正の定数で、<span class=\"chem\">x ∈ ℝ</span> である。この方程式がちょうど 2 個の解をもつような <span class=\"chem\">k</span> の値はちょうど 1 つある。この <span class=\"chem\">k</span> の値を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: the solutions are the intersections of the curve <span class="chem">y = x^2 e^{-x}</span> with the horizontal line <span class="chem">y = k</span>. Count intersections as the line moves up.
        "解読：解は曲線 <span class=\"chem\">y = x^2 e^{-x}</span> と水平な直線 <span class=\"chem\">y = k</span> の交点です。直線を上に動かしながら交点の個数を数えます。",
        // EN: Graph <span class="chem">y = x^2 e^{-x}</span>. For <span class="chem">x &lt; 0</span> it is decreasing; for <span class="chem">x &gt; 0</span> it rises to a local maximum and falls towards <span class="chem">0</span>.
        "<span class=\"chem\">y = x^2 e^{-x}</span> のグラフを描きます。<span class=\"chem\">x &lt; 0</span> では減少し、<span class=\"chem\">x &gt; 0</span> では極大まで増加してから <span class=\"chem\">0</span> に向かって減少します。",
        // EN: A horizontal line meets the curve exactly twice when it touches a turning point.
        "水平な直線が曲線とちょうど 2 回交わるのは、転回点に接するときです。",
      ],
      // EN: <p>Decode: count the intersections of <span class="chem">y = x^2 e^{-x}</span> with the horizontal line <span class="chem">y = k</span>, <span class="chem">k &gt; 0</span>. The GDC shows a local minimum at <span class="chem">(0, 0)</span> and a local maximum at <span class="chem">(2, 0.541)</span>; the curve tends to <span class="chem">infty</span> as <span class="chem">x -&gt; -infty</span> and to <span class="chem">0</span> as <span class="chem">x -&gt; infty</span>. For <span class="chem">0 &lt; k &lt; 0.541</span> there are three intersections, for <span class="chem">k &gt; 0.541</span> there is one, and for <span class="chem">k = 4e^{-2} ≈ 0.5413</span> the line touches the maximum, giving exactly two. So <span class="chem">k ≈ 0.541</span>.</p>
      solution: "<p>解読：<span class=\"chem\">y = x^2 e^{-x}</span> と水平な直線 <span class=\"chem\">y = k</span>（<span class=\"chem\">k &gt; 0</span>）の交点の個数を数えます。GDC では極小点が <span class=\"chem\">(0, 0)</span>、極大点が <span class=\"chem\">(2, 0.541)</span> にあり、曲線は <span class=\"chem\">x -&gt; -infty</span> のとき <span class=\"chem\">infty</span> に、<span class=\"chem\">x -&gt; infty</span> のとき <span class=\"chem\">0</span> に近づきます。<span class=\"chem\">0 &lt; k &lt; 0.541</span> では交点は 3 個、<span class=\"chem\">k &gt; 0.541</span> では 1 個、<span class=\"chem\">k = 4e^{-2} ≈ 0.5413</span> では直線が極大点に接して、ちょうど 2 個になります。よって <span class=\"chem\">k ≈ 0.541</span> です。</p>",
    },

    // ── t2-1-q052 · short · challenge · SL · SL 2.2, 2.5 · 7 marks
    "t2-1-q052": {
      // EN: <p>Let <span class="chem">f(x) = x^2 - 4x + 1</span> and <span class="chem">g(x) = e^{0.5x}</span>, for <span class="chem">x ∈ ℝ</span>.<br>(a) Write down an expression for <span class="chem">(f ∘ g)(x)</span>. <strong>[1 mark]</strong><br>(b) Solve <span class="chem">(f ∘ g)(x) = 0</span>, giving your answers to 3 significant figures. <strong>[2 marks]</strong><br>(c) Find the range of <span class="chem">f ∘ g</span>. <strong>[2 marks]</strong><br>(d) Find the range of <span class="chem">g ∘ f</span>. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">x ∈ ℝ</span> に対して <span class=\"chem\">f(x) = x^2 - 4x + 1</span>、<span class=\"chem\">g(x) = e^{0.5x}</span> とする。<br>(a) <span class=\"chem\">(f ∘ g)(x)</span> の式を書きなさい (Write down)。 <strong>[1 mark]</strong><br>(b) <span class=\"chem\">(f ∘ g)(x) = 0</span> を解き (Solve)、有効数字 3 桁で答えなさい。 <strong>[2 marks]</strong><br>(c) <span class=\"chem\">f ∘ g</span> の値域を求めなさい (Find)。 <strong>[2 marks]</strong><br>(d) <span class=\"chem\">g ∘ f</span> の値域を求めなさい。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: the range of a composite depends on which values the inner function can feed into the outer one. For <span class="chem">f ∘ g</span>, the inner outputs are <span class="chem">u = e^{0.5x} &gt; 0</span>; for <span class="chem">g ∘ f</span>, they are the outputs of the quadratic.
        "解読：合成関数の値域は、内側の関数が外側の関数にどんな値を渡せるかで決まります。<span class=\"chem\">f ∘ g</span> では内側の出力は <span class=\"chem\">u = e^{0.5x} &gt; 0</span>、<span class=\"chem\">g ∘ f</span> では 2 次関数の出力です。",
        // EN: Complete the square: <span class="chem">f(u) = (u - 2)^2 - 3</span>. Is <span class="chem">u = 2</span> one of the values <span class="chem">e^{0.5x}</span> can take?
        "平方完成します：<span class=\"chem\">f(u) = (u - 2)^2 - 3</span>。<span class=\"chem\">u = 2</span> は <span class=\"chem\">e^{0.5x}</span> がとりうる値ですか？",
        // EN: Check each range on the GDC by graphing the composite and finding its minimum.
        "GDC で合成関数のグラフを描いて最小値を求め、それぞれの値域を確かめます。",
      ],
      // EN: <p>Decode: work out what the inner function feeds in, then apply the outer function to that set.<br>(a) <span class="chem">(f ∘ g)(x) = e^x - 4e^{0.5x} + 1</span>.<br>(b) GDC zeros: <span class="chem">x ≈ ±2.63</span> (exactly <span class="chem">x = 2 ln(2 +- sqrt(3))</span>, and these are negatives of each other because <span class="chem">(2 + sqrt(3))(2 - sqrt(3)) = 1</span>).<br>(c) <span class="chem">f(u) = (u - 2)^2 - 3</span> with <span class="chem">u = e^{0.5x} &gt; 0</span>. The value <span class="chem">u = 2</span> is attained (at <span class="chem">x = 2 ln 2</span>), so the minimum <span class="chem">-3</span> is reached and the range is <span class="chem">(f ∘ g)(x) &gt;= -3</span>.<br>(d) <span class="chem">f(x) &gt;= -3</span> for all real <span class="chem">x</span>, and <span class="chem">g</span> is increasing, so <span class="chem">(g ∘ f)(x) &gt;= e^{-1.5} ≈ 0.223</span>.</p>
      solution: "<p>解読：内側の関数が渡す値の集合を求め、その集合に外側の関数を施します。<br>(a) <span class=\"chem\">(f ∘ g)(x) = e^x - 4e^{0.5x} + 1</span>。<br>(b) GDC で零点を求めると <span class=\"chem\">x ≈ ±2.63</span> です（厳密には <span class=\"chem\">x = 2 ln(2 +- sqrt(3))</span> で、<span class=\"chem\">(2 + sqrt(3))(2 - sqrt(3)) = 1</span> なので互いに符号が反対の値です）。<br>(c) <span class=\"chem\">f(u) = (u - 2)^2 - 3</span>、<span class=\"chem\">u = e^{0.5x} &gt; 0</span> です。値 <span class=\"chem\">u = 2</span> は（<span class=\"chem\">x = 2 ln 2</span> で）とるので、最小値 <span class=\"chem\">-3</span> に達し、値域は <span class=\"chem\">(f ∘ g)(x) &gt;= -3</span> です。<br>(d) すべての実数 <span class=\"chem\">x</span> で <span class=\"chem\">f(x) &gt;= -3</span> で、<span class=\"chem\">g</span> は増加関数なので、<span class=\"chem\">(g ∘ f)(x) &gt;= e^{-1.5} ≈ 0.223</span> です。</p>",
      // EN: <p>(a) <span class="chem">e^x - 4e^{0.5x} + 1</span>; (b) <span class="chem">x = -2.63</span> or <span class="chem">x = 2.63</span>; (c) <span class="chem">(f ∘ g)(x) &gt;= -3</span>; (d) <span class="chem">(g ∘ f)(x) &gt;= 0.223</span>.</p>
      answer: "<p>(a) <span class=\"chem\">e^x - 4e^{0.5x} + 1</span>；(b) <span class=\"chem\">x = -2.63</span> または <span class=\"chem\">x = 2.63</span>；(c) <span class=\"chem\">(f ∘ g)(x) &gt;= -3</span>；(d) <span class=\"chem\">(g ∘ f)(x) &gt;= 0.223</span>。</p>",
      markscheme: [
        // EN: A1: (f ∘ g)(x) = (e^{0.5x})² − 4e^{0.5x} + 1 = e^x − 4e^{0.5x} + 1.
        "A1：(f ∘ g)(x) = (e^{0.5x})² − 4e^{0.5x} + 1 = e^x − 4e^{0.5x} + 1。",
        // EN: A1: x = −2.63 (GDC, or e^{0.5x} = 2 − √3).
        "A1：x = −2.63（GDC、または e^{0.5x} = 2 − √3）。",
        // EN: A1: x = 2.63 (GDC, or e^{0.5x} = 2 + √3).
        "A1：x = 2.63（GDC、または e^{0.5x} = 2 + √3）。",
        // EN: M1: Considers f on the range of g (u = e^{0.5x} > 0), where the vertex u = 2 is attained, or finds the minimum of the graph on the GDC.
        "M1：g の値域（u = e^{0.5x} > 0）で f を考え、頂点 u = 2 がとられることを用いる。または GDC でグラフの最小値を求める。",
        // EN: A1: (f ∘ g)(x) ≥ −3.
        "A1：(f ∘ g)(x) ≥ −3。",
        // EN: M1: Uses the range of f, f(x) ≥ −3, and that g is increasing.
        "M1：f の値域 f(x) ≥ −3 と、g が増加関数であることを用いる。",
        // EN: A1: (g ∘ f)(x) ≥ e^{−1.5} = 0.223.
        "A1：(g ∘ f)(x) ≥ e^{−1.5} = 0.223。",
      ],
    },

    // ── t2-1-q053 · numeric · challenge · AHL · AHL 2.14 · 5 marks
    "t2-1-q053": {
      // EN: <p>Let <span class="chem">f(x) = x^3 - 3x^2 - 9x + 4</span> for <span class="chem">x &gt;= a</span>, where <span class="chem">a</span> is the smallest value for which <span class="chem">f</span> has an inverse. Find <span class="chem">f^{-1}(5)</span>, giving your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">x &gt;= a</span> に対して <span class=\"chem\">f(x) = x^3 - 3x^2 - 9x + 4</span> とする。ただし <span class=\"chem\">a</span> は <span class=\"chem\">f</span> が逆関数をもつような最小の値である。<span class=\"chem\">f^{-1}(5)</span> を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: there are two steps. First find the restricted domain (start at the last turning point, so that <span class="chem">f</span> is one-to-one). Then <span class="chem">f^{-1}(5)</span> is the solution of <span class="chem">f(x) = 5</span> that lies in that domain.
        "解読：2 つの段階があります。まず制限された定義域を求めます（<span class=\"chem\">f</span> が 1 対 1 になるように、最後の転回点から始めます）。次に、<span class=\"chem\">f^{-1}(5)</span> は <span class=\"chem\">f(x) = 5</span> の解のうちその定義域にあるものです。",
        // EN: Use the GDC to find the turning points of <span class="chem">f</span>: they are at <span class="chem">x = -1</span> and <span class="chem">x = 3</span>. So <span class="chem">a = 3</span>.
        "GDC を使って <span class=\"chem\">f</span> の転回点を求めます：<span class=\"chem\">x = -1</span> と <span class=\"chem\">x = 3</span> にあります。よって <span class=\"chem\">a = 3</span> です。",
        // EN: <span class="chem">f(x) = 5</span> has three real solutions. Only one of them satisfies <span class="chem">x &gt;= 3</span>.
        "<span class=\"chem\">f(x) = 5</span> は 3 個の実数解をもちます。<span class=\"chem\">x &gt;= 3</span> を満たすのはそのうち 1 個だけです。",
      ],
      // EN: <p>Decode: restrict the domain first, then solve on that branch only. The GDC (or <span class="chem">f'(x) = 3(x - 3)(x + 1)</span>) gives a local maximum at <span class="chem">x = -1</span> and a local minimum at <span class="chem">x = 3</span>, so <span class="chem">f</span> is one-to-one on <span class="chem">x &gt;= a</span> exactly when <span class="chem">a &gt;= 3</span>, and <span class="chem">a = 3</span>. The equation <span class="chem">x^3 - 3x^2 - 9x + 4 = 5</span> has solutions <span class="chem">x ≈ -1.77</span>, <span class="chem">-0.116</span> and <span class="chem">4.8845</span>. Only <span class="chem">4.8845</span> is in the domain <span class="chem">x &gt;= 3</span>, so <span class="chem">f^{-1}(5) ≈ 4.88</span> (3 s.f.).</p>
      solution: "<p>解読：まず定義域を制限し、その枝の上だけで解きます。GDC（または <span class=\"chem\">f'(x) = 3(x - 3)(x + 1)</span>）より <span class=\"chem\">x = -1</span> で極大、<span class=\"chem\">x = 3</span> で極小となるので、<span class=\"chem\">f</span> が <span class=\"chem\">x &gt;= a</span> で 1 対 1 になるのは <span class=\"chem\">a &gt;= 3</span> のときに限り、<span class=\"chem\">a = 3</span> です。方程式 <span class=\"chem\">x^3 - 3x^2 - 9x + 4 = 5</span> の解は <span class=\"chem\">x ≈ -1.77</span>、<span class=\"chem\">-0.116</span>、<span class=\"chem\">4.8845</span> です。定義域 <span class=\"chem\">x &gt;= 3</span> にあるのは <span class=\"chem\">4.8845</span> だけなので、<span class=\"chem\">f^{-1}(5) ≈ 4.88</span>（有効数字 3 桁）です。</p>",
    },

    // ── t2-1-q054 · short · challenge · SL · SL 2.2, 2.4 · 7 marks
    "t2-1-q054": {
      // EN: <p>Two courier companies charge for a delivery of <span class="chem">x</span> km. Company A charges <span class="chem">A(x) = 40 + 12 sqrt(x)</span> dollars and company B charges <span class="chem">B(x) = 15 + 0.8x</span> dollars, for <span class="chem">x &gt; 0</span>.<br>(a) Find the charge of each company for a delivery of <span class="chem">100</span> km. <strong>[2 marks]</strong><br>(b) Find the distance for which both companies charge the same amount. <strong>[2 marks]</strong><br>(c) Write down the set of distances for which company A is cheaper. <strong>[1 mark]</strong><br>(d) A customer has a budget of <span class="chem">300</span> dollars and may choose either company. Find the greatest distance that can be paid for. <strong>[2 marks]</strong></p>
      stem: "<p>2 つの宅配会社が <span class=\"chem\">x</span> km の配達に料金を請求する。会社 A の料金は <span class=\"chem\">A(x) = 40 + 12 sqrt(x)</span> ドル、会社 B の料金は <span class=\"chem\">B(x) = 15 + 0.8x</span> ドルである（<span class=\"chem\">x &gt; 0</span>）。<br>(a) <span class=\"chem\">100</span> km の配達に対するそれぞれの会社の料金を求めなさい (Find)。 <strong>[2 marks]</strong><br>(b) 2 社の料金が等しくなる距離を求めなさい。 <strong>[2 marks]</strong><br>(c) 会社 A の方が安くなる距離の集合を書きなさい (Write down)。 <strong>[1 mark]</strong><br>(d) ある客の予算は <span class=\"chem\">300</span> ドルで、どちらの会社を選んでもよい。支払える最大の距離を求めなさい。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: each company is a function of distance. "Charge the same" is an intersection of the two graphs; "cheaper" is where one graph lies below the other.
        "解読：それぞれの会社の料金は距離の関数です。「料金が等しい」は 2 つのグラフの交点、「安い」は一方のグラフがもう一方より下にあるところです。",
        // EN: Graph <span class="chem">Y_1 = 40 + 12 sqrt(x)</span> and <span class="chem">Y_2 = 15 + 0.8x</span> for <span class="chem">0 &lt; x &lt;= 600</span>, <span class="chem">0 &lt;= y &lt;= 500</span>.
        "<span class=\"chem\">0 &lt; x &lt;= 600</span>、<span class=\"chem\">0 &lt;= y &lt;= 500</span> で <span class=\"chem\">Y_1 = 40 + 12 sqrt(x)</span> と <span class=\"chem\">Y_2 = 15 + 0.8x</span> のグラフを描きます。",
        // EN: For (d), the question is asking for the input that gives an output of <span class="chem">300</span>, for whichever company allows the longer distance.
        "(d) で問われているのは、出力が <span class=\"chem\">300</span> になる入力です。より長い距離を配達できる方の会社で考えます。",
      ],
      // EN: <p>Decode: compare two models graphically; part (d) asks for an inverse value.<br>(a) <span class="chem">A(100) = 160</span> dollars, <span class="chem">B(100) = 95</span> dollars.<br>(b) GDC intersection of <span class="chem">y = 40 + 12 sqrt(x)</span> and <span class="chem">y = 15 + 0.8x</span>: <span class="chem">x ≈ 284.06</span>, about <span class="chem">284</span> km (both charge about <span class="chem">242</span> dollars).<br>(c) For large <span class="chem">x</span> the linear charge grows faster, so A is cheaper for <span class="chem">x &gt; 284</span>.<br>(d) <span class="chem">A(x) = 300 => sqrt(x) = 260/12 => x ≈ 469.4</span>; <span class="chem">B(x) = 300 => x = 356.25</span>. The greatest distance is about <span class="chem">469</span> km, using company A.</p>
      solution: "<p>解読：2 つのモデルをグラフで比較します。(d) は逆関数の値を問うています。<br>(a) <span class=\"chem\">A(100) = 160</span> ドル、<span class=\"chem\">B(100) = 95</span> ドル。<br>(b) <span class=\"chem\">y = 40 + 12 sqrt(x)</span> と <span class=\"chem\">y = 15 + 0.8x</span> の GDC での交点：<span class=\"chem\">x ≈ 284.06</span>、約 <span class=\"chem\">284</span> km（どちらの料金も約 <span class=\"chem\">242</span> ドル）。<br>(c) <span class=\"chem\">x</span> が大きいと 1 次式の料金の方が速く増えるので、A が安いのは <span class=\"chem\">x &gt; 284</span> のときです。<br>(d) <span class=\"chem\">A(x) = 300 => sqrt(x) = 260/12 => x ≈ 469.4</span>、<span class=\"chem\">B(x) = 300 => x = 356.25</span>。最大の距離は会社 A を使った約 <span class=\"chem\">469</span> km です。</p>",
      // EN: <p>(a) A: <span class="chem">160</span> dollars, B: <span class="chem">95</span> dollars; (b) <span class="chem">284</span> km; (c) <span class="chem">x &gt; 284</span>; (d) <span class="chem">469</span> km (with company A).</p>
      answer: "<p>(a) A：<span class=\"chem\">160</span> ドル、B：<span class=\"chem\">95</span> ドル；(b) <span class=\"chem\">284</span> km；(c) <span class=\"chem\">x &gt; 284</span>；(d) <span class=\"chem\">469</span> km（会社 A）。</p>",
      markscheme: [
        // EN: A1: A(100) = 40 + 12(10) = 160 dollars.
        "A1：A(100) = 40 + 12(10) = 160 ドル。",
        // EN: A1: B(100) = 15 + 80 = 95 dollars.
        "A1：B(100) = 15 + 80 = 95 ドル。",
        // EN: M1: Solves 40 + 12√x = 15 + 0.8x on the GDC (intersection).
        "M1：GDC で 40 + 12√x = 15 + 0.8x を解く（交点）。",
        // EN: A1: x = 284 km.
        "A1：x = 284 km。",
        // EN: A1: Company A is cheaper for x > 284 (B is cheaper for 0 < x < 284).
        "A1：x > 284 のとき会社 A の方が安い（0 < x < 284 では B の方が安い）。",
        // EN: M1: Solves A(x) = 300 and B(x) = 300 (or recognises A is cheaper at long distances and solves A(x) = 300).
        "M1：A(x) = 300 と B(x) = 300 を解く（または長距離では A の方が安いと認識して A(x) = 300 を解く）。",
        // EN: A1: Greatest distance 469 km, using company A (company B allows only 356 km).
        "A1：最大の距離は会社 A を使って 469 km（会社 B では 356 km まで）。",
      ],
    },

    // ── t2-1-q055 · numeric · challenge · SL · SL 2.2, 2.5 · 4 marks
    "t2-1-q055": {
      // EN: <p>Let <span class="chem">f(x) = x^3 + 2x</span> for <span class="chem">x ∈ ℝ</span>. The function <span class="chem">f</span> is increasing, so <span class="chem">f^{-1}</span> exists. Find the value of <span class="chem">(f^{-1} ∘ f^{-1})(10)</span>, giving your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">x ∈ ℝ</span> に対して <span class=\"chem\">f(x) = x^3 + 2x</span> とする。関数 <span class=\"chem\">f</span> は増加関数なので <span class=\"chem\">f^{-1}</span> が存在する。<span class=\"chem\">(f^{-1} ∘ f^{-1})(10)</span> の値を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: <span class="chem">(f^{-1} ∘ f^{-1})(10) = f^{-1}(f^{-1}(10))</span>. You cannot write <span class="chem">f^{-1}</span> as a formula, but you can find each inverse value by solving an equation.
        "解読：<span class=\"chem\">(f^{-1} ∘ f^{-1})(10) = f^{-1}(f^{-1}(10))</span> です。<span class=\"chem\">f^{-1}</span> を式で書くことはできませんが、方程式を解けばそれぞれの逆関数の値が求められます。",
        // EN: First solve <span class="chem">x^3 + 2x = 10</span> to get <span class="chem">p = f^{-1}(10)</span>. Store it in the GDC.
        "まず <span class=\"chem\">x^3 + 2x = 10</span> を解いて <span class=\"chem\">p = f^{-1}(10)</span> を求めます。それを GDC に保存します。",
        // EN: Then solve <span class="chem">x^3 + 2x = p</span>. Do not round <span class="chem">p</span> before the second step.
        "次に <span class=\"chem\">x^3 + 2x = p</span> を解きます。2 段階目の前に <span class=\"chem\">p</span> を丸めてはいけません。",
      ],
      // EN: <p>Decode: applying <span class="chem">f^{-1}</span> twice means solving <span class="chem">f(x) = ...</span> twice. Step 1: <span class="chem">x^3 + 2x = 10</span> gives <span class="chem">p = f^{-1}(10) ≈ 1.84742</span>. Step 2: <span class="chem">x^3 + 2x = 1.84742</span> gives <span class="chem">x ≈ 0.729556</span>. So <span class="chem">(f^{-1} ∘ f^{-1})(10) ≈ 0.730</span> (3 s.f.). Check: <span class="chem">f(f(0.729556)) = f(1.84742) ≈ 10</span>.</p>
      solution: "<p>解読：<span class=\"chem\">f^{-1}</span> を 2 回施すことは、<span class=\"chem\">f(x) = ...</span> を 2 回解くことです。第 1 段階：<span class=\"chem\">x^3 + 2x = 10</span> より <span class=\"chem\">p = f^{-1}(10) ≈ 1.84742</span>。第 2 段階：<span class=\"chem\">x^3 + 2x = 1.84742</span> より <span class=\"chem\">x ≈ 0.729556</span>。よって <span class=\"chem\">(f^{-1} ∘ f^{-1})(10) ≈ 0.730</span>（有効数字 3 桁）です。確認：<span class=\"chem\">f(f(0.729556)) = f(1.84742) ≈ 10</span>。</p>",
    },

    // ── t2-1-q056 · short · challenge · SL · SL 2.2, 2.3, 2.4 · 8 marks
    "t2-1-q056": {
      // EN: <p>Let <span class="chem">f(x) = 4x/(x^2 + 1) + 1</span> for <span class="chem">-6 &lt;= x &lt;= 6</span>.<br>(a) Sketch the graph of <span class="chem">y = f(x)</span>. Label the coordinates of the local maximum and local minimum points, the <span class="chem">x</span>-intercepts and both end points. <strong>[4 marks]</strong><br>(b) Write down the range of <span class="chem">f</span>. <strong>[2 marks]</strong><br>(c) Find the number of solutions of the equation <span class="chem">f(x) = 1.5</span>. Justify your answer. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">-6 &lt;= x &lt;= 6</span> に対して <span class=\"chem\">f(x) = 4x/(x^2 + 1) + 1</span> とする。<br>(a) <span class=\"chem\">y = f(x)</span> のグラフの概形を描きなさい (Sketch)。極大点と極小点、<span class=\"chem\">x</span> 軸との交点、両端点の座標を書き入れなさい。 <strong>[4 marks]</strong><br>(b) <span class=\"chem\">f</span> の値域を書きなさい (Write down)。 <strong>[2 marks]</strong><br>(c) 方程式 <span class=\"chem\">f(x) = 1.5</span> の解の個数を求め (Find)、理由を示しなさい (Justify)。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: for (c), the answer depends on the <strong>domain</strong>. Count the intersections of <span class="chem">y = f(x)</span> and <span class="chem">y = 1.5</span> only for <span class="chem">-6 &lt;= x &lt;= 6</span>.
        "解読：(c) の答えは<strong>定義域</strong>によって決まります。<span class=\"chem\">y = f(x)</span> と <span class=\"chem\">y = 1.5</span> の交点を、<span class=\"chem\">-6 &lt;= x &lt;= 6</span> の範囲だけで数えます。",
        // EN: Set the window to <span class="chem">-6 &lt;= x &lt;= 6</span>, <span class="chem">-2 &lt;= y &lt;= 4</span>. Use the maximum, minimum and zero tools, and evaluate <span class="chem">f(-6)</span> and <span class="chem">f(6)</span>.
        "表示範囲を <span class=\"chem\">-6 &lt;= x &lt;= 6</span>、<span class=\"chem\">-2 &lt;= y &lt;= 4</span> にします。最大・最小・零点の機能を使い、<span class=\"chem\">f(-6)</span> と <span class=\"chem\">f(6)</span> を計算します。",
        // EN: Compare <span class="chem">f(6)</span> with <span class="chem">1.5</span>. Does the curve drop below <span class="chem">1.5</span> before <span class="chem">x = 6</span>?
        "<span class=\"chem\">f(6)</span> と <span class=\"chem\">1.5</span> を比べます。曲線は <span class=\"chem\">x = 6</span> までに <span class=\"chem\">1.5</span> より下がりますか？",
      ],
      // EN: <p>Decode: (c) is a counting question in which the domain decides the answer.<br>(a) GDC: minimum <span class="chem">(-1, -1)</span>, maximum <span class="chem">(1, 3)</span>, zeros <span class="chem">x = -2 +- sqrt(3) ≈ -3.73, -0.268</span>, end points <span class="chem">f(-6) = 13/37 ≈ 0.351</span> and <span class="chem">f(6) = 61/37 ≈ 1.65</span>.<br>(b) <span class="chem">-1 &lt;= f(x) &lt;= 3</span>.<br>(c) <span class="chem">f(x) = 1.5 => 4x/(x^2 + 1) = 0.5 => x^2 - 8x + 1 = 0 => x = 4 +- sqrt(15) ≈ 0.127, 7.87</span>. Only <span class="chem">0.127</span> lies in the domain. On the GDC, the curve stays above <span class="chem">1.5</span> from <span class="chem">x ≈ 0.127</span> to <span class="chem">x = 6</span> (where <span class="chem">f(6) ≈ 1.65</span>). There is exactly <strong>one</strong> solution.</p>
      solution: "<p>解読：(c) は定義域によって答えが決まる個数の問題です。<br>(a) GDC：極小点 <span class=\"chem\">(-1, -1)</span>、極大点 <span class=\"chem\">(1, 3)</span>、零点 <span class=\"chem\">x = -2 +- sqrt(3) ≈ -3.73, -0.268</span>、端点 <span class=\"chem\">f(-6) = 13/37 ≈ 0.351</span> と <span class=\"chem\">f(6) = 61/37 ≈ 1.65</span>。<br>(b) <span class=\"chem\">-1 &lt;= f(x) &lt;= 3</span>。<br>(c) <span class=\"chem\">f(x) = 1.5 => 4x/(x^2 + 1) = 0.5 => x^2 - 8x + 1 = 0 => x = 4 +- sqrt(15) ≈ 0.127, 7.87</span>。定義域にあるのは <span class=\"chem\">0.127</span> だけです。GDC では、曲線は <span class=\"chem\">x ≈ 0.127</span> から <span class=\"chem\">x = 6</span>（<span class=\"chem\">f(6) ≈ 1.65</span>）まで <span class=\"chem\">1.5</span> より上にあります。解はちょうど <strong>1 個</strong>です。</p>",
      // EN: <p>(a) Starts at <span class="chem">(-6, 0.351)</span>, falls through <span class="chem">(-3.73, 0)</span> to the minimum <span class="chem">(-1, -1)</span>, rises through <span class="chem">(-0.268, 0)</span> to the maximum <span class="chem">(1, 3)</span>, then falls to <span class="chem">(6, 1.65)</span>; (b) <span class="chem">-1 &lt;= f(x) &lt;= 3</span>; (c) one solution, <span class="chem">x ≈ 0.127</span>, because the other solution of <span class="chem">f(x) = 1.5</span> is <span class="chem">x ≈ 7.87</span>, outside the domain.</p>
      answer: "<p>(a) <span class=\"chem\">(-6, 0.351)</span> から始まり、<span class=\"chem\">(-3.73, 0)</span> を通って極小点 <span class=\"chem\">(-1, -1)</span> まで減少し、<span class=\"chem\">(-0.268, 0)</span> を通って極大点 <span class=\"chem\">(1, 3)</span> まで増加し、その後 <span class=\"chem\">(6, 1.65)</span> まで減少する；(b) <span class=\"chem\">-1 &lt;= f(x) &lt;= 3</span>；(c) 解は 1 個、<span class=\"chem\">x ≈ 0.127</span>。<span class=\"chem\">f(x) = 1.5</span> のもう 1 つの解 <span class=\"chem\">x ≈ 7.87</span> は定義域の外にあるから。</p>",
      markscheme: [
        // EN: A1: Correct shape on −6 ≤ x ≤ 6 only (one minimum, one maximum).
        "A1：−6 ≤ x ≤ 6 だけで形が正しい（極小 1 つ、極大 1 つ）。",
        // EN: A1: Minimum (−1, −1) and maximum (1, 3) labelled.
        "A1：極小点 (−1, −1) と極大点 (1, 3) が書き入れてある。",
        // EN: A1: x-intercepts (−3.73, 0) and (−0.268, 0) labelled.
        "A1：x 軸との交点 (−3.73, 0) と (−0.268, 0) が書き入れてある。",
        // EN: A1: End points (−6, 0.351) and (6, 1.65) labelled.
        "A1：端点 (−6, 0.351) と (6, 1.65) が書き入れてある。",
        // EN: A1: Lower bound −1 (from the minimum point).
        "A1：下限 −1（極小点から）。",
        // EN: A1: Upper bound 3, with both included: −1 ≤ f(x) ≤ 3.
        "A1：上限 3 で、両端を含む：−1 ≤ f(x) ≤ 3。",
        // EN: R1: The line y = 1.5 meets the curve only once on the domain: for 1 < x ≤ 6, f(x) ≥ f(6) ≈ 1.65 > 1.5, and the second root x ≈ 7.87 lies outside the domain.
        "R1：定義域では直線 y = 1.5 は曲線と 1 回だけ交わる：1 < x ≤ 6 では f(x) ≥ f(6) ≈ 1.65 > 1.5 であり、もう 1 つの解 x ≈ 7.87 は定義域の外にある。",
        // EN: A1: One solution (x ≈ 0.127).
        "A1：解は 1 個（x ≈ 0.127）。",
      ],
    },

    // ── t2-1-q057 · numeric · challenge · SL · SL 2.2, 2.4 · 5 marks
    "t2-1-q057": {
      // EN: <p>Let <span class="chem">f(x) = sqrt(4 - x) ln(x + 1)</span>. The function <span class="chem">f</span> is defined on its largest possible real domain, and its range is <span class="chem">f(x) &lt;= M</span>. Find the value of <span class="chem">M</span>, giving your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">f(x) = sqrt(4 - x) ln(x + 1)</span> とする。関数 <span class=\"chem\">f</span> は最大の実数定義域で定義され、その値域は <span class=\"chem\">f(x) &lt;= M</span> である。<span class=\"chem\">M</span> の値を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: first find the domain from both pieces: <span class="chem">4 - x &gt;= 0</span> and <span class="chem">x + 1 &gt; 0</span>. The range has the form <span class="chem">f(x) &lt;= M</span>, so <span class="chem">M</span> is the greatest value of <span class="chem">f</span> on that domain.
        "解読：まず 2 つの部分から定義域を求めます：<span class=\"chem\">4 - x &gt;= 0</span> かつ <span class=\"chem\">x + 1 &gt; 0</span>。値域は <span class=\"chem\">f(x) &lt;= M</span> の形なので、<span class=\"chem\">M</span> はその定義域における <span class=\"chem\">f</span> の最大値です。",
        // EN: The domain is <span class="chem">-1 &lt; x &lt;= 4</span>. Graph <span class="chem">f</span> on this interval: it tends to <span class="chem">-infty</span> as <span class="chem">x -&gt; -1^+</span>.
        "定義域は <span class=\"chem\">-1 &lt; x &lt;= 4</span> です。この区間で <span class=\"chem\">f</span> のグラフを描きます：<span class=\"chem\">x -&gt; -1^+</span> のとき <span class=\"chem\">-infty</span> に向かいます。",
        // EN: Use the maximum tool on the GDC.
        "GDC の最大機能を使います。",
      ],
      // EN: <p>Decode: the range is bounded above only, so <span class="chem">M</span> is the maximum value of <span class="chem">f</span> on its domain. Domain: <span class="chem">4 - x &gt;= 0</span> and <span class="chem">x + 1 &gt; 0</span>, so <span class="chem">-1 &lt; x &lt;= 4</span>. As <span class="chem">x -&gt; -1^+</span>, <span class="chem">ln(x + 1) -&gt; -infty</span> while <span class="chem">sqrt(4 - x) -&gt; sqrt(5)</span>, so <span class="chem">f -&gt; -infty</span>; and <span class="chem">f(4) = 0</span>. The GDC maximum is at <span class="chem">x ≈ 2.17</span>, with value <span class="chem">f ≈ 1.56074</span>. So <span class="chem">M ≈ 1.56</span> (3 s.f.).</p>
      solution: "<p>解読：値域は上に有界なだけなので、<span class=\"chem\">M</span> は定義域における <span class=\"chem\">f</span> の最大値です。定義域：<span class=\"chem\">4 - x &gt;= 0</span> かつ <span class=\"chem\">x + 1 &gt; 0</span> より <span class=\"chem\">-1 &lt; x &lt;= 4</span>。<span class=\"chem\">x -&gt; -1^+</span> のとき <span class=\"chem\">ln(x + 1) -&gt; -infty</span>、一方 <span class=\"chem\">sqrt(4 - x) -&gt; sqrt(5)</span> なので <span class=\"chem\">f -&gt; -infty</span>、また <span class=\"chem\">f(4) = 0</span> です。GDC での最大は <span class=\"chem\">x ≈ 2.17</span> で、値は <span class=\"chem\">f ≈ 1.56074</span> です。よって <span class=\"chem\">M ≈ 1.56</span>（有効数字 3 桁）です。</p>",
    },

    // ── t2-1-q058 · short · challenge · SL · SL 2.2, 2.5 · 7 marks
    "t2-1-q058": {
      // EN: <p>Oil leaking from a damaged tanker spreads as a circle on the sea. The radius of the circle, in metres, <span class="chem">t</span> hours after the leak starts is <span class="chem">r(t) = 80t^{0.6}</span>. The area of a circle of radius <span class="chem">r</span> metres is <span class="chem">S(r) = pi r^2</span> square metres.<br>(a) Find an expression for <span class="chem">(S ∘ r)(t)</span> in the form <span class="chem">k t^n</span>, giving the exact value of <span class="chem">k</span>. <strong>[2 marks]</strong><br>(b) The coastguard must be told when the slick covers <span class="chem">1</span> <span class="unit">km2</span>. Find how many hours after the leak starts this happens. <strong>[3 marks]</strong><br>(c) Find <span class="chem">(S ∘ r)^{-1}(250 000)</span> and explain what it represents. <strong>[2 marks]</strong></p>
      stem: "<p>損傷したタンカーから漏れた油が、海上に円形に広がる。漏れ始めてから <span class=\"chem\">t</span> 時間後の円の半径（メートル）は <span class=\"chem\">r(t) = 80t^{0.6}</span> である。半径 <span class=\"chem\">r</span> メートルの円の面積は <span class=\"chem\">S(r) = pi r^2</span> 平方メートルである。<br>(a) <span class=\"chem\">(S ∘ r)(t)</span> の式を <span class=\"chem\">k t^n</span> の形で求め (Find)、<span class=\"chem\">k</span> は厳密値で答えなさい。 <strong>[2 marks]</strong><br>(b) 油膜が <span class=\"chem\">1</span> <span class=\"unit\">km2</span> を覆ったら沿岸警備隊に知らせなければならない。それが漏れ始めてから何時間後かを求めなさい。 <strong>[3 marks]</strong><br>(c) <span class=\"chem\">(S ∘ r)^{-1}(250 000)</span> を求め、それが何を表すかを説明しなさい (explain)。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: area depends on radius, and radius depends on time, so area as a function of time is <span class="chem">S(r(t))</span>. Watch the units: the model uses metres, but (b) gives an area in square kilometres.
        "解読：面積は半径で決まり、半径は時間で決まるので、時間の関数としての面積は <span class=\"chem\">S(r(t))</span> です。単位に注意しましょう：モデルはメートルを使いますが、(b) の面積は平方キロメートルです。",
        // EN: <span class="chem">1</span> <span class="unit">km2</span> <span class="chem">= 1000 × 1000 = 10^6</span> <span class="unit">m2</span>, not <span class="chem">1000</span> <span class="unit">m2</span>.
        "<span class=\"chem\">1</span> <span class=\"unit\">km2</span> <span class=\"chem\">= 1000 × 1000 = 10^6</span> <span class=\"unit\">m2</span> であり、<span class=\"chem\">1000</span> <span class=\"unit\">m2</span> ではありません。",
        // EN: An inverse takes an output (an area) and returns the input (a time). Solve <span class="chem">6400 pi t^{1.2} = 250 000</span>.
        "逆関数は出力（面積）を受け取って入力（時間）を返します。<span class=\"chem\">6400 pi t^{1.2} = 250 000</span> を解きます。",
      ],
      // EN: <p>Decode: build the composite, convert units, then use the inverse to go from area back to time.<br>(a) <span class="chem">(S ∘ r)(t) = pi(80t^{0.6})^2 = 6400 pi t^{1.2}</span>.<br>(b) <span class="chem">1</span> <span class="unit">km2</span> <span class="chem">= 10^6</span> <span class="unit">m2</span>. <span class="chem">6400 pi t^{1.2} = 10^6 => t^{1.2} ≈ 49.736 => t ≈ 25.9</span> hours.<br>(c) <span class="chem">6400 pi t^{1.2} = 250 000 => t ≈ 8.17</span>. So <span class="chem">(S ∘ r)^{-1}(250 000) ≈ 8.17</span>: the slick covers <span class="chem">250 000</span> <span class="unit">m2</span> about <span class="chem">8.17</span> hours after the leak starts.</p>
      solution: "<p>解読：合成関数をつくり、単位を換算し、逆関数を使って面積から時間に戻ります。<br>(a) <span class=\"chem\">(S ∘ r)(t) = pi(80t^{0.6})^2 = 6400 pi t^{1.2}</span>。<br>(b) <span class=\"chem\">1</span> <span class=\"unit\">km2</span> <span class=\"chem\">= 10^6</span> <span class=\"unit\">m2</span>。<span class=\"chem\">6400 pi t^{1.2} = 10^6 => t^{1.2} ≈ 49.736 => t ≈ 25.9</span> 時間。<br>(c) <span class=\"chem\">6400 pi t^{1.2} = 250 000 => t ≈ 8.17</span>。よって <span class=\"chem\">(S ∘ r)^{-1}(250 000) ≈ 8.17</span> で、漏れ始めてから約 <span class=\"chem\">8.17</span> 時間後に油膜が <span class=\"chem\">250 000</span> <span class=\"unit\">m2</span> を覆うことを表します。</p>",
      // EN: <p>(a) <span class="chem">(S ∘ r)(t) = 6400 pi t^{1.2}</span>; (b) <span class="chem">25.9</span> hours; (c) <span class="chem">8.17</span>: the number of hours after the leak starts at which the slick covers <span class="chem">250 000</span> <span class="unit">m2</span> (<span class="chem">0.25</span> <span class="unit">km2</span>).</p>
      answer: "<p>(a) <span class=\"chem\">(S ∘ r)(t) = 6400 pi t^{1.2}</span>；(b) <span class=\"chem\">25.9</span> 時間；(c) <span class=\"chem\">8.17</span>：油膜が <span class=\"chem\">250 000</span> <span class=\"unit\">m2</span>（<span class=\"chem\">0.25</span> <span class=\"unit\">km2</span>）を覆うのが、漏れ始めてから何時間後かを表す。</p>",
      markscheme: [
        // EN: M1: Substitutes r(t) into S: π(80t^{0.6})².
        "M1：r(t) を S に代入する：π(80t^{0.6})²。",
        // EN: A1: (S ∘ r)(t) = 6400π t^{1.2}.
        "A1：(S ∘ r)(t) = 6400π t^{1.2}。",
        // EN: M1: Converts units: 1 km² = 1 000 000 m².
        "M1：単位を換算する：1 km² = 1 000 000 m²。",
        // EN: M1: Solves 6400π t^{1.2} = 1 000 000 (GDC or logarithms).
        "M1：6400π t^{1.2} = 1 000 000 を解く（GDC または対数）。",
        // EN: A1: t = 25.9 hours.
        "A1：t = 25.9 時間。",
        // EN: A1: (S ∘ r)⁻¹(250 000) = 8.17.
        "A1：(S ∘ r)⁻¹(250 000) = 8.17。",
        // EN: R1: It is the time, in hours after the leak starts, at which the area of the slick is 250 000 m².
        "R1：油膜の面積が 250 000 m² になる時刻（漏れ始めてからの時間数）である。",
      ],
    },

    // ── t2-1-q059 · numeric · challenge · SL · SL 2.2, 2.4 · 5 marks
    "t2-1-q059": {
      // EN: <p>Let <span class="chem">f(x) = 1 - x^3</span> for <span class="chem">x ∈ ℝ</span>. The graphs of <span class="chem">y = f(x)</span> and <span class="chem">y = f^{-1}(x)</span> intersect at exactly five points. Find the largest <span class="chem">x</span>-coordinate of these five points, giving your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">x ∈ ℝ</span> に対して <span class=\"chem\">f(x) = 1 - x^3</span> とする。<span class=\"chem\">y = f(x)</span> と <span class=\"chem\">y = f^{-1}(x)</span> のグラフはちょうど 5 点で交わる。この 5 点の <span class=\"chem\">x</span> 座標のうち最大のものを求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: this <span class="chem">f</span> is <strong>decreasing</strong>, so its graph can meet the graph of <span class="chem">f^{-1}</span> at points that are not on <span class="chem">y = x</span>. Solving <span class="chem">f(x) = x</span> finds only one of the five points.
        "解読：この <span class=\"chem\">f</span> は<strong>減少関数</strong>なので、そのグラフは <span class=\"chem\">y = x</span> 上にない点で <span class=\"chem\">f^{-1}</span> のグラフと交わることがあります。<span class=\"chem\">f(x) = x</span> を解いても 5 点のうち 1 点しか見つかりません。",
        // EN: Find <span class="chem">f^{-1}(x) = (1 - x)^{1/3}</span> (a cube root, defined for all real <span class="chem">x</span>; use the GDC cube-root function so that negative values of <span class="chem">1 - x</span> are accepted), then graph both curves on the GDC.
        "<span class=\"chem\">f^{-1}(x) = (1 - x)^{1/3}</span> を求め（3 乗根で、すべての実数 <span class=\"chem\">x</span> で定義されます。<span class=\"chem\">1 - x</span> が負の値でも受け付けるように GDC の 3 乗根関数を使います）、GDC で両方の曲線を描きます。",
        // EN: Alternatively, a point <span class="chem">(a, f(a))</span> lies on both graphs exactly when <span class="chem">f(f(a)) = a</span>. Graph <span class="chem">y = f(f(x)) - x</span> and find its zeros. Two of them are easy to check by hand: <span class="chem">f(0) = 1</span> and <span class="chem">f(1) = 0</span>.
        "別の方法：点 <span class=\"chem\">(a, f(a))</span> が両方のグラフ上にあるのは、<span class=\"chem\">f(f(a)) = a</span> のときに限ります。<span class=\"chem\">y = f(f(x)) - x</span> のグラフを描いて零点を求めます。そのうち 2 つは手で簡単に確かめられます：<span class=\"chem\">f(0) = 1</span>、<span class=\"chem\">f(1) = 0</span>。",
      ],
      // EN: <p>Decode: for a decreasing function, intersections of <span class="chem">f</span> and <span class="chem">f^{-1}</span> need not lie on <span class="chem">y = x</span>, so solving <span class="chem">f(x) = x</span> is not enough. <span class="chem">f^{-1}(x) = (1 - x)^{1/3}</span>. The GDC gives the intersections of <span class="chem">y = 1 - x^3</span> and <span class="chem">y = (1 - x)^{1/3}</span> at <span class="chem">x ≈ -0.536</span>, <span class="chem">x = 0</span>, <span class="chem">x ≈ 0.682</span>, <span class="chem">x = 1</span> and <span class="chem">x ≈ 1.1537</span>. The points are <span class="chem">(-0.536, 1.15)</span>, <span class="chem">(0, 1)</span>, <span class="chem">(0.682, 0.682)</span> (the only one on <span class="chem">y = x</span>), <span class="chem">(1, 0)</span> and <span class="chem">(1.15, -0.536)</span>. The four points off <span class="chem">y = x</span> form two pairs of reflections in <span class="chem">y = x</span>: <span class="chem">(0, 1)</span> with <span class="chem">(1, 0)</span>, and <span class="chem">(-0.536, 1.15)</span> with <span class="chem">(1.15, -0.536)</span>. The largest <span class="chem">x</span>-coordinate is <span class="chem">1.15</span> (3 s.f.).</p>
      solution: "<p>解読：減少関数では、<span class=\"chem\">f</span> と <span class=\"chem\">f^{-1}</span> の交点が <span class=\"chem\">y = x</span> 上にあるとは限らないので、<span class=\"chem\">f(x) = x</span> を解くだけでは不十分です。<span class=\"chem\">f^{-1}(x) = (1 - x)^{1/3}</span>。GDC では、<span class=\"chem\">y = 1 - x^3</span> と <span class=\"chem\">y = (1 - x)^{1/3}</span> の交点は <span class=\"chem\">x ≈ -0.536</span>、<span class=\"chem\">x = 0</span>、<span class=\"chem\">x ≈ 0.682</span>、<span class=\"chem\">x = 1</span>、<span class=\"chem\">x ≈ 1.1537</span> です。交点は <span class=\"chem\">(-0.536, 1.15)</span>、<span class=\"chem\">(0, 1)</span>、<span class=\"chem\">(0.682, 0.682)</span>（<span class=\"chem\">y = x</span> 上にある唯一の点）、<span class=\"chem\">(1, 0)</span>、<span class=\"chem\">(1.15, -0.536)</span> です。<span class=\"chem\">y = x</span> 上にない 4 点は、<span class=\"chem\">y = x</span> に関して対称な 2 組になります：<span class=\"chem\">(0, 1)</span> と <span class=\"chem\">(1, 0)</span>、<span class=\"chem\">(-0.536, 1.15)</span> と <span class=\"chem\">(1.15, -0.536)</span>。最大の <span class=\"chem\">x</span> 座標は <span class=\"chem\">1.15</span>（有効数字 3 桁）です。</p>",
    },

  }
});
