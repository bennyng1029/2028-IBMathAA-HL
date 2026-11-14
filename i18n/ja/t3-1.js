/* t3-1 — ja translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't3-1', {
  strings: {

    // page title (browser tab)
    "3.1 3D geometry, triangle trigonometry and radians | Analysis Lab": "3.1 3D 幾何学・三角形の三角比と弧度法 | Analysis Lab",

    // 3D geometry, triangle trigonometry and radians > page header > p
    "Topic 3.1 · SL 3.1–3.4": "Topic 3.1 · SL 3.1–3.4",

    // 3D geometry, triangle trigonometry and radians > page header > h1
    "3D geometry, triangle trigonometry and radians": "3D 幾何学・三角形の三角比と弧度法",

    // 3D geometry, triangle trigonometry and radians > page header > span
    "How do we measure distances, angles, and areas in three-dimensional solids, non-right triangles, and circular sectors?": "空間立体、直角三角形でない一般の三角形、そして扇形における距離・角度・面積はどのように求めるのでしょうか？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "チェックリスト",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > p
    "Tick each item once you can do it confidently without checking your notes. Everything on this page is SL core (tested on both SL and HL papers).": "ノートを見ずに自信をもって解けるようになったらチェックを入れましょう。このページの内容はすべて SL コア（SL・HL 共通で出題）です。",

    // What you need to be able to do > checklist > span
    "Find the distance <span class=\"chem\">d</span> and midpoint <span class=\"chem\">M</span> between two points in 3D space <span class=\"chem\">(x_1, y_1, z_1)</span> and <span class=\"chem\">(x_2, y_2, z_2)</span>.": "3 次元空間の 2 点 <span class=\"chem\">(x_1, y_1, z_1)</span> と <span class=\"chem\">(x_2, y_2, z_2)</span> の間の距離 <span class=\"chem\">d</span> と中点 <span class=\"chem\">M</span> を求められる。",

    // What you need to be able to do > checklist > span
    "Calculate the volume and surface area of right pyramids, right cones, spheres, hemispheres, and composite 3D solids.": "直角錐、直円錐、球、半球、およびそれらを組み合わせた 3D 立体の体積と表面積を計算できる。",

    // What you need to be able to do > checklist > span
    "Find the angle between a line and a plane in a 3D solid by dropping a perpendicular to form a right-angled triangle.": "3D 立体内で垂線を下ろして直角三角形を作り、直線と平面のなす角を求められる。",

    // What you need to be able to do > checklist > span
    "Apply the sine rule, cosine rule, and triangle area formula <span class=\"chem\">A = (1/2)ab sin C</span> in non-right-angled triangles.": "一般の三角形で正弦定理、余弦定理、三角形の面積公式 <span class=\"chem\">A = (1/2)ab sin C</span> を適用できる。",

    // What you need to be able to do > checklist > span
    "Recognize and solve the ambiguous case (<span class=\"chem\">SSA</span>) of the sine rule using both <span class=\"chem\">theta</span> and <span class=\"chem\">180° - theta</span> (or <span class=\"chem\">pi - theta</span>).": "正弦定理で三角形が 2 通り決まる場合（<span class=\"chem\">SSA</span>）を見抜き、<span class=\"chem\">theta</span> と <span class=\"chem\">180° - theta</span>（または <span class=\"chem\">pi - theta</span>）の両方を使って解ける。",

    // What you need to be able to do > checklist > span
    "Draw and solve diagrams involving angles of elevation, angles of depression, and three-figure true bearings (<span class=\"mono\">000°</span> to <span class=\"mono\">359°</span> clockwise from North).": "仰角、俯角、3 桁の方位角（北から時計回りに <span class=\"mono\">000°</span> 〜 <span class=\"mono\">359°</span>）を含む図を描いて問題を解ける。",

    // What you need to be able to do > checklist > span
    "Convert between degrees and radians (<span class=\"chem\">pi rad = 180°</span>) and compute arc length <span class=\"chem\">l = rθ</span>, sector area <span class=\"chem\">A = (1/2)r^2theta</span>, chord length, and circular segment area.": "度数法と弧度法（<span class=\"chem\">pi rad = 180°</span>）を変換し、弧の長さ <span class=\"chem\">l = rθ</span>、扇形の面積 <span class=\"chem\">A = (1/2)r^2theta</span>、弦の長さ、弓形の面積を計算できる。",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "問題デコーダー",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "問題デコーダー：使うべき解法を見抜く",

    // Question decoder: spotting which technique to use > p
    "Geometry and trigonometry questions on IB exams rarely tell you which rule to use. Instead, they give you a diagram or a word clue. Use this table to translate exam phrasing directly into your first line of working.": "IB 試験の図形・三角法の問題では、どの定理を使うかは明記されません。代わりに図や言葉の手がかりが与えられます。この表を使って、問題文の表現を最初の立式に直結させましょう。",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — 3D geometry, triangles and radians": "問題デコーダー — 3D 幾何学・三角形・弧度法",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "試験問題に書かれている表現",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "数学的な意味（公式と立式）",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1（電卓不可）vs Paper 2（GDC 可）",

    // Question decoder: spotting which technique to use > table > th
    "Triangle with a known <strong>opposite pair</strong> (an angle and its opposite side) plus 1 extra side or angle": "<strong>向かい合うペア</strong>（1 つの角とその対辺）ともう 1 つの辺または角がわかっている三角形",

    // Question decoder: spotting which technique to use > table > td
    "Use the <strong>Sine Rule</strong>: <span class=\"chem\">a / sin A = b / sin B</span>.": "<strong>正弦定理</strong> <span class=\"chem\">a / sin A = b / sin B</span> を使います。",

    // Question decoder: spotting which technique to use > table > td
    "If finding an angle from <span class=\"chem\">sin B = k</span>, always check whether the obtuse supplement <span class=\"chem\">180° - B</span> is also valid!": "<span class=\"chem\">sin B = k</span> から角を求めるときは、補角である鈍角 <span class=\"chem\">180° - B</span> も条件を満たすか必ず確認しましょう！",

    // Question decoder: spotting which technique to use > table > th
    "Triangle with <strong>two sides and the included angle (SAS)</strong> or <strong>all three sides (SSS)</strong>": "<strong>2 辺とその間の角 (SAS)</strong> または <strong>3 辺すべて (SSS)</strong> がわかっている三角形",

    // Question decoder: spotting which technique to use > table > td
    "Use the <strong>Cosine Rule</strong>: <span class=\"chem\">c^2 = a^2 + b^2 - 2ab cos C</span> or <span class=\"chem\">cos C = (a^2 + b^2 - c^2) / (2ab)</span>.": "<strong>余弦定理</strong> <span class=\"chem\">c^2 = a^2 + b^2 - 2ab cos C</span> または <span class=\"chem\">cos C = (a^2 + b^2 - c^2) / (2ab)</span> を使います。",

    // Question decoder: spotting which technique to use > table > td
    "Cosine rule never has an ambiguous case: if <span class=\"chem\">cos C &lt; 0</span>, the angle <span class=\"chem\">C</span> is obtuse (<span class=\"chem\">90° &lt; C &lt; 180°</span>).": "余弦定理には 2 通りの曖昧さがありません：<span class=\"chem\">cos C &lt; 0</span> なら角 <span class=\"chem\">C</span> は鈍角（<span class=\"chem\">90° &lt; C &lt; 180°</span>）です。",

    // Question decoder: spotting which technique to use > table > th
    "“There are <strong>two possible triangles</strong> <span class=\"chem\">ABC</span>” or “Find the <strong>two possible values</strong> of <span class=\"chem\">AB</span>”": "「<strong>2 通りの三角形</strong> <span class=\"chem\">ABC</span> がある」 / 「<span class=\"chem\">AB</span> の<strong>2 通りの値</strong>を求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Ambiguous Case (SSA)</strong>! Given angle <span class=\"chem\">A</span>, adjacent side <span class=\"chem\">b</span>, and opposite side <span class=\"chem\">a &lt; b</span>: the two possible angles opposite <span class=\"chem\">b</span> are <span class=\"chem\">B_1 = arcsin((b sin A)/a)</span> (acute) and <span class=\"chem\">B_2 = 180° - B_1</span> (obtuse).": "<strong>三角形が 2 通り決まる場合 (SSA)</strong> です！角 <span class=\"chem\">A</span>、隣辺 <span class=\"chem\">b</span>、対辺 <span class=\"chem\">a &lt; b</span> が与えられると、<span class=\"chem\">b</span> の対角としてとり得る 2 つの角は <span class=\"chem\">B_1 = arcsin((b sin A)/a)</span>（鋭角）と <span class=\"chem\">B_2 = 180° - B_1</span>（鈍角）です。",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Fast alternative for the two lengths of <span class=\"chem\">AB = c</span></strong>: write the Cosine Rule using the known angle <span class=\"chem\">A</span>: <span class=\"chem\">a^2 = b^2 + c^2 - 2bc cos A</span>, and solve the <strong>quadratic in <span class=\"chem\">c</span></strong>!": "<strong><span class=\"chem\">AB = c</span> の 2 つの長さを求める速い別解</strong>：既知の角 <span class=\"chem\">A</span> で余弦定理 <span class=\"chem\">a^2 = b^2 + c^2 - 2bc cos A</span> を立て、<strong><span class=\"chem\">c</span> の 2 次方程式</strong>を解きます！",

    // Question decoder: spotting which technique to use > table > th
    "“Find the angle between edge <span class=\"chem\">VA</span> and the horizontal base <span class=\"chem\">ABCD</span>”": "「辺 <span class=\"chem\">VA</span> と水平な底面 <span class=\"chem\">ABCD</span> のなす角を求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "Drop a perpendicular from <span class=\"chem\">V</span> to its shadow <span class=\"chem\">M</span> on the base. Find <span class=\"chem\">angle VAM</span> inside the right-angled triangle <span class=\"chem\">VMA</span>.": "<span class=\"chem\">V</span> から底面へ垂線を下ろし、影の点 <span class=\"chem\">M</span> をとります。直角三角形 <span class=\"chem\">VMA</span> 内の <span class=\"chem\">angle VAM</span> を求めます。",

    // Question decoder: spotting which technique to use > table > td
    "Do <strong>not</strong> use the slant height of a triangular face! For a square base of side <span class=\"chem\">s</span>, the half-diagonal is <span class=\"chem\">AM = (s sqrt(2))/2</span>.": "三角形の側面の斜高（母線）を使っては<strong>いけません</strong>！1 辺 <span class=\"chem\">s</span> の正方形の底面では、対角線の半分は <span class=\"chem\">AM = (s sqrt(2))/2</span> です。",

    // Question decoder: spotting which technique to use > table > th
    "“Ship <span class=\"chem\">B</span> is on a <strong>bearing of <span class=\"mono\">135°</span> from <span class=\"chem\">A</span></strong>”": "「船 <span class=\"chem\">B</span> は <strong><span class=\"chem\">A</span> からの方位角 <span class=\"mono\">135°</span></strong> の方向にある」",

    // Question decoder: spotting which technique to use > table > td
    "Draw a North arrow <strong>at <span class=\"chem\">A</span></strong> (the “from” point) and measure <span class=\"mono\">135°</span> clockwise. Parallel North arrows at <span class=\"chem\">A</span> and <span class=\"chem\">B</span> form co-interior angles adding to <span class=\"mono\">180°</span>.": "<strong><span class=\"chem\">A</span></strong>（「from」の基準点）に北向きの矢印を描き、時計回りに <span class=\"mono\">135°</span> を測ります。<span class=\"chem\">A</span> と <span class=\"chem\">B</span> の平行な北向き矢印は、和が <span class=\"mono\">180°</span> になる同側内角を作ります。",

    // Question decoder: spotting which technique to use > table > td
    "Write final bearings with 3 digits (e.g. <span class=\"mono\">042°</span>, not <span class=\"mono\">42°</span>). The back-bearing from <span class=\"chem\">B</span> to <span class=\"chem\">A</span> differs by <span class=\"mono\">180°</span>.": "最終的な方位角は 3 桁で書きます（例：<span class=\"mono\">42°</span> ではなく <span class=\"mono\">042°</span>）。<span class=\"chem\">B</span> から <span class=\"chem\">A</span> への逆方位角は <span class=\"mono\">180°</span> だけ異なります。",

    // Question decoder: spotting which technique to use > table > th
    "“Find the area of the <strong>shaded segment</strong> bounded by chord <span class=\"chem\">AB</span> and arc <span class=\"chem\">AB</span>”": "「弦 <span class=\"chem\">AB</span> と弧 <span class=\"chem\">AB</span> で囲まれた<strong>影のついた弓形</strong>の面積を求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "<span class=\"chem\">A_{segment} = A_{sector} - A_{triangle} = (1/2)r^2theta - (1/2)r^2 sin(theta) = (1/2)r^2(theta - sin(theta))</span>.": "<span class=\"chem\">A_{segment} = A_{sector} - A_{triangle} = (1/2)r^2theta - (1/2)r^2 sin(theta) = (1/2)r^2(theta - sin(theta))</span> です。",

    // Question decoder: spotting which technique to use > table > td
    "<span class=\"chem\">theta</span> <strong>must be in radians</strong>! Switch your GDC to <strong>RAD</strong> mode before computing <span class=\"chem\">sin(theta)</span>.": "<span class=\"chem\">theta</span> は<strong>必ずラジアン</strong>でなければなりません！<span class=\"chem\">sin(theta)</span> を計算する前に GDC を <strong>RAD</strong> モードに切り替えましょう。",

    // Three-dimensional space, solids and angles with a plane > data-toc attribute
    "3D space & solids": "3D 空間と立体",

    // Three-dimensional space, solids and angles with a plane > h2
    "Three-dimensional space, solids and angles with a plane": "3 次元空間・立体と平面とのなす角",

    // Three-dimensional space, solids and angles with a plane > p
    "Three-dimensional coordinate geometry extends the 2D Pythagoras and average formulas by adding a third coordinate <span class=\"chem\">z</span>. Think of <span class=\"chem\">(x, y)</span> as your position on the floor of a room and <span class=\"chem\">z</span> as your height above the floor.": "3 次元座標幾何学は、2 次元の三平方の定理と中点の公式に 3 つ目の座標 <span class=\"chem\">z</span> を加えたものです。<span class=\"chem\">(x, y)</span> を部屋の床上の位置、<span class=\"chem\">z</span> を床からの高さとイメージしましょう。",

    // Three-dimensional space, solids and angles with a plane > equation > dd
    "straight-line distance between two 3D points (space diagonal of a box)": "3D 空間内の 2 点間の直線距離（直方体の対角線）",

    // Three-dimensional space, solids and angles with a plane > equation > dd
    "coordinates of the midpoint of the line segment joining the two points": "2 点を結ぶ線分の中点の座標",

    // Three-dimensional space, solids and angles with a plane > h3
    "Volumes and surface areas of 3D solids": "3D 立体の体積と表面積",

    // Three-dimensional space, solids and angles with a plane > p
    "The SL 3.1 section of your IB Formula Booklet gives the volume and curved surface area formulas for right pyramids, right cones, and spheres. Notice the pattern: any solid that tapers to a sharp apex (a pyramid or a cone) has volume equal to <strong>one-third</strong> of its base area times its perpendicular height <span class=\"chem\">h</span>.": "IB 公式集の SL 3.1 の項には、直角錐・直円錐・球の体積と側面積の公式が載っています。パターンに注目しましょう：頂点に向かって先細りになる立体（角錐や円錐）の体積は、底面積×高さ <span class=\"chem\">h</span> の <strong>3 分の 1</strong> です。",

    // Three-dimensional space, solids and angles with a plane > table > caption
    "3D solids in the IB Formula Booklet (SL 3.1 section)": "IB 公式集に載っている 3D 立体（SL 3.1 の項）",

    // Three-dimensional space, solids and angles with a plane > table > th
    "Solid": "立体",

    // Three-dimensional space, solids and angles with a plane > table > th
    "Volume <span class=\"chem\">V</span>": "体積 <span class=\"chem\">V</span>",

    // Three-dimensional space, solids and angles with a plane > table > th
    "Surface area <span class=\"chem\">A</span>": "表面積 <span class=\"chem\">A</span>",

    // Three-dimensional space, solids and angles with a plane > table > th
    "Key right-triangle link": "直角三角形との関係",

    // Three-dimensional space, solids and angles with a plane > table > th
    "Right pyramid": "直角錐",

    // Three-dimensional space, solids and angles with a plane > table > td
    "<span class=\"chem\">V = (1/3)Ah</span> &nbsp;(where <span class=\"chem\">A</span> is base area)": "<span class=\"chem\">V = (1/3)Ah</span> &nbsp;（<span class=\"chem\">A</span> は底面積）",

    // Three-dimensional space, solids and angles with a plane > table > td
    "Base area <span class=\"chem\">+</span> sum of triangular slant faces": "底面積 <span class=\"chem\">+</span> 三角形の側面の和",

    // Three-dimensional space, solids and angles with a plane > table > td
    "Apex height <span class=\"chem\">h</span>, apothem/half-base, and slant height <span class=\"chem\">l</span> form a right triangle.": "高さ <span class=\"chem\">h</span>、底面の中心から辺までの距離、側面の高さ <span class=\"chem\">l</span> が直角三角形を作ります。",

    // Three-dimensional space, solids and angles with a plane > table > th
    "Right circular cone": "直円錐",

    // Three-dimensional space, solids and angles with a plane > table > td
    "<span class=\"chem\">V = (1/3)pi r^2 h</span>": "<span class=\"chem\">V = (1/3)pi r^2 h</span>",

    // Three-dimensional space, solids and angles with a plane > table > td
    "Curved: <span class=\"chem\">A_{curved} = pi r l</span><br>Total solid cone: <span class=\"chem\">pi r l + pi r^2</span>": "側面：<span class=\"chem\">A_{curved} = pi r l</span><br>全表面積：<span class=\"chem\">pi r l + pi r^2</span>",

    // Three-dimensional space, solids and angles with a plane > table > td
    "Slant height <span class=\"chem\">l = sqrt(r^2 + h^2)</span>.": "母線の長さ <span class=\"chem\">l = sqrt(r^2 + h^2)</span>。",

    // Three-dimensional space, solids and angles with a plane > table > th
    "Sphere &amp; hemisphere": "球と半球",

    // Three-dimensional space, solids and angles with a plane > table > td
    "Sphere: <span class=\"chem\">V = (4/3)pi r^3</span><br>Hemisphere: <span class=\"chem\">V = (2/3)pi r^3</span>": "球：<span class=\"chem\">V = (4/3)pi r^3</span><br>半球：<span class=\"chem\">V = (2/3)pi r^3</span>",

    // Three-dimensional space, solids and angles with a plane > table > td
    "Sphere: <span class=\"chem\">A = 4pi r^2</span> (not <span class=\"chem\">r^3</span>)<br>Solid hemisphere: <span class=\"chem\">2pi r^2 + pi r^2 = 3pi r^2</span>": "球：<span class=\"chem\">A = 4pi r^2</span>（<span class=\"chem\">r^3</span> ではありません）<br>中身の詰まった半球：<span class=\"chem\">2pi r^2 + pi r^2 = 3pi r^2</span>",

    // Three-dimensional space, solids and angles with a plane > table > td
    "When a cone sits on a hemisphere, they share the circular radius <span class=\"chem\">r</span>.": "円錐が半球の上に乗っているときは、共通の円の半径 <span class=\"chem\">r</span> を共有します。",

    // Three-dimensional space, solids and angles with a plane > key idea > p
    "<strong>Angle between a line and a plane:</strong> Imagine shining a torch straight down from above the plane. The <dfn data-def=\"The acute angle between a line segment and its orthogonal projection (shadow) on the plane.\">angle between a line and a plane</dfn> is the angle between the line and its <strong>shadow</strong> (orthogonal projection) on the plane. Always drop a perpendicular from the top of the line to the plane to build a right-angled triangle.": "<strong>直線と平面のなす角：</strong> 平面の真上から懐中電灯で光を当てるイメージを持ちましょう。<dfn data-def=\"線分と、平面上への正射影（影）とがなす鋭角。\">直線と平面のなす角 <span class=\"en-term\">(angle between a line and a plane)</span></dfn> とは、その直線と平面上に落ちた<strong>影</strong>（正射影）とがなす角のことです。常に直線の先端から平面に垂線を下ろして直角三角形を作りましょう。",

    // Three-dimensional space, solids and angles with a plane > key idea > data-def attribute
    "The acute angle between a line segment and its orthogonal projection (shadow) on the plane.": "線分と、平面上への正射影（影）とがなす鋭角。",

    // Three-dimensional space, solids and angles with a plane > worked example > data-kicker attribute
    "Worked example 1 (SL 3.1)": "例題 1 (SL 3.1)",

    // Three-dimensional space, solids and angles with a plane > worked example > h3
    "Height, volume and edge-to-base angle in a right square-based pyramid": "正四角錐の高さ・体積と側辺と底面のなす角",

    // Three-dimensional space, solids and angles with a plane > worked example > p
    "A right pyramid <span class=\"chem\">VABCD</span> has a horizontal square base <span class=\"chem\">ABCD</span> of side length <span class=\"mono\">10 cm</span>. Each sloping edge <span class=\"chem\">VA, VB, VC, VD</span> has length <span class=\"mono\">13 cm</span>. Let <span class=\"chem\">M</span> be the centre of the square base.": "直角錐（正四角錐）<span class=\"chem\">VABCD</span> の水平な正方形の底面 <span class=\"chem\">ABCD</span> の 1 辺の長さは <span class=\"mono\">10 cm</span> である。各側辺 <span class=\"chem\">VA, VB, VC, VD</span> の長さは <span class=\"mono\">13 cm</span> である。正方形の底面の中心を <span class=\"chem\">M</span> とする。",

    // Three-dimensional space, solids and angles with a plane > worked example > p
    "(a) Find the exact length of <span class=\"chem\">AM</span>, and hence find the vertical height <span class=\"chem\">VM</span>. <strong>[3 marks]</strong><br> (b) Calculate the volume of the pyramid, giving your answer to 3 significant figures. <strong>[2 marks]</strong><br> (c) Find the angle that the edge <span class=\"chem\">VA</span> makes with the base <span class=\"chem\">ABCD</span>. <strong>[2 marks]</strong>": "(a) <span class=\"chem\">AM</span> の厳密値（正確な長さ）を求め (Find)、これを用いて高さ <span class=\"chem\">VM</span> を求めなさい。 <strong>[3 marks]</strong><br> (b) この四角錐の体積を計算し (Calculate)、有効数字 3 桁で答えなさい。 <strong>[2 marks]</strong><br> (c) 辺 <span class=\"chem\">VA</span> と底面 <span class=\"chem\">ABCD</span> がなす角を求めなさい (Find)。 <strong>[2 marks]</strong>",

    // Three-dimensional space, solids and angles with a plane > worked example > data-title attribute
    "Find the base diagonal AC and half-diagonal AM": "底面の対角線 AC とその半分 AM を求める",

    // Three-dimensional space, solids and angles with a plane > worked example > p
    "The shadow of the edge VA on the horizontal base is the half-diagonal AM, from corner A to the centre M.": "水平な底面上の辺 VA の影は、頂点 A から中心 M までの半対角線 AM です。",

    // Three-dimensional space, solids and angles with a plane > worked example > data-title attribute
    "Use Pythagoras in the vertical right-angled triangle VMA": "鉛直な直角三角形 VMA で三平方の定理を使う",

    // Three-dimensional space, solids and angles with a plane > worked example > p
    "Because the pyramid is a right pyramid, the apex V is directly above M, so ∠VMA = 90°.": "直角錐なので頂点 V は M の真上にあり、∠VMA = 90° です。",

    // Three-dimensional space, solids and angles with a plane > worked example > data-title attribute
    "Compute the volume using V = (1/3)Ah": "V = (1/3)Ah を使って体積を計算する",

    // Three-dimensional space, solids and angles with a plane > worked example > p
    "The base is a 10 cm by 10 cm square with area A = 100 cm².": "底面は 10 cm × 10 cm の正方形なので、面積は A = 100 cm² です。",

    // Three-dimensional space, solids and angles with a plane > worked example > data-title attribute
    "Find ∠VAM between edge VA and its shadow AM on the base": "辺 VA と底面上の影 AM がなす角 ∠VAM を求める",

    // Three-dimensional space, solids and angles with a plane > worked example > p
    "In right-angled triangle VMA, AM is adjacent to ∠VAM and VA = 13 cm is the hypotenuse.": "直角三角形 VMA で、AM は ∠VAM の隣辺、VA = 13 cm は斜辺です。",

    // Three-dimensional space, solids and angles with a plane > worked example > maths line
    "cos(∠<i>VAM</i>) = <span class=\"frac\"><span>5√2</span><span>13</span></span> ≈ 0.54393 ⇒ ∠<i>VAM</i> = arccos<span class=\"frac\"><span>5√2</span><span>13</span></span> ≈ <b>57.0°</b> (or 0.996 rad) <b>[M1 A1]</b>": "cos(∠<i>VAM</i>) = <span class=\"frac\"><span>5√2</span><span>13</span></span> ≈ 0.54393 ⇒ ∠<i>VAM</i> = arccos<span class=\"frac\"><span>5√2</span><span>13</span></span> ≈ <b>57.0°</b> （または 0.996 rad） <b>[M1 A1]</b>",

    // Three-dimensional space, solids and angles with a plane > worked example > p
    "(a) <i>AM</i> = 5√2 cm, <i>VM</i> = √119 cm ≈ 10.9 cm; (b) 364 cm³; (c) 57.0°": "(a) <i>AM</i> = 5√2 cm, <i>VM</i> = √119 cm ≈ 10.9 cm；(b) 364 cm³；(c) 57.0°",

    // Three-dimensional space, solids and angles with a plane > common mistake > p
    "<strong>Angle between two planes vs angle between a line and a plane:</strong> In the pyramid above, the angle between the <em>slant edge</em> <span class=\"chem\">VA</span> and the base is <span class=\"chem\">angle VAM</span> (using the half-diagonal <span class=\"chem\">AM = 5 sqrt(2)</span>). If a question asks for the angle between the <em>sloping triangular face</em> <span class=\"chem\">VAB</span> and the base, you must join <span class=\"chem\">V</span> and <span class=\"chem\">M</span> to the <strong>midpoint <span class=\"chem\">N</span> of side <span class=\"chem\">AB</span></strong> (both <span class=\"chem\">VN</span> and <span class=\"chem\">MN</span> are perpendicular to <span class=\"chem\">AB</span>, and <span class=\"chem\">MN = 5 cm</span>) and find <span class=\"chem\">angle VNM</span>!": "<strong>2 平面のなす角 vs 直線と平面のなす角：</strong> 上の四角錐で、<em>側辺</em> <span class=\"chem\">VA</span> と底面のなす角は <span class=\"chem\">angle VAM</span>（半対角線 <span class=\"chem\">AM = 5 sqrt(2)</span> を使用）です。一方、<em>三角形の側面</em> <span class=\"chem\">VAB</span> と底面のなす角を問われた場合は、<span class=\"chem\">V</span> と <span class=\"chem\">M</span> を<strong>辺 <span class=\"chem\">AB</span> の中点 <span class=\"chem\">N</span></strong> と結び（<span class=\"chem\">VN</span> と <span class=\"chem\">MN</span> はどちらも <span class=\"chem\">AB</span> に垂直で、<span class=\"chem\">MN = 5 cm</span>）、<span class=\"chem\">angle VNM</span> を求めなければなりません！",

    // Three-dimensional space, solids and angles with a plane > try it > p
    "A rectangular box (cuboid) has dimensions <span class=\"mono\">6 cm</span> by <span class=\"mono\">10 cm</span> by <span class=\"mono\">sqrt(89) cm</span>. Calculate the exact length of its longest internal space diagonal (from one bottom corner to the opposite top corner).": "直方体の 3 辺の長さが <span class=\"mono\">6 cm</span>、<span class=\"mono\">10 cm</span>、<span class=\"mono\">sqrt(89) cm</span> である。最も長い内部の対角線（底面の 1 つの角から反対側の上の角まで）の正確な長さを計算しなさい (Calculate)。",

    // Three-dimensional space, solids and angles with a plane > try it > li
    "By the 3D distance formula (3D Pythagoras), the space diagonal of a box with sides <span class=\"chem\">l, w, h</span> is <span class=\"chem\">d = sqrt(l^2 + w^2 + h^2)</span>.": "3 次元の距離の公式（空間の三平方の定理）より、3 辺が <span class=\"chem\">l, w, h</span> の直方体の対角線は <span class=\"chem\">d = sqrt(l^2 + w^2 + h^2)</span> です。",

    // Three-dimensional space, solids and angles with a plane > try it > li
    "Substitute <span class=\"chem\">6^2 + 10^2 + (sqrt(89))^2 = 36 + 100 + 89</span> and take the square root.": "<span class=\"chem\">6^2 + 10^2 + (sqrt(89))^2 = 36 + 100 + 89</span> を代入して平方根をとります。",

    // Triangle trigonometry, the ambiguous case and bearings > data-toc attribute
    "Triangles & ambiguous case": "三角形と 2 通りの解",

    // Triangle trigonometry, the ambiguous case and bearings > h2
    "Triangle trigonometry, the ambiguous case and bearings": "三角形の三角比・2 通りの解と方位角",

    // Triangle trigonometry, the ambiguous case and bearings > p
    "In any triangle <span class=\"chem\">ABC</span>, we label the side opposite angle <span class=\"chem\">A</span> as <span class=\"chem\">a</span>, opposite <span class=\"chem\">B</span> as <span class=\"chem\">b</span>, and opposite <span class=\"chem\">C</span> as <span class=\"chem\">c</span>. Three formulas in your Formula Booklet let you solve any triangle once you know three pieces of information (including at least one side).": "任意の三角形 <span class=\"chem\">ABC</span> で、角 <span class=\"chem\">A</span> の対辺を <span class=\"chem\">a</span>、角 <span class=\"chem\">B</span> の対辺を <span class=\"chem\">b</span>、角 <span class=\"chem\">C</span> の対辺を <span class=\"chem\">c</span> とします。公式集にある 3 つの公式を使えば、少なくとも 1 辺を含む 3 つの情報から三角形の残りの要素を求められます。",

    // Triangle trigonometry, the ambiguous case and bearings > equation > maths line
    "<span class=\"frac\"><span><i>a</i></span><span>sin <i>A</i></span></span> = <span class=\"frac\"><span><i>b</i></span><span>sin <i>B</i></span></span> = <span class=\"frac\"><span><i>c</i></span><span>sin <i>C</i></span></span>, &nbsp;&nbsp; <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − 2<i>ab</i> cos <i>C</i>, &nbsp;&nbsp; Area = <span class=\"frac\"><span>1</span><span>2</span></span><i>ab</i> sin <i>C</i>": "<span class=\"frac\"><span><i>a</i></span><span>sin <i>A</i></span></span> = <span class=\"frac\"><span><i>b</i></span><span>sin <i>B</i></span></span> = <span class=\"frac\"><span><i>c</i></span><span>sin <i>C</i></span></span>, &nbsp;&nbsp; <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − 2<i>ab</i> cos <i>C</i>, &nbsp;&nbsp; 面積 = <span class=\"frac\"><span>1</span><span>2</span></span><i>ab</i> sin <i>C</i>",

    // Triangle trigonometry, the ambiguous case and bearings > equation > dd
    "side lengths opposite interior angles <i>A</i>, <i>B</i>, <i>C</i>": "内角 <i>A</i>, <i>B</i>, <i>C</i> の対辺の長さ",

    // Triangle trigonometry, the ambiguous case and bearings > equation > dt
    "cos C": "cos C",

    // Triangle trigonometry, the ambiguous case and bearings > equation > dd
    "rearranged form: cos <i>C</i> = (<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − <i>c</i><sup>2</sup>) / (2<i>ab</i>)": "変形した形：cos <i>C</i> = (<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − <i>c</i><sup>2</sup>) / (2<i>ab</i>)",

    // Triangle trigonometry, the ambiguous case and bearings > h3
    "Why the Sine Rule has an ambiguous case (SSA)": "正弦定理に 2 通りの解 (SSA) がある理由",

    // Triangle trigonometry, the ambiguous case and bearings > p
    "<strong>Before you start:</strong> the ambiguous case relies on <span class=\"chem\">sin(180° - theta) = sin(theta)</span> for angles in degrees, or <span class=\"chem\">sin(pi - theta) = sin(theta)</span> in radians. This symmetry comes from the unit circle in <a href=\"t3-2.html\">3.2 The unit circle, trig identities and periodic models</a>.": "<strong>始める前に：</strong>2 通りの三角形ができる場合（三角形の決定）は、度数法では <span class=\"chem\">sin(180° - theta) = sin(theta)</span>、弧度法では <span class=\"chem\">sin(pi - theta) = sin(theta)</span> という性質に基づいています。この対称性は <a href=\"t3-2.html\">3.2 単位円・三角関数の恒等式と周期モデル</a> の単位円から導かれます。",

    // Triangle trigonometry, the ambiguous case and bearings > p
    "Because <span class=\"chem\">sin(180° - theta) = sin(theta)</span>, a positive value of <span class=\"chem\">sin C</span> corresponds to <strong>two</strong> angles between <span class=\"mono\">0°</span> and <span class=\"mono\">180°</span>: an acute angle <span class=\"chem\">C_1 = arcsin(k)</span> and its obtuse supplement <span class=\"chem\">C_2 = 180° - C_1</span>. Geometrically, if you fix angle <span class=\"chem\">A</span> and adjacent side <span class=\"chem\">b</span>, the minimum perpendicular distance from vertex <span class=\"chem\">C</span> to the base line is <span class=\"chem\">h = b sin A</span>. When the opposite side <span class=\"chem\">a</span> satisfies <span class=\"chem\">b sin A &lt; a &lt; b</span>, a compass of radius <span class=\"chem\">a</span> centred at <span class=\"chem\">C</span> cuts the base line in <strong>two different places</strong>!": "<span class=\"chem\">sin(180° - theta) = sin(theta)</span> であるため、<span class=\"chem\">sin C</span> の正の値に対して <span class=\"mono\">0°</span> から <span class=\"mono\">180°</span> の間に<strong>2 つ</strong>の角が対応します：鋭角 <span class=\"chem\">C_1 = arcsin(k)</span> とその補角である鈍角 <span class=\"chem\">C_2 = 180° - C_1</span> です。図形的には、角 <span class=\"chem\">A</span> と隣辺 <span class=\"chem\">b</span> を固定したとき、頂点 <span class=\"chem\">C</span> から底辺の直線までの最短距離（垂線）は <span class=\"chem\">h = b sin A</span> です。対辺 <span class=\"chem\">a</span> が <span class=\"chem\">b sin A &lt; a &lt; b</span> を満たすとき、<span class=\"chem\">C</span> を中心とする半径 <span class=\"chem\">a</span> のコンパスは底辺の直線と<strong>2 か所で</strong>交わります！",

    // Triangle trigonometry, the ambiguous case and bearings > widget > data-title attribute
    "Ambiguous Case (SSA) Triangle Explorer": "三角形の決定（2 通りある場合, SSA）エクスプローラー",

    // Triangle trigonometry, the ambiguous case and bearings > widget > figcaption
    "Adjust the known angle <i>A</i>, adjacent side <i>b</i>, and opposite swinging side <i>a</i>. Watch how side <i>a</i> misses the base when <i>a</i> &lt; <i>b</i> sin <i>A</i> (0 triangles), just touches at 90° when <i>a</i> = <i>b</i> sin <i>A</i> (1 right triangle), cuts the base twice when <i>b</i> sin <i>A</i> &lt; <i>a</i> &lt; <i>b</i> (<strong>2 triangles: acute <i>B</i>₁ and obtuse <i>B</i>₂ = 180° − <i>B</i>₁</strong>), and forms 1 triangle when <i>a</i> ≥ <i>b</i>.": "既知の角 <i>A</i>、隣辺 <i>b</i>、対辺 <i>a</i> を動かしてみましょう。辺 <i>a</i> が <i>a</i> &lt; <i>b</i> sin <i>A</i> のとき底辺に届かず（0 個）、<i>a</i> = <i>b</i> sin <i>A</i> で 90° に接し（直角三角形 1 個）、<i>b</i> sin <i>A</i> &lt; <i>a</i> &lt; <i>b</i> で底辺と 2 回交わり（<strong>2 個の三角形：鋭角 <i>B</i>₁ と鈍角 <i>B</i>₂ = 180° − <i>B</i>₁</strong>）、<i>a</i> ≥ <i>b</i> で 1 個の三角形になる様子を確認できます。",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > data-kicker attribute
    "Worked example 2 (SL 3.5 — Ambiguous Case)": "例題 2 (SL 3.5 — 2 通りある場合)",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > h3
    "Finding both possible triangles in an SSA problem": "SSA の問題で 2 通りの三角形を両方求める",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > p
    "In triangle <span class=\"chem\">ABC</span>, <span class=\"chem\">AB = 10 cm</span>, <span class=\"chem\">BC = 7 cm</span>, and <span class=\"chem\">angle BAC = 35°</span>.<br> (a) Find the two possible values of <span class=\"chem\">angle ACB</span>, giving your answers to 1 decimal place. <strong>[4 marks]</strong><br> (b) Find the positive difference between the two possible lengths of side <span class=\"chem\">AC</span>. <strong>[3 marks]</strong>": "三角形 <span class=\"chem\">ABC</span> において、<span class=\"chem\">AB = 10 cm</span>、<span class=\"chem\">BC = 7 cm</span>、<span class=\"chem\">angle BAC = 35°</span> とする。<br> (a) <span class=\"chem\">angle ACB</span> のとり得る 2 つの値を求め (Find)、小数第 1 位まで答えなさい。 <strong>[4 marks]</strong><br> (b) 辺 <span class=\"chem\">AC</span> のとり得る 2 つの長さの正の差を求めなさい (Find)。 <strong>[3 marks]</strong>",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > data-title attribute
    "Apply the Sine Rule to find the acute angle C₁": "正弦定理を適用して鋭角 C₁ を求める",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > p
    "We know an opposite pair (∠A = 35° and BC = a = 7 cm) and side AB = c = 10 cm opposite ∠ACB.": "向かい合うペア（∠A = 35° と BC = a = 7 cm）と、∠ACB の対辺 AB = c = 10 cm がわかっています。",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > maths line
    "<i>C</i><sub>1</sub> = arcsin(0.81939…) = <b>55.0°</b> (55.024° unrounded) <b>[A1]</b>": "<i>C</i><sub>1</sub> = arcsin(0.81939…) = <b>55.0°</b> （丸める前は 55.024°） <b>[A1]</b>",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > data-title attribute
    "Subtract from 180° to find the obtuse angle C₂": "180° から引いて鈍角 C₂ を求める",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > p
    "Since a = 7 &lt; c = 10, the supplementary angle C₂ = 180° − C₁ also leaves room for angle A = 35° (125.0° + 35° = 160.0° &lt; 180°).": "a = 7 &lt; c = 10 なので、補角 C₂ = 180° − C₁ でも角 A = 35° の余地が残ります（125.0° + 35° = 160.0° &lt; 180°）。",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > maths line
    "<i>C</i><sub>2</sub> = 180° − 55.024° = <b>125.0°</b> (124.976° unrounded) <b>[A1]</b>": "<i>C</i><sub>2</sub> = 180° − 55.024° = <b>125.0°</b> （丸める前は 124.976°） <b>[A1]</b>",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > data-title attribute
    "Find the two lengths of AC (or use the Cosine Rule quadratic)": "AC の 2 つの長さを求める（または余弦定理の 2 次方程式を使う）",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > p
    "Method 1 uses the two values of ∠B = 180° − 35° − C. Method 2 sets up the Cosine Rule with b = AC: 7² = 10² + b² − 2(10)b cos 35°, which is b² − (20 cos 35°)b + 51 = 0!": "解法 1 は ∠B = 180° − 35° − C の 2 つの値を使います。解法 2 は b = AC として余弦定理 7² = 10² + b² − 2(10)b cos 35°、すなわち b² − (20 cos 35°)b + 51 = 0 を立てます！",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > maths line
    "Difference = 12.204 − 4.179 = <b>8.03 cm</b> (3 s.f.) <b>[A1]</b>": "差 = 12.204 − 4.179 = <b>8.03 cm</b> （有効数字 3 桁） <b>[A1]</b>",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > p
    "(a) 55.0° or 125.0°; (b) 8.03 cm": "(a) 55.0° または 125.0°；(b) 8.03 cm",

    // Triangle trigonometry, the ambiguous case and bearings > exam tip (shown in English + translation) > p
    "<strong>Exam shortcut for the difference between the two possible third sides:</strong> In any ambiguous SSA triangle with known angle <span class=\"chem\">A</span>, adjacent side <span class=\"chem\">c</span>, and opposite side <span class=\"chem\">a</span>, the two possible third sides <span class=\"chem\">b_1, b_2</span> are the roots of the Cosine Rule quadratic <span class=\"chem\">b^2 - (2c cos A)b + (c^2 - a^2) = 0</span>. By Vieta's root relations, the <strong>sum</strong> of the two possible lengths of <span class=\"chem\">AC</span> is simply <span class=\"chem\">b_1 + b_2 = 2c cos A</span>, and because the two positions of side <span class=\"chem\">a</span> form an isosceles triangle with base <span class=\"chem\">b_1 - b_2</span>, the <strong>difference</strong> is <span class=\"chem\">b_1 - b_2 = 2a cos C_1</span> (where <span class=\"chem\">C_1</span> is the acute angle opposite <span class=\"chem\">c</span>)!": "<strong>2 通りの第 3 辺の長さの差を求める試験の近道：</strong> 角 <span class=\"chem\">A</span>、隣辺 <span class=\"chem\">c</span>、対辺 <span class=\"chem\">a</span> が既知の 2 通りある SSA 三角形では、とり得る 2 つの第 3 辺 <span class=\"chem\">b_1, b_2</span> は余弦定理の 2 次方程式 <span class=\"chem\">b^2 - (2c cos A)b + (c^2 - a^2) = 0</span> の解です。解と係数の関係より、<span class=\"chem\">AC</span> の 2 つの長さの<strong>和</strong>は単に <span class=\"chem\">b_1 + b_2 = 2c cos A</span> であり、辺 <span class=\"chem\">a</span> のとり得る 2 つの位置が底辺 <span class=\"chem\">b_1 - b_2</span> の二等辺三角形を作るので、<strong>差</strong>は <span class=\"chem\">b_1 - b_2 = 2a cos C_1</span>（<span class=\"chem\">C_1</span> は <span class=\"chem\">c</span> の対角のうち鋭角の方）となります！",

    // Triangle trigonometry, the ambiguous case and bearings > h3
    "Three-figure bearings and angles of elevation/depression": "3 桁の方位角と仰角・俯角",

    // Triangle trigonometry, the ambiguous case and bearings > li
    "A <dfn data-def=\"A direction measured as a three-digit angle from 000° to 359° clockwise from North (360° is written 000°).\">three-figure true bearing</dfn> is always measured from <strong>North (<span class=\"mono\">000°</span>)</strong>, turning <strong>clockwise</strong>, and written with three digits (such as <span class=\"mono\">065°</span> or <span class=\"mono\">245°</span>). Always look for the word <strong>“from”</strong>: the bearing of <span class=\"chem\">B</span> <em>from</em> <span class=\"chem\">A</span> is measured at <span class=\"chem\">A</span>.": "<dfn data-def=\"北から時計回りに 000° 〜 359° の範囲で測り、3 桁の数字で表す角度（360° は 000° と書きます）。\">方位角 <span class=\"en-term\">(three-figure true bearing)</span></dfn> は、常に<strong>北（<span class=\"mono\">000°</span>）</strong>から<strong>時計回り</strong>に測り、3 桁（<span class=\"mono\">065°</span> や <span class=\"mono\">245°</span> など）で表記します。必ず<strong>「from」</strong>という語に注目しましょう：<span class=\"chem\">B</span> <em>from</em> <span class=\"chem\">A</span> は <span class=\"chem\">A</span> の位置で測ります。",

    // Triangle trigonometry, the ambiguous case and bearings > data-def attribute
    "A direction measured as a three-digit angle from 000° to 359° clockwise from North (360° is written 000°).": "北から時計回りに 000° 〜 359° の範囲で測り、3 桁の数字で表す角度（360° は 000° と書きます）。",

    // Triangle trigonometry, the ambiguous case and bearings > li
    "An <strong>angle of elevation</strong> (looking up) and an <strong>angle of depression</strong> (looking down) are always measured from the <strong>horizontal</strong>—never from a vertical wall or mast. Because horizontal lines are parallel, the angle of elevation of <span class=\"chem\">B</span> from <span class=\"chem\">A</span> equals the angle of depression of <span class=\"chem\">A</span> from <span class=\"chem\">B</span> (alternate interior angles).": "<strong>仰角</strong>（見上げる角）と<strong>俯角</strong>（見下ろす角）は、必ず<strong>水平線</strong>から測ります（鉛直な壁やマストからではありません）。水平線は平行なので、<span class=\"chem\">A</span> から <span class=\"chem\">B</span> への仰角は <span class=\"chem\">B</span> から <span class=\"chem\">A</span> への俯角と等しくなります（錯角）。",

    // Triangle trigonometry, the ambiguous case and bearings > try it > p
    "In triangle <span class=\"chem\">PQR</span>, <span class=\"chem\">PQ = 9 cm</span>, <span class=\"chem\">QR = 8 cm</span>, and the obtuse angle <span class=\"chem\">angle PQR</span> satisfies <span class=\"chem\">cos(angle PQR) = -1/2</span>. Find the area of triangle <span class=\"chem\">PQR</span> to 3 significant figures.": "三角形 <span class=\"chem\">PQR</span> において、<span class=\"chem\">PQ = 9 cm</span>、<span class=\"chem\">QR = 8 cm</span> であり、鈍角 <span class=\"chem\">angle PQR</span> が <span class=\"chem\">cos(angle PQR) = -1/2</span> を満たす。三角形 <span class=\"chem\">PQR</span> の面積を求め (Find)、有効数字 3 桁で答えなさい。",

    // Triangle trigonometry, the ambiguous case and bearings > try it > li
    "If <span class=\"chem\">cos(angle PQR) = -1/2</span>, then <span class=\"chem\">angle PQR = 120°</span> (or use <span class=\"chem\">sin(angle PQR) = sqrt(1 - (-1/2)^2) = sqrt(3)/2</span>).": "<span class=\"chem\">cos(angle PQR) = -1/2</span> なら <span class=\"chem\">angle PQR = 120°</span> です（または <span class=\"chem\">sin(angle PQR) = sqrt(1 - (-1/2)^2) = sqrt(3)/2</span> を使います）。",

    // Triangle trigonometry, the ambiguous case and bearings > try it > li
    "Substitute into <span class=\"chem\">Area = (1/2) × PQ × QR × sin(angle PQR) = (1/2) × 9 × 8 × (sqrt(3)/2)</span>.": "<span class=\"chem\">Area = (1/2) × PQ × QR × sin(angle PQR) = (1/2) × 9 × 8 × (sqrt(3)/2)</span> に代入します。",

    // Triangle trigonometry, the ambiguous case and bearings > try it > maths line
    "sin(∠<i>PQR</i>) = <span class=\"frac\"><span>√3</span><span>2</span></span> ⇒ Area = <span class=\"frac\"><span>1</span><span>2</span></span>(9)(8)<span class=\"frac\"><span>√3</span><span>2</span></span> = 18√3 ≈ <b>31.2 cm<sup>2</sup></b>": "sin(∠<i>PQR</i>) = <span class=\"frac\"><span>√3</span><span>2</span></span> ⇒ 面積 = <span class=\"frac\"><span>1</span><span>2</span></span>(9)(8)<span class=\"frac\"><span>√3</span><span>2</span></span> = 18√3 ≈ <b>31.2 cm<sup>2</sup></b>",

    // Radian measure, arcs, sectors and circular segments > data-toc attribute
    "Radians, sectors & segments": "弧度法・扇形と弓形",

    // Radian measure, arcs, sectors and circular segments > h2
    "Radian measure, arcs, sectors and circular segments": "弧度法（ラジアン）・弧・扇形と弓形",

    // Radian measure, arcs, sectors and circular segments > p
    "Degrees (<span class=\"mono\">360°</span> in a circle) are a historical convention. In higher mathematics and calculus, we measure angles in <dfn data-def=\"The angle subtended at the centre of a circle of radius r by an arc of length r. One full revolution is 2π radians.\">radians</dfn>: one radian is the angle subtended at the centre of a circle of radius <span class=\"chem\">r</span> by an arc of length <span class=\"chem\">r</span>. Since the circumference of a full circle is <span class=\"chem\">2pi r</span>, a full turn of <span class=\"mono\">360°</span> is <span class=\"chem\">2pi</span> radians, so <span class=\"chem\">pi rad = 180°</span>.": "度数法（1 周 <span class=\"mono\">360°</span>）は歴史的な慣習です。高等数学や微積分では角度を<dfn data-def=\"半径 r の円において、長さ r の弧に対する中心角。1 周は 2π ラジアン。\">ラジアン <span class=\"en-term\">(radians)</span></dfn>（弧度法）で測ります：1 ラジアンとは、半径 <span class=\"chem\">r</span> の円において長さ <span class=\"chem\">r</span> の弧に対する中心角です。円周は <span class=\"chem\">2pi r</span> なので、1 周 <span class=\"mono\">360°</span> は <span class=\"chem\">2pi</span> ラジアンとなり、<span class=\"chem\">pi rad = 180°</span> です。",

    // Radian measure, arcs, sectors and circular segments > data-def attribute
    "The angle subtended at the centre of a circle of radius r by an arc of length r. One full revolution is 2π radians.": "半径 r の円において、長さ r の弧に対する中心角。1 周は 2π ラジアン。",

    // Radian measure, arcs, sectors and circular segments > equation > dd
    "radius of the circle": "円の半径",

    // Radian measure, arcs, sectors and circular segments > equation > dd
    "central angle <strong>measured in radians</strong> (<span class=\"chem\">theta = deg × pi / 180</span>)": "<strong>ラジアン単位で測った</strong>中心角（<span class=\"chem\">theta = deg × pi / 180</span>）",

    // Radian measure, arcs, sectors and circular segments > equation > dd
    "arc length subtended by angle <i>θ</i>": "中心角 <i>θ</i> に対する弧の長さ",

    // Radian measure, arcs, sectors and circular segments > equation > dt
    "A<sub>segment</sub>": "A<sub>segment</sub>",

    // Radian measure, arcs, sectors and circular segments > equation > dd
    "area between chord and arc: sector area <span class=\"chem\">(1/2)r^2theta</span> minus triangle area <span class=\"chem\">(1/2)r^2 sin(theta)</span>": "弦と弧の間の面積（弓形）：扇形の面積 <span class=\"chem\">(1/2)r^2theta</span> から三角形の面積 <span class=\"chem\">(1/2)r^2 sin(theta)</span> を引いたもの",

    // Radian measure, arcs, sectors and circular segments > formula booklet note > p
    "<strong>What is in the Formula Booklet vs what you must derive:</strong> Your booklet gives <span class=\"chem\">l = rθ</span> and <span class=\"chem\">A = (1/2)r^2theta</span>. It does <strong>not</strong> print the circular segment formula <span class=\"chem\">A_{segment} = (1/2)r^2(theta - sin(theta))</span> or the chord length formula <span class=\"chem\">AB = 2r sin(theta/2) = r sqrt(2 - 2 cos(theta))</span>—you construct these by subtracting or solving the isosceles triangle <span class=\"chem\">OAB</span> with two sides of length <span class=\"chem\">r</span>.": "<strong>公式集に載っているもの vs 自分で導くもの：</strong> 公式集には <span class=\"chem\">l = rθ</span> と <span class=\"chem\">A = (1/2)r^2theta</span> が載っています。弓形の面積公式 <span class=\"chem\">A_{segment} = (1/2)r^2(theta - sin(theta))</span> や弦の長さの公式 <span class=\"chem\">AB = 2r sin(theta/2) = r sqrt(2 - 2 cos(theta))</span> は載って<strong>いません</strong>。これらは 2 辺の長さが <span class=\"chem\">r</span> の二等辺三角形 <span class=\"chem\">OAB</span> を引くか解くかして自分で導きます。",

    // Radian measure, arcs, sectors and circular segments > widget > data-title attribute
    "Radian Sector, Arc & Shaded Segment Visualizer": "弧度法の扇形・弧・弓形ビジュアライザー",

    // Radian measure, arcs, sectors and circular segments > widget > figcaption
    "Drag the radius <i>r</i> and central angle <i>θ</i> (in radians). Compare the full sector area ½<i>r</i>²<i>θ</i>, the isosceles triangle area ½<i>r</i>² sin <i>θ</i>, and the shaded circular segment ½<i>r</i>²(<i>θ</i> − sin <i>θ</i>), as well as the arc length <i>rθ</i> versus the straight chord length 2<i>r</i> sin(<i>θ</i>/2).": "半径 <i>r</i> と中心角 <i>θ</i>（ラジアン）をドラッグして動かしましょう。扇形全体の面積 ½<i>r</i>²<i>θ</i>、二等辺三角形の面積 ½<i>r</i>² sin <i>θ</i>、影のついた弓形の面積 ½<i>r</i>²(<i>θ</i> − sin <i>θ</i>) と、弧の長さ <i>rθ</i>・弦の長さ 2<i>r</i> sin(<i>θ</i>/2) を比較できます。",

    // Radian measure, arcs, sectors and circular segments > worked example > data-kicker attribute
    "Worked example 3 (SL 3.4)": "例題 3 (SL 3.4)",

    // Radian measure, arcs, sectors and circular segments > worked example > h3
    "Perimeter and area of a circular segment": "弓形の周の長さと面積",

    // Radian measure, arcs, sectors and circular segments > worked example > p
    "A circle with centre <span class=\"chem\">O</span> and radius <span class=\"mono\">8 cm</span> has points <span class=\"chem\">A</span> and <span class=\"chem\">B</span> on its circumference such that <span class=\"chem\">angle AOB = 1.5</span> radians.<br> (a) Find the perimeter of the minor segment bounded by the chord <span class=\"chem\">AB</span> and the minor arc <span class=\"chem\">AB</span>, to 3 significant figures. <strong>[4 marks]</strong><br> (b) Find the area of this minor segment, to 3 significant figures. <strong>[3 marks]</strong>": "中心 <span class=\"chem\">O</span>、半径 <span class=\"mono\">8 cm</span> の円の周上に 2 点 <span class=\"chem\">A</span>, <span class=\"chem\">B</span> があり、<span class=\"chem\">angle AOB = 1.5</span> ラジアンである。<br> (a) 弦 <span class=\"chem\">AB</span> と劣弧 <span class=\"chem\">AB</span> で囲まれた小さい方の弓形の周の長さを求め (Find)、有効数字 3 桁で答えなさい。 <strong>[4 marks]</strong><br> (b) この小さい方の弓形の面積を求め (Find)、有効数字 3 桁で答えなさい。 <strong>[3 marks]</strong>",

    // Radian measure, arcs, sectors and circular segments > worked example > data-title attribute
    "Calculate the arc length l = rθ": "弧の長さ l = rθ を計算する",

    // Radian measure, arcs, sectors and circular segments > worked example > p
    "Since θ = 1.5 is already in radians, multiply directly by r = 8 cm.": "θ = 1.5 はすでにラジアン単位なので、そのまま r = 8 cm を掛けます。",

    // Radian measure, arcs, sectors and circular segments > worked example > data-title attribute
    "Find the chord length AB using triangle OAB": "三角形 OAB を使って弦の長さ AB を求める",

    // Radian measure, arcs, sectors and circular segments > worked example > p
    "Triangle OAB is isosceles with OA = OB = 8 cm and ∠AOB = 1.5 rad. Use the Cosine Rule or bisect ∠AOB into two right triangles: AB = 2r sin(θ/2).": "三角形 OAB は OA = OB = 8 cm、∠AOB = 1.5 rad の二等辺三角形です。余弦定理を使うか、∠AOB を二等分して 2 つの直角三角形に分けると AB = 2r sin(θ/2) となります。",

    // Radian measure, arcs, sectors and circular segments > worked example > maths line
    "Perimeter of segment = <i>l</i> + <i>AB</i> = 12 + 10.9062 = <b>22.9 cm</b> (3 s.f.) <b>[A1]</b>": "弓形の周の長さ = <i>l</i> + <i>AB</i> = 12 + 10.9062 = <b>22.9 cm</b> （有効数字 3 桁） <b>[A1]</b>",

    // Radian measure, arcs, sectors and circular segments > worked example > data-title attribute
    "Subtract the triangle area from the sector area": "扇形の面積から三角形の面積を引く",

    // Radian measure, arcs, sectors and circular segments > worked example > p
    "The minor segment is what remains of sector OAB after removing triangle OAB.": "小さい方の弓形は、扇形 OAB から三角形 OAB を取り除いた残りです。",

    // Radian measure, arcs, sectors and circular segments > worked example > p
    "(a) 22.9 cm; (b) 16.1 cm²": "(a) 22.9 cm；(b) 16.1 cm²",

    // Radian measure, arcs, sectors and circular segments > common mistake > p
    "<strong>Perimeter of a sector vs perimeter of a segment:</strong> Read carefully! The perimeter of a <strong>sector</strong> includes the two straight radii (<span class=\"chem\">P_{sector} = 2r + rθ</span>), whereas the perimeter of a <strong>segment</strong> is the arc plus the chord (<span class=\"chem\">P_{segment} = rθ + 2r sin(theta/2)</span>).": "<strong>扇形の周の長さ vs 弓形の周の長さ：</strong> よく読みましょう！<strong>扇形</strong>の周の長さには 2 本の半径が含まれます（<span class=\"chem\">P_{sector} = 2r + rθ</span>）が、<strong>弓形</strong>の周の長さは弧と弦の和です（<span class=\"chem\">P_{segment} = rθ + 2r sin(theta/2)</span>）。",

    // Radian measure, arcs, sectors and circular segments > try it > p
    "A sector of a circle of radius <span class=\"chem\">r = 6 cm</span> has total perimeter <span class=\"mono\">19.5 cm</span>. Find the central angle <span class=\"chem\">theta</span> in radians.": "半径 <span class=\"chem\">r = 6 cm</span> の円の扇形の周の長さが <span class=\"mono\">19.5 cm</span> である。中心角 <span class=\"chem\">theta</span> をラジアンで求めなさい (Find)。",

    // Radian measure, arcs, sectors and circular segments > try it > li
    "The perimeter of a sector consists of two radii plus the arc length: <span class=\"chem\">P = 2r + rθ</span>.": "扇形の周の長さは 2 本の半径と弧の長さの和です：<span class=\"chem\">P = 2r + rθ</span>。",

    // Radian measure, arcs, sectors and circular segments > try it > li
    "Substitute <span class=\"chem\">r = 6</span> into <span class=\"chem\">12 + 6theta = 19.5</span> and solve for <span class=\"chem\">theta</span>.": "<span class=\"chem\">r = 6</span> を代入した <span class=\"chem\">12 + 6theta = 19.5</span> を <span class=\"chem\">theta</span> について解きます。",

    // Exam-style practice > data-toc attribute
    // Exam-style practice > h2
    "Exam-style practice": "実戦形式の演習",

    // Exam-style practice > p
    "Three progressive sets testing 3D geometry, non-right triangles, bearings, and radians. Questions you have not yet answered correctly are served first.": "空間図形、一般の三角形、方位角、弧度法を段階的に練習できる 3 つのセットです。まだ正解していない問題が優先的に出題されます。",

    // Exam-style practice > h3
    "Foundation: core formulas and one-step checks": "基礎：基本公式と 1 ステップの確認",

    // Exam-style practice > data-title attribute
    "3.1 foundation": "3.1 基礎",

    // Exam-style practice > h3
    "Exam standard: Paper 1 (No GDC) and Paper 2 (GDC)": "試験標準：Paper 1（電卓不可）と Paper 2（GDC 可）",

    // Exam-style practice > data-title attribute
    "3.1 exam standard": "3.1 試験標準",

    // Exam-style practice > h3
    "Challenge: level 7 multi-step geometry": "発展：レベル 7 の多段階図形問題",

    // Exam-style practice > data-title attribute
    "3.1 challenge": "3.1 発展",

    // widget string (assets/js/widgets-t3-1.js)
    "a < b sin A: side a is too short to reach the base (0 triangles)": "a < b sin A：辺 a が短すぎて底辺に届きません（三角形 0 個）",

    // widget string (assets/js/widgets-t3-1.js)
    "0 (a < b sin A)": "0 個 (a < b sin A)",

    // widget string (assets/js/widgets-t3-1.js)
    "1 right triangle (a = b sin A)": "直角三角形 1 個 (a = b sin A)",

    // widget string (assets/js/widgets-t3-1.js)
    "2 triangles (Ambiguous SSA!)": "2 個の三角形（SSA の 2 通り！）",

    // widget string (assets/js/widgets-t3-1.js)
    "1 triangle (a ≥ b)": "1 個の三角形 (a ≥ b)",

    // widget string (assets/js/widgets-t3-1.js)
    "Invalid (> 180° − A)": "不適 (> 180° − A)",

  }
});
