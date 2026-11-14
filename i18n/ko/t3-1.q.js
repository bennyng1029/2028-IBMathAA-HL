/* t3-1.q — ko question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't3-1.q', {
  questions: {

    // ── t3-1-q001 · numeric · foundation · SL · SL 3.1 · 2 marks
    "t3-1-q001": {
      // EN: <p>Find the straight-line distance between the points <span class=\"\">A(1, -2, 4)</span> and <span class=\"\">B(3, 4, -2)</span> in three-dimensional space.</p>
      stem: "<p>3차원 공간에서 두 점 <span class=\"chem\">A(1, -2, 4)</span>와 <span class=\"chem\">B(3, 4, -2)</span> 사이의 직선 거리를 구하시오 (Find).</p>",
      hints: [
        // EN: Use the 3D distance formula: <span class=\"\">d = sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2)</span>.
        "3D 거리 공식을 사용하세요: <span class=\"chem\">d = sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2)</span>.",
        // EN: The differences in the coordinates are <span class=\"\">2</span>, <span class=\"\">6</span>, and <span class=\"\">-6</span>.
        "각 좌표의 차는 <span class=\"chem\">2</span>, <span class=\"chem\">6</span>, <span class=\"chem\">-6</span>이에요.",
      ],
      // EN: <div class=\"\"><i>d</i> = √((3 − 1)<sup>2</sup> + (4 − (−2))<sup>2</sup> + (−2 − 4)<sup>2</sup>) = √(4 + 36 + 36) = <b>√76 ≈ 8.72</b></div>
      solution: "<div class=\"worked__math\"><i>d</i> = √((3 − 1)<sup>2</sup> + (4 − (−2))<sup>2</sup> + (−2 − 4)<sup>2</sup>) = √(4 + 36 + 36) = <b>√76 ≈ 8.72</b></div>",
    },

    // ── t3-1-q002 · mcq · foundation · SL · SL 3.1 · 2 marks
    "t3-1-q002": {
      // EN: <p>The midpoint of the line segment joining <span class=\"\">P(2, -5, 8)</span> and <span class=\"\">Q(x, y, z)</span> is <span class=\"\">M(-1, 1, 3)</span>. What are the coordinates of <span class=\"\">Q</span>?</p>
      stem: "<p>두 점 <span class=\"chem\">P(2, -5, 8)</span>과 <span class=\"chem\">Q(x, y, z)</span>를 잇는 선분의 중점이 <span class=\"chem\">M(-1, 1, 3)</span>이에요. 점 <span class=\"chem\">Q</span>의 좌표는 무엇인가요?</p>",
      options: [
        // EN: <span class=\"\">(-4, 7, -2)</span>
        "<span class=\"chem\">(-4, 7, -2)</span>",
        // EN: <span class=\"\">(0.5, -2, 5.5)</span>
        "<span class=\"chem\">(0.5, -2, 5.5)</span>",
        // EN: <span class=\"\">(-3, 6, -5)</span>
        "<span class=\"chem\">(-3, 6, -5)</span>",
        // EN: <span class=\"\">(4, -7, 2)</span>
        "<span class=\"chem\">(4, -7, 2)</span>",
      ],
      hints: [
        // EN: Use <span class=\"\">((2 + x)/2, (-5 + y)/2, (8 + z)/2) = (-1, 1, 3)</span>.
        "<span class=\"chem\">((2 + x)/2, (-5 + y)/2, (8 + z)/2) = (-1, 1, 3)</span>을 이용하세요.",
        // EN: Multiply the coordinates of <span class=\"\">M</span> by 2 and subtract <span class=\"\">P</span>: <span class=\"\">Q = 2M - P</span>.
        "<span class=\"chem\">M</span>의 좌표에 2를 곱한 뒤 <span class=\"chem\">P</span>를 빼세요: <span class=\"chem\">Q = 2M - P</span>.",
      ],
      // EN: <div class=\"\"><i>x</i> = 2(−1) − 2 = −4, &nbsp; <i>y</i> = 2(1) − (−5) = 7, &nbsp; <i>z</i> = 2(3) − 8 = −2 ⇒ <b>(−4, 7, −2)</b></div>
      solution: "<div class=\"worked__math\"><i>x</i> = 2(−1) − 2 = −4, &nbsp; <i>y</i> = 2(1) − (−5) = 7, &nbsp; <i>z</i> = 2(3) − 8 = −2 ⇒ <b>(−4, 7, −2)</b></div>",
      misconception: {
        // EN (option B): You averaged P and M instead of treating M as the midpoint between P and Q.
        "1": "M을 P와 Q의 중점으로 보지 않고 P와 M의 평균을 구했어요.",
        // EN (option C): You found the displacement vector PM = M − P instead of solving (P + Q)/2 = M.
        "2": "(P + Q)/2 = M을 풀지 않고 변위벡터 PM = M − P를 구했어요.",
        // EN (option D): You reversed the signs when solving 2 + x = −2, −5 + y = 2, and 8 + z = 6.
        "3": "2 + x = −2, −5 + y = 2, 8 + z = 6을 풀 때 부호를 반대로 적었어요.",
      },
    },

    // ── t3-1-q003 · mcq · foundation · SL · SL 3.1 · 2 marks
    "t3-1-q003": {
      // EN: <p>A right circular cone has base radius <span class=\"\">5 cm</span> and vertical height <span class=\"\">12 cm</span>. What is the <strong>total surface area</strong> of the solid cone (including its circular base)?</p>
      stem: "<p>직원뿔의 밑면 반지름이 <span class=\"mono\">5 cm</span>이고 높이가 <span class=\"mono\">12 cm</span>예요. 이 원뿔의 (원형 밑면을 포함한) <strong>전체 겉넓이</strong>는 얼마인가요?</p>",
      options: [
        // EN: <span class=\"\">90*pi</span> <span class=\"\">cm2</span>
        "<span class=\"chem\">90*pi</span> <span class=\"unit\">cm2</span>",
        // EN: <span class=\"\">65*pi</span> <span class=\"\">cm2</span>
        "<span class=\"chem\">65*pi</span> <span class=\"unit\">cm2</span>",
        // EN: <span class=\"\">85*pi</span> <span class=\"\">cm2</span>
        "<span class=\"chem\">85*pi</span> <span class=\"unit\">cm2</span>",
        // EN: <span class=\"\">100*pi</span> <span class=\"\">cm2</span>
        "<span class=\"chem\">100*pi</span> <span class=\"unit\">cm2</span>",
      ],
      hints: [
        // EN: First find the slant height <span class=\"\">l = sqrt(r^2 + h^2)</span> using Pythagoras.
        "먼저 피타고라스 정리로 모선의 길이 <span class=\"chem\">l = sqrt(r^2 + h^2)</span>를 구하세요.",
        // EN: Total surface area = curved surface <span class=\"\">pi*r*l</span> + base area <span class=\"\">pi*r^2</span>.
        "전체 겉넓이 = 옆넓이 <span class=\"chem\">pi*r*l</span> + 밑넓이 <span class=\"chem\">pi*r^2</span>예요.",
      ],
      // EN: <div class=\"\"><i>l</i> = √(5<sup>2</sup> + 12<sup>2</sup>) = 13 cm ⇒ <i>A</i><sub>total</sub> = <i>π</i>(5)(13) + <i>π</i>(5)<sup>2</sup> = 65<i>π</i> + 25<i>π</i> = <b>90<i>π</i> cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\"><i>l</i> = √(5<sup>2</sup> + 12<sup>2</sup>) = 13 cm ⇒ <i>A</i><sub>total</sub> = <i>π</i>(5)(13) + <i>π</i>(5)<sup>2</sup> = 65<i>π</i> + 25<i>π</i> = <b>90<i>π</i> cm<sup>2</sup></b></div>",
      misconception: {
        // EN (option B): 65π cm² is only the curved surface area πrl. A solid cone also includes the circular base of area πr² = 25π cm².
        "1": "65π cm²는 옆넓이 πrl만 계산한 값이에요. 원뿔의 전체 겉넓이에는 밑면 원의 넓이 πr² = 25π cm²도 포함해야 해요.",
        // EN (option C): You used the vertical height h = 12 instead of the slant height l = √(5² + 12²) = 13 in πrl + πr².
        "2": "πrl + πr²에 모선의 길이 l = √(5² + 12²) = 13 대신 높이 h = 12를 넣었어요.",
        // EN (option D): 100π cm³ is the volume (1/3)π(5²)(12) of the cone, not its surface area.
        "3": "100π cm³는 겉넓이가 아니라 원뿔의 부피 (1/3)π(5²)(12)예요.",
      },
    },

    // ── t3-1-q004 · mcq · foundation · SL · SL 3.4 · 1 mark
    "t3-1-q004": {
      // EN: <p>Express <span class=\"\">210°</span> in radians as an exact multiple of <span class=\"\">pi</span>.</p>
      stem: "<p><span class=\"mono\">210°</span>를 <span class=\"chem\">pi</span>의 정확한 배수인 라디안으로 나타내시오.</p>",
      options: [
        // EN: <span class=\"\">7*pi / 6</span>
        "<span class=\"chem\">7*pi / 6</span>",
        // EN: <span class=\"\">5*pi / 6</span>
        "<span class=\"chem\">5*pi / 6</span>",
        // EN: <span class=\"\">4*pi / 3</span>
        "<span class=\"chem\">4*pi / 3</span>",
        // EN: <span class=\"\">7*pi / 4</span>
        "<span class=\"chem\">7*pi / 4</span>",
      ],
      hints: [
        // EN: Multiply by <span class=\"\">pi / 180°</span> and simplify the fraction <span class=\"\">210 / 180</span>.
        "<span class=\"chem\">pi / 180°</span>를 곱하고 분수 <span class=\"chem\">210 / 180</span>을 약분하세요.",
        // EN: Notice that <span class=\"\">210° = 7 × 30°</span> and <span class=\"\">30° = π/6</span>.
        "<span class=\"mono\">210° = 7 × 30°</span>이고 <span class=\"mono\">30° = π/6</span>임을 이용하세요.",
      ],
      // EN: <div class=\"\">210° × <span class=\"\"><span><i>π</i></span><span>180°</span></span> = <span class=\"\"><span>7<i>π</i></span><span>6</span></span></div>
      solution: "<div class=\"worked__math\">210° × <span class=\"frac\"><span><i>π</i></span><span>180°</span></span> = <span class=\"frac\"><span>7<i>π</i></span><span>6</span></span></div>",
      misconception: {
        // EN (option B): 5π/6 is 150° (180° − 30°), whereas 210° is 180° + 30°.
        "1": "5π/6는 150° (180° − 30°)이고, 210°는 180° + 30°예요.",
        // EN (option C): 4π/3 is 240° (180° + 60°).
        "2": "4π/3은 240° (180° + 60°)예요.",
        // EN (option D): 7π/4 is 315°.
        "3": "7π/4는 315°예요.",
      },
    },

    // ── t3-1-q005 · numeric · foundation · SL · SL 3.4 · 2 marks
    "t3-1-q005": {
      // EN: <p>A circular sector has radius <span class=\"\">10 cm</span> and central angle <span class=\"\">theta = 1.4</span> radians. Calculate the area of the sector in <span class=\"\">cm2</span>.</p>
      stem: "<p>반지름이 <span class=\"mono\">10 cm</span>이고 중심각이 <span class=\"chem\">theta = 1.4</span>라디안인 부채꼴의 넓이를 <span class=\"unit\">cm2</span> 단위로 계산하시오 (Calculate).</p>",
      hints: [
        // EN: Use the sector area formula <span class=\"\">A = (1/2)r^2*theta</span>.
        "부채꼴의 넓이 공식 <span class=\"chem\">A = (1/2)r^2*theta</span>를 쓰세요.",
        // EN: Substitute <span class=\"\">r = 10</span> and <span class=\"\">theta = 1.4</span>.
        "<span class=\"chem\">r = 10</span>과 <span class=\"chem\">theta = 1.4</span>를 대입하세요.",
      ],
      // EN: <div class=\"\"><i>A</i> = <span class=\"\"><span>1</span><span>2</span></span>(10)<sup>2</sup>(1.4) = 50 × 1.4 = <b>70 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\"><i>A</i> = <span class=\"frac\"><span>1</span><span>2</span></span>(10)<sup>2</sup>(1.4) = 50 × 1.4 = <b>70 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q006 · numeric · foundation · SL · SL 3.2 · 3 marks
    "t3-1-q006": {
      // EN: <p>In triangle <span class=\"\">ABC</span>, <span class=\"\">a = 7 cm</span>, <span class=\"\">b = 8 cm</span>, and <span class=\"\">angle C = 60°</span>. Find the exact length of side <span class=\"\">c</span>.</p>
      stem: "<p>삼각형 <span class=\"chem\">ABC</span>에서 <span class=\"chem\">a = 7 cm</span>, <span class=\"chem\">b = 8 cm</span>, <span class=\"chem\">angle C = 60°</span>예요. 변 <span class=\"chem\">c</span>의 정확한 길이를 구하시오 (Find).</p>",
      hints: [
        // EN: You know two sides and the included angle (<span class=\"\">SAS</span>), so use the Cosine Rule: <span class=\"\">c^2 = a^2 + b^2 - 2ab cos C</span>.
        "두 변과 그 끼인각(<span class=\"chem\">SAS</span>)을 알므로 코사인법칙 <span class=\"chem\">c^2 = a^2 + b^2 - 2ab cos C</span>를 쓰세요.",
        // EN: Recall that <span class=\"\">cos 60° = 1/2</span>.
        "<span class=\"chem\">cos 60° = 1/2</span>임을 떠올리세요.",
      ],
      // EN: <div class=\"\"><i>c</i><sup>2</sup> = 7<sup>2</sup> + 8<sup>2</sup> − 2(7)(8) cos 60° = 49 + 64 − 56 = 57 ⇒ <i>c</i> = <b>√57 ≈ 7.55 cm</b></div>
      solution: "<div class=\"worked__math\"><i>c</i><sup>2</sup> = 7<sup>2</sup> + 8<sup>2</sup> − 2(7)(8) cos 60° = 49 + 64 − 56 = 57 ⇒ <i>c</i> = <b>√57 ≈ 7.55 cm</b></div>",
    },

    // ── t3-1-q007 · mcq · exam · SL · SL 3.2 · 3 marks
    "t3-1-q007": {
      // EN: <p><strong>[Paper 1 — No GDC]</strong> In triangle <span class=\"\">ABC</span>, the side lengths are <span class=\"\">a = 5 cm</span>, <span class=\"\">b = 6 cm</span>, and <span class=\"\">c = 8 cm</span>. What is the exact value of <span class=\"\">cos C</span>, and what does this tell you about <span class=\"\">angle C</span>?</p>
      stem: "<p><strong>[Paper 1 — No GDC]</strong> 삼각형 <span class=\"chem\">ABC</span>의 세 변의 길이가 <span class=\"chem\">a = 5 cm</span>, <span class=\"chem\">b = 6 cm</span>, <span class=\"chem\">c = 8 cm</span>이에요. <span class=\"chem\">cos C</span>의 정확한 값은 얼마이며, 이를 통해 <span class=\"chem\">angle C</span>에 대해 무엇을 알 수 있나요?</p>",
      options: [
        // EN: <span class=\"\">cos C = -1/20</span>, so <span class=\"\">angle C</span> is obtuse
        "<span class=\"chem\">cos C = -1/20</span>이므로 <span class=\"chem\">angle C</span>는 둔각이다",
        // EN: <span class=\"\">cos C = 1/20</span>, so <span class=\"\">angle C</span> is acute
        "<span class=\"chem\">cos C = 1/20</span>이므로 <span class=\"chem\">angle C</span>는 예각이다",
        // EN: <span class=\"\">cos C = -3/40</span>, so <span class=\"\">angle C</span> is obtuse
        "<span class=\"chem\">cos C = -3/40</span>이므로 <span class=\"chem\">angle C</span>는 둔각이다",
        // EN: <span class=\"\">cos C = 0</span>, so <span class=\"\">angle C = 90°</span>
        "<span class=\"chem\">cos C = 0</span>이므로 <span class=\"chem\">angle C = 90°</span>이다",
      ],
      hints: [
        // EN: Use the rearranged Cosine Rule: <span class=\"\">cos C = (a^2 + b^2 - c^2) / (2ab)</span>.
        "변형된 코사인법칙을 쓰세요: <span class=\"chem\">cos C = (a^2 + b^2 - c^2) / (2ab)</span>.",
        // EN: A negative cosine on <span class=\"\">(0°, 180°)</span> means the angle lies in Quadrant II (obtuse).
        "<span class=\"chem\">(0°, 180°)</span>에서 코사인 값이 음수이면 각이 제2사분면(둔각)에 있다는 뜻이에요.",
      ],
      // EN: <div class=\"\">cos <i>C</i> = <span class=\"\"><span>5<sup>2</sup> + 6<sup>2</sup> − 8<sup>2</sup></span><span>2(5)(6)</span></span> = <span class=\"\"><span>25 + 36 − 64</span><span>60</span></span> = −<span class=\"\"><span>3</span><span>60</span></span> = <b>−<span class=\"\"><span>1</span><span>20</span></span></b> (obtuse since cos <i>C</i> &lt; 0)</div>
      solution: "<div class=\"worked__math\">cos <i>C</i> = <span class=\"frac\"><span>5<sup>2</sup> + 6<sup>2</sup> − 8<sup>2</sup></span><span>2(5)(6)</span></span> = <span class=\"frac\"><span>25 + 36 − 64</span><span>60</span></span> = −<span class=\"frac\"><span>3</span><span>60</span></span> = <b>−<span class=\"frac\"><span>1</span><span>20</span></span></b> (cos <i>C</i> &lt; 0이므로 둔각)</div>",
      misconception: {
        // EN (option B): You computed (c² − a² − b²)/(2ab) instead of (a² + b² − c²)/(2ab), flipping the sign.
        "1": "(a² + b² − c²)/(2ab) 대신 (c² − a² − b²)/(2ab)를 계산해 부호가 반대가 됐어요.",
        // EN (option C): Check your arithmetic: 25 + 36 − 64 = −3, and 2(5)(6) = 60, so −3/60 simplifies to −1/20.
        "2": "계산을 다시 확인하세요: 25 + 36 − 64 = −3이고 2(5)(6) = 60이므로 −3/60은 −1/20으로 약분돼요.",
        // EN (option D): 5² + 6² = 61 ≠ 64, so this is not a right-angled triangle.
        "3": "5² + 6² = 61 ≠ 64이므로 직각삼각형이 아니에요.",
      },
    },

    // ── t3-1-q008 · numeric · exam · SL · SL 3.2 · 4 marks
    "t3-1-q008": {
      // EN: <p><strong>[Paper 2 — GDC]</strong> In triangle <span class=\"\">ABC</span>, <span class=\"\">AB = 12 cm</span>, <span class=\"\">BC = 9 cm</span>, and <span class=\"\">angle BAC = 42°</span>. Given that <span class=\"\">angle ACB</span> is <strong>obtuse</strong>, find the size of <span class=\"\">angle ACB</span> in degrees to 3 significant figures.</p>
      stem: "<p><strong>[Paper 2 — GDC]</strong> 삼각형 <span class=\"chem\">ABC</span>에서 <span class=\"chem\">AB = 12 cm</span>, <span class=\"chem\">BC = 9 cm</span>, <span class=\"chem\">angle BAC = 42°</span>예요. <span class=\"chem\">angle ACB</span>가 <strong>둔각</strong>일 때, <span class=\"chem\">angle ACB</span>의 크기를 도(°) 단위로 구하고 (Find) 유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: Use the Sine Rule <span class=\"\">(sin C)/12 = (sin 42°)/9</span> to find the acute reference angle <span class=\"\">C_1</span>.
        "사인법칙 <span class=\"chem\">(sin C)/12 = (sin 42°)/9</span>를 써서 예각 기준각 <span class=\"chem\">C_1</span>을 구하세요.",
        // EN: Since <span class=\"\">angle ACB</span> is obtuse, subtract <span class=\"\">C_1</span> from <span class=\"\">180°</span>.
        "<span class=\"chem\">angle ACB</span>가 둔각이므로 <span class=\"mono\">180°</span>에서 <span class=\"chem\">C_1</span>을 빼세요.",
      ],
      // EN: <div class=\"\">sin <i>C</i> = <span class=\"\"><span>12 sin 42°</span><span>9</span></span> ≈ 0.892174 ⇒ <i>C</i><sub>1</sub> = 63.15°</div><div class=\"\"><i>C</i><sub>obtuse</sub> = 180° − 63.15° = <b>117°</b> (116.8°)</div>
      solution: "<div class=\"worked__math\">sin <i>C</i> = <span class=\"frac\"><span>12 sin 42°</span><span>9</span></span> ≈ 0.892174 ⇒ <i>C</i><sub>1</sub> = 63.15°</div><div class=\"worked__math\"><i>C</i><sub>obtuse</sub> = 180° − 63.15° = <b>117°</b> (116.8°)</div>",
    },

    // ── t3-1-q009 · mcq · exam · SL · SL 3.3 · 3 marks
    "t3-1-q009": {
      // EN: <p>Port <span class=\"\">B</span> is on a three-figure bearing of <span class=\"\">115°</span> from Port <span class=\"\">A</span>. What is the three-figure back-bearing of Port <span class=\"\">A</span> <strong>from</strong> Port <span class=\"\">B</span>?</p>
      stem: "<p>항구 <span class=\"chem\">B</span>는 항구 <span class=\"chem\">A</span>로부터 세 자리 방위각 <span class=\"mono\">115°</span> 방향에 있어요. 항구 <span class=\"chem\">B</span><strong>로부터</strong> 항구 <span class=\"chem\">A</span>의 세 자리 역방위각은 무엇인가요?</p>",
      options: [
        // EN: <span class=\"\">295°</span>
        "<span class=\"mono\">295°</span>",
        // EN: <span class=\"\">065°</span>
        "<span class=\"mono\">065°</span>",
        // EN: <span class=\"\">245°</span>
        "<span class=\"mono\">245°</span>",
        // EN: <span class=\"\">155°</span>
        "<span class=\"mono\">155°</span>",
      ],
      hints: [
        // EN: The bearing from <span class=\"\">B</span> back to <span class=\"\">A</span> points in the exact opposite direction to the vector from <span class=\"\">A</span> to <span class=\"\">B</span>.
        "<span class=\"chem\">B</span>에서 <span class=\"chem\">A</span>로 돌아가는 방위각은 <span class=\"chem\">A</span>에서 <span class=\"chem\">B</span>로 가는 벡터와 정반대 방향이에요.",
        // EN: Add <span class=\"\">180°</span> to <span class=\"\">115°</span>.
        "<span class=\"mono\">115°</span>에 <span class=\"mono\">180°</span>를 더하세요.",
      ],
      // EN: <div class=\"\">Back-bearing = 115° + 180° = <b>295°</b></div>
      solution: "<div class=\"worked__math\">역방위각 = 115° + 180° = <b>295°</b></div>",
      misconception: {
        // EN (option B): 065° is 180° − 115° (the co-interior angle between South at A and North at B), not the clockwise angle from North at B.
        "1": "065°는 180° − 115° (A의 남쪽과 B의 북쪽 사이의 동측내각)이지 B의 북쪽에서 시계 방향으로 잰 각이 아니에요.",
        // EN (option C): 245° is 360° − 115° (counter-clockwise from North at A).
        "2": "245°는 360° − 115° (A의 북쪽에서 반시계 방향)예요.",
        // EN (option D): You subtracted from 270° instead of adding 180°.
        "3": "180°를 더하는 대신 270°에서 뺐어요.",
      },
    },

    // ── t3-1-q010 · numeric · exam · SL · SL 3.3 · 4 marks
    "t3-1-q010": {
      // EN: <p>A ship sails from harbour <span class=\"\">O</span> for <span class=\"\">15 km</span> on a bearing of <span class=\"\">040°</span> to point <span class=\"\">P</span>, and then sails <span class=\"\">22 km</span> on a bearing of <span class=\"\">160°</span> to point <span class=\"\">Q</span>. Calculate the direct distance <span class=\"\">OQ</span> in <span class=\"\">km</span>, to 3 significant figures.</p>
      stem: "<p>배가 항구 <span class=\"chem\">O</span>에서 방위각 <span class=\"mono\">040°</span> 방향으로 <span class=\"mono\">15 km</span> 항해해 지점 <span class=\"chem\">P</span>에 도착한 뒤, 방위각 <span class=\"mono\">160°</span> 방향으로 <span class=\"mono\">22 km</span> 항해해 지점 <span class=\"chem\">Q</span>에 도착했어요. 직선 거리 <span class=\"chem\">OQ</span>를 <span class=\"unit\">km</span> 단위로 계산하고 (Calculate) 유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: Draw North arrows at <span class=\"\">O</span> and <span class=\"\">P</span>. The angle between <span class=\"\">PO</span> and South at <span class=\"\">P</span> is <span class=\"\">40°</span>, and the angle between North at <span class=\"\">P</span> and <span class=\"\">PQ</span> is <span class=\"\">160°</span>.
        "<span class=\"chem\">O</span>와 <span class=\"chem\">P</span>에 북쪽 화살표를 그리세요. <span class=\"chem\">PO</span>와 <span class=\"chem\">P</span>의 남쪽 사이의 각이 <span class=\"mono\">40°</span>이고, <span class=\"chem\">P</span>의 북쪽과 <span class=\"chem\">PQ</span> 사이의 각이 <span class=\"mono\">160°</span>예요.",
        // EN: This makes the interior angle <span class=\"\">angle OPQ = (180° - 160°) + 40° = 60°</span>. Now apply the Cosine Rule to triangle <span class=\"\">OPQ</span>!
        "따라서 내각 <span class=\"chem\">angle OPQ = (180° - 160°) + 40° = 60°</span>예요. 이제 삼각형 <span class=\"chem\">OPQ</span>에 코사인법칙을 적용하세요!",
      ],
      // EN: <div class=\"\">∠<i>OPQ</i> = 20° + 40° = 60°</div><div class=\"\"><i>OQ</i> = √(15<sup>2</sup> + 22<sup>2</sup> − 2(15)(22) cos 60°) = √(225 + 484 − 330) = √379 ≈ <b>19.5 km</b></div>
      solution: "<div class=\"worked__math\">∠<i>OPQ</i> = 20° + 40° = 60°</div><div class=\"worked__math\"><i>OQ</i> = √(15<sup>2</sup> + 22<sup>2</sup> − 2(15)(22) cos 60°) = √(225 + 484 − 330) = √379 ≈ <b>19.5 km</b></div>",
    },

    // ── t3-1-q011 · numeric · exam · SL · SL 3.4 · 4 marks
    "t3-1-q011": {
      // EN: <p>A circle has radius <span class=\"\">r = 12 cm</span>. A chord <span class=\"\">AB</span> subtends a central angle of <span class=\"\">theta = 2.1</span> radians at the centre <span class=\"\">O</span>. Calculate the area of the minor circular segment bounded by the chord <span class=\"\">AB</span> and the arc <span class=\"\">AB</span>, to 3 significant figures.</p>
      stem: "<p>반지름이 <span class=\"chem\">r = 12 cm</span>인 원에서 현 <span class=\"chem\">AB</span>가 중심 <span class=\"chem\">O</span>에 만드는 중심각이 <span class=\"chem\">theta = 2.1</span>라디안이에요. 현 <span class=\"chem\">AB</span>와 호 <span class=\"chem\">AB</span>로 둘러싸인 작은 활꼴의 넓이를 계산하고 (Calculate) 유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: Use <span class=\"\">A_segment = (1/2)r^2(theta - sin(theta))</span> with <span class=\"\">theta</span> in radians.
        "<span class=\"chem\">theta</span>가 라디안일 때 <span class=\"chem\">A_segment = (1/2)r^2(theta - sin(theta))</span>를 쓰세요.",
        // EN: Ensure your GDC is in <strong>radians</strong> when evaluating <span class=\"\">sin(2.1)</span>.
        "<span class=\"chem\">sin(2.1)</span>을 계산할 때 GDC가 <strong>라디안(RAD)</strong> 모드인지 확인하세요.",
      ],
      // EN: <div class=\"\"><i>A</i><sub>segment</sub> = <span class=\"\"><span>1</span><span>2</span></span>(12)<sup>2</sup>(2.1 − sin 2.1) = 72(2.1 − 0.863209) ≈ <b>89.0 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\"><i>A</i><sub>segment</sub> = <span class=\"frac\"><span>1</span><span>2</span></span>(12)<sup>2</sup>(2.1 − sin 2.1) = 72(2.1 − 0.863209) ≈ <b>89.0 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q012 · multi · exam · SL · SL 3.2 · 2 marks
    "t3-1-q012": {
      // EN: <p>In triangle <span class=\"\">ABC</span>, you are given <span class=\"\">angle A = 30°</span> and side <span class=\"\">b = 16 cm</span>. For which of the following values of the opposite side <span class=\"\">a</span> are there <strong>two distinct possible triangles</strong> <span class=\"\">ABC</span>? Select all that apply.</p>
      stem: "<p>삼각형 <span class=\"chem\">ABC</span>에서 <span class=\"chem\">angle A = 30°</span>이고 변 <span class=\"chem\">b = 16 cm</span>가 주어져 있어요. 다음 중 대변 <span class=\"chem\">a</span>의 값으로 <strong>서로 다른 두 개의 삼각형</strong> <span class=\"chem\">ABC</span>가 만들어지는 것을 모두 고르시오.</p>",
      options: [
        // EN: <span class=\"\">a = 6 cm</span>
        "<span class=\"chem\">a = 6 cm</span>",
        // EN: <span class=\"\">a = 8 cm</span>
        "<span class=\"chem\">a = 8 cm</span>",
        // EN: <span class=\"\">a = 10 cm</span>
        "<span class=\"chem\">a = 10 cm</span>",
        // EN: <span class=\"\">a = 14 cm</span>
        "<span class=\"chem\">a = 14 cm</span>",
        // EN: <span class=\"\">a = 18 cm</span>
        "<span class=\"chem\">a = 18 cm</span>",
      ],
      hints: [
        // EN: Calculate the perpendicular height <span class=\"\">h = b sin A = 16 sin 30° = 8 cm</span>.
        "수직 높이 <span class=\"chem\">h = b sin A = 16 sin 30° = 8 cm</span>를 계산하세요.",
        // EN: Two distinct triangles exist if and only if <span class=\"\">b sin A &lt; a &lt; b</span>, i.e. <span class=\"\">8 &lt; a &lt; 16</span>.
        "서로 다른 두 삼각형이 존재할 필요충분조건은 <span class=\"chem\">b sin A &lt; a &lt; b</span>, 즉 <span class=\"chem\">8 &lt; a &lt; 16</span>이에요.",
      ],
      // EN: <p>Here <span class=\"\">b sin A = 16 sin 30° = 8 cm</span>. The ambiguous two-triangle condition is <span class=\"\">8 &lt; a &lt; 16</span>, which is satisfied by <span class=\"\">a = 10 cm</span> and <span class=\"\">a = 14 cm</span>.</p>
      solution: "<p>여기서 <span class=\"chem\">b sin A = 16 sin 30° = 8 cm</span>이에요. 모호한 두 삼각형 조건은 <span class=\"chem\">8 &lt; a &lt; 16</span>이므로 <span class=\"chem\">a = 10 cm</span>와 <span class=\"chem\">a = 14 cm</span>가 답이에요.</p>",
      misconception: {
        // EN (option A): Since b sin A = 16 sin 30° = 8 cm, a = 6 cm is shorter than the perpendicular height, giving 0 triangles.
        "0": "b sin A = 16 sin 30° = 8 cm이므로 a = 6 cm는 수직 높이보다 짧아 삼각형이 0개 만들어져요.",
        // EN (option B): When a = b sin A = 8 cm, side a just touches the base at 90°, forming exactly 1 right-angled triangle.
        "1": "a = b sin A = 8 cm일 때는 변 a가 밑변에 90°로 딱 닿아 직각삼각형 1개만 만들어져요.",
        // EN (option E): When a ≥ b (18 ≥ 16), the obtuse supplement 180° − B would make A + B > 180°, so only 1 triangle is possible.
        "4": "a ≥ b (18 ≥ 16)일 때는 둔각 보각 180° − B를 쓰면 A + B > 180°가 되어 삼각형 1개만 가능해요.",
      },
    },

    // ── t3-1-q013 · order · exam · SL · SL 3.1 · 3 marks
    "t3-1-q013": {
      // EN: <p>Arrange the steps in logical order to find the acute angle between the space diagonal <span class=\"\">AG</span> of a cuboid <span class=\"\">ABCDEFGH</span> (with base <span class=\"\">6 cm × 8 cm</span> and height <span class=\"\">5 cm</span>) and its horizontal base <span class=\"\">ABCD</span>.</p>
      stem: "<p>직육면체 <span class=\"chem\">ABCDEFGH</span> (밑면 <span class=\"mono\">6 cm × 8 cm</span>, 높이 <span class=\"mono\">5 cm</span>)의 공간 대각선 <span class=\"chem\">AG</span>와 수평 밑면 <span class=\"chem\">ABCD</span>가 이루는 예각을 구하는 단계를 논리적 순서로 배열하시오.</p>",
      options: [
        // EN: Identify the vertical edge CG = 5 cm perpendicular to the base ABCD, so that AC is the orthogonal projection (shadow) of AG on the base.
        "밑면 ABCD에 수직인 모서리 CG = 5 cm를 찾아, AC가 AG의 밑면 위 정사영(그림자)임을 확인한다.",
        // EN: Use 2D Pythagoras in the horizontal base rectangle ABCD to find the base diagonal AC = √(6² + 8²) = 10 cm.
        "수평 밑면 직사각형 ABCD에서 2D 피타고라스 정리를 써서 밑면 대각선 AC = √(6² + 8²) = 10 cm를 구한다.",
        // EN: Form the right-angled vertical triangle ACG with right angle at C, adjacent side AC = 10 cm, and opposite side CG = 5 cm.
        "∠C가 직각이고 밑변 AC = 10 cm, 높이 CG = 5 cm인 수직 직각삼각형 ACG를 세운다.",
        // EN: Compute ∠GAC = arctan(5 / 10) = arctan(0.5) ≈ 26.6°.
        "∠GAC = arctan(5 / 10) = arctan(0.5) ≈ 26.6°를 계산한다.",
      ],
      hints: [
        // EN: First identify the shadow of <span class=\"\">AG</span> on the horizontal base plane.
        "먼저 수평 밑면 위에서 <span class=\"chem\">AG</span>의 그림자(정사영)를 찾으세요.",
        // EN: Next find the length of that shadow before using right-angled trigonometry.
        "그다음 직각삼각형의 삼각비를 쓰기 전에 그 그림자의 길이를 구하세요.",
      ],
      // EN: <p>Drop a perpendicular from <span class=\"\">G</span> to <span class=\"\">C</span> on the base, find the base diagonal <span class=\"\">AC = 10 cm</span>, set up right-angled triangle <span class=\"\">ACG</span>, and evaluate <span class=\"\">arctan(5/10) ≈ 26.6°</span>.</p>
      solution: "<p><span class=\"chem\">G</span>에서 밑면의 <span class=\"chem\">C</span>로 수선을 내리고, 밑면 대각선 <span class=\"chem\">AC = 10 cm</span>를 구한 뒤 직각삼각형 <span class=\"chem\">ACG</span>를 세워 <span class=\"chem\">arctan(5/10) ≈ 26.6°</span>를 계산해요.</p>",
    },

    // ── t3-1-q014 · short · exam · SL · SL 3.4 · 5 marks
    "t3-1-q014": {
      // EN: <p><strong>[Paper 1 — No GDC]</strong> A sector of a circle of radius <span class=\"\">r</span> cm has central angle <span class=\"\">theta</span> radians. The perimeter of the sector is <span class=\"\">20 cm</span> and the area of the sector is <span class=\"\">24 cm²</span>. Find the two possible pairs of values of <span class=\"\">(r, theta)</span>.</p>
      stem: "<p><strong>[Paper 1 — No GDC]</strong> 반지름이 <span class=\"chem\">r</span> cm인 원의 부채꼴의 중심각이 <span class=\"chem\">theta</span>라디안이다. 이 부채꼴의 둘레가 <span class=\"mono\">20 cm</span>이고 넓이가 <span class=\"mono\">24 cm²</span>일 때, 가능한 <span class=\"chem\">(r, theta)</span>의 두 쌍을 구하시오 (Find).</p>",
      hints: [
        // EN: Write the two equations: <span class=\"\">2r + r*theta = 20</span> and <span class=\"\">(1/2)r^2*theta = 24</span>.
        "두 방정식을 세우세요: <span class=\"chem\">2r + r*theta = 20</span>과 <span class=\"chem\">(1/2)r^2*theta = 24</span>.",
        // EN: Isolate <span class=\"\">r*theta = 20 - 2r</span> from the first equation and substitute it into <span class=\"\">(1/2)r(r*theta) = 24</span>.
        "첫 번째 식에서 <span class=\"chem\">r*theta = 20 - 2r</span>를 정리해 <span class=\"chem\">(1/2)r(r*theta) = 24</span>에 대입하세요.",
      ],
      // EN: <p>Either <i>r</i> = 4 cm and <i>θ</i> = 3 rad, or <i>r</i> = 6 cm and <i>θ</i> = 4/3 rad.</p>
      answer: "<p><i>r</i> = 4 cm, <i>θ</i> = 3 rad 또는 <i>r</i> = 6 cm, <i>θ</i> = 4/3 rad.</p>",
      markscheme: [
        // EN: M1: Set up the perimeter equation 2r + rθ = 20 and area equation (1/2)r²θ = 24.
        "M1: 둘레 방정식 2r + rθ = 20과 넓이 방정식 (1/2)r²θ = 24를 세움.",
        // EN: M1: Express rθ = 20 − 2r and substitute into the area equation: (1/2)r(20 − 2r) = 24.
        "M1: rθ = 20 − 2r로 정리하여 넓이 식에 대입함: (1/2)r(20 − 2r) = 24.",
        // EN: A1: Simplify to the quadratic r² − 10r + 24 = 0 ⇒ (r − 4)(r − 6) = 0.
        "A1: 이차방정식 r² − 10r + 24 = 0 ⇒ (r − 4)(r − 6) = 0으로 정리함.",
        // EN: A1: Obtain r = 4 cm or r = 6 cm.
        "A1: r = 4 cm 또는 r = 6 cm를 구함.",
        // EN: A1: Back-substitute into θ = (20 − 2r)/r to get (r = 4, θ = 3) and (r = 6, θ = 4/3).
        "A1: θ = (20 − 2r)/r에 대입해 (r = 4, θ = 3)과 (r = 6, θ = 4/3)을 얻음.",
      ],
    },

    // ── t3-1-q015 · numeric · challenge · SL · SL 3.2 · 5 marks
    "t3-1-q015": {
      // EN: <p><strong>[Paper 1 — No GDC]</strong> In triangle <span class=\"\">ABC</span>, <span class=\"\">AB = 6 cm</span>, <span class=\"\">BC = 4 cm</span>, and <span class=\"\">cos(angle BAC) = 3/4</span>. There are two possible values for the length of <span class=\"\">AC</span>. Find the <strong>sum</strong> of these two possible lengths of <span class=\"\">AC</span> (in <span class=\"\">cm</span>).</p>
      stem: "<p><strong>[Paper 1 — No GDC]</strong> 삼각형 <span class=\"chem\">ABC</span>에서 <span class=\"chem\">AB = 6 cm</span>, <span class=\"chem\">BC = 4 cm</span>, <span class=\"chem\">cos(angle BAC) = 3/4</span>이에요. <span class=\"chem\">AC</span>의 길이로 가능한 값이 두 개 있을 때, <span class=\"chem\">AC</span>의 가능한 두 길이의 <strong>합</strong>을 (<span class=\"unit\">cm</span> 단위로) 구하시오 (Find).</p>",
      hints: [
        // EN: Let <span class=\"\">AC = b</span> and write the Cosine Rule using <span class=\"\">angle A</span>: <span class=\"\">BC^2 = AB^2 + b^2 - 2(AB)(b) cos A</span>.
        "<span class=\"chem\">AC = b</span>로 두고 <span class=\"chem\">angle A</span>에 대한 코사인법칙을 쓰세요: <span class=\"chem\">BC^2 = AB^2 + b^2 - 2(AB)(b) cos A</span>.",
        // EN: Substitute the given values to form a quadratic in <span class=\"\">b</span>: <span class=\"\">16 = 36 + b^2 - 2(6)(b)(3/4)</span>, i.e. <span class=\"\">b^2 - 9b + 20 = 0</span>.
        "주어진 값을 대입해 <span class=\"chem\">b</span>에 대한 이차방정식 <span class=\"chem\">16 = 36 + b^2 - 2(6)(b)(3/4)</span>, 즉 <span class=\"chem\">b^2 - 9b + 20 = 0</span>을 만드세요.",
      ],
      // EN: <div class=\"\">4<sup>2</sup> = 6<sup>2</sup> + <i>b</i><sup>2</sup> − 2(6)<i>b</i><span class=\"\"><span>3</span><span>4</span></span> ⇒ <i>b</i><sup>2</sup> − 9<i>b</i> + 20 = 0 ⇒ (<i>b</i> − 4)(<i>b</i> − 5) = 0</div><div class=\"\">The two possible lengths are <i>b</i> = 4 cm and <i>b</i> = 5 cm, so their sum is 4 + 5 = <b>9 cm</b>.</div>
      solution: "<div class=\"worked__math\">4<sup>2</sup> = 6<sup>2</sup> + <i>b</i><sup>2</sup> − 2(6)<i>b</i><span class=\"frac\"><span>3</span><span>4</span></span> ⇒ <i>b</i><sup>2</sup> − 9<i>b</i> + 20 = 0 ⇒ (<i>b</i> − 4)(<i>b</i> − 5) = 0</div><div class=\"worked__math\">가능한 두 길이는 <i>b</i> = 4 cm와 <i>b</i> = 5 cm이므로 합은 4 + 5 = <b>9 cm</b>예요.</div>",
    },

    // ── t3-1-q016 · numeric · challenge · SL · SL 3.4 · 6 marks
    "t3-1-q016": {
      // EN: <p>Two identical circles, each of radius <span class=\"\">6 cm</span>, are drawn such that the centre of each circle lies on the circumference of the other circle. Find the area of the overlapping region common to both circles, in <span class=\"\">cm2</span> to 3 significant figures.</p>
      stem: "<p>반지름이 각각 <span class=\"mono\">6 cm</span>인 합동인 두 원이 서로의 중심이 상대방 원의 원주 위에 놓이도록 그려져 있어요. 두 원이 겹치는 공통 영역의 넓이를 <span class=\"unit\">cm2</span> 단위로 구하고 (Find) 유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: Let the centres be <span class=\"\">O_1, O_2</span> and the intersection points be <span class=\"\">A, B</span>. Since <span class=\"\">O_1 O_2 = O_1 A = O_2 A = 6 cm</span>, triangles <span class=\"\">O_1 O_2 A</span> and <span class=\"\">O_1 O_2 B</span> are equilateral (<span class=\"\">60° = π/3</span>)!
        "두 중심을 <span class=\"chem\">O_1, O_2</span>, 두 교점을 <span class=\"chem\">A, B</span>라 하세요. <span class=\"chem\">O_1 O_2 = O_1 A = O_2 A = 6 cm</span>이므로 삼각형 <span class=\"chem\">O_1 O_2 A</span>와 <span class=\"chem\">O_1 O_2 B</span>는 정삼각형(<span class=\"mono\">60° = π/3</span>)이에요!",
        // EN: Thus the central angle at each centre is <span class=\"\">theta = 2*pi/3</span>, and the overlap consists of <strong>two identical circular segments</strong> of angle <span class=\"\">2*pi/3</span>.
        "따라서 각 중심에서의 중심각은 <span class=\"chem\">theta = 2*pi/3</span>이고, 겹치는 영역은 중심각이 <span class=\"chem\">2*pi/3</span>인 <strong>합동인 두 활꼴</strong>로 이루어져 있어요.",
      ],
      // EN: <div class=\"\">∠<i>AO</i><sub>1</sub><i>B</i> = <span class=\"\"><span>2<i>π</i></span><span>3</span></span> rad ⇒ <i>A</i><sub>overlap</sub> = 2 × <span class=\"\"><span>1</span><span>2</span></span>(6)<sup>2</sup>(<span class=\"\"><span>2<i>π</i></span><span>3</span></span> − sin <span class=\"\"><span>2<i>π</i></span><span>3</span></span>) = 36(<span class=\"\"><span>2<i>π</i></span><span>3</span></span> − <span class=\"\"><span>√3</span><span>2</span></span>) = 24<i>π</i> − 18√3 ≈ <b>44.2 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\">∠<i>AO</i><sub>1</sub><i>B</i> = <span class=\"frac\"><span>2<i>π</i></span><span>3</span></span> rad ⇒ <i>A</i><sub>overlap</sub> = 2 × <span class=\"frac\"><span>1</span><span>2</span></span>(6)<sup>2</sup>(<span class=\"frac\"><span>2<i>π</i></span><span>3</span></span> − sin <span class=\"frac\"><span>2<i>π</i></span><span>3</span></span>) = 36(<span class=\"frac\"><span>2<i>π</i></span><span>3</span></span> − <span class=\"frac\"><span>√3</span><span>2</span></span>) = 24<i>π</i> − 18√3 ≈ <b>44.2 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q017 · short · challenge · SL · SL 3.1 · 6 marks
    "t3-1-q017": {
      // EN: <p>A solid right circular cone of base radius <span class=\"\">r</span> and slant height <span class=\"\">l</span> is made by rolling up a semicircular sheet of thin metal of radius <span class=\"\">10 cm</span> so that the two straight radii meet without overlap.<br>(a) Find the base radius <span class=\"\">r</span> and vertical height <span class=\"\">h</span> of the cone. <strong>[4 marks]</strong><br>(b) Find the acute angle between a slant generator of the cone and its circular base. <strong>[2 marks]</strong></p>
      stem: "<p>반지름이 <span class=\"mono\">10 cm</span>인 반원 모양의 얇은 금속판을 두 직선 반지름이 겹치지 않게 맞닿도록 말아서 밑면 반지름이 <span class=\"chem\">r</span>이고 모선의 길이가 <span class=\"chem\">l</span>인 직원뿔을 만들었다.<br>(a) 원뿔의 밑면 반지름 <span class=\"chem\">r</span>과 수직 높이 <span class=\"chem\">h</span>를 구하시오 (Find). <strong>[4 marks]</strong><br>(b) 원뿔의 모선과 원형 밑면이 이루는 예각을 구하시오 (Find). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: When you roll a sector into a cone, the radius of the flat sector becomes the <strong>slant height</strong> <span class=\"\">l = 10 cm</span> of the cone, and the arc length of the sector becomes the base circumference <span class=\"\">2*pi*r</span>.
        "부채꼴을 말아 원뿔을 만들면 평면 부채꼴의 반지름이 원뿔의 <strong>모선 길이</strong> <span class=\"chem\">l = 10 cm</span>가 되고, 부채꼴의 호의 길이가 밑면 원주 <span class=\"chem\">2*pi*r</span>가 돼요.",
        // EN: Equate <span class=\"\">2*pi*r = 10*pi</span> to find <span class=\"\">r</span>.
        "<span class=\"chem\">2*pi*r = 10*pi</span>로 놓고 <span class=\"chem\">r</span>을 구하세요.",
      ],
      // EN: <p>(a) <i>r</i> = 5 cm, <i>h</i> = 5√3 cm (≈ 8.66 cm); (b) 60° (or π/3 rad).</p>
      answer: "<p>(a) <i>r</i> = 5 cm, <i>h</i> = 5√3 cm (≈ 8.66 cm); (b) 60° (또는 π/3 rad).</p>",
      markscheme: [
        // EN: M1: The arc length of the semicircle (π × 10) becomes the circumference 2πr of the cone base (or equate curved area πrl = (1/2)π(10)² with l = 10).
        "M1: 반원의 호의 길이 (π × 10)가 원뿔 밑면의 둘레 2πr이 됨을 세움 (또는 l = 10으로 두고 옆넓이 πrl = (1/2)π(10)²을 세움).",
        // EN: A1: 2πr = 10π ⇒ r = 5 cm (and slant height l = 10 cm).
        "A1: 2πr = 10π ⇒ r = 5 cm (그리고 모선 길이 l = 10 cm).",
        // EN: M1 A1: h = √(l² − r²) = √(10² − 5²) = √75 = 5√3 cm (≈ 8.66 cm).
        "M1 A1: h = √(l² − r²) = √(10² − 5²) = √75 = 5√3 cm (≈ 8.66 cm).",
        // EN: M1 A1: cos θ = r / l = 5 / 10 = 1/2 ⇒ θ = 60° (or π/3 rad).
        "M1 A1: cos θ = r / l = 5 / 10 = 1/2 ⇒ θ = 60° (또는 π/3 rad).",
      ],
    },

    // ── t3-1-q018 · mcq · challenge · SL · SL 3.3 · 4 marks
    "t3-1-q018": {
      // EN: <p>A vertical radio mast <span class=\"\">MT</span> of height <span class=\"\">h</span> metres stands on horizontal ground at <span class=\"\">M</span>. From a point <span class=\"\">A</span> due South of <span class=\"\">M</span>, the angle of elevation of the top <span class=\"\">T</span> is <span class=\"\">45°</span>. From a point <span class=\"\">B</span> due East of <span class=\"\">M</span>, the angle of elevation of <span class=\"\">T</span> is <span class=\"\">30°</span>. If the distance <span class=\"\">AB</span> along the ground is <span class=\"\">100 m</span>, what is the exact height <span class=\"\">h</span> of the mast?</p>
      stem: "<p>높이가 <span class=\"chem\">h</span>미터인 수직 전파탑 <span class=\"chem\">MT</span>가 수평 지면 위의 점 <span class=\"chem\">M</span>에 서 있어요. <span class=\"chem\">M</span>의 정남쪽 지점 <span class=\"chem\">A</span>에서 꼭대기 <span class=\"chem\">T</span>를 올려다본 각(앙각)은 <span class=\"mono\">45°</span>이고, <span class=\"chem\">M</span>의 정동쪽 지점 <span class=\"chem\">B</span>에서 <span class=\"chem\">T</span>를 올려다본 각은 <span class=\"mono\">30°</span>예요. 지면 위 거리 <span class=\"chem\">AB</span>가 <span class=\"mono\">100 m</span>일 때, 전파탑의 정확한 높이 <span class=\"chem\">h</span>는 얼마인가요?</p>",
      options: [
        // EN: <span class=\"\">50 m</span>
        "<span class=\"chem\">50 m</span>",
        // EN: <span class=\"\">50*sqrt(2) m</span>
        "<span class=\"chem\">50*sqrt(2) m</span>",
        // EN: <span class=\"\">50*sqrt(3) m</span>
        "<span class=\"chem\">50*sqrt(3) m</span>",
        // EN: <span class=\"\">25*sqrt(3) m</span>
        "<span class=\"chem\">25*sqrt(3) m</span>",
      ],
      hints: [
        // EN: Express both ground distances <span class=\"\">AM</span> and <span class=\"\">BM</span> in terms of <span class=\"\">h</span>: <span class=\"\">AM = h / tan 45° = h</span> and <span class=\"\">BM = h / tan 30° = h*sqrt(3)</span>.
        "두 지면 거리 <span class=\"chem\">AM</span>과 <span class=\"chem\">BM</span>을 <span class=\"chem\">h</span>로 나타내세요: <span class=\"chem\">AM = h / tan 45° = h</span>이고 <span class=\"chem\">BM = h / tan 30° = h*sqrt(3)</span>이에요.",
        // EN: Since <span class=\"\">A</span> is due South and <span class=\"\">B</span> is due East of <span class=\"\">M</span>, <span class=\"\">angle AMB = 90°</span> on the ground, so <span class=\"\">AM^2 + BM^2 = 100^2</span>.
        "<span class=\"chem\">A</span>는 <span class=\"chem\">M</span>의 정남쪽, <span class=\"chem\">B</span>는 정동쪽이므로 지면에서 <span class=\"chem\">angle AMB = 90°</span>가 되어 <span class=\"chem\">AM^2 + BM^2 = 100^2</span>이에요.",
      ],
      // EN: <div class=\"\"><i>AM</i> = <i>h</i> cot 45° = <i>h</i>, &nbsp; <i>BM</i> = <i>h</i> cot 30° = <i>h</i>√3</div><div class=\"\"><i>AM</i><sup>2</sup> + <i>BM</i><sup>2</sup> = <i>h</i><sup>2</sup> + 3<i>h</i><sup>2</sup> = 4<i>h</i><sup>2</sup> = 100<sup>2</sup> ⇒ 2<i>h</i> = 100 ⇒ <i>h</i> = <b>50 m</b></div>
      solution: "<div class=\"worked__math\"><i>AM</i> = <i>h</i> cot 45° = <i>h</i>, &nbsp; <i>BM</i> = <i>h</i> cot 30° = <i>h</i>√3</div><div class=\"worked__math\"><i>AM</i><sup>2</sup> + <i>BM</i><sup>2</sup> = <i>h</i><sup>2</sup> + 3<i>h</i><sup>2</sup> = 4<i>h</i><sup>2</sup> = 100<sup>2</sup> ⇒ 2<i>h</i> = 100 ⇒ <i>h</i> = <b>50 m</b></div>",
      misconception: {
        // EN (option B): 50√2 m assumes AM = BM = h, ignoring that the elevation from B is 30° so BM = h√3.
        "1": "50√2 m는 B에서의 앙각이 30°라서 BM = h√3이 된다는 점을 무시하고 AM = BM = h라고 잘못 가정한 값이에요.",
        // EN (option C): 50√3 m is the ground distance BM = h√3, not the vertical height h.
        "2": "50√3 m는 수직 높이 h가 아니라 지면 거리 BM = h√3이에요.",
        // EN (option D): Check Pythagoras in horizontal right triangle AMB: h² + (h√3)² = 4h² = 100², so h = 100/2 = 50 m.
        "3": "수평 직각삼각형 AMB에서 피타고라스 정리를 확인하세요: h² + (h√3)² = 4h² = 100²이므로 h = 100/2 = 50 m예요.",
      },
    },

  }
});
