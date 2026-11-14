/* t1-4.q — zh-Hant question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't1-4.q', {
  questions: {

    // ── t1-4-q001 · mcq · foundation · AHL · AHL 1.12 · 2 marks
    "t1-4-q001": {
      // EN: Let <span class="chem">z = (7 - 4i) / (2 + i)</span>. What is the imaginary part <span class="chem">Im(z)</span>?
      stem: "設 <span class=\"chem\">z = (7 - 4i) / (2 + i)</span>。它的虛部 <span class=\"chem\">Im(z)</span> 是多少？",
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
        "分子與分母同乘分母的共軛複數 <span class=\"chem\">2 - i</span>。",
        // EN: <span class="chem">z = ((7 - 4i)(2 - i)) / (2^2 + 1^2) = (14 - 7i - 8i + 4i^2) / 5 = (10 - 15i) / 5 = 2 - 3i</span>. Remember <span class="chem">Im(a + bi) = b</span>.
        "<span class=\"chem\">z = ((7 - 4i)(2 - i)) / (2^2 + 1^2) = (14 - 7i - 8i + 4i^2) / 5 = (10 - 15i) / 5 = 2 - 3i</span>。緊記 <span class=\"chem\">Im(a + bi) = b</span>。",
      ],
      // EN: <p>Multiply numerator and denominator by <span class="chem">2 - i</span>: <span class="chem">z = ((7 - 4i)(2 - i)) / (2^2 + 1^2) = (10 - 15i) / 5 = 2 - 3i</span>. Therefore <span class="chem">Im(z) = -3</span>.</p>
      solution: "<p>分子與分母同乘 <span class=\"chem\">2 - i</span>：<span class=\"chem\">z = ((7 - 4i)(2 - i)) / (2^2 + 1^2) = (10 - 15i) / 5 = 2 - 3i</span>。因此 <span class=\"chem\">Im(z) = -3</span>。</p>",
      misconception: {
        // EN (option B): The imaginary part Im(z) of z = a + bi is the real coefficient b = −3, never −3i.
        "1": "z = a + bi 的虛部 Im(z) 是實數係數 b = −3，絕不是 −3i。",
        // EN (option C): Check the sign when multiplying by the conjugate (2 − i): the imaginary term in the numerator is −7i − 8i = −15i, not +7i − 8i = −i.
        "2": "檢查乘以共軛複數 (2 − i) 時的正負號：分子中的虛數項是 −7i − 8i = −15i，而不是 +7i − 8i = −i。",
        // EN (option D): 2 is the real part Re(z) = (14 − 4)/5 = 10/5 = 2, whereas the question asks for Im(z).
        "3": "2 是實部 Re(z) = (14 − 4)/5 = 10/5 = 2，而題目問的是虛部 Im(z)。",
      },
    },

    // ── t1-4-q002 · numeric · foundation · AHL · AHL 1.12 · 3 marks
    "t1-4-q002": {
      // EN: Given that <span class="chem">z = 3 - 4i</span>, evaluate <span class="chem">z z^* + i^{2028}</span>.
      stem: "已知 <span class=\"chem\">z = 3 - 4i</span>，計算 (evaluate) <span class=\"chem\">z z^* + i^{2028}</span>。",
      hints: [
        // EN: Recall that <span class="chem">z z^* = |z|^2 = a^2 + b^2</span>.
        "回想 <span class=\"chem\">z z^* = |z|^2 = a^2 + b^2</span>。",
        // EN: For <span class="chem">i^{2028}</span>, notice that <span class="chem">2028</span> is a multiple of <span class="chem">4</span> (<span class="chem">2028 = 4 × 507</span>), so <span class="chem">i^{2028} = (i^4)^{507} = 1</span>.
        "對於 <span class=\"chem\">i^{2028}</span>，留意 <span class=\"chem\">2028</span> 是 <span class=\"chem\">4</span> 的倍數（<span class=\"chem\">2028 = 4 × 507</span>），因此 <span class=\"chem\">i^{2028} = (i^4)^{507} = 1</span>。",
      ],
      // EN: <p><span class="chem">z z^* = 3^2 + (-4)^2 = 9 + 16 = 25</span>. Since <span class="chem">2028</span> is divisible by 4, <span class="chem">i^{2028} = 1</span>. Thus <span class="chem">25 + 1 = 26</span>.</p>
      solution: "<p><span class=\"chem\">z z^* = 3^2 + (-4)^2 = 9 + 16 = 25</span>。由於 <span class=\"chem\">2028</span> 可被 4 整除，<span class=\"chem\">i^{2028} = 1</span>。因此 <span class=\"chem\">25 + 1 = 26</span>。</p>",
    },

    // ── t1-4-q003 · mcq · foundation · AHL · AHL 1.13 · 2 marks
    "t1-4-q003": {
      // EN: Write the complex number <span class="chem">z = -2 + 2 sqrt(3)i</span> in Euler form <span class="chem">r e^{i theta}</span>, where <span class="chem">r &gt; 0</span> and <span class="chem">-pi &lt; theta &lt;= pi</span>.
      stem: "把複數 <span class=\"chem\">z = -2 + 2 sqrt(3)i</span> 寫成 (Write) 歐拉形式 <span class=\"chem\">r e^{i theta}</span>，其中 <span class=\"chem\">r &gt; 0</span> 且 <span class=\"chem\">-pi &lt; theta &lt;= pi</span>。",
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
        "求模：<span class=\"chem\">r = sqrt((-2)^2 + (2 sqrt(3))^2) = sqrt(4 + 12) = 4</span>。",
        // EN: Since <span class="chem">Re(z) &lt; 0</span> and <span class="chem">Im(z) &gt; 0</span>, <span class="chem">z</span> is in Quadrant II with reference angle <span class="chem">arctan(sqrt(3)) = pi/3</span>.
        "由於 <span class=\"chem\">Re(z) &lt; 0</span> 且 <span class=\"chem\">Im(z) &gt; 0</span>，<span class=\"chem\">z</span> 位於第二象限，參考角為 <span class=\"chem\">arctan(sqrt(3)) = pi/3</span>。",
      ],
      // EN: <p><span class="chem">r = sqrt(4 + 12) = 4</span>. In Quadrant II, <span class="chem">theta = pi - arctan(sqrt(3)) = pi - pi/3 = 2pi/3</span>, giving <span class="chem">z = 4 e^{i(2pi/3)}</span>.</p>
      solution: "<p><span class=\"chem\">r = sqrt(4 + 12) = 4</span>。在第二象限中，<span class=\"chem\">theta = pi - arctan(sqrt(3)) = pi - pi/3 = 2pi/3</span>，得 <span class=\"chem\">z = 4 e^{i(2pi/3)}</span>。</p>",
      misconception: {
        // EN (option B): arctan(2√3 / −2) = −π/3 lies in Quadrant IV, but z = −2 + 2√3 i has Re(z) < 0 and Im(z) > 0 (Quadrant II), so θ = π − π/3 = 2π/3.
        "1": "arctan(2√3 / −2) = −π/3 位於第四象限，但 z = −2 + 2√3 i 滿足 Re(z) < 0 且 Im(z) > 0（第二象限），故 θ = π − π/3 = 2π/3。",
        // EN (option C): The modulus is r = √((−2)² + (2√3)²) = √(4 + 12) = √16 = 4, not 2.
        "2": "模是 r = √((−2)² + (2√3)²) = √(4 + 12) = √16 = 4，而不是 2。",
        // EN (option D): The reference angle is arctan(√3) = π/3, so in Quadrant II the argument is π − π/3 = 2π/3, not 5π/6.
        "3": "參考角是 arctan(√3) = π/3，因此在第二象限幅角應為 π − π/3 = 2π/3，而不是 5π/6。",
      },
    },

    // ── t1-4-q004 · numeric · foundation · AHL · AHL 1.12 · 4 marks
    "t1-4-q004": {
      // EN: The real numbers <span class="chem">x</span> and <span class="chem">y</span> satisfy <span class="chem">(x + yi)(3 + 2i) = -1 + 8i</span>. Find the value of <span class="chem">y</span>.
      stem: "實數 <span class=\"chem\">x</span> 及 <span class=\"chem\">y</span> 滿足 <span class=\"chem\">(x + yi)(3 + 2i) = -1 + 8i</span>。求 (Find) <span class=\"chem\">y</span> 的值。",
      hints: [
        // EN: Either expand <span class="chem">(3x - 2y) + (2x + 3y)i = -1 + 8i</span> and solve the simultaneous equations, or divide <span class="chem">x + yi = (-1 + 8i) / (3 + 2i)</span>.
        "可展開 <span class=\"chem\">(3x - 2y) + (2x + 3y)i = -1 + 8i</span> 再解聯立方程，或直接相除 <span class=\"chem\">x + yi = (-1 + 8i) / (3 + 2i)</span>。",
        // EN: Multiplying numerator and denominator by <span class="chem">3 - 2i</span> gives <span class="chem">((-1 + 8i)(3 - 2i)) / (9 + 4) = (13 + 26i) / 13 = 1 + 2i</span>.
        "分子與分母同乘 <span class=\"chem\">3 - 2i</span> 得 <span class=\"chem\">((-1 + 8i)(3 - 2i)) / (9 + 4) = (13 + 26i) / 13 = 1 + 2i</span>。",
      ],
      // EN: <p>Dividing both sides by <span class="chem">3 + 2i</span>: <span class="chem">x + yi = ((-1 + 8i)(3 - 2i)) / (3^2 + 2^2) = (13 + 26i) / 13 = 1 + 2i</span>. Thus <span class="chem">x = 1</span> and <span class="chem">y = 2</span>.</p>
      solution: "<p>兩邊同除以 <span class=\"chem\">3 + 2i</span>：<span class=\"chem\">x + yi = ((-1 + 8i)(3 - 2i)) / (3^2 + 2^2) = (13 + 26i) / 13 = 1 + 2i</span>。因此 <span class=\"chem\">x = 1</span> 及 <span class=\"chem\">y = 2</span>。</p>",
    },

    // ── t1-4-q005 · mcq · exam · AHL · AHL 1.13 · 2 marks
    "t1-4-q005": {
      // EN: Let <span class="chem">z_1 = 6 e^{i(pi/4)}</span> and <span class="chem">z_2 = 2 e^{-i(pi/3)}</span>. Which expression gives <span class="chem">z_1 / z_2</span> in polar form with principal argument in <span class="chem">(-pi, pi]</span>?
      stem: "設 <span class=\"chem\">z_1 = 6 e^{i(pi/4)}</span> 及 <span class=\"chem\">z_2 = 2 e^{-i(pi/3)}</span>。下列哪個表式以極坐標形式給出 <span class=\"chem\">z_1 / z_2</span>，且其主幅角位於 <span class=\"chem\">(-pi, pi]</span> 內？",
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
        "在極坐標／歐拉形式中進行複數除法時，把模相除並把幅角相減：<span class=\"chem\">|z_1 / z_2| = |z_1| / |z_2|</span> 及 <span class=\"chem\">arg(z_1 / z_2) = arg(z_1) - arg(z_2)</span>。",
        // EN: Compute <span class="chem">pi/4 - (-pi/3) = 3pi/12 + 4pi/12 = 7pi/12</span>.
        "計算 <span class=\"chem\">pi/4 - (-pi/3) = 3pi/12 + 4pi/12 = 7pi/12</span>。",
      ],
      // EN: <p><span class="chem">z_1 / z_2 = (6/2) e^{i(pi/4 - (-pi/3))} = 3 e^{i(7pi/12)} = 3 cis(7pi/12)</span>.</p>
      solution: "<p><span class=\"chem\">z_1 / z_2 = (6/2) e^{i(pi/4 - (-pi/3))} = 3 e^{i(7pi/12)} = 3 cis(7pi/12)</span>。</p>",
      misconception: {
        // EN (option B): When dividing z₁ by z₂, you subtract arguments: π/4 − (−π/3) = π/4 + π/3 = 7π/12. Adding them gives −π/12, which is the argument of z₁z₂.
        "1": "把 z₁ 除以 z₂ 時應將幅角相減：π/4 − (−π/3) = π/4 + π/3 = 7π/12。相加得出 −π/12，那是 z₁z₂ 的幅角。",
        // EN (option C): When dividing complex numbers in polar form, divide the moduli (6 / 2 = 3) rather than multiplying them.
        "2": "極坐標形式的複數相除時，應把模相除 (6 / 2 = 3)，而不是相乘。",
        // EN (option D): arg(z₁ / z₂) = arg(z₁) − arg(z₂) = π/4 − (−π/3) = +7π/12, whereas −7π/12 is arg(z₂ / z₁).
        "3": "arg(z₁ / z₂) = arg(z₁) − arg(z₂) = π/4 − (−π/3) = +7π/12，而 −7π/12 是 arg(z₂ / z₁)。",
      },
    },

    // ── t1-4-q006 · numeric · exam · AHL · AHL 1.14 · 4 marks
    "t1-4-q006": {
      // EN: Using De Moivre's theorem, evaluate <span class="chem">(1 - i)^{10}</span>. Since the result is purely imaginary of the form <span class="chem">k i</span>, enter the real value of <span class="chem">k</span>.
      stem: "利用棣美弗定理計算 (evaluate) <span class=\"chem\">(1 - i)^{10}</span>。由於結果為形如 <span class=\"chem\">k i</span> 的純虛數，輸入實數 <span class=\"chem\">k</span> 的值。",
      hints: [
        // EN: Write <span class="chem">1 - i</span> in Euler form: <span class="chem">r = sqrt(1^2 + (-1)^2) = sqrt(2)</span> and <span class="chem">theta = -pi/4</span> (Quadrant IV).
        "把 <span class=\"chem\">1 - i</span> 寫成歐拉形式：<span class=\"chem\">r = sqrt(1^2 + (-1)^2) = sqrt(2)</span> 及 <span class=\"chem\">theta = -pi/4</span>（第四象限）。",
        // EN: By De Moivre's theorem, <span class="chem">(1 - i)^{10} = (sqrt(2))^{10} e^{-i(10pi/4)} = 32(cos(-5pi/2) + i sin(-5pi/2))</span>.
        "根據棣美弗定理，<span class=\"chem\">(1 - i)^{10} = (sqrt(2))^{10} e^{-i(10pi/4)} = 32(cos(-5pi/2) + i sin(-5pi/2))</span>。",
      ],
      // EN: <p><span class="chem">1 - i = sqrt(2) e^{-i pi/4}</span>. Raising to the 10th power gives <span class="chem">(sqrt(2))^{10} e^{-i(5pi/2)} = 32(cos(-pi/2) + i sin(-pi/2)) = -32i</span>. Therefore <span class="chem">k = -32</span>.</p>
      solution: "<p><span class=\"chem\">1 - i = sqrt(2) e^{-i pi/4}</span>。取 10 次方得 <span class=\"chem\">(sqrt(2))^{10} e^{-i(5pi/2)} = 32(cos(-pi/2) + i sin(-pi/2)) = -32i</span>。因此 <span class=\"chem\">k = -32</span>。</p>",
    },

    // ── t1-4-q007 · numeric · exam · AHL · AHL 1.14 · 4 marks
    "t1-4-q007": {
      // EN: Let <span class="chem">z = 1 - sqrt(3)i</span>. Find the <strong>smallest positive integer <span class="chem">n</span></strong> for which <span class="chem">z^n</span> is a <strong>positive real number</strong>.
      stem: "設 <span class=\"chem\">z = 1 - sqrt(3)i</span>。求 (Find) 使 <span class=\"chem\">z^n</span> 為<strong>正實數</strong>的<strong>最小正整數 <span class=\"chem\">n</span></strong>。",
      hints: [
        // EN: Write <span class="chem">z = 1 - sqrt(3)i</span> in polar form: <span class="chem">r = 2</span> and <span class="chem">theta = -pi/3</span>.
        "把 <span class=\"chem\">z = 1 - sqrt(3)i</span> 寫成極坐標形式：<span class=\"chem\">r = 2</span> 及 <span class=\"chem\">theta = -pi/3</span>。",
        // EN: For <span class="chem">z^n = 2^n(cos(-n pi/3) + i sin(-n pi/3))</span> to be a <em>positive</em> real number, we need <span class="chem">sin(-n pi/3) = 0</span> AND <span class="chem">cos(-n pi/3) = +1</span> (note that <span class="chem">n = 3</span> gives <span class="chem">cos(-pi) = -1 &lt; 0</span>!).
        "要使 <span class=\"chem\">z^n = 2^n(cos(-n pi/3) + i sin(-n pi/3))</span> 為<em>正</em>實數，必須同時滿足 <span class=\"chem\">sin(-n pi/3) = 0</span> 及 <span class=\"chem\">cos(-n pi/3) = +1</span>（留意 <span class=\"chem\">n = 3</span> 時 <span class=\"chem\">cos(-pi) = -1 &lt; 0</span>！）。",
      ],
      // EN: <p><span class="chem">z = 2 e^{-i pi/3}</span>, so <span class="chem">z^n = 2^n e^{-i n pi/3}</span>. For <span class="chem">z^n</span> to be real and positive, we require <span class="chem">-n pi/3 = 2 pi k</span> for <span class="chem">k \in \mathbb{Z}</span>. The smallest positive integer is <span class="chem">n = 6</span> (since <span class="chem">n = 3</span> gives <span class="chem">z^3 = -8 &lt; 0</span>).</p>
      solution: "<p><span class=\"chem\">z = 2 e^{-i pi/3}</span>，故 <span class=\"chem\">z^n = 2^n e^{-i n pi/3}</span>。要使 <span class=\"chem\">z^n</span> 為正實數，必須有 <span class=\"chem\">-n pi/3 = 2 pi k</span>（<span class=\"chem\">k \\in \\mathbb{Z}</span>）。最小正整數為 <span class=\"chem\">n = 6</span>（因為 <span class=\"chem\">n = 3</span> 時 <span class=\"chem\">z^3 = -8 &lt; 0</span>）。</p>",
    },

    // ── t1-4-q008 · numeric · exam · AHL · AHL 1.14 · 5 marks
    "t1-4-q008": {
      // EN: The polynomial <span class="chem">P(z) = z^3 + az^2 + bz - 26</span> has real coefficients <span class="chem">a, b \in \mathbb{R}</span>. Given that <span class="chem">z_1 = -2 + 3i</span> is a root of <span class="chem">P(z) = 0</span>, find the real root of <span class="chem">P(z) = 0</span>.
      stem: "多項式 <span class=\"chem\">P(z) = z^3 + az^2 + bz - 26</span> 具有實係數 <span class=\"chem\">a, b \\in \\mathbb{R}</span>。已知 <span class=\"chem\">z_1 = -2 + 3i</span> 是 <span class=\"chem\">P(z) = 0</span> 的一個根，求 (find) <span class=\"chem\">P(z) = 0</span> 的實數根。",
      hints: [
        // EN: Since <span class="chem">P(z)</span> has real coefficients, the complex conjugate <span class="chem">z_2 = -2 - 3i</span> is also a root.
        "由於 <span class=\"chem\">P(z)</span> 具有實係數，其共軛複數 <span class=\"chem\">z_2 = -2 - 3i</span> 亦必為根。",
        // EN: The product of the conjugate pair is <span class="chem">z_1 z_2 = (-2)^2 + 3^2 = 13</span>, so the quadratic factor is <span class="chem">z^2 + 4z + 13</span>. Compare constant terms in <span class="chem">(z^2 + 4z + 13)(z - r) = z^3 + az^2 + bz - 26</span>.
        "共軛根對的積為 <span class=\"chem\">z_1 z_2 = (-2)^2 + 3^2 = 13</span>，故二次因式為 <span class=\"chem\">z^2 + 4z + 13</span>。比較 <span class=\"chem\">(z^2 + 4z + 13)(z - r) = z^3 + az^2 + bz - 26</span> 的常數項。",
      ],
      // EN: <p>By the Complex Conjugate Root Theorem, <span class="chem">z_2 = -2 - 3i</span> is also a root. The quadratic factor is <span class="chem">(z - z_1)(z - z_2) = z^2 + 4z + 13</span>. Since <span class="chem">P(z) = (z^2 + 4z + 13)(z - r)</span> and the constant term is <span class="chem">-13r = -26</span>, the real root is <span class="chem">r = 2</span>.</p>
      solution: "<p>根據共軛根定理，<span class=\"chem\">z_2 = -2 - 3i</span> 亦為根。二次因式為 <span class=\"chem\">(z - z_1)(z - z_2) = z^2 + 4z + 13</span>。由於 <span class=\"chem\">P(z) = (z^2 + 4z + 13)(z - r)</span> 且常數項為 <span class=\"chem\">-13r = -26</span>，故實數根為 <span class=\"chem\">r = 2</span>。</p>",
    },

    // ── t1-4-q009 · mcq · exam · AHL · AHL 1.14 · 2 marks
    "t1-4-q009": {
      // EN: Which of the following gives all four solutions to <span class="chem">z^4 = -16</span> in Euler form with <span class="chem">-pi &lt; arg(z) &lt;= pi</span>?
      stem: "下列哪一項以歐拉形式給出 <span class=\"chem\">z^4 = -16</span> 的全部四個解，且滿足 <span class=\"chem\">-pi &lt; arg(z) &lt;= pi</span>？",
      options: [
        // EN: <span class="chem">2 e^{+- i(pi/4)}</span> and <span class="chem">2 e^{+- i(3pi/4)}</span>
        "<span class=\"chem\">2 e^{+- i(pi/4)}</span> 及 <span class=\"chem\">2 e^{+- i(3pi/4)}</span>",
        // EN: <span class="chem">2 e^{i(0)}, 2 e^{i(pi/2)}, 2 e^{i pi}, 2 e^{-i(pi/2)}</span>
        "<span class=\"chem\">2 e^{i(0)}, 2 e^{i(pi/2)}, 2 e^{i pi}, 2 e^{-i(pi/2)}</span>",
        // EN: <span class="chem">4 e^{+- i(pi/4)}</span> and <span class="chem">4 e^{+- i(3pi/4)}</span>
        "<span class=\"chem\">4 e^{+- i(pi/4)}</span> 及 <span class=\"chem\">4 e^{+- i(3pi/4)}</span>",
        // EN: <span class="chem">2 e^{+- i(pi/6)}</span> and <span class="chem">2 e^{+- i(5pi/6)}</span>
        "<span class=\"chem\">2 e^{+- i(pi/6)}</span> 及 <span class=\"chem\">2 e^{+- i(5pi/6)}</span>",
      ],
      hints: [
        // EN: Write <span class="chem">-16</span> in Euler form with general argument: <span class="chem">-16 = 16 e^{i(pi + 2 pi k)}</span>.
        "把 <span class=\"chem\">-16</span> 寫成帶一般幅角的歐拉形式：<span class=\"chem\">-16 = 16 e^{i(pi + 2 pi k)}</span>。",
        // EN: Take the fourth root: <span class="chem">r = 16^{1/4} = 2</span> and <span class="chem">theta_k = (pi + 2 pi k) / 4</span> for <span class="chem">k = -2, -1, 0, 1</span>.
        "取四次方根：<span class=\"chem\">r = 16^{1/4} = 2</span> 及 <span class=\"chem\">theta_k = (pi + 2 pi k) / 4</span>（<span class=\"chem\">k = -2, -1, 0, 1</span>）。",
      ],
      // EN: <p>Writing <span class="chem">z^4 = 16 e^{i(pi + 2pi k)}</span> gives <span class="chem">z_k = 2 e^{i(pi + 2pi k)/4}</span>. Evaluating at <span class="chem">k = 0, 1, -1, -2</span> gives <span class="chem">2 e^{+- i(pi/4)}</span> and <span class="chem">2 e^{+- i(3pi/4)}</span>.</p>
      solution: "<p>寫成 <span class=\"chem\">z^4 = 16 e^{i(pi + 2pi k)}</span> 得 <span class=\"chem\">z_k = 2 e^{i(pi + 2pi k)/4}</span>。代入 <span class=\"chem\">k = 0, 1, -1, -2</span> 得 <span class=\"chem\">2 e^{+- i(pi/4)}</span> 及 <span class=\"chem\">2 e^{+- i(3pi/4)}</span>。</p>",
      misconception: {
        // EN (option B): Those are the roots of z⁴ = +16 (where arg(16) = 0). Here w = −16 has arg(−16) = π, so the angles are (π + 2πk)/4 = ±π/4, ±3π/4.
        "1": "這些是 z⁴ = +16（其中 arg(16) = 0）的根。此處 w = −16 的幅角為 arg(−16) = π，故角度為 (π + 2πk)/4 = ±π/4, ±3π/4。",
        // EN (option C): The modulus of each 4th root is 16<sup>1/4</sup> = 2, not 16<sup>1/2</sup> = 4.
        "2": "每個 4 次根的模是 16<sup>1/4</sup> = 2，而不是 16<sup>1/2</sup> = 4。",
        // EN (option D): Dividing π + 2πk by n = 4 gives odd multiples of π/4 (±π/4, ±3π/4), not multiples of π/6.
        "3": "把 π + 2πk 除以 n = 4 會得到 π/4 的奇數倍（±π/4, ±3π/4），而不是 π/6 的倍數。",
      },
    },

    // ── t1-4-q010 · numeric · exam · AHL · AHL 1.14 · 4 marks
    "t1-4-q010": {
      // EN: The five roots of <span class="chem">z^5 = 32i</span> form the vertices of a regular pentagon on the Argand diagram. Calculate the area of this regular pentagon to 3 significant figures.
      stem: "<span class=\"chem\">z^5 = 32i</span> 的五個根在阿根圖上構成一個正五邊形的頂點。計算 (Calculate) 該正五邊形的面積，答案須準確至 3 位有效數字。",
      hints: [
        // EN: Each root has modulus <span class="chem">r = 32^{1/5} = 2</span>, so all 5 vertices lie on a circle of radius <span class="chem">R = 2</span> centered at the origin.
        "每個根的模為 <span class=\"chem\">r = 32^{1/5} = 2</span>，因此全部 5 個頂點都落在以原點為圓心、半徑為 <span class=\"chem\">R = 2</span> 的圓上。",
        // EN: Split the regular pentagon into 5 congruent isosceles triangles meeting at the origin, each with two sides of length <span class="chem">R = 2</span> and included angle <span class="chem">2pi / 5</span>: <span class="chem">Area = 5 × (1/2) R^2 sin(2pi / 5)</span>.
        "把正五邊形分成 5 個在原點相交的全等等腰三角形，每個三角形有兩條長 <span class=\"chem\">R = 2</span> 的邊及夾角 <span class=\"chem\">2pi / 5</span>：<span class=\"chem\">Area = 5 × (1/2) R^2 sin(2pi / 5)</span>。",
      ],
      // EN: <p>The roots lie on a circle of radius <span class="chem">R = 32^{1/5} = 2</span> spaced by <span class="chem">2pi/5</span> radians. The pentagon consists of 5 triangles of area <span class="chem">(1/2)(2^2) sin(2pi/5)</span>, so total area <span class="chem">= 5 × 2 sin(2pi/5) = 10 sin(72^\circ) ≈ 9.51</span>.</p>
      solution: "<p>五個根落在半徑為 <span class=\"chem\">R = 32^{1/5} = 2</span> 的圓周上，相鄰夾角為 <span class=\"chem\">2pi/5</span> 弧度。正五邊形由 5 個面積為 <span class=\"chem\">(1/2)(2^2) sin(2pi/5)</span> 的三角形組成，故總面積 <span class=\"chem\">= 5 × 2 sin(2pi/5) = 10 sin(72^\\circ) ≈ 9.51</span>。</p>",
    },

    // ── t1-4-q011 · multi · exam · AHL · AHL 1.14 · 3 marks
    "t1-4-q011": {
      // EN: Let <span class="chem">omega = e^{i(2pi/5)}</span> be a primitive fifth root of unity (<span class="chem">omega^5 = 1, omega != 1</span>). Select <strong>all</strong> statements that are true.
      stem: "設 <span class=\"chem\">omega = e^{i(2pi/5)}</span> 為一個本原五次單位根（<span class=\"chem\">omega^5 = 1, omega != 1</span>）。選出<strong>所有</strong>正確的陳述。",
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
        "利用等比級數公式 <span class=\"chem\">(1 - omega^5)/(1 - omega)</span> 檢查所有 <span class=\"chem\">n</span> 次單位根之和。",
        // EN: Notice that <span class="chem">omega^4 = e^{i(8pi/5)} = e^{-i(2pi/5)} = omega^*</span> and <span class="chem">omega^3 = e^{i(6pi/5)} = e^{-i(4pi/5)} = (omega^2)^*</span>.
        "留意 <span class=\"chem\">omega^4 = e^{i(8pi/5)} = e^{-i(2pi/5)} = omega^*</span> 及 <span class=\"chem\">omega^3 = e^{i(6pi/5)} = e^{-i(4pi/5)} = (omega^2)^*</span>。",
      ],
      // EN: <p>Since <span class="chem">omega^5 = 1</span> and <span class="chem">omega != 1</span>, <span class="chem">1 + omega + omega^2 + omega^3 + omega^4 = (1 - omega^5)/(1 - omega) = 0</span>. Also <span class="chem">omega^4 = omega^{-1} = omega^*</span>, and <span class="chem">omega^2 + omega^3 = e^{i(4pi/5)} + e^{-i(4pi/5)} = 2 cos(4pi/5)</span>.</p>
      solution: "<p>因為 <span class=\"chem\">omega^5 = 1</span> 且 <span class=\"chem\">omega != 1</span>，所以 <span class=\"chem\">1 + omega + omega^2 + omega^3 + omega^4 = (1 - omega^5)/(1 - omega) = 0</span>。此外 <span class=\"chem\">omega^4 = omega^{-1} = omega^*</span>，且 <span class=\"chem\">omega^2 + omega^3 = e^{i(4pi/5)} + e^{-i(4pi/5)} = 2 cos(4pi/5)</span>。</p>",
      misconception: {
        // EN (option D): Since 1 + ω + ω² + ω³ + ω⁴ = 0, both its real part and its imaginary part are 0, not 1.
        "3": "因為 1 + ω + ω² + ω³ + ω⁴ = 0，它的實部與虛部都等於 0，而不是 1。",
      },
    },

    // ── t1-4-q012 · order · exam · AHL · AHL 1.14 · 4 marks
    "t1-4-q012": {
      // EN: Arrange the steps in logical order to prove the triple-angle identity <span class="chem">cos(3 theta) = 4 cos^3(theta) - 3 cos(theta)</span> using De Moivre's theorem.
      stem: "把下列步驟按邏輯順序排列，以利用棣美弗定理證明 (prove) 三倍角恒等式 <span class=\"chem\">cos(3 theta) = 4 cos^3(theta) - 3 cos(theta)</span>。",
      options: [
        // EN: By De Moivre's theorem, <span class="chem">cos(3 theta) + i sin(3 theta) = (cos theta + i sin theta)^3</span>.
        "根據棣美弗定理，<span class=\"chem\">cos(3 theta) + i sin(3 theta) = (cos theta + i sin theta)^3</span>。",
        // EN: Expand the right-hand side using the binomial theorem: <span class="chem">cos^3 theta + 3i cos^2 theta sin theta + 3i^2 cos theta sin^2 theta + i^3 sin^3 theta</span>.
        "利用二項式定理展開右方：<span class=\"chem\">cos^3 theta + 3i cos^2 theta sin theta + 3i^2 cos theta sin^2 theta + i^3 sin^3 theta</span>。",
        // EN: Simplify powers of <span class="chem">i</span> and equate real parts on both sides: <span class="chem">cos(3 theta) = cos^3 theta - 3 cos theta sin^2 theta</span>.
        "化簡 <span class=\"chem\">i</span> 的冪並比較兩邊實部：<span class=\"chem\">cos(3 theta) = cos^3 theta - 3 cos theta sin^2 theta</span>。",
        // EN: Substitute the Pythagorean identity <span class="chem">sin^2 theta = 1 - cos^2 theta</span> and collect like terms to obtain <span class="chem">cos(3 theta) = 4 cos^3 theta - 3 cos theta</span>.
        "代入畢氏恒等式 <span class=\"chem\">sin^2 theta = 1 - cos^2 theta</span> 並合併同類項，得 <span class=\"chem\">cos(3 theta) = 4 cos^3 theta - 3 cos theta</span>。",
      ],
      hints: [
        // EN: Start with the statement of De Moivre's theorem for <span class="chem">n = 3</span>.
        "先寫出 <span class=\"chem\">n = 3</span> 時的棣美弗定理。",
        // EN: Next expand the cube using the binomial theorem, equate the real parts, and finally eliminate <span class="chem">sin^2 theta</span>.
        "接着用二項式定理展開立方，比較實部，最後消去 <span class=\"chem\">sin^2 theta</span>。",
      ],
      // EN: <p>First state De Moivre's theorem for <span class="chem">n = 3</span>, then expand <span class="chem">(cos theta + i sin theta)^3</span> binomially, equate real parts using <span class="chem">i^2 = -1</span>, and replace <span class="chem">sin^2 theta = 1 - cos^2 theta</span>.</p>
      solution: "<p>先列出 <span class=\"chem\">n = 3</span> 的棣美弗定理，再用二項式展開 <span class=\"chem\">(cos theta + i sin theta)^3</span>，利用 <span class=\"chem\">i^2 = -1</span> 比較實部，最後代入 <span class=\"chem\">sin^2 theta = 1 - cos^2 theta</span>。</p>",
    },

    // ── t1-4-q013 · numeric · exam · AHL · AHL 1.14 · 4 marks
    "t1-4-q013": {
      // EN: By expanding <span class="chem">(cos theta + i sin theta)^4</span> and equating real parts, <span class="chem">cos(4 theta)</span> can be written in the form <span class="chem">A cos^4(theta) + B cos^2(theta) + C</span>. Find the value of <span class="chem">B</span>.
      stem: "把 <span class=\"chem\">(cos theta + i sin theta)^4</span> 展開並比較實部，可將 <span class=\"chem\">cos(4 theta)</span> 寫成 <span class=\"chem\">A cos^4(theta) + B cos^2(theta) + C</span> 的形式。求 (Find) <span class=\"chem\">B</span> 的值。",
      hints: [
        // EN: <span class="chem">Re((cos theta + i sin theta)^4) = cos^4 theta - 6 cos^2 theta sin^2 theta + sin^4 theta</span>.
        "<span class=\"chem\">Re((cos theta + i sin theta)^4) = cos^4 theta - 6 cos^2 theta sin^2 theta + sin^4 theta</span>。",
        // EN: Replace <span class="chem">sin^2 theta = 1 - cos^2 theta</span> and <span class="chem">sin^4 theta = (1 - cos^2 theta)^2</span>, then collect the <span class="chem">cos^2 theta</span> terms.
        "代入 <span class=\"chem\">sin^2 theta = 1 - cos^2 theta</span> 及 <span class=\"chem\">sin^4 theta = (1 - cos^2 theta)^2</span>，再合併 <span class=\"chem\">cos^2 theta</span> 項。",
      ],
      // EN: <p><span class="chem">cos(4 theta) = cos^4 theta - 6 cos^2 theta(1 - cos^2 theta) + (1 - cos^2 theta)^2 = 8 cos^4 theta - 8 cos^2 theta + 1</span>. Thus <span class="chem">A = 8</span>, <span class="chem">B = -8</span> and <span class="chem">C = 1</span>.</p>
      solution: "<p><span class=\"chem\">cos(4 theta) = cos^4 theta - 6 cos^2 theta(1 - cos^2 theta) + (1 - cos^2 theta)^2 = 8 cos^4 theta - 8 cos^2 theta + 1</span>。因此 <span class=\"chem\">A = 8</span>、<span class=\"chem\">B = -8</span> 及 <span class=\"chem\">C = 1</span>。</p>",
    },

    // ── t1-4-q014 · mcq · exam · AHL · AHL 1.14 · 2 marks
    "t1-4-q014": {
      // EN: A real quartic polynomial <span class="chem">P(z)</span> has roots <span class="chem">1 + 2i</span> and <span class="chem">3 - i</span>, and leading coefficient <span class="chem">1</span>. What is the constant term of <span class="chem">P(z)</span>?
      stem: "一個實係數四次多項式 <span class=\"chem\">P(z)</span> 的根包括 <span class=\"chem\">1 + 2i</span> 及 <span class=\"chem\">3 - i</span>，且首項係數為 <span class=\"chem\">1</span>。<span class=\"chem\">P(z)</span> 的常數項是多少？",
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
        "由於 <span class=\"chem\">P(z)</span> 具有實係數，其四個根為 <span class=\"chem\">1 +- 2i</span> 及 <span class=\"chem\">3 +- i</span>。",
        // EN: The constant term of the monic quartic is the product of all four roots: <span class="chem">|1 + 2i|^2 × |3 - i|^2</span>.
        "首一四次多項式的常數項為四個根的積：<span class=\"chem\">|1 + 2i|^2 × |3 - i|^2</span>。",
      ],
      // EN: <p>The two quadratic factors are <span class="chem">(z^2 - 2z + 5)</span> and <span class="chem">(z^2 - 6z + 10)</span>. Multiplying their constant terms gives <span class="chem">5 × 10 = 50</span>.</p>
      solution: "<p>兩個二次因式為 <span class=\"chem\">(z^2 - 2z + 5)</span> 及 <span class=\"chem\">(z^2 - 6z + 10)</span>。將兩者的常數項相乘得 <span class=\"chem\">5 × 10 = 50</span>。</p>",
      misconception: {
        // EN (option B): 10 is the modulus squared of only one conjugate pair (3² + (−1)² = 10), forgetting to multiply by the other pair (1² + 2² = 5).
        "1": "10 只是其中一對共軛根的模平方（3² + (−1)² = 10），忘記乘以另一對共軛根（1² + 2² = 5）。",
        // EN (option C): The product of each complex conjugate pair (z − z₁)(z − z₁*) = |z₁|² is always positive, so the constant term is (+5)(+10) = +50.
        "2": "每對共軛複數根之積 (z − z₁)(z − z₁*) = |z₁|² 必為正數，因此常數項為 (+5)(+10) = +50。",
        // EN (option D): You added |1 + 2i|² + |3 − i|² = 5 + 10 = 15 instead of multiplying the two quadratic factors.
        "3": "你把 |1 + 2i|² + |3 − i|² = 5 + 10 = 15 相加了，而不是把兩個二次因式相乘。",
      },
    },

    // ── t1-4-q015 · numeric · exam · AHL · AHL 1.14 · 5 marks
    "t1-4-q015": {
      // EN: Let <span class="chem">z = cos theta + i sin theta</span>. Using <span class="chem">2 cos theta = z + z^{-1}</span>, it can be shown that <span class="chem">cos^4 theta = (1/8) cos(4 theta) + (1/2) cos(2 theta) + K</span>, where <span class="chem">K</span> is a constant. Find the exact value of <span class="chem">K</span>.
      stem: "設 <span class=\"chem\">z = cos theta + i sin theta</span>。利用 <span class=\"chem\">2 cos theta = z + z^{-1}</span>，可證得 <span class=\"chem\">cos^4 theta = (1/8) cos(4 theta) + (1/2) cos(2 theta) + K</span>，其中 <span class=\"chem\">K</span> 為常數。求 (Find) <span class=\"chem\">K</span> 的準確值。",
      hints: [
        // EN: Expand <span class="chem">(2 cos theta)^4 = (z + z^{-1})^4 = z^4 + 4z^2 + 6 + 4z^{-2} + z^{-4}</span>.
        "展開 <span class=\"chem\">(2 cos theta)^4 = (z + z^{-1})^4 = z^4 + 4z^2 + 6 + 4z^{-2} + z^{-4}</span>。",
        // EN: Group symmetric pairs: <span class="chem">16 cos^4 theta = (z^4 + z^{-4}) + 4(z^2 + z^{-2}) + 6 = 2 cos(4 theta) + 8 cos(2 theta) + 6</span>, then divide by <span class="chem">16</span>.
        "把對稱項配對：<span class=\"chem\">16 cos^4 theta = (z^4 + z^{-4}) + 4(z^2 + z^{-2}) + 6 = 2 cos(4 theta) + 8 cos(2 theta) + 6</span>，再除以 <span class=\"chem\">16</span>。",
      ],
      // EN: <p><span class="chem">16 cos^4 theta = (z + z^{-1})^4 = (z^4 + z^{-4}) + 4(z^2 + z^{-2}) + 6 = 2 cos(4 theta) + 8 cos(2 theta) + 6</span>. Dividing both sides by 16 gives <span class="chem">K = 6/16 = 3/8 = 0.375</span>.</p>
      solution: "<p><span class=\"chem\">16 cos^4 theta = (z + z^{-1})^4 = (z^4 + z^{-4}) + 4(z^2 + z^{-2}) + 6 = 2 cos(4 theta) + 8 cos(2 theta) + 6</span>。兩邊同除以 16 得 <span class=\"chem\">K = 6/16 = 3/8 = 0.375</span>。</p>",
    },

    // ── t1-4-q016 · numeric · foundation · AHL · AHL 1.14 · 2 marks
    "t1-4-q016": {
      // EN: Let <span class="chem">omega = e^{i(2pi/5)}</span>. By considering the real part of <span class="chem">1 + omega + omega^2 + omega^3 + omega^4 = 0</span> and noting that <span class="chem">cos(8pi/5) = cos(2pi/5)</span> and <span class="chem">cos(6pi/5) = cos(4pi/5)</span>, find the exact value of <span class="chem">cos(2pi/5) + cos(4pi/5)</span>.
      stem: "設 <span class=\"chem\">omega = e^{i(2pi/5)}</span>。考慮 <span class=\"chem\">1 + omega + omega^2 + omega^3 + omega^4 = 0</span> 的實部，並留意 <span class=\"chem\">cos(8pi/5) = cos(2pi/5)</span> 及 <span class=\"chem\">cos(6pi/5) = cos(4pi/5)</span>，求 (find) <span class=\"chem\">cos(2pi/5) + cos(4pi/5)</span> 的準確值。",
      hints: [
        // EN: Take the real part of <span class="chem">1 + e^{i(2pi/5)} + e^{i(4pi/5)} + e^{i(6pi/5)} + e^{i(8pi/5)} = 0</span>.
        "取 <span class=\"chem\">1 + e^{i(2pi/5)} + e^{i(4pi/5)} + e^{i(6pi/5)} + e^{i(8pi/5)} = 0</span> 的實部。",
        // EN: Since <span class="chem">cos(8pi/5) = cos(2pi/5)</span> and <span class="chem">cos(6pi/5) = cos(4pi/5)</span>, we get <span class="chem">1 + 2 cos(2pi/5) + 2 cos(4pi/5) = 0</span>.
        "因為 <span class=\"chem\">cos(8pi/5) = cos(2pi/5)</span> 且 <span class=\"chem\">cos(6pi/5) = cos(4pi/5)</span>，我們得 <span class=\"chem\">1 + 2 cos(2pi/5) + 2 cos(4pi/5) = 0</span>。",
      ],
      // EN: <p>Equating the real part of <span class="chem">1 + omega + omega^2 + omega^3 + omega^4 = 0</span> to zero gives <span class="chem">1 + 2 cos(2pi/5) + 2 cos(4pi/5) = 0</span>, hence <span class="chem">cos(2pi/5) + cos(4pi/5) = -1/2 = -0.5</span>.</p>
      solution: "<p>令 <span class=\"chem\">1 + omega + omega^2 + omega^3 + omega^4 = 0</span> 的實部等於零，得 <span class=\"chem\">1 + 2 cos(2pi/5) + 2 cos(4pi/5) = 0</span>，由此得 <span class=\"chem\">cos(2pi/5) + cos(4pi/5) = -1/2 = -0.5</span>。</p>",
    },

    // ── t1-4-q017 · short · exam · AHL · AHL 1.13 · 6 marks
    "t1-4-q017": {
      // EN: Let <span class="chem">z_1 = 2 + 2i</span> and <span class="chem">z_2 = -1 + sqrt(3)i</span>.<br>(a) Express <span class="chem">z_1</span> and <span class="chem">z_2</span> in the form <span class="chem">r e^{i theta}</span>, where <span class="chem">r &gt; 0</span> and <span class="chem">-pi &lt; theta &lt;= pi</span>. [3 marks]<br>(b) Hence find the exact value of <span class="chem">(z_1)^4 / (z_2)^3</span> in Cartesian form <span class="chem">a + bi</span>. [3 marks]
      stem: "設 <span class=\"chem\">z_1 = 2 + 2i</span> 及 <span class=\"chem\">z_2 = -1 + sqrt(3)i</span>。<br>(a) 把 <span class=\"chem\">z_1</span> 及 <span class=\"chem\">z_2</span> 表示為 (Express ... in the form) <span class=\"chem\">r e^{i theta}</span>，其中 <span class=\"chem\">r &gt; 0</span> 且 <span class=\"chem\">-pi &lt; theta &lt;= pi</span>。[3 marks]<br>(b) 由此求 (Hence find) <span class=\"chem\">(z_1)^4 / (z_2)^3</span> 的準確值，並以笛卡兒形式 <span class=\"chem\">a + bi</span> 表示。[3 marks]",
      hints: [
        // EN: For part (a), remember <span class="chem">z_2 = -1 + sqrt(3)i</span> lies in Quadrant II, so <span class="chem">arg(z_2) = pi - pi/3 = 2pi/3</span>.
        "在 (a) 部中，緊記 <span class=\"chem\">z_2 = -1 + sqrt(3)i</span> 位於第二象限，故 <span class=\"chem\">arg(z_2) = pi - pi/3 = 2pi/3</span>。",
        // EN: For part (b), use De Moivre's theorem before dividing: <span class="chem">(2 sqrt(2))^4 = 64</span> and <span class="chem">2^3 = 8</span>.
        "在 (b) 部中，先運用棣美弗定理再相除：<span class=\"chem\">(2 sqrt(2))^4 = 64</span> 及 <span class=\"chem\">2^3 = 8</span>。",
      ],
      // EN: <p>(a) <span class="chem">|z_1| = sqrt(4 + 4) = 2 sqrt(2)</span>, <span class="chem">arg(z_1) = pi/4 =&gt; z_1 = 2 sqrt(2) e^{i(pi/4)}</span>. <span class="chem">|z_2| = sqrt(1 + 3) = 2</span>, <span class="chem">arg(z_2) = 2pi/3 =&gt; z_2 = 2 e^{i(2pi/3)}</span>.<br>(b) <span class="chem">z_1^4 / z_2^3 = (64 e^{i pi}) / (8 e^{i(2pi)}) = 8 e^{-i pi} = -8</span>.</p>
      solution: "<p>(a) <span class=\"chem\">|z_1| = sqrt(4 + 4) = 2 sqrt(2)</span>，<span class=\"chem\">arg(z_1) = pi/4 =&gt; z_1 = 2 sqrt(2) e^{i(pi/4)}</span>。<span class=\"chem\">|z_2| = sqrt(1 + 3) = 2</span>，<span class=\"chem\">arg(z_2) = 2pi/3 =&gt; z_2 = 2 e^{i(2pi/3)}</span>。<br>(b) <span class=\"chem\">z_1^4 / z_2^3 = (64 e^{i pi}) / (8 e^{i(2pi)}) = 8 e^{-i pi} = -8</span>。</p>",
      // EN: <p>(a) <span class="chem">z_1 = 2 sqrt(2) e^{i(pi/4)}</span> and <span class="chem">z_2 = 2 e^{i(2pi/3)}</span>.<br>(b) <span class="chem">(z_1)^4 / (z_2)^3 = (64 e^{i pi}) / (8 e^{i(2pi)}) = 8 e^{-i pi} = -8</span>.</p>
      answer: "<p>(a) <span class=\"chem\">z_1 = 2 sqrt(2) e^{i(pi/4)}</span> 及 <span class=\"chem\">z_2 = 2 e^{i(2pi/3)}</span>。<br>(b) <span class=\"chem\">(z_1)^4 / (z_2)^3 = (64 e^{i pi}) / (8 e^{i(2pi)}) = 8 e^{-i pi} = -8</span>。</p>",
      markscheme: [
        // EN: A1: Correct Euler form z₁ = 2√2 e<sup>iπ/4</sup> (or √8 e<sup>iπ/4</sup>).
        "A1：寫出正確歐拉形式 z₁ = 2√2 e<sup>iπ/4</sup>（或 √8 e<sup>iπ/4</sup>）。",
        // EN: M1: Correct modulus |z₂| = 2 and Quadrant II angle calculation π − π/3.
        "M1：求得正確模 |z₂| = 2 及第二象限幅角計算 π − π/3。",
        // EN: A1: Correct Euler form z₂ = 2 e<sup>i(2π/3)</sup>.
        "A1：寫出正確歐拉形式 z₂ = 2 e<sup>i(2π/3)</sup>。",
        // EN: M1: Applies De Moivre's theorem to numerator and denominator: (2√2)⁴ e<sup>iπ</sup> = 64 e<sup>iπ</sup> and 2³ e<sup>i(2π)</sup> = 8 e<sup>i(2π)</sup>.
        "M1：對分子及分母應用棣美弗定理：(2√2)⁴ e<sup>iπ</sup> = 64 e<sup>iπ</sup> 及 2³ e<sup>i(2π)</sup> = 8 e<sup>i(2π)</sup>。",
        // EN: M1: Divides moduli (64 / 8 = 8) and subtracts arguments (π − 2π = −π).
        "M1：將模相除（64 / 8 = 8）及將幅角相減（π − 2π = −π）。",
        // EN: A1: Evaluates 8(cos(−π) + i sin(−π)) = −8 (or −8 + 0i).
        "A1：計出 8(cos(−π) + i sin(−π)) = −8（或 −8 + 0i）。",
      ],
    },

    // ── t1-4-q018 · short · challenge · AHL · AHL 1.14 · 7 marks
    "t1-4-q018": {
      // EN: Consider the equation <span class="chem">z^4 + 4z^2 + 16 = 0</span>, where <span class="chem">z \in \mathbb{C}</span>.<br>(a) By letting <span class="chem">w = z^2</span>, find the two possible values of <span class="chem">w</span> in Euler form <span class="chem">r e^{i theta}</span>. [3 marks]<br>(b) Hence find all four roots of <span class="chem">z^4 + 4z^2 + 16 = 0</span> in Cartesian form <span class="chem">a + bi</span>, and factorize <span class="chem">z^4 + 4z^2 + 16</span> into the product of two real quadratic factors. [4 marks]
      stem: "考慮方程 <span class=\"chem\">z^4 + 4z^2 + 16 = 0</span>，其中 <span class=\"chem\">z \\in \\mathbb{C}</span>。<br>(a) 設 <span class=\"chem\">w = z^2</span>，求 (find) <span class=\"chem\">w</span> 的兩個可能值，並以歐拉形式 <span class=\"chem\">r e^{i theta}</span> 表示。[3 marks]<br>(b) 由此求 (Hence find) <span class=\"chem\">z^4 + 4z^2 + 16 = 0</span> 的全部四個根，並以笛卡兒形式 <span class=\"chem\">a + bi</span> 表示，再把 <span class=\"chem\">z^4 + 4z^2 + 16</span> 因式分解為兩個實係數二次因式之積。[4 marks]",
      hints: [
        // EN: Decode: a quartic with only even powers is a quadratic in disguise. Solve for <span class="chem">w = z^2</span> first, take square roots in Euler form, then multiply conjugate pairs back together to get real quadratic factors.
        "解碼：只含偶次冪的四次方程其實是偽裝的二次方程。先解 <span class=\"chem\">w = z^2</span>，再以歐拉形式取平方根，最後把共軛對相乘，得到實係數二次因式。",
        // EN: Solve <span class="chem">w^2 + 4w + 16 = 0</span> using the quadratic formula to get <span class="chem">w = -2 +- 2 sqrt(3)i</span>.
        "用二次公式解 <span class=\"chem\">w^2 + 4w + 16 = 0</span> 得 <span class=\"chem\">w = -2 +- 2 sqrt(3)i</span>。",
        // EN: Take the square roots of <span class="chem">4 e^{+- i(2pi/3)}</span> to get four roots of modulus <span class="chem">2</span> and arguments <span class="chem">+- pi/3</span> and <span class="chem">+- 2pi/3</span>.
        "取 <span class=\"chem\">4 e^{+- i(2pi/3)}</span> 的平方根，得到模為 <span class=\"chem\">2</span>、幅角為 <span class=\"chem\">+- pi/3</span> 及 <span class=\"chem\">+- 2pi/3</span> 的四個根。",
      ],
      // EN: <p><strong>Decode.</strong> The quartic is a quadratic in <span class="chem">w = z^2</span>.<br>(a) <span class="chem">w = (-4 +- sqrt(-48))/2 = -2 +- 2 sqrt(3)i = 4 e^{+- i(2pi/3)}</span>.<br>(b) Taking square roots gives <span class="chem">z = 2 e^{+- i(pi/3)} = 1 +- sqrt(3)i</span> and <span class="chem">z = 2 e^{+- i(2pi/3)} = -1 +- sqrt(3)i</span>. Pairing conjugates gives <span class="chem">(z^2 - 2z + 4)(z^2 + 2z + 4)</span>.</p>
      solution: "<p><strong>解碼。</strong> 此四次式是關於 <span class=\"chem\">w = z^2</span> 的二次式。<br>(a) <span class=\"chem\">w = (-4 +- sqrt(-48))/2 = -2 +- 2 sqrt(3)i = 4 e^{+- i(2pi/3)}</span>。<br>(b) 取平方根得 <span class=\"chem\">z = 2 e^{+- i(pi/3)} = 1 +- sqrt(3)i</span> 及 <span class=\"chem\">z = 2 e^{+- i(2pi/3)} = -1 +- sqrt(3)i</span>。把共軛根配對得 <span class=\"chem\">(z^2 - 2z + 4)(z^2 + 2z + 4)</span>。</p>",
      // EN: <p>(a) <span class="chem">w = -2 +- 2 sqrt(3)i = 4 e^{+- i(2pi/3)}</span>.<br>(b) The four roots are <span class="chem">z = +- (1 + sqrt(3)i)</span> and <span class="chem">z = +- (1 - sqrt(3)i)</span>. Grouping conjugate pairs gives <span class="chem">z^4 + 4z^2 + 16 = (z^2 - 2z + 4)(z^2 + 2z + 4)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">w = -2 +- 2 sqrt(3)i = 4 e^{+- i(2pi/3)}</span>。<br>(b) 四個根為 <span class=\"chem\">z = +- (1 + sqrt(3)i)</span> 及 <span class=\"chem\">z = +- (1 - sqrt(3)i)</span>。把共軛根對分組得 <span class=\"chem\">z^4 + 4z^2 + 16 = (z^2 - 2z + 4)(z^2 + 2z + 4)</span>。</p>",
      markscheme: [
        // EN: M1: Uses the quadratic formula on w² + 4w + 16 = 0 to get w = (−4 ± √(16 − 64))/2 = −2 ± 2√3 i.
        "M1：對 w² + 4w + 16 = 0 使用二次公式，得 w = (−4 ± √(16 − 64))/2 = −2 ± 2√3 i。",
        // EN: A1: Correctly finds modulus |w| = √(4 + 12) = 4.
        "A1：正確求得模 |w| = √(4 + 12) = 4。",
        // EN: A1: Writes w = 4 e<sup>i(2π/3)</sup> and w = 4 e<sup>−i(2π/3)</sup>.
        "A1：寫出 w = 4 e<sup>i(2π/3)</sup> 及 w = 4 e<sup>−i(2π/3)</sup>。",
        // EN: M1: Takes square roots of w to get r = 2 and arguments ±π/3 and ±(π/3 − π) = ±2π/3.
        "M1：取 w 的平方根，得 r = 2 及幅角 ±π/3 與 ±(π/3 − π) = ±2π/3。",
        // EN: A1: Converts the four roots to Cartesian form: 1 ± √3 i and −1 ± √3 i.
        "A1：把四個根轉化為笛卡兒形式：1 ± √3 i 及 −1 ± √3 i。",
        // EN: M1: Pairs complex conjugates (z − (1 + √3 i))(z − (1 − √3 i)) and (z − (−1 + √3 i))(z − (−1 − √3 i)).
        "M1：配對共軛複數 (z − (1 + √3 i))(z − (1 − √3 i)) 與 (z − (−1 + √3 i))(z − (−1 − √3 i))。",
        // EN: A1: Obtains (z² − 2z + 4)(z² + 2z + 4).
        "A1：求得 (z² − 2z + 4)(z² + 2z + 4)。",
      ],
    },

    // ── t1-4-q019 · order · exam · AHL · AHL 1.14 · 5 marks
    "t1-4-q019": {
      // EN: Arrange the steps in logical order to prove by mathematical induction that <span class="chem">(cos theta + i sin theta)^n = cos(n theta) + i sin(n theta)</span> for all <span class="chem">n \in \mathbb{Z}^+</span>.
      stem: "把以下步驟按邏輯次序排列，以數學歸納法證明對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>，<span class=\"chem\">(cos theta + i sin theta)^n = cos(n theta) + i sin(n theta)</span>。",
      options: [
        // EN: Base case: for <span class="chem">n = 1</span>, both sides equal <span class="chem">cos theta + i sin theta</span>, so <span class="chem">P(1)</span> is true.
        "初始步驟：當 <span class=\"chem\">n = 1</span>，兩邊均等於 <span class=\"chem\">cos theta + i sin theta</span>，故 <span class=\"chem\">P(1)</span> 成立。",
        // EN: Assume <span class="chem">(cos theta + i sin theta)^k = cos(k theta) + i sin(k theta)</span> for some <span class="chem">k \in \mathbb{Z}^+</span>.
        "假設對某 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>，<span class=\"chem\">(cos theta + i sin theta)^k = cos(k theta) + i sin(k theta)</span> 成立。",
        // EN: Write <span class="chem">(cos theta + i sin theta)^{k+1} = (cos(k theta) + i sin(k theta))(cos theta + i sin theta)</span> and expand the brackets.
        "寫出 <span class=\"chem\">(cos theta + i sin theta)^{k+1} = (cos(k theta) + i sin(k theta))(cos theta + i sin theta)</span> 並展開括號。",
        // EN: Use the compound angle identities for <span class="chem">cos(A + B)</span> and <span class="chem">sin(A + B)</span> to obtain <span class="chem">cos((k + 1)theta) + i sin((k + 1)theta)</span>, so <span class="chem">P(k + 1)</span> is true.
        "利用 <span class=\"chem\">cos(A + B)</span> 及 <span class=\"chem\">sin(A + B)</span> 的複角公式得出 <span class=\"chem\">cos((k + 1)theta) + i sin((k + 1)theta)</span>，故 <span class=\"chem\">P(k + 1)</span> 成立。",
        // EN: Since <span class="chem">P(1)</span> is true and <span class="chem">P(k)</span> being true implies <span class="chem">P(k + 1)</span> is true, by the principle of mathematical induction the result holds for all <span class="chem">n \in \mathbb{Z}^+</span>.
        "由於 <span class=\"chem\">P(1)</span> 成立，且當 <span class=\"chem\">P(k)</span> 成立時 <span class=\"chem\">P(k + 1)</span> 亦成立，根據數學歸納法原理，結果對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span> 均成立。",
      ],
      hints: [
        // EN: An induction proof always runs: base case, inductive hypothesis, inductive step, conclusion.
        "數學歸納法的證明總是依次為：初始步驟、歸納假設、歸納步驟、總結。",
        // EN: In the inductive step, the real part of the product is <span class="chem">cos(k theta) cos theta - sin(k theta) sin theta = cos((k + 1)theta)</span>.
        "在歸納步驟中，乘積的實部是 <span class=\"chem\">cos(k theta) cos theta - sin(k theta) sin theta = cos((k + 1)theta)</span>。",
      ],
      // EN: <p>Prove <span class="chem">P(1)</span>, assume <span class="chem">P(k)</span> for some <span class="chem">k \in \mathbb{Z}^+</span>, then write the <span class="chem">(k + 1)</span>-th power as the <span class="chem">k</span>-th power times <span class="chem">cos theta + i sin theta</span>. Expanding gives <span class="chem">(cos(k theta) cos theta - sin(k theta) sin theta) + i(sin(k theta) cos theta + cos(k theta) sin theta) = cos((k + 1)theta) + i sin((k + 1)theta)</span>. Finish with the conclusion sentence.</p>
      solution: "<p>先證明 <span class=\"chem\">P(1)</span>，假設對某 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>，<span class=\"chem\">P(k)</span> 成立，然後把 <span class=\"chem\">(k + 1)</span> 次方寫成 <span class=\"chem\">k</span> 次方乘以 <span class=\"chem\">cos theta + i sin theta</span>。展開後得 <span class=\"chem\">(cos(k theta) cos theta - sin(k theta) sin theta) + i(sin(k theta) cos theta + cos(k theta) sin theta) = cos((k + 1)theta) + i sin((k + 1)theta)</span>。最後寫出總結句。</p>",
    },

  }
});
