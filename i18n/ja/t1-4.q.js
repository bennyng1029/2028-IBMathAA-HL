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
      // EN: The real numbers <span class="chem">x</span> and <span class="chem">y</span> satisfy <span class="chem">(x + yi)(3 + 2i) = -1 + 8i</span>. Find the value of <span class="chem">y</span>.
      stem: "実数 <span class=\"chem\">x</span> と <span class=\"chem\">y</span> は <span class=\"chem\">(x + yi)(3 + 2i) = -1 + 8i</span> を満たす。<span class=\"chem\">y</span> の値を求めなさい (Find)。",
      hints: [
        // EN: Either expand <span class="chem">(3x - 2y) + (2x + 3y)i = -1 + 8i</span> and solve the simultaneous equations, or divide <span class="chem">x + yi = (-1 + 8i) / (3 + 2i)</span>.
        "<span class=\"chem\">(3x - 2y) + (2x + 3y)i = -1 + 8i</span> を展開して連立方程式を解くか、<span class=\"chem\">x + yi = (-1 + 8i) / (3 + 2i)</span> として割り算します。",
        // EN: Multiplying numerator and denominator by <span class="chem">3 - 2i</span> gives <span class="chem">((-1 + 8i)(3 - 2i)) / (9 + 4) = (13 + 26i) / 13 = 1 + 2i</span>.
        "分母・分子に <span class=\"chem\">3 - 2i</span> を掛けると <span class=\"chem\">((-1 + 8i)(3 - 2i)) / (9 + 4) = (13 + 26i) / 13 = 1 + 2i</span> になります。",
      ],
      // EN: <p>Dividing both sides by <span class="chem">3 + 2i</span>: <span class="chem">x + yi = ((-1 + 8i)(3 - 2i)) / (3^2 + 2^2) = (13 + 26i) / 13 = 1 + 2i</span>. Thus <span class="chem">x = 1</span> and <span class="chem">y = 2</span>.</p>
      solution: "<p>両辺を <span class=\"chem\">3 + 2i</span> で割ると、<span class=\"chem\">x + yi = ((-1 + 8i)(3 - 2i)) / (3^2 + 2^2) = (13 + 26i) / 13 = 1 + 2i</span> となります。よって <span class=\"chem\">x = 1</span>、<span class=\"chem\">y = 2</span> です。</p>",
    },

    // ── t1-4-q005 · mcq · exam · AHL · AHL 1.13 · 2 marks
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

    // ── t1-4-q009 · mcq · exam · AHL · AHL 1.14 · 2 marks
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
      // EN: By expanding <span class="chem">(cos theta + i sin theta)^4</span> and equating real parts, <span class="chem">cos(4 theta)</span> can be written in the form <span class="chem">A cos^4(theta) + B cos^2(theta) + C</span>. Find the value of <span class="chem">B</span>.
      stem: "<span class=\"chem\">(cos theta + i sin theta)^4</span> を展開して実部を等置すると、<span class=\"chem\">cos(4 theta)</span> は <span class=\"chem\">A cos^4(theta) + B cos^2(theta) + C</span> の形で表せる。<span class=\"chem\">B</span> の値を求めなさい (Find)。",
      hints: [
        // EN: <span class="chem">Re((cos theta + i sin theta)^4) = cos^4 theta - 6 cos^2 theta sin^2 theta + sin^4 theta</span>.
        "<span class=\"chem\">Re((cos theta + i sin theta)^4) = cos^4 theta - 6 cos^2 theta sin^2 theta + sin^4 theta</span>。",
        // EN: Replace <span class="chem">sin^2 theta = 1 - cos^2 theta</span> and <span class="chem">sin^4 theta = (1 - cos^2 theta)^2</span>, then collect the <span class="chem">cos^2 theta</span> terms.
        "<span class=\"chem\">sin^2 theta = 1 - cos^2 theta</span> と <span class=\"chem\">sin^4 theta = (1 - cos^2 theta)^2</span> を代入し、<span class=\"chem\">cos^2 theta</span> の項をまとめます。",
      ],
      // EN: <p><span class="chem">cos(4 theta) = cos^4 theta - 6 cos^2 theta(1 - cos^2 theta) + (1 - cos^2 theta)^2 = 8 cos^4 theta - 8 cos^2 theta + 1</span>. Thus <span class="chem">A = 8</span>, <span class="chem">B = -8</span> and <span class="chem">C = 1</span>.</p>
      solution: "<p><span class=\"chem\">cos(4 theta) = cos^4 theta - 6 cos^2 theta(1 - cos^2 theta) + (1 - cos^2 theta)^2 = 8 cos^4 theta - 8 cos^2 theta + 1</span> となります。よって <span class=\"chem\">A = 8</span>、<span class=\"chem\">B = -8</span>、<span class=\"chem\">C = 1</span> です。</p>",
    },

    // ── t1-4-q014 · mcq · exam · AHL · AHL 1.14 · 2 marks
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

    // ── t1-4-q015 · numeric · exam · AHL · AHL 1.14 · 5 marks
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

    // ── t1-4-q016 · numeric · foundation · AHL · AHL 1.14 · 2 marks
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
        // EN: Decode: a quartic with only even powers is a quadratic in disguise. Solve for <span class="chem">w = z^2</span> first, take square roots in Euler form, then multiply conjugate pairs back together to get real quadratic factors.
        "解読：偶数乗だけを含む 4 次方程式は、形を変えた 2 次方程式です。まず <span class=\"chem\">w = z^2</span> について解き、オイラー形式で平方根をとり、最後に共役な組を掛け合わせて実数係数の 2 次因数を作ります。",
        // EN: Solve <span class="chem">w^2 + 4w + 16 = 0</span> using the quadratic formula to get <span class="chem">w = -2 +- 2 sqrt(3)i</span>.
        "解の公式を使って <span class=\"chem\">w^2 + 4w + 16 = 0</span> を解き、<span class=\"chem\">w = -2 +- 2 sqrt(3)i</span> を得ます。",
        // EN: Take the square roots of <span class="chem">4 e^{+- i(2pi/3)}</span> to get four roots of modulus <span class="chem">2</span> and arguments <span class="chem">+- pi/3</span> and <span class="chem">+- 2pi/3</span>.
        "<span class=\"chem\">4 e^{+- i(2pi/3)}</span> の平方根をとると、絶対値が <span class=\"chem\">2</span> で偏角が <span class=\"chem\">+- pi/3</span> と <span class=\"chem\">+- 2pi/3</span> の 4 つの解が得られます。",
      ],
      // EN: <p><strong>Decode.</strong> The quartic is a quadratic in <span class="chem">w = z^2</span>.<br>(a) <span class="chem">w = (-4 +- sqrt(-48))/2 = -2 +- 2 sqrt(3)i = 4 e^{+- i(2pi/3)}</span>.<br>(b) Taking square roots gives <span class="chem">z = 2 e^{+- i(pi/3)} = 1 +- sqrt(3)i</span> and <span class="chem">z = 2 e^{+- i(2pi/3)} = -1 +- sqrt(3)i</span>. Pairing conjugates gives <span class="chem">(z^2 - 2z + 4)(z^2 + 2z + 4)</span>.</p>
      solution: "<p><strong>解読。</strong> この 4 次式は <span class=\"chem\">w = z^2</span> についての 2 次式です。<br>(a) <span class=\"chem\">w = (-4 +- sqrt(-48))/2 = -2 +- 2 sqrt(3)i = 4 e^{+- i(2pi/3)}</span>。<br>(b) 平方根をとると <span class=\"chem\">z = 2 e^{+- i(pi/3)} = 1 +- sqrt(3)i</span> と <span class=\"chem\">z = 2 e^{+- i(2pi/3)} = -1 +- sqrt(3)i</span> が得られます。共役なペアを掛け合わせると <span class=\"chem\">(z^2 - 2z + 4)(z^2 + 2z + 4)</span> となります。</p>",
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

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ja', 't1-4.q', {
  questions: {

    // ── t1-4-q020 · numeric · foundation · AHL · AHL 1.12 · 3 marks
    "t1-4-q020": {
      // EN: Solve the equation <span class="chem">z^2 - 6z + 34 = 0</span>, where <span class="chem">z ∈ ℂ</span>, giving both roots in the form <span class="chem">a + bi</span>. Enter the value of <span class="chem">b</span> for the root with <span class="chem">b &gt; 0</span>.
      stem: "<span class=\"chem\">z ∈ ℂ</span> として、方程式 <span class=\"chem\">z^2 - 6z + 34 = 0</span> を解き (Solve)、2 つの解をともに <span class=\"chem\">a + bi</span> の形で表しなさい。<span class=\"chem\">b &gt; 0</span> である解について、<span class=\"chem\">b</span> の値を入力しなさい。",
      hints: [
        // EN: The discriminant is <span class="chem">Delta = (-6)^2 - 4(1)(34) = 36 - 136 = -100</span>, which is negative, so the roots are a complex conjugate pair.
        "判別式は <span class=\"chem\">Delta = (-6)^2 - 4(1)(34) = 36 - 136 = -100</span> で負なので、2 つの解は互いに共役な複素数の組になります。",
        // EN: Use <span class="chem">sqrt(-100) = 10i</span> in the quadratic formula: <span class="chem">z = (6 +- 10i) / 2</span>.
        "解の公式で <span class=\"chem\">sqrt(-100) = 10i</span> を使います：<span class=\"chem\">z = (6 +- 10i) / 2</span>。",
      ],
      // EN: <p><span class="chem">Delta = 36 - 136 = -100 &lt; 0</span>, so <span class="chem">z = (6 +- sqrt(-100)) / 2 = (6 +- 10i) / 2 = 3 +- 5i</span>. The root with positive imaginary part is <span class="chem">3 + 5i</span>, so <span class="chem">b = 5</span>.</p>
      solution: "<p><span class=\"chem\">Delta = 36 - 136 = -100 &lt; 0</span> なので、<span class=\"chem\">z = (6 +- sqrt(-100)) / 2 = (6 +- 10i) / 2 = 3 +- 5i</span> です。虚部が正の解は <span class=\"chem\">3 + 5i</span> なので、<span class=\"chem\">b = 5</span> です。</p>",
    },

    // ── t1-4-q021 · numeric · foundation · AHL · AHL 1.12 · 2 marks
    "t1-4-q021": {
      // EN: Let <span class="chem">z = (3 + 2i)^5 / (1 - 4i)^3</span>. Use your GDC in complex mode to find <span class="chem">Re(z)</span>, giving your answer correct to 3 significant figures.
      stem: "<span class=\"chem\">z = (3 + 2i)^5 / (1 - 4i)^3</span> とする。GDC の複素数モードを使って <span class=\"chem\">Re(z)</span> を求め (Find)、有効数字 3 桁で答えなさい。",
      hints: [
        // EN: Switch the GDC to complex (a + bi) mode and type the whole expression with brackets around each base: <span class="chem">(3 + 2i)^5 ÷ (1 - 4i)^3</span>.
        "GDC を複素数 (a + bi) モードに切り替え、それぞれの底をかっこで囲んで式全体を入力します：<span class=\"chem\">(3 + 2i)^5 ÷ (1 - 4i)^3</span>。",
        // EN: The GDC returns <span class="chem">z ≈ 7.0024 + 5.1516i</span>. The real part is the number without <span class="chem">i</span>.
        "GDC は <span class=\"chem\">z ≈ 7.0024 + 5.1516i</span> を返します。実部は <span class=\"chem\">i</span> のつかない数です。",
      ],
      // EN: <p>On the GDC in complex mode, <span class="chem">(3 + 2i)^5 / (1 - 4i)^3 ≈ 7.0024 + 5.1516i</span>. So <span class="chem">Re(z) ≈ 7.00</span> (3 s.f.).</p>
      solution: "<p>GDC の複素数モードで、<span class=\"chem\">(3 + 2i)^5 / (1 - 4i)^3 ≈ 7.0024 + 5.1516i</span> です。よって <span class=\"chem\">Re(z) ≈ 7.00</span>（有効数字 3 桁）です。</p>",
    },

    // ── t1-4-q022 · short · exam · AHL · AHL 1.12 · 6 marks
    "t1-4-q022": {
      // EN: The complex number <span class="chem">z</span> satisfies <span class="chem">2z + 3z^* = 10 - 4i</span>.<br>(a) Find <span class="chem">z</span> in the form <span class="chem">a + bi</span>, where <span class="chem">a, b ∈ ℝ</span>. [3 marks]<br>(b) Hence find <span class="chem">z / z^*</span> in the form <span class="chem">p + qi</span>, where <span class="chem">p, q ∈ ℚ</span>. [3 marks]
      stem: "複素数 <span class=\"chem\">z</span> は <span class=\"chem\">2z + 3z^* = 10 - 4i</span> を満たす。<br>(a) <span class=\"chem\">a, b ∈ ℝ</span> として、<span class=\"chem\">z</span> を <span class=\"chem\">a + bi</span> の形で求めなさい (Find)。 [3 marks]<br>(b) これを用いて (Hence)、<span class=\"chem\">p, q ∈ ℚ</span> として、<span class=\"chem\">z / z^*</span> を <span class=\"chem\">p + qi</span> の形で求めなさい。 [3 marks]",
      hints: [
        // EN: Write <span class="chem">z = a + bi</span>, so <span class="chem">z^* = a - bi</span>. Substitute both and collect the real terms and the imaginary terms.
        "<span class=\"chem\">z = a + bi</span> とおくと <span class=\"chem\">z^* = a - bi</span> です。両方を代入し、実数の項と虚数の項をそれぞれまとめます。",
        // EN: You should get <span class="chem">5a - bi = 10 - 4i</span>. For (b), multiply top and bottom of <span class="chem">z / z^*</span> by <span class="chem">z</span> and use <span class="chem">z z^* = |z|^2</span>.
        "<span class=\"chem\">5a - bi = 10 - 4i</span> が得られるはずです。(b) では、<span class=\"chem\">z / z^*</span> の分母・分子に <span class=\"chem\">z</span> を掛け、<span class=\"chem\">z z^* = |z|^2</span> を使います。",
      ],
      // EN: <p>(a) With <span class="chem">z = a + bi</span>: <span class="chem">2a + 2bi + 3a - 3bi = 5a - bi = 10 - 4i</span>. Equating parts gives <span class="chem">a = 2</span> and <span class="chem">b = 4</span>, so <span class="chem">z = 2 + 4i</span>.<br>(b) <span class="chem">z / z^* = z^2 / (z z^*) = (2 + 4i)^2 / 20 = (4 + 16i - 16) / 20 = (-12 + 16i) / 20 = -3/5 + (4/5)i</span>.</p>
      solution: "<p>(a) <span class=\"chem\">z = a + bi</span> とおくと：<span class=\"chem\">2a + 2bi + 3a - 3bi = 5a - bi = 10 - 4i</span>。実部と虚部を比較して <span class=\"chem\">a = 2</span>、<span class=\"chem\">b = 4</span> となるので、<span class=\"chem\">z = 2 + 4i</span> です。<br>(b) <span class=\"chem\">z / z^* = z^2 / (z z^*) = (2 + 4i)^2 / 20 = (4 + 16i - 16) / 20 = (-12 + 16i) / 20 = -3/5 + (4/5)i</span>。</p>",
      // EN: <p>(a) <span class="chem">z = 2 + 4i</span>.<br>(b) <span class="chem">z / z^* = -3/5 + (4/5)i</span>.</p>
      answer: "<p>(a) <span class=\"chem\">z = 2 + 4i</span>。<br>(b) <span class=\"chem\">z / z^* = -3/5 + (4/5)i</span>。</p>",
      markscheme: [
        // EN: M1: Substitutes z = a + bi and z* = a − bi: 2(a + bi) + 3(a − bi) = 10 − 4i.
        "M1：z = a + bi と z* = a − bi を代入する：2(a + bi) + 3(a − bi) = 10 − 4i。",
        // EN: M1: Collects terms to 5a − bi = 10 − 4i and equates real and imaginary parts: 5a = 10 and −b = −4.
        "M1：項をまとめて 5a − bi = 10 − 4i とし、実部と虚部を比較する：5a = 10、−b = −4。",
        // EN: A1: z = 2 + 4i.
        "A1：z = 2 + 4i。",
        // EN: M1: Multiplies numerator and denominator of (2 + 4i)/(2 − 4i) by 2 + 4i.
        "M1：(2 + 4i)/(2 − 4i) の分母・分子に 2 + 4i を掛ける。",
        // EN: A1: Obtains (2 + 4i)²/20 = (−12 + 16i)/20.
        "A1：(2 + 4i)²/20 = (−12 + 16i)/20 を得る。",
        // EN: A1: z/z* = −3/5 + (4/5)i.
        "A1：z/z* = −3/5 + (4/5)i。",
      ],
    },

    // ── t1-4-q023 · numeric · exam · AHL · AHL 1.13 · 4 marks
    "t1-4-q023": {
      // EN: Let <span class="chem">z = sqrt(3) - i</span> and <span class="chem">w = -1 - i</span>. Find the exact value of the principal argument <span class="chem">arg(z^2 w)</span>, where <span class="chem">-pi &lt; arg(z^2 w) &lt;= pi</span>.
      stem: "<span class=\"chem\">z = sqrt(3) - i</span>、<span class=\"chem\">w = -1 - i</span> とする。<span class=\"chem\">-pi &lt; arg(z^2 w) &lt;= pi</span> として、主偏角 <span class=\"chem\">arg(z^2 w)</span> の厳密値を求めなさい (Find)。",
      hints: [
        // EN: Find each argument separately: <span class="chem">z</span> is in Quadrant IV and <span class="chem">w</span> is in Quadrant III.
        "偏角をそれぞれ別々に求めます：<span class=\"chem\">z</span> は第 4 象限、<span class=\"chem\">w</span> は第 3 象限にあります。",
        // EN: <span class="chem">arg(z) = -pi/6</span> and <span class="chem">arg(w) = -3pi/4</span>. Then <span class="chem">arg(z^2 w) = 2 arg(z) + arg(w)</span>, but check whether the total lies in <span class="chem">(-pi, pi]</span>.
        "<span class=\"chem\">arg(z) = -pi/6</span>、<span class=\"chem\">arg(w) = -3pi/4</span> です。すると <span class=\"chem\">arg(z^2 w) = 2 arg(z) + arg(w)</span> ですが、合計が <span class=\"chem\">(-pi, pi]</span> に入っているかを確認しましょう。",
      ],
      // EN: <p><span class="chem">arg(z) = -pi/6</span> and <span class="chem">arg(w) = -3pi/4</span>. Arguments add under multiplication, so <span class="chem">arg(z^2 w) = 2(-pi/6) + (-3pi/4) = -13pi/12</span> up to a multiple of <span class="chem">2pi</span>. This is less than <span class="chem">-pi</span>, so add <span class="chem">2pi</span>: the principal argument is <span class="chem">11pi/12</span>. (Check: <span class="chem">z^2 w = (-2 - 2 sqrt(3)) + (2 sqrt(3) - 2)i</span> is in Quadrant II.)</p>
      solution: "<p><span class=\"chem\">arg(z) = -pi/6</span>、<span class=\"chem\">arg(w) = -3pi/4</span> です。積では偏角が足されるので、<span class=\"chem\">2pi</span> の整数倍の差を除いて <span class=\"chem\">arg(z^2 w) = 2(-pi/6) + (-3pi/4) = -13pi/12</span> です。これは <span class=\"chem\">-pi</span> より小さいので <span class=\"chem\">2pi</span> を加えます：主偏角は <span class=\"chem\">11pi/12</span> です。（確認：<span class=\"chem\">z^2 w = (-2 - 2 sqrt(3)) + (2 sqrt(3) - 2)i</span> は第 2 象限にあります。）</p>",
    },

    // ── t1-4-q024 · short · exam · AHL · AHL 1.13 · 6 marks
    "t1-4-q024": {
      // EN: On an Argand diagram, the points <span class="chem">O</span>, <span class="chem">A</span> and <span class="chem">B</span> represent <span class="chem">0</span>, <span class="chem">z = 3 + i</span> and <span class="chem">w = (1 + i)z</span>.<br>(a) Find <span class="chem">w</span> in the form <span class="chem">a + bi</span>. [2 marks]<br>(b) By writing <span class="chem">1 + i</span> in modulus-argument form, describe fully the geometric transformation that maps <span class="chem">A</span> to <span class="chem">B</span>. [2 marks]<br>(c) Hence find the exact area of triangle <span class="chem">OAB</span>. [2 marks]
      stem: "複素数平面上で、点 <span class=\"chem\">O</span>、<span class=\"chem\">A</span>、<span class=\"chem\">B</span> はそれぞれ <span class=\"chem\">0</span>、<span class=\"chem\">z = 3 + i</span>、<span class=\"chem\">w = (1 + i)z</span> を表す。<br>(a) <span class=\"chem\">w</span> を <span class=\"chem\">a + bi</span> の形で求めなさい (Find)。 [2 marks]<br>(b) <span class=\"chem\">1 + i</span> を極形式で表すことにより、<span class=\"chem\">A</span> を <span class=\"chem\">B</span> に移す幾何学的な変換を完全に説明しなさい (Describe fully)。 [2 marks]<br>(c) これを用いて (Hence)、三角形 <span class=\"chem\">OAB</span> の面積の厳密値を求めなさい。 [2 marks]",
      hints: [
        // EN: Expand the brackets and use <span class="chem">i^2 = -1</span>.
        "かっこを展開し、<span class=\"chem\">i^2 = -1</span> を使います。",
        // EN: Multiplying by <span class="chem">r cis(alpha)</span> scales every modulus by <span class="chem">r</span> and adds <span class="chem">alpha</span> to every argument. So the angle <span class="chem">AOB</span> is <span class="chem">alpha</span> and <span class="chem">OB = r × OA</span>.
        "<span class=\"chem\">r cis(alpha)</span> を掛けると、すべての絶対値が <span class=\"chem\">r</span> 倍され、すべての偏角に <span class=\"chem\">alpha</span> が加わります。よって角 <span class=\"chem\">AOB</span> は <span class=\"chem\">alpha</span> で、<span class=\"chem\">OB = r × OA</span> です。",
      ],
      // EN: <p>(a) <span class="chem">w = (1 + i)(3 + i) = 3 + i + 3i - 1 = 2 + 4i</span>.<br>(b) <span class="chem">1 + i = sqrt(2) cis(pi/4)</span>, so multiplying by it rotates <span class="chem">A</span> anticlockwise about <span class="chem">O</span> through <span class="chem">pi/4</span> and multiplies its distance from <span class="chem">O</span> by <span class="chem">sqrt(2)</span>.<br>(c) <span class="chem">OA = sqrt(10)</span>, <span class="chem">OB = sqrt(2) × sqrt(10) = sqrt(20)</span> and angle <span class="chem">AOB = pi/4</span>, so area <span class="chem">= (1/2)(sqrt(10))(sqrt(20)) sin(pi/4) = (1/2)(10 sqrt(2))(sqrt(2)/2) = 5</span>.</p>
      solution: "<p>(a) <span class=\"chem\">w = (1 + i)(3 + i) = 3 + i + 3i - 1 = 2 + 4i</span>。<br>(b) <span class=\"chem\">1 + i = sqrt(2) cis(pi/4)</span> なので、これを掛けると <span class=\"chem\">A</span> は <span class=\"chem\">O</span> を中心に反時計回りに <span class=\"chem\">pi/4</span> だけ回転し、<span class=\"chem\">O</span> からの距離が <span class=\"chem\">sqrt(2)</span> 倍されます。<br>(c) <span class=\"chem\">OA = sqrt(10)</span>、<span class=\"chem\">OB = sqrt(2) × sqrt(10) = sqrt(20)</span>、角 <span class=\"chem\">AOB = pi/4</span> なので、面積 <span class=\"chem\">= (1/2)(sqrt(10))(sqrt(20)) sin(pi/4) = (1/2)(10 sqrt(2))(sqrt(2)/2) = 5</span> です。</p>",
      // EN: <p>(a) <span class="chem">w = 2 + 4i</span>.<br>(b) <span class="chem">1 + i = sqrt(2) cis(pi/4)</span>: an anticlockwise rotation about <span class="chem">O</span> through <span class="chem">pi/4</span> combined with an enlargement, centre <span class="chem">O</span>, scale factor <span class="chem">sqrt(2)</span>.<br>(c) Area <span class="chem">= 5</span>.</p>
      answer: "<p>(a) <span class=\"chem\">w = 2 + 4i</span>。<br>(b) <span class=\"chem\">1 + i = sqrt(2) cis(pi/4)</span>：<span class=\"chem\">O</span> を中心とする反時計回りの <span class=\"chem\">pi/4</span> の回転と、中心 <span class=\"chem\">O</span>、拡大率 <span class=\"chem\">sqrt(2)</span> の拡大の合成。<br>(c) 面積 <span class=\"chem\">= 5</span>。</p>",
      markscheme: [
        // EN: M1: Expands (1 + i)(3 + i) = 3 + i + 3i + i².
        "M1：(1 + i)(3 + i) = 3 + i + 3i + i² と展開する。",
        // EN: A1: w = 2 + 4i.
        "A1：w = 2 + 4i。",
        // EN: A1: 1 + i = √2 cis(π/4) (or √2 e<sup>iπ/4</sup>).
        "A1：1 + i = √2 cis(π/4)（または √2 e<sup>iπ/4</sup>）。",
        // EN: A1: Rotation anticlockwise through π/4 about O and enlargement with scale factor √2, centre O.
        "A1：O を中心とする反時計回りの π/4 の回転と、中心 O、拡大率 √2 の拡大。",
        // EN: M1: Uses area = ½ |z| |w| sin(∠AOB) with |z| = √10, |w| = √20 and ∠AOB = π/4.
        "M1：|z| = √10、|w| = √20、∠AOB = π/4 として、面積 = ½ |z| |w| sin(∠AOB) を使う。",
        // EN: A1: Area = 5.
        "A1：面積 = 5。",
      ],
    },

    // ── t1-4-q025 · numeric · exam · AHL · AHL 1.14 · 4 marks
    "t1-4-q025": {
      // EN: Find the value of <span class="chem">(1 + sqrt(3)i)^9 + (1 - sqrt(3)i)^9</span>.
      stem: "<span class=\"chem\">(1 + sqrt(3)i)^9 + (1 - sqrt(3)i)^9</span> の値を求めなさい (Find)。",
      hints: [
        // EN: Write <span class="chem">1 + sqrt(3)i = 2 e^{i pi/3}</span>. The second number is its conjugate, <span class="chem">2 e^{-i pi/3}</span>.
        "<span class=\"chem\">1 + sqrt(3)i = 2 e^{i pi/3}</span> と書きます。2 つ目の数はその共役な複素数 <span class=\"chem\">2 e^{-i pi/3}</span> です。",
        // EN: By De Moivre, the two ninth powers are <span class="chem">2^9 e^{+- 3 pi i}</span>. The sum of a number and its conjugate is twice its real part.
        "ド・モアブルの定理より、2 つの 9 乗は <span class=\"chem\">2^9 e^{+- 3 pi i}</span> です。ある数とその共役な複素数の和は、実部の 2 倍です。",
      ],
      // EN: <p><span class="chem">1 +- sqrt(3)i = 2 e^{+- i pi/3}</span>. By De Moivre's theorem, <span class="chem">(1 +- sqrt(3)i)^9 = 512 e^{+- 3 pi i} = 512(cos(3pi) +- i sin(3pi)) = -512</span>. The sum is <span class="chem">-512 + (-512) = -1024</span>.</p>
      solution: "<p><span class=\"chem\">1 +- sqrt(3)i = 2 e^{+- i pi/3}</span> です。ド・モアブルの定理より、<span class=\"chem\">(1 +- sqrt(3)i)^9 = 512 e^{+- 3 pi i} = 512(cos(3pi) +- i sin(3pi)) = -512</span> です。和は <span class=\"chem\">-512 + (-512) = -1024</span> です。</p>",
    },

    // ── t1-4-q026 · short · exam · AHL · AHL 1.14 · 7 marks
    "t1-4-q026": {
      // EN: (a) Find the three solutions of <span class="chem">z^3 = 8i</span>, giving your answers in the form <span class="chem">r e^{i theta}</span>, where <span class="chem">r &gt; 0</span> and <span class="chem">-pi &lt; theta &lt;= pi</span>. [3 marks]<br>(b) Express each solution in the form <span class="chem">a + bi</span>. [2 marks]<br>(c) The three solutions are the vertices of a triangle on the Argand diagram. Find the exact area of this triangle. [2 marks]
      stem: "(a) <span class=\"chem\">z^3 = 8i</span> の 3 つの解を求め (Find)、<span class=\"chem\">r &gt; 0</span>、<span class=\"chem\">-pi &lt; theta &lt;= pi</span> として <span class=\"chem\">r e^{i theta}</span> の形で答えなさい。 [3 marks]<br>(b) それぞれの解を <span class=\"chem\">a + bi</span> の形で表しなさい (Express)。 [2 marks]<br>(c) 3 つの解は複素数平面上の三角形の頂点である。この三角形の面積の厳密値を求めなさい (Find)。 [2 marks]",
      hints: [
        // EN: Write <span class="chem">8i = 8 e^{i(pi/2 + 2 pi k)}</span> and take the cube root of the modulus and divide the argument by 3.
        "<span class=\"chem\">8i = 8 e^{i(pi/2 + 2 pi k)}</span> と書き、絶対値の 3 乗根をとって、偏角を 3 で割ります。",
        // EN: The three roots are spaced <span class="chem">2pi/3</span> apart on a circle of radius 2. For the area, two of the roots have the same imaginary part, which gives an easy base and height.
        "3 つの解は半径 2 の円周上に <span class=\"chem\">2pi/3</span> ずつ離れて並びます。面積については、2 つの解の虚部が等しいので、底辺と高さが簡単にわかります。",
      ],
      // EN: <p>(a) <span class="chem">8i = 8 e^{i(pi/2 + 2 pi k)}</span>, so <span class="chem">z = 2 e^{i(pi/6 + 2 pi k / 3)}</span>. For <span class="chem">k = 0, 1, -1</span>: arguments <span class="chem">pi/6</span>, <span class="chem">5pi/6</span>, <span class="chem">-pi/2</span>.<br>(b) <span class="chem">2 cis(pi/6) = sqrt(3) + i</span>, <span class="chem">2 cis(5pi/6) = -sqrt(3) + i</span>, <span class="chem">2 cis(-pi/2) = -2i</span>.<br>(c) The base from <span class="chem">-sqrt(3) + i</span> to <span class="chem">sqrt(3) + i</span> has length <span class="chem">2 sqrt(3)</span>; the third vertex <span class="chem">-2i</span> is <span class="chem">3</span> units below it. Area <span class="chem">= (1/2)(2 sqrt(3))(3) = 3 sqrt(3)</span>.</p>
      solution: "<p>(a) <span class=\"chem\">8i = 8 e^{i(pi/2 + 2 pi k)}</span> なので <span class=\"chem\">z = 2 e^{i(pi/6 + 2 pi k / 3)}</span> です。<span class=\"chem\">k = 0, 1, -1</span> のとき、偏角は <span class=\"chem\">pi/6</span>、<span class=\"chem\">5pi/6</span>、<span class=\"chem\">-pi/2</span> です。<br>(b) <span class=\"chem\">2 cis(pi/6) = sqrt(3) + i</span>、<span class=\"chem\">2 cis(5pi/6) = -sqrt(3) + i</span>、<span class=\"chem\">2 cis(-pi/2) = -2i</span>。<br>(c) <span class=\"chem\">-sqrt(3) + i</span> から <span class=\"chem\">sqrt(3) + i</span> までの底辺の長さは <span class=\"chem\">2 sqrt(3)</span> で、3 つ目の頂点 <span class=\"chem\">-2i</span> はその <span class=\"chem\">3</span> だけ下にあります。面積 <span class=\"chem\">= (1/2)(2 sqrt(3))(3) = 3 sqrt(3)</span>。</p>",
      // EN: <p>(a) <span class="chem">z = 2 e^{i pi/6}</span>, <span class="chem">2 e^{i 5pi/6}</span>, <span class="chem">2 e^{-i pi/2}</span>.<br>(b) <span class="chem">sqrt(3) + i</span>, <span class="chem">-sqrt(3) + i</span>, <span class="chem">-2i</span>.<br>(c) Area <span class="chem">= 3 sqrt(3)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">z = 2 e^{i pi/6}</span>、<span class=\"chem\">2 e^{i 5pi/6}</span>、<span class=\"chem\">2 e^{-i pi/2}</span>。<br>(b) <span class=\"chem\">sqrt(3) + i</span>、<span class=\"chem\">-sqrt(3) + i</span>、<span class=\"chem\">-2i</span>。<br>(c) 面積 <span class=\"chem\">= 3 sqrt(3)</span>。</p>",
      markscheme: [
        // EN: M1: Writes 8i = 8 e<sup>i(π/2 + 2πk)</sup>.
        "M1：8i = 8 e<sup>i(π/2 + 2πk)</sup> と書く。",
        // EN: A1: Modulus 8<sup>1/3</sup> = 2 and arguments (π/2 + 2πk)/3.
        "A1：絶対値 8<sup>1/3</sup> = 2、偏角 (π/2 + 2πk)/3。",
        // EN: A1: All three principal arguments: π/6, 5π/6, −π/2.
        "A1：3 つの主偏角すべて：π/6、5π/6、−π/2。",
        // EN: A1: √3 + i and −√3 + i.
        "A1：√3 + i と −√3 + i。",
        // EN: A1: −2i.
        "A1：−2i。",
        // EN: M1: Valid area method, e.g. base 2√3 (between √3 + i and −√3 + i) and height 3, or 3 × ½ × 2² × sin(2π/3).
        "M1：正しい面積の求め方。例えば底辺 2√3（√3 + i と −√3 + i の間）と高さ 3、または 3 × ½ × 2² × sin(2π/3)。",
        // EN: A1: Area = 3√3.
        "A1：面積 = 3√3。",
      ],
    },

    // ── t1-4-q027 · short · exam · AHL · AHL 1.14 · 6 marks
    "t1-4-q027": {
      // EN: Let <span class="chem">P(z) = z^4 - 4z^3 + 14z^2 - 36z + 45</span>. You are given that <span class="chem">3i</span> is a root of <span class="chem">P(z) = 0</span>.<br>(a) Write down another root of <span class="chem">P(z) = 0</span>, and state why it must be a root. [2 marks]<br>(b) Find the other two roots of <span class="chem">P(z) = 0</span>. [4 marks]
      stem: "<span class=\"chem\">P(z) = z^4 - 4z^3 + 14z^2 - 36z + 45</span> とする。<span class=\"chem\">3i</span> は <span class=\"chem\">P(z) = 0</span> の解であることが与えられている。<br>(a) <span class=\"chem\">P(z) = 0</span> の別の解を 1 つ書き (Write down)、それが解でなければならない理由を述べなさい (State)。 [2 marks]<br>(b) <span class=\"chem\">P(z) = 0</span> の残りの 2 つの解を求めなさい (Find)。 [4 marks]",
      hints: [
        // EN: Real coefficients force non-real roots to come in conjugate pairs.
        "係数が実数なので、実数でない解は必ず共役な組で現れます。",
        // EN: Multiply <span class="chem">(z - 3i)(z + 3i) = z^2 + 9</span>, then find the quadratic <span class="chem">z^2 + bz + c</span> with <span class="chem">(z^2 + 9)(z^2 + bz + c) = P(z)</span>: compare the <span class="chem">z^3</span> and constant terms.
        "<span class=\"chem\">(z - 3i)(z + 3i) = z^2 + 9</span> を計算し、<span class=\"chem\">(z^2 + 9)(z^2 + bz + c) = P(z)</span> となる 2 次式 <span class=\"chem\">z^2 + bz + c</span> を求めます：<span class=\"chem\">z^3</span> の項と定数項を比較しましょう。",
      ],
      // EN: <p>(a) <span class="chem">P</span> has real coefficients, so <span class="chem">(3i)^* = -3i</span> is also a root.<br>(b) <span class="chem">(z - 3i)(z + 3i) = z^2 + 9</span>. Write <span class="chem">P(z) = (z^2 + 9)(z^2 + bz + c)</span>. The <span class="chem">z^3</span> terms give <span class="chem">b = -4</span>; the constants give <span class="chem">9c = 45</span>, so <span class="chem">c = 5</span>. (Check the <span class="chem">z</span> term: <span class="chem">9b = -36</span>.) Then <span class="chem">z^2 - 4z + 5 = 0</span> gives <span class="chem">z = (4 +- sqrt(-4)) / 2 = 2 +- i</span>.</p>
      solution: "<p>(a) <span class=\"chem\">P</span> の係数は実数なので、<span class=\"chem\">(3i)^* = -3i</span> も解です。<br>(b) <span class=\"chem\">(z - 3i)(z + 3i) = z^2 + 9</span>。<span class=\"chem\">P(z) = (z^2 + 9)(z^2 + bz + c)</span> とおきます。<span class=\"chem\">z^3</span> の項から <span class=\"chem\">b = -4</span>、定数項から <span class=\"chem\">9c = 45</span> なので <span class=\"chem\">c = 5</span> です。（<span class=\"chem\">z</span> の項で確認：<span class=\"chem\">9b = -36</span>。）すると <span class=\"chem\">z^2 - 4z + 5 = 0</span> から <span class=\"chem\">z = (4 +- sqrt(-4)) / 2 = 2 +- i</span> が得られます。</p>",
      // EN: <p>(a) <span class="chem">-3i</span>, because <span class="chem">P</span> has real coefficients, so non-real roots occur in conjugate pairs.<br>(b) <span class="chem">P(z) = (z^2 + 9)(z^2 - 4z + 5)</span>, so the other roots are <span class="chem">z = 2 +- i</span>.</p>
      answer: "<p>(a) <span class=\"chem\">-3i</span>。<span class=\"chem\">P</span> の係数は実数なので、実数でない解は共役な組で現れるから。<br>(b) <span class=\"chem\">P(z) = (z^2 + 9)(z^2 - 4z + 5)</span> なので、残りの解は <span class=\"chem\">z = 2 +- i</span>。</p>",
      markscheme: [
        // EN: A1: −3i is a root.
        "A1：−3i が解である。",
        // EN: R1: P(z) has real coefficients, so the complex conjugate of a root is also a root.
        "R1：P(z) の係数は実数なので、解の共役な複素数も解である。",
        // EN: M1: Uses the quadratic factor (z − 3i)(z + 3i) = z² + 9.
        "M1：2 次因数 (z − 3i)(z + 3i) = z² + 9 を使う。",
        // EN: M1: Divides, or compares coefficients in (z² + 9)(z² + bz + c), to find the other factor.
        "M1：割り算をするか、(z² + 9)(z² + bz + c) の係数を比較して、もう 1 つの因数を求める。",
        // EN: A1: z² − 4z + 5.
        "A1：z² − 4z + 5。",
        // EN: A1: z = 2 + i and z = 2 − i.
        "A1：z = 2 + i および z = 2 − i。",
      ],
    },

    // ── t1-4-q028 · short · challenge · AHL · AHL 1.14 · 9 marks
    "t1-4-q028": {
      // EN: (a) Use De Moivre's theorem to show that <span class="chem">sin(5 theta) = 16 sin^5 theta - 20 sin^3 theta + 5 sin theta</span>. [4 marks]<br>(b) By considering <span class="chem">theta = pi/5</span>, show that <span class="chem">x = sin^2(pi/5)</span> satisfies <span class="chem">16x^2 - 20x + 5 = 0</span>. [2 marks]<br>(c) Hence find the exact value of <span class="chem">sin^2(pi/5)</span>, justifying your choice of root. [3 marks]
      stem: "(a) ド・モアブルの定理を用いて、<span class=\"chem\">sin(5 theta) = 16 sin^5 theta - 20 sin^3 theta + 5 sin theta</span> を示しなさい (Show that)。 [4 marks]<br>(b) <span class=\"chem\">theta = pi/5</span> を考えることにより、<span class=\"chem\">x = sin^2(pi/5)</span> が <span class=\"chem\">16x^2 - 20x + 5 = 0</span> を満たすことを示しなさい。 [2 marks]<br>(c) これを用いて (Hence)、<span class=\"chem\">sin^2(pi/5)</span> の厳密値を求め、解の選び方の根拠を示しなさい。 [3 marks]",
      hints: [
        // EN: Decode: "use De Moivre" for <span class="chem">sin(5 theta)</span> means: expand <span class="chem">(cos theta + i sin theta)^5</span> with the binomial theorem and keep the imaginary part. Parts (b) and (c) then turn the identity into a quadratic in <span class="chem">sin^2 theta</span>.
        "解読：<span class=\"chem\">sin(5 theta)</span> について「ド・モアブルの定理を用いる」とは、<span class=\"chem\">(cos theta + i sin theta)^5</span> を二項定理で展開して虚部をとるという意味です。(b) と (c) では、その恒等式を <span class=\"chem\">sin^2 theta</span> についての 2 次方程式に変えます。",
        // EN: The imaginary terms of the expansion are <span class="chem">5c^4 (is) + 10c^2 (is)^3 + (is)^5</span>. Simplify the powers of <span class="chem">i</span>, then replace <span class="chem">c^2</span> by <span class="chem">1 - s^2</span>.
        "展開式の虚数の項は <span class=\"chem\">5c^4 (is) + 10c^2 (is)^3 + (is)^5</span> です。<span class=\"chem\">i</span> の累乗を簡単にしてから、<span class=\"chem\">c^2</span> を <span class=\"chem\">1 - s^2</span> に置き換えます。",
        // EN: In (c) both roots of the quadratic are positive. Which one is less than <span class="chem">1/2</span>, and why must <span class="chem">sin^2(pi/5)</span> be less than <span class="chem">1/2</span>?
        "(c) では 2 次方程式の解はどちらも正です。どちらが <span class=\"chem\">1/2</span> より小さいか、また <span class=\"chem\">sin^2(pi/5)</span> が <span class=\"chem\">1/2</span> より小さくなければならないのはなぜかを考えましょう。",
      ],
      // EN: <p><strong>Decode.</strong> This is the standard "multiple-angle identity by De Moivre" technique, followed by solving a polynomial whose roots are known trig values.<br>(a) <span class="chem">cos(5 theta) + i sin(5 theta) = (c + is)^5</span>. Imaginary part: <span class="chem">5c^4 s - 10c^2 s^3 + s^5</span>. With <span class="chem">c^2 = 1 - s^2</span>: <span class="chem">5s(1 - 2s^2 + s^4) - 10s^3 + 10s^5 + s^5 = 16s^5 - 20s^3 + 5s</span>.<br>(b) With <span class="chem">theta = pi/5</span>, <span class="chem">sin(5 theta) = sin(pi) = 0</span>. Since <span class="chem">s = sin(pi/5) != 0</span>, divide by <span class="chem">s</span>: <span class="chem">16s^4 - 20s^2 + 5 = 0</span>, i.e. <span class="chem">16x^2 - 20x + 5 = 0</span>.<br>(c) <span class="chem">x = (20 +- sqrt(400 - 320)) / 32 = (5 +- sqrt(5)) / 8</span>. As <span class="chem">pi/5 &lt; pi/4</span>, <span class="chem">sin^2(pi/5) &lt; 1/2</span>, while <span class="chem">(5 + sqrt(5))/8 ≈ 0.90</span>. So <span class="chem">sin^2(pi/5) = (5 - sqrt(5)) / 8</span>.</p>
      solution: "<p><strong>解読。</strong> これは「ド・モアブルの定理による倍角の公式」という定番の手法で、その後に既知の三角関数の値を解にもつ多項式を解きます。<br>(a) <span class=\"chem\">cos(5 theta) + i sin(5 theta) = (c + is)^5</span>。虚部：<span class=\"chem\">5c^4 s - 10c^2 s^3 + s^5</span>。<span class=\"chem\">c^2 = 1 - s^2</span> を使うと：<span class=\"chem\">5s(1 - 2s^2 + s^4) - 10s^3 + 10s^5 + s^5 = 16s^5 - 20s^3 + 5s</span>。<br>(b) <span class=\"chem\">theta = pi/5</span> のとき、<span class=\"chem\">sin(5 theta) = sin(pi) = 0</span>。<span class=\"chem\">s = sin(pi/5) != 0</span> なので <span class=\"chem\">s</span> で割ると：<span class=\"chem\">16s^4 - 20s^2 + 5 = 0</span>、すなわち <span class=\"chem\">16x^2 - 20x + 5 = 0</span>。<br>(c) <span class=\"chem\">x = (20 +- sqrt(400 - 320)) / 32 = (5 +- sqrt(5)) / 8</span>。<span class=\"chem\">pi/5 &lt; pi/4</span> なので <span class=\"chem\">sin^2(pi/5) &lt; 1/2</span> ですが、<span class=\"chem\">(5 + sqrt(5))/8 ≈ 0.90</span> です。よって <span class=\"chem\">sin^2(pi/5) = (5 - sqrt(5)) / 8</span>。</p>",
      // EN: <p>(a) The imaginary part of <span class="chem">(cos theta + i sin theta)^5</span> is <span class="chem">5c^4 s - 10c^2 s^3 + s^5</span> (with <span class="chem">c = cos theta</span>, <span class="chem">s = sin theta</span>); replacing <span class="chem">c^2 = 1 - s^2</span> gives <span class="chem">16s^5 - 20s^3 + 5s</span>.<br>(b) <span class="chem">sin(pi) = 0</span> and <span class="chem">sin(pi/5) != 0</span>, so dividing by <span class="chem">sin(pi/5)</span> gives <span class="chem">16x^2 - 20x + 5 = 0</span>.<br>(c) <span class="chem">x = (5 +- sqrt(5)) / 8</span>; since <span class="chem">0 &lt; pi/5 &lt; pi/4</span>, <span class="chem">sin^2(pi/5) &lt; 1/2</span>, so <span class="chem">sin^2(pi/5) = (5 - sqrt(5)) / 8</span>.</p>
      answer: "<p>(a) <span class=\"chem\">(cos theta + i sin theta)^5</span> の虚部は <span class=\"chem\">5c^4 s - 10c^2 s^3 + s^5</span>（<span class=\"chem\">c = cos theta</span>、<span class=\"chem\">s = sin theta</span> とする）。<span class=\"chem\">c^2 = 1 - s^2</span> を代入すると <span class=\"chem\">16s^5 - 20s^3 + 5s</span> となる。<br>(b) <span class=\"chem\">sin(pi) = 0</span> かつ <span class=\"chem\">sin(pi/5) != 0</span> なので、<span class=\"chem\">sin(pi/5)</span> で割ると <span class=\"chem\">16x^2 - 20x + 5 = 0</span> となる。<br>(c) <span class=\"chem\">x = (5 +- sqrt(5)) / 8</span>。<span class=\"chem\">0 &lt; pi/5 &lt; pi/4</span> なので <span class=\"chem\">sin^2(pi/5) &lt; 1/2</span>、よって <span class=\"chem\">sin^2(pi/5) = (5 - sqrt(5)) / 8</span>。</p>",
      markscheme: [
        // EN: M1: Writes sin 5θ = Im[(cos θ + i sin θ)⁵] and expands binomially.
        "M1：sin 5θ = Im[(cos θ + i sin θ)⁵] と書き、二項展開する。",
        // EN: A1: Im part = 5cos⁴θ sin θ − 10cos²θ sin³θ + sin⁵θ.
        "A1：虚部 = 5cos⁴θ sin θ − 10cos²θ sin³θ + sin⁵θ。",
        // EN: M1: Substitutes cos²θ = 1 − sin²θ.
        "M1：cos²θ = 1 − sin²θ を代入する。",
        // EN: A1: Expands 5s(1 − s²)² − 10s³(1 − s²) + s⁵ correctly to reach 16s⁵ − 20s³ + 5s (AG).
        "A1：5s(1 − s²)² − 10s³(1 − s²) + s⁵ を正しく展開し、16s⁵ − 20s³ + 5s を得る (AG)。",
        // EN: M1: Uses sin 5θ = sin π = 0 with sin(π/5) ≠ 0 and divides by sin(π/5).
        "M1：sin 5θ = sin π = 0 と sin(π/5) ≠ 0 を使い、sin(π/5) で割る。",
        // EN: A1: 16 sin⁴(π/5) − 20 sin²(π/5) + 5 = 0, i.e. 16x² − 20x + 5 = 0 (AG).
        "A1：16 sin⁴(π/5) − 20 sin²(π/5) + 5 = 0、すなわち 16x² − 20x + 5 = 0 (AG)。",
        // EN: A1: x = (20 ± √80)/32 = (5 ± √5)/8.
        "A1：x = (20 ± √80)/32 = (5 ± √5)/8。",
        // EN: R1: Rejects (5 + √5)/8 because sin²(π/5) < sin²(π/4) = ½ (or because (5 + √5)/8 = sin²(2π/5)).
        "R1：sin²(π/5) < sin²(π/4) = ½ であるから（または (5 + √5)/8 = sin²(2π/5) であるから）、(5 + √5)/8 を除外する。",
        // EN: A1: sin²(π/5) = (5 − √5)/8.
        "A1：sin²(π/5) = (5 − √5)/8。",
      ],
    },

    // ── t1-4-q029 · numeric · challenge · AHL · AHL 1.14 · 5 marks
    "t1-4-q029": {
      // EN: The seven solutions of <span class="chem">z^7 + 1 = 0</span> lie on the unit circle of the Argand diagram. By considering the sum of these seven solutions, find the exact value of <span class="chem">cos(pi/7) + cos(3pi/7) + cos(5pi/7)</span>.
      stem: "<span class=\"chem\">z^7 + 1 = 0</span> の 7 つの解は複素数平面の単位円上にある。これら 7 つの解の和を考えることにより、<span class=\"chem\">cos(pi/7) + cos(3pi/7) + cos(5pi/7)</span> の厳密値を求めなさい (Find)。",
      hints: [
        // EN: Decode: the cosines in the question are the real parts of some of the solutions of <span class="chem">z^7 = -1</span>. Find all seven solutions, add them, and compare real parts.
        "解読：問題の cos の値は、<span class=\"chem\">z^7 = -1</span> のいくつかの解の実部です。7 つの解をすべて求めて足し合わせ、実部を比較しましょう。",
        // EN: Write <span class="chem">-1 = e^{i(pi + 2 pi k)}</span>, so the solutions are <span class="chem">e^{i(2k + 1)pi/7}</span>: arguments <span class="chem">+- pi/7, +- 3pi/7, +- 5pi/7</span> and <span class="chem">pi</span>.
        "<span class=\"chem\">-1 = e^{i(pi + 2 pi k)}</span> と書くと、解は <span class=\"chem\">e^{i(2k + 1)pi/7}</span> です：偏角は <span class=\"chem\">+- pi/7, +- 3pi/7, +- 5pi/7</span> と <span class=\"chem\">pi</span> です。",
        // EN: The coefficient of <span class="chem">z^6</span> in <span class="chem">z^7 + 1</span> is 0, so the sum of the solutions is 0. Conjugate pairs have equal real parts.
        "<span class=\"chem\">z^7 + 1</span> の <span class=\"chem\">z^6</span> の係数は 0 なので、解の和は 0 です。共役な組の実部は等しくなります。",
      ],
      // EN: <p><strong>Decode.</strong> A sum of cosines of equally spaced angles is the real part of a sum of roots of a polynomial.<br>The solutions of <span class="chem">z^7 = -1</span> are <span class="chem">e^{i(2k + 1)pi/7}</span>, <span class="chem">k = 0, …, 6</span>, with arguments <span class="chem">+- pi/7</span>, <span class="chem">+- 3pi/7</span>, <span class="chem">+- 5pi/7</span> and <span class="chem">pi</span>. Since <span class="chem">z^7 + 1</span> has no <span class="chem">z^6</span> term, the sum of the solutions is <span class="chem">0</span>. Real parts: <span class="chem">2(cos(pi/7) + cos(3pi/7) + cos(5pi/7)) + cos(pi) = 0</span>, so the sum is <span class="chem">1/2</span>.</p>
      solution: "<p><strong>解読。</strong> 等間隔に並ぶ角の cos の和は、多項式の解の和の実部です。<br><span class=\"chem\">z^7 = -1</span> の解は <span class=\"chem\">e^{i(2k + 1)pi/7}</span>（<span class=\"chem\">k = 0, …, 6</span>）で、偏角は <span class=\"chem\">+- pi/7</span>、<span class=\"chem\">+- 3pi/7</span>、<span class=\"chem\">+- 5pi/7</span> と <span class=\"chem\">pi</span> です。<span class=\"chem\">z^7 + 1</span> には <span class=\"chem\">z^6</span> の項がないので、解の和は <span class=\"chem\">0</span> です。実部を比べると：<span class=\"chem\">2(cos(pi/7) + cos(3pi/7) + cos(5pi/7)) + cos(pi) = 0</span> なので、求める和は <span class=\"chem\">1/2</span> です。</p>",
    },

    // ── t1-4-q030 · numeric · challenge · AHL · AHL 1.14 · 4 marks
    "t1-4-q030": {
      // EN: The points <span class="chem">P_1, P_2, P_3, …</span> on an Argand diagram represent the complex numbers <span class="chem">(sqrt(3) + i)^1, (sqrt(3) + i)^2, (sqrt(3) + i)^3, …</span>. How many of the first 100 points <span class="chem">P_1, …, P_100</span> lie on the <strong>positive</strong> imaginary axis?
      stem: "複素数平面上の点 <span class=\"chem\">P_1, P_2, P_3, …</span> は、複素数 <span class=\"chem\">(sqrt(3) + i)^1, (sqrt(3) + i)^2, (sqrt(3) + i)^3, …</span> を表す。最初の 100 個の点 <span class=\"chem\">P_1, …, P_100</span> のうち、虚軸の<strong>正</strong>の部分にある点はいくつありますか？",
      hints: [
        // EN: Decode: "on the positive imaginary axis" means the argument of <span class="chem">(sqrt(3) + i)^n</span> is <span class="chem">pi/2</span> (plus a whole number of turns). The modulus does not matter. Count the integers <span class="chem">n</span> from 1 to 100 that work.
        "解読：「虚軸の正の部分にある」とは、<span class=\"chem\">(sqrt(3) + i)^n</span> の偏角が <span class=\"chem\">pi/2</span>（に整数回転分を加えたもの）であることを意味します。絶対値は関係ありません。1 から 100 までの整数 <span class=\"chem\">n</span> のうち条件を満たすものを数えます。",
        // EN: <span class="chem">sqrt(3) + i = 2 e^{i pi/6}</span>, so <span class="chem">(sqrt(3) + i)^n</span> has argument <span class="chem">n pi/6</span>.
        "<span class=\"chem\">sqrt(3) + i = 2 e^{i pi/6}</span> なので、<span class=\"chem\">(sqrt(3) + i)^n</span> の偏角は <span class=\"chem\">n pi/6</span> です。",
        // EN: You need <span class="chem">n pi/6 = pi/2 + 2 pi k</span>, i.e. <span class="chem">n = 3 + 12k</span>. (Values <span class="chem">n = 9 + 12k</span> lie on the <em>negative</em> imaginary axis.)
        "<span class=\"chem\">n pi/6 = pi/2 + 2 pi k</span>、すなわち <span class=\"chem\">n = 3 + 12k</span> が必要です。（<span class=\"chem\">n = 9 + 12k</span> の値は虚軸の<em>負</em>の部分にあります。）",
      ],
      // EN: <p><strong>Decode.</strong> Position on an axis is a condition on the argument only.<br><span class="chem">(sqrt(3) + i)^n = 2^n e^{i n pi/6}</span>. It lies on the positive imaginary axis when <span class="chem">n pi/6 = pi/2 + 2 pi k</span>, i.e. <span class="chem">n = 3 + 12k</span> with <span class="chem">k ∈ ℤ</span>. In <span class="chem">1 &lt;= n &lt;= 100</span>: <span class="chem">n = 3, 15, 27, 39, 51, 63, 75, 87, 99</span>, which is <span class="chem">9</span> points.</p>
      solution: "<p><strong>解読。</strong> 軸上にあるかどうかは、偏角だけについての条件です。<br><span class=\"chem\">(sqrt(3) + i)^n = 2^n e^{i n pi/6}</span>。これが虚軸の正の部分にあるのは <span class=\"chem\">n pi/6 = pi/2 + 2 pi k</span>、すなわち <span class=\"chem\">n = 3 + 12k</span>（<span class=\"chem\">k ∈ ℤ</span>）のときです。<span class=\"chem\">1 &lt;= n &lt;= 100</span> では <span class=\"chem\">n = 3, 15, 27, 39, 51, 63, 75, 87, 99</span> で、<span class=\"chem\">9</span> 個の点です。</p>",
    },

    // ── t1-4-q031 · short · challenge · AHL · AHL 1.13 · 8 marks
    "t1-4-q031": {
      // EN: (a) Show that <span class="chem">1 + e^{i theta} = 2 cos(theta/2) e^{i theta/2}</span> for <span class="chem">theta ∈ ℝ</span>. [3 marks]<br>(b) Hence write down the modulus and the argument of <span class="chem">1 + e^{i 4pi/5}</span>. [2 marks]<br>(c) Find the modulus and the principal argument of <span class="chem">1 + e^{i 8pi/5}</span>, giving exact answers in terms of trigonometric values of rational multiples of <span class="chem">pi</span>. [3 marks]
      stem: "(a) <span class=\"chem\">theta ∈ ℝ</span> に対して <span class=\"chem\">1 + e^{i theta} = 2 cos(theta/2) e^{i theta/2}</span> であることを示しなさい (Show that)。 [3 marks]<br>(b) これを用いて (Hence)、<span class=\"chem\">1 + e^{i 4pi/5}</span> の絶対値と偏角を書きなさい (Write down)。 [2 marks]<br>(c) <span class=\"chem\">1 + e^{i 8pi/5}</span> の絶対値と主偏角を求め (Find)、<span class=\"chem\">pi</span> の有理数倍の三角関数の値を用いて厳密な値で答えなさい。 [3 marks]",
      hints: [
        // EN: Decode: part (c) is a trap. A modulus must be positive, but <span class="chem">2 cos(theta/2)</span> is negative when <span class="chem">theta/2</span> is an obtuse angle. The task is to repair the form so that <span class="chem">r &gt; 0</span> and the argument is principal.
        "解読：(c) はひっかけです。絶対値は正でなければなりませんが、<span class=\"chem\">theta/2</span> が鈍角のとき <span class=\"chem\">2 cos(theta/2)</span> は負になります。<span class=\"chem\">r &gt; 0</span> かつ偏角が主偏角になるように形を直すことが課題です。",
        // EN: For (a), take out a factor <span class="chem">e^{i theta/2}</span> from both terms and use <span class="chem">e^{ix} + e^{-ix} = 2 cos x</span>.
        "(a) では、両方の項から因数 <span class=\"chem\">e^{i theta/2}</span> をくくり出し、<span class=\"chem\">e^{ix} + e^{-ix} = 2 cos x</span> を使います。",
        // EN: For (c), <span class="chem">theta/2 = 4pi/5</span> and <span class="chem">cos(4pi/5) &lt; 0</span>. Write the negative sign as <span class="chem">e^{-i pi}</span> and subtract <span class="chem">pi</span> from the argument.
        "(c) では、<span class=\"chem\">theta/2 = 4pi/5</span> で <span class=\"chem\">cos(4pi/5) &lt; 0</span> です。負の符号を <span class=\"chem\">e^{-i pi}</span> と書き、偏角から <span class=\"chem\">pi</span> を引きます。",
      ],
      // EN: <p><strong>Decode.</strong> The identity in (a) gives a "modulus" <span class="chem">2 cos(theta/2)</span> that is only a true modulus when it is positive; (c) tests whether you notice when it is not.<br>(a) <span class="chem">1 + e^{i theta} = e^{i theta/2}(e^{-i theta/2} + e^{i theta/2}) = e^{i theta/2} × 2 cos(theta/2)</span>.<br>(b) <span class="chem">theta = 4pi/5</span>: <span class="chem">2 cos(2pi/5) &gt; 0</span>, so the modulus is <span class="chem">2 cos(2pi/5)</span> and the argument is <span class="chem">2pi/5</span>.<br>(c) <span class="chem">theta = 8pi/5</span>: <span class="chem">1 + e^{i 8pi/5} = 2 cos(4pi/5) e^{i 4pi/5}</span>, but <span class="chem">cos(4pi/5) &lt; 0</span>. Write it as <span class="chem">(-2 cos(4pi/5)) e^{-i pi} e^{i 4pi/5} = 2 cos(pi/5) e^{-i pi/5}</span>. Modulus <span class="chem">2 cos(pi/5)</span>, principal argument <span class="chem">-pi/5</span>.</p>
      solution: "<p><strong>解読。</strong> (a) の恒等式が与える「絶対値」<span class=\"chem\">2 cos(theta/2)</span> は、正のときにだけ本当の絶対値になります。(c) は正でない場合に気づけるかを試しています。<br>(a) <span class=\"chem\">1 + e^{i theta} = e^{i theta/2}(e^{-i theta/2} + e^{i theta/2}) = e^{i theta/2} × 2 cos(theta/2)</span>。<br>(b) <span class=\"chem\">theta = 4pi/5</span>：<span class=\"chem\">2 cos(2pi/5) &gt; 0</span> なので、絶対値は <span class=\"chem\">2 cos(2pi/5)</span>、偏角は <span class=\"chem\">2pi/5</span> です。<br>(c) <span class=\"chem\">theta = 8pi/5</span>：<span class=\"chem\">1 + e^{i 8pi/5} = 2 cos(4pi/5) e^{i 4pi/5}</span> ですが、<span class=\"chem\">cos(4pi/5) &lt; 0</span> です。これを <span class=\"chem\">(-2 cos(4pi/5)) e^{-i pi} e^{i 4pi/5} = 2 cos(pi/5) e^{-i pi/5}</span> と書き直します。絶対値は <span class=\"chem\">2 cos(pi/5)</span>、主偏角は <span class=\"chem\">-pi/5</span> です。</p>",
      // EN: <p>(a) <span class="chem">1 + e^{i theta} = e^{i theta/2}(e^{-i theta/2} + e^{i theta/2}) = 2 cos(theta/2) e^{i theta/2}</span>.<br>(b) Modulus <span class="chem">2 cos(2pi/5)</span>, argument <span class="chem">2pi/5</span>.<br>(c) <span class="chem">1 + e^{i 8pi/5} = 2 cos(4pi/5) e^{i 4pi/5}</span> with <span class="chem">cos(4pi/5) &lt; 0</span>, so the modulus is <span class="chem">-2 cos(4pi/5) = 2 cos(pi/5)</span> and the principal argument is <span class="chem">4pi/5 - pi = -pi/5</span>.</p>
      answer: "<p>(a) <span class=\"chem\">1 + e^{i theta} = e^{i theta/2}(e^{-i theta/2} + e^{i theta/2}) = 2 cos(theta/2) e^{i theta/2}</span>。<br>(b) 絶対値 <span class=\"chem\">2 cos(2pi/5)</span>、偏角 <span class=\"chem\">2pi/5</span>。<br>(c) <span class=\"chem\">1 + e^{i 8pi/5} = 2 cos(4pi/5) e^{i 4pi/5}</span> で <span class=\"chem\">cos(4pi/5) &lt; 0</span> なので、絶対値は <span class=\"chem\">-2 cos(4pi/5) = 2 cos(pi/5)</span>、主偏角は <span class=\"chem\">4pi/5 - pi = -pi/5</span>。</p>",
      markscheme: [
        // EN: M1: Takes out the factor e<sup>iθ/2</sup>: 1 + e<sup>iθ</sup> = e<sup>iθ/2</sup>(e<sup>−iθ/2</sup> + e<sup>iθ/2</sup>).
        "M1：因数 e<sup>iθ/2</sup> をくくり出す：1 + e<sup>iθ</sup> = e<sup>iθ/2</sup>(e<sup>−iθ/2</sup> + e<sup>iθ/2</sup>)。",
        // EN: M1: Uses e<sup>ix</sup> + e<sup>−ix</sup> = 2cos x (from cos x ± i sin x).
        "M1：e<sup>ix</sup> + e<sup>−ix</sup> = 2cos x を使う（cos x ± i sin x から）。",
        // EN: A1: Reaches 2cos(θ/2) e<sup>iθ/2</sup> (AG).
        "A1：2cos(θ/2) e<sup>iθ/2</sup> を得る (AG)。",
        // EN: A1: Modulus 2cos(2π/5).
        "A1：絶対値 2cos(2π/5)。",
        // EN: A1: Argument 2π/5 (valid because cos(2π/5) > 0).
        "A1：偏角 2π/5（cos(2π/5) > 0 なので正しい）。",
        // EN: M1: Writes 1 + e<sup>i8π/5</sup> = 2cos(4π/5) e<sup>i4π/5</sup>.
        "M1：1 + e<sup>i8π/5</sup> = 2cos(4π/5) e<sup>i4π/5</sup> と書く。",
        // EN: R1: Notes cos(4π/5) < 0, so writes −1 = e<sup>−iπ</sup>: modulus = −2cos(4π/5) = 2cos(π/5).
        "R1：cos(4π/5) < 0 に注意し、−1 = e<sup>−iπ</sup> と書く：絶対値 = −2cos(4π/5) = 2cos(π/5)。",
        // EN: A1: Principal argument 4π/5 − π = −π/5.
        "A1：主偏角 4π/5 − π = −π/5。",
      ],
    },

    // ── t1-4-q032 · short · exam · AHL · AHL 1.14 · 8 marks
    "t1-4-q032": {
      // EN: Let <span class="chem">z = cos theta + i sin theta</span>.<br>(a) Show that <span class="chem">z^n + z^{-n} = 2 cos(n theta)</span> for <span class="chem">n ∈ ℤ^+</span>. [2 marks]<br>(b) By expanding <span class="chem">(z + z^{-1})^3</span>, show that <span class="chem">cos^3 theta = (1/4) cos(3 theta) + (3/4) cos theta</span>. [3 marks]<br>(c) Hence find the exact value of <span class="chem">∫_0^{pi/3} cos^3 theta d theta</span>. [3 marks]
      stem: "<span class=\"chem\">z = cos theta + i sin theta</span> とする。<br>(a) <span class=\"chem\">n ∈ ℤ^+</span> に対して <span class=\"chem\">z^n + z^{-n} = 2 cos(n theta)</span> であることを示しなさい (Show that)。 [2 marks]<br>(b) <span class=\"chem\">(z + z^{-1})^3</span> を展開することにより、<span class=\"chem\">cos^3 theta = (1/4) cos(3 theta) + (3/4) cos theta</span> を示しなさい。 [3 marks]<br>(c) これを用いて (Hence)、<span class=\"chem\">∫_0^{pi/3} cos^3 theta d theta</span> の厳密値を求めなさい。 [3 marks]",
      hints: [
        // EN: For (a), apply De Moivre with <span class="chem">n</span> and with <span class="chem">-n</span>; the sine terms cancel.
        "(a) では、<span class=\"chem\">n</span> と <span class=\"chem\">-n</span> のそれぞれにド・モアブルの定理を使います。sin の項は打ち消し合います。",
        // EN: For (b), <span class="chem">z + z^{-1} = 2 cos theta</span>, so the left side is <span class="chem">8 cos^3 theta</span>. Pair the terms of the expansion symmetrically.
        "(b) では、<span class=\"chem\">z + z^{-1} = 2 cos theta</span> なので左辺は <span class=\"chem\">8 cos^3 theta</span> です。展開式の項を対称に組にしましょう。",
        // EN: For (c), <span class="chem">int cos(3 theta) d theta = (1/3) sin(3 theta)</span>.
        "(c) では、<span class=\"chem\">int cos(3 theta) d theta = (1/3) sin(3 theta)</span> です。",
      ],
      // EN: <p>(a) By De Moivre, <span class="chem">z^n + z^{-n} = (cos(n theta) + i sin(n theta)) + (cos(n theta) - i sin(n theta)) = 2 cos(n theta)</span>.<br>(b) <span class="chem">(2 cos theta)^3 = (z + z^{-1})^3 = (z^3 + z^{-3}) + 3(z + z^{-1}) = 2 cos(3 theta) + 6 cos theta</span>. Divide by 8.<br>(c) <span class="chem">∫_0^{pi/3} ((1/4) cos(3 theta) + (3/4) cos theta) d theta = [(1/12) sin(3 theta) + (3/4) sin theta]_0^{pi/3} = 0 + (3/4)(sqrt(3)/2) = 3 sqrt(3)/8</span>.</p>
      solution: "<p>(a) ド・モアブルの定理より、<span class=\"chem\">z^n + z^{-n} = (cos(n theta) + i sin(n theta)) + (cos(n theta) - i sin(n theta)) = 2 cos(n theta)</span>。<br>(b) <span class=\"chem\">(2 cos theta)^3 = (z + z^{-1})^3 = (z^3 + z^{-3}) + 3(z + z^{-1}) = 2 cos(3 theta) + 6 cos theta</span>。両辺を 8 で割ります。<br>(c) <span class=\"chem\">∫_0^{pi/3} ((1/4) cos(3 theta) + (3/4) cos theta) d theta = [(1/12) sin(3 theta) + (3/4) sin theta]_0^{pi/3} = 0 + (3/4)(sqrt(3)/2) = 3 sqrt(3)/8</span>。</p>",
      // EN: <p>(a) <span class="chem">z^n = cos(n theta) + i sin(n theta)</span> and <span class="chem">z^{-n} = cos(n theta) - i sin(n theta)</span>; adding gives <span class="chem">2 cos(n theta)</span>.<br>(b) <span class="chem">8 cos^3 theta = (z^3 + z^{-3}) + 3(z + z^{-1}) = 2 cos(3 theta) + 6 cos theta</span>.<br>(c) <span class="chem">∫_0^{pi/3} cos^3 theta d theta = [(1/12) sin(3 theta) + (3/4) sin theta]_0^{pi/3} = 3 sqrt(3)/8</span>.</p>
      answer: "<p>(a) <span class=\"chem\">z^n = cos(n theta) + i sin(n theta)</span>、<span class=\"chem\">z^{-n} = cos(n theta) - i sin(n theta)</span> であり、足すと <span class=\"chem\">2 cos(n theta)</span> となる。<br>(b) <span class=\"chem\">8 cos^3 theta = (z^3 + z^{-3}) + 3(z + z^{-1}) = 2 cos(3 theta) + 6 cos theta</span>。<br>(c) <span class=\"chem\">∫_0^{pi/3} cos^3 theta d theta = [(1/12) sin(3 theta) + (3/4) sin theta]_0^{pi/3} = 3 sqrt(3)/8</span>。</p>",
      markscheme: [
        // EN: M1: Uses De Moivre for z<sup>n</sup> and z<sup>−n</sup>: cos nθ ± i sin nθ (using cos(−nθ) = cos nθ, sin(−nθ) = −sin nθ).
        "M1：z<sup>n</sup> と z<sup>−n</sup> にド・モアブルの定理を使う：cos nθ ± i sin nθ（cos(−nθ) = cos nθ、sin(−nθ) = −sin nθ を用いる）。",
        // EN: A1: Adds to get 2cos nθ (AG).
        "A1：足して 2cos nθ を得る (AG)。",
        // EN: M1: (z + z<sup>−1</sup>)³ = z³ + 3z + 3z<sup>−1</sup> + z<sup>−3</sup>.
        "M1：(z + z<sup>−1</sup>)³ = z³ + 3z + 3z<sup>−1</sup> + z<sup>−3</sup>。",
        // EN: M1: Groups as (z³ + z<sup>−3</sup>) + 3(z + z<sup>−1</sup>) and uses (a): 8cos³θ = 2cos 3θ + 6cos θ.
        "M1：(z³ + z<sup>−3</sup>) + 3(z + z<sup>−1</sup>) とまとめ、(a) を使う：8cos³θ = 2cos 3θ + 6cos θ。",
        // EN: A1: Divides by 8 to reach the given identity (AG).
        "A1：8 で割って与えられた恒等式を得る (AG)。",
        // EN: M1: Integrates: (1/12) sin 3θ + (3/4) sin θ.
        "M1：積分する：(1/12) sin 3θ + (3/4) sin θ。",
        // EN: A1: Substitutes limits: (1/12) sin π + (3/4) sin(π/3) − 0.
        "A1：上端・下端を代入する：(1/12) sin π + (3/4) sin(π/3) − 0。",
        // EN: A1: 3√3/8.
        "A1：3√3/8。",
      ],
    },

    // ── t1-4-q033 · numeric · challenge · AHL · AHL 1.12 · 5 marks
    "t1-4-q033": {
      // EN: A student needs the sum <span class="chem">S = i + 2i^2 + 3i^3 + 4i^4 + … + 40i^{40}</span>, in which the <span class="chem">k</span>-th term is <span class="chem">k i^k</span>. Find the exact value of <span class="chem">|S|</span>.
      stem: "ある生徒が和 <span class=\"chem\">S = i + 2i^2 + 3i^3 + 4i^4 + … + 40i^{40}</span> を求める必要がある。ここで第 <span class=\"chem\">k</span> 項は <span class=\"chem\">k i^k</span> である。<span class=\"chem\">|S|</span> の厳密値を求めなさい (Find)。",
      hints: [
        // EN: Decode: this is not a geometric series, because the coefficients change. But the powers of <span class="chem">i</span> repeat every 4 terms, so group the 40 terms into 10 blocks of 4 and find what each block adds up to.
        "解読：係数が変化するので、これは等比級数ではありません。しかし <span class=\"chem\">i</span> の累乗は 4 項ごとにくり返すので、40 項を 4 項ずつ 10 個のまとまりに分け、各まとまりの和を求めましょう。",
        // EN: The block starting at <span class="chem">k = 4m + 1</span> is <span class="chem">(4m + 1)i - (4m + 2) - (4m + 3)i + (4m + 4)</span>.
        "<span class=\"chem\">k = 4m + 1</span> から始まるまとまりは <span class=\"chem\">(4m + 1)i - (4m + 2) - (4m + 3)i + (4m + 4)</span> です。",
        // EN: Each block simplifies to <span class="chem">2 - 2i</span>, whatever <span class="chem">m</span> is.
        "<span class=\"chem\">m</span> が何であっても、各まとまりは <span class=\"chem\">2 - 2i</span> に簡単になります。",
      ],
      // EN: <p><strong>Decode.</strong> The period-4 cycle <span class="chem">i, -1, -i, 1</span> lets you group the terms.<br>For <span class="chem">m = 0, 1, …, 9</span>, the block <span class="chem">(4m + 1)i + (4m + 2)i^2 + (4m + 3)i^3 + (4m + 4)i^4 = (4m + 1)i - (4m + 2) - (4m + 3)i + (4m + 4) = 2 - 2i</span>. Ten blocks give <span class="chem">S = 20 - 20i</span>, so <span class="chem">|S| = sqrt(400 + 400) = 20 sqrt(2)</span>.</p>
      solution: "<p><strong>解読。</strong> 周期 4 のくり返し <span class=\"chem\">i, -1, -i, 1</span> を使うと、項をまとめることができます。<br><span class=\"chem\">m = 0, 1, …, 9</span> に対して、まとまり <span class=\"chem\">(4m + 1)i + (4m + 2)i^2 + (4m + 3)i^3 + (4m + 4)i^4 = (4m + 1)i - (4m + 2) - (4m + 3)i + (4m + 4) = 2 - 2i</span> です。10 個のまとまりで <span class=\"chem\">S = 20 - 20i</span> となるので、<span class=\"chem\">|S| = sqrt(400 + 400) = 20 sqrt(2)</span> です。</p>",
    },

    // ── t1-4-q034 · numeric · challenge · AHL · AHL 1.14 · 5 marks
    "t1-4-q034": {
      // EN: Let <span class="chem">omega = e^{2 pi i / 5}</span>. Find the value of <span class="chem">(2 - omega)(2 - omega^2)(2 - omega^3)(2 - omega^4)</span>.
      stem: "<span class=\"chem\">omega = e^{2 pi i / 5}</span> とする。<span class=\"chem\">(2 - omega)(2 - omega^2)(2 - omega^3)(2 - omega^4)</span> の値を求めなさい (Find)。",
      hints: [
        // EN: Decode: do not multiply out four complex brackets. The numbers <span class="chem">omega, omega^2, omega^3, omega^4</span> are the roots of a known polynomial, so the product is that polynomial evaluated at <span class="chem">z = 2</span>.
        "解読：4 つの複素数のかっこを展開してはいけません。<span class=\"chem\">omega, omega^2, omega^3, omega^4</span> はある既知の多項式の解なので、この積はその多項式に <span class=\"chem\">z = 2</span> を代入した値です。",
        // EN: The fifth roots of unity are <span class="chem">1, omega, …, omega^4</span>, so <span class="chem">z^5 - 1 = (z - 1)(z - omega)(z - omega^2)(z - omega^3)(z - omega^4)</span>.
        "1 の 5 乗根は <span class=\"chem\">1, omega, …, omega^4</span> なので、<span class=\"chem\">z^5 - 1 = (z - 1)(z - omega)(z - omega^2)(z - omega^3)(z - omega^4)</span> です。",
        // EN: Divide by <span class="chem">z - 1</span>: <span class="chem">(z - omega)(z - omega^2)(z - omega^3)(z - omega^4) = z^4 + z^3 + z^2 + z + 1</span>. Now put <span class="chem">z = 2</span>.
        "<span class=\"chem\">z - 1</span> で割ると：<span class=\"chem\">(z - omega)(z - omega^2)(z - omega^3)(z - omega^4) = z^4 + z^3 + z^2 + z + 1</span>。ここで <span class=\"chem\">z = 2</span> とします。",
      ],
      // EN: <p><strong>Decode.</strong> A product of the form <span class="chem">(a - root)</span> over all roots is the factorised polynomial evaluated at <span class="chem">a</span>.<br><span class="chem">z^5 - 1 = (z - 1)(z - omega)(z - omega^2)(z - omega^3)(z - omega^4)</span>, so <span class="chem">(z - omega)(z - omega^2)(z - omega^3)(z - omega^4) = (z^5 - 1)/(z - 1) = z^4 + z^3 + z^2 + z + 1</span>. At <span class="chem">z = 2</span>: <span class="chem">16 + 8 + 4 + 2 + 1 = 31</span>.</p>
      solution: "<p><strong>解読。</strong> すべての解についての <span class=\"chem\">(a - root)</span> の形の積は、因数分解された多項式に <span class=\"chem\">a</span> を代入した値です。<br><span class=\"chem\">z^5 - 1 = (z - 1)(z - omega)(z - omega^2)(z - omega^3)(z - omega^4)</span> なので、<span class=\"chem\">(z - omega)(z - omega^2)(z - omega^3)(z - omega^4) = (z^5 - 1)/(z - 1) = z^4 + z^3 + z^2 + z + 1</span>。<span class=\"chem\">z = 2</span> のとき：<span class=\"chem\">16 + 8 + 4 + 2 + 1 = 31</span>。</p>",
    },

    // ── t1-4-q035 · short · exam · AHL · AHL 1.13, 1.14 · 6 marks
    "t1-4-q035": {
      // EN: Let <span class="chem">z = 2 cis(pi/5)</span> and <span class="chem">w = cis(3pi/10)</span>.<br>(a) Find <span class="chem">zw</span> in the form <span class="chem">a + bi</span>. [2 marks]<br>(b) Find the value of <span class="chem">z^3 / w^2</span>. [2 marks]<br>(c) Find the smallest positive integer <span class="chem">n</span> for which <span class="chem">w^n</span> is a real number. [2 marks]
      stem: "<span class=\"chem\">z = 2 cis(pi/5)</span>、<span class=\"chem\">w = cis(3pi/10)</span> とする。<br>(a) <span class=\"chem\">zw</span> を <span class=\"chem\">a + bi</span> の形で求めなさい (Find)。 [2 marks]<br>(b) <span class=\"chem\">z^3 / w^2</span> の値を求めなさい。 [2 marks]<br>(c) <span class=\"chem\">w^n</span> が実数となる最小の正の整数 <span class=\"chem\">n</span> を求めなさい。 [2 marks]",
      hints: [
        // EN: In polar form, multiplication multiplies the moduli and adds the arguments; division divides and subtracts.
        "極形式では、積は絶対値を掛けて偏角を足し、商は絶対値を割って偏角を引きます。",
        // EN: For (c), <span class="chem">w^n = cis(3n pi/10)</span> is real when <span class="chem">3n pi/10</span> is a multiple of <span class="chem">pi</span>.
        "(c) では、<span class=\"chem\">3n pi/10</span> が <span class=\"chem\">pi</span> の倍数のとき <span class=\"chem\">w^n = cis(3n pi/10)</span> は実数になります。",
      ],
      // EN: <p>(a) <span class="chem">zw = 2 cis(pi/5 + 3pi/10) = 2 cis(pi/2) = 2i</span>.<br>(b) <span class="chem">z^3 = 8 cis(3pi/5)</span> and <span class="chem">w^2 = cis(3pi/5)</span>, so <span class="chem">z^3 / w^2 = 8 cis(0) = 8</span>.<br>(c) <span class="chem">w^n = cis(3n pi/10)</span> is real when <span class="chem">3n/10</span> is an integer. Since 3 and 10 have no common factor, <span class="chem">n</span> must be a multiple of 10: the smallest is <span class="chem">n = 10</span>.</p>
      solution: "<p>(a) <span class=\"chem\">zw = 2 cis(pi/5 + 3pi/10) = 2 cis(pi/2) = 2i</span>。<br>(b) <span class=\"chem\">z^3 = 8 cis(3pi/5)</span>、<span class=\"chem\">w^2 = cis(3pi/5)</span> なので、<span class=\"chem\">z^3 / w^2 = 8 cis(0) = 8</span>。<br>(c) <span class=\"chem\">3n/10</span> が整数のとき <span class=\"chem\">w^n = cis(3n pi/10)</span> は実数です。3 と 10 は公約数をもたないので、<span class=\"chem\">n</span> は 10 の倍数でなければなりません：最小は <span class=\"chem\">n = 10</span> です。</p>",
      // EN: <p>(a) <span class="chem">zw = 2 cis(pi/2) = 2i</span>.<br>(b) <span class="chem">z^3 / w^2 = 8 cis(3pi/5 - 3pi/5) = 8</span>.<br>(c) <span class="chem">n = 10</span>.</p>
      answer: "<p>(a) <span class=\"chem\">zw = 2 cis(pi/2) = 2i</span>。<br>(b) <span class=\"chem\">z^3 / w^2 = 8 cis(3pi/5 - 3pi/5) = 8</span>。<br>(c) <span class=\"chem\">n = 10</span>。</p>",
      markscheme: [
        // EN: M1: Multiplies moduli and adds arguments: 2 cis(π/5 + 3π/10).
        "M1：絶対値を掛けて偏角を足す：2 cis(π/5 + 3π/10)。",
        // EN: A1: 2 cis(π/2) = 2i.
        "A1：2 cis(π/2) = 2i。",
        // EN: M1: Uses De Moivre and division: 2³ cis(3π/5) ÷ cis(3π/5).
        "M1：ド・モアブルの定理と割り算を使う：2³ cis(3π/5) ÷ cis(3π/5)。",
        // EN: A1: 8.
        "A1：8。",
        // EN: M1: Requires sin(3nπ/10) = 0, i.e. 3n/10 ∈ ℤ.
        "M1：sin(3nπ/10) = 0、すなわち 3n/10 ∈ ℤ が必要。",
        // EN: A1: n = 10.
        "A1：n = 10。",
      ],
    },

    // ── t1-4-q036 · numeric · exam · AHL · AHL 1.12, 1.13 · 4 marks
    "t1-4-q036": {
      // EN: Let <span class="chem">z = ((2.4 - 3.1i)(1.5 + 0.7i)) / (-0.9 + 2.2i)</span>. Find the principal argument <span class="chem">arg(z)</span>, where <span class="chem">-pi &lt; arg(z) &lt;= pi</span>, in radians correct to 3 significant figures.
      stem: "<span class=\"chem\">z = ((2.4 - 3.1i)(1.5 + 0.7i)) / (-0.9 + 2.2i)</span> とする。<span class=\"chem\">-pi &lt; arg(z) &lt;= pi</span> として、主偏角 <span class=\"chem\">arg(z)</span> をラジアンで求め (Find)、有効数字 3 桁で答えなさい。",
      hints: [
        // EN: Use the GDC in complex mode and radian mode. Evaluate <span class="chem">z</span> first, then use the GDC's <span class="mono">arg</span> (or <span class="mono">angle</span>) function.
        "GDC を複素数モードかつラジアンモードにします。まず <span class=\"chem\">z</span> を計算し、次に GDC の <span class=\"mono\">arg</span>（または <span class=\"mono\">angle</span>）関数を使います。",
        // EN: The GDC gives <span class="chem">z ≈ -2.0756 - 1.7736i</span>, which is in Quadrant III, so the principal argument is between <span class="chem">-pi</span> and <span class="chem">-pi/2</span>. A value from <span class="chem">arctan(b/a)</span> alone would be in the wrong quadrant.
        "GDC は <span class=\"chem\">z ≈ -2.0756 - 1.7736i</span> を与え、これは第 3 象限にあるので、主偏角は <span class=\"chem\">-pi</span> と <span class=\"chem\">-pi/2</span> の間にあります。<span class=\"chem\">arctan(b/a)</span> だけで求めた値は誤った象限の角になってしまいます。",
      ],
      // EN: <p>In complex mode, <span class="chem">z ≈ -2.0756 - 1.7736i</span> (Quadrant III). The GDC <span class="mono">arg</span> function gives <span class="chem">arg(z) ≈ -2.43</span> rad. Check: <span class="chem">arctan(1.7736 / 2.0756) ≈ 0.7071</span> is the reference angle, and <span class="chem">-(pi - 0.7071) ≈ -2.43</span>.</p>
      solution: "<p>複素数モードで <span class=\"chem\">z ≈ -2.0756 - 1.7736i</span>（第 3 象限）です。GDC の <span class=\"mono\">arg</span> 関数により <span class=\"chem\">arg(z) ≈ -2.43</span> rad です。確認：<span class=\"chem\">arctan(1.7736 / 2.0756) ≈ 0.7071</span> が基準角で、<span class=\"chem\">-(pi - 0.7071) ≈ -2.43</span> です。</p>",
    },

    // ── t1-4-q037 · numeric · exam · AHL · AHL 1.14 · 4 marks
    "t1-4-q037": {
      // EN: The equation <span class="chem">z^3 + 2z^2 + 3z + 7 = 0</span> has one real root and two non-real roots. Find the modulus of the non-real roots, correct to 3 significant figures.
      stem: "方程式 <span class=\"chem\">z^3 + 2z^2 + 3z + 7 = 0</span> は 1 つの実数解と 2 つの実数でない解をもつ。実数でない解の絶対値を求め (Find)、有効数字 3 桁で答えなさい。",
      hints: [
        // EN: Use the polynomial root finder on your GDC (coefficients 1, 2, 3, 7).
        "GDC の多項式の解を求める機能を使います（係数 1, 2, 3, 7）。",
        // EN: The two non-real roots are conjugates, so they have the same modulus <span class="chem">sqrt(a^2 + b^2)</span>. Check: the product of all three roots is <span class="chem">-7</span>.
        "2 つの実数でない解は互いに共役なので、絶対値は同じ <span class=\"chem\">sqrt(a^2 + b^2)</span> です。確認：3 つの解すべての積は <span class=\"chem\">-7</span> です。",
      ],
      // EN: <p>The GDC gives roots <span class="chem">z ≈ -2.1325</span> and <span class="chem">z ≈ 0.066247 +- 1.8106i</span>. The modulus of each non-real root is <span class="chem">sqrt(0.066247^2 + 1.8106^2) ≈ 1.81</span>. (Check: <span class="chem">(-2.1325)|w|^2 = -7</span> gives <span class="chem">|w| = sqrt(7 / 2.1325) ≈ 1.81</span>.)</p>
      solution: "<p>GDC により解は <span class=\"chem\">z ≈ -2.1325</span> と <span class=\"chem\">z ≈ 0.066247 +- 1.8106i</span> です。実数でない各解の絶対値は <span class=\"chem\">sqrt(0.066247^2 + 1.8106^2) ≈ 1.81</span> です。（確認：<span class=\"chem\">(-2.1325)|w|^2 = -7</span> より <span class=\"chem\">|w| = sqrt(7 / 2.1325) ≈ 1.81</span> です。）</p>",
    },

    // ── t1-4-q038 · numeric · exam · AHL · AHL 1.13, 1.14 · 4 marks
    "t1-4-q038": {
      // EN: Exactly one root of the equation <span class="chem">z^4 - 2z^3 + 5z^2 + z - 3 = 0</span> lies in the first quadrant of the Argand diagram. Find the argument of this root, in radians correct to 3 significant figures.
      stem: "方程式 <span class=\"chem\">z^4 - 2z^3 + 5z^2 + z - 3 = 0</span> の解のうち、ちょうど 1 つが複素数平面の第 1 象限にある。この解の偏角をラジアンで求め (Find)、有効数字 3 桁で答えなさい。",
      hints: [
        // EN: Use the polynomial root finder on your GDC to find all four roots.
        "GDC の多項式の解を求める機能を使って 4 つの解をすべて求めます。",
        // EN: The first-quadrant root has positive real and imaginary parts: <span class="chem">z ≈ 0.99275 + 2.1283i</span>. Find its argument.
        "第 1 象限の解は実部と虚部がともに正です：<span class=\"chem\">z ≈ 0.99275 + 2.1283i</span>。その偏角を求めましょう。",
      ],
      // EN: <p>The GDC gives the roots <span class="chem">z ≈ 0.74482</span>, <span class="chem">z ≈ -0.73032</span> and <span class="chem">z ≈ 0.99275 +- 2.1283i</span>. The first-quadrant root is <span class="chem">0.99275 + 2.1283i</span>, with argument <span class="chem">arctan(2.1283 / 0.99275) ≈ 1.13</span> rad.</p>
      solution: "<p>GDC により解は <span class=\"chem\">z ≈ 0.74482</span>、<span class=\"chem\">z ≈ -0.73032</span>、<span class=\"chem\">z ≈ 0.99275 +- 2.1283i</span> です。第 1 象限の解は <span class=\"chem\">0.99275 + 2.1283i</span> で、偏角は <span class=\"chem\">arctan(2.1283 / 0.99275) ≈ 1.13</span> rad です。</p>",
    },

    // ── t1-4-q039 · short · exam · AHL · AHL 1.13, 1.14 · 7 marks
    "t1-4-q039": {
      // EN: Consider the equation <span class="chem">z^5 = 3 + 4i</span>.<br>(a) Write <span class="chem">3 + 4i</span> in the form <span class="chem">r e^{i theta}</span>, giving <span class="chem">theta</span> correct to 4 significant figures. [2 marks]<br>(b) Find the five solutions in the form <span class="chem">r e^{i theta}</span>, where <span class="chem">-pi &lt; theta &lt;= pi</span>. Give <span class="chem">r</span> exactly and each <span class="chem">theta</span> correct to 3 significant figures. [3 marks]<br>(c) The five solutions are the vertices of a regular pentagon. Find the area of the pentagon, correct to 3 significant figures. [2 marks]
      stem: "方程式 <span class=\"chem\">z^5 = 3 + 4i</span> を考える。<br>(a) <span class=\"chem\">3 + 4i</span> を <span class=\"chem\">r e^{i theta}</span> の形で表しなさい (Write)。ただし <span class=\"chem\">theta</span> は有効数字 4 桁とする。 [2 marks]<br>(b) <span class=\"chem\">-pi &lt; theta &lt;= pi</span> として、5 つの解を <span class=\"chem\">r e^{i theta}</span> の形で求めなさい (Find)。<span class=\"chem\">r</span> は厳密値で、各 <span class=\"chem\">theta</span> は有効数字 3 桁で答えなさい。 [3 marks]<br>(c) 5 つの解は正五角形の頂点である。この五角形の面積を求め (Find)、有効数字 3 桁で答えなさい。 [2 marks]",
      hints: [
        // EN: For (b), the general argument of <span class="chem">3 + 4i</span> is <span class="chem">0.9273 + 2 pi k</span>; divide by 5 and pick five values of <span class="chem">k</span> that land in <span class="chem">(-pi, pi]</span>.
        "(b) では、<span class=\"chem\">3 + 4i</span> の一般角としての偏角は <span class=\"chem\">0.9273 + 2 pi k</span> です。これを 5 で割り、<span class=\"chem\">(-pi, pi]</span> に入る <span class=\"chem\">k</span> の値を 5 つ選びます。",
        // EN: For (c), split the pentagon into 5 congruent triangles at the origin, each with two sides <span class="chem">r = 5^{1/5}</span> and angle <span class="chem">2pi/5</span> between them.
        "(c) では、五角形を原点で 5 つの合同な三角形に分けます。それぞれ 2 辺が <span class=\"chem\">r = 5^{1/5}</span> で、その間の角が <span class=\"chem\">2pi/5</span> です。",
      ],
      // EN: <p>(a) <span class="chem">|3 + 4i| = 5</span> and <span class="chem">arg = arctan(4/3) ≈ 0.9273</span> (Quadrant I), so <span class="chem">3 + 4i = 5 e^{0.9273 i}</span>.<br>(b) <span class="chem">z = 5^{1/5} e^{i(0.9273 + 2 pi k)/5}</span>. For <span class="chem">k = 0, 1, 2, -1, -2</span>: <span class="chem">theta ≈ 0.185, 1.44, 2.70, -1.07, -2.33</span>.<br>(c) <span class="chem">r^2 = 5^{2/5} ≈ 1.9037</span>. Area <span class="chem">= 5 × (1/2)(1.9037) sin(2pi/5) ≈ 4.53</span>.</p>
      solution: "<p>(a) <span class=\"chem\">|3 + 4i| = 5</span>、<span class=\"chem\">arg = arctan(4/3) ≈ 0.9273</span>（第 1 象限）なので、<span class=\"chem\">3 + 4i = 5 e^{0.9273 i}</span>。<br>(b) <span class=\"chem\">z = 5^{1/5} e^{i(0.9273 + 2 pi k)/5}</span>。<span class=\"chem\">k = 0, 1, 2, -1, -2</span> のとき：<span class=\"chem\">theta ≈ 0.185, 1.44, 2.70, -1.07, -2.33</span>。<br>(c) <span class=\"chem\">r^2 = 5^{2/5} ≈ 1.9037</span>。面積 <span class=\"chem\">= 5 × (1/2)(1.9037) sin(2pi/5) ≈ 4.53</span>。</p>",
      // EN: <p>(a) <span class="chem">3 + 4i = 5 e^{0.9273 i}</span>.<br>(b) <span class="chem">r = 5^{1/5}</span>; <span class="chem">theta ≈ 0.185, 1.44, 2.70, -1.07, -2.33</span>.<br>(c) Area <span class="chem">= (5/2)(5^{2/5}) sin(2pi/5) ≈ 4.53</span>.</p>
      answer: "<p>(a) <span class=\"chem\">3 + 4i = 5 e^{0.9273 i}</span>。<br>(b) <span class=\"chem\">r = 5^{1/5}</span>；<span class=\"chem\">theta ≈ 0.185, 1.44, 2.70, -1.07, -2.33</span>。<br>(c) 面積 <span class=\"chem\">= (5/2)(5^{2/5}) sin(2pi/5) ≈ 4.53</span>。</p>",
      markscheme: [
        // EN: A1: Modulus 5.
        "A1：絶対値 5。",
        // EN: A1: Argument arctan(4/3) ≈ 0.9273.
        "A1：偏角 arctan(4/3) ≈ 0.9273。",
        // EN: M1: Uses θ = (0.9273 + 2πk)/5 with modulus 5<sup>1/5</sup>.
        "M1：θ = (0.9273 + 2πk)/5 と絶対値 5<sup>1/5</sup> を使う。",
        // EN: A1: Two or three correct arguments from 0.185, 1.44, 2.70, −1.07, −2.33.
        "A1：0.185、1.44、2.70、−1.07、−2.33 のうち 2 つか 3 つの偏角が正しい。",
        // EN: A1: All five correct, each in (−π, π].
        "A1：5 つすべてが正しく、それぞれ (−π, π] に入っている。",
        // EN: M1: Area = 5 × ½ r² sin(2π/5) with r = 5<sup>1/5</sup>.
        "M1：r = 5<sup>1/5</sup> として、面積 = 5 × ½ r² sin(2π/5)。",
        // EN: A1: Area ≈ 4.53.
        "A1：面積 ≈ 4.53。",
      ],
    },

    // ── t1-4-q040 · numeric · challenge · AHL · AHL 1.13 · 5 marks
    "t1-4-q040": {
      // EN: The tip of a robotic arm is modelled on an Argand diagram, with the arm's pivot at the origin and distances in metres. At first the tip is at the point <span class="chem">3 + 1.5i</span>. The arm then turns anticlockwise about the pivot through <span class="chem">0.8</span> radians, and at the same time its length increases by 20%. Find the new horizontal coordinate (the real part) of the tip, in metres correct to 3 significant figures.
      stem: "ロボットアームの先端を複素数平面上でモデル化する。アームの回転軸は原点にあり、距離の単位はメートルである。最初、先端は点 <span class=\"chem\">3 + 1.5i</span> にある。その後アームは回転軸のまわりに反時計回りに <span class=\"chem\">0.8</span> ラジアン回転し、同時に長さが 20% 増える。先端の新しい横座標（実部）をメートルで求め (Find)、有効数字 3 桁で答えなさい。",
      hints: [
        // EN: Decode: turning about the origin through an angle <span class="chem">alpha</span> and stretching by a factor <span class="chem">k</span> is multiplication by the complex number <span class="chem">k e^{i alpha}</span>. Here <span class="chem">k = 1.2</span> (a 20% increase) and <span class="chem">alpha = 0.8</span>.
        "解読：原点のまわりに角 <span class=\"chem\">alpha</span> だけ回転し、<span class=\"chem\">k</span> 倍に伸ばすことは、複素数 <span class=\"chem\">k e^{i alpha}</span> を掛けることです。ここでは <span class=\"chem\">k = 1.2</span>（20% の増加）、<span class=\"chem\">alpha = 0.8</span> です。",
        // EN: The new tip is <span class="chem">1.2 e^{0.8 i}(3 + 1.5i)</span>. Evaluate it on the GDC in radian mode.
        "新しい先端は <span class=\"chem\">1.2 e^{0.8 i}(3 + 1.5i)</span> です。GDC のラジアンモードで計算しましょう。",
        // EN: Only the real part is asked for. <span class="chem">1.2 e^{0.8 i}(3 + 1.5i) ≈ 1.217 + 3.837i</span>.
        "求められているのは実部だけです。<span class=\"chem\">1.2 e^{0.8 i}(3 + 1.5i) ≈ 1.217 + 3.837i</span>。",
      ],
      // EN: <p><strong>Decode.</strong> A rotation about the origin with a scale factor is multiplication by <span class="chem">r e^{i alpha}</span>.<br>New position <span class="chem">= 1.2 e^{0.8 i}(3 + 1.5i) = 1.2(cos 0.8 + i sin 0.8)(3 + 1.5i) ≈ 1.2169 + 3.8366i</span>. The horizontal coordinate is <span class="chem">≈ 1.22</span> m.</p>
      solution: "<p><strong>解読。</strong> 原点のまわりの回転と拡大は、<span class=\"chem\">r e^{i alpha}</span> を掛けることです。<br>新しい位置 <span class=\"chem\">= 1.2 e^{0.8 i}(3 + 1.5i) = 1.2(cos 0.8 + i sin 0.8)(3 + 1.5i) ≈ 1.2169 + 3.8366i</span>。横座標は <span class=\"chem\">≈ 1.22</span> m です。</p>",
    },

    // ── t1-4-q041 · numeric · challenge · AHL · AHL 1.12, 1.13 · 6 marks
    "t1-4-q041": {
      // EN: A point <span class="chem">Z</span> on an Argand diagram represents the complex number <span class="chem">z</span>. It moves so that its distance from the point representing <span class="chem">5 + 2i</span> is always 3, that is <span class="chem">|z - (5 + 2i)| = 3</span>. Find the largest possible value of <span class="chem">arg(z)</span>, in radians correct to 3 significant figures.
      stem: "複素数平面上の点 <span class=\"chem\">Z</span> は複素数 <span class=\"chem\">z</span> を表す。この点は <span class=\"chem\">5 + 2i</span> を表す点からの距離が常に 3、すなわち <span class=\"chem\">|z - (5 + 2i)| = 3</span> となるように動く。<span class=\"chem\">arg(z)</span> の最大値をラジアンで求め (Find)、有効数字 3 桁で答えなさい。",
      hints: [
        // EN: Decode: <span class="chem">|z - (5 + 2i)| = 3</span> says <span class="chem">Z</span> lies on a circle, centre <span class="chem">C(5, 2)</span>, radius 3. The argument is the angle of the line <span class="chem">OZ</span>, so the largest argument occurs where a line from <span class="chem">O</span> just touches the circle (a tangent).
        "解読：<span class=\"chem\">|z - (5 + 2i)| = 3</span> は、<span class=\"chem\">Z</span> が中心 <span class=\"chem\">C(5, 2)</span>、半径 3 の円周上にあることを表します。偏角は直線 <span class=\"chem\">OZ</span> の角なので、偏角が最大になるのは <span class=\"chem\">O</span> からの直線が円にちょうど接するとき（接線）です。",
        // EN: The tangent meets the radius at a right angle. In the right-angled triangle <span class="chem">O</span>, <span class="chem">C</span>, tangent point, the hypotenuse is <span class="chem">OC = sqrt(29)</span> and the side opposite the angle at <span class="chem">O</span> is 3.
        "接線は半径と直角に交わります。<span class=\"chem\">O</span>、<span class=\"chem\">C</span>、接点からなる直角三角形で、斜辺は <span class=\"chem\">OC = sqrt(29)</span>、<span class=\"chem\">O</span> における角の対辺は 3 です。",
        // EN: Largest argument <span class="chem">= arg(5 + 2i) + arcsin(3 / sqrt(29))</span>.
        "偏角の最大値 <span class=\"chem\">= arg(5 + 2i) + arcsin(3 / sqrt(29))</span>。",
      ],
      // EN: <p><strong>Decode.</strong> The locus is a circle; maximising the argument means finding the upper tangent from the origin.<br><span class="chem">OC = |5 + 2i| = sqrt(29) &gt; 3</span>, so <span class="chem">O</span> is outside the circle. The angle between <span class="chem">OC</span> and the tangent is <span class="chem">arcsin(3 / sqrt(29)) ≈ 0.59087</span>, and <span class="chem">arg(5 + 2i) = arctan(2/5) ≈ 0.38051</span>. Largest <span class="chem">arg(z) ≈ 0.38051 + 0.59087 ≈ 0.971</span> rad.</p>
      solution: "<p><strong>解読。</strong> 軌跡は円です。偏角を最大にするとは、原点から引いた上側の接線を求めることです。<br><span class=\"chem\">OC = |5 + 2i| = sqrt(29) &gt; 3</span> なので <span class=\"chem\">O</span> は円の外部にあります。<span class=\"chem\">OC</span> と接線のなす角は <span class=\"chem\">arcsin(3 / sqrt(29)) ≈ 0.59087</span> で、<span class=\"chem\">arg(5 + 2i) = arctan(2/5) ≈ 0.38051</span> です。最大の <span class=\"chem\">arg(z) ≈ 0.38051 + 0.59087 ≈ 0.971</span> rad です。</p>",
    },

    // ── t1-4-q042 · numeric · exam · AHL · AHL 1.14 · 4 marks
    "t1-4-q042": {
      // EN: Let <span class="chem">w = 0.9 + 0.6i</span>. Find the least positive integer <span class="chem">n</span> for which <span class="chem">|w^n| &gt; 100</span>.
      stem: "<span class=\"chem\">w = 0.9 + 0.6i</span> とする。<span class=\"chem\">|w^n| &gt; 100</span> となる最小の正の整数 <span class=\"chem\">n</span> を求めなさい (Find)。",
      hints: [
        // EN: Decode: by De Moivre, <span class="chem">|w^n| = |w|^n</span>, so this is an exponential inequality in <span class="chem">n</span>, and <span class="chem">n</span> must be a whole number.
        "解読：ド・モアブルの定理より <span class=\"chem\">|w^n| = |w|^n</span> なので、これは <span class=\"chem\">n</span> についての指数不等式で、<span class=\"chem\">n</span> は整数でなければなりません。",
        // EN: <span class="chem">|w| = sqrt(0.81 + 0.36) = sqrt(1.17) ≈ 1.0817</span>. Solve <span class="chem">1.0817^n &gt; 100</span> with logarithms or a GDC table.
        "<span class=\"chem\">|w| = sqrt(0.81 + 0.36) = sqrt(1.17) ≈ 1.0817</span> です。対数か GDC の数表を使って <span class=\"chem\">1.0817^n &gt; 100</span> を解きます。",
      ],
      // EN: <p><span class="chem">|w^n| = |w|^n = (sqrt(1.17))^n</span>. Solve <span class="chem">(sqrt(1.17))^n &gt; 100</span>: <span class="chem">n &gt; ln(100) / ln(sqrt(1.17)) ≈ 58.66</span>. Check: <span class="chem">|w|^{58} ≈ 94.9 &lt; 100</span> and <span class="chem">|w|^{59} ≈ 102.7 &gt; 100</span>. So <span class="chem">n = 59</span>.</p>
      solution: "<p><span class=\"chem\">|w^n| = |w|^n = (sqrt(1.17))^n</span>。<span class=\"chem\">(sqrt(1.17))^n &gt; 100</span> を解くと：<span class=\"chem\">n &gt; ln(100) / ln(sqrt(1.17)) ≈ 58.66</span>。確認：<span class=\"chem\">|w|^{58} ≈ 94.9 &lt; 100</span>、<span class=\"chem\">|w|^{59} ≈ 102.7 &gt; 100</span>。よって <span class=\"chem\">n = 59</span>。</p>",
    },

    // ── t1-4-q043 · short · exam · AHL · AHL 1.12, 1.14 · 7 marks
    "t1-4-q043": {
      // EN: Consider the equation <span class="chem">2z^3 - 5z^2 + 9z - 7 = 0</span>.<br>(a) Find all three roots, giving answers correct to 3 significant figures. [3 marks]<br>(b) Explain why the two non-real roots must be complex conjugates of each other. [1 mark]<br>(c) The three roots are the vertices of a triangle on the Argand diagram. Find the area of the triangle, correct to 3 significant figures. [3 marks]
      stem: "方程式 <span class=\"chem\">2z^3 - 5z^2 + 9z - 7 = 0</span> を考える。<br>(a) 3 つの解をすべて求め (Find)、有効数字 3 桁で答えなさい。 [3 marks]<br>(b) 2 つの実数でない解が互いに共役な複素数でなければならない理由を説明しなさい (Explain)。 [1 mark]<br>(c) 3 つの解は複素数平面上の三角形の頂点である。この三角形の面積を求め (Find)、有効数字 3 桁で答えなさい。 [3 marks]",
      hints: [
        // EN: Use your GDC polynomial solver with coefficients 2, −5, 9, −7.
        "GDC の多項式ソルバーを係数 2, −5, 9, −7 で使います。",
        // EN: The two conjugate roots lie on a vertical line on the Argand diagram, so take that side as the base; the height is the horizontal distance from the real root to that line.
        "2 つの共役な解は複素数平面上で同じ縦の直線上にあるので、その辺を底辺とします。高さは実数解からその直線までの横方向の距離です。",
      ],
      // EN: <p>(a) The GDC gives <span class="chem">z ≈ 1.1900</span> and <span class="chem">z ≈ 0.65498 +- 1.5850i</span>.<br>(b) The coefficients are real, so if <span class="chem">w</span> is a root, then <span class="chem">w^*</span> is a root.<br>(c) Base <span class="chem">= 2 × 1.5850 = 3.1699</span>, height <span class="chem">= 1.1900 - 0.65498 = 0.53505</span>. Area <span class="chem">= (1/2)(3.1699)(0.53505) ≈ 0.848</span>.</p>
      solution: "<p>(a) GDC により <span class=\"chem\">z ≈ 1.1900</span> と <span class=\"chem\">z ≈ 0.65498 +- 1.5850i</span>。<br>(b) 係数が実数なので、<span class=\"chem\">w</span> が解ならば <span class=\"chem\">w^*</span> も解です。<br>(c) 底辺 <span class=\"chem\">= 2 × 1.5850 = 3.1699</span>、高さ <span class=\"chem\">= 1.1900 - 0.65498 = 0.53505</span>。面積 <span class=\"chem\">= (1/2)(3.1699)(0.53505) ≈ 0.848</span>。</p>",
      // EN: <p>(a) <span class="chem">z ≈ 1.19</span> and <span class="chem">z ≈ 0.655 +- 1.58i</span>.<br>(b) The coefficients are all real, so non-real roots occur in conjugate pairs.<br>(c) Area <span class="chem">≈ (1/2)(2 × 1.58496)(1.19003 - 0.65498) ≈ 0.848</span>.</p>
      answer: "<p>(a) <span class=\"chem\">z ≈ 1.19</span> と <span class=\"chem\">z ≈ 0.655 +- 1.58i</span>。<br>(b) 係数がすべて実数なので、実数でない解は共役な組で現れる。<br>(c) 面積 <span class=\"chem\">≈ (1/2)(2 × 1.58496)(1.19003 - 0.65498) ≈ 0.848</span>。</p>",
      markscheme: [
        // EN: A1: Real root z ≈ 1.19.
        "A1：実数解 z ≈ 1.19。",
        // EN: A1: Real part 0.655 of the non-real roots.
        "A1：実数でない解の実部 0.655。",
        // EN: A1: Imaginary parts ±1.58.
        "A1：虚部 ±1.58。",
        // EN: R1: The polynomial has real coefficients, so the conjugate of any root is also a root.
        "R1：多項式の係数は実数なので、任意の解の共役な複素数も解である。",
        // EN: M1: Uses the vertical side between the conjugate roots as base, length 2 × 1.58496 ≈ 3.1699.
        "M1：共役な解の間の縦の辺を底辺とする。長さ 2 × 1.58496 ≈ 3.1699。",
        // EN: M1: Height = horizontal distance from the real root, 1.19003 − 0.65498 ≈ 0.53505.
        "M1：高さ = 実数解からの横方向の距離、1.19003 − 0.65498 ≈ 0.53505。",
        // EN: A1: Area ≈ 0.848.
        "A1：面積 ≈ 0.848。",
      ],
    },

    // ── t1-4-q044 · numeric · challenge · AHL · AHL 1.13, 1.14 · 6 marks
    "t1-4-q044": {
      // EN: A robot starts at a point <span class="chem">O</span> and moves 1 m due east. It then turns <span class="chem">40°</span> anticlockwise and moves 0.9 m. It turns another <span class="chem">40°</span> anticlockwise and moves 0.81 m, and it continues in this way for ever: each move is 90% as long as the one before and points a further <span class="chem">40°</span> anticlockwise. By representing each move as a complex number, find the distance from <span class="chem">O</span> of the point the robot approaches, in metres correct to 3 significant figures.
      stem: "ロボットが点 <span class=\"chem\">O</span> から出発し、真東に 1 m 進む。次に反時計回りに <span class=\"chem\">40°</span> 向きを変えて 0.9 m 進む。さらに反時計回りに <span class=\"chem\">40°</span> 向きを変えて 0.81 m 進み、これを限りなく続ける：各移動の長さは直前の移動の 90% で、向きはさらに反時計回りに <span class=\"chem\">40°</span> 回転する。各移動を複素数で表すことにより、ロボットが近づいていく点と <span class=\"chem\">O</span> との距離をメートルで求め (find)、有効数字 3 桁で答えなさい。",
      hints: [
        // EN: Decode: each move is the previous move multiplied by <span class="chem">w = 0.9 e^{i(2pi/9)}</span> (shrink by 0.9, turn by <span class="chem">40° = 2pi/9</span>). The final position is the sum of all the moves: an infinite geometric series with complex ratio <span class="chem">w</span>.
        "解読：各移動は、直前の移動に <span class=\"chem\">w = 0.9 e^{i(2pi/9)}</span> を掛けたものです（0.9 倍に縮め、<span class=\"chem\">40° = 2pi/9</span> 回転）。最終的な位置はすべての移動の和で、複素数の公比 <span class=\"chem\">w</span> をもつ無限等比級数です。",
        // EN: The series <span class="chem">1 + w + w^2 + …</span> converges because <span class="chem">|w| = 0.9 &lt; 1</span>, and its sum is <span class="chem">1 / (1 - w)</span>.
        "<span class=\"chem\">|w| = 0.9 &lt; 1</span> なので級数 <span class=\"chem\">1 + w + w^2 + …</span> は収束し、その和は <span class=\"chem\">1 / (1 - w)</span> です。",
        // EN: The distance asked for is the modulus <span class="chem">|1 / (1 - w)|</span>. Use radians (or degrees consistently) on the GDC.
        "求める距離は絶対値 <span class=\"chem\">|1 / (1 - w)|</span> です。GDC ではラジアン（または一貫して度）を使いましょう。",
      ],
      // EN: <p><strong>Decode.</strong> A sequence of moves, each a fixed rotation and scaling of the last, is a geometric series with a complex common ratio.<br>Let <span class="chem">w = 0.9 e^{i 2pi/9}</span>. The position after infinitely many moves is <span class="chem">S_infty = 1 + w + w^2 + … = 1 / (1 - w)</span>, valid as <span class="chem">|w| = 0.9 &lt; 1</span>. On the GDC, <span class="chem">1/(1 - w) ≈ 0.72036 + 1.3419i</span>, so the distance from <span class="chem">O</span> is <span class="chem">|S_inf| ≈ 1.52</span> m.</p>
      solution: "<p><strong>解読。</strong> 各移動が直前の移動を一定の角だけ回転・拡大縮小したものである移動の列は、複素数の公比をもつ等比級数です。<br><span class=\"chem\">w = 0.9 e^{i 2pi/9}</span> とします。限りなく移動した後の位置は <span class=\"chem\">S_infty = 1 + w + w^2 + … = 1 / (1 - w)</span> で、<span class=\"chem\">|w| = 0.9 &lt; 1</span> なので成り立ちます。GDC で <span class=\"chem\">1/(1 - w) ≈ 0.72036 + 1.3419i</span> なので、<span class=\"chem\">O</span> からの距離は <span class=\"chem\">|S_inf| ≈ 1.52</span> m です。</p>",
    },

    // ── t1-4-q045 · numeric · exam · AHL · AHL 1.13 · 4 marks
    "t1-4-q045": {
      // EN: Three horizontal forces act on a floating buoy. Measured in newtons and drawn on an Argand diagram, they are <span class="chem">F_1 = 10 e^{0.4 i}</span>, <span class="chem">F_2 = 20 e^{1.3 i}</span> and <span class="chem">F_3 = 30 e^{-0.7 i}</span>. Find the magnitude of the resultant force <span class="chem">F_1 + F_2 + F_3</span>, in newtons correct to 3 significant figures.
      stem: "水に浮かぶブイに 3 つの水平な力がはたらいている。ニュートン単位で測り複素数平面上に表すと、それらは <span class=\"chem\">F_1 = 10 e^{0.4 i}</span>、<span class=\"chem\">F_2 = 20 e^{1.3 i}</span>、<span class=\"chem\">F_3 = 30 e^{-0.7 i}</span> である。合力 <span class=\"chem\">F_1 + F_2 + F_3</span> の大きさをニュートンで求め (Find)、有効数字 3 桁で答えなさい。",
      hints: [
        // EN: Decode: complex numbers add like vectors, so the resultant force is the sum of the three numbers, and its magnitude is the modulus of the sum. You cannot add the moduli 10, 20 and 30.
        "解読：複素数はベクトルと同じように足されるので、合力は 3 つの数の和で、その大きさは和の絶対値です。絶対値 10、20、30 をそのまま足すことはできません。",
        // EN: Convert each force to Cartesian form (radian mode), add the real parts and the imaginary parts, then take the modulus.
        "各力を直交座標形式に変換し（ラジアンモード）、実部どうし・虚部どうしを足してから絶対値をとります。",
      ],
      // EN: <p><span class="chem">F_1 ≈ 9.2106 + 3.8942i</span>, <span class="chem">F_2 ≈ 5.3499 + 19.271i</span>, <span class="chem">F_3 ≈ 22.945 - 19.327i</span>. Sum <span class="chem">≈ 37.506 + 3.8388i</span>, so the magnitude is <span class="chem">sqrt(37.506^2 + 3.8388^2) ≈ 37.7</span> N.</p>
      solution: "<p><span class=\"chem\">F_1 ≈ 9.2106 + 3.8942i</span>、<span class=\"chem\">F_2 ≈ 5.3499 + 19.271i</span>、<span class=\"chem\">F_3 ≈ 22.945 - 19.327i</span>。和は <span class=\"chem\">≈ 37.506 + 3.8388i</span> なので、大きさは <span class=\"chem\">sqrt(37.506^2 + 3.8388^2) ≈ 37.7</span> N です。</p>",
    },

    // ── t1-4-q046 · short · challenge · AHL · AHL 1.12, 1.13 · 8 marks
    "t1-4-q046": {
      // EN: In alternating-current circuits, engineers describe each component by a complex <em>impedance</em>, measured in ohms. When two components with impedances <span class="chem">Z_1</span> and <span class="chem">Z_2</span> are connected in parallel, the total impedance <span class="chem">Z</span> satisfies <span class="chem">1/Z = 1/Z_1 + 1/Z_2</span>. Let <span class="chem">Z_1 = 30 + 40i</span> and <span class="chem">Z_2 = 50 - 20i</span>.<br>(a) Show that <span class="chem">Z = (Z_1 Z_2) / (Z_1 + Z_2)</span>. [1 mark]<br>(b) Find <span class="chem">Z</span> in the form <span class="chem">a + bi</span>, with <span class="chem">a</span> and <span class="chem">b</span> correct to 3 significant figures. [3 marks]<br>(c) The <em>phase angle</em> of the circuit is <span class="chem">arg(Z)</span>. Find <span class="chem">|Z|</span> and the phase angle, in radians, correct to 3 significant figures. [2 marks]<br>(d) The current is <span class="chem">I = V / Z</span>, where the voltage is the real number <span class="chem">V = 230</span>. Find <span class="chem">|I|</span> and <span class="chem">arg(I)</span>, correct to 3 significant figures. [2 marks]
      stem: "交流回路では、技術者は各素子を複素数の<em>インピーダンス</em>（単位はオーム）で表す。インピーダンス <span class=\"chem\">Z_1</span> と <span class=\"chem\">Z_2</span> の 2 つの素子を並列につなぐと、全体のインピーダンス <span class=\"chem\">Z</span> は <span class=\"chem\">1/Z = 1/Z_1 + 1/Z_2</span> を満たす。<span class=\"chem\">Z_1 = 30 + 40i</span>、<span class=\"chem\">Z_2 = 50 - 20i</span> とする。<br>(a) <span class=\"chem\">Z = (Z_1 Z_2) / (Z_1 + Z_2)</span> を示しなさい (Show that)。 [1 mark]<br>(b) <span class=\"chem\">Z</span> を <span class=\"chem\">a + bi</span> の形で求めなさい (Find)。ただし <span class=\"chem\">a</span> と <span class=\"chem\">b</span> は有効数字 3 桁とする。 [3 marks]<br>(c) 回路の<em>位相角</em>は <span class=\"chem\">arg(Z)</span> である。<span class=\"chem\">|Z|</span> と位相角（ラジアン）を求め、有効数字 3 桁で答えなさい。 [2 marks]<br>(d) 電流は <span class=\"chem\">I = V / Z</span> で、電圧は実数 <span class=\"chem\">V = 230</span> である。<span class=\"chem\">|I|</span> と <span class=\"chem\">arg(I)</span> を求め、有効数字 3 桁で答えなさい。 [2 marks]",
      hints: [
        // EN: Decode: the physics is only context. You are asked to combine two complex numbers with a given formula, then find a modulus and an argument. "Phase angle" is just another name for the argument.
        "解読：物理は単なる文脈です。与えられた公式で 2 つの複素数を組み合わせ、絶対値と偏角を求めることが問われています。「位相角」は偏角の別名にすぎません。",
        // EN: For (a), add the two fractions on the right over the common denominator <span class="chem">Z_1 Z_2</span>, then flip both sides.
        "(a) では、右辺の 2 つの分数を共通の分母 <span class=\"chem\">Z_1 Z_2</span> で通分して足し、両辺の逆数をとります。",
        // EN: For (d), dividing by <span class="chem">Z</span> divides the modulus by <span class="chem">|Z|</span> and subtracts <span class="chem">arg(Z)</span>; the argument of the positive real number 230 is 0.
        "(d) では、<span class=\"chem\">Z</span> で割ると絶対値が <span class=\"chem\">|Z|</span> で割られ、<span class=\"chem\">arg(Z)</span> が引かれます。正の実数 230 の偏角は 0 です。",
      ],
      // EN: <p><strong>Decode.</strong> Strip away the context: compute <span class="chem">Z_1 Z_2 / (Z_1 + Z_2)</span>, then its modulus and argument, then divide.<br>(a) <span class="chem">1/Z = (Z_1 + Z_2)/(Z_1 Z_2)</span>, so <span class="chem">Z = Z_1 Z_2 / (Z_1 + Z_2)</span>.<br>(b) <span class="chem">Z_1 Z_2 = 1500 - 600i + 2000i + 800 = 2300 + 1400i</span> and <span class="chem">Z_1 + Z_2 = 80 + 20i</span>. So <span class="chem">Z = (2300 + 1400i)/(80 + 20i) ≈ 31.176 + 9.7059i</span>.<br>(c) <span class="chem">|Z| ≈ 32.7</span> ohms and <span class="chem">arg(Z) = arctan(9.7059/31.176) ≈ 0.302</span> rad.<br>(d) <span class="chem">|I| = 230 / 32.652 ≈ 7.04</span> and <span class="chem">arg(I) = 0 - 0.30181 ≈ -0.302</span> rad.</p>
      solution: "<p><strong>解読。</strong> 文脈を取り除くと：<span class=\"chem\">Z_1 Z_2 / (Z_1 + Z_2)</span> を計算し、次にその絶対値と偏角を求め、最後に割り算をします。<br>(a) <span class=\"chem\">1/Z = (Z_1 + Z_2)/(Z_1 Z_2)</span> なので、<span class=\"chem\">Z = Z_1 Z_2 / (Z_1 + Z_2)</span>。<br>(b) <span class=\"chem\">Z_1 Z_2 = 1500 - 600i + 2000i + 800 = 2300 + 1400i</span>、<span class=\"chem\">Z_1 + Z_2 = 80 + 20i</span>。よって <span class=\"chem\">Z = (2300 + 1400i)/(80 + 20i) ≈ 31.176 + 9.7059i</span>。<br>(c) <span class=\"chem\">|Z| ≈ 32.7</span> オーム、<span class=\"chem\">arg(Z) = arctan(9.7059/31.176) ≈ 0.302</span> rad。<br>(d) <span class=\"chem\">|I| = 230 / 32.652 ≈ 7.04</span>、<span class=\"chem\">arg(I) = 0 - 0.30181 ≈ -0.302</span> rad。</p>",
      // EN: <p>(a) <span class="chem">1/Z = (Z_2 + Z_1)/(Z_1 Z_2)</span>; take reciprocals.<br>(b) <span class="chem">Z = (2300 + 1400i)/(80 + 20i) ≈ 31.2 + 9.71i</span>.<br>(c) <span class="chem">|Z| ≈ 32.7</span> ohms, <span class="chem">arg(Z) ≈ 0.302</span> rad.<br>(d) <span class="chem">|I| = 230/|Z| ≈ 7.04</span>, <span class="chem">arg(I) = -arg(Z) ≈ -0.302</span> rad.</p>
      answer: "<p>(a) <span class=\"chem\">1/Z = (Z_2 + Z_1)/(Z_1 Z_2)</span>。逆数をとる。<br>(b) <span class=\"chem\">Z = (2300 + 1400i)/(80 + 20i) ≈ 31.2 + 9.71i</span>。<br>(c) <span class=\"chem\">|Z| ≈ 32.7</span> オーム、<span class=\"chem\">arg(Z) ≈ 0.302</span> rad。<br>(d) <span class=\"chem\">|I| = 230/|Z| ≈ 7.04</span>、<span class=\"chem\">arg(I) = -arg(Z) ≈ -0.302</span> rad。</p>",
      markscheme: [
        // EN: A1: Combines 1/Z₁ + 1/Z₂ = (Z₁ + Z₂)/(Z₁Z₂) and takes the reciprocal (AG).
        "A1：1/Z₁ + 1/Z₂ = (Z₁ + Z₂)/(Z₁Z₂) とまとめ、逆数をとる (AG)。",
        // EN: A1: Z₁Z₂ = 2300 + 1400i.
        "A1：Z₁Z₂ = 2300 + 1400i。",
        // EN: A1: Z₁ + Z₂ = 80 + 20i.
        "A1：Z₁ + Z₂ = 80 + 20i。",
        // EN: A1: Z ≈ 31.2 + 9.71i (exactly 530/17 + (165/17)i).
        "A1：Z ≈ 31.2 + 9.71i（厳密には 530/17 + (165/17)i）。",
        // EN: A1: |Z| ≈ 32.7.
        "A1：|Z| ≈ 32.7。",
        // EN: A1: arg Z ≈ 0.302.
        "A1：arg Z ≈ 0.302。",
        // EN: A1: |I| = 230/|Z| ≈ 7.04.
        "A1：|I| = 230/|Z| ≈ 7.04。",
        // EN: A1: arg I = arg 230 − arg Z ≈ −0.302.
        "A1：arg I = arg 230 − arg Z ≈ −0.302。",
      ],
    },

    // ── t1-4-q047 · numeric · exam · AHL · AHL 1.14 · 5 marks
    "t1-4-q047": {
      // EN: Exactly one of the four solutions of <span class="chem">z^4 = -5 + 12i</span> lies in the second quadrant of the Argand diagram. Find the real part of this solution, correct to 3 significant figures.
      stem: "<span class=\"chem\">z^4 = -5 + 12i</span> の 4 つの解のうち、ちょうど 1 つが複素数平面の第 2 象限にある。この解の実部を求め (Find)、有効数字 3 桁で答えなさい。",
      hints: [
        // EN: Write <span class="chem">-5 + 12i</span> in modulus-argument form. It is in Quadrant II, so its argument is <span class="chem">pi - arctan(12/5)</span>.
        "<span class=\"chem\">-5 + 12i</span> を極形式で表します。第 2 象限にあるので、偏角は <span class=\"chem\">pi - arctan(12/5)</span> です。",
        // EN: The solutions have modulus <span class="chem">13^{1/4}</span> and arguments <span class="chem">(1.9656 + 2 pi k)/4</span>. The second-quadrant one has an argument between <span class="chem">pi/2</span> and <span class="chem">pi</span>.
        "解の絶対値は <span class=\"chem\">13^{1/4}</span>、偏角は <span class=\"chem\">(1.9656 + 2 pi k)/4</span> です。第 2 象限の解は偏角が <span class=\"chem\">pi/2</span> と <span class=\"chem\">pi</span> の間にあります。",
      ],
      // EN: <p><span class="chem">|-5 + 12i| = 13</span> and <span class="chem">arg(-5 + 12i) = pi - arctan(12/5) ≈ 1.9656</span>. The solutions are <span class="chem">13^{1/4} e^{i(1.9656 + 2 pi k)/4}</span>, with arguments <span class="chem">≈ 0.4914, 2.0622, -2.6502, -1.0794</span>. The second-quadrant solution has argument <span class="chem">2.0622</span>, so its real part is <span class="chem">13^{1/4} cos(2.0622) ≈ -0.896</span>.</p>
      solution: "<p><span class=\"chem\">|-5 + 12i| = 13</span>、<span class=\"chem\">arg(-5 + 12i) = pi - arctan(12/5) ≈ 1.9656</span> です。解は <span class=\"chem\">13^{1/4} e^{i(1.9656 + 2 pi k)/4}</span> で、偏角は <span class=\"chem\">≈ 0.4914, 2.0622, -2.6502, -1.0794</span> です。第 2 象限の解の偏角は <span class=\"chem\">2.0622</span> なので、実部は <span class=\"chem\">13^{1/4} cos(2.0622) ≈ -0.896</span> です。</p>",
    },

    // ── t1-4-q048 · numeric · exam · AHL · AHL 1.13, 1.14 · 5 marks
    "t1-4-q048": {
      // EN: The cubic equation <span class="chem">z^3 + az^2 + bz + c = 0</span>, where <span class="chem">a, b, c ∈ ℝ</span>, has a root <span class="chem">z = 2</span> and a non-real root with modulus 3 and argument <span class="chem">1.1</span>. Find the value of <span class="chem">b</span>, correct to 3 significant figures.
      stem: "3 次方程式 <span class=\"chem\">z^3 + az^2 + bz + c = 0</span>（<span class=\"chem\">a, b, c ∈ ℝ</span>）は、解 <span class=\"chem\">z = 2</span> と、絶対値 3、偏角 <span class=\"chem\">1.1</span> の実数でない解をもつ。<span class=\"chem\">b</span> の値を求め (Find)、有効数字 3 桁で答えなさい。",
      hints: [
        // EN: Decode: real coefficients mean the third root is the conjugate, with modulus 3 and argument <span class="chem">-1.1</span>. Build the cubic from its three roots and read off the coefficient of <span class="chem">z</span>.
        "解読：係数が実数なので、3 つ目の解は共役な複素数で、絶対値 3、偏角 <span class=\"chem\">-1.1</span> です。3 つの解から 3 次式を組み立て、<span class=\"chem\">z</span> の係数を読み取ります。",
        // EN: For the conjugate pair <span class="chem">w = 3 e^{1.1 i}</span> and <span class="chem">w^*</span>: <span class="chem">(z - w)(z - w^*) = z^2 - 2 Re(w) z + |w|^2 = z^2 - 6 cos(1.1) z + 9</span>.
        "共役な組 <span class=\"chem\">w = 3 e^{1.1 i}</span> と <span class=\"chem\">w^*</span> について：<span class=\"chem\">(z - w)(z - w^*) = z^2 - 2 Re(w) z + |w|^2 = z^2 - 6 cos(1.1) z + 9</span>。",
        // EN: Multiply by <span class="chem">(z - 2)</span> and collect the <span class="chem">z</span> terms.
        "<span class=\"chem\">(z - 2)</span> を掛けて <span class=\"chem\">z</span> の項をまとめます。",
      ],
      // EN: <p><strong>Decode.</strong> Use the conjugate root theorem, then rebuild the polynomial.<br>The roots are <span class="chem">2</span>, <span class="chem">3 e^{1.1 i}</span> and <span class="chem">3 e^{-1.1 i}</span>. The conjugate pair gives <span class="chem">z^2 - 6 cos(1.1) z + 9</span>. Then <span class="chem">(z - 2)(z^2 - 6 cos(1.1) z + 9) = z^3 - (2 + 6 cos 1.1) z^2 + (9 + 12 cos 1.1) z - 18</span>. So <span class="chem">b = 9 + 12 cos(1.1) ≈ 14.4</span>.</p>
      solution: "<p><strong>解読。</strong> 共役複素数根の定理を使い、多項式を組み立て直します。<br>解は <span class=\"chem\">2</span>、<span class=\"chem\">3 e^{1.1 i}</span>、<span class=\"chem\">3 e^{-1.1 i}</span> です。共役な組から <span class=\"chem\">z^2 - 6 cos(1.1) z + 9</span> が得られます。すると <span class=\"chem\">(z - 2)(z^2 - 6 cos(1.1) z + 9) = z^3 - (2 + 6 cos 1.1) z^2 + (9 + 12 cos 1.1) z - 18</span> です。よって <span class=\"chem\">b = 9 + 12 cos(1.1) ≈ 14.4</span>。</p>",
    },

    // ── t1-4-q049 · numeric · exam · AHL · AHL 1.14 · 5 marks
    "t1-4-q049": {
      // EN: By De Moivre's theorem for rational exponents, <span class="chem">(2 - i)^{2/3}</span> has three values: the three solutions of <span class="chem">z^3 = (2 - i)^2</span>. Find the real part of the value with the greatest real part, correct to 3 significant figures.
      stem: "有理数の指数に対するド・モアブルの定理により、<span class=\"chem\">(2 - i)^{2/3}</span> は 3 つの値をもつ。それは <span class=\"chem\">z^3 = (2 - i)^2</span> の 3 つの解である。実部が最大である値の実部を求め (Find)、有効数字 3 桁で答えなさい。",
      hints: [
        // EN: First find <span class="chem">(2 - i)^2 = 3 - 4i</span>, then write it in the form <span class="chem">r e^{i theta}</span>.
        "まず <span class=\"chem\">(2 - i)^2 = 3 - 4i</span> を求め、次にそれを <span class=\"chem\">r e^{i theta}</span> の形で表します。",
        // EN: <span class="chem">r = 5</span> and <span class="chem">theta = -arctan(4/3) ≈ -0.9273</span>. The three cube roots have modulus <span class="chem">5^{1/3}</span> and arguments <span class="chem">(-0.9273 + 2 pi k)/3</span>. The one with argument closest to 0 has the greatest real part.
        "<span class=\"chem\">r = 5</span>、<span class=\"chem\">theta = -arctan(4/3) ≈ -0.9273</span> です。3 つの 3 乗根の絶対値は <span class=\"chem\">5^{1/3}</span>、偏角は <span class=\"chem\">(-0.9273 + 2 pi k)/3</span> です。偏角が 0 に最も近いものの実部が最大です。",
      ],
      // EN: <p><span class="chem">(2 - i)^2 = 3 - 4i = 5 e^{-0.92730 i}</span>. The cube roots are <span class="chem">5^{1/3} e^{i(-0.92730 + 2 pi k)/3}</span>, with arguments <span class="chem">≈ -0.30910, 1.7853, -2.4035</span>. The greatest real part comes from the argument <span class="chem">-0.30910</span>: <span class="chem">5^{1/3} cos(-0.30910) ≈ 1.63</span>.</p>
      solution: "<p><span class=\"chem\">(2 - i)^2 = 3 - 4i = 5 e^{-0.92730 i}</span>。3 乗根は <span class=\"chem\">5^{1/3} e^{i(-0.92730 + 2 pi k)/3}</span> で、偏角は <span class=\"chem\">≈ -0.30910, 1.7853, -2.4035</span> です。実部が最大になるのは偏角 <span class=\"chem\">-0.30910</span> のときです：<span class=\"chem\">5^{1/3} cos(-0.30910) ≈ 1.63</span>。</p>",
    },

    // ── t1-4-q050 · short · exam · AHL · AHL 1.14 · 7 marks
    "t1-4-q050": {
      // EN: (a) Use De Moivre's theorem to show that <span class="chem">cos(3 theta) = 4 cos^3 theta - 3 cos theta</span>. [3 marks]<br>(b) Show that the substitution <span class="chem">x = cos theta</span> turns the equation <span class="chem">40x^3 - 30x - 3 = 0</span> into <span class="chem">cos(3 theta) = 0.3</span>. [1 mark]<br>(c) Hence find the three solutions of <span class="chem">40x^3 - 30x - 3 = 0</span>, correct to 3 significant figures. [3 marks]
      stem: "(a) ド・モアブルの定理を用いて、<span class=\"chem\">cos(3 theta) = 4 cos^3 theta - 3 cos theta</span> を示しなさい (Show that)。 [3 marks]<br>(b) 置換 <span class=\"chem\">x = cos theta</span> により、方程式 <span class=\"chem\">40x^3 - 30x - 3 = 0</span> が <span class=\"chem\">cos(3 theta) = 0.3</span> になることを示しなさい。 [1 mark]<br>(c) これを用いて (Hence)、<span class=\"chem\">40x^3 - 30x - 3 = 0</span> の 3 つの解を求め、有効数字 3 桁で答えなさい。 [3 marks]",
      hints: [
        // EN: For (a), take the real part of the binomial expansion of <span class="chem">(cos theta + i sin theta)^3</span>.
        "(a) では、<span class=\"chem\">(cos theta + i sin theta)^3</span> の二項展開の実部をとります。",
        // EN: For (c), <span class="chem">arccos(0.3) ≈ 1.2661</span>. Three different values of <span class="chem">3 theta</span> (adding <span class="chem">2 pi</span> each time) give three different values of <span class="chem">cos theta</span>. You can check them with the GDC polynomial solver.
        "(c) では、<span class=\"chem\">arccos(0.3) ≈ 1.2661</span> です。<span class=\"chem\">3 theta</span> の異なる 3 つの値（毎回 <span class=\"chem\">2 pi</span> を加える）から、<span class=\"chem\">cos theta</span> の異なる 3 つの値が得られます。GDC の多項式ソルバーで確認できます。",
      ],
      // EN: <p>(a) <span class="chem">cos(3 theta) = Re(c + is)^3 = c^3 - 3cs^2 = c^3 - 3c(1 - c^2) = 4c^3 - 3c</span>.<br>(b) <span class="chem">40x^3 - 30x - 3 = 0 &lt;=&gt; 4x^3 - 3x = 0.3 &lt;=&gt; cos(3 theta) = 0.3</span>.<br>(c) <span class="chem">3 theta = 1.2661, 1.2661 + 2pi, 1.2661 + 4pi</span>, so <span class="chem">theta ≈ 0.42203, 2.5164, 4.6108</span> and <span class="chem">x = cos theta ≈ 0.912, -0.811, -0.101</span>. These agree with the GDC polynomial solver.</p>
      solution: "<p>(a) <span class=\"chem\">cos(3 theta) = Re(c + is)^3 = c^3 - 3cs^2 = c^3 - 3c(1 - c^2) = 4c^3 - 3c</span>。<br>(b) <span class=\"chem\">40x^3 - 30x - 3 = 0 &lt;=&gt; 4x^3 - 3x = 0.3 &lt;=&gt; cos(3 theta) = 0.3</span>。<br>(c) <span class=\"chem\">3 theta = 1.2661, 1.2661 + 2pi, 1.2661 + 4pi</span> なので、<span class=\"chem\">theta ≈ 0.42203, 2.5164, 4.6108</span>、<span class=\"chem\">x = cos theta ≈ 0.912, -0.811, -0.101</span> です。これらは GDC の多項式ソルバーの結果と一致します。</p>",
      // EN: <p>(a) <span class="chem">Re(cos theta + i sin theta)^3 = c^3 - 3cs^2 = c^3 - 3c(1 - c^2) = 4c^3 - 3c</span>.<br>(b) Divide by 10: <span class="chem">4x^3 - 3x = 0.3</span>, i.e. <span class="chem">cos(3 theta) = 0.3</span>.<br>(c) <span class="chem">3 theta = arccos(0.3) + 2 pi k</span>, so <span class="chem">x = cos((arccos(0.3) + 2 pi k)/3)</span>: <span class="chem">x ≈ 0.912, -0.811, -0.101</span>.</p>
      answer: "<p>(a) <span class=\"chem\">Re(cos theta + i sin theta)^3 = c^3 - 3cs^2 = c^3 - 3c(1 - c^2) = 4c^3 - 3c</span>。<br>(b) 10 で割ると：<span class=\"chem\">4x^3 - 3x = 0.3</span>、すなわち <span class=\"chem\">cos(3 theta) = 0.3</span>。<br>(c) <span class=\"chem\">3 theta = arccos(0.3) + 2 pi k</span> なので、<span class=\"chem\">x = cos((arccos(0.3) + 2 pi k)/3)</span>：<span class=\"chem\">x ≈ 0.912, -0.811, -0.101</span>。</p>",
      markscheme: [
        // EN: M1: cos 3θ = Re[(cos θ + i sin θ)³], expanded binomially.
        "M1：cos 3θ = Re[(cos θ + i sin θ)³] とし、二項展開する。",
        // EN: A1: cos 3θ = cos³θ − 3cos θ sin²θ.
        "A1：cos 3θ = cos³θ − 3cos θ sin²θ。",
        // EN: A1: Replaces sin²θ = 1 − cos²θ to reach 4cos³θ − 3cos θ (AG).
        "A1：sin²θ = 1 − cos²θ を代入して 4cos³θ − 3cos θ を得る (AG)。",
        // EN: A1: Divides by 10 and recognises 4x³ − 3x = cos 3θ, so cos 3θ = 0.3 (AG).
        "A1：10 で割り、4x³ − 3x = cos 3θ であることに気づき、cos 3θ = 0.3 とする (AG)。",
        // EN: M1: 3θ = arccos(0.3) + 2πk, giving θ ≈ 0.42203, 2.5164, 4.6108.
        "M1：3θ = arccos(0.3) + 2πk より θ ≈ 0.42203、2.5164、4.6108。",
        // EN: A1: One correct root, e.g. x ≈ 0.912.
        "A1：正しい解が 1 つ。例えば x ≈ 0.912。",
        // EN: A1: The other two roots: x ≈ −0.811 and x ≈ −0.101.
        "A1：残りの 2 つの解：x ≈ −0.811 と x ≈ −0.101。",
      ],
    },

    // ── t1-4-q051 · short · challenge · AHL · AHL 1.13, 1.14 · 8 marks
    "t1-4-q051": {
      // EN: Let <span class="chem">S = cos(0.3) + cos(0.6) + cos(0.9) + … + cos(6)</span>, the sum of <span class="chem">cos(0.3k)</span> for <span class="chem">k = 1, 2, …, 20</span>.<br>(a) By writing <span class="chem">cos(0.3k) = Re(e^{0.3ki})</span>, show that <span class="chem">S = Re((e^{0.3i}(1 - e^{6i})) / (1 - e^{0.3i}))</span>. [3 marks]<br>(b) Hence find <span class="chem">S</span>, correct to 3 significant figures. [2 marks]<br>(c) By writing <span class="chem">1 - e^{6i} = e^{3i}(e^{-3i} - e^{3i})</span> and treating <span class="chem">1 - e^{0.3i}</span> in the same way, show that <span class="chem">S = (sin(3) cos(3.15)) / sin(0.15)</span>. [3 marks]
      stem: "<span class=\"chem\">S = cos(0.3) + cos(0.6) + cos(0.9) + … + cos(6)</span>、すなわち <span class=\"chem\">k = 1, 2, …, 20</span> についての <span class=\"chem\">cos(0.3k)</span> の和とする。<br>(a) <span class=\"chem\">cos(0.3k) = Re(e^{0.3ki})</span> と書くことにより、<span class=\"chem\">S = Re((e^{0.3i}(1 - e^{6i})) / (1 - e^{0.3i}))</span> を示しなさい (Show that)。 [3 marks]<br>(b) これを用いて (Hence)、<span class=\"chem\">S</span> を求め、有効数字 3 桁で答えなさい。 [2 marks]<br>(c) <span class=\"chem\">1 - e^{6i} = e^{3i}(e^{-3i} - e^{3i})</span> と書き、<span class=\"chem\">1 - e^{0.3i}</span> も同様に扱うことにより、<span class=\"chem\">S = (sin(3) cos(3.15)) / sin(0.15)</span> を示しなさい。 [3 marks]",
      hints: [
        // EN: Decode: a sum of cosines of an arithmetic sequence of angles is hidden as the real part of a geometric series <span class="chem">z + z^2 + … + z^{20}</span> with <span class="chem">z = e^{0.3i}</span>.
        "解読：等差数列をなす角の cos の和は、等比級数 <span class=\"chem\">z + z^2 + … + z^{20}</span>（<span class=\"chem\">z = e^{0.3i}</span>）の実部として隠れています。",
        // EN: The geometric series formula works for complex ratios too, as long as the ratio is not 1. Note <span class="chem">(e^{0.3i})^{20} = e^{6i}</span>.
        "等比級数の和の公式は、公比が 1 でない限り複素数の公比でも使えます。<span class=\"chem\">(e^{0.3i})^{20} = e^{6i}</span> に注意しましょう。",
        // EN: For (c), <span class="chem">e^{-ix} - e^{ix} = -2i sin x</span>. After cancelling, you should have <span class="chem">(sin 3 / sin 0.15) e^{3.15 i}</span>.
        "(c) では、<span class=\"chem\">e^{-ix} - e^{ix} = -2i sin x</span> です。約分すると <span class=\"chem\">(sin 3 / sin 0.15) e^{3.15 i}</span> となるはずです。",
      ],
      // EN: <p><strong>Decode.</strong> Turn a trig sum into a complex geometric series, sum it, then take the real part.<br>(a) <span class="chem">S = Re(z + z^2 + … + z^{20})</span> with <span class="chem">z = e^{0.3i} != 1</span>. The sum is <span class="chem">z(1 - z^{20})/(1 - z) = e^{0.3i}(1 - e^{6i})/(1 - e^{0.3i})</span>.<br>(b) On the GDC this is <span class="chem">≈ -0.94430 + …i</span>, so <span class="chem">S ≈ -0.944</span> (it agrees with the GDC sum of <span class="chem">cos(0.3k)</span>).<br>(c) <span class="chem">1 - e^{6i} = e^{3i}(-2i sin 3)</span> and <span class="chem">1 - e^{0.3i} = e^{0.15i}(-2i sin 0.15)</span>. So the sum is <span class="chem">e^{0.3i} × (sin 3/sin 0.15) e^{2.85i} = (sin 3/sin 0.15) e^{3.15i}</span>, whose real part is <span class="chem">sin(3) cos(3.15)/sin(0.15)</span>.</p>
      solution: "<p><strong>解読。</strong> 三角関数の和を複素数の等比級数に変え、和を求めてから実部をとります。<br>(a) <span class=\"chem\">z = e^{0.3i} != 1</span> として <span class=\"chem\">S = Re(z + z^2 + … + z^{20})</span>。和は <span class=\"chem\">z(1 - z^{20})/(1 - z) = e^{0.3i}(1 - e^{6i})/(1 - e^{0.3i})</span> です。<br>(b) GDC ではこれは <span class=\"chem\">≈ -0.94430 + …i</span> なので、<span class=\"chem\">S ≈ -0.944</span> です（GDC で <span class=\"chem\">cos(0.3k)</span> の和を直接計算した結果と一致します）。<br>(c) <span class=\"chem\">1 - e^{6i} = e^{3i}(-2i sin 3)</span>、<span class=\"chem\">1 - e^{0.3i} = e^{0.15i}(-2i sin 0.15)</span>。よって和は <span class=\"chem\">e^{0.3i} × (sin 3/sin 0.15) e^{2.85i} = (sin 3/sin 0.15) e^{3.15i}</span> で、その実部は <span class=\"chem\">sin(3) cos(3.15)/sin(0.15)</span> です。</p>",
      // EN: <p>(a) <span class="chem">S = Re(Sigma_{k=1}^{20} (e^{0.3i})^k)</span>, a geometric series with first term and ratio <span class="chem">e^{0.3i} != 1</span>, so the sum is <span class="chem">e^{0.3i}(1 - e^{6i})/(1 - e^{0.3i})</span>.<br>(b) <span class="chem">S ≈ -0.944</span>.<br>(c) <span class="chem">(1 - e^{6i})/(1 - e^{0.3i}) = (e^{3i}(-2i sin 3))/(e^{0.15i}(-2i sin 0.15)) = (sin 3 / sin 0.15) e^{2.85i}</span>; multiply by <span class="chem">e^{0.3i}</span> and take the real part.</p>
      answer: "<p>(a) <span class=\"chem\">S = Re(Sigma_{k=1}^{20} (e^{0.3i})^k)</span>。初項と公比がともに <span class=\"chem\">e^{0.3i} != 1</span> の等比級数なので、和は <span class=\"chem\">e^{0.3i}(1 - e^{6i})/(1 - e^{0.3i})</span>。<br>(b) <span class=\"chem\">S ≈ -0.944</span>。<br>(c) <span class=\"chem\">(1 - e^{6i})/(1 - e^{0.3i}) = (e^{3i}(-2i sin 3))/(e^{0.15i}(-2i sin 0.15)) = (sin 3 / sin 0.15) e^{2.85i}</span>。<span class=\"chem\">e^{0.3i}</span> を掛けて実部をとる。</p>",
      markscheme: [
        // EN: M1: Writes S as the real part of the sum of (e<sup>0.3i</sup>)<sup>k</sup> for k = 1 to 20.
        "M1：S を k = 1 から 20 までの (e<sup>0.3i</sup>)<sup>k</sup> の和の実部として書く。",
        // EN: A1: Recognises a geometric series with first term and ratio e<sup>0.3i</sup>, and that the ratio is not 1.
        "A1：初項と公比がともに e<sup>0.3i</sup> の等比級数であり、公比が 1 でないことに気づく。",
        // EN: A1: Uses S<sub>n</sub> = u₁(1 − r<sup>n</sup>)/(1 − r) with r²⁰ = e<sup>6i</sup> to reach the given form (AG).
        "A1：S<sub>n</sub> = u₁(1 − r<sup>n</sup>)/(1 − r) と r²⁰ = e<sup>6i</sup> を使い、与えられた形を得る (AG)。",
        // EN: A1: Evaluates the complex expression on the GDC (radian mode).
        "A1：GDC で複素数の式を計算する（ラジアンモード）。",
        // EN: A1: S ≈ −0.944.
        "A1：S ≈ −0.944。",
        // EN: M1: Uses e<sup>−ix</sup> − e<sup>ix</sup> = −2i sin x for both numerator and denominator.
        "M1：分子・分母の両方に e<sup>−ix</sup> − e<sup>ix</sup> = −2i sin x を使う。",
        // EN: A1: Ratio = (sin 3/sin 0.15) e<sup>i(3 − 0.15)</sup>.
        "A1：比 = (sin 3/sin 0.15) e<sup>i(3 − 0.15)</sup>。",
        // EN: A1: Multiplies by e<sup>0.3i</sup> to get (sin 3/sin 0.15) e<sup>3.15i</sup>; real part gives S = sin 3 cos 3.15/sin 0.15 (AG).
        "A1：e<sup>0.3i</sup> を掛けて (sin 3/sin 0.15) e<sup>3.15i</sup> を得る。実部から S = sin 3 cos 3.15/sin 0.15 (AG)。",
      ],
    },

    // ── t1-4-q052 · numeric · challenge · AHL · AHL 1.13, 1.14 · 5 marks
    "t1-4-q052": {
      // EN: A point starts at <span class="chem">z_0 = 1</span> on the Argand diagram. Every second its position is multiplied by <span class="chem">w = 0.95 e^{i pi/6}</span>, so after <span class="chem">n</span> seconds it is at <span class="chem">z_n = w^n</span>. Between consecutive positions it moves in a straight line. Find the total length of the path it travels as <span class="chem">n -&gt; infty</span>, correct to 3 significant figures.
      stem: "ある点が複素数平面上の <span class=\"chem\">z_0 = 1</span> から出発する。1 秒ごとにその位置に <span class=\"chem\">w = 0.95 e^{i pi/6}</span> が掛けられるので、<span class=\"chem\">n</span> 秒後には <span class=\"chem\">z_n = w^n</span> にある。連続する位置の間は直線で移動する。<span class=\"chem\">n -&gt; infty</span> のときに点が通る道のりの総和を求め (Find)、有効数字 3 桁で答えなさい。",
      hints: [
        // EN: Decode: the path is made of line segments from <span class="chem">z_n</span> to <span class="chem">z_{n+1}</span>. You need the sum of their lengths, <span class="chem">|z_{n+1} - z_n|</span>, which turns out to be a real geometric series.
        "解読：道のりは <span class=\"chem\">z_n</span> から <span class=\"chem\">z_{n+1}</span> への線分でできています。それらの長さ <span class=\"chem\">|z_{n+1} - z_n|</span> の和が必要で、これは実数の等比級数になります。",
        // EN: <span class="chem">z_{n+1} - z_n = w^n(w - 1)</span>, so its length is <span class="chem">|w|^n |w - 1| = 0.95^n |w - 1|</span>.
        "<span class=\"chem\">z_{n+1} - z_n = w^n(w - 1)</span> なので、その長さは <span class=\"chem\">|w|^n |w - 1| = 0.95^n |w - 1|</span> です。",
        // EN: Sum to infinity: <span class="chem">|w - 1| / (1 - 0.95)</span>. Find <span class="chem">|w - 1|</span> on the GDC.
        "無限級数の和：<span class=\"chem\">|w - 1| / (1 - 0.95)</span>。GDC で <span class=\"chem\">|w - 1|</span> を求めましょう。",
      ],
      // EN: <p><strong>Decode.</strong> The segment lengths form a geometric sequence, so the total length is a sum to infinity.<br>Segment <span class="chem">n</span> has length <span class="chem">|w^{n+1} - w^n| = |w|^n |w - 1| = 0.95^n |w - 1|</span>. With <span class="chem">|w - 1| ≈ 0.50700</span>, the total length is <span class="chem">0.50700 / (1 - 0.95) ≈ 10.1</span>.</p>
      solution: "<p><strong>解読。</strong> 線分の長さは等比数列をなすので、全体の長さは無限級数の和です。<br>線分 <span class=\"chem\">n</span> の長さは <span class=\"chem\">|w^{n+1} - w^n| = |w|^n |w - 1| = 0.95^n |w - 1|</span> です。<span class=\"chem\">|w - 1| ≈ 0.50700</span> なので、全体の長さは <span class=\"chem\">0.50700 / (1 - 0.95) ≈ 10.1</span> です。</p>",
    },

    // ── t1-4-q053 · numeric · exam · AHL · AHL 1.12, 1.13 · 5 marks
    "t1-4-q053": {
      // EN: The point <span class="chem">Z</span>, representing <span class="chem">z = x + yi</span>, is the same distance from the point representing <span class="chem">2i</span> as from the point representing <span class="chem">6</span>, so <span class="chem">|z - 2i| = |z - 6|</span>. Also <span class="chem">|z| = 5</span>. There are two such points. For the one with positive imaginary part, find <span class="chem">arg(z)</span> in radians, correct to 3 significant figures.
      stem: "<span class=\"chem\">z = x + yi</span> を表す点 <span class=\"chem\">Z</span> は、<span class=\"chem\">2i</span> を表す点と <span class=\"chem\">6</span> を表す点から等距離にあるので、<span class=\"chem\">|z - 2i| = |z - 6|</span> である。また <span class=\"chem\">|z| = 5</span> である。このような点は 2 つある。虚部が正である方について、<span class=\"chem\">arg(z)</span> をラジアンで求め (find)、有効数字 3 桁で答えなさい。",
      hints: [
        // EN: Decode: "the same distance from two points" is the perpendicular bisector of the two points, a straight line; <span class="chem">|z| = 5</span> is a circle. Find where they meet.
        "解読：「2 点から等距離」はその 2 点の垂直二等分線で、直線です。<span class=\"chem\">|z| = 5</span> は円です。それらの交点を求めましょう。",
        // EN: Square both sides of <span class="chem">|z - 2i| = |z - 6|</span>: <span class="chem">x^2 + (y - 2)^2 = (x - 6)^2 + y^2</span>, which simplifies to <span class="chem">y = 3x - 8</span>.
        "<span class=\"chem\">|z - 2i| = |z - 6|</span> の両辺を 2 乗すると：<span class=\"chem\">x^2 + (y - 2)^2 = (x - 6)^2 + y^2</span> となり、整理すると <span class=\"chem\">y = 3x - 8</span> です。",
        // EN: Substitute into <span class="chem">x^2 + y^2 = 25</span> to get <span class="chem">10x^2 - 48x + 39 = 0</span>, and solve on the GDC.
        "<span class=\"chem\">x^2 + y^2 = 25</span> に代入して <span class=\"chem\">10x^2 - 48x + 39 = 0</span> を得て、GDC で解きます。",
      ],
      // EN: <p><span class="chem">x^2 + (y - 2)^2 = (x - 6)^2 + y^2</span> gives <span class="chem">-4y + 4 = -12x + 36</span>, i.e. <span class="chem">y = 3x - 8</span>. With <span class="chem">x^2 + y^2 = 25</span>: <span class="chem">10x^2 - 48x + 39 = 0</span>, so <span class="chem">x ≈ 3.7638</span> or <span class="chem">x ≈ 1.0362</span>. These give <span class="chem">y ≈ 3.2915</span> and <span class="chem">y ≈ -4.8915</span>. The point with <span class="chem">y &gt; 0</span> is <span class="chem">3.7638 + 3.2915i</span>, with <span class="chem">arg(z) = arctan(3.2915/3.7638) ≈ 0.719</span> rad.</p>
      solution: "<p><span class=\"chem\">x^2 + (y - 2)^2 = (x - 6)^2 + y^2</span> から <span class=\"chem\">-4y + 4 = -12x + 36</span>、すなわち <span class=\"chem\">y = 3x - 8</span> です。<span class=\"chem\">x^2 + y^2 = 25</span> と合わせると：<span class=\"chem\">10x^2 - 48x + 39 = 0</span> なので、<span class=\"chem\">x ≈ 3.7638</span> または <span class=\"chem\">x ≈ 1.0362</span> です。これらから <span class=\"chem\">y ≈ 3.2915</span> と <span class=\"chem\">y ≈ -4.8915</span> が得られます。<span class=\"chem\">y &gt; 0</span> である点は <span class=\"chem\">3.7638 + 3.2915i</span> で、<span class=\"chem\">arg(z) = arctan(3.2915/3.7638) ≈ 0.719</span> rad です。</p>",
    },

    // ── t1-4-q054 · numeric · challenge · AHL · AHL 1.14 · 6 marks
    "t1-4-q054": {
      // EN: The six solutions of <span class="chem">z^6 + z^3 + 1 = 0</span> are the vertices of a hexagon on the Argand diagram. Find the area of this hexagon, correct to 3 significant figures.
      stem: "<span class=\"chem\">z^6 + z^3 + 1 = 0</span> の 6 つの解は複素数平面上の六角形の頂点である。この六角形の面積を求め (Find)、有効数字 3 桁で答えなさい。",
      hints: [
        // EN: Decode: the equation is a quadratic in disguise. Put <span class="chem">u = z^3</span>, solve <span class="chem">u^2 + u + 1 = 0</span>, then take cube roots. The hexagon is not regular, so check the angles between neighbouring vertices.
        "解読：この方程式は形を変えた 2 次方程式です。<span class=\"chem\">u = z^3</span> とおいて <span class=\"chem\">u^2 + u + 1 = 0</span> を解き、それから 3 乗根をとります。六角形は正六角形ではないので、隣り合う頂点の間の角を確認しましょう。",
        // EN: <span class="chem">u = e^{+- 2pi i/3}</span>, so every solution has modulus 1. The arguments are <span class="chem">(+- 2pi/3 + 2pi k)/3</span>: in degrees <span class="chem">+- 40°, +- 160°, +- 280°</span>, that is <span class="chem">40°, 80°, 160°, 200°, 280°, 320°</span>.
        "<span class=\"chem\">u = e^{+- 2pi i/3}</span> なので、どの解も絶対値は 1 です。偏角は <span class=\"chem\">(+- 2pi/3 + 2pi k)/3</span> で、度で表すと <span class=\"chem\">+- 40°, +- 160°, +- 280°</span>、すなわち <span class=\"chem\">40°, 80°, 160°, 200°, 280°, 320°</span> です。",
        // EN: Split the hexagon into six triangles at the origin. Neighbouring vertices are <span class="chem">40°</span> or <span class="chem">80°</span> apart, alternately, and each triangle has area <span class="chem">(1/2)(1)(1) sin(angle)</span>.
        "六角形を原点で 6 つの三角形に分けます。隣り合う頂点は <span class=\"chem\">40°</span> と <span class=\"chem\">80°</span> が交互に離れていて、各三角形の面積は <span class=\"chem\">(1/2)(1)(1) sin(angle)</span> です。",
      ],
      // EN: <p><strong>Decode.</strong> Treat the sextic as a quadratic in <span class="chem">z^3</span>, then use roots of complex numbers.<br><span class="chem">z^3 = (-1 +- sqrt(3)i)/2 = e^{+- 2 pi i/3}</span>. The solutions lie on the unit circle at <span class="chem">40°, 80°, 160°, 200°, 280°, 320°</span>. The angular gaps are <span class="chem">40°, 80°, 40°, 80°, 40°, 80°</span>, so the area is <span class="chem">3 × (1/2)(sin 40° + sin 80°) ≈ 3 × 0.5 × (0.64279 + 0.98481) ≈ 2.44</span>.</p>
      solution: "<p><strong>解読。</strong> 6 次方程式を <span class=\"chem\">z^3</span> についての 2 次方程式とみなし、複素数の累乗根を使います。<br><span class=\"chem\">z^3 = (-1 +- sqrt(3)i)/2 = e^{+- 2 pi i/3}</span>。解は単位円上の <span class=\"chem\">40°, 80°, 160°, 200°, 280°, 320°</span> にあります。角の間隔は <span class=\"chem\">40°, 80°, 40°, 80°, 40°, 80°</span> なので、面積は <span class=\"chem\">3 × (1/2)(sin 40° + sin 80°) ≈ 3 × 0.5 × (0.64279 + 0.98481) ≈ 2.44</span> です。</p>",
    },

    // ── t1-4-q055 · numeric · exam · AHL · AHL 1.14 · 4 marks
    "t1-4-q055": {
      // EN: The complex number <span class="chem">z</span> has <span class="chem">|z| = 2</span> and <span class="chem">0 &lt; arg(z) &lt; pi/6</span>. Given that <span class="chem">Re(z^3) = 5</span>, find <span class="chem">arg(z)</span>, in radians correct to 3 significant figures.
      stem: "複素数 <span class=\"chem\">z</span> は <span class=\"chem\">|z| = 2</span> かつ <span class=\"chem\">0 &lt; arg(z) &lt; pi/6</span> を満たす。<span class=\"chem\">Re(z^3) = 5</span> であるとき、<span class=\"chem\">arg(z)</span> をラジアンで求め (find)、有効数字 3 桁で答えなさい。",
      hints: [
        // EN: Write <span class="chem">z = 2 e^{i theta}</span>. By De Moivre, <span class="chem">z^3 = 8 e^{3 i theta}</span>, so <span class="chem">Re(z^3) = 8 cos(3 theta)</span>.
        "<span class=\"chem\">z = 2 e^{i theta}</span> と書きます。ド・モアブルの定理より <span class=\"chem\">z^3 = 8 e^{3 i theta}</span> なので、<span class=\"chem\">Re(z^3) = 8 cos(3 theta)</span> です。",
        // EN: Solve <span class="chem">cos(3 theta) = 5/8</span> with <span class="chem">0 &lt; 3 theta &lt; pi/2</span>.
        "<span class=\"chem\">0 &lt; 3 theta &lt; pi/2</span> の範囲で <span class=\"chem\">cos(3 theta) = 5/8</span> を解きます。",
      ],
      // EN: <p><span class="chem">z^3 = 8(cos(3 theta) + i sin(3 theta))</span>, so <span class="chem">8 cos(3 theta) = 5</span>. As <span class="chem">0 &lt; 3 theta &lt; pi/2</span>, <span class="chem">3 theta = arccos(0.625) ≈ 0.89566</span>, so <span class="chem">theta ≈ 0.299</span>.</p>
      solution: "<p><span class=\"chem\">z^3 = 8(cos(3 theta) + i sin(3 theta))</span> なので、<span class=\"chem\">8 cos(3 theta) = 5</span> です。<span class=\"chem\">0 &lt; 3 theta &lt; pi/2</span> なので <span class=\"chem\">3 theta = arccos(0.625) ≈ 0.89566</span>、よって <span class=\"chem\">theta ≈ 0.299</span> です。</p>",
    },

    // ── t1-4-q056 · numeric · challenge · AHL · AHL 1.13 · 5 marks
    "t1-4-q056": {
      // EN: For <span class="chem">0 &lt; theta &lt; pi</span>, let <span class="chem">w = 1 + 2 e^{i theta}</span>. On the Argand diagram, <span class="chem">w</span> is reached by walking 1 unit along the positive real axis and then 2 units at angle <span class="chem">theta</span>. Find the value of <span class="chem">theta</span> for which <span class="chem">arg(w) = 1</span>, correct to 3 significant figures.
      stem: "<span class=\"chem\">0 &lt; theta &lt; pi</span> に対して <span class=\"chem\">w = 1 + 2 e^{i theta}</span> とする。複素数平面上で、<span class=\"chem\">w</span> は実軸の正の向きに 1 進み、続いて角 <span class=\"chem\">theta</span> の向きに 2 進むことで到達する点である。<span class=\"chem\">arg(w) = 1</span> となる <span class=\"chem\">theta</span> の値を求め (Find)、有効数字 3 桁で答えなさい。",
      hints: [
        // EN: Decode: you need the argument of a <em>sum</em>, which is not the sum of the arguments. Write <span class="chem">w</span> in Cartesian form and set up an equation in <span class="chem">theta</span> that the GDC can solve.
        "解読：<em>和</em>の偏角が必要ですが、それは偏角の和ではありません。<span class=\"chem\">w</span> を直交座標形式で表し、GDC で解ける <span class=\"chem\">theta</span> の方程式を立てましょう。",
        // EN: <span class="chem">w = (1 + 2 cos theta) + 2i sin theta</span>. Since <span class="chem">arg(w) = 1</span> is in Quadrant I, you need <span class="chem">2 sin theta / (1 + 2 cos theta) = tan 1</span> with <span class="chem">1 + 2 cos theta &gt; 0</span>.
        "<span class=\"chem\">w = (1 + 2 cos theta) + 2i sin theta</span> です。<span class=\"chem\">arg(w) = 1</span> は第 1 象限なので、<span class=\"chem\">1 + 2 cos theta &gt; 0</span> のもとで <span class=\"chem\">2 sin theta / (1 + 2 cos theta) = tan 1</span> が必要です。",
        // EN: Graph <span class="chem">y = arg(1 + 2e^{ix})</span> (or the tangent equation) for <span class="chem">0 &lt; x &lt; pi</span> and find where it equals 1.
        "<span class=\"chem\">0 &lt; x &lt; pi</span> で <span class=\"chem\">y = arg(1 + 2e^{ix})</span>（または正接の方程式）のグラフをかき、値が 1 になるところを求めます。",
      ],
      // EN: <p><strong>Decode.</strong> Sums must be done in Cartesian form; only then can you take an argument.<br><span class="chem">w = (1 + 2 cos theta) + 2i sin theta</span>. <span class="chem">arg(w) = 1</span> needs <span class="chem">1 + 2 cos theta &gt; 0</span> and <span class="chem">2 sin theta = tan(1)(1 + 2 cos theta)</span>. The GDC gives <span class="chem">theta ≈ 1.43</span> (check: <span class="chem">1 + 2 cos(1.4343) ≈ 1.272 &gt; 0</span>). As <span class="chem">theta</span> increases from 0 to <span class="chem">pi</span>, <span class="chem">arg(w)</span> increases from 0 to <span class="chem">pi</span>, so this is the only solution.</p>
      solution: "<p><strong>解読。</strong> 和は直交座標形式で計算しなければなりません。偏角をとるのはその後です。<br><span class=\"chem\">w = (1 + 2 cos theta) + 2i sin theta</span>。<span class=\"chem\">arg(w) = 1</span> となるには <span class=\"chem\">1 + 2 cos theta &gt; 0</span> かつ <span class=\"chem\">2 sin theta = tan(1)(1 + 2 cos theta)</span> が必要です。GDC により <span class=\"chem\">theta ≈ 1.43</span>（確認：<span class=\"chem\">1 + 2 cos(1.4343) ≈ 1.272 &gt; 0</span>）。<span class=\"chem\">theta</span> が 0 から <span class=\"chem\">pi</span> まで増加すると <span class=\"chem\">arg(w)</span> は 0 から <span class=\"chem\">pi</span> まで増加するので、これが唯一の解です。</p>",
    },

    // ── t1-4-q057 · short · exam · AHL · AHL 1.14 · 17 marks
    "t1-4-q057": {
      // EN: This investigation looks at sums of powers of the <span class="chem">n</span>-th roots of unity. For an integer <span class="chem">n &gt;= 2</span>, let <span class="chem">omega = e^{2 pi i / n}</span> and, for <span class="chem">m ∈ ℤ^+</span>, let <span class="chem">S(n, m) = 1 + omega^m + omega^{2m} + … + omega^{(n-1)m}</span>.<br>(a) For <span class="chem">n = 4</span>, <span class="chem">omega = i</span>. Write down <span class="chem">S(4, m)</span> for <span class="chem">m = 1, 2, 3, 4</span>. [2 marks]<br>(b) Use your GDC to find <span class="chem">S(6, m)</span> for <span class="chem">m = 1, 2, …, 6</span>. [2 marks]<br>(c) Conjecture a formula for <span class="chem">S(n, m)</span> in terms of <span class="chem">n</span> and <span class="chem">m</span>. [2 marks]<br>(d) Prove your conjecture: (i) when <span class="chem">n</span> divides <span class="chem">m</span>; [2 marks] (ii) when <span class="chem">n</span> does not divide <span class="chem">m</span>. [3 marks]<br>(e) By writing <span class="chem">cos^2 x = 1/2 + (1/4)(e^{2ix} + e^{-2ix})</span>, show that <span class="chem">Sigma_{k=0}^{n-1} cos^2(2 pi k / n) = n/2</span> for <span class="chem">n &gt;= 3</span>. [4 marks]<br>(f) Explain why the result of (e) is not true for <span class="chem">n = 2</span>, and find the correct value of the sum when <span class="chem">n = 2</span>. [2 marks]
      stem: "この探究では、1 の <span class=\"chem\">n</span> 乗根の累乗の和を調べる。整数 <span class=\"chem\">n &gt;= 2</span> に対して <span class=\"chem\">omega = e^{2 pi i / n}</span> とし、<span class=\"chem\">m ∈ ℤ^+</span> に対して <span class=\"chem\">S(n, m) = 1 + omega^m + omega^{2m} + … + omega^{(n-1)m}</span> とする。<br>(a) <span class=\"chem\">n = 4</span> のとき <span class=\"chem\">omega = i</span> である。<span class=\"chem\">m = 1, 2, 3, 4</span> について <span class=\"chem\">S(4, m)</span> を書きなさい (Write down)。 [2 marks]<br>(b) GDC を使って、<span class=\"chem\">m = 1, 2, …, 6</span> について <span class=\"chem\">S(6, m)</span> を求めなさい (Find)。 [2 marks]<br>(c) <span class=\"chem\">n</span> と <span class=\"chem\">m</span> を用いて <span class=\"chem\">S(n, m)</span> の公式を予想しなさい (Conjecture)。 [2 marks]<br>(d) 予想を証明しなさい (Prove)：(i) <span class=\"chem\">n</span> が <span class=\"chem\">m</span> を割り切るとき。 [2 marks] (ii) <span class=\"chem\">n</span> が <span class=\"chem\">m</span> を割り切らないとき。 [3 marks]<br>(e) <span class=\"chem\">cos^2 x = 1/2 + (1/4)(e^{2ix} + e^{-2ix})</span> と書くことにより、<span class=\"chem\">n &gt;= 3</span> に対して <span class=\"chem\">Sigma_{k=0}^{n-1} cos^2(2 pi k / n) = n/2</span> を示しなさい (Show that)。 [4 marks]<br>(f) (e) の結果が <span class=\"chem\">n = 2</span> では成り立たない理由を説明し (Explain)、<span class=\"chem\">n = 2</span> のときの和の正しい値を求めなさい。 [2 marks]",
      hints: [
        // EN: Decode: this is a guided pattern-to-proof investigation. Each <span class="chem">S(n, m)</span> is a geometric series with ratio <span class="chem">omega^m</span>; the key question is whether that ratio equals 1.
        "解読：これは規則性の発見から証明へと導く探究です。各 <span class=\"chem\">S(n, m)</span> は公比 <span class=\"chem\">omega^m</span> の等比級数で、要点はその公比が 1 に等しいかどうかです。",
        // EN: For (b), on the GDC use <span class="mono">sum(e^(2πi·k·m/6), k, 0, 5)</span>. Tiny values such as <span class="chem">2 × 10^{-13}</span> are rounding errors for 0.
        "(b) では、GDC で <span class=\"mono\">sum(e^(2πi·k·m/6), k, 0, 5)</span> を使います。<span class=\"chem\">2 × 10^{-13}</span> のようなごく小さい値は 0 の丸め誤差です。",
        // EN: For (d)(ii), the formula <span class="chem">(1 - r^n)/(1 - r)</span> needs <span class="chem">r != 1</span>. Here <span class="chem">r = omega^m</span> and <span class="chem">r^n = (omega^n)^m</span>.
        "(d)(ii) では、公式 <span class=\"chem\">(1 - r^n)/(1 - r)</span> には <span class=\"chem\">r != 1</span> が必要です。ここで <span class=\"chem\">r = omega^m</span>、<span class=\"chem\">r^n = (omega^n)^m</span> です。",
        // EN: For (e), the terms with <span class="chem">e^{2ix}</span> give <span class="chem">S(n, 2)</span>; the terms with <span class="chem">e^{-2ix}</span> give its complex conjugate. When is <span class="chem">S(n, 2)</span> zero?
        "(e) では、<span class=\"chem\">e^{2ix}</span> を含む項から <span class=\"chem\">S(n, 2)</span> が得られ、<span class=\"chem\">e^{-2ix}</span> を含む項からはその共役な複素数が得られます。<span class=\"chem\">S(n, 2)</span> が 0 になるのはどんなときでしょうか？",
      ],
      // EN: <p><strong>Decode.</strong> Each sum is a finite geometric series with ratio <span class="chem">omega^m</span>; everything depends on whether <span class="chem">omega^m = 1</span>.<br>(a) <span class="chem">S(4, 1) = 1 + i - 1 - i = 0</span>, <span class="chem">S(4, 2) = 1 - 1 + 1 - 1 = 0</span>, <span class="chem">S(4, 3) = 1 - i - 1 + i = 0</span>, <span class="chem">S(4, 4) = 4</span>.<br>(b) The GDC gives <span class="chem">0</span> for <span class="chem">m = 1, …, 5</span> and <span class="chem">6</span> for <span class="chem">m = 6</span>.<br>(c) <span class="chem">S(n, m) = n</span> if <span class="chem">n | m</span>, otherwise <span class="chem">0</span>.<br>(d)(i) <span class="chem">m = qn =&gt; omega^m = e^{2 pi i q} = 1</span>, so all <span class="chem">n</span> terms are 1. (ii) <span class="chem">omega^m = e^{2 pi i m/n} != 1</span> since <span class="chem">m/n ∉ ℤ</span>; then <span class="chem">S = (1 - (omega^m)^n)/(1 - omega^m) = (1 - (omega^n)^m)/(1 - omega^m) = 0</span>.<br>(e) With <span class="chem">x = 2 pi k / n</span>, <span class="chem">e^{2ix} = omega^{2k}</span>. Summing: <span class="chem">n/2 + (1/4)(S(n, 2) + S(n, 2)^*)</span>. For <span class="chem">n &gt;= 3</span>, <span class="chem">n</span> does not divide 2, so <span class="chem">S(n, 2) = 0</span> and the sum is <span class="chem">n/2</span>.<br>(f) For <span class="chem">n = 2</span>, <span class="chem">S(2, 2) = 2</span>, so the sum is <span class="chem">1 + (1/4)(4) = 2</span>, not <span class="chem">n/2 = 1</span>.</p>
      solution: "<p><strong>解読。</strong> どの和も公比 <span class=\"chem\">omega^m</span> の有限等比級数で、すべては <span class=\"chem\">omega^m = 1</span> かどうかで決まります。<br>(a) <span class=\"chem\">S(4, 1) = 1 + i - 1 - i = 0</span>、<span class=\"chem\">S(4, 2) = 1 - 1 + 1 - 1 = 0</span>、<span class=\"chem\">S(4, 3) = 1 - i - 1 + i = 0</span>、<span class=\"chem\">S(4, 4) = 4</span>。<br>(b) GDC により、<span class=\"chem\">m = 1, …, 5</span> では <span class=\"chem\">0</span>、<span class=\"chem\">m = 6</span> では <span class=\"chem\">6</span> です。<br>(c) <span class=\"chem\">n | m</span> ならば <span class=\"chem\">S(n, m) = n</span>、そうでなければ <span class=\"chem\">0</span>。<br>(d)(i) <span class=\"chem\">m = qn =&gt; omega^m = e^{2 pi i q} = 1</span> なので、<span class=\"chem\">n</span> 個の項はすべて 1 です。(ii) <span class=\"chem\">m/n ∉ ℤ</span> なので <span class=\"chem\">omega^m = e^{2 pi i m/n} != 1</span> です。すると <span class=\"chem\">S = (1 - (omega^m)^n)/(1 - omega^m) = (1 - (omega^n)^m)/(1 - omega^m) = 0</span>。<br>(e) <span class=\"chem\">x = 2 pi k / n</span> とすると <span class=\"chem\">e^{2ix} = omega^{2k}</span> です。和をとると：<span class=\"chem\">n/2 + (1/4)(S(n, 2) + S(n, 2)^*)</span>。<span class=\"chem\">n &gt;= 3</span> では <span class=\"chem\">n</span> は 2 を割り切らないので <span class=\"chem\">S(n, 2) = 0</span> となり、和は <span class=\"chem\">n/2</span> です。<br>(f) <span class=\"chem\">n = 2</span> では <span class=\"chem\">S(2, 2) = 2</span> なので、和は <span class=\"chem\">n/2 = 1</span> ではなく <span class=\"chem\">1 + (1/4)(4) = 2</span> です。</p>",
      // EN: <p>(a) <span class="chem">0, 0, 0, 4</span>.<br>(b) <span class="chem">0, 0, 0, 0, 0, 6</span>.<br>(c) <span class="chem">S(n, m) = n</span> if <span class="chem">n</span> divides <span class="chem">m</span>, and <span class="chem">S(n, m) = 0</span> otherwise.<br>(d)(i) If <span class="chem">m = qn</span> then <span class="chem">omega^m = e^{2 pi i q} = 1</span>, so every term is 1 and <span class="chem">S = n</span>. (ii) Otherwise <span class="chem">omega^m != 1</span>, so <span class="chem">S = (1 - omega^{mn})/(1 - omega^m) = 0</span> because <span class="chem">omega^{mn} = (omega^n)^m = 1</span>.<br>(e) The sum is <span class="chem">n/2 + (1/4)(S(n, 2) + S(n, 2)^*)</span>, and <span class="chem">S(n, 2) = 0</span> for <span class="chem">n &gt;= 3</span>.<br>(f) For <span class="chem">n = 2</span>, <span class="chem">n</span> divides 2, so <span class="chem">S(2, 2) = 2</span> and the sum is <span class="chem">cos^2 0 + cos^2 pi = 2</span>.</p>
      answer: "<p>(a) <span class=\"chem\">0, 0, 0, 4</span>。<br>(b) <span class=\"chem\">0, 0, 0, 0, 0, 6</span>。<br>(c) <span class=\"chem\">n</span> が <span class=\"chem\">m</span> を割り切るならば <span class=\"chem\">S(n, m) = n</span>、そうでなければ <span class=\"chem\">S(n, m) = 0</span>。<br>(d)(i) <span class=\"chem\">m = qn</span> ならば <span class=\"chem\">omega^m = e^{2 pi i q} = 1</span> なので、すべての項が 1 で <span class=\"chem\">S = n</span>。(ii) そうでなければ <span class=\"chem\">omega^m != 1</span> なので、<span class=\"chem\">omega^{mn} = (omega^n)^m = 1</span> であるから <span class=\"chem\">S = (1 - omega^{mn})/(1 - omega^m) = 0</span>。<br>(e) 和は <span class=\"chem\">n/2 + (1/4)(S(n, 2) + S(n, 2)^*)</span> で、<span class=\"chem\">n &gt;= 3</span> に対して <span class=\"chem\">S(n, 2) = 0</span>。<br>(f) <span class=\"chem\">n = 2</span> では <span class=\"chem\">n</span> は 2 を割り切るので <span class=\"chem\">S(2, 2) = 2</span> となり、和は <span class=\"chem\">cos^2 0 + cos^2 pi = 2</span>。</p>",
      markscheme: [
        // EN: A1: S(4, 1) = S(4, 2) = S(4, 3) = 0.
        "A1：S(4, 1) = S(4, 2) = S(4, 3) = 0。",
        // EN: A1: S(4, 4) = 4.
        "A1：S(4, 4) = 4。",
        // EN: A1: S(6, m) = 0 for m = 1, …, 5 (GDC values like 1e-13 read as 0).
        "A1：m = 1, …, 5 に対して S(6, m) = 0（GDC の 1e-13 のような値は 0 と読む）。",
        // EN: A1: S(6, 6) = 6.
        "A1：S(6, 6) = 6。",
        // EN: A1: S(n, m) = n when n divides m.
        "A1：n が m を割り切るとき S(n, m) = n。",
        // EN: A1: S(n, m) = 0 when n does not divide m.
        "A1：n が m を割り切らないとき S(n, m) = 0。",
        // EN: M1: If m = qn, then ω<sup>m</sup> = e<sup>2πiq</sup> = 1.
        "M1：m = qn ならば ω<sup>m</sup> = e<sup>2πiq</sup> = 1。",
        // EN: A1: Every one of the n terms equals 1, so S(n, m) = n.
        "A1：n 個の項がすべて 1 に等しいので S(n, m) = n。",
        // EN: M1: If n does not divide m, ω<sup>m</sup> ≠ 1, so the geometric series formula applies with ratio ω<sup>m</sup>.
        "M1：n が m を割り切らないならば ω<sup>m</sup> ≠ 1 なので、公比 ω<sup>m</sup> の等比級数の和の公式が使える。",
        // EN: A1: S(n, m) = (1 − ω<sup>mn</sup>)/(1 − ω<sup>m</sup>).
        "A1：S(n, m) = (1 − ω<sup>mn</sup>)/(1 − ω<sup>m</sup>)。",
        // EN: R1: ω<sup>mn</sup> = (ω<sup>n</sup>)<sup>m</sup> = 1, so S(n, m) = 0.
        "R1：ω<sup>mn</sup> = (ω<sup>n</sup>)<sup>m</sup> = 1 なので S(n, m) = 0。",
        // EN: M1: Sums the given expression over k: n/2 + ¼ Σ(ω<sup>2k</sup> + ω<sup>−2k</sup>).
        "M1：与えられた式を k について足す：n/2 + ¼ Σ(ω<sup>2k</sup> + ω<sup>−2k</sup>)。",
        // EN: A1: Identifies Σω<sup>2k</sup> = S(n, 2) and Σω<sup>−2k</sup> as its conjugate (or S(n, n − 2) with n − 2 ≥ 1, i.e. n ≥ 3).
        "A1：Σω<sup>2k</sup> = S(n, 2) で、Σω<sup>−2k</sup> がその共役であることを見抜く（または S(n, n − 2)、ただし n − 2 ≥ 1、すなわち n ≥ 3）。",
        // EN: R1: For n ≥ 3, n does not divide 2 (nor n − 2), so both sums are 0.
        "R1：n ≥ 3 では n は 2 を（n − 2 も）割り切らないので、両方の和は 0。",
        // EN: A1: Total n/2 (AG).
        "A1：合計 n/2 (AG)。",
        // EN: R1: For n = 2, n divides 2, so S(2, 2) = 2 ≠ 0.
        "R1：n = 2 では n は 2 を割り切るので S(2, 2) = 2 ≠ 0。",
        // EN: A1: The sum is ½ × 2 + ¼(2 + 2) = 2 (check: cos²0 + cos²π = 2).
        "A1：和は ½ × 2 + ¼(2 + 2) = 2（確認：cos²0 + cos²π = 2）。",
      ],
    },

    // ── t1-4-q058 · short · challenge · AHL · AHL 1.14 · 18 marks
    "t1-4-q058": {
      // EN: This investigation looks at writing <span class="chem">cos(n theta)</span> as a polynomial in <span class="chem">cos theta</span>. For <span class="chem">n ∈ ℕ</span>, let <span class="chem">T_n</span> be the polynomial with <span class="chem">cos(n theta) = T_n(cos theta)</span> for all <span class="chem">theta</span>.<br>(a) Write down <span class="chem">T_1(x)</span> and <span class="chem">T_2(x)</span>. [2 marks]<br>(b) Use De Moivre's theorem to show that <span class="chem">T_3(x) = 4x^3 - 3x</span>. [3 marks]<br>(c) By considering <span class="chem">e^{i(n+1)theta} + e^{i(n-1)theta}</span>, show that <span class="chem">cos((n + 1)theta) + cos((n - 1)theta) = 2 cos theta cos(n theta)</span>, and deduce that <span class="chem">T_{n+1}(x) = 2x T_n(x) - T_{n-1}(x)</span> for <span class="chem">n &gt;= 1</span>. [3 marks]<br>(d) Hence find <span class="chem">T_4(x)</span> and <span class="chem">T_5(x)</span>. [2 marks]<br>(e) Conjecture the leading coefficient of <span class="chem">T_n(x)</span> for <span class="chem">n &gt;= 1</span>, and explain how the result of (c) supports your conjecture. [2 marks]<br>(f) (i) By putting <span class="chem">x = cos theta</span>, find the five solutions of <span class="chem">32x^5 - 40x^3 + 10x - 1 = 0</span> exactly, in the form <span class="chem">cos(k pi / 15)</span>. [3 marks] (ii) Use your GDC to check your largest solution, correct to 3 significant figures. [1 mark]<br>(g) Hence find the exact value of <span class="chem">cos(pi/15) cos(7pi/15) cos(11pi/15) cos(13pi/15)</span>. [2 marks]
      stem: "この探究では、<span class=\"chem\">cos(n theta)</span> を <span class=\"chem\">cos theta</span> の多項式で表すことを調べる。<span class=\"chem\">n ∈ ℕ</span> に対して、すべての <span class=\"chem\">theta</span> について <span class=\"chem\">cos(n theta) = T_n(cos theta)</span> となる多項式を <span class=\"chem\">T_n</span> とする。<br>(a) <span class=\"chem\">T_1(x)</span> と <span class=\"chem\">T_2(x)</span> を書きなさい (Write down)。 [2 marks]<br>(b) ド・モアブルの定理を用いて、<span class=\"chem\">T_3(x) = 4x^3 - 3x</span> を示しなさい (Show that)。 [3 marks]<br>(c) <span class=\"chem\">e^{i(n+1)theta} + e^{i(n-1)theta}</span> を考えることにより <span class=\"chem\">cos((n + 1)theta) + cos((n - 1)theta) = 2 cos theta cos(n theta)</span> を示し、<span class=\"chem\">n &gt;= 1</span> に対して <span class=\"chem\">T_{n+1}(x) = 2x T_n(x) - T_{n-1}(x)</span> であることを導きなさい (Deduce)。 [3 marks]<br>(d) これを用いて (Hence)、<span class=\"chem\">T_4(x)</span> と <span class=\"chem\">T_5(x)</span> を求めなさい。 [2 marks]<br>(e) <span class=\"chem\">n &gt;= 1</span> に対する <span class=\"chem\">T_n(x)</span> の最高次の係数を予想し (Conjecture)、(c) の結果が予想をどのように裏づけるか説明しなさい (Explain)。 [2 marks]<br>(f) (i) <span class=\"chem\">x = cos theta</span> とおくことにより、<span class=\"chem\">32x^5 - 40x^3 + 10x - 1 = 0</span> の 5 つの解の厳密値を <span class=\"chem\">cos(k pi / 15)</span> の形で求めなさい (Find)。 [3 marks] (ii) GDC を使って最大の解を確認し、有効数字 3 桁で答えなさい。 [1 mark]<br>(g) これを用いて (Hence)、<span class=\"chem\">cos(pi/15) cos(7pi/15) cos(11pi/15) cos(13pi/15)</span> の厳密値を求めなさい。 [2 marks]",
      hints: [
        // EN: Decode: the investigation builds a family of multiple-angle identities. Part (c) gives a recurrence, so after <span class="chem">T_3</span> you never need to expand a binomial again. Part (f) is the payoff: an ugly quintic is really <span class="chem">cos(5 theta) = 1/2</span>.
        "解読：この探究では倍角の公式の系列を作ります。(c) で漸化式が得られるので、<span class=\"chem\">T_3</span> の後は二項展開をする必要がありません。(f) が成果です：見た目の悪い 5 次方程式は実は <span class=\"chem\">cos(5 theta) = 1/2</span> です。",
        // EN: For (c), take out the factor <span class="chem">e^{in theta}</span>; what remains is <span class="chem">2 cos theta</span>. Then compare real parts.
        "(c) では、因数 <span class=\"chem\">e^{in theta}</span> をくくり出します。残りは <span class=\"chem\">2 cos theta</span> です。その後、実部を比較します。",
        // EN: For (f), <span class="chem">32x^5 - 40x^3 + 10x = 2 T_5(x)</span>. For five different values of <span class="chem">x = cos theta</span>, take five different <span class="chem">theta</span> values in <span class="chem">[0, pi]</span>.
        "(f) では、<span class=\"chem\">32x^5 - 40x^3 + 10x = 2 T_5(x)</span> です。異なる 5 つの <span class=\"chem\">x = cos theta</span> の値を得るために、<span class=\"chem\">[0, pi]</span> の範囲で異なる 5 つの <span class=\"chem\">theta</span> の値をとります。",
        // EN: For (g), the product of the roots of <span class="chem">a x^5 + … + f = 0</span> is <span class="chem">-f/a</span>. One of the five roots is <span class="chem">cos(pi/3)</span>.
        "(g) では、<span class=\"chem\">a x^5 + … + f = 0</span> の解の積は <span class=\"chem\">-f/a</span> です。5 つの解のうちの 1 つは <span class=\"chem\">cos(pi/3)</span> です。",
      ],
      // EN: <p><strong>Decode.</strong> De Moivre gives a few cases, Euler's form gives a recurrence that produces all of them, and the last part spots a hidden <span class="chem">cos(5 theta)</span>.<br>(a) <span class="chem">T_1 = x</span>, <span class="chem">T_2 = 2x^2 - 1</span>.<br>(b) <span class="chem">(c + is)^3 = c^3 + 3ic^2 s - 3cs^2 - is^3</span>; real part <span class="chem">c^3 - 3c(1 - c^2) = 4c^3 - 3c</span>.<br>(c) <span class="chem">e^{i(n+1)theta} + e^{i(n-1)theta} = e^{in theta}(2 cos theta)</span>. Real parts: <span class="chem">cos((n+1)theta) + cos((n-1)theta) = 2 cos theta cos(n theta)</span>; with <span class="chem">x = cos theta</span> this is <span class="chem">T_{n+1}(x) + T_{n-1}(x) = 2x T_n(x)</span>.<br>(d) <span class="chem">T_4 = 2x(4x^3 - 3x) - (2x^2 - 1) = 8x^4 - 8x^2 + 1</span>; <span class="chem">T_5 = 2x(8x^4 - 8x^2 + 1) - (4x^3 - 3x) = 16x^5 - 20x^3 + 5x</span>.<br>(e) Leading coefficients <span class="chem">1, 2, 4, 8, 16</span>: conjecture <span class="chem">2^{n-1}</span>. The term of highest degree in <span class="chem">T_{n+1}</span> comes only from <span class="chem">2x T_n</span>, which doubles it.<br>(f)(i) <span class="chem">32x^5 - 40x^3 + 10x - 1 = 0 &lt;=&gt; T_5(x) = 1/2 &lt;=&gt; cos(5 theta) = 1/2</span>. For <span class="chem">theta ∈ [0, pi]</span>: <span class="chem">5 theta = pi/3, 5pi/3, 7pi/3, 11pi/3, 13pi/3</span>, giving <span class="chem">x = cos(pi/15), cos(pi/3), cos(7pi/15), cos(11pi/15), cos(13pi/15)</span>, which are five different numbers. (ii) GDC: largest root <span class="chem">≈ 0.978 = cos(pi/15)</span>.<br>(g) The product of all five roots is <span class="chem">-(-1)/32 = 1/32</span>. Dividing by <span class="chem">cos(pi/3) = 1/2</span>: the required product is <span class="chem">1/16</span>.</p>
      solution: "<p><strong>解読。</strong> ド・モアブルの定理でいくつかの場合が得られ、オイラー形式からそれらすべてを生み出す漸化式が得られます。最後の問いでは隠れた <span class=\"chem\">cos(5 theta)</span> を見抜きます。<br>(a) <span class=\"chem\">T_1 = x</span>、<span class=\"chem\">T_2 = 2x^2 - 1</span>。<br>(b) <span class=\"chem\">(c + is)^3 = c^3 + 3ic^2 s - 3cs^2 - is^3</span>。実部は <span class=\"chem\">c^3 - 3c(1 - c^2) = 4c^3 - 3c</span>。<br>(c) <span class=\"chem\">e^{i(n+1)theta} + e^{i(n-1)theta} = e^{in theta}(2 cos theta)</span>。実部を比べると：<span class=\"chem\">cos((n+1)theta) + cos((n-1)theta) = 2 cos theta cos(n theta)</span>。<span class=\"chem\">x = cos theta</span> とするとこれは <span class=\"chem\">T_{n+1}(x) + T_{n-1}(x) = 2x T_n(x)</span> です。<br>(d) <span class=\"chem\">T_4 = 2x(4x^3 - 3x) - (2x^2 - 1) = 8x^4 - 8x^2 + 1</span>。<span class=\"chem\">T_5 = 2x(8x^4 - 8x^2 + 1) - (4x^3 - 3x) = 16x^5 - 20x^3 + 5x</span>。<br>(e) 最高次の係数は <span class=\"chem\">1, 2, 4, 8, 16</span> なので、<span class=\"chem\">2^{n-1}</span> と予想します。<span class=\"chem\">T_{n+1}</span> の最高次の項は <span class=\"chem\">2x T_n</span> からだけ生じ、それが係数を 2 倍にします。<br>(f)(i) <span class=\"chem\">32x^5 - 40x^3 + 10x - 1 = 0 &lt;=&gt; T_5(x) = 1/2 &lt;=&gt; cos(5 theta) = 1/2</span>。<span class=\"chem\">theta ∈ [0, pi]</span> では：<span class=\"chem\">5 theta = pi/3, 5pi/3, 7pi/3, 11pi/3, 13pi/3</span> となり、<span class=\"chem\">x = cos(pi/15), cos(pi/3), cos(7pi/15), cos(11pi/15), cos(13pi/15)</span> が得られ、これらは異なる 5 つの数です。(ii) GDC：最大の解は <span class=\"chem\">≈ 0.978 = cos(pi/15)</span>。<br>(g) 5 つの解すべての積は <span class=\"chem\">-(-1)/32 = 1/32</span> です。<span class=\"chem\">cos(pi/3) = 1/2</span> で割ると、求める積は <span class=\"chem\">1/16</span> です。</p>",
      // EN: <p>(a) <span class="chem">T_1(x) = x</span>, <span class="chem">T_2(x) = 2x^2 - 1</span>.<br>(b) <span class="chem">cos(3 theta) = Re(c + is)^3 = c^3 - 3cs^2 = 4c^3 - 3c</span>.<br>(c) <span class="chem">e^{i(n+1)theta} + e^{i(n-1)theta} = e^{in theta}(e^{i theta} + e^{-i theta}) = 2 cos theta e^{in theta}</span>; take real parts.<br>(d) <span class="chem">T_4(x) = 8x^4 - 8x^2 + 1</span>, <span class="chem">T_5(x) = 16x^5 - 20x^3 + 5x</span>.<br>(e) <span class="chem">2^{n-1}</span>: the recurrence doubles the leading coefficient at each step, starting from 1.<br>(f)(i) The equation is <span class="chem">T_5(x) = 1/2</span>, i.e. <span class="chem">cos(5 theta) = 1/2</span>: <span class="chem">x = cos(pi/15), cos(5pi/15), cos(7pi/15), cos(11pi/15), cos(13pi/15)</span>. (ii) <span class="chem">cos(pi/15) ≈ 0.978</span>.<br>(g) The product of the five roots is <span class="chem">1/32</span>; dividing by <span class="chem">cos(pi/3) = 1/2</span> gives <span class="chem">1/16</span>.</p>
      answer: "<p>(a) <span class=\"chem\">T_1(x) = x</span>、<span class=\"chem\">T_2(x) = 2x^2 - 1</span>。<br>(b) <span class=\"chem\">cos(3 theta) = Re(c + is)^3 = c^3 - 3cs^2 = 4c^3 - 3c</span>。<br>(c) <span class=\"chem\">e^{i(n+1)theta} + e^{i(n-1)theta} = e^{in theta}(e^{i theta} + e^{-i theta}) = 2 cos theta e^{in theta}</span>。実部をとる。<br>(d) <span class=\"chem\">T_4(x) = 8x^4 - 8x^2 + 1</span>、<span class=\"chem\">T_5(x) = 16x^5 - 20x^3 + 5x</span>。<br>(e) <span class=\"chem\">2^{n-1}</span>：漸化式は各段階で最高次の係数を 2 倍にし、1 から始まる。<br>(f)(i) 方程式は <span class=\"chem\">T_5(x) = 1/2</span>、すなわち <span class=\"chem\">cos(5 theta) = 1/2</span>：<span class=\"chem\">x = cos(pi/15), cos(5pi/15), cos(7pi/15), cos(11pi/15), cos(13pi/15)</span>。(ii) <span class=\"chem\">cos(pi/15) ≈ 0.978</span>。<br>(g) 5 つの解の積は <span class=\"chem\">1/32</span> で、<span class=\"chem\">cos(pi/3) = 1/2</span> で割ると <span class=\"chem\">1/16</span>。</p>",
      markscheme: [
        // EN: A1: T₁(x) = x.
        "A1：T₁(x) = x。",
        // EN: A1: T₂(x) = 2x² − 1 (from cos 2θ = 2cos²θ − 1).
        "A1：T₂(x) = 2x² − 1（cos 2θ = 2cos²θ − 1 から）。",
        // EN: M1: cos 3θ = Re[(cos θ + i sin θ)³], expanded binomially.
        "M1：cos 3θ = Re[(cos θ + i sin θ)³] とし、二項展開する。",
        // EN: A1: cos 3θ = c³ − 3cs².
        "A1：cos 3θ = c³ − 3cs²。",
        // EN: A1: Uses s² = 1 − c² to reach 4c³ − 3c (AG).
        "A1：s² = 1 − c² を使って 4c³ − 3c を得る (AG)。",
        // EN: M1: Factorises e<sup>i(n+1)θ</sup> + e<sup>i(n−1)θ</sup> = e<sup>inθ</sup>(e<sup>iθ</sup> + e<sup>−iθ</sup>) = 2cos θ e<sup>inθ</sup>.
        "M1：e<sup>i(n+1)θ</sup> + e<sup>i(n−1)θ</sup> = e<sup>inθ</sup>(e<sup>iθ</sup> + e<sup>−iθ</sup>) = 2cos θ e<sup>inθ</sup> と因数分解する。",
        // EN: A1: Equates real parts: cos(n + 1)θ + cos(n − 1)θ = 2cos θ cos nθ (AG).
        "A1：実部を比較する：cos(n + 1)θ + cos(n − 1)θ = 2cos θ cos nθ (AG)。",
        // EN: R1: Writes each cosine as T<sub>k</sub>(cos θ) with x = cos θ, so T<sub>n+1</sub>(x) = 2xT<sub>n</sub>(x) − T<sub>n−1</sub>(x) (AG).
        "R1：x = cos θ として各 cos を T<sub>k</sub>(cos θ) と書くので、T<sub>n+1</sub>(x) = 2xT<sub>n</sub>(x) − T<sub>n−1</sub>(x) (AG)。",
        // EN: A1: T₄(x) = 2x(4x³ − 3x) − (2x² − 1) = 8x⁴ − 8x² + 1.
        "A1：T₄(x) = 2x(4x³ − 3x) − (2x² − 1) = 8x⁴ − 8x² + 1。",
        // EN: A1: T₅(x) = 2x(8x⁴ − 8x² + 1) − (4x³ − 3x) = 16x⁵ − 20x³ + 5x.
        "A1：T₅(x) = 2x(8x⁴ − 8x² + 1) − (4x³ − 3x) = 16x⁵ − 20x³ + 5x。",
        // EN: A1: Conjecture: leading coefficient 2<sup>n−1</sup>.
        "A1：予想：最高次の係数は 2<sup>n−1</sup>。",
        // EN: R1: In the recurrence only 2xT<sub>n</sub> contributes the degree n + 1 term, so each step doubles the leading coefficient, starting from 1 for T₁.
        "R1：漸化式で n + 1 次の項を生じるのは 2xT<sub>n</sub> だけなので、各段階で最高次の係数は 2 倍になり、T₁ の 1 から始まる。",
        // EN: M1: Divides by 2 and recognises T₅(x) = ½, i.e. cos 5θ = ½.
        "M1：2 で割り、T₅(x) = ½、すなわち cos 5θ = ½ であることに気づく。",
        // EN: A1: 5θ = π/3, 5π/3, 7π/3, 11π/3, 13π/3 for θ in [0, π].
        "A1：[0, π] の θ に対して 5θ = π/3, 5π/3, 7π/3, 11π/3, 13π/3。",
        // EN: A1: x = cos(π/15), cos(5π/15), cos(7π/15), cos(11π/15), cos(13π/15).
        "A1：x = cos(π/15), cos(5π/15), cos(7π/15), cos(11π/15), cos(13π/15)。",
        // EN: A1: The GDC gives the largest root as 0.978 = cos(π/15).
        "A1：GDC により最大の解は 0.978 = cos(π/15)。",
        // EN: M1: Product of the roots of 32x⁵ − 40x³ + 10x − 1 = 0 is −(−1)/32 = 1/32.
        "M1：32x⁵ − 40x³ + 10x − 1 = 0 の解の積は −(−1)/32 = 1/32。",
        // EN: A1: Divides by cos(5π/15) = ½ to get 1/16.
        "A1：cos(5π/15) = ½ で割って 1/16 を得る。",
      ],
    },

    // ── t1-4-q059 · short · challenge · AHL · AHL 1.14 · 17 marks
    "t1-4-q059": {
      // EN: This investigation looks at distances between the vertices of a regular polygon. For <span class="chem">n &gt;= 2</span>, the <span class="chem">n</span>-th roots of unity <span class="chem">1, omega, omega^2, …, omega^{n-1}</span>, where <span class="chem">omega = e^{2 pi i / n}</span>, are the vertices of a regular <span class="chem">n</span>-gon. Let <span class="chem">P_n</span> be the product of the distances from the vertex <span class="chem">1</span> to each of the other <span class="chem">n - 1</span> vertices: <span class="chem">P_n = |1 - omega| × |1 - omega^2| × … × |1 - omega^{n-1}|</span>.<br>(a) Find the exact values of <span class="chem">P_3</span> and <span class="chem">P_4</span>. [3 marks]<br>(b) Use your GDC to find <span class="chem">P_5</span> and <span class="chem">P_6</span>. [2 marks]<br>(c) Write down a conjecture for <span class="chem">P_n</span>. [1 mark]<br>(d) (i) Explain why <span class="chem">z^n - 1 = (z - 1)(z - omega)(z - omega^2) … (z - omega^{n-1})</span>. [1 mark] (ii) Hence show that <span class="chem">1 + z + z^2 + … + z^{n-1} = (z - omega)(z - omega^2) … (z - omega^{n-1})</span>. [2 marks] (iii) Hence prove your conjecture. [2 marks]<br>(e) Show that <span class="chem">|1 - e^{i theta}| = 2 sin(theta/2)</span> for <span class="chem">0 &lt; theta &lt; 2pi</span>. [3 marks]<br>(f) Hence show that <span class="chem">sin(pi/n) sin(2pi/n) … sin((n - 1)pi/n) = n / 2^{n-1}</span>, and find the exact value of <span class="chem">sin(pi/6) sin(2pi/6) sin(3pi/6) sin(4pi/6) sin(5pi/6)</span>. [3 marks]
      stem: "この探究では、正多角形の頂点間の距離を調べる。<span class=\"chem\">n &gt;= 2</span> に対して、1 の <span class=\"chem\">n</span> 乗根 <span class=\"chem\">1, omega, omega^2, …, omega^{n-1}</span>（<span class=\"chem\">omega = e^{2 pi i / n}</span>）は正 <span class=\"chem\">n</span> 角形の頂点である。頂点 <span class=\"chem\">1</span> から他の <span class=\"chem\">n - 1</span> 個の頂点それぞれまでの距離の積を <span class=\"chem\">P_n</span> とする：<span class=\"chem\">P_n = |1 - omega| × |1 - omega^2| × … × |1 - omega^{n-1}|</span>。<br>(a) <span class=\"chem\">P_3</span> と <span class=\"chem\">P_4</span> の厳密値を求めなさい (Find)。 [3 marks]<br>(b) GDC を使って <span class=\"chem\">P_5</span> と <span class=\"chem\">P_6</span> を求めなさい。 [2 marks]<br>(c) <span class=\"chem\">P_n</span> についての予想を書きなさい (Write down)。 [1 mark]<br>(d) (i) <span class=\"chem\">z^n - 1 = (z - 1)(z - omega)(z - omega^2) … (z - omega^{n-1})</span> である理由を説明しなさい (Explain)。 [1 mark] (ii) これを用いて (Hence)、<span class=\"chem\">1 + z + z^2 + … + z^{n-1} = (z - omega)(z - omega^2) … (z - omega^{n-1})</span> を示しなさい。 [2 marks] (iii) これを用いて (Hence)、予想を証明しなさい (Prove)。 [2 marks]<br>(e) <span class=\"chem\">0 &lt; theta &lt; 2pi</span> に対して <span class=\"chem\">|1 - e^{i theta}| = 2 sin(theta/2)</span> を示しなさい (Show that)。 [3 marks]<br>(f) これを用いて (Hence)、<span class=\"chem\">sin(pi/n) sin(2pi/n) … sin((n - 1)pi/n) = n / 2^{n-1}</span> を示し、<span class=\"chem\">sin(pi/6) sin(2pi/6) sin(3pi/6) sin(4pi/6) sin(5pi/6)</span> の厳密値を求めなさい。 [3 marks]",
      hints: [
        // EN: Decode: a product of lengths is the modulus of a product of complex numbers. The real question is: what is <span class="chem">(1 - omega)(1 - omega^2)…(1 - omega^{n-1})</span>? Factorising <span class="chem">z^n - 1</span> answers it.
        "解読：長さの積は複素数の積の絶対値です。本当の問いは「<span class=\"chem\">(1 - omega)(1 - omega^2)…(1 - omega^{n-1})</span> はいくつか？」です。<span class=\"chem\">z^n - 1</span> を因数分解すれば答えがわかります。",
        // EN: For (b), multiply the moduli <span class="chem">|1 - e^{2 pi i k/n}|</span> for <span class="chem">k = 1, …, n - 1</span> on the GDC, or use <span class="mono">prod(abs(1 − e^(2πik/n)), k, 1, n − 1)</span>.
        "(b) では、GDC で <span class=\"chem\">k = 1, …, n - 1</span> について絶対値 <span class=\"chem\">|1 - e^{2 pi i k/n}|</span> を掛け合わせるか、<span class=\"mono\">prod(abs(1 − e^(2πik/n)), k, 1, n − 1)</span> を使います。",
        // EN: For (d)(iii), put <span class="chem">z = 1</span> into the identity of (d)(ii). The left side becomes <span class="chem">1 + 1 + … + 1</span>.
        "(d)(iii) では、(d)(ii) の恒等式に <span class=\"chem\">z = 1</span> を代入します。左辺は <span class=\"chem\">1 + 1 + … + 1</span> になります。",
        // EN: For (e), use <span class="chem">1 - cos theta = 2 sin^2(theta/2)</span>. For (f), the angle of <span class="chem">omega^k</span> is <span class="chem">2 pi k / n</span>, so half of it is <span class="chem">k pi / n</span>.
        "(e) では、<span class=\"chem\">1 - cos theta = 2 sin^2(theta/2)</span> を使います。(f) では、<span class=\"chem\">omega^k</span> の角は <span class=\"chem\">2 pi k / n</span> なので、その半分は <span class=\"chem\">k pi / n</span> です。",
      ],
      // EN: <p><strong>Decode.</strong> Turn the geometry (a product of distances) into algebra (the modulus of a product of linear factors of <span class="chem">z^n - 1</span>).<br>(a) For <span class="chem">n = 3</span>: <span class="chem">|1 - omega| = |3/2 - (sqrt(3)/2)i| = sqrt(3)</span>, and the same for <span class="chem">omega^2</span>, so <span class="chem">P_3 = 3</span>. For <span class="chem">n = 4</span>: <span class="chem">sqrt(2) × 2 × sqrt(2) = 4</span>.<br>(b) GDC: <span class="chem">P_5 = 5</span>, <span class="chem">P_6 = 6</span>. (c) <span class="chem">P_n = n</span>.<br>(d)(i) The <span class="chem">n</span> numbers <span class="chem">omega^k</span> are distinct roots of <span class="chem">z^n - 1</span>, which has degree <span class="chem">n</span> and leading coefficient 1. (ii) <span class="chem">z^n - 1 = (z - 1)(1 + z + … + z^{n-1})</span>; comparing with (i) and cancelling <span class="chem">z - 1</span> gives the result (both sides are polynomials that agree for every <span class="chem">z != 1</span>, so they are identical). (iii) At <span class="chem">z = 1</span>: <span class="chem">n = (1 - omega)…(1 - omega^{n-1})</span>. Taking moduli, <span class="chem">P_n = n</span>.<br>(e) <span class="chem">|1 - e^{i theta}|^2 = 1 - 2 cos theta + cos^2 theta + sin^2 theta = 2 - 2 cos theta = 4 sin^2(theta/2)</span>, and <span class="chem">sin(theta/2) &gt; 0</span> on <span class="chem">(0, 2pi)</span>.<br>(f) <span class="chem">|1 - omega^k| = 2 sin(k pi/n)</span>, so <span class="chem">n = P_n = 2^{n-1} sin(pi/n)…sin((n - 1)pi/n)</span>. For <span class="chem">n = 6</span>: <span class="chem">6/32 = 3/16</span> (check: <span class="chem">(1/2)(sqrt(3)/2)(1)(sqrt(3)/2)(1/2) = 3/16</span>).</p>
      solution: "<p><strong>解読。</strong> 幾何（距離の積）を代数（<span class=\"chem\">z^n - 1</span> の 1 次因数の積の絶対値）に変えます。<br>(a) <span class=\"chem\">n = 3</span> のとき：<span class=\"chem\">|1 - omega| = |3/2 - (sqrt(3)/2)i| = sqrt(3)</span> で、<span class=\"chem\">omega^2</span> についても同じなので <span class=\"chem\">P_3 = 3</span>。<span class=\"chem\">n = 4</span> のとき：<span class=\"chem\">sqrt(2) × 2 × sqrt(2) = 4</span>。<br>(b) GDC：<span class=\"chem\">P_5 = 5</span>、<span class=\"chem\">P_6 = 6</span>。(c) <span class=\"chem\">P_n = n</span>。<br>(d)(i) <span class=\"chem\">n</span> 個の数 <span class=\"chem\">omega^k</span> は <span class=\"chem\">z^n - 1</span> の異なる解で、この多項式は次数 <span class=\"chem\">n</span>、最高次の係数 1 です。(ii) <span class=\"chem\">z^n - 1 = (z - 1)(1 + z + … + z^{n-1})</span>。(i) と比較して <span class=\"chem\">z - 1</span> を約すと結果が得られます（両辺は <span class=\"chem\">z != 1</span> であるすべての値で一致する多項式なので、恒等的に等しい）。(iii) <span class=\"chem\">z = 1</span> のとき：<span class=\"chem\">n = (1 - omega)…(1 - omega^{n-1})</span>。絶対値をとって <span class=\"chem\">P_n = n</span>。<br>(e) <span class=\"chem\">|1 - e^{i theta}|^2 = 1 - 2 cos theta + cos^2 theta + sin^2 theta = 2 - 2 cos theta = 4 sin^2(theta/2)</span> で、<span class=\"chem\">(0, 2pi)</span> で <span class=\"chem\">sin(theta/2) &gt; 0</span>。<br>(f) <span class=\"chem\">|1 - omega^k| = 2 sin(k pi/n)</span> なので <span class=\"chem\">n = P_n = 2^{n-1} sin(pi/n)…sin((n - 1)pi/n)</span>。<span class=\"chem\">n = 6</span> のとき：<span class=\"chem\">6/32 = 3/16</span>（確認：<span class=\"chem\">(1/2)(sqrt(3)/2)(1)(sqrt(3)/2)(1/2) = 3/16</span>）。</p>",
      // EN: <p>(a) <span class="chem">P_3 = sqrt(3) × sqrt(3) = 3</span>; <span class="chem">P_4 = sqrt(2) × 2 × sqrt(2) = 4</span>.<br>(b) <span class="chem">P_5 = 5</span>, <span class="chem">P_6 = 6</span>.<br>(c) <span class="chem">P_n = n</span>.<br>(d)(i) The <span class="chem">n</span> roots of the degree-<span class="chem">n</span> monic polynomial <span class="chem">z^n - 1</span> are exactly the <span class="chem">n</span> distinct roots of unity. (ii) Also <span class="chem">z^n - 1 = (z - 1)(1 + z + … + z^{n-1})</span>; cancel the factor <span class="chem">z - 1</span>. (iii) Put <span class="chem">z = 1</span>: <span class="chem">n = (1 - omega)…(1 - omega^{n-1})</span>; take moduli.<br>(e) <span class="chem">|1 - e^{i theta}|^2 = (1 - cos theta)^2 + sin^2 theta = 2 - 2 cos theta = 4 sin^2(theta/2)</span>, and <span class="chem">sin(theta/2) &gt; 0</span>.<br>(f) <span class="chem">|1 - omega^k| = 2 sin(k pi / n)</span>, so <span class="chem">2^{n-1} × product = n</span>; for <span class="chem">n = 6</span> the product is <span class="chem">6/32 = 3/16</span>.</p>
      answer: "<p>(a) <span class=\"chem\">P_3 = sqrt(3) × sqrt(3) = 3</span>；<span class=\"chem\">P_4 = sqrt(2) × 2 × sqrt(2) = 4</span>。<br>(b) <span class=\"chem\">P_5 = 5</span>、<span class=\"chem\">P_6 = 6</span>。<br>(c) <span class=\"chem\">P_n = n</span>。<br>(d)(i) 次数 <span class=\"chem\">n</span> の最高次の係数が 1 の多項式 <span class=\"chem\">z^n - 1</span> の <span class=\"chem\">n</span> 個の解は、ちょうど <span class=\"chem\">n</span> 個の異なる 1 の累乗根である。(ii) また <span class=\"chem\">z^n - 1 = (z - 1)(1 + z + … + z^{n-1})</span>。因数 <span class=\"chem\">z - 1</span> を約す。(iii) <span class=\"chem\">z = 1</span> を代入：<span class=\"chem\">n = (1 - omega)…(1 - omega^{n-1})</span>。絶対値をとる。<br>(e) <span class=\"chem\">|1 - e^{i theta}|^2 = (1 - cos theta)^2 + sin^2 theta = 2 - 2 cos theta = 4 sin^2(theta/2)</span> で、<span class=\"chem\">sin(theta/2) &gt; 0</span>。<br>(f) <span class=\"chem\">|1 - omega^k| = 2 sin(k pi / n)</span> なので <span class=\"chem\">2^{n-1} × product = n</span>。<span class=\"chem\">n = 6</span> のとき積は <span class=\"chem\">6/32 = 3/16</span>。</p>",
      markscheme: [
        // EN: M1: Uses |1 − ω| = |1 − ω²| = √3 for n = 3 (e.g. 1 − (−½ + (√3/2)i) = 3/2 − (√3/2)i).
        "M1：n = 3 のとき |1 − ω| = |1 − ω²| = √3 を使う（例えば 1 − (−½ + (√3/2)i) = 3/2 − (√3/2)i）。",
        // EN: A1: P₃ = 3.
        "A1：P₃ = 3。",
        // EN: A1: P₄ = |1 − i| × |1 + 1| × |1 + i| = √2 × 2 × √2 = 4.
        "A1：P₄ = |1 − i| × |1 + 1| × |1 + i| = √2 × 2 × √2 = 4。",
        // EN: A1: P₅ = 5 (GDC).
        "A1：P₅ = 5 (GDC)。",
        // EN: A1: P₆ = 6 (GDC).
        "A1：P₆ = 6 (GDC)。",
        // EN: A1: Conjecture P<sub>n</sub> = n.
        "A1：予想 P<sub>n</sub> = n。",
        // EN: R1: The ω<sup>k</sup>, k = 0, …, n − 1, are n distinct roots of the monic degree-n polynomial z<sup>n</sup> − 1, so it factorises fully over them.
        "R1：ω<sup>k</sup>（k = 0, …, n − 1）は最高次の係数が 1 の n 次多項式 z<sup>n</sup> − 1 の n 個の異なる解なので、この多項式はそれらで完全に因数分解される。",
        // EN: M1: Uses z<sup>n</sup> − 1 = (z − 1)(1 + z + … + z<sup>n−1</sup>).
        "M1：z<sup>n</sup> − 1 = (z − 1)(1 + z + … + z<sup>n−1</sup>) を使う。",
        // EN: A1: Cancels (z − 1) for z ≠ 1, and the identity of polynomials extends to z = 1 (AG).
        "A1：z ≠ 1 で (z − 1) を約し、多項式の恒等式は z = 1 にも拡張される (AG)。",
        // EN: M1: Substitutes z = 1: (1 − ω)(1 − ω²)…(1 − ω<sup>n−1</sup>) = n.
        "M1：z = 1 を代入する：(1 − ω)(1 − ω²)…(1 − ω<sup>n−1</sup>) = n。",
        // EN: A1: Takes moduli: P<sub>n</sub> = n.
        "A1：絶対値をとる：P<sub>n</sub> = n。",
        // EN: M1: |1 − e<sup>iθ</sup>|² = (1 − cos θ)² + sin²θ.
        "M1：|1 − e<sup>iθ</sup>|² = (1 − cos θ)² + sin²θ。",
        // EN: A1: = 2 − 2cos θ = 4sin²(θ/2) (using cos θ = 1 − 2sin²(θ/2)).
        "A1：= 2 − 2cos θ = 4sin²(θ/2)（cos θ = 1 − 2sin²(θ/2) を使う）。",
        // EN: R1: sin(θ/2) > 0 for 0 < θ < 2π, so |1 − e<sup>iθ</sup>| = 2sin(θ/2) (AG).
        "R1：sin(θ/2) > 0（0 < θ < 2π のとき）なので、|1 − e<sup>iθ</sup>| = 2sin(θ/2) (AG)。",
        // EN: M1: |1 − ω<sup>k</sup>| = 2sin(kπ/n), so P<sub>n</sub> = 2<sup>n−1</sup> × Π sin(kπ/n).
        "M1：|1 − ω<sup>k</sup>| = 2sin(kπ/n) なので、P<sub>n</sub> = 2<sup>n−1</sup> × Π sin(kπ/n)。",
        // EN: A1: Π sin(kπ/n) = n/2<sup>n−1</sup> (AG).
        "A1：Π sin(kπ/n) = n/2<sup>n−1</sup> (AG)。",
        // EN: A1: For n = 6: 6/2⁵ = 3/16.
        "A1：n = 6 のとき：6/2⁵ = 3/16。",
      ],
    },

    // ── t1-4-q060 · short · challenge · AHL · AHL 1.14, SL 1.9 · 16 marks
    "t1-4-q060": {
      // EN: This investigation uses the cube roots of unity to add every third binomial coefficient. For <span class="chem">n ∈ ℤ^+</span>, let <span class="chem"><i>A</i><sub><i>n</i></sub> = <sup><i>n</i></sup>C<sub>0</sub> + <sup><i>n</i></sup>C<sub>3</sub> + <sup><i>n</i></sup>C<sub>6</sub> + …</span>, the sum of the binomial coefficients <span class="chem"><sup><i>n</i></sup>C<sub><i>r</i></sub></span> for which <span class="chem">r</span> is a multiple of 3.<br>(a) Find <span class="chem">A_n</span> for <span class="chem">n = 1, 2, 3, 4, 5, 6</span>. [2 marks]<br>(b) Compare each value with <span class="chem">2^n / 3</span>, and comment. [1 mark]<br>(c) Let <span class="chem">omega = e^{2 pi i / 3}</span>. Show that <span class="chem">1 + omega + omega^2 = 0</span>, and deduce that <span class="chem">1 + omega^r + omega^{2r}</span> equals 3 when <span class="chem">r</span> is a multiple of 3 and 0 otherwise. [3 marks]<br>(d) By expanding each term with the binomial theorem, show that <span class="chem">(1 + 1)^n + (1 + omega)^n + (1 + omega^2)^n = 3A_n</span>. [3 marks]<br>(e) Show that <span class="chem">1 + omega = e^{i pi/3}</span> and <span class="chem">1 + omega^2 = e^{-i pi/3}</span>. Hence show that <span class="chem">A_n = (2^n + 2 cos(n pi/3)) / 3</span>. [4 marks]<br>(f) Verify the formula for <span class="chem">n = 6</span>. [1 mark]<br>(g) Find <span class="chem">A_10</span>. [2 marks]
      stem: "この探究では、1 の 3 乗根を使って二項係数を 3 つおきに足す。<span class=\"chem\">n ∈ ℤ^+</span> に対して <span class=\"chem\"><i>A</i><sub><i>n</i></sub> = <sup><i>n</i></sup>C<sub>0</sub> + <sup><i>n</i></sup>C<sub>3</sub> + <sup><i>n</i></sup>C<sub>6</sub> + …</span> とする。これは <span class=\"chem\">r</span> が 3 の倍数である二項係数 <span class=\"chem\"><sup><i>n</i></sup>C<sub><i>r</i></sub></span> の和である。<br>(a) <span class=\"chem\">n = 1, 2, 3, 4, 5, 6</span> について <span class=\"chem\">A_n</span> を求めなさい (Find)。 [2 marks]<br>(b) 各値を <span class=\"chem\">2^n / 3</span> と比較し、気づいたことを述べなさい (Comment)。 [1 mark]<br>(c) <span class=\"chem\">omega = e^{2 pi i / 3}</span> とする。<span class=\"chem\">1 + omega + omega^2 = 0</span> を示し (Show that)、<span class=\"chem\">1 + omega^r + omega^{2r}</span> は <span class=\"chem\">r</span> が 3 の倍数のとき 3、そうでないとき 0 に等しいことを導きなさい (Deduce)。 [3 marks]<br>(d) 各項を二項定理で展開することにより、<span class=\"chem\">(1 + 1)^n + (1 + omega)^n + (1 + omega^2)^n = 3A_n</span> を示しなさい。 [3 marks]<br>(e) <span class=\"chem\">1 + omega = e^{i pi/3}</span> と <span class=\"chem\">1 + omega^2 = e^{-i pi/3}</span> を示しなさい。これを用いて (Hence)、<span class=\"chem\">A_n = (2^n + 2 cos(n pi/3)) / 3</span> を示しなさい。 [4 marks]<br>(f) <span class=\"chem\">n = 6</span> についてこの公式を確かめなさい (Verify)。 [1 mark]<br>(g) <span class=\"chem\">A_10</span> を求めなさい。 [2 marks]",
      hints: [
        // EN: Decode: the cube roots of unity act as a "filter". Adding <span class="chem">1 + omega^r + omega^{2r}</span> keeps the terms with <span class="chem">r</span> a multiple of 3 and kills the others, so three binomial expansions added together leave only every third coefficient.
        "解読：1 の 3 乗根は「フィルター」としてはたらきます。<span class=\"chem\">1 + omega^r + omega^{2r}</span> を足すと、<span class=\"chem\">r</span> が 3 の倍数である項は残り、他の項は消えます。そのため 3 つの二項展開を足し合わせると、3 つおきの係数だけが残ります。",
        // EN: For (a), use Pascal's triangle, e.g. <span class="chem"><i>A</i><sub>6</sub> = <sup>6</sup>C<sub>0</sub> + <sup>6</sup>C<sub>3</sub> + <sup>6</sup>C<sub>6</sub> = 1 + 20 + 1</span>.
        "(a) では、パスカルの三角形を使います。例えば <span class=\"chem\"><i>A</i><sub>6</sub> = <sup>6</sup>C<sub>0</sub> + <sup>6</sup>C<sub>3</sub> + <sup>6</sup>C<sub>6</sub> = 1 + 20 + 1</span>。",
        // EN: For (d), line up the three expansions <span class="chem">Σ<sub><i>r</i></sub> <sup><i>n</i></sup>C<sub><i>r</i></sub> <i>x</i><sup><i>r</i></sup></span> with <span class="chem">x = 1, omega, omega^2</span> and add coefficient by coefficient.
        "(d) では、<span class=\"chem\">x = 1, omega, omega^2</span> とした 3 つの展開式 <span class=\"chem\">Σ<sub><i>r</i></sub> <sup><i>n</i></sup>C<sub><i>r</i></sub> <i>x</i><sup><i>r</i></sup></span> を並べ、係数ごとに足します。",
        // EN: For (e), <span class="chem">omega = -1/2 + (sqrt(3)/2)i</span>. A number plus its conjugate is twice its real part.
        "(e) では、<span class=\"chem\">omega = -1/2 + (sqrt(3)/2)i</span> です。ある数とその共役な複素数の和は実部の 2 倍です。",
      ],
      // EN: <p><strong>Decode.</strong> This is the roots-of-unity filter: the identity in (c) turns a sum over every third coefficient into three ordinary binomial expansions, which De Moivre can evaluate.<br>(a) <span class="chem">A_1 = 1</span>, <span class="chem">A_2 = 1</span>, <span class="chem">A_3 = 1 + 1 = 2</span>, <span class="chem">A_4 = 1 + 4 = 5</span>, <span class="chem">A_5 = 1 + 10 = 11</span>, <span class="chem">A_6 = 1 + 20 + 1 = 22</span>.<br>(b) Each differs from <span class="chem">2^n/3</span> by <span class="chem">1/3</span> or <span class="chem">2/3</span>.<br>(c) <span class="chem">omega != 1</span> and <span class="chem">omega^3 = 1</span>, so <span class="chem">1 + omega + omega^2 = (1 - omega^3)/(1 - omega) = 0</span>. If <span class="chem">r = 3q</span>, every term is 1 (sum 3); otherwise <span class="chem">omega^r</span> and <span class="chem">omega^{2r}</span> are <span class="chem">omega</span> and <span class="chem">omega^2</span> in some order (sum 0).<br>(d) <span class="chem">Σ<sub><i>r</i></sub> <sup><i>n</i></sup>C<sub><i>r</i></sub>(1 + ω<sup><i>r</i></sup> + ω<sup>2<i>r</i></sup>) = 3 × Σ<sub><i>r</i> = 0, 3, 6, …</sub> <sup><i>n</i></sup>C<sub><i>r</i></sub> = 3<i>A</i><sub><i>n</i></sub></span>.<br>(e) <span class="chem">1 + omega = 1/2 + (sqrt(3)/2)i = e^{i pi/3}</span> and <span class="chem">1 + omega^2 = e^{-i pi/3}</span>. By De Moivre, <span class="chem">3A_n = 2^n + e^{in pi/3} + e^{-in pi/3} = 2^n + 2 cos(n pi/3)</span>.<br>(f) <span class="chem">(64 + 2)/3 = 22</span> ✓.<br>(g) <span class="chem">cos(10pi/3) = cos(4pi/3) = -1/2</span>, so <span class="chem">A_10 = (1024 - 1)/3 = 341</span> (check: <span class="chem">1 + 120 + 210 + 10 = 341</span>).</p>
      solution: "<p><strong>解読。</strong> これは 1 の累乗根によるフィルターです：(c) の恒等式により、3 つおきの係数の和が 3 つの普通の二項展開に変わり、それをド・モアブルの定理で計算できます。<br>(a) <span class=\"chem\">A_1 = 1</span>、<span class=\"chem\">A_2 = 1</span>、<span class=\"chem\">A_3 = 1 + 1 = 2</span>、<span class=\"chem\">A_4 = 1 + 4 = 5</span>、<span class=\"chem\">A_5 = 1 + 10 = 11</span>、<span class=\"chem\">A_6 = 1 + 20 + 1 = 22</span>。<br>(b) どれも <span class=\"chem\">2^n/3</span> との差が <span class=\"chem\">1/3</span> か <span class=\"chem\">2/3</span> です。<br>(c) <span class=\"chem\">omega != 1</span> かつ <span class=\"chem\">omega^3 = 1</span> なので、<span class=\"chem\">1 + omega + omega^2 = (1 - omega^3)/(1 - omega) = 0</span>。<span class=\"chem\">r = 3q</span> ならばすべての項が 1（和は 3）。そうでなければ <span class=\"chem\">omega^r</span> と <span class=\"chem\">omega^{2r}</span> は順序を除いて <span class=\"chem\">omega</span> と <span class=\"chem\">omega^2</span> です（和は 0）。<br>(d) <span class=\"chem\">Σ<sub><i>r</i></sub> <sup><i>n</i></sup>C<sub><i>r</i></sub>(1 + ω<sup><i>r</i></sup> + ω<sup>2<i>r</i></sup>) = 3 × Σ<sub><i>r</i> = 0, 3, 6, …</sub> <sup><i>n</i></sup>C<sub><i>r</i></sub> = 3<i>A</i><sub><i>n</i></sub></span>。<br>(e) <span class=\"chem\">1 + omega = 1/2 + (sqrt(3)/2)i = e^{i pi/3}</span>、<span class=\"chem\">1 + omega^2 = e^{-i pi/3}</span>。ド・モアブルの定理より <span class=\"chem\">3A_n = 2^n + e^{in pi/3} + e^{-in pi/3} = 2^n + 2 cos(n pi/3)</span>。<br>(f) <span class=\"chem\">(64 + 2)/3 = 22</span> ✓。<br>(g) <span class=\"chem\">cos(10pi/3) = cos(4pi/3) = -1/2</span> なので、<span class=\"chem\">A_10 = (1024 - 1)/3 = 341</span>（確認：<span class=\"chem\">1 + 120 + 210 + 10 = 341</span>）。</p>",
      // EN: <p>(a) <span class="chem">1, 1, 2, 5, 11, 22</span>.<br>(b) <span class="chem">2^n/3 ≈ 0.667, 1.33, 2.67, 5.33, 10.7, 21.3</span>: each <span class="chem">A_n</span> differs from <span class="chem">2^n/3</span> by <span class="chem">1/3</span> or <span class="chem">2/3</span>.<br>(c) <span class="chem">1 + omega + omega^2 = (1 - omega^3)/(1 - omega) = 0</span>; if <span class="chem">3 | r</span> each term is 1, otherwise <span class="chem">omega^r</span> is <span class="chem">omega</span> or <span class="chem">omega^2</span> and the sum is <span class="chem">1 + omega + omega^2 = 0</span>.<br>(d) The sum is <span class="chem">Σ<sub><i>r</i></sub> <sup><i>n</i></sup>C<sub><i>r</i></sub>(1 + ω<sup><i>r</i></sup> + ω<sup>2<i>r</i></sup>) = 3 Σ<sub>3|<i>r</i></sub> <sup><i>n</i></sup>C<sub><i>r</i></sub></span>.<br>(e) <span class="chem">1 + omega = 1/2 + (sqrt(3)/2)i = e^{i pi/3}</span>; then <span class="chem">3A_n = 2^n + e^{in pi/3} + e^{-in pi/3} = 2^n + 2 cos(n pi/3)</span>.<br>(f) <span class="chem">(64 + 2)/3 = 22</span>.<br>(g) <span class="chem">A_10 = (1024 + 2 cos(10pi/3))/3 = (1024 - 1)/3 = 341</span>.</p>
      answer: "<p>(a) <span class=\"chem\">1, 1, 2, 5, 11, 22</span>。<br>(b) <span class=\"chem\">2^n/3 ≈ 0.667, 1.33, 2.67, 5.33, 10.7, 21.3</span>：各 <span class=\"chem\">A_n</span> は <span class=\"chem\">2^n/3</span> との差が <span class=\"chem\">1/3</span> か <span class=\"chem\">2/3</span>。<br>(c) <span class=\"chem\">1 + omega + omega^2 = (1 - omega^3)/(1 - omega) = 0</span>。<span class=\"chem\">3 | r</span> ならば各項は 1、そうでなければ <span class=\"chem\">omega^r</span> は <span class=\"chem\">omega</span> か <span class=\"chem\">omega^2</span> で、和は <span class=\"chem\">1 + omega + omega^2 = 0</span>。<br>(d) 和は <span class=\"chem\">Σ<sub><i>r</i></sub> <sup><i>n</i></sup>C<sub><i>r</i></sub>(1 + ω<sup><i>r</i></sup> + ω<sup>2<i>r</i></sup>) = 3 Σ<sub>3|<i>r</i></sub> <sup><i>n</i></sup>C<sub><i>r</i></sub></span>。<br>(e) <span class=\"chem\">1 + omega = 1/2 + (sqrt(3)/2)i = e^{i pi/3}</span>。すると <span class=\"chem\">3A_n = 2^n + e^{in pi/3} + e^{-in pi/3} = 2^n + 2 cos(n pi/3)</span>。<br>(f) <span class=\"chem\">(64 + 2)/3 = 22</span>。<br>(g) <span class=\"chem\">A_10 = (1024 + 2 cos(10pi/3))/3 = (1024 - 1)/3 = 341</span>。</p>",
      markscheme: [
        // EN: A1: A₁ = 1, A₂ = 1, A₃ = 2.
        "A1：A₁ = 1、A₂ = 1、A₃ = 2。",
        // EN: A1: A₄ = 5, A₅ = 11, A₆ = 22.
        "A1：A₄ = 5、A₅ = 11、A₆ = 22。",
        // EN: A1: A<sub>n</sub> is close to 2<sup>n</sup>/3, differing by 1/3 or 2/3.
        "A1：A<sub>n</sub> は 2<sup>n</sup>/3 に近く、差は 1/3 か 2/3。",
        // EN: M1: 1 + ω + ω² = (1 − ω³)/(1 − ω) with ω ≠ 1 (or the sum of the roots of z³ − 1 = 0).
        "M1：ω ≠ 1 として 1 + ω + ω² = (1 − ω³)/(1 − ω)（または z³ − 1 = 0 の解の和）。",
        // EN: A1: = 0, since ω³ = 1.
        "A1：ω³ = 1 なので = 0。",
        // EN: R1: If 3 | r, ω<sup>r</sup> = ω<sup>2r</sup> = 1, so the sum is 3; otherwise {ω<sup>r</sup>, ω<sup>2r</sup>} = {ω, ω²}, so the sum is 0.
        "R1：3 | r ならば ω<sup>r</sup> = ω<sup>2r</sup> = 1 なので和は 3。そうでなければ {ω<sup>r</sup>, ω<sup>2r</sup>} = {ω, ω²} なので和は 0。",
        // EN: M1: Expands each power: Σ<sup>n</sup>C<sub>r</sub>·1<sup>r</sup>, Σ<sup>n</sup>C<sub>r</sub>ω<sup>r</sup>, Σ<sup>n</sup>C<sub>r</sub>ω<sup>2r</sup>.
        "M1：各累乗を展開する：Σ<sup>n</sup>C<sub>r</sub>·1<sup>r</sup>、Σ<sup>n</sup>C<sub>r</sub>ω<sup>r</sup>、Σ<sup>n</sup>C<sub>r</sub>ω<sup>2r</sup>。",
        // EN: A1: Adds term by term: Σ<sup>n</sup>C<sub>r</sub>(1 + ω<sup>r</sup> + ω<sup>2r</sup>).
        "A1：項ごとに足す：Σ<sup>n</sup>C<sub>r</sub>(1 + ω<sup>r</sup> + ω<sup>2r</sup>)。",
        // EN: R1: Uses (c): only r divisible by 3 survive, each with factor 3, giving 3A<sub>n</sub> (AG).
        "R1：(c) を使う：3 で割り切れる r の項だけがそれぞれ因数 3 をもって残り、3A<sub>n</sub> となる (AG)。",
        // EN: A1: 1 + ω = 1 + (−½ + (√3/2)i) = ½ + (√3/2)i = e<sup>iπ/3</sup>, and 1 + ω² is its conjugate e<sup>−iπ/3</sup>.
        "A1：1 + ω = 1 + (−½ + (√3/2)i) = ½ + (√3/2)i = e<sup>iπ/3</sup> で、1 + ω² はその共役 e<sup>−iπ/3</sup>。",
        // EN: M1: Uses De Moivre: (1 + ω)<sup>n</sup> = e<sup>inπ/3</sup> and (1 + ω²)<sup>n</sup> = e<sup>−inπ/3</sup>.
        "M1：ド・モアブルの定理を使う：(1 + ω)<sup>n</sup> = e<sup>inπ/3</sup>、(1 + ω²)<sup>n</sup> = e<sup>−inπ/3</sup>。",
        // EN: A1: e<sup>inπ/3</sup> + e<sup>−inπ/3</sup> = 2cos(nπ/3).
        "A1：e<sup>inπ/3</sup> + e<sup>−inπ/3</sup> = 2cos(nπ/3)。",
        // EN: A1: So 3A<sub>n</sub> = 2<sup>n</sup> + 2cos(nπ/3) (AG).
        "A1：よって 3A<sub>n</sub> = 2<sup>n</sup> + 2cos(nπ/3) (AG)。",
        // EN: A1: n = 6: (64 + 2cos 2π)/3 = 66/3 = 22, matching (a).
        "A1：n = 6：(64 + 2cos 2π)/3 = 66/3 = 22 で、(a) と一致する。",
        // EN: M1: A₁₀ = (2¹⁰ + 2cos(10π/3))/3 with cos(10π/3) = −½.
        "M1：cos(10π/3) = −½ として A₁₀ = (2¹⁰ + 2cos(10π/3))/3。",
        // EN: A1: A₁₀ = 341.
        "A1：A₁₀ = 341。",
      ],
    },

  }
});
