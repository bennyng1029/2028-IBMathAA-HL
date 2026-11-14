/* t2-3.q — zh-Hant question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't2-3.q', {
  questions: {

    // ── t2-3-q001 · mcq · foundation · SL · SL 2.11 · 2 marks
    "t2-3-q001": {
      // EN: <p>The point <span class="chem">P(4, -3)</span> lies on the graph of <span class="chem">y = f(x)</span>. Find the coordinates of the image of <span class="chem">P</span> on the graph of <span class="chem">y = 2 f(x - 1) + 5</span>.</p>
      stem: "<p>點 <span class=\"chem\">P(4, -3)</span> 位於 <span class=\"chem\">y = f(x)</span> 的圖像上。求 (Find) <span class=\"chem\">P</span> 在 <span class=\"chem\">y = 2 f(x - 1) + 5</span> 圖像上的像的坐標。</p>",
      options: [
        // EN: <span class="chem">(5, -1)</span>
        "<span class=\"chem\">(5, -1)</span>",
        // EN: <span class="chem">(3, -1)</span>
        "<span class=\"chem\">(3, -1)</span>",
        // EN: <span class="chem">(5, -11)</span>
        "<span class=\"chem\">(5, -11)</span>",
        // EN: <span class="chem">(8, 2)</span>
        "<span class=\"chem\">(8, 2)</span>",
      ],
      hints: [
        // EN: Horizontal shift <span class="chem">f(x - 1)</span> adds <span class="chem">1</span> to the <span class="chem">x</span>-coordinate.
        "水平平移 <span class=\"chem\">f(x - 1)</span> 會把 <span class=\"chem\">x</span> 坐標加上 <span class=\"chem\">1</span>。",
        // EN: Vertical stretch and shift <span class=\"chem\">2y + 5</span> gives <span class=\"chem\">2(-3) + 5</span>.
        "鉛垂伸縮與平移 <span class=\"chem\">2y + 5</span> 得出 <span class=\"chem\">2(-3) + 5</span>。",
      ],
      // EN: <p>Using <span class="chem">x_new = x_0 + 1 = 5</span> and <span class="chem">y_new = 2y_0 + 5 = 2(-3) + 5 = -1</span>, the image is <span class="chem">(5, -1)</span>.</p>
      solution: "<p>利用 <span class=\"chem\">x_new = x_0 + 1 = 5</span> 及 <span class=\"chem\">y_new = 2y_0 + 5 = 2(-3) + 5 = -1</span>，所得的像為 <span class=\"chem\">(5, -1)</span>。</p>",
      misconception: {
        // EN (option B): Inside f(x − 1), subtracting 1 shifts the graph 1 unit RIGHT (x_new = 4 + 1 = 5), not left.
        "1": "在 f(x − 1) 括號內減 1 會把圖像向右平移 1 單位（x_new = 4 + 1 = 5），而非向左。",
        // EN (option C): Vertical stretch by 2 then shift up 5 gives 2(−3) + 5 = −1, not −11.
        "2": "先鉛垂伸縮 2 倍再向上平移 5 單位得出 2(−3) + 5 = −1，而非 −11。",
        // EN (option D): The horizontal transformation is a translation by +1, not a stretch by 2.
        "3": "水平變換是平移 +1，而非伸縮 2 倍。",
      },
    },

    // ── t2-3-q002 · numeric · foundation · SL · SL 2.11 · 2 marks
    "t2-3-q002": {
      // EN: <p>The point <span class="chem">(-6, 5)</span> lies on <span class="chem">y = f(x)</span>. Find the <span class="chem">x</span>-coordinate of its image on the graph of <span class="chem">y = -f(3x + 3) + 2</span>.</p>
      stem: "<p>點 <span class=\"chem\">(-6, 5)</span> 位於 <span class=\"chem\">y = f(x)</span> 上。求 (Find) 它在 <span class=\"chem\">y = -f(3x + 3) + 2</span> 圖像上的像的 <span class=\"chem\">x</span> 坐標。</p>",
      hints: [
        // EN: Set the inside expression equal to the original <span class="chem">x</span>-coordinate: <span class="chem">3x_new + 3 = -6</span>.
        "令括號內的算式等於原來的 <span class=\"chem\">x</span> 坐標：<span class=\"chem\">3x_new + 3 = -6</span>。",
        // EN: Solve <span class="chem">3x_new = -9</span> for <span class="chem">x_new</span>.
        "解 <span class=\"chem\">3x_new = -9</span> 以求 <span class=\"chem\">x_new</span>。",
      ],
      // EN: <p>Equating arguments gives <span class="chem">3x_new + 3 = -6 => 3x_new = -9 => x_new = -3</span>. (Factoring <span class="chem">3(x + 1)</span> also shows horizontal stretch by <span class="chem">1/3</span> to <span class="chem">-2</span>, then shift <span class="chem">1</span> unit left to <span class="chem">-3</span>.)</p>
      solution: "<p>令自變數相等得 <span class=\"chem\">3x_new + 3 = -6 => 3x_new = -9 => x_new = -3</span>。（抽出公因數 <span class=\"chem\">3(x + 1)</span> 亦可看出先水平伸縮 <span class=\"chem\">1/3</span> 倍至 <span class=\"chem\">-2</span>，再向左平移 <span class=\"chem\">1</span> 單位至 <span class=\"chem\">-3</span>。）</p>",
    },

    // ── t2-3-q003 · order · exam · SL · SL 2.11 · 4 marks
    "t2-3-q003": {
      // EN: <p>Arrange these transformations in a valid order (top to bottom) to map <span class="chem">y = f(x)</span> onto <span class="chem">y = -3 f(2x - 8) + 1</span>.</p>
      stem: "<p>將下列變換按有效順序（由上至下）排列，使 <span class=\"chem\">y = f(x)</span> 映射至 <span class=\"chem\">y = -3 f(2x - 8) + 1</span>。</p>",
      options: [
        // EN: Horizontal stretch of scale factor <span class="chem">1/2</span> parallel to the <span class="chem">x</span>-axis
        "平行於 <span class=\"chem\">x</span> 軸、比例因子為 <span class=\"chem\">1/2</span> 的水平伸縮",
        // EN: Horizontal translation of <span class="chem">4</span> units to the right
        "向右水平平移 <span class=\"chem\">4</span> 單位",
        // EN: Vertical stretch of scale factor <span class="chem">3</span> and reflection in the <span class="chem">x</span>-axis
        "比例因子為 <span class=\"chem\">3</span> 的鉛垂伸縮並沿 <span class=\"chem\">x</span> 軸反射",
        // EN: Vertical translation of <span class="chem">1</span> unit up
        "向上鉛垂平移 <span class=\"chem\">1</span> 單位",
      ],
      hints: [
        // EN: Factor <span class="chem">2</span> inside <span class="chem">f</span> first: <span class="chem">-3 f(2(x - 4)) + 1</span>.
        "先在 <span class=\"chem\">f</span> 內抽出公因數 <span class=\"chem\">2</span>：<span class=\"chem\">-3 f(2(x - 4)) + 1</span>。",
        // EN: In factored form, apply stretches/reflections before translations in each direction.
        "在已抽公因數的形式中，每個方向上皆須先作伸縮／反射，再作平移。",
      ],
      // EN: <p>Writing <span class="chem">y = -3 f(2(x - 4)) + 1</span>: horizontally stretch by <span class="chem">1/2</span> then translate <span class="chem">4</span> units right; vertically stretch by <span class="chem">3</span> with <span class="chem">x</span>-axis reflection then translate <span class="chem">1</span> unit up.</p>
      solution: "<p>寫成 <span class=\"chem\">y = -3 f(2(x - 4)) + 1</span>：先水平伸縮 <span class=\"chem\">1/2</span> 倍再向右平移 <span class=\"chem\">4</span> 單位；先鉛垂伸縮 <span class=\"chem\">3</span> 倍並沿 <span class=\"chem\">x</span> 軸反射，再向上平移 <span class=\"chem\">1</span> 單位。</p>",
    },

    // ── t2-3-q004 · mcq · foundation · AHL · AHL 2.12 · 2 marks
    "t2-3-q004": {
      // EN: <p>Find the remainder when <span class="chem">P(x) = 2x^3 - 3x^2 + 4x - 5</span> is divided by <span class="chem">(2x - 1)</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">P(x) = 2x^3 - 3x^2 + 4x - 5</span> 除以 <span class=\"chem\">(2x - 1)</span> 的餘數。</p>",
      options: [
        // EN: <span class="chem">-7/2</span>
        "<span class=\"chem\">-7/2</span>",
        // EN: <span class="chem">-2</span>
        "<span class=\"chem\">-2</span>",
        // EN: <span class="chem">-17/2</span>
        "<span class=\"chem\">-17/2</span>",
        // EN: <span class="chem">-5/2</span>
        "<span class=\"chem\">-5/2</span>",
      ],
      hints: [
        // EN: By the Remainder Theorem, the remainder when dividing by <span class="chem">(2x - 1)</span> is <span class="chem">P(1/2)</span>.
        "根據餘式定理，除以 <span class=\"chem\">(2x - 1)</span> 的餘數為 <span class=\"chem\">P(1/2)</span>。",
        // EN: Compute <span class="chem">2(1/8) - 3(1/4) + 4(1/2) - 5</span>.
        "計算 <span class=\"chem\">2(1/8) - 3(1/4) + 4(1/2) - 5</span>。",
      ],
      // EN: <p><span class="chem">P(1/2) = 2(1/8) - 3(1/4) + 4(1/2) - 5 = 1/4 - 3/4 + 2 - 5 = -1/2 - 3 = -7/2</span>.</p>
      solution: "<p><span class=\"chem\">P(1/2) = 2(1/8) - 3(1/4) + 4(1/2) - 5 = 1/4 - 3/4 + 2 - 5 = -1/2 - 3 = -7/2</span>。</p>",
      misconception: {
        // EN (option B): You evaluated P(1) = 2 − 3 + 4 − 5 = −2 instead of P(1/2).
        "1": "你計算了 P(1) = 2 − 3 + 4 − 5 = −2，而非 P(1/2)。",
        // EN (option C): You evaluated P(−1/2) = −1/4 − 3/4 − 2 − 5 = −8 (or sign slip) instead of P(+1/2).
        "2": "你計算了 P(−1/2) = −1/4 − 3/4 − 2 − 5 = −8（或正負號出錯），而非 P(+1/2)。",
        // EN (option D): Arithmetic slip in 2(1/8) − 3(1/4) + 2 − 5 = 1/4 − 3/4 − 3 = −7/2.
        "3": "計算 2(1/8) − 3(1/4) + 2 − 5 = 1/4 − 3/4 − 3 = −7/2 時出現算術錯誤。",
      },
    },

    // ── t2-3-q005 · numeric · exam · AHL · AHL 2.12 · 3 marks
    "t2-3-q005": {
      // EN: <p>The polynomial <span class="chem">P(x) = x^3 + kx^2 - 5x + 6</span> is divisible by <span class="chem">(x - 3)</span>. Find the exact value of <span class="chem">k</span>.</p>
      stem: "<p>多項式 <span class=\"chem\">P(x) = x^3 + kx^2 - 5x + 6</span> 可被 <span class=\"chem\">(x - 3)</span> 整除。求 (Find) <span class=\"chem\">k</span> 的準確值。</p>",
      hints: [
        // EN: By the Factor Theorem, <span class="chem">P(3) = 0</span>.
        "根據因式定理，<span class=\"chem\">P(3) = 0</span>。",
        // EN: Substitute <span class="chem">x = 3</span>: <span class="chem">27 + 9k - 15 + 6 = 0</span>.
        "代入 <span class=\"chem\">x = 3</span>：<span class=\"chem\">27 + 9k - 15 + 6 = 0</span>。",
      ],
      // EN: <p>Setting <span class="chem">P(3) = 0</span> gives <span class="chem">3^3 + k(3)^2 - 5(3) + 6 = 0 => 27 + 9k - 15 + 6 = 0 => 9k + 18 = 0 => k = -2</span>.</p>
      solution: "<p>令 <span class=\"chem\">P(3) = 0</span> 得 <span class=\"chem\">3^3 + k(3)^2 - 5(3) + 6 = 0 => 27 + 9k - 15 + 6 = 0 => 9k + 18 = 0 => k = -2</span>。</p>",
    },

    // ── t2-3-q006 · mcq · exam · AHL · AHL 2.12 · 2 marks
    "t2-3-q006": {
      // EN: <p>The cubic equation <span class="chem">3x^3 - 6x^2 + 4x + 9 = 0</span> has roots <span class="chem">alpha, beta, gamma</span>. Find the value of <span class="chem">alpha beta gamma</span>.</p>
      stem: "<p>三次方程 <span class=\"chem\">3x^3 - 6x^2 + 4x + 9 = 0</span> 的根為 <span class=\"chem\">alpha, beta, gamma</span>。求 (Find) <span class=\"chem\">alpha beta gamma</span> 的值。</p>",
      options: [
        // EN: <span class="chem">-3</span>
        "<span class=\"chem\">-3</span>",
        // EN: <span class="chem">3</span>
        "<span class=\"chem\">3</span>",
        // EN: <span class="chem">2</span>
        "<span class=\"chem\">2</span>",
        // EN: <span class="chem">4/3</span>
        "<span class=\"chem\">4/3</span>",
      ],
      hints: [
        // EN: Use Vieta's formula for the product of roots: <span class="chem">(-1)^n a_0 / a_n</span>.
        "利用韋達定理中的根之積公式：<span class=\"chem\">(-1)^n a_0 / a_n</span>。",
        // EN: Here <span class="chem">n = 3</span>, <span class="chem">a_0 = 9</span>, and <span class="chem">a_3 = 3</span>.
        "這裏 <span class=\"chem\">n = 3</span>、<span class=\"chem\">a_0 = 9</span> 及 <span class=\"chem\">a_3 = 3</span>。",
      ],
      // EN: <p>With <span class="chem">n = 3</span>, <span class="chem">alpha beta gamma = (-1)^3 (9 / 3) = -3</span>.</p>
      solution: "<p>由於 <span class=\"chem\">n = 3</span>，<span class=\"chem\">alpha beta gamma = (-1)^3 (9 / 3) = -3</span>。</p>",
      misconception: {
        // EN (option B): For an odd-degree polynomial (n = 3), the product of roots is (−1)³ a₀/a₃ = −9/3 = −3, not +3.
        "1": "對於奇數次多項式（n = 3），根之積為 (−1)³ a₀/a₃ = −9/3 = −3，而非 +3。",
        // EN (option C): 2 is the sum of the roots α + β + γ = −(−6)/3, not the product.
        "2": "2 是根之和 α + β + γ = −(−6)/3，而非根之積。",
        // EN (option D): 4/3 is the pairwise product sum αβ + βγ + γα = a₁/a₃.
        "3": "4/3 是兩兩乘積之和 αβ + βγ + γα = a₁/a₃。",
      },
    },

    // ── t2-3-q007 · numeric · exam · AHL · AHL 2.12 · 3 marks
    "t2-3-q007": {
      // EN: <p>The quadratic equation <span class="chem">2x^2 - 8x + 5 = 0</span> has roots <span class="chem">alpha</span> and <span class="chem">beta</span>. Without solving the equation, find the exact value of <span class="chem">alpha^2 + beta^2</span>.</p>
      stem: "<p>二次方程 <span class=\"chem\">2x^2 - 8x + 5 = 0</span> 的根為 <span class=\"chem\">alpha</span> 與 <span class=\"chem\">beta</span>。在不解方程的情況下，求 (find) <span class=\"chem\">alpha^2 + beta^2</span> 的準確值。</p>",
      hints: [
        // EN: Find <span class="chem">alpha + beta = -b/a = 4</span> and <span class="chem">alpha beta = c/a = 5/2</span>.
        "求 <span class=\"chem\">alpha + beta = -b/a = 4</span> 及 <span class=\"chem\">alpha beta = c/a = 5/2</span>。",
        // EN: Use the identity <span class="chem">alpha^2 + beta^2 = (alpha + beta)^2 - 2 alpha beta</span>.
        "運用恒等式 <span class=\"chem\">alpha^2 + beta^2 = (alpha + beta)^2 - 2 alpha beta</span>。",
      ],
      // EN: <p>From Vieta's formulas, <span class="chem">alpha + beta = 8/2 = 4</span> and <span class="chem">alpha beta = 5/2</span>. Therefore <span class="chem">alpha^2 + beta^2 = 4^2 - 2(5/2) = 16 - 5 = 11</span>.</p>
      solution: "<p>由韋達定理，<span class=\"chem\">alpha + beta = 8/2 = 4</span> 且 <span class=\"chem\">alpha beta = 5/2</span>。因此 <span class=\"chem\">alpha^2 + beta^2 = 4^2 - 2(5/2) = 16 - 5 = 11</span>。</p>",
    },

    // ── t2-3-q008 · short · challenge · AHL · AHL 2.12 · 5 marks
    "t2-3-q008": {
      // EN: <p>When a polynomial <span class="chem">P(x)</span> is divided by <span class="chem">(x - 1)</span>, the remainder is <span class="chem">4</span>. When <span class="chem">P(x)</span> is divided by <span class="chem">(x + 2)</span>, the remainder is <span class="chem">-5</span>. Find the remainder when <span class="chem">P(x)</span> is divided by <span class="chem">(x - 1)(x + 2)</span>.</p>
      stem: "<p>多項式 <span class=\"chem\">P(x)</span> 除以 <span class=\"chem\">(x - 1)</span> 時餘數為 <span class=\"chem\">4</span>；當 <span class=\"chem\">P(x)</span> 除以 <span class=\"chem\">(x + 2)</span> 時餘數為 <span class=\"chem\">-5</span>。求 (Find) <span class=\"chem\">P(x)</span> 除以 <span class=\"chem\">(x - 1)(x + 2)</span> 的餘式。</p>",
      hints: [
        // EN: Since the divisor <span class="chem">(x - 1)(x + 2)</span> has degree <span class="chem">2</span>, the remainder has the linear form <span class="chem">ax + b</span>.
        "由於除式 <span class=\"chem\">(x - 1)(x + 2)</span> 為 <span class=\"chem\">2</span> 次，餘式為一次式 <span class=\"chem\">ax + b</span>。",
        // EN: Substitute <span class="chem">x = 1</span> and <span class="chem">x = -2</span> into <span class="chem">P(x) = Q(x)(x - 1)(x + 2) + ax + b</span>.
        "將 <span class=\"chem\">x = 1</span> 與 <span class=\"chem\">x = -2</span> 代入 <span class=\"chem\">P(x) = Q(x)(x - 1)(x + 2) + ax + b</span>。",
      ],
      // EN: <p>Let <span class="chem">P(x) = Q(x)(x - 1)(x + 2) + ax + b</span>. Then <span class="chem">P(1) = a + b = 4</span> and <span class="chem">P(-2) = -2a + b = -5</span>. Subtracting gives <span class="chem">3a = 9 => a = 3</span>, so <span class="chem">b = 1</span>. The remainder is <span class="chem">3x + 1</span>.</p>
      solution: "<p>設 <span class=\"chem\">P(x) = Q(x)(x - 1)(x + 2) + ax + b</span>。則 <span class=\"chem\">P(1) = a + b = 4</span> 及 <span class=\"chem\">P(-2) = -2a + b = -5</span>。兩式相減得 <span class=\"chem\">3a = 9 => a = 3</span>，故 <span class=\"chem\">b = 1</span>。餘式為 <span class=\"chem\">3x + 1</span>。</p>",
      markscheme: [
        // EN: M1: Write P(x) = Q(x)(x − 1)(x + 2) + ax + b (recognising remainder has degree ≤ 1).
        "M1：寫出 P(x) = Q(x)(x − 1)(x + 2) + ax + b（識別餘式次數 ≤ 1）。",
        // EN: A1: Apply Remainder Theorem: P(1) = a + b = 4.
        "A1：應用餘式定理：P(1) = a + b = 4。",
        // EN: A1: Apply Remainder Theorem: P(−2) = −2a + b = −5.
        "A1：應用餘式定理：P(−2) = −2a + b = −5。",
        // EN: M1: Solve the simultaneous linear equations (subtract to get 3a = 9).
        "M1：解聯立線性方程（相減得 3a = 9）。",
        // EN: A1: Obtain a = 3, b = 1, so the remainder is 3x + 1.
        "A1：求得 a = 3、b = 1，故餘式為 3x + 1。",
      ],
    },

    // ── t2-3-q009 · mcq · foundation · AHL · AHL 2.13 · 3 marks
    "t2-3-q009": {
      // EN: <p>Find the equation of the oblique asymptote of the rational function <span class="chem">f(x) = (3x^2 + 5x - 1)/(x + 2)</span>.</p>
      stem: "<p>求 (Find) 有理函數 <span class=\"chem\">f(x) = (3x^2 + 5x - 1)/(x + 2)</span> 的斜漸近線方程。</p>",
      options: [
        // EN: <span class="chem">y = 3x - 1</span>
        "<span class=\"chem\">y = 3x - 1</span>",
        // EN: <span class="chem">y = 3x + 11</span>
        "<span class=\"chem\">y = 3x + 11</span>",
        // EN: <span class="chem">y = 3x + 5</span>
        "<span class=\"chem\">y = 3x + 5</span>",
        // EN: <span class="chem">y = 3</span>
        "<span class=\"chem\">y = 3</span>",
      ],
      hints: [
        // EN: Divide <span class="chem">3x^2 + 5x - 1</span> by <span class="chem">(x + 2)</span>.
        "用 <span class=\"chem\">(x + 2)</span> 除 <span class=\"chem\">3x^2 + 5x - 1</span>。",
        // EN: <span class="chem">3x^2 + 5x - 1 = (3x - 1)(x + 2) + 1</span>.
        "<span class=\"chem\">3x^2 + 5x - 1 = (3x - 1)(x + 2) + 1</span>。",
      ],
      // EN: <p>Dividing gives <span class="chem">f(x) = 3x - 1 + 1/(x + 2)</span>. As <span class="chem">x -&gt; +-infty</span>, <span class="chem">1/(x + 2) -&gt; 0</span>, so the oblique asymptote is <span class="chem">y = 3x - 1</span>.</p>
      solution: "<p>相除得 <span class=\"chem\">f(x) = 3x - 1 + 1/(x + 2)</span>。當 <span class=\"chem\">x -&gt; +-infty</span> 時，<span class=\"chem\">1/(x + 2) -&gt; 0</span>，故斜漸近線為 <span class=\"chem\">y = 3x - 1</span>。</p>",
      misconception: {
        // EN (option B): Sign error when subtracting 3x(x + 2) = 3x² + 6x from 3x² + 5x: 5x − 6x = −x, not +11x.
        "1": "從 3x² + 5x 減去 3x(x + 2) = 3x² + 6x 時正負號出錯：5x − 6x = −x，而非 +11x。",
        // EN (option C): You cannot read the oblique asymptote from the first two numerator coefficients without dividing by (x + 2).
        "2": "未除以 (x + 2) 前，不能直接從分子首兩項係數讀出斜漸近線。",
        // EN (option D): Because the numerator has degree 2 and the denominator has degree 1, there is an oblique asymptote, not a horizontal asymptote y = 3.
        "3": "因為分子次數為 2 而分母次數為 1，函數有斜漸近線，而非水平漸近線 y = 3。",
      },
    },

    // ── t2-3-q010 · multi · exam · AHL · AHL 2.13 · 4 marks
    "t2-3-q010": {
      // EN: <p>Consider <span class="chem">f(x) = (2x - 4)/(x^2 - 9)</span> for <span class="chem">x != +-3</span>. Select <strong>all</strong> true statements about the graph of <span class="chem">f</span>.</p>
      stem: "<p>考慮 <span class=\"chem\">f(x) = (2x - 4)/(x^2 - 9)</span>（<span class=\"chem\">x != +-3</span>）。選出<strong>所有</strong>關於 <span class=\"chem\">f</span> 的圖像之正確陳述。</p>",
      options: [
        // EN: The vertical asymptotes are <span class="chem">x = 3</span> and <span class="chem">x = -3</span>.
        "鉛垂漸近線為 <span class=\"chem\">x = 3</span> 與 <span class=\"chem\">x = -3</span>。",
        // EN: The horizontal asymptote is <span class="chem">y = 0</span>.
        "水平漸近線為 <span class=\"chem\">y = 0</span>。",
        // EN: The horizontal asymptote is <span class="chem">y = 2</span>.
        "水平漸近線為 <span class=\"chem\">y = 2</span>。",
        // EN: The <span class="chem">x</span>-intercept is at <span class="chem">(2, 0)</span>.
        "<span class=\"chem\">x</span> 軸截距為 <span class=\"chem\">(2, 0)</span>。",
      ],
      hints: [
        // EN: Set the denominator <span class="chem">x^2 - 9 = 0</span> for vertical asymptotes.
        "令分母 <span class=\"chem\">x^2 - 9 = 0</span> 以求鉛垂漸近線。",
        // EN: Since <span class="chem">deg(num) = 1 &lt; deg(denom) = 2</span>, <span class="chem">f(x) -&gt; 0</span> as <span class="chem">x -&gt; +-infty</span>.
        "由於 <span class=\"chem\">deg(num) = 1 &lt; deg(denom) = 2</span>，當 <span class=\"chem\">x -&gt; +-infty</span> 時 <span class=\"chem\">f(x) -&gt; 0</span>。",
      ],
      // EN: <p>Denominator <span class="chem">x^2 - 9 = 0</span> gives VAs <span class="chem">x = +-3</span>. Since degree of numerator is less than degree of denominator, HA is <span class="chem">y = 0</span> (not <span class="chem">y = 2</span>). Setting <span class="chem">2x - 4 = 0</span> gives <span class="chem">x</span>-intercept <span class="chem">(2, 0)</span>.</p>
      solution: "<p>分母 <span class=\"chem\">x^2 - 9 = 0</span> 得出鉛垂漸近線 <span class=\"chem\">x = +-3</span>。由於分子次數小於分母次數，水平漸近線為 <span class=\"chem\">y = 0</span>（而非 <span class=\"chem\">y = 2</span>）。令 <span class=\"chem\">2x - 4 = 0</span> 得 <span class=\"chem\">x</span> 軸截距 <span class=\"chem\">(2, 0)</span>。</p>",
    },

    // ── t2-3-q011 · mcq · foundation · AHL · AHL 2.14 · 2 marks
    "t2-3-q011": {
      // EN: <p>Which of the following functions is an <strong>odd</strong> function?</p>
      stem: "<p>下列哪個函數是<strong>奇</strong>函數？</p>",
      options: [
        // EN: <span class="chem">f(x) = x^3 - 4x</span>
        "<span class=\"chem\">f(x) = x^3 - 4x</span>",
        // EN: <span class="chem">g(x) = x^2 + cos x</span>
        "<span class=\"chem\">g(x) = x^2 + cos x</span>",
        // EN: <span class="chem">h(x) = x^3 + 1</span>
        "<span class=\"chem\">h(x) = x^3 + 1</span>",
        // EN: <span class="chem">p(x) = |x| - x</span>
        "<span class=\"chem\">p(x) = |x| - x</span>",
      ],
      hints: [
        // EN: A function is odd if <span class="chem">f(-x) = -f(x)</span> for all <span class="chem">x</span>.
        "若對所有 <span class=\"chem\">x</span> 皆有 <span class=\"chem\">f(-x) = -f(x)</span>，則函數為奇函數。",
        // EN: Test replacing <span class="chem">x</span> with <span class="chem">-x</span> in each option.
        "嘗試在每個選項中以 <span class=\"chem\">-x</span> 代替 <span class=\"chem\">x</span>。",
      ],
      // EN: <p><span class="chem">f(-x) = (-x)^3 - 4(-x) = -x^3 + 4x = -(x^3 - 4x) = -f(x)</span>, so <span class="chem">f</span> is odd.</p>
      solution: "<p><span class=\"chem\">f(-x) = (-x)^3 - 4(-x) = -x^3 + 4x = -(x^3 - 4x) = -f(x)</span>，因此 <span class=\"chem\">f</span> 是奇函數。</p>",
      misconception: {
        // EN (option B): g(−x) = (−x)² + cos(−x) = x² + cos x = g(x), so g is EVEN, not odd.
        "1": "g(−x) = (−x)² + cos(−x) = x² + cos x = g(x)，故 g 是偶函數，而非奇函數。",
        // EN (option C): Adding the constant +1 breaks odd symmetry: h(−x) = −x³ + 1 ≠ −h(x).
        "2": "加上常數 +1 破壞了奇對稱性：h(−x) = −x³ + 1 ≠ −h(x)。",
        // EN (option D): p(−x) = |x| + x, which equals neither p(x) nor −p(x).
        "3": "p(−x) = |x| + x，既不等於 p(x)，也不等於 −p(x)。",
      },
    },

    // ── t2-3-q012 · numeric · exam · AHL · AHL 2.14 · 3 marks
    "t2-3-q012": {
      // EN: <p>The function <span class="chem">f(x) = x^3 - 12x + 5</span> is defined on the restricted domain <span class="chem">x &gt;= k</span>. Find the smallest value of <span class="chem">k</span> such that <span class="chem">f^{-1}</span> exists.</p>
      stem: "<p>函數 <span class=\"chem\">f(x) = x^3 - 12x + 5</span> 定義於受限定義域 <span class=\"chem\">x &gt;= k</span>。求 (Find) 使 <span class=\"chem\">f^{-1}</span> 存在的最小 <span class=\"chem\">k</span> 值。</p>",
      hints: [
        // EN: For <span class="chem">f^{-1}</span> to exist, <span class="chem">f</span> must be one-to-one (monotonic) on <span class="chem">x &gt;= k</span>.
        "要使 <span class=\"chem\">f^{-1}</span> 存在，<span class=\"chem\">f</span> 在 <span class=\"chem\">x &gt;= k</span> 上必須為一對一（單調）。",
        // EN: Find the turning points by solving <span class="chem">f'(x) = 3x^2 - 12 = 0</span> and pick the rightmost turning point.
        "解 <span class=\"chem\">f'(x) = 3x^2 - 12 = 0</span> 找出轉向點，並選取最右邊的轉向點。",
      ],
      // EN: <p><span class="chem">f'(x) = 3x^2 - 12 = 0 => x = +-2</span>. Since the cubic increases for <span class="chem">x &gt;= 2</span>, the smallest <span class="chem">k</span> for <span class="chem">f</span> to be one-to-one on <span class="chem">[k, infty)</span> is <span class="chem">k = 2</span>.</p>
      solution: "<p><span class=\"chem\">f'(x) = 3x^2 - 12 = 0 => x = +-2</span>。由於此三次函數在 <span class=\"chem\">x &gt;= 2</span> 上遞增，使 <span class=\"chem\">f</span> 在 <span class=\"chem\">[k, infty)</span> 上一對一的最小 <span class=\"chem\">k</span> 值為 <span class=\"chem\">k = 2</span>。</p>",
    },

    // ── t2-3-q013 · mcq · exam · AHL · AHL 2.16 · 2 marks
    "t2-3-q013": {
      // EN: <p>The graph of <span class="chem">y = f(x)</span> has a local minimum at <span class="chem">(2, -5)</span> and <span class="chem">x</span>-intercepts at <span class="chem">(-1, 0)</span> and <span class="chem">(5, 0)</span>. Which statement is true for the graph of <span class="chem">y = |f(x)|</span>?</p>
      stem: "<p><span class=\"chem\">y = f(x)</span> 的圖像在 <span class=\"chem\">(2, -5)</span> 有局部極小值，並在 <span class=\"chem\">(-1, 0)</span> 與 <span class=\"chem\">(5, 0)</span> 有 <span class=\"chem\">x</span> 軸截距。下列哪項關於 <span class=\"chem\">y = |f(x)|</span> 圖像的陳述正確？</p>",
      options: [
        // EN: It has a local maximum at <span class="chem">(2, 5)</span>.
        "它在 <span class=\"chem\">(2, 5)</span> 有局部極大值。",
        // EN: It has a local minimum at <span class="chem">(-2, -5)</span>.
        "它在 <span class=\"chem\">(-2, -5)</span> 有局部極小值。",
        // EN: It has a cusp at <span class="chem">(2, 5)</span>.
        "它在 <span class=\"chem\">(2, 5)</span> 有尖點。",
        // EN: It has no <span class=\"chem\">x</span>-intercepts.
        "它沒有 <span class=\"chem\">x</span> 軸截距。",
      ],
      hints: [
        // EN: For <span class="chem">y = |f(x)|</span>, points with <span class="chem">f(x) &lt; 0</span> reflect across the <span class="chem">x</span>-axis.
        "對於 <span class=\"chem\">y = |f(x)|</span>，滿足 <span class=\"chem\">f(x) &lt; 0</span> 的點會沿 <span class=\"chem\">x</span> 軸反射。",
        // EN: Reflecting a local minimum at <span class="chem">(2, -5)</span> across <span class="chem">y = 0</span> turns it into a local maximum.
        "把 <span class=\"chem\">(2, -5)</span> 處的局部極小值沿 <span class=\"chem\">y = 0</span> 反射，會變為局部極大值。",
      ],
      // EN: <p>Since <span class="chem">f(2) = -5 &lt; 0</span>, the smooth local minimum reflects across the <span class="chem">x</span>-axis to become a local maximum at <span class=\"chem\">(2, 5)</span>.</p>
      solution: "<p>由於 <span class=\"chem\">f(2) = -5 &lt; 0</span>，該平滑的局部極小值沿 <span class=\"chem\">x</span> 軸向上反射，成為 <span class=\"chem\">(2, 5)</span> 處的局部極大值。</p>",
      misconception: {
        // EN (option B): |f(x)| reflects negative y-values across the x-axis (y → −y), not across the y-axis, and |f(x)| ≥ 0 everywhere.
        "1": "|f(x)| 把負的 y 值沿 x 軸反射（y → −y），而非沿 y 軸反射，且處處有 |f(x)| ≥ 0。",
        // EN (option C): Because (2, −5) is a smooth turning point below the x-axis, reflecting it up produces a smooth local maximum at (2, 5); cusps occur at the x-intercepts (−1, 0) and (5, 0).
        "2": "因為 (2, −5) 是 x 軸下方的平滑轉向點，向上反射後在 (2, 5) 形成平滑的局部極大值；尖點出現在 x 軸截距 (−1, 0) 與 (5, 0) 處。",
        // EN (option D): The x-intercepts (−1, 0) and (5, 0) have y = 0, so they remain on y = |f(x)|.
        "3": "x 軸截距 (−1, 0) 與 (5, 0) 的 y = 0，因此它們仍然留在 y = |f(x)| 上。",
      },
    },

    // ── t2-3-q014 · multi · exam · AHL · AHL 2.16 · 4 marks
    "t2-3-q014": {
      // EN: <p>The graph of <span class="chem">y = f(x)</span> has an <span class="chem">x</span>-intercept at <span class="chem">(3, 0)</span>, a vertical asymptote <span class="chem">x = -1</span>, a local maximum at <span class="chem">(1, 4)</span>, and passes through <span class="chem">(0, -1)</span>. Select <strong>all</strong> true statements for the reciprocal graph <span class="chem">y = 1/f(x)</span>.</p>
      stem: "<p><span class=\"chem\">y = f(x)</span> 的圖像在 <span class=\"chem\">(3, 0)</span> 有 <span class=\"chem\">x</span> 軸截距、有鉛垂漸近線 <span class=\"chem\">x = -1</span>、在 <span class=\"chem\">(1, 4)</span> 有局部極大值，並通過 <span class=\"chem\">(0, -1)</span>。選出<strong>所有</strong>關於倒數圖像 <span class=\"chem\">y = 1/f(x)</span> 的正確陳述。</p>",
      options: [
        // EN: <span class="chem">x = 3</span> is a vertical asymptote of <span class="chem">y = 1/f(x)</span>.
        "<span class=\"chem\">x = 3</span> 是 <span class=\"chem\">y = 1/f(x)</span> 的鉛垂漸近線。",
        // EN: <span class="chem">(1, 0.25)</span> is a local minimum of <span class="chem">y = 1/f(x)</span>.
        "<span class=\"chem\">(1, 0.25)</span> 是 <span class=\"chem\">y = 1/f(x)</span> 的局部極小值。",
        // EN: <span class="chem">(0, -1)</span> is an invariant point on <span class="chem">y = 1/f(x)</span>.
        "<span class=\"chem\">(0, -1)</span> 是 <span class=\"chem\">y = 1/f(x)</span> 上的不變點。",
        // EN: <span class="chem">x = -1</span> is a vertical asymptote of <span class=\"chem\">y = 1/f(x)</span>.
        "<span class=\"chem\">x = -1</span> 是 <span class=\"chem\">y = 1/f(x)</span> 的鉛垂漸近線。",
      ],
      hints: [
        // EN: Roots of <span class="chem">f(x)</span> become vertical asymptotes of <span class="chem">1/f(x)</span>, while VAs of <span class="chem">f(x)</span> approach <span class="chem">0</span>.
        "<span class=\"chem\">f(x)</span> 的根會成為 <span class=\"chem\">1/f(x)</span> 的鉛垂漸近線，而 <span class=\"chem\">f(x)</span> 的鉛垂漸近線處函數值則趨向 <span class=\"chem\">0</span>。",
        // EN: Points with <span class="chem">y = +-1</span> stay unchanged, and a positive local maximum <span class="chem">(1, 4)</span> becomes a local minimum <span class="chem">(1, 1/4)</span>.
        "滿足 <span class=\"chem\">y = +-1</span> 的點保持不變，而正值的局部極大值 <span class=\"chem\">(1, 4)</span> 會變為局部極小值 <span class=\"chem\">(1, 1/4)</span>。",
      ],
      // EN: <p>At <span class="chem">x = 3</span>, <span class="chem">f(3) = 0</span> so <span class="chem">1/f(x)</span> has VA <span class="chem">x = 3</span>. Local max <span class="chem">(1, 4)</span> becomes local min <span class="chem">(1, 0.25)</span>. At <span class="chem">(0, -1)</span>, <span class="chem">1/(-1) = -1</span> (invariant). As <span class="chem">x -&gt; -1</span>, <span class="chem">f(x) -&gt; +-infty</span> so <span class="chem">1/f(x) -&gt; 0</span> (not a VA).</p>
      solution: "<p>在 <span class=\"chem\">x = 3</span> 處，<span class=\"chem\">f(3) = 0</span>，故 <span class=\"chem\">1/f(x)</span> 有鉛垂漸近線 <span class=\"chem\">x = 3</span>。局部極大值 <span class=\"chem\">(1, 4)</span> 變為局部極小值 <span class=\"chem\">(1, 0.25)</span>。在 <span class=\"chem\">(0, -1)</span> 處，<span class=\"chem\">1/(-1) = -1</span>（不變點）。當 <span class=\"chem\">x -&gt; -1</span> 時，<span class=\"chem\">f(x) -&gt; +-infty</span>，故 <span class=\"chem\">1/f(x) -&gt; 0</span>（並非鉛垂漸近線）。</p>",
    },

    // ── t2-3-q015 · mcq · exam · AHL · AHL 2.15 · 3 marks
    "t2-3-q015": {
      // EN: <p>Solve the rational inequality <span class="chem">(3x - 2)/(x - 4) &gt;= 2</span>.</p>
      stem: "<p>解 (Solve) 有理不等式 <span class=\"chem\">(3x - 2)/(x - 4) &gt;= 2</span>。</p>",
      options: [
        // EN: <span class="chem">x &lt;= -6</span> or <span class="chem">x &gt; 4</span>
        "<span class=\"chem\">x &lt;= -6</span> 或 <span class=\"chem\">x &gt; 4</span>",
        // EN: <span class="chem">x &gt;= -6</span>
        "<span class=\"chem\">x &gt;= -6</span>",
        // EN: <span class="chem">-6 &lt;= x &lt; 4</span>
        "<span class=\"chem\">-6 &lt;= x &lt; 4</span>",
        // EN: <span class="chem">x &lt;= -6</span> or <span class="chem">x &gt;= 4</span>
        "<span class=\"chem\">x &lt;= -6</span> 或 <span class=\"chem\">x &gt;= 4</span>",
      ],
      hints: [
        // EN: Subtract <span class="chem">2</span> from both sides and combine into a single fraction <span class="chem">(x + 6)/(x - 4) &gt;= 0</span>.
        "兩邊減去 <span class=\"chem\">2</span> 並通分為單一分式 <span class=\"chem\">(x + 6)/(x - 4) &gt;= 0</span>。",
        // EN: Test the sign in the three intervals <span class="chem">(-infty, -6)</span>, <span class="chem">(-6, 4)</span>, and <span class="chem">(4, infty)</span>.
        "測試三個區間 <span class=\"chem\">(-infty, -6)</span>、<span class=\"chem\">(-6, 4)</span> 與 <span class=\"chem\">(4, infty)</span> 的正負號。",
      ],
      // EN: <p><span class="chem">(3x - 2)/(x - 4) - 2 &gt;= 0 => (x + 6)/(x - 4) &gt;= 0</span>. Critical values are <span class="chem">x = -6</span> (included) and <span class="chem">x = 4</span> (excluded). Sign diagram gives <span class="chem">x &lt;= -6</span> or <span class="chem">x &gt; 4</span>.</p>
      solution: "<p><span class=\"chem\">(3x - 2)/(x - 4) - 2 &gt;= 0 => (x + 6)/(x - 4) &gt;= 0</span>。臨界值為 <span class=\"chem\">x = -6</span>（包括）與 <span class=\"chem\">x = 4</span>（不包括）。正負號圖得出 <span class=\"chem\">x &lt;= -6</span> 或 <span class=\"chem\">x &gt; 4</span>。</p>",
      misconception: {
        // EN (option B): Cross-multiplying by (x − 4) assumes x − 4 > 0 and loses the sign flip when x < 4.
        "1": "兩邊同乘 (x − 4) 隱含假設了 x − 4 > 0，會遺漏 x < 4 時不等號反轉的情況。",
        // EN (option C): Sign diagram of (x + 6)/(x − 4) is negative between −6 and 4, and positive outside.
        "2": "(x + 6)/(x − 4) 的正負號圖在 −6 與 4 之間為負，在兩側為正。",
        // EN (option D): x = 4 makes the denominator zero, so x = 4 must be strictly excluded (x > 4, not x ≥ 4).
        "3": "x = 4 會使分母為零，因此必須嚴格排除 x = 4（是 x > 4，而非 x ≥ 4）。",
      },
    },

    // ── t2-3-q016 · numeric · challenge · AHL · AHL 2.15 · 3 marks
    "t2-3-q016": {
      // EN: <p>Solve <span class="chem">|3x - 5| = |x + 3|</span> and find the <strong>sum</strong> of all real solutions.</p>
      stem: "<p>解 (Solve) <span class=\"chem\">|3x - 5| = |x + 3|</span>，並求所有實數解之<strong>和</strong>。</p>",
      hints: [
        // EN: Since both sides are moduli, either <span class="chem">3x - 5 = x + 3</span> or <span class="chem">3x - 5 = -(x + 3)</span>.
        "由於兩邊皆為絕對值，故必有 <span class=\"chem\">3x - 5 = x + 3</span> 或 <span class=\"chem\">3x - 5 = -(x + 3)</span>。",
        // EN: Solve both linear equations to get <span class="chem">x = 4</span> and <span class="chem">x = 0.5</span>, then add them.
        "解出兩條一次方程得 <span class=\"chem\">x = 4</span> 與 <span class=\"chem\">x = 0.5</span>，然後相加。",
      ],
      // EN: <p>Case 1: <span class="chem">3x - 5 = x + 3 => x = 4</span>. Case 2: <span class="chem">3x - 5 = -x - 3 => 4x = 2 => x = 0.5</span>. The sum of the solutions is <span class="chem">4 + 0.5 = 4.5</span>.</p>
      solution: "<p>情況 1：<span class=\"chem\">3x - 5 = x + 3 => x = 4</span>。情況 2：<span class=\"chem\">3x - 5 = -x - 3 => 4x = 2 => x = 0.5</span>。解之和為 <span class=\"chem\">4 + 0.5 = 4.5</span>。</p>",
    },

    // ── t2-3-q017 · numeric · challenge · AHL · AHL 2.13 · 4 marks
    "t2-3-q017": {
      // EN: <p>The range of <span class="chem">f(x) = (x^2 + 3)/(x - 1)</span> (<span class="chem">x != 1</span>) is <span class="chem">y &lt;= a</span> or <span class="chem">y &gt;= b</span>. Find the exact value of <span class="chem">b - a</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = (x^2 + 3)/(x - 1)</span>（<span class=\"chem\">x != 1</span>）的值域為 <span class=\"chem\">y &lt;= a</span> 或 <span class=\"chem\">y &gt;= b</span>。求 (Find) <span class=\"chem\">b - a</span> 的準確值。</p>",
      hints: [
        // EN: Set <span class="chem">y = (x^2 + 3)/(x - 1)</span> and rearrange into a quadratic in <span class="chem">x</span>: <span class="chem">x^2 - yx + (y + 3) = 0</span>.
        "設 <span class=\"chem\">y = (x^2 + 3)/(x - 1)</span>，整理為關於 <span class=\"chem\">x</span> 的二次方程：<span class=\"chem\">x^2 - yx + (y + 3) = 0</span>。",
        // EN: Require <span class="chem">Delta_x = y^2 - 4(y + 3) &gt;= 0</span> to find <span class="chem">a = -2</span> and <span class="chem">b = 6</span>.
        "要求 <span class=\"chem\">Delta_x = y^2 - 4(y + 3) &gt;= 0</span> 以求得 <span class=\"chem\">a = -2</span> 及 <span class=\"chem\">b = 6</span>。",
      ],
      // EN: <p>Rearranging gives <span class="chem">x^2 - yx + (y + 3) = 0</span>. Real <span class="chem">x</span> exists iff <span class="chem">Delta_x = y^2 - 4y - 12 = (y - 6)(y + 2) &gt;= 0</span>, so <span class="chem">y &lt;= -2</span> or <span class="chem">y &gt;= 6</span>. Thus <span class="chem">b - a = 6 - (-2) = 8</span>.</p>
      solution: "<p>整理得 <span class=\"chem\">x^2 - yx + (y + 3) = 0</span>。實數 <span class=\"chem\">x</span> 存在，當且僅當 <span class=\"chem\">Delta_x = y^2 - 4y - 12 = (y - 6)(y + 2) &gt;= 0</span>，故 <span class=\"chem\">y &lt;= -2</span> 或 <span class=\"chem\">y &gt;= 6</span>。因此 <span class=\"chem\">b - a = 6 - (-2) = 8</span>。</p>",
    },

    // ── t2-3-q018 · short · challenge · AHL · AHL 2.15 · 6 marks
    "t2-3-q018": {
      // EN: <p>(a) Solve the inequality <span class="chem">|2x - 1| &gt; x + 2</span>. <strong>[4 marks]</strong><br>(b) Hence, or otherwise, solve <span class="chem">|2|x| - 1| &gt; |x| + 2</span>. <strong>[2 marks]</strong></p>
      stem: "<p>(a) 解 (Solve) 不等式 <span class=\"chem\">|2x - 1| &gt; x + 2</span>。<strong>[4 marks]</strong><br>(b) 由此，或用其他方法 (Hence, or otherwise)，解 <span class=\"chem\">|2|x| - 1| &gt; |x| + 2</span>。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: For <span class="chem">|A| &gt; B</span>, either <span class="chem">A &gt; B</span> or <span class="chem">A &lt; -B</span> (if <span class="chem">B &lt; 0</span>, it holds automatically, which is already inside <span class="chem">x &lt; -1/3</span>).
        "對於 <span class=\"chem\">|A| &gt; B</span>，必有 <span class=\"chem\">A &gt; B</span> 或 <span class=\"chem\">A &lt; -B</span>（若 <span class=\"chem\">B &lt; 0</span> 則自動成立，且已包含在 <span class=\"chem\">x &lt; -1/3</span> 內）。",
        // EN: In part (b), replace <span class="chem">x</span> with <span class="chem">|x|</span> in your answer to part (a).
        "在 (b) 部中，將 (a) 部答案裏的 <span class=\"chem\">x</span> 換成 <span class=\"chem\">|x|</span>。",
      ],
      // EN: <p>(a) <span class="chem">2x - 1 &gt; x + 2 => x &gt; 3</span>, or <span class="chem">2x - 1 &lt; -x - 2 => 3x &lt; -1 => x &lt; -1/3</span>. So <span class="chem">x &lt; -1/3</span> or <span class="chem">x &gt; 3</span>. (b) Replacing <span class="chem">x</span> by <span class="chem">|x|</span>: <span class="chem">|x| &lt; -1/3</span> has no solution, while <span class="chem">|x| &gt; 3</span> gives <span class="chem">x &lt; -3</span> or <span class="chem">x &gt; 3</span>.</p>
      solution: "<p>(a) <span class=\"chem\">2x - 1 &gt; x + 2 => x &gt; 3</span>，或 <span class=\"chem\">2x - 1 &lt; -x - 2 => 3x &lt; -1 => x &lt; -1/3</span>。故 <span class=\"chem\">x &lt; -1/3</span> 或 <span class=\"chem\">x &gt; 3</span>。(b) 以 <span class=\"chem\">|x|</span> 代替 <span class=\"chem\">x</span>：<span class=\"chem\">|x| &lt; -1/3</span> 無解，而 <span class=\"chem\">|x| &gt; 3</span> 得出 <span class=\"chem\">x &lt; -3</span> 或 <span class=\"chem\">x &gt; 3</span>。</p>",
      markscheme: [
        // EN: M1: Split into two cases: 2x − 1 > x + 2 or 2x − 1 < −(x + 2) (or square when x + 2 ≥ 0).
        "M1：分為兩種情況：2x − 1 > x + 2 或 2x − 1 < −(x + 2)（或在 x + 2 ≥ 0 時兩邊平方）。",
        // EN: A1: First branch gives x > 3.
        "A1：第一分支得出 x > 3。",
        // EN: A1: Second branch gives 3x < −1 ⇒ x < −1/3.
        "A1：第二分支得出 3x < −1 ⇒ x < −1/3。",
        // EN: A1: State full solution x < −1/3 or x > 3 (noting x < −2 is already covered).
        "A1：寫出完整解 x < −1/3 或 x > 3（註明 x < −2 已包含在內）。",
        // EN: M1: Substitute |x| in place of x from part (a): |x| < −1/3 (no solution) or |x| > 3.
        "M1：以 |x| 代入 (a) 部的 x：|x| < −1/3（無解）或 |x| > 3。",
        // EN: A1: Solve |x| > 3 to obtain x < −3 or x > 3.
        "A1：解 |x| > 3 得 x < −3 或 x > 3。",
      ],
    },

  }
});
