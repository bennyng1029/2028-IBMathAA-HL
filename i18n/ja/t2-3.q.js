/* t2-3.q — ja question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't2-3.q', {
  questions: {

    // ── t2-3-q001 · mcq · foundation · SL · SL 2.11 · 2 marks
    "t2-3-q001": {
      // EN: <p>The point <span class="chem">P(4, -3)</span> lies on the graph of <span class="chem">y = f(x)</span>. Find the coordinates of the image of <span class="chem">P</span> on the graph of <span class="chem">y = 2 f(x - 1) + 5</span>.</p>
      stem: "<p>点 <span class=\"chem\">P(4, -3)</span> が <span class=\"chem\">y = f(x)</span> のグラフ上にある。<span class=\"chem\">y = 2 f(x - 1) + 5</span> のグラフ上での <span class=\"chem\">P</span> の像の座標を求めなさい (Find)。</p>",
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
        "横方向の平行移動 <span class=\"chem\">f(x - 1)</span> は <span class=\"chem\">x</span> 座標に <span class=\"chem\">1</span> を加えます。",
        // EN: Vertical stretch and shift <span class="chem">2y + 5</span> gives <span class="chem">2(-3) + 5</span>.
        "縦方向の拡大と平行移動 <span class=\"chem\">2y + 5</span> は <span class=\"chem\">2(-3) + 5</span> となります。",
      ],
      // EN: <p>Using <span class="chem">x_new = x_0 + 1 = 5</span> and <span class="chem">y_new = 2y_0 + 5 = 2(-3) + 5 = -1</span>, the image is <span class="chem">(5, -1)</span>.</p>
      solution: "<p><span class=\"chem\">x_new = x_0 + 1 = 5</span> および <span class=\"chem\">y_new = 2y_0 + 5 = 2(-3) + 5 = -1</span> より、像は <span class=\"chem\">(5, -1)</span> です。</p>",
      misconception: {
        // EN (option B): Inside f(x − 1), subtracting 1 shifts the graph 1 unit RIGHT (x_new = 4 + 1 = 5), not left.
        "1": "f(x − 1) のように 1 を引くと、グラフは左ではなく右へ 1 だけ平行移動します（x_new = 4 + 1 = 5）。",
        // EN (option C): Vertical stretch by 2 then shift up 5 gives 2(−3) + 5 = −1, not −11.
        "2": "縦方向に 2 倍してから上へ 5 平行移動すると 2(−3) + 5 = −1 であり、−11 ではありません。",
        // EN (option D): The horizontal transformation is a translation by +1, not a stretch by 2.
        "3": "横方向の変換は 2 倍の拡大ではなく +1 の平行移動です。",
      },
    },

    // ── t2-3-q002 · numeric · foundation · SL · SL 2.11 · 2 marks
    "t2-3-q002": {
      // EN: <p>The point <span class="chem">(-6, 5)</span> lies on <span class="chem">y = f(x)</span>. Find the <span class="chem">x</span>-coordinate of its image on the graph of <span class="chem">y = -f(3x + 3) + 2</span>.</p>
      stem: "<p>点 <span class=\"chem\">(-6, 5)</span> が <span class=\"chem\">y = f(x)</span> 上にある。<span class=\"chem\">y = -f(3x + 3) + 2</span> のグラフ上でのこの点の像の <span class=\"chem\">x</span> 座標を求めなさい (Find)。</p>",
      hints: [
        // EN: Set the inside expression equal to the original <span class="chem">x</span>-coordinate: <span class="chem">3x_new + 3 = -6</span>.
        "括弧の中の式を元の <span class=\"chem\">x</span> 座標と等置します：<span class=\"chem\">3x_new + 3 = -6</span>。",
        // EN: Solve <span class="chem">3x_new = -9</span> for <span class="chem">x_new</span>.
        "<span class=\"chem\">3x_new = -9</span> を <span class=\"chem\">x_new</span> について解きます。",
      ],
      // EN: <p>Equating arguments gives <span class="chem">3x_new + 3 = -6 => 3x_new = -9 => x_new = -3</span>. (Factoring <span class="chem">3(x + 1)</span> also shows horizontal stretch by <span class="chem">1/3</span> to <span class="chem">-2</span>, then shift <span class="chem">1</span> unit left to <span class="chem">-3</span>.)</p>
      solution: "<p>引数を等置すると <span class=\"chem\">3x_new + 3 = -6 => 3x_new = -9 => x_new = -3</span> となります。（<span class=\"chem\">3(x + 1)</span> とくくっても、横方向に <span class=\"chem\">1/3</span> 倍して <span class=\"chem\">-2</span>、さらに左へ <span class=\"chem\">1</span> 平行移動して <span class=\"chem\">-3</span> となることがわかります。）</p>",
    },

    // ── t2-3-q003 · order · exam · SL · SL 2.11 · 4 marks
    "t2-3-q003": {
      // EN: <p>Arrange these transformations in a valid order (top to bottom) to map <span class="chem">y = f(x)</span> onto <span class="chem">y = -3 f(2x - 8) + 1</span>.</p>
      stem: "<p><span class=\"chem\">y = f(x)</span> を <span class=\"chem\">y = -3 f(2x - 8) + 1</span> に移すための正しい順序（上から下）に次の変換を並べ替えなさい。</p>",
      options: [
        // EN: Horizontal stretch of scale factor <span class="chem">1/2</span> parallel to the <span class="chem">x</span>-axis
        "<span class=\"chem\">x</span> 軸に平行に <span class=\"chem\">1/2</span> 倍の拡大・縮小",
        // EN: Horizontal translation of <span class="chem">4</span> units to the right
        "右へ <span class=\"chem\">4</span> だけの平行移動",
        // EN: Vertical stretch of scale factor <span class="chem">3</span> and reflection in the <span class="chem">x</span>-axis
        "縦方向に <span class=\"chem\">3</span> 倍の拡大と <span class=\"chem\">x</span> 軸に関する対称移動",
        // EN: Vertical translation of <span class="chem">1</span> unit up
        "上へ <span class=\"chem\">1</span> だけの平行移動",
      ],
      hints: [
        // EN: Factor <span class="chem">2</span> inside <span class="chem">f</span> first: <span class="chem">-3 f(2(x - 4)) + 1</span>.
        "まず <span class=\"chem\">f</span> の中から <span class=\"chem\">2</span> をくくり出します：<span class=\"chem\">-3 f(2(x - 4)) + 1</span>。",
        // EN: In factored form, apply stretches/reflections before translations in each direction.
        "くくり出した形では、各方向で拡大・縮小や対称移動を平行移動より先に行います。",
      ],
      // EN: <p>Writing <span class="chem">y = -3 f(2(x - 4)) + 1</span>: horizontally stretch by <span class="chem">1/2</span> then translate <span class="chem">4</span> units right; vertically stretch by <span class="chem">3</span> with <span class="chem">x</span>-axis reflection then translate <span class="chem">1</span> unit up.</p>
      solution: "<p><span class=\"chem\">y = -3 f(2(x - 4)) + 1</span> と書くと、横方向に <span class=\"chem\">1/2</span> 倍してから右へ <span class=\"chem\">4</span> 平行移動し、縦方向に <span class=\"chem\">3</span> 倍して <span class=\"chem\">x</span> 軸対称移動した後、上へ <span class=\"chem\">1</span> 平行移動します。</p>",
    },

    // ── t2-3-q004 · mcq · foundation · AHL · AHL 2.12 · 2 marks
    "t2-3-q004": {
      // EN: <p>Find the remainder when <span class="chem">P(x) = 2x^3 - 3x^2 + 4x - 5</span> is divided by <span class="chem">(2x - 1)</span>.</p>
      stem: "<p><span class=\"chem\">P(x) = 2x^3 - 3x^2 + 4x - 5</span> を <span class=\"chem\">(2x - 1)</span> で割ったときの余りを求めなさい (Find)。</p>",
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
        "剰余の定理より、<span class=\"chem\">(2x - 1)</span> で割った余りは <span class=\"chem\">P(1/2)</span> です。",
        // EN: Compute <span class="chem">2(1/8) - 3(1/4) + 4(1/2) - 5</span>.
        "<span class=\"chem\">2(1/8) - 3(1/4) + 4(1/2) - 5</span> を計算します。",
      ],
      // EN: <p><span class="chem">P(1/2) = 2(1/8) - 3(1/4) + 4(1/2) - 5 = 1/4 - 3/4 + 2 - 5 = -1/2 - 3 = -7/2</span>.</p>
      solution: "<p><span class=\"chem\">P(1/2) = 2(1/8) - 3(1/4) + 4(1/2) - 5 = 1/4 - 3/4 + 2 - 5 = -1/2 - 3 = -7/2</span> です。</p>",
      misconception: {
        // EN (option B): You evaluated P(1) = 2 − 3 + 4 − 5 = −2 instead of P(1/2).
        "1": "P(1/2) ではなく P(1) = 2 − 3 + 4 − 5 = −2 を計算してしまいました。",
        // EN (option C): You evaluated P(−1/2) = −1/4 − 3/4 − 2 − 5 = −8 (or sign slip) instead of P(+1/2).
        "2": "P(+1/2) ではなく P(−1/2) = −1/4 − 3/4 − 2 − 5 = −8（または符号ミス）を計算してしまいました。",
        // EN (option D): Arithmetic slip in 2(1/8) − 3(1/4) + 2 − 5 = 1/4 − 3/4 − 3 = −7/2.
        "3": "2(1/8) − 3(1/4) + 2 − 5 = 1/4 − 3/4 − 3 = −7/2 の計算ミスです。",
      },
    },

    // ── t2-3-q005 · numeric · exam · AHL · AHL 2.12 · 3 marks
    "t2-3-q005": {
      // EN: <p>The polynomial <span class="chem">P(x) = x^3 + kx^2 - 5x + 6</span> is divisible by <span class="chem">(x - 3)</span>. Find the exact value of <span class="chem">k</span>.</p>
      stem: "<p>多項式 <span class=\"chem\">P(x) = x^3 + kx^2 - 5x + 6</span> が <span class=\"chem\">(x - 3)</span> で割り切れる。<span class=\"chem\">k</span> の厳密値（正確な値）を求めなさい (Find)。</p>",
      hints: [
        // EN: By the Factor Theorem, <span class="chem">P(3) = 0</span>.
        "因数定理より <span class=\"chem\">P(3) = 0</span> です。",
        // EN: Substitute <span class="chem">x = 3</span>: <span class="chem">27 + 9k - 15 + 6 = 0</span>.
        "<span class=\"chem\">x = 3</span> を代入します：<span class=\"chem\">27 + 9k - 15 + 6 = 0</span>。",
      ],
      // EN: <p>Setting <span class="chem">P(3) = 0</span> gives <span class="chem">3^3 + k(3)^2 - 5(3) + 6 = 0 => 27 + 9k - 15 + 6 = 0 => 9k + 18 = 0 => k = -2</span>.</p>
      solution: "<p><span class=\"chem\">P(3) = 0</span> とおくと <span class=\"chem\">3^3 + k(3)^2 - 5(3) + 6 = 0 => 27 + 9k - 15 + 6 = 0 => 9k + 18 = 0 => k = -2</span> となります。</p>",
    },

    // ── t2-3-q006 · mcq · exam · AHL · AHL 2.12 · 2 marks
    "t2-3-q006": {
      // EN: <p>The cubic equation <span class="chem">3x^3 - 6x^2 + 4x + 9 = 0</span> has roots <span class="chem">alpha, beta, gamma</span>. Find the value of <span class="chem">alpha beta gamma</span>.</p>
      stem: "<p>3 次方程式 <span class=\"chem\">3x^3 - 6x^2 + 4x + 9 = 0</span> の 3 つの解を <span class=\"chem\">alpha, beta, gamma</span> とする。<span class=\"chem\">alpha beta gamma</span> の値を求めなさい (Find)。</p>",
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
        "解と係数の関係（解の積）<span class=\"chem\">(-1)^n a_0 / a_n</span> を使います。",
        // EN: Here <span class="chem">n = 3</span>, <span class="chem">a_0 = 9</span>, and <span class="chem">a_3 = 3</span>.
        "ここでは <span class=\"chem\">n = 3</span>、<span class=\"chem\">a_0 = 9</span>、<span class=\"chem\">a_3 = 3</span> です。",
      ],
      // EN: <p>With <span class="chem">n = 3</span>, <span class="chem">alpha beta gamma = (-1)^3 (9 / 3) = -3</span>.</p>
      solution: "<p><span class=\"chem\">n = 3</span> なので、<span class=\"chem\">alpha beta gamma = (-1)^3 (9 / 3) = -3</span> です。</p>",
      misconception: {
        // EN (option B): For an odd-degree polynomial (n = 3), the product of roots is (−1)³ a₀/a₃ = −9/3 = −3, not +3.
        "1": "奇数次の多項式（n = 3）では、解の積は (−1)³ a₀/a₃ = −9/3 = −3 であり、+3 ではありません。",
        // EN (option C): 2 is the sum of the roots α + β + γ = −(−6)/3, not the product.
        "2": "2 は解の積ではなく、解の和 α + β + γ = −(−6)/3 です。",
        // EN (option D): 4/3 is the pairwise product sum αβ + βγ + γα = a₁/a₃.
        "3": "4/3 は 2 つずつの積の和 αβ + βγ + γα = a₁/a₃ です。",
      },
    },

    // ── t2-3-q007 · numeric · exam · AHL · AHL 2.12 · 3 marks
    "t2-3-q007": {
      // EN: <p>The quadratic equation <span class="chem">2x^2 - 8x + 5 = 0</span> has roots <span class="chem">alpha</span> and <span class="chem">beta</span>. Without solving the equation, find the exact value of <span class="chem">alpha^2 + beta^2</span>.</p>
      stem: "<p>2 次方程式 <span class=\"chem\">2x^2 - 8x + 5 = 0</span> の解を <span class=\"chem\">alpha</span> と <span class=\"chem\">beta</span> とする。方程式を解かずに、<span class=\"chem\">alpha^2 + beta^2</span> の厳密値（正確な値）を求めなさい (Find)。</p>",
      hints: [
        // EN: Find <span class="chem">alpha + beta = -b/a = 4</span> and <span class="chem">alpha beta = c/a = 5/2</span>.
        "<span class=\"chem\">alpha + beta = -b/a = 4</span> と <span class=\"chem\">alpha beta = c/a = 5/2</span> を求めます。",
        // EN: Use the identity <span class="chem">alpha^2 + beta^2 = (alpha + beta)^2 - 2 alpha beta</span>.
        "恒等式 <span class=\"chem\">alpha^2 + beta^2 = (alpha + beta)^2 - 2 alpha beta</span> を使います。",
      ],
      // EN: <p>From Vieta's formulas, <span class="chem">alpha + beta = 8/2 = 4</span> and <span class="chem">alpha beta = 5/2</span>. Therefore <span class="chem">alpha^2 + beta^2 = 4^2 - 2(5/2) = 16 - 5 = 11</span>.</p>
      solution: "<p>解と係数の関係より、<span class=\"chem\">alpha + beta = 8/2 = 4</span> かつ <span class=\"chem\">alpha beta = 5/2</span> です。よって <span class=\"chem\">alpha^2 + beta^2 = 4^2 - 2(5/2) = 16 - 5 = 11</span> となります。</p>",
    },

    // ── t2-3-q008 · short · challenge · AHL · AHL 2.12 · 5 marks
    "t2-3-q008": {
      // EN: <p>When a polynomial <span class="chem">P(x)</span> is divided by <span class="chem">(x - 1)</span>, the remainder is <span class="chem">4</span>. When <span class="chem">P(x)</span> is divided by <span class="chem">(x + 2)</span>, the remainder is <span class="chem">-5</span>. Find the remainder when <span class="chem">P(x)</span> is divided by <span class="chem">(x - 1)(x + 2)</span>.</p>
      stem: "<p>多項式 <span class=\"chem\">P(x)</span> を <span class=\"chem\">(x - 1)</span> で割ると余りが <span class=\"chem\">4</span>、<span class=\"chem\">P(x)</span> を <span class=\"chem\">(x + 2)</span> で割ると余りが <span class=\"chem\">-5</span> である。<span class=\"chem\">P(x)</span> を <span class=\"chem\">(x - 1)(x + 2)</span> で割ったときの余りを求めなさい (Find)。</p>",
      hints: [
        // EN: Since the divisor <span class="chem">(x - 1)(x + 2)</span> has degree <span class="chem">2</span>, the remainder has the linear form <span class="chem">ax + b</span>.
        "割る式 <span class=\"chem\">(x - 1)(x + 2)</span> が <span class=\"chem\">2</span> 次式なので、余りは 1 次式 <span class=\"chem\">ax + b</span> の形になります。",
        // EN: Substitute <span class="chem">x = 1</span> and <span class="chem">x = -2</span> into <span class="chem">P(x) = Q(x)(x - 1)(x + 2) + ax + b</span>.
        "<span class=\"chem\">P(x) = Q(x)(x - 1)(x + 2) + ax + b</span> に <span class=\"chem\">x = 1</span> と <span class=\"chem\">x = -2</span> を代入します。",
      ],
      // EN: <p>Let <span class="chem">P(x) = Q(x)(x - 1)(x + 2) + ax + b</span>. Then <span class="chem">P(1) = a + b = 4</span> and <span class="chem">P(-2) = -2a + b = -5</span>. Subtracting gives <span class="chem">3a = 9 => a = 3</span>, so <span class="chem">b = 1</span>. The remainder is <span class="chem">3x + 1</span>.</p>
      solution: "<p><span class=\"chem\">P(x) = Q(x)(x - 1)(x + 2) + ax + b</span> とおくと、<span class=\"chem\">P(1) = a + b = 4</span> かつ <span class=\"chem\">P(-2) = -2a + b = -5</span> です。辺々引くと <span class=\"chem\">3a = 9 => a = 3</span>、よって <span class=\"chem\">b = 1</span> となり、余りは <span class=\"chem\">3x + 1</span> です。</p>",
      markscheme: [
        // EN: M1: Write P(x) = Q(x)(x − 1)(x + 2) + ax + b (recognising remainder has degree ≤ 1).
        "M1：P(x) = Q(x)(x − 1)(x + 2) + ax + b と書く（余りの次数が 1 以下であることを認識する）。",
        // EN: A1: Apply Remainder Theorem: P(1) = a + b = 4.
        "A1：剰余の定理を適用する：P(1) = a + b = 4。",
        // EN: A1: Apply Remainder Theorem: P(−2) = −2a + b = −5.
        "A1：剰余の定理を適用する：P(−2) = −2a + b = −5。",
        // EN: M1: Solve the simultaneous linear equations (subtract to get 3a = 9).
        "M1：連立一次方程式を解く（引いて 3a = 9 を得る）。",
        // EN: A1: Obtain a = 3, b = 1, so the remainder is 3x + 1.
        "A1：a = 3, b = 1 を求め、余り 3x + 1 を得る。",
      ],
    },

    // ── t2-3-q009 · mcq · foundation · AHL · AHL 2.13 · 3 marks
    "t2-3-q009": {
      // EN: <p>Find the equation of the oblique asymptote of the rational function <span class="chem">f(x) = (3x^2 + 5x - 1)/(x + 2)</span>.</p>
      stem: "<p>分数関数 <span class=\"chem\">f(x) = (3x^2 + 5x - 1)/(x + 2)</span> の斜漸近線の方程式を求めなさい (Find)。</p>",
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
        "<span class=\"chem\">3x^2 + 5x - 1</span> を <span class=\"chem\">(x + 2)</span> で割ります。",
        // EN: <span class="chem">3x^2 + 5x - 1 = (3x - 1)(x + 2) + 1</span>.
        "<span class=\"chem\">3x^2 + 5x - 1 = (3x - 1)(x + 2) + 1</span> です。",
      ],
      // EN: <p>Dividing gives <span class="chem">f(x) = 3x - 1 + 1/(x + 2)</span>. As <span class="chem">x -&gt; +-infty</span>, <span class="chem">1/(x + 2) -&gt; 0</span>, so the oblique asymptote is <span class="chem">y = 3x - 1</span>.</p>
      solution: "<p>割り算すると <span class=\"chem\">f(x) = 3x - 1 + 1/(x + 2)</span> となります。<span class=\"chem\">x -&gt; +-infty</span> のとき <span class=\"chem\">1/(x + 2) -&gt; 0</span> なので、斜漸近線は <span class=\"chem\">y = 3x - 1</span> です。</p>",
      misconception: {
        // EN (option B): Sign error when subtracting 3x(x + 2) = 3x² + 6x from 3x² + 5x: 5x − 6x = −x, not +11x.
        "1": "3x² + 5x から 3x(x + 2) = 3x² + 6x を引くときの符号ミスです：5x − 6x = −x であり、+11x ではありません。",
        // EN (option C): You cannot read the oblique asymptote from the first two numerator coefficients without dividing by (x + 2).
        "2": "(x + 2) で割らずに分子の最初の 2 つの係数だけから斜漸近線を読み取ることはできません。",
        // EN (option D): Because the numerator has degree 2 and the denominator has degree 1, there is an oblique asymptote, not a horizontal asymptote y = 3.
        "3": "分子が 2 次で分母が 1 次なので、水平漸近線 y = 3 ではなく斜漸近線になります。",
      },
    },

    // ── t2-3-q010 · multi · exam · AHL · AHL 2.13 · 4 marks
    "t2-3-q010": {
      // EN: <p>Consider <span class="chem">f(x) = (2x - 4)/(x^2 - 9)</span> for <span class="chem">x != +-3</span>. Select <strong>all</strong> true statements about the graph of <span class="chem">f</span>.</p>
      stem: "<p><span class=\"chem\">x != +-3</span> に対して <span class=\"chem\">f(x) = (2x - 4)/(x^2 - 9)</span> を考える。<span class=\"chem\">f</span> のグラフについて正しい記述を<strong>すべて</strong>選びなさい。</p>",
      options: [
        // EN: The vertical asymptotes are <span class="chem">x = 3</span> and <span class="chem">x = -3</span>.
        "鉛直漸近線は <span class=\"chem\">x = 3</span> と <span class=\"chem\">x = -3</span> である。",
        // EN: The horizontal asymptote is <span class="chem">y = 0</span>.
        "水平漸近線は <span class=\"chem\">y = 0</span> である。",
        // EN: The horizontal asymptote is <span class="chem">y = 2</span>.
        "水平漸近線は <span class=\"chem\">y = 2</span> である。",
        // EN: The <span class="chem">x</span>-intercept is at <span class="chem">(2, 0)</span>.
        "<span class=\"chem\">x</span> 切片は <span class=\"chem\">(2, 0)</span> である。",
      ],
      hints: [
        // EN: Set the denominator <span class="chem">x^2 - 9 = 0</span> for vertical asymptotes.
        "鉛直漸近線を求めるには分母 <span class=\"chem\">x^2 - 9 = 0</span> とおきます。",
        // EN: Since <span class="chem">deg(num) = 1 &lt; deg(denom) = 2</span>, <span class="chem">f(x) -&gt; 0</span> as <span class="chem">x -&gt; +-infty</span>.
        "<span class=\"chem\">deg(num) = 1 &lt; deg(denom) = 2</span> なので、<span class=\"chem\">x -&gt; +-infty</span> で <span class=\"chem\">f(x) -&gt; 0</span> です。",
      ],
      // EN: <p>Denominator <span class="chem">x^2 - 9 = 0</span> gives VAs <span class="chem">x = +-3</span>. Since degree of numerator is less than degree of denominator, HA is <span class="chem">y = 0</span> (not <span class="chem">y = 2</span>). Setting <span class="chem">2x - 4 = 0</span> gives <span class="chem">x</span>-intercept <span class="chem">(2, 0)</span>.</p>
      solution: "<p>分母 <span class=\"chem\">x^2 - 9 = 0</span> より鉛直漸近線は <span class=\"chem\">x = +-3</span> です。分子の次数が分母の次数より小さいため、水平漸近線は <span class=\"chem\">y = 0</span>（<span class=\"chem\">y = 2</span> ではない）です。<span class=\"chem\">2x - 4 = 0</span> より <span class=\"chem\">x</span> 切片は <span class=\"chem\">(2, 0)</span> となります。</p>",
    },

    // ── t2-3-q011 · mcq · foundation · AHL · AHL 2.14 · 2 marks
    "t2-3-q011": {
      // EN: <p>Which of the following functions is an <strong>odd</strong> function?</p>
      stem: "<p>次の関数のうち、<strong>奇関数</strong>はどれですか？</p>",
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
        "すべての <span class=\"chem\">x</span> に対して <span class=\"chem\">f(-x) = -f(x)</span> が成り立つとき奇関数です。",
        // EN: Test replacing <span class="chem">x</span> with <span class="chem">-x</span> in each option.
        "各選択肢で <span class=\"chem\">x</span> を <span class=\"chem\">-x</span> に置き換えて確かめます。",
      ],
      // EN: <p><span class="chem">f(-x) = (-x)^3 - 4(-x) = -x^3 + 4x = -(x^3 - 4x) = -f(x)</span>, so <span class="chem">f</span> is odd.</p>
      solution: "<p><span class=\"chem\">f(-x) = (-x)^3 - 4(-x) = -x^3 + 4x = -(x^3 - 4x) = -f(x)</span> なので、<span class=\"chem\">f</span> は奇関数です。</p>",
      misconception: {
        // EN (option B): g(−x) = (−x)² + cos(−x) = x² + cos x = g(x), so g is EVEN, not odd.
        "1": "g(−x) = (−x)² + cos(−x) = x² + cos x = g(x) なので、g は奇関数ではなく偶関数です。",
        // EN (option C): Adding the constant +1 breaks odd symmetry: h(−x) = −x³ + 1 ≠ −h(x).
        "2": "定数 +1 があると奇関数の対称性が崩れます：h(−x) = −x³ + 1 ≠ −h(x)。",
        // EN (option D): p(−x) = |x| + x, which equals neither p(x) nor −p(x).
        "3": "p(−x) = |x| + x となり、p(x) とも −p(x) とも等しくありません。",
      },
    },

    // ── t2-3-q012 · numeric · exam · AHL · AHL 2.14 · 3 marks
    "t2-3-q012": {
      // EN: <p>The function <span class="chem">f(x) = x^3 - 12x + 5</span> is defined on the restricted domain <span class="chem">x &gt;= k</span>. Find the smallest value of <span class="chem">k</span> such that <span class="chem">f^{-1}</span> exists.</p>
      stem: "<p>関数 <span class=\"chem\">f(x) = x^3 - 12x + 5</span> が制限された定義域 <span class=\"chem\">x &gt;= k</span> 上で定義されている。<span class=\"chem\">f^{-1}</span> が存在するような最小の <span class=\"chem\">k</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: For <span class="chem">f^{-1}</span> to exist, <span class="chem">f</span> must be one-to-one (monotonic) on <span class="chem">x &gt;= k</span>.
        "<span class=\"chem\">f^{-1}</span> が存在するには、<span class=\"chem\">x &gt;= k</span> 上で <span class=\"chem\">f</span> が 1 対 1（単調）でなければなりません。",
        // EN: Find the turning points by solving <span class="chem">f'(x) = 3x^2 - 12 = 0</span> and pick the rightmost turning point.
        "<span class=\"chem\">f'(x) = 3x^2 - 12 = 0</span> を解いて極値を求め、一番右側の極値を選びます。",
      ],
      // EN: <p><span class="chem">f'(x) = 3x^2 - 12 = 0 => x = +-2</span>. Since the cubic increases for <span class="chem">x &gt;= 2</span>, the smallest <span class="chem">k</span> for <span class="chem">f</span> to be one-to-one on <span class="chem">[k, infty)</span> is <span class="chem">k = 2</span>.</p>
      solution: "<p><span class=\"chem\">f'(x) = 3x^2 - 12 = 0 => x = +-2</span> です。この 3 次関数は <span class=\"chem\">x &gt;= 2</span> で単調増加なので、<span class=\"chem\">f</span> が <span class=\"chem\">[k, infty)</span> 上で 1 対 1 になる最小の <span class=\"chem\">k</span> は <span class=\"chem\">k = 2</span> です。</p>",
    },

    // ── t2-3-q013 · mcq · exam · AHL · AHL 2.16 · 2 marks
    "t2-3-q013": {
      // EN: <p>The graph of <span class="chem">y = f(x)</span> has a local minimum at <span class="chem">(2, -5)</span> and <span class="chem">x</span>-intercepts at <span class="chem">(-1, 0)</span> and <span class="chem">(5, 0)</span>. Which statement is true for the graph of <span class="chem">y = |f(x)|</span>?</p>
      stem: "<p><span class=\"chem\">y = f(x)</span> のグラフが <span class=\"chem\">(2, -5)</span> で極小になり、<span class=\"chem\">x</span> 切片が <span class=\"chem\">(-1, 0)</span> と <span class=\"chem\">(5, 0)</span> である。<span class=\"chem\">y = |f(x)|</span> のグラフについて正しい記述はどれですか？</p>",
      options: [
        // EN: It has a local maximum at <span class="chem">(2, 5)</span>.
        "<span class=\"chem\">(2, 5)</span> で極大になる。",
        // EN: It has a local minimum at <span class="chem">(-2, -5)</span>.
        "<span class=\"chem\">(-2, -5)</span> で極小になる。",
        // EN: It has a cusp at <span class="chem">(2, 5)</span>.
        "<span class=\"chem\">(2, 5)</span> に尖点をもつ。",
        // EN: It has no <span class="chem">x</span>-intercepts.
        "<span class=\"chem\">x</span> 切片をもたない。",
      ],
      hints: [
        // EN: For <span class="chem">y = |f(x)|</span>, points with <span class="chem">f(x) &lt; 0</span> reflect across the <span class="chem">x</span>-axis.
        "<span class=\"chem\">y = |f(x)|</span> では、<span class=\"chem\">f(x) &lt; 0</span> の部分が <span class=\"chem\">x</span> 軸に関して折り返されます。",
        // EN: Reflecting a local minimum at <span class="chem">(2, -5)</span> across <span class="chem">y = 0</span> turns it into a local maximum.
        "<span class=\"chem\">(2, -5)</span> の極小点を <span class=\"chem\">y = 0</span> に関して折り返すと、極大点に変わります。",
      ],
      // EN: <p>Since <span class="chem">f(2) = -5 &lt; 0</span>, the smooth local minimum reflects across the <span class="chem">x</span>-axis to become a local maximum at <span class="chem">(2, 5)</span>.</p>
      solution: "<p><span class=\"chem\">f(2) = -5 &lt; 0</span> なので、滑らかな極小点が <span class=\"chem\">x</span> 軸に関して折り返され、<span class=\"chem\">(2, 5)</span> の極大点になります。</p>",
      misconception: {
        // EN (option B): |f(x)| reflects negative y-values across the x-axis (y → −y), not across the y-axis, and |f(x)| ≥ 0 everywhere.
        "1": "|f(x)| は負の y の値を y 軸ではなく x 軸に関して折り返す（y → −y）ものであり、どこでも |f(x)| ≥ 0 です。",
        // EN (option C): Because (2, −5) is a smooth turning point below the x-axis, reflecting it up produces a smooth local maximum at (2, 5); cusps occur at the x-intercepts (−1, 0) and (5, 0).
        "2": "(2, −5) は x 軸より下にある滑らかな極値なので、折り返しても (2, 5) で滑らかな極大点になります；尖点は x 切片 (−1, 0) と (5, 0) にできます。",
        // EN (option D): The x-intercepts (−1, 0) and (5, 0) have y = 0, so they remain on y = |f(x)|.
        "3": "x 切片 (−1, 0) と (5, 0) は y = 0 なので、y = |f(x)| 上にもそのまま残ります。",
      },
    },

    // ── t2-3-q014 · multi · exam · AHL · AHL 2.16 · 4 marks
    "t2-3-q014": {
      // EN: <p>The graph of <span class="chem">y = f(x)</span> has an <span class="chem">x</span>-intercept at <span class="chem">(3, 0)</span>, a vertical asymptote <span class="chem">x = -1</span>, a local maximum at <span class="chem">(1, 4)</span>, and passes through <span class="chem">(0, -1)</span>. Select <strong>all</strong> true statements for the reciprocal graph <span class="chem">y = 1/f(x)</span>.</p>
      stem: "<p><span class=\"chem\">y = f(x)</span> のグラフが <span class=\"chem\">x</span> 切片 <span class=\"chem\">(3, 0)</span>、鉛直漸近線 <span class=\"chem\">x = -1</span>、極大点 <span class=\"chem\">(1, 4)</span> をもち、点 <span class=\"chem\">(0, -1)</span> を通る。逆数グラフ <span class=\"chem\">y = 1/f(x)</span> について正しい記述を<strong>すべて</strong>選びなさい。</p>",
      options: [
        // EN: <span class="chem">x = 3</span> is a vertical asymptote of <span class="chem">y = 1/f(x)</span>.
        "<span class=\"chem\">x = 3</span> は <span class=\"chem\">y = 1/f(x)</span> の鉛直漸近線である。",
        // EN: <span class="chem">(1, 0.25)</span> is a local minimum of <span class="chem">y = 1/f(x)</span>.
        "<span class=\"chem\">(1, 0.25)</span> は <span class=\"chem\">y = 1/f(x)</span> の極小点である。",
        // EN: <span class="chem">(0, -1)</span> is an invariant point on <span class="chem">y = 1/f(x)</span>.
        "<span class=\"chem\">(0, -1)</span> は <span class=\"chem\">y = 1/f(x)</span> 上の不変点である。",
        // EN: <span class="chem">x = -1</span> is a vertical asymptote of <span class="chem">y = 1/f(x)</span>.
        "<span class=\"chem\">x = -1</span> は <span class=\"chem\">y = 1/f(x)</span> の鉛直漸近線である。",
      ],
      hints: [
        // EN: Roots of <span class="chem">f(x)</span> become vertical asymptotes of <span class="chem">1/f(x)</span>, while VAs of <span class="chem">f(x)</span> approach <span class="chem">0</span>.
        "<span class=\"chem\">f(x)</span> の解は <span class=\"chem\">1/f(x)</span> の鉛直漸近線になり、<span class=\"chem\">f(x)</span> の鉛直漸近線では <span class=\"chem\">0</span> に近づきます。",
        // EN: Points with <span class="chem">y = +-1</span> stay unchanged, and a positive local maximum <span class="chem">(1, 4)</span> becomes a local minimum <span class="chem">(1, 1/4)</span>.
        "<span class=\"chem\">y = +-1</span> の点は変わらず、正の極大点 <span class=\"chem\">(1, 4)</span> は極小点 <span class=\"chem\">(1, 1/4)</span> になります。",
      ],
      // EN: <p>At <span class="chem">x = 3</span>, <span class="chem">f(3) = 0</span> so <span class="chem">1/f(x)</span> has VA <span class="chem">x = 3</span>. Local max <span class="chem">(1, 4)</span> becomes local min <span class="chem">(1, 0.25)</span>. At <span class="chem">(0, -1)</span>, <span class="chem">1/(-1) = -1</span> (invariant). As <span class="chem">x -&gt; -1</span>, <span class="chem">f(x) -&gt; +-infty</span> so <span class="chem">1/f(x) -&gt; 0</span> (not a VA).</p>
      solution: "<p><span class=\"chem\">x = 3</span> で <span class=\"chem\">f(3) = 0</span> なので <span class=\"chem\">1/f(x)</span> の鉛直漸近線は <span class=\"chem\">x = 3</span> です。極大点 <span class=\"chem\">(1, 4)</span> は極小点 <span class=\"chem\">(1, 0.25)</span> になります。<span class=\"chem\">(0, -1)</span> では <span class=\"chem\">1/(-1) = -1</span> なので不変点です。<span class=\"chem\">x -&gt; -1</span> で <span class=\"chem\">f(x) -&gt; +-infty</span> となるため <span class=\"chem\">1/f(x) -&gt; 0</span> となり、鉛直漸近線にはなりません。</p>",
    },

    // ── t2-3-q015 · mcq · exam · AHL · AHL 2.15 · 3 marks
    "t2-3-q015": {
      // EN: <p>Solve the rational inequality <span class="chem">(3x - 2)/(x - 4) &gt;= 2</span>.</p>
      stem: "<p>分数不等式 <span class=\"chem\">(3x - 2)/(x - 4) &gt;= 2</span> を解きなさい。</p>",
      options: [
        // EN: <span class="chem">x &lt;= -6</span> or <span class="chem">x &gt; 4</span>
        "<span class=\"chem\">x &lt;= -6</span> または <span class=\"chem\">x &gt; 4</span>",
        // EN: <span class="chem">x &gt;= -6</span>
        "<span class=\"chem\">x &gt;= -6</span>",
        // EN: <span class="chem">-6 &lt;= x &lt; 4</span>
        "<span class=\"chem\">-6 &lt;= x &lt; 4</span>",
        // EN: <span class="chem">x &lt;= -6</span> or <span class="chem">x &gt;= 4</span>
        "<span class=\"chem\">x &lt;= -6</span> または <span class=\"chem\">x &gt;= 4</span>",
      ],
      hints: [
        // EN: Subtract <span class="chem">2</span> from both sides and combine into a single fraction <span class="chem">(x + 6)/(x - 4) &gt;= 0</span>.
        "両辺から <span class=\"chem\">2</span> を引いて 1 つの分数 <span class=\"chem\">(x + 6)/(x - 4) &gt;= 0</span> にまとめます。",
        // EN: Test the sign in the three intervals <span class="chem">(-infty, -6)</span>, <span class="chem">(-6, 4)</span>, and <span class="chem">(4, infty)</span>.
        "3 つの区間 <span class=\"chem\">(-infty, -6)</span>、<span class=\"chem\">(-6, 4)</span>、<span class=\"chem\">(4, infty)</span> で符号を調べます。",
      ],
      // EN: <p><span class="chem">(3x - 2)/(x - 4) - 2 &gt;= 0 => (x + 6)/(x - 4) &gt;= 0</span>. Critical values are <span class="chem">x = -6</span> (included) and <span class="chem">x = 4</span> (excluded). Sign diagram gives <span class="chem">x &lt;= -6</span> or <span class="chem">x &gt; 4</span>.</p>
      solution: "<p><span class=\"chem\">(3x - 2)/(x - 4) - 2 &gt;= 0 => (x + 6)/(x - 4) &gt;= 0</span> です。境界値は <span class=\"chem\">x = -6</span>（含む）と <span class=\"chem\">x = 4</span>（除外）であり、符号表より <span class=\"chem\">x &lt;= -6</span> または <span class=\"chem\">x &gt; 4</span> となります。</p>",
      misconception: {
        // EN (option B): Cross-multiplying by (x − 4) assumes x − 4 > 0 and loses the sign flip when x < 4.
        "1": "(x − 4) をそのまま掛けると x − 4 > 0 を仮定したことになり、x < 4 での不等号の反転を見落とします。",
        // EN (option C): Sign diagram of (x + 6)/(x − 4) is negative between −6 and 4, and positive outside.
        "2": "(x + 6)/(x − 4) の符号表では、−6 と 4 の間で負、外側で正になります。",
        // EN (option D): x = 4 makes the denominator zero, so x = 4 must be strictly excluded (x > 4, not x ≥ 4).
        "3": "x = 4 は分母を 0 にするため、x = 4 は厳密に除外しなければなりません（x ≥ 4 ではなく x > 4）。",
      },
    },

    // ── t2-3-q016 · numeric · challenge · AHL · AHL 2.15 · 3 marks
    "t2-3-q016": {
      // EN: <p>Solve <span class="chem">|3x - 5| = |x + 3|</span> and find the <strong>sum</strong> of all real solutions.</p>
      stem: "<p><span class=\"chem\">|3x - 5| = |x + 3|</span> を解き、すべての実数解の<strong>和</strong>を求めなさい (Find)。</p>",
      hints: [
        // EN: Since both sides are moduli, either <span class="chem">3x - 5 = x + 3</span> or <span class="chem">3x - 5 = -(x + 3)</span>.
        "両辺とも絶対値なので、<span class=\"chem\">3x - 5 = x + 3</span> または <span class=\"chem\">3x - 5 = -(x + 3)</span> のいずれかです。",
        // EN: Solve both linear equations to get <span class="chem">x = 4</span> and <span class="chem">x = 0.5</span>, then add them.
        "両方の 1 次方程式を解いて <span class=\"chem\">x = 4</span> と <span class=\"chem\">x = 0.5</span> を求め、それらを足します。",
      ],
      // EN: <p>Case 1: <span class="chem">3x - 5 = x + 3 => x = 4</span>. Case 2: <span class="chem">3x - 5 = -x - 3 => 4x = 2 => x = 0.5</span>. The sum of the solutions is <span class="chem">4 + 0.5 = 4.5</span>.</p>
      solution: "<p>場合 1：<span class=\"chem\">3x - 5 = x + 3 => x = 4</span>。場合 2：<span class=\"chem\">3x - 5 = -x - 3 => 4x = 2 => x = 0.5</span>。解の和は <span class=\"chem\">4 + 0.5 = 4.5</span> です。</p>",
    },

    // ── t2-3-q017 · numeric · challenge · AHL · AHL 2.13 · 4 marks
    "t2-3-q017": {
      // EN: <p>The range of <span class="chem">f(x) = (x^2 + 3)/(x - 1)</span> (<span class="chem">x != 1</span>) is <span class="chem">y &lt;= a</span> or <span class="chem">y &gt;= b</span>. Find the exact value of <span class="chem">b - a</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = (x^2 + 3)/(x - 1)</span>（<span class=\"chem\">x != 1</span>）の値域が <span class=\"chem\">y &lt;= a</span> または <span class=\"chem\">y &gt;= b</span> である。<span class=\"chem\">b - a</span> の厳密値（正確な値）を求めなさい (Find)。</p>",
      hints: [
        // EN: Set <span class="chem">y = (x^2 + 3)/(x - 1)</span> and rearrange into a quadratic in <span class="chem">x</span>: <span class="chem">x^2 - yx + (y + 3) = 0</span>.
        "<span class=\"chem\">y = (x^2 + 3)/(x - 1)</span> とおいて <span class=\"chem\">x</span> の 2 次方程式に整理します：<span class=\"chem\">x^2 - yx + (y + 3) = 0</span>。",
        // EN: Require <span class="chem">Delta_x = y^2 - 4(y + 3) &gt;= 0</span> to find <span class="chem">a = -2</span> and <span class="chem">b = 6</span>.
        "<span class=\"chem\">Delta_x = y^2 - 4(y + 3) &gt;= 0</span> を課して <span class=\"chem\">a = -2</span> と <span class=\"chem\">b = 6</span> を求めます。",
      ],
      // EN: <p>Rearranging gives <span class="chem">x^2 - yx + (y + 3) = 0</span>. Real <span class="chem">x</span> exists iff <span class="chem">Delta_x = y^2 - 4y - 12 = (y - 6)(y + 2) &gt;= 0</span>, so <span class="chem">y &lt;= -2</span> or <span class=\"chem">y &gt;= 6</span>. Thus <span class="chem">b - a = 6 - (-2) = 8</span>.</p>
      solution: "<p>整理すると <span class=\"chem\">x^2 - yx + (y + 3) = 0</span> となります。実数 <span class=\"chem\">x</span> が存在するのは <span class=\"chem\">Delta_x = y^2 - 4y - 12 = (y - 6)(y + 2) &gt;= 0</span> のとき、すなわち <span class=\"chem\">y &lt;= -2</span> または <span class=\"chem\">y &gt;= 6</span> のときです。よって <span class=\"chem\">b - a = 6 - (-2) = 8</span> となります。</p>",
    },

    // ── t2-3-q018 · short · challenge · AHL · AHL 2.15 · 6 marks
    "t2-3-q018": {
      // EN: <p>(a) Solve the inequality <span class="chem">|2x - 1| &gt; x + 2</span>. <strong>[4 marks]</strong><br>(b) Hence, or otherwise, solve <span class="chem">|2|x| - 1| &gt; |x| + 2</span>. <strong>[2 marks]</strong></p>
      stem: "<p>(a) 不等式 <span class=\"chem\">|2x - 1| &gt; x + 2</span> を解きなさい。 <strong>[4 marks]</strong><br>(b) これを用いて、または他の方法で (Hence, or otherwise)、<span class=\"chem\">|2|x| - 1| &gt; |x| + 2</span> を解きなさい。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: For <span class="chem">|A| &gt; B</span>, either <span class="chem">A &gt; B</span> or <span class="chem">A &lt; -B</span> (if <span class="chem">B &lt; 0</span>, it holds automatically, which is already inside <span class="chem">x &lt; -1/3</span>).
        "<span class=\"chem\">|A| &gt; B</span> では <span class=\"chem\">A &gt; B</span> または <span class=\"chem\">A &lt; -B</span> です（<span class=\"chem\">B &lt; 0</span> なら自動的に成り立ちますが、それはすでに <span class=\"chem\">x &lt; -1/3</span> に含まれています）。",
        // EN: In part (b), replace <span class="chem">x</span> with <span class="chem">|x|</span> in your answer to part (a).
        "(b) では、(a) の答えの <span class=\"chem\">x</span> を <span class=\"chem\">|x|</span> に置き換えます。",
      ],
      // EN: <p>(a) <span class="chem">2x - 1 &gt; x + 2 => x &gt; 3</span>, or <span class="chem">2x - 1 &lt; -x - 2 => 3x &lt; -1 => x &lt; -1/3</span>. So <span class="chem">x &lt; -1/3</span> or <span class="chem">x &gt; 3</span>. (b) Replacing <span class="chem">x</span> by <span class="chem">|x|</span>: <span class="chem">|x| &lt; -1/3</span> has no solution, while <span class="chem">|x| &gt; 3</span> gives <span class="chem">x &lt; -3</span> or <span class="chem">x &gt; 3</span>.</p>
      solution: "<p>(a) <span class=\"chem\">2x - 1 &gt; x + 2 => x &gt; 3</span>、または <span class=\"chem\">2x - 1 &lt; -x - 2 => 3x &lt; -1 => x &lt; -1/3</span>。よって <span class=\"chem\">x &lt; -1/3</span> または <span class=\"chem\">x &gt; 3</span> です。(b) <span class=\"chem\">x</span> を <span class=\"chem\">|x|</span> に置き換えると、<span class=\"chem\">|x| &lt; -1/3</span> は解なし、<span class=\"chem\">|x| &gt; 3</span> より <span class=\"chem\">x &lt; -3</span> または <span class=\"chem\">x &gt; 3</span> となります。</p>",
      markscheme: [
        // EN: M1: Split into two cases: 2x − 1 > x + 2 or 2x − 1 < −(x + 2) (or square when x + 2 ≥ 0).
        "M1：2 つの場合に分ける：2x − 1 > x + 2 または 2x − 1 < −(x + 2)（あるいは x + 2 ≥ 0 のとき 2 乗する）。",
        // EN: A1: First branch gives x > 3.
        "A1：1 つ目の場合から x > 3 を得る。",
        // EN: A1: Second branch gives 3x < −1 ⇒ x < −1/3.
        "A1：2 つ目の場合から 3x < −1 ⇒ x < −1/3 を得る。",
        // EN: A1: State full solution x < −1/3 or x > 3 (noting x < −2 is already covered).
        "A1：完全な解 x < −1/3 または x > 3 を述べる（x < −2 はすでに含まれることに注意）。",
        // EN: M1: Substitute |x| in place of x from part (a): |x| < −1/3 (no solution) or |x| > 3.
        "M1：(a) の x に |x| を代入する：|x| < −1/3（解なし）または |x| > 3。",
        // EN: A1: Solve |x| > 3 to obtain x < −3 or x > 3.
        "A1：|x| > 3 を解いて x < −3 または x > 3 を得る。",
      ],
    },

  }
});
