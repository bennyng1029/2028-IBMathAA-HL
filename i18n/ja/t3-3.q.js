/* t3-3.q — ja question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't3-3.q', {
  questions: {

    // ── t3-3-q001 · mcq · foundation · AHL · AHL 3.12 · 3 marks
    "t3-3-q001": {
      // EN: <p>A drone flies from point <span class="chem">A(1, -2, 4)</span> towards point <span class="chem">B(3, 4, 1)</span> at a constant speed of <span class="unit">21 m s-1</span>. What is its velocity vector?</p>
      stem: "<p>ドローンが点 <span class=\"chem\">A(1, -2, 4)</span> から点 <span class=\"chem\">B(3, 4, 1)</span> に向かって一定の速さ <span class=\"unit\">21 m s-1</span> で飛んでいる。速度ベクトルはどれですか？</p>",
      options: [
        // EN: <span class="chem">(6, 18, -9)</span>
        "<span class=\"chem\">(6, 18, -9)</span>",
        // EN: <span class="chem">(2, 6, -3)</span>
        "<span class=\"chem\">(2, 6, -3)</span>",
        // EN: <span class="chem">(42, 126, -63)</span>
        "<span class=\"chem\">(42, 126, -63)</span>",
        // EN: <span class="chem">(-6, -18, 9)</span>
        "<span class=\"chem\">(-6, -18, 9)</span>",
      ],
      hints: [
        // EN: Find the displacement vector <span class="chem">\mathbf{AB} = \mathbf{b} - \mathbf{a} = (3 - 1, 4 - (-2), 1 - 4)</span>.
        "変位ベクトル <span class=\"chem\">\\mathbf{AB} = \\mathbf{b} - \\mathbf{a} = (3 - 1, 4 - (-2), 1 - 4)</span> を求めます。",
        // EN: Divide <span class="chem">\mathbf{AB}</span> by its magnitude <span class="chem">|\mathbf{AB}|</span> to get the unit direction vector, then multiply by <span class="chem">21</span>.
        "<span class=\"chem\">\\mathbf{AB}</span> をその大きさ <span class=\"chem\">|\\mathbf{AB}|</span> で割って単位方向ベクトルを求め、それに <span class=\"chem\">21</span> を掛けます。",
      ],
      // EN: <p><span class="chem">\mathbf{AB} = (2, 6, -3)</span> with <span class="chem">|\mathbf{AB}| = sqrt(2^2 + 6^2 + (-3)^2) = sqrt(49) = 7</span>. Rescaling to speed 21 gives <span class="chem">\mathbf{v} = (21 / 7)(2, 6, -3) = (6, 18, -9)</span>.</p>
      solution: "<p><span class=\"chem\">\\mathbf{AB} = (2, 6, -3)</span> で、大きさは <span class=\"chem\">|\\mathbf{AB}| = sqrt(2^2 + 6^2 + (-3)^2) = sqrt(49) = 7</span> です。速さ 21 にスケーリングすると <span class=\"chem\">\\mathbf{v} = (21 / 7)(2, 6, -3) = (6, 18, -9)</span> となります。</p>",
      misconception: {
        // EN (option B): <span class="chem">(2, 6, -3)</span> is the displacement vector <span class="chem">\mathbf{AB}</span>, whose magnitude is <span class="chem">sqrt(4 + 36 + 9) = 7</span>, not <span class="chem">21</span>.
        "1": "<span class=\"chem\">(2, 6, -3)</span> は変位ベクトル <span class=\"chem\">\\mathbf{AB}</span> であり、その大きさは <span class=\"chem\">sqrt(4 + 36 + 9) = 7</span> であって <span class=\"chem\">21</span> ではありません。",
        // EN (option C): You multiplied <span class="chem">\mathbf{AB}</span> by <span class="chem">21</span> without dividing by its magnitude <span class="chem">|\mathbf{AB}| = 7</span> first.
        "2": "最初に大きさ <span class=\"chem\">|\\mathbf{AB}| = 7</span> で割らずに <span class=\"chem\">\\mathbf{AB}</span> に <span class=\"chem\">21</span> を掛けてしまいました。",
        // EN (option D): That points from <span class="chem">B</span> to <span class="chem">A</span> (<span class="chem">a - b</span>) instead of from <span class="chem">A</span> to <span class="chem">B</span> (<span class="chem">b - a</span>).
        "3": "それは <span class=\"chem\">A</span> から <span class=\"chem\">B</span>（<span class=\"chem\">b - a</span>）ではなく、<span class=\"chem\">B</span> から <span class=\"chem\">A</span>（<span class=\"chem\">a - b</span>）の向きです。",
      },
    },

    // ── t3-3-q002 · numeric · foundation · AHL · AHL 3.13 · 2 marks
    "t3-3-q002": {
      // EN: <p>Find the value of <span class="chem">k</span> for which the vectors <span class="chem">\mathbf{u} = (k, 2, -3)</span> and <span class="chem">\mathbf{v} = (4, k, 2)</span> are perpendicular.</p>
      stem: "<p>ベクトル <span class=\"chem\">\\mathbf{u} = (k, 2, -3)</span> と <span class=\"chem\">\\mathbf{v} = (4, k, 2)</span> が垂直になるような <span class=\"chem\">k</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Two non-zero vectors are perpendicular if and only if <span class="chem">\mathbf{u} \cdot \mathbf{v} = 0</span>.
        "ゼロでない 2 つのベクトルが垂直であるのは、<span class=\"chem\">\\mathbf{u} \\cdot \\mathbf{v} = 0</span> のとき、かつそのときに限ります。",
        // EN: Compute <span class="chem">k(4) + 2(k) + (-3)(2) = 0</span> and solve for <span class="chem">k</span>.
        "<span class=\"chem\">k(4) + 2(k) + (-3)(2) = 0</span> を計算して <span class=\"chem\">k</span> について解きます。",
      ],
      // EN: <p>Setting the dot product to zero gives <span class="chem">4k + 2k - 6 = 0 => 6k = 6 => k = 1</span>.</p>
      solution: "<p>内積を 0 とおくと <span class=\"chem\">4k + 2k - 6 = 0 => 6k = 6 => k = 1</span> となります。</p>",
    },

    // ── t3-3-q003 · mcq · foundation · AHL · AHL 3.14 · 2 marks
    "t3-3-q003": {
      // EN: <p>A 3D line has Cartesian equation <span class="chem">(4 - 2x) / 6 = (y + 1) / 3 = (z - 5) / (-2)</span>. Which of the following is a valid direction vector for this line?</p>
      stem: "<p>3D 直線の直交座標方程式が <span class=\"chem\">(4 - 2x) / 6 = (y + 1) / 3 = (z - 5) / (-2)</span> である。この直線の方向ベクトルとして正しいものはどれですか？</p>",
      options: [
        // EN: <span class="chem">(-3, 3, -2)</span>
        "<span class=\"chem\">(-3, 3, -2)</span>",
        // EN: <span class="chem">(6, 3, -2)</span>
        "<span class=\"chem\">(6, 3, -2)</span>",
        // EN: <span class="chem">(-6, 3, -2)</span>
        "<span class=\"chem\">(-6, 3, -2)</span>",
        // EN: <span class="chem">(2, -1, 5)</span>
        "<span class=\"chem\">(2, -1, 5)</span>",
      ],
      hints: [
        // EN: Rewrite <span class="chem">(4 - 2x) / 6</span> so the numerator is <span class="chem">x - x_0</span>: divide top and bottom by <span class="chem">-2</span>.
        "分子が <span class=\"chem\">x - x_0</span> になるように <span class=\"chem\">(4 - 2x) / 6</span> を書き換えます：分子と分母を <span class=\"chem\">-2</span> で割ります。",
      ],
      // EN: <p>Dividing numerator and denominator of the first fraction by <span class="chem">-2</span> gives <span class="chem">(x - 2) / (-3) = (y + 1) / 3 = (z - 5) / (-2)</span>, so a direction vector is <span class="chem">(-3, 3, -2)</span>.</p>
      solution: "<p>最初の分数の分子と分母を <span class=\"chem\">-2</span> で割ると <span class=\"chem\">(x - 2) / (-3) = (y + 1) / 3 = (z - 5) / (-2)</span> となるので、方向ベクトルは <span class=\"chem\">(-3, 3, -2)</span> です。</p>",
      misconception: {
        // EN (option B): The numerator <span class="chem">4 - 2x</span> must be rewritten with coefficient <span class="chem">+1</span> on <span class="chem">x</span> before reading the denominator.
        "1": "分母を読み取る前に、分子 <span class=\"chem\">4 - 2x</span> を <span class=\"chem\">x</span> の係数が <span class=\"chem\">+1</span> になるように書き直す必要があります。",
        // EN (option C): Factoring <span class="chem">-2</span> out of <span class="chem">4 - 2x</span> gives <span class="chem">-2(x - 2) / 6 = (x - 2) / (-3)</span>, so the <span class="chem">x</span>-component is <span class="chem">-3</span>, not <span class="chem">-6</span>.
        "2": "<span class=\"chem\">4 - 2x</span> から <span class=\"chem\">-2</span> をくくると <span class=\"chem\">-2(x - 2) / 6 = (x - 2) / (-3)</span> となるため、<span class=\"chem\">x</span> 成分は <span class=\"chem\">-6</span> ではなく <span class=\"chem\">-3</span> です。",
        // EN (option D): <span class="chem">(2, -1, 5)</span> is a point on the line, not its direction vector.
        "3": "<span class=\"chem\">(2, -1, 5)</span> は方向ベクトルではなく、直線上の点です。",
      },
    },

    // ── t3-3-q004 · multi · foundation · AHL · AHL 3.13, 3.16 · 3 marks
    "t3-3-q004": {
      // EN: <p>Select <strong>all</strong> statements that are always true for any 3D vectors <span class="chem">\mathbf{u}, \mathbf{v}, \mathbf{w}</span>.</p>
      stem: "<p>任意の 3D ベクトル <span class=\"chem\">\\mathbf{u}, \\mathbf{v}, \\mathbf{w}</span> に対して常に成り立つ記述を<strong>すべて</strong>選びなさい。</p>",
      options: [
        // EN: <span class="chem">\mathbf{u} \cdot \mathbf{v} = \mathbf{v} \cdot \mathbf{u}</span>
        "<span class=\"chem\">\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{v} \\cdot \\mathbf{u}</span>",
        // EN: <span class="chem">\mathbf{u} \times \mathbf{v} = -(\mathbf{v} \times \mathbf{u})</span>
        "<span class=\"chem\">\\mathbf{u} \\times \\mathbf{v} = -(\\mathbf{v} \\times \\mathbf{u})</span>",
        // EN: <span class="chem">(\mathbf{u} \times \mathbf{v}) \cdot \mathbf{u} = 0</span>
        "<span class=\"chem\">(\\mathbf{u} \\times \\mathbf{v}) \\cdot \\mathbf{u} = 0</span>",
        // EN: If <span class="chem">\mathbf{u} \times \mathbf{v} = \mathbf{u} \times \mathbf{w}</span> and <span class="chem">\mathbf{u} != 0</span>, then <span class="chem">\mathbf{v} = \mathbf{w}</span>
        "<span class=\"chem\">\\mathbf{u} \\times \\mathbf{v} = \\mathbf{u} \\times \\mathbf{w}</span> かつ <span class=\"chem\">\\mathbf{u} != 0</span> ならば、<span class=\"chem\">\\mathbf{v} = \\mathbf{w}</span> である",
      ],
      hints: [
        // EN: Check commutativity of dot product, anti-commutativity of cross product, and orthogonality of <span class="chem">\mathbf{u} \times \mathbf{v}</span> to <span class="chem">\mathbf{u}</span>.
        "内積の交換法則、外積の反交換法則、および <span class=\"chem\">\\mathbf{u} \\times \\mathbf{v}</span> と <span class=\"chem\">\\mathbf{u}</span> の直交性を確認しましょう。",
        // EN: For the fourth option, test <span class="chem">\mathbf{u} = \mathbf{i}, \mathbf{v} = \mathbf{j}, \mathbf{w} = \mathbf{i} + \mathbf{j}</span>.
        "4 番目の選択肢では <span class=\"chem\">\\mathbf{u} = \\mathbf{i}, \\mathbf{v} = \\mathbf{j}, \\mathbf{w} = \\mathbf{i} + \\mathbf{j}</span> を試してみましょう。",
      ],
      // EN: <p>The dot product is commutative (<span class="chem">\mathbf{u} \cdot \mathbf{v} = \mathbf{v} \cdot \mathbf{u}</span>), the cross product is anti-commutative (<span class="chem">\mathbf{u} \times \mathbf{v} = -(\mathbf{v} \times \mathbf{u})</span>), and <span class="chem">\mathbf{u} \times \mathbf{v}</span> is perpendicular to <span class="chem">\mathbf{u}</span> so <span class="chem">(\mathbf{u} \times \mathbf{v}) \cdot \mathbf{u} = 0</span>. Cancellation fails for cross products.</p>
      solution: "<p>内積は可換（<span class=\"chem\">\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{v} \\cdot \\mathbf{u}</span>）、外積は反可換（<span class=\"chem\">\\mathbf{u} \\times \\mathbf{v} = -(\\mathbf{v} \\times \\mathbf{u})</span>）であり、<span class=\"chem\">\\mathbf{u} \\times \\mathbf{v}</span> は <span class=\"chem\">\\mathbf{u}</span> に垂直なので <span class=\"chem\">(\\mathbf{u} \\times \\mathbf{v}) \\cdot \\mathbf{u} = 0</span> です。外積では簡約法則は成り立ちません。</p>",
      misconception: {
        // EN (option D): Cross product does not satisfy cancellation: <span class="chem">\mathbf{u} \times (\mathbf{v} - \mathbf{w}) = 0</span> only implies <span class="chem">\mathbf{v} - \mathbf{w}</span> is parallel to <span class="chem">\mathbf{u}</span>, not necessarily <span class="chem">0</span>.
        "3": "外積では簡約法則は成り立ちません：<span class=\"chem\">\\mathbf{u} \\times (\\mathbf{v} - \\mathbf{w}) = 0</span> から言えるのは <span class=\"chem\">\\mathbf{v} - \\mathbf{w}</span> が <span class=\"chem\">\\mathbf{u}</span> に平行であることであり、必ずしも <span class=\"chem\">0</span> にはなりません。",
      },
    },

    // ── t3-3-q005 · numeric · foundation · AHL · AHL 3.16 · 4 marks
    "t3-3-q005": {
      // EN: <p>Find the exact area of triangle <span class="chem">ABC</span> with vertices <span class="chem">A(1, 0, 1)</span>, <span class="chem">B(3, 2, 0)</span>, and <span class="chem">C(1, 4, 3)</span>.</p>
      stem: "<p>3 点 <span class=\"chem\">A(1, 0, 1)</span>、<span class=\"chem\">B(3, 2, 0)</span>、<span class=\"chem\">C(1, 4, 3)</span> を頂点とする三角形 <span class=\"chem\">ABC</span> の正確な面積を求めなさい (Find)。</p>",
      hints: [
        // EN: Form two vectors from vertex <span class="chem">A</span>: <span class="chem">\mathbf{AB} = (2, 2, -1)</span> and <span class="chem">\mathbf{AC} = (0, 4, 2)</span>.
        "頂点 <span class=\"chem\">A</span> から 2 つのベクトルを作ります：<span class=\"chem\">\\mathbf{AB} = (2, 2, -1)</span> と <span class=\"chem\">\\mathbf{AC} = (0, 4, 2)</span>。",
        // EN: Compute <span class="chem">\mathbf{AB} \times \mathbf{AC}</span> and then use <span class="chem">Area = (1/2)|\mathbf{AB} \times \mathbf{AC}|</span>.
        "<span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC}</span> を計算し、<span class=\"chem\">Area = (1/2)|\\mathbf{AB} \\times \\mathbf{AC}|</span> を使います。",
      ],
      // EN: <p><span class="chem">\mathbf{AB} = (2, 2, -1)</span> and <span class="chem">\mathbf{AC} = (0, 4, 2)</span>. Then <span class="chem">\mathbf{AB} \times \mathbf{AC} = (4 - (-4), 0 - 4, 8 - 0) = (8, -4, 8)</span>, which has magnitude <span class="chem">sqrt(64 + 16 + 64) = 12</span>. Thus <span class="chem">Area = (1/2)(12) = 6</span>.</p>
      solution: "<p><span class=\"chem\">\\mathbf{AB} = (2, 2, -1)</span>、<span class=\"chem\">\\mathbf{AC} = (0, 4, 2)</span> です。すると <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC} = (4 - (-4), 0 - 4, 8 - 0) = (8, -4, 8)</span> となり、大きさは <span class=\"chem\">sqrt(64 + 16 + 64) = 12</span> です。よって <span class=\"chem\">Area = (1/2)(12) = 6</span> となります。</p>",
    },

    // ── t3-3-q006 · mcq · foundation · AHL · AHL 3.17 · 2 marks
    "t3-3-q006": {
      // EN: <p>Find the Cartesian equation of the plane passing through <span class="chem">P(2, -1, 3)</span> with normal vector <span class="chem">\mathbf{n} = (4, -2, 1)</span>.</p>
      stem: "<p>点 <span class=\"chem\">P(2, -1, 3)</span> を通り、法線ベクトル <span class=\"chem\">\\mathbf{n} = (4, -2, 1)</span> をもつ平面の直交座標方程式を求めなさい (Find)。</p>",
      options: [
        // EN: <span class="chem">4x - 2y + z = 13</span>
        "<span class=\"chem\">4x - 2y + z = 13</span>",
        // EN: <span class="chem">4x - 2y + z = 9</span>
        "<span class=\"chem\">4x - 2y + z = 9</span>",
        // EN: <span class="chem">2x - y + 3z = 13</span>
        "<span class=\"chem\">2x - y + 3z = 13</span>",
        // EN: <span class="chem">4x - 2y + z = 7</span>
        "<span class=\"chem\">4x - 2y + z = 7</span>",
      ],
      hints: [
        // EN: Use <span class="chem">\mathbf{r} \cdot \mathbf{n} = \mathbf{a} \cdot \mathbf{n}</span>: <span class="chem">4x - 2y + z = 4(2) - 2(-1) + 1(3)</span>.
        "<span class=\"chem\">\\mathbf{r} \\cdot \\mathbf{n} = \\mathbf{a} \\cdot \\mathbf{n}</span> を使います：<span class=\"chem\">4x - 2y + z = 4(2) - 2(-1) + 1(3)</span>。",
      ],
      // EN: <p>Using <span class="chem">\mathbf{r} \cdot \mathbf{n} = \mathbf{a} \cdot \mathbf{n}</span>: <span class="chem">4x - 2y + z = 4(2) - 2(-1) + 1(3) = 8 + 2 + 3 = 13</span>.</p>
      solution: "<p><span class=\"chem\">\\mathbf{r} \\cdot \\mathbf{n} = \\mathbf{a} \\cdot \\mathbf{n}</span> より、<span class=\"chem\">4x - 2y + z = 4(2) - 2(-1) + 1(3) = 8 + 2 + 3 = 13</span> です。</p>",
      misconception: {
        // EN (option B): Check the sign on <span class="chem">-2(-1)</span>: <span class="chem">4(2) - 2(-1) + 1(3) = 8 + 2 + 3 = 13</span>, not <span class="chem">8 - 2 + 3 = 9</span>.
        "1": "<span class=\"chem\">-2(-1)</span> の符号を確認しましょう：<span class=\"chem\">4(2) - 2(-1) + 1(3) = 8 + 2 + 3 = 13</span> であり、<span class=\"chem\">8 - 2 + 3 = 9</span> ではありません。",
        // EN (option C): The coefficients of <span class="chem">x, y, z</span> must be the normal vector <span class="chem">(4, -2, 1)</span>, not the point coordinates.
        "2": "<span class=\"chem\">x, y, z</span> の係数は点の座標ではなく法線ベクトル <span class=\"chem\">(4, -2, 1)</span> でなければなりません。",
        // EN (option D): Check the arithmetic: <span class="chem">8 + 2 + 3 = 13</span>.
        "3": "計算を確認しましょう：<span class=\"chem\">8 + 2 + 3 = 13</span> です。",
      },
    },

    // ── t3-3-q007 · order · exam · AHL · AHL 3.15 · 4 marks
    "t3-3-q007": {
      // EN: <p>Arrange the steps in the correct logical order to prove that two 3D lines <span class="chem">L_1: \mathbf{r} = \mathbf{a_1} + lambda \mathbf{b_1}</span> and <span class="chem">L_2: \mathbf{r} = \mathbf{a_2} + mu \mathbf{b_2}</span> are <strong>skew</strong>.</p>
      stem: "<p>2 つの 3D 直線 <span class=\"chem\">L_1: \\mathbf{r} = \\mathbf{a_1} + lambda \\mathbf{b_1}</span> と <span class=\"chem\">L_2: \\mathbf{r} = \\mathbf{a_2} + mu \\mathbf{b_2}</span> が<strong>ねじれの位置にある</strong>ことを証明する手順を正しい論理的順序に並べ替えなさい。</p>",
      options: [
        // EN: Show that the direction vectors <span class="chem">\mathbf{b_1}</span> and <span class="chem">\mathbf{b_2}</span> are not scalar multiples (<span class="chem">\mathbf{b_1} != k \mathbf{b_2}</span>), so the lines are not parallel.
        "方向ベクトル <span class=\"chem\">\\mathbf{b_1}</span> と <span class=\"chem\">\\mathbf{b_2}</span> がスカラー倍でないこと（<span class=\"chem\">\\mathbf{b_1} != k \\mathbf{b_2}</span>）を示し、2 直線が平行でないことを確認する。",
        // EN: Equate the <span class="chem">x</span>, <span class="chem">y</span>, and <span class="chem">z</span> components using two distinct parameters <span class="chem">lambda</span> and <span class="chem">mu</span>.
        "2 つの異なる媒介変数 <span class=\"chem\">lambda</span> と <span class=\"chem\">mu</span> を使って <span class=\"chem\">x</span>、<span class=\"chem\">y</span>、<span class=\"chem\">z</span> 成分を等置する。",
        // EN: Solve the <span class="chem">x</span> and <span class="chem">y</span> equations simultaneously to obtain a unique candidate pair <span class="chem">(lambda, mu)</span>.
        "<span class=\"chem\">x</span> と <span class=\"chem\">y</span> の方程式を連立して解き、ただ 1 組の候補 <span class=\"chem\">(lambda, mu)</span> を求める。",
        // EN: Substitute <span class="chem">(lambda, mu)</span> into the <span class="chem">z</span>-equation and show it produces a contradiction, proving no intersection exists.
        "<span class=\"chem\">(lambda, mu)</span> を <span class=\"chem\">z</span> の式に代入して矛盾が生じることを示し、交点が存在しないことを証明する。",
      ],
      hints: [
        // EN: First rule out parallelism, then test for an intersection using two different parameters.
        "まず平行でないことを示し、次に 2 つの異なるパラメーターを使って交点の有無を調べます。",
      ],
      // EN: <p>To prove two lines are skew, first verify <span class="chem">\mathbf{b_1} != k \mathbf{b_2}</span> (not parallel), then equate coordinates with distinct parameters <span class="chem">lambda, mu</span>, solve two equations for <span class="chem">(lambda, mu)</span>, and show the third equation is inconsistent.</p>
      solution: "<p>ねじれの位置にあることを証明するには、まず <span class=\"chem\">\\mathbf{b_1} != k \\mathbf{b_2}</span>（平行でない）を確認し、異なるパラメーター <span class=\"chem\">lambda, mu</span> で座標を等置して 2 式から <span class=\"chem\">(lambda, mu)</span> を求め、3 番目の式が成り立たないことを示します。</p>",
    },

    // ── t3-3-q008 · numeric · exam · AHL · AHL 3.13 · 4 marks
    "t3-3-q008": {
      // EN: <p>Vectors <span class="chem">\mathbf{u}</span> and <span class="chem">\mathbf{v}</span> satisfy <span class="chem">|\mathbf{u}| = 5</span>, <span class="chem">|\mathbf{v}| = 3</span>, and <span class="chem">|\mathbf{u} + \mathbf{v}| = 7</span>. Find the angle <span class="chem">theta</span> between <span class="chem">\mathbf{u}</span> and <span class="chem">\mathbf{v}</span> in <strong>degrees</strong>.</p>
      stem: "<p>ベクトル <span class=\"chem\">\\mathbf{u}</span> と <span class=\"chem\">\\mathbf{v}</span> が <span class=\"chem\">|\\mathbf{u}| = 5</span>、<span class=\"chem\">|\\mathbf{v}| = 3</span>、<span class=\"chem\">|\\mathbf{u} + \\mathbf{v}| = 7</span> を満たす。<span class=\"chem\">\\mathbf{u}</span> と <span class=\"chem\">\\mathbf{v}</span> のなす角 <span class=\"chem\">theta</span> を<strong>度数法（度）</strong>で求めなさい (Find)。</p>",
      hints: [
        // EN: Expand <span class="chem">|\mathbf{u} + \mathbf{v}|^2 = (\mathbf{u} + \mathbf{v}) \cdot (\mathbf{u} + \mathbf{v}) = |\mathbf{u}|^2 + 2(\mathbf{u} \cdot \mathbf{v}) + |\mathbf{v}|^2</span>.
        "<span class=\"chem\">|\\mathbf{u} + \\mathbf{v}|^2 = (\\mathbf{u} + \\mathbf{v}) \\cdot (\\mathbf{u} + \\mathbf{v}) = |\\mathbf{u}|^2 + 2(\\mathbf{u} \\cdot \\mathbf{v}) + |\\mathbf{v}|^2</span> を展開します。",
        // EN: Solve <span class="chem">49 = 25 + 2(\mathbf{u} \cdot \mathbf{v}) + 9</span> for <span class="chem">\mathbf{u} \cdot \mathbf{v}</span>, then use <span class="chem">cos theta = (\mathbf{u} \cdot \mathbf{v}) / (|\mathbf{u}||\mathbf{v}|)</span>.
        "<span class=\"chem\">49 = 25 + 2(\\mathbf{u} \\cdot \\mathbf{v}) + 9</span> を <span class=\"chem\">\\mathbf{u} \\cdot \\mathbf{v}</span> について解き、<span class=\"chem\">cos theta = (\\mathbf{u} \\cdot \\mathbf{v}) / (|\\mathbf{u}||\\mathbf{v}|)</span> を使います。",
      ],
      // EN: <p><span class="chem">49 = 5^2 + 2(\mathbf{u} \cdot \mathbf{v}) + 3^2 = 34 + 2(\mathbf{u} \cdot \mathbf{v}) => \mathbf{u} \cdot \mathbf{v} = 7.5</span>. Therefore <span class="chem">cos theta = 7.5 / (5 × 3) = 1/2 => theta = 60°</span>.</p>
      solution: "<p><span class=\"chem\">49 = 5^2 + 2(\\mathbf{u} \\cdot \\mathbf{v}) + 3^2 = 34 + 2(\\mathbf{u} \\cdot \\mathbf{v}) => \\mathbf{u} \\cdot \\mathbf{v} = 7.5</span>。よって <span class=\"chem\">cos theta = 7.5 / (5 × 3) = 1/2 => theta = 60°</span> です。</p>",
    },

    // ── t3-3-q009 · numeric · exam · AHL · AHL 3.14 · 4 marks
    "t3-3-q009": {
      // EN: <p>At time <span class="chem">t &gt;= 0</span> hours, boat A has position <span class="chem">r_A(t) = (1, 2, 0) + t(2, -1, 0)</span> and boat B has position <span class="chem">r_B(t) = (7, -4, 0) + t(-1, 2, 0)</span>. Find the time <span class="chem">t</span> at which the two boats collide.</p>
      stem: "<p>時刻 <span class=\"chem\">t &gt;= 0</span> 時間において、船 A の位置は <span class=\"chem\">r_A(t) = (1, 2, 0) + t(2, -1, 0)</span>、船 B の位置は <span class=\"chem\">r_B(t) = (7, -4, 0) + t(-1, 2, 0)</span> である。2 隻の船が衝突する時刻 <span class=\"chem\">t</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: For a collision, both boats must be at the same position at the <em>same</em> time <span class="chem">t</span>: set <span class="chem">r_A(t) = r_B(t)</span>.
        "衝突するには、<em>同じ</em>時刻 <span class=\"chem\">t</span> に両方の船が同じ位置にいなければなりません：<span class=\"chem\">r_A(t) = r_B(t)</span> とおきます。",
        // EN: Solve <span class="chem">1 + 2t = 7 - t</span> and verify the <span class="chem">y</span>-coordinate matches at that <span class="chem">t</span>.
        "<span class=\"chem\">1 + 2t = 7 - t</span> を解き、その <span class=\"chem\">t</span> で <span class=\"chem\">y</span> 座標も一致することを確かめます。",
      ],
      // EN: <p>Equating <span class="chem">x</span>-coordinates: <span class="chem">1 + 2t = 7 - t => 3t = 6 => t = 2</span>. Checking <span class="chem">y</span>-coordinates at <span class="chem">t = 2</span>: <span class="chem">2 - 2 = 0</span> and <span class="chem">-4 + 4 = 0</span>. They collide at <span class="chem">(5, 0, 0)</span> when <span class="chem">t = 2</span> hours.</p>
      solution: "<p><span class=\"chem\">x</span> 座標を等置すると <span class=\"chem\">1 + 2t = 7 - t => 3t = 6 => t = 2</span> です。<span class=\"chem\">t = 2</span> で <span class=\"chem\">y</span> 座標を調べると <span class=\"chem\">2 - 2 = 0</span> と <span class=\"chem\">-4 + 4 = 0</span> で一致します。よって <span class=\"chem\">t = 2</span> 時間後に <span class=\"chem\">(5, 0, 0)</span> で衝突します。</p>",
      // EN: hours
      unit: "時間",
    },

    // ── t3-3-q010 · mcq · exam · AHL · AHL 3.15 · 5 marks
    "t3-3-q010": {
      // EN: <p>Find the shortest distance from the point <span class="chem">P(1, 3, -2)</span> to the line <span class="chem">L: \mathbf{r} = (1, 0, 1) + lambda(2, 1, -2)</span>.</p>
      stem: "<p>点 <span class=\"chem\">P(1, 3, -2)</span> から直線 <span class=\"chem\">L: \\mathbf{r} = (1, 0, 1) + lambda(2, 1, -2)</span> までの最短距離を求めなさい (Find)。</p>",
      options: [
        // EN: <span class="chem">3</span>
        "<span class=\"chem\">3</span>",
        // EN: <span class="chem">3*sqrt(2)</span>
        "<span class=\"chem\">3*sqrt(2)</span>",
        // EN: <span class="chem">9</span>
        "<span class=\"chem\">9</span>",
        // EN: <span class="chem">sqrt(5)</span>
        "<span class=\"chem\">sqrt(5)</span>",
      ],
      hints: [
        // EN: Let <span class="chem">F(1 + 2 lambda, lambda, 1 - 2 lambda)</span> be the foot of the perpendicular from <span class="chem">P</span> to <span class="chem">L</span>.
        "<span class=\"chem\">P</span> から <span class=\"chem\">L</span> に下ろした垂線の足を <span class=\"chem\">F(1 + 2 lambda, lambda, 1 - 2 lambda)</span> とします。",
        // EN: Solve <span class="chem">\mathbf{PF} \cdot (2, 1, -2) = 0</span> for <span class="chem">lambda</span>, then find <span class="chem">|\mathbf{PF}|</span>.
        "<span class=\"chem\">\\mathbf{PF} \\cdot (2, 1, -2) = 0</span> を <span class=\"chem\">lambda</span> について解き、<span class=\"chem\">|\\mathbf{PF}|</span> を求めます。",
      ],
      // EN: <p><span class="chem">\mathbf{PF} = (2 lambda, lambda - 3, 3 - 2 lambda)</span>. Setting <span class="chem">\mathbf{PF} \cdot (2, 1, -2) = 0</span> gives <span class="chem">4 lambda + lambda - 3 - 6 + 4 lambda = 9 lambda - 9 = 0 => lambda = 1</span>. Thus <span class="chem">\mathbf{PF} = (2, -2, 1)</span> and <span class="chem">|\mathbf{PF}| = sqrt(4 + 4 + 1) = 3</span>.</p>
      solution: "<p><span class=\"chem\">\\mathbf{PF} = (2 lambda, lambda - 3, 3 - 2 lambda)</span> です。<span class=\"chem\">\\mathbf{PF} \\cdot (2, 1, -2) = 0</span> とおくと <span class=\"chem\">4 lambda + lambda - 3 - 6 + 4 lambda = 9 lambda - 9 = 0 => lambda = 1</span> となります。よって <span class=\"chem\">\\mathbf{PF} = (2, -2, 1)</span> であり、<span class=\"chem\">|\\mathbf{PF}| = sqrt(4 + 4 + 1) = 3</span> です。</p>",
      misconception: {
        // EN (option B): <span class="chem">3*sqrt(2)</span> is the distance from <span class="chem">P</span> to the starting point <span class="chem">A(1, 0, 1)</span>, not the perpendicular distance to the line.
        "1": "<span class=\"chem\">3*sqrt(2)</span> は直線への垂線の長さではなく、<span class=\"chem\">P</span> から基点 <span class=\"chem\">A(1, 0, 1)</span> までの距離です。",
        // EN (option C): Remember to take the square root of <span class="chem">2^2 + (-2)^2 + 1^2 = 9</span>.
        "2": "<span class=\"chem\">2^2 + (-2)^2 + 1^2 = 9</span> の平方根をとるのを忘れないようにしましょう。",
        // EN (option D): Check your <span class="chem">\mathbf{PF} \cdot \mathbf{b} = 0</span> equation: <span class="chem">2(2 lambda) + 1(lambda - 3) - 2(3 - 2 lambda) = 9 lambda - 9 = 0 => lambda = 1</span>.
        "3": "<span class=\"chem\">\\mathbf{PF} \\cdot \\mathbf{b} = 0</span> の式を確認しましょう：<span class=\"chem\">2(2 lambda) + 1(lambda - 3) - 2(3 - 2 lambda) = 9 lambda - 9 = 0 => lambda = 1</span>。",
      },
    },

    // ── t3-3-q011 · numeric · exam · AHL · AHL 3.18 · 4 marks
    "t3-3-q011": {
      // EN: <p>Find the acute angle <span class="chem">phi</span> (in degrees, correct to 3 significant figures) between the line <span class="chem">\mathbf{r} = (1, 2, 0) + lambda(2, 1, 2)</span> and the plane <span class="chem">2x + 2y - z = 7</span>.</p>
      stem: "<p>直線 <span class=\"chem\">\\mathbf{r} = (1, 2, 0) + lambda(2, 1, 2)</span> と平面 <span class=\"chem\">2x + 2y - z = 7</span> のなす鋭角 <span class=\"chem\">phi</span> を度数法で求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Use the line-plane angle formula <span class="chem">sin phi = |\mathbf{b} \cdot \mathbf{n}| / (|\mathbf{b}||\mathbf{n}|)</span> with <span class="chem">b = (2, 1, 2)</span> and <span class="chem">\mathbf{n} = (2, 2, -1)</span>.
        "<span class=\"chem\">b = (2, 1, 2)</span> と <span class=\"chem\">\\mathbf{n} = (2, 2, -1)</span> を使って、直線と平面のなす角の公式 <span class=\"chem\">sin phi = |\\mathbf{b} \\cdot \\mathbf{n}| / (|\\mathbf{b}||\\mathbf{n}|)</span> を使います。",
        // EN: Compute <span class="chem">sin phi = |4 + 2 - 2| / (3 × 3) = 4 / 9</span>, then take <span class="chem">arcsin(4/9)</span> in degrees.
        "<span class=\"chem\">sin phi = |4 + 2 - 2| / (3 × 3) = 4 / 9</span> を計算し、度数法で <span class=\"chem\">arcsin(4/9)</span> を求めます。",
      ],
      // EN: <p>With <span class="chem">b = (2, 1, 2)</span> (<span class="chem">|b| = 3</span>) and <span class="chem">\mathbf{n} = (2, 2, -1)</span> (<span class="chem">|\mathbf{n}| = 3</span>), <span class="chem">sin phi = |2(2) + 1(2) + 2(-1)| / (3 × 3) = 4/9</span>. Hence <span class="chem">phi = arcsin(4/9) ≈ 26.4°</span>.</p>
      solution: "<p><span class=\"chem\">b = (2, 1, 2)</span>（<span class=\"chem\">|b| = 3</span>）および <span class=\"chem\">\\mathbf{n} = (2, 2, -1)</span>（<span class=\"chem\">|\\mathbf{n}| = 3</span>）より、<span class=\"chem\">sin phi = |2(2) + 1(2) + 2(-1)| / (3 × 3) = 4/9</span> です。よって <span class=\"chem\">phi = arcsin(4/9) ≈ 26.4°</span> となります。</p>",
    },

    // ── t3-3-q012 · numeric · exam · AHL · AHL 3.18 · 3 marks
    "t3-3-q012": {
      // EN: <p>The line <span class="chem">\mathbf{r} = (1, 2, -1) + lambda(2, -1, 3)</span> intersects the plane <span class="chem">x + 2y + z = 12</span> at point <span class="chem">Q</span>. Find the <span class="chem">z</span>-coordinate of <span class="chem">Q</span>.</p>
      stem: "<p>直線 <span class=\"chem\">\\mathbf{r} = (1, 2, -1) + lambda(2, -1, 3)</span> が平面 <span class=\"chem\">x + 2y + z = 12</span> と点 <span class=\"chem\">Q</span> で交わる。<span class=\"chem\">Q</span> の <span class=\"chem\">z</span> 座標を求めなさい (Find)。</p>",
      hints: [
        // EN: Substitute <span class="chem">x = 1 + 2 lambda</span>, <span class="chem">y = 2 - lambda</span>, <span class="chem">z = -1 + 3 lambda</span> into <span class="chem">x + 2y + z = 12</span>.
        "<span class=\"chem\">x = 1 + 2 lambda</span>、<span class=\"chem\">y = 2 - lambda</span>、<span class=\"chem\">z = -1 + 3 lambda</span> を <span class=\"chem\">x + 2y + z = 12</span> に代入します。",
        // EN: Solve for <span class="chem">lambda</span>, then compute <span class="chem">z = -1 + 3 lambda</span>.
        "<span class=\"chem\">lambda</span> を求め、それから <span class=\"chem\">z = -1 + 3 lambda</span> を計算します。",
      ],
      // EN: <p>Substituting gives <span class="chem">(1 + 2 lambda) + 2(2 - lambda) + (-1 + 3 lambda) = 12 => 4 + 3 lambda = 12 => lambda = 8/3</span>. Thus <span class="chem">z = -1 + 3(8/3) = 7</span>.</p>
      solution: "<p>代入すると <span class=\"chem\">(1 + 2 lambda) + 2(2 - lambda) + (-1 + 3 lambda) = 12 => 4 + 3 lambda = 12 => lambda = 8/3</span> となります。よって <span class=\"chem\">z = -1 + 3(8/3) = 7</span> です。</p>",
    },

    // ── t3-3-q013 · mcq · exam · AHL · AHL 3.18 · 4 marks
    "t3-3-q013": {
      // EN: <p>Find the acute angle between the two planes <span class="chem">Pi_1: x - y + sqrt(2) z = 5</span> and <span class="chem">Pi_2: x + y + sqrt(2) z = 1</span>.</p>
      stem: "<p>2 つの平面 <span class=\"chem\">Pi_1: x - y + sqrt(2) z = 5</span> と <span class=\"chem\">Pi_2: x + y + sqrt(2) z = 1</span> のなす鋭角を求めなさい (Find)。</p>",
      options: [
        // EN: <span class="chem">60°</span> (<span class="chem">pi/3</span>)
        "<span class=\"chem\">60°</span>（<span class=\"chem\">pi/3</span>）",
        // EN: <span class="chem">30°</span> (<span class="chem">pi/6</span>)
        "<span class=\"chem\">30°</span>（<span class=\"chem\">pi/6</span>）",
        // EN: <span class="chem">45°</span> (<span class="chem">pi/4</span>)
        "<span class=\"chem\">45°</span>（<span class=\"chem\">pi/4</span>）",
        // EN: <span class="chem">120°</span> (<span class="chem">2pi/3</span>)
        "<span class=\"chem\">120°</span>（<span class=\"chem\">2pi/3</span>）",
      ],
      hints: [
        // EN: Extract the normal vectors <span class="chem">\mathbf{n_1} = (1, -1, sqrt(2))</span> and <span class="chem">\mathbf{n_2} = (1, 1, sqrt(2))</span>.
        "法線ベクトル <span class=\"chem\">\\mathbf{n_1} = (1, -1, sqrt(2))</span> と <span class=\"chem\">\\mathbf{n_2} = (1, 1, sqrt(2))</span> を読み取ります。",
        // EN: Compute <span class="chem">cos theta = |\mathbf{n_1} \cdot \mathbf{n_2}| / (|\mathbf{n_1}||\mathbf{n_2}|)</span>.
        "<span class=\"chem\">cos theta = |\\mathbf{n_1} \\cdot \\mathbf{n_2}| / (|\\mathbf{n_1}||\\mathbf{n_2}|)</span> を計算します。",
      ],
      // EN: <p><span class="chem">|\mathbf{n_1}| = sqrt(1 + 1 + 2) = 2</span>, <span class="chem">|\mathbf{n_2}| = 2</span>, and <span class="chem">\mathbf{n_1} \cdot \mathbf{n_2} = 1 - 1 + 2 = 2</span>. Thus <span class="chem">cos theta = 2 / (2 × 2) = 1/2 => theta = 60°</span> (<span class="chem">pi/3</span>).</p>
      solution: "<p><span class=\"chem\">|\\mathbf{n_1}| = sqrt(1 + 1 + 2) = 2</span>、<span class=\"chem\">|\\mathbf{n_2}| = 2</span>、かつ <span class=\"chem\">\\mathbf{n_1} \\cdot \\mathbf{n_2} = 1 - 1 + 2 = 2</span> です。よって <span class=\"chem\">cos theta = 2 / (2 × 2) = 1/2 => theta = 60°</span>（<span class=\"chem\">pi/3</span>）となります。</p>",
      misconception: {
        // EN (option B): The angle between two planes uses <span class="chem">cos theta = |\mathbf{n_1} \cdot \mathbf{n_2}| / (|\mathbf{n_1}||\mathbf{n_2}|) = 1/2</span>, not <span class="chem">sin theta = 1/2</span>.
        "1": "2 平面のなす角では <span class=\"chem\">sin theta = 1/2</span> ではなく <span class=\"chem\">cos theta = |\\mathbf{n_1} \\cdot \\mathbf{n_2}| / (|\\mathbf{n_1}||\\mathbf{n_2}|) = 1/2</span> を使います。",
        // EN (option C): Check <span class="chem">|\mathbf{n_1}| = sqrt(1 + 1 + 2) = 2</span> and <span class="chem">\mathbf{n_1} \cdot \mathbf{n_2} = 1 - 1 + 2 = 2</span>, giving <span class="chem">cos theta = 2 / 4 = 1/2</span>.
        "2": "<span class=\"chem\">|\\mathbf{n_1}| = sqrt(1 + 1 + 2) = 2</span> と <span class=\"chem\">\\mathbf{n_1} \\cdot \\mathbf{n_2} = 1 - 1 + 2 = 2</span> を確認すると、<span class=\"chem\">cos theta = 2 / 4 = 1/2</span> です。",
        // EN (option D): The question asks for the <em>acute</em> angle between the planes.
        "3": "問題文で問われているのは 2 平面のなす<em>鋭角</em>です。",
      },
    },

    // ── t3-3-q014 · short · exam · AHL · AHL 3.16–3.18 · 7 marks
    "t3-3-q014": {
      // EN: <p>The points <span class="chem">A(1, 1, 0)</span>, <span class="chem">B(2, 0, 2)</span>, and <span class="chem">C(0, 2, 1)</span> lie on a plane <span class="chem">Pi</span>.</p><p>(a) Find <span class="chem">\mathbf{AB} \times \mathbf{AC}</span> and hence show that the Cartesian equation of <span class="chem">Pi</span> is <span class="chem">x + y = 2</span>. <strong>[4 marks]</strong></p><p>(b) Find the coordinates of the point <span class="chem">F</span> on <span class="chem">Pi</span> that is closest to <span class="chem">P(3, 5, 2)</span>. <strong>[3 marks]</strong></p>
      stem: "<p>3 点 <span class=\"chem\">A(1, 1, 0)</span>、<span class=\"chem\">B(2, 0, 2)</span>、<span class=\"chem\">C(0, 2, 1)</span> が平面 <span class=\"chem\">Pi</span> 上にある。</p><p>(a) <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC}</span> を求め (Find)、これを用いて <span class=\"chem\">Pi</span> の直交座標方程式が <span class=\"chem\">x + y = 2</span> であることを示しなさい (show that)。 <strong>[4 marks]</strong></p><p>(b) <span class=\"chem\">Pi</span> 上で点 <span class=\"chem\">P(3, 5, 2)</span> に最も近い点 <span class=\"chem\">F</span> の座標を求めなさい (Find)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: For part (b), the closest point <span class="chem">F</span> lies where the line through <span class="chem">P</span> with direction <span class="chem">\mathbf{n} = (1, 1, 0)</span> meets the plane <span class="chem">Pi</span>.
        "(b) では、最も近い点 <span class=\"chem\">F</span> は <span class=\"chem\">P</span> を通り方向ベクトル <span class=\"chem\">\\mathbf{n} = (1, 1, 0)</span> をもつ直線と平面 <span class=\"chem\">Pi</span> との交点です。",
      ],
      // EN: <p>(a) <span class="chem">\mathbf{AB} = (1, -1, 2)</span> and <span class="chem">\mathbf{AC} = (-1, 1, 1)</span>. Their cross product is <span class="chem">\mathbf{AB} \times \mathbf{AC} = (-3, -3, 0)</span>, so <span class="chem">\mathbf{n} = (1, 1, 0)</span> is a normal vector. Using <span class="chem">A(1, 1, 0)</span>: <span class="chem">1(x) + 1(y) + 0(z) = 1 + 1 = 2 => x + y = 2</span>.</p><p>(b) The line through <span class="chem">P</span> perpendicular to <span class="chem">Pi</span> is <span class="chem">\mathbf{r} = (3, 5, 2) + t(1, 1, 0)</span>. Substituting into <span class="chem">x + y = 2</span> gives <span class="chem">(3 + t) + (5 + t) = 2 => 2t = -6 => t = -3</span>. Thus <span class="chem">F = (0, 2, 2)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">\\mathbf{AB} = (1, -1, 2)</span>、<span class=\"chem\">\\mathbf{AC} = (-1, 1, 1)</span>。外積は <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC} = (-3, -3, 0)</span> なので、<span class=\"chem\">\\mathbf{n} = (1, 1, 0)</span> が法線ベクトルとなる。<span class=\"chem\">A(1, 1, 0)</span> を用いると <span class=\"chem\">1(x) + 1(y) + 0(z) = 1 + 1 = 2 => x + y = 2</span>。</p><p>(b) <span class=\"chem\">P</span> を通り <span class=\"chem\">Pi</span> に垂直な直線は <span class=\"chem\">\\mathbf{r} = (3, 5, 2) + t(1, 1, 0)</span>。<span class=\"chem\">x + y = 2</span> に代入すると <span class=\"chem\">(3 + t) + (5 + t) = 2 => 2t = -6 => t = -3</span>。よって <span class=\"chem\">F = (0, 2, 2)</span>。</p>",
      markscheme: [
        // EN: A1: finds <span class="chem">\mathbf{AB} = (1, -1, 2)</span> and <span class="chem">\mathbf{AC} = (-1, 1, 1)</span>.
        "A1：<span class=\"chem\">\\mathbf{AB} = (1, -1, 2)</span> と <span class=\"chem\">\\mathbf{AC} = (-1, 1, 1)</span> を求める。",
        // EN: M1: computes the cross product <span class="chem">\mathbf{AB} \times \mathbf{AC}</span>.
        "M1：外積 <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC}</span> を計算する。",
        // EN: A1: obtains <span class="chem">\mathbf{AB} \times \mathbf{AC} = (-3, -3, 0)</span> (or any non-zero multiple).
        "A1：<span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC} = (-3, -3, 0)</span>（またはその非ゼロのスカラー倍）を得る。",
        // EN: A1: substitutes point <span class="chem">A</span> (or <span class="chem">B, C</span>) into <span class="chem">x + y = d</span> to find <span class="chem">d = 1 + 1 = 2</span>, so <span class="chem">x + y = 2</span> (AG).
        "A1：点 <span class=\"chem\">A</span>（または <span class=\"chem\">B, C</span>）を <span class=\"chem\">x + y = d</span> に代入して <span class=\"chem\">d = 1 + 1 = 2</span> を求め、<span class=\"chem\">x + y = 2</span> となる (AG)。",
        // EN: M1: writes normal line through <span class="chem">P</span> as <span class="chem">\mathbf{r} = (3, 5, 2) + t(1, 1, 0)</span>.
        "M1：<span class=\"chem\">P</span> を通る法線を <span class=\"chem\">\\mathbf{r} = (3, 5, 2) + t(1, 1, 0)</span> と書く。",
        // EN: M1: substitutes into <span class="chem">x + y = 2</span> to find <span class="chem">t = -3</span>.
        "M1：<span class=\"chem\">x + y = 2</span> に代入して <span class=\"chem\">t = -3</span> を求める。",
        // EN: A1: states <span class="chem">F(0, 2, 2)</span>.
        "A1：<span class=\"chem\">F(0, 2, 2)</span> を述べる。",
      ],
    },

    // ── t3-3-q015 · numeric · challenge · AHL · AHL 3.18 · 5 marks
    "t3-3-q015": {
      // EN: <p>The planes <span class="chem">Pi_1: x + y + z = 6</span> and <span class="chem">Pi_2: 2x - y + z = 3</span> intersect in a line <span class="chem">L</span>. Find the exact distance from the origin <span class="chem">O(0, 0, 0)</span> to the point where <span class="chem">L</span> crosses the <span class="chem">xy</span>-plane (<span class="chem">z = 0</span>).</p>
      stem: "<p>2 つの平面 <span class=\"chem\">Pi_1: x + y + z = 6</span> と <span class=\"chem\">Pi_2: 2x - y + z = 3</span> が直線 <span class=\"chem\">L</span> で交わる。<span class=\"chem\">L</span> が <span class=\"chem\">xy</span> 平面（<span class=\"chem\">z = 0</span>）を横切る点から原点 <span class=\"chem\">O(0, 0, 0)</span> までの正確な距離を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: you do not need the whole line <span class="chem">L</span>. The point where <span class="chem">L</span> crosses the <span class="chem">xy</span>-plane lies on both planes and has <span class="chem">z = 0</span>.
        "解読：直線 <span class=\"chem\">L</span> 全体を求める必要はありません。<span class=\"chem\">L</span> が <span class=\"chem\">xy</span> 平面を横切る点は両方の平面上にあり、<span class=\"chem\">z = 0</span> を満たします。",
        // EN: At the <span class="chem">xy</span>-plane, <span class="chem">z = 0</span>. Substitute <span class="chem">z = 0</span> into both plane equations.
        "<span class=\"chem\">xy</span> 平面上では <span class=\"chem\">z = 0</span> です。両方の平面の方程式に <span class=\"chem\">z = 0</span> を代入します。",
        // EN: Solve <span class="chem">x + y = 6</span> and <span class="chem">2x - y = 3</span>, then find <span class="chem">sqrt(x^2 + y^2 + 0^2)</span>.
        "<span class=\"chem\">x + y = 6</span> と <span class=\"chem\">2x - y = 3</span> を解き、<span class=\"chem\">sqrt(x^2 + y^2 + 0^2)</span> を求めます。",
      ],
      // EN: <p>Setting <span class="chem">z = 0</span> gives <span class="chem">x + y = 6</span> and <span class="chem">2x - y = 3</span>. Adding gives <span class="chem">3x = 9 => x = 3</span> and <span class="chem">y = 3</span>. The intersection point is <span class="chem">(3, 3, 0)</span>, whose distance from the origin is <span class="chem">sqrt(3^2 + 3^2) = 3 sqrt(2) ≈ 4.24</span>.</p>
      solution: "<p><span class=\"chem\">z = 0</span> とおくと <span class=\"chem\">x + y = 6</span> と <span class=\"chem\">2x - y = 3</span> になります。辺々足すと <span class=\"chem\">3x = 9 => x = 3</span>、よって <span class=\"chem\">y = 3</span> です。交点は <span class=\"chem\">(3, 3, 0)</span> であり、原点からの距離は <span class=\"chem\">sqrt(3^2 + 3^2) = 3 sqrt(2) ≈ 4.24</span> となります。</p>",
    },

    // ── t3-3-q016 · numeric · challenge · AHL · AHL 3.17–3.18 · 6 marks
    "t3-3-q016": {
      // EN: <p>Point <span class="chem">P'</span> is the reflection of <span class="chem">P(4, -1, 3)</span> in the plane <span class="chem">x - 2y + 2z = 3</span>. Find the distance between <span class="chem">P</span> and <span class="chem">P'</span>.</p>
      stem: "<p>点 <span class=\"chem\">P'</span> は平面 <span class=\"chem\">x - 2y + 2z = 3</span> に関して点 <span class=\"chem\">P(4, -1, 3)</span> と対称な点である。<span class=\"chem\">P</span> と <span class=\"chem\">P'</span> の間の距離を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: the reflection <span class="chem">P'</span> is as far behind the plane as <span class="chem">P</span> is in front of it, so <span class="chem">PP'</span> is twice the perpendicular distance from <span class="chem">P</span> to the plane.
        "解読：鏡像 <span class=\"chem\">P'</span> は、<span class=\"chem\">P</span> が平面の手前にあるのと同じ距離だけ平面の向こう側にあるので、<span class=\"chem\">PP'</span> は <span class=\"chem\">P</span> から平面までの垂直距離の 2 倍です。",
        // EN: The line through <span class="chem">P</span> perpendicular to the plane is <span class="chem">\mathbf{r} = (4, -1, 3) + t(1, -2, 2)</span>.
        "<span class=\"chem\">P</span> を通り平面に垂直な直線は <span class=\"chem\">\\mathbf{r} = (4, -1, 3) + t(1, -2, 2)</span> です。",
        // EN: Find <span class="chem">t</span> at the foot <span class="chem">F</span> on the plane; then <span class="chem">PP' = 2 \mathbf{PF}</span>, so <span class="chem">|PP'| = 2|t||(1, -2, 2)|</span>.
        "平面上の垂線の足 <span class=\"chem\">F</span> における <span class=\"chem\">t</span> を求めます；<span class=\"chem\">PP' = 2 \\mathbf{PF}</span> なので <span class=\"chem\">|PP'| = 2|t||(1, -2, 2)|</span> です。",
      ],
      // EN: <p>Substituting <span class="chem">(4 + t, -1 - 2t, 3 + 2t)</span> into <span class="chem">x - 2y + 2z = 3</span> gives <span class="chem">(4 + t) - 2(-1 - 2t) + 2(3 + 2t) = 3 => 12 + 9t = 3 => t = -1</span>. Thus <span class="chem">\mathbf{PF} = (-1, 2, -2)</span> has length <span class="chem">3</span>, and the distance <span class="chem">|PP'| = 2 × 3 = 6</span>.</p>
      solution: "<p><span class=\"chem\">(4 + t, -1 - 2t, 3 + 2t)</span> を <span class=\"chem\">x - 2y + 2z = 3</span> に代入すると <span class=\"chem\">(4 + t) - 2(-1 - 2t) + 2(3 + 2t) = 3 => 12 + 9t = 3 => t = -1</span> となります。よって <span class=\"chem\">\\mathbf{PF} = (-1, 2, -2)</span> の長さは <span class=\"chem\">3</span> であり、距離は <span class=\"chem\">|PP'| = 2 × 3 = 6</span> です。</p>",
    },

    // ── t3-3-q017 · mcq · challenge · AHL · AHL 3.18 · 5 marks
    "t3-3-q017": {
      // EN: <p>The system of three planes <span class="chem">x + y + z = 3</span>, <span class="chem">2x - y + z = 2</span>, and <span class="chem">x + 4y + k z = m</span> has infinitely many solutions (the planes meet along a common line). Find the values of <span class="chem">k</span> and <span class="chem">m</span>.</p>
      stem: "<p>3 つの平面の方程式 <span class=\"chem\">x + y + z = 3</span>、<span class=\"chem\">2x - y + z = 2</span>、<span class=\"chem\">x + 4y + k z = m</span> が無数の解をもつ（3 平面が共通の 1 直線で交わる）。<span class=\"chem\">k</span> と <span class=\"chem\">m</span> の値を求めなさい (Find)。</p>",
      options: [
        // EN: <span class="chem">k = 2, m = 7</span>
        "<span class=\"chem\">k = 2, m = 7</span>",
        // EN: <span class="chem">k = 2, m = 5</span>
        "<span class=\"chem\">k = 2, m = 5</span>",
        // EN: <span class="chem">k = 1, m = 7</span>
        "<span class=\"chem\">k = 1, m = 7</span>",
        // EN: <span class="chem">k = -2, m = 7</span>
        "<span class=\"chem\">k = -2, m = 7</span>",
      ],
      hints: [
        // EN: Decode: "meet along a common line" means the system has infinitely many solutions, so after eliminating <span class="chem">x</span> the two remaining equations must be the same equation.
        "解読：「共通の直線に沿って交わる」とは連立方程式が無数の解をもつということなので、<span class=\"chem\">x</span> を消去した後に残る 2 つの方程式は同じ方程式でなければなりません。",
        // EN: Eliminate <span class="chem">x</span> from the second and third equations using the first equation: <span class="chem">R_2 - 2 R_1</span> and <span class="chem">R_3 - R_1</span>.
        "1 番目の式を使って 2 番目と 3 番目の式から <span class=\"chem\">x</span> を消去します：<span class=\"chem\">R_2 - 2 R_1</span> と <span class=\"chem\">R_3 - R_1</span>。",
        // EN: For infinitely many solutions, the two resulting equations in <span class="chem">y</span> and <span class="chem">z</span> must be identical.
        "無数の解をもつためには、得られた <span class=\"chem\">y</span> と <span class=\"chem\">z</span> の 2 つの方程式が一致しなければなりません。",
      ],
      // EN: <p><span class="chem">R_2 - 2 R_1</span> gives <span class="chem">-3y - z = -4</span>, i.e., <span class="chem">3y + z = 4</span>. <span class="chem">R_3 - R_1</span> gives <span class="chem">3y + (k - 1)z = m - 3</span>. Matching coefficients yields <span class="chem">k - 1 = 1 => k = 2</span> and <span class="chem">m - 3 = 4 => m = 7</span>.</p>
      solution: "<p><span class=\"chem\">R_2 - 2 R_1</span> より <span class=\"chem\">-3y - z = -4</span>、すなわち <span class=\"chem\">3y + z = 4</span> が得られます。<span class=\"chem\">R_3 - R_1</span> より <span class=\"chem\">3y + (k - 1)z = m - 3</span> となります。係数を比較すると <span class=\"chem\">k - 1 = 1 => k = 2</span> かつ <span class=\"chem\">m - 3 = 4 => m = 7</span> です。</p>",
      misconception: {
        // EN (option B): If <span class="chem">k = 2</span> and <span class="chem">m != 7</span>, the planes form a triangular prism with <em>no</em> common solution.
        "1": "<span class=\"chem\">k = 2</span> かつ <span class=\"chem\">m != 7</span> の場合、3 平面は三角柱を作り、共通解は<em>存在しません</em>。",
        // EN (option C): Eliminating <span class="chem">x</span> gives <span class="chem">3y + z = 4</span> and <span class="chem">3y + (k - 1)z = m - 3</span>, so <span class="chem">k - 1 = 1 => k = 2</span>.
        "2": "<span class=\"chem\">x</span> を消去すると <span class=\"chem\">3y + z = 4</span> と <span class=\"chem\">3y + (k - 1)z = m - 3</span> が得られるため、<span class=\"chem\">k - 1 = 1 => k = 2</span> です。",
        // EN (option D): Check the sign on <span class="chem">R_2 - 2 R_1</span>: <span class="chem">(1 - 2)z = -z</span>, so <span class="chem">-3y - z = -4</span> becomes <span class="chem">3y + z = 4</span>.
        "3": "<span class=\"chem\">R_2 - 2 R_1</span> の符号を確認しましょう：<span class=\"chem\">(1 - 2)z = -z</span> なので、<span class=\"chem\">-3y - z = -4</span> は <span class=\"chem\">3y + z = 4</span> になります。",
      },
    },

    // ── t3-3-q018 · short · challenge · AHL · AHL 3.15–3.16 · 8 marks
    "t3-3-q018": {
      // EN: <p>Consider the two lines <span class="chem">L_1: \mathbf{r} = (1, 0, 2) + lambda(1, -1, 1)</span> and <span class="chem">L_2: \mathbf{r} = (0, 3, 1) + mu(2, 1, -1)</span>.</p><p>(a) Show that <span class="chem">L_1</span> and <span class="chem">L_2</span> are skew. <strong>[3 marks]</strong></p><p>(b) Find a unit vector <span class="chem">\mathbf{n̂}</span> perpendicular to both <span class="chem">L_1</span> and <span class="chem">L_2</span>, and hence find the exact shortest distance between <span class="chem">L_1</span> and <span class="chem">L_2</span>. <strong>[5 marks]</strong></p>
      stem: "<p>2 つの直線 <span class=\"chem\">L_1: \\mathbf{r} = (1, 0, 2) + lambda(1, -1, 1)</span> と <span class=\"chem\">L_2: \\mathbf{r} = (0, 3, 1) + mu(2, 1, -1)</span> を考える。</p><p>(a) <span class=\"chem\">L_1</span> と <span class=\"chem\">L_2</span> がねじれの位置にあることを示しなさい (Show that)。 <strong>[3 marks]</strong></p><p>(b) <span class=\"chem\">L_1</span> と <span class=\"chem\">L_2</span> の両方に垂直な単位ベクトル <span class=\"chem\">\\mathbf{n̂}</span> を求め (Find)、これを用いて <span class=\"chem\">L_1</span> と <span class=\"chem\">L_2</span> の間の正確な最短距離を求めなさい。 <strong>[5 marks]</strong></p>",
      hints: [
        // EN: Decode: "skew" means not parallel and not intersecting, so part (a) must rule out both. In part (b) the shortest distance is measured along the common perpendicular.
        "解読：「ねじれの位置」とは平行でもなく交わりもしないことなので、(a) ではその両方を否定する必要があります。(b) では、最短距離は共通垂線に沿って測ります。",
        // EN: In part (b), the shortest segment between two skew lines is perpendicular to both lines, so it is parallel to <span class="chem">\mathbf{b_1} \times \mathbf{b_2}</span>.
        "(b) では、ねじれの位置にある 2 直線間の最短線分は両方の直線に垂直なので、<span class=\"chem\">\\mathbf{b_1} \\times \\mathbf{b_2}</span> に平行です。",
        // EN: Projecting any connecting vector <span class="chem">\mathbf{A_1A_2}</span> onto the unit common normal <span class="chem">\mathbf{n̂}</span> gives the shortest distance <span class="chem">|\mathbf{A_1A_2} \cdot \mathbf{n̂}|</span>.
        "2 直線を結ぶ任意のベクトル <span class=\"chem\">\\mathbf{A_1A_2}</span> を単位共通法線ベクトル <span class=\"chem\">\\mathbf{n̂}</span> に射影すると、最短距離 <span class=\"chem\">|\\mathbf{A_1A_2} \\cdot \\mathbf{n̂}|</span> が得られます。",
      ],
      // EN: <p>(a) Direction vectors <span class="chem">(1, -1, 1)</span> and <span class="chem">(2, 1, -1)</span> are not scalar multiples (not parallel). Equating <span class="chem">x</span> and <span class="chem">y</span>: <span class="chem">1 + lambda = 2 mu</span> and <span class="chem">-lambda = 3 + mu</span>. Adding gives <span class="chem">1 = 3 + 3 mu => mu = -2/3, lambda = -7/3</span>. Checking <span class="chem">z</span>: <span class="chem">2 + (-7/3) = -1/3 != 1 - (-2/3) = 5/3</span>. Thus <span class="chem">L_1</span> and <span class="chem">L_2</span> are skew.</p><p>(b) <span class="chem">(1, -1, 1) \times (2, 1, -1) = (0, 3, 3)</span>, so <span class="chem">\mathbf{n̂} = (0, 1/sqrt(2), 1/sqrt(2))</span>. Taking <span class="chem">A_1(1, 0, 2)</span> on <span class="chem">L_1</span> and <span class="chem">A_2(0, 3, 1)</span> on <span class="chem">L_2</span>, <span class="chem">\mathbf{A_1A_2} = (-1, 3, -1)</span>. The shortest distance is <span class="chem">|\mathbf{A_1A_2} \cdot \mathbf{n̂}| = |0 + 3 - 1| / sqrt(2) = 2 / sqrt(2) = sqrt(2)</span>.</p>
      answer: "<p>(a) 方向ベクトル <span class=\"chem\">(1, -1, 1)</span> と <span class=\"chem\">(2, 1, -1)</span> はスカラー倍ではない（平行でない）。<span class=\"chem\">x</span> と <span class=\"chem\">y</span> を等置すると <span class=\"chem\">1 + lambda = 2 mu</span> かつ <span class=\"chem\">-lambda = 3 + mu</span>。辺々足すと <span class=\"chem\">1 = 3 + 3 mu => mu = -2/3, lambda = -7/3</span>。<span class=\"chem\">z</span> を調べると <span class=\"chem\">2 + (-7/3) = -1/3 != 1 - (-2/3) = 5/3</span>。よって <span class=\"chem\">L_1</span> と <span class=\"chem\">L_2</span> はねじれの位置にある。</p><p>(b) <span class=\"chem\">(1, -1, 1) \\times (2, 1, -1) = (0, 3, 3)</span> なので <span class=\"chem\">\\mathbf{n̂} = (0, 1/sqrt(2), 1/sqrt(2))</span>。<span class=\"chem\">L_1</span> 上の <span class=\"chem\">A_1(1, 0, 2)</span> と <span class=\"chem\">L_2</span> 上の <span class=\"chem\">A_2(0, 3, 1)</span> をとると <span class=\"chem\">\\mathbf{A_1A_2} = (-1, 3, -1)</span>。最短距離は <span class=\"chem\">|\\mathbf{A_1A_2} \\cdot \\mathbf{n̂}| = |0 + 3 - 1| / sqrt(2) = 2 / sqrt(2) = sqrt(2)</span>。</p>",
      markscheme: [
        // EN: R1: notes direction vectors <span class="chem">(1, -1, 1)</span> and <span class="chem">(2, 1, -1)</span> are not scalar multiples.
        "R1：方向ベクトル <span class=\"chem\">(1, -1, 1)</span> と <span class=\"chem\">(2, 1, -1)</span> がスカラー倍でないことを述べる。",
        // EN: M1: equates <span class="chem">x, y</span> coordinates and solves for <span class="chem">lambda = -7/3, mu = -2/3</span>.
        "M1：<span class=\"chem\">x, y</span> 座標を等置して <span class=\"chem\">lambda = -7/3, mu = -2/3</span> を求める。",
        // EN: A1: shows <span class="chem">z</span>-coordinates disagree (<span class="chem">-1/3 != 5/3</span>) to conclude lines are skew.
        "A1：<span class=\"chem\">z</span> 座標が一致しないこと（<span class=\"chem\">-1/3 != 5/3</span>）を示し、ねじれの位置にあると結論づける。",
        // EN: M1: computes <span class="chem">\mathbf{b_1} \times \mathbf{b_2} = (0, 3, 3)</span>.
        "M1：<span class=\"chem\">\\mathbf{b_1} \\times \\mathbf{b_2} = (0, 3, 3)</span> を計算する。",
        // EN: A1: normalizes to <span class="chem">\mathbf{n̂} = (0, 1/sqrt(2), 1/sqrt(2))</span>.
        "A1：単位化して <span class=\"chem\">\\mathbf{n̂} = (0, 1/sqrt(2), 1/sqrt(2))</span> を得る。",
        // EN: M1: forms <span class="chem">\mathbf{A_1A_2} = (-1, 3, -1)</span> and projects onto <span class="chem">\mathbf{n̂}</span> via <span class="chem">|\mathbf{A_1A_2} \cdot \mathbf{n̂}|</span>.
        "M1：<span class=\"chem\">\\mathbf{A_1A_2} = (-1, 3, -1)</span> を作り、<span class=\"chem\">|\\mathbf{A_1A_2} \\cdot \\mathbf{n̂}|</span> で <span class=\"chem\">\\mathbf{n̂}</span> へ正射影する。",
        // EN: A1: obtains <span class="chem">|\mathbf{A_1A_2} \cdot \mathbf{n̂}| = |0 + 3 - 1| / sqrt(2) = 2 / sqrt(2)</span>.
        "A1：<span class=\"chem\">|\\mathbf{A_1A_2} \\cdot \\mathbf{n̂}| = |0 + 3 - 1| / sqrt(2) = 2 / sqrt(2)</span> を得る。",
        // EN: A1: simplifies the shortest distance to <span class="chem">sqrt(2)</span>.
        "A1：最短距離を <span class=\"chem\">sqrt(2)</span> と簡単にする。",
      ],
    },

  }
});

/* Added on 2026-11-14: translations of the new questions t3-3-q019 to t3-3-q059. */
S1.i18n.register('ja', 't3-3.q', {
  questions: {

    // ── t3-3-q019 · mcq · foundation · AHL · AHL 3.12 · 2 marks
    "t3-3-q019": {
      // EN: <p>Let <span class="chem">\mathbf{v} = 2\mathbf{i} - 6\mathbf{j} + 3\mathbf{k}</span>. Which of the following is the unit vector in the same direction as <span class="chem">\mathbf{v}</span>?</p>
      stem: "<p><span class=\"chem\">\\mathbf{v} = 2\\mathbf{i} - 6\\mathbf{j} + 3\\mathbf{k}</span> とする。<span class=\"chem\">\\mathbf{v}</span> と同じ向きの単位ベクトルは次のうちどれか。</p>",
      options: [
        // EN: <span class="chem">(1/7)(2\mathbf{i} - 6\mathbf{j} + 3\mathbf{k})</span>
        "<span class=\"chem\">(1/7)(2\\mathbf{i} - 6\\mathbf{j} + 3\\mathbf{k})</span>",
        // EN: <span class="chem">(1/49)(2\mathbf{i} - 6\mathbf{j} + 3\mathbf{k})</span>
        "<span class=\"chem\">(1/49)(2\\mathbf{i} - 6\\mathbf{j} + 3\\mathbf{k})</span>",
        // EN: <span class="chem">(1/11)(2\mathbf{i} - 6\mathbf{j} + 3\mathbf{k})</span>
        "<span class=\"chem\">(1/11)(2\\mathbf{i} - 6\\mathbf{j} + 3\\mathbf{k})</span>",
        // EN: <span class="chem">-(1/7)(2\mathbf{i} - 6\mathbf{j} + 3\mathbf{k})</span>
        "<span class=\"chem\">-(1/7)(2\\mathbf{i} - 6\\mathbf{j} + 3\\mathbf{k})</span>",
      ],
      hints: [
        // EN: A unit vector in the direction of <span class="chem">\mathbf{v}</span> is <span class="chem">\mathbf{v} / |\mathbf{v}|</span>.
        "<span class=\"chem\">\\mathbf{v}</span> と同じ向きの単位ベクトルは <span class=\"chem\">\\mathbf{v} / |\\mathbf{v}|</span> です。",
        // EN: Find <span class="chem">|\mathbf{v}| = sqrt(2^2 + (-6)^2 + 3^2)</span>.
        "<span class=\"chem\">|\\mathbf{v}| = sqrt(2^2 + (-6)^2 + 3^2)</span> を求めます。",
      ],
      // EN: <p><span class="chem">|\mathbf{v}| = sqrt(4 + 36 + 9) = sqrt(49) = 7</span>, so the unit vector is <span class="chem">\mathbf{v} / 7 = (1/7)(2\mathbf{i} - 6\mathbf{j} + 3\mathbf{k})</span>.</p>
      solution: "<p><span class=\"chem\">|\\mathbf{v}| = sqrt(4 + 36 + 9) = sqrt(49) = 7</span> なので、単位ベクトルは <span class=\"chem\">\\mathbf{v} / 7 = (1/7)(2\\mathbf{i} - 6\\mathbf{j} + 3\\mathbf{k})</span> です。</p>",
      misconception: {
        // EN (option B): You divided by <span class="chem">|\mathbf{v}|^2 = 49</span> instead of by <span class="chem">|\mathbf{v}| = 7</span>. This vector has length <span class="chem">1/7</span>, not 1.
        "1": "<span class=\"chem\">|\\mathbf{v}| = 7</span> ではなく <span class=\"chem\">|\\mathbf{v}|^2 = 49</span> で割ってしまいました。このベクトルの大きさは <span class=\"chem\">1/7</span> であって、1 ではありません。",
        // EN (option C): You divided by <span class="chem">2 + 6 + 3 = 11</span>, the sum of the sizes of the components. The magnitude is <span class="chem">sqrt(2^2 + 6^2 + 3^2) = 7</span>.
        "2": "成分の大きさの和 <span class=\"chem\">2 + 6 + 3 = 11</span> で割ってしまいました。ベクトルの大きさは <span class=\"chem\">sqrt(2^2 + 6^2 + 3^2) = 7</span> です。",
        // EN (option D): This has length 1 but points the opposite way to <span class="chem">\mathbf{v}</span>; the question asks for the same direction.
        "3": "これは大きさが 1 ですが、<span class=\"chem\">\\mathbf{v}</span> と逆向きです。問題が求めているのは同じ向きです。",
      },
    },

    // ── t3-3-q020 · numeric · foundation · AHL · AHL 3.12–3.13 · 2 marks
    "t3-3-q020": {
      // EN: <p>The vectors <span class="chem">\mathbf{a} = (2, -3, p)</span> and <span class="chem">\mathbf{b} = (-6, 9, 12)</span> are parallel. Find the value of <span class="chem">p</span>.</p>
      stem: "<p>ベクトル <span class=\"chem\">\\mathbf{a} = (2, -3, p)</span> と <span class=\"chem\">\\mathbf{b} = (-6, 9, 12)</span> は平行である。<span class=\"chem\">p</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Parallel vectors are scalar multiples of each other: <span class="chem">\mathbf{b} = k\mathbf{a}</span> for some scalar <span class="chem">k</span>.
        "平行なベクトルは互いにスカラー倍です。あるスカラー <span class=\"chem\">k</span> に対して <span class=\"chem\">\\mathbf{b} = k\\mathbf{a}</span> となります。",
        // EN: Compare the <span class="chem">x</span>-components to find <span class="chem">k</span>, then use the <span class="chem">z</span>-components.
        "<span class=\"chem\">x</span> 成分を比較して <span class=\"chem\">k</span> を求め、次に <span class=\"chem\">z</span> 成分を使います。",
      ],
      // EN: <p>From the <span class="chem">x</span>- and <span class="chem">y</span>-components, <span class="chem">\mathbf{b} = -3\mathbf{a}</span> (<span class="chem">-6 = -3(2)</span>, <span class="chem">9 = -3(-3)</span>). Then <span class="chem">12 = -3p</span>, so <span class="chem">p = -4</span>.</p>
      solution: "<p><span class=\"chem\">x</span> 成分と <span class=\"chem\">y</span> 成分から <span class=\"chem\">\\mathbf{b} = -3\\mathbf{a}</span>（<span class=\"chem\">-6 = -3(2)</span>、<span class=\"chem\">9 = -3(-3)</span>）。よって <span class=\"chem\">12 = -3p</span> なので <span class=\"chem\">p = -4</span> です。</p>",
    },

    // ── t3-3-q021 · mcq · foundation · AHL · AHL 3.16–3.17 · 2 marks
    "t3-3-q021": {
      // EN: <p>A plane <span class="chem">Π</span> has vector equation <span class="chem">\mathbf{r} = (1, 0, 2) + lambda(1, 1, 0) + mu(0, 1, -1)</span>. Which of the following is a normal vector to <span class="chem">Π</span>?</p>
      stem: "<p>平面 <span class=\"chem\">Π</span> のベクトル方程式は <span class=\"chem\">\\mathbf{r} = (1, 0, 2) + lambda(1, 1, 0) + mu(0, 1, -1)</span> である。次のうち <span class=\"chem\">Π</span> の法線ベクトルはどれか。</p>",
      options: [
        // EN: <span class="chem">(-1, 1, 1)</span>
        "<span class=\"chem\">(-1, 1, 1)</span>",
        // EN: <span class="chem">(1, 1, 1)</span>
        "<span class=\"chem\">(1, 1, 1)</span>",
        // EN: <span class="chem">(1, 2, -1)</span>
        "<span class=\"chem\">(1, 2, -1)</span>",
        // EN: <span class="chem">(1, 0, 2)</span>
        "<span class=\"chem\">(1, 0, 2)</span>",
      ],
      hints: [
        // EN: A normal vector is perpendicular to both direction vectors, so use <span class="chem">(1, 1, 0) \times (0, 1, -1)</span>.
        "法線ベクトルは両方の方向ベクトルに垂直なので、<span class=\"chem\">(1, 1, 0) \\times (0, 1, -1)</span> を使います。",
        // EN: Check your answer: its scalar product with each direction vector must be 0.
        "答えを確かめましょう。各方向ベクトルとの内積がどちらも 0 でなければなりません。",
      ],
      // EN: <p><span class="chem">(1, 1, 0) \times (0, 1, -1) = ((1)(-1) - (0)(1), (0)(0) - (1)(-1), (1)(1) - (1)(0)) = (-1, 1, 1)</span>. Check: <span class="chem">(-1, 1, 1) \cdot (1, 1, 0) = 0</span> and <span class="chem">(-1, 1, 1) \cdot (0, 1, -1) = 0</span>.</p>
      solution: "<p><span class=\"chem\">(1, 1, 0) \\times (0, 1, -1) = ((1)(-1) - (0)(1), (0)(0) - (1)(-1), (1)(1) - (1)(0)) = (-1, 1, 1)</span>。確認：<span class=\"chem\">(-1, 1, 1) \\cdot (1, 1, 0) = 0</span>、<span class=\"chem\">(-1, 1, 1) \\cdot (0, 1, -1) = 0</span>。</p>",
      misconception: {
        // EN (option B): Check the first component of the cross product: <span class="chem">(1)(-1) - (0)(1) = -1</span>, not <span class="chem">+1</span>. Test your answer: <span class="chem">(1, 1, 1) \cdot (0, 1, -1) = 0</span> but <span class="chem">(1, 1, 1) \cdot (1, 1, 0) = 2 != 0</span>.
        "1": "外積の最初の成分を確認しましょう。<span class=\"chem\">(1)(-1) - (0)(1) = -1</span> であり、<span class=\"chem\">+1</span> ではありません。答えを確かめると、<span class=\"chem\">(1, 1, 1) \\cdot (0, 1, -1) = 0</span> ですが <span class=\"chem\">(1, 1, 1) \\cdot (1, 1, 0) = 2 != 0</span> です。",
        // EN (option C): You added the two direction vectors. Their sum lies <em>in</em> the plane, so it cannot be a normal.
        "2": "二つの方向ベクトルを足してしまいました。その和は平面<em>上に</em>あるので、法線ベクトルにはなり得ません。",
        // EN (option D): <span class="chem">(1, 0, 2)</span> is the position vector of a point on the plane, not a normal.
        "3": "<span class=\"chem\">(1, 0, 2)</span> は平面上の点の位置ベクトルであり、法線ベクトルではありません。",
      },
    },

    // ── t3-3-q022 · short · exam · AHL · AHL 3.12, 3.13, 3.16 · 9 marks
    "t3-3-q022": {
      // EN: <p>The points <span class="chem">A(1, 2, -1)</span>, <span class="chem">B(4, 3, 1)</span>, <span class="chem">C(6, 0, 2)</span> and <span class="chem">D(3, -1, 0)</span> are the vertices of a quadrilateral <span class="chem">ABCD</span>.</p><p>(a) Show that <span class="chem">ABCD</span> is a parallelogram. <strong>[2 marks]</strong></p><p>(b) Show that <span class="chem">ABCD</span> is a rhombus. <strong>[2 marks]</strong></p><p>(c) Verify that the diagonals <span class="chem">AC</span> and <span class="chem">BD</span> are perpendicular. <strong>[2 marks]</strong></p><p>(d) Find the exact area of <span class="chem">ABCD</span>. <strong>[3 marks]</strong></p>
      stem: "<p>点 <span class=\"chem\">A(1, 2, -1)</span>、<span class=\"chem\">B(4, 3, 1)</span>、<span class=\"chem\">C(6, 0, 2)</span>、<span class=\"chem\">D(3, -1, 0)</span> は四角形 <span class=\"chem\">ABCD</span> の頂点である。</p><p>(a) <span class=\"chem\">ABCD</span> が平行四辺形であることを示しなさい (Show that)。 <strong>[2 marks]</strong></p><p>(b) <span class=\"chem\">ABCD</span> がひし形であることを示しなさい (Show that)。 <strong>[2 marks]</strong></p><p>(c) 対角線 <span class=\"chem\">AC</span> と <span class=\"chem\">BD</span> が垂直であることを確かめなさい (Verify)。 <strong>[2 marks]</strong></p><p>(d) <span class=\"chem\">ABCD</span> の面積の正確な値を求めなさい (Find)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: A quadrilateral is a parallelogram when one pair of opposite sides is given by the <em>same</em> vector, e.g. <span class="chem">\mathbf{AB} = \mathbf{DC}</span>.
        "四角形の一組の対辺が<em>同じ</em>ベクトルで表されるとき（例：<span class=\"chem\">\\mathbf{AB} = \\mathbf{DC}</span>）、その四角形は平行四辺形です。",
        // EN: A rhombus is a parallelogram with two adjacent sides of equal length.
        "ひし形とは、隣り合う二辺の長さが等しい平行四辺形です。",
        // EN: The area of a parallelogram with adjacent sides <span class="chem">\mathbf{AB}</span> and <span class="chem">\mathbf{AD}</span> is <span class="chem">|\mathbf{AB} \times \mathbf{AD}|</span>.
        "<span class=\"chem\">\\mathbf{AB}</span> と <span class=\"chem\">\\mathbf{AD}</span> を隣り合う辺とする平行四辺形の面積は <span class=\"chem\">|\\mathbf{AB} \\times \\mathbf{AD}|</span> です。",
      ],
      // EN: <p>(a) <span class="chem">\mathbf{AB} = (3, 1, 2)</span> and <span class="chem">\mathbf{DC} = (6 - 3, 0 + 1, 2 - 0) = (3, 1, 2)</span>. Since <span class="chem">\mathbf{AB} = \mathbf{DC}</span>, the sides <span class="chem">AB</span> and <span class="chem">DC</span> are parallel and equal in length, so <span class="chem">ABCD</span> is a parallelogram.</p><p>(b) <span class="chem">\mathbf{AD} = (2, -3, 1)</span>. <span class="chem">|\mathbf{AB}| = sqrt(9 + 1 + 4) = sqrt(14)</span> and <span class="chem">|\mathbf{AD}| = sqrt(4 + 9 + 1) = sqrt(14)</span>. A parallelogram with two adjacent sides equal is a rhombus.</p><p>(c) <span class="chem">\mathbf{AC} = (5, -2, 3)</span> and <span class="chem">\mathbf{BD} = (-1, -4, -1)</span>, so <span class="chem">\mathbf{AC} \cdot \mathbf{BD} = -5 + 8 - 3 = 0</span>: the diagonals are perpendicular.</p><p>(d) <span class="chem">\mathbf{AB} \times \mathbf{AD} = ((1)(1) - (2)(-3), (2)(2) - (3)(1), (3)(-3) - (1)(2)) = (7, 1, -11)</span>. Area <span class="chem">= |\mathbf{AB} \times \mathbf{AD}| = sqrt(49 + 1 + 121) = sqrt(171) = 3 sqrt(19)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">\\mathbf{AB} = (3, 1, 2)</span>、<span class=\"chem\">\\mathbf{DC} = (6 - 3, 0 + 1, 2 - 0) = (3, 1, 2)</span>。<span class=\"chem\">\\mathbf{AB} = \\mathbf{DC}</span> なので、辺 <span class=\"chem\">AB</span> と <span class=\"chem\">DC</span> は平行で長さが等しく、<span class=\"chem\">ABCD</span> は平行四辺形である。</p><p>(b) <span class=\"chem\">\\mathbf{AD} = (2, -3, 1)</span>。<span class=\"chem\">|\\mathbf{AB}| = sqrt(9 + 1 + 4) = sqrt(14)</span>、<span class=\"chem\">|\\mathbf{AD}| = sqrt(4 + 9 + 1) = sqrt(14)</span>。隣り合う二辺が等しい平行四辺形はひし形である。</p><p>(c) <span class=\"chem\">\\mathbf{AC} = (5, -2, 3)</span>、<span class=\"chem\">\\mathbf{BD} = (-1, -4, -1)</span> より <span class=\"chem\">\\mathbf{AC} \\cdot \\mathbf{BD} = -5 + 8 - 3 = 0</span>。よって対角線は垂直である。</p><p>(d) <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AD} = ((1)(1) - (2)(-3), (2)(2) - (3)(1), (3)(-3) - (1)(2)) = (7, 1, -11)</span>。面積は <span class=\"chem\">= |\\mathbf{AB} \\times \\mathbf{AD}| = sqrt(49 + 1 + 121) = sqrt(171) = 3 sqrt(19)</span>。</p>",
      markscheme: [
        // EN: M1: finds <span class="chem">\mathbf{AB} = (3, 1, 2)</span> and <span class="chem">\mathbf{DC} = (3, 1, 2)</span> (or <span class="chem">\mathbf{AD}</span> and <span class="chem">\mathbf{BC}</span>).
        "M1：<span class=\"chem\">\\mathbf{AB} = (3, 1, 2)</span> と <span class=\"chem\">\\mathbf{DC} = (3, 1, 2)</span>（または <span class=\"chem\">\\mathbf{AD}</span> と <span class=\"chem\">\\mathbf{BC}</span>）を求める。",
        // EN: R1: states that a pair of opposite sides is equal and parallel, so <span class="chem">ABCD</span> is a parallelogram (AG).
        "R1：一組の対辺が等しく平行であることを述べ、<span class=\"chem\">ABCD</span> は平行四辺形であるとする (AG)。",
        // EN: A1: <span class="chem">|\mathbf{AB}| = sqrt(14)</span> and <span class="chem">|\mathbf{AD}| = sqrt(14)</span>.
        "A1：<span class=\"chem\">|\\mathbf{AB}| = sqrt(14)</span>、<span class=\"chem\">|\\mathbf{AD}| = sqrt(14)</span>。",
        // EN: R1: adjacent sides of the parallelogram are equal, so it is a rhombus (AG).
        "R1：平行四辺形の隣り合う辺が等しいので、ひし形である (AG)。",
        // EN: M1: finds <span class="chem">\mathbf{AC} = (5, -2, 3)</span> and <span class="chem">\mathbf{BD} = (-1, -4, -1)</span> and forms their scalar product.
        "M1：<span class=\"chem\">\\mathbf{AC} = (5, -2, 3)</span> と <span class=\"chem\">\\mathbf{BD} = (-1, -4, -1)</span> を求め、それらの内積をとる。",
        // EN: A1: <span class="chem">\mathbf{AC} \cdot \mathbf{BD} = -5 + 8 - 3 = 0</span>, so the diagonals are perpendicular (AG).
        "A1：<span class=\"chem\">\\mathbf{AC} \\cdot \\mathbf{BD} = -5 + 8 - 3 = 0</span> なので、対角線は垂直である (AG)。",
        // EN: M1: uses area <span class="chem">= |\mathbf{AB} \times \mathbf{AD}|</span> (or <span class="chem">(1/2)|\mathbf{AC}||\mathbf{BD}|</span>).
        "M1：面積 <span class=\"chem\">= |\\mathbf{AB} \\times \\mathbf{AD}|</span>（または <span class=\"chem\">(1/2)|\\mathbf{AC}||\\mathbf{BD}|</span>）を用いる。",
        // EN: A1: <span class="chem">\mathbf{AB} \times \mathbf{AD} = (7, 1, -11)</span> (or <span class="chem">|\mathbf{AC}| = sqrt(38)</span>, <span class="chem">|\mathbf{BD}| = sqrt(18)</span>).
        "A1：<span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AD} = (7, 1, -11)</span>（または <span class=\"chem\">|\\mathbf{AC}| = sqrt(38)</span>、<span class=\"chem\">|\\mathbf{BD}| = sqrt(18)</span>）。",
        // EN: A1: area <span class="chem">= sqrt(171) = 3 sqrt(19)</span>.
        "A1：面積 <span class=\"chem\">= sqrt(171) = 3 sqrt(19)</span>。",
      ],
    },

    // ── t3-3-q023 · short · exam · AHL · AHL 3.12–3.13 · 4 marks
    "t3-3-q023": {
      // EN: <p>The points <span class="chem">A</span> and <span class="chem">B</span> are the ends of a diameter of a circle with centre <span class="chem">O</span>, and <span class="chem">P</span> is any other point on the circle. Let <span class="chem">\mathbf{OA} = \mathbf{a}</span> and <span class="chem">\mathbf{OP} = \mathbf{p}</span>.</p><p>Use vectors to prove that angle <span class="chem">APB</span> is a right angle. <strong>[4 marks]</strong></p>
      stem: "<p>点 <span class=\"chem\">A</span> と <span class=\"chem\">B</span> は中心 <span class=\"chem\">O</span> の円の直径の両端であり、<span class=\"chem\">P</span> は円周上の他の任意の点である。<span class=\"chem\">\\mathbf{OA} = \\mathbf{a}</span>、<span class=\"chem\">\\mathbf{OP} = \\mathbf{p}</span> とする。</p><p>ベクトルを用いて、角 <span class=\"chem\">APB</span> が直角であることを証明しなさい (prove)。 <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: "prove the angle is a right angle" means "show that the scalar product of <span class="chem">\mathbf{PA}</span> and <span class="chem">\mathbf{PB}</span> is zero".
        "解読：「角が直角であることを証明する」とは「<span class=\"chem\">\\mathbf{PA}</span> と <span class=\"chem\">\\mathbf{PB}</span> の内積がゼロであることを示す」ということです。",
        // EN: Write <span class="chem">\mathbf{OB}</span> in terms of <span class="chem">\mathbf{a}</span>, and use the fact that every radius has the same length.
        "<span class=\"chem\">\\mathbf{OB}</span> を <span class=\"chem\">\\mathbf{a}</span> で表し、どの半径も長さが等しいことを使います。",
        // EN: Expand <span class="chem">(\mathbf{a} - \mathbf{p}) \cdot (-\mathbf{a} - \mathbf{p})</span> like a bracket; remember <span class="chem">\mathbf{a} \cdot \mathbf{a} = |\mathbf{a}|^2</span>.
        "<span class=\"chem\">(\\mathbf{a} - \\mathbf{p}) \\cdot (-\\mathbf{a} - \\mathbf{p})</span> をかっこの展開と同じように展開します。<span class=\"chem\">\\mathbf{a} \\cdot \\mathbf{a} = |\\mathbf{a}|^2</span> であることを思い出しましょう。",
      ],
      // EN: <p>Since <span class="chem">AB</span> is a diameter through <span class="chem">O</span>, <span class="chem">\mathbf{OB} = -\mathbf{a}</span>. All radii are equal, so <span class="chem">|\mathbf{p}| = |\mathbf{a}|</span>.</p><p><span class="chem">\mathbf{PA} = \mathbf{a} - \mathbf{p}</span> and <span class="chem">\mathbf{PB} = -\mathbf{a} - \mathbf{p}</span>.</p><p><span class="chem">\mathbf{PA} \cdot \mathbf{PB} = (\mathbf{a} - \mathbf{p}) \cdot (-\mathbf{a} - \mathbf{p}) = -\mathbf{a} \cdot \mathbf{a} - \mathbf{a} \cdot \mathbf{p} + \mathbf{p} \cdot \mathbf{a} + \mathbf{p} \cdot \mathbf{p} = |\mathbf{p}|^2 - |\mathbf{a}|^2 = 0</span>.</p><p>Both vectors are non-zero (P is not A or B), so <span class="chem">\mathbf{PA}</span> is perpendicular to <span class="chem">\mathbf{PB}</span> and angle <span class="chem">APB = 90°</span>.</p>
      answer: "<p><span class=\"chem\">AB</span> は <span class=\"chem\">O</span> を通る直径なので <span class=\"chem\">\\mathbf{OB} = -\\mathbf{a}</span>。半径はすべて等しいので <span class=\"chem\">|\\mathbf{p}| = |\\mathbf{a}|</span>。</p><p><span class=\"chem\">\\mathbf{PA} = \\mathbf{a} - \\mathbf{p}</span>、<span class=\"chem\">\\mathbf{PB} = -\\mathbf{a} - \\mathbf{p}</span>。</p><p><span class=\"chem\">\\mathbf{PA} \\cdot \\mathbf{PB} = (\\mathbf{a} - \\mathbf{p}) \\cdot (-\\mathbf{a} - \\mathbf{p}) = -\\mathbf{a} \\cdot \\mathbf{a} - \\mathbf{a} \\cdot \\mathbf{p} + \\mathbf{p} \\cdot \\mathbf{a} + \\mathbf{p} \\cdot \\mathbf{p} = |\\mathbf{p}|^2 - |\\mathbf{a}|^2 = 0</span>。</p><p>どちらのベクトルも零ベクトルではない（P は A でも B でもない）ので、<span class=\"chem\">\\mathbf{PA}</span> は <span class=\"chem\">\\mathbf{PB}</span> に垂直であり、角 <span class=\"chem\">APB = 90°</span> である。</p>",
      markscheme: [
        // EN: A1: writes <span class="chem">\mathbf{OB} = -\mathbf{a}</span> and <span class="chem">|\mathbf{p}| = |\mathbf{a}|</span> (equal radii).
        "A1：<span class=\"chem\">\\mathbf{OB} = -\\mathbf{a}</span> と <span class=\"chem\">|\\mathbf{p}| = |\\mathbf{a}|</span>（半径が等しい）を書く。",
        // EN: A1: <span class="chem">\mathbf{PA} = \mathbf{a} - \mathbf{p}</span> and <span class="chem">\mathbf{PB} = -\mathbf{a} - \mathbf{p}</span>.
        "A1：<span class=\"chem\">\\mathbf{PA} = \\mathbf{a} - \\mathbf{p}</span>、<span class=\"chem\">\\mathbf{PB} = -\\mathbf{a} - \\mathbf{p}</span>。",
        // EN: M1: expands <span class="chem">\mathbf{PA} \cdot \mathbf{PB}</span>, using <span class="chem">\mathbf{a} \cdot \mathbf{p} = \mathbf{p} \cdot \mathbf{a}</span>, to get <span class="chem">|\mathbf{p}|^2 - |\mathbf{a}|^2</span>.
        "M1：<span class=\"chem\">\\mathbf{a} \\cdot \\mathbf{p} = \\mathbf{p} \\cdot \\mathbf{a}</span> を用いて <span class=\"chem\">\\mathbf{PA} \\cdot \\mathbf{PB}</span> を展開し、<span class=\"chem\">|\\mathbf{p}|^2 - |\\mathbf{a}|^2</span> を得る。",
        // EN: R1: this is 0, so the (non-zero) vectors are perpendicular and angle <span class="chem">APB</span> is a right angle (AG).
        "R1：これは 0 なので、（零でない）二つのベクトルは垂直であり、角 <span class=\"chem\">APB</span> は直角である (AG)。",
      ],
    },

    // ── t3-3-q024 · numeric · exam · AHL · AHL 3.14 · 5 marks
    "t3-3-q024": {
      // EN: <p>The line <span class="chem">L_1</span> has Cartesian equations <span class="chem">x - 3 = (y + 2)/(-1)</span>, <span class="chem">z = 4</span>. The line <span class="chem">L_2</span> has Cartesian equations <span class="chem">1 - x = z + 5</span>, <span class="chem">y = 2</span>.</p><p>Find the acute angle between <span class="chem">L_1</span> and <span class="chem">L_2</span>, in degrees.</p>
      stem: "<p>直線 <span class=\"chem\">L_1</span> の直交座標方程式は <span class=\"chem\">x - 3 = (y + 2)/(-1)</span>、<span class=\"chem\">z = 4</span> である。直線 <span class=\"chem\">L_2</span> の直交座標方程式は <span class=\"chem\">1 - x = z + 5</span>、<span class=\"chem\">y = 2</span> である。</p><p><span class=\"chem\">L_1</span> と <span class=\"chem\">L_2</span> のなす鋭角を度数法で求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: the angle between two lines is the angle between their direction vectors, so first read a direction vector off each Cartesian form. A coordinate that is constant (such as <span class="chem">z = 4</span>) has direction component 0.
        "解読：2 直線のなす角は方向ベクトルのなす角なので、まずそれぞれの直交座標方程式から方向ベクトルを読み取ります。一定の座標（<span class=\"chem\">z = 4</span> など）の方向成分は 0 です。",
        // EN: Rewrite <span class="chem">1 - x = z + 5</span> as <span class="chem">(x - 1)/(-1) = (z + 5)/1</span>. This gives <span class="chem">\mathbf{b_2} = (-1, 0, 1)</span>, and <span class="chem">\mathbf{b_1} = (1, -1, 0)</span>.
        "<span class=\"chem\">1 - x = z + 5</span> を <span class=\"chem\">(x - 1)/(-1) = (z + 5)/1</span> と書き直します。これより <span class=\"chem\">\\mathbf{b_2} = (-1, 0, 1)</span>、また <span class=\"chem\">\\mathbf{b_1} = (1, -1, 0)</span> です。",
        // EN: Use <span class="chem">cos theta = |\mathbf{b_1} \cdot \mathbf{b_2}| / (|\mathbf{b_1}||\mathbf{b_2}|)</span>. The modulus makes the angle acute.
        "<span class=\"chem\">cos theta = |\\mathbf{b_1} \\cdot \\mathbf{b_2}| / (|\\mathbf{b_1}||\\mathbf{b_2}|)</span> を使います。絶対値をとるので、角は鋭角になります。",
      ],
      // EN: <p><strong>Decode:</strong> the angle between the lines is the angle between their direction vectors, taken acute.</p><p><span class="chem">L_1</span>: <span class="chem">(x - 3)/1 = (y + 2)/(-1)</span> with <span class="chem">z</span> fixed, so <span class="chem">\mathbf{b_1} = (1, -1, 0)</span>. <span class="chem">L_2</span>: <span class="chem">(x - 1)/(-1) = (z + 5)/1</span> with <span class="chem">y</span> fixed, so <span class="chem">\mathbf{b_2} = (-1, 0, 1)</span>.</p><p><span class="chem">\mathbf{b_1} \cdot \mathbf{b_2} = -1</span> and <span class="chem">|\mathbf{b_1}| = |\mathbf{b_2}| = sqrt(2)</span>, so the angle between the vectors satisfies <span class="chem">cos theta = -1/2</span>, i.e. <span class="chem">120°</span>. The acute angle between the lines is <span class="chem">180° - 120° = 60°</span>.</p>
      solution: "<p><strong>解読：</strong>2 直線のなす角は方向ベクトルのなす角であり、鋭角をとる。</p><p><span class=\"chem\">L_1</span>：<span class=\"chem\">(x - 3)/1 = (y + 2)/(-1)</span> で <span class=\"chem\">z</span> は一定なので <span class=\"chem\">\\mathbf{b_1} = (1, -1, 0)</span>。<span class=\"chem\">L_2</span>：<span class=\"chem\">(x - 1)/(-1) = (z + 5)/1</span> で <span class=\"chem\">y</span> は一定なので <span class=\"chem\">\\mathbf{b_2} = (-1, 0, 1)</span>。</p><p><span class=\"chem\">\\mathbf{b_1} \\cdot \\mathbf{b_2} = -1</span>、<span class=\"chem\">|\\mathbf{b_1}| = |\\mathbf{b_2}| = sqrt(2)</span> なので、ベクトルのなす角は <span class=\"chem\">cos theta = -1/2</span>、すなわち <span class=\"chem\">120°</span> を満たす。2 直線のなす鋭角は <span class=\"chem\">180° - 120° = 60°</span> である。</p>",
    },

    // ── t3-3-q025 · short · exam · AHL · AHL 3.14, 3.15, 3.17 · 12 marks
    "t3-3-q025": {
      // EN: <p>The lines <span class="chem">L_1</span> and <span class="chem">L_2</span> have equations <span class="chem">L_1: \mathbf{r} = (1, -3, 4) + lambda(1, 2, -1)</span> and <span class="chem">L_2: \mathbf{r} = (-1, 3, 0) + mu(2, -1, 1)</span>.</p><p>(a) Show that <span class="chem">L_1</span> and <span class="chem">L_2</span> intersect, and find the coordinates of their point of intersection <span class="chem">P</span>. <strong>[5 marks]</strong></p><p>(b) Find the acute angle between <span class="chem">L_1</span> and <span class="chem">L_2</span>, giving your answer in the form <span class="chem">arccos(k)</span> where <span class="chem">k \in \mathbb{Q}</span>. <strong>[3 marks]</strong></p><p>(c) Find the Cartesian equation of the plane that contains both lines. <strong>[4 marks]</strong></p>
      stem: "<p>直線 <span class=\"chem\">L_1</span> と <span class=\"chem\">L_2</span> の方程式は <span class=\"chem\">L_1: \\mathbf{r} = (1, -3, 4) + lambda(1, 2, -1)</span>、<span class=\"chem\">L_2: \\mathbf{r} = (-1, 3, 0) + mu(2, -1, 1)</span> である。</p><p>(a) <span class=\"chem\">L_1</span> と <span class=\"chem\">L_2</span> が交わることを示し (Show that)、交点 <span class=\"chem\">P</span> の座標を求めなさい (find)。 <strong>[5 marks]</strong></p><p>(b) <span class=\"chem\">L_1</span> と <span class=\"chem\">L_2</span> のなす鋭角を求め (Find)、<span class=\"chem\">k \\in \\mathbb{Q}</span> として <span class=\"chem\">arccos(k)</span> の形で答えなさい。 <strong>[3 marks]</strong></p><p>(c) 両方の直線を含む平面の直交座標方程式を求めなさい (Find)。 <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Use different parameters for the two lines. Solve two equations, then check the third.
        "2 直線には異なる媒介変数を使います。二つの方程式を解き、残りの一つで確かめます。",
        // EN: For the acute angle, take the modulus of the scalar product.
        "鋭角を求めるには、内積の絶対値をとります。",
        // EN: Two intersecting lines lie in one plane. Its normal is perpendicular to both direction vectors.
        "交わる 2 直線は一つの平面上にあります。その法線ベクトルは両方の方向ベクトルに垂直です。",
      ],
      // EN: <p>(a) Equate components: <span class="chem">1 + lambda = -1 + 2mu</span>, <span class="chem">-3 + 2lambda = 3 - mu</span>, <span class="chem">4 - lambda = mu</span>. Substituting <span class="chem">mu = 4 - lambda</span> into the first equation: <span class="chem">1 + lambda = 7 - 2lambda => lambda = 2</span>, <span class="chem">mu = 2</span>. Check the second equation: <span class="chem">-3 + 4 = 1</span> and <span class="chem">3 - 2 = 1</span>. All three equations hold, so the lines intersect at <span class="chem">P(3, 1, 2)</span>.</p><p>(b) <span class="chem">(1, 2, -1) \cdot (2, -1, 1) = 2 - 2 - 1 = -1</span>, and both directions have magnitude <span class="chem">sqrt(6)</span>. So <span class="chem">cos theta = |-1| / 6 = 1/6</span> and the acute angle is <span class="chem">arccos(1/6)</span>.</p><p>(c) <span class="chem">\mathbf{n} = (1, 2, -1) \times (2, -1, 1) = ((2)(1) - (-1)(-1), (-1)(2) - (1)(1), (1)(-1) - (2)(2)) = (1, -3, -5)</span>. Using <span class="chem">P(3, 1, 2)</span>: <span class="chem">3 - 3 - 10 = -10</span>, so the plane is <span class="chem">x - 3y - 5z = -10</span>.</p>
      answer: "<p>(a) 成分を等置すると <span class=\"chem\">1 + lambda = -1 + 2mu</span>、<span class=\"chem\">-3 + 2lambda = 3 - mu</span>、<span class=\"chem\">4 - lambda = mu</span>。<span class=\"chem\">mu = 4 - lambda</span> を最初の式に代入すると <span class=\"chem\">1 + lambda = 7 - 2lambda => lambda = 2</span>、<span class=\"chem\">mu = 2</span>。2 番目の式を確かめると <span class=\"chem\">-3 + 4 = 1</span>、<span class=\"chem\">3 - 2 = 1</span>。三つの式がすべて成り立つので、2 直線は <span class=\"chem\">P(3, 1, 2)</span> で交わる。</p><p>(b) <span class=\"chem\">(1, 2, -1) \\cdot (2, -1, 1) = 2 - 2 - 1 = -1</span> であり、両方の方向ベクトルの大きさは <span class=\"chem\">sqrt(6)</span>。よって <span class=\"chem\">cos theta = |-1| / 6 = 1/6</span> で、鋭角は <span class=\"chem\">arccos(1/6)</span> である。</p><p>(c) <span class=\"chem\">\\mathbf{n} = (1, 2, -1) \\times (2, -1, 1) = ((2)(1) - (-1)(-1), (-1)(2) - (1)(1), (1)(-1) - (2)(2)) = (1, -3, -5)</span>。<span class=\"chem\">P(3, 1, 2)</span> を用いると <span class=\"chem\">3 - 3 - 10 = -10</span> なので、平面は <span class=\"chem\">x - 3y - 5z = -10</span> である。</p>",
      markscheme: [
        // EN: M1: equates the three components using different parameters <span class="chem">lambda</span> and <span class="chem">mu</span>.
        "M1：異なる媒介変数 <span class=\"chem\">lambda</span> と <span class=\"chem\">mu</span> を用いて三つの成分を等置する。",
        // EN: M1: solves two of the equations simultaneously.
        "M1：二つの方程式を連立して解く。",
        // EN: A1: <span class="chem">lambda = 2</span>, <span class="chem">mu = 2</span>.
        "A1：<span class=\"chem\">lambda = 2</span>、<span class=\"chem\">mu = 2</span>。",
        // EN: R1: verifies that the third equation is also satisfied, so the lines intersect.
        "R1：残りの方程式も満たされることを確かめ、2 直線が交わるとする。",
        // EN: A1: <span class="chem">P(3, 1, 2)</span>.
        "A1：<span class=\"chem\">P(3, 1, 2)</span>。",
        // EN: M1: uses the scalar product of the two direction vectors.
        "M1：二つの方向ベクトルの内積を用いる。",
        // EN: A1: scalar product <span class="chem">-1</span> and magnitudes <span class="chem">sqrt(6)</span>, <span class="chem">sqrt(6)</span>.
        "A1：内積 <span class=\"chem\">-1</span>、大きさ <span class=\"chem\">sqrt(6)</span>、<span class=\"chem\">sqrt(6)</span>。",
        // EN: A1: acute angle <span class="chem">arccos(1/6)</span> (the modulus is taken, so not <span class="chem">arccos(-1/6)</span>).
        "A1：鋭角 <span class=\"chem\">arccos(1/6)</span>（絶対値をとるので <span class=\"chem\">arccos(-1/6)</span> ではない）。",
        // EN: M1: finds a normal as the vector product of the two direction vectors.
        "M1：二つの方向ベクトルの外積として法線ベクトルを求める。",
        // EN: A1: <span class="chem">\mathbf{n} = (1, -3, -5)</span> (or any non-zero multiple).
        "A1：<span class=\"chem\">\\mathbf{n} = (1, -3, -5)</span>（または零でない任意の実数倍）。",
        // EN: M1: substitutes a point on either line (e.g. <span class="chem">P</span>) to find the constant.
        "M1：いずれかの直線上の点（例：<span class=\"chem\">P</span>）を代入して定数を求める。",
        // EN: A1: <span class="chem">x - 3y - 5z = -10</span> (or equivalent).
        "A1：<span class=\"chem\">x - 3y - 5z = -10</span>（または同値な式）。",
      ],
    },

    // ── t3-3-q026 · numeric · exam · AHL · AHL 3.16–3.17 · 4 marks
    "t3-3-q026": {
      // EN: <p>The plane <span class="chem">Π</span> has vector equation <span class="chem">\mathbf{r} = (2, 1, -1) + lambda(1, 0, 3) + mu(-1, 2, 1)</span>, where <span class="chem">lambda, mu \in \mathbb{R}</span>.</p><p>The plane <span class="chem">Π</span> meets the <span class="chem">z</span>-axis at the point <span class="chem">(0, 0, c)</span>. Find the value of <span class="chem">c</span>.</p>
      stem: "<p>平面 <span class=\"chem\">Π</span> のベクトル方程式は <span class=\"chem\">\\mathbf{r} = (2, 1, -1) + lambda(1, 0, 3) + mu(-1, 2, 1)</span> である。ただし <span class=\"chem\">lambda, mu \\in \\mathbb{R}</span> とする。</p><p>平面 <span class=\"chem\">Π</span> は <span class=\"chem\">z</span> 軸と点 <span class=\"chem\">(0, 0, c)</span> で交わる。<span class=\"chem\">c</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: the vector form is hard to use directly. Convert it to Cartesian form <span class="chem">ax + by + cz = d</span>, then put <span class="chem">x = y = 0</span>.
        "解読：ベクトル形式のままでは使いにくいので、直交座標方程式 <span class=\"chem\">ax + by + cz = d</span> に直してから <span class=\"chem\">x = y = 0</span> を代入します。",
        // EN: A normal is <span class="chem">(1, 0, 3) \times (-1, 2, 1)</span>.
        "法線ベクトルは <span class=\"chem\">(1, 0, 3) \\times (-1, 2, 1)</span> です。",
        // EN: Simplify the normal to <span class="chem">(3, 2, -1)</span> and substitute the point <span class="chem">(2, 1, -1)</span> to find <span class="chem">d</span>.
        "法線ベクトルを <span class=\"chem\">(3, 2, -1)</span> に簡単にし、点 <span class=\"chem\">(2, 1, -1)</span> を代入して <span class=\"chem\">d</span> を求めます。",
      ],
      // EN: <p><span class="chem">(1, 0, 3) \times (-1, 2, 1) = ((0)(1) - (3)(2), (3)(-1) - (1)(1), (1)(2) - (0)(-1)) = (-6, -4, 2)</span>, so take <span class="chem">\mathbf{n} = (3, 2, -1)</span>. Then <span class="chem">\mathbf{r} \cdot \mathbf{n} = (2, 1, -1) \cdot (3, 2, -1) = 6 + 2 + 1 = 9</span>, giving <span class="chem">3x + 2y - z = 9</span>. On the <span class="chem">z</span>-axis <span class="chem">x = y = 0</span>, so <span class="chem">-z = 9</span> and <span class="chem">c = -9</span>.</p>
      solution: "<p><span class=\"chem\">(1, 0, 3) \\times (-1, 2, 1) = ((0)(1) - (3)(2), (3)(-1) - (1)(1), (1)(2) - (0)(-1)) = (-6, -4, 2)</span> なので、<span class=\"chem\">\\mathbf{n} = (3, 2, -1)</span> をとる。すると <span class=\"chem\">\\mathbf{r} \\cdot \\mathbf{n} = (2, 1, -1) \\cdot (3, 2, -1) = 6 + 2 + 1 = 9</span> となり、<span class=\"chem\">3x + 2y - z = 9</span> を得る。<span class=\"chem\">z</span> 軸上では <span class=\"chem\">x = y = 0</span> なので、<span class=\"chem\">-z = 9</span>、よって <span class=\"chem\">c = -9</span> である。</p>",
    },

    // ── t3-3-q027 · numeric · exam · AHL · AHL 3.17–3.18 · 5 marks
    "t3-3-q027": {
      // EN: <p>Find the exact shortest distance from the point <span class="chem">P(3, -2, 5)</span> to the plane <span class="chem">2x - y + 2z = 4</span>.</p>
      stem: "<p>点 <span class=\"chem\">P(3, -2, 5)</span> から平面 <span class=\"chem\">2x - y + 2z = 4</span> までの最短距離の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: The shortest distance is measured along the normal. The line through <span class="chem">P</span> perpendicular to the plane is <span class="chem">\mathbf{r} = (3, -2, 5) + s(2, -1, 2)</span>.
        "最短距離は法線に沿って測ります。<span class=\"chem\">P</span> を通り平面に垂直な直線は <span class=\"chem\">\\mathbf{r} = (3, -2, 5) + s(2, -1, 2)</span> です。",
        // EN: Substitute this line into the plane equation to find <span class="chem">s</span> at the foot of the perpendicular.
        "この直線を平面の方程式に代入して、垂線の足における <span class=\"chem\">s</span> を求めます。",
        // EN: The distance is <span class="chem">|s| × |(2, -1, 2)| = 3|s|</span>.
        "距離は <span class=\"chem\">|s| × |(2, -1, 2)| = 3|s|</span> です。",
      ],
      // EN: <p>Substitute <span class="chem">(3 + 2s, -2 - s, 5 + 2s)</span> into <span class="chem">2x - y + 2z = 4</span>: <span class="chem">6 + 4s + 2 + s + 10 + 4s = 4 => 18 + 9s = 4 => s = -14/9</span>. The distance is <span class="chem">|s| × |(2, -1, 2)| = (14/9)(3) = 14/3</span>.</p>
      solution: "<p><span class=\"chem\">(3 + 2s, -2 - s, 5 + 2s)</span> を <span class=\"chem\">2x - y + 2z = 4</span> に代入すると <span class=\"chem\">6 + 4s + 2 + s + 10 + 4s = 4 => 18 + 9s = 4 => s = -14/9</span>。距離は <span class=\"chem\">|s| × |(2, -1, 2)| = (14/9)(3) = 14/3</span> です。</p>",
    },

    // ── t3-3-q028 · short · exam · AHL · AHL 3.16, 3.18 · 9 marks
    "t3-3-q028": {
      // EN: <p>The planes <span class="chem">Π_1: x + 2y - z = 3</span> and <span class="chem">Π_2: 3x - y + 2z = 2</span> meet in the line <span class="chem">L</span>.</p><p>(a) Find a vector equation of <span class="chem">L</span>. <strong>[5 marks]</strong></p><p>(b) Find the coordinates of the point where <span class="chem">L</span> meets the plane <span class="chem">Π_3: x - y + z = 2</span>. <strong>[3 marks]</strong></p><p>(c) Hence write down the solution of the system of equations formed by <span class="chem">Π_1</span>, <span class="chem">Π_2</span> and <span class="chem">Π_3</span>. <strong>[1 mark]</strong></p>
      stem: "<p>平面 <span class=\"chem\">Π_1: x + 2y - z = 3</span> と <span class=\"chem\">Π_2: 3x - y + 2z = 2</span> は直線 <span class=\"chem\">L</span> で交わる。</p><p>(a) <span class=\"chem\">L</span> のベクトル方程式を一つ求めなさい (Find)。 <strong>[5 marks]</strong></p><p>(b) <span class=\"chem\">L</span> と平面 <span class=\"chem\">Π_3: x - y + z = 2</span> の交点の座標を求めなさい (Find)。 <strong>[3 marks]</strong></p><p>(c) これを用いて (Hence)、<span class=\"chem\">Π_1</span>、<span class=\"chem\">Π_2</span>、<span class=\"chem\">Π_3</span> からなる連立方程式の解を書きなさい (write down)。 <strong>[1 mark]</strong></p>",
      hints: [
        // EN: The line of intersection is perpendicular to both normal vectors.
        "交線は両方の法線ベクトルに垂直です。",
        // EN: To find a point on <span class="chem">L</span>, choose a convenient value for one coordinate and solve for the other two.
        "<span class=\"chem\">L</span> 上の点を求めるには、一つの座標に都合のよい値を選び、残りの二つの座標を解きます。",
        // EN: A point on all three planes is a solution of all three equations.
        "三つの平面すべての上にある点は、三つの方程式すべての解です。",
      ],
      // EN: <p>(a) The direction of <span class="chem">L</span> is perpendicular to both normals: <span class="chem">(1, 2, -1) \times (3, -1, 2) = ((2)(2) - (-1)(-1), (-1)(3) - (1)(2), (1)(-1) - (2)(3)) = (3, -5, -7)</span>. Put <span class="chem">z = 0</span>: <span class="chem">x + 2y = 3</span> and <span class="chem">3x - y = 2</span>, so <span class="chem">x = 1, y = 1</span>. Hence <span class="chem">L: \mathbf{r} = (1, 1, 0) + t(3, -5, -7)</span>.</p><p>(b) Substitute <span class="chem">(1 + 3t, 1 - 5t, -7t)</span> into <span class="chem">Π_3</span>: <span class="chem">1 + 3t - 1 + 5t - 7t = 2 => t = 2</span>. The point is <span class="chem">(7, -9, -14)</span>.</p><p>(c) The three planes meet at a single point, so the unique solution is <span class="chem">x = 7, y = -9, z = -14</span>.</p>
      answer: "<p>(a) <span class=\"chem\">L</span> の方向は両方の法線ベクトルに垂直である：<span class=\"chem\">(1, 2, -1) \\times (3, -1, 2) = ((2)(2) - (-1)(-1), (-1)(3) - (1)(2), (1)(-1) - (2)(3)) = (3, -5, -7)</span>。<span class=\"chem\">z = 0</span> とおくと <span class=\"chem\">x + 2y = 3</span>、<span class=\"chem\">3x - y = 2</span> なので <span class=\"chem\">x = 1, y = 1</span>。よって <span class=\"chem\">L: \\mathbf{r} = (1, 1, 0) + t(3, -5, -7)</span>。</p><p>(b) <span class=\"chem\">(1 + 3t, 1 - 5t, -7t)</span> を <span class=\"chem\">Π_3</span> に代入すると <span class=\"chem\">1 + 3t - 1 + 5t - 7t = 2 => t = 2</span>。その点は <span class=\"chem\">(7, -9, -14)</span> である。</p><p>(c) 三つの平面はただ一点で交わるので、ただ一つの解は <span class=\"chem\">x = 7, y = -9, z = -14</span> である。</p>",
      markscheme: [
        // EN: M1: finds the direction as <span class="chem">\mathbf{n_1} \times \mathbf{n_2}</span> (or eliminates a variable).
        "M1：方向を <span class=\"chem\">\\mathbf{n_1} \\times \\mathbf{n_2}</span> として求める（または変数を一つ消去する）。",
        // EN: A1: direction <span class="chem">(3, -5, -7)</span> (or any non-zero multiple).
        "A1：方向 <span class=\"chem\">(3, -5, -7)</span>（または零でない任意の実数倍）。",
        // EN: M1: sets one coordinate (e.g. <span class="chem">z = 0</span>) and solves the two remaining equations.
        "M1：一つの座標を定め（例：<span class=\"chem\">z = 0</span>）、残りの二つの方程式を解く。",
        // EN: A1: a point on <span class="chem">L</span>, e.g. <span class="chem">(1, 1, 0)</span>.
        "A1：<span class=\"chem\">L</span> 上の点、例えば <span class=\"chem\">(1, 1, 0)</span>。",
        // EN: A1: <span class="chem">\mathbf{r} = (1, 1, 0) + t(3, -5, -7)</span> (must have <span class="chem">\mathbf{r} =</span>).
        "A1：<span class=\"chem\">\\mathbf{r} = (1, 1, 0) + t(3, -5, -7)</span>（<span class=\"chem\">\\mathbf{r} =</span> が必要）。",
        // EN: M1: substitutes the parametric form of <span class="chem">L</span> into <span class="chem">Π_3</span>.
        "M1：<span class=\"chem\">L</span> の媒介変数表示を <span class=\"chem\">Π_3</span> に代入する。",
        // EN: A1: <span class="chem">t = 2</span> (for their line).
        "A1：<span class=\"chem\">t = 2</span>（求めた直線に対して）。",
        // EN: A1: <span class="chem">(7, -9, -14)</span>.
        "A1：<span class=\"chem\">(7, -9, -14)</span>。",
        // EN: A1: <span class="chem">x = 7, y = -9, z = -14</span>.
        "A1：<span class=\"chem\">x = 7, y = -9, z = -14</span>。",
      ],
    },

    // ── t3-3-q029 · numeric · exam · AHL · AHL 3.13, 3.16 · 4 marks
    "t3-3-q029": {
      // EN: <p>The vectors <span class="chem">\mathbf{u}</span> and <span class="chem">\mathbf{v}</span> satisfy <span class="chem">|\mathbf{u}| = 4</span>, <span class="chem">|\mathbf{v}| = 5</span> and <span class="chem">\mathbf{u} \cdot \mathbf{v} = 12</span>. Find <span class="chem">|\mathbf{u} \times \mathbf{v}|</span>.</p>
      stem: "<p>ベクトル <span class=\"chem\">\\mathbf{u}</span> と <span class=\"chem\">\\mathbf{v}</span> は <span class=\"chem\">|\\mathbf{u}| = 4</span>、<span class=\"chem\">|\\mathbf{v}| = 5</span>、<span class=\"chem\">\\mathbf{u} \\cdot \\mathbf{v} = 12</span> を満たす。<span class=\"chem\">|\\mathbf{u} \\times \\mathbf{v}|</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: you are not given the components, so you must link the two products through the angle <span class="chem">theta</span> between the vectors.
        "解読：成分は与えられていないので、二つのベクトルのなす角 <span class=\"chem\">theta</span> を通して二種類の積を結びつける必要があります。",
        // EN: Use <span class="chem">\mathbf{u} \cdot \mathbf{v} = |\mathbf{u}||\mathbf{v}| cos theta</span> to find <span class="chem">cos theta</span>, then <span class="chem">sin theta</span> (positive, since <span class="chem">0 &lt;= theta &lt;= 180°</span>).
        "<span class=\"chem\">\\mathbf{u} \\cdot \\mathbf{v} = |\\mathbf{u}||\\mathbf{v}| cos theta</span> を使って <span class=\"chem\">cos theta</span> を求め、次に <span class=\"chem\">sin theta</span> を求めます（<span class=\"chem\">0 &lt;= theta &lt;= 180°</span> なので正です）。",
        // EN: Then <span class="chem">|\mathbf{u} \times \mathbf{v}| = |\mathbf{u}||\mathbf{v}| sin theta</span>.
        "そして <span class=\"chem\">|\\mathbf{u} \\times \\mathbf{v}| = |\\mathbf{u}||\\mathbf{v}| sin theta</span> です。",
      ],
      // EN: <p><span class="chem">cos theta = 12 / (4 × 5) = 3/5</span>, so <span class="chem">sin theta = 4/5</span> (sine is non-negative for <span class="chem">0 &lt;= theta &lt;= 180°</span>). Then <span class="chem">|\mathbf{u} \times \mathbf{v}| = 4 × 5 × 4/5 = 16</span>. (Equivalently, <span class="chem">|\mathbf{u} \times \mathbf{v}|^2 = |\mathbf{u}|^2|\mathbf{v}|^2 - (\mathbf{u} \cdot \mathbf{v})^2 = 400 - 144 = 256</span>.)</p>
      solution: "<p><span class=\"chem\">cos theta = 12 / (4 × 5) = 3/5</span> なので <span class=\"chem\">sin theta = 4/5</span>（<span class=\"chem\">0 &lt;= theta &lt;= 180°</span> では正弦は負にならない）。よって <span class=\"chem\">|\\mathbf{u} \\times \\mathbf{v}| = 4 × 5 × 4/5 = 16</span>。（同値な方法として <span class=\"chem\">|\\mathbf{u} \\times \\mathbf{v}|^2 = |\\mathbf{u}|^2|\\mathbf{v}|^2 - (\\mathbf{u} \\cdot \\mathbf{v})^2 = 400 - 144 = 256</span>。）</p>",
    },

    // ── t3-3-q030 · short · challenge · AHL · AHL 3.12 · 8 marks
    "t3-3-q030": {
      // EN: <p>A garden designer draws any quadrilateral flower bed <span class="chem">ABCD</span> (not necessarily flat or regular) and marks the midpoints <span class="chem">P</span>, <span class="chem">Q</span>, <span class="chem">R</span> and <span class="chem">S</span> of <span class="chem">AB</span>, <span class="chem">BC</span>, <span class="chem">CD</span> and <span class="chem">DA</span>. She claims that a path joining <span class="chem">P</span>, <span class="chem">Q</span>, <span class="chem">R</span>, <span class="chem">S</span> in order always forms a parallelogram. Let <span class="chem">A</span>, <span class="chem">B</span>, <span class="chem">C</span>, <span class="chem">D</span> have position vectors <span class="chem">\mathbf{a}</span>, <span class="chem">\mathbf{b}</span>, <span class="chem">\mathbf{c}</span>, <span class="chem">\mathbf{d}</span>.</p><p>(a) Prove her claim. <strong>[6 marks]</strong></p><p>(b) Show that the total length of the path <span class="chem">PQRSP</span> equals <span class="chem">AC + BD</span>, the sum of the lengths of the diagonals of <span class="chem">ABCD</span>. <strong>[2 marks]</strong></p>
      stem: "<p>庭園デザイナーが任意の四角形の花壇 <span class=\"chem\">ABCD</span>（平面上にあるとも、正多角形であるとも限らない）を描き、<span class=\"chem\">AB</span>、<span class=\"chem\">BC</span>、<span class=\"chem\">CD</span>、<span class=\"chem\">DA</span> の中点 <span class=\"chem\">P</span>、<span class=\"chem\">Q</span>、<span class=\"chem\">R</span>、<span class=\"chem\">S</span> に印をつける。彼女は、<span class=\"chem\">P</span>、<span class=\"chem\">Q</span>、<span class=\"chem\">R</span>、<span class=\"chem\">S</span> を順に結ぶ小道は常に平行四辺形になると主張している。<span class=\"chem\">A</span>、<span class=\"chem\">B</span>、<span class=\"chem\">C</span>、<span class=\"chem\">D</span> の位置ベクトルをそれぞれ <span class=\"chem\">\\mathbf{a}</span>、<span class=\"chem\">\\mathbf{b}</span>、<span class=\"chem\">\\mathbf{c}</span>、<span class=\"chem\">\\mathbf{d}</span> とする。</p><p>(a) 彼女の主張を証明しなさい (Prove)。 <strong>[6 marks]</strong></p><p>(b) 小道 <span class=\"chem\">PQRSP</span> の長さの合計が、<span class=\"chem\">ABCD</span> の対角線の長さの和 <span class=\"chem\">AC + BD</span> に等しいことを示しなさい (Show that)。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: this is a general proof. Do not choose coordinates. Show that <span class="chem">\mathbf{PQ}</span> and <span class="chem">\mathbf{SR}</span> are the same vector for any <span class="chem">\mathbf{a}, \mathbf{b}, \mathbf{c}, \mathbf{d}</span>.
        "解読：これは一般的な証明です。座標を選んではいけません。任意の <span class=\"chem\">\\mathbf{a}, \\mathbf{b}, \\mathbf{c}, \\mathbf{d}</span> に対して <span class=\"chem\">\\mathbf{PQ}</span> と <span class=\"chem\">\\mathbf{SR}</span> が同じベクトルであることを示します。",
        // EN: The midpoint of <span class="chem">AB</span> has position vector <span class="chem">(\mathbf{a} + \mathbf{b})/2</span>.
        "<span class=\"chem\">AB</span> の中点の位置ベクトルは <span class=\"chem\">(\\mathbf{a} + \\mathbf{b})/2</span> です。",
        // EN: After simplifying, <span class="chem">\mathbf{PQ}</span> is half of a diagonal vector of <span class="chem">ABCD</span>. Which one?
        "簡単にすると、<span class=\"chem\">\\mathbf{PQ}</span> は <span class=\"chem\">ABCD</span> の対角線ベクトルの一方の半分になります。どちらでしょうか。",
      ],
      // EN: <p><strong>Decode:</strong> "always forms a parallelogram" means you must show, for general vectors, that one pair of opposite sides of <span class="chem">PQRS</span> is given by the same vector.</p><p>(a) The midpoints have position vectors <span class="chem">\mathbf{p} = (\mathbf{a} + \mathbf{b})/2</span>, <span class="chem">\mathbf{q} = (\mathbf{b} + \mathbf{c})/2</span>, <span class="chem">\mathbf{r} = (\mathbf{c} + \mathbf{d})/2</span>, <span class="chem">\mathbf{s} = (\mathbf{d} + \mathbf{a})/2</span>. Then <span class="chem">\mathbf{PQ} = \mathbf{q} - \mathbf{p} = (\mathbf{c} - \mathbf{a})/2</span> and <span class="chem">\mathbf{SR} = \mathbf{r} - \mathbf{s} = (\mathbf{c} - \mathbf{a})/2</span>. So <span class="chem">\mathbf{PQ} = \mathbf{SR}</span>: the opposite sides <span class="chem">PQ</span> and <span class="chem">SR</span> are parallel and equal in length, and <span class="chem">PQRS</span> is a parallelogram.</p><p>(b) Similarly <span class="chem">\mathbf{QR} = (\mathbf{d} - \mathbf{b})/2 = \mathbf{PS}</span>. So the path length is <span class="chem">2|\mathbf{PQ}| + 2|\mathbf{QR}| = |\mathbf{c} - \mathbf{a}| + |\mathbf{d} - \mathbf{b}| = AC + BD</span>.</p>
      answer: "<p><strong>解読：</strong>「常に平行四辺形になる」とは、一般のベクトルについて、<span class=\"chem\">PQRS</span> の一組の対辺が同じベクトルで表されることを示す必要があるということである。</p><p>(a) 中点の位置ベクトルは <span class=\"chem\">\\mathbf{p} = (\\mathbf{a} + \\mathbf{b})/2</span>、<span class=\"chem\">\\mathbf{q} = (\\mathbf{b} + \\mathbf{c})/2</span>、<span class=\"chem\">\\mathbf{r} = (\\mathbf{c} + \\mathbf{d})/2</span>、<span class=\"chem\">\\mathbf{s} = (\\mathbf{d} + \\mathbf{a})/2</span>。すると <span class=\"chem\">\\mathbf{PQ} = \\mathbf{q} - \\mathbf{p} = (\\mathbf{c} - \\mathbf{a})/2</span>、<span class=\"chem\">\\mathbf{SR} = \\mathbf{r} - \\mathbf{s} = (\\mathbf{c} - \\mathbf{a})/2</span>。よって <span class=\"chem\">\\mathbf{PQ} = \\mathbf{SR}</span> であり、対辺 <span class=\"chem\">PQ</span> と <span class=\"chem\">SR</span> は平行で長さが等しいので、<span class=\"chem\">PQRS</span> は平行四辺形である。</p><p>(b) 同様に <span class=\"chem\">\\mathbf{QR} = (\\mathbf{d} - \\mathbf{b})/2 = \\mathbf{PS}</span>。よって小道の長さは <span class=\"chem\">2|\\mathbf{PQ}| + 2|\\mathbf{QR}| = |\\mathbf{c} - \\mathbf{a}| + |\\mathbf{d} - \\mathbf{b}| = AC + BD</span>。</p>",
      markscheme: [
        // EN: M1: uses the midpoint as the average of position vectors, e.g. <span class="chem">\mathbf{p} = (\mathbf{a} + \mathbf{b})/2</span>.
        "M1：中点を位置ベクトルの平均として用いる。例：<span class=\"chem\">\\mathbf{p} = (\\mathbf{a} + \\mathbf{b})/2</span>。",
        // EN: A1: all four of <span class="chem">\mathbf{p}, \mathbf{q}, \mathbf{r}, \mathbf{s}</span> correct.
        "A1：<span class=\"chem\">\\mathbf{p}, \\mathbf{q}, \\mathbf{r}, \\mathbf{s}</span> の四つすべてが正しい。",
        // EN: M1: finds a side vector as a difference, e.g. <span class="chem">\mathbf{PQ} = \mathbf{q} - \mathbf{p}</span>.
        "M1：辺のベクトルを差として求める。例：<span class=\"chem\">\\mathbf{PQ} = \\mathbf{q} - \\mathbf{p}</span>。",
        // EN: A1: <span class="chem">\mathbf{PQ} = (\mathbf{c} - \mathbf{a})/2</span>.
        "A1：<span class=\"chem\">\\mathbf{PQ} = (\\mathbf{c} - \\mathbf{a})/2</span>。",
        // EN: A1: <span class="chem">\mathbf{SR} = (\mathbf{c} - \mathbf{a})/2</span> (or <span class="chem">\mathbf{QR} = \mathbf{PS} = (\mathbf{d} - \mathbf{b})/2</span>).
        "A1：<span class=\"chem\">\\mathbf{SR} = (\\mathbf{c} - \\mathbf{a})/2</span>（または <span class=\"chem\">\\mathbf{QR} = \\mathbf{PS} = (\\mathbf{d} - \\mathbf{b})/2</span>）。",
        // EN: R1: equal vectors, so opposite sides are parallel and equal: <span class="chem">PQRS</span> is a parallelogram (AG).
        "R1：ベクトルが等しいので対辺は平行で等しく、<span class=\"chem\">PQRS</span> は平行四辺形である (AG)。",
        // EN: A1: <span class="chem">\mathbf{QR} = (\mathbf{d} - \mathbf{b})/2</span>, so <span class="chem">|\mathbf{QR}| = BD/2</span> and <span class="chem">|\mathbf{PQ}| = AC/2</span>.
        "A1：<span class=\"chem\">\\mathbf{QR} = (\\mathbf{d} - \\mathbf{b})/2</span> なので <span class=\"chem\">|\\mathbf{QR}| = BD/2</span>、<span class=\"chem\">|\\mathbf{PQ}| = AC/2</span>。",
        // EN: A1: path length <span class="chem">= 2(AC/2) + 2(BD/2) = AC + BD</span> (AG).
        "A1：小道の長さ <span class=\"chem\">= 2(AC/2) + 2(BD/2) = AC + BD</span> (AG)。",
      ],
    },

    // ── t3-3-q031 · numeric · challenge · AHL · AHL 3.15 · 5 marks
    "t3-3-q031": {
      // EN: <p>Two straight wires are modelled by the lines <span class="chem">L_1: \mathbf{r} = (1, -2, 0) + lambda(1, 2, 1)</span> and <span class="chem">L_2: \mathbf{r} = (5, 1, k) + mu(1, 1, -2)</span>. An engineer finds that the two wires lie in a common plane. Find the value of <span class="chem">k</span>.</p>
      stem: "<p>2 本のまっすぐな電線が直線 <span class=\"chem\">L_1: \\mathbf{r} = (1, -2, 0) + lambda(1, 2, 1)</span> と <span class=\"chem\">L_2: \\mathbf{r} = (5, 1, k) + mu(1, 1, -2)</span> でモデル化されている。技術者は、2 本の電線が同一平面上にあることを見つけた。<span class=\"chem\">k</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: two lines lie in one plane exactly when they are parallel or they intersect. These directions are not parallel, so "in a common plane" means "the lines intersect".
        "解読：2 直線が同一平面上にあるのは、平行であるか交わるときに限ります。これらの方向は平行ではないので、「同一平面上にある」とは「2 直線が交わる」ということです。",
        // EN: Equate the <span class="chem">x</span>- and <span class="chem">y</span>-components and solve for <span class="chem">lambda</span> and <span class="chem">mu</span>; these do not involve <span class="chem">k</span>.
        "<span class=\"chem\">x</span> 成分と <span class=\"chem\">y</span> 成分を等置して <span class=\"chem\">lambda</span> と <span class=\"chem\">mu</span> を求めます。これらの式には <span class=\"chem\">k</span> は含まれません。",
        // EN: The <span class="chem">z</span>-components must then agree. Use that equation to find <span class="chem">k</span>.
        "すると <span class=\"chem\">z</span> 成分も一致しなければなりません。その式を使って <span class=\"chem\">k</span> を求めます。",
      ],
      // EN: <p><strong>Decode:</strong> <span class="chem">(1, 2, 1)</span> is not a multiple of <span class="chem">(1, 1, -2)</span>, so coplanar lines must intersect.</p><p><span class="chem">x</span>: <span class="chem">1 + lambda = 5 + mu</span>; <span class="chem">y</span>: <span class="chem">-2 + 2lambda = 1 + mu</span>. Subtracting: <span class="chem">3 - lambda = 4 => lambda = -1</span>, and then <span class="chem">mu = -5</span>. <span class="chem">z</span>: <span class="chem">lambda = k - 2mu => -1 = k + 10 => k = -11</span>.</p>
      solution: "<p><strong>解読：</strong><span class=\"chem\">(1, 2, 1)</span> は <span class=\"chem\">(1, 1, -2)</span> の実数倍ではないので、同一平面上にある 2 直線は交わらなければならない。</p><p><span class=\"chem\">x</span>：<span class=\"chem\">1 + lambda = 5 + mu</span>、<span class=\"chem\">y</span>：<span class=\"chem\">-2 + 2lambda = 1 + mu</span>。辺々引くと <span class=\"chem\">3 - lambda = 4 => lambda = -1</span>、さらに <span class=\"chem\">mu = -5</span>。<span class=\"chem\">z</span>：<span class=\"chem\">lambda = k - 2mu => -1 = k + 10 => k = -11</span>。</p>",
    },

    // ── t3-3-q032 · numeric · challenge · AHL · AHL 3.16–3.18 · 6 marks
    "t3-3-q032": {
      // EN: <p>A flat glass panel contains the straight edge <span class="chem">L: \mathbf{r} = (1, 2, 0) + lambda(2, -1, 1)</span> and also the corner point <span class="chem">P(3, 1, 4)</span>. A light is fixed at the origin <span class="chem">O</span>. Find the exact shortest distance from the light to the plane of the panel.</p>
      stem: "<p>平らなガラス板が、まっすぐな辺 <span class=\"chem\">L: \\mathbf{r} = (1, 2, 0) + lambda(2, -1, 1)</span> と角の点 <span class=\"chem\">P(3, 1, 4)</span> を含んでいる。照明が原点 <span class=\"chem\">O</span> に固定されている。照明からガラス板を含む平面までの最短距離の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: first build the plane from a line and a point not on it, then find the distance from <span class="chem">O</span> to that plane.
        "解読：まず直線とその上にない点から平面をつくり、次に <span class=\"chem\">O</span> からその平面までの距離を求めます。",
        // EN: Two directions in the plane are <span class="chem">(2, -1, 1)</span> and <span class="chem">\mathbf{AP}</span>, where <span class="chem">A(1, 2, 0)</span> is on <span class="chem">L</span>. Their vector product is a normal.
        "平面内の二つの方向は <span class=\"chem\">(2, -1, 1)</span> と <span class=\"chem\">\\mathbf{AP}</span> です。ここで <span class=\"chem\">A(1, 2, 0)</span> は <span class=\"chem\">L</span> 上の点です。それらの外積が法線ベクトルになります。",
        // EN: You should get the plane <span class="chem">x + 2y = 5</span>. The perpendicular from <span class="chem">O</span> is <span class="chem">\mathbf{r} = s(1, 2, 0)</span>.
        "平面 <span class=\"chem\">x + 2y = 5</span> が得られるはずです。<span class=\"chem\">O</span> からの垂線は <span class=\"chem\">\\mathbf{r} = s(1, 2, 0)</span> です。",
      ],
      // EN: <p><strong>Decode:</strong> plane from a line and a point, then point-to-plane distance.</p><p><span class="chem">\mathbf{AP} = (2, -1, 4)</span>. <span class="chem">(2, -1, 1) \times (2, -1, 4) = ((-1)(4) - (1)(-1), (1)(2) - (2)(4), (2)(-1) - (-1)(2)) = (-3, -6, 0)</span>, so <span class="chem">\mathbf{n} = (1, 2, 0)</span> and the plane is <span class="chem">x + 2y = 5</span> (check with <span class="chem">P</span>: <span class="chem">3 + 2 = 5</span>). The perpendicular from <span class="chem">O</span> is <span class="chem">(s, 2s, 0)</span>: <span class="chem">5s = 5 => s = 1</span>, foot <span class="chem">(1, 2, 0)</span>. The distance is <span class="chem">sqrt(1 + 4) = sqrt(5)</span>.</p>
      solution: "<p><strong>解読：</strong>直線と点から平面をつくり、次に点と平面の距離を求める。</p><p><span class=\"chem\">\\mathbf{AP} = (2, -1, 4)</span>。<span class=\"chem\">(2, -1, 1) \\times (2, -1, 4) = ((-1)(4) - (1)(-1), (1)(2) - (2)(4), (2)(-1) - (-1)(2)) = (-3, -6, 0)</span> なので <span class=\"chem\">\\mathbf{n} = (1, 2, 0)</span> であり、平面は <span class=\"chem\">x + 2y = 5</span>（<span class=\"chem\">P</span> で確認：<span class=\"chem\">3 + 2 = 5</span>）。<span class=\"chem\">O</span> からの垂線は <span class=\"chem\">(s, 2s, 0)</span>：<span class=\"chem\">5s = 5 => s = 1</span>、垂線の足は <span class=\"chem\">(1, 2, 0)</span>。距離は <span class=\"chem\">sqrt(1 + 4) = sqrt(5)</span> である。</p>",
    },

    // ── t3-3-q033 · short · challenge · AHL · AHL 3.18 · 10 marks
    "t3-3-q033": {
      // EN: <p>Consider the planes <span class="chem">Π_1: x + y - z = 2</span>, <span class="chem">Π_2: 2x + 3y + z = 5</span> and <span class="chem">Π_3: x + 2y + az = b</span>, where <span class="chem">a, b \in \mathbb{R}</span>.</p><p>(a) Find the value of <span class="chem">a</span> for which the three planes do <strong>not</strong> meet at a single point. <strong>[3 marks]</strong></p><p>(b) For this value of <span class="chem">a</span>, find the value of <span class="chem">b</span> for which the planes meet in a line. <strong>[2 marks]</strong></p><p>(c) For this value of <span class="chem">a</span> and any other value of <span class="chem">b</span>, describe the geometric arrangement of the three planes, justifying your answer. <strong>[2 marks]</strong></p><p>(d) For the values in part (b), find a vector equation of the common line. <strong>[3 marks]</strong></p>
      stem: "<p>平面 <span class=\"chem\">Π_1: x + y - z = 2</span>、<span class=\"chem\">Π_2: 2x + 3y + z = 5</span>、<span class=\"chem\">Π_3: x + 2y + az = b</span> を考える。ただし <span class=\"chem\">a, b \\in \\mathbb{R}</span> とする。</p><p>(a) 三つの平面がただ一点で交わら<strong>ない</strong>ような <span class=\"chem\">a</span> の値を求めなさい (Find)。 <strong>[3 marks]</strong></p><p>(b) この <span class=\"chem\">a</span> の値に対して、平面が直線で交わるような <span class=\"chem\">b</span> の値を求めなさい (find)。 <strong>[2 marks]</strong></p><p>(c) この <span class=\"chem\">a</span> の値と、それ以外の任意の <span class=\"chem\">b</span> の値に対して、三つの平面の幾何学的な位置関係を説明し (describe)、その理由を述べなさい。 <strong>[2 marks]</strong></p><p>(d) (b) の値に対して、共通の直線のベクトル方程式を一つ求めなさい (find)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: "do not meet at a single point" = "the system does not have a unique solution". Eliminate until one equation contains only <span class="chem">z</span>.
        "解読：「ただ一点で交わらない」＝「連立方程式がただ一つの解をもたない」。一つの式が <span class=\"chem\">z</span> だけを含むようになるまで消去します。",
        // EN: Use <span class="chem">Π_2 - 2Π_1</span> and <span class="chem">Π_3 - Π_1</span>, then subtract the two results.
        "<span class=\"chem\">Π_2 - 2Π_1</span> と <span class=\"chem\">Π_3 - Π_1</span> を使い、得られた二つの結果を引きます。",
        // EN: For part (c), "no solution" can be a triangular prism or include parallel planes. Check whether any two normals are parallel.
        "(c) では、「解なし」は三角柱の場合も、平行な平面を含む場合もあります。どれか二つの法線ベクトルが平行かどうかを確かめます。",
      ],
      // EN: <p><strong>Decode:</strong> "not a single point" means the system has no unique solution: eliminate to a single equation in one unknown and make its coefficient zero.</p><p>(a) <span class="chem">Π_2 - 2Π_1</span>: <span class="chem">y + 3z = 1</span>. <span class="chem">Π_3 - Π_1</span>: <span class="chem">y + (a + 1)z = b - 2</span>. Subtracting: <span class="chem">(a - 2)z = b - 3</span>. There is no unique solution when <span class="chem">a = 2</span>.</p><p>(b) With <span class="chem">a = 2</span> the last equation is <span class="chem">0z = b - 3</span>, which holds for every <span class="chem">z</span> when <span class="chem">b = 3</span>: the planes meet in a line.</p><p>(c) If <span class="chem">b != 3</span> there is no solution. The normals <span class="chem">(1, 1, -1)</span>, <span class="chem">(2, 3, 1)</span>, <span class="chem">(1, 2, 2)</span> are not multiples of one another, so no two planes are parallel; the planes meet in pairs along three parallel lines and form a triangular prism.</p><p>(d) Let <span class="chem">z = t</span>. Then <span class="chem">y = 1 - 3t</span> and <span class="chem">x = 2 - y + z = 1 + 4t</span>, so <span class="chem">\mathbf{r} = (1, 1, 0) + t(4, -3, 1)</span>.</p>
      answer: "<p><strong>解読：</strong>「ただ一点で交わらない」とは連立方程式がただ一つの解をもたないということである。未知数一つの単一の式になるまで消去し、その係数をゼロにする。</p><p>(a) <span class=\"chem\">Π_2 - 2Π_1</span>：<span class=\"chem\">y + 3z = 1</span>。<span class=\"chem\">Π_3 - Π_1</span>：<span class=\"chem\">y + (a + 1)z = b - 2</span>。辺々引くと <span class=\"chem\">(a - 2)z = b - 3</span>。<span class=\"chem\">a = 2</span> のとき、ただ一つの解をもたない。</p><p>(b) <span class=\"chem\">a = 2</span> のとき最後の式は <span class=\"chem\">0z = b - 3</span> であり、<span class=\"chem\">b = 3</span> のときすべての <span class=\"chem\">z</span> について成り立つ。よって平面は直線で交わる。</p><p>(c) <span class=\"chem\">b != 3</span> のとき解はない。法線ベクトル <span class=\"chem\">(1, 1, -1)</span>、<span class=\"chem\">(2, 3, 1)</span>、<span class=\"chem\">(1, 2, 2)</span> はどれも互いの実数倍ではないので、平行な平面の組はない。平面は二つずつ三本の平行な直線で交わり、三角柱をつくる。</p><p>(d) <span class=\"chem\">z = t</span> とおく。すると <span class=\"chem\">y = 1 - 3t</span>、<span class=\"chem\">x = 2 - y + z = 1 + 4t</span> なので <span class=\"chem\">\\mathbf{r} = (1, 1, 0) + t(4, -3, 1)</span>。</p>",
      markscheme: [
        // EN: M1: eliminates <span class="chem">x</span> from two pairs of equations.
        "M1：二組の方程式から <span class=\"chem\">x</span> を消去する。",
        // EN: A1: obtains <span class="chem">(a - 2)z = b - 3</span> (or an equivalent single equation).
        "A1：<span class=\"chem\">(a - 2)z = b - 3</span>（または同値な単一の式）を得る。",
        // EN: A1: <span class="chem">a = 2</span>.
        "A1：<span class=\"chem\">a = 2</span>。",
        // EN: M1: recognises that a line of solutions needs the equation to reduce to <span class="chem">0 = 0</span>.
        "M1：解が直線になるには式が <span class=\"chem\">0 = 0</span> に帰着する必要があることに気づく。",
        // EN: A1: <span class="chem">b = 3</span>.
        "A1：<span class=\"chem\">b = 3</span>。",
        // EN: R1: no solution, and no two normal vectors are parallel.
        "R1：解がなく、どの二つの法線ベクトルも平行でない。",
        // EN: A1: the planes form a triangular prism.
        "A1：平面は三角柱をつくる。",
        // EN: M1: introduces a parameter, e.g. <span class="chem">z = t</span>, and expresses <span class="chem">y</span> in terms of <span class="chem">t</span>.
        "M1：媒介変数を導入し（例：<span class=\"chem\">z = t</span>）、<span class=\"chem\">y</span> を <span class=\"chem\">t</span> で表す。",
        // EN: A1: <span class="chem">y = 1 - 3t</span> and <span class="chem">x = 1 + 4t</span>.
        "A1：<span class=\"chem\">y = 1 - 3t</span>、<span class=\"chem\">x = 1 + 4t</span>。",
        // EN: A1: <span class="chem">\mathbf{r} = (1, 1, 0) + t(4, -3, 1)</span> (or equivalent).
        "A1：<span class=\"chem\">\\mathbf{r} = (1, 1, 0) + t(4, -3, 1)</span>（または同値な式）。",
      ],
    },

    // ── t3-3-q034 · numeric · exam · AHL · AHL 3.13 · 4 marks
    "t3-3-q034": {
      // EN: <p>A surveyor records the positions of three marker posts, in metres, as <span class="chem">A(2.4, -1.3, 0.8)</span>, <span class="chem">B(0.5, 1.7, -2.1)</span> and <span class="chem">C(3.6, 2.2, 1.5)</span>. Find the size of angle <span class="chem">ABC</span>, in degrees, correct to 3 significant figures.</p>
      stem: "<p>測量士が 3 本の目印の杭の位置をメートル単位で <span class=\"chem\">A(2.4, -1.3, 0.8)</span>、<span class=\"chem\">B(0.5, 1.7, -2.1)</span>、<span class=\"chem\">C(3.6, 2.2, 1.5)</span> と記録した。角 <span class=\"chem\">ABC</span> の大きさを度数法で求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: angle <span class="chem">ABC</span> is the angle <em>at</em> <span class="chem">B</span>, so use the two vectors that start at <span class="chem">B</span>: <span class="chem">\mathbf{BA}</span> and <span class="chem">\mathbf{BC}</span>.
        "解読：角 <span class=\"chem\">ABC</span> は <span class=\"chem\">B</span> <em>における</em>角なので、<span class=\"chem\">B</span> を始点とする二つのベクトル <span class=\"chem\">\\mathbf{BA}</span> と <span class=\"chem\">\\mathbf{BC}</span> を使います。",
        // EN: <span class="chem">\mathbf{BA} = (1.9, -3, 2.9)</span> and <span class="chem">\mathbf{BC} = (3.1, 0.5, 3.6)</span>.
        "<span class=\"chem\">\\mathbf{BA} = (1.9, -3, 2.9)</span>、<span class=\"chem\">\\mathbf{BC} = (3.1, 0.5, 3.6)</span> です。",
        // EN: Use <span class="chem">cos B = (\mathbf{BA} \cdot \mathbf{BC}) / (|\mathbf{BA}||\mathbf{BC}|)</span>; do not take a modulus here, because the angle of a triangle can be obtuse.
        "<span class=\"chem\">cos B = (\\mathbf{BA} \\cdot \\mathbf{BC}) / (|\\mathbf{BA}||\\mathbf{BC}|)</span> を使います。三角形の角は鈍角になることがあるので、ここでは絶対値をとってはいけません。",
      ],
      // EN: <p><span class="chem">\mathbf{BA} = (1.9, -3, 2.9)</span>, <span class="chem">\mathbf{BC} = (3.1, 0.5, 3.6)</span>. <span class="chem">\mathbf{BA} \cdot \mathbf{BC} = 5.89 - 1.5 + 10.44 = 14.83</span>, <span class="chem">|\mathbf{BA}| = sqrt(21.02) ≈ 4.585</span>, <span class="chem">|\mathbf{BC}| = sqrt(22.82) ≈ 4.777</span>. So <span class="chem">cos B ≈ 0.6771</span> and angle <span class="chem">ABC ≈ 47.4°</span>.</p>
      solution: "<p><span class=\"chem\">\\mathbf{BA} = (1.9, -3, 2.9)</span>、<span class=\"chem\">\\mathbf{BC} = (3.1, 0.5, 3.6)</span>。<span class=\"chem\">\\mathbf{BA} \\cdot \\mathbf{BC} = 5.89 - 1.5 + 10.44 = 14.83</span>、<span class=\"chem\">|\\mathbf{BA}| = sqrt(21.02) ≈ 4.585</span>、<span class=\"chem\">|\\mathbf{BC}| = sqrt(22.82) ≈ 4.777</span>。よって <span class=\"chem\">cos B ≈ 0.6771</span> で、角 <span class=\"chem\">ABC ≈ 47.4°</span> です。</p>",
    },

    // ── t3-3-q035 · numeric · exam · AHL · AHL 3.13–3.14 · 6 marks
    "t3-3-q035": {
      // EN: <p>A camera drone moves with constant velocity. Its position <span class="chem">t</span> seconds after it is switched on is <span class="chem">\mathbf{r} = (-40, 25, 10) + t(6, -3.5, 1.2)</span>, in metres. A signal mast has its top at <span class="chem">T(30, -10, 40)</span>. Find the minimum distance between the drone and the top of the mast, correct to 3 significant figures.</p>
      stem: "<p>撮影用ドローンが一定の速度で移動している。電源を入れてから <span class=\"chem\">t</span> 秒後の位置は <span class=\"chem\">\\mathbf{r} = (-40, 25, 10) + t(6, -3.5, 1.2)</span>（単位はメートル）である。信号塔の先端は <span class=\"chem\">T(30, -10, 40)</span> にある。ドローンと塔の先端との最短距離を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: "minimum distance" between a moving point and a fixed point. Either minimise <span class="chem">|\mathbf{r}(t) - \mathbf{OT}|</span> on your GDC, or use the fact that at the closest point <span class="chem">\mathbf{TR}</span> is perpendicular to the velocity.
        "解読：動く点と固定された点の間の「最短距離」です。GDC で <span class=\"chem\">|\\mathbf{r}(t) - \\mathbf{OT}|</span> を最小化するか、最も近づくとき <span class=\"chem\">\\mathbf{TR}</span> が速度に垂直であることを使います。",
        // EN: <span class="chem">\mathbf{TR}(t) = (-70 + 6t, 35 - 3.5t, -30 + 1.2t)</span>.
        "<span class=\"chem\">\\mathbf{TR}(t) = (-70 + 6t, 35 - 3.5t, -30 + 1.2t)</span>.",
        // EN: Solve <span class="chem">\mathbf{TR}(t) \cdot (6, -3.5, 1.2) = 0</span> for <span class="chem">t</span>, then find <span class="chem">|\mathbf{TR}(t)|</span>.
        "<span class=\"chem\">\\mathbf{TR}(t) \\cdot (6, -3.5, 1.2) = 0</span> を <span class=\"chem\">t</span> について解き、次に <span class=\"chem\">|\\mathbf{TR}(t)|</span> を求めます。",
      ],
      // EN: <p><span class="chem">\mathbf{TR}(t) = (-70 + 6t, 35 - 3.5t, -30 + 1.2t)</span>. Setting <span class="chem">\mathbf{TR} \cdot (6, -3.5, 1.2) = 0</span>: <span class="chem">-420 - 122.5 - 36 + (36 + 12.25 + 1.44)t = 0 => t = 578.5 / 49.69 ≈ 11.64</span> s. Then <span class="chem">\mathbf{TR} ≈ (-0.147, -5.75, -16.0)</span> and the minimum distance is <span class="chem">≈ 17.0</span> m. (A GDC graph of <span class="chem">|\mathbf{TR}(t)|</span> gives the same minimum.)</p>
      solution: "<p><span class=\"chem\">\\mathbf{TR}(t) = (-70 + 6t, 35 - 3.5t, -30 + 1.2t)</span>。<span class=\"chem\">\\mathbf{TR} \\cdot (6, -3.5, 1.2) = 0</span> とおくと <span class=\"chem\">-420 - 122.5 - 36 + (36 + 12.25 + 1.44)t = 0 => t = 578.5 / 49.69 ≈ 11.64</span> s。すると <span class=\"chem\">\\mathbf{TR} ≈ (-0.147, -5.75, -16.0)</span> であり、最短距離は <span class=\"chem\">≈ 17.0</span> m である。（GDC で <span class=\"chem\">|\\mathbf{TR}(t)|</span> のグラフをかいても同じ最小値が得られる。）</p>",
    },

    // ── t3-3-q036 · short · exam · AHL · AHL 3.12–3.14 · 9 marks
    "t3-3-q036": {
      // EN: <p>Two aircraft are tracked by radar. Relative to the control tower, with distances in kilometres and <span class="chem">t</span> in hours after 12:00, their positions are</p><p><span class="chem">\mathbf{r_A} = (-50, 20, 8.5) + t(420, 150, 0)</span> and <span class="chem">\mathbf{r_B} = (10, -60, 9.1) + t(180, 520, -0.4)</span>.</p><p>(a) Find the speed of aircraft A. <strong>[2 marks]</strong></p><p>(b) Aircraft B is descending. Show that the two aircraft are at the same altitude when <span class="chem">t = 1.5</span>, and that they do not collide at that time. <strong>[2 marks]</strong></p><p>(c) Find the minimum distance between the two aircraft and the time, to the nearest minute, at which it occurs. <strong>[4 marks]</strong></p><p>(d) Safety rules require aircraft to stay at least 5 km apart. State, with a reason, whether the rule is broken. <strong>[1 mark]</strong></p>
      stem: "<p>2 機の航空機がレーダーで追跡されている。管制塔を基準とし、距離をキロメートル、<span class=\"chem\">t</span> を 12:00 からの経過時間（時間）とすると、それらの位置は</p><p><span class=\"chem\">\\mathbf{r_A} = (-50, 20, 8.5) + t(420, 150, 0)</span>、<span class=\"chem\">\\mathbf{r_B} = (10, -60, 9.1) + t(180, 520, -0.4)</span> である。</p><p>(a) 航空機 A の速さを求めなさい (Find)。 <strong>[2 marks]</strong></p><p>(b) 航空機 B は降下している。<span class=\"chem\">t = 1.5</span> のとき 2 機が同じ高度にあり、そのとき衝突しないことを示しなさい (Show that)。 <strong>[2 marks]</strong></p><p>(c) 2 機の間の最短距離と、それが起こる時刻を最も近い分の単位で求めなさい (Find)。 <strong>[4 marks]</strong></p><p>(d) 安全規則では、航空機どうしは少なくとも 5 km 離れていなければならない。規則が破られるかどうかを、理由をつけて述べなさい (State)。 <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Speed is the magnitude of the velocity vector.
        "速さは速度ベクトルの大きさです。",
        // EN: Altitude is the <span class="chem">z</span>-coordinate.
        "高度は <span class=\"chem\">z</span> 座標です。",
        // EN: The distance between the aircraft at time <span class="chem">t</span> is <span class="chem">|\mathbf{r_A}(t) - \mathbf{r_B}(t)|</span>. Graph it on your GDC and find the minimum.
        "時刻 <span class=\"chem\">t</span> における 2 機の間の距離は <span class=\"chem\">|\\mathbf{r_A}(t) - \\mathbf{r_B}(t)|</span> です。GDC でグラフをかき、最小値を求めます。",
      ],
      // EN: <p>(a) Speed <span class="chem">= |(420, 150, 0)| = sqrt(420^2 + 150^2) ≈ 446</span> km per hour.</p><p>(b) A is always at altitude 8.5 km. B is at <span class="chem">9.1 - 0.4t = 8.5</span> when <span class="chem">t = 1.5</span>. Then <span class="chem">\mathbf{r_A} = (580, 245, 8.5)</span> and <span class="chem">\mathbf{r_B} = (280, 720, 8.5)</span>, which are different points, so there is no collision.</p><p>(c) <span class="chem">\mathbf{r_A} - \mathbf{r_B} = (-60, 80, -0.6) + t(240, -370, 0.4)</span>. Minimising its magnitude (GDC, or solving <span class="chem">(\mathbf{r_A} - \mathbf{r_B}) \cdot (240, -370, 0.4) = 0</span>) gives <span class="chem">t ≈ 0.2262</span> h, about 13.6 minutes, so at 12:14. The minimum distance is <span class="chem">≈ 6.82</span> km.</p><p>(d) The rule is not broken, since the minimum separation <span class="chem">6.82</span> km is greater than 5 km.</p>
      answer: "<p>(a) 速さ <span class=\"chem\">= |(420, 150, 0)| = sqrt(420^2 + 150^2) ≈ 446</span> km 毎時。</p><p>(b) A は常に高度 8.5 km にある。B は <span class=\"chem\">t = 1.5</span> のとき <span class=\"chem\">9.1 - 0.4t = 8.5</span> にある。このとき <span class=\"chem\">\\mathbf{r_A} = (580, 245, 8.5)</span>、<span class=\"chem\">\\mathbf{r_B} = (280, 720, 8.5)</span> であり、異なる点なので衝突しない。</p><p>(c) <span class=\"chem\">\\mathbf{r_A} - \\mathbf{r_B} = (-60, 80, -0.6) + t(240, -370, 0.4)</span>。その大きさを最小化する（GDC、または <span class=\"chem\">(\\mathbf{r_A} - \\mathbf{r_B}) \\cdot (240, -370, 0.4) = 0</span> を解く）と <span class=\"chem\">t ≈ 0.2262</span> h、約 13.6 分なので 12:14。最短距離は <span class=\"chem\">≈ 6.82</span> km。</p><p>(d) 最短距離 <span class=\"chem\">6.82</span> km は 5 km より大きいので、規則は破られない。</p>",
      markscheme: [
        // EN: M1: finds the magnitude of the velocity vector of A.
        "M1：A の速度ベクトルの大きさを求める。",
        // EN: A1: speed <span class="chem">≈ 446</span> km per hour.
        "A1：速さ <span class=\"chem\">≈ 446</span> km 毎時。",
        // EN: A1: shows <span class="chem">9.1 - 0.4(1.5) = 8.5</span>, the altitude of A.
        "A1：A の高度である <span class=\"chem\">9.1 - 0.4(1.5) = 8.5</span> を示す。",
        // EN: R1: finds both positions at <span class="chem">t = 1.5</span> and states they differ, so no collision.
        "R1：<span class=\"chem\">t = 1.5</span> における両方の位置を求め、異なるので衝突しないと述べる。",
        // EN: M1: forms the relative position <span class="chem">\mathbf{r_A} - \mathbf{r_B}</span> as a function of <span class="chem">t</span>.
        "M1：相対位置 <span class=\"chem\">\\mathbf{r_A} - \\mathbf{r_B}</span> を <span class=\"chem\">t</span> の関数として表す。",
        // EN: M1: minimises its magnitude (GDC graph, or scalar product with relative velocity set to 0).
        "M1：その大きさを最小化する（GDC のグラフ、または相対速度との内積を 0 とおく）。",
        // EN: A1: <span class="chem">t ≈ 0.226</span> h, i.e. 12:14.
        "A1：<span class=\"chem\">t ≈ 0.226</span> h、すなわち 12:14。",
        // EN: A1: minimum distance <span class="chem">≈ 6.82</span> km.
        "A1：最短距離 <span class=\"chem\">≈ 6.82</span> km。",
        // EN: R1: not broken, because <span class="chem">6.82 &gt; 5</span> (follow through from their minimum).
        "R1：<span class=\"chem\">6.82 &gt; 5</span> なので破られない（求めた最小値からのフォロースルー）。",
      ],
    },

    // ── t3-3-q037 · numeric · exam · AHL · AHL 3.14–3.16 · 5 marks
    "t3-3-q037": {
      // EN: <p>Find the shortest distance from the point <span class="chem">P(3.5, -1.2, 4.8)</span> to the line <span class="chem">\mathbf{r} = (1.1, 0.4, -2) + lambda(2.3, -1.7, 0.9)</span>, correct to 3 significant figures.</p>
      stem: "<p>点 <span class=\"chem\">P(3.5, -1.2, 4.8)</span> から直線 <span class=\"chem\">\\mathbf{r} = (1.1, 0.4, -2) + lambda(2.3, -1.7, 0.9)</span> までの最短距離を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Let <span class="chem">F</span> be the point on the line with parameter <span class="chem">lambda</span>. At the foot of the perpendicular, <span class="chem">\mathbf{PF} \cdot (2.3, -1.7, 0.9) = 0</span>.
        "直線上の媒介変数 <span class=\"chem\">lambda</span> に対応する点を <span class=\"chem\">F</span> とします。垂線の足では <span class=\"chem\">\\mathbf{PF} \\cdot (2.3, -1.7, 0.9) = 0</span> です。",
        // EN: Alternatively use <span class="chem">d = |\mathbf{AP} \times \mathbf{b}| / |\mathbf{b}|</span> with <span class="chem">A(1.1, 0.4, -2)</span>.
        "別の方法として、<span class=\"chem\">A(1.1, 0.4, -2)</span> を用いて <span class=\"chem\">d = |\\mathbf{AP} \\times \\mathbf{b}| / |\\mathbf{b}|</span> を使うこともできます。",
      ],
      // EN: <p>With <span class="chem">A(1.1, 0.4, -2)</span>, <span class="chem">\mathbf{AP} = (2.4, -1.6, 6.8)</span> and <span class="chem">\mathbf{b} = (2.3, -1.7, 0.9)</span>. <span class="chem">\mathbf{AP} \times \mathbf{b} = (10.12, 13.48, -0.4)</span>, so <span class="chem">d = |\mathbf{AP} \times \mathbf{b}| / |\mathbf{b}| = 16.86 / 2.999 ≈ 5.62</span>. (Foot-of-perpendicular method: <span class="chem">lambda = (\mathbf{AP} \cdot \mathbf{b}) / |\mathbf{b}|^2 ≈ 1.597</span>, giving the same distance.)</p>
      solution: "<p><span class=\"chem\">A(1.1, 0.4, -2)</span> とすると <span class=\"chem\">\\mathbf{AP} = (2.4, -1.6, 6.8)</span>、<span class=\"chem\">\\mathbf{b} = (2.3, -1.7, 0.9)</span>。<span class=\"chem\">\\mathbf{AP} \\times \\mathbf{b} = (10.12, 13.48, -0.4)</span> なので <span class=\"chem\">d = |\\mathbf{AP} \\times \\mathbf{b}| / |\\mathbf{b}| = 16.86 / 2.999 ≈ 5.62</span>。（垂線の足を使う方法：<span class=\"chem\">lambda = (\\mathbf{AP} \\cdot \\mathbf{b}) / |\\mathbf{b}|^2 ≈ 1.597</span> となり、同じ距離が得られる。）</p>",
    },

    // ── t3-3-q038 · numeric · exam · AHL · AHL 3.15–3.16 · 5 marks
    "t3-3-q038": {
      // EN: <p>Two straight pipes in a factory are modelled by the skew lines <span class="chem">L_1: \mathbf{r} = (1.5, 0, -2.5) + lambda(2, -1, 3)</span> and <span class="chem">L_2: \mathbf{r} = (4, 2.5, 1) + mu(-1, 3, 0.5)</span>, in metres. A straight connecting rod is fitted perpendicular to both pipes. Find the length of the rod, correct to 3 significant figures.</p>
      stem: "<p>工場にある 2 本のまっすぐな配管が、ねじれの位置にある直線 <span class=\"chem\">L_1: \\mathbf{r} = (1.5, 0, -2.5) + lambda(2, -1, 3)</span> と <span class=\"chem\">L_2: \\mathbf{r} = (4, 2.5, 1) + mu(-1, 3, 0.5)</span> でモデル化されている（単位はメートル）。まっすぐな連結棒が両方の配管に垂直に取り付けられる。棒の長さを求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: a rod perpendicular to both skew lines is the common perpendicular, so its length is the shortest distance between the lines.
        "解読：ねじれの位置にある両方の直線に垂直な棒は共通垂線なので、その長さは 2 直線間の最短距離です。",
        // EN: The common perpendicular is parallel to <span class="chem">\mathbf{n} = (2, -1, 3) \times (-1, 3, 0.5)</span>.
        "共通垂線は <span class=\"chem\">\\mathbf{n} = (2, -1, 3) \\times (-1, 3, 0.5)</span> に平行です。",
        // EN: Project <span class="chem">\mathbf{A_1A_2} = (2.5, 2.5, 3.5)</span> onto <span class="chem">\mathbf{n}</span>: <span class="chem">d = |\mathbf{A_1A_2} \cdot \mathbf{n}| / |\mathbf{n}|</span>.
        "<span class=\"chem\">\\mathbf{A_1A_2} = (2.5, 2.5, 3.5)</span> を <span class=\"chem\">\\mathbf{n}</span> に射影します：<span class=\"chem\">d = |\\mathbf{A_1A_2} \\cdot \\mathbf{n}| / |\\mathbf{n}|</span>。",
      ],
      // EN: <p><span class="chem">\mathbf{n} = (2, -1, 3) \times (-1, 3, 0.5) = (-9.5, -4, 5)</span>, <span class="chem">|\mathbf{n}| = sqrt(131.25) ≈ 11.46</span>. <span class="chem">\mathbf{A_1A_2} = (2.5, 2.5, 3.5)</span>, so <span class="chem">\mathbf{A_1A_2} \cdot \mathbf{n} = -23.75 - 10 + 17.5 = -16.25</span>. The length is <span class="chem">16.25 / 11.46 ≈ 1.42</span> m.</p>
      solution: "<p><span class=\"chem\">\\mathbf{n} = (2, -1, 3) \\times (-1, 3, 0.5) = (-9.5, -4, 5)</span>、<span class=\"chem\">|\\mathbf{n}| = sqrt(131.25) ≈ 11.46</span>。<span class=\"chem\">\\mathbf{A_1A_2} = (2.5, 2.5, 3.5)</span> なので <span class=\"chem\">\\mathbf{A_1A_2} \\cdot \\mathbf{n} = -23.75 - 10 + 17.5 = -16.25</span>。長さは <span class=\"chem\">16.25 / 11.46 ≈ 1.42</span> m である。</p>",
    },

    // ── t3-3-q039 · numeric · exam · AHL · AHL 3.16 · 4 marks
    "t3-3-q039": {
      // EN: <p>A triangular plot of land on a hillside has corners at <span class="chem">P(12.4, 3.1, 2.6)</span>, <span class="chem">Q(30.8, -5.2, 7.9)</span> and <span class="chem">R(18.5, 21.7, 11.3)</span>, with coordinates in metres. Find the area of the plot, in square metres, correct to 3 significant figures.</p>
      stem: "<p>丘の斜面にある三角形の土地の頂点は <span class=\"chem\">P(12.4, 3.1, 2.6)</span>、<span class=\"chem\">Q(30.8, -5.2, 7.9)</span>、<span class=\"chem\">R(18.5, 21.7, 11.3)</span> にあり、座標の単位はメートルである。この土地の面積を平方メートル単位で求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: The plot is not horizontal, so do not use only the <span class="chem">x</span>- and <span class="chem">y</span>-coordinates.
        "この土地は水平ではないので、<span class=\"chem\">x</span> 座標と <span class=\"chem\">y</span> 座標だけを使ってはいけません。",
        // EN: Area <span class="chem">= (1/2)|\mathbf{PQ} \times \mathbf{PR}|</span>.
        "面積 <span class=\"chem\">= (1/2)|\\mathbf{PQ} \\times \\mathbf{PR}|</span>。",
      ],
      // EN: <p><span class="chem">\mathbf{PQ} = (18.4, -8.3, 5.3)</span>, <span class="chem">\mathbf{PR} = (6.1, 18.6, 8.7)</span>. <span class="chem">\mathbf{PQ} \times \mathbf{PR} ≈ (-170.79, -127.75, 392.87)</span>, with magnitude <span class="chem">≈ 447.0</span>. The area is <span class="chem">≈ 224</span> square metres.</p>
      solution: "<p><span class=\"chem\">\\mathbf{PQ} = (18.4, -8.3, 5.3)</span>、<span class=\"chem\">\\mathbf{PR} = (6.1, 18.6, 8.7)</span>。<span class=\"chem\">\\mathbf{PQ} \\times \\mathbf{PR} ≈ (-170.79, -127.75, 392.87)</span> で、その大きさは <span class=\"chem\">≈ 447.0</span>。面積は <span class=\"chem\">≈ 224</span> 平方メートルである。</p>",
    },

    // ── t3-3-q040 · numeric · exam · AHL · AHL 3.18 · 5 marks
    "t3-3-q040": {
      // EN: <p>The line <span class="chem">L</span> passes through <span class="chem">A(2, -1, 4)</span> and <span class="chem">B(-3, 5, 1.5)</span>. Find the acute angle between <span class="chem">L</span> and the plane <span class="chem">3x - 4y + 2.5z = 7</span>, in degrees, correct to 3 significant figures.</p>
      stem: "<p>直線 <span class=\"chem\">L</span> は <span class=\"chem\">A(2, -1, 4)</span> と <span class=\"chem\">B(-3, 5, 1.5)</span> を通る。<span class=\"chem\">L</span> と平面 <span class=\"chem\">3x - 4y + 2.5z = 7</span> のなす鋭角を度数法で求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: A direction vector for <span class="chem">L</span> is <span class="chem">\mathbf{AB} = (-5, 6, -2.5)</span>; a normal to the plane is <span class="chem">(3, -4, 2.5)</span>.
        "<span class=\"chem\">L</span> の方向ベクトルの一つは <span class=\"chem\">\\mathbf{AB} = (-5, 6, -2.5)</span>、平面の法線ベクトルの一つは <span class=\"chem\">(3, -4, 2.5)</span> です。",
        // EN: The angle between a line and a plane uses sine: <span class="chem">sin phi = |\mathbf{b} \cdot \mathbf{n}| / (|\mathbf{b}||\mathbf{n}|)</span>.
        "直線と平面のなす角には正弦を使います：<span class=\"chem\">sin phi = |\\mathbf{b} \\cdot \\mathbf{n}| / (|\\mathbf{b}||\\mathbf{n}|)</span>。",
      ],
      // EN: <p><span class="chem">\mathbf{b} = (-5, 6, -2.5)</span>, <span class="chem">\mathbf{n} = (3, -4, 2.5)</span>. <span class="chem">\mathbf{b} \cdot \mathbf{n} = -15 - 24 - 6.25 = -45.25</span>, <span class="chem">|\mathbf{b}| = sqrt(67.25)</span>, <span class="chem">|\mathbf{n}| = sqrt(31.25)</span>. So <span class="chem">sin phi = 45.25 / sqrt(67.25 × 31.25) ≈ 0.9871</span> and <span class="chem">phi ≈ 80.8°</span>.</p>
      solution: "<p><span class=\"chem\">\\mathbf{b} = (-5, 6, -2.5)</span>、<span class=\"chem\">\\mathbf{n} = (3, -4, 2.5)</span>。<span class=\"chem\">\\mathbf{b} \\cdot \\mathbf{n} = -15 - 24 - 6.25 = -45.25</span>、<span class=\"chem\">|\\mathbf{b}| = sqrt(67.25)</span>、<span class=\"chem\">|\\mathbf{n}| = sqrt(31.25)</span>。よって <span class=\"chem\">sin phi = 45.25 / sqrt(67.25 × 31.25) ≈ 0.9871</span> で、<span class=\"chem\">phi ≈ 80.8°</span> です。</p>",
    },

    // ── t3-3-q041 · numeric · exam · AHL · AHL 3.16, 3.18 · 6 marks
    "t3-3-q041": {
      // EN: <p>A flat solar panel is fixed on a roof. Three of its corners have coordinates <span class="chem">P(0, 0, 1.2)</span>, <span class="chem">Q(4.5, 0.6, 2.8)</span> and <span class="chem">R(-0.8, 3.0, 1.5)</span>, in metres, where the <span class="chem">z</span>-axis points vertically upwards and the ground is the plane <span class="chem">z = 0</span>. Find the angle between the panel and the horizontal ground, in degrees, correct to 3 significant figures.</p>
      stem: "<p>平らな太陽光パネルが屋根に固定されている。その三つの角の座標は <span class=\"chem\">P(0, 0, 1.2)</span>、<span class=\"chem\">Q(4.5, 0.6, 2.8)</span>、<span class=\"chem\">R(-0.8, 3.0, 1.5)</span>（単位はメートル）であり、<span class=\"chem\">z</span> 軸は鉛直上向き、地面は平面 <span class=\"chem\">z = 0</span> である。パネルと水平な地面のなす角を度数法で求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: this is the angle between two planes: the plane of the panel and the plane <span class="chem">z = 0</span>. Use their normals.
        "解読：これは 2 平面のなす角、つまりパネルを含む平面と平面 <span class=\"chem\">z = 0</span> のなす角です。それらの法線ベクトルを使います。",
        // EN: A normal to the panel is <span class="chem">\mathbf{PQ} \times \mathbf{PR}</span>; a normal to the ground is <span class="chem">\mathbf{k} = (0, 0, 1)</span>.
        "パネルの法線ベクトルの一つは <span class=\"chem\">\\mathbf{PQ} \\times \\mathbf{PR}</span>、地面の法線ベクトルの一つは <span class=\"chem\">\\mathbf{k} = (0, 0, 1)</span> です。",
        // EN: Use <span class="chem">cos theta = |\mathbf{n_1} \cdot \mathbf{n_2}| / (|\mathbf{n_1}||\mathbf{n_2}|)</span>.
        "<span class=\"chem\">cos theta = |\\mathbf{n_1} \\cdot \\mathbf{n_2}| / (|\\mathbf{n_1}||\\mathbf{n_2}|)</span> を使います。",
      ],
      // EN: <p><strong>Decode:</strong> angle between the panel plane and the ground plane, via normals.</p><p><span class="chem">\mathbf{PQ} = (4.5, 0.6, 1.6)</span>, <span class="chem">\mathbf{PR} = (-0.8, 3.0, 0.3)</span>. <span class="chem">\mathbf{n} = \mathbf{PQ} \times \mathbf{PR} = (-4.62, -2.63, 13.98)</span>. Then <span class="chem">cos theta = 13.98 / |\mathbf{n}| = 13.98 / 14.957 ≈ 0.9347</span>, so <span class="chem">theta ≈ 20.8°</span>.</p>
      solution: "<p><strong>解読：</strong>法線ベクトルを使って、パネルの平面と地面の平面のなす角を求める。</p><p><span class=\"chem\">\\mathbf{PQ} = (4.5, 0.6, 1.6)</span>、<span class=\"chem\">\\mathbf{PR} = (-0.8, 3.0, 0.3)</span>。<span class=\"chem\">\\mathbf{n} = \\mathbf{PQ} \\times \\mathbf{PR} = (-4.62, -2.63, 13.98)</span>。すると <span class=\"chem\">cos theta = 13.98 / |\\mathbf{n}| = 13.98 / 14.957 ≈ 0.9347</span> なので、<span class=\"chem\">theta ≈ 20.8°</span> である。</p>",
    },

    // ── t3-3-q042 · numeric · exam · AHL · AHL 3.14, 3.18 · 5 marks
    "t3-3-q042": {
      // EN: <p>A laser at <span class="chem">S(-2, 5, 9)</span> fires a straight beam in the direction <span class="chem">(1.5, -0.8, -2.2)</span>. The beam hits a mirror lying in the plane <span class="chem">x + 2y + 3z = 6</span> at the point <span class="chem">M</span>. All distances are in metres. Find the distance <span class="chem">SM</span>, correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">S(-2, 5, 9)</span> にあるレーザーが方向 <span class=\"chem\">(1.5, -0.8, -2.2)</span> にまっすぐな光線を発射する。光線は平面 <span class=\"chem\">x + 2y + 3z = 6</span> 上にある鏡に点 <span class=\"chem\">M</span> で当たる。距離の単位はすべてメートルである。距離 <span class=\"chem\">SM</span> を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: The beam is the line <span class="chem">\mathbf{r} = (-2, 5, 9) + lambda(1.5, -0.8, -2.2)</span>.
        "光線は直線 <span class=\"chem\">\\mathbf{r} = (-2, 5, 9) + lambda(1.5, -0.8, -2.2)</span> です。",
        // EN: Substitute into the plane equation to find <span class="chem">lambda</span> at <span class="chem">M</span>.
        "平面の方程式に代入して、<span class=\"chem\">M</span> における <span class=\"chem\">lambda</span> を求めます。",
        // EN: Then <span class="chem">SM = |lambda| × |(1.5, -0.8, -2.2)|</span>.
        "そして <span class=\"chem\">SM = |lambda| × |(1.5, -0.8, -2.2)|</span> です。",
      ],
      // EN: <p>Substituting: <span class="chem">(-2 + 1.5lambda) + 2(5 - 0.8lambda) + 3(9 - 2.2lambda) = 6 => 35 - 6.7lambda = 6 => lambda = 29/6.7 ≈ 4.328</span>. <span class="chem">|(1.5, -0.8, -2.2)| = sqrt(7.73) ≈ 2.780</span>, so <span class="chem">SM ≈ 4.328 × 2.780 ≈ 12.0</span> m.</p>
      solution: "<p>代入すると <span class=\"chem\">(-2 + 1.5lambda) + 2(5 - 0.8lambda) + 3(9 - 2.2lambda) = 6 => 35 - 6.7lambda = 6 => lambda = 29/6.7 ≈ 4.328</span>。<span class=\"chem\">|(1.5, -0.8, -2.2)| = sqrt(7.73) ≈ 2.780</span> なので <span class=\"chem\">SM ≈ 4.328 × 2.780 ≈ 12.0</span> m である。</p>",
    },

    // ── t3-3-q043 · short · exam · AHL · AHL 3.14–3.17 · 12 marks
    "t3-3-q043": {
      // EN: <p>The lines <span class="chem">L_1</span> and <span class="chem">L_2</span> have equations <span class="chem">L_1: \mathbf{r} = (1.2, -0.5, 3) + lambda(2, 1.5, -1)</span> and <span class="chem">L_2: \mathbf{r} = (1.6, -5, 2.5) + mu(1.2, 2.5, -0.5)</span>.</p><p>(a) Show that <span class="chem">L_1</span> and <span class="chem">L_2</span> intersect, and find the coordinates of the point of intersection <span class="chem">X</span>. <strong>[5 marks]</strong></p><p>(b) Find the acute angle between <span class="chem">L_1</span> and <span class="chem">L_2</span>, in degrees. <strong>[3 marks]</strong></p><p>(c) Find the Cartesian equation of the plane containing <span class="chem">L_1</span> and <span class="chem">L_2</span>, in the form <span class="chem">ax + by + cz = d</span> where <span class="chem">a, b, c, d \in \mathbb{Z}</span>. <strong>[4 marks]</strong></p>
      stem: "<p>直線 <span class=\"chem\">L_1</span> と <span class=\"chem\">L_2</span> の方程式は <span class=\"chem\">L_1: \\mathbf{r} = (1.2, -0.5, 3) + lambda(2, 1.5, -1)</span>、<span class=\"chem\">L_2: \\mathbf{r} = (1.6, -5, 2.5) + mu(1.2, 2.5, -0.5)</span> である。</p><p>(a) <span class=\"chem\">L_1</span> と <span class=\"chem\">L_2</span> が交わることを示し (Show that)、交点 <span class=\"chem\">X</span> の座標を求めなさい (find)。 <strong>[5 marks]</strong></p><p>(b) <span class=\"chem\">L_1</span> と <span class=\"chem\">L_2</span> のなす鋭角を度数法で求めなさい (Find)。 <strong>[3 marks]</strong></p><p>(c) <span class=\"chem\">L_1</span> と <span class=\"chem\">L_2</span> を含む平面の直交座標方程式を、<span class=\"chem\">a, b, c, d \\in \\mathbb{Z}</span> として <span class=\"chem\">ax + by + cz = d</span> の形で求めなさい (Find)。 <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Use your GDC to solve the first two component equations simultaneously, then check the third.
        "GDC を使って最初の二つの成分の式を連立して解き、残りの一つで確かめます。",
        // EN: For (c), the normal is perpendicular to both direction vectors. Multiply it by a suitable number to clear the decimals.
        "(c) では、法線ベクトルは両方の方向ベクトルに垂直です。小数をなくすために適当な数を掛けます。",
      ],
      // EN: <p>(a) <span class="chem">1.2 + 2lambda = 1.6 + 1.2mu</span>, <span class="chem">-0.5 + 1.5lambda = -5 + 2.5mu</span>, <span class="chem">3 - lambda = 2.5 - 0.5mu</span>. Solving the first two (GDC): <span class="chem">lambda = 2</span>, <span class="chem">mu = 3</span>. Third: <span class="chem">3 - 2 = 1</span> and <span class="chem">2.5 - 1.5 = 1</span>, consistent. So the lines intersect at <span class="chem">X(5.2, 2.5, 1)</span>.</p><p>(b) <span class="chem">\mathbf{b_1} \cdot \mathbf{b_2} = 2.4 + 3.75 + 0.5 = 6.65</span>, <span class="chem">|\mathbf{b_1}| = sqrt(7.25)</span>, <span class="chem">|\mathbf{b_2}| = sqrt(7.94)</span>. <span class="chem">cos theta = 6.65 / sqrt(7.25 × 7.94) ≈ 0.8765</span>, so <span class="chem">theta ≈ 28.8°</span>.</p><p>(c) <span class="chem">\mathbf{b_1} \times \mathbf{b_2} = (1.75, -0.2, 3.2)</span>; multiply by 20: <span class="chem">\mathbf{n} = (35, -4, 64)</span>. With <span class="chem">X</span>: <span class="chem">35(5.2) - 4(2.5) + 64(1) = 236</span>, so the plane is <span class="chem">35x - 4y + 64z = 236</span>.</p>
      answer: "<p>(a) <span class=\"chem\">1.2 + 2lambda = 1.6 + 1.2mu</span>、<span class=\"chem\">-0.5 + 1.5lambda = -5 + 2.5mu</span>、<span class=\"chem\">3 - lambda = 2.5 - 0.5mu</span>。最初の二つを解くと（GDC）<span class=\"chem\">lambda = 2</span>、<span class=\"chem\">mu = 3</span>。三つ目：<span class=\"chem\">3 - 2 = 1</span>、<span class=\"chem\">2.5 - 1.5 = 1</span> で一致する。よって 2 直線は <span class=\"chem\">X(5.2, 2.5, 1)</span> で交わる。</p><p>(b) <span class=\"chem\">\\mathbf{b_1} \\cdot \\mathbf{b_2} = 2.4 + 3.75 + 0.5 = 6.65</span>、<span class=\"chem\">|\\mathbf{b_1}| = sqrt(7.25)</span>、<span class=\"chem\">|\\mathbf{b_2}| = sqrt(7.94)</span>。<span class=\"chem\">cos theta = 6.65 / sqrt(7.25 × 7.94) ≈ 0.8765</span> なので <span class=\"chem\">theta ≈ 28.8°</span>。</p><p>(c) <span class=\"chem\">\\mathbf{b_1} \\times \\mathbf{b_2} = (1.75, -0.2, 3.2)</span>。20 を掛けて <span class=\"chem\">\\mathbf{n} = (35, -4, 64)</span>。<span class=\"chem\">X</span> を用いると <span class=\"chem\">35(5.2) - 4(2.5) + 64(1) = 236</span> なので、平面は <span class=\"chem\">35x - 4y + 64z = 236</span> である。</p>",
      markscheme: [
        // EN: M1: equates components using two different parameters.
        "M1：異なる二つの媒介変数を用いて成分を等置する。",
        // EN: M1: solves two of the equations (GDC acceptable).
        "M1：二つの方程式を解く（GDC 可）。",
        // EN: A1: <span class="chem">lambda = 2</span>, <span class="chem">mu = 3</span>.
        "A1：<span class=\"chem\">lambda = 2</span>、<span class=\"chem\">mu = 3</span>。",
        // EN: R1: shows the third equation is satisfied (both sides equal 1).
        "R1：三つ目の方程式が満たされる（両辺とも 1）ことを示す。",
        // EN: A1: <span class="chem">X(5.2, 2.5, 1)</span>.
        "A1：<span class=\"chem\">X(5.2, 2.5, 1)</span>。",
        // EN: M1: uses the scalar product of the direction vectors.
        "M1：方向ベクトルの内積を用いる。",
        // EN: A1: <span class="chem">cos theta ≈ 0.877</span> (or scalar product 6.65 with both magnitudes).
        "A1：<span class=\"chem\">cos theta ≈ 0.877</span>（または内積 6.65 と両方の大きさ）。",
        // EN: A1: <span class="chem">theta ≈ 28.8°</span>.
        "A1：<span class=\"chem\">theta ≈ 28.8°</span>。",
        // EN: M1: finds the vector product of the direction vectors.
        "M1：方向ベクトルの外積を求める。",
        // EN: A1: <span class="chem">(1.75, -0.2, 3.2)</span> or an integer multiple such as <span class="chem">(35, -4, 64)</span>.
        "A1：<span class=\"chem\">(1.75, -0.2, 3.2)</span>、または <span class=\"chem\">(35, -4, 64)</span> のような整数倍。",
        // EN: M1: substitutes a point on either line.
        "M1：いずれかの直線上の点を代入する。",
        // EN: A1: <span class="chem">35x - 4y + 64z = 236</span> (or an integer multiple).
        "A1：<span class=\"chem\">35x - 4y + 64z = 236</span>（またはその整数倍）。",
      ],
    },

    // ── t3-3-q044 · short · exam · AHL · AHL 3.16–3.18 · 10 marks
    "t3-3-q044": {
      // EN: <p>The plane <span class="chem">Π</span> has vector equation <span class="chem">\mathbf{r} = (1, 0, 2) + s(2, -1, 1) + t(0.5, 3, -2)</span>, where <span class="chem">s, t \in \mathbb{R}</span>.</p><p>(a) Show that the Cartesian equation of <span class="chem">Π</span> is <span class="chem">-2x + 9y + 13z = 24</span>. <strong>[4 marks]</strong></p><p>The line <span class="chem">L</span> has equation <span class="chem">\mathbf{r} = (4, 4, -1) + lambda(1, 2, 1.5)</span>.</p><p>(b) Find the coordinates of the point where <span class="chem">L</span> meets <span class="chem">Π</span>. <strong>[3 marks]</strong></p><p>(c) Find the acute angle between <span class="chem">L</span> and <span class="chem">Π</span>, in degrees. <strong>[3 marks]</strong></p>
      stem: "<p>平面 <span class=\"chem\">Π</span> のベクトル方程式は <span class=\"chem\">\\mathbf{r} = (1, 0, 2) + s(2, -1, 1) + t(0.5, 3, -2)</span> である。ただし <span class=\"chem\">s, t \\in \\mathbb{R}</span> とする。</p><p>(a) <span class=\"chem\">Π</span> の直交座標方程式が <span class=\"chem\">-2x + 9y + 13z = 24</span> であることを示しなさい (Show that)。 <strong>[4 marks]</strong></p><p>直線 <span class=\"chem\">L</span> の方程式は <span class=\"chem\">\\mathbf{r} = (4, 4, -1) + lambda(1, 2, 1.5)</span> である。</p><p>(b) <span class=\"chem\">L</span> と <span class=\"chem\">Π</span> の交点の座標を求めなさい (Find)。 <strong>[3 marks]</strong></p><p>(c) <span class=\"chem\">L</span> と <span class=\"chem\">Π</span> のなす鋭角を度数法で求めなさい (Find)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: the vector form <span class="chem">\mathbf{r} = \mathbf{a} + s\mathbf{b} + t\mathbf{c}</span> gives two directions in the plane; their vector product is a normal.
        "解読：ベクトル形式 <span class=\"chem\">\\mathbf{r} = \\mathbf{a} + s\\mathbf{b} + t\\mathbf{c}</span> は平面内の二つの方向を与えます。それらの外積が法線ベクトルです。",
        // EN: For (b), write <span class="chem">x, y, z</span> of <span class="chem">L</span> in terms of <span class="chem">lambda</span> and substitute.
        "(b) では、<span class=\"chem\">L</span> の <span class=\"chem\">x, y, z</span> を <span class=\"chem\">lambda</span> で表して代入します。",
        // EN: For (c), the angle between a line and a plane is <span class="chem">90°</span> minus the angle between the line and the normal.
        "(c) では、直線と平面のなす角は、<span class=\"chem\">90°</span> から直線と法線ベクトルのなす角を引いたものです。",
      ],
      // EN: <p>(a) <span class="chem">(2, -1, 1) \times (0.5, 3, -2) = ((-1)(-2) - (1)(3), (1)(0.5) - (2)(-2), (2)(3) - (-1)(0.5)) = (-1, 4.5, 6.5)</span>, so <span class="chem">\mathbf{n} = (-2, 9, 13)</span>. <span class="chem">(1, 0, 2) \cdot (-2, 9, 13) = -2 + 0 + 26 = 24</span>, so <span class="chem">-2x + 9y + 13z = 24</span>.</p><p>(b) <span class="chem">-2(4 + lambda) + 9(4 + 2lambda) + 13(-1 + 1.5lambda) = 24 => 15 + 35.5lambda = 24 => lambda = 18/71 ≈ 0.2535</span>. The point is <span class="chem">≈ (4.25, 4.51, -0.620)</span>.</p><p>(c) <span class="chem">sin phi = |(1, 2, 1.5) \cdot (-2, 9, 13)| / (|(1, 2, 1.5)||(-2, 9, 13)|) = 35.5 / (sqrt(7.25) sqrt(254)) ≈ 0.8272</span>, so <span class="chem">phi ≈ 55.8°</span>.</p>
      answer: "<p>(a) <span class=\"chem\">(2, -1, 1) \\times (0.5, 3, -2) = ((-1)(-2) - (1)(3), (1)(0.5) - (2)(-2), (2)(3) - (-1)(0.5)) = (-1, 4.5, 6.5)</span> なので <span class=\"chem\">\\mathbf{n} = (-2, 9, 13)</span>。<span class=\"chem\">(1, 0, 2) \\cdot (-2, 9, 13) = -2 + 0 + 26 = 24</span> なので <span class=\"chem\">-2x + 9y + 13z = 24</span>。</p><p>(b) <span class=\"chem\">-2(4 + lambda) + 9(4 + 2lambda) + 13(-1 + 1.5lambda) = 24 => 15 + 35.5lambda = 24 => lambda = 18/71 ≈ 0.2535</span>。その点は <span class=\"chem\">≈ (4.25, 4.51, -0.620)</span> である。</p><p>(c) <span class=\"chem\">sin phi = |(1, 2, 1.5) \\cdot (-2, 9, 13)| / (|(1, 2, 1.5)||(-2, 9, 13)|) = 35.5 / (sqrt(7.25) sqrt(254)) ≈ 0.8272</span> なので <span class=\"chem\">phi ≈ 55.8°</span>。</p>",
      markscheme: [
        // EN: M1: finds the vector product of the two direction vectors.
        "M1：二つの方向ベクトルの外積を求める。",
        // EN: A1: <span class="chem">(-1, 4.5, 6.5)</span> or a multiple such as <span class="chem">(-2, 9, 13)</span>.
        "A1：<span class=\"chem\">(-1, 4.5, 6.5)</span>、または <span class=\"chem\">(-2, 9, 13)</span> のような実数倍。",
        // EN: M1: uses <span class="chem">\mathbf{r} \cdot \mathbf{n} = \mathbf{a} \cdot \mathbf{n}</span> with <span class="chem">\mathbf{a} = (1, 0, 2)</span>.
        "M1：<span class=\"chem\">\\mathbf{a} = (1, 0, 2)</span> として <span class=\"chem\">\\mathbf{r} \\cdot \\mathbf{n} = \\mathbf{a} \\cdot \\mathbf{n}</span> を用いる。",
        // EN: A1: <span class="chem">\mathbf{a} \cdot \mathbf{n} = 24</span>, giving <span class="chem">-2x + 9y + 13z = 24</span> (AG).
        "A1：<span class=\"chem\">\\mathbf{a} \\cdot \\mathbf{n} = 24</span> より <span class=\"chem\">-2x + 9y + 13z = 24</span> を得る (AG)。",
        // EN: M1: substitutes the parametric form of <span class="chem">L</span> into the equation of <span class="chem">Π</span>.
        "M1：<span class=\"chem\">L</span> の媒介変数表示を <span class=\"chem\">Π</span> の方程式に代入する。",
        // EN: A1: <span class="chem">lambda = 18/71 ≈ 0.254</span>.
        "A1：<span class=\"chem\">lambda = 18/71 ≈ 0.254</span>。",
        // EN: A1: <span class="chem">(4.25, 4.51, -0.620)</span>.
        "A1：<span class=\"chem\">(4.25, 4.51, -0.620)</span>。",
        // EN: M1: uses sine (or <span class="chem">90° -</span> the angle with the normal) with the line direction and plane normal.
        "M1：直線の方向ベクトルと平面の法線ベクトルで正弦（または <span class=\"chem\">90° -</span> 法線ベクトルとのなす角）を用いる。",
        // EN: A1: <span class="chem">sin phi ≈ 0.827</span>.
        "A1：<span class=\"chem\">sin phi ≈ 0.827</span>。",
        // EN: A1: <span class="chem">phi ≈ 55.8°</span>.
        "A1：<span class=\"chem\">phi ≈ 55.8°</span>。",
      ],
    },

    // ── t3-3-q045 · numeric · exam · AHL · AHL 3.12, 3.14 · 6 marks
    "t3-3-q045": {
      // EN: <p>A submarine is at the point <span class="chem">(120, -40, -15)</span> and travels in a straight line at a constant speed of <span class="unit">4.5 m s-1</span> towards a research station at <span class="chem">(-60, 210, -90)</span>. Coordinates are in metres and the <span class="chem">z</span>-axis points vertically upwards from sea level. Find the time it takes for the submarine to reach a depth of 50 m below sea level, in seconds, correct to 3 significant figures.</p>
      stem: "<p>潜水艦が点 <span class=\"chem\">(120, -40, -15)</span> にあり、<span class=\"chem\">(-60, 210, -90)</span> にある研究基地に向かって一定の速さ <span class=\"unit\">4.5 m s-1</span> で直進する。座標の単位はメートルで、<span class=\"chem\">z</span> 軸は海面から鉛直上向きである。潜水艦が海面下 50 m の深さに達するまでの時間を秒単位で求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: "a depth of 50 m below sea level" means <span class="chem">z = -50</span>. You need the velocity vector, which is the unit direction vector rescaled to speed 4.5.
        "解読：「海面下 50 m の深さ」とは <span class=\"chem\">z = -50</span> のことです。速度ベクトルが必要で、それは単位方向ベクトルを速さ 4.5 に合わせて拡大したものです。",
        // EN: The direction is <span class="chem">(-180, 250, -75)</span>, with magnitude <span class="chem">≈ 317.06</span>.
        "方向は <span class=\"chem\">(-180, 250, -75)</span> で、その大きさは <span class=\"chem\">≈ 317.06</span> です。",
        // EN: The <span class="chem">z</span>-component of the velocity is <span class="chem">4.5 × (-75)/317.06</span>. Solve <span class="chem">-15 + v_z t = -50</span>.
        "速度の <span class=\"chem\">z</span> 成分は <span class=\"chem\">4.5 × (-75)/317.06</span> です。<span class=\"chem\">-15 + v_z t = -50</span> を解きます。",
      ],
      // EN: <p><strong>Decode:</strong> depth 50 m means <span class="chem">z = -50</span>; the velocity is the rescaled direction.</p><p>Direction <span class="chem">(-180, 250, -75)</span>, magnitude <span class="chem">sqrt(100525) ≈ 317.06</span>. Velocity <span class="chem">\mathbf{v} = (4.5/317.06)(-180, 250, -75) ≈ (-2.555, 3.548, -1.0645)</span>. Then <span class="chem">-15 - 1.0645t = -50 => t ≈ 32.9</span> s.</p>
      solution: "<p><strong>解読：</strong>深さ 50 m とは <span class=\"chem\">z = -50</span> のことであり、速度は方向ベクトルを拡大したものである。</p><p>方向 <span class=\"chem\">(-180, 250, -75)</span>、大きさ <span class=\"chem\">sqrt(100525) ≈ 317.06</span>。速度 <span class=\"chem\">\\mathbf{v} = (4.5/317.06)(-180, 250, -75) ≈ (-2.555, 3.548, -1.0645)</span>。すると <span class=\"chem\">-15 - 1.0645t = -50 => t ≈ 32.9</span> s。</p>",
    },

    // ── t3-3-q046 · numeric · exam · AHL · AHL 3.14 · 5 marks
    "t3-3-q046": {
      // EN: <p>Two straight cables in a stadium roof follow the lines <span class="chem">(x - 2)/3.5 = (y + 1)/(-2) = z/1.5</span> and <span class="chem">(x + 4)/(-1) = (y - 3)/2.5 = (z - 1)/(-4)</span>. Find the acute angle between the two cables, in degrees, correct to 3 significant figures.</p>
      stem: "<p>競技場の屋根にある 2 本のまっすぐなケーブルが、直線 <span class=\"chem\">(x - 2)/3.5 = (y + 1)/(-2) = z/1.5</span> と <span class=\"chem\">(x + 4)/(-1) = (y - 3)/2.5 = (z - 1)/(-4)</span> に沿っている。2 本のケーブルのなす鋭角を度数法で求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: the angle between two lines is found from their direction vectors, which are the denominators of the Cartesian forms.
        "解読：2 直線のなす角は方向ベクトルから求めます。方向ベクトルは直交座標方程式の分母です。",
        // EN: The direction vectors are <span class="chem">(3.5, -2, 1.5)</span> and <span class="chem">(-1, 2.5, -4)</span>. Their scalar product is negative: what does that tell you?
        "方向ベクトルは <span class=\"chem\">(3.5, -2, 1.5)</span> と <span class=\"chem\">(-1, 2.5, -4)</span> です。それらの内積は負です。これは何を意味するでしょうか。",
        // EN: Use <span class="chem">cos theta = |\mathbf{b_1} \cdot \mathbf{b_2}| / (|\mathbf{b_1}||\mathbf{b_2}|)</span> for the acute angle.
        "鋭角を求めるには <span class=\"chem\">cos theta = |\\mathbf{b_1} \\cdot \\mathbf{b_2}| / (|\\mathbf{b_1}||\\mathbf{b_2}|)</span> を使います。",
      ],
      // EN: <p><span class="chem">\mathbf{b_1} \cdot \mathbf{b_2} = -3.5 - 5 - 6 = -14.5</span>, <span class="chem">|\mathbf{b_1}| = sqrt(18.5)</span>, <span class="chem">|\mathbf{b_2}| = sqrt(23.25)</span>. Without the modulus, <span class="chem">cos theta ≈ -0.6992</span> gives <span class="chem">134.4°</span>, which is obtuse. The acute angle is <span class="chem">arccos(0.6992) ≈ 45.6°</span>.</p>
      solution: "<p><span class=\"chem\">\\mathbf{b_1} \\cdot \\mathbf{b_2} = -3.5 - 5 - 6 = -14.5</span>、<span class=\"chem\">|\\mathbf{b_1}| = sqrt(18.5)</span>、<span class=\"chem\">|\\mathbf{b_2}| = sqrt(23.25)</span>。絶対値をとらないと <span class=\"chem\">cos theta ≈ -0.6992</span> から <span class=\"chem\">134.4°</span> となり、これは鈍角である。鋭角は <span class=\"chem\">arccos(0.6992) ≈ 45.6°</span> である。</p>",
    },

    // ── t3-3-q047 · short · exam · AHL · AHL 3.14–3.16, 3.18 · 10 marks
    "t3-3-q047": {
      // EN: <p>The planes <span class="chem">Π_1: 1.5x - 2y + z = 4</span> and <span class="chem">Π_2: x + 3y - 2.5z = -1</span> meet in the line <span class="chem">L</span>.</p><p>(a) Find a direction vector for <span class="chem">L</span>. <strong>[2 marks]</strong></p><p>(b) Find the point on <span class="chem">L</span> with <span class="chem">z = 0</span>, and hence write down a vector equation of <span class="chem">L</span>. <strong>[3 marks]</strong></p><p>(c) Find the acute angle between <span class="chem">Π_1</span> and <span class="chem">Π_2</span>, in degrees. <strong>[2 marks]</strong></p><p>(d) Find the shortest distance from the point <span class="chem">P(3, 2, 5)</span> to <span class="chem">L</span>. <strong>[3 marks]</strong></p>
      stem: "<p>平面 <span class=\"chem\">Π_1: 1.5x - 2y + z = 4</span> と <span class=\"chem\">Π_2: x + 3y - 2.5z = -1</span> は直線 <span class=\"chem\">L</span> で交わる。</p><p>(a) <span class=\"chem\">L</span> の方向ベクトルを一つ求めなさい (Find)。 <strong>[2 marks]</strong></p><p>(b) <span class=\"chem\">L</span> 上で <span class=\"chem\">z = 0</span> となる点を求め (Find)、これを用いて (hence) <span class=\"chem\">L</span> のベクトル方程式を一つ書きなさい (write down)。 <strong>[3 marks]</strong></p><p>(c) <span class=\"chem\">Π_1</span> と <span class=\"chem\">Π_2</span> のなす鋭角を度数法で求めなさい (Find)。 <strong>[2 marks]</strong></p><p>(d) 点 <span class=\"chem\">P(3, 2, 5)</span> から <span class=\"chem\">L</span> までの最短距離を求めなさい (Find)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: The line of intersection is perpendicular to both normal vectors.
        "交線は両方の法線ベクトルに垂直です。",
        // EN: Set <span class="chem">z = 0</span> and solve the two equations on your GDC.
        "<span class=\"chem\">z = 0</span> とおき、GDC で二つの方程式を解きます。",
        // EN: For (d), <span class="chem">d = |\mathbf{AP} \times \mathbf{b}| / |\mathbf{b}|</span> where <span class="chem">A</span> is your point on <span class="chem">L</span>.
        "(d) では <span class=\"chem\">d = |\\mathbf{AP} \\times \\mathbf{b}| / |\\mathbf{b}|</span> を使います。ここで <span class=\"chem\">A</span> は <span class=\"chem\">L</span> 上で求めた点です。",
      ],
      // EN: <p>(a) <span class="chem">(1.5, -2, 1) \times (1, 3, -2.5) = (2, 4.75, 6.5)</span>, or <span class="chem">(8, 19, 26)</span>.</p><p>(b) With <span class="chem">z = 0</span>: <span class="chem">1.5x - 2y = 4</span> and <span class="chem">x + 3y = -1</span>, so <span class="chem">x = 20/13 ≈ 1.538</span>, <span class="chem">y = -11/13 ≈ -0.846</span>. <span class="chem">L: \mathbf{r} = (20/13, -11/13, 0) + t(8, 19, 26)</span>.</p><p>(c) <span class="chem">\mathbf{n_1} \cdot \mathbf{n_2} = 1.5 - 6 - 2.5 = -7</span>, <span class="chem">|\mathbf{n_1}| = sqrt(7.25)</span>, <span class="chem">|\mathbf{n_2}| = sqrt(16.25)</span>. <span class="chem">cos theta = 7 / sqrt(7.25 × 16.25) ≈ 0.6449</span>, so <span class="chem">theta ≈ 49.8°</span>.</p><p>(d) With <span class="chem">A(20/13, -11/13, 0)</span>, <span class="chem">d = |\mathbf{AP} \times \mathbf{b}| / |\mathbf{b}| ≈ 0.653</span> (or minimise <span class="chem">|\mathbf{AP} - t\mathbf{b}|</span> on the GDC).</p>
      answer: "<p>(a) <span class=\"chem\">(1.5, -2, 1) \\times (1, 3, -2.5) = (2, 4.75, 6.5)</span>、または <span class=\"chem\">(8, 19, 26)</span>。</p><p>(b) <span class=\"chem\">z = 0</span> のとき <span class=\"chem\">1.5x - 2y = 4</span>、<span class=\"chem\">x + 3y = -1</span> なので <span class=\"chem\">x = 20/13 ≈ 1.538</span>、<span class=\"chem\">y = -11/13 ≈ -0.846</span>。<span class=\"chem\">L: \\mathbf{r} = (20/13, -11/13, 0) + t(8, 19, 26)</span>。</p><p>(c) <span class=\"chem\">\\mathbf{n_1} \\cdot \\mathbf{n_2} = 1.5 - 6 - 2.5 = -7</span>、<span class=\"chem\">|\\mathbf{n_1}| = sqrt(7.25)</span>、<span class=\"chem\">|\\mathbf{n_2}| = sqrt(16.25)</span>。<span class=\"chem\">cos theta = 7 / sqrt(7.25 × 16.25) ≈ 0.6449</span> なので <span class=\"chem\">theta ≈ 49.8°</span>。</p><p>(d) <span class=\"chem\">A(20/13, -11/13, 0)</span> とすると <span class=\"chem\">d = |\\mathbf{AP} \\times \\mathbf{b}| / |\\mathbf{b}| ≈ 0.653</span>（または GDC で <span class=\"chem\">|\\mathbf{AP} - t\\mathbf{b}|</span> を最小化する）。</p>",
      markscheme: [
        // EN: M1: uses <span class="chem">\mathbf{n_1} \times \mathbf{n_2}</span>.
        "M1：<span class=\"chem\">\\mathbf{n_1} \\times \\mathbf{n_2}</span> を用いる。",
        // EN: A1: <span class="chem">(2, 4.75, 6.5)</span> or any non-zero multiple.
        "A1：<span class=\"chem\">(2, 4.75, 6.5)</span>、または零でない任意の実数倍。",
        // EN: M1: solves the two plane equations with <span class="chem">z = 0</span> (GDC acceptable).
        "M1：<span class=\"chem\">z = 0</span> として二つの平面の方程式を解く（GDC 可）。",
        // EN: A1: <span class="chem">(1.54, -0.846, 0)</span> (exactly <span class="chem">(20/13, -11/13, 0)</span>).
        "A1：<span class=\"chem\">(1.54, -0.846, 0)</span>（正確には <span class=\"chem\">(20/13, -11/13, 0)</span>）。",
        // EN: A1: a correct vector equation with <span class="chem">\mathbf{r} =</span>.
        "A1：<span class=\"chem\">\\mathbf{r} =</span> を含む正しいベクトル方程式。",
        // EN: M1: uses the normals with <span class="chem">cos theta = |\mathbf{n_1} \cdot \mathbf{n_2}| / (|\mathbf{n_1}||\mathbf{n_2}|)</span>.
        "M1：法線ベクトルを用いて <span class=\"chem\">cos theta = |\\mathbf{n_1} \\cdot \\mathbf{n_2}| / (|\\mathbf{n_1}||\\mathbf{n_2}|)</span> を使う。",
        // EN: A1: <span class="chem">theta ≈ 49.8°</span>.
        "A1：<span class=\"chem\">theta ≈ 49.8°</span>。",
        // EN: M1: a valid method for point-to-line distance (vector product formula, or perpendicular foot).
        "M1：点と直線の距離を求める正しい方法（外積の公式、または垂線の足）。",
        // EN: A1: <span class="chem">\mathbf{AP} ≈ (1.462, 2.846, 5)</span> and a correct product or foot parameter <span class="chem">t ≈ 0.711</span> (for the direction <span class="chem">(2, 4.75, 6.5)</span>).
        "A1：<span class=\"chem\">\\mathbf{AP} ≈ (1.462, 2.846, 5)</span> と、正しい積または垂線の足の媒介変数 <span class=\"chem\">t ≈ 0.711</span>（方向 <span class=\"chem\">(2, 4.75, 6.5)</span> の場合）。",
        // EN: A1: distance <span class="chem">≈ 0.653</span>.
        "A1：距離 <span class=\"chem\">≈ 0.653</span>。",
      ],
    },

    // ── t3-3-q048 · numeric · challenge · AHL · AHL 3.12, 3.14 · 6 marks
    "t3-3-q048": {
      // EN: <p>A coastguard radar station is at the origin and can detect ships up to 12.5 km away. At noon a ship is at <span class="chem">(-20, 6)</span> and it sails with constant velocity <span class="chem">(8, -1.5)</span> km per hour, so <span class="chem">t</span> hours after noon its position is <span class="chem">\mathbf{r} = (-20, 6) + t(8, -1.5)</span>. Find the length of time, in hours, for which the ship can be detected by the radar, correct to 3 significant figures.</p>
      stem: "<p>沿岸警備隊のレーダー基地が原点にあり、12.5 km 以内の船を探知できる。正午に船が <span class=\"chem\">(-20, 6)</span> にあり、一定の速度 <span class=\"chem\">(8, -1.5)</span> km 毎時で航行するので、正午の <span class=\"chem\">t</span> 時間後の位置は <span class=\"chem\">\\mathbf{r} = (-20, 6) + t(8, -1.5)</span> である。船がレーダーで探知できる時間の長さを時間単位で求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: "can be detected" means the distance from the origin is at most 12.5 km. You need the two times when <span class="chem">|\mathbf{r}(t)| = 12.5</span>, then the gap between them.
        "解読：「探知できる」とは原点からの距離が 12.5 km 以下であることです。<span class=\"chem\">|\\mathbf{r}(t)| = 12.5</span> となる二つの時刻を求め、その差をとります。",
        // EN: Write <span class="chem">|\mathbf{r}(t)|^2 = (-20 + 8t)^2 + (6 - 1.5t)^2 = 12.5^2</span>.
        "<span class=\"chem\">|\\mathbf{r}(t)|^2 = (-20 + 8t)^2 + (6 - 1.5t)^2 = 12.5^2</span> と書きます。",
        // EN: Solve the quadratic on your GDC (or intersect the graph of <span class="chem">|\mathbf{r}(t)|</span> with <span class="chem">y = 12.5</span>) and subtract the two roots.
        "GDC でこの二次方程式を解き（または <span class=\"chem\">|\\mathbf{r}(t)|</span> のグラフと <span class=\"chem\">y = 12.5</span> の交点を求め）、二つの解の差をとります。",
      ],
      // EN: <p><strong>Decode:</strong> detected while <span class="chem">|\mathbf{r}(t)| &lt;= 12.5</span>, so find when the ship enters and leaves the circle of radius 12.5.</p><p><span class="chem">(-20 + 8t)^2 + (6 - 1.5t)^2 = 156.25 => 66.25t^2 - 338t + 279.75 = 0</span>. GDC: <span class="chem">t ≈ 1.0394</span> and <span class="chem">t ≈ 4.0625</span>. The ship is detectable for <span class="chem">4.0625 - 1.0394 ≈ 3.02</span> hours.</p>
      solution: "<p><strong>解読：</strong><span class=\"chem\">|\\mathbf{r}(t)| &lt;= 12.5</span> の間は探知できるので、船が半径 12.5 の円に入る時刻と出る時刻を求める。</p><p><span class=\"chem\">(-20 + 8t)^2 + (6 - 1.5t)^2 = 156.25 => 66.25t^2 - 338t + 279.75 = 0</span>。GDC：<span class=\"chem\">t ≈ 1.0394</span>、<span class=\"chem\">t ≈ 4.0625</span>。船が探知できるのは <span class=\"chem\">4.0625 - 1.0394 ≈ 3.02</span> 時間である。</p>",
      // EN: hours
      unit: "時間",
    },

    // ── t3-3-q049 · numeric · challenge · AHL · AHL 3.14 · 7 marks
    "t3-3-q049": {
      // EN: <p>Drone A takes off at time <span class="chem">t = 0</span> seconds and flies with position <span class="chem">\mathbf{r_A} = (0, 0, 50) + t(4, 3, 0.5)</span>, in metres. Drone B waits on a platform at <span class="chem">(300, -50, 20)</span> and sets off <strong>20 seconds later</strong>, flying with constant velocity <span class="chem">(-5, 6, 1.5)</span> m s<sup>−1</sup>. Find the minimum distance between the two drones once both are flying, correct to 3 significant figures.</p>
      stem: "<p>ドローン A は時刻 <span class=\"chem\">t = 0</span> 秒に離陸し、位置 <span class=\"chem\">\\mathbf{r_A} = (0, 0, 50) + t(4, 3, 0.5)</span>（単位はメートル）で飛行する。ドローン B は <span class=\"chem\">(300, -50, 20)</span> にある台の上で待機し、<strong>20 秒後に</strong>出発して、一定の速度 <span class=\"chem\">(-5, 6, 1.5)</span> m s<sup>−1</sup> で飛行する。両方が飛行しているときの 2 機のドローン間の最短距離を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: B starts late, so its position is not <span class="chem">(300, -50, 20) + t(-5, 6, 1.5)</span>. For <span class="chem">t &gt;= 20</span> it is <span class="chem">(300, -50, 20) + (t - 20)(-5, 6, 1.5)</span>.
        "解読：B は遅れて出発するので、その位置は <span class=\"chem\">(300, -50, 20) + t(-5, 6, 1.5)</span> ではありません。<span class=\"chem\">t &gt;= 20</span> では <span class=\"chem\">(300, -50, 20) + (t - 20)(-5, 6, 1.5)</span> です。",
        // EN: Form <span class="chem">\mathbf{r_A} - \mathbf{r_B}</span> as a function of <span class="chem">t</span> and minimise its magnitude (GDC graph, or set its scalar product with the relative velocity to zero).
        "<span class=\"chem\">\\mathbf{r_A} - \\mathbf{r_B}</span> を <span class=\"chem\">t</span> の関数として表し、その大きさを最小化します（GDC のグラフ、または相対速度との内積をゼロとおく）。",
        // EN: Check that the time you find satisfies <span class="chem">t &gt;= 20</span>.
        "求めた時刻が <span class=\"chem\">t &gt;= 20</span> を満たすことを確かめます。",
      ],
      // EN: <p><strong>Decode:</strong> the late start shifts the time in the equation of B to <span class="chem">t - 20</span>.</p><p>For <span class="chem">t &gt;= 20</span>: <span class="chem">\mathbf{r_B} = (300, -50, 20) + (t - 20)(-5, 6, 1.5) = (400, -170, -10) + t(-5, 6, 1.5)</span>. <span class="chem">\mathbf{r_A} - \mathbf{r_B} = (-400, 170, 60) + t(9, -3, -1)</span>. Setting its scalar product with <span class="chem">(9, -3, -1)</span> to 0: <span class="chem">-3600 - 510 - 60 + 91t = 0 => t ≈ 45.82</span> s, which is after 20 s. The minimum distance is <span class="chem">≈ 37.6</span> m. (Ignoring the delay gives the wrong answer 47.5 m.)</p>
      solution: "<p><strong>解読：</strong>出発が遅れるので、B の式の時間は <span class=\"chem\">t - 20</span> にずれる。</p><p><span class=\"chem\">t &gt;= 20</span> のとき：<span class=\"chem\">\\mathbf{r_B} = (300, -50, 20) + (t - 20)(-5, 6, 1.5) = (400, -170, -10) + t(-5, 6, 1.5)</span>。<span class=\"chem\">\\mathbf{r_A} - \\mathbf{r_B} = (-400, 170, 60) + t(9, -3, -1)</span>。<span class=\"chem\">(9, -3, -1)</span> との内積を 0 とおくと <span class=\"chem\">-3600 - 510 - 60 + 91t = 0 => t ≈ 45.82</span> s で、これは 20 s より後である。最短距離は <span class=\"chem\">≈ 37.6</span> m である。（遅れを無視すると誤った答え 47.5 m になる。）</p>",
    },

    // ── t3-3-q050 · numeric · challenge · AHL · AHL 3.16, 3.18 · 6 marks
    "t3-3-q050": {
      // EN: <p>A tent is modelled as a tetrahedron with its base <span class="chem">ABC</span> on flat ground (the plane <span class="chem">z = 0</span>) and its top at <span class="chem">D</span>. In metres, <span class="chem">A(0, 0, 0)</span>, <span class="chem">B(6.2, 0, 0)</span>, <span class="chem">C(1.8, 5.1, 0)</span> and <span class="chem">D(2.5, 1.9, 4.3)</span>. Find the angle that the side panel <span class="chem">ABD</span> makes with the ground, in degrees, correct to 3 significant figures.</p>
      stem: "<p>テントが四面体でモデル化されている。底面 <span class=\"chem\">ABC</span> は平らな地面（平面 <span class=\"chem\">z = 0</span>）上にあり、頂点は <span class=\"chem\">D</span> である。単位をメートルとして <span class=\"chem\">A(0, 0, 0)</span>、<span class=\"chem\">B(6.2, 0, 0)</span>、<span class=\"chem\">C(1.8, 5.1, 0)</span>、<span class=\"chem\">D(2.5, 1.9, 4.3)</span> である。側面 <span class=\"chem\">ABD</span> が地面となす角を度数法で求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: the panel <span class="chem">ABD</span> and the ground are two planes. The angle between them is the angle between their normals (taken acute). The point <span class="chem">C</span> is not needed.
        "解読：側面 <span class=\"chem\">ABD</span> と地面は二つの平面です。それらのなす角は法線ベクトルのなす角（鋭角をとる）です。点 <span class=\"chem\">C</span> は必要ありません。",
        // EN: A normal to the panel is <span class="chem">\mathbf{AB} \times \mathbf{AD}</span>; a normal to the ground is <span class="chem">(0, 0, 1)</span>.
        "側面の法線ベクトルの一つは <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AD}</span>、地面の法線ベクトルの一つは <span class=\"chem\">(0, 0, 1)</span> です。",
        // EN: <span class="chem">\mathbf{AB} \times \mathbf{AD} = (0, -26.66, 11.78)</span>.
        "<span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AD} = (0, -26.66, 11.78)</span>.",
      ],
      // EN: <p><strong>Decode:</strong> angle between plane <span class="chem">ABD</span> and plane <span class="chem">z = 0</span>; <span class="chem">C</span> is extra information.</p><p><span class="chem">\mathbf{AB} = (6.2, 0, 0)</span>, <span class="chem">\mathbf{AD} = (2.5, 1.9, 4.3)</span>, <span class="chem">\mathbf{n} = \mathbf{AB} \times \mathbf{AD} = (0, -26.66, 11.78)</span>. <span class="chem">cos theta = 11.78 / sqrt(26.66^2 + 11.78^2) ≈ 0.4042</span>, so <span class="chem">theta ≈ 66.2°</span>. (Check: <span class="chem">AB</span> is along the <span class="chem">x</span>-axis, so <span class="chem">tan theta = 4.3/1.9</span> also works.)</p>
      solution: "<p><strong>解読：</strong>平面 <span class=\"chem\">ABD</span> と平面 <span class=\"chem\">z = 0</span> のなす角であり、<span class=\"chem\">C</span> は余分な情報である。</p><p><span class=\"chem\">\\mathbf{AB} = (6.2, 0, 0)</span>、<span class=\"chem\">\\mathbf{AD} = (2.5, 1.9, 4.3)</span>、<span class=\"chem\">\\mathbf{n} = \\mathbf{AB} \\times \\mathbf{AD} = (0, -26.66, 11.78)</span>。<span class=\"chem\">cos theta = 11.78 / sqrt(26.66^2 + 11.78^2) ≈ 0.4042</span> なので <span class=\"chem\">theta ≈ 66.2°</span>。（確認：<span class=\"chem\">AB</span> は <span class=\"chem\">x</span> 軸に沿っているので、<span class=\"chem\">tan theta = 4.3/1.9</span> でも求められる。）</p>",
    },

    // ── t3-3-q051 · numeric · challenge · AHL · AHL 3.13, 3.18 · 6 marks
    "t3-3-q051": {
      // EN: <p>A light beam leaves a lamp at <span class="chem">S(1, -2, 0.5)</span>, passes through a small window at <span class="chem">W(3.5, 1, 2.3)</span> and then strikes a sloping glass roof in the plane <span class="chem">2x - y + 4z = 30</span>. In optics, the <em>angle of incidence</em> is the angle between the incoming beam and the normal to the surface. Find the angle of incidence, in degrees, correct to 3 significant figures.</p>
      stem: "<p>光線が <span class=\"chem\">S(1, -2, 0.5)</span> にあるランプから出て、<span class=\"chem\">W(3.5, 1, 2.3)</span> にある小さな窓を通り、平面 <span class=\"chem\">2x - y + 4z = 30</span> 上にある傾いたガラス屋根に当たる。光学では、<em>入射角</em>とは入射する光線と面の法線とのなす角である。入射角を度数法で求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: the angle asked for is between the beam and the <strong>normal</strong>, not between the beam and the plane. So use cosine with the normal; do not use the line-plane sine formula.
        "解読：求める角は光線と<strong>法線</strong>のなす角であり、光線と平面のなす角ではありません。したがって法線ベクトルとの余弦を使い、直線と平面のなす角の正弦の公式は使いません。",
        // EN: The beam direction is <span class="chem">\mathbf{SW} = (2.5, 3, 1.8)</span> and the normal is <span class="chem">(2, -1, 4)</span>.
        "光線の方向は <span class=\"chem\">\\mathbf{SW} = (2.5, 3, 1.8)</span>、法線ベクトルは <span class=\"chem\">(2, -1, 4)</span> です。",
        // EN: Take the acute angle: <span class="chem">cos theta = |\mathbf{SW} \cdot \mathbf{n}| / (|\mathbf{SW}||\mathbf{n}|)</span>.
        "鋭角をとります：<span class=\"chem\">cos theta = |\\mathbf{SW} \\cdot \\mathbf{n}| / (|\\mathbf{SW}||\\mathbf{n}|)</span>。",
      ],
      // EN: <p><strong>Decode:</strong> angle between the line and the normal, which is <span class="chem">90°</span> minus the line-plane angle.</p><p><span class="chem">\mathbf{SW} = (2.5, 3, 1.8)</span>, <span class="chem">\mathbf{n} = (2, -1, 4)</span>. <span class="chem">\mathbf{SW} \cdot \mathbf{n} = 5 - 3 + 7.2 = 9.2</span>, <span class="chem">|\mathbf{SW}| = sqrt(18.49) = 4.3</span>, <span class="chem">|\mathbf{n}| = sqrt(21)</span>. <span class="chem">cos theta = 9.2 / (4.3 sqrt(21)) ≈ 0.4669</span>, so <span class="chem">theta ≈ 62.2°</span>. (The beam does reach the roof: it meets the plane at <span class="chem">lambda ≈ 2.61 &gt; 0</span> on <span class="chem">\mathbf{r} = \mathbf{OS} + lambda \mathbf{SW}</span>. The line-plane angle would be <span class="chem">27.8°</span>, the trap answer.)</p>
      solution: "<p><strong>解読：</strong>直線と法線のなす角であり、これは <span class=\"chem\">90°</span> から直線と平面のなす角を引いたものである。</p><p><span class=\"chem\">\\mathbf{SW} = (2.5, 3, 1.8)</span>、<span class=\"chem\">\\mathbf{n} = (2, -1, 4)</span>。<span class=\"chem\">\\mathbf{SW} \\cdot \\mathbf{n} = 5 - 3 + 7.2 = 9.2</span>、<span class=\"chem\">|\\mathbf{SW}| = sqrt(18.49) = 4.3</span>、<span class=\"chem\">|\\mathbf{n}| = sqrt(21)</span>。<span class=\"chem\">cos theta = 9.2 / (4.3 sqrt(21)) ≈ 0.4669</span> なので <span class=\"chem\">theta ≈ 62.2°</span>。（光線は確かに屋根に届く：<span class=\"chem\">\\mathbf{r} = \\mathbf{OS} + lambda \\mathbf{SW}</span> 上の <span class=\"chem\">lambda ≈ 2.61 &gt; 0</span> で平面と交わる。直線と平面のなす角は <span class=\"chem\">27.8°</span> で、これはひっかけの答えである。）</p>",
    },

    // ── t3-3-q052 · short · challenge · AHL · AHL 3.12, 3.14, 3.16 · 11 marks
    "t3-3-q052": {
      // EN: <p>A straight railway track follows the line <span class="chem">L: \mathbf{r} = (1, -2, 3) + lambda(2, 1, -2)</span>, in kilometres. A mobile phone mast at <span class="chem">P(4.2, 3.5, -1)</span> has a range of exactly 7 km. Points <span class="chem">Q_1</span> and <span class="chem">Q_2</span> are where the track enters and leaves the range of the mast.</p><p>(a) Show that the values of <span class="chem">lambda</span> at <span class="chem">Q_1</span> and <span class="chem">Q_2</span> satisfy <span class="chem">9lambda^2 - 39.8lambda + 7.49 = 0</span>. <strong>[3 marks]</strong></p><p>(b) Find the coordinates of <span class="chem">Q_1</span> and <span class="chem">Q_2</span>. <strong>[3 marks]</strong></p><p>(c) Find the area of triangle <span class="chem">PQ_1Q_2</span>. <strong>[3 marks]</strong></p><p>(d) Hence, or otherwise, find the shortest distance from the mast to the track. <strong>[2 marks]</strong></p>
      stem: "<p>まっすぐな鉄道の線路が直線 <span class=\"chem\">L: \\mathbf{r} = (1, -2, 3) + lambda(2, 1, -2)</span>（単位はキロメートル）に沿っている。<span class=\"chem\">P(4.2, 3.5, -1)</span> にある携帯電話の基地局のアンテナの通信範囲はちょうど 7 km である。点 <span class=\"chem\">Q_1</span> と <span class=\"chem\">Q_2</span> は、線路がアンテナの通信範囲に入る点と出る点である。</p><p>(a) <span class=\"chem\">Q_1</span> と <span class=\"chem\">Q_2</span> における <span class=\"chem\">lambda</span> の値が <span class=\"chem\">9lambda^2 - 39.8lambda + 7.49 = 0</span> を満たすことを示しなさい (Show that)。 <strong>[3 marks]</strong></p><p>(b) <span class=\"chem\">Q_1</span> と <span class=\"chem\">Q_2</span> の座標を求めなさい (Find)。 <strong>[3 marks]</strong></p><p>(c) 三角形 <span class=\"chem\">PQ_1Q_2</span> の面積を求めなさい (Find)。 <strong>[3 marks]</strong></p><p>(d) これを用いて、または他の方法で (Hence, or otherwise)、アンテナから線路までの最短距離を求めなさい。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: the edge of the range is a sphere of radius 7 about <span class="chem">P</span>. The track crosses it where <span class="chem">|\mathbf{PQ}| = 7</span>.
        "解読：通信範囲の境界は <span class=\"chem\">P</span> を中心とする半径 7 の球面です。線路は <span class=\"chem\">|\\mathbf{PQ}| = 7</span> となる点でそれを横切ります。",
        // EN: Square both sides: <span class="chem">|\mathbf{PQ}|^2 = 49</span> gives a quadratic in <span class="chem">lambda</span>.
        "両辺を 2 乗します：<span class=\"chem\">|\\mathbf{PQ}|^2 = 49</span> から <span class=\"chem\">lambda</span> の二次方程式が得られます。",
        // EN: In (d), the perpendicular from <span class="chem">P</span> to <span class="chem">Q_1Q_2</span> is the height of the triangle.
        "(d) では、<span class=\"chem\">P</span> から <span class=\"chem\">Q_1Q_2</span> への垂線が三角形の高さです。",
      ],
      // EN: <p><strong>Decode:</strong> "enters and leaves the range" means the points of <span class="chem">L</span> at distance exactly 7 from <span class="chem">P</span>, so solve <span class="chem">|\mathbf{PQ}| = 7</span>, a quadratic in <span class="chem">lambda</span>.</p><p>(a) <span class="chem">\mathbf{PQ} = (-3.2 + 2lambda, -5.5 + lambda, 4 - 2lambda)</span>. <span class="chem">|\mathbf{PQ}|^2 = 9lambda^2 - 39.8lambda + 56.49 = 49</span>, so <span class="chem">9lambda^2 - 39.8lambda + 7.49 = 0</span>.</p><p>(b) GDC: <span class="chem">lambda ≈ 0.19696</span> or <span class="chem">lambda ≈ 4.2253</span>, giving <span class="chem">Q_1 ≈ (1.39, -1.80, 2.61)</span> and <span class="chem">Q_2 ≈ (9.45, 2.23, -5.45)</span>.</p><p>(c) Area <span class="chem">= (1/2)|\mathbf{PQ_1} \times \mathbf{PQ_2}| ≈ 21.4</span> km<sup>2</sup>.</p><p>(d) <span class="chem">|Q_1Q_2| = 3 × (4.2253 - 0.19696) ≈ 12.08</span>. Using area <span class="chem">= (1/2)(base)(height)</span>: height <span class="chem">= 2(21.354)/12.085 ≈ 3.53</span> km.</p>
      answer: "<p><strong>解読：</strong>「通信範囲に入る・出る」とは <span class=\"chem\">L</span> 上で <span class=\"chem\">P</span> からの距離がちょうど 7 の点のことなので、<span class=\"chem\">lambda</span> の二次方程式 <span class=\"chem\">|\\mathbf{PQ}| = 7</span> を解く。</p><p>(a) <span class=\"chem\">\\mathbf{PQ} = (-3.2 + 2lambda, -5.5 + lambda, 4 - 2lambda)</span>。<span class=\"chem\">|\\mathbf{PQ}|^2 = 9lambda^2 - 39.8lambda + 56.49 = 49</span> なので <span class=\"chem\">9lambda^2 - 39.8lambda + 7.49 = 0</span>。</p><p>(b) GDC：<span class=\"chem\">lambda ≈ 0.19696</span> または <span class=\"chem\">lambda ≈ 4.2253</span> より、<span class=\"chem\">Q_1 ≈ (1.39, -1.80, 2.61)</span>、<span class=\"chem\">Q_2 ≈ (9.45, 2.23, -5.45)</span>。</p><p>(c) 面積 <span class=\"chem\">= (1/2)|\\mathbf{PQ_1} \\times \\mathbf{PQ_2}| ≈ 21.4</span> km<sup>2</sup>。</p><p>(d) <span class=\"chem\">|Q_1Q_2| = 3 × (4.2253 - 0.19696) ≈ 12.08</span>。面積 <span class=\"chem\">= (1/2)(base)(height)</span> を用いると、高さ <span class=\"chem\">= 2(21.354)/12.085 ≈ 3.53</span> km。</p>",
      markscheme: [
        // EN: M1: writes <span class="chem">\mathbf{PQ}</span> for a general point <span class="chem">Q</span> on <span class="chem">L</span>.
        "M1：<span class=\"chem\">L</span> 上の一般の点 <span class=\"chem\">Q</span> について <span class=\"chem\">\\mathbf{PQ}</span> を書く。",
        // EN: M1: sets <span class="chem">|\mathbf{PQ}|^2 = 49</span>.
        "M1：<span class=\"chem\">|\\mathbf{PQ}|^2 = 49</span> とおく。",
        // EN: A1: expands correctly to <span class="chem">9lambda^2 - 39.8lambda + 56.49 = 49</span>, giving the given equation (AG).
        "A1：正しく展開して <span class=\"chem\">9lambda^2 - 39.8lambda + 56.49 = 49</span> を得て、与えられた方程式を導く (AG)。",
        // EN: A1: <span class="chem">lambda ≈ 0.197</span> and <span class="chem">lambda ≈ 4.23</span>.
        "A1：<span class=\"chem\">lambda ≈ 0.197</span>、<span class=\"chem\">lambda ≈ 4.23</span>。",
        // EN: A1: <span class="chem">Q_1 ≈ (1.39, -1.80, 2.61)</span>.
        "A1：<span class=\"chem\">Q_1 ≈ (1.39, -1.80, 2.61)</span>。",
        // EN: A1: <span class="chem">Q_2 ≈ (9.45, 2.23, -5.45)</span>.
        "A1：<span class=\"chem\">Q_2 ≈ (9.45, 2.23, -5.45)</span>。",
        // EN: M1: uses <span class="chem">(1/2)|\mathbf{PQ_1} \times \mathbf{PQ_2}|</span> (or <span class="chem">(1/2)ab sin C</span> with <span class="chem">a = b = 7</span>).
        "M1：<span class=\"chem\">(1/2)|\\mathbf{PQ_1} \\times \\mathbf{PQ_2}|</span>（または <span class=\"chem\">a = b = 7</span> として <span class=\"chem\">(1/2)ab sin C</span>）を用いる。",
        // EN: A1: correct vector product or angle <span class="chem">Q_1PQ_2 ≈ 119.4°</span>.
        "A1：正しい外積、または角 <span class=\"chem\">Q_1PQ_2 ≈ 119.4°</span>。",
        // EN: A1: area <span class="chem">≈ 21.4</span>.
        "A1：面積 <span class=\"chem\">≈ 21.4</span>。",
        // EN: M1: uses height <span class="chem">= 2 × area / |Q_1Q_2|</span> (or the foot of the perpendicular, <span class="chem">lambda = 199/90</span>).
        "M1：高さ <span class=\"chem\">= 2 × area / |Q_1Q_2|</span>（または垂線の足、<span class=\"chem\">lambda = 199/90</span>）を用いる。",
        // EN: A1: distance <span class="chem">≈ 3.53</span> km.
        "A1：距離 <span class=\"chem\">≈ 3.53</span> km。",
      ],
    },

    // ── t3-3-q053 · numeric · challenge · AHL · AHL 3.16, 3.18 · 6 marks
    "t3-3-q053": {
      // EN: <p>Two walls of a modern building lie in the planes <span class="chem">1.2x + 2y - z = 4</span> and <span class="chem">3x - y + 2.5z = 1</span>. The walls meet along a straight edge. A sloping glass roof lies in the plane <span class="chem">2x + 5y + z = 8</span>. Find the acute angle between the edge and the roof, in degrees, correct to 3 significant figures.</p>
      stem: "<p>現代的な建物の二つの壁が平面 <span class=\"chem\">1.2x + 2y - z = 4</span> と <span class=\"chem\">3x - y + 2.5z = 1</span> 上にある。壁はまっすぐな稜線に沿って交わっている。傾いたガラス屋根は平面 <span class=\"chem\">2x + 5y + z = 8</span> 上にある。稜線と屋根のなす鋭角を度数法で求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: the "edge" is the line of intersection of the two wall planes, so this is a line-plane angle in disguise. You only need the direction of the edge, not a point on it.
        "解読：「稜線」は二つの壁の平面の交線なので、これは形を変えた直線と平面のなす角の問題です。必要なのは稜線の方向だけで、稜線上の点は必要ありません。",
        // EN: The direction of the edge is <span class="chem">(1.2, 2, -1) \times (3, -1, 2.5)</span>.
        "稜線の方向は <span class=\"chem\">(1.2, 2, -1) \\times (3, -1, 2.5)</span> です。",
        // EN: Then use <span class="chem">sin phi = |\mathbf{b} \cdot \mathbf{n}| / (|\mathbf{b}||\mathbf{n}|)</span> with <span class="chem">\mathbf{n} = (2, 5, 1)</span>.
        "次に <span class=\"chem\">\\mathbf{n} = (2, 5, 1)</span> として <span class=\"chem\">sin phi = |\\mathbf{b} \\cdot \\mathbf{n}| / (|\\mathbf{b}||\\mathbf{n}|)</span> を使います。",
      ],
      // EN: <p><strong>Decode:</strong> edge = line of intersection; angle with a plane uses sine.</p><p><span class="chem">\mathbf{b} = (1.2, 2, -1) \times (3, -1, 2.5) = (4, -6, -7.2)</span>. <span class="chem">\mathbf{b} \cdot (2, 5, 1) = 8 - 30 - 7.2 = -29.2</span>, <span class="chem">|\mathbf{b}| = sqrt(103.84)</span>, <span class="chem">|\mathbf{n}| = sqrt(30)</span>. <span class="chem">sin phi = 29.2 / sqrt(103.84 × 30) ≈ 0.5231</span>, so <span class="chem">phi ≈ 31.5°</span>.</p>
      solution: "<p><strong>解読：</strong>稜線＝交線。平面とのなす角には正弦を使う。</p><p><span class=\"chem\">\\mathbf{b} = (1.2, 2, -1) \\times (3, -1, 2.5) = (4, -6, -7.2)</span>。<span class=\"chem\">\\mathbf{b} \\cdot (2, 5, 1) = 8 - 30 - 7.2 = -29.2</span>、<span class=\"chem\">|\\mathbf{b}| = sqrt(103.84)</span>、<span class=\"chem\">|\\mathbf{n}| = sqrt(30)</span>。<span class=\"chem\">sin phi = 29.2 / sqrt(103.84 × 30) ≈ 0.5231</span> なので <span class=\"chem\">phi ≈ 31.5°</span>。</p>",
    },

    // ── t3-3-q054 · numeric · challenge · AHL · AHL 3.13 · 6 marks
    "t3-3-q054": {
      // EN: <p>For <span class="chem">t \in \mathbb{R}</span>, let <span class="chem">\mathbf{a} = t\mathbf{i} + \mathbf{j} + 2\mathbf{k}</span> and <span class="chem">\mathbf{b} = 2\mathbf{i} + t\mathbf{j} + \mathbf{k}</span>. There are two values of <span class="chem">t</span> for which the angle between <span class="chem">\mathbf{a}</span> and <span class="chem">\mathbf{b}</span> is exactly <span class="chem">50°</span>. Find the value of <span class="chem">t</span> that is greater than 1, correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">t \\in \\mathbb{R}</span> に対して、<span class=\"chem\">\\mathbf{a} = t\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}</span>、<span class=\"chem\">\\mathbf{b} = 2\\mathbf{i} + t\\mathbf{j} + \\mathbf{k}</span> とする。<span class=\"chem\">\\mathbf{a}</span> と <span class=\"chem\">\\mathbf{b}</span> のなす角がちょうど <span class=\"chem\">50°</span> となる <span class=\"chem\">t</span> の値は二つある。1 より大きい <span class=\"chem\">t</span> の値を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: the angle is fixed and <span class="chem">t</span> is unknown, so this is an equation to solve: <span class="chem">cos 50° = (\mathbf{a} \cdot \mathbf{b}) / (|\mathbf{a}||\mathbf{b}|)</span>. It rearranges to a quadratic with awkward coefficients, so use your GDC.
        "解読：角は決まっていて <span class=\"chem\">t</span> が未知なので、これは解くべき方程式 <span class=\"chem\">cos 50° = (\\mathbf{a} \\cdot \\mathbf{b}) / (|\\mathbf{a}||\\mathbf{b}|)</span> です。整理すると係数の扱いにくい二次方程式になるので、GDC を使います。",
        // EN: <span class="chem">\mathbf{a} \cdot \mathbf{b} = 3t + 2</span> and <span class="chem">|\mathbf{a}| = |\mathbf{b}| = sqrt(t^2 + 5)</span>.
        "<span class=\"chem\">\\mathbf{a} \\cdot \\mathbf{b} = 3t + 2</span>、<span class=\"chem\">|\\mathbf{a}| = |\\mathbf{b}| = sqrt(t^2 + 5)</span> です。",
        // EN: Graph <span class="chem">y = (3t + 2)/(t^2 + 5)</span> and <span class="chem">y = cos 50°</span> (degree mode) and find the intersection with <span class="chem">t &gt; 1</span>.
        "<span class=\"chem\">y = (3t + 2)/(t^2 + 5)</span> と <span class=\"chem\">y = cos 50°</span> のグラフ（度モード）をかき、<span class=\"chem\">t &gt; 1</span> となる交点を求めます。",
      ],
      // EN: <p><strong>Decode:</strong> unknown <span class="chem">t</span> in the angle formula, solved graphically.</p><p><span class="chem">cos 50° = (3t + 2)/(t^2 + 5)</span>. The GDC gives <span class="chem">t ≈ 0.448</span> or <span class="chem">t ≈ 4.22</span>. The value greater than 1 is <span class="chem">t ≈ 4.22</span>.</p>
      solution: "<p><strong>解読：</strong>角の公式に含まれる未知数 <span class=\"chem\">t</span> を、グラフを用いて解く。</p><p><span class=\"chem\">cos 50° = (3t + 2)/(t^2 + 5)</span>。GDC により <span class=\"chem\">t ≈ 0.448</span> または <span class=\"chem\">t ≈ 4.22</span>。1 より大きい値は <span class=\"chem\">t ≈ 4.22</span> である。</p>",
    },

    // ── t3-3-q055 · short · challenge · AHL · AHL 3.12, 3.14, 3.15 · 11 marks
    "t3-3-q055": {
      // EN: <p>Two aircraft fly in straight lines at constant velocity. With distances in km and <span class="chem">t</span> in minutes after 09:00, their positions are <span class="chem">\mathbf{r_A} = (10, 5, 5) + t(12, 8, 0.4)</span> and <span class="chem">\mathbf{r_B} = (68.8, -10.2, 7.6) + t(-9, 11, -0.5)</span>.</p><p>(a) Show that the flight paths cross, and find the coordinates of the point <span class="chem">X</span> where they cross. <strong>[4 marks]</strong></p><p>(b) Explain why the aircraft do not collide. <strong>[2 marks]</strong></p><p>(c) Find the minimum distance between the aircraft, and the time after 09:00 at which it occurs, in minutes. <strong>[5 marks]</strong></p>
      stem: "<p>2 機の航空機が一定の速度で直進している。距離を km、<span class=\"chem\">t</span> を 09:00 からの経過時間（分）とすると、それらの位置は <span class=\"chem\">\\mathbf{r_A} = (10, 5, 5) + t(12, 8, 0.4)</span>、<span class=\"chem\">\\mathbf{r_B} = (68.8, -10.2, 7.6) + t(-9, 11, -0.5)</span> である。</p><p>(a) 飛行経路が交差することを示し (Show that)、交差する点 <span class=\"chem\">X</span> の座標を求めなさい (find)。 <strong>[4 marks]</strong></p><p>(b) 航空機が衝突しない理由を説明しなさい (Explain)。 <strong>[2 marks]</strong></p><p>(c) 航空機間の最短距離と、それが起こる 09:00 からの時間（分）を求めなさい (Find)。 <strong>[5 marks]</strong></p>",
      hints: [
        // EN: Decode: for the paths, each aircraft may reach the crossing point at a different time, so use two different parameters.
        "解読：経路については、それぞれの航空機が異なる時刻に交点に達してもよいので、異なる二つの媒介変数を使います。",
        // EN: For a collision both aircraft must be at the same point for the <em>same</em> value of <span class="chem">t</span>.
        "衝突するには、<em>同じ</em> <span class=\"chem\">t</span> の値で両方の航空機が同じ点にいなければなりません。",
        // EN: The distance at time <span class="chem">t</span> is <span class="chem">|\mathbf{r_A}(t) - \mathbf{r_B}(t)|</span>; graph it and find its minimum.
        "時刻 <span class=\"chem\">t</span> における距離は <span class=\"chem\">|\\mathbf{r_A}(t) - \\mathbf{r_B}(t)|</span> です。グラフをかいて最小値を求めます。",
      ],
      // EN: <p><strong>Decode:</strong> "the paths cross" is about the <em>lines</em> (use two parameters); "collide" is about the <em>same time</em> (one parameter <span class="chem">t</span>).</p><p>(a) With parameters <span class="chem">p</span> for A and <span class="chem">q</span> for B: <span class="chem">10 + 12p = 68.8 - 9q</span> and <span class="chem">5 + 8p = -10.2 + 11q</span>. GDC: <span class="chem">p = 2.5</span>, <span class="chem">q = 3.2</span>. Check <span class="chem">z</span>: <span class="chem">5 + 0.4(2.5) = 6</span> and <span class="chem">7.6 - 0.5(3.2) = 6</span>. The paths cross at <span class="chem">X(40, 25, 6)</span>.</p><p>(b) A is at <span class="chem">X</span> when <span class="chem">t = 2.5</span> but B is at <span class="chem">X</span> when <span class="chem">t = 3.2</span>. They are never at <span class="chem">X</span> at the same time (and two non-parallel lines meet only at <span class="chem">X</span>), so they do not collide.</p><p>(c) <span class="chem">\mathbf{r_A} - \mathbf{r_B} = (-58.8, 15.2, -2.6) + t(21, -3, 0.9)</span>. Its magnitude is least when <span class="chem">t = 1282.74/450.81 ≈ 2.85</span> minutes, and the minimum distance is <span class="chem">≈ 6.73</span> km.</p>
      answer: "<p><strong>解読：</strong>「経路が交差する」は<em>直線</em>についての話（媒介変数を二つ使う）、「衝突する」は<em>同じ時刻</em>についての話（媒介変数は <span class=\"chem\">t</span> の一つ）である。</p><p>(a) A の媒介変数を <span class=\"chem\">p</span>、B の媒介変数を <span class=\"chem\">q</span> とすると <span class=\"chem\">10 + 12p = 68.8 - 9q</span>、<span class=\"chem\">5 + 8p = -10.2 + 11q</span>。GDC：<span class=\"chem\">p = 2.5</span>、<span class=\"chem\">q = 3.2</span>。<span class=\"chem\">z</span> を確かめると <span class=\"chem\">5 + 0.4(2.5) = 6</span>、<span class=\"chem\">7.6 - 0.5(3.2) = 6</span>。経路は <span class=\"chem\">X(40, 25, 6)</span> で交差する。</p><p>(b) A は <span class=\"chem\">t = 2.5</span> のとき <span class=\"chem\">X</span> にいるが、B が <span class=\"chem\">X</span> にいるのは <span class=\"chem\">t = 3.2</span> のときである。両者が同時に <span class=\"chem\">X</span> にいることはなく（平行でない 2 直線は <span class=\"chem\">X</span> でしか交わらない）、衝突しない。</p><p>(c) <span class=\"chem\">\\mathbf{r_A} - \\mathbf{r_B} = (-58.8, 15.2, -2.6) + t(21, -3, 0.9)</span>。その大きさは <span class=\"chem\">t = 1282.74/450.81 ≈ 2.85</span> 分のとき最小となり、最短距離は <span class=\"chem\">≈ 6.73</span> km である。</p>",
      markscheme: [
        // EN: M1: equates the position vectors using two <em>different</em> parameters.
        "M1：<em>異なる</em>二つの媒介変数を用いて位置ベクトルを等置する。",
        // EN: A1: <span class="chem">p = 2.5</span>, <span class="chem">q = 3.2</span>.
        "A1：<span class=\"chem\">p = 2.5</span>、<span class=\"chem\">q = 3.2</span>。",
        // EN: R1: checks the third component is consistent.
        "R1：三つ目の成分が一致することを確かめる。",
        // EN: A1: <span class="chem">X(40, 25, 6)</span>.
        "A1：<span class=\"chem\">X(40, 25, 6)</span>。",
        // EN: A1: identifies the different times 2.5 and 3.2 minutes at which each aircraft is at <span class="chem">X</span>.
        "A1：それぞれの航空機が <span class=\"chem\">X</span> にいる異なる時刻 2.5 分と 3.2 分を特定する。",
        // EN: R1: concludes they are not at the same point at the same time, so no collision.
        "R1：同じ時刻に同じ点にはいないので衝突しないと結論づける。",
        // EN: M1: forms <span class="chem">\mathbf{r_A} - \mathbf{r_B}</span> in terms of the single time <span class="chem">t</span>.
        "M1：一つの時刻 <span class=\"chem\">t</span> を用いて <span class=\"chem\">\\mathbf{r_A} - \\mathbf{r_B}</span> を表す。",
        // EN: A1: <span class="chem">(-58.8, 15.2, -2.6) + t(21, -3, 0.9)</span>.
        "A1：<span class=\"chem\">(-58.8, 15.2, -2.6) + t(21, -3, 0.9)</span>。",
        // EN: M1: minimises the magnitude (GDC graph, or scalar product with <span class="chem">(21, -3, 0.9)</span> set to 0).
        "M1：大きさを最小化する（GDC のグラフ、または <span class=\"chem\">(21, -3, 0.9)</span> との内積を 0 とおく）。",
        // EN: A1: <span class="chem">t ≈ 2.85</span> minutes.
        "A1：<span class=\"chem\">t ≈ 2.85</span> 分。",
        // EN: A1: minimum distance <span class="chem">≈ 6.73</span> km.
        "A1：最短距離 <span class=\"chem\">≈ 6.73</span> km。",
      ],
    },

    // ── t3-3-q056 · short · challenge · AHL · AHL 3.14, 3.17, 3.18 · 18 marks
    "t3-3-q056": {
      // EN: <p>This investigation finds a quick formula for the distance from a point to a plane. Let <span class="chem">Π</span> be the plane <span class="chem">2x - y + 2z = 9</span>.</p><p>(a) The line through <span class="chem">P(4, 2, 6)</span> perpendicular to <span class="chem">Π</span> is <span class="chem">\mathbf{r} = (4, 2, 6) + s(2, -1, 2)</span>. Find the point <span class="chem">F</span> where it meets <span class="chem">Π</span>, and hence find the distance from <span class="chem">P</span> to <span class="chem">Π</span>. <strong>[3 marks]</strong></p><p>(b) In the same way, find the distance from <span class="chem">Q(1, 4, -3)</span> to <span class="chem">Π</span>. <strong>[2 marks]</strong></p><p>(c) Evaluate <span class="chem">2x_0 - y_0 + 2z_0 - 9</span> at <span class="chem">P</span> and at <span class="chem">Q</span>. Hence suggest a formula for the distance from <span class="chem">(x_0, y_0, z_0)</span> to <span class="chem">Π</span>. <strong>[2 marks]</strong></p><p>(d) Prove that the distance from the point <span class="chem">(x_0, y_0, z_0)</span> to the plane <span class="chem">ax + by + cz = d</span> is <span class="chem">D = |ax_0 + by_0 + cz_0 - d| / sqrt(a^2 + b^2 + c^2)</span>. <strong>[5 marks]</strong></p><p>(e) Find the two values of <span class="chem">k</span> for which the plane <span class="chem">2x - y + 2z = k</span> is at a distance of 4 from <span class="chem">P(4, 2, 6)</span>. <strong>[3 marks]</strong></p><p>(f) Find the distance between the parallel planes <span class="chem">Π</span> and <span class="chem">6x - 3y + 6z = 5</span>. <strong>[3 marks]</strong></p>
      stem: "<p>この探究では、点と平面の距離を求める簡単な公式を見つける。<span class=\"chem\">Π</span> を平面 <span class=\"chem\">2x - y + 2z = 9</span> とする。</p><p>(a) <span class=\"chem\">P(4, 2, 6)</span> を通り <span class=\"chem\">Π</span> に垂直な直線は <span class=\"chem\">\\mathbf{r} = (4, 2, 6) + s(2, -1, 2)</span> である。それが <span class=\"chem\">Π</span> と交わる点 <span class=\"chem\">F</span> を求め (Find)、これを用いて (hence) <span class=\"chem\">P</span> から <span class=\"chem\">Π</span> までの距離を求めなさい。 <strong>[3 marks]</strong></p><p>(b) 同様にして、<span class=\"chem\">Q(1, 4, -3)</span> から <span class=\"chem\">Π</span> までの距離を求めなさい (find)。 <strong>[2 marks]</strong></p><p>(c) <span class=\"chem\">P</span> と <span class=\"chem\">Q</span> における <span class=\"chem\">2x_0 - y_0 + 2z_0 - 9</span> の値を計算しなさい。これを用いて (Hence)、<span class=\"chem\">(x_0, y_0, z_0)</span> から <span class=\"chem\">Π</span> までの距離の公式を予想しなさい (suggest)。 <strong>[2 marks]</strong></p><p>(d) 点 <span class=\"chem\">(x_0, y_0, z_0)</span> から平面 <span class=\"chem\">ax + by + cz = d</span> までの距離が <span class=\"chem\">D = |ax_0 + by_0 + cz_0 - d| / sqrt(a^2 + b^2 + c^2)</span> であることを証明しなさい (Prove)。 <strong>[5 marks]</strong></p><p>(e) 平面 <span class=\"chem\">2x - y + 2z = k</span> と <span class=\"chem\">P(4, 2, 6)</span> の距離が 4 となるような <span class=\"chem\">k</span> の二つの値を求めなさい (Find)。 <strong>[3 marks]</strong></p><p>(f) 平行な平面 <span class=\"chem\">Π</span> と <span class=\"chem\">6x - 3y + 6z = 5</span> の間の距離を求めなさい (Find)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: each part builds on the last. Parts (a)–(b) are the slow method; part (c) asks you to spot what the slow method always gives.
        "解読：各小問は前の小問の上に積み重なっています。(a)–(b) は時間のかかる方法で、(c) ではその方法が常に何を与えるかを見抜きます。",
        // EN: In (d), repeat exactly the steps of (a) with letters instead of numbers.
        "(d) では、数の代わりに文字を使って (a) の手順をそのまま繰り返します。",
        // EN: In (f), the two planes are parallel. Make their normal vectors identical before comparing the constants.
        "(f) では、二つの平面は平行です。定数を比べる前に法線ベクトルを同じにします。",
      ],
      // EN: <p>(a) <span class="chem">2(4 + 2s) - (2 - s) + 2(6 + 2s) = 9 => 18 + 9s = 9 => s = -1</span>, so <span class="chem">F(2, 3, 4)</span>. The distance is <span class="chem">|\mathbf{PF}| = |(-2, 1, -2)| = 3</span>.</p><p>(b) <span class="chem">2(1 + 2s) - (4 - s) + 2(-3 + 2s) = 9 => -8 + 9s = 9 => s = 17/9</span>. The distance is <span class="chem">(17/9) × 3 = 17/3</span>.</p><p>(c) At <span class="chem">P</span>: <span class="chem">18 - 9 = 9</span>; at <span class="chem">Q</span>: <span class="chem">-8 - 9 = -17</span>. The distances are <span class="chem">9/3</span> and <span class="chem">17/3</span>, and <span class="chem">3 = |(2, -1, 2)|</span>. Conjecture: <span class="chem">D = |2x_0 - y_0 + 2z_0 - 9| / 3</span>.</p><p>(d) Let <span class="chem">\mathbf{n} = (a, b, c)</span>. The perpendicular from the point is <span class="chem">(x_0 + sa, y_0 + sb, z_0 + sc)</span>. Substituting: <span class="chem">ax_0 + by_0 + cz_0 + s(a^2 + b^2 + c^2) = d</span>, so <span class="chem">s = (d - ax_0 - by_0 - cz_0)/(a^2 + b^2 + c^2)</span>. The distance is <span class="chem">|s||\mathbf{n}| = |ax_0 + by_0 + cz_0 - d| sqrt(a^2 + b^2 + c^2) / (a^2 + b^2 + c^2) = |ax_0 + by_0 + cz_0 - d| / sqrt(a^2 + b^2 + c^2)</span>.</p><p>(e) <span class="chem">|8 - 2 + 12 - k| / 3 = 4 => |18 - k| = 12 => k = 6</span> or <span class="chem">k = 30</span>.</p><p>(f) The second plane is <span class="chem">2x - y + 2z = 5/3</span>. The point <span class="chem">(0, 0, 4.5)</span> lies on <span class="chem">Π</span>, so the distance is <span class="chem">|9 - 5/3| / 3 = 22/9</span>.</p>
      answer: "<p>(a) <span class=\"chem\">2(4 + 2s) - (2 - s) + 2(6 + 2s) = 9 => 18 + 9s = 9 => s = -1</span> なので <span class=\"chem\">F(2, 3, 4)</span>。距離は <span class=\"chem\">|\\mathbf{PF}| = |(-2, 1, -2)| = 3</span>。</p><p>(b) <span class=\"chem\">2(1 + 2s) - (4 - s) + 2(-3 + 2s) = 9 => -8 + 9s = 9 => s = 17/9</span>。距離は <span class=\"chem\">(17/9) × 3 = 17/3</span>。</p><p>(c) <span class=\"chem\">P</span> では <span class=\"chem\">18 - 9 = 9</span>、<span class=\"chem\">Q</span> では <span class=\"chem\">-8 - 9 = -17</span>。距離は <span class=\"chem\">9/3</span> と <span class=\"chem\">17/3</span> であり、<span class=\"chem\">3 = |(2, -1, 2)|</span>。予想：<span class=\"chem\">D = |2x_0 - y_0 + 2z_0 - 9| / 3</span>。</p><p>(d) <span class=\"chem\">\\mathbf{n} = (a, b, c)</span> とする。点からの垂線は <span class=\"chem\">(x_0 + sa, y_0 + sb, z_0 + sc)</span>。代入すると <span class=\"chem\">ax_0 + by_0 + cz_0 + s(a^2 + b^2 + c^2) = d</span> なので <span class=\"chem\">s = (d - ax_0 - by_0 - cz_0)/(a^2 + b^2 + c^2)</span>。距離は <span class=\"chem\">|s||\\mathbf{n}| = |ax_0 + by_0 + cz_0 - d| sqrt(a^2 + b^2 + c^2) / (a^2 + b^2 + c^2) = |ax_0 + by_0 + cz_0 - d| / sqrt(a^2 + b^2 + c^2)</span>。</p><p>(e) <span class=\"chem\">|8 - 2 + 12 - k| / 3 = 4 => |18 - k| = 12 => k = 6</span> または <span class=\"chem\">k = 30</span>。</p><p>(f) 二つ目の平面は <span class=\"chem\">2x - y + 2z = 5/3</span>。点 <span class=\"chem\">(0, 0, 4.5)</span> は <span class=\"chem\">Π</span> 上にあるので、距離は <span class=\"chem\">|9 - 5/3| / 3 = 22/9</span>。</p>",
      markscheme: [
        // EN: M1: substitutes the parametric form of the line into the equation of <span class="chem">Π</span>.
        "M1：直線の媒介変数表示を <span class=\"chem\">Π</span> の方程式に代入する。",
        // EN: A1: <span class="chem">s = -1</span> and <span class="chem">F(2, 3, 4)</span>.
        "A1：<span class=\"chem\">s = -1</span>、<span class=\"chem\">F(2, 3, 4)</span>。",
        // EN: A1: distance <span class="chem">= 3</span>.
        "A1：距離 <span class=\"chem\">= 3</span>。",
        // EN: A1: <span class="chem">s = 17/9</span>.
        "A1：<span class=\"chem\">s = 17/9</span>。",
        // EN: A1: distance <span class="chem">= 17/3</span>.
        "A1：距離 <span class=\"chem\">= 17/3</span>。",
        // EN: A1: values <span class="chem">9</span> and <span class="chem">-17</span>.
        "A1：値 <span class=\"chem\">9</span> と <span class=\"chem\">-17</span>。",
        // EN: A1: a conjecture equivalent to <span class="chem">D = |2x_0 - y_0 + 2z_0 - 9| / 3</span> (the modulus is needed).
        "A1：<span class=\"chem\">D = |2x_0 - y_0 + 2z_0 - 9| / 3</span> と同値な予想（絶対値が必要）。",
        // EN: M1: writes the line through <span class="chem">(x_0, y_0, z_0)</span> with direction <span class="chem">(a, b, c)</span>.
        "M1：<span class=\"chem\">(x_0, y_0, z_0)</span> を通り方向が <span class=\"chem\">(a, b, c)</span> の直線を書く。",
        // EN: M1: substitutes it into <span class="chem">ax + by + cz = d</span>.
        "M1：それを <span class=\"chem\">ax + by + cz = d</span> に代入する。",
        // EN: A1: <span class="chem">s = (d - ax_0 - by_0 - cz_0)/(a^2 + b^2 + c^2)</span>.
        "A1：<span class=\"chem\">s = (d - ax_0 - by_0 - cz_0)/(a^2 + b^2 + c^2)</span>。",
        // EN: M1: uses distance <span class="chem">= |s| sqrt(a^2 + b^2 + c^2)</span>.
        "M1：距離 <span class=\"chem\">= |s| sqrt(a^2 + b^2 + c^2)</span> を用いる。",
        // EN: A1: simplifies to the given formula (AG).
        "A1：与えられた公式に簡単にする (AG)。",
        // EN: M1: sets <span class="chem">|18 - k| / 3 = 4</span>.
        "M1：<span class=\"chem\">|18 - k| / 3 = 4</span> とおく。",
        // EN: A1: <span class="chem">k = 6</span>.
        "A1：<span class=\"chem\">k = 6</span>。",
        // EN: A1: <span class="chem">k = 30</span>.
        "A1：<span class=\"chem\">k = 30</span>。",
        // EN: M1: writes both planes with the same normal, e.g. <span class="chem">2x - y + 2z = 5/3</span>.
        "M1：二つの平面を同じ法線ベクトルで表す。例：<span class=\"chem\">2x - y + 2z = 5/3</span>。",
        // EN: M1: applies the formula with a point on one plane (or uses <span class="chem">|d_1 - d_2| / |\mathbf{n}|</span>).
        "M1：一方の平面上の点を用いて公式を適用する（または <span class=\"chem\">|d_1 - d_2| / |\\mathbf{n}|</span> を用いる）。",
        // EN: A1: distance <span class="chem">= 22/9</span>.
        "A1：距離 <span class=\"chem\">= 22/9</span>。",
      ],
    },

    // ── t3-3-q057 · short · challenge · AHL · AHL 3.12–3.14 · 15 marks
    "t3-3-q057": {
      // EN: <p>This investigation looks at the angles between the four space diagonals of a cuboid. A cuboid has one vertex at the origin <span class="chem">O</span> and edges of lengths <span class="chem">a</span>, <span class="chem">b</span>, <span class="chem">c</span> along the positive <span class="chem">x</span>-, <span class="chem">y</span>- and <span class="chem">z</span>-axes. Its four space diagonals have direction vectors <span class="chem">\mathbf{d_1} = (a, b, c)</span>, <span class="chem">\mathbf{d_2} = (-a, b, c)</span>, <span class="chem">\mathbf{d_3} = (a, -b, c)</span> and <span class="chem">\mathbf{d_4} = (a, b, -c)</span>.</p><p>(a) For a cube with <span class="chem">a = b = c = 1</span>, find the acute angle between two space diagonals, in degrees. <strong>[3 marks]</strong></p><p>(b) For the cuboid with <span class="chem">a = 2</span>, <span class="chem">b = 3</span>, <span class="chem">c = 6</span>, find the acute angle between <span class="chem">\mathbf{d_1}</span> and each of <span class="chem">\mathbf{d_2}</span>, <span class="chem">\mathbf{d_3}</span> and <span class="chem">\mathbf{d_4}</span>. <strong>[4 marks]</strong></p><p>(c) Show that, for any cuboid, the acute angle <span class="chem">theta</span> between <span class="chem">\mathbf{d_1}</span> and <span class="chem">\mathbf{d_2}</span> satisfies <span class="chem">cos theta = |b^2 + c^2 - a^2| / (a^2 + b^2 + c^2)</span>. <strong>[3 marks]</strong></p><p>(d) Deduce a condition on <span class="chem">a, b, c</span> for <span class="chem">\mathbf{d_1}</span> and <span class="chem">\mathbf{d_2}</span> to be perpendicular. Hence find <span class="chem">a</span> when <span class="chem">b = 3</span> and <span class="chem">c = 4</span>. <strong>[2 marks]</strong></p><p>(e) The perpendicularity conditions for the pairs <span class="chem">(\mathbf{d_1}, \mathbf{d_2})</span>, <span class="chem">(\mathbf{d_1}, \mathbf{d_3})</span> and <span class="chem">(\mathbf{d_1}, \mathbf{d_4})</span> are found in the same way. Prove that no cuboid satisfies two of these conditions at once. <strong>[3 marks]</strong></p>
      stem: "<p>この探究では、直方体の四本の空間対角線どうしのなす角を調べる。直方体の一つの頂点は原点 <span class=\"chem\">O</span> にあり、正の <span class=\"chem\">x</span> 軸、<span class=\"chem\">y</span> 軸、<span class=\"chem\">z</span> 軸に沿った辺の長さはそれぞれ <span class=\"chem\">a</span>、<span class=\"chem\">b</span>、<span class=\"chem\">c</span> である。四本の空間対角線の方向ベクトルは <span class=\"chem\">\\mathbf{d_1} = (a, b, c)</span>、<span class=\"chem\">\\mathbf{d_2} = (-a, b, c)</span>、<span class=\"chem\">\\mathbf{d_3} = (a, -b, c)</span>、<span class=\"chem\">\\mathbf{d_4} = (a, b, -c)</span> である。</p><p>(a) <span class=\"chem\">a = b = c = 1</span> の立方体について、二本の空間対角線のなす鋭角を度数法で求めなさい (find)。 <strong>[3 marks]</strong></p><p>(b) <span class=\"chem\">a = 2</span>、<span class=\"chem\">b = 3</span>、<span class=\"chem\">c = 6</span> の直方体について、<span class=\"chem\">\\mathbf{d_1}</span> と <span class=\"chem\">\\mathbf{d_2}</span>、<span class=\"chem\">\\mathbf{d_3}</span>、<span class=\"chem\">\\mathbf{d_4}</span> それぞれとのなす鋭角を求めなさい (find)。 <strong>[4 marks]</strong></p><p>(c) 任意の直方体について、<span class=\"chem\">\\mathbf{d_1}</span> と <span class=\"chem\">\\mathbf{d_2}</span> のなす鋭角 <span class=\"chem\">theta</span> が <span class=\"chem\">cos theta = |b^2 + c^2 - a^2| / (a^2 + b^2 + c^2)</span> を満たすことを示しなさい (Show that)。 <strong>[3 marks]</strong></p><p>(d) <span class=\"chem\">\\mathbf{d_1}</span> と <span class=\"chem\">\\mathbf{d_2}</span> が垂直となるための <span class=\"chem\">a, b, c</span> の条件を導きなさい (Deduce)。これを用いて (Hence)、<span class=\"chem\">b = 3</span>、<span class=\"chem\">c = 4</span> のときの <span class=\"chem\">a</span> を求めなさい (find)。 <strong>[2 marks]</strong></p><p>(e) 組 <span class=\"chem\">(\\mathbf{d_1}, \\mathbf{d_2})</span>、<span class=\"chem\">(\\mathbf{d_1}, \\mathbf{d_3})</span>、<span class=\"chem\">(\\mathbf{d_1}, \\mathbf{d_4})</span> が垂直となる条件も同様に求められる。これらの条件のうち二つを同時に満たす直方体は存在しないことを証明しなさい (Prove)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: every "angle between diagonals" question here is the angle between two direction vectors, taken acute.
        "解読：ここでの「対角線のなす角」の問題はすべて、二つの方向ベクトルのなす角（鋭角をとる）です。",
        // EN: In (b), all four diagonals have the same length, so only the scalar products change.
        "(b) では、四本の対角線はすべて同じ長さなので、変わるのは内積だけです。",
        // EN: In (e), suppose two conditions hold and add them. What happens to the third edge?
        "(e) では、二つの条件が成り立つと仮定して足し合わせます。三つ目の辺はどうなるでしょうか。",
      ],
      // EN: <p>(a) <span class="chem">(1, 1, 1) \cdot (-1, 1, 1) = 1</span> and both magnitudes are <span class="chem">sqrt(3)</span>, so <span class="chem">cos theta = 1/3</span> and <span class="chem">theta ≈ 70.5°</span>.</p><p>(b) <span class="chem">|\mathbf{d_i}| = sqrt(4 + 9 + 36) = 7</span> for every diagonal. <span class="chem">\mathbf{d_1} \cdot \mathbf{d_2} = 41</span>, <span class="chem">\mathbf{d_1} \cdot \mathbf{d_3} = 31</span>, <span class="chem">\mathbf{d_1} \cdot \mathbf{d_4} = -23</span>. Acute angles: <span class="chem">arccos(41/49) ≈ 33.2°</span>, <span class="chem">arccos(31/49) ≈ 50.8°</span>, <span class="chem">arccos(23/49) ≈ 62.0°</span>.</p><p>(c) <span class="chem">\mathbf{d_1} \cdot \mathbf{d_2} = -a^2 + b^2 + c^2</span> and <span class="chem">|\mathbf{d_1}| = |\mathbf{d_2}| = sqrt(a^2 + b^2 + c^2)</span>. For the acute angle take the modulus: <span class="chem">cos theta = |b^2 + c^2 - a^2| / (a^2 + b^2 + c^2)</span>.</p><p>(d) Perpendicular when <span class="chem">a^2 = b^2 + c^2</span>. With <span class="chem">b = 3, c = 4</span>: <span class="chem">a = 5</span>.</p><p>(e) The three conditions are <span class="chem">a^2 = b^2 + c^2</span>, <span class="chem">b^2 = a^2 + c^2</span>, <span class="chem">c^2 = a^2 + b^2</span>. If, say, the first two held, adding gives <span class="chem">a^2 + b^2 = a^2 + b^2 + 2c^2</span>, so <span class="chem">c = 0</span>, which is impossible for a cuboid. The other pairs are the same with the letters swapped. So at most one condition can hold.</p>
      answer: "<p>(a) <span class=\"chem\">(1, 1, 1) \\cdot (-1, 1, 1) = 1</span> で、大きさはどちらも <span class=\"chem\">sqrt(3)</span> なので <span class=\"chem\">cos theta = 1/3</span>、<span class=\"chem\">theta ≈ 70.5°</span>。</p><p>(b) どの対角線についても <span class=\"chem\">|\\mathbf{d_i}| = sqrt(4 + 9 + 36) = 7</span>。<span class=\"chem\">\\mathbf{d_1} \\cdot \\mathbf{d_2} = 41</span>、<span class=\"chem\">\\mathbf{d_1} \\cdot \\mathbf{d_3} = 31</span>、<span class=\"chem\">\\mathbf{d_1} \\cdot \\mathbf{d_4} = -23</span>。鋭角：<span class=\"chem\">arccos(41/49) ≈ 33.2°</span>、<span class=\"chem\">arccos(31/49) ≈ 50.8°</span>、<span class=\"chem\">arccos(23/49) ≈ 62.0°</span>。</p><p>(c) <span class=\"chem\">\\mathbf{d_1} \\cdot \\mathbf{d_2} = -a^2 + b^2 + c^2</span>、<span class=\"chem\">|\\mathbf{d_1}| = |\\mathbf{d_2}| = sqrt(a^2 + b^2 + c^2)</span>。鋭角を求めるので絶対値をとって <span class=\"chem\">cos theta = |b^2 + c^2 - a^2| / (a^2 + b^2 + c^2)</span>。</p><p>(d) <span class=\"chem\">a^2 = b^2 + c^2</span> のとき垂直。<span class=\"chem\">b = 3, c = 4</span> のとき <span class=\"chem\">a = 5</span>。</p><p>(e) 三つの条件は <span class=\"chem\">a^2 = b^2 + c^2</span>、<span class=\"chem\">b^2 = a^2 + c^2</span>、<span class=\"chem\">c^2 = a^2 + b^2</span>。例えば最初の二つが成り立つとすると、足して <span class=\"chem\">a^2 + b^2 = a^2 + b^2 + 2c^2</span>、よって <span class=\"chem\">c = 0</span> となり、直方体ではあり得ない。他の組も文字を入れ替えれば同じである。よって成り立つ条件は高々一つである。</p>",
      markscheme: [
        // EN: M1: uses two diagonal directions of the cube, e.g. <span class="chem">(1, 1, 1)</span> and <span class="chem">(-1, 1, 1)</span>.
        "M1：立方体の二つの対角線の方向を用いる。例：<span class=\"chem\">(1, 1, 1)</span> と <span class=\"chem\">(-1, 1, 1)</span>。",
        // EN: A1: <span class="chem">cos theta = 1/3</span>.
        "A1：<span class=\"chem\">cos theta = 1/3</span>。",
        // EN: A1: <span class="chem">theta ≈ 70.5°</span>.
        "A1：<span class=\"chem\">theta ≈ 70.5°</span>。",
        // EN: M1: writes the four directions for <span class="chem">a = 2, b = 3, c = 6</span> and uses the scalar product.
        "M1：<span class=\"chem\">a = 2, b = 3, c = 6</span> のときの四つの方向を書き、内積を用いる。",
        // EN: A1: scalar products <span class="chem">41, 31, -23</span> and magnitudes 7.
        "A1：内積 <span class=\"chem\">41, 31, -23</span>、大きさ 7。",
        // EN: A1: <span class="chem">33.2°</span> and <span class="chem">50.8°</span>.
        "A1：<span class=\"chem\">33.2°</span>、<span class=\"chem\">50.8°</span>。",
        // EN: A1: <span class="chem">62.0°</span> (acute, not <span class="chem">118°</span>).
        "A1：<span class=\"chem\">62.0°</span>（鋭角であり、<span class=\"chem\">118°</span> ではない）。",
        // EN: M1: <span class="chem">\mathbf{d_1} \cdot \mathbf{d_2} = -a^2 + b^2 + c^2</span>.
        "M1：<span class=\"chem\">\\mathbf{d_1} \\cdot \\mathbf{d_2} = -a^2 + b^2 + c^2</span>。",
        // EN: A1: both magnitudes <span class="chem">sqrt(a^2 + b^2 + c^2)</span>.
        "A1：大きさはどちらも <span class=\"chem\">sqrt(a^2 + b^2 + c^2)</span>。",
        // EN: R1: takes the modulus for the acute angle, giving the result (AG).
        "R1：鋭角を求めるために絶対値をとり、結果を得る (AG)。",
        // EN: A1: <span class="chem">a^2 = b^2 + c^2</span>.
        "A1：<span class=\"chem\">a^2 = b^2 + c^2</span>。",
        // EN: A1: <span class="chem">a = 5</span>.
        "A1：<span class=\"chem\">a = 5</span>。",
        // EN: M1: writes the three conditions.
        "M1：三つの条件を書く。",
        // EN: M1: assumes two hold and combines them.
        "M1：二つが成り立つと仮定して組み合わせる。",
        // EN: R1: obtains a zero edge length, a contradiction, so at most one holds.
        "R1：辺の長さがゼロとなって矛盾するので、成り立つのは高々一つである。",
      ],
    },

    // ── t3-3-q058 · short · challenge · AHL · AHL 3.16–3.18 · 16 marks
    "t3-3-q058": {
      // EN: <p>This investigation finds a "Pythagoras theorem for areas". Let <span class="chem">O</span> be the origin.</p><p>(a) The points <span class="chem">A(2, 0, 0)</span>, <span class="chem">B(0, 3, 0)</span> and <span class="chem">C(0, 0, 6)</span> are given. Find <span class="chem">\mathbf{AB} \times \mathbf{AC}</span> and hence the exact area of triangle <span class="chem">ABC</span>. <strong>[3 marks]</strong></p><p>(b) Find the areas of the right-angled triangles <span class="chem">OAB</span>, <span class="chem">OBC</span> and <span class="chem">OCA</span>. Verify that the sum of their squares equals the square of the area of <span class="chem">ABC</span>. <strong>[3 marks]</strong></p><p>(c) Prove this result for <span class="chem">A(p, 0, 0)</span>, <span class="chem">B(0, q, 0)</span>, <span class="chem">C(0, 0, r)</span>, where <span class="chem">p, q, r &gt; 0</span>. <strong>[4 marks]</strong></p><p>In general, the components of <span class="chem">(1/2)\mathbf{AB} \times \mathbf{AC}</span> are, up to sign, the areas of the projections (shadows) of triangle <span class="chem">ABC</span> onto the coordinate planes <span class="chem">x = 0</span>, <span class="chem">y = 0</span> and <span class="chem">z = 0</span>.</p><p>(d) A triangular sail has corners <span class="chem">P(1, 2, 0.5)</span>, <span class="chem">Q(4, -1, 2.2)</span> and <span class="chem">R(2.5, 3.5, 4)</span>, in metres, with the <span class="chem">z</span>-axis vertical. Find the area of the sail and the area of its shadow on the ground <span class="chem">z = 0</span> when the sun is directly overhead. <strong>[4 marks]</strong></p><p>(e) Hence find the angle between the plane of the sail and the ground. <strong>[2 marks]</strong></p>
      stem: "<p>この探究では「面積についての三平方の定理」を見つける。<span class=\"chem\">O</span> を原点とする。</p><p>(a) 点 <span class=\"chem\">A(2, 0, 0)</span>、<span class=\"chem\">B(0, 3, 0)</span>、<span class=\"chem\">C(0, 0, 6)</span> が与えられている。<span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC}</span> を求め (Find)、これを用いて三角形 <span class=\"chem\">ABC</span> の面積の正確な値を求めなさい。 <strong>[3 marks]</strong></p><p>(b) 直角三角形 <span class=\"chem\">OAB</span>、<span class=\"chem\">OBC</span>、<span class=\"chem\">OCA</span> の面積を求めなさい (Find)。それらの 2 乗の和が <span class=\"chem\">ABC</span> の面積の 2 乗に等しいことを確かめなさい (Verify)。 <strong>[3 marks]</strong></p><p>(c) <span class=\"chem\">A(p, 0, 0)</span>、<span class=\"chem\">B(0, q, 0)</span>、<span class=\"chem\">C(0, 0, r)</span>（ただし <span class=\"chem\">p, q, r &gt; 0</span>）についてこの結果を証明しなさい (Prove)。 <strong>[4 marks]</strong></p><p>一般に、<span class=\"chem\">(1/2)\\mathbf{AB} \\times \\mathbf{AC}</span> の成分は、符号を除いて、三角形 <span class=\"chem\">ABC</span> の座標平面 <span class=\"chem\">x = 0</span>、<span class=\"chem\">y = 0</span>、<span class=\"chem\">z = 0</span> への正射影（影）の面積である。</p><p>(d) 三角形の帆の頂点は <span class=\"chem\">P(1, 2, 0.5)</span>、<span class=\"chem\">Q(4, -1, 2.2)</span>、<span class=\"chem\">R(2.5, 3.5, 4)</span>（単位はメートル）であり、<span class=\"chem\">z</span> 軸は鉛直である。帆の面積と、太陽が真上にあるときの地面 <span class=\"chem\">z = 0</span> 上の影の面積を求めなさい (Find)。 <strong>[4 marks]</strong></p><p>(e) これを用いて (Hence)、帆を含む平面と地面のなす角を求めなさい (find)。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: the "shadow on the ground" is the projection onto <span class="chem">z = 0</span>; the given fact says its area is half the size of the <span class="chem">z</span>-component of the vector product.
        "解読：「地面上の影」は <span class=\"chem\">z = 0</span> への正射影です。与えられた事実から、その面積は外積の <span class=\"chem\">z</span> 成分の大きさの半分です。",
        // EN: In (c), repeat (a) with letters. The right-angled face <span class="chem">OBC</span> has legs <span class="chem">q</span> and <span class="chem">r</span>.
        "(c) では、文字を使って (a) を繰り返します。直角三角形の面 <span class=\"chem\">OBC</span> の直角をはさむ二辺は <span class=\"chem\">q</span> と <span class=\"chem\">r</span> です。",
        // EN: In (e), compare: <span class="chem">cos theta = |\mathbf{n} \cdot \mathbf{k}| / |\mathbf{n}|</span> is the same ratio as shadow area over true area.
        "(e) では比べてみましょう：<span class=\"chem\">cos theta = |\\mathbf{n} \\cdot \\mathbf{k}| / |\\mathbf{n}|</span> は、影の面積を実際の面積で割った比と同じです。",
      ],
      // EN: <p>(a) <span class="chem">\mathbf{AB} = (-2, 3, 0)</span>, <span class="chem">\mathbf{AC} = (-2, 0, 6)</span>, <span class="chem">\mathbf{AB} \times \mathbf{AC} = (18, 12, 6)</span>. <span class="chem">|(18, 12, 6)| = sqrt(504) = 6 sqrt(14)</span>, so the area is <span class="chem">3 sqrt(14)</span>.</p><p>(b) <span class="chem">OAB = (1/2)(2)(3) = 3</span>, <span class="chem">OBC = (1/2)(3)(6) = 9</span>, <span class="chem">OCA = (1/2)(6)(2) = 6</span>. <span class="chem">3^2 + 9^2 + 6^2 = 126 = (3 sqrt(14))^2</span>.</p><p>(c) <span class="chem">\mathbf{AB} = (-p, q, 0)</span>, <span class="chem">\mathbf{AC} = (-p, 0, r)</span>, <span class="chem">\mathbf{AB} \times \mathbf{AC} = (qr, pr, pq)</span>. So <span class="chem">(area ABC)^2 = (1/4)(q^2r^2 + p^2r^2 + p^2q^2) = (qr/2)^2 + (pr/2)^2 + (pq/2)^2</span>, which are the squares of the areas of <span class="chem">OBC</span>, <span class="chem">OCA</span>, <span class="chem">OAB</span>.</p><p>(d) <span class="chem">\mathbf{PQ} = (3, -3, 1.7)</span>, <span class="chem">\mathbf{PR} = (1.5, 1.5, 3.5)</span>, <span class="chem">\mathbf{PQ} \times \mathbf{PR} = (-13.05, -7.95, 9)</span>. Area of sail <span class="chem">= (1/2)|(-13.05, -7.95, 9)| ≈ 8.87</span> m<sup>2</sup>. Shadow on <span class="chem">z = 0</span>: <span class="chem">(1/2)|9| = 4.5</span> m<sup>2</sup>.</p><p>(e) <span class="chem">cos theta = 4.5 / 8.867 ≈ 0.5075</span> (the same as <span class="chem">|\mathbf{n} \cdot \mathbf{k}| / |\mathbf{n}|</span>), so <span class="chem">theta ≈ 59.5°</span>.</p>
      answer: "<p>(a) <span class=\"chem\">\\mathbf{AB} = (-2, 3, 0)</span>、<span class=\"chem\">\\mathbf{AC} = (-2, 0, 6)</span>、<span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC} = (18, 12, 6)</span>。<span class=\"chem\">|(18, 12, 6)| = sqrt(504) = 6 sqrt(14)</span> なので、面積は <span class=\"chem\">3 sqrt(14)</span>。</p><p>(b) <span class=\"chem\">OAB = (1/2)(2)(3) = 3</span>、<span class=\"chem\">OBC = (1/2)(3)(6) = 9</span>、<span class=\"chem\">OCA = (1/2)(6)(2) = 6</span>。<span class=\"chem\">3^2 + 9^2 + 6^2 = 126 = (3 sqrt(14))^2</span>。</p><p>(c) <span class=\"chem\">\\mathbf{AB} = (-p, q, 0)</span>、<span class=\"chem\">\\mathbf{AC} = (-p, 0, r)</span>、<span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC} = (qr, pr, pq)</span>。よって <span class=\"chem\">(area ABC)^2 = (1/4)(q^2r^2 + p^2r^2 + p^2q^2) = (qr/2)^2 + (pr/2)^2 + (pq/2)^2</span> であり、これらは <span class=\"chem\">OBC</span>、<span class=\"chem\">OCA</span>、<span class=\"chem\">OAB</span> の面積の 2 乗である。</p><p>(d) <span class=\"chem\">\\mathbf{PQ} = (3, -3, 1.7)</span>、<span class=\"chem\">\\mathbf{PR} = (1.5, 1.5, 3.5)</span>、<span class=\"chem\">\\mathbf{PQ} \\times \\mathbf{PR} = (-13.05, -7.95, 9)</span>。帆の面積 <span class=\"chem\">= (1/2)|(-13.05, -7.95, 9)| ≈ 8.87</span> m<sup>2</sup>。<span class=\"chem\">z = 0</span> 上の影：<span class=\"chem\">(1/2)|9| = 4.5</span> m<sup>2</sup>。</p><p>(e) <span class=\"chem\">cos theta = 4.5 / 8.867 ≈ 0.5075</span>（<span class=\"chem\">|\\mathbf{n} \\cdot \\mathbf{k}| / |\\mathbf{n}|</span> と同じ）なので <span class=\"chem\">theta ≈ 59.5°</span>。</p>",
      markscheme: [
        // EN: M1: forms <span class="chem">\mathbf{AB}</span> and <span class="chem">\mathbf{AC}</span> and their vector product.
        "M1：<span class=\"chem\">\\mathbf{AB}</span> と <span class=\"chem\">\\mathbf{AC}</span>、およびそれらの外積を求める。",
        // EN: A1: <span class="chem">(18, 12, 6)</span>.
        "A1：<span class=\"chem\">(18, 12, 6)</span>。",
        // EN: A1: area <span class="chem">3 sqrt(14)</span>.
        "A1：面積 <span class=\"chem\">3 sqrt(14)</span>。",
        // EN: A1: areas 3, 9 and 6.
        "A1：面積 3、9、6。",
        // EN: M1: sum of squares <span class="chem">= 126</span>.
        "M1：2 乗の和 <span class=\"chem\">= 126</span>。",
        // EN: A1: <span class="chem">(3 sqrt(14))^2 = 126</span>, so the result holds.
        "A1：<span class=\"chem\">(3 sqrt(14))^2 = 126</span> なので結果が成り立つ。",
        // EN: M1: <span class="chem">\mathbf{AB} = (-p, q, 0)</span>, <span class="chem">\mathbf{AC} = (-p, 0, r)</span>.
        "M1：<span class=\"chem\">\\mathbf{AB} = (-p, q, 0)</span>、<span class=\"chem\">\\mathbf{AC} = (-p, 0, r)</span>。",
        // EN: A1: <span class="chem">\mathbf{AB} \times \mathbf{AC} = (qr, pr, pq)</span>.
        "A1：<span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC} = (qr, pr, pq)</span>。",
        // EN: M1: area squared <span class="chem">= (1/4)|\mathbf{AB} \times \mathbf{AC}|^2</span>.
        "M1：面積の 2 乗 <span class=\"chem\">= (1/4)|\\mathbf{AB} \\times \\mathbf{AC}|^2</span>。",
        // EN: R1: identifies <span class="chem">qr/2</span>, <span class="chem">pr/2</span>, <span class="chem">pq/2</span> as the areas of the three right-angled faces (AG).
        "R1：<span class=\"chem\">qr/2</span>、<span class=\"chem\">pr/2</span>、<span class=\"chem\">pq/2</span> が三つの直角の面の面積であると特定する (AG)。",
        // EN: M1: finds <span class="chem">\mathbf{PQ} \times \mathbf{PR}</span>.
        "M1：<span class=\"chem\">\\mathbf{PQ} \\times \\mathbf{PR}</span> を求める。",
        // EN: A1: <span class="chem">(-13.05, -7.95, 9)</span>.
        "A1：<span class=\"chem\">(-13.05, -7.95, 9)</span>。",
        // EN: A1: area of sail <span class="chem">≈ 8.87</span> m<sup>2</sup>.
        "A1：帆の面積 <span class=\"chem\">≈ 8.87</span> m<sup>2</sup>。",
        // EN: A1: shadow area <span class="chem">4.5</span> m<sup>2</sup>.
        "A1：影の面積 <span class=\"chem\">4.5</span> m<sup>2</sup>。",
        // EN: M1: <span class="chem">cos theta = </span> shadow area / true area (or uses the normals).
        "M1：<span class=\"chem\">cos theta = </span> 影の面積／実際の面積（または法線ベクトルを用いる）。",
        // EN: A1: <span class="chem">theta ≈ 59.5°</span>.
        "A1：<span class=\"chem\">theta ≈ 59.5°</span>。",
      ],
    },

    // ── t3-3-q059 · short · challenge · AHL · AHL 3.13, 3.14, 3.16 · 18 marks
    "t3-3-q059": {
      // EN: <p>This investigation finds a general rule for the closest approach of two objects moving with constant velocities. If their relative position is <span class="chem">\mathbf{d}(t) = \mathbf{d_0} + t\mathbf{w}</span>, where <span class="chem">\mathbf{w} != \mathbf{0}</span> is the relative velocity, then the distance between them is <span class="chem">|\mathbf{d}(t)|</span>.</p><p>(a) Let <span class="chem">\mathbf{d_0} = (6, -3, 2)</span> and <span class="chem">\mathbf{w} = (-2, 1, 1)</span>. Show that <span class="chem">|\mathbf{d}(t)|^2 = 6t^2 - 26t + 49</span>. Hence find the time of closest approach and the exact minimum distance. <strong>[4 marks]</strong></p><p>(b) Show that, at the time found in (a), <span class="chem">\mathbf{d}(t) \cdot \mathbf{w} = 0</span>. <strong>[2 marks]</strong></p><p>(c) Prove that, in general, <span class="chem">|\mathbf{d}(t)|</span> is least when <span class="chem">t = -(\mathbf{d_0} \cdot \mathbf{w}) / |\mathbf{w}|^2</span>. <strong>[3 marks]</strong></p><p>(d) Show that the minimum distance <span class="chem">d_{min}</span> satisfies <span class="chem">d_{min}^2 = |\mathbf{d_0}|^2 - (\mathbf{d_0} \cdot \mathbf{w})^2 / |\mathbf{w}|^2</span>, and verify this for the vectors in (a). <strong>[3 marks]</strong></p><p>(e) For the vectors in (a), verify that <span class="chem">|\mathbf{d_0} \times \mathbf{w}|^2 / |\mathbf{w}|^2</span> gives the same value. <strong>[2 marks]</strong></p><p>(f) Two ships have positions <span class="chem">\mathbf{r_A} = (2.5, -1) + t(14, 6)</span> and <span class="chem">\mathbf{r_B} = (21, 4.5) + t(-6, 9)</span>, in km, <span class="chem">t</span> hours after midnight. Use your results to find the time of closest approach, in minutes after midnight, and the minimum distance between the ships. <strong>[4 marks]</strong></p>
      stem: "<p>この探究では、一定の速度で動く二つの物体が最も近づくときの一般的な規則を見つける。相対位置が <span class=\"chem\">\\mathbf{d}(t) = \\mathbf{d_0} + t\\mathbf{w}</span>（ただし <span class=\"chem\">\\mathbf{w} != \\mathbf{0}</span> は相対速度）であるとき、両者の距離は <span class=\"chem\">|\\mathbf{d}(t)|</span> である。</p><p>(a) <span class=\"chem\">\\mathbf{d_0} = (6, -3, 2)</span>、<span class=\"chem\">\\mathbf{w} = (-2, 1, 1)</span> とする。<span class=\"chem\">|\\mathbf{d}(t)|^2 = 6t^2 - 26t + 49</span> であることを示しなさい (Show that)。これを用いて (Hence)、最も近づく時刻と最短距離の正確な値を求めなさい (find)。 <strong>[4 marks]</strong></p><p>(b) (a) で求めた時刻において <span class=\"chem\">\\mathbf{d}(t) \\cdot \\mathbf{w} = 0</span> であることを示しなさい (Show that)。 <strong>[2 marks]</strong></p><p>(c) 一般に、<span class=\"chem\">|\\mathbf{d}(t)|</span> は <span class=\"chem\">t = -(\\mathbf{d_0} \\cdot \\mathbf{w}) / |\\mathbf{w}|^2</span> のとき最小となることを証明しなさい (Prove)。 <strong>[3 marks]</strong></p><p>(d) 最短距離 <span class=\"chem\">d_{min}</span> が <span class=\"chem\">d_{min}^2 = |\\mathbf{d_0}|^2 - (\\mathbf{d_0} \\cdot \\mathbf{w})^2 / |\\mathbf{w}|^2</span> を満たすことを示し (Show that)、(a) のベクトルについてこれを確かめなさい (verify)。 <strong>[3 marks]</strong></p><p>(e) (a) のベクトルについて、<span class=\"chem\">|\\mathbf{d_0} \\times \\mathbf{w}|^2 / |\\mathbf{w}|^2</span> が同じ値を与えることを確かめなさい (verify)。 <strong>[2 marks]</strong></p><p>(f) 二隻の船の、午前零時から <span class=\"chem\">t</span> 時間後の位置は <span class=\"chem\">\\mathbf{r_A} = (2.5, -1) + t(14, 6)</span>、<span class=\"chem\">\\mathbf{r_B} = (21, 4.5) + t(-6, 9)</span>（単位は km）である。これまでの結果を用いて、最も近づく時刻（午前零時から何分後か）と船の間の最短距離を求めなさい (find)。 <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: the two objects are replaced by one point moving with the relative velocity <span class="chem">\mathbf{w}</span>. "Closest approach" means "minimum of <span class="chem">|\mathbf{d}(t)|</span>".
        "解読：二つの物体を、相対速度 <span class=\"chem\">\\mathbf{w}</span> で動く一つの点に置き換えます。「最も近づく」とは「<span class=\"chem\">|\\mathbf{d}(t)|</span> の最小値」のことです。",
        // EN: A quadratic <span class="chem">At^2 + Bt + C</span> with <span class="chem">A &gt; 0</span> is least at <span class="chem">t = -B/(2A)</span>.
        "<span class=\"chem\">A &gt; 0</span> である二次式 <span class=\"chem\">At^2 + Bt + C</span> は <span class=\"chem\">t = -B/(2A)</span> で最小になります。",
        // EN: In (f), <span class="chem">\mathbf{d_0}</span> is the difference of the starting positions and <span class="chem">\mathbf{w}</span> is the difference of the velocities.
        "(f) では、<span class=\"chem\">\\mathbf{d_0}</span> は出発位置の差、<span class=\"chem\">\\mathbf{w}</span> は速度の差です。",
      ],
      // EN: <p>(a) <span class="chem">\mathbf{d}(t) = (6 - 2t, -3 + t, 2 + t)</span>, so <span class="chem">|\mathbf{d}|^2 = (36 - 24t + 4t^2) + (9 - 6t + t^2) + (4 + 4t + t^2) = 6t^2 - 26t + 49</span>. The minimum is at <span class="chem">t = 26/12 = 13/6</span>, where <span class="chem">|\mathbf{d}|^2 = 49 - 169/6 = 125/6</span>. The minimum distance is <span class="chem">sqrt(125/6) = 5 sqrt(30)/6 ≈ 4.56</span>.</p><p>(b) <span class="chem">\mathbf{d}(13/6) = (5/3, -5/6, 25/6)</span> and <span class="chem">(5/3)(-2) + (-5/6)(1) + (25/6)(1) = -20/6 - 5/6 + 25/6 = 0</span>.</p><p>(c) <span class="chem">f(t) = |\mathbf{d}|^2 = (\mathbf{d_0} + t\mathbf{w}) \cdot (\mathbf{d_0} + t\mathbf{w}) = |\mathbf{d_0}|^2 + 2t(\mathbf{d_0} \cdot \mathbf{w}) + t^2|\mathbf{w}|^2</span>. This quadratic has positive leading coefficient, so its minimum is where <span class="chem">f'(t) = 2(\mathbf{d_0} \cdot \mathbf{w}) + 2t|\mathbf{w}|^2 = 0</span>, i.e. <span class="chem">t = -(\mathbf{d_0} \cdot \mathbf{w}) / |\mathbf{w}|^2</span>. Minimising <span class="chem">|\mathbf{d}|^2</span> also minimises <span class="chem">|\mathbf{d}|</span>.</p><p>(d) Substituting: <span class="chem">d_{min}^2 = |\mathbf{d_0}|^2 - 2(\mathbf{d_0} \cdot \mathbf{w})^2/|\mathbf{w}|^2 + (\mathbf{d_0} \cdot \mathbf{w})^2/|\mathbf{w}|^2 = |\mathbf{d_0}|^2 - (\mathbf{d_0} \cdot \mathbf{w})^2/|\mathbf{w}|^2</span>. In (a): <span class="chem">49 - (-13)^2/6 = 125/6</span>.</p><p>(e) <span class="chem">\mathbf{d_0} \times \mathbf{w} = (6, -3, 2) \times (-2, 1, 1) = (-5, -10, 0)</span>, so <span class="chem">|\mathbf{d_0} \times \mathbf{w}|^2 / |\mathbf{w}|^2 = 125/6</span>.</p><p>(f) <span class="chem">\mathbf{d_0} = (2.5 - 21, -1 - 4.5) = (-18.5, -5.5)</span>, <span class="chem">\mathbf{w} = (14 + 6, 6 - 9) = (20, -3)</span>. <span class="chem">\mathbf{d_0} \cdot \mathbf{w} = -353.5</span>, <span class="chem">|\mathbf{w}|^2 = 409</span>, so <span class="chem">t = 353.5/409 ≈ 0.8643</span> h <span class="chem">≈ 51.9</span> minutes after midnight. <span class="chem">d_{min}^2 = 372.5 - 353.5^2/409 ≈ 66.97</span>, so <span class="chem">d_{min} ≈ 8.18</span> km.</p>
      answer: "<p>(a) <span class=\"chem\">\\mathbf{d}(t) = (6 - 2t, -3 + t, 2 + t)</span> なので <span class=\"chem\">|\\mathbf{d}|^2 = (36 - 24t + 4t^2) + (9 - 6t + t^2) + (4 + 4t + t^2) = 6t^2 - 26t + 49</span>。最小となるのは <span class=\"chem\">t = 26/12 = 13/6</span> のときで、そのとき <span class=\"chem\">|\\mathbf{d}|^2 = 49 - 169/6 = 125/6</span>。最短距離は <span class=\"chem\">sqrt(125/6) = 5 sqrt(30)/6 ≈ 4.56</span>。</p><p>(b) <span class=\"chem\">\\mathbf{d}(13/6) = (5/3, -5/6, 25/6)</span>、<span class=\"chem\">(5/3)(-2) + (-5/6)(1) + (25/6)(1) = -20/6 - 5/6 + 25/6 = 0</span>。</p><p>(c) <span class=\"chem\">f(t) = |\\mathbf{d}|^2 = (\\mathbf{d_0} + t\\mathbf{w}) \\cdot (\\mathbf{d_0} + t\\mathbf{w}) = |\\mathbf{d_0}|^2 + 2t(\\mathbf{d_0} \\cdot \\mathbf{w}) + t^2|\\mathbf{w}|^2</span>。この二次式の最高次の係数は正なので、最小となるのは <span class=\"chem\">f'(t) = 2(\\mathbf{d_0} \\cdot \\mathbf{w}) + 2t|\\mathbf{w}|^2 = 0</span>、すなわち <span class=\"chem\">t = -(\\mathbf{d_0} \\cdot \\mathbf{w}) / |\\mathbf{w}|^2</span> のときである。<span class=\"chem\">|\\mathbf{d}|^2</span> を最小にすれば <span class=\"chem\">|\\mathbf{d}|</span> も最小になる。</p><p>(d) 代入すると <span class=\"chem\">d_{min}^2 = |\\mathbf{d_0}|^2 - 2(\\mathbf{d_0} \\cdot \\mathbf{w})^2/|\\mathbf{w}|^2 + (\\mathbf{d_0} \\cdot \\mathbf{w})^2/|\\mathbf{w}|^2 = |\\mathbf{d_0}|^2 - (\\mathbf{d_0} \\cdot \\mathbf{w})^2/|\\mathbf{w}|^2</span>。(a) では <span class=\"chem\">49 - (-13)^2/6 = 125/6</span>。</p><p>(e) <span class=\"chem\">\\mathbf{d_0} \\times \\mathbf{w} = (6, -3, 2) \\times (-2, 1, 1) = (-5, -10, 0)</span> なので <span class=\"chem\">|\\mathbf{d_0} \\times \\mathbf{w}|^2 / |\\mathbf{w}|^2 = 125/6</span>。</p><p>(f) <span class=\"chem\">\\mathbf{d_0} = (2.5 - 21, -1 - 4.5) = (-18.5, -5.5)</span>、<span class=\"chem\">\\mathbf{w} = (14 + 6, 6 - 9) = (20, -3)</span>。<span class=\"chem\">\\mathbf{d_0} \\cdot \\mathbf{w} = -353.5</span>、<span class=\"chem\">|\\mathbf{w}|^2 = 409</span> なので <span class=\"chem\">t = 353.5/409 ≈ 0.8643</span> h、すなわち午前零時から <span class=\"chem\">≈ 51.9</span> 分後。<span class=\"chem\">d_{min}^2 = 372.5 - 353.5^2/409 ≈ 66.97</span> なので <span class=\"chem\">d_{min} ≈ 8.18</span> km。</p>",
      markscheme: [
        // EN: A1: expands <span class="chem">|\mathbf{d}(t)|^2</span> correctly to <span class="chem">6t^2 - 26t + 49</span> (AG).
        "A1：<span class=\"chem\">|\\mathbf{d}(t)|^2</span> を正しく展開して <span class=\"chem\">6t^2 - 26t + 49</span> を得る (AG)。",
        // EN: M1: finds the minimum of the quadratic (vertex, completing the square or derivative).
        "M1：二次式の最小値を求める（頂点、平方完成、または導関数）。",
        // EN: A1: <span class="chem">t = 13/6</span>.
        "A1：<span class=\"chem\">t = 13/6</span>。",
        // EN: A1: minimum distance <span class="chem">sqrt(125/6)</span> (or <span class="chem">5 sqrt(30)/6</span>).
        "A1：最短距離 <span class=\"chem\">sqrt(125/6)</span>（または <span class=\"chem\">5 sqrt(30)/6</span>）。",
        // EN: M1: substitutes <span class="chem">t = 13/6</span> to get <span class="chem">\mathbf{d} = (5/3, -5/6, 25/6)</span>.
        "M1：<span class=\"chem\">t = 13/6</span> を代入して <span class=\"chem\">\\mathbf{d} = (5/3, -5/6, 25/6)</span> を得る。",
        // EN: A1: scalar product with <span class="chem">\mathbf{w}</span> equals 0.
        "A1：<span class=\"chem\">\\mathbf{w}</span> との内積が 0 になる。",
        // EN: M1: expands <span class="chem">|\mathbf{d_0} + t\mathbf{w}|^2</span> using scalar products.
        "M1：内積を用いて <span class=\"chem\">|\\mathbf{d_0} + t\\mathbf{w}|^2</span> を展開する。",
        // EN: M1: finds the turning point (derivative or vertex of the quadratic).
        "M1：極値をとる点を求める（導関数、または二次式の頂点）。",
        // EN: R1: states it is a minimum (positive coefficient <span class="chem">|\mathbf{w}|^2</span>) and that minimising the square minimises the distance (AG).
        "R1：それが最小である（係数 <span class=\"chem\">|\\mathbf{w}|^2</span> が正）こと、および 2 乗を最小にすれば距離も最小になることを述べる (AG)。",
        // EN: M1: substitutes <span class="chem">t</span> into the expression for <span class="chem">|\mathbf{d}|^2</span>.
        "M1：<span class=\"chem\">t</span> を <span class=\"chem\">|\\mathbf{d}|^2</span> の式に代入する。",
        // EN: A1: simplifies to the given result (AG).
        "A1：与えられた結果に簡単にする (AG)。",
        // EN: A1: <span class="chem">\mathbf{d_0} \cdot \mathbf{w} = -13</span> and <span class="chem">49 - 169/6 = 125/6</span>.
        "A1：<span class=\"chem\">\\mathbf{d_0} \\cdot \\mathbf{w} = -13</span>、<span class=\"chem\">49 - 169/6 = 125/6</span>。",
        // EN: A1: <span class="chem">\mathbf{d_0} \times \mathbf{w} = (-5, -10, 0)</span>.
        "A1：<span class=\"chem\">\\mathbf{d_0} \\times \\mathbf{w} = (-5, -10, 0)</span>。",
        // EN: A1: <span class="chem">125/6</span>, the same value.
        "A1：<span class=\"chem\">125/6</span> で、同じ値である。",
        // EN: M1: forms <span class="chem">\mathbf{d_0} = (-18.5, -5.5)</span> and <span class="chem">\mathbf{w} = (20, -3)</span>.
        "M1：<span class=\"chem\">\\mathbf{d_0} = (-18.5, -5.5)</span>、<span class=\"chem\">\\mathbf{w} = (20, -3)</span> を作る。",
        // EN: M1: applies the formula for <span class="chem">t</span> (or minimises on the GDC).
        "M1：<span class=\"chem\">t</span> の公式を適用する（または GDC で最小化する）。",
        // EN: A1: <span class="chem">t ≈ 0.864</span> h, about 51.9 minutes after midnight.
        "A1：<span class=\"chem\">t ≈ 0.864</span> h、午前零時から約 51.9 分後。",
        // EN: A1: minimum distance <span class="chem">≈ 8.18</span> km.
        "A1：最短距離 <span class=\"chem\">≈ 8.18</span> km。",
      ],
    },

  }
});
