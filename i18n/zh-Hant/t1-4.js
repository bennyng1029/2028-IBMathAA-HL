/* t1-4 — zh-Hant translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't1-4', {
  strings: {

    // page title (browser tab)
    "1.4 Complex numbers and De Moivre's theorem | Analysis Lab": "1.4 複數與棣美弗定理 | Analysis Lab",

    // Complex numbers and De Moivre's theorem > page header > p
    "Topic 1.4 · AHL 1.12–1.14 · Additional HL": "課題 1.4 · AHL 1.12–1.14 · Additional HL",

    // Complex numbers and De Moivre's theorem > page header > h1
    "Complex numbers and De Moivre's theorem": "複數與棣美弗定理",

    // Complex numbers and De Moivre's theorem > page header > span
    "How does extending the real number line into the two-dimensional Argand plane turn algebraic powers and roots into geometric rotations and regular polygons?": "把實數線擴展至二維阿根平面（複平面）後，如何把代數的乘方與開方轉化為幾何旋轉與正多邊形？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "學習清單",

    // What you need to be able to do > h2
    "What you need to be able to do": "你需要掌握的能力",

    // What you need to be able to do > checklist > Additional HL > span
    "Add, subtract, multiply and divide complex numbers in Cartesian form <span class=\"chem\">z = a + bi</span>, and identify <span class=\"chem\">Re(z) = a</span> and <span class=\"chem\">Im(z) = b</span>.": "對笛卡兒形式 <span class=\"chem\">z = a + bi</span> 的複數進行加減乘除運算，並辨識實部 <span class=\"chem\">Re(z) = a</span> 與虛部 <span class=\"chem\">Im(z) = b</span>。",

    // What you need to be able to do > checklist > Additional HL > span
    "Use the complex conjugate <span class=\"chem\">z* = a - bi</span> and the property <span class=\"chem\">z z* = |z|^2 = a^2 + b^2</span> to rationalize complex denominators and solve equations.": "運用共軛複數 <span class=\"chem\">z* = a - bi</span> 及性質 <span class=\"chem\">z z* = |z|^2 = a^2 + b^2</span> 將複數分母有理化並解方程。",

    // What you need to be able to do > checklist > Additional HL > span
    "Convert between Cartesian form <span class=\"chem\">a + bi</span>, modulus-argument (polar) form <span class=\"chem\">r(cos theta + i sin theta) = r cis theta</span>, and Euler form <span class=\"chem\">r e^{i theta}</span> with correct quadrant adjustment for <span class=\"chem\">arg(z)</span>.": "在笛卡兒形式 <span class=\"chem\">a + bi</span>、模－幅角（極坐標）形式 <span class=\"chem\">r(cos theta + i sin theta) = r cis theta</span> 與歐拉形式 <span class=\"chem\">r e^{i theta}</span> 之間互相轉換，並為 <span class=\"chem\">arg(z)</span> 作正確的象限調整。",

    // What you need to be able to do > checklist > Additional HL > span
    "Interpret complex multiplication and division geometrically on the Argand diagram as scaling of moduli and rotation of arguments.": "在阿根圖上從幾何角度闡釋複數的乘法與除法，理解為模的伸縮與幅角的旋轉。",

    // What you need to be able to do > checklist > Additional HL > span
    "Apply De Moivre's theorem <span class=\"chem\">[r(cos theta + i sin theta)]^n = r^n(cos(n theta) + i sin(n theta))</span> to compute powers and derive multiple-angle trigonometric identities.": "運用棣美弗定理 <span class=\"chem\">[r(cos theta + i sin theta)]^n = r^n(cos(n theta) + i sin(n theta))</span> 計算乘方及推導倍角三角恒等式。",

    // What you need to be able to do > checklist > Additional HL > span
    "Find all <span class=\"chem\">n</span> distinct <span class=\"chem\">n</span>-th roots of a complex number <span class=\"chem\">z^n = w</span> and represent them as the vertices of a regular <span class=\"chem\">n</span>-gon on the Argand diagram.": "求複數方程 <span class=\"chem\">z^n = w</span> 的全部 <span class=\"chem\">n</span> 個相異 <span class=\"chem\">n</span> 次根，並在阿根圖上把它們表示為正 <span class=\"chem\">n</span> 邊形的頂點。",

    // What you need to be able to do > checklist > Additional HL > span
    "Apply the Complex Conjugate Root Theorem to factorize and solve polynomial equations with real coefficients.": "運用共軛根定理把實係數多項式方程因式分解並求解。",

    // Question decoder: Cartesian vs Polar/Euler form > data-toc attribute
    "Question decoder": "題型解碼",

    // Question decoder: Cartesian vs Polar/Euler form > h2
    "Question decoder: Cartesian vs Polar/Euler form": "題型解碼：笛卡兒形式與極坐標／歐拉形式",

    // Question decoder: Cartesian vs Polar/Euler form > p
    "Almost every complex number exam problem comes down to one decision: <strong>stay in Cartesian form</strong> (<span class=\"chem\">a + bi</span>) or <strong>switch to polar/Euler form</strong> (<span class=\"chem\">r e^{i theta}</span>). Use this table to pick the fastest path every time.": "幾乎每道複數考試題的核心決定都只有一個：<strong>留在笛卡兒形式</strong>（<span class=\"chem\">a + bi</span>）還是<strong>轉換為極坐標／歐拉形式</strong>（<span class=\"chem\">r e^{i theta}</span>）。利用下表每次都能選出最快路徑。",

    // Question decoder: Cartesian vs Polar/Euler form > table > caption
    "Question decoder — Complex numbers and De Moivre's theorem": "題型解碼 — 複數與棣美弗定理",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "What the exam question says": "題目中的常見字眼",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "Which form &amp; formula to use": "應選用的形式與公式",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "Paper 1 (No GDC) vs Paper 2 / 3 (GDC)": "Paper 1（不可用計算機）與 Paper 2 / 3（可用 GDC）策略",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "“Express <span class=\"chem\">(3 + 4i) / (1 - 2i)</span> in the form <span class=\"chem\">a + bi</span>” or “Solve <span class=\"chem\">(x + yi)(2 - i) = 5</span>”": "「把 <span class=\"chem\">(3 + 4i) / (1 - 2i)</span> 表示為 <span class=\"chem\">a + bi</span> 形式」或「解 <span class=\"chem\">(x + yi)(2 - i) = 5</span>」",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "<strong>Cartesian form</strong> <span class=\"chem\">z = a + bi</span>. Multiply numerator and denominator by the conjugate <span class=\"chem\">z_2*</span>, or expand and equate real parts and imaginary parts separately.": "<strong>笛卡兒形式</strong> <span class=\"chem\">z = a + bi</span>。分子與分母同乘分母的共軛複數 <span class=\"chem\">z_2*</span>，或展開後分別比較實部與虛部。",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "<strong>P1</strong>: Use <span class=\"chem\">(c + di)(c - di) = c^2 + d^2</span> (always a positive real number).<br><strong>P2</strong>: Enter <span class=\"chem\">i</span> directly on the GDC to compute or verify in seconds.": "<strong>Paper 1</strong>：利用 <span class=\"chem\">(c + di)(c - di) = c^2 + d^2</span>（必為正實數）。<br><strong>Paper 2</strong>：直接在 GDC 輸入 <span class=\"chem\">i</span>，數秒內即可計算或驗算。",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "“Given that <span class=\"chem\">2 - 3i</span> is a root of <span class=\"chem\">P(z) = 0</span> where all coefficients are real…”": "「已知 <span class=\"chem\">2 - 3i</span> 是實係數方程 <span class=\"chem\">P(z) = 0</span> 的一個根……」",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "<strong>Conjugate Root Theorem</strong> (Cartesian). Immediately write down the second root <span class=\"chem\">z_2 = 2 + 3i</span> and form the real quadratic factor <span class=\"chem\">(z - z_1)(z - z_1*) = z^2 - 2Re(z_1)z + |z_1|^2</span>.": "<strong>共軛根定理</strong>（笛卡兒形式）。立即寫出第二個根 <span class=\"chem\">z_2 = 2 + 3i</span>，並組成實係數二次因式 <span class=\"chem\">(z - z_1)(z - z_1*) = z^2 - 2Re(z_1)z + |z_1|^2</span>。",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "<strong>P1</strong>: Here <span class=\"chem\">z^2 - 4z + 13</span> is a factor of <span class=\"chem\">P(z)</span>; use polynomial division or inspection to find remaining roots.<br><strong>P2</strong>: Use GDC <span class=\"mono\">polyRoots</span> to check all roots.": "<strong>Paper 1</strong>：此處 <span class=\"chem\">z^2 - 4z + 13</span> 是 <span class=\"chem\">P(z)</span> 的因式；用多項式長除法或觀察法求其餘的根。<br><strong>Paper 2</strong>：用 GDC 的 <span class=\"mono\">polyRoots</span> 檢查所有根。",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "“Calculate <span class=\"chem\">(1 - sqrt(3)i)^{12}</span>” or “Find the least positive integer <span class=\"chem\">n</span> such that <span class=\"chem\">z^n</span> is real / purely imaginary”": "「計算 <span class=\"chem\">(1 - sqrt(3)i)^{12}</span>」或「求使 <span class=\"chem\">z^n</span> 為實數／純虛數的最小正整數 <span class=\"chem\">n</span>」",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "<strong>Polar / Euler form</strong> + <strong>De Moivre's theorem</strong>: <span class=\"chem\">z^n = r^n(cos(n theta) + i sin(n theta))</span>. Never expand high powers in Cartesian form!": "<strong>極坐標／歐拉形式</strong> + <strong>棣美弗定理</strong>：<span class=\"chem\">z^n = r^n(cos(n theta) + i sin(n theta))</span>。切勿以笛卡兒形式硬展開高次冪！",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "Real <span class=\"chem\">&lt;=&gt; sin(n theta) = 0 =&gt; n theta = k pi</span>.<br>Purely imaginary <span class=\"chem\">&lt;=&gt; cos(n theta) = 0 =&gt; n theta = pi/2 + k pi</span>.": "實數 <span class=\"chem\">&lt;=&gt; sin(n theta) = 0 =&gt; n theta = k pi</span>。<br>純虛數 <span class=\"chem\">&lt;=&gt; cos(n theta) = 0 =&gt; n theta = pi/2 + k pi</span>。",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "“Find the exact value of <span class=\"chem\">cos(pi/12)</span>” using two complex numbers <span class=\"chem\">z_1, z_2</span>": "「利用兩個複數 <span class=\"chem\">z_1, z_2</span> 求 <span class=\"chem\">cos(pi/12)</span> 的準確值」",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "<strong>Bridge between both forms</strong>: compute <span class=\"chem\">z_1 z_2</span> (or <span class=\"chem\">z_1 / z_2</span>) in Cartesian form AND in polar form, then equate real and imaginary parts.": "<strong>連結兩種形式</strong>：同時以笛卡兒形式及極坐標形式計算 <span class=\"chem\">z_1 z_2</span>（或 <span class=\"chem\">z_1 / z_2</span>），然後比較實部與虛部。",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "Classic Paper 1 Section B technique using exact triangles (<span class=\"chem\">pi/4</span> and <span class=\"chem\">pi/3</span>, whose difference is <span class=\"chem\">pi/12</span>).": "經典 Paper 1 B 部技巧，利用特殊角三角形（<span class=\"chem\">pi/4</span> 與 <span class=\"chem\">pi/3</span>，兩者之差為 <span class=\"chem\">pi/12</span>）。",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "“Solve <span class=\"chem\">z^n = w</span>” (e.g. <span class=\"chem\">z^4 = -8 + 8 sqrt(3)i</span>)": "「解 <span class=\"chem\">z^n = w</span>」（例如 <span class=\"chem\">z^4 = -8 + 8 sqrt(3)i</span>）",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "<strong>Polar / Euler form</strong> with general angle <span class=\"chem\">theta + 2 pi k</span>:<br><span class=\"chem\">z_k = r^{1/n} e^{i(theta + 2 pi k)/n}</span> for <span class=\"chem\">k = 0, 1, ..., n - 1</span>.": "<strong>極坐標／歐拉形式</strong>配一般角 <span class=\"chem\">theta + 2 pi k</span>：<br><span class=\"chem\">z_k = r^{1/n} e^{i(theta + 2 pi k)/n}</span>，其中 <span class=\"chem\">k = 0, 1, ..., n - 1</span>。",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "Sketch the regular <span class=\"chem\">n</span>-gon on a circle of radius <span class=\"chem\">r^{1/n}</span> with angular spacing <span class=\"chem\">2 pi / n</span>. Adjust angles to <span class=\"chem\">(-pi, pi]</span> if required.": "在半徑為 <span class=\"chem\">r^{1/n}</span> 的圓上描繪正 <span class=\"chem\">n</span> 邊形，相鄰根的夾角為 <span class=\"chem\">2 pi / n</span>。如有需要，把幅角調整至 <span class=\"chem\">(-pi, pi]</span>。",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "“Show that <span class=\"chem\">cos(4 theta) = 8 cos^4(theta) - 8 cos^2(theta) + 1</span>”": "「證明 <span class=\"chem\">cos(4 theta) = 8 cos^4(theta) - 8 cos^2(theta) + 1</span>」",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "<strong>De Moivre + Binomial expansion</strong>: equate <span class=\"chem\">cos(n theta) = Re((cos theta + i sin theta)^n)</span> and replace <span class=\"chem\">sin^2 theta = 1 - cos^2 theta</span>.": "<strong>棣美弗定理 + 二項式展開</strong>：令 <span class=\"chem\">cos(n theta) = Re((cos theta + i sin theta)^n)</span>，並代換 <span class=\"chem\">sin^2 theta = 1 - cos^2 theta</span>。",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "For the reverse problem (expressing <span class=\"chem\">cos^4 theta</span> in terms of <span class=\"chem\">cos(k theta)</span>), use <span class=\"chem\">2 cos theta = z + z^{-1}</span>.": "若是逆向題型（以 <span class=\"chem\">cos(k theta)</span> 表示 <span class=\"chem\">cos^4 theta</span>），使用 <span class=\"chem\">2 cos theta = z + z^{-1}</span>。",

    // Cartesian form, conjugates and the Argand diagram > data-toc attribute
    "Cartesian & Argand": "笛卡兒形式與阿根圖",

    // Cartesian form, conjugates and the Argand diagram > h2
    "Cartesian form, conjugates and the Argand diagram": "笛卡兒形式、共軛複數與阿根圖",

    // Cartesian form, conjugates and the Argand diagram > p
    "To solve equations like <span class=\"chem\">x^2 + 1 = 0</span> that have no real solutions, we define the <dfn data-def=\"The fundamental imaginary unit satisfying i² = −1.\">imaginary unit</dfn> <span class=\"chem\">i</span> by the property <span class=\"chem\">i^2 = -1</span>. Every <dfn data-def=\"A number of the form z = a + bi where a and b are real numbers and i² = −1.\">complex number</dfn> <span class=\"chem\">z \\in \\mathbb{C}</span> can be written in <strong>Cartesian form</strong>:": "為了解開如 <span class=\"chem\">x^2 + 1 = 0</span> 等沒有實數解的方程，我們定義滿足 <span class=\"chem\">i^2 = -1</span> 的<dfn data-def=\"滿足 i² = −1 的基本虛數單位。\">虛數單位 <span class=\"en-term\">(imaginary unit)</span></dfn> <span class=\"chem\">i</span>。每個<dfn data-def=\"形如 z = a + bi 的數，其中 a 與 b 為實數且 i² = −1。\">複數 <span class=\"en-term\">(complex number)</span></dfn> <span class=\"chem\">z \\in \\mathbb{C}</span> 都可以寫成<strong>笛卡兒形式</strong>：",

    // Cartesian form, conjugates and the Argand diagram > data-def attribute
    "The fundamental imaginary unit satisfying i² = −1.": "滿足 i² = −1 的基本虛數單位。",

    // Cartesian form, conjugates and the Argand diagram > data-def attribute
    "A number of the form z = a + bi where a and b are real numbers and i² = −1.": "形如 z = a + bi 的數，其中 a 與 b 為實數且 i² = −1。",

    // Cartesian form, conjugates and the Argand diagram > equation > dt
    "a = Re(z)": "a = Re(z)",

    // Cartesian form, conjugates and the Argand diagram > equation > dd
    "real part of <i>z</i> (a real number)": "<i>z</i> 的實部（是一個實數）",

    // Cartesian form, conjugates and the Argand diagram > equation > dt
    "b = Im(z)": "b = Im(z)",

    // Cartesian form, conjugates and the Argand diagram > equation > dd
    "imaginary part of <i>z</i> (a real number, without <i>i</i>)": "<i>z</i> 的虛部（是一個實數，不包括 <i>i</i>）",

    // Cartesian form, conjugates and the Argand diagram > equation > dd
    "complex conjugate of <i>z</i> (reflection of <i>z</i> across the real axis)": "<i>z</i> 的共軛複數（<i>z</i> 沿實軸的反射）",

    // Cartesian form, conjugates and the Argand diagram > common mistake > p
    "<strong>Never include <span class=\"chem\">i</span> in <span class=\"chem\">Im(z)</span>!</strong> For <span class=\"chem\">z = 5 - 3i</span>, the imaginary part is the real number <span class=\"chem\">Im(z) = -3</span>, <strong>not</strong> <span class=\"chem\">-3i</span>. Writing <span class=\"chem\">Im(z) = -3i</span> loses the accuracy mark on Paper 1 and Paper 2.": "<strong>切勿在 <span class=\"chem\">Im(z)</span> 中包含 <span class=\"chem\">i</span>！</strong>對於 <span class=\"chem\">z = 5 - 3i</span>，虛部是實數 <span class=\"chem\">Im(z) = -3</span>，而<strong>不是</strong> <span class=\"chem\">-3i</span>。寫成 <span class=\"chem\">Im(z) = -3i</span> 會在 Paper 1 及 Paper 2 失去準確分。",

    // Cartesian form, conjugates and the Argand diagram > h3
    "Powers of <span class=\"chem\">i</span> and arithmetic in Cartesian form": "<span class=\"chem\">i</span> 的冪與笛卡兒形式的四則運算",

    // Cartesian form, conjugates and the Argand diagram > p
    "Because <span class=\"chem\">i^2 = -1</span>, powers of <span class=\"chem\">i</span> repeat in a cycle of length 4: <span class=\"chem\">i^1 = i</span>, <span class=\"chem\">i^2 = -1</span>, <span class=\"chem\">i^3 = -i</span>, <span class=\"chem\">i^4 = 1</span>. To simplify <span class=\"chem\">i^n</span>, divide the exponent <span class=\"chem\">n</span> by 4 and look only at the remainder.": "因為 <span class=\"chem\">i^2 = -1</span>，<span class=\"chem\">i</span> 的冪會以 4 為週期循環：<span class=\"chem\">i^1 = i</span>、<span class=\"chem\">i^2 = -1</span>、<span class=\"chem\">i^3 = -i</span>、<span class=\"chem\">i^4 = 1</span>。要化簡 <span class=\"chem\">i^n</span>，只需把指數 <span class=\"chem\">n</span> 除以 4 並看餘數。",

    // Cartesian form, conjugates and the Argand diagram > li
    "<strong>Addition and subtraction</strong>: Combine real parts and imaginary parts separately: <span class=\"chem\">(a + bi) +- (c + di) = (a +- c) + (b +- d)i</span>.": "<strong>加法與減法</strong>：把實部與虛部分開合併：<span class=\"chem\">(a + bi) +- (c + di) = (a +- c) + (b +- d)i</span>。",

    // Cartesian form, conjugates and the Argand diagram > li
    "<strong>Multiplication</strong>: Expand brackets and replace <span class=\"chem\">i^2</span> with <span class=\"chem\">-1</span>: <span class=\"chem\">(a + bi)(c + di) = (ac - bd) + (ad + bc)i</span>.": "<strong>乘法</strong>：展開括號並把 <span class=\"chem\">i^2</span> 替換為 <span class=\"chem\">-1</span>：<span class=\"chem\">(a + bi)(c + di) = (ac - bd) + (ad + bc)i</span>。",

    // Cartesian form, conjugates and the Argand diagram > li
    "<strong>Division (rationalizing the denominator)</strong>: Multiply both numerator and denominator by the <strong>complex conjugate of the denominator</strong> <span class=\"chem\">c - di</span> so the denominator becomes the real number <span class=\"chem\">c^2 + d^2</span>: <span class=\"chem\">(a + bi) / (c + di) = ((a + bi)(c - di)) / (c^2 + d^2)</span>.": "<strong>除法（有理化分母）</strong>：分子與分母同乘<strong>分母的共軛複數</strong> <span class=\"chem\">c - di</span>，使分母變為實數 <span class=\"chem\">c^2 + d^2</span>：<span class=\"chem\">(a + bi) / (c + di) = ((a + bi)(c - di)) / (c^2 + d^2)</span>。",

    // Cartesian form, conjugates and the Argand diagram > li
    "<strong>Equating real and imaginary parts</strong>: Two complex numbers are equal if and only if both their real parts and their imaginary parts match: <span class=\"chem\">a + bi = c + di &lt;=&gt; a = c</span> and <span class=\"chem\">b = d</span> (provided <span class=\"chem\">a, b, c, d \\in \\mathbb{R}</span>).": "<strong>比較實部與虛部</strong>：兩個複數相等，當且僅當兩者的實部與虛部分別相等：<span class=\"chem\">a + bi = c + di &lt;=&gt; a = c</span> 且 <span class=\"chem\">b = d</span>（前提是 <span class=\"chem\">a, b, c, d \\in \\mathbb{R}</span>）。",

    // Cartesian form, conjugates and the Argand diagram > h3
    "The Argand diagram": "阿根圖",

    // Cartesian form, conjugates and the Argand diagram > p
    "On the <dfn data-def=\"A 2D coordinate plane where the horizontal axis represents Re(z) and the vertical axis represents Im(z).\">Argand diagram</dfn> (complex plane), <span class=\"chem\">z = a + bi</span> is plotted as the point <span class=\"chem\">(a, b)</span> or position vector <span class=\"chem\">(a, b)^T</span>, with the horizontal axis for <span class=\"chem\">Re(z)</span> and the vertical axis for <span class=\"chem\">Im(z)</span>. Taking the conjugate <span class=\"chem\">z^* = a - bi</span> reflects <span class=\"chem\">z</span> across the horizontal real axis, while addition <span class=\"chem\">z_1 + z_2</span> follows standard head-to-tail vector addition.": "在<dfn data-def=\"橫軸代表 Re(z)、縱軸代表 Im(z) 的二維坐標平面。\">阿根圖 <span class=\"en-term\">(Argand diagram)</span></dfn>（複平面）上，<span class=\"chem\">z = a + bi</span> 可繪為點 <span class=\"chem\">(a, b)</span> 或位置向量 <span class=\"chem\">(a, b)^T</span>，橫軸為 <span class=\"chem\">Re(z)</span>，縱軸為 <span class=\"chem\">Im(z)</span>。取共軛複數 <span class=\"chem\">z^* = a - bi</span> 相當於把 <span class=\"chem\">z</span> 沿水平實軸反射，而複數加法 <span class=\"chem\">z_1 + z_2</span> 則遵循標準的首尾相接向量加法。",

    // Cartesian form, conjugates and the Argand diagram > data-def attribute
    "A 2D coordinate plane where the horizontal axis represents Re(z) and the vertical axis represents Im(z).": "橫軸代表 Re(z)、縱軸代表 Im(z) 的 2D 坐標平面。",

    // Cartesian form, conjugates and the Argand diagram > worked example > h3
    "Complex division and equating real and imaginary parts": "複數除法與比較實部、虛部",

    // Cartesian form, conjugates and the Argand diagram > worked example > p
    "Let <span class=\"chem\">z_1 = 2 + 3i</span> and <span class=\"chem\">z_2 = 1 - 2i</span>.": "設 <span class=\"chem\">z_1 = 2 + 3i</span> 及 <span class=\"chem\">z_2 = 1 - 2i</span>。",

    // Cartesian form, conjugates and the Argand diagram > worked example > p
    "(a) Express <span class=\"chem\">w = z_1 / z_2</span> in the form <span class=\"chem\">a + bi</span>, where <span class=\"chem\">a, b \\in \\mathbb{Q}</span>. <strong>[3 marks]</strong>": "(a) 把 <span class=\"chem\">w = z_1 / z_2</span> 表示為 (Express ... in the form) <span class=\"chem\">a + bi</span>，其中 <span class=\"chem\">a, b \\in \\mathbb{Q}</span>。<strong>[3 marks]</strong>",

    // Cartesian form, conjugates and the Argand diagram > worked example > p
    "(b) Find the real numbers <span class=\"chem\">p</span> and <span class=\"chem\">q</span> such that <span class=\"chem\">(p + qi) z_2 = 7 + 4i</span>. <strong>[3 marks]</strong>": "(b) 求 (Find) 實數 <span class=\"chem\">p</span> 及 <span class=\"chem\">q</span> 使得 <span class=\"chem\">(p + qi) z_2 = 7 + 4i</span>。<strong>[3 marks]</strong>",

    // Cartesian form, conjugates and the Argand diagram > worked example > data-title attribute
    "Multiply numerator and denominator of w by the conjugate of z₂": "w 的分子與分母同乘 z₂ 的共軛複數",

    // Cartesian form, conjugates and the Argand diagram > worked example > p
    "The denominator is z₂ = 1 − 2i, so its conjugate is z₂* = 1 + 2i. Multiplying by (1 + 2i)/(1 + 2i) turns the denominator into 1² + (−2)² = 5.": "分母為 z₂ = 1 − 2i，故其共軛複數為 z₂* = 1 + 2i。乘以 (1 + 2i)/(1 + 2i) 會把分母化為 1² + (−2)² = 5。",

    // Cartesian form, conjugates and the Argand diagram > worked example > data-title attribute
    "Expand (p + qi)(1 − 2i) and group real and imaginary parts": "展開 (p + qi)(1 − 2i) 並整理實部與虛部",

    // Cartesian form, conjugates and the Argand diagram > worked example > p
    "Since p and q are real numbers, we can expand the left-hand side into (Real) + (Imaginary)i and equate to 7 + 4i.": "因為 p 和 q 是實數，我們可以把左方展開成 (實部) + (虛部)i，再與 7 + 4i 比較。",

    // Cartesian form, conjugates and the Argand diagram > worked example > data-title attribute
    "Equate real and imaginary parts and solve the 2 × 2 system": "比較實部與虛部並解 2 × 2 線性方程組",

    // Cartesian form, conjugates and the Argand diagram > worked example > p
    "Setting Re(LHS) = 7 and Im(LHS) = 4 gives two linear equations in p and q.": "令 Re(左方) = 7 及 Im(左方) = 4，得出兩條關於 p 和 q 的線性方程。",

    // Cartesian form, conjugates and the Argand diagram > worked example > maths line
    "<i>p</i> + 2<i>q</i> = 7 and −2<i>p</i> + <i>q</i> = 4 <b>[M1]</b>": "<i>p</i> + 2<i>q</i> = 7 且 −2<i>p</i> + <i>q</i> = 4 <b>[M1]</b>",

    // Cartesian form, conjugates and the Argand diagram > try it > p
    "Given that <span class=\"chem\">z = (11 + 3i) / (1 - 2i)</span>, express <span class=\"chem\">z</span> in the form <span class=\"chem\">a + bi</span> and enter the value of <span class=\"chem\">a + b</span>.": "已知 <span class=\"chem\">z = (11 + 3i) / (1 - 2i)</span>，把 <span class=\"chem\">z</span> 表示為 (express) <span class=\"chem\">a + bi</span>，並輸入 <span class=\"chem\">a + b</span> 的值。",

    // Cartesian form, conjugates and the Argand diagram > try it > li
    "Multiply the numerator and denominator by the conjugate <span class=\"chem\">1 + 2i</span>. The denominator becomes <span class=\"chem\">1^2 + (-2)^2 = 5</span>.": "分子與分母同乘共軛複數 <span class=\"chem\">1 + 2i</span>。分母變為 <span class=\"chem\">1^2 + (-2)^2 = 5</span>。",

    // Cartesian form, conjugates and the Argand diagram > try it > li
    "Expand the numerator: <span class=\"chem\">(11 + 3i)(1 + 2i) = 11 + 22i + 3i + 6i^2 = 5 + 25i</span>. Now divide both parts by <span class=\"chem\">5</span>.": "展開分子：<span class=\"chem\">(11 + 3i)(1 + 2i) = 11 + 22i + 3i + 6i^2 = 5 + 25i</span>。現在把兩部分同除以 <span class=\"chem\">5</span>。",

    // Modulus-argument (polar) and Euler forms > data-toc attribute
    "Polar & Euler forms": "極坐標與歐拉形式",

    // Modulus-argument (polar) and Euler forms > h2
    "Modulus-argument (polar) and Euler forms": "模－幅角（極坐標）形式與歐拉形式",

    // Modulus-argument (polar) and Euler forms > p
    "Instead of describing a point on the Argand plane by its horizontal and vertical coordinates <span class=\"chem\">(a, b)</span>, we can describe it by its distance from the origin and the angle it makes with the positive real axis:": "除了以橫、縱坐標 <span class=\"chem\">(a, b)</span> 描述阿根平面上的點外，我們也可以用它與原點的距離以及與正實軸的夾角來描述：",

    // Modulus-argument (polar) and Euler forms > li
    "The <dfn data-def=\"The distance of a complex number z = a + bi from the origin on the Argand plane: |z| = √(a² + b²).\">modulus</dfn> <span class=\"chem\">r = |z| = sqrt(a^2 + b^2) &gt;= 0</span> is the distance from the origin to <span class=\"chem\">z</span>.": "<dfn data-def=\"複數 z = a + bi 在阿根平面上與原點的距離：|z| = √(a² + b²)。\">模 <span class=\"en-term\">(modulus)</span></dfn> <span class=\"chem\">r = |z| = sqrt(a^2 + b^2) &gt;= 0</span> 是從原點到 <span class=\"chem\">z</span> 的距離。",

    // Modulus-argument (polar) and Euler forms > data-def attribute
    "The distance of a complex number z = a + bi from the origin on the Argand plane: |z| = √(a² + b²).": "複數 z = a + bi 在阿根平面上與原點的距離：|z| = √(a² + b²)。",

    // Modulus-argument (polar) and Euler forms > li
    "The <dfn data-def=\"The angle θ in radians measured anticlockwise from the positive real axis to the position vector of z, usually chosen in (−π, π].\">argument</dfn> <span class=\"chem\">theta = arg(z)</span> is the directed angle from the positive real axis to <span class=\"chem\">z</span>. Unless a question states otherwise, IB uses the <strong>principal argument</strong> in the interval <span class=\"chem\">-pi &lt; theta &lt;= pi</span>.": "<dfn data-def=\"從正實軸逆時針量度至 z 的位置向量的角 θ（以弧度為單位），通常取於 (−π, π] 內。\">幅角 <span class=\"en-term\">(argument)</span></dfn> <span class=\"chem\">theta = arg(z)</span> 是從正實軸到 <span class=\"chem\">z</span> 的有向角。除非題目另有指明，否則 IB 一律使用位於區間 <span class=\"chem\">-pi &lt; theta &lt;= pi</span> 內的<strong>主幅角</strong>（principal argument）。",

    // Modulus-argument (polar) and Euler forms > data-def attribute
    "The angle θ in radians measured anticlockwise from the positive real axis to the position vector of z, usually chosen in (−π, π].": "從正實軸逆時針量度至 z 的位置向量的角 θ（以弧度為單位），通常取於 (−π, π] 內。",

    // Modulus-argument (polar) and Euler forms > formula booklet note > p
    "<strong>In your Formula Booklet (AHL 1.12–1.13):</strong> Since <span class=\"chem\">a = r cos theta</span> and <span class=\"chem\">b = r sin theta</span>, and by Euler's formula <span class=\"chem\">e^{i theta} = cos theta + i sin theta</span>, every complex number can be written in three equivalent ways:": "<strong>公式手冊（AHL 1.12–1.13）：</strong>由於 <span class=\"chem\">a = r cos theta</span> 且 <span class=\"chem\">b = r sin theta</span>，加上歐拉公式 <span class=\"chem\">e^{i theta} = cos theta + i sin theta</span>，每個複數皆可用三種等價形式表示：",

    // Modulus-argument (polar) and Euler forms > h3
    "Finding the principal argument <span class=\"chem\">arg(z) \\in (-\\pi, \\pi]</span>": "求主幅角 <span class=\"chem\">arg(z) \\in (-\\pi, \\pi]</span>",

    // Modulus-argument (polar) and Euler forms > p
    "First find the acute reference angle <span class=\"chem\">alpha = arctan(|b / a|)</span> in <span class=\"chem\">(0, pi/2)</span>, then plot <span class=\"chem\">(a, b)</span> in its quadrant to assign the correct sign or shift:": "先求出位於 <span class=\"chem\">(0, pi/2)</span> 內的銳參考角 <span class=\"chem\">alpha = arctan(|b / a|)</span>，再根據點 <span class=\"chem\">(a, b)</span> 所在的象限加上正確的正負號或作角度調整：",

    // Modulus-argument (polar) and Euler forms > table > caption
    "Quadrant adjustment for principal argument θ = arg(a + bi) ∈ (−π, π]": "主幅角 θ = arg(a + bi) ∈ (−π, π] 的象限調整表",

    // Modulus-argument (polar) and Euler forms > table > th
    "Quadrant of <span class=\"chem\">(a, b)</span>": "<span class=\"chem\">(a, b)</span> 所在象限",

    // Modulus-argument (polar) and Euler forms > table > th
    "Signs of <span class=\"chem\">a, b</span>": "<span class=\"chem\">a, b</span> 的正負號",

    // Modulus-argument (polar) and Euler forms > table > th
    "Principal argument <span class=\"chem\">theta = arg(z)</span>": "主幅角 <span class=\"chem\">theta = arg(z)</span>",

    // Modulus-argument (polar) and Euler forms > table > th
    "Example": "例子",

    // Modulus-argument (polar) and Euler forms > table > th
    "Quadrant I": "第一象限",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">theta = +alpha</span>": "<span class=\"chem\">theta = +alpha</span>",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">1 + sqrt(3)i =&gt; r = 2, theta = pi/3</span>": "<span class=\"chem\">1 + sqrt(3)i =&gt; r = 2, theta = pi/3</span>",

    // Modulus-argument (polar) and Euler forms > table > th
    "Quadrant II": "第二象限",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">theta = pi - alpha</span>": "<span class=\"chem\">theta = pi - alpha</span>",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">-1 + i =&gt; r = sqrt(2), theta = 3pi/4</span>": "<span class=\"chem\">-1 + i =&gt; r = sqrt(2), theta = 3pi/4</span>",

    // Modulus-argument (polar) and Euler forms > table > th
    "Quadrant III": "第三象限",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">theta = -(pi - alpha) = alpha - pi</span>": "<span class=\"chem\">theta = -(pi - alpha) = alpha - pi</span>",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">-sqrt(3) - i =&gt; r = 2, theta = -5pi/6</span>": "<span class=\"chem\">-sqrt(3) - i =&gt; r = 2, theta = -5pi/6</span>",

    // Modulus-argument (polar) and Euler forms > table > th
    "Quadrant IV": "第四象限",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">theta = -alpha</span>": "<span class=\"chem\">theta = -alpha</span>",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">1 - i =&gt; r = sqrt(2), theta = -pi/4</span>": "<span class=\"chem\">1 - i =&gt; r = sqrt(2), theta = -pi/4</span>",

    // Modulus-argument (polar) and Euler forms > common mistake > p
    "<strong>Never trust <span class=\"chem\">arctan(b/a)</span> without sketching the quadrant!</strong> For <span class=\"chem\">z = -1 - i</span> (Quadrant III), <span class=\"chem\">b/a = (-1)/(-1) = 1</span>, so <span class=\"chem\">arctan(1) = pi/4</span> (Quadrant I). The true principal argument is <span class=\"chem\">arg(-1 - i) = -3pi/4</span>.": "<strong>未先描繪象限略圖前，切勿直接盡信 <span class=\"chem\">arctan(b/a)</span>！</strong>對於 <span class=\"chem\">z = -1 - i</span>（第三象限），<span class=\"chem\">b/a = (-1)/(-1) = 1</span>，故 <span class=\"chem\">arctan(1) = pi/4</span>（第一象限）。真正的主幅角為 <span class=\"chem\">arg(-1 - i) = -3pi/4</span>。",

    // Modulus-argument (polar) and Euler forms > h3
    "Geometric meaning of complex multiplication and division": "複數乘法與除法的幾何意義",

    // Modulus-argument (polar) and Euler forms > p
    "Using exponent laws on Euler form <span class=\"chem\">z_1 = r_1 e^{i theta_1}</span> and <span class=\"chem\">z_2 = r_2 e^{i theta_2}</span> immediately shows why polar/Euler form is so powerful:": "對歐拉形式 <span class=\"chem\">z_1 = r_1 e^{i theta_1}</span> 與 <span class=\"chem\">z_2 = r_2 e^{i theta_2}</span> 運用指數定律，便立即看出極坐標／歐拉形式為何如此強大：",

    // Modulus-argument (polar) and Euler forms > equation > maths line
    "<i>z</i><sub>1</sub><i>z</i><sub>2</sub> = <i>r</i><sub>1</sub><i>r</i><sub>2</sub><i>e</i><sup><i>i</i>(<i>θ</i><sub>1</sub> + <i>θ</i><sub>2</sub>)</sup> &nbsp;&nbsp;&nbsp; and &nbsp;&nbsp;&nbsp; <span class=\"frac\"><span><i>z</i><sub>1</sub></span><span><i>z</i><sub>2</sub></span></span> = <span class=\"frac\"><span><i>r</i><sub>1</sub></span><span><i>r</i><sub>2</sub></span></span><i>e</i><sup><i>i</i>(<i>θ</i><sub>1</sub> − <i>θ</i><sub>2</sub>)</sup>": "<i>z</i><sub>1</sub><i>z</i><sub>2</sub> = <i>r</i><sub>1</sub><i>r</i><sub>2</sub><i>e</i><sup><i>i</i>(<i>θ</i><sub>1</sub> + <i>θ</i><sub>2</sub>)</sup> &nbsp;&nbsp;&nbsp; 及 &nbsp;&nbsp;&nbsp; <span class=\"frac\"><span><i>z</i><sub>1</sub></span><span><i>z</i><sub>2</sub></span></span> = <span class=\"frac\"><span><i>r</i><sub>1</sub></span><span><i>r</i><sub>2</sub></span></span><i>e</i><sup><i>i</i>(<i>θ</i><sub>1</sub> − <i>θ</i><sub>2</sub>)</sup>",

    // Modulus-argument (polar) and Euler forms > equation > dd
    "moduli multiply (and divide under division)": "模相乘（除法時模相除）",

    // Modulus-argument (polar) and Euler forms > equation > dt
    "arg(z<sub>1</sub>z<sub>2</sub>) = θ<sub>1</sub> + θ<sub>2</sub>": "arg(z<sub>1</sub>z<sub>2</sub>) = θ<sub>1</sub> + θ<sub>2</sub>",

    // Modulus-argument (polar) and Euler forms > equation > dd
    "arguments add (modulo 2π) under multiplication and subtract under division": "乘法時幅角相加（模 2π），除法時幅角相減",

    // Modulus-argument (polar) and Euler forms > p
    "Geometrically, multiplying any complex number <span class=\"chem\">z_1</span> by <span class=\"chem\">z_2 = r_2 e^{i theta_2}</span> stretches its length by a scale factor of <span class=\"chem\">r_2</span> and rotates it anticlockwise about the origin by angle <span class=\"chem\">theta_2</span>. In particular, multiplying by <span class=\"chem\">i = e^{i pi/2}</span> is a pure anticlockwise rotation by <span class=\"chem\">90^\\circ</span> (<span class=\"chem\">pi/2</span> radians).": "從幾何角度看，把任何複數 <span class=\"chem\">z_1</span> 乘以 <span class=\"chem\">z_2 = r_2 e^{i theta_2}</span>，就是把它的長度按比例因子 <span class=\"chem\">r_2</span> 伸縮，並繞原點逆時針旋轉 <span class=\"chem\">theta_2</span>。特別地，乘以 <span class=\"chem\">i = e^{i pi/2}</span> 即繞原點純逆時針旋轉 <span class=\"chem\">90^\\circ</span>（<span class=\"chem\">pi/2</span> 弧度）。",

    // Modulus-argument (polar) and Euler forms > widget > data-title attribute
    "Argand plane multiplication & polar/Euler explorer": "阿根平面複數乘法與極坐標／歐拉形式探索工具",

    // Modulus-argument (polar) and Euler forms > widget > figcaption
    "Adjust the moduli <span class=\"chem\">r_1, r_2</span> and arguments <span class=\"chem\">theta_1, theta_2</span> to see how multiplying <span class=\"chem\">z_1</span> by <span class=\"chem\">z_2</span> multiplies the lengths (<span class=\"chem\">r = r_1 r_2</span>) and adds the angles (<span class=\"chem\">theta = theta_1 + theta_2</span>) on the Argand plane.": "調校模 <span class=\"chem\">r_1, r_2</span> 與幅角 <span class=\"chem\">theta_1, theta_2</span>，觀察在阿根平面上將 <span class=\"chem\">z_1</span> 乘以 <span class=\"chem\">z_2</span> 如何使長度相乘（<span class=\"chem\">r = r_1 r_2</span>）及角度相加（<span class=\"chem\">theta = theta_1 + theta_2</span>）。",

    // Modulus-argument (polar) and Euler forms > worked example > h3
    "Finding exact trigonometric values by comparing Cartesian and Euler forms": "比較笛卡兒形式與歐拉形式以求三角函數準確值",

    // Modulus-argument (polar) and Euler forms > worked example > p
    "Let <span class=\"chem\">z_1 = 1 + i</span> and <span class=\"chem\">z_2 = sqrt(3) - i</span>.": "設 <span class=\"chem\">z_1 = 1 + i</span> 及 <span class=\"chem\">z_2 = sqrt(3) - i</span>。",

    // Modulus-argument (polar) and Euler forms > worked example > p
    "(a) Express <span class=\"chem\">z_1</span> and <span class=\"chem\">z_2</span> in Euler form <span class=\"chem\">r e^{i theta}</span>. <strong>[3 marks]</strong>": "(a) 把 <span class=\"chem\">z_1</span> 及 <span class=\"chem\">z_2</span> 表示為 (Express) 歐拉形式 <span class=\"chem\">r e^{i theta}</span>。<strong>[3 marks]</strong>",

    // Modulus-argument (polar) and Euler forms > worked example > p
    "(b) Hence, by expressing <span class=\"chem\">z_1 z_2</span> in both Cartesian and Euler forms, find the exact value of <span class=\"chem\">cos(pi/12)</span> and <span class=\"chem\">sin(pi/12)</span>. <strong>[4 marks]</strong>": "(b) 由此 (Hence)，透過同時以笛卡兒形式及歐拉形式表示 <span class=\"chem\">z_1 z_2</span>，求 (find) <span class=\"chem\">cos(pi/12)</span> 及 <span class=\"chem\">sin(pi/12)</span> 的準確值。<strong>[4 marks]</strong>",

    // Modulus-argument (polar) and Euler forms > worked example > data-title attribute
    "Find the modulus and principal argument of z₁ and z₂": "求 z₁ 與 z₂ 的模與主幅角",

    // Modulus-argument (polar) and Euler forms > worked example > p
    "z₁ = 1 + i is in Quadrant I with r₁ = √(1² + 1²) = √2 and θ₁ = π/4. z₂ = √3 − i is in Quadrant IV with r₂ = √(3 + 1) = 2 and θ₂ = −π/6.": "z₁ = 1 + i 位於第一象限，r₁ = √(1² + 1²) = √2，θ₁ = π/4。z₂ = √3 − i 位於第四象限，r₂ = √(3 + 1) = 2，θ₂ = −π/6。",

    // Modulus-argument (polar) and Euler forms > worked example > data-title attribute
    "Compute the product z₁z₂ in Euler form and in Cartesian form": "同時以歐拉形式與笛卡兒形式計算乘積 z₁z₂",

    // Modulus-argument (polar) and Euler forms > worked example > p
    "In Euler form, multiply moduli and add arguments: π/4 − π/6 = π/12. In Cartesian form, expand (1 + i)(√3 − i).": "在歐拉形式中，模相乘並將幅角相加：π/4 − π/6 = π/12。在笛卡兒形式中，展開 (1 + i)(√3 − i)。",

    // Modulus-argument (polar) and Euler forms > worked example > maths line
    "Euler: <i>z</i><sub>1</sub><i>z</i><sub>2</sub> = 2√2 <i>e</i><sup><i>i</i>(<i>π</i>/4 − <i>π</i>/6)</sup> = 2√2 <i>e</i><sup><i>iπ</i>/12</sup> = 2√2 (cos(<i>π</i>/12) + <i>i</i> sin(<i>π</i>/12)) <b>[M1]</b>": "歐拉形式：<i>z</i><sub>1</sub><i>z</i><sub>2</sub> = 2√2 <i>e</i><sup><i>i</i>(<i>π</i>/4 − <i>π</i>/6)</sup> = 2√2 <i>e</i><sup><i>iπ</i>/12</sup> = 2√2 (cos(<i>π</i>/12) + <i>i</i> sin(<i>π</i>/12)) <b>[M1]</b>",

    // Modulus-argument (polar) and Euler forms > worked example > maths line
    "Cartesian: (1 + <i>i</i>)(√3 − <i>i</i>) = (√3 + 1) + (√3 − 1)<i>i</i> <b>[A1]</b>": "笛卡兒形式：(1 + <i>i</i>)(√3 − <i>i</i>) = (√3 + 1) + (√3 − 1)<i>i</i> <b>[A1]</b>",

    // Modulus-argument (polar) and Euler forms > worked example > data-title attribute
    "Equate real and imaginary parts to isolate cos(π/12) and sin(π/12)": "比較實部與虛部以求出 cos(π/12) 及 sin(π/12)",

    // Modulus-argument (polar) and Euler forms > worked example > p
    "Both expressions represent the exact same complex number z₁z₂, so their real and imaginary parts must be equal.": "兩個表式代表同一個複數 z₁z₂，因此兩者的實部與虛部必須相等。",

    // Modulus-argument (polar) and Euler forms > worked example > p
    "cos(π/12) = (√6 + √2)/4, &nbsp; sin(π/12) = (√6 − √2)/4": "cos(π/12) = (√6 + √2)/4, &nbsp; sin(π/12) = (√6 − √2)/4",

    // Modulus-argument (polar) and Euler forms > try it > p
    "Find the principal argument <span class=\"chem\">arg(z)</span> (in radians) of the complex number <span class=\"chem\">z = -3 sqrt(3) + 3i</span>. You may enter an exact multiple of <span class=\"mono\">pi</span> (such as <span class=\"mono\">5*pi/6</span>) or a 3 s.f. decimal.": "求 (Find) 複數 <span class=\"chem\">z = -3 sqrt(3) + 3i</span> 的主幅角 <span class=\"chem\">arg(z)</span>（以弧度為單位）。可輸入 <span class=\"mono\">pi</span> 的準確倍數（例如 <span class=\"mono\">5*pi/6</span>）或 3 位有效數字的小數。",

    // Modulus-argument (polar) and Euler forms > try it > li
    "Identify the quadrant: <span class=\"chem\">Re(z) = -3 sqrt(3) &lt; 0</span> and <span class=\"chem\">Im(z) = 3 &gt; 0</span>, so <span class=\"chem\">z</span> lies in Quadrant II.": "判斷象限：<span class=\"chem\">Re(z) = -3 sqrt(3) &lt; 0</span> 且 <span class=\"chem\">Im(z) = 3 &gt; 0</span>，故 <span class=\"chem\">z</span> 位於第二象限。",

    // Modulus-argument (polar) and Euler forms > try it > li
    "The acute reference angle is <span class=\"chem\">alpha = arctan(3 / (3 sqrt(3))) = arctan(1 / sqrt(3)) = pi/6</span>. In Quadrant II, <span class=\"chem\">theta = pi - pi/6 = 5pi/6</span>.": "銳參考角為 <span class=\"chem\">alpha = arctan(3 / (3 sqrt(3))) = arctan(1 / sqrt(3)) = pi/6</span>。在第二象限中，<span class=\"chem\">theta = pi - pi/6 = 5pi/6</span>。",

    // Modulus-argument (polar) and Euler forms > try it > maths line
    "<i>α</i> = arctan(1 / √3) = <i>π</i> / 6": "<i>α</i> = arctan(1 / √3) = <i>π</i> / 6",

    // Modulus-argument (polar) and Euler forms > try it > maths line
    "Quadrant II: arg(<i>z</i>) = <i>π</i> − <i>π</i> / 6 = <b>5<i>π</i> / 6</b> (≈ 2.62 rad)": "第二象限：arg(<i>z</i>) = <i>π</i> − <i>π</i> / 6 = <b>5<i>π</i> / 6</b> (≈ 2.62 rad)",

    // De Moivre's theorem, n-th roots and polynomial roots > data-toc attribute
    "De Moivre & roots": "棣美弗定理與複數根",

    // De Moivre's theorem, n-th roots and polynomial roots > h2
    "De Moivre's theorem, <i>n</i>-th roots and polynomial roots": "棣美弗定理、<i>n</i> 次根與多項式的根",

    // De Moivre's theorem, n-th roots and polynomial roots > p
    "Repeatedly multiplying <span class=\"chem\">z = r(cos theta + i sin theta)</span> by itself <span class=\"chem\">n</span> times multiplies the modulus to <span class=\"chem\">r^n</span> and adds the angle <span class=\"chem\">n</span> times to <span class=\"chem\">n theta</span>. This result holds for all rational exponents <span class=\"chem\">n \\in \\mathbb{Q}</span> and is known as <dfn data-def=\"For any complex number r(cos θ + i sin θ) and rational number n, [r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ).\">De Moivre's theorem</dfn>:": "把 <span class=\"chem\">z = r(cos theta + i sin theta)</span> 連乘 <span class=\"chem\">n</span> 次，會使模變為 <span class=\"chem\">r^n</span> 並把幅角乘以 <span class=\"chem\">n</span> 成為 <span class=\"chem\">n theta</span>。此結果對所有有理數指數 <span class=\"chem\">n \\in \\mathbb{Q}</span> 皆成立，稱為<dfn data-def=\"對任意複數 r(cos θ + i sin θ) 及有理數 n，[r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ)。\">棣美弗定理 <span class=\"en-term\">(De Moivre's theorem)</span></dfn>：",

    // De Moivre's theorem, n-th roots and polynomial roots > data-def attribute
    "For any complex number r(cos θ + i sin θ) and rational number n, [r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ).": "對任意複數 r(cos θ + i sin θ) 及有理數 n，[r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ)。",

    // De Moivre's theorem, n-th roots and polynomial roots > key idea > p
    "<strong>Euler bridge identities for trigonometric proofs (Paper 3 favourite):</strong> For a complex number on the unit circle <span class=\"chem\">z = cos theta + i sin theta = e^{i theta}</span>, we have <span class=\"chem\">z^{-1} = cos theta - i sin theta = e^{-i theta}</span>. By De Moivre's theorem:": "<strong>用於三角恒等式證明的歐拉橋樑恒等式（Paper 3 熱門考點）：</strong>對於單位圓上的複數 <span class=\"chem\">z = cos theta + i sin theta = e^{i theta}</span>，我們有 <span class=\"chem\">z^{-1} = cos theta - i sin theta = e^{-i theta}</span>。根據棣美弗定理：",

    // De Moivre's theorem, n-th roots and polynomial roots > key idea > p
    "<span class=\"chem\">z^n + z^{-n} = 2 cos(n theta)</span> &nbsp;&nbsp;and&nbsp;&nbsp; <span class=\"chem\">z^n - z^{-n} = 2i sin(n theta)</span>.": "<span class=\"chem\">z^n + z^{-n} = 2 cos(n theta)</span> &nbsp;&nbsp;及&nbsp;&nbsp; <span class=\"chem\">z^n - z^{-n} = 2i sin(n theta)</span>。",

    // De Moivre's theorem, n-th roots and polynomial roots > key idea > p
    "Expanding <span class=\"chem\">(z + z^{-1})^n = (2 cos theta)^n</span> expresses powers like <span class=\"chem\">cos^4 theta</span> in terms of multiple angles <span class=\"chem\">cos(4 theta)</span> and <span class=\"chem\">cos(2 theta)</span> so they can be integrated directly!": "展開 <span class=\"chem\">(z + z^{-1})^n = (2 cos theta)^n</span> 可把諸如 <span class=\"chem\">cos^4 theta</span> 等次冪表為倍角 <span class=\"chem\">cos(4 theta)</span> 與 <span class=\"chem\">cos(2 theta)</span> 的形式，從而直接進行積分！",

    // De Moivre's theorem, n-th roots and polynomial roots > h3
    "Solving <span class=\"chem\">z^n = w</span>: the <span class=\"chem\">n</span>-th roots of a complex number": "解 <span class=\"chem\">z^n = w</span>：複數的 <span class=\"chem\">n</span> 次根",

    // De Moivre's theorem, n-th roots and polynomial roots > p
    "Every non-zero complex number <span class=\"chem\">w = r e^{i theta}</span> has <strong><span class=\"chem\">n</span> distinct <span class=\"chem\">n</span>-th roots</strong>. Because adding <span class=\"chem\">2 pi k</span> (<span class=\"chem\">k \\in \\mathbb{Z}</span>) to the argument of <span class=\"chem\">w</span> leaves <span class=\"chem\">w</span> unchanged, writing <span class=\"chem\">w = r e^{i(theta + 2 pi k)}</span> and taking the <span class=\"chem\">(1/n)</span>-th power gives:": "每個非零複數 <span class=\"chem\">w = r e^{i theta}</span> 都有 <strong><span class=\"chem\">n</span> 個相異的 <span class=\"chem\">n</span> 次根</strong>。因為在 <span class=\"chem\">w</span> 的幅角加上 <span class=\"chem\">2 pi k</span>（<span class=\"chem\">k \\in \\mathbb{Z}</span>）不會改變 <span class=\"chem\">w</span> 的值，把 <span class=\"chem\">w = r e^{i(theta + 2 pi k)}</span> 取 <span class=\"chem\">(1/n)</span> 次方即得：",

    // De Moivre's theorem, n-th roots and polynomial roots > equation > maths line
    "<i>z</i><sub><i>k</i></sub> = <i>r</i><sup>1/<i>n</i></sup> exp<span class=\" brackets\">(<i>i</i> <span class=\"frac\"><span><i>θ</i> + 2<i>πk</i></span><span><i>n</i></span></span>)</span> = <i>r</i><sup>1/<i>n</i></sup> cis<span class=\" brackets\">(<span class=\"frac\"><span><i>θ</i> + 2<i>πk</i></span><span><i>n</i></span></span>)</span>, &nbsp;&nbsp; <i>k</i> = 0, 1, 2, …, <i>n</i> − 1": "<i>z</i><sub><i>k</i></sub> = <i>r</i><sup>1/<i>n</i></sup> exp<span class=\" brackets\">(<i>i</i> <span class=\"frac\"><span><i>θ</i> + 2<i>πk</i></span><span><i>n</i></span></span>)</span> = <i>r</i><sup>1/<i>n</i></sup> cis<span class=\" brackets\">(<span class=\"frac\"><span><i>θ</i> + 2<i>πk</i></span><span><i>n</i></span></span>)</span>, &nbsp;&nbsp; <i>k</i> = 0, 1, 2, …, <i>n</i> − 1",

    // De Moivre's theorem, n-th roots and polynomial roots > li
    "<strong>Regular <span class=\"chem\">n</span>-gon geometry</strong>: All <span class=\"chem\">n</span> roots have the exact same modulus <span class=\"chem\">r^{1/n}</span> and are equally spaced around the circle of radius <span class=\"chem\">r^{1/n}</span> by an angle of <span class=\"chem\">2 pi / n</span> radians. For <span class=\"chem\">n &gt;= 3</span>, they form the vertices of a <strong>regular <span class=\"chem\">n</span>-gon</strong> centered at the origin, so the <strong>sum of all <span class=\"chem\">n</span> roots is always <span class=\"chem\">0</span></strong>.": "<strong>正 <span class=\"chem\">n</span> 邊形幾何性質</strong>：全部 <span class=\"chem\">n</span> 個根都具有相同的模 <span class=\"chem\">r^{1/n}</span>，並以 <span class=\"chem\">2 pi / n</span> 弧度的等距夾角均勻分佈在半徑為 <span class=\"chem\">r^{1/n}</span> 的圓周上。當 <span class=\"chem\">n &gt;= 3</span> 時，它們構成以原點為中心的<strong>正 <span class=\"chem\">n</span> 邊形</strong>頂點，因此<strong>所有 <span class=\"chem\">n</span> 個根之和恒等於 <span class=\"chem\">0</span></strong>。",

    // De Moivre's theorem, n-th roots and polynomial roots > li
    "<strong>Roots of unity (<span class=\"chem\">z^n = 1</span>)</strong>: Setting <span class=\"chem\">r = 1, theta = 0</span> gives the <span class=\"chem\">n</span>-th roots of unity <span class=\"chem\">1, omega, omega^2, ..., omega^{n-1}</span> where <span class=\"chem\">omega = e^{2 pi i / n}</span>, which satisfy <span class=\"chem\">1 + omega + omega^2 + ... + omega^{n-1} = 0</span>.": "<strong>單位的 n 次根（<span class=\"chem\">z^n = 1</span>）</strong>：設 <span class=\"chem\">r = 1, theta = 0</span> 即得單位的 <span class=\"chem\">n</span> 次根 <span class=\"chem\">1, omega, omega^2, ..., omega^{n-1}</span>（其中 <span class=\"chem\">omega = e^{2 pi i / n}</span>），它們滿足 <span class=\"chem\">1 + omega + omega^2 + ... + omega^{n-1} = 0</span>。",

    // De Moivre's theorem, n-th roots and polynomial roots > widget > data-title attribute
    "n-th roots of a complex number on the Argand diagram": "複數的 n 次根在阿根圖上的分佈",

    // De Moivre's theorem, n-th roots and polynomial roots > widget > figcaption
    "Choose the degree <span class=\"chem\">n</span> (from 2 to 8) and the modulus <span class=\"chem\">r</span> and argument <span class=\"chem\">theta</span> of <span class=\"chem\">w</span> in <span class=\"chem\">z^n = w</span>. The <span class=\"chem\">n</span> roots lie on the circle of radius <span class=\"chem\">r^{1/n}</span> spaced by <span class=\"chem\">2 pi / n</span> radians, forming a regular polygon whose centre of mass is the origin.": "選擇方程 <span class=\"chem\">z^n = w</span> 的次數 <span class=\"chem\">n</span>（由 2 至 8）以及 <span class=\"chem\">w</span> 的模 <span class=\"chem\">r</span> 與幅角 <span class=\"chem\">theta</span>。這 <span class=\"chem\">n</span> 個根落在半徑為 <span class=\"chem\">r^{1/n}</span> 的圓上，相隔 <span class=\"chem\">2 pi / n</span> 弧度，形成一個重心位於原點的正多邊形。",

    // De Moivre's theorem, n-th roots and polynomial roots > h3
    "Complex Conjugate Root Theorem for real polynomials": "實係數多項式的共軛根定理",

    // De Moivre's theorem, n-th roots and polynomial roots > p
    "If a polynomial <span class=\"chem\">P(z) = a_n z^n + a_{n-1} z^{n-1} + ... + a_1 z + a_0</span> has <strong>real coefficients</strong> (<span class=\"chem\">a_k \\in \\mathbb{R}</span>) and <span class=\"chem\">z_1 = a + bi</span> (<span class=\"chem\">b != 0</span>) is a root of <span class=\"chem\">P(z) = 0</span>, then its complex conjugate <span class=\"chem\">z_1^* = a - bi</span> is also a root. Together, the conjugate pair produces a <strong>real quadratic factor</strong> of <span class=\"chem\">P(z)</span>:": "若多項式 <span class=\"chem\">P(z) = a_n z^n + a_{n-1} z^{n-1} + ... + a_1 z + a_0</span> 具有<strong>實係數</strong>（<span class=\"chem\">a_k \\in \\mathbb{R}</span>），且 <span class=\"chem\">z_1 = a + bi</span>（<span class=\"chem\">b != 0</span>）是 <span class=\"chem\">P(z) = 0</span> 的一個根，則其共軛複數 <span class=\"chem\">z_1^* = a - bi</span> 亦必為根。這對共軛根會共同構成 <span class=\"chem\">P(z)</span> 的一個<strong>實係數二次因式</strong>：",

    // De Moivre's theorem, n-th roots and polynomial roots > not needed for IB > p
    "<strong>Not needed for IB Math AA HL:</strong> General complex loci on the Argand plane (such as Apollonius circles <span class=\"chem\">|z - z_1| = k|z - z_2|</span> or half-line/arc loci <span class=\"chem\">arg((z - z_1)/(z - z_2)) = alpha</span>), <span class=\"chem\">2 × 2</span> matrix representations of complex numbers, and complex logarithms or trigonometric functions of complex inputs are <strong>not</strong> in the AA HL syllabus.": "<strong>IB Math AA HL 不要求的內容：</strong>阿根平面上的一般複數軌跡（例如阿波羅尼奧斯圓 <span class=\"chem\">|z - z_1| = k|z - z_2|</span> 或射線／圓弧軌跡 <span class=\"chem\">arg((z - z_1)/(z - z_2)) = alpha</span>）、複數的 <span class=\"chem\">2 × 2</span> 矩陣表示，以及複對數或複變數三角函數均<strong>不</strong>在 AA HL 課程內。",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > h3
    "Finding all cube roots of a complex number and using conjugate pairs": "求複數的所有立方根及運用共軛根對",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > p
    "(a) Solve the equation <span class=\"chem\">z^3 = -4 sqrt(2) + 4 sqrt(2)i</span>, giving your answers in the form <span class=\"chem\">r e^{i theta}</span> where <span class=\"chem\">r &gt; 0</span> and <span class=\"chem\">-pi &lt; theta &lt;= pi</span>. <strong>[5 marks]</strong>": "(a) 解 (Solve) 方程 <span class=\"chem\">z^3 = -4 sqrt(2) + 4 sqrt(2)i</span>，答案以 <span class=\"chem\">r e^{i theta}</span> 形式表示，其中 <span class=\"chem\">r &gt; 0</span> 且 <span class=\"chem\">-pi &lt; theta &lt;= pi</span>。<strong>[5 marks]</strong>",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > p
    "(b) Given that <span class=\"chem\">z_1 = 2 - i</span> is a root of the real polynomial <span class=\"chem\">P(z) = z^3 - 7z^2 + 17z - 15 = 0</span>, find the other two roots. <strong>[4 marks]</strong>": "(b) 已知 <span class=\"chem\">z_1 = 2 - i</span> 是實係數多項式方程 <span class=\"chem\">P(z) = z^3 - 7z^2 + 17z - 15 = 0</span> 的一個根，求 (find) 其餘兩個根。<strong>[4 marks]</strong>",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > data-title attribute
    "Convert w = −4√2 + 4√2 i to Euler form with general argument": "把 w = −4√2 + 4√2 i 轉化為帶一般幅角的歐拉形式",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > p
    "First compute |w| and locate w in Quadrant II to get its principal argument, then add 2πk for the three roots.": "先計算 |w| 並確定 w 位於第二象限以求其主幅角，再加上 2πk 以求三個根。",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > maths line
    "Quadrant II: arg(<i>w</i>) = <i>π</i> − <span class=\"frac\"><span><i>π</i></span><span>4</span></span> = <span class=\"frac\"><span>3<i>π</i></span><span>4</span></span> ⇒ <i>z</i><sup>3</sup> = 8 <i>e</i><sup><i>i</i>(3<i>π</i>/4 + 2<i>πk</i>)</sup> <b>[A1]</b>": "第二象限：arg(<i>w</i>) = <i>π</i> − <span class=\"frac\"><span><i>π</i></span><span>4</span></span> = <span class=\"frac\"><span>3<i>π</i></span><span>4</span></span> ⇒ <i>z</i><sup>3</sup> = 8 <i>e</i><sup><i>i</i>(3<i>π</i>/4 + 2<i>πk</i>)</sup> <b>[A1]</b>",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > data-title attribute
    "Take the cube root for k = 0, 1, −1 to stay in (−π, π]": "取立方根，代入 k = 0, 1, −1 使幅角留在 (−π, π] 內",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > p
    "Taking the 1/3 power gives modulus 8^(1/3) = 2 and angles (3π/4 + 2πk)/3 = π/4 + 2πk/3.": "取 1/3 次方得模為 8^(1/3) = 2，幅角為 (3π/4 + 2πk)/3 = π/4 + 2πk/3。",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > data-title attribute
    "Use the Conjugate Root Theorem and factorize P(z)": "運用共軛根定理並因式分解 P(z)",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > p
    "Because all coefficients of P(z) are real, z₂ = z₁* = 2 + i is automatically a root, giving a quadratic factor z² − 4z + 5.": "由於 P(z) 所有係數均為實數，z₂ = z₁* = 2 + i 必同時為根，從而給出二次因式 z² − 4z + 5。",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > maths line
    "Since coefficients are real, <b><i>z</i><sub>2</sub> = 2 + <i>i</i></b> is also a root. <b>[R1]</b>": "因為係數均為實數，所以 <b><i>z</i><sub>2</sub> = 2 + <i>i</i></b> 亦為根。<b>[R1]</b>",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > p
    "(a) 2e^{iπ/4}, 2e^{11πi/12}, 2e^{−5πi/12} &nbsp;&nbsp; (b) 2 + i and 3": "(a) 2e^{iπ/4}, 2e^{11πi/12}, 2e^{−5πi/12} &nbsp;&nbsp; (b) 2 + i 及 3",

    // De Moivre's theorem, n-th roots and polynomial roots > try it > p
    "Let <span class=\"chem\">z = sqrt(3) + i</span>. Find the <strong>smallest positive integer <span class=\"chem\">n</span></strong> such that <span class=\"chem\">z^n</span> is a <strong>real number</strong>.": "設 <span class=\"chem\">z = sqrt(3) + i</span>。求 (Find) 使 <span class=\"chem\">z^n</span> 為<strong>實數</strong>的<strong>最小正整數 <span class=\"chem\">n</span></strong>。",

    // De Moivre's theorem, n-th roots and polynomial roots > try it > li
    "Convert <span class=\"chem\">z = sqrt(3) + i</span> to polar/Euler form: <span class=\"chem\">r = 2</span> and <span class=\"chem\">theta = arg(z) = pi/6</span>.": "把 <span class=\"chem\">z = sqrt(3) + i</span> 轉化為極坐標／歐拉形式：<span class=\"chem\">r = 2</span> 及 <span class=\"chem\">theta = arg(z) = pi/6</span>。",

    // De Moivre's theorem, n-th roots and polynomial roots > try it > li
    "By De Moivre's theorem, <span class=\"chem\">z^n = 2^n(cos(n pi/6) + i sin(n pi/6))</span>. For <span class=\"chem\">z^n</span> to be real, we need <span class=\"chem\">Im(z^n) = 0 &lt;=&gt; sin(n pi/6) = 0</span>.": "根據棣美弗定理，<span class=\"chem\">z^n = 2^n(cos(n pi/6) + i sin(n pi/6))</span>。要使 <span class=\"chem\">z^n</span> 為實數，必須滿足 <span class=\"chem\">Im(z^n) = 0 &lt;=&gt; sin(n pi/6) = 0</span>。",

    // De Moivre's theorem, n-th roots and polynomial roots > try it > maths line
    "Im(<i>z</i><sup><i>n</i></sup>) = 0 ⇔ sin(<i>nπ</i>/6) = 0 ⇔ <i>nπ</i>/6 = <i>kπ</i> ⇒ least <i>n</i> ∈ ℤ<sup>+</sup> is <b>6</b>": "Im(<i>z</i><sup><i>n</i></sup>) = 0 ⇔ sin(<i>nπ</i>/6) = 0 ⇔ <i>nπ</i>/6 = <i>kπ</i> ⇒ 最小 <i>n</i> ∈ ℤ<sup>+</sup> 為 <b>6</b>",

    // Check your understanding > data-toc attribute
    "Practice": "練習",

    // Check your understanding > h2
    "Check your understanding": "檢查你的理解",

    // Check your understanding > data-title attribute
    "Topic 1.4 practice check": "課題 1.4 練習小測",

    // widget string (assets/js/widgets-t1-4.js)
    "Modulus r₁ = |z₁|": "模 r₁ = |z₁|",

    // widget string (assets/js/widgets-t1-4.js)
    "Angle θ₁ (°)": "幅角 θ₁ (°)",

    // widget string (assets/js/widgets-t1-4.js)
    "Modulus r₂ = |z₂|": "模 r₂ = |z₂|",

    // widget string (assets/js/widgets-t1-4.js)
    "Angle θ₂ (°)": "幅角 θ₂ (°)",

    // widget string (assets/js/widgets-t1-4.js)
    "Preset: × i (90° rotation)": "預設：× i（旋轉 90°）",

    // widget string (assets/js/widgets-t1-4.js)
    "Preset: z · z* = |z|²": "預設：z · z* = |z|²",

    // widget string (assets/js/widgets-t1-4.js)
    "z₁ (Euler & Cartesian)": "z₁（歐拉與笛卡兒形式）",

    // widget string (assets/js/widgets-t1-4.js)
    "z₂ (Euler & Cartesian)": "z₂（歐拉與笛卡兒形式）",

    // widget string (assets/js/widgets-t1-4.js)
    "Product z₁z₂ = r₁r₂ e^{i(θ₁+θ₂)}": "乘積 z₁z₂ = r₁r₂ e^{i(θ₁+θ₂)}",

    // widget string (assets/js/widgets-t1-4.js)
    "Principal arg(z₁z₂)": "主幅角 arg(z₁z₂)",

    // widget string (assets/js/widgets-t1-4.js)
    "Argand diagram showing complex vectors z₁, z₂ and their product z₁z₂": "顯示複向量 z₁、z₂ 及其乘積 z₁z₂ 的阿根圖",

    // widget string (assets/js/widgets-t1-4.js)
    "Re(z)": "Re(z)",

    // widget string (assets/js/widgets-t1-4.js)
    "Im(z)": "Im(z)",

    // widget string (assets/js/widgets-t1-4.js)
    "Degree n (number of roots)": "次數 n（根的數目）",

    // widget string (assets/js/widgets-t1-4.js)
    "Target modulus |w| = r": "目標模 |w| = r",

    // widget string (assets/js/widgets-t1-4.js)
    "Target angle arg(w) = θ (°)": "目標幅角 arg(w) = θ (°)",

    // widget string (assets/js/widgets-t1-4.js)
    "5th roots of unity (z⁵ = 1)": "單位的 5 次根 (z⁵ = 1)",

    // widget string (assets/js/widgets-t1-4.js)
    "Cube roots of −8 (z³ = −8)": "−8 的立方根 (z³ = −8)",

    // widget string (assets/js/widgets-t1-4.js)
    "4th roots of −8 + 8√3 i": "−8 + 8√3 i 的 4 次根",

    // widget string (assets/js/widgets-t1-4.js)
    "Root circle radius r^{1/n}": "根所在圓的半徑 r^{1/n}",

    // widget string (assets/js/widgets-t1-4.js)
    "Angular spacing 2π/n": "相鄰角度間隔 2π/n",

    // widget string (assets/js/widgets-t1-4.js)
    "Principal root z₀ (k = 0)": "主根 z₀ (k = 0)",

    // widget string (assets/js/widgets-t1-4.js)
    "Sum of all n roots": "所有 n 個根之和",

    // widget string (assets/js/widgets-t1-4.js)
    "Argand diagram showing the n-th roots of w forming a regular polygon": "顯示 w 的 n 次根構成正多邊形的阿根圖",

    // widget string (assets/js/widgets-t1-4.js)
    "Regular n-gon of roots": "根構成的正 n 邊形"

  }
});
