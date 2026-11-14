/* t3-3.q — ko question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't3-3.q', {
  questions: {

    // ── t3-3-q001 · mcq · foundation · AHL · AHL 3.12 · 3 marks
    "t3-3-q001": {
      // EN: <p>A drone flies from point <span class="chem">A(1, -2, 4)</span> towards point <span class="chem">B(3, 4, 1)</span> at a constant speed of <span class="unit">21 m s-1</span>. What is its velocity vector?</p>
      stem: "<p>드론이 점 <span class=\"chem\">A(1, -2, 4)</span>에서 점 <span class=\"chem\">B(3, 4, 1)</span>을 향해 <span class=\"unit\">21 m s-1</span>의 일정한 속력으로 날아가요. 이 드론의 속도벡터는 무엇인가요?</p>",
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
        "변위벡터 <span class=\"chem\">AB = b - a = (3 - 1, 4 - (-2), 1 - 4)</span>를 구하세요.",
        // EN: Divide <span class="chem">AB</span> by its magnitude <span class="chem">|AB|</span> to get the unit direction vector, then multiply by <span class="chem">21</span>.
        "<span class=\"chem\">AB</span>를 크기 <span class=\"chem\">|AB|</span>로 나누어 단위 방향벡터를 구한 뒤 <span class=\"chem\">21</span>을 곱하세요.",
      ],
      // EN: <p><span class="chem">AB = (2, 6, -3)</span> with <span class="chem">|AB| = sqrt(2^2 + 6^2 + (-3)^2) = sqrt(49) = 7</span>. Rescaling to speed 21 gives <span class="chem">v = (21 / 7)(2, 6, -3) = (6, 18, -9)</span>.</p>
      solution: "<p><span class=\"chem\">AB = (2, 6, -3)</span>이고 <span class=\"chem\">|AB| = sqrt(2^2 + 6^2 + (-3)^2) = sqrt(49) = 7</span>이에요. 속력 21에 맞게 크기를 조절하면 <span class=\"chem\">v = (21 / 7)(2, 6, -3) = (6, 18, -9)</span>예요.</p>",
      misconception: {
        // EN (option B): <span class="chem">(2, 6, -3)</span> is the displacement vector <span class="chem">AB</span>, whose magnitude is <span class="chem">sqrt(4 + 36 + 9) = 7</span>, not <span class="chem">21</span>.
        "1": "<span class=\"chem\">(2, 6, -3)</span>은 변위벡터 <span class=\"chem\">AB</span>로, 크기가 <span class=\"chem\">21</span>이 아니라 <span class=\"chem\">sqrt(4 + 36 + 9) = 7</span>이에요.",
        // EN (option C): You multiplied <span class="chem">AB</span> by <span class="chem">21</span> without dividing by its magnitude <span class="chem">|AB| = 7</span> first.
        "2": "먼저 크기 <span class=\"chem\">|AB| = 7</span>로 나누지 않고 <span class=\"chem\">AB</span>에 바로 <span class=\"chem\">21</span>을 곱했어요.",
        // EN (option D): That points from <span class="chem">B</span> to <span class="chem">A</span> (<span class="chem">a - b</span>) instead of from <span class="chem">A</span> to <span class="chem">B</span> (<span class="chem">b - a</span>).
        "3": "그것은 <span class=\"chem\">A</span>에서 <span class=\"chem\">B</span>(<span class=\"chem\">b - a</span>)가 아니라 <span class=\"chem\">B</span>에서 <span class=\"chem\">A</span>(<span class=\"chem\">a - b</span>)로 향하는 벡터예요.",
      },
    },

    // ── t3-3-q002 · numeric · foundation · AHL · AHL 3.13 · 2 marks
    "t3-3-q002": {
      // EN: <p>Find the value of <span class="chem">k</span> for which the vectors <span class="chem">u = (k, 2, -3)</span> and <span class="chem">v = (4, k, 2)</span> are perpendicular.</p>
      stem: "<p>두 벡터 <span class=\"chem\">u = (k, 2, -3)</span>와 <span class=\"chem\">v = (4, k, 2)</span>가 수직이 되도록 하는 <span class=\"chem\">k</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Two non-zero vectors are perpendicular if and only if <span class="chem">u . v = 0</span>.
        "영벡터가 아닌 두 벡터가 수직일 필요충분조건은 <span class=\"chem\">u . v = 0</span>이에요.",
        // EN: Compute <span class="chem">k(4) + 2(k) + (-3)(2) = 0</span> and solve for <span class="chem">k</span>.
        "<span class=\"chem\">k(4) + 2(k) + (-3)(2) = 0</span>을 계산해 <span class=\"chem\">k</span>를 구하세요.",
      ],
      // EN: <p>Setting the dot product to zero gives <span class="chem">4k + 2k - 6 = 0 => 6k = 6 => k = 1</span>.</p>
      solution: "<p>내적을 0으로 놓으면 <span class=\"chem\">4k + 2k - 6 = 0 => 6k = 6 => k = 1</span>이에요.</p>",
    },

    // ── t3-3-q003 · mcq · foundation · AHL · AHL 3.14 · 2 marks
    "t3-3-q003": {
      // EN: <p>A 3D line has Cartesian equation <span class="chem">(4 - 2x) / 6 = (y + 1) / 3 = (z - 5) / (-2)</span>. Which of the following is a valid direction vector for this line?</p>
      stem: "<p>3D 직선의 직교 방정식이 <span class=\"chem\">(4 - 2x) / 6 = (y + 1) / 3 = (z - 5) / (-2)</span>일 때, 다음 중 이 직선의 방향벡터로 옳은 것은 무엇인가요?</p>",
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
        "<span class=\"chem\">(4 - 2x) / 6</span>의 분자가 <span class=\"chem\">x - x_0</span> 꼴이 되도록 분자·분모를 <span class=\"chem\">-2</span>로 나누세요.",
      ],
      // EN: <p>Dividing numerator and denominator of the first fraction by <span class="chem">-2</span> gives <span class="chem">(x - 2) / (-3) = (y + 1) / 3 = (z - 5) / (-2)</span>, so a direction vector is <span class="chem">(-3, 3, -2)</span>.</p>
      solution: "<p>첫 번째 분수의 분자·분모를 <span class=\"chem\">-2</span>로 나누면 <span class=\"chem\">(x - 2) / (-3) = (y + 1) / 3 = (z - 5) / (-2)</span>가 되므로 방향벡터는 <span class=\"chem\">(-3, 3, -2)</span>예요.</p>",
      misconception: {
        // EN (option B): The numerator <span class="chem">4 - 2x</span> must be rewritten with coefficient <span class="chem">+1</span> on <span class="chem">x</span> before reading the denominator.
        "1": "분모를 읽기 전에 분자 <span class=\"chem\">4 - 2x</span>에서 <span class=\"chem\">x</span>의 계수가 <span class=\"chem\">+1</span>이 되도록 고쳐 써야 해요.",
        // EN (option C): Factoring <span class="chem">-2</span> out of <span class="chem">4 - 2x</span> gives <span class="chem">-2(x - 2) / 6 = (x - 2) / (-3)</span>, so the <span class="chem">x</span>-component is <span class="chem">-3</span>, not <span class="chem">-6</span>.
        "2": "<span class=\"chem\">4 - 2x</span>에서 <span class=\"chem\">-2</span>를 묶어 내면 <span class=\"chem\">-2(x - 2) / 6 = (x - 2) / (-3)</span>이므로 <span class=\"chem\">x</span>성분은 <span class=\"chem\">-6</span>이 아니라 <span class=\"chem\">-3</span>이에요.",
        // EN (option D): <span class="chem">(2, -1, 5)</span> is a point on the line, not its direction vector.
        "3": "<span class=\"chem\">(2, -1, 5)</span>은 방향벡터가 아니라 직선 위의 한 점이에요.",
      },
    },

    // ── t3-3-q004 · multi · foundation · AHL · AHL 3.13, 3.16 · 3 marks
    "t3-3-q004": {
      // EN: <p>Select <strong>all</strong> statements that are always true for any 3D vectors <span class="chem">u, v, w</span>.</p>
      stem: "<p>임의의 3D 벡터 <span class=\"chem\">u, v, w</span>에 대해 항상 성립하는 명제를 <strong>모두</strong> 고르시오.</p>",
      options: [
        // EN: <span class="chem">u . v = v . u</span>
        "<span class=\"chem\">u . v = v . u</span>",
        // EN: <span class="chem">u x v = -(v x u)</span>
        "<span class=\"chem\">u x v = -(v x u)</span>",
        // EN: <span class="chem">(u x v) . u = 0</span>
        "<span class=\"chem\">(u x v) . u = 0</span>",
        // EN: If <span class="chem">u x v = u x w</span> and <span class="chem">u != 0</span>, then <span class="chem">v = w</span>
        "<span class=\"chem\">u x v = u x w</span>이고 <span class=\"chem\">u != 0</span>이면 <span class=\"chem\">v = w</span>이다",
      ],
      hints: [
        // EN: Check commutativity of dot product, anti-commutativity of cross product, and orthogonality of <span class="chem">u x v</span> to <span class="chem">u</span>.
        "내적의 교환법칙, 외적의 반교환법칙, 그리고 <span class=\"chem\">u x v</span>가 <span class=\"chem\">u</span>에 수직인 성질을 확인하세요.",
        // EN: For the fourth option, test <span class="chem">u = i, v = j, w = i + j</span>.
        "네 번째 보기에는 <span class=\"chem\">u = i, v = j, w = i + j</span>를 넣어 확인해 보세요.",
      ],
      // EN: <p>The dot product is commutative (<span class="chem">u . v = v . u</span>), the cross product is anti-commutative (<span class="chem">u x v = -(v x u)</span>), and <span class="chem">u x v</span> is perpendicular to <span class="chem">u</span> so <span class="chem">(u x v) . u = 0</span>. Cancellation fails for cross products.</p>
      solution: "<p>내적은 교환법칙(<span class=\"chem\">u . v = v . u</span>)이 성립하고, 외적은 반교환법칙(<span class=\"chem\">u x v = -(v x u)</span>)이 성립하며, <span class=\"chem\">u x v</span>는 <span class=\"chem\">u</span>에 수직이므로 <span class=\"chem\">(u x v) . u = 0</span>이에요. 외적에서는 소거법칙이 성립하지 않아요.</p>",
      misconception: {
        // EN (option D): Cross product does not satisfy cancellation: <span class="chem">u x (v - w) = 0</span> only implies <span class="chem">v - w</span> is parallel to <span class="chem">u</span>, not necessarily <span class="chem">0</span>.
        "3": "외적에서는 소거법칙이 성립하지 않아요: <span class=\"chem\">u x (v - w) = 0</span>은 <span class=\"chem\">v - w</span>가 <span class=\"chem\">u</span>와 평행함을 뜻할 뿐 반드시 <span class=\"chem\">0</span>은 아니에요.",
      },
    },

    // ── t3-3-q005 · numeric · foundation · AHL · AHL 3.16 · 4 marks
    "t3-3-q005": {
      // EN: <p>Find the exact area of triangle <span class="chem">ABC</span> with vertices <span class="chem">A(1, 0, 1)</span>, <span class="chem">B(3, 2, 0)</span>, and <span class="chem">C(1, 4, 3)</span>.</p>
      stem: "<p>세 꼭짓점 <span class=\"chem\">A(1, 0, 1)</span>, <span class=\"chem\">B(3, 2, 0)</span>, <span class=\"chem\">C(1, 4, 3)</span>로 이루어진 삼각형 <span class=\"chem\">ABC</span>의 정확한 넓이를 구하시오 (Find).</p>",
      hints: [
        // EN: Form two vectors from vertex <span class="chem">A</span>: <span class="chem">AB = (2, 2, -1)</span> and <span class="chem">AC = (0, 4, 2)</span>.
        "꼭짓점 <span class=\"chem\">A</span>에서 출발하는 두 벡터를 만드세요: <span class=\"chem\">AB = (2, 2, -1)</span>과 <span class=\"chem\">AC = (0, 4, 2)</span>.",
        // EN: Compute <span class="chem">AB x AC</span> and then use <span class="chem">Area = (1/2)|AB x AC|</span>.
        "<span class=\"chem\">AB x AC</span>를 계산한 뒤 <span class=\"chem\">Area = (1/2)|AB x AC|</span>를 쓰세요.",
      ],
      // EN: <p><span class="chem">AB = (2, 2, -1)</span> and <span class="chem">AC = (0, 4, 2)</span>. Then <span class="chem">AB x AC = (4 - (-4), 0 - 4, 8 - 0) = (8, -4, 8)</span>, which has magnitude <span class="chem">sqrt(64 + 16 + 64) = 12</span>. Thus <span class="chem">Area = (1/2)(12) = 6</span>.</p>
      solution: "<p><span class=\"chem\">AB = (2, 2, -1)</span>이고 <span class=\"chem\">AC = (0, 4, 2)</span>예요. 그러면 <span class=\"chem\">AB x AC = (4 - (-4), 0 - 4, 8 - 0) = (8, -4, 8)</span>이고, 크기는 <span class=\"chem\">sqrt(64 + 16 + 64) = 12</span>예요. 따라서 <span class=\"chem\">Area = (1/2)(12) = 6</span>이에요.</p>",
    },

    // ── t3-3-q006 · mcq · foundation · AHL · AHL 3.17 · 2 marks
    "t3-3-q006": {
      // EN: <p>Find the Cartesian equation of the plane passing through <span class="chem">P(2, -1, 3)</span> with normal vector <span class="chem">n = (4, -2, 1)</span>.</p>
      stem: "<p>점 <span class=\"chem\">P(2, -1, 3)</span>을 지나고 법선벡터가 <span class=\"chem\">n = (4, -2, 1)</span>인 평면의 직교 방정식을 구하시오 (Find).</p>",
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
        "<span class=\"chem\">r . n = a . n</span>을 사용하세요: <span class=\"chem\">4x - 2y + z = 4(2) - 2(-1) + 1(3)</span>.",
      ],
      // EN: <p>Using <span class="chem">r . n = a . n</span>: <span class="chem">4x - 2y + z = 4(2) - 2(-1) + 1(3) = 8 + 2 + 3 = 13</span>.</p>
      solution: "<p><span class=\"chem\">r . n = a . n</span>을 쓰면 <span class=\"chem\">4x - 2y + z = 4(2) - 2(-1) + 1(3) = 8 + 2 + 3 = 13</span>이에요.</p>",
      misconception: {
        // EN (option B): Check the sign on <span class="chem">-2(-1)</span>: <span class="chem">4(2) - 2(-1) + 1(3) = 8 + 2 + 3 = 13</span>, not <span class="chem">8 - 2 + 3 = 9</span>.
        "1": "<span class=\"chem\">-2(-1)</span>의 부호를 확인하세요: <span class=\"chem\">4(2) - 2(-1) + 1(3) = 8 + 2 + 3 = 13</span>이에요 (<span class=\"chem\">8 - 2 + 3 = 9</span>가 아니에요).",
        // EN (option C): The coefficients of <span class="chem">x, y, z</span> must be the normal vector <span class="chem">(4, -2, 1)</span>, not the point coordinates.
        "2": "<span class=\"chem\">x, y, z</span>의 계수는 점의 좌표가 아니라 법선벡터 <span class=\"chem\">(4, -2, 1)</span>이어야 해요.",
        // EN (option D): Check the arithmetic: <span class="chem">8 + 2 + 3 = 13</span>.
        "3": "계산을 확인하세요: <span class=\"chem\">8 + 2 + 3 = 13</span>이에요.",
      },
    },

    // ── t3-3-q007 · order · exam · AHL · AHL 3.15 · 4 marks
    "t3-3-q007": {
      // EN: <p>Arrange the steps in the correct logical order to prove that two 3D lines <span class="chem">L_1: r = a_1 + lambda b_1</span> and <span class="chem">L_2: r = a_2 + mu b_2</span> are <strong>skew</strong>.</p>
      stem: "<p>두 3D 직선 <span class=\"chem\">L_1: r = a_1 + lambda b_1</span>과 <span class=\"chem\">L_2: r = a_2 + mu b_2</span>가 <strong>꼬인 위치</strong>에 있음을 증명하는 단계를 올바른 논리적 순서로 배열하시오.</p>",
      options: [
        // EN: Show that the direction vectors <span class="chem">b_1</span> and <span class="chem">b_2</span> are not scalar multiples (<span class="chem">b_1 != k b_2</span>), so the lines are not parallel.
        "방향벡터 <span class=\"chem\">b_1</span>과 <span class=\"chem\">b_2</span>가 실수배가 아님(<span class=\"chem\">b_1 != k b_2</span>)을 보여 두 직선이 평행하지 않음을 확인한다.",
        // EN: Equate the <span class="chem">x</span>, <span class="chem">y</span>, and <span class="chem">z</span> components using two distinct parameters <span class="chem">lambda</span> and <span class="chem">mu</span>.
        "서로 다른 두 매개변수 <span class=\"chem\">lambda</span>와 <span class=\"chem\">mu</span>를 사용해 <span class=\"chem\">x</span>, <span class=\"chem\">y</span>, <span class=\"chem\">z</span> 성분을 같다고 놓는다.",
        // EN: Solve the <span class="chem">x</span> and <span class="chem">y</span> equations simultaneously to obtain a unique candidate pair <span class="chem">(lambda, mu)</span>.
        "<span class=\"chem\">x</span>와 <span class=\"chem\">y</span> 방정식을 연립해 유일한 후보 쌍 <span class=\"chem\">(lambda, mu)</span>를 구한다.",
        // EN: Substitute <span class="chem">(lambda, mu)</span> into the <span class="chem">z</span>-equation and show it produces a contradiction, proving no intersection exists.
        "<span class=\"chem\">(lambda, mu)</span>를 <span class=\"chem\">z</span> 방정식에 대입해 모순이 생김을 보여 교점이 없음을 증명한다.",
      ],
      hints: [
        // EN: First rule out parallelism, then test for an intersection using two different parameters.
        "먼저 평행하지 않음을 보인 뒤, 서로 다른 두 매개변수로 교점이 있는지 확인하세요.",
      ],
      // EN: <p>To prove two lines are skew, first verify <span class="chem">b_1 != k b_2</span> (not parallel), then equate coordinates with distinct parameters <span class="chem">lambda, mu</span>, solve two equations for <span class="chem">(lambda, mu)</span>, and show the third equation is inconsistent.</p>
      solution: "<p>두 직선이 꼬인 위치임을 증명하려면 먼저 <span class=\"chem\">b_1 != k b_2</span> (평행하지 않음)을 확인하고, 서로 다른 매개변수 <span class=\"chem\">lambda, mu</span>로 좌표를 같다고 놓은 뒤, 두 식에서 <span class=\"chem\">(lambda, mu)</span>를 구해 세 번째 식이 성립하지 않음을 보이면 돼요.</p>",
    },

    // ── t3-3-q008 · numeric · exam · AHL · AHL 3.13 · 4 marks
    "t3-3-q008": {
      // EN: <p>Vectors <span class="chem">u</span> and <span class="chem">v</span> satisfy <span class="chem">|u| = 5</span>, <span class="chem">|v| = 3</span>, and <span class="chem">|u + v| = 7</span>. Find the angle <span class="chem">theta</span> between <span class="chem">u</span> and <span class="chem">v</span> in <strong>degrees</strong>.</p>
      stem: "<p>두 벡터 <span class=\"chem\">u</span>와 <span class=\"chem\">v</span>가 <span class=\"chem\">|u| = 5</span>, <span class=\"chem\">|v| = 3</span>, <span class=\"chem\">|u + v| = 7</span>을 만족해요. <span class=\"chem\">u</span>와 <span class=\"chem\">v</span>가 이루는 각 <span class=\"chem\">theta</span>를 <strong>도(°)</strong> 단위로 구하시오 (Find).</p>",
      hints: [
        // EN: Expand <span class="chem">|u + v|^2 = (u + v) . (u + v) = |u|^2 + 2(u . v) + |v|^2</span>.
        "<span class=\"chem\">|u + v|^2 = (u + v) . (u + v) = |u|^2 + 2(u . v) + |v|^2</span>을 전개하세요.",
        // EN: Solve <span class="chem">49 = 25 + 2(u . v) + 9</span> for <span class="chem">u . v</span>, then use <span class="chem">cos theta = (u . v) / (|u||v|)</span>.
        "<span class=\"chem\">49 = 25 + 2(u . v) + 9</span>에서 <span class=\"chem\">u . v</span>를 구한 뒤 <span class=\"chem\">cos theta = (u . v) / (|u||v|)</span>를 쓰세요.",
      ],
      // EN: <p><span class="chem">49 = 5^2 + 2(u . v) + 3^2 = 34 + 2(u . v) => u . v = 7.5</span>. Therefore <span class="chem">cos theta = 7.5 / (5 × 3) = 1/2 => theta = 60°</span>.</p>
      solution: "<p><span class=\"chem\">49 = 5^2 + 2(u . v) + 3^2 = 34 + 2(u . v) => u . v = 7.5</span>예요. 따라서 <span class=\"chem\">cos theta = 7.5 / (5 × 3) = 1/2 => theta = 60°</span>예요.</p>",
    },

    // ── t3-3-q009 · numeric · exam · AHL · AHL 3.14 · 4 marks
    "t3-3-q009": {
      // EN: <p>At time <span class="chem">t &gt;= 0</span> hours, boat A has position <span class="chem">r_A(t) = (1, 2, 0) + t(2, -1, 0)</span> and boat B has position <span class="chem">r_B(t) = (7, -4, 0) + t(-1, 2, 0)</span>. Find the time <span class="chem">t</span> at which the two boats collide.</p>
      stem: "<p>시각 <span class=\"chem\">t &gt;= 0</span>시간에서 배 A의 위치는 <span class=\"chem\">r_A(t) = (1, 2, 0) + t(2, -1, 0)</span>이고 배 B의 위치는 <span class=\"chem\">r_B(t) = (7, -4, 0) + t(-1, 2, 0)</span>예요. 두 배가 충돌하는 시각 <span class=\"chem\">t</span>를 구하시오 (Find).</p>",
      hints: [
        // EN: For a collision, both boats must be at the same position at the <em>same</em> time <span class="chem">t</span>: set <span class="chem">r_A(t) = r_B(t)</span>.
        "충돌하려면 두 배가 <em>같은</em> 시각 <span class=\"chem\">t</span>에 같은 위치에 있어야 해요: <span class=\"chem\">r_A(t) = r_B(t)</span>로 놓으세요.",
        // EN: Solve <span class="chem">1 + 2t = 7 - t</span> and verify the <span class="chem">y</span>-coordinate matches at that <span class="chem">t</span>.
        "<span class=\"chem\">1 + 2t = 7 - t</span>를 풀고 그 <span class=\"chem\">t</span>에서 <span class=\"chem\">y</span>좌표도 일치하는지 확인하세요.",
      ],
      // EN: <p>Equating <span class="chem">x</span>-coordinates: <span class="chem">1 + 2t = 7 - t => 3t = 6 => t = 2</span>. Checking <span class="chem">y</span>-coordinates at <span class="chem">t = 2</span>: <span class="chem">2 - 2 = 0</span> and <span class="chem">-4 + 4 = 0</span>. They collide at <span class="chem">(5, 0, 0)</span> when <span class="chem">t = 2</span> hours.</p>
      solution: "<p><span class=\"chem\">x</span>좌표를 같다고 놓으면 <span class=\"chem\">1 + 2t = 7 - t => 3t = 6 => t = 2</span>예요. <span class=\"chem\">t = 2</span>에서 <span class=\"chem\">y</span>좌표를 확인하면 <span class=\"chem\">2 - 2 = 0</span>, <span class=\"chem\">-4 + 4 = 0</span>이에요. 따라서 <span class=\"chem\">t = 2</span>시간일 때 <span class=\"chem\">(5, 0, 0)</span>에서 충돌해요.</p>",
      // EN: hours
      unit: "시간",
    },

    // ── t3-3-q010 · mcq · exam · AHL · AHL 3.15 · 5 marks
    "t3-3-q010": {
      // EN: <p>Find the shortest distance from the point <span class="chem">P(1, 3, -2)</span> to the line <span class="chem">L: r = (1, 0, 1) + lambda(2, 1, -2)</span>.</p>
      stem: "<p>점 <span class=\"chem\">P(1, 3, -2)</span>에서 직선 <span class=\"chem\">L: r = (1, 0, 1) + lambda(2, 1, -2)</span>까지의 최단 거리를 구하시오 (Find).</p>",
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
        "<span class=\"chem\">P</span>에서 <span class=\"chem\">L</span>에 내린 수선의 발을 <span class=\"chem\">F(1 + 2 lambda, lambda, 1 - 2 lambda)</span>라 두세요.",
        // EN: Solve <span class="chem">PF . (2, 1, -2) = 0</span> for <span class="chem">lambda</span>, then find <span class="chem">|PF|</span>.
        "<span class=\"chem\">PF . (2, 1, -2) = 0</span>을 풀어 <span class=\"chem\">lambda</span>를 구한 뒤 <span class=\"chem\">|PF|</span>를 구하세요.",
      ],
      // EN: <p><span class="chem">PF = (2 lambda, lambda - 3, 3 - 2 lambda)</span>. Setting <span class="chem">PF . (2, 1, -2) = 0</span> gives <span class="chem">4 lambda + lambda - 3 - 6 + 4 lambda = 9 lambda - 9 = 0 => lambda = 1</span>. Thus <span class="chem">PF = (2, -2, 1)</span> and <span class="chem">|PF| = sqrt(4 + 4 + 1) = 3</span>.</p>
      solution: "<p><span class=\"chem\">PF = (2 lambda, lambda - 3, 3 - 2 lambda)</span>예요. <span class=\"chem\">PF . (2, 1, -2) = 0</span>으로 놓으면 <span class=\"chem\">4 lambda + lambda - 3 - 6 + 4 lambda = 9 lambda - 9 = 0 => lambda = 1</span>이에요. 따라서 <span class=\"chem\">PF = (2, -2, 1)</span>이고 <span class=\"chem\">|PF| = sqrt(4 + 4 + 1) = 3</span>이에요.</p>",
      misconception: {
        // EN (option B): <span class="chem">sqrt(19)</span> is the distance from <span class="chem">P</span> to the starting point <span class="chem">A(1, 0, 1)</span>, not the perpendicular distance to the line.
        "1": "<span class=\"chem\">sqrt(19)</span>는 직선까지의 수직 거리가 아니라 <span class=\"chem\">P</span>에서 기준점 <span class=\"chem\">A(1, 0, 1)</span>까지의 거리예요.",
        // EN (option C): Remember to take the square root of <span class="chem">2^2 + (-2)^2 + 1^2 = 9</span>.
        "2": "<span class=\"chem\">2^2 + (-2)^2 + 1^2 = 9</span>에 제곱근을 취하는 것을 잊지 마세요.",
        // EN (option D): Check your <span class="chem">PF . b = 0</span> equation: <span class="chem">2(2 lambda) + 1(lambda - 3) - 2(3 - 2 lambda) = 9 lambda - 9 = 0 => lambda = 1</span>.
        "3": "<span class=\"chem\">PF . b = 0</span> 식을 다시 확인하세요: <span class=\"chem\">2(2 lambda) + 1(lambda - 3) - 2(3 - 2 lambda) = 9 lambda - 9 = 0 => lambda = 1</span>이에요.",
      },
    },

    // ── t3-3-q011 · numeric · exam · AHL · AHL 3.18 · 4 marks
    "t3-3-q011": {
      // EN: <p>Find the acute angle <span class="chem">phi</span> (in degrees, correct to 3 significant figures) between the line <span class="chem">r = (1, 2, 0) + lambda(2, 1, 2)</span> and the plane <span class="chem">2x + 2y - z = 7</span>.</p>
      stem: "<p>직선 <span class=\"chem\">r = (1, 2, 0) + lambda(2, 1, 2)</span>와 평면 <span class=\"chem\">2x + 2y - z = 7</span>이 이루는 예각 <span class=\"chem\">phi</span>(도 단위, 유효숫자 3자리)를 구하시오 (Find).</p>",
      hints: [
        // EN: Use the line-plane angle formula <span class="chem">sin phi = |b . n| / (|b||n|)</span> with <span class="chem">b = (2, 1, 2)</span> and <span class="chem">n = (2, 2, -1)</span>.
        "<span class=\"chem\">b = (2, 1, 2)</span>, <span class=\"chem\">n = (2, 2, -1)</span>로 놓고 직선-평면 각 공식 <span class=\"chem\">sin phi = |b . n| / (|b||n|)</span>을 쓰세요.",
        // EN: Compute <span class="chem">sin phi = |4 + 2 - 2| / (3 × 3) = 4 / 9</span>, then take <span class="chem">arcsin(4/9)</span> in degrees.
        "<span class=\"chem\">sin phi = |4 + 2 - 2| / (3 × 3) = 4 / 9</span>를 계산한 뒤 도(°) 단위로 <span class=\"chem\">arcsin(4/9)</span>를 구하세요.",
      ],
      // EN: <p>With <span class="chem">b = (2, 1, 2)</span> (<span class="chem">|b| = 3</span>) and <span class="chem">n = (2, 2, -1)</span> (<span class="chem">|n| = 3</span>), <span class="chem">sin phi = |2(2) + 1(2) + 2(-1)| / (3 × 3) = 4/9</span>. Hence <span class="chem">phi = arcsin(4/9) ≈ 26.4°</span>.</p>
      solution: "<p><span class=\"chem\">b = (2, 1, 2)</span> (<span class=\"chem\">|b| = 3</span>)이고 <span class=\"chem\">n = (2, 2, -1)</span> (<span class=\"chem\">|n| = 3</span>)이므로 <span class=\"chem\">sin phi = |2(2) + 1(2) + 2(-1)| / (3 × 3) = 4/9</span>예요. 따라서 <span class=\"chem\">phi = arcsin(4/9) ≈ 26.4°</span>예요.</p>",
    },

    // ── t3-3-q012 · numeric · exam · AHL · AHL 3.18 · 3 marks
    "t3-3-q012": {
      // EN: <p>The line <span class="chem">r = (1, 2, -1) + lambda(2, -1, 3)</span> intersects the plane <span class="chem">x + 2y + z = 12</span> at point <span class="chem">Q</span>. Find the <span class="chem">z</span>-coordinate of <span class="chem">Q</span>.</p>
      stem: "<p>직선 <span class=\"chem\">r = (1, 2, -1) + lambda(2, -1, 3)</span>이 평면 <span class=\"chem\">x + 2y + z = 12</span>와 점 <span class=\"chem\">Q</span>에서 만나요. <span class=\"chem\">Q</span>의 <span class=\"chem\">z</span>좌표를 구하시오 (Find).</p>",
      hints: [
        // EN: Substitute <span class="chem">x = 1 + 2 lambda</span>, <span class="chem">y = 2 - lambda</span>, <span class="chem">z = -1 + 3 lambda</span> into <span class="chem">x + 2y + z = 12</span>.
        "<span class=\"chem\">x = 1 + 2 lambda</span>, <span class=\"chem\">y = 2 - lambda</span>, <span class=\"chem\">z = -1 + 3 lambda</span>를 <span class=\"chem\">x + 2y + z = 12</span>에 대입하세요.",
        // EN: Solve for <span class="chem">lambda</span>, then compute <span class="chem">z = -1 + 3 lambda</span>.
        "<span class=\"chem\">lambda</span>를 구한 뒤 <span class=\"chem\">z = -1 + 3 lambda</span>를 계산하세요.",
      ],
      // EN: <p>Substituting gives <span class="chem">(1 + 2 lambda) + 2(2 - lambda) + (-1 + 3 lambda) = 12 => 4 + 3 lambda = 12 => lambda = 8/3</span>. Thus <span class="chem">z = -1 + 3(8/3) = 7</span>.</p>
      solution: "<p>대입하면 <span class=\"chem\">(1 + 2 lambda) + 2(2 - lambda) + (-1 + 3 lambda) = 12 => 4 + 3 lambda = 12 => lambda = 8/3</span>이에요. 따라서 <span class=\"chem\">z = -1 + 3(8/3) = 7</span>이에요.</p>",
    },

    // ── t3-3-q013 · mcq · exam · AHL · AHL 3.18 · 4 marks
    "t3-3-q013": {
      // EN: <p>Find the acute angle between the two planes <span class="chem">Pi_1: x - y + sqrt(2) z = 5</span> and <span class="chem">Pi_2: x + y + sqrt(2) z = 1</span>.</p>
      stem: "<p>두 평면 <span class=\"chem\">Pi_1: x - y + sqrt(2) z = 5</span>와 <span class=\"chem\">Pi_2: x + y + sqrt(2) z = 1</span>이 이루는 예각을 구하시오 (Find).</p>",
      options: [
        // EN: <span class="chem">60°</span> (<span class="chem">pi/3</span>)
        "<span class=\"chem\">60°</span> (<span class=\"chem\">pi/3</span>)",
        // EN: <span class="chem">30°</span> (<span class="chem">pi/6</span>)
        "<span class=\"chem\">30°</span> (<span class=\"chem\">pi/6</span>)",
        // EN: <span class="chem">45°</span> (<span class="chem">pi/4</span>)
        "<span class=\"chem\">45°</span> (<span class=\"chem\">pi/4</span>)",
        // EN: <span class="chem">120°</span> (<span class="chem">2pi/3</span>)
        "<span class=\"chem\">120°</span> (<span class=\"chem\">2pi/3</span>)",
      ],
      hints: [
        // EN: Extract the normal vectors <span class="chem">n_1 = (1, -1, sqrt(2))</span> and <span class="chem">n_2 = (1, 1, sqrt(2))</span>.
        "법선벡터 <span class=\"chem\">n_1 = (1, -1, sqrt(2))</span>과 <span class=\"chem\">n_2 = (1, 1, sqrt(2))</span>를 읽어 내세요.",
        // EN: Compute <span class="chem">cos theta = |n_1 . n_2| / (|n_1||n_2|)</span>.
        "<span class=\"chem\">cos theta = |n_1 . n_2| / (|n_1||n_2|)</span>를 계산하세요.",
      ],
      // EN: <p><span class="chem">|n_1| = sqrt(1 + 1 + 2) = 2</span>, <span class="chem">|n_2| = 2</span>, and <span class="chem">n_1 . n_2 = 1 - 1 + 2 = 2</span>. Thus <span class="chem">cos theta = 2 / (2 × 2) = 1/2 => theta = 60°</span> (<span class="chem">pi/3</span>).</p>
      solution: "<p><span class=\"chem\">|n_1| = sqrt(1 + 1 + 2) = 2</span>, <span class=\"chem\">|n_2| = 2</span>이고 <span class=\"chem\">n_1 . n_2 = 1 - 1 + 2 = 2</span>예요. 따라서 <span class=\"chem\">cos theta = 2 / (2 × 2) = 1/2 => theta = 60°</span> (<span class=\"chem\">pi/3</span>)이에요.</p>",
      misconception: {
        // EN (option B): The angle between two planes uses <span class="chem">cos theta = |n_1 . n_2| / (|n_1||n_2|) = 1/2</span>, not <span class="chem">sin theta = 1/2</span>.
        "1": "두 평면이 이루는 각은 <span class=\"chem\">sin theta = 1/2</span>이 아니라 <span class=\"chem\">cos theta = |n_1 . n_2| / (|n_1||n_2|) = 1/2</span>을 써요.",
        // EN (option C): Check <span class="chem">|n_1| = sqrt(1 + 1 + 2) = 2</span> and <span class="chem">n_1 . n_2 = 1 - 1 + 2 = 2</span>, giving <span class="chem">cos theta = 2 / 4 = 1/2</span>.
        "2": "<span class=\"chem\">|n_1| = sqrt(1 + 1 + 2) = 2</span>이고 <span class=\"chem\">n_1 . n_2 = 1 - 1 + 2 = 2</span>이므로 <span class=\"chem\">cos theta = 2 / 4 = 1/2</span>이에요.",
        // EN (option D): The question asks for the <em>acute</em> angle between the planes.
        "3": "문제에서 두 평면이 이루는 <em>예각</em>을 물었어요.",
      },
    },

    // ── t3-3-q014 · short · exam · AHL · AHL 3.16–3.18 · 7 marks
    "t3-3-q014": {
      // EN: <p>The points <span class="chem">A(1, 1, 0)</span>, <span class="chem">B(2, 0, 2)</span>, and <span class="chem">C(0, 2, 1)</span> lie on a plane <span class="chem">Pi</span>.</p><p>(a) Find <span class="chem">AB x AC</span> and hence show that the Cartesian equation of <span class="chem">Pi</span> is <span class="chem">x + y = 2</span>. <strong>[4 marks]</strong></p><p>(b) Find the coordinates of the point <span class="chem">F</span> on <span class="chem">Pi</span> that is closest to <span class="chem">P(3, 5, 2)</span>. <strong>[3 marks]</strong></p>
      stem: "<p>세 점 <span class=\"chem\">A(1, 1, 0)</span>, <span class=\"chem\">B(2, 0, 2)</span>, <span class=\"chem\">C(0, 2, 1)</span>이 평면 <span class=\"chem\">Pi</span> 위에 있다.</p><p>(a) <span class=\"chem\">AB x AC</span>를 구하고 (Find), 이를 이용하여 (hence) <span class=\"chem\">Pi</span>의 직교 방정식이 <span class=\"chem\">x + y = 2</span>임을 보이시오 (show that). <strong>[4 marks]</strong></p><p>(b) <span class=\"chem\">Pi</span> 위에서 점 <span class=\"chem\">P(3, 5, 2)</span>에 가장 가까운 점 <span class=\"chem\">F</span>의 좌표를 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: For part (b), the closest point <span class="chem">F</span> lies where the line through <span class="chem">P</span> with direction <span class="chem">n = (1, 1, 0)</span> meets the plane <span class="chem">Pi</span>.
        "(b)에서 가장 가까운 점 <span class=\"chem\">F</span>는 <span class=\"chem\">P</span>를 지나고 방향이 <span class=\"chem\">n = (1, 1, 0)</span>인 직선이 평면 <span class=\"chem\">Pi</span>와 만나는 점이에요.",
      ],
      // EN: <p>(a) <span class="chem">AB = (1, -1, 2)</span> and <span class="chem">AC = (-1, 1, 1)</span>. Their cross product is <span class="chem">AB x AC = (-3, -3, 0)</span>, so <span class="chem">n = (1, 1, 0)</span> is a normal vector. Using <span class="chem">A(1, 1, 0)</span>: <span class="chem">1(x) + 1(y) + 0(z) = 1 + 1 = 2 => x + y = 2</span>.</p><p>(b) The line through <span class="chem">P</span> perpendicular to <span class="chem">Pi</span> is <span class="chem">r = (3, 5, 2) + t(1, 1, 0)</span>. Substituting into <span class="chem">x + y = 2</span> gives <span class="chem">(3 + t) + (5 + t) = 2 => 2t = -6 => t = -3</span>. Thus <span class="chem">F = (0, 2, 2)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">AB = (1, -1, 2)</span>, <span class=\"chem\">AC = (-1, 1, 1)</span>이에요. 외적은 <span class=\"chem\">AB x AC = (-3, -3, 0)</span>이므로 <span class=\"chem\">n = (1, 1, 0)</span>이 법선벡터예요. <span class=\"chem\">A(1, 1, 0)</span>을 쓰면 <span class=\"chem\">1(x) + 1(y) + 0(z) = 1 + 1 = 2 => x + y = 2</span>예요.</p><p>(b) <span class=\"chem\">P</span>를 지나고 <span class=\"chem\">Pi</span>에 수직인 직선은 <span class=\"chem\">r = (3, 5, 2) + t(1, 1, 0)</span>이에요. <span class=\"chem\">x + y = 2</span>에 대입하면 <span class=\"chem\">(3 + t) + (5 + t) = 2 => 2t = -6 => t = -3</span>이므로 <span class=\"chem\">F = (0, 2, 2)</span>예요.</p>",
      markscheme: [
        // EN: A1: finds <span class="chem">AB = (1, -1, 2)</span> and <span class="chem">AC = (-1, 1, 1)</span>.
        "A1: <span class=\"chem\">AB = (1, -1, 2)</span>와 <span class=\"chem\">AC = (-1, 1, 1)</span>을 구함.",
        // EN: M1 A1: computes cross product <span class="chem">AB x AC = (-3, -3, 0)</span> (or any non-zero multiple).
        "M1 A1: 외적 <span class=\"chem\">AB x AC = (-3, -3, 0)</span> (또는 0이 아닌 임의의 실수배)을 계산함.",
        // EN: A1: substitutes point <span class="chem">A</span> (or <span class="chem">B, C</span>) into <span class="chem">x + y = d</span> to obtain <span class="chem">x + y = 2</span> (AG).
        "A1: 점 <span class=\"chem\">A</span> (또는 <span class=\"chem\">B, C</span>)를 <span class=\"chem\">x + y = d</span>에 대입하여 <span class=\"chem\">x + y = 2</span>를 얻음 (AG).",
        // EN: M1: writes normal line through <span class="chem">P</span> as <span class="chem">r = (3, 5, 2) + t(1, 1, 0)</span>.
        "M1: <span class=\"chem\">P</span>를 지나는 법선을 <span class=\"chem\">r = (3, 5, 2) + t(1, 1, 0)</span>으로 세움.",
        // EN: M1: substitutes into <span class="chem">x + y = 2</span> to find <span class="chem">t = -3</span>.
        "M1: <span class=\"chem\">x + y = 2</span>에 대입하여 <span class=\"chem\">t = -3</span>을 구함.",
        // EN: A1: states <span class="chem">F(0, 2, 2)</span>.
        "A1: <span class=\"chem\">F(0, 2, 2)</span>를 답함.",
      ],
    },

    // ── t3-3-q015 · numeric · challenge · AHL · AHL 3.18 · 5 marks
    "t3-3-q015": {
      // EN: <p>The planes <span class="chem">Pi_1: x + y + z = 6</span> and <span class="chem">Pi_2: 2x - y + z = 3</span> intersect in a line <span class="chem">L</span>. Find the exact distance from the origin <span class="chem">O(0, 0, 0)</span> to the point where <span class="chem">L</span> crosses the <span class="chem">xy</span>-plane (<span class="chem">z = 0</span>). Give your answer to 3 s.f. or as <span class="mono">3*sqrt(2)</span>.</p>
      stem: "<p>두 평면 <span class=\"chem\">Pi_1: x + y + z = 6</span>과 <span class=\"chem\">Pi_2: 2x - y + z = 3</span>이 직선 <span class=\"chem\">L</span>에서 만나요. <span class=\"chem\">L</span>이 <span class=\"chem\">xy</span>평면(<span class=\"chem\">z = 0</span>)과 만나는 점에서 원점 <span class=\"chem\">O(0, 0, 0)</span>까지의 정확한 거리를 구하시오 (Find). 유효숫자 3자리 또는 <span class=\"mono\">3*sqrt(2)</span>로 답하시오.</p>",
      hints: [
        // EN: At the <span class="chem">xy</span>-plane, <span class="chem">z = 0</span>. Substitute <span class="chem">z = 0</span> into both plane equations.
        "<span class=\"chem\">xy</span>평면에서는 <span class=\"chem\">z = 0</span>이에요. 두 평면의 방정식에 모두 <span class=\"chem\">z = 0</span>을 대입하세요.",
        // EN: Solve <span class="chem">x + y = 6</span> and <span class="chem">2x - y = 3</span>, then find <span class="chem">sqrt(x^2 + y^2 + 0^2)</span>.
        "<span class=\"chem\">x + y = 6</span>과 <span class=\"chem\">2x - y = 3</span>을 푼 뒤 <span class=\"chem\">sqrt(x^2 + y^2 + 0^2)</span>을 구하세요.",
      ],
      // EN: <p>Setting <span class="chem">z = 0</span> gives <span class="chem">x + y = 6</span> and <span class="chem">2x - y = 3</span>. Adding gives <span class="chem">3x = 9 => x = 3</span> and <span class="chem">y = 3</span>. The intersection point is <span class="chem">(3, 3, 0)</span>, whose distance from the origin is <span class="chem">sqrt(3^2 + 3^2) = 3 sqrt(2) ≈ 4.24</span>.</p>
      solution: "<p><span class=\"chem\">z = 0</span>을 대입하면 <span class=\"chem\">x + y = 6</span>과 <span class=\"chem\">2x - y = 3</span>이에요. 두 식을 더하면 <span class=\"chem\">3x = 9 => x = 3</span>이고 <span class=\"chem\">y = 3</span>이에요. 교점은 <span class=\"chem\">(3, 3, 0)</span>이고 원점으로부터의 거리는 <span class=\"chem\">sqrt(3^2 + 3^2) = 3 sqrt(2) ≈ 4.24</span>예요.</p>",
    },

    // ── t3-3-q016 · numeric · challenge · AHL · AHL 3.17–3.18 · 6 marks
    "t3-3-q016": {
      // EN: <p>Point <span class="chem">P'</span> is the reflection of <span class="chem">P(4, -1, 3)</span> in the plane <span class="chem">x - 2y + 2z = 3</span>. Find the distance between <span class="chem">P</span> and <span class="chem">P'</span>.</p>
      stem: "<p>점 <span class=\"chem\">P'</span>은 점 <span class=\"chem\">P(4, -1, 3)</span>을 평면 <span class=\"chem\">x - 2y + 2z = 3</span>에 대해 대칭이동한 점이에요. <span class=\"chem\">P</span>와 <span class=\"chem\">P'</span> 사이의 거리를 구하시오 (Find).</p>",
      hints: [
        // EN: The line through <span class="chem">P</span> perpendicular to the plane is <span class="chem">r = (4, -1, 3) + t(1, -2, 2)</span>.
        "<span class=\"chem\">P</span>를 지나고 평면에 수직인 직선은 <span class=\"chem\">r = (4, -1, 3) + t(1, -2, 2)</span>예요.",
        // EN: Find <span class="chem">t</span> at the foot <span class="chem">F</span> on the plane; then <span class="chem">PP' = 2 PF</span>, so <span class="chem">|PP'| = 2|t||(1, -2, 2)|</span>.
        "평면 위의 수선의 발 <span class=\"chem\">F</span>에서 <span class=\"chem\">t</span>를 구하세요; 그러면 <span class=\"chem\">PP' = 2 PF</span>이므로 <span class=\"chem\">|PP'| = 2|t||(1, -2, 2)|</span>예요.",
      ],
      // EN: <p>Substituting <span class="chem">(4 + t, -1 - 2t, 3 + 2t)</span> into <span class="chem">x - 2y + 2z = 3</span> gives <span class="chem">(4 + t) - 2(-1 - 2t) + 2(3 + 2t) = 3 => 12 + 9t = 3 => t = -1</span>. Thus <span class="chem">PF = (-1, 2, -2)</span> has length <span class="chem">3</span>, and the distance <span class="chem">|PP'| = 2 × 3 = 6</span>.</p>
      solution: "<p><span class=\"chem\">(4 + t, -1 - 2t, 3 + 2t)</span>를 <span class=\"chem\">x - 2y + 2z = 3</span>에 대입하면 <span class=\"chem\">(4 + t) - 2(-1 - 2t) + 2(3 + 2t) = 3 => 12 + 9t = 3 => t = -1</span>이에요. 따라서 <span class=\"chem\">PF = (-1, 2, -2)</span>의 길이는 <span class=\"chem\">3</span>이고, 거리 <span class=\"chem\">|PP'| = 2 × 3 = 6</span>이에요.</p>",
    },

    // ── t3-3-q017 · mcq · challenge · AHL · AHL 3.18 · 5 marks
    "t3-3-q017": {
      // EN: <p>The system of three planes <span class="chem">x + y + z = 3</span>, <span class="chem">2x - y + z = 2</span>, and <span class="chem">x + 4y + k z = m</span> has infinitely many solutions (the planes meet along a common line). Find the values of <span class="chem">k</span> and <span class="chem">m</span>.</p>
      stem: "<p>세 평면의 연립방정식 <span class=\"chem\">x + y + z = 3</span>, <span class=\"chem\">2x - y + z = 2</span>, <span class=\"chem\">x + 4y + k z = m</span>이 무수히 많은 해를 가진다 (세 평면이 공통 교선에서 만난다). <span class=\"chem\">k</span>와 <span class=\"chem\">m</span>의 값을 구하시오 (Find).</p>",
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
        // EN: Eliminate <span class="chem">x</span> from the second and third equations using the first equation: <span class="chem">R_2 - 2 R_1</span> and <span class="chem">R_3 - R_1</span>.
        "첫 번째 식을 이용해 두 번째와 세 번째 식에서 <span class=\"chem\">x</span>를 소거하세요: <span class=\"chem\">R_2 - 2 R_1</span>과 <span class=\"chem\">R_3 - R_1</span>.",
        // EN: For infinitely many solutions, the two resulting equations in <span class="chem">y</span> and <span class="chem">z</span> must be identical.
        "해가 무수히 많으려면 얻어진 <span class=\"chem\">y</span>와 <span class=\"chem\">z</span>에 대한 두 식이 같아야 해요.",
      ],
      // EN: <p><span class="chem">R_2 - 2 R_1</span> gives <span class="chem">-3y - z = -4</span>, i.e., <span class="chem">3y + z = 4</span>. <span class="chem">R_3 - R_1</span> gives <span class="chem">3y + (k - 1)z = m - 3</span>. Matching coefficients yields <span class="chem">k - 1 = 1 => k = 2</span> and <span class="chem">m - 3 = 4 => m = 7</span>.</p>
      solution: "<p><span class=\"chem\">R_2 - 2 R_1</span>에서 <span class=\"chem\">-3y - z = -4</span>, 즉 <span class=\"chem\">3y + z = 4</span>가 되고, <span class=\"chem\">R_3 - R_1</span>에서 <span class=\"chem\">3y + (k - 1)z = m - 3</span>이 돼요. 계수를 맞추면 <span class=\"chem\">k - 1 = 1 => k = 2</span>이고 <span class=\"chem\">m - 3 = 4 => m = 7</span>이에요.</p>",
      misconception: {
        // EN (option B): If <span class="chem">k = 2</span> and <span class="chem">m != 7</span>, the planes form a triangular prism with <em>no</em> common solution.
        "1": "<span class=\"chem\">k = 2</span>이고 <span class=\"chem\">m != 7</span>이면 세 평면이 삼각기둥을 이루어 공통 해가 <em>없어요</em>.",
        // EN (option C): Eliminating <span class="chem">x</span> gives <span class="chem">3y + z = 4</span> and <span class="chem">3y + (k - 1)z = m - 3</span>, so <span class="chem">k - 1 = 1 => k = 2</span>.
        "2": "<span class=\"chem\">x</span>를 소거하면 <span class=\"chem\">3y + z = 4</span>와 <span class=\"chem\">3y + (k - 1)z = m - 3</span>이 되므로 <span class=\"chem\">k - 1 = 1 => k = 2</span>예요.",
        // EN (option D): Check the sign on <span class="chem">R_2 - 2 R_1</span>: <span class="chem">(1 - 2)z = -z</span>, so <span class="chem">-3y - z = -4</span> becomes <span class="chem">3y + z = 4</span>.
        "3": "<span class=\"chem\">R_2 - 2 R_1</span>의 부호를 확인하세요: <span class=\"chem\">(1 - 2)z = -z</span>이므로 <span class=\"chem\">-3y - z = -4</span>가 <span class=\"chem\">3y + z = 4</span>가 돼요.",
      },
    },

    // ── t3-3-q018 · short · challenge · AHL · AHL 3.15–3.16 · 8 marks
    "t3-3-q018": {
      // EN: <p>Consider the two lines <span class="chem">L_1: r = (1, 0, 2) + lambda(1, -1, 1)</span> and <span class="chem">L_2: r = (0, 3, 1) + mu(2, 1, -1)</span>.</p><p>(a) Show that <span class="chem">L_1</span> and <span class="chem">L_2</span> are skew. <strong>[3 marks]</strong></p><p>(b) Find a unit vector <span class="chem">n_hat</span> perpendicular to both <span class="chem">L_1</span> and <span class="chem">L_2</span>, and hence find the exact shortest distance between <span class="chem">L_1</span> and <span class="chem">L_2</span>. <strong>[5 marks]</strong></p>
      stem: "<p>두 직선 <span class=\"chem\">L_1: r = (1, 0, 2) + lambda(1, -1, 1)</span>과 <span class=\"chem\">L_2: r = (0, 3, 1) + mu(2, 1, -1)</span>을 생각하자.</p><p>(a) <span class=\"chem\">L_1</span>과 <span class=\"chem\">L_2</span>가 꼬인 위치에 있음을 보이시오 (Show that). <strong>[3 marks]</strong></p><p>(b) <span class=\"chem\">L_1</span>과 <span class=\"chem\">L_2</span>에 모두 수직인 단위벡터 <span class=\"chem\">n_hat</span>을 구하고, 이를 이용하여 (hence) <span class=\"chem\">L_1</span>과 <span class=\"chem\">L_2</span> 사이의 정확한 최단 거리를 구하시오 (Find). <strong>[5 marks]</strong></p>",
      hints: [
        // EN: In part (b), the shortest segment between two skew lines is perpendicular to both lines, so it is parallel to <span class="chem">b_1 x b_2</span>.
        "(b)에서 꼬인 위치에 있는 두 직선 사이의 최단 선분은 두 직선에 모두 수직이므로 <span class=\"chem\">b_1 x b_2</span>와 평행해요.",
        // EN: Projecting any connecting vector <span class="chem">A_1 A_2</span> onto the unit common normal <span class="chem">n_hat</span> gives the shortest distance <span class="chem">|A_1 A_2 . n_hat|</span>.
        "두 직선 위의 임의의 두 점을 잇는 벡터 <span class=\"chem\">A_1 A_2</span>를 단위 공통 법선벡터 <span class=\"chem\">n_hat</span>에 정사영하면 최단 거리 <span class=\"chem\">|A_1 A_2 . n_hat|</span>을 얻어요.",
      ],
      // EN: <p>(a) Direction vectors <span class="chem">(1, -1, 1)</span> and <span class="chem">(2, 1, -1)</span> are not scalar multiples (not parallel). Equating <span class="chem">x</span> and <span class="chem">y</span>: <span class="chem">1 + lambda = 2 mu</span> and <span class="chem">-lambda = 3 + mu</span>. Adding gives <span class="chem">1 = 3 + 3 mu => mu = -2/3, lambda = -7/3</span>. Checking <span class="chem">z</span>: <span class="chem">2 + (-7/3) = -1/3 != 1 - (-2/3) = 5/3</span>. Thus <span class="chem">L_1</span> and <span class="chem">L_2</span> are skew.</p><p>(b) <span class="chem">(1, -1, 1) x (2, 1, -1) = (0, 3, 3)</span>, so <span class="chem">n_hat = (0, 1/sqrt(2), 1/sqrt(2))</span>. Taking <span class="chem">A_1(1, 0, 2)</span> on <span class="chem">L_1</span> and <span class="chem">A_2(0, 3, 1)</span> on <span class="chem">L_2</span>, <span class="chem">A_1 A_2 = (-1, 3, -1)</span>. The shortest distance is <span class="chem">|A_1 A_2 . n_hat| = |0 + 3 - 1| / sqrt(2) = 2 / sqrt(2) = sqrt(2)</span>.</p>
      answer: "<p>(a) 방향벡터 <span class=\"chem\">(1, -1, 1)</span>과 <span class=\"chem\">(2, 1, -1)</span>은 실수배가 아니므로 평행하지 않아요. <span class=\"chem\">x</span>와 <span class=\"chem\">y</span>를 같다고 놓으면 <span class=\"chem\">1 + lambda = 2 mu</span>, <span class=\"chem\">-lambda = 3 + mu</span>예요. 두 식을 더하면 <span class=\"chem\">1 = 3 + 3 mu => mu = -2/3, lambda = -7/3</span>이에요. <span class=\"chem\">z</span>를 확인하면 <span class=\"chem\">2 + (-7/3) = -1/3 != 1 - (-2/3) = 5/3</span>이므로 <span class=\"chem\">L_1</span>과 <span class=\"chem\">L_2</span>는 꼬인 위치에 있어요.</p><p>(b) <span class=\"chem\">(1, -1, 1) x (2, 1, -1) = (0, 3, 3)</span>이므로 <span class=\"chem\">n_hat = (0, 1/sqrt(2), 1/sqrt(2))</span>이에요. <span class=\"chem\">L_1</span> 위의 점 <span class=\"chem\">A_1(1, 0, 2)</span>와 <span class=\"chem\">L_2</span> 위의 점 <span class=\"chem\">A_2(0, 3, 1)</span>을 잡으면 <span class=\"chem\">A_1 A_2 = (-1, 3, -1)</span>이에요. 최단 거리는 <span class=\"chem\">|A_1 A_2 . n_hat| = |0 + 3 - 1| / sqrt(2) = 2 / sqrt(2) = sqrt(2)</span>예요.</p>",
      markscheme: [
        // EN: R1: notes direction vectors <span class="chem">(1, -1, 1)</span> and <span class="chem">(2, 1, -1)</span> are not scalar multiples.
        "R1: 방향벡터 <span class=\"chem\">(1, -1, 1)</span>과 <span class=\"chem\">(2, 1, -1)</span>이 실수배가 아님을 밝힘.",
        // EN: M1: equates <span class="chem">x, y</span> coordinates and solves for <span class="chem">lambda = -7/3, mu = -2/3</span>.
        "M1: <span class=\"chem\">x, y</span> 좌표를 같다고 놓고 <span class=\"chem\">lambda = -7/3, mu = -2/3</span>을 구함.",
        // EN: A1: shows <span class="chem">z</span>-coordinates disagree (<span class="chem">-1/3 != 5/3</span>) to conclude lines are skew.
        "A1: <span class=\"chem\">z</span>좌표가 일치하지 않음(<span class=\"chem\">-1/3 != 5/3</span>)을 보여 두 직선이 꼬인 위치임을 결론지음.",
        // EN: M1 A1: computes <span class="chem">b_1 x b_2 = (0, 3, 3)</span> and normalizes to <span class="chem">n_hat = (0, 1/sqrt(2), 1/sqrt(2))</span>.
        "M1 A1: <span class=\"chem\">b_1 x b_2 = (0, 3, 3)</span>을 계산하고 단위화하여 <span class=\"chem\">n_hat = (0, 1/sqrt(2), 1/sqrt(2))</span>을 구함.",
        // EN: M1: forms <span class="chem">A_1 A_2 = (-1, 3, -1)</span> and projects onto <span class="chem">n_hat</span> via <span class="chem">|A_1 A_2 . n_hat|</span>.
        "M1: <span class=\"chem\">A_1 A_2 = (-1, 3, -1)</span>을 만들고 <span class=\"chem\">|A_1 A_2 . n_hat|</span>로 <span class=\"chem\">n_hat</span>에 정사영함.",
        // EN: A1 A1: evaluates <span class="chem">|2 / sqrt(2)| = sqrt(2)</span>.
        "A1 A1: <span class=\"chem\">|2 / sqrt(2)| = sqrt(2)</span>를 계산함.",
      ],
    },

  }
});
