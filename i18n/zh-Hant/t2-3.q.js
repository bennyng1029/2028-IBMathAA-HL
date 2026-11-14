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
        "垂直伸縮與平移 <span class=\"chem\">2y + 5</span> 得出 <span class=\"chem\">2(-3) + 5</span>。",
      ],
      // EN: <p>Using <span class="chem">x_{new} = x_0 + 1 = 5</span> and <span class="chem">y_{new} = 2y_0 + 5 = 2(-3) + 5 = -1</span>, the image is <span class="chem">(5, -1)</span>.</p>
      solution: "<p>利用 <span class=\"chem\">x_{new} = x_0 + 1 = 5</span> 及 <span class=\"chem\">y_{new} = 2y_0 + 5 = 2(-3) + 5 = -1</span>，所得的像為 <span class=\"chem\">(5, -1)</span>。</p>",
      misconception: {
        // EN (option B): Inside f(x − 1), subtracting 1 shifts the graph 1 unit RIGHT (x_new = 4 + 1 = 5), not left.
        "1": "在 f(x − 1) 括號內減 1 會把圖像向右平移 1 單位（x_new = 4 + 1 = 5），而非向左。",
        // EN (option C): You shifted down instead of up: 2(−3) − 5 = −11. The +5 in 2 f(x − 1) + 5 means up 5, giving 2(−3) + 5 = −1.
        "2": "你向下而非向上平移：2(−3) − 5 = −11。2 f(x − 1) + 5 中的 +5 表示向上平移 5，所以應得 2(−3) + 5 = −1。",
        // EN (option D): The horizontal transformation is a translation by +1, not a stretch by 2.
        "3": "水平變換是平移 +1，而非伸縮 2 倍。",
      },
    },

    // ── t2-3-q002 · numeric · foundation · SL · SL 2.11 · 2 marks
    "t2-3-q002": {
      // EN: <p>The point <span class="chem">(-6, 5)</span> lies on <span class="chem">y = f(x)</span>. Find the <span class="chem">x</span>-coordinate of its image on the graph of <span class="chem">y = -f(3x + 3) + 2</span>.</p>
      stem: "<p>點 <span class=\"chem\">(-6, 5)</span> 位於 <span class=\"chem\">y = f(x)</span> 上。求 (Find) 它在 <span class=\"chem\">y = -f(3x + 3) + 2</span> 圖像上的像的 <span class=\"chem\">x</span> 坐標。</p>",
      hints: [
        // EN: Set the inside expression equal to the original <span class="chem">x</span>-coordinate: <span class="chem">3x_{new} + 3 = -6</span>.
        "令括號內的算式等於原來的 <span class=\"chem\">x</span> 坐標：<span class=\"chem\">3x_{new} + 3 = -6</span>。",
        // EN: Solve <span class="chem">3x_{new} = -9</span> for <span class="chem">x_{new}</span>.
        "解 <span class=\"chem\">3x_{new} = -9</span> 以求 <span class=\"chem\">x_{new}</span>。",
      ],
      // EN: <p>Equating arguments gives <span class="chem">3x_{new} + 3 = -6 => 3x_{new} = -9 => x_{new} = -3</span>. (Factoring <span class="chem">3(x + 1)</span> also shows horizontal stretch by <span class="chem">1/3</span> to <span class="chem">-2</span>, then shift <span class="chem">1</span> unit left to <span class="chem">-3</span>.)</p>
      solution: "<p>令自變數相等得 <span class=\"chem\">3x_{new} + 3 = -6 => 3x_{new} = -9 => x_{new} = -3</span>。（抽出公因數 <span class=\"chem\">3(x + 1)</span> 亦可看出先水平伸縮 <span class=\"chem\">1/3</span> 倍至 <span class=\"chem\">-2</span>，再向左平移 <span class=\"chem\">1</span> 單位至 <span class=\"chem\">-3</span>。）</p>",
    },

    // ── t2-3-q003 · order · exam · SL · SL 2.11 · 4 marks
    "t2-3-q003": {
      // EN: <p>Arrange these transformations in order (top to bottom) to map <span class="chem">y = f(x)</span> onto <span class="chem">y = -3 f(2x - 8) + 1</span>. Use this convention: <strong>all horizontal transformations first, then the vertical ones</strong>, and in each direction the stretch (with any reflection) <strong>before</strong> the translation.</p>
      stem: "<p>將下列變換按順序（由上至下）排列，使 <span class=\"chem\">y = f(x)</span> 映射至 <span class=\"chem\">y = -3 f(2x - 8) + 1</span>。請按以下約定：<strong>先作所有水平變換，再作垂直變換</strong>，而每個方向上都是伸縮（連同任何反射）<strong>先於</strong>平移。</p>",
      options: [
        // EN: Horizontal stretch of scale factor <span class="chem">1/2</span> parallel to the <span class="chem">x</span>-axis
        "平行於 <span class=\"chem\">x</span> 軸、比例因子為 <span class=\"chem\">1/2</span> 的水平伸縮",
        // EN: Horizontal translation of <span class="chem">4</span> units to the right
        "向右水平平移 <span class=\"chem\">4</span> 單位",
        // EN: Vertical stretch of scale factor <span class="chem">3</span> and reflection in the <span class="chem">x</span>-axis
        "比例因子為 <span class=\"chem\">3</span> 的垂直伸縮並沿 <span class=\"chem\">x</span> 軸反射",
        // EN: Vertical translation of <span class="chem">1</span> unit up
        "向上垂直平移 <span class=\"chem\">1</span> 單位",
      ],
      hints: [
        // EN: Factor <span class="chem">2</span> inside <span class="chem">f</span> first: <span class="chem">-3 f(2(x - 4)) + 1</span>.
        "先在 <span class=\"chem\">f</span> 內抽出公因數 <span class=\"chem\">2</span>：<span class=\"chem\">-3 f(2(x - 4)) + 1</span>。",
        // EN: In factored form, apply stretches/reflections before translations in each direction.
        "在已抽公因數的形式中，每個方向上皆須先作伸縮／反射，再作平移。",
      ],
      // EN: <p>Writing <span class="chem">y = -3 f(2(x - 4)) + 1</span>: horizontally stretch by <span class="chem">1/2</span> then translate <span class="chem">4</span> units right; vertically stretch by <span class="chem">3</span> with <span class="chem">x</span>-axis reflection then translate <span class="chem">1</span> unit up. (Horizontal and vertical steps do not affect each other, so in an exam other orders are also valid as long as, in each direction, the stretch comes before the translation; the convention in the question fixes one order.)</p>
      solution: "<p>寫成 <span class=\"chem\">y = -3 f(2(x - 4)) + 1</span>：先水平伸縮 <span class=\"chem\">1/2</span> 倍，再向右平移 <span class=\"chem\">4</span> 單位；然後垂直伸縮 <span class=\"chem\">3</span> 倍並沿 <span class=\"chem\">x</span> 軸反射，再向上平移 <span class=\"chem\">1</span> 單位。（水平與垂直步驟互不影響，所以在考試中只要每個方向都是先伸縮後平移，其他次序亦有效；題目中的約定只是固定了其中一種次序。）</p>",
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
        // EN: <span class="chem">-8</span>
        "<span class=\"chem\">-8</span>",
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
        // EN (option C): You evaluated P(−1/2) = −1/4 − 3/4 − 2 − 5 = −8 instead of P(1/2). The root of 2x − 1 = 0 is x = +1/2.
        "2": "你計算了 P(−1/2) = −1/4 − 3/4 − 2 − 5 = −8，而非 P(1/2)。2x − 1 = 0 的根是 x = +1/2。",
        // EN (option D): Sign slip: 1/4 − 3/4 = −1/2, not +1/2. With +1/2 you get 1/2 − 3 = −5/2 instead of −1/2 − 3 = −7/2.
        "3": "正負號出錯：1/4 − 3/4 = −1/2，而非 +1/2。用 +1/2 會得 1/2 − 3 = −5/2，而正確應為 −1/2 − 3 = −7/2。",
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
        // EN: Decode: "the remainder when divided by <span class="chem">(x - 1)(x + 2)</span>" means the remainder has degree less than 2, so write it as <span class="chem">ax + b</span>; the two given remainders are two equations for <span class="chem">a</span> and <span class="chem">b</span>.
        "解碼：「除以 <span class=\"chem\">(x - 1)(x + 2)</span> 的餘式」的次數小於 2，所以把它寫成 <span class=\"chem\">ax + b</span>；題目給的兩個餘數就是關於 <span class=\"chem\">a</span> 和 <span class=\"chem\">b</span> 的兩條方程。",
        // EN: Since the divisor <span class="chem">(x - 1)(x + 2)</span> has degree <span class="chem">2</span>, the remainder has the linear form <span class="chem">ax + b</span>.
        "由於除式 <span class=\"chem\">(x - 1)(x + 2)</span> 為 <span class=\"chem\">2</span> 次，餘式為一次式 <span class=\"chem\">ax + b</span>。",
        // EN: Substitute <span class="chem">x = 1</span> and <span class="chem">x = -2</span> into <span class="chem">P(x) = Q(x)(x - 1)(x + 2) + ax + b</span>.
        "將 <span class=\"chem\">x = 1</span> 與 <span class=\"chem\">x = -2</span> 代入 <span class=\"chem\">P(x) = Q(x)(x - 1)(x + 2) + ax + b</span>。",
      ],
      // EN: <p>Let <span class="chem">P(x) = Q(x)(x - 1)(x + 2) + ax + b</span>. Then <span class="chem">P(1) = a + b = 4</span> and <span class="chem">P(-2) = -2a + b = -5</span>. Subtracting gives <span class="chem">3a = 9 => a = 3</span>, so <span class="chem">b = 1</span>. The remainder is <span class="chem">3x + 1</span>.</p>
      solution: "<p>設 <span class=\"chem\">P(x) = Q(x)(x - 1)(x + 2) + ax + b</span>。則 <span class=\"chem\">P(1) = a + b = 4</span> 及 <span class=\"chem\">P(-2) = -2a + b = -5</span>。兩式相減得 <span class=\"chem\">3a = 9 => a = 3</span>，故 <span class=\"chem\">b = 1</span>。餘式為 <span class=\"chem\">3x + 1</span>。</p>",
      // EN: <p><span class="chem">3x + 1</span></p>
      answer: "<p><span class=\"chem\">3x + 1</span></p>",
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

    // ── t2-3-q009 · mcq · foundation · AHL · AHL 2.13 · 2 marks
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
        // EN (option B): You divided using x = +2 instead of the root x = −2 of (x + 2): synthetic division then gives 5 + 6 = 11, so y = 3x + 11.
        "1": "你用 x = +2 而非 (x + 2) 的根 x = −2 來作除法：綜合除法便得 5 + 6 = 11，於是得 y = 3x + 11。",
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
        "垂直漸近線為 <span class=\"chem\">x = 3</span> 與 <span class=\"chem\">x = -3</span>。",
        // EN: The horizontal asymptote is <span class="chem">y = 0</span>.
        "水平漸近線為 <span class=\"chem\">y = 0</span>。",
        // EN: The horizontal asymptote is <span class="chem">y = 2</span>.
        "水平漸近線為 <span class=\"chem\">y = 2</span>。",
        // EN: The <span class="chem">x</span>-intercept is at <span class="chem">(2, 0)</span>.
        "<span class=\"chem\">x</span> 軸截距為 <span class=\"chem\">(2, 0)</span>。",
      ],
      hints: [
        // EN: Set the denominator <span class="chem">x^2 - 9 = 0</span> for vertical asymptotes.
        "令分母 <span class=\"chem\">x^2 - 9 = 0</span> 以求垂直漸近線。",
        // EN: Since <span class="chem">deg(num) = 1 &lt; deg(denom) = 2</span>, <span class="chem">f(x) -&gt; 0</span> as <span class="chem">x -&gt; +-infty</span>.
        "由於 <span class=\"chem\">deg(num) = 1 &lt; deg(denom) = 2</span>，當 <span class=\"chem\">x -&gt; +-infty</span> 時 <span class=\"chem\">f(x) -&gt; 0</span>。",
      ],
      // EN: <p>Denominator <span class="chem">x^2 - 9 = 0</span> gives VAs <span class="chem">x = +-3</span>. Since degree of numerator is less than degree of denominator, HA is <span class="chem">y = 0</span> (not <span class="chem">y = 2</span>). Setting <span class="chem">2x - 4 = 0</span> gives <span class="chem">x</span>-intercept <span class="chem">(2, 0)</span>.</p>
      solution: "<p>分母 <span class=\"chem\">x^2 - 9 = 0</span> 得出垂直漸近線 <span class=\"chem\">x = +-3</span>。由於分子次數小於分母次數，水平漸近線為 <span class=\"chem\">y = 0</span>（而非 <span class=\"chem\">y = 2</span>）。令 <span class=\"chem\">2x - 4 = 0</span> 得 <span class=\"chem\">x</span> 軸截距 <span class=\"chem\">(2, 0)</span>。</p>",
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
      // EN: <p>The graph of <span class="chem">y = f(x)</span> has an <span class="chem">x</span>-intercept at <span class="chem">(3, 0)</span>, a vertical asymptote <span class="chem">x = -1</span>, a local maximum at <span class="chem">(1, 4)</span>, and passes through <span class="chem">(4, -1)</span>. Select <strong>all</strong> true statements for the reciprocal graph <span class="chem">y = 1/f(x)</span>.</p>
      stem: "<p><span class=\"chem\">y = f(x)</span> 的圖像在 <span class=\"chem\">(3, 0)</span> 有 <span class=\"chem\">x</span> 軸截距、有垂直漸近線 <span class=\"chem\">x = -1</span>、在 <span class=\"chem\">(1, 4)</span> 有局部極大值，並通過 <span class=\"chem\">(4, -1)</span>。選出<strong>所有</strong>關於倒數圖像 <span class=\"chem\">y = 1/f(x)</span> 的正確陳述。</p>",
      options: [
        // EN: <span class="chem">x = 3</span> is a vertical asymptote of <span class="chem">y = 1/f(x)</span>.
        "<span class=\"chem\">x = 3</span> 是 <span class=\"chem\">y = 1/f(x)</span> 的垂直漸近線。",
        // EN: <span class="chem">(1, 0.25)</span> is a local minimum of <span class="chem">y = 1/f(x)</span>.
        "<span class=\"chem\">(1, 0.25)</span> 是 <span class=\"chem\">y = 1/f(x)</span> 的局部極小值。",
        // EN: <span class="chem">(4, -1)</span> is an invariant point on <span class="chem">y = 1/f(x)</span>.
        "<span class=\"chem\">(4, -1)</span> 是 <span class=\"chem\">y = 1/f(x)</span> 上的不變點。",
        // EN: <span class="chem">x = -1</span> is a vertical asymptote of <span class=\"chem\">y = 1/f(x)</span>.
        "<span class=\"chem\">x = -1</span> 是 <span class=\"chem\">y = 1/f(x)</span> 的垂直漸近線。",
      ],
      hints: [
        // EN: Roots of <span class="chem">f(x)</span> become vertical asymptotes of <span class="chem">1/f(x)</span>, while VAs of <span class="chem">f(x)</span> approach <span class="chem">0</span>.
        "<span class=\"chem\">f(x)</span> 的根會成為 <span class=\"chem\">1/f(x)</span> 的垂直漸近線，而 <span class=\"chem\">f(x)</span> 的垂直漸近線處函數值則趨向 <span class=\"chem\">0</span>。",
        // EN: Points with <span class="chem">y = +-1</span> stay unchanged, and a positive local maximum <span class="chem">(1, 4)</span> becomes a local minimum <span class="chem">(1, 1/4)</span>.
        "滿足 <span class=\"chem\">y = +-1</span> 的點保持不變，而正值的局部極大值 <span class=\"chem\">(1, 4)</span> 會變為局部極小值 <span class=\"chem\">(1, 1/4)</span>。",
      ],
      // EN: <p>At <span class="chem">x = 3</span>, <span class="chem">f(3) = 0</span> so <span class="chem">1/f(x)</span> has VA <span class="chem">x = 3</span>. Local max <span class="chem">(1, 4)</span> becomes local min <span class="chem">(1, 0.25)</span>. At <span class="chem">(4, -1)</span>, <span class="chem">1/(-1) = -1</span> (invariant). As <span class="chem">x -&gt; -1</span>, <span class="chem">f(x) -&gt; +-infty</span> so <span class="chem">1/f(x) -&gt; 0</span> (not a VA).</p>
      solution: "<p>在 <span class=\"chem\">x = 3</span> 處，<span class=\"chem\">f(3) = 0</span>，故 <span class=\"chem\">1/f(x)</span> 有垂直漸近線 <span class=\"chem\">x = 3</span>。局部極大值 <span class=\"chem\">(1, 4)</span> 變為局部極小值 <span class=\"chem\">(1, 0.25)</span>。在 <span class=\"chem\">(4, -1)</span> 處，<span class=\"chem\">1/(-1) = -1</span>（不變點）。當 <span class=\"chem\">x -&gt; -1</span> 時，<span class=\"chem\">f(x) -&gt; +-infty</span>，故 <span class=\"chem\">1/f(x) -&gt; 0</span>（並非垂直漸近線）。</p>",
    },

    // ── t2-3-q015 · mcq · exam · AHL · AHL 2.15 · 2 marks
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
        // EN (option C): You chose the interval where (x + 6)/(x − 4) is negative. The inequality needs (x + 6)/(x − 4) ≥ 0, which holds outside −6 and 4, not between them.
        "2": "你選了 (x + 6)/(x − 4) 為負的區間。不等式要求 (x + 6)/(x − 4) ≥ 0，這在 −6 與 4 之外成立，而不是在兩者之間。",
        // EN (option D): x = 4 makes the denominator zero, so x = 4 must be strictly excluded (x > 4, not x ≥ 4).
        "3": "x = 4 會使分母為零，因此必須嚴格排除 x = 4（是 x > 4，而非 x ≥ 4）。",
      },
    },

    // ── t2-3-q016 · numeric · exam · AHL · AHL 2.16 · 3 marks
    "t2-3-q016": {
      // EN: <p>Solve <span class="chem">|3x - 5| = |x + 3|</span>. Give the smaller of the two solutions.</p>
      stem: "<p>解 (Solve) <span class=\"chem\">|3x - 5| = |x + 3|</span>。寫出兩個解中較小的一個。</p>",
      hints: [
        // EN: Since both sides are moduli, either <span class="chem">3x - 5 = x + 3</span> or <span class="chem">3x - 5 = -(x + 3)</span>.
        "由於兩邊皆為絕對值，故必有 <span class=\"chem\">3x - 5 = x + 3</span> 或 <span class=\"chem\">3x - 5 = -(x + 3)</span>。",
        // EN: Solve both linear equations, check each solution in the original equation, and compare them.
        "解出兩條一次方程，把每個解代回原方程檢驗，再比較兩者。",
      ],
      // EN: <p>Case 1: <span class="chem">3x - 5 = x + 3 => x = 4</span>. Case 2: <span class="chem">3x - 5 = -x - 3 => 4x = 2 => x = 0.5</span>. Both satisfy the original equation (<span class="chem">|7| = |7|</span> and <span class="chem">|-3.5| = |3.5|</span>), so the smaller solution is <span class="chem">x = 0.5</span>.</p>
      solution: "<p>情況 1：<span class=\"chem\">3x - 5 = x + 3 => x = 4</span>。情況 2：<span class=\"chem\">3x - 5 = -x - 3 => 4x = 2 => x = 0.5</span>。兩者皆滿足原方程（<span class=\"chem\">|7| = |7|</span> 及 <span class=\"chem\">|-3.5| = |3.5|</span>），故較小的解為 <span class=\"chem\">x = 0.5</span>。</p>",
    },

    // ── t2-3-q017 · numeric · challenge · AHL · AHL 2.13 · 4 marks
    "t2-3-q017": {
      // EN: <p>The range of <span class="chem">f(x) = (x^2 + 3)/(x - 1)</span> (<span class="chem">x != 1</span>) is <span class="chem">y &lt;= a</span> or <span class="chem">y &gt;= b</span>. Find the exact value of <span class="chem">b</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = (x^2 + 3)/(x - 1)</span>（<span class=\"chem\">x != 1</span>）的值域為 <span class=\"chem\">y &lt;= a</span> 或 <span class=\"chem\">y &gt;= b</span>。求 (Find) <span class=\"chem\">b</span> 的準確值。</p>",
      hints: [
        // EN: Decode: "the range is <span class="chem">y &lt;= a</span> or <span class="chem">y &gt;= b</span>" asks which <span class="chem">y</span>-values are actually reached. Turn that into "for which <span class="chem">y</span> does the equation <span class="chem">y = f(x)</span> have a real solution <span class="chem">x</span>?"
        "解碼：「值域是 <span class=\"chem\">y &lt;= a</span> 或 <span class=\"chem\">y &gt;= b</span>」是問哪些 <span class=\"chem\">y</span> 值真的能取到。把它改寫成「對哪些 <span class=\"chem\">y</span>，方程 <span class=\"chem\">y = f(x)</span> 有實數解 <span class=\"chem\">x</span>？」",
        // EN: Set <span class="chem">y = (x^2 + 3)/(x - 1)</span> and rearrange into a quadratic in <span class="chem">x</span>: <span class="chem">x^2 - yx + (y + 3) = 0</span>.
        "設 <span class=\"chem\">y = (x^2 + 3)/(x - 1)</span>，整理為關於 <span class=\"chem\">x</span> 的二次方程：<span class=\"chem\">x^2 - yx + (y + 3) = 0</span>。",
        // EN: Real <span class="chem">x</span> exists only when the discriminant of this quadratic in <span class="chem">x</span> is non-negative: solve <span class="chem">y^2 - 4(y + 3) &gt;= 0</span> for <span class="chem">y</span>.
        "只有當這個關於 <span class=\"chem\">x</span> 的二次方程的判別式非負時，實數 <span class=\"chem\">x</span> 才存在：解關於 <span class=\"chem\">y</span> 的不等式 <span class=\"chem\">y^2 - 4(y + 3) &gt;= 0</span>。",
      ],
      // EN: <p>Rearranging gives <span class="chem">x^2 - yx + (y + 3) = 0</span>. Real <span class="chem">x</span> exists iff the discriminant <span class="chem">y^2 - 4y - 12 = (y - 6)(y + 2) &gt;= 0</span>, so <span class="chem">y &lt;= -2</span> or <span class="chem">y &gt;= 6</span>. Thus <span class="chem">a = -2</span> and <span class="chem">b = 6</span>.</p>
      solution: "<p>整理得 <span class=\"chem\">x^2 - yx + (y + 3) = 0</span>。實數 <span class=\"chem\">x</span> 存在，當且僅當判別式 <span class=\"chem\">y^2 - 4y - 12 = (y - 6)(y + 2) &gt;= 0</span>，故 <span class=\"chem\">y &lt;= -2</span> 或 <span class=\"chem\">y &gt;= 6</span>。因此 <span class=\"chem\">a = -2</span>、<span class=\"chem\">b = 6</span>。</p>",
    },

    // ── t2-3-q018 · short · challenge · AHL · AHL 2.16 · 6 marks
    "t2-3-q018": {
      // EN: <p>(a) Solve the inequality <span class="chem">|2x - 1| &gt; x + 2</span>. <strong>[4 marks]</strong><br>(b) Hence, or otherwise, solve <span class="chem">|2|x| - 1| &gt; |x| + 2</span>. <strong>[2 marks]</strong></p>
      stem: "<p>(a) 解 (Solve) 不等式 <span class=\"chem\">|2x - 1| &gt; x + 2</span>。<strong>[4 marks]</strong><br>(b) 由此，或用其他方法 (Hence, or otherwise)，解 <span class=\"chem\">|2|x| - 1| &gt; |x| + 2</span>。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: (a) is a modulus inequality whose right-hand side can be negative, so split into cases rather than squaring blindly. In (b), <span class="chem">|2|x| - 1| &gt; |x| + 2</span> is the inequality of (a) with <span class="chem">x</span> replaced by <span class="chem">|x|</span>.
        "解碼：(a) 是右邊可能為負的絕對值不等式，所以要分情況討論，而不是直接平方。(b) 中的 <span class=\"chem\">|2|x| - 1| &gt; |x| + 2</span> 就是把 (a) 的不等式中的 <span class=\"chem\">x</span> 換成 <span class=\"chem\">|x|</span>。",
        // EN: For <span class="chem">|A| &gt; B</span>, either <span class="chem">A &gt; B</span> or <span class="chem">A &lt; -B</span> (if <span class="chem">B &lt; 0</span>, it holds automatically, which is already inside <span class="chem">x &lt; -1/3</span>).
        "對於 <span class=\"chem\">|A| &gt; B</span>，必有 <span class=\"chem\">A &gt; B</span> 或 <span class=\"chem\">A &lt; -B</span>（若 <span class=\"chem\">B &lt; 0</span> 則自動成立，且已包含在 <span class=\"chem\">x &lt; -1/3</span> 內）。",
        // EN: In part (b), replace <span class="chem">x</span> with <span class="chem">|x|</span> in your answer to part (a).
        "在 (b) 部中，將 (a) 部答案裏的 <span class=\"chem\">x</span> 換成 <span class=\"chem\">|x|</span>。",
      ],
      // EN: <p>(a) <span class="chem">2x - 1 &gt; x + 2 => x &gt; 3</span>, or <span class="chem">2x - 1 &lt; -x - 2 => 3x &lt; -1 => x &lt; -1/3</span>. So <span class="chem">x &lt; -1/3</span> or <span class="chem">x &gt; 3</span>. (b) Replacing <span class="chem">x</span> by <span class="chem">|x|</span>: <span class="chem">|x| &lt; -1/3</span> has no solution, while <span class="chem">|x| &gt; 3</span> gives <span class="chem">x &lt; -3</span> or <span class="chem">x &gt; 3</span>.</p>
      solution: "<p>(a) <span class=\"chem\">2x - 1 &gt; x + 2 => x &gt; 3</span>，或 <span class=\"chem\">2x - 1 &lt; -x - 2 => 3x &lt; -1 => x &lt; -1/3</span>。故 <span class=\"chem\">x &lt; -1/3</span> 或 <span class=\"chem\">x &gt; 3</span>。(b) 以 <span class=\"chem\">|x|</span> 代替 <span class=\"chem\">x</span>：<span class=\"chem\">|x| &lt; -1/3</span> 無解，而 <span class=\"chem\">|x| &gt; 3</span> 得出 <span class=\"chem\">x &lt; -3</span> 或 <span class=\"chem\">x &gt; 3</span>。</p>",
      // EN: <p>(a) <span class="chem">x &lt; -1/3</span> or <span class="chem">x &gt; 3</span>; (b) <span class="chem">x &lt; -3</span> or <span class="chem">x &gt; 3</span></p>
      answer: "<p>(a) <span class=\"chem\">x &lt; -1/3</span> 或 <span class=\"chem\">x &gt; 3</span>；(b) <span class=\"chem\">x &lt; -3</span> 或 <span class=\"chem\">x &gt; 3</span></p>",
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

    // ── t2-3-q019 · short · exam · AHL · AHL 2.15 · 4 marks
    "t2-3-q019": {
      // EN: <p>Using your GDC, solve the inequality <span class="chem">x^3 - 4x &gt; 1</span>. Give the end points of your intervals correct to 3 significant figures.</p>
      stem: "<p>利用 GDC 解不等式 <span class=\"chem\">x^3 - 4x &gt; 1</span>。區間的端點須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Rearrange to <span class="chem">x^3 - 4x - 1 &gt; 0</span> and graph <span class="chem">y = x^3 - 4x - 1</span>, or graph <span class="chem">Y_1 = x^3 - 4x</span> and <span class="chem">Y_2 = 1</span>.
        "移項得 <span class=\"chem\">x^3 - 4x - 1 &gt; 0</span> 並繪出 <span class=\"chem\">y = x^3 - 4x - 1</span>，或繪出 <span class=\"chem\">Y_1 = x^3 - 4x</span> 與 <span class=\"chem\">Y_2 = 1</span>。",
        // EN: Use the zero (or intersect) tool to find all three crossing points, then read off where the cubic is <strong>above</strong> the <span class="chem">x</span>-axis.
        "用求零點（或求交點）功能找出全部三個交點，再讀出三次曲線位於 <span class=\"chem\">x</span> 軸<strong>上方</strong>的部分。",
      ],
      // EN: <p>Graph <span class="chem">y = x^3 - 4x - 1</span>. The zero tool gives three roots: <span class="chem">x ≈ -1.8608</span>, <span class="chem">x ≈ -0.25410</span> and <span class="chem">x ≈ 2.1149</span>. A cubic with positive leading coefficient is above the <span class="chem">x</span>-axis between the first two roots and to the right of the third, so the solution is <span class="chem">-1.86 &lt; x &lt; -0.254</span> or <span class="chem">x &gt; 2.11</span>. (There is no exact method here, which is why this is a Paper 2 question.)</p>
      solution: "<p>繪出 <span class=\"chem\">y = x^3 - 4x - 1</span>。求零點功能給出三個根：<span class=\"chem\">x ≈ -1.8608</span>、<span class=\"chem\">x ≈ -0.25410</span> 和 <span class=\"chem\">x ≈ 2.1149</span>。首項係數為正的三次函數在首兩個根之間及第三個根的右方位於 <span class=\"chem\">x</span> 軸上方，所以解為 <span class=\"chem\">-1.86 &lt; x &lt; -0.254</span> 或 <span class=\"chem\">x &gt; 2.11</span>。（此題沒有準確的代數方法，所以屬於 Paper 2 題目。）</p>",
      // EN: <p><span class="chem">-1.86 &lt; x &lt; -0.254</span> or <span class="chem">x &gt; 2.11</span></p>
      answer: "<p><span class=\"chem\">-1.86 &lt; x &lt; -0.254</span> 或 <span class=\"chem\">x &gt; 2.11</span></p>",
      markscheme: [
        // EN: M1: Rearranges to x³ − 4x − 1 > 0 and graphs y = x³ − 4x − 1 (or graphs y = x³ − 4x and y = 1 and finds their intersections).
        "M1：移項得 x³ − 4x − 1 > 0，並繪出 y = x³ − 4x − 1（或繪出 y = x³ − 4x 與 y = 1 並求交點）。",
        // EN: A1: Finds all three critical values x = −1.86, −0.254 and 2.11.
        "A1：求出全部三個臨界值 x = −1.86、−0.254 和 2.11。",
        // EN: A1: −1.86 < x < −0.254.
        "A1：−1.86 < x < −0.254。",
        // EN: A1: x > 2.11 (both intervals, with strict inequalities).
        "A1：x > 2.11（兩個區間都要寫出，並用嚴格不等號）。",
      ],
    },

    // ── t2-3-q020 · mcq · foundation · AHL · AHL 2.12 · 2 marks
    "t2-3-q020": {
      // EN: <p>The graph of a cubic <span class="chem">y = f(x)</span> touches the <span class="chem">x</span>-axis at <span class="chem">x = -1</span>, crosses the <span class="chem">x</span>-axis at <span class="chem">x = 3</span>, and has <span class="chem">y</span>-intercept <span class="chem">(0, -3)</span>. Which equation could be <span class="chem">f(x)</span>?</p>
      stem: "<p>三次函數 <span class=\"chem\">y = f(x)</span> 的圖像在 <span class=\"chem\">x = -1</span> 與 <span class=\"chem\">x</span> 軸相切，在 <span class=\"chem\">x = 3</span> 穿過 <span class=\"chem\">x</span> 軸，而 <span class=\"chem\">y</span> 軸截距為 <span class=\"chem\">(0, -3)</span>。下列哪一個可以是 <span class=\"chem\">f(x)</span>？</p>",
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
        "重複（平方）因式 <span class=\"chem\">(x - a)^2</span> 使圖像在 <span class=\"chem\">x = a</span> 與軸相切；單一因式則使圖像穿過軸。",
        // EN: Check the <span class="chem">y</span>-intercept by substituting <span class="chem">x = 0</span>.
        "代入 <span class=\"chem\">x = 0</span> 檢查 <span class=\"chem\">y</span> 軸截距。",
      ],
      // EN: <p>Touching at <span class="chem">x = -1</span> needs the squared factor <span class="chem">(x + 1)^2</span>, and crossing at <span class="chem">x = 3</span> needs the single factor <span class="chem">(x - 3)</span>, so <span class="chem">f(x) = a(x + 1)^2 (x - 3)</span>. Then <span class="chem">f(0) = a(1)(-3) = -3a = -3 => a = 1</span>, which matches the <span class="chem">y</span>-intercept, so <span class="chem">f(x) = (x + 1)^2 (x - 3)</span>.</p>
      solution: "<p>在 <span class=\"chem\">x = -1</span> 相切需要平方因式 <span class=\"chem\">(x + 1)^2</span>，在 <span class=\"chem\">x = 3</span> 穿過需要單一因式 <span class=\"chem\">(x - 3)</span>，所以 <span class=\"chem\">f(x) = a(x + 1)^2 (x - 3)</span>。於是 <span class=\"chem\">f(0) = a(1)(-3) = -3a = -3 => a = 1</span>，與 <span class=\"chem\">y</span> 軸截距相符，故 <span class=\"chem\">f(x) = (x + 1)^2 (x - 3)</span>。</p>",
      misconception: {
        // EN (option B): A factor (x − 1) gives a root at x = +1, not x = −1: the graph touches the axis where (x + 1)² = 0.
        "1": "因式 (x − 1) 給出的根是 x = +1，而不是 x = −1：圖像在 (x + 1)² = 0 處與軸相切。",
        // EN (option C): Here the squared factor is (x − 3)², so the graph would touch at x = 3 and cross at x = −1, and f(0) = 9.
        "2": "這裡的平方因式是 (x − 3)²，所以圖像會在 x = 3 相切、在 x = −1 穿過，而且 f(0) = 9。",
        // EN (option D): The roots are right, but f(0) = −(1)(−3) = +3, not −3. The leading coefficient must be positive.
        "3": "根是對的，但 f(0) = −(1)(−3) = +3，而不是 −3。首項係數必須為正。",
      },
    },

    // ── t2-3-q021 · multi · exam · AHL · AHL 2.16 · 3 marks
    "t2-3-q021": {
      // EN: <p>The graph of <span class="chem">y = f(x)</span> has a local maximum at <span class="chem">(-1, 3)</span>, passes through <span class="chem">(0, 1)</span>, and crosses the <span class="chem">x</span>-axis at <span class="chem">(2, 0)</span>. Select <strong>all</strong> true statements about the graph of <span class="chem">y = [f(x)]^2</span>.</p>
      stem: "<p><span class=\"chem\">y = f(x)</span> 的圖像在 <span class=\"chem\">(-1, 3)</span> 有局部極大值，通過 <span class=\"chem\">(0, 1)</span>，並在 <span class=\"chem\">(2, 0)</span> 穿過 <span class=\"chem\">x</span> 軸。選出<strong>所有</strong>關於 <span class=\"chem\">y = [f(x)]^2</span> 圖像的正確陳述。</p>",
      options: [
        // EN: <span class="chem">(2, 0)</span> is a local minimum of <span class="chem">y = [f(x)]^2</span>.
        "<span class=\"chem\">(2, 0)</span> 是 <span class=\"chem\">y = [f(x)]^2</span> 的局部極小值。",
        // EN: <span class="chem">(-1, 9)</span> is a local maximum of <span class="chem">y = [f(x)]^2</span>.
        "<span class=\"chem\">(-1, 9)</span> 是 <span class=\"chem\">y = [f(x)]^2</span> 的局部極大值。",
        // EN: <span class="chem">(0, 1)</span> is an invariant point.
        "<span class=\"chem\">(0, 1)</span> 是不變點。",
        // EN: <span class="chem">x = 2</span> is a vertical asymptote of <span class="chem">y = [f(x)]^2</span>.
        "<span class=\"chem\">x = 2</span> 是 <span class=\"chem\">y = [f(x)]^2</span> 的垂直漸近線。",
      ],
      hints: [
        // EN: Squaring keeps <span class="chem">y = 0</span> and <span class="chem">y = 1</span> unchanged, makes every <span class="chem">y</span>-value non-negative, and squares the size of the others.
        "平方後 <span class=\"chem\">y = 0</span> 與 <span class=\"chem\">y = 1</span> 保持不變，所有 <span class=\"chem\">y</span> 值都變為非負，其餘的值則取平方。",
        // EN: Where <span class="chem">f</span> crosses the axis, <span class="chem">[f(x)]^2</span> touches it and has a minimum; a turning point with <span class="chem">f &gt; 0</span> stays a turning point of the same type.
        "在 <span class=\"chem\">f</span> 穿過軸的地方，<span class=\"chem\">[f(x)]^2</span> 與軸相切並有極小值；<span class=\"chem\">f &gt; 0</span> 的轉向點仍是同類的轉向點。",
      ],
      // EN: <p>At <span class="chem">x = 2</span>, <span class="chem">f = 0</span> and <span class="chem">f</span> changes sign, so <span class="chem">[f(x)]^2</span> has a smooth local minimum <span class="chem">(2, 0)</span>. At <span class="chem">x = -1</span>, <span class="chem">f = 3 &gt; 0</span> and <span class="chem">f</span> is at a local maximum, so <span class="chem">[f(x)]^2</span> has a local maximum <span class="chem">(-1, 9)</span>. At <span class="chem">x = 0</span>, <span class="chem">1^2 = 1</span>, so <span class="chem">(0, 1)</span> is invariant. Squaring a finite value is finite, so <span class="chem">x = 2</span> is not an asymptote.</p>
      solution: "<p>在 <span class=\"chem\">x = 2</span>，<span class=\"chem\">f = 0</span> 且 <span class=\"chem\">f</span> 變號，所以 <span class=\"chem\">[f(x)]^2</span> 有平滑的局部極小值 <span class=\"chem\">(2, 0)</span>。在 <span class=\"chem\">x = -1</span>，<span class=\"chem\">f = 3 &gt; 0</span> 且 <span class=\"chem\">f</span> 取局部極大值，所以 <span class=\"chem\">[f(x)]^2</span> 有局部極大值 <span class=\"chem\">(-1, 9)</span>。在 <span class=\"chem\">x = 0</span>，<span class=\"chem\">1^2 = 1</span>，所以 <span class=\"chem\">(0, 1)</span> 是不變點。有限值的平方仍是有限值，所以 <span class=\"chem\">x = 2</span> 不是漸近線。</p>",
      misconception: {
        // EN (option D): Squaring never creates an asymptote: at x = 2, [f(2)]² = 0, so the graph touches the x-axis there. Vertical asymptotes from roots belong to 1/f(x).
        "3": "平方不會產生漸近線：在 x = 2，[f(2)]² = 0，所以圖像在該處與 x 軸相切。由根產生的垂直漸近線屬於 1/f(x)。",
      },
    },

  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('zh-Hant', 't2-3.q', {
  questions: {

    // ── t2-3-q022 · numeric · exam · SL · SL 2.11 · 5 marks
    "t2-3-q022": {
      // EN: <p>Let <span class="chem">f(x) = e^x - 3x</span>. The graph of <span class="chem">y = g(x)</span> is obtained from the graph of <span class="chem">y = f(x)</span> by a horizontal stretch with scale factor <span class="chem">2</span>, followed by a translation of <span class="chem">3</span> units up.</p><p>The equation <span class="chem">g(x) = 5</span> has one negative and one positive solution. Find the positive solution.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = e^x - 3x</span>。把 <span class=\"chem\">y = f(x)</span> 的圖像作比例因子為 <span class=\"chem\">2</span> 的水平伸縮，再向上平移 <span class=\"chem\">3</span> 單位，便得到 <span class=\"chem\">y = g(x)</span> 的圖像。</p><p>方程 <span class=\"chem\">g(x) = 5</span> 有一個負解和一個正解。求 (Find) 該正解。</p>",
      hints: [
        // EN: Decode: first build the formula for <span class="chem">g</span> from the words, then solve an equation that has no algebraic method, so use the GDC.
        "解碼：先根據文字寫出 <span class=\"chem\">g</span> 的式子，然後要解一條沒有代數方法的方程，所以使用 GDC。",
        // EN: A horizontal stretch with scale factor <span class="chem">2</span> replaces <span class="chem">x</span> by <span class="chem">x/2</span>; moving up <span class="chem">3</span> adds <span class="chem">3</span>. So <span class="chem">g(x) = e^{x/2} - 3(x/2) + 3</span>.
        "比例因子為 <span class=\"chem\">2</span> 的水平伸縮把 <span class=\"chem\">x</span> 換成 <span class=\"chem\">x/2</span>；向上平移 <span class=\"chem\">3</span> 即加上 <span class=\"chem\">3</span>。所以 <span class=\"chem\">g(x) = e^{x/2} - 3(x/2) + 3</span>。",
        // EN: Graph <span class="chem">Y_1 = e^{x/2} - 1.5x + 3</span> and <span class="chem">Y_2 = 5</span> and use the intersect tool on the right-hand crossing.
        "繪出 <span class=\"chem\">Y_1 = e^{x/2} - 1.5x + 3</span> 與 <span class=\"chem\">Y_2 = 5</span> 的圖像，並對右邊的交點使用求交點功能。",
      ],
      // EN: <p><span class="chem">g(x) = f(x/2) + 3 = e^{x/2} - 1.5x + 3</span>. Solving <span class="chem">e^{x/2} - 1.5x + 3 = 5</span> on the GDC gives <span class="chem">x ≈ -0.910</span> and <span class="chem">x ≈ 4.25</span>. The positive solution is <span class="chem">x ≈ 4.25</span>.</p><p>Common slip: a horizontal stretch with scale factor <span class="chem">2</span> is <span class="chem">f(x/2)</span>, not <span class="chem">f(2x)</span>.</p>
      solution: "<p><span class=\"chem\">g(x) = f(x/2) + 3 = e^{x/2} - 1.5x + 3</span>。在 GDC 上解 <span class=\"chem\">e^{x/2} - 1.5x + 3 = 5</span> 得 <span class=\"chem\">x ≈ -0.910</span> 及 <span class=\"chem\">x ≈ 4.25</span>。正解為 <span class=\"chem\">x ≈ 4.25</span>。</p><p>常見錯誤：比例因子為 <span class=\"chem\">2</span> 的水平伸縮是 <span class=\"chem\">f(x/2)</span>，而不是 <span class=\"chem\">f(2x)</span>。</p>",
    },

    // ── t2-3-q023 · numeric · challenge · SL · SL 2.11 · 6 marks
    "t2-3-q023": {
      // EN: <p>A standard response curve is modelled by <span class="chem">f(t) = t^2 e^{-t}</span>, <span class="chem">t &gt;= 0</span>. In a laboratory test, the response of a new sensor is found to follow <span class="chem">g(t) = A f(t/k)</span>, <span class="chem">t &gt;= 0</span>, where <span class="chem">A</span> and <span class="chem">k</span> are positive constants and <span class="chem">t</span> is the time in seconds. The data show that the response of the new sensor reaches its greatest value, <span class="chem">10</span> units, at <span class="chem">t = 6</span>.</p><p>Find the earliest time at which the response of the new sensor is <span class="chem">5</span> units.</p>
      stem: "<p>一條標準反應曲線的模型為 <span class=\"chem\">f(t) = t^2 e^{-t}</span>，<span class=\"chem\">t &gt;= 0</span>。在一項實驗室測試中，發現一個新感應器的反應遵從 <span class=\"chem\">g(t) = A f(t/k)</span>，<span class=\"chem\">t &gt;= 0</span>，其中 <span class=\"chem\">A</span> 和 <span class=\"chem\">k</span> 為正常數，<span class=\"chem\">t</span> 為以秒計的時間。數據顯示，新感應器的反應在 <span class=\"chem\">t = 6</span> 時達到最大值 <span class=\"chem\">10</span> 單位。</p><p>求 (Find) 新感應器的反應為 <span class=\"chem\">5</span> 單位的最早時間。</p>",
      hints: [
        // EN: Decode: <span class="chem">g</span> is <span class="chem">f</span> after a vertical stretch (factor <span class="chem">A</span>) and a horizontal stretch (factor <span class="chem">k</span>). The peak of <span class="chem">g</span> is the image of the peak of <span class="chem">f</span>, so find the peak of <span class="chem">f</span> first, then <span class="chem">A</span> and <span class="chem">k</span>, then solve <span class="chem">g(t) = 5</span>.
        "解碼：<span class=\"chem\">g</span> 是 <span class=\"chem\">f</span> 經過垂直伸縮（比例因子 <span class=\"chem\">A</span>）和水平伸縮（比例因子 <span class=\"chem\">k</span>）後的圖像。<span class=\"chem\">g</span> 的峰點是 <span class=\"chem\">f</span> 的峰點的像，所以先求 <span class=\"chem\">f</span> 的峰點，再求 <span class=\"chem\">A</span> 和 <span class=\"chem\">k</span>，最後解 <span class=\"chem\">g(t) = 5</span>。",
        // EN: Use the GDC maximum tool on <span class="chem">y = x^2 e^{-x}</span>: the peak is at <span class="chem">t = 2</span> with value <span class="chem">f(2) = 4e^{-2} ≈ 0.541</span>.
        "對 <span class=\"chem\">y = x^2 e^{-x}</span> 使用 GDC 的求極大值功能：峰點在 <span class=\"chem\">t = 2</span>，其值為 <span class=\"chem\">f(2) = 4e^{-2} ≈ 0.541</span>。",
        // EN: The horizontal stretch sends <span class="chem">t = 2</span> to <span class="chem">t = 2k = 6</span>, so <span class="chem">k = 3</span>. The vertical stretch sends <span class="chem">0.541</span> to <span class="chem">10</span>, so <span class="chem">A = 10/(4e^{-2}) ≈ 18.5</span>.
        "水平伸縮把 <span class=\"chem\">t = 2</span> 變為 <span class=\"chem\">t = 2k = 6</span>，所以 <span class=\"chem\">k = 3</span>。垂直伸縮把 <span class=\"chem\">0.541</span> 變為 <span class=\"chem\">10</span>，所以 <span class=\"chem\">A = 10/(4e^{-2}) ≈ 18.5</span>。",
        // EN: Now intersect <span class="chem">y = A(x/3)^2 e^{-x/3}</span> with <span class="chem">y = 5</span> and take the smallest non-negative <span class="chem">x</span>.
        "然後求 <span class=\"chem\">y = A(x/3)^2 e^{-x/3}</span> 與 <span class=\"chem\">y = 5</span> 的交點，並取最小的非負 <span class=\"chem\">x</span>。",
      ],
      // EN: <p><strong>Decode.</strong> The new curve is a stretched copy of <span class="chem">f</span>; its peak <span class="chem">(6, 10)</span> is the image of the peak of <span class="chem">f</span>.</p><p>On the GDC, <span class="chem">f</span> has its maximum at <span class="chem">(2, 0.5413…)</span> (indeed <span class="chem">f(2) = 4e^{-2}</span>). A horizontal stretch with factor <span class="chem">k</span> maps <span class="chem">t = 2</span> to <span class="chem">2k = 6</span>, so <span class="chem">k = 3</span>. A vertical stretch with factor <span class="chem">A</span> maps <span class="chem">4e^{-2}</span> to <span class="chem">10</span>, so <span class="chem">A = 2.5e^2 ≈ 18.47</span>.</p><p>Solving <span class="chem">18.47(t/3)^2 e^{-t/3} = 5</span> for <span class="chem">t &gt;= 0</span> gives <span class="chem">t ≈ 2.28</span> and <span class="chem">t ≈ 12.5</span> (the GDC also shows a negative root, which is outside the domain). The earliest time is <span class="chem">t ≈ 2.28</span> s.</p>
      solution: "<p><strong>解碼。</strong>新曲線是 <span class=\"chem\">f</span> 經伸縮後的圖像；它的峰點 <span class=\"chem\">(6, 10)</span> 是 <span class=\"chem\">f</span> 的峰點的像。</p><p>在 GDC 上，<span class=\"chem\">f</span> 的極大點在 <span class=\"chem\">(2, 0.5413…)</span>（事實上 <span class=\"chem\">f(2) = 4e^{-2}</span>）。比例因子為 <span class=\"chem\">k</span> 的水平伸縮把 <span class=\"chem\">t = 2</span> 映射至 <span class=\"chem\">2k = 6</span>，所以 <span class=\"chem\">k = 3</span>。比例因子為 <span class=\"chem\">A</span> 的垂直伸縮把 <span class=\"chem\">4e^{-2}</span> 映射至 <span class=\"chem\">10</span>，所以 <span class=\"chem\">A = 2.5e^2 ≈ 18.47</span>。</p><p>在 <span class=\"chem\">t &gt;= 0</span> 的範圍內解 <span class=\"chem\">18.47(t/3)^2 e^{-t/3} = 5</span>，得 <span class=\"chem\">t ≈ 2.28</span> 及 <span class=\"chem\">t ≈ 12.5</span>（GDC 亦會顯示一個負根，但它在定義域以外）。最早時間為 <span class=\"chem\">t ≈ 2.28</span> s。</p>",
    },

    // ── t2-3-q024 · numeric · exam · AHL · AHL 2.12 · 3 marks
    "t2-3-q024": {
      // EN: <p>Let <span class="chem">P(x) = x^4 - 3x^3 - 2x^2 + 7x + 1</span>. The equation <span class="chem">P(x) = 0</span> has four real roots. Find the smallest positive root.</p>
      stem: "<p>設 <span class=\"chem\">P(x) = x^4 - 3x^3 - 2x^2 + 7x + 1</span>。方程 <span class=\"chem\">P(x) = 0</span> 有四個實根。求 (Find) 最小的正根。</p>",
      hints: [
        // EN: Graph <span class="chem">y = x^4 - 3x^3 - 2x^2 + 7x + 1</span> in a window such as <span class="chem">-3 &lt;= x &lt;= 4</span> so that all four crossings are visible.
        "在例如 <span class=\"chem\">-3 &lt;= x &lt;= 4</span> 的視窗中繪出 <span class=\"chem\">y = x^4 - 3x^3 - 2x^2 + 7x + 1</span> 的圖像，使四個交點都能看見。",
        // EN: Two roots are negative. Use the zero (root) tool on the first crossing to the right of the <span class="chem">y</span>-axis.
        "其中兩個根是負數。對 <span class=\"chem\">y</span> 軸右方的第一個交點使用求零點（求根）功能。",
      ],
      // EN: <p>The GDC gives the roots <span class="chem">x ≈ -1.44</span>, <span class="chem">-0.139</span>, <span class="chem">1.82</span> and <span class="chem">2.76</span>. The smallest positive root is <span class="chem">x ≈ 1.82</span>.</p><p>Check: the four roots add up to <span class="chem">3</span>, which equals <span class="chem">-a_3/a_4 = -(-3)/1</span>.</p>
      solution: "<p>GDC 給出的根為 <span class=\"chem\">x ≈ -1.44</span>、<span class=\"chem\">-0.139</span>、<span class=\"chem\">1.82</span> 和 <span class=\"chem\">2.76</span>。最小的正根為 <span class=\"chem\">x ≈ 1.82</span>。</p><p>驗算：四個根之和為 <span class=\"chem\">3</span>，等於 <span class=\"chem\">-a_3/a_4 = -(-3)/1</span>。</p>",
    },

    // ── t2-3-q025 · short · challenge · AHL · AHL 2.12, 2.15 · 7 marks
    "t2-3-q025": {
      // EN: <p>An open box is made from a rectangular sheet of card measuring <span class="chem">30</span> cm by <span class="chem">20</span> cm. A square of side <span class="chem">x</span> cm is cut from each corner and the sides are folded up.</p><p>(a) Show that the volume of the box is <span class="chem">V = x(30 - 2x)(20 - 2x)</span> cm³, and write down the set of possible values of <span class="chem">x</span>. <strong>[2 marks]</strong></p><p>(b) The box must hold exactly <span class="chem">900</span> cm³. Find the possible values of <span class="chem">x</span>, and explain why the equation <span class="chem">V = 900</span> has a third root that must be rejected. <strong>[3 marks]</strong></p><p>(c) Find the set of values of <span class="chem">x</span> for which the box holds more than <span class="chem">900</span> cm³. <strong>[2 marks]</strong></p>
      stem: "<p>用一張 <span class=\"chem\">30</span> cm × <span class=\"chem\">20</span> cm 的長方形卡紙製作一個無蓋盒子。在每個角剪去一個邊長 <span class=\"chem\">x</span> cm 的正方形，然後把四邊摺起。</p><p>(a) 證明 (Show that) 盒子的體積為 <span class=\"chem\">V = x(30 - 2x)(20 - 2x)</span> cm³，並寫出 (Write down) <span class=\"chem\">x</span> 的所有可能值的集合。<strong>[2 marks]</strong></p><p>(b) 盒子的容量必須恰好為 <span class=\"chem\">900</span> cm³。求 (Find) <span class=\"chem\">x</span> 的可能值，並解釋 (Explain) 為何方程 <span class=\"chem\">V = 900</span> 的第三個根必須捨去。<strong>[3 marks]</strong></p><p>(c) 求盒子容量大於 <span class=\"chem\">900</span> cm³ 時 <span class=\"chem\">x</span> 的值的集合。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: a real-life cubic. The physical situation hides a domain condition (every length must be positive), which decides which GDC roots you keep.
        "解碼：這是一道實際情境的三次函數題。情境中隱藏了一個定義域條件（每個長度都必須為正），它決定要保留哪些 GDC 根。",
        // EN: After cutting, the base is <span class="chem">(30 - 2x)</span> by <span class="chem">(20 - 2x)</span> and the height is <span class="chem">x</span>. All three must be positive.
        "剪去後，底面為 <span class=\"chem\">(30 - 2x)</span> × <span class=\"chem\">(20 - 2x)</span>，高為 <span class=\"chem\">x</span>。三者都必須為正。",
        // EN: Graph <span class="chem">Y_1 = x(30 - 2x)(20 - 2x)</span> and <span class="chem">Y_2 = 900</span>; find all intersections, then keep the ones with <span class="chem">0 &lt; x &lt; 10</span>.
        "繪出 <span class=\"chem\">Y_1 = x(30 - 2x)(20 - 2x)</span> 與 <span class=\"chem\">Y_2 = 900</span> 的圖像；求出所有交點，然後只保留滿足 <span class=\"chem\">0 &lt; x &lt; 10</span> 的交點。",
      ],
      // EN: <p><strong>Decode.</strong> The algebra gives a cubic with three roots, but the card only allows <span class="chem">0 &lt; x &lt; 10</span>.</p><p>(a) Folding up leaves a base <span class="chem">(30 - 2x)</span> by <span class="chem">(20 - 2x)</span> and height <span class="chem">x</span>, so <span class="chem">V = x(30 - 2x)(20 - 2x)</span>. We need <span class="chem">x &gt; 0</span> and <span class="chem">20 - 2x &gt; 0</span>, so <span class="chem">0 &lt; x &lt; 10</span>.</p><p>(b) The GDC gives <span class="chem">x ≈ 2.30</span>, <span class="chem">5.78</span> and <span class="chem">16.9</span>. Only the first two lie in <span class="chem">0 &lt; x &lt; 10</span>.</p><p>(c) On <span class="chem">0 &lt; x &lt; 10</span> the volume curve is above <span class="chem">900</span> between the two valid roots: <span class="chem">2.30 &lt; x &lt; 5.78</span>.</p>
      solution: "<p><strong>解碼。</strong>代數運算得出一條有三個根的三次方程，但卡紙只容許 <span class=\"chem\">0 &lt; x &lt; 10</span>。</p><p>(a) 摺起後底面為 <span class=\"chem\">(30 - 2x)</span> × <span class=\"chem\">(20 - 2x)</span>，高為 <span class=\"chem\">x</span>，所以 <span class=\"chem\">V = x(30 - 2x)(20 - 2x)</span>。我們需要 <span class=\"chem\">x &gt; 0</span> 及 <span class=\"chem\">20 - 2x &gt; 0</span>，所以 <span class=\"chem\">0 &lt; x &lt; 10</span>。</p><p>(b) GDC 給出 <span class=\"chem\">x ≈ 2.30</span>、<span class=\"chem\">5.78</span> 和 <span class=\"chem\">16.9</span>。只有前兩個位於 <span class=\"chem\">0 &lt; x &lt; 10</span> 內。</p><p>(c) 在 <span class=\"chem\">0 &lt; x &lt; 10</span> 上，體積曲線在兩個有效根之間位於 <span class=\"chem\">900</span> 上方：<span class=\"chem\">2.30 &lt; x &lt; 5.78</span>。</p>",
      // EN: <p>(a) Length <span class="chem">30 - 2x</span>, width <span class="chem">20 - 2x</span>, height <span class="chem">x</span>, so <span class="chem">V = x(30 - 2x)(20 - 2x)</span>, with <span class="chem">0 &lt; x &lt; 10</span>.</p><p>(b) <span class="chem">x ≈ 2.30</span> or <span class="chem">x ≈ 5.78</span>. The third root <span class="chem">x ≈ 16.9</span> is rejected because it is not in <span class="chem">0 &lt; x &lt; 10</span> (the width <span class="chem">20 - 2x</span> would be negative).</p><p>(c) <span class="chem">2.30 &lt; x &lt; 5.78</span>.</p>
      answer: "<p>(a) 長 <span class=\"chem\">30 - 2x</span>、闊 <span class=\"chem\">20 - 2x</span>、高 <span class=\"chem\">x</span>，所以 <span class=\"chem\">V = x(30 - 2x)(20 - 2x)</span>，其中 <span class=\"chem\">0 &lt; x &lt; 10</span>。</p><p>(b) <span class=\"chem\">x ≈ 2.30</span> 或 <span class=\"chem\">x ≈ 5.78</span>。第三個根 <span class=\"chem\">x ≈ 16.9</span> 須捨去，因為它不在 <span class=\"chem\">0 &lt; x &lt; 10</span> 內（闊 <span class=\"chem\">20 - 2x</span> 會是負數）。</p><p>(c) <span class=\"chem\">2.30 &lt; x &lt; 5.78</span>。</p>",
      markscheme: [
        // EN: A1: (a) states the dimensions <span class="chem">x</span>, <span class="chem">30 - 2x</span>, <span class="chem">20 - 2x</span> and multiplies them (the result <span class="chem">V = x(30 - 2x)(20 - 2x)</span> is given, AG).
        "A1：(a) 寫出尺寸 <span class=\"chem\">x</span>、<span class=\"chem\">30 - 2x</span>、<span class=\"chem\">20 - 2x</span> 並把它們相乘（結果 <span class=\"chem\">V = x(30 - 2x)(20 - 2x)</span> 為題目已給出答案，AG）。",
        // EN: A1: (a) <span class="chem">0 &lt; x &lt; 10</span>.
        "A1：(a) <span class=\"chem\">0 &lt; x &lt; 10</span>。",
        // EN: M1: (b) solves <span class="chem">x(30 - 2x)(20 - 2x) = 900</span> on the GDC (graph and intersect, or polynomial solver).
        "M1：(b) 在 GDC 上解 <span class=\"chem\">x(30 - 2x)(20 - 2x) = 900</span>（繪圖求交點，或用多項式求解程式）。",
        // EN: A1: (b) <span class="chem">x = 2.30</span> and <span class="chem">x = 5.78</span>.
        "A1：(b) <span class=\"chem\">x = 2.30</span> 及 <span class=\"chem\">x = 5.78</span>。",
        // EN: R1: (b) rejects <span class="chem">x = 16.9</span> because it lies outside <span class="chem">0 &lt; x &lt; 10</span> (a side length would be negative).
        "R1：(b) 捨去 <span class=\"chem\">x = 16.9</span>，因為它位於 <span class=\"chem\">0 &lt; x &lt; 10</span> 以外（某邊長會是負數）。",
        // EN: M1: (c) the curve <span class="chem">y = V</span> lies above <span class="chem">y = 900</span> between the two valid roots.
        "M1：(c) 曲線 <span class=\"chem\">y = V</span> 在兩個有效根之間位於 <span class=\"chem\">y = 900</span> 上方。",
        // EN: A1: (c) <span class="chem">2.30 &lt; x &lt; 5.78</span>.
        "A1：(c) <span class=\"chem\">2.30 &lt; x &lt; 5.78</span>。",
      ],
    },

    // ── t2-3-q026 · short · exam · AHL · AHL 2.12 · 5 marks
    "t2-3-q026": {
      // EN: <p>Consider the equation <span class="chem">x^4 - 2x^3 - 5x^2 + 4x + 3 = 0</span>.</p><p>(a) Use your GDC to find the four real roots. <strong>[2 marks]</strong></p><p>(b) Use the formula booklet to write down the sum and the product of the four roots. <strong>[2 marks]</strong></p><p>(c) Verify that your answers to (a) are consistent with (b). <strong>[1 mark]</strong></p>
      stem: "<p>考慮方程 <span class=\"chem\">x^4 - 2x^3 - 5x^2 + 4x + 3 = 0</span>。</p><p>(a) 利用 GDC 求 (Find) 四個實根。<strong>[2 marks]</strong></p><p>(b) 利用公式小冊子寫出 (Write down) 四個根之和與積。<strong>[2 marks]</strong></p><p>(c) 驗證 (Verify) 你在 (a) 的答案與 (b) 一致。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Use a window wide enough to show all four crossings, for example <span class="chem">-3 &lt;= x &lt;= 4</span>.
        "使用足夠寬的視窗以顯示全部四個交點，例如 <span class=\"chem\">-3 &lt;= x &lt;= 4</span>。",
        // EN: Booklet: sum <span class="chem">= -a_{n-1}/a_n</span>, product <span class="chem">= (-1)^n a_0/a_n</span>, with <span class="chem">n = 4</span>.
        "公式小冊子：和 <span class=\"chem\">= -a_{n-1}/a_n</span>，積 <span class=\"chem\">= (-1)^n a_0/a_n</span>，其中 <span class=\"chem\">n = 4</span>。",
      ],
      // EN: <p>(a) The GDC gives <span class="chem">x ≈ -1.7045</span>, <span class="chem">-0.50892</span>, <span class="chem">1.1169</span>, <span class="chem">3.0965</span>.</p><p>(b) With <span class="chem">a_4 = 1</span>, <span class="chem">a_3 = -2</span>, <span class="chem">a_0 = 3</span>: sum <span class="chem">= 2</span>, product <span class="chem">= (+1)(3) = 3</span>.</p><p>(c) The stored roots add to <span class="chem">2.0000</span> and multiply to <span class="chem">3.0000</span>, as predicted. (Rounded values give only approximately <span class="chem">2</span> and <span class="chem">3</span>, so use stored values.)</p>
      solution: "<p>(a) GDC 給出 <span class=\"chem\">x ≈ -1.7045</span>、<span class=\"chem\">-0.50892</span>、<span class=\"chem\">1.1169</span>、<span class=\"chem\">3.0965</span>。</p><p>(b) 由 <span class=\"chem\">a_4 = 1</span>、<span class=\"chem\">a_3 = -2</span>、<span class=\"chem\">a_0 = 3</span>：和 <span class=\"chem\">= 2</span>，積 <span class=\"chem\">= (+1)(3) = 3</span>。</p><p>(c) 儲存的根相加得 <span class=\"chem\">2.0000</span>，相乘得 <span class=\"chem\">3.0000</span>，與預期相符。（捨入後的值只會給出約 <span class=\"chem\">2</span> 和 <span class=\"chem\">3</span>，所以要用儲存的值。）</p>",
      // EN: <p>(a) <span class="chem">x ≈ -1.70, -0.509, 1.12, 3.10</span>.</p><p>(b) Sum <span class="chem">= -(-2)/1 = 2</span>; product <span class="chem">= (-1)^4 (3/1) = 3</span>.</p><p>(c) Using the full GDC values, <span class="chem">-1.7045 - 0.5089 + 1.1169 + 3.0965 ≈ 2.000</span> and the product is <span class="chem">≈ 3.000</span>.</p>
      answer: "<p>(a) <span class=\"chem\">x ≈ -1.70, -0.509, 1.12, 3.10</span>。</p><p>(b) 和 <span class=\"chem\">= -(-2)/1 = 2</span>；積 <span class=\"chem\">= (-1)^4 (3/1) = 3</span>。</p><p>(c) 使用 GDC 的完整數值，<span class=\"chem\">-1.7045 - 0.5089 + 1.1169 + 3.0965 ≈ 2.000</span>，而積為 <span class=\"chem\">≈ 3.000</span>。</p>",
      markscheme: [
        // EN: M1: (a) graphs the quartic (or uses a polynomial solver) and finds the zeros.
        "M1：(a) 繪出四次函數的圖像（或使用多項式求解程式）並求出零點。",
        // EN: A1: (a) all four roots <span class="chem">-1.70, -0.509, 1.12, 3.10</span>.
        "A1：(a) 全部四個根 <span class=\"chem\">-1.70, -0.509, 1.12, 3.10</span>。",
        // EN: A1: (b) sum of roots <span class="chem">= 2</span>.
        "A1：(b) 根之和 <span class=\"chem\">= 2</span>。",
        // EN: A1: (b) product of roots <span class="chem">= 3</span>.
        "A1：(b) 根之積 <span class=\"chem\">= 3</span>。",
        // EN: R1: (c) adds and multiplies the stored (unrounded) roots, obtaining <span class="chem">2</span> and <span class="chem">3</span>.
        "R1：(c) 把儲存的（未捨入的）根相加及相乘，得 <span class=\"chem\">2</span> 及 <span class=\"chem\">3</span>。",
      ],
    },

    // ── t2-3-q027 · short · exam · AHL · AHL 2.13, 2.15 · 9 marks
    "t2-3-q027": {
      // EN: <p>Let <span class="chem">f(x) = (2x^2 + 3x - 1)/(x + 2)</span>, <span class="chem">x != -2</span>.</p><p>(a) Write down the equation of the vertical asymptote of the graph of <span class="chem">f</span>. <strong>[1 mark]</strong></p><p>(b) Find the equation of the oblique asymptote. <strong>[2 marks]</strong></p><p>(c) Show that the <span class="chem">x</span>-coordinates of the points where the graph of <span class="chem">f</span> meets the curve <span class="chem">y = x^2</span> satisfy <span class="chem">x^3 - 3x + 1 = 0</span>. <strong>[2 marks]</strong></p><p>(d) Hence solve <span class="chem">f(x) &gt;= x^2</span>. <strong>[4 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = (2x^2 + 3x - 1)/(x + 2)</span>，<span class=\"chem\">x != -2</span>。</p><p>(a) 寫出 (Write down) <span class=\"chem\">f</span> 的圖像的垂直漸近線方程。<strong>[1 mark]</strong></p><p>(b) 求 (Find) 斜漸近線的方程。<strong>[2 marks]</strong></p><p>(c) 證明 (Show that) <span class=\"chem\">f</span> 的圖像與曲線 <span class=\"chem\">y = x^2</span> 的交點的 <span class=\"chem\">x</span> 坐標滿足 <span class=\"chem\">x^3 - 3x + 1 = 0</span>。<strong>[2 marks]</strong></p><p>(d) 由此 (Hence) 解 <span class=\"chem\">f(x) &gt;= x^2</span>。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: (d) is a rational inequality. Do not multiply through by <span class="chem">x + 2</span> (its sign changes); combine into one fraction or compare the graphs.
        "解碼：(d) 是有理不等式。不要把兩邊乘以 <span class=\"chem\">x + 2</span>（它的正負會改變）；應合併成一個分式，或比較兩個圖像。",
        // EN: Write <span class="chem">f(x) - x^2 = (2x^2 + 3x - 1 - x^2(x + 2))/(x + 2) = -(x^3 - 3x + 1)/(x + 2)</span>.
        "寫出 <span class=\"chem\">f(x) - x^2 = (2x^2 + 3x - 1 - x^2(x + 2))/(x + 2) = -(x^3 - 3x + 1)/(x + 2)</span>。",
        // EN: The critical values are <span class="chem">-2</span> (excluded) and the three GDC roots of <span class="chem">x^3 - 3x + 1</span>. Test the sign on each interval, or graph <span class="chem">y = f(x) - x^2</span>.
        "臨界值為 <span class=\"chem\">-2</span>（不包括）及 <span class=\"chem\">x^3 - 3x + 1</span> 的三個 GDC 根。在每個區間測試正負號，或繪出 <span class=\"chem\">y = f(x) - x^2</span> 的圖像。",
      ],
      // EN: <p>(a) <span class="chem">x = -2</span>.</p><p>(b) <span class="chem">2x^2 + 3x - 1 = (2x - 1)(x + 2) + 1</span>, so <span class="chem">f(x) = 2x - 1 + 1/(x + 2)</span> and the oblique asymptote is <span class="chem">y = 2x - 1</span>.</p><p>(c) <span class="chem">(2x^2 + 3x - 1)/(x + 2) = x^2 => 2x^2 + 3x - 1 = x^3 + 2x^2 => x^3 - 3x + 1 = 0</span>.</p><p>(d) <span class="chem">f(x) - x^2 = -(x^3 - 3x + 1)/(x + 2)</span>. The GDC gives roots <span class="chem">-1.879</span>, <span class="chem">0.3473</span>, <span class="chem">1.532</span>. The expression is <span class="chem">&gt;= 0</span> on <span class="chem">-2 &lt; x &lt;= -1.88</span> and on <span class="chem">0.347 &lt;= x &lt;= 1.53</span> (it is negative for <span class="chem">x &lt; -2</span>, on <span class="chem">(-1.88, 0.347)</span> and for <span class="chem">x &gt; 1.53</span>). <span class="chem">x = -2</span> is excluded because <span class="chem">f</span> is undefined there.</p>
      solution: "<p>(a) <span class=\"chem\">x = -2</span>。</p><p>(b) <span class=\"chem\">2x^2 + 3x - 1 = (2x - 1)(x + 2) + 1</span>，所以 <span class=\"chem\">f(x) = 2x - 1 + 1/(x + 2)</span>，而斜漸近線為 <span class=\"chem\">y = 2x - 1</span>。</p><p>(c) <span class=\"chem\">(2x^2 + 3x - 1)/(x + 2) = x^2 => 2x^2 + 3x - 1 = x^3 + 2x^2 => x^3 - 3x + 1 = 0</span>。</p><p>(d) <span class=\"chem\">f(x) - x^2 = -(x^3 - 3x + 1)/(x + 2)</span>。GDC 給出根 <span class=\"chem\">-1.879</span>、<span class=\"chem\">0.3473</span>、<span class=\"chem\">1.532</span>。該式在 <span class=\"chem\">-2 &lt; x &lt;= -1.88</span> 及 <span class=\"chem\">0.347 &lt;= x &lt;= 1.53</span> 上 <span class=\"chem\">&gt;= 0</span>（在 <span class=\"chem\">x &lt; -2</span>、<span class=\"chem\">(-1.88, 0.347)</span> 上及 <span class=\"chem\">x &gt; 1.53</span> 時為負）。<span class=\"chem\">x = -2</span> 須排除，因為 <span class=\"chem\">f</span> 在該處無定義。</p>",
      // EN: <p>(a) <span class="chem">x = -2</span>. (b) <span class="chem">y = 2x - 1</span>. (c) <span class="chem">2x^2 + 3x - 1 = x^3 + 2x^2</span> gives <span class="chem">x^3 - 3x + 1 = 0</span>. (d) <span class="chem">-2 &lt; x &lt;= -1.88</span> or <span class="chem">0.347 &lt;= x &lt;= 1.53</span>.</p>
      answer: "<p>(a) <span class=\"chem\">x = -2</span>。(b) <span class=\"chem\">y = 2x - 1</span>。(c) 由 <span class=\"chem\">2x^2 + 3x - 1 = x^3 + 2x^2</span> 得 <span class=\"chem\">x^3 - 3x + 1 = 0</span>。(d) <span class=\"chem\">-2 &lt; x &lt;= -1.88</span> 或 <span class=\"chem\">0.347 &lt;= x &lt;= 1.53</span>。</p>",
      markscheme: [
        // EN: A1: (a) <span class="chem">x = -2</span>.
        "A1：(a) <span class=\"chem\">x = -2</span>。",
        // EN: M1: (b) divides: <span class="chem">2x^2 + 3x - 1 = (2x - 1)(x + 2) + 1</span>.
        "M1：(b) 進行除法：<span class=\"chem\">2x^2 + 3x - 1 = (2x - 1)(x + 2) + 1</span>。",
        // EN: A1: (b) <span class="chem">y = 2x - 1</span>.
        "A1：(b) <span class=\"chem\">y = 2x - 1</span>。",
        // EN: M1: (c) sets <span class="chem">f(x) = x^2</span> and multiplies both sides by <span class="chem">(x + 2)</span>.
        "M1：(c) 設 <span class=\"chem\">f(x) = x^2</span>，並把兩邊乘以 <span class=\"chem\">(x + 2)</span>。",
        // EN: A1: (c) correct expanded equation <span class="chem">2x^2 + 3x - 1 = x^3 + 2x^2</span> (rearranging to <span class="chem">x^3 - 3x + 1 = 0</span> is the given result, AG).
        "A1：(c) 正確的展開方程 <span class=\"chem\">2x^2 + 3x - 1 = x^3 + 2x^2</span>（整理成 <span class=\"chem\">x^3 - 3x + 1 = 0</span> 是題目已給出的結果，AG）。",
        // EN: A1: (d) roots of the cubic from the GDC: <span class="chem">-1.88, 0.347, 1.53</span>.
        "A1：(d) 由 GDC 得三次方程的根：<span class=\"chem\">-1.88, 0.347, 1.53</span>。",
        // EN: M1: (d) considers the sign of <span class="chem">f(x) - x^2 = -(x^3 - 3x + 1)/(x + 2)</span>, including the critical value <span class="chem">x = -2</span> (or reads off where the graph of f is on or above <span class="chem">y = x^2</span>).
        "M1：(d) 考慮 <span class=\"chem\">f(x) - x^2 = -(x^3 - 3x + 1)/(x + 2)</span> 的正負號，包括臨界值 <span class=\"chem\">x = -2</span>（或讀出 f 的圖像位於 <span class=\"chem\">y = x^2</span> 上或其上方的部分）。",
        // EN: A1: (d) <span class="chem">-2 &lt; x &lt;= -1.88</span>.
        "A1：(d) <span class=\"chem\">-2 &lt; x &lt;= -1.88</span>。",
        // EN: A1: (d) <span class="chem">0.347 &lt;= x &lt;= 1.53</span>.
        "A1：(d) <span class=\"chem\">0.347 &lt;= x &lt;= 1.53</span>。",
      ],
    },

    // ── t2-3-q028 · numeric · exam · AHL · AHL 2.13, 2.15 · 5 marks
    "t2-3-q028": {
      // EN: <p>The concentration of a medicine in a patient's blood, <span class="chem">t</span> hours after an injection, is modelled by <span class="chem">C(t) = 15t/(t^2 + 2t + 6)</span> mg per litre, <span class="chem">t &gt;= 0</span>. The medicine is effective while the concentration is greater than <span class="chem">1.8</span> mg per litre.</p><p>Find the length of time, in hours, for which the medicine is effective.</p>
      stem: "<p>病人注射後 <span class=\"chem\">t</span> 小時，其血液中藥物濃度的模型為 <span class=\"chem\">C(t) = 15t/(t^2 + 2t + 6)</span> mg/L，<span class=\"chem\">t &gt;= 0</span>。當濃度大於 <span class=\"chem\">1.8</span> mg/L 時，藥物有效。</p><p>求 (Find) 藥物有效的時間長度（以小時計）。</p>",
      hints: [
        // EN: Decode: "effective while greater than 1.8" is the inequality <span class="chem">C(t) &gt; 1.8</span>. The answer is the length of the time interval, not a single time.
        "解碼：「濃度大於 1.8 時有效」就是不等式 <span class=\"chem\">C(t) &gt; 1.8</span>。答案是時間區間的長度，而不是單一時刻。",
        // EN: Graph <span class="chem">Y_1 = 15x/(x^2 + 2x + 6)</span> and <span class="chem">Y_2 = 1.8</span> and find both intersections.
        "繪出 <span class=\"chem\">Y_1 = 15x/(x^2 + 2x + 6)</span> 與 <span class=\"chem\">Y_2 = 1.8</span> 的圖像，並求出兩個交點。",
        // EN: Subtract the earlier time from the later one.
        "用較後的時間減去較早的時間。",
      ],
      // EN: <p>Solving <span class="chem">C(t) = 1.8</span> (GDC, or <span class="chem">1.8t^2 - 11.4t + 10.8 = 0</span>) gives <span class="chem">t ≈ 1.160</span> and <span class="chem">t ≈ 5.174</span>. Between these times the graph is above <span class="chem">1.8</span>, so the medicine is effective for <span class="chem">5.174 - 1.160 ≈ 4.01</span> hours.</p>
      solution: "<p>解 <span class=\"chem\">C(t) = 1.8</span>（用 GDC，或 <span class=\"chem\">1.8t^2 - 11.4t + 10.8 = 0</span>）得 <span class=\"chem\">t ≈ 1.160</span> 及 <span class=\"chem\">t ≈ 5.174</span>。在這兩個時間之間，圖像位於 <span class=\"chem\">1.8</span> 上方，所以藥物有效 <span class=\"chem\">5.174 - 1.160 ≈ 4.01</span> 小時。</p>",
      // EN: hours
      unit: "小時",
    },

    // ── t2-3-q029 · short · exam · AHL · AHL 2.14 · 6 marks
    "t2-3-q029": {
      // EN: <p>Let <span class="chem">f(x) = x^3 - 2x^2 - 3x + 4</span>, <span class="chem">x &gt;= k</span>.</p><p>(a) Find the least value of <span class="chem">k</span> for which <span class="chem">f</span> has an inverse function. <strong>[2 marks]</strong></p><p>For this value of <span class="chem">k</span>:</p><p>(b) find the domain of <span class="chem">f^{-1}</span>; <strong>[2 marks]</strong></p><p>(c) find <span class="chem">f^{-1}(10)</span>. <strong>[2 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = x^3 - 2x^2 - 3x + 4</span>，<span class=\"chem\">x &gt;= k</span>。</p><p>(a) 求 (Find) 使 <span class=\"chem\">f</span> 有反函數的 <span class=\"chem\">k</span> 的最小值。<strong>[2 marks]</strong></p><p>就此 <span class=\"chem\">k</span> 值：</p><p>(b) 求 <span class=\"chem\">f^{-1}</span> 的定義域；<strong>[2 marks]</strong></p><p>(c) 求 <span class=\"chem\">f^{-1}(10)</span>。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: An inverse exists only if <span class="chem">f</span> is one-to-one. Where does the cubic stop decreasing and start increasing for good?
        "只有當 <span class=\"chem\">f</span> 是一對一函數時，反函數才存在。這條三次曲線在哪裏停止下降，並從此一直上升？",
        // EN: Use the GDC minimum tool: the local minimum is at about <span class="chem">(1.87, -2.06)</span>.
        "使用 GDC 的求極小值功能：局部極小點約在 <span class=\"chem\">(1.87, -2.06)</span>。",
        // EN: <span class="chem">f^{-1}(10)</span> is the value of <span class="chem">x &gt;= k</span> with <span class="chem">f(x) = 10</span>.
        "<span class=\"chem\">f^{-1}(10)</span> 就是滿足 <span class=\"chem\">f(x) = 10</span> 且 <span class=\"chem\">x &gt;= k</span> 的值。",
      ],
      // EN: <p>(a) The graph has a local maximum at <span class="chem">x ≈ -0.535</span> and a local minimum at <span class="chem">x ≈ 1.87</span>. To the right of the minimum, <span class="chem">f</span> is increasing, so the least <span class="chem">k</span> is <span class="chem">k ≈ 1.87</span> (exactly <span class="chem">(2 + sqrt(13))/3</span>).</p><p>(b) The range of <span class="chem">f</span> is <span class="chem">f(x) &gt;= f(k) ≈ -2.06</span>, so the domain of <span class="chem">f^{-1}</span> is <span class="chem">x &gt;= -2.06</span>.</p><p>(c) Solving <span class="chem">x^3 - 2x^2 - 3x + 4 = 10</span> on the GDC gives one root, <span class="chem">x ≈ 3.40</span>, so <span class="chem">f^{-1}(10) ≈ 3.40</span>.</p>
      solution: "<p>(a) 圖像在 <span class=\"chem\">x ≈ -0.535</span> 有局部極大，在 <span class=\"chem\">x ≈ 1.87</span> 有局部極小。在極小點右方，<span class=\"chem\">f</span> 遞增，所以最小的 <span class=\"chem\">k</span> 為 <span class=\"chem\">k ≈ 1.87</span>（準確值為 <span class=\"chem\">(2 + sqrt(13))/3</span>）。</p><p>(b) <span class=\"chem\">f</span> 的值域為 <span class=\"chem\">f(x) &gt;= f(k) ≈ -2.06</span>，所以 <span class=\"chem\">f^{-1}</span> 的定義域為 <span class=\"chem\">x &gt;= -2.06</span>。</p><p>(c) 在 GDC 上解 <span class=\"chem\">x^3 - 2x^2 - 3x + 4 = 10</span> 只得一個根 <span class=\"chem\">x ≈ 3.40</span>，所以 <span class=\"chem\">f^{-1}(10) ≈ 3.40</span>。</p>",
      // EN: <p>(a) <span class="chem">k ≈ 1.87</span> (the <span class="chem">x</span>-coordinate of the local minimum, <span class="chem">(2 + sqrt(13))/3</span>). (b) <span class="chem">x &gt;= -2.06</span>. (c) <span class="chem">f^{-1}(10) ≈ 3.40</span>.</p>
      answer: "<p>(a) <span class=\"chem\">k ≈ 1.87</span>（局部極小點的 <span class=\"chem\">x</span> 坐標，<span class=\"chem\">(2 + sqrt(13))/3</span>）。(b) <span class=\"chem\">x &gt;= -2.06</span>。(c) <span class=\"chem\">f^{-1}(10) ≈ 3.40</span>。</p>",
      markscheme: [
        // EN: M1: (a) recognises that f must be one-to-one, so k is at the local minimum (GDC minimum tool or <span class="chem">f'(x) = 0</span>).
        "M1：(a) 識別 f 必須是一對一，所以 k 在局部極小點（用 GDC 求極小值功能或 <span class=\"chem\">f'(x) = 0</span>）。",
        // EN: A1: (a) <span class="chem">k = 1.87</span>.
        "A1：(a) <span class=\"chem\">k = 1.87</span>。",
        // EN: M1: (b) domain of <span class="chem">f^{-1}</span> = range of f, starting at <span class="chem">f(k)</span>.
        "M1：(b) <span class=\"chem\">f^{-1}</span> 的定義域 = f 的值域，由 <span class=\"chem\">f(k)</span> 開始。",
        // EN: A1: (b) <span class="chem">x &gt;= -2.06</span>.
        "A1：(b) <span class=\"chem\">x &gt;= -2.06</span>。",
        // EN: M1: (c) solves <span class="chem">f(x) = 10</span> with <span class="chem">x &gt;= 1.87</span>.
        "M1：(c) 在 <span class=\"chem\">x &gt;= 1.87</span> 的條件下解 <span class=\"chem\">f(x) = 10</span>。",
        // EN: A1: (c) <span class="chem">3.40</span>.
        "A1：(c) <span class=\"chem\">3.40</span>。",
      ],
    },

    // ── t2-3-q030 · numeric · challenge · AHL · AHL 2.14 · 5 marks
    "t2-3-q030": {
      // EN: <p>Let <span class="chem">f(x) = e^{x/2} - 2</span>, <span class="chem">x \in \mathbb{R}</span>. The graphs of <span class="chem">y = f(x)</span> and <span class="chem">y = f^{-1}(x)</span> meet at exactly two points. Find the <span class="chem">x</span>-coordinate of the point of intersection that lies in the first quadrant.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = e^{x/2} - 2</span>，<span class=\"chem\">x \\in \\mathbb{R}</span>。<span class=\"chem\">y = f(x)</span> 與 <span class=\"chem\">y = f^{-1}(x)</span> 的圖像恰好相交於兩點。求 (Find) 位於第一象限的交點的 <span class=\"chem\">x</span> 坐標。</p>",
      hints: [
        // EN: Decode: you do not need a formula for <span class="chem">f^{-1}</span>. Because <span class="chem">f</span> is increasing, every meeting point of <span class="chem">f</span> and <span class="chem">f^{-1}</span> lies on the line <span class="chem">y = x</span>.
        "解碼：你不需要 <span class=\"chem\">f^{-1}</span> 的式子。因為 <span class=\"chem\">f</span> 是遞增函數，<span class=\"chem\">f</span> 與 <span class=\"chem\">f^{-1}</span> 的每個交點都位於直線 <span class=\"chem\">y = x</span> 上。",
        // EN: So solve <span class="chem">f(x) = x</span>, that is <span class="chem">e^{x/2} - 2 = x</span>.
        "所以解 <span class=\"chem\">f(x) = x</span>，即 <span class=\"chem\">e^{x/2} - 2 = x</span>。",
        // EN: Graph <span class="chem">Y_1 = e^{x/2} - 2</span> and <span class="chem">Y_2 = x</span>; one crossing is in the third quadrant, the other in the first.
        "繪出 <span class=\"chem\">Y_1 = e^{x/2} - 2</span> 與 <span class=\"chem\">Y_2 = x</span> 的圖像；一個交點在第三象限，另一個在第一象限。",
      ],
      // EN: <p><strong>Decode.</strong> The graph of <span class="chem">f^{-1}</span> is the reflection of the graph of <span class="chem">f</span> in <span class="chem">y = x</span>. For an increasing function, the two graphs can only meet on that line, so solve <span class="chem">f(x) = x</span>.</p><p><span class="chem">e^{x/2} - 2 = x</span> has GDC solutions <span class="chem">x ≈ -1.54</span> (point <span class="chem">(-1.54, -1.54)</span>, third quadrant) and <span class="chem">x ≈ 3.36</span>. The first-quadrant point is <span class="chem">(3.36, 3.36)</span>, so <span class="chem">x ≈ 3.36</span>.</p>
      solution: "<p><strong>解碼。</strong><span class=\"chem\">f^{-1}</span> 的圖像是 <span class=\"chem\">f</span> 的圖像沿 <span class=\"chem\">y = x</span> 反射所得。對於遞增函數，兩個圖像只能在該直線上相交，所以解 <span class=\"chem\">f(x) = x</span>。</p><p><span class=\"chem\">e^{x/2} - 2 = x</span> 的 GDC 解為 <span class=\"chem\">x ≈ -1.54</span>（點 <span class=\"chem\">(-1.54, -1.54)</span>，第三象限）及 <span class=\"chem\">x ≈ 3.36</span>。第一象限的點為 <span class=\"chem\">(3.36, 3.36)</span>，所以 <span class=\"chem\">x ≈ 3.36</span>。</p>",
    },

    // ── t2-3-q031 · numeric · exam · AHL · AHL 2.15 · 4 marks
    "t2-3-q031": {
      // EN: <p>The solution of the inequality <span class="chem">2^x &gt;= x + 3</span> is <span class="chem">x &lt;= a</span> or <span class="chem">x &gt;= b</span>, where <span class="chem">a &lt; 0 &lt; b</span>. Find the value of <span class="chem">b</span>.</p>
      stem: "<p>不等式 <span class=\"chem\">2^x &gt;= x + 3</span> 的解為 <span class=\"chem\">x &lt;= a</span> 或 <span class=\"chem\">x &gt;= b</span>，其中 <span class=\"chem\">a &lt; 0 &lt; b</span>。求 (Find) <span class=\"chem\">b</span> 的值。</p>",
      hints: [
        // EN: There is no algebraic method for an equation mixing <span class="chem">2^x</span> and <span class="chem">x</span>: graph <span class="chem">Y_1 = 2^x</span> and <span class="chem">Y_2 = x + 3</span>.
        "同時含 <span class=\"chem\">2^x</span> 和 <span class=\"chem\">x</span> 的方程沒有代數方法：繪出 <span class=\"chem\">Y_1 = 2^x</span> 與 <span class=\"chem\">Y_2 = x + 3</span> 的圖像。",
        // EN: The curve is above the line to the left of the negative intersection and to the right of the positive one. Find the positive intersection.
        "曲線在負交點的左方及正交點的右方位於直線上方。求出正交點。",
      ],
      // EN: <p>The GDC gives intersections at <span class="chem">x ≈ -2.86</span> and <span class="chem">x ≈ 2.44</span>. The exponential curve is on or above the line for <span class="chem">x &lt;= -2.86</span> and for <span class="chem">x &gt;= 2.44</span>, so <span class="chem">b ≈ 2.44</span>.</p>
      solution: "<p>GDC 給出交點 <span class=\"chem\">x ≈ -2.86</span> 及 <span class=\"chem\">x ≈ 2.44</span>。指數曲線在 <span class=\"chem\">x &lt;= -2.86</span> 及 <span class=\"chem\">x &gt;= 2.44</span> 時位於直線上或其上方，所以 <span class=\"chem\">b ≈ 2.44</span>。</p>",
    },

    // ── t2-3-q032 · short · exam · AHL · AHL 2.15 · 4 marks
    "t2-3-q032": {
      // EN: <p>Solve the inequality <span class="chem">x^4 - 4x^2 + x + 1 &lt; 0</span>. Give the end points of your intervals correct to 3 significant figures.</p>
      stem: "<p>解不等式 <span class=\"chem\">x^4 - 4x^2 + x + 1 &lt; 0</span>。區間的端點須準確至 3 位有效數字。</p>",
      hints: [
        // EN: A quartic with positive leading coefficient is positive at both ends, so it is negative between the 1st and 2nd zeros and between the 3rd and 4th.
        "首項係數為正的四次函數在兩端都是正的，所以它在第 1 與第 2 個零點之間，以及第 3 與第 4 個零點之間為負。",
        // EN: Use the zero tool four times; a window <span class="chem">-3 &lt;= x &lt;= 3</span> works.
        "使用求零點功能四次；視窗 <span class=\"chem\">-3 &lt;= x &lt;= 3</span> 可行。",
      ],
      // EN: <p>The GDC gives zeros <span class="chem">x ≈ -2.0615</span>, <span class="chem">-0.39634</span>, <span class="chem">0.69382</span>, <span class="chem">1.7640</span>. The graph is below the <span class="chem">x</span>-axis between the first and second and between the third and fourth zeros: <span class="chem">-2.06 &lt; x &lt; -0.396</span> or <span class="chem">0.694 &lt; x &lt; 1.76</span>.</p>
      solution: "<p>GDC 給出零點 <span class=\"chem\">x ≈ -2.0615</span>、<span class=\"chem\">-0.39634</span>、<span class=\"chem\">0.69382</span>、<span class=\"chem\">1.7640</span>。圖像在第一與第二個零點之間，以及第三與第四個零點之間位於 <span class=\"chem\">x</span> 軸下方：<span class=\"chem\">-2.06 &lt; x &lt; -0.396</span> 或 <span class=\"chem\">0.694 &lt; x &lt; 1.76</span>。</p>",
      // EN: <p><span class="chem">-2.06 &lt; x &lt; -0.396</span> or <span class="chem">0.694 &lt; x &lt; 1.76</span></p>
      answer: "<p><span class=\"chem\">-2.06 &lt; x &lt; -0.396</span> 或 <span class=\"chem\">0.694 &lt; x &lt; 1.76</span></p>",
      markscheme: [
        // EN: M1: graphs <span class="chem">y = x^4 - 4x^2 + x + 1</span> and finds its zeros.
        "M1：繪出 <span class=\"chem\">y = x^4 - 4x^2 + x + 1</span> 的圖像並求出其零點。",
        // EN: A1: zeros <span class="chem">-2.06, -0.396, 0.694, 1.76</span>.
        "A1：零點 <span class=\"chem\">-2.06, -0.396, 0.694, 1.76</span>。",
        // EN: A1: <span class="chem">-2.06 &lt; x &lt; -0.396</span>.
        "A1：<span class=\"chem\">-2.06 &lt; x &lt; -0.396</span>。",
        // EN: A1: <span class="chem">0.694 &lt; x &lt; 1.76</span> (strict inequalities, both intervals).
        "A1：<span class=\"chem\">0.694 &lt; x &lt; 1.76</span>（嚴格不等式，兩個區間都要寫出）。",
      ],
    },

    // ── t2-3-q033 · numeric · challenge · AHL · AHL 2.12, 2.15 · 5 marks
    "t2-3-q033": {
      // EN: <p>A small factory makes <span class="chem">x</span> batches of a product each week, where <span class="chem">x</span> is a whole number with <span class="chem">0 &lt;= x &lt;= 12</span>. Its weekly profit, in thousands of dollars, is modelled by <span class="chem">P(x) = -0.5x^3 + 6x^2 + 4x - 40</span>.</p><p>The owners want a weekly profit of more than <span class="chem">50</span> thousand dollars. Find how many different weekly production levels meet this target.</p>
      stem: "<p>一間小工廠每星期生產 <span class=\"chem\">x</span> 批產品，其中 <span class=\"chem\">x</span> 是滿足 <span class=\"chem\">0 &lt;= x &lt;= 12</span> 的整數。每星期利潤（以千元計）的模型為 <span class=\"chem\">P(x) = -0.5x^3 + 6x^2 + 4x - 40</span>。</p><p>東主希望每星期利潤多於 <span class=\"chem\">50</span> 千元。求 (Find) 有多少個不同的每星期生產量能達到這個目標。</p>",
      hints: [
        // EN: Decode: this is the cubic inequality <span class="chem">P(x) &gt; 50</span>, but the answer is a <strong>count of whole numbers</strong> in <span class="chem">0 &lt;= x &lt;= 12</span>, not an interval.
        "解碼：這是三次不等式 <span class=\"chem\">P(x) &gt; 50</span>，但答案是 <span class=\"chem\">0 &lt;= x &lt;= 12</span> 內<strong>整數的個數</strong>，而不是一個區間。",
        // EN: Graph <span class="chem">Y_1 = -0.5x^3 + 6x^2 + 4x - 40</span> and <span class="chem">Y_2 = 50</span> on <span class="chem">0 &lt;= x &lt;= 12</span> and find where they meet.
        "在 <span class=\"chem\">0 &lt;= x &lt;= 12</span> 上繪出 <span class=\"chem\">Y_1 = -0.5x^3 + 6x^2 + 4x - 40</span> 與 <span class=\"chem\">Y_2 = 50</span> 的圖像，並求出它們的交點。",
        // EN: List the integers strictly between the two intersection values (or check them in a table of values).
        "列出嚴格介於兩個交點值之間的整數（或用數值表檢查）。",
      ],
      // EN: <p><strong>Decode.</strong> Solve <span class="chem">P(x) &gt; 50</span>, then count the whole numbers that satisfy it.</p><p>On the GDC, <span class="chem">P(x) = 50</span> at <span class="chem">x ≈ 4.36</span> and <span class="chem">x ≈ 11.3</span> in the domain (the third root, <span class="chem">-3.66</span>, is outside it). <span class="chem">P(x) &gt; 50</span> for <span class="chem">4.36 &lt; x &lt; 11.3</span>, so <span class="chem">x = 5, 6, 7, 8, 9, 10, 11</span>. A table confirms <span class="chem">P(4) = 40</span>, <span class="chem">P(5) = 67.5</span>, <span class="chem">P(11) = 64.5</span>, <span class="chem">P(12) = 8</span>. There are <span class="chem">7</span> production levels.</p>
      solution: "<p><strong>解碼。</strong>解 <span class=\"chem\">P(x) &gt; 50</span>，然後數出滿足它的整數。</p><p>在 GDC 上，在定義域內 <span class=\"chem\">P(x) = 50</span> 的位置為 <span class=\"chem\">x ≈ 4.36</span> 及 <span class=\"chem\">x ≈ 11.3</span>（第三個根 <span class=\"chem\">-3.66</span> 在定義域以外）。當 <span class=\"chem\">4.36 &lt; x &lt; 11.3</span> 時 <span class=\"chem\">P(x) &gt; 50</span>，所以 <span class=\"chem\">x = 5, 6, 7, 8, 9, 10, 11</span>。數值表確認 <span class=\"chem\">P(4) = 40</span>、<span class=\"chem\">P(5) = 67.5</span>、<span class=\"chem\">P(11) = 64.5</span>、<span class=\"chem\">P(12) = 8</span>。共有 <span class=\"chem\">7</span> 個生產量。</p>",
    },

    // ── t2-3-q034 · short · exam · AHL · AHL 2.15 · 4 marks
    "t2-3-q034": {
      // EN: <p>Let <span class="chem">f(x) = x^2 - 2</span> and <span class="chem">g(x) = ln(x + 3)</span>, <span class="chem">x &gt; -3</span>. Solve <span class="chem">g(x) &gt;= f(x)</span>.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = x^2 - 2</span> 及 <span class=\"chem\">g(x) = ln(x + 3)</span>，<span class=\"chem\">x &gt; -3</span>。解 <span class=\"chem\">g(x) &gt;= f(x)</span>。</p>",
      hints: [
        // EN: Decode: "<span class="chem">g(x) &gt;= f(x)</span>" means "where is the graph of <span class="chem">g</span> on or above the graph of <span class="chem">f</span>?"
        "解碼：「<span class=\"chem\">g(x) &gt;= f(x)</span>」的意思是「<span class=\"chem\">g</span> 的圖像在哪裏位於 <span class=\"chem\">f</span> 的圖像上或其上方？」",
        // EN: Graph both, find the two intersections, and read off the interval between them.
        "繪出兩個圖像，求出兩個交點，並讀出它們之間的區間。",
      ],
      // EN: <p>The GDC gives intersections at <span class="chem">x ≈ -1.5418</span> and <span class="chem">x ≈ 1.8942</span>. Between them the logarithm curve is above the parabola, so <span class="chem">-1.54 &lt;= x &lt;= 1.89</span>. This interval lies inside the domain <span class="chem">x &gt; -3</span>.</p>
      solution: "<p>GDC 給出交點 <span class=\"chem\">x ≈ -1.5418</span> 及 <span class=\"chem\">x ≈ 1.8942</span>。在兩者之間，對數曲線位於拋物線上方，所以 <span class=\"chem\">-1.54 &lt;= x &lt;= 1.89</span>。此區間位於定義域 <span class=\"chem\">x &gt; -3</span> 內。</p>",
      // EN: <p><span class="chem">-1.54 &lt;= x &lt;= 1.89</span></p>
      answer: "<p><span class=\"chem\">-1.54 &lt;= x &lt;= 1.89</span></p>",
      markscheme: [
        // EN: M1: graphs <span class="chem">y = ln(x + 3)</span> and <span class="chem">y = x^2 - 2</span> (or <span class="chem">y = ln(x + 3) - x^2 + 2</span>).
        "M1：繪出 <span class=\"chem\">y = ln(x + 3)</span> 與 <span class=\"chem\">y = x^2 - 2</span> 的圖像（或 <span class=\"chem\">y = ln(x + 3) - x^2 + 2</span>）。",
        // EN: A1: intersection <span class="chem">x = -1.54</span>.
        "A1：交點 <span class=\"chem\">x = -1.54</span>。",
        // EN: A1: intersection <span class="chem">x = 1.89</span>.
        "A1：交點 <span class=\"chem\">x = 1.89</span>。",
        // EN: A1: <span class="chem">-1.54 &lt;= x &lt;= 1.89</span> (inclusive end points).
        "A1：<span class=\"chem\">-1.54 &lt;= x &lt;= 1.89</span>（包括端點）。",
      ],
    },

    // ── t2-3-q035 · numeric · exam · AHL · AHL 2.16 · 4 marks
    "t2-3-q035": {
      // EN: <p>The solution of the inequality <span class="chem">|e^x - 4| &lt; 2x</span> is <span class="chem">a &lt; x &lt; b</span>. Find the value of <span class="chem">a</span>.</p>
      stem: "<p>不等式 <span class=\"chem\">|e^x - 4| &lt; 2x</span> 的解為 <span class=\"chem\">a &lt; x &lt; b</span>。求 (Find) <span class=\"chem\">a</span> 的值。</p>",
      hints: [
        // EN: Graph <span class="chem">Y_1 = abs(e^x - 4)</span> and <span class="chem">Y_2 = 2x</span>. The solution is where the V-shaped curve is <strong>below</strong> the line.
        "繪出 <span class=\"chem\">Y_1 = abs(e^x - 4)</span> 與 <span class=\"chem\">Y_2 = 2x</span> 的圖像。解就是 V 形曲線位於直線<strong>下方</strong>的部分。",
        // EN: The left end point <span class="chem">a</span> is on the reflected part, where <span class="chem">e^x &lt; 4</span>, so it solves <span class="chem">4 - e^x = 2x</span>.
        "左端點 <span class=\"chem\">a</span> 在反射了的部分上，該處 <span class=\"chem\">e^x &lt; 4</span>，所以它是 <span class=\"chem\">4 - e^x = 2x</span> 的解。",
      ],
      // EN: <p>The graphs meet at <span class="chem">x ≈ 0.841</span> (where <span class="chem">4 - e^x = 2x</span>) and <span class="chem">x ≈ 2.11</span> (where <span class="chem">e^x - 4 = 2x</span>). The modulus graph is below the line between them, so <span class="chem">a ≈ 0.841</span> and <span class="chem">b ≈ 2.11</span>. For <span class="chem">x &lt;= 0</span> the right-hand side is not positive, so there are no other solutions.</p>
      solution: "<p>兩個圖像相交於 <span class=\"chem\">x ≈ 0.841</span>（該處 <span class=\"chem\">4 - e^x = 2x</span>）及 <span class=\"chem\">x ≈ 2.11</span>（該處 <span class=\"chem\">e^x - 4 = 2x</span>）。在兩者之間，模圖像位於直線下方，所以 <span class=\"chem\">a ≈ 0.841</span> 及 <span class=\"chem\">b ≈ 2.11</span>。當 <span class=\"chem\">x &lt;= 0</span> 時右方不是正數，所以沒有其他解。</p>",
    },

    // ── t2-3-q036 · short · exam · AHL · AHL 2.16 · 6 marks
    "t2-3-q036": {
      // EN: <p>Solve the inequality <span class="chem">|x^3 - 4x| &gt;= 2</span>. Give the end points of your intervals correct to 3 significant figures.</p>
      stem: "<p>解不等式 <span class=\"chem\">|x^3 - 4x| &gt;= 2</span>。區間的端點須準確至 3 位有效數字。</p>",
      hints: [
        // EN: <span class="chem">|A| &gt;= 2</span> means <span class="chem">A &gt;= 2</span> or <span class="chem">A &lt;= -2</span>. Each gives a cubic equation with three GDC roots.
        "<span class=\"chem\">|A| &gt;= 2</span> 的意思是 <span class=\"chem\">A &gt;= 2</span> 或 <span class=\"chem\">A &lt;= -2</span>。兩者各給出一條有三個 GDC 根的三次方程。",
        // EN: <span class="chem">x^3 - 4x</span> is odd, so the six critical values come in pairs <span class="chem">+-c</span>. Graph <span class="chem">y = abs(x^3 - 4x)</span> and <span class="chem">y = 2</span> to see which pieces lie above the line.
        "<span class=\"chem\">x^3 - 4x</span> 是奇函數，所以六個臨界值以 <span class=\"chem\">+-c</span> 的形式成對出現。繪出 <span class=\"chem\">y = abs(x^3 - 4x)</span> 與 <span class=\"chem\">y = 2</span> 的圖像，看看哪些部分位於直線上方。",
      ],
      // EN: <p><span class="chem">x^3 - 4x = 2</span> has roots <span class="chem">-1.675, -0.5392, 2.214</span>; <span class="chem">x^3 - 4x = -2</span> has roots <span class="chem">-2.214, 0.5392, 1.675</span>. The graph of <span class="chem">y = |x^3 - 4x|</span> touches <span class="chem">0</span> at <span class="chem">x = 0, +-2</span> and is on or above <span class="chem">y = 2</span> on four pieces: <span class="chem">x &lt;= -2.21</span>, <span class="chem">-1.68 &lt;= x &lt;= -0.539</span>, <span class="chem">0.539 &lt;= x &lt;= 1.68</span>, <span class="chem">x &gt;= 2.21</span>.</p>
      solution: "<p><span class=\"chem\">x^3 - 4x = 2</span> 的根為 <span class=\"chem\">-1.675, -0.5392, 2.214</span>；<span class=\"chem\">x^3 - 4x = -2</span> 的根為 <span class=\"chem\">-2.214, 0.5392, 1.675</span>。<span class=\"chem\">y = |x^3 - 4x|</span> 的圖像在 <span class=\"chem\">x = 0, +-2</span> 與 <span class=\"chem\">0</span> 相切，並在四段上位於 <span class=\"chem\">y = 2</span> 上或其上方：<span class=\"chem\">x &lt;= -2.21</span>、<span class=\"chem\">-1.68 &lt;= x &lt;= -0.539</span>、<span class=\"chem\">0.539 &lt;= x &lt;= 1.68</span>、<span class=\"chem\">x &gt;= 2.21</span>。</p>",
      // EN: <p><span class="chem">x &lt;= -2.21</span> or <span class="chem">-1.68 &lt;= x &lt;= -0.539</span> or <span class="chem">0.539 &lt;= x &lt;= 1.68</span> or <span class="chem">x &gt;= 2.21</span></p>
      answer: "<p><span class=\"chem\">x &lt;= -2.21</span> 或 <span class=\"chem\">-1.68 &lt;= x &lt;= -0.539</span> 或 <span class=\"chem\">0.539 &lt;= x &lt;= 1.68</span> 或 <span class=\"chem\">x &gt;= 2.21</span></p>",
      markscheme: [
        // EN: M1: graphs <span class="chem">y = |x^3 - 4x|</span> and <span class="chem">y = 2</span> (or solves <span class="chem">x^3 - 4x = 2</span> and <span class="chem">x^3 - 4x = -2</span>).
        "M1：繪出 <span class=\"chem\">y = |x^3 - 4x|</span> 與 <span class=\"chem\">y = 2</span> 的圖像（或解 <span class=\"chem\">x^3 - 4x = 2</span> 及 <span class=\"chem\">x^3 - 4x = -2</span>）。",
        // EN: A1: critical values <span class="chem">+-2.21</span>.
        "A1：臨界值 <span class=\"chem\">+-2.21</span>。",
        // EN: A1: critical values <span class="chem">+-1.68</span>.
        "A1：臨界值 <span class=\"chem\">+-1.68</span>。",
        // EN: A1: critical values <span class="chem">+-0.539</span>.
        "A1：臨界值 <span class=\"chem\">+-0.539</span>。",
        // EN: A1: <span class="chem">x &lt;= -2.21</span> or <span class="chem">x &gt;= 2.21</span>.
        "A1：<span class=\"chem\">x &lt;= -2.21</span> 或 <span class=\"chem\">x &gt;= 2.21</span>。",
        // EN: A1: <span class="chem">-1.68 &lt;= x &lt;= -0.539</span> or <span class="chem">0.539 &lt;= x &lt;= 1.68</span>.
        "A1：<span class=\"chem\">-1.68 &lt;= x &lt;= -0.539</span> 或 <span class=\"chem\">0.539 &lt;= x &lt;= 1.68</span>。",
      ],
    },

    // ── t2-3-q037 · numeric · exam · AHL · AHL 2.16 · 3 marks
    "t2-3-q037": {
      // EN: <p>Let <span class="chem">f(x) = x^3 - 2x^2 - 4x + 6</span>. The graph of <span class="chem">y = 1/f(x)</span> has three vertical asymptotes. The equation of the one nearest to the <span class="chem">y</span>-axis is <span class="chem">x = c</span>. Find <span class="chem">c</span>.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = x^3 - 2x^2 - 4x + 6</span>。<span class=\"chem\">y = 1/f(x)</span> 的圖像有三條垂直漸近線。其中最接近 <span class=\"chem\">y</span> 軸的一條的方程為 <span class=\"chem\">x = c</span>。求 (Find) <span class=\"chem\">c</span>。</p>",
      hints: [
        // EN: The vertical asymptotes of <span class="chem">y = 1/f(x)</span> are at the zeros of <span class="chem">f</span>.
        "<span class=\"chem\">y = 1/f(x)</span> 的垂直漸近線位於 <span class=\"chem\">f</span> 的零點。",
        // EN: Find the three zeros of the cubic with the GDC and choose the one with the smallest <span class="chem">|x|</span>.
        "用 GDC 求出三次函數的三個零點，並選出 <span class=\"chem\">|x|</span> 最小的一個。",
      ],
      // EN: <p>The zeros of <span class="chem">f</span> are <span class="chem">x ≈ -1.87</span>, <span class="chem">1.21</span> and <span class="chem">2.66</span>, so <span class="chem">1/f</span> has vertical asymptotes there. The nearest to the <span class="chem">y</span>-axis is <span class="chem">x ≈ 1.21</span>.</p>
      solution: "<p><span class=\"chem\">f</span> 的零點為 <span class=\"chem\">x ≈ -1.87</span>、<span class=\"chem\">1.21</span> 和 <span class=\"chem\">2.66</span>，所以 <span class=\"chem\">1/f</span> 在這些位置有垂直漸近線。最接近 <span class=\"chem\">y</span> 軸的是 <span class=\"chem\">x ≈ 1.21</span>。</p>",
    },

    // ── t2-3-q038 · short · challenge · AHL · AHL 2.16 · 6 marks
    "t2-3-q038": {
      // EN: <p>Let <span class="chem">f(x) = x^3 - 4x^2 + 3x + 1</span>.</p><p>(a) Find the coordinates of the local maximum and local minimum points of the graph of <span class="chem">y = f(x)</span>. <strong>[2 marks]</strong></p><p>(b) Sketch the graph of <span class="chem">y = f(|x|)</span> for <span class="chem">-4 &lt;= x &lt;= 4</span>. <strong>[2 marks]</strong></p><p>(c) Find the set of values of <span class="chem">k</span> for which the equation <span class="chem">f(|x|) = k</span> has exactly six solutions. <strong>[2 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = x^3 - 4x^2 + 3x + 1</span>。</p><p>(a) 求 (Find) <span class=\"chem\">y = f(x)</span> 的圖像的局部極大點和局部極小點的坐標。<strong>[2 marks]</strong></p><p>(b) 描繪 <span class=\"chem\">-4 &lt;= x &lt;= 4</span> 時 <span class=\"chem\">y = f(|x|)</span> 的圖像的略圖 (Sketch)。<strong>[2 marks]</strong></p><p>(c) 求使方程 <span class=\"chem\">f(|x|) = k</span> 恰好有六個解的 <span class=\"chem\">k</span> 的值的集合。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: "exactly six solutions" means a horizontal line <span class="chem">y = k</span> meets the graph of <span class="chem">y = f(|x|)</span> six times. Because the graph is symmetric, count the meetings with the right half (<span class="chem">x &gt; 0</span>) and double.
        "解碼：「恰好有六個解」的意思是水平線 <span class=\"chem\">y = k</span> 與 <span class=\"chem\">y = f(|x|)</span> 的圖像相交六次。由於圖像對稱，數出與右半部（<span class=\"chem\">x &gt; 0</span>）的交點，然後加倍。",
        // EN: <span class="chem">f(|x|)</span> uses only the part of <span class="chem">f</span> with <span class="chem">x &gt;= 0</span>, then mirrors it. That part starts at <span class="chem">(0, 1)</span>, rises to the maximum, falls to the minimum, then rises again.
        "<span class=\"chem\">f(|x|)</span> 只用 <span class=\"chem\">f</span> 在 <span class=\"chem\">x &gt;= 0</span> 的部分，然後作鏡像反射。該部分由 <span class=\"chem\">(0, 1)</span> 開始，上升到極大點，下降到極小點，然後再上升。",
        // EN: Three meetings on <span class="chem">x &gt; 0</span> need the line above the starting value <span class="chem">1</span> but below the maximum. What happens when <span class="chem">k = 1</span> exactly?
        "要在 <span class=\"chem\">x &gt; 0</span> 上有三個交點，直線必須高於起點值 <span class=\"chem\">1</span> 但低於極大值。當 <span class=\"chem\">k = 1</span> 恰好成立時會怎樣？",
      ],
      // EN: <p><strong>Decode.</strong> Count intersections of <span class="chem">y = k</span> with a graph that is symmetric about the <span class="chem">y</span>-axis.</p><p>(a) GDC: maximum <span class="chem">(0.451, 1.63)</span>, minimum <span class="chem">(2.22, -1.11)</span>.</p><p>(b) For <span class="chem">x &gt;= 0</span>, <span class="chem">f(|x|) = f(x)</span>; reflect this half in the <span class="chem">y</span>-axis.</p><p>(c) On <span class="chem">x &gt; 0</span> the curve goes from <span class="chem">1</span> up to <span class="chem">1.63</span>, down to <span class="chem">-1.11</span>, then up without bound. A line <span class="chem">y = k</span> meets it three times exactly when <span class="chem">1 &lt; k &lt; 1.63</span>, giving six solutions in total. At <span class="chem">k = 1</span> the solution <span class="chem">x = 0</span> is shared by both halves, giving only five.</p>
      solution: "<p><strong>解碼。</strong>數出 <span class=\"chem\">y = k</span> 與一個對 <span class=\"chem\">y</span> 軸對稱的圖像的交點。</p><p>(a) GDC：極大點 <span class=\"chem\">(0.451, 1.63)</span>，極小點 <span class=\"chem\">(2.22, -1.11)</span>。</p><p>(b) 當 <span class=\"chem\">x &gt;= 0</span> 時 <span class=\"chem\">f(|x|) = f(x)</span>；把這一半沿 <span class=\"chem\">y</span> 軸反射。</p><p>(c) 在 <span class=\"chem\">x &gt; 0</span> 上，曲線由 <span class=\"chem\">1</span> 上升到 <span class=\"chem\">1.63</span>，下降到 <span class=\"chem\">-1.11</span>，然後無限上升。直線 <span class=\"chem\">y = k</span> 與它恰好相交三次當且僅當 <span class=\"chem\">1 &lt; k &lt; 1.63</span>，合共給出六個解。當 <span class=\"chem\">k = 1</span> 時，解 <span class=\"chem\">x = 0</span> 為兩半所共有，所以只有五個解。</p>",
      // EN: <p>(a) Maximum <span class="chem">(0.451, 1.63)</span>, minimum <span class="chem">(2.22, -1.11)</span>. (b) Keep the part of <span class="chem">y = f(x)</span> for <span class="chem">x &gt;= 0</span> (starting at <span class="chem">(0, 1)</span>) and reflect it in the <span class="chem">y</span>-axis; the graph is symmetric, with maxima at <span class="chem">(+-0.451, 1.63)</span>, minima at <span class="chem">(+-2.22, -1.11)</span> and a sharp point at <span class="chem">(0, 1)</span>. (c) <span class="chem">1 &lt; k &lt; 1.63</span>.</p>
      answer: "<p>(a) 極大點 <span class=\"chem\">(0.451, 1.63)</span>，極小點 <span class=\"chem\">(2.22, -1.11)</span>。(b) 保留 <span class=\"chem\">y = f(x)</span> 在 <span class=\"chem\">x &gt;= 0</span> 的部分（由 <span class=\"chem\">(0, 1)</span> 開始），並把它沿 <span class=\"chem\">y</span> 軸反射；圖像對稱，極大點在 <span class=\"chem\">(+-0.451, 1.63)</span>，極小點在 <span class=\"chem\">(+-2.22, -1.11)</span>，並在 <span class=\"chem\">(0, 1)</span> 有一個尖點。(c) <span class=\"chem\">1 &lt; k &lt; 1.63</span>。</p>",
      markscheme: [
        // EN: A1: (a) maximum <span class="chem">(0.451, 1.63)</span>.
        "A1：(a) 極大點 <span class=\"chem\">(0.451, 1.63)</span>。",
        // EN: A1: (a) minimum <span class="chem">(2.22, -1.11)</span>.
        "A1：(a) 極小點 <span class=\"chem\">(2.22, -1.11)</span>。",
        // EN: A1: (b) right-hand half is <span class="chem">y = f(x)</span> for <span class="chem">x &gt;= 0</span>, through <span class="chem">(0, 1)</span>, with the turning points from (a).
        "A1：(b) 右半部為 <span class=\"chem\">x &gt;= 0</span> 時的 <span class=\"chem\">y = f(x)</span>，經過 <span class=\"chem\">(0, 1)</span>，並有 (a) 的轉向點。",
        // EN: A1: (b) left-hand half is its reflection in the <span class="chem">y</span>-axis (symmetric graph, local minimum point at <span class="chem">(0, 1)</span>).
        "A1：(b) 左半部是它沿 <span class=\"chem\">y</span> 軸的反射（對稱圖像，局部極小點在 <span class=\"chem\">(0, 1)</span>）。",
        // EN: R1: (c) a horizontal line <span class="chem">y = k</span> must cut each half three times, which needs it strictly above <span class="chem">f(0) = 1</span> and strictly below the maximum.
        "R1：(c) 水平線 <span class=\"chem\">y = k</span> 必須與每一半各相交三次，這需要它嚴格高於 <span class=\"chem\">f(0) = 1</span> 並嚴格低於極大值。",
        // EN: A1: (c) <span class="chem">1 &lt; k &lt; 1.63</span>.
        "A1：(c) <span class=\"chem\">1 &lt; k &lt; 1.63</span>。",
      ],
    },

    // ── t2-3-q039 · short · challenge · AHL · SL 2.11, AHL 2.12, 2.15 · 15 marks
    "t2-3-q039": {
      // EN: <p>The cross-section of a hill is modelled by <span class="chem">h(x) = 0.004x(30 - x)(x + 10)</span>, <span class="chem">0 &lt;= x &lt;= 30</span>, where <span class="chem">x</span> is the horizontal distance in metres from the western foot of the hill and <span class="chem">h(x)</span> is the height in metres.</p><p>(a) Find the greatest height of the hill and the horizontal distance at which it occurs. <strong>[3 marks]</strong></p><p>(b) A footpath is to be built along the part of the hill that is at least <span class="chem">15</span> m high. Find the horizontal length of this part. <strong>[4 marks]</strong></p><p>A landscape architect redesigns the hill. The new cross-section is <span class="chem">g(x) = h(x/1.2) - 3</span>, <span class="chem">0 &lt;= x &lt;= 36</span>, where height is still measured from the original ground level.</p><p>(c) Describe fully the two transformations that map the graph of <span class="chem">h</span> onto the graph of <span class="chem">g</span>. <strong>[2 marks]</strong></p><p>(d) Write down the coordinates of the highest point of the new hill. <strong>[2 marks]</strong></p><p>(e) Find the horizontal distance between the two points at which the new hill meets the original ground level (<span class="chem">g(x) = 0</span>). <strong>[4 marks]</strong></p>
      stem: "<p>一座山丘的橫截面的模型為 <span class=\"chem\">h(x) = 0.004x(30 - x)(x + 10)</span>，<span class=\"chem\">0 &lt;= x &lt;= 30</span>，其中 <span class=\"chem\">x</span> 是由山丘西面山腳起計的水平距離（以米計），<span class=\"chem\">h(x)</span> 是高度（以米計）。</p><p>(a) 求 (Find) 山丘的最大高度及其所在的水平距離。<strong>[3 marks]</strong></p><p>(b) 沿山丘高度至少為 <span class=\"chem\">15</span> m 的部分將建一條步行徑。求這部分的水平長度。<strong>[4 marks]</strong></p><p>一位園境建築師重新設計山丘。新的橫截面為 <span class=\"chem\">g(x) = h(x/1.2) - 3</span>，<span class=\"chem\">0 &lt;= x &lt;= 36</span>，高度仍由原來的地面量起。</p><p>(c) 完整描述 (Describe) 把 <span class=\"chem\">h</span> 的圖像映射至 <span class=\"chem\">g</span> 的圖像的兩個變換。<strong>[2 marks]</strong></p><p>(d) 寫出 (Write down) 新山丘最高點的坐標。<strong>[2 marks]</strong></p><p>(e) 求新山丘與原來地面（<span class=\"chem\">g(x) = 0</span>）相交的兩點之間的水平距離。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: (b) "at least 15 m high" is the inequality <span class="chem">h(x) &gt;= 15</span>, and "horizontal length" is the difference of the two end points. In (c)–(e), the new hill is a transformed copy, so turning points move with the transformation.
        "解碼：(b) 中「高度至少為 15 m」就是不等式 <span class=\"chem\">h(x) &gt;= 15</span>，「水平長度」是兩個端點之差。在 (c)–(e) 中，新山丘是經變換的複本，所以轉向點隨變換移動。",
        // EN: Enter <span class="chem">Y_1 = 0.004x(30 - x)(x + 10)</span> with window <span class="chem">0 &lt;= x &lt;= 36</span>, <span class="chem">-5 &lt;= y &lt;= 30</span>. Use maximum, then intersect with <span class="chem">Y_2 = 15</span>.
        "輸入 <span class=\"chem\">Y_1 = 0.004x(30 - x)(x + 10)</span>，視窗為 <span class=\"chem\">0 &lt;= x &lt;= 36</span>、<span class=\"chem\">-5 &lt;= y &lt;= 30</span>。使用求極大值功能，然後求與 <span class=\"chem\">Y_2 = 15</span> 的交點。",
        // EN: <span class="chem">h(x/1.2)</span> stretches horizontally by <span class="chem">1.2</span>; <span class="chem">-3</span> moves down. So the peak <span class="chem">(18.7, 24.3)</span> moves to <span class="chem">(1.2 × 18.7, 24.3 - 3)</span>.
        "<span class=\"chem\">h(x/1.2)</span> 作 <span class=\"chem\">1.2</span> 倍的水平伸縮；<span class=\"chem\">-3</span> 向下平移。所以峰點 <span class=\"chem\">(18.7, 24.3)</span> 移至 <span class=\"chem\">(1.2 × 18.7, 24.3 - 3)</span>。",
        // EN: For (e), graph <span class="chem">Y_3 = 0.004(x/1.2)(30 - x/1.2)(x/1.2 + 10) - 3</span> and find its zeros in <span class="chem">0 &lt;= x &lt;= 36</span>.
        "在 (e) 中，繪出 <span class=\"chem\">Y_3 = 0.004(x/1.2)(30 - x/1.2)(x/1.2 + 10) - 3</span> 的圖像並求出它在 <span class=\"chem\">0 &lt;= x &lt;= 36</span> 內的零點。",
      ],
      // EN: <p><strong>Decode.</strong> (b) and (e) are inequality/equation questions about a cubic, solved on the GDC and restricted to the domain. (c) and (d) are transformation questions: track the peak.</p><p>(a) The GDC maximum on <span class="chem">0 &lt;= x &lt;= 30</span> is at <span class="chem">(18.685, 24.258)</span>: height <span class="chem">24.3</span> m at <span class="chem">x = 18.7</span> m.</p><p>(b) <span class="chem">h(x) = 15</span> at <span class="chem">x ≈ 9.384</span> and <span class="chem">x ≈ 25.99</span> (the root <span class="chem">-15.4</span> is outside the domain). The hill is at least <span class="chem">15</span> m high for <span class="chem">9.38 &lt;= x &lt;= 26.0</span>, a length of <span class="chem">16.6</span> m.</p><p>(c) <span class="chem">x -&gt; x/1.2</span>: horizontal stretch with scale factor <span class="chem">1.2</span>; <span class="chem">-3</span>: translation <span class="chem">3</span> units down.</p><p>(d) <span class="chem">(1.2 × 18.685, 24.258 - 3) = (22.4, 21.3)</span>.</p><p>(e) <span class="chem">g(x) = 0</span> at <span class="chem">x ≈ 2.652</span> and <span class="chem">x ≈ 35.22</span>, so the distance is <span class="chem">32.6</span> m. (Check: these are <span class="chem">1.2</span> times the solutions of <span class="chem">h(x) = 3</span>.)</p>
      solution: "<p><strong>解碼。</strong>(b) 和 (e) 是關於三次函數的不等式／方程問題，用 GDC 解並限制在定義域內。(c) 和 (d) 是變換問題：追蹤峰點。</p><p>(a) <span class=\"chem\">0 &lt;= x &lt;= 30</span> 上的 GDC 極大點在 <span class=\"chem\">(18.685, 24.258)</span>：在 <span class=\"chem\">x = 18.7</span> m 處高度為 <span class=\"chem\">24.3</span> m。</p><p>(b) 在 <span class=\"chem\">x ≈ 9.384</span> 及 <span class=\"chem\">x ≈ 25.99</span> 時 <span class=\"chem\">h(x) = 15</span>（根 <span class=\"chem\">-15.4</span> 在定義域以外）。當 <span class=\"chem\">9.38 &lt;= x &lt;= 26.0</span> 時山丘高度至少為 <span class=\"chem\">15</span> m，長度為 <span class=\"chem\">16.6</span> m。</p><p>(c) <span class=\"chem\">x -&gt; x/1.2</span>：比例因子為 <span class=\"chem\">1.2</span> 的水平伸縮；<span class=\"chem\">-3</span>：向下平移 <span class=\"chem\">3</span> 單位。</p><p>(d) <span class=\"chem\">(1.2 × 18.685, 24.258 - 3) = (22.4, 21.3)</span>。</p><p>(e) 在 <span class=\"chem\">x ≈ 2.652</span> 及 <span class=\"chem\">x ≈ 35.22</span> 時 <span class=\"chem\">g(x) = 0</span>，所以距離為 <span class=\"chem\">32.6</span> m。（驗算：它們是 <span class=\"chem\">h(x) = 3</span> 的解的 <span class=\"chem\">1.2</span> 倍。）</p>",
      // EN: <p>(a) <span class="chem">24.3</span> m at <span class="chem">x = 18.7</span> m. (b) <span class="chem">h(x) &gt;= 15</span> for <span class="chem">9.38 &lt;= x &lt;= 26.0</span>; length <span class="chem">16.6</span> m. (c) Horizontal stretch with scale factor <span class="chem">1.2</span> (parallel to the <span class="chem">x</span>-axis), then translation <span class="chem">3</span> units down. (d) <span class="chem">(22.4, 21.3)</span>. (e) <span class="chem">g(x) = 0</span> at <span class="chem">x = 2.65</span> and <span class="chem">x = 35.2</span>; distance <span class="chem">32.6</span> m.</p>
      answer: "<p>(a) 在 <span class=\"chem\">x = 18.7</span> m 處為 <span class=\"chem\">24.3</span> m。(b) 當 <span class=\"chem\">9.38 &lt;= x &lt;= 26.0</span> 時 <span class=\"chem\">h(x) &gt;= 15</span>；長度 <span class=\"chem\">16.6</span> m。(c) 比例因子為 <span class=\"chem\">1.2</span> 的水平伸縮（平行於 <span class=\"chem\">x</span> 軸），然後向下平移 <span class=\"chem\">3</span> 單位。(d) <span class=\"chem\">(22.4, 21.3)</span>。(e) 在 <span class=\"chem\">x = 2.65</span> 及 <span class=\"chem\">x = 35.2</span> 時 <span class=\"chem\">g(x) = 0</span>；距離 <span class=\"chem\">32.6</span> m。</p>",
      markscheme: [
        // EN: M1: (a) uses the GDC maximum on <span class="chem">0 &lt;= x &lt;= 30</span>.
        "M1：(a) 在 <span class=\"chem\">0 &lt;= x &lt;= 30</span> 上使用 GDC 求極大值功能。",
        // EN: A1: (a) greatest height <span class="chem">24.3</span> m.
        "A1：(a) 最大高度 <span class=\"chem\">24.3</span> m。",
        // EN: A1: (a) at <span class="chem">x = 18.7</span> m.
        "A1：(a) 在 <span class=\"chem\">x = 18.7</span> m 處。",
        // EN: M1: (b) sets up <span class="chem">h(x) &gt;= 15</span> (or <span class="chem">h(x) = 15</span>).
        "M1：(b) 列出 <span class=\"chem\">h(x) &gt;= 15</span>（或 <span class=\"chem\">h(x) = 15</span>）。",
        // EN: A1: (b) <span class="chem">x = 9.38</span>.
        "A1：(b) <span class=\"chem\">x = 9.38</span>。",
        // EN: A1: (b) <span class="chem">x = 26.0</span> (rejecting the negative root <span class="chem">-15.4</span>).
        "A1：(b) <span class=\"chem\">x = 26.0</span>（捨去負根 <span class=\"chem\">-15.4</span>）。",
        // EN: A1: (b) length <span class="chem">26.0 - 9.38 = 16.6</span> m.
        "A1：(b) 長度 <span class=\"chem\">26.0 - 9.38 = 16.6</span> m。",
        // EN: A1: (c) horizontal stretch, scale factor <span class="chem">1.2</span>.
        "A1：(c) 水平伸縮，比例因子 <span class=\"chem\">1.2</span>。",
        // EN: A1: (c) vertical translation of <span class="chem">3</span> units down.
        "A1：(c) 向下垂直平移 <span class=\"chem\">3</span> 單位。",
        // EN: A1: (d) <span class="chem">x = 1.2 × 18.7 = 22.4</span>.
        "A1：(d) <span class=\"chem\">x = 1.2 × 18.7 = 22.4</span>。",
        // EN: A1: (d) <span class="chem">y = 24.3 - 3 = 21.3</span>.
        "A1：(d) <span class=\"chem\">y = 24.3 - 3 = 21.3</span>。",
        // EN: M1: (e) solves <span class="chem">g(x) = 0</span>, i.e. <span class="chem">h(x/1.2) = 3</span>, on <span class="chem">0 &lt;= x &lt;= 36</span>.
        "M1：(e) 在 <span class=\"chem\">0 &lt;= x &lt;= 36</span> 上解 <span class=\"chem\">g(x) = 0</span>，即 <span class=\"chem\">h(x/1.2) = 3</span>。",
        // EN: A1: (e) <span class="chem">x = 2.65</span>.
        "A1：(e) <span class=\"chem\">x = 2.65</span>。",
        // EN: A1: (e) <span class="chem">x = 35.2</span>.
        "A1：(e) <span class=\"chem\">x = 35.2</span>。",
        // EN: A1: (e) distance <span class="chem">32.6</span> m.
        "A1：(e) 距離 <span class=\"chem\">32.6</span> m。",
      ],
    },

    // ── t2-3-q040 · short · exam · SL · SL 2.11 · 7 marks
    "t2-3-q040": {
      // EN: <p>Let <span class="chem">f(x) = x^3 - 3x</span>. The function <span class="chem">g</span> is defined by <span class="chem">g(x) = a f(x) + b</span>, where <span class="chem">a</span> and <span class="chem">b</span> are constants. A table of values of <span class="chem">g</span> includes <span class="chem">g(1) = 1</span> and <span class="chem">g(2) = 13</span>.</p><p>(a) Find the value of <span class="chem">a</span> and the value of <span class="chem">b</span>. <strong>[3 marks]</strong></p><p>(b) Hence describe a sequence of two transformations that maps the graph of <span class="chem">y = f(x)</span> onto the graph of <span class="chem">y = g(x)</span>. <strong>[2 marks]</strong></p><p>(c) Find the <span class="chem">x</span>-intercept of the graph of <span class="chem">y = g(x)</span>. <strong>[2 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = x^3 - 3x</span>。函數 <span class=\"chem\">g</span> 定義為 <span class=\"chem\">g(x) = a f(x) + b</span>，其中 <span class=\"chem\">a</span> 和 <span class=\"chem\">b</span> 為常數。<span class=\"chem\">g</span> 的數值表包括 <span class=\"chem\">g(1) = 1</span> 及 <span class=\"chem\">g(2) = 13</span>。</p><p>(a) 求 (Find) <span class=\"chem\">a</span> 的值和 <span class=\"chem\">b</span> 的值。<strong>[3 marks]</strong></p><p>(b) 由此 (Hence) 描述 (Describe) 把 <span class=\"chem\">y = f(x)</span> 的圖像映射至 <span class=\"chem\">y = g(x)</span> 的圖像的兩個變換的序列。<strong>[2 marks]</strong></p><p>(c) 求 <span class=\"chem\">y = g(x)</span> 的圖像的 <span class=\"chem\">x</span> 截距。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Evaluate <span class="chem">f(1)</span> and <span class="chem">f(2)</span>, then use the two data values to write two simultaneous equations in <span class="chem">a</span> and <span class="chem">b</span>.
        "計算 <span class=\"chem\">f(1)</span> 和 <span class=\"chem\">f(2)</span>，然後用兩個數據值列出關於 <span class=\"chem\">a</span> 和 <span class=\"chem\">b</span> 的兩條聯立方程。",
        // EN: In <span class="chem">a f(x) + b</span>, the stretch happens before the translation.
        "在 <span class=\"chem\">a f(x) + b</span> 中，伸縮在平移之前進行。",
        // EN: <span class="chem">g(x) = 3x^3 - 9x + 7</span> has only one real zero; find it with the GDC.
        "<span class=\"chem\">g(x) = 3x^3 - 9x + 7</span> 只有一個實零點；用 GDC 求出它。",
      ],
      // EN: <p>(a) <span class="chem">f(1) = -2</span> and <span class="chem">f(2) = 2</span>, so <span class="chem">-2a + b = 1</span> and <span class="chem">2a + b = 13</span>. Subtracting: <span class="chem">4a = 12</span>, so <span class="chem">a = 3</span> and <span class="chem">b = 7</span>.</p><p>(b) Vertical stretch with scale factor <span class="chem">3</span>, then translation of <span class="chem">7</span> units up. (In the other order the translation would have to be <span class="chem">7/3</span> units.)</p><p>(c) <span class="chem">g(x) = 3x^3 - 9x + 7 = 0</span> has one real root, <span class="chem">x ≈ -2.04</span> (the local minimum of <span class="chem">g</span>, at <span class="chem">(1, 1)</span>, is above the axis).</p>
      solution: "<p>(a) <span class=\"chem\">f(1) = -2</span> 及 <span class=\"chem\">f(2) = 2</span>，所以 <span class=\"chem\">-2a + b = 1</span> 及 <span class=\"chem\">2a + b = 13</span>。相減：<span class=\"chem\">4a = 12</span>，所以 <span class=\"chem\">a = 3</span> 及 <span class=\"chem\">b = 7</span>。</p><p>(b) 比例因子為 <span class=\"chem\">3</span> 的垂直伸縮，然後向上平移 <span class=\"chem\">7</span> 單位。（若次序相反，平移須為 <span class=\"chem\">7/3</span> 單位。）</p><p>(c) <span class=\"chem\">g(x) = 3x^3 - 9x + 7 = 0</span> 有一個實根 <span class=\"chem\">x ≈ -2.04</span>（<span class=\"chem\">g</span> 的局部極小點 <span class=\"chem\">(1, 1)</span> 在軸的上方）。</p>",
      // EN: <p>(a) <span class="chem">a = 3</span>, <span class="chem">b = 7</span>. (b) Vertical stretch with scale factor <span class="chem">3</span>, then translation <span class="chem">7</span> units up. (c) <span class="chem">x ≈ -2.04</span>.</p>
      answer: "<p>(a) <span class=\"chem\">a = 3</span>，<span class=\"chem\">b = 7</span>。(b) 比例因子為 <span class=\"chem\">3</span> 的垂直伸縮，然後向上平移 <span class=\"chem\">7</span> 單位。(c) <span class=\"chem\">x ≈ -2.04</span>。</p>",
      markscheme: [
        // EN: M1: (a) uses <span class="chem">f(1) = -2</span> and <span class="chem">f(2) = 2</span> to form <span class="chem">-2a + b = 1</span> and <span class="chem">2a + b = 13</span>.
        "M1：(a) 用 <span class=\"chem\">f(1) = -2</span> 及 <span class=\"chem\">f(2) = 2</span> 列出 <span class=\"chem\">-2a + b = 1</span> 及 <span class=\"chem\">2a + b = 13</span>。",
        // EN: A1: (a) <span class="chem">a = 3</span>.
        "A1：(a) <span class=\"chem\">a = 3</span>。",
        // EN: A1: (a) <span class="chem">b = 7</span>.
        "A1：(a) <span class=\"chem\">b = 7</span>。",
        // EN: A1: (b) vertical stretch, scale factor <span class="chem">3</span>.
        "A1：(b) 垂直伸縮，比例因子 <span class=\"chem\">3</span>。",
        // EN: A1: (b) followed by a vertical translation of <span class="chem">7</span> units up.
        "A1：(b) 接着向上垂直平移 <span class=\"chem\">7</span> 單位。",
        // EN: M1: (c) solves <span class="chem">3x^3 - 9x + 7 = 0</span> on the GDC.
        "M1：(c) 在 GDC 上解 <span class=\"chem\">3x^3 - 9x + 7 = 0</span>。",
        // EN: A1: (c) <span class="chem">x = -2.04</span>.
        "A1：(c) <span class=\"chem\">x = -2.04</span>。",
      ],
    },

    // ── t2-3-q041 · numeric · challenge · AHL · AHL 2.13 · 4 marks
    "t2-3-q041": {
      // EN: <p>A workshop makes <span class="chem">x</span> chairs per week. The average cost per chair, in dollars, is <span class="chem">C(x) = (0.5x^2 + 30x + 1500)/(x + 20)</span>.</p><p>Find the number of chairs per week that gives the lowest average cost per chair.</p>
      stem: "<p>一間工場每星期製造 <span class=\"chem\">x</span> 張椅子。每張椅子的平均成本（以元計）為 <span class=\"chem\">C(x) = (0.5x^2 + 30x + 1500)/(x + 20)</span>。</p><p>求 (Find) 使每張椅子平均成本最低的每星期椅子數目。</p>",
      hints: [
        // EN: Decode: you are asked for a number of chairs, which must be a whole number. Find where <span class="chem">C</span> is least, then check the whole numbers on either side.
        "解碼：題目要求的是椅子的數目，必須是整數。先求 <span class=\"chem\">C</span> 最小的位置，然後檢查兩旁的整數。",
        // EN: Graph <span class="chem">Y_1 = (0.5x^2 + 30x + 1500)/(x + 20)</span> for <span class="chem">x &gt; 0</span> and use the minimum tool.
        "在 <span class=\"chem\">x &gt; 0</span> 的範圍繪出 <span class=\"chem\">Y_1 = (0.5x^2 + 30x + 1500)/(x + 20)</span> 的圖像，並使用求極小值功能。",
        // EN: The minimum is at <span class="chem">x ≈ 26.9</span>. Compare <span class="chem">C(26)</span> and <span class="chem">C(27)</span> in a table.
        "極小點在 <span class=\"chem\">x ≈ 26.9</span>。用數值表比較 <span class=\"chem\">C(26)</span> 和 <span class=\"chem\">C(27)</span>。",
      ],
      // EN: <p><strong>Decode.</strong> The answer must be a whole number of chairs, so the GDC minimum is only the first step.</p><p>The GDC minimum of <span class="chem">C</span> for <span class="chem">x &gt; 0</span> is at <span class="chem">x ≈ 26.90</span>, <span class="chem">C ≈ 56.904</span>. Checking whole numbers: <span class="chem">C(26) = 2618/46 ≈ 56.913</span> and <span class="chem">C(27) = 2674.5/47 ≈ 56.904</span>. The lowest average cost is at <span class="chem">27</span> chairs per week.</p><p>(Dividing gives <span class="chem">C(x) = 0.5x + 20 + 1100/(x + 20)</span>, so for large <span class="chem">x</span> the cost follows the oblique asymptote <span class="chem">y = 0.5x + 20</span> and rises again.)</p>
      solution: "<p><strong>解碼。</strong>答案必須是椅子的整數數目，所以 GDC 的極小點只是第一步。</p><p><span class=\"chem\">x &gt; 0</span> 時 <span class=\"chem\">C</span> 的 GDC 極小點在 <span class=\"chem\">x ≈ 26.90</span>，<span class=\"chem\">C ≈ 56.904</span>。檢查整數：<span class=\"chem\">C(26) = 2618/46 ≈ 56.913</span> 及 <span class=\"chem\">C(27) = 2674.5/47 ≈ 56.904</span>。每星期 <span class=\"chem\">27</span> 張椅子時平均成本最低。</p><p>（進行除法得 <span class=\"chem\">C(x) = 0.5x + 20 + 1100/(x + 20)</span>，所以當 <span class=\"chem\">x</span> 很大時，成本沿斜漸近線 <span class=\"chem\">y = 0.5x + 20</span> 變化並再次上升。）</p>",
    },

    // ── t2-3-q042 · short · exam · AHL · AHL 2.12, 2.15 · 6 marks
    "t2-3-q042": {
      // EN: <p>Let <span class="chem">P(x) = x^3 + ax^2 - 7x + 3</span>. When <span class="chem">P(x)</span> is divided by <span class="chem">(x + 2)</span>, the remainder is <span class="chem">13</span>.</p><p>(a) Find the value of <span class="chem">a</span>. <strong>[2 marks]</strong></p><p>(b) Find the three roots of <span class="chem">P(x) = 0</span>. <strong>[2 marks]</strong></p><p>(c) Hence solve <span class="chem">P(x) &gt; 0</span>. <strong>[2 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">P(x) = x^3 + ax^2 - 7x + 3</span>。當 <span class=\"chem\">P(x)</span> 除以 <span class=\"chem\">(x + 2)</span> 時，餘數為 <span class=\"chem\">13</span>。</p><p>(a) 求 (Find) <span class=\"chem\">a</span> 的值。<strong>[2 marks]</strong></p><p>(b) 求 <span class=\"chem\">P(x) = 0</span> 的三個根。<strong>[2 marks]</strong></p><p>(c) 由此 (Hence) 解 <span class=\"chem\">P(x) &gt; 0</span>。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Remainder Theorem: the remainder on division by <span class="chem">(x + 2)</span> is <span class="chem">P(-2)</span>.
        "餘式定理：除以 <span class=\"chem\">(x + 2)</span> 的餘數為 <span class=\"chem\">P(-2)</span>。",
        // EN: With <span class="chem">a = 1</span>, none of <span class="chem">+-1, +-3</span> is a root, so there is no "nice" factor: use the GDC.
        "當 <span class=\"chem\">a = 1</span> 時，<span class=\"chem\">+-1, +-3</span> 全都不是根，所以沒有「漂亮」的因式：使用 GDC。",
        // EN: A cubic with positive leading coefficient is positive between its first two roots and after its third.
        "首項係數為正的三次函數在首兩個根之間及第三個根之後為正。",
      ],
      // EN: <p>(a) <span class="chem">P(-2) = -8 + 4a + 14 + 3 = 4a + 9 = 13</span>, so <span class="chem">a = 1</span>.</p><p>(b) <span class="chem">x^3 + x^2 - 7x + 3 = 0</span>: GDC roots <span class="chem">x ≈ -3.354</span>, <span class="chem">0.4765</span>, <span class="chem">1.877</span>.</p><p>(c) The graph is above the axis for <span class="chem">-3.35 &lt; x &lt; 0.476</span> and for <span class="chem">x &gt; 1.88</span>.</p>
      solution: "<p>(a) <span class=\"chem\">P(-2) = -8 + 4a + 14 + 3 = 4a + 9 = 13</span>，所以 <span class=\"chem\">a = 1</span>。</p><p>(b) <span class=\"chem\">x^3 + x^2 - 7x + 3 = 0</span>：GDC 根 <span class=\"chem\">x ≈ -3.354</span>、<span class=\"chem\">0.4765</span>、<span class=\"chem\">1.877</span>。</p><p>(c) 圖像在 <span class=\"chem\">-3.35 &lt; x &lt; 0.476</span> 及 <span class=\"chem\">x &gt; 1.88</span> 時位於軸的上方。</p>",
      // EN: <p>(a) <span class="chem">a = 1</span>. (b) <span class="chem">x ≈ -3.35, 0.476, 1.88</span>. (c) <span class="chem">-3.35 &lt; x &lt; 0.476</span> or <span class="chem">x &gt; 1.88</span>.</p>
      answer: "<p>(a) <span class=\"chem\">a = 1</span>。(b) <span class=\"chem\">x ≈ -3.35, 0.476, 1.88</span>。(c) <span class=\"chem\">-3.35 &lt; x &lt; 0.476</span> 或 <span class=\"chem\">x &gt; 1.88</span>。</p>",
      markscheme: [
        // EN: M1: (a) Remainder Theorem: <span class="chem">P(-2) = -8 + 4a + 14 + 3 = 13</span>.
        "M1：(a) 餘式定理：<span class=\"chem\">P(-2) = -8 + 4a + 14 + 3 = 13</span>。",
        // EN: A1: (a) <span class="chem">a = 1</span>.
        "A1：(a) <span class=\"chem\">a = 1</span>。",
        // EN: M1: (b) substitutes <span class="chem">a = 1</span> and solves <span class="chem">x^3 + x^2 - 7x + 3 = 0</span> on the GDC (graph or polynomial solver).
        "M1：(b) 代入 <span class=\"chem\">a = 1</span> 並在 GDC 上解 <span class=\"chem\">x^3 + x^2 - 7x + 3 = 0</span>（繪圖或用多項式求解程式）。",
        // EN: A1: (b) all three roots <span class="chem">-3.35, 0.476, 1.88</span>.
        "A1：(b) 全部三個根 <span class=\"chem\">-3.35, 0.476, 1.88</span>。",
        // EN: A1: (c) <span class="chem">-3.35 &lt; x &lt; 0.476</span>.
        "A1：(c) <span class=\"chem\">-3.35 &lt; x &lt; 0.476</span>。",
        // EN: A1: (c) <span class="chem">x &gt; 1.88</span>.
        "A1：(c) <span class=\"chem\">x &gt; 1.88</span>。",
      ],
    },

    // ── t2-3-q043 · short · challenge · AHL · AHL 2.15, 2.16 · 5 marks
    "t2-3-q043": {
      // EN: <p>Solve the inequality <span class="chem">|ln x| &lt; 2 - x</span>.</p>
      stem: "<p>解不等式 <span class=\"chem\">|ln x| &lt; 2 - x</span>。</p>",
      hints: [
        // EN: Decode: a modulus inequality with no algebraic method. Remember the hidden condition: <span class="chem">ln x</span> needs <span class="chem">x &gt; 0</span>. Solve it graphically.
        "解碼：這是沒有代數方法的模不等式。記住隱藏條件：<span class=\"chem\">ln x</span> 需要 <span class=\"chem\">x &gt; 0</span>。用圖像法解。",
        // EN: Graph <span class="chem">Y_1 = abs(ln(x))</span> and <span class="chem">Y_2 = 2 - x</span>. The modulus graph has a sharp point at <span class="chem">(1, 0)</span>.
        "繪出 <span class=\"chem\">Y_1 = abs(ln(x))</span> 與 <span class=\"chem\">Y_2 = 2 - x</span> 的圖像。模圖像在 <span class=\"chem\">(1, 0)</span> 有一個尖點。",
        // EN: If you solve algebraically instead, <span class="chem">-ln x = 2 - x</span> has a second root, <span class="chem">x ≈ 3.15</span>; reject it, since that branch only applies for <span class="chem">x &lt; 1</span>.
        "若改用代數方法解，<span class=\"chem\">-ln x = 2 - x</span> 有第二個根 <span class=\"chem\">x ≈ 3.15</span>；須捨去它，因為該分支只適用於 <span class=\"chem\">x &lt; 1</span>。",
      ],
      // EN: <p><strong>Decode.</strong> Where is the V-shaped graph <span class="chem">y = |ln x|</span>, defined for <span class="chem">x &gt; 0</span>, below the line <span class="chem">y = 2 - x</span>?</p><p>For <span class="chem">0 &lt; x &lt; 1</span>, <span class="chem">|ln x| = -ln x</span>; <span class="chem">-ln x = 2 - x</span> gives <span class="chem">x ≈ 0.159</span> (the other root <span class="chem">3.15</span> is not in this branch). For <span class="chem">x &gt;= 1</span>, <span class="chem">ln x = 2 - x</span> gives <span class="chem">x ≈ 1.56</span>. At <span class="chem">x = 1</span>, <span class="chem">0 &lt; 1</span>, so the solution is <span class="chem">0.159 &lt; x &lt; 1.56</span>.</p>
      solution: "<p><strong>解碼。</strong>定義於 <span class=\"chem\">x &gt; 0</span> 的 V 形圖像 <span class=\"chem\">y = |ln x|</span> 在哪裏位於直線 <span class=\"chem\">y = 2 - x</span> 下方？</p><p>當 <span class=\"chem\">0 &lt; x &lt; 1</span> 時，<span class=\"chem\">|ln x| = -ln x</span>；由 <span class=\"chem\">-ln x = 2 - x</span> 得 <span class=\"chem\">x ≈ 0.159</span>（另一個根 <span class=\"chem\">3.15</span> 不在此分支內）。當 <span class=\"chem\">x &gt;= 1</span> 時，由 <span class=\"chem\">ln x = 2 - x</span> 得 <span class=\"chem\">x ≈ 1.56</span>。在 <span class=\"chem\">x = 1</span>，<span class=\"chem\">0 &lt; 1</span>，所以解為 <span class=\"chem\">0.159 &lt; x &lt; 1.56</span>。</p>",
      // EN: <p><span class="chem">0.159 &lt; x &lt; 1.56</span></p>
      answer: "<p><span class=\"chem\">0.159 &lt; x &lt; 1.56</span></p>",
      markscheme: [
        // EN: R1: notes the domain <span class="chem">x &gt; 0</span>.
        "R1：注意定義域 <span class=\"chem\">x &gt; 0</span>。",
        // EN: M1: graphs <span class="chem">y = |ln x|</span> and <span class="chem">y = 2 - x</span> (or splits into <span class="chem">-ln x &lt; 2 - x</span> for <span class="chem">0 &lt; x &lt; 1</span> and <span class="chem">ln x &lt; 2 - x</span> for <span class="chem">x &gt;= 1</span>).
        "M1：繪出 <span class=\"chem\">y = |ln x|</span> 與 <span class=\"chem\">y = 2 - x</span> 的圖像（或分成 <span class=\"chem\">0 &lt; x &lt; 1</span> 時的 <span class=\"chem\">-ln x &lt; 2 - x</span> 及 <span class=\"chem\">x &gt;= 1</span> 時的 <span class=\"chem\">ln x &lt; 2 - x</span>）。",
        // EN: A1: <span class="chem">x = 0.159</span>.
        "A1：<span class=\"chem\">x = 0.159</span>。",
        // EN: A1: <span class="chem">x = 1.56</span>.
        "A1：<span class=\"chem\">x = 1.56</span>。",
        // EN: A1: <span class="chem">0.159 &lt; x &lt; 1.56</span>.
        "A1：<span class=\"chem\">0.159 &lt; x &lt; 1.56</span>。",
      ],
    },

    // ── t2-3-q044 · numeric · foundation · SL · SL 2.11 · 2 marks
    "t2-3-q044": {
      // EN: <p>The point <span class="chem">(2, -4)</span> lies on the graph of <span class="chem">y = f(x)</span>. The point <span class="chem">Q</span> is its image on the graph of <span class="chem">y = 3f(-x) - 2</span>. Find the <span class="chem">y</span>-coordinate of <span class="chem">Q</span>.</p>
      stem: "<p>點 <span class=\"chem\">(2, -4)</span> 位於 <span class=\"chem\">y = f(x)</span> 的圖像上。點 <span class=\"chem\">Q</span> 是它在 <span class=\"chem\">y = 3f(-x) - 2</span> 的圖像上的像。求 (Find) <span class=\"chem\">Q</span> 的 <span class=\"chem\">y</span> 坐標。</p>",
      hints: [
        // EN: <span class="chem">f(-x)</span> reflects in the <span class="chem">y</span>-axis, so only the <span class="chem">x</span>-coordinate changes sign.
        "<span class=\"chem\">f(-x)</span> 是沿 <span class=\"chem\">y</span> 軸反射，所以只有 <span class=\"chem\">x</span> 坐標改變正負號。",
        // EN: The outside of the function acts on <span class="chem">y</span>: multiply by <span class="chem">3</span>, then subtract <span class="chem">2</span>.
        "函數外面的運算作用於 <span class=\"chem\">y</span>：乘以 <span class=\"chem\">3</span>，然後減 <span class=\"chem\">2</span>。",
      ],
      // EN: <p>The reflection sends <span class="chem">(2, -4)</span> to <span class="chem">(-2, -4)</span>. Then <span class="chem">y = 3(-4) - 2 = -14</span>, so <span class="chem">Q = (-2, -14)</span> and its <span class="chem">y</span>-coordinate is <span class="chem">-14</span>.</p>
      solution: "<p>反射把 <span class=\"chem\">(2, -4)</span> 變為 <span class=\"chem\">(-2, -4)</span>。然後 <span class=\"chem\">y = 3(-4) - 2 = -14</span>，所以 <span class=\"chem\">Q = (-2, -14)</span>，其 <span class=\"chem\">y</span> 坐標為 <span class=\"chem\">-14</span>。</p>",
    },

    // ── t2-3-q045 · short · exam · SL · SL 2.11 · 5 marks
    "t2-3-q045": {
      // EN: <p>(a) Write <span class="chem">2x^2 - 12x + 13</span> in the form <span class="chem">a(x - h)^2 + k</span>. <strong>[2 marks]</strong></p><p>(b) Hence describe a sequence of transformations that maps the graph of <span class="chem">y = x^2</span> onto the graph of <span class="chem">y = 2x^2 - 12x + 13</span>. <strong>[3 marks]</strong></p>
      stem: "<p>(a) 把 <span class=\"chem\">2x^2 - 12x + 13</span> 寫成 <span class=\"chem\">a(x - h)^2 + k</span> 的形式。<strong>[2 marks]</strong></p><p>(b) 由此 (Hence) 描述 (Describe) 把 <span class=\"chem\">y = x^2</span> 的圖像映射至 <span class=\"chem\">y = 2x^2 - 12x + 13</span> 的圖像的變換序列。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Take out the factor <span class="chem">2</span> from the <span class="chem">x</span> terms first: <span class="chem">2(x^2 - 6x) + 13</span>.
        "先從 <span class=\"chem\">x</span> 項中抽出公因數 <span class=\"chem\">2</span>：<span class=\"chem\">2(x^2 - 6x) + 13</span>。",
        // EN: Read <span class="chem">a(x - h)^2 + k</span> as: translate <span class="chem">h</span> horizontally, stretch vertically by <span class="chem">a</span>, then translate <span class="chem">k</span> vertically.
        "把 <span class=\"chem\">a(x - h)^2 + k</span> 理解為：水平平移 <span class=\"chem\">h</span>，垂直伸縮 <span class=\"chem\">a</span> 倍，然後垂直平移 <span class=\"chem\">k</span>。",
      ],
      // EN: <p>(a) <span class="chem">2x^2 - 12x + 13 = 2(x^2 - 6x + 9) - 18 + 13 = 2(x - 3)^2 - 5</span>.</p><p>(b) Translate <span class="chem">3</span> right (<span class="chem">y = (x - 3)^2</span>), stretch vertically by factor <span class="chem">2</span> (<span class="chem">y = 2(x - 3)^2</span>), then translate <span class="chem">5</span> down. If you translate down before stretching, the stretch would double the shift to <span class="chem">-10</span>, which is wrong.</p>
      solution: "<p>(a) <span class=\"chem\">2x^2 - 12x + 13 = 2(x^2 - 6x + 9) - 18 + 13 = 2(x - 3)^2 - 5</span>。</p><p>(b) 向右平移 <span class=\"chem\">3</span>（<span class=\"chem\">y = (x - 3)^2</span>），作比例因子為 <span class=\"chem\">2</span> 的垂直伸縮（<span class=\"chem\">y = 2(x - 3)^2</span>），然後向下平移 <span class=\"chem\">5</span>。若在伸縮前先向下平移，伸縮會使平移量加倍成 <span class=\"chem\">-10</span>，這是錯誤的。</p>",
      // EN: <p>(a) <span class="chem">2(x - 3)^2 - 5</span>. (b) Translation of <span class="chem">3</span> units right (horizontal translation), vertical stretch with scale factor <span class="chem">2</span>, then translation of <span class="chem">5</span> units down. (The vertical stretch must come before the downward translation.)</p>
      answer: "<p>(a) <span class=\"chem\">2(x - 3)^2 - 5</span>。(b) 向右平移 <span class=\"chem\">3</span> 單位（水平平移），比例因子為 <span class=\"chem\">2</span> 的垂直伸縮，然後向下平移 <span class=\"chem\">5</span> 單位。（垂直伸縮必須在向下平移之前進行。）</p>",
      markscheme: [
        // EN: M1: (a) completes the square: <span class="chem">2(x^2 - 6x) + 13 = 2((x - 3)^2 - 9) + 13</span>.
        "M1：(a) 配方：<span class=\"chem\">2(x^2 - 6x) + 13 = 2((x - 3)^2 - 9) + 13</span>。",
        // EN: A1: (a) <span class="chem">2(x - 3)^2 - 5</span>.
        "A1：(a) <span class=\"chem\">2(x - 3)^2 - 5</span>。",
        // EN: A1: (b) horizontal translation of <span class="chem">3</span> units to the right.
        "A1：(b) 向右水平平移 <span class=\"chem\">3</span> 單位。",
        // EN: A1: (b) vertical stretch with scale factor <span class="chem">2</span>.
        "A1：(b) 比例因子為 <span class=\"chem\">2</span> 的垂直伸縮。",
        // EN: A1: (b) vertical translation of <span class="chem">5</span> units down, applied after the stretch.
        "A1：(b) 在伸縮之後，向下垂直平移 <span class=\"chem\">5</span> 單位。",
      ],
    },

    // ── t2-3-q046 · numeric · challenge · SL · SL 2.11 · 4 marks
    "t2-3-q046": {
      // EN: <p>Let <span class="chem">f(x) = x^2 - 4x</span>. The graph of <span class="chem">y = f(x)</span> is reflected in the <span class="chem">y</span>-axis, then translated <span class="chem">3</span> units to the right, then stretched vertically with scale factor <span class="chem">2</span>, giving the graph of <span class="chem">y = g(x)</span>. Find the <span class="chem">y</span>-intercept of the graph of <span class="chem">g</span>.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = x^2 - 4x</span>。把 <span class=\"chem\">y = f(x)</span> 的圖像沿 <span class=\"chem\">y</span> 軸反射，然後向右平移 <span class=\"chem\">3</span> 單位，再作比例因子為 <span class=\"chem\">2</span> 的垂直伸縮，得到 <span class=\"chem\">y = g(x)</span> 的圖像。求 (Find) <span class=\"chem\">g</span> 的圖像的 <span class=\"chem\">y</span> 截距。</p>",
      hints: [
        // EN: Decode: build <span class="chem">g(x)</span> one step at a time, in the order given. Each horizontal step replaces <span class="chem">x</span> in the <strong>current</strong> expression, then find <span class="chem">g(0)</span>.
        "解碼：按所給的次序逐步建立 <span class=\"chem\">g(x)</span>。每個水平步驟都替換<strong>當前</strong>式子中的 <span class=\"chem\">x</span>，然後求 <span class=\"chem\">g(0)</span>。",
        // EN: Reflection in the <span class="chem">y</span>-axis: <span class="chem">f(-x)</span>. A translation of <span class="chem">3</span> right then replaces <span class="chem">x</span> by <span class="chem">x - 3</span>: <span class="chem">f(-(x - 3)) = f(3 - x)</span>, not <span class="chem">f(-x - 3)</span>.
        "沿 <span class=\"chem\">y</span> 軸反射：<span class=\"chem\">f(-x)</span>。接着向右平移 <span class=\"chem\">3</span>，把 <span class=\"chem\">x</span> 換成 <span class=\"chem\">x - 3</span>：<span class=\"chem\">f(-(x - 3)) = f(3 - x)</span>，而不是 <span class=\"chem\">f(-x - 3)</span>。",
        // EN: So <span class="chem">g(x) = 2f(3 - x)</span> and <span class="chem">g(0) = 2f(3)</span>.
        "所以 <span class=\"chem\">g(x) = 2f(3 - x)</span> 及 <span class=\"chem\">g(0) = 2f(3)</span>。",
      ],
      // EN: <p><strong>Decode.</strong> Translate words into function notation in order; the translation acts on <span class="chem">x</span>, not on <span class="chem">-x</span>.</p><p>Reflect: <span class="chem">f(-x)</span>. Translate <span class="chem">3</span> right: <span class="chem">f(-(x - 3)) = f(3 - x)</span>. Stretch: <span class="chem">g(x) = 2f(3 - x)</span>. So <span class="chem">g(0) = 2f(3) = 2(9 - 12) = -6</span>.</p><p>Common slip: writing <span class="chem">f(-x - 3)</span> gives <span class="chem">2f(-3) = 2(9 + 12) = 42</span>, which is the translation applied before the reflection.</p>
      solution: "<p><strong>解碼。</strong>按次序把文字轉化為函數記法；平移作用於 <span class=\"chem\">x</span>，而不是 <span class=\"chem\">-x</span>。</p><p>反射：<span class=\"chem\">f(-x)</span>。向右平移 <span class=\"chem\">3</span>：<span class=\"chem\">f(-(x - 3)) = f(3 - x)</span>。伸縮：<span class=\"chem\">g(x) = 2f(3 - x)</span>。所以 <span class=\"chem\">g(0) = 2f(3) = 2(9 - 12) = -6</span>。</p><p>常見錯誤：寫成 <span class=\"chem\">f(-x - 3)</span> 會得到 <span class=\"chem\">2f(-3) = 2(9 + 12) = 42</span>，那是先平移後反射的結果。</p>",
    },

    // ── t2-3-q047 · numeric · exam · AHL · AHL 2.12 · 4 marks
    "t2-3-q047": {
      // EN: <p>The equation <span class="chem">2x^3 - 7x^2 + kx + 6 = 0</span> has roots <span class="chem">alpha</span>, <span class="chem">beta</span> and <span class="chem">gamma</span>. Given that <span class="chem">1/alpha + 1/beta + 1/gamma = 2</span>, find the value of <span class="chem">k</span>.</p>
      stem: "<p>方程 <span class=\"chem\">2x^3 - 7x^2 + kx + 6 = 0</span> 的根為 <span class=\"chem\">alpha</span>、<span class=\"chem\">beta</span> 和 <span class=\"chem\">gamma</span>。已知 <span class=\"chem\">1/alpha + 1/beta + 1/gamma = 2</span>，求 (Find) <span class=\"chem\">k</span> 的值。</p>",
      hints: [
        // EN: Write the sum of reciprocals over a common denominator: <span class="chem">(beta gamma + alpha gamma + alpha beta)/(alpha beta gamma)</span>.
        "把倒數之和寫成同一分母：<span class=\"chem\">(beta gamma + alpha gamma + alpha beta)/(alpha beta gamma)</span>。",
        // EN: For a cubic <span class="chem">ax^3 + bx^2 + cx + d</span>: <span class="chem">alpha beta + beta gamma + gamma alpha = c/a</span> and <span class="chem">alpha beta gamma = -d/a</span>.
        "對於三次式 <span class=\"chem\">ax^3 + bx^2 + cx + d</span>：<span class=\"chem\">alpha beta + beta gamma + gamma alpha = c/a</span> 及 <span class=\"chem\">alpha beta gamma = -d/a</span>。",
      ],
      // EN: <p><span class="chem">alpha beta + beta gamma + gamma alpha = k/2</span> and <span class="chem">alpha beta gamma = -6/2 = -3</span>. Then <span class="chem">1/alpha + 1/beta + 1/gamma = (k/2)/(-3) = -k/6 = 2</span>, so <span class="chem">k = -12</span>.</p>
      solution: "<p><span class=\"chem\">alpha beta + beta gamma + gamma alpha = k/2</span> 及 <span class=\"chem\">alpha beta gamma = -6/2 = -3</span>。於是 <span class=\"chem\">1/alpha + 1/beta + 1/gamma = (k/2)/(-3) = -k/6 = 2</span>，所以 <span class=\"chem\">k = -12</span>。</p>",
    },

    // ── t2-3-q048 · short · challenge · AHL · AHL 2.12 · 6 marks
    "t2-3-q048": {
      // EN: <p>The three roots of <span class="chem">x^3 - 12x^2 + kx - 28 = 0</span> form an arithmetic sequence.</p><p>(a) By writing the roots as <span class="chem">m - d</span>, <span class="chem">m</span> and <span class="chem">m + d</span>, show that <span class="chem">m = 4</span>. <strong>[2 marks]</strong></p><p>(b) Hence find the three roots and the value of <span class="chem">k</span>. <strong>[4 marks]</strong></p>
      stem: "<p><span class=\"chem\">x^3 - 12x^2 + kx - 28 = 0</span> 的三個根組成一個等差數列。</p><p>(a) 把三個根寫成 <span class=\"chem\">m - d</span>、<span class=\"chem\">m</span> 和 <span class=\"chem\">m + d</span>，證明 (Show that) <span class=\"chem\">m = 4</span>。<strong>[2 marks]</strong></p><p>(b) 由此 (Hence) 求 (Find) 三個根及 <span class=\"chem\">k</span> 的值。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: "roots form an arithmetic sequence" is information about the roots, so use the sum and product of roots, not the Factor Theorem.
        "解碼：「根組成等差數列」是關於根的資料，所以要用根之和與積，而不是因式定理。",
        // EN: The sum of the roots is <span class="chem">-(-12)/1 = 12</span>, and with <span class="chem">m - d, m, m + d</span> the <span class="chem">d</span> terms cancel.
        "根之和為 <span class=\"chem\">-(-12)/1 = 12</span>，而在 <span class=\"chem\">m - d, m, m + d</span> 時 <span class=\"chem\">d</span> 項互相抵消。",
        // EN: The product of the roots is <span class="chem">-(-28)/1 = 28</span>. Then <span class="chem">k</span> is the sum of the roots multiplied in pairs.
        "根之積為 <span class=\"chem\">-(-28)/1 = 28</span>。然後 <span class=\"chem\">k</span> 是根兩兩相乘之積的和。",
      ],
      // EN: <p><strong>Decode.</strong> Information about the pattern of the roots means using the formula-booklet sum and product of roots.</p><p>(a) Sum: <span class="chem">3m = 12</span>, so <span class="chem">m = 4</span>.</p><p>(b) Product: <span class="chem">4(16 - d^2) = 28</span>, so <span class="chem">d^2 = 9</span> and the roots are <span class="chem">1, 4, 7</span> (either sign of <span class="chem">d</span> gives the same set). Then <span class="chem">k = 1(4) + 4(7) + 7(1) = 39</span>. Check: <span class="chem">(x - 1)(x - 4)(x - 7) = x^3 - 12x^2 + 39x - 28</span>.</p>
      solution: "<p><strong>解碼。</strong>關於根的排列規律的資料，意味着要用公式小冊子中的根之和與積。</p><p>(a) 和：<span class=\"chem\">3m = 12</span>，所以 <span class=\"chem\">m = 4</span>。</p><p>(b) 積：<span class=\"chem\">4(16 - d^2) = 28</span>，所以 <span class=\"chem\">d^2 = 9</span>，而根為 <span class=\"chem\">1, 4, 7</span>（<span class=\"chem\">d</span> 取任一正負號都得到同一組根）。然後 <span class=\"chem\">k = 1(4) + 4(7) + 7(1) = 39</span>。驗算：<span class=\"chem\">(x - 1)(x - 4)(x - 7) = x^3 - 12x^2 + 39x - 28</span>。</p>",
      // EN: <p>(a) Sum of roots <span class="chem">3m = 12</span>, so <span class="chem">m = 4</span>. (b) Roots <span class="chem">1, 4, 7</span>; <span class="chem">k = 39</span>.</p>
      answer: "<p>(a) 根之和 <span class=\"chem\">3m = 12</span>，所以 <span class=\"chem\">m = 4</span>。(b) 根 <span class=\"chem\">1, 4, 7</span>；<span class=\"chem\">k = 39</span>。</p>",
      markscheme: [
        // EN: M1: (a) sum of roots <span class="chem">(m - d) + m + (m + d) = 12</span>.
        "M1：(a) 根之和 <span class=\"chem\">(m - d) + m + (m + d) = 12</span>。",
        // EN: A1: (a) <span class="chem">3m = 12</span> (so <span class="chem">m = 4</span>, AG).
        "A1：(a) <span class=\"chem\">3m = 12</span>（所以 <span class=\"chem\">m = 4</span>，AG）。",
        // EN: M1: (b) product of roots <span class="chem">(4 - d)(4)(4 + d) = 28</span>.
        "M1：(b) 根之積 <span class=\"chem\">(4 - d)(4)(4 + d) = 28</span>。",
        // EN: A1: (b) <span class="chem">16 - d^2 = 7</span>, so <span class="chem">d = +-3</span> and the roots are <span class="chem">1, 4, 7</span>.
        "A1：(b) <span class=\"chem\">16 - d^2 = 7</span>，所以 <span class=\"chem\">d = +-3</span>，而根為 <span class=\"chem\">1, 4, 7</span>。",
        // EN: M1: (b) <span class="chem">k</span> = sum of products in pairs: <span class="chem">1(4) + 4(7) + 1(7)</span>.
        "M1：(b) <span class=\"chem\">k</span> = 兩兩相乘之積的和：<span class=\"chem\">1(4) + 4(7) + 1(7)</span>。",
        // EN: A1: (b) <span class="chem">k = 39</span>.
        "A1：(b) <span class=\"chem\">k = 39</span>。",
      ],
    },

    // ── t2-3-q049 · short · exam · AHL · AHL 2.12, 2.15 · 6 marks
    "t2-3-q049": {
      // EN: <p>Let <span class="chem">f(x) = -(x + 2)(x - 1)^2</span>.</p><p>(a) Sketch the graph of <span class="chem">y = f(x)</span>, showing the coordinates of all points where the graph meets the axes. <strong>[4 marks]</strong></p><p>(b) Hence solve <span class="chem">f(x) &gt;= 0</span>. <strong>[2 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = -(x + 2)(x - 1)^2</span>。</p><p>(a) 描繪 <span class=\"chem\">y = f(x)</span> 的圖像的略圖 (Sketch)，並標示圖像與坐標軸所有交點的坐標。<strong>[4 marks]</strong></p><p>(b) 由此 (Hence) 解 <span class=\"chem\">f(x) &gt;= 0</span>。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Expand only the leading term: <span class="chem">-(x)(x^2) = -x^3</span>, so the graph starts high on the left and ends low on the right.
        "只展開首項：<span class=\"chem\">-(x)(x^2) = -x^3</span>，所以圖像在左方由高處開始，在右方於低處結束。",
        // EN: A single factor <span class="chem">(x + 2)</span> means the graph crosses; the squared factor <span class="chem">(x - 1)^2</span> means it touches and turns.
        "單一因式 <span class=\"chem\">(x + 2)</span> 表示圖像穿過軸；平方因式 <span class=\"chem\">(x - 1)^2</span> 表示圖像與軸相切並轉向。",
        // EN: For (b), do not forget the isolated point where <span class="chem">f(x) = 0</span> without the graph going above the axis.
        "在 (b) 中，不要忘記圖像沒有升到軸上方、卻有 <span class=\"chem\">f(x) = 0</span> 的孤立點。",
      ],
      // EN: <p>(a) Leading term <span class="chem">-x^3</span>. Roots: <span class="chem">x = -2</span> (crosses), <span class="chem">x = 1</span> (double root, touches). <span class="chem">f(0) = -(2)(1) = -2</span>. Coming from the top left, the curve crosses at <span class="chem">-2</span>, dips to a minimum below the axis, rises to touch the axis at <span class="chem">(1, 0)</span>, then falls.</p><p>(b) The graph is on or above the axis for <span class="chem">x &lt;= -2</span>, and it touches the axis at <span class="chem">x = 1</span>. So <span class="chem">x &lt;= -2</span> or <span class="chem">x = 1</span>.</p>
      solution: "<p>(a) 首項為 <span class=\"chem\">-x^3</span>。根：<span class=\"chem\">x = -2</span>（穿過）、<span class=\"chem\">x = 1</span>（二重根，相切）。<span class=\"chem\">f(0) = -(2)(1) = -2</span>。曲線由左上方而來，在 <span class=\"chem\">-2</span> 穿過軸，下降到軸下方的極小點，再上升到 <span class=\"chem\">(1, 0)</span> 與軸相切，然後下降。</p><p>(b) 圖像在 <span class=\"chem\">x &lt;= -2</span> 時位於軸上或其上方，並在 <span class=\"chem\">x = 1</span> 與軸相切。所以 <span class=\"chem\">x &lt;= -2</span> 或 <span class=\"chem\">x = 1</span>。</p>",
      // EN: <p>(a) Cubic with negative leading coefficient (rises to the left, falls to the right); crosses the <span class="chem">x</span>-axis at <span class="chem">(-2, 0)</span>, touches it at <span class="chem">(1, 0)</span> (a local maximum), and meets the <span class="chem">y</span>-axis at <span class="chem">(0, -2)</span>. (b) <span class="chem">x &lt;= -2</span> or <span class="chem">x = 1</span>.</p>
      answer: "<p>(a) 首項係數為負的三次函數（左方上升，右方下降）；在 <span class=\"chem\">(-2, 0)</span> 穿過 <span class=\"chem\">x</span> 軸，在 <span class=\"chem\">(1, 0)</span> 與它相切（局部極大點），並在 <span class=\"chem\">(0, -2)</span> 與 <span class=\"chem\">y</span> 軸相交。(b) <span class=\"chem\">x &lt;= -2</span> 或 <span class=\"chem\">x = 1</span>。</p>",
      markscheme: [
        // EN: A1: (a) correct end behaviour: <span class="chem">y -&gt; +∞</span> as <span class="chem">x -&gt; -∞</span> and <span class="chem">y -&gt; -∞</span> as <span class="chem">x -&gt; +∞</span>.
        "A1：(a) 正確的端點行為：當 <span class=\"chem\">x -&gt; -∞</span> 時 <span class=\"chem\">y -&gt; +∞</span>，當 <span class=\"chem\">x -&gt; +∞</span> 時 <span class=\"chem\">y -&gt; -∞</span>。",
        // EN: A1: (a) crosses the axis at <span class="chem">(-2, 0)</span>.
        "A1：(a) 在 <span class=\"chem\">(-2, 0)</span> 穿過軸。",
        // EN: A1: (a) touches the axis at <span class="chem">(1, 0)</span> (repeated root, turning point).
        "A1：(a) 在 <span class=\"chem\">(1, 0)</span> 與軸相切（重根，轉向點）。",
        // EN: A1: (a) <span class="chem">y</span>-intercept <span class="chem">(0, -2)</span>.
        "A1：(a) <span class=\"chem\">y</span> 截距 <span class=\"chem\">(0, -2)</span>。",
        // EN: A1: (b) <span class="chem">x &lt;= -2</span>.
        "A1：(b) <span class=\"chem\">x &lt;= -2</span>。",
        // EN: A1: (b) or <span class="chem">x = 1</span>.
        "A1：(b) 或 <span class=\"chem\">x = 1</span>。",
      ],
    },

    // ── t2-3-q050 · short · exam · AHL · AHL 2.13 · 6 marks
    "t2-3-q050": {
      // EN: <p>Let <span class="chem">f(x) = (x + 1)/(x^2 - x - 6)</span>.</p><p>(a) Write down the equations of the vertical asymptotes and the horizontal asymptote of the graph of <span class="chem">f</span>. <strong>[3 marks]</strong></p><p>(b) Sketch the graph of <span class="chem">y = f(x)</span>, showing its asymptotes and the coordinates of its axis intercepts. <strong>[3 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = (x + 1)/(x^2 - x - 6)</span>。</p><p>(a) 寫出 (Write down) <span class=\"chem\">f</span> 的圖像的垂直漸近線和水平漸近線的方程。<strong>[3 marks]</strong></p><p>(b) 描繪 <span class=\"chem\">y = f(x)</span> 的圖像的略圖 (Sketch)，並標示其漸近線及坐標軸截距的坐標。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Factorise the denominator: <span class="chem">(x - 3)(x + 2)</span>. Check the numerator does not cancel a factor.
        "把分母因式分解：<span class=\"chem\">(x - 3)(x + 2)</span>。檢查分子不會約去任何因式。",
        // EN: Make a sign table of <span class="chem">(x + 1)/((x - 3)(x + 2))</span> on the four intervals cut by <span class="chem">-2, -1, 3</span>.
        "在被 <span class=\"chem\">-2, -1, 3</span> 分成的四個區間上，作 <span class=\"chem\">(x + 1)/((x - 3)(x + 2))</span> 的正負號圖。",
      ],
      // EN: <p>(a) <span class="chem">x^2 - x - 6 = (x - 3)(x + 2)</span>, so the vertical asymptotes are <span class="chem">x = 3</span> and <span class="chem">x = -2</span>. The numerator has lower degree, so <span class="chem">y = 0</span> is the horizontal asymptote.</p><p>(b) <span class="chem">f(-1) = 0</span>, <span class="chem">f(0) = 1/(-6) = -1/6</span>. Sign: negative for <span class="chem">x &lt; -2</span>, positive on <span class="chem">(-2, -1)</span>, negative on <span class="chem">(-1, 3)</span>, positive for <span class="chem">x &gt; 3</span>. This fixes the direction of each branch near the asymptotes.</p>
      solution: "<p>(a) <span class=\"chem\">x^2 - x - 6 = (x - 3)(x + 2)</span>，所以垂直漸近線為 <span class=\"chem\">x = 3</span> 和 <span class=\"chem\">x = -2</span>。分子的次數較低，所以 <span class=\"chem\">y = 0</span> 是水平漸近線。</p><p>(b) <span class=\"chem\">f(-1) = 0</span>，<span class=\"chem\">f(0) = 1/(-6) = -1/6</span>。正負號：<span class=\"chem\">x &lt; -2</span> 時為負，在 <span class=\"chem\">(-2, -1)</span> 上為正，在 <span class=\"chem\">(-1, 3)</span> 上為負，<span class=\"chem\">x &gt; 3</span> 時為正。這確定了每一支在漸近線附近的方向。</p>",
      // EN: <p>(a) <span class="chem">x = 3</span>, <span class="chem">x = -2</span>; <span class="chem">y = 0</span>. (b) Intercepts <span class="chem">(-1, 0)</span> and <span class="chem">(0, -1/6)</span>. Three branches: for <span class="chem">x &lt; -2</span> the curve is below the axis (<span class="chem">-&gt; 0^-</span> on the left, <span class="chem">-&gt; -∞</span> at <span class="chem">x = -2</span>); between the asymptotes it comes down from <span class="chem">+∞</span>, crosses at <span class="chem">(-1, 0)</span> and <span class="chem">(0, -1/6)</span> and goes to <span class="chem">-∞</span> at <span class="chem">x = 3</span>; for <span class="chem">x &gt; 3</span> it comes down from <span class="chem">+∞</span> towards <span class="chem">0^+</span>.</p>
      answer: "<p>(a) <span class=\"chem\">x = 3</span>，<span class=\"chem\">x = -2</span>；<span class=\"chem\">y = 0</span>。(b) 截距 <span class=\"chem\">(-1, 0)</span> 及 <span class=\"chem\">(0, -1/6)</span>。三支：當 <span class=\"chem\">x &lt; -2</span> 時曲線在軸下方（左方 <span class=\"chem\">-&gt; 0^-</span>，在 <span class=\"chem\">x = -2</span> 處 <span class=\"chem\">-&gt; -∞</span>）；在兩條漸近線之間，它由 <span class=\"chem\">+∞</span> 下降，在 <span class=\"chem\">(-1, 0)</span> 及 <span class=\"chem\">(0, -1/6)</span> 穿過軸，並在 <span class=\"chem\">x = 3</span> 處趨向 <span class=\"chem\">-∞</span>；當 <span class=\"chem\">x &gt; 3</span> 時，它由 <span class=\"chem\">+∞</span> 下降，趨向 <span class=\"chem\">0^+</span>。</p>",
      markscheme: [
        // EN: A1: (a) <span class="chem">x = 3</span> and <span class="chem">x = -2</span> (from <span class="chem">x^2 - x - 6 = (x - 3)(x + 2)</span>).
        "A1：(a) <span class=\"chem\">x = 3</span> 及 <span class=\"chem\">x = -2</span>（由 <span class=\"chem\">x^2 - x - 6 = (x - 3)(x + 2)</span>）。",
        // EN: A1: (a) neither vertical asymptote cancels with the numerator (no hole).
        "A1：(a) 兩條垂直漸近線都不會與分子約去（沒有空洞）。",
        // EN: A1: (a) <span class="chem">y = 0</span>, since the degree of the numerator is less than the degree of the denominator.
        "A1：(a) <span class=\"chem\">y = 0</span>，因為分子的次數小於分母的次數。",
        // EN: A1: (b) intercepts <span class="chem">(-1, 0)</span> and <span class="chem">(0, -1/6)</span>.
        "A1：(b) 截距 <span class=\"chem\">(-1, 0)</span> 及 <span class=\"chem\">(0, -1/6)</span>。",
        // EN: A1: (b) outer branches correct: below the axis for <span class="chem">x &lt; -2</span>, above for <span class="chem">x &gt; 3</span>, both approaching <span class="chem">y = 0</span>.
        "A1：(b) 外側兩支正確：<span class=\"chem\">x &lt; -2</span> 時在軸下方，<span class=\"chem\">x &gt; 3</span> 時在軸上方，兩者都趨近 <span class=\"chem\">y = 0</span>。",
        // EN: A1: (b) middle branch from <span class="chem">+∞</span> near <span class="chem">x = -2</span> to <span class="chem">-∞</span> near <span class="chem">x = 3</span>, through both intercepts.
        "A1：(b) 中間一支由 <span class=\"chem\">x = -2</span> 附近的 <span class=\"chem\">+∞</span> 到 <span class=\"chem\">x = 3</span> 附近的 <span class=\"chem\">-∞</span>，經過兩個截距。",
      ],
    },

    // ── t2-3-q051 · short · exam · AHL · AHL 2.14 · 7 marks
    "t2-3-q051": {
      // EN: <p>Let <span class="chem">f(x) = (3x + 5)/(2x - 3)</span>, <span class="chem">x != 3/2</span>.</p><p>(a) Show that <span class="chem">f(f(x)) = x</span>. <strong>[3 marks]</strong></p><p>(b) Hence write down <span class="chem">f^{-1}(x)</span>. <strong>[1 mark]</strong></p><p>(c) Find the exact <span class="chem">x</span>-coordinates of the points where the graph of <span class="chem">y = f(x)</span> meets the line <span class="chem">y = x</span>. <strong>[3 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = (3x + 5)/(2x - 3)</span>，<span class=\"chem\">x != 3/2</span>。</p><p>(a) 證明 (Show that) <span class=\"chem\">f(f(x)) = x</span>。<strong>[3 marks]</strong></p><p>(b) 由此 (Hence) 寫出 (Write down) <span class=\"chem\">f^{-1}(x)</span>。<strong>[1 mark]</strong></p><p>(c) 求 (Find) <span class=\"chem\">y = f(x)</span> 的圖像與直線 <span class=\"chem\">y = x</span> 的交點的 <span class=\"chem\">x</span> 坐標的準確值。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Replace every <span class="chem">x</span> in <span class="chem">f</span> by the whole fraction, then multiply top and bottom by <span class="chem">(2x - 3)</span>.
        "把 <span class=\"chem\">f</span> 中每個 <span class=\"chem\">x</span> 都換成整個分式，然後把分子和分母都乘以 <span class=\"chem\">(2x - 3)</span>。",
        // EN: If <span class="chem">f(f(x)) = x</span>, then applying <span class="chem">f</span> undoes <span class="chem">f</span>: the function is its own inverse.
        "若 <span class=\"chem\">f(f(x)) = x</span>，則施行 <span class=\"chem\">f</span> 會抵消 <span class=\"chem\">f</span>：該函數是它自己的反函數。",
        // EN: For (c), cross-multiply <span class="chem">3x + 5 = x(2x - 3)</span>.
        "在 (c) 中，把 <span class=\"chem\">3x + 5 = x(2x - 3)</span> 交叉相乘。",
      ],
      // EN: <p>(a) Top: <span class="chem">3(3x + 5)/(2x - 3) + 5 = (9x + 15 + 10x - 15)/(2x - 3) = 19x/(2x - 3)</span>. Bottom: <span class="chem">2(3x + 5)/(2x - 3) - 3 = (6x + 10 - 6x + 9)/(2x - 3) = 19/(2x - 3)</span>. So <span class="chem">f(f(x)) = x</span>.</p><p>(b) <span class="chem">f</span> is self-inverse: <span class="chem">f^{-1}(x) = (3x + 5)/(2x - 3)</span>, <span class="chem">x != 3/2</span>. Its graph is symmetric in <span class="chem">y = x</span>.</p><p>(c) <span class="chem">3x + 5 = 2x^2 - 3x => 2x^2 - 6x - 5 = 0 => x = (6 +- sqrt(36 + 40))/4 = (3 +- sqrt(19))/2</span>.</p>
      solution: "<p>(a) 分子：<span class=\"chem\">3(3x + 5)/(2x - 3) + 5 = (9x + 15 + 10x - 15)/(2x - 3) = 19x/(2x - 3)</span>。分母：<span class=\"chem\">2(3x + 5)/(2x - 3) - 3 = (6x + 10 - 6x + 9)/(2x - 3) = 19/(2x - 3)</span>。所以 <span class=\"chem\">f(f(x)) = x</span>。</p><p>(b) <span class=\"chem\">f</span> 是自反函數：<span class=\"chem\">f^{-1}(x) = (3x + 5)/(2x - 3)</span>，<span class=\"chem\">x != 3/2</span>。它的圖像對 <span class=\"chem\">y = x</span> 對稱。</p><p>(c) <span class=\"chem\">3x + 5 = 2x^2 - 3x => 2x^2 - 6x - 5 = 0 => x = (6 +- sqrt(36 + 40))/4 = (3 +- sqrt(19))/2</span>。</p>",
      // EN: <p>(a) <span class="chem">f(f(x)) = (19x/(2x - 3))/(19/(2x - 3)) = x</span>. (b) <span class="chem">f^{-1}(x) = (3x + 5)/(2x - 3)</span>, <span class="chem">x != 3/2</span> (f is self-inverse). (c) <span class="chem">x = (3 +- sqrt(19))/2</span>.</p>
      answer: "<p>(a) <span class=\"chem\">f(f(x)) = (19x/(2x - 3))/(19/(2x - 3)) = x</span>。(b) <span class=\"chem\">f^{-1}(x) = (3x + 5)/(2x - 3)</span>，<span class=\"chem\">x != 3/2</span>（f 是自反函數）。(c) <span class=\"chem\">x = (3 +- sqrt(19))/2</span>。</p>",
      markscheme: [
        // EN: M1: (a) substitutes: <span class="chem">f(f(x)) = (3((3x + 5)/(2x - 3)) + 5)/(2((3x + 5)/(2x - 3)) - 3)</span>.
        "M1：(a) 代入：<span class=\"chem\">f(f(x)) = (3((3x + 5)/(2x - 3)) + 5)/(2((3x + 5)/(2x - 3)) - 3)</span>。",
        // EN: A1: (a) numerator simplifies to <span class="chem">19x/(2x - 3)</span>.
        "A1：(a) 分子化簡為 <span class=\"chem\">19x/(2x - 3)</span>。",
        // EN: A1: (a) denominator simplifies to <span class="chem">19/(2x - 3)</span> (dividing gives <span class="chem">f(f(x)) = x</span>, AG).
        "A1：(a) 分母化簡為 <span class=\"chem\">19/(2x - 3)</span>（相除得 <span class=\"chem\">f(f(x)) = x</span>，AG）。",
        // EN: A1: (b) <span class="chem">f^{-1}(x) = (3x + 5)/(2x - 3)</span>, i.e. <span class="chem">f^{-1} = f</span>.
        "A1：(b) <span class=\"chem\">f^{-1}(x) = (3x + 5)/(2x - 3)</span>，即 <span class=\"chem\">f^{-1} = f</span>。",
        // EN: M1: (c) sets <span class="chem">(3x + 5)/(2x - 3) = x</span>, giving <span class="chem">2x^2 - 6x - 5 = 0</span>.
        "M1：(c) 設 <span class=\"chem\">(3x + 5)/(2x - 3) = x</span>，得 <span class=\"chem\">2x^2 - 6x - 5 = 0</span>。",
        // EN: M1: (c) uses the quadratic formula: <span class="chem">x = (6 +- sqrt(76))/4</span>.
        "M1：(c) 使用二次公式：<span class=\"chem\">x = (6 +- sqrt(76))/4</span>。",
        // EN: A1: (c) <span class="chem">x = (3 +- sqrt(19))/2</span>.
        "A1：(c) <span class=\"chem\">x = (3 +- sqrt(19))/2</span>。",
      ],
    },

    // ── t2-3-q052 · numeric · challenge · AHL · AHL 2.12, 2.14 · 5 marks
    "t2-3-q052": {
      // EN: <p>A polynomial function <span class="chem">p</span> of degree <span class="chem">3</span> is an odd function. Given that <span class="chem">p(1) = -2</span> and <span class="chem">p(2) = 4</span>, find <span class="chem">p(3)</span>.</p>
      stem: "<p>一個 <span class=\"chem\">3</span> 次的多項式函數 <span class=\"chem\">p</span> 是奇函數。已知 <span class=\"chem\">p(1) = -2</span> 及 <span class=\"chem\">p(2) = 4</span>，求 (Find) <span class=\"chem\">p(3)</span>。</p>",
      hints: [
        // EN: Decode: "odd" tells you the form of the polynomial. For <span class="chem">p(-x) = -p(x)</span> to hold, every even power, including the constant term, must have coefficient <span class="chem">0</span>.
        "解碼：「奇函數」告訴你多項式的形式。要 <span class=\"chem\">p(-x) = -p(x)</span> 成立，每個偶數次冪（包括常數項）的係數都必須為 <span class=\"chem\">0</span>。",
        // EN: So <span class="chem">p(x) = ax^3 + bx</span>. Use the two given values to make two equations.
        "所以 <span class=\"chem\">p(x) = ax^3 + bx</span>。用兩個已知值列出兩條方程。",
        // EN: <span class="chem">a + b = -2</span> and <span class="chem">8a + 2b = 4</span>.
        "<span class=\"chem\">a + b = -2</span> 及 <span class=\"chem\">8a + 2b = 4</span>。",
      ],
      // EN: <p><strong>Decode.</strong> An odd polynomial contains only odd powers, so <span class="chem">p(x) = ax^3 + bx</span>.</p><p><span class="chem">p(1) = a + b = -2</span> and <span class="chem">p(2) = 8a + 2b = 4</span>. Subtracting twice the first equation from the second: <span class="chem">6a = 8</span>, so <span class="chem">a = 4/3</span> and <span class="chem">b = -10/3</span>. Then <span class="chem">p(3) = (4/3)(27) - (10/3)(3) = 36 - 10 = 26</span>.</p>
      solution: "<p><strong>解碼。</strong>奇多項式只含奇數次冪，所以 <span class=\"chem\">p(x) = ax^3 + bx</span>。</p><p><span class=\"chem\">p(1) = a + b = -2</span> 及 <span class=\"chem\">p(2) = 8a + 2b = 4</span>。第二式減去第一式的兩倍：<span class=\"chem\">6a = 8</span>，所以 <span class=\"chem\">a = 4/3</span> 及 <span class=\"chem\">b = -10/3</span>。於是 <span class=\"chem\">p(3) = (4/3)(27) - (10/3)(3) = 36 - 10 = 26</span>。</p>",
    },

    // ── t2-3-q053 · short · exam · AHL · AHL 2.15 · 5 marks
    "t2-3-q053": {
      // EN: <p>Solve the inequality <span class="chem">6/(x - 1) &gt;= x - 2</span>.</p>
      stem: "<p>解不等式 <span class=\"chem\">6/(x - 1) &gt;= x - 2</span>。</p>",
      hints: [
        // EN: Do not multiply both sides by <span class="chem">(x - 1)</span>: its sign is unknown. Subtract <span class="chem">x - 2</span> and use a common denominator.
        "不要把兩邊乘以 <span class=\"chem\">(x - 1)</span>：它的正負號未知。減去 <span class=\"chem\">x - 2</span> 並通分。",
        // EN: The numerator <span class="chem">6 - (x^2 - 3x + 2) = -x^2 + 3x + 4 = -(x - 4)(x + 1)</span>.
        "分子 <span class=\"chem\">6 - (x^2 - 3x + 2) = -x^2 + 3x + 4 = -(x - 4)(x + 1)</span>。",
      ],
      // EN: <p><span class="chem">6/(x - 1) - (x - 2) = (6 - x^2 + 3x - 2)/(x - 1) = -(x - 4)(x + 1)/(x - 1)</span>. We need <span class="chem">(x - 4)(x + 1)/(x - 1) &lt;= 0</span>. Sign diagram: negative for <span class="chem">x &lt; -1</span>, positive on <span class="chem">(-1, 1)</span>, negative on <span class="chem">(1, 4)</span>, positive for <span class="chem">x &gt; 4</span>. Including the zeros <span class="chem">-1</span> and <span class="chem">4</span> but not <span class="chem">1</span>: <span class="chem">x &lt;= -1</span> or <span class="chem">1 &lt; x &lt;= 4</span>.</p>
      solution: "<p><span class=\"chem\">6/(x - 1) - (x - 2) = (6 - x^2 + 3x - 2)/(x - 1) = -(x - 4)(x + 1)/(x - 1)</span>。我們需要 <span class=\"chem\">(x - 4)(x + 1)/(x - 1) &lt;= 0</span>。正負號圖：<span class=\"chem\">x &lt; -1</span> 時為負，在 <span class=\"chem\">(-1, 1)</span> 上為正，在 <span class=\"chem\">(1, 4)</span> 上為負，<span class=\"chem\">x &gt; 4</span> 時為正。包括零點 <span class=\"chem\">-1</span> 和 <span class=\"chem\">4</span>，但不包括 <span class=\"chem\">1</span>：<span class=\"chem\">x &lt;= -1</span> 或 <span class=\"chem\">1 &lt; x &lt;= 4</span>。</p>",
      // EN: <p><span class="chem">x &lt;= -1</span> or <span class="chem">1 &lt; x &lt;= 4</span></p>
      answer: "<p><span class=\"chem\">x &lt;= -1</span> 或 <span class=\"chem\">1 &lt; x &lt;= 4</span></p>",
      markscheme: [
        // EN: M1: moves everything to one side and combines: <span class="chem">(6 - (x - 2)(x - 1))/(x - 1) &gt;= 0</span>.
        "M1：把所有項移到一邊並合併：<span class=\"chem\">(6 - (x - 2)(x - 1))/(x - 1) &gt;= 0</span>。",
        // EN: A1: <span class="chem">-(x - 4)(x + 1)/(x - 1) &gt;= 0</span> (or <span class="chem">(x - 4)(x + 1)/(x - 1) &lt;= 0</span>).
        "A1：<span class=\"chem\">-(x - 4)(x + 1)/(x - 1) &gt;= 0</span>（或 <span class=\"chem\">(x - 4)(x + 1)/(x - 1) &lt;= 0</span>）。",
        // EN: M1: sign diagram with critical values <span class="chem">-1, 1, 4</span>.
        "M1：以臨界值 <span class=\"chem\">-1, 1, 4</span> 作正負號圖。",
        // EN: A1: <span class="chem">x &lt;= -1</span>.
        "A1：<span class=\"chem\">x &lt;= -1</span>。",
        // EN: A1: <span class="chem">1 &lt; x &lt;= 4</span> (with <span class="chem">x = 1</span> excluded).
        "A1：<span class=\"chem\">1 &lt; x &lt;= 4</span>（不包括 <span class=\"chem\">x = 1</span>）。",
      ],
    },

    // ── t2-3-q054 · numeric · challenge · AHL · AHL 2.16 · 5 marks
    "t2-3-q054": {
      // EN: <p>Solve the equation <span class="chem">|x^2 - 6| = x</span>, and give the smallest solution.</p>
      stem: "<p>解方程 <span class=\"chem\">|x^2 - 6| = x</span>，並寫出最小的解。</p>",
      hints: [
        // EN: Decode: the left side is never negative, so any solution must satisfy <span class="chem">x &gt;= 0</span>. This hidden condition removes some of the algebraic roots.
        "解碼：左方永不為負，所以任何解都必須滿足 <span class=\"chem\">x &gt;= 0</span>。這個隱藏條件會剔除部分代數根。",
        // EN: Split into <span class="chem">x^2 - 6 = x</span> and <span class="chem">x^2 - 6 = -x</span>, and solve each quadratic.
        "分成 <span class=\"chem\">x^2 - 6 = x</span> 及 <span class=\"chem\">x^2 - 6 = -x</span>，並分別解兩條二次方程。",
        // EN: You should get <span class="chem">x = 3, -2</span> and <span class="chem">x = 2, -3</span>. Check each one in the original equation.
        "你應得到 <span class=\"chem\">x = 3, -2</span> 及 <span class=\"chem\">x = 2, -3</span>。把每個解代回原方程檢查。",
      ],
      // EN: <p><strong>Decode.</strong> <span class="chem">|x^2 - 6| &gt;= 0</span>, so <span class="chem">x &gt;= 0</span>.</p><p><span class="chem">x^2 - x - 6 = 0 => (x - 3)(x + 2) = 0 => x = 3</span> or <span class="chem">x = -2</span>. <span class="chem">x^2 + x - 6 = 0 => (x + 3)(x - 2) = 0 => x = -3</span> or <span class="chem">x = 2</span>. Rejecting the negative values: <span class="chem">x = 2</span> (<span class="chem">|4 - 6| = 2</span>) and <span class="chem">x = 3</span> (<span class="chem">|9 - 6| = 3</span>). The smallest solution is <span class="chem">2</span>; the tempting <span class="chem">-3</span> fails because <span class="chem">|9 - 6| = 3 != -3</span>.</p>
      solution: "<p><strong>解碼。</strong><span class=\"chem\">|x^2 - 6| &gt;= 0</span>，所以 <span class=\"chem\">x &gt;= 0</span>。</p><p><span class=\"chem\">x^2 - x - 6 = 0 => (x - 3)(x + 2) = 0 => x = 3</span> 或 <span class=\"chem\">x = -2</span>。<span class=\"chem\">x^2 + x - 6 = 0 => (x + 3)(x - 2) = 0 => x = -3</span> 或 <span class=\"chem\">x = 2</span>。捨去負值：<span class=\"chem\">x = 2</span>（<span class=\"chem\">|4 - 6| = 2</span>）及 <span class=\"chem\">x = 3</span>（<span class=\"chem\">|9 - 6| = 3</span>）。最小的解為 <span class=\"chem\">2</span>；看似可行的 <span class=\"chem\">-3</span> 不成立，因為 <span class=\"chem\">|9 - 6| = 3 != -3</span>。</p>",
    },

    // ── t2-3-q055 · short · challenge · AHL · AHL 2.16 · 8 marks
    "t2-3-q055": {
      // EN: <p>Let <span class="chem">f(x) = x^2 - 2x - 3</span>.</p><p>(a) Sketch the graph of <span class="chem">y = |f(x)|</span>, showing the coordinates of the axis intercepts and of any local maximum. <strong>[2 marks]</strong></p><p>(b) Find the value of <span class="chem">k</span> for which the equation <span class="chem">|f(x)| = k</span> has exactly three solutions. <strong>[2 marks]</strong></p><p>(c) Sketch the graph of <span class="chem">y = f(|x|)</span>, showing the coordinates of the axis intercepts and of the minimum points. <strong>[2 marks]</strong></p><p>(d) Find the value of <span class="chem">k</span> for which the equation <span class="chem">f(|x|) = k</span> has exactly three solutions. <strong>[2 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = x^2 - 2x - 3</span>。</p><p>(a) 描繪 <span class=\"chem\">y = |f(x)|</span> 的圖像的略圖 (Sketch)，並標示坐標軸截距及任何局部極大點的坐標。<strong>[2 marks]</strong></p><p>(b) 求 (Find) 使方程 <span class=\"chem\">|f(x)| = k</span> 恰好有三個解的 <span class=\"chem\">k</span> 的值。<strong>[2 marks]</strong></p><p>(c) 描繪 <span class=\"chem\">y = f(|x|)</span> 的圖像的略圖，並標示坐標軸截距及極小點的坐標。<strong>[2 marks]</strong></p><p>(d) 求使方程 <span class=\"chem\">f(|x|) = k</span> 恰好有三個解的 <span class=\"chem\">k</span> 的值。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: "exactly three solutions" means a horizontal line <span class="chem">y = k</span> meets the graph three times. Sketch first, then slide a horizontal line up and down.
        "解碼：「恰好有三個解」的意思是水平線 <span class=\"chem\">y = k</span> 與圖像相交三次。先描繪略圖，然後把水平線上下移動。",
        // EN: <span class="chem">f(x) = (x - 3)(x + 1) = (x - 1)^2 - 4</span>: vertex <span class="chem">(1, -4)</span>. <span class="chem">|f|</span> reflects the part below the axis; <span class="chem">f(|x|)</span> keeps the part with <span class="chem">x &gt;= 0</span> and mirrors it.
        "<span class=\"chem\">f(x) = (x - 3)(x + 1) = (x - 1)^2 - 4</span>：頂點 <span class=\"chem\">(1, -4)</span>。<span class=\"chem\">|f|</span> 把軸下方的部分反射上去；<span class=\"chem\">f(|x|)</span> 保留 <span class=\"chem\">x &gt;= 0</span> 的部分並作鏡像反射。",
        // EN: For <span class="chem">y = f(|x|)</span>, an odd number of solutions needs <span class="chem">x = 0</span> to be one of them (the others come in pairs <span class="chem">+-x</span>).
        "對於 <span class=\"chem\">y = f(|x|)</span>，要有奇數個解，<span class=\"chem\">x = 0</span> 必須是其中一個解（其他解以 <span class=\"chem\">+-x</span> 成對出現）。",
      ],
      // EN: <p><strong>Decode.</strong> Counting solutions means counting where a horizontal line meets each graph.</p><p>(a) <span class="chem">f(x) = (x - 3)(x + 1)</span> has vertex <span class="chem">(1, -4)</span>. In <span class="chem">|f|</span> the vertex becomes a local maximum <span class="chem">(1, 4)</span>; <span class="chem">|f(0)| = 3</span>.</p><p>(b) For <span class="chem">0 &lt; k &lt; 4</span> there are four solutions, for <span class="chem">k &gt; 4</span> two. At <span class="chem">k = 4</span> the line touches the maximum: three solutions (<span class="chem">x = 1, 1 +- 2sqrt(2)</span>).</p><p>(c) For <span class="chem">x &gt;= 0</span>, <span class="chem">f(|x|) = f(x)</span>, with minimum <span class="chem">(1, -4)</span> and intercepts <span class="chem">(0, -3)</span>, <span class="chem">(3, 0)</span>; reflect in the <span class="chem">y</span>-axis.</p><p>(d) Solutions come in pairs <span class="chem">+-x</span> unless <span class="chem">x = 0</span> is a solution, so <span class="chem">k = f(0) = -3</span>. Check: <span class="chem">x^2 - 2|x| - 3 = -3</span> gives <span class="chem">|x|(|x| - 2) = 0</span>, so <span class="chem">x = 0, +-2</span>: three solutions.</p>
      solution: "<p><strong>解碼。</strong>數解的個數，就是數水平線與每個圖像的交點。</p><p>(a) <span class=\"chem\">f(x) = (x - 3)(x + 1)</span> 的頂點為 <span class=\"chem\">(1, -4)</span>。在 <span class=\"chem\">|f|</span> 中頂點變為局部極大點 <span class=\"chem\">(1, 4)</span>；<span class=\"chem\">|f(0)| = 3</span>。</p><p>(b) 當 <span class=\"chem\">0 &lt; k &lt; 4</span> 時有四個解，當 <span class=\"chem\">k &gt; 4</span> 時有兩個。當 <span class=\"chem\">k = 4</span> 時直線觸及極大點：三個解（<span class=\"chem\">x = 1, 1 +- 2sqrt(2)</span>）。</p><p>(c) 當 <span class=\"chem\">x &gt;= 0</span> 時，<span class=\"chem\">f(|x|) = f(x)</span>，極小點為 <span class=\"chem\">(1, -4)</span>，截距為 <span class=\"chem\">(0, -3)</span>、<span class=\"chem\">(3, 0)</span>；沿 <span class=\"chem\">y</span> 軸反射。</p><p>(d) 除非 <span class=\"chem\">x = 0</span> 是解，否則解以 <span class=\"chem\">+-x</span> 成對出現，所以 <span class=\"chem\">k = f(0) = -3</span>。驗算：<span class=\"chem\">x^2 - 2|x| - 3 = -3</span> 給出 <span class=\"chem\">|x|(|x| - 2) = 0</span>，所以 <span class=\"chem\">x = 0, +-2</span>：三個解。</p>",
      // EN: <p>(a) W-shape: <span class="chem">x</span>-intercepts <span class="chem">(-1, 0)</span>, <span class="chem">(3, 0)</span> (sharp points), <span class="chem">y</span>-intercept <span class="chem">(0, 3)</span>, local maximum <span class="chem">(1, 4)</span>. (b) <span class="chem">k = 4</span>. (c) Symmetric about the <span class="chem">y</span>-axis: minima <span class="chem">(+-1, -4)</span>, <span class="chem">x</span>-intercepts <span class="chem">(+-3, 0)</span>, <span class="chem">y</span>-intercept <span class="chem">(0, -3)</span> (a local maximum with a sharp point). (d) <span class="chem">k = -3</span>.</p>
      answer: "<p>(a) W 形：<span class=\"chem\">x</span> 截距 <span class=\"chem\">(-1, 0)</span>、<span class=\"chem\">(3, 0)</span>（尖點），<span class=\"chem\">y</span> 截距 <span class=\"chem\">(0, 3)</span>，局部極大點 <span class=\"chem\">(1, 4)</span>。(b) <span class=\"chem\">k = 4</span>。(c) 對 <span class=\"chem\">y</span> 軸對稱：極小點 <span class=\"chem\">(+-1, -4)</span>，<span class=\"chem\">x</span> 截距 <span class=\"chem\">(+-3, 0)</span>，<span class=\"chem\">y</span> 截距 <span class=\"chem\">(0, -3)</span>（帶尖點的局部極大點）。(d) <span class=\"chem\">k = -3</span>。</p>",
      markscheme: [
        // EN: A1: (a) part of the parabola below the axis, between <span class="chem">x = -1</span> and <span class="chem">x = 3</span>, reflected upwards, with sharp points at <span class="chem">(-1, 0)</span> and <span class="chem">(3, 0)</span>.
        "A1：(a) 拋物線在 <span class=\"chem\">x = -1</span> 與 <span class=\"chem\">x = 3</span> 之間位於軸下方的部分向上反射，並在 <span class=\"chem\">(-1, 0)</span> 及 <span class=\"chem\">(3, 0)</span> 有尖點。",
        // EN: A1: (a) local maximum <span class="chem">(1, 4)</span> and <span class="chem">y</span>-intercept <span class="chem">(0, 3)</span>.
        "A1：(a) 局部極大點 <span class=\"chem\">(1, 4)</span> 及 <span class=\"chem\">y</span> 截距 <span class=\"chem\">(0, 3)</span>。",
        // EN: R1: (b) three intersections only when the line passes through the local maximum.
        "R1：(b) 只有當直線經過局部極大點時才有三個交點。",
        // EN: A1: (b) <span class="chem">k = 4</span>.
        "A1：(b) <span class=\"chem\">k = 4</span>。",
        // EN: A1: (c) right half is <span class="chem">y = f(x)</span> for <span class="chem">x &gt;= 0</span>, reflected in the <span class="chem">y</span>-axis.
        "A1：(c) 右半部為 <span class=\"chem\">x &gt;= 0</span> 時的 <span class=\"chem\">y = f(x)</span>，並沿 <span class=\"chem\">y</span> 軸反射。",
        // EN: A1: (c) minima <span class="chem">(+-1, -4)</span>, intercepts <span class="chem">(+-3, 0)</span> and <span class="chem">(0, -3)</span>.
        "A1：(c) 極小點 <span class=\"chem\">(+-1, -4)</span>，截距 <span class=\"chem\">(+-3, 0)</span> 及 <span class=\"chem\">(0, -3)</span>。",
        // EN: R1: (d) three solutions only when the line passes through the point on the <span class="chem">y</span>-axis, <span class="chem">(0, -3)</span>.
        "R1：(d) 只有當直線經過 <span class=\"chem\">y</span> 軸上的點 <span class=\"chem\">(0, -3)</span> 時才有三個解。",
        // EN: A1: (d) <span class="chem">k = -3</span>.
        "A1：(d) <span class=\"chem\">k = -3</span>。",
      ],
    },

    // ── t2-3-q056 · numeric · foundation · AHL · AHL 2.16 · 2 marks
    "t2-3-q056": {
      // EN: <p>The graph of <span class="chem">y = f(x)</span> has a local maximum at <span class="chem">(2, 8)</span>. Find the <span class="chem">x</span>-coordinate of the local maximum of the graph of <span class="chem">y = f(2x + 4)</span>.</p>
      stem: "<p><span class=\"chem\">y = f(x)</span> 的圖像在 <span class=\"chem\">(2, 8)</span> 有局部極大點。求 (Find) <span class=\"chem\">y = f(2x + 4)</span> 的圖像的局部極大點的 <span class=\"chem\">x</span> 坐標。</p>",
      hints: [
        // EN: The new graph reaches the same height <span class="chem">8</span> when the input to <span class="chem">f</span> is <span class="chem">2</span>.
        "當 <span class=\"chem\">f</span> 的輸入為 <span class=\"chem\">2</span> 時，新圖像達到相同的高度 <span class=\"chem\">8</span>。",
        // EN: Solve <span class="chem">2x + 4 = 2</span>.
        "解 <span class=\"chem\">2x + 4 = 2</span>。",
      ],
      // EN: <p>The maximum of <span class="chem">f</span> occurs when its input is <span class="chem">2</span>, so <span class="chem">2x + 4 = 2 => x = -1</span>. The local maximum of <span class="chem">y = f(2x + 4)</span> is at <span class="chem">(-1, 8)</span>. (Equivalently: translate <span class="chem">4</span> left, then stretch horizontally by <span class="chem">1/2</span>: <span class="chem">(2 - 4)/2 = -1</span>.)</p>
      solution: "<p><span class=\"chem\">f</span> 的極大值出現在輸入為 <span class=\"chem\">2</span> 時，所以 <span class=\"chem\">2x + 4 = 2 => x = -1</span>。<span class=\"chem\">y = f(2x + 4)</span> 的局部極大點在 <span class=\"chem\">(-1, 8)</span>。（等價地：向左平移 <span class=\"chem\">4</span>，然後作 <span class=\"chem\">1/2</span> 倍的水平伸縮：<span class=\"chem\">(2 - 4)/2 = -1</span>。）</p>",
    },

    // ── t2-3-q057 · numeric · exam · AHL · AHL 2.13 · 4 marks
    "t2-3-q057": {
      // EN: <p>The graph of <span class="chem">f(x) = (ax^2 + bx + 3)/(x - 1)</span>, <span class="chem">x != 1</span>, has oblique asymptote <span class="chem">y = 2x + 5</span>. Find the value of <span class="chem">b</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = (ax^2 + bx + 3)/(x - 1)</span>，<span class=\"chem\">x != 1</span> 的圖像有斜漸近線 <span class=\"chem\">y = 2x + 5</span>。求 (Find) <span class=\"chem\">b</span> 的值。</p>",
      hints: [
        // EN: Divide <span class="chem">ax^2 + bx + 3</span> by <span class="chem">(x - 1)</span>: the quotient is the oblique asymptote.
        "把 <span class=\"chem\">ax^2 + bx + 3</span> 除以 <span class=\"chem\">(x - 1)</span>：商式就是斜漸近線。",
        // EN: The quotient is <span class="chem">ax + (a + b)</span>. Compare it with <span class="chem">2x + 5</span>.
        "商式為 <span class=\"chem\">ax + (a + b)</span>。把它與 <span class=\"chem\">2x + 5</span> 比較。",
      ],
      // EN: <p><span class="chem">ax^2 + bx + 3 = (x - 1)(ax + a + b) + (a + b + 3)</span>, so the oblique asymptote is <span class="chem">y = ax + (a + b)</span>. Matching with <span class="chem">y = 2x + 5</span>: <span class="chem">a = 2</span> and <span class="chem">a + b = 5</span>, so <span class="chem">b = 3</span>.</p>
      solution: "<p><span class=\"chem\">ax^2 + bx + 3 = (x - 1)(ax + a + b) + (a + b + 3)</span>，所以斜漸近線為 <span class=\"chem\">y = ax + (a + b)</span>。與 <span class=\"chem\">y = 2x + 5</span> 比較：<span class=\"chem\">a = 2</span> 及 <span class=\"chem\">a + b = 5</span>，所以 <span class=\"chem\">b = 3</span>。</p>",
    },

    // ── t2-3-q058 · short · challenge · AHL · AHL 2.12 · 16 marks
    "t2-3-q058": {
      // EN: <p>This investigation looks at sums of powers of the roots of a cubic without finding the roots.</p><p>The equation <span class="chem">x^3 - 4x + 1 = 0</span> has roots <span class="chem">alpha</span>, <span class="chem">beta</span>, <span class="chem">gamma</span>. Let <span class="chem">S_n = alpha^n + beta^n + gamma^n</span>.</p><p>(a) Write down the value of <span class="chem">S_1</span>. <strong>[1 mark]</strong></p><p>(b) Write down the value of <span class="chem">alpha beta + beta gamma + gamma alpha</span>, and hence show that <span class="chem">S_2 = 8</span>. <strong>[3 marks]</strong></p><p>(c) Show that <span class="chem">alpha^{n+3} = 4alpha^{n+1} - alpha^n</span>, and deduce that <span class="chem">S_{n+3} = 4S_{n+1} - S_n</span> for <span class="chem">n &gt;= 0</span>. <strong>[3 marks]</strong></p><p>(d) Find <span class="chem">S_3</span>, <span class="chem">S_4</span> and <span class="chem">S_5</span>. <strong>[3 marks]</strong></p><p>(e) Use your GDC to find the three roots, and verify your value of <span class="chem">S_4</span>. <strong>[2 marks]</strong></p><p>(f) Explain why <span class="chem">S_n</span> is an integer for every positive integer <span class="chem">n</span>. <strong>[2 marks]</strong></p><p>(g) Find the value of <span class="chem">1/alpha + 1/beta + 1/gamma</span>. <strong>[2 marks]</strong></p>
      stem: "<p>本探究在不求出三次方程的根的情況下，研究根的冪之和。</p><p>方程 <span class=\"chem\">x^3 - 4x + 1 = 0</span> 的根為 <span class=\"chem\">alpha</span>、<span class=\"chem\">beta</span>、<span class=\"chem\">gamma</span>。設 <span class=\"chem\">S_n = alpha^n + beta^n + gamma^n</span>。</p><p>(a) 寫出 (Write down) <span class=\"chem\">S_1</span> 的值。<strong>[1 mark]</strong></p><p>(b) 寫出 <span class=\"chem\">alpha beta + beta gamma + gamma alpha</span> 的值，並由此 (hence) 證明 (show that) <span class=\"chem\">S_2 = 8</span>。<strong>[3 marks]</strong></p><p>(c) 證明 <span class=\"chem\">alpha^{n+3} = 4alpha^{n+1} - alpha^n</span>，並推導 (deduce) 出當 <span class=\"chem\">n &gt;= 0</span> 時 <span class=\"chem\">S_{n+3} = 4S_{n+1} - S_n</span>。<strong>[3 marks]</strong></p><p>(d) 求 (Find) <span class=\"chem\">S_3</span>、<span class=\"chem\">S_4</span> 和 <span class=\"chem\">S_5</span>。<strong>[3 marks]</strong></p><p>(e) 利用 GDC 求三個根，並驗證 (Verify) 你所得的 <span class=\"chem\">S_4</span> 的值。<strong>[2 marks]</strong></p><p>(f) 解釋 (Explain) 為何對每個正整數 <span class=\"chem\">n</span>，<span class=\"chem\">S_n</span> 都是整數。<strong>[2 marks]</strong></p><p>(g) 求 <span class=\"chem\">1/alpha + 1/beta + 1/gamma</span> 的值。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: the theme is "use the coefficients, not the roots". Part (a) and (b) are the formula-booklet sum and product of roots; (c) uses the fact that each root satisfies the equation.
        "解碼：主題是「用係數，而不用根」。(a) 和 (b) 是公式小冊子中的根之和與積；(c) 利用每個根都滿足方程這一事實。",
        // EN: For <span class="chem">x^3 + 0x^2 - 4x + 1</span>: sum <span class="chem">= 0</span>, pair sum <span class="chem">= -4</span>, product <span class="chem">= -1</span>.
        "對於 <span class=\"chem\">x^3 + 0x^2 - 4x + 1</span>：和 <span class=\"chem\">= 0</span>，兩兩之積的和 <span class=\"chem\">= -4</span>，積 <span class=\"chem\">= -1</span>。",
        // EN: For (d), you need a starting value <span class="chem">S_0 = alpha^0 + beta^0 + gamma^0 = 3</span>.
        "在 (d) 中，你需要一個起始值 <span class=\"chem\">S_0 = alpha^0 + beta^0 + gamma^0 = 3</span>。",
        // EN: For (g), put the three fractions over the common denominator <span class="chem">alpha beta gamma</span>.
        "在 (g) 中，把三個分式寫成同一分母 <span class=\"chem\">alpha beta gamma</span>。",
      ],
      // EN: <p><strong>Decode.</strong> Every part replaces "find the roots" by "use the coefficients"; the GDC is only a check.</p><p>(a) <span class="chem">S_1 = alpha + beta + gamma = 0</span>. (b) Pair sum <span class="chem">= -4</span>; <span class="chem">S_2 = 0^2 - 2(-4) = 8</span>.</p><p>(c) <span class="chem">alpha^3 - 4alpha + 1 = 0 => alpha^3 = 4alpha - 1 => alpha^{n+3} = 4alpha^{n+1} - alpha^n</span>. Writing the same for <span class="chem">beta</span>, <span class="chem">gamma</span> and adding gives the recurrence.</p><p>(d) With <span class="chem">S_0 = 3</span>: <span class="chem">S_3 = 4(0) - 3 = -3</span>, <span class="chem">S_4 = 4(8) - 0 = 32</span>, <span class="chem">S_5 = 4(-3) - 8 = -20</span>. (Next: <span class="chem">S_6 = 4(32) + 3 = 131</span>.)</p><p>(e) Roots <span class="chem">-2.1149, 0.25410, 1.8608</span>; <span class="chem">(-2.1149)^4 + 0.25410^4 + 1.8608^4 ≈ 20.007 + 0.004 + 11.989 = 32.0</span>.</p><p>(f) The first three values are integers and the recurrence has integer coefficients, so by induction every <span class="chem">S_n</span> is an integer, even though the roots are irrational.</p><p>(g) <span class="chem">alpha beta gamma = -1</span>, so <span class="chem">1/alpha + 1/beta + 1/gamma = (-4)/(-1) = 4</span>.</p>
      solution: "<p><strong>解碼。</strong>每一部分都以「用係數」取代「求根」；GDC 只用作驗算。</p><p>(a) <span class=\"chem\">S_1 = alpha + beta + gamma = 0</span>。(b) 兩兩之積的和 <span class=\"chem\">= -4</span>；<span class=\"chem\">S_2 = 0^2 - 2(-4) = 8</span>。</p><p>(c) <span class=\"chem\">alpha^3 - 4alpha + 1 = 0 => alpha^3 = 4alpha - 1 => alpha^{n+3} = 4alpha^{n+1} - alpha^n</span>。對 <span class=\"chem\">beta</span>、<span class=\"chem\">gamma</span> 寫出同樣的式子並相加，便得到遞推關係。</p><p>(d) 用 <span class=\"chem\">S_0 = 3</span>：<span class=\"chem\">S_3 = 4(0) - 3 = -3</span>、<span class=\"chem\">S_4 = 4(8) - 0 = 32</span>、<span class=\"chem\">S_5 = 4(-3) - 8 = -20</span>。（下一項：<span class=\"chem\">S_6 = 4(32) + 3 = 131</span>。）</p><p>(e) 根 <span class=\"chem\">-2.1149, 0.25410, 1.8608</span>；<span class=\"chem\">(-2.1149)^4 + 0.25410^4 + 1.8608^4 ≈ 20.007 + 0.004 + 11.989 = 32.0</span>。</p><p>(f) 首三個值是整數，而遞推關係的係數都是整數，所以由數學歸納法，每個 <span class=\"chem\">S_n</span> 都是整數，儘管各根都是無理數。</p><p>(g) <span class=\"chem\">alpha beta gamma = -1</span>，所以 <span class=\"chem\">1/alpha + 1/beta + 1/gamma = (-4)/(-1) = 4</span>。</p>",
      // EN: <p>(a) <span class="chem">S_1 = 0</span>. (b) <span class="chem">-4</span>; <span class="chem">S_2 = 0^2 - 2(-4) = 8</span>. (c) <span class="chem">alpha^3 = 4alpha - 1</span>; multiply by <span class="chem">alpha^n</span> and add the three versions. (d) <span class="chem">S_3 = -3</span>, <span class="chem">S_4 = 32</span>, <span class="chem">S_5 = -20</span>. (e) Roots <span class="chem">-2.11, 0.254, 1.86</span>; the sum of fourth powers is <span class="chem">32</span>. (f) <span class="chem">S_0 = 3</span>, <span class="chem">S_1 = 0</span>, <span class="chem">S_2 = 8</span> are integers and the recurrence uses only integer coefficients, so every later term is an integer (by induction). (g) <span class="chem">4</span>.</p>
      answer: "<p>(a) <span class=\"chem\">S_1 = 0</span>。(b) <span class=\"chem\">-4</span>；<span class=\"chem\">S_2 = 0^2 - 2(-4) = 8</span>。(c) <span class=\"chem\">alpha^3 = 4alpha - 1</span>；乘以 <span class=\"chem\">alpha^n</span> 並把三個式子相加。(d) <span class=\"chem\">S_3 = -3</span>、<span class=\"chem\">S_4 = 32</span>、<span class=\"chem\">S_5 = -20</span>。(e) 根 <span class=\"chem\">-2.11, 0.254, 1.86</span>；四次冪之和為 <span class=\"chem\">32</span>。(f) <span class=\"chem\">S_0 = 3</span>、<span class=\"chem\">S_1 = 0</span>、<span class=\"chem\">S_2 = 8</span> 是整數，而遞推關係只用整數係數，所以其後每一項都是整數（數學歸納法）。(g) <span class=\"chem\">4</span>。</p>",
      markscheme: [
        // EN: A1: (a) <span class="chem">S_1 = -0/1 = 0</span>.
        "A1：(a) <span class=\"chem\">S_1 = -0/1 = 0</span>。",
        // EN: A1: (b) <span class="chem">alpha beta + beta gamma + gamma alpha = -4</span>.
        "A1：(b) <span class=\"chem\">alpha beta + beta gamma + gamma alpha = -4</span>。",
        // EN: M1: (b) uses <span class="chem">S_2 = (alpha + beta + gamma)^2 - 2(alpha beta + beta gamma + gamma alpha)</span>.
        "M1：(b) 使用 <span class=\"chem\">S_2 = (alpha + beta + gamma)^2 - 2(alpha beta + beta gamma + gamma alpha)</span>。",
        // EN: A1: (b) correct substitution <span class="chem">S_2 = 0^2 - 2(-4)</span> (<span class="chem">= 8</span>, AG).
        "A1：(b) 正確代入 <span class=\"chem\">S_2 = 0^2 - 2(-4)</span>（<span class=\"chem\">= 8</span>，AG）。",
        // EN: M1: (c) <span class="chem">alpha</span> is a root, so <span class="chem">alpha^3 = 4alpha - 1</span>.
        "M1：(c) <span class=\"chem\">alpha</span> 是根，所以 <span class=\"chem\">alpha^3 = 4alpha - 1</span>。",
        // EN: A1: (c) multiplies by <span class="chem">alpha^n</span>: <span class="chem">alpha^{n+3} = 4alpha^{n+1} - alpha^n</span>.
        "A1：(c) 乘以 <span class=\"chem\">alpha^n</span>：<span class=\"chem\">alpha^{n+3} = 4alpha^{n+1} - alpha^n</span>。",
        // EN: R1: (c) the same holds for <span class="chem">beta</span> and <span class="chem">gamma</span>; adding gives <span class="chem">S_{n+3} = 4S_{n+1} - S_n</span> (AG).
        "R1：(c) 對 <span class=\"chem\">beta</span> 和 <span class=\"chem\">gamma</span> 同樣成立；相加得 <span class=\"chem\">S_{n+3} = 4S_{n+1} - S_n</span>（AG）。",
        // EN: A1: (d) <span class="chem">S_3 = 4S_1 - S_0 = 0 - 3 = -3</span> (using <span class="chem">S_0 = 3</span>).
        "A1：(d) <span class=\"chem\">S_3 = 4S_1 - S_0 = 0 - 3 = -3</span>（使用 <span class=\"chem\">S_0 = 3</span>）。",
        // EN: A1: (d) <span class="chem">S_4 = 4S_2 - S_1 = 32</span>.
        "A1：(d) <span class=\"chem\">S_4 = 4S_2 - S_1 = 32</span>。",
        // EN: A1: (d) <span class="chem">S_5 = 4S_3 - S_2 = -12 - 8 = -20</span>.
        "A1：(d) <span class=\"chem\">S_5 = 4S_3 - S_2 = -12 - 8 = -20</span>。",
        // EN: A1: (e) roots <span class="chem">-2.11, 0.254, 1.86</span>.
        "A1：(e) 根 <span class=\"chem\">-2.11, 0.254, 1.86</span>。",
        // EN: A1: (e) sum of fourth powers of the stored roots <span class="chem">= 32</span>.
        "A1：(e) 儲存的根的四次冪之和 <span class=\"chem\">= 32</span>。",
        // EN: R1: (f) <span class="chem">S_0, S_1, S_2</span> are integers.
        "R1：(f) <span class=\"chem\">S_0, S_1, S_2</span> 是整數。",
        // EN: R1: (f) each later term is an integer combination of earlier terms, so all are integers (induction).
        "R1：(f) 其後每一項都是前面各項的整數組合，所以全部都是整數（數學歸納法）。",
        // EN: M1: (g) <span class="chem">(alpha beta + beta gamma + gamma alpha)/(alpha beta gamma)</span> with <span class="chem">alpha beta gamma = -1</span>.
        "M1：(g) <span class=\"chem\">(alpha beta + beta gamma + gamma alpha)/(alpha beta gamma)</span>，其中 <span class=\"chem\">alpha beta gamma = -1</span>。",
        // EN: A1: (g) <span class="chem">(-4)/(-1) = 4</span>.
        "A1：(g) <span class=\"chem\">(-4)/(-1) = 4</span>。",
      ],
    },

    // ── t2-3-q059 · short · challenge · AHL · AHL 2.16 · 16 marks
    "t2-3-q059": {
      // EN: <p>This investigation looks at the reciprocal graphs of the family <span class="chem">f_c(x) = x^2 - 2x + c</span>, where <span class="chem">c</span> is a real constant.</p><p>(a) For <span class="chem">c = -3</span>, <span class="chem">c = 1</span> and <span class="chem">c = 5</span>, write down the number of vertical asymptotes of the graph of <span class="chem">y = 1/f_c(x)</span>. <strong>[3 marks]</strong></p><p>(b) Write <span class="chem">f_c(x)</span> in the form <span class="chem">(x - 1)^2 + q</span>, and hence state the condition on <span class="chem">c</span> for <span class="chem">y = 1/f_c(x)</span> to have exactly two vertical asymptotes. <strong>[2 marks]</strong></p><p>(c) For <span class="chem">c &gt; 1</span>, show that the graph of <span class="chem">y = 1/f_c(x)</span> has a maximum point at <span class="chem">(1, 1/(c - 1))</span>. <strong>[2 marks]</strong></p><p>The graphs of <span class="chem">y = f_c(x)</span> and <span class="chem">y = 1/f_c(x)</span> meet at <em>invariant points</em>, where <span class="chem">f_c(x) = 1</span> or <span class="chem">f_c(x) = -1</span>.</p><p>(d) Find the number of invariant points when <span class="chem">c = -3</span> and when <span class="chem">c = 1.5</span>. <strong>[3 marks]</strong></p><p>(e) Determine the number of invariant points for every value of <span class="chem">c</span>. <strong>[4 marks]</strong></p><p>(f) Find the value of <span class="chem">c</span> for which the maximum point in (c) is itself an invariant point, and check that this agrees with (e). <strong>[2 marks]</strong></p>
      stem: "<p>本探究研究函數族 <span class=\"chem\">f_c(x) = x^2 - 2x + c</span> 的倒數圖像，其中 <span class=\"chem\">c</span> 是實常數。</p><p>(a) 當 <span class=\"chem\">c = -3</span>、<span class=\"chem\">c = 1</span> 和 <span class=\"chem\">c = 5</span> 時，寫出 (Write down) <span class=\"chem\">y = 1/f_c(x)</span> 的圖像的垂直漸近線數目。<strong>[3 marks]</strong></p><p>(b) 把 <span class=\"chem\">f_c(x)</span> 寫成 <span class=\"chem\">(x - 1)^2 + q</span> 的形式，並由此 (hence) 寫出 (state) 使 <span class=\"chem\">y = 1/f_c(x)</span> 恰好有兩條垂直漸近線的 <span class=\"chem\">c</span> 的條件。<strong>[2 marks]</strong></p><p>(c) 當 <span class=\"chem\">c &gt; 1</span> 時，證明 (Show that) <span class=\"chem\">y = 1/f_c(x)</span> 的圖像在 <span class=\"chem\">(1, 1/(c - 1))</span> 有極大點。<strong>[2 marks]</strong></p><p><span class=\"chem\">y = f_c(x)</span> 與 <span class=\"chem\">y = 1/f_c(x)</span> 的圖像相交於<em>不變點</em>，在不變點處 <span class=\"chem\">f_c(x) = 1</span> 或 <span class=\"chem\">f_c(x) = -1</span>。</p><p>(d) 求 (Find) 當 <span class=\"chem\">c = -3</span> 及當 <span class=\"chem\">c = 1.5</span> 時不變點的數目。<strong>[3 marks]</strong></p><p>(e) 對 <span class=\"chem\">c</span> 的每一個值，判斷 (Determine) 不變點的數目。<strong>[4 marks]</strong></p><p>(f) 求使 (c) 中的極大點本身是不變點的 <span class=\"chem\">c</span> 的值，並檢查這與 (e) 一致。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: vertical asymptotes of <span class="chem">1/f</span> are the zeros of <span class="chem">f</span>; invariant points are where <span class="chem">f = +-1</span>. Each question is really "how many real roots does a quadratic have?"
        "解碼：<span class=\"chem\">1/f</span> 的垂直漸近線就是 <span class=\"chem\">f</span> 的零點；不變點就是 <span class=\"chem\">f = +-1</span> 的點。每一問其實都是「一條二次方程有多少個實根？」",
        // EN: Completing the square, <span class="chem">f_c(x) = (x - 1)^2 + (c - 1)</span>, so <span class="chem">f_c = k</span> becomes <span class="chem">(x - 1)^2 = k - c + 1</span>.
        "配方得 <span class=\"chem\">f_c(x) = (x - 1)^2 + (c - 1)</span>，所以 <span class=\"chem\">f_c = k</span> 變為 <span class=\"chem\">(x - 1)^2 = k - c + 1</span>。",
        // EN: <span class="chem">(x - 1)^2 = r</span> has 2 roots if <span class="chem">r &gt; 0</span>, 1 if <span class="chem">r = 0</span> and none if <span class="chem">r &lt; 0</span>. Use <span class="chem">k = 1</span> and <span class="chem">k = -1</span> separately.
        "<span class=\"chem\">(x - 1)^2 = r</span> 在 <span class=\"chem\">r &gt; 0</span> 時有 2 個根，在 <span class=\"chem\">r = 0</span> 時有 1 個，在 <span class=\"chem\">r &lt; 0</span> 時沒有根。分別使用 <span class=\"chem\">k = 1</span> 和 <span class=\"chem\">k = -1</span>。",
        // EN: Use your GDC to graph <span class="chem">f_c</span> and <span class="chem">1/f_c</span> for a few values of <span class="chem">c</span> to check your counts.
        "用 GDC 就幾個 <span class=\"chem\">c</span> 值繪出 <span class=\"chem\">f_c</span> 與 <span class=\"chem\">1/f_c</span> 的圖像，以檢查你數出的數目。",
      ],
      // EN: <p><strong>Decode.</strong> Every part reduces to counting the real roots of <span class="chem">(x - 1)^2 = r</span>.</p><p>(a) <span class="chem">c = -3</span>: zeros <span class="chem">3, -1</span> (2 asymptotes). <span class="chem">c = 1</span>: double zero at <span class="chem">1</span> (1 asymptote). <span class="chem">c = 5</span>: <span class="chem">(x - 1)^2 + 4 &gt; 0</span> (none).</p><p>(b) <span class="chem">f_c(x) = (x - 1)^2 + c - 1</span>; two zeros iff <span class="chem">c &lt; 1</span>.</p><p>(c) For <span class="chem">c &gt; 1</span>, <span class="chem">f_c &gt;= c - 1 &gt; 0</span> with equality at <span class="chem">x = 1</span>, so <span class="chem">1/f_c &lt;= 1/(c - 1)</span> with equality at <span class="chem">x = 1</span>.</p><p>(d), (e) <span class="chem">f_c = 1 &lt;=&gt; (x - 1)^2 = 2 - c</span>; <span class="chem">f_c = -1 &lt;=&gt; (x - 1)^2 = -c</span>. For <span class="chem">c = -3</span>: <span class="chem">5 &gt; 0</span> and <span class="chem">3 &gt; 0</span>, so 4 points. For <span class="chem">c = 1.5</span>: <span class="chem">0.5 &gt; 0</span> and <span class="chem">-1.5 &lt; 0</span>, so 2 points. In general: <span class="chem">c &lt; 0</span>: 4; <span class="chem">c = 0</span>: 2 + 1 = 3; <span class="chem">0 &lt; c &lt; 2</span>: 2; <span class="chem">c = 2</span>: 1; <span class="chem">c &gt; 2</span>: 0.</p><p>(f) <span class="chem">1/(c - 1) = 1 => c = 2</span>. Then <span class="chem">f_2(x) = (x - 1)^2 + 1</span> meets <span class="chem">y = 1</span> only at <span class="chem">(1, 1)</span>, matching the count of 1 in (e).</p>
      solution: "<p><strong>解碼。</strong>每一部分都歸結為數出 <span class=\"chem\">(x - 1)^2 = r</span> 的實根數目。</p><p>(a) <span class=\"chem\">c = -3</span>：零點 <span class=\"chem\">3, -1</span>（2 條漸近線）。<span class=\"chem\">c = 1</span>：在 <span class=\"chem\">1</span> 有二重零點（1 條漸近線）。<span class=\"chem\">c = 5</span>：<span class=\"chem\">(x - 1)^2 + 4 &gt; 0</span>（沒有）。</p><p>(b) <span class=\"chem\">f_c(x) = (x - 1)^2 + c - 1</span>；有兩個零點當且僅當 <span class=\"chem\">c &lt; 1</span>。</p><p>(c) 當 <span class=\"chem\">c &gt; 1</span> 時，<span class=\"chem\">f_c &gt;= c - 1 &gt; 0</span>，等號在 <span class=\"chem\">x = 1</span> 成立，所以 <span class=\"chem\">1/f_c &lt;= 1/(c - 1)</span>，等號在 <span class=\"chem\">x = 1</span> 成立。</p><p>(d)、(e) <span class=\"chem\">f_c = 1 &lt;=&gt; (x - 1)^2 = 2 - c</span>；<span class=\"chem\">f_c = -1 &lt;=&gt; (x - 1)^2 = -c</span>。當 <span class=\"chem\">c = -3</span> 時：<span class=\"chem\">5 &gt; 0</span> 及 <span class=\"chem\">3 &gt; 0</span>，所以有 4 個點。當 <span class=\"chem\">c = 1.5</span> 時：<span class=\"chem\">0.5 &gt; 0</span> 及 <span class=\"chem\">-1.5 &lt; 0</span>，所以有 2 個點。一般而言：<span class=\"chem\">c &lt; 0</span>：4；<span class=\"chem\">c = 0</span>：2 + 1 = 3；<span class=\"chem\">0 &lt; c &lt; 2</span>：2；<span class=\"chem\">c = 2</span>：1；<span class=\"chem\">c &gt; 2</span>：0。</p><p>(f) <span class=\"chem\">1/(c - 1) = 1 => c = 2</span>。這時 <span class=\"chem\">f_2(x) = (x - 1)^2 + 1</span> 與 <span class=\"chem\">y = 1</span> 只在 <span class=\"chem\">(1, 1)</span> 相交，與 (e) 中 1 個的結果相符。</p>",
      // EN: <p>(a) <span class="chem">2</span>, <span class="chem">1</span>, <span class="chem">0</span>. (b) <span class="chem">(x - 1)^2 + c - 1</span>; two asymptotes when <span class="chem">c &lt; 1</span>. (c) For <span class="chem">c &gt; 1</span>, <span class="chem">f_c</span> has positive minimum <span class="chem">c - 1</span> at <span class="chem">x = 1</span>, so <span class="chem">1/f_c</span> has maximum <span class="chem">1/(c - 1)</span> there. (d) <span class="chem">c = -3</span>: <span class="chem">4</span>; <span class="chem">c = 1.5</span>: <span class="chem">2</span>. (e) <span class="chem">c &lt; 0</span>: 4; <span class="chem">c = 0</span>: 3; <span class="chem">0 &lt; c &lt; 2</span>: 2; <span class="chem">c = 2</span>: 1; <span class="chem">c &gt; 2</span>: 0. (f) <span class="chem">c = 2</span>, which gives exactly one invariant point <span class="chem">(1, 1)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">2</span>，<span class=\"chem\">1</span>，<span class=\"chem\">0</span>。(b) <span class=\"chem\">(x - 1)^2 + c - 1</span>；當 <span class=\"chem\">c &lt; 1</span> 時有兩條漸近線。(c) 當 <span class=\"chem\">c &gt; 1</span> 時，<span class=\"chem\">f_c</span> 在 <span class=\"chem\">x = 1</span> 有正的極小值 <span class=\"chem\">c - 1</span>，所以 <span class=\"chem\">1/f_c</span> 在該處有極大值 <span class=\"chem\">1/(c - 1)</span>。(d) <span class=\"chem\">c = -3</span>：<span class=\"chem\">4</span>；<span class=\"chem\">c = 1.5</span>：<span class=\"chem\">2</span>。(e) <span class=\"chem\">c &lt; 0</span>：4；<span class=\"chem\">c = 0</span>：3；<span class=\"chem\">0 &lt; c &lt; 2</span>：2；<span class=\"chem\">c = 2</span>：1；<span class=\"chem\">c &gt; 2</span>：0。(f) <span class=\"chem\">c = 2</span>，此時恰好有一個不變點 <span class=\"chem\">(1, 1)</span>。</p>",
      markscheme: [
        // EN: A1: (a) <span class="chem">c = -3</span>: <span class="chem">f = (x - 3)(x + 1)</span>, two asymptotes.
        "A1：(a) <span class=\"chem\">c = -3</span>：<span class=\"chem\">f = (x - 3)(x + 1)</span>，兩條漸近線。",
        // EN: A1: (a) <span class="chem">c = 1</span>: <span class="chem">f = (x - 1)^2</span>, one asymptote.
        "A1：(a) <span class=\"chem\">c = 1</span>：<span class=\"chem\">f = (x - 1)^2</span>，一條漸近線。",
        // EN: A1: (a) <span class="chem">c = 5</span>: <span class="chem">f &gt; 0</span> for all <span class="chem">x</span>, no asymptotes.
        "A1：(a) <span class=\"chem\">c = 5</span>：對所有 <span class=\"chem\">x</span> 都有 <span class=\"chem\">f &gt; 0</span>，沒有漸近線。",
        // EN: A1: (b) <span class="chem">f_c(x) = (x - 1)^2 + c - 1</span>.
        "A1：(b) <span class=\"chem\">f_c(x) = (x - 1)^2 + c - 1</span>。",
        // EN: A1: (b) two asymptotes when <span class="chem">c - 1 &lt; 0</span>, i.e. <span class="chem">c &lt; 1</span>.
        "A1：(b) 當 <span class=\"chem\">c - 1 &lt; 0</span>，即 <span class=\"chem\">c &lt; 1</span> 時，有兩條漸近線。",
        // EN: M1: (c) <span class="chem">f_c</span> has minimum value <span class="chem">c - 1 &gt; 0</span> at <span class="chem">x = 1</span>.
        "M1：(c) <span class=\"chem\">f_c</span> 在 <span class=\"chem\">x = 1</span> 有極小值 <span class=\"chem\">c - 1 &gt; 0</span>。",
        // EN: R1: (c) the reciprocal of a positive minimum is a maximum, giving <span class="chem">(1, 1/(c - 1))</span> (AG).
        "R1：(c) 正的極小值的倒數是極大值，得 <span class=\"chem\">(1, 1/(c - 1))</span>（AG）。",
        // EN: M1: (d) solves <span class="chem">(x - 1)^2 = 2 - c</span> and <span class="chem">(x - 1)^2 = -c</span>.
        "M1：(d) 解 <span class=\"chem\">(x - 1)^2 = 2 - c</span> 及 <span class=\"chem\">(x - 1)^2 = -c</span>。",
        // EN: A1: (d) <span class="chem">c = -3</span>: <span class="chem">2 + 2 = 4</span> points.
        "A1：(d) <span class=\"chem\">c = -3</span>：<span class=\"chem\">2 + 2 = 4</span> 個點。",
        // EN: A1: (d) <span class="chem">c = 1.5</span>: <span class="chem">2 + 0 = 2</span> points.
        "A1：(d) <span class=\"chem\">c = 1.5</span>：<span class=\"chem\">2 + 0 = 2</span> 個點。",
        // EN: M1: (e) counts the roots of <span class="chem">(x - 1)^2 = 2 - c</span> (2, 1, 0 as <span class="chem">c &lt; 2</span>, <span class="chem">= 2</span>, <span class="chem">&gt; 2</span>) and of <span class="chem">(x - 1)^2 = -c</span> (2, 1, 0 as <span class="chem">c &lt; 0</span>, <span class="chem">= 0</span>, <span class="chem">&gt; 0</span>).
        "M1：(e) 數出 <span class=\"chem\">(x - 1)^2 = 2 - c</span> 的根數（當 <span class=\"chem\">c &lt; 2</span>、<span class=\"chem\">= 2</span>、<span class=\"chem\">&gt; 2</span> 時分別為 2、1、0）及 <span class=\"chem\">(x - 1)^2 = -c</span> 的根數（當 <span class=\"chem\">c &lt; 0</span>、<span class=\"chem\">= 0</span>、<span class=\"chem\">&gt; 0</span> 時分別為 2、1、0）。",
        // EN: A1: (e) <span class="chem">c &lt; 0</span>: 4 and <span class="chem">c = 0</span>: 3.
        "A1：(e) <span class=\"chem\">c &lt; 0</span>：4 及 <span class=\"chem\">c = 0</span>：3。",
        // EN: A1: (e) <span class="chem">0 &lt; c &lt; 2</span>: 2.
        "A1：(e) <span class=\"chem\">0 &lt; c &lt; 2</span>：2。",
        // EN: A1: (e) <span class="chem">c = 2</span>: 1 and <span class="chem">c &gt; 2</span>: 0.
        "A1：(e) <span class=\"chem\">c = 2</span>：1 及 <span class=\"chem\">c &gt; 2</span>：0。",
        // EN: A1: (f) <span class="chem">1/(c - 1) = 1 => c = 2</span>.
        "A1：(f) <span class=\"chem\">1/(c - 1) = 1 => c = 2</span>。",
        // EN: R1: (f) consistent with (e): at <span class="chem">c = 2</span> there is exactly one invariant point, <span class="chem">(1, 1)</span>.
        "R1：(f) 與 (e) 一致：當 <span class=\"chem\">c = 2</span> 時恰好有一個不變點 <span class=\"chem\">(1, 1)</span>。",
      ],
    },

    // ── t2-3-q060 · short · challenge · AHL · AHL 2.13, 2.14 · 15 marks
    "t2-3-q060": {
      // EN: <p>This investigation shows that functions can be split into an even part and an odd part.</p><p>For a function <span class="chem">f</span> defined for all <span class="chem">x</span> in a domain that is symmetric about <span class="chem">0</span>, define <span class="chem">E(x) = (f(x) + f(-x))/2</span> and <span class="chem">O(x) = (f(x) - f(-x))/2</span>.</p><p>(a) For <span class="chem">f(x) = x^3 + 2x^2 - 5x + 4</span>, find <span class="chem">E(x)</span> and <span class="chem">O(x)</span>. <strong>[2 marks]</strong></p><p>(b) Show that, for any such <span class="chem">f</span>, <span class="chem">E</span> is even, <span class="chem">O</span> is odd and <span class="chem">f = E + O</span>. <strong>[3 marks]</strong></p><p>(c) Suppose that <span class="chem">f = E_1 + O_1 = E_2 + O_2</span>, where <span class="chem">E_1, E_2</span> are even and <span class="chem">O_1, O_2</span> are odd. Prove that <span class="chem">E_1 = E_2</span> and <span class="chem">O_1 = O_2</span>. <strong>[3 marks]</strong></p><p>(d) For <span class="chem">f(x) = e^x</span>, write down <span class="chem">O(x)</span>, and use your GDC to solve <span class="chem">O(x) = 2</span>. <strong>[3 marks]</strong></p><p>(e) For <span class="chem">f(x) = 1/(x - 2)</span>, explain why <span class="chem">E</span> and <span class="chem">O</span> can only be defined for <span class="chem">x != +-2</span>, and find <span class="chem">E(x)</span> and <span class="chem">O(x)</span> as single fractions. <strong>[4 marks]</strong></p>
      stem: "<p>本探究說明函數可以分拆為偶部分和奇部分。</p><p>對於一個在對 <span class=\"chem\">0</span> 對稱的定義域內、對所有 <span class=\"chem\">x</span> 都有定義的函數 <span class=\"chem\">f</span>，定義 <span class=\"chem\">E(x) = (f(x) + f(-x))/2</span> 及 <span class=\"chem\">O(x) = (f(x) - f(-x))/2</span>。</p><p>(a) 當 <span class=\"chem\">f(x) = x^3 + 2x^2 - 5x + 4</span> 時，求 (Find) <span class=\"chem\">E(x)</span> 和 <span class=\"chem\">O(x)</span>。<strong>[2 marks]</strong></p><p>(b) 證明 (Show that) 對任何這樣的 <span class=\"chem\">f</span>，<span class=\"chem\">E</span> 是偶函數，<span class=\"chem\">O</span> 是奇函數，而且 <span class=\"chem\">f = E + O</span>。<strong>[3 marks]</strong></p><p>(c) 假設 <span class=\"chem\">f = E_1 + O_1 = E_2 + O_2</span>，其中 <span class=\"chem\">E_1, E_2</span> 是偶函數，<span class=\"chem\">O_1, O_2</span> 是奇函數。證明 (Prove) <span class=\"chem\">E_1 = E_2</span> 及 <span class=\"chem\">O_1 = O_2</span>。<strong>[3 marks]</strong></p><p>(d) 當 <span class=\"chem\">f(x) = e^x</span> 時，寫出 (Write down) <span class=\"chem\">O(x)</span>，並利用 GDC 解 <span class=\"chem\">O(x) = 2</span>。<strong>[3 marks]</strong></p><p>(e) 當 <span class=\"chem\">f(x) = 1/(x - 2)</span> 時，解釋 (Explain) 為何 <span class=\"chem\">E</span> 和 <span class=\"chem\">O</span> 只能在 <span class=\"chem\">x != +-2</span> 時定義，並把 <span class=\"chem\">E(x)</span> 和 <span class=\"chem\">O(x)</span> 各寫成單一分式。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: this is the odd/even test <span class="chem">f(-x) = +-f(x)</span> used as a tool. In each part, replace <span class="chem">x</span> by <span class="chem">-x</span> and simplify.
        "解碼：這是把奇偶測試 <span class=\"chem\">f(-x) = +-f(x)</span> 當作工具使用。在每一部分中，把 <span class=\"chem\">x</span> 換成 <span class=\"chem\">-x</span> 並化簡。",
        // EN: For a polynomial, <span class="chem">E</span> keeps the even powers (and the constant) and <span class="chem">O</span> keeps the odd powers.
        "對於多項式，<span class=\"chem\">E</span> 保留偶數次冪（及常數項），<span class=\"chem\">O</span> 保留奇數次冪。",
        // EN: In (c), a function that is both even and odd satisfies <span class="chem">g(x) = -g(x)</span>.
        "在 (c) 中，一個既是偶函數又是奇函數的函數滿足 <span class=\"chem\">g(x) = -g(x)</span>。",
        // EN: In (e), <span class="chem">1/(x - 2) - 1/(x + 2) = 4/(x^2 - 4)</span> and <span class="chem">1/(x - 2) + 1/(x + 2) = 2x/(x^2 - 4)</span>.
        "在 (e) 中，<span class=\"chem\">1/(x - 2) - 1/(x + 2) = 4/(x^2 - 4)</span> 及 <span class=\"chem\">1/(x - 2) + 1/(x + 2) = 2x/(x^2 - 4)</span>。",
      ],
      // EN: <p><strong>Decode.</strong> Everything follows from substituting <span class="chem">-x</span> and comparing with the definitions of even and odd.</p><p>(a) <span class="chem">f(-x) = -x^3 + 2x^2 + 5x + 4</span>, so <span class="chem">E = 2x^2 + 4</span>, <span class="chem">O = x^3 - 5x</span>.</p><p>(b) Swapping <span class="chem">x</span> and <span class="chem">-x</span> leaves <span class="chem">E</span> unchanged and changes the sign of <span class="chem">O</span>; adding gives <span class="chem">f</span>.</p><p>(c) <span class="chem">g = E_1 - E_2 = O_2 - O_1</span> is even (difference of even functions) and odd (difference of odd functions). So <span class="chem">g(x) = g(-x) = -g(x)</span>, hence <span class="chem">g(x) = 0</span> for all <span class="chem">x</span>: the split is unique.</p><p>(d) <span class="chem">O(x) = (e^x - e^{-x})/2</span>. The GDC gives <span class="chem">x ≈ 1.44</span> (exactly <span class="chem">ln(2 + sqrt(5))</span>).</p><p>(e) Because <span class="chem">E</span> and <span class="chem">O</span> use both <span class="chem">f(x)</span> and <span class="chem">f(-x)</span>, we need <span class="chem">x != 2</span> and <span class="chem">-x != 2</span>. With <span class="chem">f(-x) = -1/(x + 2)</span>: <span class="chem">E = (1/2)(4/(x^2 - 4)) = 2/(x^2 - 4)</span> (even) and <span class="chem">O = (1/2)(2x/(x^2 - 4)) = x/(x^2 - 4)</span> (odd).</p>
      solution: "<p><strong>解碼。</strong>一切都由代入 <span class=\"chem\">-x</span> 並與偶函數和奇函數的定義比較而得。</p><p>(a) <span class=\"chem\">f(-x) = -x^3 + 2x^2 + 5x + 4</span>，所以 <span class=\"chem\">E = 2x^2 + 4</span>，<span class=\"chem\">O = x^3 - 5x</span>。</p><p>(b) 互換 <span class=\"chem\">x</span> 與 <span class=\"chem\">-x</span> 時，<span class=\"chem\">E</span> 不變，而 <span class=\"chem\">O</span> 改變正負號；相加得 <span class=\"chem\">f</span>。</p><p>(c) <span class=\"chem\">g = E_1 - E_2 = O_2 - O_1</span> 是偶函數（偶函數之差），也是奇函數（奇函數之差）。所以 <span class=\"chem\">g(x) = g(-x) = -g(x)</span>，因此對所有 <span class=\"chem\">x</span> 都有 <span class=\"chem\">g(x) = 0</span>：分拆是唯一的。</p><p>(d) <span class=\"chem\">O(x) = (e^x - e^{-x})/2</span>。GDC 給出 <span class=\"chem\">x ≈ 1.44</span>（準確值為 <span class=\"chem\">ln(2 + sqrt(5))</span>）。</p><p>(e) 由於 <span class=\"chem\">E</span> 和 <span class=\"chem\">O</span> 同時用到 <span class=\"chem\">f(x)</span> 和 <span class=\"chem\">f(-x)</span>，我們需要 <span class=\"chem\">x != 2</span> 及 <span class=\"chem\">-x != 2</span>。用 <span class=\"chem\">f(-x) = -1/(x + 2)</span>：<span class=\"chem\">E = (1/2)(4/(x^2 - 4)) = 2/(x^2 - 4)</span>（偶）及 <span class=\"chem\">O = (1/2)(2x/(x^2 - 4)) = x/(x^2 - 4)</span>（奇）。</p>",
      // EN: <p>(a) <span class="chem">E(x) = 2x^2 + 4</span>, <span class="chem">O(x) = x^3 - 5x</span>. (b) <span class="chem">E(-x) = (f(-x) + f(x))/2 = E(x)</span>; <span class="chem">O(-x) = (f(-x) - f(x))/2 = -O(x)</span>; <span class="chem">E + O = f</span>. (c) <span class="chem">E_1 - E_2 = O_2 - O_1 = g</span> is both even and odd, so <span class="chem">g(x) = g(-x) = -g(x)</span>, giving <span class="chem">g = 0</span>. (d) <span class="chem">O(x) = (e^x - e^{-x})/2</span>; <span class="chem">x ≈ 1.44</span>. (e) The domain must be symmetric: <span class="chem">f(-x)</span> needs <span class="chem">x != -2</span>. <span class="chem">E(x) = 2/(x^2 - 4)</span>, <span class="chem">O(x) = x/(x^2 - 4)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">E(x) = 2x^2 + 4</span>，<span class=\"chem\">O(x) = x^3 - 5x</span>。(b) <span class=\"chem\">E(-x) = (f(-x) + f(x))/2 = E(x)</span>；<span class=\"chem\">O(-x) = (f(-x) - f(x))/2 = -O(x)</span>；<span class=\"chem\">E + O = f</span>。(c) <span class=\"chem\">E_1 - E_2 = O_2 - O_1 = g</span> 既是偶函數又是奇函數，所以 <span class=\"chem\">g(x) = g(-x) = -g(x)</span>，得 <span class=\"chem\">g = 0</span>。(d) <span class=\"chem\">O(x) = (e^x - e^{-x})/2</span>；<span class=\"chem\">x ≈ 1.44</span>。(e) 定義域必須對稱：<span class=\"chem\">f(-x)</span> 需要 <span class=\"chem\">x != -2</span>。<span class=\"chem\">E(x) = 2/(x^2 - 4)</span>，<span class=\"chem\">O(x) = x/(x^2 - 4)</span>。</p>",
      markscheme: [
        // EN: A1: (a) <span class="chem">E(x) = 2x^2 + 4</span>.
        "A1：(a) <span class=\"chem\">E(x) = 2x^2 + 4</span>。",
        // EN: A1: (a) <span class="chem">O(x) = x^3 - 5x</span>.
        "A1：(a) <span class=\"chem\">O(x) = x^3 - 5x</span>。",
        // EN: A1: (b) <span class="chem">E(-x) = (f(-x) + f(x))/2 = E(x)</span>, so E is even.
        "A1：(b) <span class=\"chem\">E(-x) = (f(-x) + f(x))/2 = E(x)</span>，所以 E 是偶函數。",
        // EN: A1: (b) <span class="chem">O(-x) = (f(-x) - f(x))/2 = -O(x)</span>, so O is odd.
        "A1：(b) <span class=\"chem\">O(-x) = (f(-x) - f(x))/2 = -O(x)</span>，所以 O 是奇函數。",
        // EN: A1: (b) <span class="chem">E(x) + O(x) = 2f(x)/2 = f(x)</span>.
        "A1：(b) <span class=\"chem\">E(x) + O(x) = 2f(x)/2 = f(x)</span>。",
        // EN: M1: (c) lets <span class="chem">g = E_1 - E_2 = O_2 - O_1</span>, which is both even and odd.
        "M1：(c) 設 <span class=\"chem\">g = E_1 - E_2 = O_2 - O_1</span>，它既是偶函數又是奇函數。",
        // EN: M1: (c) <span class="chem">g(-x) = g(x)</span> and <span class="chem">g(-x) = -g(x)</span>, so <span class="chem">2g(x) = 0</span>.
        "M1：(c) <span class=\"chem\">g(-x) = g(x)</span> 及 <span class=\"chem\">g(-x) = -g(x)</span>，所以 <span class=\"chem\">2g(x) = 0</span>。",
        // EN: R1: (c) <span class="chem">g = 0</span>, so <span class="chem">E_1 = E_2</span> and <span class="chem">O_1 = O_2</span>.
        "R1：(c) <span class=\"chem\">g = 0</span>，所以 <span class=\"chem\">E_1 = E_2</span> 及 <span class=\"chem\">O_1 = O_2</span>。",
        // EN: A1: (d) <span class="chem">O(x) = (e^x - e^{-x})/2</span>.
        "A1：(d) <span class=\"chem\">O(x) = (e^x - e^{-x})/2</span>。",
        // EN: M1: (d) solves <span class="chem">(e^x - e^{-x})/2 = 2</span> graphically.
        "M1：(d) 用圖像法解 <span class=\"chem\">(e^x - e^{-x})/2 = 2</span>。",
        // EN: A1: (d) <span class="chem">x = 1.44</span>.
        "A1：(d) <span class=\"chem\">x = 1.44</span>。",
        // EN: R1: (e) <span class="chem">E(x)</span> and <span class="chem">O(x)</span> use <span class="chem">f(-x) = 1/(-x - 2)</span>, which is undefined at <span class="chem">x = -2</span>, so both <span class="chem">+-2</span> are excluded.
        "R1：(e) <span class=\"chem\">E(x)</span> 和 <span class=\"chem\">O(x)</span> 用到 <span class=\"chem\">f(-x) = 1/(-x - 2)</span>，它在 <span class=\"chem\">x = -2</span> 無定義，所以兩個 <span class=\"chem\">+-2</span> 都須排除。",
        // EN: M1: (e) <span class="chem">f(-x) = -1/(x + 2)</span> and combines over <span class="chem">x^2 - 4</span>.
        "M1：(e) <span class=\"chem\">f(-x) = -1/(x + 2)</span>，並以 <span class=\"chem\">x^2 - 4</span> 通分合併。",
        // EN: A1: (e) <span class="chem">E(x) = 2/(x^2 - 4)</span>.
        "A1：(e) <span class=\"chem\">E(x) = 2/(x^2 - 4)</span>。",
        // EN: A1: (e) <span class="chem">O(x) = x/(x^2 - 4)</span>.
        "A1：(e) <span class=\"chem\">O(x) = x/(x^2 - 4)</span>。",
      ],
    },

  }
});
