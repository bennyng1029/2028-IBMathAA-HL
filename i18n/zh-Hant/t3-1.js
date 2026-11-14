/* t3-1 — zh-Hant translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't3-1', {
  strings: {

    // page title (browser tab)
    "3.1 3D geometry, triangle trigonometry and radians | Analysis Lab": "3.1 3D幾何、三角形三角學與弧度 | Analysis Lab",

    // 3D geometry, triangle trigonometry and radians > page header > p
    "Topic 3.1 · SL 3.1–3.4": "課題 3.1 · SL 3.1–3.4",

    // 3D geometry, triangle trigonometry and radians > page header > h1
    "3D geometry, triangle trigonometry and radians": "3D幾何、三角形三角學與弧度",

    // 3D geometry, triangle trigonometry and radians > page header > span
    "How do we measure distances, angles, and areas in three-dimensional solids, non-right triangles, and circular sectors?": "我們如何量度3D立體、非直角三角形及圓扇形中的距離、角度與面積？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "學習清單",

    // What you need to be able to do > h2
    "What you need to be able to do": "你需要掌握的能力",

    // What you need to be able to do > p
    "Tick each item once you can do it confidently without checking your notes. Everything on this page is SL core (tested on both SL and HL papers).": "當你有信心在不查閱筆記的情況下完成每項時，便可剔選該項。本頁所有內容皆為 SL 核心課程（SL 及 HL 試卷均會考核）。",

    // What you need to be able to do > checklist > span
    "Find the distance <span class=\"chem\">d</span> and midpoint <span class=\"chem\">M</span> between two points in 3D space <span class=\"chem\">(x_1, y_1, z_1)</span> and <span class=\"chem\">(x_2, y_2, z_2)</span>.": "求3D空間中兩點 <span class=\"chem\">(x_1, y_1, z_1)</span> 與 <span class=\"chem\">(x_2, y_2, z_2)</span> 之間的距離 <span class=\"chem\">d</span> 與中點 <span class=\"chem\">M</span>。",

    // What you need to be able to do > checklist > span
    "Calculate the volume and surface area of right pyramids, right cones, spheres, hemispheres, and composite 3D solids.": "計算直立角錐體、直立圓錐體、球體、半球體及複合3D立體的體積與表面面積。",

    // What you need to be able to do > checklist > span
    "Find the angle between a line and a plane in a 3D solid by dropping a perpendicular to form a right-angled triangle.": "透過作垂線構成直角三角形，求3D立體中直線與平面的交角。",

    // What you need to be able to do > checklist > span
    "Apply the sine rule, cosine rule, and triangle area formula <span class=\"chem\">A = (1/2)ab sin C</span> in non-right-angled triangles.": "在非直角三角形中應用正弦定律、餘弦定律及三角形面積公式 <span class=\"chem\">A = (1/2)ab sin C</span>。",

    // What you need to be able to do > checklist > span
    "Recognize and solve the ambiguous case (<span class=\"chem\">SSA</span>) of the sine rule using both <span class=\"chem\">theta</span> and <span class=\"chem\">180° - theta</span> (or <span class=\"chem\">pi - theta</span>).": "辨識並利用 <span class=\"chem\">theta</span> 與 <span class=\"chem\">180° - theta</span>（或 <span class=\"chem\">pi - theta</span>）解正弦定律的兩義情況（<span class=\"chem\">SSA</span>）。",

    // What you need to be able to do > checklist > span
    "Draw and solve diagrams involving angles of elevation, angles of depression, and three-figure true bearings (<span class=\"mono\">000°</span> to <span class=\"mono\">359°</span> clockwise from North).": "繪畫並解涉及仰角、俯角及三位真方位角（由正北順時針量度 <span class=\"mono\">000°</span> 至 <span class=\"mono\">359°</span>）的圖像問題。",

    // What you need to be able to do > checklist > span
    "Convert between degrees and radians (<span class=\"chem\">pi rad = 180°</span>) and compute arc length <span class=\"chem\">l = rθ</span>, sector area <span class=\"chem\">A = (1/2)r^2theta</span>, chord length, and circular segment area.": "在度與弧度之間轉換（<span class=\"chem\">pi rad = 180°</span>），並計算弧長 <span class=\"chem\">l = rθ</span>、扇形面積 <span class=\"chem\">A = (1/2)r^2theta</span>、弦長及弓形面積。",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "題型解碼",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "題型解碼：辨識應採用的技巧",

    // Question decoder: spotting which technique to use > p
    "Geometry and trigonometry questions on IB exams rarely tell you which rule to use. Instead, they give you a diagram or a word clue. Use this table to translate exam phrasing directly into your first line of working.": "IB 考試中的幾何與三角學題目很少直接告訴你要用哪條公式，而是給你圖像或字眼提示。利用下表把考題字眼直接轉化為你的第一行算式。",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — 3D geometry, triangles and radians": "題型解碼 — 3D幾何、三角形與弧度",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "題目中的常見字眼",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "實際含義（公式與列式）",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1（不可用計算機）與 Paper 2（可用 GDC）策略",

    // Question decoder: spotting which technique to use > table > th
    "Triangle with a known <strong>opposite pair</strong> (an angle and its opposite side) plus 1 extra side or angle": "三角形中已知一對<strong>對邊與對角</strong>，另加 1 條邊或 1 個角",

    // Question decoder: spotting which technique to use > table > td
    "Use the <strong>Sine Rule</strong>: <span class=\"chem\">a / sin A = b / sin B</span>.": "使用<strong>正弦定律</strong>：<span class=\"chem\">a / sin A = b / sin B</span>。",

    // Question decoder: spotting which technique to use > table > td
    "If finding an angle from <span class=\"chem\">sin B = k</span>, always check whether the obtuse supplement <span class=\"chem\">180° - B</span> is also valid!": "若由 <span class=\"chem\">sin B = k</span> 求角，務必檢查鈍角補角 <span class=\"chem\">180° - B</span> 是否同樣成立！",

    // Question decoder: spotting which technique to use > table > th
    "Triangle with <strong>two sides and the included angle (SAS)</strong> or <strong>all three sides (SSS)</strong>": "三角形中已知<strong>兩邊及其夾角 (SAS)</strong> 或<strong>三邊長度 (SSS)</strong>",

    // Question decoder: spotting which technique to use > table > td
    "Use the <strong>Cosine Rule</strong>: <span class=\"chem\">c^2 = a^2 + b^2 - 2ab cos C</span> or <span class=\"chem\">cos C = (a^2 + b^2 - c^2) / (2ab)</span>.": "使用<strong>餘弦定律</strong>：<span class=\"chem\">c^2 = a^2 + b^2 - 2ab cos C</span> 或 <span class=\"chem\">cos C = (a^2 + b^2 - c^2) / (2ab)</span>。",

    // Question decoder: spotting which technique to use > table > td
    "Cosine rule never has an ambiguous case: if <span class=\"chem\">cos C &lt; 0</span>, the angle <span class=\"chem\">C</span> is obtuse (<span class=\"chem\">90° &lt; C &lt; 180°</span>).": "餘弦定律絕無兩義情況：若 <span class=\"chem\">cos C &lt; 0</span>，角 <span class=\"chem\">C</span> 即為鈍角（<span class=\"chem\">90° &lt; C &lt; 180°</span>）。",

    // Question decoder: spotting which technique to use > table > th
    "“There are <strong>two possible triangles</strong> <span class=\"chem\">ABC</span>” or “Find the <strong>two possible values</strong> of <span class=\"chem\">AB</span>”": "「存在<strong>兩個可能的三角形</strong> <span class=\"chem\">ABC</span>」或「求 <span class=\"chem\">AB</span> 的<strong>兩個可能值</strong>」",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Ambiguous Case (SSA)</strong>! Given angle <span class=\"chem\">A</span>, adjacent side <span class=\"chem\">b</span>, and opposite side <span class=\"chem\">a &lt; b</span>: the two possible angles opposite <span class=\"chem\">b</span> are <span class=\"chem\">B_1 = arcsin((b sin A)/a)</span> (acute) and <span class=\"chem\">B_2 = 180° - B_1</span> (obtuse).": "<strong>兩義情況 (SSA)</strong>！已知角 <span class=\"chem\">A</span>、鄰邊 <span class=\"chem\">b</span> 與對邊 <span class=\"chem\">a &lt; b</span>：<span class=\"chem\">b</span> 的對角有兩個可能值：<span class=\"chem\">B_1 = arcsin((b sin A)/a)</span>（銳角）及 <span class=\"chem\">B_2 = 180° - B_1</span>（鈍角）。",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Fast alternative for the two lengths of <span class=\"chem\">AB = c</span></strong>: write the Cosine Rule using the known angle <span class=\"chem\">A</span>: <span class=\"chem\">a^2 = b^2 + c^2 - 2bc cos A</span>, and solve the <strong>quadratic in <span class=\"chem\">c</span></strong>!": "<strong>求 <span class=\"chem\">AB = c</span> 兩個長度的快捷方法</strong>：以已知角 <span class=\"chem\">A</span> 寫出餘弦定律：<span class=\"chem\">a^2 = b^2 + c^2 - 2bc cos A</span>，再解關於 <span class=\"chem\">c</span> 的<strong>二次方程</strong>！",

    // Question decoder: spotting which technique to use > table > th
    "“Find the angle between edge <span class=\"chem\">VA</span> and the horizontal base <span class=\"chem\">ABCD</span>”": "「求稜 <span class=\"chem\">VA</span> 與水平底面 <span class=\"chem\">ABCD</span> 之間的交角」",

    // Question decoder: spotting which technique to use > table > td
    "Drop a perpendicular from <span class=\"chem\">V</span> to its shadow <span class=\"chem\">M</span> on the base. Find <span class=\"chem\">angle VAM</span> inside the right-angled triangle <span class=\"chem\">VMA</span>.": "從 <span class=\"chem\">V</span> 向底面作垂線至其投影 <span class=\"chem\">M</span>，在直角三角形 <span class=\"chem\">VMA</span> 中求 <span class=\"chem\">angle VAM</span>。",

    // Question decoder: spotting which technique to use > table > td
    "Do <strong>not</strong> use the slant height of a triangular face! For a square base of side <span class=\"chem\">s</span>, the half-diagonal is <span class=\"chem\">AM = (s sqrt(2))/2</span>.": "<strong>切勿</strong>誤用三角形側面的斜高！對於邊長為 <span class=\"chem\">s</span> 的正方形底面，半對角線為 <span class=\"chem\">AM = (s sqrt(2))/2</span>。",

    // Question decoder: spotting which technique to use > table > th
    "“Ship <span class=\"chem\">B</span> is on a <strong>bearing of <span class=\"mono\">135°</span> from <span class=\"chem\">A</span></strong>”": "「船 <span class=\"chem\">B</span> 在<strong>由 <span class=\"chem\">A</span> 測得的方位角 <span class=\"mono\">135°</span></strong> 處」",

    // Question decoder: spotting which technique to use > table > td
    "Draw a North arrow <strong>at <span class=\"chem\">A</span></strong> (the “from” point) and measure <span class=\"mono\">135°</span> clockwise. Parallel North arrows at <span class=\"chem\">A</span> and <span class=\"chem\">B</span> form co-interior angles adding to <span class=\"mono\">180°</span>.": "<strong>在 <span class=\"chem\">A</span> 點</strong>（即「由」的起點）畫正北方向箭號，順時針量度 <span class=\"mono\">135°</span>。<span class=\"chem\">A</span> 與 <span class=\"chem\">B</span> 處平行的正北線形成同旁內角，兩角之和為 <span class=\"mono\">180°</span>。",

    // Question decoder: spotting which technique to use > table > td
    "Write final bearings with 3 digits (e.g. <span class=\"mono\">042°</span>, not <span class=\"mono\">42°</span>). The back-bearing from <span class=\"chem\">B</span> to <span class=\"chem\">A</span> differs by <span class=\"mono\">180°</span>.": "最終方位角須以 3 位數字寫出（例如 <span class=\"mono\">042°</span>，而非 <span class=\"mono\">42°</span>）。由 <span class=\"chem\">B</span> 到 <span class=\"chem\">A</span> 的反方位角相差 <span class=\"mono\">180°</span>。",

    // Question decoder: spotting which technique to use > table > th
    "“Find the area of the <strong>shaded segment</strong> bounded by chord <span class=\"chem\">AB</span> and arc <span class=\"chem\">AB</span>”": "「求由弦 <span class=\"chem\">AB</span> 與弧 <span class=\"chem\">AB</span> 所圍成的<strong>陰影弓形</strong>面積」",

    // Question decoder: spotting which technique to use > table > td
    "<span class=\"chem\">A_{segment} = A_{sector} - A_{triangle} = (1/2)r^2theta - (1/2)r^2 sin(theta) = (1/2)r^2(theta - sin(theta))</span>.": "<span class=\"chem\">A_{segment} = A_{sector} - A_{triangle} = (1/2)r^2theta - (1/2)r^2 sin(theta) = (1/2)r^2(theta - sin(theta))</span>。",

    // Question decoder: spotting which technique to use > table > td
    "<span class=\"chem\">theta</span> <strong>must be in radians</strong>! Switch your GDC to <strong>RAD</strong> mode before computing <span class=\"chem\">sin(theta)</span>.": "<span class=\"chem\">theta</span> <strong>必須以弧度為單位</strong>！計算 <span class=\"chem\">sin(theta)</span> 前請將 GDC 切換至 <strong>RAD</strong> 模式。",

    // Three-dimensional space, solids and angles with a plane > data-toc attribute
    "3D space & solids": "3D空間與立體",

    // Three-dimensional space, solids and angles with a plane > h2
    "Three-dimensional space, solids and angles with a plane": "3D空間、立體與線面交角",

    // Three-dimensional space, solids and angles with a plane > p
    "Three-dimensional coordinate geometry extends the 2D Pythagoras and average formulas by adding a third coordinate <span class=\"chem\">z</span>. Think of <span class=\"chem\">(x, y)</span> as your position on the floor of a room and <span class=\"chem\">z</span> as your height above the floor.": "3D坐標幾何透過加入第三個坐標 <span class=\"chem\">z</span>，把2D畢氏定理與中點公式推廣至空間。可以把 <span class=\"chem\">(x, y)</span> 想像為房間地面上的位置，而 <span class=\"chem\">z</span> 則是離地面的高度。",

    // Three-dimensional space, solids and angles with a plane > equation > dd
    "straight-line distance between two 3D points (space diagonal of a box)": "兩3D點之間的直線距離（長方體的空間對角線）",

    // Three-dimensional space, solids and angles with a plane > equation > dd
    "coordinates of the midpoint of the line segment joining the two points": "連接兩點的線段之中點坐標",

    // Three-dimensional space, solids and angles with a plane > h3
    "Volumes and surface areas of 3D solids": "3D立體的體積與表面面積",

    // Three-dimensional space, solids and angles with a plane > p
    "The SL 3.1 section of your IB Formula Booklet gives the volume and curved surface area formulas for right pyramids, right cones, and spheres. Notice the pattern: any solid that tapers to a sharp apex (a pyramid or a cone) has volume equal to <strong>one-third</strong> of its base area times its perpendicular height <span class=\"chem\">h</span>.": "IB 公式手冊的 SL 3.1 部分列出了直立角錐體、直立圓錐體及球體的體積與曲面面積公式。留意其規律：任何向上收窄至尖頂的立體（角錐體或圓錐體），其體積均等於底面積乘以垂直高 <span class=\"chem\">h</span> 的<strong>三分之一</strong>。",

    // Three-dimensional space, solids and angles with a plane > table > caption
    "3D solids in the IB Formula Booklet (SL 3.1 section)": "IB 公式手冊中的3D立體（SL 3.1 部分）",

    // Three-dimensional space, solids and angles with a plane > table > th
    "Solid": "立體",

    // Three-dimensional space, solids and angles with a plane > table > th
    "Volume <span class=\"chem\">V</span>": "體積 <span class=\"chem\">V</span>",

    // Three-dimensional space, solids and angles with a plane > table > th
    "Surface area <span class=\"chem\">A</span>": "表面面積 <span class=\"chem\">A</span>",

    // Three-dimensional space, solids and angles with a plane > table > th
    "Key right-triangle link": "關鍵直角三角形關係",

    // Three-dimensional space, solids and angles with a plane > table > th
    "Right pyramid": "直立角錐體",

    // Three-dimensional space, solids and angles with a plane > table > td
    "<span class=\"chem\">V = (1/3)Ah</span> &nbsp;(where <span class=\"chem\">A</span> is base area)": "<span class=\"chem\">V = (1/3)Ah</span> &nbsp;（其中 <span class=\"chem\">A</span> 為底面積）",

    // Three-dimensional space, solids and angles with a plane > table > td
    "Base area <span class=\"chem\">+</span> sum of triangular slant faces": "底面積 <span class=\"chem\">+</span> 各三角形側面面積之和",

    // Three-dimensional space, solids and angles with a plane > table > td
    "Apex height <span class=\"chem\">h</span>, apothem/half-base, and slant height <span class=\"chem\">l</span> form a right triangle.": "頂點高 <span class=\"chem\">h</span>、邊心距／半底邊與斜高 <span class=\"chem\">l</span> 構成直角三角形。",

    // Three-dimensional space, solids and angles with a plane > table > th
    "Right circular cone": "直立圓錐體",

    // Three-dimensional space, solids and angles with a plane > table > td
    "<span class=\"chem\">V = (1/3)pi r^2 h</span>": "<span class=\"chem\">V = (1/3)pi r^2 h</span>",

    // Three-dimensional space, solids and angles with a plane > table > td
    "Curved: <span class=\"chem\">A_{curved} = pi r l</span><br>Total solid cone: <span class=\"chem\">pi r l + pi r^2</span>": "曲面面積：<span class=\"chem\">A_{curved} = pi r l</span><br>實心圓錐體總表面面積：<span class=\"chem\">pi r l + pi r^2</span>",

    // Three-dimensional space, solids and angles with a plane > table > td
    "Slant height <span class=\"chem\">l = sqrt(r^2 + h^2)</span>.": "斜高 <span class=\"chem\">l = sqrt(r^2 + h^2)</span>。",

    // Three-dimensional space, solids and angles with a plane > table > th
    "Sphere &amp; hemisphere": "球體與半球體",

    // Three-dimensional space, solids and angles with a plane > table > td
    "Sphere: <span class=\"chem\">V = (4/3)pi r^3</span><br>Hemisphere: <span class=\"chem\">V = (2/3)pi r^3</span>": "球體：<span class=\"chem\">V = (4/3)pi r^3</span><br>半球體：<span class=\"chem\">V = (2/3)pi r^3</span>",

    // Three-dimensional space, solids and angles with a plane > table > td
    "Sphere: <span class=\"chem\">A = 4pi r^2</span> (not <span class=\"chem\">r^3</span>)<br>Solid hemisphere: <span class=\"chem\">2pi r^2 + pi r^2 = 3pi r^2</span>": "球體：<span class=\"chem\">A = 4pi r^2</span>（不是 <span class=\"chem\">r^3</span>）<br>實心半球體：<span class=\"chem\">2pi r^2 + pi r^2 = 3pi r^2</span>",

    // Three-dimensional space, solids and angles with a plane > table > td
    "When a cone sits on a hemisphere, they share the circular radius <span class=\"chem\">r</span>.": "當圓錐體置於半球體上時，兩者共用圓底半徑 <span class=\"chem\">r</span>。",

    // Three-dimensional space, solids and angles with a plane > key idea > p
    "<strong>Angle between a line and a plane:</strong> Imagine shining a torch straight down from above the plane. The <dfn data-def=\"The acute angle between a line segment and its orthogonal projection (shadow) on the plane.\">angle between a line and a plane</dfn> is the angle between the line and its <strong>shadow</strong> (orthogonal projection) on the plane. Always drop a perpendicular from the top of the line to the plane to build a right-angled triangle.": "<strong>直線與平面的交角：</strong>想像從平面正上方垂直向下照射電筒。<dfn data-def=\"線段與其在平面上的正射影（投影）之間的銳角。\">直線與平面的交角 <span class=\"en-term\">(angle between a line and a plane)</span></dfn>就是該直線與它在平面上的<strong>影子</strong>（正射影）之間的夾角。務必從直線頂端向平面作垂線，以構造直角三角形。",

    // Three-dimensional space, solids and angles with a plane > key idea > data-def attribute
    "The acute angle between a line segment and its orthogonal projection (shadow) on the plane.": "線段與其在平面上的正射影（投影）之間的銳角。",

    // Three-dimensional space, solids and angles with a plane > worked example > data-kicker attribute
    "Worked example 1 (SL 3.1)": "例題 1（SL 3.1）",

    // Three-dimensional space, solids and angles with a plane > worked example > h3
    "Height, volume and edge-to-base angle in a right square-based pyramid": "直立正方底角錐體的高、體積與斜稜對底面交角",

    // Three-dimensional space, solids and angles with a plane > worked example > p
    "A right pyramid <span class=\"chem\">VABCD</span> has a horizontal square base <span class=\"chem\">ABCD</span> of side length <span class=\"mono\">10 cm</span>. Each sloping edge <span class=\"chem\">VA, VB, VC, VD</span> has length <span class=\"mono\">13 cm</span>. Let <span class=\"chem\">M</span> be the centre of the square base.": "直立角錐體 <span class=\"chem\">VABCD</span> 的水平正方形底面 <span class=\"chem\">ABCD</span> 邊長為 <span class=\"mono\">10 cm</span>。每條斜稜 <span class=\"chem\">VA, VB, VC, VD</span> 長度皆為 <span class=\"mono\">13 cm</span>。設 <span class=\"chem\">M</span> 為正方形底面的中心。",

    // Three-dimensional space, solids and angles with a plane > worked example > p
    "(a) Find the exact length of <span class=\"chem\">AM</span>, and hence find the vertical height <span class=\"chem\">VM</span>. <strong>[3 marks]</strong><br> (b) Calculate the volume of the pyramid, giving your answer to 3 significant figures. <strong>[2 marks]</strong><br> (c) Find the angle that the edge <span class=\"chem\">VA</span> makes with the base <span class=\"chem\">ABCD</span>. <strong>[2 marks]</strong>": "(a) 求 (Find) <span class=\"chem\">AM</span> 的準確長度，並由此求 (hence find) 垂直高 <span class=\"chem\">VM</span>。<strong>[3 marks]</strong><br> (b) 計算 (Calculate) 該角錐體的體積，答案準確至 3 位有效數字。<strong>[2 marks]</strong><br> (c) 求 (Find) 斜稜 <span class=\"chem\">VA</span> 與底面 <span class=\"chem\">ABCD</span> 的交角。<strong>[2 marks]</strong>",

    // Three-dimensional space, solids and angles with a plane > worked example > data-title attribute
    "Find the base diagonal AC and half-diagonal AM": "求底面對角線 AC 及半對角線 AM",

    // Three-dimensional space, solids and angles with a plane > worked example > p
    "The shadow of the edge VA on the horizontal base is the half-diagonal AM, from corner A to the centre M.": "斜稜 VA 在水平底面上的投影就是由頂點 A 至中心 M 的半對角線 AM。",

    // Three-dimensional space, solids and angles with a plane > worked example > data-title attribute
    "Use Pythagoras in the vertical right-angled triangle VMA": "在垂直直角三角形 VMA 中運用畢氏定理",

    // Three-dimensional space, solids and angles with a plane > worked example > p
    "Because the pyramid is a right pyramid, the apex V is directly above M, so ∠VMA = 90°.": "由於該角錐體為直立角錐體，頂點 V 位於 M 的正上方，故 ∠VMA = 90°。",

    // Three-dimensional space, solids and angles with a plane > worked example > data-title attribute
    "Compute the volume using V = (1/3)Ah": "利用 V = (1/3)Ah 計算體積",

    // Three-dimensional space, solids and angles with a plane > worked example > p
    "The base is a 10 cm by 10 cm square with area A = 100 cm².": "底面為 10 cm 乘 10 cm 的正方形，面積 A = 100 cm²。",

    // Three-dimensional space, solids and angles with a plane > worked example > data-title attribute
    "Find ∠VAM between edge VA and its shadow AM on the base": "求斜稜 VA 與其在底面投影 AM 之間的 ∠VAM",

    // Three-dimensional space, solids and angles with a plane > worked example > p
    "In right-angled triangle VMA, AM is adjacent to ∠VAM and VA = 13 cm is the hypotenuse.": "在直角三角形 VMA 中，AM 是 ∠VAM 的鄰邊，而 VA = 13 cm 是斜邊。",

    // Three-dimensional space, solids and angles with a plane > worked example > maths line
    "cos(∠<i>VAM</i>) = <span class=\"frac\"><span>5√2</span><span>13</span></span> ≈ 0.54393 ⇒ ∠<i>VAM</i> = arccos<span class=\"frac\"><span>5√2</span><span>13</span></span> ≈ <b>57.0°</b> (or 0.996 rad) <b>[M1 A1]</b>": "cos(∠<i>VAM</i>) = <span class=\"frac\"><span>5√2</span><span>13</span></span> ≈ 0.54393 ⇒ ∠<i>VAM</i> = arccos<span class=\"frac\"><span>5√2</span><span>13</span></span> ≈ <b>57.0°</b>（或 0.996 rad）<b>[M1 A1]</b>",

    // Three-dimensional space, solids and angles with a plane > worked example > p
    "(a) <i>AM</i> = 5√2 cm, <i>VM</i> = √119 cm ≈ 10.9 cm; (b) 364 cm³; (c) 57.0°": "(a) <i>AM</i> = 5√2 cm，<i>VM</i> = √119 cm ≈ 10.9 cm；(b) 364 cm³；(c) 57.0°",

    // Three-dimensional space, solids and angles with a plane > common mistake > p
    "<strong>Angle between two planes vs angle between a line and a plane:</strong> In the pyramid above, the angle between the <em>slant edge</em> <span class=\"chem\">VA</span> and the base is <span class=\"chem\">angle VAM</span> (using the half-diagonal <span class=\"chem\">AM = 5 sqrt(2)</span>). If a question asks for the angle between the <em>sloping triangular face</em> <span class=\"chem\">VAB</span> and the base, you must join <span class=\"chem\">V</span> and <span class=\"chem\">M</span> to the <strong>midpoint <span class=\"chem\">N</span> of side <span class=\"chem\">AB</span></strong> (both <span class=\"chem\">VN</span> and <span class=\"chem\">MN</span> are perpendicular to <span class=\"chem\">AB</span>, and <span class=\"chem\">MN = 5 cm</span>) and find <span class=\"chem\">angle VNM</span>!": "<strong>兩平面的交角與線面交角的分別：</strong>在上述角錐體中，<em>斜稜</em> <span class=\"chem\">VA</span> 與底面的交角是 <span class=\"chem\">angle VAM</span>（使用半對角線 <span class=\"chem\">AM = 5 sqrt(2)</span>）。若題目要求<em>斜三角形側面</em> <span class=\"chem\">VAB</span> 與底面的交角，你必須把 <span class=\"chem\">V</span> 與 <span class=\"chem\">M</span> 連至<strong>邊 <span class=\"chem\">AB</span> 的中點 <span class=\"chem\">N</span></strong>（<span class=\"chem\">VN</span> 與 <span class=\"chem\">MN</span> 均垂直於 <span class=\"chem\">AB</span>，且 <span class=\"chem\">MN = 5 cm</span>），並求 <span class=\"chem\">angle VNM</span>！",

    // Three-dimensional space, solids and angles with a plane > try it > p
    "A rectangular box (cuboid) has dimensions <span class=\"mono\">6 cm</span> by <span class=\"mono\">10 cm</span> by <span class=\"mono\">sqrt(89) cm</span>. Calculate the exact length of its longest internal space diagonal (from one bottom corner to the opposite top corner).": "一個長方體盒子的尺寸為 <span class=\"mono\">6 cm</span> 乘 <span class=\"mono\">10 cm</span> 乘 <span class=\"mono\">sqrt(89) cm</span>。計算 (Calculate) 其最長內部空間對角線（由一個底角至對面的頂角）的準確長度。",

    // Three-dimensional space, solids and angles with a plane > try it > li
    "By the 3D distance formula (3D Pythagoras), the space diagonal of a box with sides <span class=\"chem\">l, w, h</span> is <span class=\"chem\">d = sqrt(l^2 + w^2 + h^2)</span>.": "根據3D距離公式（3D畢氏定理），邊長為 <span class=\"chem\">l, w, h</span> 的長方體空間對角線為 <span class=\"chem\">d = sqrt(l^2 + w^2 + h^2)</span>。",

    // Three-dimensional space, solids and angles with a plane > try it > li
    "Substitute <span class=\"chem\">6^2 + 10^2 + (sqrt(89))^2 = 36 + 100 + 89</span> and take the square root.": "代入 <span class=\"chem\">6^2 + 10^2 + (sqrt(89))^2 = 36 + 100 + 89</span> 再取平方根。",

    // Triangle trigonometry, the ambiguous case and bearings > data-toc attribute
    "Triangles & ambiguous case": "三角形與兩義情況",

    // Triangle trigonometry, the ambiguous case and bearings > h2
    "Triangle trigonometry, the ambiguous case and bearings": "三角形三角學、兩義情況與方位角",

    // Triangle trigonometry, the ambiguous case and bearings > p
    "In any triangle <span class=\"chem\">ABC</span>, we label the side opposite angle <span class=\"chem\">A</span> as <span class=\"chem\">a</span>, opposite <span class=\"chem\">B</span> as <span class=\"chem\">b</span>, and opposite <span class=\"chem\">C</span> as <span class=\"chem\">c</span>. Three formulas in your Formula Booklet let you solve any triangle once you know three pieces of information (including at least one side).": "在任意三角形 <span class=\"chem\">ABC</span> 中，角 <span class=\"chem\">A</span> 的對邊記為 <span class=\"chem\">a</span>，角 <span class=\"chem\">B</span> 的對邊記為 <span class=\"chem\">b</span>，角 <span class=\"chem\">C</span> 的對邊記為 <span class=\"chem\">c</span>。公式手冊中的三條公式讓你只要知道三個條件（包括至少一條邊），便能解出任何三角形。",

    // Triangle trigonometry, the ambiguous case and bearings > equation > maths line
    "<span class=\"frac\"><span><i>a</i></span><span>sin <i>A</i></span></span> = <span class=\"frac\"><span><i>b</i></span><span>sin <i>B</i></span></span> = <span class=\"frac\"><span><i>c</i></span><span>sin <i>C</i></span></span>, &nbsp;&nbsp; <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − 2<i>ab</i> cos <i>C</i>, &nbsp;&nbsp; Area = <span class=\"frac\"><span>1</span><span>2</span></span><i>ab</i> sin <i>C</i>": "<span class=\"frac\"><span><i>a</i></span><span>sin <i>A</i></span></span> = <span class=\"frac\"><span><i>b</i></span><span>sin <i>B</i></span></span> = <span class=\"frac\"><span><i>c</i></span><span>sin <i>C</i></span></span>, &nbsp;&nbsp; <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − 2<i>ab</i> cos <i>C</i>, &nbsp;&nbsp; 面積 = <span class=\"frac\"><span>1</span><span>2</span></span><i>ab</i> sin <i>C</i>",

    // Triangle trigonometry, the ambiguous case and bearings > equation > dd
    "side lengths opposite interior angles <i>A</i>, <i>B</i>, <i>C</i>": "分別對着內角 <i>A</i>、<i>B</i>、<i>C</i> 的邊長",

    // Triangle trigonometry, the ambiguous case and bearings > equation > dt
    "cos C": "cos C",

    // Triangle trigonometry, the ambiguous case and bearings > equation > dd
    "rearranged form: cos <i>C</i> = (<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − <i>c</i><sup>2</sup>) / (2<i>ab</i>)": "移項形式：cos <i>C</i> = (<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − <i>c</i><sup>2</sup>) / (2<i>ab</i>)",

    // Triangle trigonometry, the ambiguous case and bearings > h3
    "Why the Sine Rule has an ambiguous case (SSA)": "為何正弦定律會出現兩義情況 (SSA)",

    // Triangle trigonometry, the ambiguous case and bearings > p
    "<strong>Before you start:</strong> the ambiguous case relies on <span class=\"chem\">sin(180° - theta) = sin(theta)</span> for angles in degrees, or <span class=\"chem\">sin(pi - theta) = sin(theta)</span> in radians. This symmetry comes from the unit circle in <a href=\"t3-2.html\">3.2 The unit circle, trig identities and periodic models</a>.": "<strong>開始之前：</strong>兩義情況依賴於 <span class=\"chem\">sin(180° - theta) = sin(theta)</span>（角以度為單位），或 <span class=\"chem\">sin(pi - theta) = sin(theta)</span>（以弧度為單位）。這個對稱性來自 <a href=\"t3-2.html\">3.2 單位圓、三角恒等式與週期模型</a> 中的單位圓。",

    // Triangle trigonometry, the ambiguous case and bearings > p
    "Because <span class=\"chem\">sin(180° - theta) = sin(theta)</span>, a positive value of <span class=\"chem\">sin C</span> corresponds to <strong>two</strong> angles between <span class=\"mono\">0°</span> and <span class=\"mono\">180°</span>: an acute angle <span class=\"chem\">C_1 = arcsin(k)</span> and its obtuse supplement <span class=\"chem\">C_2 = 180° - C_1</span>. Geometrically, if you fix angle <span class=\"chem\">A</span> and adjacent side <span class=\"chem\">b</span>, the minimum perpendicular distance from vertex <span class=\"chem\">C</span> to the base line is <span class=\"chem\">h = b sin A</span>. When the opposite side <span class=\"chem\">a</span> satisfies <span class=\"chem\">b sin A &lt; a &lt; b</span>, a compass of radius <span class=\"chem\">a</span> centred at <span class=\"chem\">C</span> cuts the base line in <strong>two different places</strong>!": "由於 <span class=\"chem\">sin(180° - theta) = sin(theta)</span>，正的 <span class=\"chem\">sin C</span> 值在 <span class=\"mono\">0°</span> 與 <span class=\"mono\">180°</span> 之間對應<strong>兩個</strong>角：銳角 <span class=\"chem\">C_1 = arcsin(k)</span> 及其鈍角補角 <span class=\"chem\">C_2 = 180° - C_1</span>。從幾何角度看，若固定角 <span class=\"chem\">A</span> 與鄰邊 <span class=\"chem\">b</span>，頂點 <span class=\"chem\">C</span> 到底邊所在直線的最短垂直距離為 <span class=\"chem\">h = b sin A</span>。當對邊 <span class=\"chem\">a</span> 滿足 <span class=\"chem\">b sin A &lt; a &lt; b</span> 時，以 <span class=\"chem\">C</span> 為圓心、<span class=\"chem\">a</span> 為半徑的圓弧會與底邊直線相交於<strong>兩個不同位置</strong>！",

    // Triangle trigonometry, the ambiguous case and bearings > widget > data-title attribute
    "Ambiguous Case (SSA) Triangle Explorer": "兩義情況 (SSA) 三角形探索器",

    // Triangle trigonometry, the ambiguous case and bearings > widget > figcaption
    "Adjust the known angle <i>A</i>, adjacent side <i>b</i>, and opposite swinging side <i>a</i>. Watch how side <i>a</i> misses the base when <i>a</i> &lt; <i>b</i> sin <i>A</i> (0 triangles), just touches at 90° when <i>a</i> = <i>b</i> sin <i>A</i> (1 right triangle), cuts the base twice when <i>b</i> sin <i>A</i> &lt; <i>a</i> &lt; <i>b</i> (<strong>2 triangles: acute <i>B</i>₁ and obtuse <i>B</i>₂ = 180° − <i>B</i>₁</strong>), and forms 1 triangle when <i>a</i> ≥ <i>b</i>.": "調校已知角 <i>A</i>、鄰邊 <i>b</i> 及可擺動的對邊 <i>a</i>。觀察邊 <i>a</i> 如何變化：當 <i>a</i> &lt; <i>b</i> sin <i>A</i> 時觸不到底邊（0 個三角形）；當 <i>a</i> = <i>b</i> sin <i>A</i> 時剛好以 90° 相切（1 個直角三角形）；當 <i>b</i> sin <i>A</i> &lt; <i>a</i> &lt; <i>b</i> 時兩次截斷底邊（<strong>2 個三角形：銳角 <i>B</i>₁ 與鈍角 <i>B</i>₂ = 180° − <i>B</i>₁</strong>）；而當 <i>a</i> ≥ <i>b</i> 時則形成 1 個三角形。",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > data-kicker attribute
    "Worked example 2 (SL 3.5 — Ambiguous Case)": "例題 2（SL 3.5 — 兩義情況）",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > h3
    "Finding both possible triangles in an SSA problem": "在 SSA 問題中求兩個可能的三角形",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > p
    "In triangle <span class=\"chem\">ABC</span>, <span class=\"chem\">AB = 10 cm</span>, <span class=\"chem\">BC = 7 cm</span>, and <span class=\"chem\">angle BAC = 35°</span>.<br> (a) Find the two possible values of <span class=\"chem\">angle ACB</span>, giving your answers to 1 decimal place. <strong>[4 marks]</strong><br> (b) Find the positive difference between the two possible lengths of side <span class=\"chem\">AC</span>. <strong>[3 marks]</strong>": "在三角形 <span class=\"chem\">ABC</span> 中，<span class=\"chem\">AB = 10 cm</span>，<span class=\"chem\">BC = 7 cm</span>，且 <span class=\"chem\">angle BAC = 35°</span>。<br> (a) 求 (Find) <span class=\"chem\">angle ACB</span> 的兩個可能值，答案準確至小數點後 1 位。<strong>[4 marks]</strong><br> (b) 求 (Find) 邊 <span class=\"chem\">AC</span> 的兩個可能長度之間的正差。<strong>[3 marks]</strong>",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > data-title attribute
    "Apply the Sine Rule to find the acute angle C₁": "應用正弦定律求銳角 C₁",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > p
    "We know an opposite pair (∠A = 35° and BC = a = 7 cm) and side AB = c = 10 cm opposite ∠ACB.": "我們已知一對對角與對邊（∠A = 35° 與 BC = a = 7 cm）以及 ∠ACB 的對邊 AB = c = 10 cm。",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > maths line
    "<i>C</i><sub>1</sub> = arcsin(0.81939…) = <b>55.0°</b> (55.024° unrounded) <b>[A1]</b>": "<i>C</i><sub>1</sub> = arcsin(0.81939…) = <b>55.0°</b>（未捨入為 55.024°）<b>[A1]</b>",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > data-title attribute
    "Subtract from 180° to find the obtuse angle C₂": "用 180° 相減以求鈍角 C₂",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > p
    "Since a = 7 &lt; c = 10, the supplementary angle C₂ = 180° − C₁ also leaves room for angle A = 35° (125.0° + 35° = 160.0° &lt; 180°).": "由於 a = 7 &lt; c = 10，補角 C₂ = 180° − C₁ 亦為角 A = 35° 留有空間（125.0° + 35° = 160.0° &lt; 180°）。",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > maths line
    "<i>C</i><sub>2</sub> = 180° − 55.024° = <b>125.0°</b> (124.976° unrounded) <b>[A1]</b>": "<i>C</i><sub>2</sub> = 180° − 55.024° = <b>125.0°</b>（未捨入為 124.976°）<b>[A1]</b>",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > data-title attribute
    "Find the two lengths of AC (or use the Cosine Rule quadratic)": "求 AC 的兩個長度（或使用餘弦定律二次方程）",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > p
    "Method 1 uses the two values of ∠B = 180° − 35° − C. Method 2 sets up the Cosine Rule with b = AC: 7² = 10² + b² − 2(10)b cos 35°, which is b² − (20 cos 35°)b + 51 = 0!": "方法 1 利用 ∠B = 180° − 35° − C 的兩個值；方法 2 以 b = AC 列出餘弦定律：7² = 10² + b² − 2(10)b cos 35°，即 b² − (20 cos 35°)b + 51 = 0！",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > maths line
    "Difference = 12.204 − 4.179 = <b>8.03 cm</b> (3 s.f.) <b>[A1]</b>": "差 = 12.204 − 4.179 = <b>8.03 cm</b>（3 位有效數字）<b>[A1]</b>",

    // Triangle trigonometry, the ambiguous case and bearings > worked example > p
    "(a) 55.0° or 125.0°; (b) 8.03 cm": "(a) 55.0° 或 125.0°；(b) 8.03 cm",

    // Triangle trigonometry, the ambiguous case and bearings > exam tip (shown in English + translation) > p
    "<strong>Exam shortcut for the difference between the two possible third sides:</strong> In any ambiguous SSA triangle with known angle <span class=\"chem\">A</span>, adjacent side <span class=\"chem\">c</span>, and opposite side <span class=\"chem\">a</span>, the two possible third sides <span class=\"chem\">b_1, b_2</span> are the roots of the Cosine Rule quadratic <span class=\"chem\">b^2 - (2c cos A)b + (c^2 - a^2) = 0</span>. By Vieta's root relations, the <strong>sum</strong> of the two possible lengths of <span class=\"chem\">AC</span> is simply <span class=\"chem\">b_1 + b_2 = 2c cos A</span>, and because the two positions of side <span class=\"chem\">a</span> form an isosceles triangle with base <span class=\"chem\">b_1 - b_2</span>, the <strong>difference</strong> is <span class=\"chem\">b_1 - b_2 = 2a cos C_1</span> (where <span class=\"chem\">C_1</span> is the acute angle opposite <span class=\"chem\">c</span>)!": "<strong>求兩個可能第三邊之差的考試捷徑：</strong>在任何已知角 <span class=\"chem\">A</span>、鄰邊 <span class=\"chem\">c</span> 與對邊 <span class=\"chem\">a</span> 的兩義 SSA 三角形中，兩個可能的第三邊 <span class=\"chem\">b_1, b_2</span> 是餘弦定律二次方程 <span class=\"chem\">b^2 - (2c cos A)b + (c^2 - a^2) = 0</span> 的根。由韋達定理的根與係數關係，<span class=\"chem\">AC</span> 兩個可能長度的<strong>和</strong>正是 <span class=\"chem\">b_1 + b_2 = 2c cos A</span>，而由於邊 <span class=\"chem\">a</span> 的兩個位置構成以 <span class=\"chem\">b_1 - b_2</span> 為底的等腰三角形，兩者之<strong>差</strong>為 <span class=\"chem\">b_1 - b_2 = 2a cos C_1</span>（其中 <span class=\"chem\">C_1</span> 為 <span class=\"chem\">c</span> 所對的銳角）！",

    // Triangle trigonometry, the ambiguous case and bearings > h3
    "Three-figure bearings and angles of elevation/depression": "三位方位角與仰角／俯角",

    // Triangle trigonometry, the ambiguous case and bearings > li
    "A <dfn data-def=\"A direction measured as a three-digit angle from 000° to 359° clockwise from North (360° is written 000°).\">three-figure true bearing</dfn> is always measured from <strong>North (<span class=\"mono\">000°</span>)</strong>, turning <strong>clockwise</strong>, and written with three digits (such as <span class=\"mono\">065°</span> or <span class=\"mono\">245°</span>). Always look for the word <strong>“from”</strong>: the bearing of <span class=\"chem\">B</span> <em>from</em> <span class=\"chem\">A</span> is measured at <span class=\"chem\">A</span>.": "<dfn data-def=\"從正北起順時針量度，並以 000° 至 359° 的三位數字角度表示的方向（360° 寫作 000°）。\">三位真方位角 <span class=\"en-term\">(three-figure true bearing)</span></dfn>一律從<strong>正北（<span class=\"mono\">000°</span>）</strong>起按<strong>順時針</strong>方向量度，並以三位數字寫出（例如 <span class=\"mono\">065°</span> 或 <span class=\"mono\">245°</span>）。務必留意字眼<strong>「由⋯⋯測得 (from)」</strong>：<span class=\"chem\">B</span> <em>由</em> <span class=\"chem\">A</span> 測得的方位角是在 <span class=\"chem\">A</span> 處量度。",

    // Triangle trigonometry, the ambiguous case and bearings > data-def attribute
    "A direction measured as a three-digit angle from 000° to 359° clockwise from North (360° is written 000°).": "從正北起順時針量度，並以 000° 至 359° 的三位數字角度表示的方向（360° 寫作 000°）。",

    // Triangle trigonometry, the ambiguous case and bearings > li
    "An <strong>angle of elevation</strong> (looking up) and an <strong>angle of depression</strong> (looking down) are always measured from the <strong>horizontal</strong>—never from a vertical wall or mast. Because horizontal lines are parallel, the angle of elevation of <span class=\"chem\">B</span> from <span class=\"chem\">A</span> equals the angle of depression of <span class=\"chem\">A</span> from <span class=\"chem\">B</span> (alternate interior angles).": "<strong>仰角</strong>（向上望）與<strong>俯角</strong>（向下望）一律從<strong>水平線</strong>量度——絕非從垂直牆壁或桅杆量度。由於水平線互相平行，由 <span class=\"chem\">A</span> 望向 <span class=\"chem\">B</span> 的仰角等於由 <span class=\"chem\">B</span> 望向 <span class=\"chem\">A</span> 的俯角（內錯角相等）。",

    // Triangle trigonometry, the ambiguous case and bearings > try it > p
    "In triangle <span class=\"chem\">PQR</span>, <span class=\"chem\">PQ = 9 cm</span>, <span class=\"chem\">QR = 8 cm</span>, and the obtuse angle <span class=\"chem\">angle PQR</span> satisfies <span class=\"chem\">cos(angle PQR) = -1/2</span>. Find the area of triangle <span class=\"chem\">PQR</span> to 3 significant figures.": "在三角形 <span class=\"chem\">PQR</span> 中，<span class=\"chem\">PQ = 9 cm</span>，<span class=\"chem\">QR = 8 cm</span>，且鈍角 <span class=\"chem\">angle PQR</span> 滿足 <span class=\"chem\">cos(angle PQR) = -1/2</span>。求 (Find) 三角形 <span class=\"chem\">PQR</span> 的面積，答案準確至 3 位有效數字。",

    // Triangle trigonometry, the ambiguous case and bearings > try it > li
    "If <span class=\"chem\">cos(angle PQR) = -1/2</span>, then <span class=\"chem\">angle PQR = 120°</span> (or use <span class=\"chem\">sin(angle PQR) = sqrt(1 - (-1/2)^2) = sqrt(3)/2</span>).": "若 <span class=\"chem\">cos(angle PQR) = -1/2</span>，則 <span class=\"chem\">angle PQR = 120°</span>（或使用 <span class=\"chem\">sin(angle PQR) = sqrt(1 - (-1/2)^2) = sqrt(3)/2</span>）。",

    // Triangle trigonometry, the ambiguous case and bearings > try it > li
    "Substitute into <span class=\"chem\">Area = (1/2) × PQ × QR × sin(angle PQR) = (1/2) × 9 × 8 × (sqrt(3)/2)</span>.": "代入 <span class=\"chem\">Area = (1/2) × PQ × QR × sin(angle PQR) = (1/2) × 9 × 8 × (sqrt(3)/2)</span>。",

    // Triangle trigonometry, the ambiguous case and bearings > try it > maths line
    "sin(∠<i>PQR</i>) = <span class=\"frac\"><span>√3</span><span>2</span></span> ⇒ Area = <span class=\"frac\"><span>1</span><span>2</span></span>(9)(8)<span class=\"frac\"><span>√3</span><span>2</span></span> = 18√3 ≈ <b>31.2 cm<sup>2</sup></b>": "sin(∠<i>PQR</i>) = <span class=\"frac\"><span>√3</span><span>2</span></span> ⇒ 面積 = <span class=\"frac\"><span>1</span><span>2</span></span>(9)(8)<span class=\"frac\"><span>√3</span><span>2</span></span> = 18√3 ≈ <b>31.2 cm<sup>2</sup></b>",

    // Radian measure, arcs, sectors and circular segments > data-toc attribute
    "Radians, sectors & segments": "弧度、扇形與弓形",

    // Radian measure, arcs, sectors and circular segments > h2
    "Radian measure, arcs, sectors and circular segments": "弧度法、弧、扇形與弓形",

    // Radian measure, arcs, sectors and circular segments > p
    "Degrees (<span class=\"mono\">360°</span> in a circle) are a historical convention. In higher mathematics and calculus, we measure angles in <dfn data-def=\"The angle subtended at the centre of a circle of radius r by an arc of length r. One full revolution is 2π radians.\">radians</dfn>: one radian is the angle subtended at the centre of a circle of radius <span class=\"chem\">r</span> by an arc of length <span class=\"chem\">r</span>. Since the circumference of a full circle is <span class=\"chem\">2pi r</span>, a full turn of <span class=\"mono\">360°</span> is <span class=\"chem\">2pi</span> radians, so <span class=\"chem\">pi rad = 180°</span>.": "度（一個圓為 <span class=\"mono\">360°</span>）是一種歷史習慣。在高等數學與微積分中，我們以<dfn data-def=\"在半徑為 r 的圓中，長度為 r 的弧所對的圓心角。一週為 2π 弧度。\">弧度 <span class=\"en-term\">(radians)</span></dfn>量度角度：一弧度是指半徑為 <span class=\"chem\">r</span> 的圓中，長度為 <span class=\"chem\">r</span> 的弧所對的圓心角。由於全圓圓周為 <span class=\"chem\">2pi r</span>，一週 <span class=\"mono\">360°</span> 即為 <span class=\"chem\">2pi</span> 弧度，因此 <span class=\"chem\">pi rad = 180°</span>。",

    // Radian measure, arcs, sectors and circular segments > data-def attribute
    "The angle subtended at the centre of a circle of radius r by an arc of length r. One full revolution is 2π radians.": "在半徑為 r 的圓中，長度為 r 的弧所對的圓心角。一週為 2π 弧度。",

    // Radian measure, arcs, sectors and circular segments > equation > dd
    "radius of the circle": "圓的半徑",

    // Radian measure, arcs, sectors and circular segments > equation > dd
    "central angle <strong>measured in radians</strong> (<span class=\"chem\">theta = deg × pi / 180</span>)": "<strong>以弧度為單位</strong>的圓心角（<span class=\"chem\">theta = deg × pi / 180</span>）",

    // Radian measure, arcs, sectors and circular segments > equation > dd
    "arc length subtended by angle <i>θ</i>": "角 <i>θ</i> 所對的弧長",

    // Radian measure, arcs, sectors and circular segments > equation > dt
    "A<sub>segment</sub>": "A<sub>segment</sub>",

    // Radian measure, arcs, sectors and circular segments > equation > dd
    "area between chord and arc: sector area <span class=\"chem\">(1/2)r^2theta</span> minus triangle area <span class=\"chem\">(1/2)r^2 sin(theta)</span>": "弦與弧之間的面積：扇形面積 <span class=\"chem\">(1/2)r^2theta</span> 減去三角形面積 <span class=\"chem\">(1/2)r^2 sin(theta)</span>",

    // Radian measure, arcs, sectors and circular segments > formula booklet note > p
    "<strong>What is in the Formula Booklet vs what you must derive:</strong> Your booklet gives <span class=\"chem\">l = rθ</span> and <span class=\"chem\">A = (1/2)r^2theta</span>. It does <strong>not</strong> print the circular segment formula <span class=\"chem\">A_{segment} = (1/2)r^2(theta - sin(theta))</span> or the chord length formula <span class=\"chem\">AB = 2r sin(theta/2) = r sqrt(2 - 2 cos(theta))</span>—you construct these by subtracting or solving the isosceles triangle <span class=\"chem\">OAB</span> with two sides of length <span class=\"chem\">r</span>.": "<strong>公式手冊已提供與須自行推導的內容：</strong>公式手冊載有 <span class=\"chem\">l = rθ</span> 與 <span class=\"chem\">A = (1/2)r^2theta</span>，但<strong>沒有</strong>印出弓形面積公式 <span class=\"chem\">A_{segment} = (1/2)r^2(theta - sin(theta))</span> 或弦長公式 <span class=\"chem\">AB = 2r sin(theta/2) = r sqrt(2 - 2 cos(theta))</span>——你須透過兩條腰長為 <span class=\"chem\">r</span> 的等腰三角形 <span class=\"chem\">OAB</span> 相減或求解來建立這些公式。",

    // Radian measure, arcs, sectors and circular segments > widget > data-title attribute
    "Radian Sector, Arc & Shaded Segment Visualizer": "弧度扇形、弧長與陰影弓形視覺化工具",

    // Radian measure, arcs, sectors and circular segments > widget > figcaption
    "Drag the radius <i>r</i> and central angle <i>θ</i> (in radians). Compare the full sector area ½<i>r</i>²<i>θ</i>, the isosceles triangle area ½<i>r</i>² sin <i>θ</i>, and the shaded circular segment ½<i>r</i>²(<i>θ</i> − sin <i>θ</i>), as well as the arc length <i>rθ</i> versus the straight chord length 2<i>r</i> sin(<i>θ</i>/2).": "拖動半徑 <i>r</i> 與圓心角 <i>θ</i>（以弧度表示）。比較整個扇形面積 ½<i>r</i>²<i>θ</i>、等腰三角形面積 ½<i>r</i>² sin <i>θ</i> 及陰影弓形面積 ½<i>r</i>²(<i>θ</i> − sin <i>θ</i>)，以及弧長 <i>rθ</i> 與直線弦長 2<i>r</i> sin(<i>θ</i>/2)。",

    // Radian measure, arcs, sectors and circular segments > worked example > data-kicker attribute
    "Worked example 3 (SL 3.4)": "例題 3（SL 3.4）",

    // Radian measure, arcs, sectors and circular segments > worked example > h3
    "Perimeter and area of a circular segment": "弓形的周界與面積",

    // Radian measure, arcs, sectors and circular segments > worked example > p
    "A circle with centre <span class=\"chem\">O</span> and radius <span class=\"mono\">8 cm</span> has points <span class=\"chem\">A</span> and <span class=\"chem\">B</span> on its circumference such that <span class=\"chem\">angle AOB = 1.5</span> radians.<br> (a) Find the perimeter of the minor segment bounded by the chord <span class=\"chem\">AB</span> and the minor arc <span class=\"chem\">AB</span>, to 3 significant figures. <strong>[4 marks]</strong><br> (b) Find the area of this minor segment, to 3 significant figures. <strong>[3 marks]</strong>": "一個圓心為 <span class=\"chem\">O</span>、半徑為 <span class=\"mono\">8 cm</span> 的圓，圓周上有兩點 <span class=\"chem\">A</span> 與 <span class=\"chem\">B</span>，使得 <span class=\"chem\">angle AOB = 1.5</span> 弧度。<br> (a) 求 (Find) 由弦 <span class=\"chem\">AB</span> 與劣弧 <span class=\"chem\">AB</span> 所圍成的劣弓形周界，答案準確至 3 位有效數字。<strong>[4 marks]</strong><br> (b) 求 (Find) 此劣弓形的面積，答案準確至 3 位有效數字。<strong>[3 marks]</strong>",

    // Radian measure, arcs, sectors and circular segments > worked example > data-title attribute
    "Calculate the arc length l = rθ": "計算弧長 l = rθ",

    // Radian measure, arcs, sectors and circular segments > worked example > p
    "Since θ = 1.5 is already in radians, multiply directly by r = 8 cm.": "由於 θ = 1.5 已是弧度，直接乘以 r = 8 cm。",

    // Radian measure, arcs, sectors and circular segments > worked example > data-title attribute
    "Find the chord length AB using triangle OAB": "利用三角形 OAB 求弦長 AB",

    // Radian measure, arcs, sectors and circular segments > worked example > p
    "Triangle OAB is isosceles with OA = OB = 8 cm and ∠AOB = 1.5 rad. Use the Cosine Rule or bisect ∠AOB into two right triangles: AB = 2r sin(θ/2).": "三角形 OAB 為等腰三角形，OA = OB = 8 cm 且 ∠AOB = 1.5 rad。可使用餘弦定律，或將 ∠AOB 平分為兩個直角三角形：AB = 2r sin(θ/2)。",

    // Radian measure, arcs, sectors and circular segments > worked example > maths line
    "Perimeter of segment = <i>l</i> + <i>AB</i> = 12 + 10.9062 = <b>22.9 cm</b> (3 s.f.) <b>[A1]</b>": "弓形周界 = <i>l</i> + <i>AB</i> = 12 + 10.9062 = <b>22.9 cm</b>（3 位有效數字）<b>[A1]</b>",

    // Radian measure, arcs, sectors and circular segments > worked example > data-title attribute
    "Subtract the triangle area from the sector area": "從扇形面積減去三角形面積",

    // Radian measure, arcs, sectors and circular segments > worked example > p
    "The minor segment is what remains of sector OAB after removing triangle OAB.": "劣弓形即扇形 OAB 移去三角形 OAB 後餘下的部分。",

    // Radian measure, arcs, sectors and circular segments > worked example > p
    "(a) 22.9 cm; (b) 16.1 cm²": "(a) 22.9 cm；(b) 16.1 cm²",

    // Radian measure, arcs, sectors and circular segments > common mistake > p
    "<strong>Perimeter of a sector vs perimeter of a segment:</strong> Read carefully! The perimeter of a <strong>sector</strong> includes the two straight radii (<span class=\"chem\">P_{sector} = 2r + rθ</span>), whereas the perimeter of a <strong>segment</strong> is the arc plus the chord (<span class=\"chem\">P_{segment} = rθ + 2r sin(theta/2)</span>).": "<strong>扇形周界與弓形周界的分別：</strong>請小心審題！<strong>扇形</strong>周界包括兩條直半徑（<span class=\"chem\">P_{sector} = 2r + rθ</span>），而<strong>弓形</strong>周界則是弧長加上弦長（<span class=\"chem\">P_{segment} = rθ + 2r sin(theta/2)</span>）。",

    // Radian measure, arcs, sectors and circular segments > try it > p
    "A sector of a circle of radius <span class=\"chem\">r = 6 cm</span> has total perimeter <span class=\"mono\">19.5 cm</span>. Find the central angle <span class=\"chem\">theta</span> in radians.": "一個半徑 <span class=\"chem\">r = 6 cm</span> 的圓扇形總周界為 <span class=\"mono\">19.5 cm</span>。求 (Find) 以弧度表示的圓心角 <span class=\"chem\">theta</span>。",

    // Radian measure, arcs, sectors and circular segments > try it > li
    "The perimeter of a sector consists of two radii plus the arc length: <span class=\"chem\">P = 2r + rθ</span>.": "扇形周界由兩條半徑加上弧長組成：<span class=\"chem\">P = 2r + rθ</span>。",

    // Radian measure, arcs, sectors and circular segments > try it > li
    "Substitute <span class=\"chem\">r = 6</span> into <span class=\"chem\">12 + 6theta = 19.5</span> and solve for <span class=\"chem\">theta</span>.": "將 <span class=\"chem\">r = 6</span> 代入 <span class=\"chem\">12 + 6theta = 19.5</span> 並解出 <span class=\"chem\">theta</span>。",

    // Exam-style practice > data-toc attribute
    // Exam-style practice > h2
    "Exam-style practice": "考試題型練習",

    // Exam-style practice > p
    "Three progressive sets testing 3D geometry, non-right triangles, bearings, and radians. Questions you have not yet answered correctly are served first.": "三組循序漸進的練習，測試 3D 幾何、非直角三角形、方位角與弧度。你尚未答對的題目會優先出現。",

    // Exam-style practice > h3
    "Foundation: core formulas and one-step checks": "基礎：核心公式與單步檢驗",

    // Exam-style practice > data-title attribute
    "3.1 foundation": "3.1 基礎練習",

    // Exam-style practice > h3
    "Exam standard: Paper 1 (No GDC) and Paper 2 (GDC)": "考試標準：Paper 1（不可用計算機）與 Paper 2（可用 GDC）",

    // Exam-style practice > data-title attribute
    "3.1 exam standard": "3.1 考試標準",

    // Exam-style practice > h3
    "Challenge: level 7 multi-step geometry": "挑戰：7 級多步驟幾何",

    // Exam-style practice > data-title attribute
    "3.1 challenge": "3.1 挑戰題",

    // widget string (assets/js/widgets-t3-1.js)
    "a < b sin A: side a is too short to reach the base (0 triangles)": "a < b sin A：邊 a 太短，未能觸及底邊（0 個三角形）",

    // widget string (assets/js/widgets-t3-1.js)
    "0 (a < b sin A)": "0（a < b sin A）",

    // widget string (assets/js/widgets-t3-1.js)
    "1 right triangle (a = b sin A)": "1 個直角三角形（a = b sin A）",

    // widget string (assets/js/widgets-t3-1.js)
    "2 triangles (Ambiguous SSA!)": "2 個三角形（兩義情況 SSA！）",

    // widget string (assets/js/widgets-t3-1.js)
    "1 triangle (a ≥ b)": "1 個三角形（a ≥ b）",

    // widget string (assets/js/widgets-t3-1.js)
    "Invalid (> 180° − A)": "無效（> 180° − A）",

  }
});
