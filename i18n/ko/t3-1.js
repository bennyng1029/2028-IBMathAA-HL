/* t3-1 — ko translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't3-1', {
  strings: {

    // page title (browser tab)
    "3.1 3D geometry, triangle trigonometry and radians | Analysis Lab": "3.1 3D 공간기하, 삼각비와 호도법 | Analysis Lab",

    // 3D geometry, triangle trigonometry and radians > page header > p
    "Topic 3.1 · SL 3.1–3.4": "Topic 3.1 · SL 3.1–3.4",

    // 3D geometry, triangle trigonometry and radians > page header > h1
    "3D geometry, triangle trigonometry and radians": "3D 공간기하, 삼각비와 호도법",

    // 3D geometry, triangle trigonometry and radians > page header > span
    "How do we measure distances, angles, and areas in three-dimensional solids, non-right triangles, and circular sectors?": "3차원 입체도형, 직각이 아닌 삼각형, 그리고 부채꼴에서 거리, 각, 넓이는 어떻게 구할까요?",

    // What you need to be able to do > data-toc attribute
    "Checklist": "학습 체크리스트",

    // What you need to be able to do > h2
    "What you need to be able to do": "할 수 있어야 하는 내용",

    // What you need to be able to do > p
    "Tick each item once you can do it confidently without checking your notes. Everything on this page is SL core (tested on both SL and HL papers).": "노트를 보지 않고도 자신 있게 풀 수 있는 항목에 체크하세요. 이 페이지의 모든 내용은 SL 공통 핵심 범위(SL·HL 모두 출제)예요.",

    // What you need to be able to do > checklist > span
    "Find the distance <span class=\"chem\">d</span> and midpoint <span class=\"chem\">M</span> between two points in 3D space <span class=\"chem\">(x_1, y_1, z_1)</span> and <span class=\"chem\">(x_2, y_2, z_2)</span>.": "3차원 공간의 두 점 <span class=\"chem\">(x_1, y_1, z_1)</span>과 <span class=\"chem\">(x_2, y_2, z_2)</span> 사이의 거리 <span class=\"chem\">d</span>와 중점 <span class=\"chem\">M</span>을 구할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Calculate the volume and surface area of right pyramids, right cones, spheres, hemispheres, and composite 3D solids.": "직각뿔, 직원뿔, 구, 반구 및 복합 3D 입체도형의 부피와 겉넓이를 계산할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Find the angle between a line and a plane in a 3D solid by dropping a perpendicular to form a right-angled triangle.": "3D 입체도형에서 수선을 내려 직각삼각형을 만들어 직선과 평면이 이루는 각을 구할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Apply the sine rule, cosine rule, and triangle area formula <span class=\"chem\">A = (1/2)ab sin C</span> in non-right-angled triangles.": "직각이 아닌 삼각형에서 사인법칙, 코사인법칙, 삼각형 넓이 공식 <span class=\"chem\">A = (1/2)ab sin C</span>를 적용할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Recognize and solve the ambiguous case (<span class=\"chem\">SSA</span>) of the sine rule using both <span class=\"chem\">theta</span> and <span class=\"chem\">180° - theta</span> (or <span class=\"chem\">pi - theta</span>).": "사인법칙의 모호한 경우(<span class=\"chem\">SSA</span>)를 알아보고 <span class=\"chem\">theta</span>와 <span class=\"chem\">180° - theta</span> (또는 <span class=\"chem\">pi - theta</span>)를 모두 이용해 풀 수 있어요.",

    // What you need to be able to do > checklist > span
    "Draw and solve diagrams involving angles of elevation, angles of depression, and three-figure true bearings (<span class=\"mono\">000°</span> to <span class=\"mono\">359°</span> clockwise from North).": "올려다본 각(앙각), 내려다본 각(부각), 세 자리 방위각(북쪽 기준 시계 방향 <span class=\"mono\">000°</span>~<span class=\"mono\">359°</span>)을 그림으로 나타내고 풀 수 있어요.",

    // What you need to be able to do > checklist > span
    "Convert between degrees and radians (<span class=\"chem\">pi rad = 180°</span>) and compute arc length <span class=\"chem\">l = r*theta</span>, sector area <span class=\"chem\">A = (1/2)r^2*theta</span>, chord length, and circular segment area.": "육십분법(도)과 호도법(라디안, <span class=\"chem\">pi rad = 180°</span>)을 변환하고, 호의 길이 <span class=\"chem\">l = r*theta</span>, 부채꼴의 넓이 <span class=\"chem\">A = (1/2)r^2*theta</span>, 현의 길이, 활꼴의 넓이를 구할 수 있어요.",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "문제 디코더",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "문제 디코더: 어떤 공식을 쓸지 바로 찾기",

    // Question decoder: spotting which technique to use > p
    "Geometry and trigonometry questions on IB exams rarely tell you which rule to use. Instead, they give you a diagram or a word clue. Use this table to translate exam phrasing directly into your first line of working.": "IB 시험의 기하·삼각비 문제는 어떤 법칙을 쓰라고 직접 알려주지 않아요. 대신 그림이나 단어 단서를 줘요. 아래 표를 보고 시험 표현을 첫 번째 풀이 식으로 바로 연결해 보세요.",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — 3D geometry, triangles and radians": "문제 디코더 — 3D 공간기하, 삼각형과 호도법",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "시험 문제의 표현",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "수학적 의미 (공식 및 식 세우기)",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1 (계산기 불가) vs Paper 2 (GDC)",

    // Question decoder: spotting which technique to use > table > th
    "Triangle with a known <strong>opposite pair</strong> (an angle and its opposite side) plus 1 extra side or angle": "<strong>마주 보는 한 쌍</strong>(각과 그 대변)과 추가 변 또는 각 1개가 주어진 삼각형",

    // Question decoder: spotting which technique to use > table > td
    "Use the <strong>Sine Rule</strong>: <span class=\"chem\">a / sin A = b / sin B</span>.": "<strong>사인법칙(Sine Rule)</strong>을 쓰세요: <span class=\"chem\">a / sin A = b / sin B</span>.",

    // Question decoder: spotting which technique to use > table > td
    "If finding an angle from <span class=\"chem\">sin B = k</span>, always check whether the obtuse supplement <span class=\"chem\">180° - B</span> is also valid!": "<span class=\"chem\">sin B = k</span>에서 각을 구할 때는 둔각 보각 <span class=\"chem\">180° - B</span>도 가능한지 항상 확인하세요!",

    // Question decoder: spotting which technique to use > table > th
    "Triangle with <strong>two sides and the included angle (SAS)</strong> or <strong>all three sides (SSS)</strong>": "<strong>두 변과 그 끼인각(SAS)</strong> 또는 <strong>세 변의 길이(SSS)</strong>가 주어진 삼각형",

    // Question decoder: spotting which technique to use > table > td
    "Use the <strong>Cosine Rule</strong>: <span class=\"chem\">c^2 = a^2 + b^2 - 2ab cos C</span> or <span class=\"chem\">cos C = (a^2 + b^2 - c^2) / (2ab)</span>.": "<strong>코사인법칙(Cosine Rule)</strong>을 쓰세요: <span class=\"chem\">c^2 = a^2 + b^2 - 2ab cos C</span> 또는 <span class=\"chem\">cos C = (a^2 + b^2 - c^2) / (2ab)</span>.",

    // Question decoder: spotting which technique to use > table > td
    "Cosine rule never has an ambiguous case: if <span class=\"chem\">cos C &lt; 0</span>, the angle <span class=\"chem\">C</span> is obtuse (<span class=\"chem\">90° &lt; C &lt; 180°</span>).": "코사인법칙에는 모호한 경우가 없어요: <span class=\"chem\">cos C &lt; 0</span>이면 각 <span class=\"chem\">C</span>는 둔각(<span class=\"chem\">90° &lt; C &lt; 180°</span>)이에요.",

    // Question decoder: spotting which technique to use > table > th
    "“There are <strong>two possible triangles</strong> <span class=\"chem\">ABC</span>” or “Find the <strong>two possible values</strong> of <span class=\"chem\">AB</span>”": "“<strong>가능한 삼각형 <span class=\"chem\">ABC</span>가 두 개</strong> 있다” 또는 “<span class=\"chem\">AB</span>의 <strong>가능한 두 값</strong>을 구하시오”",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Ambiguous Case (SSA)</strong>! Given angle <span class=\"chem\">A</span>, adjacent side <span class=\"chem\">b</span>, and opposite side <span class=\"chem\">a &lt; b</span>: the two possible angles opposite <span class=\"chem\">b</span> are <span class=\"chem\">B_1 = arcsin((b sin A)/a)</span> (acute) and <span class=\"chem\">B_2 = 180° - B_1</span> (obtuse).": "<strong>모호한 경우(SSA)</strong>예요! 각 <span class=\"chem\">A</span>, 이웃변 <span class=\"chem\">b</span>, 대변 <span class=\"chem\">a &lt; b</span>가 주어지면 <span class=\"chem\">b</span>의 대각으로 가능한 두 각은 <span class=\"chem\">B_1 = arcsin((b sin A)/a)</span> (예각)와 <span class=\"chem\">B_2 = 180° - B_1</span> (둔각)이에요.",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Fast alternative for the two lengths of <span class=\"chem\">AB = c</span></strong>: write the Cosine Rule using the known angle <span class=\"chem\">A</span>: <span class=\"chem\">a^2 = b^2 + c^2 - 2bc cos A</span>, and solve the <strong>quadratic in <span class=\"chem\">c</span></strong>!": "<strong><span class=\"chem\">AB = c</span>의 두 길이를 구하는 빠른 방법</strong>: 아는 각 <span class=\"chem\">A</span>로 코사인법칙 <span class=\"chem\">a^2 = b^2 + c^2 - 2bc cos A</span>를 세우고 <strong><span class=\"chem\">c</span>에 대한 이차방정식</strong>을 푸세요!",

    // Question decoder: spotting which technique to use > table > th
    "“Find the angle between edge <span class=\"chem\">VA</span> and the horizontal base <span class=\"chem\">ABCD</span>”": "“모서리 <span class=\"chem\">VA</span>와 수평 밑면 <span class=\"chem\">ABCD</span>가 이루는 각을 구하시오”",

    // Question decoder: spotting which technique to use > table > td
    "Drop a perpendicular from <span class=\"chem\">V</span> to its shadow <span class=\"chem\">M</span> on the base. Find <span class=\"chem\">angle VAM</span> inside the right-angled triangle <span class=\"chem\">VMA</span>.": "<span class=\"chem\">V</span>에서 밑면 위의 정사영(그림자) <span class=\"chem\">M</span>으로 수선을 내리세요. 직각삼각형 <span class=\"chem\">VMA</span>에서 <span class=\"chem\">angle VAM</span>을 구하면 돼요.",

    // Question decoder: spotting which technique to use > table > td
    "Do <strong>not</strong> use the slant height of a triangular face! For a square base of side <span class=\"chem\">s</span>, the half-diagonal is <span class=\"chem\">AM = (s sqrt(2))/2</span>.": "삼각형 옆면의 모선(높이)을 쓰면 <strong>안 돼요</strong>! 한 변이 <span class=\"chem\">s</span>인 정사각형 밑면에서는 대각선의 절반이 <span class=\"chem\">AM = (s sqrt(2))/2</span>예요.",

    // Question decoder: spotting which technique to use > table > th
    "“Ship <span class=\"chem\">B</span> is on a <strong>bearing of <span class=\"mono\">135°</span> from <span class=\"chem\">A</span></strong>”": "“배 <span class=\"chem\">B</span>가 <span class=\"chem\">A</span><strong>로부터 방위각 <span class=\"mono\">135°</span> 방향</strong>에 있다”",

    // Question decoder: spotting which technique to use > table > td
    "Draw a North arrow <strong>at <span class=\"chem\">A</span></strong> (the “from” point) and measure <span class=\"mono\">135°</span> clockwise. Parallel North arrows at <span class=\"chem\">A</span> and <span class=\"chem\">B</span> form co-interior angles adding to <span class=\"mono\">180°</span>.": "<strong><span class=\"chem\">A</span>(“from” 지점)</strong>에서 북쪽 화살표를 그리고 시계 방향으로 <span class=\"mono\">135°</span>를 재세요. <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>의 나란한 북쪽 화살표는 합이 <span class=\"mono\">180°</span>인 동측내각을 이뤄요.",

    // Question decoder: spotting which technique to use > table > td
    "Write final bearings with 3 digits (e.g. <span class=\"mono\">042°</span>, not <span class=\"mono\">42°</span>). The back-bearing from <span class=\"chem\">B</span> to <span class=\"chem\">A</span> differs by <span class=\"mono\">180°</span>.": "최종 방위각은 3자리로 쓰세요 (예: <span class=\"mono\">42°</span>가 아니라 <span class=\"mono\">042°</span>). <span class=\"chem\">B</span>에서 <span class=\"chem\">A</span>로의 역방위각은 <span class=\"mono\">180°</span> 차이가 나요.",

    // Question decoder: spotting which technique to use > table > th
    "“Find the area of the <strong>shaded segment</strong> bounded by chord <span class=\"chem\">AB</span> and arc <span class=\"chem\">AB</span>”": "“현 <span class=\"chem\">AB</span>와 호 <span class=\"chem\">AB</span>로 둘러싸인 <strong>어두운 활꼴의 넓이</strong>를 구하시오”",

    // Question decoder: spotting which technique to use > table > td
    "<span class=\"chem\">A_{segment} = A_{sector} - A_{triangle} = (1/2)r^2*theta - (1/2)r^2 sin(theta) = (1/2)r^2(theta - sin(theta))</span>.": "<span class=\"chem\">A_{segment} = A_{sector} - A_{triangle} = (1/2)r^2*theta - (1/2)r^2 sin(theta) = (1/2)r^2(theta - sin(theta))</span>예요.",

    // Question decoder: spotting which technique to use > table > td
    "<span class=\"chem\">theta</span> <strong>must be in radians</strong>! Switch your GDC to <strong>RAD</strong> mode before computing <span class=\"chem\">sin(theta)</span>.": "<span class=\"chem\">theta</span>는 <strong>반드시 라디안</strong>이어야 해요! <span class=\"chem\">sin(theta)</span>를 계산하기 전에 GDC를 <strong>RAD</strong> 모드로 바꾸세요.",

    // Three-dimensional space, solids and angles with a plane > data-toc attribute
    "3D space & solids": "3D 공간과 입체도형",

    // Three-dimensional space, solids and angles with a plane > h2
    "Three-dimensional space, solids and angles with a plane": "3차원 공간, 입체도형과 직선·평면이 이루는 각",

    // Three-dimensional space, solids and angles with a plane > p
    "Three-dimensional coordinate geometry extends the 2D Pythagoras and average formulas by adding a third coordinate <span class=\"chem\">z</span>. Think of <span class=\"chem\">(x, y)</span> as your position on the floor of a room and <span class=\"chem\">z</span> as your height above the floor.": "3차원 좌표기하는 2차원 피타고라스 정리와 중점 공식에 세 번째 좌표 <span class=\"chem\">z</span>를 더한 거예요. <span class=\"chem\">(x, y)</span>를 방 바닥의 위치, <span class=\"chem\">z</span>를 바닥에서의 높이라고 생각하세요.",

    // Three-dimensional space, solids and angles with a plane > equation > dd
    "straight-line distance between two 3D points (space diagonal of a box)": "3차원 두 점 사이의 직선 거리 (직육면체의 대각선 길이)",

    // Three-dimensional space, solids and angles with a plane > equation > dd
    "coordinates of the midpoint of the line segment joining the two points": "두 점을 잇는 선분의 중점의 좌표",

    // Three-dimensional space, solids and angles with a plane > h3
    "Volumes and surface areas of 3D solids": "3D 입체도형의 부피와 겉넓이",

    // Three-dimensional space, solids and angles with a plane > p
    "The SL 3.1 section of your IB Formula Booklet gives the volume and curved surface area formulas for right pyramids, right cones, and spheres. Notice the pattern: any solid that tapers to a sharp apex (a pyramid or a cone) has volume equal to <strong>one-third</strong> of its base area times its perpendicular height <span class=\"chem\">h</span>.": "IB 공식집(Formula Booklet)의 SL 3.1 부분에는 직각뿔, 직원뿔, 구의 부피와 옆넓이(곡면 넓이) 공식이 실려 있어요. 규칙을 기억하세요: 뾰족한 꼭짓점으로 모이는 입체(각뿔·원뿔)의 부피는 항상 밑넓이 × 높이 <span class=\"chem\">h</span>의 <strong>3분의 1</strong>이에요.",

    // Three-dimensional space, solids and angles with a plane > table > caption
    "3D solids in the IB Formula Booklet (SL 3.1 section)": "IB 공식집의 3D 입체도형 공식 (SL 3.1 부분)",

    // Three-dimensional space, solids and angles with a plane > table > th
    "Solid": "입체도형",

    // Three-dimensional space, solids and angles with a plane > table > th
    "Volume <span class=\"chem\">V</span>": "부피 <span class=\"chem\">V</span>",

    // Three-dimensional space, solids and angles with a plane > table > th
    "Surface area <span class=\"chem\">A</span>": "겉넓이 <span class=\"chem\">A</span>",

    // Three-dimensional space, solids and angles with a plane > table > th
    "Key right-triangle link": "핵심 직각삼각형 관계",

    // Three-dimensional space, solids and angles with a plane > table > th
    "Right pyramid": "직각뿔",

    // Three-dimensional space, solids and angles with a plane > table > td
    "<span class=\"chem\">V = (1/3)Ah</span> &nbsp;(where <span class=\"chem\">A</span> is base area)": "<span class=\"chem\">V = (1/3)Ah</span> &nbsp;(<span class=\"chem\">A</span>는 밑넓이)",

    // Three-dimensional space, solids and angles with a plane > table > td
    "Base area <span class=\"chem\">+</span> sum of triangular slant faces": "밑넓이 <span class=\"chem\">+</span> 삼각형 옆면들의 넓이의 합",

    // Three-dimensional space, solids and angles with a plane > table > td
    "Apex height <span class=\"chem\">h</span>, apothem/half-base, and slant height <span class=\"chem\">l</span> form a right triangle.": "높이 <span class=\"chem\">h</span>, 밑면 중심에서 변까지의 거리(밑변의 절반), 모선/옆면 높이 <span class=\"chem\">l</span>이 직각삼각형을 이뤄요.",

    // Three-dimensional space, solids and angles with a plane > table > th
    "Right circular cone": "직원뿔",

    // Three-dimensional space, solids and angles with a plane > table > td
    "<span class=\"chem\">V = (1/3)pi r^2 h</span>": "<span class=\"chem\">V = (1/3)pi r^2 h</span>",

    // Three-dimensional space, solids and angles with a plane > table > td
    "Curved: <span class=\"chem\">A_{curved} = pi r l</span><br>Total solid cone: <span class=\"chem\">pi r l + pi r^2</span>": "옆넓이: <span class=\"chem\">A_{curved} = pi r l</span><br>전체 겉넓이: <span class=\"chem\">pi r l + pi r^2</span>",

    // Three-dimensional space, solids and angles with a plane > table > td
    "Slant height <span class=\"chem\">l = sqrt(r^2 + h^2)</span>.": "모선의 길이 <span class=\"chem\">l = sqrt(r^2 + h^2)</span>.",

    // Three-dimensional space, solids and angles with a plane > table > th
    "Sphere &amp; hemisphere": "구와 반구",

    // Three-dimensional space, solids and angles with a plane > table > td
    "Sphere: <span class=\"chem\">V = (4/3)pi r^3</span><br>Hemisphere: <span class=\"chem\">V = (2/3)pi r^3</span>": "구: <span class=\"chem\">V = (4/3)pi r^3</span><br>반구: <span class=\"chem\">V = (2/3)pi r^3</span>",

    // Three-dimensional space, solids and angles with a plane > table > td
    "Sphere: <span class=\"chem\">A = 4pi r^2</span> (not <span class=\"chem\">r^3</span>)<br>Solid hemisphere: <span class=\"chem\">2pi r^2 + pi r^2 = 3pi r^2</span>": "구: <span class=\"chem\">A = 4pi r^2</span> (<span class=\"chem\">r^3</span> 아님)<br>속이 찬 반구: <span class=\"chem\">2pi r^2 + pi r^2 = 3pi r^2</span>",

    // Three-dimensional space, solids and angles with a plane > table > td
    "When a cone sits on a hemisphere, they share the circular radius <span class=\"chem\">r</span>.": "원뿔이 반구 위에 놓이면 두 도형은 원의 반지름 <span class=\"chem\">r</span>을 공유해요.",

    // Three-dimensional space, solids and angles with a plane > key idea > p
    "<strong>Angle between a line and a plane:</strong> Imagine shining a torch straight down from above the plane. The <dfn data-def=\"The acute angle between a line segment and its orthogonal projection (shadow) on the plane.\">angle between a line and a plane</dfn> is the angle between the line and its <strong>shadow</strong> (orthogonal projection) on the plane. Always drop a perpendicular from the top of the line to the plane to build a right-angled triangle.": "<strong>직선과 평면이 이루는 각:</strong> 평면 위에서 수직으로 손전등을 비춘다고 상상해 보세요. <dfn data-def=\"The acute angle between a line segment and its orthogonal projection (shadow) on the plane.\">직선과 평면이 이루는 각 <span class=\"en-term\">(angle between a line and a plane)</span></dfn>은 그 직선과 평면 위의 <strong>그림자</strong>(정사영)가 이루는 각이에요. 항상 직선의 위쪽 끝에서 평면에 수선을 내려 직각삼각형을 만드세요.",

    // Three-dimensional space, solids and angles with a plane > key idea > data-def attribute
    "The acute angle between a line segment and its orthogonal projection (shadow) on the plane.": "선분과 평면 위의 정사영(그림자)이 이루는 예각.",

    // Three-dimensional space, solids and angles with a plane > worked example > data-kicker attribute
    "Worked example 1 (SL 3.1)": "예제 1 (SL 3.1)",

    // Three-dimensional space, solids and angles with a plane > worked example > h3
    "Height, volume and edge-to-base angle in a right square-based pyramid": "정사각뿔의 높이, 부피 및 모서리와 밑면이 이루는 각",

    // Three-dimensional space, solids and angles with a plane > worked example > p
    "A right pyramid <span class=\"chem\">VABCD</span> has a horizontal square base <span class=\"chem\">ABCD</span> of side length <span class=\"mono\">10 cm</span>. Each sloping edge <span class=\"chem\">VA, VB, VC, VD</span> has length <span class=\"mono\">13 cm</span>. Let <span class=\"chem\">M</span> be the centre of the square base.": "직각뿔 <span class=\"chem\">VABCD</span>의 수평 정사각형 밑면 <span class=\"chem\">ABCD</span>의 한 변의 길이가 <span class=\"mono\">10 cm</span>이다. 각 옆모서리 <span class=\"chem\">VA, VB, VC, VD</span>의 길이는 <span class=\"mono\">13 cm</span>이고, <span class=\"chem\">M</span>은 정사각형 밑면의 중심이다.",

    // Three-dimensional space, solids and angles with a plane > worked example > p
    "(a) Find the exact length of <span class=\"chem\">AM</span>, and hence find the vertical height <span class=\"chem\">VM</span>. <strong>[3 marks]</strong><br> (b) Calculate the volume of the pyramid, giving your answer to 3 significant figures. <strong>[2 marks]</strong><br> (c) Find the angle that the edge <span class=\"chem\">VA</span> makes with the base <span class=\"chem\">ABCD</span>. <strong>[2 marks]</strong>": "(a) <span class=\"chem\">AM</span>의 정확한 길이를 구하고 (Find), 이를 이용하여 수직 높이 <span class=\"chem\">VM</span>을 구하시오. <strong>[3 marks]</strong><br> (b) 각뿔의 부피를 계산하고 (Calculate) 유효숫자 3자리로 답하시오. <strong>[2 marks]</strong><br> (c) 모서리 <span class=\"chem\">VA</span>가 밑면 <span class=\"chem\">ABCD</span>와 이루는 각을 구하시오 (Find). <strong>[2 marks]</strong>",

    // Three-dimensional space, solids and angles with a plane > worked example > data-title attribute
    "Find the base diagonal AC and half-diagonal AM": "밑면의 대각선 AC와 반쪽 대각선 AM 구하기",

    // Three-dimensional space, solids and angles with a plane > worked example > p
    "The shadow of the edge VA on the horizontal base is the half-diagonal AM, from corner A to the centre M.": "수평 밑면 위에 생기는 모서리 VA의 그림자는 꼭짓점 A에서 중심 M까지의 반쪽 대각선 AM이에요.",

    // Three-dimensional space, solids and angles with a plane > worked example > data-title attribute
    "Use Pythagoras in the vertical right-angled triangle VMA": "수직 직각삼각형 VMA에서 피타고라스 정리 사용하기",

    // Three-dimensional space, solids and angles with a plane > worked example > p
    "Because the pyramid is a right pyramid, the apex V is directly above M, so ∠VMA = 90°.": "직각뿔이므로 꼭짓점 V는 M의 바로 위에 있어 ∠VMA = 90°예요.",

    // Three-dimensional space, solids and angles with a plane > worked example > data-title attribute
    "Compute the volume using V = (1/3)Ah": "V = (1/3)Ah로 부피 계산하기",

    // Three-dimensional space, solids and angles with a plane > worked example > p
    "The base is a 10 cm by 10 cm square with area A = 100 cm².": "밑면은 10 cm × 10 cm 정사각형이므로 넓이는 A = 100 cm²예요.",

    // Three-dimensional space, solids and angles with a plane > worked example > data-title attribute
    "Find ∠VAM between edge VA and its shadow AM on the base": "모서리 VA와 밑면 위 그림자 AM 사이의 각 ∠VAM 구하기",

    // Three-dimensional space, solids and angles with a plane > worked example > p
    "In right-angled triangle VMA, AM is adjacent to ∠VAM and VA = 13 cm is the hypotenuse.": "직각삼각형 VMA에서 AM은 ∠VAM의 밑변이고 VA = 13 cm는 빗변이에요.",

    // Three-dimensional space, solids and angles with a plane > worked example > maths line
    "cos(∠<i>VAM</i>) = <span class=\"frac\"><span>5√2</span><span>13</span></span> ≈ 0.54393 ⇒ ∠<i>VAM</i> = arccos<span class=\"frac\"><span>5√2</span><span>13</span></span> ≈ <b>57.0°</b> (or 0.996 rad) <b>[M1 A1]</b>": "cos(∠<i>VAM</i>) = <span class=\"frac\"><span>5√2</span><span>13</span></span> ≈ 0.54393 ⇒ ∠<i>VAM</i> = arccos<span class=\"frac\"><span>5√2</span><span>13</span></span> ≈ <b>57.0°</b> (또는 0.996 rad) <b>[M1 A1]</b>",

    // Three-dimensional space, solids and angles with a plane > worked example > p
    "(a) <i>AM</i> = 5√2 cm, <i>VM</i> = √119 cm ≈ 10.9 cm; (b) 364 cm³; (c) 57.0°": "(a) <i>AM</i> = 5√2 cm, <i>VM</i> = √119 cm ≈ 10.9 cm; (b) 364 cm³; (c) 57.0°",

    // Three-dimensional space, solids and angles with a plane > common mistake > p
    "<strong>Angle between two planes vs angle between a line and a plane:</strong> In the pyramid above, the angle between the <em>slant edge</em> <span class=\"chem\">VA</span> and the base is <span class=\"chem\">angle VAM</span> (using the half-diagonal <span class=\"chem\">AM = 5 sqrt(2)</span>). If a question asks for the angle between the <em>sloping triangular face</em> <span class=\"chem\">VAB</span> and the base, you must join <span class=\"chem\">V</span> and <span class=\"chem\">M</span> to the <strong>midpoint <span class=\"chem\">N</span> of side <span class=\"chem\">AB</span></strong> (both <span class=\"chem\">VN</span> and <span class=\"chem\">MN</span> are perpendicular to <span class=\"chem\">AB</span>, and <span class=\"chem\">MN = 5 cm</span>) and find <span class=\"chem\">angle VNM</span>!": "<strong>두 평면이 이루는 각 vs 직선과 평면이 이루는 각:</strong> 위 각뿔에서 <em>옆모서리</em> <span class=\"chem\">VA</span>와 밑면이 이루는 각은 <span class=\"chem\">angle VAM</span>이에요 (반쪽 대각선 <span class=\"chem\">AM = 5 sqrt(2)</span> 사용). 만약 문제가 <em>삼각형 옆면</em> <span class=\"chem\">VAB</span>와 밑면이 이루는 각을 물으면, <span class=\"chem\">V</span>와 <span class=\"chem\">M</span>을 <strong>변 <span class=\"chem\">AB</span>의 중점 <span class=\"chem\">N</span></strong>과 이어 (<span class=\"chem\">VN</span>과 <span class=\"chem\">MN</span>은 모두 <span class=\"chem\">AB</span>에 수직이고 <span class=\"chem\">MN = 5 cm</span>) <span class=\"chem\">angle VNM</span>을 구해야 해요!",

    // Three-dimensional space, solids and angles with a plane > try it > p
    "A rectangular box (cuboid) has dimensions <span class=\"mono\">6 cm</span> by <span class=\"mono\">10 cm</span> by <span class=\"mono\">sqrt(89) cm</span>. Calculate the exact length of its longest internal space diagonal (from one bottom corner to the opposite top corner).": "직육면체의 가로, 세로, 높이가 각각 <span class=\"mono\">6 cm</span>, <span class=\"mono\">10 cm</span>, <span class=\"mono\">sqrt(89) cm</span>예요. 가장 긴 내부 공간 대각선(아래 한 꼭짓점에서 반대편 위 꼭짓점까지)의 정확한 길이를 계산하시오 (Calculate).",

    // Three-dimensional space, solids and angles with a plane > try it > li
    "By the 3D distance formula (3D Pythagoras), the space diagonal of a box with sides <span class=\"chem\">l, w, h</span> is <span class=\"chem\">d = sqrt(l^2 + w^2 + h^2)</span>.": "3D 거리 공식(3D 피타고라스 정리)에 의해 세 변이 <span class=\"chem\">l, w, h</span>인 직육면체의 대각선 길이는 <span class=\"chem\">d = sqrt(l^2 + w^2 + h^2)</span>예요.",

    // Three-dimensional space, solids and angles with a plane > try it > li
    "Substitute <span class=\"chem\">6^2 + 10^2 + (sqrt(89))^2 = 36 + 100 + 89</span> and take the square root.": "<span class=\"chem\">6^2 + 10^2 + (sqrt(89))^2 = 36 + 100 + 89</span>를 계산한 뒤 제곱근을 구하세요.",

    // Triangle trigonometry, the ambiguous case and bearings > data-toc attribute
    "Triangles & ambiguous case": "삼각형과 모호한 경우",

    // Triangle trigonometry, the ambiguous case and bearings > h2
    "Triangle trigonometry, the ambiguous case and bearings": "삼각형의 삼각비, 모호한 경우와 방위각",

    // Triangle trigonometry, the ambiguous case and bearings > p
    "In any triangle <span class=\"chem\">ABC</span>, we label the side opposite angle <span class=\"chem\">A</span> as <span class=\"chem\">a</span>, opposite <span class=\"chem\">B</span> as <span class=\"chem\">b</span>, and opposite <span class=\"chem\">C</span> as <span class=\"chem\">c</span>. Three formulas in your Formula Booklet let you solve any triangle once you know three pieces of information (including at least one side).": "임의의 삼각형 <span class=\"chem\">ABC</span>에서 각 <span class=\"chem\">A</span>의 대변을 <span class=\"chem\">a</span>, <span class=\"chem\">B</span>의 대변을 <span class=\"chem\">b</span>, <span class=\"chem\">C</span>의 대변을 <span class=\"chem\">c</span>라 해요. 공식집에 있는 세 가지 공식을 이용하면 (적어도 한 변의 길이를 포함한) 세 가지 정보만으로 삼각형을 풀 수 있어요.",

    // Triangle trigonometry, the ambiguous case and bearings > equation > maths line
    "<span class=\"frac\"><span><i>a</i></span><span>sin <i>A</i></span></span> = <span class=\"frac\"><span><i>b</i></span><span>sin <i>B</i></span></span> = <span class=\"frac\"><span><i>c</i></span><span>sin <i>C</i></span></span>, &nbsp;&nbsp; <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − 2<i>ab</i> cos <i>C</i>, &nbsp;&nbsp; Area = <span class=\"frac\"><span>1</span><span>2</span></span><i>ab</i> sin <i>C</i>": "<span class=\"frac\"><span><i>a</i></span><span>sin <i>A</i></span></span> = <span class=\"frac\"><span><i>b</i></span><span>sin <i>B</i></span></span> = <span class=\"frac\"><span><i>c</i></span><span>sin <i>C</i></span></span>, &nbsp;&nbsp; <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − 2<i>ab</i> cos <i>C</i>, &nbsp;&nbsp; Area = <span class=\"frac\"><span>1</span><span>2</span></span><i>ab</i> sin <i>C</i>",

    // Triangle trigonometry, the ambiguous case and bearings > equation > dd
    "side lengths opposite interior angles <i>A</i>, <i>B</i>, <i>C</i>": "내각 <i>A</i>, <i>B</i>, <i>C</i>의 대변의 길이",

    // Triangle trigonometry, the ambiguous case and bearings > equation > dt
    "cos C": "cos C",

    // Triangle trigonometry, the ambiguous case and bearings > equation > dd
    "rearranged form: cos <i>C</i> = (<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − <i>c</i><sup>2</sup>) / (2<i>ab</i>)": "변형된 꼴: cos <i>C</i> = (<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − <i>c</i><sup>2</sup>) / (2<i>ab</i>)",

    // Triangle trigonometry, the ambiguous case and bearings > h3
    "Why the Sine Rule has an ambiguous case (SSA)": "사인법칙에 모호한 경우(SSA)가 생기는 이유",

    // Triangle trigonometry, the ambiguous case and bearings > p
    "Because <span class=\"chem\">sin(180° - theta) = sin(theta)</span>, a positive value of <span class=\"chem\">sin C</span> corresponds to <strong>two</strong> angles between <span class=\"mono\">0°</span> and <span class=\"mono\">180°</span>: an acute angle <span class=\"chem\">C_1 = arcsin(k)</span> and its obtuse supplement <span class=\"chem\">C_2 = 180° - C_1</span>. Geometrically, if you fix angle <span class=\"chem\">A</span> and adjacent side <span class=\"chem\">b</span>, the minimum perpendicular distance from vertex <span class=\"chem\">C</span> to the base line is <span class=\"chem\">h = b sin A</span>. When the opposite side <span class=\"chem\">a</span> satisfies <span class=\"chem\">b sin A &lt; a &lt; b</span>, a compass of radius <span class=\"chem\">a</span> centred at <span class=\"chem\">C</span> cuts the base line in <strong>two different places</strong>!": "<span class=\"chem\">sin(180° - theta) = sin(theta)</span>이므로, 양수 <span class=\"chem\">sin C</span> 값에 대응하는 각은 <span class=\"mono\">0°</span>와 <span class=\"mono\">180°</span> 사이에 <strong>두 개</strong> 있어요: 예각 <span class=\"chem\">C_1 = arcsin(k)</span>와 둔각 보각 <span class=\"chem\">C_2 = 180° - C_1</span>이에요. 기하학적으로 각 <span class=\"chem\">A</span>와 이웃변 <span class=\"chem\">b</span>를 고정하면, 꼭짓점 <span class=\"chem\">C</span>에서 밑변 연장선까지의 수직 최단 거리는 <span class=\"chem\">h = b sin A</span>예요. 대변 <span class=\"chem\">a</span>가 <span class=\"chem\">b sin A &lt; a &lt; b</span>를 만족하면, <span class=\"chem\">C</span>를 중심으로 반지름 <span class=\"chem\">a</span>인 컴퍼스로 그린 원이 밑변과 <strong>서로 다른 두 점</strong>에서 만나요!",

    // Triangle trigonometry, the ambiguous case and bearings > widget > data-title attribute
    "Ambiguous Case (SSA) Triangle Explorer": "모호한 경우 (SSA) 삼각형 탐색기",

    // Triangle trigonometry, the ambiguous case and bearings > widget > figcaption
    "Adjust the known angle <i>A</i>, adjacent side <i>b</i>, and opposite swinging side <i>a</i>. Watch how side <i>a</i> misses the base when <i>a</i> &lt; <i>b</i> sin <i>A</i> (0 triangles), just touches at 90° when <i>a</i> = <i>b</i> sin <i>A</i> (1 right triangle), cuts the base twice when <i>b</i> sin <i>A</i> &lt; <i>a</i> &lt; <i>b</i> (<strong>2 triangles: acute <i>B</i>₁ and obtuse <i>B</i>₂ = 180° − <i>B</i>₁</strong>), and forms 1 triangle when <i>a</i> ≥ <i>b</i>.": "주어진 각 <i>A</i>, 이웃변 <i>b</i>, 회전하는 대변 <i>a</i>를 조절해 보세요. 변 <i>a</i>가 <i>a</i> &lt; <i>b</i> sin <i>A</i>일 때 밑변에 닿지 않고(삼각형 0개), <i>a</i> = <i>b</i> sin <i>A</i>일 때 90°로 딱 접하며(직각삼각형 1개), <i>b</i> sin <i>A</i> &lt; <i>a</i> &lt; <i>b</i>일 때 밑변과 두 번 만나고(<strong>삼각형 2개: 예각 <i>B</i>₁과 둔각 <i>B</i>₂ = 180° − <i>B</i>₁</strong>), <i>a</i> ≥ <i>b</i>일 때 삼각형 1개가 되는 모습을 확인해 보세요.",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > data-kicker attribute
    "Worked example 2 (SL 3.5 — Ambiguous Case)": "예제 2 (SL 3.5 — 모호한 경우)",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > h3
    "Finding both possible triangles in an SSA problem": "SSA 문제에서 가능한 두 삼각형 모두 구하기",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > p
    "In triangle <span class=\"chem\">ABC</span>, <span class=\"chem\">AB = 10 cm</span>, <span class=\"chem\">BC = 7 cm</span>, and <span class=\"chem\">angle BAC = 35°</span>.<br> (a) Find the two possible values of <span class=\"chem\">angle ACB</span>, giving your answers to 1 decimal place. <strong>[4 marks]</strong><br> (b) Find the positive difference between the two possible lengths of side <span class=\"chem\">AC</span>. <strong>[3 marks]</strong>": "삼각형 <span class=\"chem\">ABC</span>에서 <span class=\"chem\">AB = 10 cm</span>, <span class=\"chem\">BC = 7 cm</span>, <span class=\"chem\">angle BAC = 35°</span>이다.<br> (a) <span class=\"chem\">angle ACB</span>의 가능한 두 값을 구하고 (Find) 소수점 아래 1자리까지 답하시오. <strong>[4 marks]</strong><br> (b) 변 <span class=\"chem\">AC</span>의 가능한 두 길이의 양의 차이를 구하시오 (Find). <strong>[3 marks]</strong>",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > data-title attribute
    "Apply the Sine Rule to find the acute angle C₁": "사인법칙을 적용해 예각 C₁ 구하기",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > p
    "We know an opposite pair (∠A = 35° and BC = a = 7 cm) and side AB = c = 10 cm opposite ∠ACB.": "마주 보는 한 쌍(∠A = 35°와 BC = a = 7 cm)과 ∠ACB의 대변 AB = c = 10 cm를 알고 있어요.",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > maths line
    "<i>C</i><sub>1</sub> = arcsin(0.81939…) = <b>55.0°</b> (55.024° unrounded) <b>[A1]</b>": "<i>C</i><sub>1</sub> = arcsin(0.81939…) = <b>55.0°</b> (반올림 전 55.024°) <b>[A1]</b>",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > data-title attribute
    "Subtract from 180° to find the obtuse angle C₂": "180°에서 빼서 둔각 C₂ 구하기",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > p
    "Since a = 7 &lt; c = 10, the supplementary angle C₂ = 180° − C₁ also leaves room for angle A = 35° (125.0° + 35° = 160.0° &lt; 180°).": "a = 7 &lt; c = 10이므로 보각 C₂ = 180° − C₁도 각 A = 35°가 들어갈 여유가 있어요 (125.0° + 35° = 160.0° &lt; 180°).",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > maths line
    "<i>C</i><sub>2</sub> = 180° − 55.024° = <b>125.0°</b> (124.976° unrounded) <b>[A1]</b>": "<i>C</i><sub>2</sub> = 180° − 55.024° = <b>125.0°</b> (반올림 전 124.976°) <b>[A1]</b>",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > data-title attribute
    "Find the two lengths of AC (or use the Cosine Rule quadratic)": "AC의 두 길이 구하기 (또는 코사인법칙 이차방정식 이용)",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > p
    "Method 1 uses the two values of ∠B = 180° − 35° − C. Method 2 sets up the Cosine Rule with b = AC: 7² = 10² + b² − 2(10)b cos 35°, which is b² − (20 cos 35°)b + 51 = 0!": "방법 1은 ∠B = 180° − 35° − C의 두 값을 이용해요. 방법 2는 b = AC로 코사인법칙 7² = 10² + b² − 2(10)b cos 35°, 즉 b² − (20 cos 35°)b + 51 = 0을 세우는 거예요!",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > maths line
    "Difference = 12.204 − 4.179 = <b>8.03 cm</b> (3 s.f.) <b>[A1]</b>": "차이 = 12.204 − 4.179 = <b>8.03 cm</b> (3 s.f.) <b>[A1]</b>",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > p
    "(a) 55.0° or 125.0°; (b) 8.03 cm": "(a) 55.0° 또는 125.0°; (b) 8.03 cm",

    // Triangle trigonometry, the ambiguous case and bearings > exam tip (shown in English + translation) > p
    "<strong>Exam shortcut for the difference between the two possible third sides:</strong> In any ambiguous SSA triangle with known angle <span class=\"chem\">A</span>, adjacent side <span class=\"chem\">c</span>, and opposite side <span class=\"chem\">a</span>, the two possible third sides <span class=\"chem\">b_1, b_2</span> are the roots of the Cosine Rule quadratic <span class=\"chem\">b^2 - (2c cos A)b + (c^2 - a^2) = 0</span>. By Vieta's root relations, the <strong>sum</strong> of the two possible lengths of <span class=\"chem\">AC</span> is simply <span class=\"chem\">b_1 + b_2 = 2c cos A</span>, and because the two positions of side <span class=\"chem\">a</span> form an isosceles triangle with base <span class=\"chem\">b_1 - b_2</span>, the <strong>difference</strong> is <span class=\"chem\">b_1 - b_2 = 2a cos C_1</span> (where <span class=\"chem\">C_1</span> is the acute angle opposite <span class=\"chem\">c</span>)!": "<strong>시험 단축 공식 — 가능한 두 세 번째 변 길이의 차:</strong> 각 <span class=\"chem\">A</span>, 이웃변 <span class=\"chem\">c</span>, 대변 <span class=\"chem\">a</span>가 주어진 모호한 SSA 삼각형에서 가능한 두 세 번째 변 <span class=\"chem\">b_1, b_2</span>는 코사인법칙 이차방정식 <span class=\"chem\">b^2 - (2c cos A)b + (c^2 - a^2) = 0</span>의 두 근이에요. 근과 계수의 관계에 의해 <span class=\"chem\">AC</span>의 가능한 두 길이의 <strong>합</strong>은 간단히 <span class=\"chem\">b_1 + b_2 = 2c cos A</span>이고, 변 <span class=\"chem\">a</span>의 가능한 두 위치가 밑변이 <span class=\"chem\">b_1 - b_2</span>인 이등변삼각형을 이루므로 <strong>차</strong>는 <span class=\"chem\">b_1 - b_2 = 2a cos C_1</span>이에요 (<span class=\"chem\">C_1</span>은 <span class=\"chem\">c</span>의 대각 중 예각)!",

    // Triangle trigonometry, the ambiguous case and bearings > h3
    "Three-figure bearings and angles of elevation/depression": "세 자리 방위각과 앙각·부각",

    // Triangle trigonometry, the ambiguous case and bearings > li
    "A <dfn data-def=\"A direction measured as a three-digit angle from 000° to 359° clockwise from North (360° is written 000°).\">three-figure true bearing</dfn> is always measured from <strong>North (<span class=\"mono\">000°</span>)</strong>, turning <strong>clockwise</strong>, and written with three digits (such as <span class=\"mono\">065°</span> or <span class=\"mono\">245°</span>). Always look for the word <strong>“from”</strong>: the bearing of <span class=\"chem\">B</span> <em>from</em> <span class=\"chem\">A</span> is measured at <span class=\"chem\">A</span>.": "<dfn data-def=\"북쪽을 기준으로 시계 방향으로 잰 세 자리 각도(000°~359°, 360°는 000°로 써요).\">세 자리 방위각 <span class=\"en-term\">(three-figure true bearing)</span></dfn>은 항상 <strong>북쪽(<span class=\"mono\">000°</span>)</strong>을 기준으로 <strong>시계 방향</strong>으로 재며, 세 자리 숫자로 써요 (예: <span class=\"mono\">065°</span>, <span class=\"mono\">245°</span>). 항상 <strong>“from”</strong>이라는 단어를 찾으세요: <span class=\"chem\">A</span><em>로부터</em> <span class=\"chem\">B</span>의 방위각은 <span class=\"chem\">A</span>에서 재는 각이에요.",

    // Triangle trigonometry, the ambiguous case and bearings > data-def attribute
    "A direction measured as a three-digit angle from 000° to 359° clockwise from North (360° is written 000°).": "북쪽을 기준으로 시계 방향으로 잰 세 자리 각도(000°~359°, 360°는 000°로 써요).",

    // Triangle trigonometry, the ambiguous case and bearings > li
    "An <strong>angle of elevation</strong> (looking up) and an <strong>angle of depression</strong> (looking down) are always measured from the <strong>horizontal</strong>—never from a vertical wall or mast. Because horizontal lines are parallel, the angle of elevation of <span class=\"chem\">B</span> from <span class=\"chem\">A</span> equals the angle of depression of <span class=\"chem\">A</span> from <span class=\"chem\">B</span> (alternate interior angles).": "<strong>올려다본 각(앙각, angle of elevation)</strong>과 <strong>내려다본 각(부각, angle of depression)</strong>은 항상 <strong>수평선</strong>을 기준으로 재요—수직 벽이나 기둥에서 재지 않아요. 수평선은 서로 평행하므로 <span class=\"chem\">A</span>에서 <span class=\"chem\">B</span>를 올려다본 각은 <span class=\"chem\">B</span>에서 <span class=\"chem\">A</span>를 내려다본 각과 같아요 (엇각).",

    // Triangle trigonometry, the ambiguous case and bearings > try it > p
    "In triangle <span class=\"chem\">PQR</span>, <span class=\"chem\">PQ = 9 cm</span>, <span class=\"chem\">QR = 8 cm</span>, and the obtuse angle <span class=\"chem\">angle PQR</span> satisfies <span class=\"chem\">cos(angle PQR) = -1/2</span>. Find the area of triangle <span class=\"chem\">PQR</span> to 3 significant figures.": "삼각형 <span class=\"chem\">PQR</span>에서 <span class=\"chem\">PQ = 9 cm</span>, <span class=\"chem\">QR = 8 cm</span>이고, 둔각 <span class=\"chem\">angle PQR</span>이 <span class=\"chem\">cos(angle PQR) = -1/2</span>을 만족해요. 삼각형 <span class=\"chem\">PQR</span>의 넓이를 구하고 (Find) 유효숫자 3자리로 답하시오.",

    // Triangle trigonometry, the ambiguous case and bearings > try it > li
    "If <span class=\"chem\">cos(angle PQR) = -1/2</span>, then <span class=\"chem\">angle PQR = 120°</span> (or use <span class=\"chem\">sin(angle PQR) = sqrt(1 - (-1/2)^2) = sqrt(3)/2</span>).": "<span class=\"chem\">cos(angle PQR) = -1/2</span>이면 <span class=\"chem\">angle PQR = 120°</span>예요 (또는 <span class=\"chem\">sin(angle PQR) = sqrt(1 - (-1/2)^2) = sqrt(3)/2</span>을 이용하세요).",

    // Triangle trigonometry, the ambiguous case and bearings > try it > li
    "Substitute into <span class=\"chem\">Area = (1/2) * PQ * QR * sin(angle PQR) = (1/2) * 9 * 8 * (sqrt(3)/2)</span>.": "<span class=\"chem\">Area = (1/2) * PQ * QR * sin(angle PQR) = (1/2) * 9 * 8 * (sqrt(3)/2)</span>에 대입하세요.",

    // Triangle trigonometry, the ambiguous case and bearings > try it > maths line
    "sin(∠<i>PQR</i>) = <span class=\"frac\"><span>√3</span><span>2</span></span> ⇒ Area = <span class=\"frac\"><span>1</span><span>2</span></span>(9)(8)<span class=\"frac\"><span>√3</span><span>2</span></span> = 18√3 ≈ <b>31.2 cm<sup>2</sup></b>": "sin(∠<i>PQR</i>) = <span class=\"frac\"><span>√3</span><span>2</span></span> ⇒ 넓이 = <span class=\"frac\"><span>1</span><span>2</span></span>(9)(8)<span class=\"frac\"><span>√3</span><span>2</span></span> = 18√3 ≈ <b>31.2 cm<sup>2</sup></b>",

    // Radian measure, arcs, sectors and circular segments > data-toc attribute
    "Radians, sectors & segments": "호도법, 부채꼴과 활꼴",

    // Radian measure, arcs, sectors and circular segments > h2
    "Radian measure, arcs, sectors and circular segments": "호도법(라디안), 호, 부채꼴과 활꼴",

    // Radian measure, arcs, sectors and circular segments > p
    "Degrees (<span class=\"mono\">360°</span> in a circle) are a historical convention. In higher mathematics and calculus, we measure angles in <dfn data-def=\"The angle subtended at the centre of a circle of radius r by an arc of length r. One full revolution is 2π radians.\">radians</dfn>: one radian is the angle subtended at the centre of a circle of radius <span class=\"chem\">r</span> by an arc of length <span class=\"chem\">r</span>. Since the circumference of a full circle is <span class=\"chem\">2pi r</span>, a full turn of <span class=\"mono\">360°</span> is <span class=\"chem\">2*pi</span> radians, so <span class=\"chem\">pi rad = 180°</span>.": "도(<span class=\"mono\">360°</span>가 한 바퀴)는 역사적인 관습이에요. 고등 수학과 미적분에서는 각을 <dfn data-def=\"The angle subtended at the centre of a circle of radius r by an arc of length r. One full revolution is 2π radians.\">라디안 <span class=\"en-term\">(radians)</span></dfn>(호도법)으로 재요: 1라디안은 반지름이 <span class=\"chem\">r</span>인 원에서 길이가 <span class=\"chem\">r</span>인 호에 대한 중심각이에요. 원주(원둘레)는 <span class=\"chem\">2pi r</span>이므로 한 바퀴 <span class=\"mono\">360°</span>는 <span class=\"chem\">2*pi</span>라디안, 즉 <span class=\"chem\">pi rad = 180°</span>예요.",

    // Radian measure, arcs, sectors and circular segments > data-def attribute
    "The angle subtended at the centre of a circle of radius r by an arc of length r. One full revolution is 2π radians.": "반지름이 r인 원에서 길이가 r인 호가 중심에 만드는 각. 한 바퀴는 2π 라디안.",

    // Radian measure, arcs, sectors and circular segments > equation > dd
    "radius of the circle": "원의 반지름",

    // Radian measure, arcs, sectors and circular segments > equation > dd
    "central angle <strong>measured in radians</strong> (<span class=\"chem\">theta = deg * pi / 180</span>)": "<strong>라디안 단위로 잰</strong> 중심각 (<span class=\"chem\">theta = deg * pi / 180</span>)",

    // Radian measure, arcs, sectors and circular segments > equation > dd
    "arc length subtended by angle <i>θ</i>": "각 <i>θ</i>에 대한 호의 길이",

    // Radian measure, arcs, sectors and circular segments > equation > dt
    "A<sub>segment</sub>": "A<sub>segment</sub>",

    // Radian measure, arcs, sectors and circular segments > equation > dd
    "area between chord and arc: sector area <span class=\"chem\">(1/2)r^2*theta</span> minus triangle area <span class=\"chem\">(1/2)r^2 sin(theta)</span>": "현과 호 사이의 넓이(활꼴): 부채꼴 넓이 <span class=\"chem\">(1/2)r^2*theta</span>에서 삼각형 넓이 <span class=\"chem\">(1/2)r^2 sin(theta)</span>를 뺀 값",

    // Radian measure, arcs, sectors and circular segments > formula booklet note > p
    "<strong>What is in the Formula Booklet vs what you must derive:</strong> Your booklet gives <span class=\"chem\">l = r*theta</span> and <span class=\"chem\">A = (1/2)r^2*theta</span>. It does <strong>not</strong> print the circular segment formula <span class=\"chem\">A_{segment} = (1/2)r^2(theta - sin(theta))</span> or the chord length formula <span class=\"chem\">AB = 2r sin(theta/2) = r*sqrt(2 - 2 cos(theta))</span>—you construct these by subtracting or solving the isosceles triangle <span class=\"chem\">OAB</span> with two sides of length <span class=\"chem\">r</span>.": "<strong>공식집에 있는 것 vs 직접 유도해야 하는 것:</strong> 공식집에는 <span class=\"chem\">l = r*theta</span>와 <span class=\"chem\">A = (1/2)r^2*theta</span>가 나와 있어요. 활꼴 넓이 공식 <span class=\"chem\">A_{segment} = (1/2)r^2(theta - sin(theta))</span>이나 현의 길이 공식 <span class=\"chem\">AB = 2r sin(theta/2) = r*sqrt(2 - 2 cos(theta))</span>은 <strong>수록되어 있지 않아요</strong>—두 변의 길이가 <span class=\"chem\">r</span>인 이등변삼각형 <span class=\"chem\">OAB</span>를 빼거나 풀어서 직접 만들어야 해요.",

    // Radian measure, arcs, sectors and circular segments > widget > data-title attribute
    "Radian Sector, Arc & Shaded Segment Visualizer": "라디안 부채꼴, 호 및 활꼴 시각화 도구",

    // Radian measure, arcs, sectors and circular segments > widget > figcaption
    "Drag the radius <i>r</i> and central angle <i>θ</i> (in radians). Compare the full sector area ½<i>r</i>²<i>θ</i>, the isosceles triangle area ½<i>r</i>² sin <i>θ</i>, and the shaded circular segment ½<i>r</i>²(<i>θ</i> − sin <i>θ</i>), as well as the arc length <i>rθ</i> versus the straight chord length 2<i>r</i> sin(<i>θ</i>/2).": "반지름 <i>r</i>과 중심각 <i>θ</i> (라디안)를 드래그해 보세요. 부채꼴 넓이 ½<i>r</i>²<i>θ</i>, 이등변삼각형 넓이 ½<i>r</i>² sin <i>θ</i>, 어두운 활꼴 넓이 ½<i>r</i>²(<i>θ</i> − sin <i>θ</i>)를 비교하고, 호의 길이 <i>rθ</i>와 직선 현의 길이 2<i>r</i> sin(<i>θ</i>/2)도 함께 확인해 보세요.",

    // Radian measure, arcs, sectors and circular segments > worked example > data-kicker attribute
    "Worked example 3 (SL 3.4)": "예제 3 (SL 3.4)",

    // Radian measure, arcs, sectors and circular segments > worked example > h3
    "Perimeter and area of a circular segment": "활꼴의 둘레와 넓이",

    // Radian measure, arcs, sectors and circular segments > worked example > p
    "A circle with centre <span class=\"chem\">O</span> and radius <span class=\"mono\">8 cm</span> has points <span class=\"chem\">A</span> and <span class=\"chem\">B</span> on its circumference such that <span class=\"chem\">angle AOB = 1.5</span> radians.<br> (a) Find the perimeter of the minor segment bounded by the chord <span class=\"chem\">AB</span> and the minor arc <span class=\"chem\">AB</span>, to 3 significant figures. <strong>[4 marks]</strong><br> (b) Find the area of this minor segment, to 3 significant figures. <strong>[3 marks]</strong>": "중심이 <span class=\"chem\">O</span>이고 반지름이 <span class=\"mono\">8 cm</span>인 원의 원주 위의 두 점 <span class=\"chem\">A</span>, <span class=\"chem\">B</span>에 대하여 <span class=\"chem\">angle AOB = 1.5</span>라디안이다.<br> (a) 현 <span class=\"chem\">AB</span>와 작은 호 <span class=\"chem\">AB</span>로 둘러싸인 작은 활꼴의 둘레를 구하고 (Find) 유효숫자 3자리로 답하시오. <strong>[4 marks]</strong><br> (b) 이 작은 활꼴의 넓이를 구하고 (Find) 유효숫자 3자리로 답하시오. <strong>[3 marks]</strong>",

    // Radian measure, arcs, sectors and circular segments > worked example > data-title attribute
    "Calculate the arc length l = rθ": "호의 길이 l = rθ 계산하기",

    // Radian measure, arcs, sectors and circular segments > worked example > p
    "Since θ = 1.5 is already in radians, multiply directly by r = 8 cm.": "θ = 1.5가 이미 라디안이므로 r = 8 cm를 바로 곱하세요.",

    // Radian measure, arcs, sectors and circular segments > worked example > data-title attribute
    "Find the chord length AB using triangle OAB": "삼각형 OAB를 이용해 현 AB의 길이 구하기",

    // Radian measure, arcs, sectors and circular segments > worked example > p
    "Triangle OAB is isosceles with OA = OB = 8 cm and ∠AOB = 1.5 rad. Use the Cosine Rule or bisect ∠AOB into two right triangles: AB = 2r sin(θ/2).": "삼각형 OAB는 OA = OB = 8 cm이고 ∠AOB = 1.5 rad인 이등변삼각형이에요. 코사인법칙을 쓰거나 ∠AOB를 이등분해 두 직각삼각형으로 나누면 AB = 2r sin(θ/2)예요.",

    // Radian measure, arcs, sectors and circular segments > worked example > maths line
    "Perimeter of segment = <i>l</i> + <i>AB</i> = 12 + 10.9062 = <b>22.9 cm</b> (3 s.f.) <b>[A1]</b>": "활꼴의 둘레 = <i>l</i> + <i>AB</i> = 12 + 10.9062 = <b>22.9 cm</b> (3 s.f.) <b>[A1]</b>",

    // Radian measure, arcs, sectors and circular segments > worked example > data-title attribute
    "Subtract the triangle area from the sector area": "부채꼴 넓이에서 삼각형 넓이 빼기",

    // Radian measure, arcs, sectors and circular segments > worked example > p
    "The minor segment is what remains of sector OAB after removing triangle OAB.": "작은 활꼴은 부채꼴 OAB에서 삼각형 OAB를 덜어내고 남은 부분이에요.",

    // Radian measure, arcs, sectors and circular segments > worked example > p
    "(a) 22.9 cm; (b) 16.1 cm²": "(a) 22.9 cm; (b) 16.1 cm²",

    // Radian measure, arcs, sectors and circular segments > common mistake > p
    "<strong>Perimeter of a sector vs perimeter of a segment:</strong> Read carefully! The perimeter of a <strong>sector</strong> includes the two straight radii (<span class=\"chem\">P_{sector} = 2r + r*theta</span>), whereas the perimeter of a <strong>segment</strong> is the arc plus the chord (<span class=\"chem\">P_{segment} = r*theta + 2r sin(theta/2)</span>).": "<strong>부채꼴의 둘레 vs 활꼴의 둘레:</strong> 문제를 꼼꼼히 읽으세요! <strong>부채꼴</strong>의 둘레에는 두 반지름이 포함되지만(<span class=\"chem\">P_{sector} = 2r + r*theta</span>), <strong>활꼴</strong>의 둘레는 호와 현의 합(<span class=\"chem\">P_{segment} = r*theta + 2r sin(theta/2)</span>)이에요.",

    // Radian measure, arcs, sectors and circular segments > try it > p
    "A sector of a circle of radius <span class=\"chem\">r = 6 cm</span> has total perimeter <span class=\"mono\">19.5 cm</span>. Find the central angle <span class=\"chem\">theta</span> in radians.": "반지름이 <span class=\"chem\">r = 6 cm</span>인 원의 부채꼴의 전체 둘레가 <span class=\"mono\">19.5 cm</span>예요. 중심각 <span class=\"chem\">theta</span>를 라디안으로 구하시오 (Find).",

    // Radian measure, arcs, sectors and circular segments > try it > li
    "The perimeter of a sector consists of two radii plus the arc length: <span class=\"chem\">P = 2r + r*theta</span>.": "부채꼴의 둘레는 두 반지름과 호의 길이의 합이에요: <span class=\"chem\">P = 2r + r*theta</span>.",

    // Radian measure, arcs, sectors and circular segments > try it > li
    "Substitute <span class=\"chem\">r = 6</span> into <span class=\"chem\">12 + 6*theta = 19.5</span> and solve for <span class=\"chem\">theta</span>.": "<span class=\"chem\">r = 6</span>을 대입해 <span class=\"chem\">12 + 6*theta = 19.5</span>에서 <span class=\"chem\">theta</span>를 푸세요.",

    // Exam-style practice > data-toc attribute
    // Exam-style practice > h2
    "Exam-style practice": "실전 연습 문제",

    // Exam-style practice > p
    "Three progressive sets testing 3D geometry, non-right triangles, bearings, and radians. Questions you have not yet answered correctly are served first.": "공간기하, 일반 삼각형, 방위각, 호도법을 다루는 단계별 3개 세트예요. 아직 맞히지 못한 문제가 먼저 나와요.",

    // Exam-style practice > h3
    "Foundation: core formulas and one-step checks": "기초: 핵심 공식과 1단계 확인",

    // Exam-style practice > data-title attribute
    "3.1 foundation": "3.1 기초",

    // Exam-style practice > h3
    "Exam standard: Paper 1 (No GDC) and Paper 2 (GDC)": "실전 수준: Paper 1 (계산기 불가) 및 Paper 2 (GDC)",

    // Exam-style practice > data-title attribute
    "3.1 exam standard": "3.1 실전",

    // Exam-style practice > h3
    "Challenge: level 7 multi-step geometry": "심화: 7점 수준 다단계 기하",

    // Exam-style practice > data-title attribute
    "3.1 challenge": "3.1 심화",

    // widget string (assets/js/widgets-t3-1.js)
    "a < b sin A: side a is too short to reach the base (0 triangles)": "a < b sin A: 변 a가 너무 짧아 밑변에 닿지 않음 (삼각형 0개)",

    // widget string (assets/js/widgets-t3-1.js)
    "0 (a < b sin A)": "0개 (a < b sin A)",

    // widget string (assets/js/widgets-t3-1.js)
    "1 right triangle (a = b sin A)": "직각삼각형 1개 (a = b sin A)",

    // widget string (assets/js/widgets-t3-1.js)
    "2 triangles (Ambiguous SSA!)": "삼각형 2개 (모호한 경우 SSA!)",

    // widget string (assets/js/widgets-t3-1.js)
    "1 triangle (a ≥ b)": "삼각형 1개 (a ≥ b)",

    // widget string (assets/js/widgets-t3-1.js)
    "Invalid (> 180° − A)": "불가능 (> 180° − A)",

  }
});
