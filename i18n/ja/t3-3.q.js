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
