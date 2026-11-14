/* t3-3.q — zh-Hant question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't3-3.q', {
  questions: {

    // ── t3-3-q001 · mcq · foundation · AHL · AHL 3.12 · 3 marks
    "t3-3-q001": {
      // EN: <p>A drone flies from point <span class="chem">A(1, -2, 4)</span> towards point <span class="chem">B(3, 4, 1)</span> at a constant speed of <span class="unit">21 m s-1</span>. What is its velocity vector?</p>
      stem: "<p>一架無人機從點 <span class=\"chem\">A(1, -2, 4)</span> 朝點 <span class=\"chem\">B(3, 4, 1)</span> 以 <span class=\"unit\">21 m s-1</span> 的等速率飛行。它的速度向量是甚麼？</p>",
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
        "求位移向量 <span class=\"chem\">\\mathbf{AB} = \\mathbf{b} - \\mathbf{a} = (3 - 1, 4 - (-2), 1 - 4)</span>。",
        // EN: Divide <span class="chem">\mathbf{AB}</span> by its magnitude <span class="chem">|\mathbf{AB}|</span> to get the unit direction vector, then multiply by <span class="chem">21</span>.
        "將 <span class=\"chem\">\\mathbf{AB}</span> 除以其模長 <span class=\"chem\">|\\mathbf{AB}|</span> 得到單位方向向量，再乘以 <span class=\"chem\">21</span>。",
      ],
      // EN: <p><span class="chem">\mathbf{AB} = (2, 6, -3)</span> with <span class="chem">|\mathbf{AB}| = sqrt(2^2 + 6^2 + (-3)^2) = sqrt(49) = 7</span>. Rescaling to speed 21 gives <span class="chem">\mathbf{v} = (21 / 7)(2, 6, -3) = (6, 18, -9)</span>.</p>
      solution: "<p><span class=\"chem\">\\mathbf{AB} = (2, 6, -3)</span>，其模長 <span class=\"chem\">|\\mathbf{AB}| = sqrt(2^2 + 6^2 + (-3)^2) = sqrt(49) = 7</span>。縮放至速率 21 得 <span class=\"chem\">\\mathbf{v} = (21 / 7)(2, 6, -3) = (6, 18, -9)</span>。</p>",
      misconception: {
        // EN (option B): <span class="chem">(2, 6, -3)</span> is the displacement vector <span class="chem">\mathbf{AB}</span>, whose magnitude is <span class="chem">sqrt(4 + 36 + 9) = 7</span>, not <span class="chem">21</span>.
        "1": "<span class=\"chem\">(2, 6, -3)</span> 是位移向量 <span class=\"chem\">\\mathbf{AB}</span>，其模長為 <span class=\"chem\">sqrt(4 + 36 + 9) = 7</span>，而非 <span class=\"chem\">21</span>。",
        // EN (option C): You multiplied <span class="chem">\mathbf{AB}</span> by <span class="chem">21</span> without dividing by its magnitude <span class="chem">|\mathbf{AB}| = 7</span> first.
        "2": "你把 <span class=\"chem\">\\mathbf{AB}</span> 直接乘以 <span class=\"chem\">21</span>，而沒有先除以其模長 <span class=\"chem\">|\\mathbf{AB}| = 7</span>。",
        // EN (option D): That points from <span class="chem">B</span> to <span class="chem">A</span> (<span class="chem">a - b</span>) instead of from <span class="chem">A</span> to <span class="chem">B</span> (<span class="chem">b - a</span>).
        "3": "該向量是由 <span class=\"chem\">B</span> 指向 <span class=\"chem\">A</span>（<span class=\"chem\">a - b</span>），而非由 <span class=\"chem\">A</span> 指向 <span class=\"chem\">B</span>（<span class=\"chem\">b - a</span>）。",
      },
    },

    // ── t3-3-q002 · numeric · foundation · AHL · AHL 3.13 · 2 marks
    "t3-3-q002": {
      // EN: <p>Find the value of <span class="chem">k</span> for which the vectors <span class="chem">\mathbf{u} = (k, 2, -3)</span> and <span class="chem">\mathbf{v} = (4, k, 2)</span> are perpendicular.</p>
      stem: "<p>求 (Find) 使向量 <span class=\"chem\">\\mathbf{u} = (k, 2, -3)</span> 與 <span class=\"chem\">\\mathbf{v} = (4, k, 2)</span> 垂直的 <span class=\"chem\">k</span> 值。</p>",
      hints: [
        // EN: Two non-zero vectors are perpendicular if and only if <span class="chem">\mathbf{u} \cdot \mathbf{v} = 0</span>.
        "兩個非零向量垂直，當且僅當 <span class=\"chem\">\\mathbf{u} \\cdot \\mathbf{v} = 0</span>。",
        // EN: Compute <span class="chem">k(4) + 2(k) + (-3)(2) = 0</span> and solve for <span class="chem">k</span>.
        "計算 <span class=\"chem\">k(4) + 2(k) + (-3)(2) = 0</span> 並解出 <span class=\"chem\">k</span>。",
      ],
      // EN: <p>Setting the dot product to zero gives <span class="chem">4k + 2k - 6 = 0 => 6k = 6 => k = 1</span>.</p>
      solution: "<p>令點積為零得 <span class=\"chem\">4k + 2k - 6 = 0 => 6k = 6 => k = 1</span>。</p>",
    },

    // ── t3-3-q003 · mcq · foundation · AHL · AHL 3.14 · 2 marks
    "t3-3-q003": {
      // EN: <p>A 3D line has Cartesian equation <span class="chem">(4 - 2x) / 6 = (y + 1) / 3 = (z - 5) / (-2)</span>. Which of the following is a valid direction vector for this line?</p>
      stem: "<p>一條 3D 直線的笛卡兒方程為 <span class=\"chem\">(4 - 2x) / 6 = (y + 1) / 3 = (z - 5) / (-2)</span>。下列哪個是該直線的有效方向向量？</p>",
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
        "改寫 <span class=\"chem\">(4 - 2x) / 6</span> 使分子為 <span class=\"chem\">x - x_0</span>：分子分母同除以 <span class=\"chem\">-2</span>。",
      ],
      // EN: <p>Dividing numerator and denominator of the first fraction by <span class="chem">-2</span> gives <span class="chem">(x - 2) / (-3) = (y + 1) / 3 = (z - 5) / (-2)</span>, so a direction vector is <span class="chem">(-3, 3, -2)</span>.</p>
      solution: "<p>將第一個分式的分子與分母同除以 <span class=\"chem\">-2</span>，得 <span class=\"chem\">(x - 2) / (-3) = (y + 1) / 3 = (z - 5) / (-2)</span>，故方向向量為 <span class=\"chem\">(-3, 3, -2)</span>。</p>",
      misconception: {
        // EN (option B): The numerator <span class="chem">4 - 2x</span> must be rewritten with coefficient <span class="chem">+1</span> on <span class="chem">x</span> before reading the denominator.
        "1": "必須先把分子 <span class=\"chem\">4 - 2x</span> 改寫成 <span class=\"chem\">x</span> 的係數為 <span class=\"chem\">+1</span>，才能讀出分母。",
        // EN (option C): Factoring <span class="chem">-2</span> out of <span class="chem">4 - 2x</span> gives <span class="chem">-2(x - 2) / 6 = (x - 2) / (-3)</span>, so the <span class="chem">x</span>-component is <span class="chem">-3</span>, not <span class="chem">-6</span>.
        "2": "從 <span class=\"chem\">4 - 2x</span> 抽出 <span class=\"chem\">-2</span> 得 <span class=\"chem\">-2(x - 2) / 6 = (x - 2) / (-3)</span>，故 <span class=\"chem\">x</span> 分量為 <span class=\"chem\">-3</span>，而非 <span class=\"chem\">-6</span>。",
        // EN (option D): <span class="chem">(2, -1, 5)</span> is a point on the line, not its direction vector.
        "3": "<span class=\"chem\">(2, -1, 5)</span> 是直線上的點，而非其方向向量。",
      },
    },

    // ── t3-3-q004 · multi · foundation · AHL · AHL 3.13, 3.16 · 3 marks
    "t3-3-q004": {
      // EN: <p>Select <strong>all</strong> statements that are always true for any 3D vectors <span class="chem">\mathbf{u}, \mathbf{v}, \mathbf{w}</span>.</p>
      stem: "<p>選出<strong>所有</strong>對任意 3D 向量 <span class=\"chem\">\\mathbf{u}, \\mathbf{v}, \\mathbf{w}</span> 皆恒成立的陳述。</p>",
      options: [
        // EN: <span class="chem">\mathbf{u} \cdot \mathbf{v} = \mathbf{v} \cdot \mathbf{u}</span>
        "<span class=\"chem\">\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{v} \\cdot \\mathbf{u}</span>",
        // EN: <span class="chem">\mathbf{u} \times \mathbf{v} = -(\mathbf{v} \times \mathbf{u})</span>
        "<span class=\"chem\">\\mathbf{u} \\times \\mathbf{v} = -(\\mathbf{v} \\times \\mathbf{u})</span>",
        // EN: <span class="chem">(\mathbf{u} \times \mathbf{v}) \cdot \mathbf{u} = 0</span>
        "<span class=\"chem\">(\\mathbf{u} \\times \\mathbf{v}) \\cdot \\mathbf{u} = 0</span>",
        // EN: If <span class="chem">\mathbf{u} \times \mathbf{v} = \mathbf{u} \times \mathbf{w}</span> and <span class="chem">\mathbf{u} != 0</span>, then <span class="chem">\mathbf{v} = \mathbf{w}</span>
        "若 <span class=\"chem\">\\mathbf{u} \\times \\mathbf{v} = \\mathbf{u} \\times \\mathbf{w}</span> 且 <span class=\"chem\">\\mathbf{u} != 0</span>，則 <span class=\"chem\">\\mathbf{v} = \\mathbf{w}</span>",
      ],
      hints: [
        // EN: Check commutativity of dot product, anti-commutativity of cross product, and orthogonality of <span class="chem">\mathbf{u} \times \mathbf{v}</span> to <span class="chem">\mathbf{u}</span>.
        "檢查點積的交換律、叉積的反交換律，以及 <span class=\"chem\">\\mathbf{u} \\times \\mathbf{v}</span> 與 <span class=\"chem\">\\mathbf{u}</span> 的正交性。",
        // EN: For the fourth option, test <span class="chem">\mathbf{u} = \mathbf{i}, \mathbf{v} = \mathbf{j}, \mathbf{w} = \mathbf{i} + \mathbf{j}</span>.
        "對於第四個選項，試代入 <span class=\"chem\">\\mathbf{u} = \\mathbf{i}, \\mathbf{v} = \\mathbf{j}, \\mathbf{w} = \\mathbf{i} + \\mathbf{j}</span>。",
      ],
      // EN: <p>The dot product is commutative (<span class="chem">\mathbf{u} \cdot \mathbf{v} = \mathbf{v} \cdot \mathbf{u}</span>), the cross product is anti-commutative (<span class="chem">\mathbf{u} \times \mathbf{v} = -(\mathbf{v} \times \mathbf{u})</span>), and <span class="chem">\mathbf{u} \times \mathbf{v}</span> is perpendicular to <span class="chem">\mathbf{u}</span> so <span class="chem">(\mathbf{u} \times \mathbf{v}) \cdot \mathbf{u} = 0</span>. Cancellation fails for cross products.</p>
      solution: "<p>點積滿足交換律（<span class=\"chem\">\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{v} \\cdot \\mathbf{u}</span>），叉積滿足反交換律（<span class=\"chem\">\\mathbf{u} \\times \\mathbf{v} = -(\\mathbf{v} \\times \\mathbf{u})</span>），且 <span class=\"chem\">\\mathbf{u} \\times \\mathbf{v}</span> 垂直於 <span class=\"chem\">\\mathbf{u}</span>，故 <span class=\"chem\">(\\mathbf{u} \\times \\mathbf{v}) \\cdot \\mathbf{u} = 0</span>。消去律對叉積不成立。</p>",
      misconception: {
        // EN (option D): Cross product does not satisfy cancellation: <span class="chem">\mathbf{u} \times (\mathbf{v} - \mathbf{w}) = 0</span> only implies <span class="chem">\mathbf{v} - \mathbf{w}</span> is parallel to <span class="chem">\mathbf{u}</span>, not necessarily <span class="chem">0</span>.
        "3": "叉積不滿足消去律：<span class=\"chem\">\\mathbf{u} \\times (\\mathbf{v} - \\mathbf{w}) = 0</span> 只表示 <span class=\"chem\">\\mathbf{v} - \\mathbf{w}</span> 平行於 <span class=\"chem\">\\mathbf{u}</span>，未必為 <span class=\"chem\">0</span>。",
      },
    },

    // ── t3-3-q005 · numeric · foundation · AHL · AHL 3.16 · 4 marks
    "t3-3-q005": {
      // EN: <p>Find the exact area of triangle <span class="chem">ABC</span> with vertices <span class="chem">A(1, 0, 1)</span>, <span class="chem">B(3, 2, 0)</span>, and <span class="chem">C(1, 4, 3)</span>.</p>
      stem: "<p>求 (Find) 頂點為 <span class=\"chem\">A(1, 0, 1)</span>、<span class=\"chem\">B(3, 2, 0)</span> 與 <span class=\"chem\">C(1, 4, 3)</span> 的三角形 <span class=\"chem\">ABC</span> 之準確面積。</p>",
      hints: [
        // EN: Form two vectors from vertex <span class="chem">A</span>: <span class="chem">\mathbf{AB} = (2, 2, -1)</span> and <span class="chem">\mathbf{AC} = (0, 4, 2)</span>.
        "從頂點 <span class=\"chem\">A</span> 出發構造兩個向量：<span class=\"chem\">\\mathbf{AB} = (2, 2, -1)</span> 與 <span class=\"chem\">\\mathbf{AC} = (0, 4, 2)</span>。",
        // EN: Compute <span class="chem">\mathbf{AB} \times \mathbf{AC}</span> and then use <span class="chem">Area = (1/2)|\mathbf{AB} \times \mathbf{AC}|</span>.
        "計算 <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC}</span>，再使用 <span class=\"chem\">Area = (1/2)|\\mathbf{AB} \\times \\mathbf{AC}|</span>。",
      ],
      // EN: <p><span class="chem">\mathbf{AB} = (2, 2, -1)</span> and <span class="chem">\mathbf{AC} = (0, 4, 2)</span>. Then <span class="chem">\mathbf{AB} \times \mathbf{AC} = (4 - (-4), 0 - 4, 8 - 0) = (8, -4, 8)</span>, which has magnitude <span class="chem">sqrt(64 + 16 + 64) = 12</span>. Thus <span class="chem">Area = (1/2)(12) = 6</span>.</p>
      solution: "<p><span class=\"chem\">\\mathbf{AB} = (2, 2, -1)</span> 及 <span class=\"chem\">\\mathbf{AC} = (0, 4, 2)</span>。則 <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC} = (4 - (-4), 0 - 4, 8 - 0) = (8, -4, 8)</span>，其模長為 <span class=\"chem\">sqrt(64 + 16 + 64) = 12</span>。因此 <span class=\"chem\">Area = (1/2)(12) = 6</span>。</p>",
    },

    // ── t3-3-q006 · mcq · foundation · AHL · AHL 3.17 · 2 marks
    "t3-3-q006": {
      // EN: <p>Find the Cartesian equation of the plane passing through <span class="chem">P(2, -1, 3)</span> with normal vector <span class="chem">\mathbf{n} = (4, -2, 1)</span>.</p>
      stem: "<p>求 (Find) 通過點 <span class=\"chem\">P(2, -1, 3)</span> 且法向量為 <span class=\"chem\">\\mathbf{n} = (4, -2, 1)</span> 的平面之笛卡兒方程。</p>",
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
        "使用 <span class=\"chem\">\\mathbf{r} \\cdot \\mathbf{n} = \\mathbf{a} \\cdot \\mathbf{n}</span>：<span class=\"chem\">4x - 2y + z = 4(2) - 2(-1) + 1(3)</span>。",
      ],
      // EN: <p>Using <span class="chem">\mathbf{r} \cdot \mathbf{n} = \mathbf{a} \cdot \mathbf{n}</span>: <span class="chem">4x - 2y + z = 4(2) - 2(-1) + 1(3) = 8 + 2 + 3 = 13</span>.</p>
      solution: "<p>利用 <span class=\"chem\">\\mathbf{r} \\cdot \\mathbf{n} = \\mathbf{a} \\cdot \\mathbf{n}</span>：<span class=\"chem\">4x - 2y + z = 4(2) - 2(-1) + 1(3) = 8 + 2 + 3 = 13</span>。</p>",
      misconception: {
        // EN (option B): Check the sign on <span class="chem">-2(-1)</span>: <span class="chem">4(2) - 2(-1) + 1(3) = 8 + 2 + 3 = 13</span>, not <span class="chem">8 - 2 + 3 = 9</span>.
        "1": "核對 <span class=\"chem\">-2(-1)</span> 的正負號：<span class=\"chem\">4(2) - 2(-1) + 1(3) = 8 + 2 + 3 = 13</span>，而非 <span class=\"chem\">8 - 2 + 3 = 9</span>。",
        // EN (option C): The coefficients of <span class="chem">x, y, z</span> must be the normal vector <span class="chem">(4, -2, 1)</span>, not the point coordinates.
        "2": "<span class=\"chem\">x, y, z</span> 的係數必須是法向量 <span class=\"chem\">(4, -2, 1)</span>，而非點的坐標。",
        // EN (option D): Check the arithmetic: <span class="chem">8 + 2 + 3 = 13</span>.
        "3": "核對算術：<span class=\"chem\">8 + 2 + 3 = 13</span>。",
      },
    },

    // ── t3-3-q007 · order · exam · AHL · AHL 3.15 · 4 marks
    "t3-3-q007": {
      // EN: <p>Arrange the steps in the correct logical order to prove that two 3D lines <span class="chem">L_1: \mathbf{r} = \mathbf{a_1} + lambda \mathbf{b_1}</span> and <span class="chem">L_2: \mathbf{r} = \mathbf{a_2} + mu \mathbf{b_2}</span> are <strong>skew</strong>.</p>
      stem: "<p>按正確的邏輯順序排列以下步驟，以證明兩條 3D 直線 <span class=\"chem\">L_1: \\mathbf{r} = \\mathbf{a_1} + lambda \\mathbf{b_1}</span> 與 <span class=\"chem\">L_2: \\mathbf{r} = \\mathbf{a_2} + mu \\mathbf{b_2}</span> 為<strong>異面直線</strong>。</p>",
      options: [
        // EN: Show that the direction vectors <span class="chem">\mathbf{b_1}</span> and <span class="chem">\mathbf{b_2}</span> are not scalar multiples (<span class="chem">\mathbf{b_1} != k \mathbf{b_2}</span>), so the lines are not parallel.
        "證明方向向量 <span class=\"chem\">\\mathbf{b_1}</span> 與 <span class=\"chem\">\\mathbf{b_2}</span> 互不為純量倍數（<span class=\"chem\">\\mathbf{b_1} != k \\mathbf{b_2}</span>），故兩直線不平行。",
        // EN: Equate the <span class="chem">x</span>, <span class="chem">y</span>, and <span class="chem">z</span> components using two distinct parameters <span class="chem">lambda</span> and <span class="chem">mu</span>.
        "使用兩個不同參數 <span class=\"chem\">lambda</span> 與 <span class=\"chem\">mu</span> 令 <span class=\"chem\">x</span>、<span class=\"chem\">y</span> 與 <span class=\"chem\">z</span> 分量相等。",
        // EN: Solve the <span class="chem">x</span> and <span class="chem">y</span> equations simultaneously to obtain a unique candidate pair <span class="chem">(lambda, mu)</span>.
        "聯立求解 <span class=\"chem\">x</span> 與 <span class=\"chem\">y</span> 方程，得出唯一候選解對 <span class=\"chem\">(lambda, mu)</span>。",
        // EN: Substitute <span class="chem">(lambda, mu)</span> into the <span class="chem">z</span>-equation and show it produces a contradiction, proving no intersection exists.
        "將 <span class=\"chem\">(lambda, mu)</span> 代入 <span class=\"chem\">z</span> 方程並證明產生矛盾，從而證明兩直線不相交。",
      ],
      hints: [
        // EN: First rule out parallelism, then test for an intersection using two different parameters.
        "先排除平行情況，再用兩個不同參數檢驗是否相交。",
      ],
      // EN: <p>To prove two lines are skew, first verify <span class="chem">\mathbf{b_1} != k \mathbf{b_2}</span> (not parallel), then equate coordinates with distinct parameters <span class="chem">lambda, mu</span>, solve two equations for <span class="chem">(lambda, mu)</span>, and show the third equation is inconsistent.</p>
      solution: "<p>要證明兩直線為異面直線，先驗證 <span class=\"chem\">\\mathbf{b_1} != k \\mathbf{b_2}</span>（不平行），再用不同參數 <span class=\"chem\">lambda, mu</span> 令坐標相等，解兩條方程求出 <span class=\"chem\">(lambda, mu)</span>，並證明第三條方程不相容。</p>",
    },

    // ── t3-3-q008 · numeric · exam · AHL · AHL 3.13 · 4 marks
    "t3-3-q008": {
      // EN: <p>Vectors <span class="chem">\mathbf{u}</span> and <span class="chem">\mathbf{v}</span> satisfy <span class="chem">|\mathbf{u}| = 5</span>, <span class="chem">|\mathbf{v}| = 3</span>, and <span class="chem">|\mathbf{u} + \mathbf{v}| = 7</span>. Find the angle <span class="chem">theta</span> between <span class="chem">\mathbf{u}</span> and <span class="chem">\mathbf{v}</span> in <strong>degrees</strong>.</p>
      stem: "<p>向量 <span class=\"chem\">\\mathbf{u}</span> 與 <span class=\"chem\">\\mathbf{v}</span> 滿足 <span class=\"chem\">|\\mathbf{u}| = 5</span>、<span class=\"chem\">|\\mathbf{v}| = 3</span> 及 <span class=\"chem\">|\\mathbf{u} + \\mathbf{v}| = 7</span>。求 (Find) <span class=\"chem\">\\mathbf{u}</span> 與 <span class=\"chem\">\\mathbf{v}</span> 之間的夾角 <span class=\"chem\">theta</span>（以<strong>度</strong>為單位）。</p>",
      hints: [
        // EN: Expand <span class="chem">|\mathbf{u} + \mathbf{v}|^2 = (\mathbf{u} + \mathbf{v}) \cdot (\mathbf{u} + \mathbf{v}) = |\mathbf{u}|^2 + 2(\mathbf{u} \cdot \mathbf{v}) + |\mathbf{v}|^2</span>.
        "展開 <span class=\"chem\">|\\mathbf{u} + \\mathbf{v}|^2 = (\\mathbf{u} + \\mathbf{v}) \\cdot (\\mathbf{u} + \\mathbf{v}) = |\\mathbf{u}|^2 + 2(\\mathbf{u} \\cdot \\mathbf{v}) + |\\mathbf{v}|^2</span>。",
        // EN: Solve <span class="chem">49 = 25 + 2(\mathbf{u} \cdot \mathbf{v}) + 9</span> for <span class="chem">\mathbf{u} \cdot \mathbf{v}</span>, then use <span class="chem">cos theta = (\mathbf{u} \cdot \mathbf{v}) / (|\mathbf{u}||\mathbf{v}|)</span>.
        "解 <span class=\"chem\">49 = 25 + 2(\\mathbf{u} \\cdot \\mathbf{v}) + 9</span> 求 <span class=\"chem\">\\mathbf{u} \\cdot \\mathbf{v}</span>，再使用 <span class=\"chem\">cos theta = (\\mathbf{u} \\cdot \\mathbf{v}) / (|\\mathbf{u}||\\mathbf{v}|)</span>。",
      ],
      // EN: <p><span class="chem">49 = 5^2 + 2(\mathbf{u} \cdot \mathbf{v}) + 3^2 = 34 + 2(\mathbf{u} \cdot \mathbf{v}) => \mathbf{u} \cdot \mathbf{v} = 7.5</span>. Therefore <span class="chem">cos theta = 7.5 / (5 × 3) = 1/2 => theta = 60°</span>.</p>
      solution: "<p><span class=\"chem\">49 = 5^2 + 2(\\mathbf{u} \\cdot \\mathbf{v}) + 3^2 = 34 + 2(\\mathbf{u} \\cdot \\mathbf{v}) => \\mathbf{u} \\cdot \\mathbf{v} = 7.5</span>。因此 <span class=\"chem\">cos theta = 7.5 / (5 × 3) = 1/2 => theta = 60°</span>。</p>",
    },

    // ── t3-3-q009 · numeric · exam · AHL · AHL 3.14 · 4 marks
    "t3-3-q009": {
      // EN: <p>At time <span class="chem">t &gt;= 0</span> hours, boat A has position <span class="chem">r_A(t) = (1, 2, 0) + t(2, -1, 0)</span> and boat B has position <span class="chem">r_B(t) = (7, -4, 0) + t(-1, 2, 0)</span>. Find the time <span class="chem">t</span> at which the two boats collide.</p>
      stem: "<p>在時間 <span class=\"chem\">t &gt;= 0</span> 小時，船 A 的位置為 <span class=\"chem\">r_A(t) = (1, 2, 0) + t(2, -1, 0)</span>，而船 B 的位置為 <span class=\"chem\">r_B(t) = (7, -4, 0) + t(-1, 2, 0)</span>。求 (Find) 兩船相撞的時間 <span class=\"chem\">t</span>。</p>",
      hints: [
        // EN: For a collision, both boats must be at the same position at the <em>same</em> time <span class="chem">t</span>: set <span class="chem">r_A(t) = r_B(t)</span>.
        "若要相撞，兩船必須在<em>同一</em>時間 <span class=\"chem\">t</span> 處於相同位置：令 <span class=\"chem\">r_A(t) = r_B(t)</span>。",
        // EN: Solve <span class="chem">1 + 2t = 7 - t</span> and verify the <span class="chem">y</span>-coordinate matches at that <span class="chem">t</span>.
        "解 <span class=\"chem\">1 + 2t = 7 - t</span> 並驗證在該 <span class=\"chem\">t</span> 值時 <span class=\"chem\">y</span> 坐標是否吻合。",
      ],
      // EN: <p>Equating <span class="chem">x</span>-coordinates: <span class="chem">1 + 2t = 7 - t => 3t = 6 => t = 2</span>. Checking <span class="chem">y</span>-coordinates at <span class="chem">t = 2</span>: <span class="chem">2 - 2 = 0</span> and <span class="chem">-4 + 4 = 0</span>. They collide at <span class="chem">(5, 0, 0)</span> when <span class="chem">t = 2</span> hours.</p>
      solution: "<p>令 <span class=\"chem\">x</span> 坐標相等：<span class=\"chem\">1 + 2t = 7 - t => 3t = 6 => t = 2</span>。在 <span class=\"chem\">t = 2</span> 時核對 <span class=\"chem\">y</span> 坐標：<span class=\"chem\">2 - 2 = 0</span> 及 <span class=\"chem\">-4 + 4 = 0</span>。兩船於 <span class=\"chem\">t = 2</span> 小時在 <span class=\"chem\">(5, 0, 0)</span> 相撞。</p>",
      // EN: hours
      unit: "小時",
    },

    // ── t3-3-q010 · mcq · exam · AHL · AHL 3.15 · 5 marks
    "t3-3-q010": {
      // EN: <p>Find the shortest distance from the point <span class="chem">P(1, 3, -2)</span> to the line <span class="chem">L: \mathbf{r} = (1, 0, 1) + lambda(2, 1, -2)</span>.</p>
      stem: "<p>求 (Find) 點 <span class=\"chem\">P(1, 3, -2)</span> 到直線 <span class=\"chem\">L: \\mathbf{r} = (1, 0, 1) + lambda(2, 1, -2)</span> 的最短距離。</p>",
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
        "設 <span class=\"chem\">F(1 + 2 lambda, lambda, 1 - 2 lambda)</span> 為從 <span class=\"chem\">P</span> 向 <span class=\"chem\">L</span> 所作垂線的垂足。",
        // EN: Solve <span class="chem">\mathbf{PF} \cdot (2, 1, -2) = 0</span> for <span class="chem">lambda</span>, then find <span class="chem">|\mathbf{PF}|</span>.
        "解 <span class=\"chem\">\\mathbf{PF} \\cdot (2, 1, -2) = 0</span> 求 <span class=\"chem\">lambda</span>，再求 <span class=\"chem\">|\\mathbf{PF}|</span>。",
      ],
      // EN: <p><span class="chem">\mathbf{PF} = (2 lambda, lambda - 3, 3 - 2 lambda)</span>. Setting <span class="chem">\mathbf{PF} \cdot (2, 1, -2) = 0</span> gives <span class="chem">4 lambda + lambda - 3 - 6 + 4 lambda = 9 lambda - 9 = 0 => lambda = 1</span>. Thus <span class="chem">\mathbf{PF} = (2, -2, 1)</span> and <span class="chem">|\mathbf{PF}| = sqrt(4 + 4 + 1) = 3</span>.</p>
      solution: "<p><span class=\"chem\">\\mathbf{PF} = (2 lambda, lambda - 3, 3 - 2 lambda)</span>。令 <span class=\"chem\">\\mathbf{PF} \\cdot (2, 1, -2) = 0</span> 得 <span class=\"chem\">4 lambda + lambda - 3 - 6 + 4 lambda = 9 lambda - 9 = 0 => lambda = 1</span>。因此 <span class=\"chem\">\\mathbf{PF} = (2, -2, 1)</span> 且 <span class=\"chem\">|\\mathbf{PF}| = sqrt(4 + 4 + 1) = 3</span>。</p>",
      misconception: {
        // EN (option B): <span class="chem">3*sqrt(2)</span> is the distance from <span class="chem">P</span> to the starting point <span class="chem">A(1, 0, 1)</span>, not the perpendicular distance to the line.
        "1": "<span class=\"chem\">3*sqrt(2)</span> 是點 <span class=\"chem\">P</span> 到起點 <span class=\"chem\">A(1, 0, 1)</span> 的距離，而非到直線的垂直距離。",
        // EN (option C): Remember to take the square root of <span class="chem">2^2 + (-2)^2 + 1^2 = 9</span>.
        "2": "記得對 <span class=\"chem\">2^2 + (-2)^2 + 1^2 = 9</span> 取平方根。",
        // EN (option D): Check your <span class="chem">\mathbf{PF} \cdot \mathbf{b} = 0</span> equation: <span class="chem">2(2 lambda) + 1(lambda - 3) - 2(3 - 2 lambda) = 9 lambda - 9 = 0 => lambda = 1</span>.
        "3": "核對你的 <span class=\"chem\">\\mathbf{PF} \\cdot \\mathbf{b} = 0</span> 方程：<span class=\"chem\">2(2 lambda) + 1(lambda - 3) - 2(3 - 2 lambda) = 9 lambda - 9 = 0 => lambda = 1</span>。",
      },
    },

    // ── t3-3-q011 · numeric · exam · AHL · AHL 3.18 · 4 marks
    "t3-3-q011": {
      // EN: <p>Find the acute angle <span class="chem">phi</span> (in degrees, correct to 3 significant figures) between the line <span class="chem">\mathbf{r} = (1, 2, 0) + lambda(2, 1, 2)</span> and the plane <span class="chem">2x + 2y - z = 7</span>.</p>
      stem: "<p>求 (Find) 直線 <span class=\"chem\">\\mathbf{r} = (1, 2, 0) + lambda(2, 1, 2)</span> 與平面 <span class=\"chem\">2x + 2y - z = 7</span> 之間的銳角 <span class=\"chem\">phi</span>（以度為單位，準確至 3 位有效數字）。</p>",
      hints: [
        // EN: Use the line-plane angle formula <span class="chem">sin phi = |\mathbf{b} \cdot \mathbf{n}| / (|\mathbf{b}||\mathbf{n}|)</span> with <span class="chem">b = (2, 1, 2)</span> and <span class="chem">\mathbf{n} = (2, 2, -1)</span>.
        "使用線面交角公式 <span class=\"chem\">sin phi = |\\mathbf{b} \\cdot \\mathbf{n}| / (|\\mathbf{b}||\\mathbf{n}|)</span>，其中 <span class=\"chem\">b = (2, 1, 2)</span> 且 <span class=\"chem\">\\mathbf{n} = (2, 2, -1)</span>。",
        // EN: Compute <span class="chem">sin phi = |4 + 2 - 2| / (3 × 3) = 4 / 9</span>, then take <span class="chem">arcsin(4/9)</span> in degrees.
        "計算 <span class=\"chem\">sin phi = |4 + 2 - 2| / (3 × 3) = 4 / 9</span>，再以度為單位求 <span class=\"chem\">arcsin(4/9)</span>。",
      ],
      // EN: <p>With <span class="chem">b = (2, 1, 2)</span> (<span class="chem">|b| = 3</span>) and <span class="chem">\mathbf{n} = (2, 2, -1)</span> (<span class="chem">|\mathbf{n}| = 3</span>), <span class="chem">sin phi = |2(2) + 1(2) + 2(-1)| / (3 × 3) = 4/9</span>. Hence <span class="chem">phi = arcsin(4/9) ≈ 26.4°</span>.</p>
      solution: "<p>已知 <span class=\"chem\">b = (2, 1, 2)</span>（<span class=\"chem\">|b| = 3</span>）及 <span class=\"chem\">\\mathbf{n} = (2, 2, -1)</span>（<span class=\"chem\">|\\mathbf{n}| = 3</span>），<span class=\"chem\">sin phi = |2(2) + 1(2) + 2(-1)| / (3 × 3) = 4/9</span>。因此 <span class=\"chem\">phi = arcsin(4/9) ≈ 26.4°</span>。</p>",
    },

    // ── t3-3-q012 · numeric · exam · AHL · AHL 3.18 · 3 marks
    "t3-3-q012": {
      // EN: <p>The line <span class="chem">\mathbf{r} = (1, 2, -1) + lambda(2, -1, 3)</span> intersects the plane <span class="chem">x + 2y + z = 12</span> at point <span class="chem">Q</span>. Find the <span class="chem">z</span>-coordinate of <span class="chem">Q</span>.</p>
      stem: "<p>直線 <span class=\"chem\">\\mathbf{r} = (1, 2, -1) + lambda(2, -1, 3)</span> 與平面 <span class=\"chem\">x + 2y + z = 12</span> 相交於點 <span class=\"chem\">Q</span>。求 (Find) <span class=\"chem\">Q</span> 的 <span class=\"chem\">z</span> 坐標。</p>",
      hints: [
        // EN: Substitute <span class="chem">x = 1 + 2 lambda</span>, <span class="chem">y = 2 - lambda</span>, <span class="chem">z = -1 + 3 lambda</span> into <span class="chem">x + 2y + z = 12</span>.
        "將 <span class=\"chem\">x = 1 + 2 lambda</span>、<span class=\"chem\">y = 2 - lambda</span>、<span class=\"chem\">z = -1 + 3 lambda</span> 代入 <span class=\"chem\">x + 2y + z = 12</span>。",
        // EN: Solve for <span class="chem">lambda</span>, then compute <span class="chem">z = -1 + 3 lambda</span>.
        "解出 <span class=\"chem\">lambda</span>，再計算 <span class=\"chem\">z = -1 + 3 lambda</span>。",
      ],
      // EN: <p>Substituting gives <span class="chem">(1 + 2 lambda) + 2(2 - lambda) + (-1 + 3 lambda) = 12 => 4 + 3 lambda = 12 => lambda = 8/3</span>. Thus <span class="chem">z = -1 + 3(8/3) = 7</span>.</p>
      solution: "<p>代入得 <span class=\"chem\">(1 + 2 lambda) + 2(2 - lambda) + (-1 + 3 lambda) = 12 => 4 + 3 lambda = 12 => lambda = 8/3</span>。因此 <span class=\"chem\">z = -1 + 3(8/3) = 7</span>。</p>",
    },

    // ── t3-3-q013 · mcq · exam · AHL · AHL 3.18 · 4 marks
    "t3-3-q013": {
      // EN: <p>Find the acute angle between the two planes <span class="chem">Pi_1: x - y + sqrt(2) z = 5</span> and <span class="chem">Pi_2: x + y + sqrt(2) z = 1</span>.</p>
      stem: "<p>求 (Find) 兩平面 <span class=\"chem\">Pi_1: x - y + sqrt(2) z = 5</span> 與 <span class=\"chem\">Pi_2: x + y + sqrt(2) z = 1</span> 之間的銳交角。</p>",
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
        "讀出法向量 <span class=\"chem\">\\mathbf{n_1} = (1, -1, sqrt(2))</span> 與 <span class=\"chem\">\\mathbf{n_2} = (1, 1, sqrt(2))</span>。",
        // EN: Compute <span class="chem">cos theta = |\mathbf{n_1} \cdot \mathbf{n_2}| / (|\mathbf{n_1}||\mathbf{n_2}|)</span>.
        "計算 <span class=\"chem\">cos theta = |\\mathbf{n_1} \\cdot \\mathbf{n_2}| / (|\\mathbf{n_1}||\\mathbf{n_2}|)</span>。",
      ],
      // EN: <p><span class="chem">|\mathbf{n_1}| = sqrt(1 + 1 + 2) = 2</span>, <span class="chem">|\mathbf{n_2}| = 2</span>, and <span class="chem">\mathbf{n_1} \cdot \mathbf{n_2} = 1 - 1 + 2 = 2</span>. Thus <span class="chem">cos theta = 2 / (2 × 2) = 1/2 => theta = 60°</span> (<span class="chem">pi/3</span>).</p>
      solution: "<p><span class=\"chem\">|\\mathbf{n_1}| = sqrt(1 + 1 + 2) = 2</span>、<span class=\"chem\">|\\mathbf{n_2}| = 2</span>，且 <span class=\"chem\">\\mathbf{n_1} \\cdot \\mathbf{n_2} = 1 - 1 + 2 = 2</span>。故 <span class=\"chem\">cos theta = 2 / (2 × 2) = 1/2 => theta = 60°</span>（<span class=\"chem\">pi/3</span>）。</p>",
      misconception: {
        // EN (option B): The angle between two planes uses <span class="chem">cos theta = |\mathbf{n_1} \cdot \mathbf{n_2}| / (|\mathbf{n_1}||\mathbf{n_2}|) = 1/2</span>, not <span class="chem">sin theta = 1/2</span>.
        "1": "兩平面的交角使用 <span class=\"chem\">cos theta = |\\mathbf{n_1} \\cdot \\mathbf{n_2}| / (|\\mathbf{n_1}||\\mathbf{n_2}|) = 1/2</span>，而非 <span class=\"chem\">sin theta = 1/2</span>。",
        // EN (option C): Check <span class="chem">|\mathbf{n_1}| = sqrt(1 + 1 + 2) = 2</span> and <span class="chem">\mathbf{n_1} \cdot \mathbf{n_2} = 1 - 1 + 2 = 2</span>, giving <span class="chem">cos theta = 2 / 4 = 1/2</span>.
        "2": "核對 <span class=\"chem\">|\\mathbf{n_1}| = sqrt(1 + 1 + 2) = 2</span> 及 <span class=\"chem\">\\mathbf{n_1} \\cdot \\mathbf{n_2} = 1 - 1 + 2 = 2</span>，得出 <span class=\"chem\">cos theta = 2 / 4 = 1/2</span>。",
        // EN (option D): The question asks for the <em>acute</em> angle between the planes.
        "3": "題目要求的是兩平面之間的<em>銳</em>角。",
      },
    },

    // ── t3-3-q014 · short · exam · AHL · AHL 3.16–3.18 · 7 marks
    "t3-3-q014": {
      // EN: <p>The points <span class="chem">A(1, 1, 0)</span>, <span class="chem">B(2, 0, 2)</span>, and <span class="chem">C(0, 2, 1)</span> lie on a plane <span class="chem">Pi</span>.</p><p>(a) Find <span class="chem">\mathbf{AB} \times \mathbf{AC}</span> and hence show that the Cartesian equation of <span class="chem">Pi</span> is <span class="chem">x + y = 2</span>. <strong>[4 marks]</strong></p><p>(b) Find the coordinates of the point <span class="chem">F</span> on <span class="chem">Pi</span> that is closest to <span class="chem">P(3, 5, 2)</span>. <strong>[3 marks]</strong></p>
      stem: "<p>點 <span class=\"chem\">A(1, 1, 0)</span>、<span class=\"chem\">B(2, 0, 2)</span> 與 <span class=\"chem\">C(0, 2, 1)</span> 位於平面 <span class=\"chem\">Pi</span> 上。</p><p>(a) 求 (Find) <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC}</span>，並由此證明 (hence show that) <span class=\"chem\">Pi</span> 的笛卡兒方程為 <span class=\"chem\">x + y = 2</span>。<strong>[4 marks]</strong></p><p>(b) 求 (Find) <span class=\"chem\">Pi</span> 上最接近 <span class=\"chem\">P(3, 5, 2)</span> 的點 <span class=\"chem\">F</span> 之坐標。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: For part (b), the closest point <span class="chem">F</span> lies where the line through <span class="chem">P</span> with direction <span class="chem">\mathbf{n} = (1, 1, 0)</span> meets the plane <span class="chem">Pi</span>.
        "對於 (b) 部，最接近點 <span class=\"chem\">F</span> 位於通過 <span class=\"chem\">P</span>、方向為 <span class=\"chem\">\\mathbf{n} = (1, 1, 0)</span> 的直線與平面 <span class=\"chem\">Pi</span> 的交點處。",
      ],
      // EN: <p>(a) <span class="chem">\mathbf{AB} = (1, -1, 2)</span> and <span class="chem">\mathbf{AC} = (-1, 1, 1)</span>. Their cross product is <span class="chem">\mathbf{AB} \times \mathbf{AC} = (-3, -3, 0)</span>, so <span class="chem">\mathbf{n} = (1, 1, 0)</span> is a normal vector. Using <span class="chem">A(1, 1, 0)</span>: <span class="chem">1(x) + 1(y) + 0(z) = 1 + 1 = 2 => x + y = 2</span>.</p><p>(b) The line through <span class="chem">P</span> perpendicular to <span class="chem">Pi</span> is <span class="chem">\mathbf{r} = (3, 5, 2) + t(1, 1, 0)</span>. Substituting into <span class="chem">x + y = 2</span> gives <span class="chem">(3 + t) + (5 + t) = 2 => 2t = -6 => t = -3</span>. Thus <span class="chem">F = (0, 2, 2)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">\\mathbf{AB} = (1, -1, 2)</span> 及 <span class=\"chem\">\\mathbf{AC} = (-1, 1, 1)</span>。其叉積為 <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC} = (-3, -3, 0)</span>，故 <span class=\"chem\">\\mathbf{n} = (1, 1, 0)</span> 為法向量。代入 <span class=\"chem\">A(1, 1, 0)</span>：<span class=\"chem\">1(x) + 1(y) + 0(z) = 1 + 1 = 2 => x + y = 2</span>。</p><p>(b) 通過 <span class=\"chem\">P</span> 且垂直於 <span class=\"chem\">Pi</span> 的直線為 <span class=\"chem\">\\mathbf{r} = (3, 5, 2) + t(1, 1, 0)</span>。代入 <span class=\"chem\">x + y = 2</span> 得 <span class=\"chem\">(3 + t) + (5 + t) = 2 => 2t = -6 => t = -3</span>。故 <span class=\"chem\">F = (0, 2, 2)</span>。</p>",
      markscheme: [
        // EN: A1: finds <span class="chem">\mathbf{AB} = (1, -1, 2)</span> and <span class="chem">\mathbf{AC} = (-1, 1, 1)</span>.
        "A1：求得 <span class=\"chem\">\\mathbf{AB} = (1, -1, 2)</span> 與 <span class=\"chem\">\\mathbf{AC} = (-1, 1, 1)</span>。",
        // EN: M1: computes the cross product <span class="chem">\mathbf{AB} \times \mathbf{AC}</span>.
        "M1：計算叉積 <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC}</span>。",
        // EN: A1: obtains <span class="chem">\mathbf{AB} \times \mathbf{AC} = (-3, -3, 0)</span> (or any non-zero multiple).
        "A1：得出 <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC} = (-3, -3, 0)</span>（或任意非零倍數）。",
        // EN: A1: substitutes point <span class="chem">A</span> (or <span class="chem">B, C</span>) into <span class="chem">x + y = d</span> to find <span class="chem">d = 1 + 1 = 2</span>, so <span class="chem">x + y = 2</span> (AG).
        "A1：將點 <span class=\"chem\">A</span>（或 <span class=\"chem\">B, C</span>）代入 <span class=\"chem\">x + y = d</span> 求得 <span class=\"chem\">d = 1 + 1 = 2</span>，故 <span class=\"chem\">x + y = 2</span> (AG)。",
        // EN: M1: writes normal line through <span class="chem">P</span> as <span class="chem">\mathbf{r} = (3, 5, 2) + t(1, 1, 0)</span>.
        "M1：寫出通過 <span class=\"chem\">P</span> 的法線方程 <span class=\"chem\">\\mathbf{r} = (3, 5, 2) + t(1, 1, 0)</span>。",
        // EN: M1: substitutes into <span class="chem">x + y = 2</span> to find <span class="chem">t = -3</span>.
        "M1：代入 <span class=\"chem\">x + y = 2</span> 求得 <span class=\"chem\">t = -3</span>。",
        // EN: A1: states <span class="chem">F(0, 2, 2)</span>.
        "A1：寫出 <span class=\"chem\">F(0, 2, 2)</span>。",
      ],
    },

    // ── t3-3-q015 · numeric · challenge · AHL · AHL 3.18 · 5 marks
    "t3-3-q015": {
      // EN: <p>The planes <span class="chem">Pi_1: x + y + z = 6</span> and <span class="chem">Pi_2: 2x - y + z = 3</span> intersect in a line <span class="chem">L</span>. Find the exact distance from the origin <span class="chem">O(0, 0, 0)</span> to the point where <span class="chem">L</span> crosses the <span class="chem">xy</span>-plane (<span class="chem">z = 0</span>).</p>
      stem: "<p>平面 <span class=\"chem\">Pi_1: x + y + z = 6</span> 與 <span class=\"chem\">Pi_2: 2x - y + z = 3</span> 相交於直線 <span class=\"chem\">L</span>。求 (Find) 原點 <span class=\"chem\">O(0, 0, 0)</span> 到 <span class=\"chem\">L</span> 穿過 <span class=\"chem\">xy</span> 平面（<span class=\"chem\">z = 0</span>）之點的準確距離。</p>",
      hints: [
        // EN: Decode: you do not need the whole line <span class="chem">L</span>. The point where <span class="chem">L</span> crosses the <span class="chem">xy</span>-plane lies on both planes and has <span class="chem">z = 0</span>.
        "解碼：你不需要求出整條直線 <span class=\"chem\">L</span>。<span class=\"chem\">L</span> 穿過 <span class=\"chem\">xy</span> 平面的點同時位於兩個平面上，並且 <span class=\"chem\">z = 0</span>。",
        // EN: At the <span class="chem">xy</span>-plane, <span class="chem">z = 0</span>. Substitute <span class="chem">z = 0</span> into both plane equations.
        "在 <span class=\"chem\">xy</span> 平面上，<span class=\"chem\">z = 0</span>。將 <span class=\"chem\">z = 0</span> 代入兩條平面方程。",
        // EN: Solve <span class="chem">x + y = 6</span> and <span class="chem">2x - y = 3</span>, then find <span class="chem">sqrt(x^2 + y^2 + 0^2)</span>.
        "解 <span class=\"chem\">x + y = 6</span> 與 <span class=\"chem\">2x - y = 3</span>，再求 <span class=\"chem\">sqrt(x^2 + y^2 + 0^2)</span>。",
      ],
      // EN: <p>Setting <span class="chem">z = 0</span> gives <span class="chem">x + y = 6</span> and <span class="chem">2x - y = 3</span>. Adding gives <span class="chem">3x = 9 => x = 3</span> and <span class="chem">y = 3</span>. The intersection point is <span class="chem">(3, 3, 0)</span>, whose distance from the origin is <span class="chem">sqrt(3^2 + 3^2) = 3 sqrt(2) ≈ 4.24</span>.</p>
      solution: "<p>設 <span class=\"chem\">z = 0</span> 得 <span class=\"chem\">x + y = 6</span> 與 <span class=\"chem\">2x - y = 3</span>。兩式相加得 <span class=\"chem\">3x = 9 => x = 3</span> 及 <span class=\"chem\">y = 3</span>。交點為 <span class=\"chem\">(3, 3, 0)</span>，其與原點的距離為 <span class=\"chem\">sqrt(3^2 + 3^2) = 3 sqrt(2) ≈ 4.24</span>。</p>",
    },

    // ── t3-3-q016 · numeric · challenge · AHL · AHL 3.17–3.18 · 6 marks
    "t3-3-q016": {
      // EN: <p>Point <span class="chem">P'</span> is the reflection of <span class="chem">P(4, -1, 3)</span> in the plane <span class="chem">x - 2y + 2z = 3</span>. Find the distance between <span class="chem">P</span> and <span class="chem">P'</span>.</p>
      stem: "<p>點 <span class=\"chem\">P'</span> 是點 <span class=\"chem\">P(4, -1, 3)</span> 關於平面 <span class=\"chem\">x - 2y + 2z = 3</span> 的反射點。求 (Find) <span class=\"chem\">P</span> 與 <span class=\"chem\">P'</span> 之間的距離。</p>",
      hints: [
        // EN: Decode: the reflection <span class="chem">P'</span> is as far behind the plane as <span class="chem">P</span> is in front of it, so <span class="chem">PP'</span> is twice the perpendicular distance from <span class="chem">P</span> to the plane.
        "解碼：反射點 <span class=\"chem\">P'</span> 在平面後方的距離與 <span class=\"chem\">P</span> 在平面前方的距離相同，所以 <span class=\"chem\">PP'</span> 是 <span class=\"chem\">P</span> 到平面垂直距離的兩倍。",
        // EN: The line through <span class="chem">P</span> perpendicular to the plane is <span class="chem">\mathbf{r} = (4, -1, 3) + t(1, -2, 2)</span>.
        "通過 <span class=\"chem\">P</span> 且垂直於該平面的直線為 <span class=\"chem\">\\mathbf{r} = (4, -1, 3) + t(1, -2, 2)</span>。",
        // EN: Find <span class="chem">t</span> at the foot <span class="chem">F</span> on the plane; then <span class="chem">PP' = 2 \mathbf{PF}</span>, so <span class="chem">|PP'| = 2|t||(1, -2, 2)|</span>.
        "求平面上垂足 <span class=\"chem\">F</span> 處的 <span class=\"chem\">t</span>；則 <span class=\"chem\">PP' = 2 \\mathbf{PF}</span>，故 <span class=\"chem\">|PP'| = 2|t||(1, -2, 2)|</span>。",
      ],
      // EN: <p>Substituting <span class="chem">(4 + t, -1 - 2t, 3 + 2t)</span> into <span class="chem">x - 2y + 2z = 3</span> gives <span class="chem">(4 + t) - 2(-1 - 2t) + 2(3 + 2t) = 3 => 12 + 9t = 3 => t = -1</span>. Thus <span class="chem">\mathbf{PF} = (-1, 2, -2)</span> has length <span class="chem">3</span>, and the distance <span class="chem">|PP'| = 2 × 3 = 6</span>.</p>
      solution: "<p>將 <span class=\"chem\">(4 + t, -1 - 2t, 3 + 2t)</span> 代入 <span class=\"chem\">x - 2y + 2z = 3</span> 得 <span class=\"chem\">(4 + t) - 2(-1 - 2t) + 2(3 + 2t) = 3 => 12 + 9t = 3 => t = -1</span>。因此 <span class=\"chem\">\\mathbf{PF} = (-1, 2, -2)</span> 的長度為 <span class=\"chem\">3</span>，而距離 <span class=\"chem\">|PP'| = 2 × 3 = 6</span>。</p>",
    },

    // ── t3-3-q017 · mcq · challenge · AHL · AHL 3.18 · 5 marks
    "t3-3-q017": {
      // EN: <p>The system of three planes <span class="chem">x + y + z = 3</span>, <span class="chem">2x - y + z = 2</span>, and <span class="chem">x + 4y + k z = m</span> has infinitely many solutions (the planes meet along a common line). Find the values of <span class="chem">k</span> and <span class="chem">m</span>.</p>
      stem: "<p>三個平面所組成的方程組 <span class=\"chem\">x + y + z = 3</span>、<span class=\"chem\">2x - y + z = 2</span> 與 <span class=\"chem\">x + 4y + k z = m</span> 有無窮多解（三個平面交於同一條直線）。求 (Find) <span class=\"chem\">k</span> 與 <span class=\"chem\">m</span> 的值。</p>",
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
        "解碼：「沿一條公共直線相交」表示方程組有無限多個解，所以消去 <span class=\"chem\">x</span> 後，餘下的兩條方程必須是同一條方程。",
        // EN: Eliminate <span class="chem">x</span> from the second and third equations using the first equation: <span class="chem">R_2 - 2 R_1</span> and <span class="chem">R_3 - R_1</span>.
        "利用第一條方程消去第二及第三條方程中的 <span class=\"chem\">x</span>：<span class=\"chem\">R_2 - 2 R_1</span> 與 <span class=\"chem\">R_3 - R_1</span>。",
        // EN: For infinitely many solutions, the two resulting equations in <span class="chem">y</span> and <span class="chem">z</span> must be identical.
        "要有無窮多解，所得關於 <span class=\"chem\">y</span> 與 <span class=\"chem\">z</span> 的兩條方程必須完全相同。",
      ],
      // EN: <p><span class="chem">R_2 - 2 R_1</span> gives <span class="chem">-3y - z = -4</span>, i.e., <span class="chem">3y + z = 4</span>. <span class="chem">R_3 - R_1</span> gives <span class="chem">3y + (k - 1)z = m - 3</span>. Matching coefficients yields <span class="chem">k - 1 = 1 => k = 2</span> and <span class="chem">m - 3 = 4 => m = 7</span>.</p>
      solution: "<p><span class=\"chem\">R_2 - 2 R_1</span> 得出 <span class=\"chem\">-3y - z = -4</span>，即 <span class=\"chem\">3y + z = 4</span>。<span class=\"chem\">R_3 - R_1</span> 得出 <span class=\"chem\">3y + (k - 1)z = m - 3</span>。比較係數得 <span class=\"chem\">k - 1 = 1 => k = 2</span> 及 <span class=\"chem\">m - 3 = 4 => m = 7</span>。</p>",
      misconception: {
        // EN (option B): If <span class="chem">k = 2</span> and <span class="chem">m != 7</span>, the planes form a triangular prism with <em>no</em> common solution.
        "1": "若 <span class=\"chem\">k = 2</span> 且 <span class=\"chem\">m != 7</span>，三個平面形成三稜柱，<em>沒有</em>公共解。",
        // EN (option C): Eliminating <span class="chem">x</span> gives <span class="chem">3y + z = 4</span> and <span class="chem">3y + (k - 1)z = m - 3</span>, so <span class="chem">k - 1 = 1 => k = 2</span>.
        "2": "消去 <span class=\"chem\">x</span> 後得 <span class=\"chem\">3y + z = 4</span> 與 <span class=\"chem\">3y + (k - 1)z = m - 3</span>，故 <span class=\"chem\">k - 1 = 1 => k = 2</span>。",
        // EN (option D): Check the sign on <span class="chem">R_2 - 2 R_1</span>: <span class="chem">(1 - 2)z = -z</span>, so <span class="chem">-3y - z = -4</span> becomes <span class="chem">3y + z = 4</span>.
        "3": "核對 <span class=\"chem\">R_2 - 2 R_1</span> 的正負號：<span class=\"chem\">(1 - 2)z = -z</span>，故 <span class=\"chem\">-3y - z = -4</span> 化為 <span class=\"chem\">3y + z = 4</span>。",
      },
    },

    // ── t3-3-q018 · short · challenge · AHL · AHL 3.15–3.16 · 8 marks
    "t3-3-q018": {
      // EN: <p>Consider the two lines <span class="chem">L_1: \mathbf{r} = (1, 0, 2) + lambda(1, -1, 1)</span> and <span class="chem">L_2: \mathbf{r} = (0, 3, 1) + mu(2, 1, -1)</span>.</p><p>(a) Show that <span class="chem">L_1</span> and <span class="chem">L_2</span> are skew. <strong>[3 marks]</strong></p><p>(b) Find a unit vector <span class="chem">\mathbf{n̂}</span> perpendicular to both <span class="chem">L_1</span> and <span class="chem">L_2</span>, and hence find the exact shortest distance between <span class="chem">L_1</span> and <span class="chem">L_2</span>. <strong>[5 marks]</strong></p>
      stem: "<p>考慮兩條直線 <span class=\"chem\">L_1: \\mathbf{r} = (1, 0, 2) + lambda(1, -1, 1)</span> 與 <span class=\"chem\">L_2: \\mathbf{r} = (0, 3, 1) + mu(2, 1, -1)</span>。</p><p>(a) 證明 (Show that) <span class=\"chem\">L_1</span> 與 <span class=\"chem\">L_2</span> 為異面直線。<strong>[3 marks]</strong></p><p>(b) 求 (Find) 同時垂直於 <span class=\"chem\">L_1</span> 與 <span class=\"chem\">L_2</span> 的單位向量 <span class=\"chem\">\\mathbf{n̂}</span>，並由此求 (hence find) <span class=\"chem\">L_1</span> 與 <span class=\"chem\">L_2</span> 之間的準確最短距離。<strong>[5 marks]</strong></p>",
      hints: [
        // EN: Decode: "skew" means not parallel and not intersecting, so part (a) must rule out both. In part (b) the shortest distance is measured along the common perpendicular.
        "解碼：「異面」表示既不平行也不相交，所以 (a) 部必須排除這兩種情況。在 (b) 部中，最短距離是沿公垂線量度的。",
        // EN: In part (b), the shortest segment between two skew lines is perpendicular to both lines, so it is parallel to <span class="chem">\mathbf{b_1} \times \mathbf{b_2}</span>.
        "在 (b) 部中，兩條異面直線之間的最短線段同時垂直於兩條直線，故它平行於 <span class=\"chem\">\\mathbf{b_1} \\times \\mathbf{b_2}</span>。",
        // EN: Projecting any connecting vector <span class="chem">\mathbf{A_1A_2}</span> onto the unit common normal <span class="chem">\mathbf{n̂}</span> gives the shortest distance <span class="chem">|\mathbf{A_1A_2} \cdot \mathbf{n̂}|</span>.
        "把任意連接向量 <span class=\"chem\">\\mathbf{A_1A_2}</span> 投影到單位公法向量 <span class=\"chem\">\\mathbf{n̂}</span> 上，即得最短距離 <span class=\"chem\">|\\mathbf{A_1A_2} \\cdot \\mathbf{n̂}|</span>。",
      ],
      // EN: <p>(a) Direction vectors <span class="chem">(1, -1, 1)</span> and <span class="chem">(2, 1, -1)</span> are not scalar multiples (not parallel). Equating <span class="chem">x</span> and <span class="chem">y</span>: <span class="chem">1 + lambda = 2 mu</span> and <span class="chem">-lambda = 3 + mu</span>. Adding gives <span class="chem">1 = 3 + 3 mu => mu = -2/3, lambda = -7/3</span>. Checking <span class="chem">z</span>: <span class="chem">2 + (-7/3) = -1/3 != 1 - (-2/3) = 5/3</span>. Thus <span class="chem">L_1</span> and <span class="chem">L_2</span> are skew.</p><p>(b) <span class="chem">(1, -1, 1) \times (2, 1, -1) = (0, 3, 3)</span>, so <span class="chem">\mathbf{n̂} = (0, 1/sqrt(2), 1/sqrt(2))</span>. Taking <span class="chem">A_1(1, 0, 2)</span> on <span class="chem">L_1</span> and <span class="chem">A_2(0, 3, 1)</span> on <span class="chem">L_2</span>, <span class="chem">\mathbf{A_1A_2} = (-1, 3, -1)</span>. The shortest distance is <span class="chem">|\mathbf{A_1A_2} \cdot \mathbf{n̂}| = |0 + 3 - 1| / sqrt(2) = 2 / sqrt(2) = sqrt(2)</span>.</p>
      answer: "<p>(a) 方向向量 <span class=\"chem\">(1, -1, 1)</span> 與 <span class=\"chem\">(2, 1, -1)</span> 互不為純量倍數（不平行）。令 <span class=\"chem\">x</span> 與 <span class=\"chem\">y</span> 相等：<span class=\"chem\">1 + lambda = 2 mu</span> 及 <span class=\"chem\">-lambda = 3 + mu</span>。兩式相加得 <span class=\"chem\">1 = 3 + 3 mu => mu = -2/3, lambda = -7/3</span>。檢驗 <span class=\"chem\">z</span>：<span class=\"chem\">2 + (-7/3) = -1/3 != 1 - (-2/3) = 5/3</span>。因此 <span class=\"chem\">L_1</span> 與 <span class=\"chem\">L_2</span> 為異面直線。</p><p>(b) <span class=\"chem\">(1, -1, 1) \\times (2, 1, -1) = (0, 3, 3)</span>，故 <span class=\"chem\">\\mathbf{n̂} = (0, 1/sqrt(2), 1/sqrt(2))</span>。取 <span class=\"chem\">L_1</span> 上的點 <span class=\"chem\">A_1(1, 0, 2)</span> 及 <span class=\"chem\">L_2</span> 上的點 <span class=\"chem\">A_2(0, 3, 1)</span>，<span class=\"chem\">\\mathbf{A_1A_2} = (-1, 3, -1)</span>。最短距離為 <span class=\"chem\">|\\mathbf{A_1A_2} \\cdot \\mathbf{n̂}| = |0 + 3 - 1| / sqrt(2) = 2 / sqrt(2) = sqrt(2)</span>。</p>",
      markscheme: [
        // EN: R1: notes direction vectors <span class="chem">(1, -1, 1)</span> and <span class="chem">(2, 1, -1)</span> are not scalar multiples.
        "R1：指出方向向量 <span class=\"chem\">(1, -1, 1)</span> 與 <span class=\"chem\">(2, 1, -1)</span> 互不為純量倍數。",
        // EN: M1: equates <span class="chem">x, y</span> coordinates and solves for <span class="chem">lambda = -7/3, mu = -2/3</span>.
        "M1：令 <span class=\"chem\">x, y</span> 坐標相等並解得 <span class=\"chem\">lambda = -7/3, mu = -2/3</span>。",
        // EN: A1: shows <span class="chem">z</span>-coordinates disagree (<span class="chem">-1/3 != 5/3</span>) to conclude lines are skew.
        "A1：證明 <span class=\"chem\">z</span> 坐標不相等（<span class=\"chem\">-1/3 != 5/3</span>），從而得出兩直線為異面直線。",
        // EN: M1: computes <span class="chem">\mathbf{b_1} \times \mathbf{b_2} = (0, 3, 3)</span>.
        "M1：計算 <span class=\"chem\">\\mathbf{b_1} \\times \\mathbf{b_2} = (0, 3, 3)</span>。",
        // EN: A1: normalizes to <span class="chem">\mathbf{n̂} = (0, 1/sqrt(2), 1/sqrt(2))</span>.
        "A1：單位化為 <span class=\"chem\">\\mathbf{n̂} = (0, 1/sqrt(2), 1/sqrt(2))</span>。",
        // EN: M1: forms <span class="chem">\mathbf{A_1A_2} = (-1, 3, -1)</span> and projects onto <span class="chem">\mathbf{n̂}</span> via <span class="chem">|\mathbf{A_1A_2} \cdot \mathbf{n̂}|</span>.
        "M1：寫出 <span class=\"chem\">\\mathbf{A_1A_2} = (-1, 3, -1)</span> 並透過 <span class=\"chem\">|\\mathbf{A_1A_2} \\cdot \\mathbf{n̂}|</span> 投影至 <span class=\"chem\">\\mathbf{n̂}</span>。",
        // EN: A1: obtains <span class="chem">|\mathbf{A_1A_2} \cdot \mathbf{n̂}| = |0 + 3 - 1| / sqrt(2) = 2 / sqrt(2)</span>.
        "A1：得出 <span class=\"chem\">|\\mathbf{A_1A_2} \\cdot \\mathbf{n̂}| = |0 + 3 - 1| / sqrt(2) = 2 / sqrt(2)</span>。",
        // EN: A1: simplifies the shortest distance to <span class="chem">sqrt(2)</span>.
        "A1：化簡得最短距離為 <span class=\"chem\">sqrt(2)</span>。",
      ],
    },

  }
});

/* Added on 2026-11-14: translations of the new questions t3-3-q019 to t3-3-q059. */
S1.i18n.register('zh-Hant', 't3-3.q', {
  questions: {

    // ── t3-3-q019 · mcq · foundation · AHL · AHL 3.12 · 2 marks
    "t3-3-q019": {
      // EN: <p>Let <span class="chem">\mathbf{v} = 2\mathbf{i} - 6\mathbf{j} + 3\mathbf{k}</span>. Which of the following is the unit vector in the same direction as <span class="chem">\mathbf{v}</span>?</p>
      stem: "<p>設 <span class=\"chem\">\\mathbf{v} = 2\\mathbf{i} - 6\\mathbf{j} + 3\\mathbf{k}</span>。下列哪個是與 <span class=\"chem\">\\mathbf{v}</span> 同方向的單位向量？</p>",
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
        "與 <span class=\"chem\">\\mathbf{v}</span> 同方向的單位向量是 <span class=\"chem\">\\mathbf{v} / |\\mathbf{v}|</span>。",
        // EN: Find <span class="chem">|\mathbf{v}| = sqrt(2^2 + (-6)^2 + 3^2)</span>.
        "求 <span class=\"chem\">|\\mathbf{v}| = sqrt(2^2 + (-6)^2 + 3^2)</span>。",
      ],
      // EN: <p><span class="chem">|\mathbf{v}| = sqrt(4 + 36 + 9) = sqrt(49) = 7</span>, so the unit vector is <span class="chem">\mathbf{v} / 7 = (1/7)(2\mathbf{i} - 6\mathbf{j} + 3\mathbf{k})</span>.</p>
      solution: "<p><span class=\"chem\">|\\mathbf{v}| = sqrt(4 + 36 + 9) = sqrt(49) = 7</span>，故單位向量為 <span class=\"chem\">\\mathbf{v} / 7 = (1/7)(2\\mathbf{i} - 6\\mathbf{j} + 3\\mathbf{k})</span>。</p>",
      misconception: {
        // EN (option B): You divided by <span class="chem">|\mathbf{v}|^2 = 49</span> instead of by <span class="chem">|\mathbf{v}| = 7</span>. This vector has length <span class="chem">1/7</span>, not 1.
        "1": "你除以了 <span class=\"chem\">|\\mathbf{v}|^2 = 49</span>，而不是除以 <span class=\"chem\">|\\mathbf{v}| = 7</span>。這個向量的長度是 <span class=\"chem\">1/7</span>，而非 1。",
        // EN (option C): You divided by <span class="chem">2 + 6 + 3 = 11</span>, the sum of the sizes of the components. The magnitude is <span class="chem">sqrt(2^2 + 6^2 + 3^2) = 7</span>.
        "2": "你除以了 <span class=\"chem\">2 + 6 + 3 = 11</span>，即各分量大小之和。向量的模是 <span class=\"chem\">sqrt(2^2 + 6^2 + 3^2) = 7</span>。",
        // EN (option D): This has length 1 but points the opposite way to <span class="chem">\mathbf{v}</span>; the question asks for the same direction.
        "3": "這個向量的長度是 1，但方向與 <span class=\"chem\">\\mathbf{v}</span> 相反；題目要求的是相同方向。",
      },
    },

    // ── t3-3-q020 · numeric · foundation · AHL · AHL 3.12–3.13 · 2 marks
    "t3-3-q020": {
      // EN: <p>The vectors <span class="chem">\mathbf{a} = (2, -3, p)</span> and <span class="chem">\mathbf{b} = (-6, 9, 12)</span> are parallel. Find the value of <span class="chem">p</span>.</p>
      stem: "<p>向量 <span class=\"chem\">\\mathbf{a} = (2, -3, p)</span> 與 <span class=\"chem\">\\mathbf{b} = (-6, 9, 12)</span> 互相平行。求 (Find) <span class=\"chem\">p</span> 的值。</p>",
      hints: [
        // EN: Parallel vectors are scalar multiples of each other: <span class="chem">\mathbf{b} = k\mathbf{a}</span> for some scalar <span class="chem">k</span>.
        "平行向量互為純量倍數：對某個純量 <span class=\"chem\">k</span>，有 <span class=\"chem\">\\mathbf{b} = k\\mathbf{a}</span>。",
        // EN: Compare the <span class="chem">x</span>-components to find <span class="chem">k</span>, then use the <span class="chem">z</span>-components.
        "比較 <span class=\"chem\">x</span> 分量求出 <span class=\"chem\">k</span>，再利用 <span class=\"chem\">z</span> 分量。",
      ],
      // EN: <p>From the <span class="chem">x</span>- and <span class="chem">y</span>-components, <span class="chem">\mathbf{b} = -3\mathbf{a}</span> (<span class="chem">-6 = -3(2)</span>, <span class="chem">9 = -3(-3)</span>). Then <span class="chem">12 = -3p</span>, so <span class="chem">p = -4</span>.</p>
      solution: "<p>由 <span class=\"chem\">x</span> 分量與 <span class=\"chem\">y</span> 分量得 <span class=\"chem\">\\mathbf{b} = -3\\mathbf{a}</span>（<span class=\"chem\">-6 = -3(2)</span>，<span class=\"chem\">9 = -3(-3)</span>）。於是 <span class=\"chem\">12 = -3p</span>，故 <span class=\"chem\">p = -4</span>。</p>",
    },

    // ── t3-3-q021 · mcq · foundation · AHL · AHL 3.16–3.17 · 2 marks
    "t3-3-q021": {
      // EN: <p>A plane <span class="chem">Π</span> has vector equation <span class="chem">\mathbf{r} = (1, 0, 2) + lambda(1, 1, 0) + mu(0, 1, -1)</span>. Which of the following is a normal vector to <span class="chem">Π</span>?</p>
      stem: "<p>平面 <span class=\"chem\">Π</span> 的向量方程為 <span class=\"chem\">\\mathbf{r} = (1, 0, 2) + lambda(1, 1, 0) + mu(0, 1, -1)</span>。下列哪個是 <span class=\"chem\">Π</span> 的法向量？</p>",
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
        "法向量同時垂直於兩個方向向量，因此使用 <span class=\"chem\">(1, 1, 0) \\times (0, 1, -1)</span>。",
        // EN: Check your answer: its scalar product with each direction vector must be 0.
        "檢查答案：它與每個方向向量的純量積都必須為 0。",
      ],
      // EN: <p><span class="chem">(1, 1, 0) \times (0, 1, -1) = ((1)(-1) - (0)(1), (0)(0) - (1)(-1), (1)(1) - (1)(0)) = (-1, 1, 1)</span>. Check: <span class="chem">(-1, 1, 1) \cdot (1, 1, 0) = 0</span> and <span class="chem">(-1, 1, 1) \cdot (0, 1, -1) = 0</span>.</p>
      solution: "<p><span class=\"chem\">(1, 1, 0) \\times (0, 1, -1) = ((1)(-1) - (0)(1), (0)(0) - (1)(-1), (1)(1) - (1)(0)) = (-1, 1, 1)</span>。檢驗：<span class=\"chem\">(-1, 1, 1) \\cdot (1, 1, 0) = 0</span> 及 <span class=\"chem\">(-1, 1, 1) \\cdot (0, 1, -1) = 0</span>。</p>",
      misconception: {
        // EN (option B): Check the first component of the cross product: <span class="chem">(1)(-1) - (0)(1) = -1</span>, not <span class="chem">+1</span>. Test your answer: <span class="chem">(1, 1, 1) \cdot (0, 1, -1) = 0</span> but <span class="chem">(1, 1, 1) \cdot (1, 1, 0) = 2 != 0</span>.
        "1": "檢查叉積的第一個分量：<span class=\"chem\">(1)(-1) - (0)(1) = -1</span>，而非 <span class=\"chem\">+1</span>。驗證你的答案：<span class=\"chem\">(1, 1, 1) \\cdot (0, 1, -1) = 0</span>，但 <span class=\"chem\">(1, 1, 1) \\cdot (1, 1, 0) = 2 != 0</span>。",
        // EN (option C): You added the two direction vectors. Their sum lies <em>in</em> the plane, so it cannot be a normal.
        "2": "你把兩個方向向量相加了。它們的和位於平面<em>之內</em>，所以不可能是法向量。",
        // EN (option D): <span class="chem">(1, 0, 2)</span> is the position vector of a point on the plane, not a normal.
        "3": "<span class=\"chem\">(1, 0, 2)</span> 是平面上一點的位置向量，而非法向量。",
      },
    },

    // ── t3-3-q022 · short · exam · AHL · AHL 3.12, 3.13, 3.16 · 9 marks
    "t3-3-q022": {
      // EN: <p>The points <span class="chem">A(1, 2, -1)</span>, <span class="chem">B(4, 3, 1)</span>, <span class="chem">C(6, 0, 2)</span> and <span class="chem">D(3, -1, 0)</span> are the vertices of a quadrilateral <span class="chem">ABCD</span>.</p><p>(a) Show that <span class="chem">ABCD</span> is a parallelogram. <strong>[2 marks]</strong></p><p>(b) Show that <span class="chem">ABCD</span> is a rhombus. <strong>[2 marks]</strong></p><p>(c) Verify that the diagonals <span class="chem">AC</span> and <span class="chem">BD</span> are perpendicular. <strong>[2 marks]</strong></p><p>(d) Find the exact area of <span class="chem">ABCD</span>. <strong>[3 marks]</strong></p>
      stem: "<p>點 <span class=\"chem\">A(1, 2, -1)</span>、<span class=\"chem\">B(4, 3, 1)</span>、<span class=\"chem\">C(6, 0, 2)</span> 與 <span class=\"chem\">D(3, -1, 0)</span> 是四邊形 <span class=\"chem\">ABCD</span> 的頂點。</p><p>(a) 證明 (Show that) <span class=\"chem\">ABCD</span> 是平行四邊形。<strong>[2 marks]</strong></p><p>(b) 證明 (Show that) <span class=\"chem\">ABCD</span> 是菱形。<strong>[2 marks]</strong></p><p>(c) 驗證 (Verify) 對角線 <span class=\"chem\">AC</span> 與 <span class=\"chem\">BD</span> 互相垂直。<strong>[2 marks]</strong></p><p>(d) 求 (Find) <span class=\"chem\">ABCD</span> 的準確面積。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: A quadrilateral is a parallelogram when one pair of opposite sides is given by the <em>same</em> vector, e.g. <span class="chem">\mathbf{AB} = \mathbf{DC}</span>.
        "當四邊形的一對對邊由<em>同一個</em>向量表示時（例如 <span class=\"chem\">\\mathbf{AB} = \\mathbf{DC}</span>），它便是平行四邊形。",
        // EN: A rhombus is a parallelogram with two adjacent sides of equal length.
        "菱形是兩條鄰邊長度相等的平行四邊形。",
        // EN: The area of a parallelogram with adjacent sides <span class="chem">\mathbf{AB}</span> and <span class="chem">\mathbf{AD}</span> is <span class="chem">|\mathbf{AB} \times \mathbf{AD}|</span>.
        "以 <span class=\"chem\">\\mathbf{AB}</span> 與 <span class=\"chem\">\\mathbf{AD}</span> 為鄰邊的平行四邊形，面積為 <span class=\"chem\">|\\mathbf{AB} \\times \\mathbf{AD}|</span>。",
      ],
      // EN: <p>(a) <span class="chem">\mathbf{AB} = (3, 1, 2)</span> and <span class="chem">\mathbf{DC} = (6 - 3, 0 + 1, 2 - 0) = (3, 1, 2)</span>. Since <span class="chem">\mathbf{AB} = \mathbf{DC}</span>, the sides <span class="chem">AB</span> and <span class="chem">DC</span> are parallel and equal in length, so <span class="chem">ABCD</span> is a parallelogram.</p><p>(b) <span class="chem">\mathbf{AD} = (2, -3, 1)</span>. <span class="chem">|\mathbf{AB}| = sqrt(9 + 1 + 4) = sqrt(14)</span> and <span class="chem">|\mathbf{AD}| = sqrt(4 + 9 + 1) = sqrt(14)</span>. A parallelogram with two adjacent sides equal is a rhombus.</p><p>(c) <span class="chem">\mathbf{AC} = (5, -2, 3)</span> and <span class="chem">\mathbf{BD} = (-1, -4, -1)</span>, so <span class="chem">\mathbf{AC} \cdot \mathbf{BD} = -5 + 8 - 3 = 0</span>: the diagonals are perpendicular.</p><p>(d) <span class="chem">\mathbf{AB} \times \mathbf{AD} = ((1)(1) - (2)(-3), (2)(2) - (3)(1), (3)(-3) - (1)(2)) = (7, 1, -11)</span>. Area <span class="chem">= |\mathbf{AB} \times \mathbf{AD}| = sqrt(49 + 1 + 121) = sqrt(171) = 3 sqrt(19)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">\\mathbf{AB} = (3, 1, 2)</span> 及 <span class=\"chem\">\\mathbf{DC} = (6 - 3, 0 + 1, 2 - 0) = (3, 1, 2)</span>。由於 <span class=\"chem\">\\mathbf{AB} = \\mathbf{DC}</span>，邊 <span class=\"chem\">AB</span> 與 <span class=\"chem\">DC</span> 平行且等長，所以 <span class=\"chem\">ABCD</span> 是平行四邊形。</p><p>(b) <span class=\"chem\">\\mathbf{AD} = (2, -3, 1)</span>。<span class=\"chem\">|\\mathbf{AB}| = sqrt(9 + 1 + 4) = sqrt(14)</span> 及 <span class=\"chem\">|\\mathbf{AD}| = sqrt(4 + 9 + 1) = sqrt(14)</span>。兩條鄰邊相等的平行四邊形是菱形。</p><p>(c) <span class=\"chem\">\\mathbf{AC} = (5, -2, 3)</span> 及 <span class=\"chem\">\\mathbf{BD} = (-1, -4, -1)</span>，故 <span class=\"chem\">\\mathbf{AC} \\cdot \\mathbf{BD} = -5 + 8 - 3 = 0</span>：兩條對角線互相垂直。</p><p>(d) <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AD} = ((1)(1) - (2)(-3), (2)(2) - (3)(1), (3)(-3) - (1)(2)) = (7, 1, -11)</span>。面積 <span class=\"chem\">= |\\mathbf{AB} \\times \\mathbf{AD}| = sqrt(49 + 1 + 121) = sqrt(171) = 3 sqrt(19)</span>。</p>",
      markscheme: [
        // EN: M1: finds <span class="chem">\mathbf{AB} = (3, 1, 2)</span> and <span class="chem">\mathbf{DC} = (3, 1, 2)</span> (or <span class="chem">\mathbf{AD}</span> and <span class="chem">\mathbf{BC}</span>).
        "M1：求出 <span class=\"chem\">\\mathbf{AB} = (3, 1, 2)</span> 及 <span class=\"chem\">\\mathbf{DC} = (3, 1, 2)</span>（或 <span class=\"chem\">\\mathbf{AD}</span> 及 <span class=\"chem\">\\mathbf{BC}</span>）。",
        // EN: R1: states that a pair of opposite sides is equal and parallel, so <span class="chem">ABCD</span> is a parallelogram (AG).
        "R1：指出有一對對邊相等且平行，所以 <span class=\"chem\">ABCD</span> 是平行四邊形 (AG)。",
        // EN: A1: <span class="chem">|\mathbf{AB}| = sqrt(14)</span> and <span class="chem">|\mathbf{AD}| = sqrt(14)</span>.
        "A1：<span class=\"chem\">|\\mathbf{AB}| = sqrt(14)</span> 及 <span class=\"chem\">|\\mathbf{AD}| = sqrt(14)</span>。",
        // EN: R1: adjacent sides of the parallelogram are equal, so it is a rhombus (AG).
        "R1：平行四邊形的鄰邊相等，所以它是菱形 (AG)。",
        // EN: M1: finds <span class="chem">\mathbf{AC} = (5, -2, 3)</span> and <span class="chem">\mathbf{BD} = (-1, -4, -1)</span> and forms their scalar product.
        "M1：求出 <span class=\"chem\">\\mathbf{AC} = (5, -2, 3)</span> 及 <span class=\"chem\">\\mathbf{BD} = (-1, -4, -1)</span>，並計算它們的純量積。",
        // EN: A1: <span class="chem">\mathbf{AC} \cdot \mathbf{BD} = -5 + 8 - 3 = 0</span>, so the diagonals are perpendicular (AG).
        "A1：<span class=\"chem\">\\mathbf{AC} \\cdot \\mathbf{BD} = -5 + 8 - 3 = 0</span>，所以兩條對角線互相垂直 (AG)。",
        // EN: M1: uses area <span class="chem">= |\mathbf{AB} \times \mathbf{AD}|</span> (or <span class="chem">(1/2)|\mathbf{AC}||\mathbf{BD}|</span>).
        "M1：使用面積 <span class=\"chem\">= |\\mathbf{AB} \\times \\mathbf{AD}|</span>（或 <span class=\"chem\">(1/2)|\\mathbf{AC}||\\mathbf{BD}|</span>）。",
        // EN: A1: <span class="chem">\mathbf{AB} \times \mathbf{AD} = (7, 1, -11)</span> (or <span class="chem">|\mathbf{AC}| = sqrt(38)</span>, <span class="chem">|\mathbf{BD}| = sqrt(18)</span>).
        "A1：<span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AD} = (7, 1, -11)</span>（或 <span class=\"chem\">|\\mathbf{AC}| = sqrt(38)</span>，<span class=\"chem\">|\\mathbf{BD}| = sqrt(18)</span>）。",
        // EN: A1: area <span class="chem">= sqrt(171) = 3 sqrt(19)</span>.
        "A1：面積 <span class=\"chem\">= sqrt(171) = 3 sqrt(19)</span>。",
      ],
    },

    // ── t3-3-q023 · short · exam · AHL · AHL 3.12–3.13 · 4 marks
    "t3-3-q023": {
      // EN: <p>The points <span class="chem">A</span> and <span class="chem">B</span> are the ends of a diameter of a circle with centre <span class="chem">O</span>, and <span class="chem">P</span> is any other point on the circle. Let <span class="chem">\mathbf{OA} = \mathbf{a}</span> and <span class="chem">\mathbf{OP} = \mathbf{p}</span>.</p><p>Use vectors to prove that angle <span class="chem">APB</span> is a right angle. <strong>[4 marks]</strong></p>
      stem: "<p>點 <span class=\"chem\">A</span> 與 <span class=\"chem\">B</span> 是一個圓心為 <span class=\"chem\">O</span> 的圓的直徑兩端，而 <span class=\"chem\">P</span> 是圓上任何其他一點。設 <span class=\"chem\">\\mathbf{OA} = \\mathbf{a}</span> 及 <span class=\"chem\">\\mathbf{OP} = \\mathbf{p}</span>。</p><p>利用向量證明 (prove) 角 <span class=\"chem\">APB</span> 是直角。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: "prove the angle is a right angle" means "show that the scalar product of <span class="chem">\mathbf{PA}</span> and <span class="chem">\mathbf{PB}</span> is zero".
        "解碼：「證明該角是直角」即「證明 <span class=\"chem\">\\mathbf{PA}</span> 與 <span class=\"chem\">\\mathbf{PB}</span> 的純量積為零」。",
        // EN: Write <span class="chem">\mathbf{OB}</span> in terms of <span class="chem">\mathbf{a}</span>, and use the fact that every radius has the same length.
        "以 <span class=\"chem\">\\mathbf{a}</span> 表示 <span class=\"chem\">\\mathbf{OB}</span>，並利用每條半徑長度都相等這一事實。",
        // EN: Expand <span class="chem">(\mathbf{a} - \mathbf{p}) \cdot (-\mathbf{a} - \mathbf{p})</span> like a bracket; remember <span class="chem">\mathbf{a} \cdot \mathbf{a} = |\mathbf{a}|^2</span>.
        "像展開括號一樣展開 <span class=\"chem\">(\\mathbf{a} - \\mathbf{p}) \\cdot (-\\mathbf{a} - \\mathbf{p})</span>；記住 <span class=\"chem\">\\mathbf{a} \\cdot \\mathbf{a} = |\\mathbf{a}|^2</span>。",
      ],
      // EN: <p>Since <span class="chem">AB</span> is a diameter through <span class="chem">O</span>, <span class="chem">\mathbf{OB} = -\mathbf{a}</span>. All radii are equal, so <span class="chem">|\mathbf{p}| = |\mathbf{a}|</span>.</p><p><span class="chem">\mathbf{PA} = \mathbf{a} - \mathbf{p}</span> and <span class="chem">\mathbf{PB} = -\mathbf{a} - \mathbf{p}</span>.</p><p><span class="chem">\mathbf{PA} \cdot \mathbf{PB} = (\mathbf{a} - \mathbf{p}) \cdot (-\mathbf{a} - \mathbf{p}) = -\mathbf{a} \cdot \mathbf{a} - \mathbf{a} \cdot \mathbf{p} + \mathbf{p} \cdot \mathbf{a} + \mathbf{p} \cdot \mathbf{p} = |\mathbf{p}|^2 - |\mathbf{a}|^2 = 0</span>.</p><p>Both vectors are non-zero (P is not A or B), so <span class="chem">\mathbf{PA}</span> is perpendicular to <span class="chem">\mathbf{PB}</span> and angle <span class="chem">APB = 90°</span>.</p>
      answer: "<p>由於 <span class=\"chem\">AB</span> 是穿過 <span class=\"chem\">O</span> 的直徑，<span class=\"chem\">\\mathbf{OB} = -\\mathbf{a}</span>。所有半徑都相等，故 <span class=\"chem\">|\\mathbf{p}| = |\\mathbf{a}|</span>。</p><p><span class=\"chem\">\\mathbf{PA} = \\mathbf{a} - \\mathbf{p}</span> 及 <span class=\"chem\">\\mathbf{PB} = -\\mathbf{a} - \\mathbf{p}</span>。</p><p><span class=\"chem\">\\mathbf{PA} \\cdot \\mathbf{PB} = (\\mathbf{a} - \\mathbf{p}) \\cdot (-\\mathbf{a} - \\mathbf{p}) = -\\mathbf{a} \\cdot \\mathbf{a} - \\mathbf{a} \\cdot \\mathbf{p} + \\mathbf{p} \\cdot \\mathbf{a} + \\mathbf{p} \\cdot \\mathbf{p} = |\\mathbf{p}|^2 - |\\mathbf{a}|^2 = 0</span>。</p><p>兩個向量都不是零向量（P 不是 A 或 B），所以 <span class=\"chem\">\\mathbf{PA}</span> 垂直於 <span class=\"chem\">\\mathbf{PB}</span>，且角 <span class=\"chem\">APB = 90°</span>。</p>",
      markscheme: [
        // EN: A1: writes <span class="chem">\mathbf{OB} = -\mathbf{a}</span> and <span class="chem">|\mathbf{p}| = |\mathbf{a}|</span> (equal radii).
        "A1：寫出 <span class=\"chem\">\\mathbf{OB} = -\\mathbf{a}</span> 及 <span class=\"chem\">|\\mathbf{p}| = |\\mathbf{a}|</span>（半徑相等）。",
        // EN: A1: <span class="chem">\mathbf{PA} = \mathbf{a} - \mathbf{p}</span> and <span class="chem">\mathbf{PB} = -\mathbf{a} - \mathbf{p}</span>.
        "A1：<span class=\"chem\">\\mathbf{PA} = \\mathbf{a} - \\mathbf{p}</span> 及 <span class=\"chem\">\\mathbf{PB} = -\\mathbf{a} - \\mathbf{p}</span>。",
        // EN: M1: expands <span class="chem">\mathbf{PA} \cdot \mathbf{PB}</span>, using <span class="chem">\mathbf{a} \cdot \mathbf{p} = \mathbf{p} \cdot \mathbf{a}</span>, to get <span class="chem">|\mathbf{p}|^2 - |\mathbf{a}|^2</span>.
        "M1：利用 <span class=\"chem\">\\mathbf{a} \\cdot \\mathbf{p} = \\mathbf{p} \\cdot \\mathbf{a}</span> 展開 <span class=\"chem\">\\mathbf{PA} \\cdot \\mathbf{PB}</span>，得到 <span class=\"chem\">|\\mathbf{p}|^2 - |\\mathbf{a}|^2</span>。",
        // EN: R1: this is 0, so the (non-zero) vectors are perpendicular and angle <span class="chem">APB</span> is a right angle (AG).
        "R1：此值為 0，所以兩個（非零）向量互相垂直，角 <span class=\"chem\">APB</span> 是直角 (AG)。",
      ],
    },

    // ── t3-3-q024 · numeric · exam · AHL · AHL 3.14 · 5 marks
    "t3-3-q024": {
      // EN: <p>The line <span class="chem">L_1</span> has Cartesian equations <span class="chem">x - 3 = (y + 2)/(-1)</span>, <span class="chem">z = 4</span>. The line <span class="chem">L_2</span> has Cartesian equations <span class="chem">1 - x = z + 5</span>, <span class="chem">y = 2</span>.</p><p>Find the acute angle between <span class="chem">L_1</span> and <span class="chem">L_2</span>, in degrees.</p>
      stem: "<p>直線 <span class=\"chem\">L_1</span> 的笛卡兒方程為 <span class=\"chem\">x - 3 = (y + 2)/(-1)</span>，<span class=\"chem\">z = 4</span>。直線 <span class=\"chem\">L_2</span> 的笛卡兒方程為 <span class=\"chem\">1 - x = z + 5</span>，<span class=\"chem\">y = 2</span>。</p><p>求 (Find) <span class=\"chem\">L_1</span> 與 <span class=\"chem\">L_2</span> 之間的銳角（以度為單位）。</p>",
      hints: [
        // EN: Decode: the angle between two lines is the angle between their direction vectors, so first read a direction vector off each Cartesian form. A coordinate that is constant (such as <span class="chem">z = 4</span>) has direction component 0.
        "解碼：兩直線之間的夾角就是它們方向向量之間的夾角，所以先從每個笛卡兒形式讀出方向向量。保持不變的坐標（例如 <span class=\"chem\">z = 4</span>）的方向分量為 0。",
        // EN: Rewrite <span class="chem">1 - x = z + 5</span> as <span class="chem">(x - 1)/(-1) = (z + 5)/1</span>. This gives <span class="chem">\mathbf{b_2} = (-1, 0, 1)</span>, and <span class="chem">\mathbf{b_1} = (1, -1, 0)</span>.
        "把 <span class=\"chem\">1 - x = z + 5</span> 改寫為 <span class=\"chem\">(x - 1)/(-1) = (z + 5)/1</span>。由此得 <span class=\"chem\">\\mathbf{b_2} = (-1, 0, 1)</span>，而 <span class=\"chem\">\\mathbf{b_1} = (1, -1, 0)</span>。",
        // EN: Use <span class="chem">cos theta = |\mathbf{b_1} \cdot \mathbf{b_2}| / (|\mathbf{b_1}||\mathbf{b_2}|)</span>. The modulus makes the angle acute.
        "使用 <span class=\"chem\">cos theta = |\\mathbf{b_1} \\cdot \\mathbf{b_2}| / (|\\mathbf{b_1}||\\mathbf{b_2}|)</span>。絕對值使所得的角為銳角。",
      ],
      // EN: <p><strong>Decode:</strong> the angle between the lines is the angle between their direction vectors, taken acute.</p><p><span class="chem">L_1</span>: <span class="chem">(x - 3)/1 = (y + 2)/(-1)</span> with <span class="chem">z</span> fixed, so <span class="chem">\mathbf{b_1} = (1, -1, 0)</span>. <span class="chem">L_2</span>: <span class="chem">(x - 1)/(-1) = (z + 5)/1</span> with <span class="chem">y</span> fixed, so <span class="chem">\mathbf{b_2} = (-1, 0, 1)</span>.</p><p><span class="chem">\mathbf{b_1} \cdot \mathbf{b_2} = -1</span> and <span class="chem">|\mathbf{b_1}| = |\mathbf{b_2}| = sqrt(2)</span>, so the angle between the vectors satisfies <span class="chem">cos theta = -1/2</span>, i.e. <span class="chem">120°</span>. The acute angle between the lines is <span class="chem">180° - 120° = 60°</span>.</p>
      solution: "<p><strong>解碼：</strong>兩直線之間的夾角就是它們方向向量之間的夾角，並取銳角。</p><p><span class=\"chem\">L_1</span>：<span class=\"chem\">(x - 3)/1 = (y + 2)/(-1)</span>，且 <span class=\"chem\">z</span> 固定，故 <span class=\"chem\">\\mathbf{b_1} = (1, -1, 0)</span>。<span class=\"chem\">L_2</span>：<span class=\"chem\">(x - 1)/(-1) = (z + 5)/1</span>，且 <span class=\"chem\">y</span> 固定，故 <span class=\"chem\">\\mathbf{b_2} = (-1, 0, 1)</span>。</p><p><span class=\"chem\">\\mathbf{b_1} \\cdot \\mathbf{b_2} = -1</span> 及 <span class=\"chem\">|\\mathbf{b_1}| = |\\mathbf{b_2}| = sqrt(2)</span>，故兩向量之間的夾角滿足 <span class=\"chem\">cos theta = -1/2</span>，即 <span class=\"chem\">120°</span>。兩直線之間的銳角為 <span class=\"chem\">180° - 120° = 60°</span>。</p>",
    },

    // ── t3-3-q025 · short · exam · AHL · AHL 3.14, 3.15, 3.17 · 12 marks
    "t3-3-q025": {
      // EN: <p>The lines <span class="chem">L_1</span> and <span class="chem">L_2</span> have equations <span class="chem">L_1: \mathbf{r} = (1, -3, 4) + lambda(1, 2, -1)</span> and <span class="chem">L_2: \mathbf{r} = (-1, 3, 0) + mu(2, -1, 1)</span>.</p><p>(a) Show that <span class="chem">L_1</span> and <span class="chem">L_2</span> intersect, and find the coordinates of their point of intersection <span class="chem">P</span>. <strong>[5 marks]</strong></p><p>(b) Find the acute angle between <span class="chem">L_1</span> and <span class="chem">L_2</span>, giving your answer in the form <span class="chem">arccos(k)</span> where <span class="chem">k \in \mathbb{Q}</span>. <strong>[3 marks]</strong></p><p>(c) Find the Cartesian equation of the plane that contains both lines. <strong>[4 marks]</strong></p>
      stem: "<p>直線 <span class=\"chem\">L_1</span> 與 <span class=\"chem\">L_2</span> 的方程為 <span class=\"chem\">L_1: \\mathbf{r} = (1, -3, 4) + lambda(1, 2, -1)</span> 及 <span class=\"chem\">L_2: \\mathbf{r} = (-1, 3, 0) + mu(2, -1, 1)</span>。</p><p>(a) 證明 (Show that) <span class=\"chem\">L_1</span> 與 <span class=\"chem\">L_2</span> 相交，並求 (find) 它們的交點 <span class=\"chem\">P</span> 的坐標。<strong>[5 marks]</strong></p><p>(b) 求 (Find) <span class=\"chem\">L_1</span> 與 <span class=\"chem\">L_2</span> 之間的銳角，答案以 <span class=\"chem\">arccos(k)</span> 的形式表示，其中 <span class=\"chem\">k \\in \\mathbb{Q}</span>。<strong>[3 marks]</strong></p><p>(c) 求 (Find) 包含這兩條直線的平面的笛卡兒方程。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Use different parameters for the two lines. Solve two equations, then check the third.
        "兩條直線要用不同的參數。先解兩條方程，再檢驗第三條。",
        // EN: For the acute angle, take the modulus of the scalar product.
        "求銳角時，取純量積的絕對值。",
        // EN: Two intersecting lines lie in one plane. Its normal is perpendicular to both direction vectors.
        "兩條相交直線位於同一平面上。該平面的法向量同時垂直於兩個方向向量。",
      ],
      // EN: <p>(a) Equate components: <span class="chem">1 + lambda = -1 + 2mu</span>, <span class="chem">-3 + 2lambda = 3 - mu</span>, <span class="chem">4 - lambda = mu</span>. Substituting <span class="chem">mu = 4 - lambda</span> into the first equation: <span class="chem">1 + lambda = 7 - 2lambda => lambda = 2</span>, <span class="chem">mu = 2</span>. Check the second equation: <span class="chem">-3 + 4 = 1</span> and <span class="chem">3 - 2 = 1</span>. All three equations hold, so the lines intersect at <span class="chem">P(3, 1, 2)</span>.</p><p>(b) <span class="chem">(1, 2, -1) \cdot (2, -1, 1) = 2 - 2 - 1 = -1</span>, and both directions have magnitude <span class="chem">sqrt(6)</span>. So <span class="chem">cos theta = |-1| / 6 = 1/6</span> and the acute angle is <span class="chem">arccos(1/6)</span>.</p><p>(c) <span class="chem">\mathbf{n} = (1, 2, -1) \times (2, -1, 1) = ((2)(1) - (-1)(-1), (-1)(2) - (1)(1), (1)(-1) - (2)(2)) = (1, -3, -5)</span>. Using <span class="chem">P(3, 1, 2)</span>: <span class="chem">3 - 3 - 10 = -10</span>, so the plane is <span class="chem">x - 3y - 5z = -10</span>.</p>
      answer: "<p>(a) 令各分量相等：<span class=\"chem\">1 + lambda = -1 + 2mu</span>，<span class=\"chem\">-3 + 2lambda = 3 - mu</span>，<span class=\"chem\">4 - lambda = mu</span>。把 <span class=\"chem\">mu = 4 - lambda</span> 代入第一條方程：<span class=\"chem\">1 + lambda = 7 - 2lambda => lambda = 2</span>，<span class=\"chem\">mu = 2</span>。檢驗第二條方程：<span class=\"chem\">-3 + 4 = 1</span> 及 <span class=\"chem\">3 - 2 = 1</span>。三條方程都成立，所以兩直線相交於 <span class=\"chem\">P(3, 1, 2)</span>。</p><p>(b) <span class=\"chem\">(1, 2, -1) \\cdot (2, -1, 1) = 2 - 2 - 1 = -1</span>，而兩個方向向量的模都是 <span class=\"chem\">sqrt(6)</span>。所以 <span class=\"chem\">cos theta = |-1| / 6 = 1/6</span>，銳角為 <span class=\"chem\">arccos(1/6)</span>。</p><p>(c) <span class=\"chem\">\\mathbf{n} = (1, 2, -1) \\times (2, -1, 1) = ((2)(1) - (-1)(-1), (-1)(2) - (1)(1), (1)(-1) - (2)(2)) = (1, -3, -5)</span>。利用 <span class=\"chem\">P(3, 1, 2)</span>：<span class=\"chem\">3 - 3 - 10 = -10</span>，所以平面為 <span class=\"chem\">x - 3y - 5z = -10</span>。</p>",
      markscheme: [
        // EN: M1: equates the three components using different parameters <span class="chem">lambda</span> and <span class="chem">mu</span>.
        "M1：用不同的參數 <span class=\"chem\">lambda</span> 及 <span class=\"chem\">mu</span> 令三個分量相等。",
        // EN: M1: solves two of the equations simultaneously.
        "M1：聯立解其中兩條方程。",
        // EN: A1: <span class="chem">lambda = 2</span>, <span class="chem">mu = 2</span>.
        "A1：<span class=\"chem\">lambda = 2</span>，<span class=\"chem\">mu = 2</span>。",
        // EN: R1: verifies that the third equation is also satisfied, so the lines intersect.
        "R1：驗證第三條方程亦成立，所以兩直線相交。",
        // EN: A1: <span class="chem">P(3, 1, 2)</span>.
        "A1：<span class=\"chem\">P(3, 1, 2)</span>。",
        // EN: M1: uses the scalar product of the two direction vectors.
        "M1：使用兩個方向向量的純量積。",
        // EN: A1: scalar product <span class="chem">-1</span> and magnitudes <span class="chem">sqrt(6)</span>, <span class="chem">sqrt(6)</span>.
        "A1：純量積 <span class=\"chem\">-1</span>，模 <span class=\"chem\">sqrt(6)</span>、<span class=\"chem\">sqrt(6)</span>。",
        // EN: A1: acute angle <span class="chem">arccos(1/6)</span> (the modulus is taken, so not <span class="chem">arccos(-1/6)</span>).
        "A1：銳角 <span class=\"chem\">arccos(1/6)</span>（已取絕對值，故不是 <span class=\"chem\">arccos(-1/6)</span>）。",
        // EN: M1: finds a normal as the vector product of the two direction vectors.
        "M1：以兩個方向向量的向量積求法向量。",
        // EN: A1: <span class="chem">\mathbf{n} = (1, -3, -5)</span> (or any non-zero multiple).
        "A1：<span class=\"chem\">\\mathbf{n} = (1, -3, -5)</span>（或其任何非零倍數）。",
        // EN: M1: substitutes a point on either line (e.g. <span class="chem">P</span>) to find the constant.
        "M1：代入任一直線上的一點（例如 <span class=\"chem\">P</span>）求常數。",
        // EN: A1: <span class="chem">x - 3y - 5z = -10</span> (or equivalent).
        "A1：<span class=\"chem\">x - 3y - 5z = -10</span>（或等價式）。",
      ],
    },

    // ── t3-3-q026 · numeric · exam · AHL · AHL 3.16–3.17 · 4 marks
    "t3-3-q026": {
      // EN: <p>The plane <span class="chem">Π</span> has vector equation <span class="chem">\mathbf{r} = (2, 1, -1) + lambda(1, 0, 3) + mu(-1, 2, 1)</span>, where <span class="chem">lambda, mu \in \mathbb{R}</span>.</p><p>The plane <span class="chem">Π</span> meets the <span class="chem">z</span>-axis at the point <span class="chem">(0, 0, c)</span>. Find the value of <span class="chem">c</span>.</p>
      stem: "<p>平面 <span class=\"chem\">Π</span> 的向量方程為 <span class=\"chem\">\\mathbf{r} = (2, 1, -1) + lambda(1, 0, 3) + mu(-1, 2, 1)</span>，其中 <span class=\"chem\">lambda, mu \\in \\mathbb{R}</span>。</p><p>平面 <span class=\"chem\">Π</span> 與 <span class=\"chem\">z</span> 軸相交於點 <span class=\"chem\">(0, 0, c)</span>。求 (Find) <span class=\"chem\">c</span> 的值。</p>",
      hints: [
        // EN: Decode: the vector form is hard to use directly. Convert it to Cartesian form <span class="chem">ax + by + cz = d</span>, then put <span class="chem">x = y = 0</span>.
        "解碼：向量形式難以直接使用。先把它轉換為笛卡兒形式 <span class=\"chem\">ax + by + cz = d</span>，再代入 <span class=\"chem\">x = y = 0</span>。",
        // EN: A normal is <span class="chem">(1, 0, 3) \times (-1, 2, 1)</span>.
        "法向量為 <span class=\"chem\">(1, 0, 3) \\times (-1, 2, 1)</span>。",
        // EN: Simplify the normal to <span class="chem">(3, 2, -1)</span> and substitute the point <span class="chem">(2, 1, -1)</span> to find <span class="chem">d</span>.
        "把法向量化簡為 <span class=\"chem\">(3, 2, -1)</span>，並代入點 <span class=\"chem\">(2, 1, -1)</span> 求 <span class=\"chem\">d</span>。",
      ],
      // EN: <p><span class="chem">(1, 0, 3) \times (-1, 2, 1) = ((0)(1) - (3)(2), (3)(-1) - (1)(1), (1)(2) - (0)(-1)) = (-6, -4, 2)</span>, so take <span class="chem">\mathbf{n} = (3, 2, -1)</span>. Then <span class="chem">\mathbf{r} \cdot \mathbf{n} = (2, 1, -1) \cdot (3, 2, -1) = 6 + 2 + 1 = 9</span>, giving <span class="chem">3x + 2y - z = 9</span>. On the <span class="chem">z</span>-axis <span class="chem">x = y = 0</span>, so <span class="chem">-z = 9</span> and <span class="chem">c = -9</span>.</p>
      solution: "<p><span class=\"chem\">(1, 0, 3) \\times (-1, 2, 1) = ((0)(1) - (3)(2), (3)(-1) - (1)(1), (1)(2) - (0)(-1)) = (-6, -4, 2)</span>，故取 <span class=\"chem\">\\mathbf{n} = (3, 2, -1)</span>。於是 <span class=\"chem\">\\mathbf{r} \\cdot \\mathbf{n} = (2, 1, -1) \\cdot (3, 2, -1) = 6 + 2 + 1 = 9</span>，得 <span class=\"chem\">3x + 2y - z = 9</span>。在 <span class=\"chem\">z</span> 軸上 <span class=\"chem\">x = y = 0</span>，所以 <span class=\"chem\">-z = 9</span>，<span class=\"chem\">c = -9</span>。</p>",
    },

    // ── t3-3-q027 · numeric · exam · AHL · AHL 3.17–3.18 · 5 marks
    "t3-3-q027": {
      // EN: <p>Find the exact shortest distance from the point <span class="chem">P(3, -2, 5)</span> to the plane <span class="chem">2x - y + 2z = 4</span>.</p>
      stem: "<p>求 (Find) 點 <span class=\"chem\">P(3, -2, 5)</span> 到平面 <span class=\"chem\">2x - y + 2z = 4</span> 的準確最短距離。</p>",
      hints: [
        // EN: The shortest distance is measured along the normal. The line through <span class="chem">P</span> perpendicular to the plane is <span class="chem">\mathbf{r} = (3, -2, 5) + s(2, -1, 2)</span>.
        "最短距離是沿法線方向量度的。穿過 <span class=\"chem\">P</span> 並垂直於平面的直線是 <span class=\"chem\">\\mathbf{r} = (3, -2, 5) + s(2, -1, 2)</span>。",
        // EN: Substitute this line into the plane equation to find <span class="chem">s</span> at the foot of the perpendicular.
        "把這條直線代入平面方程，求出垂足處的 <span class=\"chem\">s</span>。",
        // EN: The distance is <span class="chem">|s| × |(2, -1, 2)| = 3|s|</span>.
        "距離為 <span class=\"chem\">|s| × |(2, -1, 2)| = 3|s|</span>。",
      ],
      // EN: <p>Substitute <span class="chem">(3 + 2s, -2 - s, 5 + 2s)</span> into <span class="chem">2x - y + 2z = 4</span>: <span class="chem">6 + 4s + 2 + s + 10 + 4s = 4 => 18 + 9s = 4 => s = -14/9</span>. The distance is <span class="chem">|s| × |(2, -1, 2)| = (14/9)(3) = 14/3</span>.</p>
      solution: "<p>把 <span class=\"chem\">(3 + 2s, -2 - s, 5 + 2s)</span> 代入 <span class=\"chem\">2x - y + 2z = 4</span>：<span class=\"chem\">6 + 4s + 2 + s + 10 + 4s = 4 => 18 + 9s = 4 => s = -14/9</span>。距離為 <span class=\"chem\">|s| × |(2, -1, 2)| = (14/9)(3) = 14/3</span>。</p>",
    },

    // ── t3-3-q028 · short · exam · AHL · AHL 3.16, 3.18 · 9 marks
    "t3-3-q028": {
      // EN: <p>The planes <span class="chem">Π_1: x + 2y - z = 3</span> and <span class="chem">Π_2: 3x - y + 2z = 2</span> meet in the line <span class="chem">L</span>.</p><p>(a) Find a vector equation of <span class="chem">L</span>. <strong>[5 marks]</strong></p><p>(b) Find the coordinates of the point where <span class="chem">L</span> meets the plane <span class="chem">Π_3: x - y + z = 2</span>. <strong>[3 marks]</strong></p><p>(c) Hence write down the solution of the system of equations formed by <span class="chem">Π_1</span>, <span class="chem">Π_2</span> and <span class="chem">Π_3</span>. <strong>[1 mark]</strong></p>
      stem: "<p>平面 <span class=\"chem\">Π_1: x + 2y - z = 3</span> 與 <span class=\"chem\">Π_2: 3x - y + 2z = 2</span> 相交於直線 <span class=\"chem\">L</span>。</p><p>(a) 求 (Find) <span class=\"chem\">L</span> 的一條向量方程。<strong>[5 marks]</strong></p><p>(b) 求 (Find) <span class=\"chem\">L</span> 與平面 <span class=\"chem\">Π_3: x - y + z = 2</span> 的交點的坐標。<strong>[3 marks]</strong></p><p>(c) 由此寫出 (Hence write down) 由 <span class=\"chem\">Π_1</span>、<span class=\"chem\">Π_2</span> 與 <span class=\"chem\">Π_3</span> 組成的方程組的解。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: The line of intersection is perpendicular to both normal vectors.
        "交線同時垂直於兩個法向量。",
        // EN: To find a point on <span class="chem">L</span>, choose a convenient value for one coordinate and solve for the other two.
        "要求 <span class=\"chem\">L</span> 上的一點，可為其中一個坐標選取方便的值，再解出另外兩個坐標。",
        // EN: A point on all three planes is a solution of all three equations.
        "同時位於三個平面上的點就是三條方程的解。",
      ],
      // EN: <p>(a) The direction of <span class="chem">L</span> is perpendicular to both normals: <span class="chem">(1, 2, -1) \times (3, -1, 2) = ((2)(2) - (-1)(-1), (-1)(3) - (1)(2), (1)(-1) - (2)(3)) = (3, -5, -7)</span>. Put <span class="chem">z = 0</span>: <span class="chem">x + 2y = 3</span> and <span class="chem">3x - y = 2</span>, so <span class="chem">x = 1, y = 1</span>. Hence <span class="chem">L: \mathbf{r} = (1, 1, 0) + t(3, -5, -7)</span>.</p><p>(b) Substitute <span class="chem">(1 + 3t, 1 - 5t, -7t)</span> into <span class="chem">Π_3</span>: <span class="chem">1 + 3t - 1 + 5t - 7t = 2 => t = 2</span>. The point is <span class="chem">(7, -9, -14)</span>.</p><p>(c) The three planes meet at a single point, so the unique solution is <span class="chem">x = 7, y = -9, z = -14</span>.</p>
      answer: "<p>(a) <span class=\"chem\">L</span> 的方向同時垂直於兩個法向量：<span class=\"chem\">(1, 2, -1) \\times (3, -1, 2) = ((2)(2) - (-1)(-1), (-1)(3) - (1)(2), (1)(-1) - (2)(3)) = (3, -5, -7)</span>。令 <span class=\"chem\">z = 0</span>：<span class=\"chem\">x + 2y = 3</span> 及 <span class=\"chem\">3x - y = 2</span>，故 <span class=\"chem\">x = 1, y = 1</span>。因此 <span class=\"chem\">L: \\mathbf{r} = (1, 1, 0) + t(3, -5, -7)</span>。</p><p>(b) 把 <span class=\"chem\">(1 + 3t, 1 - 5t, -7t)</span> 代入 <span class=\"chem\">Π_3</span>：<span class=\"chem\">1 + 3t - 1 + 5t - 7t = 2 => t = 2</span>。該點為 <span class=\"chem\">(7, -9, -14)</span>。</p><p>(c) 三個平面相交於單一點，所以唯一解為 <span class=\"chem\">x = 7, y = -9, z = -14</span>。</p>",
      markscheme: [
        // EN: M1: finds the direction as <span class="chem">\mathbf{n_1} \times \mathbf{n_2}</span> (or eliminates a variable).
        "M1：以 <span class=\"chem\">\\mathbf{n_1} \\times \\mathbf{n_2}</span> 求方向（或消去一個變數）。",
        // EN: A1: direction <span class="chem">(3, -5, -7)</span> (or any non-zero multiple).
        "A1：方向 <span class=\"chem\">(3, -5, -7)</span>（或其任何非零倍數）。",
        // EN: M1: sets one coordinate (e.g. <span class="chem">z = 0</span>) and solves the two remaining equations.
        "M1：設定一個坐標（例如 <span class=\"chem\">z = 0</span>）並解餘下的兩條方程。",
        // EN: A1: a point on <span class="chem">L</span>, e.g. <span class="chem">(1, 1, 0)</span>.
        "A1：<span class=\"chem\">L</span> 上的一點，例如 <span class=\"chem\">(1, 1, 0)</span>。",
        // EN: A1: <span class="chem">\mathbf{r} = (1, 1, 0) + t(3, -5, -7)</span> (must have <span class="chem">\mathbf{r} =</span>).
        "A1：<span class=\"chem\">\\mathbf{r} = (1, 1, 0) + t(3, -5, -7)</span>（必須寫出 <span class=\"chem\">\\mathbf{r} =</span>）。",
        // EN: M1: substitutes the parametric form of <span class="chem">L</span> into <span class="chem">Π_3</span>.
        "M1：把 <span class=\"chem\">L</span> 的參數形式代入 <span class=\"chem\">Π_3</span>。",
        // EN: A1: <span class="chem">t = 2</span> (for their line).
        "A1：<span class=\"chem\">t = 2</span>（就其所得直線而言）。",
        // EN: A1: <span class="chem">(7, -9, -14)</span>.
        "A1：<span class=\"chem\">(7, -9, -14)</span>。",
        // EN: A1: <span class="chem">x = 7, y = -9, z = -14</span>.
        "A1：<span class=\"chem\">x = 7, y = -9, z = -14</span>。",
      ],
    },

    // ── t3-3-q029 · numeric · exam · AHL · AHL 3.13, 3.16 · 4 marks
    "t3-3-q029": {
      // EN: <p>The vectors <span class="chem">\mathbf{u}</span> and <span class="chem">\mathbf{v}</span> satisfy <span class="chem">|\mathbf{u}| = 4</span>, <span class="chem">|\mathbf{v}| = 5</span> and <span class="chem">\mathbf{u} \cdot \mathbf{v} = 12</span>. Find <span class="chem">|\mathbf{u} \times \mathbf{v}|</span>.</p>
      stem: "<p>向量 <span class=\"chem\">\\mathbf{u}</span> 與 <span class=\"chem\">\\mathbf{v}</span> 滿足 <span class=\"chem\">|\\mathbf{u}| = 4</span>、<span class=\"chem\">|\\mathbf{v}| = 5</span> 及 <span class=\"chem\">\\mathbf{u} \\cdot \\mathbf{v} = 12</span>。求 (Find) <span class=\"chem\">|\\mathbf{u} \\times \\mathbf{v}|</span>。</p>",
      hints: [
        // EN: Decode: you are not given the components, so you must link the two products through the angle <span class="chem">theta</span> between the vectors.
        "解碼：題目沒有給出分量，所以你必須透過兩向量之間的夾角 <span class=\"chem\">theta</span> 把兩種積聯繫起來。",
        // EN: Use <span class="chem">\mathbf{u} \cdot \mathbf{v} = |\mathbf{u}||\mathbf{v}| cos theta</span> to find <span class="chem">cos theta</span>, then <span class="chem">sin theta</span> (positive, since <span class="chem">0 &lt;= theta &lt;= 180°</span>).
        "利用 <span class=\"chem\">\\mathbf{u} \\cdot \\mathbf{v} = |\\mathbf{u}||\\mathbf{v}| cos theta</span> 求 <span class=\"chem\">cos theta</span>，再求 <span class=\"chem\">sin theta</span>（取正值，因為 <span class=\"chem\">0 &lt;= theta &lt;= 180°</span>）。",
        // EN: Then <span class="chem">|\mathbf{u} \times \mathbf{v}| = |\mathbf{u}||\mathbf{v}| sin theta</span>.
        "然後 <span class=\"chem\">|\\mathbf{u} \\times \\mathbf{v}| = |\\mathbf{u}||\\mathbf{v}| sin theta</span>。",
      ],
      // EN: <p><span class="chem">cos theta = 12 / (4 × 5) = 3/5</span>, so <span class="chem">sin theta = 4/5</span> (sine is non-negative for <span class="chem">0 &lt;= theta &lt;= 180°</span>). Then <span class="chem">|\mathbf{u} \times \mathbf{v}| = 4 × 5 × 4/5 = 16</span>. (Equivalently, <span class="chem">|\mathbf{u} \times \mathbf{v}|^2 = |\mathbf{u}|^2|\mathbf{v}|^2 - (\mathbf{u} \cdot \mathbf{v})^2 = 400 - 144 = 256</span>.)</p>
      solution: "<p><span class=\"chem\">cos theta = 12 / (4 × 5) = 3/5</span>，故 <span class=\"chem\">sin theta = 4/5</span>（當 <span class=\"chem\">0 &lt;= theta &lt;= 180°</span> 時正弦值非負）。於是 <span class=\"chem\">|\\mathbf{u} \\times \\mathbf{v}| = 4 × 5 × 4/5 = 16</span>。（等價地，<span class=\"chem\">|\\mathbf{u} \\times \\mathbf{v}|^2 = |\\mathbf{u}|^2|\\mathbf{v}|^2 - (\\mathbf{u} \\cdot \\mathbf{v})^2 = 400 - 144 = 256</span>。）</p>",
    },

    // ── t3-3-q030 · short · challenge · AHL · AHL 3.12 · 8 marks
    "t3-3-q030": {
      // EN: <p>A garden designer draws any quadrilateral flower bed <span class="chem">ABCD</span> (not necessarily flat or regular) and marks the midpoints <span class="chem">P</span>, <span class="chem">Q</span>, <span class="chem">R</span> and <span class="chem">S</span> of <span class="chem">AB</span>, <span class="chem">BC</span>, <span class="chem">CD</span> and <span class="chem">DA</span>. She claims that a path joining <span class="chem">P</span>, <span class="chem">Q</span>, <span class="chem">R</span>, <span class="chem">S</span> in order always forms a parallelogram. Let <span class="chem">A</span>, <span class="chem">B</span>, <span class="chem">C</span>, <span class="chem">D</span> have position vectors <span class="chem">\mathbf{a}</span>, <span class="chem">\mathbf{b}</span>, <span class="chem">\mathbf{c}</span>, <span class="chem">\mathbf{d}</span>.</p><p>(a) Prove her claim. <strong>[6 marks]</strong></p><p>(b) Show that the total length of the path <span class="chem">PQRSP</span> equals <span class="chem">AC + BD</span>, the sum of the lengths of the diagonals of <span class="chem">ABCD</span>. <strong>[2 marks]</strong></p>
      stem: "<p>一位園林設計師畫出任意一個四邊形花圃 <span class=\"chem\">ABCD</span>（不一定是平面或正多邊形），並標出 <span class=\"chem\">AB</span>、<span class=\"chem\">BC</span>、<span class=\"chem\">CD</span> 與 <span class=\"chem\">DA</span> 的中點 <span class=\"chem\">P</span>、<span class=\"chem\">Q</span>、<span class=\"chem\">R</span> 與 <span class=\"chem\">S</span>。她聲稱依次連接 <span class=\"chem\">P</span>、<span class=\"chem\">Q</span>、<span class=\"chem\">R</span>、<span class=\"chem\">S</span> 的小徑必定構成一個平行四邊形。設 <span class=\"chem\">A</span>、<span class=\"chem\">B</span>、<span class=\"chem\">C</span>、<span class=\"chem\">D</span> 的位置向量分別為 <span class=\"chem\">\\mathbf{a}</span>、<span class=\"chem\">\\mathbf{b}</span>、<span class=\"chem\">\\mathbf{c}</span>、<span class=\"chem\">\\mathbf{d}</span>。</p><p>(a) 證明 (Prove) 她的說法。<strong>[6 marks]</strong></p><p>(b) 證明 (Show that) 小徑 <span class=\"chem\">PQRSP</span> 的總長度等於 <span class=\"chem\">AC + BD</span>，即 <span class=\"chem\">ABCD</span> 兩條對角線長度之和。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: this is a general proof. Do not choose coordinates. Show that <span class="chem">\mathbf{PQ}</span> and <span class="chem">\mathbf{SR}</span> are the same vector for any <span class="chem">\mathbf{a}, \mathbf{b}, \mathbf{c}, \mathbf{d}</span>.
        "解碼：這是一般性的證明，不要選取坐標。證明對任何 <span class=\"chem\">\\mathbf{a}, \\mathbf{b}, \\mathbf{c}, \\mathbf{d}</span>，<span class=\"chem\">\\mathbf{PQ}</span> 與 <span class=\"chem\">\\mathbf{SR}</span> 都是同一個向量。",
        // EN: The midpoint of <span class="chem">AB</span> has position vector <span class="chem">(\mathbf{a} + \mathbf{b})/2</span>.
        "<span class=\"chem\">AB</span> 的中點的位置向量為 <span class=\"chem\">(\\mathbf{a} + \\mathbf{b})/2</span>。",
        // EN: After simplifying, <span class="chem">\mathbf{PQ}</span> is half of a diagonal vector of <span class="chem">ABCD</span>. Which one?
        "化簡後，<span class=\"chem\">\\mathbf{PQ}</span> 是 <span class=\"chem\">ABCD</span> 其中一條對角線向量的一半。是哪一條？",
      ],
      // EN: <p><strong>Decode:</strong> "always forms a parallelogram" means you must show, for general vectors, that one pair of opposite sides of <span class="chem">PQRS</span> is given by the same vector.</p><p>(a) The midpoints have position vectors <span class="chem">\mathbf{p} = (\mathbf{a} + \mathbf{b})/2</span>, <span class="chem">\mathbf{q} = (\mathbf{b} + \mathbf{c})/2</span>, <span class="chem">\mathbf{r} = (\mathbf{c} + \mathbf{d})/2</span>, <span class="chem">\mathbf{s} = (\mathbf{d} + \mathbf{a})/2</span>. Then <span class="chem">\mathbf{PQ} = \mathbf{q} - \mathbf{p} = (\mathbf{c} - \mathbf{a})/2</span> and <span class="chem">\mathbf{SR} = \mathbf{r} - \mathbf{s} = (\mathbf{c} - \mathbf{a})/2</span>. So <span class="chem">\mathbf{PQ} = \mathbf{SR}</span>: the opposite sides <span class="chem">PQ</span> and <span class="chem">SR</span> are parallel and equal in length, and <span class="chem">PQRS</span> is a parallelogram.</p><p>(b) Similarly <span class="chem">\mathbf{QR} = (\mathbf{d} - \mathbf{b})/2 = \mathbf{PS}</span>. So the path length is <span class="chem">2|\mathbf{PQ}| + 2|\mathbf{QR}| = |\mathbf{c} - \mathbf{a}| + |\mathbf{d} - \mathbf{b}| = AC + BD</span>.</p>
      answer: "<p><strong>解碼：</strong>「必定構成一個平行四邊形」表示你必須就一般向量證明 <span class=\"chem\">PQRS</span> 有一對對邊由同一個向量表示。</p><p>(a) 各中點的位置向量為 <span class=\"chem\">\\mathbf{p} = (\\mathbf{a} + \\mathbf{b})/2</span>、<span class=\"chem\">\\mathbf{q} = (\\mathbf{b} + \\mathbf{c})/2</span>、<span class=\"chem\">\\mathbf{r} = (\\mathbf{c} + \\mathbf{d})/2</span>、<span class=\"chem\">\\mathbf{s} = (\\mathbf{d} + \\mathbf{a})/2</span>。於是 <span class=\"chem\">\\mathbf{PQ} = \\mathbf{q} - \\mathbf{p} = (\\mathbf{c} - \\mathbf{a})/2</span> 及 <span class=\"chem\">\\mathbf{SR} = \\mathbf{r} - \\mathbf{s} = (\\mathbf{c} - \\mathbf{a})/2</span>。所以 <span class=\"chem\">\\mathbf{PQ} = \\mathbf{SR}</span>：對邊 <span class=\"chem\">PQ</span> 與 <span class=\"chem\">SR</span> 平行且等長，<span class=\"chem\">PQRS</span> 是平行四邊形。</p><p>(b) 同理 <span class=\"chem\">\\mathbf{QR} = (\\mathbf{d} - \\mathbf{b})/2 = \\mathbf{PS}</span>。所以小徑長度為 <span class=\"chem\">2|\\mathbf{PQ}| + 2|\\mathbf{QR}| = |\\mathbf{c} - \\mathbf{a}| + |\\mathbf{d} - \\mathbf{b}| = AC + BD</span>。</p>",
      markscheme: [
        // EN: M1: uses the midpoint as the average of position vectors, e.g. <span class="chem">\mathbf{p} = (\mathbf{a} + \mathbf{b})/2</span>.
        "M1：以位置向量的平均值表示中點，例如 <span class=\"chem\">\\mathbf{p} = (\\mathbf{a} + \\mathbf{b})/2</span>。",
        // EN: A1: all four of <span class="chem">\mathbf{p}, \mathbf{q}, \mathbf{r}, \mathbf{s}</span> correct.
        "A1：<span class=\"chem\">\\mathbf{p}, \\mathbf{q}, \\mathbf{r}, \\mathbf{s}</span> 四個全部正確。",
        // EN: M1: finds a side vector as a difference, e.g. <span class="chem">\mathbf{PQ} = \mathbf{q} - \mathbf{p}</span>.
        "M1：以差求邊向量，例如 <span class=\"chem\">\\mathbf{PQ} = \\mathbf{q} - \\mathbf{p}</span>。",
        // EN: A1: <span class="chem">\mathbf{PQ} = (\mathbf{c} - \mathbf{a})/2</span>.
        "A1：<span class=\"chem\">\\mathbf{PQ} = (\\mathbf{c} - \\mathbf{a})/2</span>。",
        // EN: A1: <span class="chem">\mathbf{SR} = (\mathbf{c} - \mathbf{a})/2</span> (or <span class="chem">\mathbf{QR} = \mathbf{PS} = (\mathbf{d} - \mathbf{b})/2</span>).
        "A1：<span class=\"chem\">\\mathbf{SR} = (\\mathbf{c} - \\mathbf{a})/2</span>（或 <span class=\"chem\">\\mathbf{QR} = \\mathbf{PS} = (\\mathbf{d} - \\mathbf{b})/2</span>）。",
        // EN: R1: equal vectors, so opposite sides are parallel and equal: <span class="chem">PQRS</span> is a parallelogram (AG).
        "R1：向量相等，所以對邊平行且相等：<span class=\"chem\">PQRS</span> 是平行四邊形 (AG)。",
        // EN: A1: <span class="chem">\mathbf{QR} = (\mathbf{d} - \mathbf{b})/2</span>, so <span class="chem">|\mathbf{QR}| = BD/2</span> and <span class="chem">|\mathbf{PQ}| = AC/2</span>.
        "A1：<span class=\"chem\">\\mathbf{QR} = (\\mathbf{d} - \\mathbf{b})/2</span>，故 <span class=\"chem\">|\\mathbf{QR}| = BD/2</span> 及 <span class=\"chem\">|\\mathbf{PQ}| = AC/2</span>。",
        // EN: A1: path length <span class="chem">= 2(AC/2) + 2(BD/2) = AC + BD</span> (AG).
        "A1：小徑長度 <span class=\"chem\">= 2(AC/2) + 2(BD/2) = AC + BD</span> (AG)。",
      ],
    },

    // ── t3-3-q031 · numeric · challenge · AHL · AHL 3.15 · 5 marks
    "t3-3-q031": {
      // EN: <p>Two straight wires are modelled by the lines <span class="chem">L_1: \mathbf{r} = (1, -2, 0) + lambda(1, 2, 1)</span> and <span class="chem">L_2: \mathbf{r} = (5, 1, k) + mu(1, 1, -2)</span>. An engineer finds that the two wires lie in a common plane. Find the value of <span class="chem">k</span>.</p>
      stem: "<p>兩條筆直的電線以直線 <span class=\"chem\">L_1: \\mathbf{r} = (1, -2, 0) + lambda(1, 2, 1)</span> 及 <span class=\"chem\">L_2: \\mathbf{r} = (5, 1, k) + mu(1, 1, -2)</span> 作模型。一位工程師發現這兩條電線位於同一平面上。求 (Find) <span class=\"chem\">k</span> 的值。</p>",
      hints: [
        // EN: Decode: two lines lie in one plane exactly when they are parallel or they intersect. These directions are not parallel, so "in a common plane" means "the lines intersect".
        "解碼：兩條直線位於同一平面上，當且僅當它們平行或相交。這兩個方向不平行，所以「位於同一平面上」即「兩直線相交」。",
        // EN: Equate the <span class="chem">x</span>- and <span class="chem">y</span>-components and solve for <span class="chem">lambda</span> and <span class="chem">mu</span>; these do not involve <span class="chem">k</span>.
        "令 <span class=\"chem\">x</span> 分量與 <span class=\"chem\">y</span> 分量相等，解出 <span class=\"chem\">lambda</span> 與 <span class=\"chem\">mu</span>；這兩條方程不含 <span class=\"chem\">k</span>。",
        // EN: The <span class="chem">z</span>-components must then agree. Use that equation to find <span class="chem">k</span>.
        "然後 <span class=\"chem\">z</span> 分量也必須相等。利用該方程求 <span class=\"chem\">k</span>。",
      ],
      // EN: <p><strong>Decode:</strong> <span class="chem">(1, 2, 1)</span> is not a multiple of <span class="chem">(1, 1, -2)</span>, so coplanar lines must intersect.</p><p><span class="chem">x</span>: <span class="chem">1 + lambda = 5 + mu</span>; <span class="chem">y</span>: <span class="chem">-2 + 2lambda = 1 + mu</span>. Subtracting: <span class="chem">3 - lambda = 4 => lambda = -1</span>, and then <span class="chem">mu = -5</span>. <span class="chem">z</span>: <span class="chem">lambda = k - 2mu => -1 = k + 10 => k = -11</span>.</p>
      solution: "<p><strong>解碼：</strong><span class=\"chem\">(1, 2, 1)</span> 不是 <span class=\"chem\">(1, 1, -2)</span> 的倍數，所以共面的兩直線必定相交。</p><p><span class=\"chem\">x</span>：<span class=\"chem\">1 + lambda = 5 + mu</span>；<span class=\"chem\">y</span>：<span class=\"chem\">-2 + 2lambda = 1 + mu</span>。兩式相減：<span class=\"chem\">3 - lambda = 4 => lambda = -1</span>，於是 <span class=\"chem\">mu = -5</span>。<span class=\"chem\">z</span>：<span class=\"chem\">lambda = k - 2mu => -1 = k + 10 => k = -11</span>。</p>",
    },

    // ── t3-3-q032 · numeric · challenge · AHL · AHL 3.16–3.18 · 6 marks
    "t3-3-q032": {
      // EN: <p>A flat glass panel contains the straight edge <span class="chem">L: \mathbf{r} = (1, 2, 0) + lambda(2, -1, 1)</span> and also the corner point <span class="chem">P(3, 1, 4)</span>. A light is fixed at the origin <span class="chem">O</span>. Find the exact shortest distance from the light to the plane of the panel.</p>
      stem: "<p>一塊平面玻璃板包含直邊 <span class=\"chem\">L: \\mathbf{r} = (1, 2, 0) + lambda(2, -1, 1)</span>，亦包含角點 <span class=\"chem\">P(3, 1, 4)</span>。一盞燈固定在原點 <span class=\"chem\">O</span>。求 (Find) 燈到玻璃板所在平面的準確最短距離。</p>",
      hints: [
        // EN: Decode: first build the plane from a line and a point not on it, then find the distance from <span class="chem">O</span> to that plane.
        "解碼：先由一條直線和一個不在該直線上的點建立平面，再求 <span class=\"chem\">O</span> 到該平面的距離。",
        // EN: Two directions in the plane are <span class="chem">(2, -1, 1)</span> and <span class="chem">\mathbf{AP}</span>, where <span class="chem">A(1, 2, 0)</span> is on <span class="chem">L</span>. Their vector product is a normal.
        "平面內的兩個方向是 <span class=\"chem\">(2, -1, 1)</span> 及 <span class=\"chem\">\\mathbf{AP}</span>，其中 <span class=\"chem\">A(1, 2, 0)</span> 在 <span class=\"chem\">L</span> 上。它們的向量積就是法向量。",
        // EN: You should get the plane <span class="chem">x + 2y = 5</span>. The perpendicular from <span class="chem">O</span> is <span class="chem">\mathbf{r} = s(1, 2, 0)</span>.
        "你應得到平面 <span class=\"chem\">x + 2y = 5</span>。從 <span class=\"chem\">O</span> 出發的垂線為 <span class=\"chem\">\\mathbf{r} = s(1, 2, 0)</span>。",
      ],
      // EN: <p><strong>Decode:</strong> plane from a line and a point, then point-to-plane distance.</p><p><span class="chem">\mathbf{AP} = (2, -1, 4)</span>. <span class="chem">(2, -1, 1) \times (2, -1, 4) = ((-1)(4) - (1)(-1), (1)(2) - (2)(4), (2)(-1) - (-1)(2)) = (-3, -6, 0)</span>, so <span class="chem">\mathbf{n} = (1, 2, 0)</span> and the plane is <span class="chem">x + 2y = 5</span> (check with <span class="chem">P</span>: <span class="chem">3 + 2 = 5</span>). The perpendicular from <span class="chem">O</span> is <span class="chem">(s, 2s, 0)</span>: <span class="chem">5s = 5 => s = 1</span>, foot <span class="chem">(1, 2, 0)</span>. The distance is <span class="chem">sqrt(1 + 4) = sqrt(5)</span>.</p>
      solution: "<p><strong>解碼：</strong>由一條直線和一點得平面，再求點到平面的距離。</p><p><span class=\"chem\">\\mathbf{AP} = (2, -1, 4)</span>。<span class=\"chem\">(2, -1, 1) \\times (2, -1, 4) = ((-1)(4) - (1)(-1), (1)(2) - (2)(4), (2)(-1) - (-1)(2)) = (-3, -6, 0)</span>，故 <span class=\"chem\">\\mathbf{n} = (1, 2, 0)</span>，平面為 <span class=\"chem\">x + 2y = 5</span>（以 <span class=\"chem\">P</span> 檢驗：<span class=\"chem\">3 + 2 = 5</span>）。從 <span class=\"chem\">O</span> 出發的垂線為 <span class=\"chem\">(s, 2s, 0)</span>：<span class=\"chem\">5s = 5 => s = 1</span>，垂足為 <span class=\"chem\">(1, 2, 0)</span>。距離為 <span class=\"chem\">sqrt(1 + 4) = sqrt(5)</span>。</p>",
    },

    // ── t3-3-q033 · short · challenge · AHL · AHL 3.18 · 10 marks
    "t3-3-q033": {
      // EN: <p>Consider the planes <span class="chem">Π_1: x + y - z = 2</span>, <span class="chem">Π_2: 2x + 3y + z = 5</span> and <span class="chem">Π_3: x + 2y + az = b</span>, where <span class="chem">a, b \in \mathbb{R}</span>.</p><p>(a) Find the value of <span class="chem">a</span> for which the three planes do <strong>not</strong> meet at a single point. <strong>[3 marks]</strong></p><p>(b) For this value of <span class="chem">a</span>, find the value of <span class="chem">b</span> for which the planes meet in a line. <strong>[2 marks]</strong></p><p>(c) For this value of <span class="chem">a</span> and any other value of <span class="chem">b</span>, describe the geometric arrangement of the three planes, justifying your answer. <strong>[2 marks]</strong></p><p>(d) For the values in part (b), find a vector equation of the common line. <strong>[3 marks]</strong></p>
      stem: "<p>考慮平面 <span class=\"chem\">Π_1: x + y - z = 2</span>、<span class=\"chem\">Π_2: 2x + 3y + z = 5</span> 及 <span class=\"chem\">Π_3: x + 2y + az = b</span>，其中 <span class=\"chem\">a, b \\in \\mathbb{R}</span>。</p><p>(a) 求 (Find) 使三個平面<strong>不</strong>相交於單一點的 <span class=\"chem\">a</span> 值。<strong>[3 marks]</strong></p><p>(b) 就此 <span class=\"chem\">a</span> 值，求 (find) 使三個平面相交於一條直線的 <span class=\"chem\">b</span> 值。<strong>[2 marks]</strong></p><p>(c) 就此 <span class=\"chem\">a</span> 值及任何其他 <span class=\"chem\">b</span> 值，描述 (describe) 三個平面的幾何排列，並說明理由。<strong>[2 marks]</strong></p><p>(d) 就 (b) 部的值，求 (find) 公共直線的一條向量方程。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: "do not meet at a single point" = "the system does not have a unique solution". Eliminate until one equation contains only <span class="chem">z</span>.
        "解碼：「不相交於單一點」＝「方程組沒有唯一解」。逐步消元，直至有一條方程只含 <span class=\"chem\">z</span>。",
        // EN: Use <span class="chem">Π_2 - 2Π_1</span> and <span class="chem">Π_3 - Π_1</span>, then subtract the two results.
        "使用 <span class=\"chem\">Π_2 - 2Π_1</span> 及 <span class=\"chem\">Π_3 - Π_1</span>，再把兩個結果相減。",
        // EN: For part (c), "no solution" can be a triangular prism or include parallel planes. Check whether any two normals are parallel.
        "在 (c) 部中，「無解」可以是三角柱，也可以包括平行平面。檢查是否有任何兩個法向量互相平行。",
      ],
      // EN: <p><strong>Decode:</strong> "not a single point" means the system has no unique solution: eliminate to a single equation in one unknown and make its coefficient zero.</p><p>(a) <span class="chem">Π_2 - 2Π_1</span>: <span class="chem">y + 3z = 1</span>. <span class="chem">Π_3 - Π_1</span>: <span class="chem">y + (a + 1)z = b - 2</span>. Subtracting: <span class="chem">(a - 2)z = b - 3</span>. There is no unique solution when <span class="chem">a = 2</span>.</p><p>(b) With <span class="chem">a = 2</span> the last equation is <span class="chem">0z = b - 3</span>, which holds for every <span class="chem">z</span> when <span class="chem">b = 3</span>: the planes meet in a line.</p><p>(c) If <span class="chem">b != 3</span> there is no solution. The normals <span class="chem">(1, 1, -1)</span>, <span class="chem">(2, 3, 1)</span>, <span class="chem">(1, 2, 2)</span> are not multiples of one another, so no two planes are parallel; the planes meet in pairs along three parallel lines and form a triangular prism.</p><p>(d) Let <span class="chem">z = t</span>. Then <span class="chem">y = 1 - 3t</span> and <span class="chem">x = 2 - y + z = 1 + 4t</span>, so <span class="chem">\mathbf{r} = (1, 1, 0) + t(4, -3, 1)</span>.</p>
      answer: "<p><strong>解碼：</strong>「不相交於單一點」表示方程組沒有唯一解：消元至只含一個未知數的單一方程，並令其係數為零。</p><p>(a) <span class=\"chem\">Π_2 - 2Π_1</span>：<span class=\"chem\">y + 3z = 1</span>。<span class=\"chem\">Π_3 - Π_1</span>：<span class=\"chem\">y + (a + 1)z = b - 2</span>。兩式相減：<span class=\"chem\">(a - 2)z = b - 3</span>。當 <span class=\"chem\">a = 2</span> 時沒有唯一解。</p><p>(b) 當 <span class=\"chem\">a = 2</span> 時，最後一條方程為 <span class=\"chem\">0z = b - 3</span>；當 <span class=\"chem\">b = 3</span> 時，它對每個 <span class=\"chem\">z</span> 都成立：三個平面相交於一條直線。</p><p>(c) 若 <span class=\"chem\">b != 3</span>，則無解。法向量 <span class=\"chem\">(1, 1, -1)</span>、<span class=\"chem\">(2, 3, 1)</span>、<span class=\"chem\">(1, 2, 2)</span> 互不為倍數，所以沒有兩個平面互相平行；三個平面兩兩相交於三條平行直線，構成一個三角柱。</p><p>(d) 設 <span class=\"chem\">z = t</span>。於是 <span class=\"chem\">y = 1 - 3t</span> 及 <span class=\"chem\">x = 2 - y + z = 1 + 4t</span>，故 <span class=\"chem\">\\mathbf{r} = (1, 1, 0) + t(4, -3, 1)</span>。</p>",
      markscheme: [
        // EN: M1: eliminates <span class="chem">x</span> from two pairs of equations.
        "M1：從兩對方程中消去 <span class=\"chem\">x</span>。",
        // EN: A1: obtains <span class="chem">(a - 2)z = b - 3</span> (or an equivalent single equation).
        "A1：得出 <span class=\"chem\">(a - 2)z = b - 3</span>（或等價的單一方程）。",
        // EN: A1: <span class="chem">a = 2</span>.
        "A1：<span class=\"chem\">a = 2</span>。",
        // EN: M1: recognises that a line of solutions needs the equation to reduce to <span class="chem">0 = 0</span>.
        "M1：認識到要有一直線的解，方程必須化為 <span class=\"chem\">0 = 0</span>。",
        // EN: A1: <span class="chem">b = 3</span>.
        "A1：<span class=\"chem\">b = 3</span>。",
        // EN: R1: no solution, and no two normal vectors are parallel.
        "R1：無解，且沒有兩個法向量互相平行。",
        // EN: A1: the planes form a triangular prism.
        "A1：三個平面構成一個三角柱。",
        // EN: M1: introduces a parameter, e.g. <span class="chem">z = t</span>, and expresses <span class="chem">y</span> in terms of <span class="chem">t</span>.
        "M1：引入參數，例如 <span class=\"chem\">z = t</span>，並以 <span class=\"chem\">t</span> 表示 <span class=\"chem\">y</span>。",
        // EN: A1: <span class="chem">y = 1 - 3t</span> and <span class="chem">x = 1 + 4t</span>.
        "A1：<span class=\"chem\">y = 1 - 3t</span> 及 <span class=\"chem\">x = 1 + 4t</span>。",
        // EN: A1: <span class="chem">\mathbf{r} = (1, 1, 0) + t(4, -3, 1)</span> (or equivalent).
        "A1：<span class=\"chem\">\\mathbf{r} = (1, 1, 0) + t(4, -3, 1)</span>（或等價式）。",
      ],
    },

    // ── t3-3-q034 · numeric · exam · AHL · AHL 3.13 · 4 marks
    "t3-3-q034": {
      // EN: <p>A surveyor records the positions of three marker posts, in metres, as <span class="chem">A(2.4, -1.3, 0.8)</span>, <span class="chem">B(0.5, 1.7, -2.1)</span> and <span class="chem">C(3.6, 2.2, 1.5)</span>. Find the size of angle <span class="chem">ABC</span>, in degrees, correct to 3 significant figures.</p>
      stem: "<p>一位測量師記錄了三根標記柱的位置（單位為米）：<span class=\"chem\">A(2.4, -1.3, 0.8)</span>、<span class=\"chem\">B(0.5, 1.7, -2.1)</span> 及 <span class=\"chem\">C(3.6, 2.2, 1.5)</span>。求 (Find) 角 <span class=\"chem\">ABC</span> 的大小，以度為單位，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: angle <span class="chem">ABC</span> is the angle <em>at</em> <span class="chem">B</span>, so use the two vectors that start at <span class="chem">B</span>: <span class="chem">\mathbf{BA}</span> and <span class="chem">\mathbf{BC}</span>.
        "解碼：角 <span class=\"chem\">ABC</span> 是位於 <span class=\"chem\">B</span> <em>處</em>的角，所以使用從 <span class=\"chem\">B</span> 出發的兩個向量：<span class=\"chem\">\\mathbf{BA}</span> 及 <span class=\"chem\">\\mathbf{BC}</span>。",
        // EN: <span class="chem">\mathbf{BA} = (1.9, -3, 2.9)</span> and <span class="chem">\mathbf{BC} = (3.1, 0.5, 3.6)</span>.
        "<span class=\"chem\">\\mathbf{BA} = (1.9, -3, 2.9)</span> 及 <span class=\"chem\">\\mathbf{BC} = (3.1, 0.5, 3.6)</span>。",
        // EN: Use <span class="chem">cos B = (\mathbf{BA} \cdot \mathbf{BC}) / (|\mathbf{BA}||\mathbf{BC}|)</span>; do not take a modulus here, because the angle of a triangle can be obtuse.
        "使用 <span class=\"chem\">cos B = (\\mathbf{BA} \\cdot \\mathbf{BC}) / (|\\mathbf{BA}||\\mathbf{BC}|)</span>；這裏不要取絕對值，因為三角形的角可以是鈍角。",
      ],
      // EN: <p><span class="chem">\mathbf{BA} = (1.9, -3, 2.9)</span>, <span class="chem">\mathbf{BC} = (3.1, 0.5, 3.6)</span>. <span class="chem">\mathbf{BA} \cdot \mathbf{BC} = 5.89 - 1.5 + 10.44 = 14.83</span>, <span class="chem">|\mathbf{BA}| = sqrt(21.02) ≈ 4.585</span>, <span class="chem">|\mathbf{BC}| = sqrt(22.82) ≈ 4.777</span>. So <span class="chem">cos B ≈ 0.6771</span> and angle <span class="chem">ABC ≈ 47.4°</span>.</p>
      solution: "<p><span class=\"chem\">\\mathbf{BA} = (1.9, -3, 2.9)</span>，<span class=\"chem\">\\mathbf{BC} = (3.1, 0.5, 3.6)</span>。<span class=\"chem\">\\mathbf{BA} \\cdot \\mathbf{BC} = 5.89 - 1.5 + 10.44 = 14.83</span>，<span class=\"chem\">|\\mathbf{BA}| = sqrt(21.02) ≈ 4.585</span>，<span class=\"chem\">|\\mathbf{BC}| = sqrt(22.82) ≈ 4.777</span>。所以 <span class=\"chem\">cos B ≈ 0.6771</span>，角 <span class=\"chem\">ABC ≈ 47.4°</span>。</p>",
    },

    // ── t3-3-q035 · numeric · exam · AHL · AHL 3.13–3.14 · 6 marks
    "t3-3-q035": {
      // EN: <p>A camera drone moves with constant velocity. Its position <span class="chem">t</span> seconds after it is switched on is <span class="chem">\mathbf{r} = (-40, 25, 10) + t(6, -3.5, 1.2)</span>, in metres. A signal mast has its top at <span class="chem">T(30, -10, 40)</span>. Find the minimum distance between the drone and the top of the mast, correct to 3 significant figures.</p>
      stem: "<p>一架航拍無人機以等速度移動。啟動後 <span class=\"chem\">t</span> 秒，它的位置為 <span class=\"chem\">\\mathbf{r} = (-40, 25, 10) + t(6, -3.5, 1.2)</span>（單位為米）。一座訊號塔的頂部位於 <span class=\"chem\">T(30, -10, 40)</span>。求 (Find) 無人機與塔頂之間的最短距離，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: "minimum distance" between a moving point and a fixed point. Either minimise <span class="chem">|\mathbf{r}(t) - \mathbf{OT}|</span> on your GDC, or use the fact that at the closest point <span class="chem">\mathbf{TR}</span> is perpendicular to the velocity.
        "解碼：這是移動點與固定點之間的「最短距離」。可以用 GDC 求 <span class=\"chem\">|\\mathbf{r}(t) - \\mathbf{OT}|</span> 的最小值，或利用在最接近的位置時 <span class=\"chem\">\\mathbf{TR}</span> 垂直於速度這一事實。",
        // EN: <span class="chem">\mathbf{TR}(t) = (-70 + 6t, 35 - 3.5t, -30 + 1.2t)</span>.
        "<span class=\"chem\">\\mathbf{TR}(t) = (-70 + 6t, 35 - 3.5t, -30 + 1.2t)</span>.",
        // EN: Solve <span class="chem">\mathbf{TR}(t) \cdot (6, -3.5, 1.2) = 0</span> for <span class="chem">t</span>, then find <span class="chem">|\mathbf{TR}(t)|</span>.
        "解 <span class=\"chem\">\\mathbf{TR}(t) \\cdot (6, -3.5, 1.2) = 0</span> 求 <span class=\"chem\">t</span>，再求 <span class=\"chem\">|\\mathbf{TR}(t)|</span>。",
      ],
      // EN: <p><span class="chem">\mathbf{TR}(t) = (-70 + 6t, 35 - 3.5t, -30 + 1.2t)</span>. Setting <span class="chem">\mathbf{TR} \cdot (6, -3.5, 1.2) = 0</span>: <span class="chem">-420 - 122.5 - 36 + (36 + 12.25 + 1.44)t = 0 => t = 578.5 / 49.69 ≈ 11.64</span> s. Then <span class="chem">\mathbf{TR} ≈ (-0.147, -5.75, -16.0)</span> and the minimum distance is <span class="chem">≈ 17.0</span> m. (A GDC graph of <span class="chem">|\mathbf{TR}(t)|</span> gives the same minimum.)</p>
      solution: "<p><span class=\"chem\">\\mathbf{TR}(t) = (-70 + 6t, 35 - 3.5t, -30 + 1.2t)</span>。令 <span class=\"chem\">\\mathbf{TR} \\cdot (6, -3.5, 1.2) = 0</span>：<span class=\"chem\">-420 - 122.5 - 36 + (36 + 12.25 + 1.44)t = 0 => t = 578.5 / 49.69 ≈ 11.64</span> s。於是 <span class=\"chem\">\\mathbf{TR} ≈ (-0.147, -5.75, -16.0)</span>，最短距離為 <span class=\"chem\">≈ 17.0</span> m。（用 GDC 繪畫 <span class=\"chem\">|\\mathbf{TR}(t)|</span> 的圖像，亦得出相同的最小值。）</p>",
    },

    // ── t3-3-q036 · short · exam · AHL · AHL 3.12–3.14 · 9 marks
    "t3-3-q036": {
      // EN: <p>Two aircraft are tracked by radar. Relative to the control tower, with distances in kilometres and <span class="chem">t</span> in hours after 12:00, their positions are</p><p><span class="chem">\mathbf{r_A} = (-50, 20, 8.5) + t(420, 150, 0)</span> and <span class="chem">\mathbf{r_B} = (10, -60, 9.1) + t(180, 520, -0.4)</span>.</p><p>(a) Find the speed of aircraft A. <strong>[2 marks]</strong></p><p>(b) Aircraft B is descending. Show that the two aircraft are at the same altitude when <span class="chem">t = 1.5</span>, and that they do not collide at that time. <strong>[2 marks]</strong></p><p>(c) Find the minimum distance between the two aircraft and the time, to the nearest minute, at which it occurs. <strong>[4 marks]</strong></p><p>(d) Safety rules require aircraft to stay at least 5 km apart. State, with a reason, whether the rule is broken. <strong>[1 mark]</strong></p>
      stem: "<p>雷達正追蹤兩架飛機。以控制塔為參照，距離以千米為單位，<span class=\"chem\">t</span> 為 12:00 後的小時數，它們的位置為</p><p><span class=\"chem\">\\mathbf{r_A} = (-50, 20, 8.5) + t(420, 150, 0)</span> 及 <span class=\"chem\">\\mathbf{r_B} = (10, -60, 9.1) + t(180, 520, -0.4)</span>。</p><p>(a) 求 (Find) 飛機 A 的速率。<strong>[2 marks]</strong></p><p>(b) 飛機 B 正在下降。證明 (Show that) 當 <span class=\"chem\">t = 1.5</span> 時兩架飛機位於相同高度，且它們在該時刻不會相撞。<strong>[2 marks]</strong></p><p>(c) 求 (Find) 兩架飛機之間的最短距離，以及出現該距離的時間（準確至最接近的分鐘）。<strong>[4 marks]</strong></p><p>(d) 安全規則要求飛機之間至少相距 5 km。說明 (State) 規則是否被違反，並給出理由。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Speed is the magnitude of the velocity vector.
        "速率是速度向量的模。",
        // EN: Altitude is the <span class="chem">z</span>-coordinate.
        "高度就是 <span class=\"chem\">z</span> 坐標。",
        // EN: The distance between the aircraft at time <span class="chem">t</span> is <span class="chem">|\mathbf{r_A}(t) - \mathbf{r_B}(t)|</span>. Graph it on your GDC and find the minimum.
        "在時間 <span class=\"chem\">t</span> 時兩架飛機之間的距離為 <span class=\"chem\">|\\mathbf{r_A}(t) - \\mathbf{r_B}(t)|</span>。用 GDC 繪畫其圖像並求最小值。",
      ],
      // EN: <p>(a) Speed <span class="chem">= |(420, 150, 0)| = sqrt(420^2 + 150^2) ≈ 446</span> km per hour.</p><p>(b) A is always at altitude 8.5 km. B is at <span class="chem">9.1 - 0.4t = 8.5</span> when <span class="chem">t = 1.5</span>. Then <span class="chem">\mathbf{r_A} = (580, 245, 8.5)</span> and <span class="chem">\mathbf{r_B} = (280, 720, 8.5)</span>, which are different points, so there is no collision.</p><p>(c) <span class="chem">\mathbf{r_A} - \mathbf{r_B} = (-60, 80, -0.6) + t(240, -370, 0.4)</span>. Minimising its magnitude (GDC, or solving <span class="chem">(\mathbf{r_A} - \mathbf{r_B}) \cdot (240, -370, 0.4) = 0</span>) gives <span class="chem">t ≈ 0.2262</span> h, about 13.6 minutes, so at 12:14. The minimum distance is <span class="chem">≈ 6.82</span> km.</p><p>(d) The rule is not broken, since the minimum separation <span class="chem">6.82</span> km is greater than 5 km.</p>
      answer: "<p>(a) 速率 <span class=\"chem\">= |(420, 150, 0)| = sqrt(420^2 + 150^2) ≈ 446</span> km 每小時。</p><p>(b) A 一直位於 8.5 km 的高度。當 <span class=\"chem\">t = 1.5</span> 時，B 位於 <span class=\"chem\">9.1 - 0.4t = 8.5</span>。此時 <span class=\"chem\">\\mathbf{r_A} = (580, 245, 8.5)</span> 及 <span class=\"chem\">\\mathbf{r_B} = (280, 720, 8.5)</span>，兩者是不同的點，所以不會相撞。</p><p>(c) <span class=\"chem\">\\mathbf{r_A} - \\mathbf{r_B} = (-60, 80, -0.6) + t(240, -370, 0.4)</span>。使其模最小（用 GDC，或解 <span class=\"chem\">(\\mathbf{r_A} - \\mathbf{r_B}) \\cdot (240, -370, 0.4) = 0</span>）得 <span class=\"chem\">t ≈ 0.2262</span> h，約 13.6 分鐘，即 12:14。最短距離為 <span class=\"chem\">≈ 6.82</span> km。</p><p>(d) 規則沒有被違反，因為最短距離 <span class=\"chem\">6.82</span> km 大於 5 km。</p>",
      markscheme: [
        // EN: M1: finds the magnitude of the velocity vector of A.
        "M1：求 A 的速度向量的模。",
        // EN: A1: speed <span class="chem">≈ 446</span> km per hour.
        "A1：速率 <span class=\"chem\">≈ 446</span> km 每小時。",
        // EN: A1: shows <span class="chem">9.1 - 0.4(1.5) = 8.5</span>, the altitude of A.
        "A1：證明 <span class=\"chem\">9.1 - 0.4(1.5) = 8.5</span>，即 A 的高度。",
        // EN: R1: finds both positions at <span class="chem">t = 1.5</span> and states they differ, so no collision.
        "R1：求出 <span class=\"chem\">t = 1.5</span> 時兩者的位置並指出它們不同，所以不會相撞。",
        // EN: M1: forms the relative position <span class="chem">\mathbf{r_A} - \mathbf{r_B}</span> as a function of <span class="chem">t</span>.
        "M1：寫出相對位置 <span class=\"chem\">\\mathbf{r_A} - \\mathbf{r_B}</span> 作為 <span class=\"chem\">t</span> 的函數。",
        // EN: M1: minimises its magnitude (GDC graph, or scalar product with relative velocity set to 0).
        "M1：使其模最小（GDC 圖像，或令它與相對速度的純量積為 0）。",
        // EN: A1: <span class="chem">t ≈ 0.226</span> h, i.e. 12:14.
        "A1：<span class=\"chem\">t ≈ 0.226</span> h，即 12:14。",
        // EN: A1: minimum distance <span class="chem">≈ 6.82</span> km.
        "A1：最短距離 <span class=\"chem\">≈ 6.82</span> km。",
        // EN: R1: not broken, because <span class="chem">6.82 &gt; 5</span> (follow through from their minimum).
        "R1：沒有違反，因為 <span class=\"chem\">6.82 &gt; 5</span>（按其所得最小值跟進評分）。",
      ],
    },

    // ── t3-3-q037 · numeric · exam · AHL · AHL 3.14–3.16 · 5 marks
    "t3-3-q037": {
      // EN: <p>Find the shortest distance from the point <span class="chem">P(3.5, -1.2, 4.8)</span> to the line <span class="chem">\mathbf{r} = (1.1, 0.4, -2) + lambda(2.3, -1.7, 0.9)</span>, correct to 3 significant figures.</p>
      stem: "<p>求 (Find) 點 <span class=\"chem\">P(3.5, -1.2, 4.8)</span> 到直線 <span class=\"chem\">\\mathbf{r} = (1.1, 0.4, -2) + lambda(2.3, -1.7, 0.9)</span> 的最短距離，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Let <span class="chem">F</span> be the point on the line with parameter <span class="chem">lambda</span>. At the foot of the perpendicular, <span class="chem">\mathbf{PF} \cdot (2.3, -1.7, 0.9) = 0</span>.
        "設 <span class=\"chem\">F</span> 為直線上參數為 <span class=\"chem\">lambda</span> 的點。在垂足處，<span class=\"chem\">\\mathbf{PF} \\cdot (2.3, -1.7, 0.9) = 0</span>。",
        // EN: Alternatively use <span class="chem">d = |\mathbf{AP} \times \mathbf{b}| / |\mathbf{b}|</span> with <span class="chem">A(1.1, 0.4, -2)</span>.
        "或者，以 <span class=\"chem\">A(1.1, 0.4, -2)</span> 使用 <span class=\"chem\">d = |\\mathbf{AP} \\times \\mathbf{b}| / |\\mathbf{b}|</span>。",
      ],
      // EN: <p>With <span class="chem">A(1.1, 0.4, -2)</span>, <span class="chem">\mathbf{AP} = (2.4, -1.6, 6.8)</span> and <span class="chem">\mathbf{b} = (2.3, -1.7, 0.9)</span>. <span class="chem">\mathbf{AP} \times \mathbf{b} = (10.12, 13.48, -0.4)</span>, so <span class="chem">d = |\mathbf{AP} \times \mathbf{b}| / |\mathbf{b}| = 16.86 / 2.999 ≈ 5.62</span>. (Foot-of-perpendicular method: <span class="chem">lambda = (\mathbf{AP} \cdot \mathbf{b}) / |\mathbf{b}|^2 ≈ 1.597</span>, giving the same distance.)</p>
      solution: "<p>取 <span class=\"chem\">A(1.1, 0.4, -2)</span>，<span class=\"chem\">\\mathbf{AP} = (2.4, -1.6, 6.8)</span> 及 <span class=\"chem\">\\mathbf{b} = (2.3, -1.7, 0.9)</span>。<span class=\"chem\">\\mathbf{AP} \\times \\mathbf{b} = (10.12, 13.48, -0.4)</span>，故 <span class=\"chem\">d = |\\mathbf{AP} \\times \\mathbf{b}| / |\\mathbf{b}| = 16.86 / 2.999 ≈ 5.62</span>。（垂足法：<span class=\"chem\">lambda = (\\mathbf{AP} \\cdot \\mathbf{b}) / |\\mathbf{b}|^2 ≈ 1.597</span>，得到相同的距離。）</p>",
    },

    // ── t3-3-q038 · numeric · exam · AHL · AHL 3.15–3.16 · 5 marks
    "t3-3-q038": {
      // EN: <p>Two straight pipes in a factory are modelled by the skew lines <span class="chem">L_1: \mathbf{r} = (1.5, 0, -2.5) + lambda(2, -1, 3)</span> and <span class="chem">L_2: \mathbf{r} = (4, 2.5, 1) + mu(-1, 3, 0.5)</span>, in metres. A straight connecting rod is fitted perpendicular to both pipes. Find the length of the rod, correct to 3 significant figures.</p>
      stem: "<p>工廠裏兩條筆直的管道以異面直線 <span class=\"chem\">L_1: \\mathbf{r} = (1.5, 0, -2.5) + lambda(2, -1, 3)</span> 及 <span class=\"chem\">L_2: \\mathbf{r} = (4, 2.5, 1) + mu(-1, 3, 0.5)</span> 作模型（單位為米）。一根筆直的連接桿同時垂直於兩條管道安裝。求 (Find) 連接桿的長度，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: a rod perpendicular to both skew lines is the common perpendicular, so its length is the shortest distance between the lines.
        "解碼：同時垂直於兩條異面直線的桿就是公垂線，所以它的長度就是兩直線之間的最短距離。",
        // EN: The common perpendicular is parallel to <span class="chem">\mathbf{n} = (2, -1, 3) \times (-1, 3, 0.5)</span>.
        "公垂線平行於 <span class=\"chem\">\\mathbf{n} = (2, -1, 3) \\times (-1, 3, 0.5)</span>。",
        // EN: Project <span class="chem">\mathbf{A_1A_2} = (2.5, 2.5, 3.5)</span> onto <span class="chem">\mathbf{n}</span>: <span class="chem">d = |\mathbf{A_1A_2} \cdot \mathbf{n}| / |\mathbf{n}|</span>.
        "把 <span class=\"chem\">\\mathbf{A_1A_2} = (2.5, 2.5, 3.5)</span> 投影到 <span class=\"chem\">\\mathbf{n}</span> 上：<span class=\"chem\">d = |\\mathbf{A_1A_2} \\cdot \\mathbf{n}| / |\\mathbf{n}|</span>。",
      ],
      // EN: <p><span class="chem">\mathbf{n} = (2, -1, 3) \times (-1, 3, 0.5) = (-9.5, -4, 5)</span>, <span class="chem">|\mathbf{n}| = sqrt(131.25) ≈ 11.46</span>. <span class="chem">\mathbf{A_1A_2} = (2.5, 2.5, 3.5)</span>, so <span class="chem">\mathbf{A_1A_2} \cdot \mathbf{n} = -23.75 - 10 + 17.5 = -16.25</span>. The length is <span class="chem">16.25 / 11.46 ≈ 1.42</span> m.</p>
      solution: "<p><span class=\"chem\">\\mathbf{n} = (2, -1, 3) \\times (-1, 3, 0.5) = (-9.5, -4, 5)</span>，<span class=\"chem\">|\\mathbf{n}| = sqrt(131.25) ≈ 11.46</span>。<span class=\"chem\">\\mathbf{A_1A_2} = (2.5, 2.5, 3.5)</span>，故 <span class=\"chem\">\\mathbf{A_1A_2} \\cdot \\mathbf{n} = -23.75 - 10 + 17.5 = -16.25</span>。長度為 <span class=\"chem\">16.25 / 11.46 ≈ 1.42</span> m。</p>",
    },

    // ── t3-3-q039 · numeric · exam · AHL · AHL 3.16 · 4 marks
    "t3-3-q039": {
      // EN: <p>A triangular plot of land on a hillside has corners at <span class="chem">P(12.4, 3.1, 2.6)</span>, <span class="chem">Q(30.8, -5.2, 7.9)</span> and <span class="chem">R(18.5, 21.7, 11.3)</span>, with coordinates in metres. Find the area of the plot, in square metres, correct to 3 significant figures.</p>
      stem: "<p>山坡上一塊三角形土地的頂點位於 <span class=\"chem\">P(12.4, 3.1, 2.6)</span>、<span class=\"chem\">Q(30.8, -5.2, 7.9)</span> 及 <span class=\"chem\">R(18.5, 21.7, 11.3)</span>，坐標單位為米。求 (Find) 這塊土地的面積（以平方米為單位），準確至 3 位有效數字。</p>",
      hints: [
        // EN: The plot is not horizontal, so do not use only the <span class="chem">x</span>- and <span class="chem">y</span>-coordinates.
        "這塊土地不是水平的，所以不要只使用 <span class=\"chem\">x</span> 坐標和 <span class=\"chem\">y</span> 坐標。",
        // EN: Area <span class="chem">= (1/2)|\mathbf{PQ} \times \mathbf{PR}|</span>.
        "面積 <span class=\"chem\">= (1/2)|\\mathbf{PQ} \\times \\mathbf{PR}|</span>。",
      ],
      // EN: <p><span class="chem">\mathbf{PQ} = (18.4, -8.3, 5.3)</span>, <span class="chem">\mathbf{PR} = (6.1, 18.6, 8.7)</span>. <span class="chem">\mathbf{PQ} \times \mathbf{PR} ≈ (-170.79, -127.75, 392.87)</span>, with magnitude <span class="chem">≈ 447.0</span>. The area is <span class="chem">≈ 224</span> square metres.</p>
      solution: "<p><span class=\"chem\">\\mathbf{PQ} = (18.4, -8.3, 5.3)</span>，<span class=\"chem\">\\mathbf{PR} = (6.1, 18.6, 8.7)</span>。<span class=\"chem\">\\mathbf{PQ} \\times \\mathbf{PR} ≈ (-170.79, -127.75, 392.87)</span>，其模 <span class=\"chem\">≈ 447.0</span>。面積為 <span class=\"chem\">≈ 224</span> 平方米。</p>",
    },

    // ── t3-3-q040 · numeric · exam · AHL · AHL 3.18 · 5 marks
    "t3-3-q040": {
      // EN: <p>The line <span class="chem">L</span> passes through <span class="chem">A(2, -1, 4)</span> and <span class="chem">B(-3, 5, 1.5)</span>. Find the acute angle between <span class="chem">L</span> and the plane <span class="chem">3x - 4y + 2.5z = 7</span>, in degrees, correct to 3 significant figures.</p>
      stem: "<p>直線 <span class=\"chem\">L</span> 穿過 <span class=\"chem\">A(2, -1, 4)</span> 及 <span class=\"chem\">B(-3, 5, 1.5)</span>。求 (Find) <span class=\"chem\">L</span> 與平面 <span class=\"chem\">3x - 4y + 2.5z = 7</span> 之間的銳角，以度為單位，準確至 3 位有效數字。</p>",
      hints: [
        // EN: A direction vector for <span class="chem">L</span> is <span class="chem">\mathbf{AB} = (-5, 6, -2.5)</span>; a normal to the plane is <span class="chem">(3, -4, 2.5)</span>.
        "<span class=\"chem\">L</span> 的一個方向向量是 <span class=\"chem\">\\mathbf{AB} = (-5, 6, -2.5)</span>；平面的一個法向量是 <span class=\"chem\">(3, -4, 2.5)</span>。",
        // EN: The angle between a line and a plane uses sine: <span class="chem">sin phi = |\mathbf{b} \cdot \mathbf{n}| / (|\mathbf{b}||\mathbf{n}|)</span>.
        "直線與平面之間的夾角使用正弦：<span class=\"chem\">sin phi = |\\mathbf{b} \\cdot \\mathbf{n}| / (|\\mathbf{b}||\\mathbf{n}|)</span>。",
      ],
      // EN: <p><span class="chem">\mathbf{b} = (-5, 6, -2.5)</span>, <span class="chem">\mathbf{n} = (3, -4, 2.5)</span>. <span class="chem">\mathbf{b} \cdot \mathbf{n} = -15 - 24 - 6.25 = -45.25</span>, <span class="chem">|\mathbf{b}| = sqrt(67.25)</span>, <span class="chem">|\mathbf{n}| = sqrt(31.25)</span>. So <span class="chem">sin phi = 45.25 / sqrt(67.25 × 31.25) ≈ 0.9871</span> and <span class="chem">phi ≈ 80.8°</span>.</p>
      solution: "<p><span class=\"chem\">\\mathbf{b} = (-5, 6, -2.5)</span>，<span class=\"chem\">\\mathbf{n} = (3, -4, 2.5)</span>。<span class=\"chem\">\\mathbf{b} \\cdot \\mathbf{n} = -15 - 24 - 6.25 = -45.25</span>，<span class=\"chem\">|\\mathbf{b}| = sqrt(67.25)</span>，<span class=\"chem\">|\\mathbf{n}| = sqrt(31.25)</span>。所以 <span class=\"chem\">sin phi = 45.25 / sqrt(67.25 × 31.25) ≈ 0.9871</span>，<span class=\"chem\">phi ≈ 80.8°</span>。</p>",
    },

    // ── t3-3-q041 · numeric · exam · AHL · AHL 3.16, 3.18 · 6 marks
    "t3-3-q041": {
      // EN: <p>A flat solar panel is fixed on a roof. Three of its corners have coordinates <span class="chem">P(0, 0, 1.2)</span>, <span class="chem">Q(4.5, 0.6, 2.8)</span> and <span class="chem">R(-0.8, 3.0, 1.5)</span>, in metres, where the <span class="chem">z</span>-axis points vertically upwards and the ground is the plane <span class="chem">z = 0</span>. Find the angle between the panel and the horizontal ground, in degrees, correct to 3 significant figures.</p>
      stem: "<p>一塊平面太陽能板固定在屋頂上。它其中三個角的坐標為 <span class=\"chem\">P(0, 0, 1.2)</span>、<span class=\"chem\">Q(4.5, 0.6, 2.8)</span> 及 <span class=\"chem\">R(-0.8, 3.0, 1.5)</span>（單位為米），其中 <span class=\"chem\">z</span> 軸指向鉛垂向上，地面是平面 <span class=\"chem\">z = 0</span>。求 (Find) 太陽能板與水平地面之間的夾角，以度為單位，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: this is the angle between two planes: the plane of the panel and the plane <span class="chem">z = 0</span>. Use their normals.
        "解碼：這是兩個平面之間的夾角：太陽能板所在的平面與平面 <span class=\"chem\">z = 0</span>。使用它們的法向量。",
        // EN: A normal to the panel is <span class="chem">\mathbf{PQ} \times \mathbf{PR}</span>; a normal to the ground is <span class="chem">\mathbf{k} = (0, 0, 1)</span>.
        "太陽能板的一個法向量是 <span class=\"chem\">\\mathbf{PQ} \\times \\mathbf{PR}</span>；地面的一個法向量是 <span class=\"chem\">\\mathbf{k} = (0, 0, 1)</span>。",
        // EN: Use <span class="chem">cos theta = |\mathbf{n_1} \cdot \mathbf{n_2}| / (|\mathbf{n_1}||\mathbf{n_2}|)</span>.
        "使用 <span class=\"chem\">cos theta = |\\mathbf{n_1} \\cdot \\mathbf{n_2}| / (|\\mathbf{n_1}||\\mathbf{n_2}|)</span>。",
      ],
      // EN: <p><strong>Decode:</strong> angle between the panel plane and the ground plane, via normals.</p><p><span class="chem">\mathbf{PQ} = (4.5, 0.6, 1.6)</span>, <span class="chem">\mathbf{PR} = (-0.8, 3.0, 0.3)</span>. <span class="chem">\mathbf{n} = \mathbf{PQ} \times \mathbf{PR} = (-4.62, -2.63, 13.98)</span>. Then <span class="chem">cos theta = 13.98 / |\mathbf{n}| = 13.98 / 14.957 ≈ 0.9347</span>, so <span class="chem">theta ≈ 20.8°</span>.</p>
      solution: "<p><strong>解碼：</strong>透過法向量求太陽能板平面與地面之間的夾角。</p><p><span class=\"chem\">\\mathbf{PQ} = (4.5, 0.6, 1.6)</span>，<span class=\"chem\">\\mathbf{PR} = (-0.8, 3.0, 0.3)</span>。<span class=\"chem\">\\mathbf{n} = \\mathbf{PQ} \\times \\mathbf{PR} = (-4.62, -2.63, 13.98)</span>。於是 <span class=\"chem\">cos theta = 13.98 / |\\mathbf{n}| = 13.98 / 14.957 ≈ 0.9347</span>，故 <span class=\"chem\">theta ≈ 20.8°</span>。</p>",
    },

    // ── t3-3-q042 · numeric · exam · AHL · AHL 3.14, 3.18 · 5 marks
    "t3-3-q042": {
      // EN: <p>A laser at <span class="chem">S(-2, 5, 9)</span> fires a straight beam in the direction <span class="chem">(1.5, -0.8, -2.2)</span>. The beam hits a mirror lying in the plane <span class="chem">x + 2y + 3z = 6</span> at the point <span class="chem">M</span>. All distances are in metres. Find the distance <span class="chem">SM</span>, correct to 3 significant figures.</p>
      stem: "<p>位於 <span class=\"chem\">S(-2, 5, 9)</span> 的激光器沿方向 <span class=\"chem\">(1.5, -0.8, -2.2)</span> 射出一道筆直的光束。光束在點 <span class=\"chem\">M</span> 擊中位於平面 <span class=\"chem\">x + 2y + 3z = 6</span> 上的鏡子。所有距離的單位均為米。求 (Find) 距離 <span class=\"chem\">SM</span>，準確至 3 位有效數字。</p>",
      hints: [
        // EN: The beam is the line <span class="chem">\mathbf{r} = (-2, 5, 9) + lambda(1.5, -0.8, -2.2)</span>.
        "光束就是直線 <span class=\"chem\">\\mathbf{r} = (-2, 5, 9) + lambda(1.5, -0.8, -2.2)</span>。",
        // EN: Substitute into the plane equation to find <span class="chem">lambda</span> at <span class="chem">M</span>.
        "代入平面方程，求出在 <span class=\"chem\">M</span> 處的 <span class=\"chem\">lambda</span>。",
        // EN: Then <span class="chem">SM = |lambda| × |(1.5, -0.8, -2.2)|</span>.
        "然後 <span class=\"chem\">SM = |lambda| × |(1.5, -0.8, -2.2)|</span>。",
      ],
      // EN: <p>Substituting: <span class="chem">(-2 + 1.5lambda) + 2(5 - 0.8lambda) + 3(9 - 2.2lambda) = 6 => 35 - 6.7lambda = 6 => lambda = 29/6.7 ≈ 4.328</span>. <span class="chem">|(1.5, -0.8, -2.2)| = sqrt(7.73) ≈ 2.780</span>, so <span class="chem">SM ≈ 4.328 × 2.780 ≈ 12.0</span> m.</p>
      solution: "<p>代入得：<span class=\"chem\">(-2 + 1.5lambda) + 2(5 - 0.8lambda) + 3(9 - 2.2lambda) = 6 => 35 - 6.7lambda = 6 => lambda = 29/6.7 ≈ 4.328</span>。<span class=\"chem\">|(1.5, -0.8, -2.2)| = sqrt(7.73) ≈ 2.780</span>，故 <span class=\"chem\">SM ≈ 4.328 × 2.780 ≈ 12.0</span> m。</p>",
    },

    // ── t3-3-q043 · short · exam · AHL · AHL 3.14–3.17 · 12 marks
    "t3-3-q043": {
      // EN: <p>The lines <span class="chem">L_1</span> and <span class="chem">L_2</span> have equations <span class="chem">L_1: \mathbf{r} = (1.2, -0.5, 3) + lambda(2, 1.5, -1)</span> and <span class="chem">L_2: \mathbf{r} = (1.6, -5, 2.5) + mu(1.2, 2.5, -0.5)</span>.</p><p>(a) Show that <span class="chem">L_1</span> and <span class="chem">L_2</span> intersect, and find the coordinates of the point of intersection <span class="chem">X</span>. <strong>[5 marks]</strong></p><p>(b) Find the acute angle between <span class="chem">L_1</span> and <span class="chem">L_2</span>, in degrees. <strong>[3 marks]</strong></p><p>(c) Find the Cartesian equation of the plane containing <span class="chem">L_1</span> and <span class="chem">L_2</span>, in the form <span class="chem">ax + by + cz = d</span> where <span class="chem">a, b, c, d \in \mathbb{Z}</span>. <strong>[4 marks]</strong></p>
      stem: "<p>直線 <span class=\"chem\">L_1</span> 與 <span class=\"chem\">L_2</span> 的方程為 <span class=\"chem\">L_1: \\mathbf{r} = (1.2, -0.5, 3) + lambda(2, 1.5, -1)</span> 及 <span class=\"chem\">L_2: \\mathbf{r} = (1.6, -5, 2.5) + mu(1.2, 2.5, -0.5)</span>。</p><p>(a) 證明 (Show that) <span class=\"chem\">L_1</span> 與 <span class=\"chem\">L_2</span> 相交，並求 (find) 交點 <span class=\"chem\">X</span> 的坐標。<strong>[5 marks]</strong></p><p>(b) 求 (Find) <span class=\"chem\">L_1</span> 與 <span class=\"chem\">L_2</span> 之間的銳角，以度為單位。<strong>[3 marks]</strong></p><p>(c) 求 (Find) 包含 <span class=\"chem\">L_1</span> 與 <span class=\"chem\">L_2</span> 的平面的笛卡兒方程，以 <span class=\"chem\">ax + by + cz = d</span> 的形式表示，其中 <span class=\"chem\">a, b, c, d \\in \\mathbb{Z}</span>。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Use your GDC to solve the first two component equations simultaneously, then check the third.
        "用 GDC 聯立解頭兩條分量方程，再檢驗第三條。",
        // EN: For (c), the normal is perpendicular to both direction vectors. Multiply it by a suitable number to clear the decimals.
        "在 (c) 部中，法向量同時垂直於兩個方向向量。把它乘以適當的數以消去小數。",
      ],
      // EN: <p>(a) <span class="chem">1.2 + 2lambda = 1.6 + 1.2mu</span>, <span class="chem">-0.5 + 1.5lambda = -5 + 2.5mu</span>, <span class="chem">3 - lambda = 2.5 - 0.5mu</span>. Solving the first two (GDC): <span class="chem">lambda = 2</span>, <span class="chem">mu = 3</span>. Third: <span class="chem">3 - 2 = 1</span> and <span class="chem">2.5 - 1.5 = 1</span>, consistent. So the lines intersect at <span class="chem">X(5.2, 2.5, 1)</span>.</p><p>(b) <span class="chem">\mathbf{b_1} \cdot \mathbf{b_2} = 2.4 + 3.75 + 0.5 = 6.65</span>, <span class="chem">|\mathbf{b_1}| = sqrt(7.25)</span>, <span class="chem">|\mathbf{b_2}| = sqrt(7.94)</span>. <span class="chem">cos theta = 6.65 / sqrt(7.25 × 7.94) ≈ 0.8765</span>, so <span class="chem">theta ≈ 28.8°</span>.</p><p>(c) <span class="chem">\mathbf{b_1} \times \mathbf{b_2} = (1.75, -0.2, 3.2)</span>; multiply by 20: <span class="chem">\mathbf{n} = (35, -4, 64)</span>. With <span class="chem">X</span>: <span class="chem">35(5.2) - 4(2.5) + 64(1) = 236</span>, so the plane is <span class="chem">35x - 4y + 64z = 236</span>.</p>
      answer: "<p>(a) <span class=\"chem\">1.2 + 2lambda = 1.6 + 1.2mu</span>，<span class=\"chem\">-0.5 + 1.5lambda = -5 + 2.5mu</span>，<span class=\"chem\">3 - lambda = 2.5 - 0.5mu</span>。解頭兩條方程（GDC）：<span class=\"chem\">lambda = 2</span>，<span class=\"chem\">mu = 3</span>。第三條：<span class=\"chem\">3 - 2 = 1</span> 及 <span class=\"chem\">2.5 - 1.5 = 1</span>，一致。所以兩直線相交於 <span class=\"chem\">X(5.2, 2.5, 1)</span>。</p><p>(b) <span class=\"chem\">\\mathbf{b_1} \\cdot \\mathbf{b_2} = 2.4 + 3.75 + 0.5 = 6.65</span>，<span class=\"chem\">|\\mathbf{b_1}| = sqrt(7.25)</span>，<span class=\"chem\">|\\mathbf{b_2}| = sqrt(7.94)</span>。<span class=\"chem\">cos theta = 6.65 / sqrt(7.25 × 7.94) ≈ 0.8765</span>，故 <span class=\"chem\">theta ≈ 28.8°</span>。</p><p>(c) <span class=\"chem\">\\mathbf{b_1} \\times \\mathbf{b_2} = (1.75, -0.2, 3.2)</span>；乘以 20：<span class=\"chem\">\\mathbf{n} = (35, -4, 64)</span>。利用 <span class=\"chem\">X</span>：<span class=\"chem\">35(5.2) - 4(2.5) + 64(1) = 236</span>，所以平面為 <span class=\"chem\">35x - 4y + 64z = 236</span>。</p>",
      markscheme: [
        // EN: M1: equates components using two different parameters.
        "M1：用兩個不同的參數令各分量相等。",
        // EN: M1: solves two of the equations (GDC acceptable).
        "M1：解其中兩條方程（可用 GDC）。",
        // EN: A1: <span class="chem">lambda = 2</span>, <span class="chem">mu = 3</span>.
        "A1：<span class=\"chem\">lambda = 2</span>，<span class=\"chem\">mu = 3</span>。",
        // EN: R1: shows the third equation is satisfied (both sides equal 1).
        "R1：證明第三條方程成立（兩邊都等於 1）。",
        // EN: A1: <span class="chem">X(5.2, 2.5, 1)</span>.
        "A1：<span class=\"chem\">X(5.2, 2.5, 1)</span>。",
        // EN: M1: uses the scalar product of the direction vectors.
        "M1：使用方向向量的純量積。",
        // EN: A1: <span class="chem">cos theta ≈ 0.877</span> (or scalar product 6.65 with both magnitudes).
        "A1：<span class=\"chem\">cos theta ≈ 0.877</span>（或純量積 6.65 連同兩個模）。",
        // EN: A1: <span class="chem">theta ≈ 28.8°</span>.
        "A1：<span class=\"chem\">theta ≈ 28.8°</span>。",
        // EN: M1: finds the vector product of the direction vectors.
        "M1：求方向向量的向量積。",
        // EN: A1: <span class="chem">(1.75, -0.2, 3.2)</span> or an integer multiple such as <span class="chem">(35, -4, 64)</span>.
        "A1：<span class=\"chem\">(1.75, -0.2, 3.2)</span> 或其整數倍，例如 <span class=\"chem\">(35, -4, 64)</span>。",
        // EN: M1: substitutes a point on either line.
        "M1：代入任一直線上的一點。",
        // EN: A1: <span class="chem">35x - 4y + 64z = 236</span> (or an integer multiple).
        "A1：<span class=\"chem\">35x - 4y + 64z = 236</span>（或其整數倍）。",
      ],
    },

    // ── t3-3-q044 · short · exam · AHL · AHL 3.16–3.18 · 10 marks
    "t3-3-q044": {
      // EN: <p>The plane <span class="chem">Π</span> has vector equation <span class="chem">\mathbf{r} = (1, 0, 2) + s(2, -1, 1) + t(0.5, 3, -2)</span>, where <span class="chem">s, t \in \mathbb{R}</span>.</p><p>(a) Show that the Cartesian equation of <span class="chem">Π</span> is <span class="chem">-2x + 9y + 13z = 24</span>. <strong>[4 marks]</strong></p><p>The line <span class="chem">L</span> has equation <span class="chem">\mathbf{r} = (4, 4, -1) + lambda(1, 2, 1.5)</span>.</p><p>(b) Find the coordinates of the point where <span class="chem">L</span> meets <span class="chem">Π</span>. <strong>[3 marks]</strong></p><p>(c) Find the acute angle between <span class="chem">L</span> and <span class="chem">Π</span>, in degrees. <strong>[3 marks]</strong></p>
      stem: "<p>平面 <span class=\"chem\">Π</span> 的向量方程為 <span class=\"chem\">\\mathbf{r} = (1, 0, 2) + s(2, -1, 1) + t(0.5, 3, -2)</span>，其中 <span class=\"chem\">s, t \\in \\mathbb{R}</span>。</p><p>(a) 證明 (Show that) <span class=\"chem\">Π</span> 的笛卡兒方程為 <span class=\"chem\">-2x + 9y + 13z = 24</span>。<strong>[4 marks]</strong></p><p>直線 <span class=\"chem\">L</span> 的方程為 <span class=\"chem\">\\mathbf{r} = (4, 4, -1) + lambda(1, 2, 1.5)</span>。</p><p>(b) 求 (Find) <span class=\"chem\">L</span> 與 <span class=\"chem\">Π</span> 的交點的坐標。<strong>[3 marks]</strong></p><p>(c) 求 (Find) <span class=\"chem\">L</span> 與 <span class=\"chem\">Π</span> 之間的銳角，以度為單位。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: the vector form <span class="chem">\mathbf{r} = \mathbf{a} + s\mathbf{b} + t\mathbf{c}</span> gives two directions in the plane; their vector product is a normal.
        "解碼：向量形式 <span class=\"chem\">\\mathbf{r} = \\mathbf{a} + s\\mathbf{b} + t\\mathbf{c}</span> 給出平面內的兩個方向；它們的向量積就是法向量。",
        // EN: For (b), write <span class="chem">x, y, z</span> of <span class="chem">L</span> in terms of <span class="chem">lambda</span> and substitute.
        "在 (b) 部中，以 <span class=\"chem\">lambda</span> 表示 <span class=\"chem\">L</span> 的 <span class=\"chem\">x, y, z</span> 並代入。",
        // EN: For (c), the angle between a line and a plane is <span class="chem">90°</span> minus the angle between the line and the normal.
        "在 (c) 部中，直線與平面之間的夾角等於 <span class=\"chem\">90°</span> 減去直線與法向量之間的夾角。",
      ],
      // EN: <p>(a) <span class="chem">(2, -1, 1) \times (0.5, 3, -2) = ((-1)(-2) - (1)(3), (1)(0.5) - (2)(-2), (2)(3) - (-1)(0.5)) = (-1, 4.5, 6.5)</span>, so <span class="chem">\mathbf{n} = (-2, 9, 13)</span>. <span class="chem">(1, 0, 2) \cdot (-2, 9, 13) = -2 + 0 + 26 = 24</span>, so <span class="chem">-2x + 9y + 13z = 24</span>.</p><p>(b) <span class="chem">-2(4 + lambda) + 9(4 + 2lambda) + 13(-1 + 1.5lambda) = 24 => 15 + 35.5lambda = 24 => lambda = 18/71 ≈ 0.2535</span>. The point is <span class="chem">≈ (4.25, 4.51, -0.620)</span>.</p><p>(c) <span class="chem">sin phi = |(1, 2, 1.5) \cdot (-2, 9, 13)| / (|(1, 2, 1.5)||(-2, 9, 13)|) = 35.5 / (sqrt(7.25) sqrt(254)) ≈ 0.8272</span>, so <span class="chem">phi ≈ 55.8°</span>.</p>
      answer: "<p>(a) <span class=\"chem\">(2, -1, 1) \\times (0.5, 3, -2) = ((-1)(-2) - (1)(3), (1)(0.5) - (2)(-2), (2)(3) - (-1)(0.5)) = (-1, 4.5, 6.5)</span>，故 <span class=\"chem\">\\mathbf{n} = (-2, 9, 13)</span>。<span class=\"chem\">(1, 0, 2) \\cdot (-2, 9, 13) = -2 + 0 + 26 = 24</span>，所以 <span class=\"chem\">-2x + 9y + 13z = 24</span>。</p><p>(b) <span class=\"chem\">-2(4 + lambda) + 9(4 + 2lambda) + 13(-1 + 1.5lambda) = 24 => 15 + 35.5lambda = 24 => lambda = 18/71 ≈ 0.2535</span>。該點為 <span class=\"chem\">≈ (4.25, 4.51, -0.620)</span>。</p><p>(c) <span class=\"chem\">sin phi = |(1, 2, 1.5) \\cdot (-2, 9, 13)| / (|(1, 2, 1.5)||(-2, 9, 13)|) = 35.5 / (sqrt(7.25) sqrt(254)) ≈ 0.8272</span>，故 <span class=\"chem\">phi ≈ 55.8°</span>。</p>",
      markscheme: [
        // EN: M1: finds the vector product of the two direction vectors.
        "M1：求兩個方向向量的向量積。",
        // EN: A1: <span class="chem">(-1, 4.5, 6.5)</span> or a multiple such as <span class="chem">(-2, 9, 13)</span>.
        "A1：<span class=\"chem\">(-1, 4.5, 6.5)</span> 或其倍數，例如 <span class=\"chem\">(-2, 9, 13)</span>。",
        // EN: M1: uses <span class="chem">\mathbf{r} \cdot \mathbf{n} = \mathbf{a} \cdot \mathbf{n}</span> with <span class="chem">\mathbf{a} = (1, 0, 2)</span>.
        "M1：以 <span class=\"chem\">\\mathbf{a} = (1, 0, 2)</span> 使用 <span class=\"chem\">\\mathbf{r} \\cdot \\mathbf{n} = \\mathbf{a} \\cdot \\mathbf{n}</span>。",
        // EN: A1: <span class="chem">\mathbf{a} \cdot \mathbf{n} = 24</span>, giving <span class="chem">-2x + 9y + 13z = 24</span> (AG).
        "A1：<span class=\"chem\">\\mathbf{a} \\cdot \\mathbf{n} = 24</span>，得 <span class=\"chem\">-2x + 9y + 13z = 24</span> (AG)。",
        // EN: M1: substitutes the parametric form of <span class="chem">L</span> into the equation of <span class="chem">Π</span>.
        "M1：把 <span class=\"chem\">L</span> 的參數形式代入 <span class=\"chem\">Π</span> 的方程。",
        // EN: A1: <span class="chem">lambda = 18/71 ≈ 0.254</span>.
        "A1：<span class=\"chem\">lambda = 18/71 ≈ 0.254</span>。",
        // EN: A1: <span class="chem">(4.25, 4.51, -0.620)</span>.
        "A1：<span class=\"chem\">(4.25, 4.51, -0.620)</span>。",
        // EN: M1: uses sine (or <span class="chem">90° -</span> the angle with the normal) with the line direction and plane normal.
        "M1：以直線的方向向量及平面的法向量使用正弦（或 <span class=\"chem\">90° -</span> 與法向量之夾角）。",
        // EN: A1: <span class="chem">sin phi ≈ 0.827</span>.
        "A1：<span class=\"chem\">sin phi ≈ 0.827</span>。",
        // EN: A1: <span class="chem">phi ≈ 55.8°</span>.
        "A1：<span class=\"chem\">phi ≈ 55.8°</span>。",
      ],
    },

    // ── t3-3-q045 · numeric · exam · AHL · AHL 3.12, 3.14 · 6 marks
    "t3-3-q045": {
      // EN: <p>A submarine is at the point <span class="chem">(120, -40, -15)</span> and travels in a straight line at a constant speed of <span class="unit">4.5 m s-1</span> towards a research station at <span class="chem">(-60, 210, -90)</span>. Coordinates are in metres and the <span class="chem">z</span>-axis points vertically upwards from sea level. Find the time it takes for the submarine to reach a depth of 50 m below sea level, in seconds, correct to 3 significant figures.</p>
      stem: "<p>一艘潛艇位於點 <span class=\"chem\">(120, -40, -15)</span>，以 <span class=\"unit\">4.5 m s-1</span> 的等速率沿直線駛向位於 <span class=\"chem\">(-60, 210, -90)</span> 的研究站。坐標單位為米，<span class=\"chem\">z</span> 軸從海平面鉛垂向上。求 (Find) 潛艇到達海平面以下 50 m 深度所需的時間，以秒為單位，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: "a depth of 50 m below sea level" means <span class="chem">z = -50</span>. You need the velocity vector, which is the unit direction vector rescaled to speed 4.5.
        "解碼：「海平面以下 50 m 的深度」即 <span class=\"chem\">z = -50</span>。你需要速度向量，它是把單位方向向量縮放至速率 4.5 所得的向量。",
        // EN: The direction is <span class="chem">(-180, 250, -75)</span>, with magnitude <span class="chem">≈ 317.06</span>.
        "方向為 <span class=\"chem\">(-180, 250, -75)</span>，其模 <span class=\"chem\">≈ 317.06</span>。",
        // EN: The <span class="chem">z</span>-component of the velocity is <span class="chem">4.5 × (-75)/317.06</span>. Solve <span class="chem">-15 + v_z t = -50</span>.
        "速度的 <span class=\"chem\">z</span> 分量為 <span class=\"chem\">4.5 × (-75)/317.06</span>。解 <span class=\"chem\">-15 + v_z t = -50</span>。",
      ],
      // EN: <p><strong>Decode:</strong> depth 50 m means <span class="chem">z = -50</span>; the velocity is the rescaled direction.</p><p>Direction <span class="chem">(-180, 250, -75)</span>, magnitude <span class="chem">sqrt(100525) ≈ 317.06</span>. Velocity <span class="chem">\mathbf{v} = (4.5/317.06)(-180, 250, -75) ≈ (-2.555, 3.548, -1.0645)</span>. Then <span class="chem">-15 - 1.0645t = -50 => t ≈ 32.9</span> s.</p>
      solution: "<p><strong>解碼：</strong>深度 50 m 即 <span class=\"chem\">z = -50</span>；速度是縮放後的方向向量。</p><p>方向 <span class=\"chem\">(-180, 250, -75)</span>，模 <span class=\"chem\">sqrt(100525) ≈ 317.06</span>。速度 <span class=\"chem\">\\mathbf{v} = (4.5/317.06)(-180, 250, -75) ≈ (-2.555, 3.548, -1.0645)</span>。於是 <span class=\"chem\">-15 - 1.0645t = -50 => t ≈ 32.9</span> s。</p>",
    },

    // ── t3-3-q046 · numeric · exam · AHL · AHL 3.14 · 5 marks
    "t3-3-q046": {
      // EN: <p>Two straight cables in a stadium roof follow the lines <span class="chem">(x - 2)/3.5 = (y + 1)/(-2) = z/1.5</span> and <span class="chem">(x + 4)/(-1) = (y - 3)/2.5 = (z - 1)/(-4)</span>. Find the acute angle between the two cables, in degrees, correct to 3 significant figures.</p>
      stem: "<p>體育場屋頂的兩條筆直纜索分別沿直線 <span class=\"chem\">(x - 2)/3.5 = (y + 1)/(-2) = z/1.5</span> 及 <span class=\"chem\">(x + 4)/(-1) = (y - 3)/2.5 = (z - 1)/(-4)</span>。求 (Find) 兩條纜索之間的銳角，以度為單位，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: the angle between two lines is found from their direction vectors, which are the denominators of the Cartesian forms.
        "解碼：兩直線之間的夾角由它們的方向向量求得，而方向向量就是笛卡兒形式中的分母。",
        // EN: The direction vectors are <span class="chem">(3.5, -2, 1.5)</span> and <span class="chem">(-1, 2.5, -4)</span>. Their scalar product is negative: what does that tell you?
        "方向向量為 <span class=\"chem\">(3.5, -2, 1.5)</span> 及 <span class=\"chem\">(-1, 2.5, -4)</span>。它們的純量積是負數：這說明了甚麼？",
        // EN: Use <span class="chem">cos theta = |\mathbf{b_1} \cdot \mathbf{b_2}| / (|\mathbf{b_1}||\mathbf{b_2}|)</span> for the acute angle.
        "使用 <span class=\"chem\">cos theta = |\\mathbf{b_1} \\cdot \\mathbf{b_2}| / (|\\mathbf{b_1}||\\mathbf{b_2}|)</span> 求銳角。",
      ],
      // EN: <p><span class="chem">\mathbf{b_1} \cdot \mathbf{b_2} = -3.5 - 5 - 6 = -14.5</span>, <span class="chem">|\mathbf{b_1}| = sqrt(18.5)</span>, <span class="chem">|\mathbf{b_2}| = sqrt(23.25)</span>. Without the modulus, <span class="chem">cos theta ≈ -0.6992</span> gives <span class="chem">134.4°</span>, which is obtuse. The acute angle is <span class="chem">arccos(0.6992) ≈ 45.6°</span>.</p>
      solution: "<p><span class=\"chem\">\\mathbf{b_1} \\cdot \\mathbf{b_2} = -3.5 - 5 - 6 = -14.5</span>，<span class=\"chem\">|\\mathbf{b_1}| = sqrt(18.5)</span>，<span class=\"chem\">|\\mathbf{b_2}| = sqrt(23.25)</span>。如果不取絕對值，<span class=\"chem\">cos theta ≈ -0.6992</span> 得 <span class=\"chem\">134.4°</span>，這是鈍角。銳角為 <span class=\"chem\">arccos(0.6992) ≈ 45.6°</span>。</p>",
    },

    // ── t3-3-q047 · short · exam · AHL · AHL 3.14–3.16, 3.18 · 10 marks
    "t3-3-q047": {
      // EN: <p>The planes <span class="chem">Π_1: 1.5x - 2y + z = 4</span> and <span class="chem">Π_2: x + 3y - 2.5z = -1</span> meet in the line <span class="chem">L</span>.</p><p>(a) Find a direction vector for <span class="chem">L</span>. <strong>[2 marks]</strong></p><p>(b) Find the point on <span class="chem">L</span> with <span class="chem">z = 0</span>, and hence write down a vector equation of <span class="chem">L</span>. <strong>[3 marks]</strong></p><p>(c) Find the acute angle between <span class="chem">Π_1</span> and <span class="chem">Π_2</span>, in degrees. <strong>[2 marks]</strong></p><p>(d) Find the shortest distance from the point <span class="chem">P(3, 2, 5)</span> to <span class="chem">L</span>. <strong>[3 marks]</strong></p>
      stem: "<p>平面 <span class=\"chem\">Π_1: 1.5x - 2y + z = 4</span> 與 <span class=\"chem\">Π_2: x + 3y - 2.5z = -1</span> 相交於直線 <span class=\"chem\">L</span>。</p><p>(a) 求 (Find) <span class=\"chem\">L</span> 的一個方向向量。<strong>[2 marks]</strong></p><p>(b) 求 (Find) <span class=\"chem\">L</span> 上 <span class=\"chem\">z = 0</span> 的點，並由此寫出 (hence write down) <span class=\"chem\">L</span> 的一條向量方程。<strong>[3 marks]</strong></p><p>(c) 求 (Find) <span class=\"chem\">Π_1</span> 與 <span class=\"chem\">Π_2</span> 之間的銳角，以度為單位。<strong>[2 marks]</strong></p><p>(d) 求 (Find) 點 <span class=\"chem\">P(3, 2, 5)</span> 到 <span class=\"chem\">L</span> 的最短距離。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: The line of intersection is perpendicular to both normal vectors.
        "交線同時垂直於兩個法向量。",
        // EN: Set <span class="chem">z = 0</span> and solve the two equations on your GDC.
        "令 <span class=\"chem\">z = 0</span>，並用 GDC 解兩條方程。",
        // EN: For (d), <span class="chem">d = |\mathbf{AP} \times \mathbf{b}| / |\mathbf{b}|</span> where <span class="chem">A</span> is your point on <span class="chem">L</span>.
        "在 (d) 部中，<span class=\"chem\">d = |\\mathbf{AP} \\times \\mathbf{b}| / |\\mathbf{b}|</span>，其中 <span class=\"chem\">A</span> 是你在 <span class=\"chem\">L</span> 上求得的點。",
      ],
      // EN: <p>(a) <span class="chem">(1.5, -2, 1) \times (1, 3, -2.5) = (2, 4.75, 6.5)</span>, or <span class="chem">(8, 19, 26)</span>.</p><p>(b) With <span class="chem">z = 0</span>: <span class="chem">1.5x - 2y = 4</span> and <span class="chem">x + 3y = -1</span>, so <span class="chem">x = 20/13 ≈ 1.538</span>, <span class="chem">y = -11/13 ≈ -0.846</span>. <span class="chem">L: \mathbf{r} = (20/13, -11/13, 0) + t(8, 19, 26)</span>.</p><p>(c) <span class="chem">\mathbf{n_1} \cdot \mathbf{n_2} = 1.5 - 6 - 2.5 = -7</span>, <span class="chem">|\mathbf{n_1}| = sqrt(7.25)</span>, <span class="chem">|\mathbf{n_2}| = sqrt(16.25)</span>. <span class="chem">cos theta = 7 / sqrt(7.25 × 16.25) ≈ 0.6449</span>, so <span class="chem">theta ≈ 49.8°</span>.</p><p>(d) With <span class="chem">A(20/13, -11/13, 0)</span>, <span class="chem">d = |\mathbf{AP} \times \mathbf{b}| / |\mathbf{b}| ≈ 0.653</span> (or minimise <span class="chem">|\mathbf{AP} - t\mathbf{b}|</span> on the GDC).</p>
      answer: "<p>(a) <span class=\"chem\">(1.5, -2, 1) \\times (1, 3, -2.5) = (2, 4.75, 6.5)</span>，或 <span class=\"chem\">(8, 19, 26)</span>。</p><p>(b) 當 <span class=\"chem\">z = 0</span> 時：<span class=\"chem\">1.5x - 2y = 4</span> 及 <span class=\"chem\">x + 3y = -1</span>，故 <span class=\"chem\">x = 20/13 ≈ 1.538</span>，<span class=\"chem\">y = -11/13 ≈ -0.846</span>。<span class=\"chem\">L: \\mathbf{r} = (20/13, -11/13, 0) + t(8, 19, 26)</span>。</p><p>(c) <span class=\"chem\">\\mathbf{n_1} \\cdot \\mathbf{n_2} = 1.5 - 6 - 2.5 = -7</span>，<span class=\"chem\">|\\mathbf{n_1}| = sqrt(7.25)</span>，<span class=\"chem\">|\\mathbf{n_2}| = sqrt(16.25)</span>。<span class=\"chem\">cos theta = 7 / sqrt(7.25 × 16.25) ≈ 0.6449</span>，故 <span class=\"chem\">theta ≈ 49.8°</span>。</p><p>(d) 取 <span class=\"chem\">A(20/13, -11/13, 0)</span>，<span class=\"chem\">d = |\\mathbf{AP} \\times \\mathbf{b}| / |\\mathbf{b}| ≈ 0.653</span>（或在 GDC 上求 <span class=\"chem\">|\\mathbf{AP} - t\\mathbf{b}|</span> 的最小值）。</p>",
      markscheme: [
        // EN: M1: uses <span class="chem">\mathbf{n_1} \times \mathbf{n_2}</span>.
        "M1：使用 <span class=\"chem\">\\mathbf{n_1} \\times \\mathbf{n_2}</span>。",
        // EN: A1: <span class="chem">(2, 4.75, 6.5)</span> or any non-zero multiple.
        "A1：<span class=\"chem\">(2, 4.75, 6.5)</span> 或其任何非零倍數。",
        // EN: M1: solves the two plane equations with <span class="chem">z = 0</span> (GDC acceptable).
        "M1：在 <span class=\"chem\">z = 0</span> 時解兩條平面方程（可用 GDC）。",
        // EN: A1: <span class="chem">(1.54, -0.846, 0)</span> (exactly <span class="chem">(20/13, -11/13, 0)</span>).
        "A1：<span class=\"chem\">(1.54, -0.846, 0)</span>（準確值為 <span class=\"chem\">(20/13, -11/13, 0)</span>）。",
        // EN: A1: a correct vector equation with <span class="chem">\mathbf{r} =</span>.
        "A1：正確的向量方程，須寫出 <span class=\"chem\">\\mathbf{r} =</span>。",
        // EN: M1: uses the normals with <span class="chem">cos theta = |\mathbf{n_1} \cdot \mathbf{n_2}| / (|\mathbf{n_1}||\mathbf{n_2}|)</span>.
        "M1：以法向量使用 <span class=\"chem\">cos theta = |\\mathbf{n_1} \\cdot \\mathbf{n_2}| / (|\\mathbf{n_1}||\\mathbf{n_2}|)</span>。",
        // EN: A1: <span class="chem">theta ≈ 49.8°</span>.
        "A1：<span class=\"chem\">theta ≈ 49.8°</span>。",
        // EN: M1: a valid method for point-to-line distance (vector product formula, or perpendicular foot).
        "M1：使用求點到直線距離的有效方法（向量積公式或垂足）。",
        // EN: A1: <span class="chem">\mathbf{AP} ≈ (1.462, 2.846, 5)</span> and a correct product or foot parameter <span class="chem">t ≈ 0.711</span> (for the direction <span class="chem">(2, 4.75, 6.5)</span>).
        "A1：<span class=\"chem\">\\mathbf{AP} ≈ (1.462, 2.846, 5)</span> 及正確的積或垂足參數 <span class=\"chem\">t ≈ 0.711</span>（就方向 <span class=\"chem\">(2, 4.75, 6.5)</span> 而言）。",
        // EN: A1: distance <span class="chem">≈ 0.653</span>.
        "A1：距離 <span class=\"chem\">≈ 0.653</span>。",
      ],
    },

    // ── t3-3-q048 · numeric · challenge · AHL · AHL 3.12, 3.14 · 6 marks
    "t3-3-q048": {
      // EN: <p>A coastguard radar station is at the origin and can detect ships up to 12.5 km away. At noon a ship is at <span class="chem">(-20, 6)</span> and it sails with constant velocity <span class="chem">(8, -1.5)</span> km per hour, so <span class="chem">t</span> hours after noon its position is <span class="chem">\mathbf{r} = (-20, 6) + t(8, -1.5)</span>. Find the length of time, in hours, for which the ship can be detected by the radar, correct to 3 significant figures.</p>
      stem: "<p>一個海岸防衞隊雷達站位於原點，可偵測 12.5 km 以內的船隻。正午時一艘船位於 <span class=\"chem\">(-20, 6)</span>，並以等速度 <span class=\"chem\">(8, -1.5)</span> km 每小時航行，所以正午後 <span class=\"chem\">t</span> 小時它的位置為 <span class=\"chem\">\\mathbf{r} = (-20, 6) + t(8, -1.5)</span>。求 (Find) 雷達可偵測到該船的時間長度，以小時為單位，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: "can be detected" means the distance from the origin is at most 12.5 km. You need the two times when <span class="chem">|\mathbf{r}(t)| = 12.5</span>, then the gap between them.
        "解碼：「可偵測到」表示與原點的距離至多為 12.5 km。你需要求出 <span class=\"chem\">|\\mathbf{r}(t)| = 12.5</span> 的兩個時間，再求兩者之差。",
        // EN: Write <span class="chem">|\mathbf{r}(t)|^2 = (-20 + 8t)^2 + (6 - 1.5t)^2 = 12.5^2</span>.
        "寫出 <span class=\"chem\">|\\mathbf{r}(t)|^2 = (-20 + 8t)^2 + (6 - 1.5t)^2 = 12.5^2</span>。",
        // EN: Solve the quadratic on your GDC (or intersect the graph of <span class="chem">|\mathbf{r}(t)|</span> with <span class="chem">y = 12.5</span>) and subtract the two roots.
        "用 GDC 解這條二次方程（或求 <span class=\"chem\">|\\mathbf{r}(t)|</span> 的圖像與 <span class=\"chem\">y = 12.5</span> 的交點），再把兩個根相減。",
      ],
      // EN: <p><strong>Decode:</strong> detected while <span class="chem">|\mathbf{r}(t)| &lt;= 12.5</span>, so find when the ship enters and leaves the circle of radius 12.5.</p><p><span class="chem">(-20 + 8t)^2 + (6 - 1.5t)^2 = 156.25 => 66.25t^2 - 338t + 279.75 = 0</span>. GDC: <span class="chem">t ≈ 1.0394</span> and <span class="chem">t ≈ 4.0625</span>. The ship is detectable for <span class="chem">4.0625 - 1.0394 ≈ 3.02</span> hours.</p>
      solution: "<p><strong>解碼：</strong>當 <span class=\"chem\">|\\mathbf{r}(t)| &lt;= 12.5</span> 時可偵測到，所以要求出船駛入及駛離半徑 12.5 的圓的時間。</p><p><span class=\"chem\">(-20 + 8t)^2 + (6 - 1.5t)^2 = 156.25 => 66.25t^2 - 338t + 279.75 = 0</span>。GDC：<span class=\"chem\">t ≈ 1.0394</span> 及 <span class=\"chem\">t ≈ 4.0625</span>。該船可被偵測的時間為 <span class=\"chem\">4.0625 - 1.0394 ≈ 3.02</span> 小時。</p>",
      // EN: hours
      unit: "小時",
    },

    // ── t3-3-q049 · numeric · challenge · AHL · AHL 3.14 · 7 marks
    "t3-3-q049": {
      // EN: <p>Drone A takes off at time <span class="chem">t = 0</span> seconds and flies with position <span class="chem">\mathbf{r_A} = (0, 0, 50) + t(4, 3, 0.5)</span>, in metres. Drone B waits on a platform at <span class="chem">(300, -50, 20)</span> and sets off <strong>20 seconds later</strong>, flying with constant velocity <span class="chem">(-5, 6, 1.5)</span> m s<sup>−1</sup>. Find the minimum distance between the two drones once both are flying, correct to 3 significant figures.</p>
      stem: "<p>無人機 A 在時間 <span class=\"chem\">t = 0</span> 秒起飛，飛行時的位置為 <span class=\"chem\">\\mathbf{r_A} = (0, 0, 50) + t(4, 3, 0.5)</span>（單位為米）。無人機 B 在位於 <span class=\"chem\">(300, -50, 20)</span> 的平台上等候，並於 <strong>20 秒後</strong>出發，以等速度 <span class=\"chem\">(-5, 6, 1.5)</span> m s<sup>−1</sup> 飛行。求 (Find) 兩架無人機都在飛行時兩者之間的最短距離，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: B starts late, so its position is not <span class="chem">(300, -50, 20) + t(-5, 6, 1.5)</span>. For <span class="chem">t &gt;= 20</span> it is <span class="chem">(300, -50, 20) + (t - 20)(-5, 6, 1.5)</span>.
        "解碼：B 較遲出發，所以它的位置不是 <span class=\"chem\">(300, -50, 20) + t(-5, 6, 1.5)</span>。當 <span class=\"chem\">t &gt;= 20</span> 時，它的位置是 <span class=\"chem\">(300, -50, 20) + (t - 20)(-5, 6, 1.5)</span>。",
        // EN: Form <span class="chem">\mathbf{r_A} - \mathbf{r_B}</span> as a function of <span class="chem">t</span> and minimise its magnitude (GDC graph, or set its scalar product with the relative velocity to zero).
        "寫出 <span class=\"chem\">\\mathbf{r_A} - \\mathbf{r_B}</span> 作為 <span class=\"chem\">t</span> 的函數，並使其模最小（用 GDC 圖像，或令它與相對速度的純量積為零）。",
        // EN: Check that the time you find satisfies <span class="chem">t &gt;= 20</span>.
        "檢查你求得的時間是否滿足 <span class=\"chem\">t &gt;= 20</span>。",
      ],
      // EN: <p><strong>Decode:</strong> the late start shifts the time in the equation of B to <span class="chem">t - 20</span>.</p><p>For <span class="chem">t &gt;= 20</span>: <span class="chem">\mathbf{r_B} = (300, -50, 20) + (t - 20)(-5, 6, 1.5) = (400, -170, -10) + t(-5, 6, 1.5)</span>. <span class="chem">\mathbf{r_A} - \mathbf{r_B} = (-400, 170, 60) + t(9, -3, -1)</span>. Setting its scalar product with <span class="chem">(9, -3, -1)</span> to 0: <span class="chem">-3600 - 510 - 60 + 91t = 0 => t ≈ 45.82</span> s, which is after 20 s. The minimum distance is <span class="chem">≈ 37.6</span> m. (Ignoring the delay gives the wrong answer 47.5 m.)</p>
      solution: "<p><strong>解碼：</strong>較遲出發使 B 的方程中的時間變為 <span class=\"chem\">t - 20</span>。</p><p>當 <span class=\"chem\">t &gt;= 20</span> 時：<span class=\"chem\">\\mathbf{r_B} = (300, -50, 20) + (t - 20)(-5, 6, 1.5) = (400, -170, -10) + t(-5, 6, 1.5)</span>。<span class=\"chem\">\\mathbf{r_A} - \\mathbf{r_B} = (-400, 170, 60) + t(9, -3, -1)</span>。令它與 <span class=\"chem\">(9, -3, -1)</span> 的純量積為 0：<span class=\"chem\">-3600 - 510 - 60 + 91t = 0 => t ≈ 45.82</span> s，這是在 20 s 之後。最短距離為 <span class=\"chem\">≈ 37.6</span> m。（忽略延遲會得出錯誤答案 47.5 m。）</p>",
    },

    // ── t3-3-q050 · numeric · challenge · AHL · AHL 3.16, 3.18 · 6 marks
    "t3-3-q050": {
      // EN: <p>A tent is modelled as a tetrahedron with its base <span class="chem">ABC</span> on flat ground (the plane <span class="chem">z = 0</span>) and its top at <span class="chem">D</span>. In metres, <span class="chem">A(0, 0, 0)</span>, <span class="chem">B(6.2, 0, 0)</span>, <span class="chem">C(1.8, 5.1, 0)</span> and <span class="chem">D(2.5, 1.9, 4.3)</span>. Find the angle that the side panel <span class="chem">ABD</span> makes with the ground, in degrees, correct to 3 significant figures.</p>
      stem: "<p>一個帳篷以四面體作模型，其底面 <span class=\"chem\">ABC</span> 位於平坦地面（平面 <span class=\"chem\">z = 0</span>）上，頂點為 <span class=\"chem\">D</span>。以米為單位，<span class=\"chem\">A(0, 0, 0)</span>、<span class=\"chem\">B(6.2, 0, 0)</span>、<span class=\"chem\">C(1.8, 5.1, 0)</span> 及 <span class=\"chem\">D(2.5, 1.9, 4.3)</span>。求 (Find) 側面 <span class=\"chem\">ABD</span> 與地面所成的角，以度為單位，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: the panel <span class="chem">ABD</span> and the ground are two planes. The angle between them is the angle between their normals (taken acute). The point <span class="chem">C</span> is not needed.
        "解碼：側面 <span class=\"chem\">ABD</span> 與地面是兩個平面。它們之間的夾角就是它們法向量之間的夾角（取銳角）。點 <span class=\"chem\">C</span> 是不需要的。",
        // EN: A normal to the panel is <span class="chem">\mathbf{AB} \times \mathbf{AD}</span>; a normal to the ground is <span class="chem">(0, 0, 1)</span>.
        "側面的一個法向量是 <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AD}</span>；地面的一個法向量是 <span class=\"chem\">(0, 0, 1)</span>。",
        // EN: <span class="chem">\mathbf{AB} \times \mathbf{AD} = (0, -26.66, 11.78)</span>.
        "<span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AD} = (0, -26.66, 11.78)</span>.",
      ],
      // EN: <p><strong>Decode:</strong> angle between plane <span class="chem">ABD</span> and plane <span class="chem">z = 0</span>; <span class="chem">C</span> is extra information.</p><p><span class="chem">\mathbf{AB} = (6.2, 0, 0)</span>, <span class="chem">\mathbf{AD} = (2.5, 1.9, 4.3)</span>, <span class="chem">\mathbf{n} = \mathbf{AB} \times \mathbf{AD} = (0, -26.66, 11.78)</span>. <span class="chem">cos theta = 11.78 / sqrt(26.66^2 + 11.78^2) ≈ 0.4042</span>, so <span class="chem">theta ≈ 66.2°</span>. (Check: <span class="chem">AB</span> is along the <span class="chem">x</span>-axis, so <span class="chem">tan theta = 4.3/1.9</span> also works.)</p>
      solution: "<p><strong>解碼：</strong>平面 <span class=\"chem\">ABD</span> 與平面 <span class=\"chem\">z = 0</span> 之間的夾角；<span class=\"chem\">C</span> 是多餘的資料。</p><p><span class=\"chem\">\\mathbf{AB} = (6.2, 0, 0)</span>，<span class=\"chem\">\\mathbf{AD} = (2.5, 1.9, 4.3)</span>，<span class=\"chem\">\\mathbf{n} = \\mathbf{AB} \\times \\mathbf{AD} = (0, -26.66, 11.78)</span>。<span class=\"chem\">cos theta = 11.78 / sqrt(26.66^2 + 11.78^2) ≈ 0.4042</span>，故 <span class=\"chem\">theta ≈ 66.2°</span>。（檢驗：<span class=\"chem\">AB</span> 沿 <span class=\"chem\">x</span> 軸，所以用 <span class=\"chem\">tan theta = 4.3/1.9</span> 也可以。）</p>",
    },

    // ── t3-3-q051 · numeric · challenge · AHL · AHL 3.13, 3.18 · 6 marks
    "t3-3-q051": {
      // EN: <p>A light beam leaves a lamp at <span class="chem">S(1, -2, 0.5)</span>, passes through a small window at <span class="chem">W(3.5, 1, 2.3)</span> and then strikes a sloping glass roof in the plane <span class="chem">2x - y + 4z = 30</span>. In optics, the <em>angle of incidence</em> is the angle between the incoming beam and the normal to the surface. Find the angle of incidence, in degrees, correct to 3 significant figures.</p>
      stem: "<p>一道光束從位於 <span class=\"chem\">S(1, -2, 0.5)</span> 的燈發出，穿過位於 <span class=\"chem\">W(3.5, 1, 2.3)</span> 的小窗，然後照射到位於平面 <span class=\"chem\">2x - y + 4z = 30</span> 上的傾斜玻璃屋頂。在光學中，<em>入射角</em>是入射光束與表面法線之間的夾角。求 (Find) 入射角，以度為單位，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: the angle asked for is between the beam and the <strong>normal</strong>, not between the beam and the plane. So use cosine with the normal; do not use the line-plane sine formula.
        "解碼：所求的角是光束與<strong>法線</strong>之間的夾角，而不是光束與平面之間的夾角。所以應以法向量使用餘弦；不要使用直線與平面夾角的正弦公式。",
        // EN: The beam direction is <span class="chem">\mathbf{SW} = (2.5, 3, 1.8)</span> and the normal is <span class="chem">(2, -1, 4)</span>.
        "光束的方向是 <span class=\"chem\">\\mathbf{SW} = (2.5, 3, 1.8)</span>，法向量是 <span class=\"chem\">(2, -1, 4)</span>。",
        // EN: Take the acute angle: <span class="chem">cos theta = |\mathbf{SW} \cdot \mathbf{n}| / (|\mathbf{SW}||\mathbf{n}|)</span>.
        "取銳角：<span class=\"chem\">cos theta = |\\mathbf{SW} \\cdot \\mathbf{n}| / (|\\mathbf{SW}||\\mathbf{n}|)</span>。",
      ],
      // EN: <p><strong>Decode:</strong> angle between the line and the normal, which is <span class="chem">90°</span> minus the line-plane angle.</p><p><span class="chem">\mathbf{SW} = (2.5, 3, 1.8)</span>, <span class="chem">\mathbf{n} = (2, -1, 4)</span>. <span class="chem">\mathbf{SW} \cdot \mathbf{n} = 5 - 3 + 7.2 = 9.2</span>, <span class="chem">|\mathbf{SW}| = sqrt(18.49) = 4.3</span>, <span class="chem">|\mathbf{n}| = sqrt(21)</span>. <span class="chem">cos theta = 9.2 / (4.3 sqrt(21)) ≈ 0.4669</span>, so <span class="chem">theta ≈ 62.2°</span>. (The beam does reach the roof: it meets the plane at <span class="chem">lambda ≈ 2.61 &gt; 0</span> on <span class="chem">\mathbf{r} = \mathbf{OS} + lambda \mathbf{SW}</span>. The line-plane angle would be <span class="chem">27.8°</span>, the trap answer.)</p>
      solution: "<p><strong>解碼：</strong>直線與法線之間的夾角，等於 <span class=\"chem\">90°</span> 減去直線與平面之間的夾角。</p><p><span class=\"chem\">\\mathbf{SW} = (2.5, 3, 1.8)</span>，<span class=\"chem\">\\mathbf{n} = (2, -1, 4)</span>。<span class=\"chem\">\\mathbf{SW} \\cdot \\mathbf{n} = 5 - 3 + 7.2 = 9.2</span>，<span class=\"chem\">|\\mathbf{SW}| = sqrt(18.49) = 4.3</span>，<span class=\"chem\">|\\mathbf{n}| = sqrt(21)</span>。<span class=\"chem\">cos theta = 9.2 / (4.3 sqrt(21)) ≈ 0.4669</span>，故 <span class=\"chem\">theta ≈ 62.2°</span>。（光束確實會到達屋頂：它在 <span class=\"chem\">\\mathbf{r} = \\mathbf{OS} + lambda \\mathbf{SW}</span> 上的 <span class=\"chem\">lambda ≈ 2.61 &gt; 0</span> 處與平面相交。直線與平面之間的夾角會是 <span class=\"chem\">27.8°</span>，這是陷阱答案。）</p>",
    },

    // ── t3-3-q052 · short · challenge · AHL · AHL 3.12, 3.14, 3.16 · 11 marks
    "t3-3-q052": {
      // EN: <p>A straight railway track follows the line <span class="chem">L: \mathbf{r} = (1, -2, 3) + lambda(2, 1, -2)</span>, in kilometres. A mobile phone mast at <span class="chem">P(4.2, 3.5, -1)</span> has a range of exactly 7 km. Points <span class="chem">Q_1</span> and <span class="chem">Q_2</span> are where the track enters and leaves the range of the mast.</p><p>(a) Show that the values of <span class="chem">lambda</span> at <span class="chem">Q_1</span> and <span class="chem">Q_2</span> satisfy <span class="chem">9lambda^2 - 39.8lambda + 7.49 = 0</span>. <strong>[3 marks]</strong></p><p>(b) Find the coordinates of <span class="chem">Q_1</span> and <span class="chem">Q_2</span>. <strong>[3 marks]</strong></p><p>(c) Find the area of triangle <span class="chem">PQ_1Q_2</span>. <strong>[3 marks]</strong></p><p>(d) Hence, or otherwise, find the shortest distance from the mast to the track. <strong>[2 marks]</strong></p>
      stem: "<p>一條筆直的鐵路沿直線 <span class=\"chem\">L: \\mathbf{r} = (1, -2, 3) + lambda(2, 1, -2)</span>（單位為千米）。位於 <span class=\"chem\">P(4.2, 3.5, -1)</span> 的流動電話天線塔的覆蓋範圍恰好為 7 km。點 <span class=\"chem\">Q_1</span> 和 <span class=\"chem\">Q_2</span> 分別是鐵路進入和離開天線塔覆蓋範圍的位置。</p><p>(a) 證明 (Show that) <span class=\"chem\">Q_1</span> 和 <span class=\"chem\">Q_2</span> 處的 <span class=\"chem\">lambda</span> 值滿足 <span class=\"chem\">9lambda^2 - 39.8lambda + 7.49 = 0</span>。<strong>[3 marks]</strong></p><p>(b) 求 (Find) <span class=\"chem\">Q_1</span> 和 <span class=\"chem\">Q_2</span> 的坐標。<strong>[3 marks]</strong></p><p>(c) 求 (Find) 三角形 <span class=\"chem\">PQ_1Q_2</span> 的面積。<strong>[3 marks]</strong></p><p>(d) 由此或用其他方法 (Hence, or otherwise) 求天線塔到鐵路的最短距離。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: the edge of the range is a sphere of radius 7 about <span class="chem">P</span>. The track crosses it where <span class="chem">|\mathbf{PQ}| = 7</span>.
        "解碼：覆蓋範圍的邊界是以 <span class=\"chem\">P</span> 為中心、半徑為 7 的球面。鐵路在 <span class=\"chem\">|\\mathbf{PQ}| = 7</span> 處穿過它。",
        // EN: Square both sides: <span class="chem">|\mathbf{PQ}|^2 = 49</span> gives a quadratic in <span class="chem">lambda</span>.
        "兩邊平方：<span class=\"chem\">|\\mathbf{PQ}|^2 = 49</span> 得出一條關於 <span class=\"chem\">lambda</span> 的二次方程。",
        // EN: In (d), the perpendicular from <span class="chem">P</span> to <span class="chem">Q_1Q_2</span> is the height of the triangle.
        "在 (d) 部中，從 <span class=\"chem\">P</span> 到 <span class=\"chem\">Q_1Q_2</span> 的垂線就是三角形的高。",
      ],
      // EN: <p><strong>Decode:</strong> "enters and leaves the range" means the points of <span class="chem">L</span> at distance exactly 7 from <span class="chem">P</span>, so solve <span class="chem">|\mathbf{PQ}| = 7</span>, a quadratic in <span class="chem">lambda</span>.</p><p>(a) <span class="chem">\mathbf{PQ} = (-3.2 + 2lambda, -5.5 + lambda, 4 - 2lambda)</span>. <span class="chem">|\mathbf{PQ}|^2 = 9lambda^2 - 39.8lambda + 56.49 = 49</span>, so <span class="chem">9lambda^2 - 39.8lambda + 7.49 = 0</span>.</p><p>(b) GDC: <span class="chem">lambda ≈ 0.19696</span> or <span class="chem">lambda ≈ 4.2253</span>, giving <span class="chem">Q_1 ≈ (1.39, -1.80, 2.61)</span> and <span class="chem">Q_2 ≈ (9.45, 2.23, -5.45)</span>.</p><p>(c) Area <span class="chem">= (1/2)|\mathbf{PQ_1} \times \mathbf{PQ_2}| ≈ 21.4</span> km<sup>2</sup>.</p><p>(d) <span class="chem">|Q_1Q_2| = 3 × (4.2253 - 0.19696) ≈ 12.08</span>. Using area <span class="chem">= (1/2)(base)(height)</span>: height <span class="chem">= 2(21.354)/12.085 ≈ 3.53</span> km.</p>
      answer: "<p><strong>解碼：</strong>「進入和離開覆蓋範圍」指 <span class=\"chem\">L</span> 上與 <span class=\"chem\">P</span> 距離恰好為 7 的點，所以要解 <span class=\"chem\">|\\mathbf{PQ}| = 7</span>，這是一條關於 <span class=\"chem\">lambda</span> 的二次方程。</p><p>(a) <span class=\"chem\">\\mathbf{PQ} = (-3.2 + 2lambda, -5.5 + lambda, 4 - 2lambda)</span>。<span class=\"chem\">|\\mathbf{PQ}|^2 = 9lambda^2 - 39.8lambda + 56.49 = 49</span>，所以 <span class=\"chem\">9lambda^2 - 39.8lambda + 7.49 = 0</span>。</p><p>(b) GDC：<span class=\"chem\">lambda ≈ 0.19696</span> 或 <span class=\"chem\">lambda ≈ 4.2253</span>，得 <span class=\"chem\">Q_1 ≈ (1.39, -1.80, 2.61)</span> 及 <span class=\"chem\">Q_2 ≈ (9.45, 2.23, -5.45)</span>。</p><p>(c) 面積 <span class=\"chem\">= (1/2)|\\mathbf{PQ_1} \\times \\mathbf{PQ_2}| ≈ 21.4</span> km<sup>2</sup>。</p><p>(d) <span class=\"chem\">|Q_1Q_2| = 3 × (4.2253 - 0.19696) ≈ 12.08</span>。利用面積 <span class=\"chem\">= (1/2)(base)(height)</span>：高 <span class=\"chem\">= 2(21.354)/12.085 ≈ 3.53</span> km。</p>",
      markscheme: [
        // EN: M1: writes <span class="chem">\mathbf{PQ}</span> for a general point <span class="chem">Q</span> on <span class="chem">L</span>.
        "M1：就 <span class=\"chem\">L</span> 上的一般點 <span class=\"chem\">Q</span> 寫出 <span class=\"chem\">\\mathbf{PQ}</span>。",
        // EN: M1: sets <span class="chem">|\mathbf{PQ}|^2 = 49</span>.
        "M1：設 <span class=\"chem\">|\\mathbf{PQ}|^2 = 49</span>。",
        // EN: A1: expands correctly to <span class="chem">9lambda^2 - 39.8lambda + 56.49 = 49</span>, giving the given equation (AG).
        "A1：正確展開為 <span class=\"chem\">9lambda^2 - 39.8lambda + 56.49 = 49</span>，得出所給的方程 (AG)。",
        // EN: A1: <span class="chem">lambda ≈ 0.197</span> and <span class="chem">lambda ≈ 4.23</span>.
        "A1：<span class=\"chem\">lambda ≈ 0.197</span> 及 <span class=\"chem\">lambda ≈ 4.23</span>。",
        // EN: A1: <span class="chem">Q_1 ≈ (1.39, -1.80, 2.61)</span>.
        "A1：<span class=\"chem\">Q_1 ≈ (1.39, -1.80, 2.61)</span>。",
        // EN: A1: <span class="chem">Q_2 ≈ (9.45, 2.23, -5.45)</span>.
        "A1：<span class=\"chem\">Q_2 ≈ (9.45, 2.23, -5.45)</span>。",
        // EN: M1: uses <span class="chem">(1/2)|\mathbf{PQ_1} \times \mathbf{PQ_2}|</span> (or <span class="chem">(1/2)ab sin C</span> with <span class="chem">a = b = 7</span>).
        "M1：使用 <span class=\"chem\">(1/2)|\\mathbf{PQ_1} \\times \\mathbf{PQ_2}|</span>（或以 <span class=\"chem\">a = b = 7</span> 使用 <span class=\"chem\">(1/2)ab sin C</span>）。",
        // EN: A1: correct vector product or angle <span class="chem">Q_1PQ_2 ≈ 119.4°</span>.
        "A1：正確的向量積或角 <span class=\"chem\">Q_1PQ_2 ≈ 119.4°</span>。",
        // EN: A1: area <span class="chem">≈ 21.4</span>.
        "A1：面積 <span class=\"chem\">≈ 21.4</span>。",
        // EN: M1: uses height <span class="chem">= 2 × area / |Q_1Q_2|</span> (or the foot of the perpendicular, <span class="chem">lambda = 199/90</span>).
        "M1：使用高 <span class=\"chem\">= 2 × area / |Q_1Q_2|</span>（或垂足，<span class=\"chem\">lambda = 199/90</span>）。",
        // EN: A1: distance <span class="chem">≈ 3.53</span> km.
        "A1：距離 <span class=\"chem\">≈ 3.53</span> km。",
      ],
    },

    // ── t3-3-q053 · numeric · challenge · AHL · AHL 3.16, 3.18 · 6 marks
    "t3-3-q053": {
      // EN: <p>Two walls of a modern building lie in the planes <span class="chem">1.2x + 2y - z = 4</span> and <span class="chem">3x - y + 2.5z = 1</span>. The walls meet along a straight edge. A sloping glass roof lies in the plane <span class="chem">2x + 5y + z = 8</span>. Find the acute angle between the edge and the roof, in degrees, correct to 3 significant figures.</p>
      stem: "<p>一座現代建築物的兩幅牆分別位於平面 <span class=\"chem\">1.2x + 2y - z = 4</span> 及 <span class=\"chem\">3x - y + 2.5z = 1</span> 上。兩幅牆沿一條筆直的棱相交。一個傾斜的玻璃屋頂位於平面 <span class=\"chem\">2x + 5y + z = 8</span> 上。求 (Find) 該棱與屋頂之間的銳角，以度為單位，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: the "edge" is the line of intersection of the two wall planes, so this is a line-plane angle in disguise. You only need the direction of the edge, not a point on it.
        "解碼：「棱」是兩個牆面的交線，所以這其實是直線與平面之間的夾角。你只需要棱的方向，不需要棱上的點。",
        // EN: The direction of the edge is <span class="chem">(1.2, 2, -1) \times (3, -1, 2.5)</span>.
        "棱的方向是 <span class=\"chem\">(1.2, 2, -1) \\times (3, -1, 2.5)</span>。",
        // EN: Then use <span class="chem">sin phi = |\mathbf{b} \cdot \mathbf{n}| / (|\mathbf{b}||\mathbf{n}|)</span> with <span class="chem">\mathbf{n} = (2, 5, 1)</span>.
        "然後以 <span class=\"chem\">\\mathbf{n} = (2, 5, 1)</span> 使用 <span class=\"chem\">sin phi = |\\mathbf{b} \\cdot \\mathbf{n}| / (|\\mathbf{b}||\\mathbf{n}|)</span>。",
      ],
      // EN: <p><strong>Decode:</strong> edge = line of intersection; angle with a plane uses sine.</p><p><span class="chem">\mathbf{b} = (1.2, 2, -1) \times (3, -1, 2.5) = (4, -6, -7.2)</span>. <span class="chem">\mathbf{b} \cdot (2, 5, 1) = 8 - 30 - 7.2 = -29.2</span>, <span class="chem">|\mathbf{b}| = sqrt(103.84)</span>, <span class="chem">|\mathbf{n}| = sqrt(30)</span>. <span class="chem">sin phi = 29.2 / sqrt(103.84 × 30) ≈ 0.5231</span>, so <span class="chem">phi ≈ 31.5°</span>.</p>
      solution: "<p><strong>解碼：</strong>棱＝交線；與平面的夾角使用正弦。</p><p><span class=\"chem\">\\mathbf{b} = (1.2, 2, -1) \\times (3, -1, 2.5) = (4, -6, -7.2)</span>。<span class=\"chem\">\\mathbf{b} \\cdot (2, 5, 1) = 8 - 30 - 7.2 = -29.2</span>，<span class=\"chem\">|\\mathbf{b}| = sqrt(103.84)</span>，<span class=\"chem\">|\\mathbf{n}| = sqrt(30)</span>。<span class=\"chem\">sin phi = 29.2 / sqrt(103.84 × 30) ≈ 0.5231</span>，故 <span class=\"chem\">phi ≈ 31.5°</span>。</p>",
    },

    // ── t3-3-q054 · numeric · challenge · AHL · AHL 3.13 · 6 marks
    "t3-3-q054": {
      // EN: <p>For <span class="chem">t \in \mathbb{R}</span>, let <span class="chem">\mathbf{a} = t\mathbf{i} + \mathbf{j} + 2\mathbf{k}</span> and <span class="chem">\mathbf{b} = 2\mathbf{i} + t\mathbf{j} + \mathbf{k}</span>. There are two values of <span class="chem">t</span> for which the angle between <span class="chem">\mathbf{a}</span> and <span class="chem">\mathbf{b}</span> is exactly <span class="chem">50°</span>. Find the value of <span class="chem">t</span> that is greater than 1, correct to 3 significant figures.</p>
      stem: "<p>對於 <span class=\"chem\">t \\in \\mathbb{R}</span>，設 <span class=\"chem\">\\mathbf{a} = t\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}</span> 及 <span class=\"chem\">\\mathbf{b} = 2\\mathbf{i} + t\\mathbf{j} + \\mathbf{k}</span>。有兩個 <span class=\"chem\">t</span> 值使 <span class=\"chem\">\\mathbf{a}</span> 與 <span class=\"chem\">\\mathbf{b}</span> 之間的夾角恰好為 <span class=\"chem\">50°</span>。求 (Find) 大於 1 的 <span class=\"chem\">t</span> 值，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: the angle is fixed and <span class="chem">t</span> is unknown, so this is an equation to solve: <span class="chem">cos 50° = (\mathbf{a} \cdot \mathbf{b}) / (|\mathbf{a}||\mathbf{b}|)</span>. It rearranges to a quadratic with awkward coefficients, so use your GDC.
        "解碼：角是固定的，而 <span class=\"chem\">t</span> 是未知數，所以這是一條需要求解的方程：<span class=\"chem\">cos 50° = (\\mathbf{a} \\cdot \\mathbf{b}) / (|\\mathbf{a}||\\mathbf{b}|)</span>。它可整理為係數不便的二次方程，所以使用 GDC。",
        // EN: <span class="chem">\mathbf{a} \cdot \mathbf{b} = 3t + 2</span> and <span class="chem">|\mathbf{a}| = |\mathbf{b}| = sqrt(t^2 + 5)</span>.
        "<span class=\"chem\">\\mathbf{a} \\cdot \\mathbf{b} = 3t + 2</span> 及 <span class=\"chem\">|\\mathbf{a}| = |\\mathbf{b}| = sqrt(t^2 + 5)</span>。",
        // EN: Graph <span class="chem">y = (3t + 2)/(t^2 + 5)</span> and <span class="chem">y = cos 50°</span> (degree mode) and find the intersection with <span class="chem">t &gt; 1</span>.
        "繪畫 <span class=\"chem\">y = (3t + 2)/(t^2 + 5)</span> 及 <span class=\"chem\">y = cos 50°</span> 的圖像（度模式），並求 <span class=\"chem\">t &gt; 1</span> 的交點。",
      ],
      // EN: <p><strong>Decode:</strong> unknown <span class="chem">t</span> in the angle formula, solved graphically.</p><p><span class="chem">cos 50° = (3t + 2)/(t^2 + 5)</span>. The GDC gives <span class="chem">t ≈ 0.448</span> or <span class="chem">t ≈ 4.22</span>. The value greater than 1 is <span class="chem">t ≈ 4.22</span>.</p>
      solution: "<p><strong>解碼：</strong>夾角公式中的未知數 <span class=\"chem\">t</span>，用圖像法求解。</p><p><span class=\"chem\">cos 50° = (3t + 2)/(t^2 + 5)</span>。GDC 得 <span class=\"chem\">t ≈ 0.448</span> 或 <span class=\"chem\">t ≈ 4.22</span>。大於 1 的值是 <span class=\"chem\">t ≈ 4.22</span>。</p>",
    },

    // ── t3-3-q055 · short · challenge · AHL · AHL 3.12, 3.14, 3.15 · 11 marks
    "t3-3-q055": {
      // EN: <p>Two aircraft fly in straight lines at constant velocity. With distances in km and <span class="chem">t</span> in minutes after 09:00, their positions are <span class="chem">\mathbf{r_A} = (10, 5, 5) + t(12, 8, 0.4)</span> and <span class="chem">\mathbf{r_B} = (68.8, -10.2, 7.6) + t(-9, 11, -0.5)</span>.</p><p>(a) Show that the flight paths cross, and find the coordinates of the point <span class="chem">X</span> where they cross. <strong>[4 marks]</strong></p><p>(b) Explain why the aircraft do not collide. <strong>[2 marks]</strong></p><p>(c) Find the minimum distance between the aircraft, and the time after 09:00 at which it occurs, in minutes. <strong>[5 marks]</strong></p>
      stem: "<p>兩架飛機以等速度沿直線飛行。距離以 km 為單位，<span class=\"chem\">t</span> 為 09:00 後的分鐘數，它們的位置為 <span class=\"chem\">\\mathbf{r_A} = (10, 5, 5) + t(12, 8, 0.4)</span> 及 <span class=\"chem\">\\mathbf{r_B} = (68.8, -10.2, 7.6) + t(-9, 11, -0.5)</span>。</p><p>(a) 證明 (Show that) 兩條航線相交，並求 (find) 交點 <span class=\"chem\">X</span> 的坐標。<strong>[4 marks]</strong></p><p>(b) 解釋 (Explain) 為甚麼兩架飛機不會相撞。<strong>[2 marks]</strong></p><p>(c) 求 (Find) 兩架飛機之間的最短距離，以及出現該距離的時間（09:00 後的分鐘數）。<strong>[5 marks]</strong></p>",
      hints: [
        // EN: Decode: for the paths, each aircraft may reach the crossing point at a different time, so use two different parameters.
        "解碼：就航線而言，兩架飛機可以在不同時間到達交點，所以要用兩個不同的參數。",
        // EN: For a collision both aircraft must be at the same point for the <em>same</em> value of <span class="chem">t</span>.
        "要相撞，兩架飛機必須在 <span class=\"chem\">t</span> 取<em>同一</em>值時位於同一點。",
        // EN: The distance at time <span class="chem">t</span> is <span class="chem">|\mathbf{r_A}(t) - \mathbf{r_B}(t)|</span>; graph it and find its minimum.
        "在時間 <span class=\"chem\">t</span> 時的距離為 <span class=\"chem\">|\\mathbf{r_A}(t) - \\mathbf{r_B}(t)|</span>；繪畫其圖像並求最小值。",
      ],
      // EN: <p><strong>Decode:</strong> "the paths cross" is about the <em>lines</em> (use two parameters); "collide" is about the <em>same time</em> (one parameter <span class="chem">t</span>).</p><p>(a) With parameters <span class="chem">p</span> for A and <span class="chem">q</span> for B: <span class="chem">10 + 12p = 68.8 - 9q</span> and <span class="chem">5 + 8p = -10.2 + 11q</span>. GDC: <span class="chem">p = 2.5</span>, <span class="chem">q = 3.2</span>. Check <span class="chem">z</span>: <span class="chem">5 + 0.4(2.5) = 6</span> and <span class="chem">7.6 - 0.5(3.2) = 6</span>. The paths cross at <span class="chem">X(40, 25, 6)</span>.</p><p>(b) A is at <span class="chem">X</span> when <span class="chem">t = 2.5</span> but B is at <span class="chem">X</span> when <span class="chem">t = 3.2</span>. They are never at <span class="chem">X</span> at the same time (and two non-parallel lines meet only at <span class="chem">X</span>), so they do not collide.</p><p>(c) <span class="chem">\mathbf{r_A} - \mathbf{r_B} = (-58.8, 15.2, -2.6) + t(21, -3, 0.9)</span>. Its magnitude is least when <span class="chem">t = 1282.74/450.81 ≈ 2.85</span> minutes, and the minimum distance is <span class="chem">≈ 6.73</span> km.</p>
      answer: "<p><strong>解碼：</strong>「航線相交」是關於<em>直線</em>的（用兩個參數）；「相撞」是關於<em>同一時間</em>的（一個參數 <span class=\"chem\">t</span>）。</p><p>(a) A 用參數 <span class=\"chem\">p</span>，B 用參數 <span class=\"chem\">q</span>：<span class=\"chem\">10 + 12p = 68.8 - 9q</span> 及 <span class=\"chem\">5 + 8p = -10.2 + 11q</span>。GDC：<span class=\"chem\">p = 2.5</span>，<span class=\"chem\">q = 3.2</span>。檢驗 <span class=\"chem\">z</span>：<span class=\"chem\">5 + 0.4(2.5) = 6</span> 及 <span class=\"chem\">7.6 - 0.5(3.2) = 6</span>。兩條航線相交於 <span class=\"chem\">X(40, 25, 6)</span>。</p><p>(b) A 在 <span class=\"chem\">t = 2.5</span> 時位於 <span class=\"chem\">X</span>，但 B 在 <span class=\"chem\">t = 3.2</span> 時才位於 <span class=\"chem\">X</span>。它們從不在同一時間位於 <span class=\"chem\">X</span>（而兩條不平行的直線只相交於 <span class=\"chem\">X</span>），所以不會相撞。</p><p>(c) <span class=\"chem\">\\mathbf{r_A} - \\mathbf{r_B} = (-58.8, 15.2, -2.6) + t(21, -3, 0.9)</span>。當 <span class=\"chem\">t = 1282.74/450.81 ≈ 2.85</span> 分鐘時其模最小，最短距離為 <span class=\"chem\">≈ 6.73</span> km。</p>",
      markscheme: [
        // EN: M1: equates the position vectors using two <em>different</em> parameters.
        "M1：用兩個<em>不同的</em>參數令位置向量相等。",
        // EN: A1: <span class="chem">p = 2.5</span>, <span class="chem">q = 3.2</span>.
        "A1：<span class=\"chem\">p = 2.5</span>，<span class=\"chem\">q = 3.2</span>。",
        // EN: R1: checks the third component is consistent.
        "R1：檢驗第三個分量一致。",
        // EN: A1: <span class="chem">X(40, 25, 6)</span>.
        "A1：<span class=\"chem\">X(40, 25, 6)</span>。",
        // EN: A1: identifies the different times 2.5 and 3.2 minutes at which each aircraft is at <span class="chem">X</span>.
        "A1：指出兩架飛機分別在不同時間 2.5 分鐘及 3.2 分鐘位於 <span class=\"chem\">X</span>。",
        // EN: R1: concludes they are not at the same point at the same time, so no collision.
        "R1：得出它們不會在同一時間位於同一點，所以不會相撞。",
        // EN: M1: forms <span class="chem">\mathbf{r_A} - \mathbf{r_B}</span> in terms of the single time <span class="chem">t</span>.
        "M1：以單一時間 <span class=\"chem\">t</span> 寫出 <span class=\"chem\">\\mathbf{r_A} - \\mathbf{r_B}</span>。",
        // EN: A1: <span class="chem">(-58.8, 15.2, -2.6) + t(21, -3, 0.9)</span>.
        "A1：<span class=\"chem\">(-58.8, 15.2, -2.6) + t(21, -3, 0.9)</span>。",
        // EN: M1: minimises the magnitude (GDC graph, or scalar product with <span class="chem">(21, -3, 0.9)</span> set to 0).
        "M1：使其模最小（GDC 圖像，或令它與 <span class=\"chem\">(21, -3, 0.9)</span> 的純量積為 0）。",
        // EN: A1: <span class="chem">t ≈ 2.85</span> minutes.
        "A1：<span class=\"chem\">t ≈ 2.85</span> 分鐘。",
        // EN: A1: minimum distance <span class="chem">≈ 6.73</span> km.
        "A1：最短距離 <span class=\"chem\">≈ 6.73</span> km。",
      ],
    },

    // ── t3-3-q056 · short · challenge · AHL · AHL 3.14, 3.17, 3.18 · 18 marks
    "t3-3-q056": {
      // EN: <p>This investigation finds a quick formula for the distance from a point to a plane. Let <span class="chem">Π</span> be the plane <span class="chem">2x - y + 2z = 9</span>.</p><p>(a) The line through <span class="chem">P(4, 2, 6)</span> perpendicular to <span class="chem">Π</span> is <span class="chem">\mathbf{r} = (4, 2, 6) + s(2, -1, 2)</span>. Find the point <span class="chem">F</span> where it meets <span class="chem">Π</span>, and hence find the distance from <span class="chem">P</span> to <span class="chem">Π</span>. <strong>[3 marks]</strong></p><p>(b) In the same way, find the distance from <span class="chem">Q(1, 4, -3)</span> to <span class="chem">Π</span>. <strong>[2 marks]</strong></p><p>(c) Evaluate <span class="chem">2x_0 - y_0 + 2z_0 - 9</span> at <span class="chem">P</span> and at <span class="chem">Q</span>. Hence suggest a formula for the distance from <span class="chem">(x_0, y_0, z_0)</span> to <span class="chem">Π</span>. <strong>[2 marks]</strong></p><p>(d) Prove that the distance from the point <span class="chem">(x_0, y_0, z_0)</span> to the plane <span class="chem">ax + by + cz = d</span> is <span class="chem">D = |ax_0 + by_0 + cz_0 - d| / sqrt(a^2 + b^2 + c^2)</span>. <strong>[5 marks]</strong></p><p>(e) Find the two values of <span class="chem">k</span> for which the plane <span class="chem">2x - y + 2z = k</span> is at a distance of 4 from <span class="chem">P(4, 2, 6)</span>. <strong>[3 marks]</strong></p><p>(f) Find the distance between the parallel planes <span class="chem">Π</span> and <span class="chem">6x - 3y + 6z = 5</span>. <strong>[3 marks]</strong></p>
      stem: "<p>本探究旨在找出一條求點到平面距離的快捷公式。設 <span class=\"chem\">Π</span> 為平面 <span class=\"chem\">2x - y + 2z = 9</span>。</p><p>(a) 穿過 <span class=\"chem\">P(4, 2, 6)</span> 並垂直於 <span class=\"chem\">Π</span> 的直線為 <span class=\"chem\">\\mathbf{r} = (4, 2, 6) + s(2, -1, 2)</span>。求 (Find) 它與 <span class=\"chem\">Π</span> 的交點 <span class=\"chem\">F</span>，並由此求 (hence find) <span class=\"chem\">P</span> 到 <span class=\"chem\">Π</span> 的距離。<strong>[3 marks]</strong></p><p>(b) 用同樣的方法，求 (find) <span class=\"chem\">Q(1, 4, -3)</span> 到 <span class=\"chem\">Π</span> 的距離。<strong>[2 marks]</strong></p><p>(c) 求 <span class=\"chem\">P</span> 及 <span class=\"chem\">Q</span> 處 <span class=\"chem\">2x_0 - y_0 + 2z_0 - 9</span> 的值。由此提出 (Hence suggest) 一條求 <span class=\"chem\">(x_0, y_0, z_0)</span> 到 <span class=\"chem\">Π</span> 的距離的公式。<strong>[2 marks]</strong></p><p>(d) 證明 (Prove) 點 <span class=\"chem\">(x_0, y_0, z_0)</span> 到平面 <span class=\"chem\">ax + by + cz = d</span> 的距離為 <span class=\"chem\">D = |ax_0 + by_0 + cz_0 - d| / sqrt(a^2 + b^2 + c^2)</span>。<strong>[5 marks]</strong></p><p>(e) 求 (Find) 使平面 <span class=\"chem\">2x - y + 2z = k</span> 與 <span class=\"chem\">P(4, 2, 6)</span> 的距離為 4 的兩個 <span class=\"chem\">k</span> 值。<strong>[3 marks]</strong></p><p>(f) 求 (Find) 平行平面 <span class=\"chem\">Π</span> 與 <span class=\"chem\">6x - 3y + 6z = 5</span> 之間的距離。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: each part builds on the last. Parts (a)–(b) are the slow method; part (c) asks you to spot what the slow method always gives.
        "解碼：每一部分都建基於上一部分。(a)–(b) 部是較慢的方法；(c) 部要求你看出這個慢方法總是得出甚麼。",
        // EN: In (d), repeat exactly the steps of (a) with letters instead of numbers.
        "在 (d) 部中，以字母代替數字，完全重複 (a) 部的步驟。",
        // EN: In (f), the two planes are parallel. Make their normal vectors identical before comparing the constants.
        "在 (f) 部中，兩個平面互相平行。先使它們的法向量相同，再比較常數。",
      ],
      // EN: <p>(a) <span class="chem">2(4 + 2s) - (2 - s) + 2(6 + 2s) = 9 => 18 + 9s = 9 => s = -1</span>, so <span class="chem">F(2, 3, 4)</span>. The distance is <span class="chem">|\mathbf{PF}| = |(-2, 1, -2)| = 3</span>.</p><p>(b) <span class="chem">2(1 + 2s) - (4 - s) + 2(-3 + 2s) = 9 => -8 + 9s = 9 => s = 17/9</span>. The distance is <span class="chem">(17/9) × 3 = 17/3</span>.</p><p>(c) At <span class="chem">P</span>: <span class="chem">18 - 9 = 9</span>; at <span class="chem">Q</span>: <span class="chem">-8 - 9 = -17</span>. The distances are <span class="chem">9/3</span> and <span class="chem">17/3</span>, and <span class="chem">3 = |(2, -1, 2)|</span>. Conjecture: <span class="chem">D = |2x_0 - y_0 + 2z_0 - 9| / 3</span>.</p><p>(d) Let <span class="chem">\mathbf{n} = (a, b, c)</span>. The perpendicular from the point is <span class="chem">(x_0 + sa, y_0 + sb, z_0 + sc)</span>. Substituting: <span class="chem">ax_0 + by_0 + cz_0 + s(a^2 + b^2 + c^2) = d</span>, so <span class="chem">s = (d - ax_0 - by_0 - cz_0)/(a^2 + b^2 + c^2)</span>. The distance is <span class="chem">|s||\mathbf{n}| = |ax_0 + by_0 + cz_0 - d| sqrt(a^2 + b^2 + c^2) / (a^2 + b^2 + c^2) = |ax_0 + by_0 + cz_0 - d| / sqrt(a^2 + b^2 + c^2)</span>.</p><p>(e) <span class="chem">|8 - 2 + 12 - k| / 3 = 4 => |18 - k| = 12 => k = 6</span> or <span class="chem">k = 30</span>.</p><p>(f) The second plane is <span class="chem">2x - y + 2z = 5/3</span>. The point <span class="chem">(0, 0, 4.5)</span> lies on <span class="chem">Π</span>, so the distance is <span class="chem">|9 - 5/3| / 3 = 22/9</span>.</p>
      answer: "<p>(a) <span class=\"chem\">2(4 + 2s) - (2 - s) + 2(6 + 2s) = 9 => 18 + 9s = 9 => s = -1</span>，故 <span class=\"chem\">F(2, 3, 4)</span>。距離為 <span class=\"chem\">|\\mathbf{PF}| = |(-2, 1, -2)| = 3</span>。</p><p>(b) <span class=\"chem\">2(1 + 2s) - (4 - s) + 2(-3 + 2s) = 9 => -8 + 9s = 9 => s = 17/9</span>。距離為 <span class=\"chem\">(17/9) × 3 = 17/3</span>。</p><p>(c) 在 <span class=\"chem\">P</span>：<span class=\"chem\">18 - 9 = 9</span>；在 <span class=\"chem\">Q</span>：<span class=\"chem\">-8 - 9 = -17</span>。距離為 <span class=\"chem\">9/3</span> 及 <span class=\"chem\">17/3</span>，而 <span class=\"chem\">3 = |(2, -1, 2)|</span>。猜想：<span class=\"chem\">D = |2x_0 - y_0 + 2z_0 - 9| / 3</span>。</p><p>(d) 設 <span class=\"chem\">\\mathbf{n} = (a, b, c)</span>。從該點出發的垂線為 <span class=\"chem\">(x_0 + sa, y_0 + sb, z_0 + sc)</span>。代入：<span class=\"chem\">ax_0 + by_0 + cz_0 + s(a^2 + b^2 + c^2) = d</span>，故 <span class=\"chem\">s = (d - ax_0 - by_0 - cz_0)/(a^2 + b^2 + c^2)</span>。距離為 <span class=\"chem\">|s||\\mathbf{n}| = |ax_0 + by_0 + cz_0 - d| sqrt(a^2 + b^2 + c^2) / (a^2 + b^2 + c^2) = |ax_0 + by_0 + cz_0 - d| / sqrt(a^2 + b^2 + c^2)</span>。</p><p>(e) <span class=\"chem\">|8 - 2 + 12 - k| / 3 = 4 => |18 - k| = 12 => k = 6</span> 或 <span class=\"chem\">k = 30</span>。</p><p>(f) 第二個平面為 <span class=\"chem\">2x - y + 2z = 5/3</span>。點 <span class=\"chem\">(0, 0, 4.5)</span> 位於 <span class=\"chem\">Π</span> 上，所以距離為 <span class=\"chem\">|9 - 5/3| / 3 = 22/9</span>。</p>",
      markscheme: [
        // EN: M1: substitutes the parametric form of the line into the equation of <span class="chem">Π</span>.
        "M1：把直線的參數形式代入 <span class=\"chem\">Π</span> 的方程。",
        // EN: A1: <span class="chem">s = -1</span> and <span class="chem">F(2, 3, 4)</span>.
        "A1：<span class=\"chem\">s = -1</span> 及 <span class=\"chem\">F(2, 3, 4)</span>。",
        // EN: A1: distance <span class="chem">= 3</span>.
        "A1：距離 <span class=\"chem\">= 3</span>。",
        // EN: A1: <span class="chem">s = 17/9</span>.
        "A1：<span class=\"chem\">s = 17/9</span>。",
        // EN: A1: distance <span class="chem">= 17/3</span>.
        "A1：距離 <span class=\"chem\">= 17/3</span>。",
        // EN: A1: values <span class="chem">9</span> and <span class="chem">-17</span>.
        "A1：值 <span class=\"chem\">9</span> 及 <span class=\"chem\">-17</span>。",
        // EN: A1: a conjecture equivalent to <span class="chem">D = |2x_0 - y_0 + 2z_0 - 9| / 3</span> (the modulus is needed).
        "A1：與 <span class=\"chem\">D = |2x_0 - y_0 + 2z_0 - 9| / 3</span> 等價的猜想（需要絕對值）。",
        // EN: M1: writes the line through <span class="chem">(x_0, y_0, z_0)</span> with direction <span class="chem">(a, b, c)</span>.
        "M1：寫出穿過 <span class=\"chem\">(x_0, y_0, z_0)</span> 且方向為 <span class=\"chem\">(a, b, c)</span> 的直線。",
        // EN: M1: substitutes it into <span class="chem">ax + by + cz = d</span>.
        "M1：把它代入 <span class=\"chem\">ax + by + cz = d</span>。",
        // EN: A1: <span class="chem">s = (d - ax_0 - by_0 - cz_0)/(a^2 + b^2 + c^2)</span>.
        "A1：<span class=\"chem\">s = (d - ax_0 - by_0 - cz_0)/(a^2 + b^2 + c^2)</span>。",
        // EN: M1: uses distance <span class="chem">= |s| sqrt(a^2 + b^2 + c^2)</span>.
        "M1：使用距離 <span class=\"chem\">= |s| sqrt(a^2 + b^2 + c^2)</span>。",
        // EN: A1: simplifies to the given formula (AG).
        "A1：化簡得所給公式 (AG)。",
        // EN: M1: sets <span class="chem">|18 - k| / 3 = 4</span>.
        "M1：設 <span class=\"chem\">|18 - k| / 3 = 4</span>。",
        // EN: A1: <span class="chem">k = 6</span>.
        "A1：<span class=\"chem\">k = 6</span>。",
        // EN: A1: <span class="chem">k = 30</span>.
        "A1：<span class=\"chem\">k = 30</span>。",
        // EN: M1: writes both planes with the same normal, e.g. <span class="chem">2x - y + 2z = 5/3</span>.
        "M1：以相同的法向量寫出兩個平面，例如 <span class=\"chem\">2x - y + 2z = 5/3</span>。",
        // EN: M1: applies the formula with a point on one plane (or uses <span class="chem">|d_1 - d_2| / |\mathbf{n}|</span>).
        "M1：以其中一個平面上的點應用公式（或使用 <span class=\"chem\">|d_1 - d_2| / |\\mathbf{n}|</span>）。",
        // EN: A1: distance <span class="chem">= 22/9</span>.
        "A1：距離 <span class=\"chem\">= 22/9</span>。",
      ],
    },

    // ── t3-3-q057 · short · challenge · AHL · AHL 3.12–3.14 · 15 marks
    "t3-3-q057": {
      // EN: <p>This investigation looks at the angles between the four space diagonals of a cuboid. A cuboid has one vertex at the origin <span class="chem">O</span> and edges of lengths <span class="chem">a</span>, <span class="chem">b</span>, <span class="chem">c</span> along the positive <span class="chem">x</span>-, <span class="chem">y</span>- and <span class="chem">z</span>-axes. Its four space diagonals have direction vectors <span class="chem">\mathbf{d_1} = (a, b, c)</span>, <span class="chem">\mathbf{d_2} = (-a, b, c)</span>, <span class="chem">\mathbf{d_3} = (a, -b, c)</span> and <span class="chem">\mathbf{d_4} = (a, b, -c)</span>.</p><p>(a) For a cube with <span class="chem">a = b = c = 1</span>, find the acute angle between two space diagonals, in degrees. <strong>[3 marks]</strong></p><p>(b) For the cuboid with <span class="chem">a = 2</span>, <span class="chem">b = 3</span>, <span class="chem">c = 6</span>, find the acute angle between <span class="chem">\mathbf{d_1}</span> and each of <span class="chem">\mathbf{d_2}</span>, <span class="chem">\mathbf{d_3}</span> and <span class="chem">\mathbf{d_4}</span>. <strong>[4 marks]</strong></p><p>(c) Show that, for any cuboid, the acute angle <span class="chem">theta</span> between <span class="chem">\mathbf{d_1}</span> and <span class="chem">\mathbf{d_2}</span> satisfies <span class="chem">cos theta = |b^2 + c^2 - a^2| / (a^2 + b^2 + c^2)</span>. <strong>[3 marks]</strong></p><p>(d) Deduce a condition on <span class="chem">a, b, c</span> for <span class="chem">\mathbf{d_1}</span> and <span class="chem">\mathbf{d_2}</span> to be perpendicular. Hence find <span class="chem">a</span> when <span class="chem">b = 3</span> and <span class="chem">c = 4</span>. <strong>[2 marks]</strong></p><p>(e) The perpendicularity conditions for the pairs <span class="chem">(\mathbf{d_1}, \mathbf{d_2})</span>, <span class="chem">(\mathbf{d_1}, \mathbf{d_3})</span> and <span class="chem">(\mathbf{d_1}, \mathbf{d_4})</span> are found in the same way. Prove that no cuboid satisfies two of these conditions at once. <strong>[3 marks]</strong></p>
      stem: "<p>本探究研究長方體四條空間對角線之間的夾角。一個長方體的一個頂點位於原點 <span class=\"chem\">O</span>，沿正 <span class=\"chem\">x</span> 軸、<span class=\"chem\">y</span> 軸及 <span class=\"chem\">z</span> 軸的棱長分別為 <span class=\"chem\">a</span>、<span class=\"chem\">b</span>、<span class=\"chem\">c</span>。它的四條空間對角線的方向向量為 <span class=\"chem\">\\mathbf{d_1} = (a, b, c)</span>、<span class=\"chem\">\\mathbf{d_2} = (-a, b, c)</span>、<span class=\"chem\">\\mathbf{d_3} = (a, -b, c)</span> 及 <span class=\"chem\">\\mathbf{d_4} = (a, b, -c)</span>。</p><p>(a) 對於 <span class=\"chem\">a = b = c = 1</span> 的立方體，求 (find) 兩條空間對角線之間的銳角，以度為單位。<strong>[3 marks]</strong></p><p>(b) 對於 <span class=\"chem\">a = 2</span>、<span class=\"chem\">b = 3</span>、<span class=\"chem\">c = 6</span> 的長方體，求 (find) <span class=\"chem\">\\mathbf{d_1}</span> 分別與 <span class=\"chem\">\\mathbf{d_2}</span>、<span class=\"chem\">\\mathbf{d_3}</span> 及 <span class=\"chem\">\\mathbf{d_4}</span> 之間的銳角。<strong>[4 marks]</strong></p><p>(c) 證明 (Show that) 對於任何長方體，<span class=\"chem\">\\mathbf{d_1}</span> 與 <span class=\"chem\">\\mathbf{d_2}</span> 之間的銳角 <span class=\"chem\">theta</span> 滿足 <span class=\"chem\">cos theta = |b^2 + c^2 - a^2| / (a^2 + b^2 + c^2)</span>。<strong>[3 marks]</strong></p><p>(d) 推導 (Deduce) <span class=\"chem\">\\mathbf{d_1}</span> 與 <span class=\"chem\">\\mathbf{d_2}</span> 互相垂直時 <span class=\"chem\">a, b, c</span> 須滿足的條件。由此求 (Hence find) 當 <span class=\"chem\">b = 3</span> 及 <span class=\"chem\">c = 4</span> 時的 <span class=\"chem\">a</span>。<strong>[2 marks]</strong></p><p>(e) 用同樣的方法可求得 <span class=\"chem\">(\\mathbf{d_1}, \\mathbf{d_2})</span>、<span class=\"chem\">(\\mathbf{d_1}, \\mathbf{d_3})</span> 及 <span class=\"chem\">(\\mathbf{d_1}, \\mathbf{d_4})</span> 各對互相垂直的條件。證明 (Prove) 沒有長方體能同時滿足其中兩個條件。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: every "angle between diagonals" question here is the angle between two direction vectors, taken acute.
        "解碼：這裏每一道「對角線之間的夾角」問題，都是兩個方向向量之間的夾角，並取銳角。",
        // EN: In (b), all four diagonals have the same length, so only the scalar products change.
        "在 (b) 部中，四條對角線長度相同，所以只有純量積會改變。",
        // EN: In (e), suppose two conditions hold and add them. What happens to the third edge?
        "在 (e) 部中，假設兩個條件成立並把它們相加。第三條棱會怎樣？",
      ],
      // EN: <p>(a) <span class="chem">(1, 1, 1) \cdot (-1, 1, 1) = 1</span> and both magnitudes are <span class="chem">sqrt(3)</span>, so <span class="chem">cos theta = 1/3</span> and <span class="chem">theta ≈ 70.5°</span>.</p><p>(b) <span class="chem">|\mathbf{d_i}| = sqrt(4 + 9 + 36) = 7</span> for every diagonal. <span class="chem">\mathbf{d_1} \cdot \mathbf{d_2} = 41</span>, <span class="chem">\mathbf{d_1} \cdot \mathbf{d_3} = 31</span>, <span class="chem">\mathbf{d_1} \cdot \mathbf{d_4} = -23</span>. Acute angles: <span class="chem">arccos(41/49) ≈ 33.2°</span>, <span class="chem">arccos(31/49) ≈ 50.8°</span>, <span class="chem">arccos(23/49) ≈ 62.0°</span>.</p><p>(c) <span class="chem">\mathbf{d_1} \cdot \mathbf{d_2} = -a^2 + b^2 + c^2</span> and <span class="chem">|\mathbf{d_1}| = |\mathbf{d_2}| = sqrt(a^2 + b^2 + c^2)</span>. For the acute angle take the modulus: <span class="chem">cos theta = |b^2 + c^2 - a^2| / (a^2 + b^2 + c^2)</span>.</p><p>(d) Perpendicular when <span class="chem">a^2 = b^2 + c^2</span>. With <span class="chem">b = 3, c = 4</span>: <span class="chem">a = 5</span>.</p><p>(e) The three conditions are <span class="chem">a^2 = b^2 + c^2</span>, <span class="chem">b^2 = a^2 + c^2</span>, <span class="chem">c^2 = a^2 + b^2</span>. If, say, the first two held, adding gives <span class="chem">a^2 + b^2 = a^2 + b^2 + 2c^2</span>, so <span class="chem">c = 0</span>, which is impossible for a cuboid. The other pairs are the same with the letters swapped. So at most one condition can hold.</p>
      answer: "<p>(a) <span class=\"chem\">(1, 1, 1) \\cdot (-1, 1, 1) = 1</span>，而兩個模都是 <span class=\"chem\">sqrt(3)</span>，故 <span class=\"chem\">cos theta = 1/3</span>，<span class=\"chem\">theta ≈ 70.5°</span>。</p><p>(b) 每條對角線都有 <span class=\"chem\">|\\mathbf{d_i}| = sqrt(4 + 9 + 36) = 7</span>。<span class=\"chem\">\\mathbf{d_1} \\cdot \\mathbf{d_2} = 41</span>，<span class=\"chem\">\\mathbf{d_1} \\cdot \\mathbf{d_3} = 31</span>，<span class=\"chem\">\\mathbf{d_1} \\cdot \\mathbf{d_4} = -23</span>。銳角：<span class=\"chem\">arccos(41/49) ≈ 33.2°</span>，<span class=\"chem\">arccos(31/49) ≈ 50.8°</span>，<span class=\"chem\">arccos(23/49) ≈ 62.0°</span>。</p><p>(c) <span class=\"chem\">\\mathbf{d_1} \\cdot \\mathbf{d_2} = -a^2 + b^2 + c^2</span> 及 <span class=\"chem\">|\\mathbf{d_1}| = |\\mathbf{d_2}| = sqrt(a^2 + b^2 + c^2)</span>。求銳角時取絕對值：<span class=\"chem\">cos theta = |b^2 + c^2 - a^2| / (a^2 + b^2 + c^2)</span>。</p><p>(d) 當 <span class=\"chem\">a^2 = b^2 + c^2</span> 時互相垂直。當 <span class=\"chem\">b = 3, c = 4</span> 時：<span class=\"chem\">a = 5</span>。</p><p>(e) 三個條件為 <span class=\"chem\">a^2 = b^2 + c^2</span>、<span class=\"chem\">b^2 = a^2 + c^2</span>、<span class=\"chem\">c^2 = a^2 + b^2</span>。例如若頭兩個條件成立，相加得 <span class=\"chem\">a^2 + b^2 = a^2 + b^2 + 2c^2</span>，故 <span class=\"chem\">c = 0</span>，這對長方體而言是不可能的。其他各對把字母互換後情況相同。所以至多只有一個條件成立。</p>",
      markscheme: [
        // EN: M1: uses two diagonal directions of the cube, e.g. <span class="chem">(1, 1, 1)</span> and <span class="chem">(-1, 1, 1)</span>.
        "M1：使用立方體的兩個對角線方向，例如 <span class=\"chem\">(1, 1, 1)</span> 及 <span class=\"chem\">(-1, 1, 1)</span>。",
        // EN: A1: <span class="chem">cos theta = 1/3</span>.
        "A1：<span class=\"chem\">cos theta = 1/3</span>。",
        // EN: A1: <span class="chem">theta ≈ 70.5°</span>.
        "A1：<span class=\"chem\">theta ≈ 70.5°</span>。",
        // EN: M1: writes the four directions for <span class="chem">a = 2, b = 3, c = 6</span> and uses the scalar product.
        "M1：寫出 <span class=\"chem\">a = 2, b = 3, c = 6</span> 時的四個方向並使用純量積。",
        // EN: A1: scalar products <span class="chem">41, 31, -23</span> and magnitudes 7.
        "A1：純量積 <span class=\"chem\">41, 31, -23</span>，模為 7。",
        // EN: A1: <span class="chem">33.2°</span> and <span class="chem">50.8°</span>.
        "A1：<span class=\"chem\">33.2°</span> 及 <span class=\"chem\">50.8°</span>。",
        // EN: A1: <span class="chem">62.0°</span> (acute, not <span class="chem">118°</span>).
        "A1：<span class=\"chem\">62.0°</span>（取銳角，不是 <span class=\"chem\">118°</span>）。",
        // EN: M1: <span class="chem">\mathbf{d_1} \cdot \mathbf{d_2} = -a^2 + b^2 + c^2</span>.
        "M1：<span class=\"chem\">\\mathbf{d_1} \\cdot \\mathbf{d_2} = -a^2 + b^2 + c^2</span>。",
        // EN: A1: both magnitudes <span class="chem">sqrt(a^2 + b^2 + c^2)</span>.
        "A1：兩個模都是 <span class=\"chem\">sqrt(a^2 + b^2 + c^2)</span>。",
        // EN: R1: takes the modulus for the acute angle, giving the result (AG).
        "R1：求銳角時取絕對值，得出結果 (AG)。",
        // EN: A1: <span class="chem">a^2 = b^2 + c^2</span>.
        "A1：<span class=\"chem\">a^2 = b^2 + c^2</span>。",
        // EN: A1: <span class="chem">a = 5</span>.
        "A1：<span class=\"chem\">a = 5</span>。",
        // EN: M1: writes the three conditions.
        "M1：寫出三個條件。",
        // EN: M1: assumes two hold and combines them.
        "M1：假設其中兩個成立並把它們結合。",
        // EN: R1: obtains a zero edge length, a contradiction, so at most one holds.
        "R1：得出棱長為零，產生矛盾，所以至多一個成立。",
      ],
    },

    // ── t3-3-q058 · short · challenge · AHL · AHL 3.16–3.18 · 16 marks
    "t3-3-q058": {
      // EN: <p>This investigation finds a "Pythagoras theorem for areas". Let <span class="chem">O</span> be the origin.</p><p>(a) The points <span class="chem">A(2, 0, 0)</span>, <span class="chem">B(0, 3, 0)</span> and <span class="chem">C(0, 0, 6)</span> are given. Find <span class="chem">\mathbf{AB} \times \mathbf{AC}</span> and hence the exact area of triangle <span class="chem">ABC</span>. <strong>[3 marks]</strong></p><p>(b) Find the areas of the right-angled triangles <span class="chem">OAB</span>, <span class="chem">OBC</span> and <span class="chem">OCA</span>. Verify that the sum of their squares equals the square of the area of <span class="chem">ABC</span>. <strong>[3 marks]</strong></p><p>(c) Prove this result for <span class="chem">A(p, 0, 0)</span>, <span class="chem">B(0, q, 0)</span>, <span class="chem">C(0, 0, r)</span>, where <span class="chem">p, q, r &gt; 0</span>. <strong>[4 marks]</strong></p><p>In general, the components of <span class="chem">(1/2)\mathbf{AB} \times \mathbf{AC}</span> are, up to sign, the areas of the projections (shadows) of triangle <span class="chem">ABC</span> onto the coordinate planes <span class="chem">x = 0</span>, <span class="chem">y = 0</span> and <span class="chem">z = 0</span>.</p><p>(d) A triangular sail has corners <span class="chem">P(1, 2, 0.5)</span>, <span class="chem">Q(4, -1, 2.2)</span> and <span class="chem">R(2.5, 3.5, 4)</span>, in metres, with the <span class="chem">z</span>-axis vertical. Find the area of the sail and the area of its shadow on the ground <span class="chem">z = 0</span> when the sun is directly overhead. <strong>[4 marks]</strong></p><p>(e) Hence find the angle between the plane of the sail and the ground. <strong>[2 marks]</strong></p>
      stem: "<p>本探究旨在找出「面積的畢氏定理」。設 <span class=\"chem\">O</span> 為原點。</p><p>(a) 已知點 <span class=\"chem\">A(2, 0, 0)</span>、<span class=\"chem\">B(0, 3, 0)</span> 及 <span class=\"chem\">C(0, 0, 6)</span>。求 (Find) <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC}</span>，並由此求三角形 <span class=\"chem\">ABC</span> 的準確面積。<strong>[3 marks]</strong></p><p>(b) 求 (Find) 直角三角形 <span class=\"chem\">OAB</span>、<span class=\"chem\">OBC</span> 及 <span class=\"chem\">OCA</span> 的面積。驗證 (Verify) 它們的平方和等於 <span class=\"chem\">ABC</span> 面積的平方。<strong>[3 marks]</strong></p><p>(c) 就 <span class=\"chem\">A(p, 0, 0)</span>、<span class=\"chem\">B(0, q, 0)</span>、<span class=\"chem\">C(0, 0, r)</span>（其中 <span class=\"chem\">p, q, r &gt; 0</span>）證明 (Prove) 此結果。<strong>[4 marks]</strong></p><p>一般而言，<span class=\"chem\">(1/2)\\mathbf{AB} \\times \\mathbf{AC}</span> 的各分量（不計正負號）就是三角形 <span class=\"chem\">ABC</span> 在坐標平面 <span class=\"chem\">x = 0</span>、<span class=\"chem\">y = 0</span> 及 <span class=\"chem\">z = 0</span> 上的投影（影子）的面積。</p><p>(d) 一塊三角形帆的頂點為 <span class=\"chem\">P(1, 2, 0.5)</span>、<span class=\"chem\">Q(4, -1, 2.2)</span> 及 <span class=\"chem\">R(2.5, 3.5, 4)</span>（單位為米），<span class=\"chem\">z</span> 軸為鉛垂方向。求 (Find) 帆的面積，以及當太陽在正上方時它在地面 <span class=\"chem\">z = 0</span> 上的影子的面積。<strong>[4 marks]</strong></p><p>(e) 由此求 (Hence find) 帆所在平面與地面之間的夾角。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: the "shadow on the ground" is the projection onto <span class="chem">z = 0</span>; the given fact says its area is half the size of the <span class="chem">z</span>-component of the vector product.
        "解碼：「地面上的影子」就是在 <span class=\"chem\">z = 0</span> 上的投影；題中所給的事實指出它的面積是向量積 <span class=\"chem\">z</span> 分量大小的一半。",
        // EN: In (c), repeat (a) with letters. The right-angled face <span class="chem">OBC</span> has legs <span class="chem">q</span> and <span class="chem">r</span>.
        "在 (c) 部中，以字母重複 (a) 部。直角面 <span class=\"chem\">OBC</span> 的兩條直角邊為 <span class=\"chem\">q</span> 及 <span class=\"chem\">r</span>。",
        // EN: In (e), compare: <span class="chem">cos theta = |\mathbf{n} \cdot \mathbf{k}| / |\mathbf{n}|</span> is the same ratio as shadow area over true area.
        "在 (e) 部中，比較：<span class=\"chem\">cos theta = |\\mathbf{n} \\cdot \\mathbf{k}| / |\\mathbf{n}|</span> 與影子面積除以真實面積是同一個比。",
      ],
      // EN: <p>(a) <span class="chem">\mathbf{AB} = (-2, 3, 0)</span>, <span class="chem">\mathbf{AC} = (-2, 0, 6)</span>, <span class="chem">\mathbf{AB} \times \mathbf{AC} = (18, 12, 6)</span>. <span class="chem">|(18, 12, 6)| = sqrt(504) = 6 sqrt(14)</span>, so the area is <span class="chem">3 sqrt(14)</span>.</p><p>(b) <span class="chem">OAB = (1/2)(2)(3) = 3</span>, <span class="chem">OBC = (1/2)(3)(6) = 9</span>, <span class="chem">OCA = (1/2)(6)(2) = 6</span>. <span class="chem">3^2 + 9^2 + 6^2 = 126 = (3 sqrt(14))^2</span>.</p><p>(c) <span class="chem">\mathbf{AB} = (-p, q, 0)</span>, <span class="chem">\mathbf{AC} = (-p, 0, r)</span>, <span class="chem">\mathbf{AB} \times \mathbf{AC} = (qr, pr, pq)</span>. So <span class="chem">(area ABC)^2 = (1/4)(q^2r^2 + p^2r^2 + p^2q^2) = (qr/2)^2 + (pr/2)^2 + (pq/2)^2</span>, which are the squares of the areas of <span class="chem">OBC</span>, <span class="chem">OCA</span>, <span class="chem">OAB</span>.</p><p>(d) <span class="chem">\mathbf{PQ} = (3, -3, 1.7)</span>, <span class="chem">\mathbf{PR} = (1.5, 1.5, 3.5)</span>, <span class="chem">\mathbf{PQ} \times \mathbf{PR} = (-13.05, -7.95, 9)</span>. Area of sail <span class="chem">= (1/2)|(-13.05, -7.95, 9)| ≈ 8.87</span> m<sup>2</sup>. Shadow on <span class="chem">z = 0</span>: <span class="chem">(1/2)|9| = 4.5</span> m<sup>2</sup>.</p><p>(e) <span class="chem">cos theta = 4.5 / 8.867 ≈ 0.5075</span> (the same as <span class="chem">|\mathbf{n} \cdot \mathbf{k}| / |\mathbf{n}|</span>), so <span class="chem">theta ≈ 59.5°</span>.</p>
      answer: "<p>(a) <span class=\"chem\">\\mathbf{AB} = (-2, 3, 0)</span>，<span class=\"chem\">\\mathbf{AC} = (-2, 0, 6)</span>，<span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC} = (18, 12, 6)</span>。<span class=\"chem\">|(18, 12, 6)| = sqrt(504) = 6 sqrt(14)</span>，故面積為 <span class=\"chem\">3 sqrt(14)</span>。</p><p>(b) <span class=\"chem\">OAB = (1/2)(2)(3) = 3</span>，<span class=\"chem\">OBC = (1/2)(3)(6) = 9</span>，<span class=\"chem\">OCA = (1/2)(6)(2) = 6</span>。<span class=\"chem\">3^2 + 9^2 + 6^2 = 126 = (3 sqrt(14))^2</span>。</p><p>(c) <span class=\"chem\">\\mathbf{AB} = (-p, q, 0)</span>，<span class=\"chem\">\\mathbf{AC} = (-p, 0, r)</span>，<span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC} = (qr, pr, pq)</span>。所以 <span class=\"chem\">(area ABC)^2 = (1/4)(q^2r^2 + p^2r^2 + p^2q^2) = (qr/2)^2 + (pr/2)^2 + (pq/2)^2</span>，它們分別是 <span class=\"chem\">OBC</span>、<span class=\"chem\">OCA</span>、<span class=\"chem\">OAB</span> 面積的平方。</p><p>(d) <span class=\"chem\">\\mathbf{PQ} = (3, -3, 1.7)</span>，<span class=\"chem\">\\mathbf{PR} = (1.5, 1.5, 3.5)</span>，<span class=\"chem\">\\mathbf{PQ} \\times \\mathbf{PR} = (-13.05, -7.95, 9)</span>。帆的面積 <span class=\"chem\">= (1/2)|(-13.05, -7.95, 9)| ≈ 8.87</span> m<sup>2</sup>。在 <span class=\"chem\">z = 0</span> 上的影子：<span class=\"chem\">(1/2)|9| = 4.5</span> m<sup>2</sup>。</p><p>(e) <span class=\"chem\">cos theta = 4.5 / 8.867 ≈ 0.5075</span>（與 <span class=\"chem\">|\\mathbf{n} \\cdot \\mathbf{k}| / |\\mathbf{n}|</span> 相同），故 <span class=\"chem\">theta ≈ 59.5°</span>。</p>",
      markscheme: [
        // EN: M1: forms <span class="chem">\mathbf{AB}</span> and <span class="chem">\mathbf{AC}</span> and their vector product.
        "M1：寫出 <span class=\"chem\">\\mathbf{AB}</span> 及 <span class=\"chem\">\\mathbf{AC}</span> 及其向量積。",
        // EN: A1: <span class="chem">(18, 12, 6)</span>.
        "A1：<span class=\"chem\">(18, 12, 6)</span>。",
        // EN: A1: area <span class="chem">3 sqrt(14)</span>.
        "A1：面積 <span class=\"chem\">3 sqrt(14)</span>。",
        // EN: A1: areas 3, 9 and 6.
        "A1：面積 3、9 及 6。",
        // EN: M1: sum of squares <span class="chem">= 126</span>.
        "M1：平方和 <span class=\"chem\">= 126</span>。",
        // EN: A1: <span class="chem">(3 sqrt(14))^2 = 126</span>, so the result holds.
        "A1：<span class=\"chem\">(3 sqrt(14))^2 = 126</span>，所以結果成立。",
        // EN: M1: <span class="chem">\mathbf{AB} = (-p, q, 0)</span>, <span class="chem">\mathbf{AC} = (-p, 0, r)</span>.
        "M1：<span class=\"chem\">\\mathbf{AB} = (-p, q, 0)</span>，<span class=\"chem\">\\mathbf{AC} = (-p, 0, r)</span>。",
        // EN: A1: <span class="chem">\mathbf{AB} \times \mathbf{AC} = (qr, pr, pq)</span>.
        "A1：<span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC} = (qr, pr, pq)</span>。",
        // EN: M1: area squared <span class="chem">= (1/4)|\mathbf{AB} \times \mathbf{AC}|^2</span>.
        "M1：面積的平方 <span class=\"chem\">= (1/4)|\\mathbf{AB} \\times \\mathbf{AC}|^2</span>。",
        // EN: R1: identifies <span class="chem">qr/2</span>, <span class="chem">pr/2</span>, <span class="chem">pq/2</span> as the areas of the three right-angled faces (AG).
        "R1：指出 <span class=\"chem\">qr/2</span>、<span class=\"chem\">pr/2</span>、<span class=\"chem\">pq/2</span> 是三個直角面的面積 (AG)。",
        // EN: M1: finds <span class="chem">\mathbf{PQ} \times \mathbf{PR}</span>.
        "M1：求 <span class=\"chem\">\\mathbf{PQ} \\times \\mathbf{PR}</span>。",
        // EN: A1: <span class="chem">(-13.05, -7.95, 9)</span>.
        "A1：<span class=\"chem\">(-13.05, -7.95, 9)</span>。",
        // EN: A1: area of sail <span class="chem">≈ 8.87</span> m<sup>2</sup>.
        "A1：帆的面積 <span class=\"chem\">≈ 8.87</span> m<sup>2</sup>。",
        // EN: A1: shadow area <span class="chem">4.5</span> m<sup>2</sup>.
        "A1：影子面積 <span class=\"chem\">4.5</span> m<sup>2</sup>。",
        // EN: M1: <span class="chem">cos theta = </span> shadow area / true area (or uses the normals).
        "M1：<span class=\"chem\">cos theta = </span> 影子面積／真實面積（或使用法向量）。",
        // EN: A1: <span class="chem">theta ≈ 59.5°</span>.
        "A1：<span class=\"chem\">theta ≈ 59.5°</span>。",
      ],
    },

    // ── t3-3-q059 · short · challenge · AHL · AHL 3.13, 3.14, 3.16 · 18 marks
    "t3-3-q059": {
      // EN: <p>This investigation finds a general rule for the closest approach of two objects moving with constant velocities. If their relative position is <span class="chem">\mathbf{d}(t) = \mathbf{d_0} + t\mathbf{w}</span>, where <span class="chem">\mathbf{w} != \mathbf{0}</span> is the relative velocity, then the distance between them is <span class="chem">|\mathbf{d}(t)|</span>.</p><p>(a) Let <span class="chem">\mathbf{d_0} = (6, -3, 2)</span> and <span class="chem">\mathbf{w} = (-2, 1, 1)</span>. Show that <span class="chem">|\mathbf{d}(t)|^2 = 6t^2 - 26t + 49</span>. Hence find the time of closest approach and the exact minimum distance. <strong>[4 marks]</strong></p><p>(b) Show that, at the time found in (a), <span class="chem">\mathbf{d}(t) \cdot \mathbf{w} = 0</span>. <strong>[2 marks]</strong></p><p>(c) Prove that, in general, <span class="chem">|\mathbf{d}(t)|</span> is least when <span class="chem">t = -(\mathbf{d_0} \cdot \mathbf{w}) / |\mathbf{w}|^2</span>. <strong>[3 marks]</strong></p><p>(d) Show that the minimum distance <span class="chem">d_{min}</span> satisfies <span class="chem">d_{min}^2 = |\mathbf{d_0}|^2 - (\mathbf{d_0} \cdot \mathbf{w})^2 / |\mathbf{w}|^2</span>, and verify this for the vectors in (a). <strong>[3 marks]</strong></p><p>(e) For the vectors in (a), verify that <span class="chem">|\mathbf{d_0} \times \mathbf{w}|^2 / |\mathbf{w}|^2</span> gives the same value. <strong>[2 marks]</strong></p><p>(f) Two ships have positions <span class="chem">\mathbf{r_A} = (2.5, -1) + t(14, 6)</span> and <span class="chem">\mathbf{r_B} = (21, 4.5) + t(-6, 9)</span>, in km, <span class="chem">t</span> hours after midnight. Use your results to find the time of closest approach, in minutes after midnight, and the minimum distance between the ships. <strong>[4 marks]</strong></p>
      stem: "<p>本探究旨在找出兩個以等速度移動的物體最接近時的一般規則。若它們的相對位置為 <span class=\"chem\">\\mathbf{d}(t) = \\mathbf{d_0} + t\\mathbf{w}</span>，其中 <span class=\"chem\">\\mathbf{w} != \\mathbf{0}</span> 為相對速度，則兩者之間的距離為 <span class=\"chem\">|\\mathbf{d}(t)|</span>。</p><p>(a) 設 <span class=\"chem\">\\mathbf{d_0} = (6, -3, 2)</span> 及 <span class=\"chem\">\\mathbf{w} = (-2, 1, 1)</span>。證明 (Show that) <span class=\"chem\">|\\mathbf{d}(t)|^2 = 6t^2 - 26t + 49</span>。由此求 (Hence find) 最接近的時間及準確的最短距離。<strong>[4 marks]</strong></p><p>(b) 證明 (Show that) 在 (a) 部所求得的時間，<span class=\"chem\">\\mathbf{d}(t) \\cdot \\mathbf{w} = 0</span>。<strong>[2 marks]</strong></p><p>(c) 證明 (Prove) 一般而言，當 <span class=\"chem\">t = -(\\mathbf{d_0} \\cdot \\mathbf{w}) / |\\mathbf{w}|^2</span> 時 <span class=\"chem\">|\\mathbf{d}(t)|</span> 最小。<strong>[3 marks]</strong></p><p>(d) 證明 (Show that) 最短距離 <span class=\"chem\">d_{min}</span> 滿足 <span class=\"chem\">d_{min}^2 = |\\mathbf{d_0}|^2 - (\\mathbf{d_0} \\cdot \\mathbf{w})^2 / |\\mathbf{w}|^2</span>，並就 (a) 部的向量驗證 (verify) 此式。<strong>[3 marks]</strong></p><p>(e) 就 (a) 部的向量，驗證 (verify) <span class=\"chem\">|\\mathbf{d_0} \\times \\mathbf{w}|^2 / |\\mathbf{w}|^2</span> 得出相同的值。<strong>[2 marks]</strong></p><p>(f) 兩艘船在午夜後 <span class=\"chem\">t</span> 小時的位置為 <span class=\"chem\">\\mathbf{r_A} = (2.5, -1) + t(14, 6)</span> 及 <span class=\"chem\">\\mathbf{r_B} = (21, 4.5) + t(-6, 9)</span>（單位為 km）。利用你的結果求 (find) 最接近的時間（午夜後的分鐘數）及兩船之間的最短距離。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: the two objects are replaced by one point moving with the relative velocity <span class="chem">\mathbf{w}</span>. "Closest approach" means "minimum of <span class="chem">|\mathbf{d}(t)|</span>".
        "解碼：把兩個物體換成一個以相對速度 <span class=\"chem\">\\mathbf{w}</span> 移動的點。「最接近」即「<span class=\"chem\">|\\mathbf{d}(t)|</span> 的最小值」。",
        // EN: A quadratic <span class="chem">At^2 + Bt + C</span> with <span class="chem">A &gt; 0</span> is least at <span class="chem">t = -B/(2A)</span>.
        "當 <span class=\"chem\">A &gt; 0</span> 時，二次式 <span class=\"chem\">At^2 + Bt + C</span> 在 <span class=\"chem\">t = -B/(2A)</span> 處取最小值。",
        // EN: In (f), <span class="chem">\mathbf{d_0}</span> is the difference of the starting positions and <span class="chem">\mathbf{w}</span> is the difference of the velocities.
        "在 (f) 部中，<span class=\"chem\">\\mathbf{d_0}</span> 是兩個起始位置之差，<span class=\"chem\">\\mathbf{w}</span> 是兩個速度之差。",
      ],
      // EN: <p>(a) <span class="chem">\mathbf{d}(t) = (6 - 2t, -3 + t, 2 + t)</span>, so <span class="chem">|\mathbf{d}|^2 = (36 - 24t + 4t^2) + (9 - 6t + t^2) + (4 + 4t + t^2) = 6t^2 - 26t + 49</span>. The minimum is at <span class="chem">t = 26/12 = 13/6</span>, where <span class="chem">|\mathbf{d}|^2 = 49 - 169/6 = 125/6</span>. The minimum distance is <span class="chem">sqrt(125/6) = 5 sqrt(30)/6 ≈ 4.56</span>.</p><p>(b) <span class="chem">\mathbf{d}(13/6) = (5/3, -5/6, 25/6)</span> and <span class="chem">(5/3)(-2) + (-5/6)(1) + (25/6)(1) = -20/6 - 5/6 + 25/6 = 0</span>.</p><p>(c) <span class="chem">f(t) = |\mathbf{d}|^2 = (\mathbf{d_0} + t\mathbf{w}) \cdot (\mathbf{d_0} + t\mathbf{w}) = |\mathbf{d_0}|^2 + 2t(\mathbf{d_0} \cdot \mathbf{w}) + t^2|\mathbf{w}|^2</span>. This quadratic has positive leading coefficient, so its minimum is where <span class="chem">f'(t) = 2(\mathbf{d_0} \cdot \mathbf{w}) + 2t|\mathbf{w}|^2 = 0</span>, i.e. <span class="chem">t = -(\mathbf{d_0} \cdot \mathbf{w}) / |\mathbf{w}|^2</span>. Minimising <span class="chem">|\mathbf{d}|^2</span> also minimises <span class="chem">|\mathbf{d}|</span>.</p><p>(d) Substituting: <span class="chem">d_{min}^2 = |\mathbf{d_0}|^2 - 2(\mathbf{d_0} \cdot \mathbf{w})^2/|\mathbf{w}|^2 + (\mathbf{d_0} \cdot \mathbf{w})^2/|\mathbf{w}|^2 = |\mathbf{d_0}|^2 - (\mathbf{d_0} \cdot \mathbf{w})^2/|\mathbf{w}|^2</span>. In (a): <span class="chem">49 - (-13)^2/6 = 125/6</span>.</p><p>(e) <span class="chem">\mathbf{d_0} \times \mathbf{w} = (6, -3, 2) \times (-2, 1, 1) = (-5, -10, 0)</span>, so <span class="chem">|\mathbf{d_0} \times \mathbf{w}|^2 / |\mathbf{w}|^2 = 125/6</span>.</p><p>(f) <span class="chem">\mathbf{d_0} = (2.5 - 21, -1 - 4.5) = (-18.5, -5.5)</span>, <span class="chem">\mathbf{w} = (14 + 6, 6 - 9) = (20, -3)</span>. <span class="chem">\mathbf{d_0} \cdot \mathbf{w} = -353.5</span>, <span class="chem">|\mathbf{w}|^2 = 409</span>, so <span class="chem">t = 353.5/409 ≈ 0.8643</span> h <span class="chem">≈ 51.9</span> minutes after midnight. <span class="chem">d_{min}^2 = 372.5 - 353.5^2/409 ≈ 66.97</span>, so <span class="chem">d_{min} ≈ 8.18</span> km.</p>
      answer: "<p>(a) <span class=\"chem\">\\mathbf{d}(t) = (6 - 2t, -3 + t, 2 + t)</span>，故 <span class=\"chem\">|\\mathbf{d}|^2 = (36 - 24t + 4t^2) + (9 - 6t + t^2) + (4 + 4t + t^2) = 6t^2 - 26t + 49</span>。最小值出現在 <span class=\"chem\">t = 26/12 = 13/6</span>，此時 <span class=\"chem\">|\\mathbf{d}|^2 = 49 - 169/6 = 125/6</span>。最短距離為 <span class=\"chem\">sqrt(125/6) = 5 sqrt(30)/6 ≈ 4.56</span>。</p><p>(b) <span class=\"chem\">\\mathbf{d}(13/6) = (5/3, -5/6, 25/6)</span> 及 <span class=\"chem\">(5/3)(-2) + (-5/6)(1) + (25/6)(1) = -20/6 - 5/6 + 25/6 = 0</span>。</p><p>(c) <span class=\"chem\">f(t) = |\\mathbf{d}|^2 = (\\mathbf{d_0} + t\\mathbf{w}) \\cdot (\\mathbf{d_0} + t\\mathbf{w}) = |\\mathbf{d_0}|^2 + 2t(\\mathbf{d_0} \\cdot \\mathbf{w}) + t^2|\\mathbf{w}|^2</span>。這條二次式的首項係數為正，所以最小值出現在 <span class=\"chem\">f'(t) = 2(\\mathbf{d_0} \\cdot \\mathbf{w}) + 2t|\\mathbf{w}|^2 = 0</span> 處，即 <span class=\"chem\">t = -(\\mathbf{d_0} \\cdot \\mathbf{w}) / |\\mathbf{w}|^2</span>。使 <span class=\"chem\">|\\mathbf{d}|^2</span> 最小亦使 <span class=\"chem\">|\\mathbf{d}|</span> 最小。</p><p>(d) 代入：<span class=\"chem\">d_{min}^2 = |\\mathbf{d_0}|^2 - 2(\\mathbf{d_0} \\cdot \\mathbf{w})^2/|\\mathbf{w}|^2 + (\\mathbf{d_0} \\cdot \\mathbf{w})^2/|\\mathbf{w}|^2 = |\\mathbf{d_0}|^2 - (\\mathbf{d_0} \\cdot \\mathbf{w})^2/|\\mathbf{w}|^2</span>。在 (a) 部中：<span class=\"chem\">49 - (-13)^2/6 = 125/6</span>。</p><p>(e) <span class=\"chem\">\\mathbf{d_0} \\times \\mathbf{w} = (6, -3, 2) \\times (-2, 1, 1) = (-5, -10, 0)</span>，故 <span class=\"chem\">|\\mathbf{d_0} \\times \\mathbf{w}|^2 / |\\mathbf{w}|^2 = 125/6</span>。</p><p>(f) <span class=\"chem\">\\mathbf{d_0} = (2.5 - 21, -1 - 4.5) = (-18.5, -5.5)</span>，<span class=\"chem\">\\mathbf{w} = (14 + 6, 6 - 9) = (20, -3)</span>。<span class=\"chem\">\\mathbf{d_0} \\cdot \\mathbf{w} = -353.5</span>，<span class=\"chem\">|\\mathbf{w}|^2 = 409</span>，故 <span class=\"chem\">t = 353.5/409 ≈ 0.8643</span> h，即午夜後 <span class=\"chem\">≈ 51.9</span> 分鐘。<span class=\"chem\">d_{min}^2 = 372.5 - 353.5^2/409 ≈ 66.97</span>，故 <span class=\"chem\">d_{min} ≈ 8.18</span> km。</p>",
      markscheme: [
        // EN: A1: expands <span class="chem">|\mathbf{d}(t)|^2</span> correctly to <span class="chem">6t^2 - 26t + 49</span> (AG).
        "A1：正確展開 <span class=\"chem\">|\\mathbf{d}(t)|^2</span> 為 <span class=\"chem\">6t^2 - 26t + 49</span> (AG)。",
        // EN: M1: finds the minimum of the quadratic (vertex, completing the square or derivative).
        "M1：求二次式的最小值（頂點、配方法或導數）。",
        // EN: A1: <span class="chem">t = 13/6</span>.
        "A1：<span class=\"chem\">t = 13/6</span>。",
        // EN: A1: minimum distance <span class="chem">sqrt(125/6)</span> (or <span class="chem">5 sqrt(30)/6</span>).
        "A1：最短距離 <span class=\"chem\">sqrt(125/6)</span>（或 <span class=\"chem\">5 sqrt(30)/6</span>）。",
        // EN: M1: substitutes <span class="chem">t = 13/6</span> to get <span class="chem">\mathbf{d} = (5/3, -5/6, 25/6)</span>.
        "M1：代入 <span class=\"chem\">t = 13/6</span> 得 <span class=\"chem\">\\mathbf{d} = (5/3, -5/6, 25/6)</span>。",
        // EN: A1: scalar product with <span class="chem">\mathbf{w}</span> equals 0.
        "A1：與 <span class=\"chem\">\\mathbf{w}</span> 的純量積等於 0。",
        // EN: M1: expands <span class="chem">|\mathbf{d_0} + t\mathbf{w}|^2</span> using scalar products.
        "M1：利用純量積展開 <span class=\"chem\">|\\mathbf{d_0} + t\\mathbf{w}|^2</span>。",
        // EN: M1: finds the turning point (derivative or vertex of the quadratic).
        "M1：求轉向點（導數或二次式的頂點）。",
        // EN: R1: states it is a minimum (positive coefficient <span class="chem">|\mathbf{w}|^2</span>) and that minimising the square minimises the distance (AG).
        "R1：指出它是最小值（係數 <span class=\"chem\">|\\mathbf{w}|^2</span> 為正），且使平方最小亦使距離最小 (AG)。",
        // EN: M1: substitutes <span class="chem">t</span> into the expression for <span class="chem">|\mathbf{d}|^2</span>.
        "M1：把 <span class=\"chem\">t</span> 代入 <span class=\"chem\">|\\mathbf{d}|^2</span> 的表達式。",
        // EN: A1: simplifies to the given result (AG).
        "A1：化簡得所給結果 (AG)。",
        // EN: A1: <span class="chem">\mathbf{d_0} \cdot \mathbf{w} = -13</span> and <span class="chem">49 - 169/6 = 125/6</span>.
        "A1：<span class=\"chem\">\\mathbf{d_0} \\cdot \\mathbf{w} = -13</span> 及 <span class=\"chem\">49 - 169/6 = 125/6</span>。",
        // EN: A1: <span class="chem">\mathbf{d_0} \times \mathbf{w} = (-5, -10, 0)</span>.
        "A1：<span class=\"chem\">\\mathbf{d_0} \\times \\mathbf{w} = (-5, -10, 0)</span>。",
        // EN: A1: <span class="chem">125/6</span>, the same value.
        "A1：<span class=\"chem\">125/6</span>，與之前的值相同。",
        // EN: M1: forms <span class="chem">\mathbf{d_0} = (-18.5, -5.5)</span> and <span class="chem">\mathbf{w} = (20, -3)</span>.
        "M1：寫出 <span class=\"chem\">\\mathbf{d_0} = (-18.5, -5.5)</span> 及 <span class=\"chem\">\\mathbf{w} = (20, -3)</span>。",
        // EN: M1: applies the formula for <span class="chem">t</span> (or minimises on the GDC).
        "M1：應用 <span class=\"chem\">t</span> 的公式（或在 GDC 上求最小值）。",
        // EN: A1: <span class="chem">t ≈ 0.864</span> h, about 51.9 minutes after midnight.
        "A1：<span class=\"chem\">t ≈ 0.864</span> h，約午夜後 51.9 分鐘。",
        // EN: A1: minimum distance <span class="chem">≈ 8.18</span> km.
        "A1：最短距離 <span class=\"chem\">≈ 8.18</span> km。",
      ],
    },

  }
});
