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
      // EN: <p>Using <span class="chem">x_{new} = x_0 + 1 = 5</span> and <span class="chem">y_{new} = 2y_0 + 5 = 2(-3) + 5 = -1</span>, the image is <span class="chem">(5, -1)</span>.</p>
      solution: "<p><span class=\"chem\">x_{new} = x_0 + 1 = 5</span> および <span class=\"chem\">y_{new} = 2y_0 + 5 = 2(-3) + 5 = -1</span> より、像は <span class=\"chem\">(5, -1)</span> です。</p>",
      misconception: {
        // EN (option B): Inside f(x − 1), subtracting 1 shifts the graph 1 unit RIGHT (x_new = 4 + 1 = 5), not left.
        "1": "f(x − 1) のように 1 を引くと、グラフは左ではなく右へ 1 だけ平行移動します（x_new = 4 + 1 = 5）。",
        // EN (option C): You shifted down instead of up: 2(−3) − 5 = −11. The +5 in 2 f(x − 1) + 5 means up 5, giving 2(−3) + 5 = −1.
        "2": "上ではなく下へ平行移動しています：2(−3) − 5 = −11。2 f(x − 1) + 5 の +5 は上へ 5 という意味なので、2(−3) + 5 = −1 となります。",
        // EN (option D): The horizontal transformation is a translation by +1, not a stretch by 2.
        "3": "横方向の変換は 2 倍の拡大ではなく +1 の平行移動です。",
      },
    },

    // ── t2-3-q002 · numeric · foundation · SL · SL 2.11 · 2 marks
    "t2-3-q002": {
      // EN: <p>The point <span class="chem">(-6, 5)</span> lies on <span class="chem">y = f(x)</span>. Find the <span class="chem">x</span>-coordinate of its image on the graph of <span class="chem">y = -f(3x + 3) + 2</span>.</p>
      stem: "<p>点 <span class=\"chem\">(-6, 5)</span> が <span class=\"chem\">y = f(x)</span> 上にある。<span class=\"chem\">y = -f(3x + 3) + 2</span> のグラフ上でのこの点の像の <span class=\"chem\">x</span> 座標を求めなさい (Find)。</p>",
      hints: [
        // EN: Set the inside expression equal to the original <span class="chem">x</span>-coordinate: <span class="chem">3x_{new} + 3 = -6</span>.
        "括弧の中の式を元の <span class=\"chem\">x</span> 座標と等置します：<span class=\"chem\">3x_{new} + 3 = -6</span>。",
        // EN: Solve <span class="chem">3x_{new} = -9</span> for <span class="chem">x_{new}</span>.
        "<span class=\"chem\">3x_{new} = -9</span> を <span class=\"chem\">x_{new}</span> について解きます。",
      ],
      // EN: <p>Equating arguments gives <span class="chem">3x_{new} + 3 = -6 => 3x_{new} = -9 => x_{new} = -3</span>. (Factoring <span class="chem">3(x + 1)</span> also shows horizontal stretch by <span class="chem">1/3</span> to <span class="chem">-2</span>, then shift <span class="chem">1</span> unit left to <span class="chem">-3</span>.)</p>
      solution: "<p>引数を等置すると <span class=\"chem\">3x_{new} + 3 = -6 => 3x_{new} = -9 => x_{new} = -3</span> となります。（<span class=\"chem\">3(x + 1)</span> とくくっても、横方向に <span class=\"chem\">1/3</span> 倍して <span class=\"chem\">-2</span>、さらに左へ <span class=\"chem\">1</span> 平行移動して <span class=\"chem\">-3</span> となることがわかります。）</p>",
    },

    // ── t2-3-q003 · order · exam · SL · SL 2.11 · 4 marks
    "t2-3-q003": {
      // EN: <p>Arrange these transformations in order (top to bottom) to map <span class="chem">y = f(x)</span> onto <span class="chem">y = -3 f(2x - 8) + 1</span>. Use this convention: <strong>all horizontal transformations first, then the vertical ones</strong>, and in each direction the stretch (with any reflection) <strong>before</strong> the translation.</p>
      stem: "<p><span class=\"chem\">y = f(x)</span> を <span class=\"chem\">y = -3 f(2x - 8) + 1</span> に移す順に（上から下へ）次の変換を並べ替えなさい。ただし次の決まりに従うこと：<strong>横方向の変換をすべて先に、縦方向の変換をあとに</strong>行い、各方向では拡大・縮小（対称移動を含む）を平行移動より<strong>先に</strong>行う。</p>",
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
      // EN: <p>Writing <span class="chem">y = -3 f(2(x - 4)) + 1</span>: horizontally stretch by <span class="chem">1/2</span> then translate <span class="chem">4</span> units right; vertically stretch by <span class="chem">3</span> with <span class="chem">x</span>-axis reflection then translate <span class="chem">1</span> unit up. (Horizontal and vertical steps do not affect each other, so in an exam other orders are also valid as long as, in each direction, the stretch comes before the translation; the convention in the question fixes one order.)</p>
      solution: "<p><span class=\"chem\">y = -3 f(2(x - 4)) + 1</span> と書くと：横方向に <span class=\"chem\">1/2</span> 倍してから右へ <span class=\"chem\">4</span> 平行移動し、縦方向に <span class=\"chem\">3</span> 倍して <span class=\"chem\">x</span> 軸対称移動してから上へ <span class=\"chem\">1</span> 平行移動します。（横方向と縦方向の操作は互いに影響しないので、試験では各方向で拡大・縮小が平行移動より先であれば他の順序でも正しいです。この問題の決まりは順序を 1 つに固定するためのものです。）</p>",
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
        // EN: <span class="chem">-8</span>
        "<span class=\"chem\">-8</span>",
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
        // EN (option C): You evaluated P(−1/2) = −1/4 − 3/4 − 2 − 5 = −8 instead of P(1/2). The root of 2x − 1 = 0 is x = +1/2.
        "2": "P(1/2) ではなく P(−1/2) = −1/4 − 3/4 − 2 − 5 = −8 を計算してしまいました。2x − 1 = 0 の解は x = +1/2 です。",
        // EN (option D): Sign slip: 1/4 − 3/4 = −1/2, not +1/2. With +1/2 you get 1/2 − 3 = −5/2 instead of −1/2 − 3 = −7/2.
        "3": "符号ミスです：1/4 − 3/4 = −1/2 であり、+1/2 ではありません。+1/2 とすると 1/2 − 3 = −5/2 となりますが、正しくは −1/2 − 3 = −7/2 です。",
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
        // EN: Decode: "the remainder when divided by <span class="chem">(x - 1)(x + 2)</span>" means the remainder has degree less than 2, so write it as <span class="chem">ax + b</span>; the two given remainders are two equations for <span class="chem">a</span> and <span class="chem">b</span>.
        "解読：「<span class=\"chem\">(x - 1)(x + 2)</span> で割ったときの余り」とは次数が 2 より小さい余りのことなので、<span class=\"chem\">ax + b</span> とおきます。与えられた 2 つの余りが <span class=\"chem\">a</span> と <span class=\"chem\">b</span> についての 2 つの方程式になります。",
        // EN: Since the divisor <span class="chem">(x - 1)(x + 2)</span> has degree <span class="chem">2</span>, the remainder has the linear form <span class="chem">ax + b</span>.
        "割る式 <span class=\"chem\">(x - 1)(x + 2)</span> が <span class=\"chem\">2</span> 次式なので、余りは 1 次式 <span class=\"chem\">ax + b</span> の形になります。",
        // EN: Substitute <span class="chem">x = 1</span> and <span class="chem">x = -2</span> into <span class="chem">P(x) = Q(x)(x - 1)(x + 2) + ax + b</span>.
        "<span class=\"chem\">P(x) = Q(x)(x - 1)(x + 2) + ax + b</span> に <span class=\"chem\">x = 1</span> と <span class=\"chem\">x = -2</span> を代入します。",
      ],
      // EN: <p>Let <span class="chem">P(x) = Q(x)(x - 1)(x + 2) + ax + b</span>. Then <span class="chem">P(1) = a + b = 4</span> and <span class="chem">P(-2) = -2a + b = -5</span>. Subtracting gives <span class="chem">3a = 9 => a = 3</span>, so <span class="chem">b = 1</span>. The remainder is <span class="chem">3x + 1</span>.</p>
      solution: "<p><span class=\"chem\">P(x) = Q(x)(x - 1)(x + 2) + ax + b</span> とおくと、<span class=\"chem\">P(1) = a + b = 4</span> かつ <span class=\"chem\">P(-2) = -2a + b = -5</span> です。辺々引くと <span class=\"chem\">3a = 9 => a = 3</span>、よって <span class=\"chem\">b = 1</span> となり、余りは <span class=\"chem\">3x + 1</span> です。</p>",
      // EN: <p><span class="chem">3x + 1</span></p>
      answer: "<p><span class=\"chem\">3x + 1</span></p>",
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

    // ── t2-3-q009 · mcq · foundation · AHL · AHL 2.13 · 2 marks
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
        // EN (option B): You divided using x = +2 instead of the root x = −2 of (x + 2): synthetic division then gives 5 + 6 = 11, so y = 3x + 11.
        "1": "(x + 2) の根 x = −2 ではなく x = +2 を使って割り算しました：組立除法で 5 + 6 = 11 となり、y = 3x + 11 になってしまいます。",
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
      // EN: <p>The graph of <span class="chem">y = f(x)</span> has an <span class="chem">x</span>-intercept at <span class="chem">(3, 0)</span>, a vertical asymptote <span class="chem">x = -1</span>, a local maximum at <span class="chem">(1, 4)</span>, and passes through <span class="chem">(4, -1)</span>. Select <strong>all</strong> true statements for the reciprocal graph <span class="chem">y = 1/f(x)</span>.</p>
      stem: "<p><span class=\"chem\">y = f(x)</span> のグラフが <span class=\"chem\">x</span> 切片 <span class=\"chem\">(3, 0)</span>、鉛直漸近線 <span class=\"chem\">x = -1</span>、極大点 <span class=\"chem\">(1, 4)</span> をもち、点 <span class=\"chem\">(4, -1)</span> を通る。逆数グラフ <span class=\"chem\">y = 1/f(x)</span> について正しい記述を<strong>すべて</strong>選びなさい。</p>",
      options: [
        // EN: <span class="chem">x = 3</span> is a vertical asymptote of <span class="chem">y = 1/f(x)</span>.
        "<span class=\"chem\">x = 3</span> は <span class=\"chem\">y = 1/f(x)</span> の鉛直漸近線である。",
        // EN: <span class="chem">(1, 0.25)</span> is a local minimum of <span class="chem">y = 1/f(x)</span>.
        "<span class=\"chem\">(1, 0.25)</span> は <span class=\"chem\">y = 1/f(x)</span> の極小点である。",
        // EN: <span class="chem">(4, -1)</span> is an invariant point on <span class="chem">y = 1/f(x)</span>.
        "<span class=\"chem\">(4, -1)</span> は <span class=\"chem\">y = 1/f(x)</span> 上の不変点である。",
        // EN: <span class="chem">x = -1</span> is a vertical asymptote of <span class="chem">y = 1/f(x)</span>.
        "<span class=\"chem\">x = -1</span> は <span class=\"chem\">y = 1/f(x)</span> の鉛直漸近線である。",
      ],
      hints: [
        // EN: Roots of <span class="chem">f(x)</span> become vertical asymptotes of <span class="chem">1/f(x)</span>, while VAs of <span class="chem">f(x)</span> approach <span class="chem">0</span>.
        "<span class=\"chem\">f(x)</span> の解は <span class=\"chem\">1/f(x)</span> の鉛直漸近線になり、<span class=\"chem\">f(x)</span> の鉛直漸近線では <span class=\"chem\">0</span> に近づきます。",
        // EN: Points with <span class="chem">y = +-1</span> stay unchanged, and a positive local maximum <span class="chem">(1, 4)</span> becomes a local minimum <span class="chem">(1, 1/4)</span>.
        "<span class=\"chem\">y = +-1</span> の点は変わらず、正の極大点 <span class=\"chem\">(1, 4)</span> は極小点 <span class=\"chem\">(1, 1/4)</span> になります。",
      ],
      // EN: <p>At <span class="chem">x = 3</span>, <span class="chem">f(3) = 0</span> so <span class="chem">1/f(x)</span> has VA <span class="chem">x = 3</span>. Local max <span class="chem">(1, 4)</span> becomes local min <span class="chem">(1, 0.25)</span>. At <span class="chem">(4, -1)</span>, <span class="chem">1/(-1) = -1</span> (invariant). As <span class="chem">x -&gt; -1</span>, <span class="chem">f(x) -&gt; +-infty</span> so <span class="chem">1/f(x) -&gt; 0</span> (not a VA).</p>
      solution: "<p><span class=\"chem\">x = 3</span> で <span class=\"chem\">f(3) = 0</span> なので <span class=\"chem\">1/f(x)</span> の鉛直漸近線は <span class=\"chem\">x = 3</span> です。極大点 <span class=\"chem\">(1, 4)</span> は極小点 <span class=\"chem\">(1, 0.25)</span> になります。<span class=\"chem\">(4, -1)</span> では <span class=\"chem\">1/(-1) = -1</span> なので不変点です。<span class=\"chem\">x -&gt; -1</span> で <span class=\"chem\">f(x) -&gt; +-infty</span> となるため <span class=\"chem\">1/f(x) -&gt; 0</span> となり、鉛直漸近線にはなりません。</p>",
    },

    // ── t2-3-q015 · mcq · exam · AHL · AHL 2.15 · 2 marks
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
        // EN (option C): You chose the interval where (x + 6)/(x − 4) is negative. The inequality needs (x + 6)/(x − 4) ≥ 0, which holds outside −6 and 4, not between them.
        "2": "(x + 6)/(x − 4) が負になる区間を選んでいます。不等式は (x + 6)/(x − 4) ≥ 0 を求めており、それが成り立つのは −6 と 4 の間ではなく外側です。",
        // EN (option D): x = 4 makes the denominator zero, so x = 4 must be strictly excluded (x > 4, not x ≥ 4).
        "3": "x = 4 は分母を 0 にするため、x = 4 は厳密に除外しなければなりません（x ≥ 4 ではなく x > 4）。",
      },
    },

    // ── t2-3-q016 · numeric · exam · AHL · AHL 2.16 · 3 marks
    "t2-3-q016": {
      // EN: <p>Solve <span class="chem">|3x - 5| = |x + 3|</span>. Give the smaller of the two solutions.</p>
      stem: "<p><span class=\"chem\">|3x - 5| = |x + 3|</span> を解きなさい (Solve)。2 つの解のうち小さい方を答えなさい。</p>",
      hints: [
        // EN: Since both sides are moduli, either <span class="chem">3x - 5 = x + 3</span> or <span class="chem">3x - 5 = -(x + 3)</span>.
        "両辺とも絶対値なので、<span class=\"chem\">3x - 5 = x + 3</span> または <span class=\"chem\">3x - 5 = -(x + 3)</span> のいずれかです。",
        // EN: Solve both linear equations, check each solution in the original equation, and compare them.
        "両方の 1 次方程式を解き、それぞれの解を元の方程式に代入して確かめてから、大小を比べます。",
      ],
      // EN: <p>Case 1: <span class="chem">3x - 5 = x + 3 => x = 4</span>. Case 2: <span class="chem">3x - 5 = -x - 3 => 4x = 2 => x = 0.5</span>. Both satisfy the original equation (<span class="chem">|7| = |7|</span> and <span class="chem">|-3.5| = |3.5|</span>), so the smaller solution is <span class="chem">x = 0.5</span>.</p>
      solution: "<p>場合 1：<span class=\"chem\">3x - 5 = x + 3 => x = 4</span>。場合 2：<span class=\"chem\">3x - 5 = -x - 3 => 4x = 2 => x = 0.5</span>。どちらも元の方程式を満たす（<span class=\"chem\">|7| = |7|</span>、<span class=\"chem\">|-3.5| = |3.5|</span>）ので、小さい方の解は <span class=\"chem\">x = 0.5</span> です。</p>",
    },

    // ── t2-3-q017 · numeric · challenge · AHL · AHL 2.13 · 4 marks
    "t2-3-q017": {
      // EN: <p>The range of <span class="chem">f(x) = (x^2 + 3)/(x - 1)</span> (<span class="chem">x != 1</span>) is <span class="chem">y &lt;= a</span> or <span class="chem">y &gt;= b</span>. Find the exact value of <span class="chem">b</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = (x^2 + 3)/(x - 1)</span>（<span class=\"chem\">x != 1</span>）の値域が <span class=\"chem\">y &lt;= a</span> または <span class=\"chem\">y &gt;= b</span> である。<span class=\"chem\">b</span> の厳密値（正確な値）を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: "the range is <span class="chem">y &lt;= a</span> or <span class="chem">y &gt;= b</span>" asks which <span class="chem">y</span>-values are actually reached. Turn that into "for which <span class="chem">y</span> does the equation <span class="chem">y = f(x)</span> have a real solution <span class="chem">x</span>?"
        "解読：「値域が <span class=\"chem\">y &lt;= a</span> または <span class=\"chem\">y &gt;= b</span>」とは、実際にとる <span class=\"chem\">y</span> の値はどれかを問うています。これを「どの <span class=\"chem\">y</span> に対して方程式 <span class=\"chem\">y = f(x)</span> が実数解 <span class=\"chem\">x</span> をもつか」と言い換えます。",
        // EN: Set <span class="chem">y = (x^2 + 3)/(x - 1)</span> and rearrange into a quadratic in <span class="chem">x</span>: <span class="chem">x^2 - yx + (y + 3) = 0</span>.
        "<span class=\"chem\">y = (x^2 + 3)/(x - 1)</span> とおいて <span class=\"chem\">x</span> の 2 次方程式に整理します：<span class=\"chem\">x^2 - yx + (y + 3) = 0</span>。",
        // EN: Real <span class="chem">x</span> exists only when the discriminant of this quadratic in <span class="chem">x</span> is non-negative: solve <span class="chem">y^2 - 4(y + 3) &gt;= 0</span> for <span class="chem">y</span>.
        "実数 <span class=\"chem\">x</span> が存在するのは、この <span class=\"chem\">x</span> の 2 次方程式の判別式が 0 以上のときだけです：<span class=\"chem\">y^2 - 4(y + 3) &gt;= 0</span> を <span class=\"chem\">y</span> について解きます。",
      ],
      // EN: <p>Rearranging gives <span class="chem">x^2 - yx + (y + 3) = 0</span>. Real <span class="chem">x</span> exists iff the discriminant <span class="chem">y^2 - 4y - 12 = (y - 6)(y + 2) &gt;= 0</span>, so <span class="chem">y &lt;= -2</span> or <span class="chem">y &gt;= 6</span>. Thus <span class="chem">a = -2</span> and <span class="chem">b = 6</span>.</p>
      solution: "<p>整理すると <span class=\"chem\">x^2 - yx + (y + 3) = 0</span> となります。実数 <span class=\"chem\">x</span> が存在するのは判別式 <span class=\"chem\">y^2 - 4y - 12 = (y - 6)(y + 2) &gt;= 0</span> のとき、すなわち <span class=\"chem\">y &lt;= -2</span> または <span class=\"chem\">y &gt;= 6</span> のときです。よって <span class=\"chem\">a = -2</span>、<span class=\"chem\">b = 6</span> となります。</p>",
    },

    // ── t2-3-q018 · short · challenge · AHL · AHL 2.16 · 6 marks
    "t2-3-q018": {
      // EN: <p>(a) Solve the inequality <span class="chem">|2x - 1| &gt; x + 2</span>. <strong>[4 marks]</strong><br>(b) Hence, or otherwise, solve <span class="chem">|2|x| - 1| &gt; |x| + 2</span>. <strong>[2 marks]</strong></p>
      stem: "<p>(a) 不等式 <span class=\"chem\">|2x - 1| &gt; x + 2</span> を解きなさい。 <strong>[4 marks]</strong><br>(b) これを用いて、または他の方法で (Hence, or otherwise)、<span class=\"chem\">|2|x| - 1| &gt; |x| + 2</span> を解きなさい。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: (a) is a modulus inequality whose right-hand side can be negative, so split into cases rather than squaring blindly. In (b), <span class="chem">|2|x| - 1| &gt; |x| + 2</span> is the inequality of (a) with <span class="chem">x</span> replaced by <span class="chem">|x|</span>.
        "解読：(a) は右辺が負になりうる絶対値の不等式なので、むやみに 2 乗せず場合分けします。(b) の <span class=\"chem\">|2|x| - 1| &gt; |x| + 2</span> は、(a) の不等式の <span class=\"chem\">x</span> を <span class=\"chem\">|x|</span> に置き換えたものです。",
        // EN: For <span class="chem">|A| &gt; B</span>, either <span class="chem">A &gt; B</span> or <span class="chem">A &lt; -B</span> (if <span class="chem">B &lt; 0</span>, it holds automatically, which is already inside <span class="chem">x &lt; -1/3</span>).
        "<span class=\"chem\">|A| &gt; B</span> では <span class=\"chem\">A &gt; B</span> または <span class=\"chem\">A &lt; -B</span> です（<span class=\"chem\">B &lt; 0</span> なら自動的に成り立ちますが、それはすでに <span class=\"chem\">x &lt; -1/3</span> に含まれています）。",
        // EN: In part (b), replace <span class="chem">x</span> with <span class="chem">|x|</span> in your answer to part (a).
        "(b) では、(a) の答えの <span class=\"chem\">x</span> を <span class=\"chem\">|x|</span> に置き換えます。",
      ],
      // EN: <p>(a) <span class="chem">2x - 1 &gt; x + 2 => x &gt; 3</span>, or <span class="chem">2x - 1 &lt; -x - 2 => 3x &lt; -1 => x &lt; -1/3</span>. So <span class="chem">x &lt; -1/3</span> or <span class="chem">x &gt; 3</span>. (b) Replacing <span class="chem">x</span> by <span class="chem">|x|</span>: <span class="chem">|x| &lt; -1/3</span> has no solution, while <span class="chem">|x| &gt; 3</span> gives <span class="chem">x &lt; -3</span> or <span class="chem">x &gt; 3</span>.</p>
      solution: "<p>(a) <span class=\"chem\">2x - 1 &gt; x + 2 => x &gt; 3</span>、または <span class=\"chem\">2x - 1 &lt; -x - 2 => 3x &lt; -1 => x &lt; -1/3</span>。よって <span class=\"chem\">x &lt; -1/3</span> または <span class=\"chem\">x &gt; 3</span> です。(b) <span class=\"chem\">x</span> を <span class=\"chem\">|x|</span> に置き換えると、<span class=\"chem\">|x| &lt; -1/3</span> は解なし、<span class=\"chem\">|x| &gt; 3</span> より <span class=\"chem\">x &lt; -3</span> または <span class=\"chem\">x &gt; 3</span> となります。</p>",
      // EN: <p>(a) <span class="chem">x &lt; -1/3</span> or <span class="chem">x &gt; 3</span>; (b) <span class="chem">x &lt; -3</span> or <span class="chem">x &gt; 3</span></p>
      answer: "<p>(a) <span class=\"chem\">x &lt; -1/3</span> または <span class=\"chem\">x &gt; 3</span>；(b) <span class=\"chem\">x &lt; -3</span> または <span class=\"chem\">x &gt; 3</span></p>",
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

    // ── t2-3-q019 · short · exam · AHL · AHL 2.15 · 4 marks
    "t2-3-q019": {
      // EN: <p>Using your GDC, solve the inequality <span class="chem">x^3 - 4x &gt; 1</span>. Give the end points of your intervals correct to 3 significant figures.</p>
      stem: "<p>GDC を用いて不等式 <span class=\"chem\">x^3 - 4x &gt; 1</span> を解きなさい。区間の端点は有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Rearrange to <span class="chem">x^3 - 4x - 1 &gt; 0</span> and graph <span class="chem">y = x^3 - 4x - 1</span>, or graph <span class="chem">Y_1 = x^3 - 4x</span> and <span class="chem">Y_2 = 1</span>.
        "<span class=\"chem\">x^3 - 4x - 1 &gt; 0</span> に変形して <span class=\"chem\">y = x^3 - 4x - 1</span> のグラフをかくか、<span class=\"chem\">Y_1 = x^3 - 4x</span> と <span class=\"chem\">Y_2 = 1</span> のグラフをかきます。",
        // EN: Use the zero (or intersect) tool to find all three crossing points, then read off where the cubic is <strong>above</strong> the <span class="chem">x</span>-axis.
        "zero（または交点）機能で 3 つの交点をすべて求め、3 次関数のグラフが <span class=\"chem\">x</span> 軸より<strong>上</strong>にある範囲を読み取ります。",
      ],
      // EN: <p>Graph <span class="chem">y = x^3 - 4x - 1</span>. The zero tool gives three roots: <span class="chem">x ≈ -1.8608</span>, <span class="chem">x ≈ -0.25410</span> and <span class="chem">x ≈ 2.1149</span>. A cubic with positive leading coefficient is above the <span class="chem">x</span>-axis between the first two roots and to the right of the third, so the solution is <span class="chem">-1.86 &lt; x &lt; -0.254</span> or <span class="chem">x &gt; 2.11</span>. (There is no exact method here, which is why this is a Paper 2 question.)</p>
      solution: "<p><span class=\"chem\">y = x^3 - 4x - 1</span> のグラフをかきます。zero 機能で 3 つの解 <span class=\"chem\">x ≈ -1.8608</span>、<span class=\"chem\">x ≈ -0.25410</span>、<span class=\"chem\">x ≈ 2.1149</span> が得られます。最高次の係数が正の 3 次関数は、1 つ目と 2 つ目の解の間と 3 つ目の解の右側で <span class=\"chem\">x</span> 軸より上にあるので、解は <span class=\"chem\">-1.86 &lt; x &lt; -0.254</span> または <span class=\"chem\">x &gt; 2.11</span> です。（厳密に解く方法がないので、Paper 2 の問題です。）</p>",
      // EN: <p><span class="chem">-1.86 &lt; x &lt; -0.254</span> or <span class="chem">x &gt; 2.11</span></p>
      answer: "<p><span class=\"chem\">-1.86 &lt; x &lt; -0.254</span> または <span class=\"chem\">x &gt; 2.11</span></p>",
      markscheme: [
        // EN: M1: Rearranges to x³ − 4x − 1 > 0 and graphs y = x³ − 4x − 1 (or graphs y = x³ − 4x and y = 1 and finds their intersections).
        "M1：x³ − 4x − 1 > 0 に変形し、y = x³ − 4x − 1 のグラフをかく（または y = x³ − 4x と y = 1 のグラフをかいて交点を求める）。",
        // EN: A1: Finds all three critical values x = −1.86, −0.254 and 2.11.
        "A1：3 つの境界値 x = −1.86、−0.254、2.11 をすべて求める。",
        // EN: A1: −1.86 < x < −0.254.
        "A1：−1.86 < x < −0.254。",
        // EN: A1: x > 2.11 (both intervals, with strict inequalities).
        "A1：x > 2.11（2 つの区間をどちらも、不等号に等号を含めずに書く）。",
      ],
    },

    // ── t2-3-q020 · mcq · foundation · AHL · AHL 2.12 · 2 marks
    "t2-3-q020": {
      // EN: <p>The graph of a cubic <span class="chem">y = f(x)</span> touches the <span class="chem">x</span>-axis at <span class="chem">x = -1</span>, crosses the <span class="chem">x</span>-axis at <span class="chem">x = 3</span>, and has <span class="chem">y</span>-intercept <span class="chem">(0, -3)</span>. Which equation could be <span class="chem">f(x)</span>?</p>
      stem: "<p>3 次関数 <span class=\"chem\">y = f(x)</span> のグラフは <span class=\"chem\">x = -1</span> で <span class=\"chem\">x</span> 軸に接し、<span class=\"chem\">x = 3</span> で <span class=\"chem\">x</span> 軸と交わり（横切り）、<span class=\"chem\">y</span> 切片は <span class=\"chem\">(0, -3)</span> である。<span class=\"chem\">f(x)</span> として考えられる式はどれですか？</p>",
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
        "重複する（2 乗の）因数 <span class=\"chem\">(x - a)^2</span> があるとグラフは <span class=\"chem\">x = a</span> で軸に接し、1 乗の因数なら軸を横切ります。",
        // EN: Check the <span class="chem">y</span>-intercept by substituting <span class="chem">x = 0</span>.
        "<span class=\"chem\">x = 0</span> を代入して <span class=\"chem\">y</span> 切片を確かめましょう。",
      ],
      // EN: <p>Touching at <span class="chem">x = -1</span> needs the squared factor <span class="chem">(x + 1)^2</span>, and crossing at <span class="chem">x = 3</span> needs the single factor <span class="chem">(x - 3)</span>, so <span class="chem">f(x) = a(x + 1)^2 (x - 3)</span>. Then <span class="chem">f(0) = a(1)(-3) = -3a = -3 => a = 1</span>, which matches the <span class="chem">y</span>-intercept, so <span class="chem">f(x) = (x + 1)^2 (x - 3)</span>.</p>
      solution: "<p><span class=\"chem\">x = -1</span> で接するには 2 乗の因数 <span class=\"chem\">(x + 1)^2</span>、<span class=\"chem\">x = 3</span> で横切るには 1 乗の因数 <span class=\"chem\">(x - 3)</span> が必要なので <span class=\"chem\">f(x) = a(x + 1)^2 (x - 3)</span> です。すると <span class=\"chem\">f(0) = a(1)(-3) = -3a = -3 => a = 1</span> となり <span class=\"chem\">y</span> 切片と一致するので、<span class=\"chem\">f(x) = (x + 1)^2 (x - 3)</span> です。</p>",
      misconception: {
        // EN (option B): A factor (x − 1) gives a root at x = +1, not x = −1: the graph touches the axis where (x + 1)² = 0.
        "1": "因数 (x − 1) からは x = −1 ではなく x = +1 の解が出ます。グラフが軸に接するのは (x + 1)² = 0 のところです。",
        // EN (option C): Here the squared factor is (x − 3)², so the graph would touch at x = 3 and cross at x = −1, and f(0) = 9.
        "2": "この式では 2 乗の因数が (x − 3)² なので、グラフは x = 3 で接し x = −1 で横切り、さらに f(0) = 9 になります。",
        // EN (option D): The roots are right, but f(0) = −(1)(−3) = +3, not −3. The leading coefficient must be positive.
        "3": "解は合っていますが、f(0) = −(1)(−3) = +3 であり −3 ではありません。最高次の係数は正でなければなりません。",
      },
    },

    // ── t2-3-q021 · multi · exam · AHL · AHL 2.16 · 3 marks
    "t2-3-q021": {
      // EN: <p>The graph of <span class="chem">y = f(x)</span> has a local maximum at <span class="chem">(-1, 3)</span>, passes through <span class="chem">(0, 1)</span>, and crosses the <span class="chem">x</span>-axis at <span class="chem">(2, 0)</span>. Select <strong>all</strong> true statements about the graph of <span class="chem">y = [f(x)]^2</span>.</p>
      stem: "<p><span class=\"chem\">y = f(x)</span> のグラフは <span class=\"chem\">(-1, 3)</span> で極大となり、<span class=\"chem\">(0, 1)</span> を通り、<span class=\"chem\">(2, 0)</span> で <span class=\"chem\">x</span> 軸を横切る。<span class=\"chem\">y = [f(x)]^2</span> のグラフについて正しい記述を<strong>すべて</strong>選びなさい。</p>",
      options: [
        // EN: <span class="chem">(2, 0)</span> is a local minimum of <span class="chem">y = [f(x)]^2</span>.
        "<span class=\"chem\">(2, 0)</span> は <span class=\"chem\">y = [f(x)]^2</span> の極小点である。",
        // EN: <span class="chem">(-1, 9)</span> is a local maximum of <span class="chem">y = [f(x)]^2</span>.
        "<span class=\"chem\">(-1, 9)</span> は <span class=\"chem\">y = [f(x)]^2</span> の極大点である。",
        // EN: <span class="chem">(0, 1)</span> is an invariant point.
        "<span class=\"chem\">(0, 1)</span> は不変点である。",
        // EN: <span class="chem">x = 2</span> is a vertical asymptote of <span class="chem">y = [f(x)]^2</span>.
        "<span class=\"chem\">x = 2</span> は <span class=\"chem\">y = [f(x)]^2</span> の鉛直漸近線である。",
      ],
      hints: [
        // EN: Squaring keeps <span class="chem">y = 0</span> and <span class="chem">y = 1</span> unchanged, makes every <span class="chem">y</span>-value non-negative, and squares the size of the others.
        "2 乗すると <span class=\"chem\">y = 0</span> と <span class=\"chem\">y = 1</span> の点は変わらず、すべての <span class=\"chem\">y</span> の値は 0 以上になり、それ以外の値は 2 乗されます。",
        // EN: Where <span class="chem">f</span> crosses the axis, <span class="chem">[f(x)]^2</span> touches it and has a minimum; a turning point with <span class="chem">f &gt; 0</span> stays a turning point of the same type.
        "<span class=\"chem\">f</span> が軸を横切るところでは <span class=\"chem\">[f(x)]^2</span> は軸に接して極小になり、<span class=\"chem\">f &gt; 0</span> の極値点は同じ種類の極値点のままです。",
      ],
      // EN: <p>At <span class="chem">x = 2</span>, <span class="chem">f = 0</span> and <span class="chem">f</span> changes sign, so <span class="chem">[f(x)]^2</span> has a smooth local minimum <span class="chem">(2, 0)</span>. At <span class="chem">x = -1</span>, <span class="chem">f = 3 &gt; 0</span> and <span class="chem">f</span> is at a local maximum, so <span class="chem">[f(x)]^2</span> has a local maximum <span class="chem">(-1, 9)</span>. At <span class="chem">x = 0</span>, <span class="chem">1^2 = 1</span>, so <span class="chem">(0, 1)</span> is invariant. Squaring a finite value is finite, so <span class="chem">x = 2</span> is not an asymptote.</p>
      solution: "<p><span class=\"chem\">x = 2</span> では <span class=\"chem\">f = 0</span> で <span class=\"chem\">f</span> の符号が変わるので、<span class=\"chem\">[f(x)]^2</span> はなめらかな極小点 <span class=\"chem\">(2, 0)</span> をもちます。<span class=\"chem\">x = -1</span> では <span class=\"chem\">f = 3 &gt; 0</span> で <span class=\"chem\">f</span> は極大なので、<span class=\"chem\">[f(x)]^2</span> は極大点 <span class=\"chem\">(-1, 9)</span> をもちます。<span class=\"chem\">x = 0</span> では <span class=\"chem\">1^2 = 1</span> なので、<span class=\"chem\">(0, 1)</span> は不変点です。有限の値を 2 乗しても有限なので、<span class=\"chem\">x = 2</span> は漸近線ではありません。</p>",
      misconception: {
        // EN (option D): Squaring never creates an asymptote: at x = 2, [f(2)]² = 0, so the graph touches the x-axis there. Vertical asymptotes from roots belong to 1/f(x).
        "3": "2 乗しても漸近線はできません：x = 2 で [f(2)]² = 0 なので、グラフはそこで x 軸に接します。解から鉛直漸近線ができるのは 1/f(x) の場合です。",
      },
    },

  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ja', 't2-3.q', {
  questions: {

    // ── t2-3-q022 · numeric · exam · SL · SL 2.11 · 5 marks
    "t2-3-q022": {
      // EN: <p>Let <span class="chem">f(x) = e^x - 3x</span>. The graph of <span class="chem">y = g(x)</span> is obtained from the graph of <span class="chem">y = f(x)</span> by a horizontal stretch with scale factor <span class="chem">2</span>, followed by a translation of <span class="chem">3</span> units up.</p><p>The equation <span class="chem">g(x) = 5</span> has one negative and one positive solution. Find the positive solution.</p>
      stem: "<p><span class=\"chem\">f(x) = e^x - 3x</span> とする。<span class=\"chem\">y = g(x)</span> のグラフは、<span class=\"chem\">y = f(x)</span> のグラフを横方向に <span class=\"chem\">2</span> 倍に拡大し、続けて上へ <span class=\"chem\">3</span> だけ平行移動して得られる。</p><p>方程式 <span class=\"chem\">g(x) = 5</span> は負の解と正の解を 1 つずつもつ。正の解を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: first build the formula for <span class="chem">g</span> from the words, then solve an equation that has no algebraic method, so use the GDC.
        "解読：まず文章から <span class=\"chem\">g</span> の式を作り、次に代数的な解法がない方程式を解くので GDC を使います。",
        // EN: A horizontal stretch with scale factor <span class="chem">2</span> replaces <span class="chem">x</span> by <span class="chem">x/2</span>; moving up <span class="chem">3</span> adds <span class="chem">3</span>. So <span class="chem">g(x) = e^{x/2} - 3(x/2) + 3</span>.
        "横方向に <span class=\"chem\">2</span> 倍に拡大すると <span class=\"chem\">x</span> が <span class=\"chem\">x/2</span> に置き換わり、上へ <span class=\"chem\">3</span> 移動すると <span class=\"chem\">3</span> が加わります。よって <span class=\"chem\">g(x) = e^{x/2} - 3(x/2) + 3</span> です。",
        // EN: Graph <span class="chem">Y_1 = e^{x/2} - 1.5x + 3</span> and <span class="chem">Y_2 = 5</span> and use the intersect tool on the right-hand crossing.
        "<span class=\"chem\">Y_1 = e^{x/2} - 1.5x + 3</span> と <span class=\"chem\">Y_2 = 5</span> のグラフをかき、右側の交点に intersect 機能を使います。",
      ],
      // EN: <p><span class="chem">g(x) = f(x/2) + 3 = e^{x/2} - 1.5x + 3</span>. Solving <span class="chem">e^{x/2} - 1.5x + 3 = 5</span> on the GDC gives <span class="chem">x ≈ -0.910</span> and <span class="chem">x ≈ 4.25</span>. The positive solution is <span class="chem">x ≈ 4.25</span>.</p><p>Common slip: a horizontal stretch with scale factor <span class="chem">2</span> is <span class="chem">f(x/2)</span>, not <span class="chem">f(2x)</span>.</p>
      solution: "<p><span class=\"chem\">g(x) = f(x/2) + 3 = e^{x/2} - 1.5x + 3</span> です。GDC で <span class=\"chem\">e^{x/2} - 1.5x + 3 = 5</span> を解くと <span class=\"chem\">x ≈ -0.910</span> と <span class=\"chem\">x ≈ 4.25</span> が得られます。正の解は <span class=\"chem\">x ≈ 4.25</span> です。</p><p>よくある間違い：横方向に <span class=\"chem\">2</span> 倍の拡大は <span class=\"chem\">f(x/2)</span> であり、<span class=\"chem\">f(2x)</span> ではありません。</p>",
    },

    // ── t2-3-q023 · numeric · challenge · SL · SL 2.11 · 6 marks
    "t2-3-q023": {
      // EN: <p>A standard response curve is modelled by <span class="chem">f(t) = t^2 e^{-t}</span>, <span class="chem">t &gt;= 0</span>. In a laboratory test, the response of a new sensor is found to follow <span class="chem">g(t) = A f(t/k)</span>, <span class="chem">t &gt;= 0</span>, where <span class="chem">A</span> and <span class="chem">k</span> are positive constants and <span class="chem">t</span> is the time in seconds. The data show that the response of the new sensor reaches its greatest value, <span class="chem">10</span> units, at <span class="chem">t = 6</span>.</p><p>Find the earliest time at which the response of the new sensor is <span class="chem">5</span> units.</p>
      stem: "<p>標準的な応答曲線が <span class=\"chem\">f(t) = t^2 e^{-t}</span>, <span class=\"chem\">t &gt;= 0</span> でモデル化されている。実験室での試験で、新しいセンサーの応答は <span class=\"chem\">g(t) = A f(t/k)</span>, <span class=\"chem\">t &gt;= 0</span> に従うことがわかった。ここで <span class=\"chem\">A</span> と <span class=\"chem\">k</span> は正の定数、<span class=\"chem\">t</span> は秒単位の時間である。データによると、新しいセンサーの応答は <span class=\"chem\">t = 6</span> で最大値 <span class=\"chem\">10</span> 単位に達する。</p><p>新しいセンサーの応答が <span class=\"chem\">5</span> 単位になる最も早い時刻を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: <span class="chem">g</span> is <span class="chem">f</span> after a vertical stretch (factor <span class="chem">A</span>) and a horizontal stretch (factor <span class="chem">k</span>). The peak of <span class="chem">g</span> is the image of the peak of <span class="chem">f</span>, so find the peak of <span class="chem">f</span> first, then <span class="chem">A</span> and <span class="chem">k</span>, then solve <span class="chem">g(t) = 5</span>.
        "解読：<span class=\"chem\">g</span> は <span class=\"chem\">f</span> を縦方向に拡大（倍率 <span class=\"chem\">A</span>）し、横方向に拡大（倍率 <span class=\"chem\">k</span>）したものです。<span class=\"chem\">g</span> の頂点は <span class=\"chem\">f</span> の頂点の像なので、まず <span class=\"chem\">f</span> の頂点を求め、次に <span class=\"chem\">A</span> と <span class=\"chem\">k</span> を求め、最後に <span class=\"chem\">g(t) = 5</span> を解きます。",
        // EN: Use the GDC maximum tool on <span class="chem">y = x^2 e^{-x}</span>: the peak is at <span class="chem">t = 2</span> with value <span class="chem">f(2) = 4e^{-2} ≈ 0.541</span>.
        "<span class=\"chem\">y = x^2 e^{-x}</span> に GDC の maximum 機能を使います：頂点は <span class=\"chem\">t = 2</span> で、その値は <span class=\"chem\">f(2) = 4e^{-2} ≈ 0.541</span> です。",
        // EN: The horizontal stretch sends <span class="chem">t = 2</span> to <span class="chem">t = 2k = 6</span>, so <span class="chem">k = 3</span>. The vertical stretch sends <span class="chem">0.541</span> to <span class="chem">10</span>, so <span class="chem">A = 10/(4e^{-2}) ≈ 18.5</span>.
        "横方向の拡大で <span class=\"chem\">t = 2</span> は <span class=\"chem\">t = 2k = 6</span> に移るので <span class=\"chem\">k = 3</span> です。縦方向の拡大で <span class=\"chem\">0.541</span> は <span class=\"chem\">10</span> に移るので <span class=\"chem\">A = 10/(4e^{-2}) ≈ 18.5</span> です。",
        // EN: Now intersect <span class="chem">y = A(x/3)^2 e^{-x/3}</span> with <span class="chem">y = 5</span> and take the smallest non-negative <span class="chem">x</span>.
        "次に <span class=\"chem\">y = A(x/3)^2 e^{-x/3}</span> と <span class=\"chem\">y = 5</span> の交点を求め、0 以上で最小の <span class=\"chem\">x</span> をとります。",
      ],
      // EN: <p><strong>Decode.</strong> The new curve is a stretched copy of <span class="chem">f</span>; its peak <span class="chem">(6, 10)</span> is the image of the peak of <span class="chem">f</span>.</p><p>On the GDC, <span class="chem">f</span> has its maximum at <span class="chem">(2, 0.5413…)</span> (indeed <span class="chem">f(2) = 4e^{-2}</span>). A horizontal stretch with factor <span class="chem">k</span> maps <span class="chem">t = 2</span> to <span class="chem">2k = 6</span>, so <span class="chem">k = 3</span>. A vertical stretch with factor <span class="chem">A</span> maps <span class="chem">4e^{-2}</span> to <span class="chem">10</span>, so <span class="chem">A = 2.5e^2 ≈ 18.47</span>.</p><p>Solving <span class="chem">18.47(t/3)^2 e^{-t/3} = 5</span> for <span class="chem">t &gt;= 0</span> gives <span class="chem">t ≈ 2.28</span> and <span class="chem">t ≈ 12.5</span> (the GDC also shows a negative root, which is outside the domain). The earliest time is <span class="chem">t ≈ 2.28</span> s.</p>
      solution: "<p><strong>解読。</strong>新しい曲線は <span class=\"chem\">f</span> を拡大したものであり、その頂点 <span class=\"chem\">(6, 10)</span> は <span class=\"chem\">f</span> の頂点の像です。</p><p>GDC では <span class=\"chem\">f</span> は <span class=\"chem\">(2, 0.5413…)</span> で最大になります（実際 <span class=\"chem\">f(2) = 4e^{-2}</span>）。倍率 <span class=\"chem\">k</span> の横方向の拡大は <span class=\"chem\">t = 2</span> を <span class=\"chem\">2k = 6</span> に移すので <span class=\"chem\">k = 3</span> です。倍率 <span class=\"chem\">A</span> の縦方向の拡大は <span class=\"chem\">4e^{-2}</span> を <span class=\"chem\">10</span> に移すので <span class=\"chem\">A = 2.5e^2 ≈ 18.47</span> です。</p><p><span class=\"chem\">t &gt;= 0</span> で <span class=\"chem\">18.47(t/3)^2 e^{-t/3} = 5</span> を解くと <span class=\"chem\">t ≈ 2.28</span> と <span class=\"chem\">t ≈ 12.5</span> が得られます（GDC には負の解も表示されますが、定義域の外です）。最も早い時刻は <span class=\"chem\">t ≈ 2.28</span> s です。</p>",
    },

    // ── t2-3-q024 · numeric · exam · AHL · AHL 2.12 · 3 marks
    "t2-3-q024": {
      // EN: <p>Let <span class="chem">P(x) = x^4 - 3x^3 - 2x^2 + 7x + 1</span>. The equation <span class="chem">P(x) = 0</span> has four real roots. Find the smallest positive root.</p>
      stem: "<p><span class=\"chem\">P(x) = x^4 - 3x^3 - 2x^2 + 7x + 1</span> とする。方程式 <span class=\"chem\">P(x) = 0</span> は 4 つの実数解をもつ。最小の正の解を求めなさい (Find)。</p>",
      hints: [
        // EN: Graph <span class="chem">y = x^4 - 3x^3 - 2x^2 + 7x + 1</span> in a window such as <span class="chem">-3 &lt;= x &lt;= 4</span> so that all four crossings are visible.
        "4 つの交点がすべて見えるように、たとえば <span class=\"chem\">-3 &lt;= x &lt;= 4</span> のような表示範囲で <span class=\"chem\">y = x^4 - 3x^3 - 2x^2 + 7x + 1</span> のグラフをかきます。",
        // EN: Two roots are negative. Use the zero (root) tool on the first crossing to the right of the <span class="chem">y</span>-axis.
        "2 つの解は負です。<span class=\"chem\">y</span> 軸の右側にある最初の交点に zero（解）機能を使います。",
      ],
      // EN: <p>The GDC gives the roots <span class="chem">x ≈ -1.44</span>, <span class="chem">-0.139</span>, <span class="chem">1.82</span> and <span class="chem">2.76</span>. The smallest positive root is <span class="chem">x ≈ 1.82</span>.</p><p>Check: the four roots add up to <span class="chem">3</span>, which equals <span class="chem">-a_3/a_4 = -(-3)/1</span>.</p>
      solution: "<p>GDC により解 <span class=\"chem\">x ≈ -1.44</span>、<span class=\"chem\">-0.139</span>、<span class=\"chem\">1.82</span>、<span class=\"chem\">2.76</span> が得られます。最小の正の解は <span class=\"chem\">x ≈ 1.82</span> です。</p><p>確認：4 つの解の和は <span class=\"chem\">3</span> であり、これは <span class=\"chem\">-a_3/a_4 = -(-3)/1</span> に等しくなります。</p>",
    },

    // ── t2-3-q025 · short · challenge · AHL · AHL 2.12, 2.15 · 7 marks
    "t2-3-q025": {
      // EN: <p>An open box is made from a rectangular sheet of card measuring <span class="chem">30</span> cm by <span class="chem">20</span> cm. A square of side <span class="chem">x</span> cm is cut from each corner and the sides are folded up.</p><p>(a) Show that the volume of the box is <span class="chem">V = x(30 - 2x)(20 - 2x)</span> cm³, and write down the set of possible values of <span class="chem">x</span>. <strong>[2 marks]</strong></p><p>(b) The box must hold exactly <span class="chem">900</span> cm³. Find the possible values of <span class="chem">x</span>, and explain why the equation <span class="chem">V = 900</span> has a third root that must be rejected. <strong>[3 marks]</strong></p><p>(c) Find the set of values of <span class="chem">x</span> for which the box holds more than <span class="chem">900</span> cm³. <strong>[2 marks]</strong></p>
      stem: "<p>縦 <span class=\"chem\">30</span> cm、横 <span class=\"chem\">20</span> cm の長方形の厚紙から、ふたのない箱を作る。各隅から 1 辺 <span class=\"chem\">x</span> cm の正方形を切り取り、側面を折り上げる。</p><p>(a) 箱の体積が <span class=\"chem\">V = x(30 - 2x)(20 - 2x)</span> cm³ であることを示し (Show that)、<span class=\"chem\">x</span> のとりうる値の集合を書きなさい (Write down)。<strong>[2 marks]</strong></p><p>(b) 箱の容積はちょうど <span class=\"chem\">900</span> cm³ でなければならない。<span class=\"chem\">x</span> のとりうる値を求め (Find)、方程式 <span class=\"chem\">V = 900</span> の 3 つ目の解を除外しなければならない理由を説明しなさい (Explain)。<strong>[3 marks]</strong></p><p>(c) 箱の容積が <span class=\"chem\">900</span> cm³ より大きくなる <span class=\"chem\">x</span> の値の集合を求めなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: a real-life cubic. The physical situation hides a domain condition (every length must be positive), which decides which GDC roots you keep.
        "解読：現実の場面の 3 次関数です。実際の状況には定義域の条件（すべての長さが正）が隠れていて、GDC の解のうちどれを残すかを決めます。",
        // EN: After cutting, the base is <span class="chem">(30 - 2x)</span> by <span class="chem">(20 - 2x)</span> and the height is <span class="chem">x</span>. All three must be positive.
        "切り取った後、底面は <span class=\"chem\">(30 - 2x)</span> × <span class=\"chem\">(20 - 2x)</span>、高さは <span class=\"chem\">x</span> です。この 3 つはすべて正でなければなりません。",
        // EN: Graph <span class="chem">Y_1 = x(30 - 2x)(20 - 2x)</span> and <span class="chem">Y_2 = 900</span>; find all intersections, then keep the ones with <span class="chem">0 &lt; x &lt; 10</span>.
        "<span class=\"chem\">Y_1 = x(30 - 2x)(20 - 2x)</span> と <span class=\"chem\">Y_2 = 900</span> のグラフをかいてすべての交点を求め、<span class=\"chem\">0 &lt; x &lt; 10</span> を満たすものだけを残します。",
      ],
      // EN: <p><strong>Decode.</strong> The algebra gives a cubic with three roots, but the card only allows <span class="chem">0 &lt; x &lt; 10</span>.</p><p>(a) Folding up leaves a base <span class="chem">(30 - 2x)</span> by <span class="chem">(20 - 2x)</span> and height <span class="chem">x</span>, so <span class="chem">V = x(30 - 2x)(20 - 2x)</span>. We need <span class="chem">x &gt; 0</span> and <span class="chem">20 - 2x &gt; 0</span>, so <span class="chem">0 &lt; x &lt; 10</span>.</p><p>(b) The GDC gives <span class="chem">x ≈ 2.30</span>, <span class="chem">5.78</span> and <span class="chem">16.9</span>. Only the first two lie in <span class="chem">0 &lt; x &lt; 10</span>.</p><p>(c) On <span class="chem">0 &lt; x &lt; 10</span> the volume curve is above <span class="chem">900</span> between the two valid roots: <span class="chem">2.30 &lt; x &lt; 5.78</span>.</p>
      solution: "<p><strong>解読。</strong>式からは 3 つの解をもつ 3 次方程式が得られますが、厚紙の大きさから <span class=\"chem\">0 &lt; x &lt; 10</span> しか許されません。</p><p>(a) 折り上げると底面は <span class=\"chem\">(30 - 2x)</span> × <span class=\"chem\">(20 - 2x)</span>、高さは <span class=\"chem\">x</span> となるので <span class=\"chem\">V = x(30 - 2x)(20 - 2x)</span> です。<span class=\"chem\">x &gt; 0</span> かつ <span class=\"chem\">20 - 2x &gt; 0</span> が必要なので <span class=\"chem\">0 &lt; x &lt; 10</span> です。</p><p>(b) GDC により <span class=\"chem\">x ≈ 2.30</span>、<span class=\"chem\">5.78</span>、<span class=\"chem\">16.9</span> が得られます。<span class=\"chem\">0 &lt; x &lt; 10</span> にあるのは最初の 2 つだけです。</p><p>(c) <span class=\"chem\">0 &lt; x &lt; 10</span> において、体積の曲線は 2 つの有効な解の間で <span class=\"chem\">900</span> より上にあります：<span class=\"chem\">2.30 &lt; x &lt; 5.78</span>。</p>",
      // EN: <p>(a) Length <span class="chem">30 - 2x</span>, width <span class="chem">20 - 2x</span>, height <span class="chem">x</span>, so <span class="chem">V = x(30 - 2x)(20 - 2x)</span>, with <span class="chem">0 &lt; x &lt; 10</span>.</p><p>(b) <span class="chem">x ≈ 2.30</span> or <span class="chem">x ≈ 5.78</span>. The third root <span class="chem">x ≈ 16.9</span> is rejected because it is not in <span class="chem">0 &lt; x &lt; 10</span> (the width <span class="chem">20 - 2x</span> would be negative).</p><p>(c) <span class="chem">2.30 &lt; x &lt; 5.78</span>.</p>
      answer: "<p>(a) 縦 <span class=\"chem\">30 - 2x</span>、横 <span class=\"chem\">20 - 2x</span>、高さ <span class=\"chem\">x</span> なので <span class=\"chem\">V = x(30 - 2x)(20 - 2x)</span>、ただし <span class=\"chem\">0 &lt; x &lt; 10</span>。</p><p>(b) <span class=\"chem\">x ≈ 2.30</span> または <span class=\"chem\">x ≈ 5.78</span>。3 つ目の解 <span class=\"chem\">x ≈ 16.9</span> は <span class=\"chem\">0 &lt; x &lt; 10</span> に含まれないので除外する（横の長さ <span class=\"chem\">20 - 2x</span> が負になる）。</p><p>(c) <span class=\"chem\">2.30 &lt; x &lt; 5.78</span>。</p>",
      markscheme: [
        // EN: A1: (a) states the dimensions <span class="chem">x</span>, <span class="chem">30 - 2x</span>, <span class="chem">20 - 2x</span> and multiplies them (the result <span class="chem">V = x(30 - 2x)(20 - 2x)</span> is given, AG).
        "A1：(a) 寸法 <span class=\"chem\">x</span>、<span class=\"chem\">30 - 2x</span>、<span class=\"chem\">20 - 2x</span> を述べ、それらを掛け合わせる（結果 <span class=\"chem\">V = x(30 - 2x)(20 - 2x)</span> は問題文に与えられている、AG）。",
        // EN: A1: (a) <span class="chem">0 &lt; x &lt; 10</span>.
        "A1：(a) <span class=\"chem\">0 &lt; x &lt; 10</span>。",
        // EN: M1: (b) solves <span class="chem">x(30 - 2x)(20 - 2x) = 900</span> on the GDC (graph and intersect, or polynomial solver).
        "M1：(b) GDC で <span class=\"chem\">x(30 - 2x)(20 - 2x) = 900</span> を解く（グラフと交点、または多項式ソルバー）。",
        // EN: A1: (b) <span class="chem">x = 2.30</span> and <span class="chem">x = 5.78</span>.
        "A1：(b) <span class=\"chem\">x = 2.30</span> と <span class=\"chem\">x = 5.78</span>。",
        // EN: R1: (b) rejects <span class="chem">x = 16.9</span> because it lies outside <span class="chem">0 &lt; x &lt; 10</span> (a side length would be negative).
        "R1：(b) <span class=\"chem\">x = 16.9</span> は <span class=\"chem\">0 &lt; x &lt; 10</span> の外にある（辺の長さが負になる）ので除外する。",
        // EN: M1: (c) the curve <span class="chem">y = V</span> lies above <span class="chem">y = 900</span> between the two valid roots.
        "M1：(c) 曲線 <span class=\"chem\">y = V</span> は 2 つの有効な解の間で <span class=\"chem\">y = 900</span> より上にある。",
        // EN: A1: (c) <span class="chem">2.30 &lt; x &lt; 5.78</span>.
        "A1：(c) <span class=\"chem\">2.30 &lt; x &lt; 5.78</span>。",
      ],
    },

    // ── t2-3-q026 · short · exam · AHL · AHL 2.12 · 5 marks
    "t2-3-q026": {
      // EN: <p>Consider the equation <span class="chem">x^4 - 2x^3 - 5x^2 + 4x + 3 = 0</span>.</p><p>(a) Use your GDC to find the four real roots. <strong>[2 marks]</strong></p><p>(b) Use the formula booklet to write down the sum and the product of the four roots. <strong>[2 marks]</strong></p><p>(c) Verify that your answers to (a) are consistent with (b). <strong>[1 mark]</strong></p>
      stem: "<p>方程式 <span class=\"chem\">x^4 - 2x^3 - 5x^2 + 4x + 3 = 0</span> を考える。</p><p>(a) GDC を用いて 4 つの実数解を求めなさい (Find)。<strong>[2 marks]</strong></p><p>(b) 公式集を用いて、4 つの解の和と積を書きなさい (Write down)。<strong>[2 marks]</strong></p><p>(c) (a) の答えが (b) と矛盾しないことを確かめなさい (Verify)。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Use a window wide enough to show all four crossings, for example <span class="chem">-3 &lt;= x &lt;= 4</span>.
        "4 つの交点がすべて見える広さの表示範囲を使います。たとえば <span class=\"chem\">-3 &lt;= x &lt;= 4</span> です。",
        // EN: Booklet: sum <span class="chem">= -a_{n-1}/a_n</span>, product <span class="chem">= (-1)^n a_0/a_n</span>, with <span class="chem">n = 4</span>.
        "公式集：和 <span class=\"chem\">= -a_{n-1}/a_n</span>、積 <span class=\"chem\">= (-1)^n a_0/a_n</span>、ただし <span class=\"chem\">n = 4</span>。",
      ],
      // EN: <p>(a) The GDC gives <span class="chem">x ≈ -1.7045</span>, <span class="chem">-0.50892</span>, <span class="chem">1.1169</span>, <span class="chem">3.0965</span>.</p><p>(b) With <span class="chem">a_4 = 1</span>, <span class="chem">a_3 = -2</span>, <span class="chem">a_0 = 3</span>: sum <span class="chem">= 2</span>, product <span class="chem">= (+1)(3) = 3</span>.</p><p>(c) The stored roots add to <span class="chem">2.0000</span> and multiply to <span class="chem">3.0000</span>, as predicted. (Rounded values give only approximately <span class="chem">2</span> and <span class="chem">3</span>, so use stored values.)</p>
      solution: "<p>(a) GDC により <span class=\"chem\">x ≈ -1.7045</span>、<span class=\"chem\">-0.50892</span>、<span class=\"chem\">1.1169</span>、<span class=\"chem\">3.0965</span> が得られます。</p><p>(b) <span class=\"chem\">a_4 = 1</span>、<span class=\"chem\">a_3 = -2</span>、<span class=\"chem\">a_0 = 3</span> より：和 <span class=\"chem\">= 2</span>、積 <span class=\"chem\">= (+1)(3) = 3</span>。</p><p>(c) 記憶させた解を足すと <span class=\"chem\">2.0000</span>、掛けると <span class=\"chem\">3.0000</span> となり、予想どおりです。（丸めた値ではおよそ <span class=\"chem\">2</span> と <span class=\"chem\">3</span> にしかならないので、記憶させた値を使います。）</p>",
      // EN: <p>(a) <span class="chem">x ≈ -1.70, -0.509, 1.12, 3.10</span>.</p><p>(b) Sum <span class="chem">= -(-2)/1 = 2</span>; product <span class="chem">= (-1)^4 (3/1) = 3</span>.</p><p>(c) Using the full GDC values, <span class="chem">-1.7045 - 0.5089 + 1.1169 + 3.0965 ≈ 2.000</span> and the product is <span class="chem">≈ 3.000</span>.</p>
      answer: "<p>(a) <span class=\"chem\">x ≈ -1.70, -0.509, 1.12, 3.10</span>。</p><p>(b) 和 <span class=\"chem\">= -(-2)/1 = 2</span>、積 <span class=\"chem\">= (-1)^4 (3/1) = 3</span>。</p><p>(c) GDC の値をすべて使うと <span class=\"chem\">-1.7045 - 0.5089 + 1.1169 + 3.0965 ≈ 2.000</span>、積は <span class=\"chem\">≈ 3.000</span>。</p>",
      markscheme: [
        // EN: M1: (a) graphs the quartic (or uses a polynomial solver) and finds the zeros.
        "M1：(a) 4 次関数のグラフをかき（または多項式ソルバーを使い）、零点を求める。",
        // EN: A1: (a) all four roots <span class="chem">-1.70, -0.509, 1.12, 3.10</span>.
        "A1：(a) 4 つの解すべて <span class=\"chem\">-1.70, -0.509, 1.12, 3.10</span>。",
        // EN: A1: (b) sum of roots <span class="chem">= 2</span>.
        "A1：(b) 解の和 <span class=\"chem\">= 2</span>。",
        // EN: A1: (b) product of roots <span class="chem">= 3</span>.
        "A1：(b) 解の積 <span class=\"chem\">= 3</span>。",
        // EN: R1: (c) adds and multiplies the stored (unrounded) roots, obtaining <span class="chem">2</span> and <span class="chem">3</span>.
        "R1：(c) 記憶させた（丸めていない）解を足し、掛けて、<span class=\"chem\">2</span> と <span class=\"chem\">3</span> を得る。",
      ],
    },

    // ── t2-3-q027 · short · exam · AHL · AHL 2.13, 2.15 · 9 marks
    "t2-3-q027": {
      // EN: <p>Let <span class="chem">f(x) = (2x^2 + 3x - 1)/(x + 2)</span>, <span class="chem">x != -2</span>.</p><p>(a) Write down the equation of the vertical asymptote of the graph of <span class="chem">f</span>. <strong>[1 mark]</strong></p><p>(b) Find the equation of the oblique asymptote. <strong>[2 marks]</strong></p><p>(c) Show that the <span class="chem">x</span>-coordinates of the points where the graph of <span class="chem">f</span> meets the curve <span class="chem">y = x^2</span> satisfy <span class="chem">x^3 - 3x + 1 = 0</span>. <strong>[2 marks]</strong></p><p>(d) Hence solve <span class="chem">f(x) &gt;= x^2</span>. <strong>[4 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = (2x^2 + 3x - 1)/(x + 2)</span>, <span class=\"chem\">x != -2</span> とする。</p><p>(a) <span class=\"chem\">f</span> のグラフの鉛直漸近線の方程式を書きなさい (Write down)。<strong>[1 mark]</strong></p><p>(b) 斜漸近線の方程式を求めなさい (Find)。<strong>[2 marks]</strong></p><p>(c) <span class=\"chem\">f</span> のグラフと曲線 <span class=\"chem\">y = x^2</span> の交点の <span class=\"chem\">x</span> 座標が <span class=\"chem\">x^3 - 3x + 1 = 0</span> を満たすことを示しなさい (Show that)。<strong>[2 marks]</strong></p><p>(d) これを用いて (Hence) <span class=\"chem\">f(x) &gt;= x^2</span> を解きなさい。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: (d) is a rational inequality. Do not multiply through by <span class="chem">x + 2</span> (its sign changes); combine into one fraction or compare the graphs.
        "解読：(d) は分数不等式です。<span class=\"chem\">x + 2</span> を両辺に掛けてはいけません（符号が変わるため）。1 つの分数にまとめるか、グラフを比較します。",
        // EN: Write <span class="chem">f(x) - x^2 = (2x^2 + 3x - 1 - x^2(x + 2))/(x + 2) = -(x^3 - 3x + 1)/(x + 2)</span>.
        "<span class=\"chem\">f(x) - x^2 = (2x^2 + 3x - 1 - x^2(x + 2))/(x + 2) = -(x^3 - 3x + 1)/(x + 2)</span> と書きます。",
        // EN: The critical values are <span class="chem">-2</span> (excluded) and the three GDC roots of <span class="chem">x^3 - 3x + 1</span>. Test the sign on each interval, or graph <span class="chem">y = f(x) - x^2</span>.
        "境界値は <span class=\"chem\">-2</span>（除外）と、<span class=\"chem\">x^3 - 3x + 1</span> の GDC による 3 つの解です。各区間で符号を調べるか、<span class=\"chem\">y = f(x) - x^2</span> のグラフをかきます。",
      ],
      // EN: <p>(a) <span class="chem">x = -2</span>.</p><p>(b) <span class="chem">2x^2 + 3x - 1 = (2x - 1)(x + 2) + 1</span>, so <span class="chem">f(x) = 2x - 1 + 1/(x + 2)</span> and the oblique asymptote is <span class="chem">y = 2x - 1</span>.</p><p>(c) <span class="chem">(2x^2 + 3x - 1)/(x + 2) = x^2 => 2x^2 + 3x - 1 = x^3 + 2x^2 => x^3 - 3x + 1 = 0</span>.</p><p>(d) <span class="chem">f(x) - x^2 = -(x^3 - 3x + 1)/(x + 2)</span>. The GDC gives roots <span class="chem">-1.879</span>, <span class="chem">0.3473</span>, <span class="chem">1.532</span>. The expression is <span class="chem">&gt;= 0</span> on <span class="chem">-2 &lt; x &lt;= -1.88</span> and on <span class="chem">0.347 &lt;= x &lt;= 1.53</span> (it is negative for <span class="chem">x &lt; -2</span>, on <span class="chem">(-1.88, 0.347)</span> and for <span class="chem">x &gt; 1.53</span>). <span class="chem">x = -2</span> is excluded because <span class="chem">f</span> is undefined there.</p>
      solution: "<p>(a) <span class=\"chem\">x = -2</span>。</p><p>(b) <span class=\"chem\">2x^2 + 3x - 1 = (2x - 1)(x + 2) + 1</span> なので <span class=\"chem\">f(x) = 2x - 1 + 1/(x + 2)</span> となり、斜漸近線は <span class=\"chem\">y = 2x - 1</span> です。</p><p>(c) <span class=\"chem\">(2x^2 + 3x - 1)/(x + 2) = x^2 => 2x^2 + 3x - 1 = x^3 + 2x^2 => x^3 - 3x + 1 = 0</span>。</p><p>(d) <span class=\"chem\">f(x) - x^2 = -(x^3 - 3x + 1)/(x + 2)</span> です。GDC により解 <span class=\"chem\">-1.879</span>、<span class=\"chem\">0.3473</span>、<span class=\"chem\">1.532</span> が得られます。この式は <span class=\"chem\">-2 &lt; x &lt;= -1.88</span> と <span class=\"chem\">0.347 &lt;= x &lt;= 1.53</span> で <span class=\"chem\">&gt;= 0</span> です（<span class=\"chem\">x &lt; -2</span>、<span class=\"chem\">(-1.88, 0.347)</span>、<span class=\"chem\">x &gt; 1.53</span> では負です）。<span class=\"chem\">x = -2</span> では <span class=\"chem\">f</span> が定義されないので除外します。</p>",
      // EN: <p>(a) <span class="chem">x = -2</span>. (b) <span class="chem">y = 2x - 1</span>. (c) <span class="chem">2x^2 + 3x - 1 = x^3 + 2x^2</span> gives <span class="chem">x^3 - 3x + 1 = 0</span>. (d) <span class="chem">-2 &lt; x &lt;= -1.88</span> or <span class="chem">0.347 &lt;= x &lt;= 1.53</span>.</p>
      answer: "<p>(a) <span class=\"chem\">x = -2</span>。(b) <span class=\"chem\">y = 2x - 1</span>。(c) <span class=\"chem\">2x^2 + 3x - 1 = x^3 + 2x^2</span> より <span class=\"chem\">x^3 - 3x + 1 = 0</span>。(d) <span class=\"chem\">-2 &lt; x &lt;= -1.88</span> または <span class=\"chem\">0.347 &lt;= x &lt;= 1.53</span>。</p>",
      markscheme: [
        // EN: A1: (a) <span class="chem">x = -2</span>.
        "A1：(a) <span class=\"chem\">x = -2</span>。",
        // EN: M1: (b) divides: <span class="chem">2x^2 + 3x - 1 = (2x - 1)(x + 2) + 1</span>.
        "M1：(b) 割り算する：<span class=\"chem\">2x^2 + 3x - 1 = (2x - 1)(x + 2) + 1</span>。",
        // EN: A1: (b) <span class="chem">y = 2x - 1</span>.
        "A1：(b) <span class=\"chem\">y = 2x - 1</span>。",
        // EN: M1: (c) sets <span class="chem">f(x) = x^2</span> and multiplies both sides by <span class="chem">(x + 2)</span>.
        "M1：(c) <span class=\"chem\">f(x) = x^2</span> とおき、両辺に <span class=\"chem\">(x + 2)</span> を掛ける。",
        // EN: A1: (c) correct expanded equation <span class="chem">2x^2 + 3x - 1 = x^3 + 2x^2</span> (rearranging to <span class="chem">x^3 - 3x + 1 = 0</span> is the given result, AG).
        "A1：(c) 展開した正しい方程式 <span class=\"chem\">2x^2 + 3x - 1 = x^3 + 2x^2</span>（<span class=\"chem\">x^3 - 3x + 1 = 0</span> に整理するのは与えられた結果、AG）。",
        // EN: A1: (d) roots of the cubic from the GDC: <span class="chem">-1.88, 0.347, 1.53</span>.
        "A1：(d) GDC による 3 次方程式の解：<span class=\"chem\">-1.88, 0.347, 1.53</span>。",
        // EN: M1: (d) considers the sign of <span class="chem">f(x) - x^2 = -(x^3 - 3x + 1)/(x + 2)</span>, including the critical value <span class="chem">x = -2</span> (or reads off where the graph of f is on or above <span class="chem">y = x^2</span>).
        "M1：(d) 境界値 <span class=\"chem\">x = -2</span> を含めて <span class=\"chem\">f(x) - x^2 = -(x^3 - 3x + 1)/(x + 2)</span> の符号を考える（または f のグラフが <span class=\"chem\">y = x^2</span> 上またはそれより上にある範囲を読み取る）。",
        // EN: A1: (d) <span class="chem">-2 &lt; x &lt;= -1.88</span>.
        "A1：(d) <span class=\"chem\">-2 &lt; x &lt;= -1.88</span>。",
        // EN: A1: (d) <span class="chem">0.347 &lt;= x &lt;= 1.53</span>.
        "A1：(d) <span class=\"chem\">0.347 &lt;= x &lt;= 1.53</span>。",
      ],
    },

    // ── t2-3-q028 · numeric · exam · AHL · AHL 2.13, 2.15 · 5 marks
    "t2-3-q028": {
      // EN: <p>The concentration of a medicine in a patient's blood, <span class="chem">t</span> hours after an injection, is modelled by <span class="chem">C(t) = 15t/(t^2 + 2t + 6)</span> mg per litre, <span class="chem">t &gt;= 0</span>. The medicine is effective while the concentration is greater than <span class="chem">1.8</span> mg per litre.</p><p>Find the length of time, in hours, for which the medicine is effective.</p>
      stem: "<p>注射から <span class=\"chem\">t</span> 時間後の患者の血液中の薬の濃度は <span class=\"chem\">C(t) = 15t/(t^2 + 2t + 6)</span> mg/L, <span class=\"chem\">t &gt;= 0</span> でモデル化される。この薬は濃度が <span class=\"chem\">1.8</span> mg/L より大きい間、効果がある。</p><p>薬が効果をもつ時間の長さ（時間単位）を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: "effective while greater than 1.8" is the inequality <span class="chem">C(t) &gt; 1.8</span>. The answer is the length of the time interval, not a single time.
        "解読：「1.8 より大きい間、効果がある」は不等式 <span class=\"chem\">C(t) &gt; 1.8</span> のことです。答えは 1 つの時刻ではなく、時間の区間の長さです。",
        // EN: Graph <span class="chem">Y_1 = 15x/(x^2 + 2x + 6)</span> and <span class="chem">Y_2 = 1.8</span> and find both intersections.
        "<span class=\"chem\">Y_1 = 15x/(x^2 + 2x + 6)</span> と <span class=\"chem\">Y_2 = 1.8</span> のグラフをかき、2 つの交点をどちらも求めます。",
        // EN: Subtract the earlier time from the later one.
        "遅いほうの時刻から早いほうの時刻を引きます。",
      ],
      // EN: <p>Solving <span class="chem">C(t) = 1.8</span> (GDC, or <span class="chem">1.8t^2 - 11.4t + 10.8 = 0</span>) gives <span class="chem">t ≈ 1.160</span> and <span class="chem">t ≈ 5.174</span>. Between these times the graph is above <span class="chem">1.8</span>, so the medicine is effective for <span class="chem">5.174 - 1.160 ≈ 4.01</span> hours.</p>
      solution: "<p><span class=\"chem\">C(t) = 1.8</span> を解くと（GDC、または <span class=\"chem\">1.8t^2 - 11.4t + 10.8 = 0</span>）、<span class=\"chem\">t ≈ 1.160</span> と <span class=\"chem\">t ≈ 5.174</span> が得られます。この 2 つの時刻の間でグラフは <span class=\"chem\">1.8</span> より上にあるので、薬は <span class=\"chem\">5.174 - 1.160 ≈ 4.01</span> 時間効果があります。</p>",
      // EN: hours
      unit: "時間",
    },

    // ── t2-3-q029 · short · exam · AHL · AHL 2.14 · 6 marks
    "t2-3-q029": {
      // EN: <p>Let <span class="chem">f(x) = x^3 - 2x^2 - 3x + 4</span>, <span class="chem">x &gt;= k</span>.</p><p>(a) Find the least value of <span class="chem">k</span> for which <span class="chem">f</span> has an inverse function. <strong>[2 marks]</strong></p><p>For this value of <span class="chem">k</span>:</p><p>(b) find the domain of <span class="chem">f^{-1}</span>; <strong>[2 marks]</strong></p><p>(c) find <span class="chem">f^{-1}(10)</span>. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = x^3 - 2x^2 - 3x + 4</span>, <span class=\"chem\">x &gt;= k</span> とする。</p><p>(a) <span class=\"chem\">f</span> が逆関数をもつような <span class=\"chem\">k</span> の最小値を求めなさい (Find)。<strong>[2 marks]</strong></p><p>この <span class=\"chem\">k</span> の値に対して：</p><p>(b) <span class=\"chem\">f^{-1}</span> の定義域を求めなさい。<strong>[2 marks]</strong></p><p>(c) <span class=\"chem\">f^{-1}(10)</span> を求めなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: An inverse exists only if <span class="chem">f</span> is one-to-one. Where does the cubic stop decreasing and start increasing for good?
        "逆関数が存在するのは <span class=\"chem\">f</span> が 1 対 1 のときだけです。この 3 次関数が減少をやめて、その後ずっと増加し始めるのはどこですか？",
        // EN: Use the GDC minimum tool: the local minimum is at about <span class="chem">(1.87, -2.06)</span>.
        "GDC の minimum 機能を使います：極小点はおよそ <span class=\"chem\">(1.87, -2.06)</span> です。",
        // EN: <span class="chem">f^{-1}(10)</span> is the value of <span class="chem">x &gt;= k</span> with <span class="chem">f(x) = 10</span>.
        "<span class=\"chem\">f^{-1}(10)</span> は、<span class=\"chem\">f(x) = 10</span> を満たし <span class=\"chem\">x &gt;= k</span> となる値です。",
      ],
      // EN: <p>(a) The graph has a local maximum at <span class="chem">x ≈ -0.535</span> and a local minimum at <span class="chem">x ≈ 1.87</span>. To the right of the minimum, <span class="chem">f</span> is increasing, so the least <span class="chem">k</span> is <span class="chem">k ≈ 1.87</span> (exactly <span class="chem">(2 + sqrt(13))/3</span>).</p><p>(b) The range of <span class="chem">f</span> is <span class="chem">f(x) &gt;= f(k) ≈ -2.06</span>, so the domain of <span class="chem">f^{-1}</span> is <span class="chem">x &gt;= -2.06</span>.</p><p>(c) Solving <span class="chem">x^3 - 2x^2 - 3x + 4 = 10</span> on the GDC gives one root, <span class="chem">x ≈ 3.40</span>, so <span class="chem">f^{-1}(10) ≈ 3.40</span>.</p>
      solution: "<p>(a) グラフは <span class=\"chem\">x ≈ -0.535</span> で極大、<span class=\"chem\">x ≈ 1.87</span> で極小になります。極小点より右では <span class=\"chem\">f</span> は増加するので、最小の <span class=\"chem\">k</span> は <span class=\"chem\">k ≈ 1.87</span>（厳密には <span class=\"chem\">(2 + sqrt(13))/3</span>）です。</p><p>(b) <span class=\"chem\">f</span> の値域は <span class=\"chem\">f(x) &gt;= f(k) ≈ -2.06</span> なので、<span class=\"chem\">f^{-1}</span> の定義域は <span class=\"chem\">x &gt;= -2.06</span> です。</p><p>(c) GDC で <span class=\"chem\">x^3 - 2x^2 - 3x + 4 = 10</span> を解くと解は 1 つ <span class=\"chem\">x ≈ 3.40</span> だけなので、<span class=\"chem\">f^{-1}(10) ≈ 3.40</span> です。</p>",
      // EN: <p>(a) <span class="chem">k ≈ 1.87</span> (the <span class="chem">x</span>-coordinate of the local minimum, <span class="chem">(2 + sqrt(13))/3</span>). (b) <span class="chem">x &gt;= -2.06</span>. (c) <span class="chem">f^{-1}(10) ≈ 3.40</span>.</p>
      answer: "<p>(a) <span class=\"chem\">k ≈ 1.87</span>（極小点の <span class=\"chem\">x</span> 座標、<span class=\"chem\">(2 + sqrt(13))/3</span>）。(b) <span class=\"chem\">x &gt;= -2.06</span>。(c) <span class=\"chem\">f^{-1}(10) ≈ 3.40</span>。</p>",
      markscheme: [
        // EN: M1: (a) recognises that f must be one-to-one, so k is at the local minimum (GDC minimum tool or <span class="chem">f'(x) = 0</span>).
        "M1：(a) f が 1 対 1 でなければならないことを認識し、k を極小点にとる（GDC の minimum 機能、または <span class=\"chem\">f'(x) = 0</span>）。",
        // EN: A1: (a) <span class="chem">k = 1.87</span>.
        "A1：(a) <span class=\"chem\">k = 1.87</span>。",
        // EN: M1: (b) domain of <span class="chem">f^{-1}</span> = range of f, starting at <span class="chem">f(k)</span>.
        "M1：(b) <span class=\"chem\">f^{-1}</span> の定義域 = f の値域であり、<span class=\"chem\">f(k)</span> から始まる。",
        // EN: A1: (b) <span class="chem">x &gt;= -2.06</span>.
        "A1：(b) <span class=\"chem\">x &gt;= -2.06</span>。",
        // EN: M1: (c) solves <span class="chem">f(x) = 10</span> with <span class="chem">x &gt;= 1.87</span>.
        "M1：(c) <span class=\"chem\">x &gt;= 1.87</span> で <span class=\"chem\">f(x) = 10</span> を解く。",
        // EN: A1: (c) <span class="chem">3.40</span>.
        "A1：(c) <span class=\"chem\">3.40</span>。",
      ],
    },

    // ── t2-3-q030 · numeric · challenge · AHL · AHL 2.14 · 5 marks
    "t2-3-q030": {
      // EN: <p>Let <span class="chem">f(x) = e^{x/2} - 2</span>, <span class="chem">x \in \mathbb{R}</span>. The graphs of <span class="chem">y = f(x)</span> and <span class="chem">y = f^{-1}(x)</span> meet at exactly two points. Find the <span class="chem">x</span>-coordinate of the point of intersection that lies in the first quadrant.</p>
      stem: "<p><span class=\"chem\">f(x) = e^{x/2} - 2</span>, <span class=\"chem\">x \\in \\mathbb{R}</span> とする。<span class=\"chem\">y = f(x)</span> と <span class=\"chem\">y = f^{-1}(x)</span> のグラフはちょうど 2 点で交わる。第 1 象限にある交点の <span class=\"chem\">x</span> 座標を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: you do not need a formula for <span class="chem">f^{-1}</span>. Because <span class="chem">f</span> is increasing, every meeting point of <span class="chem">f</span> and <span class="chem">f^{-1}</span> lies on the line <span class="chem">y = x</span>.
        "解読：<span class=\"chem\">f^{-1}</span> の式は必要ありません。<span class=\"chem\">f</span> は増加関数なので、<span class=\"chem\">f</span> と <span class=\"chem\">f^{-1}</span> の交点はすべて直線 <span class=\"chem\">y = x</span> 上にあります。",
        // EN: So solve <span class="chem">f(x) = x</span>, that is <span class="chem">e^{x/2} - 2 = x</span>.
        "したがって <span class=\"chem\">f(x) = x</span>、つまり <span class=\"chem\">e^{x/2} - 2 = x</span> を解きます。",
        // EN: Graph <span class="chem">Y_1 = e^{x/2} - 2</span> and <span class="chem">Y_2 = x</span>; one crossing is in the third quadrant, the other in the first.
        "<span class=\"chem\">Y_1 = e^{x/2} - 2</span> と <span class=\"chem\">Y_2 = x</span> のグラフをかきます。交点の 1 つは第 3 象限に、もう 1 つは第 1 象限にあります。",
      ],
      // EN: <p><strong>Decode.</strong> The graph of <span class="chem">f^{-1}</span> is the reflection of the graph of <span class="chem">f</span> in <span class="chem">y = x</span>. For an increasing function, the two graphs can only meet on that line, so solve <span class="chem">f(x) = x</span>.</p><p><span class="chem">e^{x/2} - 2 = x</span> has GDC solutions <span class="chem">x ≈ -1.54</span> (point <span class="chem">(-1.54, -1.54)</span>, third quadrant) and <span class="chem">x ≈ 3.36</span>. The first-quadrant point is <span class="chem">(3.36, 3.36)</span>, so <span class="chem">x ≈ 3.36</span>.</p>
      solution: "<p><strong>解読。</strong><span class=\"chem\">f^{-1}</span> のグラフは <span class=\"chem\">f</span> のグラフを <span class=\"chem\">y = x</span> に関して対称移動したものです。増加関数では 2 つのグラフはこの直線上でしか交わらないので、<span class=\"chem\">f(x) = x</span> を解きます。</p><p><span class=\"chem\">e^{x/2} - 2 = x</span> の GDC による解は <span class=\"chem\">x ≈ -1.54</span>（点 <span class=\"chem\">(-1.54, -1.54)</span>、第 3 象限）と <span class=\"chem\">x ≈ 3.36</span> です。第 1 象限の点は <span class=\"chem\">(3.36, 3.36)</span> なので <span class=\"chem\">x ≈ 3.36</span> です。</p>",
    },

    // ── t2-3-q031 · numeric · exam · AHL · AHL 2.15 · 4 marks
    "t2-3-q031": {
      // EN: <p>The solution of the inequality <span class="chem">2^x &gt;= x + 3</span> is <span class="chem">x &lt;= a</span> or <span class="chem">x &gt;= b</span>, where <span class="chem">a &lt; 0 &lt; b</span>. Find the value of <span class="chem">b</span>.</p>
      stem: "<p>不等式 <span class=\"chem\">2^x &gt;= x + 3</span> の解は <span class=\"chem\">x &lt;= a</span> または <span class=\"chem\">x &gt;= b</span> である。ただし <span class=\"chem\">a &lt; 0 &lt; b</span>。<span class=\"chem\">b</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: There is no algebraic method for an equation mixing <span class="chem">2^x</span> and <span class="chem">x</span>: graph <span class="chem">Y_1 = 2^x</span> and <span class="chem">Y_2 = x + 3</span>.
        "<span class=\"chem\">2^x</span> と <span class=\"chem\">x</span> が混在する方程式には代数的な解法がありません：<span class=\"chem\">Y_1 = 2^x</span> と <span class=\"chem\">Y_2 = x + 3</span> のグラフをかきます。",
        // EN: The curve is above the line to the left of the negative intersection and to the right of the positive one. Find the positive intersection.
        "曲線は、負の交点より左と正の交点より右で直線より上にあります。正の交点を求めます。",
      ],
      // EN: <p>The GDC gives intersections at <span class="chem">x ≈ -2.86</span> and <span class="chem">x ≈ 2.44</span>. The exponential curve is on or above the line for <span class="chem">x &lt;= -2.86</span> and for <span class="chem">x &gt;= 2.44</span>, so <span class="chem">b ≈ 2.44</span>.</p>
      solution: "<p>GDC により交点 <span class=\"chem\">x ≈ -2.86</span> と <span class=\"chem\">x ≈ 2.44</span> が得られます。指数関数の曲線は <span class=\"chem\">x &lt;= -2.86</span> と <span class=\"chem\">x &gt;= 2.44</span> で直線上またはそれより上にあるので、<span class=\"chem\">b ≈ 2.44</span> です。</p>",
    },

    // ── t2-3-q032 · short · exam · AHL · AHL 2.15 · 4 marks
    "t2-3-q032": {
      // EN: <p>Solve the inequality <span class="chem">x^4 - 4x^2 + x + 1 &lt; 0</span>. Give the end points of your intervals correct to 3 significant figures.</p>
      stem: "<p>不等式 <span class=\"chem\">x^4 - 4x^2 + x + 1 &lt; 0</span> を解きなさい。区間の端点は有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: A quartic with positive leading coefficient is positive at both ends, so it is negative between the 1st and 2nd zeros and between the 3rd and 4th.
        "最高次の係数が正の 4 次関数は両端で正なので、1 番目と 2 番目の零点の間、および 3 番目と 4 番目の零点の間で負になります。",
        // EN: Use the zero tool four times; a window <span class="chem">-3 &lt;= x &lt;= 3</span> works.
        "zero 機能を 4 回使います。表示範囲は <span class=\"chem\">-3 &lt;= x &lt;= 3</span> で十分です。",
      ],
      // EN: <p>The GDC gives zeros <span class="chem">x ≈ -2.0615</span>, <span class="chem">-0.39634</span>, <span class="chem">0.69382</span>, <span class="chem">1.7640</span>. The graph is below the <span class="chem">x</span>-axis between the first and second and between the third and fourth zeros: <span class="chem">-2.06 &lt; x &lt; -0.396</span> or <span class="chem">0.694 &lt; x &lt; 1.76</span>.</p>
      solution: "<p>GDC により零点 <span class=\"chem\">x ≈ -2.0615</span>、<span class=\"chem\">-0.39634</span>、<span class=\"chem\">0.69382</span>、<span class=\"chem\">1.7640</span> が得られます。グラフが <span class=\"chem\">x</span> 軸より下にあるのは、1 番目と 2 番目の零点の間、および 3 番目と 4 番目の零点の間です：<span class=\"chem\">-2.06 &lt; x &lt; -0.396</span> または <span class=\"chem\">0.694 &lt; x &lt; 1.76</span>。</p>",
      // EN: <p><span class="chem">-2.06 &lt; x &lt; -0.396</span> or <span class="chem">0.694 &lt; x &lt; 1.76</span></p>
      answer: "<p><span class=\"chem\">-2.06 &lt; x &lt; -0.396</span> または <span class=\"chem\">0.694 &lt; x &lt; 1.76</span></p>",
      markscheme: [
        // EN: M1: graphs <span class="chem">y = x^4 - 4x^2 + x + 1</span> and finds its zeros.
        "M1：<span class=\"chem\">y = x^4 - 4x^2 + x + 1</span> のグラフをかき、零点を求める。",
        // EN: A1: zeros <span class="chem">-2.06, -0.396, 0.694, 1.76</span>.
        "A1：零点 <span class=\"chem\">-2.06, -0.396, 0.694, 1.76</span>。",
        // EN: A1: <span class="chem">-2.06 &lt; x &lt; -0.396</span>.
        "A1：<span class=\"chem\">-2.06 &lt; x &lt; -0.396</span>。",
        // EN: A1: <span class="chem">0.694 &lt; x &lt; 1.76</span> (strict inequalities, both intervals).
        "A1：<span class=\"chem\">0.694 &lt; x &lt; 1.76</span>（等号を含まない不等号で、2 つの区間とも）。",
      ],
    },

    // ── t2-3-q033 · numeric · challenge · AHL · AHL 2.12, 2.15 · 5 marks
    "t2-3-q033": {
      // EN: <p>A small factory makes <span class="chem">x</span> batches of a product each week, where <span class="chem">x</span> is a whole number with <span class="chem">0 &lt;= x &lt;= 12</span>. Its weekly profit, in thousands of dollars, is modelled by <span class="chem">P(x) = -0.5x^3 + 6x^2 + 4x - 40</span>.</p><p>The owners want a weekly profit of more than <span class="chem">50</span> thousand dollars. Find how many different weekly production levels meet this target.</p>
      stem: "<p>ある小さな工場では毎週 <span class=\"chem\">x</span> バッチの製品を作る。ここで <span class=\"chem\">x</span> は <span class=\"chem\">0 &lt;= x &lt;= 12</span> を満たす整数である。週あたりの利益（単位：千ドル）は <span class=\"chem\">P(x) = -0.5x^3 + 6x^2 + 4x - 40</span> でモデル化される。</p><p>経営者は週あたりの利益を <span class=\"chem\">50</span> 千ドルより大きくしたいと考えている。この目標を満たす週あたりの生産量は何通りあるか求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: this is the cubic inequality <span class="chem">P(x) &gt; 50</span>, but the answer is a <strong>count of whole numbers</strong> in <span class="chem">0 &lt;= x &lt;= 12</span>, not an interval.
        "解読：これは 3 次不等式 <span class=\"chem\">P(x) &gt; 50</span> ですが、答えは区間ではなく <span class=\"chem\">0 &lt;= x &lt;= 12</span> にある<strong>整数の個数</strong>です。",
        // EN: Graph <span class="chem">Y_1 = -0.5x^3 + 6x^2 + 4x - 40</span> and <span class="chem">Y_2 = 50</span> on <span class="chem">0 &lt;= x &lt;= 12</span> and find where they meet.
        "<span class=\"chem\">0 &lt;= x &lt;= 12</span> で <span class=\"chem\">Y_1 = -0.5x^3 + 6x^2 + 4x - 40</span> と <span class=\"chem\">Y_2 = 50</span> のグラフをかき、交点を求めます。",
        // EN: List the integers strictly between the two intersection values (or check them in a table of values).
        "2 つの交点の値の間にある（両端を含まない）整数を列挙します（または値の表で確かめます）。",
      ],
      // EN: <p><strong>Decode.</strong> Solve <span class="chem">P(x) &gt; 50</span>, then count the whole numbers that satisfy it.</p><p>On the GDC, <span class="chem">P(x) = 50</span> at <span class="chem">x ≈ 4.36</span> and <span class="chem">x ≈ 11.3</span> in the domain (the third root, <span class="chem">-3.66</span>, is outside it). <span class="chem">P(x) &gt; 50</span> for <span class="chem">4.36 &lt; x &lt; 11.3</span>, so <span class="chem">x = 5, 6, 7, 8, 9, 10, 11</span>. A table confirms <span class="chem">P(4) = 40</span>, <span class="chem">P(5) = 67.5</span>, <span class="chem">P(11) = 64.5</span>, <span class="chem">P(12) = 8</span>. There are <span class="chem">7</span> production levels.</p>
      solution: "<p><strong>解読。</strong><span class=\"chem\">P(x) &gt; 50</span> を解き、それを満たす整数を数えます。</p><p>GDC では、定義域内で <span class=\"chem\">P(x) = 50</span> となるのは <span class=\"chem\">x ≈ 4.36</span> と <span class=\"chem\">x ≈ 11.3</span> です（3 つ目の解 <span class=\"chem\">-3.66</span> は定義域の外です）。<span class=\"chem\">4.36 &lt; x &lt; 11.3</span> で <span class=\"chem\">P(x) &gt; 50</span> なので <span class=\"chem\">x = 5, 6, 7, 8, 9, 10, 11</span> です。表で <span class=\"chem\">P(4) = 40</span>、<span class=\"chem\">P(5) = 67.5</span>、<span class=\"chem\">P(11) = 64.5</span>、<span class=\"chem\">P(12) = 8</span> を確かめられます。生産量は <span class=\"chem\">7</span> 通りです。</p>",
    },

    // ── t2-3-q034 · short · exam · AHL · AHL 2.15 · 4 marks
    "t2-3-q034": {
      // EN: <p>Let <span class="chem">f(x) = x^2 - 2</span> and <span class="chem">g(x) = ln(x + 3)</span>, <span class="chem">x &gt; -3</span>. Solve <span class="chem">g(x) &gt;= f(x)</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = x^2 - 2</span> と <span class=\"chem\">g(x) = ln(x + 3)</span>, <span class=\"chem\">x &gt; -3</span> とする。<span class=\"chem\">g(x) &gt;= f(x)</span> を解きなさい。</p>",
      hints: [
        // EN: Decode: "<span class="chem">g(x) &gt;= f(x)</span>" means "where is the graph of <span class="chem">g</span> on or above the graph of <span class="chem">f</span>?"
        "解読：「<span class=\"chem\">g(x) &gt;= f(x)</span>」は「<span class=\"chem\">g</span> のグラフが <span class=\"chem\">f</span> のグラフ上またはそれより上にあるのはどこか？」という意味です。",
        // EN: Graph both, find the two intersections, and read off the interval between them.
        "両方のグラフをかいて 2 つの交点を求め、その間の区間を読み取ります。",
      ],
      // EN: <p>The GDC gives intersections at <span class="chem">x ≈ -1.5418</span> and <span class="chem">x ≈ 1.8942</span>. Between them the logarithm curve is above the parabola, so <span class="chem">-1.54 &lt;= x &lt;= 1.89</span>. This interval lies inside the domain <span class="chem">x &gt; -3</span>.</p>
      solution: "<p>GDC により交点 <span class=\"chem\">x ≈ -1.5418</span> と <span class=\"chem\">x ≈ 1.8942</span> が得られます。その間では対数関数の曲線が放物線より上にあるので <span class=\"chem\">-1.54 &lt;= x &lt;= 1.89</span> です。この区間は定義域 <span class=\"chem\">x &gt; -3</span> に含まれます。</p>",
      // EN: <p><span class="chem">-1.54 &lt;= x &lt;= 1.89</span></p>
      answer: "<p><span class=\"chem\">-1.54 &lt;= x &lt;= 1.89</span></p>",
      markscheme: [
        // EN: M1: graphs <span class="chem">y = ln(x + 3)</span> and <span class="chem">y = x^2 - 2</span> (or <span class="chem">y = ln(x + 3) - x^2 + 2</span>).
        "M1：<span class=\"chem\">y = ln(x + 3)</span> と <span class=\"chem\">y = x^2 - 2</span> のグラフをかく（または <span class=\"chem\">y = ln(x + 3) - x^2 + 2</span>）。",
        // EN: A1: intersection <span class="chem">x = -1.54</span>.
        "A1：交点 <span class=\"chem\">x = -1.54</span>。",
        // EN: A1: intersection <span class="chem">x = 1.89</span>.
        "A1：交点 <span class=\"chem\">x = 1.89</span>。",
        // EN: A1: <span class="chem">-1.54 &lt;= x &lt;= 1.89</span> (inclusive end points).
        "A1：<span class=\"chem\">-1.54 &lt;= x &lt;= 1.89</span>（端点を含む）。",
      ],
    },

    // ── t2-3-q035 · numeric · exam · AHL · AHL 2.16 · 4 marks
    "t2-3-q035": {
      // EN: <p>The solution of the inequality <span class="chem">|e^x - 4| &lt; 2x</span> is <span class="chem">a &lt; x &lt; b</span>. Find the value of <span class="chem">a</span>.</p>
      stem: "<p>不等式 <span class=\"chem\">|e^x - 4| &lt; 2x</span> の解は <span class=\"chem\">a &lt; x &lt; b</span> である。<span class=\"chem\">a</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Graph <span class="chem">Y_1 = abs(e^x - 4)</span> and <span class="chem">Y_2 = 2x</span>. The solution is where the V-shaped curve is <strong>below</strong> the line.
        "<span class=\"chem\">Y_1 = abs(e^x - 4)</span> と <span class=\"chem\">Y_2 = 2x</span> のグラフをかきます。解は V 字形の曲線が直線より<strong>下</strong>にある範囲です。",
        // EN: The left end point <span class="chem">a</span> is on the reflected part, where <span class="chem">e^x &lt; 4</span>, so it solves <span class="chem">4 - e^x = 2x</span>.
        "左の端点 <span class=\"chem\">a</span> は <span class=\"chem\">e^x &lt; 4</span> となる折り返された部分にあるので、<span class=\"chem\">4 - e^x = 2x</span> の解です。",
      ],
      // EN: <p>The graphs meet at <span class="chem">x ≈ 0.841</span> (where <span class="chem">4 - e^x = 2x</span>) and <span class="chem">x ≈ 2.11</span> (where <span class="chem">e^x - 4 = 2x</span>). The modulus graph is below the line between them, so <span class="chem">a ≈ 0.841</span> and <span class="chem">b ≈ 2.11</span>. For <span class="chem">x &lt;= 0</span> the right-hand side is not positive, so there are no other solutions.</p>
      solution: "<p>グラフは <span class=\"chem\">x ≈ 0.841</span>（<span class=\"chem\">4 - e^x = 2x</span> となる点）と <span class=\"chem\">x ≈ 2.11</span>（<span class=\"chem\">e^x - 4 = 2x</span> となる点）で交わります。絶対値のグラフはその間で直線より下にあるので、<span class=\"chem\">a ≈ 0.841</span>、<span class=\"chem\">b ≈ 2.11</span> です。<span class=\"chem\">x &lt;= 0</span> では右辺が正でないので、ほかに解はありません。</p>",
    },

    // ── t2-3-q036 · short · exam · AHL · AHL 2.16 · 6 marks
    "t2-3-q036": {
      // EN: <p>Solve the inequality <span class="chem">|x^3 - 4x| &gt;= 2</span>. Give the end points of your intervals correct to 3 significant figures.</p>
      stem: "<p>不等式 <span class=\"chem\">|x^3 - 4x| &gt;= 2</span> を解きなさい。区間の端点は有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: <span class="chem">|A| &gt;= 2</span> means <span class="chem">A &gt;= 2</span> or <span class="chem">A &lt;= -2</span>. Each gives a cubic equation with three GDC roots.
        "<span class=\"chem\">|A| &gt;= 2</span> は <span class=\"chem\">A &gt;= 2</span> または <span class=\"chem\">A &lt;= -2</span> という意味です。どちらも GDC で 3 つの解をもつ 3 次方程式になります。",
        // EN: <span class="chem">x^3 - 4x</span> is odd, so the six critical values come in pairs <span class="chem">+-c</span>. Graph <span class="chem">y = abs(x^3 - 4x)</span> and <span class="chem">y = 2</span> to see which pieces lie above the line.
        "<span class=\"chem\">x^3 - 4x</span> は奇関数なので、6 つの境界値は <span class=\"chem\">+-c</span> の組になります。<span class=\"chem\">y = abs(x^3 - 4x)</span> と <span class=\"chem\">y = 2</span> のグラフをかき、どの部分が直線より上にあるかを確かめます。",
      ],
      // EN: <p><span class="chem">x^3 - 4x = 2</span> has roots <span class="chem">-1.675, -0.5392, 2.214</span>; <span class="chem">x^3 - 4x = -2</span> has roots <span class="chem">-2.214, 0.5392, 1.675</span>. The graph of <span class="chem">y = |x^3 - 4x|</span> touches <span class="chem">0</span> at <span class="chem">x = 0, +-2</span> and is on or above <span class="chem">y = 2</span> on four pieces: <span class="chem">x &lt;= -2.21</span>, <span class="chem">-1.68 &lt;= x &lt;= -0.539</span>, <span class="chem">0.539 &lt;= x &lt;= 1.68</span>, <span class="chem">x &gt;= 2.21</span>.</p>
      solution: "<p><span class=\"chem\">x^3 - 4x = 2</span> の解は <span class=\"chem\">-1.675, -0.5392, 2.214</span>、<span class=\"chem\">x^3 - 4x = -2</span> の解は <span class=\"chem\">-2.214, 0.5392, 1.675</span> です。<span class=\"chem\">y = |x^3 - 4x|</span> のグラフは <span class=\"chem\">x = 0, +-2</span> で <span class=\"chem\">0</span> に接し、4 つの部分 <span class=\"chem\">x &lt;= -2.21</span>、<span class=\"chem\">-1.68 &lt;= x &lt;= -0.539</span>、<span class=\"chem\">0.539 &lt;= x &lt;= 1.68</span>、<span class=\"chem\">x &gt;= 2.21</span> で <span class=\"chem\">y = 2</span> 上またはそれより上にあります。</p>",
      // EN: <p><span class="chem">x &lt;= -2.21</span> or <span class="chem">-1.68 &lt;= x &lt;= -0.539</span> or <span class="chem">0.539 &lt;= x &lt;= 1.68</span> or <span class="chem">x &gt;= 2.21</span></p>
      answer: "<p><span class=\"chem\">x &lt;= -2.21</span> または <span class=\"chem\">-1.68 &lt;= x &lt;= -0.539</span> または <span class=\"chem\">0.539 &lt;= x &lt;= 1.68</span> または <span class=\"chem\">x &gt;= 2.21</span></p>",
      markscheme: [
        // EN: M1: graphs <span class="chem">y = |x^3 - 4x|</span> and <span class="chem">y = 2</span> (or solves <span class="chem">x^3 - 4x = 2</span> and <span class="chem">x^3 - 4x = -2</span>).
        "M1：<span class=\"chem\">y = |x^3 - 4x|</span> と <span class=\"chem\">y = 2</span> のグラフをかく（または <span class=\"chem\">x^3 - 4x = 2</span> と <span class=\"chem\">x^3 - 4x = -2</span> を解く）。",
        // EN: A1: critical values <span class="chem">+-2.21</span>.
        "A1：境界値 <span class=\"chem\">+-2.21</span>。",
        // EN: A1: critical values <span class="chem">+-1.68</span>.
        "A1：境界値 <span class=\"chem\">+-1.68</span>。",
        // EN: A1: critical values <span class="chem">+-0.539</span>.
        "A1：境界値 <span class=\"chem\">+-0.539</span>。",
        // EN: A1: <span class="chem">x &lt;= -2.21</span> or <span class="chem">x &gt;= 2.21</span>.
        "A1：<span class=\"chem\">x &lt;= -2.21</span> または <span class=\"chem\">x &gt;= 2.21</span>。",
        // EN: A1: <span class="chem">-1.68 &lt;= x &lt;= -0.539</span> or <span class="chem">0.539 &lt;= x &lt;= 1.68</span>.
        "A1：<span class=\"chem\">-1.68 &lt;= x &lt;= -0.539</span> または <span class=\"chem\">0.539 &lt;= x &lt;= 1.68</span>。",
      ],
    },

    // ── t2-3-q037 · numeric · exam · AHL · AHL 2.16 · 3 marks
    "t2-3-q037": {
      // EN: <p>Let <span class="chem">f(x) = x^3 - 2x^2 - 4x + 6</span>. The graph of <span class="chem">y = 1/f(x)</span> has three vertical asymptotes. The equation of the one nearest to the <span class="chem">y</span>-axis is <span class="chem">x = c</span>. Find <span class="chem">c</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = x^3 - 2x^2 - 4x + 6</span> とする。<span class=\"chem\">y = 1/f(x)</span> のグラフは 3 本の鉛直漸近線をもつ。そのうち <span class=\"chem\">y</span> 軸に最も近いものの方程式は <span class=\"chem\">x = c</span> である。<span class=\"chem\">c</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: The vertical asymptotes of <span class="chem">y = 1/f(x)</span> are at the zeros of <span class="chem">f</span>.
        "<span class=\"chem\">y = 1/f(x)</span> の鉛直漸近線は <span class=\"chem\">f</span> の零点の位置にあります。",
        // EN: Find the three zeros of the cubic with the GDC and choose the one with the smallest <span class="chem">|x|</span>.
        "GDC で 3 次関数の 3 つの零点を求め、<span class=\"chem\">|x|</span> が最小のものを選びます。",
      ],
      // EN: <p>The zeros of <span class="chem">f</span> are <span class="chem">x ≈ -1.87</span>, <span class="chem">1.21</span> and <span class="chem">2.66</span>, so <span class="chem">1/f</span> has vertical asymptotes there. The nearest to the <span class="chem">y</span>-axis is <span class="chem">x ≈ 1.21</span>.</p>
      solution: "<p><span class=\"chem\">f</span> の零点は <span class=\"chem\">x ≈ -1.87</span>、<span class=\"chem\">1.21</span>、<span class=\"chem\">2.66</span> なので、<span class=\"chem\">1/f</span> はそこに鉛直漸近線をもちます。<span class=\"chem\">y</span> 軸に最も近いのは <span class=\"chem\">x ≈ 1.21</span> です。</p>",
    },

    // ── t2-3-q038 · short · challenge · AHL · AHL 2.16 · 6 marks
    "t2-3-q038": {
      // EN: <p>Let <span class="chem">f(x) = x^3 - 4x^2 + 3x + 1</span>.</p><p>(a) Find the coordinates of the local maximum and local minimum points of the graph of <span class="chem">y = f(x)</span>. <strong>[2 marks]</strong></p><p>(b) Sketch the graph of <span class="chem">y = f(|x|)</span> for <span class="chem">-4 &lt;= x &lt;= 4</span>. <strong>[2 marks]</strong></p><p>(c) Find the set of values of <span class="chem">k</span> for which the equation <span class="chem">f(|x|) = k</span> has exactly six solutions. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = x^3 - 4x^2 + 3x + 1</span> とする。</p><p>(a) <span class=\"chem\">y = f(x)</span> のグラフの極大点と極小点の座標を求めなさい (Find)。<strong>[2 marks]</strong></p><p>(b) <span class=\"chem\">-4 &lt;= x &lt;= 4</span> の範囲で <span class=\"chem\">y = f(|x|)</span> のグラフの概形を描きなさい (Sketch)。<strong>[2 marks]</strong></p><p>(c) 方程式 <span class=\"chem\">f(|x|) = k</span> がちょうど 6 つの解をもつような <span class=\"chem\">k</span> の値の集合を求めなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: "exactly six solutions" means a horizontal line <span class="chem">y = k</span> meets the graph of <span class="chem">y = f(|x|)</span> six times. Because the graph is symmetric, count the meetings with the right half (<span class="chem">x &gt; 0</span>) and double.
        "解読：「ちょうど 6 つの解」とは、水平線 <span class=\"chem\">y = k</span> が <span class=\"chem\">y = f(|x|)</span> のグラフと 6 回交わるということです。グラフは対称なので、右半分（<span class=\"chem\">x &gt; 0</span>）との交点を数えて 2 倍します。",
        // EN: <span class="chem">f(|x|)</span> uses only the part of <span class="chem">f</span> with <span class="chem">x &gt;= 0</span>, then mirrors it. That part starts at <span class="chem">(0, 1)</span>, rises to the maximum, falls to the minimum, then rises again.
        "<span class=\"chem\">f(|x|)</span> は <span class=\"chem\">f</span> の <span class=\"chem\">x &gt;= 0</span> の部分だけを使い、それを折り返したものです。その部分は <span class=\"chem\">(0, 1)</span> から始まり、極大点まで上がり、極小点まで下がり、また上がります。",
        // EN: Three meetings on <span class="chem">x &gt; 0</span> need the line above the starting value <span class="chem">1</span> but below the maximum. What happens when <span class="chem">k = 1</span> exactly?
        "<span class=\"chem\">x &gt; 0</span> で 3 回交わるには、直線が始点の値 <span class=\"chem\">1</span> より上で、極大値より下にある必要があります。<span class=\"chem\">k = 1</span> ちょうどのときはどうなりますか？",
      ],
      // EN: <p><strong>Decode.</strong> Count intersections of <span class="chem">y = k</span> with a graph that is symmetric about the <span class="chem">y</span>-axis.</p><p>(a) GDC: maximum <span class="chem">(0.451, 1.63)</span>, minimum <span class="chem">(2.22, -1.11)</span>.</p><p>(b) For <span class="chem">x &gt;= 0</span>, <span class="chem">f(|x|) = f(x)</span>; reflect this half in the <span class="chem">y</span>-axis.</p><p>(c) On <span class="chem">x &gt; 0</span> the curve goes from <span class="chem">1</span> up to <span class="chem">1.63</span>, down to <span class="chem">-1.11</span>, then up without bound. A line <span class="chem">y = k</span> meets it three times exactly when <span class="chem">1 &lt; k &lt; 1.63</span>, giving six solutions in total. At <span class="chem">k = 1</span> the solution <span class="chem">x = 0</span> is shared by both halves, giving only five.</p>
      solution: "<p><strong>解読。</strong><span class=\"chem\">y</span> 軸に関して対称なグラフと <span class=\"chem\">y = k</span> の交点を数えます。</p><p>(a) GDC：極大点 <span class=\"chem\">(0.451, 1.63)</span>、極小点 <span class=\"chem\">(2.22, -1.11)</span>。</p><p>(b) <span class=\"chem\">x &gt;= 0</span> では <span class=\"chem\">f(|x|) = f(x)</span> です。この半分を <span class=\"chem\">y</span> 軸に関して対称移動します。</p><p>(c) <span class=\"chem\">x &gt; 0</span> では、曲線は <span class=\"chem\">1</span> から <span class=\"chem\">1.63</span> まで上がり、<span class=\"chem\">-1.11</span> まで下がり、その後限りなく上がります。直線 <span class=\"chem\">y = k</span> がこれとちょうど 3 回交わるのは <span class=\"chem\">1 &lt; k &lt; 1.63</span> のときであり、全部で 6 つの解になります。<span class=\"chem\">k = 1</span> のときは解 <span class=\"chem\">x = 0</span> が両方の半分に共通なので、解は 5 つだけです。</p>",
      // EN: <p>(a) Maximum <span class="chem">(0.451, 1.63)</span>, minimum <span class="chem">(2.22, -1.11)</span>. (b) Keep the part of <span class="chem">y = f(x)</span> for <span class="chem">x &gt;= 0</span> (starting at <span class="chem">(0, 1)</span>) and reflect it in the <span class="chem">y</span>-axis; the graph is symmetric, with maxima at <span class="chem">(+-0.451, 1.63)</span>, minima at <span class="chem">(+-2.22, -1.11)</span> and a sharp point at <span class="chem">(0, 1)</span>. (c) <span class="chem">1 &lt; k &lt; 1.63</span>.</p>
      answer: "<p>(a) 極大点 <span class=\"chem\">(0.451, 1.63)</span>、極小点 <span class=\"chem\">(2.22, -1.11)</span>。(b) <span class=\"chem\">x &gt;= 0</span> における <span class=\"chem\">y = f(x)</span> の部分（<span class=\"chem\">(0, 1)</span> から始まる）を残し、それを <span class=\"chem\">y</span> 軸に関して対称移動する。グラフは対称で、極大点は <span class=\"chem\">(+-0.451, 1.63)</span>、極小点は <span class=\"chem\">(+-2.22, -1.11)</span>、<span class=\"chem\">(0, 1)</span> でとがった点になる。(c) <span class=\"chem\">1 &lt; k &lt; 1.63</span>。</p>",
      markscheme: [
        // EN: A1: (a) maximum <span class="chem">(0.451, 1.63)</span>.
        "A1：(a) 極大点 <span class=\"chem\">(0.451, 1.63)</span>。",
        // EN: A1: (a) minimum <span class="chem">(2.22, -1.11)</span>.
        "A1：(a) 極小点 <span class=\"chem\">(2.22, -1.11)</span>。",
        // EN: A1: (b) right-hand half is <span class="chem">y = f(x)</span> for <span class="chem">x &gt;= 0</span>, through <span class="chem">(0, 1)</span>, with the turning points from (a).
        "A1：(b) 右半分は <span class=\"chem\">x &gt;= 0</span> における <span class=\"chem\">y = f(x)</span> で、<span class=\"chem\">(0, 1)</span> を通り、(a) の極値をもつ。",
        // EN: A1: (b) left-hand half is its reflection in the <span class="chem">y</span>-axis (symmetric graph, local minimum point at <span class="chem">(0, 1)</span>).
        "A1：(b) 左半分はそれを <span class=\"chem\">y</span> 軸に関して対称移動したもの（対称なグラフ、極小点 <span class=\"chem\">(0, 1)</span>）。",
        // EN: R1: (c) a horizontal line <span class="chem">y = k</span> must cut each half three times, which needs it strictly above <span class="chem">f(0) = 1</span> and strictly below the maximum.
        "R1：(c) 水平線 <span class=\"chem\">y = k</span> はそれぞれの半分と 3 回交わる必要があり、そのためには <span class=\"chem\">f(0) = 1</span> より真に上で、極大値より真に下でなければならない。",
        // EN: A1: (c) <span class="chem">1 &lt; k &lt; 1.63</span>.
        "A1：(c) <span class=\"chem\">1 &lt; k &lt; 1.63</span>。",
      ],
    },

    // ── t2-3-q039 · short · challenge · AHL · SL 2.11, AHL 2.12, 2.15 · 15 marks
    "t2-3-q039": {
      // EN: <p>The cross-section of a hill is modelled by <span class="chem">h(x) = 0.004x(30 - x)(x + 10)</span>, <span class="chem">0 &lt;= x &lt;= 30</span>, where <span class="chem">x</span> is the horizontal distance in metres from the western foot of the hill and <span class="chem">h(x)</span> is the height in metres.</p><p>(a) Find the greatest height of the hill and the horizontal distance at which it occurs. <strong>[3 marks]</strong></p><p>(b) A footpath is to be built along the part of the hill that is at least <span class="chem">15</span> m high. Find the horizontal length of this part. <strong>[4 marks]</strong></p><p>A landscape architect redesigns the hill. The new cross-section is <span class="chem">g(x) = h(x/1.2) - 3</span>, <span class="chem">0 &lt;= x &lt;= 36</span>, where height is still measured from the original ground level.</p><p>(c) Describe fully the two transformations that map the graph of <span class="chem">h</span> onto the graph of <span class="chem">g</span>. <strong>[2 marks]</strong></p><p>(d) Write down the coordinates of the highest point of the new hill. <strong>[2 marks]</strong></p><p>(e) Find the horizontal distance between the two points at which the new hill meets the original ground level (<span class="chem">g(x) = 0</span>). <strong>[4 marks]</strong></p>
      stem: "<p>ある丘の断面が <span class=\"chem\">h(x) = 0.004x(30 - x)(x + 10)</span>, <span class=\"chem\">0 &lt;= x &lt;= 30</span> でモデル化されている。ここで <span class=\"chem\">x</span> は丘の西側のふもとからの水平距離（m）、<span class=\"chem\">h(x)</span> は高さ（m）である。</p><p>(a) 丘の最大の高さと、それが生じる水平距離を求めなさい (Find)。<strong>[3 marks]</strong></p><p>(b) 丘のうち高さが <span class=\"chem\">15</span> m 以上の部分に沿って遊歩道を作る。この部分の水平方向の長さを求めなさい。<strong>[4 marks]</strong></p><p>景観設計者が丘を設計し直す。新しい断面は <span class=\"chem\">g(x) = h(x/1.2) - 3</span>, <span class=\"chem\">0 &lt;= x &lt;= 36</span> であり、高さは元の地面から測る。</p><p>(c) <span class=\"chem\">h</span> のグラフを <span class=\"chem\">g</span> のグラフに移す 2 つの変換を完全に説明しなさい (Describe)。<strong>[2 marks]</strong></p><p>(d) 新しい丘の最も高い点の座標を書きなさい (Write down)。<strong>[2 marks]</strong></p><p>(e) 新しい丘が元の地面（<span class=\"chem\">g(x) = 0</span>）と交わる 2 点の間の水平距離を求めなさい。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: (b) "at least 15 m high" is the inequality <span class="chem">h(x) &gt;= 15</span>, and "horizontal length" is the difference of the two end points. In (c)–(e), the new hill is a transformed copy, so turning points move with the transformation.
        "解読：(b) の「高さが 15 m 以上」は不等式 <span class=\"chem\">h(x) &gt;= 15</span> であり、「水平方向の長さ」は 2 つの端点の差です。(c)〜(e) では新しい丘は変換されたコピーなので、極値は変換に従って移動します。",
        // EN: Enter <span class="chem">Y_1 = 0.004x(30 - x)(x + 10)</span> with window <span class="chem">0 &lt;= x &lt;= 36</span>, <span class="chem">-5 &lt;= y &lt;= 30</span>. Use maximum, then intersect with <span class="chem">Y_2 = 15</span>.
        "表示範囲 <span class=\"chem\">0 &lt;= x &lt;= 36</span>、<span class=\"chem\">-5 &lt;= y &lt;= 30</span> で <span class=\"chem\">Y_1 = 0.004x(30 - x)(x + 10)</span> を入力します。maximum 機能を使い、次に <span class=\"chem\">Y_2 = 15</span> との交点を求めます。",
        // EN: <span class="chem">h(x/1.2)</span> stretches horizontally by <span class="chem">1.2</span>; <span class="chem">-3</span> moves down. So the peak <span class="chem">(18.7, 24.3)</span> moves to <span class="chem">(1.2 × 18.7, 24.3 - 3)</span>.
        "<span class=\"chem\">h(x/1.2)</span> は横方向に <span class=\"chem\">1.2</span> 倍の拡大、<span class=\"chem\">-3</span> は下への移動です。よって頂点 <span class=\"chem\">(18.7, 24.3)</span> は <span class=\"chem\">(1.2 × 18.7, 24.3 - 3)</span> に移ります。",
        // EN: For (e), graph <span class="chem">Y_3 = 0.004(x/1.2)(30 - x/1.2)(x/1.2 + 10) - 3</span> and find its zeros in <span class="chem">0 &lt;= x &lt;= 36</span>.
        "(e) では <span class=\"chem\">Y_3 = 0.004(x/1.2)(30 - x/1.2)(x/1.2 + 10) - 3</span> のグラフをかき、<span class=\"chem\">0 &lt;= x &lt;= 36</span> における零点を求めます。",
      ],
      // EN: <p><strong>Decode.</strong> (b) and (e) are inequality/equation questions about a cubic, solved on the GDC and restricted to the domain. (c) and (d) are transformation questions: track the peak.</p><p>(a) The GDC maximum on <span class="chem">0 &lt;= x &lt;= 30</span> is at <span class="chem">(18.685, 24.258)</span>: height <span class="chem">24.3</span> m at <span class="chem">x = 18.7</span> m.</p><p>(b) <span class="chem">h(x) = 15</span> at <span class="chem">x ≈ 9.384</span> and <span class="chem">x ≈ 25.99</span> (the root <span class="chem">-15.4</span> is outside the domain). The hill is at least <span class="chem">15</span> m high for <span class="chem">9.38 &lt;= x &lt;= 26.0</span>, a length of <span class="chem">16.6</span> m.</p><p>(c) <span class="chem">x -&gt; x/1.2</span>: horizontal stretch with scale factor <span class="chem">1.2</span>; <span class="chem">-3</span>: translation <span class="chem">3</span> units down.</p><p>(d) <span class="chem">(1.2 × 18.685, 24.258 - 3) = (22.4, 21.3)</span>.</p><p>(e) <span class="chem">g(x) = 0</span> at <span class="chem">x ≈ 2.652</span> and <span class="chem">x ≈ 35.22</span>, so the distance is <span class="chem">32.6</span> m. (Check: these are <span class="chem">1.2</span> times the solutions of <span class="chem">h(x) = 3</span>.)</p>
      solution: "<p><strong>解読。</strong>(b) と (e) は 3 次関数についての不等式・方程式の問題で、GDC で解き、定義域に制限します。(c) と (d) は変換の問題で、頂点を追跡します。</p><p>(a) <span class=\"chem\">0 &lt;= x &lt;= 30</span> における GDC の最大値は <span class=\"chem\">(18.685, 24.258)</span> です：<span class=\"chem\">x = 18.7</span> m で高さ <span class=\"chem\">24.3</span> m。</p><p>(b) <span class=\"chem\">h(x) = 15</span> となるのは <span class=\"chem\">x ≈ 9.384</span> と <span class=\"chem\">x ≈ 25.99</span> です（解 <span class=\"chem\">-15.4</span> は定義域の外です）。丘の高さが <span class=\"chem\">15</span> m 以上なのは <span class=\"chem\">9.38 &lt;= x &lt;= 26.0</span> のときで、長さは <span class=\"chem\">16.6</span> m です。</p><p>(c) <span class=\"chem\">x -&gt; x/1.2</span>：倍率 <span class=\"chem\">1.2</span> の横方向の拡大。<span class=\"chem\">-3</span>：下へ <span class=\"chem\">3</span> の平行移動。</p><p>(d) <span class=\"chem\">(1.2 × 18.685, 24.258 - 3) = (22.4, 21.3)</span>。</p><p>(e) <span class=\"chem\">g(x) = 0</span> となるのは <span class=\"chem\">x ≈ 2.652</span> と <span class=\"chem\">x ≈ 35.22</span> なので、距離は <span class=\"chem\">32.6</span> m です。（確認：これらは <span class=\"chem\">h(x) = 3</span> の解の <span class=\"chem\">1.2</span> 倍です。）</p>",
      // EN: <p>(a) <span class="chem">24.3</span> m at <span class="chem">x = 18.7</span> m. (b) <span class="chem">h(x) &gt;= 15</span> for <span class="chem">9.38 &lt;= x &lt;= 26.0</span>; length <span class="chem">16.6</span> m. (c) Horizontal stretch with scale factor <span class="chem">1.2</span> (parallel to the <span class="chem">x</span>-axis), then translation <span class="chem">3</span> units down. (d) <span class="chem">(22.4, 21.3)</span>. (e) <span class="chem">g(x) = 0</span> at <span class="chem">x = 2.65</span> and <span class="chem">x = 35.2</span>; distance <span class="chem">32.6</span> m.</p>
      answer: "<p>(a) <span class=\"chem\">x = 18.7</span> m で <span class=\"chem\">24.3</span> m。(b) <span class=\"chem\">9.38 &lt;= x &lt;= 26.0</span> で <span class=\"chem\">h(x) &gt;= 15</span>、長さ <span class=\"chem\">16.6</span> m。(c) 倍率 <span class=\"chem\">1.2</span> の横方向の拡大（<span class=\"chem\">x</span> 軸に平行）、続けて下へ <span class=\"chem\">3</span> の平行移動。(d) <span class=\"chem\">(22.4, 21.3)</span>。(e) <span class=\"chem\">x = 2.65</span> と <span class=\"chem\">x = 35.2</span> で <span class=\"chem\">g(x) = 0</span>、距離 <span class=\"chem\">32.6</span> m。</p>",
      markscheme: [
        // EN: M1: (a) uses the GDC maximum on <span class="chem">0 &lt;= x &lt;= 30</span>.
        "M1：(a) <span class=\"chem\">0 &lt;= x &lt;= 30</span> で GDC の maximum 機能を使う。",
        // EN: A1: (a) greatest height <span class="chem">24.3</span> m.
        "A1：(a) 最大の高さ <span class=\"chem\">24.3</span> m。",
        // EN: A1: (a) at <span class="chem">x = 18.7</span> m.
        "A1：(a) 水平距離 <span class=\"chem\">x = 18.7</span> m。",
        // EN: M1: (b) sets up <span class="chem">h(x) &gt;= 15</span> (or <span class="chem">h(x) = 15</span>).
        "M1：(b) <span class=\"chem\">h(x) &gt;= 15</span>（または <span class=\"chem\">h(x) = 15</span>）を立てる。",
        // EN: A1: (b) <span class="chem">x = 9.38</span>.
        "A1：(b) <span class=\"chem\">x = 9.38</span>。",
        // EN: A1: (b) <span class="chem">x = 26.0</span> (rejecting the negative root <span class="chem">-15.4</span>).
        "A1：(b) <span class=\"chem\">x = 26.0</span>（負の解 <span class=\"chem\">-15.4</span> を除外する）。",
        // EN: A1: (b) length <span class="chem">26.0 - 9.38 = 16.6</span> m.
        "A1：(b) 長さ <span class=\"chem\">26.0 - 9.38 = 16.6</span> m。",
        // EN: A1: (c) horizontal stretch, scale factor <span class="chem">1.2</span>.
        "A1：(c) 横方向の拡大、倍率 <span class=\"chem\">1.2</span>。",
        // EN: A1: (c) vertical translation of <span class="chem">3</span> units down.
        "A1：(c) 下へ <span class=\"chem\">3</span> の縦方向の平行移動。",
        // EN: A1: (d) <span class="chem">x = 1.2 × 18.7 = 22.4</span>.
        "A1：(d) <span class=\"chem\">x = 1.2 × 18.7 = 22.4</span>。",
        // EN: A1: (d) <span class="chem">y = 24.3 - 3 = 21.3</span>.
        "A1：(d) <span class=\"chem\">y = 24.3 - 3 = 21.3</span>。",
        // EN: M1: (e) solves <span class="chem">g(x) = 0</span>, i.e. <span class="chem">h(x/1.2) = 3</span>, on <span class="chem">0 &lt;= x &lt;= 36</span>.
        "M1：(e) <span class=\"chem\">0 &lt;= x &lt;= 36</span> で <span class=\"chem\">g(x) = 0</span>、すなわち <span class=\"chem\">h(x/1.2) = 3</span> を解く。",
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
      stem: "<p><span class=\"chem\">f(x) = x^3 - 3x</span> とする。関数 <span class=\"chem\">g</span> は <span class=\"chem\">g(x) = a f(x) + b</span> で定義される。ここで <span class=\"chem\">a</span> と <span class=\"chem\">b</span> は定数である。<span class=\"chem\">g</span> の値の表には <span class=\"chem\">g(1) = 1</span> と <span class=\"chem\">g(2) = 13</span> が含まれる。</p><p>(a) <span class=\"chem\">a</span> の値と <span class=\"chem\">b</span> の値を求めなさい (Find)。<strong>[3 marks]</strong></p><p>(b) これを用いて (Hence)、<span class=\"chem\">y = f(x)</span> のグラフを <span class=\"chem\">y = g(x)</span> のグラフに移す 2 つの変換の列を説明しなさい (Describe)。<strong>[2 marks]</strong></p><p>(c) <span class=\"chem\">y = g(x)</span> のグラフの <span class=\"chem\">x</span> 切片を求めなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Evaluate <span class="chem">f(1)</span> and <span class="chem">f(2)</span>, then use the two data values to write two simultaneous equations in <span class="chem">a</span> and <span class="chem">b</span>.
        "<span class=\"chem\">f(1)</span> と <span class=\"chem\">f(2)</span> を計算し、2 つのデータの値から <span class=\"chem\">a</span> と <span class=\"chem\">b</span> についての連立方程式を 2 つ作ります。",
        // EN: In <span class="chem">a f(x) + b</span>, the stretch happens before the translation.
        "<span class=\"chem\">a f(x) + b</span> では、拡大が平行移動より先に行われます。",
        // EN: <span class="chem">g(x) = 3x^3 - 9x + 7</span> has only one real zero; find it with the GDC.
        "<span class=\"chem\">g(x) = 3x^3 - 9x + 7</span> は実数の零点を 1 つしかもちません。GDC で求めます。",
      ],
      // EN: <p>(a) <span class="chem">f(1) = -2</span> and <span class="chem">f(2) = 2</span>, so <span class="chem">-2a + b = 1</span> and <span class="chem">2a + b = 13</span>. Subtracting: <span class="chem">4a = 12</span>, so <span class="chem">a = 3</span> and <span class="chem">b = 7</span>.</p><p>(b) Vertical stretch with scale factor <span class="chem">3</span>, then translation of <span class="chem">7</span> units up. (In the other order the translation would have to be <span class="chem">7/3</span> units.)</p><p>(c) <span class="chem">g(x) = 3x^3 - 9x + 7 = 0</span> has one real root, <span class="chem">x ≈ -2.04</span> (the local minimum of <span class="chem">g</span>, at <span class="chem">(1, 1)</span>, is above the axis).</p>
      solution: "<p>(a) <span class=\"chem\">f(1) = -2</span>、<span class=\"chem\">f(2) = 2</span> なので <span class=\"chem\">-2a + b = 1</span>、<span class=\"chem\">2a + b = 13</span> です。辺々引くと <span class=\"chem\">4a = 12</span> なので <span class=\"chem\">a = 3</span>、<span class=\"chem\">b = 7</span> です。</p><p>(b) 倍率 <span class=\"chem\">3</span> の縦方向の拡大、続けて上へ <span class=\"chem\">7</span> の平行移動です。（逆の順序では平行移動は <span class=\"chem\">7/3</span> でなければなりません。）</p><p>(c) <span class=\"chem\">g(x) = 3x^3 - 9x + 7 = 0</span> は実数解を 1 つ <span class=\"chem\">x ≈ -2.04</span> だけもちます（<span class=\"chem\">g</span> の極小点 <span class=\"chem\">(1, 1)</span> は軸より上にあります）。</p>",
      // EN: <p>(a) <span class="chem">a = 3</span>, <span class="chem">b = 7</span>. (b) Vertical stretch with scale factor <span class="chem">3</span>, then translation <span class="chem">7</span> units up. (c) <span class="chem">x ≈ -2.04</span>.</p>
      answer: "<p>(a) <span class=\"chem\">a = 3</span>、<span class=\"chem\">b = 7</span>。(b) 倍率 <span class=\"chem\">3</span> の縦方向の拡大、続けて上へ <span class=\"chem\">7</span> の平行移動。(c) <span class=\"chem\">x ≈ -2.04</span>。</p>",
      markscheme: [
        // EN: M1: (a) uses <span class="chem">f(1) = -2</span> and <span class="chem">f(2) = 2</span> to form <span class="chem">-2a + b = 1</span> and <span class="chem">2a + b = 13</span>.
        "M1：(a) <span class=\"chem\">f(1) = -2</span> と <span class=\"chem\">f(2) = 2</span> を使って <span class=\"chem\">-2a + b = 1</span> と <span class=\"chem\">2a + b = 13</span> を作る。",
        // EN: A1: (a) <span class="chem">a = 3</span>.
        "A1：(a) <span class=\"chem\">a = 3</span>。",
        // EN: A1: (a) <span class="chem">b = 7</span>.
        "A1：(a) <span class=\"chem\">b = 7</span>。",
        // EN: A1: (b) vertical stretch, scale factor <span class="chem">3</span>.
        "A1：(b) 縦方向の拡大、倍率 <span class=\"chem\">3</span>。",
        // EN: A1: (b) followed by a vertical translation of <span class="chem">7</span> units up.
        "A1：(b) 続けて上へ <span class=\"chem\">7</span> の縦方向の平行移動。",
        // EN: M1: (c) solves <span class="chem">3x^3 - 9x + 7 = 0</span> on the GDC.
        "M1：(c) GDC で <span class=\"chem\">3x^3 - 9x + 7 = 0</span> を解く。",
        // EN: A1: (c) <span class="chem">x = -2.04</span>.
        "A1：(c) <span class=\"chem\">x = -2.04</span>。",
      ],
    },

    // ── t2-3-q041 · numeric · challenge · AHL · AHL 2.13 · 4 marks
    "t2-3-q041": {
      // EN: <p>A workshop makes <span class="chem">x</span> chairs per week. The average cost per chair, in dollars, is <span class="chem">C(x) = (0.5x^2 + 30x + 1500)/(x + 20)</span>.</p><p>Find the number of chairs per week that gives the lowest average cost per chair.</p>
      stem: "<p>ある工房では毎週 <span class=\"chem\">x</span> 脚の椅子を作る。椅子 1 脚あたりの平均費用（ドル）は <span class=\"chem\">C(x) = (0.5x^2 + 30x + 1500)/(x + 20)</span> である。</p><p>椅子 1 脚あたりの平均費用が最も低くなる週あたりの椅子の数を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: you are asked for a number of chairs, which must be a whole number. Find where <span class="chem">C</span> is least, then check the whole numbers on either side.
        "解読：求めるのは椅子の数なので、整数でなければなりません。<span class=\"chem\">C</span> が最小になる位置を求め、その両隣の整数を確かめます。",
        // EN: Graph <span class="chem">Y_1 = (0.5x^2 + 30x + 1500)/(x + 20)</span> for <span class="chem">x &gt; 0</span> and use the minimum tool.
        "<span class=\"chem\">x &gt; 0</span> で <span class=\"chem\">Y_1 = (0.5x^2 + 30x + 1500)/(x + 20)</span> のグラフをかき、minimum 機能を使います。",
        // EN: The minimum is at <span class="chem">x ≈ 26.9</span>. Compare <span class="chem">C(26)</span> and <span class="chem">C(27)</span> in a table.
        "最小値は <span class=\"chem\">x ≈ 26.9</span> でとります。表で <span class=\"chem\">C(26)</span> と <span class=\"chem\">C(27)</span> を比べます。",
      ],
      // EN: <p><strong>Decode.</strong> The answer must be a whole number of chairs, so the GDC minimum is only the first step.</p><p>The GDC minimum of <span class="chem">C</span> for <span class="chem">x &gt; 0</span> is at <span class="chem">x ≈ 26.90</span>, <span class="chem">C ≈ 56.904</span>. Checking whole numbers: <span class="chem">C(26) = 2618/46 ≈ 56.913</span> and <span class="chem">C(27) = 2674.5/47 ≈ 56.904</span>. The lowest average cost is at <span class="chem">27</span> chairs per week.</p><p>(Dividing gives <span class="chem">C(x) = 0.5x + 20 + 1100/(x + 20)</span>, so for large <span class="chem">x</span> the cost follows the oblique asymptote <span class="chem">y = 0.5x + 20</span> and rises again.)</p>
      solution: "<p><strong>解読。</strong>答えは椅子の脚数なので整数でなければならず、GDC の最小値は最初の一歩にすぎません。</p><p><span class=\"chem\">x &gt; 0</span> における <span class=\"chem\">C</span> の GDC による最小値は <span class=\"chem\">x ≈ 26.90</span>、<span class=\"chem\">C ≈ 56.904</span> です。整数を調べると <span class=\"chem\">C(26) = 2618/46 ≈ 56.913</span>、<span class=\"chem\">C(27) = 2674.5/47 ≈ 56.904</span> です。平均費用が最も低いのは週 <span class=\"chem\">27</span> 脚のときです。</p><p>（割り算すると <span class=\"chem\">C(x) = 0.5x + 20 + 1100/(x + 20)</span> となるので、<span class=\"chem\">x</span> が大きいとき費用は斜漸近線 <span class=\"chem\">y = 0.5x + 20</span> に沿って再び増加します。）</p>",
    },

    // ── t2-3-q042 · short · exam · AHL · AHL 2.12, 2.15 · 6 marks
    "t2-3-q042": {
      // EN: <p>Let <span class="chem">P(x) = x^3 + ax^2 - 7x + 3</span>. When <span class="chem">P(x)</span> is divided by <span class="chem">(x + 2)</span>, the remainder is <span class="chem">13</span>.</p><p>(a) Find the value of <span class="chem">a</span>. <strong>[2 marks]</strong></p><p>(b) Find the three roots of <span class="chem">P(x) = 0</span>. <strong>[2 marks]</strong></p><p>(c) Hence solve <span class="chem">P(x) &gt; 0</span>. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">P(x) = x^3 + ax^2 - 7x + 3</span> とする。<span class=\"chem\">P(x)</span> を <span class=\"chem\">(x + 2)</span> で割ると余りは <span class=\"chem\">13</span> である。</p><p>(a) <span class=\"chem\">a</span> の値を求めなさい (Find)。<strong>[2 marks]</strong></p><p>(b) <span class=\"chem\">P(x) = 0</span> の 3 つの解を求めなさい。<strong>[2 marks]</strong></p><p>(c) これを用いて (Hence) <span class=\"chem\">P(x) &gt; 0</span> を解きなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Remainder Theorem: the remainder on division by <span class="chem">(x + 2)</span> is <span class="chem">P(-2)</span>.
        "剰余の定理：<span class=\"chem\">(x + 2)</span> で割った余りは <span class=\"chem\">P(-2)</span> です。",
        // EN: With <span class="chem">a = 1</span>, none of <span class="chem">+-1, +-3</span> is a root, so there is no "nice" factor: use the GDC.
        "<span class=\"chem\">a = 1</span> のとき <span class=\"chem\">+-1, +-3</span> はどれも解ではないので、「きれいな」因数はありません：GDC を使います。",
        // EN: A cubic with positive leading coefficient is positive between its first two roots and after its third.
        "最高次の係数が正の 3 次関数は、1 つ目と 2 つ目の解の間と、3 つ目の解より後で正になります。",
      ],
      // EN: <p>(a) <span class="chem">P(-2) = -8 + 4a + 14 + 3 = 4a + 9 = 13</span>, so <span class="chem">a = 1</span>.</p><p>(b) <span class="chem">x^3 + x^2 - 7x + 3 = 0</span>: GDC roots <span class="chem">x ≈ -3.354</span>, <span class="chem">0.4765</span>, <span class="chem">1.877</span>.</p><p>(c) The graph is above the axis for <span class="chem">-3.35 &lt; x &lt; 0.476</span> and for <span class="chem">x &gt; 1.88</span>.</p>
      solution: "<p>(a) <span class=\"chem\">P(-2) = -8 + 4a + 14 + 3 = 4a + 9 = 13</span> なので <span class=\"chem\">a = 1</span> です。</p><p>(b) <span class=\"chem\">x^3 + x^2 - 7x + 3 = 0</span>：GDC による解 <span class=\"chem\">x ≈ -3.354</span>、<span class=\"chem\">0.4765</span>、<span class=\"chem\">1.877</span>。</p><p>(c) グラフが軸より上にあるのは <span class=\"chem\">-3.35 &lt; x &lt; 0.476</span> と <span class=\"chem\">x &gt; 1.88</span> のときです。</p>",
      // EN: <p>(a) <span class="chem">a = 1</span>. (b) <span class="chem">x ≈ -3.35, 0.476, 1.88</span>. (c) <span class="chem">-3.35 &lt; x &lt; 0.476</span> or <span class="chem">x &gt; 1.88</span>.</p>
      answer: "<p>(a) <span class=\"chem\">a = 1</span>。(b) <span class=\"chem\">x ≈ -3.35, 0.476, 1.88</span>。(c) <span class=\"chem\">-3.35 &lt; x &lt; 0.476</span> または <span class=\"chem\">x &gt; 1.88</span>。</p>",
      markscheme: [
        // EN: M1: (a) Remainder Theorem: <span class="chem">P(-2) = -8 + 4a + 14 + 3 = 13</span>.
        "M1：(a) 剰余の定理：<span class=\"chem\">P(-2) = -8 + 4a + 14 + 3 = 13</span>。",
        // EN: A1: (a) <span class="chem">a = 1</span>.
        "A1：(a) <span class=\"chem\">a = 1</span>。",
        // EN: M1: (b) substitutes <span class="chem">a = 1</span> and solves <span class="chem">x^3 + x^2 - 7x + 3 = 0</span> on the GDC (graph or polynomial solver).
        "M1：(b) <span class=\"chem\">a = 1</span> を代入し、GDC で <span class=\"chem\">x^3 + x^2 - 7x + 3 = 0</span> を解く（グラフまたは多項式ソルバー）。",
        // EN: A1: (b) all three roots <span class="chem">-3.35, 0.476, 1.88</span>.
        "A1：(b) 3 つの解すべて <span class=\"chem\">-3.35, 0.476, 1.88</span>。",
        // EN: A1: (c) <span class="chem">-3.35 &lt; x &lt; 0.476</span>.
        "A1：(c) <span class=\"chem\">-3.35 &lt; x &lt; 0.476</span>。",
        // EN: A1: (c) <span class="chem">x &gt; 1.88</span>.
        "A1：(c) <span class=\"chem\">x &gt; 1.88</span>。",
      ],
    },

    // ── t2-3-q043 · short · challenge · AHL · AHL 2.15, 2.16 · 5 marks
    "t2-3-q043": {
      // EN: <p>Solve the inequality <span class="chem">|ln x| &lt; 2 - x</span>.</p>
      stem: "<p>不等式 <span class=\"chem\">|ln x| &lt; 2 - x</span> を解きなさい。</p>",
      hints: [
        // EN: Decode: a modulus inequality with no algebraic method. Remember the hidden condition: <span class="chem">ln x</span> needs <span class="chem">x &gt; 0</span>. Solve it graphically.
        "解読：代数的な解法がない絶対値の不等式です。隠れた条件を忘れないこと：<span class=\"chem\">ln x</span> には <span class=\"chem\">x &gt; 0</span> が必要です。グラフを使って解きます。",
        // EN: Graph <span class="chem">Y_1 = abs(ln(x))</span> and <span class="chem">Y_2 = 2 - x</span>. The modulus graph has a sharp point at <span class="chem">(1, 0)</span>.
        "<span class=\"chem\">Y_1 = abs(ln(x))</span> と <span class=\"chem\">Y_2 = 2 - x</span> のグラフをかきます。絶対値のグラフは <span class=\"chem\">(1, 0)</span> でとがっています。",
        // EN: If you solve algebraically instead, <span class="chem">-ln x = 2 - x</span> has a second root, <span class="chem">x ≈ 3.15</span>; reject it, since that branch only applies for <span class="chem">x &lt; 1</span>.
        "代わりに代数的に解くと、<span class=\"chem\">-ln x = 2 - x</span> は 2 つ目の解 <span class=\"chem\">x ≈ 3.15</span> をもちます。この部分は <span class=\"chem\">x &lt; 1</span> でしか成り立たないので、これは除外します。",
      ],
      // EN: <p><strong>Decode.</strong> Where is the V-shaped graph <span class="chem">y = |ln x|</span>, defined for <span class="chem">x &gt; 0</span>, below the line <span class="chem">y = 2 - x</span>?</p><p>For <span class="chem">0 &lt; x &lt; 1</span>, <span class="chem">|ln x| = -ln x</span>; <span class="chem">-ln x = 2 - x</span> gives <span class="chem">x ≈ 0.159</span> (the other root <span class="chem">3.15</span> is not in this branch). For <span class="chem">x &gt;= 1</span>, <span class="chem">ln x = 2 - x</span> gives <span class="chem">x ≈ 1.56</span>. At <span class="chem">x = 1</span>, <span class="chem">0 &lt; 1</span>, so the solution is <span class="chem">0.159 &lt; x &lt; 1.56</span>.</p>
      solution: "<p><strong>解読。</strong><span class=\"chem\">x &gt; 0</span> で定義された V 字形のグラフ <span class=\"chem\">y = |ln x|</span> が直線 <span class=\"chem\">y = 2 - x</span> より下にあるのはどこですか？</p><p><span class=\"chem\">0 &lt; x &lt; 1</span> では <span class=\"chem\">|ln x| = -ln x</span> です。<span class=\"chem\">-ln x = 2 - x</span> より <span class=\"chem\">x ≈ 0.159</span>（もう 1 つの解 <span class=\"chem\">3.15</span> はこの部分に含まれません）。<span class=\"chem\">x &gt;= 1</span> では <span class=\"chem\">ln x = 2 - x</span> より <span class=\"chem\">x ≈ 1.56</span> です。<span class=\"chem\">x = 1</span> では <span class=\"chem\">0 &lt; 1</span> なので、解は <span class=\"chem\">0.159 &lt; x &lt; 1.56</span> です。</p>",
      // EN: <p><span class="chem">0.159 &lt; x &lt; 1.56</span></p>
      answer: "<p><span class=\"chem\">0.159 &lt; x &lt; 1.56</span></p>",
      markscheme: [
        // EN: R1: notes the domain <span class="chem">x &gt; 0</span>.
        "R1：定義域 <span class=\"chem\">x &gt; 0</span> に注意する。",
        // EN: M1: graphs <span class="chem">y = |ln x|</span> and <span class="chem">y = 2 - x</span> (or splits into <span class="chem">-ln x &lt; 2 - x</span> for <span class="chem">0 &lt; x &lt; 1</span> and <span class="chem">ln x &lt; 2 - x</span> for <span class="chem">x &gt;= 1</span>).
        "M1：<span class=\"chem\">y = |ln x|</span> と <span class=\"chem\">y = 2 - x</span> のグラフをかく（または <span class=\"chem\">0 &lt; x &lt; 1</span> での <span class=\"chem\">-ln x &lt; 2 - x</span> と <span class=\"chem\">x &gt;= 1</span> での <span class=\"chem\">ln x &lt; 2 - x</span> に場合分けする）。",
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
      stem: "<p>点 <span class=\"chem\">(2, -4)</span> が <span class=\"chem\">y = f(x)</span> のグラフ上にある。点 <span class=\"chem\">Q</span> は <span class=\"chem\">y = 3f(-x) - 2</span> のグラフ上でのその像である。<span class=\"chem\">Q</span> の <span class=\"chem\">y</span> 座標を求めなさい (Find)。</p>",
      hints: [
        // EN: <span class="chem">f(-x)</span> reflects in the <span class="chem">y</span>-axis, so only the <span class="chem">x</span>-coordinate changes sign.
        "<span class=\"chem\">f(-x)</span> は <span class=\"chem\">y</span> 軸に関する対称移動なので、<span class=\"chem\">x</span> 座標の符号だけが変わります。",
        // EN: The outside of the function acts on <span class="chem">y</span>: multiply by <span class="chem">3</span>, then subtract <span class="chem">2</span>.
        "関数の外側の操作は <span class=\"chem\">y</span> に作用します：<span class=\"chem\">3</span> を掛けてから <span class=\"chem\">2</span> を引きます。",
      ],
      // EN: <p>The reflection sends <span class="chem">(2, -4)</span> to <span class="chem">(-2, -4)</span>. Then <span class="chem">y = 3(-4) - 2 = -14</span>, so <span class="chem">Q = (-2, -14)</span> and its <span class="chem">y</span>-coordinate is <span class="chem">-14</span>.</p>
      solution: "<p>対称移動により <span class=\"chem\">(2, -4)</span> は <span class=\"chem\">(-2, -4)</span> に移ります。次に <span class=\"chem\">y = 3(-4) - 2 = -14</span> なので <span class=\"chem\">Q = (-2, -14)</span> となり、その <span class=\"chem\">y</span> 座標は <span class=\"chem\">-14</span> です。</p>",
    },

    // ── t2-3-q045 · short · exam · SL · SL 2.11 · 5 marks
    "t2-3-q045": {
      // EN: <p>(a) Write <span class="chem">2x^2 - 12x + 13</span> in the form <span class="chem">a(x - h)^2 + k</span>. <strong>[2 marks]</strong></p><p>(b) Hence describe a sequence of transformations that maps the graph of <span class="chem">y = x^2</span> onto the graph of <span class="chem">y = 2x^2 - 12x + 13</span>. <strong>[3 marks]</strong></p>
      stem: "<p>(a) <span class=\"chem\">2x^2 - 12x + 13</span> を <span class=\"chem\">a(x - h)^2 + k</span> の形に書きなさい。<strong>[2 marks]</strong></p><p>(b) これを用いて (Hence)、<span class=\"chem\">y = x^2</span> のグラフを <span class=\"chem\">y = 2x^2 - 12x + 13</span> のグラフに移す変換の列を説明しなさい (Describe)。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Take out the factor <span class="chem">2</span> from the <span class="chem">x</span> terms first: <span class="chem">2(x^2 - 6x) + 13</span>.
        "まず <span class=\"chem\">x</span> の項から <span class=\"chem\">2</span> をくくり出します：<span class=\"chem\">2(x^2 - 6x) + 13</span>。",
        // EN: Read <span class="chem">a(x - h)^2 + k</span> as: translate <span class="chem">h</span> horizontally, stretch vertically by <span class="chem">a</span>, then translate <span class="chem">k</span> vertically.
        "<span class=\"chem\">a(x - h)^2 + k</span> は次のように読みます：横方向に <span class=\"chem\">h</span> 平行移動し、縦方向に <span class=\"chem\">a</span> 倍に拡大し、縦方向に <span class=\"chem\">k</span> 平行移動します。",
      ],
      // EN: <p>(a) <span class="chem">2x^2 - 12x + 13 = 2(x^2 - 6x + 9) - 18 + 13 = 2(x - 3)^2 - 5</span>.</p><p>(b) Translate <span class="chem">3</span> right (<span class="chem">y = (x - 3)^2</span>), stretch vertically by factor <span class="chem">2</span> (<span class="chem">y = 2(x - 3)^2</span>), then translate <span class="chem">5</span> down. If you translate down before stretching, the stretch would double the shift to <span class="chem">-10</span>, which is wrong.</p>
      solution: "<p>(a) <span class=\"chem\">2x^2 - 12x + 13 = 2(x^2 - 6x + 9) - 18 + 13 = 2(x - 3)^2 - 5</span>。</p><p>(b) 右へ <span class=\"chem\">3</span> 平行移動し（<span class=\"chem\">y = (x - 3)^2</span>）、縦方向に <span class=\"chem\">2</span> 倍に拡大し（<span class=\"chem\">y = 2(x - 3)^2</span>）、それから下へ <span class=\"chem\">5</span> 平行移動します。拡大の前に下へ移動すると、拡大によって移動量が 2 倍の <span class=\"chem\">-10</span> になってしまい、誤りです。</p>",
      // EN: <p>(a) <span class="chem">2(x - 3)^2 - 5</span>. (b) Translation of <span class="chem">3</span> units right (horizontal translation), vertical stretch with scale factor <span class="chem">2</span>, then translation of <span class="chem">5</span> units down. (The vertical stretch must come before the downward translation.)</p>
      answer: "<p>(a) <span class=\"chem\">2(x - 3)^2 - 5</span>。(b) 右へ <span class=\"chem\">3</span> の平行移動（横方向の平行移動）、倍率 <span class=\"chem\">2</span> の縦方向の拡大、続けて下へ <span class=\"chem\">5</span> の平行移動。（縦方向の拡大は下への平行移動より先に行わなければならない。）</p>",
      markscheme: [
        // EN: M1: (a) completes the square: <span class="chem">2(x^2 - 6x) + 13 = 2((x - 3)^2 - 9) + 13</span>.
        "M1：(a) 平方完成する：<span class=\"chem\">2(x^2 - 6x) + 13 = 2((x - 3)^2 - 9) + 13</span>。",
        // EN: A1: (a) <span class="chem">2(x - 3)^2 - 5</span>.
        "A1：(a) <span class=\"chem\">2(x - 3)^2 - 5</span>。",
        // EN: A1: (b) horizontal translation of <span class="chem">3</span> units to the right.
        "A1：(b) 右へ <span class=\"chem\">3</span> の横方向の平行移動。",
        // EN: A1: (b) vertical stretch with scale factor <span class="chem">2</span>.
        "A1：(b) 倍率 <span class=\"chem\">2</span> の縦方向の拡大。",
        // EN: A1: (b) vertical translation of <span class="chem">5</span> units down, applied after the stretch.
        "A1：(b) 拡大の後に行う、下へ <span class=\"chem\">5</span> の縦方向の平行移動。",
      ],
    },

    // ── t2-3-q046 · numeric · challenge · SL · SL 2.11 · 4 marks
    "t2-3-q046": {
      // EN: <p>Let <span class="chem">f(x) = x^2 - 4x</span>. The graph of <span class="chem">y = f(x)</span> is reflected in the <span class="chem">y</span>-axis, then translated <span class="chem">3</span> units to the right, then stretched vertically with scale factor <span class="chem">2</span>, giving the graph of <span class="chem">y = g(x)</span>. Find the <span class="chem">y</span>-intercept of the graph of <span class="chem">g</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = x^2 - 4x</span> とする。<span class=\"chem\">y = f(x)</span> のグラフを <span class=\"chem\">y</span> 軸に関して対称移動し、次に右へ <span class=\"chem\">3</span> 平行移動し、さらに縦方向に <span class=\"chem\">2</span> 倍に拡大すると、<span class=\"chem\">y = g(x)</span> のグラフが得られる。<span class=\"chem\">g</span> のグラフの <span class=\"chem\">y</span> 切片を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: build <span class="chem">g(x)</span> one step at a time, in the order given. Each horizontal step replaces <span class="chem">x</span> in the <strong>current</strong> expression, then find <span class="chem">g(0)</span>.
        "解読：与えられた順に 1 段階ずつ <span class=\"chem\">g(x)</span> を作ります。横方向の操作はそれぞれ<strong>その時点の</strong>式の <span class=\"chem\">x</span> を置き換えます。その後 <span class=\"chem\">g(0)</span> を求めます。",
        // EN: Reflection in the <span class="chem">y</span>-axis: <span class="chem">f(-x)</span>. A translation of <span class="chem">3</span> right then replaces <span class="chem">x</span> by <span class="chem">x - 3</span>: <span class="chem">f(-(x - 3)) = f(3 - x)</span>, not <span class="chem">f(-x - 3)</span>.
        "<span class=\"chem\">y</span> 軸に関する対称移動：<span class=\"chem\">f(-x)</span>。続く右へ <span class=\"chem\">3</span> の平行移動では <span class=\"chem\">x</span> を <span class=\"chem\">x - 3</span> に置き換えます：<span class=\"chem\">f(-(x - 3)) = f(3 - x)</span> であり、<span class=\"chem\">f(-x - 3)</span> ではありません。",
        // EN: So <span class="chem">g(x) = 2f(3 - x)</span> and <span class="chem">g(0) = 2f(3)</span>.
        "よって <span class=\"chem\">g(x) = 2f(3 - x)</span>、<span class=\"chem\">g(0) = 2f(3)</span> です。",
      ],
      // EN: <p><strong>Decode.</strong> Translate words into function notation in order; the translation acts on <span class="chem">x</span>, not on <span class="chem">-x</span>.</p><p>Reflect: <span class="chem">f(-x)</span>. Translate <span class="chem">3</span> right: <span class="chem">f(-(x - 3)) = f(3 - x)</span>. Stretch: <span class="chem">g(x) = 2f(3 - x)</span>. So <span class="chem">g(0) = 2f(3) = 2(9 - 12) = -6</span>.</p><p>Common slip: writing <span class="chem">f(-x - 3)</span> gives <span class="chem">2f(-3) = 2(9 + 12) = 42</span>, which is the translation applied before the reflection.</p>
      solution: "<p><strong>解読。</strong>言葉を順に関数の記法へ翻訳します。平行移動は <span class=\"chem\">-x</span> ではなく <span class=\"chem\">x</span> に作用します。</p><p>対称移動：<span class=\"chem\">f(-x)</span>。右へ <span class=\"chem\">3</span> 平行移動：<span class=\"chem\">f(-(x - 3)) = f(3 - x)</span>。拡大：<span class=\"chem\">g(x) = 2f(3 - x)</span>。よって <span class=\"chem\">g(0) = 2f(3) = 2(9 - 12) = -6</span> です。</p><p>よくある間違い：<span class=\"chem\">f(-x - 3)</span> と書くと <span class=\"chem\">2f(-3) = 2(9 + 12) = 42</span> となりますが、これは平行移動を対称移動より先に行ったものです。</p>",
    },

    // ── t2-3-q047 · numeric · exam · AHL · AHL 2.12 · 4 marks
    "t2-3-q047": {
      // EN: <p>The equation <span class="chem">2x^3 - 7x^2 + kx + 6 = 0</span> has roots <span class="chem">alpha</span>, <span class="chem">beta</span> and <span class="chem">gamma</span>. Given that <span class="chem">1/alpha + 1/beta + 1/gamma = 2</span>, find the value of <span class="chem">k</span>.</p>
      stem: "<p>方程式 <span class=\"chem\">2x^3 - 7x^2 + kx + 6 = 0</span> の解を <span class=\"chem\">alpha</span>、<span class=\"chem\">beta</span>、<span class=\"chem\">gamma</span> とする。<span class=\"chem\">1/alpha + 1/beta + 1/gamma = 2</span> であるとき、<span class=\"chem\">k</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Write the sum of reciprocals over a common denominator: <span class="chem">(beta gamma + alpha gamma + alpha beta)/(alpha beta gamma)</span>.
        "逆数の和を通分します：<span class=\"chem\">(beta gamma + alpha gamma + alpha beta)/(alpha beta gamma)</span>。",
        // EN: For a cubic <span class="chem">ax^3 + bx^2 + cx + d</span>: <span class="chem">alpha beta + beta gamma + gamma alpha = c/a</span> and <span class="chem">alpha beta gamma = -d/a</span>.
        "3 次式 <span class=\"chem\">ax^3 + bx^2 + cx + d</span> について：<span class=\"chem\">alpha beta + beta gamma + gamma alpha = c/a</span>、<span class=\"chem\">alpha beta gamma = -d/a</span>。",
      ],
      // EN: <p><span class="chem">alpha beta + beta gamma + gamma alpha = k/2</span> and <span class="chem">alpha beta gamma = -6/2 = -3</span>. Then <span class="chem">1/alpha + 1/beta + 1/gamma = (k/2)/(-3) = -k/6 = 2</span>, so <span class="chem">k = -12</span>.</p>
      solution: "<p><span class=\"chem\">alpha beta + beta gamma + gamma alpha = k/2</span>、<span class=\"chem\">alpha beta gamma = -6/2 = -3</span> です。よって <span class=\"chem\">1/alpha + 1/beta + 1/gamma = (k/2)/(-3) = -k/6 = 2</span> なので <span class=\"chem\">k = -12</span> です。</p>",
    },

    // ── t2-3-q048 · short · challenge · AHL · AHL 2.12 · 6 marks
    "t2-3-q048": {
      // EN: <p>The three roots of <span class="chem">x^3 - 12x^2 + kx - 28 = 0</span> form an arithmetic sequence.</p><p>(a) By writing the roots as <span class="chem">m - d</span>, <span class="chem">m</span> and <span class="chem">m + d</span>, show that <span class="chem">m = 4</span>. <strong>[2 marks]</strong></p><p>(b) Hence find the three roots and the value of <span class="chem">k</span>. <strong>[4 marks]</strong></p>
      stem: "<p><span class=\"chem\">x^3 - 12x^2 + kx - 28 = 0</span> の 3 つの解は等差数列をなす。</p><p>(a) 解を <span class=\"chem\">m - d</span>、<span class=\"chem\">m</span>、<span class=\"chem\">m + d</span> とおくことにより、<span class=\"chem\">m = 4</span> を示しなさい (Show that)。<strong>[2 marks]</strong></p><p>(b) これを用いて (Hence)、3 つの解と <span class=\"chem\">k</span> の値を求めなさい (Find)。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: "roots form an arithmetic sequence" is information about the roots, so use the sum and product of roots, not the Factor Theorem.
        "解読：「解が等差数列をなす」は解についての情報なので、因数定理ではなく解の和と積を使います。",
        // EN: The sum of the roots is <span class="chem">-(-12)/1 = 12</span>, and with <span class="chem">m - d, m, m + d</span> the <span class="chem">d</span> terms cancel.
        "解の和は <span class=\"chem\">-(-12)/1 = 12</span> であり、<span class=\"chem\">m - d, m, m + d</span> では <span class=\"chem\">d</span> の項が打ち消し合います。",
        // EN: The product of the roots is <span class="chem">-(-28)/1 = 28</span>. Then <span class="chem">k</span> is the sum of the roots multiplied in pairs.
        "解の積は <span class=\"chem\">-(-28)/1 = 28</span> です。そして <span class=\"chem\">k</span> は 2 つずつの解の積の和です。",
      ],
      // EN: <p><strong>Decode.</strong> Information about the pattern of the roots means using the formula-booklet sum and product of roots.</p><p>(a) Sum: <span class="chem">3m = 12</span>, so <span class="chem">m = 4</span>.</p><p>(b) Product: <span class="chem">4(16 - d^2) = 28</span>, so <span class="chem">d^2 = 9</span> and the roots are <span class="chem">1, 4, 7</span> (either sign of <span class="chem">d</span> gives the same set). Then <span class="chem">k = 1(4) + 4(7) + 7(1) = 39</span>. Check: <span class="chem">(x - 1)(x - 4)(x - 7) = x^3 - 12x^2 + 39x - 28</span>.</p>
      solution: "<p><strong>解読。</strong>解の並び方についての情報があるときは、公式集の解の和と積を使います。</p><p>(a) 和：<span class=\"chem\">3m = 12</span> なので <span class=\"chem\">m = 4</span> です。</p><p>(b) 積：<span class=\"chem\">4(16 - d^2) = 28</span> なので <span class=\"chem\">d^2 = 9</span> となり、解は <span class=\"chem\">1, 4, 7</span> です（<span class=\"chem\">d</span> の符号がどちらでも同じ組になります）。次に <span class=\"chem\">k = 1(4) + 4(7) + 7(1) = 39</span> です。確認：<span class=\"chem\">(x - 1)(x - 4)(x - 7) = x^3 - 12x^2 + 39x - 28</span>。</p>",
      // EN: <p>(a) Sum of roots <span class="chem">3m = 12</span>, so <span class="chem">m = 4</span>. (b) Roots <span class="chem">1, 4, 7</span>; <span class="chem">k = 39</span>.</p>
      answer: "<p>(a) 解の和 <span class=\"chem\">3m = 12</span> なので <span class=\"chem\">m = 4</span>。(b) 解 <span class=\"chem\">1, 4, 7</span>、<span class=\"chem\">k = 39</span>。</p>",
      markscheme: [
        // EN: M1: (a) sum of roots <span class="chem">(m - d) + m + (m + d) = 12</span>.
        "M1：(a) 解の和 <span class=\"chem\">(m - d) + m + (m + d) = 12</span>。",
        // EN: A1: (a) <span class="chem">3m = 12</span> (so <span class="chem">m = 4</span>, AG).
        "A1：(a) <span class=\"chem\">3m = 12</span>（よって <span class=\"chem\">m = 4</span>、AG）。",
        // EN: M1: (b) product of roots <span class="chem">(4 - d)(4)(4 + d) = 28</span>.
        "M1：(b) 解の積 <span class=\"chem\">(4 - d)(4)(4 + d) = 28</span>。",
        // EN: A1: (b) <span class="chem">16 - d^2 = 7</span>, so <span class="chem">d = +-3</span> and the roots are <span class="chem">1, 4, 7</span>.
        "A1：(b) <span class=\"chem\">16 - d^2 = 7</span> なので <span class=\"chem\">d = +-3</span>、解は <span class=\"chem\">1, 4, 7</span>。",
        // EN: M1: (b) <span class="chem">k</span> = sum of products in pairs: <span class="chem">1(4) + 4(7) + 1(7)</span>.
        "M1：(b) <span class=\"chem\">k</span> = 2 つずつの積の和：<span class=\"chem\">1(4) + 4(7) + 1(7)</span>。",
        // EN: A1: (b) <span class="chem">k = 39</span>.
        "A1：(b) <span class=\"chem\">k = 39</span>。",
      ],
    },

    // ── t2-3-q049 · short · exam · AHL · AHL 2.12, 2.15 · 6 marks
    "t2-3-q049": {
      // EN: <p>Let <span class="chem">f(x) = -(x + 2)(x - 1)^2</span>.</p><p>(a) Sketch the graph of <span class="chem">y = f(x)</span>, showing the coordinates of all points where the graph meets the axes. <strong>[4 marks]</strong></p><p>(b) Hence solve <span class="chem">f(x) &gt;= 0</span>. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = -(x + 2)(x - 1)^2</span> とする。</p><p>(a) グラフが軸と交わるすべての点の座標を示して、<span class=\"chem\">y = f(x)</span> のグラフの概形を描きなさい (Sketch)。<strong>[4 marks]</strong></p><p>(b) これを用いて (Hence) <span class=\"chem\">f(x) &gt;= 0</span> を解きなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Expand only the leading term: <span class="chem">-(x)(x^2) = -x^3</span>, so the graph starts high on the left and ends low on the right.
        "最高次の項だけを展開します：<span class=\"chem\">-(x)(x^2) = -x^3</span> なので、グラフは左上から始まり右下で終わります。",
        // EN: A single factor <span class="chem">(x + 2)</span> means the graph crosses; the squared factor <span class="chem">(x - 1)^2</span> means it touches and turns.
        "1 乗の因数 <span class=\"chem\">(x + 2)</span> ではグラフは軸を横切り、2 乗の因数 <span class=\"chem\">(x - 1)^2</span> では軸に接して向きを変えます。",
        // EN: For (b), do not forget the isolated point where <span class="chem">f(x) = 0</span> without the graph going above the axis.
        "(b) では、グラフが軸より上に出ないのに <span class=\"chem\">f(x) = 0</span> となる孤立した点を忘れないこと。",
      ],
      // EN: <p>(a) Leading term <span class="chem">-x^3</span>. Roots: <span class="chem">x = -2</span> (crosses), <span class="chem">x = 1</span> (double root, touches). <span class="chem">f(0) = -(2)(1) = -2</span>. Coming from the top left, the curve crosses at <span class="chem">-2</span>, dips to a minimum below the axis, rises to touch the axis at <span class="chem">(1, 0)</span>, then falls.</p><p>(b) The graph is on or above the axis for <span class="chem">x &lt;= -2</span>, and it touches the axis at <span class="chem">x = 1</span>. So <span class="chem">x &lt;= -2</span> or <span class="chem">x = 1</span>.</p>
      solution: "<p>(a) 最高次の項は <span class=\"chem\">-x^3</span> です。解：<span class=\"chem\">x = -2</span>（横切る）、<span class=\"chem\">x = 1</span>（重解、接する）。<span class=\"chem\">f(0) = -(2)(1) = -2</span>。曲線は左上から来て <span class=\"chem\">-2</span> で軸を横切り、軸より下で極小となり、上がって <span class=\"chem\">(1, 0)</span> で軸に接し、その後下がります。</p><p>(b) グラフは <span class=\"chem\">x &lt;= -2</span> で軸上またはそれより上にあり、<span class=\"chem\">x = 1</span> で軸に接します。よって <span class=\"chem\">x &lt;= -2</span> または <span class=\"chem\">x = 1</span> です。</p>",
      // EN: <p>(a) Cubic with negative leading coefficient (rises to the left, falls to the right); crosses the <span class="chem">x</span>-axis at <span class="chem">(-2, 0)</span>, touches it at <span class="chem">(1, 0)</span> (a local maximum), and meets the <span class="chem">y</span>-axis at <span class="chem">(0, -2)</span>. (b) <span class="chem">x &lt;= -2</span> or <span class="chem">x = 1</span>.</p>
      answer: "<p>(a) 最高次の係数が負の 3 次関数（左で上がり、右で下がる）。<span class=\"chem\">(-2, 0)</span> で <span class=\"chem\">x</span> 軸を横切り、<span class=\"chem\">(1, 0)</span> で接し（極大点）、<span class=\"chem\">(0, -2)</span> で <span class=\"chem\">y</span> 軸と交わる。(b) <span class=\"chem\">x &lt;= -2</span> または <span class=\"chem\">x = 1</span>。</p>",
      markscheme: [
        // EN: A1: (a) correct end behaviour: <span class="chem">y -&gt; +∞</span> as <span class="chem">x -&gt; -∞</span> and <span class="chem">y -&gt; -∞</span> as <span class="chem">x -&gt; +∞</span>.
        "A1：(a) 正しい端の振る舞い：<span class=\"chem\">x -&gt; -∞</span> のとき <span class=\"chem\">y -&gt; +∞</span>、<span class=\"chem\">x -&gt; +∞</span> のとき <span class=\"chem\">y -&gt; -∞</span>。",
        // EN: A1: (a) crosses the axis at <span class="chem">(-2, 0)</span>.
        "A1：(a) <span class=\"chem\">(-2, 0)</span> で軸を横切る。",
        // EN: A1: (a) touches the axis at <span class="chem">(1, 0)</span> (repeated root, turning point).
        "A1：(a) <span class=\"chem\">(1, 0)</span> で軸に接する（重解、極値）。",
        // EN: A1: (a) <span class="chem">y</span>-intercept <span class="chem">(0, -2)</span>.
        "A1：(a) <span class=\"chem\">y</span> 切片 <span class=\"chem\">(0, -2)</span>。",
        // EN: A1: (b) <span class="chem">x &lt;= -2</span>.
        "A1：(b) <span class=\"chem\">x &lt;= -2</span>。",
        // EN: A1: (b) or <span class="chem">x = 1</span>.
        "A1：(b) または <span class=\"chem\">x = 1</span>。",
      ],
    },

    // ── t2-3-q050 · short · exam · AHL · AHL 2.13 · 6 marks
    "t2-3-q050": {
      // EN: <p>Let <span class="chem">f(x) = (x + 1)/(x^2 - x - 6)</span>.</p><p>(a) Write down the equations of the vertical asymptotes and the horizontal asymptote of the graph of <span class="chem">f</span>. <strong>[3 marks]</strong></p><p>(b) Sketch the graph of <span class="chem">y = f(x)</span>, showing its asymptotes and the coordinates of its axis intercepts. <strong>[3 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = (x + 1)/(x^2 - x - 6)</span> とする。</p><p>(a) <span class=\"chem\">f</span> のグラフの鉛直漸近線と水平漸近線の方程式を書きなさい (Write down)。<strong>[3 marks]</strong></p><p>(b) 漸近線と軸との交点の座標を示して、<span class=\"chem\">y = f(x)</span> のグラフの概形を描きなさい (Sketch)。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Factorise the denominator: <span class="chem">(x - 3)(x + 2)</span>. Check the numerator does not cancel a factor.
        "分母を因数分解します：<span class=\"chem\">(x - 3)(x + 2)</span>。分子が因数と約分されないことを確かめます。",
        // EN: Make a sign table of <span class="chem">(x + 1)/((x - 3)(x + 2))</span> on the four intervals cut by <span class="chem">-2, -1, 3</span>.
        "<span class=\"chem\">-2, -1, 3</span> で分けられる 4 つの区間で <span class=\"chem\">(x + 1)/((x - 3)(x + 2))</span> の符号表を作ります。",
      ],
      // EN: <p>(a) <span class="chem">x^2 - x - 6 = (x - 3)(x + 2)</span>, so the vertical asymptotes are <span class="chem">x = 3</span> and <span class="chem">x = -2</span>. The numerator has lower degree, so <span class="chem">y = 0</span> is the horizontal asymptote.</p><p>(b) <span class="chem">f(-1) = 0</span>, <span class="chem">f(0) = 1/(-6) = -1/6</span>. Sign: negative for <span class="chem">x &lt; -2</span>, positive on <span class="chem">(-2, -1)</span>, negative on <span class="chem">(-1, 3)</span>, positive for <span class="chem">x &gt; 3</span>. This fixes the direction of each branch near the asymptotes.</p>
      solution: "<p>(a) <span class=\"chem\">x^2 - x - 6 = (x - 3)(x + 2)</span> なので、鉛直漸近線は <span class=\"chem\">x = 3</span> と <span class=\"chem\">x = -2</span> です。分子のほうが次数が低いので、<span class=\"chem\">y = 0</span> が水平漸近線です。</p><p>(b) <span class=\"chem\">f(-1) = 0</span>、<span class=\"chem\">f(0) = 1/(-6) = -1/6</span>。符号：<span class=\"chem\">x &lt; -2</span> で負、<span class=\"chem\">(-2, -1)</span> で正、<span class=\"chem\">(-1, 3)</span> で負、<span class=\"chem\">x &gt; 3</span> で正。これにより漸近線付近での各部分の向きが決まります。</p>",
      // EN: <p>(a) <span class="chem">x = 3</span>, <span class="chem">x = -2</span>; <span class="chem">y = 0</span>. (b) Intercepts <span class="chem">(-1, 0)</span> and <span class="chem">(0, -1/6)</span>. Three branches: for <span class="chem">x &lt; -2</span> the curve is below the axis (<span class="chem">-&gt; 0^-</span> on the left, <span class="chem">-&gt; -∞</span> at <span class="chem">x = -2</span>); between the asymptotes it comes down from <span class="chem">+∞</span>, crosses at <span class="chem">(-1, 0)</span> and <span class="chem">(0, -1/6)</span> and goes to <span class="chem">-∞</span> at <span class="chem">x = 3</span>; for <span class="chem">x &gt; 3</span> it comes down from <span class="chem">+∞</span> towards <span class="chem">0^+</span>.</p>
      answer: "<p>(a) <span class=\"chem\">x = 3</span>、<span class=\"chem\">x = -2</span>；<span class=\"chem\">y = 0</span>。(b) 交点 <span class=\"chem\">(-1, 0)</span> と <span class=\"chem\">(0, -1/6)</span>。3 つの部分：<span class=\"chem\">x &lt; -2</span> では曲線は軸より下にある（左側で <span class=\"chem\">-&gt; 0^-</span>、<span class=\"chem\">x = -2</span> で <span class=\"chem\">-&gt; -∞</span>）。漸近線の間では <span class=\"chem\">+∞</span> から下りてきて、<span class=\"chem\">(-1, 0)</span> と <span class=\"chem\">(0, -1/6)</span> で軸を横切り、<span class=\"chem\">x = 3</span> で <span class=\"chem\">-∞</span> へ向かう。<span class=\"chem\">x &gt; 3</span> では <span class=\"chem\">+∞</span> から下りてきて <span class=\"chem\">0^+</span> に近づく。</p>",
      markscheme: [
        // EN: A1: (a) <span class="chem">x = 3</span> and <span class="chem">x = -2</span> (from <span class="chem">x^2 - x - 6 = (x - 3)(x + 2)</span>).
        "A1：(a) <span class=\"chem\">x = 3</span> と <span class=\"chem\">x = -2</span>（<span class=\"chem\">x^2 - x - 6 = (x - 3)(x + 2)</span> より）。",
        // EN: A1: (a) neither vertical asymptote cancels with the numerator (no hole).
        "A1：(a) どちらの鉛直漸近線も分子と約分されない（穴がない）。",
        // EN: A1: (a) <span class="chem">y = 0</span>, since the degree of the numerator is less than the degree of the denominator.
        "A1：(a) <span class=\"chem\">y = 0</span>。分子の次数が分母の次数より小さいため。",
        // EN: A1: (b) intercepts <span class="chem">(-1, 0)</span> and <span class="chem">(0, -1/6)</span>.
        "A1：(b) 交点 <span class=\"chem\">(-1, 0)</span> と <span class=\"chem\">(0, -1/6)</span>。",
        // EN: A1: (b) outer branches correct: below the axis for <span class="chem">x &lt; -2</span>, above for <span class="chem">x &gt; 3</span>, both approaching <span class="chem">y = 0</span>.
        "A1：(b) 外側の部分が正しい：<span class=\"chem\">x &lt; -2</span> では軸より下、<span class=\"chem\">x &gt; 3</span> では軸より上で、どちらも <span class=\"chem\">y = 0</span> に近づく。",
        // EN: A1: (b) middle branch from <span class="chem">+∞</span> near <span class="chem">x = -2</span> to <span class="chem">-∞</span> near <span class="chem">x = 3</span>, through both intercepts.
        "A1：(b) 中央の部分は <span class=\"chem\">x = -2</span> 付近の <span class=\"chem\">+∞</span> から <span class=\"chem\">x = 3</span> 付近の <span class=\"chem\">-∞</span> へ向かい、2 つの交点を通る。",
      ],
    },

    // ── t2-3-q051 · short · exam · AHL · AHL 2.14 · 7 marks
    "t2-3-q051": {
      // EN: <p>Let <span class="chem">f(x) = (3x + 5)/(2x - 3)</span>, <span class="chem">x != 3/2</span>.</p><p>(a) Show that <span class="chem">f(f(x)) = x</span>. <strong>[3 marks]</strong></p><p>(b) Hence write down <span class="chem">f^{-1}(x)</span>. <strong>[1 mark]</strong></p><p>(c) Find the exact <span class="chem">x</span>-coordinates of the points where the graph of <span class="chem">y = f(x)</span> meets the line <span class="chem">y = x</span>. <strong>[3 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = (3x + 5)/(2x - 3)</span>, <span class=\"chem\">x != 3/2</span> とする。</p><p>(a) <span class=\"chem\">f(f(x)) = x</span> を示しなさい (Show that)。<strong>[3 marks]</strong></p><p>(b) これを用いて (Hence) <span class=\"chem\">f^{-1}(x)</span> を書きなさい (Write down)。<strong>[1 mark]</strong></p><p>(c) <span class=\"chem\">y = f(x)</span> のグラフと直線 <span class=\"chem\">y = x</span> の交点の <span class=\"chem\">x</span> 座標の厳密値を求めなさい (Find)。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Replace every <span class="chem">x</span> in <span class="chem">f</span> by the whole fraction, then multiply top and bottom by <span class="chem">(2x - 3)</span>.
        "<span class=\"chem\">f</span> の中のすべての <span class=\"chem\">x</span> を分数全体で置き換え、分子と分母に <span class=\"chem\">(2x - 3)</span> を掛けます。",
        // EN: If <span class="chem">f(f(x)) = x</span>, then applying <span class="chem">f</span> undoes <span class="chem">f</span>: the function is its own inverse.
        "<span class=\"chem\">f(f(x)) = x</span> ならば、<span class=\"chem\">f</span> を施すと <span class=\"chem\">f</span> が元に戻ります：この関数は自分自身の逆関数です。",
        // EN: For (c), cross-multiply <span class="chem">3x + 5 = x(2x - 3)</span>.
        "(c) では <span class=\"chem\">3x + 5 = x(2x - 3)</span> の分母を払います。",
      ],
      // EN: <p>(a) Top: <span class="chem">3(3x + 5)/(2x - 3) + 5 = (9x + 15 + 10x - 15)/(2x - 3) = 19x/(2x - 3)</span>. Bottom: <span class="chem">2(3x + 5)/(2x - 3) - 3 = (6x + 10 - 6x + 9)/(2x - 3) = 19/(2x - 3)</span>. So <span class="chem">f(f(x)) = x</span>.</p><p>(b) <span class="chem">f</span> is self-inverse: <span class="chem">f^{-1}(x) = (3x + 5)/(2x - 3)</span>, <span class="chem">x != 3/2</span>. Its graph is symmetric in <span class="chem">y = x</span>.</p><p>(c) <span class="chem">3x + 5 = 2x^2 - 3x => 2x^2 - 6x - 5 = 0 => x = (6 +- sqrt(36 + 40))/4 = (3 +- sqrt(19))/2</span>.</p>
      solution: "<p>(a) 分子：<span class=\"chem\">3(3x + 5)/(2x - 3) + 5 = (9x + 15 + 10x - 15)/(2x - 3) = 19x/(2x - 3)</span>。分母：<span class=\"chem\">2(3x + 5)/(2x - 3) - 3 = (6x + 10 - 6x + 9)/(2x - 3) = 19/(2x - 3)</span>。よって <span class=\"chem\">f(f(x)) = x</span> です。</p><p>(b) <span class=\"chem\">f</span> は自己逆関数です：<span class=\"chem\">f^{-1}(x) = (3x + 5)/(2x - 3)</span>、<span class=\"chem\">x != 3/2</span>。そのグラフは <span class=\"chem\">y = x</span> に関して対称です。</p><p>(c) <span class=\"chem\">3x + 5 = 2x^2 - 3x => 2x^2 - 6x - 5 = 0 => x = (6 +- sqrt(36 + 40))/4 = (3 +- sqrt(19))/2</span>。</p>",
      // EN: <p>(a) <span class="chem">f(f(x)) = (19x/(2x - 3))/(19/(2x - 3)) = x</span>. (b) <span class="chem">f^{-1}(x) = (3x + 5)/(2x - 3)</span>, <span class="chem">x != 3/2</span> (f is self-inverse). (c) <span class="chem">x = (3 +- sqrt(19))/2</span>.</p>
      answer: "<p>(a) <span class=\"chem\">f(f(x)) = (19x/(2x - 3))/(19/(2x - 3)) = x</span>。(b) <span class=\"chem\">f^{-1}(x) = (3x + 5)/(2x - 3)</span>、<span class=\"chem\">x != 3/2</span>（f は自己逆関数）。(c) <span class=\"chem\">x = (3 +- sqrt(19))/2</span>。</p>",
      markscheme: [
        // EN: M1: (a) substitutes: <span class="chem">f(f(x)) = (3((3x + 5)/(2x - 3)) + 5)/(2((3x + 5)/(2x - 3)) - 3)</span>.
        "M1：(a) 代入する：<span class=\"chem\">f(f(x)) = (3((3x + 5)/(2x - 3)) + 5)/(2((3x + 5)/(2x - 3)) - 3)</span>。",
        // EN: A1: (a) numerator simplifies to <span class="chem">19x/(2x - 3)</span>.
        "A1：(a) 分子を整理して <span class=\"chem\">19x/(2x - 3)</span>。",
        // EN: A1: (a) denominator simplifies to <span class="chem">19/(2x - 3)</span> (dividing gives <span class="chem">f(f(x)) = x</span>, AG).
        "A1：(a) 分母を整理して <span class=\"chem\">19/(2x - 3)</span>（割ると <span class=\"chem\">f(f(x)) = x</span>、AG）。",
        // EN: A1: (b) <span class="chem">f^{-1}(x) = (3x + 5)/(2x - 3)</span>, i.e. <span class="chem">f^{-1} = f</span>.
        "A1：(b) <span class=\"chem\">f^{-1}(x) = (3x + 5)/(2x - 3)</span>、すなわち <span class=\"chem\">f^{-1} = f</span>。",
        // EN: M1: (c) sets <span class="chem">(3x + 5)/(2x - 3) = x</span>, giving <span class="chem">2x^2 - 6x - 5 = 0</span>.
        "M1：(c) <span class=\"chem\">(3x + 5)/(2x - 3) = x</span> とおき、<span class=\"chem\">2x^2 - 6x - 5 = 0</span> を得る。",
        // EN: M1: (c) uses the quadratic formula: <span class="chem">x = (6 +- sqrt(76))/4</span>.
        "M1：(c) 解の公式を使う：<span class=\"chem\">x = (6 +- sqrt(76))/4</span>。",
        // EN: A1: (c) <span class="chem">x = (3 +- sqrt(19))/2</span>.
        "A1：(c) <span class=\"chem\">x = (3 +- sqrt(19))/2</span>。",
      ],
    },

    // ── t2-3-q052 · numeric · challenge · AHL · AHL 2.12, 2.14 · 5 marks
    "t2-3-q052": {
      // EN: <p>A polynomial function <span class="chem">p</span> of degree <span class="chem">3</span> is an odd function. Given that <span class="chem">p(1) = -2</span> and <span class="chem">p(2) = 4</span>, find <span class="chem">p(3)</span>.</p>
      stem: "<p><span class=\"chem\">3</span> 次の多項式関数 <span class=\"chem\">p</span> は奇関数である。<span class=\"chem\">p(1) = -2</span> かつ <span class=\"chem\">p(2) = 4</span> であるとき、<span class=\"chem\">p(3)</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: "odd" tells you the form of the polynomial. For <span class="chem">p(-x) = -p(x)</span> to hold, every even power, including the constant term, must have coefficient <span class="chem">0</span>.
        "解読：「奇関数」から多項式の形がわかります。<span class=\"chem\">p(-x) = -p(x)</span> が成り立つには、定数項を含むすべての偶数乗の項の係数が <span class=\"chem\">0</span> でなければなりません。",
        // EN: So <span class="chem">p(x) = ax^3 + bx</span>. Use the two given values to make two equations.
        "よって <span class=\"chem\">p(x) = ax^3 + bx</span> です。与えられた 2 つの値から 2 つの方程式を作ります。",
        // EN: <span class="chem">a + b = -2</span> and <span class="chem">8a + 2b = 4</span>.
        "<span class=\"chem\">a + b = -2</span>、<span class=\"chem\">8a + 2b = 4</span>。",
      ],
      // EN: <p><strong>Decode.</strong> An odd polynomial contains only odd powers, so <span class="chem">p(x) = ax^3 + bx</span>.</p><p><span class="chem">p(1) = a + b = -2</span> and <span class="chem">p(2) = 8a + 2b = 4</span>. Subtracting twice the first equation from the second: <span class="chem">6a = 8</span>, so <span class="chem">a = 4/3</span> and <span class="chem">b = -10/3</span>. Then <span class="chem">p(3) = (4/3)(27) - (10/3)(3) = 36 - 10 = 26</span>.</p>
      solution: "<p><strong>解読。</strong>奇関数である多項式は奇数乗の項だけを含むので <span class=\"chem\">p(x) = ax^3 + bx</span> です。</p><p><span class=\"chem\">p(1) = a + b = -2</span>、<span class=\"chem\">p(2) = 8a + 2b = 4</span>。2 つ目の式から 1 つ目の式の 2 倍を引くと <span class=\"chem\">6a = 8</span> なので <span class=\"chem\">a = 4/3</span>、<span class=\"chem\">b = -10/3</span> です。よって <span class=\"chem\">p(3) = (4/3)(27) - (10/3)(3) = 36 - 10 = 26</span> です。</p>",
    },

    // ── t2-3-q053 · short · exam · AHL · AHL 2.15 · 5 marks
    "t2-3-q053": {
      // EN: <p>Solve the inequality <span class="chem">6/(x - 1) &gt;= x - 2</span>.</p>
      stem: "<p>不等式 <span class=\"chem\">6/(x - 1) &gt;= x - 2</span> を解きなさい。</p>",
      hints: [
        // EN: Do not multiply both sides by <span class="chem">(x - 1)</span>: its sign is unknown. Subtract <span class="chem">x - 2</span> and use a common denominator.
        "両辺に <span class=\"chem\">(x - 1)</span> を掛けてはいけません：その符号はわかりません。<span class=\"chem\">x - 2</span> を引いて通分します。",
        // EN: The numerator <span class="chem">6 - (x^2 - 3x + 2) = -x^2 + 3x + 4 = -(x - 4)(x + 1)</span>.
        "分子は <span class=\"chem\">6 - (x^2 - 3x + 2) = -x^2 + 3x + 4 = -(x - 4)(x + 1)</span>。",
      ],
      // EN: <p><span class="chem">6/(x - 1) - (x - 2) = (6 - x^2 + 3x - 2)/(x - 1) = -(x - 4)(x + 1)/(x - 1)</span>. We need <span class="chem">(x - 4)(x + 1)/(x - 1) &lt;= 0</span>. Sign diagram: negative for <span class="chem">x &lt; -1</span>, positive on <span class="chem">(-1, 1)</span>, negative on <span class="chem">(1, 4)</span>, positive for <span class="chem">x &gt; 4</span>. Including the zeros <span class="chem">-1</span> and <span class="chem">4</span> but not <span class="chem">1</span>: <span class="chem">x &lt;= -1</span> or <span class="chem">1 &lt; x &lt;= 4</span>.</p>
      solution: "<p><span class=\"chem\">6/(x - 1) - (x - 2) = (6 - x^2 + 3x - 2)/(x - 1) = -(x - 4)(x + 1)/(x - 1)</span> です。<span class=\"chem\">(x - 4)(x + 1)/(x - 1) &lt;= 0</span> が必要です。符号表：<span class=\"chem\">x &lt; -1</span> で負、<span class=\"chem\">(-1, 1)</span> で正、<span class=\"chem\">(1, 4)</span> で負、<span class=\"chem\">x &gt; 4</span> で正。零点 <span class=\"chem\">-1</span> と <span class=\"chem\">4</span> は含め、<span class=\"chem\">1</span> は含めないので：<span class=\"chem\">x &lt;= -1</span> または <span class=\"chem\">1 &lt; x &lt;= 4</span>。</p>",
      // EN: <p><span class="chem">x &lt;= -1</span> or <span class="chem">1 &lt; x &lt;= 4</span></p>
      answer: "<p><span class=\"chem\">x &lt;= -1</span> または <span class=\"chem\">1 &lt; x &lt;= 4</span></p>",
      markscheme: [
        // EN: M1: moves everything to one side and combines: <span class="chem">(6 - (x - 2)(x - 1))/(x - 1) &gt;= 0</span>.
        "M1：すべてを片側に移してまとめる：<span class=\"chem\">(6 - (x - 2)(x - 1))/(x - 1) &gt;= 0</span>。",
        // EN: A1: <span class="chem">-(x - 4)(x + 1)/(x - 1) &gt;= 0</span> (or <span class="chem">(x - 4)(x + 1)/(x - 1) &lt;= 0</span>).
        "A1：<span class=\"chem\">-(x - 4)(x + 1)/(x - 1) &gt;= 0</span>（または <span class=\"chem\">(x - 4)(x + 1)/(x - 1) &lt;= 0</span>）。",
        // EN: M1: sign diagram with critical values <span class="chem">-1, 1, 4</span>.
        "M1：境界値 <span class=\"chem\">-1, 1, 4</span> による符号表。",
        // EN: A1: <span class="chem">x &lt;= -1</span>.
        "A1：<span class=\"chem\">x &lt;= -1</span>。",
        // EN: A1: <span class="chem">1 &lt; x &lt;= 4</span> (with <span class="chem">x = 1</span> excluded).
        "A1：<span class=\"chem\">1 &lt; x &lt;= 4</span>（<span class=\"chem\">x = 1</span> を除く）。",
      ],
    },

    // ── t2-3-q054 · numeric · challenge · AHL · AHL 2.16 · 5 marks
    "t2-3-q054": {
      // EN: <p>Solve the equation <span class="chem">|x^2 - 6| = x</span>, and give the smallest solution.</p>
      stem: "<p>方程式 <span class=\"chem\">|x^2 - 6| = x</span> を解き、最小の解を答えなさい。</p>",
      hints: [
        // EN: Decode: the left side is never negative, so any solution must satisfy <span class="chem">x &gt;= 0</span>. This hidden condition removes some of the algebraic roots.
        "解読：左辺は決して負にならないので、どの解も <span class=\"chem\">x &gt;= 0</span> を満たさなければなりません。この隠れた条件により、代数的に得られる解のいくつかが除外されます。",
        // EN: Split into <span class="chem">x^2 - 6 = x</span> and <span class="chem">x^2 - 6 = -x</span>, and solve each quadratic.
        "<span class=\"chem\">x^2 - 6 = x</span> と <span class=\"chem\">x^2 - 6 = -x</span> に分けて、それぞれの 2 次方程式を解きます。",
        // EN: You should get <span class="chem">x = 3, -2</span> and <span class="chem">x = 2, -3</span>. Check each one in the original equation.
        "<span class=\"chem\">x = 3, -2</span> と <span class=\"chem\">x = 2, -3</span> が得られるはずです。それぞれを元の方程式で確かめます。",
      ],
      // EN: <p><strong>Decode.</strong> <span class="chem">|x^2 - 6| &gt;= 0</span>, so <span class="chem">x &gt;= 0</span>.</p><p><span class="chem">x^2 - x - 6 = 0 => (x - 3)(x + 2) = 0 => x = 3</span> or <span class="chem">x = -2</span>. <span class="chem">x^2 + x - 6 = 0 => (x + 3)(x - 2) = 0 => x = -3</span> or <span class="chem">x = 2</span>. Rejecting the negative values: <span class="chem">x = 2</span> (<span class="chem">|4 - 6| = 2</span>) and <span class="chem">x = 3</span> (<span class="chem">|9 - 6| = 3</span>). The smallest solution is <span class="chem">2</span>; the tempting <span class="chem">-3</span> fails because <span class="chem">|9 - 6| = 3 != -3</span>.</p>
      solution: "<p><strong>解読。</strong><span class=\"chem\">|x^2 - 6| &gt;= 0</span> なので <span class=\"chem\">x &gt;= 0</span> です。</p><p><span class=\"chem\">x^2 - x - 6 = 0 => (x - 3)(x + 2) = 0 => x = 3</span> または <span class=\"chem\">x = -2</span>。<span class=\"chem\">x^2 + x - 6 = 0 => (x + 3)(x - 2) = 0 => x = -3</span> または <span class=\"chem\">x = 2</span>。負の値を除外すると：<span class=\"chem\">x = 2</span>（<span class=\"chem\">|4 - 6| = 2</span>）と <span class=\"chem\">x = 3</span>（<span class=\"chem\">|9 - 6| = 3</span>）。最小の解は <span class=\"chem\">2</span> です。つい選びたくなる <span class=\"chem\">-3</span> は <span class=\"chem\">|9 - 6| = 3 != -3</span> なので成り立ちません。</p>",
    },

    // ── t2-3-q055 · short · challenge · AHL · AHL 2.16 · 8 marks
    "t2-3-q055": {
      // EN: <p>Let <span class="chem">f(x) = x^2 - 2x - 3</span>.</p><p>(a) Sketch the graph of <span class="chem">y = |f(x)|</span>, showing the coordinates of the axis intercepts and of any local maximum. <strong>[2 marks]</strong></p><p>(b) Find the value of <span class="chem">k</span> for which the equation <span class="chem">|f(x)| = k</span> has exactly three solutions. <strong>[2 marks]</strong></p><p>(c) Sketch the graph of <span class="chem">y = f(|x|)</span>, showing the coordinates of the axis intercepts and of the minimum points. <strong>[2 marks]</strong></p><p>(d) Find the value of <span class="chem">k</span> for which the equation <span class="chem">f(|x|) = k</span> has exactly three solutions. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = x^2 - 2x - 3</span> とする。</p><p>(a) 軸との交点と極大点の座標を示して、<span class=\"chem\">y = |f(x)|</span> のグラフの概形を描きなさい (Sketch)。<strong>[2 marks]</strong></p><p>(b) 方程式 <span class=\"chem\">|f(x)| = k</span> がちょうど 3 つの解をもつような <span class=\"chem\">k</span> の値を求めなさい (Find)。<strong>[2 marks]</strong></p><p>(c) 軸との交点と極小点の座標を示して、<span class=\"chem\">y = f(|x|)</span> のグラフの概形を描きなさい。<strong>[2 marks]</strong></p><p>(d) 方程式 <span class=\"chem\">f(|x|) = k</span> がちょうど 3 つの解をもつような <span class=\"chem\">k</span> の値を求めなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: "exactly three solutions" means a horizontal line <span class="chem">y = k</span> meets the graph three times. Sketch first, then slide a horizontal line up and down.
        "解読：「ちょうど 3 つの解」とは、水平線 <span class=\"chem\">y = k</span> がグラフと 3 回交わるということです。まず概形を描き、次に水平線を上下に動かします。",
        // EN: <span class="chem">f(x) = (x - 3)(x + 1) = (x - 1)^2 - 4</span>: vertex <span class="chem">(1, -4)</span>. <span class="chem">|f|</span> reflects the part below the axis; <span class="chem">f(|x|)</span> keeps the part with <span class="chem">x &gt;= 0</span> and mirrors it.
        "<span class=\"chem\">f(x) = (x - 3)(x + 1) = (x - 1)^2 - 4</span>：頂点 <span class=\"chem\">(1, -4)</span>。<span class=\"chem\">|f|</span> は軸より下の部分を折り返し、<span class=\"chem\">f(|x|)</span> は <span class=\"chem\">x &gt;= 0</span> の部分を残してそれを対称に写します。",
        // EN: For <span class="chem">y = f(|x|)</span>, an odd number of solutions needs <span class="chem">x = 0</span> to be one of them (the others come in pairs <span class="chem">+-x</span>).
        "<span class=\"chem\">y = f(|x|)</span> で解の個数が奇数になるには、<span class=\"chem\">x = 0</span> が解の 1 つでなければなりません（他の解は <span class=\"chem\">+-x</span> の組になります）。",
      ],
      // EN: <p><strong>Decode.</strong> Counting solutions means counting where a horizontal line meets each graph.</p><p>(a) <span class="chem">f(x) = (x - 3)(x + 1)</span> has vertex <span class="chem">(1, -4)</span>. In <span class="chem">|f|</span> the vertex becomes a local maximum <span class="chem">(1, 4)</span>; <span class="chem">|f(0)| = 3</span>.</p><p>(b) For <span class="chem">0 &lt; k &lt; 4</span> there are four solutions, for <span class="chem">k &gt; 4</span> two. At <span class="chem">k = 4</span> the line touches the maximum: three solutions (<span class="chem">x = 1, 1 +- 2sqrt(2)</span>).</p><p>(c) For <span class="chem">x &gt;= 0</span>, <span class="chem">f(|x|) = f(x)</span>, with minimum <span class="chem">(1, -4)</span> and intercepts <span class="chem">(0, -3)</span>, <span class="chem">(3, 0)</span>; reflect in the <span class="chem">y</span>-axis.</p><p>(d) Solutions come in pairs <span class="chem">+-x</span> unless <span class="chem">x = 0</span> is a solution, so <span class="chem">k = f(0) = -3</span>. Check: <span class="chem">x^2 - 2|x| - 3 = -3</span> gives <span class="chem">|x|(|x| - 2) = 0</span>, so <span class="chem">x = 0, +-2</span>: three solutions.</p>
      solution: "<p><strong>解読。</strong>解の個数を数えることは、水平線が各グラフと交わる点を数えることです。</p><p>(a) <span class=\"chem\">f(x) = (x - 3)(x + 1)</span> の頂点は <span class=\"chem\">(1, -4)</span> です。<span class=\"chem\">|f|</span> ではこの頂点が極大点 <span class=\"chem\">(1, 4)</span> になります。<span class=\"chem\">|f(0)| = 3</span>。</p><p>(b) <span class=\"chem\">0 &lt; k &lt; 4</span> では解は 4 つ、<span class=\"chem\">k &gt; 4</span> では 2 つです。<span class=\"chem\">k = 4</span> では直線が極大点に接し、解は 3 つです（<span class=\"chem\">x = 1, 1 +- 2sqrt(2)</span>）。</p><p>(c) <span class=\"chem\">x &gt;= 0</span> では <span class=\"chem\">f(|x|) = f(x)</span> で、極小点は <span class=\"chem\">(1, -4)</span>、交点は <span class=\"chem\">(0, -3)</span>、<span class=\"chem\">(3, 0)</span> です。これを <span class=\"chem\">y</span> 軸に関して対称移動します。</p><p>(d) <span class=\"chem\">x = 0</span> が解でない限り解は <span class=\"chem\">+-x</span> の組になるので、<span class=\"chem\">k = f(0) = -3</span> です。確認：<span class=\"chem\">x^2 - 2|x| - 3 = -3</span> より <span class=\"chem\">|x|(|x| - 2) = 0</span> なので <span class=\"chem\">x = 0, +-2</span>：解は 3 つです。</p>",
      // EN: <p>(a) W-shape: <span class="chem">x</span>-intercepts <span class="chem">(-1, 0)</span>, <span class="chem">(3, 0)</span> (sharp points), <span class="chem">y</span>-intercept <span class="chem">(0, 3)</span>, local maximum <span class="chem">(1, 4)</span>. (b) <span class="chem">k = 4</span>. (c) Symmetric about the <span class="chem">y</span>-axis: minima <span class="chem">(+-1, -4)</span>, <span class="chem">x</span>-intercepts <span class="chem">(+-3, 0)</span>, <span class="chem">y</span>-intercept <span class="chem">(0, -3)</span> (a local maximum with a sharp point). (d) <span class="chem">k = -3</span>.</p>
      answer: "<p>(a) W 字形：<span class=\"chem\">x</span> 切片 <span class=\"chem\">(-1, 0)</span>、<span class=\"chem\">(3, 0)</span>（とがった点）、<span class=\"chem\">y</span> 切片 <span class=\"chem\">(0, 3)</span>、極大点 <span class=\"chem\">(1, 4)</span>。(b) <span class=\"chem\">k = 4</span>。(c) <span class=\"chem\">y</span> 軸に関して対称：極小点 <span class=\"chem\">(+-1, -4)</span>、<span class=\"chem\">x</span> 切片 <span class=\"chem\">(+-3, 0)</span>、<span class=\"chem\">y</span> 切片 <span class=\"chem\">(0, -3)</span>（とがった点をもつ極大点）。(d) <span class=\"chem\">k = -3</span>。</p>",
      markscheme: [
        // EN: A1: (a) part of the parabola below the axis, between <span class="chem">x = -1</span> and <span class="chem">x = 3</span>, reflected upwards, with sharp points at <span class="chem">(-1, 0)</span> and <span class="chem">(3, 0)</span>.
        "A1：(a) 放物線の <span class=\"chem\">x = -1</span> と <span class=\"chem\">x = 3</span> の間の軸より下の部分を上に折り返し、<span class=\"chem\">(-1, 0)</span> と <span class=\"chem\">(3, 0)</span> でとがった点をもつ。",
        // EN: A1: (a) local maximum <span class="chem">(1, 4)</span> and <span class="chem">y</span>-intercept <span class="chem">(0, 3)</span>.
        "A1：(a) 極大点 <span class=\"chem\">(1, 4)</span> と <span class=\"chem\">y</span> 切片 <span class=\"chem\">(0, 3)</span>。",
        // EN: R1: (b) three intersections only when the line passes through the local maximum.
        "R1：(b) 交点が 3 つになるのは、直線が極大点を通るときだけである。",
        // EN: A1: (b) <span class="chem">k = 4</span>.
        "A1：(b) <span class=\"chem\">k = 4</span>。",
        // EN: A1: (c) right half is <span class="chem">y = f(x)</span> for <span class="chem">x &gt;= 0</span>, reflected in the <span class="chem">y</span>-axis.
        "A1：(c) 右半分は <span class=\"chem\">x &gt;= 0</span> における <span class=\"chem\">y = f(x)</span> で、それを <span class=\"chem\">y</span> 軸に関して対称移動する。",
        // EN: A1: (c) minima <span class="chem">(+-1, -4)</span>, intercepts <span class="chem">(+-3, 0)</span> and <span class="chem">(0, -3)</span>.
        "A1：(c) 極小点 <span class=\"chem\">(+-1, -4)</span>、交点 <span class=\"chem\">(+-3, 0)</span> と <span class=\"chem\">(0, -3)</span>。",
        // EN: R1: (d) three solutions only when the line passes through the point on the <span class="chem">y</span>-axis, <span class="chem">(0, -3)</span>.
        "R1：(d) 解が 3 つになるのは、直線が <span class=\"chem\">y</span> 軸上の点 <span class=\"chem\">(0, -3)</span> を通るときだけである。",
        // EN: A1: (d) <span class="chem">k = -3</span>.
        "A1：(d) <span class=\"chem\">k = -3</span>。",
      ],
    },

    // ── t2-3-q056 · numeric · foundation · AHL · AHL 2.16 · 2 marks
    "t2-3-q056": {
      // EN: <p>The graph of <span class="chem">y = f(x)</span> has a local maximum at <span class="chem">(2, 8)</span>. Find the <span class="chem">x</span>-coordinate of the local maximum of the graph of <span class="chem">y = f(2x + 4)</span>.</p>
      stem: "<p><span class=\"chem\">y = f(x)</span> のグラフは <span class=\"chem\">(2, 8)</span> で極大になる。<span class=\"chem\">y = f(2x + 4)</span> のグラフの極大点の <span class=\"chem\">x</span> 座標を求めなさい (Find)。</p>",
      hints: [
        // EN: The new graph reaches the same height <span class="chem">8</span> when the input to <span class="chem">f</span> is <span class="chem">2</span>.
        "新しいグラフは、<span class=\"chem\">f</span> への入力が <span class=\"chem\">2</span> になるときに同じ高さ <span class=\"chem\">8</span> に達します。",
        // EN: Solve <span class="chem">2x + 4 = 2</span>.
        "<span class=\"chem\">2x + 4 = 2</span> を解きます。",
      ],
      // EN: <p>The maximum of <span class="chem">f</span> occurs when its input is <span class="chem">2</span>, so <span class="chem">2x + 4 = 2 => x = -1</span>. The local maximum of <span class="chem">y = f(2x + 4)</span> is at <span class="chem">(-1, 8)</span>. (Equivalently: translate <span class="chem">4</span> left, then stretch horizontally by <span class="chem">1/2</span>: <span class="chem">(2 - 4)/2 = -1</span>.)</p>
      solution: "<p><span class=\"chem\">f</span> の最大値は入力が <span class=\"chem\">2</span> のときにとるので、<span class=\"chem\">2x + 4 = 2 => x = -1</span> です。<span class=\"chem\">y = f(2x + 4)</span> の極大点は <span class=\"chem\">(-1, 8)</span> にあります。（同じことですが：左へ <span class=\"chem\">4</span> 平行移動し、次に横方向に <span class=\"chem\">1/2</span> 倍に縮小します：<span class=\"chem\">(2 - 4)/2 = -1</span>。）</p>",
    },

    // ── t2-3-q057 · numeric · exam · AHL · AHL 2.13 · 4 marks
    "t2-3-q057": {
      // EN: <p>The graph of <span class="chem">f(x) = (ax^2 + bx + 3)/(x - 1)</span>, <span class="chem">x != 1</span>, has oblique asymptote <span class="chem">y = 2x + 5</span>. Find the value of <span class="chem">b</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = (ax^2 + bx + 3)/(x - 1)</span>, <span class=\"chem\">x != 1</span> のグラフは斜漸近線 <span class=\"chem\">y = 2x + 5</span> をもつ。<span class=\"chem\">b</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Divide <span class="chem">ax^2 + bx + 3</span> by <span class="chem">(x - 1)</span>: the quotient is the oblique asymptote.
        "<span class=\"chem\">ax^2 + bx + 3</span> を <span class=\"chem\">(x - 1)</span> で割ります：商が斜漸近線です。",
        // EN: The quotient is <span class="chem">ax + (a + b)</span>. Compare it with <span class="chem">2x + 5</span>.
        "商は <span class=\"chem\">ax + (a + b)</span> です。これを <span class=\"chem\">2x + 5</span> と比べます。",
      ],
      // EN: <p><span class="chem">ax^2 + bx + 3 = (x - 1)(ax + a + b) + (a + b + 3)</span>, so the oblique asymptote is <span class="chem">y = ax + (a + b)</span>. Matching with <span class="chem">y = 2x + 5</span>: <span class="chem">a = 2</span> and <span class="chem">a + b = 5</span>, so <span class="chem">b = 3</span>.</p>
      solution: "<p><span class=\"chem\">ax^2 + bx + 3 = (x - 1)(ax + a + b) + (a + b + 3)</span> なので、斜漸近線は <span class=\"chem\">y = ax + (a + b)</span> です。<span class=\"chem\">y = 2x + 5</span> と比べると <span class=\"chem\">a = 2</span>、<span class=\"chem\">a + b = 5</span> なので <span class=\"chem\">b = 3</span> です。</p>",
    },

    // ── t2-3-q058 · short · challenge · AHL · AHL 2.12 · 16 marks
    "t2-3-q058": {
      // EN: <p>This investigation looks at sums of powers of the roots of a cubic without finding the roots.</p><p>The equation <span class="chem">x^3 - 4x + 1 = 0</span> has roots <span class="chem">alpha</span>, <span class="chem">beta</span>, <span class="chem">gamma</span>. Let <span class="chem">S_n = alpha^n + beta^n + gamma^n</span>.</p><p>(a) Write down the value of <span class="chem">S_1</span>. <strong>[1 mark]</strong></p><p>(b) Write down the value of <span class="chem">alpha beta + beta gamma + gamma alpha</span>, and hence show that <span class="chem">S_2 = 8</span>. <strong>[3 marks]</strong></p><p>(c) Show that <span class="chem">alpha^{n+3} = 4alpha^{n+1} - alpha^n</span>, and deduce that <span class="chem">S_{n+3} = 4S_{n+1} - S_n</span> for <span class="chem">n &gt;= 0</span>. <strong>[3 marks]</strong></p><p>(d) Find <span class="chem">S_3</span>, <span class="chem">S_4</span> and <span class="chem">S_5</span>. <strong>[3 marks]</strong></p><p>(e) Use your GDC to find the three roots, and verify your value of <span class="chem">S_4</span>. <strong>[2 marks]</strong></p><p>(f) Explain why <span class="chem">S_n</span> is an integer for every positive integer <span class="chem">n</span>. <strong>[2 marks]</strong></p><p>(g) Find the value of <span class="chem">1/alpha + 1/beta + 1/gamma</span>. <strong>[2 marks]</strong></p>
      stem: "<p>この探究では、3 次方程式の解を求めずに、解のべき乗の和を調べる。</p><p>方程式 <span class=\"chem\">x^3 - 4x + 1 = 0</span> の解を <span class=\"chem\">alpha</span>、<span class=\"chem\">beta</span>、<span class=\"chem\">gamma</span> とする。<span class=\"chem\">S_n = alpha^n + beta^n + gamma^n</span> とおく。</p><p>(a) <span class=\"chem\">S_1</span> の値を書きなさい (Write down)。<strong>[1 mark]</strong></p><p>(b) <span class=\"chem\">alpha beta + beta gamma + gamma alpha</span> の値を書き、これを用いて (hence) <span class=\"chem\">S_2 = 8</span> を示しなさい (Show that)。<strong>[3 marks]</strong></p><p>(c) <span class=\"chem\">alpha^{n+3} = 4alpha^{n+1} - alpha^n</span> を示し、<span class=\"chem\">n &gt;= 0</span> に対して <span class=\"chem\">S_{n+3} = 4S_{n+1} - S_n</span> であることを導きなさい (Deduce)。<strong>[3 marks]</strong></p><p>(d) <span class=\"chem\">S_3</span>、<span class=\"chem\">S_4</span>、<span class=\"chem\">S_5</span> を求めなさい (Find)。<strong>[3 marks]</strong></p><p>(e) GDC を用いて 3 つの解を求め、<span class=\"chem\">S_4</span> の値を確かめなさい (Verify)。<strong>[2 marks]</strong></p><p>(f) すべての正の整数 <span class=\"chem\">n</span> に対して <span class=\"chem\">S_n</span> が整数である理由を説明しなさい (Explain)。<strong>[2 marks]</strong></p><p>(g) <span class=\"chem\">1/alpha + 1/beta + 1/gamma</span> の値を求めなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: the theme is "use the coefficients, not the roots". Part (a) and (b) are the formula-booklet sum and product of roots; (c) uses the fact that each root satisfies the equation.
        "解読：テーマは「解ではなく係数を使う」ことです。(a) と (b) は公式集の解の和と積、(c) は各解が方程式を満たすという事実を使います。",
        // EN: For <span class="chem">x^3 + 0x^2 - 4x + 1</span>: sum <span class="chem">= 0</span>, pair sum <span class="chem">= -4</span>, product <span class="chem">= -1</span>.
        "<span class=\"chem\">x^3 + 0x^2 - 4x + 1</span> について：和 <span class=\"chem\">= 0</span>、2 つずつの積の和 <span class=\"chem\">= -4</span>、積 <span class=\"chem\">= -1</span>。",
        // EN: For (d), you need a starting value <span class="chem">S_0 = alpha^0 + beta^0 + gamma^0 = 3</span>.
        "(d) では初期値 <span class=\"chem\">S_0 = alpha^0 + beta^0 + gamma^0 = 3</span> が必要です。",
        // EN: For (g), put the three fractions over the common denominator <span class="chem">alpha beta gamma</span>.
        "(g) では 3 つの分数を共通の分母 <span class=\"chem\">alpha beta gamma</span> で通分します。",
      ],
      // EN: <p><strong>Decode.</strong> Every part replaces "find the roots" by "use the coefficients"; the GDC is only a check.</p><p>(a) <span class="chem">S_1 = alpha + beta + gamma = 0</span>. (b) Pair sum <span class="chem">= -4</span>; <span class="chem">S_2 = 0^2 - 2(-4) = 8</span>.</p><p>(c) <span class="chem">alpha^3 - 4alpha + 1 = 0 => alpha^3 = 4alpha - 1 => alpha^{n+3} = 4alpha^{n+1} - alpha^n</span>. Writing the same for <span class="chem">beta</span>, <span class="chem">gamma</span> and adding gives the recurrence.</p><p>(d) With <span class="chem">S_0 = 3</span>: <span class="chem">S_3 = 4(0) - 3 = -3</span>, <span class="chem">S_4 = 4(8) - 0 = 32</span>, <span class="chem">S_5 = 4(-3) - 8 = -20</span>. (Next: <span class="chem">S_6 = 4(32) + 3 = 131</span>.)</p><p>(e) Roots <span class="chem">-2.1149, 0.25410, 1.8608</span>; <span class="chem">(-2.1149)^4 + 0.25410^4 + 1.8608^4 ≈ 20.007 + 0.004 + 11.989 = 32.0</span>.</p><p>(f) The first three values are integers and the recurrence has integer coefficients, so by induction every <span class="chem">S_n</span> is an integer, even though the roots are irrational.</p><p>(g) <span class="chem">alpha beta gamma = -1</span>, so <span class="chem">1/alpha + 1/beta + 1/gamma = (-4)/(-1) = 4</span>.</p>
      solution: "<p><strong>解読。</strong>どの小問も「解を求める」代わりに「係数を使う」ものであり、GDC は確認用にすぎません。</p><p>(a) <span class=\"chem\">S_1 = alpha + beta + gamma = 0</span>。(b) 2 つずつの積の和 <span class=\"chem\">= -4</span>；<span class=\"chem\">S_2 = 0^2 - 2(-4) = 8</span>。</p><p>(c) <span class=\"chem\">alpha^3 - 4alpha + 1 = 0 => alpha^3 = 4alpha - 1 => alpha^{n+3} = 4alpha^{n+1} - alpha^n</span>。<span class=\"chem\">beta</span>、<span class=\"chem\">gamma</span> についても同じ式を書いて足すと、漸化式が得られます。</p><p>(d) <span class=\"chem\">S_0 = 3</span> を用いて：<span class=\"chem\">S_3 = 4(0) - 3 = -3</span>、<span class=\"chem\">S_4 = 4(8) - 0 = 32</span>、<span class=\"chem\">S_5 = 4(-3) - 8 = -20</span>。（次は <span class=\"chem\">S_6 = 4(32) + 3 = 131</span>。）</p><p>(e) 解 <span class=\"chem\">-2.1149, 0.25410, 1.8608</span>；<span class=\"chem\">(-2.1149)^4 + 0.25410^4 + 1.8608^4 ≈ 20.007 + 0.004 + 11.989 = 32.0</span>。</p><p>(f) 最初の 3 つの値は整数で、漸化式の係数も整数なので、解は無理数であるにもかかわらず、帰納法によりすべての <span class=\"chem\">S_n</span> は整数です。</p><p>(g) <span class=\"chem\">alpha beta gamma = -1</span> なので <span class=\"chem\">1/alpha + 1/beta + 1/gamma = (-4)/(-1) = 4</span> です。</p>",
      // EN: <p>(a) <span class="chem">S_1 = 0</span>. (b) <span class="chem">-4</span>; <span class="chem">S_2 = 0^2 - 2(-4) = 8</span>. (c) <span class="chem">alpha^3 = 4alpha - 1</span>; multiply by <span class="chem">alpha^n</span> and add the three versions. (d) <span class="chem">S_3 = -3</span>, <span class="chem">S_4 = 32</span>, <span class="chem">S_5 = -20</span>. (e) Roots <span class="chem">-2.11, 0.254, 1.86</span>; the sum of fourth powers is <span class="chem">32</span>. (f) <span class="chem">S_0 = 3</span>, <span class="chem">S_1 = 0</span>, <span class="chem">S_2 = 8</span> are integers and the recurrence uses only integer coefficients, so every later term is an integer (by induction). (g) <span class="chem">4</span>.</p>
      answer: "<p>(a) <span class=\"chem\">S_1 = 0</span>。(b) <span class=\"chem\">-4</span>；<span class=\"chem\">S_2 = 0^2 - 2(-4) = 8</span>。(c) <span class=\"chem\">alpha^3 = 4alpha - 1</span>；<span class=\"chem\">alpha^n</span> を掛けて 3 つの式を足す。(d) <span class=\"chem\">S_3 = -3</span>、<span class=\"chem\">S_4 = 32</span>、<span class=\"chem\">S_5 = -20</span>。(e) 解 <span class=\"chem\">-2.11, 0.254, 1.86</span>；4 乗の和は <span class=\"chem\">32</span>。(f) <span class=\"chem\">S_0 = 3</span>、<span class=\"chem\">S_1 = 0</span>、<span class=\"chem\">S_2 = 8</span> は整数であり、漸化式は整数の係数だけを使うので、それ以降の項もすべて整数である（帰納法）。(g) <span class=\"chem\">4</span>。</p>",
      markscheme: [
        // EN: A1: (a) <span class="chem">S_1 = -0/1 = 0</span>.
        "A1：(a) <span class=\"chem\">S_1 = -0/1 = 0</span>。",
        // EN: A1: (b) <span class="chem">alpha beta + beta gamma + gamma alpha = -4</span>.
        "A1：(b) <span class=\"chem\">alpha beta + beta gamma + gamma alpha = -4</span>。",
        // EN: M1: (b) uses <span class="chem">S_2 = (alpha + beta + gamma)^2 - 2(alpha beta + beta gamma + gamma alpha)</span>.
        "M1：(b) <span class=\"chem\">S_2 = (alpha + beta + gamma)^2 - 2(alpha beta + beta gamma + gamma alpha)</span> を使う。",
        // EN: A1: (b) correct substitution <span class="chem">S_2 = 0^2 - 2(-4)</span> (<span class="chem">= 8</span>, AG).
        "A1：(b) 正しい代入 <span class=\"chem\">S_2 = 0^2 - 2(-4)</span>（<span class=\"chem\">= 8</span>、AG）。",
        // EN: M1: (c) <span class="chem">alpha</span> is a root, so <span class="chem">alpha^3 = 4alpha - 1</span>.
        "M1：(c) <span class=\"chem\">alpha</span> は解なので <span class=\"chem\">alpha^3 = 4alpha - 1</span>。",
        // EN: A1: (c) multiplies by <span class="chem">alpha^n</span>: <span class="chem">alpha^{n+3} = 4alpha^{n+1} - alpha^n</span>.
        "A1：(c) <span class=\"chem\">alpha^n</span> を掛ける：<span class=\"chem\">alpha^{n+3} = 4alpha^{n+1} - alpha^n</span>。",
        // EN: R1: (c) the same holds for <span class="chem">beta</span> and <span class="chem">gamma</span>; adding gives <span class="chem">S_{n+3} = 4S_{n+1} - S_n</span> (AG).
        "R1：(c) <span class=\"chem\">beta</span> と <span class=\"chem\">gamma</span> についても同様に成り立ち、足すと <span class=\"chem\">S_{n+3} = 4S_{n+1} - S_n</span>（AG）。",
        // EN: A1: (d) <span class="chem">S_3 = 4S_1 - S_0 = 0 - 3 = -3</span> (using <span class="chem">S_0 = 3</span>).
        "A1：(d) <span class=\"chem\">S_3 = 4S_1 - S_0 = 0 - 3 = -3</span>（<span class=\"chem\">S_0 = 3</span> を使う）。",
        // EN: A1: (d) <span class="chem">S_4 = 4S_2 - S_1 = 32</span>.
        "A1：(d) <span class=\"chem\">S_4 = 4S_2 - S_1 = 32</span>。",
        // EN: A1: (d) <span class="chem">S_5 = 4S_3 - S_2 = -12 - 8 = -20</span>.
        "A1：(d) <span class=\"chem\">S_5 = 4S_3 - S_2 = -12 - 8 = -20</span>。",
        // EN: A1: (e) roots <span class="chem">-2.11, 0.254, 1.86</span>.
        "A1：(e) 解 <span class=\"chem\">-2.11, 0.254, 1.86</span>。",
        // EN: A1: (e) sum of fourth powers of the stored roots <span class="chem">= 32</span>.
        "A1：(e) 記憶させた解の 4 乗の和 <span class=\"chem\">= 32</span>。",
        // EN: R1: (f) <span class="chem">S_0, S_1, S_2</span> are integers.
        "R1：(f) <span class=\"chem\">S_0, S_1, S_2</span> は整数である。",
        // EN: R1: (f) each later term is an integer combination of earlier terms, so all are integers (induction).
        "R1：(f) それ以降の各項は前の項の整数係数の結合なので、すべて整数である（帰納法）。",
        // EN: M1: (g) <span class="chem">(alpha beta + beta gamma + gamma alpha)/(alpha beta gamma)</span> with <span class="chem">alpha beta gamma = -1</span>.
        "M1：(g) <span class=\"chem\">alpha beta gamma = -1</span> として <span class=\"chem\">(alpha beta + beta gamma + gamma alpha)/(alpha beta gamma)</span>。",
        // EN: A1: (g) <span class="chem">(-4)/(-1) = 4</span>.
        "A1：(g) <span class=\"chem\">(-4)/(-1) = 4</span>。",
      ],
    },

    // ── t2-3-q059 · short · challenge · AHL · AHL 2.16 · 16 marks
    "t2-3-q059": {
      // EN: <p>This investigation looks at the reciprocal graphs of the family <span class="chem">f_c(x) = x^2 - 2x + c</span>, where <span class="chem">c</span> is a real constant.</p><p>(a) For <span class="chem">c = -3</span>, <span class="chem">c = 1</span> and <span class="chem">c = 5</span>, write down the number of vertical asymptotes of the graph of <span class="chem">y = 1/f_c(x)</span>. <strong>[3 marks]</strong></p><p>(b) Write <span class="chem">f_c(x)</span> in the form <span class="chem">(x - 1)^2 + q</span>, and hence state the condition on <span class="chem">c</span> for <span class="chem">y = 1/f_c(x)</span> to have exactly two vertical asymptotes. <strong>[2 marks]</strong></p><p>(c) For <span class="chem">c &gt; 1</span>, show that the graph of <span class="chem">y = 1/f_c(x)</span> has a maximum point at <span class="chem">(1, 1/(c - 1))</span>. <strong>[2 marks]</strong></p><p>The graphs of <span class="chem">y = f_c(x)</span> and <span class="chem">y = 1/f_c(x)</span> meet at <em>invariant points</em>, where <span class="chem">f_c(x) = 1</span> or <span class="chem">f_c(x) = -1</span>.</p><p>(d) Find the number of invariant points when <span class="chem">c = -3</span> and when <span class="chem">c = 1.5</span>. <strong>[3 marks]</strong></p><p>(e) Determine the number of invariant points for every value of <span class="chem">c</span>. <strong>[4 marks]</strong></p><p>(f) Find the value of <span class="chem">c</span> for which the maximum point in (c) is itself an invariant point, and check that this agrees with (e). <strong>[2 marks]</strong></p>
      stem: "<p>この探究では、<span class=\"chem\">c</span> を実数の定数とする関数の族 <span class=\"chem\">f_c(x) = x^2 - 2x + c</span> の逆数のグラフを調べる。</p><p>(a) <span class=\"chem\">c = -3</span>、<span class=\"chem\">c = 1</span>、<span class=\"chem\">c = 5</span> のそれぞれについて、<span class=\"chem\">y = 1/f_c(x)</span> のグラフの鉛直漸近線の本数を書きなさい (Write down)。<strong>[3 marks]</strong></p><p>(b) <span class=\"chem\">f_c(x)</span> を <span class=\"chem\">(x - 1)^2 + q</span> の形に書き、これを用いて (hence)、<span class=\"chem\">y = 1/f_c(x)</span> がちょうど 2 本の鉛直漸近線をもつための <span class=\"chem\">c</span> の条件を述べなさい (State)。<strong>[2 marks]</strong></p><p>(c) <span class=\"chem\">c &gt; 1</span> のとき、<span class=\"chem\">y = 1/f_c(x)</span> のグラフが <span class=\"chem\">(1, 1/(c - 1))</span> に極大点をもつことを示しなさい (Show that)。<strong>[2 marks]</strong></p><p><span class=\"chem\">y = f_c(x)</span> と <span class=\"chem\">y = 1/f_c(x)</span> のグラフは<em>不変点</em>で交わる。不変点では <span class=\"chem\">f_c(x) = 1</span> または <span class=\"chem\">f_c(x) = -1</span> である。</p><p>(d) <span class=\"chem\">c = -3</span> のときと <span class=\"chem\">c = 1.5</span> のときの不変点の個数を求めなさい (Find)。<strong>[3 marks]</strong></p><p>(e) <span class=\"chem\">c</span> のすべての値について、不変点の個数を決定しなさい (Determine)。<strong>[4 marks]</strong></p><p>(f) (c) の極大点がそれ自体不変点となるような <span class=\"chem\">c</span> の値を求め、それが (e) と一致することを確かめなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: vertical asymptotes of <span class="chem">1/f</span> are the zeros of <span class="chem">f</span>; invariant points are where <span class="chem">f = +-1</span>. Each question is really "how many real roots does a quadratic have?"
        "解読：<span class=\"chem\">1/f</span> の鉛直漸近線は <span class=\"chem\">f</span> の零点であり、不変点は <span class=\"chem\">f = +-1</span> となる点です。どの問いも実は「2 次方程式は実数解をいくつもつか？」という問いです。",
        // EN: Completing the square, <span class="chem">f_c(x) = (x - 1)^2 + (c - 1)</span>, so <span class="chem">f_c = k</span> becomes <span class="chem">(x - 1)^2 = k - c + 1</span>.
        "平方完成すると <span class=\"chem\">f_c(x) = (x - 1)^2 + (c - 1)</span> なので、<span class=\"chem\">f_c = k</span> は <span class=\"chem\">(x - 1)^2 = k - c + 1</span> になります。",
        // EN: <span class="chem">(x - 1)^2 = r</span> has 2 roots if <span class="chem">r &gt; 0</span>, 1 if <span class="chem">r = 0</span> and none if <span class="chem">r &lt; 0</span>. Use <span class="chem">k = 1</span> and <span class="chem">k = -1</span> separately.
        "<span class=\"chem\">(x - 1)^2 = r</span> は <span class=\"chem\">r &gt; 0</span> なら解を 2 個、<span class=\"chem\">r = 0</span> なら 1 個もち、<span class=\"chem\">r &lt; 0</span> なら解をもちません。<span class=\"chem\">k = 1</span> と <span class=\"chem\">k = -1</span> を別々に使います。",
        // EN: Use your GDC to graph <span class="chem">f_c</span> and <span class="chem">1/f_c</span> for a few values of <span class="chem">c</span> to check your counts.
        "GDC を用いていくつかの <span class=\"chem\">c</span> の値で <span class=\"chem\">f_c</span> と <span class=\"chem\">1/f_c</span> のグラフをかき、数えた個数を確かめます。",
      ],
      // EN: <p><strong>Decode.</strong> Every part reduces to counting the real roots of <span class="chem">(x - 1)^2 = r</span>.</p><p>(a) <span class="chem">c = -3</span>: zeros <span class="chem">3, -1</span> (2 asymptotes). <span class="chem">c = 1</span>: double zero at <span class="chem">1</span> (1 asymptote). <span class="chem">c = 5</span>: <span class="chem">(x - 1)^2 + 4 &gt; 0</span> (none).</p><p>(b) <span class="chem">f_c(x) = (x - 1)^2 + c - 1</span>; two zeros iff <span class="chem">c &lt; 1</span>.</p><p>(c) For <span class="chem">c &gt; 1</span>, <span class="chem">f_c &gt;= c - 1 &gt; 0</span> with equality at <span class="chem">x = 1</span>, so <span class="chem">1/f_c &lt;= 1/(c - 1)</span> with equality at <span class="chem">x = 1</span>.</p><p>(d), (e) <span class="chem">f_c = 1 &lt;=&gt; (x - 1)^2 = 2 - c</span>; <span class="chem">f_c = -1 &lt;=&gt; (x - 1)^2 = -c</span>. For <span class="chem">c = -3</span>: <span class="chem">5 &gt; 0</span> and <span class="chem">3 &gt; 0</span>, so 4 points. For <span class="chem">c = 1.5</span>: <span class="chem">0.5 &gt; 0</span> and <span class="chem">-1.5 &lt; 0</span>, so 2 points. In general: <span class="chem">c &lt; 0</span>: 4; <span class="chem">c = 0</span>: 2 + 1 = 3; <span class="chem">0 &lt; c &lt; 2</span>: 2; <span class="chem">c = 2</span>: 1; <span class="chem">c &gt; 2</span>: 0.</p><p>(f) <span class="chem">1/(c - 1) = 1 => c = 2</span>. Then <span class="chem">f_2(x) = (x - 1)^2 + 1</span> meets <span class="chem">y = 1</span> only at <span class="chem">(1, 1)</span>, matching the count of 1 in (e).</p>
      solution: "<p><strong>解読。</strong>どの小問も <span class=\"chem\">(x - 1)^2 = r</span> の実数解の個数を数えることに帰着します。</p><p>(a) <span class=\"chem\">c = -3</span>：零点 <span class=\"chem\">3, -1</span>（漸近線 2 本）。<span class=\"chem\">c = 1</span>：<span class=\"chem\">1</span> で重複した零点（漸近線 1 本）。<span class=\"chem\">c = 5</span>：<span class=\"chem\">(x - 1)^2 + 4 &gt; 0</span>（なし）。</p><p>(b) <span class=\"chem\">f_c(x) = (x - 1)^2 + c - 1</span>；零点が 2 つあるのは <span class=\"chem\">c &lt; 1</span> のとき、かつそのときに限ります。</p><p>(c) <span class=\"chem\">c &gt; 1</span> のとき、<span class=\"chem\">f_c &gt;= c - 1 &gt; 0</span> で、等号は <span class=\"chem\">x = 1</span> のときに成り立ちます。よって <span class=\"chem\">1/f_c &lt;= 1/(c - 1)</span> で、等号は <span class=\"chem\">x = 1</span> のときに成り立ちます。</p><p>(d)、(e) <span class=\"chem\">f_c = 1 &lt;=&gt; (x - 1)^2 = 2 - c</span>；<span class=\"chem\">f_c = -1 &lt;=&gt; (x - 1)^2 = -c</span>。<span class=\"chem\">c = -3</span> のとき：<span class=\"chem\">5 &gt; 0</span> と <span class=\"chem\">3 &gt; 0</span> なので 4 点。<span class=\"chem\">c = 1.5</span> のとき：<span class=\"chem\">0.5 &gt; 0</span> と <span class=\"chem\">-1.5 &lt; 0</span> なので 2 点。一般に：<span class=\"chem\">c &lt; 0</span>：4；<span class=\"chem\">c = 0</span>：2 + 1 = 3；<span class=\"chem\">0 &lt; c &lt; 2</span>：2；<span class=\"chem\">c = 2</span>：1；<span class=\"chem\">c &gt; 2</span>：0。</p><p>(f) <span class=\"chem\">1/(c - 1) = 1 => c = 2</span>。このとき <span class=\"chem\">f_2(x) = (x - 1)^2 + 1</span> と <span class=\"chem\">y = 1</span> は <span class=\"chem\">(1, 1)</span> でしか交わらず、(e) の 1 個という結果と一致します。</p>",
      // EN: <p>(a) <span class="chem">2</span>, <span class="chem">1</span>, <span class="chem">0</span>. (b) <span class="chem">(x - 1)^2 + c - 1</span>; two asymptotes when <span class="chem">c &lt; 1</span>. (c) For <span class="chem">c &gt; 1</span>, <span class="chem">f_c</span> has positive minimum <span class="chem">c - 1</span> at <span class="chem">x = 1</span>, so <span class="chem">1/f_c</span> has maximum <span class="chem">1/(c - 1)</span> there. (d) <span class="chem">c = -3</span>: <span class="chem">4</span>; <span class="chem">c = 1.5</span>: <span class="chem">2</span>. (e) <span class="chem">c &lt; 0</span>: 4; <span class="chem">c = 0</span>: 3; <span class="chem">0 &lt; c &lt; 2</span>: 2; <span class="chem">c = 2</span>: 1; <span class="chem">c &gt; 2</span>: 0. (f) <span class="chem">c = 2</span>, which gives exactly one invariant point <span class="chem">(1, 1)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">2</span>、<span class=\"chem\">1</span>、<span class=\"chem\">0</span>。(b) <span class=\"chem\">(x - 1)^2 + c - 1</span>；漸近線が 2 本となるのは <span class=\"chem\">c &lt; 1</span> のとき。(c) <span class=\"chem\">c &gt; 1</span> のとき、<span class=\"chem\">f_c</span> は <span class=\"chem\">x = 1</span> で正の最小値 <span class=\"chem\">c - 1</span> をとるので、<span class=\"chem\">1/f_c</span> はそこで極大値 <span class=\"chem\">1/(c - 1)</span> をとる。(d) <span class=\"chem\">c = -3</span>：<span class=\"chem\">4</span>；<span class=\"chem\">c = 1.5</span>：<span class=\"chem\">2</span>。(e) <span class=\"chem\">c &lt; 0</span>：4；<span class=\"chem\">c = 0</span>：3；<span class=\"chem\">0 &lt; c &lt; 2</span>：2；<span class=\"chem\">c = 2</span>：1；<span class=\"chem\">c &gt; 2</span>：0。(f) <span class=\"chem\">c = 2</span>。このとき不変点はちょうど 1 つ <span class=\"chem\">(1, 1)</span> である。</p>",
      markscheme: [
        // EN: A1: (a) <span class="chem">c = -3</span>: <span class="chem">f = (x - 3)(x + 1)</span>, two asymptotes.
        "A1：(a) <span class=\"chem\">c = -3</span>：<span class=\"chem\">f = (x - 3)(x + 1)</span>、漸近線 2 本。",
        // EN: A1: (a) <span class="chem">c = 1</span>: <span class="chem">f = (x - 1)^2</span>, one asymptote.
        "A1：(a) <span class=\"chem\">c = 1</span>：<span class=\"chem\">f = (x - 1)^2</span>、漸近線 1 本。",
        // EN: A1: (a) <span class="chem">c = 5</span>: <span class="chem">f &gt; 0</span> for all <span class="chem">x</span>, no asymptotes.
        "A1：(a) <span class=\"chem\">c = 5</span>：すべての <span class=\"chem\">x</span> で <span class=\"chem\">f &gt; 0</span>、漸近線なし。",
        // EN: A1: (b) <span class="chem">f_c(x) = (x - 1)^2 + c - 1</span>.
        "A1：(b) <span class=\"chem\">f_c(x) = (x - 1)^2 + c - 1</span>。",
        // EN: A1: (b) two asymptotes when <span class="chem">c - 1 &lt; 0</span>, i.e. <span class="chem">c &lt; 1</span>.
        "A1：(b) 漸近線が 2 本となるのは <span class=\"chem\">c - 1 &lt; 0</span>、すなわち <span class=\"chem\">c &lt; 1</span> のとき。",
        // EN: M1: (c) <span class="chem">f_c</span> has minimum value <span class="chem">c - 1 &gt; 0</span> at <span class="chem">x = 1</span>.
        "M1：(c) <span class=\"chem\">f_c</span> は <span class=\"chem\">x = 1</span> で最小値 <span class=\"chem\">c - 1 &gt; 0</span> をとる。",
        // EN: R1: (c) the reciprocal of a positive minimum is a maximum, giving <span class="chem">(1, 1/(c - 1))</span> (AG).
        "R1：(c) 正の最小値の逆数は最大値になり、<span class=\"chem\">(1, 1/(c - 1))</span> を得る（AG）。",
        // EN: M1: (d) solves <span class="chem">(x - 1)^2 = 2 - c</span> and <span class="chem">(x - 1)^2 = -c</span>.
        "M1：(d) <span class=\"chem\">(x - 1)^2 = 2 - c</span> と <span class=\"chem\">(x - 1)^2 = -c</span> を解く。",
        // EN: A1: (d) <span class="chem">c = -3</span>: <span class="chem">2 + 2 = 4</span> points.
        "A1：(d) <span class=\"chem\">c = -3</span>：<span class=\"chem\">2 + 2 = 4</span> 点。",
        // EN: A1: (d) <span class="chem">c = 1.5</span>: <span class="chem">2 + 0 = 2</span> points.
        "A1：(d) <span class=\"chem\">c = 1.5</span>：<span class=\"chem\">2 + 0 = 2</span> 点。",
        // EN: M1: (e) counts the roots of <span class="chem">(x - 1)^2 = 2 - c</span> (2, 1, 0 as <span class="chem">c &lt; 2</span>, <span class="chem">= 2</span>, <span class="chem">&gt; 2</span>) and of <span class="chem">(x - 1)^2 = -c</span> (2, 1, 0 as <span class="chem">c &lt; 0</span>, <span class="chem">= 0</span>, <span class="chem">&gt; 0</span>).
        "M1：(e) <span class=\"chem\">(x - 1)^2 = 2 - c</span> の解の個数（<span class=\"chem\">c &lt; 2</span>、<span class=\"chem\">= 2</span>、<span class=\"chem\">&gt; 2</span> に応じて 2、1、0）と <span class=\"chem\">(x - 1)^2 = -c</span> の解の個数（<span class=\"chem\">c &lt; 0</span>、<span class=\"chem\">= 0</span>、<span class=\"chem\">&gt; 0</span> に応じて 2、1、0）を数える。",
        // EN: A1: (e) <span class="chem">c &lt; 0</span>: 4 and <span class="chem">c = 0</span>: 3.
        "A1：(e) <span class=\"chem\">c &lt; 0</span>：4、<span class=\"chem\">c = 0</span>：3。",
        // EN: A1: (e) <span class="chem">0 &lt; c &lt; 2</span>: 2.
        "A1：(e) <span class=\"chem\">0 &lt; c &lt; 2</span>：2。",
        // EN: A1: (e) <span class="chem">c = 2</span>: 1 and <span class="chem">c &gt; 2</span>: 0.
        "A1：(e) <span class=\"chem\">c = 2</span>：1、<span class=\"chem\">c &gt; 2</span>：0。",
        // EN: A1: (f) <span class="chem">1/(c - 1) = 1 => c = 2</span>.
        "A1：(f) <span class=\"chem\">1/(c - 1) = 1 => c = 2</span>。",
        // EN: R1: (f) consistent with (e): at <span class="chem">c = 2</span> there is exactly one invariant point, <span class="chem">(1, 1)</span>.
        "R1：(f) (e) と一致する：<span class=\"chem\">c = 2</span> のとき不変点はちょうど 1 つ <span class=\"chem\">(1, 1)</span> である。",
      ],
    },

    // ── t2-3-q060 · short · challenge · AHL · AHL 2.13, 2.14 · 15 marks
    "t2-3-q060": {
      // EN: <p>This investigation shows that functions can be split into an even part and an odd part.</p><p>For a function <span class="chem">f</span> defined for all <span class="chem">x</span> in a domain that is symmetric about <span class="chem">0</span>, define <span class="chem">E(x) = (f(x) + f(-x))/2</span> and <span class="chem">O(x) = (f(x) - f(-x))/2</span>.</p><p>(a) For <span class="chem">f(x) = x^3 + 2x^2 - 5x + 4</span>, find <span class="chem">E(x)</span> and <span class="chem">O(x)</span>. <strong>[2 marks]</strong></p><p>(b) Show that, for any such <span class="chem">f</span>, <span class="chem">E</span> is even, <span class="chem">O</span> is odd and <span class="chem">f = E + O</span>. <strong>[3 marks]</strong></p><p>(c) Suppose that <span class="chem">f = E_1 + O_1 = E_2 + O_2</span>, where <span class="chem">E_1, E_2</span> are even and <span class="chem">O_1, O_2</span> are odd. Prove that <span class="chem">E_1 = E_2</span> and <span class="chem">O_1 = O_2</span>. <strong>[3 marks]</strong></p><p>(d) For <span class="chem">f(x) = e^x</span>, write down <span class="chem">O(x)</span>, and use your GDC to solve <span class="chem">O(x) = 2</span>. <strong>[3 marks]</strong></p><p>(e) For <span class="chem">f(x) = 1/(x - 2)</span>, explain why <span class="chem">E</span> and <span class="chem">O</span> can only be defined for <span class="chem">x != +-2</span>, and find <span class="chem">E(x)</span> and <span class="chem">O(x)</span> as single fractions. <strong>[4 marks]</strong></p>
      stem: "<p>この探究では、関数が偶関数の部分と奇関数の部分に分けられることを示す。</p><p><span class=\"chem\">0</span> に関して対称な定義域のすべての <span class=\"chem\">x</span> で定義された関数 <span class=\"chem\">f</span> に対して、<span class=\"chem\">E(x) = (f(x) + f(-x))/2</span> と <span class=\"chem\">O(x) = (f(x) - f(-x))/2</span> を定義する。</p><p>(a) <span class=\"chem\">f(x) = x^3 + 2x^2 - 5x + 4</span> のとき、<span class=\"chem\">E(x)</span> と <span class=\"chem\">O(x)</span> を求めなさい (Find)。<strong>[2 marks]</strong></p><p>(b) このような任意の <span class=\"chem\">f</span> に対して、<span class=\"chem\">E</span> は偶関数、<span class=\"chem\">O</span> は奇関数であり、<span class=\"chem\">f = E + O</span> であることを示しなさい (Show that)。<strong>[3 marks]</strong></p><p>(c) <span class=\"chem\">f = E_1 + O_1 = E_2 + O_2</span> と仮定する。ここで <span class=\"chem\">E_1, E_2</span> は偶関数、<span class=\"chem\">O_1, O_2</span> は奇関数である。<span class=\"chem\">E_1 = E_2</span> かつ <span class=\"chem\">O_1 = O_2</span> であることを証明しなさい (Prove)。<strong>[3 marks]</strong></p><p>(d) <span class=\"chem\">f(x) = e^x</span> のとき、<span class=\"chem\">O(x)</span> を書き (Write down)、GDC を用いて <span class=\"chem\">O(x) = 2</span> を解きなさい。<strong>[3 marks]</strong></p><p>(e) <span class=\"chem\">f(x) = 1/(x - 2)</span> のとき、<span class=\"chem\">E</span> と <span class=\"chem\">O</span> が <span class=\"chem\">x != +-2</span> に対してしか定義できない理由を説明し (Explain)、<span class=\"chem\">E(x)</span> と <span class=\"chem\">O(x)</span> をそれぞれ 1 つの分数で求めなさい。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: this is the odd/even test <span class="chem">f(-x) = +-f(x)</span> used as a tool. In each part, replace <span class="chem">x</span> by <span class="chem">-x</span> and simplify.
        "解読：これは偶関数・奇関数の判定 <span class=\"chem\">f(-x) = +-f(x)</span> を道具として使う問題です。各小問で <span class=\"chem\">x</span> を <span class=\"chem\">-x</span> に置き換えて整理します。",
        // EN: For a polynomial, <span class="chem">E</span> keeps the even powers (and the constant) and <span class="chem">O</span> keeps the odd powers.
        "多項式では、<span class=\"chem\">E</span> は偶数乗の項（と定数項）を、<span class=\"chem\">O</span> は奇数乗の項を残します。",
        // EN: In (c), a function that is both even and odd satisfies <span class="chem">g(x) = -g(x)</span>.
        "(c) では、偶関数でも奇関数でもある関数は <span class=\"chem\">g(x) = -g(x)</span> を満たします。",
        // EN: In (e), <span class="chem">1/(x - 2) - 1/(x + 2) = 4/(x^2 - 4)</span> and <span class="chem">1/(x - 2) + 1/(x + 2) = 2x/(x^2 - 4)</span>.
        "(e) では <span class=\"chem\">1/(x - 2) - 1/(x + 2) = 4/(x^2 - 4)</span>、<span class=\"chem\">1/(x - 2) + 1/(x + 2) = 2x/(x^2 - 4)</span> です。",
      ],
      // EN: <p><strong>Decode.</strong> Everything follows from substituting <span class="chem">-x</span> and comparing with the definitions of even and odd.</p><p>(a) <span class="chem">f(-x) = -x^3 + 2x^2 + 5x + 4</span>, so <span class="chem">E = 2x^2 + 4</span>, <span class="chem">O = x^3 - 5x</span>.</p><p>(b) Swapping <span class="chem">x</span> and <span class="chem">-x</span> leaves <span class="chem">E</span> unchanged and changes the sign of <span class="chem">O</span>; adding gives <span class="chem">f</span>.</p><p>(c) <span class="chem">g = E_1 - E_2 = O_2 - O_1</span> is even (difference of even functions) and odd (difference of odd functions). So <span class="chem">g(x) = g(-x) = -g(x)</span>, hence <span class="chem">g(x) = 0</span> for all <span class="chem">x</span>: the split is unique.</p><p>(d) <span class="chem">O(x) = (e^x - e^{-x})/2</span>. The GDC gives <span class="chem">x ≈ 1.44</span> (exactly <span class="chem">ln(2 + sqrt(5))</span>).</p><p>(e) Because <span class="chem">E</span> and <span class="chem">O</span> use both <span class="chem">f(x)</span> and <span class="chem">f(-x)</span>, we need <span class="chem">x != 2</span> and <span class="chem">-x != 2</span>. With <span class="chem">f(-x) = -1/(x + 2)</span>: <span class="chem">E = (1/2)(4/(x^2 - 4)) = 2/(x^2 - 4)</span> (even) and <span class="chem">O = (1/2)(2x/(x^2 - 4)) = x/(x^2 - 4)</span> (odd).</p>
      solution: "<p><strong>解読。</strong>すべては <span class=\"chem\">-x</span> を代入し、偶関数・奇関数の定義と比べることから導かれます。</p><p>(a) <span class=\"chem\">f(-x) = -x^3 + 2x^2 + 5x + 4</span> なので <span class=\"chem\">E = 2x^2 + 4</span>、<span class=\"chem\">O = x^3 - 5x</span> です。</p><p>(b) <span class=\"chem\">x</span> と <span class=\"chem\">-x</span> を入れ替えると、<span class=\"chem\">E</span> は変わらず、<span class=\"chem\">O</span> は符号が変わります。足すと <span class=\"chem\">f</span> です。</p><p>(c) <span class=\"chem\">g = E_1 - E_2 = O_2 - O_1</span> は偶関数（偶関数の差）であり、奇関数（奇関数の差）でもあります。よって <span class=\"chem\">g(x) = g(-x) = -g(x)</span>、ゆえにすべての <span class=\"chem\">x</span> に対して <span class=\"chem\">g(x) = 0</span> です：分け方は一意です。</p><p>(d) <span class=\"chem\">O(x) = (e^x - e^{-x})/2</span>。GDC により <span class=\"chem\">x ≈ 1.44</span>（厳密には <span class=\"chem\">ln(2 + sqrt(5))</span>）が得られます。</p><p>(e) <span class=\"chem\">E</span> と <span class=\"chem\">O</span> は <span class=\"chem\">f(x)</span> と <span class=\"chem\">f(-x)</span> の両方を使うので、<span class=\"chem\">x != 2</span> かつ <span class=\"chem\">-x != 2</span> が必要です。<span class=\"chem\">f(-x) = -1/(x + 2)</span> を用いて：<span class=\"chem\">E = (1/2)(4/(x^2 - 4)) = 2/(x^2 - 4)</span>（偶関数）と <span class=\"chem\">O = (1/2)(2x/(x^2 - 4)) = x/(x^2 - 4)</span>（奇関数）。</p>",
      // EN: <p>(a) <span class="chem">E(x) = 2x^2 + 4</span>, <span class="chem">O(x) = x^3 - 5x</span>. (b) <span class="chem">E(-x) = (f(-x) + f(x))/2 = E(x)</span>; <span class="chem">O(-x) = (f(-x) - f(x))/2 = -O(x)</span>; <span class="chem">E + O = f</span>. (c) <span class="chem">E_1 - E_2 = O_2 - O_1 = g</span> is both even and odd, so <span class="chem">g(x) = g(-x) = -g(x)</span>, giving <span class="chem">g = 0</span>. (d) <span class="chem">O(x) = (e^x - e^{-x})/2</span>; <span class="chem">x ≈ 1.44</span>. (e) The domain must be symmetric: <span class="chem">f(-x)</span> needs <span class="chem">x != -2</span>. <span class="chem">E(x) = 2/(x^2 - 4)</span>, <span class="chem">O(x) = x/(x^2 - 4)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">E(x) = 2x^2 + 4</span>、<span class=\"chem\">O(x) = x^3 - 5x</span>。(b) <span class=\"chem\">E(-x) = (f(-x) + f(x))/2 = E(x)</span>；<span class=\"chem\">O(-x) = (f(-x) - f(x))/2 = -O(x)</span>；<span class=\"chem\">E + O = f</span>。(c) <span class=\"chem\">E_1 - E_2 = O_2 - O_1 = g</span> は偶関数でも奇関数でもあるので <span class=\"chem\">g(x) = g(-x) = -g(x)</span> となり、<span class=\"chem\">g = 0</span> を得る。(d) <span class=\"chem\">O(x) = (e^x - e^{-x})/2</span>；<span class=\"chem\">x ≈ 1.44</span>。(e) 定義域は対称でなければならない：<span class=\"chem\">f(-x)</span> には <span class=\"chem\">x != -2</span> が必要。<span class=\"chem\">E(x) = 2/(x^2 - 4)</span>、<span class=\"chem\">O(x) = x/(x^2 - 4)</span>。</p>",
      markscheme: [
        // EN: A1: (a) <span class="chem">E(x) = 2x^2 + 4</span>.
        "A1：(a) <span class=\"chem\">E(x) = 2x^2 + 4</span>。",
        // EN: A1: (a) <span class="chem">O(x) = x^3 - 5x</span>.
        "A1：(a) <span class=\"chem\">O(x) = x^3 - 5x</span>。",
        // EN: A1: (b) <span class="chem">E(-x) = (f(-x) + f(x))/2 = E(x)</span>, so E is even.
        "A1：(b) <span class=\"chem\">E(-x) = (f(-x) + f(x))/2 = E(x)</span> なので E は偶関数。",
        // EN: A1: (b) <span class="chem">O(-x) = (f(-x) - f(x))/2 = -O(x)</span>, so O is odd.
        "A1：(b) <span class=\"chem\">O(-x) = (f(-x) - f(x))/2 = -O(x)</span> なので O は奇関数。",
        // EN: A1: (b) <span class="chem">E(x) + O(x) = 2f(x)/2 = f(x)</span>.
        "A1：(b) <span class=\"chem\">E(x) + O(x) = 2f(x)/2 = f(x)</span>。",
        // EN: M1: (c) lets <span class="chem">g = E_1 - E_2 = O_2 - O_1</span>, which is both even and odd.
        "M1：(c) 偶関数でも奇関数でもある <span class=\"chem\">g = E_1 - E_2 = O_2 - O_1</span> とおく。",
        // EN: M1: (c) <span class="chem">g(-x) = g(x)</span> and <span class="chem">g(-x) = -g(x)</span>, so <span class="chem">2g(x) = 0</span>.
        "M1：(c) <span class=\"chem\">g(-x) = g(x)</span> かつ <span class=\"chem\">g(-x) = -g(x)</span> なので <span class=\"chem\">2g(x) = 0</span>。",
        // EN: R1: (c) <span class="chem">g = 0</span>, so <span class="chem">E_1 = E_2</span> and <span class="chem">O_1 = O_2</span>.
        "R1：(c) <span class=\"chem\">g = 0</span> なので <span class=\"chem\">E_1 = E_2</span>、<span class=\"chem\">O_1 = O_2</span>。",
        // EN: A1: (d) <span class="chem">O(x) = (e^x - e^{-x})/2</span>.
        "A1：(d) <span class=\"chem\">O(x) = (e^x - e^{-x})/2</span>。",
        // EN: M1: (d) solves <span class="chem">(e^x - e^{-x})/2 = 2</span> graphically.
        "M1：(d) <span class=\"chem\">(e^x - e^{-x})/2 = 2</span> をグラフで解く。",
        // EN: A1: (d) <span class="chem">x = 1.44</span>.
        "A1：(d) <span class=\"chem\">x = 1.44</span>。",
        // EN: R1: (e) <span class="chem">E(x)</span> and <span class="chem">O(x)</span> use <span class="chem">f(-x) = 1/(-x - 2)</span>, which is undefined at <span class="chem">x = -2</span>, so both <span class="chem">+-2</span> are excluded.
        "R1：(e) <span class=\"chem\">E(x)</span> と <span class=\"chem\">O(x)</span> は <span class=\"chem\">f(-x) = 1/(-x - 2)</span> を使い、これは <span class=\"chem\">x = -2</span> で定義されないので、<span class=\"chem\">+-2</span> はどちらも除外される。",
        // EN: M1: (e) <span class="chem">f(-x) = -1/(x + 2)</span> and combines over <span class="chem">x^2 - 4</span>.
        "M1：(e) <span class=\"chem\">f(-x) = -1/(x + 2)</span>、<span class=\"chem\">x^2 - 4</span> で通分してまとめる。",
        // EN: A1: (e) <span class="chem">E(x) = 2/(x^2 - 4)</span>.
        "A1：(e) <span class=\"chem\">E(x) = 2/(x^2 - 4)</span>。",
        // EN: A1: (e) <span class="chem">O(x) = x/(x^2 - 4)</span>.
        "A1：(e) <span class=\"chem\">O(x) = x/(x^2 - 4)</span>。",
      ],
    },

  }
});
