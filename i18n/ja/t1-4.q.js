/* t1-4.q — ja question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't1-4.q', {
  questions: {

    // ── t1-4-q001 · mcq · foundation · AHL · AHL 1.12 · 2 marks
    "t1-4-q001": {
      // EN: Let <span class="chem">z = (7 - 4i) / (2 + i)</span>. What is the imaginary part <span class="chem">Im(z)</span>?
      stem: "<span class=\"chem\">z = (7 - 4i) / (2 + i)</span> とする。虚部 <span class=\"chem\">Im(z)</span> はいくらですか？",
      options: [
        // EN: <span class="chem">-3</span>
        "<span class=\"chem\">-3</span>",
        // EN: <span class="chem">-3i</span>
        "<span class=\"chem\">-3i</span>",
        // EN: <span class="chem">-1/5</span>
        "<span class=\"chem\">-1/5</span>",
        // EN: <span class="chem">2</span>
        "<span class=\"chem\">2</span>",
      ],
      hints: [
        // EN: Multiply the numerator and denominator by the complex conjugate of the denominator, <span class="chem">2 - i</span>.
        "分母・分子に分母の共役な複素数 <span class=\"chem\">2 - i</span> を掛けます。",
        // EN: <span class="chem">z = ((7 - 4i)(2 - i)) / (2^2 + 1^2) = (14 - 7i - 8i + 4i^2) / 5 = (10 - 15i) / 5 = 2 - 3i</span>. Remember <span class="chem">Im(a + bi) = b</span>.
        "<span class=\"chem\">z = ((7 - 4i)(2 - i)) / (2^2 + 1^2) = (14 - 7i - 8i + 4i^2) / 5 = (10 - 15i) / 5 = 2 - 3i</span>。<span class=\"chem\">Im(a + bi) = b</span> であることを思い出しましょう。",
      ],
      // EN: <p>Multiply numerator and denominator by <span class="chem">2 - i</span>: <span class="chem">z = ((7 - 4i)(2 - i)) / (2^2 + 1^2) = (10 - 15i) / 5 = 2 - 3i</span>. Therefore <span class="chem">Im(z) = -3</span>.</p>
      solution: "<p>分母・分子に <span class=\"chem\">2 - i</span> を掛けると、<span class=\"chem\">z = ((7 - 4i)(2 - i)) / (2^2 + 1^2) = (10 - 15i) / 5 = 2 - 3i</span> となります。よって <span class=\"chem\">Im(z) = -3</span> です。</p>",
      misconception: {
        // EN (option B): The imaginary part Im(z) of z = a + bi is the real coefficient b = −3, never −3i.
        "1": "z = a + bi の虚部 Im(z) は実数の係数 b = −3 であり、−3i ではありません。",
        // EN (option C): Check the sign when multiplying by the conjugate (2 − i): the imaginary term in the numerator is −7i − 8i = −15i, not +7i − 8i = −i.
        "2": "共役な複素数 (2 − i) を掛けるときの符号を確認しましょう：分子の虚部は +7i − 8i = −i ではなく −7i − 8i = −15i です。",
        // EN (option D): 2 is the real part Re(z) = (14 − 4)/5 = 10/5 = 2, whereas the question asks for Im(z).
        "3": "2 は実部 Re(z) = (14 − 4)/5 = 10/5 = 2 であり、問題が問うているのは Im(z) です。",
      },
    },

    // ── t1-4-q002 · numeric · foundation · AHL · AHL 1.12 · 3 marks
    "t1-4-q002": {
      // EN: Given that <span class="chem">z = 3 - 4i</span>, evaluate <span class="chem">z z^* + i^{2028}</span>.
      stem: "<span class=\"chem\">z = 3 - 4i</span> のとき、<span class=\"chem\">z z^* + i^{2028}</span> を計算しなさい。",
      hints: [
        // EN: Recall that <span class="chem">z z^* = |z|^2 = a^2 + b^2</span>.
        "<span class=\"chem\">z z^* = |z|^2 = a^2 + b^2</span> を思い出しましょう。",
        // EN: For <span class="chem">i^{2028}</span>, notice that <span class="chem">2028</span> is a multiple of <span class="chem">4</span> (<span class="chem">2028 = 4 × 507</span>), so <span class="chem">i^{2028} = (i^4)^{507} = 1</span>.
        "<span class=\"chem\">i^{2028}</span> については、<span class=\"chem\">2028</span> が <span class=\"chem\">4</span> の倍数（<span class=\"chem\">2028 = 4 × 507</span>）なので <span class=\"chem\">i^{2028} = (i^4)^{507} = 1</span> となります。",
      ],
      // EN: <p><span class="chem">z z^* = 3^2 + (-4)^2 = 9 + 16 = 25</span>. Since <span class="chem">2028</span> is divisible by 4, <span class="chem">i^{2028} = 1</span>. Thus <span class="chem">25 + 1 = 26</span>.</p>
      solution: "<p><span class=\"chem\">z z^* = 3^2 + (-4)^2 = 9 + 16 = 25</span> です。<span class=\"chem\">2028</span> は 4 で割り切れるため <span class=\"chem\">i^{2028} = 1</span> となり、合計は <span class=\"chem\">25 + 1 = 26</span> です。</p>",
    },

    // ── t1-4-q003 · mcq · foundation · AHL · AHL 1.13 · 2 marks
    "t1-4-q003": {
      // EN: Write the complex number <span class="chem">z = -2 + 2 sqrt(3)i</span> in Euler form <span class="chem">r e^{i theta}</span>, where <span class="chem">r &gt; 0</span> and <span class="chem">-pi &lt; theta &lt;= pi</span>.
      stem: "複素数 <span class=\"chem\">z = -2 + 2 sqrt(3)i</span> をオイラー形式 <span class=\"chem\">r e^{i theta}</span>（<span class=\"chem\">r &gt; 0</span>、<span class=\"chem\">-pi &lt; theta &lt;= pi</span>）で表しなさい (Write)。",
      options: [
        // EN: <span class="chem">4 e^{i(2pi/3)}</span>
        "<span class=\"chem\">4 e^{i(2pi/3)}</span>",
        // EN: <span class="chem">4 e^{-i(pi/3)}</span>
        "<span class=\"chem\">4 e^{-i(pi/3)}</span>",
        // EN: <span class="chem">2 e^{i(2pi/3)}</span>
        "<span class=\"chem\">2 e^{i(2pi/3)}</span>",
        // EN: <span class="chem">4 e^{i(5pi/6)}</span>
        "<span class=\"chem\">4 e^{i(5pi/6)}</span>",
      ],
      hints: [
        // EN: Find the modulus: <span class="chem">r = sqrt((-2)^2 + (2 sqrt(3))^2) = sqrt(4 + 12) = 4</span>.
        "絶対値を求めます：<span class=\"chem\">r = sqrt((-2)^2 + (2 sqrt(3))^2) = sqrt(4 + 12) = 4</span>。",
        // EN: Since <span class="chem">Re(z) &lt; 0</span> and <span class="chem">Im(z) &gt; 0</span>, <span class="chem">z</span> is in Quadrant II with reference angle <span class="chem">arctan(sqrt(3)) = pi/3</span>.
        "<span class=\"chem\">Re(z) &lt; 0</span> かつ <span class=\"chem\">Im(z) &gt; 0</span> なので <span class=\"chem\">z</span> は第 2 象限にあり、基準角は <span class=\"chem\">arctan(sqrt(3)) = pi/3</span> です。",
      ],
      // EN: <p><span class="chem">r = sqrt(4 + 12) = 4</span>. In Quadrant II, <span class="chem">theta = pi - arctan(sqrt(3)) = pi - pi/3 = 2pi/3</span>, giving <span class="chem">z = 4 e^{i(2pi/3)}</span>.</p>
      solution: "<p><span class=\"chem\">r = sqrt(4 + 12) = 4</span> です。第 2 象限では <span class=\"chem\">theta = pi - arctan(sqrt(3)) = pi - pi/3 = 2pi/3</span> となるため、<span class=\"chem\">z = 4 e^{i(2pi/3)}</span> となります。</p>",
      misconception: {
        // EN (option B): arctan(2√3 / −2) = −π/3 lies in Quadrant IV, but z = −2 + 2√3 i has Re(z) < 0 and Im(z) > 0 (Quadrant II), so θ = π − π/3 = 2π/3.
        "1": "arctan(2√3 / −2) = −π/3 は第 4 象限の角ですが、z = −2 + 2√3 i は Re(z) < 0 かつ Im(z) > 0（第 2 象限）なので、θ = π − π/3 = 2π/3 です。",
        // EN (option C): The modulus is r = √((−2)² + (2√3)²) = √(4 + 12) = √16 = 4, not 2.
        "2": "絶対値は 2 ではなく、r = √((−2)² + (2√3)²) = √(4 + 12) = √16 = 4 です。",
        // EN (option D): The reference angle is arctan(√3) = π/3, so in Quadrant II the argument is π − π/3 = 2π/3, not 5π/6.
        "3": "基準角は arctan(√3) = π/3 なので、第 2 象限の偏角は 5π/6 ではなく π − π/3 = 2π/3 です。",
      },
    },

    // ── t1-4-q004 · numeric · foundation · AHL · AHL 1.12 · 4 marks
    "t1-4-q004": {
      // EN: Find the real numbers <span class="chem">x</span> and <span class="chem">y</span> such that <span class="chem">(x + yi)(3 + 2i) = -1 + 8i</span>. Enter the value of <span class="chem">x + y</span>.
      stem: "<span class=\"chem\">(x + yi)(3 + 2i) = -1 + 8i</span> を満たす実数 <span class=\"chem\">x</span> と <span class=\"chem\">y</span> を求めなさい (Find)。<span class=\"chem\">x + y</span> の値を入力しなさい。",
      hints: [
        // EN: Either expand <span class="chem">(3x - 2y) + (2x + 3y)i = -1 + 8i</span> and solve the simultaneous equations, or divide <span class="chem">x + yi = (-1 + 8i) / (3 + 2i)</span>.
        "<span class=\"chem\">(3x - 2y) + (2x + 3y)i = -1 + 8i</span> を展開して連立方程式を解くか、<span class=\"chem\">x + yi = (-1 + 8i) / (3 + 2i)</span> として割り算します。",
        // EN: Multiplying numerator and denominator by <span class="chem">3 - 2i</span> gives <span class="chem">((-1 + 8i)(3 - 2i)) / (9 + 4) = (13 + 26i) / 13 = 1 + 2i</span>.
        "分母・分子に <span class=\"chem\">3 - 2i</span> を掛けると <span class=\"chem\">((-1 + 8i)(3 - 2i)) / (9 + 4) = (13 + 26i) / 13 = 1 + 2i</span> になります。",
      ],
      // EN: <p>Dividing both sides by <span class="chem">3 + 2i</span>: <span class="chem">x + yi = ((-1 + 8i)(3 - 2i)) / (3^2 + 2^2) = (13 + 26i) / 13 = 1 + 2i</span>. Thus <span class="chem">x = 1</span>, <span class="chem">y = 2</span>, and <span class="chem">x + y = 3</span>.</p>
      solution: "<p>両辺を <span class=\"chem\">3 + 2i</span> で割ると、<span class=\"chem\">x + yi = ((-1 + 8i)(3 - 2i)) / (3^2 + 2^2) = (13 + 26i) / 13 = 1 + 2i</span> となります。よって <span class=\"chem\">x = 1</span>、<span class=\"chem\">y = 2</span> であり、<span class=\"chem\">x + y = 3</span> です。</p>",
    },

    // ── t1-4-q005 · mcq · exam · AHL · AHL 1.13 · 3 marks
    "t1-4-q005": {
      // EN: Let <span class="chem">z_1 = 6 e^{i(pi/4)}</span> and <span class="chem">z_2 = 2 e^{-i(pi/3)}</span>. Which expression gives <span class="chem">z_1 / z_2</span> in polar form with principal argument in <span class="chem">(-pi, pi]</span>?
      stem: "<span class=\"chem\">z_1 = 6 e^{i(pi/4)}</span>、<span class=\"chem\">z_2 = 2 e^{-i(pi/3)}</span> とする。<span class=\"chem\">z_1 / z_2</span> を主偏角が <span class=\"chem\">(-pi, pi]</span> の範囲にある極形式で表したものはどれですか？",
      options: [
        // EN: <span class="chem">3 cis(7pi/12)</span>
        "<span class=\"chem\">3 cis(7pi/12)</span>",
        // EN: <span class="chem">3 cis(-pi/12)</span>
        "<span class=\"chem\">3 cis(-pi/12)</span>",
        // EN: <span class="chem">12 cis(7pi/12)</span>
        "<span class=\"chem\">12 cis(7pi/12)</span>",
        // EN: <span class="chem">3 cis(-7pi/12)</span>
        "<span class=\"chem\">3 cis(-7pi/12)</span>",
      ],
      hints: [
        // EN: For complex division in polar/Euler form, divide the moduli and subtract the arguments: <span class="chem">|z_1 / z_2| = |z_1| / |z_2|</span> and <span class="chem">arg(z_1 / z_2) = arg(z_1) - arg(z_2)</span>.
        "極形式・オイラー形式の割り算では、絶対値を割り、偏角を引きます：<span class=\"chem\">|z_1 / z_2| = |z_1| / |z_2|</span>、<span class=\"chem\">arg(z_1 / z_2) = arg(z_1) - arg(z_2)</span>。",
        // EN: Compute <span class="chem">pi/4 - (-pi/3) = 3pi/12 + 4pi/12 = 7pi/12</span>.
        "<span class=\"chem\">pi/4 - (-pi/3) = 3pi/12 + 4pi/12 = 7pi/12</span> を計算します。",
      ],
      // EN: <p><span class="chem">z_1 / z_2 = (6/2) e^{i(pi/4 - (-pi/3))} = 3 e^{i(7pi/12)} = 3 cis(7pi/12)</span>.</p>
      solution: "<p><span class=\"chem\">z_1 / z_2 = (6/2) e^{i(pi/4 - (-pi/3))} = 3 e^{i(7pi/12)} = 3 cis(7pi/12)</span> となります。</p>",
      misconception: {
        // EN (option B): When dividing z₁ by z₂, you subtract arguments: π/4 − (−π/3) = π/4 + π/3 = 7π/12. Adding them gives −π/12, which is the argument of z₁z₂.
        "1": "z₁ を z₂ で割るときは偏角を引きます：π/4 − (−π/3) = π/4 + π/3 = 7π/12。足し算すると積 z₁z₂ の偏角である −π/12 になってしまいます。",
        // EN (option C): When dividing complex numbers in polar form, divide the moduli (6 / 2 = 3) rather than multiplying them.
        "2": "極形式の割り算では、絶対値は掛けるのではなく割ります（6 / 2 = 3）。",
        // EN (option D): arg(z₁ / z₂) = arg(z₁) − arg(z₂) = π/4 − (−π/3) = +7π/12, whereas −7π/12 is arg(z₂ / z₁).
        "3": "arg(z₁ / z₂) = arg(z₁) − arg(z₂) = π/4 − (−π/3) = +7π/12 です。−7π/12 は arg(z₂ / z₁) になります。",
      },
    },

    // ── t1-4-q006 · numeric · exam · AHL · AHL 1.14 · 4 marks
    "t1-4-q006": {
      // EN: Using De Moivre's theorem, evaluate <span class="chem">(1 - i)^{10}</span>. Since the result is purely imaginary of the form <span class="chem">k i</span>, enter the real value of <span class="chem">k</span>.
      stem: "ド・モアブルの定理を用いて <span class=\"chem\">(1 - i)^{10}</span> を計算しなさい。結果は <span class=\"chem\">k i</span> の形の純虚数になるので、実数 <span class=\"chem\">k</span> の値を入力しなさい。",
      hints: [
        // EN: Write <span class="chem">1 - i</span> in Euler form: <span class="chem">r = sqrt(1^2 + (-1)^2) = sqrt(2)</span> and <span class="chem">theta = -pi/4</span> (Quadrant IV).
        "<span class=\"chem\">1 - i</span> をオイラー形式で表します：<span class=\"chem\">r = sqrt(1^2 + (-1)^2) = sqrt(2)</span>、<span class=\"chem\">theta = -pi/4</span>（第 4 象限）。",
        // EN: By De Moivre's theorem, <span class="chem">(1 - i)^{10} = (sqrt(2))^{10} e^{-i(10pi/4)} = 32(cos(-5pi/2) + i sin(-5pi/2))</span>.
        "ド・モアブルの定理より、<span class=\"chem\">(1 - i)^{10} = (sqrt(2))^{10} e^{-i(10pi/4)} = 32(cos(-5pi/2) + i sin(-5pi/2))</span> となります。",
      ],
      // EN: <p><span class="chem">1 - i = sqrt(2) e^{-i pi/4}</span>. Raising to the 10th power gives <span class="chem">(sqrt(2))^{10} e^{-i(5pi/2)} = 32(cos(-pi/2) + i sin(-pi/2)) = -32i</span>. Therefore <span class="chem">k = -32</span>.</p>
      solution: "<p><span class=\"chem\">1 - i = sqrt(2) e^{-i pi/4}</span> です。10 乗すると <span class=\"chem\">(sqrt(2))^{10} e^{-i(5pi/2)} = 32(cos(-pi/2) + i sin(-pi/2)) = -32i</span> となるため、<span class=\"chem\">k = -32</span> です。</p>",
    },

    // ── t1-4-q007 · numeric · exam · AHL · AHL 1.14 · 4 marks
    "t1-4-q007": {
      // EN: Let <span class="chem">z = 1 - sqrt(3)i</span>. Find the <strong>smallest positive integer <span class="chem">n</span></strong> for which <span class="chem">z^n</span> is a <strong>positive real number</strong>.
      stem: "<span class=\"chem\">z = 1 - sqrt(3)i</span> とする。<span class=\"chem\">z^n</span> が<strong>正の実数</strong>となる<strong>最小の正の整数 <span class=\"chem\">n</span></strong> を求めなさい (Find)。",
      hints: [
        // EN: Write <span class="chem">z = 1 - sqrt(3)i</span> in polar form: <span class="chem">r = 2</span> and <span class="chem">theta = -pi/3</span>.
        "<span class=\"chem\">z = 1 - sqrt(3)i</span> を極形式で表します：<span class=\"chem\">r = 2</span>、<span class=\"chem\">theta = -pi/3</span>。",
        // EN: For <span class="chem">z^n = 2^n(cos(-n pi/3) + i sin(-n pi/3))</span> to be a <em>positive</em> real number, we need <span class="chem">sin(-n pi/3) = 0</span> AND <span class="chem">cos(-n pi/3) = +1</span> (note that <span class="chem">n = 3</span> gives <span class="chem">cos(-pi) = -1 &lt; 0</span>!).
        "<span class=\"chem\">z^n = 2^n(cos(-n pi/3) + i sin(-n pi/3))</span> が<em>正の</em>実数になるには、<span class=\"chem\">sin(-n pi/3) = 0</span> かつ <span class=\"chem\">cos(-n pi/3) = +1</span> が必要です（<span class=\"chem\">n = 3</span> のときは <span class=\"chem\">cos(-pi) = -1 &lt; 0</span> になる点に注意しましょう）。",
      ],
      // EN: <p><span class="chem">z = 2 e^{-i pi/3}</span>, so <span class="chem">z^n = 2^n e^{-i n pi/3}</span>. For <span class="chem">z^n</span> to be real and positive, we require <span class="chem">-n pi/3 = 2 pi k</span> for <span class="chem">k \in \mathbb{Z}</span>. The smallest positive integer is <span class="chem">n = 6</span> (since <span class="chem">n = 3</span> gives <span class="chem">z^3 = -8 &lt; 0</span>).</p>
      solution: "<p><span class=\"chem\">z = 2 e^{-i pi/3}</span> より <span class=\"chem\">z^n = 2^n e^{-i n pi/3}</span> です。<span class=\"chem\">z^n</span> が正の実数となるには、<span class=\"chem\">k \\in \\mathbb{Z}</span> に対して <span class=\"chem\">-n pi/3 = 2 pi k</span> が必要です。最小の正の整数は <span class=\"chem\">n = 6</span> です（<span class=\"chem\">n = 3</span> では <span class=\"chem\">z^3 = -8 &lt; 0</span> となります）。</p>",
    },

    // ── t1-4-q008 · numeric · exam · AHL · AHL 1.14 · 5 marks
    "t1-4-q008": {
      // EN: The polynomial <span class="chem">P(z) = z^3 + az^2 + bz - 26</span> has real coefficients <span class="chem">a, b \in \mathbb{R}</span>. Given that <span class="chem">z_1 = -2 + 3i</span> is a root of <span class="chem">P(z) = 0</span>, find the real root of <span class="chem">P(z) = 0</span>.
      stem: "多項式 <span class=\"chem\">P(z) = z^3 + az^2 + bz - 26</span> は実数係数 <span class=\"chem\">a, b \\in \\mathbb{R}</span> をもつ。<span class=\"chem\">z_1 = -2 + 3i</span> が <span class=\"chem\">P(z) = 0</span> の解であるとき、<span class=\"chem\">P(z) = 0</span> の実数解を求めなさい (Find)。",
      hints: [
        // EN: Since <span class="chem">P(z)</span> has real coefficients, the complex conjugate <span class="chem">z_2 = -2 - 3i</span> is also a root.
        "<span class=\"chem\">P(z)</span> は実数係数なので、共役な複素数 <span class=\"chem\">z_2 = -2 - 3i</span> もまた解になります。",
        // EN: The product of the conjugate pair is <span class="chem">z_1 z_2 = (-2)^2 + 3^2 = 13</span>, so the quadratic factor is <span class="chem">z^2 + 4z + 13</span>. Compare constant terms in <span class="chem">(z^2 + 4z + 13)(z - r) = z^3 + az^2 + bz - 26</span>.
        "共役なペアの積は <span class=\"chem\">z_1 z_2 = (-2)^2 + 3^2 = 13</span> なので、2 次因数は <span class=\"chem\">z^2 + 4z + 13</span> です。<span class=\"chem\">(z^2 + 4z + 13)(z - r) = z^3 + az^2 + bz - 26</span> の定数項を比較しましょう。",
      ],
      // EN: <p>By the Complex Conjugate Root Theorem, <span class="chem">z_2 = -2 - 3i</span> is also a root. The quadratic factor is <span class="chem">(z - z_1)(z - z_2) = z^2 + 4z + 13</span>. Since <span class="chem">P(z) = (z^2 + 4z + 13)(z - r)</span> and the constant term is <span class="chem">-13r = -26</span>, the real root is <span class="chem">r = 2</span>.</p>
      solution: "<p>共役複素数根の定理より <span class=\"chem\">z_2 = -2 - 3i</span> も解であり、2 次因数は <span class=\"chem\">(z - z_1)(z - z_2) = z^2 + 4z + 13</span> です。<span class=\"chem\">P(z) = (z^2 + 4z + 13)(z - r)</span> の定数項は <span class=\"chem\">-13r = -26</span> となるため、実数解は <span class=\"chem\">r = 2</span> です。</p>",
    },

    // ── t1-4-q009 · mcq · exam · AHL · AHL 1.14 · 4 marks
    "t1-4-q009": {
      // EN: Which of the following gives all four solutions to <span class="chem">z^4 = -16</span> in Euler form with <span class="chem">-pi &lt; arg(z) &lt;= pi</span>?
      stem: "<span class=\"chem\">-pi &lt; arg(z) &lt;= pi</span> の範囲で <span class=\"chem\">z^4 = -16</span> の 4 つの解すべてをオイラー形式で表したものはどれですか？",
      options: [
        // EN: <span class="chem">2 e^{+- i(pi/4)}</span> and <span class="chem">2 e^{+- i(3pi/4)}</span>
        "<span class=\"chem\">2 e^{+- i(pi/4)}</span> と <span class=\"chem\">2 e^{+- i(3pi/4)}</span>",
        // EN: <span class="chem">2 e^{i(0)}, 2 e^{i(pi/2)}, 2 e^{i pi}, 2 e^{-i(pi/2)}</span>
        "<span class=\"chem\">2 e^{i(0)}, 2 e^{i(pi/2)}, 2 e^{i pi}, 2 e^{-i(pi/2)}</span>",
        // EN: <span class="chem">4 e^{+- i(pi/4)}</span> and <span class="chem">4 e^{+- i(3pi/4)}</span>
        "<span class=\"chem\">4 e^{+- i(pi/4)}</span> と <span class=\"chem\">4 e^{+- i(3pi/4)}</span>",
        // EN: <span class="chem">2 e^{+- i(pi/6)}</span> and <span class="chem">2 e^{+- i(5pi/6)}</span>
        "<span class=\"chem\">2 e^{+- i(pi/6)}</span> と <span class=\"chem\">2 e^{+- i(5pi/6)}</span>",
      ],
      hints: [
        // EN: Write <span class="chem">-16</span> in Euler form with general argument: <span class="chem">-16 = 16 e^{i(pi + 2 pi k)}</span>.
        "<span class=\"chem\">-16</span> を一般角を用いてオイラー形式で表します：<span class=\"chem\">-16 = 16 e^{i(pi + 2 pi k)}</span>。",
        // EN: Take the fourth root: <span class="chem">r = 16^{1/4} = 2</span> and <span class="chem">theta_k = (pi + 2 pi k) / 4</span> for <span class="chem">k = -2, -1, 0, 1</span>.
        "4 乗根をとります：<span class=\"chem\">r = 16^{1/4} = 2</span>、<span class=\"chem\">k = -2, -1, 0, 1</span> に対して <span class=\"chem\">theta_k = (pi + 2 pi k) / 4</span>。",
      ],
      // EN: <p>Writing <span class="chem">z^4 = 16 e^{i(pi + 2pi k)}</span> gives <span class="chem">z_k = 2 e^{i(pi + 2pi k)/4}</span>. Evaluating at <span class="chem">k = 0, 1, -1, -2</span> gives <span class="chem">2 e^{+- i(pi/4)}</span> and <span class="chem">2 e^{+- i(3pi/4)}</span>.</p>
      solution: "<p><span class=\"chem\">z^4 = 16 e^{i(pi + 2pi k)}</span> と書くと <span class=\"chem\">z_k = 2 e^{i(pi + 2pi k)/4}</span> となります。<span class=\"chem\">k = 0, 1, -1, -2</span> を代入すると <span class=\"chem\">2 e^{+- i(pi/4)}</span> と <span class=\"chem\">2 e^{+- i(3pi/4)}</span> が得られます。</p>",
      misconception: {
        // EN (option B): Those are the roots of z⁴ = +16 (where arg(16) = 0). Here w = −16 has arg(−16) = π, so the angles are (π + 2πk)/4 = ±π/4, ±3π/4.
        "1": "それらは z⁴ = +16（arg(16) = 0）の解です。ここでは w = −16 で arg(−16) = π なので、偏角は (π + 2πk)/4 = ±π/4, ±3π/4 になります。",
        // EN (option C): The modulus of each 4th root is 16<sup>1/4</sup> = 2, not 16<sup>1/2</sup> = 4.
        "2": "各 4 乗根の絶対値は 16<sup>1/2</sup> = 4 ではなく 16<sup>1/4</sup> = 2 です。",
        // EN (option D): Dividing π + 2πk by n = 4 gives odd multiples of π/4 (±π/4, ±3π/4), not multiples of π/6.
        "3": "π + 2πk を n = 4 で割ると、π/6 の倍数ではなく π/4 の奇数倍（±π/4, ±3π/4）になります。",
      },
    },

    // ── t1-4-q010 · numeric · exam · AHL · AHL 1.14 · 4 marks
    "t1-4-q010": {
      // EN: The five roots of <span class="chem">z^5 = 32i</span> form the vertices of a regular pentagon on the Argand diagram. Calculate the area of this regular pentagon to 3 significant figures.
      stem: "<span class=\"chem\">z^5 = 32i</span> の 5 つの解は、複素数平面上で正五角形の頂点をなす。この正五角形の面積を計算し (Calculate)、有効数字 3 桁で答えなさい。",
      hints: [
        // EN: Each root has modulus <span class="chem">r = 32^{1/5} = 2</span>, so all 5 vertices lie on a circle of radius <span class="chem">R = 2</span> centered at the origin.
        "各解の絶対値は <span class=\"chem\">r = 32^{1/5} = 2</span> なので、5 つの頂点はすべて原点中心・半径 <span class=\"chem\">R = 2</span> の円周上にあります。",
        // EN: Split the regular pentagon into 5 congruent isosceles triangles meeting at the origin, each with two sides of length <span class="chem">R = 2</span> and included angle <span class="chem">2pi / 5</span>: <span class="chem">Area = 5 × (1/2) R^2 sin(2pi / 5)</span>.
        "正五角形を原点で接する 5 つの合同な二等辺三角形（2 辺の長さが <span class=\"chem\">R = 2</span>、間の角が <span class=\"chem\">2pi / 5</span>）に分けます：<span class=\"chem\">Area = 5 × (1/2) R^2 sin(2pi / 5)</span>。",
      ],
      // EN: <p>The roots lie on a circle of radius <span class="chem">R = 32^{1/5} = 2</span> spaced by <span class="chem">2pi/5</span> radians. The pentagon consists of 5 triangles of area <span class="chem">(1/2)(2^2) sin(2pi/5)</span>, so total area <span class="chem">= 5 × 2 sin(2pi/5) = 10 sin(72^\circ) ≈ 9.51</span>.</p>
      solution: "<p>5 つの解は半径 <span class=\"chem\">R = 32^{1/5} = 2</span> の円周上に <span class=\"chem\">2pi/5</span> ラジアン間隔で並びます。正五角形は面積 <span class=\"chem\">(1/2)(2^2) sin(2pi/5)</span> の三角形 5 個からなるため、合計の面積は <span class=\"chem\">= 5 × 2 sin(2pi/5) = 10 sin(72^\\circ) ≈ 9.51</span> となります。</p>",
    },

    // ── t1-4-q011 · multi · exam · AHL · AHL 1.14 · 3 marks
    "t1-4-q011": {
      // EN: Let <span class="chem">omega = e^{i(2pi/5)}</span> be a primitive fifth root of unity (<span class="chem">omega^5 = 1, omega != 1</span>). Select <strong>all</strong> statements that are true.
      stem: "<span class=\"chem\">omega = e^{i(2pi/5)}</span> を 1 の原始 5 乗根（<span class=\"chem\">omega^5 = 1, omega != 1</span>）とする。正しい記述を<strong>すべて</strong>選びなさい。",
      options: [
        // EN: <span class="chem">1 + omega + omega^2 + omega^3 + omega^4 = 0</span>
        "<span class=\"chem\">1 + omega + omega^2 + omega^3 + omega^4 = 0</span>",
        // EN: <span class="chem">omega^4 = omega^*</span>
        "<span class=\"chem\">omega^4 = omega^*</span>",
        // EN: <span class="chem">omega^2 + omega^3 = 2 cos(4pi/5)</span>
        "<span class=\"chem\">omega^2 + omega^3 = 2 cos(4pi/5)</span>",
        // EN: <span class="chem">Im(1 + omega + omega^2 + omega^3 + omega^4) = 1</span>
        "<span class=\"chem\">Im(1 + omega + omega^2 + omega^3 + omega^4) = 1</span>",
      ],
      hints: [
        // EN: Check the sum of all <span class="chem">n</span>-th roots of unity using the geometric series formula <span class="chem">(1 - omega^5)/(1 - omega)</span>.
        "等比級数の和の公式 <span class=\"chem\">(1 - omega^5)/(1 - omega)</span> を使って、1 の <span class=\"chem\">n</span> 乗根すべての和を確認します。",
        // EN: Notice that <span class="chem">omega^4 = e^{i(8pi/5)} = e^{-i(2pi/5)} = omega^*</span> and <span class="chem">omega^3 = e^{i(6pi/5)} = e^{-i(4pi/5)} = (omega^2)^*</span>.
        "<span class=\"chem\">omega^4 = e^{i(8pi/5)} = e^{-i(2pi/5)} = omega^*</span> および <span class=\"chem\">omega^3 = e^{i(6pi/5)} = e^{-i(4pi/5)} = (omega^2)^*</span> であることに注目しましょう。",
      ],
      // EN: <p>Since <span class="chem">omega^5 = 1</span> and <span class="chem">omega != 1</span>, <span class="chem">1 + omega + omega^2 + omega^3 + omega^4 = (1 - omega^5)/(1 - omega) = 0</span>. Also <span class="chem">omega^4 = omega^{-1} = omega^*</span>, and <span class="chem">omega^2 + omega^3 = e^{i(4pi/5)} + e^{-i(4pi/5)} = 2 cos(4pi/5)</span>.</p>
      solution: "<p><span class=\"chem\">omega^5 = 1</span> かつ <span class=\"chem\">omega != 1</span> なので、<span class=\"chem\">1 + omega + omega^2 + omega^3 + omega^4 = (1 - omega^5)/(1 - omega) = 0</span> です。また <span class=\"chem\">omega^4 = omega^{-1} = omega^*</span> であり、<span class=\"chem\">omega^2 + omega^3 = e^{i(4pi/5)} + e^{-i(4pi/5)} = 2 cos(4pi/5)</span> も成り立ちます。</p>",
      misconception: {
        // EN (option D): Since 1 + ω + ω² + ω³ + ω⁴ = 0, both its real part and its imaginary part are 0, not 1.
        "3": "1 + ω + ω² + ω³ + ω⁴ = 0 なので、実部も虚部も 1 ではなく 0 です。",
      },
    },

    // ── t1-4-q012 · order · exam · AHL · AHL 1.14 · 4 marks
    "t1-4-q012": {
      // EN: Arrange the steps in logical order to prove the triple-angle identity <span class="chem">cos(3 theta) = 4 cos^3(theta) - 3 cos(theta)</span> using De Moivre's theorem.
      stem: "ド・モアブルの定理を用いて 3 倍角の公式 <span class=\"chem\">cos(3 theta) = 4 cos^3(theta) - 3 cos(theta)</span> を証明する (Prove) 手順を正しい論理的順序に並べ替えなさい。",
      options: [
        // EN: By De Moivre's theorem, <span class="chem">cos(3 theta) + i sin(3 theta) = (cos theta + i sin theta)^3</span>.
        "ド・モアブルの定理より、<span class=\"chem\">cos(3 theta) + i sin(3 theta) = (cos theta + i sin theta)^3</span>。",
        // EN: Expand the right-hand side using the binomial theorem: <span class="chem">cos^3 theta + 3i cos^2 theta sin theta + 3i^2 cos theta sin^2 theta + i^3 sin^3 theta</span>.
        "二項定理を使って右辺を展開する：<span class=\"chem\">cos^3 theta + 3i cos^2 theta sin theta + 3i^2 cos theta sin^2 theta + i^3 sin^3 theta</span>。",
        // EN: Simplify powers of <span class="chem">i</span> and equate real parts on both sides: <span class="chem">cos(3 theta) = cos^3 theta - 3 cos theta sin^2 theta</span>.
        "<span class=\"chem\">i</span> の累乗を整理して両辺の実部を等置する：<span class=\"chem\">cos(3 theta) = cos^3 theta - 3 cos theta sin^2 theta</span>。",
        // EN: Substitute the Pythagorean identity <span class="chem">sin^2 theta = 1 - cos^2 theta</span> and collect like terms to obtain <span class="chem">cos(3 theta) = 4 cos^3 theta - 3 cos theta</span>.
        "三角関数の相互関係 <span class=\"chem\">sin^2 theta = 1 - cos^2 theta</span> を代入して同類項をまとめ、<span class=\"chem\">cos(3 theta) = 4 cos^3 theta - 3 cos theta</span> を得る。",
      ],
      hints: [
        // EN: Start with the statement of De Moivre's theorem for <span class="chem">n = 3</span>.
        "<span class=\"chem\">n = 3</span> に対するド・モアブルの定理の式から始めます。",
        // EN: Next expand the cube using the binomial theorem, equate the real parts, and finally eliminate <span class="chem">sin^2 theta</span>.
        "次に二項定理で 3 乗を展開し、実部を等置して、最後に <span class=\"chem\">sin^2 theta</span> を消去します。",
      ],
      // EN: <p>First state De Moivre's theorem for <span class="chem">n = 3</span>, then expand <span class="chem">(cos theta + i sin theta)^3</span> binomially, equate real parts using <span class="chem">i^2 = -1</span>, and replace <span class="chem">sin^2 theta = 1 - cos^2 theta</span>.</p>
      solution: "<p>まず <span class=\"chem\">n = 3</span> のド・モアブルの定理を書き、次に <span class=\"chem\">(cos theta + i sin theta)^3</span> を二項展開し、<span class=\"chem\">i^2 = -1</span> を使って実部を等置し、<span class=\"chem\">sin^2 theta = 1 - cos^2 theta</span> を代入します。</p>",
    },

    // ── t1-4-q013 · numeric · exam · AHL · AHL 1.14 · 4 marks
    "t1-4-q013": {
      // EN: By expanding <span class="chem">(cos theta + i sin theta)^4</span> and equating real parts, <span class="chem">cos(4 theta)</span> can be written in the form <span class="chem">A cos^4(theta) + B cos^2(theta) + C</span>. Find the value of <span class="chem">A + B + C</span>.
      stem: "<span class=\"chem\">(cos theta + i sin theta)^4</span> を展開して実部を等置すると、<span class=\"chem\">cos(4 theta)</span> は <span class=\"chem\">A cos^4(theta) + B cos^2(theta) + C</span> の形で表せる。<span class=\"chem\">A + B + C</span> の値を求めなさい (Find)。",
      hints: [
        // EN: <span class="chem">Re((cos theta + i sin theta)^4) = cos^4 theta - 6 cos^2 theta sin^2 theta + sin^4 theta</span>.
        "<span class=\"chem\">Re((cos theta + i sin theta)^4) = cos^4 theta - 6 cos^2 theta sin^2 theta + sin^4 theta</span>。",
        // EN: Replace <span class="chem">sin^2 theta = 1 - cos^2 theta</span> to get <span class="chem">8 cos^4 theta - 8 cos^2 theta + 1</span> (or notice that setting <span class="chem">theta = 0</span> gives <span class="chem">cos(0) = A(1) + B(1) + C = 1</span>!).
        "<span class=\"chem\">sin^2 theta = 1 - cos^2 theta</span> を代入すると <span class=\"chem\">8 cos^4 theta - 8 cos^2 theta + 1</span> が得られます（または <span class=\"chem\">theta = 0</span> を代入すると <span class=\"chem\">cos(0) = A(1) + B(1) + C = 1</span> になることにも注目しましょう）。",
      ],
      // EN: <p><span class="chem">cos(4 theta) = cos^4 theta - 6 cos^2 theta(1 - cos^2 theta) + (1 - cos^2 theta)^2 = 8 cos^4 theta - 8 cos^2 theta + 1</span>. Thus <span class="chem">A = 8, B = -8, C = 1</span> and <span class="chem">A + B + C = 1</span>.</p>
      solution: "<p><span class=\"chem\">cos(4 theta) = cos^4 theta - 6 cos^2 theta(1 - cos^2 theta) + (1 - cos^2 theta)^2 = 8 cos^4 theta - 8 cos^2 theta + 1</span> となります。よって <span class=\"chem\">A = 8, B = -8, C = 1</span> であり、<span class=\"chem\">A + B + C = 1</span> です。</p>",
    },

    // ── t1-4-q014 · mcq · exam · AHL · AHL 1.14 · 3 marks
    "t1-4-q014": {
      // EN: A real quartic polynomial <span class="chem">P(z)</span> has roots <span class="chem">1 + 2i</span> and <span class="chem">3 - i</span>, and leading coefficient <span class="chem">1</span>. What is the constant term of <span class="chem">P(z)</span>?
      stem: "実数係数の 4 次多項式 <span class=\"chem\">P(z)</span> が <span class=\"chem\">1 + 2i</span> と <span class=\"chem\">3 - i</span> を解にもち、最高次係数が <span class=\"chem\">1</span> である。<span class=\"chem\">P(z)</span> の定数項はいくらですか？",
      options: [
        // EN: <span class="chem">50</span>
        "<span class=\"chem\">50</span>",
        // EN: <span class="chem">10</span>
        "<span class=\"chem\">10</span>",
        // EN: <span class="chem">-50</span>
        "<span class=\"chem\">-50</span>",
        // EN: <span class="chem">15</span>
        "<span class=\"chem\">15</span>",
      ],
      hints: [
        // EN: Since <span class="chem">P(z)</span> has real coefficients, its four roots are <span class="chem">1 +- 2i</span> and <span class="chem">3 +- i</span>.
        "<span class=\"chem\">P(z)</span> は実数係数なので、4 つの解は <span class=\"chem\">1 +- 2i</span> と <span class=\"chem\">3 +- i</span> です。",
        // EN: The constant term of the monic quartic is the product of all four roots: <span class="chem">|1 + 2i|^2 × |3 - i|^2</span>.
        "最高次係数が 1 の 4 次多項式の定数項は、4 つの解すべての積 <span class=\"chem\">|1 + 2i|^2 × |3 - i|^2</span> になります。",
      ],
      // EN: <p>The two quadratic factors are <span class="chem">(z^2 - 2z + 5)</span> and <span class="chem">(z^2 - 6z + 10)</span>. Multiplying their constant terms gives <span class="chem">5 × 10 = 50</span>.</p>
      solution: "<p>2 つの 2 次因数は <span class=\"chem\">(z^2 - 2z + 5)</span> と <span class=\"chem\">(z^2 - 6z + 10)</span> です。それぞれの定数項を掛けると <span class=\"chem\">5 × 10 = 50</span> になります。</p>",
      misconception: {
        // EN (option B): 10 is the modulus squared of only one conjugate pair (3² + (−1)² = 10), forgetting to multiply by the other pair (1² + 2² = 5).
        "1": "10 は片方の共役ペアの絶対値の 2 乗（3² + (−1)² = 10）だけであり、もう一方のペア（1² + 2² = 5）を掛け忘れています。",
        // EN (option C): The product of each complex conjugate pair (z − z₁)(z − z₁*) = |z₁|² is always positive, so the constant term is (+5)(+10) = +50.
        "2": "共役複素数のペアの積 (z − z₁)(z − z₁*) = |z₁|² は常に正になるため、定数項は (+5)(+10) = +50 です。",
        // EN (option D): You added |1 + 2i|² + |3 − i|² = 5 + 10 = 15 instead of multiplying the two quadratic factors.
        "3": "2 つの 2 次因数の定数項を掛けるのではなく、足して |1 + 2i|² + |3 − i|² = 5 + 10 = 15 にしてしまいました。",
      },
    },

    // ── t1-4-q015 · numeric · challenge · AHL · AHL 1.14 · 5 marks
    "t1-4-q015": {
      // EN: Let <span class="chem">z = cos theta + i sin theta</span>. Using <span class="chem">2 cos theta = z + z^{-1}</span>, it can be shown that <span class="chem">cos^4 theta = (1/8) cos(4 theta) + (1/2) cos(2 theta) + K</span>, where <span class="chem">K</span> is a constant. Find the exact value of <span class="chem">K</span>.
      stem: "<span class=\"chem\">z = cos theta + i sin theta</span> とする。<span class=\"chem\">2 cos theta = z + z^{-1}</span> を用いると、<span class=\"chem\">cos^4 theta = (1/8) cos(4 theta) + (1/2) cos(2 theta) + K</span>（<span class=\"chem\">K</span> は定数）と表せることが示せる。<span class=\"chem\">K</span> の厳密値（正確な値）を求めなさい (Find)。",
      hints: [
        // EN: Expand <span class="chem">(2 cos theta)^4 = (z + z^{-1})^4 = z^4 + 4z^2 + 6 + 4z^{-2} + z^{-4}</span>.
        "<span class=\"chem\">(2 cos theta)^4 = (z + z^{-1})^4 = z^4 + 4z^2 + 6 + 4z^{-2} + z^{-4}</span> を展開します。",
        // EN: Group symmetric pairs: <span class="chem">16 cos^4 theta = (z^4 + z^{-4}) + 4(z^2 + z^{-2}) + 6 = 2 cos(4 theta) + 8 cos(2 theta) + 6</span>, then divide by <span class="chem">16</span>.
        "対称な項をまとめると <span class=\"chem\">16 cos^4 theta = (z^4 + z^{-4}) + 4(z^2 + z^{-2}) + 6 = 2 cos(4 theta) + 8 cos(2 theta) + 6</span> となるので、両辺を <span class=\"chem\">16</span> で割ります。",
      ],
      // EN: <p><span class="chem">16 cos^4 theta = (z + z^{-1})^4 = (z^4 + z^{-4}) + 4(z^2 + z^{-2}) + 6 = 2 cos(4 theta) + 8 cos(2 theta) + 6</span>. Dividing both sides by 16 gives <span class="chem">K = 6/16 = 3/8 = 0.375</span>.</p>
      solution: "<p><span class=\"chem\">16 cos^4 theta = (z + z^{-1})^4 = (z^4 + z^{-4}) + 4(z^2 + z^{-2}) + 6 = 2 cos(4 theta) + 8 cos(2 theta) + 6</span> となります。両辺を 16 で割ると <span class=\"chem\">K = 6/16 = 3/8 = 0.375</span> です。</p>",
    },

    // ── t1-4-q016 · numeric · exam · AHL · AHL 1.14 · 5 marks
    "t1-4-q016": {
      // EN: Let <span class="chem">omega = e^{i(2pi/5)}</span>. By considering the real part of <span class="chem">1 + omega + omega^2 + omega^3 + omega^4 = 0</span> and noting that <span class="chem">cos(8pi/5) = cos(2pi/5)</span> and <span class="chem">cos(6pi/5) = cos(4pi/5)</span>, find the exact value of <span class="chem">cos(2pi/5) + cos(4pi/5)</span>.
      stem: "<span class=\"chem\">omega = e^{i(2pi/5)}</span> とする。<span class=\"chem\">1 + omega + omega^2 + omega^3 + omega^4 = 0</span> の実部に注目し、<span class=\"chem\">cos(8pi/5) = cos(2pi/5)</span> および <span class=\"chem\">cos(6pi/5) = cos(4pi/5)</span> を用いることで、<span class=\"chem\">cos(2pi/5) + cos(4pi/5)</span> の厳密値（正確な値）を求めなさい (Find)。",
      hints: [
        // EN: Take the real part of <span class="chem">1 + e^{i(2pi/5)} + e^{i(4pi/5)} + e^{i(6pi/5)} + e^{i(8pi/5)} = 0</span>.
        "<span class=\"chem\">1 + e^{i(2pi/5)} + e^{i(4pi/5)} + e^{i(6pi/5)} + e^{i(8pi/5)} = 0</span> の実部をとります。",
        // EN: Since <span class="chem">cos(8pi/5) = cos(2pi/5)</span> and <span class="chem">cos(6pi/5) = cos(4pi/5)</span>, we get <span class="chem">1 + 2 cos(2pi/5) + 2 cos(4pi/5) = 0</span>.
        "<span class=\"chem\">cos(8pi/5) = cos(2pi/5)</span> かつ <span class=\"chem\">cos(6pi/5) = cos(4pi/5)</span> より、<span class=\"chem\">1 + 2 cos(2pi/5) + 2 cos(4pi/5) = 0</span> が得られます。",
      ],
      // EN: <p>Equating the real part of <span class="chem">1 + omega + omega^2 + omega^3 + omega^4 = 0</span> to zero gives <span class="chem">1 + 2 cos(2pi/5) + 2 cos(4pi/5) = 0</span>, hence <span class="chem">cos(2pi/5) + cos(4pi/5) = -1/2 = -0.5</span>.</p>
      solution: "<p><span class=\"chem\">1 + omega + omega^2 + omega^3 + omega^4 = 0</span> の実部を 0 と等置すると <span class=\"chem\">1 + 2 cos(2pi/5) + 2 cos(4pi/5) = 0</span> となるため、<span class=\"chem\">cos(2pi/5) + cos(4pi/5) = -1/2 = -0.5</span> です。</p>",
    },

    // ── t1-4-q017 · short · exam · AHL · AHL 1.13 · 6 marks
    "t1-4-q017": {
      // EN: Let <span class="chem">z_1 = 2 + 2i</span> and <span class="chem">z_2 = -1 + sqrt(3)i</span>.<br>(a) Express <span class="chem">z_1</span> and <span class="chem">z_2</span> in the form <span class="chem">r e^{i theta}</span>, where <span class="chem">r &gt; 0</span> and <span class="chem">-pi &lt; theta &lt;= pi</span>. [3 marks]<br>(b) Hence find the exact value of <span class="chem">(z_1)^4 / (z_2)^3</span> in Cartesian form <span class="chem">a + bi</span>. [3 marks]
      stem: "<span class=\"chem\">z_1 = 2 + 2i</span>、<span class=\"chem\">z_2 = -1 + sqrt(3)i</span> とする。<br>(a) <span class=\"chem\">z_1</span> と <span class=\"chem\">z_2</span> を <span class=\"chem\">r e^{i theta}</span>（<span class=\"chem\">r &gt; 0</span>、<span class=\"chem\">-pi &lt; theta &lt;= pi</span>）の形で表しなさい。 [3 marks]<br>(b) これを用いて (Hence)、<span class=\"chem\">(z_1)^4 / (z_2)^3</span> の厳密値を直交座標形式 <span class=\"chem\">a + bi</span> で求めなさい (Find)。 [3 marks]",
      hints: [
        // EN: For part (a), remember <span class="chem">z_2 = -1 + sqrt(3)i</span> lies in Quadrant II, so <span class="chem">arg(z_2) = pi - pi/3 = 2pi/3</span>.
        "(a) では、<span class=\"chem\">z_2 = -1 + sqrt(3)i</span> が第 2 象限にあるため、<span class=\"chem\">arg(z_2) = pi - pi/3 = 2pi/3</span> になることに注意しましょう。",
        // EN: For part (b), use De Moivre's theorem before dividing: <span class="chem">(2 sqrt(2))^4 = 64</span> and <span class="chem">2^3 = 8</span>.
        "(b) では、割り算の前にド・モアブルの定理を使います：<span class=\"chem\">(2 sqrt(2))^4 = 64</span>、<span class=\"chem\">2^3 = 8</span>。",
      ],
      // EN: <p>(a) <span class="chem">|z_1| = sqrt(4 + 4) = 2 sqrt(2)</span>, <span class="chem">arg(z_1) = pi/4 =&gt; z_1 = 2 sqrt(2) e^{i(pi/4)}</span>. <span class="chem">|z_2| = sqrt(1 + 3) = 2</span>, <span class="chem">arg(z_2) = 2pi/3 =&gt; z_2 = 2 e^{i(2pi/3)}</span>.<br>(b) <span class="chem">z_1^4 / z_2^3 = (64 e^{i pi}) / (8 e^{i(2pi)}) = 8 e^{-i pi} = -8</span>.</p>
      solution: "<p>(a) <span class=\"chem\">|z_1| = sqrt(4 + 4) = 2 sqrt(2)</span>、<span class=\"chem\">arg(z_1) = pi/4 =&gt; z_1 = 2 sqrt(2) e^{i(pi/4)}</span>。<span class=\"chem\">|z_2| = sqrt(1 + 3) = 2</span>、<span class=\"chem\">arg(z_2) = 2pi/3 =&gt; z_2 = 2 e^{i(2pi/3)}</span>。<br>(b) <span class=\"chem\">z_1^4 / z_2^3 = (64 e^{i pi}) / (8 e^{i(2pi)}) = 8 e^{-i pi} = -8</span>。</p>",
      // EN: <p>(a) <span class="chem">z_1 = 2 sqrt(2) e^{i(pi/4)}</span> and <span class="chem">z_2 = 2 e^{i(2pi/3)}</span>.<br>(b) <span class="chem">(z_1)^4 / (z_2)^3 = (64 e^{i pi}) / (8 e^{i(2pi)}) = 8 e^{-i pi} = -8</span>.</p>
      answer: "<p>(a) <span class=\"chem\">z_1 = 2 sqrt(2) e^{i(pi/4)}</span> かつ <span class=\"chem\">z_2 = 2 e^{i(2pi/3)}</span>。<br>(b) <span class=\"chem\">(z_1)^4 / (z_2)^3 = (64 e^{i pi}) / (8 e^{i(2pi)}) = 8 e^{-i pi} = -8</span>。</p>",
      markscheme: [
        // EN: A1: Correct Euler form z₁ = 2√2 e<sup>iπ/4</sup> (or √8 e<sup>iπ/4</sup>).
        "A1：正しいオイラー形式 z₁ = 2√2 e<sup>iπ/4</sup>（または √8 e<sup>iπ/4</sup>）を求める。",
        // EN: M1: Correct modulus |z₂| = 2 and Quadrant II angle calculation π − π/3.
        "M1：正しい絶対値 |z₂| = 2 と第 2 象限の偏角計算 π − π/3 を行う。",
        // EN: A1: Correct Euler form z₂ = 2 e<sup>i(2π/3)</sup>.
        "A1：正しいオイラー形式 z₂ = 2 e<sup>i(2π/3)</sup> を求める。",
        // EN: M1: Applies De Moivre's theorem to numerator and denominator: (2√2)⁴ e<sup>iπ</sup> = 64 e<sup>iπ</sup> and 2³ e<sup>i(2π)</sup> = 8 e<sup>i(2π)</sup>.
        "M1：分子・分母にド・モアブルの定理を適用する：(2√2)⁴ e<sup>iπ</sup> = 64 e<sup>iπ</sup>、2³ e<sup>i(2π)</sup> = 8 e<sup>i(2π)</sup>。",
        // EN: M1: Divides moduli (64 / 8 = 8) and subtracts arguments (π − 2π = −π).
        "M1：絶対値を割り（64 / 8 = 8）、偏角を引く（π − 2π = −π）。",
        // EN: A1: Evaluates 8(cos(−π) + i sin(−π)) = −8 (or −8 + 0i).
        "A1：8(cos(−π) + i sin(−π)) = −8（または −8 + 0i）を計算する。",
      ],
    },

    // ── t1-4-q018 · short · challenge · AHL · AHL 1.14 · 7 marks
    "t1-4-q018": {
      // EN: Consider the equation <span class="chem">z^4 + 4z^2 + 16 = 0</span>, where <span class="chem">z \in \mathbb{C}</span>.<br>(a) By letting <span class="chem">w = z^2</span>, find the two possible values of <span class="chem">w</span> in Euler form <span class="chem">r e^{i theta}</span>. [3 marks]<br>(b) Hence find all four roots of <span class="chem">z^4 + 4z^2 + 16 = 0</span> in Cartesian form <span class="chem">a + bi</span>, and factorize <span class="chem">z^4 + 4z^2 + 16</span> into the product of two real quadratic factors. [4 marks]
      stem: "方程式 <span class=\"chem\">z^4 + 4z^2 + 16 = 0</span>（<span class=\"chem\">z \\in \\mathbb{C}</span>）を考える。<br>(a) <span class=\"chem\">w = z^2</span> とおくことにより、<span class=\"chem\">w</span> の 2 つの値をオイラー形式 <span class=\"chem\">r e^{i theta}</span> で求めなさい (Find)。 [3 marks]<br>(b) これを用いて (Hence)、<span class=\"chem\">z^4 + 4z^2 + 16 = 0</span> の 4 つの解すべてを直交座標形式 <span class=\"chem\">a + bi</span> で求め (Find)、<span class=\"chem\">z^4 + 4z^2 + 16</span> を 2 つの実数係数の 2 次式の積に因数分解しなさい (Factorize)。 [4 marks]",
      hints: [
        // EN: Solve <span class="chem">w^2 + 4w + 16 = 0</span> using the quadratic formula to get <span class="chem">w = -2 +- 2 sqrt(3)i</span>.
        "解の公式を使って <span class=\"chem\">w^2 + 4w + 16 = 0</span> を解き、<span class=\"chem\">w = -2 +- 2 sqrt(3)i</span> を得ます。",
        // EN: Take the square roots of <span class="chem">4 e^{+- i(2pi/3)}</span> to get four roots of modulus <span class="chem">2</span> and arguments <span class="chem">+- pi/3</span> and <span class="chem">+- 2pi/3</span>.
        "<span class=\"chem\">4 e^{+- i(2pi/3)}</span> の平方根をとると、絶対値が <span class=\"chem\">2</span> で偏角が <span class=\"chem\">+- pi/3</span> と <span class=\"chem\">+- 2pi/3</span> の 4 つの解が得られます。",
      ],
      // EN: <p>(a) <span class="chem">w = (-4 +- sqrt(-48))/2 = -2 +- 2 sqrt(3)i = 4 e^{+- i(2pi/3)}</span>.<br>(b) Taking square roots gives <span class="chem">z = 2 e^{+- i(pi/3)} = 1 +- sqrt(3)i</span> and <span class="chem">z = 2 e^{+- i(2pi/3)} = -1 +- sqrt(3)i</span>. Pairing conjugates gives <span class="chem">(z^2 - 2z + 4)(z^2 + 2z + 4)</span>.</p>
      solution: "<p>(a) <span class=\"chem\">w = (-4 +- sqrt(-48))/2 = -2 +- 2 sqrt(3)i = 4 e^{+- i(2pi/3)}</span>。<br>(b) 平方根をとると <span class=\"chem\">z = 2 e^{+- i(pi/3)} = 1 +- sqrt(3)i</span> と <span class=\"chem\">z = 2 e^{+- i(2pi/3)} = -1 +- sqrt(3)i</span> が得られます。共役なペアを掛け合わせると <span class=\"chem\">(z^2 - 2z + 4)(z^2 + 2z + 4)</span> となります。</p>",
      // EN: <p>(a) <span class="chem">w = -2 +- 2 sqrt(3)i = 4 e^{+- i(2pi/3)}</span>.<br>(b) The four roots are <span class="chem">z = +- (1 + sqrt(3)i)</span> and <span class="chem">z = +- (1 - sqrt(3)i)</span>. Grouping conjugate pairs gives <span class="chem">z^4 + 4z^2 + 16 = (z^2 - 2z + 4)(z^2 + 2z + 4)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">w = -2 +- 2 sqrt(3)i = 4 e^{+- i(2pi/3)}</span>。<br>(b) 4 つの解は <span class=\"chem\">z = +- (1 + sqrt(3)i)</span> および <span class=\"chem\">z = +- (1 - sqrt(3)i)</span>。共役なペアをまとめると <span class=\"chem\">z^4 + 4z^2 + 16 = (z^2 - 2z + 4)(z^2 + 2z + 4)</span>。</p>",
      markscheme: [
        // EN: M1: Uses the quadratic formula on w² + 4w + 16 = 0 to get w = (−4 ± √(16 − 64))/2 = −2 ± 2√3 i.
        "M1：w² + 4w + 16 = 0 に解の公式を使い、w = (−4 ± √(16 − 64))/2 = −2 ± 2√3 i を得る。",
        // EN: A1: Correctly finds modulus |w| = √(4 + 12) = 4.
        "A1：絶対値 |w| = √(4 + 12) = 4 を正しく求める。",
        // EN: A1: Writes w = 4 e<sup>i(2π/3)</sup> and w = 4 e<sup>−i(2π/3)</sup>.
        "A1：w = 4 e<sup>i(2π/3)</sup> および w = 4 e<sup>−i(2π/3)</sup> と書く。",
        // EN: M1: Takes square roots of w to get r = 2 and arguments ±π/3 and ±(π/3 − π) = ±2π/3.
        "M1：w の平方根をとり、r = 2、偏角 ±π/3 および ±(π/3 − π) = ±2π/3 を求める。",
        // EN: A1: Converts the four roots to Cartesian form: 1 ± √3 i and −1 ± √3 i.
        "A1：4 つの解を直交座標形式 1 ± √3 i と −1 ± √3 i に変換する。",
        // EN: M1: Pairs complex conjugates (z − (1 + √3 i))(z − (1 − √3 i)) and (z − (−1 + √3 i))(z − (−1 − √3 i)).
        "M1：共役な複素数のペア (z − (1 + √3 i))(z − (1 − √3 i)) と (z − (−1 + √3 i))(z − (−1 − √3 i)) を作る。",
        // EN: A1: Obtains (z² − 2z + 4)(z² + 2z + 4).
        "A1：(z² − 2z + 4)(z² + 2z + 4) を得る。",
      ],
    },

    // ── t1-4-q019 · order · exam · AHL · AHL 1.14 · 5 marks
    "t1-4-q019": {
      // EN: Arrange the steps in logical order to prove by mathematical induction that <span class="chem">(cos theta + i sin theta)^n = cos(n theta) + i sin(n theta)</span> for all <span class="chem">n \in \mathbb{Z}^+</span>.
      stem: "すべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">(cos theta + i sin theta)^n = cos(n theta) + i sin(n theta)</span> が成り立つことを数学的帰納法で証明する手順を、論理的な順に並べなさい。",
      options: [
        // EN: Base case: for <span class="chem">n = 1</span>, both sides equal <span class="chem">cos theta + i sin theta</span>, so <span class="chem">P(1)</span> is true.
        "初期条件：<span class=\"chem\">n = 1</span> のとき、両辺はともに <span class=\"chem\">cos theta + i sin theta</span> に等しいので <span class=\"chem\">P(1)</span> は成り立つ。",
        // EN: Assume <span class="chem">(cos theta + i sin theta)^k = cos(k theta) + i sin(k theta)</span> for some <span class="chem">k \in \mathbb{Z}^+</span>.
        "ある <span class=\"chem\">k \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">(cos theta + i sin theta)^k = cos(k theta) + i sin(k theta)</span> が成り立つと仮定する。",
        // EN: Write <span class="chem">(cos theta + i sin theta)^{k+1} = (cos(k theta) + i sin(k theta))(cos theta + i sin theta)</span> and expand the brackets.
        "<span class=\"chem\">(cos theta + i sin theta)^{k+1} = (cos(k theta) + i sin(k theta))(cos theta + i sin theta)</span> と書き、かっこを展開する。",
        // EN: Use the compound angle identities for <span class="chem">cos(A + B)</span> and <span class="chem">sin(A + B)</span> to obtain <span class="chem">cos((k + 1)theta) + i sin((k + 1)theta)</span>, so <span class="chem">P(k + 1)</span> is true.
        "<span class=\"chem\">cos(A + B)</span> と <span class=\"chem\">sin(A + B)</span> の加法定理を使って <span class=\"chem\">cos((k + 1)theta) + i sin((k + 1)theta)</span> を得るので、<span class=\"chem\">P(k + 1)</span> は成り立つ。",
        // EN: Since <span class="chem">P(1)</span> is true and <span class="chem">P(k)</span> being true implies <span class="chem">P(k + 1)</span> is true, by the principle of mathematical induction the result holds for all <span class="chem">n \in \mathbb{Z}^+</span>.
        "<span class=\"chem\">P(1)</span> が成り立ち、かつ <span class=\"chem\">P(k)</span> が成り立つとき <span class=\"chem\">P(k + 1)</span> も成り立つので、数学的帰納法により、すべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して結果が成り立つ。",
      ],
      hints: [
        // EN: An induction proof always runs: base case, inductive hypothesis, inductive step, conclusion.
        "帰納法による証明は常に、初期条件、帰納法の仮定、帰納段階、結論の順に進みます。",
        // EN: In the inductive step, the real part of the product is <span class="chem">cos(k theta) cos theta - sin(k theta) sin theta = cos((k + 1)theta)</span>.
        "帰納段階では、積の実部は <span class=\"chem\">cos(k theta) cos theta - sin(k theta) sin theta = cos((k + 1)theta)</span> です。",
      ],
      // EN: <p>Prove <span class="chem">P(1)</span>, assume <span class="chem">P(k)</span> for some <span class="chem">k \in \mathbb{Z}^+</span>, then write the <span class="chem">(k + 1)</span>-th power as the <span class="chem">k</span>-th power times <span class="chem">cos theta + i sin theta</span>. Expanding gives <span class="chem">(cos(k theta) cos theta - sin(k theta) sin theta) + i(sin(k theta) cos theta + cos(k theta) sin theta) = cos((k + 1)theta) + i sin((k + 1)theta)</span>. Finish with the conclusion sentence.</p>
      solution: "<p><span class=\"chem\">P(1)</span> を示し、ある <span class=\"chem\">k \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">P(k)</span> を仮定してから、<span class=\"chem\">(k + 1)</span> 乗を <span class=\"chem\">k</span> 乗と <span class=\"chem\">cos theta + i sin theta</span> の積として書きます。展開すると <span class=\"chem\">(cos(k theta) cos theta - sin(k theta) sin theta) + i(sin(k theta) cos theta + cos(k theta) sin theta) = cos((k + 1)theta) + i sin((k + 1)theta)</span> となります。最後に結論の文を書きます。</p>",
    },

  }
});
