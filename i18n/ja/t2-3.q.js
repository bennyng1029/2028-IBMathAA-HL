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
