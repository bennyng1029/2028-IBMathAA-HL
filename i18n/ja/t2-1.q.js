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
