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
        // EN: Find the displacement vector <span class="chem">\mathbf{AB} = \mathbf{b} - \mathbf{a} = (3 - 1, 4 - (-2), 1 - 4)</span>.
        "변위벡터 <span class=\"chem\">\\mathbf{AB} = \\mathbf{b} - \\mathbf{a} = (3 - 1, 4 - (-2), 1 - 4)</span>를 구하세요.",
        // EN: Divide <span class="chem">\mathbf{AB}</span> by its magnitude <span class="chem">|\mathbf{AB}|</span> to get the unit direction vector, then multiply by <span class="chem">21</span>.
        "<span class=\"chem\">\\mathbf{AB}</span>를 크기 <span class=\"chem\">|\\mathbf{AB}|</span>로 나누어 단위 방향벡터를 구한 뒤 <span class=\"chem\">21</span>을 곱하세요.",
      ],
      // EN: <p><span class="chem">\mathbf{AB} = (2, 6, -3)</span> with <span class="chem">|\mathbf{AB}| = sqrt(2^2 + 6^2 + (-3)^2) = sqrt(49) = 7</span>. Rescaling to speed 21 gives <span class="chem">\mathbf{v} = (21 / 7)(2, 6, -3) = (6, 18, -9)</span>.</p>
      solution: "<p><span class=\"chem\">\\mathbf{AB} = (2, 6, -3)</span>이고 <span class=\"chem\">|\\mathbf{AB}| = sqrt(2^2 + 6^2 + (-3)^2) = sqrt(49) = 7</span>이에요. 속력 21에 맞게 크기를 조절하면 <span class=\"chem\">\\mathbf{v} = (21 / 7)(2, 6, -3) = (6, 18, -9)</span>예요.</p>",
      misconception: {
        // EN (option B): <span class="chem">(2, 6, -3)</span> is the displacement vector <span class="chem">\mathbf{AB}</span>, whose magnitude is <span class="chem">sqrt(4 + 36 + 9) = 7</span>, not <span class="chem">21</span>.
        "1": "<span class=\"chem\">(2, 6, -3)</span>은 변위벡터 <span class=\"chem\">\\mathbf{AB}</span>로, 크기가 <span class=\"chem\">21</span>이 아니라 <span class=\"chem\">sqrt(4 + 36 + 9) = 7</span>이에요.",
        // EN (option C): You multiplied <span class="chem">\mathbf{AB}</span> by <span class="chem">21</span> without dividing by its magnitude <span class="chem">|\mathbf{AB}| = 7</span> first.
        "2": "먼저 크기 <span class=\"chem\">|\\mathbf{AB}| = 7</span>로 나누지 않고 <span class=\"chem\">\\mathbf{AB}</span>에 바로 <span class=\"chem\">21</span>을 곱했어요.",
        // EN (option D): That points from <span class="chem">B</span> to <span class="chem">A</span> (<span class="chem">a - b</span>) instead of from <span class="chem">A</span> to <span class="chem">B</span> (<span class="chem">b - a</span>).
        "3": "그것은 <span class=\"chem\">A</span>에서 <span class=\"chem\">B</span>(<span class=\"chem\">b - a</span>)가 아니라 <span class=\"chem\">B</span>에서 <span class=\"chem\">A</span>(<span class=\"chem\">a - b</span>)로 향하는 벡터예요.",
      },
    },

    // ── t3-3-q002 · numeric · foundation · AHL · AHL 3.13 · 2 marks
    "t3-3-q002": {
      // EN: <p>Find the value of <span class="chem">k</span> for which the vectors <span class="chem">\mathbf{u} = (k, 2, -3)</span> and <span class="chem">\mathbf{v} = (4, k, 2)</span> are perpendicular.</p>
      stem: "<p>두 벡터 <span class=\"chem\">\\mathbf{u} = (k, 2, -3)</span>와 <span class=\"chem\">\\mathbf{v} = (4, k, 2)</span>가 수직이 되도록 하는 <span class=\"chem\">k</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Two non-zero vectors are perpendicular if and only if <span class="chem">\mathbf{u} \cdot \mathbf{v} = 0</span>.
        "영벡터가 아닌 두 벡터가 수직일 필요충분조건은 <span class=\"chem\">\\mathbf{u} \\cdot \\mathbf{v} = 0</span>이에요.",
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
      // EN: <p>Select <strong>all</strong> statements that are always true for any 3D vectors <span class="chem">\mathbf{u}, \mathbf{v}, \mathbf{w}</span>.</p>
      stem: "<p>임의의 3D 벡터 <span class=\"chem\">\\mathbf{u}, \\mathbf{v}, \\mathbf{w}</span>에 대해 항상 성립하는 명제를 <strong>모두</strong> 고르시오.</p>",
      options: [
        // EN: <span class="chem">\mathbf{u} \cdot \mathbf{v} = \mathbf{v} \cdot \mathbf{u}</span>
        "<span class=\"chem\">\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{v} \\cdot \\mathbf{u}</span>",
        // EN: <span class="chem">\mathbf{u} \times \mathbf{v} = -(\mathbf{v} \times \mathbf{u})</span>
        "<span class=\"chem\">\\mathbf{u} \\times \\mathbf{v} = -(\\mathbf{v} \\times \\mathbf{u})</span>",
        // EN: <span class="chem">(\mathbf{u} \times \mathbf{v}) \cdot \mathbf{u} = 0</span>
        "<span class=\"chem\">(\\mathbf{u} \\times \\mathbf{v}) \\cdot \\mathbf{u} = 0</span>",
        // EN: If <span class="chem">\mathbf{u} \times \mathbf{v} = \mathbf{u} \times \mathbf{w}</span> and <span class="chem">\mathbf{u} != 0</span>, then <span class="chem">\mathbf{v} = \mathbf{w}</span>
        "<span class=\"chem\">\\mathbf{u} \\times \\mathbf{v} = \\mathbf{u} \\times \\mathbf{w}</span>이고 <span class=\"chem\">\\mathbf{u} != 0</span>이면 <span class=\"chem\">\\mathbf{v} = \\mathbf{w}</span>이다",
      ],
      hints: [
        // EN: Check commutativity of dot product, anti-commutativity of cross product, and orthogonality of <span class="chem">\mathbf{u} \times \mathbf{v}</span> to <span class="chem">\mathbf{u}</span>.
        "내적의 교환법칙, 외적의 반교환법칙, 그리고 <span class=\"chem\">\\mathbf{u} \\times \\mathbf{v}</span>가 <span class=\"chem\">\\mathbf{u}</span>에 수직인 성질을 확인하세요.",
        // EN: For the fourth option, test <span class="chem">\mathbf{u} = \mathbf{i}, \mathbf{v} = \mathbf{j}, \mathbf{w} = \mathbf{i} + \mathbf{j}</span>.
        "네 번째 보기에는 <span class=\"chem\">\\mathbf{u} = \\mathbf{i}, \\mathbf{v} = \\mathbf{j}, \\mathbf{w} = \\mathbf{i} + \\mathbf{j}</span>를 넣어 확인해 보세요.",
      ],
      // EN: <p>The dot product is commutative (<span class="chem">\mathbf{u} \cdot \mathbf{v} = \mathbf{v} \cdot \mathbf{u}</span>), the cross product is anti-commutative (<span class="chem">\mathbf{u} \times \mathbf{v} = -(\mathbf{v} \times \mathbf{u})</span>), and <span class="chem">\mathbf{u} \times \mathbf{v}</span> is perpendicular to <span class="chem">\mathbf{u}</span> so <span class="chem">(\mathbf{u} \times \mathbf{v}) \cdot \mathbf{u} = 0</span>. Cancellation fails for cross products.</p>
      solution: "<p>내적은 교환법칙(<span class=\"chem\">\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{v} \\cdot \\mathbf{u}</span>)이 성립하고, 외적은 반교환법칙(<span class=\"chem\">\\mathbf{u} \\times \\mathbf{v} = -(\\mathbf{v} \\times \\mathbf{u})</span>)이 성립하며, <span class=\"chem\">\\mathbf{u} \\times \\mathbf{v}</span>는 <span class=\"chem\">\\mathbf{u}</span>에 수직이므로 <span class=\"chem\">(\\mathbf{u} \\times \\mathbf{v}) \\cdot \\mathbf{u} = 0</span>이에요. 외적에서는 소거법칙이 성립하지 않아요.</p>",
      misconception: {
        // EN (option D): Cross product does not satisfy cancellation: <span class="chem">\mathbf{u} \times (\mathbf{v} - \mathbf{w}) = 0</span> only implies <span class="chem">\mathbf{v} - \mathbf{w}</span> is parallel to <span class="chem">\mathbf{u}</span>, not necessarily <span class="chem">0</span>.
        "3": "외적에서는 소거법칙이 성립하지 않아요: <span class=\"chem\">\\mathbf{u} \\times (\\mathbf{v} - \\mathbf{w}) = 0</span>은 <span class=\"chem\">\\mathbf{v} - \\mathbf{w}</span>가 <span class=\"chem\">\\mathbf{u}</span>와 평행함을 뜻할 뿐 반드시 <span class=\"chem\">0</span>은 아니에요.",
      },
    },

    // ── t3-3-q005 · numeric · foundation · AHL · AHL 3.16 · 4 marks
    "t3-3-q005": {
      // EN: <p>Find the exact area of triangle <span class="chem">ABC</span> with vertices <span class="chem">A(1, 0, 1)</span>, <span class="chem">B(3, 2, 0)</span>, and <span class="chem">C(1, 4, 3)</span>.</p>
      stem: "<p>세 꼭짓점 <span class=\"chem\">A(1, 0, 1)</span>, <span class=\"chem\">B(3, 2, 0)</span>, <span class=\"chem\">C(1, 4, 3)</span>로 이루어진 삼각형 <span class=\"chem\">ABC</span>의 정확한 넓이를 구하시오 (Find).</p>",
      hints: [
        // EN: Form two vectors from vertex <span class="chem">A</span>: <span class="chem">\mathbf{AB} = (2, 2, -1)</span> and <span class="chem">\mathbf{AC} = (0, 4, 2)</span>.
        "꼭짓점 <span class=\"chem\">A</span>에서 출발하는 두 벡터를 만드세요: <span class=\"chem\">\\mathbf{AB} = (2, 2, -1)</span>과 <span class=\"chem\">\\mathbf{AC} = (0, 4, 2)</span>.",
        // EN: Compute <span class="chem">\mathbf{AB} \times \mathbf{AC}</span> and then use <span class="chem">Area = (1/2)|\mathbf{AB} \times \mathbf{AC}|</span>.
        "<span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC}</span>를 계산한 뒤 <span class=\"chem\">Area = (1/2)|\\mathbf{AB} \\times \\mathbf{AC}|</span>를 쓰세요.",
      ],
      // EN: <p><span class="chem">\mathbf{AB} = (2, 2, -1)</span> and <span class="chem">\mathbf{AC} = (0, 4, 2)</span>. Then <span class="chem">\mathbf{AB} \times \mathbf{AC} = (4 - (-4), 0 - 4, 8 - 0) = (8, -4, 8)</span>, which has magnitude <span class="chem">sqrt(64 + 16 + 64) = 12</span>. Thus <span class="chem">Area = (1/2)(12) = 6</span>.</p>
      solution: "<p><span class=\"chem\">\\mathbf{AB} = (2, 2, -1)</span>이고 <span class=\"chem\">\\mathbf{AC} = (0, 4, 2)</span>예요. 그러면 <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC} = (4 - (-4), 0 - 4, 8 - 0) = (8, -4, 8)</span>이고, 크기는 <span class=\"chem\">sqrt(64 + 16 + 64) = 12</span>예요. 따라서 <span class=\"chem\">Area = (1/2)(12) = 6</span>이에요.</p>",
    },

    // ── t3-3-q006 · mcq · foundation · AHL · AHL 3.17 · 2 marks
    "t3-3-q006": {
      // EN: <p>Find the Cartesian equation of the plane passing through <span class="chem">P(2, -1, 3)</span> with normal vector <span class="chem">\mathbf{n} = (4, -2, 1)</span>.</p>
      stem: "<p>점 <span class=\"chem\">P(2, -1, 3)</span>을 지나고 법선벡터가 <span class=\"chem\">\\mathbf{n} = (4, -2, 1)</span>인 평면의 직교 방정식을 구하시오 (Find).</p>",
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
        "<span class=\"chem\">\\mathbf{r} \\cdot \\mathbf{n} = \\mathbf{a} \\cdot \\mathbf{n}</span>을 사용하세요: <span class=\"chem\">4x - 2y + z = 4(2) - 2(-1) + 1(3)</span>.",
      ],
      // EN: <p>Using <span class="chem">\mathbf{r} \cdot \mathbf{n} = \mathbf{a} \cdot \mathbf{n}</span>: <span class="chem">4x - 2y + z = 4(2) - 2(-1) + 1(3) = 8 + 2 + 3 = 13</span>.</p>
      solution: "<p><span class=\"chem\">\\mathbf{r} \\cdot \\mathbf{n} = \\mathbf{a} \\cdot \\mathbf{n}</span>을 쓰면 <span class=\"chem\">4x - 2y + z = 4(2) - 2(-1) + 1(3) = 8 + 2 + 3 = 13</span>이에요.</p>",
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
      // EN: <p>Arrange the steps in the correct logical order to prove that two 3D lines <span class="chem">L_1: \mathbf{r} = \mathbf{a_1} + lambda \mathbf{b_1}</span> and <span class="chem">L_2: \mathbf{r} = \mathbf{a_2} + mu \mathbf{b_2}</span> are <strong>skew</strong>.</p>
      stem: "<p>두 3D 직선 <span class=\"chem\">L_1: \\mathbf{r} = \\mathbf{a_1} + lambda \\mathbf{b_1}</span>과 <span class=\"chem\">L_2: \\mathbf{r} = \\mathbf{a_2} + mu \\mathbf{b_2}</span>가 <strong>꼬인 위치</strong>에 있음을 증명하는 단계를 올바른 논리적 순서로 배열하시오.</p>",
      options: [
        // EN: Show that the direction vectors <span class="chem">\mathbf{b_1}</span> and <span class="chem">\mathbf{b_2}</span> are not scalar multiples (<span class="chem">\mathbf{b_1} != k \mathbf{b_2}</span>), so the lines are not parallel.
        "방향벡터 <span class=\"chem\">\\mathbf{b_1}</span>과 <span class=\"chem\">\\mathbf{b_2}</span>가 실수배가 아님(<span class=\"chem\">\\mathbf{b_1} != k \\mathbf{b_2}</span>)을 보여 두 직선이 평행하지 않음을 확인한다.",
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
      // EN: <p>To prove two lines are skew, first verify <span class="chem">\mathbf{b_1} != k \mathbf{b_2}</span> (not parallel), then equate coordinates with distinct parameters <span class="chem">lambda, mu</span>, solve two equations for <span class="chem">(lambda, mu)</span>, and show the third equation is inconsistent.</p>
      solution: "<p>두 직선이 꼬인 위치임을 증명하려면 먼저 <span class=\"chem\">\\mathbf{b_1} != k \\mathbf{b_2}</span> (평행하지 않음)을 확인하고, 서로 다른 매개변수 <span class=\"chem\">lambda, mu</span>로 좌표를 같다고 놓은 뒤, 두 식에서 <span class=\"chem\">(lambda, mu)</span>를 구해 세 번째 식이 성립하지 않음을 보이면 돼요.</p>",
    },

    // ── t3-3-q008 · numeric · exam · AHL · AHL 3.13 · 4 marks
    "t3-3-q008": {
      // EN: <p>Vectors <span class="chem">\mathbf{u}</span> and <span class="chem">\mathbf{v}</span> satisfy <span class="chem">|\mathbf{u}| = 5</span>, <span class="chem">|\mathbf{v}| = 3</span>, and <span class="chem">|\mathbf{u} + \mathbf{v}| = 7</span>. Find the angle <span class="chem">theta</span> between <span class="chem">\mathbf{u}</span> and <span class="chem">\mathbf{v}</span> in <strong>degrees</strong>.</p>
      stem: "<p>두 벡터 <span class=\"chem\">\\mathbf{u}</span>와 <span class=\"chem\">\\mathbf{v}</span>가 <span class=\"chem\">|\\mathbf{u}| = 5</span>, <span class=\"chem\">|\\mathbf{v}| = 3</span>, <span class=\"chem\">|\\mathbf{u} + \\mathbf{v}| = 7</span>을 만족해요. <span class=\"chem\">\\mathbf{u}</span>와 <span class=\"chem\">\\mathbf{v}</span>가 이루는 각 <span class=\"chem\">theta</span>를 <strong>도(°)</strong> 단위로 구하시오 (Find).</p>",
      hints: [
        // EN: Expand <span class="chem">|\mathbf{u} + \mathbf{v}|^2 = (\mathbf{u} + \mathbf{v}) \cdot (\mathbf{u} + \mathbf{v}) = |\mathbf{u}|^2 + 2(\mathbf{u} \cdot \mathbf{v}) + |\mathbf{v}|^2</span>.
        "<span class=\"chem\">|\\mathbf{u} + \\mathbf{v}|^2 = (\\mathbf{u} + \\mathbf{v}) \\cdot (\\mathbf{u} + \\mathbf{v}) = |\\mathbf{u}|^2 + 2(\\mathbf{u} \\cdot \\mathbf{v}) + |\\mathbf{v}|^2</span>을 전개하세요.",
        // EN: Solve <span class="chem">49 = 25 + 2(\mathbf{u} \cdot \mathbf{v}) + 9</span> for <span class="chem">\mathbf{u} \cdot \mathbf{v}</span>, then use <span class="chem">cos theta = (\mathbf{u} \cdot \mathbf{v}) / (|\mathbf{u}||\mathbf{v}|)</span>.
        "<span class=\"chem\">49 = 25 + 2(\\mathbf{u} \\cdot \\mathbf{v}) + 9</span>에서 <span class=\"chem\">\\mathbf{u} \\cdot \\mathbf{v}</span>를 구한 뒤 <span class=\"chem\">cos theta = (\\mathbf{u} \\cdot \\mathbf{v}) / (|\\mathbf{u}||\\mathbf{v}|)</span>를 쓰세요.",
      ],
      // EN: <p><span class="chem">49 = 5^2 + 2(\mathbf{u} \cdot \mathbf{v}) + 3^2 = 34 + 2(\mathbf{u} \cdot \mathbf{v}) => \mathbf{u} \cdot \mathbf{v} = 7.5</span>. Therefore <span class="chem">cos theta = 7.5 / (5 × 3) = 1/2 => theta = 60°</span>.</p>
      solution: "<p><span class=\"chem\">49 = 5^2 + 2(\\mathbf{u} \\cdot \\mathbf{v}) + 3^2 = 34 + 2(\\mathbf{u} \\cdot \\mathbf{v}) => \\mathbf{u} \\cdot \\mathbf{v} = 7.5</span>예요. 따라서 <span class=\"chem\">cos theta = 7.5 / (5 × 3) = 1/2 => theta = 60°</span>예요.</p>",
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
      // EN: <p>Find the shortest distance from the point <span class="chem">P(1, 3, -2)</span> to the line <span class="chem">L: \mathbf{r} = (1, 0, 1) + lambda(2, 1, -2)</span>.</p>
      stem: "<p>점 <span class=\"chem\">P(1, 3, -2)</span>에서 직선 <span class=\"chem\">L: \\mathbf{r} = (1, 0, 1) + lambda(2, 1, -2)</span>까지의 최단 거리를 구하시오 (Find).</p>",
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
        "<span class=\"chem\">P</span>에서 <span class=\"chem\">L</span>에 내린 수선의 발을 <span class=\"chem\">F(1 + 2 lambda, lambda, 1 - 2 lambda)</span>라 두세요.",
        // EN: Solve <span class="chem">\mathbf{PF} \cdot (2, 1, -2) = 0</span> for <span class="chem">lambda</span>, then find <span class="chem">|\mathbf{PF}|</span>.
        "<span class=\"chem\">\\mathbf{PF} \\cdot (2, 1, -2) = 0</span>을 풀어 <span class=\"chem\">lambda</span>를 구한 뒤 <span class=\"chem\">|\\mathbf{PF}|</span>를 구하세요.",
      ],
      // EN: <p><span class="chem">\mathbf{PF} = (2 lambda, lambda - 3, 3 - 2 lambda)</span>. Setting <span class="chem">\mathbf{PF} \cdot (2, 1, -2) = 0</span> gives <span class="chem">4 lambda + lambda - 3 - 6 + 4 lambda = 9 lambda - 9 = 0 => lambda = 1</span>. Thus <span class="chem">\mathbf{PF} = (2, -2, 1)</span> and <span class="chem">|\mathbf{PF}| = sqrt(4 + 4 + 1) = 3</span>.</p>
      solution: "<p><span class=\"chem\">\\mathbf{PF} = (2 lambda, lambda - 3, 3 - 2 lambda)</span>예요. <span class=\"chem\">\\mathbf{PF} \\cdot (2, 1, -2) = 0</span>으로 놓으면 <span class=\"chem\">4 lambda + lambda - 3 - 6 + 4 lambda = 9 lambda - 9 = 0 => lambda = 1</span>이에요. 따라서 <span class=\"chem\">\\mathbf{PF} = (2, -2, 1)</span>이고 <span class=\"chem\">|\\mathbf{PF}| = sqrt(4 + 4 + 1) = 3</span>이에요.</p>",
      misconception: {
        // EN (option B): <span class="chem">3*sqrt(2)</span> is the distance from <span class="chem">P</span> to the starting point <span class="chem">A(1, 0, 1)</span>, not the perpendicular distance to the line.
        "1": "<span class=\"chem\">3*sqrt(2)</span>는 직선까지의 수직 거리가 아니라 <span class=\"chem\">P</span>에서 기준점 <span class=\"chem\">A(1, 0, 1)</span>까지의 거리예요.",
        // EN (option C): Remember to take the square root of <span class="chem">2^2 + (-2)^2 + 1^2 = 9</span>.
        "2": "<span class=\"chem\">2^2 + (-2)^2 + 1^2 = 9</span>에 제곱근을 취하는 것을 잊지 마세요.",
        // EN (option D): Check your <span class="chem">\mathbf{PF} \cdot \mathbf{b} = 0</span> equation: <span class="chem">2(2 lambda) + 1(lambda - 3) - 2(3 - 2 lambda) = 9 lambda - 9 = 0 => lambda = 1</span>.
        "3": "<span class=\"chem\">\\mathbf{PF} \\cdot \\mathbf{b} = 0</span> 식을 다시 확인하세요: <span class=\"chem\">2(2 lambda) + 1(lambda - 3) - 2(3 - 2 lambda) = 9 lambda - 9 = 0 => lambda = 1</span>이에요.",
      },
    },

    // ── t3-3-q011 · numeric · exam · AHL · AHL 3.18 · 4 marks
    "t3-3-q011": {
      // EN: <p>Find the acute angle <span class="chem">phi</span> (in degrees, correct to 3 significant figures) between the line <span class="chem">\mathbf{r} = (1, 2, 0) + lambda(2, 1, 2)</span> and the plane <span class="chem">2x + 2y - z = 7</span>.</p>
      stem: "<p>직선 <span class=\"chem\">\\mathbf{r} = (1, 2, 0) + lambda(2, 1, 2)</span>와 평면 <span class=\"chem\">2x + 2y - z = 7</span>이 이루는 예각 <span class=\"chem\">phi</span>(도 단위, 유효숫자 3자리)를 구하시오 (Find).</p>",
      hints: [
        // EN: Use the line-plane angle formula <span class="chem">sin phi = |\mathbf{b} \cdot \mathbf{n}| / (|\mathbf{b}||\mathbf{n}|)</span> with <span class="chem">b = (2, 1, 2)</span> and <span class="chem">\mathbf{n} = (2, 2, -1)</span>.
        "<span class=\"chem\">b = (2, 1, 2)</span>, <span class=\"chem\">\\mathbf{n} = (2, 2, -1)</span>로 놓고 직선-평면 각 공식 <span class=\"chem\">sin phi = |\\mathbf{b} \\cdot \\mathbf{n}| / (|\\mathbf{b}||\\mathbf{n}|)</span>을 쓰세요.",
        // EN: Compute <span class="chem">sin phi = |4 + 2 - 2| / (3 × 3) = 4 / 9</span>, then take <span class="chem">arcsin(4/9)</span> in degrees.
        "<span class=\"chem\">sin phi = |4 + 2 - 2| / (3 × 3) = 4 / 9</span>를 계산한 뒤 도(°) 단위로 <span class=\"chem\">arcsin(4/9)</span>를 구하세요.",
      ],
      // EN: <p>With <span class="chem">b = (2, 1, 2)</span> (<span class="chem">|b| = 3</span>) and <span class="chem">\mathbf{n} = (2, 2, -1)</span> (<span class="chem">|\mathbf{n}| = 3</span>), <span class="chem">sin phi = |2(2) + 1(2) + 2(-1)| / (3 × 3) = 4/9</span>. Hence <span class="chem">phi = arcsin(4/9) ≈ 26.4°</span>.</p>
      solution: "<p><span class=\"chem\">b = (2, 1, 2)</span> (<span class=\"chem\">|b| = 3</span>)이고 <span class=\"chem\">\\mathbf{n} = (2, 2, -1)</span> (<span class=\"chem\">|\\mathbf{n}| = 3</span>)이므로 <span class=\"chem\">sin phi = |2(2) + 1(2) + 2(-1)| / (3 × 3) = 4/9</span>예요. 따라서 <span class=\"chem\">phi = arcsin(4/9) ≈ 26.4°</span>예요.</p>",
    },

    // ── t3-3-q012 · numeric · exam · AHL · AHL 3.18 · 3 marks
    "t3-3-q012": {
      // EN: <p>The line <span class="chem">\mathbf{r} = (1, 2, -1) + lambda(2, -1, 3)</span> intersects the plane <span class="chem">x + 2y + z = 12</span> at point <span class="chem">Q</span>. Find the <span class="chem">z</span>-coordinate of <span class="chem">Q</span>.</p>
      stem: "<p>직선 <span class=\"chem\">\\mathbf{r} = (1, 2, -1) + lambda(2, -1, 3)</span>이 평면 <span class=\"chem\">x + 2y + z = 12</span>와 점 <span class=\"chem\">Q</span>에서 만나요. <span class=\"chem\">Q</span>의 <span class=\"chem\">z</span>좌표를 구하시오 (Find).</p>",
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
        // EN: Extract the normal vectors <span class="chem">\mathbf{n_1} = (1, -1, sqrt(2))</span> and <span class="chem">\mathbf{n_2} = (1, 1, sqrt(2))</span>.
        "법선벡터 <span class=\"chem\">\\mathbf{n_1} = (1, -1, sqrt(2))</span>과 <span class=\"chem\">\\mathbf{n_2} = (1, 1, sqrt(2))</span>를 읽어 내세요.",
        // EN: Compute <span class="chem">cos theta = |\mathbf{n_1} \cdot \mathbf{n_2}| / (|\mathbf{n_1}||\mathbf{n_2}|)</span>.
        "<span class=\"chem\">cos theta = |\\mathbf{n_1} \\cdot \\mathbf{n_2}| / (|\\mathbf{n_1}||\\mathbf{n_2}|)</span>를 계산하세요.",
      ],
      // EN: <p><span class="chem">|\mathbf{n_1}| = sqrt(1 + 1 + 2) = 2</span>, <span class="chem">|\mathbf{n_2}| = 2</span>, and <span class="chem">\mathbf{n_1} \cdot \mathbf{n_2} = 1 - 1 + 2 = 2</span>. Thus <span class="chem">cos theta = 2 / (2 × 2) = 1/2 => theta = 60°</span> (<span class="chem">pi/3</span>).</p>
      solution: "<p><span class=\"chem\">|\\mathbf{n_1}| = sqrt(1 + 1 + 2) = 2</span>, <span class=\"chem\">|\\mathbf{n_2}| = 2</span>이고 <span class=\"chem\">\\mathbf{n_1} \\cdot \\mathbf{n_2} = 1 - 1 + 2 = 2</span>예요. 따라서 <span class=\"chem\">cos theta = 2 / (2 × 2) = 1/2 => theta = 60°</span> (<span class=\"chem\">pi/3</span>)이에요.</p>",
      misconception: {
        // EN (option B): The angle between two planes uses <span class="chem">cos theta = |\mathbf{n_1} \cdot \mathbf{n_2}| / (|\mathbf{n_1}||\mathbf{n_2}|) = 1/2</span>, not <span class="chem">sin theta = 1/2</span>.
        "1": "두 평면이 이루는 각은 <span class=\"chem\">sin theta = 1/2</span>이 아니라 <span class=\"chem\">cos theta = |\\mathbf{n_1} \\cdot \\mathbf{n_2}| / (|\\mathbf{n_1}||\\mathbf{n_2}|) = 1/2</span>을 써요.",
        // EN (option C): Check <span class="chem">|\mathbf{n_1}| = sqrt(1 + 1 + 2) = 2</span> and <span class="chem">\mathbf{n_1} \cdot \mathbf{n_2} = 1 - 1 + 2 = 2</span>, giving <span class="chem">cos theta = 2 / 4 = 1/2</span>.
        "2": "<span class=\"chem\">|\\mathbf{n_1}| = sqrt(1 + 1 + 2) = 2</span>이고 <span class=\"chem\">\\mathbf{n_1} \\cdot \\mathbf{n_2} = 1 - 1 + 2 = 2</span>이므로 <span class=\"chem\">cos theta = 2 / 4 = 1/2</span>이에요.",
        // EN (option D): The question asks for the <em>acute</em> angle between the planes.
        "3": "문제에서 두 평면이 이루는 <em>예각</em>을 물었어요.",
      },
    },

    // ── t3-3-q014 · short · exam · AHL · AHL 3.16–3.18 · 7 marks
    "t3-3-q014": {
      // EN: <p>The points <span class="chem">A(1, 1, 0)</span>, <span class="chem">B(2, 0, 2)</span>, and <span class="chem">C(0, 2, 1)</span> lie on a plane <span class="chem">Pi</span>.</p><p>(a) Find <span class="chem">\mathbf{AB} \times \mathbf{AC}</span> and hence show that the Cartesian equation of <span class="chem">Pi</span> is <span class="chem">x + y = 2</span>. <strong>[4 marks]</strong></p><p>(b) Find the coordinates of the point <span class="chem">F</span> on <span class="chem">Pi</span> that is closest to <span class="chem">P(3, 5, 2)</span>. <strong>[3 marks]</strong></p>
      stem: "<p>세 점 <span class=\"chem\">A(1, 1, 0)</span>, <span class=\"chem\">B(2, 0, 2)</span>, <span class=\"chem\">C(0, 2, 1)</span>이 평면 <span class=\"chem\">Pi</span> 위에 있다.</p><p>(a) <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC}</span>를 구하고 (Find), 이를 이용하여 (hence) <span class=\"chem\">Pi</span>의 직교 방정식이 <span class=\"chem\">x + y = 2</span>임을 보이시오 (show that). <strong>[4 marks]</strong></p><p>(b) <span class=\"chem\">Pi</span> 위에서 점 <span class=\"chem\">P(3, 5, 2)</span>에 가장 가까운 점 <span class=\"chem\">F</span>의 좌표를 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: For part (b), the closest point <span class="chem">F</span> lies where the line through <span class="chem">P</span> with direction <span class="chem">\mathbf{n} = (1, 1, 0)</span> meets the plane <span class="chem">Pi</span>.
        "(b)에서 가장 가까운 점 <span class=\"chem\">F</span>는 <span class=\"chem\">P</span>를 지나고 방향이 <span class=\"chem\">\\mathbf{n} = (1, 1, 0)</span>인 직선이 평면 <span class=\"chem\">Pi</span>와 만나는 점이에요.",
      ],
      // EN: <p>(a) <span class="chem">\mathbf{AB} = (1, -1, 2)</span> and <span class="chem">\mathbf{AC} = (-1, 1, 1)</span>. Their cross product is <span class="chem">\mathbf{AB} \times \mathbf{AC} = (-3, -3, 0)</span>, so <span class="chem">\mathbf{n} = (1, 1, 0)</span> is a normal vector. Using <span class="chem">A(1, 1, 0)</span>: <span class="chem">1(x) + 1(y) + 0(z) = 1 + 1 = 2 => x + y = 2</span>.</p><p>(b) The line through <span class="chem">P</span> perpendicular to <span class="chem">Pi</span> is <span class="chem">\mathbf{r} = (3, 5, 2) + t(1, 1, 0)</span>. Substituting into <span class="chem">x + y = 2</span> gives <span class="chem">(3 + t) + (5 + t) = 2 => 2t = -6 => t = -3</span>. Thus <span class="chem">F = (0, 2, 2)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">\\mathbf{AB} = (1, -1, 2)</span>, <span class=\"chem\">\\mathbf{AC} = (-1, 1, 1)</span>이에요. 외적은 <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC} = (-3, -3, 0)</span>이므로 <span class=\"chem\">\\mathbf{n} = (1, 1, 0)</span>이 법선벡터예요. <span class=\"chem\">A(1, 1, 0)</span>을 쓰면 <span class=\"chem\">1(x) + 1(y) + 0(z) = 1 + 1 = 2 => x + y = 2</span>예요.</p><p>(b) <span class=\"chem\">P</span>를 지나고 <span class=\"chem\">Pi</span>에 수직인 직선은 <span class=\"chem\">\\mathbf{r} = (3, 5, 2) + t(1, 1, 0)</span>이에요. <span class=\"chem\">x + y = 2</span>에 대입하면 <span class=\"chem\">(3 + t) + (5 + t) = 2 => 2t = -6 => t = -3</span>이므로 <span class=\"chem\">F = (0, 2, 2)</span>예요.</p>",
      markscheme: [
        // EN: A1: finds <span class="chem">\mathbf{AB} = (1, -1, 2)</span> and <span class="chem">\mathbf{AC} = (-1, 1, 1)</span>.
        "A1: <span class=\"chem\">\\mathbf{AB} = (1, -1, 2)</span>와 <span class=\"chem\">\\mathbf{AC} = (-1, 1, 1)</span>을 구함.",
        // EN: M1: computes the cross product <span class="chem">\mathbf{AB} \times \mathbf{AC}</span>.
        "M1: 외적 <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC}</span>를 계산함.",
        // EN: A1: obtains <span class="chem">\mathbf{AB} \times \mathbf{AC} = (-3, -3, 0)</span> (or any non-zero multiple).
        "A1: <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC} = (-3, -3, 0)</span> (또는 0이 아닌 임의의 실수배)를 얻음.",
        // EN: A1: substitutes point <span class="chem">A</span> (or <span class="chem">B, C</span>) into <span class="chem">x + y = d</span> to find <span class="chem">d = 1 + 1 = 2</span>, so <span class="chem">x + y = 2</span> (AG).
        "A1: 점 <span class=\"chem\">A</span> (또는 <span class=\"chem\">B, C</span>)를 <span class=\"chem\">x + y = d</span>에 대입하여 <span class=\"chem\">d = 1 + 1 = 2</span>를 구하므로 <span class=\"chem\">x + y = 2</span> (AG).",
        // EN: M1: writes normal line through <span class="chem">P</span> as <span class="chem">\mathbf{r} = (3, 5, 2) + t(1, 1, 0)</span>.
        "M1: <span class=\"chem\">P</span>를 지나는 법선을 <span class=\"chem\">\\mathbf{r} = (3, 5, 2) + t(1, 1, 0)</span>으로 세움.",
        // EN: M1: substitutes into <span class="chem">x + y = 2</span> to find <span class="chem">t = -3</span>.
        "M1: <span class=\"chem\">x + y = 2</span>에 대입하여 <span class=\"chem\">t = -3</span>을 구함.",
        // EN: A1: states <span class="chem">F(0, 2, 2)</span>.
        "A1: <span class=\"chem\">F(0, 2, 2)</span>를 답함.",
      ],
    },

    // ── t3-3-q015 · numeric · challenge · AHL · AHL 3.18 · 5 marks
    "t3-3-q015": {
      // EN: <p>The planes <span class="chem">Pi_1: x + y + z = 6</span> and <span class="chem">Pi_2: 2x - y + z = 3</span> intersect in a line <span class="chem">L</span>. Find the exact distance from the origin <span class="chem">O(0, 0, 0)</span> to the point where <span class="chem">L</span> crosses the <span class="chem">xy</span>-plane (<span class="chem">z = 0</span>).</p>
      stem: "<p>두 평면 <span class=\"chem\">Pi_1: x + y + z = 6</span>과 <span class=\"chem\">Pi_2: 2x - y + z = 3</span>이 직선 <span class=\"chem\">L</span>에서 만나요. <span class=\"chem\">L</span>이 <span class=\"chem\">xy</span>평면(<span class=\"chem\">z = 0</span>)과 만나는 점에서 원점 <span class=\"chem\">O(0, 0, 0)</span>까지의 정확한 거리를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: you do not need the whole line <span class="chem">L</span>. The point where <span class="chem">L</span> crosses the <span class="chem">xy</span>-plane lies on both planes and has <span class="chem">z = 0</span>.
        "해석: 직선 <span class=\"chem\">L</span> 전체를 구할 필요는 없어요. <span class=\"chem\">L</span>이 <span class=\"chem\">xy</span>평면을 지나는 점은 두 평면 위에 모두 있고 <span class=\"chem\">z = 0</span>이에요.",
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
        // EN: Decode: the reflection <span class="chem">P'</span> is as far behind the plane as <span class="chem">P</span> is in front of it, so <span class="chem">PP'</span> is twice the perpendicular distance from <span class="chem">P</span> to the plane.
        "해석: 대칭점 <span class=\"chem\">P'</span>은 <span class=\"chem\">P</span>가 평면 앞에 있는 거리만큼 평면 뒤에 있으므로, <span class=\"chem\">PP'</span>은 <span class=\"chem\">P</span>에서 평면까지의 수직 거리의 2배예요.",
        // EN: The line through <span class="chem">P</span> perpendicular to the plane is <span class="chem">\mathbf{r} = (4, -1, 3) + t(1, -2, 2)</span>.
        "<span class=\"chem\">P</span>를 지나고 평면에 수직인 직선은 <span class=\"chem\">\\mathbf{r} = (4, -1, 3) + t(1, -2, 2)</span>예요.",
        // EN: Find <span class="chem">t</span> at the foot <span class="chem">F</span> on the plane; then <span class="chem">PP' = 2 \mathbf{PF}</span>, so <span class="chem">|PP'| = 2|t||(1, -2, 2)|</span>.
        "평면 위의 수선의 발 <span class=\"chem\">F</span>에서 <span class=\"chem\">t</span>를 구하세요; 그러면 <span class=\"chem\">PP' = 2 \\mathbf{PF}</span>이므로 <span class=\"chem\">|PP'| = 2|t||(1, -2, 2)|</span>예요.",
      ],
      // EN: <p>Substituting <span class="chem">(4 + t, -1 - 2t, 3 + 2t)</span> into <span class="chem">x - 2y + 2z = 3</span> gives <span class="chem">(4 + t) - 2(-1 - 2t) + 2(3 + 2t) = 3 => 12 + 9t = 3 => t = -1</span>. Thus <span class="chem">\mathbf{PF} = (-1, 2, -2)</span> has length <span class="chem">3</span>, and the distance <span class="chem">|PP'| = 2 × 3 = 6</span>.</p>
      solution: "<p><span class=\"chem\">(4 + t, -1 - 2t, 3 + 2t)</span>를 <span class=\"chem\">x - 2y + 2z = 3</span>에 대입하면 <span class=\"chem\">(4 + t) - 2(-1 - 2t) + 2(3 + 2t) = 3 => 12 + 9t = 3 => t = -1</span>이에요. 따라서 <span class=\"chem\">\\mathbf{PF} = (-1, 2, -2)</span>의 길이는 <span class=\"chem\">3</span>이고, 거리 <span class=\"chem\">|PP'| = 2 × 3 = 6</span>이에요.</p>",
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
        // EN: Decode: "meet along a common line" means the system has infinitely many solutions, so after eliminating <span class="chem">x</span> the two remaining equations must be the same equation.
        "해석: \"공통 직선을 따라 만난다\"는 연립방정식의 해가 무수히 많다는 뜻이므로, <span class=\"chem\">x</span>를 소거한 뒤 남은 두 방정식은 같은 방정식이어야 해요.",
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
      // EN: <p>Consider the two lines <span class="chem">L_1: \mathbf{r} = (1, 0, 2) + lambda(1, -1, 1)</span> and <span class="chem">L_2: \mathbf{r} = (0, 3, 1) + mu(2, 1, -1)</span>.</p><p>(a) Show that <span class="chem">L_1</span> and <span class="chem">L_2</span> are skew. <strong>[3 marks]</strong></p><p>(b) Find a unit vector <span class="chem">\mathbf{n̂}</span> perpendicular to both <span class="chem">L_1</span> and <span class="chem">L_2</span>, and hence find the exact shortest distance between <span class="chem">L_1</span> and <span class="chem">L_2</span>. <strong>[5 marks]</strong></p>
      stem: "<p>두 직선 <span class=\"chem\">L_1: \\mathbf{r} = (1, 0, 2) + lambda(1, -1, 1)</span>과 <span class=\"chem\">L_2: \\mathbf{r} = (0, 3, 1) + mu(2, 1, -1)</span>을 생각하자.</p><p>(a) <span class=\"chem\">L_1</span>과 <span class=\"chem\">L_2</span>가 꼬인 위치에 있음을 보이시오 (Show that). <strong>[3 marks]</strong></p><p>(b) <span class=\"chem\">L_1</span>과 <span class=\"chem\">L_2</span>에 모두 수직인 단위벡터 <span class=\"chem\">\\mathbf{n̂}</span>을 구하고, 이를 이용하여 (hence) <span class=\"chem\">L_1</span>과 <span class=\"chem\">L_2</span> 사이의 정확한 최단 거리를 구하시오 (Find). <strong>[5 marks]</strong></p>",
      hints: [
        // EN: Decode: "skew" means not parallel and not intersecting, so part (a) must rule out both. In part (b) the shortest distance is measured along the common perpendicular.
        "해석: \"꼬인 위치\"는 평행하지도 않고 만나지도 않는다는 뜻이므로, (a)에서는 두 경우를 모두 배제해야 해요. (b)에서 최단 거리는 공통수선을 따라 재요.",
        // EN: In part (b), the shortest segment between two skew lines is perpendicular to both lines, so it is parallel to <span class="chem">\mathbf{b_1} \times \mathbf{b_2}</span>.
        "(b)에서 꼬인 위치에 있는 두 직선 사이의 최단 선분은 두 직선에 모두 수직이므로 <span class=\"chem\">\\mathbf{b_1} \\times \\mathbf{b_2}</span>와 평행해요.",
        // EN: Projecting any connecting vector <span class="chem">\mathbf{A_1A_2}</span> onto the unit common normal <span class="chem">\mathbf{n̂}</span> gives the shortest distance <span class="chem">|\mathbf{A_1A_2} \cdot \mathbf{n̂}|</span>.
        "두 직선 위의 임의의 두 점을 잇는 벡터 <span class=\"chem\">\\mathbf{A_1A_2}</span>를 단위 공통 법선벡터 <span class=\"chem\">\\mathbf{n̂}</span>에 정사영하면 최단 거리 <span class=\"chem\">|\\mathbf{A_1A_2} \\cdot \\mathbf{n̂}|</span>을 얻어요.",
      ],
      // EN: <p>(a) Direction vectors <span class="chem">(1, -1, 1)</span> and <span class="chem">(2, 1, -1)</span> are not scalar multiples (not parallel). Equating <span class="chem">x</span> and <span class="chem">y</span>: <span class="chem">1 + lambda = 2 mu</span> and <span class="chem">-lambda = 3 + mu</span>. Adding gives <span class="chem">1 = 3 + 3 mu => mu = -2/3, lambda = -7/3</span>. Checking <span class="chem">z</span>: <span class="chem">2 + (-7/3) = -1/3 != 1 - (-2/3) = 5/3</span>. Thus <span class="chem">L_1</span> and <span class="chem">L_2</span> are skew.</p><p>(b) <span class="chem">(1, -1, 1) \times (2, 1, -1) = (0, 3, 3)</span>, so <span class="chem">\mathbf{n̂} = (0, 1/sqrt(2), 1/sqrt(2))</span>. Taking <span class="chem">A_1(1, 0, 2)</span> on <span class="chem">L_1</span> and <span class="chem">A_2(0, 3, 1)</span> on <span class="chem">L_2</span>, <span class="chem">\mathbf{A_1A_2} = (-1, 3, -1)</span>. The shortest distance is <span class="chem">|\mathbf{A_1A_2} \cdot \mathbf{n̂}| = |0 + 3 - 1| / sqrt(2) = 2 / sqrt(2) = sqrt(2)</span>.</p>
      answer: "<p>(a) 방향벡터 <span class=\"chem\">(1, -1, 1)</span>과 <span class=\"chem\">(2, 1, -1)</span>은 실수배가 아니므로 평행하지 않아요. <span class=\"chem\">x</span>와 <span class=\"chem\">y</span>를 같다고 놓으면 <span class=\"chem\">1 + lambda = 2 mu</span>, <span class=\"chem\">-lambda = 3 + mu</span>예요. 두 식을 더하면 <span class=\"chem\">1 = 3 + 3 mu => mu = -2/3, lambda = -7/3</span>이에요. <span class=\"chem\">z</span>를 확인하면 <span class=\"chem\">2 + (-7/3) = -1/3 != 1 - (-2/3) = 5/3</span>이므로 <span class=\"chem\">L_1</span>과 <span class=\"chem\">L_2</span>는 꼬인 위치에 있어요.</p><p>(b) <span class=\"chem\">(1, -1, 1) \\times (2, 1, -1) = (0, 3, 3)</span>이므로 <span class=\"chem\">\\mathbf{n̂} = (0, 1/sqrt(2), 1/sqrt(2))</span>이에요. <span class=\"chem\">L_1</span> 위의 점 <span class=\"chem\">A_1(1, 0, 2)</span>와 <span class=\"chem\">L_2</span> 위의 점 <span class=\"chem\">A_2(0, 3, 1)</span>을 잡으면 <span class=\"chem\">\\mathbf{A_1A_2} = (-1, 3, -1)</span>이에요. 최단 거리는 <span class=\"chem\">|\\mathbf{A_1A_2} \\cdot \\mathbf{n̂}| = |0 + 3 - 1| / sqrt(2) = 2 / sqrt(2) = sqrt(2)</span>예요.</p>",
      markscheme: [
        // EN: R1: notes direction vectors <span class="chem">(1, -1, 1)</span> and <span class="chem">(2, 1, -1)</span> are not scalar multiples.
        "R1: 방향벡터 <span class=\"chem\">(1, -1, 1)</span>과 <span class=\"chem\">(2, 1, -1)</span>이 실수배가 아님을 밝힘.",
        // EN: M1: equates <span class="chem">x, y</span> coordinates and solves for <span class="chem">lambda = -7/3, mu = -2/3</span>.
        "M1: <span class=\"chem\">x, y</span> 좌표를 같다고 놓고 <span class=\"chem\">lambda = -7/3, mu = -2/3</span>을 구함.",
        // EN: A1: shows <span class="chem">z</span>-coordinates disagree (<span class="chem">-1/3 != 5/3</span>) to conclude lines are skew.
        "A1: <span class=\"chem\">z</span>좌표가 일치하지 않음(<span class=\"chem\">-1/3 != 5/3</span>)을 보여 두 직선이 꼬인 위치임을 결론지음.",
        // EN: M1: computes <span class="chem">\mathbf{b_1} \times \mathbf{b_2} = (0, 3, 3)</span>.
        "M1: <span class=\"chem\">\\mathbf{b_1} \\times \\mathbf{b_2} = (0, 3, 3)</span>을 계산함.",
        // EN: A1: normalizes to <span class="chem">\mathbf{n̂} = (0, 1/sqrt(2), 1/sqrt(2))</span>.
        "A1: 단위화하여 <span class=\"chem\">\\mathbf{n̂} = (0, 1/sqrt(2), 1/sqrt(2))</span>을 구함.",
        // EN: M1: forms <span class="chem">\mathbf{A_1A_2} = (-1, 3, -1)</span> and projects onto <span class="chem">\mathbf{n̂}</span> via <span class="chem">|\mathbf{A_1A_2} \cdot \mathbf{n̂}|</span>.
        "M1: <span class=\"chem\">\\mathbf{A_1A_2} = (-1, 3, -1)</span>을 만들고 <span class=\"chem\">|\\mathbf{A_1A_2} \\cdot \\mathbf{n̂}|</span>로 <span class=\"chem\">\\mathbf{n̂}</span>에 정사영함.",
        // EN: A1: obtains <span class="chem">|\mathbf{A_1A_2} \cdot \mathbf{n̂}| = |0 + 3 - 1| / sqrt(2) = 2 / sqrt(2)</span>.
        "A1: <span class=\"chem\">|\\mathbf{A_1A_2} \\cdot \\mathbf{n̂}| = |0 + 3 - 1| / sqrt(2) = 2 / sqrt(2)</span>를 얻음.",
        // EN: A1: simplifies the shortest distance to <span class="chem">sqrt(2)</span>.
        "A1: 최단 거리를 <span class=\"chem\">sqrt(2)</span>로 간단히 함.",
      ],
    },

  }
});

