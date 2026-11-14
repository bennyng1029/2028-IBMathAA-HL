/* t3-2 — ko translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't3-2', {
  strings: {

    // page title (browser tab)
    "3.2 The unit circle, trig identities and periodic models | Analysis Lab": "3.2 단위원, 삼각함수의 항등식과 주기 모델 | Analysis Lab",

    // The unit circle, trig identities and periodic models > page header > p
    "Topic 3.2 · SL 3.5–3.8 + AHL 3.9–3.11": "Topic 3.2 · SL 3.5–3.8 + AHL 3.9–3.11",

    // The unit circle, trig identities and periodic models > page header > h1
    "The unit circle, trig identities and periodic models": "단위원, 삼각함수의 항등식과 주기 모델",

    // The unit circle, trig identities and periodic models > page header > span
    "How does rotating a point around a unit circle turn right-angled triangle ratios into periodic waves that model tides, seasons, and oscillations?": "단위원 위에서 점을 회전시키면 직각삼각형의 삼각비가 어떻게 조수, 계절, 진동을 모델링하는 주기적인 파동으로 바뀔까요?",

    // What you need to be able to do > data-toc attribute
    "Checklist": "학습 체크리스트",

    // What you need to be able to do > h2
    "What you need to be able to do": "할 수 있어야 하는 내용",

    // What you need to be able to do > p
    "Tick each skill when you can do it without looking at your notes. Items marked <strong>AHL</strong> are tested on Higher Level papers only.": "노트를 보지 않고도 할 수 있는 항목에 체크하세요. <strong>AHL</strong> 표시가 있는 내용은 HL 시험에서만 출제돼요.",

    // What you need to be able to do > checklist > span
    "Define <span class=\"chem\">cos theta</span>, <span class=\"chem\">sin theta</span>, and <span class=\"chem\">tan theta</span> on the unit circle and state exact values for multiples of <span class=\"chem\">0, pi/6, pi/4, pi/3, pi/2</span> across all four quadrants.": "단위원 위에서 <span class=\"chem\">cos theta</span>, <span class=\"chem\">sin theta</span>, <span class=\"chem\">tan theta</span>를 정의하고, 4개 사분면 전체에서 <span class=\"chem\">0, pi/6, pi/4, pi/3, pi/2</span>의 배수에 대한 정확한 값을 말할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Apply <span class=\"chem\">tan theta = sin theta / cos theta</span>, <span class=\"chem\">cos^2 theta + sin^2 theta = 1</span>, and the double-angle identities for <span class=\"chem\">sin 2theta</span> and <span class=\"chem\">cos 2theta</span>.": "<span class=\"chem\">tan theta = sin theta / cos theta</span>, <span class=\"chem\">cos^2 theta + sin^2 theta = 1</span>, 그리고 <span class=\"chem\">sin 2theta</span>와 <span class=\"chem\">cos 2theta</span>의 배각 공식을 적용할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Sketch and build periodic models <span class=\"chem\">y = a sin(b(x - c)) + d</span> and <span class=\"chem\">y = a cos(b(x - c)) + d</span> from amplitude, period, phase shift, and principal axis.": "진폭, 주기, 위상 이동, 중심선(주축)으로부터 주기 모델 <span class=\"chem\">y = a sin(b(x - c)) + d</span>와 <span class=\"chem\">y = a cos(b(x - c)) + d</span>를 그리고 식을 세울 수 있어요.",

    // What you need to be able to do > checklist > span
    "Solve linear, quadratic, and multiple-angle trigonometric equations analytically and graphically on a finite interval.": "유한 구간에서 일차, 이차 및 배각 삼각방정식을 대수적·그래프적으로 풀 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Use reciprocal ratios <span class=\"chem\">sec theta, cosec theta, cot theta</span> and Pythagorean identities <span class=\"chem\">1 + tan^2 theta = sec^2 theta</span> and <span class=\"chem\">1 + cot^2 theta = cosec^2 theta</span>.": "역수 삼각비 <span class=\"chem\">sec theta, cosec theta, cot theta</span>와 피타고라스 항등식 <span class=\"chem\">1 + tan^2 theta = sec^2 theta</span>, <span class=\"chem\">1 + cot^2 theta = cosec^2 theta</span>를 사용할 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Expand and simplify expressions using compound-angle identities <span class=\"chem\">sin(A +- B), cos(A +- B), tan(A +- B)</span> and <span class=\"chem\">tan 2theta</span>.": "덧셈 정리 <span class=\"chem\">sin(A +- B), cos(A +- B), tan(A +- B)</span>와 <span class=\"chem\">tan 2theta</span>를 이용해 식을 전개하고 간단히 할 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "State the restricted domains and principal ranges of <span class=\"chem\">arcsin x, arccos x, arctan x</span>, sketch their graphs, and simplify compositions like <span class=\"chem\">cos(arcsin x)</span>.": "<span class=\"chem\">arcsin x, arccos x, arctan x</span>의 제한된 정의역과 치역을 말하고, 그래프를 그리며, <span class=\"chem\">cos(arcsin x)</span> 같은 합성식을 간단히 할 수 있어요.",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "문제 디코더",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "문제 디코더: 어떤 공식을 쓸지 바로 찾기",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — Unit circle, identities, periodic models and equations": "문제 디코더 — 단위원, 항등식, 주기 모델과 방정식",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "시험 문제의 표현",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "수학적 의미 (공식 및 식 세우기)",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1 (계산기 불가) vs Paper 2 (GDC)",

    // Question decoder: spotting which technique to use > table > th
    "“Given <span class=\"chem\">sin theta = 3/5</span> and <span class=\"chem\">theta</span> is obtuse, find <span class=\"chem\">cos 2theta</span> and <span class=\"chem\">sin 2theta</span>”": "“<span class=\"chem\">sin theta = 3/5</span>이고 <span class=\"chem\">theta</span>가 둔각일 때, <span class=\"chem\">cos 2theta</span>와 <span class=\"chem\">sin 2theta</span>를 구하시오”",

    // Question decoder: spotting which technique to use > table > td
    "Draw a <span class=\"mono\">3-4-5</span> right triangle in Quadrant II (<span class=\"chem\">pi/2 &lt; theta &lt; pi</span>) where <span class=\"chem\">cos theta = -4/5</span> (negative!). Then substitute into <span class=\"chem\">cos 2theta = 1 - 2 sin^2 theta</span> and <span class=\"chem\">sin 2theta = 2 sin theta cos theta</span>.": "제2사분면(<span class=\"chem\">pi/2 &lt; theta &lt; pi</span>)에 <span class=\"mono\">3-4-5</span> 직각삼각형을 그리세요. 여기서는 <span class=\"chem\">cos theta = -4/5</span> (음수!)예요. 그런 다음 <span class=\"chem\">cos 2theta = 1 - 2 sin^2 theta</span>와 <span class=\"chem\">sin 2theta = 2 sin theta cos theta</span>에 대입하세요.",

    // Question decoder: spotting which technique to use > table > td
    "Never try to find <span class=\"chem\">theta</span> in degrees/radians on Paper 1! You only need the fractions <span class=\"chem\">sin theta</span> and <span class=\"chem\">cos theta</span>.": "Paper 1에서 절대 <span class=\"chem\">theta</span>를 도나 라디안으로 구하려 하지 마세요! 분수 <span class=\"chem\">sin theta</span>와 <span class=\"chem\">cos theta</span>만 있으면 돼요.",

    // Question decoder: spotting which technique to use > table > th
    "“Solve <span class=\"chem\">cos 2x + 3 cos x + 2 = 0</span>” vs “Solve <span class=\"chem\">cos 2x - sin x = 0</span>”": "“<span class=\"chem\">cos 2x + 3 cos x + 2 = 0</span>을 푸시오” vs “<span class=\"chem\">cos 2x - sin x = 0</span>을 푸시오”",

    // Question decoder: spotting which technique to use > table > td
    "Pick the form of <span class=\"chem\">cos 2x</span> that matches the linear term:<br>• With <span class=\"chem\">cos x</span>: use <span class=\"chem\">2 cos^2 x - 1</span>.<br>• With <span class=\"chem\">sin x</span>: use <span class=\"chem\">1 - 2 sin^2 x</span>.": "일차항과 일치하는 <span class=\"chem\">cos 2x</span>의 공식을 고르세요:<br>• <span class=\"chem\">cos x</span>가 있으면: <span class=\"chem\">2 cos^2 x - 1</span> 사용.<br>• <span class=\"chem\">sin x</span>가 있으면: <span class=\"chem\">1 - 2 sin^2 x</span> 사용.",

    // Question decoder: spotting which technique to use > table > td
    "Factor the resulting quadratic in <span class=\"chem\">cos x</span> or <span class=\"chem\">sin x</span>. Reject any root outside <span class=\"chem\">[-1, 1]</span>.": "<span class=\"chem\">cos x</span> 또는 <span class=\"chem\">sin x</span>에 대한 이차방정식을 인수분해하세요. <span class=\"chem\">[-1, 1]</span> 밖의 근은 제외하세요.",

    // Question decoder: spotting which technique to use > table > th
    "“A Ferris wheel / tide has maximum height <span class=\"chem\">M</span> at <span class=\"chem\">t = t_1</span> and minimum <span class=\"chem\">m</span> at <span class=\"chem\">t = t_2</span>”": "“대관람차 / 조수의 높이가 <span class=\"chem\">t = t_1</span>에서 최댓값 <span class=\"chem\">M</span>, <span class=\"chem\">t = t_2</span>에서 최솟값 <span class=\"chem\">m</span>이다”",

    // Question decoder: spotting which technique to use > table > td
    "• Amplitude <span class=\"chem\">|a| = (M - m)/2</span><br>• Principal axis <span class=\"chem\">d = (M + m)/2</span><br>• Half-period <span class=\"chem\">T/2 = |t_2 - t_1|</span>, so <span class=\"chem\">T = 2|t_2 - t_1|</span> and <span class=\"chem\">b = 2pi / T</span>.": "• 진폭 <span class=\"chem\">|a| = (M - m)/2</span><br>• 중심선(주축) <span class=\"chem\">d = (M + m)/2</span><br>• 반주기 <span class=\"chem\">T/2 = |t_2 - t_1|</span>이므로 <span class=\"chem\">T = 2|t_2 - t_1|</span>이고 <span class=\"chem\">b = 2pi / T</span>예요.",

    // Question decoder: spotting which technique to use > table > td
    "Using <span class=\"chem\">y = a cos(b(t - t_1)) + d</span> with <span class=\"chem\">a &gt; 0</span> automatically places a maximum at <span class=\"chem\">t = t_1</span>!": "<span class=\"chem\">a &gt; 0</span>인 <span class=\"chem\">y = a cos(b(t - t_1)) + d</span>를 쓰면 자동으로 <span class=\"chem\">t = t_1</span>에서 최댓값이 돼요!",

    // Question decoder: spotting which technique to use > table > th
    "“Solve <span class=\"chem\">sin(2x) = 1/2</span> for <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>”": "“<span class=\"chem\">0 &lt;= x &lt;= 2pi</span>에서 <span class=\"chem\">sin(2x) = 1/2</span>을 푸시오”",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Expand the interval first!</strong> Since <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>, let <span class=\"chem\">u = 2x</span> so <span class=\"chem\">0 &lt;= u &lt;= 4pi</span>. Find all 4 values of <span class=\"chem\">u</span> in two full revolutions before dividing by 2.": "<strong>먼저 구간을 확장하세요!</strong> <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>이므로 <span class=\"chem\">u = 2x</span>라 두면 <span class=\"chem\">0 &lt;= u &lt;= 4pi</span>예요. 2로 나누기 전에 두 바퀴 안에서 4개의 <span class=\"chem\">u</span> 값을 모두 구하세요.",

    // Question decoder: spotting which technique to use > table > td
    "Dividing by 2 before listing coterminal angles loses half the solutions!": "동경의 일반각을 모두 나열하기 전에 2로 나누면 해의 절반을 잃어버려요!",

    // Question decoder: spotting which technique to use > table > Additional HL > th
    "<strong>[AHL]</strong> “Simplify <span class=\"chem\">cos(arcsin x)</span> or <span class=\"chem\">tan(2 arctan(1/3))</span>”": "<strong>[AHL]</strong> “<span class=\"chem\">cos(arcsin x)</span> 또는 <span class=\"chem\">tan(2 arctan(1/3))</span>을 간단히 하시오”",

    // Question decoder: spotting which technique to use > table > Additional HL > td
    "Let <span class=\"chem\">theta = arcsin x</span>, so <span class=\"chem\">sin theta = x/1</span> on a right triangle with adjacent side <span class=\"chem\">sqrt(1 - x^2)</span>. For <span class=\"chem\">tan(2A)</span>, use <span class=\"chem\">(2 tan A)/(1 - tan^2 A)</span>.": "<span class=\"chem\">theta = arcsin x</span>라 두면 밑변이 <span class=\"chem\">sqrt(1 - x^2)</span>인 직각삼각형에서 <span class=\"chem\">sin theta = x/1</span>이에요. <span class=\"chem\">tan(2A)</span>는 <span class=\"chem\">(2 tan A)/(1 - tan^2 A)</span>를 쓰세요.",

    // Question decoder: spotting which technique to use > table > Additional HL > td
    "Always check that the angle lies in the principal range of the inverse trig function.": "항상 각이 역삼각함수의 주치역 안에 있는지 확인하세요.",

    // The unit circle, exact ratios and fundamental identities > data-toc attribute
    "Unit circle & identities": "단위원과 항등식",

    // The unit circle, exact ratios and fundamental identities > h2
    "The unit circle, exact ratios and fundamental identities": "단위원, 특수각의 삼각비와 기본 항등식",

    // The unit circle, exact ratios and fundamental identities > p
    "<strong>Before you start:</strong> you need radian measure, arc length and the exact ratios from right-angled triangles in <a href=\"t3-1.html\">3.1 3D geometry, triangle trigonometry and radians</a>.": "<strong>시작하기 전에:</strong> <a href=\"t3-1.html\">3.1 3D 공간기하, 삼각비와 호도법</a>에서 배운 호도법, 호의 길이, 직각삼각형의 정확한 삼각비가 필요해요.",

    // The unit circle, exact ratios and fundamental identities > p
    "The <dfn data-def=\"The circle of radius 1 centred at the origin (0, 0), with equation x² + y² = 1.\">unit circle</dfn> has centre <span class=\"chem\">(0, 0)</span> and radius <span class=\"mono\">1</span>. If a ray from the origin makes an angle <span class=\"chem\">theta</span> counter-clockwise from the positive <span class=\"chem\">x</span>-axis and meets the unit circle at <span class=\"chem\">P(x, y)</span>, then by definition:": "<dfn data-def=\"The circle of radius 1 centred at the origin (0, 0), with equation x² + y² = 1.\">단위원 <span class=\"en-term\">(unit circle)</span></dfn>은 중심이 <span class=\"chem\">(0, 0)</span>이고 반지름이 <span class=\"mono\">1</span>인 원이에요. 원점에서 출발한 반직선이 양의 <span class=\"chem\">x</span>축에서 반시계 방향으로 각 <span class=\"chem\">theta</span>를 이루며 단위원과 <span class=\"chem\">P(x, y)</span>에서 만날 때, 정의에 의해:",

    // The unit circle, exact ratios and fundamental identities > data-def attribute
    "The circle of radius 1 centred at the origin (0, 0), with equation x² + y² = 1.": "중심이 원점 (0, 0)이고 반지름이 1인 원 (방정식 x² + y² = 1).",

    // The unit circle, exact ratios and fundamental identities > equation > maths line
    "<i>x</i> = cos <i>θ</i>, &nbsp;&nbsp; <i>y</i> = sin <i>θ</i>, &nbsp;&nbsp; tan <i>θ</i> = <span class=\"frac\"><span>sin <i>θ</i></span><span>cos <i>θ</i></span></span> = <span class=\"frac\"><span><i>y</i></span><span><i>x</i></span></span> &nbsp; (gradient of <i>OP</i>)": "<i>x</i> = cos <i>θ</i>, &nbsp;&nbsp; <i>y</i> = sin <i>θ</i>, &nbsp;&nbsp; tan <i>θ</i> = <span class=\"frac\"><span>sin <i>θ</i></span><span>cos <i>θ</i></span></span> = <span class=\"frac\"><span><i>y</i></span><span><i>x</i></span></span> &nbsp; (<i>OP</i>의 기울기)",

    // The unit circle, exact ratios and fundamental identities > equation > dt
    "cos²θ + sin²θ = 1": "cos²θ + sin²θ = 1",

    // The unit circle, exact ratios and fundamental identities > equation > dd
    "Pythagoras' theorem <span class=\"chem\">x^2 + y^2 = 1</span> on the unit circle": "단위원 위의 피타고라스 정리 <span class=\"chem\">x^2 + y^2 = 1</span>",

    // The unit circle, exact ratios and fundamental identities > equation > dt
    "sin 2θ = 2 sin θ cos θ": "sin 2θ = 2 sin θ cos θ",

    // The unit circle, exact ratios and fundamental identities > equation > dd
    "Double-angle identity for sine": "사인의 배각 공식",

    // The unit circle, exact ratios and fundamental identities > equation > dt
    "cos 2θ": "cos 2θ",

    // The unit circle, exact ratios and fundamental identities > equation > dd
    "<span class=\"chem\">cos^2 theta - sin^2 theta = 2 cos^2 theta - 1 = 1 - 2 sin^2 theta</span>": "<span class=\"chem\">cos^2 theta - sin^2 theta = 2 cos^2 theta - 1 = 1 - 2 sin^2 theta</span>",

    // The unit circle, exact ratios and fundamental identities > h3
    "Exact trigonometric values (Paper 1 must-know table)": "특수각의 삼각비 (Paper 1 필수 암기표)",

    // The unit circle, exact ratios and fundamental identities > p
    "You are not given exact values in the Formula Booklet. An easy memory trick for the first quadrant is the <strong>square-root-over-2 ladder</strong>: for <span class=\"chem\">theta = 0, pi/6, pi/4, pi/3, pi/2</span>, <span class=\"chem\">sin theta</span> is <span class=\"chem\">sqrt(0)/2, sqrt(1)/2, sqrt(2)/2, sqrt(3)/2, sqrt(4)/2</span>, and <span class=\"chem\">cos theta</span> counts backwards!": "특수각의 삼각비는 공식집에 나오지 않아요. 제1사분면을 쉽게 외우는 요령은 <strong>2분의 루트 사다리</strong>예요: <span class=\"chem\">theta = 0, pi/6, pi/4, pi/3, pi/2</span>에 대해 <span class=\"chem\">sin theta</span>는 <span class=\"chem\">sqrt(0)/2, sqrt(1)/2, sqrt(2)/2, sqrt(3)/2, sqrt(4)/2</span>이고, <span class=\"chem\">cos theta</span>는 거꾸로 세면 돼요!",

    // The unit circle, exact ratios and fundamental identities > table > caption
    "Exact values in Quadrant I and sign rules across Quadrants I–IV": "제1사분면의 특수각 값과 제1~4사분면의 부호 규칙",

    // The unit circle, exact ratios and fundamental identities > table > th
    "Angle (deg)": "각도 (도)",

    // The unit circle, exact ratios and fundamental identities > table > th
    "Angle (rad)": "각도 (라디안)",

    // The unit circle, exact ratios and fundamental identities > table > th
    "<span class=\"chem\">sin theta</span>": "<span class=\"chem\">sin theta</span>",

    // The unit circle, exact ratios and fundamental identities > table > th
    "<span class=\"chem\">cos theta</span>": "<span class=\"chem\">cos theta</span>",

    // The unit circle, exact ratios and fundamental identities > table > th
    "<span class=\"chem\">tan theta = sin/cos</span>": "<span class=\"chem\">tan theta = sin/cos</span>",

    // The unit circle, exact ratios and fundamental identities > table > td
    "<span class=\"chem\">pi / 6</span>": "<span class=\"chem\">pi / 6</span>",

    // The unit circle, exact ratios and fundamental identities > table > td
    "<span class=\"chem\">sqrt(3) / 2</span>": "<span class=\"chem\">sqrt(3) / 2</span>",

    // The unit circle, exact ratios and fundamental identities > table > td
    "<span class=\"chem\">1 / sqrt(3) = sqrt(3) / 3</span>": "<span class=\"chem\">1 / sqrt(3) = sqrt(3) / 3</span>",

    // The unit circle, exact ratios and fundamental identities > table > td
    "<span class=\"chem\">pi / 4</span>": "<span class=\"chem\">pi / 4</span>",

    // The unit circle, exact ratios and fundamental identities > table > td
    "<span class=\"chem\">sqrt(2) / 2</span>": "<span class=\"chem\">sqrt(2) / 2</span>",

    // The unit circle, exact ratios and fundamental identities > table > td
    "<span class=\"chem\">pi / 3</span>": "<span class=\"chem\">pi / 3</span>",

    // The unit circle, exact ratios and fundamental identities > table > td
    "<span class=\"chem\">sqrt(3)</span>": "<span class=\"chem\">sqrt(3)</span>",

    // The unit circle, exact ratios and fundamental identities > table > td
    "<span class=\"chem\">pi / 2</span>": "<span class=\"chem\">pi / 2</span>",

    // The unit circle, exact ratios and fundamental identities > table > td
    "undefined": "정의되지 않음",

    // The unit circle, exact ratios and fundamental identities > widget > data-title attribute
    "Interactive Unit Circle & Exact Radian Explorer": "대화형 단위원 및 라디안 특수각 탐색기",

    // The unit circle, exact ratios and fundamental identities > widget > figcaption
    "Adjust the angle <i>θ</i> or click one of the special radian angles. Observe how the horizontal coordinate is cos <i>θ</i>, the vertical coordinate is sin <i>θ</i>, and the reference angle α determines the magnitude while the quadrant determines the sign (<strong>CAST / ASTC</strong>).": "각 <i>θ</i>를 조절하거나 특수 라디안 각을 클릭해 보세요. 가로 좌표가 cos <i>θ</i>, 세로 좌표가 sin <i>θ</i>이고, 기준각 α가 크기를 결정하며 사분면이 부호(<strong>CAST / ASTC</strong>)를 결정하는 모습을 관찰하세요.",

    // The unit circle, exact ratios and fundamental identities > worked example > data-kicker attribute
    "Worked example 1 (SL 3.6 — Paper 1 No-GDC)": "예제 1 (SL 3.6 — Paper 1 계산기 불가)",

    // The unit circle, exact ratios and fundamental identities > worked example > h3
    "Using quadrant signs and double-angle identities without finding θ": "θ를 구하지 않고 사분면 부호와 배각 공식 사용하기",

    // The unit circle, exact ratios and fundamental identities > worked example > p
    "Given that <span class=\"chem\">sin theta = -3/5</span> and <span class=\"chem\">pi &lt; theta &lt; 3pi/2</span> (Quadrant III), find the exact values of:<br> (a) <span class=\"chem\">cos theta</span> <strong>[2 marks]</strong> &nbsp;&nbsp; (b) <span class=\"chem\">sin 2theta</span> <strong>[2 marks]</strong> &nbsp;&nbsp; (c) <span class=\"chem\">cos 2theta</span> <strong>[2 marks]</strong>": "<span class=\"chem\">sin theta = -3/5</span>이고 <span class=\"chem\">pi &lt; theta &lt; 3pi/2</span> (제3사분면)일 때, 다음의 정확한 값을 구하시오 (Find):<br> (a) <span class=\"chem\">cos theta</span> <strong>[2 marks]</strong> &nbsp;&nbsp; (b) <span class=\"chem\">sin 2theta</span> <strong>[2 marks]</strong> &nbsp;&nbsp; (c) <span class=\"chem\">cos 2theta</span> <strong>[2 marks]</strong>",

    // The unit circle, exact ratios and fundamental identities > worked example > data-title attribute
    "Use cos²θ + sin²θ = 1 and choose the negative root for Quadrant III": "cos²θ + sin²θ = 1을 사용하고 제3사분면이므로 음수 제곱근 선택하기",

    // The unit circle, exact ratios and fundamental identities > worked example > p
    "In Quadrant III (π &lt; θ &lt; 3π/2), both x = cos θ and y = sin θ are negative.": "제3사분면 (π &lt; θ &lt; 3π/2)에서는 x = cos θ와 y = sin θ가 모두 음수예요.",

    // The unit circle, exact ratios and fundamental identities > worked example > data-title attribute
    "Substitute into sin 2θ = 2 sin θ cos θ": "sin 2θ = 2 sin θ cos θ에 대입하기",

    // The unit circle, exact ratios and fundamental identities > worked example > p
    "Since both sin θ and cos θ are negative, their product is positive (2θ lies in Quadrant I/II).": "sin θ와 cos θ가 모두 음수이므로 곱은 양수예요 (2θ는 제1/2사분면에 있어요).",

    // The unit circle, exact ratios and fundamental identities > worked example > data-title attribute
    "Substitute into cos 2θ = 1 − 2 sin²θ": "cos 2θ = 1 − 2 sin²θ에 대입하기",

    // The unit circle, exact ratios and fundamental identities > worked example > p
    "Using 1 − 2 sin²θ uses the given value of sin θ directly and avoids carrying any slip from part (a).": "1 − 2 sin²θ를 쓰면 주어진 sin θ 값을 바로 사용할 수 있어 (a)의 계산 실수가 이어지는 것을 막을 수 있어요.",

    // The unit circle, exact ratios and fundamental identities > try it > p
    "<strong>[Paper 1 — No GDC]</strong> Evaluate the exact value of <span class=\"chem\">cos(4*pi/3)</span>.": "<strong>[Paper 1 — No GDC]</strong> <span class=\"chem\">cos(4*pi/3)</span>의 정확한 값을 구하시오 (Evaluate).",

    // The unit circle, exact ratios and fundamental identities > try it > li
    "<span class=\"chem\">4*pi/3 = pi + pi/3</span> lies in Quadrant III, with acute reference angle <span class=\"chem\">alpha = pi/3</span> (<span class=\"mono\">60°</span>).": "<span class=\"chem\">4*pi/3 = pi + pi/3</span>는 제3사분면에 있고, 예각 기준각은 <span class=\"chem\">alpha = pi/3</span> (<span class=\"mono\">60°</span>)예요.",

    // The unit circle, exact ratios and fundamental identities > try it > li
    "In Quadrant III, cosine is negative, so <span class=\"chem\">cos(4*pi/3) = -cos(pi/3)</span>.": "제3사분면에서 코사인은 음수이므로 <span class=\"chem\">cos(4*pi/3) = -cos(pi/3)</span>이에요.",

    // Sinusoidal periodic models and solving trigonometric equatio > data-toc attribute
    "Periodic models & equations": "주기 모델과 삼각방정식",

    // Sinusoidal periodic models and solving trigonometric equatio > h2
    "Sinusoidal periodic models and solving trigonometric equations": "사인·코사인 주기 모델과 삼각방정식 풀이",

    // Sinusoidal periodic models and solving trigonometric equations > p
    "<strong>Before you start:</strong> the parameters <span class=\"chem\">a</span>, <span class=\"chem\">b</span>, <span class=\"chem\">c</span> and <span class=\"chem\">d</span> are stretches and translations of the graph, as in <a href=\"t2-3.html\">2.3 Transformations, polynomials and modulus functions</a>.": "<strong>시작하기 전에:</strong> 매개변수 <span class=\"chem\">a</span>, <span class=\"chem\">b</span>, <span class=\"chem\">c</span>, <span class=\"chem\">d</span>는 <a href=\"t2-3.html\">2.3 그래프의 변환, 다항식과 절댓값 함수</a>에서처럼 그래프의 확대·축소와 평행이동을 나타내요.",

    // Sinusoidal periodic models and solving trigonometric equatio > p
    "Real-world phenomena that repeat in regular cycles—ocean tides, hours of daylight, alternating current, or the height of a rider on a Ferris wheel—are modelled by transformed sine or cosine functions:": "일정한 주기로 반복되는 실생활 현상(조수, 낮의 길이, 교류 전류, 대관람차 탑승자의 높이 등)은 변환된 사인 또는 코사인 함수로 모델링돼요:",

    // Sinusoidal periodic models and solving trigonometric equatio > equation > maths line
    "<i>f</i>(<i>t</i>) = <i>a</i> sin(<i>b</i>(<i>t</i> − <i>c</i>)) + <i>d</i> &nbsp;&nbsp; or &nbsp;&nbsp; <i>f</i>(<i>t</i>) = <i>a</i> cos(<i>b</i>(<i>t</i> − <i>c</i>)) + <i>d</i>": "<i>f</i>(<i>t</i>) = <i>a</i> sin(<i>b</i>(<i>t</i> − <i>c</i>)) + <i>d</i> &nbsp;&nbsp; 또는 &nbsp;&nbsp; <i>f</i>(<i>t</i>) = <i>a</i> cos(<i>b</i>(<i>t</i> − <i>c</i>)) + <i>d</i>",

    // Sinusoidal periodic models and solving trigonometric equatio > equation > dd
    "amplitude = <span class=\"chem\">(y_{max} - y_{min}) / 2</span> (vertical distance from mean line to peak)": "진폭 = <span class=\"chem\">(y_{max} - y_{min}) / 2</span> (중심선에서 최댓값까지의 수직 거리)",

    // Sinusoidal periodic models and solving trigonometric equatio > equation > dd
    "vertical shift (principal axis <span class=\"chem\">y = d</span>) = <span class=\"chem\">(y_{max} + y_{min}) / 2</span>": "수직 평행이동 (중심선 <span class=\"chem\">y = d</span>) = <span class=\"chem\">(y_{max} + y_{min}) / 2</span>",

    // Sinusoidal periodic models and solving trigonometric equatio > equation > dd
    "angular frequency: Period <span class=\"chem\">T = 2*pi / b</span> (in radians) so <span class=\"chem\">b = 2*pi / T</span>": "각진동수: 주기 <span class=\"chem\">T = 2*pi / b</span> (라디안)이므로 <span class=\"chem\">b = 2*pi / T</span>",

    // Sinusoidal periodic models and solving trigonometric equatio > equation > dd
    "horizontal phase shift: for <span class=\"chem\">+a cos(b(t - c)) + d</span>, <span class=\"chem\">c</span> is the time of a maximum; for <span class=\"chem\">+a sin(b(t - c)) + d</span>, <span class=\"chem\">c</span> is a rising crossing of <span class=\"chem\">y = d</span>": "수평 위상 이동: <span class=\"chem\">+a cos(b(t - c)) + d</span>에서는 <span class=\"chem\">c</span>가 최댓값이 되는 시각이고, <span class=\"chem\">+a sin(b(t - c)) + d</span>에서는 <span class=\"chem\">c</span>가 <span class=\"chem\">y = d</span>를 위로 지나가는 시각이에요",

    // Sinusoidal periodic models and solving trigonometric equatio > widget > data-title attribute
    "Sinusoidal Tide / Ferris Wheel Model Builder": "사인·코사인 조수 / 대관람차 모델 생성기",

    // Sinusoidal periodic models and solving trigonometric equatio > widget > figcaption
    "Adjust amplitude <i>a</i>, frequency <i>b</i>, phase shift <i>c</i>, and principal axis <i>d</i>. Notice how the wave oscillates symmetrically between <i>y</i><sub>max</sub> = <i>d</i> + |<i>a</i>| and <i>y</i><sub>min</sub> = <i>d</i> − |<i>a</i>| with period <i>T</i> = 2π / <i>b</i>.": "진폭 <i>a</i>, 진동수 계수 <i>b</i>, 위상 이동 <i>c</i>, 중심선 <i>d</i>를 조절해 보세요. 파동이 주기 <i>T</i> = 2π / <i>b</i>로 <i>y</i><sub>max</sub> = <i>d</i> + |<i>a</i>|와 <i>y</i><sub>min</sub> = <i>d</i> − |<i>a</i>| 사이를 대칭적으로 진동하는 모습을 확인하세요.",

    // Sinusoidal periodic models and solving trigonometric equatio > h3
    "The graph of <span class=\"chem\">y = tan x</span>": "<span class=\"chem\">y = tan x</span>의 그래프",

    // Sinusoidal periodic models and solving trigonometric equatio > p
    "The tangent graph is <strong>not</strong> a sinusoid. Because <span class=\"chem\">tan x = sin x / cos x</span>, it has <strong>vertical asymptotes</strong> wherever <span class=\"chem\">cos x = 0</span>, that is at <span class=\"chem\">x = pi/2 + k*pi</span> (<span class=\"chem\">k \\in \\mathbb{Z}</span>). It has <strong>no amplitude</strong>, passes through <span class=\"chem\">(0, 0)</span> and <span class=\"chem\">(pi/4, 1)</span>, increases on every branch, and repeats with <strong>period <span class=\"chem\">pi</span></strong>, not <span class=\"chem\">2*pi</span>.": "탄젠트 그래프는 사인 곡선이 <strong>아니에요</strong>. <span class=\"chem\">tan x = sin x / cos x</span>이므로 <span class=\"chem\">cos x = 0</span>인 곳, 즉 <span class=\"chem\">x = pi/2 + k*pi</span> (<span class=\"chem\">k \\in \\mathbb{Z}</span>)에 <strong>수직점근선</strong>이 있어요. <strong>진폭이 없고</strong>, <span class=\"chem\">(0, 0)</span>과 <span class=\"chem\">(pi/4, 1)</span>을 지나며, 각 가지에서 증가하고, <span class=\"chem\">2*pi</span>가 아니라 <strong>주기 <span class=\"chem\">pi</span></strong>로 반복돼요.",

    // Sinusoidal periodic models and solving trigonometric equatio > common mistake > p
    "<strong>Period of a stretched tangent:</strong> <span class=\"chem\">y = tan(bx)</span> has period <span class=\"chem\">pi / b</span>, so its asymptotes are <span class=\"chem\">pi / b</span> apart. When you solve <span class=\"chem\">tan(bx) = k</span>, consecutive solutions are also <span class=\"chem\">pi / b</span> apart: add multiples of <span class=\"chem\">pi</span> to the angle <span class=\"chem\">bx</span>, not multiples of <span class=\"chem\">2*pi</span>.": "<strong>신축된 탄젠트의 주기:</strong> <span class=\"chem\">y = tan(bx)</span>의 주기는 <span class=\"chem\">pi / b</span>이므로 점근선 사이의 간격은 <span class=\"chem\">pi / b</span>예요. <span class=\"chem\">tan(bx) = k</span>를 풀 때 이웃한 해의 간격도 <span class=\"chem\">pi / b</span>예요. 각 <span class=\"chem\">bx</span>에 <span class=\"chem\">2*pi</span>의 배수가 아니라 <span class=\"chem\">pi</span>의 배수를 더하세요.",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > data-kicker attribute
    "Worked example 2 (SL 3.8 — Multiple-Angle & Quadratic Trig Equations)": "예제 2 (SL 3.8 — 배각 및 이차 삼각방정식)",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > h3
    "Solving a quadratic trigonometric equation via double-angle substitution": "배각 공식 대입으로 이차 삼각방정식 풀기",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > p
    "<strong>[Paper 1 — No GDC]</strong> Solve <span class=\"chem\">cos 2x + 3 sin x - 2 = 0</span> for <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>. <strong>[6 marks]</strong>": "<strong>[Paper 1 — No GDC]</strong> <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>에서 <span class=\"chem\">cos 2x + 3 sin x - 2 = 0</span>을 푸시오. <strong>[6 marks]</strong>",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > data-title attribute
    "Replace cos 2x with 1 − 2 sin²x to create a quadratic in sin x": "cos 2x를 1 − 2 sin²x로 바꾸어 sin x에 대한 이차방정식 만들기",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > p
    "Because the linear term is +3 sin x, we choose the version of cos 2x that contains only sin²x.": "일차항이 +3 sin x이므로 sin²x만 포함된 cos 2x 공식을 선택해요.",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > data-title attribute
    "Factor the quadratic in sin x": "sin x에 대한 이차방정식 인수분해하기",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > p
    "Treat u = sin x so 2u² − 3u + 1 = (2u − 1)(u − 1) = 0.": "u = sin x로 보면 2u² − 3u + 1 = (2u − 1)(u − 1) = 0이에요.",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > maths line
    "(2 sin <i>x</i> − 1)(sin <i>x</i> − 1) = 0 ⇒ sin <i>x</i> = <span class=\"frac\"><span>1</span><span>2</span></span> &nbsp; or &nbsp; sin <i>x</i> = 1 <b>[M1 A1]</b>": "(2 sin <i>x</i> − 1)(sin <i>x</i> − 1) = 0 ⇒ sin <i>x</i> = <span class=\"frac\"><span>1</span><span>2</span></span> &nbsp; 또는 &nbsp; sin <i>x</i> = 1 <b>[M1 A1]</b>",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > data-title attribute
    "Find all angles in [0, 2π] for each branch": "각 경우에 대해 [0, 2π] 안의 모든 각 구하기",

    // Sinusoidal periodic models and solving trigonometric equatio > worked example > p
    "sin x = 1/2 is positive in Quadrants I and II (reference angle π/6); sin x = 1 occurs at the top of the unit circle.": "sin x = 1/2은 제1·2사분면에서 양수이고 (기준각 π/6), sin x = 1은 단위원의 맨 위에서 나와요.",

    // Sinusoidal periodic models and solving trigonometric equatio > common mistake > p
    "<strong>Never divide a trigonometric equation by <span class=\"chem\">sin x</span> or <span class=\"chem\">cos x</span> if it could equal zero!</strong> To solve <span class=\"chem\">sin 2x = cos x</span>, write <span class=\"chem\">2 sin x cos x - cos x = 0</span> and factor as <span class=\"chem\">cos x (2 sin x - 1) = 0</span>. Dividing by <span class=\"chem\">cos x</span> throws away the roots <span class=\"chem\">cos x = 0</span> (<span class=\"chem\">x = pi/2, 3pi/2</span>)!": "<strong>0이 될 수 있는 <span class=\"chem\">sin x</span>나 <span class=\"chem\">cos x</span>로 방정식의 양변을 절대 나누지 마세요!</strong> <span class=\"chem\">sin 2x = cos x</span>를 풀 때는 <span class=\"chem\">2 sin x cos x - cos x = 0</span>으로 이항해 <span class=\"chem\">cos x (2 sin x - 1) = 0</span>으로 인수분해하세요. <span class=\"chem\">cos x</span>로 나누면 근 <span class=\"chem\">cos x = 0</span> (<span class=\"chem\">x = pi/2, 3pi/2</span>)을 잃어버려요!",

    // Sinusoidal periodic models and solving trigonometric equatio > try it > p
    "The depth of water in a harbour is modelled by <span class=\"chem\">D(t) = 4.5 cos((pi/6)t) + 9.5</span> metres, where <span class=\"chem\">t</span> is the time in hours after midnight. What is the maximum depth of water in the harbour?": "항구의 수심이 자정 후 <span class=\"chem\">t</span>시간일 때 <span class=\"chem\">D(t) = 4.5 cos((pi/6)t) + 9.5</span>미터로 모델링돼요. 항구 수심의 최댓값은 얼마인가요?",

    // Sinusoidal periodic models and solving trigonometric equatio > try it > li
    "Since the maximum value of <span class=\"chem\">cos((pi/6)t)</span> is <span class=\"mono\">1</span>, the maximum value of <span class=\"chem\">a cos(bt) + d</span> is <span class=\"chem\">|a| + d</span>.": "<span class=\"chem\">cos((pi/6)t)</span>의 최댓값이 <span class=\"mono\">1</span>이므로 <span class=\"chem\">a cos(bt) + d</span>의 최댓값은 <span class=\"chem\">|a| + d</span>예요.",

    // Sinusoidal periodic models and solving trigonometric equatio > try it > li
    "Add <span class=\"chem\">4.5 + 9.5</span>.": "<span class=\"chem\">4.5 + 9.5</span>를 더하세요.",

    // Reciprocal ratios, compound-angle identities and inverse tri > Additional HL > data-toc attribute
    "Reciprocal, compound & inverse trig": "역수, 덧셈정리와 역삼각함수",

    // Reciprocal ratios, compound-angle identities and inverse tri > Additional HL > h2
    "Reciprocal ratios, compound-angle identities and inverse trig functions": "역수 삼각비, 덧셈정리와 역삼각함수",

    // Reciprocal ratios, compound-angle identities and inverse tri > Additional HL > p
    "At Higher Level, we introduce the three reciprocal trigonometric functions—<strong>secant</strong>, <strong>cosecant</strong>, and <strong>cotangent</strong>—along with compound-angle formulas for <span class=\"chem\">A +- B</span> and the inverse trigonometric functions <span class=\"chem\">arcsin, arccos, arctan</span>.": "Higher Level에서는 세 가지 역수 삼각함수(<strong>시컨트</strong>, <strong>코시컨트</strong>, <strong>코탄젠트</strong>)와 <span class=\"chem\">A +- B</span>에 대한 덧셈정리, 그리고 역삼각함수 <span class=\"chem\">arcsin, arccos, arctan</span>을 배워요.",

    // Reciprocal ratios, compound-angle identities and inverse tri > equation > Additional HL > dt
    "sin(A ± B)": "sin(A ± B)",

    // Reciprocal ratios, compound-angle identities and inverse tri > equation > Additional HL > dd
    "<span class=\"chem\">sin A cos B +- cos A sin B</span> &nbsp;(signs match)": "<span class=\"chem\">sin A cos B +- cos A sin B</span> &nbsp;(부호 같음)",

    // Reciprocal ratios, compound-angle identities and inverse tri > equation > Additional HL > dt
    "cos(A ± B)": "cos(A ± B)",

    // Reciprocal ratios, compound-angle identities and inverse tri > equation > Additional HL > dd
    "<span class=\"chem\">cos A cos B -+ sin A sin B</span> &nbsp;(signs flip!)": "<span class=\"chem\">cos A cos B -+ sin A sin B</span> &nbsp;(부호 반대!)",

    // Reciprocal ratios, compound-angle identities and inverse tri > equation > Additional HL > dt
    "tan(A ± B)": "tan(A ± B)",

    // Reciprocal ratios, compound-angle identities and inverse tri > equation > Additional HL > dd
    "<span class=\"chem\">(tan A +- tan B) / (1 -+ tan A tan B)</span>, and <span class=\"chem\">tan 2theta = (2 tan theta) / (1 - tan^2 theta)</span>": "<span class=\"chem\">(tan A +- tan B) / (1 -+ tan A tan B)</span>, 그리고 <span class=\"chem\">tan 2theta = (2 tan theta) / (1 - tan^2 theta)</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > Additional HL > h3
    "Principal domains and ranges of inverse trigonometric functions (AHL 3.9)": "역삼각함수의 주정의역과 주치역 (AHL 3.9)",

    // Reciprocal ratios, compound-angle identities and inverse tri > Additional HL > p
    "Because <span class=\"chem\">sin x, cos x, tan x</span> are periodic (many-to-one), we must restrict their domains to a single monotonic branch before they can have an inverse function. Memorize this table—especially what happens when you plug a <strong>negative input</strong> into <span class=\"chem\">arcsin(-x)</span> versus <span class=\"chem\">arccos(-x)</span>!": "<span class=\"chem\">sin x, cos x, tan x</span>는 주기함수(다대일)이므로 역함수가 존재하려면 단조 구간 하나로 정의역을 제한해야 해요. 아래 표를 외우세요—특히 <span class=\"chem\">arcsin(-x)</span>와 <span class=\"chem\">arccos(-x)</span>에 <strong>음수 입력</strong>을 넣었을 때의 차이를 꼭 기억하세요!",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > caption
    "Principal domains, ranges and negative-input symmetry of inverse trig functions": "역삼각함수의 주정의역, 주치역 및 음수 입력 대칭성",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "Function": "함수",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "Domain (input <span class=\"chem\">x</span>)": "정의역 (입력 <span class=\"chem\">x</span>)",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "Principal range (output angle <span class=\"chem\">y</span>)": "주치역 (출력 각 <span class=\"chem\">y</span>)",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "Quadrants covered": "포함되는 사분면",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "Negative input rule": "음수 입력 규칙",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "<span class=\"chem\">y = arcsin x</span>": "<span class=\"chem\">y = arcsin x</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">[-pi/2, pi/2]</span>": "<span class=\"chem\">[-pi/2, pi/2]</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Quadrants IV and I": "제4사분면과 제1사분면",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Odd: <span class=\"chem\">arcsin(-x) = -arcsin(x)</span>": "홀함수: <span class=\"chem\">arcsin(-x) = -arcsin(x)</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "<span class=\"chem\">y = arccos x</span>": "<span class=\"chem\">y = arccos x</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">[0, pi]</span>": "<span class=\"chem\">[0, pi]</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Quadrants I and II": "제1사분면과 제2사분면",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">arccos(-x) = pi - arccos(x)</span>": "<span class=\"chem\">arccos(-x) = pi - arccos(x)</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "<span class=\"chem\">y = arctan x</span>": "<span class=\"chem\">y = arctan x</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">x in R</span> (<span class=\"chem\">(-infty, infty)</span>)": "<span class=\"chem\">x in R</span> (<span class=\"chem\">(-infty, infty)</span>)",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">(-pi/2, pi/2)</span>": "<span class=\"chem\">(-pi/2, pi/2)</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Quadrants IV and I (horizontal asymptotes <span class=\"chem\">y = +-pi/2</span>)": "제4사분면과 제1사분면 (수평점근선 <span class=\"chem\">y = +-pi/2</span>)",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Odd: <span class=\"chem\">arctan(-x) = -arctan(x)</span>": "홀함수: <span class=\"chem\">arctan(-x) = -arctan(x)</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > Additional HL > p
    "Each inverse graph is the reflection of the restricted branch in the line <span class=\"chem\">y = x</span>. The graph of <span class=\"chem\">y = arcsin x</span> rises from <span class=\"chem\">(-1, -pi/2)</span> through the origin to <span class=\"chem\">(1, pi/2)</span>. The graph of <span class=\"chem\">y = arccos x</span> falls from <span class=\"chem\">(-1, pi)</span> through <span class=\"chem\">(0, pi/2)</span> to <span class=\"chem\">(1, 0)</span>. The graph of <span class=\"chem\">y = arctan x</span> rises through the origin, with horizontal asymptotes <span class=\"chem\">y = -pi/2</span> and <span class=\"chem\">y = pi/2</span>.": "각 역함수의 그래프는 제한된 가지를 직선 <span class=\"chem\">y = x</span>에 대해 대칭이동한 것이에요. <span class=\"chem\">y = arcsin x</span>의 그래프는 <span class=\"chem\">(-1, -pi/2)</span>에서 원점을 지나 <span class=\"chem\">(1, pi/2)</span>까지 증가해요. <span class=\"chem\">y = arccos x</span>의 그래프는 <span class=\"chem\">(-1, pi)</span>에서 <span class=\"chem\">(0, pi/2)</span>를 지나 <span class=\"chem\">(1, 0)</span>까지 감소해요. <span class=\"chem\">y = arctan x</span>의 그래프는 원점을 지나 증가하고, 수평점근선은 <span class=\"chem\">y = -pi/2</span>와 <span class=\"chem\">y = pi/2</span>예요.",

    // Reciprocal ratios, compound-angle identities and inverse tri > key idea > Additional HL > p
    "<strong>Complementary identity:</strong> For every <span class=\"chem\">x in [-1, 1]</span>, <span class=\"chem\">arcsin x + arccos x = pi/2</span>, and <span class=\"chem\">cos(arcsin x) = sin(arccos x) = sqrt(1 - x^2)</span>.": "<strong>여각 항등식:</strong> 모든 <span class=\"chem\">x in [-1, 1]</span>에 대해 <span class=\"chem\">arcsin x + arccos x = pi/2</span>이고 <span class=\"chem\">cos(arcsin x) = sin(arccos x) = sqrt(1 - x^2)</span>예요.",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > data-kicker attribute
    "Worked example 3 (AHL 3.9–3.10)": "예제 3 (AHL 3.9–3.10)",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > h3
    "Proving an inverse tangent sum using the compound-angle formula": "덧셈정리를 이용해 역탄젠트 합 증명하기",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > p
    "<strong>[Paper 1 — No GDC]</strong> Without using a calculator, show that <span class=\"chem\">arctan(1/2) + arctan(1/3) = pi/4</span>. <strong>[4 marks]</strong>": "<strong>[Paper 1 — No GDC]</strong> 계산기를 사용하지 않고 <span class=\"chem\">arctan(1/2) + arctan(1/3) = pi/4</span>임을 보이시오 (Show that). <strong>[4 marks]</strong>",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > data-title attribute
    "Label the two acute angles A and B": "두 예각을 A와 B로 놓기",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > p
    "Let A = arctan(1/2) and B = arctan(1/3), so tan A = 1/2 and tan B = 1/3 with 0 &lt; A, B &lt; π/4.": "A = arctan(1/2), B = arctan(1/3)이라 하면 0 &lt; A, B &lt; π/4에서 tan A = 1/2, tan B = 1/3이에요.",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > data-title attribute
    "Apply the compound-angle formula for tan(A + B)": "tan(A + B)의 덧셈정리 적용하기",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > p
    "Substitute tan A and tan B into tan(A + B) = (tan A + tan B) / (1 − tan A tan B).": "tan(A + B) = (tan A + tan B) / (1 − tan A tan B)에 tan A와 tan B를 대입하세요.",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > data-title attribute
    "Justify why A + B = π/4 and not 5π/4": "A + B가 5π/4가 아니라 π/4인 이유 설명하기",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > p
    "Since tan θ = 1 has multiple solutions, we must bound A + B using the range of arctan.": "tan θ = 1의 해는 여러 개이므로 arctan의 치역을 이용해 A + B의 범위를 잡아야 해요.",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > maths line
    "Since 0 &lt; tan <i>A</i>, tan <i>B</i> &lt; 1, we have 0 &lt; <i>A</i>, <i>B</i> &lt; <span class=\"frac\"><span><i>π</i></span><span>4</span></span> ⇒ 0 &lt; <i>A</i> + <i>B</i> &lt; <span class=\"frac\"><span><i>π</i></span><span>2</span></span> ⇒ <i>A</i> + <i>B</i> = <b><span class=\"frac\"><span><i>π</i></span><span>4</span></span></b> <b>[R1] [AG]</b>": "0 &lt; tan <i>A</i>, tan <i>B</i> &lt; 1이므로 0 &lt; <i>A</i>, <i>B</i> &lt; <span class=\"frac\"><span><i>π</i></span><span>4</span></span> ⇒ 0 &lt; <i>A</i> + <i>B</i> &lt; <span class=\"frac\"><span><i>π</i></span><span>2</span></span> ⇒ <i>A</i> + <i>B</i> = <b><span class=\"frac\"><span><i>π</i></span><span>4</span></span></b> <b>[R1] [AG]</b>",

    // Reciprocal ratios, compound-angle identities and inverse tri > worked example > Additional HL > p
    "arctan(1/2) + arctan(1/3) = π/4": "arctan(1/2) + arctan(1/3) = π/4",

    // Reciprocal ratios, compound-angle identities and inverse tri > not needed for IB > Additional HL > p
    "<strong>Not required from memory in IB Math AA HL:</strong> Product-to-sum and sum-to-product (factor) identities such as <span class=\"chem\">sin A + sin B = 2 sin((A+B)/2) cos((A-B)/2)</span>, as well as the Weierstrass half-angle substitution <span class=\"chem\">t = tan(theta/2)</span>, are <strong>not</strong> in the AA HL syllabus or Formula Booklet. If a Paper 3 investigation uses one of them, the formula will be given in the question for you to prove using <span class=\"chem\">sin(A +- B)</span>.": "<strong>IB Math AA HL에서 암기할 필요 없는 내용:</strong> <span class=\"chem\">sin A + sin B = 2 sin((A+B)/2) cos((A-B)/2)</span> 같은 곱을 합·차로, 합·차를 곱으로 바꾸는 공식이나 바이어슈트라스 반각 치환 <span class=\"chem\">t = tan(theta/2)</span>는 AA HL 교육과정과 공식집에 <strong>없어요</strong>. 만약 Paper 3 탐구형 문제에서 쓰이더라도 <span class=\"chem\">sin(A +- B)</span>를 이용해 증명할 수 있도록 문제에 공식이 주어져요.",

    // Reciprocal ratios, compound-angle identities and inverse tri > Additional HL > h3
    "Symmetry properties of the trigonometric graphs (AHL 3.11)": "삼각함수 그래프의 대칭성 (AHL 3.11)",

    // Reciprocal ratios, compound-angle identities and inverse tri > Additional HL > p
    "Reflect the point <span class=\"chem\">P(cos theta, sin theta)</span> on the unit circle and you get the angles below. Each row is also a symmetry you can see on the graphs: <span class=\"chem\">y = sin x</span> and <span class=\"chem\">y = tan x</span> have rotational symmetry about the origin (they are <strong>odd</strong> functions), and <span class=\"chem\">y = cos x</span> is symmetric in the <span class=\"chem\">y</span>-axis (an <strong>even</strong> function).": "단위원 위의 점 <span class=\"chem\">P(cos theta, sin theta)</span>를 대칭이동하면 아래 표의 각을 얻어요. 각 행은 그래프에서 볼 수 있는 대칭성이기도 해요: <span class=\"chem\">y = sin x</span>와 <span class=\"chem\">y = tan x</span>는 원점에 대해 대칭(<strong>홀</strong>함수)이고, <span class=\"chem\">y = cos x</span>는 <span class=\"chem\">y</span>축에 대해 대칭(<strong>짝</strong>함수)이에요.",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > caption
    "Symmetry identities from the unit circle": "단위원에서 얻는 대칭 항등식",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "Angle": "각",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "Unit-circle move": "단위원 위의 이동",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "Identities": "항등식",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "What it says about the graphs": "그래프에 대해 알 수 있는 것",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "<span class=\"chem\">-theta</span>": "<span class=\"chem\">-theta</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Reflect in the <span class=\"chem\">x</span>-axis": "<span class=\"chem\">x</span>축에 대해 대칭이동",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">sin(-theta) = -sin theta</span>, <span class=\"chem\">cos(-theta) = cos theta</span>, <span class=\"chem\">tan(-theta) = -tan theta</span>": "<span class=\"chem\">sin(-theta) = -sin theta</span>, <span class=\"chem\">cos(-theta) = cos theta</span>, <span class=\"chem\">tan(-theta) = -tan theta</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "sin and tan are odd; cos is even.": "sin과 tan은 홀함수, cos는 짝함수예요.",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "<span class=\"chem\">pi - theta</span>": "<span class=\"chem\">pi - theta</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Reflect in the <span class=\"chem\">y</span>-axis": "<span class=\"chem\">y</span>축에 대해 대칭이동",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">sin(pi - theta) = sin theta</span>, <span class=\"chem\">cos(pi - theta) = -cos theta</span>, <span class=\"chem\">tan(pi - theta) = -tan theta</span>": "<span class=\"chem\">sin(pi - theta) = sin theta</span>, <span class=\"chem\">cos(pi - theta) = -cos theta</span>, <span class=\"chem\">tan(pi - theta) = -tan theta</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "The sine curve is symmetric about the line <span class=\"chem\">x = pi/2</span>.": "사인 곡선은 직선 <span class=\"chem\">x = pi/2</span>에 대해 대칭이에요.",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "<span class=\"chem\">pi + theta</span>": "<span class=\"chem\">pi + theta</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Rotate by a half-turn about the origin": "원점을 중심으로 반 바퀴 회전",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">sin(pi + theta) = -sin theta</span>, <span class=\"chem\">cos(pi + theta) = -cos theta</span>, <span class=\"chem\">tan(pi + theta) = tan theta</span>": "<span class=\"chem\">sin(pi + theta) = -sin theta</span>, <span class=\"chem\">cos(pi + theta) = -cos theta</span>, <span class=\"chem\">tan(pi + theta) = tan theta</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "The tangent graph repeats every <span class=\"chem\">pi</span>.": "탄젠트 그래프는 <span class=\"chem\">pi</span>마다 반복돼요.",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > th
    "<span class=\"chem\">pi/2 - theta</span>": "<span class=\"chem\">pi/2 - theta</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "Reflect in the line <span class=\"chem\">y = x</span>": "직선 <span class=\"chem\">y = x</span>에 대해 대칭이동",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "<span class=\"chem\">sin(pi/2 - theta) = cos theta</span>, <span class=\"chem\">cos(pi/2 - theta) = sin theta</span>": "<span class=\"chem\">sin(pi/2 - theta) = cos theta</span>, <span class=\"chem\">cos(pi/2 - theta) = sin theta</span>",

    // Reciprocal ratios, compound-angle identities and inverse tri > table > Additional HL > td
    "The cosine graph is the sine graph translated <span class=\"chem\">pi/2</span> to the left: <span class=\"chem\">cos x = sin(x + pi/2)</span>.": "코사인 그래프는 사인 그래프를 왼쪽으로 <span class=\"chem\">pi/2</span>만큼 평행이동한 것이에요: <span class=\"chem\">cos x = sin(x + pi/2)</span>.",

    // Reciprocal ratios, compound-angle identities and inverse tri > exam tip (shown in English + translation) > Additional HL > p
    "<strong>These identities are not in the Formula Booklet.</strong> If you forget one, derive it in one line from the compound-angle formulas, for example <span class=\"chem\">sin(pi - theta) = sin pi cos theta - cos pi sin theta = sin theta</span>, or sketch the graph and read off the symmetry.": "<strong>이 항등식들은 공식집에 없어요.</strong> 잊어버렸다면 덧셈정리로 한 줄에 유도하세요. 예: <span class=\"chem\">sin(pi - theta) = sin pi cos theta - cos pi sin theta = sin theta</span>. 또는 그래프를 그려 대칭성을 읽어 내세요.",

    // Reciprocal ratios, compound-angle identities and inverse tri > try it > Additional HL > p
    "<strong>[AHL · Paper 1]</strong> Evaluate the exact value of <span class=\"chem\">cos(arcsin(3/5))</span>.": "<strong>[AHL · Paper 1]</strong> <span class=\"chem\">cos(arcsin(3/5))</span>의 정확한 값을 구하시오 (Evaluate).",

    // Reciprocal ratios, compound-angle identities and inverse tri > try it > Additional HL > li
    "Let <span class=\"chem\">theta = arcsin(3/5)</span>, which is a Quadrant I acute angle with opposite side <span class=\"mono\">3</span> and hypotenuse <span class=\"mono\">5</span>.": "<span class=\"chem\">theta = arcsin(3/5)</span>라 두면 대변이 <span class=\"mono\">3</span>이고 빗변이 <span class=\"mono\">5</span>인 제1사분면의 예각이에요.",

    // Reciprocal ratios, compound-angle identities and inverse tri > try it > Additional HL > li
    "By Pythagoras, the adjacent side is <span class=\"chem\">sqrt(5^2 - 3^2) = 4</span>, so <span class=\"chem\">cos theta = 4/5</span>.": "피타고라스 정리에 의해 밑변은 <span class=\"chem\">sqrt(5^2 - 3^2) = 4</span>이므로 <span class=\"chem\">cos theta = 4/5</span>예요.",

    // Reciprocal ratios, compound-angle identities and inverse tri > try it > Additional HL > maths line
    "cos(arcsin(<span class=\"frac\"><span>3</span><span>5</span></span>)) = √(1 − (<span class=\"frac\"><span>3</span><span>5</span></span>)<sup>2</sup>) = <b><span class=\"frac\"><span>4</span><span>5</span></span> = 0.8</b>": "cos(arcsin(<span class=\"frac\"><span>3</span><span>5</span></span>)) = √(1 − (<span class=\"frac\"><span>3</span><span>5</span></span>)<sup>2</sup>) = <b><span class=\"frac\"><span>4</span><span>5</span></span> = 0.8</b>",

    // Exam-style practice > data-toc attribute
    // Exam-style practice > h2
    "Exam-style practice": "실전 연습 문제",

    // Exam-style practice > p
    "Three sets covering SL unit-circle identities, sinusoidal models and trigonometric equations, AHL reciprocal, compound-angle and inverse trigonometry, Paper 2 (GDC) modelling questions and Paper 3 investigations. The exam and challenge sets draw 10 questions at a time; press “New set” at the end for different ones.": "SL 단위원 항등식, 사인·코사인 주기 모델과 삼각방정식, AHL 역수·덧셈정리·역삼각함수, Paper 2(GDC) 모델링 문제와 Paper 3 탐구 문제를 다루는 3개 세트예요. 실전과 심화 세트는 한 번에 10문제를 내요. 끝에서 \"새 세트\"를 누르면 다른 문제가 나와요.",

    // Exam-style practice > h3
    "Foundation: exact values and core identities": "기초: 특수각의 삼각비와 기본 항등식",

    // Exam-style practice > data-title attribute
    "3.2 foundation": "3.2 기초",

    // Exam-style practice > h3
    "Exam standard: Paper 1 and Paper 2": "실전 수준: Paper 1 및 Paper 2",

    // Exam-style practice > data-title attribute
    "3.2 exam standard": "3.2 실전",

    // Exam-style practice > h3
    "Challenge: level 7 identities and equations": "심화: 7점 수준 항등식과 방정식",

    // Exam-style practice > data-title attribute
    "3.2 challenge": "3.2 심화",

  }
});
