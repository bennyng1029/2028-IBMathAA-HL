/* t1-4 — ja translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't1-4', {
  strings: {

    // page title (browser tab)
    "1.4 Complex numbers and De Moivre's theorem | Analysis Lab": "1.4 複素数とド・モアブルの定理 | Analysis Lab",

    // Complex numbers and De Moivre's theorem > page header > p
    "Topic 1.4 · AHL 1.12–1.14 · Additional HL": "Topic 1.4 · AHL 1.12–1.14 · Additional HL",

    // Complex numbers and De Moivre's theorem > page header > h1
    "Complex numbers and De Moivre's theorem": "複素数とド・モアブルの定理",

    // Complex numbers and De Moivre's theorem > page header > span
    "How does extending the real number line into the two-dimensional Argand plane turn algebraic powers and roots into geometric rotations and regular polygons?": "実数直線を 2 次元の複素数平面（アルガン図）へ拡張すると、累乗や累乗根の計算がどのように回転や正多角形という幾何学的な意味をもつようになるのでしょうか？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "チェックリスト",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > checklist > Additional HL > span
    "Add, subtract, multiply and divide complex numbers in Cartesian form <span class=\"chem\">z = a + bi</span>, and identify <span class=\"chem\">Re(z) = a</span> and <span class=\"chem\">Im(z) = b</span>.": "直交座標形式 <span class=\"chem\">z = a + bi</span> の複素数の四則演算ができ、<span class=\"chem\">Re(z) = a</span> と <span class=\"chem\">Im(z) = b</span> を読み取れる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Use the complex conjugate <span class=\"chem\">z* = a - bi</span> and the property <span class=\"chem\">z z* = |z|^2 = a^2 + b^2</span> to rationalize complex denominators and solve equations.": "共役な複素数 <span class=\"chem\">z* = a - bi</span> と性質 <span class=\"chem\">z z* = |z|^2 = a^2 + b^2</span> を使って、分母の実数化や方程式の求解ができる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Convert between Cartesian form <span class=\"chem\">a + bi</span>, modulus-argument (polar) form <span class=\"chem\">r(cos theta + i sin theta) = r cis theta</span>, and Euler form <span class=\"chem\">r e^{i theta}</span> with correct quadrant adjustment for <span class=\"chem\">arg(z)</span>.": "象限に応じた <span class=\"chem\">arg(z)</span> の調整を正しく行い、直交座標形式 <span class=\"chem\">a + bi</span>、極形式 <span class=\"chem\">r(cos theta + i sin theta) = r cis theta</span>、オイラー形式 <span class=\"chem\">r e^{i theta}</span> を相互に変換できる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Interpret complex multiplication and division geometrically on the Argand diagram as scaling of moduli and rotation of arguments.": "複素数の乗法と除法を、複素数平面上での絶対値の拡大・縮小と偏角の回転として幾何学的に解釈できる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Prove De Moivre's theorem <span class=\"chem\">[r(cos theta + i sin theta)]^n = r^n(cos(n theta) + i sin(n theta))</span> by induction for <span class=\"chem\">n \\in \\mathbb{Z}^+</span>, and apply it to compute powers and derive multiple-angle trigonometric identities.": "ド・モアブルの定理 <span class=\"chem\">[r(cos theta + i sin theta)]^n = r^n(cos(n theta) + i sin(n theta))</span> を <span class=\"chem\">n \\in \\mathbb{Z}^+</span> について数学的帰納法で証明し、それを使って累乗を計算し、倍角の三角恒等式を導ける。",

    // What you need to be able to do > checklist > Additional HL > span
    "Find all <span class=\"chem\">n</span> distinct <span class=\"chem\">n</span>-th roots of a complex number <span class=\"chem\">z^n = w</span> and represent them as the vertices of a regular <span class=\"chem\">n</span>-gon on the Argand diagram.": "複素数の方程式 <span class=\"chem\">z^n = w</span> の <span class=\"chem\">n</span> 個の異なる <span class=\"chem\">n</span> 乗根をすべて求め、複素数平面上に正 <span class=\"chem\">n</span> 角形の頂点として表せる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Apply the Complex Conjugate Root Theorem to factorize and solve polynomial equations with real coefficients.": "共役複素数根の定理を用いて、実数係数の方程式を因数分解して解ける。",

    // Question decoder: Cartesian vs Polar/Euler form > data-toc attribute
    "Question decoder": "問題デコーダー",

    // Question decoder: Cartesian vs Polar/Euler form > h2
    "Question decoder: Cartesian vs Polar/Euler form": "問題デコーダー：直交座標形式 vs 極形式・オイラー形式",

    // Question decoder: Cartesian vs Polar/Euler form > p
    "Almost every complex number exam problem comes down to one decision: <strong>stay in Cartesian form</strong> (<span class=\"chem\">a + bi</span>) or <strong>switch to polar/Euler form</strong> (<span class=\"chem\">r e^{i theta}</span>). Use this table to pick the fastest path every time.": "複素数の試験問題は、ほとんどすべてが<strong>直交座標形式（<span class=\"chem\">a + bi</span>）のまま解く</strong>か、<strong>極形式・オイラー形式（<span class=\"chem\">r e^{i theta}</span>）に変換する</strong>かの判断に帰着します。この表を使って最速の解法を選びましょう。",

    // Question decoder: Cartesian vs Polar/Euler form > table > caption
    "Question decoder — Complex numbers and De Moivre's theorem": "問題デコーダー — 複素数とド・モアブルの定理",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "What the exam question says": "試験問題に書かれている表現",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "Which form &amp; formula to use": "使う形式と公式",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "Paper 1 (No GDC) vs Paper 2 / 3 (GDC)": "Paper 1（電卓不可）vs Paper 2 / 3（GDC 可）",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "“Express <span class=\"chem\">(3 + 4i) / (1 - 2i)</span> in the form <span class=\"chem\">a + bi</span>” or “Solve <span class=\"chem\">(x + yi)(2 - i) = 5</span>”": "「<span class=\"chem\">(3 + 4i) / (1 - 2i)</span> を <span class=\"chem\">a + bi</span> の形で表せ」または「<span class=\"chem\">(x + yi)(2 - i) = 5</span> を解け」",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "<strong>Cartesian form</strong> <span class=\"chem\">z = a + bi</span>. Multiply numerator and denominator by the conjugate <span class=\"chem\">z_2*</span>, or expand and equate real parts and imaginary parts separately.": "<strong>直交座標形式</strong> <span class=\"chem\">z = a + bi</span>。分母・分子に共役な複素数 <span class=\"chem\">z_2*</span> を掛けるか、展開して実部と虚部をそれぞれ等置します。",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "<strong>P1</strong>: Use <span class=\"chem\">(c + di)(c - di) = c^2 + d^2</span> (always a positive real number).<br><strong>P2</strong>: Enter <span class=\"chem\">i</span> directly on the GDC to compute or verify in seconds.": "<strong>Paper 1</strong>：<span class=\"chem\">(c + di)(c - di) = c^2 + d^2</span>（常に正の実数）を使います。<br><strong>Paper 2</strong>：GDC に <span class=\"chem\">i</span> を直接入力すれば数秒で計算・検算できます。",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "“Given that <span class=\"chem\">2 - 3i</span> is a root of <span class=\"chem\">P(z) = 0</span> where all coefficients are real…”": "「すべての係数が実数である <span class=\"chem\">P(z) = 0</span> の解の 1 つが <span class=\"chem\">2 - 3i</span> であるとき…」",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "<strong>Conjugate Root Theorem</strong> (Cartesian). Immediately write down the second root <span class=\"chem\">z_2 = 2 + 3i</span> and form the real quadratic factor <span class=\"chem\">(z - z_1)(z - z_1*) = z^2 - 2Re(z_1)z + |z_1|^2</span>.": "<strong>共役複素数根の定理</strong>（直交座標形式）。直ちに 2 つ目の解 <span class=\"chem\">z_2 = 2 + 3i</span> を書き出し、実数係数の 2 次因数 <span class=\"chem\">(z - z_1)(z - z_1*) = z^2 - 2Re(z_1)z + |z_1|^2</span> を作ります。",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "<strong>P1</strong>: Here <span class=\"chem\">z^2 - 4z + 13</span> is a factor of <span class=\"chem\">P(z)</span>; use polynomial division or inspection to find remaining roots.<br><strong>P2</strong>: Use GDC <span class=\"mono\">polyRoots</span> to check all roots.": "<strong>Paper 1</strong>：<span class=\"chem\">z^2 - 4z + 13</span> が <span class=\"chem\">P(z)</span> の因数となるので、整式の割り算や係数比較で残りの解を求めます。<br><strong>Paper 2</strong>：GDC の <span class=\"mono\">polyRoots</span> ですべての解を確認できます。",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "“Calculate <span class=\"chem\">(1 - sqrt(3)i)^{12}</span>” or “Find the least positive integer <span class=\"chem\">n</span> such that <span class=\"chem\">z^n</span> is real / purely imaginary”": "「<span class=\"chem\">(1 - sqrt(3)i)^{12}</span> を計算せよ」または「<span class=\"chem\">z^n</span> が実数 / 純虚数となる最小の正の整数 <span class=\"chem\">n</span> を求めよ」",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "<strong>Polar / Euler form</strong> + <strong>De Moivre's theorem</strong>: <span class=\"chem\">z^n = r^n(cos(n theta) + i sin(n theta))</span>. Never expand high powers in Cartesian form!": "<strong>極形式・オイラー形式</strong>＋<strong>ド・モアブルの定理</strong>：<span class=\"chem\">z^n = r^n(cos(n theta) + i sin(n theta))</span>。高い累乗を直交座標形式で展開してはいけません。",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "Real <span class=\"chem\">&lt;=&gt; sin(n theta) = 0 =&gt; n theta = k pi</span>.<br>Purely imaginary <span class=\"chem\">&lt;=&gt; cos(n theta) = 0 =&gt; n theta = pi/2 + k pi</span>.": "実数 <span class=\"chem\">&lt;=&gt; sin(n theta) = 0 =&gt; n theta = k pi</span>。<br>純虚数 <span class=\"chem\">&lt;=&gt; cos(n theta) = 0 =&gt; n theta = pi/2 + k pi</span>。",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "“Find the exact value of <span class=\"chem\">cos(pi/12)</span>” using two complex numbers <span class=\"chem\">z_1, z_2</span>": "2 つの複素数 <span class=\"chem\">z_1, z_2</span> を用いて「<span class=\"chem\">cos(pi/12)</span> の厳密値を求めよ」",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "<strong>Bridge between both forms</strong>: compute <span class=\"chem\">z_1 z_2</span> (or <span class=\"chem\">z_1 / z_2</span>) in Cartesian form AND in polar form, then equate real and imaginary parts.": "<strong>2 つの形式の橋渡し</strong>：<span class=\"chem\">z_1 z_2</span>（または <span class=\"chem\">z_1 / z_2</span>）を直交座標形式と極形式の両方で計算し、実部どうし・虚部どうしを等置します。",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "Classic Paper 1 Section B technique using exact triangles (<span class=\"chem\">pi/4</span> and <span class=\"chem\">pi/3</span>, whose difference is <span class=\"chem\">pi/12</span>).": "Paper 1 Section B の定番テクニックで、有名角（差が <span class=\"chem\">pi/12</span> になる <span class=\"chem\">pi/4</span> と <span class=\"chem\">pi/3</span>）を使います。",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "“Solve <span class=\"chem\">z^n = w</span>” (e.g. <span class=\"chem\">z^4 = -8 + 8 sqrt(3)i</span>)": "「<span class=\"chem\">z^n = w</span> を解け」（例：<span class=\"chem\">z^4 = -8 + 8 sqrt(3)i</span>）",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "<strong>Polar / Euler form</strong> with general angle <span class=\"chem\">theta + 2 pi k</span>:<br><span class=\"chem\">z_k = r^{1/n} e^{i(theta + 2 pi k)/n}</span> for <span class=\"chem\">k = 0, 1, ..., n - 1</span>.": "一般角 <span class=\"chem\">theta + 2 pi k</span> を用いた<strong>極形式・オイラー形式</strong>：<br><span class=\"chem\">k = 0, 1, ..., n - 1</span> に対して <span class=\"chem\">z_k = r^{1/n} e^{i(theta + 2 pi k)/n}</span>。",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "Sketch the regular <span class=\"chem\">n</span>-gon on a circle of radius <span class=\"chem\">r^{1/n}</span> with angular spacing <span class=\"chem\">2 pi / n</span>. Adjust angles to <span class=\"chem\">(-pi, pi]</span> if required.": "半径 <span class=\"chem\">r^{1/n}</span> の円周上に角度間隔 <span class=\"chem\">2 pi / n</span> で正 <span class=\"chem\">n</span> 角形を描きます。指示があれば偏角を <span class=\"chem\">(-pi, pi]</span> に直します。",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "“Show that <span class=\"chem\">cos(4 theta) = 8 cos^4(theta) - 8 cos^2(theta) + 1</span>”": "「<span class=\"chem\">cos(4 theta) = 8 cos^4(theta) - 8 cos^2(theta) + 1</span> を示せ」",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "<strong>De Moivre + Binomial expansion</strong>: equate <span class=\"chem\">cos(n theta) = Re((cos theta + i sin theta)^n)</span> and replace <span class=\"chem\">sin^2 theta = 1 - cos^2 theta</span>.": "<strong>ド・モアブルの定理＋二項展開</strong>：<span class=\"chem\">cos(n theta) = Re((cos theta + i sin theta)^n)</span> とおき、<span class=\"chem\">sin^2 theta = 1 - cos^2 theta</span> で置き換えます。",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "For the reverse problem (expressing <span class=\"chem\">cos^4 theta</span> in terms of <span class=\"chem\">cos(k theta)</span>), use <span class=\"chem\">2 cos theta = z + z^{-1}</span>.": "逆向きの問題（<span class=\"chem\">cos^4 theta</span> を <span class=\"chem\">cos(k theta)</span> で表す）では、<span class=\"chem\">2 cos theta = z + z^{-1}</span> を使います。",

    // Cartesian form, conjugates and the Argand diagram > data-toc attribute
    "Cartesian & Argand": "直交座標形式と複素数平面",

    // Cartesian form, conjugates and the Argand diagram > h2
    "Cartesian form, conjugates and the Argand diagram": "直交座標形式・共役な複素数と複素数平面",

    // Cartesian form, conjugates and the Argand diagram > p
    "To solve equations like <span class=\"chem\">x^2 + 1 = 0</span> that have no real solutions, we define the <dfn data-def=\"The fundamental imaginary unit satisfying i² = −1.\">imaginary unit</dfn> <span class=\"chem\">i</span> by the property <span class=\"chem\">i^2 = -1</span>. Every <dfn data-def=\"A number of the form z = a + bi where a and b are real numbers and i² = −1.\">complex number</dfn> <span class=\"chem\">z \\in \\mathbb{C}</span> can be written in <strong>Cartesian form</strong>:": "実数解をもたない <span class=\"chem\">x^2 + 1 = 0</span> のような方程式を解くために、<span class=\"chem\">i^2 = -1</span> を満たす<dfn data-def=\"i² = −1 を満たす基本的な虚数単位。\">虚数単位 <span class=\"en-term\">(imaginary unit)</span></dfn> <span class=\"chem\">i</span> を定義します。すべての<dfn data-def=\"a, b を実数、i² = −1 として z = a + bi の形で表される数。\">複素数 <span class=\"en-term\">(complex number)</span></dfn> <span class=\"chem\">z \\in \\mathbb{C}</span> は<strong>直交座標形式</strong>で表せます：",

    // Cartesian form, conjugates and the Argand diagram > data-def attribute
    "The fundamental imaginary unit satisfying i² = −1.": "i² = −1 を満たす基本的な虚数単位。",

    // Cartesian form, conjugates and the Argand diagram > data-def attribute
    "A number of the form z = a + bi where a and b are real numbers and i² = −1.": "a, b を実数、i² = −1 として z = a + bi の形で表される数。",

    // Cartesian form, conjugates and the Argand diagram > equation > dt
    "a = Re(z)": "a = Re(z)",

    // Cartesian form, conjugates and the Argand diagram > equation > dd
    "real part of <i>z</i> (a real number)": "<i>z</i> の実部（実数）",

    // Cartesian form, conjugates and the Argand diagram > equation > dt
    "b = Im(z)": "b = Im(z)",

    // Cartesian form, conjugates and the Argand diagram > equation > dd
    "imaginary part of <i>z</i> (a real number, without <i>i</i>)": "<i>z</i> の虚部（<i>i</i> を含まない実数）",

    // Cartesian form, conjugates and the Argand diagram > equation > dd
    "complex conjugate of <i>z</i> (reflection of <i>z</i> across the real axis)": "<i>z</i> の共役な複素数（実軸に関する <i>z</i> の対称点）",

    // Cartesian form, conjugates and the Argand diagram > common mistake > p
    "<strong>Never include <span class=\"chem\">i</span> in <span class=\"chem\">Im(z)</span>!</strong> For <span class=\"chem\">z = 5 - 3i</span>, the imaginary part is the real number <span class=\"chem\">Im(z) = -3</span>, <strong>not</strong> <span class=\"chem\">-3i</span>. Writing <span class=\"chem\">Im(z) = -3i</span> loses the accuracy mark on Paper 1 and Paper 2.": "<strong><span class=\"chem\">Im(z)</span> に <span class=\"chem\">i</span> を含めてはいけません！</strong> <span class=\"chem\">z = 5 - 3i</span> の虚部は実数 <span class=\"chem\">Im(z) = -3</span> であり、<span class=\"chem\">-3i</span> では<strong>ありません</strong>。<span class=\"chem\">Im(z) = -3i</span> と書くと Paper 1 でも Paper 2 でも正確点（A1）を失います。",

    // Cartesian form, conjugates and the Argand diagram > h3
    "Powers of <span class=\"chem\">i</span> and arithmetic in Cartesian form": "<span class=\"chem\">i</span> の累乗と直交座標形式の四則演算",

    // Cartesian form, conjugates and the Argand diagram > p
    "Because <span class=\"chem\">i^2 = -1</span>, powers of <span class=\"chem\">i</span> repeat in a cycle of length 4: <span class=\"chem\">i^1 = i</span>, <span class=\"chem\">i^2 = -1</span>, <span class=\"chem\">i^3 = -i</span>, <span class=\"chem\">i^4 = 1</span>. To simplify <span class=\"chem\">i^n</span>, divide the exponent <span class=\"chem\">n</span> by 4 and look only at the remainder.": "<span class=\"chem\">i^2 = -1</span> であるため、<span class=\"chem\">i</span> の累乗は周期 4 で繰り返します：<span class=\"chem\">i^1 = i</span>、<span class=\"chem\">i^2 = -1</span>、<span class=\"chem\">i^3 = -i</span>、<span class=\"chem\">i^4 = 1</span>。<span class=\"chem\">i^n</span> を簡単にするには、指数 <span class=\"chem\">n</span> を 4 で割った余りだけに注目します。",

    // Cartesian form, conjugates and the Argand diagram > li
    "<strong>Addition and subtraction</strong>: Combine real parts and imaginary parts separately: <span class=\"chem\">(a + bi) +- (c + di) = (a +- c) + (b +- d)i</span>.": "<strong>加法と減法</strong>：実部どうし・虚部どうしを別々にまとめます：<span class=\"chem\">(a + bi) +- (c + di) = (a +- c) + (b +- d)i</span>。",

    // Cartesian form, conjugates and the Argand diagram > li
    "<strong>Multiplication</strong>: Expand brackets and replace <span class=\"chem\">i^2</span> with <span class=\"chem\">-1</span>: <span class=\"chem\">(a + bi)(c + di) = (ac - bd) + (ad + bc)i</span>.": "<strong>乗法</strong>：括弧を展開して <span class=\"chem\">i^2</span> を <span class=\"chem\">-1</span> に置き換えます：<span class=\"chem\">(a + bi)(c + di) = (ac - bd) + (ad + bc)i</span>。",

    // Cartesian form, conjugates and the Argand diagram > li
    "<strong>Division (rationalizing the denominator)</strong>: Multiply both numerator and denominator by the <strong>complex conjugate of the denominator</strong> <span class=\"chem\">c - di</span> so the denominator becomes the real number <span class=\"chem\">c^2 + d^2</span>: <span class=\"chem\">(a + bi) / (c + di) = ((a + bi)(c - di)) / (c^2 + d^2)</span>.": "<strong>除法（分母の実数化）</strong>：分母・分子に<strong>分母の共役な複素数</strong> <span class=\"chem\">c - di</span> を掛けて分母を実数 <span class=\"chem\">c^2 + d^2</span> にします：<span class=\"chem\">(a + bi) / (c + di) = ((a + bi)(c - di)) / (c^2 + d^2)</span>。",

    // Cartesian form, conjugates and the Argand diagram > li
    "<strong>Equating real and imaginary parts</strong>: Two complex numbers are equal if and only if both their real parts and their imaginary parts match: <span class=\"chem\">a + bi = c + di &lt;=&gt; a = c</span> and <span class=\"chem\">b = d</span> (provided <span class=\"chem\">a, b, c, d \\in \\mathbb{R}</span>).": "<strong>実部と虚部の比較</strong>：2 つの複素数が等しいことと、実部どうし・虚部どうしがともに等しいことは同値です：<span class=\"chem\">a + bi = c + di &lt;=&gt; a = c</span> かつ <span class=\"chem\">b = d</span>（ただし <span class=\"chem\">a, b, c, d \\in \\mathbb{R}</span>）。",

    // Cartesian form, conjugates and the Argand diagram > li
    "<strong>Quadratics with a negative discriminant</strong>: If a real quadratic has <span class=\"chem\">Delta = b^2 - 4ac &lt; 0</span>, the quadratic formula gives two complex conjugate roots. For example, <span class=\"chem\">z^2 - 4z + 13 = 0</span> gives <span class=\"chem\">z = (4 +- sqrt(-36)) / 2 = (4 +- 6i) / 2 = 2 +- 3i</span>.": "<strong>判別式が負の 2 次方程式</strong>：実数係数の 2 次方程式で <span class=\"chem\">Delta = b^2 - 4ac &lt; 0</span> のとき、解の公式から互いに共役な 2 つの複素数解が得られます。例えば <span class=\"chem\">z^2 - 4z + 13 = 0</span> からは <span class=\"chem\">z = (4 +- sqrt(-36)) / 2 = (4 +- 6i) / 2 = 2 +- 3i</span> となります。",

    // Cartesian form, conjugates and the Argand diagram > h3
    "The Argand diagram": "複素数平面（アルガン図）",

    // Cartesian form, conjugates and the Argand diagram > p
    "On the <dfn data-def=\"A 2D coordinate plane where the horizontal axis represents Re(z) and the vertical axis represents Im(z).\">Argand diagram</dfn> (complex plane), <span class=\"chem\">z = a + bi</span> is plotted as the point <span class=\"chem\">(a, b)</span> or position vector <span class=\"chem\">(a, b)^T</span>, with the horizontal axis for <span class=\"chem\">Re(z)</span> and the vertical axis for <span class=\"chem\">Im(z)</span>. Taking the conjugate <span class=\"chem\">z^* = a - bi</span> reflects <span class=\"chem\">z</span> across the horizontal real axis, while addition <span class=\"chem\">z_1 + z_2</span> follows standard head-to-tail vector addition.": "<dfn data-def=\"横軸が Re(z)、縦軸が Im(z) を表す 2 次元座標平面。\">複素数平面（アルガン図） <span class=\"en-term\">(Argand diagram)</span></dfn> では、横軸を実軸 <span class=\"chem\">Re(z)</span>、縦軸を虚軸 <span class=\"chem\">Im(z)</span> とし、<span class=\"chem\">z = a + bi</span> を点 <span class=\"chem\">(a, b)</span> または位置ベクトル <span class=\"chem\">(a, b)^T</span> として表します。共役な複素数 <span class=\"chem\">z^* = a - bi</span> は <span class=\"chem\">z</span> を実軸に関して対称移動した点になり、加法 <span class=\"chem\">z_1 + z_2</span> は通常のベクトルの和と同じになります。",

    // Cartesian form, conjugates and the Argand diagram > data-def attribute
    "A 2D coordinate plane where the horizontal axis represents Re(z) and the vertical axis represents Im(z).": "横軸が Re(z)、縦軸が Im(z) を表す 2 次元座標平面。",

    // Cartesian form, conjugates and the Argand diagram > worked example > h3
    "Complex division and equating real and imaginary parts": "複素数の割り算と実部・虚部の比較",

    // Cartesian form, conjugates and the Argand diagram > worked example > p
    "Let <span class=\"chem\">z_1 = 2 + 3i</span> and <span class=\"chem\">z_2 = 1 - 2i</span>.": "<span class=\"chem\">z_1 = 2 + 3i</span>、<span class=\"chem\">z_2 = 1 - 2i</span> とする。",

    // Cartesian form, conjugates and the Argand diagram > worked example > p
    "(a) Express <span class=\"chem\">w = z_1 / z_2</span> in the form <span class=\"chem\">a + bi</span>, where <span class=\"chem\">a, b \\in \\mathbb{Q}</span>. <strong>[3 marks]</strong>": "(a) <span class=\"chem\">w = z_1 / z_2</span> を <span class=\"chem\">a + bi</span>（<span class=\"chem\">a, b \\in \\mathbb{Q}</span>）の形で表しなさい。 <strong>[3 marks]</strong>",

    // Cartesian form, conjugates and the Argand diagram > worked example > p
    "(b) Find the real numbers <span class=\"chem\">p</span> and <span class=\"chem\">q</span> such that <span class=\"chem\">(p + qi) z_2 = 7 + 4i</span>. <strong>[3 marks]</strong>": "(b) <span class=\"chem\">(p + qi) z_2 = 7 + 4i</span> を満たす実数 <span class=\"chem\">p</span> と <span class=\"chem\">q</span> を求めなさい (Find)。 <strong>[3 marks]</strong>",

    // Cartesian form, conjugates and the Argand diagram > worked example > data-title attribute
    "Multiply numerator and denominator of w by the conjugate of z₂": "w の分母・分子に z₂ の共役な複素数を掛ける",

    // Cartesian form, conjugates and the Argand diagram > worked example > p
    "The denominator is z₂ = 1 − 2i, so its conjugate is z₂* = 1 + 2i. Multiplying by (1 + 2i)/(1 + 2i) turns the denominator into 1² + (−2)² = 5.": "分母は z₂ = 1 − 2i なので、その共役な複素数は z₂* = 1 + 2i です。(1 + 2i)/(1 + 2i) を掛けると、分母は 1² + (−2)² = 5 になります。",

    // Cartesian form, conjugates and the Argand diagram > worked example > data-title attribute
    "Expand (p + qi)(1 − 2i) and group real and imaginary parts": "(p + qi)(1 − 2i) を展開して実部と虚部に分ける",

    // Cartesian form, conjugates and the Argand diagram > worked example > p
    "Since p and q are real numbers, we can expand the left-hand side into (Real) + (Imaginary)i and equate to 7 + 4i.": "p と q は実数なので、左辺を (実部) + (虚部)i の形に整理して 7 + 4i と比較できます。",

    // Cartesian form, conjugates and the Argand diagram > worked example > data-title attribute
    "Equate real and imaginary parts and solve the 2 × 2 system": "実部と虚部を等置して 2 × 2 連立方程式を解く",

    // Cartesian form, conjugates and the Argand diagram > worked example > p
    "Setting Re(LHS) = 7 and Im(LHS) = 4 gives two linear equations in p and q.": "Re(左辺) = 7、Im(左辺) = 4 とおくと、p と q の 2 元 1 次連立方程式が得られます。",

    // Cartesian form, conjugates and the Argand diagram > worked example > maths line
    "<i>p</i> + 2<i>q</i> = 7 and −2<i>p</i> + <i>q</i> = 4 <b>[M1]</b>": "<i>p</i> + 2<i>q</i> = 7 かつ −2<i>p</i> + <i>q</i> = 4 <b>[M1]</b>",

    // Cartesian form, conjugates and the Argand diagram > try it > p
    "Given that <span class=\"chem\">z = (11 + 3i) / (1 - 2i)</span>, express <span class=\"chem\">z</span> in the form <span class=\"chem\">a + bi</span> and enter the value of <span class=\"chem\">a + b</span>.": "<span class=\"chem\">z = (11 + 3i) / (1 - 2i)</span> が与えられたとき、<span class=\"chem\">z</span> を <span class=\"chem\">a + bi</span> の形で表し、<span class=\"chem\">a + b</span> の値を入力しなさい。",

    // Cartesian form, conjugates and the Argand diagram > try it > li
    "Multiply the numerator and denominator by the conjugate <span class=\"chem\">1 + 2i</span>. The denominator becomes <span class=\"chem\">1^2 + (-2)^2 = 5</span>.": "分母・分子に共役な複素数 <span class=\"chem\">1 + 2i</span> を掛けます。分母は <span class=\"chem\">1^2 + (-2)^2 = 5</span> になります。",

    // Cartesian form, conjugates and the Argand diagram > try it > li
    "Expand the numerator: <span class=\"chem\">(11 + 3i)(1 + 2i) = 11 + 22i + 3i + 6i^2 = 5 + 25i</span>. Now divide both parts by <span class=\"chem\">5</span>.": "分子を展開します：<span class=\"chem\">(11 + 3i)(1 + 2i) = 11 + 22i + 3i + 6i^2 = 5 + 25i</span>。あとは実部と虚部を <span class=\"chem\">5</span> で割ります。",

    // Modulus-argument (polar) and Euler forms > data-toc attribute
    "Polar & Euler forms": "極形式とオイラー形式",

    // Modulus-argument (polar) and Euler forms > h2
    "Modulus-argument (polar) and Euler forms": "極形式とオイラー形式（指数形式）",

    // Modulus-argument (polar) and Euler forms > p
    "Instead of describing a point on the Argand plane by its horizontal and vertical coordinates <span class=\"chem\">(a, b)</span>, we can describe it by its distance from the origin and the angle it makes with the positive real axis:": "複素数平面上の点を横と縦の座標 <span class=\"chem\">(a, b)</span> で表す代わりに、原点からの距離と正の実軸からの角度で表すこともできます：",

    // Modulus-argument (polar) and Euler forms > li
    "The <dfn data-def=\"The distance of a complex number z = a + bi from the origin on the Argand plane: |z| = √(a² + b²).\">modulus</dfn> <span class=\"chem\">r = |z| = sqrt(a^2 + b^2) &gt;= 0</span> is the distance from the origin to <span class=\"chem\">z</span>.": "<dfn data-def=\"複素数平面上における原点から複素数 z = a + bi までの距離：|z| = √(a² + b²)。\">絶対値 <span class=\"en-term\">(modulus)</span></dfn> <span class=\"chem\">r = |z| = sqrt(a^2 + b^2) &gt;= 0</span> は、原点から <span class=\"chem\">z</span> までの距離です。",

    // Modulus-argument (polar) and Euler forms > data-def attribute
    "The distance of a complex number z = a + bi from the origin on the Argand plane: |z| = √(a² + b²).": "複素数平面上における原点から複素数 z = a + bi までの距離：|z| = √(a² + b²)。",

    // Modulus-argument (polar) and Euler forms > li
    "The <dfn data-def=\"The angle θ in radians measured anticlockwise from the positive real axis to the position vector of z, usually chosen in (−π, π].\">argument</dfn> <span class=\"chem\">theta = arg(z)</span> is the directed angle from the positive real axis to <span class=\"chem\">z</span>. Unless a question states otherwise, IB uses the <strong>principal argument</strong> in the interval <span class=\"chem\">-pi &lt; theta &lt;= pi</span>.": "<dfn data-def=\"正の実軸から反時計回りに測った、z の位置ベクトルまでの角度 θ（ラジアン）。通常 (−π, π] の範囲で選ぶ。\">偏角 <span class=\"en-term\">(argument)</span></dfn> <span class=\"chem\">theta = arg(z)</span> は、正の実軸から <span class=\"chem\">z</span> までの向きつき角度です。特に指定がない限り、IB では区間 <span class=\"chem\">-pi &lt; theta &lt;= pi</span> の<strong>主偏角（principal argument）</strong>を使います。",

    // Modulus-argument (polar) and Euler forms > data-def attribute
    "The angle θ in radians measured anticlockwise from the positive real axis to the position vector of z, usually chosen in (−π, π].": "正の実軸から反時計回りに測った、z の位置ベクトルまでの角度 θ（ラジアン）。通常 (−π, π] の範囲で選ぶ。",

    // Modulus-argument (polar) and Euler forms > formula booklet note > p
    "<strong>In your Formula Booklet (AHL 1.12–1.13):</strong> Since <span class=\"chem\">a = r cos theta</span> and <span class=\"chem\">b = r sin theta</span>, and by Euler's formula <span class=\"chem\">e^{i theta} = cos theta + i sin theta</span>, every complex number can be written in three equivalent ways:": "<strong>公式集（Formula booklet）に掲載 (AHL 1.12–1.13)：</strong> <span class=\"chem\">a = r cos theta</span>、<span class=\"chem\">b = r sin theta</span>、およびオイラーの公式 <span class=\"chem\">e^{i theta} = cos theta + i sin theta</span> により、すべての複素数は次の 3 通りの同値な形で表せます：",

    // Modulus-argument (polar) and Euler forms > h3
    "Finding the principal argument <span class=\"chem\">arg(z) \\in (-\\pi, \\pi]</span>": "主偏角 <span class=\"chem\">arg(z) \\in (-\\pi, \\pi]</span> の求め方",

    // Modulus-argument (polar) and Euler forms > p
    "When <span class=\"chem\">a != 0</span> and <span class=\"chem\">b != 0</span>, first find the acute reference angle <span class=\"chem\">alpha = arctan(|b / a|)</span> in <span class=\"chem\">(0, pi/2)</span>, then plot <span class=\"chem\">(a, b)</span> in its quadrant to assign the correct sign or shift. A point on an axis needs no arctan (last row):": "<span class=\"chem\">a != 0</span> かつ <span class=\"chem\">b != 0</span> のとき、まず <span class=\"chem\">(0, pi/2)</span> の範囲で鋭角 <span class=\"chem\">alpha = arctan(|b / a|)</span> を求め、次に点 <span class=\"chem\">(a, b)</span> がどの象限にあるかを図示して正しい符号や角度を決めます。軸上の点では arctan は不要です（最後の行）：",

    // Modulus-argument (polar) and Euler forms > table > caption
    "Quadrant adjustment for principal argument θ = arg(a + bi) ∈ (−π, π]": "主偏角 θ = arg(a + bi) ∈ (−π, π] の象限ごとの調整",

    // Modulus-argument (polar) and Euler forms > table > th
    "Quadrant of <span class=\"chem\">(a, b)</span>": "<span class=\"chem\">(a, b)</span> の象限",

    // Modulus-argument (polar) and Euler forms > table > th
    "Signs of <span class=\"chem\">a, b</span>": "<span class=\"chem\">a, b</span> の符号",

    // Modulus-argument (polar) and Euler forms > table > th
    "Principal argument <span class=\"chem\">theta = arg(z)</span>": "主偏角 <span class=\"chem\">theta = arg(z)</span>",

    // Modulus-argument (polar) and Euler forms > table > th
    "Example": "例",

    // Modulus-argument (polar) and Euler forms > table > th
    "Quadrant I": "第 1 象限",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">theta = +alpha</span>": "<span class=\"chem\">theta = +alpha</span>",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">1 + sqrt(3)i =&gt; r = 2, theta = pi/3</span>": "<span class=\"chem\">1 + sqrt(3)i =&gt; r = 2, theta = pi/3</span>",

    // Modulus-argument (polar) and Euler forms > table > th
    "Quadrant II": "第 2 象限",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">theta = pi - alpha</span>": "<span class=\"chem\">theta = pi - alpha</span>",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">-1 + i =&gt; r = sqrt(2), theta = 3pi/4</span>": "<span class=\"chem\">-1 + i =&gt; r = sqrt(2), theta = 3pi/4</span>",

    // Modulus-argument (polar) and Euler forms > table > th
    "Quadrant III": "第 3 象限",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">theta = -(pi - alpha) = alpha - pi</span>": "<span class=\"chem\">theta = -(pi - alpha) = alpha - pi</span>",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">-sqrt(3) - i =&gt; r = 2, theta = -5pi/6</span>": "<span class=\"chem\">-sqrt(3) - i =&gt; r = 2, theta = -5pi/6</span>",

    // Modulus-argument (polar) and Euler forms > table > th
    "Quadrant IV": "第 4 象限",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">theta = -alpha</span>": "<span class=\"chem\">theta = -alpha</span>",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">1 - i =&gt; r = sqrt(2), theta = -pi/4</span>": "<span class=\"chem\">1 - i =&gt; r = sqrt(2), theta = -pi/4</span>",

    // Modulus-argument (polar) and Euler forms > table > th
    "On an axis": "軸上",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">a = 0</span> or <span class=\"chem\">b = 0</span>": "<span class=\"chem\">a = 0</span> または <span class=\"chem\">b = 0</span>",

    // Modulus-argument (polar) and Euler forms > table > td
    "Positive real: <span class=\"chem\">0</span>; positive imaginary: <span class=\"chem\">pi/2</span>; negative real: <span class=\"chem\">pi</span>; negative imaginary: <span class=\"chem\">-pi/2</span>": "正の実軸：<span class=\"chem\">0</span>、正の虚軸：<span class=\"chem\">pi/2</span>、負の実軸：<span class=\"chem\">pi</span>、負の虚軸：<span class=\"chem\">-pi/2</span>",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">arg(-3) = pi</span>, <span class=\"chem\">arg(2i) = pi/2</span>, <span class=\"chem\">arg(-2i) = -pi/2</span>": "<span class=\"chem\">arg(-3) = pi</span>、<span class=\"chem\">arg(2i) = pi/2</span>、<span class=\"chem\">arg(-2i) = -pi/2</span>",

    // Modulus-argument (polar) and Euler forms > common mistake > p
    "<strong>Never trust <span class=\"chem\">arctan(b/a)</span> without sketching the quadrant!</strong> For <span class=\"chem\">z = -1 - i</span> (Quadrant III), <span class=\"chem\">b/a = (-1)/(-1) = 1</span>, so <span class=\"chem\">arctan(1) = pi/4</span> (Quadrant I). The true principal argument is <span class=\"chem\">arg(-1 - i) = -3pi/4</span>.": "<strong>象限を描かずに <span class=\"chem\">arctan(b/a)</span> をそのまま信じてはいけません！</strong> <span class=\"chem\">z = -1 - i</span>（第 3 象限）では <span class=\"chem\">b/a = (-1)/(-1) = 1</span> となり、<span class=\"chem\">arctan(1) = pi/4</span>（第 1 象限）が出てしまいます。正しい主偏角は <span class=\"chem\">arg(-1 - i) = -3pi/4</span> です。",

    // Modulus-argument (polar) and Euler forms > h3
    "Geometric meaning of complex multiplication and division": "複素数の乗法と除法の幾何学的意味",

    // Modulus-argument (polar) and Euler forms > p
    "Using exponent laws on Euler form <span class=\"chem\">z_1 = r_1 e^{i theta_1}</span> and <span class=\"chem\">z_2 = r_2 e^{i theta_2}</span> immediately shows why polar/Euler form is so powerful:": "オイラー形式 <span class=\"chem\">z_1 = r_1 e^{i theta_1}</span> と <span class=\"chem\">z_2 = r_2 e^{i theta_2}</span> に指数法則を使うと、極形式・オイラー形式がいかに強力かがすぐにわかります：",

    // Modulus-argument (polar) and Euler forms > equation > maths line
    "<i>z</i><sub>1</sub><i>z</i><sub>2</sub> = <i>r</i><sub>1</sub><i>r</i><sub>2</sub><i>e</i><sup><i>i</i>(<i>θ</i><sub>1</sub> + <i>θ</i><sub>2</sub>)</sup> &nbsp;&nbsp;&nbsp; and &nbsp;&nbsp;&nbsp; <span class=\"frac\"><span><i>z</i><sub>1</sub></span><span><i>z</i><sub>2</sub></span></span> = <span class=\"frac\"><span><i>r</i><sub>1</sub></span><span><i>r</i><sub>2</sub></span></span><i>e</i><sup><i>i</i>(<i>θ</i><sub>1</sub> − <i>θ</i><sub>2</sub>)</sup>": "<i>z</i><sub>1</sub><i>z</i><sub>2</sub> = <i>r</i><sub>1</sub><i>r</i><sub>2</sub><i>e</i><sup><i>i</i>(<i>θ</i><sub>1</sub> + <i>θ</i><sub>2</sub>)</sup> &nbsp;&nbsp;&nbsp; かつ &nbsp;&nbsp;&nbsp; <span class=\"frac\"><span><i>z</i><sub>1</sub></span><span><i>z</i><sub>2</sub></span></span> = <span class=\"frac\"><span><i>r</i><sub>1</sub></span><span><i>r</i><sub>2</sub></span></span><i>e</i><sup><i>i</i>(<i>θ</i><sub>1</sub> − <i>θ</i><sub>2</sub>)</sup>",

    // Modulus-argument (polar) and Euler forms > equation > dd
    "moduli multiply (and divide under division)": "絶対値は掛け算（除法では割り算）になる",

    // Modulus-argument (polar) and Euler forms > equation > dt
    "arg(z<sub>1</sub>z<sub>2</sub>) = θ<sub>1</sub> + θ<sub>2</sub>": "arg(z<sub>1</sub>z<sub>2</sub>) = θ<sub>1</sub> + θ<sub>2</sub>",

    // Modulus-argument (polar) and Euler forms > equation > dd
    "arguments add (modulo 2π) under multiplication and subtract under division": "偏角は乗法で足し算（2π を法とする）、除法で引き算になる",

    // Modulus-argument (polar) and Euler forms > p
    "Geometrically, multiplying any complex number <span class=\"chem\">z_1</span> by <span class=\"chem\">z_2 = r_2 e^{i theta_2}</span> stretches its length by a scale factor of <span class=\"chem\">r_2</span> and rotates it anticlockwise about the origin by angle <span class=\"chem\">theta_2</span>. In particular, multiplying by <span class=\"chem\">i = e^{i pi/2}</span> is a pure anticlockwise rotation by <span class=\"chem\">90^\\circ</span> (<span class=\"chem\">pi/2</span> radians).": "幾何学的には、複素数 <span class=\"chem\">z_1</span> に <span class=\"chem\">z_2 = r_2 e^{i theta_2}</span> を掛けることは、長さを <span class=\"chem\">r_2</span> 倍に拡大し、原点を中心に反時計回りに <span class=\"chem\">theta_2</span> だけ回転させることを意味します。特に、<span class=\"chem\">i = e^{i pi/2}</span> を掛けることは反時計回りに <span class=\"chem\">90^\\circ</span>（<span class=\"chem\">pi/2</span> ラジアン）回転させることに相当します。",

    // Modulus-argument (polar) and Euler forms > widget > data-title attribute
    "Argand plane multiplication & polar/Euler explorer": "複素数平面上の積と極形式・オイラー形式",

    // Modulus-argument (polar) and Euler forms > widget > figcaption
    "Adjust the moduli <span class=\"chem\">r_1, r_2</span> and arguments <span class=\"chem\">theta_1, theta_2</span> to see how multiplying <span class=\"chem\">z_1</span> by <span class=\"chem\">z_2</span> multiplies the lengths (<span class=\"chem\">r = r_1 r_2</span>) and adds the angles (<span class=\"chem\">theta = theta_1 + theta_2</span>) on the Argand plane.": "絶対値 <span class=\"chem\">r_1, r_2</span> と偏角 <span class=\"chem\">theta_1, theta_2</span> を調整して、<span class=\"chem\">z_1</span> と <span class=\"chem\">z_2</span> の積では長さが掛け算（<span class=\"chem\">r = r_1 r_2</span>）、偏角が足し算（<span class=\"chem\">theta = theta_1 + theta_2</span>）になる様子を確認しましょう。",

    // Modulus-argument (polar) and Euler forms > worked example > h3
    "Finding exact trigonometric values by comparing Cartesian and Euler forms": "直交座標形式とオイラー形式の比較から三角関数の厳密値を求める",

    // Modulus-argument (polar) and Euler forms > worked example > p
    "Let <span class=\"chem\">z_1 = 1 + i</span> and <span class=\"chem\">z_2 = sqrt(3) - i</span>.": "<span class=\"chem\">z_1 = 1 + i</span>、<span class=\"chem\">z_2 = sqrt(3) - i</span> とする。",

    // Modulus-argument (polar) and Euler forms > worked example > p
    "(a) Express <span class=\"chem\">z_1</span> and <span class=\"chem\">z_2</span> in Euler form <span class=\"chem\">r e^{i theta}</span>. <strong>[3 marks]</strong>": "(a) <span class=\"chem\">z_1</span> と <span class=\"chem\">z_2</span> をオイラー形式 <span class=\"chem\">r e^{i theta}</span> で表しなさい。 <strong>[3 marks]</strong>",

    // Modulus-argument (polar) and Euler forms > worked example > p
    "(b) Hence, by expressing <span class=\"chem\">z_1 z_2</span> in both Cartesian and Euler forms, find the exact value of <span class=\"chem\">cos(pi/12)</span> and <span class=\"chem\">sin(pi/12)</span>. <strong>[5 marks]</strong>": "(b) これを用いて (Hence)、<span class=\"chem\">z_1 z_2</span> を直交座標形式とオイラー形式の両方で表すことにより、<span class=\"chem\">cos(pi/12)</span> と <span class=\"chem\">sin(pi/12)</span> の厳密値を求めなさい (Find)。 <strong>[5 marks]</strong>",

    // Modulus-argument (polar) and Euler forms > worked example > data-title attribute
    "Find the modulus and principal argument of z₁ and z₂": "z₁ と z₂ の絶対値と主偏角を求める",

    // Modulus-argument (polar) and Euler forms > worked example > p
    "z₁ = 1 + i is in Quadrant I with r₁ = √(1² + 1²) = √2 and θ₁ = π/4. z₂ = √3 − i is in Quadrant IV with r₂ = √(3 + 1) = 2 and θ₂ = −π/6.": "z₁ = 1 + i は第 1 象限にあり、r₁ = √(1² + 1²) = √2、θ₁ = π/4 です。z₂ = √3 − i は第 4 象限にあり、r₂ = √(3 + 1) = 2、θ₂ = −π/6 です。",

    // Modulus-argument (polar) and Euler forms > worked example > data-title attribute
    "Compute the product z₁z₂ in Euler form and in Cartesian form": "積 z₁z₂ をオイラー形式と直交座標形式で計算する",

    // Modulus-argument (polar) and Euler forms > worked example > p
    "In Euler form, multiply moduli and add arguments: π/4 − π/6 = π/12. In Cartesian form, expand (1 + i)(√3 − i).": "オイラー形式では絶対値を掛け、偏角を足します：π/4 − π/6 = π/12。直交座標形式では (1 + i)(√3 − i) を展開します。",

    // Modulus-argument (polar) and Euler forms > worked example > maths line
    "Euler: <i>z</i><sub>1</sub><i>z</i><sub>2</sub> = 2√2 <i>e</i><sup><i>i</i>(<i>π</i>/4 − <i>π</i>/6)</sup> = 2√2 <i>e</i><sup><i>iπ</i>/12</sup> = 2√2 (cos(<i>π</i>/12) + <i>i</i> sin(<i>π</i>/12)) <b>[M1]</b>": "オイラー形式：<i>z</i><sub>1</sub><i>z</i><sub>2</sub> = 2√2 <i>e</i><sup><i>i</i>(<i>π</i>/4 − <i>π</i>/6)</sup> = 2√2 <i>e</i><sup><i>iπ</i>/12</sup> = 2√2 (cos(<i>π</i>/12) + <i>i</i> sin(<i>π</i>/12)) <b>[M1]</b>",

    // Modulus-argument (polar) and Euler forms > worked example > maths line
    "Cartesian: (1 + <i>i</i>)(√3 − <i>i</i>) = (√3 + 1) + (√3 − 1)<i>i</i> <b>[A1]</b>": "直交座標形式：(1 + <i>i</i>)(√3 − <i>i</i>) = (√3 + 1) + (√3 − 1)<i>i</i> <b>[A1]</b>",

    // Modulus-argument (polar) and Euler forms > worked example > data-title attribute
    "Equate real and imaginary parts to isolate cos(π/12) and sin(π/12)": "実部と虚部を等置して cos(π/12) と sin(π/12) を求める",

    // Modulus-argument (polar) and Euler forms > worked example > p
    "Both expressions represent the exact same complex number z₁z₂, so their real and imaginary parts must be equal.": "どちらの式もまったく同じ複素数 z₁z₂ を表しているため、実部どうし・虚部どうしが等しくなります。",

    // Modulus-argument (polar) and Euler forms > worked example > p
    "cos(π/12) = (√6 + √2)/4, &nbsp; sin(π/12) = (√6 − √2)/4": "cos(π/12) = (√6 + √2)/4, &nbsp; sin(π/12) = (√6 − √2)/4",

    // Modulus-argument (polar) and Euler forms > try it > p
    "Find the principal argument <span class=\"chem\">arg(z)</span> (in radians) of the complex number <span class=\"chem\">z = -3 sqrt(3) + 3i</span>. You may enter an exact multiple of <span class=\"mono\">pi</span> (such as <span class=\"mono\">3*pi/4</span>) or a 3 s.f. decimal.": "複素数 <span class=\"chem\">z = -3 sqrt(3) + 3i</span> の主偏角 <span class=\"chem\">arg(z)</span>（ラジアン）を求めなさい (Find)。<span class=\"mono\">pi</span> を使った厳密値（<span class=\"mono\">3*pi/4</span> など）または有効数字 3 桁の小数で入力できます。",

    // Modulus-argument (polar) and Euler forms > try it > li
    "Identify the quadrant: <span class=\"chem\">Re(z) = -3 sqrt(3) &lt; 0</span> and <span class=\"chem\">Im(z) = 3 &gt; 0</span>, so <span class=\"chem\">z</span> lies in Quadrant II.": "象限を特定します：<span class=\"chem\">Re(z) = -3 sqrt(3) &lt; 0</span> かつ <span class=\"chem\">Im(z) = 3 &gt; 0</span> なので、<span class=\"chem\">z</span> は第 2 象限にあります。",

    // Modulus-argument (polar) and Euler forms > try it > li
    "The acute reference angle is <span class=\"chem\">alpha = arctan(3 / (3 sqrt(3))) = arctan(1 / sqrt(3)) = pi/6</span>. In Quadrant II, <span class=\"chem\">theta = pi - pi/6 = 5pi/6</span>.": "鋭角の基準角は <span class=\"chem\">alpha = arctan(3 / (3 sqrt(3))) = arctan(1 / sqrt(3)) = pi/6</span> です。第 2 象限なので <span class=\"chem\">theta = pi - pi/6 = 5pi/6</span> となります。",

    // Modulus-argument (polar) and Euler forms > try it > maths line
    "<i>α</i> = arctan(1 / √3) = <i>π</i> / 6": "<i>α</i> = arctan(1 / √3) = <i>π</i> / 6",

    // Modulus-argument (polar) and Euler forms > try it > maths line
    "Quadrant II: arg(<i>z</i>) = <i>π</i> − <i>π</i> / 6 = <b>5<i>π</i> / 6</b> (≈ 2.62 rad)": "第 II 象限：arg(<i>z</i>) = <i>π</i> − <i>π</i> / 6 = <b>5<i>π</i> / 6</b> (≈ 2.62 rad)",

    // De Moivre's theorem, n-th roots and polynomial roots > data-toc attribute
    "De Moivre & roots": "ド・モアブルの定理と n 乗根",

    // De Moivre's theorem, n-th roots and polynomial roots > h2
    "De Moivre's theorem, <i>n</i>-th roots and polynomial roots": "ド・モアブルの定理・<i>n</i> 乗根と多項式の根",

    // De Moivre's theorem, n-th roots and polynomial roots > p
    "Repeatedly multiplying <span class=\"chem\">z = r(cos theta + i sin theta)</span> by itself <span class=\"chem\">n</span> times multiplies the modulus to <span class=\"chem\">r^n</span> and adds the angle <span class=\"chem\">n</span> times to <span class=\"chem\">n theta</span>. This result is known as <dfn data-def=\"For any complex number r(cos θ + i sin θ) and integer n, [r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ).\">De Moivre's theorem</dfn>. It is proved by induction for <span class=\"chem\">n \\in \\mathbb{Z}^+</span> (worked example below) and is also true for all <span class=\"chem\">n \\in \\mathbb{Z}</span>:": "<span class=\"chem\">z = r(cos theta + i sin theta)</span> を <span class=\"chem\">n</span> 回掛けると、絶対値は <span class=\"chem\">r^n</span> になり、偏角は <span class=\"chem\">n</span> 倍されて <span class=\"chem\">n theta</span> になります。この結果は<dfn data-def=\"任意の複素数 r(cos θ + i sin θ) と整数 n に対して、[r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ) が成り立つこと。\">ド・モアブルの定理 <span class=\"en-term\">(De Moivre's theorem)</span></dfn> と呼ばれます。<span class=\"chem\">n \\in \\mathbb{Z}^+</span> の場合は数学的帰納法で証明でき（下の例題）、すべての <span class=\"chem\">n \\in \\mathbb{Z}</span> に対しても成り立ちます：",

    // De Moivre's theorem, n-th roots and polynomial roots > data-def attribute
    "For any complex number r(cos θ + i sin θ) and integer n, [r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ).": "任意の複素数 r(cos θ + i sin θ) と整数 n に対して、[r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ) が成り立つこと。",

    // De Moivre's theorem, n-th roots and polynomial roots > p
    "For a rational power <span class=\"chem\">n = p/q</span>, the formula gives only <strong>one</strong> of the <span class=\"chem\">q</span> values of <span class=\"chem\">z^{p/q}</span>; the others come from replacing <span class=\"chem\">theta</span> by <span class=\"chem\">theta + 2 pi k</span> (see <span class=\"chem\">n</span>-th roots below).": "有理数の指数 <span class=\"chem\">n = p/q</span> の場合、この公式は <span class=\"chem\">z^{p/q}</span> の <span class=\"chem\">q</span> 個の値のうち <strong>1 つ</strong>しか与えません。残りの値は <span class=\"chem\">theta</span> を <span class=\"chem\">theta + 2 pi k</span> に置き換えると得られます（下の <span class=\"chem\">n</span> 乗根を参照）。",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > h3
    "Proving De Moivre's theorem by mathematical induction": "数学的帰納法によるド・モアブルの定理の証明",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > p
    "Prove by mathematical induction that <span class=\"chem\">(cos theta + i sin theta)^n = cos(n theta) + i sin(n theta)</span> for all <span class=\"chem\">n \\in \\mathbb{Z}^+</span>. <strong>[6 marks]</strong>": "すべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">(cos theta + i sin theta)^n = cos(n theta) + i sin(n theta)</span> が成り立つことを数学的帰納法で証明しなさい (Prove)。 <strong>[6 marks]</strong>",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > data-title attribute
    "Step 1: Base case n = 1": "ステップ 1：初期条件 n = 1",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > p
    "Check that both sides agree when n = 1.": "n = 1 のとき両辺が一致することを確かめます。",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > maths line
    "For <i>n</i> = 1: LHS = cos <i>θ</i> + <i>i</i> sin <i>θ</i> = RHS, so <i>P</i>(1) is true. <b>[R1]</b>": "<i>n</i> = 1 のとき：LHS = cos <i>θ</i> + <i>i</i> sin <i>θ</i> = RHS より、<i>P</i>(1) は成り立ちます。 <b>[R1]</b>",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > data-title attribute
    "Step 2: Inductive hypothesis n = k": "ステップ 2：帰納法の仮定 n = k",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > p
    "Assume the result for some positive integer k.": "ある正の整数 k に対して結果が成り立つと仮定します。",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > maths line
    "Assume <i>P</i>(<i>k</i>) is true for some <i>k</i> ∈ ℤ<sup>+</sup>: (cos <i>θ</i> + <i>i</i> sin <i>θ</i>)<sup><i>k</i></sup> = cos <i>kθ</i> + <i>i</i> sin <i>kθ</i>. <b>[M1]</b>": "ある <i>k</i> ∈ ℤ<sup>+</sup> に対して <i>P</i>(<i>k</i>) が成り立つと仮定する：(cos <i>θ</i> + <i>i</i> sin <i>θ</i>)<sup><i>k</i></sup> = cos <i>kθ</i> + <i>i</i> sin <i>kθ</i>。 <b>[M1]</b>",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > data-title attribute
    "Step 3: Inductive step n = k + 1": "ステップ 3：帰納段階 n = k + 1",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > p
    "Split off one factor, use the hypothesis, expand, then use the compound angle identities for cos(A + B) and sin(A + B).": "因数を 1 つ分けて仮定を使い、展開してから cos(A + B) と sin(A + B) の加法定理を使います。",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > maths line
    "= cos((<i>k</i> + 1)<i>θ</i>) + <i>i</i> sin((<i>k</i> + 1)<i>θ</i>), so <i>P</i>(<i>k</i> + 1) is true. <b>[A1]</b>": "= cos((<i>k</i> + 1)<i>θ</i>) + <i>i</i> sin((<i>k</i> + 1)<i>θ</i>) となり、<i>P</i>(<i>k</i> + 1) は成り立ちます。 <b>[A1]</b>",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > data-title attribute
    "Step 4: Conclusion sentence": "ステップ 4：結びの文",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > p
    "Link the base case and the inductive step.": "初期条件と帰納段階を結びつけます。",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > maths line
    "Since <i>P</i>(1) is true, and <i>P</i>(<i>k</i>) being true implies <i>P</i>(<i>k</i> + 1) is true, by the principle of mathematical induction <i>P</i>(<i>n</i>) is true for all <i>n</i> ∈ ℤ<sup>+</sup>. <b>[R1]</b>": "<i>P</i>(1) が成り立ち、かつ <i>P</i>(<i>k</i>) が成り立つとき <i>P</i>(<i>k</i> + 1) も成り立つので、数学的帰納法により、すべての <i>n</i> ∈ ℤ<sup>+</sup> に対して <i>P</i>(<i>n</i>) が成り立つ。 <b>[R1]</b>",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > p
    "(cos θ + i sin θ)<sup>n</sup> = cos nθ + i sin nθ for all n ∈ ℤ⁺. Multiplying by r<sup>n</sup> gives the form with modulus r.": "すべての n ∈ ℤ⁺ に対して (cos θ + i sin θ)<sup>n</sup> = cos nθ + i sin nθ。両辺に r<sup>n</sup> を掛けると絶対値 r の形が得られます。",

    // De Moivre's theorem, n-th roots and polynomial roots > key idea > p
    "<strong>Euler bridge identities for trigonometric proofs (useful for Paper 3-style proofs):</strong> For a complex number on the unit circle <span class=\"chem\">z = cos theta + i sin theta = e^{i theta}</span>, we have <span class=\"chem\">z^{-1} = cos theta - i sin theta = e^{-i theta}</span>. By De Moivre's theorem:": "<strong>三角恒等式の証明に使うオイラーの恒等式（Paper 3 形式の証明に役立つ）：</strong> 単位円上の複素数 <span class=\"chem\">z = cos theta + i sin theta = e^{i theta}</span> に対して、<span class=\"chem\">z^{-1} = cos theta - i sin theta = e^{-i theta}</span> です。ド・モアブルの定理より：",

    // De Moivre's theorem, n-th roots and polynomial roots > key idea > p
    "<span class=\"chem\">z^n + z^{-n} = 2 cos(n theta)</span> &nbsp;&nbsp;and&nbsp;&nbsp; <span class=\"chem\">z^n - z^{-n} = 2i sin(n theta)</span>.": "<span class=\"chem\">z^n + z^{-n} = 2 cos(n theta)</span> &nbsp;&nbsp;かつ&nbsp;&nbsp; <span class=\"chem\">z^n - z^{-n} = 2i sin(n theta)</span>。",

    // De Moivre's theorem, n-th roots and polynomial roots > key idea > p
    "Expanding <span class=\"chem\">(z + z^{-1})^n = (2 cos theta)^n</span> expresses powers like <span class=\"chem\">cos^4 theta</span> in terms of multiple angles <span class=\"chem\">cos(4 theta)</span> and <span class=\"chem\">cos(2 theta)</span> so they can be integrated directly!": "<span class=\"chem\">(z + z^{-1})^n = (2 cos theta)^n</span> を展開すると、<span class=\"chem\">cos^4 theta</span> のような累乗を <span class=\"chem\">cos(4 theta)</span> や <span class=\"chem\">cos(2 theta)</span> などの倍角の和で表すことができ、そのまま積分できるようになります。",

    // De Moivre's theorem, n-th roots and polynomial roots > h3
    "Solving <span class=\"chem\">z^n = w</span>: the <span class=\"chem\">n</span>-th roots of a complex number": "<span class=\"chem\">z^n = w</span> を解く：複素数の <span class=\"chem\">n</span> 乗根",

    // De Moivre's theorem, n-th roots and polynomial roots > p
    "Every non-zero complex number <span class=\"chem\">w = r e^{i theta}</span> has <strong><span class=\"chem\">n</span> distinct <span class=\"chem\">n</span>-th roots</strong>. Because adding <span class=\"chem\">2 pi k</span> (<span class=\"chem\">k \\in \\mathbb{Z}</span>) to the argument of <span class=\"chem\">w</span> leaves <span class=\"chem\">w</span> unchanged, writing <span class=\"chem\">w = r e^{i(theta + 2 pi k)}</span> and taking the <span class=\"chem\">(1/n)</span>-th power gives:": "0 でないすべての複素数 <span class=\"chem\">w = r e^{i theta}</span> には、<strong><span class=\"chem\">n</span> 個の異なる <span class=\"chem\">n</span> 乗根</strong>があります。<span class=\"chem\">w</span> の偏角に <span class=\"chem\">2 pi k</span>（<span class=\"chem\">k \\in \\mathbb{Z}</span>）を足しても <span class=\"chem\">w</span> の値は変わらないため、<span class=\"chem\">w = r e^{i(theta + 2 pi k)}</span> として <span class=\"chem\">(1/n)</span> 乗すると次の式が得られます：",

    // De Moivre's theorem, n-th roots and polynomial roots > equation > maths line
    "<i>z</i><sub><i>k</i></sub> = <i>r</i><sup>1/<i>n</i></sup> exp<span class=\" brackets\">(<i>i</i> <span class=\"frac\"><span><i>θ</i> + 2<i>πk</i></span><span><i>n</i></span></span>)</span> = <i>r</i><sup>1/<i>n</i></sup> cis<span class=\" brackets\">(<span class=\"frac\"><span><i>θ</i> + 2<i>πk</i></span><span><i>n</i></span></span>)</span>, &nbsp;&nbsp; <i>k</i> = 0, 1, 2, …, <i>n</i> − 1": "<i>z</i><sub><i>k</i></sub> = <i>r</i><sup>1/<i>n</i></sup> exp<span class=\" brackets\">(<i>i</i> <span class=\"frac\"><span><i>θ</i> + 2<i>πk</i></span><span><i>n</i></span></span>)</span> = <i>r</i><sup>1/<i>n</i></sup> cis<span class=\" brackets\">(<span class=\"frac\"><span><i>θ</i> + 2<i>πk</i></span><span><i>n</i></span></span>)</span>, &nbsp;&nbsp; <i>k</i> = 0, 1, 2, …, <i>n</i> − 1",

    // De Moivre's theorem, n-th roots and polynomial roots > li
    "<strong>Regular <span class=\"chem\">n</span>-gon geometry</strong>: All <span class=\"chem\">n</span> roots have the exact same modulus <span class=\"chem\">r^{1/n}</span> and are equally spaced around the circle of radius <span class=\"chem\">r^{1/n}</span> by an angle of <span class=\"chem\">2 pi / n</span> radians. For <span class=\"chem\">n &gt;= 3</span>, they form the vertices of a <strong>regular <span class=\"chem\">n</span>-gon</strong> centered at the origin, so the <strong>sum of all <span class=\"chem\">n</span> roots is always <span class=\"chem\">0</span></strong>.": "<strong>正 <span class=\"chem\">n</span> 角形の幾何学</strong>：<span class=\"chem\">n</span> 個の根はすべて同じ絶対値 <span class=\"chem\">r^{1/n}</span> をもち、半径 <span class=\"chem\">r^{1/n}</span> の円周上に <span class=\"chem\">2 pi / n</span> ラジアンごとの等間隔で並びます。<span class=\"chem\">n &gt;= 3</span> のとき、これらは原点を中心とする<strong>正 <span class=\"chem\">n</span> 角形</strong>の頂点をなすため、<strong><span class=\"chem\">n</span> 個の根の和は常に <span class=\"chem\">0</span></strong> になります。",

    // De Moivre's theorem, n-th roots and polynomial roots > li
    "<strong>Roots of unity (<span class=\"chem\">z^n = 1</span>)</strong>: Setting <span class=\"chem\">r = 1, theta = 0</span> gives the <span class=\"chem\">n</span>-th roots of unity <span class=\"chem\">1, omega, omega^2, ..., omega^{n-1}</span> where <span class=\"chem\">omega = e^{2 pi i / n}</span>, which satisfy <span class=\"chem\">1 + omega + omega^2 + ... + omega^{n-1} = 0</span>.": "<strong>1 の n 乗根（<span class=\"chem\">z^n = 1</span>）</strong>：<span class=\"chem\">r = 1, theta = 0</span> とおくと、1 の <span class=\"chem\">n</span> 乗根 <span class=\"chem\">1, omega, omega^2, ..., omega^{n-1}</span>（<span class=\"chem\">omega = e^{2 pi i / n}</span>）が得られ、<span class=\"chem\">1 + omega + omega^2 + ... + omega^{n-1} = 0</span> を満たします。",

    // De Moivre's theorem, n-th roots and polynomial roots > widget > data-title attribute
    "n-th roots of a complex number on the Argand diagram": "複素数平面上の n 乗根",

    // De Moivre's theorem, n-th roots and polynomial roots > widget > figcaption
    "Choose the degree <span class=\"chem\">n</span> (from 2 to 8) and the modulus <span class=\"chem\">r</span> and argument <span class=\"chem\">theta</span> of <span class=\"chem\">w</span> in <span class=\"chem\">z^n = w</span>. The <span class=\"chem\">n</span> roots lie on the circle of radius <span class=\"chem\">r^{1/n}</span> spaced by <span class=\"chem\">2 pi / n</span> radians, forming a regular polygon whose centre of mass is the origin.": "<span class=\"chem\">z^n = w</span> の次数 <span class=\"chem\">n</span>（2 〜 8）と、<span class=\"chem\">w</span> の絶対値 <span class=\"chem\">r</span>・偏角 <span class=\"chem\">theta</span> を選びましょう。<span class=\"chem\">n</span> 個の根は半径 <span class=\"chem\">r^{1/n}</span> の円周上に <span class=\"chem\">2 pi / n</span> ラジアン間隔で並び、重心が原点にある正多角形を作ります。",

    // De Moivre's theorem, n-th roots and polynomial roots > h3
    "Complex Conjugate Root Theorem for real polynomials": "実数係数多項式の共役複素数根の定理",

    // De Moivre's theorem, n-th roots and polynomial roots > p
    "If a polynomial <span class=\"chem\">P(z) = a_n z^n + a_{n-1} z^{n-1} + ... + a_1 z + a_0</span> has <strong>real coefficients</strong> (<span class=\"chem\">a_k \\in \\mathbb{R}</span>) and <span class=\"chem\">z_1 = a + bi</span> (<span class=\"chem\">b != 0</span>) is a root of <span class=\"chem\">P(z) = 0</span>, then its complex conjugate <span class=\"chem\">z_1^* = a - bi</span> is also a root. Together, the conjugate pair produces a <strong>real quadratic factor</strong> of <span class=\"chem\">P(z)</span>:": "多項式 <span class=\"chem\">P(z) = a_n z^n + a_{n-1} z^{n-1} + ... + a_1 z + a_0</span> が<strong>実数係数</strong>（<span class=\"chem\">a_k \\in \\mathbb{R}</span>）であり、<span class=\"chem\">z_1 = a + bi</span>（<span class=\"chem\">b != 0</span>）が <span class=\"chem\">P(z) = 0</span> の解であるとき、その共役な複素数 <span class=\"chem\">z_1^* = a - bi</span> もまた解になります。この共役なペアを掛け合わせると、<span class=\"chem\">P(z)</span> の<strong>実数係数の 2 次因数</strong>が得られます：",

    // De Moivre's theorem, n-th roots and polynomial roots > not needed for IB > p
    "<strong>Not needed for IB Math AA HL:</strong> General complex loci on the Argand plane (such as Apollonius circles <span class=\"chem\">|z - z_1| = k|z - z_2|</span> or half-line/arc loci <span class=\"chem\">arg((z - z_1)/(z - z_2)) = alpha</span>), <span class=\"chem\">2 × 2</span> matrix representations of complex numbers, and complex logarithms or trigonometric functions of complex inputs are <strong>not</strong> in the AA HL syllabus.": "<strong>IB Math AA HL の範囲外：</strong> 複素数平面上の一般的な軌跡（アポロニウスの円 <span class=\"chem\">|z - z_1| = k|z - z_2|</span> や半直線・円弧の軌跡 <span class=\"chem\">arg((z - z_1)/(z - z_2)) = alpha</span> など）、複素数の <span class=\"chem\">2 × 2</span> 行列表現、複素対数や複素数を引数とする三角関数は AA HL のシラバスには<strong>含まれません</strong>。",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > h3
    "Finding all cube roots of a complex number and using conjugate pairs": "複素数の 3 乗根をすべて求め、共役複素数根の定理を使う",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > p
    "(a) Solve the equation <span class=\"chem\">z^3 = -4 sqrt(2) + 4 sqrt(2)i</span>, giving your answers in the form <span class=\"chem\">r e^{i theta}</span> where <span class=\"chem\">r &gt; 0</span> and <span class=\"chem\">-pi &lt; theta &lt;= pi</span>. <strong>[5 marks]</strong>": "(a) 方程式 <span class=\"chem\">z^3 = -4 sqrt(2) + 4 sqrt(2)i</span> を解き、答えを <span class=\"chem\">r e^{i theta}</span>（<span class=\"chem\">r &gt; 0</span>、<span class=\"chem\">-pi &lt; theta &lt;= pi</span>）の形で表しなさい。 <strong>[5 marks]</strong>",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > p
    "(b) Given that <span class=\"chem\">z = 2 - i</span> is a root of the real polynomial <span class=\"chem\">P(z) = z^3 - 7z^2 + 17z - 15 = 0</span>, find the other two roots. <strong>[4 marks]</strong>": "(b) 実数係数の多項式方程式 <span class=\"chem\">P(z) = z^3 - 7z^2 + 17z - 15 = 0</span> の解の 1 つが <span class=\"chem\">z = 2 - i</span> であるとき、残りの 2 つの解を求めなさい (Find)。 <strong>[4 marks]</strong>",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > data-title attribute
    "Convert w = −4√2 + 4√2 i to Euler form with general argument": "w = −4√2 + 4√2 i を一般角を用いてオイラー形式に変換する",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > p
    "First compute |w| and locate w in Quadrant II to get its principal argument, then add 2πk for the three roots.": "まず |w| を計算し、w が第 2 象限にあることから主偏角を求めたあと、3 つの根を得るために 2πk を加えます。",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > maths line
    "Quadrant II: arg(<i>w</i>) = <i>π</i> − <span class=\"frac\"><span><i>π</i></span><span>4</span></span> = <span class=\"frac\"><span>3<i>π</i></span><span>4</span></span> ⇒ <i>z</i><sup>3</sup> = 8 <i>e</i><sup><i>i</i>(3<i>π</i>/4 + 2<i>πk</i>)</sup> <b>[A1]</b>": "第 II 象限：arg(<i>w</i>) = <i>π</i> − <span class=\"frac\"><span><i>π</i></span><span>4</span></span> = <span class=\"frac\"><span>3<i>π</i></span><span>4</span></span> ⇒ <i>z</i><sup>3</sup> = 8 <i>e</i><sup><i>i</i>(3<i>π</i>/4 + 2<i>πk</i>)</sup> <b>[A1]</b>",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > data-title attribute
    "Take the cube root for k = 0, 1, −1 to stay in (−π, π]": "(−π, π] に収まるように k = 0, 1, −1 として 3 乗根をとる",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > p
    "Taking the 1/3 power gives modulus 8<sup>1/3</sup> = 2 and angles (3π/4 + 2πk)/3 = π/4 + 2πk/3.": "1/3 乗すると、絶対値は 8<sup>1/3</sup> = 2、偏角は (3π/4 + 2πk)/3 = π/4 + 2πk/3 になります。",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > data-title attribute
    "Use the Conjugate Root Theorem and factorize P(z)": "共役複素数根の定理を使って P(z) を因数分解する",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > p
    "Because all coefficients of P(z) are real, the conjugate (2 − i)* = 2 + i is automatically a root, giving a quadratic factor z² − 4z + 5.": "P(z) の係数はすべて実数なので、共役な複素数 (2 − i)* = 2 + i も自動的に解となり、2 次因数 z² − 4z + 5 が得られます。",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > maths line
    "Since coefficients are real, <b><i>z</i> = 2 + <i>i</i></b> is also a root. <b>[R1]</b>": "係数がすべて実数であるため、<b><i>z</i> = 2 + <i>i</i></b> もまた解である。 <b>[R1]</b>",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > p
    "(a) 2e<sup>iπ/4</sup>, 2e<sup>11πi/12</sup>, 2e<sup>−5πi/12</sup> &nbsp;&nbsp; (b) 2 + i and 3": "(a) 2e<sup>iπ/4</sup>, 2e<sup>11πi/12</sup>, 2e<sup>−5πi/12</sup> &nbsp;&nbsp; (b) 2 + i と 3",

    // De Moivre's theorem, n-th roots and polynomial roots > try it > p
    "Let <span class=\"chem\">z = sqrt(3) + i</span>. Find the <strong>smallest positive integer <span class=\"chem\">n</span></strong> such that <span class=\"chem\">z^n</span> is a <strong>real number</strong>.": "<span class=\"chem\">z = sqrt(3) + i</span> とする。<span class=\"chem\">z^n</span> が<strong>実数</strong>となる<strong>最小の正の整数 <span class=\"chem\">n</span></strong> を求めなさい (Find)。",

    // De Moivre's theorem, n-th roots and polynomial roots > try it > li
    "Convert <span class=\"chem\">z = sqrt(3) + i</span> to polar/Euler form: <span class=\"chem\">r = 2</span> and <span class=\"chem\">theta = arg(z) = pi/6</span>.": "<span class=\"chem\">z = sqrt(3) + i</span> を極形式・オイラー形式に変換します：<span class=\"chem\">r = 2</span>、<span class=\"chem\">theta = arg(z) = pi/6</span>。",

    // De Moivre's theorem, n-th roots and polynomial roots > try it > li
    "By De Moivre's theorem, <span class=\"chem\">z^n = 2^n(cos(n pi/6) + i sin(n pi/6))</span>. For <span class=\"chem\">z^n</span> to be real, we need <span class=\"chem\">Im(z^n) = 0 &lt;=&gt; sin(n pi/6) = 0</span>.": "ド・モアブルの定理より <span class=\"chem\">z^n = 2^n(cos(n pi/6) + i sin(n pi/6))</span> です。<span class=\"chem\">z^n</span> が実数になるには <span class=\"chem\">Im(z^n) = 0 &lt;=&gt; sin(n pi/6) = 0</span> が必要です。",

    // De Moivre's theorem, n-th roots and polynomial roots > try it > maths line
    "Im(<i>z</i><sup><i>n</i></sup>) = 0 ⇔ sin(<i>nπ</i>/6) = 0 ⇔ <i>nπ</i>/6 = <i>kπ</i> ⇒ least <i>n</i> ∈ ℤ<sup>+</sup> is <b>6</b>": "Im(<i>z</i><sup><i>n</i></sup>) = 0 ⇔ sin(<i>nπ</i>/6) = 0 ⇔ <i>nπ</i>/6 = <i>kπ</i> ⇒ 最小の <i>n</i> ∈ ℤ<sup>+</sup> は <b>6</b>",

    // Check your understanding > data-toc attribute
    "Practice": "演習問題",

    // Check your understanding > h2
    "Check your understanding": "理解度チェック",

    // Check your understanding > data-title attribute
    "Topic 1.4 practice check": "Topic 1.4 確認問題",

    // widget string (assets/js/widgets-t1-4.js)
    "Modulus r₁ = |z₁|": "絶対値 r₁ = |z₁|",

    // widget string (assets/js/widgets-t1-4.js)
    "Angle θ₁ (°)": "偏角 θ₁ (°)",

    // widget string (assets/js/widgets-t1-4.js)
    "Modulus r₂ = |z₂|": "絶対値 r₂ = |z₂|",

    // widget string (assets/js/widgets-t1-4.js)
    "Angle θ₂ (°)": "偏角 θ₂ (°)",

    // widget string (assets/js/widgets-t1-4.js)
    "Preset: × i (90° rotation)": "プリセット：× i（90° 回転）",

    // widget string (assets/js/widgets-t1-4.js)
    "Preset: z · z* = |z|²": "プリセット：z · z* = |z|²",

    // widget string (assets/js/widgets-t1-4.js)
    "z₁ (Euler & Cartesian)": "z₁（オイラー形式・直交座標形式）",

    // widget string (assets/js/widgets-t1-4.js)
    "z₂ (Euler & Cartesian)": "z₂（オイラー形式・直交座標形式）",

    // widget string (assets/js/widgets-t1-4.js)
    "Product z₁z₂ = r₁r₂ e<sup>i(θ₁+θ₂)</sup>": "積 z₁z₂ = r₁r₂ e<sup>i(θ₁+θ₂)</sup>",

    // widget string (assets/js/widgets-t1-4.js)
    "Principal arg(z₁z₂)": "主偏角 arg(z₁z₂)",

    // widget string (assets/js/widgets-t1-4.js)
    "Argand diagram showing complex vectors z₁, z₂ and their product z₁z₂": "複素数ベクトル z₁, z₂ とその積 z₁z₂ を表す複素数平面",

    // widget string (assets/js/widgets-t1-4.js)
    "Re(z)": "Re(z)",

    // widget string (assets/js/widgets-t1-4.js)
    "Im(z)": "Im(z)",

    // widget string (assets/js/widgets-t1-4.js)
    "Degree n (number of roots)": "次数 n（根の個数）",

    // widget string (assets/js/widgets-t1-4.js)
    "Target modulus |w| = r": "w の絶対値 |w| = r",

    // widget string (assets/js/widgets-t1-4.js)
    "Target angle arg(w) = θ (°)": "w の偏角 arg(w) = θ (°)",

    // widget string (assets/js/widgets-t1-4.js)
    "5th roots of unity (z⁵ = 1)": "1 の 5 乗根 (z⁵ = 1)",

    // widget string (assets/js/widgets-t1-4.js)
    "Cube roots of −8 (z³ = −8)": "−8 の 3 乗根 (z³ = −8)",

    // widget string (assets/js/widgets-t1-4.js)
    "4th roots of −8 + 8√3 i": "−8 + 8√3 i の 4 乗根",

    // widget string (assets/js/widgets-t1-4.js)
    "Root circle radius r<sup>1/n</sup>": "根が乗る円の半径 r<sup>1/n</sup>",

    // widget string (assets/js/widgets-t1-4.js)
    "Angular spacing 2π/n": "角度間隔 2π/n",

    // widget string (assets/js/widgets-t1-4.js)
    "Principal root z₀ (k = 0)": "主根 z₀ (k = 0)",

    // widget string (assets/js/widgets-t1-4.js)
    "Sum of all n roots": "n 個の根の和",

    // widget string (assets/js/widgets-t1-4.js)
    "Argand diagram showing the n-th roots of w forming a regular polygon": "正多角形をなす w の n 乗根を表す複素数平面",

    // widget string (assets/js/widgets-t1-4.js)
    "Regular n-gon of roots": "根が作る正 n 角形",

  }
});
