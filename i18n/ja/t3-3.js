/* t3-3 — ja translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't3-3', {
  strings: {

    // page title (browser tab)
    "3.3 Vectors, lines and planes in 3D space | Analysis Lab": "3.3 3D 空間のベクトル・直線と平面 | Analysis Lab",

    // Vectors, lines and planes in 3D space > page header > p
    "Topic 3.3 · Additional HL · AHL 3.12–3.18": "Topic 3.3 · Additional HL · AHL 3.12–3.18",

    // Vectors, lines and planes in 3D space > page header > h1
    "Vectors, lines and planes in 3D space": "3D 空間のベクトル・直線と平面",

    // Vectors, lines and planes in 3D space > page header > span
    "How do the dot product and cross product let us turn any 3D geometric question about angles, distances, lines, and planes into clean algebra?": "内積と外積を使うと、3D 空間における角度・距離・直線・平面のあらゆる図形問題をどのようにきれいな代数計算へ変換できるのでしょうか？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "チェックリスト",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > p
    "This entire topic is <strong>Additional Higher Level (AHL 3.12–3.18)</strong>. Tick each item once you can solve it without checking your notes.": "このトピック全体が <strong>Additional Higher Level (AHL 3.12–3.18)</strong> です。ノートを見ずに解けるようになったらチェックを入れましょう。",

    // What you need to be able to do > p
    "<strong>Before you start:</strong> you need 3D coordinates, distances and midpoints from <a href=\"t3-1.html\">3.1 3D geometry, triangle trigonometry and radians</a>. For the three-plane systems in AHL 3.18 you use the elimination method from <a href=\"t1-5.html\">1.5 Mathematical proof and systems of linear equations</a>.": "<strong>始める前に：</strong><a href=\"t3-1.html\">3.1 3D 幾何学・三角形の三角比と弧度法</a> の 3D 座標・距離・中点が必要です。AHL 3.18 の 3 平面の連立方程式では、<a href=\"t1-5.html\">1.5 数学的証明と連立一次方程式</a> の消去法を使います。",

    // What you need to be able to do > checklist > Additional HL > span
    "Find displacement vectors <span class=\"chem\">AB = b - a</span>, magnitudes <span class=\"chem\">|v|</span>, unit vectors <span class=\"chem\">v / |v|</span>, and rescale a direction vector to a given speed.": "変位ベクトル <span class=\"chem\">AB = b - a</span>、ベクトルの大きさ <span class=\"chem\">|v|</span>、単位ベクトル <span class=\"chem\">v / |v|</span> を求め、方向ベクトルを指定された速さにスケーリングできる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Compute the scalar (dot) product <span class=\"chem\">v \\cdot w = |v||w| cos theta</span>, find the angle between two vectors, and test for perpendicularity (<span class=\"chem\">v \\cdot w = 0</span>).": "内積（スカラー積）<span class=\"chem\">v \\cdot w = |v||w| cos theta</span> を計算し、2 つのベクトルのなす角を求め、垂直条件（<span class=\"chem\">v \\cdot w = 0</span>）を判定できる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Write vector (<span class=\"chem\">r = a + lambda*b</span>), parametric, and Cartesian equations of a 3D line, and model constant-velocity motion <span class=\"chem\">r(t) = r_0 + t*v</span>.": "3D 直線のベクトル方程式（<span class=\"chem\">r = a + lambda*b</span>）・媒介変数表示・直交座標方程式を書き、等速直線運動 <span class=\"chem\">r(t) = r_0 + t*v</span> をモデル化できる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Classify a pair of 3D lines as parallel, coincident, intersecting, or skew, and find the shortest distance from a point to a line.": "3D 空間の 2 直線を平行・一致・交わる・ねじれの位置に分類し、点と直線の最短距離を求められる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Compute the vector (cross) product <span class=\"chem\">v \\times w</span> to find a common perpendicular (normal) vector and calculate the area of a parallelogram <span class=\"chem\">|v \\times w|</span> or triangle <span class=\"chem\">(1/2)|v \\times w|</span>.": "外積（ベクトル積）<span class=\"chem\">v \\times w</span> を計算して共通の垂直（法線）ベクトルを求め、平行四辺形の面積 <span class=\"chem\">|v \\times w|</span> や三角形の面積 <span class=\"chem\">(1/2)|v \\times w|</span> を計算できる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Convert between vector (<span class=\"chem\">r = a + lambda*b + mu*c</span>), normal (<span class=\"chem\">r \\cdot n = a \\cdot n</span>), and Cartesian (<span class=\"chem\">ax + by + cz = d</span>) equations of a plane.": "平面のベクトル方程式（<span class=\"chem\">r = a + lambda*b + mu*c</span>）、法線形式（<span class=\"chem\">r \\cdot n = a \\cdot n</span>）、直交座標方程式（<span class=\"chem\">ax + by + cz = d</span>）を相互に変換できる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Find intersections and acute angles between a line and a plane (<span class=\"chem\">sin phi = |b \\cdot n| / (|b||n|)</span>) and between two or three planes.": "直線と平面の交点やなす鋭角（<span class=\"chem\">sin phi = |b \\cdot n| / (|b||n|)</span>）、および 2 平面・3 平面の交線・交点やなす角を求められる。",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "問題デコーダー",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "問題デコーダー：使うべき解法を見抜く",

    // Question decoder: spotting which technique to use > p
    "Vector geometry in Paper 1, Paper 2, and Paper 3 is one of the highest-weighted AHL topics. Use this decoder to translate every standard IB exam prompt into the exact algebraic step.": "ベクトル幾何学は Paper 1、Paper 2、Paper 3 において最も配点比重の高い AHL トピックの 1 つです。このデコーダーを使って、IB 試験の定型フレーズを正確な代数手順に変換しましょう。",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — 3D vectors, lines and planes (AHL 3.12–3.18)": "問題デコーダー — 3D ベクトル・直線と平面 (AHL 3.12–3.18)",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "試験問題に書かれている表現",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "数学的な意味（公式と立式）",

    // Question decoder: spotting which technique to use > table > th
    "Crucial exam trap to avoid": "避けるべき試験の罠",

    // Question decoder: spotting which technique to use > table > th
    "“Show that <span class=\"chem\">u</span> and <span class=\"chem\">v</span> are perpendicular” or “Find <span class=\"chem\">k</span> given perpendicularity”": "「<span class=\"chem\">u</span> と <span class=\"chem\">v</span> が垂直であることを示せ」 / 「垂直であるときの <span class=\"chem\">k</span> を求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "Compute the <strong>dot product</strong> and set it equal to zero: <span class=\"chem\">u \\cdot v = u_1 v_1 + u_2 v_2 + u_3 v_3 = 0</span>.": "<strong>内積</strong>を計算して 0 とおきます：<span class=\"chem\">u \\cdot v = u_1 v_1 + u_2 v_2 + u_3 v_3 = 0</span>。",

    // Question decoder: spotting which technique to use > table > td
    "When finding the interior angle <span class=\"chem\">angle ABC</span> of a triangle, both vectors must point <strong>away from vertex <span class=\"chem\">B</span></strong>: use <span class=\"chem\">BA \\cdot BC</span>, not <span class=\"chem\">AB \\cdot BC</span>!": "三角形の内角 <span class=\"chem\">angle ABC</span> を求めるときは、両方のベクトルが<strong>頂点 <span class=\"chem\">B</span> から外向き</strong>でなければなりません：<span class=\"chem\">AB \\cdot BC</span> ではなく <span class=\"chem\">BA \\cdot BC</span> を使いましょう！",

    // Question decoder: spotting which technique to use > table > th
    "“Find a vector perpendicular to both <span class=\"chem\">u</span> and <span class=\"chem\">v</span>” or “Find the normal <span class=\"chem\">n</span> to plane <span class=\"chem\">ABC</span>”": "「<span class=\"chem\">u</span> と <span class=\"chem\">v</span> の両方に垂直なベクトルを求めよ」 / 「平面 <span class=\"chem\">ABC</span> の法線 <span class=\"chem\">n</span> を求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "Compute the <strong>cross product</strong>: <span class=\"chem\">n = u \\times v</span> (or <span class=\"chem\">AB \\times AC</span>).": "<strong>外積</strong>を計算します：<span class=\"chem\">n = u \\times v</span>（または <span class=\"chem\">AB \\times AC</span>）。",

    // Question decoder: spotting which technique to use > table > td
    "Watch the minus sign on the middle (<span class=\"chem\">y</span> / <span class=\"chem\">j</span>) component: <span class=\"chem\">n_2 = u_3 v_1 - u_1 v_3</span>. Always check <span class=\"chem\">n \\cdot u = 0</span> and <span class=\"chem\">n \\cdot v = 0</span>!": "真ん中（<span class=\"chem\">y</span> / <span class=\"chem\">j</span>）成分のマイナス符号に注意しましょう：<span class=\"chem\">n_2 = u_3 v_1 - u_1 v_3</span>。必ず <span class=\"chem\">n \\cdot u = 0</span> と <span class=\"chem\">n \\cdot v = 0</span> を検算しましょう！",

    // Question decoder: spotting which technique to use > table > th
    "“Find the shortest distance from point <span class=\"chem\">P</span> to line <span class=\"chem\">L: r = a + lambda*b</span>”": "「点 <span class=\"chem\">P</span> から直線 <span class=\"chem\">L: r = a + lambda*b</span> までの最短距離を求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Method 1 (Foot of perpendicular <span class=\"chem\">F</span>)</strong>: Write <span class=\"chem\">PF = a + lambda*b - p</span>, solve <span class=\"chem\">PF \\cdot b = 0</span> for <span class=\"chem\">lambda</span>, then compute <span class=\"chem\">|PF|</span>.<br><strong>Method 2 (Cross product area)</strong>: <span class=\"chem\">d = |AP \\times b| / |b|</span>.": "<strong>解法 1（垂線の足 <span class=\"chem\">F</span>）</strong>：<span class=\"chem\">PF = a + lambda*b - p</span> と書き、<span class=\"chem\">PF \\cdot b = 0</span> を <span class=\"chem\">lambda</span> について解いてから <span class=\"chem\">|PF|</span> を計算します。<br><strong>解法 2（外積の面積）</strong>：<span class=\"chem\">d = |AP \\times b| / |b|</span>。",

    // Question decoder: spotting which technique to use > table > td
    "Use Method 1 whenever the next part asks for the <strong>coordinates of the foot <span class=\"chem\">F</span></strong> or the reflection of <span class=\"chem\">P</span> in <span class=\"chem\">L</span>!": "次の小問で<strong>垂線の足 <span class=\"chem\">F</span> の座標</strong>や <span class=\"chem\">L</span> に関する <span class=\"chem\">P</span> の対称点を問われる場合は、必ず解法 1 を使いましょう！",

    // Question decoder: spotting which technique to use > table > th
    "“Show that lines <span class=\"chem\">L_1</span> and <span class=\"chem\">L_2</span> are <strong>skew</strong>”": "「2 直線 <span class=\"chem\">L_1</span> と <span class=\"chem\">L_2</span> が<strong>ねじれの位置にある</strong>ことを示せ」",

    // Question decoder: spotting which technique to use > table > td
    "1. Show direction vectors are not scalar multiples (<span class=\"chem\">b_1 != k*b_2</span>, so not parallel).<br>2. Equate <span class=\"chem\">x</span> and <span class=\"chem\">y</span> using <strong>different parameters <span class=\"chem\">lambda</span> and <span class=\"chem\">mu</span></strong>, solve for <span class=\"chem\">(lambda, mu)</span>, and show they fail the <span class=\"chem\">z</span>-equation.": "1. 方向ベクトルがスカラー倍でないこと（<span class=\"chem\">b_1 != k*b_2</span> より平行でない）を示します。<br>2. <strong>異なる媒介変数 <span class=\"chem\">lambda</span> と <span class=\"chem\">mu</span></strong> を使って <span class=\"chem\">x</span> と <span class=\"chem\">y</span> を等置し、<span class=\"chem\">(lambda, mu)</span> を求めて <span class=\"chem\">z</span> の式を満たさないことを示します。",

    // Question decoder: spotting which technique to use > table > td
    "In kinematics, two paths can intersect at a point <span class=\"chem\">P</span> without the objects colliding! They <strong>collide</strong> only if <span class=\"chem\">t_1 = t_2</span> at <span class=\"chem\">P</span>.": "運動学では、2 つの軌道が点 <span class=\"chem\">P</span> で交わっても物体が衝突するとは限りません！<strong>衝突する</strong>のは点 <span class=\"chem\">P</span> で <span class=\"chem\">t_1 = t_2</span> となるときだけです。",

    // Question decoder: spotting which technique to use > table > th
    "Compare: Angle between two lines vs two planes vs <strong>a line and a plane</strong>": "比較：2 直線のなす角 vs 2 平面のなす角 vs <strong>直線と平面のなす角</strong>",

    // Question decoder: spotting which technique to use > table > td
    "• Two lines (<span class=\"chem\">b_1, b_2</span>): <span class=\"chem\">cos theta = |b_1 \\cdot b_2| / (|b_1||b_2|)</span><br>• Two planes (<span class=\"chem\">n_1, n_2</span>): <span class=\"chem\">cos theta = |n_1 \\cdot n_2| / (|n_1||n_2|)</span><br>• <strong>Line (<span class=\"chem\">b</span>) and Plane (<span class=\"chem\">n</span>)</strong>: <strong><span class=\"chem\">sin phi = |b \\cdot n| / (|b||n|)</span></strong>!": "• 2 直線（<span class=\"chem\">b_1, b_2</span>）：<span class=\"chem\">cos theta = |b_1 \\cdot b_2| / (|b_1||b_2|)</span><br>• 2 平面（<span class=\"chem\">n_1, n_2</span>）：<span class=\"chem\">cos theta = |n_1 \\cdot n_2| / (|n_1||n_2|)</span><br>• <strong>直線（<span class=\"chem\">b</span>）と平面（<span class=\"chem\">n</span>）</strong>：<strong><span class=\"chem\">sin phi = |b \\cdot n| / (|b||n|)</span></strong>！",

    // Question decoder: spotting which technique to use > table > td
    "The normal <span class=\"chem\">n</span> is perpendicular (<span class=\"mono\">90°</span>) to the plane, so the angle between <span class=\"chem\">b</span> and <span class=\"chem\">n</span> is <span class=\"chem\">90° - phi</span>. That is why line-plane angle uses <strong><span class=\"chem\">sin phi</span></strong>!": "法線 <span class=\"chem\">n</span> は平面に垂直（<span class=\"mono\">90°</span>）なので、<span class=\"chem\">b</span> と <span class=\"chem\">n</span> のなす角は <span class=\"chem\">90° - phi</span> です。そのため直線と平面のなす角では <strong><span class=\"chem\">sin phi</span></strong> を使います！",

    // 3D vectors, unit vectors and the scalar (dot) product > data-toc attribute
    "Vectors & dot product": "ベクトルと内積",

    // 3D vectors, unit vectors and the scalar (dot) product > h2
    "3D vectors, unit vectors and the scalar (dot) product": "3D ベクトル・単位ベクトルと内積（スカラー積）",

    // 3D vectors, unit vectors and the scalar (dot) product > p
    "A point <span class=\"chem\">A(a_1, a_2, a_3)</span> in 3D space has <dfn data-def=\"The vector OA from the origin O(0, 0, 0) to the point A.\">position vector</dfn> <span class=\"chem\">OA = a = a_1 i + a_2 j + a_3 k</span>. The displacement vector from <span class=\"chem\">A</span> to <span class=\"chem\">B</span> is always <strong>“head minus tail”</strong>: <span class=\"chem\">AB = OB - OA = b - a</span>.": "3D 空間の点 <span class=\"chem\">A(a_1, a_2, a_3)</span> は<dfn data-def=\"原点 O(0, 0, 0) から点 A へのベクトル OA。\">位置ベクトル <span class=\"en-term\">(position vector)</span></dfn> <span class=\"chem\">OA = a = a_1 i + a_2 j + a_3 k</span> をもちます。<span class=\"chem\">A</span> から <span class=\"chem\">B</span> への変位ベクトルは常に<strong>「終点マイナス始点」</strong>です：<span class=\"chem\">AB = OB - OA = b - a</span>。",

    // 3D vectors, unit vectors and the scalar (dot) product > data-def attribute
    "The vector OA from the origin O(0, 0, 0) to the point A.": "原点 O(0, 0, 0) から点 A へのベクトル OA。",

    // 3D vectors, unit vectors and the scalar (dot) product > equation > dd
    "unit vector of length 1 in the direction of <b>v</b>; a vector of speed <i>s</i> in direction <b>d</b> is <span class=\"chem\">s * (d / |d|)</span>": "<b>v</b> の向きの長さ 1 の単位ベクトル；向き <b>d</b> で速さ <i>s</i> のベクトルは <span class=\"chem\">s * (d / |d|)</span>",

    // 3D vectors, unit vectors and the scalar (dot) product > equation > dd
    "scalar (dot) product (returns a single number, never a vector!)": "内積（スカラー積）（ベクトルではなく 1 つの実数を返す！）",

    // 3D vectors, unit vectors and the scalar (dot) product > equation > dt
    "cos θ": "cos θ",

    // 3D vectors, unit vectors and the scalar (dot) product > equation > dd
    "<span class=\"chem\">cos theta = (v \\cdot w) / (|v||w|)</span>; for non-zero vectors, <span class=\"chem\">v \\cdot w = 0 &lt;=&gt; theta = 90°</span>": "<span class=\"chem\">cos theta = (v \\cdot w) / (|v||w|)</span>；ゼロでないベクトルでは <span class=\"chem\">v \\cdot w = 0 &lt;=&gt; theta = 90°</span>",

    // 3D vectors, unit vectors and the scalar (dot) product > key idea > p
    "<strong>Key algebraic properties of the dot product:</strong> Because <span class=\"chem\">cos 0° = 1</span>, dotting any vector with itself gives the square of its magnitude: <span class=\"chem\">v \\cdot v = |v|^2</span>. Together with <span class=\"chem\">u \\cdot v = v \\cdot u</span> and distributivity, you can expand <span class=\"chem\">|u + v|^2 = (u + v) \\cdot (u + v) = |u|^2 + 2(u \\cdot v) + |v|^2</span> just like ordinary algebra!": "<strong>内積の重要な代数的性質：</strong> <span class=\"chem\">cos 0° = 1</span> なので、同じベクトルどうしの内積はその大きさの 2 乗になります：<span class=\"chem\">v \\cdot v = |v|^2</span>。<span class=\"chem\">u \\cdot v = v \\cdot u</span> と分配法則を合わせると、<span class=\"chem\">|u + v|^2 = (u + v) \\cdot (u + v) = |u|^2 + 2(u \\cdot v) + |v|^2</span> を普通の文字式と同じように展開できます！",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > data-kicker attribute
    "Worked example 1 (AHL 3.13)": "例題 1 (AHL 3.13)",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > h3
    "Using |u − v|² = (u − v) · (u − v) with given magnitudes": "|u − v|² = (u − v) · (u − v) を使ってなす角を求める",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > p
    "<strong>[Paper 1 — No GDC]</strong> Given that <span class=\"chem\">u</span> and <span class=\"chem\">v</span> are vectors with <span class=\"chem\">|u| = 3</span>, <span class=\"chem\">|v| = 4</span>, and <span class=\"chem\">|u - v| = sqrt(37)</span>, find the angle <span class=\"chem\">theta</span> between <span class=\"chem\">u</span> and <span class=\"chem\">v</span>. <strong>[4 marks]</strong>": "<strong>[Paper 1 — 電卓不可]</strong> ベクトル <span class=\"chem\">u</span> と <span class=\"chem\">v</span> が <span class=\"chem\">|u| = 3</span>、<span class=\"chem\">|v| = 4</span>、<span class=\"chem\">|u - v| = sqrt(37)</span> を満たすとき、<span class=\"chem\">u</span> と <span class=\"chem\">v</span> のなす角 <span class=\"chem\">theta</span> を求めなさい (Find)。 <strong>[4 marks]</strong>",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > data-title attribute
    "Square |u − v| using the dot product": "内積を使って |u − v| を 2 乗する",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > p
    "Writing |u − v|² = (u − v) · (u − v) brings the dot product u · v into play.": "|u − v|² = (u − v) · (u − v) と書くことで、内積 u · v を式に引き出せます。",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > data-title attribute
    "Substitute the known magnitudes to find u · v": "既知の大きさを代入して u · v を求める",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > p
    "We know |u − v|² = 37, |u|² = 9, and |v|² = 16.": "|u − v|² = 37、|u|² = 9、|v|² = 16 がわかっています。",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > data-title attribute
    "Use cos θ = (u · v) / (|u||v|)": "cos θ = (u · v) / (|u||v|) を使う",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > p
    "Substitute u · v = −6 and |u||v| = 12.": "u · v = −6 と |u||v| = 12 を代入します。",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > maths line
    "cos <i>θ</i> = <span class=\"frac\"><span>−6</span><span>3 × 4</span></span> = −<span class=\"frac\"><span>1</span><span>2</span></span> ⇒ <i>θ</i> = <b><span class=\"frac\"><span>2<i>π</i></span><span>3</span></span></b> (or <b>120°</b>) <b>[M1 A1]</b>": "cos <i>θ</i> = <span class=\"frac\"><span>−6</span><span>3 × 4</span></span> = −<span class=\"frac\"><span>1</span><span>2</span></span> ⇒ <i>θ</i> = <b><span class=\"frac\"><span>2<i>π</i></span><span>3</span></span></b> （または <b>120°</b>） <b>[M1 A1]</b>",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > p
    "<i>θ</i> = 2π/3 (or 120°)": "<i>θ</i> = 2π/3（または 120°）",

    // 3D vectors, unit vectors and the scalar (dot) product > try it > p
    "<strong>[Paper 1 — No GDC]</strong> Find the value of <span class=\"chem\">k</span> such that the vectors <span class=\"chem\">u = (3, -2, k)</span> and <span class=\"chem\">v = (2, 5, 2)</span> are perpendicular.": "<strong>[Paper 1 — 電卓不可]</strong> ベクトル <span class=\"chem\">u = (3, -2, k)</span> と <span class=\"chem\">v = (2, 5, 2)</span> が垂直になるような <span class=\"chem\">k</span> の値を求めなさい (Find)。",

    // 3D vectors, unit vectors and the scalar (dot) product > try it > li
    "Two non-zero vectors are perpendicular if and only if their dot product is zero: <span class=\"chem\">u \\cdot v = 0</span>.": "ゼロでない 2 つのベクトルが垂直であるのは、内積が 0 のとき、かつそのときに限ります：<span class=\"chem\">u \\cdot v = 0</span>。",

    // 3D vectors, unit vectors and the scalar (dot) product > try it > li
    "Solve <span class=\"chem\">3(2) + (-2)(5) + k(2) = 0</span>.": "<span class=\"chem\">3(2) + (-2)(5) + k(2) = 0</span> を解きます。",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > data-kicker attribute
    "Worked example 2 (AHL 3.12)": "例題 2 (AHL 3.12)",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > h3
    "Proving a geometric property with vectors": "ベクトルを使って図形の性質を証明する",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > p
    "<strong>[Paper 1 — No GDC]</strong> <span class=\"chem\">OABC</span> is a rhombus with <span class=\"chem\">\\mathbf{OA} = \\mathbf{a}</span> and <span class=\"chem\">\\mathbf{OC} = \\mathbf{c}</span>. Use vectors to show that the diagonals <span class=\"chem\">OB</span> and <span class=\"chem\">AC</span> are perpendicular. <strong>[4 marks]</strong>": "<strong>[Paper 1 — No GDC]</strong> <span class=\"chem\">OABC</span> はひし形で、<span class=\"chem\">\\mathbf{OA} = \\mathbf{a}</span>、<span class=\"chem\">\\mathbf{OC} = \\mathbf{c}</span> とする。ベクトルを用いて、対角線 <span class=\"chem\">OB</span> と <span class=\"chem\">AC</span> が垂直であることを示しなさい (Show that)。 <strong>[4 marks]</strong>",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > data-title attribute
    "Write both diagonals in terms of a and c": "2 本の対角線を a と c で表す",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > p
    "A rhombus is a parallelogram, so AB = OC = c. Then OB = OA + AB, and AC is \"head minus tail\".": "ひし形は平行四辺形なので AB = OC = c です。よって OB = OA + AB で、AC は「終点 − 始点」で求めます。",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > data-title attribute
    "Take the dot product of the diagonals": "2 本の対角線の内積をとる",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > p
    "Expand like ordinary algebra, using a · c = c · a so the middle terms cancel.": "ふつうの文字式と同じように展開し、a · c = c · a を使うと中央の 2 項が打ち消し合います。",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > data-title attribute
    "Use the property of a rhombus": "ひし形の性質を使う",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > p
    "All four sides of a rhombus are equal, so |a| = |c|, and a zero dot product of non-zero vectors means they are perpendicular.": "ひし形の 4 辺は等しいので |a| = |c| です。零でない 2 つのベクトルの内積が 0 ならば、それらは垂直です。",

    // 3D vectors, unit vectors and the scalar (dot) product > worked example > p
    "(<b>a</b> + <b>c</b>) · (<b>c</b> − <b>a</b>) = 0, so the diagonals of a rhombus are perpendicular.": "(<b>a</b> + <b>c</b>) · (<b>c</b> − <b>a</b>) = 0 なので、ひし形の対角線は垂直です。",

    // Equations of lines in 3D, kinematics and skew lines > data-toc attribute
    "3D lines, kinematics & skew lines": "3D 直線・運動学・ねじれの位置",

    // Equations of lines in 3D, kinematics and skew lines > h2
    "Equations of lines in 3D, kinematics and skew lines": "3D 空間の直線の方程式・運動学とねじれの位置",

    // Equations of lines in 3D, kinematics and skew lines > p
    "A straight line in 3D space is determined by a known point <span class=\"chem\">A(x_0, y_0, z_0)</span> with position vector <span class=\"chem\">a</span> and a non-zero direction vector <span class=\"chem\">b = (l, m, n)</span>:": "3D 空間の直線は、位置ベクトル <span class=\"chem\">a</span> をもつ定点 <span class=\"chem\">A(x_0, y_0, z_0)</span> とゼロでない方向ベクトル <span class=\"chem\">b = (l, m, n)</span> によって決まります：",

    // Equations of lines in 3D, kinematics and skew lines > equation > dd
    "position vector of any specific point on the line": "直線上の任意の 1 点の位置ベクトル",

    // Equations of lines in 3D, kinematics and skew lines > equation > dd
    "direction vector parallel to the line (in kinematics, the velocity vector <b>v</b>)": "直線に平行な方向ベクトル（運動学では速度ベクトル <b>v</b>）",

    // Equations of lines in 3D, kinematics and skew lines > equation > dt
    "λ (or t)": "λ（または t）",

    // Equations of lines in 3D, kinematics and skew lines > equation > dd
    "real scalar parameter (<span class=\"chem\">lambda in R</span>); in kinematics, time <span class=\"chem\">t &gt;= 0</span>": "実数パラメーター（<span class=\"chem\">lambda in R</span>）；運動学では時刻 <span class=\"chem\">t &gt;= 0</span>",

    // Equations of lines in 3D, kinematics and skew lines > common mistake > p
    "<strong>Reading the direction vector from a Cartesian line equation:</strong> Before reading off <span class=\"chem\">(x_0, y_0, z_0)</span> and <span class=\"chem\">(l, m, n)</span>, the coefficients of <span class=\"chem\">x, y, z</span> in the numerators <strong>must all be <span class=\"mono\">+1</span></strong>! For example, <span class=\"chem\">(2 - x)/3 = (2y - 4)/6 = z</span> must be rewritten as <span class=\"chem\">(x - 2)/(-3) = (y - 2)/3 = (z - 0)/1</span>, giving point <span class=\"chem\">(2, 2, 0)</span> and direction vector <span class=\"chem\">(-3, 3, 1)</span>.": "<strong>直線の直交座標方程式から方向ベクトルを読み取る：</strong> <span class=\"chem\">(x_0, y_0, z_0)</span> と <span class=\"chem\">(l, m, n)</span> を読み取る前に、分子の <span class=\"chem\">x, y, z</span> の係数は<strong>すべて <span class=\"mono\">+1</span></strong> でなければなりません！たとえば <span class=\"chem\">(2 - x)/3 = (2y - 4)/6 = z</span> は <span class=\"chem\">(x - 2)/(-3) = (y - 2)/3 = (z - 0)/1</span> と書き換えて、通る点 <span class=\"chem\">(2, 2, 0)</span>、方向ベクトル <span class=\"chem\">(-3, 3, 1)</span> を得ます。",

    // Equations of lines in 3D, kinematics and skew lines > h3
    "Classifying two lines in 3D space": "3D 空間の 2 直線の分類",

    // Equations of lines in 3D, kinematics and skew lines > p
    "Unlike lines in a 2D plane, two non-parallel lines in 3D space do not have to intersect—they can pass over and under each other like a bridge over a highway (<dfn data-def=\"Two lines in 3D space that are neither parallel nor intersecting; they do not lie in the same plane.\">skew lines</dfn>):": "2 次元平面上の直線とは異なり、3D 空間の平行でない 2 直線は交わるとは限りません——高速道路の上を通る橋のように立体交差することがあります（<dfn data-def=\"3D 空間において平行でもなく交わりもしない 2 直線。同一平面上にない。\">ねじれの位置にある直線 <span class=\"en-term\">(skew lines)</span></dfn>）：",

    // Equations of lines in 3D, kinematics and skew lines > data-def attribute
    "Two lines in 3D space that are neither parallel nor intersecting; they do not lie in the same plane.": "3D 空間において平行でもなく交わりもしない 2 直線。同一平面上にない。",

    // Equations of lines in 3D, kinematics and skew lines > li
    "<strong>Compare the direction vectors <span class=\"chem\">b_1</span> and <span class=\"chem\">b_2</span>:</strong> If <span class=\"chem\">b_1 = k*b_2</span>, the lines are parallel. Test if one line's starting point lies on the other line: if yes, they are <strong>coincident</strong> (the same line); if no, they are <strong>strictly parallel</strong>.": "<strong>方向ベクトル <span class=\"chem\">b_1</span> と <span class=\"chem\">b_2</span> を比べる：</strong> <span class=\"chem\">b_1 = k*b_2</span> なら 2 直線は平行です。一方の直線の基点がもう一方の直線上にあるか調べ、あれば<strong>一致する</strong>（同じ直線）、なければ<strong>平行</strong>（重ならない）です。",

    // Equations of lines in 3D, kinematics and skew lines > li
    "<strong>If not parallel, equate coordinates using two distinct parameters <span class=\"chem\">lambda</span> and <span class=\"chem\">mu</span>:</strong> Solve the first two equations (<span class=\"chem\">x</span> and <span class=\"chem\">y</span>) for <span class=\"chem\">lambda</span> and <span class=\"chem\">mu</span>, then substitute into the third (<span class=\"chem\">z</span>) equation. If the third equation holds, the lines <strong>intersect</strong> at a unique point; if it fails, the lines are <strong>skew</strong>.": "<strong>平行でなければ、2 つの異なる媒介変数 <span class=\"chem\">lambda</span> と <span class=\"chem\">mu</span> で座標を等置する：</strong> 最初の 2 つの式（<span class=\"chem\">x</span> と <span class=\"chem\">y</span>）を <span class=\"chem\">lambda</span> と <span class=\"chem\">mu</span> について解き、3 番目の式（<span class=\"chem\">z</span>）に代入します。3 番目の式が成り立てばただ 1 点で<strong>交わり</strong>、成り立たなければ<strong>ねじれの位置</strong>にあります。",

    // Equations of lines in 3D, kinematics and skew lines > worked example > data-kicker attribute
    "Worked example 3 (AHL 3.14–3.15)": "例題 3 (AHL 3.14–3.15)",

    // Equations of lines in 3D, kinematics and skew lines > worked example > h3
    "Finding the foot of the perpendicular and shortest distance from a point to a line": "点から直線への垂線の足と最短距離を求める",

    // Equations of lines in 3D, kinematics and skew lines > worked example > p
    "Consider the point <span class=\"chem\">P(1, 5, 1)</span> and the line <span class=\"chem\">L</span> with vector equation <span class=\"chem\">r = (2, 1, 0) + lambda(1, 2, 2)</span>.<br> (a) Find the coordinates of the point <span class=\"chem\">F</span> on <span class=\"chem\">L</span> that is closest to <span class=\"chem\">P</span>. <strong>[4 marks]</strong><br> (b) Hence find the shortest distance from <span class=\"chem\">P</span> to <span class=\"chem\">L</span>. <strong>[2 marks]</strong>": "点 <span class=\"chem\">P(1, 5, 1)</span> とベクトル方程式 <span class=\"chem\">r = (2, 1, 0) + lambda(1, 2, 2)</span> で表される直線 <span class=\"chem\">L</span> を考える。<br> (a) <span class=\"chem\">L</span> 上で <span class=\"chem\">P</span> に最も近い点 <span class=\"chem\">F</span> の座標を求めなさい (Find)。 <strong>[4 marks]</strong><br> (b) これを用いて (Hence)、点 <span class=\"chem\">P</span> から直線 <span class=\"chem\">L</span> までの最短距離を求めなさい (Find)。 <strong>[2 marks]</strong>",

    // Equations of lines in 3D, kinematics and skew lines > worked example > data-title attribute
    "Write the displacement vector PF in terms of λ": "変位ベクトル PF を λ で表す",

    // Equations of lines in 3D, kinematics and skew lines > worked example > p
    "Any point F on L has coordinates (2 + λ, 1 + 2λ, 2λ), so PF = OF − OP.": "L 上の任意の点 F の座標は (2 + λ, 1 + 2λ, 2λ) なので、PF = OF − OP となります。",

    // Equations of lines in 3D, kinematics and skew lines > worked example > data-title attribute
    "Use PF · b = 0 at the closest point": "最も近い点で PF · b = 0 を使う",

    // Equations of lines in 3D, kinematics and skew lines > worked example > p
    "The shortest segment PF is perpendicular to the line's direction vector b = (1, 2, 2).": "最短線分 PF は直線の方向ベクトル b = (1, 2, 2) に垂直です。",

    // Equations of lines in 3D, kinematics and skew lines > worked example > data-title attribute
    "Substitute λ = 1 to find F and |PF|": "λ = 1 を代入して F と |PF| を求める",

    // Equations of lines in 3D, kinematics and skew lines > worked example > p
    "Plug λ = 1 into OF = (2 + λ, 1 + 2λ, 2λ) and PF = (1 + λ, 2λ − 4, 2λ − 1).": "OF = (2 + λ, 1 + 2λ, 2λ) と PF = (1 + λ, 2λ − 4, 2λ − 1) に λ = 1 を代入します。",

    // Equations of lines in 3D, kinematics and skew lines > try it > p
    "Find the shortest distance from the point <span class=\"chem\">P(0, 4, 2)</span> to the line <span class=\"chem\">r = (1, 0, 1) + lambda(1, 2, 2)</span>.": "点 <span class=\"chem\">P(0, 4, 2)</span> から直線 <span class=\"chem\">r = (1, 0, 1) + lambda(1, 2, 2)</span> までの最短距離を求めなさい (Find)。",

    // Equations of lines in 3D, kinematics and skew lines > try it > li
    "Write <span class=\"chem\">PF = (1 + lambda, 2*lambda - 4, 2*lambda - 1)</span> and set <span class=\"chem\">PF \\cdot (1, 2, 2) = 0</span>.": "<span class=\"chem\">PF = (1 + lambda, 2*lambda - 4, 2*lambda - 1)</span> と書き、<span class=\"chem\">PF \\cdot (1, 2, 2) = 0</span> とおきます。",

    // Equations of lines in 3D, kinematics and skew lines > try it > li
    "You will find <span class=\"chem\">9*lambda - 9 = 0 =&gt; lambda = 1</span>, giving <span class=\"chem\">PF = (2, -2, 1)</span>.": "<span class=\"chem\">9*lambda - 9 = 0 =&gt; lambda = 1</span> が求まり、<span class=\"chem\">PF = (2, -2, 1)</span> となります。",

    // The vector (cross) product, areas and planes in 3D space > data-toc attribute
    "Cross product & 3D planes": "外積と 3D 平面",

    // The vector (cross) product, areas and planes in 3D space > h2
    "The vector (cross) product, areas and planes in 3D space": "外積（ベクトル積）・面積と 3D 空間の平面",

    // The vector (cross) product, areas and planes in 3D space > p
    "Whereas the dot product of two vectors is a scalar, the <dfn data-def=\"A binary operation on two 3D vectors v and w that produces a vector v × w perpendicular to both v and w, with magnitude |v||w| sin θ.\">vector (cross) product</dfn> <span class=\"chem\">v \\times w</span> returns a <strong>3D vector that is perpendicular to both <span class=\"chem\">v</span> and <span class=\"chem\">w</span></strong>.": "2 つのベクトルの内積がスカラー（実数）であるのに対し、<dfn data-def=\"2 つの 3D ベクトル v と w に対して、両方に垂直で大きさが |v||w| sin θ のベクトル v × w を作る演算。\">外積（ベクトル積） <span class=\"en-term\">(vector (cross) product)</span></dfn> <span class=\"chem\">v \\times w</span> は<strong><span class=\"chem\">v</span> と <span class=\"chem\">w</span> の両方に垂直な 3D ベクトル</strong>を返します。",

    // The vector (cross) product, areas and planes in 3D space > data-def attribute
    "A binary operation on two 3D vectors v and w that produces a vector v × w perpendicular to both v and w, with magnitude |v||w| sin θ.": "2 つの 3D ベクトル v と w に対して、両方に垂直で大きさが |v||w| sin θ のベクトル v × w を作る演算。",

    // The vector (cross) product, areas and planes in 3D space > equation > dt
    "Area of parallelogram": "平行四辺形の面積",

    // The vector (cross) product, areas and planes in 3D space > equation > dd
    "<span class=\"chem\">A = |v \\times w|</span> where <span class=\"chem\">v, w</span> are adjacent sides": "<span class=\"chem\">A = |v \\times w|</span>（<span class=\"chem\">v, w</span> は隣り合う 2 辺）",

    // The vector (cross) product, areas and planes in 3D space > equation > dt
    "Area of triangle ABC": "三角形 ABC の面積",

    // The vector (cross) product, areas and planes in 3D space > equation > dd
    "<span class=\"chem\">A = (1/2)|AB \\times AC|</span>": "<span class=\"chem\">A = (1/2)|AB \\times AC|</span>",

    // The vector (cross) product, areas and planes in 3D space > equation > dt
    "Plane equations": "平面の方程式",

    // The vector (cross) product, areas and planes in 3D space > equation > dd
    "<span class=\"chem\">r = a + lambda*b + mu*c</span> &nbsp;⇔&nbsp; <span class=\"chem\">r \\cdot n = a \\cdot n</span> &nbsp;⇔&nbsp; <span class=\"chem\">n_1 x + n_2 y + n_3 z = d</span>": "<span class=\"chem\">r = a + lambda*b + mu*c</span> &nbsp;⇔&nbsp; <span class=\"chem\">r \\cdot n = a \\cdot n</span> &nbsp;⇔&nbsp; <span class=\"chem\">n_1 x + n_2 y + n_3 z = d</span>",

    // The vector (cross) product, areas and planes in 3D space > widget > data-title attribute
    "Interactive 3D Dot & Cross Product Visualizer": "3D 内積＆外積インタラクティブ・ビジュアライザー",

    // The vector (cross) product, areas and planes in 3D space > widget > figcaption
    "Drag to rotate the 3D axes or adjust the components of vectors <b>u</b> and <b>v</b>. Observe how the cross product <b>u</b> × <b>v</b> (violet) is always perpendicular to the shaded parallelogram spanned by <b>u</b> and <b>v</b>, and its length equals the parallelogram's area |<b>u</b> × <b>v</b>|.": "ドラッグして 3D 座標軸を回転させるか、ベクトル <b>u</b> と <b>v</b> の成分を調整してみましょう。外積 <b>u</b> × <b>v</b>（紫）が常に <b>u</b> と <b>v</b> の張る平行四辺形に垂直で、その長さが平行四辺形の面積 |<b>u</b> × <b>v</b>| に等しいことがわかります。",

    // The vector (cross) product, areas and planes in 3D space > h3
    "Angles and intersections involving lines and planes (AHL 3.18)": "直線と平面のなす角・交点 (AHL 3.18)",

    // The vector (cross) product, areas and planes in 3D space > p
    "A plane <span class=\"chem\">Pi</span> is uniquely defined by a point on it and its <strong>normal vector</strong> <span class=\"chem\">n = (a, b, c)</span> perpendicular to the surface. Because <span class=\"chem\">n</span> stands at <span class=\"mono\">90°</span> to the plane, finding the acute angle <span class=\"chem\">phi</span> between a line (direction <span class=\"chem\">b</span>) and a plane (normal <span class=\"chem\">n</span>) uses <strong>sine</strong> instead of cosine:": "平面 <span class=\"chem\">Pi</span> は平面上の 1 点と、表面に垂直な<strong>法線ベクトル</strong> <span class=\"chem\">n = (a, b, c)</span> によって一意に決まります。<span class=\"chem\">n</span> は平面に対して <span class=\"mono\">90°</span> に立っているため、直線（方向 <span class=\"chem\">b</span>）と平面（法線 <span class=\"chem\">n</span>）のなす鋭角 <span class=\"chem\">phi</span> を求めるときはコサインではなく<strong>サイン</strong>を使います：",

    // The vector (cross) product, areas and planes in 3D space > equation > maths line
    "sin <i>ϕ</i> = <span class=\"frac\"><span>|<b>b</b> · <b>n</b>|</span><span>|<b>b</b>||<b>n</b>|</span></span> &nbsp; (line and plane), &nbsp;&nbsp;&nbsp;&nbsp; cos <i>θ</i> = <span class=\"frac\"><span>|<b>n</b><sub>1</sub> · <b>n</b><sub>2</sub>|</span><span>|<b>n</b><sub>1</sub>||<b>n</b><sub>2</sub>|</span></span> &nbsp; (two planes)": "sin <i>ϕ</i> = <span class=\"frac\"><span>|<b>b</b> · <b>n</b>|</span><span>|<b>b</b>||<b>n</b>|</span></span> &nbsp; （直線と平面）, &nbsp;&nbsp;&nbsp;&nbsp; cos <i>θ</i> = <span class=\"frac\"><span>|<b>n</b><sub>1</sub> · <b>n</b><sub>2</sub>|</span><span>|<b>n</b><sub>1</sub>||<b>n</b><sub>2</sub>|</span></span> &nbsp; （二つの平面）",

    // The vector (cross) product, areas and planes in 3D space > equation > dd
    "acute angle between line direction <b>b</b> and the plane (complement of the angle between <b>b</b> and <b>n</b>)": "直線の方向ベクトル <b>b</b> と平面のなす鋭角（<b>b</b> と <b>n</b> のなす角の余角）",

    // The vector (cross) product, areas and planes in 3D space > equation > dd
    "acute angle between two planes with normal vectors <b>n</b><sub>1</sub> and <b>n</b><sub>2</sub>": "法線ベクトル <b>n</b><sub>1</sub> と <b>n</b><sub>2</sub> をもつ 2 平面のなす鋭角",

    // The vector (cross) product, areas and planes in 3D space > widget > data-title attribute
    "3D Line-Plane Angle & Normal Vector Explorer": "3D 直線と平面のなす角＆法線ベクトル・エクスプローラー",

    // The vector (cross) product, areas and planes in 3D space > widget > figcaption
    "Adjust the tilt of the line direction vector <b>b</b>. Notice that the dot product <b>b</b> · <b>n</b> gives the angle 90° − ϕ with the normal <b>n</b>, so the angle ϕ with the plane itself satisfies sin ϕ = |<b>b</b> · <b>n</b>| / (|<b>b</b>||<b>n</b>|).": "直線の方向ベクトル <b>b</b> の傾きを調整してみましょう。内積 <b>b</b> · <b>n</b> が法線 <b>n</b> とのなす角 90° − ϕ を与えるため、平面自身とのなす角 ϕ は sin ϕ = |<b>b</b> · <b>n</b>| / (|<b>b</b>||<b>n</b>|) を満たすことがわかります。",

    // The vector (cross) product, areas and planes in 3D space > worked example > data-kicker attribute
    "Worked example 4 (AHL 3.16–3.18)": "例題 4 (AHL 3.16–3.18)",

    // The vector (cross) product, areas and planes in 3D space > worked example > h3
    "Cartesian equation of a plane through three points and intersection with a line": "3 点を通る平面の直交座標方程式と直線との交点",

    // The vector (cross) product, areas and planes in 3D space > worked example > p
    "Points <span class=\"chem\">A(1, 0, 2)</span>, <span class=\"chem\">B(2, 3, 1)</span>, and <span class=\"chem\">C(0, 1, 4)</span> lie on a plane <span class=\"chem\">Pi</span>.<br> (a) Find the area of triangle <span class=\"chem\">ABC</span>, and find the Cartesian equation of the plane <span class=\"chem\">Pi</span>. <strong>[5 marks]</strong><br> (b) Find the coordinates of the point where the line <span class=\"chem\">L: r = (1, 5, 0) + lambda(1, -1, 1)</span> intersects <span class=\"chem\">Pi</span>, and find the acute angle between <span class=\"chem\">L</span> and <span class=\"chem\">Pi</span>. <strong>[5 marks]</strong>": "3 点 <span class=\"chem\">A(1, 0, 2)</span>、<span class=\"chem\">B(2, 3, 1)</span>、<span class=\"chem\">C(0, 1, 4)</span> が平面 <span class=\"chem\">Pi</span> 上にある。<br> (a) 三角形 <span class=\"chem\">ABC</span> の面積を求め (Find)、平面 <span class=\"chem\">Pi</span> の直交座標方程式を求めなさい。 <strong>[5 marks]</strong><br> (b) 直線 <span class=\"chem\">L: r = (1, 5, 0) + lambda(1, -1, 1)</span> と <span class=\"chem\">Pi</span> の交点の座標を求め (Find)、<span class=\"chem\">L</span> と <span class=\"chem\">Pi</span> のなす鋭角を求めなさい。 <strong>[5 marks]</strong>",

    // The vector (cross) product, areas and planes in 3D space > worked example > data-title attribute
    "Form two in-plane vectors AB and AC and compute their cross product": "平面上の 2 つのベクトル AB と AC を作り、その外積を計算する",

    // The vector (cross) product, areas and planes in 3D space > worked example > p
    "AB × AC gives a normal vector n perpendicular to the plane, and half its magnitude is the area of ΔABC.": "AB × AC は平面に垂直な法線ベクトル n を与え、その大きさの半分が ΔABC の面積になります。",

    // The vector (cross) product, areas and planes in 3D space > worked example > data-title attribute
    "Compute Area(ΔABC) and substitute point A(1, 0, 2) into r · n = a · n": "Area(ΔABC) を計算し、点 A(1, 0, 2) を r · n = a · n に代入する",

    // The vector (cross) product, areas and planes in 3D space > worked example > p
    "Since |n| = √(49 + 1 + 16) = √66, Area = ½√66.": "|n| = √(49 + 1 + 16) = √66 なので、面積 = ½√66 です。",

    // The vector (cross) product, areas and planes in 3D space > worked example > maths line
    "Area = <span class=\"frac\"><span>1</span><span>2</span></span>|<b>AB</b> × <b>AC</b>| = <b><span class=\"frac\"><span>√66</span><span>2</span></span></b> (≈ 4.06), &nbsp;&nbsp; 7<i>x</i> − <i>y</i> + 4<i>z</i> = 7(1) − 0 + 4(2) = <b>15</b> <b>[A1 A1]</b>": "面積 = <span class=\"frac\"><span>1</span><span>2</span></span>|<b>AB</b> × <b>AC</b>| = <b><span class=\"frac\"><span>√66</span><span>2</span></span></b> (≈ 4.06), &nbsp;&nbsp; 7<i>x</i> − <i>y</i> + 4<i>z</i> = 7(1) − 0 + 4(2) = <b>15</b> <b>[A1 A1]</b>",

    // The vector (cross) product, areas and planes in 3D space > worked example > data-title attribute
    "Substitute the parametric coordinates of L into 7x − y + 4z = 15": "L の媒介変数表示を 7x − y + 4z = 15 に代入する",

    // The vector (cross) product, areas and planes in 3D space > worked example > p
    "On L, x = 1 + λ, y = 5 − λ, z = λ.": "L 上では x = 1 + λ、y = 5 − λ、z = λ です。",

    // The vector (cross) product, areas and planes in 3D space > worked example > maths line
    "Intersection point = (<b><span class=\"frac\"><span>25</span><span>12</span></span>, <span class=\"frac\"><span>47</span><span>12</span></span>, <span class=\"frac\"><span>13</span><span>12</span></span></b>) <b>[A1]</b>": "交点 = (<b><span class=\"frac\"><span>25</span><span>12</span></span>, <span class=\"frac\"><span>47</span><span>12</span></span>, <span class=\"frac\"><span>13</span><span>12</span></span></b>) <b>[A1]</b>",

    // The vector (cross) product, areas and planes in 3D space > worked example > data-title attribute
    "Use sin ϕ = |b · n| / (|b||n|) for the line-plane angle": "直線と平面のなす角に sin ϕ = |b · n| / (|b||n|) を使う",

    // The vector (cross) product, areas and planes in 3D space > worked example > p
    "Here b = (1, −1, 1) with |b| = √3 and n = (7, −1, 4) with |n| = √66.": "ここで b = (1, −1, 1) で |b| = √3、n = (7, −1, 4) で |n| = √66 です。",

    // The vector (cross) product, areas and planes in 3D space > worked example > maths line
    "sin <i>ϕ</i> = <span class=\"frac\"><span>|1(7) + (−1)(−1) + 1(4)|</span><span>√3 √66</span></span> = <span class=\"frac\"><span>12</span><span>3√22</span></span> = <span class=\"frac\"><span>4</span><span>√22</span></span> ≈ 0.8528 ⇒ <i>ϕ</i> ≈ <b>58.5°</b> (or 1.02 rad) <b>[M1 A1]</b>": "sin <i>ϕ</i> = <span class=\"frac\"><span>|1(7) + (−1)(−1) + 1(4)|</span><span>√3 √66</span></span> = <span class=\"frac\"><span>12</span><span>3√22</span></span> = <span class=\"frac\"><span>4</span><span>√22</span></span> ≈ 0.8528 ⇒ <i>ϕ</i> ≈ <b>58.5°</b> （または 1.02 rad） <b>[M1 A1]</b>",

    // The vector (cross) product, areas and planes in 3D space > worked example > p
    "(a) Area = √66 / 2, plane: 7<i>x</i> − <i>y</i> + 4<i>z</i> = 15; (b) (25/12, 47/12, 13/12), ϕ ≈ 58.5°": "(a) 面積 = √66 / 2、平面：7<i>x</i> − <i>y</i> + 4<i>z</i> = 15；(b) (25/12, 47/12, 13/12)、ϕ ≈ 58.5°",

    // The vector (cross) product, areas and planes in 3D space > not needed for IB > p
    "<strong>Not required in IB Math AA HL:</strong> The scalar triple product <span class=\"chem\">a \\cdot (b \\times c)</span> for the volume of a parallelepiped and the vector triple product <span class=\"chem\">a \\times (b \\times c)</span> are outside the 2021–2028 syllabus (unless defined for you in a Paper 3 problem).": "<strong>IB Math AA HL で不要なもの：</strong> 平行六面体の体積を求めるスカラー三重積 <span class=\"chem\">a \\cdot (b \\times c)</span> やベクトル三重積 <span class=\"chem\">a \\times (b \\times c)</span> は 2021–2028 年シラバスの範囲外です（Paper 3 の問題で定義が与えられる場合を除く）。",

    // The vector (cross) product, areas and planes in 3D space > try it > p
    "Find the exact area of triangle <span class=\"chem\">OAB</span> where <span class=\"chem\">O(0, 0, 0)</span> is the origin, <span class=\"chem\">A(1, 2, 2)</span>, and <span class=\"chem\">B(2, 1, -2)</span>.": "原点 <span class=\"chem\">O(0, 0, 0)</span>、点 <span class=\"chem\">A(1, 2, 2)</span>、点 <span class=\"chem\">B(2, 1, -2)</span> を頂点とする三角形 <span class=\"chem\">OAB</span> の正確な面積を求めなさい (Find)。",

    // The vector (cross) product, areas and planes in 3D space > try it > li
    "Compute the cross product <span class=\"chem\">OA \\times OB = (1, 2, 2) \\times (2, 1, -2) = (-6, 6, -3)</span>.": "外積 <span class=\"chem\">OA \\times OB = (1, 2, 2) \\times (2, 1, -2) = (-6, 6, -3)</span> を計算します。",

    // The vector (cross) product, areas and planes in 3D space > try it > li
    "The area of triangle <span class=\"chem\">OAB</span> is <span class=\"chem\">(1/2)|OA \\times OB| = (1/2)sqrt((-6)^2 + 6^2 + (-3)^2)</span>.": "三角形 <span class=\"chem\">OAB</span> の面積は <span class=\"chem\">(1/2)|OA \\times OB| = (1/2)sqrt((-6)^2 + 6^2 + (-3)^2)</span> です。",

    // The vector (cross) product, areas and planes in 3D space > try it > maths line
    "<b>OA</b> × <b>OB</b> = (−6, 6, −3) ⇒ Area = <span class=\"frac\"><span>1</span><span>2</span></span>√(36 + 36 + 9) = <span class=\"frac\"><span>9</span><span>2</span></span> = <b>4.5</b>": "<b>OA</b> × <b>OB</b> = (−6, 6, −3) ⇒ 面積 = <span class=\"frac\"><span>1</span><span>2</span></span>√(36 + 36 + 9) = <span class=\"frac\"><span>9</span><span>2</span></span> = <b>4.5</b>",

    // Exam-style practice > data-toc attribute
    // Exam-style practice > h2
    "Exam-style practice": "実戦形式の演習",

    // Exam-style practice > p
    "Three sets of original AHL vector questions spanning dot products, 3D lines, kinematics, skew lines, cross products, and planes.": "内積、3D 直線、運動学、ねじれの位置、外積、平面を網羅するオリジナルの AHL ベクトル演習 3 セットです。",

    // Exam-style practice > h3
    "Foundation: vector operations, dot and cross products": "基礎：ベクトル演算・内積と外積",

    // Exam-style practice > data-title attribute
    "3.3 foundation": "3.3 基礎",

    // Exam-style practice > h3
    "Exam standard: Paper 1 and Paper 2": "試験標準：Paper 1 と Paper 2",

    // Exam-style practice > data-title attribute
    "3.3 exam standard": "3.3 試験標準",

    // Exam-style practice > h3
    "Challenge: level 7 3D lines and planes": "発展：レベル 7 の 3D 直線と平面",

    // Exam-style practice > data-title attribute
    "3.3 challenge": "3.3 発展",

    // widget string (assets/js/widgets-t3-3.js)
    "u₁": "u₁",

    // widget string (assets/js/widgets-t3-3.js)
    "u₂": "u₂",

    // widget string (assets/js/widgets-t3-3.js)
    "u₃": "u₃",

    // widget string (assets/js/widgets-t3-3.js)
    "v₁": "v₁",

    // widget string (assets/js/widgets-t3-3.js)
    "v₂": "v₂",

    // widget string (assets/js/widgets-t3-3.js)
    "v₃": "v₃",

    // widget string (assets/js/widgets-t3-3.js)
    "Perpendicular": "垂直",

    // widget string (assets/js/widgets-t3-3.js)
    "Parallel (u × v = 0)": "平行 (u × v = 0)",

    // widget string (assets/js/widgets-t3-3.js)
    "General 3D": "一般の 3D",

    // widget string (assets/js/widgets-t3-3.js)
    "Dot product u · v": "内積 u · v",

    // widget string (assets/js/widgets-t3-3.js)
    "Cross product u × v": "外積 u × v",

    // widget string (assets/js/widgets-t3-3.js)
    "Parallelogram area |u × v|": "平行四辺形の面積 |u × v|",

    // widget string (assets/js/widgets-t3-3.js)
    "Angle θ": "角度 θ",

    // widget string (assets/js/widgets-t3-3.js)
    "3D vectors u, v, parallelogram area, and cross product u × v": "3D ベクトル u, v、平行四辺形の面積、および外積 u × v",

    // widget string (assets/js/widgets-t3-3.js)
    "Line–plane angle ϕ": "直線と平面のなす角 ϕ",

    // widget string (assets/js/widgets-t3-3.js)
    "Azimuth α": "方位角 α",

    // widget string (assets/js/widgets-t3-3.js)
    "Plane tilt": "平面の傾き",

    // widget string (assets/js/widgets-t3-3.js)
    "Angle ϕ (line–plane)": "角度 ϕ（直線と平面）",

    // widget string (assets/js/widgets-t3-3.js)
    "Angle 90° − ϕ (b to n)": "角度 90° − ϕ（b と n）",

    // widget string (assets/js/widgets-t3-3.js)
    "sin ϕ = |b · n| / (|b||n|)": "sin ϕ = |b · n| / (|b||n|)",

    // widget string (assets/js/widgets-t3-3.js)
    "Unit normal n": "単位法線ベクトル n",

    // widget string (assets/js/widgets-t3-3.js)
    "3D line intersecting a plane with normal vector n": "法線ベクトル n をもつ平面と交わる 3D 直線",

  }
});
