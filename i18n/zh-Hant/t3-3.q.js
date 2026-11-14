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
        // EN: Find the displacement vector <span class="chem">AB = b - a = (3 - 1, 4 - (-2), 1 - 4)</span>.
        "求位移向量 <span class=\"chem\">AB = b - a = (3 - 1, 4 - (-2), 1 - 4)</span>。",
        // EN: Divide <span class="chem">AB</span> by its magnitude <span class="chem">|AB|</span> to get the unit direction vector, then multiply by <span class="chem">21</span>.
        "將 <span class=\"chem\">AB</span> 除以其模長 <span class=\"chem\">|AB|</span> 得到單位方向向量，再乘以 <span class=\"chem\">21</span>。",
      ],
      // EN: <p><span class="chem">AB = (2, 6, -3)</span> with <span class="chem">|AB| = sqrt(2^2 + 6^2 + (-3)^2) = sqrt(49) = 7</span>. Rescaling to speed 21 gives <span class="chem">v = (21 / 7)(2, 6, -3) = (6, 18, -9)</span>.</p>
      solution: "<p><span class=\"chem\">AB = (2, 6, -3)</span>，其模長 <span class=\"chem\">|AB| = sqrt(2^2 + 6^2 + (-3)^2) = sqrt(49) = 7</span>。縮放至速率 21 得 <span class=\"chem\">v = (21 / 7)(2, 6, -3) = (6, 18, -9)</span>。</p>",
      misconception: {
        // EN (option B): <span class="chem">(2, 6, -3)</span> is the displacement vector <span class="chem">AB</span>, whose magnitude is <span class="chem">sqrt(4 + 36 + 9) = 7</span>, not <span class="chem">21</span>.
        "1": "<span class=\"chem\">(2, 6, -3)</span> 是位移向量 <span class=\"chem\">AB</span>，其模長為 <span class=\"chem\">sqrt(4 + 36 + 9) = 7</span>，而非 <span class=\"chem\">21</span>。",
        // EN (option C): You multiplied <span class="chem">AB</span> by <span class="chem">21</span> without dividing by its magnitude <span class="chem">|AB| = 7</span> first.
        "2": "你把 <span class=\"chem\">AB</span> 直接乘以 <span class=\"chem\">21</span>，而沒有先除以其模長 <span class=\"chem\">|AB| = 7</span>。",
        // EN (option D): That points from <span class="chem">B</span> to <span class="chem">A</span> (<span class="chem">a - b</span>) instead of from <span class="chem">A</span> to <span class="chem">B</span> (<span class="chem">b - a</span>).
        "3": "該向量是由 <span class=\"chem\">B</span> 指向 <span class=\"chem\">A</span>（<span class=\"chem\">a - b</span>），而非由 <span class=\"chem\">A</span> 指向 <span class=\"chem\">B</span>（<span class=\"chem\">b - a</span>）。",
      },
    },

    // ── t3-3-q002 · numeric · foundation · AHL · AHL 3.13 · 2 marks
    "t3-3-q002": {
      // EN: <p>Find the value of <span class="chem">k</span> for which the vectors <span class="chem">u = (k, 2, -3)</span> and <span class="chem">v = (4, k, 2)</span> are perpendicular.</p>
      stem: "<p>求 (Find) 使向量 <span class=\"chem\">u = (k, 2, -3)</span> 與 <span class=\"chem\">v = (4, k, 2)</span> 垂直的 <span class=\"chem\">k</span> 值。</p>",
      hints: [
        // EN: Two non-zero vectors are perpendicular if and only if <span class="chem">u . v = 0</span>.
        "兩個非零向量垂直，當且僅當 <span class=\"chem\">u . v = 0</span>。",
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
      // EN: <p>Select <strong>all</strong> statements that are always true for any 3D vectors <span class="chem">u, v, w</span>.</p>
      stem: "<p>選出<strong>所有</strong>對任意 3D 向量 <span class=\"chem\">u, v, w</span> 皆恒成立的陳述。</p>",
      options: [
        // EN: <span class="chem">u . v = v . u</span>
        "<span class=\"chem\">u . v = v . u</span>",
        // EN: <span class="chem">u x v = -(v x u)</span>
        "<span class=\"chem\">u x v = -(v x u)</span>",
        // EN: <span class="chem">(u x v) . u = 0</span>
        "<span class=\"chem\">(u x v) . u = 0</span>",
        // EN: If <span class="chem">u x v = u x w</span> and <span class="chem">u != 0</span>, then <span class="chem">v = w</span>
        "若 <span class=\"chem\">u x v = u x w</span> 且 <span class=\"chem\">u != 0</span>，則 <span class=\"chem\">v = w</span>",
      ],
      hints: [
        // EN: Check commutativity of dot product, anti-commutativity of cross product, and orthogonality of <span class="chem">u x v</span> to <span class="chem">u</span>.
        "檢查點積的交換律、叉積的反交換律，以及 <span class=\"chem\">u x v</span> 與 <span class=\"chem\">u</span> 的正交性。",
        // EN: For the fourth option, test <span class="chem">u = i, v = j, w = i + j</span>.
        "對於第四個選項，試代入 <span class=\"chem\">u = i, v = j, w = i + j</span>。",
      ],
      // EN: <p>The dot product is commutative (<span class="chem">u . v = v . u</span>), the cross product is anti-commutative (<span class="chem">u x v = -(v x u)</span>), and <span class="chem">u x v</span> is perpendicular to <span class="chem">u</span> so <span class="chem">(u x v) . u = 0</span>. Cancellation fails for cross products.</p>
      solution: "<p>點積滿足交換律（<span class=\"chem\">u . v = v . u</span>），叉積滿足反交換律（<span class=\"chem\">u x v = -(v x u)</span>），且 <span class=\"chem\">u x v</span> 垂直於 <span class=\"chem\">u</span>，故 <span class=\"chem\">(u x v) . u = 0</span>。消去律對叉積不成立。</p>",
      misconception: {
        // EN (option D): Cross product does not satisfy cancellation: <span class="chem">u x (v - w) = 0</span> only implies <span class="chem">v - w</span> is parallel to <span class="chem">u</span>, not necessarily <span class="chem">0</span>.
        "3": "叉積不滿足消去律：<span class=\"chem\">u x (v - w) = 0</span> 只表示 <span class=\"chem\">v - w</span> 平行於 <span class=\"chem\">u</span>，未必為 <span class=\"chem\">0</span>。",
      },
    },

    // ── t3-3-q005 · numeric · foundation · AHL · AHL 3.16 · 4 marks
    "t3-3-q005": {
      // EN: <p>Find the exact area of triangle <span class="chem">ABC</span> with vertices <span class="chem">A(1, 0, 1)</span>, <span class="chem">B(3, 2, 0)</span>, and <span class="chem">C(1, 4, 3)</span>.</p>
      stem: "<p>求 (Find) 頂點為 <span class=\"chem\">A(1, 0, 1)</span>、<span class=\"chem\">B(3, 2, 0)</span> 與 <span class=\"chem\">C(1, 4, 3)</span> 的三角形 <span class=\"chem\">ABC</span> 之準確面積。</p>",
      hints: [
        // EN: Form two vectors from vertex <span class="chem">A</span>: <span class="chem">AB = (2, 2, -1)</span> and <span class="chem">AC = (0, 4, 2)</span>.
        "從頂點 <span class=\"chem\">A</span> 出發構造兩個向量：<span class=\"chem\">AB = (2, 2, -1)</span> 與 <span class=\"chem\">AC = (0, 4, 2)</span>。",
        // EN: Compute <span class="chem">AB x AC</span> and then use <span class="chem">Area = (1/2)|AB x AC|</span>.
        "計算 <span class=\"chem\">AB x AC</span>，再使用 <span class=\"chem\">Area = (1/2)|AB x AC|</span>。",
      ],
      // EN: <p><span class="chem">AB = (2, 2, -1)</span> and <span class="chem">AC = (0, 4, 2)</span>. Then <span class="chem">AB x AC = (4 - (-4), 0 - 4, 8 - 0) = (8, -4, 8)</span>, which has magnitude <span class="chem">sqrt(64 + 16 + 64) = 12</span>. Thus <span class="chem">Area = (1/2)(12) = 6</span>.</p>
      solution: "<p><span class=\"chem\">AB = (2, 2, -1)</span> 及 <span class=\"chem\">AC = (0, 4, 2)</span>。則 <span class=\"chem\">AB x AC = (4 - (-4), 0 - 4, 8 - 0) = (8, -4, 8)</span>，其模長為 <span class=\"chem\">sqrt(64 + 16 + 64) = 12</span>。因此 <span class=\"chem\">Area = (1/2)(12) = 6</span>。</p>",
    },

    // ── t3-3-q006 · mcq · foundation · AHL · AHL 3.17 · 2 marks
    "t3-3-q006": {
      // EN: <p>Find the Cartesian equation of the plane passing through <span class="chem">P(2, -1, 3)</span> with normal vector <span class="chem">n = (4, -2, 1)</span>.</p>
      stem: "<p>求 (Find) 通過點 <span class=\"chem\">P(2, -1, 3)</span> 且法向量為 <span class=\"chem\">n = (4, -2, 1)</span> 的平面之笛卡兒方程。</p>",
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
        // EN: Use <span class="chem">r . n = a . n</span>: <span class="chem">4x - 2y + z = 4(2) - 2(-1) + 1(3)</span>.
        "使用 <span class=\"chem\">r . n = a . n</span>：<span class=\"chem\">4x - 2y + z = 4(2) - 2(-1) + 1(3)</span>。",
      ],
      // EN: <p>Using <span class="chem">r . n = a . n</span>: <span class="chem">4x - 2y + z = 4(2) - 2(-1) + 1(3) = 8 + 2 + 3 = 13</span>.</p>
      solution: "<p>利用 <span class=\"chem\">r . n = a . n</span>：<span class=\"chem\">4x - 2y + z = 4(2) - 2(-1) + 1(3) = 8 + 2 + 3 = 13</span>。</p>",
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
      // EN: <p>Arrange the steps in the correct logical order to prove that two 3D lines <span class="chem">L_1: r = a_1 + lambda b_1</span> and <span class="chem">L_2: r = a_2 + mu b_2</span> are <strong>skew</strong>.</p>
      stem: "<p>按正確的邏輯順序排列以下步驟，以證明兩條 3D 直線 <span class=\"chem\">L_1: r = a_1 + lambda b_1</span> 與 <span class=\"chem\">L_2: r = a_2 + mu b_2</span> 為<strong>異面直線</strong>。</p>",
      options: [
        // EN: Show that the direction vectors <span class="chem">b_1</span> and <span class="chem">b_2</span> are not scalar multiples (<span class="chem">b_1 != k b_2</span>), so the lines are not parallel.
        "證明方向向量 <span class=\"chem\">b_1</span> 與 <span class=\"chem\">b_2</span> 互不為純量倍數（<span class=\"chem\">b_1 != k b_2</span>），故兩直線不平行。",
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
      // EN: <p>To prove two lines are skew, first verify <span class="chem">b_1 != k b_2</span> (not parallel), then equate coordinates with distinct parameters <span class="chem">lambda, mu</span>, solve two equations for <span class="chem">(lambda, mu)</span>, and show the third equation is inconsistent.</p>
      solution: "<p>要證明兩直線為異面直線，先驗證 <span class=\"chem\">b_1 != k b_2</span>（不平行），再用不同參數 <span class=\"chem\">lambda, mu</span> 令坐標相等，解兩條方程求出 <span class=\"chem\">(lambda, mu)</span>，並證明第三條方程不相容。</p>",
    },

    // ── t3-3-q008 · numeric · exam · AHL · AHL 3.13 · 4 marks
    "t3-3-q008": {
      // EN: <p>Vectors <span class="chem">u</span> and <span class="chem">v</span> satisfy <span class="chem">|u| = 5</span>, <span class="chem">|v| = 3</span>, and <span class="chem">|u + v| = 7</span>. Find the angle <span class="chem">theta</span> between <span class="chem">u</span> and <span class="chem">v</span> in <strong>degrees</strong>.</p>
      stem: "<p>向量 <span class=\"chem\">u</span> 與 <span class=\"chem\">v</span> 滿足 <span class=\"chem\">|u| = 5</span>、<span class=\"chem\">|v| = 3</span> 及 <span class=\"chem\">|u + v| = 7</span>。求 (Find) <span class=\"chem\">u</span> 與 <span class=\"chem\">v</span> 之間的夾角 <span class=\"chem\">theta</span>（以<strong>度</strong>為單位）。</p>",
      hints: [
        // EN: Expand <span class="chem">|u + v|^2 = (u + v) . (u + v) = |u|^2 + 2(u . v) + |v|^2</span>.
        "展開 <span class=\"chem\">|u + v|^2 = (u + v) . (u + v) = |u|^2 + 2(u . v) + |v|^2</span>。",
        // EN: Solve <span class="chem">49 = 25 + 2(u . v) + 9</span> for <span class="chem">u . v</span>, then use <span class="chem">cos theta = (u . v) / (|u||v|)</span>.
        "解 <span class=\"chem\">49 = 25 + 2(u . v) + 9</span> 求 <span class=\"chem\">u . v</span>，再使用 <span class=\"chem\">cos theta = (u . v) / (|u||v|)</span>。",
      ],
      // EN: <p><span class="chem">49 = 5^2 + 2(u . v) + 3^2 = 34 + 2(u . v) => u . v = 7.5</span>. Therefore <span class="chem">cos theta = 7.5 / (5 × 3) = 1/2 => theta = 60°</span>.</p>
      solution: "<p><span class=\"chem\">49 = 5^2 + 2(u . v) + 3^2 = 34 + 2(u . v) => u . v = 7.5</span>。因此 <span class=\"chem\">cos theta = 7.5 / (5 × 3) = 1/2 => theta = 60°</span>。</p>",
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
      // EN: <p>Find the shortest distance from the point <span class="chem">P(1, 3, -2)</span> to the line <span class="chem">L: r = (1, 0, 1) + lambda(2, 1, -2)</span>.</p>
      stem: "<p>求 (Find) 點 <span class=\"chem\">P(1, 3, -2)</span> 到直線 <span class=\"chem\">L: r = (1, 0, 1) + lambda(2, 1, -2)</span> 的最短距離。</p>",
      options: [
        // EN: <span class="chem">3</span>
        "<span class=\"chem\">3</span>",
        // EN: <span class="chem">sqrt(19)</span>
        "<span class=\"chem\">sqrt(19)</span>",
        // EN: <span class="chem">9</span>
        "<span class=\"chem\">9</span>",
        // EN: <span class="chem">sqrt(5)</span>
        "<span class=\"chem\">sqrt(5)</span>",
      ],
      hints: [
        // EN: Let <span class="chem">F(1 + 2 lambda, lambda, 1 - 2 lambda)</span> be the foot of the perpendicular from <span class="chem">P</span> to <span class="chem">L</span>.
        "設 <span class=\"chem\">F(1 + 2 lambda, lambda, 1 - 2 lambda)</span> 為從 <span class=\"chem\">P</span> 向 <span class=\"chem\">L</span> 所作垂線的垂足。",
        // EN: Solve <span class="chem">PF . (2, 1, -2) = 0</span> for <span class="chem">lambda</span>, then find <span class="chem">|PF|</span>.
        "解 <span class=\"chem\">PF . (2, 1, -2) = 0</span> 求 <span class=\"chem\">lambda</span>，再求 <span class=\"chem\">|PF|</span>。",
      ],
      // EN: <p><span class="chem">PF = (2 lambda, lambda - 3, 3 - 2 lambda)</span>. Setting <span class="chem">PF . (2, 1, -2) = 0</span> gives <span class="chem">4 lambda + lambda - 3 - 6 + 4 lambda = 9 lambda - 9 = 0 => lambda = 1</span>. Thus <span class="chem">PF = (2, -2, 1)</span> and <span class="chem">|PF| = sqrt(4 + 4 + 1) = 3</span>.</p>
      solution: "<p><span class=\"chem\">PF = (2 lambda, lambda - 3, 3 - 2 lambda)</span>。令 <span class=\"chem\">PF . (2, 1, -2) = 0</span> 得 <span class=\"chem\">4 lambda + lambda - 3 - 6 + 4 lambda = 9 lambda - 9 = 0 => lambda = 1</span>。因此 <span class=\"chem\">PF = (2, -2, 1)</span> 且 <span class=\"chem\">|PF| = sqrt(4 + 4 + 1) = 3</span>。</p>",
      misconception: {
        // EN (option B): <span class="chem">sqrt(19)</span> is the distance from <span class="chem">P</span> to the starting point <span class="chem">A(1, 0, 1)</span>, not the perpendicular distance to the line.
        "1": "<span class=\"chem\">sqrt(19)</span> 是點 <span class=\"chem\">P</span> 到起點 <span class=\"chem\">A(1, 0, 1)</span> 的距離，而非到直線的垂直距離。",
        // EN (option C): Remember to take the square root of <span class="chem">2^2 + (-2)^2 + 1^2 = 9</span>.
        "2": "記得對 <span class=\"chem\">2^2 + (-2)^2 + 1^2 = 9</span> 取平方根。",
        // EN (option D): Check your <span class="chem">PF . b = 0</span> equation: <span class="chem">2(2 lambda) + 1(lambda - 3) - 2(3 - 2 lambda) = 9 lambda - 9 = 0 => lambda = 1</span>.
        "3": "核對你的 <span class=\"chem\">PF . b = 0</span> 方程：<span class=\"chem\">2(2 lambda) + 1(lambda - 3) - 2(3 - 2 lambda) = 9 lambda - 9 = 0 => lambda = 1</span>。",
      },
    },

    // ── t3-3-q011 · numeric · exam · AHL · AHL 3.18 · 4 marks
    "t3-3-q011": {
      // EN: <p>Find the acute angle <span class="chem">phi</span> (in degrees, correct to 3 significant figures) between the line <span class="chem">r = (1, 2, 0) + lambda(2, 1, 2)</span> and the plane <span class="chem">2x + 2y - z = 7</span>.</p>
      stem: "<p>求 (Find) 直線 <span class=\"chem\">r = (1, 2, 0) + lambda(2, 1, 2)</span> 與平面 <span class=\"chem\">2x + 2y - z = 7</span> 之間的銳角 <span class=\"chem\">phi</span>（以度為單位，準確至 3 位有效數字）。</p>",
      hints: [
        // EN: Use the line-plane angle formula <span class="chem">sin phi = |b . n| / (|b||n|)</span> with <span class="chem">b = (2, 1, 2)</span> and <span class="chem">n = (2, 2, -1)</span>.
        "使用線面交角公式 <span class=\"chem\">sin phi = |b . n| / (|b||n|)</span>，其中 <span class=\"chem\">b = (2, 1, 2)</span> 且 <span class=\"chem\">n = (2, 2, -1)</span>。",
        // EN: Compute <span class="chem">sin phi = |4 + 2 - 2| / (3 × 3) = 4 / 9</span>, then take <span class="chem">arcsin(4/9)</span> in degrees.
        "計算 <span class=\"chem\">sin phi = |4 + 2 - 2| / (3 × 3) = 4 / 9</span>，再以度為單位求 <span class=\"chem\">arcsin(4/9)</span>。",
      ],
      // EN: <p>With <span class="chem">b = (2, 1, 2)</span> (<span class="chem">|b| = 3</span>) and <span class="chem">n = (2, 2, -1)</span> (<span class="chem">|n| = 3</span>), <span class="chem">sin phi = |2(2) + 1(2) + 2(-1)| / (3 × 3) = 4/9</span>. Hence <span class="chem">phi = arcsin(4/9) ≈ 26.4°</span>.</p>
      solution: "<p>已知 <span class=\"chem\">b = (2, 1, 2)</span>（<span class=\"chem\">|b| = 3</span>）及 <span class=\"chem\">n = (2, 2, -1)</span>（<span class=\"chem\">|n| = 3</span>），<span class=\"chem\">sin phi = |2(2) + 1(2) + 2(-1)| / (3 × 3) = 4/9</span>。因此 <span class=\"chem\">phi = arcsin(4/9) ≈ 26.4°</span>。</p>",
    },

    // ── t3-3-q012 · numeric · exam · AHL · AHL 3.18 · 3 marks
    "t3-3-q012": {
      // EN: <p>The line <span class="chem">r = (1, 2, -1) + lambda(2, -1, 3)</span> intersects the plane <span class="chem">x + 2y + z = 12</span> at point <span class="chem">Q</span>. Find the <span class="chem">z</span>-coordinate of <span class="chem">Q</span>.</p>
      stem: "<p>直線 <span class=\"chem\">r = (1, 2, -1) + lambda(2, -1, 3)</span> 與平面 <span class=\"chem\">x + 2y + z = 12</span> 相交於點 <span class=\"chem\">Q</span>。求 (Find) <span class=\"chem\">Q</span> 的 <span class=\"chem\">z</span> 坐標。</p>",
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
        // EN: Extract the normal vectors <span class="chem">n_1 = (1, -1, sqrt(2))</span> and <span class="chem">n_2 = (1, 1, sqrt(2))</span>.
        "讀出法向量 <span class=\"chem\">n_1 = (1, -1, sqrt(2))</span> 與 <span class=\"chem\">n_2 = (1, 1, sqrt(2))</span>。",
        // EN: Compute <span class="chem">cos theta = |n_1 . n_2| / (|n_1||n_2|)</span>.
        "計算 <span class=\"chem\">cos theta = |n_1 . n_2| / (|n_1||n_2|)</span>。",
      ],
      // EN: <p><span class="chem">|n_1| = sqrt(1 + 1 + 2) = 2</span>, <span class="chem">|n_2| = 2</span>, and <span class="chem">n_1 . n_2 = 1 - 1 + 2 = 2</span>. Thus <span class="chem">cos theta = 2 / (2 × 2) = 1/2 => theta = 60°</span> (<span class="chem">pi/3</span>).</p>
      solution: "<p><span class=\"chem\">|n_1| = sqrt(1 + 1 + 2) = 2</span>、<span class=\"chem\">|n_2| = 2</span>，且 <span class=\"chem\">n_1 . n_2 = 1 - 1 + 2 = 2</span>。故 <span class=\"chem\">cos theta = 2 / (2 × 2) = 1/2 => theta = 60°</span>（<span class=\"chem\">pi/3</span>）。</p>",
      misconception: {
        // EN (option B): The angle between two planes uses <span class="chem">cos theta = |n_1 . n_2| / (|n_1||n_2|) = 1/2</span>, not <span class="chem">sin theta = 1/2</span>.
        "1": "兩平面的交角使用 <span class=\"chem\">cos theta = |n_1 . n_2| / (|n_1||n_2|) = 1/2</span>，而非 <span class=\"chem\">sin theta = 1/2</span>。",
        // EN (option C): Check <span class="chem">|n_1| = sqrt(1 + 1 + 2) = 2</span> and <span class="chem">n_1 . n_2 = 1 - 1 + 2 = 2</span>, giving <span class="chem">cos theta = 2 / 4 = 1/2</span>.
        "2": "核對 <span class=\"chem\">|n_1| = sqrt(1 + 1 + 2) = 2</span> 及 <span class=\"chem\">n_1 . n_2 = 1 - 1 + 2 = 2</span>，得出 <span class=\"chem\">cos theta = 2 / 4 = 1/2</span>。",
        // EN (option D): The question asks for the <em>acute</em> angle between the planes.
        "3": "題目要求的是兩平面之間的<em>銳</em>角。",
      },
    },

    // ── t3-3-q014 · short · exam · AHL · AHL 3.16–3.18 · 7 marks
    "t3-3-q014": {
      // EN: <p>The points <span class="chem">A(1, 1, 0)</span>, <span class="chem">B(2, 0, 2)</span>, and <span class="chem">C(0, 2, 1)</span> lie on a plane <span class="chem">Pi</span>.</p><p>(a) Find <span class="chem">AB x AC</span> and hence show that the Cartesian equation of <span class="chem">Pi</span> is <span class="chem">x + y = 2</span>. <strong>[4 marks]</strong></p><p>(b) Find the coordinates of the point <span class="chem">F</span> on <span class="chem">Pi</span> that is closest to <span class="chem">P(3, 5, 2)</span>. <strong>[3 marks]</strong></p>
      stem: "<p>點 <span class=\"chem\">A(1, 1, 0)</span>、<span class=\"chem\">B(2, 0, 2)</span> 與 <span class=\"chem\">C(0, 2, 1)</span> 位於平面 <span class=\"chem\">Pi</span> 上。</p><p>(a) 求 (Find) <span class=\"chem\">AB x AC</span>，並由此證明 (hence show that) <span class=\"chem\">Pi</span> 的笛卡兒方程為 <span class=\"chem\">x + y = 2</span>。<strong>[4 marks]</strong></p><p>(b) 求 (Find) <span class=\"chem\">Pi</span> 上最接近 <span class=\"chem\">P(3, 5, 2)</span> 的點 <span class=\"chem\">F</span> 之坐標。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: For part (b), the closest point <span class="chem">F</span> lies where the line through <span class="chem">P</span> with direction <span class="chem">n = (1, 1, 0)</span> meets the plane <span class="chem">Pi</span>.
        "對於 (b) 部，最接近點 <span class=\"chem\">F</span> 位於通過 <span class=\"chem\">P</span>、方向為 <span class=\"chem\">n = (1, 1, 0)</span> 的直線與平面 <span class=\"chem\">Pi</span> 的交點處。",
      ],
      // EN: <p>(a) <span class="chem">AB = (1, -1, 2)</span> and <span class="chem">AC = (-1, 1, 1)</span>. Their cross product is <span class="chem">AB x AC = (-3, -3, 0)</span>, so <span class="chem">n = (1, 1, 0)</span> is a normal vector. Using <span class="chem">A(1, 1, 0)</span>: <span class="chem">1(x) + 1(y) + 0(z) = 1 + 1 = 2 => x + y = 2</span>.</p><p>(b) The line through <span class="chem">P</span> perpendicular to <span class="chem">Pi</span> is <span class="chem">r = (3, 5, 2) + t(1, 1, 0)</span>. Substituting into <span class="chem">x + y = 2</span> gives <span class="chem">(3 + t) + (5 + t) = 2 => 2t = -6 => t = -3</span>. Thus <span class="chem">F = (0, 2, 2)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">AB = (1, -1, 2)</span> 及 <span class=\"chem\">AC = (-1, 1, 1)</span>。其叉積為 <span class=\"chem\">AB x AC = (-3, -3, 0)</span>，故 <span class=\"chem\">n = (1, 1, 0)</span> 為法向量。代入 <span class=\"chem\">A(1, 1, 0)</span>：<span class=\"chem\">1(x) + 1(y) + 0(z) = 1 + 1 = 2 => x + y = 2</span>。</p><p>(b) 通過 <span class=\"chem\">P</span> 且垂直於 <span class=\"chem\">Pi</span> 的直線為 <span class=\"chem\">r = (3, 5, 2) + t(1, 1, 0)</span>。代入 <span class=\"chem\">x + y = 2</span> 得 <span class=\"chem\">(3 + t) + (5 + t) = 2 => 2t = -6 => t = -3</span>。故 <span class=\"chem\">F = (0, 2, 2)</span>。</p>",
      markscheme: [
        // EN: A1: finds <span class="chem">AB = (1, -1, 2)</span> and <span class="chem">AC = (-1, 1, 1)</span>.
        "A1：求得 <span class=\"chem\">AB = (1, -1, 2)</span> 與 <span class=\"chem\">AC = (-1, 1, 1)</span>。",
        // EN: M1 A1: computes cross product <span class="chem">AB x AC = (-3, -3, 0)</span> (or any non-zero multiple).
        "M1 A1：計算叉積 <span class=\"chem\">AB x AC = (-3, -3, 0)</span>（或任意非零倍數）。",
        // EN: A1: substitutes point <span class="chem">A</span> (or <span class="chem">B, C</span>) into <span class="chem">x + y = d</span> to obtain <span class="chem">x + y = 2</span> (AG).
        "A1：將點 <span class=\"chem\">A</span>（或 <span class=\"chem\">B, C</span>）代入 <span class=\"chem\">x + y = d</span> 得 <span class=\"chem\">x + y = 2</span> (AG)。",
        // EN: M1: writes normal line through <span class="chem">P</span> as <span class="chem">r = (3, 5, 2) + t(1, 1, 0)</span>.
        "M1：寫出通過 <span class=\"chem\">P</span> 的法線方程 <span class=\"chem\">r = (3, 5, 2) + t(1, 1, 0)</span>。",
        // EN: M1: substitutes into <span class="chem">x + y = 2</span> to find <span class="chem">t = -3</span>.
        "M1：代入 <span class=\"chem\">x + y = 2</span> 求得 <span class=\"chem\">t = -3</span>。",
        // EN: A1: states <span class="chem">F(0, 2, 2)</span>.
        "A1：寫出 <span class=\"chem\">F(0, 2, 2)</span>。",
      ],
    },

    // ── t3-3-q015 · numeric · challenge · AHL · AHL 3.18 · 5 marks
    "t3-3-q015": {
      // EN: <p>The planes <span class="chem">Pi_1: x + y + z = 6</span> and <span class="chem">Pi_2: 2x - y + z = 3</span> intersect in a line <span class="chem">L</span>. Find the exact distance from the origin <span class="chem">O(0, 0, 0)</span> to the point where <span class="chem">L</span> crosses the <span class="chem">xy</span>-plane (<span class="chem">z = 0</span>). Give your answer to 3 s.f. or as <span class="mono">3*sqrt(2)</span>.</p>
      stem: "<p>平面 <span class=\"chem\">Pi_1: x + y + z = 6</span> 與 <span class=\"chem\">Pi_2: 2x - y + z = 3</span> 相交於直線 <span class=\"chem\">L</span>。求 (Find) 原點 <span class=\"chem\">O(0, 0, 0)</span> 到 <span class=\"chem\">L</span> 穿過 <span class=\"chem\">xy</span> 平面（<span class=\"chem\">z = 0</span>）之點的準確距離。答案準確至 3 位有效數字，或寫成 <span class=\"mono\">3*sqrt(2)</span>。</p>",
      hints: [
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
        // EN: The line through <span class="chem">P</span> perpendicular to the plane is <span class="chem">r = (4, -1, 3) + t(1, -2, 2)</span>.
        "通過 <span class=\"chem\">P</span> 且垂直於該平面的直線為 <span class=\"chem\">r = (4, -1, 3) + t(1, -2, 2)</span>。",
        // EN: Find <span class="chem">t</span> at the foot <span class="chem">F</span> on the plane; then <span class="chem">PP' = 2 PF</span>, so <span class="chem">|PP'| = 2|t||(1, -2, 2)|</span>.
        "求平面上垂足 <span class=\"chem\">F</span> 處的 <span class=\"chem\">t</span>；則 <span class=\"chem\">PP' = 2 PF</span>，故 <span class=\"chem\">|PP'| = 2|t||(1, -2, 2)|</span>。",
      ],
      // EN: <p>Substituting <span class="chem">(4 + t, -1 - 2t, 3 + 2t)</span> into <span class="chem">x - 2y + 2z = 3</span> gives <span class="chem">(4 + t) - 2(-1 - 2t) + 2(3 + 2t) = 3 => 12 + 9t = 3 => t = -1</span>. Thus <span class="chem">PF = (-1, 2, -2)</span> has length <span class="chem">3</span>, and the distance <span class="chem">|PP'| = 2 × 3 = 6</span>.</p>
      solution: "<p>將 <span class=\"chem\">(4 + t, -1 - 2t, 3 + 2t)</span> 代入 <span class=\"chem\">x - 2y + 2z = 3</span> 得 <span class=\"chem\">(4 + t) - 2(-1 - 2t) + 2(3 + 2t) = 3 => 12 + 9t = 3 => t = -1</span>。因此 <span class=\"chem\">PF = (-1, 2, -2)</span> 的長度為 <span class=\"chem\">3</span>，而距離 <span class=\"chem\">|PP'| = 2 × 3 = 6</span>。</p>",
    },

    // ── t3-3-q017 · mcq · challenge · AHL · AHL 3.18 · 5 marks
    "t3-3-q017": {
      // EN: <p>The system of three planes <span class="chem">x + y + z = 3</span>, <span class="chem">2x - y + z = 2</span>, and <span class="chem">x + 4y + k z = m</span> has infinitely many solutions (the planes meet along a common line). Find the values of <span class="chem">k</span> and <span class="chem">m</span>.</p>
      stem: "<p>三個平面所組成的方程組 <span class=\"chem\">x + y + z = 3</span>、<span class=\"chem\">2x - y + z = 2</span> 與 <span class=\"chem\">x + 4y + k z = m</span> 有無窮多解（三個平面交於同一條直線）。求 (Find) <span class=\"chem\">k</span> 與 <span class=\"chem\">m</span> 的值。</p>",
      options: [
        // EN: <span class="chem">k = 2, m = 7</span>
        "<span class=\"chem\">k = 2, m = 7</span>",
        // EN: <span class=\"chem">k = 2, m = 5</span>
        "<span class=\"chem\">k = 2, m = 5</span>",
        // EN: <span class="chem">k = 1, m = 7</span>
        "<span class=\"chem\">k = 1, m = 7</span>",
        // EN: <span class="chem">k = -2, m = 7</span>
        "<span class=\"chem\">k = -2, m = 7</span>",
      ],
      hints: [
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
      // EN: <p>Consider the two lines <span class="chem">L_1: r = (1, 0, 2) + lambda(1, -1, 1)</span> and <span class="chem">L_2: r = (0, 3, 1) + mu(2, 1, -1)</span>.</p><p>(a) Show that <span class="chem">L_1</span> and <span class="chem">L_2</span> are skew. <strong>[3 marks]</strong></p><p>(b) Find a unit vector <span class="chem">n_hat</span> perpendicular to both <span class="chem">L_1</span> and <span class="chem">L_2</span>, and hence find the exact shortest distance between <span class="chem">L_1</span> and <span class="chem">L_2</span>. <strong>[5 marks]</strong></p>
      stem: "<p>考慮兩條直線 <span class=\"chem\">L_1: r = (1, 0, 2) + lambda(1, -1, 1)</span> 與 <span class=\"chem\">L_2: r = (0, 3, 1) + mu(2, 1, -1)</span>。</p><p>(a) 證明 (Show that) <span class=\"chem\">L_1</span> 與 <span class=\"chem\">L_2</span> 為異面直線。<strong>[3 marks]</strong></p><p>(b) 求 (Find) 同時垂直於 <span class=\"chem\">L_1</span> 與 <span class=\"chem\">L_2</span> 的單位向量 <span class=\"chem\">n_hat</span>，並由此求 (hence find) <span class=\"chem\">L_1</span> 與 <span class=\"chem\">L_2</span> 之間的準確最短距離。<strong>[5 marks]</strong></p>",
      hints: [
        // EN: In part (b), the shortest segment between two skew lines is perpendicular to both lines, so it is parallel to <span class="chem">b_1 x b_2</span>.
        "在 (b) 部中，兩條異面直線之間的最短線段同時垂直於兩條直線，故它平行於 <span class=\"chem\">b_1 x b_2</span>。",
        // EN: Projecting any connecting vector <span class="chem">A_1 A_2</span> onto the unit common normal <span class="chem">n_hat</span> gives the shortest distance <span class="chem">|A_1 A_2 . n_hat|</span>.
        "把任意連接向量 <span class=\"chem\">A_1 A_2</span> 投影到單位公法向量 <span class=\"chem\">n_hat</span> 上，即得最短距離 <span class=\"chem\">|A_1 A_2 . n_hat|</span>。",
      ],
      // EN: <p>(a) Direction vectors <span class="chem">(1, -1, 1)</span> and <span class="chem">(2, 1, -1)</span> are not scalar multiples (not parallel). Equating <span class="chem">x</span> and <span class="chem">y</span>: <span class="chem">1 + lambda = 2 mu</span> and <span class="chem">-lambda = 3 + mu</span>. Adding gives <span class="chem">1 = 3 + 3 mu => mu = -2/3, lambda = -7/3</span>. Checking <span class="chem">z</span>: <span class="chem">2 + (-7/3) = -1/3 != 1 - (-2/3) = 5/3</span>. Thus <span class="chem">L_1</span> and <span class="chem">L_2</span> are skew.</p><p>(b) <span class="chem">(1, -1, 1) x (2, 1, -1) = (0, 3, 3)</span>, so <span class="chem">n_hat = (0, 1/sqrt(2), 1/sqrt(2))</span>. Taking <span class="chem">A_1(1, 0, 2)</span> on <span class="chem">L_1</span> and <span class="chem">A_2(0, 3, 1)</span> on <span class="chem">L_2</span>, <span class="chem">A_1 A_2 = (-1, 3, -1)</span>. The shortest distance is <span class="chem">|A_1 A_2 . n_hat| = |0 + 3 - 1| / sqrt(2) = 2 / sqrt(2) = sqrt(2)</span>.</p>
      answer: "<p>(a) 方向向量 <span class=\"chem\">(1, -1, 1)</span> 與 <span class=\"chem\">(2, 1, -1)</span> 互不為純量倍數（不平行）。令 <span class=\"chem\">x</span> 與 <span class=\"chem\">y</span> 相等：<span class=\"chem\">1 + lambda = 2 mu</span> 及 <span class=\"chem\">-lambda = 3 + mu</span>。兩式相加得 <span class=\"chem\">1 = 3 + 3 mu => mu = -2/3, lambda = -7/3</span>。檢驗 <span class=\"chem\">z</span>：<span class=\"chem\">2 + (-7/3) = -1/3 != 1 - (-2/3) = 5/3</span>。因此 <span class=\"chem\">L_1</span> 與 <span class=\"chem\">L_2</span> 為異面直線。</p><p>(b) <span class=\"chem\">(1, -1, 1) x (2, 1, -1) = (0, 3, 3)</span>，故 <span class=\"chem\">n_hat = (0, 1/sqrt(2), 1/sqrt(2))</span>。取 <span class=\"chem\">L_1</span> 上的點 <span class=\"chem\">A_1(1, 0, 2)</span> 及 <span class=\"chem\">L_2</span> 上的點 <span class=\"chem\">A_2(0, 3, 1)</span>，<span class=\"chem\">A_1 A_2 = (-1, 3, -1)</span>。最短距離為 <span class=\"chem\">|A_1 A_2 . n_hat| = |0 + 3 - 1| / sqrt(2) = 2 / sqrt(2) = sqrt(2)</span>。</p>",
      markscheme: [
        // EN: R1: notes direction vectors <span class="chem">(1, -1, 1)</span> and <span class="chem">(2, 1, -1)</span> are not scalar multiples.
        "R1：指出方向向量 <span class=\"chem\">(1, -1, 1)</span> 與 <span class=\"chem\">(2, 1, -1)</span> 互不為純量倍數。",
        // EN: M1: equates <span class="chem">x, y</span> coordinates and solves for <span class="chem">lambda = -7/3, mu = -2/3</span>.
        "M1：令 <span class=\"chem\">x, y</span> 坐標相等並解得 <span class=\"chem\">lambda = -7/3, mu = -2/3</span>。",
        // EN: A1: shows <span class="chem">z</span>-coordinates disagree (<span class="chem">-1/3 != 5/3</span>) to conclude lines are skew.
        "A1：證明 <span class=\"chem\">z</span> 坐標不相等（<span class=\"chem\">-1/3 != 5/3</span>），從而得出兩直線為異面直線。",
        // EN: M1 A1: computes <span class="chem">b_1 x b_2 = (0, 3, 3)</span> and normalizes to <span class="chem">n_hat = (0, 1/sqrt(2), 1/sqrt(2))</span>.
        "M1 A1：計算 <span class=\"chem\">b_1 x b_2 = (0, 3, 3)</span> 並單位化為 <span class=\"chem\">n_hat = (0, 1/sqrt(2), 1/sqrt(2))</span>。",
        // EN: M1: forms <span class="chem">A_1 A_2 = (-1, 3, -1)</span> and projects onto <span class="chem">n_hat</span> via <span class="chem">|A_1 A_2 . n_hat|</span>.
        "M1：寫出 <span class=\"chem\">A_1 A_2 = (-1, 3, -1)</span> 並透過 <span class=\"chem\">|A_1 A_2 . n_hat|</span> 投影至 <span class=\"chem\">n_hat</span>。",
        // EN: A1 A1: evaluates <span class="chem">|2 / sqrt(2)| = sqrt(2)</span>.
        "A1 A1：計算出 <span class=\"chem\">|2 / sqrt(2)| = sqrt(2)</span>。",
      ],
    },

  }
});
