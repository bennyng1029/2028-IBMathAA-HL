/* t3-3 — ko translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't3-3', {
  strings: {

    // page title (browser tab)
    "3.3 Vectors, lines and planes in 3D space | Analysis Lab": "3.3 3D 공간의 벡터, 직선과 평면 | Analysis Lab",

    // Vectors, lines and planes in 3D space > page header > p
    "Topic 3.3 · Additional HL · AHL 3.12–3.18": "Topic 3.3 · Additional HL · AHL 3.12–3.18",

    // Vectors, lines and planes in 3D space > page header > h1
    "Vectors, lines and planes in 3D space": "3D 공간의 벡터, 직선과 평면",

    // Vectors, lines and planes in 3D space > page header > span
    "How do the dot product and cross product let us turn any 3D geometric question about angles, distances, lines, and planes into clean algebra?": "내적과 외적을 사용하면 각도, 거리, 직선, 평면에 관한 모든 3D 기하 문제를 어떻게 깔끔한 대수 계산으로 바꿀 수 있을까요?",

    // What you need to be able to do > data-toc attribute
    "Checklist": "학습 체크리스트",

    // What you need to be able to do > h2
    "What you need to be able to do": "할 수 있어야 하는 내용",

    // What you need to be able to do > p
    "This entire topic is <strong>Additional Higher Level (AHL 3.12–3.18)</strong>. Tick each item once you can solve it without checking your notes.": "이 단원 전체는 <strong>Additional Higher Level (AHL 3.12–3.18)</strong> 범위예요. 노트를 보지 않고 풀 수 있는 항목에 체크하세요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Find displacement vectors <span class=\"chem\">AB = b - a</span>, magnitudes <span class=\"chem\">|v|</span>, unit vectors <span class=\"chem\">v / |v|</span>, and rescale a direction vector to a given speed.": "변위벡터 <span class=\"chem\">AB = b - a</span>, 크기 <span class=\"chem\">|v|</span>, 단위벡터 <span class=\"chem\">v / |v|</span>를 구하고, 방향벡터의 크기를 주어진 속력에 맞게 조절할 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Compute the scalar (dot) product <span class=\"chem\">v . w = |v||w| cos theta</span>, find the angle between two vectors, and test for perpendicularity (<span class=\"chem\">v . w = 0</span>).": "스칼라곱(내적) <span class=\"chem\">v . w = |v||w| cos theta</span>를 계산하고, 두 벡터가 이루는 각을 구하며, 수직 조건(<span class=\"chem\">v . w = 0</span>)을 판별할 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Write vector (<span class=\"chem\">r = a + lambda*b</span>), parametric, and Cartesian equations of a 3D line, and model constant-velocity motion <span class=\"chem\">r(t) = r_0 + t*v</span>.": "3D 직선의 벡터 방정식(<span class=\"chem\">r = a + lambda*b</span>), 매개변수 방정식, 직교 방정식을 세우고 등속 운동 <span class=\"chem\">r(t) = r_0 + t*v</span>를 모델링할 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Classify a pair of 3D lines as parallel, coincident, intersecting, or skew, and find the shortest distance from a point to a line.": "두 3D 직선의 위치 관계를 평행, 일치, 교차, 꼬인 위치로 분류하고 한 점에서 직선까지의 최단 거리를 구할 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Compute the vector (cross) product <span class=\"chem\">v x w</span> to find a common perpendicular (normal) vector and calculate the area of a parallelogram <span class=\"chem\">|v x w|</span> or triangle <span class=\"chem\">(1/2)|v x w|</span>.": "벡터곱(외적) <span class=\"chem\">v x w</span>를 계산해 공통 수직(법선) 벡터를 찾고, 평행사변형의 넓이 <span class=\"chem\">|v x w|</span>와 삼각형의 넓이 <span class=\"chem\">(1/2)|v x w|</span>를 구할 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Convert between vector (<span class=\"chem\">r = a + lambda*b + mu*c</span>), normal (<span class=\"chem\">r . n = a . n</span>), and Cartesian (<span class=\"chem\">ax + by + cz = d</span>) equations of a plane.": "평면의 벡터 방정식(<span class=\"chem\">r = a + lambda*b + mu*c</span>), 법선 방정식(<span class=\"chem\">r . n = a . n</span>), 직교 방정식(<span class=\"chem\">ax + by + cz = d</span>) 사이를 자유롭게 변환할 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Find intersections and acute angles between a line and a plane (<span class=\"chem\">sin phi = |b . n| / (|b||n|)</span>) and between two or three planes.": "직선과 평면(<span class=\"chem\">sin phi = |b . n| / (|b||n|)</span>), 그리고 두 개 또는 세 개의 평면 사이의 교점·교선과 예각을 구할 수 있어요.",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "문제 디코더",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "문제 디코더: 어떤 공식을 쓸지 바로 찾기",

    // Question decoder: spotting which technique to use > p
    "Vector geometry in Paper 1, Paper 2, and Paper 3 is one of the highest-weighted AHL topics. Use this decoder to translate every standard IB exam prompt into the exact algebraic step.": "Paper 1, Paper 2, Paper 3에서 벡터 기하는 비중이 가장 높은 AHL 단원 중 하나예요. 아래 디코더를 보고 표준 IB 시험 표현을 정확한 대수 풀이 단계로 바로 연결해 보세요.",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — 3D vectors, lines and planes (AHL 3.12–3.18)": "문제 디코더 — 3D 벡터, 직선과 평면 (AHL 3.12–3.18)",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "시험 문제의 표현",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "수학적 의미 (공식 및 식 세우기)",

    // Question decoder: spotting which technique to use > table > th
    "Crucial exam trap to avoid": "피해야 할 핵심 시험 함정",

    // Question decoder: spotting which technique to use > table > th
    "“Show that <span class=\"chem\">u</span> and <span class=\"chem\">v</span> are perpendicular” or “Find <span class=\"chem\">k</span> given perpendicularity”": "“<span class=\"chem\">u</span>와 <span class=\"chem\">v</span>가 수직임을 보이시오” 또는 “수직일 때 <span class=\"chem\">k</span>를 구하시오”",

    // Question decoder: spotting which technique to use > table > td
    "Compute the <strong>dot product</strong> and set it equal to zero: <span class=\"chem\">u . v = u_1 v_1 + u_2 v_2 + u_3 v_3 = 0</span>.": "<strong>내적</strong>을 계산해 0으로 놓으세요: <span class=\"chem\">u . v = u_1 v_1 + u_2 v_2 + u_3 v_3 = 0</span>.",

    // Question decoder: spotting which technique to use > table > td
    "When finding the interior angle <span class=\"chem\">angle ABC</span> of a triangle, both vectors must point <strong>away from vertex <span class=\"chem\">B</span></strong>: use <span class=\"chem\">BA . BC</span>, not <span class=\"chem\">AB . BC</span>!": "삼각형의 내각 <span class=\"chem\">angle ABC</span>를 구할 때는 두 벡터 모두 <strong>꼭짓점 <span class=\"chem\">B</span>에서 바깥쪽</strong>을 향해야 해요: <span class=\"chem\">AB . BC</span>가 아니라 <span class=\"chem\">BA . BC</span>를 쓰세요!",

    // Question decoder: spotting which technique to use > table > th
    "“Find a vector perpendicular to both <span class=\"chem\">u</span> and <span class=\"chem\">v</span>” or “Find the normal <span class=\"chem\">n</span> to plane <span class=\"chem\">ABC</span>”": "“<span class=\"chem\">u</span>와 <span class=\"chem\">v</span>에 모두 수직인 벡터를 구하시오” 또는 “평면 <span class=\"chem\">ABC</span>의 법선벡터 <span class=\"chem\">n</span>을 구하시오”",

    // Question decoder: spotting which technique to use > table > td
    "Compute the <strong>cross product</strong>: <span class=\"chem\">n = u x v</span> (or <span class=\"chem\">AB x AC</span>).": "<strong>외적</strong>을 계산하세요: <span class=\"chem\">n = u x v</span> (또는 <span class=\"chem\">AB x AC</span>).",

    // Question decoder: spotting which technique to use > table > td
    "Watch the minus sign on the middle (<span class=\"chem\">y</span> / <span class=\"chem\">j</span>) component: <span class=\"chem\">n_2 = u_3 v_1 - u_1 v_3</span>. Always check <span class=\"chem\">n . u = 0</span> and <span class=\"chem\">n . v = 0</span>!": "가운데(<span class=\"chem\">y</span> / <span class=\"chem\">j</span>) 성분의 마이너스 부호를 조심하세요: <span class=\"chem\">n_2 = u_3 v_1 - u_1 v_3</span>. 항상 <span class=\"chem\">n . u = 0</span>과 <span class=\"chem\">n . v = 0</span>을 검산하세요!",

    // Question decoder: spotting which technique to use > table > th
    "“Find the shortest distance from point <span class=\"chem\">P</span> to line <span class=\"chem\">L: r = a + lambda*b</span>”": "“점 <span class=\"chem\">P</span>에서 직선 <span class=\"chem\">L: r = a + lambda*b</span>까지의 최단 거리를 구하시오”",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Method 1 (Foot of perpendicular <span class=\"chem\">F</span>)</strong>: Write <span class=\"chem\">PF = a + lambda*b - p</span>, solve <span class=\"chem\">PF . b = 0</span> for <span class=\"chem\">lambda</span>, then compute <span class=\"chem\">|PF|</span>.<br><strong>Method 2 (Cross product area)</strong>: <span class=\"chem\">d = |AP x b| / |b|</span>.": "<strong>방법 1 (수선의 발 <span class=\"chem\">F</span>)</strong>: <span class=\"chem\">PF = a + lambda*b - p</span>로 쓰고 <span class=\"chem\">PF . b = 0</span>을 풀어 <span class=\"chem\">lambda</span>를 구한 뒤 <span class=\"chem\">|PF|</span>를 계산하세요.<br><strong>방법 2 (외적 넓이)</strong>: <span class=\"chem\">d = |AP x b| / |b|</span>.",

    // Question decoder: spotting which technique to use > table > td
    "Use Method 1 whenever the next part asks for the <strong>coordinates of the foot <span class=\"chem\">F</span></strong> or the reflection of <span class=\"chem\">P</span> in <span class=\"chem\">L</span>!": "다음 소문항에서 <strong>수선의 발 <span class=\"chem\">F</span>의 좌표</strong>나 <span class=\"chem\">L</span>에 대한 <span class=\"chem\">P</span>의 대칭점을 묻는다면 언제나 방법 1을 쓰세요!",

    // Question decoder: spotting which technique to use > table > th
    "“Show that lines <span class=\"chem\">L_1</span> and <span class=\"chem\">L_2</span> are <strong>skew</strong>”": "“두 직선 <span class=\"chem\">L_1</span>과 <span class=\"chem\">L_2</span>가 <strong>꼬인 위치</strong>에 있음을 보이시오”",

    // Question decoder: spotting which technique to use > table > td
    "1. Show direction vectors are not scalar multiples (<span class=\"chem\">b_1 != k*b_2</span>, so not parallel).<br>2. Equate <span class=\"chem\">x</span> and <span class=\"chem\">y</span> using <strong>different parameters <span class=\"chem\">lambda</span> and <span class=\"chem\">mu</span></strong>, solve for <span class=\"chem\">(lambda, mu)</span>, and show they fail the <span class=\"chem\">z</span>-equation.": "1. 방향벡터가 실수배가 아님(<span class=\"chem\">b_1 != k*b_2</span>, 평행하지 않음)을 보이세요.<br>2. <strong>서로 다른 매개변수 <span class=\"chem\">lambda</span>와 <span class=\"chem\">mu</span></strong>를 써서 <span class=\"chem\">x</span>, <span class=\"chem\">y</span>를 같다고 놓고 <span class=\"chem\">(lambda, mu)</span>를 구한 뒤, <span class=\"chem\">z</span> 방정식에 대입해 성립하지 않음을 보이세요.",

    // Question decoder: spotting which technique to use > table > td
    "In kinematics, two paths can intersect at a point <span class=\"chem\">P</span> without the objects colliding! They <strong>collide</strong> only if <span class=\"chem\">t_1 = t_2</span> at <span class=\"chem\">P</span>.": "운동학에서 두 경로가 점 <span class=\"chem\">P</span>에서 만나더라도 두 물체가 충돌하지 않을 수 있어요! <span class=\"chem\">P</span>에서 <span class=\"chem\">t_1 = t_2</span>일 때만 <strong>충돌</strong>해요.",

    // Question decoder: spotting which technique to use > table > th
    "Compare: Angle between two lines vs two planes vs <strong>a line and a plane</strong>": "비교: 두 직선 vs 두 평면 vs <strong>직선과 평면</strong>이 이루는 각",

    // Question decoder: spotting which technique to use > table > td
    "• Two lines (<span class=\"chem\">b_1, b_2</span>): <span class=\"chem\">cos theta = |b_1 . b_2| / (|b_1||b_2|)</span><br>• Two planes (<span class=\"chem\">n_1, n_2</span>): <span class=\"chem\">cos theta = |n_1 . n_2| / (|n_1||n_2|)</span><br>• <strong>Line (<span class=\"chem\">b</span>) and Plane (<span class=\"chem\">n</span>)</strong>: <strong><span class=\"chem\">sin phi = |b . n| / (|b||n|)</span></strong>!": "• 두 직선 (<span class=\"chem\">b_1, b_2</span>): <span class=\"chem\">cos theta = |b_1 . b_2| / (|b_1||b_2|)</span><br>• 두 평면 (<span class=\"chem\">n_1, n_2</span>): <span class=\"chem\">cos theta = |n_1 . n_2| / (|n_1||n_2|)</span><br>• <strong>직선 (<span class=\"chem\">b</span>)과 평면 (<span class=\"chem\">n</span>)</strong>: <strong><span class=\"chem\">sin phi = |b . n| / (|b||n|)</span></strong>!",

    // Question decoder: spotting which technique to use > table > td
    "The normal <span class=\"chem\">n</span> is perpendicular (<span class=\"mono\">90°</span>) to the plane, so the angle between <span class=\"chem\">b</span> and <span class=\"chem\">n</span> is <span class=\"chem\">90° - phi</span>. That is why line-plane angle uses <strong><span class=\"chem\">sin phi</span></strong>!": "법선벡터 <span class=\"chem\">n</span>은 평면에 수직(<span class=\"mono\">90°</span>)이므로 <span class=\"chem\">b</span>와 <span class=\"chem\">n</span> 사이의 각은 <span class=\"chem\">90° - phi</span>예요. 그래서 직선과 평면이 이루는 각에는 <strong><span class=\"chem\">sin phi</span></strong>를 써요!",

    // 3D vectors, unit vectors and the scalar (dot) product > data-toc attribute
    "Vectors & dot product": "벡터와 내적",

    // 3D vectors, unit vectors and the scalar (dot) product > h2
    "3D vectors, unit vectors and the scalar (dot) product": "3D 벡터, 단위벡터와 스칼라곱(내적)",

    // 3D vectors, unit vectors and the scalar (dot) product > p
    "A point <span class=\"chem\">A(a_1, a_2, a_3)</span> in 3D space has <dfn data-def=\"The vector OA from the origin O(0, 0, 0) to the point A.\">position vector</dfn> <span class=\"chem\">OA = a = a_1 i + a_2 j + a_3 k</span>. The displacement vector from <span class=\"chem\">A</span> to <span class=\"chem\">B</span> is always <strong>“head minus tail”</strong>: <span class=\"chem\">AB = OB - OA = b - a</span>.": "3D 공간의 점 <span class=\"chem\">A(a_1, a_2, a_3)</span>은 <dfn data-def=\"The vector OA from the origin O(0, 0, 0) to the point A.\">위치벡터 <span class=\"en-term\">(position vector)</span></dfn> <span class=\"chem\">OA = a = a_1 i + a_2 j + a_3 k</span>를 가져요. <span class=\"chem\">A</span>에서 <span class=\"chem\">B</span>로 가는 변위벡터는 항상 <strong>“종점 빼기 시점”</strong>이에요: <span class=\"chem\">AB = OB - OA = b - a</span>.",

    // 3D vectors, unit vectors and the scalar (dot) product > data-def attribute
    "The vector OA from the origin O(0, 0, 0) to the point A.": "원점 O(0, 0, 0)에서 점 A로 향하는 벡터 OA.",

    // 3D vectors, unit vectors and the scalar (dot) product > equation > dd
    "unit vector of length 1 in the direction of <b>v</b>; a vector of speed <i>s</i> in direction <b>d</b> is <span class=\"chem\">s * (d / |d|)</span>": "<b>v</b> 방향의 길이가 1인 단위벡터; <b>d</b> 방향으로 속력 <i>s</i>인 벡터는 <span class=\"chem\">s * (d / |d|)</span>",

    // 3D vectors, unit vectors and the scalar (dot) product > equation > dd
    "scalar (dot) product (returns a single number, never a vector!)": "스칼라곱(내적) — 벡터가 아니라 하나의 스칼라(실수)를 반환해요!",

    // 3D vectors, unit vectors and the scalar (dot) product > equation > dt
    "cos θ": "cos θ",

    // 3D vectors, unit vectors and the scalar (dot) product > equation > dd
    "<span class=\"chem\">cos theta = (v . w) / (|v||w|)</span>; for non-zero vectors, <span class=\"chem\">v . w = 0 &lt;=&gt; theta = 90°</span>": "<span class=\"chem\">cos theta = (v . w) / (|v||w|)</span>; 영벡터가 아닌 두 벡터에 대해 <span class=\"chem\">v . w = 0 &lt;=&gt; theta = 90°</span>",

    // 3D vectors, unit vectors and the scalar (dot) product > key idea > p
    "<strong>Key algebraic properties of the dot product:</strong> Because <span class=\"chem\">cos 0° = 1</span>, dotting any vector with itself gives the square of its magnitude: <span class=\"chem\">v . v = |v|^2</span>. Together with <span class=\"chem\">u . v = v . u</span> and distributivity, you can expand <span class=\"chem\">|u + v|^2 = (u + v) . (u + v) = |u|^2 + 2(u . v) + |v|^2</span> just like ordinary algebra!": "<strong>내적의 핵심 대수적 성질:</strong> <span class=\"chem\">cos 0° = 1</span>이므로 자기 자신과 내적하면 크기의 제곱이 돼요: <span class=\"chem\">v . v = |v|^2</span>. 교환법칙 <span class=\"chem\">u . v = v . u</span>과 분배법칙을 함께 쓰면 일반 다항식처럼 <span class=\"chem\">|u + v|^2 = (u + v) . (u + v) = |u|^2 + 2(u . v) + |v|^2</span>로 전개할 수 있어요!",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > data-kicker attribute
    "Worked example 1 (AHL 3.13)": "예제 1 (AHL 3.13)",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > h3
    "Using |u − v|² = (u − v) · (u − v) with unit vectors": "단위벡터와 |u − v|² = (u − v) · (u − v) 활용하기",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > p
    "<strong>[Paper 1 — No GDC]</strong> Given that <span class=\"chem\">u</span> and <span class=\"chem\">v</span> are vectors with <span class=\"chem\">|u| = 3</span>, <span class=\"chem\">|v| = 4</span>, and <span class=\"chem\">|u - v| = sqrt(37)</span>, find the angle <span class=\"chem\">theta</span> between <span class=\"chem\">u</span> and <span class=\"chem\">v</span>. <strong>[4 marks]</strong>": "<strong>[Paper 1 — No GDC]</strong> 두 벡터 <span class=\"chem\">u</span>와 <span class=\"chem\">v</span>가 <span class=\"chem\">|u| = 3</span>, <span class=\"chem\">|v| = 4</span>, <span class=\"chem\">|u - v| = sqrt(37)</span>을 만족할 때, <span class=\"chem\">u</span>와 <span class=\"chem\">v</span>가 이루는 각 <span class=\"chem\">theta</span>를 구하시오 (Find). <strong>[4 marks]</strong>",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > data-title attribute
    "Square |u − v| using the dot product": "내적을 이용해 |u − v| 제곱하기",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > p
    "Writing |u − v|² = (u − v) · (u − v) brings the dot product u · v into play.": "|u − v|² = (u − v) · (u − v)로 쓰면 내적 u · v가 식에 나타나요.",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > data-title attribute
    "Substitute the known magnitudes to find u · v": "주어진 크기를 대입해 u · v 구하기",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > p
    "We know |u − v|² = 37, |u|² = 9, and |v|² = 16.": "|u − v|² = 37, |u|² = 9, |v|² = 16을 알고 있어요.",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > data-title attribute
    "Use cos θ = (u · v) / (|u||v|)": "cos θ = (u · v) / (|u||v|) 사용하기",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > p
    "Substitute u · v = −6 and |u||v| = 12.": "u · v = −6과 |u||v| = 12를 대입하세요.",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > maths line
    "cos <i>θ</i> = <span class=\"frac\"><span>−6</span><span>3 × 4</span></span> = −<span class=\"frac\"><span>1</span><span>2</span></span> ⇒ <i>θ</i> = <b><span class=\"frac\"><span>2<i>π</i></span><span>3</span></span></b> (or <b>120°</b>) <b>[M1 A1]</b>": "cos <i>θ</i> = <span class=\"frac\"><span>−6</span><span>3 × 4</span></span> = −<span class=\"frac\"><span>1</span><span>2</span></span> ⇒ <i>θ</i> = <b><span class=\"frac\"><span>2<i>π</i></span><span>3</span></span></b> (또는 <b>120°</b>) <b>[M1 A1]</b>",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > p
    "<i>θ</i> = 2π/3 (or 120°)": "<i>θ</i> = 2π/3 (또는 120°)",

    // 3D vectors, unit vectors and the scalar (dot) product > try it > p
    "<strong>[Paper 1 — No GDC]</strong> Find the value of <span class=\"chem\">k</span> such that the vectors <span class=\"chem\">u = (3, -2, k)</span> and <span class=\"chem\">v = (2, 5, 2)</span> are perpendicular.": "<strong>[Paper 1 — No GDC]</strong> 두 벡터 <span class=\"chem\">u = (3, -2, k)</span>와 <span class=\"chem\">v = (2, 5, 2)</span>가 수직이 되도록 하는 <span class=\"chem\">k</span>의 값을 구하시오 (Find).",

    // 3D vectors, unit vectors and the scalar (dot) product > try it > li
    "Two non-zero vectors are perpendicular if and only if their dot product is zero: <span class=\"chem\">u . v = 0</span>.": "영벡터가 아닌 두 벡터가 수직일 필요충분조건은 내적이 0인 것이에요: <span class=\"chem\">u . v = 0</span>.",

    // 3D vectors, unit vectors and the scalar (dot) product > try it > li
    "Solve <span class=\"chem\">3(2) + (-2)(5) + k(2) = 0</span>.": "<span class=\"chem\">3(2) + (-2)(5) + k(2) = 0</span>을 푸세요.",

    // Equations of lines in 3D, kinematics and skew lines > data-toc attribute
    "3D lines, kinematics & skew lines": "3D 직선, 운동학과 꼬인 위치",

    // Equations of lines in 3D, kinematics and skew lines > h2
    "Equations of lines in 3D, kinematics and skew lines": "3D 직선의 방정식, 운동학과 꼬인 위치",

    // Equations of lines in 3D, kinematics and skew lines > p
    "A straight line in 3D space is determined by a known point <span class=\"chem\">A(x_0, y_0, z_0)</span> with position vector <span class=\"chem\">a</span> and a non-zero direction vector <span class=\"chem\">b = (l, m, n)</span>:": "3D 공간의 직선은 위치벡터가 <span class=\"chem\">a</span>인 한 점 <span class=\"chem\">A(x_0, y_0, z_0)</span>과 영벡터가 아닌 방향벡터 <span class=\"chem\">b = (l, m, n)</span>으로 결정돼요:",

    // Equations of lines in 3D, kinematics and skew lines > equation > dd
    "position vector of any specific point on the line": "직선 위의 임의의 한 점의 위치벡터",

    // Equations of lines in 3D, kinematics and skew lines > equation > dd
    "direction vector parallel to the line (in kinematics, the velocity vector <b>v</b>)": "직선과 나란한 방향벡터 (운동학에서는 속도벡터 <b>v</b>)",

    // Equations of lines in 3D, kinematics and skew lines > equation > dt
    "λ (or t)": "λ (또는 t)",

    // Equations of lines in 3D, kinematics and skew lines > equation > dd
    "real scalar parameter (<span class=\"chem\">lambda in R</span>); in kinematics, time <span class=\"chem\">t &gt;= 0</span>": "실수 스칼라 매개변수 (<span class=\"chem\">lambda in R</span>); 운동학에서는 시간 <span class=\"chem\">t &gt;= 0</span>",

    // Equations of lines in 3D, kinematics and skew lines > common mistake > p
    "<strong>Reading the direction vector from a Cartesian line equation:</strong> Before reading off <span class=\"chem\">(x_0, y_0, z_0)</span> and <span class=\"chem\">(l, m, n)</span>, the coefficients of <span class=\"chem\">x, y, z</span> in the numerators <strong>must all be <span class=\"mono\">+1</span></strong>! For example, <span class=\"chem\">(2 - x)/3 = (2y - 4)/6 = z</span> must be rewritten as <span class=\"chem\">(x - 2)/(-3) = (y - 2)/3 = (z - 0)/1</span>, giving point <span class=\"chem\">(2, 2, 0)</span> and direction vector <span class=\"chem\">(-3, 3, 1)</span>.": "<strong>직선의 직교 방정식에서 방향벡터 읽기:</strong> <span class=\"chem\">(x_0, y_0, z_0)</span>과 <span class=\"chem\">(l, m, n)</span>을 읽기 전에, 분자에 있는 <span class=\"chem\">x, y, z</span>의 계수가 <strong>모두 <span class=\"mono\">+1</span></strong>이어야 해요! 예를 들어 <span class=\"chem\">(2 - x)/3 = (2y - 4)/6 = z</span>는 <span class=\"chem\">(x - 2)/(-3) = (y - 2)/3 = (z - 0)/1</span>로 고쳐 써야 지나는 점 <span class=\"chem\">(2, 2, 0)</span>과 방향벡터 <span class=\"chem\">(-3, 3, 1)</span>을 제대로 읽을 수 있어요.",

    // Equations of lines in 3D, kinematics and skew lines > h3
    "Classifying two lines in 3D space": "3D 공간에서 두 직선의 위치 관계 분류",

    // Equations of lines in 3D, kinematics and skew lines > p
    "Unlike lines in a 2D plane, two non-parallel lines in 3D space do not have to intersect—they can pass over and under each other like a bridge over a highway (<dfn data-def=\"Two lines in 3D space that are neither parallel nor intersecting; they do not lie in the same plane.\">skew lines</dfn>):": "2D 평면과 달리 3D 공간에서는 평행하지 않은 두 직선이 반드시 만나는 것은 아니에요—고속도로 위를 지나는 고가도로처럼 만나지 않고 엇갈릴 수 있어요 (<dfn data-def=\"Two lines in 3D space that are neither parallel nor intersecting; they do not lie in the same plane.\">꼬인 위치 <span class=\"en-term\">(skew lines)</span></dfn>):",

    // Equations of lines in 3D, kinematics and skew lines > data-def attribute
    "Two lines in 3D space that are neither parallel nor intersecting; they do not lie in the same plane.": "3D 공간에서 평행하지도 않고 만나지도 않는 두 직선 (같은 평면 위에 있지 않음).",

    // Equations of lines in 3D, kinematics and skew lines > li
    "<strong>Compare the direction vectors <span class=\"chem\">b_1</span> and <span class=\"chem\">b_2</span>:</strong> If <span class=\"chem\">b_1 = k*b_2</span>, the lines are parallel. Test if one line's starting point lies on the other line: if yes, they are <strong>coincident</strong> (the same line); if no, they are <strong>strictly parallel</strong>.": "<strong>방향벡터 <span class=\"chem\">b_1</span>과 <span class=\"chem\">b_2</span> 비교하기:</strong> <span class=\"chem\">b_1 = k*b_2</span>이면 두 직선은 평행해요. 한 직선의 기준점이 다른 직선 위에 있는지 확인해서, 있으면 <strong>일치</strong>(같은 직선), 없으면 <strong>평행</strong>(서로 다른 평행선)이에요.",

    // Equations of lines in 3D, kinematics and skew lines > li
    "<strong>If not parallel, equate coordinates using two distinct parameters <span class=\"chem\">lambda</span> and <span class=\"chem\">mu</span>:</strong> Solve the first two equations (<span class=\"chem\">x</span> and <span class=\"chem\">y</span>) for <span class=\"chem\">lambda</span> and <span class=\"chem\">mu</span>, then substitute into the third (<span class=\"chem\">z</span>) equation. If the third equation holds, the lines <strong>intersect</strong> at a unique point; if it fails, the lines are <strong>skew</strong>.": "<strong>평행하지 않으면 서로 다른 매개변수 <span class=\"chem\">lambda</span>와 <span class=\"chem\">mu</span>로 좌표를 같다고 놓기:</strong> 처음 두 식(<span class=\"chem\">x</span>와 <span class=\"chem\">y</span>)을 연립해 <span class=\"chem\">lambda</span>와 <span class=\"chem\">mu</span>를 구한 뒤 세 번째(<span class=\"chem\">z</span>) 식에 대입하세요. 세 번째 식이 성립하면 한 점에서 <strong>교차</strong>하고, 성립하지 않으면 <strong>꼬인 위치</strong>에 있어요.",

    // Equations of lines in 3D, kinematics and skew lines > worked example > data-kicker attribute
    "Worked example 2 (AHL 3.14–3.15)": "예제 2 (AHL 3.14–3.15)",

    // Equations of lines in 3D, kinematics and skew lines > worked example > h3
    "Finding the foot of the perpendicular and shortest distance from a point to a line": "점에서 직선에 내린 수선의 발과 최단 거리 구하기",

    // Equations of lines in 3D, kinematics and skew lines > worked example > p
    "Consider the point <span class=\"chem\">P(1, 5, 1)</span> and the line <span class=\"chem\">L</span> with vector equation <span class=\"chem\">r = (2, 1, 0) + lambda(1, 2, 2)</span>.<br> (a) Find the coordinates of the point <span class=\"chem\">F</span> on <span class=\"chem\">L</span> that is closest to <span class=\"chem\">P</span>. <strong>[4 marks]</strong><br> (b) Hence find the shortest distance from <span class=\"chem\">P</span> to <span class=\"chem\">L</span>. <strong>[2 marks]</strong>": "점 <span class=\"chem\">P(1, 5, 1)</span>과 벡터 방정식이 <span class=\"chem\">r = (2, 1, 0) + lambda(1, 2, 2)</span>인 직선 <span class=\"chem\">L</span>을 생각하자.<br> (a) <span class=\"chem\">L</span> 위에서 <span class=\"chem\">P</span>에 가장 가까운 점 <span class=\"chem\">F</span>의 좌표를 구하시오 (Find). <strong>[4 marks]</strong><br> (b) 이를 이용하여 (Hence) <span class=\"chem\">P</span>에서 <span class=\"chem\">L</span>까지의 최단 거리를 구하시오. <strong>[2 marks]</strong>",

    // Equations of lines in 3D, kinematics and skew lines > worked example > data-title attribute
    "Write the displacement vector PF in terms of λ": "변위벡터 PF를 λ로 나타내기",

    // Equations of lines in 3D, kinematics and skew lines > worked example > p
    "Any point F on L has coordinates (2 + λ, 1 + 2λ, 2λ), so PF = OF − OP.": "L 위의 임의의 점 F의 좌표는 (2 + λ, 1 + 2λ, 2λ)이므로 PF = OF − OP예요.",

    // Equations of lines in 3D, kinematics and skew lines > worked example > data-title attribute
    "Use PF · b = 0 at the closest point": "가장 가까운 점에서 PF · b = 0 이용하기",

    // Equations of lines in 3D, kinematics and skew lines > worked example > p
    "The shortest segment PF is perpendicular to the line's direction vector b = (1, 2, 2).": "최단 선분 PF는 직선의 방향벡터 b = (1, 2, 2)와 수직이에요.",

    // Equations of lines in 3D, kinematics and skew lines > worked example > data-title attribute
    "Substitute λ = 1 to find F and |PF|": "λ = 1을 대입해 F와 |PF| 구하기",

    // Equations of lines in 3D, kinematics and skew lines > worked example > p
    "Plug λ = 1 into OF = (2 + λ, 1 + 2λ, 2λ) and PF = (1 + λ, 2λ − 4, 2λ − 1).": "OF = (2 + λ, 1 + 2λ, 2λ)와 PF = (1 + λ, 2λ − 4, 2λ − 1)에 λ = 1을 대입하세요.",

    // Equations of lines in 3D, kinematics and skew lines > try it > p
    "Find the shortest distance from the point <span class=\"chem\">P(0, 4, 2)</span> to the line <span class=\"chem\">r = (1, 0, 1) + lambda(1, 2, 2)</span>.": "점 <span class=\"chem\">P(0, 4, 2)</span>에서 직선 <span class=\"chem\">r = (1, 0, 1) + lambda(1, 2, 2)</span>까지의 최단 거리를 구하시오 (Find).",

    // Equations of lines in 3D, kinematics and skew lines > try it > li
    "Write <span class=\"chem\">PF = (1 + lambda, 2*lambda - 4, 2*lambda - 1)</span> and set <span class=\"chem\">PF . (1, 2, 2) = 0</span>.": "<span class=\"chem\">PF = (1 + lambda, 2*lambda - 4, 2*lambda - 1)</span>로 쓰고 <span class=\"chem\">PF . (1, 2, 2) = 0</span>으로 놓으세요.",

    // Equations of lines in 3D, kinematics and skew lines > try it > li
    "You will find <span class=\"chem\">9*lambda - 9 = 0 =&gt; lambda = 1</span>, giving <span class=\"chem\">PF = (2, -2, 1)</span>.": "<span class=\"chem\">9*lambda - 9 = 0 =&gt; lambda = 1</span>이 되어 <span class=\"chem\">PF = (2, -2, 1)</span>을 얻어요.",

    // The vector (cross) product, areas and planes in 3D space > data-toc attribute
    "Cross product & 3D planes": "외적과 3D 평면",

    // The vector (cross) product, areas and planes in 3D space > h2
    "The vector (cross) product, areas and planes in 3D space": "벡터곱(외적), 넓이와 3D 공간의 평면",

    // The vector (cross) product, areas and planes in 3D space > p
    "Whereas the dot product of two vectors is a scalar, the <dfn data-def=\"A binary operation on two 3D vectors v and w that produces a vector v × w perpendicular to both v and w, with magnitude |v||w| sin θ.\">vector (cross) product</dfn> <span class=\"chem\">v x w</span> returns a <strong>3D vector that is perpendicular to both <span class=\"chem\">v</span> and <span class=\"chem\">w</span></strong>.": "두 벡터의 내적이 스칼라인 반면, <dfn data-def=\"A binary operation on two 3D vectors v and w that produces a vector v × w perpendicular to both v and w, with magnitude |v||w| sin θ.\">벡터곱(외적) <span class=\"en-term\">(vector (cross) product)</span></dfn> <span class=\"chem\">v x w</span>는 <strong><span class=\"chem\">v</span>와 <span class=\"chem\">w</span> 모두에 수직인 3D 벡터</strong>를 반환해요.",

    // The vector (cross) product, areas and planes in 3D space > data-def attribute
    "A binary operation on two 3D vectors v and w that produces a vector v × w perpendicular to both v and w, with magnitude |v||w| sin θ.": "두 3D 벡터 v와 w에 대해, 둘 다에 수직이고 크기가 |v||w| sin θ인 벡터 v × w를 만드는 연산.",

    // The vector (cross) product, areas and planes in 3D space > equation > dt
    "Area of parallelogram": "평행사변형의 넓이",

    // The vector (cross) product, areas and planes in 3D space > equation > dd
    "<span class=\"chem\">A = |v x w|</span> where <span class=\"chem\">v, w</span> are adjacent sides": "<span class=\"chem\">A = |v x w|</span> (<span class=\"chem\">v, w</span>는 이웃한 두 변)",

    // The vector (cross) product, areas and planes in 3D space > equation > dt
    "Area of triangle ABC": "삼각형 ABC의 넓이",

    // The vector (cross) product, areas and planes in 3D space > equation > dd
    "<span class=\"chem\">A = (1/2)|AB x AC|</span>": "<span class=\"chem\">A = (1/2)|AB x AC|</span>",

    // The vector (cross) product, areas and planes in 3D space > equation > dt
    "Plane equations": "평면의 방정식",

    // The vector (cross) product, areas and planes in 3D space > equation > dd
    "<span class=\"chem\">r = a + lambda*b + mu*c</span> &nbsp;⇔&nbsp; <span class=\"chem\">r . n = a . n</span> &nbsp;⇔&nbsp; <span class=\"chem\">n_1 x + n_2 y + n_3 z = d</span>": "<span class=\"chem\">r = a + lambda*b + mu*c</span> &nbsp;⇔&nbsp; <span class=\"chem\">r . n = a . n</span> &nbsp;⇔&nbsp; <span class=\"chem\">n_1 x + n_2 y + n_3 z = d</span>",

    // The vector (cross) product, areas and planes in 3D space > widget > data-title attribute
    "Interactive 3D Dot & Cross Product Visualizer": "대화형 3D 내적·외적 시각화 도구",

    // The vector (cross) product, areas and planes in 3D space > widget > figcaption
    "Drag to rotate the 3D axes or adjust the components of vectors <b>u</b> and <b>v</b>. Observe how the cross product <b>u</b> × <b>v</b> (violet) is always perpendicular to the shaded parallelogram spanned by <b>u</b> and <b>v</b>, and its length equals the parallelogram's area |<b>u</b> × <b>v</b>|.": "드래그해서 3D 좌표축을 회전하거나 벡터 <b>u</b>와 <b>v</b>의 성분을 조절해 보세요. 외적 <b>u</b> × <b>v</b> (보라색)가 항상 <b>u</b>와 <b>v</b>가 만드는 평행사변형에 수직이고, 그 길이가 평행사변형의 넓이 |<b>u</b> × <b>v</b>|와 같다는 점을 확인하세요.",

    // The vector (cross) product, areas and planes in 3D space > h3
    "Angles and intersections involving lines and planes (AHL 3.18)": "직선과 평면이 이루는 각과 교점·교선 (AHL 3.18)",

    // The vector (cross) product, areas and planes in 3D space > p
    "A plane <span class=\"chem\">Pi</span> is uniquely defined by its <strong>normal vector</strong> <span class=\"chem\">n = (a, b, c)</span> perpendicular to the surface. Because <span class=\"chem\">n</span> stands at <span class=\"mono\">90°</span> to the plane, finding the acute angle <span class=\"chem\">phi</span> between a line (direction <span class=\"chem\">b</span>) and a plane (normal <span class=\"chem\">n</span>) uses <strong>sine</strong> instead of cosine:": "평면 <span class=\"chem\">Pi</span>는 평면에 수직인 <strong>법선벡터</strong> <span class=\"chem\">n = (a, b, c)</span>로 유일하게 정해져요. <span class=\"chem\">n</span>은 평면과 <span class=\"mono\">90°</span>를 이루므로, 직선(방향벡터 <span class=\"chem\">b</span>)과 평면(법선벡터 <span class=\"chem\">n</span>)이 이루는 예각 <span class=\"chem\">phi</span>를 구할 때는 코사인 대신 <strong>사인</strong>을 써요:",

    // The vector (cross) product, areas and planes in 3D space > equation > maths line
    "sin <i>ϕ</i> = <span class=\"frac\"><span>|<b>b</b> · <b>n</b>|</span><span>|<b>b</b>||<b>n</b>|</span></span> &nbsp; (line and plane), &nbsp;&nbsp;&nbsp;&nbsp; cos <i>θ</i> = <span class=\"frac\"><span>|<b>n</b><sub>1</sub> · <b>n</b><sub>2</sub>|</span><span>|<b>n</b><sub>1</sub>||<b>n</b><sub>2</sub>|</span></span> &nbsp; (two planes)": "sin <i>ϕ</i> = <span class=\"frac\"><span>|<b>b</b> · <b>n</b>|</span><span>|<b>b</b>||<b>n</b>|</span></span> &nbsp; (직선과 평면), &nbsp;&nbsp;&nbsp;&nbsp; cos <i>θ</i> = <span class=\"frac\"><span>|<b>n</b><sub>1</sub> · <b>n</b><sub>2</sub>|</span><span>|<b>n</b><sub>1</sub>||<b>n</b><sub>2</sub>|</span></span> &nbsp; (두 평면)",

    // The vector (cross) product, areas and planes in 3D space > equation > dd
    "acute angle between line direction <b>b</b> and the plane (complement of the angle between <b>b</b> and <b>n</b>)": "직선의 방향벡터 <b>b</b>와 평면이 이루는 예각 (<b>b</b>와 <b>n</b>이 이루는 각의 여각)",

    // The vector (cross) product, areas and planes in 3D space > equation > dd
    "acute angle between two planes with normal vectors <b>n</b><sub>1</sub> and <b>n</b><sub>2</sub>": "법선벡터가 <b>n</b><sub>1</sub>, <b>n</b><sub>2</sub>인 두 평면이 이루는 예각",

    // The vector (cross) product, areas and planes in 3D space > widget > data-title attribute
    "3D Line-Plane Angle & Normal Vector Explorer": "3D 직선-평면 각도 및 법선벡터 탐색기",

    // The vector (cross) product, areas and planes in 3D space > widget > figcaption
    "Adjust the tilt of the line direction vector <b>b</b>. Notice that the dot product <b>b</b> · <b>n</b> gives the angle 90° − ϕ with the vertical normal <b>n</b>, so the angle ϕ with the plane itself satisfies sin ϕ = |<b>b</b> · <b>n</b>| / (|<b>b</b>||<b>n</b>|).": "직선의 방향벡터 <b>b</b>의 기울기를 조절해 보세요. 내적 <b>b</b> · <b>n</b>은 수직 법선벡터 <b>n</b>과의 각 90° − ϕ를 주므로, 평면 자체와 이루는 각 ϕ는 sin ϕ = |<b>b</b> · <b>n</b>| / (|<b>b</b>||<b>n</b>|)을 만족해요.",

    // The vector (cross) product, areas and planes in 3D space > worked example > data-kicker attribute
    "Worked example 3 (AHL 3.16–3.18)": "예제 3 (AHL 3.16–3.18)",

    // The vector (cross) product, areas and planes in 3D space > worked example > h3
    "Cartesian equation of a plane through three points and intersection with a line": "세 점을 지나는 평면의 직교 방정식과 직선과의 교점",

    // The vector (cross) product, areas and planes in 3D space > worked example > p
    "Points <span class=\"chem\">A(1, 0, 2)</span>, <span class=\"chem\">B(2, 3, 1)</span>, and <span class=\"chem\">C(0, 1, 4)</span> lie on a plane <span class=\"chem\">Pi</span>.<br> (a) Find the area of triangle <span class=\"chem\">ABC</span>, and find the Cartesian equation of the plane <span class=\"chem\">Pi</span>. <strong>[5 marks]</strong><br> (b) Find the coordinates of the point where the line <span class=\"chem\">L: r = (1, 5, 0) + lambda(1, -1, 1)</span> intersects <span class=\"chem\">Pi</span>, and find the acute angle between <span class=\"chem\">L</span> and <span class=\"chem\">Pi</span>. <strong>[5 marks]</strong>": "세 점 <span class=\"chem\">A(1, 0, 2)</span>, <span class=\"chem\">B(2, 3, 1)</span>, <span class=\"chem\">C(0, 1, 4)</span>이 평면 <span class=\"chem\">Pi</span> 위에 있다.<br> (a) 삼각형 <span class=\"chem\">ABC</span>의 넓이를 구하고 (Find), 평면 <span class=\"chem\">Pi</span>의 직교 방정식을 구하시오. <strong>[5 marks]</strong><br> (b) 직선 <span class=\"chem\">L: r = (1, 5, 0) + lambda(1, -1, 1)</span>이 <span class=\"chem\">Pi</span>와 만나는 점의 좌표를 구하고, <span class=\"chem\">L</span>과 <span class=\"chem\">Pi</span>가 이루는 예각을 구하시오. <strong>[5 marks]</strong>",

    // The vector (cross) product, areas and planes in 3D space > worked example > data-title attribute
    "Form two in-plane vectors AB and AC and compute their cross product": "평면 위의 두 벡터 AB, AC를 만들고 외적 계산하기",

    // The vector (cross) product, areas and planes in 3D space > worked example > p
    "AB × AC gives a normal vector n perpendicular to the plane, and half its magnitude is the area of ΔABC.": "AB × AC는 평면에 수직인 법선벡터 n을 주고, 그 크기의 절반이 ΔABC의 넓이예요.",

    // The vector (cross) product, areas and planes in 3D space > worked example > data-title attribute
    "Compute Area(ΔABC) and substitute point A(1, 0, 2) into r · n = a · n": "Area(ΔABC)를 계산하고 점 A(1, 0, 2)를 r · n = a · n에 대입하기",

    // The vector (cross) product, areas and planes in 3D space > worked example > p
    "Since |n| = √(49 + 1 + 16) = √66, Area = ½√66.": "|n| = √(49 + 1 + 16) = √66이므로 넓이 = ½√66이에요.",

    // The vector (cross) product, areas and planes in 3D space > worked example > maths line
    "Area = <span class=\"frac\"><span>1</span><span>2</span></span>|<b>AB</b> × <b>AC</b>| = <b><span class=\"frac\"><span>√66</span><span>2</span></span></b> (≈ 4.06), &nbsp;&nbsp; 7<i>x</i> − <i>y</i> + 4<i>z</i> = 7(1) − 0 + 4(2) = <b>15</b> <b>[A1 A1]</b>": "넓이 = <span class=\"frac\"><span>1</span><span>2</span></span>|<b>AB</b> × <b>AC</b>| = <b><span class=\"frac\"><span>√66</span><span>2</span></span></b> (≈ 4.06), &nbsp;&nbsp; 7<i>x</i> − <i>y</i> + 4<i>z</i> = 7(1) − 0 + 4(2) = <b>15</b> <b>[A1 A1]</b>",

    // The vector (cross) product, areas and planes in 3D space > worked example > data-title attribute
    "Substitute the parametric coordinates of L into 7x − y + 4z = 15": "L의 매개변수 좌표를 7x − y + 4z = 15에 대입하기",

    // The vector (cross) product, areas and planes in 3D space > worked example > p
    "On L, x = 1 + λ, y = 5 − λ, z = λ.": "L 위에서 x = 1 + λ, y = 5 − λ, z = λ예요.",

    // The vector (cross) product, areas and planes in 3D space > worked example > maths line
    "Intersection point = (<b><span class=\"frac\"><span>25</span><span>12</span></span>, <span class=\"frac\"><span>47</span><span>12</span></span>, <span class=\"frac\"><span>13</span><span>12</span></span></b>) <b>[A1]</b>": "교점 = (<b><span class=\"frac\"><span>25</span><span>12</span></span>, <span class=\"frac\"><span>47</span><span>12</span></span>, <span class=\"frac\"><span>13</span><span>12</span></span></b>) <b>[A1]</b>",

    // The vector (cross) product, areas and planes in 3D space > worked example > data-title attribute
    "Use sin ϕ = |b · n| / (|b||n|) for the line-plane angle": "직선-평면 각도에 sin ϕ = |b · n| / (|b||n|) 사용하기",

    // The vector (cross) product, areas and planes in 3D space > worked example > p
    "Here b = (1, −1, 1) with |b| = √3 and n = (7, −1, 4) with |n| = √66.": "여기서 b = (1, −1, 1) (|b| = √3)이고 n = (7, −1, 4) (|n| = √66)이에요.",

    // The vector (cross) product, areas and planes in 3D space > worked example > maths line
    "sin <i>ϕ</i> = <span class=\"frac\"><span>|1(7) + (−1)(−1) + 1(4)|</span><span>√3 √66</span></span> = <span class=\"frac\"><span>12</span><span>3√22</span></span> = <span class=\"frac\"><span>4</span><span>√22</span></span> ≈ 0.8528 ⇒ <i>ϕ</i> ≈ <b>58.5°</b> (or 1.02 rad) <b>[M1 A1]</b>": "sin <i>ϕ</i> = <span class=\"frac\"><span>|1(7) + (−1)(−1) + 1(4)|</span><span>√3 √66</span></span> = <span class=\"frac\"><span>12</span><span>3√22</span></span> = <span class=\"frac\"><span>4</span><span>√22</span></span> ≈ 0.8528 ⇒ <i>ϕ</i> ≈ <b>58.5°</b> (또는 1.02 rad) <b>[M1 A1]</b>",

    // The vector (cross) product, areas and planes in 3D space > worked example > p
    "(a) Area = √66 / 2, plane: 7<i>x</i> − <i>y</i> + 4<i>z</i> = 15; (b) (25/12, 47/12, 13/12), ϕ ≈ 58.5°": "(a) 넓이 = √66 / 2, 평면: 7<i>x</i> − <i>y</i> + 4<i>z</i> = 15; (b) (25/12, 47/12, 13/12), ϕ ≈ 58.5°",

    // The vector (cross) product, areas and planes in 3D space > not needed for IB > p
    "<strong>Not required in IB Math AA HL:</strong> The scalar triple product <span class=\"chem\">a . (b x c)</span> for the volume of a parallelepiped and the vector triple product <span class=\"chem\">a x (b x c)</span> are outside the 2021–2028 syllabus (unless defined for you in a Paper 3 problem).": "<strong>IB Math AA HL 시험 범위 외 내용:</strong> 평행육면체의 부피를 구하는 스칼라 삼중곱 <span class=\"chem\">a . (b x c)</span>과 벡터 삼중곱 <span class=\"chem\">a x (b x c)</span>은 2021–2028 교육과정 밖이에요 (Paper 3 문제에서 정의를 직접 주는 경우는 제외).",

    // The vector (cross) product, areas and planes in 3D space > try it > p
    "Find the exact area of triangle <span class=\"chem\">OAB</span> where <span class=\"chem\">O(0, 0, 0)</span> is the origin, <span class=\"chem\">A(1, 2, 2)</span>, and <span class=\"chem\">B(2, 1, -2)</span>.": "원점 <span class=\"chem\">O(0, 0, 0)</span>과 <span class=\"chem\">A(1, 2, 2)</span>, <span class=\"chem\">B(2, 1, -2)</span>를 꼭짓점으로 하는 삼각형 <span class=\"chem\">OAB</span>의 정확한 넓이를 구하시오 (Find).",

    // The vector (cross) product, areas and planes in 3D space > try it > li
    "Compute the cross product <span class=\"chem\">OA x OB = (1, 2, 2) x (2, 1, -2) = (-6, 6, -3)</span>.": "외적 <span class=\"chem\">OA x OB = (1, 2, 2) x (2, 1, -2) = (-6, 6, -3)</span>을 계산하세요.",

    // The vector (cross) product, areas and planes in 3D space > try it > li
    "The area of triangle <span class=\"chem\">OAB</span> is <span class=\"chem\">(1/2)|OA x OB| = (1/2)sqrt((-6)^2 + 6^2 + (-3)^2)</span>.": "삼각형 <span class=\"chem\">OAB</span>의 넓이는 <span class=\"chem\">(1/2)|OA x OB| = (1/2)sqrt((-6)^2 + 6^2 + (-3)^2)</span>이에요.",

    // The vector (cross) product, areas and planes in 3D space > try it > maths line
    "<b>OA</b> × <b>OB</b> = (−6, 6, −3) ⇒ Area = <span class=\"frac\"><span>1</span><span>2</span></span>√(36 + 36 + 9) = <span class=\"frac\"><span>9</span><span>2</span></span> = <b>4.5</b>": "<b>OA</b> × <b>OB</b> = (−6, 6, −3) ⇒ 넓이 = <span class=\"frac\"><span>1</span><span>2</span></span>√(36 + 36 + 9) = <span class=\"frac\"><span>9</span><span>2</span></span> = <b>4.5</b>",

    // Exam-style practice > data-toc attribute
    // Exam-style practice > h2
    "Exam-style practice": "실전 연습 문제",

    // Exam-style practice > p
    "Three sets of original AHL vector questions spanning dot products, 3D lines, kinematics, skew lines, cross products, and planes.": "내적, 3D 직선, 운동학, 꼬인 위치, 외적과 평면을 아우르는 자체 제작 AHL 벡터 문제 3개 세트예요.",

    // Exam-style practice > h3
    "Foundation: vector operations, dot and cross products": "기초: 벡터 연산, 내적과 외적",

    // Exam-style practice > data-title attribute
    "3.3 foundation": "3.3 기초",

    // Exam-style practice > h3
    "Exam standard: Paper 1 and Paper 2": "실전 수준: Paper 1 및 Paper 2",

    // Exam-style practice > data-title attribute
    "3.3 exam standard": "3.3 실전",

    // Exam-style practice > h3
    "Challenge: level 7 3D lines and planes": "심화: 7점 수준 3D 직선과 평면",

    // Exam-style practice > data-title attribute
    "3.3 challenge": "3.3 심화",

    // widget string (assets/js/widgets-t3-3.js)
    "uₓ": "uₓ",

    // widget string (assets/js/widgets-t3-3.js)
    "uᵧ": "uᵧ",

    // widget string (assets/js/widgets-t3-3.js)
    "u_z": "u_z",

    // widget string (assets/js/widgets-t3-3.js)
    "vₓ": "vₓ",

    // widget string (assets/js/widgets-t3-3.js)
    "vᵧ": "vᵧ",

    // widget string (assets/js/widgets-t3-3.js)
    "v_z": "v_z",

    // widget string (assets/js/widgets-t3-3.js)
    "Perpendicular": "수직",

    // widget string (assets/js/widgets-t3-3.js)
    "Parallel (u × v = 0)": "평행 (u × v = 0)",

    // widget string (assets/js/widgets-t3-3.js)
    "General 3D": "일반 3D",

    // widget string (assets/js/widgets-t3-3.js)
    "Dot product u · v": "내적 u · v",

    // widget string (assets/js/widgets-t3-3.js)
    "Cross product u × v": "외적 u × v",

    // widget string (assets/js/widgets-t3-3.js)
    "Parallelogram area |u × v|": "평행사변형 넓이 |u × v|",

    // widget string (assets/js/widgets-t3-3.js)
    "Angle θ": "각도 θ",

    // widget string (assets/js/widgets-t3-3.js)
    "3D vectors u, v, parallelogram area, and cross product u × v": "3D 벡터 u, v, 평행사변형 넓이와 외적 u × v",

    // widget string (assets/js/widgets-t3-3.js)
    "Line–plane angle ϕ": "직선–평면 각도 ϕ",

    // widget string (assets/js/widgets-t3-3.js)
    "Azimuth α": "방위각 α",

    // widget string (assets/js/widgets-t3-3.js)
    "Plane tilt": "평면 기울기",

    // widget string (assets/js/widgets-t3-3.js)
    "Angle ϕ (line–plane)": "각 ϕ (직선–평면)",

    // widget string (assets/js/widgets-t3-3.js)
    "Angle 90° − ϕ (b to n)": "각 90° − ϕ (b와 n 사이)",

    // widget string (assets/js/widgets-t3-3.js)
    "sin ϕ = |b · n| / (|b||n|)": "sin ϕ = |b · n| / (|b||n|)",

    // widget string (assets/js/widgets-t3-3.js)
    "Unit normal n": "단위 법선벡터 n",

    // widget string (assets/js/widgets-t3-3.js)
    "3D line intersecting a plane with normal vector n": "법선벡터 n인 평면과 만나는 3D 직선",

  }
});
