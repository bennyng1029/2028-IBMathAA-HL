/* t3-3 — zh-Hant translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't3-3', {
  strings: {

    // page title (browser tab)
    "3.3 Vectors, lines and planes in 3D space | Analysis Lab": "3.3 3D 空間中的向量、直線與平面 | Analysis Lab",

    // Vectors, lines and planes in 3D space > page header > p
    "Topic 3.3 · Additional HL · AHL 3.12–3.18": "課題 3.3 · Additional HL · AHL 3.12–3.18",

    // Vectors, lines and planes in 3D space > page header > h1
    "Vectors, lines and planes in 3D space": "3D 空間中的向量、直線與平面",

    // Vectors, lines and planes in 3D space > page header > span
    "How do the dot product and cross product let us turn any 3D geometric question about angles, distances, lines, and planes into clean algebra?": "點積與叉積如何把任何關於角度、距離、直線與平面的 3D 幾何問題轉化為簡潔的代數運算？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "學習清單",

    // What you need to be able to do > h2
    "What you need to be able to do": "你需要掌握的能力",

    // What you need to be able to do > p
    "This entire topic is <strong>Additional Higher Level (AHL 3.12–3.18)</strong>. Tick each item once you can solve it without checking your notes.": "整個課題均屬<strong>高級程度補充課程 (AHL 3.12–3.18)</strong>。當你能在不查閱筆記的情況下完成每項時，便可剔選該項。",

    // What you need to be able to do > checklist > Additional HL > span
    "Find displacement vectors <span class=\"chem\">AB = b - a</span>, magnitudes <span class=\"chem\">|v|</span>, unit vectors <span class=\"chem\">v / |v|</span>, and rescale a direction vector to a given speed.": "求位移向量 <span class=\"chem\">AB = b - a</span>、向量的模 <span class=\"chem\">|v|</span>、單位向量 <span class=\"chem\">v / |v|</span>，以及把方向向量縮放至指定速率。",

    // What you need to be able to do > checklist > Additional HL > span
    "Compute the scalar (dot) product <span class=\"chem\">v . w = |v||w| cos theta</span>, find the angle between two vectors, and test for perpendicularity (<span class=\"chem\">v . w = 0</span>).": "計算純量積（點積）<span class=\"chem\">v . w = |v||w| cos theta</span>、求兩向量的夾角，並檢驗垂直關係（<span class=\"chem\">v . w = 0</span>）。",

    // What you need to be able to do > checklist > Additional HL > span
    "Write vector (<span class=\"chem\">r = a + lambda*b</span>), parametric, and Cartesian equations of a 3D line, and model constant-velocity motion <span class=\"chem\">r(t) = r_0 + t*v</span>.": "寫出 3D 直線的向量方程（<span class=\"chem\">r = a + lambda*b</span>）、參數形式與笛卡兒方程，並以 <span class=\"chem\">r(t) = r_0 + t*v</span> 模擬等速運動。",

    // What you need to be able to do > checklist > Additional HL > span
    "Classify a pair of 3D lines as parallel, coincident, intersecting, or skew, and find the shortest distance from a point to a line.": "判斷一對 3D 直線屬平行、重合、相交抑或異面直線，並求點到直線的最短距離。",

    // What you need to be able to do > checklist > Additional HL > span
    "Compute the vector (cross) product <span class=\"chem\">v x w</span> to find a common perpendicular (normal) vector and calculate the area of a parallelogram <span class=\"chem\">|v x w|</span> or triangle <span class=\"chem\">(1/2)|v x w|</span>.": "計算向量積（叉積）<span class=\"chem\">v x w</span> 以求公垂（法）向量，並計算平行四邊形面積 <span class=\"chem\">|v x w|</span> 或三角形面積 <span class=\"chem\">(1/2)|v x w|</span>。",

    // What you need to be able to do > checklist > Additional HL > span
    "Convert between vector (<span class=\"chem\">r = a + lambda*b + mu*c</span>), normal (<span class=\"chem\">r . n = a . n</span>), and Cartesian (<span class=\"chem\">ax + by + cz = d</span>) equations of a plane.": "在平面的向量方程（<span class=\"chem\">r = a + lambda*b + mu*c</span>）、法線形式（<span class=\"chem\">r . n = a . n</span>）與笛卡兒方程（<span class=\"chem\">ax + by + cz = d</span>）之間互相轉換。",

    // What you need to be able to do > checklist > Additional HL > span
    "Find intersections and acute angles between a line and a plane (<span class=\"chem\">sin phi = |b . n| / (|b||n|)</span>) and between two or three planes.": "求直線與平面（<span class=\"chem\">sin phi = |b . n| / (|b||n|)</span>）以及兩或三個平面之間的交點與銳交角。",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "題型解碼",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "題型解碼：辨識應採用的技巧",

    // Question decoder: spotting which technique to use > p
    "Vector geometry in Paper 1, Paper 2, and Paper 3 is one of the highest-weighted AHL topics. Use this decoder to translate every standard IB exam prompt into the exact algebraic step.": "向量幾何在 Paper 1、Paper 2 與 Paper 3 中是比重最高的 AHL 課題之一。利用下表把每種標準 IB 考題字眼轉化為準確的代數步驟。",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — 3D vectors, lines and planes (AHL 3.12–3.18)": "題型解碼 — 3D 向量、直線與平面（AHL 3.12–3.18）",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "題目中的常見字眼",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "實際含義（公式與列式）",

    // Question decoder: spotting which technique to use > table > th
    "Crucial exam trap to avoid": "須避免的關鍵考試陷阱",

    // Question decoder: spotting which technique to use > table > th
    "“Show that <span class=\"chem\">u</span> and <span class=\"chem\">v</span> are perpendicular” or “Find <span class=\"chem\">k</span> given perpendicularity”": "「證明 <span class=\"chem\">u</span> 與 <span class=\"chem\">v</span> 垂直」或「已知兩向量垂直，求 <span class=\"chem\">k</span>」",

    // Question decoder: spotting which technique to use > table > td
    "Compute the <strong>dot product</strong> and set it equal to zero: <span class=\"chem\">u . v = u_1 v_1 + u_2 v_2 + u_3 v_3 = 0</span>.": "計算<strong>點積</strong>並令其等於零：<span class=\"chem\">u . v = u_1 v_1 + u_2 v_2 + u_3 v_3 = 0</span>。",

    // Question decoder: spotting which technique to use > table > td
    "When finding the interior angle <span class=\"chem\">angle ABC</span> of a triangle, both vectors must point <strong>away from vertex <span class=\"chem\">B</span></strong>: use <span class=\"chem\">BA . BC</span>, not <span class=\"chem\">AB . BC</span>!": "求三角形內角 <span class=\"chem\">angle ABC</span> 時，兩個向量必須同時<strong>從頂點 <span class=\"chem\">B</span> 向外指</strong>：使用 <span class=\"chem\">BA . BC</span>，而非 <span class=\"chem\">AB . BC</span>！",

    // Question decoder: spotting which technique to use > table > th
    "“Find a vector perpendicular to both <span class=\"chem\">u</span> and <span class=\"chem\">v</span>” or “Find the normal <span class=\"chem\">n</span> to plane <span class=\"chem\">ABC</span>”": "「求同時垂直於 <span class=\"chem\">u</span> 與 <span class=\"chem\">v</span> 的向量」或「求平面 <span class=\"chem\">ABC</span> 的法向量 <span class=\"chem\">n</span>」",

    // Question decoder: spotting which technique to use > table > td
    "Compute the <strong>cross product</strong>: <span class=\"chem\">n = u x v</span> (or <span class=\"chem\">AB x AC</span>).": "計算<strong>叉積</strong>：<span class=\"chem\">n = u x v</span>（或 <span class=\"chem\">AB x AC</span>）。",

    // Question decoder: spotting which technique to use > table > td
    "Watch the minus sign on the middle (<span class=\"chem\">y</span> / <span class=\"chem\">j</span>) component: <span class=\"chem\">n_2 = u_3 v_1 - u_1 v_3</span>. Always check <span class=\"chem\">n . u = 0</span> and <span class=\"chem\">n . v = 0</span>!": "留意中間（<span class=\"chem\">y</span> / <span class=\"chem\">j</span>）分量的負號：<span class=\"chem\">n_2 = u_3 v_1 - u_1 v_3</span>。務必驗算 <span class=\"chem\">n . u = 0</span> 與 <span class=\"chem\">n . v = 0</span>！",

    // Question decoder: spotting which technique to use > table > th
    "“Find the shortest distance from point <span class=\"chem\">P</span> to line <span class=\"chem\">L: r = a + lambda*b</span>”": "「求點 <span class=\"chem\">P</span> 到直線 <span class=\"chem\">L: r = a + lambda*b</span> 的最短距離」",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Method 1 (Foot of perpendicular <span class=\"chem\">F</span>)</strong>: Write <span class=\"chem\">PF = a + lambda*b - p</span>, solve <span class=\"chem\">PF . b = 0</span> for <span class=\"chem\">lambda</span>, then compute <span class=\"chem\">|PF|</span>.<br><strong>Method 2 (Cross product area)</strong>: <span class=\"chem\">d = |AP x b| / |b|</span>.": "<strong>方法 1（垂足 <span class=\"chem\">F</span>）</strong>：寫出 <span class=\"chem\">PF = a + lambda*b - p</span>，解 <span class=\"chem\">PF . b = 0</span> 求 <span class=\"chem\">lambda</span>，再計算 <span class=\"chem\">|PF|</span>。<br><strong>方法 2（叉積面積）</strong>：<span class=\"chem\">d = |AP x b| / |b|</span>。",

    // Question decoder: spotting which technique to use > table > td
    "Use Method 1 whenever the next part asks for the <strong>coordinates of the foot <span class=\"chem\">F</span></strong> or the reflection of <span class=\"chem\">P</span> in <span class=\"chem\">L</span>!": "當下一小題要求<strong>垂足 <span class=\"chem\">F</span> 的坐標</strong>或 <span class=\"chem\">P</span> 關於 <span class=\"chem\">L</span> 的反射點時，請使用方法 1！",

    // Question decoder: spotting which technique to use > table > th
    "“Show that lines <span class=\"chem\">L_1</span> and <span class=\"chem\">L_2</span> are <strong>skew</strong>”": "「證明直線 <span class=\"chem\">L_1</span> 與 <span class=\"chem\">L_2</span> 為<strong>異面直線</strong>」",

    // Question decoder: spotting which technique to use > table > td
    "1. Show direction vectors are not scalar multiples (<span class=\"chem\">b_1 != k*b_2</span>, so not parallel).<br>2. Equate <span class=\"chem\">x</span> and <span class=\"chem\">y</span> using <strong>different parameters <span class=\"chem\">lambda</span> and <span class=\"chem\">mu</span></strong>, solve for <span class=\"chem\">(lambda, mu)</span>, and show they fail the <span class=\"chem\">z</span>-equation.": "1. 證明方向向量互不為純量倍數（<span class=\"chem\">b_1 != k*b_2</span>，故不平行）。<br>2. 用<strong>不同參數 <span class=\"chem\">lambda</span> 與 <span class=\"chem\">mu</span></strong> 令 <span class=\"chem\">x</span> 與 <span class=\"chem\">y</span> 相等，解出 <span class=\"chem\">(lambda, mu)</span>，並證明其不滿足 <span class=\"chem\">z</span> 方程。",

    // Question decoder: spotting which technique to use > table > td
    "In kinematics, two paths can intersect at a point <span class=\"chem\">P</span> without the objects colliding! They <strong>collide</strong> only if <span class=\"chem\">t_1 = t_2</span> at <span class=\"chem\">P</span>.": "在運動學中，兩條路徑即使在點 <span class=\"chem\">P</span> 相交，物體也未必相撞！只有當兩者在 <span class=\"chem\">P</span> 處滿足 <span class=\"chem\">t_1 = t_2</span> 時才會<strong>相撞</strong>。",

    // Question decoder: spotting which technique to use > table > th
    "Compare: Angle between two lines vs two planes vs <strong>a line and a plane</strong>": "比較：兩直線交角、兩平面交角與<strong>直線與平面的交角</strong>",

    // Question decoder: spotting which technique to use > table > td
    "• Two lines (<span class=\"chem\">b_1, b_2</span>): <span class=\"chem\">cos theta = |b_1 . b_2| / (|b_1||b_2|)</span><br>• Two planes (<span class=\"chem\">n_1, n_2</span>): <span class=\"chem\">cos theta = |n_1 . n_2| / (|n_1||n_2|)</span><br>• <strong>Line (<span class=\"chem\">b</span>) and Plane (<span class=\"chem\">n</span>)</strong>: <strong><span class=\"chem\">sin phi = |b . n| / (|b||n|)</span></strong>!": "• 兩直線（<span class=\"chem\">b_1, b_2</span>）：<span class=\"chem\">cos theta = |b_1 . b_2| / (|b_1||b_2|)</span><br>• 兩平面（<span class=\"chem\">n_1, n_2</span>）：<span class=\"chem\">cos theta = |n_1 . n_2| / (|n_1||n_2|)</span><br>• <strong>直線（<span class=\"chem\">b</span>）與平面（<span class=\"chem\">n</span>）</strong>：<strong><span class=\"chem\">sin phi = |b . n| / (|b||n|)</span></strong>！",

    // Question decoder: spotting which technique to use > table > td
    "The normal <span class=\"chem\">n</span> is perpendicular (<span class=\"mono\">90°</span>) to the plane, so the angle between <span class=\"chem\">b</span> and <span class=\"chem\">n</span> is <span class=\"chem\">90° - phi</span>. That is why line-plane angle uses <strong><span class=\"chem\">sin phi</span></strong>!": "法向量 <span class=\"chem\">n</span> 垂直（<span class=\"mono\">90°</span>）於平面，故 <span class=\"chem\">b</span> 與 <span class=\"chem\">n</span> 的夾角為 <span class=\"chem\">90° - phi</span>。這正是線面交角使用 <strong><span class=\"chem\">sin phi</span></strong> 的原因！",

    // 3D vectors, unit vectors and the scalar (dot) product > data-toc attribute
    "Vectors & dot product": "向量與點積",

    // 3D vectors, unit vectors and the scalar (dot) product > h2
    "3D vectors, unit vectors and the scalar (dot) product": "3D 向量、單位向量與純量積（點積）",

    // 3D vectors, unit vectors and the scalar (dot) product > p
    "A point <span class=\"chem\">A(a_1, a_2, a_3)</span> in 3D space has <dfn data-def=\"The vector OA from the origin O(0, 0, 0) to the point A.\">position vector</dfn> <span class=\"chem\">OA = a = a_1 i + a_2 j + a_3 k</span>. The displacement vector from <span class=\"chem\">A</span> to <span class=\"chem\">B</span> is always <strong>“head minus tail”</strong>: <span class=\"chem\">AB = OB - OA = b - a</span>.": "3D 空間中的點 <span class=\"chem\">A(a_1, a_2, a_3)</span> 具有<dfn data-def=\"由原點 O(0, 0, 0) 指向點 A 的向量 OA。\">位置向量 <span class=\"en-term\">(position vector)</span></dfn><span class=\"chem\">OA = a = a_1 i + a_2 j + a_3 k</span>。由 <span class=\"chem\">A</span> 到 <span class=\"chem\">B</span> 的位移向量永遠是<strong>「終點減起點」</strong>：<span class=\"chem\">AB = OB - OA = b - a</span>。",

    // 3D vectors, unit vectors and the scalar (dot) product > data-def attribute
    "The vector OA from the origin O(0, 0, 0) to the point A.": "由原點 O(0, 0, 0) 指向點 A 的向量 OA。",

    // 3D vectors, unit vectors and the scalar (dot) product > equation > dd
    "unit vector of length 1 in the direction of <b>v</b>; a vector of speed <i>s</i> in direction <b>d</b> is <span class=\"chem\">s * (d / |d|)</span>": "與 <b>v</b> 同向且長度為 1 的單位向量；沿方向 <b>d</b>、速率為 <i>s</i> 的向量為 <span class=\"chem\">s * (d / |d|)</span>",

    // 3D vectors, unit vectors and the scalar (dot) product > equation > dd
    "scalar (dot) product (returns a single number, never a vector!)": "純量積（點積）（結果為單一數值，絕非向量！）",

    // 3D vectors, unit vectors and the scalar (dot) product > equation > dt
    "cos θ": "cos θ",

    // 3D vectors, unit vectors and the scalar (dot) product > equation > dd
    "<span class=\"chem\">cos theta = (v . w) / (|v||w|)</span>; for non-zero vectors, <span class=\"chem\">v . w = 0 &lt;=&gt; theta = 90°</span>": "<span class=\"chem\">cos theta = (v . w) / (|v||w|)</span>；對於非零向量，<span class=\"chem\">v . w = 0 &lt;=&gt; theta = 90°</span>",

    // 3D vectors, unit vectors and the scalar (dot) product > key idea > p
    "<strong>Key algebraic properties of the dot product:</strong> Because <span class=\"chem\">cos 0° = 1</span>, dotting any vector with itself gives the square of its magnitude: <span class=\"chem\">v . v = |v|^2</span>. Together with <span class=\"chem\">u . v = v . u</span> and distributivity, you can expand <span class=\"chem\">|u + v|^2 = (u + v) . (u + v) = |u|^2 + 2(u . v) + |v|^2</span> just like ordinary algebra!": "<strong>點積的重要代數性質：</strong>由於 <span class=\"chem\">cos 0° = 1</span>，任何向量與自身作點積等於其模的平方：<span class=\"chem\">v . v = |v|^2</span>。配合交換律 <span class=\"chem\">u . v = v . u</span> 與分配律，你可以像普通代數一樣展開 <span class=\"chem\">|u + v|^2 = (u + v) . (u + v) = |u|^2 + 2(u . v) + |v|^2</span>！",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > data-kicker attribute
    "Worked example 1 (AHL 3.13)": "例題 1（AHL 3.13）",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > h3
    "Using |u − v|² = (u − v) · (u − v) with unit vectors": "配合向量模長運用 |u − v|² = (u − v) · (u − v)",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > p
    "<strong>[Paper 1 — No GDC]</strong> Given that <span class=\"chem\">u</span> and <span class=\"chem\">v</span> are vectors with <span class=\"chem\">|u| = 3</span>, <span class=\"chem\">|v| = 4</span>, and <span class=\"chem\">|u - v| = sqrt(37)</span>, find the angle <span class=\"chem\">theta</span> between <span class=\"chem\">u</span> and <span class=\"chem\">v</span>. <strong>[4 marks]</strong>": "<strong>[Paper 1 — 不可用 GDC]</strong> 已知向量 <span class=\"chem\">u</span> 與 <span class=\"chem\">v</span> 滿足 <span class=\"chem\">|u| = 3</span>、<span class=\"chem\">|v| = 4</span> 及 <span class=\"chem\">|u - v| = sqrt(37)</span>，求 (find) <span class=\"chem\">u</span> 與 <span class=\"chem\">v</span> 之間的夾角 <span class=\"chem\">theta</span>。<strong>[4 marks]</strong>",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > data-title attribute
    "Square |u − v| using the dot product": "利用點積將 |u − v| 平方",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > p
    "Writing |u − v|² = (u − v) · (u − v) brings the dot product u · v into play.": "寫成 |u − v|² = (u − v) · (u − v) 可引入點積 u · v。",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > data-title attribute
    "Substitute the known magnitudes to find u · v": "代入已知模長以求 u · v",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > p
    "We know |u − v|² = 37, |u|² = 9, and |v|² = 16.": "已知 |u − v|² = 37、|u|² = 9 及 |v|² = 16。",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > data-title attribute
    "Use cos θ = (u · v) / (|u||v|)": "運用 cos θ = (u · v) / (|u||v|)",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > p
    "Substitute u · v = −6 and |u||v| = 12.": "代入 u · v = −6 與 |u||v| = 12。",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > maths line
    "cos <i>θ</i> = <span class=\"frac\"><span>−6</span><span>3 × 4</span></span> = −<span class=\"frac\"><span>1</span><span>2</span></span> ⇒ <i>θ</i> = <b><span class=\"frac\"><span>2<i>π</i></span><span>3</span></span></b> (or <b>120°</b>) <b>[M1 A1]</b>": "cos <i>θ</i> = <span class=\"frac\"><span>−6</span><span>3 × 4</span></span> = −<span class=\"frac\"><span>1</span><span>2</span></span> ⇒ <i>θ</i> = <b><span class=\"frac\"><span>2<i>π</i></span><span>3</span></span></b>（或 <b>120°</b>）<b>[M1 A1]</b>",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > p
    "<i>θ</i> = 2π/3 (or 120°)": "<i>θ</i> = 2π/3（或 120°）",

    // 3D vectors, unit vectors and the scalar (dot) product > try it > p
    "<strong>[Paper 1 — No GDC]</strong> Find the value of <span class=\"chem\">k</span> such that the vectors <span class=\"chem\">u = (3, -2, k)</span> and <span class=\"chem\">v = (2, 5, 2)</span> are perpendicular.": "<strong>[Paper 1 — 不可用 GDC]</strong> 求 (Find) <span class=\"chem\">k</span> 的值，使向量 <span class=\"chem\">u = (3, -2, k)</span> 與 <span class=\"chem\">v = (2, 5, 2)</span> 互相垂直。",

    // 3D vectors, unit vectors and the scalar (dot) product > try it > li
    "Two non-zero vectors are perpendicular if and only if their dot product is zero: <span class=\"chem\">u . v = 0</span>.": "兩個非零向量垂直，當且僅當它們的點積為零：<span class=\"chem\">u . v = 0</span>。",

    // 3D vectors, unit vectors and the scalar (dot) product > try it > li
    "Solve <span class=\"chem\">3(2) + (-2)(5) + k(2) = 0</span>.": "解 <span class=\"chem\">3(2) + (-2)(5) + k(2) = 0</span>。",

    // Equations of lines in 3D, kinematics and skew lines > data-toc attribute
    "3D lines, kinematics & skew lines": "3D 直線、運動學與異面直線",

    // Equations of lines in 3D, kinematics and skew lines > h2
    "Equations of lines in 3D, kinematics and skew lines": "3D 直線方程、運動學與異面直線",

    // Equations of lines in 3D, kinematics and skew lines > p
    "A straight line in 3D space is determined by a known point <span class=\"chem\">A(x_0, y_0, z_0)</span> with position vector <span class=\"chem\">a</span> and a non-zero direction vector <span class=\"chem\">b = (l, m, n)</span>:": "3D 空間中的一條直線由一個已知點 <span class=\"chem\">A(x_0, y_0, z_0)</span>（位置向量為 <span class=\"chem\">a</span>）及一個非零方向向量 <span class=\"chem\">b = (l, m, n)</span> 所決定：",

    // Equations of lines in 3D, kinematics and skew lines > equation > dd
    "position vector of any specific point on the line": "直線上任意指定一點的位置向量",

    // Equations of lines in 3D, kinematics and skew lines > equation > dd
    "direction vector parallel to the line (in kinematics, the velocity vector <b>v</b>)": "平行於直線的方向向量（在運動學中即速度向量 <b>v</b>）",

    // Equations of lines in 3D, kinematics and skew lines > equation > dt
    "λ (or t)": "λ（或 t）",

    // Equations of lines in 3D, kinematics and skew lines > equation > dd
    "real scalar parameter (<span class=\"chem\">lambda in R</span>); in kinematics, time <span class=\"chem\">t &gt;= 0</span>": "實純量參數（<span class=\"chem\">lambda in R</span>）；在運動學中為時間 <span class=\"chem\">t &gt;= 0</span>",

    // Equations of lines in 3D, kinematics and skew lines > common mistake > p
    "<strong>Reading the direction vector from a Cartesian line equation:</strong> Before reading off <span class=\"chem\">(x_0, y_0, z_0)</span> and <span class=\"chem\">(l, m, n)</span>, the coefficients of <span class=\"chem\">x, y, z</span> in the numerators <strong>must all be <span class=\"mono\">+1</span></strong>! For example, <span class=\"chem\">(2 - x)/3 = (2y - 4)/6 = z</span> must be rewritten as <span class=\"chem\">(x - 2)/(-3) = (y - 2)/3 = (z - 0)/1</span>, giving point <span class=\"chem\">(2, 2, 0)</span> and direction vector <span class=\"chem\">(-3, 3, 1)</span>.": "<strong>從直線的笛卡兒方程讀出方向向量：</strong>在讀出 <span class=\"chem\">(x_0, y_0, z_0)</span> 與 <span class=\"chem\">(l, m, n)</span> 之前，分子中 <span class=\"chem\">x, y, z</span> 的係數<strong>必須全部為 <span class=\"mono\">+1</span></strong>！例如，<span class=\"chem\">(2 - x)/3 = (2y - 4)/6 = z</span> 必須改寫為 <span class=\"chem\">(x - 2)/(-3) = (y - 2)/3 = (z - 0)/1</span>，從而得出點 <span class=\"chem\">(2, 2, 0)</span> 與方向向量 <span class=\"chem\">(-3, 3, 1)</span>。",

    // Equations of lines in 3D, kinematics and skew lines > h3
    "Classifying two lines in 3D space": "3D 空間中兩條直線的分類",

    // Equations of lines in 3D, kinematics and skew lines > p
    "Unlike lines in a 2D plane, two non-parallel lines in 3D space do not have to intersect—they can pass over and under each other like a bridge over a highway (<dfn data-def=\"Two lines in 3D space that are neither parallel nor intersecting; they do not lie in the same plane.\">skew lines</dfn>):": "與 2D 平面上的直線不同，3D 空間中兩條不平行的直線不一定相交——它們可以像天橋橫跨公路般上下錯開（<dfn data-def=\"3D 空間中既不平行亦不相交的兩條直線；它們不在同一平面內。\">異面直線 <span class=\"en-term\">(skew lines)</span></dfn>）：",

    // Equations of lines in 3D, kinematics and skew lines > data-def attribute
    "Two lines in 3D space that are neither parallel nor intersecting; they do not lie in the same plane.": "3D 空間中既不平行亦不相交的兩條直線；它們不在同一平面內。",

    // Equations of lines in 3D, kinematics and skew lines > li
    "<strong>Compare the direction vectors <span class=\"chem\">b_1</span> and <span class=\"chem\">b_2</span>:</strong> If <span class=\"chem\">b_1 = k*b_2</span>, the lines are parallel. Test if one line's starting point lies on the other line: if yes, they are <strong>coincident</strong> (the same line); if no, they are <strong>strictly parallel</strong>.": "<strong>比較方向向量 <span class=\"chem\">b_1</span> 與 <span class=\"chem\">b_2</span>：</strong>若 <span class=\"chem\">b_1 = k*b_2</span>，兩直線平行。檢驗其中一條直線的起點是否在另一條直線上：若是，則兩直線<strong>重合</strong>（同一條直線）；若否，則為<strong>嚴格平行</strong>。",

    // Equations of lines in 3D, kinematics and skew lines > li
    "<strong>If not parallel, equate coordinates using two distinct parameters <span class=\"chem\">lambda</span> and <span class=\"chem\">mu</span>:</strong> Solve the first two equations (<span class=\"chem\">x</span> and <span class=\"chem\">y</span>) for <span class=\"chem\">lambda</span> and <span class=\"chem\">mu</span>, then substitute into the third (<span class=\"chem\">z</span>) equation. If the third equation holds, the lines <strong>intersect</strong> at a unique point; if it fails, the lines are <strong>skew</strong>.": "<strong>若不平行，使用兩個不同參數 <span class=\"chem\">lambda</span> 與 <span class=\"chem\">mu</span> 令坐標相等：</strong>解首兩條方程（<span class=\"chem\">x</span> 與 <span class=\"chem\">y</span>）求出 <span class=\"chem\">lambda</span> 與 <span class=\"chem\">mu</span>，再代入第三條（<span class=\"chem\">z</span>）方程。若第三條方程成立，兩直線於唯一一點<strong>相交</strong>；若不成立，則兩直線為<strong>異面直線</strong>。",

    // Equations of lines in 3D, kinematics and skew lines > worked example > data-kicker attribute
    "Worked example 2 (AHL 3.14–3.15)": "例題 2（AHL 3.14–3.15）",

    // Equations of lines in 3D, kinematics and skew lines > worked example > h3
    "Finding the foot of the perpendicular and shortest distance from a point to a line": "求點到直線的垂足與最短距離",

    // Equations of lines in 3D, kinematics and skew lines > worked example > p
    "Consider the point <span class=\"chem\">P(1, 5, 1)</span> and the line <span class=\"chem\">L</span> with vector equation <span class=\"chem\">r = (2, 1, 0) + lambda(1, 2, 2)</span>.<br> (a) Find the coordinates of the point <span class=\"chem\">F</span> on <span class=\"chem\">L</span> that is closest to <span class=\"chem\">P</span>. <strong>[4 marks]</strong><br> (b) Hence find the shortest distance from <span class=\"chem\">P</span> to <span class=\"chem\">L</span>. <strong>[2 marks]</strong>": "考慮點 <span class=\"chem\">P(1, 5, 1)</span> 及向量方程為 <span class=\"chem\">r = (2, 1, 0) + lambda(1, 2, 2)</span> 的直線 <span class=\"chem\">L</span>。<br> (a) 求 (Find) <span class=\"chem\">L</span> 上最接近 <span class=\"chem\">P</span> 的點 <span class=\"chem\">F</span> 之坐標。<strong>[4 marks]</strong><br> (b) 由此求 (Hence find) <span class=\"chem\">P</span> 到 <span class=\"chem\">L</span> 的最短距離。<strong>[2 marks]</strong>",

    // Equations of lines in 3D, kinematics and skew lines > worked example > data-title attribute
    "Write the displacement vector PF in terms of λ": "以 λ 表示位移向量 PF",

    // Equations of lines in 3D, kinematics and skew lines > worked example > p
    "Any point F on L has coordinates (2 + λ, 1 + 2λ, 2λ), so PF = OF − OP.": "L 上任意一點 F 的坐標為 (2 + λ, 1 + 2λ, 2λ)，因此 PF = OF − OP。",

    // Equations of lines in 3D, kinematics and skew lines > worked example > data-title attribute
    "Use PF · b = 0 at the closest point": "在最接近點處運用 PF · b = 0",

    // Equations of lines in 3D, kinematics and skew lines > worked example > p
    "The shortest segment PF is perpendicular to the line's direction vector b = (1, 2, 2).": "最短線段 PF 垂直於直線的方向向量 b = (1, 2, 2)。",

    // Equations of lines in 3D, kinematics and skew lines > worked example > data-title attribute
    "Substitute λ = 1 to find F and |PF|": "代入 λ = 1 以求 F 與 |PF|",

    // Equations of lines in 3D, kinematics and skew lines > worked example > p
    "Plug λ = 1 into OF = (2 + λ, 1 + 2λ, 2λ) and PF = (1 + λ, 2λ − 4, 2λ − 1).": "將 λ = 1 代入 OF = (2 + λ, 1 + 2λ, 2λ) 與 PF = (1 + λ, 2λ − 4, 2λ − 1)。",

    // Equations of lines in 3D, kinematics and skew lines > try it > p
    "Find the shortest distance from the point <span class=\"chem\">P(0, 4, 2)</span> to the line <span class=\"chem\">r = (1, 0, 1) + lambda(1, 2, 2)</span>.": "求 (Find) 點 <span class=\"chem\">P(0, 4, 2)</span> 到直線 <span class=\"chem\">r = (1, 0, 1) + lambda(1, 2, 2)</span> 的最短距離。",

    // Equations of lines in 3D, kinematics and skew lines > try it > li
    "Write <span class=\"chem\">PF = (1 + lambda, 2*lambda - 4, 2*lambda - 1)</span> and set <span class=\"chem\">PF . (1, 2, 2) = 0</span>.": "寫出 <span class=\"chem\">PF = (1 + lambda, 2*lambda - 4, 2*lambda - 1)</span> 並令 <span class=\"chem\">PF . (1, 2, 2) = 0</span>。",

    // Equations of lines in 3D, kinematics and skew lines > try it > li
    "You will find <span class=\"chem\">9*lambda - 9 = 0 =&gt; lambda = 1</span>, giving <span class=\"chem\">PF = (2, -2, 1)</span>.": "你會得出 <span class=\"chem\">9*lambda - 9 = 0 =&gt; lambda = 1</span>，從而得 <span class=\"chem\">PF = (2, -2, 1)</span>。",

    // The vector (cross) product, areas and planes in 3D space > data-toc attribute
    "Cross product & 3D planes": "叉積與 3D 平面",

    // The vector (cross) product, areas and planes in 3D space > h2
    "The vector (cross) product, areas and planes in 3D space": "向量積（叉積）、面積與 3D 平面",

    // The vector (cross) product, areas and planes in 3D space > p
    "Whereas the dot product of two vectors is a scalar, the <dfn data-def=\"A binary operation on two 3D vectors v and w that produces a vector v × w perpendicular to both v and w, with magnitude |v||w| sin θ.\">vector (cross) product</dfn> <span class=\"chem\">v x w</span> returns a <strong>3D vector that is perpendicular to both <span class=\"chem\">v</span> and <span class=\"chem\">w</span></strong>.": "兩向量的點積是一個純量，而<dfn data-def=\"對兩個 3D 向量 v 與 w 進行的二元運算，產生同時垂直於 v 與 w 的向量 v × w，其模長為 |v||w| sin θ。\">向量積（叉積） <span class=\"en-term\">(vector (cross) product)</span></dfn><span class=\"chem\">v x w</span> 則得出一個<strong>同時垂直於 <span class=\"chem\">v</span> 與 <span class=\"chem\">w</span> 的 3D 向量</strong>。",

    // The vector (cross) product, areas and planes in 3D space > data-def attribute
    "A binary operation on two 3D vectors v and w that produces a vector v × w perpendicular to both v and w, with magnitude |v||w| sin θ.": "對兩個 3D 向量 v 與 w 進行的二元運算，產生同時垂直於 v 與 w 的向量 v × w，其模長為 |v||w| sin θ。",

    // The vector (cross) product, areas and planes in 3D space > equation > dt
    "Area of parallelogram": "平行四邊形面積",

    // The vector (cross) product, areas and planes in 3D space > equation > dd
    "<span class=\"chem\">A = |v x w|</span> where <span class=\"chem\">v, w</span> are adjacent sides": "<span class=\"chem\">A = |v x w|</span>，其中 <span class=\"chem\">v, w</span> 為鄰邊",

    // The vector (cross) product, areas and planes in 3D space > equation > dt
    "Area of triangle ABC": "三角形 ABC 面積",

    // The vector (cross) product, areas and planes in 3D space > equation > dd
    "<span class=\"chem\">A = (1/2)|AB x AC|</span>": "<span class=\"chem\">A = (1/2)|AB x AC|</span>",

    // The vector (cross) product, areas and planes in 3D space > equation > dt
    "Plane equations": "平面方程",

    // The vector (cross) product, areas and planes in 3D space > equation > dd
    "<span class=\"chem\">r = a + lambda*b + mu*c</span> &nbsp;⇔&nbsp; <span class=\"chem\">r . n = a . n</span> &nbsp;⇔&nbsp; <span class=\"chem\">n_1 x + n_2 y + n_3 z = d</span>": "<span class=\"chem\">r = a + lambda*b + mu*c</span> &nbsp;⇔&nbsp; <span class=\"chem\">r . n = a . n</span> &nbsp;⇔&nbsp; <span class=\"chem\">n_1 x + n_2 y + n_3 z = d</span>",

    // The vector (cross) product, areas and planes in 3D space > widget > data-title attribute
    "Interactive 3D Dot & Cross Product Visualizer": "互動 3D 點積與叉積視覺化工具",

    // The vector (cross) product, areas and planes in 3D space > widget > figcaption
    "Drag to rotate the 3D axes or adjust the components of vectors <b>u</b> and <b>v</b>. Observe how the cross product <b>u</b> × <b>v</b> (violet) is always perpendicular to the shaded parallelogram spanned by <b>u</b> and <b>v</b>, and its length equals the parallelogram's area |<b>u</b> × <b>v</b>|.": "拖動以旋轉 3D 坐標軸，或調校向量 <b>u</b> 與 <b>v</b> 的分量。觀察叉積 <b>u</b> × <b>v</b>（紫色）如何始終垂直於由 <b>u</b> 與 <b>v</b> 張成的陰影平行四邊形，且其長度等於該平行四邊形的面積 |<b>u</b> × <b>v</b>|。",

    // The vector (cross) product, areas and planes in 3D space > h3
    "Angles and intersections involving lines and planes (AHL 3.18)": "涉及直線與平面的交角與交點（AHL 3.18）",

    // The vector (cross) product, areas and planes in 3D space > p
    "A plane <span class=\"chem\">Pi</span> is uniquely defined by its <strong>normal vector</strong> <span class=\"chem\">n = (a, b, c)</span> perpendicular to the surface. Because <span class=\"chem\">n</span> stands at <span class=\"mono\">90°</span> to the plane, finding the acute angle <span class=\"chem\">phi</span> between a line (direction <span class=\"chem\">b</span>) and a plane (normal <span class=\"chem\">n</span>) uses <strong>sine</strong> instead of cosine:": "平面 <span class=\"chem\">Pi</span> 由垂直於其表面的<strong>法向量</strong> <span class=\"chem\">n = (a, b, c)</span> 唯一確定。由於 <span class=\"chem\">n</span> 與平面成 <span class=\"mono\">90°</span>，求直線（方向為 <span class=\"chem\">b</span>）與平面（法向量為 <span class=\"chem\">n</span>）之間的銳角 <span class=\"chem\">phi</span> 時須使用<strong>正弦</strong>而非餘弦：",

    // The vector (cross) product, areas and planes in 3D space > equation > maths line
    "sin <i>ϕ</i> = <span class=\"frac\"><span>|<b>b</b> · <b>n</b>|</span><span>|<b>b</b>||<b>n</b>|</span></span> &nbsp; (line and plane), &nbsp;&nbsp;&nbsp;&nbsp; cos <i>θ</i> = <span class=\"frac\"><span>|<b>n</b><sub>1</sub> · <b>n</b><sub>2</sub>|</span><span>|<b>n</b><sub>1</sub>||<b>n</b><sub>2</sub>|</span></span> &nbsp; (two planes)": "sin <i>ϕ</i> = <span class=\"frac\"><span>|<b>b</b> · <b>n</b>|</span><span>|<b>b</b>||<b>n</b>|</span></span> &nbsp;（直線與平面），&nbsp;&nbsp;&nbsp;&nbsp; cos <i>θ</i> = <span class=\"frac\"><span>|<b>n</b><sub>1</sub> · <b>n</b><sub>2</sub>|</span><span>|<b>n</b><sub>1</sub>||<b>n</b><sub>2</sub>|</span></span> &nbsp;（兩平面）",

    // The vector (cross) product, areas and planes in 3D space > equation > dd
    "acute angle between line direction <b>b</b> and the plane (complement of the angle between <b>b</b> and <b>n</b>)": "直線方向 <b>b</b> 與平面之間的銳角（即 <b>b</b> 與 <b>n</b> 夾角的餘角）",

    // The vector (cross) product, areas and planes in 3D space > equation > dd
    "acute angle between two planes with normal vectors <b>n</b><sub>1</sub> and <b>n</b><sub>2</sub>": "法向量為 <b>n</b><sub>1</sub> 與 <b>n</b><sub>2</sub> 的兩平面之間的銳角",

    // The vector (cross) product, areas and planes in 3D space > widget > data-title attribute
    "3D Line-Plane Angle & Normal Vector Explorer": "3D 線面交角與法向量探索器",

    // The vector (cross) product, areas and planes in 3D space > widget > figcaption
    "Adjust the tilt of the line direction vector <b>b</b>. Notice that the dot product <b>b</b> · <b>n</b> gives the angle 90° − ϕ with the vertical normal <b>n</b>, so the angle ϕ with the plane itself satisfies sin ϕ = |<b>b</b> · <b>n</b>| / (|<b>b</b>||<b>n</b>|).": "調校直線方向向量 <b>b</b> 的傾斜度。留意點積 <b>b</b> · <b>n</b> 給出與鉛垂法向量 <b>n</b> 的夾角 90° − ϕ，因此直線與平面本身的交角 ϕ 滿足 sin ϕ = |<b>b</b> · <b>n</b>| / (|<b>b</b>||<b>n</b>|)。",

    // The vector (cross) product, areas and planes in 3D space > worked example > data-kicker attribute
    "Worked example 3 (AHL 3.16–3.18)": "例題 3（AHL 3.16–3.18）",

    // The vector (cross) product, areas and planes in 3D space > worked example > h3
    "Cartesian equation of a plane through three points and intersection with a line": "通過三點的平面笛卡兒方程及其與直線的交點",

    // The vector (cross) product, areas and planes in 3D space > worked example > p
    "Points <span class=\"chem\">A(1, 0, 2)</span>, <span class=\"chem\">B(2, 3, 1)</span>, and <span class=\"chem\">C(0, 1, 4)</span> lie on a plane <span class=\"chem\">Pi</span>.<br> (a) Find the area of triangle <span class=\"chem\">ABC</span>, and find the Cartesian equation of the plane <span class=\"chem\">Pi</span>. <strong>[5 marks]</strong><br> (b) Find the coordinates of the point where the line <span class=\"chem\">L: r = (1, 5, 0) + lambda(1, -1, 1)</span> intersects <span class=\"chem\">Pi</span>, and find the acute angle between <span class=\"chem\">L</span> and <span class=\"chem\">Pi</span>. <strong>[5 marks]</strong>": "點 <span class=\"chem\">A(1, 0, 2)</span>、<span class=\"chem\">B(2, 3, 1)</span> 與 <span class=\"chem\">C(0, 1, 4)</span> 位於平面 <span class=\"chem\">Pi</span> 上。<br> (a) 求 (Find) 三角形 <span class=\"chem\">ABC</span> 的面積，並求平面 <span class=\"chem\">Pi</span> 的笛卡兒方程。<strong>[5 marks]</strong><br> (b) 求 (Find) 直線 <span class=\"chem\">L: r = (1, 5, 0) + lambda(1, -1, 1)</span> 與 <span class=\"chem\">Pi</span> 的交點坐標，並求 <span class=\"chem\">L</span> 與 <span class=\"chem\">Pi</span> 之間的銳角。<strong>[5 marks]</strong>",

    // The vector (cross) product, areas and planes in 3D space > worked example > data-title attribute
    "Form two in-plane vectors AB and AC and compute their cross product": "構造平面內兩個向量 AB 與 AC 並計算其叉積",

    // The vector (cross) product, areas and planes in 3D space > worked example > p
    "AB × AC gives a normal vector n perpendicular to the plane, and half its magnitude is the area of ΔABC.": "AB × AC 給出垂直於平面的法向量 n，其模長的一半即為 ΔABC 的面積。",

    // The vector (cross) product, areas and planes in 3D space > worked example > data-title attribute
    "Compute Area(ΔABC) and substitute point A(1, 0, 2) into r · n = a · n": "計算 ΔABC 的面積並將點 A(1, 0, 2) 代入 r · n = a · n",

    // The vector (cross) product, areas and planes in 3D space > worked example > p
    "Since |n| = √(49 + 1 + 16) = √66, Area = ½√66.": "由於 |n| = √(49 + 1 + 16) = √66，面積 = ½√66。",

    // The vector (cross) product, areas and planes in 3D space > worked example > maths line
    "Area = <span class=\"frac\"><span>1</span><span>2</span></span>|<b>AB</b> × <b>AC</b>| = <b><span class=\"frac\"><span>√66</span><span>2</span></span></b> (≈ 4.06), &nbsp;&nbsp; 7<i>x</i> − <i>y</i> + 4<i>z</i> = 7(1) − 0 + 4(2) = <b>15</b> <b>[A1 A1]</b>": "面積 = <span class=\"frac\"><span>1</span><span>2</span></span>|<b>AB</b> × <b>AC</b>| = <b><span class=\"frac\"><span>√66</span><span>2</span></span></b>（≈ 4.06），&nbsp;&nbsp; 7<i>x</i> − <i>y</i> + 4<i>z</i> = 7(1) − 0 + 4(2) = <b>15</b> <b>[A1 A1]</b>",

    // The vector (cross) product, areas and planes in 3D space > worked example > data-title attribute
    "Substitute the parametric coordinates of L into 7x − y + 4z = 15": "將 L 的參數坐標代入 7x − y + 4z = 15",

    // The vector (cross) product, areas and planes in 3D space > worked example > p
    "On L, x = 1 + λ, y = 5 − λ, z = λ.": "在 L 上，x = 1 + λ，y = 5 − λ，z = λ。",

    // The vector (cross) product, areas and planes in 3D space > worked example > maths line
    "Intersection point = (<b><span class=\"frac\"><span>25</span><span>12</span></span>, <span class=\"frac\"><span>47</span><span>12</span></span>, <span class=\"frac\"><span>13</span><span>12</span></span></b>) <b>[A1]</b>": "交點 = (<b><span class=\"frac\"><span>25</span><span>12</span></span>, <span class=\"frac\"><span>47</span><span>12</span></span>, <span class=\"frac\"><span>13</span><span>12</span></span></b>) <b>[A1]</b>",

    // The vector (cross) product, areas and planes in 3D space > worked example > data-title attribute
    "Use sin ϕ = |b · n| / (|b||n|) for the line-plane angle": "運用 sin ϕ = |b · n| / (|b||n|) 求線面交角",

    // The vector (cross) product, areas and planes in 3D space > worked example > p
    "Here b = (1, −1, 1) with |b| = √3 and n = (7, −1, 4) with |n| = √66.": "這裏 b = (1, −1, 1) 且 |b| = √3，n = (7, −1, 4) 且 |n| = √66。",

    // The vector (cross) product, areas and planes in 3D space > worked example > maths line
    "sin <i>ϕ</i> = <span class=\"frac\"><span>|1(7) + (−1)(−1) + 1(4)|</span><span>√3 √66</span></span> = <span class=\"frac\"><span>12</span><span>3√22</span></span> = <span class=\"frac\"><span>4</span><span>√22</span></span> ≈ 0.8528 ⇒ <i>ϕ</i> ≈ <b>58.5°</b> (or 1.02 rad) <b>[M1 A1]</b>": "sin <i>ϕ</i> = <span class=\"frac\"><span>|1(7) + (−1)(−1) + 1(4)|</span><span>√3 √66</span></span> = <span class=\"frac\"><span>12</span><span>3√22</span></span> = <span class=\"frac\"><span>4</span><span>√22</span></span> ≈ 0.8528 ⇒ <i>ϕ</i> ≈ <b>58.5°</b>（或 1.02 rad）<b>[M1 A1]</b>",

    // The vector (cross) product, areas and planes in 3D space > worked example > p
    "(a) Area = √66 / 2, plane: 7<i>x</i> − <i>y</i> + 4<i>z</i> = 15; (b) (25/12, 47/12, 13/12), ϕ ≈ 58.5°": "(a) 面積 = √66 / 2，平面：7<i>x</i> − <i>y</i> + 4<i>z</i> = 15；(b) (25/12, 47/12, 13/12)，ϕ ≈ 58.5°",

    // The vector (cross) product, areas and planes in 3D space > not needed for IB > p
    "<strong>Not required in IB Math AA HL:</strong> The scalar triple product <span class=\"chem\">a . (b x c)</span> for the volume of a parallelepiped and the vector triple product <span class=\"chem\">a x (b x c)</span> are outside the 2021–2028 syllabus (unless defined for you in a Paper 3 problem).": "<strong>IB Math AA HL 不要求的內容：</strong>用於計算平行六面體體積的純量三重積 <span class=\"chem\">a . (b x c)</span> 及向量三重積 <span class=\"chem\">a x (b x c)</span> 均不在 2021–2028 課程大綱內（除非在 Paper 3 題目中為你定義）。",

    // The vector (cross) product, areas and planes in 3D space > try it > p
    "Find the exact area of triangle <span class=\"chem\">OAB</span> where <span class=\"chem\">O(0, 0, 0)</span> is the origin, <span class=\"chem\">A(1, 2, 2)</span>, and <span class=\"chem\">B(2, 1, -2)</span>.": "求 (Find) 三角形 <span class=\"chem\">OAB</span> 的準確面積，其中 <span class=\"chem\">O(0, 0, 0)</span> 為原點，<span class=\"chem\">A(1, 2, 2)</span> 及 <span class=\"chem\">B(2, 1, -2)</span>。",

    // The vector (cross) product, areas and planes in 3D space > try it > li
    "Compute the cross product <span class=\"chem\">OA x OB = (1, 2, 2) x (2, 1, -2) = (-6, 6, -3)</span>.": "計算叉積 <span class=\"chem\">OA x OB = (1, 2, 2) x (2, 1, -2) = (-6, 6, -3)</span>。",

    // The vector (cross) product, areas and planes in 3D space > try it > li
    "The area of triangle <span class=\"chem\">OAB</span> is <span class=\"chem\">(1/2)|OA x OB| = (1/2)sqrt((-6)^2 + 6^2 + (-3)^2)</span>.": "三角形 <span class=\"chem\">OAB</span> 的面積為 <span class=\"chem\">(1/2)|OA x OB| = (1/2)sqrt((-6)^2 + 6^2 + (-3)^2)</span>。",

    // The vector (cross) product, areas and planes in 3D space > try it > maths line
    "<b>OA</b> × <b>OB</b> = (−6, 6, −3) ⇒ Area = <span class=\"frac\"><span>1</span><span>2</span></span>√(36 + 36 + 9) = <span class=\"frac\"><span>9</span><span>2</span></span> = <b>4.5</b>": "<b>OA</b> × <b>OB</b> = (−6, 6, −3) ⇒ 面積 = <span class=\"frac\"><span>1</span><span>2</span></span>√(36 + 36 + 9) = <span class=\"frac\"><span>9</span><span>2</span></span> = <b>4.5</b>",

    // Exam-style practice > data-toc attribute
    // Exam-style practice > h2
    "Exam-style practice": "考試題型練習",

    // Exam-style practice > p
    "Three sets of original AHL vector questions spanning dot products, 3D lines, kinematics, skew lines, cross products, and planes.": "三組原創 AHL 向量題目，涵蓋點積、3D 直線、運動學、異面直線、叉積與平面。",

    // Exam-style practice > h3
    "Foundation: vector operations, dot and cross products": "基礎：向量運算、點積與叉積",

    // Exam-style practice > data-title attribute
    "3.3 foundation": "3.3 基礎練習",

    // Exam-style practice > h3
    "Exam standard: Paper 1 and Paper 2": "考試標準：Paper 1 與 Paper 2",

    // Exam-style practice > data-title attribute
    "3.3 exam standard": "3.3 考試標準",

    // Exam-style practice > h3
    "Challenge: level 7 3D lines and planes": "挑戰：7 級 3D 直線與平面",

    // Exam-style practice > data-title attribute
    "3.3 challenge": "3.3 挑戰題",

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
    "Perpendicular": "垂直",

    // widget string (assets/js/widgets-t3-3.js)
    "Parallel (u × v = 0)": "平行 (u × v = 0)",

    // widget string (assets/js/widgets-t3-3.js)
    "General 3D": "一般 3D",

    // widget string (assets/js/widgets-t3-3.js)
    "Dot product u · v": "點積 u · v",

    // widget string (assets/js/widgets-t3-3.js)
    "Cross product u × v": "叉積 u × v",

    // widget string (assets/js/widgets-t3-3.js)
    "Parallelogram area |u × v|": "平行四邊形面積 |u × v|",

    // widget string (assets/js/widgets-t3-3.js)
    "Angle θ": "夾角 θ",

    // widget string (assets/js/widgets-t3-3.js)
    "3D vectors u, v, parallelogram area, and cross product u × v": "3D 向量 u、v、平行四邊形面積與叉積 u × v",

    // widget string (assets/js/widgets-t3-3.js)
    "Line–plane angle ϕ": "線面交角 ϕ",

    // widget string (assets/js/widgets-t3-3.js)
    "Azimuth α": "方位角 α",

    // widget string (assets/js/widgets-t3-3.js)
    "Plane tilt": "平面傾角",

    // widget string (assets/js/widgets-t3-3.js)
    "Angle ϕ (line–plane)": "交角 ϕ（線與平面）",

    // widget string (assets/js/widgets-t3-3.js)
    "Angle 90° − ϕ (b to n)": "交角 90° − ϕ（b 與 n）",

    // widget string (assets/js/widgets-t3-3.js)
    "sin ϕ = |b · n| / (|b||n|)": "sin ϕ = |b · n| / (|b||n|)",

    // widget string (assets/js/widgets-t3-3.js)
    "Unit normal n": "單位法向量 n",

    // widget string (assets/js/widgets-t3-3.js)
    "3D line intersecting a plane with normal vector n": "與法向量為 n 的平面相交之 3D 直線",

  }
});
