/* t1-4.q — ko question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't1-4.q', {
  questions: {

    // ── t1-4-q001 · mcq · foundation · AHL · AHL 1.12 · 2 marks
    "t1-4-q001": {
      // EN: Let <span class="chem">z = (7 - 4i) / (2 + i)</span>. What is the imaginary part <span class="chem">Im(z)</span>?
      stem: "<span class=\"chem\">z = (7 - 4i) / (2 + i)</span>라 하자. 허수부 <span class=\"chem\">Im(z)</span>는 무엇인가요?",
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
        "분자·분모에 분모의 켤레복소수인 <span class=\"chem\">2 - i</span>를 곱하세요.",
        // EN: <span class="chem">z = ((7 - 4i)(2 - i)) / (2^2 + 1^2) = (14 - 7i - 8i + 4i^2) / 5 = (10 - 15i) / 5 = 2 - 3i</span>. Remember <span class="chem">Im(a + bi) = b</span>.
        "<span class=\"chem\">z = ((7 - 4i)(2 - i)) / (2^2 + 1^2) = (14 - 7i - 8i + 4i^2) / 5 = (10 - 15i) / 5 = 2 - 3i</span>. <span class=\"chem\">Im(a + bi) = b</span>임을 기억하세요.",
      ],
      // EN: <p>Multiply numerator and denominator by <span class="chem">2 - i</span>: <span class="chem">z = ((7 - 4i)(2 - i)) / (2^2 + 1^2) = (10 - 15i) / 5 = 2 - 3i</span>. Therefore <span class="chem">Im(z) = -3</span>.</p>
      solution: "<p>분자·분모에 <span class=\"chem\">2 - i</span>를 곱하면: <span class=\"chem\">z = ((7 - 4i)(2 - i)) / (2^2 + 1^2) = (10 - 15i) / 5 = 2 - 3i</span>. 따라서 <span class=\"chem\">Im(z) = -3</span>이에요.</p>",
      misconception: {
        // EN (option B): The imaginary part Im(z) of z = a + bi is the real coefficient b = −3, never −3i.
        "1": "z = a + bi의 허수부 Im(z)는 −3i가 아니라 실수 계수 b = −3이에요.",
        // EN (option C): Check the sign when multiplying by the conjugate (2 − i): the imaginary term in the numerator is −7i − 8i = −15i, not +7i − 8i = −i.
        "2": "켤레복소수 (2 − i)를 곱할 때 부호를 확인하세요: 분자의 허수항은 +7i − 8i = −i가 아니라 −7i − 8i = −15i예요.",
        // EN (option D): 2 is the real part Re(z) = (14 − 4)/5 = 10/5 = 2, whereas the question asks for Im(z).
        "3": "2는 실수부 Re(z) = (14 − 4)/5 = 10/5 = 2이고, 문제는 Im(z)를 묻고 있어요.",
      },
    },

    // ── t1-4-q002 · numeric · foundation · AHL · AHL 1.12 · 3 marks
    "t1-4-q002": {
      // EN: Given that <span class="chem">z = 3 - 4i</span>, evaluate <span class="chem">z z^* + i^{2028}</span>.
      stem: "<span class=\"chem\">z = 3 - 4i</span>일 때, <span class=\"chem\">z z^* + i^{2028}</span>의 값을 구하시오.",
      hints: [
        // EN: Recall that <span class="chem">z z^* = |z|^2 = a^2 + b^2</span>.
        "<span class=\"chem\">z z^* = |z|^2 = a^2 + b^2</span>임을 떠올리세요.",
        // EN: For <span class="chem">i^{2028}</span>, notice that <span class="chem">2028</span> is a multiple of <span class="chem">4</span> (<span class="chem">2028 = 4 × 507</span>), so <span class="chem">i^{2028} = (i^4)^{507} = 1</span>.
        "<span class=\"chem\">i^{2028}</span>에서 <span class=\"chem\">2028</span>은 <span class=\"chem\">4</span>의 배수(<span class=\"chem\">2028 = 4 × 507</span>)이므로 <span class=\"chem\">i^{2028} = (i^4)^{507} = 1</span>이에요.",
      ],
      // EN: <p><span class="chem">z z^* = 3^2 + (-4)^2 = 9 + 16 = 25</span>. Since <span class="chem">2028</span> is divisible by 4, <span class="chem">i^{2028} = 1</span>. Thus <span class="chem">25 + 1 = 26</span>.</p>
      solution: "<p><span class=\"chem\">z z^* = 3^2 + (-4)^2 = 9 + 16 = 25</span>. <span class=\"chem\">2028</span>은 4로 나누어떨어지므로 <span class=\"chem\">i^{2028} = 1</span>이에요. 따라서 <span class=\"chem\">25 + 1 = 26</span>이에요.</p>",
    },

    // ── t1-4-q003 · mcq · foundation · AHL · AHL 1.13 · 2 marks
    "t1-4-q003": {
      // EN: Write the complex number <span class="chem">z = -2 + 2 sqrt(3)i</span> in Euler form <span class="chem">r e^{i theta}</span>, where <span class="chem">r &gt; 0</span> and <span class="chem">-pi &lt; theta &lt;= pi</span>.
      stem: "복소수 <span class=\"chem\">z = -2 + 2 sqrt(3)i</span>를 오일러 형식 <span class=\"chem\">r e^{i theta}</span> (<span class=\"chem\">r &gt; 0</span>, <span class=\"chem\">-pi &lt; theta &lt;= pi</span>)로 나타내시오.",
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
        "절댓값을 구하세요: <span class=\"chem\">r = sqrt((-2)^2 + (2 sqrt(3))^2) = sqrt(4 + 12) = 4</span>.",
        // EN: Since <span class="chem">Re(z) &lt; 0</span> and <span class="chem">Im(z) &gt; 0</span>, <span class="chem">z</span> is in Quadrant II with reference angle <span class="chem">arctan(sqrt(3)) = pi/3</span>.
        "<span class=\"chem\">Re(z) &lt; 0</span>이고 <span class=\"chem\">Im(z) &gt; 0</span>이므로 <span class=\"chem\">z</span>는 제2사분면에 있고 기준각은 <span class=\"chem\">arctan(sqrt(3)) = pi/3</span>이에요.",
      ],
      // EN: <p><span class="chem">r = sqrt(4 + 12) = 4</span>. In Quadrant II, <span class="chem">theta = pi - arctan(sqrt(3)) = pi - pi/3 = 2pi/3</span>, giving <span class="chem">z = 4 e^{i(2pi/3)}</span>.</p>
      solution: "<p><span class=\"chem\">r = sqrt(4 + 12) = 4</span>. 제2사분면이므로 <span class=\"chem\">theta = pi - arctan(sqrt(3)) = pi - pi/3 = 2pi/3</span>이 되어 <span class=\"chem\">z = 4 e^{i(2pi/3)}</span>예요.</p>",
      misconception: {
        // EN (option B): arctan(2√3 / −2) = −π/3 lies in Quadrant IV, but z = −2 + 2√3 i has Re(z) < 0 and Im(z) > 0 (Quadrant II), so θ = π − π/3 = 2π/3.
        "1": "arctan(2√3 / −2) = −π/3은 제4사분면이지만, z = −2 + 2√3 i는 Re(z) < 0, Im(z) > 0(제2사분면)이므로 θ = π − π/3 = 2π/3이에요.",
        // EN (option C): The modulus is r = √((−2)² + (2√3)²) = √(4 + 12) = √16 = 4, not 2.
        "2": "절댓값은 2가 아니라 r = √((−2)² + (2√3)²) = √(4 + 12) = √16 = 4예요.",
        // EN (option D): The reference angle is arctan(√3) = π/3, so in Quadrant II the argument is π − π/3 = 2π/3, not 5π/6.
        "3": "기준각이 arctan(√3) = π/3이므로 제2사분면에서의 편각은 5π/6이 아니라 π − π/3 = 2π/3이에요.",
      },
    },

    // ── t1-4-q004 · numeric · foundation · AHL · AHL 1.12 · 4 marks
    "t1-4-q004": {
      // EN: Find the real numbers <span class="chem">x</span> and <span class="chem">y</span> such that <span class="chem">(x + yi)(3 + 2i) = -1 + 8i</span>. Enter the value of <span class="chem">x + y</span>.
      stem: "<span class=\"chem\">(x + yi)(3 + 2i) = -1 + 8i</span>를 만족하는 실수 <span class=\"chem\">x</span>와 <span class=\"chem\">y</span>를 구하고 (Find), <span class=\"chem\">x + y</span>의 값을 입력하시오.",
      hints: [
        // EN: Either expand <span class="chem">(3x - 2y) + (2x + 3y)i = -1 + 8i</span> and solve the simultaneous equations, or divide <span class="chem">x + yi = (-1 + 8i) / (3 + 2i)</span>.
        "<span class=\"chem\">(3x - 2y) + (2x + 3y)i = -1 + 8i</span>를 전개해 연립방정식을 풀거나, <span class=\"chem\">x + yi = (-1 + 8i) / (3 + 2i)</span>로 나누어 계산하세요.",
        // EN: Multiplying numerator and denominator by <span class="chem">3 - 2i</span> gives <span class="chem">((-1 + 8i)(3 - 2i)) / (9 + 4) = (13 + 26i) / 13 = 1 + 2i</span>.
        "분자·분모에 <span class=\"chem\">3 - 2i</span>를 곱하면 <span class=\"chem\">((-1 + 8i)(3 - 2i)) / (9 + 4) = (13 + 26i) / 13 = 1 + 2i</span>가 돼요.",
      ],
      // EN: <p>Dividing both sides by <span class="chem">3 + 2i</span>: <span class="chem">x + yi = ((-1 + 8i)(3 - 2i)) / (3^2 + 2^2) = (13 + 26i) / 13 = 1 + 2i</span>. Thus <span class="chem">x = 1</span>, <span class="chem">y = 2</span>, and <span class="chem">x + y = 3</span>.</p>
      solution: "<p>양변을 <span class=\"chem\">3 + 2i</span>로 나누면: <span class=\"chem\">x + yi = ((-1 + 8i)(3 - 2i)) / (3^2 + 2^2) = (13 + 26i) / 13 = 1 + 2i</span>. 따라서 <span class=\"chem\">x = 1</span>, <span class=\"chem\">y = 2</span>이므로 <span class=\"chem\">x + y = 3</span>이에요.</p>",
    },

    // ── t1-4-q005 · mcq · exam · AHL · AHL 1.13 · 3 marks
    "t1-4-q005": {
      // EN: Let <span class="chem">z_1 = 6 e^{i(pi/4)}</span> and <span class="chem">z_2 = 2 e^{-i(pi/3)}</span>. Which expression gives <span class="chem">z_1 / z_2</span> in polar form with principal argument in <span class="chem">(-pi, pi]</span>?
      stem: "<span class=\"chem\">z_1 = 6 e^{i(pi/4)}</span>, <span class=\"chem\">z_2 = 2 e^{-i(pi/3)}</span>라 하자. 주편각이 <span class=\"chem\">(-pi, pi]</span> 범위에 있도록 <span class=\"chem\">z_1 / z_2</span>를 극형식으로 바르게 나타낸 것은 무엇인가요?",
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
        "극형식/오일러 형식의 나눗셈에서는 절댓값을 나누고 편각을 빼세요: <span class=\"chem\">|z_1 / z_2| = |z_1| / |z_2|</span>, <span class=\"chem\">arg(z_1 / z_2) = arg(z_1) - arg(z_2)</span>.",
        // EN: Compute <span class="chem">pi/4 - (-pi/3) = 3pi/12 + 4pi/12 = 7pi/12</span>.
        "<span class=\"chem\">pi/4 - (-pi/3) = 3pi/12 + 4pi/12 = 7pi/12</span>를 계산하세요.",
      ],
      // EN: <p><span class="chem">z_1 / z_2 = (6/2) e^{i(pi/4 - (-pi/3))} = 3 e^{i(7pi/12)} = 3 cis(7pi/12)</span>.</p>
      solution: "<p><span class=\"chem\">z_1 / z_2 = (6/2) e^{i(pi/4 - (-pi/3))} = 3 e^{i(7pi/12)} = 3 cis(7pi/12)</span>예요.</p>",
      misconception: {
        // EN (option B): When dividing z₁ by z₂, you subtract arguments: π/4 − (−π/3) = π/4 + π/3 = 7π/12. Adding them gives −π/12, which is the argument of z₁z₂.
        "1": "z₁을 z₂로 나눌 때는 편각을 빼야 해요: π/4 − (−π/3) = π/4 + π/3 = 7π/12. 편각을 더한 −π/12는 곱 z₁z₂의 편각이에요.",
        // EN (option C): When dividing complex numbers in polar form, divide the moduli (6 / 2 = 3) rather than multiplying them.
        "2": "극형식 복소수를 나눌 때는 절댓값을 곱하지 말고 나누어야 해요 (6 / 2 = 3).",
        // EN (option D): arg(z₁ / z₂) = arg(z₁) − arg(z₂) = π/4 − (−π/3) = +7π/12, whereas −7π/12 is arg(z₂ / z₁).
        "3": "arg(z₁ / z₂) = arg(z₁) − arg(z₂) = π/4 − (−π/3) = +7π/12이고, −7π/12는 arg(z₂ / z₁)이에요.",
      },
    },

    // ── t1-4-q006 · numeric · exam · AHL · AHL 1.14 · 4 marks
    "t1-4-q006": {
      // EN: Using De Moivre's theorem, evaluate <span class="chem">(1 - i)^{10}</span>. Since the result is purely imaginary of the form <span class="chem">k i</span>, enter the real value of <span class="chem">k</span>.
      stem: "드 무아브르 정리를 이용하여 <span class=\"chem\">(1 - i)^{10}</span>의 값을 구하시오. 결과가 <span class=\"chem\">k i</span> 꼴의 순허수가 되므로 실수 <span class=\"chem\">k</span>의 값을 입력하시오.",
      hints: [
        // EN: Write <span class="chem">1 - i</span> in Euler form: <span class="chem">r = sqrt(1^2 + (-1)^2) = sqrt(2)</span> and <span class="chem">theta = -pi/4</span> (Quadrant IV).
        "<span class=\"chem\">1 - i</span>를 오일러 형식으로 쓰세요: <span class=\"chem\">r = sqrt(1^2 + (-1)^2) = sqrt(2)</span>이고 <span class=\"chem\">theta = -pi/4</span> (제4사분면)예요.",
        // EN: By De Moivre's theorem, <span class="chem">(1 - i)^{10} = (sqrt(2))^{10} e^{-i(10pi/4)} = 32(cos(-5pi/2) + i sin(-5pi/2))</span>.
        "드 무아브르 정리에 의해 <span class=\"chem\">(1 - i)^{10} = (sqrt(2))^{10} e^{-i(10pi/4)} = 32(cos(-5pi/2) + i sin(-5pi/2))</span>예요.",
      ],
      // EN: <p><span class="chem">1 - i = sqrt(2) e^{-i pi/4}</span>. Raising to the 10th power gives <span class="chem">(sqrt(2))^{10} e^{-i(5pi/2)} = 32(cos(-pi/2) + i sin(-pi/2)) = -32i</span>. Therefore <span class="chem">k = -32</span>.</p>
      solution: "<p><span class=\"chem\">1 - i = sqrt(2) e^{-i pi/4}</span>이에요. 10제곱을 하면 <span class=\"chem\">(sqrt(2))^{10} e^{-i(5pi/2)} = 32(cos(-pi/2) + i sin(-pi/2)) = -32i</span>가 돼요. 따라서 <span class=\"chem\">k = -32</span>예요.</p>",
    },

    // ── t1-4-q007 · numeric · exam · AHL · AHL 1.14 · 4 marks
    "t1-4-q007": {
      // EN: Let <span class="chem">z = 1 - sqrt(3)i</span>. Find the <strong>smallest positive integer <span class="chem">n</span></strong> for which <span class="chem">z^n</span> is a <strong>positive real number</strong>.
      stem: "<span class=\"chem\">z = 1 - sqrt(3)i</span>라 하자. <span class=\"chem\">z^n</span>이 <strong>양의 실수</strong>가 되도록 하는 <strong>가장 작은 양의 정수 <span class=\"chem\">n</span></strong>을 구하시오 (Find).",
      hints: [
        // EN: Write <span class="chem">z = 1 - sqrt(3)i</span> in polar form: <span class="chem">r = 2</span> and <span class="chem">theta = -pi/3</span>.
        "<span class=\"chem\">z = 1 - sqrt(3)i</span>를 극형식으로 쓰세요: <span class=\"chem\">r = 2</span>이고 <span class=\"chem\">theta = -pi/3</span>이에요.",
        // EN: For <span class="chem">z^n = 2^n(cos(-n pi/3) + i sin(-n pi/3))</span> to be a <em>positive</em> real number, we need <span class="chem">sin(-n pi/3) = 0</span> AND <span class="chem">cos(-n pi/3) = +1</span> (note that <span class="chem">n = 3</span> gives <span class="chem">cos(-pi) = -1 &lt; 0</span>!).
        "<span class=\"chem\">z^n = 2^n(cos(-n pi/3) + i sin(-n pi/3))</span>이 <em>양의</em> 실수가 되려면 <span class=\"chem\">sin(-n pi/3) = 0</span>이면서 동시에 <span class=\"chem\">cos(-n pi/3) = +1</span>이어야 해요 (<span class=\"chem\">n = 3</span>이면 <span class=\"chem\">cos(-pi) = -1 &lt; 0</span>이 돼요!).",
      ],
      // EN: <p><span class="chem">z = 2 e^{-i pi/3}</span>, so <span class="chem">z^n = 2^n e^{-i n pi/3}</span>. For <span class="chem">z^n</span> to be real and positive, we require <span class="chem">-n pi/3 = 2 pi k</span> for <span class="chem">k \in \mathbb{Z}</span>. The smallest positive integer is <span class="chem">n = 6</span> (since <span class="chem">n = 3</span> gives <span class="chem">z^3 = -8 &lt; 0</span>).</p>
      solution: "<p><span class=\"chem\">z = 2 e^{-i pi/3}</span>이므로 <span class=\"chem\">z^n = 2^n e^{-i n pi/3}</span>이에요. <span class=\"chem\">z^n</span>이 양의 실수가 되려면 <span class=\"chem\">k \\in \\mathbb{Z}</span>에 대해 <span class=\"chem\">-n pi/3 = 2 pi k</span>여야 해요. 가장 작은 양의 정수는 <span class=\"chem\">n = 6</span>이에요(<span class=\"chem\">n = 3</span>이면 <span class=\"chem\">z^3 = -8 &lt; 0</span>).</p>",
    },

    // ── t1-4-q008 · numeric · exam · AHL · AHL 1.14 · 5 marks
    "t1-4-q008": {
      // EN: The polynomial <span class="chem">P(z) = z^3 + az^2 + bz - 26</span> has real coefficients <span class="chem">a, b \in \mathbb{R}</span>. Given that <span class="chem">z_1 = -2 + 3i</span> is a root of <span class="chem">P(z) = 0</span>, find the real root of <span class="chem">P(z) = 0</span>.
      stem: "다항식 <span class=\"chem\">P(z) = z^3 + az^2 + bz - 26</span>의 계수 <span class=\"chem\">a, b \\in \\mathbb{R}</span>가 실수예요. <span class=\"chem\">z_1 = -2 + 3i</span>가 <span class=\"chem\">P(z) = 0</span>의 한 근일 때, <span class=\"chem\">P(z) = 0</span>의 실근을 구하시오 (Find).",
      hints: [
        // EN: Since <span class="chem">P(z)</span> has real coefficients, the complex conjugate <span class="chem">z_2 = -2 - 3i</span> is also a root.
        "<span class=\"chem\">P(z)</span>의 계수가 모두 실수이므로 켤레복소수 <span class=\"chem\">z_2 = -2 - 3i</span>도 근이에요.",
        // EN: The product of the conjugate pair is <span class="chem">z_1 z_2 = (-2)^2 + 3^2 = 13</span>, so the quadratic factor is <span class="chem">z^2 + 4z + 13</span>. Compare constant terms in <span class="chem">(z^2 + 4z + 13)(z - r) = z^3 + az^2 + bz - 26</span>.
        "켤레근 쌍의 곱은 <span class=\"chem\">z_1 z_2 = (-2)^2 + 3^2 = 13</span>이므로 이차 인수는 <span class=\"chem\">z^2 + 4z + 13</span>이에요. <span class=\"chem\">(z^2 + 4z + 13)(z - r) = z^3 + az^2 + bz - 26</span>에서 상수항을 비교하세요.",
      ],
      // EN: <p>By the Complex Conjugate Root Theorem, <span class="chem">z_2 = -2 - 3i</span> is also a root. The quadratic factor is <span class="chem">(z - z_1)(z - z_2) = z^2 + 4z + 13</span>. Since <span class="chem">P(z) = (z^2 + 4z + 13)(z - r)</span> and the constant term is <span class="chem">-13r = -26</span>, the real root is <span class="chem">r = 2</span>.</p>
      solution: "<p>켤레근 정리에 의해 <span class=\"chem\">z_2 = -2 - 3i</span>도 근이에요. 이차 인수는 <span class=\"chem\">(z - z_1)(z - z_2) = z^2 + 4z + 13</span>이에요. <span class=\"chem\">P(z) = (z^2 + 4z + 13)(z - r)</span>이고 상수항이 <span class=\"chem\">-13r = -26</span>이므로 실근은 <span class=\"chem\">r = 2</span>예요.</p>",
    },

    // ── t1-4-q009 · mcq · exam · AHL · AHL 1.14 · 4 marks
    "t1-4-q009": {
      // EN: Which of the following gives all four solutions to <span class="chem">z^4 = -16</span> in Euler form with <span class="chem">-pi &lt; arg(z) &lt;= pi</span>?
      stem: "<span class=\"chem\">-pi &lt; arg(z) &lt;= pi</span>일 때, 방정식 <span class=\"chem\">z^4 = -16</span>의 네 근을 오일러 형식으로 모두 바르게 나타낸 것은 무엇인가요?",
      options: [
        // EN: <span class="chem">2 e^{+- i(pi/4)}</span> and <span class="chem">2 e^{+- i(3pi/4)}</span>
        "<span class=\"chem\">2 e^{+- i(pi/4)}</span>와 <span class=\"chem\">2 e^{+- i(3pi/4)}</span>",
        // EN: <span class="chem">2 e^{i(0)}, 2 e^{i(pi/2)}, 2 e^{i pi}, 2 e^{-i(pi/2)}</span>
        "<span class=\"chem\">2 e^{i(0)}, 2 e^{i(pi/2)}, 2 e^{i pi}, 2 e^{-i(pi/2)}</span>",
        // EN: <span class="chem">4 e^{+- i(pi/4)}</span> and <span class="chem">4 e^{+- i(3pi/4)}</span>
        "<span class=\"chem\">4 e^{+- i(pi/4)}</span>와 <span class=\"chem\">4 e^{+- i(3pi/4)}</span>",
        // EN: <span class="chem">2 e^{+- i(pi/6)}</span> and <span class="chem">2 e^{+- i(5pi/6)}</span>
        "<span class=\"chem\">2 e^{+- i(pi/6)}</span>와 <span class=\"chem\">2 e^{+- i(5pi/6)}</span>",
      ],
      hints: [
        // EN: Write <span class="chem">-16</span> in Euler form with general argument: <span class="chem">-16 = 16 e^{i(pi + 2 pi k)}</span>.
        "<span class=\"chem\">-16</span>을 일반편각을 써서 오일러 형식으로 나타내세요: <span class=\"chem\">-16 = 16 e^{i(pi + 2 pi k)}</span>.",
        // EN: Take the fourth root: <span class="chem">r = 16^{1/4} = 2</span> and <span class="chem">theta_k = (pi + 2 pi k) / 4</span> for <span class="chem">k = -2, -1, 0, 1</span>.
        "네제곱근을 취하세요: <span class=\"chem\">r = 16^{1/4} = 2</span>이고 <span class=\"chem\">k = -2, -1, 0, 1</span>에 대해 <span class=\"chem\">theta_k = (pi + 2 pi k) / 4</span>예요.",
      ],
      // EN: <p>Writing <span class="chem">z^4 = 16 e^{i(pi + 2pi k)}</span> gives <span class="chem">z_k = 2 e^{i(pi + 2pi k)/4}</span>. Evaluating at <span class="chem">k = 0, 1, -1, -2</span> gives <span class="chem">2 e^{+- i(pi/4)}</span> and <span class="chem">2 e^{+- i(3pi/4)}</span>.</p>
      solution: "<p><span class=\"chem\">z^4 = 16 e^{i(pi + 2pi k)}</span>으로 쓰면 <span class=\"chem\">z_k = 2 e^{i(pi + 2pi k)/4}</span>가 돼요. <span class=\"chem\">k = 0, 1, -1, -2</span>를 대입하면 <span class=\"chem\">2 e^{+- i(pi/4)}</span>와 <span class=\"chem\">2 e^{+- i(3pi/4)}</span>를 얻어요.</p>",
      misconception: {
        // EN (option B): Those are the roots of z⁴ = +16 (where arg(16) = 0). Here w = −16 has arg(−16) = π, so the angles are (π + 2πk)/4 = ±π/4, ±3π/4.
        "1": "그것은 z⁴ = +16 (arg(16) = 0)의 근이에요. 여기서는 w = −16이므로 arg(−16) = π이고, 각도는 (π + 2πk)/4 = ±π/4, ±3π/4가 돼요.",
        // EN (option C): The modulus of each 4th root is 16<sup>1/4</sup> = 2, not 16<sup>1/2</sup> = 4.
        "2": "각 4제곱근의 절댓값은 16<sup>1/2</sup> = 4가 아니라 16<sup>1/4</sup> = 2예요.",
        // EN (option D): Dividing π + 2πk by n = 4 gives odd multiples of π/4 (±π/4, ±3π/4), not multiples of π/6.
        "3": "π + 2πk를 n = 4로 나누면 π/6의 배수가 아니라 π/4의 홀수 배(±π/4, ±3π/4)가 나와요.",
      },
    },

    // ── t1-4-q010 · numeric · exam · AHL · AHL 1.14 · 4 marks
    "t1-4-q010": {
      // EN: The five roots of <span class="chem">z^5 = 32i</span> form the vertices of a regular pentagon on the Argand diagram. Calculate the area of this regular pentagon to 3 significant figures.
      stem: "<span class=\"chem\">z^5 = 32i</span>의 다섯 근은 아르강 평면 위에서 정오각형의 꼭짓점을 이뤄요. 이 정오각형의 넓이를 유효숫자 3자리(3 s.f.)로 계산하시오 (Calculate).",
      hints: [
        // EN: Each root has modulus <span class="chem">r = 32^{1/5} = 2</span>, so all 5 vertices lie on a circle of radius <span class="chem">R = 2</span> centered at the origin.
        "각 근의 절댓값이 <span class=\"chem\">r = 32^{1/5} = 2</span>이므로 5개의 꼭짓점은 모두 원점이 중심이고 반지름이 <span class=\"chem\">R = 2</span>인 원 위에 놓여요.",
        // EN: Split the regular pentagon into 5 congruent isosceles triangles meeting at the origin, each with two sides of length <span class="chem">R = 2</span> and included angle <span class="chem">2pi / 5</span>: <span class="chem">Area = 5 × (1/2) R^2 sin(2pi / 5)</span>.
        "정오각형을 원점에서 만나는 합동인 이등변삼각형 5개로 나누세요. 각 삼각형은 두 변의 길이가 <span class=\"chem\">R = 2</span>이고 끼인각이 <span class=\"chem\">2pi / 5</span>이므로 <span class=\"chem\">Area = 5 × (1/2) R^2 sin(2pi / 5)</span>예요.",
      ],
      // EN: <p>The roots lie on a circle of radius <span class="chem">R = 32^{1/5} = 2</span> spaced by <span class="chem">2pi/5</span> radians. The pentagon consists of 5 triangles of area <span class="chem">(1/2)(2^2) sin(2pi/5)</span>, so total area <span class="chem">= 5 × 2 sin(2pi/5) = 10 sin(72^\circ) ≈ 9.51</span>.</p>
      solution: "<p>근들은 반지름 <span class=\"chem\">R = 32^{1/5} = 2</span>인 원 위에 <span class=\"chem\">2pi/5</span> 라디안 간격으로 놓여요. 정오각형은 넓이가 <span class=\"chem\">(1/2)(2^2) sin(2pi/5)</span>인 삼각형 5개로 이루어져 있으므로 전체 넓이는 <span class=\"chem\">= 5 × 2 sin(2pi/5) = 10 sin(72^\\circ) ≈ 9.51</span>이에요.</p>",
    },

    // ── t1-4-q011 · multi · exam · AHL · AHL 1.14 · 3 marks
    "t1-4-q011": {
      // EN: Let <span class="chem">omega = e^{i(2pi/5)}</span> be a primitive fifth root of unity (<span class="chem">omega^5 = 1, omega != 1</span>). Select <strong>all</strong> statements that are true.
      stem: "<span class=\"chem\">omega = e^{i(2pi/5)}</span>를 1의 원시 5제곱근(<span class=\"chem\">omega^5 = 1, omega != 1</span>)이라 하자. 옳은 것을 <strong>모두</strong> 고르시오.",
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
        "등비급수 합 공식 <span class=\"chem\">(1 - omega^5)/(1 - omega)</span>을 이용해 1의 <span class=\"chem\">n</span>제곱근들의 합을 확인하세요.",
        // EN: Notice that <span class="chem">omega^4 = e^{i(8pi/5)} = e^{-i(2pi/5)} = omega^*</span> and <span class="chem">omega^3 = e^{i(6pi/5)} = e^{-i(4pi/5)} = (omega^2)^*</span>.
        "<span class=\"chem\">omega^4 = e^{i(8pi/5)} = e^{-i(2pi/5)} = omega^*</span>이고 <span class=\"chem\">omega^3 = e^{i(6pi/5)} = e^{-i(4pi/5)} = (omega^2)^*</span>임을 확인하세요.",
      ],
      // EN: <p>Since <span class="chem">omega^5 = 1</span> and <span class="chem">omega != 1</span>, <span class="chem">1 + omega + omega^2 + omega^3 + omega^4 = (1 - omega^5)/(1 - omega) = 0</span>. Also <span class="chem">omega^4 = omega^{-1} = omega^*</span>, and <span class="chem">omega^2 + omega^3 = e^{i(4pi/5)} + e^{-i(4pi/5)} = 2 cos(4pi/5)</span>.</p>
      solution: "<p><span class=\"chem\">omega^5 = 1</span>이고 <span class=\"chem\">omega != 1</span>이므로 <span class=\"chem\">1 + omega + omega^2 + omega^3 + omega^4 = (1 - omega^5)/(1 - omega) = 0</span>이에요. 또한 <span class=\"chem\">omega^4 = omega^{-1} = omega^*</span>이고, <span class=\"chem\">omega^2 + omega^3 = e^{i(4pi/5)} + e^{-i(4pi/5)} = 2 cos(4pi/5)</span>예요.</p>",
      misconception: {
        // EN (option D): Since 1 + ω + ω² + ω³ + ω⁴ = 0, both its real part and its imaginary part are 0, not 1.
        "3": "1 + ω + ω² + ω³ + ω⁴ = 0이므로 실수부와 허수부 모두 1이 아니라 0이에요.",
      },
    },

    // ── t1-4-q012 · order · exam · AHL · AHL 1.14 · 4 marks
    "t1-4-q012": {
      // EN: Arrange the steps in logical order to prove the triple-angle identity <span class="chem">cos(3 theta) = 4 cos^3(theta) - 3 cos(theta)</span> using De Moivre's theorem.
      stem: "드 무아브르 정리를 사용하여 삼배각 항등식 <span class=\"chem\">cos(3 theta) = 4 cos^3(theta) - 3 cos(theta)</span>를 증명하는 단계를 논리적인 순서로 배열하시오.",
      options: [
        // EN: By De Moivre's theorem, <span class="chem">cos(3 theta) + i sin(3 theta) = (cos theta + i sin theta)^3</span>.
        "드 무아브르 정리에 의해 <span class=\"chem\">cos(3 theta) + i sin(3 theta) = (cos theta + i sin theta)^3</span>이다.",
        // EN: Expand the right-hand side using the binomial theorem: <span class="chem">cos^3 theta + 3i cos^2 theta sin theta + 3i^2 cos theta sin^2 theta + i^3 sin^3 theta</span>.
        "이항정리로 우변을 전개한다: <span class=\"chem\">cos^3 theta + 3i cos^2 theta sin theta + 3i^2 cos theta sin^2 theta + i^3 sin^3 theta</span>.",
        // EN: Simplify powers of <span class="chem">i</span> and equate real parts on both sides: <span class="chem">cos(3 theta) = cos^3 theta - 3 cos theta sin^2 theta</span>.
        "<span class=\"chem\">i</span>의 거듭제곱을 간단히 하고 양변의 실수부를 비교한다: <span class=\"chem\">cos(3 theta) = cos^3 theta - 3 cos theta sin^2 theta</span>.",
        // EN: Substitute the Pythagorean identity <span class="chem">sin^2 theta = 1 - cos^2 theta</span> and collect like terms to obtain <span class="chem">cos(3 theta) = 4 cos^3 theta - 3 cos theta</span>.
        "삼각함수 항등식 <span class=\"chem\">sin^2 theta = 1 - cos^2 theta</span>를 대입하고 동류항을 정리하여 <span class=\"chem\">cos(3 theta) = 4 cos^3 theta - 3 cos theta</span>를 얻는다.",
      ],
      hints: [
        // EN: Start with the statement of De Moivre's theorem for <span class="chem">n = 3</span>.
        "<span class=\"chem\">n = 3</span>에 대한 드 무아브르 정리 식으로 시작하세요.",
        // EN: Next expand the cube using the binomial theorem, equate the real parts, and finally eliminate <span class="chem">sin^2 theta</span>.
        "다음으로 이항정리를 이용해 세제곱을 전개하고, 실수부를 비교한 뒤, 마지막으로 <span class=\"chem\">sin^2 theta</span>를 소거하세요.",
      ],
      // EN: <p>First state De Moivre's theorem for <span class="chem">n = 3</span>, then expand <span class="chem">(cos theta + i sin theta)^3</span> binomially, equate real parts using <span class="chem">i^2 = -1</span>, and replace <span class="chem">sin^2 theta = 1 - cos^2 theta</span>.</p>
      solution: "<p>먼저 <span class=\"chem\">n = 3</span>일 때의 드 무아브르 정리를 쓰고, <span class=\"chem\">(cos theta + i sin theta)^3</span>을 이항정리로 전개한 뒤 <span class=\"chem\">i^2 = -1</span>을 이용해 실수부를 비교하고, <span class=\"chem\">sin^2 theta = 1 - cos^2 theta</span>를 대입해요.</p>",
    },

    // ── t1-4-q013 · numeric · exam · AHL · AHL 1.14 · 4 marks
    "t1-4-q013": {
      // EN: By expanding <span class="chem">(cos theta + i sin theta)^4</span> and equating real parts, <span class="chem">cos(4 theta)</span> can be written in the form <span class="chem">A cos^4(theta) + B cos^2(theta) + C</span>. Find the value of <span class="chem">A + B + C</span>.
      stem: "<span class=\"chem\">(cos theta + i sin theta)^4</span>을 전개하고 실수부를 비교하면 <span class=\"chem\">cos(4 theta)</span>를 <span class=\"chem\">A cos^4(theta) + B cos^2(theta) + C</span> 꼴로 나타낼 수 있어요. <span class=\"chem\">A + B + C</span>의 값을 구하시오 (Find).",
      hints: [
        // EN: <span class="chem">Re((cos theta + i sin theta)^4) = cos^4 theta - 6 cos^2 theta sin^2 theta + sin^4 theta</span>.
        "<span class=\"chem\">Re((cos theta + i sin theta)^4) = cos^4 theta - 6 cos^2 theta sin^2 theta + sin^4 theta</span>.",
        // EN: Replace <span class="chem">sin^2 theta = 1 - cos^2 theta</span> to get <span class="chem">8 cos^4 theta - 8 cos^2 theta + 1</span> (or notice that setting <span class="chem">theta = 0</span> gives <span class="chem">cos(0) = A(1) + B(1) + C = 1</span>!).
        "<span class=\"chem\">sin^2 theta = 1 - cos^2 theta</span>를 대입하면 <span class=\"chem\">8 cos^4 theta - 8 cos^2 theta + 1</span>이 돼요 (또는 <span class=\"chem\">theta = 0</span>을 대입하면 <span class=\"chem\">cos(0) = A(1) + B(1) + C = 1</span>임을 바로 알 수 있어요!).",
      ],
      // EN: <p><span class="chem">cos(4 theta) = cos^4 theta - 6 cos^2 theta(1 - cos^2 theta) + (1 - cos^2 theta)^2 = 8 cos^4 theta - 8 cos^2 theta + 1</span>. Thus <span class="chem">A = 8, B = -8, C = 1</span> and <span class="chem">A + B + C = 1</span>.</p>
      solution: "<p><span class=\"chem\">cos(4 theta) = cos^4 theta - 6 cos^2 theta(1 - cos^2 theta) + (1 - cos^2 theta)^2 = 8 cos^4 theta - 8 cos^2 theta + 1</span>이에요. 따라서 <span class=\"chem\">A = 8, B = -8, C = 1</span>이고 <span class=\"chem\">A + B + C = 1</span>이에요.</p>",
    },

    // ── t1-4-q014 · mcq · exam · AHL · AHL 1.14 · 3 marks
    "t1-4-q014": {
      // EN: A real quartic polynomial <span class="chem">P(z)</span> has roots <span class="chem">1 + 2i</span> and <span class="chem">3 - i</span>, and leading coefficient <span class="chem">1</span>. What is the constant term of <span class="chem">P(z)</span>?
      stem: "실수 계수 사차다항식 <span class=\"chem\">P(z)</span>는 <span class=\"chem\">1 + 2i</span>와 <span class=\"chem\">3 - i</span>를 근으로 갖고, 최고차항의 계수가 <span class=\"chem\">1</span>이에요. <span class=\"chem\">P(z)</span>의 상수항은 얼마인가요?",
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
        "<span class=\"chem\">P(z)</span>의 계수가 모두 실수이므로 네 근은 <span class=\"chem\">1 +- 2i</span>와 <span class=\"chem\">3 +- i</span>예요.",
        // EN: The constant term of the monic quartic is the product of all four roots: <span class="chem">|1 + 2i|^2 × |3 - i|^2</span>.
        "최고차항 계수가 1인 사차다항식의 상수항은 네 근의 곱과 같아요: <span class=\"chem\">|1 + 2i|^2 × |3 - i|^2</span>.",
      ],
      // EN: <p>The two quadratic factors are <span class="chem">(z^2 - 2z + 5)</span> and <span class="chem">(z^2 - 6z + 10)</span>. Multiplying their constant terms gives <span class="chem">5 × 10 = 50</span>.</p>
      solution: "<p>두 이차 인수는 <span class=\"chem\">(z^2 - 2z + 5)</span>와 <span class=\"chem\">(z^2 - 6z + 10)</span>이에요. 각 상수항을 곱하면 <span class=\"chem\">5 × 10 = 50</span>이에요.</p>",
      misconception: {
        // EN (option B): 10 is the modulus squared of only one conjugate pair (3² + (−1)² = 10), forgetting to multiply by the other pair (1² + 2² = 5).
        "1": "10은 한 켤레근 쌍의 절댓값 제곱(3² + (−1)² = 10)만 구한 것으로, 다른 켤레근 쌍(1² + 2² = 5)을 곱하는 것을 빠뜨렸어요.",
        // EN (option C): The product of each complex conjugate pair (z − z₁)(z − z₁*) = |z₁|² is always positive, so the constant term is (+5)(+10) = +50.
        "2": "각 켤레근 쌍의 곱 (z − z₁)(z − z₁*) = |z₁|²는 항상 양수이므로 상수항은 (+5)(+10) = +50이에요.",
        // EN (option D): You added |1 + 2i|² + |3 − i|² = 5 + 10 = 15 instead of multiplying the two quadratic factors.
        "3": "두 이차 인수의 상수항을 곱해야 하는데 |1 + 2i|² + |3 − i|² = 5 + 10 = 15로 더해 버렸어요.",
      },
    },

    // ── t1-4-q015 · numeric · challenge · AHL · AHL 1.14 · 5 marks
    "t1-4-q015": {
      // EN: Let <span class="chem">z = cos theta + i sin theta</span>. Using <span class="chem">2 cos theta = z + z^{-1}</span>, it can be shown that <span class="chem">cos^4 theta = (1/8) cos(4 theta) + (1/2) cos(2 theta) + K</span>, where <span class="chem">K</span> is a constant. Find the exact value of <span class="chem">K</span>.
      stem: "<span class=\"chem\">z = cos theta + i sin theta</span>라 하자. <span class=\"chem\">2 cos theta = z + z^{-1}</span>을 이용하면 <span class=\"chem\">cos^4 theta = (1/8) cos(4 theta) + (1/2) cos(2 theta) + K</span> (<span class=\"chem\">K</span>는 상수)임을 보일 수 있어요. 상수 <span class=\"chem\">K</span>의 정확한 값을 구하시오 (Find).",
      hints: [
        // EN: Expand <span class="chem">(2 cos theta)^4 = (z + z^{-1})^4 = z^4 + 4z^2 + 6 + 4z^{-2} + z^{-4}</span>.
        "<span class=\"chem\">(2 cos theta)^4 = (z + z^{-1})^4 = z^4 + 4z^2 + 6 + 4z^{-2} + z^{-4}</span>를 전개하세요.",
        // EN: Group symmetric pairs: <span class="chem">16 cos^4 theta = (z^4 + z^{-4}) + 4(z^2 + z^{-2}) + 6 = 2 cos(4 theta) + 8 cos(2 theta) + 6</span>, then divide by <span class="chem">16</span>.
        "대칭인 항끼리 묶으세요: <span class=\"chem\">16 cos^4 theta = (z^4 + z^{-4}) + 4(z^2 + z^{-2}) + 6 = 2 cos(4 theta) + 8 cos(2 theta) + 6</span>. 이제 양변을 <span class=\"chem\">16</span>으로 나누세요.",
      ],
      // EN: <p><span class="chem">16 cos^4 theta = (z + z^{-1})^4 = (z^4 + z^{-4}) + 4(z^2 + z^{-2}) + 6 = 2 cos(4 theta) + 8 cos(2 theta) + 6</span>. Dividing both sides by 16 gives <span class="chem">K = 6/16 = 3/8 = 0.375</span>.</p>
      solution: "<p><span class=\"chem\">16 cos^4 theta = (z + z^{-1})^4 = (z^4 + z^{-4}) + 4(z^2 + z^{-2}) + 6 = 2 cos(4 theta) + 8 cos(2 theta) + 6</span>이에요. 양변을 16으로 나누면 <span class=\"chem\">K = 6/16 = 3/8 = 0.375</span>예요.</p>",
    },

    // ── t1-4-q016 · numeric · exam · AHL · AHL 1.14 · 5 marks
    "t1-4-q016": {
      // EN: Let <span class="chem">omega = e^{i(2pi/5)}</span>. By considering the real part of <span class="chem">1 + omega + omega^2 + omega^3 + omega^4 = 0</span> and noting that <span class="chem">cos(8pi/5) = cos(2pi/5)</span> and <span class="chem">cos(6pi/5) = cos(4pi/5)</span>, find the exact value of <span class="chem">cos(2pi/5) + cos(4pi/5)</span>.
      stem: "<span class=\"chem\">omega = e^{i(2pi/5)}</span>라 하자. <span class=\"chem\">1 + omega + omega^2 + omega^3 + omega^4 = 0</span>의 실수부를 생각하고 <span class=\"chem\">cos(8pi/5) = cos(2pi/5)</span>, <span class=\"chem\">cos(6pi/5) = cos(4pi/5)</span>임을 이용하여, <span class=\"chem\">cos(2pi/5) + cos(4pi/5)</span>의 정확한 값을 구하시오 (Find).",
      hints: [
        // EN: Take the real part of <span class="chem">1 + e^{i(2pi/5)} + e^{i(4pi/5)} + e^{i(6pi/5)} + e^{i(8pi/5)} = 0</span>.
        "<span class=\"chem\">1 + e^{i(2pi/5)} + e^{i(4pi/5)} + e^{i(6pi/5)} + e^{i(8pi/5)} = 0</span>의 실수부를 취하세요.",
        // EN: Since <span class="chem">cos(8pi/5) = cos(2pi/5)</span> and <span class="chem">cos(6pi/5) = cos(4pi/5)</span>, we get <span class="chem">1 + 2 cos(2pi/5) + 2 cos(4pi/5) = 0</span>.
        "<span class=\"chem\">cos(8pi/5) = cos(2pi/5)</span>이고 <span class=\"chem\">cos(6pi/5) = cos(4pi/5)</span>이므로 <span class=\"chem\">1 + 2 cos(2pi/5) + 2 cos(4pi/5) = 0</span>이 돼요.",
      ],
      // EN: <p>Equating the real part of <span class="chem">1 + omega + omega^2 + omega^3 + omega^4 = 0</span> to zero gives <span class="chem">1 + 2 cos(2pi/5) + 2 cos(4pi/5) = 0</span>, hence <span class="chem">cos(2pi/5) + cos(4pi/5) = -1/2 = -0.5</span>.</p>
      solution: "<p><span class=\"chem\">1 + omega + omega^2 + omega^3 + omega^4 = 0</span>의 실수부를 0으로 놓으면 <span class=\"chem\">1 + 2 cos(2pi/5) + 2 cos(4pi/5) = 0</span>이 되므로 <span class=\"chem\">cos(2pi/5) + cos(4pi/5) = -1/2 = -0.5</span>예요.</p>",
    },

    // ── t1-4-q017 · short · exam · AHL · AHL 1.13 · 6 marks
    "t1-4-q017": {
      // EN: Let <span class="chem">z_1 = 2 + 2i</span> and <span class="chem">z_2 = -1 + sqrt(3)i</span>.<br>(a) Express <span class="chem">z_1</span> and <span class="chem">z_2</span> in the form <span class="chem">r e^{i theta}</span>, where <span class="chem">r &gt; 0</span> and <span class="chem">-pi &lt; theta &lt;= pi</span>. [3 marks]<br>(b) Hence find the exact value of <span class="chem">(z_1)^4 / (z_2)^3</span> in Cartesian form <span class="chem">a + bi</span>. [3 marks]
      stem: "<span class=\"chem\">z_1 = 2 + 2i</span>, <span class=\"chem\">z_2 = -1 + sqrt(3)i</span>라 하자.<br>(a) <span class=\"chem\">z_1</span>과 <span class=\"chem\">z_2</span>를 <span class=\"chem\">r e^{i theta}</span> (<span class=\"chem\">r &gt; 0</span>, <span class=\"chem\">-pi &lt; theta &lt;= pi</span>) 꼴로 나타내시오. [3 marks]<br>(b) 이를 이용하여 (Hence) <span class=\"chem\">(z_1)^4 / (z_2)^3</span>의 정확한 값을 직교 형식 <span class=\"chem\">a + bi</span>로 구하시오 (Find). [3 marks]",
      hints: [
        // EN: For part (a), remember <span class="chem">z_2 = -1 + sqrt(3)i</span> lies in Quadrant II, so <span class="chem">arg(z_2) = pi - pi/3 = 2pi/3</span>.
        "(a)에서 <span class=\"chem\">z_2 = -1 + sqrt(3)i</span>는 제2사분면에 있으므로 <span class=\"chem\">arg(z_2) = pi - pi/3 = 2pi/3</span>임을 기억하세요.",
        // EN: For part (b), use De Moivre's theorem before dividing: <span class="chem">(2 sqrt(2))^4 = 64</span> and <span class="chem">2^3 = 8</span>.
        "(b)에서는 나누기 전에 먼저 드 무아브르 정리를 적용하세요: <span class=\"chem\">(2 sqrt(2))^4 = 64</span>이고 <span class=\"chem\">2^3 = 8</span>이에요.",
      ],
      // EN: <p>(a) <span class="chem">|z_1| = sqrt(4 + 4) = 2 sqrt(2)</span>, <span class="chem">arg(z_1) = pi/4 =&gt; z_1 = 2 sqrt(2) e^{i(pi/4)}</span>. <span class="chem">|z_2| = sqrt(1 + 3) = 2</span>, <span class="chem">arg(z_2) = 2pi/3 =&gt; z_2 = 2 e^{i(2pi/3)}</span>.<br>(b) <span class="chem">z_1^4 / z_2^3 = (64 e^{i pi}) / (8 e^{i(2pi)}) = 8 e^{-i pi} = -8</span>.</p>
      solution: "<p>(a) <span class=\"chem\">|z_1| = sqrt(4 + 4) = 2 sqrt(2)</span>, <span class=\"chem\">arg(z_1) = pi/4 =&gt; z_1 = 2 sqrt(2) e^{i(pi/4)}</span>. <span class=\"chem\">|z_2| = sqrt(1 + 3) = 2</span>, <span class=\"chem\">arg(z_2) = 2pi/3 =&gt; z_2 = 2 e^{i(2pi/3)}</span>.<br>(b) <span class=\"chem\">z_1^4 / z_2^3 = (64 e^{i pi}) / (8 e^{i(2pi)}) = 8 e^{-i pi} = -8</span>.</p>",
      // EN: <p>(a) <span class="chem">z_1 = 2 sqrt(2) e^{i(pi/4)}</span> and <span class="chem">z_2 = 2 e^{i(2pi/3)}</span>.<br>(b) <span class="chem">(z_1)^4 / (z_2)^3 = (64 e^{i pi}) / (8 e^{i(2pi)}) = 8 e^{-i pi} = -8</span>.</p>
      answer: "<p>(a) <span class=\"chem\">z_1 = 2 sqrt(2) e^{i(pi/4)}</span>이고 <span class=\"chem\">z_2 = 2 e^{i(2pi/3)}</span>.<br>(b) <span class=\"chem\">(z_1)^4 / (z_2)^3 = (64 e^{i pi}) / (8 e^{i(2pi)}) = 8 e^{-i pi} = -8</span>.</p>",
      markscheme: [
        // EN: A1: Correct Euler form z₁ = 2√2 e<sup>iπ/4</sup> (or √8 e<sup>iπ/4</sup>).
        "A1: 올바른 오일러 형식 z₁ = 2√2 e<sup>iπ/4</sup> (또는 √8 e<sup>iπ/4</sup>).",
        // EN: M1: Correct modulus |z₂| = 2 and Quadrant II angle calculation π − π/3.
        "M1: 올바른 절댓값 |z₂| = 2와 제2사분면 편각 계산 π − π/3.",
        // EN: A1: Correct Euler form z₂ = 2 e<sup>i(2π/3)</sup>.
        "A1: 올바른 오일러 형식 z₂ = 2 e<sup>i(2π/3)</sup>.",
        // EN: M1: Applies De Moivre's theorem to numerator and denominator: (2√2)⁴ e<sup>iπ</sup> = 64 e<sup>iπ</sup> and 2³ e<sup>i(2π)</sup> = 8 e<sup>i(2π)</sup>.
        "M1: 분자와 분모에 드 무아브르 정리를 적용함: (2√2)⁴ e<sup>iπ</sup> = 64 e<sup>iπ</sup>, 2³ e<sup>i(2π)</sup> = 8 e<sup>i(2π)</sup>.",
        // EN: M1: Divides moduli (64 / 8 = 8) and subtracts arguments (π − 2π = −π).
        "M1: 절댓값을 나누고 (64 / 8 = 8) 편각을 뺌 (π − 2π = −π).",
        // EN: A1: Evaluates 8(cos(−π) + i sin(−π)) = −8 (or −8 + 0i).
        "A1: 8(cos(−π) + i sin(−π)) = −8 (또는 −8 + 0i)를 계산함.",
      ],
    },

    // ── t1-4-q018 · short · challenge · AHL · AHL 1.14 · 7 marks
    "t1-4-q018": {
      // EN: Consider the equation <span class="chem">z^4 + 4z^2 + 16 = 0</span>, where <span class="chem">z \in \mathbb{C}</span>.<br>(a) By letting <span class="chem">w = z^2</span>, find the two possible values of <span class="chem">w</span> in Euler form <span class="chem">r e^{i theta}</span>. [3 marks]<br>(b) Hence find all four roots of <span class="chem">z^4 + 4z^2 + 16 = 0</span> in Cartesian form <span class="chem">a + bi</span>, and factorize <span class="chem">z^4 + 4z^2 + 16</span> into the product of two real quadratic factors. [4 marks]
      stem: "<span class=\"chem\">z \\in \\mathbb{C}</span>일 때 방정식 <span class=\"chem\">z^4 + 4z^2 + 16 = 0</span>을 생각하자.<br>(a) <span class=\"chem\">w = z^2</span>으로 치환하여 가능한 <span class=\"chem\">w</span>의 두 값을 오일러 형식 <span class=\"chem\">r e^{i theta}</span>로 구하시오 (Find). [3 marks]<br>(b) 이를 이용하여 (Hence) <span class=\"chem\">z^4 + 4z^2 + 16 = 0</span>의 네 근을 모두 직교 형식 <span class=\"chem\">a + bi</span>로 구하고 (Find), <span class=\"chem\">z^4 + 4z^2 + 16</span>을 두 실수 계수 이차식의 곱으로 인수분해하시오. [4 marks]",
      hints: [
        // EN: Solve <span class="chem">w^2 + 4w + 16 = 0</span> using the quadratic formula to get <span class="chem">w = -2 +- 2 sqrt(3)i</span>.
        "근의 공식을 이용해 <span class=\"chem\">w^2 + 4w + 16 = 0</span>을 풀면 <span class=\"chem\">w = -2 +- 2 sqrt(3)i</span>를 얻어요.",
        // EN: Take the square roots of <span class="chem">4 e^{+- i(2pi/3)}</span> to get four roots of modulus <span class="chem">2</span> and arguments <span class="chem">+- pi/3</span> and <span class="chem">+- 2pi/3</span>.
        "<span class=\"chem\">4 e^{+- i(2pi/3)}</span>의 제곱근을 구하면 절댓값이 <span class=\"chem\">2</span>이고 편각이 <span class=\"chem\">+- pi/3</span>, <span class=\"chem\">+- 2pi/3</span>인 네 근을 얻어요.",
      ],
      // EN: <p>(a) <span class="chem">w = (-4 +- sqrt(-48))/2 = -2 +- 2 sqrt(3)i = 4 e^{+- i(2pi/3)}</span>.<br>(b) Taking square roots gives <span class="chem">z = 2 e^{+- i(pi/3)} = 1 +- sqrt(3)i</span> and <span class="chem">z = 2 e^{+- i(2pi/3)} = -1 +- sqrt(3)i</span>. Pairing conjugates gives <span class="chem">(z^2 - 2z + 4)(z^2 + 2z + 4)</span>.</p>
      solution: "<p>(a) <span class=\"chem\">w = (-4 +- sqrt(-48))/2 = -2 +- 2 sqrt(3)i = 4 e^{+- i(2pi/3)}</span>.<br>(b) 제곱근을 취하면 <span class=\"chem\">z = 2 e^{+- i(pi/3)} = 1 +- sqrt(3)i</span>와 <span class=\"chem\">z = 2 e^{+- i(2pi/3)} = -1 +- sqrt(3)i</span>를 얻어요. 켤레근끼리 묶으면 <span class=\"chem\">(z^2 - 2z + 4)(z^2 + 2z + 4)</span>가 돼요.</p>",
      // EN: <p>(a) <span class="chem">w = -2 +- 2 sqrt(3)i = 4 e^{+- i(2pi/3)}</span>.<br>(b) The four roots are <span class="chem">z = +- (1 + sqrt(3)i)</span> and <span class="chem">z = +- (1 - sqrt(3)i)</span>. Grouping conjugate pairs gives <span class="chem">z^4 + 4z^2 + 16 = (z^2 - 2z + 4)(z^2 + 2z + 4)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">w = -2 +- 2 sqrt(3)i = 4 e^{+- i(2pi/3)}</span>.<br>(b) 네 근은 <span class=\"chem\">z = +- (1 + sqrt(3)i)</span>와 <span class=\"chem\">z = +- (1 - sqrt(3)i)</span>이에요. 켤레근 쌍끼리 묶으면 <span class=\"chem\">z^4 + 4z^2 + 16 = (z^2 - 2z + 4)(z^2 + 2z + 4)</span>예요.</p>",
      markscheme: [
        // EN: M1: Uses the quadratic formula on w² + 4w + 16 = 0 to get w = (−4 ± √(16 − 64))/2 = −2 ± 2√3 i.
        "M1: w² + 4w + 16 = 0에 근의 공식을 적용해 w = (−4 ± √(16 − 64))/2 = −2 ± 2√3 i를 구함.",
        // EN: A1: Correctly finds modulus |w| = √(4 + 12) = 4.
        "A1: 절댓값 |w| = √(4 + 12) = 4를 정확히 구함.",
        // EN: A1: Writes w = 4 e<sup>i(2π/3)</sup> and w = 4 e<sup>−i(2π/3)</sup>.
        "A1: w = 4 e<sup>i(2π/3)</sup>와 w = 4 e<sup>−i(2π/3)</sup>로 나타냄.",
        // EN: M1: Takes square roots of w to get r = 2 and arguments ±π/3 and ±(π/3 − π) = ±2π/3.
        "M1: w의 제곱근을 취해 r = 2와 편각 ±π/3, ±(π/3 − π) = ±2π/3을 구함.",
        // EN: A1: Converts the four roots to Cartesian form: 1 ± √3 i and −1 ± √3 i.
        "A1: 네 근을 직교 형식 1 ± √3 i와 −1 ± √3 i로 변환함.",
        // EN: M1: Pairs complex conjugates (z − (1 + √3 i))(z − (1 − √3 i)) and (z − (−1 + √3 i))(z − (−1 − √3 i)).
        "M1: 켤레복소수 쌍끼리 묶음: (z − (1 + √3 i))(z − (1 − √3 i))와 (z − (−1 + √3 i))(z − (−1 − √3 i)).",
        // EN: A1: Obtains (z² − 2z + 4)(z² + 2z + 4).
        "A1: (z² − 2z + 4)(z² + 2z + 4)를 구함.",
      ],
    },

    // ── t1-4-q019 · order · exam · AHL · AHL 1.14 · 5 marks
    "t1-4-q019": {
      // EN: Arrange the steps in logical order to prove by mathematical induction that <span class="chem">(cos theta + i sin theta)^n = cos(n theta) + i sin(n theta)</span> for all <span class="chem">n \in \mathbb{Z}^+</span>.
      stem: "모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대하여 <span class=\"chem\">(cos theta + i sin theta)^n = cos(n theta) + i sin(n theta)</span>임을 수학적 귀납법으로 증명하는 단계를 논리적 순서로 배열하시오.",
      options: [
        // EN: Base case: for <span class="chem">n = 1</span>, both sides equal <span class="chem">cos theta + i sin theta</span>, so <span class="chem">P(1)</span> is true.
        "초기 단계: <span class=\"chem\">n = 1</span>일 때 양변이 모두 <span class=\"chem\">cos theta + i sin theta</span>와 같으므로 <span class=\"chem\">P(1)</span>은 참이다.",
        // EN: Assume <span class="chem">(cos theta + i sin theta)^k = cos(k theta) + i sin(k theta)</span> for some <span class="chem">k \in \mathbb{Z}^+</span>.
        "어떤 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>에 대하여 <span class=\"chem\">(cos theta + i sin theta)^k = cos(k theta) + i sin(k theta)</span>가 성립한다고 가정한다.",
        // EN: Write <span class="chem">(cos theta + i sin theta)^{k+1} = (cos(k theta) + i sin(k theta))(cos theta + i sin theta)</span> and expand the brackets.
        "<span class=\"chem\">(cos theta + i sin theta)^{k+1} = (cos(k theta) + i sin(k theta))(cos theta + i sin theta)</span>로 쓰고 괄호를 전개한다.",
        // EN: Use the compound angle identities for <span class="chem">cos(A + B)</span> and <span class="chem">sin(A + B)</span> to obtain <span class="chem">cos((k + 1)theta) + i sin((k + 1)theta)</span>, so <span class="chem">P(k + 1)</span> is true.
        "<span class=\"chem\">cos(A + B)</span>와 <span class=\"chem\">sin(A + B)</span>의 덧셈정리를 이용해 <span class=\"chem\">cos((k + 1)theta) + i sin((k + 1)theta)</span>을 얻으므로 <span class=\"chem\">P(k + 1)</span>은 참이다.",
        // EN: Since <span class="chem">P(1)</span> is true and <span class="chem">P(k)</span> being true implies <span class="chem">P(k + 1)</span> is true, by the principle of mathematical induction the result holds for all <span class="chem">n \in \mathbb{Z}^+</span>.
        "<span class=\"chem\">P(1)</span>이 참이고 <span class=\"chem\">P(k)</span>가 참이면 <span class=\"chem\">P(k + 1)</span>도 참이므로, 수학적 귀납법의 원리에 의해 모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대하여 결과가 성립한다.",
      ],
      hints: [
        // EN: An induction proof always runs: base case, inductive hypothesis, inductive step, conclusion.
        "귀납법 증명은 항상 초기 단계, 귀납 가정, 귀납 단계, 결론 순서로 진행돼요.",
        // EN: In the inductive step, the real part of the product is <span class="chem">cos(k theta) cos theta - sin(k theta) sin theta = cos((k + 1)theta)</span>.
        "귀납 단계에서 곱의 실수부는 <span class=\"chem\">cos(k theta) cos theta - sin(k theta) sin theta = cos((k + 1)theta)</span>예요.",
      ],
      // EN: <p>Prove <span class="chem">P(1)</span>, assume <span class="chem">P(k)</span> for some <span class="chem">k \in \mathbb{Z}^+</span>, then write the <span class="chem">(k + 1)</span>-th power as the <span class="chem">k</span>-th power times <span class="chem">cos theta + i sin theta</span>. Expanding gives <span class="chem">(cos(k theta) cos theta - sin(k theta) sin theta) + i(sin(k theta) cos theta + cos(k theta) sin theta) = cos((k + 1)theta) + i sin((k + 1)theta)</span>. Finish with the conclusion sentence.</p>
      solution: "<p><span class=\"chem\">P(1)</span>을 보이고, 어떤 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>에 대하여 <span class=\"chem\">P(k)</span>를 가정한 다음, <span class=\"chem\">(k + 1)</span>제곱을 <span class=\"chem\">k</span>제곱과 <span class=\"chem\">cos theta + i sin theta</span>의 곱으로 써요. 전개하면 <span class=\"chem\">(cos(k theta) cos theta - sin(k theta) sin theta) + i(sin(k theta) cos theta + cos(k theta) sin theta) = cos((k + 1)theta) + i sin((k + 1)theta)</span>가 돼요. 마지막으로 결론 문장을 써요.</p>",
    },

  }
});
