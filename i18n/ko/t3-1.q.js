/* t3-1.q — ko question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't3-1.q', {
  questions: {

    // ── t3-1-q001 · numeric · foundation · SL · SL 3.1 · 2 marks
    "t3-1-q001": {
      // EN: <p>Find the straight-line distance between the points <span class="chem">A(1, -2, 4)</span> and <span class="chem">B(3, 4, -2)</span> in three-dimensional space.</p>
      stem: "<p>3차원 공간에서 두 점 <span class=\"chem\">A(1, -2, 4)</span>와 <span class=\"chem\">B(3, 4, -2)</span> 사이의 직선 거리를 구하시오 (Find).</p>",
      hints: [
        // EN: Use the 3D distance formula: <span class="chem">d = sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2)</span>.
        "3D 거리 공식을 사용하세요: <span class=\"chem\">d = sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2)</span>.",
        // EN: The differences in the coordinates are <span class="chem">2</span>, <span class="chem">6</span>, and <span class="chem">-6</span>.
        "각 좌표의 차는 <span class=\"chem\">2</span>, <span class=\"chem\">6</span>, <span class=\"chem\">-6</span>이에요.",
      ],
      // EN: <div class="worked__math"><i>d</i> = √((3 − 1)<sup>2</sup> + (4 − (−2))<sup>2</sup> + (−2 − 4)<sup>2</sup>) = √(4 + 36 + 36) = <b>√76 ≈ 8.72</b></div>
      solution: "<div class=\"worked__math\"><i>d</i> = √((3 − 1)<sup>2</sup> + (4 − (−2))<sup>2</sup> + (−2 − 4)<sup>2</sup>) = √(4 + 36 + 36) = <b>√76 ≈ 8.72</b></div>",
    },

    // ── t3-1-q002 · mcq · foundation · SL · SL 3.1 · 2 marks
    "t3-1-q002": {
      // EN: <p>The midpoint of the line segment joining <span class="chem">P(2, -5, 8)</span> and <span class="chem">Q(x, y, z)</span> is <span class="chem">M(-1, 1, 3)</span>. What are the coordinates of <span class="chem">Q</span>?</p>
      stem: "<p>두 점 <span class=\"chem\">P(2, -5, 8)</span>과 <span class=\"chem\">Q(x, y, z)</span>를 잇는 선분의 중점이 <span class=\"chem\">M(-1, 1, 3)</span>이에요. 점 <span class=\"chem\">Q</span>의 좌표는 무엇인가요?</p>",
      options: [
        // EN: <span class="chem">(-4, 7, -2)</span>
        "<span class=\"chem\">(-4, 7, -2)</span>",
        // EN: <span class="chem">(0.5, -2, 5.5)</span>
        "<span class=\"chem\">(0.5, -2, 5.5)</span>",
        // EN: <span class="chem">(-3, 6, -5)</span>
        "<span class=\"chem\">(-3, 6, -5)</span>",
        // EN: <span class="chem">(4, -7, 2)</span>
        "<span class=\"chem\">(4, -7, 2)</span>",
      ],
      hints: [
        // EN: Use <span class="chem">((2 + x)/2, (-5 + y)/2, (8 + z)/2) = (-1, 1, 3)</span>.
        "<span class=\"chem\">((2 + x)/2, (-5 + y)/2, (8 + z)/2) = (-1, 1, 3)</span>을 이용하세요.",
        // EN: Multiply the coordinates of <span class="chem">M</span> by 2 and subtract <span class="chem">P</span>: <span class="chem">Q = 2M - P</span>.
        "<span class=\"chem\">M</span>의 좌표에 2를 곱한 뒤 <span class=\"chem\">P</span>를 빼세요: <span class=\"chem\">Q = 2M - P</span>.",
      ],
      // EN: <div class="worked__math"><i>x</i> = 2(−1) − 2 = −4, &nbsp; <i>y</i> = 2(1) − (−5) = 7, &nbsp; <i>z</i> = 2(3) − 8 = −2 ⇒ <b>(−4, 7, −2)</b></div>
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
      // EN: <p>A right circular cone has base radius <span class="mono">5 cm</span> and vertical height <span class="mono">12 cm</span>. What is the <strong>total surface area</strong> of the solid cone (including its circular base)?</p>
      stem: "<p>직원뿔의 밑면 반지름이 <span class=\"mono\">5 cm</span>이고 높이가 <span class=\"mono\">12 cm</span>예요. 이 원뿔의 (원형 밑면을 포함한) <strong>전체 겉넓이</strong>는 얼마인가요?</p>",
      options: [
        // EN: <span class="chem">90pi</span> <span class="unit">cm2</span>
        "<span class=\"chem\">90pi</span> <span class=\"unit\">cm2</span>",
        // EN: <span class="chem">65pi</span> <span class="unit">cm2</span>
        "<span class=\"chem\">65pi</span> <span class=\"unit\">cm2</span>",
        // EN: <span class="chem">85pi</span> <span class="unit">cm2</span>
        "<span class=\"chem\">85pi</span> <span class=\"unit\">cm2</span>",
        // EN: <span class="chem">100pi</span> <span class="unit">cm2</span>
        "<span class=\"chem\">100pi</span> <span class=\"unit\">cm2</span>",
      ],
      hints: [
        // EN: First find the slant height <span class="chem">l = sqrt(r^2 + h^2)</span> using Pythagoras.
        "먼저 피타고라스 정리로 모선의 길이 <span class=\"chem\">l = sqrt(r^2 + h^2)</span>를 구하세요.",
        // EN: Total surface area = curved surface <span class="chem">πrl</span> + base area <span class="chem">πr^2</span>.
        "전체 겉넓이 = 옆넓이 <span class=\"chem\">πrl</span> + 밑넓이 <span class=\"chem\">πr^2</span>예요.",
      ],
      // EN: <div class="worked__math"><i>l</i> = √(5<sup>2</sup> + 12<sup>2</sup>) = 13 cm ⇒ <i>A</i><sub>total</sub> = <i>π</i>(5)(13) + <i>π</i>(5)<sup>2</sup> = 65<i>π</i> + 25<i>π</i> = <b>90<i>π</i> cm<sup>2</sup></b></div>
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
      // EN: <p>Express <span class="mono">210°</span> in radians as an exact multiple of <span class="chem">pi</span>.</p>
      stem: "<p><span class=\"mono\">210°</span>를 <span class=\"chem\">pi</span>의 정확한 배수인 라디안으로 나타내시오.</p>",
      options: [
        // EN: <span class="chem">7pi / 6</span>
        "<span class=\"chem\">7pi / 6</span>",
        // EN: <span class="chem">5pi / 6</span>
        "<span class=\"chem\">5pi / 6</span>",
        // EN: <span class="chem">4pi / 3</span>
        "<span class=\"chem\">4pi / 3</span>",
        // EN: <span class="chem">7pi / 4</span>
        "<span class=\"chem\">7pi / 4</span>",
      ],
      hints: [
        // EN: Multiply by <span class="chem">pi / 180°</span> and simplify the fraction <span class="chem">210 / 180</span>.
        "<span class=\"chem\">pi / 180°</span>를 곱하고 분수 <span class=\"chem\">210 / 180</span>을 약분하세요.",
        // EN: Notice that <span class="mono">210° = 7 × 30°</span> and <span class="mono">30° = π/6</span>.
        "<span class=\"mono\">210° = 7 × 30°</span>이고 <span class=\"mono\">30° = π/6</span>임을 이용하세요.",
      ],
      // EN: <div class="worked__math">210° × <span class="frac"><span><i>π</i></span><span>180°</span></span> = <span class="frac"><span>7<i>π</i></span><span>6</span></span></div>
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
      // EN: <p>A circular sector has radius <span class="mono">10 cm</span> and central angle <span class="chem">theta = 1.4</span> radians. Calculate the area of the sector in <span class="unit">cm2</span>.</p>
      stem: "<p>반지름이 <span class=\"mono\">10 cm</span>이고 중심각이 <span class=\"chem\">theta = 1.4</span>라디안인 부채꼴의 넓이를 <span class=\"unit\">cm2</span> 단위로 계산하시오 (Calculate).</p>",
      hints: [
        // EN: Use the sector area formula <span class="chem">A = (1/2)r^2theta</span>.
        "부채꼴의 넓이 공식 <span class=\"chem\">A = (1/2)r^2theta</span>를 쓰세요.",
        // EN: Substitute <span class="chem">r = 10</span> and <span class="chem">theta = 1.4</span>.
        "<span class=\"chem\">r = 10</span>과 <span class=\"chem\">theta = 1.4</span>를 대입하세요.",
      ],
      // EN: <div class="worked__math"><i>A</i> = <span class="frac"><span>1</span><span>2</span></span>(10)<sup>2</sup>(1.4) = 50 × 1.4 = <b>70 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\"><i>A</i> = <span class=\"frac\"><span>1</span><span>2</span></span>(10)<sup>2</sup>(1.4) = 50 × 1.4 = <b>70 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q006 · numeric · foundation · SL · SL 3.2 · 3 marks
    "t3-1-q006": {
      // EN: <p>In triangle <span class="chem">ABC</span>, <span class="chem">a = 7 cm</span>, <span class="chem">b = 8 cm</span>, and <span class="chem">angle C = 60°</span>. Find the exact length of side <span class="chem">c</span>.</p>
      stem: "<p>삼각형 <span class=\"chem\">ABC</span>에서 <span class=\"chem\">a = 7 cm</span>, <span class=\"chem\">b = 8 cm</span>, <span class=\"chem\">angle C = 60°</span>예요. 변 <span class=\"chem\">c</span>의 정확한 길이를 구하시오 (Find).</p>",
      hints: [
        // EN: You know two sides and the included angle (<span class="chem">SAS</span>), so use the Cosine Rule: <span class="chem">c^2 = a^2 + b^2 - 2ab cos C</span>.
        "두 변과 그 끼인각(<span class=\"chem\">SAS</span>)을 알므로 코사인법칙 <span class=\"chem\">c^2 = a^2 + b^2 - 2ab cos C</span>를 쓰세요.",
        // EN: Recall that <span class="chem">cos 60° = 1/2</span>.
        "<span class=\"chem\">cos 60° = 1/2</span>임을 떠올리세요.",
      ],
      // EN: <div class="worked__math"><i>c</i><sup>2</sup> = 7<sup>2</sup> + 8<sup>2</sup> − 2(7)(8) cos 60° = 49 + 64 − 56 = 57 ⇒ <i>c</i> = <b>√57 cm</b></div>
      solution: "<div class=\"worked__math\"><i>c</i><sup>2</sup> = 7<sup>2</sup> + 8<sup>2</sup> − 2(7)(8) cos 60° = 49 + 64 − 56 = 57 ⇒ <i>c</i> = <b>√57 cm</b></div>",
    },

    // ── t3-1-q007 · mcq · exam · SL · SL 3.2 · 3 marks
    "t3-1-q007": {
      // EN: <p><strong>[Paper 1 — No GDC]</strong> In triangle <span class="chem">ABC</span>, the side lengths are <span class="chem">a = 5 cm</span>, <span class="chem">b = 6 cm</span>, and <span class="chem">c = 8 cm</span>. What is the exact value of <span class="chem">cos C</span>, and what does this tell you about <span class="chem">angle C</span>?</p>
      stem: "<p><strong>[Paper 1 — No GDC]</strong> 삼각형 <span class=\"chem\">ABC</span>의 세 변의 길이가 <span class=\"chem\">a = 5 cm</span>, <span class=\"chem\">b = 6 cm</span>, <span class=\"chem\">c = 8 cm</span>이에요. <span class=\"chem\">cos C</span>의 정확한 값은 얼마이며, 이를 통해 <span class=\"chem\">angle C</span>에 대해 무엇을 알 수 있나요?</p>",
      options: [
        // EN: <span class="chem">cos C = -1/20</span>, so <span class="chem">angle C</span> is obtuse
        "<span class=\"chem\">cos C = -1/20</span>이므로 <span class=\"chem\">angle C</span>는 둔각이다",
        // EN: <span class="chem">cos C = 1/20</span>, so <span class="chem">angle C</span> is acute
        "<span class=\"chem\">cos C = 1/20</span>이므로 <span class=\"chem\">angle C</span>는 예각이다",
        // EN: <span class="chem">cos C = -3/40</span>, so <span class="chem">angle C</span> is obtuse
        "<span class=\"chem\">cos C = -3/40</span>이므로 <span class=\"chem\">angle C</span>는 둔각이다",
        // EN: <span class="chem">cos C = 0</span>, so <span class="chem">angle C = 90°</span>
        "<span class=\"chem\">cos C = 0</span>이므로 <span class=\"chem\">angle C = 90°</span>이다",
      ],
      hints: [
        // EN: Use the rearranged Cosine Rule: <span class="chem">cos C = (a^2 + b^2 - c^2) / (2ab)</span>.
        "변형된 코사인법칙을 쓰세요: <span class=\"chem\">cos C = (a^2 + b^2 - c^2) / (2ab)</span>.",
        // EN: A negative cosine on <span class="chem">(0°, 180°)</span> means the angle lies in Quadrant II (obtuse).
        "<span class=\"chem\">(0°, 180°)</span>에서 코사인 값이 음수이면 각이 제2사분면(둔각)에 있다는 뜻이에요.",
      ],
      // EN: <div class="worked__math">cos <i>C</i> = <span class="frac"><span>5<sup>2</sup> + 6<sup>2</sup> − 8<sup>2</sup></span><span>2(5)(6)</span></span> = <span class="frac"><span>25 + 36 − 64</span><span>60</span></span> = −<span class="frac"><span>3</span><span>60</span></span> = <b>−<span class="frac"><span>1</span><span>20</span></span></b> (obtuse since cos <i>C</i> &lt; 0)</div>
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

    // ── t3-1-q008 · numeric · exam · SL · SL 3.2, 3.5 · 4 marks
    "t3-1-q008": {
      // EN: <p><strong>[Paper 2 — GDC]</strong> In triangle <span class="chem">ABC</span>, <span class="chem">AB = 12 cm</span>, <span class="chem">BC = 9 cm</span>, and <span class="chem">angle BAC = 42°</span>. Given that <span class="chem">angle ACB</span> is <strong>obtuse</strong>, find the size of <span class="chem">angle ACB</span> in degrees to 3 significant figures.</p>
      stem: "<p><strong>[Paper 2 — GDC]</strong> 삼각형 <span class=\"chem\">ABC</span>에서 <span class=\"chem\">AB = 12 cm</span>, <span class=\"chem\">BC = 9 cm</span>, <span class=\"chem\">angle BAC = 42°</span>예요. <span class=\"chem\">angle ACB</span>가 <strong>둔각</strong>일 때, <span class=\"chem\">angle ACB</span>의 크기를 도(°) 단위로 구하고 (Find) 유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: Use the Sine Rule <span class="chem">(sin C)/12 = (sin 42°)/9</span> to find the acute reference angle <span class="chem">C_1</span>.
        "사인법칙 <span class=\"chem\">(sin C)/12 = (sin 42°)/9</span>를 써서 예각 기준각 <span class=\"chem\">C_1</span>을 구하세요.",
        // EN: Since <span class="chem">angle ACB</span> is obtuse, subtract <span class="chem">C_1</span> from <span class="mono">180°</span>.
        "<span class=\"chem\">angle ACB</span>가 둔각이므로 <span class=\"mono\">180°</span>에서 <span class=\"chem\">C_1</span>을 빼세요.",
      ],
      // EN: <div class="worked__math">sin <i>C</i> = <span class="frac"><span>12 sin 42°</span><span>9</span></span> ≈ 0.892174 ⇒ <i>C</i><sub>1</sub> = 63.148°</div><div class="worked__math"><i>C</i><sub>obtuse</sub> = 180° − 63.148° = <b>117°</b> (116.852°)</div>
      solution: "<div class=\"worked__math\">sin <i>C</i> = <span class=\"frac\"><span>12 sin 42°</span><span>9</span></span> ≈ 0.892174 ⇒ <i>C</i><sub>1</sub> = 63.148°</div><div class=\"worked__math\"><i>C</i><sub>obtuse</sub> = 180° − 63.148° = <b>117°</b> (116.852°)</div>",
    },

    // ── t3-1-q009 · mcq · exam · SL · SL 3.3 · 3 marks
    "t3-1-q009": {
      // EN: <p>Port <span class="chem">B</span> is on a three-figure bearing of <span class="mono">115°</span> from Port <span class="chem">A</span>. What is the three-figure back-bearing of Port <span class="chem">A</span> <strong>from</strong> Port <span class="chem">B</span>?</p>
      stem: "<p>항구 <span class=\"chem\">B</span>는 항구 <span class=\"chem\">A</span>로부터 세 자리 방위각 <span class=\"mono\">115°</span> 방향에 있어요. 항구 <span class=\"chem\">B</span><strong>로부터</strong> 항구 <span class=\"chem\">A</span>의 세 자리 역방위각은 무엇인가요?</p>",
      options: [
        // EN: <span class="mono">295°</span>
        "<span class=\"mono\">295°</span>",
        // EN: <span class="mono">065°</span>
        "<span class=\"mono\">065°</span>",
        // EN: <span class="mono">245°</span>
        "<span class=\"mono\">245°</span>",
        // EN: <span class="mono">155°</span>
        "<span class=\"mono\">155°</span>",
      ],
      hints: [
        // EN: The bearing from <span class="chem">B</span> back to <span class="chem">A</span> points in the exact opposite direction to the vector from <span class="chem">A</span> to <span class="chem">B</span>.
        "<span class=\"chem\">B</span>에서 <span class=\"chem\">A</span>로 돌아가는 방위각은 <span class=\"chem\">A</span>에서 <span class=\"chem\">B</span>로 가는 벡터와 정반대 방향이에요.",
        // EN: Add <span class="mono">180°</span> to <span class="mono">115°</span>.
        "<span class=\"mono\">115°</span>에 <span class=\"mono\">180°</span>를 더하세요.",
      ],
      // EN: <div class="worked__math">Back-bearing = 115° + 180° = <b>295°</b></div>
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
      // EN: <p>A ship sails from harbour <span class="chem">O</span> for <span class="mono">15 km</span> on a bearing of <span class="mono">040°</span> to point <span class="chem">P</span>, and then sails <span class="mono">22 km</span> on a bearing of <span class="mono">160°</span> to point <span class="chem">Q</span>. Calculate the direct distance <span class="chem">OQ</span> in <span class="unit">km</span>, to 3 significant figures.</p>
      stem: "<p>배가 항구 <span class=\"chem\">O</span>에서 방위각 <span class=\"mono\">040°</span> 방향으로 <span class=\"mono\">15 km</span> 항해해 지점 <span class=\"chem\">P</span>에 도착한 뒤, 방위각 <span class=\"mono\">160°</span> 방향으로 <span class=\"mono\">22 km</span> 항해해 지점 <span class=\"chem\">Q</span>에 도착했어요. 직선 거리 <span class=\"chem\">OQ</span>를 <span class=\"unit\">km</span> 단위로 계산하고 (Calculate) 유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: Draw North arrows at <span class="chem">O</span> and <span class="chem">P</span>. The angle between <span class="chem">PO</span> and South at <span class="chem">P</span> is <span class="mono">40°</span>, and the angle between North at <span class="chem">P</span> and <span class="chem">PQ</span> is <span class="mono">160°</span>.
        "<span class=\"chem\">O</span>와 <span class=\"chem\">P</span>에 북쪽 화살표를 그리세요. <span class=\"chem\">PO</span>와 <span class=\"chem\">P</span>의 남쪽 사이의 각이 <span class=\"mono\">40°</span>이고, <span class=\"chem\">P</span>의 북쪽과 <span class=\"chem\">PQ</span> 사이의 각이 <span class=\"mono\">160°</span>예요.",
        // EN: This makes the interior angle <span class="chem">angle OPQ = (180° - 160°) + 40° = 60°</span>. Now apply the Cosine Rule to triangle <span class="chem">OPQ</span>!
        "따라서 내각 <span class=\"chem\">angle OPQ = (180° - 160°) + 40° = 60°</span>예요. 이제 삼각형 <span class=\"chem\">OPQ</span>에 코사인법칙을 적용하세요!",
      ],
      // EN: <div class="worked__math">∠<i>OPQ</i> = 20° + 40° = 60°</div><div class="worked__math"><i>OQ</i> = √(15<sup>2</sup> + 22<sup>2</sup> − 2(15)(22) cos 60°) = √(225 + 484 − 330) = √379 ≈ <b>19.5 km</b></div>
      solution: "<div class=\"worked__math\">∠<i>OPQ</i> = 20° + 40° = 60°</div><div class=\"worked__math\"><i>OQ</i> = √(15<sup>2</sup> + 22<sup>2</sup> − 2(15)(22) cos 60°) = √(225 + 484 − 330) = √379 ≈ <b>19.5 km</b></div>",
    },

    // ── t3-1-q011 · numeric · exam · SL · SL 3.4 · 4 marks
    "t3-1-q011": {
      // EN: <p>A circle has radius <span class="chem">r = 12 cm</span>. A chord <span class="chem">AB</span> subtends a central angle of <span class="chem">theta = 2.1</span> radians at the centre <span class="chem">O</span>. Calculate the area of the minor circular segment bounded by the chord <span class="chem">AB</span> and the arc <span class="chem">AB</span>, to 3 significant figures.</p>
      stem: "<p>반지름이 <span class=\"chem\">r = 12 cm</span>인 원에서 현 <span class=\"chem\">AB</span>가 중심 <span class=\"chem\">O</span>에 만드는 중심각이 <span class=\"chem\">theta = 2.1</span>라디안이에요. 현 <span class=\"chem\">AB</span>와 호 <span class=\"chem\">AB</span>로 둘러싸인 작은 활꼴의 넓이를 계산하고 (Calculate) 유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: Use <span class="chem">A_{segment} = (1/2)r^2(theta - sin(theta))</span> with <span class="chem">theta</span> in radians.
        "<span class=\"chem\">theta</span>가 라디안일 때 <span class=\"chem\">A_{segment} = (1/2)r^2(theta - sin(theta))</span>를 쓰세요.",
        // EN: Ensure your GDC is in <strong>radians</strong> when evaluating <span class="chem">sin(2.1)</span>.
        "<span class=\"chem\">sin(2.1)</span>을 계산할 때 GDC가 <strong>라디안(RAD)</strong> 모드인지 확인하세요.",
      ],
      // EN: <div class="worked__math"><i>A</i><sub>segment</sub> = <span class="frac"><span>1</span><span>2</span></span>(12)<sup>2</sup>(2.1 − sin 2.1) = 72(2.1 − 0.863209) ≈ <b>89.0 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\"><i>A</i><sub>segment</sub> = <span class=\"frac\"><span>1</span><span>2</span></span>(12)<sup>2</sup>(2.1 − sin 2.1) = 72(2.1 − 0.863209) ≈ <b>89.0 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q012 · multi · exam · SL · SL 3.5 · 2 marks
    "t3-1-q012": {
      // EN: <p>In triangle <span class="chem">ABC</span>, you are given <span class="chem">angle A = 30°</span> and side <span class="chem">b = 16 cm</span>. For which of the following values of the opposite side <span class="chem">a</span> are there <strong>two distinct possible triangles</strong> <span class="chem">ABC</span>? Select all that apply.</p>
      stem: "<p>삼각형 <span class=\"chem\">ABC</span>에서 <span class=\"chem\">angle A = 30°</span>이고 변 <span class=\"chem\">b = 16 cm</span>가 주어져 있어요. 다음 중 대변 <span class=\"chem\">a</span>의 값으로 <strong>서로 다른 두 개의 삼각형</strong> <span class=\"chem\">ABC</span>가 만들어지는 것을 모두 고르시오.</p>",
      options: [
        // EN: <span class="chem">a = 6 cm</span>
        "<span class=\"chem\">a = 6 cm</span>",
        // EN: <span class="chem">a = 8 cm</span>
        "<span class=\"chem\">a = 8 cm</span>",
        // EN: <span class="chem">a = 10 cm</span>
        "<span class=\"chem\">a = 10 cm</span>",
        // EN: <span class="chem">a = 14 cm</span>
        "<span class=\"chem\">a = 14 cm</span>",
        // EN: <span class="chem">a = 18 cm</span>
        "<span class=\"chem\">a = 18 cm</span>",
      ],
      hints: [
        // EN: Calculate the perpendicular height <span class="chem">h = b sin A = 16 sin 30° = 8 cm</span>.
        "수직 높이 <span class=\"chem\">h = b sin A = 16 sin 30° = 8 cm</span>를 계산하세요.",
        // EN: Two distinct triangles exist if and only if <span class="chem">b sin A &lt; a &lt; b</span>, i.e. <span class="chem">8 &lt; a &lt; 16</span>.
        "서로 다른 두 삼각형이 존재할 필요충분조건은 <span class=\"chem\">b sin A &lt; a &lt; b</span>, 즉 <span class=\"chem\">8 &lt; a &lt; 16</span>이에요.",
      ],
      // EN: <p>Here <span class="chem">b sin A = 16 sin 30° = 8 cm</span>. The ambiguous two-triangle condition is <span class="chem">8 &lt; a &lt; 16</span>, which is satisfied by <span class="chem">a = 10 cm</span> and <span class="chem">a = 14 cm</span>.</p>
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
      // EN: <p>Arrange the steps in logical order to find the acute angle between the space diagonal <span class="chem">AG</span> of a cuboid <span class="chem">ABCDEFGH</span> (with base <span class="mono">6 cm × 8 cm</span> and height <span class="mono">5 cm</span>) and its horizontal base <span class="chem">ABCD</span>.</p>
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
        // EN: First identify the shadow of <span class="chem">AG</span> on the horizontal base plane.
        "먼저 수평 밑면 위에서 <span class=\"chem\">AG</span>의 그림자(정사영)를 찾으세요.",
        // EN: Next find the length of that shadow before using right-angled trigonometry.
        "그다음 직각삼각형의 삼각비를 쓰기 전에 그 그림자의 길이를 구하세요.",
      ],
      // EN: <p>Drop a perpendicular from <span class="chem">G</span> to <span class="chem">C</span> on the base, find the base diagonal <span class="chem">AC = 10 cm</span>, set up right-angled triangle <span class="chem">ACG</span>, and evaluate <span class="chem">arctan(5/10) ≈ 26.6°</span>.</p>
      solution: "<p><span class=\"chem\">G</span>에서 밑면의 <span class=\"chem\">C</span>로 수선을 내리고, 밑면 대각선 <span class=\"chem\">AC = 10 cm</span>를 구한 뒤 직각삼각형 <span class=\"chem\">ACG</span>를 세워 <span class=\"chem\">arctan(5/10) ≈ 26.6°</span>를 계산해요.</p>",
    },

    // ── t3-1-q014 · short · exam · SL · SL 3.4 · 5 marks
    "t3-1-q014": {
      // EN: <p><strong>[Paper 1 — No GDC]</strong> A sector of a circle of radius <span class="chem">r</span> cm has central angle <span class="chem">theta</span> radians. The perimeter of the sector is <span class="mono">20 cm</span> and the area of the sector is <span class="mono">24 cm²</span>. Find the two possible pairs of values of <span class="chem">(r, theta)</span>.</p>
      stem: "<p><strong>[Paper 1 — No GDC]</strong> 반지름이 <span class=\"chem\">r</span> cm인 원의 부채꼴의 중심각이 <span class=\"chem\">theta</span>라디안이다. 이 부채꼴의 둘레가 <span class=\"mono\">20 cm</span>이고 넓이가 <span class=\"mono\">24 cm²</span>일 때, 가능한 <span class=\"chem\">(r, theta)</span>의 두 쌍을 구하시오 (Find).</p>",
      hints: [
        // EN: Write the two equations: <span class="chem">2r + rθ = 20</span> and <span class="chem">(1/2)r^2theta = 24</span>.
        "두 방정식을 세우세요: <span class=\"chem\">2r + rθ = 20</span>과 <span class=\"chem\">(1/2)r^2theta = 24</span>.",
        // EN: Isolate <span class="chem">rθ = 20 - 2r</span> from the first equation and substitute it into <span class="chem">(1/2)r(rθ) = 24</span>.
        "첫 번째 식에서 <span class=\"chem\">rθ = 20 - 2r</span>를 정리해 <span class=\"chem\">(1/2)r(rθ) = 24</span>에 대입하세요.",
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

    // ── t3-1-q015 · numeric · challenge · SL · SL 3.2, 3.5 · 5 marks
    "t3-1-q015": {
      // EN: <p><strong>[Paper 1 — No GDC]</strong> In triangle <span class="chem">ABC</span>, <span class="chem">AB = 6 cm</span>, <span class="chem">BC = 4 cm</span>, and <span class="chem">cos(angle BAC) = 3/4</span>. Two different triangles fit this information. Given also that <span class="chem">angle ACB</span> is <strong>obtuse</strong>, find the length of <span class="chem">AC</span> (in <span class="unit">cm</span>).</p>
      stem: "<p><strong>[Paper 1 — No GDC]</strong> 삼각형 <span class=\"chem\">ABC</span>에서 <span class=\"chem\">AB = 6 cm</span>, <span class=\"chem\">BC = 4 cm</span>, <span class=\"chem\">cos(angle BAC) = 3/4</span>이에요. 이 조건에 맞는 삼각형은 두 개예요. <span class=\"chem\">angle ACB</span>가 <strong>둔각</strong>이라는 조건이 더 주어질 때, <span class=\"chem\">AC</span>의 길이를 (<span class=\"unit\">cm</span> 단위로) 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: this is the ambiguous case in cosine-rule form. Two lengths of <span class="chem">AC</span> are possible; the word "obtuse" tells you which one to keep. Find both, then test each.
        "해석: 코사인법칙의 형태로 나타난, 삼각형이 두 개 만들어지는 경우(모호한 경우)예요. <span class=\"chem\">AC</span>의 길이는 두 가지가 가능하고, \"둔각\"이라는 말이 어느 쪽을 남길지 알려 줘요. 둘 다 구한 뒤 각각 확인하세요.",
        // EN: Let <span class="chem">AC = b</span> and write the Cosine Rule using <span class="chem">angle A</span>: <span class="chem">BC^2 = AB^2 + b^2 - 2(AB)(b) cos A</span>.
        "<span class=\"chem\">AC = b</span>로 두고 <span class=\"chem\">angle A</span>에 대한 코사인법칙을 쓰세요: <span class=\"chem\">BC^2 = AB^2 + b^2 - 2(AB)(b) cos A</span>.",
        // EN: Substitute the given values to form a quadratic in <span class="chem">b</span>: <span class="chem">16 = 36 + b^2 - 2(6)(b)(3/4)</span>, i.e. <span class="chem">b^2 - 9b + 20 = 0</span>.
        "주어진 값을 대입해 <span class=\"chem\">b</span>에 대한 이차방정식 <span class=\"chem\">16 = 36 + b^2 - 2(6)(b)(3/4)</span>, 즉 <span class=\"chem\">b^2 - 9b + 20 = 0</span>을 만드세요.",
        // EN: For each root, find the sign of <span class="chem">cos C = (BC^2 + AC^2 - AB^2)/(2(BC)(AC))</span>. A negative value means <span class="chem">angle ACB</span> is obtuse.
        "각 근에 대해 <span class=\"chem\">cos C = (BC^2 + AC^2 - AB^2)/(2(BC)(AC))</span>의 부호를 확인하세요. 음수이면 <span class=\"chem\">angle ACB</span>는 둔각이에요.",
      ],
      // EN: <div class="worked__math">4<sup>2</sup> = 6<sup>2</sup> + <i>b</i><sup>2</sup> − 2(6)<i>b</i><span class="frac"><span>3</span><span>4</span></span> ⇒ <i>b</i><sup>2</sup> − 9<i>b</i> + 20 = 0 ⇒ (<i>b</i> − 4)(<i>b</i> − 5) = 0</div><div class="worked__math">If <i>b</i> = 4: cos <i>C</i> = <span class="frac"><span>16 + 16 − 36</span><span>2(4)(4)</span></span> = −<span class="frac"><span>1</span><span>8</span></span> &lt; 0, so <i>C</i> is obtuse. If <i>b</i> = 5: cos <i>C</i> = <span class="frac"><span>16 + 25 − 36</span><span>2(4)(5)</span></span> = <span class="frac"><span>1</span><span>8</span></span> &gt; 0, so <i>C</i> is acute.</div><div class="worked__math">Hence <i>AC</i> = <b>4 cm</b>.</div>
      solution: "<div class=\"worked__math\">4<sup>2</sup> = 6<sup>2</sup> + <i>b</i><sup>2</sup> − 2(6)<i>b</i><span class=\"frac\"><span>3</span><span>4</span></span> ⇒ <i>b</i><sup>2</sup> − 9<i>b</i> + 20 = 0 ⇒ (<i>b</i> − 4)(<i>b</i> − 5) = 0</div><div class=\"worked__math\"><i>b</i> = 4이면 cos <i>C</i> = <span class=\"frac\"><span>16 + 16 − 36</span><span>2(4)(4)</span></span> = −<span class=\"frac\"><span>1</span><span>8</span></span> &lt; 0이므로 <i>C</i>는 둔각이에요. <i>b</i> = 5이면 cos <i>C</i> = <span class=\"frac\"><span>16 + 25 − 36</span><span>2(4)(5)</span></span> = <span class=\"frac\"><span>1</span><span>8</span></span> &gt; 0이므로 <i>C</i>는 예각이에요.</div><div class=\"worked__math\">따라서 <i>AC</i> = <b>4 cm</b>예요.</div>",
    },

    // ── t3-1-q016 · numeric · challenge · SL · SL 3.4 · 6 marks
    "t3-1-q016": {
      // EN: <p>Two identical circles, each of radius <span class="mono">6 cm</span>, are drawn such that the centre of each circle lies on the circumference of the other circle. Find the area of the overlapping region common to both circles, in <span class="unit">cm2</span> to 3 significant figures.</p>
      stem: "<p>반지름이 각각 <span class=\"mono\">6 cm</span>인 합동인 두 원이 서로의 중심이 상대방 원의 원주 위에 놓이도록 그려져 있어요. 두 원이 겹치는 공통 영역의 넓이를 <span class=\"unit\">cm2</span> 단위로 구하고 (Find) 유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: Decode: the overlap is two equal circular segments, one cut from each circle by the common chord. The hidden fact is the angle each segment subtends at its centre; the condition "each centre lies on the other circle" gives it.
        "해석: 겹치는 부분은 공통현이 각 원에서 잘라 낸 합동인 활꼴 두 개로 이루어져 있어요. 숨은 핵심은 각 활꼴이 중심에서 이루는 각이고, \"각 중심이 다른 원 위에 있다\"는 조건이 그 각을 알려 줘요.",
        // EN: Let the centres be <span class="chem">O_1, O_2</span> and the intersection points be <span class="chem">A, B</span>. Since <span class="chem">O_1 O_2 = O_1 A = O_2 A = 6 cm</span>, triangles <span class="chem">O_1 O_2 A</span> and <span class="chem">O_1 O_2 B</span> are equilateral (<span class="mono">60° = π/3</span>)!
        "두 중심을 <span class=\"chem\">O_1, O_2</span>, 두 교점을 <span class=\"chem\">A, B</span>라 하세요. <span class=\"chem\">O_1 O_2 = O_1 A = O_2 A = 6 cm</span>이므로 삼각형 <span class=\"chem\">O_1 O_2 A</span>와 <span class=\"chem\">O_1 O_2 B</span>는 정삼각형(<span class=\"mono\">60° = π/3</span>)이에요!",
        // EN: Thus the central angle at each centre is <span class="chem">theta = 2pi/3</span>, and the overlap consists of <strong>two identical circular segments</strong> of angle <span class="chem">2pi/3</span>.
        "따라서 각 중심에서의 중심각은 <span class=\"chem\">theta = 2pi/3</span>이고, 겹치는 영역은 중심각이 <span class=\"chem\">2pi/3</span>인 <strong>합동인 두 활꼴</strong>로 이루어져 있어요.",
      ],
      // EN: <div class="worked__math">∠<i>AO</i><sub>1</sub><i>B</i> = <span class="frac"><span>2<i>π</i></span><span>3</span></span> rad ⇒ <i>A</i><sub>overlap</sub> = 2 × <span class="frac"><span>1</span><span>2</span></span>(6)<sup>2</sup>(<span class="frac"><span>2<i>π</i></span><span>3</span></span> − sin <span class="frac"><span>2<i>π</i></span><span>3</span></span>) = 36(<span class="frac"><span>2<i>π</i></span><span>3</span></span> − <span class="frac"><span>√3</span><span>2</span></span>) = 24<i>π</i> − 18√3 ≈ <b>44.2 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\">∠<i>AO</i><sub>1</sub><i>B</i> = <span class=\"frac\"><span>2<i>π</i></span><span>3</span></span> rad ⇒ <i>A</i><sub>overlap</sub> = 2 × <span class=\"frac\"><span>1</span><span>2</span></span>(6)<sup>2</sup>(<span class=\"frac\"><span>2<i>π</i></span><span>3</span></span> − sin <span class=\"frac\"><span>2<i>π</i></span><span>3</span></span>) = 36(<span class=\"frac\"><span>2<i>π</i></span><span>3</span></span> − <span class=\"frac\"><span>√3</span><span>2</span></span>) = 24<i>π</i> − 18√3 ≈ <b>44.2 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q017 · short · challenge · SL · SL 3.1 · 6 marks
    "t3-1-q017": {
      // EN: <p>A hollow right circular cone (open at the base) of base radius <span class="chem">r</span> and slant height <span class="chem">l</span> is made by rolling up a semicircular sheet of thin metal of radius <span class="mono">10 cm</span> so that the two straight radii meet without overlap.<br>(a) Find the base radius <span class="chem">r</span> and vertical height <span class="chem">h</span> of the cone. <strong>[4 marks]</strong><br>(b) Find the acute angle between a slant generator of the cone and the plane of its base. <strong>[2 marks]</strong></p>
      stem: "<p>반지름이 <span class=\"mono\">10 cm</span>인 반원 모양의 얇은 금속판을 두 직선 반지름이 겹치지 않게 맞닿도록 말아서 밑면 반지름이 <span class=\"chem\">r</span>이고 모선의 길이가 <span class=\"chem\">l</span>인 속이 빈 직원뿔(밑면이 열려 있음)을 만들었다.<br>(a) 원뿔의 밑면 반지름 <span class=\"chem\">r</span>과 수직 높이 <span class=\"chem\">h</span>를 구하시오 (Find). <strong>[4 marks]</strong><br>(b) 원뿔의 모선과 밑면을 포함하는 평면이 이루는 예각을 구하시오 (Find). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: rolling a flat sheet into a cone keeps lengths. The radius of the sheet becomes the slant height, and the curved edge of the sheet becomes the circumference of the base.
        "해석: 평평한 판을 말아 원뿔을 만들어도 길이는 그대로예요. 판의 반지름은 모선의 길이가 되고, 판의 곡선 가장자리는 밑면의 둘레가 돼요.",
        // EN: When you roll a sector into a cone, the radius of the flat sector becomes the <strong>slant height</strong> <span class="chem">l = 10 cm</span> of the cone, and the arc length of the sector becomes the base circumference <span class="chem">2pi r</span>.
        "부채꼴을 말아 원뿔을 만들면 평면 부채꼴의 반지름이 원뿔의 <strong>모선 길이</strong> <span class=\"chem\">l = 10 cm</span>가 되고, 부채꼴의 호의 길이가 밑면 원주 <span class=\"chem\">2pi r</span>가 돼요.",
        // EN: Equate <span class="chem">2pi r = 10pi</span> to find <span class="chem">r</span>.
        "<span class=\"chem\">2pi r = 10pi</span>로 놓고 <span class=\"chem\">r</span>을 구하세요.",
      ],
      // EN: <p>(a) <i>r</i> = 5 cm, <i>h</i> = 5√3 cm (≈ 8.66 cm); (b) 60° (or π/3 rad).</p>
      answer: "<p>(a) <i>r</i> = 5 cm, <i>h</i> = 5√3 cm (≈ 8.66 cm); (b) 60° (또는 π/3 rad).</p>",
      markscheme: [
        // EN: M1: The arc length of the semicircle (π × 10) becomes the circumference 2πr of the cone base (or equate curved area πrl = (1/2)π(10)² with l = 10).
        "M1: 반원의 호의 길이 (π × 10)가 원뿔 밑면의 둘레 2πr이 됨을 세움 (또는 l = 10으로 두고 옆넓이 πrl = (1/2)π(10)²을 세움).",
        // EN: A1: 2πr = 10π ⇒ r = 5 cm (and slant height l = 10 cm).
        "A1: 2πr = 10π ⇒ r = 5 cm (그리고 모선 길이 l = 10 cm).",
        // EN: M1: Use Pythagoras with the slant height: h = √(l² − r²) = √(10² − 5²).
        "M1: 모선의 길이로 피타고라스 정리를 씀: h = √(l² − r²) = √(10² − 5²).",
        // EN: A1: h = √75 = 5√3 cm (≈ 8.66 cm).
        "A1: h = √75 = 5√3 cm (≈ 8.66 cm).",
        // EN: M1: Use the right triangle formed by r, h and l: cos θ = r / l = 5 / 10.
        "M1: r, h, l로 이루어진 직각삼각형을 이용함: cos θ = r / l = 5 / 10.",
        // EN: A1: cos θ = 1/2 ⇒ θ = 60° (or π/3 rad).
        "A1: cos θ = 1/2 ⇒ θ = 60° (또는 π/3 rad).",
      ],
    },

    // ── t3-1-q018 · mcq · challenge · SL · SL 3.3 · 4 marks
    "t3-1-q018": {
      // EN: <p>A vertical radio mast <span class="chem">MT</span> of height <span class="chem">h</span> metres stands on horizontal ground at <span class="chem">M</span>. From a point <span class="chem">A</span> due South of <span class="chem">M</span>, the angle of elevation of the top <span class="chem">T</span> is <span class="mono">45°</span>. From a point <span class="chem">B</span> due East of <span class="chem">M</span>, the angle of elevation of <span class="chem">T</span> is <span class="mono">30°</span>. If the distance <span class="chem">AB</span> along the ground is <span class="mono">100 m</span>, what is the exact height <span class="chem">h</span> of the mast?</p>
      stem: "<p>높이가 <span class=\"chem\">h</span>미터인 수직 전파탑 <span class=\"chem\">MT</span>가 수평 지면 위의 점 <span class=\"chem\">M</span>에 서 있어요. <span class=\"chem\">M</span>의 정남쪽 지점 <span class=\"chem\">A</span>에서 꼭대기 <span class=\"chem\">T</span>를 올려다본 각(앙각)은 <span class=\"mono\">45°</span>이고, <span class=\"chem\">M</span>의 정동쪽 지점 <span class=\"chem\">B</span>에서 <span class=\"chem\">T</span>를 올려다본 각은 <span class=\"mono\">30°</span>예요. 지면 위 거리 <span class=\"chem\">AB</span>가 <span class=\"mono\">100 m</span>일 때, 전파탑의 정확한 높이 <span class=\"chem\">h</span>는 얼마인가요?</p>",
      options: [
        // EN: <span class="chem">50 m</span>
        "<span class=\"chem\">50 m</span>",
        // EN: <span class="chem">50sqrt(2) m</span>
        "<span class=\"chem\">50sqrt(2) m</span>",
        // EN: <span class="chem">50sqrt(3) m</span>
        "<span class=\"chem\">50sqrt(3) m</span>",
        // EN: <span class="chem">25sqrt(3) m</span>
        "<span class=\"chem\">25sqrt(3) m</span>",
      ],
      hints: [
        // EN: Decode: three right-angled triangles. Two are vertical (one through A, one through B) and one is horizontal (A, M, B, with the right angle at M because South and East are perpendicular). Write every ground length in terms of h.
        "해석: 직각삼각형이 세 개 있어요. 두 개는 수직(하나는 A를 지나고 하나는 B를 지남)이고, 하나는 수평(A, M, B; 남쪽과 동쪽이 수직이므로 M에서 직각)이에요. 땅 위의 모든 길이를 h로 나타내세요.",
        // EN: Express both ground distances <span class="chem">AM</span> and <span class="chem">BM</span> in terms of <span class="chem">h</span>: <span class="chem">AM = h / tan 45° = h</span> and <span class="chem">BM = h / tan 30° = h sqrt(3)</span>.
        "두 지면 거리 <span class=\"chem\">AM</span>과 <span class=\"chem\">BM</span>을 <span class=\"chem\">h</span>로 나타내세요: <span class=\"chem\">AM = h / tan 45° = h</span>이고 <span class=\"chem\">BM = h / tan 30° = h sqrt(3)</span>이에요.",
        // EN: Since <span class="chem">A</span> is due South and <span class="chem">B</span> is due East of <span class="chem">M</span>, <span class="chem">angle AMB = 90°</span> on the ground, so <span class="chem">AM^2 + BM^2 = 100^2</span>.
        "<span class=\"chem\">A</span>는 <span class=\"chem\">M</span>의 정남쪽, <span class=\"chem\">B</span>는 정동쪽이므로 지면에서 <span class=\"chem\">angle AMB = 90°</span>가 되어 <span class=\"chem\">AM^2 + BM^2 = 100^2</span>이에요.",
      ],
      // EN: <div class="worked__math"><i>AM</i> = <i>h</i> cot 45° = <i>h</i>, &nbsp; <i>BM</i> = <i>h</i> cot 30° = <i>h</i>√3</div><div class="worked__math"><i>AM</i><sup>2</sup> + <i>BM</i><sup>2</sup> = <i>h</i><sup>2</sup> + 3<i>h</i><sup>2</sup> = 4<i>h</i><sup>2</sup> = 100<sup>2</sup> ⇒ 2<i>h</i> = 100 ⇒ <i>h</i> = <b>50 m</b></div>
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

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ko', 't3-1.q', {
  questions: {

    // ── t3-1-q019 · numeric · foundation · SL · SL 3.4 · 2 marks
    "t3-1-q019": {
      // EN: <p>An angle measures <span class="chem">(3pi)/5</span> radians. Convert this angle to <strong>degrees</strong>.</p>
      stem: "<p>어떤 각의 크기가 <span class=\"chem\">(3pi)/5</span>라디안이에요. 이 각을 <strong>도</strong>로 바꾸시오.</p>",
      hints: [
        // EN: To change radians to degrees, multiply by <span class="chem">180°/pi</span>.
        "라디안을 도로 바꾸려면 <span class=\"chem\">180°/pi</span>를 곱하세요.",
        // EN: The <span class="chem">pi</span> cancels, leaving <span class="chem">(3 × 180°)/5</span>.
        "<span class=\"chem\">pi</span>가 약분되어 <span class=\"chem\">(3 × 180°)/5</span>가 남아요.",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>3<i>π</i></span><span>5</span></span> × <span class="frac"><span>180°</span><span><i>π</i></span></span> = <span class="frac"><span>540°</span><span>5</span></span> = <b>108°</b></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>3<i>π</i></span><span>5</span></span> × <span class=\"frac\"><span>180°</span><span><i>π</i></span></span> = <span class=\"frac\"><span>540°</span><span>5</span></span> = <b>108°</b></div>",
    },

    // ── t3-1-q020 · numeric · foundation · SL · SL 3.1 · 3 marks
    "t3-1-q020": {
      // EN: <p>A <strong>solid</strong> hemisphere has radius <span class="mono">3.5 cm</span>. Calculate its <strong>total</strong> surface area (curved surface and flat circular face), in <span class="unit">cm2</span> to 3 significant figures. (No angles are involved.)</p>
      stem: "<p><strong>속이 찬</strong> 반구의 반지름이 <span class=\"mono\">3.5 cm</span>예요. 이 반구의 <strong>전체</strong> 겉넓이(곡면과 평평한 원 모양의 면)를 <span class=\"unit\">cm2</span> 단위로 계산하고 (Calculate) 유효숫자 3자리로 답하시오. (각은 쓰이지 않아요.)</p>",
      hints: [
        // EN: The curved surface of a hemisphere is half of a sphere: <span class="chem">2pi r^2</span>.
        "반구의 곡면은 구의 겉넓이의 절반이에요: <span class=\"chem\">2pi r^2</span>.",
        // EN: A solid hemisphere also has a flat circular face of area <span class="chem">pi r^2</span>, so the total is <span class="chem">3pi r^2</span>.
        "속이 찬 반구에는 넓이가 <span class=\"chem\">pi r^2</span>인 평평한 원 모양의 면도 있으므로, 전체는 <span class=\"chem\">3pi r^2</span>이에요.",
      ],
      // EN: <div class="worked__math"><i>A</i> = 2<i>π</i>(3.5)<sup>2</sup> + <i>π</i>(3.5)<sup>2</sup> = 3<i>π</i>(12.25) = 36.75<i>π</i> ≈ <b>115 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\"><i>A</i> = 2<i>π</i>(3.5)<sup>2</sup> + <i>π</i>(3.5)<sup>2</sup> = 3<i>π</i>(12.25) = 36.75<i>π</i> ≈ <b>115 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q021 · numeric · foundation · SL · SL 3.2 · 2 marks
    "t3-1-q021": {
      // EN: <p>In triangle <span class="chem">PQR</span>, <span class="chem">PQ = 8 cm</span>, <span class="chem">PR = 5 cm</span> and the angle between them is <span class="chem">angle QPR = 150°</span> (degrees). Find the exact area of the triangle, in <span class="unit">cm2</span>.</p>
      stem: "<p>삼각형 <span class=\"chem\">PQR</span>에서 <span class=\"chem\">PQ = 8 cm</span>, <span class=\"chem\">PR = 5 cm</span>이고 두 변 사이의 끼인각은 <span class=\"chem\">angle QPR = 150°</span>(도)예요. 이 삼각형의 넓이의 정확한 값을 <span class=\"unit\">cm2</span> 단위로 구하시오 (Find).</p>",
      hints: [
        // EN: Two sides and the angle between them: use <span class="chem">A = (1/2)ab sin C</span>.
        "두 변과 그 끼인각을 알므로 <span class=\"chem\">A = (1/2)ab sin C</span>를 쓰세요.",
        // EN: <span class="chem">sin 150° = sin 30° = 1/2</span>.
        "<span class=\"chem\">sin 150° = sin 30° = 1/2</span>이에요.",
      ],
      // EN: <div class="worked__math"><i>A</i> = <span class="frac"><span>1</span><span>2</span></span>(8)(5) sin 150° = 20 × <span class="frac"><span>1</span><span>2</span></span> = <b>10 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\"><i>A</i> = <span class=\"frac\"><span>1</span><span>2</span></span>(8)(5) sin 150° = 20 × <span class=\"frac\"><span>1</span><span>2</span></span> = <b>10 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q022 · numeric · foundation · SL · SL 3.3 · 2 marks
    "t3-1-q022": {
      // EN: <p>A point <span class="chem">A</span> on level ground is <span class="mono">40 m</span> from the foot of a vertical tower. The angle of elevation of the top of the tower from <span class="chem">A</span> is <span class="mono">37°</span> (degrees). Find the height of the tower in metres, to 3 significant figures.</p>
      stem: "<p>수평인 지면 위의 점 <span class=\"chem\">A</span>는 수직인 탑의 밑에서 <span class=\"mono\">40 m</span> 떨어져 있어요. <span class=\"chem\">A</span>에서 탑의 꼭대기를 올려다본 각은 <span class=\"mono\">37°</span>(도)예요. 탑의 높이를 미터 단위로 구하고 (Find) 유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: The tower, the ground and the line of sight form a right-angled triangle. The height is <strong>opposite</strong> the <span class="mono">37°</span> angle and the <span class="mono">40 m</span> is <strong>adjacent</strong>.
        "탑, 지면, 시선이 직각삼각형을 이뤄요. 높이는 <span class=\"mono\">37°</span> 각의 <strong>대변</strong>이고 <span class=\"mono\">40 m</span>는 <strong>이웃변</strong>이에요.",
        // EN: Use <span class="chem">h = 40 tan 37°</span>, with your GDC in degree mode.
        "GDC를 도(degree) 모드로 두고 <span class=\"chem\">h = 40 tan 37°</span>를 쓰세요.",
      ],
      // EN: <div class="worked__math"><i>h</i> = 40 tan 37° ≈ 40 × 0.75355 ≈ <b>30.1 m</b></div>
      solution: "<div class=\"worked__math\"><i>h</i> = 40 tan 37° ≈ 40 × 0.75355 ≈ <b>30.1 m</b></div>",
    },

    // ── t3-1-q023 · numeric · exam · SL · SL 3.2 · 3 marks
    "t3-1-q023": {
      // EN: <p>In triangle <span class="chem">ABC</span>, <span class="chem">angle BAC = 48°</span>, <span class="chem">angle ABC = 71°</span> (both in degrees) and <span class="chem">BC = 9.4 cm</span>. Find <span class="chem">AC</span>, in <span class="unit">cm</span> to 3 significant figures.</p>
      stem: "<p>삼각형 <span class=\"chem\">ABC</span>에서 <span class=\"chem\">angle BAC = 48°</span>, <span class=\"chem\">angle ABC = 71°</span>(둘 다 도)이고 <span class=\"chem\">BC = 9.4 cm</span>예요. <span class=\"chem\">AC</span>를 <span class=\"unit\">cm</span> 단위로 구하고 (Find) 유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: <span class="chem">BC</span> is opposite <span class="chem">angle A</span> and <span class="chem">AC</span> is opposite <span class="chem">angle B</span>: a side–angle pair is known, so use the sine rule.
        "<span class=\"chem\">BC</span>는 <span class=\"chem\">angle A</span>의 대변이고 <span class=\"chem\">AC</span>는 <span class=\"chem\">angle B</span>의 대변이에요. 변과 대각의 쌍을 알므로 사인법칙을 쓰세요.",
        // EN: <span class="chem">AC / (sin 71°) = 9.4 / (sin 48°)</span>.
        "<span class=\"chem\">AC / (sin 71°) = 9.4 / (sin 48°)</span>.",
      ],
      // EN: <div class="worked__math"><i>AC</i> = <span class="frac"><span>9.4 sin 71°</span><span>sin 48°</span></span> = <span class="frac"><span>8.8879</span><span>0.74314</span></span> ≈ <b>12.0 cm</b> (11.96)</div>
      solution: "<div class=\"worked__math\"><i>AC</i> = <span class=\"frac\"><span>9.4 sin 71°</span><span>sin 48°</span></span> = <span class=\"frac\"><span>8.8879</span><span>0.74314</span></span> ≈ <b>12.0 cm</b> (11.96)</div>",
    },

    // ── t3-1-q024 · numeric · exam · SL · SL 3.2 · 3 marks
    "t3-1-q024": {
      // EN: <p>A triangle has sides of length <span class="mono">7.3 cm</span>, <span class="mono">9.1 cm</span> and <span class="mono">12.6 cm</span>. Find the size of its <strong>largest</strong> angle, in <strong>degrees</strong> to 3 significant figures.</p>
      stem: "<p>세 변의 길이가 <span class=\"mono\">7.3 cm</span>, <span class=\"mono\">9.1 cm</span>, <span class=\"mono\">12.6 cm</span>인 삼각형이 있어요. 이 삼각형의 <strong>가장 큰</strong> 각의 크기를 <strong>도</strong> 단위로 구하고 (Find) 유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: The largest angle is opposite the longest side, <span class="mono">12.6 cm</span>.
        "가장 큰 각은 가장 긴 변 <span class=\"mono\">12.6 cm</span>의 대각이에요.",
        // EN: Use <span class="chem">cos C = (a^2 + b^2 - c^2)/(2ab)</span> with <span class="chem">c = 12.6</span>.
        "<span class=\"chem\">c = 12.6</span>으로 두고 <span class=\"chem\">cos C = (a^2 + b^2 - c^2)/(2ab)</span>를 쓰세요.",
      ],
      // EN: <div class="worked__math">cos <i>C</i> = <span class="frac"><span>7.3<sup>2</sup> + 9.1<sup>2</sup> − 12.6<sup>2</sup></span><span>2(7.3)(9.1)</span></span> = <span class="frac"><span>−22.66</span><span>132.86</span></span> ≈ −0.17056</div><div class="worked__math"><i>C</i> ≈ <b>99.8°</b> (obtuse, as the cosine is negative)</div>
      solution: "<div class=\"worked__math\">cos <i>C</i> = <span class=\"frac\"><span>7.3<sup>2</sup> + 9.1<sup>2</sup> − 12.6<sup>2</sup></span><span>2(7.3)(9.1)</span></span> = <span class=\"frac\"><span>−22.66</span><span>132.86</span></span> ≈ −0.17056</div><div class=\"worked__math\"><i>C</i> ≈ <b>99.8°</b> (코사인 값이 음수이므로 둔각)</div>",
    },

    // ── t3-1-q025 · numeric · exam · SL · SL 3.2 · 5 marks
    "t3-1-q025": {
      // EN: <p>In triangle <span class="chem">ABC</span>, <span class="chem">BC = 11 cm</span>, <span class="chem">angle BAC = 40°</span> and <span class="chem">angle ABC = 65°</span> (angles in degrees). Find the area of triangle <span class="chem">ABC</span>, in <span class="unit">cm2</span> to 3 significant figures.</p>
      stem: "<p>삼각형 <span class=\"chem\">ABC</span>에서 <span class=\"chem\">BC = 11 cm</span>, <span class=\"chem\">angle BAC = 40°</span>, <span class=\"chem\">angle ABC = 65°</span>(각은 도)예요. 삼각형 <span class=\"chem\">ABC</span>의 넓이를 <span class=\"unit\">cm2</span> 단위로 구하고 (Find) 유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: Decode: you need two sides and the angle between them for <span class="chem">(1/2)ab sin C</span>, but only one side is given. Find a second side first with the sine rule.
        "해석: <span class=\"chem\">(1/2)ab sin C</span>를 쓰려면 두 변과 그 끼인각이 필요하지만, 주어진 변은 하나뿐이에요. 먼저 사인법칙으로 두 번째 변을 구하세요.",
        // EN: <span class="chem">angle C = 180° - 40° - 65° = 75°</span> and <span class="chem">AC = (11 sin 65°)/(sin 40°)</span>.
        "<span class=\"chem\">angle C = 180° - 40° - 65° = 75°</span>이고 <span class=\"chem\">AC = (11 sin 65°)/(sin 40°)</span>예요.",
        // EN: Then area <span class="chem">= (1/2)(BC)(AC) sin C</span>, using the angle <span class="chem">C</span> between <span class="chem">BC</span> and <span class="chem">AC</span>.
        "그다음 <span class=\"chem\">BC</span>와 <span class=\"chem\">AC</span> 사이의 각 <span class=\"chem\">C</span>를 써서 넓이 <span class=\"chem\">= (1/2)(BC)(AC) sin C</span>를 구하세요.",
      ],
      // EN: <div class="worked__math"><i>C</i> = 75°, &nbsp; <i>AC</i> = <span class="frac"><span>11 sin 65°</span><span>sin 40°</span></span> ≈ 15.510 cm</div><div class="worked__math">Area = <span class="frac"><span>1</span><span>2</span></span>(11)(15.510) sin 75° ≈ <b>82.4 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\"><i>C</i> = 75°, &nbsp; <i>AC</i> = <span class=\"frac\"><span>11 sin 65°</span><span>sin 40°</span></span> ≈ 15.510 cm</div><div class=\"worked__math\">넓이 = <span class=\"frac\"><span>1</span><span>2</span></span>(11)(15.510) sin 75° ≈ <b>82.4 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q026 · short · exam · SL · SL 3.2, 3.3 · 8 marks
    "t3-1-q026": {
      // EN: <p>A yacht leaves harbour <span class="chem">H</span> and sails <span class="mono">18 km</span> on a bearing of <span class="mono">072°</span> to a buoy <span class="chem">B</span>. It then sails <span class="mono">25 km</span> on a bearing of <span class="mono">195°</span> to a point <span class="chem">C</span>. All angles are in degrees.<br>(a) Show that <span class="chem">angle HBC = 57°</span>. <strong>[2 marks]</strong><br>(b) Find the distance <span class="chem">HC</span>, in km to 3 significant figures. <strong>[3 marks]</strong><br>(c) Find the bearing of <span class="chem">H</span> from <span class="chem">C</span>, to the nearest degree. <strong>[3 marks]</strong></p>
      stem: "<p>요트가 항구 <span class=\"chem\">H</span>를 떠나 방위각 <span class=\"mono\">072°</span> 방향으로 <span class=\"mono\">18 km</span> 항해해 부표 <span class=\"chem\">B</span>에 도착해요. 그다음 방위각 <span class=\"mono\">195°</span> 방향으로 <span class=\"mono\">25 km</span> 항해해 지점 <span class=\"chem\">C</span>에 도착해요. 모든 각은 도 단위예요.<br>(a) <span class=\"chem\">angle HBC = 57°</span>임을 보이시오 (Show that). <strong>[2 marks]</strong><br>(b) 거리 <span class=\"chem\">HC</span>를 km 단위로 구하고 (Find) 유효숫자 3자리로 답하시오. <strong>[3 marks]</strong><br>(c) <span class=\"chem\">C</span>에서 본 <span class=\"chem\">H</span>의 방위각을 가장 가까운 도 단위로 구하시오. <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: draw a North line at every point. Part (a) is a back-bearing question; parts (b) and (c) are the cosine rule and then the sine rule in triangle <span class="chem">HBC</span>.
        "해석: 모든 점에 북쪽 방향선을 그리세요. (a)는 역방위각 문제이고, (b)와 (c)는 삼각형 <span class=\"chem\">HBC</span>에서 코사인법칙, 그다음 사인법칙을 쓰는 문제예요.",
        // EN: For (c), find <span class="chem">angle BCH</span> first. At <span class="chem">C</span>, the direction to <span class="chem">B</span> is the bearing <span class="mono">015°</span> (the back-bearing of <span class="mono">195°</span>).
        "(c)에서는 먼저 <span class=\"chem\">angle BCH</span>를 구하세요. <span class=\"chem\">C</span>에서 <span class=\"chem\">B</span>로 가는 방향은 방위각 <span class=\"mono\">015°</span>(<span class=\"mono\">195°</span>의 역방위각)예요.",
        // EN: From the diagram, <span class="chem">H</span> is anticlockwise from <span class="chem">B</span> when seen from <span class="chem">C</span>, so subtract <span class="chem">angle BCH</span> from <span class="mono">015°</span> (adding <span class="mono">360°</span>).
        "그림에서 <span class=\"chem\">C</span>에서 보면 <span class=\"chem\">H</span>는 <span class=\"chem\">B</span>에서 시계 반대 방향 쪽에 있으므로, <span class=\"mono\">015°</span>에서 <span class=\"chem\">angle BCH</span>를 빼세요(<span class=\"mono\">360°</span>를 더해요).",
      ],
      // EN: <p><b>Decode.</b> Bearings give directions; the angles inside the triangle come from North lines and back-bearings.</p><div class="worked__math">(a) Bearing <i>B</i> → <i>H</i> = 252°, so ∠<i>HBC</i> = 252° − 195° = 57°.</div><div class="worked__math">(b) <i>HC</i><sup>2</sup> = 18<sup>2</sup> + 25<sup>2</sup> − 2(18)(25) cos 57° ≈ 458.83 ⇒ <i>HC</i> ≈ <b>21.4 km</b></div><div class="worked__math">(c) sin ∠<i>BCH</i> = <span class="frac"><span>18 sin 57°</span><span>21.420</span></span> ≈ 0.70476 ⇒ ∠<i>BCH</i> ≈ 44.81° (acute, since it is opposite the shortest side)</div><div class="worked__math">Bearing of <i>H</i> from <i>C</i> = 015° − 44.81° + 360° ≈ <b>330°</b></div>
      solution: "<p><b>해석:</b> 방위각은 방향을 나타내요. 삼각형 안의 각은 북쪽 방향선과 역방위각에서 얻어요.</p><div class=\"worked__math\">(a) 방위각 <i>B</i> → <i>H</i> = 252°이므로 ∠<i>HBC</i> = 252° − 195° = 57°.</div><div class=\"worked__math\">(b) <i>HC</i><sup>2</sup> = 18<sup>2</sup> + 25<sup>2</sup> − 2(18)(25) cos 57° ≈ 458.83 ⇒ <i>HC</i> ≈ <b>21.4 km</b></div><div class=\"worked__math\">(c) sin ∠<i>BCH</i> = <span class=\"frac\"><span>18 sin 57°</span><span>21.420</span></span> ≈ 0.70476 ⇒ ∠<i>BCH</i> ≈ 44.81° (가장 짧은 변의 대각이므로 예각)</div><div class=\"worked__math\"><i>C</i>에서 본 <i>H</i>의 방위각 = 015° − 44.81° + 360° ≈ <b>330°</b></div>",
      // EN: <p>(a) The bearing of <i>H</i> from <i>B</i> is 072° + 180° = 252°, so ∠<i>HBC</i> = 252° − 195° = 57°. (b) <i>HC</i> ≈ 21.4 km (21.420). (c) ∠<i>BCH</i> ≈ 44.8°, so the bearing of <i>H</i> from <i>C</i> is 015° − 44.8° + 360° ≈ <b>330°</b>.</p>
      answer: "<p>(a) <i>B</i>에서 본 <i>H</i>의 방위각은 072° + 180° = 252°이므로 ∠<i>HBC</i> = 252° − 195° = 57°. (b) <i>HC</i> ≈ 21.4 km (21.420). (c) ∠<i>BCH</i> ≈ 44.8°이므로 <i>C</i>에서 본 <i>H</i>의 방위각은 015° − 44.8° + 360° ≈ <b>330°</b>.</p>",
      markscheme: [
        // EN: M1: Back-bearing of H from B is 072° + 180° = 252° (or uses the alternate angle 72° with North lines at H and B).
        "M1: B에서 본 H의 역방위각은 072° + 180° = 252° (또는 H와 B에 북쪽 방향선을 긋고 엇각 72°를 이용함).",
        // EN: A1: ∠HBC = 252° − 195° = 57°. AG: angle HBC = 57°; the given line itself earns no mark.
        "A1: ∠HBC = 252° − 195° = 57°. AG: angle HBC = 57°; 주어진 결론 줄 자체에는 점수가 없음.",
        // EN: M1: Cosine rule in triangle HBC: HC² = 18² + 25² − 2(18)(25) cos 57°.
        "M1: 삼각형 HBC에서 코사인법칙: HC² = 18² + 25² − 2(18)(25) cos 57°.",
        // EN: A1: HC² ≈ 458.83.
        "A1: HC² ≈ 458.83.",
        // EN: A1: HC ≈ 21.4 km (21.420).
        "A1: HC ≈ 21.4 km (21.420).",
        // EN: M1: Finds an angle of triangle HBC at C, e.g. sin(∠BCH) = 18 sin 57° / 21.420, so ∠BCH ≈ 44.81°.
        "M1: 삼각형 HBC의 C에서의 각을 구함. 예: sin(∠BCH) = 18 sin 57° / 21.420이므로 ∠BCH ≈ 44.81°.",
        // EN: M1: Uses the bearing of B from C, 195° − 180° = 015°, and turns anticlockwise through ∠BCH (H lies to the west of line CB).
        "M1: C에서 본 B의 방위각 195° − 180° = 015°를 이용하고, ∠BCH만큼 시계 반대 방향으로 돎 (H는 직선 CB의 서쪽에 있음).",
        // EN: A1: Bearing of H from C = 360° + 15° − 44.81° ≈ 330°.
        "A1: C에서 본 H의 방위각 = 360° + 15° − 44.81° ≈ 330°.",
      ],
    },

    // ── t3-1-q027 · numeric · exam · SL · SL 3.5 · 5 marks
    "t3-1-q027": {
      // EN: <p>In triangle <span class="chem">ABC</span>, <span class="chem">angle BAC = 35°</span> (degrees), <span class="chem">BC = 7 cm</span> and <span class="chem">AC = 11 cm</span>. Two different triangles fit this information. Find the <strong>smaller</strong> possible length of <span class="chem">AB</span>, in cm to 3 significant figures.</p>
      stem: "<p>삼각형 <span class=\"chem\">ABC</span>에서 <span class=\"chem\">angle BAC = 35°</span>(도), <span class=\"chem\">BC = 7 cm</span>, <span class=\"chem\">AC = 11 cm</span>예요. 이 조건에 맞는 서로 다른 삼각형이 두 개 있어요. <span class=\"chem\">AB</span>의 가능한 길이 중 <strong>더 작은</strong> 값을 cm 단위로 구하고 (Find) 유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: Decode: two sides and a non-included angle (SSA) with the side opposite the angle shorter than the other side: this is the ambiguous case. You want the third side, not an angle.
        "해석: 두 변과 끼인각이 아닌 각(SSA)이 주어지고, 그 각의 대변이 다른 변보다 짧아요. 삼각형이 두 개 만들어지는 경우(모호한 경우)예요. 구하는 것은 각이 아니라 세 번째 변이에요.",
        // EN: Let <span class="chem">AB = x</span>. The cosine rule with the known angle gives a quadratic: <span class="chem">7^2 = 11^2 + x^2 - 2(11)x cos 35°</span>.
        "<span class=\"chem\">AB = x</span>로 두세요. 주어진 각으로 코사인법칙을 쓰면 이차방정식이 나와요: <span class=\"chem\">7^2 = 11^2 + x^2 - 2(11)x cos 35°</span>.",
        // EN: Solve <span class="chem">x^2 - (22 cos 35°)x + 72 = 0</span> with your GDC; both roots are positive, and you want the smaller one.
        "GDC로 <span class=\"chem\">x^2 - (22 cos 35°)x + 72 = 0</span>을 푸세요. 두 근 모두 양수이고, 더 작은 근을 구하면 돼요.",
      ],
      // EN: <p><b>Decode.</b> SSA with 11 sin 35° ≈ 6.31 &lt; 7 &lt; 11, so there are two triangles; the cosine rule turns this into a quadratic in <i>AB</i>.</p><div class="worked__math">49 = 121 + <i>x</i><sup>2</sup> − 22<i>x</i> cos 35° ⇒ <i>x</i><sup>2</sup> − 18.021<i>x</i> + 72 = 0</div><div class="worked__math"><i>x</i> ≈ 5.979 or 12.043 ⇒ smaller <i>AB</i> ≈ <b>5.98 cm</b></div>
      solution: "<p><b>해석:</b> SSA이고 11 sin 35° ≈ 6.31 &lt; 7 &lt; 11이므로 삼각형이 두 개예요. 코사인법칙으로 <i>AB</i>에 대한 이차방정식이 돼요.</p><div class=\"worked__math\">49 = 121 + <i>x</i><sup>2</sup> − 22<i>x</i> cos 35° ⇒ <i>x</i><sup>2</sup> − 18.021<i>x</i> + 72 = 0</div><div class=\"worked__math\"><i>x</i> ≈ 5.979 또는 12.043 ⇒ 더 작은 <i>AB</i> ≈ <b>5.98 cm</b></div>",
    },

    // ── t3-1-q028 · short · exam · SL · SL 3.2, 3.5 · 6 marks
    "t3-1-q028": {
      // EN: <p>In triangle <span class="chem">PQR</span>, <span class="chem">PQ = 15 cm</span>, <span class="chem">QR = 10 cm</span> and <span class="chem">angle QPR = 38°</span> (degrees).<br>(a) Find the two possible values of <span class="chem">angle PRQ</span>, in degrees. <strong>[3 marks]</strong><br>(b) Find the difference between the two possible areas of triangle <span class="chem">PQR</span>, in <span class="unit">cm2</span>. <strong>[3 marks]</strong><br>Give angles to 1 decimal place and areas to 3 significant figures.</p>
      stem: "<p>삼각형 <span class=\"chem\">PQR</span>에서 <span class=\"chem\">PQ = 15 cm</span>, <span class=\"chem\">QR = 10 cm</span>, <span class=\"chem\">angle QPR = 38°</span>(도)예요.<br>(a) <span class=\"chem\">angle PRQ</span>의 가능한 두 값을 도 단위로 구하시오 (Find). <strong>[3 marks]</strong><br>(b) 삼각형 <span class=\"chem\">PQR</span>의 가능한 두 넓이의 차를 <span class=\"unit\">cm2</span> 단위로 구하시오. <strong>[3 marks]</strong><br>각은 소수점 아래 1자리까지, 넓이는 유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: <span class="chem">QR</span> is opposite the given <span class="mono">38°</span> and is shorter than <span class="chem">PQ</span>: expect two triangles.
        "<span class=\"chem\">QR</span>는 주어진 <span class=\"mono\">38°</span>의 대변이고 <span class=\"chem\">PQ</span>보다 짧으므로, 삼각형이 두 개일 것으로 예상할 수 있어요.",
        // EN: Use the sine rule for <span class="chem">angle PRQ</span>; the second value is <span class="chem">180° - angle PRQ</span>.
        "사인법칙으로 <span class=\"chem\">angle PRQ</span>를 구하세요. 두 번째 값은 <span class=\"chem\">180° - angle PRQ</span>예요.",
        // EN: For each triangle, the angle between <span class="chem">PQ</span> and <span class="chem">QR</span> is <span class="chem">angle PQR = 180° - 38° - angle PRQ</span>.
        "각 삼각형에서 <span class=\"chem\">PQ</span>와 <span class=\"chem\">QR</span> 사이의 각은 <span class=\"chem\">angle PQR = 180° - 38° - angle PRQ</span>예요.",
      ],
      // EN: <div class="worked__math">(a) sin <i>R</i> = <span class="frac"><span>15 sin 38°</span><span>10</span></span> ≈ 0.92349 ⇒ <i>R</i> ≈ 67.44° or 112.56°</div><div class="worked__math">(b) <i>Q</i> ≈ 74.56° or 29.44°; areas = 75 sin <i>Q</i> ≈ 72.29 and 36.87 ⇒ difference ≈ <b>35.4 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\">(a) sin <i>R</i> = <span class=\"frac\"><span>15 sin 38°</span><span>10</span></span> ≈ 0.92349 ⇒ <i>R</i> ≈ 67.44° 또는 112.56°</div><div class=\"worked__math\">(b) <i>Q</i> ≈ 74.56° 또는 29.44°; 넓이 = 75 sin <i>Q</i> ≈ 72.29와 36.87 ⇒ 차 ≈ <b>35.4 cm<sup>2</sup></b></div>",
      // EN: <p>(a) ∠<i>PRQ</i> ≈ 67.4° or 112.6°. (b) The areas are about 72.3 cm² and 36.9 cm², a difference of about <b>35.4 cm²</b>.</p>
      answer: "<p>(a) ∠<i>PRQ</i> ≈ 67.4° 또는 112.6°. (b) 넓이는 약 72.3 cm²와 36.9 cm²이고, 차는 약 <b>35.4 cm²</b>.</p>",
      markscheme: [
        // EN: M1: Sine rule: sin(∠PRQ)/15 = sin 38°/10, so sin(∠PRQ) ≈ 0.92349.
        "M1: 사인법칙: sin(∠PRQ)/15 = sin 38°/10이므로 sin(∠PRQ) ≈ 0.92349.",
        // EN: A1: ∠PRQ ≈ 67.4°.
        "A1: ∠PRQ ≈ 67.4°.",
        // EN: A1: or ∠PRQ ≈ 180° − 67.4° = 112.6°.
        "A1: 또는 ∠PRQ ≈ 180° − 67.4° = 112.6°.",
        // EN: M1: Finds ∠PQR = 180° − 38° − ∠PRQ in each case (74.6° and 29.4°) and uses area = (1/2)(15)(10) sin(∠PQR).
        "M1: 각 경우에 ∠PQR = 180° − 38° − ∠PRQ (74.6°와 29.4°)를 구하고 넓이 = (1/2)(15)(10) sin(∠PQR)을 이용함.",
        // EN: A1: Areas ≈ 72.3 cm² and 36.9 cm².
        "A1: 넓이 ≈ 72.3 cm²와 36.9 cm².",
        // EN: A1: Difference ≈ 35.4 cm².
        "A1: 차 ≈ 35.4 cm².",
      ],
    },

    // ── t3-1-q029 · numeric · exam · SL · SL 3.1 · 4 marks
    "t3-1-q029": {
      // EN: <p>A right pyramid <span class="chem">VABCD</span> has a square base <span class="chem">ABCD</span> of side <span class="mono">10 cm</span> and vertical height <span class="mono">14 cm</span>. Find the angle between the sloping edge <span class="chem">VA</span> and the base <span class="chem">ABCD</span>, in <strong>degrees</strong> to 3 significant figures.</p>
      stem: "<p>직각뿔 <span class=\"chem\">VABCD</span>의 밑면 <span class=\"chem\">ABCD</span>는 한 변이 <span class=\"mono\">10 cm</span>인 정사각형이고, 높이는 <span class=\"mono\">14 cm</span>예요. 옆모서리 <span class=\"chem\">VA</span>와 밑면 <span class=\"chem\">ABCD</span>가 이루는 각을 <strong>도</strong> 단위로 구하고 (Find) 유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: The apex <span class="chem">V</span> is directly above the centre <span class="chem">M</span> of the square. The projection of <span class="chem">VA</span> on the base is <span class="chem">MA</span>.
        "꼭짓점 <span class=\"chem\">V</span>는 정사각형의 중심 <span class=\"chem\">M</span> 바로 위에 있어요. <span class=\"chem\">VA</span>의 밑면 위 정사영은 <span class=\"chem\">MA</span>예요.",
        // EN: <span class="chem">MA</span> is half the diagonal of the square: <span class="chem">MA = (1/2)sqrt(10^2 + 10^2) = 5sqrt(2)</span>.
        "<span class=\"chem\">MA</span>는 정사각형 대각선의 절반이에요: <span class=\"chem\">MA = (1/2)sqrt(10^2 + 10^2) = 5sqrt(2)</span>.",
        // EN: In right-angled triangle <span class="chem">VMA</span>, <span class="chem">tan(angle VAM) = 14/(5sqrt(2))</span>.
        "직각삼각형 <span class=\"chem\">VMA</span>에서 <span class=\"chem\">tan(angle VAM) = 14/(5sqrt(2))</span>예요.",
      ],
      // EN: <div class="worked__math"><i>MA</i> = 5√2 ≈ 7.0711 cm, &nbsp; tan ∠<i>VAM</i> = <span class="frac"><span>14</span><span>7.0711</span></span> ≈ 1.9799</div><div class="worked__math">∠<i>VAM</i> ≈ <b>63.2°</b></div>
      solution: "<div class=\"worked__math\"><i>MA</i> = 5√2 ≈ 7.0711 cm, &nbsp; tan ∠<i>VAM</i> = <span class=\"frac\"><span>14</span><span>7.0711</span></span> ≈ 1.9799</div><div class=\"worked__math\">∠<i>VAM</i> ≈ <b>63.2°</b></div>",
    },

    // ── t3-1-q030 · numeric · exam · SL · SL 3.1, 3.2 · 5 marks
    "t3-1-q030": {
      // EN: <p>A cuboid <span class="chem">ABCDEFGH</span> has base <span class="chem">ABCD</span> with <span class="chem">AB = 6 cm</span> and <span class="chem">AD = 4 cm</span>, and height <span class="chem">AE = 3 cm</span>. The top face is <span class="chem">EFGH</span>, with <span class="chem">E</span>, <span class="chem">F</span>, <span class="chem">G</span>, <span class="chem">H</span> vertically above <span class="chem">A</span>, <span class="chem">B</span>, <span class="chem">C</span>, <span class="chem">D</span>. The face diagonals <span class="chem">AF</span> and <span class="chem">AH</span> meet at <span class="chem">A</span>. Find the angle <span class="chem">FAH</span> between these two lines, in <strong>degrees</strong> to 3 significant figures.</p>
      stem: "<p>직육면체 <span class=\"chem\">ABCDEFGH</span>의 밑면 <span class=\"chem\">ABCD</span>는 <span class=\"chem\">AB = 6 cm</span>, <span class=\"chem\">AD = 4 cm</span>이고, 높이는 <span class=\"chem\">AE = 3 cm</span>예요. 윗면은 <span class=\"chem\">EFGH</span>이고, <span class=\"chem\">E</span>, <span class=\"chem\">F</span>, <span class=\"chem\">G</span>, <span class=\"chem\">H</span>는 각각 <span class=\"chem\">A</span>, <span class=\"chem\">B</span>, <span class=\"chem\">C</span>, <span class=\"chem\">D</span>의 바로 위에 있어요. 면의 대각선 <span class=\"chem\">AF</span>와 <span class=\"chem\">AH</span>는 <span class=\"chem\">A</span>에서 만나요. 두 직선 사이의 각 <span class=\"chem\">FAH</span>를 <strong>도</strong> 단위로 구하고 (Find) 유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: Decode: this is the angle between two intersecting lines in a solid. The two lines and the segment <span class="chem">FH</span> joining their ends form a triangle that is <strong>not</strong> right-angled, so find all three sides and use the cosine rule.
        "해석: 입체 안에서 만나는 두 직선 사이의 각이에요. 두 직선과 그 끝점을 잇는 선분 <span class=\"chem\">FH</span>가 이루는 삼각형은 직각삼각형이 <strong>아니므로</strong>, 세 변을 모두 구해 코사인법칙을 쓰세요.",
        // EN: Each side is a diagonal of a rectangular face: <span class="chem">AF = sqrt(6^2 + 3^2)</span>, <span class="chem">AH = sqrt(4^2 + 3^2)</span>, <span class="chem">FH = sqrt(6^2 + 4^2)</span>.
        "각 변은 직사각형 면의 대각선이에요: <span class=\"chem\">AF = sqrt(6^2 + 3^2)</span>, <span class=\"chem\">AH = sqrt(4^2 + 3^2)</span>, <span class=\"chem\">FH = sqrt(6^2 + 4^2)</span>.",
        // EN: <span class="chem">cos(angle FAH) = (AF^2 + AH^2 - FH^2)/(2 × AF × AH)</span>.
        "<span class=\"chem\">cos(angle FAH) = (AF^2 + AH^2 - FH^2)/(2 × AF × AH)</span>.",
      ],
      // EN: <p><b>Decode.</b> Angle between two lines meeting at A: build triangle AFH from three face diagonals.</p><div class="worked__math"><i>AF</i> = √45, &nbsp; <i>AH</i> = 5, &nbsp; <i>FH</i> = √52</div><div class="worked__math">cos ∠<i>FAH</i> = <span class="frac"><span>45 + 25 − 52</span><span>2(√45)(5)</span></span> = <span class="frac"><span>18</span><span>10√45</span></span> ≈ 0.26833 ⇒ ∠<i>FAH</i> ≈ <b>74.4°</b></div>
      solution: "<p><b>해석:</b> A에서 만나는 두 직선 사이의 각: 세 면의 대각선으로 삼각형 AFH를 만들어요.</p><div class=\"worked__math\"><i>AF</i> = √45, &nbsp; <i>AH</i> = 5, &nbsp; <i>FH</i> = √52</div><div class=\"worked__math\">cos ∠<i>FAH</i> = <span class=\"frac\"><span>45 + 25 − 52</span><span>2(√45)(5)</span></span> = <span class=\"frac\"><span>18</span><span>10√45</span></span> ≈ 0.26833 ⇒ ∠<i>FAH</i> ≈ <b>74.4°</b></div>",
    },

    // ── t3-1-q031 · numeric · exam · SL · SL 3.1 · 4 marks
    "t3-1-q031": {
      // EN: <p>An ice-cream model is a solid made of a right circular cone with a hemisphere on top. The cone and the hemisphere both have radius <span class="mono">3.2 cm</span>, and the total height of the model, from the tip of the cone to the top of the hemisphere, is <span class="mono">11 cm</span>. Find the volume of the model, in <span class="unit">cm3</span> to 3 significant figures. (No angles are involved.)</p>
      stem: "<p>아이스크림 모형은 직원뿔 위에 반구를 얹은 속이 찬 입체예요. 원뿔과 반구의 반지름은 모두 <span class=\"mono\">3.2 cm</span>이고, 원뿔의 끝에서 반구의 꼭대기까지 모형 전체의 높이는 <span class=\"mono\">11 cm</span>예요. 모형의 부피를 <span class=\"unit\">cm3</span> 단위로 구하고 (Find) 유효숫자 3자리로 답하시오. (각은 쓰이지 않아요.)</p>",
      hints: [
        // EN: The hemisphere adds its radius, <span class="mono">3.2 cm</span>, to the height. So the cone has height <span class="chem">11 - 3.2 = 7.8 cm</span>.
        "반구는 높이에 반지름 <span class=\"mono\">3.2 cm</span>만큼을 더해요. 따라서 원뿔의 높이는 <span class=\"chem\">11 - 3.2 = 7.8 cm</span>예요.",
        // EN: <span class="chem">V = (1/3)pi r^2 h + (2/3)pi r^3</span>.
        "<span class=\"chem\">V = (1/3)pi r^2 h + (2/3)pi r^3</span>.",
      ],
      // EN: <div class="worked__math">Cone height = 11 − 3.2 = 7.8 cm</div><div class="worked__math"><i>V</i> = <span class="frac"><span>1</span><span>3</span></span><i>π</i>(3.2)<sup>2</sup>(7.8) + <span class="frac"><span>2</span><span>3</span></span><i>π</i>(3.2)<sup>3</sup> ≈ 83.642 + 68.629 ≈ <b>152 cm<sup>3</sup></b></div>
      solution: "<div class=\"worked__math\">원뿔의 높이 = 11 − 3.2 = 7.8 cm</div><div class=\"worked__math\"><i>V</i> = <span class=\"frac\"><span>1</span><span>3</span></span><i>π</i>(3.2)<sup>2</sup>(7.8) + <span class=\"frac\"><span>2</span><span>3</span></span><i>π</i>(3.2)<sup>3</sup> ≈ 83.642 + 68.629 ≈ <b>152 cm<sup>3</sup></b></div>",
    },

    // ── t3-1-q032 · numeric · exam · SL · SL 3.1 · 4 marks
    "t3-1-q032": {
      // EN: <p>A right circular cone has volume <span class="mono">200 cm³</span> and vertical height <span class="mono">9 cm</span>. Find its <strong>curved</strong> surface area, in <span class="unit">cm2</span> to 3 significant figures. (No angles are involved.)</p>
      stem: "<p>부피가 <span class=\"mono\">200 cm³</span>이고 높이가 <span class=\"mono\">9 cm</span>인 직원뿔이 있어요. 이 원뿔의 <strong>옆넓이</strong>(곡면의 넓이)를 <span class=\"unit\">cm2</span> 단위로 구하고 (Find) 유효숫자 3자리로 답하시오. (각은 쓰이지 않아요.)</p>",
      hints: [
        // EN: Find the radius from <span class="chem">(1/3)pi r^2(9) = 200</span>.
        "<span class=\"chem\">(1/3)pi r^2(9) = 200</span>에서 반지름을 구하세요.",
        // EN: Then the slant height is <span class="chem">l = sqrt(r^2 + 9^2)</span>, and the curved surface area is <span class="chem">pi r l</span>. Keep full accuracy for <span class="chem">r</span>.
        "그러면 모선의 길이는 <span class=\"chem\">l = sqrt(r^2 + 9^2)</span>이고 옆넓이는 <span class=\"chem\">pi r l</span>이에요. <span class=\"chem\">r</span>는 반올림하지 말고 그대로 쓰세요.",
      ],
      // EN: <div class="worked__math">3<i>πr</i><sup>2</sup> = 200 ⇒ <i>r</i> = √(200/(3<i>π</i>)) ≈ 4.6066 cm</div><div class="worked__math"><i>l</i> = √(4.6066<sup>2</sup> + 81) ≈ 10.110 cm ⇒ <i>πrl</i> ≈ <b>146 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\">3<i>πr</i><sup>2</sup> = 200 ⇒ <i>r</i> = √(200/(3<i>π</i>)) ≈ 4.6066 cm</div><div class=\"worked__math\"><i>l</i> = √(4.6066<sup>2</sup> + 81) ≈ 10.110 cm ⇒ <i>πrl</i> ≈ <b>146 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q033 · numeric · exam · SL · SL 3.4 · 4 marks
    "t3-1-q033": {
      // EN: <p>A chord <span class="chem">AB</span> of length <span class="mono">10 cm</span> is drawn in a circle of radius <span class="mono">7 cm</span> and centre <span class="chem">O</span>. Find the length of the <strong>minor arc</strong> <span class="chem">AB</span>, in cm to 3 significant figures. Work in radians.</p>
      stem: "<p>중심이 <span class=\"chem\">O</span>이고 반지름이 <span class=\"mono\">7 cm</span>인 원에 길이 <span class=\"mono\">10 cm</span>인 현 <span class=\"chem\">AB</span>가 그어져 있어요. <strong>열호</strong> <span class=\"chem\">AB</span>의 길이를 cm 단위로 구하고 (Find) 유효숫자 3자리로 답하시오. 라디안으로 계산하시오.</p>",
      hints: [
        // EN: Triangle <span class="chem">OAB</span> is isosceles. The perpendicular from <span class="chem">O</span> bisects the chord and the angle: <span class="chem">sin(theta/2) = 5/7</span>.
        "삼각형 <span class=\"chem\">OAB</span>는 이등변삼각형이에요. <span class=\"chem\">O</span>에서 내린 수선은 현과 각을 이등분해요: <span class=\"chem\">sin(theta/2) = 5/7</span>.",
        // EN: Find <span class="chem">theta = 2 arcsin(5/7)</span> in <strong>radians</strong>, then use <span class="chem">l = r theta</span>.
        "<span class=\"chem\">theta = 2 arcsin(5/7)</span>을 <strong>라디안</strong>으로 구한 뒤 <span class=\"chem\">l = r theta</span>를 쓰세요.",
      ],
      // EN: <div class="worked__math"><i>θ</i> = 2 arcsin(5/7) ≈ 1.5912 rad (or by the cosine rule: cos <i>θ</i> = (49 + 49 − 100)/98)</div><div class="worked__math"><i>l</i> = 7 × 1.5912 ≈ <b>11.1 cm</b></div>
      solution: "<div class=\"worked__math\"><i>θ</i> = 2 arcsin(5/7) ≈ 1.5912 rad (또는 코사인법칙으로 cos <i>θ</i> = (49 + 49 − 100)/98)</div><div class=\"worked__math\"><i>l</i> = 7 × 1.5912 ≈ <b>11.1 cm</b></div>",
    },

    // ── t3-1-q034 · short · exam · SL · SL 3.4 · 7 marks
    "t3-1-q034": {
      // EN: <p>A flower bed is in the shape of a sector <span class="chem">OAB</span> of a circle with centre <span class="chem">O</span>, radius <span class="mono">4.5 m</span> and <span class="chem">angle AOB = 1.9</span> <strong>radians</strong>.<br>(a) Find the length of the arc <span class="chem">AB</span>. <strong>[2 marks]</strong><br>(b) A straight path is laid from <span class="chem">A</span> to <span class="chem">B</span>. Find the length of the path <span class="chem">AB</span>. <strong>[2 marks]</strong><br>(c) Find the area of the part of the flower bed between the path and the arc. <strong>[3 marks]</strong><br>Give answers to 3 significant figures.</p>
      stem: "<p>화단은 중심이 <span class=\"chem\">O</span>, 반지름이 <span class=\"mono\">4.5 m</span>이고 <span class=\"chem\">angle AOB = 1.9</span><strong>라디안</strong>인 부채꼴 <span class=\"chem\">OAB</span> 모양이에요.<br>(a) 호 <span class=\"chem\">AB</span>의 길이를 구하시오 (Find). <strong>[2 marks]</strong><br>(b) <span class=\"chem\">A</span>에서 <span class=\"chem\">B</span>까지 곧은 길을 냈어요. 길 <span class=\"chem\">AB</span>의 길이를 구하시오. <strong>[2 marks]</strong><br>(c) 화단에서 길과 호 사이에 있는 부분의 넓이를 구하시오. <strong>[3 marks]</strong><br>유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: The angle is in radians, so <span class="chem">l = r theta</span> and <span class="chem">A = (1/2)r^2 theta</span> apply directly. Set your GDC to radians.
        "각이 라디안이므로 <span class=\"chem\">l = r theta</span>와 <span class=\"chem\">A = (1/2)r^2 theta</span>를 바로 쓸 수 있어요. GDC를 라디안 모드로 두세요.",
        // EN: Segment = sector − triangle: <span class="chem">(1/2)r^2(theta - sin theta)</span>.
        "활꼴 = 부채꼴 − 삼각형: <span class=\"chem\">(1/2)r^2(theta - sin theta)</span>.",
      ],
      // EN: <div class="worked__math">(a) <i>l</i> = 4.5(1.9) = <b>8.55 m</b> &nbsp; (b) <i>AB</i> = 9 sin 0.95 ≈ <b>7.32 m</b></div><div class="worked__math">(c) <span class="frac"><span>1</span><span>2</span></span>(4.5)<sup>2</sup>(1.9 − sin 1.9) = 10.125(1.9 − 0.94630) ≈ <b>9.66 m<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\">(a) <i>l</i> = 4.5(1.9) = <b>8.55 m</b> &nbsp; (b) <i>AB</i> = 9 sin 0.95 ≈ <b>7.32 m</b></div><div class=\"worked__math\">(c) <span class=\"frac\"><span>1</span><span>2</span></span>(4.5)<sup>2</sup>(1.9 − sin 1.9) = 10.125(1.9 − 0.94630) ≈ <b>9.66 m<sup>2</sup></b></div>",
      // EN: <p>(a) 8.55 m; (b) 7.32 m; (c) 9.66 m².</p>
      answer: "<p>(a) 8.55 m; (b) 7.32 m; (c) 9.66 m².</p>",
      markscheme: [
        // EN: M1: Arc length l = rθ = 4.5 × 1.9.
        "M1: 호의 길이 l = rθ = 4.5 × 1.9.",
        // EN: A1: l = 8.55 m.
        "A1: l = 8.55 m.",
        // EN: M1: Chord by the cosine rule, AB² = 4.5² + 4.5² − 2(4.5)(4.5) cos 1.9 (or AB = 2(4.5) sin 0.95), in radian mode.
        "M1: 라디안 모드에서 코사인법칙으로 현을 구함: AB² = 4.5² + 4.5² − 2(4.5)(4.5) cos 1.9 (또는 AB = 2(4.5) sin 0.95).",
        // EN: A1: AB ≈ 7.32 m.
        "A1: AB ≈ 7.32 m.",
        // EN: M1: Sector area (1/2)(4.5)²(1.9) ≈ 19.2375 m².
        "M1: 부채꼴의 넓이 (1/2)(4.5)²(1.9) ≈ 19.2375 m².",
        // EN: M1: Subtracts triangle OAB, (1/2)(4.5)² sin 1.9 ≈ 9.581 m².
        "M1: 삼각형 OAB의 넓이 (1/2)(4.5)² sin 1.9 ≈ 9.581 m²를 뺌.",
        // EN: A1: Segment area ≈ 9.66 m².
        "A1: 활꼴의 넓이 ≈ 9.66 m².",
      ],
    },

    // ── t3-1-q035 · numeric · exam · SL · SL 3.4 · 2 marks
    "t3-1-q035": {
      // EN: <p>A sector of a circle has radius <span class="mono">9 cm</span> and central angle <span class="chem">(5pi)/6</span> radians. Find the exact length of its arc, in cm, as a multiple of <span class="chem">pi</span>.</p>
      stem: "<p>부채꼴의 반지름이 <span class=\"mono\">9 cm</span>이고 중심각이 <span class=\"chem\">(5pi)/6</span>라디안이에요. 호의 길이의 정확한 값을 <span class=\"chem\">pi</span>의 배수로, cm 단위로 구하시오 (Find).</p>",
      hints: [
        // EN: The angle is already in radians, so use <span class="chem">l = r theta</span>.
        "각이 이미 라디안이므로 <span class=\"chem\">l = r theta</span>를 쓰세요.",
        // EN: Simplify <span class="chem">9 × (5pi)/6</span>.
        "<span class=\"chem\">9 × (5pi)/6</span>을 간단히 하세요.",
      ],
      // EN: <div class="worked__math"><i>l</i> = 9 × <span class="frac"><span>5<i>π</i></span><span>6</span></span> = <span class="frac"><span>45<i>π</i></span><span>6</span></span> = <b><span class="frac"><span>15<i>π</i></span><span>2</span></span> cm</b></div>
      solution: "<div class=\"worked__math\"><i>l</i> = 9 × <span class=\"frac\"><span>5<i>π</i></span><span>6</span></span> = <span class=\"frac\"><span>45<i>π</i></span><span>6</span></span> = <b><span class=\"frac\"><span>15<i>π</i></span><span>2</span></span> cm</b></div>",
    },

    // ── t3-1-q036 · short · exam · SL · SL 3.2 · 5 marks
    "t3-1-q036": {
      // EN: <p>A triangle has sides of length <span class="mono">3 cm</span>, <span class="mono">5 cm</span> and <span class="mono">7 cm</span>.<br>(a) Show that the largest angle of the triangle is <span class="mono">120°</span> (degrees). <strong>[3 marks]</strong><br>(b) Hence find the exact area of the triangle. <strong>[2 marks]</strong></p>
      stem: "<p>세 변의 길이가 <span class=\"mono\">3 cm</span>, <span class=\"mono\">5 cm</span>, <span class=\"mono\">7 cm</span>인 삼각형이 있어요.<br>(a) 이 삼각형의 가장 큰 각이 <span class=\"mono\">120°</span>(도)임을 보이시오 (Show that). <strong>[3 marks]</strong><br>(b) 이를 이용하여 (Hence) 삼각형의 넓이의 정확한 값을 구하시오. <strong>[2 marks]</strong></p>",
      hints: [
        // EN: The largest angle is opposite the longest side.
        "가장 큰 각은 가장 긴 변의 대각이에요.",
        // EN: For (b), the angle between the sides 3 and 5 is the <span class="mono">120°</span> angle, and <span class="chem">sin 120° = sqrt(3)/2</span>.
        "(b)에서 길이가 3과 5인 두 변 사이의 각이 <span class=\"mono\">120°</span>인 각이고, <span class=\"chem\">sin 120° = sqrt(3)/2</span>예요.",
      ],
      // EN: <div class="worked__math">(a) cos <i>θ</i> = <span class="frac"><span>9 + 25 − 49</span><span>30</span></span> = −<span class="frac"><span>1</span><span>2</span></span> ⇒ <i>θ</i> = 120°</div><div class="worked__math">(b) Area = <span class="frac"><span>1</span><span>2</span></span>(3)(5)<span class="frac"><span>√3</span><span>2</span></span> = <b><span class="frac"><span>15√3</span><span>4</span></span> cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\">(a) cos <i>θ</i> = <span class=\"frac\"><span>9 + 25 − 49</span><span>30</span></span> = −<span class=\"frac\"><span>1</span><span>2</span></span> ⇒ <i>θ</i> = 120°</div><div class=\"worked__math\">(b) 넓이 = <span class=\"frac\"><span>1</span><span>2</span></span>(3)(5)<span class=\"frac\"><span>√3</span><span>2</span></span> = <b><span class=\"frac\"><span>15√3</span><span>4</span></span> cm<sup>2</sup></b></div>",
      // EN: <p>(a) cos θ = (9 + 25 − 49)/30 = −1/2, so θ = 120°. (b) Area = (1/2)(3)(5) sin 120° = 15√3/4 cm².</p>
      answer: "<p>(a) cos θ = (9 + 25 − 49)/30 = −1/2이므로 θ = 120°. (b) 넓이 = (1/2)(3)(5) sin 120° = 15√3/4 cm².</p>",
      markscheme: [
        // EN: R1: The largest angle is opposite the longest side, 7 cm.
        "R1: 가장 큰 각은 가장 긴 변 7 cm의 대각임.",
        // EN: M1: Cosine rule: cos θ = (3² + 5² − 7²)/(2 × 3 × 5).
        "M1: 코사인법칙: cos θ = (3² + 5² − 7²)/(2 × 3 × 5).",
        // EN: A1: cos θ = −15/30 = −1/2, so θ = 120°. AG: the largest angle is 120°; the given line itself earns no mark.
        "A1: cos θ = −15/30 = −1/2이므로 θ = 120°. AG: 가장 큰 각은 120°; 주어진 결론 줄 자체에는 점수가 없음.",
        // EN: M1: Area = (1/2)(3)(5) sin 120°, with sin 120° = √3/2.
        "M1: 넓이 = (1/2)(3)(5) sin 120°, sin 120° = √3/2.",
        // EN: A1: Area = 15√3/4 cm².
        "A1: 넓이 = 15√3/4 cm².",
      ],
    },

    // ── t3-1-q037 · numeric · exam · SL · SL 3.3 · 4 marks
    "t3-1-q037": {
      // EN: <p>Points <span class="chem">A</span> and <span class="chem">B</span> lie on level ground in a straight line with the foot <span class="chem">F</span> of a vertical flagpole, on the same side of it, with <span class="chem">B</span> farther from <span class="chem">F</span> and <span class="chem">AB = 20 m</span>. The angles of elevation of the top of the flagpole from <span class="chem">A</span> and from <span class="chem">B</span> are <span class="mono">60°</span> and <span class="mono">30°</span> (degrees). Find the exact height of the flagpole in metres.</p>
      stem: "<p>점 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>는 수평인 지면 위에서 수직인 깃대의 밑 <span class=\"chem\">F</span>와 한 직선 위에, 깃대의 같은 쪽에 있어요. <span class=\"chem\">B</span>가 <span class=\"chem\">F</span>에서 더 멀고, <span class=\"chem\">AB = 20 m</span>예요. <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>에서 깃대 꼭대기를 올려다본 각은 각각 <span class=\"mono\">60°</span>와 <span class=\"mono\">30°</span>(도)예요. 깃대의 높이의 정확한 값을 미터 단위로 구하시오 (Find).</p>",
      hints: [
        // EN: Let the height be <span class="chem">h</span>. Write both ground distances in terms of <span class="chem">h</span>: <span class="chem">AF = h/tan 60°</span> and <span class="chem">BF = h/tan 30°</span>.
        "높이를 <span class=\"chem\">h</span>라 하세요. 지면 위의 두 거리를 <span class=\"chem\">h</span>로 나타내세요: <span class=\"chem\">AF = h/tan 60°</span>, <span class=\"chem\">BF = h/tan 30°</span>.",
        // EN: <span class="chem">BF - AF = 20</span>, i.e. <span class="chem">h sqrt(3) - h/sqrt(3) = 20</span>.
        "<span class=\"chem\">BF - AF = 20</span>, 즉 <span class=\"chem\">h sqrt(3) - h/sqrt(3) = 20</span>이에요.",
      ],
      // EN: <div class="worked__math"><i>AF</i> = <i>h</i>/√3, &nbsp; <i>BF</i> = <i>h</i>√3 ⇒ <i>h</i>√3 − <i>h</i>/√3 = 20 ⇒ <span class="frac"><span>2<i>h</i></span><span>√3</span></span> = 20</div><div class="worked__math"><i>h</i> = <b>10√3 m</b> (≈ 17.3 m)</div>
      solution: "<div class=\"worked__math\"><i>AF</i> = <i>h</i>/√3, &nbsp; <i>BF</i> = <i>h</i>√3 ⇒ <i>h</i>√3 − <i>h</i>/√3 = 20 ⇒ <span class=\"frac\"><span>2<i>h</i></span><span>√3</span></span> = 20</div><div class=\"worked__math\"><i>h</i> = <b>10√3 m</b> (≈ 17.3 m)</div>",
    },

    // ── t3-1-q038 · short · exam · SL · SL 3.1 · 5 marks
    "t3-1-q038": {
      // EN: <p>The points <span class="chem">A(2, -1, k)</span> and <span class="chem">B(5, 3, 1)</span> are a distance <span class="chem">sqrt(34)</span> apart. (No angles are involved.)<br>(a) Find the two possible values of <span class="chem">k</span>. <strong>[3 marks]</strong><br>(b) For the positive value of <span class="chem">k</span>, find the midpoint of <span class="chem">AB</span>. <strong>[2 marks]</strong></p>
      stem: "<p>두 점 <span class=\"chem\">A(2, -1, k)</span>와 <span class=\"chem\">B(5, 3, 1)</span> 사이의 거리가 <span class=\"chem\">sqrt(34)</span>예요. (각은 쓰이지 않아요.)<br>(a) <span class=\"chem\">k</span>의 가능한 두 값을 구하시오 (Find). <strong>[3 marks]</strong><br>(b) <span class=\"chem\">k</span>가 양수일 때, <span class=\"chem\">AB</span>의 중점을 구하시오. <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Square both sides of the distance formula so that the square root disappears.
        "거리 공식의 양변을 제곱해서 제곱근을 없애세요.",
        // EN: Solve <span class="chem">(1 - k)^2 = 9</span>; take both square roots.
        "<span class=\"chem\">(1 - k)^2 = 9</span>를 푸세요. 양의 제곱근과 음의 제곱근을 모두 생각하세요.",
      ],
      // EN: <div class="worked__math">(a) 9 + 16 + (1 − <i>k</i>)<sup>2</sup> = 34 ⇒ 1 − <i>k</i> = ±3 ⇒ <i>k</i> = <b>−2 or 4</b></div><div class="worked__math">(b) <i>M</i> = (<span class="frac"><span>7</span><span>2</span></span>, 1, <span class="frac"><span>5</span><span>2</span></span>) = <b>(3.5, 1, 2.5)</b></div>
      solution: "<div class=\"worked__math\">(a) 9 + 16 + (1 − <i>k</i>)<sup>2</sup> = 34 ⇒ 1 − <i>k</i> = ±3 ⇒ <i>k</i> = <b>−2 또는 4</b></div><div class=\"worked__math\">(b) <i>M</i> = (<span class=\"frac\"><span>7</span><span>2</span></span>, 1, <span class=\"frac\"><span>5</span><span>2</span></span>) = <b>(3.5, 1, 2.5)</b></div>",
      // EN: <p>(a) k = 4 or k = −2. (b) With k = 4, the midpoint is (3.5, 1, 2.5).</p>
      answer: "<p>(a) k = 4 또는 k = −2. (b) k = 4일 때 중점은 (3.5, 1, 2.5).</p>",
      markscheme: [
        // EN: M1: Distance formula: (5 − 2)² + (3 − (−1))² + (1 − k)² = 34.
        "M1: 거리 공식: (5 − 2)² + (3 − (−1))² + (1 − k)² = 34.",
        // EN: A1: 9 + 16 + (1 − k)² = 34 ⇒ (1 − k)² = 9.
        "A1: 9 + 16 + (1 − k)² = 34 ⇒ (1 − k)² = 9.",
        // EN: A1: k = 4 or k = −2.
        "A1: k = 4 또는 k = −2.",
        // EN: M1: Midpoint ((2 + 5)/2, (−1 + 3)/2, (4 + 1)/2).
        "M1: 중점 ((2 + 5)/2, (−1 + 3)/2, (4 + 1)/2).",
        // EN: A1: (3.5, 1, 2.5).
        "A1: (3.5, 1, 2.5).",
      ],
    },

    // ── t3-1-q039 · numeric · exam · SL · SL 3.1 · 4 marks
    "t3-1-q039": {
      // EN: <p>A right pyramid has a rectangular base measuring <span class="mono">6 cm</span> by <span class="mono">8 cm</span>. Each of its four sloping edges has length <span class="mono">13 cm</span>. Find the volume of the pyramid, in <span class="unit">cm3</span>. (No angles are involved.)</p>
      stem: "<p>직각뿔의 밑면은 <span class=\"mono\">6 cm</span> × <span class=\"mono\">8 cm</span>인 직사각형이에요. 네 옆모서리의 길이는 모두 <span class=\"mono\">13 cm</span>예요. 이 각뿔의 부피를 <span class=\"unit\">cm3</span> 단위로 구하시오 (Find). (각은 쓰이지 않아요.)</p>",
      hints: [
        // EN: The apex is above the centre of the rectangle, where the diagonals cross. Half a diagonal is <span class="chem">(1/2)sqrt(6^2 + 8^2) = 5</span>.
        "꼭짓점은 직사각형의 중심, 즉 대각선이 만나는 점 바로 위에 있어요. 대각선의 절반은 <span class=\"chem\">(1/2)sqrt(6^2 + 8^2) = 5</span>예요.",
        // EN: A sloping edge, half a diagonal and the height form a right-angled triangle: <span class="chem">h = sqrt(13^2 - 5^2)</span>.
        "옆모서리, 대각선의 절반, 높이가 직각삼각형을 이뤄요: <span class=\"chem\">h = sqrt(13^2 - 5^2)</span>.",
      ],
      // EN: <div class="worked__math">Half-diagonal = 5 cm, &nbsp; <i>h</i> = √(169 − 25) = 12 cm</div><div class="worked__math"><i>V</i> = <span class="frac"><span>1</span><span>3</span></span>(6 × 8)(12) = <b>192 cm<sup>3</sup></b></div>
      solution: "<div class=\"worked__math\">대각선의 절반 = 5 cm, &nbsp; <i>h</i> = √(169 − 25) = 12 cm</div><div class=\"worked__math\"><i>V</i> = <span class=\"frac\"><span>1</span><span>3</span></span>(6 × 8)(12) = <b>192 cm<sup>3</sup></b></div>",
    },

    // ── t3-1-q040 · short · exam · SL · SL 3.4 · 7 marks
    "t3-1-q040": {
      // EN: <p>A sector <span class="chem">OAB</span> of a circle with centre <span class="chem">O</span> has radius <span class="mono">6 cm</span> and <span class="chem">angle AOB = pi/3</span> <strong>radians</strong>.<br>(a) Find the exact length of the arc <span class="chem">AB</span>. <strong>[2 marks]</strong><br>(b) Find the exact area of the segment between the chord <span class="chem">AB</span> and the arc <span class="chem">AB</span>. <strong>[3 marks]</strong><br>(c) Find the exact perimeter of this segment. <strong>[2 marks]</strong></p>
      stem: "<p>중심이 <span class=\"chem\">O</span>인 원의 부채꼴 <span class=\"chem\">OAB</span>의 반지름은 <span class=\"mono\">6 cm</span>이고 <span class=\"chem\">angle AOB = pi/3</span><strong>라디안</strong>이에요.<br>(a) 호 <span class=\"chem\">AB</span>의 길이의 정확한 값을 구하시오 (Find). <strong>[2 marks]</strong><br>(b) 현 <span class=\"chem\">AB</span>와 호 <span class=\"chem\">AB</span> 사이의 활꼴의 넓이의 정확한 값을 구하시오. <strong>[3 marks]</strong><br>(c) 이 활꼴의 둘레의 정확한 값을 구하시오. <strong>[2 marks]</strong></p>",
      hints: [
        // EN: The angle is in radians: <span class="chem">l = r theta</span>, <span class="chem">A = (1/2)r^2 theta</span>.
        "각이 라디안이에요: <span class=\"chem\">l = r theta</span>, <span class=\"chem\">A = (1/2)r^2 theta</span>.",
        // EN: Segment = sector − triangle, with triangle area <span class="chem">(1/2)r^2 sin theta</span> and <span class="chem">sin(pi/3) = sqrt(3)/2</span>.
        "활꼴 = 부채꼴 − 삼각형이고, 삼각형의 넓이는 <span class=\"chem\">(1/2)r^2 sin theta</span>, <span class=\"chem\">sin(pi/3) = sqrt(3)/2</span>예요.",
        // EN: For (c), what kind of triangle has two sides of 6 cm and a <span class="mono">60°</span> angle between them?
        "(c)에서 두 변이 6 cm이고 그 끼인각이 <span class=\"mono\">60°</span>인 삼각형은 어떤 삼각형일까요?",
      ],
      // EN: <div class="worked__math">(a) <i>l</i> = 6(<i>π</i>/3) = <b>2<i>π</i> cm</b></div><div class="worked__math">(b) 6<i>π</i> − 18(√3/2) = <b>6<i>π</i> − 9√3 cm<sup>2</sup></b></div><div class="worked__math">(c) Equilateral triangle ⇒ <i>AB</i> = 6, perimeter = <b>2<i>π</i> + 6 cm</b></div>
      solution: "<div class=\"worked__math\">(a) <i>l</i> = 6(<i>π</i>/3) = <b>2<i>π</i> cm</b></div><div class=\"worked__math\">(b) 6<i>π</i> − 18(√3/2) = <b>6<i>π</i> − 9√3 cm<sup>2</sup></b></div><div class=\"worked__math\">(c) 정삼각형 ⇒ <i>AB</i> = 6, 둘레 = <b>2<i>π</i> + 6 cm</b></div>",
      // EN: <p>(a) 2π cm; (b) (6π − 9√3) cm²; (c) (2π + 6) cm.</p>
      answer: "<p>(a) 2π cm; (b) (6π − 9√3) cm²; (c) (2π + 6) cm.</p>",
      markscheme: [
        // EN: M1: l = rθ = 6 × π/3.
        "M1: l = rθ = 6 × π/3.",
        // EN: A1: l = 2π cm.
        "A1: l = 2π cm.",
        // EN: M1: Sector area (1/2)(6²)(π/3) = 6π.
        "M1: 부채꼴의 넓이 (1/2)(6²)(π/3) = 6π.",
        // EN: M1: Triangle area (1/2)(6²) sin(π/3) = 9√3.
        "M1: 삼각형의 넓이 (1/2)(6²) sin(π/3) = 9√3.",
        // EN: A1: Segment area = 6π − 9√3 cm².
        "A1: 활꼴의 넓이 = 6π − 9√3 cm².",
        // EN: R1: Triangle OAB is isosceles with an angle of π/3 (60°), so it is equilateral and AB = 6 cm.
        "R1: 삼각형 OAB는 한 각이 π/3 (60°)인 이등변삼각형이므로 정삼각형이고, AB = 6 cm.",
        // EN: A1: Perimeter = 2π + 6 cm.
        "A1: 둘레 = 2π + 6 cm.",
      ],
    },

    // ── t3-1-q041 · short · exam · SL · SL 3.1 · 9 marks
    "t3-1-q041": {
      // EN: <p>A right pyramid <span class="chem">VABCD</span> has a square base <span class="chem">ABCD</span> of side <span class="mono">8 cm</span>, and each sloping edge has length <span class="mono">11 cm</span>. <span class="chem">M</span> is the centre of the base and <span class="chem">N</span> is the midpoint of <span class="chem">AB</span>. Give angles in degrees and answers to 3 significant figures.<br>(a) Find the height <span class="chem">VM</span>. <strong>[3 marks]</strong><br>(b) Find the volume of the pyramid. <strong>[2 marks]</strong><br>(c) Find the angle between the edge <span class="chem">VA</span> and the base. <strong>[2 marks]</strong><br>(d) Find the angle between the line <span class="chem">VN</span> and the base. <strong>[2 marks]</strong></p>
      stem: "<p>직각뿔 <span class=\"chem\">VABCD</span>의 밑면 <span class=\"chem\">ABCD</span>는 한 변이 <span class=\"mono\">8 cm</span>인 정사각형이고, 옆모서리의 길이는 모두 <span class=\"mono\">11 cm</span>예요. <span class=\"chem\">M</span>은 밑면의 중심이고 <span class=\"chem\">N</span>은 <span class=\"chem\">AB</span>의 중점이에요. 각은 도 단위로, 답은 유효숫자 3자리로 쓰시오.<br>(a) 높이 <span class=\"chem\">VM</span>을 구하시오 (Find). <strong>[3 marks]</strong><br>(b) 각뿔의 부피를 구하시오. <strong>[2 marks]</strong><br>(c) 모서리 <span class=\"chem\">VA</span>와 밑면이 이루는 각을 구하시오. <strong>[2 marks]</strong><br>(d) 직선 <span class=\"chem\">VN</span>과 밑면이 이루는 각을 구하시오. <strong>[2 marks]</strong></p>",
      hints: [
        // EN: The apex is directly above the centre <span class="chem">M</span>. For a line from <span class="chem">V</span> to a point of the base, its projection on the base starts at <span class="chem">M</span>, so the angle with the base sits in a right-angled triangle containing the vertical <span class="chem">VM</span>.
        "꼭짓점은 중심 <span class=\"chem\">M</span> 바로 위에 있어요. <span class=\"chem\">V</span>에서 밑면 위의 점으로 그은 직선의 밑면 위 정사영은 <span class=\"chem\">M</span>에서 시작하므로, 밑면과 이루는 각은 수직선 <span class=\"chem\">VM</span>을 포함하는 직각삼각형 안에 있어요.",
        // EN: <span class="chem">MA</span> is half a diagonal; <span class="chem">MN</span> is half a side.
        "<span class=\"chem\">MA</span>는 대각선의 절반이고, <span class=\"chem\">MN</span>은 한 변의 절반이에요.",
      ],
      // EN: <div class="worked__math">(a) <i>MA</i> = 4√2, <i>VM</i> = √(121 − 32) = √89 ≈ <b>9.43 cm</b> &nbsp; (b) <i>V</i> = <span class="frac"><span>64√89</span><span>3</span></span> ≈ <b>201 cm<sup>3</sup></b></div><div class="worked__math">(c) cos ∠<i>VAM</i> = 4√2/11 ⇒ <b>59.1°</b> &nbsp; (d) tan ∠<i>VNM</i> = √89/4 ⇒ <b>67.0°</b></div>
      solution: "<div class=\"worked__math\">(a) <i>MA</i> = 4√2, <i>VM</i> = √(121 − 32) = √89 ≈ <b>9.43 cm</b> &nbsp; (b) <i>V</i> = <span class=\"frac\"><span>64√89</span><span>3</span></span> ≈ <b>201 cm<sup>3</sup></b></div><div class=\"worked__math\">(c) cos ∠<i>VAM</i> = 4√2/11 ⇒ <b>59.1°</b> &nbsp; (d) tan ∠<i>VNM</i> = √89/4 ⇒ <b>67.0°</b></div>",
      // EN: <p>(a) VM = √89 ≈ 9.43 cm; (b) 201 cm³; (c) 59.1°; (d) 67.0°.</p>
      answer: "<p>(a) VM = √89 ≈ 9.43 cm; (b) 201 cm³; (c) 59.1°; (d) 67.0°.</p>",
      markscheme: [
        // EN: M1: MA is half the diagonal of the base: AC = √(8² + 8²) = 8√2, so MA = 4√2.
        "M1: MA는 밑면의 대각선의 절반: AC = √(8² + 8²) = 8√2이므로 MA = 4√2.",
        // EN: M1: Pythagoras in triangle VMA: VM² = 11² − (4√2)² = 121 − 32.
        "M1: 삼각형 VMA에서 피타고라스 정리: VM² = 11² − (4√2)² = 121 − 32.",
        // EN: A1: VM = √89 ≈ 9.43 cm.
        "A1: VM = √89 ≈ 9.43 cm.",
        // EN: M1: V = (1/3)(8²)(√89).
        "M1: V = (1/3)(8²)(√89).",
        // EN: A1: V ≈ 201 cm³.
        "A1: V ≈ 201 cm³.",
        // EN: M1: The projection of VA on the base is MA, so cos(∠VAM) = 4√2/11 (or tan = √89/(4√2)).
        "M1: VA의 밑면 위 정사영은 MA이므로 cos(∠VAM) = 4√2/11 (또는 tan = √89/(4√2)).",
        // EN: A1: ∠VAM ≈ 59.1°.
        "A1: ∠VAM ≈ 59.1°.",
        // EN: M1: The projection of VN on the base is MN = 4 cm, so tan(∠VNM) = √89/4.
        "M1: VN의 밑면 위 정사영은 MN = 4 cm이므로 tan(∠VNM) = √89/4.",
        // EN: A1: ∠VNM ≈ 67.0°.
        "A1: ∠VNM ≈ 67.0°.",
      ],
    },

    // ── t3-1-q042 · numeric · exam · SL · SL 3.3 · 4 marks
    "t3-1-q042": {
      // EN: <p>From the top of a vertical cliff <span class="mono">85 m</span> above sea level, an observer sees two boats due West of the cliff, in a straight line with its foot. The angles of depression of the boats are <span class="mono">32°</span> and <span class="mono">18°</span> (degrees). Find the distance between the two boats, in metres to 3 significant figures.</p>
      stem: "<p>해수면에서 <span class=\"mono\">85 m</span> 높이인 수직 절벽 꼭대기에서 관찰자가 절벽의 정서쪽에, 절벽 밑과 한 직선 위에 있는 보트 두 척을 봐요. 보트를 내려다본 각은 <span class=\"mono\">32°</span>와 <span class=\"mono\">18°</span>(도)예요. 두 보트 사이의 거리를 미터 단위로 구하고 (Find) 유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: Decode: the angle of depression from the cliff top equals the angle of elevation from the boat (alternate angles). The smaller angle belongs to the farther boat.
        "해석: 절벽 꼭대기에서 내려다본 각은 보트에서 올려다본 각과 같아요(엇각). 더 작은 각이 더 먼 보트의 각이에요.",
        // EN: Each boat is at a horizontal distance <span class="chem">85/tan(angle)</span> from the foot of the cliff.
        "각 보트는 절벽 밑에서 수평 거리 <span class=\"chem\">85/tan(angle)</span>만큼 떨어져 있어요.",
        // EN: Distance between the boats <span class="chem">= 85/tan 18° - 85/tan 32°</span>.
        "두 보트 사이의 거리 <span class=\"chem\">= 85/tan 18° - 85/tan 32°</span>예요.",
      ],
      // EN: <div class="worked__math">Far boat: 85/tan 18° ≈ 261.60 m; &nbsp; near boat: 85/tan 32° ≈ 136.03 m</div><div class="worked__math">Distance ≈ 261.60 − 136.03 ≈ <b>126 m</b></div>
      solution: "<div class=\"worked__math\">먼 보트: 85/tan 18° ≈ 261.60 m; &nbsp; 가까운 보트: 85/tan 32° ≈ 136.03 m</div><div class=\"worked__math\">거리 ≈ 261.60 − 136.03 ≈ <b>126 m</b></div>",
    },

    // ── t3-1-q043 · numeric · exam · SL · SL 3.2 · 3 marks
    "t3-1-q043": {
      // EN: <p>In triangle <span class="chem">ABC</span>, <span class="chem">angle BAC = 45°</span>, <span class="chem">angle ABC = 60°</span> (degrees) and <span class="chem">BC = 6 cm</span>. Find the exact length of <span class="chem">AC</span>, in cm, in the form <span class="chem">p sqrt(q)</span>.</p>
      stem: "<p>삼각형 <span class=\"chem\">ABC</span>에서 <span class=\"chem\">angle BAC = 45°</span>, <span class=\"chem\">angle ABC = 60°</span>(도)이고 <span class=\"chem\">BC = 6 cm</span>예요. <span class=\"chem\">AC</span>의 길이의 정확한 값을 <span class=\"chem\">p sqrt(q)</span> 꼴로, cm 단위로 구하시오 (Find).</p>",
      hints: [
        // EN: Sine rule: <span class="chem">AC/(sin 60°) = 6/(sin 45°)</span>.
        "사인법칙: <span class=\"chem\">AC/(sin 60°) = 6/(sin 45°)</span>.",
        // EN: Use <span class="chem">sin 60° = sqrt(3)/2</span> and <span class="chem">sin 45° = sqrt(2)/2</span>, then rationalise.
        "<span class=\"chem\">sin 60° = sqrt(3)/2</span>와 <span class=\"chem\">sin 45° = sqrt(2)/2</span>를 쓰고, 분모를 유리화하세요.",
      ],
      // EN: <div class="worked__math"><i>AC</i> = <span class="frac"><span>6(√3/2)</span><span>√2/2</span></span> = <span class="frac"><span>6√3</span><span>√2</span></span> = <span class="frac"><span>6√6</span><span>2</span></span> = <b>3√6 cm</b></div>
      solution: "<div class=\"worked__math\"><i>AC</i> = <span class=\"frac\"><span>6(√3/2)</span><span>√2/2</span></span> = <span class=\"frac\"><span>6√3</span><span>√2</span></span> = <span class=\"frac\"><span>6√6</span><span>2</span></span> = <b>3√6 cm</b></div>",
    },

    // ── t3-1-q044 · numeric · exam · SL · SL 3.5 · 4 marks
    "t3-1-q044": {
      // EN: <p>In triangle <span class="chem">ABC</span>, <span class="chem">angle BAC = 30°</span> (degrees), <span class="chem">BC = 5 cm</span> and <span class="chem">AC = 5sqrt(2) cm</span>. Given that <span class="chem">angle ABC</span> is <strong>obtuse</strong>, find the size of <span class="chem">angle ACB</span> in degrees.</p>
      stem: "<p>삼각형 <span class=\"chem\">ABC</span>에서 <span class=\"chem\">angle BAC = 30°</span>(도), <span class=\"chem\">BC = 5 cm</span>, <span class=\"chem\">AC = 5sqrt(2) cm</span>예요. <span class=\"chem\">angle ABC</span>가 <strong>둔각</strong>일 때, <span class=\"chem\">angle ACB</span>의 크기를 도 단위로 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: SSA information with a condition ("obtuse") that picks one of the two triangles. Find <span class="chem">angle ABC</span> with the sine rule, then use the angle sum.
        "해석: SSA 정보에 두 삼각형 중 하나를 고르는 조건(\"둔각\")이 붙어 있어요. 사인법칙으로 <span class=\"chem\">angle ABC</span>를 구한 뒤 내각의 합을 쓰세요.",
        // EN: <span class="chem">sin B = (5sqrt(2) sin 30°)/5 = sqrt(2)/2</span>, so <span class="chem">B = 45°</span> or <span class="chem">135°</span>.
        "<span class=\"chem\">sin B = (5sqrt(2) sin 30°)/5 = sqrt(2)/2</span>이므로 <span class=\"chem\">B = 45°</span> 또는 <span class=\"chem\">135°</span>예요.",
      ],
      // EN: <p><b>Decode.</b> "Obtuse" selects the second solution of the sine equation.</p><div class="worked__math">sin <i>B</i> = <span class="frac"><span>5√2 × <sup>1</sup>/<sub>2</sub></span><span>5</span></span> = <span class="frac"><span>√2</span><span>2</span></span> ⇒ <i>B</i> = 135° (obtuse)</div><div class="worked__math">∠<i>ACB</i> = 180° − 30° − 135° = <b>15°</b></div>
      solution: "<p><b>해석:</b> \"둔각\"이라는 조건이 사인 방정식의 두 번째 해를 골라요.</p><div class=\"worked__math\">sin <i>B</i> = <span class=\"frac\"><span>5√2 × <sup>1</sup>/<sub>2</sub></span><span>5</span></span> = <span class=\"frac\"><span>√2</span><span>2</span></span> ⇒ <i>B</i> = 135° (둔각)</div><div class=\"worked__math\">∠<i>ACB</i> = 180° − 30° − 135° = <b>15°</b></div>",
    },

    // ── t3-1-q045 · numeric · challenge · SL · SL 3.2, 3.3 · 6 marks
    "t3-1-q045": {
      // EN: <p>A lighthouse <span class="chem">L</span> is <span class="mono">12 km</span> from a port <span class="chem">P</span> on a bearing of <span class="mono">050°</span>. A ship leaves <span class="chem">P</span> and sails in a straight line on a bearing of <span class="mono">080°</span> at a constant <span class="mono">15 km h⁻¹</span>. The lighthouse beam can be seen from the ship whenever the ship is within <span class="mono">9 km</span> of <span class="chem">L</span>. For how many <strong>minutes</strong> can the beam be seen? Angles are in degrees; give your answer to 3 significant figures.</p>
      stem: "<p>등대 <span class=\"chem\">L</span>은 항구 <span class=\"chem\">P</span>로부터 방위각 <span class=\"mono\">050°</span> 방향으로 <span class=\"mono\">12 km</span> 떨어져 있어요. 배가 <span class=\"chem\">P</span>를 떠나 방위각 <span class=\"mono\">080°</span> 방향으로 일정한 속력 <span class=\"mono\">15 km h⁻¹</span>로 곧게 항해해요. 배가 <span class=\"chem\">L</span>에서 <span class=\"mono\">9 km</span> 이내에 있을 때는 언제나 배에서 등대 불빛이 보여요. 불빛은 몇 <strong>분</strong> 동안 보일까요? 각은 도 단위이고, 답은 유효숫자 3자리로 쓰시오.</p>",
      hints: [
        // EN: Decode: you need the length of the part of the ship’s path that lies within 9 km of <span class="chem">L</span>, then convert distance to time. The path enters and leaves the 9 km circle at two points: a cosine-rule quadratic (like the ambiguous case).
        "해석: 배의 항로 중 <span class=\"chem\">L</span>에서 9 km 이내에 있는 부분의 길이를 구한 뒤 거리를 시간으로 바꿔야 해요. 항로는 반지름 9 km인 원에 두 점에서 들어갔다 나와요: 코사인법칙에서 나오는 이차방정식이에요(삼각형이 두 개 만들어지는 경우와 비슷해요).",
        // EN: The angle at <span class="chem">P</span> between <span class="chem">PL</span> and the path is <span class="chem">80° - 50° = 30°</span>. If the ship is <span class="chem">x</span> km from <span class="chem">P</span> and 9 km from <span class="chem">L</span>: <span class="chem">9^2 = 12^2 + x^2 - 2(12)x cos 30°</span>.
        "<span class=\"chem\">P</span>에서 <span class=\"chem\">PL</span>과 항로 사이의 각은 <span class=\"chem\">80° - 50° = 30°</span>예요. 배가 <span class=\"chem\">P</span>에서 <span class=\"chem\">x</span> km, <span class=\"chem\">L</span>에서 9 km 떨어져 있으면: <span class=\"chem\">9^2 = 12^2 + x^2 - 2(12)x cos 30°</span>.",
        // EN: Solve <span class="chem">x^2 - (24 cos 30°)x + 63 = 0</span>. The difference of the two roots is the distance travelled within range; divide by 15 and convert hours to minutes.
        "<span class=\"chem\">x^2 - (24 cos 30°)x + 63 = 0</span>을 푸세요. 두 근의 차가 범위 안에서 이동한 거리예요. 15로 나누고 시간을 분으로 바꾸세요.",
      ],
      // EN: <p><b>Decode.</b> "Within 9 km" happens between the two points where the distance to L equals 9 km; find both with the cosine rule.</p><div class="worked__math"><i>x</i><sup>2</sup> − 20.785<i>x</i> + 63 = 0 ⇒ <i>x</i> ≈ 3.684 or 17.101 km</div><div class="worked__math">Distance in range ≈ 13.416 km (= √180) ⇒ time = 13.416/15 h ≈ 0.89443 h ≈ <b>53.7 minutes</b></div>
      solution: "<p><b>해석:</b> \"9 km 이내\"는 L까지의 거리가 9 km가 되는 두 점 사이에서 일어나요. 코사인법칙으로 두 점을 모두 구해요.</p><div class=\"worked__math\"><i>x</i><sup>2</sup> − 20.785<i>x</i> + 63 = 0 ⇒ <i>x</i> ≈ 3.684 또는 17.101 km</div><div class=\"worked__math\">범위 안의 거리 ≈ 13.416 km (= √180) ⇒ 시간 = 13.416/15 h ≈ 0.89443 h ≈ <b>53.7분</b></div>",
    },

    // ── t3-1-q046 · numeric · challenge · SL · SL 3.5 · 5 marks
    "t3-1-q046": {
      // EN: <p>A straight fence starts at a post <span class="chem">A</span> and runs across a flat field. A goat is tied to a stake <span class="chem">T</span> with a rope of length <span class="mono">6 m</span>. The stake is <span class="mono">9 m</span> from <span class="chem">A</span>, and the line <span class="chem">AT</span> makes an angle of <span class="mono">28°</span> (degrees) with the fence. When the rope is pulled tight, the goat can just reach the fence at exactly two points. How far apart are these two points, in metres to 3 significant figures?</p>
      stem: "<p>곧은 울타리가 기둥 <span class=\"chem\">A</span>에서 시작해 평평한 들판을 가로질러 뻗어 있어요. 염소가 길이 <span class=\"mono\">6 m</span>인 밧줄로 말뚝 <span class=\"chem\">T</span>에 묶여 있어요. 그 말뚝은 <span class=\"chem\">A</span>에서 <span class=\"mono\">9 m</span> 떨어져 있고, 직선 <span class=\"chem\">AT</span>는 울타리와 <span class=\"mono\">28°</span>(도)의 각을 이뤄요. 밧줄을 팽팽하게 당기면 염소는 정확히 두 점에서 울타리에 겨우 닿아요. 이 두 점은 몇 미터 떨어져 있을까요? 유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: Decode: each point <span class="chem">X</span> on the fence with <span class="chem">TX = 6</span> gives a triangle <span class="chem">ATX</span> with <span class="chem">AT = 9</span>, <span class="chem">TX = 6</span> and <span class="chem">angle TAX = 28°</span>: two sides and a non-included angle, the ambiguous case. You want the difference of the two possible lengths <span class="chem">AX</span>.
        "해석: 울타리 위에서 <span class=\"chem\">TX = 6</span>인 각 점 <span class=\"chem\">X</span>는 <span class=\"chem\">AT = 9</span>, <span class=\"chem\">TX = 6</span>, <span class=\"chem\">angle TAX = 28°</span>인 삼각형 <span class=\"chem\">ATX</span>를 만들어요. 두 변과 끼인각이 아닌 각이므로, 삼각형이 두 개 만들어지는 경우예요. 구하는 것은 가능한 두 길이 <span class=\"chem\">AX</span>의 차예요.",
        // EN: Cosine rule in triangle <span class="chem">ATX</span> with <span class="chem">AX = x</span>: <span class="chem">36 = 81 + x^2 - 18x cos 28°</span>.
        "<span class=\"chem\">AX = x</span>로 두고 삼각형 <span class=\"chem\">ATX</span>에서 코사인법칙: <span class=\"chem\">36 = 81 + x^2 - 18x cos 28°</span>.",
        // EN: Solve the quadratic and subtract the roots (or use the perpendicular from <span class="chem">T</span> to the fence, of length <span class="chem">9 sin 28°</span>).
        "이차방정식을 풀고 두 근을 빼세요(또는 <span class=\"chem\">T</span>에서 울타리에 내린 길이 <span class=\"chem\">9 sin 28°</span>인 수선을 이용하세요).",
      ],
      // EN: <p><b>Decode.</b> Two triangles from SSA data: the two positions of the rope form an isosceles triangle, and the required length is <i>x</i><sub>1</sub> − <i>x</i><sub>2</sub>.</p><div class="worked__math"><i>x</i><sup>2</sup> − 15.893<i>x</i> + 45 = 0 ⇒ <i>x</i> ≈ 3.687 or 12.206 m</div><div class="worked__math">Distance apart ≈ 12.206 − 3.687 ≈ <b>8.52 m</b> (= 2√(36 − (9 sin 28°)<sup>2</sup>))</div>
      solution: "<p><b>해석:</b> SSA 자료에서 삼각형이 두 개 나와요. 밧줄의 두 위치가 이등변삼각형을 이루고, 구하는 길이는 <i>x</i><sub>1</sub> − <i>x</i><sub>2</sub>예요.</p><div class=\"worked__math\"><i>x</i><sup>2</sup> − 15.893<i>x</i> + 45 = 0 ⇒ <i>x</i> ≈ 3.687 또는 12.206 m</div><div class=\"worked__math\">두 점 사이의 거리 ≈ 12.206 − 3.687 ≈ <b>8.52 m</b> (= 2√(36 − (9 sin 28°)<sup>2</sup>))</div>",
    },

    // ── t3-1-q047 · numeric · challenge · SL · SL 3.4 · 6 marks
    "t3-1-q047": {
      // EN: <p>A circular pond has radius <span class="mono">5 m</span>. A straight footbridge is built across it, and the smaller of the two pieces of the pond cut off by the bridge has exactly <strong>one quarter</strong> of the area of the whole pond. Find the shortest distance from the centre of the pond to the footbridge, in metres to 3 significant figures. Work in radians.</p>
      stem: "<p>원 모양 연못의 반지름은 <span class=\"mono\">5 m</span>예요. 연못을 가로질러 곧은 인도교를 놓았고, 다리로 나뉜 연못의 두 부분 중 작은 쪽의 넓이는 연못 전체 넓이의 정확히 <strong>사분의 일</strong>이에요. 연못의 중심에서 인도교까지의 최단 거리를 미터 단위로 구하고 (Find) 유효숫자 3자리로 답하시오. 라디안으로 계산하시오.</p>",
      hints: [
        // EN: Decode: the smaller piece is a circular segment. Its area depends on the angle <span class="chem">theta</span> (radians) that the bridge subtends at the centre. Set the segment area equal to a quarter of the circle and solve for <span class="chem">theta</span>; then find the perpendicular distance.
        "해석: 작은 부분은 활꼴이에요. 그 넓이는 다리가 중심에서 이루는 각 <span class=\"chem\">theta</span>(라디안)에 따라 정해져요. 활꼴의 넓이를 원의 사분의 일과 같다고 놓고 <span class=\"chem\">theta</span>를 구한 뒤, 수직 거리를 구하세요.",
        // EN: <span class="chem">(1/2)(5^2)(theta - sin theta) = (1/4)pi(5^2)</span> simplifies to <span class="chem">theta - sin theta = pi/2</span>. This cannot be solved by algebra: use your GDC (graph or solver) in radians.
        "<span class=\"chem\">(1/2)(5^2)(theta - sin theta) = (1/4)pi(5^2)</span>를 정리하면 <span class=\"chem\">theta - sin theta = pi/2</span>예요. 이 식은 대수적으로 풀 수 없으므로 GDC(그래프 또는 방정식 풀이 기능)를 라디안 모드로 쓰세요.",
        // EN: The perpendicular from the centre bisects the angle, so the distance is <span class="chem">5 cos(theta/2)</span>.
        "중심에서 내린 수선은 각을 이등분하므로 거리는 <span class=\"chem\">5 cos(theta/2)</span>예요.",
      ],
      // EN: <p><b>Decode.</b> Segment area = quarter of the circle gives an equation in <i>θ</i>, solved numerically.</p><div class="worked__math"><i>θ</i> − sin <i>θ</i> = <i>π</i>/2 ⇒ <i>θ</i> ≈ 2.3099 rad (GDC)</div><div class="worked__math">Distance = 5 cos(1.15494) ≈ <b>2.02 m</b></div>
      solution: "<p><b>해석:</b> 활꼴의 넓이 = 원의 사분의 일에서 <i>θ</i>에 대한 방정식이 나오고, 이를 수치적으로 풀어요.</p><div class=\"worked__math\"><i>θ</i> − sin <i>θ</i> = <i>π</i>/2 ⇒ <i>θ</i> ≈ 2.3099 rad (GDC)</div><div class=\"worked__math\">거리 = 5 cos(1.15494) ≈ <b>2.02 m</b></div>",
    },

    // ── t3-1-q048 · numeric · challenge · SL · SL 3.4 · 7 marks
    "t3-1-q048": {
      // EN: <p>A tight drive belt passes around two pulley wheels of radii <span class="mono">10 cm</span> and <span class="mono">4 cm</span> whose centres are <span class="mono">15 cm</span> apart. The belt does not cross itself: it consists of two straight pieces, each a common tangent to both wheels, and two arcs, one on each wheel. Find the total length of the belt, in cm to 3 significant figures. Work in radians.</p>
      stem: "<p>팽팽한 구동 벨트가 반지름이 <span class=\"mono\">10 cm</span>와 <span class=\"mono\">4 cm</span>이고 중심 사이의 거리가 <span class=\"mono\">15 cm</span>인 두 도르래에 걸려 있어요. 벨트는 서로 교차하지 않으며, 두 도르래의 공통접선인 곧은 부분 두 개와 각 도르래 위에 하나씩 있는 호 두 개로 이루어져 있어요. 벨트의 전체 길이를 cm 단위로 구하고 (Find) 유효숫자 3자리로 답하시오. 라디안으로 계산하시오.</p>",
      hints: [
        // EN: Decode: total length = 2 straight tangent pieces + arc on the large wheel + arc on the small wheel. Each piece needs right-angled trigonometry; the arcs need angles in radians and <span class="chem">l = r theta</span>.
        "해석: 전체 길이 = 곧은 접선 부분 2개 + 큰 도르래 위의 호 + 작은 도르래 위의 호. 곧은 부분에는 직각삼각형의 삼각비가, 호에는 라디안 단위의 각과 <span class=\"chem\">l = r theta</span>가 필요해요.",
        // EN: Join the centres (15 cm). Draw a line from the small centre parallel to a straight piece: it makes a right-angled triangle with hypotenuse 15 and one side <span class="chem">10 - 4 = 6</span>. So each straight piece is <span class="chem">sqrt(15^2 - 6^2)</span>, and <span class="chem">alpha = arcsin(6/15)</span>.
        "두 중심을 이으세요 (15 cm). 작은 도르래의 중심에서 곧은 부분과 평행한 선을 그으면 빗변이 15이고 한 변이 <span class=\"chem\">10 - 4 = 6</span>인 직각삼각형이 생겨요. 따라서 곧은 부분 하나의 길이는 <span class=\"chem\">sqrt(15^2 - 6^2)</span>이고, <span class=\"chem\">alpha = arcsin(6/15)</span>예요.",
        // EN: The belt wraps an angle <span class="chem">pi + 2alpha</span> around the large wheel and <span class="chem">pi - 2alpha</span> around the small wheel.
        "벨트는 큰 도르래를 각 <span class=\"chem\">pi + 2alpha</span>만큼, 작은 도르래를 각 <span class=\"chem\">pi - 2alpha</span>만큼 감싸요.",
      ],
      // EN: <p><b>Decode.</b> Split the belt into tangents and arcs; the radius difference gives a right-angled triangle.</p><div class="worked__math">Straight pieces: 2√(225 − 36) = 2√189 ≈ 27.495 cm; &nbsp; <i>α</i> = arcsin 0.4 ≈ 0.41152 rad</div><div class="worked__math">Arcs: 10(<i>π</i> + 2<i>α</i>) + 4(<i>π</i> − 2<i>α</i>) = 14<i>π</i> + 12<i>α</i> ≈ 43.982 + 4.938 = 48.920 cm</div><div class="worked__math">Total ≈ 27.495 + 48.920 ≈ <b>76.4 cm</b></div>
      solution: "<p><b>해석:</b> 벨트를 접선과 호로 나눠요. 반지름의 차에서 직각삼각형이 생겨요.</p><div class=\"worked__math\">곧은 부분: 2√(225 − 36) = 2√189 ≈ 27.495 cm; &nbsp; <i>α</i> = arcsin 0.4 ≈ 0.41152 rad</div><div class=\"worked__math\">호: 10(<i>π</i> + 2<i>α</i>) + 4(<i>π</i> − 2<i>α</i>) = 14<i>π</i> + 12<i>α</i> ≈ 43.982 + 4.938 = 48.920 cm</div><div class=\"worked__math\">전체 ≈ 27.495 + 48.920 ≈ <b>76.4 cm</b></div>",
    },

    // ── t3-1-q049 · numeric · challenge · SL · SL 3.1, 3.2 · 6 marks
    "t3-1-q049": {
      // EN: <p>A storage box is a cuboid <span class="chem">ABCDEFGH</span> with base <span class="chem">ABCD</span>, where <span class="chem">AB = 50 cm</span>, <span class="chem">BC = 30 cm</span>, and height <span class="mono">20 cm</span>; <span class="chem">E</span>, <span class="chem">F</span>, <span class="chem">G</span>, <span class="chem">H</span> are vertically above <span class="chem">A</span>, <span class="chem">B</span>, <span class="chem">C</span>, <span class="chem">D</span>. Two straight wires are fixed inside the box, one from <span class="chem">A</span> to <span class="chem">G</span> and one from <span class="chem">B</span> to <span class="chem">H</span>. They cross at the centre of the box. Find the <strong>acute</strong> angle between the wires, in degrees to 3 significant figures.</p>
      stem: "<p>수납 상자는 직육면체 <span class=\"chem\">ABCDEFGH</span>이고, 밑면 <span class=\"chem\">ABCD</span>에서 <span class=\"chem\">AB = 50 cm</span>, <span class=\"chem\">BC = 30 cm</span>, 높이는 <span class=\"mono\">20 cm</span>예요. <span class=\"chem\">E</span>, <span class=\"chem\">F</span>, <span class=\"chem\">G</span>, <span class=\"chem\">H</span>는 각각 <span class=\"chem\">A</span>, <span class=\"chem\">B</span>, <span class=\"chem\">C</span>, <span class=\"chem\">D</span>의 바로 위에 있어요. 상자 안에 곧은 철사 두 개가 고정되어 있는데, 하나는 <span class=\"chem\">A</span>에서 <span class=\"chem\">G</span>까지, 다른 하나는 <span class=\"chem\">B</span>에서 <span class=\"chem\">H</span>까지예요. 두 철사는 상자의 중심에서 만나요. 두 철사가 이루는 <strong>예각</strong>을 도 단위로 구하고 (Find) 유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: Decode: the angle between two intersecting lines in a solid. The space diagonals bisect each other at the centre <span class="chem">O</span>, so triangle <span class="chem">OAB</span> is isosceles with known sides. Watch for the word "acute".
        "해석: 입체 안에서 만나는 두 직선 사이의 각이에요. 공간 대각선은 중심 <span class=\"chem\">O</span>에서 서로를 이등분하므로, 삼각형 <span class=\"chem\">OAB</span>는 변의 길이를 아는 이등변삼각형이에요. \"예각\"이라는 말에 주의하세요.",
        // EN: Each half-diagonal is <span class="chem">OA = OB = (1/2)sqrt(50^2 + 30^2 + 20^2)</span>, and the third side is the edge <span class="chem">AB = 50</span>.
        "대각선의 절반은 각각 <span class=\"chem\">OA = OB = (1/2)sqrt(50^2 + 30^2 + 20^2)</span>이고, 세 번째 변은 모서리 <span class=\"chem\">AB = 50</span>이에요.",
        // EN: The cosine rule gives <span class="chem">angle AOB</span>, which is obtuse here. The acute angle between the lines is <span class="chem">180° - angle AOB</span>.
        "코사인법칙으로 <span class=\"chem\">angle AOB</span>를 구하면 여기서는 둔각이에요. 두 직선이 이루는 예각은 <span class=\"chem\">180° - angle AOB</span>예요.",
      ],
      // EN: <p><b>Decode.</b> Two space diagonals meet at the centre; use triangle OAB and then take the acute angle.</p><div class="worked__math"><i>OA</i><sup>2</sup> = <span class="frac"><span>3800</span><span>4</span></span> = 950 ⇒ cos ∠<i>AOB</i> = <span class="frac"><span>950 + 950 − 2500</span><span>2(950)</span></span> = −<span class="frac"><span>6</span><span>19</span></span> ⇒ ∠<i>AOB</i> ≈ 108.41°</div><div class="worked__math">Acute angle ≈ 180° − 108.41° ≈ <b>71.6°</b></div>
      solution: "<p><b>해석:</b> 두 공간 대각선이 중심에서 만나요. 삼각형 OAB를 이용한 뒤 예각을 택해요.</p><div class=\"worked__math\"><i>OA</i><sup>2</sup> = <span class=\"frac\"><span>3800</span><span>4</span></span> = 950 ⇒ cos ∠<i>AOB</i> = <span class=\"frac\"><span>950 + 950 − 2500</span><span>2(950)</span></span> = −<span class=\"frac\"><span>6</span><span>19</span></span> ⇒ ∠<i>AOB</i> ≈ 108.41°</div><div class=\"worked__math\">예각 ≈ 180° − 108.41° ≈ <b>71.6°</b></div>",
    },

    // ── t3-1-q050 · numeric · challenge · SL · SL 3.1 · 5 marks
    "t3-1-q050": {
      // EN: <p>A solid metal hemisphere of radius <span class="mono">6 cm</span> is melted down, and the metal is used to cast solid right circular cones, each with base radius <span class="mono">2 cm</span> and height <span class="mono">5 cm</span>. No metal is lost. What is the greatest number of <strong>complete</strong> cones that can be cast? (No angles are involved.)</p>
      stem: "<p>반지름이 <span class=\"mono\">6 cm</span>인 속이 찬 금속 반구를 녹여서, 그 금속으로 밑면의 반지름이 <span class=\"mono\">2 cm</span>이고 높이가 <span class=\"mono\">5 cm</span>인 속이 찬 직원뿔을 주조해요. 금속은 손실되지 않아요. 주조할 수 있는 <strong>완전한</strong> 원뿔은 최대 몇 개일까요? (각은 쓰이지 않아요.)</p>",
      hints: [
        // EN: Decode: "melted and recast" means the volume is conserved. Divide the total volume by the volume of one cone; "complete" cones means you must round <strong>down</strong> to a whole number.
        "해석: \"녹여서 다시 주조한다\"는 것은 부피가 보존된다는 뜻이에요. 전체 부피를 원뿔 하나의 부피로 나누세요. \"완전한\" 원뿔이므로 정수로 <strong>내림</strong>해야 해요.",
        // EN: Hemisphere: <span class="chem">(2/3)pi(6^3) = 144pi</span>. One cone: <span class="chem">(1/3)pi(2^2)(5) = (20pi)/3</span>.
        "반구: <span class=\"chem\">(2/3)pi(6^3) = 144pi</span>. 원뿔 하나: <span class=\"chem\">(1/3)pi(2^2)(5) = (20pi)/3</span>.",
        // EN: <span class="chem">144pi ÷ (20pi)/3 = 432/20</span>. Is this a whole number?
        "<span class=\"chem\">144pi ÷ (20pi)/3 = 432/20</span>. 이것은 정수일까요?",
      ],
      // EN: <p><b>Decode.</b> Volume is conserved; the hidden condition is that only whole cones count.</p><div class="worked__math">144<i>π</i> ÷ <span class="frac"><span>20<i>π</i></span><span>3</span></span> = <span class="frac"><span>432</span><span>20</span></span> = 21.6 ⇒ <b>21 complete cones</b></div>
      solution: "<p><b>해석:</b> 부피는 보존돼요. 숨은 조건은 완전한 원뿔만 센다는 것이에요.</p><div class=\"worked__math\">144<i>π</i> ÷ <span class=\"frac\"><span>20<i>π</i></span><span>3</span></span> = <span class=\"frac\"><span>432</span><span>20</span></span> = 21.6 ⇒ <b>완전한 원뿔 21개</b></div>",
    },

    // ── t3-1-q051 · numeric · challenge · SL · SL 3.2, 3.3 · 7 marks
    "t3-1-q051": {
      // EN: <p>Two surveyors stand at points <span class="chem">A</span> and <span class="chem">B</span> on horizontal ground, with <span class="chem">B</span> <span class="mono">200 m</span> due East of <span class="chem">A</span>. The foot <span class="chem">F</span> of a vertical radio mast is on a bearing of <span class="mono">030°</span> from <span class="chem">A</span> and on a bearing of <span class="mono">320°</span> from <span class="chem">B</span>. The angle of elevation of the top of the mast from <span class="chem">A</span> is <span class="mono">25°</span>. Find the angle of elevation of the top of the mast from <span class="chem">B</span>. All angles are in degrees; give your answer to 3 significant figures.</p>
      stem: "<p>두 측량사가 수평인 지면 위의 점 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>에 서 있고, <span class=\"chem\">B</span>는 <span class=\"chem\">A</span>의 정동쪽 <span class=\"mono\">200 m</span> 지점에 있어요. 수직인 전파탑의 밑 <span class=\"chem\">F</span>는 <span class=\"chem\">A</span>로부터 방위각 <span class=\"mono\">030°</span>, <span class=\"chem\">B</span>로부터 방위각 <span class=\"mono\">320°</span> 방향에 있어요. <span class=\"chem\">A</span>에서 탑의 꼭대기를 올려다본 각은 <span class=\"mono\">25°</span>예요. <span class=\"chem\">B</span>에서 탑의 꼭대기를 올려다본 각을 구하시오 (Find). 모든 각은 도 단위이고, 답은 유효숫자 3자리로 쓰시오.</p>",
      hints: [
        // EN: Decode: two separate triangles. First the horizontal triangle <span class="chem">ABF</span> (built from the bearings) gives the ground distances <span class="chem">AF</span> and <span class="chem">BF</span>; then two vertical right-angled triangles link those distances to the height.
        "해석: 서로 다른 두 삼각형이 있어요. 먼저 (방위각으로 만든) 수평 삼각형 <span class=\"chem\">ABF</span>에서 지면 위의 거리 <span class=\"chem\">AF</span>와 <span class=\"chem\">BF</span>를 구하고, 그다음 수직인 직각삼각형 두 개로 그 거리와 높이를 연결해요.",
        // EN: In triangle <span class="chem">ABF</span>: <span class="chem">angle FAB = 90° - 30° = 60°</span> and <span class="chem">angle FBA = 320° - 270° = 50°</span>, so <span class="chem">angle AFB = 70°</span>. Use the sine rule for <span class="chem">AF</span> and <span class="chem">BF</span>.
        "삼각형 <span class=\"chem\">ABF</span>에서 <span class=\"chem\">angle FAB = 90° - 30° = 60°</span>, <span class=\"chem\">angle FBA = 320° - 270° = 50°</span>이므로 <span class=\"chem\">angle AFB = 70°</span>예요. 사인법칙으로 <span class=\"chem\">AF</span>와 <span class=\"chem\">BF</span>를 구하세요.",
        // EN: Height <span class="chem">h = AF tan 25°</span>; the elevation from <span class="chem">B</span> is <span class="chem">arctan(h / BF)</span>.
        "높이 <span class=\"chem\">h = AF tan 25°</span>이고, <span class=\"chem\">B</span>에서 올려다본 각은 <span class=\"chem\">arctan(h / BF)</span>예요.",
      ],
      // EN: <p><b>Decode.</b> Bearings → ground triangle → sine rule; elevations → vertical right-angled triangles.</p><div class="worked__math"><i>AF</i> = <span class="frac"><span>200 sin 50°</span><span>sin 70°</span></span> ≈ 163.04 m, &nbsp; <i>BF</i> = <span class="frac"><span>200 sin 60°</span><span>sin 70°</span></span> ≈ 184.32 m</div><div class="worked__math"><i>h</i> = 163.04 tan 25° ≈ 76.027 m ⇒ elevation from <i>B</i> = arctan(76.027/184.32) ≈ <b>22.4°</b></div>
      solution: "<p><b>해석:</b> 방위각 → 지면 위의 삼각형 → 사인법칙; 올려다본 각 → 수직인 직각삼각형.</p><div class=\"worked__math\"><i>AF</i> = <span class=\"frac\"><span>200 sin 50°</span><span>sin 70°</span></span> ≈ 163.04 m, &nbsp; <i>BF</i> = <span class=\"frac\"><span>200 sin 60°</span><span>sin 70°</span></span> ≈ 184.32 m</div><div class=\"worked__math\"><i>h</i> = 163.04 tan 25° ≈ 76.027 m ⇒ <i>B</i>에서 올려다본 각 = arctan(76.027/184.32) ≈ <b>22.4°</b></div>",
    },

    // ── t3-1-q052 · short · challenge · SL · SL 3.2 · 7 marks
    "t3-1-q052": {
      // EN: <p>Three straight rods have lengths <span class="chem">x</span>, <span class="chem">x + 1</span> and <span class="chem">x + 2</span> metres. They are joined end to end to make a triangle whose largest angle is <span class="chem">(2pi)/3</span> <strong>radians</strong>.<br>(a) Find the value of <span class="chem">x</span>. <strong>[5 marks]</strong><br>(b) Find the exact area of the triangle. <strong>[2 marks]</strong></p>
      stem: "<p>세 개의 곧은 막대의 길이가 <span class=\"chem\">x</span>, <span class=\"chem\">x + 1</span>, <span class=\"chem\">x + 2</span>미터예요. 이 막대들의 끝을 이어 붙여 가장 큰 각이 <span class=\"chem\">(2pi)/3</span><strong>라디안</strong>인 삼각형을 만들어요.<br>(a) <span class=\"chem\">x</span>의 값을 구하시오 (Find). <strong>[5 marks]</strong><br>(b) 삼각형의 넓이의 정확한 값을 구하시오. <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: "largest angle" tells you which side it is opposite (the longest rod). The angle is in radians: <span class="chem">(2pi)/3 = 120°</span>, and <span class="chem">cos((2pi)/3) = -1/2</span>. Use the cosine rule to get an equation in <span class="chem">x</span>.
        "해석: \"가장 큰 각\"은 그 각이 어느 변(가장 긴 막대)의 대각인지 알려 줘요. 각은 라디안이에요: <span class=\"chem\">(2pi)/3 = 120°</span>, <span class=\"chem\">cos((2pi)/3) = -1/2</span>. 코사인법칙으로 <span class=\"chem\">x</span>에 대한 방정식을 세우세요.",
        // EN: <span class="chem">(x + 2)^2 = x^2 + (x + 1)^2 - 2x(x + 1)cos((2pi)/3)</span>.
        "<span class=\"chem\">(x + 2)^2 = x^2 + (x + 1)^2 - 2x(x + 1)cos((2pi)/3)</span>.",
        // EN: You will get a quadratic. One root is not a length.
        "이차방정식이 나와요. 한 근은 길이가 될 수 없어요.",
      ],
      // EN: <p><b>Decode.</b> The largest angle is opposite the longest side; a cosine-rule equation gives a quadratic with one invalid root.</p><div class="worked__math">(a) <i>x</i><sup>2</sup> + 4<i>x</i> + 4 = 3<i>x</i><sup>2</sup> + 3<i>x</i> + 1 ⇒ 2<i>x</i><sup>2</sup> − <i>x</i> − 3 = 0 ⇒ (2<i>x</i> − 3)(<i>x</i> + 1) = 0 ⇒ <b><i>x</i> = 3/2</b></div><div class="worked__math">(b) Area = <span class="frac"><span>1</span><span>2</span></span> × <span class="frac"><span>3</span><span>2</span></span> × <span class="frac"><span>5</span><span>2</span></span> × <span class="frac"><span>√3</span><span>2</span></span> = <b><span class="frac"><span>15√3</span><span>16</span></span> m<sup>2</sup></b></div>
      solution: "<p><b>해석:</b> 가장 큰 각은 가장 긴 변의 대각이에요. 코사인법칙의 식에서 부적합한 근을 하나 가진 이차방정식이 나와요.</p><div class=\"worked__math\">(a) <i>x</i><sup>2</sup> + 4<i>x</i> + 4 = 3<i>x</i><sup>2</sup> + 3<i>x</i> + 1 ⇒ 2<i>x</i><sup>2</sup> − <i>x</i> − 3 = 0 ⇒ (2<i>x</i> − 3)(<i>x</i> + 1) = 0 ⇒ <b><i>x</i> = 3/2</b></div><div class=\"worked__math\">(b) 넓이 = <span class=\"frac\"><span>1</span><span>2</span></span> × <span class=\"frac\"><span>3</span><span>2</span></span> × <span class=\"frac\"><span>5</span><span>2</span></span> × <span class=\"frac\"><span>√3</span><span>2</span></span> = <b><span class=\"frac\"><span>15√3</span><span>16</span></span> m<sup>2</sup></b></div>",
      // EN: <p>(a) x = 3/2; (b) area = 15√3/16 m².</p>
      answer: "<p>(a) x = 3/2; (b) 넓이 = 15√3/16 m².</p>",
      markscheme: [
        // EN: R1: The largest angle, 2π/3, is opposite the longest rod, x + 2.
        "R1: 가장 큰 각 2π/3은 가장 긴 막대 x + 2의 대각임.",
        // EN: M1: Cosine rule with cos(2π/3) = −1/2: (x + 2)² = x² + (x + 1)² + x(x + 1).
        "M1: cos(2π/3) = −1/2로 코사인법칙: (x + 2)² = x² + (x + 1)² + x(x + 1).",
        // EN: A1: Simplifies to 2x² − x − 3 = 0.
        "A1: 2x² − x − 3 = 0으로 정리함.",
        // EN: A1: (2x − 3)(x + 1) = 0.
        "A1: (2x − 3)(x + 1) = 0.",
        // EN: R1: x = 3/2, rejecting x = −1 because a length must be positive.
        "R1: 길이는 양수여야 하므로 x = −1을 버리고 x = 3/2.",
        // EN: M1: Area = (1/2)(3/2)(5/2) sin(2π/3), the angle between the two shorter rods.
        "M1: 넓이 = (1/2)(3/2)(5/2) sin(2π/3) (짧은 두 막대 사이의 각).",
        // EN: A1: Area = 15√3/16 m².
        "A1: 넓이 = 15√3/16 m².",
      ],
    },

    // ── t3-1-q053 · numeric · challenge · SL · SL 3.4 · 6 marks
    "t3-1-q053": {
      // EN: <p>A badge is cut from a sector of a circle of radius <span class="mono">12 cm</span> with central angle <span class="mono">1</span> <strong>radian</strong>. A circular hole is cut out of the sector; the hole is as large as possible, so its edge touches both straight edges and the arc of the sector. Find the area of the badge that remains, in <span class="unit">cm2</span> to 3 significant figures.</p>
      stem: "<p>반지름이 <span class=\"mono\">12 cm</span>이고 중심각이 <span class=\"mono\">1</span><strong>라디안</strong>인 부채꼴에서 배지를 잘라 내요. 부채꼴에서 원 모양의 구멍을 뚫는데, 구멍은 가능한 한 크게 만들어서 그 가장자리가 부채꼴의 두 직선 모서리와 호에 모두 닿아요. 남은 배지의 넓이를 <span class=\"unit\">cm2</span> 단위로 구하고 (Find) 유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: Decode: remaining area = sector area − area of the largest inscribed circle. The work is finding that circle’s radius <span class="chem">r</span>.
        "해석: 남은 넓이 = 부채꼴의 넓이 − 가장 큰 내접원의 넓이. 핵심은 그 원의 반지름 <span class=\"chem\">r</span>를 구하는 것이에요.",
        // EN: The centre <span class="chem">C</span> of the circle lies on the bisector of the sector angle, at distance <span class="chem">12 - r</span> from the sector’s centre <span class="chem">O</span> (because it touches the arc). The perpendicular from <span class="chem">C</span> to a straight edge has length <span class="chem">r</span>, giving <span class="chem">sin(0.5) = r/(12 - r)</span>.
        "원의 중심 <span class=\"chem\">C</span>는 부채꼴 중심각의 이등분선 위에 있고, (호에 닿으므로) 부채꼴의 중심 <span class=\"chem\">O</span>에서 거리 <span class=\"chem\">12 - r</span>만큼 떨어져 있어요. <span class=\"chem\">C</span>에서 직선 모서리에 내린 수선의 길이는 <span class=\"chem\">r</span>이므로 <span class=\"chem\">sin(0.5) = r/(12 - r)</span>이에요.",
        // EN: So <span class="chem">r = (12 sin 0.5)/(1 + sin 0.5)</span>. Sector area <span class="chem">= (1/2)(12^2)(1)</span>.
        "따라서 <span class=\"chem\">r = (12 sin 0.5)/(1 + sin 0.5)</span>이에요. 부채꼴의 넓이 <span class=\"chem\">= (1/2)(12^2)(1)</span>.",
      ],
      // EN: <p><b>Decode.</b> Sector minus inscribed circle; the circle’s radius comes from a right-angled triangle on the bisector.</p><div class="worked__math"><i>r</i> = <span class="frac"><span>12 sin 0.5</span><span>1 + sin 0.5</span></span> ≈ 3.8887 cm</div><div class="worked__math">Area = 72 − <i>π</i>(3.8887)<sup>2</sup> ≈ 72 − 47.508 ≈ <b>24.5 cm<sup>2</sup></b></div>
      solution: "<p><b>해석:</b> 부채꼴에서 내접원을 빼요. 원의 반지름은 이등분선 위의 직각삼각형에서 구해요.</p><div class=\"worked__math\"><i>r</i> = <span class=\"frac\"><span>12 sin 0.5</span><span>1 + sin 0.5</span></span> ≈ 3.8887 cm</div><div class=\"worked__math\">넓이 = 72 − <i>π</i>(3.8887)<sup>2</sup> ≈ 72 − 47.508 ≈ <b>24.5 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q054 · numeric · challenge · SL · SL 3.1, 3.3 · 5 marks
    "t3-1-q054": {
      // EN: <p>A rectangular roof panel <span class="chem">ABCD</span> has a horizontal lower edge <span class="chem">AB = 8 m</span> and edges <span class="chem">AD = BC = 5 m</span> running straight up the slope. The panel is inclined at <span class="mono">30°</span> (degrees) to the horizontal. A cable is fixed along the diagonal from <span class="chem">A</span> to <span class="chem">C</span>. Find the angle between the cable and the horizontal, in degrees to 3 significant figures.</p>
      stem: "<p>직사각형 지붕 패널 <span class=\"chem\">ABCD</span>는 수평인 아래 모서리 <span class=\"chem\">AB = 8 m</span>와 경사면을 따라 곧게 올라가는 모서리 <span class=\"chem\">AD = BC = 5 m</span>를 가져요. 패널은 수평면에 대해 <span class=\"mono\">30°</span>(도) 기울어져 있어요. 대각선을 따라 <span class=\"chem\">A</span>에서 <span class=\"chem\">C</span>까지 케이블이 고정되어 있어요. 케이블과 수평면이 이루는 각을 도 단위로 구하고 (Find) 유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: Decode: the angle between a line (<span class="chem">AC</span>) and a horizontal plane. You need the vertical height of <span class="chem">C</span> above <span class="chem">A</span> and the length <span class="chem">AC</span>; the <span class="mono">30°</span> is the slope of the panel, not the angle of the cable.
        "해석: 직선(<span class=\"chem\">AC</span>)과 수평면이 이루는 각이에요. <span class=\"chem\">A</span>를 기준으로 한 <span class=\"chem\">C</span>의 수직 높이와 길이 <span class=\"chem\">AC</span>가 필요해요. <span class=\"mono\">30°</span>는 패널의 기울기이지 케이블의 각이 아니에요.",
        // EN: Height of the top edge: <span class="chem">5 sin 30° = 2.5 m</span>. Length of the diagonal: <span class="chem">AC = sqrt(8^2 + 5^2)</span> (it lies in the rectangle).
        "위쪽 모서리의 높이: <span class=\"chem\">5 sin 30° = 2.5 m</span>. 대각선의 길이: <span class=\"chem\">AC = sqrt(8^2 + 5^2)</span>(직사각형 안에 있어요).",
        // EN: <span class="chem">sin(angle) = 2.5/sqrt(89)</span>.
        "<span class=\"chem\">sin(angle) = 2.5/sqrt(89)</span>.",
      ],
      // EN: <p><b>Decode.</b> Line–plane angle: drop a perpendicular from C to the horizontal plane through AB.</p><div class="worked__math">Rise = 5 sin 30° = 2.5 m, &nbsp; <i>AC</i> = √89 ≈ 9.434 m</div><div class="worked__math">sin <i>φ</i> = 2.5/9.434 ≈ 0.26500 ⇒ <i>φ</i> ≈ <b>15.4°</b></div>
      solution: "<p><b>해석:</b> 직선과 평면이 이루는 각: C에서 AB를 지나는 수평면에 수선을 내려요.</p><div class=\"worked__math\">높이 증가 = 5 sin 30° = 2.5 m, &nbsp; <i>AC</i> = √89 ≈ 9.434 m</div><div class=\"worked__math\">sin <i>φ</i> = 2.5/9.434 ≈ 0.26500 ⇒ <i>φ</i> ≈ <b>15.4°</b></div>",
    },

    // ── t3-1-q055 · short · challenge · SL · SL 3.2, 3.5 · 7 marks
    "t3-1-q055": {
      // EN: <p>A designer is building a triangular frame <span class="chem">ABC</span> with <span class="chem">AB = 14 cm</span> and <span class="chem">angle BAC = 38°</span> (degrees). The rod <span class="chem">BC</span> has length <span class="chem">x</span> cm, and the length of <span class="chem">AC</span> is free.<br>(a) Find the least value of <span class="chem">x</span> for which the frame can be built. <strong>[2 marks]</strong><br>(b) Write down the set of values of <span class="chem">x</span> for which <strong>two</strong> different frames can be built. <strong>[2 marks]</strong><br>(c) Given <span class="chem">x = 10</span>, find the difference between the two possible lengths of <span class="chem">AC</span>. <strong>[3 marks]</strong><br>Give answers to 3 significant figures.</p>
      stem: "<p>디자이너가 <span class=\"chem\">AB = 14 cm</span>, <span class=\"chem\">angle BAC = 38°</span>(도)인 삼각형 틀 <span class=\"chem\">ABC</span>를 만들고 있어요. 막대 <span class=\"chem\">BC</span>의 길이는 <span class=\"chem\">x</span> cm이고, <span class=\"chem\">AC</span>의 길이는 자유롭게 정할 수 있어요.<br>(a) 틀을 만들 수 있는 <span class=\"chem\">x</span>의 최솟값을 구하시오 (Find). <strong>[2 marks]</strong><br>(b) 서로 다른 틀을 <strong>두 개</strong> 만들 수 있는 <span class=\"chem\">x</span>의 값의 범위를 쓰시오 (Write down). <strong>[2 marks]</strong><br>(c) <span class=\"chem\">x = 10</span>일 때, <span class=\"chem\">AC</span>의 가능한 두 길이의 차를 구하시오. <strong>[3 marks]</strong><br>유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: Decode: this is the ambiguous case seen as a design question. The rod <span class="chem">BC</span> swings about <span class="chem">B</span> and must reach the line <span class="chem">AC</span>. Too short: no triangle; just touching: one; between the height and <span class="chem">AB</span>: two.
        "해석: 삼각형이 두 개 만들어지는 경우를 설계 문제로 본 것이에요. 막대 <span class=\"chem\">BC</span>는 <span class=\"chem\">B</span>를 중심으로 돌면서 직선 <span class=\"chem\">AC</span>에 닿아야 해요. 너무 짧으면 삼각형이 없고, 딱 닿으면 하나, 높이와 <span class=\"chem\">AB</span> 사이이면 두 개예요.",
        // EN: The distance from <span class="chem">B</span> to the line <span class="chem">AC</span> is <span class="chem">14 sin 38°</span>.
        "<span class=\"chem\">B</span>에서 직선 <span class=\"chem\">AC</span>까지의 거리는 <span class=\"chem\">14 sin 38°</span>예요.",
        // EN: For (c), use the cosine rule with the known angle at <span class="chem">A</span> and solve the quadratic in <span class="chem">AC</span>.
        "(c)에서는 <span class=\"chem\">A</span>에서의 주어진 각으로 코사인법칙을 쓰고 <span class=\"chem\">AC</span>에 대한 이차방정식을 푸세요.",
      ],
      // EN: <p><b>Decode.</b> SSA: count triangles by comparing x with the height 14 sin 38° and with AB = 14.</p><div class="worked__math">(a) <i>x</i><sub>min</sub> = 14 sin 38° ≈ <b>8.62 cm</b> &nbsp; (b) <b>8.62 &lt; <i>x</i> &lt; 14</b></div><div class="worked__math">(c) <i>b</i><sup>2</sup> − 22.064<i>b</i> + 96 = 0 ⇒ <i>b</i> ≈ 5.962 or 16.102 ⇒ difference ≈ <b>10.1 cm</b></div>
      solution: "<p><b>해석:</b> SSA: x를 높이 14 sin 38° 및 AB = 14와 비교해 삼각형의 개수를 세요.</p><div class=\"worked__math\">(a) <i>x</i><sub>min</sub> = 14 sin 38° ≈ <b>8.62 cm</b> &nbsp; (b) <b>8.62 &lt; <i>x</i> &lt; 14</b></div><div class=\"worked__math\">(c) <i>b</i><sup>2</sup> − 22.064<i>b</i> + 96 = 0 ⇒ <i>b</i> ≈ 5.962 또는 16.102 ⇒ 차 ≈ <b>10.1 cm</b></div>",
      // EN: <p>(a) x = 14 sin 38° ≈ 8.62; (b) 8.62 &lt; x &lt; 14; (c) about 10.1 cm.</p>
      answer: "<p>(a) x = 14 sin 38° ≈ 8.62; (b) 8.62 &lt; x &lt; 14; (c) 약 10.1 cm.</p>",
      markscheme: [
        // EN: M1: The shortest BC is the perpendicular from B to line AC: x = 14 sin 38°.
        "M1: 가장 짧은 BC는 B에서 직선 AC에 내린 수선임: x = 14 sin 38°.",
        // EN: A1: x ≈ 8.62 cm.
        "A1: x ≈ 8.62 cm.",
        // EN: A1: Lower bound 14 sin 38° ≈ 8.62 < x (strict: x = 8.62 gives one right-angled triangle).
        "A1: 하한 14 sin 38° ≈ 8.62 < x (등호 제외: x = 8.62이면 직각삼각형 하나만 생김).",
        // EN: A1: Upper bound x < 14 (if x ≥ 14 only one triangle).
        "A1: 상한 x < 14 (x ≥ 14이면 삼각형은 하나뿐임).",
        // EN: M1: Cosine rule with AC = b: 10² = 14² + b² − 2(14)b cos 38°.
        "M1: AC = b로 두고 코사인법칙: 10² = 14² + b² − 2(14)b cos 38°.",
        // EN: A1: b² − 22.064b + 96 = 0, so b ≈ 5.96 or 16.10.
        "A1: b² − 22.064b + 96 = 0이므로 b ≈ 5.96 또는 16.10.",
        // EN: A1: Difference ≈ 10.1 cm.
        "A1: 차 ≈ 10.1 cm.",
      ],
    },

    // ── t3-1-q056 · numeric · challenge · SL · SL 3.4 · 4 marks
    "t3-1-q056": {
      // EN: <p>The hour hand of a clock is <span class="mono">8 cm</span> long. Find the exact area swept out by the hour hand between 3:00 and 3:40 on the same afternoon, in <span class="unit">cm2</span>. Work in radians and give your answer as a multiple of <span class="chem">pi</span>.</p>
      stem: "<p>시계의 시침 길이는 <span class=\"mono\">8 cm</span>예요. 같은 날 오후 3:00부터 3:40까지 시침이 쓸고 지나간 부분의 넓이의 정확한 값을 <span class=\"unit\">cm2</span> 단위로 구하시오 (Find). 라디안으로 계산하고, 답은 <span class=\"chem\">pi</span>의 배수로 나타내시오.</p>",
      hints: [
        // EN: Decode: the swept region is a sector whose angle is the angle turned by the <strong>hour</strong> hand (not the minute hand) in 40 minutes. Convert that angle to radians, then use <span class="chem">A = (1/2)r^2 theta</span>.
        "해석: 쓸고 지나간 영역은 부채꼴이고, 그 각은 40분 동안 <strong>시</strong>침(분침이 아님)이 돈 각이에요. 그 각을 라디안으로 바꾼 뒤 <span class=\"chem\">A = (1/2)r^2 theta</span>를 쓰세요.",
        // EN: The hour hand turns <span class="chem">2pi</span> radians in 12 hours, so <span class="chem">pi/6</span> radians per hour.
        "시침은 12시간에 <span class=\"chem\">2pi</span>라디안을 돌므로, 한 시간에 <span class=\"chem\">pi/6</span>라디안을 돌아요.",
        // EN: 40 minutes is <span class="chem">2/3</span> of an hour, so <span class="chem">theta = (2/3)(pi/6) = pi/9</span>.
        "40분은 한 시간의 <span class=\"chem\">2/3</span>이므로 <span class=\"chem\">theta = (2/3)(pi/6) = pi/9</span>예요.",
      ],
      // EN: <p><b>Decode.</b> A sector problem in disguise: the angle comes from the hour hand’s rate.</p><div class="worked__math"><i>θ</i> = <span class="frac"><span>2</span><span>3</span></span> × <span class="frac"><span><i>π</i></span><span>6</span></span> = <span class="frac"><span><i>π</i></span><span>9</span></span> rad ⇒ <i>A</i> = <span class="frac"><span>1</span><span>2</span></span>(64)<span class="frac"><span><i>π</i></span><span>9</span></span> = <b><span class="frac"><span>32<i>π</i></span><span>9</span></span> cm<sup>2</sup></b></div>
      solution: "<p><b>해석:</b> 모습을 바꾼 부채꼴 문제예요. 각은 시침이 도는 빠르기에서 나와요.</p><div class=\"worked__math\"><i>θ</i> = <span class=\"frac\"><span>2</span><span>3</span></span> × <span class=\"frac\"><span><i>π</i></span><span>6</span></span> = <span class=\"frac\"><span><i>π</i></span><span>9</span></span> rad ⇒ <i>A</i> = <span class=\"frac\"><span>1</span><span>2</span></span>(64)<span class=\"frac\"><span><i>π</i></span><span>9</span></span> = <b><span class=\"frac\"><span>32<i>π</i></span><span>9</span></span> cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q057 · short · challenge · SL · SL 3.2, 3.3 · 8 marks
    "t3-1-q057": {
      // EN: <p>Two coastguard stations <span class="chem">A</span> and <span class="chem">B</span> are on a straight east–west coastline, with <span class="chem">B</span> <span class="mono">30 km</span> due East of <span class="chem">A</span>. A boat <span class="chem">S</span> out at sea, to the north of the coastline, is on a bearing of <span class="mono">058°</span> from <span class="chem">A</span> and <span class="mono">316°</span> from <span class="chem">B</span>. All angles are in degrees.<br>(a) Show that <span class="chem">angle ASB = 102°</span>. <strong>[2 marks]</strong><br>(b) Find the distance <span class="chem">AS</span>. <strong>[2 marks]</strong><br>(c) Find the shortest distance from the boat to the coastline. <strong>[2 marks]</strong><br>(d) The boat now sails due South at <span class="mono">14 km h⁻¹</span>. Find how many minutes it takes to reach the coastline. <strong>[2 marks]</strong><br>Give answers to 3 significant figures.</p>
      stem: "<p>해안경비대 기지 두 곳 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>가 동서로 곧게 뻗은 해안선 위에 있고, <span class=\"chem\">B</span>는 <span class=\"chem\">A</span>의 정동쪽 <span class=\"mono\">30 km</span> 지점에 있어요. 해안선 북쪽 바다에 있는 보트 <span class=\"chem\">S</span>는 <span class=\"chem\">A</span>로부터 방위각 <span class=\"mono\">058°</span>, <span class=\"chem\">B</span>로부터 방위각 <span class=\"mono\">316°</span> 방향에 있어요. 모든 각은 도 단위예요.<br>(a) <span class=\"chem\">angle ASB = 102°</span>임을 보이시오 (Show that). <strong>[2 marks]</strong><br>(b) 거리 <span class=\"chem\">AS</span>를 구하시오 (Find). <strong>[2 marks]</strong><br>(c) 보트에서 해안선까지의 최단 거리를 구하시오. <strong>[2 marks]</strong><br>(d) 이제 보트가 <span class=\"mono\">14 km h⁻¹</span>로 정남쪽으로 항해해요. 해안선에 도착하는 데 몇 분이 걸리는지 구하시오. <strong>[2 marks]</strong><br>유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: Decode: build triangle <span class="chem">ABS</span> from the bearings (North lines at <span class="chem">A</span> and <span class="chem">B</span>). "Shortest distance to the coastline" means the perpendicular distance; "due South" travels along exactly that perpendicular.
        "해석: 방위각으로 삼각형 <span class=\"chem\">ABS</span>를 만드세요(<span class=\"chem\">A</span>와 <span class=\"chem\">B</span>에 북쪽 방향선). \"해안선까지의 최단 거리\"는 수직 거리를 뜻하고, \"정남쪽\"으로 가면 정확히 그 수선을 따라가요.",
        // EN: At <span class="chem">A</span>, the angle between East and <span class="chem">AS</span> is <span class="chem">90° - 58°</span>; at <span class="chem">B</span>, the angle between West and <span class="chem">BS</span> is <span class="chem">316° - 270°</span>.
        "<span class=\"chem\">A</span>에서 동쪽과 <span class=\"chem\">AS</span> 사이의 각은 <span class=\"chem\">90° - 58°</span>이고, <span class=\"chem\">B</span>에서 서쪽과 <span class=\"chem\">BS</span> 사이의 각은 <span class=\"chem\">316° - 270°</span>예요.",
        // EN: For (c), use the right-angled triangle with hypotenuse <span class="chem">AS</span> and angle <span class="mono">32°</span> at <span class="chem">A</span>.
        "(c)에서는 빗변이 <span class=\"chem\">AS</span>이고 <span class=\"chem\">A</span>에서의 각이 <span class=\"mono\">32°</span>인 직각삼각형을 쓰세요.",
      ],
      // EN: <p><b>Decode.</b> Bearings → triangle angles; shortest distance → perpendicular; due South → along that perpendicular.</p><div class="worked__math">(a) 32° + 46° + ∠<i>ASB</i> = 180° ⇒ ∠<i>ASB</i> = 102°</div><div class="worked__math">(b) <i>AS</i> = <span class="frac"><span>30 sin 46°</span><span>sin 102°</span></span> ≈ <b>22.1 km</b> &nbsp; (c) <i>d</i> = 22.062 sin 32° ≈ <b>11.7 km</b></div><div class="worked__math">(d) <i>t</i> = 11.691/14 h ≈ <b>50.1 min</b></div>
      solution: "<p><b>해석:</b> 방위각 → 삼각형의 각; 최단 거리 → 수선; 정남쪽 → 그 수선을 따라 이동.</p><div class=\"worked__math\">(a) 32° + 46° + ∠<i>ASB</i> = 180° ⇒ ∠<i>ASB</i> = 102°</div><div class=\"worked__math\">(b) <i>AS</i> = <span class=\"frac\"><span>30 sin 46°</span><span>sin 102°</span></span> ≈ <b>22.1 km</b> &nbsp; (c) <i>d</i> = 22.062 sin 32° ≈ <b>11.7 km</b></div><div class=\"worked__math\">(d) <i>t</i> = 11.691/14 h ≈ <b>50.1분</b></div>",
      // EN: <p>(a) ∠SAB = 32°, ∠SBA = 46°, so ∠ASB = 102°. (b) AS ≈ 22.1 km. (c) ≈ 11.7 km. (d) ≈ 50.1 minutes.</p>
      answer: "<p>(a) ∠SAB = 32°, ∠SBA = 46°이므로 ∠ASB = 102°. (b) AS ≈ 22.1 km. (c) ≈ 11.7 km. (d) ≈ 50.1분.</p>",
      markscheme: [
        // EN: M1: ∠SAB = 90° − 58° = 32° and ∠SBA = 316° − 270° = 46°.
        "M1: ∠SAB = 90° − 58° = 32°, ∠SBA = 316° − 270° = 46°.",
        // EN: A1: ∠ASB = 180° − 32° − 46° = 102°. AG: angle ASB = 102°; the given line itself earns no mark.
        "A1: ∠ASB = 180° − 32° − 46° = 102°. AG: angle ASB = 102°; 주어진 결론 줄 자체에는 점수가 없음.",
        // EN: M1: Sine rule: AS/sin 46° = 30/sin 102°.
        "M1: 사인법칙: AS/sin 46° = 30/sin 102°.",
        // EN: A1: AS ≈ 22.1 km (22.062).
        "A1: AS ≈ 22.1 km (22.062).",
        // EN: M1: Shortest distance is perpendicular to AB: d = AS sin 32°.
        "M1: 최단 거리는 AB에 수직인 거리: d = AS sin 32°.",
        // EN: A1: d ≈ 11.7 km (11.691).
        "A1: d ≈ 11.7 km (11.691).",
        // EN: M1: The coastline runs east–west, so sailing due South follows this perpendicular: time = d ÷ 14 hours.
        "M1: 해안선이 동서 방향이므로 정남쪽으로 항해하면 이 수선을 따라감: 시간 = d ÷ 14시간.",
        // EN: A1: Time = 11.691/14 h ≈ 0.83509 h ≈ 50.1 minutes.
        "A1: 시간 = 11.691/14 h ≈ 0.83509 h ≈ 50.1분.",
      ],
    },

    // ── t3-1-q058 · short · challenge · SL · SL 3.2, 3.3 · 8 marks
    "t3-1-q058": {
      // EN: <p>A farmer’s field is a quadrilateral <span class="chem">PQRS</span>. A surveyor measures <span class="chem">PQ = 120 m</span>, <span class="chem">QR = 95 m</span>, <span class="chem">RS = 80 m</span>, <span class="chem">angle PQR = 104°</span> and <span class="chem">angle PRS = 52°</span> (angles in degrees). The field is to be fenced all the way round.<br>(a) Find the length of the diagonal <span class="chem">PR</span>. <strong>[2 marks]</strong><br>(b) Find the area of the field. <strong>[3 marks]</strong><br>(c) Find the total length of fencing needed. <strong>[3 marks]</strong><br>Give answers to 3 significant figures.</p>
      stem: "<p>한 농부의 밭은 사각형 <span class=\"chem\">PQRS</span>예요. 측량사가 <span class=\"chem\">PQ = 120 m</span>, <span class=\"chem\">QR = 95 m</span>, <span class=\"chem\">RS = 80 m</span>, <span class=\"chem\">angle PQR = 104°</span>, <span class=\"chem\">angle PRS = 52°</span>(각은 도)를 측정했어요. 밭의 둘레 전체에 울타리를 치려고 해요.<br>(a) 대각선 <span class=\"chem\">PR</span>의 길이를 구하시오 (Find). <strong>[2 marks]</strong><br>(b) 밭의 넓이를 구하시오. <strong>[3 marks]</strong><br>(c) 필요한 울타리의 전체 길이를 구하시오. <strong>[3 marks]</strong><br>유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: Decode: a quadrilateral is two triangles sharing the diagonal <span class="chem">PR</span>. "Fenced all the way round" means the perimeter, so the missing side <span class="chem">PS</span> is needed.
        "해석: 사각형은 대각선 <span class=\"chem\">PR</span>을 공유하는 두 삼각형이에요. \"둘레 전체에 울타리를 친다\"는 둘레의 길이를 뜻하므로, 모르는 변 <span class=\"chem\">PS</span>가 필요해요.",
        // EN: Triangle <span class="chem">PQR</span>: two sides and the included angle, so cosine rule for <span class="chem">PR</span> and <span class="chem">(1/2)ab sin C</span> for its area.
        "삼각형 <span class=\"chem\">PQR</span>: 두 변과 그 끼인각을 알므로, <span class=\"chem\">PR</span>은 코사인법칙으로, 넓이는 <span class=\"chem\">(1/2)ab sin C</span>로 구하세요.",
        // EN: Triangle <span class="chem">PRS</span>: you now know <span class="chem">PR</span>, <span class="chem">RS</span> and the included angle <span class="chem">angle PRS</span>. Keep <span class="chem">PR</span> to full accuracy.
        "삼각형 <span class=\"chem\">PRS</span>: 이제 <span class=\"chem\">PR</span>, <span class=\"chem\">RS</span>와 끼인각 <span class=\"chem\">angle PRS</span>를 알아요. <span class=\"chem\">PR</span>은 반올림하지 말고 그대로 쓰세요.",
      ],
      // EN: <p><b>Decode.</b> Split by the diagonal; each triangle is SAS.</p><div class="worked__math">(a) <i>PR</i> = √(14400 + 9025 − 22800 cos 104°) ≈ <b>170 m</b></div><div class="worked__math">(b) <span class="frac"><span>1</span><span>2</span></span>(120)(95) sin 104° + <span class="frac"><span>1</span><span>2</span></span>(170.12)(80) sin 52° ≈ 5530.7 + 5362.3 ≈ <b>10 900 m<sup>2</sup></b></div><div class="worked__math">(c) <i>PS</i> ≈ 136.32 m ⇒ fencing ≈ <b>431 m</b></div>
      solution: "<p><b>해석:</b> 대각선으로 나눠요. 각 삼각형은 SAS예요.</p><div class=\"worked__math\">(a) <i>PR</i> = √(14400 + 9025 − 22800 cos 104°) ≈ <b>170 m</b></div><div class=\"worked__math\">(b) <span class=\"frac\"><span>1</span><span>2</span></span>(120)(95) sin 104° + <span class=\"frac\"><span>1</span><span>2</span></span>(170.12)(80) sin 52° ≈ 5530.7 + 5362.3 ≈ <b>10 900 m<sup>2</sup></b></div><div class=\"worked__math\">(c) <i>PS</i> ≈ 136.32 m ⇒ 울타리 ≈ <b>431 m</b></div>",
      // EN: <p>(a) PR ≈ 170 m (170.12); (b) area ≈ 10 900 m² (10 893); (c) PS ≈ 136 m, so fencing ≈ 431 m.</p>
      answer: "<p>(a) PR ≈ 170 m (170.12); (b) 넓이 ≈ 10 900 m² (10 893); (c) PS ≈ 136 m이므로 울타리 ≈ 431 m.</p>",
      markscheme: [
        // EN: M1: Cosine rule in triangle PQR: PR² = 120² + 95² − 2(120)(95) cos 104°.
        "M1: 삼각형 PQR에서 코사인법칙: PR² = 120² + 95² − 2(120)(95) cos 104°.",
        // EN: A1: PR ≈ 170 m (170.12).
        "A1: PR ≈ 170 m (170.12).",
        // EN: M1: Splits the field along PR into two triangles and uses (1/2)ab sin C for each.
        "M1: 밭을 PR을 따라 두 삼각형으로 나누고 각각에 (1/2)ab sin C를 이용함.",
        // EN: A1: Triangle PQR ≈ 5530.7 m² and triangle PRS ≈ 5362.3 m².
        "A1: 삼각형 PQR ≈ 5530.7 m², 삼각형 PRS ≈ 5362.3 m².",
        // EN: A1: Area ≈ 10 900 m² (10 893).
        "A1: 넓이 ≈ 10 900 m² (10 893).",
        // EN: M1: Cosine rule in triangle PRS: PS² = 170.12² + 80² − 2(170.12)(80) cos 52°.
        "M1: 삼각형 PRS에서 코사인법칙: PS² = 170.12² + 80² − 2(170.12)(80) cos 52°.",
        // EN: A1: PS ≈ 136 m (136.32).
        "A1: PS ≈ 136 m (136.32).",
        // EN: A1: Fencing = 120 + 95 + 80 + 136.32 ≈ 431 m.
        "A1: 울타리 = 120 + 95 + 80 + 136.32 ≈ 431 m.",
      ],
    },

    // ── t3-1-q059 · numeric · challenge · SL · SL 3.1 · 6 marks
    "t3-1-q059": {
      // EN: <p>A child’s spinning top is a solid made of a right circular cone joined to a hemisphere along their common circular face of radius <span class="mono">3 cm</span>. The cone and the hemisphere are made of the same material and have the <strong>same mass</strong>. Find the exact total surface area of the top, in <span class="unit">cm2</span>, in terms of <span class="chem">pi</span>. (No angles are involved.)</p>
      stem: "<p>어린이용 팽이는 직원뿔과 반구를 반지름이 <span class=\"mono\">3 cm</span>인 공통의 원 모양 면을 따라 붙인 속이 찬 입체예요. 원뿔과 반구는 같은 재료로 만들어졌고 <strong>질량이 같아요</strong>. 팽이의 전체 겉넓이의 정확한 값을 <span class=\"chem\">pi</span>를 써서 <span class=\"unit\">cm2</span> 단위로 구하시오 (Find). (각은 쓰이지 않아요.)</p>",
      hints: [
        // EN: Decode: "same material, same mass" means the two parts have the same <strong>volume</strong>; use that to find the cone’s height. The surface of the top is the curved part of the cone plus the curved part of the hemisphere (the joining face is hidden).
        "해석: \"같은 재료, 같은 질량\"은 두 부분의 <strong>부피</strong>가 같다는 뜻이에요. 이를 이용해 원뿔의 높이를 구하세요. 팽이의 겉면은 원뿔의 곡면과 반구의 곡면이에요(붙은 면은 가려져 있어요).",
        // EN: <span class="chem">(1/3)pi(3^2)h = (2/3)pi(3^3)</span> gives <span class="chem">h = 6</span>. Then the slant height is <span class="chem">l = sqrt(3^2 + 6^2)</span>.
        "<span class=\"chem\">(1/3)pi(3^2)h = (2/3)pi(3^3)</span>에서 <span class=\"chem\">h = 6</span>이에요. 그러면 모선의 길이는 <span class=\"chem\">l = sqrt(3^2 + 6^2)</span>예요.",
        // EN: Total <span class="chem">= pi r l + 2pi r^2</span>.
        "전체 <span class=\"chem\">= pi r l + 2pi r^2</span>.",
      ],
      // EN: <p><b>Decode.</b> Equal mass with the same material means equal volume; the shared circular face is not on the surface.</p><div class="worked__math">3<i>πh</i> = 18<i>π</i> ⇒ <i>h</i> = 6, &nbsp; <i>l</i> = √45 = 3√5</div><div class="worked__math"><i>A</i> = <i>π</i>(3)(3√5) + 2<i>π</i>(9) = <b>18<i>π</i> + 9√5<i>π</i> cm<sup>2</sup></b> (≈ 120 cm<sup>2</sup>)</div>
      solution: "<p><b>해석:</b> 같은 재료에서 질량이 같으면 부피가 같아요. 공통의 원 모양 면은 겉면에 포함되지 않아요.</p><div class=\"worked__math\">3<i>πh</i> = 18<i>π</i> ⇒ <i>h</i> = 6, &nbsp; <i>l</i> = √45 = 3√5</div><div class=\"worked__math\"><i>A</i> = <i>π</i>(3)(3√5) + 2<i>π</i>(9) = <b>18<i>π</i> + 9√5<i>π</i> cm<sup>2</sup></b> (≈ 120 cm<sup>2</sup>)</div>",
    },

    // ── t3-1-q060 · numeric · challenge · SL · SL 3.2 · 5 marks
    "t3-1-q060": {
      // EN: <p>A triangular sail has two edges of length <span class="mono">6 m</span> and <span class="mono">8 m</span> meeting at the top corner, where the angle between them is <strong>obtuse</strong>. The area of the sail is <span class="mono">12 m²</span>. Find the exact value of the <strong>square</strong> of the length of the third edge, in <span class="unit">m2</span>. Angles are in degrees.</p>
      stem: "<p>삼각형 돛의 두 모서리의 길이는 <span class=\"mono\">6 m</span>와 <span class=\"mono\">8 m</span>이고, 두 모서리는 위쪽 꼭짓점에서 만나며 그 사이의 각은 <strong>둔각</strong>이에요. 돛의 넓이는 <span class=\"mono\">12 m²</span>예요. 세 번째 모서리 길이의 <strong>제곱</strong>의 정확한 값을 <span class=\"unit\">m2</span> 단위로 구하시오 (Find). 각은 도 단위예요.</p>",
      hints: [
        // EN: Decode: the area gives <span class="chem">sin</span> of the angle between the edges, which has two possible angles; "obtuse" picks one. Then the cosine rule gives the third edge squared.
        "해석: 넓이에서 두 모서리 사이의 각의 <span class=\"chem\">sin</span> 값을 알 수 있고, 가능한 각은 두 가지예요. \"둔각\"이 그중 하나를 골라요. 그다음 코사인법칙으로 세 번째 모서리의 제곱을 구해요.",
        // EN: <span class="chem">(1/2)(6)(8) sin theta = 12</span> gives <span class="chem">sin theta = 1/2</span>, so <span class="chem">theta = 30°</span> or <span class="chem">150°</span>.
        "<span class=\"chem\">(1/2)(6)(8) sin theta = 12</span>에서 <span class=\"chem\">sin theta = 1/2</span>이므로 <span class=\"chem\">theta = 30°</span> 또는 <span class=\"chem\">150°</span>예요.",
        // EN: With <span class="chem">theta = 150°</span>, <span class="chem">cos theta = -sqrt(3)/2</span>, and <span class="chem">c^2 = 6^2 + 8^2 - 2(6)(8)cos 150°</span>.
        "<span class=\"chem\">theta = 150°</span>이면 <span class=\"chem\">cos theta = -sqrt(3)/2</span>이고, <span class=\"chem\">c^2 = 6^2 + 8^2 - 2(6)(8)cos 150°</span>예요.",
      ],
      // EN: <p><b>Decode.</b> Area → sin θ → choose the obtuse angle → cosine rule.</p><div class="worked__math">24 sin <i>θ</i> = 12 ⇒ sin <i>θ</i> = <span class="frac"><span>1</span><span>2</span></span> ⇒ <i>θ</i> = 150° (obtuse)</div><div class="worked__math"><i>c</i><sup>2</sup> = 36 + 64 − 96(−√3/2) = <b>100 + 48√3 m<sup>2</sup></b></div>
      solution: "<p><b>해석:</b> 넓이 → sin θ → 둔각을 고름 → 코사인법칙.</p><div class=\"worked__math\">24 sin <i>θ</i> = 12 ⇒ sin <i>θ</i> = <span class=\"frac\"><span>1</span><span>2</span></span> ⇒ <i>θ</i> = 150° (둔각)</div><div class=\"worked__math\"><i>c</i><sup>2</sup> = 36 + 64 − 96(−√3/2) = <b>100 + 48√3 m<sup>2</sup></b></div>",
    },

  }
});