/* Added on 2026-11-14: translations of the new questions t3-3-q019 to t3-3-q059. */
S1.i18n.register('ko', 't3-3.q', {
  questions: {

    // ── t3-3-q019 · mcq · foundation · AHL · AHL 3.12 · 2 marks
    "t3-3-q019": {
      // EN: <p>Let <span class="chem">\mathbf{v} = 2\mathbf{i} - 6\mathbf{j} + 3\mathbf{k}</span>. Which of the following is the unit vector in the same direction as <span class="chem">\mathbf{v}</span>?</p>
      stem: "<p><span class=\"chem\">\\mathbf{v} = 2\\mathbf{i} - 6\\mathbf{j} + 3\\mathbf{k}</span>라 하자. 다음 중 <span class=\"chem\">\\mathbf{v}</span>와 같은 방향의 단위벡터는 무엇인가요?</p>",
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
        "<span class=\"chem\">\\mathbf{v}</span>와 같은 방향의 단위벡터는 <span class=\"chem\">\\mathbf{v} / |\\mathbf{v}|</span>예요.",
        // EN: Find <span class="chem">|\mathbf{v}| = sqrt(2^2 + (-6)^2 + 3^2)</span>.
        "<span class=\"chem\">|\\mathbf{v}| = sqrt(2^2 + (-6)^2 + 3^2)</span>를 구해요.",
      ],
      // EN: <p><span class="chem">|\mathbf{v}| = sqrt(4 + 36 + 9) = sqrt(49) = 7</span>, so the unit vector is <span class="chem">\mathbf{v} / 7 = (1/7)(2\mathbf{i} - 6\mathbf{j} + 3\mathbf{k})</span>.</p>
      solution: "<p><span class=\"chem\">|\\mathbf{v}| = sqrt(4 + 36 + 9) = sqrt(49) = 7</span>이므로 단위벡터는 <span class=\"chem\">\\mathbf{v} / 7 = (1/7)(2\\mathbf{i} - 6\\mathbf{j} + 3\\mathbf{k})</span>예요.</p>",
      misconception: {
        // EN (option B): You divided by <span class="chem">|\mathbf{v}|^2 = 49</span> instead of by <span class="chem">|\mathbf{v}| = 7</span>. This vector has length <span class="chem">1/7</span>, not 1.
        "1": "<span class=\"chem\">|\\mathbf{v}| = 7</span>이 아니라 <span class=\"chem\">|\\mathbf{v}|^2 = 49</span>로 나누었어요. 이 벡터의 크기는 1이 아니라 <span class=\"chem\">1/7</span>이에요.",
        // EN (option C): You divided by <span class="chem">2 + 6 + 3 = 11</span>, the sum of the sizes of the components. The magnitude is <span class="chem">sqrt(2^2 + 6^2 + 3^2) = 7</span>.
        "2": "성분의 크기의 합인 <span class=\"chem\">2 + 6 + 3 = 11</span>로 나누었어요. 벡터의 크기는 <span class=\"chem\">sqrt(2^2 + 6^2 + 3^2) = 7</span>이에요.",
        // EN (option D): This has length 1 but points the opposite way to <span class="chem">\mathbf{v}</span>; the question asks for the same direction.
        "3": "크기는 1이지만 <span class=\"chem\">\\mathbf{v}</span>와 반대 방향이에요. 문제는 같은 방향을 묻고 있어요.",
      },
    },

    // ── t3-3-q020 · numeric · foundation · AHL · AHL 3.12–3.13 · 2 marks
    "t3-3-q020": {
      // EN: <p>The vectors <span class="chem">\mathbf{a} = (2, -3, p)</span> and <span class="chem">\mathbf{b} = (-6, 9, 12)</span> are parallel. Find the value of <span class="chem">p</span>.</p>
      stem: "<p>두 벡터 <span class=\"chem\">\\mathbf{a} = (2, -3, p)</span>와 <span class=\"chem\">\\mathbf{b} = (-6, 9, 12)</span>가 평행해요. <span class=\"chem\">p</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Parallel vectors are scalar multiples of each other: <span class="chem">\mathbf{b} = k\mathbf{a}</span> for some scalar <span class="chem">k</span>.
        "평행한 벡터는 서로의 실수배예요. 어떤 스칼라 <span class=\"chem\">k</span>에 대해 <span class=\"chem\">\\mathbf{b} = k\\mathbf{a}</span>예요.",
        // EN: Compare the <span class="chem">x</span>-components to find <span class="chem">k</span>, then use the <span class="chem">z</span>-components.
        "<span class=\"chem\">x</span>성분을 비교하여 <span class=\"chem\">k</span>를 구한 다음 <span class=\"chem\">z</span>성분을 이용해요.",
      ],
      // EN: <p>From the <span class="chem">x</span>- and <span class="chem">y</span>-components, <span class="chem">\mathbf{b} = -3\mathbf{a}</span> (<span class="chem">-6 = -3(2)</span>, <span class="chem">9 = -3(-3)</span>). Then <span class="chem">12 = -3p</span>, so <span class="chem">p = -4</span>.</p>
      solution: "<p><span class=\"chem\">x</span>성분과 <span class=\"chem\">y</span>성분에서 <span class=\"chem\">\\mathbf{b} = -3\\mathbf{a}</span>예요(<span class=\"chem\">-6 = -3(2)</span>, <span class=\"chem\">9 = -3(-3)</span>). 그러면 <span class=\"chem\">12 = -3p</span>이므로 <span class=\"chem\">p = -4</span>예요.</p>",
    },

    // ── t3-3-q021 · mcq · foundation · AHL · AHL 3.16–3.17 · 2 marks
    "t3-3-q021": {
      // EN: <p>A plane <span class="chem">Π</span> has vector equation <span class="chem">\mathbf{r} = (1, 0, 2) + lambda(1, 1, 0) + mu(0, 1, -1)</span>. Which of the following is a normal vector to <span class="chem">Π</span>?</p>
      stem: "<p>평면 <span class=\"chem\">Π</span>의 벡터방정식은 <span class=\"chem\">\\mathbf{r} = (1, 0, 2) + lambda(1, 1, 0) + mu(0, 1, -1)</span>이에요. 다음 중 <span class=\"chem\">Π</span>의 법선벡터는 무엇인가요?</p>",
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
        "법선벡터는 두 방향벡터에 모두 수직이므로 <span class=\"chem\">(1, 1, 0) \\times (0, 1, -1)</span>을 이용해요.",
        // EN: Check your answer: its scalar product with each direction vector must be 0.
        "답을 확인해 보세요. 각 방향벡터와의 내적이 모두 0이어야 해요.",
      ],
      // EN: <p><span class="chem">(1, 1, 0) \times (0, 1, -1) = ((1)(-1) - (0)(1), (0)(0) - (1)(-1), (1)(1) - (1)(0)) = (-1, 1, 1)</span>. Check: <span class="chem">(-1, 1, 1) \cdot (1, 1, 0) = 0</span> and <span class="chem">(-1, 1, 1) \cdot (0, 1, -1) = 0</span>.</p>
      solution: "<p><span class=\"chem\">(1, 1, 0) \\times (0, 1, -1) = ((1)(-1) - (0)(1), (0)(0) - (1)(-1), (1)(1) - (1)(0)) = (-1, 1, 1)</span>. 확인: <span class=\"chem\">(-1, 1, 1) \\cdot (1, 1, 0) = 0</span>, <span class=\"chem\">(-1, 1, 1) \\cdot (0, 1, -1) = 0</span>.</p>",
      misconception: {
        // EN (option B): Check the first component of the cross product: <span class="chem">(1)(-1) - (0)(1) = -1</span>, not <span class="chem">+1</span>. Test your answer: <span class="chem">(1, 1, 1) \cdot (0, 1, -1) = 0</span> but <span class="chem">(1, 1, 1) \cdot (1, 1, 0) = 2 != 0</span>.
        "1": "외적의 첫 번째 성분을 확인하세요. <span class=\"chem\">+1</span>이 아니라 <span class=\"chem\">(1)(-1) - (0)(1) = -1</span>이에요. 답을 확인해 보면 <span class=\"chem\">(1, 1, 1) \\cdot (0, 1, -1) = 0</span>이지만 <span class=\"chem\">(1, 1, 1) \\cdot (1, 1, 0) = 2 != 0</span>이에요.",
        // EN (option C): You added the two direction vectors. Their sum lies <em>in</em> the plane, so it cannot be a normal.
        "2": "두 방향벡터를 더했어요. 그 합은 평면 <em>위에</em> 놓이므로 법선벡터가 될 수 없어요.",
        // EN (option D): <span class="chem">(1, 0, 2)</span> is the position vector of a point on the plane, not a normal.
        "3": "<span class=\"chem\">(1, 0, 2)</span>는 평면 위의 한 점의 위치벡터이지 법선벡터가 아니에요.",
      },
    },

    // ── t3-3-q022 · short · exam · AHL · AHL 3.12, 3.13, 3.16 · 9 marks
    "t3-3-q022": {
      // EN: <p>The points <span class="chem">A(1, 2, -1)</span>, <span class="chem">B(4, 3, 1)</span>, <span class="chem">C(6, 0, 2)</span> and <span class="chem">D(3, -1, 0)</span> are the vertices of a quadrilateral <span class="chem">ABCD</span>.</p><p>(a) Show that <span class="chem">ABCD</span> is a parallelogram. <strong>[2 marks]</strong></p><p>(b) Show that <span class="chem">ABCD</span> is a rhombus. <strong>[2 marks]</strong></p><p>(c) Verify that the diagonals <span class="chem">AC</span> and <span class="chem">BD</span> are perpendicular. <strong>[2 marks]</strong></p><p>(d) Find the exact area of <span class="chem">ABCD</span>. <strong>[3 marks]</strong></p>
      stem: "<p>점 <span class=\"chem\">A(1, 2, -1)</span>, <span class=\"chem\">B(4, 3, 1)</span>, <span class=\"chem\">C(6, 0, 2)</span>, <span class=\"chem\">D(3, -1, 0)</span>은 사각형 <span class=\"chem\">ABCD</span>의 꼭짓점이에요.</p><p>(a) <span class=\"chem\">ABCD</span>가 평행사변형임을 보이시오 (Show that). <strong>[2 marks]</strong></p><p>(b) <span class=\"chem\">ABCD</span>가 마름모임을 보이시오 (Show that). <strong>[2 marks]</strong></p><p>(c) 두 대각선 <span class=\"chem\">AC</span>와 <span class=\"chem\">BD</span>가 수직임을 확인하시오 (Verify). <strong>[2 marks]</strong></p><p>(d) <span class=\"chem\">ABCD</span>의 정확한 넓이를 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: A quadrilateral is a parallelogram when one pair of opposite sides is given by the <em>same</em> vector, e.g. <span class="chem">\mathbf{AB} = \mathbf{DC}</span>.
        "사각형의 한 쌍의 대변이 <em>같은</em> 벡터로 주어지면(예: <span class=\"chem\">\\mathbf{AB} = \\mathbf{DC}</span>) 그 사각형은 평행사변형이에요.",
        // EN: A rhombus is a parallelogram with two adjacent sides of equal length.
        "마름모는 이웃한 두 변의 길이가 같은 평행사변형이에요.",
        // EN: The area of a parallelogram with adjacent sides <span class="chem">\mathbf{AB}</span> and <span class="chem">\mathbf{AD}</span> is <span class="chem">|\mathbf{AB} \times \mathbf{AD}|</span>.
        "이웃한 두 변이 <span class=\"chem\">\\mathbf{AB}</span>와 <span class=\"chem\">\\mathbf{AD}</span>인 평행사변형의 넓이는 <span class=\"chem\">|\\mathbf{AB} \\times \\mathbf{AD}|</span>예요.",
      ],
      // EN: <p>(a) <span class="chem">\mathbf{AB} = (3, 1, 2)</span> and <span class="chem">\mathbf{DC} = (6 - 3, 0 + 1, 2 - 0) = (3, 1, 2)</span>. Since <span class="chem">\mathbf{AB} = \mathbf{DC}</span>, the sides <span class="chem">AB</span> and <span class="chem">DC</span> are parallel and equal in length, so <span class="chem">ABCD</span> is a parallelogram.</p><p>(b) <span class="chem">\mathbf{AD} = (2, -3, 1)</span>. <span class="chem">|\mathbf{AB}| = sqrt(9 + 1 + 4) = sqrt(14)</span> and <span class="chem">|\mathbf{AD}| = sqrt(4 + 9 + 1) = sqrt(14)</span>. A parallelogram with two adjacent sides equal is a rhombus.</p><p>(c) <span class="chem">\mathbf{AC} = (5, -2, 3)</span> and <span class="chem">\mathbf{BD} = (-1, -4, -1)</span>, so <span class="chem">\mathbf{AC} \cdot \mathbf{BD} = -5 + 8 - 3 = 0</span>: the diagonals are perpendicular.</p><p>(d) <span class="chem">\mathbf{AB} \times \mathbf{AD} = ((1)(1) - (2)(-3), (2)(2) - (3)(1), (3)(-3) - (1)(2)) = (7, 1, -11)</span>. Area <span class="chem">= |\mathbf{AB} \times \mathbf{AD}| = sqrt(49 + 1 + 121) = sqrt(171) = 3 sqrt(19)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">\\mathbf{AB} = (3, 1, 2)</span>, <span class=\"chem\">\\mathbf{DC} = (6 - 3, 0 + 1, 2 - 0) = (3, 1, 2)</span>예요. <span class=\"chem\">\\mathbf{AB} = \\mathbf{DC}</span>이므로 변 <span class=\"chem\">AB</span>와 <span class=\"chem\">DC</span>는 평행하고 길이가 같아요. 따라서 <span class=\"chem\">ABCD</span>는 평행사변형이에요.</p><p>(b) <span class=\"chem\">\\mathbf{AD} = (2, -3, 1)</span>이에요. <span class=\"chem\">|\\mathbf{AB}| = sqrt(9 + 1 + 4) = sqrt(14)</span>, <span class=\"chem\">|\\mathbf{AD}| = sqrt(4 + 9 + 1) = sqrt(14)</span>예요. 이웃한 두 변의 길이가 같은 평행사변형은 마름모예요.</p><p>(c) <span class=\"chem\">\\mathbf{AC} = (5, -2, 3)</span>, <span class=\"chem\">\\mathbf{BD} = (-1, -4, -1)</span>이므로 <span class=\"chem\">\\mathbf{AC} \\cdot \\mathbf{BD} = -5 + 8 - 3 = 0</span>이에요. 즉 두 대각선은 수직이에요.</p><p>(d) <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AD} = ((1)(1) - (2)(-3), (2)(2) - (3)(1), (3)(-3) - (1)(2)) = (7, 1, -11)</span>이에요. 넓이 <span class=\"chem\">= |\\mathbf{AB} \\times \\mathbf{AD}| = sqrt(49 + 1 + 121) = sqrt(171) = 3 sqrt(19)</span>예요.</p>",
      markscheme: [
        // EN: M1: finds <span class="chem">\mathbf{AB} = (3, 1, 2)</span> and <span class="chem">\mathbf{DC} = (3, 1, 2)</span> (or <span class="chem">\mathbf{AD}</span> and <span class="chem">\mathbf{BC}</span>).
        "M1: <span class=\"chem\">\\mathbf{AB} = (3, 1, 2)</span>와 <span class=\"chem\">\\mathbf{DC} = (3, 1, 2)</span>(또는 <span class=\"chem\">\\mathbf{AD}</span>와 <span class=\"chem\">\\mathbf{BC}</span>)를 구함.",
        // EN: R1: states that a pair of opposite sides is equal and parallel, so <span class="chem">ABCD</span> is a parallelogram (AG).
        "R1: 한 쌍의 대변이 같고 평행함을 밝혀 <span class=\"chem\">ABCD</span>가 평행사변형임을 보임 (AG).",
        // EN: A1: <span class="chem">|\mathbf{AB}| = sqrt(14)</span> and <span class="chem">|\mathbf{AD}| = sqrt(14)</span>.
        "A1: <span class=\"chem\">|\\mathbf{AB}| = sqrt(14)</span>, <span class=\"chem\">|\\mathbf{AD}| = sqrt(14)</span>.",
        // EN: R1: adjacent sides of the parallelogram are equal, so it is a rhombus (AG).
        "R1: 평행사변형의 이웃한 변의 길이가 같으므로 마름모임 (AG).",
        // EN: M1: finds <span class="chem">\mathbf{AC} = (5, -2, 3)</span> and <span class="chem">\mathbf{BD} = (-1, -4, -1)</span> and forms their scalar product.
        "M1: <span class=\"chem\">\\mathbf{AC} = (5, -2, 3)</span>과 <span class=\"chem\">\\mathbf{BD} = (-1, -4, -1)</span>을 구하고 두 벡터의 내적을 계산함.",
        // EN: A1: <span class="chem">\mathbf{AC} \cdot \mathbf{BD} = -5 + 8 - 3 = 0</span>, so the diagonals are perpendicular (AG).
        "A1: <span class=\"chem\">\\mathbf{AC} \\cdot \\mathbf{BD} = -5 + 8 - 3 = 0</span>이므로 두 대각선은 수직임 (AG).",
        // EN: M1: uses area <span class="chem">= |\mathbf{AB} \times \mathbf{AD}|</span> (or <span class="chem">(1/2)|\mathbf{AC}||\mathbf{BD}|</span>).
        "M1: 넓이 <span class=\"chem\">= |\\mathbf{AB} \\times \\mathbf{AD}|</span>(또는 <span class=\"chem\">(1/2)|\\mathbf{AC}||\\mathbf{BD}|</span>)를 이용함.",
        // EN: A1: <span class="chem">\mathbf{AB} \times \mathbf{AD} = (7, 1, -11)</span> (or <span class="chem">|\mathbf{AC}| = sqrt(38)</span>, <span class="chem">|\mathbf{BD}| = sqrt(18)</span>).
        "A1: <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AD} = (7, 1, -11)</span>(또는 <span class=\"chem\">|\\mathbf{AC}| = sqrt(38)</span>, <span class=\"chem\">|\\mathbf{BD}| = sqrt(18)</span>).",
        // EN: A1: area <span class="chem">= sqrt(171) = 3 sqrt(19)</span>.
        "A1: 넓이 <span class=\"chem\">= sqrt(171) = 3 sqrt(19)</span>.",
      ],
    },

    // ── t3-3-q023 · short · exam · AHL · AHL 3.12–3.13 · 4 marks
    "t3-3-q023": {
      // EN: <p>The points <span class="chem">A</span> and <span class="chem">B</span> are the ends of a diameter of a circle with centre <span class="chem">O</span>, and <span class="chem">P</span> is any other point on the circle. Let <span class="chem">\mathbf{OA} = \mathbf{a}</span> and <span class="chem">\mathbf{OP} = \mathbf{p}</span>.</p><p>Use vectors to prove that angle <span class="chem">APB</span> is a right angle. <strong>[4 marks]</strong></p>
      stem: "<p>두 점 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>는 중심이 <span class=\"chem\">O</span>인 원의 지름의 양 끝점이고, <span class=\"chem\">P</span>는 원 위의 다른 임의의 점이에요. <span class=\"chem\">\\mathbf{OA} = \\mathbf{a}</span>, <span class=\"chem\">\\mathbf{OP} = \\mathbf{p}</span>라 하자.</p><p>벡터를 이용하여 각 <span class=\"chem\">APB</span>가 직각임을 증명하시오 (prove). <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: "prove the angle is a right angle" means "show that the scalar product of <span class="chem">\mathbf{PA}</span> and <span class="chem">\mathbf{PB}</span> is zero".
        "해석: \"각이 직각임을 증명하라\"는 \"<span class=\"chem\">\\mathbf{PA}</span>와 <span class=\"chem\">\\mathbf{PB}</span>의 내적이 영(zero)임을 보여라\"라는 뜻이에요.",
        // EN: Write <span class="chem">\mathbf{OB}</span> in terms of <span class="chem">\mathbf{a}</span>, and use the fact that every radius has the same length.
        "<span class=\"chem\">\\mathbf{OB}</span>를 <span class=\"chem\">\\mathbf{a}</span>로 나타내고, 모든 반지름의 길이가 같다는 사실을 이용해요.",
        // EN: Expand <span class="chem">(\mathbf{a} - \mathbf{p}) \cdot (-\mathbf{a} - \mathbf{p})</span> like a bracket; remember <span class="chem">\mathbf{a} \cdot \mathbf{a} = |\mathbf{a}|^2</span>.
        "<span class=\"chem\">(\\mathbf{a} - \\mathbf{p}) \\cdot (-\\mathbf{a} - \\mathbf{p})</span>을 괄호를 전개하듯이 전개해요. <span class=\"chem\">\\mathbf{a} \\cdot \\mathbf{a} = |\\mathbf{a}|^2</span>임을 기억하세요.",
      ],
      // EN: <p>Since <span class="chem">AB</span> is a diameter through <span class="chem">O</span>, <span class="chem">\mathbf{OB} = -\mathbf{a}</span>. All radii are equal, so <span class="chem">|\mathbf{p}| = |\mathbf{a}|</span>.</p><p><span class="chem">\mathbf{PA} = \mathbf{a} - \mathbf{p}</span> and <span class="chem">\mathbf{PB} = -\mathbf{a} - \mathbf{p}</span>.</p><p><span class="chem">\mathbf{PA} \cdot \mathbf{PB} = (\mathbf{a} - \mathbf{p}) \cdot (-\mathbf{a} - \mathbf{p}) = -\mathbf{a} \cdot \mathbf{a} - \mathbf{a} \cdot \mathbf{p} + \mathbf{p} \cdot \mathbf{a} + \mathbf{p} \cdot \mathbf{p} = |\mathbf{p}|^2 - |\mathbf{a}|^2 = 0</span>.</p><p>Both vectors are non-zero (P is not A or B), so <span class="chem">\mathbf{PA}</span> is perpendicular to <span class="chem">\mathbf{PB}</span> and angle <span class="chem">APB = 90°</span>.</p>
      answer: "<p><span class=\"chem\">AB</span>는 <span class=\"chem\">O</span>를 지나는 지름이므로 <span class=\"chem\">\\mathbf{OB} = -\\mathbf{a}</span>예요. 모든 반지름의 길이가 같으므로 <span class=\"chem\">|\\mathbf{p}| = |\\mathbf{a}|</span>예요.</p><p><span class=\"chem\">\\mathbf{PA} = \\mathbf{a} - \\mathbf{p}</span>, <span class=\"chem\">\\mathbf{PB} = -\\mathbf{a} - \\mathbf{p}</span>예요.</p><p><span class=\"chem\">\\mathbf{PA} \\cdot \\mathbf{PB} = (\\mathbf{a} - \\mathbf{p}) \\cdot (-\\mathbf{a} - \\mathbf{p}) = -\\mathbf{a} \\cdot \\mathbf{a} - \\mathbf{a} \\cdot \\mathbf{p} + \\mathbf{p} \\cdot \\mathbf{a} + \\mathbf{p} \\cdot \\mathbf{p} = |\\mathbf{p}|^2 - |\\mathbf{a}|^2 = 0</span>이에요.</p><p>두 벡터 모두 영벡터가 아니므로(P는 A나 B가 아니에요) <span class=\"chem\">\\mathbf{PA}</span>는 <span class=\"chem\">\\mathbf{PB}</span>에 수직이고 각 <span class=\"chem\">APB = 90°</span>예요.</p>",
      markscheme: [
        // EN: A1: writes <span class="chem">\mathbf{OB} = -\mathbf{a}</span> and <span class="chem">|\mathbf{p}| = |\mathbf{a}|</span> (equal radii).
        "A1: <span class=\"chem\">\\mathbf{OB} = -\\mathbf{a}</span>와 <span class=\"chem\">|\\mathbf{p}| = |\\mathbf{a}|</span>를 씀 (반지름의 길이가 같음).",
        // EN: A1: <span class="chem">\mathbf{PA} = \mathbf{a} - \mathbf{p}</span> and <span class="chem">\mathbf{PB} = -\mathbf{a} - \mathbf{p}</span>.
        "A1: <span class=\"chem\">\\mathbf{PA} = \\mathbf{a} - \\mathbf{p}</span>, <span class=\"chem\">\\mathbf{PB} = -\\mathbf{a} - \\mathbf{p}</span>.",
        // EN: M1: expands <span class="chem">\mathbf{PA} \cdot \mathbf{PB}</span>, using <span class="chem">\mathbf{a} \cdot \mathbf{p} = \mathbf{p} \cdot \mathbf{a}</span>, to get <span class="chem">|\mathbf{p}|^2 - |\mathbf{a}|^2</span>.
        "M1: <span class=\"chem\">\\mathbf{a} \\cdot \\mathbf{p} = \\mathbf{p} \\cdot \\mathbf{a}</span>를 이용하여 <span class=\"chem\">\\mathbf{PA} \\cdot \\mathbf{PB}</span>를 전개하고 <span class=\"chem\">|\\mathbf{p}|^2 - |\\mathbf{a}|^2</span>을 얻음.",
        // EN: R1: this is 0, so the (non-zero) vectors are perpendicular and angle <span class="chem">APB</span> is a right angle (AG).
        "R1: 이 값이 0이므로 (영벡터가 아닌) 두 벡터는 수직이고 각 <span class=\"chem\">APB</span>는 직각임 (AG).",
      ],
    },

    // ── t3-3-q024 · numeric · exam · AHL · AHL 3.14 · 5 marks
    "t3-3-q024": {
      // EN: <p>The line <span class="chem">L_1</span> has Cartesian equations <span class="chem">x - 3 = (y + 2)/(-1)</span>, <span class="chem">z = 4</span>. The line <span class="chem">L_2</span> has Cartesian equations <span class="chem">1 - x = z + 5</span>, <span class="chem">y = 2</span>.</p><p>Find the acute angle between <span class="chem">L_1</span> and <span class="chem">L_2</span>, in degrees.</p>
      stem: "<p>직선 <span class=\"chem\">L_1</span>의 직교 방정식은 <span class=\"chem\">x - 3 = (y + 2)/(-1)</span>, <span class=\"chem\">z = 4</span>이에요. 직선 <span class=\"chem\">L_2</span>의 직교 방정식은 <span class=\"chem\">1 - x = z + 5</span>, <span class=\"chem\">y = 2</span>예요.</p><p><span class=\"chem\">L_1</span>과 <span class=\"chem\">L_2</span>가 이루는 예각을 도 단위로 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: the angle between two lines is the angle between their direction vectors, so first read a direction vector off each Cartesian form. A coordinate that is constant (such as <span class="chem">z = 4</span>) has direction component 0.
        "해석: 두 직선이 이루는 각은 방향벡터가 이루는 각이므로, 먼저 각 직교 방정식에서 방향벡터를 읽어 내요. 일정한 좌표(<span class=\"chem\">z = 4</span> 등)의 방향 성분은 0이에요.",
        // EN: Rewrite <span class="chem">1 - x = z + 5</span> as <span class="chem">(x - 1)/(-1) = (z + 5)/1</span>. This gives <span class="chem">\mathbf{b_2} = (-1, 0, 1)</span>, and <span class="chem">\mathbf{b_1} = (1, -1, 0)</span>.
        "<span class=\"chem\">1 - x = z + 5</span>을 <span class=\"chem\">(x - 1)/(-1) = (z + 5)/1</span>로 고쳐 써요. 그러면 <span class=\"chem\">\\mathbf{b_2} = (-1, 0, 1)</span>이고, <span class=\"chem\">\\mathbf{b_1} = (1, -1, 0)</span>이에요.",
        // EN: Use <span class="chem">cos theta = |\mathbf{b_1} \cdot \mathbf{b_2}| / (|\mathbf{b_1}||\mathbf{b_2}|)</span>. The modulus makes the angle acute.
        "<span class=\"chem\">cos theta = |\\mathbf{b_1} \\cdot \\mathbf{b_2}| / (|\\mathbf{b_1}||\\mathbf{b_2}|)</span>를 이용해요. 절댓값 때문에 각이 예각이 돼요.",
      ],
      // EN: <p><strong>Decode:</strong> the angle between the lines is the angle between their direction vectors, taken acute.</p><p><span class="chem">L_1</span>: <span class="chem">(x - 3)/1 = (y + 2)/(-1)</span> with <span class="chem">z</span> fixed, so <span class="chem">\mathbf{b_1} = (1, -1, 0)</span>. <span class="chem">L_2</span>: <span class="chem">(x - 1)/(-1) = (z + 5)/1</span> with <span class="chem">y</span> fixed, so <span class="chem">\mathbf{b_2} = (-1, 0, 1)</span>.</p><p><span class="chem">\mathbf{b_1} \cdot \mathbf{b_2} = -1</span> and <span class="chem">|\mathbf{b_1}| = |\mathbf{b_2}| = sqrt(2)</span>, so the angle between the vectors satisfies <span class="chem">cos theta = -1/2</span>, i.e. <span class="chem">120°</span>. The acute angle between the lines is <span class="chem">180° - 120° = 60°</span>.</p>
      solution: "<p><strong>해석:</strong> 두 직선이 이루는 각은 방향벡터가 이루는 각이며, 예각을 택해요.</p><p><span class=\"chem\">L_1</span>: <span class=\"chem\">(x - 3)/1 = (y + 2)/(-1)</span>이고 <span class=\"chem\">z</span>가 고정되어 있으므로 <span class=\"chem\">\\mathbf{b_1} = (1, -1, 0)</span>이에요. <span class=\"chem\">L_2</span>: <span class=\"chem\">(x - 1)/(-1) = (z + 5)/1</span>이고 <span class=\"chem\">y</span>가 고정되어 있으므로 <span class=\"chem\">\\mathbf{b_2} = (-1, 0, 1)</span>이에요.</p><p><span class=\"chem\">\\mathbf{b_1} \\cdot \\mathbf{b_2} = -1</span>이고 <span class=\"chem\">|\\mathbf{b_1}| = |\\mathbf{b_2}| = sqrt(2)</span>이므로 두 벡터가 이루는 각은 <span class=\"chem\">cos theta = -1/2</span>, 즉 <span class=\"chem\">120°</span>를 만족해요. 두 직선이 이루는 예각은 <span class=\"chem\">180° - 120° = 60°</span>예요.</p>",
    },

    // ── t3-3-q025 · short · exam · AHL · AHL 3.14, 3.15, 3.17 · 12 marks
    "t3-3-q025": {
      // EN: <p>The lines <span class="chem">L_1</span> and <span class="chem">L_2</span> have equations <span class="chem">L_1: \mathbf{r} = (1, -3, 4) + lambda(1, 2, -1)</span> and <span class="chem">L_2: \mathbf{r} = (-1, 3, 0) + mu(2, -1, 1)</span>.</p><p>(a) Show that <span class="chem">L_1</span> and <span class="chem">L_2</span> intersect, and find the coordinates of their point of intersection <span class="chem">P</span>. <strong>[5 marks]</strong></p><p>(b) Find the acute angle between <span class="chem">L_1</span> and <span class="chem">L_2</span>, giving your answer in the form <span class="chem">arccos(k)</span> where <span class="chem">k \in \mathbb{Q}</span>. <strong>[3 marks]</strong></p><p>(c) Find the Cartesian equation of the plane that contains both lines. <strong>[4 marks]</strong></p>
      stem: "<p>두 직선 <span class=\"chem\">L_1</span>과 <span class=\"chem\">L_2</span>의 방정식은 <span class=\"chem\">L_1: \\mathbf{r} = (1, -3, 4) + lambda(1, 2, -1)</span>, <span class=\"chem\">L_2: \\mathbf{r} = (-1, 3, 0) + mu(2, -1, 1)</span>이에요.</p><p>(a) <span class=\"chem\">L_1</span>과 <span class=\"chem\">L_2</span>가 만남을 보이고 (Show that), 교점 <span class=\"chem\">P</span>의 좌표를 구하시오 (find). <strong>[5 marks]</strong></p><p>(b) <span class=\"chem\">L_1</span>과 <span class=\"chem\">L_2</span>가 이루는 예각을 구하시오 (Find). 답은 <span class=\"chem\">k \\in \\mathbb{Q}</span>일 때 <span class=\"chem\">arccos(k)</span>의 꼴로 나타내시오. <strong>[3 marks]</strong></p><p>(c) 두 직선을 모두 포함하는 평면의 직교 방정식을 구하시오 (Find). <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Use different parameters for the two lines. Solve two equations, then check the third.
        "두 직선에는 서로 다른 매개변수를 사용해요. 두 식을 풀고 나머지 한 식으로 확인해요.",
        // EN: For the acute angle, take the modulus of the scalar product.
        "예각을 구할 때는 내적의 절댓값을 취해요.",
        // EN: Two intersecting lines lie in one plane. Its normal is perpendicular to both direction vectors.
        "만나는 두 직선은 한 평면 위에 있어요. 그 평면의 법선벡터는 두 방향벡터에 모두 수직이에요.",
      ],
      // EN: <p>(a) Equate components: <span class="chem">1 + lambda = -1 + 2mu</span>, <span class="chem">-3 + 2lambda = 3 - mu</span>, <span class="chem">4 - lambda = mu</span>. Substituting <span class="chem">mu = 4 - lambda</span> into the first equation: <span class="chem">1 + lambda = 7 - 2lambda => lambda = 2</span>, <span class="chem">mu = 2</span>. Check the second equation: <span class="chem">-3 + 4 = 1</span> and <span class="chem">3 - 2 = 1</span>. All three equations hold, so the lines intersect at <span class="chem">P(3, 1, 2)</span>.</p><p>(b) <span class="chem">(1, 2, -1) \cdot (2, -1, 1) = 2 - 2 - 1 = -1</span>, and both directions have magnitude <span class="chem">sqrt(6)</span>. So <span class="chem">cos theta = |-1| / 6 = 1/6</span> and the acute angle is <span class="chem">arccos(1/6)</span>.</p><p>(c) <span class="chem">\mathbf{n} = (1, 2, -1) \times (2, -1, 1) = ((2)(1) - (-1)(-1), (-1)(2) - (1)(1), (1)(-1) - (2)(2)) = (1, -3, -5)</span>. Using <span class="chem">P(3, 1, 2)</span>: <span class="chem">3 - 3 - 10 = -10</span>, so the plane is <span class="chem">x - 3y - 5z = -10</span>.</p>
      answer: "<p>(a) 성분을 같다고 놓으면 <span class=\"chem\">1 + lambda = -1 + 2mu</span>, <span class=\"chem\">-3 + 2lambda = 3 - mu</span>, <span class=\"chem\">4 - lambda = mu</span>예요. <span class=\"chem\">mu = 4 - lambda</span>를 첫 번째 식에 대입하면 <span class=\"chem\">1 + lambda = 7 - 2lambda => lambda = 2</span>, <span class=\"chem\">mu = 2</span>예요. 두 번째 식을 확인하면 <span class=\"chem\">-3 + 4 = 1</span>, <span class=\"chem\">3 - 2 = 1</span>이에요. 세 식이 모두 성립하므로 두 직선은 <span class=\"chem\">P(3, 1, 2)</span>에서 만나요.</p><p>(b) <span class=\"chem\">(1, 2, -1) \\cdot (2, -1, 1) = 2 - 2 - 1 = -1</span>이고, 두 방향벡터의 크기는 모두 <span class=\"chem\">sqrt(6)</span>예요. 따라서 <span class=\"chem\">cos theta = |-1| / 6 = 1/6</span>이고 예각은 <span class=\"chem\">arccos(1/6)</span>예요.</p><p>(c) <span class=\"chem\">\\mathbf{n} = (1, 2, -1) \\times (2, -1, 1) = ((2)(1) - (-1)(-1), (-1)(2) - (1)(1), (1)(-1) - (2)(2)) = (1, -3, -5)</span>예요. <span class=\"chem\">P(3, 1, 2)</span>를 이용하면 <span class=\"chem\">3 - 3 - 10 = -10</span>이므로 평면은 <span class=\"chem\">x - 3y - 5z = -10</span>이에요.</p>",
      markscheme: [
        // EN: M1: equates the three components using different parameters <span class="chem">lambda</span> and <span class="chem">mu</span>.
        "M1: 서로 다른 매개변수 <span class=\"chem\">lambda</span>와 <span class=\"chem\">mu</span>를 사용하여 세 성분을 같다고 놓음.",
        // EN: M1: solves two of the equations simultaneously.
        "M1: 두 식을 연립하여 풂.",
        // EN: A1: <span class="chem">lambda = 2</span>, <span class="chem">mu = 2</span>.
        "A1: <span class=\"chem\">lambda = 2</span>, <span class=\"chem\">mu = 2</span>.",
        // EN: R1: verifies that the third equation is also satisfied, so the lines intersect.
        "R1: 나머지 식도 성립함을 확인하여 두 직선이 만남을 보임.",
        // EN: A1: <span class="chem">P(3, 1, 2)</span>.
        "A1: <span class=\"chem\">P(3, 1, 2)</span>.",
        // EN: M1: uses the scalar product of the two direction vectors.
        "M1: 두 방향벡터의 내적을 이용함.",
        // EN: A1: scalar product <span class="chem">-1</span> and magnitudes <span class="chem">sqrt(6)</span>, <span class="chem">sqrt(6)</span>.
        "A1: 내적 <span class=\"chem\">-1</span>, 크기 <span class=\"chem\">sqrt(6)</span>, <span class=\"chem\">sqrt(6)</span>.",
        // EN: A1: acute angle <span class="chem">arccos(1/6)</span> (the modulus is taken, so not <span class="chem">arccos(-1/6)</span>).
        "A1: 예각 <span class=\"chem\">arccos(1/6)</span> (절댓값을 취하므로 <span class=\"chem\">arccos(-1/6)</span>가 아님).",
        // EN: M1: finds a normal as the vector product of the two direction vectors.
        "M1: 두 방향벡터의 외적으로 법선벡터를 구함.",
        // EN: A1: <span class="chem">\mathbf{n} = (1, -3, -5)</span> (or any non-zero multiple).
        "A1: <span class=\"chem\">\\mathbf{n} = (1, -3, -5)</span> (또는 영벡터가 아닌 임의의 실수배).",
        // EN: M1: substitutes a point on either line (e.g. <span class="chem">P</span>) to find the constant.
        "M1: 어느 한 직선 위의 점(예: <span class=\"chem\">P</span>)을 대입하여 상수를 구함.",
        // EN: A1: <span class="chem">x - 3y - 5z = -10</span> (or equivalent).
        "A1: <span class=\"chem\">x - 3y - 5z = -10</span> (또는 동치인 식).",
      ],
    },

    // ── t3-3-q026 · numeric · exam · AHL · AHL 3.16–3.17 · 4 marks
    "t3-3-q026": {
      // EN: <p>The plane <span class="chem">Π</span> has vector equation <span class="chem">\mathbf{r} = (2, 1, -1) + lambda(1, 0, 3) + mu(-1, 2, 1)</span>, where <span class="chem">lambda, mu \in \mathbb{R}</span>.</p><p>The plane <span class="chem">Π</span> meets the <span class="chem">z</span>-axis at the point <span class="chem">(0, 0, c)</span>. Find the value of <span class="chem">c</span>.</p>
      stem: "<p>평면 <span class=\"chem\">Π</span>의 벡터방정식은 <span class=\"chem\">\\mathbf{r} = (2, 1, -1) + lambda(1, 0, 3) + mu(-1, 2, 1)</span>이에요. 단, <span class=\"chem\">lambda, mu \\in \\mathbb{R}</span>예요.</p><p>평면 <span class=\"chem\">Π</span>가 <span class=\"chem\">z</span>축과 점 <span class=\"chem\">(0, 0, c)</span>에서 만나요. <span class=\"chem\">c</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: the vector form is hard to use directly. Convert it to Cartesian form <span class="chem">ax + by + cz = d</span>, then put <span class="chem">x = y = 0</span>.
        "해석: 벡터 형태는 바로 이용하기 어려워요. 직교 방정식 <span class=\"chem\">ax + by + cz = d</span>로 바꾼 다음 <span class=\"chem\">x = y = 0</span>을 대입해요.",
        // EN: A normal is <span class="chem">(1, 0, 3) \times (-1, 2, 1)</span>.
        "법선벡터는 <span class=\"chem\">(1, 0, 3) \\times (-1, 2, 1)</span>이에요.",
        // EN: Simplify the normal to <span class="chem">(3, 2, -1)</span> and substitute the point <span class="chem">(2, 1, -1)</span> to find <span class="chem">d</span>.
        "법선벡터를 <span class=\"chem\">(3, 2, -1)</span>로 간단히 하고 점 <span class=\"chem\">(2, 1, -1)</span>을 대입하여 <span class=\"chem\">d</span>를 구해요.",
      ],
      // EN: <p><span class="chem">(1, 0, 3) \times (-1, 2, 1) = ((0)(1) - (3)(2), (3)(-1) - (1)(1), (1)(2) - (0)(-1)) = (-6, -4, 2)</span>, so take <span class="chem">\mathbf{n} = (3, 2, -1)</span>. Then <span class="chem">\mathbf{r} \cdot \mathbf{n} = (2, 1, -1) \cdot (3, 2, -1) = 6 + 2 + 1 = 9</span>, giving <span class="chem">3x + 2y - z = 9</span>. On the <span class="chem">z</span>-axis <span class="chem">x = y = 0</span>, so <span class="chem">-z = 9</span> and <span class="chem">c = -9</span>.</p>
      solution: "<p><span class=\"chem\">(1, 0, 3) \\times (-1, 2, 1) = ((0)(1) - (3)(2), (3)(-1) - (1)(1), (1)(2) - (0)(-1)) = (-6, -4, 2)</span>이므로 <span class=\"chem\">\\mathbf{n} = (3, 2, -1)</span>로 택해요. 그러면 <span class=\"chem\">\\mathbf{r} \\cdot \\mathbf{n} = (2, 1, -1) \\cdot (3, 2, -1) = 6 + 2 + 1 = 9</span>이므로 <span class=\"chem\">3x + 2y - z = 9</span>이에요. <span class=\"chem\">z</span>축 위에서는 <span class=\"chem\">x = y = 0</span>이므로 <span class=\"chem\">-z = 9</span>이고 <span class=\"chem\">c = -9</span>예요.</p>",
    },

    // ── t3-3-q027 · numeric · exam · AHL · AHL 3.17–3.18 · 5 marks
    "t3-3-q027": {
      // EN: <p>Find the exact shortest distance from the point <span class="chem">P(3, -2, 5)</span> to the plane <span class="chem">2x - y + 2z = 4</span>.</p>
      stem: "<p>점 <span class=\"chem\">P(3, -2, 5)</span>에서 평면 <span class=\"chem\">2x - y + 2z = 4</span>까지의 정확한 최단 거리를 구하시오 (Find).</p>",
      hints: [
        // EN: The shortest distance is measured along the normal. The line through <span class="chem">P</span> perpendicular to the plane is <span class="chem">\mathbf{r} = (3, -2, 5) + s(2, -1, 2)</span>.
        "최단 거리는 법선을 따라 재요. <span class=\"chem\">P</span>를 지나고 평면에 수직인 직선은 <span class=\"chem\">\\mathbf{r} = (3, -2, 5) + s(2, -1, 2)</span>이에요.",
        // EN: Substitute this line into the plane equation to find <span class="chem">s</span> at the foot of the perpendicular.
        "이 직선을 평면의 방정식에 대입하여 수선의 발에서의 <span class=\"chem\">s</span>를 구해요.",
        // EN: The distance is <span class="chem">|s| × |(2, -1, 2)| = 3|s|</span>.
        "거리는 <span class=\"chem\">|s| × |(2, -1, 2)| = 3|s|</span>예요.",
      ],
      // EN: <p>Substitute <span class="chem">(3 + 2s, -2 - s, 5 + 2s)</span> into <span class="chem">2x - y + 2z = 4</span>: <span class="chem">6 + 4s + 2 + s + 10 + 4s = 4 => 18 + 9s = 4 => s = -14/9</span>. The distance is <span class="chem">|s| × |(2, -1, 2)| = (14/9)(3) = 14/3</span>.</p>
      solution: "<p><span class=\"chem\">(3 + 2s, -2 - s, 5 + 2s)</span>를 <span class=\"chem\">2x - y + 2z = 4</span>에 대입하면 <span class=\"chem\">6 + 4s + 2 + s + 10 + 4s = 4 => 18 + 9s = 4 => s = -14/9</span>예요. 거리는 <span class=\"chem\">|s| × |(2, -1, 2)| = (14/9)(3) = 14/3</span>예요.</p>",
    },

    // ── t3-3-q028 · short · exam · AHL · AHL 3.16, 3.18 · 9 marks
    "t3-3-q028": {
      // EN: <p>The planes <span class="chem">Π_1: x + 2y - z = 3</span> and <span class="chem">Π_2: 3x - y + 2z = 2</span> meet in the line <span class="chem">L</span>.</p><p>(a) Find a vector equation of <span class="chem">L</span>. <strong>[5 marks]</strong></p><p>(b) Find the coordinates of the point where <span class="chem">L</span> meets the plane <span class="chem">Π_3: x - y + z = 2</span>. <strong>[3 marks]</strong></p><p>(c) Hence write down the solution of the system of equations formed by <span class="chem">Π_1</span>, <span class="chem">Π_2</span> and <span class="chem">Π_3</span>. <strong>[1 mark]</strong></p>
      stem: "<p>두 평면 <span class=\"chem\">Π_1: x + 2y - z = 3</span>과 <span class=\"chem\">Π_2: 3x - y + 2z = 2</span>가 직선 <span class=\"chem\">L</span>에서 만나요.</p><p>(a) <span class=\"chem\">L</span>의 벡터방정식을 하나 구하시오 (Find). <strong>[5 marks]</strong></p><p>(b) <span class=\"chem\">L</span>과 평면 <span class=\"chem\">Π_3: x - y + z = 2</span>가 만나는 점의 좌표를 구하시오 (Find). <strong>[3 marks]</strong></p><p>(c) 이를 이용하여 (Hence) <span class=\"chem\">Π_1</span>, <span class=\"chem\">Π_2</span>, <span class=\"chem\">Π_3</span>로 이루어진 연립방정식의 해를 쓰시오 (write down). <strong>[1 mark]</strong></p>",
      hints: [
        // EN: The line of intersection is perpendicular to both normal vectors.
        "교선은 두 법선벡터에 모두 수직이에요.",
        // EN: To find a point on <span class="chem">L</span>, choose a convenient value for one coordinate and solve for the other two.
        "<span class=\"chem\">L</span> 위의 한 점을 구하려면 한 좌표에 편리한 값을 정하고 나머지 두 좌표를 구해요.",
        // EN: A point on all three planes is a solution of all three equations.
        "세 평면 위에 모두 있는 점은 세 방정식의 해예요.",
      ],
      // EN: <p>(a) The direction of <span class="chem">L</span> is perpendicular to both normals: <span class="chem">(1, 2, -1) \times (3, -1, 2) = ((2)(2) - (-1)(-1), (-1)(3) - (1)(2), (1)(-1) - (2)(3)) = (3, -5, -7)</span>. Put <span class="chem">z = 0</span>: <span class="chem">x + 2y = 3</span> and <span class="chem">3x - y = 2</span>, so <span class="chem">x = 1, y = 1</span>. Hence <span class="chem">L: \mathbf{r} = (1, 1, 0) + t(3, -5, -7)</span>.</p><p>(b) Substitute <span class="chem">(1 + 3t, 1 - 5t, -7t)</span> into <span class="chem">Π_3</span>: <span class="chem">1 + 3t - 1 + 5t - 7t = 2 => t = 2</span>. The point is <span class="chem">(7, -9, -14)</span>.</p><p>(c) The three planes meet at a single point, so the unique solution is <span class="chem">x = 7, y = -9, z = -14</span>.</p>
      answer: "<p>(a) <span class=\"chem\">L</span>의 방향은 두 법선벡터에 모두 수직이에요: <span class=\"chem\">(1, 2, -1) \\times (3, -1, 2) = ((2)(2) - (-1)(-1), (-1)(3) - (1)(2), (1)(-1) - (2)(3)) = (3, -5, -7)</span>. <span class=\"chem\">z = 0</span>로 놓으면 <span class=\"chem\">x + 2y = 3</span>, <span class=\"chem\">3x - y = 2</span>이므로 <span class=\"chem\">x = 1, y = 1</span>예요. 따라서 <span class=\"chem\">L: \\mathbf{r} = (1, 1, 0) + t(3, -5, -7)</span>이에요.</p><p>(b) <span class=\"chem\">(1 + 3t, 1 - 5t, -7t)</span>를 <span class=\"chem\">Π_3</span>에 대입하면 <span class=\"chem\">1 + 3t - 1 + 5t - 7t = 2 => t = 2</span>예요. 그 점은 <span class=\"chem\">(7, -9, -14)</span>이에요.</p><p>(c) 세 평면은 한 점에서 만나므로 유일한 해는 <span class=\"chem\">x = 7, y = -9, z = -14</span>예요.</p>",
      markscheme: [
        // EN: M1: finds the direction as <span class="chem">\mathbf{n_1} \times \mathbf{n_2}</span> (or eliminates a variable).
        "M1: 방향을 <span class=\"chem\">\\mathbf{n_1} \\times \\mathbf{n_2}</span>로 구함 (또는 변수 하나를 소거함).",
        // EN: A1: direction <span class="chem">(3, -5, -7)</span> (or any non-zero multiple).
        "A1: 방향 <span class=\"chem\">(3, -5, -7)</span> (또는 영벡터가 아닌 임의의 실수배).",
        // EN: M1: sets one coordinate (e.g. <span class="chem">z = 0</span>) and solves the two remaining equations.
        "M1: 한 좌표를 정하고(예: <span class=\"chem\">z = 0</span>) 나머지 두 식을 풂.",
        // EN: A1: a point on <span class="chem">L</span>, e.g. <span class="chem">(1, 1, 0)</span>.
        "A1: <span class=\"chem\">L</span> 위의 한 점, 예: <span class=\"chem\">(1, 1, 0)</span>.",
        // EN: A1: <span class="chem">\mathbf{r} = (1, 1, 0) + t(3, -5, -7)</span> (must have <span class="chem">\mathbf{r} =</span>).
        "A1: <span class=\"chem\">\\mathbf{r} = (1, 1, 0) + t(3, -5, -7)</span> (<span class=\"chem\">\\mathbf{r} =</span>를 반드시 써야 함).",
        // EN: M1: substitutes the parametric form of <span class="chem">L</span> into <span class="chem">Π_3</span>.
        "M1: <span class=\"chem\">L</span>의 매개변수 방정식을 <span class=\"chem\">Π_3</span>에 대입함.",
        // EN: A1: <span class="chem">t = 2</span> (for their line).
        "A1: <span class=\"chem\">t = 2</span> (자신이 구한 직선에 대해).",
        // EN: A1: <span class="chem">(7, -9, -14)</span>.
        "A1: <span class=\"chem\">(7, -9, -14)</span>.",
        // EN: A1: <span class="chem">x = 7, y = -9, z = -14</span>.
        "A1: <span class=\"chem\">x = 7, y = -9, z = -14</span>.",
      ],
    },

    // ── t3-3-q029 · numeric · exam · AHL · AHL 3.13, 3.16 · 4 marks
    "t3-3-q029": {
      // EN: <p>The vectors <span class="chem">\mathbf{u}</span> and <span class="chem">\mathbf{v}</span> satisfy <span class="chem">|\mathbf{u}| = 4</span>, <span class="chem">|\mathbf{v}| = 5</span> and <span class="chem">\mathbf{u} \cdot \mathbf{v} = 12</span>. Find <span class="chem">|\mathbf{u} \times \mathbf{v}|</span>.</p>
      stem: "<p>두 벡터 <span class=\"chem\">\\mathbf{u}</span>와 <span class=\"chem\">\\mathbf{v}</span>가 <span class=\"chem\">|\\mathbf{u}| = 4</span>, <span class=\"chem\">|\\mathbf{v}| = 5</span>, <span class=\"chem\">\\mathbf{u} \\cdot \\mathbf{v} = 12</span>를 만족해요. <span class=\"chem\">|\\mathbf{u} \\times \\mathbf{v}|</span>를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: you are not given the components, so you must link the two products through the angle <span class="chem">theta</span> between the vectors.
        "해석: 성분이 주어지지 않았으므로 두 벡터가 이루는 각 <span class=\"chem\">theta</span>를 통해 두 곱을 연결해야 해요.",
        // EN: Use <span class="chem">\mathbf{u} \cdot \mathbf{v} = |\mathbf{u}||\mathbf{v}| cos theta</span> to find <span class="chem">cos theta</span>, then <span class="chem">sin theta</span> (positive, since <span class="chem">0 &lt;= theta &lt;= 180°</span>).
        "<span class=\"chem\">\\mathbf{u} \\cdot \\mathbf{v} = |\\mathbf{u}||\\mathbf{v}| cos theta</span>를 이용하여 <span class=\"chem\">cos theta</span>를 구한 다음 <span class=\"chem\">sin theta</span>를 구해요(<span class=\"chem\">0 &lt;= theta &lt;= 180°</span>이므로 양수예요).",
        // EN: Then <span class="chem">|\mathbf{u} \times \mathbf{v}| = |\mathbf{u}||\mathbf{v}| sin theta</span>.
        "그러면 <span class=\"chem\">|\\mathbf{u} \\times \\mathbf{v}| = |\\mathbf{u}||\\mathbf{v}| sin theta</span>예요.",
      ],
      // EN: <p><span class="chem">cos theta = 12 / (4 × 5) = 3/5</span>, so <span class="chem">sin theta = 4/5</span> (sine is non-negative for <span class="chem">0 &lt;= theta &lt;= 180°</span>). Then <span class="chem">|\mathbf{u} \times \mathbf{v}| = 4 × 5 × 4/5 = 16</span>. (Equivalently, <span class="chem">|\mathbf{u} \times \mathbf{v}|^2 = |\mathbf{u}|^2|\mathbf{v}|^2 - (\mathbf{u} \cdot \mathbf{v})^2 = 400 - 144 = 256</span>.)</p>
      solution: "<p><span class=\"chem\">cos theta = 12 / (4 × 5) = 3/5</span>이므로 <span class=\"chem\">sin theta = 4/5</span>예요(<span class=\"chem\">0 &lt;= theta &lt;= 180°</span>에서 사인 값은 음이 아니에요). 따라서 <span class=\"chem\">|\\mathbf{u} \\times \\mathbf{v}| = 4 × 5 × 4/5 = 16</span>이에요. (같은 방법으로 <span class=\"chem\">|\\mathbf{u} \\times \\mathbf{v}|^2 = |\\mathbf{u}|^2|\\mathbf{v}|^2 - (\\mathbf{u} \\cdot \\mathbf{v})^2 = 400 - 144 = 256</span>이에요.)</p>",
    },

    // ── t3-3-q030 · short · challenge · AHL · AHL 3.12 · 8 marks
    "t3-3-q030": {
      // EN: <p>A garden designer draws any quadrilateral flower bed <span class="chem">ABCD</span> (not necessarily flat or regular) and marks the midpoints <span class="chem">P</span>, <span class="chem">Q</span>, <span class="chem">R</span> and <span class="chem">S</span> of <span class="chem">AB</span>, <span class="chem">BC</span>, <span class="chem">CD</span> and <span class="chem">DA</span>. She claims that a path joining <span class="chem">P</span>, <span class="chem">Q</span>, <span class="chem">R</span>, <span class="chem">S</span> in order always forms a parallelogram. Let <span class="chem">A</span>, <span class="chem">B</span>, <span class="chem">C</span>, <span class="chem">D</span> have position vectors <span class="chem">\mathbf{a}</span>, <span class="chem">\mathbf{b}</span>, <span class="chem">\mathbf{c}</span>, <span class="chem">\mathbf{d}</span>.</p><p>(a) Prove her claim. <strong>[6 marks]</strong></p><p>(b) Show that the total length of the path <span class="chem">PQRSP</span> equals <span class="chem">AC + BD</span>, the sum of the lengths of the diagonals of <span class="chem">ABCD</span>. <strong>[2 marks]</strong></p>
      stem: "<p>한 정원 디자이너가 임의의 사각형 화단 <span class=\"chem\">ABCD</span>(평면 위에 있거나 정다각형일 필요는 없음)를 그리고 <span class=\"chem\">AB</span>, <span class=\"chem\">BC</span>, <span class=\"chem\">CD</span>, <span class=\"chem\">DA</span>의 중점 <span class=\"chem\">P</span>, <span class=\"chem\">Q</span>, <span class=\"chem\">R</span>, <span class=\"chem\">S</span>를 표시해요. 그녀는 <span class=\"chem\">P</span>, <span class=\"chem\">Q</span>, <span class=\"chem\">R</span>, <span class=\"chem\">S</span>를 차례로 잇는 길이 항상 평행사변형을 이룬다고 주장해요. <span class=\"chem\">A</span>, <span class=\"chem\">B</span>, <span class=\"chem\">C</span>, <span class=\"chem\">D</span>의 위치벡터를 각각 <span class=\"chem\">\\mathbf{a}</span>, <span class=\"chem\">\\mathbf{b}</span>, <span class=\"chem\">\\mathbf{c}</span>, <span class=\"chem\">\\mathbf{d}</span>라 하자.</p><p>(a) 그녀의 주장을 증명하시오 (Prove). <strong>[6 marks]</strong></p><p>(b) 길 <span class=\"chem\">PQRSP</span>의 전체 길이가 <span class=\"chem\">ABCD</span>의 두 대각선의 길이의 합인 <span class=\"chem\">AC + BD</span>와 같음을 보이시오 (Show that). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: this is a general proof. Do not choose coordinates. Show that <span class="chem">\mathbf{PQ}</span> and <span class="chem">\mathbf{SR}</span> are the same vector for any <span class="chem">\mathbf{a}, \mathbf{b}, \mathbf{c}, \mathbf{d}</span>.
        "해석: 이것은 일반적인 증명이에요. 좌표를 정하지 마세요. 임의의 <span class=\"chem\">\\mathbf{a}, \\mathbf{b}, \\mathbf{c}, \\mathbf{d}</span>에 대해 <span class=\"chem\">\\mathbf{PQ}</span>와 <span class=\"chem\">\\mathbf{SR}</span>이 같은 벡터임을 보여요.",
        // EN: The midpoint of <span class="chem">AB</span> has position vector <span class="chem">(\mathbf{a} + \mathbf{b})/2</span>.
        "<span class=\"chem\">AB</span>의 중점의 위치벡터는 <span class=\"chem\">(\\mathbf{a} + \\mathbf{b})/2</span>예요.",
        // EN: After simplifying, <span class="chem">\mathbf{PQ}</span> is half of a diagonal vector of <span class="chem">ABCD</span>. Which one?
        "간단히 하면 <span class=\"chem\">\\mathbf{PQ}</span>는 <span class=\"chem\">ABCD</span>의 한 대각선 벡터의 절반이에요. 어느 대각선일까요?",
      ],
      // EN: <p><strong>Decode:</strong> "always forms a parallelogram" means you must show, for general vectors, that one pair of opposite sides of <span class="chem">PQRS</span> is given by the same vector.</p><p>(a) The midpoints have position vectors <span class="chem">\mathbf{p} = (\mathbf{a} + \mathbf{b})/2</span>, <span class="chem">\mathbf{q} = (\mathbf{b} + \mathbf{c})/2</span>, <span class="chem">\mathbf{r} = (\mathbf{c} + \mathbf{d})/2</span>, <span class="chem">\mathbf{s} = (\mathbf{d} + \mathbf{a})/2</span>. Then <span class="chem">\mathbf{PQ} = \mathbf{q} - \mathbf{p} = (\mathbf{c} - \mathbf{a})/2</span> and <span class="chem">\mathbf{SR} = \mathbf{r} - \mathbf{s} = (\mathbf{c} - \mathbf{a})/2</span>. So <span class="chem">\mathbf{PQ} = \mathbf{SR}</span>: the opposite sides <span class="chem">PQ</span> and <span class="chem">SR</span> are parallel and equal in length, and <span class="chem">PQRS</span> is a parallelogram.</p><p>(b) Similarly <span class="chem">\mathbf{QR} = (\mathbf{d} - \mathbf{b})/2 = \mathbf{PS}</span>. So the path length is <span class="chem">2|\mathbf{PQ}| + 2|\mathbf{QR}| = |\mathbf{c} - \mathbf{a}| + |\mathbf{d} - \mathbf{b}| = AC + BD</span>.</p>
      answer: "<p><strong>해석:</strong> \"항상 평행사변형을 이룬다\"는 일반적인 벡터에 대해 <span class=\"chem\">PQRS</span>의 한 쌍의 대변이 같은 벡터로 주어짐을 보여야 한다는 뜻이에요.</p><p>(a) 중점의 위치벡터는 <span class=\"chem\">\\mathbf{p} = (\\mathbf{a} + \\mathbf{b})/2</span>, <span class=\"chem\">\\mathbf{q} = (\\mathbf{b} + \\mathbf{c})/2</span>, <span class=\"chem\">\\mathbf{r} = (\\mathbf{c} + \\mathbf{d})/2</span>, <span class=\"chem\">\\mathbf{s} = (\\mathbf{d} + \\mathbf{a})/2</span>예요. 그러면 <span class=\"chem\">\\mathbf{PQ} = \\mathbf{q} - \\mathbf{p} = (\\mathbf{c} - \\mathbf{a})/2</span>, <span class=\"chem\">\\mathbf{SR} = \\mathbf{r} - \\mathbf{s} = (\\mathbf{c} - \\mathbf{a})/2</span>예요. 따라서 <span class=\"chem\">\\mathbf{PQ} = \\mathbf{SR}</span>이므로 대변 <span class=\"chem\">PQ</span>와 <span class=\"chem\">SR</span>은 평행하고 길이가 같으며, <span class=\"chem\">PQRS</span>는 평행사변형이에요.</p><p>(b) 마찬가지로 <span class=\"chem\">\\mathbf{QR} = (\\mathbf{d} - \\mathbf{b})/2 = \\mathbf{PS}</span>예요. 따라서 길의 길이는 <span class=\"chem\">2|\\mathbf{PQ}| + 2|\\mathbf{QR}| = |\\mathbf{c} - \\mathbf{a}| + |\\mathbf{d} - \\mathbf{b}| = AC + BD</span>예요.</p>",
      markscheme: [
        // EN: M1: uses the midpoint as the average of position vectors, e.g. <span class="chem">\mathbf{p} = (\mathbf{a} + \mathbf{b})/2</span>.
        "M1: 중점을 위치벡터의 평균으로 나타냄. 예: <span class=\"chem\">\\mathbf{p} = (\\mathbf{a} + \\mathbf{b})/2</span>.",
        // EN: A1: all four of <span class="chem">\mathbf{p}, \mathbf{q}, \mathbf{r}, \mathbf{s}</span> correct.
        "A1: <span class=\"chem\">\\mathbf{p}, \\mathbf{q}, \\mathbf{r}, \\mathbf{s}</span> 네 개가 모두 맞음.",
        // EN: M1: finds a side vector as a difference, e.g. <span class="chem">\mathbf{PQ} = \mathbf{q} - \mathbf{p}</span>.
        "M1: 변의 벡터를 차로 구함. 예: <span class=\"chem\">\\mathbf{PQ} = \\mathbf{q} - \\mathbf{p}</span>.",
        // EN: A1: <span class="chem">\mathbf{PQ} = (\mathbf{c} - \mathbf{a})/2</span>.
        "A1: <span class=\"chem\">\\mathbf{PQ} = (\\mathbf{c} - \\mathbf{a})/2</span>.",
        // EN: A1: <span class="chem">\mathbf{SR} = (\mathbf{c} - \mathbf{a})/2</span> (or <span class="chem">\mathbf{QR} = \mathbf{PS} = (\mathbf{d} - \mathbf{b})/2</span>).
        "A1: <span class=\"chem\">\\mathbf{SR} = (\\mathbf{c} - \\mathbf{a})/2</span> (또는 <span class=\"chem\">\\mathbf{QR} = \\mathbf{PS} = (\\mathbf{d} - \\mathbf{b})/2</span>).",
        // EN: R1: equal vectors, so opposite sides are parallel and equal: <span class="chem">PQRS</span> is a parallelogram (AG).
        "R1: 두 벡터가 같으므로 대변이 평행하고 길이가 같음: <span class=\"chem\">PQRS</span>는 평행사변형임 (AG).",
        // EN: A1: <span class="chem">\mathbf{QR} = (\mathbf{d} - \mathbf{b})/2</span>, so <span class="chem">|\mathbf{QR}| = BD/2</span> and <span class="chem">|\mathbf{PQ}| = AC/2</span>.
        "A1: <span class=\"chem\">\\mathbf{QR} = (\\mathbf{d} - \\mathbf{b})/2</span>이므로 <span class=\"chem\">|\\mathbf{QR}| = BD/2</span>이고 <span class=\"chem\">|\\mathbf{PQ}| = AC/2</span>임.",
        // EN: A1: path length <span class="chem">= 2(AC/2) + 2(BD/2) = AC + BD</span> (AG).
        "A1: 길의 길이 <span class=\"chem\">= 2(AC/2) + 2(BD/2) = AC + BD</span> (AG).",
      ],
    },

    // ── t3-3-q031 · numeric · challenge · AHL · AHL 3.15 · 5 marks
    "t3-3-q031": {
      // EN: <p>Two straight wires are modelled by the lines <span class="chem">L_1: \mathbf{r} = (1, -2, 0) + lambda(1, 2, 1)</span> and <span class="chem">L_2: \mathbf{r} = (5, 1, k) + mu(1, 1, -2)</span>. An engineer finds that the two wires lie in a common plane. Find the value of <span class="chem">k</span>.</p>
      stem: "<p>곧은 전선 두 개가 직선 <span class=\"chem\">L_1: \\mathbf{r} = (1, -2, 0) + lambda(1, 2, 1)</span>과 <span class=\"chem\">L_2: \\mathbf{r} = (5, 1, k) + mu(1, 1, -2)</span>로 모델링되어 있어요. 한 기술자가 두 전선이 한 평면 위에 있다는 것을 알아냈어요. <span class=\"chem\">k</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: two lines lie in one plane exactly when they are parallel or they intersect. These directions are not parallel, so "in a common plane" means "the lines intersect".
        "해석: 두 직선이 한 평면 위에 있는 것은 두 직선이 평행하거나 만날 때뿐이에요. 이 방향들은 평행하지 않으므로 \"한 평면 위에 있다\"는 \"두 직선이 만난다\"는 뜻이에요.",
        // EN: Equate the <span class="chem">x</span>- and <span class="chem">y</span>-components and solve for <span class="chem">lambda</span> and <span class="chem">mu</span>; these do not involve <span class="chem">k</span>.
        "<span class=\"chem\">x</span>성분과 <span class=\"chem\">y</span>성분을 같다고 놓고 <span class=\"chem\">lambda</span>와 <span class=\"chem\">mu</span>를 구해요. 이 식들에는 <span class=\"chem\">k</span>가 들어 있지 않아요.",
        // EN: The <span class="chem">z</span>-components must then agree. Use that equation to find <span class="chem">k</span>.
        "그러면 <span class=\"chem\">z</span>성분도 같아야 해요. 그 식을 이용하여 <span class=\"chem\">k</span>를 구해요.",
      ],
      // EN: <p><strong>Decode:</strong> <span class="chem">(1, 2, 1)</span> is not a multiple of <span class="chem">(1, 1, -2)</span>, so coplanar lines must intersect.</p><p><span class="chem">x</span>: <span class="chem">1 + lambda = 5 + mu</span>; <span class="chem">y</span>: <span class="chem">-2 + 2lambda = 1 + mu</span>. Subtracting: <span class="chem">3 - lambda = 4 => lambda = -1</span>, and then <span class="chem">mu = -5</span>. <span class="chem">z</span>: <span class="chem">lambda = k - 2mu => -1 = k + 10 => k = -11</span>.</p>
      solution: "<p><strong>해석:</strong> <span class=\"chem\">(1, 2, 1)</span>은 <span class=\"chem\">(1, 1, -2)</span>의 실수배가 아니므로 한 평면 위에 있는 두 직선은 반드시 만나요.</p><p><span class=\"chem\">x</span>: <span class=\"chem\">1 + lambda = 5 + mu</span>; <span class=\"chem\">y</span>: <span class=\"chem\">-2 + 2lambda = 1 + mu</span>. 두 식을 빼면 <span class=\"chem\">3 - lambda = 4 => lambda = -1</span>이고, 그러면 <span class=\"chem\">mu = -5</span>예요. <span class=\"chem\">z</span>: <span class=\"chem\">lambda = k - 2mu => -1 = k + 10 => k = -11</span>.</p>",
    },

    // ── t3-3-q032 · numeric · challenge · AHL · AHL 3.16–3.18 · 6 marks
    "t3-3-q032": {
      // EN: <p>A flat glass panel contains the straight edge <span class="chem">L: \mathbf{r} = (1, 2, 0) + lambda(2, -1, 1)</span> and also the corner point <span class="chem">P(3, 1, 4)</span>. A light is fixed at the origin <span class="chem">O</span>. Find the exact shortest distance from the light to the plane of the panel.</p>
      stem: "<p>평평한 유리판이 곧은 모서리 <span class=\"chem\">L: \\mathbf{r} = (1, 2, 0) + lambda(2, -1, 1)</span>과 꼭짓점 <span class=\"chem\">P(3, 1, 4)</span>을 포함해요. 조명이 원점 <span class=\"chem\">O</span>에 고정되어 있어요. 조명에서 유리판이 놓인 평면까지의 정확한 최단 거리를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: first build the plane from a line and a point not on it, then find the distance from <span class="chem">O</span> to that plane.
        "해석: 먼저 직선과 그 위에 있지 않은 점으로 평면을 만든 다음, <span class=\"chem\">O</span>에서 그 평면까지의 거리를 구해요.",
        // EN: Two directions in the plane are <span class="chem">(2, -1, 1)</span> and <span class="chem">\mathbf{AP}</span>, where <span class="chem">A(1, 2, 0)</span> is on <span class="chem">L</span>. Their vector product is a normal.
        "평면 위의 두 방향은 <span class=\"chem\">(2, -1, 1)</span>과 <span class=\"chem\">\\mathbf{AP}</span>이에요. 여기서 <span class=\"chem\">A(1, 2, 0)</span>은 <span class=\"chem\">L</span> 위의 점이에요. 두 벡터의 외적이 법선벡터예요.",
        // EN: You should get the plane <span class="chem">x + 2y = 5</span>. The perpendicular from <span class="chem">O</span> is <span class="chem">\mathbf{r} = s(1, 2, 0)</span>.
        "평면 <span class=\"chem\">x + 2y = 5</span>를 얻어야 해요. <span class=\"chem\">O</span>에서 내린 수선은 <span class=\"chem\">\\mathbf{r} = s(1, 2, 0)</span>이에요.",
      ],
      // EN: <p><strong>Decode:</strong> plane from a line and a point, then point-to-plane distance.</p><p><span class="chem">\mathbf{AP} = (2, -1, 4)</span>. <span class="chem">(2, -1, 1) \times (2, -1, 4) = ((-1)(4) - (1)(-1), (1)(2) - (2)(4), (2)(-1) - (-1)(2)) = (-3, -6, 0)</span>, so <span class="chem">\mathbf{n} = (1, 2, 0)</span> and the plane is <span class="chem">x + 2y = 5</span> (check with <span class="chem">P</span>: <span class="chem">3 + 2 = 5</span>). The perpendicular from <span class="chem">O</span> is <span class="chem">(s, 2s, 0)</span>: <span class="chem">5s = 5 => s = 1</span>, foot <span class="chem">(1, 2, 0)</span>. The distance is <span class="chem">sqrt(1 + 4) = sqrt(5)</span>.</p>
      solution: "<p><strong>해석:</strong> 직선과 점으로 평면을 만든 다음 점과 평면 사이의 거리를 구해요.</p><p><span class=\"chem\">\\mathbf{AP} = (2, -1, 4)</span>. <span class=\"chem\">(2, -1, 1) \\times (2, -1, 4) = ((-1)(4) - (1)(-1), (1)(2) - (2)(4), (2)(-1) - (-1)(2)) = (-3, -6, 0)</span>이므로 <span class=\"chem\">\\mathbf{n} = (1, 2, 0)</span>이고 평면은 <span class=\"chem\">x + 2y = 5</span>예요(<span class=\"chem\">P</span>로 확인: <span class=\"chem\">3 + 2 = 5</span>). <span class=\"chem\">O</span>에서 내린 수선은 <span class=\"chem\">(s, 2s, 0)</span>이에요: <span class=\"chem\">5s = 5 => s = 1</span>, 수선의 발은 <span class=\"chem\">(1, 2, 0)</span>이에요. 거리는 <span class=\"chem\">sqrt(1 + 4) = sqrt(5)</span>예요.</p>",
    },

    // ── t3-3-q033 · short · challenge · AHL · AHL 3.18 · 10 marks
    "t3-3-q033": {
      // EN: <p>Consider the planes <span class="chem">Π_1: x + y - z = 2</span>, <span class="chem">Π_2: 2x + 3y + z = 5</span> and <span class="chem">Π_3: x + 2y + az = b</span>, where <span class="chem">a, b \in \mathbb{R}</span>.</p><p>(a) Find the value of <span class="chem">a</span> for which the three planes do <strong>not</strong> meet at a single point. <strong>[3 marks]</strong></p><p>(b) For this value of <span class="chem">a</span>, find the value of <span class="chem">b</span> for which the planes meet in a line. <strong>[2 marks]</strong></p><p>(c) For this value of <span class="chem">a</span> and any other value of <span class="chem">b</span>, describe the geometric arrangement of the three planes, justifying your answer. <strong>[2 marks]</strong></p><p>(d) For the values in part (b), find a vector equation of the common line. <strong>[3 marks]</strong></p>
      stem: "<p>세 평면 <span class=\"chem\">Π_1: x + y - z = 2</span>, <span class=\"chem\">Π_2: 2x + 3y + z = 5</span>, <span class=\"chem\">Π_3: x + 2y + az = b</span>를 생각하자. 단, <span class=\"chem\">a, b \\in \\mathbb{R}</span>예요.</p><p>(a) 세 평면이 한 점에서 만나지 <strong>않도록</strong> 하는 <span class=\"chem\">a</span>의 값을 구하시오 (Find). <strong>[3 marks]</strong></p><p>(b) 이 <span class=\"chem\">a</span>의 값에 대해 세 평면이 한 직선에서 만나도록 하는 <span class=\"chem\">b</span>의 값을 구하시오 (find). <strong>[2 marks]</strong></p><p>(c) 이 <span class=\"chem\">a</span>의 값과 그 밖의 임의의 <span class=\"chem\">b</span>의 값에 대해 세 평면의 기하학적 배치를 설명하고 (describe), 그 이유를 밝히시오. <strong>[2 marks]</strong></p><p>(d) (b)의 값에 대해 공통인 직선의 벡터방정식을 하나 구하시오 (find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: "do not meet at a single point" = "the system does not have a unique solution". Eliminate until one equation contains only <span class="chem">z</span>.
        "해석: \"한 점에서 만나지 않는다\" = \"연립방정식이 유일한 해를 갖지 않는다\"예요. 한 식에 <span class=\"chem\">z</span>만 남을 때까지 소거해요.",
        // EN: Use <span class="chem">Π_2 - 2Π_1</span> and <span class="chem">Π_3 - Π_1</span>, then subtract the two results.
        "<span class=\"chem\">Π_2 - 2Π_1</span>과 <span class=\"chem\">Π_3 - Π_1</span>을 이용한 다음 두 결과를 빼요.",
        // EN: For part (c), "no solution" can be a triangular prism or include parallel planes. Check whether any two normals are parallel.
        "(c)에서 \"해가 없음\"은 삼각기둥일 수도 있고 평행한 평면을 포함할 수도 있어요. 어떤 두 법선벡터가 평행한지 확인해요.",
      ],
      // EN: <p><strong>Decode:</strong> "not a single point" means the system has no unique solution: eliminate to a single equation in one unknown and make its coefficient zero.</p><p>(a) <span class="chem">Π_2 - 2Π_1</span>: <span class="chem">y + 3z = 1</span>. <span class="chem">Π_3 - Π_1</span>: <span class="chem">y + (a + 1)z = b - 2</span>. Subtracting: <span class="chem">(a - 2)z = b - 3</span>. There is no unique solution when <span class="chem">a = 2</span>.</p><p>(b) With <span class="chem">a = 2</span> the last equation is <span class="chem">0z = b - 3</span>, which holds for every <span class="chem">z</span> when <span class="chem">b = 3</span>: the planes meet in a line.</p><p>(c) If <span class="chem">b != 3</span> there is no solution. The normals <span class="chem">(1, 1, -1)</span>, <span class="chem">(2, 3, 1)</span>, <span class="chem">(1, 2, 2)</span> are not multiples of one another, so no two planes are parallel; the planes meet in pairs along three parallel lines and form a triangular prism.</p><p>(d) Let <span class="chem">z = t</span>. Then <span class="chem">y = 1 - 3t</span> and <span class="chem">x = 2 - y + z = 1 + 4t</span>, so <span class="chem">\mathbf{r} = (1, 1, 0) + t(4, -3, 1)</span>.</p>
      answer: "<p><strong>해석:</strong> \"한 점에서 만나지 않는다\"는 연립방정식이 유일한 해를 갖지 않는다는 뜻이에요. 미지수가 하나인 식이 될 때까지 소거하고 그 계수를 영(zero)으로 만들어요.</p><p>(a) <span class=\"chem\">Π_2 - 2Π_1</span>: <span class=\"chem\">y + 3z = 1</span>. <span class=\"chem\">Π_3 - Π_1</span>: <span class=\"chem\">y + (a + 1)z = b - 2</span>. 두 식을 빼면 <span class=\"chem\">(a - 2)z = b - 3</span>예요. <span class=\"chem\">a = 2</span>일 때 유일한 해가 없어요.</p><p>(b) <span class=\"chem\">a = 2</span>일 때 마지막 식은 <span class=\"chem\">0z = b - 3</span>이고, <span class=\"chem\">b = 3</span>이면 모든 <span class=\"chem\">z</span>에 대해 성립해요. 즉 세 평면은 한 직선에서 만나요.</p><p>(c) <span class=\"chem\">b != 3</span>이면 해가 없어요. 법선벡터 <span class=\"chem\">(1, 1, -1)</span>, <span class=\"chem\">(2, 3, 1)</span>, <span class=\"chem\">(1, 2, 2)</span>은 서로 실수배가 아니므로 평행한 두 평면은 없어요. 세 평면은 둘씩 세 개의 평행한 직선에서 만나 삼각기둥을 이뤄요.</p><p>(d) <span class=\"chem\">z = t</span>라 하자. 그러면 <span class=\"chem\">y = 1 - 3t</span>이고 <span class=\"chem\">x = 2 - y + z = 1 + 4t</span>이므로 <span class=\"chem\">\\mathbf{r} = (1, 1, 0) + t(4, -3, 1)</span>이에요.</p>",
      markscheme: [
        // EN: M1: eliminates <span class="chem">x</span> from two pairs of equations.
        "M1: 두 쌍의 식에서 <span class=\"chem\">x</span>를 소거함.",
        // EN: A1: obtains <span class="chem">(a - 2)z = b - 3</span> (or an equivalent single equation).
        "A1: <span class=\"chem\">(a - 2)z = b - 3</span> (또는 동치인 하나의 식)을 얻음.",
        // EN: A1: <span class="chem">a = 2</span>.
        "A1: <span class=\"chem\">a = 2</span>.",
        // EN: M1: recognises that a line of solutions needs the equation to reduce to <span class="chem">0 = 0</span>.
        "M1: 해가 직선이 되려면 식이 <span class=\"chem\">0 = 0</span>이 되어야 함을 인식함.",
        // EN: A1: <span class="chem">b = 3</span>.
        "A1: <span class=\"chem\">b = 3</span>.",
        // EN: R1: no solution, and no two normal vectors are parallel.
        "R1: 해가 없고, 어떤 두 법선벡터도 평행하지 않음.",
        // EN: A1: the planes form a triangular prism.
        "A1: 세 평면은 삼각기둥을 이룸.",
        // EN: M1: introduces a parameter, e.g. <span class="chem">z = t</span>, and expresses <span class="chem">y</span> in terms of <span class="chem">t</span>.
        "M1: 매개변수를 도입하고(예: <span class=\"chem\">z = t</span>) <span class=\"chem\">y</span>를 <span class=\"chem\">t</span>로 나타냄.",
        // EN: A1: <span class="chem">y = 1 - 3t</span> and <span class="chem">x = 1 + 4t</span>.
        "A1: <span class=\"chem\">y = 1 - 3t</span>, <span class=\"chem\">x = 1 + 4t</span>.",
        // EN: A1: <span class="chem">\mathbf{r} = (1, 1, 0) + t(4, -3, 1)</span> (or equivalent).
        "A1: <span class=\"chem\">\\mathbf{r} = (1, 1, 0) + t(4, -3, 1)</span> (또는 동치인 식).",
      ],
    },

    // ── t3-3-q034 · numeric · exam · AHL · AHL 3.13 · 4 marks
    "t3-3-q034": {
      // EN: <p>A surveyor records the positions of three marker posts, in metres, as <span class="chem">A(2.4, -1.3, 0.8)</span>, <span class="chem">B(0.5, 1.7, -2.1)</span> and <span class="chem">C(3.6, 2.2, 1.5)</span>. Find the size of angle <span class="chem">ABC</span>, in degrees, correct to 3 significant figures.</p>
      stem: "<p>한 측량사가 세 표지 기둥의 위치를 미터 단위로 <span class=\"chem\">A(2.4, -1.3, 0.8)</span>, <span class=\"chem\">B(0.5, 1.7, -2.1)</span>, <span class=\"chem\">C(3.6, 2.2, 1.5)</span>로 기록했어요. 각 <span class=\"chem\">ABC</span>의 크기를 도 단위로 구하시오 (Find). 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: Decode: angle <span class="chem">ABC</span> is the angle <em>at</em> <span class="chem">B</span>, so use the two vectors that start at <span class="chem">B</span>: <span class="chem">\mathbf{BA}</span> and <span class="chem">\mathbf{BC}</span>.
        "해석: 각 <span class=\"chem\">ABC</span>는 <span class=\"chem\">B</span><em>에서의</em> 각이므로 <span class=\"chem\">B</span>에서 시작하는 두 벡터 <span class=\"chem\">\\mathbf{BA}</span>와 <span class=\"chem\">\\mathbf{BC}</span>를 이용해요.",
        // EN: <span class="chem">\mathbf{BA} = (1.9, -3, 2.9)</span> and <span class="chem">\mathbf{BC} = (3.1, 0.5, 3.6)</span>.
        "<span class=\"chem\">\\mathbf{BA} = (1.9, -3, 2.9)</span>, <span class=\"chem\">\\mathbf{BC} = (3.1, 0.5, 3.6)</span>이에요.",
        // EN: Use <span class="chem">cos B = (\mathbf{BA} \cdot \mathbf{BC}) / (|\mathbf{BA}||\mathbf{BC}|)</span>; do not take a modulus here, because the angle of a triangle can be obtuse.
        "<span class=\"chem\">cos B = (\\mathbf{BA} \\cdot \\mathbf{BC}) / (|\\mathbf{BA}||\\mathbf{BC}|)</span>를 이용해요. 삼각형의 각은 둔각일 수 있으므로 여기서는 절댓값을 취하지 마세요.",
      ],
      // EN: <p><span class="chem">\mathbf{BA} = (1.9, -3, 2.9)</span>, <span class="chem">\mathbf{BC} = (3.1, 0.5, 3.6)</span>. <span class="chem">\mathbf{BA} \cdot \mathbf{BC} = 5.89 - 1.5 + 10.44 = 14.83</span>, <span class="chem">|\mathbf{BA}| = sqrt(21.02) ≈ 4.585</span>, <span class="chem">|\mathbf{BC}| = sqrt(22.82) ≈ 4.777</span>. So <span class="chem">cos B ≈ 0.6771</span> and angle <span class="chem">ABC ≈ 47.4°</span>.</p>
      solution: "<p><span class=\"chem\">\\mathbf{BA} = (1.9, -3, 2.9)</span>, <span class=\"chem\">\\mathbf{BC} = (3.1, 0.5, 3.6)</span>. <span class=\"chem\">\\mathbf{BA} \\cdot \\mathbf{BC} = 5.89 - 1.5 + 10.44 = 14.83</span>, <span class=\"chem\">|\\mathbf{BA}| = sqrt(21.02) ≈ 4.585</span>, <span class=\"chem\">|\\mathbf{BC}| = sqrt(22.82) ≈ 4.777</span>. 따라서 <span class=\"chem\">cos B ≈ 0.6771</span>이고 각 <span class=\"chem\">ABC ≈ 47.4°</span>예요.</p>",
    },

    // ── t3-3-q035 · numeric · exam · AHL · AHL 3.13–3.14 · 6 marks
    "t3-3-q035": {
      // EN: <p>A camera drone moves with constant velocity. Its position <span class="chem">t</span> seconds after it is switched on is <span class="chem">\mathbf{r} = (-40, 25, 10) + t(6, -3.5, 1.2)</span>, in metres. A signal mast has its top at <span class="chem">T(30, -10, 40)</span>. Find the minimum distance between the drone and the top of the mast, correct to 3 significant figures.</p>
      stem: "<p>촬영용 드론이 일정한 속도로 움직여요. 전원을 켠 지 <span class=\"chem\">t</span>초 후의 위치는 <span class=\"chem\">\\mathbf{r} = (-40, 25, 10) + t(6, -3.5, 1.2)</span>(단위: 미터)예요. 신호탑의 꼭대기는 <span class=\"chem\">T(30, -10, 40)</span>에 있어요. 드론과 탑 꼭대기 사이의 최단 거리를 구하시오 (Find). 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: Decode: "minimum distance" between a moving point and a fixed point. Either minimise <span class="chem">|\mathbf{r}(t) - \mathbf{OT}|</span> on your GDC, or use the fact that at the closest point <span class="chem">\mathbf{TR}</span> is perpendicular to the velocity.
        "해석: 움직이는 점과 고정된 점 사이의 \"최단 거리\"예요. GDC로 <span class=\"chem\">|\\mathbf{r}(t) - \\mathbf{OT}|</span>의 최솟값을 구하거나, 가장 가까울 때 <span class=\"chem\">\\mathbf{TR}</span>가 속도에 수직이라는 사실을 이용해요.",
        // EN: <span class="chem">\mathbf{TR}(t) = (-70 + 6t, 35 - 3.5t, -30 + 1.2t)</span>.
        "<span class=\"chem\">\\mathbf{TR}(t) = (-70 + 6t, 35 - 3.5t, -30 + 1.2t)</span>.",
        // EN: Solve <span class="chem">\mathbf{TR}(t) \cdot (6, -3.5, 1.2) = 0</span> for <span class="chem">t</span>, then find <span class="chem">|\mathbf{TR}(t)|</span>.
        "<span class=\"chem\">\\mathbf{TR}(t) \\cdot (6, -3.5, 1.2) = 0</span>을 <span class=\"chem\">t</span>에 대해 풀고 <span class=\"chem\">|\\mathbf{TR}(t)|</span>를 구해요.",
      ],
      // EN: <p><span class="chem">\mathbf{TR}(t) = (-70 + 6t, 35 - 3.5t, -30 + 1.2t)</span>. Setting <span class="chem">\mathbf{TR} \cdot (6, -3.5, 1.2) = 0</span>: <span class="chem">-420 - 122.5 - 36 + (36 + 12.25 + 1.44)t = 0 => t = 578.5 / 49.69 ≈ 11.64</span> s. Then <span class="chem">\mathbf{TR} ≈ (-0.147, -5.75, -16.0)</span> and the minimum distance is <span class="chem">≈ 17.0</span> m. (A GDC graph of <span class="chem">|\mathbf{TR}(t)|</span> gives the same minimum.)</p>
      solution: "<p><span class=\"chem\">\\mathbf{TR}(t) = (-70 + 6t, 35 - 3.5t, -30 + 1.2t)</span>. <span class=\"chem\">\\mathbf{TR} \\cdot (6, -3.5, 1.2) = 0</span>으로 놓으면 <span class=\"chem\">-420 - 122.5 - 36 + (36 + 12.25 + 1.44)t = 0 => t = 578.5 / 49.69 ≈ 11.64</span> s예요. 그러면 <span class=\"chem\">\\mathbf{TR} ≈ (-0.147, -5.75, -16.0)</span>이고 최단 거리는 <span class=\"chem\">≈ 17.0</span> m예요. (GDC로 <span class=\"chem\">|\\mathbf{TR}(t)|</span>의 그래프를 그려도 같은 최솟값을 얻어요.)</p>",
    },

    // ── t3-3-q036 · short · exam · AHL · AHL 3.12–3.14 · 9 marks
    "t3-3-q036": {
      // EN: <p>Two aircraft are tracked by radar. Relative to the control tower, with distances in kilometres and <span class="chem">t</span> in hours after 12:00, their positions are</p><p><span class="chem">\mathbf{r_A} = (-50, 20, 8.5) + t(420, 150, 0)</span> and <span class="chem">\mathbf{r_B} = (10, -60, 9.1) + t(180, 520, -0.4)</span>.</p><p>(a) Find the speed of aircraft A. <strong>[2 marks]</strong></p><p>(b) Aircraft B is descending. Show that the two aircraft are at the same altitude when <span class="chem">t = 1.5</span>, and that they do not collide at that time. <strong>[2 marks]</strong></p><p>(c) Find the minimum distance between the two aircraft and the time, to the nearest minute, at which it occurs. <strong>[4 marks]</strong></p><p>(d) Safety rules require aircraft to stay at least 5 km apart. State, with a reason, whether the rule is broken. <strong>[1 mark]</strong></p>
      stem: "<p>두 항공기가 레이더로 추적되고 있어요. 관제탑을 기준으로 거리는 킬로미터 단위, <span class=\"chem\">t</span>는 12:00 이후의 시간(시)일 때 두 항공기의 위치는</p><p><span class=\"chem\">\\mathbf{r_A} = (-50, 20, 8.5) + t(420, 150, 0)</span>, <span class=\"chem\">\\mathbf{r_B} = (10, -60, 9.1) + t(180, 520, -0.4)</span>예요.</p><p>(a) 항공기 A의 속력을 구하시오 (Find). <strong>[2 marks]</strong></p><p>(b) 항공기 B는 하강하고 있어요. <span class=\"chem\">t = 1.5</span>일 때 두 항공기가 같은 고도에 있고, 그때 충돌하지 않음을 보이시오 (Show that). <strong>[2 marks]</strong></p><p>(c) 두 항공기 사이의 최단 거리와 그때의 시각을 가장 가까운 분 단위로 구하시오 (Find). <strong>[4 marks]</strong></p><p>(d) 안전 규정에 따르면 항공기는 적어도 5 km 떨어져 있어야 해요. 규정이 위반되는지 이유와 함께 쓰시오 (State). <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Speed is the magnitude of the velocity vector.
        "속력은 속도벡터의 크기예요.",
        // EN: Altitude is the <span class="chem">z</span>-coordinate.
        "고도는 <span class=\"chem\">z</span>좌표예요.",
        // EN: The distance between the aircraft at time <span class="chem">t</span> is <span class="chem">|\mathbf{r_A}(t) - \mathbf{r_B}(t)|</span>. Graph it on your GDC and find the minimum.
        "시각 <span class=\"chem\">t</span>에서 두 항공기 사이의 거리는 <span class=\"chem\">|\\mathbf{r_A}(t) - \\mathbf{r_B}(t)|</span>이에요. GDC로 그래프를 그려 최솟값을 구해요.",
      ],
      // EN: <p>(a) Speed <span class="chem">= |(420, 150, 0)| = sqrt(420^2 + 150^2) ≈ 446</span> km per hour.</p><p>(b) A is always at altitude 8.5 km. B is at <span class="chem">9.1 - 0.4t = 8.5</span> when <span class="chem">t = 1.5</span>. Then <span class="chem">\mathbf{r_A} = (580, 245, 8.5)</span> and <span class="chem">\mathbf{r_B} = (280, 720, 8.5)</span>, which are different points, so there is no collision.</p><p>(c) <span class="chem">\mathbf{r_A} - \mathbf{r_B} = (-60, 80, -0.6) + t(240, -370, 0.4)</span>. Minimising its magnitude (GDC, or solving <span class="chem">(\mathbf{r_A} - \mathbf{r_B}) \cdot (240, -370, 0.4) = 0</span>) gives <span class="chem">t ≈ 0.2262</span> h, about 13.6 minutes, so at 12:14. The minimum distance is <span class="chem">≈ 6.82</span> km.</p><p>(d) The rule is not broken, since the minimum separation <span class="chem">6.82</span> km is greater than 5 km.</p>
      answer: "<p>(a) 속력 <span class=\"chem\">= |(420, 150, 0)| = sqrt(420^2 + 150^2) ≈ 446</span> km/시예요.</p><p>(b) A는 항상 고도 8.5 km에 있어요. B는 <span class=\"chem\">t = 1.5</span>일 때 <span class=\"chem\">9.1 - 0.4t = 8.5</span>에 있어요. 그때 <span class=\"chem\">\\mathbf{r_A} = (580, 245, 8.5)</span>, <span class=\"chem\">\\mathbf{r_B} = (280, 720, 8.5)</span>로 서로 다른 점이므로 충돌하지 않아요.</p><p>(c) <span class=\"chem\">\\mathbf{r_A} - \\mathbf{r_B} = (-60, 80, -0.6) + t(240, -370, 0.4)</span>. 그 크기를 최소화하면(GDC를 쓰거나 <span class=\"chem\">(\\mathbf{r_A} - \\mathbf{r_B}) \\cdot (240, -370, 0.4) = 0</span>을 풀면) <span class=\"chem\">t ≈ 0.2262</span> h, 약 13.6분이므로 12:14예요. 최단 거리는 <span class=\"chem\">≈ 6.82</span> km예요.</p><p>(d) 최단 거리 <span class=\"chem\">6.82</span> km가 5 km보다 크므로 규정은 위반되지 않아요.</p>",
      markscheme: [
        // EN: M1: finds the magnitude of the velocity vector of A.
        "M1: A의 속도벡터의 크기를 구함.",
        // EN: A1: speed <span class="chem">≈ 446</span> km per hour.
        "A1: 속력 <span class=\"chem\">≈ 446</span> km/시.",
        // EN: A1: shows <span class="chem">9.1 - 0.4(1.5) = 8.5</span>, the altitude of A.
        "A1: A의 고도인 <span class=\"chem\">9.1 - 0.4(1.5) = 8.5</span>를 보임.",
        // EN: R1: finds both positions at <span class="chem">t = 1.5</span> and states they differ, so no collision.
        "R1: <span class=\"chem\">t = 1.5</span>에서 두 위치를 구하고 서로 다르므로 충돌하지 않는다고 밝힘.",
        // EN: M1: forms the relative position <span class="chem">\mathbf{r_A} - \mathbf{r_B}</span> as a function of <span class="chem">t</span>.
        "M1: 상대 위치 <span class=\"chem\">\\mathbf{r_A} - \\mathbf{r_B}</span>를 <span class=\"chem\">t</span>의 함수로 나타냄.",
        // EN: M1: minimises its magnitude (GDC graph, or scalar product with relative velocity set to 0).
        "M1: 그 크기를 최소화함 (GDC 그래프, 또는 상대 속도와의 내적을 0으로 놓음).",
        // EN: A1: <span class="chem">t ≈ 0.226</span> h, i.e. 12:14.
        "A1: <span class=\"chem\">t ≈ 0.226</span> h, 즉 12:14.",
        // EN: A1: minimum distance <span class="chem">≈ 6.82</span> km.
        "A1: 최단 거리 <span class=\"chem\">≈ 6.82</span> km.",
        // EN: R1: not broken, because <span class="chem">6.82 &gt; 5</span> (follow through from their minimum).
        "R1: <span class=\"chem\">6.82 &gt; 5</span>이므로 위반되지 않음 (자신이 구한 최솟값에 따라 후속 채점).",
      ],
    },

    // ── t3-3-q037 · numeric · exam · AHL · AHL 3.14–3.16 · 5 marks
    "t3-3-q037": {
      // EN: <p>Find the shortest distance from the point <span class="chem">P(3.5, -1.2, 4.8)</span> to the line <span class="chem">\mathbf{r} = (1.1, 0.4, -2) + lambda(2.3, -1.7, 0.9)</span>, correct to 3 significant figures.</p>
      stem: "<p>점 <span class=\"chem\">P(3.5, -1.2, 4.8)</span>에서 직선 <span class=\"chem\">\\mathbf{r} = (1.1, 0.4, -2) + lambda(2.3, -1.7, 0.9)</span>까지의 최단 거리를 구하시오 (Find). 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: Let <span class="chem">F</span> be the point on the line with parameter <span class="chem">lambda</span>. At the foot of the perpendicular, <span class="chem">\mathbf{PF} \cdot (2.3, -1.7, 0.9) = 0</span>.
        "직선 위에서 매개변수가 <span class=\"chem\">lambda</span>인 점을 <span class=\"chem\">F</span>라 해요. 수선의 발에서는 <span class=\"chem\">\\mathbf{PF} \\cdot (2.3, -1.7, 0.9) = 0</span>이에요.",
        // EN: Alternatively use <span class="chem">d = |\mathbf{AP} \times \mathbf{b}| / |\mathbf{b}|</span> with <span class="chem">A(1.1, 0.4, -2)</span>.
        "또는 <span class=\"chem\">A(1.1, 0.4, -2)</span>을 이용하여 <span class=\"chem\">d = |\\mathbf{AP} \\times \\mathbf{b}| / |\\mathbf{b}|</span>를 쓸 수 있어요.",
      ],
      // EN: <p>With <span class="chem">A(1.1, 0.4, -2)</span>, <span class="chem">\mathbf{AP} = (2.4, -1.6, 6.8)</span> and <span class="chem">\mathbf{b} = (2.3, -1.7, 0.9)</span>. <span class="chem">\mathbf{AP} \times \mathbf{b} = (10.12, 13.48, -0.4)</span>, so <span class="chem">d = |\mathbf{AP} \times \mathbf{b}| / |\mathbf{b}| = 16.86 / 2.999 ≈ 5.62</span>. (Foot-of-perpendicular method: <span class="chem">lambda = (\mathbf{AP} \cdot \mathbf{b}) / |\mathbf{b}|^2 ≈ 1.597</span>, giving the same distance.)</p>
      solution: "<p><span class=\"chem\">A(1.1, 0.4, -2)</span>로 놓으면 <span class=\"chem\">\\mathbf{AP} = (2.4, -1.6, 6.8)</span>, <span class=\"chem\">\\mathbf{b} = (2.3, -1.7, 0.9)</span>예요. <span class=\"chem\">\\mathbf{AP} \\times \\mathbf{b} = (10.12, 13.48, -0.4)</span>이므로 <span class=\"chem\">d = |\\mathbf{AP} \\times \\mathbf{b}| / |\\mathbf{b}| = 16.86 / 2.999 ≈ 5.62</span>예요. (수선의 발을 이용하는 방법: <span class=\"chem\">lambda = (\\mathbf{AP} \\cdot \\mathbf{b}) / |\\mathbf{b}|^2 ≈ 1.597</span>이고, 같은 거리를 얻어요.)</p>",
    },

    // ── t3-3-q038 · numeric · exam · AHL · AHL 3.15–3.16 · 5 marks
    "t3-3-q038": {
      // EN: <p>Two straight pipes in a factory are modelled by the skew lines <span class="chem">L_1: \mathbf{r} = (1.5, 0, -2.5) + lambda(2, -1, 3)</span> and <span class="chem">L_2: \mathbf{r} = (4, 2.5, 1) + mu(-1, 3, 0.5)</span>, in metres. A straight connecting rod is fitted perpendicular to both pipes. Find the length of the rod, correct to 3 significant figures.</p>
      stem: "<p>공장의 곧은 파이프 두 개가 꼬인 위치에 있는 직선 <span class=\"chem\">L_1: \\mathbf{r} = (1.5, 0, -2.5) + lambda(2, -1, 3)</span>과 <span class=\"chem\">L_2: \\mathbf{r} = (4, 2.5, 1) + mu(-1, 3, 0.5)</span>로 모델링되어 있어요(단위: 미터). 곧은 연결 막대를 두 파이프에 모두 수직이 되도록 설치해요. 막대의 길이를 구하시오 (Find). 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: Decode: a rod perpendicular to both skew lines is the common perpendicular, so its length is the shortest distance between the lines.
        "해석: 꼬인 위치에 있는 두 직선에 모두 수직인 막대는 공통수선이므로, 그 길이는 두 직선 사이의 최단 거리예요.",
        // EN: The common perpendicular is parallel to <span class="chem">\mathbf{n} = (2, -1, 3) \times (-1, 3, 0.5)</span>.
        "공통수선은 <span class=\"chem\">\\mathbf{n} = (2, -1, 3) \\times (-1, 3, 0.5)</span>와 평행해요.",
        // EN: Project <span class="chem">\mathbf{A_1A_2} = (2.5, 2.5, 3.5)</span> onto <span class="chem">\mathbf{n}</span>: <span class="chem">d = |\mathbf{A_1A_2} \cdot \mathbf{n}| / |\mathbf{n}|</span>.
        "<span class=\"chem\">\\mathbf{A_1A_2} = (2.5, 2.5, 3.5)</span>를 <span class=\"chem\">\\mathbf{n}</span>에 정사영해요: <span class=\"chem\">d = |\\mathbf{A_1A_2} \\cdot \\mathbf{n}| / |\\mathbf{n}|</span>.",
      ],
      // EN: <p><span class="chem">\mathbf{n} = (2, -1, 3) \times (-1, 3, 0.5) = (-9.5, -4, 5)</span>, <span class="chem">|\mathbf{n}| = sqrt(131.25) ≈ 11.46</span>. <span class="chem">\mathbf{A_1A_2} = (2.5, 2.5, 3.5)</span>, so <span class="chem">\mathbf{A_1A_2} \cdot \mathbf{n} = -23.75 - 10 + 17.5 = -16.25</span>. The length is <span class="chem">16.25 / 11.46 ≈ 1.42</span> m.</p>
      solution: "<p><span class=\"chem\">\\mathbf{n} = (2, -1, 3) \\times (-1, 3, 0.5) = (-9.5, -4, 5)</span>, <span class=\"chem\">|\\mathbf{n}| = sqrt(131.25) ≈ 11.46</span>. <span class=\"chem\">\\mathbf{A_1A_2} = (2.5, 2.5, 3.5)</span>이므로 <span class=\"chem\">\\mathbf{A_1A_2} \\cdot \\mathbf{n} = -23.75 - 10 + 17.5 = -16.25</span>예요. 길이는 <span class=\"chem\">16.25 / 11.46 ≈ 1.42</span> m예요.</p>",
    },

    // ── t3-3-q039 · numeric · exam · AHL · AHL 3.16 · 4 marks
    "t3-3-q039": {
      // EN: <p>A triangular plot of land on a hillside has corners at <span class="chem">P(12.4, 3.1, 2.6)</span>, <span class="chem">Q(30.8, -5.2, 7.9)</span> and <span class="chem">R(18.5, 21.7, 11.3)</span>, with coordinates in metres. Find the area of the plot, in square metres, correct to 3 significant figures.</p>
      stem: "<p>언덕 비탈에 있는 삼각형 모양 땅의 꼭짓점은 <span class=\"chem\">P(12.4, 3.1, 2.6)</span>, <span class=\"chem\">Q(30.8, -5.2, 7.9)</span>, <span class=\"chem\">R(18.5, 21.7, 11.3)</span>이고, 좌표의 단위는 미터예요. 이 땅의 넓이를 제곱미터 단위로 구하시오 (Find). 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: The plot is not horizontal, so do not use only the <span class="chem">x</span>- and <span class="chem">y</span>-coordinates.
        "이 땅은 수평이 아니므로 <span class=\"chem\">x</span>좌표와 <span class=\"chem\">y</span>좌표만 사용하면 안 돼요.",
        // EN: Area <span class="chem">= (1/2)|\mathbf{PQ} \times \mathbf{PR}|</span>.
        "넓이 <span class=\"chem\">= (1/2)|\\mathbf{PQ} \\times \\mathbf{PR}|</span>.",
      ],
      // EN: <p><span class="chem">\mathbf{PQ} = (18.4, -8.3, 5.3)</span>, <span class="chem">\mathbf{PR} = (6.1, 18.6, 8.7)</span>. <span class="chem">\mathbf{PQ} \times \mathbf{PR} ≈ (-170.79, -127.75, 392.87)</span>, with magnitude <span class="chem">≈ 447.0</span>. The area is <span class="chem">≈ 224</span> square metres.</p>
      solution: "<p><span class=\"chem\">\\mathbf{PQ} = (18.4, -8.3, 5.3)</span>, <span class=\"chem\">\\mathbf{PR} = (6.1, 18.6, 8.7)</span>. <span class=\"chem\">\\mathbf{PQ} \\times \\mathbf{PR} ≈ (-170.79, -127.75, 392.87)</span>이고, 그 크기는 <span class=\"chem\">≈ 447.0</span>이에요. 넓이는 <span class=\"chem\">≈ 224</span>제곱미터예요.</p>",
    },

    // ── t3-3-q040 · numeric · exam · AHL · AHL 3.18 · 5 marks
    "t3-3-q040": {
      // EN: <p>The line <span class="chem">L</span> passes through <span class="chem">A(2, -1, 4)</span> and <span class="chem">B(-3, 5, 1.5)</span>. Find the acute angle between <span class="chem">L</span> and the plane <span class="chem">3x - 4y + 2.5z = 7</span>, in degrees, correct to 3 significant figures.</p>
      stem: "<p>직선 <span class=\"chem\">L</span>은 <span class=\"chem\">A(2, -1, 4)</span>와 <span class=\"chem\">B(-3, 5, 1.5)</span>을 지나요. <span class=\"chem\">L</span>과 평면 <span class=\"chem\">3x - 4y + 2.5z = 7</span>이 이루는 예각을 도 단위로 구하시오 (Find). 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: A direction vector for <span class="chem">L</span> is <span class="chem">\mathbf{AB} = (-5, 6, -2.5)</span>; a normal to the plane is <span class="chem">(3, -4, 2.5)</span>.
        "<span class=\"chem\">L</span>의 방향벡터 하나는 <span class=\"chem\">\\mathbf{AB} = (-5, 6, -2.5)</span>이고, 평면의 법선벡터 하나는 <span class=\"chem\">(3, -4, 2.5)</span>예요.",
        // EN: The angle between a line and a plane uses sine: <span class="chem">sin phi = |\mathbf{b} \cdot \mathbf{n}| / (|\mathbf{b}||\mathbf{n}|)</span>.
        "직선과 평면이 이루는 각에는 사인을 이용해요: <span class=\"chem\">sin phi = |\\mathbf{b} \\cdot \\mathbf{n}| / (|\\mathbf{b}||\\mathbf{n}|)</span>.",
      ],
      // EN: <p><span class="chem">\mathbf{b} = (-5, 6, -2.5)</span>, <span class="chem">\mathbf{n} = (3, -4, 2.5)</span>. <span class="chem">\mathbf{b} \cdot \mathbf{n} = -15 - 24 - 6.25 = -45.25</span>, <span class="chem">|\mathbf{b}| = sqrt(67.25)</span>, <span class="chem">|\mathbf{n}| = sqrt(31.25)</span>. So <span class="chem">sin phi = 45.25 / sqrt(67.25 × 31.25) ≈ 0.9871</span> and <span class="chem">phi ≈ 80.8°</span>.</p>
      solution: "<p><span class=\"chem\">\\mathbf{b} = (-5, 6, -2.5)</span>, <span class=\"chem\">\\mathbf{n} = (3, -4, 2.5)</span>. <span class=\"chem\">\\mathbf{b} \\cdot \\mathbf{n} = -15 - 24 - 6.25 = -45.25</span>, <span class=\"chem\">|\\mathbf{b}| = sqrt(67.25)</span>, <span class=\"chem\">|\\mathbf{n}| = sqrt(31.25)</span>. 따라서 <span class=\"chem\">sin phi = 45.25 / sqrt(67.25 × 31.25) ≈ 0.9871</span>이고 <span class=\"chem\">phi ≈ 80.8°</span>예요.</p>",
    },

    // ── t3-3-q041 · numeric · exam · AHL · AHL 3.16, 3.18 · 6 marks
    "t3-3-q041": {
      // EN: <p>A flat solar panel is fixed on a roof. Three of its corners have coordinates <span class="chem">P(0, 0, 1.2)</span>, <span class="chem">Q(4.5, 0.6, 2.8)</span> and <span class="chem">R(-0.8, 3.0, 1.5)</span>, in metres, where the <span class="chem">z</span>-axis points vertically upwards and the ground is the plane <span class="chem">z = 0</span>. Find the angle between the panel and the horizontal ground, in degrees, correct to 3 significant figures.</p>
      stem: "<p>평평한 태양광 패널이 지붕에 고정되어 있어요. 패널의 세 꼭짓점의 좌표는 <span class=\"chem\">P(0, 0, 1.2)</span>, <span class=\"chem\">Q(4.5, 0.6, 2.8)</span>, <span class=\"chem\">R(-0.8, 3.0, 1.5)</span>(단위: 미터)이고, <span class=\"chem\">z</span>축은 연직 위쪽을 향하며 지면은 평면 <span class=\"chem\">z = 0</span>이에요. 패널과 수평인 지면이 이루는 각을 도 단위로 구하시오 (Find). 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: Decode: this is the angle between two planes: the plane of the panel and the plane <span class="chem">z = 0</span>. Use their normals.
        "해석: 이것은 두 평면, 즉 패널이 놓인 평면과 평면 <span class=\"chem\">z = 0</span>이 이루는 각이에요. 두 평면의 법선벡터를 이용해요.",
        // EN: A normal to the panel is <span class="chem">\mathbf{PQ} \times \mathbf{PR}</span>; a normal to the ground is <span class="chem">\mathbf{k} = (0, 0, 1)</span>.
        "패널의 법선벡터 하나는 <span class=\"chem\">\\mathbf{PQ} \\times \\mathbf{PR}</span>이고, 지면의 법선벡터 하나는 <span class=\"chem\">\\mathbf{k} = (0, 0, 1)</span>이에요.",
        // EN: Use <span class="chem">cos theta = |\mathbf{n_1} \cdot \mathbf{n_2}| / (|\mathbf{n_1}||\mathbf{n_2}|)</span>.
        "<span class=\"chem\">cos theta = |\\mathbf{n_1} \\cdot \\mathbf{n_2}| / (|\\mathbf{n_1}||\\mathbf{n_2}|)</span>를 이용해요.",
      ],
      // EN: <p><strong>Decode:</strong> angle between the panel plane and the ground plane, via normals.</p><p><span class="chem">\mathbf{PQ} = (4.5, 0.6, 1.6)</span>, <span class="chem">\mathbf{PR} = (-0.8, 3.0, 0.3)</span>. <span class="chem">\mathbf{n} = \mathbf{PQ} \times \mathbf{PR} = (-4.62, -2.63, 13.98)</span>. Then <span class="chem">cos theta = 13.98 / |\mathbf{n}| = 13.98 / 14.957 ≈ 0.9347</span>, so <span class="chem">theta ≈ 20.8°</span>.</p>
      solution: "<p><strong>해석:</strong> 법선벡터를 이용하여 패널 평면과 지면 평면이 이루는 각을 구해요.</p><p><span class=\"chem\">\\mathbf{PQ} = (4.5, 0.6, 1.6)</span>, <span class=\"chem\">\\mathbf{PR} = (-0.8, 3.0, 0.3)</span>. <span class=\"chem\">\\mathbf{n} = \\mathbf{PQ} \\times \\mathbf{PR} = (-4.62, -2.63, 13.98)</span>. 그러면 <span class=\"chem\">cos theta = 13.98 / |\\mathbf{n}| = 13.98 / 14.957 ≈ 0.9347</span>이므로 <span class=\"chem\">theta ≈ 20.8°</span>예요.</p>",
    },

    // ── t3-3-q042 · numeric · exam · AHL · AHL 3.14, 3.18 · 5 marks
    "t3-3-q042": {
      // EN: <p>A laser at <span class="chem">S(-2, 5, 9)</span> fires a straight beam in the direction <span class="chem">(1.5, -0.8, -2.2)</span>. The beam hits a mirror lying in the plane <span class="chem">x + 2y + 3z = 6</span> at the point <span class="chem">M</span>. All distances are in metres. Find the distance <span class="chem">SM</span>, correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">S(-2, 5, 9)</span>에 있는 레이저가 방향 <span class=\"chem\">(1.5, -0.8, -2.2)</span>으로 곧은 빔을 쏴요. 빔은 평면 <span class=\"chem\">x + 2y + 3z = 6</span> 위에 놓인 거울의 점 <span class=\"chem\">M</span>에 닿아요. 모든 거리의 단위는 미터예요. 거리 <span class=\"chem\">SM</span>을 구하시오 (Find). 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: The beam is the line <span class="chem">\mathbf{r} = (-2, 5, 9) + lambda(1.5, -0.8, -2.2)</span>.
        "빔은 직선 <span class=\"chem\">\\mathbf{r} = (-2, 5, 9) + lambda(1.5, -0.8, -2.2)</span>이에요.",
        // EN: Substitute into the plane equation to find <span class="chem">lambda</span> at <span class="chem">M</span>.
        "평면의 방정식에 대입하여 <span class=\"chem\">M</span>에서의 <span class=\"chem\">lambda</span>를 구해요.",
        // EN: Then <span class="chem">SM = |lambda| × |(1.5, -0.8, -2.2)|</span>.
        "그러면 <span class=\"chem\">SM = |lambda| × |(1.5, -0.8, -2.2)|</span>예요.",
      ],
      // EN: <p>Substituting: <span class="chem">(-2 + 1.5lambda) + 2(5 - 0.8lambda) + 3(9 - 2.2lambda) = 6 => 35 - 6.7lambda = 6 => lambda = 29/6.7 ≈ 4.328</span>. <span class="chem">|(1.5, -0.8, -2.2)| = sqrt(7.73) ≈ 2.780</span>, so <span class="chem">SM ≈ 4.328 × 2.780 ≈ 12.0</span> m.</p>
      solution: "<p>대입하면 <span class=\"chem\">(-2 + 1.5lambda) + 2(5 - 0.8lambda) + 3(9 - 2.2lambda) = 6 => 35 - 6.7lambda = 6 => lambda = 29/6.7 ≈ 4.328</span>예요. <span class=\"chem\">|(1.5, -0.8, -2.2)| = sqrt(7.73) ≈ 2.780</span>이므로 <span class=\"chem\">SM ≈ 4.328 × 2.780 ≈ 12.0</span> m예요.</p>",
    },

    // ── t3-3-q043 · short · exam · AHL · AHL 3.14–3.17 · 12 marks
    "t3-3-q043": {
      // EN: <p>The lines <span class="chem">L_1</span> and <span class="chem">L_2</span> have equations <span class="chem">L_1: \mathbf{r} = (1.2, -0.5, 3) + lambda(2, 1.5, -1)</span> and <span class="chem">L_2: \mathbf{r} = (1.6, -5, 2.5) + mu(1.2, 2.5, -0.5)</span>.</p><p>(a) Show that <span class="chem">L_1</span> and <span class="chem">L_2</span> intersect, and find the coordinates of the point of intersection <span class="chem">X</span>. <strong>[5 marks]</strong></p><p>(b) Find the acute angle between <span class="chem">L_1</span> and <span class="chem">L_2</span>, in degrees. <strong>[3 marks]</strong></p><p>(c) Find the Cartesian equation of the plane containing <span class="chem">L_1</span> and <span class="chem">L_2</span>, in the form <span class="chem">ax + by + cz = d</span> where <span class="chem">a, b, c, d \in \mathbb{Z}</span>. <strong>[4 marks]</strong></p>
      stem: "<p>두 직선 <span class=\"chem\">L_1</span>과 <span class=\"chem\">L_2</span>의 방정식은 <span class=\"chem\">L_1: \\mathbf{r} = (1.2, -0.5, 3) + lambda(2, 1.5, -1)</span>, <span class=\"chem\">L_2: \\mathbf{r} = (1.6, -5, 2.5) + mu(1.2, 2.5, -0.5)</span>이에요.</p><p>(a) <span class=\"chem\">L_1</span>과 <span class=\"chem\">L_2</span>가 만남을 보이고 (Show that), 교점 <span class=\"chem\">X</span>의 좌표를 구하시오 (find). <strong>[5 marks]</strong></p><p>(b) <span class=\"chem\">L_1</span>과 <span class=\"chem\">L_2</span>가 이루는 예각을 도 단위로 구하시오 (Find). <strong>[3 marks]</strong></p><p>(c) <span class=\"chem\">L_1</span>과 <span class=\"chem\">L_2</span>를 포함하는 평면의 직교 방정식을 <span class=\"chem\">a, b, c, d \\in \\mathbb{Z}</span>일 때 <span class=\"chem\">ax + by + cz = d</span>의 꼴로 구하시오 (Find). <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Use your GDC to solve the first two component equations simultaneously, then check the third.
        "GDC로 처음 두 성분의 식을 연립하여 풀고 나머지 한 식으로 확인해요.",
        // EN: For (c), the normal is perpendicular to both direction vectors. Multiply it by a suitable number to clear the decimals.
        "(c)에서 법선벡터는 두 방향벡터에 모두 수직이에요. 소수를 없애도록 적당한 수를 곱해요.",
      ],
      // EN: <p>(a) <span class="chem">1.2 + 2lambda = 1.6 + 1.2mu</span>, <span class="chem">-0.5 + 1.5lambda = -5 + 2.5mu</span>, <span class="chem">3 - lambda = 2.5 - 0.5mu</span>. Solving the first two (GDC): <span class="chem">lambda = 2</span>, <span class="chem">mu = 3</span>. Third: <span class="chem">3 - 2 = 1</span> and <span class="chem">2.5 - 1.5 = 1</span>, consistent. So the lines intersect at <span class="chem">X(5.2, 2.5, 1)</span>.</p><p>(b) <span class="chem">\mathbf{b_1} \cdot \mathbf{b_2} = 2.4 + 3.75 + 0.5 = 6.65</span>, <span class="chem">|\mathbf{b_1}| = sqrt(7.25)</span>, <span class="chem">|\mathbf{b_2}| = sqrt(7.94)</span>. <span class="chem">cos theta = 6.65 / sqrt(7.25 × 7.94) ≈ 0.8765</span>, so <span class="chem">theta ≈ 28.8°</span>.</p><p>(c) <span class="chem">\mathbf{b_1} \times \mathbf{b_2} = (1.75, -0.2, 3.2)</span>; multiply by 20: <span class="chem">\mathbf{n} = (35, -4, 64)</span>. With <span class="chem">X</span>: <span class="chem">35(5.2) - 4(2.5) + 64(1) = 236</span>, so the plane is <span class="chem">35x - 4y + 64z = 236</span>.</p>
      answer: "<p>(a) <span class=\"chem\">1.2 + 2lambda = 1.6 + 1.2mu</span>, <span class=\"chem\">-0.5 + 1.5lambda = -5 + 2.5mu</span>, <span class=\"chem\">3 - lambda = 2.5 - 0.5mu</span>. 처음 두 식을 풀면(GDC) <span class=\"chem\">lambda = 2</span>, <span class=\"chem\">mu = 3</span>예요. 세 번째 식: <span class=\"chem\">3 - 2 = 1</span>, <span class=\"chem\">2.5 - 1.5 = 1</span>으로 일치해요. 따라서 두 직선은 <span class=\"chem\">X(5.2, 2.5, 1)</span>에서 만나요.</p><p>(b) <span class=\"chem\">\\mathbf{b_1} \\cdot \\mathbf{b_2} = 2.4 + 3.75 + 0.5 = 6.65</span>, <span class=\"chem\">|\\mathbf{b_1}| = sqrt(7.25)</span>, <span class=\"chem\">|\\mathbf{b_2}| = sqrt(7.94)</span>. <span class=\"chem\">cos theta = 6.65 / sqrt(7.25 × 7.94) ≈ 0.8765</span>이므로 <span class=\"chem\">theta ≈ 28.8°</span>예요.</p><p>(c) <span class=\"chem\">\\mathbf{b_1} \\times \\mathbf{b_2} = (1.75, -0.2, 3.2)</span>이에요. 20을 곱하면 <span class=\"chem\">\\mathbf{n} = (35, -4, 64)</span>예요. <span class=\"chem\">X</span>를 이용하면 <span class=\"chem\">35(5.2) - 4(2.5) + 64(1) = 236</span>이므로 평면은 <span class=\"chem\">35x - 4y + 64z = 236</span>이에요.</p>",
      markscheme: [
        // EN: M1: equates components using two different parameters.
        "M1: 서로 다른 두 매개변수를 사용하여 성분을 같다고 놓음.",
        // EN: M1: solves two of the equations (GDC acceptable).
        "M1: 두 식을 풂 (GDC 사용 가능).",
        // EN: A1: <span class="chem">lambda = 2</span>, <span class="chem">mu = 3</span>.
        "A1: <span class=\"chem\">lambda = 2</span>, <span class=\"chem\">mu = 3</span>.",
        // EN: R1: shows the third equation is satisfied (both sides equal 1).
        "R1: 세 번째 식이 성립함을 보임 (양변이 모두 1).",
        // EN: A1: <span class="chem">X(5.2, 2.5, 1)</span>.
        "A1: <span class=\"chem\">X(5.2, 2.5, 1)</span>.",
        // EN: M1: uses the scalar product of the direction vectors.
        "M1: 방향벡터의 내적을 이용함.",
        // EN: A1: <span class="chem">cos theta ≈ 0.877</span> (or scalar product 6.65 with both magnitudes).
        "A1: <span class=\"chem\">cos theta ≈ 0.877</span> (또는 내적 6.65와 두 크기).",
        // EN: A1: <span class="chem">theta ≈ 28.8°</span>.
        "A1: <span class=\"chem\">theta ≈ 28.8°</span>.",
        // EN: M1: finds the vector product of the direction vectors.
        "M1: 방향벡터의 외적을 구함.",
        // EN: A1: <span class="chem">(1.75, -0.2, 3.2)</span> or an integer multiple such as <span class="chem">(35, -4, 64)</span>.
        "A1: <span class=\"chem\">(1.75, -0.2, 3.2)</span> 또는 <span class=\"chem\">(35, -4, 64)</span>과 같은 정수배.",
        // EN: M1: substitutes a point on either line.
        "M1: 어느 한 직선 위의 점을 대입함.",
        // EN: A1: <span class="chem">35x - 4y + 64z = 236</span> (or an integer multiple).
        "A1: <span class=\"chem\">35x - 4y + 64z = 236</span> (또는 그 정수배).",
      ],
    },

    // ── t3-3-q044 · short · exam · AHL · AHL 3.16–3.18 · 10 marks
    "t3-3-q044": {
      // EN: <p>The plane <span class="chem">Π</span> has vector equation <span class="chem">\mathbf{r} = (1, 0, 2) + s(2, -1, 1) + t(0.5, 3, -2)</span>, where <span class="chem">s, t \in \mathbb{R}</span>.</p><p>(a) Show that the Cartesian equation of <span class="chem">Π</span> is <span class="chem">-2x + 9y + 13z = 24</span>. <strong>[4 marks]</strong></p><p>The line <span class="chem">L</span> has equation <span class="chem">\mathbf{r} = (4, 4, -1) + lambda(1, 2, 1.5)</span>.</p><p>(b) Find the coordinates of the point where <span class="chem">L</span> meets <span class="chem">Π</span>. <strong>[3 marks]</strong></p><p>(c) Find the acute angle between <span class="chem">L</span> and <span class="chem">Π</span>, in degrees. <strong>[3 marks]</strong></p>
      stem: "<p>평면 <span class=\"chem\">Π</span>의 벡터방정식은 <span class=\"chem\">\\mathbf{r} = (1, 0, 2) + s(2, -1, 1) + t(0.5, 3, -2)</span>이에요. 단, <span class=\"chem\">s, t \\in \\mathbb{R}</span>예요.</p><p>(a) <span class=\"chem\">Π</span>의 직교 방정식이 <span class=\"chem\">-2x + 9y + 13z = 24</span>임을 보이시오 (Show that). <strong>[4 marks]</strong></p><p>직선 <span class=\"chem\">L</span>의 방정식은 <span class=\"chem\">\\mathbf{r} = (4, 4, -1) + lambda(1, 2, 1.5)</span>이에요.</p><p>(b) <span class=\"chem\">L</span>과 <span class=\"chem\">Π</span>가 만나는 점의 좌표를 구하시오 (Find). <strong>[3 marks]</strong></p><p>(c) <span class=\"chem\">L</span>과 <span class=\"chem\">Π</span>가 이루는 예각을 도 단위로 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: the vector form <span class="chem">\mathbf{r} = \mathbf{a} + s\mathbf{b} + t\mathbf{c}</span> gives two directions in the plane; their vector product is a normal.
        "해석: 벡터 형태 <span class=\"chem\">\\mathbf{r} = \\mathbf{a} + s\\mathbf{b} + t\\mathbf{c}</span>는 평면 위의 두 방향을 줘요. 두 방향벡터의 외적이 법선벡터예요.",
        // EN: For (b), write <span class="chem">x, y, z</span> of <span class="chem">L</span> in terms of <span class="chem">lambda</span> and substitute.
        "(b)에서는 <span class=\"chem\">L</span>의 <span class=\"chem\">x, y, z</span>를 <span class=\"chem\">lambda</span>로 나타내어 대입해요.",
        // EN: For (c), the angle between a line and a plane is <span class="chem">90°</span> minus the angle between the line and the normal.
        "(c)에서 직선과 평면이 이루는 각은 <span class=\"chem\">90°</span>에서 직선과 법선벡터가 이루는 각을 뺀 값이에요.",
      ],
      // EN: <p>(a) <span class="chem">(2, -1, 1) \times (0.5, 3, -2) = ((-1)(-2) - (1)(3), (1)(0.5) - (2)(-2), (2)(3) - (-1)(0.5)) = (-1, 4.5, 6.5)</span>, so <span class="chem">\mathbf{n} = (-2, 9, 13)</span>. <span class="chem">(1, 0, 2) \cdot (-2, 9, 13) = -2 + 0 + 26 = 24</span>, so <span class="chem">-2x + 9y + 13z = 24</span>.</p><p>(b) <span class="chem">-2(4 + lambda) + 9(4 + 2lambda) + 13(-1 + 1.5lambda) = 24 => 15 + 35.5lambda = 24 => lambda = 18/71 ≈ 0.2535</span>. The point is <span class="chem">≈ (4.25, 4.51, -0.620)</span>.</p><p>(c) <span class="chem">sin phi = |(1, 2, 1.5) \cdot (-2, 9, 13)| / (|(1, 2, 1.5)||(-2, 9, 13)|) = 35.5 / (sqrt(7.25) sqrt(254)) ≈ 0.8272</span>, so <span class="chem">phi ≈ 55.8°</span>.</p>
      answer: "<p>(a) <span class=\"chem\">(2, -1, 1) \\times (0.5, 3, -2) = ((-1)(-2) - (1)(3), (1)(0.5) - (2)(-2), (2)(3) - (-1)(0.5)) = (-1, 4.5, 6.5)</span>이므로 <span class=\"chem\">\\mathbf{n} = (-2, 9, 13)</span>이에요. <span class=\"chem\">(1, 0, 2) \\cdot (-2, 9, 13) = -2 + 0 + 26 = 24</span>이므로 <span class=\"chem\">-2x + 9y + 13z = 24</span>이에요.</p><p>(b) <span class=\"chem\">-2(4 + lambda) + 9(4 + 2lambda) + 13(-1 + 1.5lambda) = 24 => 15 + 35.5lambda = 24 => lambda = 18/71 ≈ 0.2535</span>. 그 점은 <span class=\"chem\">≈ (4.25, 4.51, -0.620)</span>이에요.</p><p>(c) <span class=\"chem\">sin phi = |(1, 2, 1.5) \\cdot (-2, 9, 13)| / (|(1, 2, 1.5)||(-2, 9, 13)|) = 35.5 / (sqrt(7.25) sqrt(254)) ≈ 0.8272</span>이므로 <span class=\"chem\">phi ≈ 55.8°</span>예요.</p>",
      markscheme: [
        // EN: M1: finds the vector product of the two direction vectors.
        "M1: 두 방향벡터의 외적을 구함.",
        // EN: A1: <span class="chem">(-1, 4.5, 6.5)</span> or a multiple such as <span class="chem">(-2, 9, 13)</span>.
        "A1: <span class=\"chem\">(-1, 4.5, 6.5)</span> 또는 <span class=\"chem\">(-2, 9, 13)</span>과 같은 실수배.",
        // EN: M1: uses <span class="chem">\mathbf{r} \cdot \mathbf{n} = \mathbf{a} \cdot \mathbf{n}</span> with <span class="chem">\mathbf{a} = (1, 0, 2)</span>.
        "M1: <span class=\"chem\">\\mathbf{a} = (1, 0, 2)</span>로 <span class=\"chem\">\\mathbf{r} \\cdot \\mathbf{n} = \\mathbf{a} \\cdot \\mathbf{n}</span>를 이용함.",
        // EN: A1: <span class="chem">\mathbf{a} \cdot \mathbf{n} = 24</span>, giving <span class="chem">-2x + 9y + 13z = 24</span> (AG).
        "A1: <span class=\"chem\">\\mathbf{a} \\cdot \\mathbf{n} = 24</span>이므로 <span class=\"chem\">-2x + 9y + 13z = 24</span>를 얻음 (AG).",
        // EN: M1: substitutes the parametric form of <span class="chem">L</span> into the equation of <span class="chem">Π</span>.
        "M1: <span class=\"chem\">L</span>의 매개변수 방정식을 <span class=\"chem\">Π</span>의 방정식에 대입함.",
        // EN: A1: <span class="chem">lambda = 18/71 ≈ 0.254</span>.
        "A1: <span class=\"chem\">lambda = 18/71 ≈ 0.254</span>.",
        // EN: A1: <span class="chem">(4.25, 4.51, -0.620)</span>.
        "A1: <span class=\"chem\">(4.25, 4.51, -0.620)</span>.",
        // EN: M1: uses sine (or <span class="chem">90° -</span> the angle with the normal) with the line direction and plane normal.
        "M1: 직선의 방향벡터와 평면의 법선벡터로 사인(또는 <span class=\"chem\">90° -</span> 법선벡터와 이루는 각)을 이용함.",
        // EN: A1: <span class="chem">sin phi ≈ 0.827</span>.
        "A1: <span class=\"chem\">sin phi ≈ 0.827</span>.",
        // EN: A1: <span class="chem">phi ≈ 55.8°</span>.
        "A1: <span class=\"chem\">phi ≈ 55.8°</span>.",
      ],
    },

    // ── t3-3-q045 · numeric · exam · AHL · AHL 3.12, 3.14 · 6 marks
    "t3-3-q045": {
      // EN: <p>A submarine is at the point <span class="chem">(120, -40, -15)</span> and travels in a straight line at a constant speed of <span class="unit">4.5 m s-1</span> towards a research station at <span class="chem">(-60, 210, -90)</span>. Coordinates are in metres and the <span class="chem">z</span>-axis points vertically upwards from sea level. Find the time it takes for the submarine to reach a depth of 50 m below sea level, in seconds, correct to 3 significant figures.</p>
      stem: "<p>잠수함이 점 <span class=\"chem\">(120, -40, -15)</span>에 있고, <span class=\"chem\">(-60, 210, -90)</span>에 있는 연구 기지를 향해 일정한 속력 <span class=\"unit\">4.5 m s-1</span>로 직선으로 이동해요. 좌표의 단위는 미터이고, <span class=\"chem\">z</span>축은 해수면에서 연직 위쪽을 향해요. 잠수함이 해수면 아래 50 m 깊이에 도달하는 데 걸리는 시간을 초 단위로 구하시오 (Find). 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: Decode: "a depth of 50 m below sea level" means <span class="chem">z = -50</span>. You need the velocity vector, which is the unit direction vector rescaled to speed 4.5.
        "해석: \"해수면 아래 50 m 깊이\"는 <span class=\"chem\">z = -50</span>라는 뜻이에요. 속도벡터가 필요한데, 이는 단위 방향벡터를 속력 4.5에 맞게 늘린 벡터예요.",
        // EN: The direction is <span class="chem">(-180, 250, -75)</span>, with magnitude <span class="chem">≈ 317.06</span>.
        "방향은 <span class=\"chem\">(-180, 250, -75)</span>이고, 그 크기는 <span class=\"chem\">≈ 317.06</span>이에요.",
        // EN: The <span class="chem">z</span>-component of the velocity is <span class="chem">4.5 × (-75)/317.06</span>. Solve <span class="chem">-15 + v_z t = -50</span>.
        "속도의 <span class=\"chem\">z</span>성분은 <span class=\"chem\">4.5 × (-75)/317.06</span>이에요. <span class=\"chem\">-15 + v_z t = -50</span>을 풀어요.",
      ],
      // EN: <p><strong>Decode:</strong> depth 50 m means <span class="chem">z = -50</span>; the velocity is the rescaled direction.</p><p>Direction <span class="chem">(-180, 250, -75)</span>, magnitude <span class="chem">sqrt(100525) ≈ 317.06</span>. Velocity <span class="chem">\mathbf{v} = (4.5/317.06)(-180, 250, -75) ≈ (-2.555, 3.548, -1.0645)</span>. Then <span class="chem">-15 - 1.0645t = -50 => t ≈ 32.9</span> s.</p>
      solution: "<p><strong>해석:</strong> 깊이 50 m는 <span class=\"chem\">z = -50</span>이고, 속도는 방향벡터의 크기를 조절한 것이에요.</p><p>방향 <span class=\"chem\">(-180, 250, -75)</span>, 크기 <span class=\"chem\">sqrt(100525) ≈ 317.06</span>. 속도 <span class=\"chem\">\\mathbf{v} = (4.5/317.06)(-180, 250, -75) ≈ (-2.555, 3.548, -1.0645)</span>. 그러면 <span class=\"chem\">-15 - 1.0645t = -50 => t ≈ 32.9</span> s예요.</p>",
    },

    // ── t3-3-q046 · numeric · exam · AHL · AHL 3.14 · 5 marks
    "t3-3-q046": {
      // EN: <p>Two straight cables in a stadium roof follow the lines <span class="chem">(x - 2)/3.5 = (y + 1)/(-2) = z/1.5</span> and <span class="chem">(x + 4)/(-1) = (y - 3)/2.5 = (z - 1)/(-4)</span>. Find the acute angle between the two cables, in degrees, correct to 3 significant figures.</p>
      stem: "<p>경기장 지붕의 곧은 케이블 두 개가 직선 <span class=\"chem\">(x - 2)/3.5 = (y + 1)/(-2) = z/1.5</span>과 <span class=\"chem\">(x + 4)/(-1) = (y - 3)/2.5 = (z - 1)/(-4)</span>를 따라 놓여 있어요. 두 케이블이 이루는 예각을 도 단위로 구하시오 (Find). 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: Decode: the angle between two lines is found from their direction vectors, which are the denominators of the Cartesian forms.
        "해석: 두 직선이 이루는 각은 방향벡터로 구하는데, 방향벡터는 직교 방정식의 분모예요.",
        // EN: The direction vectors are <span class="chem">(3.5, -2, 1.5)</span> and <span class="chem">(-1, 2.5, -4)</span>. Their scalar product is negative: what does that tell you?
        "방향벡터는 <span class=\"chem\">(3.5, -2, 1.5)</span>와 <span class=\"chem\">(-1, 2.5, -4)</span>예요. 두 벡터의 내적이 음수예요. 이것은 무엇을 뜻할까요?",
        // EN: Use <span class="chem">cos theta = |\mathbf{b_1} \cdot \mathbf{b_2}| / (|\mathbf{b_1}||\mathbf{b_2}|)</span> for the acute angle.
        "예각을 구하려면 <span class=\"chem\">cos theta = |\\mathbf{b_1} \\cdot \\mathbf{b_2}| / (|\\mathbf{b_1}||\\mathbf{b_2}|)</span>를 이용해요.",
      ],
      // EN: <p><span class="chem">\mathbf{b_1} \cdot \mathbf{b_2} = -3.5 - 5 - 6 = -14.5</span>, <span class="chem">|\mathbf{b_1}| = sqrt(18.5)</span>, <span class="chem">|\mathbf{b_2}| = sqrt(23.25)</span>. Without the modulus, <span class="chem">cos theta ≈ -0.6992</span> gives <span class="chem">134.4°</span>, which is obtuse. The acute angle is <span class="chem">arccos(0.6992) ≈ 45.6°</span>.</p>
      solution: "<p><span class=\"chem\">\\mathbf{b_1} \\cdot \\mathbf{b_2} = -3.5 - 5 - 6 = -14.5</span>, <span class=\"chem\">|\\mathbf{b_1}| = sqrt(18.5)</span>, <span class=\"chem\">|\\mathbf{b_2}| = sqrt(23.25)</span>. 절댓값을 취하지 않으면 <span class=\"chem\">cos theta ≈ -0.6992</span>에서 <span class=\"chem\">134.4°</span>가 되는데, 이는 둔각이에요. 예각은 <span class=\"chem\">arccos(0.6992) ≈ 45.6°</span>예요.</p>",
    },

    // ── t3-3-q047 · short · exam · AHL · AHL 3.14–3.16, 3.18 · 10 marks
    "t3-3-q047": {
      // EN: <p>The planes <span class="chem">Π_1: 1.5x - 2y + z = 4</span> and <span class="chem">Π_2: x + 3y - 2.5z = -1</span> meet in the line <span class="chem">L</span>.</p><p>(a) Find a direction vector for <span class="chem">L</span>. <strong>[2 marks]</strong></p><p>(b) Find the point on <span class="chem">L</span> with <span class="chem">z = 0</span>, and hence write down a vector equation of <span class="chem">L</span>. <strong>[3 marks]</strong></p><p>(c) Find the acute angle between <span class="chem">Π_1</span> and <span class="chem">Π_2</span>, in degrees. <strong>[2 marks]</strong></p><p>(d) Find the shortest distance from the point <span class="chem">P(3, 2, 5)</span> to <span class="chem">L</span>. <strong>[3 marks]</strong></p>
      stem: "<p>두 평면 <span class=\"chem\">Π_1: 1.5x - 2y + z = 4</span>과 <span class=\"chem\">Π_2: x + 3y - 2.5z = -1</span>가 직선 <span class=\"chem\">L</span>에서 만나요.</p><p>(a) <span class=\"chem\">L</span>의 방향벡터를 하나 구하시오 (Find). <strong>[2 marks]</strong></p><p>(b) <span class=\"chem\">L</span> 위에서 <span class=\"chem\">z = 0</span>인 점을 구하고 (Find), 이를 이용하여 (hence) <span class=\"chem\">L</span>의 벡터방정식을 하나 쓰시오 (write down). <strong>[3 marks]</strong></p><p>(c) <span class=\"chem\">Π_1</span>과 <span class=\"chem\">Π_2</span>가 이루는 예각을 도 단위로 구하시오 (Find). <strong>[2 marks]</strong></p><p>(d) 점 <span class=\"chem\">P(3, 2, 5)</span>에서 <span class=\"chem\">L</span>까지의 최단 거리를 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: The line of intersection is perpendicular to both normal vectors.
        "교선은 두 법선벡터에 모두 수직이에요.",
        // EN: Set <span class="chem">z = 0</span> and solve the two equations on your GDC.
        "<span class=\"chem\">z = 0</span>으로 놓고 GDC로 두 방정식을 풀어요.",
        // EN: For (d), <span class="chem">d = |\mathbf{AP} \times \mathbf{b}| / |\mathbf{b}|</span> where <span class="chem">A</span> is your point on <span class="chem">L</span>.
        "(d)에서는 <span class=\"chem\">d = |\\mathbf{AP} \\times \\mathbf{b}| / |\\mathbf{b}|</span>를 이용해요. 여기서 <span class=\"chem\">A</span>는 <span class=\"chem\">L</span> 위에서 구한 점이에요.",
      ],
      // EN: <p>(a) <span class="chem">(1.5, -2, 1) \times (1, 3, -2.5) = (2, 4.75, 6.5)</span>, or <span class="chem">(8, 19, 26)</span>.</p><p>(b) With <span class="chem">z = 0</span>: <span class="chem">1.5x - 2y = 4</span> and <span class="chem">x + 3y = -1</span>, so <span class="chem">x = 20/13 ≈ 1.538</span>, <span class="chem">y = -11/13 ≈ -0.846</span>. <span class="chem">L: \mathbf{r} = (20/13, -11/13, 0) + t(8, 19, 26)</span>.</p><p>(c) <span class="chem">\mathbf{n_1} \cdot \mathbf{n_2} = 1.5 - 6 - 2.5 = -7</span>, <span class="chem">|\mathbf{n_1}| = sqrt(7.25)</span>, <span class="chem">|\mathbf{n_2}| = sqrt(16.25)</span>. <span class="chem">cos theta = 7 / sqrt(7.25 × 16.25) ≈ 0.6449</span>, so <span class="chem">theta ≈ 49.8°</span>.</p><p>(d) With <span class="chem">A(20/13, -11/13, 0)</span>, <span class="chem">d = |\mathbf{AP} \times \mathbf{b}| / |\mathbf{b}| ≈ 0.653</span> (or minimise <span class="chem">|\mathbf{AP} - t\mathbf{b}|</span> on the GDC).</p>
      answer: "<p>(a) <span class=\"chem\">(1.5, -2, 1) \\times (1, 3, -2.5) = (2, 4.75, 6.5)</span>, 또는 <span class=\"chem\">(8, 19, 26)</span>.</p><p>(b) <span class=\"chem\">z = 0</span>일 때 <span class=\"chem\">1.5x - 2y = 4</span>, <span class=\"chem\">x + 3y = -1</span>이므로 <span class=\"chem\">x = 20/13 ≈ 1.538</span>, <span class=\"chem\">y = -11/13 ≈ -0.846</span>이에요. <span class=\"chem\">L: \\mathbf{r} = (20/13, -11/13, 0) + t(8, 19, 26)</span>.</p><p>(c) <span class=\"chem\">\\mathbf{n_1} \\cdot \\mathbf{n_2} = 1.5 - 6 - 2.5 = -7</span>, <span class=\"chem\">|\\mathbf{n_1}| = sqrt(7.25)</span>, <span class=\"chem\">|\\mathbf{n_2}| = sqrt(16.25)</span>. <span class=\"chem\">cos theta = 7 / sqrt(7.25 × 16.25) ≈ 0.6449</span>이므로 <span class=\"chem\">theta ≈ 49.8°</span>예요.</p><p>(d) <span class=\"chem\">A(20/13, -11/13, 0)</span>로 놓으면 <span class=\"chem\">d = |\\mathbf{AP} \\times \\mathbf{b}| / |\\mathbf{b}| ≈ 0.653</span>예요(또는 GDC로 <span class=\"chem\">|\\mathbf{AP} - t\\mathbf{b}|</span>의 최솟값을 구해요).</p>",
      markscheme: [
        // EN: M1: uses <span class="chem">\mathbf{n_1} \times \mathbf{n_2}</span>.
        "M1: <span class=\"chem\">\\mathbf{n_1} \\times \\mathbf{n_2}</span>를 이용함.",
        // EN: A1: <span class="chem">(2, 4.75, 6.5)</span> or any non-zero multiple.
        "A1: <span class=\"chem\">(2, 4.75, 6.5)</span> 또는 영벡터가 아닌 임의의 실수배.",
        // EN: M1: solves the two plane equations with <span class="chem">z = 0</span> (GDC acceptable).
        "M1: <span class=\"chem\">z = 0</span>일 때 두 평면의 방정식을 풂 (GDC 사용 가능).",
        // EN: A1: <span class="chem">(1.54, -0.846, 0)</span> (exactly <span class="chem">(20/13, -11/13, 0)</span>).
        "A1: <span class=\"chem\">(1.54, -0.846, 0)</span> (정확한 값은 <span class=\"chem\">(20/13, -11/13, 0)</span>).",
        // EN: A1: a correct vector equation with <span class="chem">\mathbf{r} =</span>.
        "A1: <span class=\"chem\">\\mathbf{r} =</span>를 포함한 올바른 벡터방정식.",
        // EN: M1: uses the normals with <span class="chem">cos theta = |\mathbf{n_1} \cdot \mathbf{n_2}| / (|\mathbf{n_1}||\mathbf{n_2}|)</span>.
        "M1: 법선벡터로 <span class=\"chem\">cos theta = |\\mathbf{n_1} \\cdot \\mathbf{n_2}| / (|\\mathbf{n_1}||\\mathbf{n_2}|)</span>를 이용함.",
        // EN: A1: <span class="chem">theta ≈ 49.8°</span>.
        "A1: <span class=\"chem\">theta ≈ 49.8°</span>.",
        // EN: M1: a valid method for point-to-line distance (vector product formula, or perpendicular foot).
        "M1: 점과 직선 사이의 거리를 구하는 올바른 방법 (외적 공식 또는 수선의 발).",
        // EN: A1: <span class="chem">\mathbf{AP} ≈ (1.462, 2.846, 5)</span> and a correct product or foot parameter <span class="chem">t ≈ 0.711</span> (for the direction <span class="chem">(2, 4.75, 6.5)</span>).
        "A1: <span class=\"chem\">\\mathbf{AP} ≈ (1.462, 2.846, 5)</span>와 올바른 곱 또는 수선의 발의 매개변수 <span class=\"chem\">t ≈ 0.711</span> (방향 <span class=\"chem\">(2, 4.75, 6.5)</span>의 경우).",
        // EN: A1: distance <span class="chem">≈ 0.653</span>.
        "A1: 거리 <span class=\"chem\">≈ 0.653</span>.",
      ],
    },

    // ── t3-3-q048 · numeric · challenge · AHL · AHL 3.12, 3.14 · 6 marks
    "t3-3-q048": {
      // EN: <p>A coastguard radar station is at the origin and can detect ships up to 12.5 km away. At noon a ship is at <span class="chem">(-20, 6)</span> and it sails with constant velocity <span class="chem">(8, -1.5)</span> km per hour, so <span class="chem">t</span> hours after noon its position is <span class="chem">\mathbf{r} = (-20, 6) + t(8, -1.5)</span>. Find the length of time, in hours, for which the ship can be detected by the radar, correct to 3 significant figures.</p>
      stem: "<p>해안경비대 레이더 기지가 원점에 있고, 12.5 km 이내의 배를 탐지할 수 있어요. 정오에 한 배가 <span class=\"chem\">(-20, 6)</span>에 있고 일정한 속도 <span class=\"chem\">(8, -1.5)</span> km/시로 항해하므로, 정오에서 <span class=\"chem\">t</span>시간 후의 위치는 <span class=\"chem\">\\mathbf{r} = (-20, 6) + t(8, -1.5)</span>예요. 레이더가 이 배를 탐지할 수 있는 시간의 길이를 시간 단위로 구하시오 (Find). 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: Decode: "can be detected" means the distance from the origin is at most 12.5 km. You need the two times when <span class="chem">|\mathbf{r}(t)| = 12.5</span>, then the gap between them.
        "해석: \"탐지할 수 있다\"는 원점으로부터의 거리가 12.5 km 이하라는 뜻이에요. <span class=\"chem\">|\\mathbf{r}(t)| = 12.5</span>가 되는 두 시각을 구한 다음 그 차를 구해요.",
        // EN: Write <span class="chem">|\mathbf{r}(t)|^2 = (-20 + 8t)^2 + (6 - 1.5t)^2 = 12.5^2</span>.
        "<span class=\"chem\">|\\mathbf{r}(t)|^2 = (-20 + 8t)^2 + (6 - 1.5t)^2 = 12.5^2</span>로 써요.",
        // EN: Solve the quadratic on your GDC (or intersect the graph of <span class="chem">|\mathbf{r}(t)|</span> with <span class="chem">y = 12.5</span>) and subtract the two roots.
        "GDC로 이 이차방정식을 풀고(또는 <span class=\"chem\">|\\mathbf{r}(t)|</span>의 그래프와 <span class=\"chem\">y = 12.5</span>의 교점을 구하고) 두 근을 빼요.",
      ],
      // EN: <p><strong>Decode:</strong> detected while <span class="chem">|\mathbf{r}(t)| &lt;= 12.5</span>, so find when the ship enters and leaves the circle of radius 12.5.</p><p><span class="chem">(-20 + 8t)^2 + (6 - 1.5t)^2 = 156.25 => 66.25t^2 - 338t + 279.75 = 0</span>. GDC: <span class="chem">t ≈ 1.0394</span> and <span class="chem">t ≈ 4.0625</span>. The ship is detectable for <span class="chem">4.0625 - 1.0394 ≈ 3.02</span> hours.</p>
      solution: "<p><strong>해석:</strong> <span class=\"chem\">|\\mathbf{r}(t)| &lt;= 12.5</span>인 동안 탐지되므로, 배가 반지름 12.5인 원에 들어가는 시각과 나오는 시각을 구해요.</p><p><span class=\"chem\">(-20 + 8t)^2 + (6 - 1.5t)^2 = 156.25 => 66.25t^2 - 338t + 279.75 = 0</span>. GDC: <span class=\"chem\">t ≈ 1.0394</span>, <span class=\"chem\">t ≈ 4.0625</span>. 배가 탐지되는 시간은 <span class=\"chem\">4.0625 - 1.0394 ≈ 3.02</span>시간이에요.</p>",
      // EN: hours
      unit: "시간",
    },

    // ── t3-3-q049 · numeric · challenge · AHL · AHL 3.14 · 7 marks
    "t3-3-q049": {
      // EN: <p>Drone A takes off at time <span class="chem">t = 0</span> seconds and flies with position <span class="chem">\mathbf{r_A} = (0, 0, 50) + t(4, 3, 0.5)</span>, in metres. Drone B waits on a platform at <span class="chem">(300, -50, 20)</span> and sets off <strong>20 seconds later</strong>, flying with constant velocity <span class="chem">(-5, 6, 1.5)</span> m s<sup>−1</sup>. Find the minimum distance between the two drones once both are flying, correct to 3 significant figures.</p>
      stem: "<p>드론 A는 시각 <span class=\"chem\">t = 0</span>초에 이륙하여 위치 <span class=\"chem\">\\mathbf{r_A} = (0, 0, 50) + t(4, 3, 0.5)</span>(단위: 미터)로 비행해요. 드론 B는 <span class=\"chem\">(300, -50, 20)</span>에 있는 받침대에서 기다리다가 <strong>20초 후에</strong> 출발하여 일정한 속도 <span class=\"chem\">(-5, 6, 1.5)</span> m s<sup>−1</sup>로 비행해요. 두 드론이 모두 비행하고 있을 때 두 드론 사이의 최단 거리를 구하시오 (Find). 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: Decode: B starts late, so its position is not <span class="chem">(300, -50, 20) + t(-5, 6, 1.5)</span>. For <span class="chem">t &gt;= 20</span> it is <span class="chem">(300, -50, 20) + (t - 20)(-5, 6, 1.5)</span>.
        "해석: B는 늦게 출발하므로 위치가 <span class=\"chem\">(300, -50, 20) + t(-5, 6, 1.5)</span>가 아니에요. <span class=\"chem\">t &gt;= 20</span>일 때 위치는 <span class=\"chem\">(300, -50, 20) + (t - 20)(-5, 6, 1.5)</span>예요.",
        // EN: Form <span class="chem">\mathbf{r_A} - \mathbf{r_B}</span> as a function of <span class="chem">t</span> and minimise its magnitude (GDC graph, or set its scalar product with the relative velocity to zero).
        "<span class=\"chem\">\\mathbf{r_A} - \\mathbf{r_B}</span>를 <span class=\"chem\">t</span>의 함수로 나타내고 그 크기를 최소화해요(GDC 그래프, 또는 상대 속도와의 내적을 영(zero)으로 놓기).",
        // EN: Check that the time you find satisfies <span class="chem">t &gt;= 20</span>.
        "구한 시각이 <span class=\"chem\">t &gt;= 20</span>를 만족하는지 확인해요.",
      ],
      // EN: <p><strong>Decode:</strong> the late start shifts the time in the equation of B to <span class="chem">t - 20</span>.</p><p>For <span class="chem">t &gt;= 20</span>: <span class="chem">\mathbf{r_B} = (300, -50, 20) + (t - 20)(-5, 6, 1.5) = (400, -170, -10) + t(-5, 6, 1.5)</span>. <span class="chem">\mathbf{r_A} - \mathbf{r_B} = (-400, 170, 60) + t(9, -3, -1)</span>. Setting its scalar product with <span class="chem">(9, -3, -1)</span> to 0: <span class="chem">-3600 - 510 - 60 + 91t = 0 => t ≈ 45.82</span> s, which is after 20 s. The minimum distance is <span class="chem">≈ 37.6</span> m. (Ignoring the delay gives the wrong answer 47.5 m.)</p>
      solution: "<p><strong>해석:</strong> 늦은 출발 때문에 B의 식에서 시간이 <span class=\"chem\">t - 20</span>로 바뀌어요.</p><p><span class=\"chem\">t &gt;= 20</span>일 때: <span class=\"chem\">\\mathbf{r_B} = (300, -50, 20) + (t - 20)(-5, 6, 1.5) = (400, -170, -10) + t(-5, 6, 1.5)</span>. <span class=\"chem\">\\mathbf{r_A} - \\mathbf{r_B} = (-400, 170, 60) + t(9, -3, -1)</span>. <span class=\"chem\">(9, -3, -1)</span>와의 내적을 0으로 놓으면 <span class=\"chem\">-3600 - 510 - 60 + 91t = 0 => t ≈ 45.82</span> s이고, 이는 20 s 이후예요. 최단 거리는 <span class=\"chem\">≈ 37.6</span> m예요. (지연을 무시하면 틀린 답 47.5 m가 나와요.)</p>",
    },

    // ── t3-3-q050 · numeric · challenge · AHL · AHL 3.16, 3.18 · 6 marks
    "t3-3-q050": {
      // EN: <p>A tent is modelled as a tetrahedron with its base <span class="chem">ABC</span> on flat ground (the plane <span class="chem">z = 0</span>) and its top at <span class="chem">D</span>. In metres, <span class="chem">A(0, 0, 0)</span>, <span class="chem">B(6.2, 0, 0)</span>, <span class="chem">C(1.8, 5.1, 0)</span> and <span class="chem">D(2.5, 1.9, 4.3)</span>. Find the angle that the side panel <span class="chem">ABD</span> makes with the ground, in degrees, correct to 3 significant figures.</p>
      stem: "<p>텐트가 사면체로 모델링되어 있어요. 밑면 <span class=\"chem\">ABC</span>는 평평한 지면(평면 <span class=\"chem\">z = 0</span>) 위에 있고 꼭대기는 <span class=\"chem\">D</span>예요. 미터 단위로 <span class=\"chem\">A(0, 0, 0)</span>, <span class=\"chem\">B(6.2, 0, 0)</span>, <span class=\"chem\">C(1.8, 5.1, 0)</span>, <span class=\"chem\">D(2.5, 1.9, 4.3)</span>이에요. 옆면 <span class=\"chem\">ABD</span>가 지면과 이루는 각을 도 단위로 구하시오 (Find). 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: Decode: the panel <span class="chem">ABD</span> and the ground are two planes. The angle between them is the angle between their normals (taken acute). The point <span class="chem">C</span> is not needed.
        "해석: 옆면 <span class=\"chem\">ABD</span>와 지면은 두 평면이에요. 두 평면이 이루는 각은 법선벡터가 이루는 각(예각을 택함)이에요. 점 <span class=\"chem\">C</span>는 필요하지 않아요.",
        // EN: A normal to the panel is <span class="chem">\mathbf{AB} \times \mathbf{AD}</span>; a normal to the ground is <span class="chem">(0, 0, 1)</span>.
        "옆면의 법선벡터 하나는 <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AD}</span>이고, 지면의 법선벡터 하나는 <span class=\"chem\">(0, 0, 1)</span>이에요.",
        // EN: <span class="chem">\mathbf{AB} \times \mathbf{AD} = (0, -26.66, 11.78)</span>.
        "<span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AD} = (0, -26.66, 11.78)</span>.",
      ],
      // EN: <p><strong>Decode:</strong> angle between plane <span class="chem">ABD</span> and plane <span class="chem">z = 0</span>; <span class="chem">C</span> is extra information.</p><p><span class="chem">\mathbf{AB} = (6.2, 0, 0)</span>, <span class="chem">\mathbf{AD} = (2.5, 1.9, 4.3)</span>, <span class="chem">\mathbf{n} = \mathbf{AB} \times \mathbf{AD} = (0, -26.66, 11.78)</span>. <span class="chem">cos theta = 11.78 / sqrt(26.66^2 + 11.78^2) ≈ 0.4042</span>, so <span class="chem">theta ≈ 66.2°</span>. (Check: <span class="chem">AB</span> is along the <span class="chem">x</span>-axis, so <span class="chem">tan theta = 4.3/1.9</span> also works.)</p>
      solution: "<p><strong>해석:</strong> 평면 <span class=\"chem\">ABD</span>와 평면 <span class=\"chem\">z = 0</span>이 이루는 각이에요. <span class=\"chem\">C</span>는 필요 없는 정보예요.</p><p><span class=\"chem\">\\mathbf{AB} = (6.2, 0, 0)</span>, <span class=\"chem\">\\mathbf{AD} = (2.5, 1.9, 4.3)</span>, <span class=\"chem\">\\mathbf{n} = \\mathbf{AB} \\times \\mathbf{AD} = (0, -26.66, 11.78)</span>. <span class=\"chem\">cos theta = 11.78 / sqrt(26.66^2 + 11.78^2) ≈ 0.4042</span>이므로 <span class=\"chem\">theta ≈ 66.2°</span>예요. (확인: <span class=\"chem\">AB</span>는 <span class=\"chem\">x</span>축 위에 있으므로 <span class=\"chem\">tan theta = 4.3/1.9</span>로 구해도 돼요.)</p>",
    },

    // ── t3-3-q051 · numeric · challenge · AHL · AHL 3.13, 3.18 · 6 marks
    "t3-3-q051": {
      // EN: <p>A light beam leaves a lamp at <span class="chem">S(1, -2, 0.5)</span>, passes through a small window at <span class="chem">W(3.5, 1, 2.3)</span> and then strikes a sloping glass roof in the plane <span class="chem">2x - y + 4z = 30</span>. In optics, the <em>angle of incidence</em> is the angle between the incoming beam and the normal to the surface. Find the angle of incidence, in degrees, correct to 3 significant figures.</p>
      stem: "<p>빛이 <span class=\"chem\">S(1, -2, 0.5)</span>에 있는 램프에서 나와 <span class=\"chem\">W(3.5, 1, 2.3)</span>에 있는 작은 창문을 지난 다음, 평면 <span class=\"chem\">2x - y + 4z = 30</span> 위에 놓인 기울어진 유리 지붕에 닿아요. 광학에서 <em>입사각</em>은 들어오는 빛과 면의 법선이 이루는 각이에요. 입사각을 도 단위로 구하시오 (Find). 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: Decode: the angle asked for is between the beam and the <strong>normal</strong>, not between the beam and the plane. So use cosine with the normal; do not use the line-plane sine formula.
        "해석: 구하는 각은 빛과 <strong>법선</strong>이 이루는 각이지, 빛과 평면이 이루는 각이 아니에요. 따라서 법선벡터와의 코사인을 이용하고, 직선과 평면이 이루는 각의 사인 공식은 쓰지 마세요.",
        // EN: The beam direction is <span class="chem">\mathbf{SW} = (2.5, 3, 1.8)</span> and the normal is <span class="chem">(2, -1, 4)</span>.
        "빛의 방향은 <span class=\"chem\">\\mathbf{SW} = (2.5, 3, 1.8)</span>이고 법선벡터는 <span class=\"chem\">(2, -1, 4)</span>이에요.",
        // EN: Take the acute angle: <span class="chem">cos theta = |\mathbf{SW} \cdot \mathbf{n}| / (|\mathbf{SW}||\mathbf{n}|)</span>.
        "예각을 택해요: <span class=\"chem\">cos theta = |\\mathbf{SW} \\cdot \\mathbf{n}| / (|\\mathbf{SW}||\\mathbf{n}|)</span>.",
      ],
      // EN: <p><strong>Decode:</strong> angle between the line and the normal, which is <span class="chem">90°</span> minus the line-plane angle.</p><p><span class="chem">\mathbf{SW} = (2.5, 3, 1.8)</span>, <span class="chem">\mathbf{n} = (2, -1, 4)</span>. <span class="chem">\mathbf{SW} \cdot \mathbf{n} = 5 - 3 + 7.2 = 9.2</span>, <span class="chem">|\mathbf{SW}| = sqrt(18.49) = 4.3</span>, <span class="chem">|\mathbf{n}| = sqrt(21)</span>. <span class="chem">cos theta = 9.2 / (4.3 sqrt(21)) ≈ 0.4669</span>, so <span class="chem">theta ≈ 62.2°</span>. (The beam does reach the roof: it meets the plane at <span class="chem">lambda ≈ 2.61 &gt; 0</span> on <span class="chem">\mathbf{r} = \mathbf{OS} + lambda \mathbf{SW}</span>. The line-plane angle would be <span class="chem">27.8°</span>, the trap answer.)</p>
      solution: "<p><strong>해석:</strong> 직선과 법선이 이루는 각으로, <span class=\"chem\">90°</span>에서 직선과 평면이 이루는 각을 뺀 값이에요.</p><p><span class=\"chem\">\\mathbf{SW} = (2.5, 3, 1.8)</span>, <span class=\"chem\">\\mathbf{n} = (2, -1, 4)</span>. <span class=\"chem\">\\mathbf{SW} \\cdot \\mathbf{n} = 5 - 3 + 7.2 = 9.2</span>, <span class=\"chem\">|\\mathbf{SW}| = sqrt(18.49) = 4.3</span>, <span class=\"chem\">|\\mathbf{n}| = sqrt(21)</span>. <span class=\"chem\">cos theta = 9.2 / (4.3 sqrt(21)) ≈ 0.4669</span>이므로 <span class=\"chem\">theta ≈ 62.2°</span>예요. (빛은 실제로 지붕에 닿아요: <span class=\"chem\">\\mathbf{r} = \\mathbf{OS} + lambda \\mathbf{SW}</span> 위의 <span class=\"chem\">lambda ≈ 2.61 &gt; 0</span>에서 평면과 만나요. 직선과 평면이 이루는 각은 <span class=\"chem\">27.8°</span>로, 함정 답이에요.)</p>",
    },

    // ── t3-3-q052 · short · challenge · AHL · AHL 3.12, 3.14, 3.16 · 11 marks
    "t3-3-q052": {
      // EN: <p>A straight railway track follows the line <span class="chem">L: \mathbf{r} = (1, -2, 3) + lambda(2, 1, -2)</span>, in kilometres. A mobile phone mast at <span class="chem">P(4.2, 3.5, -1)</span> has a range of exactly 7 km. Points <span class="chem">Q_1</span> and <span class="chem">Q_2</span> are where the track enters and leaves the range of the mast.</p><p>(a) Show that the values of <span class="chem">lambda</span> at <span class="chem">Q_1</span> and <span class="chem">Q_2</span> satisfy <span class="chem">9lambda^2 - 39.8lambda + 7.49 = 0</span>. <strong>[3 marks]</strong></p><p>(b) Find the coordinates of <span class="chem">Q_1</span> and <span class="chem">Q_2</span>. <strong>[3 marks]</strong></p><p>(c) Find the area of triangle <span class="chem">PQ_1Q_2</span>. <strong>[3 marks]</strong></p><p>(d) Hence, or otherwise, find the shortest distance from the mast to the track. <strong>[2 marks]</strong></p>
      stem: "<p>곧은 철로가 직선 <span class=\"chem\">L: \\mathbf{r} = (1, -2, 3) + lambda(2, 1, -2)</span>(단위: 킬로미터)을 따라 놓여 있어요. <span class=\"chem\">P(4.2, 3.5, -1)</span>에 있는 휴대전화 기지국 안테나의 통신 범위는 정확히 7 km예요. 점 <span class=\"chem\">Q_1</span>과 <span class=\"chem\">Q_2</span>는 철로가 안테나의 통신 범위에 들어가는 점과 나오는 점이에요.</p><p>(a) <span class=\"chem\">Q_1</span>과 <span class=\"chem\">Q_2</span>에서의 <span class=\"chem\">lambda</span>의 값이 <span class=\"chem\">9lambda^2 - 39.8lambda + 7.49 = 0</span>을 만족함을 보이시오 (Show that). <strong>[3 marks]</strong></p><p>(b) <span class=\"chem\">Q_1</span>과 <span class=\"chem\">Q_2</span>의 좌표를 구하시오 (Find). <strong>[3 marks]</strong></p><p>(c) 삼각형 <span class=\"chem\">PQ_1Q_2</span>의 넓이를 구하시오 (Find). <strong>[3 marks]</strong></p><p>(d) 이를 이용하거나 다른 방법으로 (Hence, or otherwise) 안테나에서 철로까지의 최단 거리를 구하시오. <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: the edge of the range is a sphere of radius 7 about <span class="chem">P</span>. The track crosses it where <span class="chem">|\mathbf{PQ}| = 7</span>.
        "해석: 통신 범위의 경계는 <span class=\"chem\">P</span>를 중심으로 하는 반지름 7인 구면이에요. 철로는 <span class=\"chem\">|\\mathbf{PQ}| = 7</span>인 점에서 구면을 지나요.",
        // EN: Square both sides: <span class="chem">|\mathbf{PQ}|^2 = 49</span> gives a quadratic in <span class="chem">lambda</span>.
        "양변을 제곱해요: <span class=\"chem\">|\\mathbf{PQ}|^2 = 49</span>에서 <span class=\"chem\">lambda</span>에 대한 이차방정식을 얻어요.",
        // EN: In (d), the perpendicular from <span class="chem">P</span> to <span class="chem">Q_1Q_2</span> is the height of the triangle.
        "(d)에서 <span class=\"chem\">P</span>에서 <span class=\"chem\">Q_1Q_2</span>에 내린 수선이 삼각형의 높이예요.",
      ],
      // EN: <p><strong>Decode:</strong> "enters and leaves the range" means the points of <span class="chem">L</span> at distance exactly 7 from <span class="chem">P</span>, so solve <span class="chem">|\mathbf{PQ}| = 7</span>, a quadratic in <span class="chem">lambda</span>.</p><p>(a) <span class="chem">\mathbf{PQ} = (-3.2 + 2lambda, -5.5 + lambda, 4 - 2lambda)</span>. <span class="chem">|\mathbf{PQ}|^2 = 9lambda^2 - 39.8lambda + 56.49 = 49</span>, so <span class="chem">9lambda^2 - 39.8lambda + 7.49 = 0</span>.</p><p>(b) GDC: <span class="chem">lambda ≈ 0.19696</span> or <span class="chem">lambda ≈ 4.2253</span>, giving <span class="chem">Q_1 ≈ (1.39, -1.80, 2.61)</span> and <span class="chem">Q_2 ≈ (9.45, 2.23, -5.45)</span>.</p><p>(c) Area <span class="chem">= (1/2)|\mathbf{PQ_1} \times \mathbf{PQ_2}| ≈ 21.4</span> km<sup>2</sup>.</p><p>(d) <span class="chem">|Q_1Q_2| = 3 × (4.2253 - 0.19696) ≈ 12.08</span>. Using area <span class="chem">= (1/2)(base)(height)</span>: height <span class="chem">= 2(21.354)/12.085 ≈ 3.53</span> km.</p>
      answer: "<p><strong>해석:</strong> \"통신 범위에 들어가고 나온다\"는 <span class=\"chem\">L</span> 위에서 <span class=\"chem\">P</span>로부터의 거리가 정확히 7인 점을 뜻하므로, <span class=\"chem\">lambda</span>에 대한 이차방정식 <span class=\"chem\">|\\mathbf{PQ}| = 7</span>을 풀어요.</p><p>(a) <span class=\"chem\">\\mathbf{PQ} = (-3.2 + 2lambda, -5.5 + lambda, 4 - 2lambda)</span>. <span class=\"chem\">|\\mathbf{PQ}|^2 = 9lambda^2 - 39.8lambda + 56.49 = 49</span>이므로 <span class=\"chem\">9lambda^2 - 39.8lambda + 7.49 = 0</span>이에요.</p><p>(b) GDC: <span class=\"chem\">lambda ≈ 0.19696</span> 또는 <span class=\"chem\">lambda ≈ 4.2253</span>이고, <span class=\"chem\">Q_1 ≈ (1.39, -1.80, 2.61)</span>, <span class=\"chem\">Q_2 ≈ (9.45, 2.23, -5.45)</span>이에요.</p><p>(c) 넓이 <span class=\"chem\">= (1/2)|\\mathbf{PQ_1} \\times \\mathbf{PQ_2}| ≈ 21.4</span> km<sup>2</sup>.</p><p>(d) <span class=\"chem\">|Q_1Q_2| = 3 × (4.2253 - 0.19696) ≈ 12.08</span>. 넓이 <span class=\"chem\">= (1/2)(base)(height)</span>를 이용하면 높이 <span class=\"chem\">= 2(21.354)/12.085 ≈ 3.53</span> km예요.</p>",
      markscheme: [
        // EN: M1: writes <span class="chem">\mathbf{PQ}</span> for a general point <span class="chem">Q</span> on <span class="chem">L</span>.
        "M1: <span class=\"chem\">L</span> 위의 일반적인 점 <span class=\"chem\">Q</span>에 대해 <span class=\"chem\">\\mathbf{PQ}</span>를 씀.",
        // EN: M1: sets <span class="chem">|\mathbf{PQ}|^2 = 49</span>.
        "M1: <span class=\"chem\">|\\mathbf{PQ}|^2 = 49</span>로 놓음.",
        // EN: A1: expands correctly to <span class="chem">9lambda^2 - 39.8lambda + 56.49 = 49</span>, giving the given equation (AG).
        "A1: <span class=\"chem\">9lambda^2 - 39.8lambda + 56.49 = 49</span>로 올바르게 전개하여 주어진 식을 얻음 (AG).",
        // EN: A1: <span class="chem">lambda ≈ 0.197</span> and <span class="chem">lambda ≈ 4.23</span>.
        "A1: <span class=\"chem\">lambda ≈ 0.197</span>, <span class=\"chem\">lambda ≈ 4.23</span>.",
        // EN: A1: <span class="chem">Q_1 ≈ (1.39, -1.80, 2.61)</span>.
        "A1: <span class=\"chem\">Q_1 ≈ (1.39, -1.80, 2.61)</span>.",
        // EN: A1: <span class="chem">Q_2 ≈ (9.45, 2.23, -5.45)</span>.
        "A1: <span class=\"chem\">Q_2 ≈ (9.45, 2.23, -5.45)</span>.",
        // EN: M1: uses <span class="chem">(1/2)|\mathbf{PQ_1} \times \mathbf{PQ_2}|</span> (or <span class="chem">(1/2)ab sin C</span> with <span class="chem">a = b = 7</span>).
        "M1: <span class=\"chem\">(1/2)|\\mathbf{PQ_1} \\times \\mathbf{PQ_2}|</span>를 이용함 (또는 <span class=\"chem\">a = b = 7</span>일 때 <span class=\"chem\">(1/2)ab sin C</span>).",
        // EN: A1: correct vector product or angle <span class="chem">Q_1PQ_2 ≈ 119.4°</span>.
        "A1: 올바른 외적 또는 각 <span class=\"chem\">Q_1PQ_2 ≈ 119.4°</span>.",
        // EN: A1: area <span class="chem">≈ 21.4</span>.
        "A1: 넓이 <span class=\"chem\">≈ 21.4</span>.",
        // EN: M1: uses height <span class="chem">= 2 × area / |Q_1Q_2|</span> (or the foot of the perpendicular, <span class="chem">lambda = 199/90</span>).
        "M1: 높이 <span class=\"chem\">= 2 × area / |Q_1Q_2|</span>를 이용함 (또는 수선의 발, <span class=\"chem\">lambda = 199/90</span>).",
        // EN: A1: distance <span class="chem">≈ 3.53</span> km.
        "A1: 거리 <span class=\"chem\">≈ 3.53</span> km.",
      ],
    },

    // ── t3-3-q053 · numeric · challenge · AHL · AHL 3.16, 3.18 · 6 marks
    "t3-3-q053": {
      // EN: <p>Two walls of a modern building lie in the planes <span class="chem">1.2x + 2y - z = 4</span> and <span class="chem">3x - y + 2.5z = 1</span>. The walls meet along a straight edge. A sloping glass roof lies in the plane <span class="chem">2x + 5y + z = 8</span>. Find the acute angle between the edge and the roof, in degrees, correct to 3 significant figures.</p>
      stem: "<p>현대식 건물의 두 벽이 평면 <span class=\"chem\">1.2x + 2y - z = 4</span>와 <span class=\"chem\">3x - y + 2.5z = 1</span> 위에 있어요. 두 벽은 곧은 모서리를 따라 만나요. 기울어진 유리 지붕은 평면 <span class=\"chem\">2x + 5y + z = 8</span> 위에 있어요. 모서리와 지붕이 이루는 예각을 도 단위로 구하시오 (Find). 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: Decode: the "edge" is the line of intersection of the two wall planes, so this is a line-plane angle in disguise. You only need the direction of the edge, not a point on it.
        "해석: \"모서리\"는 두 벽 평면의 교선이므로, 이것은 모양을 바꾼 직선과 평면이 이루는 각 문제예요. 모서리의 방향만 필요하고 모서리 위의 점은 필요 없어요.",
        // EN: The direction of the edge is <span class="chem">(1.2, 2, -1) \times (3, -1, 2.5)</span>.
        "모서리의 방향은 <span class=\"chem\">(1.2, 2, -1) \\times (3, -1, 2.5)</span>이에요.",
        // EN: Then use <span class="chem">sin phi = |\mathbf{b} \cdot \mathbf{n}| / (|\mathbf{b}||\mathbf{n}|)</span> with <span class="chem">\mathbf{n} = (2, 5, 1)</span>.
        "그다음 <span class=\"chem\">\\mathbf{n} = (2, 5, 1)</span>로 <span class=\"chem\">sin phi = |\\mathbf{b} \\cdot \\mathbf{n}| / (|\\mathbf{b}||\\mathbf{n}|)</span>를 이용해요.",
      ],
      // EN: <p><strong>Decode:</strong> edge = line of intersection; angle with a plane uses sine.</p><p><span class="chem">\mathbf{b} = (1.2, 2, -1) \times (3, -1, 2.5) = (4, -6, -7.2)</span>. <span class="chem">\mathbf{b} \cdot (2, 5, 1) = 8 - 30 - 7.2 = -29.2</span>, <span class="chem">|\mathbf{b}| = sqrt(103.84)</span>, <span class="chem">|\mathbf{n}| = sqrt(30)</span>. <span class="chem">sin phi = 29.2 / sqrt(103.84 × 30) ≈ 0.5231</span>, so <span class="chem">phi ≈ 31.5°</span>.</p>
      solution: "<p><strong>해석:</strong> 모서리 = 교선이에요. 평면과 이루는 각에는 사인을 이용해요.</p><p><span class=\"chem\">\\mathbf{b} = (1.2, 2, -1) \\times (3, -1, 2.5) = (4, -6, -7.2)</span>. <span class=\"chem\">\\mathbf{b} \\cdot (2, 5, 1) = 8 - 30 - 7.2 = -29.2</span>, <span class=\"chem\">|\\mathbf{b}| = sqrt(103.84)</span>, <span class=\"chem\">|\\mathbf{n}| = sqrt(30)</span>. <span class=\"chem\">sin phi = 29.2 / sqrt(103.84 × 30) ≈ 0.5231</span>이므로 <span class=\"chem\">phi ≈ 31.5°</span>예요.</p>",
    },

    // ── t3-3-q054 · numeric · challenge · AHL · AHL 3.13 · 6 marks
    "t3-3-q054": {
      // EN: <p>For <span class="chem">t \in \mathbb{R}</span>, let <span class="chem">\mathbf{a} = t\mathbf{i} + \mathbf{j} + 2\mathbf{k}</span> and <span class="chem">\mathbf{b} = 2\mathbf{i} + t\mathbf{j} + \mathbf{k}</span>. There are two values of <span class="chem">t</span> for which the angle between <span class="chem">\mathbf{a}</span> and <span class="chem">\mathbf{b}</span> is exactly <span class="chem">50°</span>. Find the value of <span class="chem">t</span> that is greater than 1, correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">t \\in \\mathbb{R}</span>에 대해 <span class=\"chem\">\\mathbf{a} = t\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}</span>, <span class=\"chem\">\\mathbf{b} = 2\\mathbf{i} + t\\mathbf{j} + \\mathbf{k}</span>라 하자. <span class=\"chem\">\\mathbf{a}</span>와 <span class=\"chem\">\\mathbf{b}</span>가 이루는 각이 정확히 <span class=\"chem\">50°</span>가 되는 <span class=\"chem\">t</span>의 값은 두 개예요. 1보다 큰 <span class=\"chem\">t</span>의 값을 구하시오 (Find). 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: Decode: the angle is fixed and <span class="chem">t</span> is unknown, so this is an equation to solve: <span class="chem">cos 50° = (\mathbf{a} \cdot \mathbf{b}) / (|\mathbf{a}||\mathbf{b}|)</span>. It rearranges to a quadratic with awkward coefficients, so use your GDC.
        "해석: 각은 정해져 있고 <span class=\"chem\">t</span>가 미지수이므로, 이것은 풀어야 할 방정식 <span class=\"chem\">cos 50° = (\\mathbf{a} \\cdot \\mathbf{b}) / (|\\mathbf{a}||\\mathbf{b}|)</span>이에요. 정리하면 계수가 다루기 어려운 이차방정식이 되므로 GDC를 이용해요.",
        // EN: <span class="chem">\mathbf{a} \cdot \mathbf{b} = 3t + 2</span> and <span class="chem">|\mathbf{a}| = |\mathbf{b}| = sqrt(t^2 + 5)</span>.
        "<span class=\"chem\">\\mathbf{a} \\cdot \\mathbf{b} = 3t + 2</span>, <span class=\"chem\">|\\mathbf{a}| = |\\mathbf{b}| = sqrt(t^2 + 5)</span>이에요.",
        // EN: Graph <span class="chem">y = (3t + 2)/(t^2 + 5)</span> and <span class="chem">y = cos 50°</span> (degree mode) and find the intersection with <span class="chem">t &gt; 1</span>.
        "<span class=\"chem\">y = (3t + 2)/(t^2 + 5)</span>와 <span class=\"chem\">y = cos 50°</span>의 그래프를 그리고(도 모드) <span class=\"chem\">t &gt; 1</span>인 교점을 구해요.",
      ],
      // EN: <p><strong>Decode:</strong> unknown <span class="chem">t</span> in the angle formula, solved graphically.</p><p><span class="chem">cos 50° = (3t + 2)/(t^2 + 5)</span>. The GDC gives <span class="chem">t ≈ 0.448</span> or <span class="chem">t ≈ 4.22</span>. The value greater than 1 is <span class="chem">t ≈ 4.22</span>.</p>
      solution: "<p><strong>해석:</strong> 각의 공식에 들어 있는 미지수 <span class=\"chem\">t</span>를 그래프로 풀어요.</p><p><span class=\"chem\">cos 50° = (3t + 2)/(t^2 + 5)</span>. GDC로 <span class=\"chem\">t ≈ 0.448</span> 또는 <span class=\"chem\">t ≈ 4.22</span>를 얻어요. 1보다 큰 값은 <span class=\"chem\">t ≈ 4.22</span>예요.</p>",
    },

    // ── t3-3-q055 · short · challenge · AHL · AHL 3.12, 3.14, 3.15 · 11 marks
    "t3-3-q055": {
      // EN: <p>Two aircraft fly in straight lines at constant velocity. With distances in km and <span class="chem">t</span> in minutes after 09:00, their positions are <span class="chem">\mathbf{r_A} = (10, 5, 5) + t(12, 8, 0.4)</span> and <span class="chem">\mathbf{r_B} = (68.8, -10.2, 7.6) + t(-9, 11, -0.5)</span>.</p><p>(a) Show that the flight paths cross, and find the coordinates of the point <span class="chem">X</span> where they cross. <strong>[4 marks]</strong></p><p>(b) Explain why the aircraft do not collide. <strong>[2 marks]</strong></p><p>(c) Find the minimum distance between the aircraft, and the time after 09:00 at which it occurs, in minutes. <strong>[5 marks]</strong></p>
      stem: "<p>두 항공기가 일정한 속도로 직선 비행해요. 거리는 km 단위, <span class=\"chem\">t</span>는 09:00 이후의 시간(분)일 때 두 항공기의 위치는 <span class=\"chem\">\\mathbf{r_A} = (10, 5, 5) + t(12, 8, 0.4)</span>, <span class=\"chem\">\\mathbf{r_B} = (68.8, -10.2, 7.6) + t(-9, 11, -0.5)</span>예요.</p><p>(a) 두 비행경로가 교차함을 보이고 (Show that), 교차하는 점 <span class=\"chem\">X</span>의 좌표를 구하시오 (find). <strong>[4 marks]</strong></p><p>(b) 두 항공기가 충돌하지 않는 이유를 설명하시오 (Explain). <strong>[2 marks]</strong></p><p>(c) 두 항공기 사이의 최단 거리와, 그때의 09:00 이후 시간(분)을 구하시오 (Find). <strong>[5 marks]</strong></p>",
      hints: [
        // EN: Decode: for the paths, each aircraft may reach the crossing point at a different time, so use two different parameters.
        "해석: 경로에 대해서는 각 항공기가 서로 다른 시각에 교점에 도달할 수 있으므로 서로 다른 두 매개변수를 사용해요.",
        // EN: For a collision both aircraft must be at the same point for the <em>same</em> value of <span class="chem">t</span>.
        "충돌하려면 두 항공기가 <em>같은</em> <span class=\"chem\">t</span>의 값에서 같은 점에 있어야 해요.",
        // EN: The distance at time <span class="chem">t</span> is <span class="chem">|\mathbf{r_A}(t) - \mathbf{r_B}(t)|</span>; graph it and find its minimum.
        "시각 <span class=\"chem\">t</span>에서의 거리는 <span class=\"chem\">|\\mathbf{r_A}(t) - \\mathbf{r_B}(t)|</span>이에요. 그래프를 그려 최솟값을 구해요.",
      ],
      // EN: <p><strong>Decode:</strong> "the paths cross" is about the <em>lines</em> (use two parameters); "collide" is about the <em>same time</em> (one parameter <span class="chem">t</span>).</p><p>(a) With parameters <span class="chem">p</span> for A and <span class="chem">q</span> for B: <span class="chem">10 + 12p = 68.8 - 9q</span> and <span class="chem">5 + 8p = -10.2 + 11q</span>. GDC: <span class="chem">p = 2.5</span>, <span class="chem">q = 3.2</span>. Check <span class="chem">z</span>: <span class="chem">5 + 0.4(2.5) = 6</span> and <span class="chem">7.6 - 0.5(3.2) = 6</span>. The paths cross at <span class="chem">X(40, 25, 6)</span>.</p><p>(b) A is at <span class="chem">X</span> when <span class="chem">t = 2.5</span> but B is at <span class="chem">X</span> when <span class="chem">t = 3.2</span>. They are never at <span class="chem">X</span> at the same time (and two non-parallel lines meet only at <span class="chem">X</span>), so they do not collide.</p><p>(c) <span class="chem">\mathbf{r_A} - \mathbf{r_B} = (-58.8, 15.2, -2.6) + t(21, -3, 0.9)</span>. Its magnitude is least when <span class="chem">t = 1282.74/450.81 ≈ 2.85</span> minutes, and the minimum distance is <span class="chem">≈ 6.73</span> km.</p>
      answer: "<p><strong>해석:</strong> \"경로가 교차한다\"는 <em>직선</em>에 관한 것이고(매개변수 두 개), \"충돌한다\"는 <em>같은 시각</em>에 관한 것이에요(매개변수 <span class=\"chem\">t</span> 하나).</p><p>(a) A의 매개변수를 <span class=\"chem\">p</span>, B의 매개변수를 <span class=\"chem\">q</span>라 하면 <span class=\"chem\">10 + 12p = 68.8 - 9q</span>, <span class=\"chem\">5 + 8p = -10.2 + 11q</span>예요. GDC: <span class=\"chem\">p = 2.5</span>, <span class=\"chem\">q = 3.2</span>. <span class=\"chem\">z</span>를 확인하면 <span class=\"chem\">5 + 0.4(2.5) = 6</span>, <span class=\"chem\">7.6 - 0.5(3.2) = 6</span>예요. 두 경로는 <span class=\"chem\">X(40, 25, 6)</span>에서 교차해요.</p><p>(b) A는 <span class=\"chem\">t = 2.5</span>일 때 <span class=\"chem\">X</span>에 있지만 B는 <span class=\"chem\">t = 3.2</span>일 때 <span class=\"chem\">X</span>에 있어요. 두 항공기는 같은 시각에 <span class=\"chem\">X</span>에 있지 않으므로(평행하지 않은 두 직선은 <span class=\"chem\">X</span>에서만 만나요) 충돌하지 않아요.</p><p>(c) <span class=\"chem\">\\mathbf{r_A} - \\mathbf{r_B} = (-58.8, 15.2, -2.6) + t(21, -3, 0.9)</span>. 그 크기는 <span class=\"chem\">t = 1282.74/450.81 ≈ 2.85</span>분일 때 가장 작고, 최단 거리는 <span class=\"chem\">≈ 6.73</span> km예요.</p>",
      markscheme: [
        // EN: M1: equates the position vectors using two <em>different</em> parameters.
        "M1: 서로 <em>다른</em> 두 매개변수를 사용하여 위치벡터를 같다고 놓음.",
        // EN: A1: <span class="chem">p = 2.5</span>, <span class="chem">q = 3.2</span>.
        "A1: <span class=\"chem\">p = 2.5</span>, <span class=\"chem\">q = 3.2</span>.",
        // EN: R1: checks the third component is consistent.
        "R1: 세 번째 성분이 일치함을 확인함.",
        // EN: A1: <span class="chem">X(40, 25, 6)</span>.
        "A1: <span class=\"chem\">X(40, 25, 6)</span>.",
        // EN: A1: identifies the different times 2.5 and 3.2 minutes at which each aircraft is at <span class="chem">X</span>.
        "A1: 각 항공기가 <span class=\"chem\">X</span>에 있는 서로 다른 시각 2.5분과 3.2분을 밝힘.",
        // EN: R1: concludes they are not at the same point at the same time, so no collision.
        "R1: 같은 시각에 같은 점에 있지 않으므로 충돌하지 않는다고 결론지음.",
        // EN: M1: forms <span class="chem">\mathbf{r_A} - \mathbf{r_B}</span> in terms of the single time <span class="chem">t</span>.
        "M1: 하나의 시각 <span class=\"chem\">t</span>로 <span class=\"chem\">\\mathbf{r_A} - \\mathbf{r_B}</span>를 나타냄.",
        // EN: A1: <span class="chem">(-58.8, 15.2, -2.6) + t(21, -3, 0.9)</span>.
        "A1: <span class=\"chem\">(-58.8, 15.2, -2.6) + t(21, -3, 0.9)</span>.",
        // EN: M1: minimises the magnitude (GDC graph, or scalar product with <span class="chem">(21, -3, 0.9)</span> set to 0).
        "M1: 크기를 최소화함 (GDC 그래프, 또는 <span class=\"chem\">(21, -3, 0.9)</span>과의 내적을 0으로 놓음).",
        // EN: A1: <span class="chem">t ≈ 2.85</span> minutes.
        "A1: <span class=\"chem\">t ≈ 2.85</span>분.",
        // EN: A1: minimum distance <span class="chem">≈ 6.73</span> km.
        "A1: 최단 거리 <span class=\"chem\">≈ 6.73</span> km.",
      ],
    },

    // ── t3-3-q056 · short · challenge · AHL · AHL 3.14, 3.17, 3.18 · 18 marks
    "t3-3-q056": {
      // EN: <p>This investigation finds a quick formula for the distance from a point to a plane. Let <span class="chem">Π</span> be the plane <span class="chem">2x - y + 2z = 9</span>.</p><p>(a) The line through <span class="chem">P(4, 2, 6)</span> perpendicular to <span class="chem">Π</span> is <span class="chem">\mathbf{r} = (4, 2, 6) + s(2, -1, 2)</span>. Find the point <span class="chem">F</span> where it meets <span class="chem">Π</span>, and hence find the distance from <span class="chem">P</span> to <span class="chem">Π</span>. <strong>[3 marks]</strong></p><p>(b) In the same way, find the distance from <span class="chem">Q(1, 4, -3)</span> to <span class="chem">Π</span>. <strong>[2 marks]</strong></p><p>(c) Evaluate <span class="chem">2x_0 - y_0 + 2z_0 - 9</span> at <span class="chem">P</span> and at <span class="chem">Q</span>. Hence suggest a formula for the distance from <span class="chem">(x_0, y_0, z_0)</span> to <span class="chem">Π</span>. <strong>[2 marks]</strong></p><p>(d) Prove that the distance from the point <span class="chem">(x_0, y_0, z_0)</span> to the plane <span class="chem">ax + by + cz = d</span> is <span class="chem">D = |ax_0 + by_0 + cz_0 - d| / sqrt(a^2 + b^2 + c^2)</span>. <strong>[5 marks]</strong></p><p>(e) Find the two values of <span class="chem">k</span> for which the plane <span class="chem">2x - y + 2z = k</span> is at a distance of 4 from <span class="chem">P(4, 2, 6)</span>. <strong>[3 marks]</strong></p><p>(f) Find the distance between the parallel planes <span class="chem">Π</span> and <span class="chem">6x - 3y + 6z = 5</span>. <strong>[3 marks]</strong></p>
      stem: "<p>이 탐구에서는 점과 평면 사이의 거리를 구하는 간단한 공식을 찾아요. <span class=\"chem\">Π</span>를 평면 <span class=\"chem\">2x - y + 2z = 9</span>이라 하자.</p><p>(a) <span class=\"chem\">P(4, 2, 6)</span>을 지나고 <span class=\"chem\">Π</span>에 수직인 직선은 <span class=\"chem\">\\mathbf{r} = (4, 2, 6) + s(2, -1, 2)</span>이에요. 이 직선이 <span class=\"chem\">Π</span>와 만나는 점 <span class=\"chem\">F</span>를 구하고 (Find), 이를 이용하여 (hence) <span class=\"chem\">P</span>에서 <span class=\"chem\">Π</span>까지의 거리를 구하시오. <strong>[3 marks]</strong></p><p>(b) 같은 방법으로 <span class=\"chem\">Q(1, 4, -3)</span>에서 <span class=\"chem\">Π</span>까지의 거리를 구하시오 (find). <strong>[2 marks]</strong></p><p>(c) <span class=\"chem\">P</span>와 <span class=\"chem\">Q</span>에서 <span class=\"chem\">2x_0 - y_0 + 2z_0 - 9</span>의 값을 계산하시오. 이를 이용하여 (Hence) <span class=\"chem\">(x_0, y_0, z_0)</span>에서 <span class=\"chem\">Π</span>까지의 거리에 대한 공식을 추측하시오 (suggest). <strong>[2 marks]</strong></p><p>(d) 점 <span class=\"chem\">(x_0, y_0, z_0)</span>에서 평면 <span class=\"chem\">ax + by + cz = d</span>까지의 거리가 <span class=\"chem\">D = |ax_0 + by_0 + cz_0 - d| / sqrt(a^2 + b^2 + c^2)</span>임을 증명하시오 (Prove). <strong>[5 marks]</strong></p><p>(e) 평면 <span class=\"chem\">2x - y + 2z = k</span>와 <span class=\"chem\">P(4, 2, 6)</span> 사이의 거리가 4가 되도록 하는 <span class=\"chem\">k</span>의 두 값을 구하시오 (Find). <strong>[3 marks]</strong></p><p>(f) 평행한 두 평면 <span class=\"chem\">Π</span>와 <span class=\"chem\">6x - 3y + 6z = 5</span> 사이의 거리를 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: each part builds on the last. Parts (a)–(b) are the slow method; part (c) asks you to spot what the slow method always gives.
        "해석: 각 문항은 앞 문항을 바탕으로 해요. (a)–(b)는 느린 방법이고, (c)에서는 이 느린 방법이 항상 무엇을 주는지 알아내야 해요.",
        // EN: In (d), repeat exactly the steps of (a) with letters instead of numbers.
        "(d)에서는 숫자 대신 문자를 사용하여 (a)의 단계를 그대로 반복해요.",
        // EN: In (f), the two planes are parallel. Make their normal vectors identical before comparing the constants.
        "(f)에서 두 평면은 평행해요. 상수를 비교하기 전에 두 법선벡터를 똑같이 만들어요.",
      ],
      // EN: <p>(a) <span class="chem">2(4 + 2s) - (2 - s) + 2(6 + 2s) = 9 => 18 + 9s = 9 => s = -1</span>, so <span class="chem">F(2, 3, 4)</span>. The distance is <span class="chem">|\mathbf{PF}| = |(-2, 1, -2)| = 3</span>.</p><p>(b) <span class="chem">2(1 + 2s) - (4 - s) + 2(-3 + 2s) = 9 => -8 + 9s = 9 => s = 17/9</span>. The distance is <span class="chem">(17/9) × 3 = 17/3</span>.</p><p>(c) At <span class="chem">P</span>: <span class="chem">18 - 9 = 9</span>; at <span class="chem">Q</span>: <span class="chem">-8 - 9 = -17</span>. The distances are <span class="chem">9/3</span> and <span class="chem">17/3</span>, and <span class="chem">3 = |(2, -1, 2)|</span>. Conjecture: <span class="chem">D = |2x_0 - y_0 + 2z_0 - 9| / 3</span>.</p><p>(d) Let <span class="chem">\mathbf{n} = (a, b, c)</span>. The perpendicular from the point is <span class="chem">(x_0 + sa, y_0 + sb, z_0 + sc)</span>. Substituting: <span class="chem">ax_0 + by_0 + cz_0 + s(a^2 + b^2 + c^2) = d</span>, so <span class="chem">s = (d - ax_0 - by_0 - cz_0)/(a^2 + b^2 + c^2)</span>. The distance is <span class="chem">|s||\mathbf{n}| = |ax_0 + by_0 + cz_0 - d| sqrt(a^2 + b^2 + c^2) / (a^2 + b^2 + c^2) = |ax_0 + by_0 + cz_0 - d| / sqrt(a^2 + b^2 + c^2)</span>.</p><p>(e) <span class="chem">|8 - 2 + 12 - k| / 3 = 4 => |18 - k| = 12 => k = 6</span> or <span class="chem">k = 30</span>.</p><p>(f) The second plane is <span class="chem">2x - y + 2z = 5/3</span>. The point <span class="chem">(0, 0, 4.5)</span> lies on <span class="chem">Π</span>, so the distance is <span class="chem">|9 - 5/3| / 3 = 22/9</span>.</p>
      answer: "<p>(a) <span class=\"chem\">2(4 + 2s) - (2 - s) + 2(6 + 2s) = 9 => 18 + 9s = 9 => s = -1</span>이므로 <span class=\"chem\">F(2, 3, 4)</span>예요. 거리는 <span class=\"chem\">|\\mathbf{PF}| = |(-2, 1, -2)| = 3</span>이에요.</p><p>(b) <span class=\"chem\">2(1 + 2s) - (4 - s) + 2(-3 + 2s) = 9 => -8 + 9s = 9 => s = 17/9</span>. 거리는 <span class=\"chem\">(17/9) × 3 = 17/3</span>이에요.</p><p>(c) <span class=\"chem\">P</span>에서 <span class=\"chem\">18 - 9 = 9</span>, <span class=\"chem\">Q</span>에서 <span class=\"chem\">-8 - 9 = -17</span>이에요. 거리는 <span class=\"chem\">9/3</span>과 <span class=\"chem\">17/3</span>이고, <span class=\"chem\">3 = |(2, -1, 2)|</span>이에요. 추측: <span class=\"chem\">D = |2x_0 - y_0 + 2z_0 - 9| / 3</span>.</p><p>(d) <span class=\"chem\">\\mathbf{n} = (a, b, c)</span>라 하자. 점에서 내린 수선은 <span class=\"chem\">(x_0 + sa, y_0 + sb, z_0 + sc)</span>이에요. 대입하면 <span class=\"chem\">ax_0 + by_0 + cz_0 + s(a^2 + b^2 + c^2) = d</span>이므로 <span class=\"chem\">s = (d - ax_0 - by_0 - cz_0)/(a^2 + b^2 + c^2)</span>예요. 거리는 <span class=\"chem\">|s||\\mathbf{n}| = |ax_0 + by_0 + cz_0 - d| sqrt(a^2 + b^2 + c^2) / (a^2 + b^2 + c^2) = |ax_0 + by_0 + cz_0 - d| / sqrt(a^2 + b^2 + c^2)</span>예요.</p><p>(e) <span class=\"chem\">|8 - 2 + 12 - k| / 3 = 4 => |18 - k| = 12 => k = 6</span> 또는 <span class=\"chem\">k = 30</span>.</p><p>(f) 두 번째 평면은 <span class=\"chem\">2x - y + 2z = 5/3</span>이에요. 점 <span class=\"chem\">(0, 0, 4.5)</span>은 <span class=\"chem\">Π</span> 위에 있으므로 거리는 <span class=\"chem\">|9 - 5/3| / 3 = 22/9</span>예요.</p>",
      markscheme: [
        // EN: M1: substitutes the parametric form of the line into the equation of <span class="chem">Π</span>.
        "M1: 직선의 매개변수 방정식을 <span class=\"chem\">Π</span>의 방정식에 대입함.",
        // EN: A1: <span class="chem">s = -1</span> and <span class="chem">F(2, 3, 4)</span>.
        "A1: <span class=\"chem\">s = -1</span>, <span class=\"chem\">F(2, 3, 4)</span>.",
        // EN: A1: distance <span class="chem">= 3</span>.
        "A1: 거리 <span class=\"chem\">= 3</span>.",
        // EN: A1: <span class="chem">s = 17/9</span>.
        "A1: <span class=\"chem\">s = 17/9</span>.",
        // EN: A1: distance <span class="chem">= 17/3</span>.
        "A1: 거리 <span class=\"chem\">= 17/3</span>.",
        // EN: A1: values <span class="chem">9</span> and <span class="chem">-17</span>.
        "A1: 값 <span class=\"chem\">9</span>과 <span class=\"chem\">-17</span>.",
        // EN: A1: a conjecture equivalent to <span class="chem">D = |2x_0 - y_0 + 2z_0 - 9| / 3</span> (the modulus is needed).
        "A1: <span class=\"chem\">D = |2x_0 - y_0 + 2z_0 - 9| / 3</span>와 동치인 추측 (절댓값이 필요함).",
        // EN: M1: writes the line through <span class="chem">(x_0, y_0, z_0)</span> with direction <span class="chem">(a, b, c)</span>.
        "M1: <span class=\"chem\">(x_0, y_0, z_0)</span>을 지나고 방향이 <span class=\"chem\">(a, b, c)</span>인 직선을 씀.",
        // EN: M1: substitutes it into <span class="chem">ax + by + cz = d</span>.
        "M1: 그것을 <span class=\"chem\">ax + by + cz = d</span>에 대입함.",
        // EN: A1: <span class="chem">s = (d - ax_0 - by_0 - cz_0)/(a^2 + b^2 + c^2)</span>.
        "A1: <span class=\"chem\">s = (d - ax_0 - by_0 - cz_0)/(a^2 + b^2 + c^2)</span>.",
        // EN: M1: uses distance <span class="chem">= |s| sqrt(a^2 + b^2 + c^2)</span>.
        "M1: 거리 <span class=\"chem\">= |s| sqrt(a^2 + b^2 + c^2)</span>를 이용함.",
        // EN: A1: simplifies to the given formula (AG).
        "A1: 주어진 공식으로 간단히 함 (AG).",
        // EN: M1: sets <span class="chem">|18 - k| / 3 = 4</span>.
        "M1: <span class=\"chem\">|18 - k| / 3 = 4</span>로 놓음.",
        // EN: A1: <span class="chem">k = 6</span>.
        "A1: <span class=\"chem\">k = 6</span>.",
        // EN: A1: <span class="chem">k = 30</span>.
        "A1: <span class=\"chem\">k = 30</span>.",
        // EN: M1: writes both planes with the same normal, e.g. <span class="chem">2x - y + 2z = 5/3</span>.
        "M1: 두 평면을 같은 법선벡터로 나타냄. 예: <span class=\"chem\">2x - y + 2z = 5/3</span>.",
        // EN: M1: applies the formula with a point on one plane (or uses <span class="chem">|d_1 - d_2| / |\mathbf{n}|</span>).
        "M1: 한 평면 위의 점으로 공식을 적용함 (또는 <span class=\"chem\">|d_1 - d_2| / |\\mathbf{n}|</span>를 이용함).",
        // EN: A1: distance <span class="chem">= 22/9</span>.
        "A1: 거리 <span class=\"chem\">= 22/9</span>.",
      ],
    },

    // ── t3-3-q057 · short · challenge · AHL · AHL 3.12–3.14 · 15 marks
    "t3-3-q057": {
      // EN: <p>This investigation looks at the angles between the four space diagonals of a cuboid. A cuboid has one vertex at the origin <span class="chem">O</span> and edges of lengths <span class="chem">a</span>, <span class="chem">b</span>, <span class="chem">c</span> along the positive <span class="chem">x</span>-, <span class="chem">y</span>- and <span class="chem">z</span>-axes. Its four space diagonals have direction vectors <span class="chem">\mathbf{d_1} = (a, b, c)</span>, <span class="chem">\mathbf{d_2} = (-a, b, c)</span>, <span class="chem">\mathbf{d_3} = (a, -b, c)</span> and <span class="chem">\mathbf{d_4} = (a, b, -c)</span>.</p><p>(a) For a cube with <span class="chem">a = b = c = 1</span>, find the acute angle between two space diagonals, in degrees. <strong>[3 marks]</strong></p><p>(b) For the cuboid with <span class="chem">a = 2</span>, <span class="chem">b = 3</span>, <span class="chem">c = 6</span>, find the acute angle between <span class="chem">\mathbf{d_1}</span> and each of <span class="chem">\mathbf{d_2}</span>, <span class="chem">\mathbf{d_3}</span> and <span class="chem">\mathbf{d_4}</span>. <strong>[4 marks]</strong></p><p>(c) Show that, for any cuboid, the acute angle <span class="chem">theta</span> between <span class="chem">\mathbf{d_1}</span> and <span class="chem">\mathbf{d_2}</span> satisfies <span class="chem">cos theta = |b^2 + c^2 - a^2| / (a^2 + b^2 + c^2)</span>. <strong>[3 marks]</strong></p><p>(d) Deduce a condition on <span class="chem">a, b, c</span> for <span class="chem">\mathbf{d_1}</span> and <span class="chem">\mathbf{d_2}</span> to be perpendicular. Hence find <span class="chem">a</span> when <span class="chem">b = 3</span> and <span class="chem">c = 4</span>. <strong>[2 marks]</strong></p><p>(e) The perpendicularity conditions for the pairs <span class="chem">(\mathbf{d_1}, \mathbf{d_2})</span>, <span class="chem">(\mathbf{d_1}, \mathbf{d_3})</span> and <span class="chem">(\mathbf{d_1}, \mathbf{d_4})</span> are found in the same way. Prove that no cuboid satisfies two of these conditions at once. <strong>[3 marks]</strong></p>
      stem: "<p>이 탐구에서는 직육면체의 네 공간 대각선 사이의 각을 살펴봐요. 한 직육면체의 한 꼭짓점이 원점 <span class=\"chem\">O</span>에 있고, 양의 <span class=\"chem\">x</span>축, <span class=\"chem\">y</span>축, <span class=\"chem\">z</span>축을 따르는 모서리의 길이가 각각 <span class=\"chem\">a</span>, <span class=\"chem\">b</span>, <span class=\"chem\">c</span>예요. 네 공간 대각선의 방향벡터는 <span class=\"chem\">\\mathbf{d_1} = (a, b, c)</span>, <span class=\"chem\">\\mathbf{d_2} = (-a, b, c)</span>, <span class=\"chem\">\\mathbf{d_3} = (a, -b, c)</span>, <span class=\"chem\">\\mathbf{d_4} = (a, b, -c)</span>이에요.</p><p>(a) <span class=\"chem\">a = b = c = 1</span>인 정육면체에 대해 두 공간 대각선이 이루는 예각을 도 단위로 구하시오 (find). <strong>[3 marks]</strong></p><p>(b) <span class=\"chem\">a = 2</span>, <span class=\"chem\">b = 3</span>, <span class=\"chem\">c = 6</span>인 직육면체에 대해 <span class=\"chem\">\\mathbf{d_1}</span>와 <span class=\"chem\">\\mathbf{d_2}</span>, <span class=\"chem\">\\mathbf{d_3}</span>, <span class=\"chem\">\\mathbf{d_4}</span> 각각이 이루는 예각을 구하시오 (find). <strong>[4 marks]</strong></p><p>(c) 임의의 직육면체에 대해 <span class=\"chem\">\\mathbf{d_1}</span>과 <span class=\"chem\">\\mathbf{d_2}</span>가 이루는 예각 <span class=\"chem\">theta</span>가 <span class=\"chem\">cos theta = |b^2 + c^2 - a^2| / (a^2 + b^2 + c^2)</span>를 만족함을 보이시오 (Show that). <strong>[3 marks]</strong></p><p>(d) <span class=\"chem\">\\mathbf{d_1}</span>과 <span class=\"chem\">\\mathbf{d_2}</span>가 수직이 되기 위한 <span class=\"chem\">a, b, c</span>에 대한 조건을 이끌어 내시오 (Deduce). 이를 이용하여 (Hence) <span class=\"chem\">b = 3</span>, <span class=\"chem\">c = 4</span>일 때 <span class=\"chem\">a</span>를 구하시오 (find). <strong>[2 marks]</strong></p><p>(e) 쌍 <span class=\"chem\">(\\mathbf{d_1}, \\mathbf{d_2})</span>, <span class=\"chem\">(\\mathbf{d_1}, \\mathbf{d_3})</span>, <span class=\"chem\">(\\mathbf{d_1}, \\mathbf{d_4})</span>가 수직이 되는 조건도 같은 방법으로 구할 수 있어요. 어떤 직육면체도 이 조건 중 두 개를 동시에 만족할 수 없음을 증명하시오 (Prove). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: every "angle between diagonals" question here is the angle between two direction vectors, taken acute.
        "해석: 여기서 \"대각선 사이의 각\"을 묻는 문제는 모두 두 방향벡터가 이루는 각이고, 예각을 택해요.",
        // EN: In (b), all four diagonals have the same length, so only the scalar products change.
        "(b)에서 네 대각선의 길이는 모두 같으므로 내적만 달라져요.",
        // EN: In (e), suppose two conditions hold and add them. What happens to the third edge?
        "(e)에서 두 조건이 성립한다고 가정하고 더해 보세요. 세 번째 모서리는 어떻게 될까요?",
      ],
      // EN: <p>(a) <span class="chem">(1, 1, 1) \cdot (-1, 1, 1) = 1</span> and both magnitudes are <span class="chem">sqrt(3)</span>, so <span class="chem">cos theta = 1/3</span> and <span class="chem">theta ≈ 70.5°</span>.</p><p>(b) <span class="chem">|\mathbf{d_i}| = sqrt(4 + 9 + 36) = 7</span> for every diagonal. <span class="chem">\mathbf{d_1} \cdot \mathbf{d_2} = 41</span>, <span class="chem">\mathbf{d_1} \cdot \mathbf{d_3} = 31</span>, <span class="chem">\mathbf{d_1} \cdot \mathbf{d_4} = -23</span>. Acute angles: <span class="chem">arccos(41/49) ≈ 33.2°</span>, <span class="chem">arccos(31/49) ≈ 50.8°</span>, <span class="chem">arccos(23/49) ≈ 62.0°</span>.</p><p>(c) <span class="chem">\mathbf{d_1} \cdot \mathbf{d_2} = -a^2 + b^2 + c^2</span> and <span class="chem">|\mathbf{d_1}| = |\mathbf{d_2}| = sqrt(a^2 + b^2 + c^2)</span>. For the acute angle take the modulus: <span class="chem">cos theta = |b^2 + c^2 - a^2| / (a^2 + b^2 + c^2)</span>.</p><p>(d) Perpendicular when <span class="chem">a^2 = b^2 + c^2</span>. With <span class="chem">b = 3, c = 4</span>: <span class="chem">a = 5</span>.</p><p>(e) The three conditions are <span class="chem">a^2 = b^2 + c^2</span>, <span class="chem">b^2 = a^2 + c^2</span>, <span class="chem">c^2 = a^2 + b^2</span>. If, say, the first two held, adding gives <span class="chem">a^2 + b^2 = a^2 + b^2 + 2c^2</span>, so <span class="chem">c = 0</span>, which is impossible for a cuboid. The other pairs are the same with the letters swapped. So at most one condition can hold.</p>
      answer: "<p>(a) <span class=\"chem\">(1, 1, 1) \\cdot (-1, 1, 1) = 1</span>이고 두 크기는 모두 <span class=\"chem\">sqrt(3)</span>이므로 <span class=\"chem\">cos theta = 1/3</span>, <span class=\"chem\">theta ≈ 70.5°</span>예요.</p><p>(b) 모든 대각선에 대해 <span class=\"chem\">|\\mathbf{d_i}| = sqrt(4 + 9 + 36) = 7</span>이에요. <span class=\"chem\">\\mathbf{d_1} \\cdot \\mathbf{d_2} = 41</span>, <span class=\"chem\">\\mathbf{d_1} \\cdot \\mathbf{d_3} = 31</span>, <span class=\"chem\">\\mathbf{d_1} \\cdot \\mathbf{d_4} = -23</span>. 예각: <span class=\"chem\">arccos(41/49) ≈ 33.2°</span>, <span class=\"chem\">arccos(31/49) ≈ 50.8°</span>, <span class=\"chem\">arccos(23/49) ≈ 62.0°</span>.</p><p>(c) <span class=\"chem\">\\mathbf{d_1} \\cdot \\mathbf{d_2} = -a^2 + b^2 + c^2</span>이고 <span class=\"chem\">|\\mathbf{d_1}| = |\\mathbf{d_2}| = sqrt(a^2 + b^2 + c^2)</span>예요. 예각을 구하려면 절댓값을 취해요: <span class=\"chem\">cos theta = |b^2 + c^2 - a^2| / (a^2 + b^2 + c^2)</span>.</p><p>(d) <span class=\"chem\">a^2 = b^2 + c^2</span>일 때 수직이에요. <span class=\"chem\">b = 3, c = 4</span>일 때 <span class=\"chem\">a = 5</span>예요.</p><p>(e) 세 조건은 <span class=\"chem\">a^2 = b^2 + c^2</span>, <span class=\"chem\">b^2 = a^2 + c^2</span>, <span class=\"chem\">c^2 = a^2 + b^2</span>예요. 예를 들어 처음 두 조건이 성립하면 더해서 <span class=\"chem\">a^2 + b^2 = a^2 + b^2 + 2c^2</span>이므로 <span class=\"chem\">c = 0</span>이 되는데, 이는 직육면체에서 불가능해요. 다른 쌍도 문자를 바꾸면 마찬가지예요. 따라서 많아야 한 조건만 성립해요.</p>",
      markscheme: [
        // EN: M1: uses two diagonal directions of the cube, e.g. <span class="chem">(1, 1, 1)</span> and <span class="chem">(-1, 1, 1)</span>.
        "M1: 정육면체의 두 대각선 방향을 이용함. 예: <span class=\"chem\">(1, 1, 1)</span>과 <span class=\"chem\">(-1, 1, 1)</span>.",
        // EN: A1: <span class="chem">cos theta = 1/3</span>.
        "A1: <span class=\"chem\">cos theta = 1/3</span>.",
        // EN: A1: <span class="chem">theta ≈ 70.5°</span>.
        "A1: <span class=\"chem\">theta ≈ 70.5°</span>.",
        // EN: M1: writes the four directions for <span class="chem">a = 2, b = 3, c = 6</span> and uses the scalar product.
        "M1: <span class=\"chem\">a = 2, b = 3, c = 6</span>일 때 네 방향을 쓰고 내적을 이용함.",
        // EN: A1: scalar products <span class="chem">41, 31, -23</span> and magnitudes 7.
        "A1: 내적 <span class=\"chem\">41, 31, -23</span>, 크기 7.",
        // EN: A1: <span class="chem">33.2°</span> and <span class="chem">50.8°</span>.
        "A1: <span class=\"chem\">33.2°</span>, <span class=\"chem\">50.8°</span>.",
        // EN: A1: <span class="chem">62.0°</span> (acute, not <span class="chem">118°</span>).
        "A1: <span class=\"chem\">62.0°</span> (예각이며 <span class=\"chem\">118°</span>가 아님).",
        // EN: M1: <span class="chem">\mathbf{d_1} \cdot \mathbf{d_2} = -a^2 + b^2 + c^2</span>.
        "M1: <span class=\"chem\">\\mathbf{d_1} \\cdot \\mathbf{d_2} = -a^2 + b^2 + c^2</span>.",
        // EN: A1: both magnitudes <span class="chem">sqrt(a^2 + b^2 + c^2)</span>.
        "A1: 두 크기 모두 <span class=\"chem\">sqrt(a^2 + b^2 + c^2)</span>.",
        // EN: R1: takes the modulus for the acute angle, giving the result (AG).
        "R1: 예각을 구하기 위해 절댓값을 취하여 결과를 얻음 (AG).",
        // EN: A1: <span class="chem">a^2 = b^2 + c^2</span>.
        "A1: <span class=\"chem\">a^2 = b^2 + c^2</span>.",
        // EN: A1: <span class="chem">a = 5</span>.
        "A1: <span class=\"chem\">a = 5</span>.",
        // EN: M1: writes the three conditions.
        "M1: 세 조건을 씀.",
        // EN: M1: assumes two hold and combines them.
        "M1: 두 조건이 성립한다고 가정하고 결합함.",
        // EN: R1: obtains a zero edge length, a contradiction, so at most one holds.
        "R1: 모서리의 길이가 영(zero)이 되어 모순이므로 많아야 하나만 성립함.",
      ],
    },

    // ── t3-3-q058 · short · challenge · AHL · AHL 3.16–3.18 · 16 marks
    "t3-3-q058": {
      // EN: <p>This investigation finds a "Pythagoras theorem for areas". Let <span class="chem">O</span> be the origin.</p><p>(a) The points <span class="chem">A(2, 0, 0)</span>, <span class="chem">B(0, 3, 0)</span> and <span class="chem">C(0, 0, 6)</span> are given. Find <span class="chem">\mathbf{AB} \times \mathbf{AC}</span> and hence the exact area of triangle <span class="chem">ABC</span>. <strong>[3 marks]</strong></p><p>(b) Find the areas of the right-angled triangles <span class="chem">OAB</span>, <span class="chem">OBC</span> and <span class="chem">OCA</span>. Verify that the sum of their squares equals the square of the area of <span class="chem">ABC</span>. <strong>[3 marks]</strong></p><p>(c) Prove this result for <span class="chem">A(p, 0, 0)</span>, <span class="chem">B(0, q, 0)</span>, <span class="chem">C(0, 0, r)</span>, where <span class="chem">p, q, r &gt; 0</span>. <strong>[4 marks]</strong></p><p>In general, the components of <span class="chem">(1/2)\mathbf{AB} \times \mathbf{AC}</span> are, up to sign, the areas of the projections (shadows) of triangle <span class="chem">ABC</span> onto the coordinate planes <span class="chem">x = 0</span>, <span class="chem">y = 0</span> and <span class="chem">z = 0</span>.</p><p>(d) A triangular sail has corners <span class="chem">P(1, 2, 0.5)</span>, <span class="chem">Q(4, -1, 2.2)</span> and <span class="chem">R(2.5, 3.5, 4)</span>, in metres, with the <span class="chem">z</span>-axis vertical. Find the area of the sail and the area of its shadow on the ground <span class="chem">z = 0</span> when the sun is directly overhead. <strong>[4 marks]</strong></p><p>(e) Hence find the angle between the plane of the sail and the ground. <strong>[2 marks]</strong></p>
      stem: "<p>이 탐구에서는 \"넓이에 대한 피타고라스 정리\"를 찾아요. <span class=\"chem\">O</span>를 원점이라 하자.</p><p>(a) 점 <span class=\"chem\">A(2, 0, 0)</span>, <span class=\"chem\">B(0, 3, 0)</span>, <span class=\"chem\">C(0, 0, 6)</span>이 주어져 있어요. <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC}</span>를 구하고 (Find), 이를 이용하여 삼각형 <span class=\"chem\">ABC</span>의 정확한 넓이를 구하시오. <strong>[3 marks]</strong></p><p>(b) 직각삼각형 <span class=\"chem\">OAB</span>, <span class=\"chem\">OBC</span>, <span class=\"chem\">OCA</span>의 넓이를 구하시오 (Find). 그 넓이들의 제곱의 합이 <span class=\"chem\">ABC</span>의 넓이의 제곱과 같음을 확인하시오 (Verify). <strong>[3 marks]</strong></p><p>(c) <span class=\"chem\">A(p, 0, 0)</span>, <span class=\"chem\">B(0, q, 0)</span>, <span class=\"chem\">C(0, 0, r)</span>(단, <span class=\"chem\">p, q, r &gt; 0</span>)에 대해 이 결과를 증명하시오 (Prove). <strong>[4 marks]</strong></p><p>일반적으로 <span class=\"chem\">(1/2)\\mathbf{AB} \\times \\mathbf{AC}</span>의 성분은 부호를 무시하면 삼각형 <span class=\"chem\">ABC</span>를 좌표평면 <span class=\"chem\">x = 0</span>, <span class=\"chem\">y = 0</span>, <span class=\"chem\">z = 0</span>에 정사영한 것(그림자)의 넓이예요.</p><p>(d) 삼각형 돛의 꼭짓점은 <span class=\"chem\">P(1, 2, 0.5)</span>, <span class=\"chem\">Q(4, -1, 2.2)</span>, <span class=\"chem\">R(2.5, 3.5, 4)</span>(단위: 미터)이고, <span class=\"chem\">z</span>축은 연직 방향이에요. 돛의 넓이와, 해가 바로 위에 있을 때 지면 <span class=\"chem\">z = 0</span> 위에 생기는 그림자의 넓이를 구하시오 (Find). <strong>[4 marks]</strong></p><p>(e) 이를 이용하여 (Hence) 돛이 놓인 평면과 지면이 이루는 각을 구하시오 (find). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: the "shadow on the ground" is the projection onto <span class="chem">z = 0</span>; the given fact says its area is half the size of the <span class="chem">z</span>-component of the vector product.
        "해석: \"지면 위의 그림자\"는 <span class=\"chem\">z = 0</span>에 정사영한 것이에요. 주어진 사실에 따르면 그 넓이는 외적의 <span class=\"chem\">z</span>성분의 크기의 절반이에요.",
        // EN: In (c), repeat (a) with letters. The right-angled face <span class="chem">OBC</span> has legs <span class="chem">q</span> and <span class="chem">r</span>.
        "(c)에서는 문자를 사용하여 (a)를 반복해요. 직각인 면 <span class=\"chem\">OBC</span>의 직각을 낀 두 변은 <span class=\"chem\">q</span>와 <span class=\"chem\">r</span>예요.",
        // EN: In (e), compare: <span class="chem">cos theta = |\mathbf{n} \cdot \mathbf{k}| / |\mathbf{n}|</span> is the same ratio as shadow area over true area.
        "(e)에서 비교해 보세요: <span class=\"chem\">cos theta = |\\mathbf{n} \\cdot \\mathbf{k}| / |\\mathbf{n}|</span>는 그림자의 넓이를 실제 넓이로 나눈 비와 같아요.",
      ],
      // EN: <p>(a) <span class="chem">\mathbf{AB} = (-2, 3, 0)</span>, <span class="chem">\mathbf{AC} = (-2, 0, 6)</span>, <span class="chem">\mathbf{AB} \times \mathbf{AC} = (18, 12, 6)</span>. <span class="chem">|(18, 12, 6)| = sqrt(504) = 6 sqrt(14)</span>, so the area is <span class="chem">3 sqrt(14)</span>.</p><p>(b) <span class="chem">OAB = (1/2)(2)(3) = 3</span>, <span class="chem">OBC = (1/2)(3)(6) = 9</span>, <span class="chem">OCA = (1/2)(6)(2) = 6</span>. <span class="chem">3^2 + 9^2 + 6^2 = 126 = (3 sqrt(14))^2</span>.</p><p>(c) <span class="chem">\mathbf{AB} = (-p, q, 0)</span>, <span class="chem">\mathbf{AC} = (-p, 0, r)</span>, <span class="chem">\mathbf{AB} \times \mathbf{AC} = (qr, pr, pq)</span>. So <span class="chem">(area ABC)^2 = (1/4)(q^2r^2 + p^2r^2 + p^2q^2) = (qr/2)^2 + (pr/2)^2 + (pq/2)^2</span>, which are the squares of the areas of <span class="chem">OBC</span>, <span class="chem">OCA</span>, <span class="chem">OAB</span>.</p><p>(d) <span class="chem">\mathbf{PQ} = (3, -3, 1.7)</span>, <span class="chem">\mathbf{PR} = (1.5, 1.5, 3.5)</span>, <span class="chem">\mathbf{PQ} \times \mathbf{PR} = (-13.05, -7.95, 9)</span>. Area of sail <span class="chem">= (1/2)|(-13.05, -7.95, 9)| ≈ 8.87</span> m<sup>2</sup>. Shadow on <span class="chem">z = 0</span>: <span class="chem">(1/2)|9| = 4.5</span> m<sup>2</sup>.</p><p>(e) <span class="chem">cos theta = 4.5 / 8.867 ≈ 0.5075</span> (the same as <span class="chem">|\mathbf{n} \cdot \mathbf{k}| / |\mathbf{n}|</span>), so <span class="chem">theta ≈ 59.5°</span>.</p>
      answer: "<p>(a) <span class=\"chem\">\\mathbf{AB} = (-2, 3, 0)</span>, <span class=\"chem\">\\mathbf{AC} = (-2, 0, 6)</span>, <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC} = (18, 12, 6)</span>. <span class=\"chem\">|(18, 12, 6)| = sqrt(504) = 6 sqrt(14)</span>이므로 넓이는 <span class=\"chem\">3 sqrt(14)</span>예요.</p><p>(b) <span class=\"chem\">OAB = (1/2)(2)(3) = 3</span>, <span class=\"chem\">OBC = (1/2)(3)(6) = 9</span>, <span class=\"chem\">OCA = (1/2)(6)(2) = 6</span>. <span class=\"chem\">3^2 + 9^2 + 6^2 = 126 = (3 sqrt(14))^2</span>.</p><p>(c) <span class=\"chem\">\\mathbf{AB} = (-p, q, 0)</span>, <span class=\"chem\">\\mathbf{AC} = (-p, 0, r)</span>, <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC} = (qr, pr, pq)</span>. 따라서 <span class=\"chem\">(area ABC)^2 = (1/4)(q^2r^2 + p^2r^2 + p^2q^2) = (qr/2)^2 + (pr/2)^2 + (pq/2)^2</span>이고, 이것은 <span class=\"chem\">OBC</span>, <span class=\"chem\">OCA</span>, <span class=\"chem\">OAB</span>의 넓이의 제곱이에요.</p><p>(d) <span class=\"chem\">\\mathbf{PQ} = (3, -3, 1.7)</span>, <span class=\"chem\">\\mathbf{PR} = (1.5, 1.5, 3.5)</span>, <span class=\"chem\">\\mathbf{PQ} \\times \\mathbf{PR} = (-13.05, -7.95, 9)</span>. 돛의 넓이 <span class=\"chem\">= (1/2)|(-13.05, -7.95, 9)| ≈ 8.87</span> m<sup>2</sup>. <span class=\"chem\">z = 0</span> 위의 그림자: <span class=\"chem\">(1/2)|9| = 4.5</span> m<sup>2</sup>.</p><p>(e) <span class=\"chem\">cos theta = 4.5 / 8.867 ≈ 0.5075</span>(<span class=\"chem\">|\\mathbf{n} \\cdot \\mathbf{k}| / |\\mathbf{n}|</span>와 같음)이므로 <span class=\"chem\">theta ≈ 59.5°</span>예요.</p>",
      markscheme: [
        // EN: M1: forms <span class="chem">\mathbf{AB}</span> and <span class="chem">\mathbf{AC}</span> and their vector product.
        "M1: <span class=\"chem\">\\mathbf{AB}</span>와 <span class=\"chem\">\\mathbf{AC}</span>, 그리고 그 외적을 구함.",
        // EN: A1: <span class="chem">(18, 12, 6)</span>.
        "A1: <span class=\"chem\">(18, 12, 6)</span>.",
        // EN: A1: area <span class="chem">3 sqrt(14)</span>.
        "A1: 넓이 <span class=\"chem\">3 sqrt(14)</span>.",
        // EN: A1: areas 3, 9 and 6.
        "A1: 넓이 3, 9, 6.",
        // EN: M1: sum of squares <span class="chem">= 126</span>.
        "M1: 제곱의 합 <span class=\"chem\">= 126</span>.",
        // EN: A1: <span class="chem">(3 sqrt(14))^2 = 126</span>, so the result holds.
        "A1: <span class=\"chem\">(3 sqrt(14))^2 = 126</span>이므로 결과가 성립함.",
        // EN: M1: <span class="chem">\mathbf{AB} = (-p, q, 0)</span>, <span class="chem">\mathbf{AC} = (-p, 0, r)</span>.
        "M1: <span class=\"chem\">\\mathbf{AB} = (-p, q, 0)</span>, <span class=\"chem\">\\mathbf{AC} = (-p, 0, r)</span>.",
        // EN: A1: <span class="chem">\mathbf{AB} \times \mathbf{AC} = (qr, pr, pq)</span>.
        "A1: <span class=\"chem\">\\mathbf{AB} \\times \\mathbf{AC} = (qr, pr, pq)</span>.",
        // EN: M1: area squared <span class="chem">= (1/4)|\mathbf{AB} \times \mathbf{AC}|^2</span>.
        "M1: 넓이의 제곱 <span class=\"chem\">= (1/4)|\\mathbf{AB} \\times \\mathbf{AC}|^2</span>.",
        // EN: R1: identifies <span class="chem">qr/2</span>, <span class="chem">pr/2</span>, <span class="chem">pq/2</span> as the areas of the three right-angled faces (AG).
        "R1: <span class=\"chem\">qr/2</span>, <span class=\"chem\">pr/2</span>, <span class=\"chem\">pq/2</span>가 세 직각인 면의 넓이임을 밝힘 (AG).",
        // EN: M1: finds <span class="chem">\mathbf{PQ} \times \mathbf{PR}</span>.
        "M1: <span class=\"chem\">\\mathbf{PQ} \\times \\mathbf{PR}</span>를 구함.",
        // EN: A1: <span class="chem">(-13.05, -7.95, 9)</span>.
        "A1: <span class=\"chem\">(-13.05, -7.95, 9)</span>.",
        // EN: A1: area of sail <span class="chem">≈ 8.87</span> m<sup>2</sup>.
        "A1: 돛의 넓이 <span class=\"chem\">≈ 8.87</span> m<sup>2</sup>.",
        // EN: A1: shadow area <span class="chem">4.5</span> m<sup>2</sup>.
        "A1: 그림자의 넓이 <span class=\"chem\">4.5</span> m<sup>2</sup>.",
        // EN: M1: <span class="chem">cos theta = </span> shadow area / true area (or uses the normals).
        "M1: <span class=\"chem\">cos theta = </span> 그림자의 넓이 / 실제 넓이 (또는 법선벡터를 이용함).",
        // EN: A1: <span class="chem">theta ≈ 59.5°</span>.
        "A1: <span class=\"chem\">theta ≈ 59.5°</span>.",
      ],
    },

    // ── t3-3-q059 · short · challenge · AHL · AHL 3.13, 3.14, 3.16 · 18 marks
    "t3-3-q059": {
      // EN: <p>This investigation finds a general rule for the closest approach of two objects moving with constant velocities. If their relative position is <span class="chem">\mathbf{d}(t) = \mathbf{d_0} + t\mathbf{w}</span>, where <span class="chem">\mathbf{w} != \mathbf{0}</span> is the relative velocity, then the distance between them is <span class="chem">|\mathbf{d}(t)|</span>.</p><p>(a) Let <span class="chem">\mathbf{d_0} = (6, -3, 2)</span> and <span class="chem">\mathbf{w} = (-2, 1, 1)</span>. Show that <span class="chem">|\mathbf{d}(t)|^2 = 6t^2 - 26t + 49</span>. Hence find the time of closest approach and the exact minimum distance. <strong>[4 marks]</strong></p><p>(b) Show that, at the time found in (a), <span class="chem">\mathbf{d}(t) \cdot \mathbf{w} = 0</span>. <strong>[2 marks]</strong></p><p>(c) Prove that, in general, <span class="chem">|\mathbf{d}(t)|</span> is least when <span class="chem">t = -(\mathbf{d_0} \cdot \mathbf{w}) / |\mathbf{w}|^2</span>. <strong>[3 marks]</strong></p><p>(d) Show that the minimum distance <span class="chem">d_{min}</span> satisfies <span class="chem">d_{min}^2 = |\mathbf{d_0}|^2 - (\mathbf{d_0} \cdot \mathbf{w})^2 / |\mathbf{w}|^2</span>, and verify this for the vectors in (a). <strong>[3 marks]</strong></p><p>(e) For the vectors in (a), verify that <span class="chem">|\mathbf{d_0} \times \mathbf{w}|^2 / |\mathbf{w}|^2</span> gives the same value. <strong>[2 marks]</strong></p><p>(f) Two ships have positions <span class="chem">\mathbf{r_A} = (2.5, -1) + t(14, 6)</span> and <span class="chem">\mathbf{r_B} = (21, 4.5) + t(-6, 9)</span>, in km, <span class="chem">t</span> hours after midnight. Use your results to find the time of closest approach, in minutes after midnight, and the minimum distance between the ships. <strong>[4 marks]</strong></p>
      stem: "<p>이 탐구에서는 일정한 속도로 움직이는 두 물체가 가장 가까워지는 경우에 대한 일반적인 규칙을 찾아요. 두 물체의 상대 위치가 <span class=\"chem\">\\mathbf{d}(t) = \\mathbf{d_0} + t\\mathbf{w}</span>이고 <span class=\"chem\">\\mathbf{w} != \\mathbf{0}</span>가 상대 속도일 때, 두 물체 사이의 거리는 <span class=\"chem\">|\\mathbf{d}(t)|</span>예요.</p><p>(a) <span class=\"chem\">\\mathbf{d_0} = (6, -3, 2)</span>, <span class=\"chem\">\\mathbf{w} = (-2, 1, 1)</span>라 하자. <span class=\"chem\">|\\mathbf{d}(t)|^2 = 6t^2 - 26t + 49</span>임을 보이시오 (Show that). 이를 이용하여 (Hence) 가장 가까워지는 시각과 정확한 최단 거리를 구하시오 (find). <strong>[4 marks]</strong></p><p>(b) (a)에서 구한 시각에서 <span class=\"chem\">\\mathbf{d}(t) \\cdot \\mathbf{w} = 0</span>임을 보이시오 (Show that). <strong>[2 marks]</strong></p><p>(c) 일반적으로 <span class=\"chem\">|\\mathbf{d}(t)|</span>는 <span class=\"chem\">t = -(\\mathbf{d_0} \\cdot \\mathbf{w}) / |\\mathbf{w}|^2</span>일 때 최소임을 증명하시오 (Prove). <strong>[3 marks]</strong></p><p>(d) 최단 거리 <span class=\"chem\">d_{min}</span>가 <span class=\"chem\">d_{min}^2 = |\\mathbf{d_0}|^2 - (\\mathbf{d_0} \\cdot \\mathbf{w})^2 / |\\mathbf{w}|^2</span>를 만족함을 보이고 (Show that), (a)의 벡터에 대해 이를 확인하시오 (verify). <strong>[3 marks]</strong></p><p>(e) (a)의 벡터에 대해 <span class=\"chem\">|\\mathbf{d_0} \\times \\mathbf{w}|^2 / |\\mathbf{w}|^2</span>가 같은 값을 줌을 확인하시오 (verify). <strong>[2 marks]</strong></p><p>(f) 자정에서 <span class=\"chem\">t</span>시간 후 두 배의 위치는 <span class=\"chem\">\\mathbf{r_A} = (2.5, -1) + t(14, 6)</span>, <span class=\"chem\">\\mathbf{r_B} = (21, 4.5) + t(-6, 9)</span>(단위: km)이에요. 앞의 결과를 이용하여 가장 가까워지는 시각(자정 이후 몇 분)과 두 배 사이의 최단 거리를 구하시오 (find). <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: the two objects are replaced by one point moving with the relative velocity <span class="chem">\mathbf{w}</span>. "Closest approach" means "minimum of <span class="chem">|\mathbf{d}(t)|</span>".
        "해석: 두 물체를 상대 속도 <span class=\"chem\">\\mathbf{w}</span>로 움직이는 한 점으로 바꿔 생각해요. \"가장 가까워진다\"는 \"<span class=\"chem\">|\\mathbf{d}(t)|</span>의 최솟값\"이라는 뜻이에요.",
        // EN: A quadratic <span class="chem">At^2 + Bt + C</span> with <span class="chem">A &gt; 0</span> is least at <span class="chem">t = -B/(2A)</span>.
        "<span class=\"chem\">A &gt; 0</span>인 이차식 <span class=\"chem\">At^2 + Bt + C</span>는 <span class=\"chem\">t = -B/(2A)</span>에서 최소예요.",
        // EN: In (f), <span class="chem">\mathbf{d_0}</span> is the difference of the starting positions and <span class="chem">\mathbf{w}</span> is the difference of the velocities.
        "(f)에서 <span class=\"chem\">\\mathbf{d_0}</span>는 출발 위치의 차이고 <span class=\"chem\">\\mathbf{w}</span>는 속도의 차예요.",
      ],
      // EN: <p>(a) <span class="chem">\mathbf{d}(t) = (6 - 2t, -3 + t, 2 + t)</span>, so <span class="chem">|\mathbf{d}|^2 = (36 - 24t + 4t^2) + (9 - 6t + t^2) + (4 + 4t + t^2) = 6t^2 - 26t + 49</span>. The minimum is at <span class="chem">t = 26/12 = 13/6</span>, where <span class="chem">|\mathbf{d}|^2 = 49 - 169/6 = 125/6</span>. The minimum distance is <span class="chem">sqrt(125/6) = 5 sqrt(30)/6 ≈ 4.56</span>.</p><p>(b) <span class="chem">\mathbf{d}(13/6) = (5/3, -5/6, 25/6)</span> and <span class="chem">(5/3)(-2) + (-5/6)(1) + (25/6)(1) = -20/6 - 5/6 + 25/6 = 0</span>.</p><p>(c) <span class="chem">f(t) = |\mathbf{d}|^2 = (\mathbf{d_0} + t\mathbf{w}) \cdot (\mathbf{d_0} + t\mathbf{w}) = |\mathbf{d_0}|^2 + 2t(\mathbf{d_0} \cdot \mathbf{w}) + t^2|\mathbf{w}|^2</span>. This quadratic has positive leading coefficient, so its minimum is where <span class="chem">f'(t) = 2(\mathbf{d_0} \cdot \mathbf{w}) + 2t|\mathbf{w}|^2 = 0</span>, i.e. <span class="chem">t = -(\mathbf{d_0} \cdot \mathbf{w}) / |\mathbf{w}|^2</span>. Minimising <span class="chem">|\mathbf{d}|^2</span> also minimises <span class="chem">|\mathbf{d}|</span>.</p><p>(d) Substituting: <span class="chem">d_{min}^2 = |\mathbf{d_0}|^2 - 2(\mathbf{d_0} \cdot \mathbf{w})^2/|\mathbf{w}|^2 + (\mathbf{d_0} \cdot \mathbf{w})^2/|\mathbf{w}|^2 = |\mathbf{d_0}|^2 - (\mathbf{d_0} \cdot \mathbf{w})^2/|\mathbf{w}|^2</span>. In (a): <span class="chem">49 - (-13)^2/6 = 125/6</span>.</p><p>(e) <span class="chem">\mathbf{d_0} \times \mathbf{w} = (6, -3, 2) \times (-2, 1, 1) = (-5, -10, 0)</span>, so <span class="chem">|\mathbf{d_0} \times \mathbf{w}|^2 / |\mathbf{w}|^2 = 125/6</span>.</p><p>(f) <span class="chem">\mathbf{d_0} = (2.5 - 21, -1 - 4.5) = (-18.5, -5.5)</span>, <span class="chem">\mathbf{w} = (14 + 6, 6 - 9) = (20, -3)</span>. <span class="chem">\mathbf{d_0} \cdot \mathbf{w} = -353.5</span>, <span class="chem">|\mathbf{w}|^2 = 409</span>, so <span class="chem">t = 353.5/409 ≈ 0.8643</span> h <span class="chem">≈ 51.9</span> minutes after midnight. <span class="chem">d_{min}^2 = 372.5 - 353.5^2/409 ≈ 66.97</span>, so <span class="chem">d_{min} ≈ 8.18</span> km.</p>
      answer: "<p>(a) <span class=\"chem\">\\mathbf{d}(t) = (6 - 2t, -3 + t, 2 + t)</span>이므로 <span class=\"chem\">|\\mathbf{d}|^2 = (36 - 24t + 4t^2) + (9 - 6t + t^2) + (4 + 4t + t^2) = 6t^2 - 26t + 49</span>예요. 최솟값은 <span class=\"chem\">t = 26/12 = 13/6</span>에서 나오고, 이때 <span class=\"chem\">|\\mathbf{d}|^2 = 49 - 169/6 = 125/6</span>예요. 최단 거리는 <span class=\"chem\">sqrt(125/6) = 5 sqrt(30)/6 ≈ 4.56</span>예요.</p><p>(b) <span class=\"chem\">\\mathbf{d}(13/6) = (5/3, -5/6, 25/6)</span>이고 <span class=\"chem\">(5/3)(-2) + (-5/6)(1) + (25/6)(1) = -20/6 - 5/6 + 25/6 = 0</span>이에요.</p><p>(c) <span class=\"chem\">f(t) = |\\mathbf{d}|^2 = (\\mathbf{d_0} + t\\mathbf{w}) \\cdot (\\mathbf{d_0} + t\\mathbf{w}) = |\\mathbf{d_0}|^2 + 2t(\\mathbf{d_0} \\cdot \\mathbf{w}) + t^2|\\mathbf{w}|^2</span>. 이 이차식의 최고차항의 계수가 양수이므로 최솟값은 <span class=\"chem\">f'(t) = 2(\\mathbf{d_0} \\cdot \\mathbf{w}) + 2t|\\mathbf{w}|^2 = 0</span>, 즉 <span class=\"chem\">t = -(\\mathbf{d_0} \\cdot \\mathbf{w}) / |\\mathbf{w}|^2</span>에서 나와요. <span class=\"chem\">|\\mathbf{d}|^2</span>를 최소화하면 <span class=\"chem\">|\\mathbf{d}|</span>도 최소화돼요.</p><p>(d) 대입하면 <span class=\"chem\">d_{min}^2 = |\\mathbf{d_0}|^2 - 2(\\mathbf{d_0} \\cdot \\mathbf{w})^2/|\\mathbf{w}|^2 + (\\mathbf{d_0} \\cdot \\mathbf{w})^2/|\\mathbf{w}|^2 = |\\mathbf{d_0}|^2 - (\\mathbf{d_0} \\cdot \\mathbf{w})^2/|\\mathbf{w}|^2</span>예요. (a)에서는 <span class=\"chem\">49 - (-13)^2/6 = 125/6</span>예요.</p><p>(e) <span class=\"chem\">\\mathbf{d_0} \\times \\mathbf{w} = (6, -3, 2) \\times (-2, 1, 1) = (-5, -10, 0)</span>이므로 <span class=\"chem\">|\\mathbf{d_0} \\times \\mathbf{w}|^2 / |\\mathbf{w}|^2 = 125/6</span>예요.</p><p>(f) <span class=\"chem\">\\mathbf{d_0} = (2.5 - 21, -1 - 4.5) = (-18.5, -5.5)</span>, <span class=\"chem\">\\mathbf{w} = (14 + 6, 6 - 9) = (20, -3)</span>. <span class=\"chem\">\\mathbf{d_0} \\cdot \\mathbf{w} = -353.5</span>, <span class=\"chem\">|\\mathbf{w}|^2 = 409</span>이므로 <span class=\"chem\">t = 353.5/409 ≈ 0.8643</span> h, 즉 자정 이후 <span class=\"chem\">≈ 51.9</span>분이에요. <span class=\"chem\">d_{min}^2 = 372.5 - 353.5^2/409 ≈ 66.97</span>이므로 <span class=\"chem\">d_{min} ≈ 8.18</span> km예요.</p>",
      markscheme: [
        // EN: A1: expands <span class="chem">|\mathbf{d}(t)|^2</span> correctly to <span class="chem">6t^2 - 26t + 49</span> (AG).
        "A1: <span class=\"chem\">|\\mathbf{d}(t)|^2</span>를 올바르게 전개하여 <span class=\"chem\">6t^2 - 26t + 49</span>를 얻음 (AG).",
        // EN: M1: finds the minimum of the quadratic (vertex, completing the square or derivative).
        "M1: 이차식의 최솟값을 구함 (꼭짓점, 완전제곱식 또는 도함수).",
        // EN: A1: <span class="chem">t = 13/6</span>.
        "A1: <span class=\"chem\">t = 13/6</span>.",
        // EN: A1: minimum distance <span class="chem">sqrt(125/6)</span> (or <span class="chem">5 sqrt(30)/6</span>).
        "A1: 최단 거리 <span class=\"chem\">sqrt(125/6)</span> (또는 <span class=\"chem\">5 sqrt(30)/6</span>).",
        // EN: M1: substitutes <span class="chem">t = 13/6</span> to get <span class="chem">\mathbf{d} = (5/3, -5/6, 25/6)</span>.
        "M1: <span class=\"chem\">t = 13/6</span>을 대입하여 <span class=\"chem\">\\mathbf{d} = (5/3, -5/6, 25/6)</span>를 얻음.",
        // EN: A1: scalar product with <span class="chem">\mathbf{w}</span> equals 0.
        "A1: <span class=\"chem\">\\mathbf{w}</span>와의 내적이 0임.",
        // EN: M1: expands <span class="chem">|\mathbf{d_0} + t\mathbf{w}|^2</span> using scalar products.
        "M1: 내적을 이용하여 <span class=\"chem\">|\\mathbf{d_0} + t\\mathbf{w}|^2</span>를 전개함.",
        // EN: M1: finds the turning point (derivative or vertex of the quadratic).
        "M1: 극점을 구함 (도함수 또는 이차식의 꼭짓점).",
        // EN: R1: states it is a minimum (positive coefficient <span class="chem">|\mathbf{w}|^2</span>) and that minimising the square minimises the distance (AG).
        "R1: 그것이 최솟값임(계수 <span class=\"chem\">|\\mathbf{w}|^2</span>가 양수)과 제곱을 최소화하면 거리도 최소화됨을 밝힘 (AG).",
        // EN: M1: substitutes <span class="chem">t</span> into the expression for <span class="chem">|\mathbf{d}|^2</span>.
        "M1: <span class=\"chem\">t</span>를 <span class=\"chem\">|\\mathbf{d}|^2</span>의 식에 대입함.",
        // EN: A1: simplifies to the given result (AG).
        "A1: 주어진 결과로 간단히 함 (AG).",
        // EN: A1: <span class="chem">\mathbf{d_0} \cdot \mathbf{w} = -13</span> and <span class="chem">49 - 169/6 = 125/6</span>.
        "A1: <span class=\"chem\">\\mathbf{d_0} \\cdot \\mathbf{w} = -13</span>이고 <span class=\"chem\">49 - 169/6 = 125/6</span>.",
        // EN: A1: <span class="chem">\mathbf{d_0} \times \mathbf{w} = (-5, -10, 0)</span>.
        "A1: <span class=\"chem\">\\mathbf{d_0} \\times \\mathbf{w} = (-5, -10, 0)</span>.",
        // EN: A1: <span class="chem">125/6</span>, the same value.
        "A1: <span class=\"chem\">125/6</span>로 같은 값임.",
        // EN: M1: forms <span class="chem">\mathbf{d_0} = (-18.5, -5.5)</span> and <span class="chem">\mathbf{w} = (20, -3)</span>.
        "M1: <span class=\"chem\">\\mathbf{d_0} = (-18.5, -5.5)</span>와 <span class=\"chem\">\\mathbf{w} = (20, -3)</span>을 구함.",
        // EN: M1: applies the formula for <span class="chem">t</span> (or minimises on the GDC).
        "M1: <span class=\"chem\">t</span>에 대한 공식을 적용함 (또는 GDC로 최소화함).",
        // EN: A1: <span class="chem">t ≈ 0.864</span> h, about 51.9 minutes after midnight.
        "A1: <span class=\"chem\">t ≈ 0.864</span> h, 자정 이후 약 51.9분.",
        // EN: A1: minimum distance <span class="chem">≈ 8.18</span> km.
        "A1: 최단 거리 <span class=\"chem\">≈ 8.18</span> km.",
      ],
    },

  }
});
