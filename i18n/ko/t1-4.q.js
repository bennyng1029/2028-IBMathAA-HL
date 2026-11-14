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
      // EN: The real numbers <span class="chem">x</span> and <span class="chem">y</span> satisfy <span class="chem">(x + yi)(3 + 2i) = -1 + 8i</span>. Find the value of <span class="chem">y</span>.
      stem: "실수 <span class=\"chem\">x</span>와 <span class=\"chem\">y</span>가 <span class=\"chem\">(x + yi)(3 + 2i) = -1 + 8i</span>를 만족해요. <span class=\"chem\">y</span>의 값을 구하시오 (Find).",
      hints: [
        // EN: Either expand <span class="chem">(3x - 2y) + (2x + 3y)i = -1 + 8i</span> and solve the simultaneous equations, or divide <span class="chem">x + yi = (-1 + 8i) / (3 + 2i)</span>.
        "<span class=\"chem\">(3x - 2y) + (2x + 3y)i = -1 + 8i</span>를 전개해 연립방정식을 풀거나, <span class=\"chem\">x + yi = (-1 + 8i) / (3 + 2i)</span>로 나누어 계산하세요.",
        // EN: Multiplying numerator and denominator by <span class="chem">3 - 2i</span> gives <span class="chem">((-1 + 8i)(3 - 2i)) / (9 + 4) = (13 + 26i) / 13 = 1 + 2i</span>.
        "분자·분모에 <span class=\"chem\">3 - 2i</span>를 곱하면 <span class=\"chem\">((-1 + 8i)(3 - 2i)) / (9 + 4) = (13 + 26i) / 13 = 1 + 2i</span>가 돼요.",
      ],
      // EN: <p>Dividing both sides by <span class="chem">3 + 2i</span>: <span class="chem">x + yi = ((-1 + 8i)(3 - 2i)) / (3^2 + 2^2) = (13 + 26i) / 13 = 1 + 2i</span>. Thus <span class="chem">x = 1</span> and <span class="chem">y = 2</span>.</p>
      solution: "<p>양변을 <span class=\"chem\">3 + 2i</span>로 나누면: <span class=\"chem\">x + yi = ((-1 + 8i)(3 - 2i)) / (3^2 + 2^2) = (13 + 26i) / 13 = 1 + 2i</span>. 따라서 <span class=\"chem\">x = 1</span>, <span class=\"chem\">y = 2</span>이에요.</p>",
    },

    // ── t1-4-q005 · mcq · exam · AHL · AHL 1.13 · 2 marks
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

    // ── t1-4-q009 · mcq · exam · AHL · AHL 1.14 · 2 marks
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
      // EN: By expanding <span class="chem">(cos theta + i sin theta)^4</span> and equating real parts, <span class="chem">cos(4 theta)</span> can be written in the form <span class="chem">A cos^4(theta) + B cos^2(theta) + C</span>. Find the value of <span class="chem">B</span>.
      stem: "<span class=\"chem\">(cos theta + i sin theta)^4</span>을 전개하고 실수부를 비교하면 <span class=\"chem\">cos(4 theta)</span>를 <span class=\"chem\">A cos^4(theta) + B cos^2(theta) + C</span> 꼴로 나타낼 수 있어요. <span class=\"chem\">B</span>의 값을 구하시오 (Find).",
      hints: [
        // EN: <span class="chem">Re((cos theta + i sin theta)^4) = cos^4 theta - 6 cos^2 theta sin^2 theta + sin^4 theta</span>.
        "<span class=\"chem\">Re((cos theta + i sin theta)^4) = cos^4 theta - 6 cos^2 theta sin^2 theta + sin^4 theta</span>.",
        // EN: Replace <span class="chem">sin^2 theta = 1 - cos^2 theta</span> and <span class="chem">sin^4 theta = (1 - cos^2 theta)^2</span>, then collect the <span class="chem">cos^2 theta</span> terms.
        "<span class=\"chem\">sin^2 theta = 1 - cos^2 theta</span>와 <span class=\"chem\">sin^4 theta = (1 - cos^2 theta)^2</span>를 대입한 다음 <span class=\"chem\">cos^2 theta</span> 항을 정리하세요.",
      ],
      // EN: <p><span class="chem">cos(4 theta) = cos^4 theta - 6 cos^2 theta(1 - cos^2 theta) + (1 - cos^2 theta)^2 = 8 cos^4 theta - 8 cos^2 theta + 1</span>. Thus <span class="chem">A = 8</span>, <span class="chem">B = -8</span> and <span class="chem">C = 1</span>.</p>
      solution: "<p><span class=\"chem\">cos(4 theta) = cos^4 theta - 6 cos^2 theta(1 - cos^2 theta) + (1 - cos^2 theta)^2 = 8 cos^4 theta - 8 cos^2 theta + 1</span>이에요. 따라서 <span class=\"chem\">A = 8</span>, <span class=\"chem\">B = -8</span>, <span class=\"chem\">C = 1</span>이에요.</p>",
    },

    // ── t1-4-q014 · mcq · exam · AHL · AHL 1.14 · 2 marks
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

    // ── t1-4-q015 · numeric · exam · AHL · AHL 1.14 · 5 marks
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

    // ── t1-4-q016 · numeric · foundation · AHL · AHL 1.14 · 2 marks
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
        // EN: Decode: a quartic with only even powers is a quadratic in disguise. Solve for <span class="chem">w = z^2</span> first, take square roots in Euler form, then multiply conjugate pairs back together to get real quadratic factors.
        "해석: 짝수 차수만 있는 사차방정식은 사실 이차방정식이에요. 먼저 <span class=\"chem\">w = z^2</span>에 대해 풀고, 오일러 형태로 제곱근을 구한 뒤, 켤레 쌍을 다시 곱해 실수 계수 이차식 인수를 얻으세요.",
        // EN: Solve <span class="chem">w^2 + 4w + 16 = 0</span> using the quadratic formula to get <span class="chem">w = -2 +- 2 sqrt(3)i</span>.
        "근의 공식을 이용해 <span class=\"chem\">w^2 + 4w + 16 = 0</span>을 풀면 <span class=\"chem\">w = -2 +- 2 sqrt(3)i</span>를 얻어요.",
        // EN: Take the square roots of <span class="chem">4 e^{+- i(2pi/3)}</span> to get four roots of modulus <span class="chem">2</span> and arguments <span class="chem">+- pi/3</span> and <span class="chem">+- 2pi/3</span>.
        "<span class=\"chem\">4 e^{+- i(2pi/3)}</span>의 제곱근을 구하면 절댓값이 <span class=\"chem\">2</span>이고 편각이 <span class=\"chem\">+- pi/3</span>, <span class=\"chem\">+- 2pi/3</span>인 네 근을 얻어요.",
      ],
      // EN: <p><strong>Decode.</strong> The quartic is a quadratic in <span class="chem">w = z^2</span>.<br>(a) <span class="chem">w = (-4 +- sqrt(-48))/2 = -2 +- 2 sqrt(3)i = 4 e^{+- i(2pi/3)}</span>.<br>(b) Taking square roots gives <span class="chem">z = 2 e^{+- i(pi/3)} = 1 +- sqrt(3)i</span> and <span class="chem">z = 2 e^{+- i(2pi/3)} = -1 +- sqrt(3)i</span>. Pairing conjugates gives <span class="chem">(z^2 - 2z + 4)(z^2 + 2z + 4)</span>.</p>
      solution: "<p><strong>해석.</strong> 이 사차식은 <span class=\"chem\">w = z^2</span>에 대한 이차식이에요.<br>(a) <span class=\"chem\">w = (-4 +- sqrt(-48))/2 = -2 +- 2 sqrt(3)i = 4 e^{+- i(2pi/3)}</span>.<br>(b) 제곱근을 취하면 <span class=\"chem\">z = 2 e^{+- i(pi/3)} = 1 +- sqrt(3)i</span>와 <span class=\"chem\">z = 2 e^{+- i(2pi/3)} = -1 +- sqrt(3)i</span>를 얻어요. 켤레근끼리 묶으면 <span class=\"chem\">(z^2 - 2z + 4)(z^2 + 2z + 4)</span>가 돼요.</p>",
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

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ko', 't1-4.q', {
  questions: {

    // ── t1-4-q020 · numeric · foundation · AHL · AHL 1.12 · 3 marks
    "t1-4-q020": {
      // EN: Solve the equation <span class="chem">z^2 - 6z + 34 = 0</span>, where <span class="chem">z ∈ ℂ</span>, giving both roots in the form <span class="chem">a + bi</span>. Enter the value of <span class="chem">b</span> for the root with <span class="chem">b &gt; 0</span>.
      stem: "<span class=\"chem\">z ∈ ℂ</span>일 때 방정식 <span class=\"chem\">z^2 - 6z + 34 = 0</span>을 풀고 (Solve), 두 근을 모두 <span class=\"chem\">a + bi</span> 꼴로 나타내시오. <span class=\"chem\">b &gt; 0</span>인 근에 대하여 <span class=\"chem\">b</span>의 값을 입력하시오.",
      hints: [
        // EN: The discriminant is <span class="chem">Delta = (-6)^2 - 4(1)(34) = 36 - 136 = -100</span>, which is negative, so the roots are a complex conjugate pair.
        "판별식은 <span class=\"chem\">Delta = (-6)^2 - 4(1)(34) = 36 - 136 = -100</span>로 음수이므로, 두 근은 켤레복소수 쌍이에요.",
        // EN: Use <span class="chem">sqrt(-100) = 10i</span> in the quadratic formula: <span class="chem">z = (6 +- 10i) / 2</span>.
        "근의 공식에 <span class=\"chem\">sqrt(-100) = 10i</span>을 이용하세요: <span class=\"chem\">z = (6 +- 10i) / 2</span>.",
      ],
      // EN: <p><span class="chem">Delta = 36 - 136 = -100 &lt; 0</span>, so <span class="chem">z = (6 +- sqrt(-100)) / 2 = (6 +- 10i) / 2 = 3 +- 5i</span>. The root with positive imaginary part is <span class="chem">3 + 5i</span>, so <span class="chem">b = 5</span>.</p>
      solution: "<p><span class=\"chem\">Delta = 36 - 136 = -100 &lt; 0</span>이므로 <span class=\"chem\">z = (6 +- sqrt(-100)) / 2 = (6 +- 10i) / 2 = 3 +- 5i</span>예요. 허수부가 양수인 근은 <span class=\"chem\">3 + 5i</span>이므로 <span class=\"chem\">b = 5</span>예요.</p>",
    },

    // ── t1-4-q021 · numeric · foundation · AHL · AHL 1.12 · 2 marks
    "t1-4-q021": {
      // EN: Let <span class="chem">z = (3 + 2i)^5 / (1 - 4i)^3</span>. Use your GDC in complex mode to find <span class="chem">Re(z)</span>, giving your answer correct to 3 significant figures.
      stem: "<span class=\"chem\">z = (3 + 2i)^5 / (1 - 4i)^3</span>이라 하자. GDC의 복소수 모드를 이용하여 <span class=\"chem\">Re(z)</span>를 구하고 (Find), 답을 유효숫자 3자리까지 나타내시오.",
      hints: [
        // EN: Switch the GDC to complex (a + bi) mode and type the whole expression with brackets around each base: <span class="chem">(3 + 2i)^5 ÷ (1 - 4i)^3</span>.
        "GDC를 복소수 (a + bi) 모드로 바꾸고, 각 밑을 괄호로 묶어 식 전체를 입력하세요: <span class=\"chem\">(3 + 2i)^5 ÷ (1 - 4i)^3</span>.",
        // EN: The GDC returns <span class="chem">z ≈ 7.0024 + 5.1516i</span>. The real part is the number without <span class="chem">i</span>.
        "GDC는 <span class=\"chem\">z ≈ 7.0024 + 5.1516i</span>을 출력해요. 실수부는 <span class=\"chem\">i</span>가 붙지 않은 수예요.",
      ],
      // EN: <p>On the GDC in complex mode, <span class="chem">(3 + 2i)^5 / (1 - 4i)^3 ≈ 7.0024 + 5.1516i</span>. So <span class="chem">Re(z) ≈ 7.00</span> (3 s.f.).</p>
      solution: "<p>GDC의 복소수 모드에서 <span class=\"chem\">(3 + 2i)^5 / (1 - 4i)^3 ≈ 7.0024 + 5.1516i</span>이에요. 따라서 <span class=\"chem\">Re(z) ≈ 7.00</span> (유효숫자 3자리)예요.</p>",
    },

    // ── t1-4-q022 · short · exam · AHL · AHL 1.12 · 6 marks
    "t1-4-q022": {
      // EN: The complex number <span class="chem">z</span> satisfies <span class="chem">2z + 3z^* = 10 - 4i</span>.<br>(a) Find <span class="chem">z</span> in the form <span class="chem">a + bi</span>, where <span class="chem">a, b ∈ ℝ</span>. [3 marks]<br>(b) Hence find <span class="chem">z / z^*</span> in the form <span class="chem">p + qi</span>, where <span class="chem">p, q ∈ ℚ</span>. [3 marks]
      stem: "복소수 <span class=\"chem\">z</span>은 <span class=\"chem\">2z + 3z^* = 10 - 4i</span>를 만족한다.<br>(a) <span class=\"chem\">a, b ∈ ℝ</span>일 때, <span class=\"chem\">z</span>을 <span class=\"chem\">a + bi</span> 꼴로 구하시오 (Find). [3 marks]<br>(b) 이를 이용하여 (Hence) <span class=\"chem\">p, q ∈ ℚ</span>일 때, <span class=\"chem\">z / z^*</span>을 <span class=\"chem\">p + qi</span> 꼴로 구하시오. [3 marks]",
      hints: [
        // EN: Write <span class="chem">z = a + bi</span>, so <span class="chem">z^* = a - bi</span>. Substitute both and collect the real terms and the imaginary terms.
        "<span class=\"chem\">z = a + bi</span>로 놓으면 <span class=\"chem\">z^* = a - bi</span>예요. 둘 다 대입하고 실수항과 허수항을 각각 정리하세요.",
        // EN: You should get <span class="chem">5a - bi = 10 - 4i</span>. For (b), multiply top and bottom of <span class="chem">z / z^*</span> by <span class="chem">z</span> and use <span class="chem">z z^* = |z|^2</span>.
        "<span class=\"chem\">5a - bi = 10 - 4i</span>을 얻어야 해요. (b)에서는 <span class=\"chem\">z / z^*</span>의 분자와 분모에 <span class=\"chem\">z</span>을 곱하고 <span class=\"chem\">z z^* = |z|^2</span>를 이용하세요.",
      ],
      // EN: <p>(a) With <span class="chem">z = a + bi</span>: <span class="chem">2a + 2bi + 3a - 3bi = 5a - bi = 10 - 4i</span>. Equating parts gives <span class="chem">a = 2</span> and <span class="chem">b = 4</span>, so <span class="chem">z = 2 + 4i</span>.<br>(b) <span class="chem">z / z^* = z^2 / (z z^*) = (2 + 4i)^2 / 20 = (4 + 16i - 16) / 20 = (-12 + 16i) / 20 = -3/5 + (4/5)i</span>.</p>
      solution: "<p>(a) <span class=\"chem\">z = a + bi</span>로 놓으면: <span class=\"chem\">2a + 2bi + 3a - 3bi = 5a - bi = 10 - 4i</span>. 실수부와 허수부를 비교하면 <span class=\"chem\">a = 2</span>, <span class=\"chem\">b = 4</span>이므로 <span class=\"chem\">z = 2 + 4i</span>예요.<br>(b) <span class=\"chem\">z / z^* = z^2 / (z z^*) = (2 + 4i)^2 / 20 = (4 + 16i - 16) / 20 = (-12 + 16i) / 20 = -3/5 + (4/5)i</span>.</p>",
      // EN: <p>(a) <span class="chem">z = 2 + 4i</span>.<br>(b) <span class="chem">z / z^* = -3/5 + (4/5)i</span>.</p>
      answer: "<p>(a) <span class=\"chem\">z = 2 + 4i</span>.<br>(b) <span class=\"chem\">z / z^* = -3/5 + (4/5)i</span>.</p>",
      markscheme: [
        // EN: M1: Substitutes z = a + bi and z* = a − bi: 2(a + bi) + 3(a − bi) = 10 − 4i.
        "M1: z = a + bi와 z* = a − bi를 대입함: 2(a + bi) + 3(a − bi) = 10 − 4i.",
        // EN: M1: Collects terms to 5a − bi = 10 − 4i and equates real and imaginary parts: 5a = 10 and −b = −4.
        "M1: 항을 정리해 5a − bi = 10 − 4i를 얻고 실수부와 허수부를 비교함: 5a = 10, −b = −4.",
        // EN: A1: z = 2 + 4i.
        "A1: z = 2 + 4i.",
        // EN: M1: Multiplies numerator and denominator of (2 + 4i)/(2 − 4i) by 2 + 4i.
        "M1: (2 + 4i)/(2 − 4i)의 분자와 분모에 2 + 4i를 곱함.",
        // EN: A1: Obtains (2 + 4i)²/20 = (−12 + 16i)/20.
        "A1: (2 + 4i)²/20 = (−12 + 16i)/20을 얻음.",
        // EN: A1: z/z* = −3/5 + (4/5)i.
        "A1: z/z* = −3/5 + (4/5)i.",
      ],
    },

    // ── t1-4-q023 · numeric · exam · AHL · AHL 1.13 · 4 marks
    "t1-4-q023": {
      // EN: Let <span class="chem">z = sqrt(3) - i</span> and <span class="chem">w = -1 - i</span>. Find the exact value of the principal argument <span class="chem">arg(z^2 w)</span>, where <span class="chem">-pi &lt; arg(z^2 w) &lt;= pi</span>.
      stem: "<span class=\"chem\">z = sqrt(3) - i</span>, <span class=\"chem\">w = -1 - i</span>라 하자. <span class=\"chem\">-pi &lt; arg(z^2 w) &lt;= pi</span>일 때, 주편각 <span class=\"chem\">arg(z^2 w)</span>의 정확한 값을 구하시오 (Find).",
      hints: [
        // EN: Find each argument separately: <span class="chem">z</span> is in Quadrant IV and <span class="chem">w</span> is in Quadrant III.
        "각각의 편각을 따로 구하세요: <span class=\"chem\">z</span>은 제4사분면, <span class=\"chem\">w</span>는 제3사분면에 있어요.",
        // EN: <span class="chem">arg(z) = -pi/6</span> and <span class="chem">arg(w) = -3pi/4</span>. Then <span class="chem">arg(z^2 w) = 2 arg(z) + arg(w)</span>, but check whether the total lies in <span class="chem">(-pi, pi]</span>.
        "<span class=\"chem\">arg(z) = -pi/6</span>이고 <span class=\"chem\">arg(w) = -3pi/4</span>예요. 그러면 <span class=\"chem\">arg(z^2 w) = 2 arg(z) + arg(w)</span>이지만, 합이 <span class=\"chem\">(-pi, pi]</span> 안에 있는지 확인하세요.",
      ],
      // EN: <p><span class="chem">arg(z) = -pi/6</span> and <span class="chem">arg(w) = -3pi/4</span>. Arguments add under multiplication, so <span class="chem">arg(z^2 w) = 2(-pi/6) + (-3pi/4) = -13pi/12</span> up to a multiple of <span class="chem">2pi</span>. This is less than <span class="chem">-pi</span>, so add <span class="chem">2pi</span>: the principal argument is <span class="chem">11pi/12</span>. (Check: <span class="chem">z^2 w = (-2 - 2 sqrt(3)) + (2 sqrt(3) - 2)i</span> is in Quadrant II.)</p>
      solution: "<p><span class=\"chem\">arg(z) = -pi/6</span>이고 <span class=\"chem\">arg(w) = -3pi/4</span>예요. 곱셈에서는 편각이 더해지므로, <span class=\"chem\">2pi</span>의 정수배 차이를 제외하면 <span class=\"chem\">arg(z^2 w) = 2(-pi/6) + (-3pi/4) = -13pi/12</span>이에요. 이 값은 <span class=\"chem\">-pi</span>보다 작으므로 <span class=\"chem\">2pi</span>을 더해요: 주편각은 <span class=\"chem\">11pi/12</span>이에요. (확인: <span class=\"chem\">z^2 w = (-2 - 2 sqrt(3)) + (2 sqrt(3) - 2)i</span>은 제2사분면에 있어요.)</p>",
    },

    // ── t1-4-q024 · short · exam · AHL · AHL 1.13 · 6 marks
    "t1-4-q024": {
      // EN: On an Argand diagram, the points <span class="chem">O</span>, <span class="chem">A</span> and <span class="chem">B</span> represent <span class="chem">0</span>, <span class="chem">z = 3 + i</span> and <span class="chem">w = (1 + i)z</span>.<br>(a) Find <span class="chem">w</span> in the form <span class="chem">a + bi</span>. [2 marks]<br>(b) By writing <span class="chem">1 + i</span> in modulus-argument form, describe fully the geometric transformation that maps <span class="chem">A</span> to <span class="chem">B</span>. [2 marks]<br>(c) Hence find the exact area of triangle <span class="chem">OAB</span>. [2 marks]
      stem: "아르강 평면 위에서 점 <span class=\"chem\">O</span>, <span class=\"chem\">A</span>, <span class=\"chem\">B</span>은 각각 <span class=\"chem\">0</span>, <span class=\"chem\">z = 3 + i</span>, <span class=\"chem\">w = (1 + i)z</span>을 나타낸다.<br>(a) <span class=\"chem\">w</span>을 <span class=\"chem\">a + bi</span> 꼴로 구하시오 (Find). [2 marks]<br>(b) <span class=\"chem\">1 + i</span>를 극형식으로 나타내어, <span class=\"chem\">A</span>을 <span class=\"chem\">B</span>로 옮기는 기하학적 변환을 완전히 설명하시오 (Describe fully). [2 marks]<br>(c) 이를 이용하여 (Hence) 삼각형 <span class=\"chem\">OAB</span>의 정확한 넓이를 구하시오. [2 marks]",
      hints: [
        // EN: Expand the brackets and use <span class="chem">i^2 = -1</span>.
        "괄호를 전개하고 <span class=\"chem\">i^2 = -1</span>을 이용하세요.",
        // EN: Multiplying by <span class="chem">r cis(alpha)</span> scales every modulus by <span class="chem">r</span> and adds <span class="chem">alpha</span> to every argument. So the angle <span class="chem">AOB</span> is <span class="chem">alpha</span> and <span class="chem">OB = r × OA</span>.
        "<span class=\"chem\">r cis(alpha)</span>을 곱하면 모든 절댓값이 <span class=\"chem\">r</span>배가 되고 모든 편각에 <span class=\"chem\">alpha</span>이 더해져요. 따라서 각 <span class=\"chem\">AOB</span>는 <span class=\"chem\">alpha</span>이고 <span class=\"chem\">OB = r × OA</span>이에요.",
      ],
      // EN: <p>(a) <span class="chem">w = (1 + i)(3 + i) = 3 + i + 3i - 1 = 2 + 4i</span>.<br>(b) <span class="chem">1 + i = sqrt(2) cis(pi/4)</span>, so multiplying by it rotates <span class="chem">A</span> anticlockwise about <span class="chem">O</span> through <span class="chem">pi/4</span> and multiplies its distance from <span class="chem">O</span> by <span class="chem">sqrt(2)</span>.<br>(c) <span class="chem">OA = sqrt(10)</span>, <span class="chem">OB = sqrt(2) × sqrt(10) = sqrt(20)</span> and angle <span class="chem">AOB = pi/4</span>, so area <span class="chem">= (1/2)(sqrt(10))(sqrt(20)) sin(pi/4) = (1/2)(10 sqrt(2))(sqrt(2)/2) = 5</span>.</p>
      solution: "<p>(a) <span class=\"chem\">w = (1 + i)(3 + i) = 3 + i + 3i - 1 = 2 + 4i</span>.<br>(b) <span class=\"chem\">1 + i = sqrt(2) cis(pi/4)</span>이므로, 이를 곱하면 <span class=\"chem\">A</span>이 <span class=\"chem\">O</span>를 중심으로 시계 반대 방향으로 <span class=\"chem\">pi/4</span>만큼 회전하고 <span class=\"chem\">O</span>으로부터의 거리가 <span class=\"chem\">sqrt(2)</span>배가 돼요.<br>(c) <span class=\"chem\">OA = sqrt(10)</span>, <span class=\"chem\">OB = sqrt(2) × sqrt(10) = sqrt(20)</span>이고 각 <span class=\"chem\">AOB = pi/4</span>이므로 넓이 <span class=\"chem\">= (1/2)(sqrt(10))(sqrt(20)) sin(pi/4) = (1/2)(10 sqrt(2))(sqrt(2)/2) = 5</span>이에요.</p>",
      // EN: <p>(a) <span class="chem">w = 2 + 4i</span>.<br>(b) <span class="chem">1 + i = sqrt(2) cis(pi/4)</span>: an anticlockwise rotation about <span class="chem">O</span> through <span class="chem">pi/4</span> combined with an enlargement, centre <span class="chem">O</span>, scale factor <span class="chem">sqrt(2)</span>.<br>(c) Area <span class="chem">= 5</span>.</p>
      answer: "<p>(a) <span class=\"chem\">w = 2 + 4i</span>.<br>(b) <span class=\"chem\">1 + i = sqrt(2) cis(pi/4)</span>: <span class=\"chem\">O</span>을 중심으로 시계 반대 방향으로 <span class=\"chem\">pi/4</span>만큼 회전하고, 중심이 <span class=\"chem\">O</span>이고 닮음비가 <span class=\"chem\">sqrt(2)</span>인 확대를 합성한 변환.<br>(c) 넓이 <span class=\"chem\">= 5</span>.</p>",
      markscheme: [
        // EN: M1: Expands (1 + i)(3 + i) = 3 + i + 3i + i².
        "M1: (1 + i)(3 + i) = 3 + i + 3i + i²으로 전개함.",
        // EN: A1: w = 2 + 4i.
        "A1: w = 2 + 4i.",
        // EN: A1: 1 + i = √2 cis(π/4) (or √2 e<sup>iπ/4</sup>).
        "A1: 1 + i = √2 cis(π/4) (또는 √2 e<sup>iπ/4</sup>).",
        // EN: A1: Rotation anticlockwise through π/4 about O and enlargement with scale factor √2, centre O.
        "A1: O를 중심으로 시계 반대 방향으로 π/4만큼 회전하고, 중심이 O이고 닮음비가 √2인 확대.",
        // EN: M1: Uses area = ½ |z| |w| sin(∠AOB) with |z| = √10, |w| = √20 and ∠AOB = π/4.
        "M1: |z| = √10, |w| = √20, ∠AOB = π/4로 넓이 = ½ |z| |w| sin(∠AOB)를 이용함.",
        // EN: A1: Area = 5.
        "A1: 넓이 = 5.",
      ],
    },

    // ── t1-4-q025 · numeric · exam · AHL · AHL 1.14 · 4 marks
    "t1-4-q025": {
      // EN: Find the value of <span class="chem">(1 + sqrt(3)i)^9 + (1 - sqrt(3)i)^9</span>.
      stem: "<span class=\"chem\">(1 + sqrt(3)i)^9 + (1 - sqrt(3)i)^9</span>의 값을 구하시오 (Find).",
      hints: [
        // EN: Write <span class="chem">1 + sqrt(3)i = 2 e^{i pi/3}</span>. The second number is its conjugate, <span class="chem">2 e^{-i pi/3}</span>.
        "<span class=\"chem\">1 + sqrt(3)i = 2 e^{i pi/3}</span>로 쓰세요. 두 번째 수는 그 켤레복소수 <span class=\"chem\">2 e^{-i pi/3}</span>예요.",
        // EN: By De Moivre, the two ninth powers are <span class="chem">2^9 e^{+- 3 pi i}</span>. The sum of a number and its conjugate is twice its real part.
        "드 무아브르 정리에 의해 두 9제곱은 <span class=\"chem\">2^9 e^{+- 3 pi i}</span>이에요. 어떤 수와 그 켤레복소수의 합은 실수부의 2배예요.",
      ],
      // EN: <p><span class="chem">1 +- sqrt(3)i = 2 e^{+- i pi/3}</span>. By De Moivre's theorem, <span class="chem">(1 +- sqrt(3)i)^9 = 512 e^{+- 3 pi i} = 512(cos(3pi) +- i sin(3pi)) = -512</span>. The sum is <span class="chem">-512 + (-512) = -1024</span>.</p>
      solution: "<p><span class=\"chem\">1 +- sqrt(3)i = 2 e^{+- i pi/3}</span>. 드 무아브르 정리에 의해 <span class=\"chem\">(1 +- sqrt(3)i)^9 = 512 e^{+- 3 pi i} = 512(cos(3pi) +- i sin(3pi)) = -512</span>예요. 합은 <span class=\"chem\">-512 + (-512) = -1024</span>이에요.</p>",
    },

    // ── t1-4-q026 · short · exam · AHL · AHL 1.14 · 7 marks
    "t1-4-q026": {
      // EN: (a) Find the three solutions of <span class="chem">z^3 = 8i</span>, giving your answers in the form <span class="chem">r e^{i theta}</span>, where <span class="chem">r &gt; 0</span> and <span class="chem">-pi &lt; theta &lt;= pi</span>. [3 marks]<br>(b) Express each solution in the form <span class="chem">a + bi</span>. [2 marks]<br>(c) The three solutions are the vertices of a triangle on the Argand diagram. Find the exact area of this triangle. [2 marks]
      stem: "(a) <span class=\"chem\">z^3 = 8i</span>의 세 해를 구하고 (Find), <span class=\"chem\">r &gt; 0</span>, <span class=\"chem\">-pi &lt; theta &lt;= pi</span>일 때 <span class=\"chem\">r e^{i theta}</span> 꼴로 답하시오. [3 marks]<br>(b) 각 해를 <span class=\"chem\">a + bi</span> 꼴로 나타내시오 (Express). [2 marks]<br>(c) 세 해는 아르강 평면 위 삼각형의 꼭짓점이다. 이 삼각형의 정확한 넓이를 구하시오 (Find). [2 marks]",
      hints: [
        // EN: Write <span class="chem">8i = 8 e^{i(pi/2 + 2 pi k)}</span> and take the cube root of the modulus and divide the argument by 3.
        "<span class=\"chem\">8i = 8 e^{i(pi/2 + 2 pi k)}</span>로 쓰고, 절댓값의 세제곱근을 구한 뒤 편각을 3으로 나누세요.",
        // EN: The three roots are spaced <span class="chem">2pi/3</span> apart on a circle of radius 2. For the area, two of the roots have the same imaginary part, which gives an easy base and height.
        "세 근은 반지름이 2인 원 위에 <span class=\"chem\">2pi/3</span> 간격으로 놓여 있어요. 넓이를 구할 때, 두 근의 허수부가 같으므로 밑변과 높이를 쉽게 구할 수 있어요.",
      ],
      // EN: <p>(a) <span class="chem">8i = 8 e^{i(pi/2 + 2 pi k)}</span>, so <span class="chem">z = 2 e^{i(pi/6 + 2 pi k / 3)}</span>. For <span class="chem">k = 0, 1, -1</span>: arguments <span class="chem">pi/6</span>, <span class="chem">5pi/6</span>, <span class="chem">-pi/2</span>.<br>(b) <span class="chem">2 cis(pi/6) = sqrt(3) + i</span>, <span class="chem">2 cis(5pi/6) = -sqrt(3) + i</span>, <span class="chem">2 cis(-pi/2) = -2i</span>.<br>(c) The base from <span class="chem">-sqrt(3) + i</span> to <span class="chem">sqrt(3) + i</span> has length <span class="chem">2 sqrt(3)</span>; the third vertex <span class="chem">-2i</span> is <span class="chem">3</span> units below it. Area <span class="chem">= (1/2)(2 sqrt(3))(3) = 3 sqrt(3)</span>.</p>
      solution: "<p>(a) <span class=\"chem\">8i = 8 e^{i(pi/2 + 2 pi k)}</span>이므로 <span class=\"chem\">z = 2 e^{i(pi/6 + 2 pi k / 3)}</span>예요. <span class=\"chem\">k = 0, 1, -1</span>일 때 편각은 <span class=\"chem\">pi/6</span>, <span class=\"chem\">5pi/6</span>, <span class=\"chem\">-pi/2</span>이에요.<br>(b) <span class=\"chem\">2 cis(pi/6) = sqrt(3) + i</span>, <span class=\"chem\">2 cis(5pi/6) = -sqrt(3) + i</span>, <span class=\"chem\">2 cis(-pi/2) = -2i</span>.<br>(c) <span class=\"chem\">-sqrt(3) + i</span>에서 <span class=\"chem\">sqrt(3) + i</span>까지의 밑변의 길이는 <span class=\"chem\">2 sqrt(3)</span>이고, 세 번째 꼭짓점 <span class=\"chem\">-2i</span>은 그보다 <span class=\"chem\">3</span>만큼 아래에 있어요. 넓이 <span class=\"chem\">= (1/2)(2 sqrt(3))(3) = 3 sqrt(3)</span>.</p>",
      // EN: <p>(a) <span class="chem">z = 2 e^{i pi/6}</span>, <span class="chem">2 e^{i 5pi/6}</span>, <span class="chem">2 e^{-i pi/2}</span>.<br>(b) <span class="chem">sqrt(3) + i</span>, <span class="chem">-sqrt(3) + i</span>, <span class="chem">-2i</span>.<br>(c) Area <span class="chem">= 3 sqrt(3)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">z = 2 e^{i pi/6}</span>, <span class=\"chem\">2 e^{i 5pi/6}</span>, <span class=\"chem\">2 e^{-i pi/2}</span>.<br>(b) <span class=\"chem\">sqrt(3) + i</span>, <span class=\"chem\">-sqrt(3) + i</span>, <span class=\"chem\">-2i</span>.<br>(c) 넓이 <span class=\"chem\">= 3 sqrt(3)</span>.</p>",
      markscheme: [
        // EN: M1: Writes 8i = 8 e<sup>i(π/2 + 2πk)</sup>.
        "M1: 8i = 8 e<sup>i(π/2 + 2πk)</sup>로 씀.",
        // EN: A1: Modulus 8<sup>1/3</sup> = 2 and arguments (π/2 + 2πk)/3.
        "A1: 절댓값 8<sup>1/3</sup> = 2와 편각 (π/2 + 2πk)/3.",
        // EN: A1: All three principal arguments: π/6, 5π/6, −π/2.
        "A1: 세 주편각 모두: π/6, 5π/6, −π/2.",
        // EN: A1: √3 + i and −√3 + i.
        "A1: √3 + i와 −√3 + i.",
        // EN: A1: −2i.
        "A1: −2i.",
        // EN: M1: Valid area method, e.g. base 2√3 (between √3 + i and −√3 + i) and height 3, or 3 × ½ × 2² × sin(2π/3).
        "M1: 올바른 넓이 계산 방법. 예: 밑변 2√3 (√3 + i와 −√3 + i 사이)과 높이 3, 또는 3 × ½ × 2² × sin(2π/3).",
        // EN: A1: Area = 3√3.
        "A1: 넓이 = 3√3.",
      ],
    },

    // ── t1-4-q027 · short · exam · AHL · AHL 1.14 · 6 marks
    "t1-4-q027": {
      // EN: Let <span class="chem">P(z) = z^4 - 4z^3 + 14z^2 - 36z + 45</span>. You are given that <span class="chem">3i</span> is a root of <span class="chem">P(z) = 0</span>.<br>(a) Write down another root of <span class="chem">P(z) = 0</span>, and state why it must be a root. [2 marks]<br>(b) Find the other two roots of <span class="chem">P(z) = 0</span>. [4 marks]
      stem: "<span class=\"chem\">P(z) = z^4 - 4z^3 + 14z^2 - 36z + 45</span>이라 하자. <span class=\"chem\">3i</span>가 <span class=\"chem\">P(z) = 0</span>의 근이라고 주어졌다.<br>(a) <span class=\"chem\">P(z) = 0</span>의 다른 근 하나를 쓰고 (Write down), 그것이 반드시 근이어야 하는 이유를 말하시오 (State). [2 marks]<br>(b) <span class=\"chem\">P(z) = 0</span>의 나머지 두 근을 구하시오 (Find). [4 marks]",
      hints: [
        // EN: Real coefficients force non-real roots to come in conjugate pairs.
        "계수가 실수이면 실수가 아닌 근은 반드시 켤레 쌍으로 나타나요.",
        // EN: Multiply <span class="chem">(z - 3i)(z + 3i) = z^2 + 9</span>, then find the quadratic <span class="chem">z^2 + bz + c</span> with <span class="chem">(z^2 + 9)(z^2 + bz + c) = P(z)</span>: compare the <span class="chem">z^3</span> and constant terms.
        "<span class=\"chem\">(z - 3i)(z + 3i) = z^2 + 9</span>을 계산한 다음, <span class=\"chem\">(z^2 + 9)(z^2 + bz + c) = P(z)</span>이 되는 이차식 <span class=\"chem\">z^2 + bz + c</span>를 구하세요: <span class=\"chem\">z^3</span>항과 상수항을 비교하세요.",
      ],
      // EN: <p>(a) <span class="chem">P</span> has real coefficients, so <span class="chem">(3i)^* = -3i</span> is also a root.<br>(b) <span class="chem">(z - 3i)(z + 3i) = z^2 + 9</span>. Write <span class="chem">P(z) = (z^2 + 9)(z^2 + bz + c)</span>. The <span class="chem">z^3</span> terms give <span class="chem">b = -4</span>; the constants give <span class="chem">9c = 45</span>, so <span class="chem">c = 5</span>. (Check the <span class="chem">z</span> term: <span class="chem">9b = -36</span>.) Then <span class="chem">z^2 - 4z + 5 = 0</span> gives <span class="chem">z = (4 +- sqrt(-4)) / 2 = 2 +- i</span>.</p>
      solution: "<p>(a) <span class=\"chem\">P</span>의 계수가 실수이므로 <span class=\"chem\">(3i)^* = -3i</span>도 근이에요.<br>(b) <span class=\"chem\">(z - 3i)(z + 3i) = z^2 + 9</span>. <span class=\"chem\">P(z) = (z^2 + 9)(z^2 + bz + c)</span>로 놓아요. <span class=\"chem\">z^3</span>항에서 <span class=\"chem\">b = -4</span>, 상수항에서 <span class=\"chem\">9c = 45</span>이므로 <span class=\"chem\">c = 5</span>이에요. (<span class=\"chem\">z</span>항으로 확인: <span class=\"chem\">9b = -36</span>.) 그러면 <span class=\"chem\">z^2 - 4z + 5 = 0</span>에서 <span class=\"chem\">z = (4 +- sqrt(-4)) / 2 = 2 +- i</span>를 얻어요.</p>",
      // EN: <p>(a) <span class="chem">-3i</span>, because <span class="chem">P</span> has real coefficients, so non-real roots occur in conjugate pairs.<br>(b) <span class="chem">P(z) = (z^2 + 9)(z^2 - 4z + 5)</span>, so the other roots are <span class="chem">z = 2 +- i</span>.</p>
      answer: "<p>(a) <span class=\"chem\">-3i</span>. <span class=\"chem\">P</span>의 계수가 실수이므로 실수가 아닌 근은 켤레 쌍으로 나타나기 때문이다.<br>(b) <span class=\"chem\">P(z) = (z^2 + 9)(z^2 - 4z + 5)</span>이므로 나머지 근은 <span class=\"chem\">z = 2 +- i</span>.</p>",
      markscheme: [
        // EN: A1: −3i is a root.
        "A1: −3i는 근이다.",
        // EN: R1: P(z) has real coefficients, so the complex conjugate of a root is also a root.
        "R1: P(z)의 계수가 실수이므로 근의 켤레복소수도 근이다.",
        // EN: M1: Uses the quadratic factor (z − 3i)(z + 3i) = z² + 9.
        "M1: 이차 인수 (z − 3i)(z + 3i) = z² + 9를 이용함.",
        // EN: M1: Divides, or compares coefficients in (z² + 9)(z² + bz + c), to find the other factor.
        "M1: 나눗셈을 하거나 (z² + 9)(z² + bz + c)의 계수를 비교해 다른 인수를 구함.",
        // EN: A1: z² − 4z + 5.
        "A1: z² − 4z + 5.",
        // EN: A1: z = 2 + i and z = 2 − i.
        "A1: z = 2 + i와 z = 2 − i.",
      ],
    },

    // ── t1-4-q028 · short · challenge · AHL · AHL 1.14 · 9 marks
    "t1-4-q028": {
      // EN: (a) Use De Moivre's theorem to show that <span class="chem">sin(5 theta) = 16 sin^5 theta - 20 sin^3 theta + 5 sin theta</span>. [4 marks]<br>(b) By considering <span class="chem">theta = pi/5</span>, show that <span class="chem">x = sin^2(pi/5)</span> satisfies <span class="chem">16x^2 - 20x + 5 = 0</span>. [2 marks]<br>(c) Hence find the exact value of <span class="chem">sin^2(pi/5)</span>, justifying your choice of root. [3 marks]
      stem: "(a) 드 무아브르 정리를 이용하여 <span class=\"chem\">sin(5 theta) = 16 sin^5 theta - 20 sin^3 theta + 5 sin theta</span>임을 보이시오 (Show that). [4 marks]<br>(b) <span class=\"chem\">theta = pi/5</span>를 생각하여, <span class=\"chem\">x = sin^2(pi/5)</span>이 <span class=\"chem\">16x^2 - 20x + 5 = 0</span>를 만족함을 보이시오. [2 marks]<br>(c) 이를 이용하여 (Hence) <span class=\"chem\">sin^2(pi/5)</span>의 정확한 값을 구하고, 근을 선택한 이유를 설명하시오. [3 marks]",
      hints: [
        // EN: Decode: "use De Moivre" for <span class="chem">sin(5 theta)</span> means: expand <span class="chem">(cos theta + i sin theta)^5</span> with the binomial theorem and keep the imaginary part. Parts (b) and (c) then turn the identity into a quadratic in <span class="chem">sin^2 theta</span>.
        "해석: <span class=\"chem\">sin(5 theta)</span>에 대해 \"드 무아브르 정리를 이용하라\"는 것은 <span class=\"chem\">(cos theta + i sin theta)^5</span>를 이항정리로 전개하여 허수부를 취하라는 뜻이에요. (b)와 (c)에서는 그 항등식을 <span class=\"chem\">sin^2 theta</span>에 대한 이차방정식으로 바꿔요.",
        // EN: The imaginary terms of the expansion are <span class="chem">5c^4 (is) + 10c^2 (is)^3 + (is)^5</span>. Simplify the powers of <span class="chem">i</span>, then replace <span class="chem">c^2</span> by <span class="chem">1 - s^2</span>.
        "전개식의 허수항은 <span class=\"chem\">5c^4 (is) + 10c^2 (is)^3 + (is)^5</span>이에요. <span class=\"chem\">i</span>의 거듭제곱을 간단히 한 뒤 <span class=\"chem\">c^2</span>을 <span class=\"chem\">1 - s^2</span>로 바꾸세요.",
        // EN: In (c) both roots of the quadratic are positive. Which one is less than <span class="chem">1/2</span>, and why must <span class="chem">sin^2(pi/5)</span> be less than <span class="chem">1/2</span>?
        "(c)에서 이차방정식의 두 근은 모두 양수예요. 어느 것이 <span class=\"chem\">1/2</span>보다 작은지, 그리고 왜 <span class=\"chem\">sin^2(pi/5)</span>가 <span class=\"chem\">1/2</span>보다 작아야 하는지 생각해 보세요.",
      ],
      // EN: <p><strong>Decode.</strong> This is the standard "multiple-angle identity by De Moivre" technique, followed by solving a polynomial whose roots are known trig values.<br>(a) <span class="chem">cos(5 theta) + i sin(5 theta) = (c + is)^5</span>. Imaginary part: <span class="chem">5c^4 s - 10c^2 s^3 + s^5</span>. With <span class="chem">c^2 = 1 - s^2</span>: <span class="chem">5s(1 - 2s^2 + s^4) - 10s^3 + 10s^5 + s^5 = 16s^5 - 20s^3 + 5s</span>.<br>(b) With <span class="chem">theta = pi/5</span>, <span class="chem">sin(5 theta) = sin(pi) = 0</span>. Since <span class="chem">s = sin(pi/5) != 0</span>, divide by <span class="chem">s</span>: <span class="chem">16s^4 - 20s^2 + 5 = 0</span>, i.e. <span class="chem">16x^2 - 20x + 5 = 0</span>.<br>(c) <span class="chem">x = (20 +- sqrt(400 - 320)) / 32 = (5 +- sqrt(5)) / 8</span>. As <span class="chem">pi/5 &lt; pi/4</span>, <span class="chem">sin^2(pi/5) &lt; 1/2</span>, while <span class="chem">(5 + sqrt(5))/8 ≈ 0.90</span>. So <span class="chem">sin^2(pi/5) = (5 - sqrt(5)) / 8</span>.</p>
      solution: "<p><strong>해석.</strong> 이것은 \"드 무아브르 정리로 배각 항등식 유도하기\"라는 대표적인 기법이고, 이어서 알려진 삼각함수 값을 근으로 갖는 다항식을 풀어요.<br>(a) <span class=\"chem\">cos(5 theta) + i sin(5 theta) = (c + is)^5</span>. 허수부: <span class=\"chem\">5c^4 s - 10c^2 s^3 + s^5</span>. <span class=\"chem\">c^2 = 1 - s^2</span>을 이용하면: <span class=\"chem\">5s(1 - 2s^2 + s^4) - 10s^3 + 10s^5 + s^5 = 16s^5 - 20s^3 + 5s</span>.<br>(b) <span class=\"chem\">theta = pi/5</span>일 때 <span class=\"chem\">sin(5 theta) = sin(pi) = 0</span>. <span class=\"chem\">s = sin(pi/5) != 0</span>이므로 <span class=\"chem\">s</span>로 나누면: <span class=\"chem\">16s^4 - 20s^2 + 5 = 0</span>, 즉 <span class=\"chem\">16x^2 - 20x + 5 = 0</span>.<br>(c) <span class=\"chem\">x = (20 +- sqrt(400 - 320)) / 32 = (5 +- sqrt(5)) / 8</span>. <span class=\"chem\">pi/5 &lt; pi/4</span>이므로 <span class=\"chem\">sin^2(pi/5) &lt; 1/2</span>인데, <span class=\"chem\">(5 + sqrt(5))/8 ≈ 0.90</span>예요. 따라서 <span class=\"chem\">sin^2(pi/5) = (5 - sqrt(5)) / 8</span>.</p>",
      // EN: <p>(a) The imaginary part of <span class="chem">(cos theta + i sin theta)^5</span> is <span class="chem">5c^4 s - 10c^2 s^3 + s^5</span> (with <span class="chem">c = cos theta</span>, <span class="chem">s = sin theta</span>); replacing <span class="chem">c^2 = 1 - s^2</span> gives <span class="chem">16s^5 - 20s^3 + 5s</span>.<br>(b) <span class="chem">sin(pi) = 0</span> and <span class="chem">sin(pi/5) != 0</span>, so dividing by <span class="chem">sin(pi/5)</span> gives <span class="chem">16x^2 - 20x + 5 = 0</span>.<br>(c) <span class="chem">x = (5 +- sqrt(5)) / 8</span>; since <span class="chem">0 &lt; pi/5 &lt; pi/4</span>, <span class="chem">sin^2(pi/5) &lt; 1/2</span>, so <span class="chem">sin^2(pi/5) = (5 - sqrt(5)) / 8</span>.</p>
      answer: "<p>(a) <span class=\"chem\">(cos theta + i sin theta)^5</span>의 허수부는 <span class=\"chem\">5c^4 s - 10c^2 s^3 + s^5</span> (<span class=\"chem\">c = cos theta</span>, <span class=\"chem\">s = sin theta</span>)이고, <span class=\"chem\">c^2 = 1 - s^2</span>를 대입하면 <span class=\"chem\">16s^5 - 20s^3 + 5s</span>이다.<br>(b) <span class=\"chem\">sin(pi) = 0</span>이고 <span class=\"chem\">sin(pi/5) != 0</span>이므로, <span class=\"chem\">sin(pi/5)</span>로 나누면 <span class=\"chem\">16x^2 - 20x + 5 = 0</span>이다.<br>(c) <span class=\"chem\">x = (5 +- sqrt(5)) / 8</span>. <span class=\"chem\">0 &lt; pi/5 &lt; pi/4</span>이므로 <span class=\"chem\">sin^2(pi/5) &lt; 1/2</span>이고, 따라서 <span class=\"chem\">sin^2(pi/5) = (5 - sqrt(5)) / 8</span>.</p>",
      markscheme: [
        // EN: M1: Writes sin 5θ = Im[(cos θ + i sin θ)⁵] and expands binomially.
        "M1: sin 5θ = Im[(cos θ + i sin θ)⁵]으로 쓰고 이항전개함.",
        // EN: A1: Im part = 5cos⁴θ sin θ − 10cos²θ sin³θ + sin⁵θ.
        "A1: 허수부 = 5cos⁴θ sin θ − 10cos²θ sin³θ + sin⁵θ.",
        // EN: M1: Substitutes cos²θ = 1 − sin²θ.
        "M1: cos²θ = 1 − sin²θ를 대입함.",
        // EN: A1: Expands 5s(1 − s²)² − 10s³(1 − s²) + s⁵ correctly to reach 16s⁵ − 20s³ + 5s (AG).
        "A1: 5s(1 − s²)² − 10s³(1 − s²) + s⁵를 바르게 전개해 16s⁵ − 20s³ + 5s를 얻음 (AG).",
        // EN: M1: Uses sin 5θ = sin π = 0 with sin(π/5) ≠ 0 and divides by sin(π/5).
        "M1: sin 5θ = sin π = 0과 sin(π/5) ≠ 0을 이용해 sin(π/5)로 나눔.",
        // EN: A1: 16 sin⁴(π/5) − 20 sin²(π/5) + 5 = 0, i.e. 16x² − 20x + 5 = 0 (AG).
        "A1: 16 sin⁴(π/5) − 20 sin²(π/5) + 5 = 0, 즉 16x² − 20x + 5 = 0 (AG).",
        // EN: A1: x = (20 ± √80)/32 = (5 ± √5)/8.
        "A1: x = (20 ± √80)/32 = (5 ± √5)/8.",
        // EN: R1: Rejects (5 + √5)/8 because sin²(π/5) < sin²(π/4) = ½ (or because (5 + √5)/8 = sin²(2π/5)).
        "R1: sin²(π/5) < sin²(π/4) = ½이므로 (또는 (5 + √5)/8 = sin²(2π/5)이므로) (5 + √5)/8을 제외함.",
        // EN: A1: sin²(π/5) = (5 − √5)/8.
        "A1: sin²(π/5) = (5 − √5)/8.",
      ],
    },

    // ── t1-4-q029 · numeric · challenge · AHL · AHL 1.14 · 5 marks
    "t1-4-q029": {
      // EN: The seven solutions of <span class="chem">z^7 + 1 = 0</span> lie on the unit circle of the Argand diagram. By considering the sum of these seven solutions, find the exact value of <span class="chem">cos(pi/7) + cos(3pi/7) + cos(5pi/7)</span>.
      stem: "<span class=\"chem\">z^7 + 1 = 0</span>의 일곱 해는 아르강 평면의 단위원 위에 있다. 이 일곱 해의 합을 생각하여 <span class=\"chem\">cos(pi/7) + cos(3pi/7) + cos(5pi/7)</span>의 정확한 값을 구하시오 (Find).",
      hints: [
        // EN: Decode: the cosines in the question are the real parts of some of the solutions of <span class="chem">z^7 = -1</span>. Find all seven solutions, add them, and compare real parts.
        "해석: 문제의 코사인 값들은 <span class=\"chem\">z^7 = -1</span>의 일부 해의 실수부예요. 일곱 해를 모두 구해 더한 다음 실수부를 비교하세요.",
        // EN: Write <span class="chem">-1 = e^{i(pi + 2 pi k)}</span>, so the solutions are <span class="chem">e^{i(2k + 1)pi/7}</span>: arguments <span class="chem">+- pi/7, +- 3pi/7, +- 5pi/7</span> and <span class="chem">pi</span>.
        "<span class=\"chem\">-1 = e^{i(pi + 2 pi k)}</span>로 쓰면 해는 <span class=\"chem\">e^{i(2k + 1)pi/7}</span>예요: 편각은 <span class=\"chem\">+- pi/7, +- 3pi/7, +- 5pi/7</span>과 <span class=\"chem\">pi</span>예요.",
        // EN: The coefficient of <span class="chem">z^6</span> in <span class="chem">z^7 + 1</span> is 0, so the sum of the solutions is 0. Conjugate pairs have equal real parts.
        "<span class=\"chem\">z^7 + 1</span>에서 <span class=\"chem\">z^6</span>의 계수는 0이므로 해의 합은 0이에요. 켤레 쌍은 실수부가 같아요.",
      ],
      // EN: <p><strong>Decode.</strong> A sum of cosines of equally spaced angles is the real part of a sum of roots of a polynomial.<br>The solutions of <span class="chem">z^7 = -1</span> are <span class="chem">e^{i(2k + 1)pi/7}</span>, <span class="chem">k = 0, …, 6</span>, with arguments <span class="chem">+- pi/7</span>, <span class="chem">+- 3pi/7</span>, <span class="chem">+- 5pi/7</span> and <span class="chem">pi</span>. Since <span class="chem">z^7 + 1</span> has no <span class="chem">z^6</span> term, the sum of the solutions is <span class="chem">0</span>. Real parts: <span class="chem">2(cos(pi/7) + cos(3pi/7) + cos(5pi/7)) + cos(pi) = 0</span>, so the sum is <span class="chem">1/2</span>.</p>
      solution: "<p><strong>해석.</strong> 같은 간격으로 놓인 각의 코사인의 합은 다항식의 근의 합의 실수부예요.<br><span class=\"chem\">z^7 = -1</span>의 해는 <span class=\"chem\">e^{i(2k + 1)pi/7}</span>, <span class=\"chem\">k = 0, …, 6</span>이고, 편각은 <span class=\"chem\">+- pi/7</span>, <span class=\"chem\">+- 3pi/7</span>, <span class=\"chem\">+- 5pi/7</span>과 <span class=\"chem\">pi</span>이에요. <span class=\"chem\">z^7 + 1</span>에는 <span class=\"chem\">z^6</span>항이 없으므로 해의 합은 <span class=\"chem\">0</span>이에요. 실수부를 비교하면: <span class=\"chem\">2(cos(pi/7) + cos(3pi/7) + cos(5pi/7)) + cos(pi) = 0</span>이므로 구하는 합은 <span class=\"chem\">1/2</span>예요.</p>",
    },

    // ── t1-4-q030 · numeric · challenge · AHL · AHL 1.14 · 4 marks
    "t1-4-q030": {
      // EN: The points <span class="chem">P_1, P_2, P_3, …</span> on an Argand diagram represent the complex numbers <span class="chem">(sqrt(3) + i)^1, (sqrt(3) + i)^2, (sqrt(3) + i)^3, …</span>. How many of the first 100 points <span class="chem">P_1, …, P_100</span> lie on the <strong>positive</strong> imaginary axis?
      stem: "아르강 평면 위의 점 <span class=\"chem\">P_1, P_2, P_3, …</span>은 복소수 <span class=\"chem\">(sqrt(3) + i)^1, (sqrt(3) + i)^2, (sqrt(3) + i)^3, …</span>를 나타낸다. 처음 100개의 점 <span class=\"chem\">P_1, …, P_100</span> 중 <strong>양의</strong> 허수축 위에 있는 점은 몇 개인가요?",
      hints: [
        // EN: Decode: "on the positive imaginary axis" means the argument of <span class="chem">(sqrt(3) + i)^n</span> is <span class="chem">pi/2</span> (plus a whole number of turns). The modulus does not matter. Count the integers <span class="chem">n</span> from 1 to 100 that work.
        "해석: \"양의 허수축 위에 있다\"는 것은 <span class=\"chem\">(sqrt(3) + i)^n</span>의 편각이 <span class=\"chem\">pi/2</span> (에 정수 바퀴를 더한 값)라는 뜻이에요. 절댓값은 상관없어요. 1부터 100까지의 정수 <span class=\"chem\">n</span> 중 조건을 만족하는 것을 세어 보세요.",
        // EN: <span class="chem">sqrt(3) + i = 2 e^{i pi/6}</span>, so <span class="chem">(sqrt(3) + i)^n</span> has argument <span class="chem">n pi/6</span>.
        "<span class=\"chem\">sqrt(3) + i = 2 e^{i pi/6}</span>이므로 <span class=\"chem\">(sqrt(3) + i)^n</span>의 편각은 <span class=\"chem\">n pi/6</span>이에요.",
        // EN: You need <span class="chem">n pi/6 = pi/2 + 2 pi k</span>, i.e. <span class="chem">n = 3 + 12k</span>. (Values <span class="chem">n = 9 + 12k</span> lie on the <em>negative</em> imaginary axis.)
        "<span class=\"chem\">n pi/6 = pi/2 + 2 pi k</span>, 즉 <span class=\"chem\">n = 3 + 12k</span>가 필요해요. (<span class=\"chem\">n = 9 + 12k</span>인 값은 <em>음의</em> 허수축 위에 있어요.)",
      ],
      // EN: <p><strong>Decode.</strong> Position on an axis is a condition on the argument only.<br><span class="chem">(sqrt(3) + i)^n = 2^n e^{i n pi/6}</span>. It lies on the positive imaginary axis when <span class="chem">n pi/6 = pi/2 + 2 pi k</span>, i.e. <span class="chem">n = 3 + 12k</span> with <span class="chem">k ∈ ℤ</span>. In <span class="chem">1 &lt;= n &lt;= 100</span>: <span class="chem">n = 3, 15, 27, 39, 51, 63, 75, 87, 99</span>, which is <span class="chem">9</span> points.</p>
      solution: "<p><strong>해석.</strong> 축 위에 있는지는 편각만의 조건이에요.<br><span class=\"chem\">(sqrt(3) + i)^n = 2^n e^{i n pi/6}</span>. 이 수가 양의 허수축 위에 있는 것은 <span class=\"chem\">n pi/6 = pi/2 + 2 pi k</span>, 즉 <span class=\"chem\">k ∈ ℤ</span>인 <span class=\"chem\">n = 3 + 12k</span>일 때예요. <span class=\"chem\">1 &lt;= n &lt;= 100</span>에서는 <span class=\"chem\">n = 3, 15, 27, 39, 51, 63, 75, 87, 99</span>이므로 <span class=\"chem\">9</span>개의 점이에요.</p>",
    },

    // ── t1-4-q031 · short · challenge · AHL · AHL 1.13 · 8 marks
    "t1-4-q031": {
      // EN: (a) Show that <span class="chem">1 + e^{i theta} = 2 cos(theta/2) e^{i theta/2}</span> for <span class="chem">theta ∈ ℝ</span>. [3 marks]<br>(b) Hence write down the modulus and the argument of <span class="chem">1 + e^{i 4pi/5}</span>. [2 marks]<br>(c) Find the modulus and the principal argument of <span class="chem">1 + e^{i 8pi/5}</span>, giving exact answers in terms of trigonometric values of rational multiples of <span class="chem">pi</span>. [3 marks]
      stem: "(a) <span class=\"chem\">theta ∈ ℝ</span>에 대하여 <span class=\"chem\">1 + e^{i theta} = 2 cos(theta/2) e^{i theta/2}</span>임을 보이시오 (Show that). [3 marks]<br>(b) 이를 이용하여 (Hence) <span class=\"chem\">1 + e^{i 4pi/5}</span>의 절댓값과 편각을 쓰시오 (Write down). [2 marks]<br>(c) <span class=\"chem\">1 + e^{i 8pi/5}</span>의 절댓값과 주편각을 구하고 (Find), <span class=\"chem\">pi</span>의 유리수배의 삼각함수 값을 이용한 정확한 값으로 답하시오. [3 marks]",
      hints: [
        // EN: Decode: part (c) is a trap. A modulus must be positive, but <span class="chem">2 cos(theta/2)</span> is negative when <span class="chem">theta/2</span> is an obtuse angle. The task is to repair the form so that <span class="chem">r &gt; 0</span> and the argument is principal.
        "해석: (c)는 함정이에요. 절댓값은 양수여야 하지만, <span class=\"chem\">theta/2</span>가 둔각이면 <span class=\"chem\">2 cos(theta/2)</span>은 음수가 돼요. <span class=\"chem\">r &gt; 0</span>이고 편각이 주편각이 되도록 형태를 고치는 것이 과제예요.",
        // EN: For (a), take out a factor <span class="chem">e^{i theta/2}</span> from both terms and use <span class="chem">e^{ix} + e^{-ix} = 2 cos x</span>.
        "(a)에서는 두 항에서 인수 <span class=\"chem\">e^{i theta/2}</span>을 묶어 내고 <span class=\"chem\">e^{ix} + e^{-ix} = 2 cos x</span>를 이용하세요.",
        // EN: For (c), <span class="chem">theta/2 = 4pi/5</span> and <span class="chem">cos(4pi/5) &lt; 0</span>. Write the negative sign as <span class="chem">e^{-i pi}</span> and subtract <span class="chem">pi</span> from the argument.
        "(c)에서는 <span class=\"chem\">theta/2 = 4pi/5</span>이고 <span class=\"chem\">cos(4pi/5) &lt; 0</span>예요. 음의 부호를 <span class=\"chem\">e^{-i pi}</span>으로 쓰고 편각에서 <span class=\"chem\">pi</span>를 빼세요.",
      ],
      // EN: <p><strong>Decode.</strong> The identity in (a) gives a "modulus" <span class="chem">2 cos(theta/2)</span> that is only a true modulus when it is positive; (c) tests whether you notice when it is not.<br>(a) <span class="chem">1 + e^{i theta} = e^{i theta/2}(e^{-i theta/2} + e^{i theta/2}) = e^{i theta/2} × 2 cos(theta/2)</span>.<br>(b) <span class="chem">theta = 4pi/5</span>: <span class="chem">2 cos(2pi/5) &gt; 0</span>, so the modulus is <span class="chem">2 cos(2pi/5)</span> and the argument is <span class="chem">2pi/5</span>.<br>(c) <span class="chem">theta = 8pi/5</span>: <span class="chem">1 + e^{i 8pi/5} = 2 cos(4pi/5) e^{i 4pi/5}</span>, but <span class="chem">cos(4pi/5) &lt; 0</span>. Write it as <span class="chem">(-2 cos(4pi/5)) e^{-i pi} e^{i 4pi/5} = 2 cos(pi/5) e^{-i pi/5}</span>. Modulus <span class="chem">2 cos(pi/5)</span>, principal argument <span class="chem">-pi/5</span>.</p>
      solution: "<p><strong>해석.</strong> (a)의 항등식이 주는 \"절댓값\" <span class=\"chem\">2 cos(theta/2)</span>은 양수일 때만 진짜 절댓값이에요. (c)는 양수가 아닌 경우를 알아차리는지 확인해요.<br>(a) <span class=\"chem\">1 + e^{i theta} = e^{i theta/2}(e^{-i theta/2} + e^{i theta/2}) = e^{i theta/2} × 2 cos(theta/2)</span>.<br>(b) <span class=\"chem\">theta = 4pi/5</span>: <span class=\"chem\">2 cos(2pi/5) &gt; 0</span>이므로 절댓값은 <span class=\"chem\">2 cos(2pi/5)</span>이고 편각은 <span class=\"chem\">2pi/5</span>이에요.<br>(c) <span class=\"chem\">theta = 8pi/5</span>: <span class=\"chem\">1 + e^{i 8pi/5} = 2 cos(4pi/5) e^{i 4pi/5}</span>이지만 <span class=\"chem\">cos(4pi/5) &lt; 0</span>예요. 이를 <span class=\"chem\">(-2 cos(4pi/5)) e^{-i pi} e^{i 4pi/5} = 2 cos(pi/5) e^{-i pi/5}</span>으로 다시 써요. 절댓값은 <span class=\"chem\">2 cos(pi/5)</span>, 주편각은 <span class=\"chem\">-pi/5</span>예요.</p>",
      // EN: <p>(a) <span class="chem">1 + e^{i theta} = e^{i theta/2}(e^{-i theta/2} + e^{i theta/2}) = 2 cos(theta/2) e^{i theta/2}</span>.<br>(b) Modulus <span class="chem">2 cos(2pi/5)</span>, argument <span class="chem">2pi/5</span>.<br>(c) <span class="chem">1 + e^{i 8pi/5} = 2 cos(4pi/5) e^{i 4pi/5}</span> with <span class="chem">cos(4pi/5) &lt; 0</span>, so the modulus is <span class="chem">-2 cos(4pi/5) = 2 cos(pi/5)</span> and the principal argument is <span class="chem">4pi/5 - pi = -pi/5</span>.</p>
      answer: "<p>(a) <span class=\"chem\">1 + e^{i theta} = e^{i theta/2}(e^{-i theta/2} + e^{i theta/2}) = 2 cos(theta/2) e^{i theta/2}</span>.<br>(b) 절댓값 <span class=\"chem\">2 cos(2pi/5)</span>, 편각 <span class=\"chem\">2pi/5</span>.<br>(c) <span class=\"chem\">1 + e^{i 8pi/5} = 2 cos(4pi/5) e^{i 4pi/5}</span>이고 <span class=\"chem\">cos(4pi/5) &lt; 0</span>이므로, 절댓값은 <span class=\"chem\">-2 cos(4pi/5) = 2 cos(pi/5)</span>이고 주편각은 <span class=\"chem\">4pi/5 - pi = -pi/5</span>.</p>",
      markscheme: [
        // EN: M1: Takes out the factor e<sup>iθ/2</sup>: 1 + e<sup>iθ</sup> = e<sup>iθ/2</sup>(e<sup>−iθ/2</sup> + e<sup>iθ/2</sup>).
        "M1: 인수 e<sup>iθ/2</sup>을 묶어 냄: 1 + e<sup>iθ</sup> = e<sup>iθ/2</sup>(e<sup>−iθ/2</sup> + e<sup>iθ/2</sup>).",
        // EN: M1: Uses e<sup>ix</sup> + e<sup>−ix</sup> = 2cos x (from cos x ± i sin x).
        "M1: e<sup>ix</sup> + e<sup>−ix</sup> = 2cos x를 이용함 (cos x ± i sin x로부터).",
        // EN: A1: Reaches 2cos(θ/2) e<sup>iθ/2</sup> (AG).
        "A1: 2cos(θ/2) e<sup>iθ/2</sup>을 얻음 (AG).",
        // EN: A1: Modulus 2cos(2π/5).
        "A1: 절댓값 2cos(2π/5).",
        // EN: A1: Argument 2π/5 (valid because cos(2π/5) > 0).
        "A1: 편각 2π/5 (cos(2π/5) > 0이므로 타당함).",
        // EN: M1: Writes 1 + e<sup>i8π/5</sup> = 2cos(4π/5) e<sup>i4π/5</sup>.
        "M1: 1 + e<sup>i8π/5</sup> = 2cos(4π/5) e<sup>i4π/5</sup>로 씀.",
        // EN: R1: Notes cos(4π/5) < 0, so writes −1 = e<sup>−iπ</sup>: modulus = −2cos(4π/5) = 2cos(π/5).
        "R1: cos(4π/5) < 0임에 주목하여 −1 = e<sup>−iπ</sup>로 씀: 절댓값 = −2cos(4π/5) = 2cos(π/5).",
        // EN: A1: Principal argument 4π/5 − π = −π/5.
        "A1: 주편각 4π/5 − π = −π/5.",
      ],
    },

    // ── t1-4-q032 · short · exam · AHL · AHL 1.14 · 8 marks
    "t1-4-q032": {
      // EN: Let <span class="chem">z = cos theta + i sin theta</span>.<br>(a) Show that <span class="chem">z^n + z^{-n} = 2 cos(n theta)</span> for <span class="chem">n ∈ ℤ^+</span>. [2 marks]<br>(b) By expanding <span class="chem">(z + z^{-1})^3</span>, show that <span class="chem">cos^3 theta = (1/4) cos(3 theta) + (3/4) cos theta</span>. [3 marks]<br>(c) Hence find the exact value of <span class="chem">∫_0^{pi/3} cos^3 theta d theta</span>. [3 marks]
      stem: "<span class=\"chem\">z = cos theta + i sin theta</span>이라 하자.<br>(a) <span class=\"chem\">n ∈ ℤ^+</span>에 대하여 <span class=\"chem\">z^n + z^{-n} = 2 cos(n theta)</span>임을 보이시오 (Show that). [2 marks]<br>(b) <span class=\"chem\">(z + z^{-1})^3</span>를 전개하여 <span class=\"chem\">cos^3 theta = (1/4) cos(3 theta) + (3/4) cos theta</span>임을 보이시오. [3 marks]<br>(c) 이를 이용하여 (Hence) <span class=\"chem\">∫_0^{pi/3} cos^3 theta d theta</span>의 정확한 값을 구하시오. [3 marks]",
      hints: [
        // EN: For (a), apply De Moivre with <span class="chem">n</span> and with <span class="chem">-n</span>; the sine terms cancel.
        "(a)에서는 <span class=\"chem\">n</span>과 <span class=\"chem\">-n</span> 각각에 드 무아브르 정리를 적용하세요. 사인 항은 서로 소거돼요.",
        // EN: For (b), <span class="chem">z + z^{-1} = 2 cos theta</span>, so the left side is <span class="chem">8 cos^3 theta</span>. Pair the terms of the expansion symmetrically.
        "(b)에서는 <span class=\"chem\">z + z^{-1} = 2 cos theta</span>이므로 좌변은 <span class=\"chem\">8 cos^3 theta</span>예요. 전개식의 항을 대칭적으로 짝지으세요.",
        // EN: For (c), <span class="chem">int cos(3 theta) d theta = (1/3) sin(3 theta)</span>.
        "(c)에서는 <span class=\"chem\">int cos(3 theta) d theta = (1/3) sin(3 theta)</span>이에요.",
      ],
      // EN: <p>(a) By De Moivre, <span class="chem">z^n + z^{-n} = (cos(n theta) + i sin(n theta)) + (cos(n theta) - i sin(n theta)) = 2 cos(n theta)</span>.<br>(b) <span class="chem">(2 cos theta)^3 = (z + z^{-1})^3 = (z^3 + z^{-3}) + 3(z + z^{-1}) = 2 cos(3 theta) + 6 cos theta</span>. Divide by 8.<br>(c) <span class="chem">∫_0^{pi/3} ((1/4) cos(3 theta) + (3/4) cos theta) d theta = [(1/12) sin(3 theta) + (3/4) sin theta]_0^{pi/3} = 0 + (3/4)(sqrt(3)/2) = 3 sqrt(3)/8</span>.</p>
      solution: "<p>(a) 드 무아브르 정리에 의해 <span class=\"chem\">z^n + z^{-n} = (cos(n theta) + i sin(n theta)) + (cos(n theta) - i sin(n theta)) = 2 cos(n theta)</span>.<br>(b) <span class=\"chem\">(2 cos theta)^3 = (z + z^{-1})^3 = (z^3 + z^{-3}) + 3(z + z^{-1}) = 2 cos(3 theta) + 6 cos theta</span>. 양변을 8로 나눠요.<br>(c) <span class=\"chem\">∫_0^{pi/3} ((1/4) cos(3 theta) + (3/4) cos theta) d theta = [(1/12) sin(3 theta) + (3/4) sin theta]_0^{pi/3} = 0 + (3/4)(sqrt(3)/2) = 3 sqrt(3)/8</span>.</p>",
      // EN: <p>(a) <span class="chem">z^n = cos(n theta) + i sin(n theta)</span> and <span class="chem">z^{-n} = cos(n theta) - i sin(n theta)</span>; adding gives <span class="chem">2 cos(n theta)</span>.<br>(b) <span class="chem">8 cos^3 theta = (z^3 + z^{-3}) + 3(z + z^{-1}) = 2 cos(3 theta) + 6 cos theta</span>.<br>(c) <span class="chem">∫_0^{pi/3} cos^3 theta d theta = [(1/12) sin(3 theta) + (3/4) sin theta]_0^{pi/3} = 3 sqrt(3)/8</span>.</p>
      answer: "<p>(a) <span class=\"chem\">z^n = cos(n theta) + i sin(n theta)</span>이고 <span class=\"chem\">z^{-n} = cos(n theta) - i sin(n theta)</span>이므로, 더하면 <span class=\"chem\">2 cos(n theta)</span>이다.<br>(b) <span class=\"chem\">8 cos^3 theta = (z^3 + z^{-3}) + 3(z + z^{-1}) = 2 cos(3 theta) + 6 cos theta</span>.<br>(c) <span class=\"chem\">∫_0^{pi/3} cos^3 theta d theta = [(1/12) sin(3 theta) + (3/4) sin theta]_0^{pi/3} = 3 sqrt(3)/8</span>.</p>",
      markscheme: [
        // EN: M1: Uses De Moivre for z<sup>n</sup> and z<sup>−n</sup>: cos nθ ± i sin nθ (using cos(−nθ) = cos nθ, sin(−nθ) = −sin nθ).
        "M1: z<sup>n</sup>과 z<sup>−n</sup>에 드 무아브르 정리를 적용함: cos nθ ± i sin nθ (cos(−nθ) = cos nθ, sin(−nθ) = −sin nθ 이용).",
        // EN: A1: Adds to get 2cos nθ (AG).
        "A1: 더하여 2cos nθ를 얻음 (AG).",
        // EN: M1: (z + z<sup>−1</sup>)³ = z³ + 3z + 3z<sup>−1</sup> + z<sup>−3</sup>.
        "M1: (z + z<sup>−1</sup>)³ = z³ + 3z + 3z<sup>−1</sup> + z<sup>−3</sup>.",
        // EN: M1: Groups as (z³ + z<sup>−3</sup>) + 3(z + z<sup>−1</sup>) and uses (a): 8cos³θ = 2cos 3θ + 6cos θ.
        "M1: (z³ + z<sup>−3</sup>) + 3(z + z<sup>−1</sup>)로 묶고 (a)를 이용함: 8cos³θ = 2cos 3θ + 6cos θ.",
        // EN: A1: Divides by 8 to reach the given identity (AG).
        "A1: 8로 나누어 주어진 항등식을 얻음 (AG).",
        // EN: M1: Integrates: (1/12) sin 3θ + (3/4) sin θ.
        "M1: 적분함: (1/12) sin 3θ + (3/4) sin θ.",
        // EN: A1: Substitutes limits: (1/12) sin π + (3/4) sin(π/3) − 0.
        "A1: 위끝과 아래끝을 대입함: (1/12) sin π + (3/4) sin(π/3) − 0.",
        // EN: A1: 3√3/8.
        "A1: 3√3/8.",
      ],
    },

    // ── t1-4-q033 · numeric · challenge · AHL · AHL 1.12 · 5 marks
    "t1-4-q033": {
      // EN: A student needs the sum <span class="chem">S = i + 2i^2 + 3i^3 + 4i^4 + … + 40i^{40}</span>, in which the <span class="chem">k</span>-th term is <span class="chem">k i^k</span>. Find the exact value of <span class="chem">|S|</span>.
      stem: "한 학생이 합 <span class=\"chem\">S = i + 2i^2 + 3i^3 + 4i^4 + … + 40i^{40}</span>을 구해야 한다. 여기서 제<span class=\"chem\">k</span>항은 <span class=\"chem\">k i^k</span>이다. <span class=\"chem\">|S|</span>의 정확한 값을 구하시오 (Find).",
      hints: [
        // EN: Decode: this is not a geometric series, because the coefficients change. But the powers of <span class="chem">i</span> repeat every 4 terms, so group the 40 terms into 10 blocks of 4 and find what each block adds up to.
        "해석: 계수가 변하므로 이것은 등비급수가 아니에요. 하지만 <span class=\"chem\">i</span>의 거듭제곱은 4개 항마다 반복되므로, 40개 항을 4개씩 10묶음으로 나누고 각 묶음의 합을 구하세요.",
        // EN: The block starting at <span class="chem">k = 4m + 1</span> is <span class="chem">(4m + 1)i - (4m + 2) - (4m + 3)i + (4m + 4)</span>.
        "<span class=\"chem\">k = 4m + 1</span>에서 시작하는 묶음은 <span class=\"chem\">(4m + 1)i - (4m + 2) - (4m + 3)i + (4m + 4)</span>예요.",
        // EN: Each block simplifies to <span class="chem">2 - 2i</span>, whatever <span class="chem">m</span> is.
        "<span class=\"chem\">m</span>가 무엇이든 각 묶음은 <span class=\"chem\">2 - 2i</span>로 간단해져요.",
      ],
      // EN: <p><strong>Decode.</strong> The period-4 cycle <span class="chem">i, -1, -i, 1</span> lets you group the terms.<br>For <span class="chem">m = 0, 1, …, 9</span>, the block <span class="chem">(4m + 1)i + (4m + 2)i^2 + (4m + 3)i^3 + (4m + 4)i^4 = (4m + 1)i - (4m + 2) - (4m + 3)i + (4m + 4) = 2 - 2i</span>. Ten blocks give <span class="chem">S = 20 - 20i</span>, so <span class="chem">|S| = sqrt(400 + 400) = 20 sqrt(2)</span>.</p>
      solution: "<p><strong>해석.</strong> 주기가 4인 반복 <span class=\"chem\">i, -1, -i, 1</span>을 이용하면 항을 묶을 수 있어요.<br><span class=\"chem\">m = 0, 1, …, 9</span>에 대하여 묶음 <span class=\"chem\">(4m + 1)i + (4m + 2)i^2 + (4m + 3)i^3 + (4m + 4)i^4 = (4m + 1)i - (4m + 2) - (4m + 3)i + (4m + 4) = 2 - 2i</span>이에요. 10묶음을 더하면 <span class=\"chem\">S = 20 - 20i</span>이므로 <span class=\"chem\">|S| = sqrt(400 + 400) = 20 sqrt(2)</span>예요.</p>",
    },

    // ── t1-4-q034 · numeric · challenge · AHL · AHL 1.14 · 5 marks
    "t1-4-q034": {
      // EN: Let <span class="chem">omega = e^{2 pi i / 5}</span>. Find the value of <span class="chem">(2 - omega)(2 - omega^2)(2 - omega^3)(2 - omega^4)</span>.
      stem: "<span class=\"chem\">omega = e^{2 pi i / 5}</span>이라 하자. <span class=\"chem\">(2 - omega)(2 - omega^2)(2 - omega^3)(2 - omega^4)</span>의 값을 구하시오 (Find).",
      hints: [
        // EN: Decode: do not multiply out four complex brackets. The numbers <span class="chem">omega, omega^2, omega^3, omega^4</span> are the roots of a known polynomial, so the product is that polynomial evaluated at <span class="chem">z = 2</span>.
        "해석: 네 개의 복소수 괄호를 직접 곱하지 마세요. <span class=\"chem\">omega, omega^2, omega^3, omega^4</span>은 알려진 다항식의 근이므로, 이 곱은 그 다항식에 <span class=\"chem\">z = 2</span>를 대입한 값이에요.",
        // EN: The fifth roots of unity are <span class="chem">1, omega, …, omega^4</span>, so <span class="chem">z^5 - 1 = (z - 1)(z - omega)(z - omega^2)(z - omega^3)(z - omega^4)</span>.
        "1의 5제곱근은 <span class=\"chem\">1, omega, …, omega^4</span>이므로 <span class=\"chem\">z^5 - 1 = (z - 1)(z - omega)(z - omega^2)(z - omega^3)(z - omega^4)</span>예요.",
        // EN: Divide by <span class="chem">z - 1</span>: <span class="chem">(z - omega)(z - omega^2)(z - omega^3)(z - omega^4) = z^4 + z^3 + z^2 + z + 1</span>. Now put <span class="chem">z = 2</span>.
        "<span class=\"chem\">z - 1</span>로 나누면: <span class=\"chem\">(z - omega)(z - omega^2)(z - omega^3)(z - omega^4) = z^4 + z^3 + z^2 + z + 1</span>. 이제 <span class=\"chem\">z = 2</span>을 대입하세요.",
      ],
      // EN: <p><strong>Decode.</strong> A product of the form <span class="chem">(a - root)</span> over all roots is the factorised polynomial evaluated at <span class="chem">a</span>.<br><span class="chem">z^5 - 1 = (z - 1)(z - omega)(z - omega^2)(z - omega^3)(z - omega^4)</span>, so <span class="chem">(z - omega)(z - omega^2)(z - omega^3)(z - omega^4) = (z^5 - 1)/(z - 1) = z^4 + z^3 + z^2 + z + 1</span>. At <span class="chem">z = 2</span>: <span class="chem">16 + 8 + 4 + 2 + 1 = 31</span>.</p>
      solution: "<p><strong>해석.</strong> 모든 근에 대한 <span class=\"chem\">(a - root)</span> 꼴의 곱은 인수분해된 다항식에 <span class=\"chem\">a</span>를 대입한 값이에요.<br><span class=\"chem\">z^5 - 1 = (z - 1)(z - omega)(z - omega^2)(z - omega^3)(z - omega^4)</span>이므로 <span class=\"chem\">(z - omega)(z - omega^2)(z - omega^3)(z - omega^4) = (z^5 - 1)/(z - 1) = z^4 + z^3 + z^2 + z + 1</span>. <span class=\"chem\">z = 2</span>일 때: <span class=\"chem\">16 + 8 + 4 + 2 + 1 = 31</span>.</p>",
    },

    // ── t1-4-q035 · short · exam · AHL · AHL 1.13, 1.14 · 6 marks
    "t1-4-q035": {
      // EN: Let <span class="chem">z = 2 cis(pi/5)</span> and <span class="chem">w = cis(3pi/10)</span>.<br>(a) Find <span class="chem">zw</span> in the form <span class="chem">a + bi</span>. [2 marks]<br>(b) Find the value of <span class="chem">z^3 / w^2</span>. [2 marks]<br>(c) Find the smallest positive integer <span class="chem">n</span> for which <span class="chem">w^n</span> is a real number. [2 marks]
      stem: "<span class=\"chem\">z = 2 cis(pi/5)</span>, <span class=\"chem\">w = cis(3pi/10)</span>라 하자.<br>(a) <span class=\"chem\">zw</span>을 <span class=\"chem\">a + bi</span> 꼴로 구하시오 (Find). [2 marks]<br>(b) <span class=\"chem\">z^3 / w^2</span>의 값을 구하시오. [2 marks]<br>(c) <span class=\"chem\">w^n</span>이 실수가 되는 가장 작은 양의 정수 <span class=\"chem\">n</span>을 구하시오. [2 marks]",
      hints: [
        // EN: In polar form, multiplication multiplies the moduli and adds the arguments; division divides and subtracts.
        "극형식에서 곱셈은 절댓값을 곱하고 편각을 더하며, 나눗셈은 절댓값을 나누고 편각을 빼요.",
        // EN: For (c), <span class="chem">w^n = cis(3n pi/10)</span> is real when <span class="chem">3n pi/10</span> is a multiple of <span class="chem">pi</span>.
        "(c)에서 <span class=\"chem\">3n pi/10</span>가 <span class=\"chem\">pi</span>의 배수일 때 <span class=\"chem\">w^n = cis(3n pi/10)</span>은 실수예요.",
      ],
      // EN: <p>(a) <span class="chem">zw = 2 cis(pi/5 + 3pi/10) = 2 cis(pi/2) = 2i</span>.<br>(b) <span class="chem">z^3 = 8 cis(3pi/5)</span> and <span class="chem">w^2 = cis(3pi/5)</span>, so <span class="chem">z^3 / w^2 = 8 cis(0) = 8</span>.<br>(c) <span class="chem">w^n = cis(3n pi/10)</span> is real when <span class="chem">3n/10</span> is an integer. Since 3 and 10 have no common factor, <span class="chem">n</span> must be a multiple of 10: the smallest is <span class="chem">n = 10</span>.</p>
      solution: "<p>(a) <span class=\"chem\">zw = 2 cis(pi/5 + 3pi/10) = 2 cis(pi/2) = 2i</span>.<br>(b) <span class=\"chem\">z^3 = 8 cis(3pi/5)</span>이고 <span class=\"chem\">w^2 = cis(3pi/5)</span>이므로 <span class=\"chem\">z^3 / w^2 = 8 cis(0) = 8</span>.<br>(c) <span class=\"chem\">3n/10</span>이 정수일 때 <span class=\"chem\">w^n = cis(3n pi/10)</span>는 실수예요. 3과 10은 공약수가 없으므로 <span class=\"chem\">n</span>은 10의 배수여야 해요: 가장 작은 값은 <span class=\"chem\">n = 10</span>이에요.</p>",
      // EN: <p>(a) <span class="chem">zw = 2 cis(pi/2) = 2i</span>.<br>(b) <span class="chem">z^3 / w^2 = 8 cis(3pi/5 - 3pi/5) = 8</span>.<br>(c) <span class="chem">n = 10</span>.</p>
      answer: "<p>(a) <span class=\"chem\">zw = 2 cis(pi/2) = 2i</span>.<br>(b) <span class=\"chem\">z^3 / w^2 = 8 cis(3pi/5 - 3pi/5) = 8</span>.<br>(c) <span class=\"chem\">n = 10</span>.</p>",
      markscheme: [
        // EN: M1: Multiplies moduli and adds arguments: 2 cis(π/5 + 3π/10).
        "M1: 절댓값을 곱하고 편각을 더함: 2 cis(π/5 + 3π/10).",
        // EN: A1: 2 cis(π/2) = 2i.
        "A1: 2 cis(π/2) = 2i.",
        // EN: M1: Uses De Moivre and division: 2³ cis(3π/5) ÷ cis(3π/5).
        "M1: 드 무아브르 정리와 나눗셈을 이용함: 2³ cis(3π/5) ÷ cis(3π/5).",
        // EN: A1: 8.
        "A1: 8.",
        // EN: M1: Requires sin(3nπ/10) = 0, i.e. 3n/10 ∈ ℤ.
        "M1: sin(3nπ/10) = 0, 즉 3n/10 ∈ ℤ이 필요함.",
        // EN: A1: n = 10.
        "A1: n = 10.",
      ],
    },

    // ── t1-4-q036 · numeric · exam · AHL · AHL 1.12, 1.13 · 4 marks
    "t1-4-q036": {
      // EN: Let <span class="chem">z = ((2.4 - 3.1i)(1.5 + 0.7i)) / (-0.9 + 2.2i)</span>. Find the principal argument <span class="chem">arg(z)</span>, where <span class="chem">-pi &lt; arg(z) &lt;= pi</span>, in radians correct to 3 significant figures.
      stem: "<span class=\"chem\">z = ((2.4 - 3.1i)(1.5 + 0.7i)) / (-0.9 + 2.2i)</span>이라 하자. <span class=\"chem\">-pi &lt; arg(z) &lt;= pi</span>일 때 주편각 <span class=\"chem\">arg(z)</span>를 라디안으로 구하고 (Find), 유효숫자 3자리까지 나타내시오.",
      hints: [
        // EN: Use the GDC in complex mode and radian mode. Evaluate <span class="chem">z</span> first, then use the GDC's <span class="mono">arg</span> (or <span class="mono">angle</span>) function.
        "GDC를 복소수 모드와 라디안 모드로 설정하세요. 먼저 <span class=\"chem\">z</span>을 계산한 다음 GDC의 <span class=\"mono\">arg</span> (또는 <span class=\"mono\">angle</span>) 함수를 이용하세요.",
        // EN: The GDC gives <span class="chem">z ≈ -2.0756 - 1.7736i</span>, which is in Quadrant III, so the principal argument is between <span class="chem">-pi</span> and <span class="chem">-pi/2</span>. A value from <span class="chem">arctan(b/a)</span> alone would be in the wrong quadrant.
        "GDC는 <span class=\"chem\">z ≈ -2.0756 - 1.7736i</span>을 주는데, 이는 제3사분면에 있으므로 주편각은 <span class=\"chem\">-pi</span>와 <span class=\"chem\">-pi/2</span> 사이에 있어요. <span class=\"chem\">arctan(b/a)</span>만으로 구한 값은 잘못된 사분면에 있게 돼요.",
      ],
      // EN: <p>In complex mode, <span class="chem">z ≈ -2.0756 - 1.7736i</span> (Quadrant III). The GDC <span class="mono">arg</span> function gives <span class="chem">arg(z) ≈ -2.43</span> rad. Check: <span class="chem">arctan(1.7736 / 2.0756) ≈ 0.7071</span> is the reference angle, and <span class="chem">-(pi - 0.7071) ≈ -2.43</span>.</p>
      solution: "<p>복소수 모드에서 <span class=\"chem\">z ≈ -2.0756 - 1.7736i</span> (제3사분면)이에요. GDC의 <span class=\"mono\">arg</span> 함수로 <span class=\"chem\">arg(z) ≈ -2.43</span> rad를 얻어요. 확인: <span class=\"chem\">arctan(1.7736 / 2.0756) ≈ 0.7071</span>가 기준각이고 <span class=\"chem\">-(pi - 0.7071) ≈ -2.43</span>예요.</p>",
    },

    // ── t1-4-q037 · numeric · exam · AHL · AHL 1.14 · 4 marks
    "t1-4-q037": {
      // EN: The equation <span class="chem">z^3 + 2z^2 + 3z + 7 = 0</span> has one real root and two non-real roots. Find the modulus of the non-real roots, correct to 3 significant figures.
      stem: "방정식 <span class=\"chem\">z^3 + 2z^2 + 3z + 7 = 0</span>은 실근 하나와 실수가 아닌 근 두 개를 가진다. 실수가 아닌 근의 절댓값을 구하고 (Find), 유효숫자 3자리까지 나타내시오.",
      hints: [
        // EN: Use the polynomial root finder on your GDC (coefficients 1, 2, 3, 7).
        "GDC의 다항식 근 찾기 기능을 이용하세요 (계수 1, 2, 3, 7).",
        // EN: The two non-real roots are conjugates, so they have the same modulus <span class="chem">sqrt(a^2 + b^2)</span>. Check: the product of all three roots is <span class="chem">-7</span>.
        "실수가 아닌 두 근은 서로 켤레이므로 절댓값 <span class=\"chem\">sqrt(a^2 + b^2)</span>이 같아요. 확인: 세 근의 곱은 <span class=\"chem\">-7</span>예요.",
      ],
      // EN: <p>The GDC gives roots <span class="chem">z ≈ -2.1325</span> and <span class="chem">z ≈ 0.066247 +- 1.8106i</span>. The modulus of each non-real root is <span class="chem">sqrt(0.066247^2 + 1.8106^2) ≈ 1.81</span>. (Check: <span class="chem">(-2.1325)|w|^2 = -7</span> gives <span class="chem">|w| = sqrt(7 / 2.1325) ≈ 1.81</span>.)</p>
      solution: "<p>GDC로 구한 근은 <span class=\"chem\">z ≈ -2.1325</span>과 <span class=\"chem\">z ≈ 0.066247 +- 1.8106i</span>예요. 실수가 아닌 각 근의 절댓값은 <span class=\"chem\">sqrt(0.066247^2 + 1.8106^2) ≈ 1.81</span>이에요. (확인: <span class=\"chem\">(-2.1325)|w|^2 = -7</span>에서 <span class=\"chem\">|w| = sqrt(7 / 2.1325) ≈ 1.81</span>를 얻어요.)</p>",
    },

    // ── t1-4-q038 · numeric · exam · AHL · AHL 1.13, 1.14 · 4 marks
    "t1-4-q038": {
      // EN: Exactly one root of the equation <span class="chem">z^4 - 2z^3 + 5z^2 + z - 3 = 0</span> lies in the first quadrant of the Argand diagram. Find the argument of this root, in radians correct to 3 significant figures.
      stem: "방정식 <span class=\"chem\">z^4 - 2z^3 + 5z^2 + z - 3 = 0</span>의 근 중 정확히 하나가 아르강 평면의 제1사분면에 있다. 이 근의 편각을 라디안으로 구하고 (Find), 유효숫자 3자리까지 나타내시오.",
      hints: [
        // EN: Use the polynomial root finder on your GDC to find all four roots.
        "GDC의 다항식 근 찾기 기능을 이용해 네 근을 모두 구하세요.",
        // EN: The first-quadrant root has positive real and imaginary parts: <span class="chem">z ≈ 0.99275 + 2.1283i</span>. Find its argument.
        "제1사분면의 근은 실수부와 허수부가 모두 양수예요: <span class=\"chem\">z ≈ 0.99275 + 2.1283i</span>. 이 근의 편각을 구하세요.",
      ],
      // EN: <p>The GDC gives the roots <span class="chem">z ≈ 0.74482</span>, <span class="chem">z ≈ -0.73032</span> and <span class="chem">z ≈ 0.99275 +- 2.1283i</span>. The first-quadrant root is <span class="chem">0.99275 + 2.1283i</span>, with argument <span class="chem">arctan(2.1283 / 0.99275) ≈ 1.13</span> rad.</p>
      solution: "<p>GDC로 구한 근은 <span class=\"chem\">z ≈ 0.74482</span>, <span class=\"chem\">z ≈ -0.73032</span>, <span class=\"chem\">z ≈ 0.99275 +- 2.1283i</span>이에요. 제1사분면의 근은 <span class=\"chem\">0.99275 + 2.1283i</span>이고, 편각은 <span class=\"chem\">arctan(2.1283 / 0.99275) ≈ 1.13</span> rad예요.</p>",
    },

    // ── t1-4-q039 · short · exam · AHL · AHL 1.13, 1.14 · 7 marks
    "t1-4-q039": {
      // EN: Consider the equation <span class="chem">z^5 = 3 + 4i</span>.<br>(a) Write <span class="chem">3 + 4i</span> in the form <span class="chem">r e^{i theta}</span>, giving <span class="chem">theta</span> correct to 4 significant figures. [2 marks]<br>(b) Find the five solutions in the form <span class="chem">r e^{i theta}</span>, where <span class="chem">-pi &lt; theta &lt;= pi</span>. Give <span class="chem">r</span> exactly and each <span class="chem">theta</span> correct to 3 significant figures. [3 marks]<br>(c) The five solutions are the vertices of a regular pentagon. Find the area of the pentagon, correct to 3 significant figures. [2 marks]
      stem: "방정식 <span class=\"chem\">z^5 = 3 + 4i</span>을 생각하자.<br>(a) <span class=\"chem\">3 + 4i</span>를 <span class=\"chem\">r e^{i theta}</span> 꼴로 나타내시오 (Write). 단, <span class=\"chem\">theta</span>는 유효숫자 4자리까지 나타내시오. [2 marks]<br>(b) <span class=\"chem\">-pi &lt; theta &lt;= pi</span>일 때 다섯 해를 <span class=\"chem\">r e^{i theta}</span> 꼴로 구하시오 (Find). <span class=\"chem\">r</span>은 정확한 값으로, 각 <span class=\"chem\">theta</span>는 유효숫자 3자리까지 나타내시오. [3 marks]<br>(c) 다섯 해는 정오각형의 꼭짓점이다. 이 오각형의 넓이를 구하고 (Find), 유효숫자 3자리까지 나타내시오. [2 marks]",
      hints: [
        // EN: For (b), the general argument of <span class="chem">3 + 4i</span> is <span class="chem">0.9273 + 2 pi k</span>; divide by 5 and pick five values of <span class="chem">k</span> that land in <span class="chem">(-pi, pi]</span>.
        "(b)에서 <span class=\"chem\">3 + 4i</span>의 일반편각은 <span class=\"chem\">0.9273 + 2 pi k</span>예요. 이를 5로 나누고, <span class=\"chem\">(-pi, pi]</span> 안에 들어가는 <span class=\"chem\">k</span>의 값 다섯 개를 고르세요.",
        // EN: For (c), split the pentagon into 5 congruent triangles at the origin, each with two sides <span class="chem">r = 5^{1/5}</span> and angle <span class="chem">2pi/5</span> between them.
        "(c)에서는 오각형을 원점에서 합동인 삼각형 5개로 나누세요. 각 삼각형은 두 변이 <span class=\"chem\">r = 5^{1/5}</span>이고 그 끼인각이 <span class=\"chem\">2pi/5</span>예요.",
      ],
      // EN: <p>(a) <span class="chem">|3 + 4i| = 5</span> and <span class="chem">arg = arctan(4/3) ≈ 0.9273</span> (Quadrant I), so <span class="chem">3 + 4i = 5 e^{0.9273 i}</span>.<br>(b) <span class="chem">z = 5^{1/5} e^{i(0.9273 + 2 pi k)/5}</span>. For <span class="chem">k = 0, 1, 2, -1, -2</span>: <span class="chem">theta ≈ 0.185, 1.44, 2.70, -1.07, -2.33</span>.<br>(c) <span class="chem">r^2 = 5^{2/5} ≈ 1.9037</span>. Area <span class="chem">= 5 × (1/2)(1.9037) sin(2pi/5) ≈ 4.53</span>.</p>
      solution: "<p>(a) <span class=\"chem\">|3 + 4i| = 5</span>이고 <span class=\"chem\">arg = arctan(4/3) ≈ 0.9273</span> (제1사분면)이므로 <span class=\"chem\">3 + 4i = 5 e^{0.9273 i}</span>.<br>(b) <span class=\"chem\">z = 5^{1/5} e^{i(0.9273 + 2 pi k)/5}</span>. <span class=\"chem\">k = 0, 1, 2, -1, -2</span>일 때: <span class=\"chem\">theta ≈ 0.185, 1.44, 2.70, -1.07, -2.33</span>.<br>(c) <span class=\"chem\">r^2 = 5^{2/5} ≈ 1.9037</span>. 넓이 <span class=\"chem\">= 5 × (1/2)(1.9037) sin(2pi/5) ≈ 4.53</span>.</p>",
      // EN: <p>(a) <span class="chem">3 + 4i = 5 e^{0.9273 i}</span>.<br>(b) <span class="chem">r = 5^{1/5}</span>; <span class="chem">theta ≈ 0.185, 1.44, 2.70, -1.07, -2.33</span>.<br>(c) Area <span class="chem">= (5/2)(5^{2/5}) sin(2pi/5) ≈ 4.53</span>.</p>
      answer: "<p>(a) <span class=\"chem\">3 + 4i = 5 e^{0.9273 i}</span>.<br>(b) <span class=\"chem\">r = 5^{1/5}</span>; <span class=\"chem\">theta ≈ 0.185, 1.44, 2.70, -1.07, -2.33</span>.<br>(c) 넓이 <span class=\"chem\">= (5/2)(5^{2/5}) sin(2pi/5) ≈ 4.53</span>.</p>",
      markscheme: [
        // EN: A1: Modulus 5.
        "A1: 절댓값 5.",
        // EN: A1: Argument arctan(4/3) ≈ 0.9273.
        "A1: 편각 arctan(4/3) ≈ 0.9273.",
        // EN: M1: Uses θ = (0.9273 + 2πk)/5 with modulus 5<sup>1/5</sup>.
        "M1: θ = (0.9273 + 2πk)/5와 절댓값 5<sup>1/5</sup>을 이용함.",
        // EN: A1: Two or three correct arguments from 0.185, 1.44, 2.70, −1.07, −2.33.
        "A1: 0.185, 1.44, 2.70, −1.07, −2.33 중 두세 개의 편각이 맞음.",
        // EN: A1: All five correct, each in (−π, π].
        "A1: 다섯 개 모두 맞고, 각각 (−π, π]에 있음.",
        // EN: M1: Area = 5 × ½ r² sin(2π/5) with r = 5<sup>1/5</sup>.
        "M1: r = 5<sup>1/5</sup>일 때 넓이 = 5 × ½ r² sin(2π/5).",
        // EN: A1: Area ≈ 4.53.
        "A1: 넓이 ≈ 4.53.",
      ],
    },

    // ── t1-4-q040 · numeric · challenge · AHL · AHL 1.13 · 5 marks
    "t1-4-q040": {
      // EN: The tip of a robotic arm is modelled on an Argand diagram, with the arm's pivot at the origin and distances in metres. At first the tip is at the point <span class="chem">3 + 1.5i</span>. The arm then turns anticlockwise about the pivot through <span class="chem">0.8</span> radians, and at the same time its length increases by 20%. Find the new horizontal coordinate (the real part) of the tip, in metres correct to 3 significant figures.
      stem: "로봇 팔의 끝을 아르강 평면 위에 모형화한다. 팔의 회전축은 원점에 있고 거리의 단위는 미터이다. 처음에 끝은 점 <span class=\"chem\">3 + 1.5i</span>에 있다. 그 후 팔은 회전축을 중심으로 시계 반대 방향으로 <span class=\"chem\">0.8</span> 라디안만큼 회전하고, 동시에 길이가 20% 늘어난다. 팔 끝의 새로운 가로 좌표(실수부)를 미터 단위로 구하고 (Find), 유효숫자 3자리까지 나타내시오.",
      hints: [
        // EN: Decode: turning about the origin through an angle <span class="chem">alpha</span> and stretching by a factor <span class="chem">k</span> is multiplication by the complex number <span class="chem">k e^{i alpha}</span>. Here <span class="chem">k = 1.2</span> (a 20% increase) and <span class="chem">alpha = 0.8</span>.
        "해석: 원점을 중심으로 각 <span class=\"chem\">alpha</span>만큼 회전하고 <span class=\"chem\">k</span>배로 늘이는 것은 복소수 <span class=\"chem\">k e^{i alpha}</span>을 곱하는 것이에요. 여기서 <span class=\"chem\">k = 1.2</span> (20% 증가)이고 <span class=\"chem\">alpha = 0.8</span>예요.",
        // EN: The new tip is <span class="chem">1.2 e^{0.8 i}(3 + 1.5i)</span>. Evaluate it on the GDC in radian mode.
        "새로운 끝의 위치는 <span class=\"chem\">1.2 e^{0.8 i}(3 + 1.5i)</span>이에요. GDC의 라디안 모드에서 계산하세요.",
        // EN: Only the real part is asked for. <span class="chem">1.2 e^{0.8 i}(3 + 1.5i) ≈ 1.217 + 3.837i</span>.
        "실수부만 구하면 돼요. <span class=\"chem\">1.2 e^{0.8 i}(3 + 1.5i) ≈ 1.217 + 3.837i</span>.",
      ],
      // EN: <p><strong>Decode.</strong> A rotation about the origin with a scale factor is multiplication by <span class="chem">r e^{i alpha}</span>.<br>New position <span class="chem">= 1.2 e^{0.8 i}(3 + 1.5i) = 1.2(cos 0.8 + i sin 0.8)(3 + 1.5i) ≈ 1.2169 + 3.8366i</span>. The horizontal coordinate is <span class="chem">≈ 1.22</span> m.</p>
      solution: "<p><strong>해석.</strong> 원점을 중심으로 한 회전과 확대는 <span class=\"chem\">r e^{i alpha}</span>을 곱하는 것이에요.<br>새 위치 <span class=\"chem\">= 1.2 e^{0.8 i}(3 + 1.5i) = 1.2(cos 0.8 + i sin 0.8)(3 + 1.5i) ≈ 1.2169 + 3.8366i</span>. 가로 좌표는 <span class=\"chem\">≈ 1.22</span> m예요.</p>",
    },

    // ── t1-4-q041 · numeric · challenge · AHL · AHL 1.12, 1.13 · 6 marks
    "t1-4-q041": {
      // EN: A point <span class="chem">Z</span> on an Argand diagram represents the complex number <span class="chem">z</span>. It moves so that its distance from the point representing <span class="chem">5 + 2i</span> is always 3, that is <span class="chem">|z - (5 + 2i)| = 3</span>. Find the largest possible value of <span class="chem">arg(z)</span>, in radians correct to 3 significant figures.
      stem: "아르강 평면 위의 점 <span class=\"chem\">Z</span>은 복소수 <span class=\"chem\">z</span>를 나타낸다. 이 점은 <span class=\"chem\">5 + 2i</span>을 나타내는 점으로부터의 거리가 항상 3, 즉 <span class=\"chem\">|z - (5 + 2i)| = 3</span>가 되도록 움직인다. <span class=\"chem\">arg(z)</span>의 가능한 최댓값을 라디안으로 구하고 (Find), 유효숫자 3자리까지 나타내시오.",
      hints: [
        // EN: Decode: <span class="chem">|z - (5 + 2i)| = 3</span> says <span class="chem">Z</span> lies on a circle, centre <span class="chem">C(5, 2)</span>, radius 3. The argument is the angle of the line <span class="chem">OZ</span>, so the largest argument occurs where a line from <span class="chem">O</span> just touches the circle (a tangent).
        "해석: <span class=\"chem\">|z - (5 + 2i)| = 3</span>은 <span class=\"chem\">Z</span>가 중심이 <span class=\"chem\">C(5, 2)</span>이고 반지름이 3인 원 위에 있다는 뜻이에요. 편각은 직선 <span class=\"chem\">OZ</span>의 각이므로, 편각이 최대가 되는 것은 <span class=\"chem\">O</span>에서 그은 직선이 원에 딱 닿을 때(접선)예요.",
        // EN: The tangent meets the radius at a right angle. In the right-angled triangle <span class="chem">O</span>, <span class="chem">C</span>, tangent point, the hypotenuse is <span class="chem">OC = sqrt(29)</span> and the side opposite the angle at <span class="chem">O</span> is 3.
        "접선은 반지름과 직각으로 만나요. <span class=\"chem\">O</span>, <span class=\"chem\">C</span>, 접점으로 이루어진 직각삼각형에서 빗변은 <span class=\"chem\">OC = sqrt(29)</span>이고 <span class=\"chem\">O</span>에서의 각의 대변은 3이에요.",
        // EN: Largest argument <span class="chem">= arg(5 + 2i) + arcsin(3 / sqrt(29))</span>.
        "편각의 최댓값 <span class=\"chem\">= arg(5 + 2i) + arcsin(3 / sqrt(29))</span>.",
      ],
      // EN: <p><strong>Decode.</strong> The locus is a circle; maximising the argument means finding the upper tangent from the origin.<br><span class="chem">OC = |5 + 2i| = sqrt(29) &gt; 3</span>, so <span class="chem">O</span> is outside the circle. The angle between <span class="chem">OC</span> and the tangent is <span class="chem">arcsin(3 / sqrt(29)) ≈ 0.59087</span>, and <span class="chem">arg(5 + 2i) = arctan(2/5) ≈ 0.38051</span>. Largest <span class="chem">arg(z) ≈ 0.38051 + 0.59087 ≈ 0.971</span> rad.</p>
      solution: "<p><strong>해석.</strong> 자취는 원이에요. 편각을 최대로 한다는 것은 원점에서 그은 위쪽 접선을 찾는 것이에요.<br><span class=\"chem\">OC = |5 + 2i| = sqrt(29) &gt; 3</span>이므로 <span class=\"chem\">O</span>는 원 밖에 있어요. <span class=\"chem\">OC</span>과 접선이 이루는 각은 <span class=\"chem\">arcsin(3 / sqrt(29)) ≈ 0.59087</span>이고 <span class=\"chem\">arg(5 + 2i) = arctan(2/5) ≈ 0.38051</span>예요. 최대인 <span class=\"chem\">arg(z) ≈ 0.38051 + 0.59087 ≈ 0.971</span> rad예요.</p>",
    },

    // ── t1-4-q042 · numeric · exam · AHL · AHL 1.14 · 4 marks
    "t1-4-q042": {
      // EN: Let <span class="chem">w = 0.9 + 0.6i</span>. Find the least positive integer <span class="chem">n</span> for which <span class="chem">|w^n| &gt; 100</span>.
      stem: "<span class=\"chem\">w = 0.9 + 0.6i</span>이라 하자. <span class=\"chem\">|w^n| &gt; 100</span>을 만족하는 가장 작은 양의 정수 <span class=\"chem\">n</span>를 구하시오 (Find).",
      hints: [
        // EN: Decode: by De Moivre, <span class="chem">|w^n| = |w|^n</span>, so this is an exponential inequality in <span class="chem">n</span>, and <span class="chem">n</span> must be a whole number.
        "해석: 드 무아브르 정리에 의해 <span class=\"chem\">|w^n| = |w|^n</span>이므로, 이것은 <span class=\"chem\">n</span>에 대한 지수부등식이고 <span class=\"chem\">n</span>은 정수여야 해요.",
        // EN: <span class="chem">|w| = sqrt(0.81 + 0.36) = sqrt(1.17) ≈ 1.0817</span>. Solve <span class="chem">1.0817^n &gt; 100</span> with logarithms or a GDC table.
        "<span class=\"chem\">|w| = sqrt(0.81 + 0.36) = sqrt(1.17) ≈ 1.0817</span>. 로그나 GDC 표를 이용해 <span class=\"chem\">1.0817^n &gt; 100</span>를 푸세요.",
      ],
      // EN: <p><span class="chem">|w^n| = |w|^n = (sqrt(1.17))^n</span>. Solve <span class="chem">(sqrt(1.17))^n &gt; 100</span>: <span class="chem">n &gt; ln(100) / ln(sqrt(1.17)) ≈ 58.66</span>. Check: <span class="chem">|w|^{58} ≈ 94.9 &lt; 100</span> and <span class="chem">|w|^{59} ≈ 102.7 &gt; 100</span>. So <span class="chem">n = 59</span>.</p>
      solution: "<p><span class=\"chem\">|w^n| = |w|^n = (sqrt(1.17))^n</span>. <span class=\"chem\">(sqrt(1.17))^n &gt; 100</span>를 풀면: <span class=\"chem\">n &gt; ln(100) / ln(sqrt(1.17)) ≈ 58.66</span>. 확인: <span class=\"chem\">|w|^{58} ≈ 94.9 &lt; 100</span>이고 <span class=\"chem\">|w|^{59} ≈ 102.7 &gt; 100</span>. 따라서 <span class=\"chem\">n = 59</span>.</p>",
    },

    // ── t1-4-q043 · short · exam · AHL · AHL 1.12, 1.14 · 7 marks
    "t1-4-q043": {
      // EN: Consider the equation <span class="chem">2z^3 - 5z^2 + 9z - 7 = 0</span>.<br>(a) Find all three roots, giving answers correct to 3 significant figures. [3 marks]<br>(b) Explain why the two non-real roots must be complex conjugates of each other. [1 mark]<br>(c) The three roots are the vertices of a triangle on the Argand diagram. Find the area of the triangle, correct to 3 significant figures. [3 marks]
      stem: "방정식 <span class=\"chem\">2z^3 - 5z^2 + 9z - 7 = 0</span>을 생각하자.<br>(a) 세 근을 모두 구하고 (Find), 유효숫자 3자리까지 나타내시오. [3 marks]<br>(b) 실수가 아닌 두 근이 반드시 서로 켤레복소수여야 하는 이유를 설명하시오 (Explain). [1 mark]<br>(c) 세 근은 아르강 평면 위 삼각형의 꼭짓점이다. 이 삼각형의 넓이를 구하고 (Find), 유효숫자 3자리까지 나타내시오. [3 marks]",
      hints: [
        // EN: Use your GDC polynomial solver with coefficients 2, −5, 9, −7.
        "GDC의 다항식 풀이 기능에 계수 2, −5, 9, −7을 넣어 이용하세요.",
        // EN: The two conjugate roots lie on a vertical line on the Argand diagram, so take that side as the base; the height is the horizontal distance from the real root to that line.
        "켤레인 두 근은 아르강 평면 위에서 같은 세로선 위에 있으므로 그 변을 밑변으로 하세요. 높이는 실근에서 그 직선까지의 가로 거리예요.",
      ],
      // EN: <p>(a) The GDC gives <span class="chem">z ≈ 1.1900</span> and <span class="chem">z ≈ 0.65498 +- 1.5850i</span>.<br>(b) The coefficients are real, so if <span class="chem">w</span> is a root, then <span class="chem">w^*</span> is a root.<br>(c) Base <span class="chem">= 2 × 1.5850 = 3.1699</span>, height <span class="chem">= 1.1900 - 0.65498 = 0.53505</span>. Area <span class="chem">= (1/2)(3.1699)(0.53505) ≈ 0.848</span>.</p>
      solution: "<p>(a) GDC로 <span class=\"chem\">z ≈ 1.1900</span>과 <span class=\"chem\">z ≈ 0.65498 +- 1.5850i</span>를 얻어요.<br>(b) 계수가 실수이므로 <span class=\"chem\">w</span>이 근이면 <span class=\"chem\">w^*</span>도 근이에요.<br>(c) 밑변 <span class=\"chem\">= 2 × 1.5850 = 3.1699</span>, 높이 <span class=\"chem\">= 1.1900 - 0.65498 = 0.53505</span>. 넓이 <span class=\"chem\">= (1/2)(3.1699)(0.53505) ≈ 0.848</span>.</p>",
      // EN: <p>(a) <span class="chem">z ≈ 1.19</span> and <span class="chem">z ≈ 0.655 +- 1.58i</span>.<br>(b) The coefficients are all real, so non-real roots occur in conjugate pairs.<br>(c) Area <span class="chem">≈ (1/2)(2 × 1.58496)(1.19003 - 0.65498) ≈ 0.848</span>.</p>
      answer: "<p>(a) <span class=\"chem\">z ≈ 1.19</span>과 <span class=\"chem\">z ≈ 0.655 +- 1.58i</span>.<br>(b) 계수가 모두 실수이므로 실수가 아닌 근은 켤레 쌍으로 나타난다.<br>(c) 넓이 <span class=\"chem\">≈ (1/2)(2 × 1.58496)(1.19003 - 0.65498) ≈ 0.848</span>.</p>",
      markscheme: [
        // EN: A1: Real root z ≈ 1.19.
        "A1: 실근 z ≈ 1.19.",
        // EN: A1: Real part 0.655 of the non-real roots.
        "A1: 실수가 아닌 근의 실수부 0.655.",
        // EN: A1: Imaginary parts ±1.58.
        "A1: 허수부 ±1.58.",
        // EN: R1: The polynomial has real coefficients, so the conjugate of any root is also a root.
        "R1: 다항식의 계수가 실수이므로 임의의 근의 켤레복소수도 근이다.",
        // EN: M1: Uses the vertical side between the conjugate roots as base, length 2 × 1.58496 ≈ 3.1699.
        "M1: 켤레근 사이의 세로 변을 밑변으로 함, 길이 2 × 1.58496 ≈ 3.1699.",
        // EN: M1: Height = horizontal distance from the real root, 1.19003 − 0.65498 ≈ 0.53505.
        "M1: 높이 = 실근으로부터의 가로 거리, 1.19003 − 0.65498 ≈ 0.53505.",
        // EN: A1: Area ≈ 0.848.
        "A1: 넓이 ≈ 0.848.",
      ],
    },

    // ── t1-4-q044 · numeric · challenge · AHL · AHL 1.13, 1.14 · 6 marks
    "t1-4-q044": {
      // EN: A robot starts at a point <span class="chem">O</span> and moves 1 m due east. It then turns <span class="chem">40°</span> anticlockwise and moves 0.9 m. It turns another <span class="chem">40°</span> anticlockwise and moves 0.81 m, and it continues in this way for ever: each move is 90% as long as the one before and points a further <span class="chem">40°</span> anticlockwise. By representing each move as a complex number, find the distance from <span class="chem">O</span> of the point the robot approaches, in metres correct to 3 significant figures.
      stem: "로봇이 점 <span class=\"chem\">O</span>에서 출발해 정동쪽으로 1 m 이동한다. 그다음 시계 반대 방향으로 <span class=\"chem\">40°</span> 돌아 0.9 m 이동한다. 다시 시계 반대 방향으로 <span class=\"chem\">40°</span> 돌아 0.81 m 이동하고, 이런 식으로 끝없이 계속한다: 각 이동 거리는 직전 이동의 90%이고, 방향은 시계 반대 방향으로 <span class=\"chem\">40°</span>씩 더 돌아간다. 각 이동을 복소수로 나타내어, 로봇이 가까워지는 점과 <span class=\"chem\">O</span> 사이의 거리를 미터 단위로 구하고 (find), 유효숫자 3자리까지 나타내시오.",
      hints: [
        // EN: Decode: each move is the previous move multiplied by <span class="chem">w = 0.9 e^{i(2pi/9)}</span> (shrink by 0.9, turn by <span class="chem">40° = 2pi/9</span>). The final position is the sum of all the moves: an infinite geometric series with complex ratio <span class="chem">w</span>.
        "해석: 각 이동은 직전 이동에 <span class=\"chem\">w = 0.9 e^{i(2pi/9)}</span>을 곱한 것이에요 (0.9배로 줄이고 <span class=\"chem\">40° = 2pi/9</span> 회전). 최종 위치는 모든 이동의 합, 즉 복소수 공비 <span class=\"chem\">w</span>을 갖는 무한등비급수예요.",
        // EN: The series <span class="chem">1 + w + w^2 + …</span> converges because <span class="chem">|w| = 0.9 &lt; 1</span>, and its sum is <span class="chem">1 / (1 - w)</span>.
        "<span class=\"chem\">|w| = 0.9 &lt; 1</span>이므로 급수 <span class=\"chem\">1 + w + w^2 + …</span>은 수렴하고, 그 합은 <span class=\"chem\">1 / (1 - w)</span>이에요.",
        // EN: The distance asked for is the modulus <span class="chem">|1 / (1 - w)|</span>. Use radians (or degrees consistently) on the GDC.
        "구하는 거리는 절댓값 <span class=\"chem\">|1 / (1 - w)|</span>이에요. GDC에서는 라디안(또는 일관되게 도)을 사용하세요.",
      ],
      // EN: <p><strong>Decode.</strong> A sequence of moves, each a fixed rotation and scaling of the last, is a geometric series with a complex common ratio.<br>Let <span class="chem">w = 0.9 e^{i 2pi/9}</span>. The position after infinitely many moves is <span class="chem">S_infty = 1 + w + w^2 + … = 1 / (1 - w)</span>, valid as <span class="chem">|w| = 0.9 &lt; 1</span>. On the GDC, <span class="chem">1/(1 - w) ≈ 0.72036 + 1.3419i</span>, so the distance from <span class="chem">O</span> is <span class="chem">|S_inf| ≈ 1.52</span> m.</p>
      solution: "<p><strong>해석.</strong> 각 이동이 직전 이동을 일정하게 회전·확대(축소)한 이동들의 나열은 복소수 공비를 갖는 등비급수예요.<br><span class=\"chem\">w = 0.9 e^{i 2pi/9}</span>이라 해요. 무한히 이동한 후의 위치는 <span class=\"chem\">S_infty = 1 + w + w^2 + … = 1 / (1 - w)</span>이고, <span class=\"chem\">|w| = 0.9 &lt; 1</span>이므로 성립해요. GDC에서 <span class=\"chem\">1/(1 - w) ≈ 0.72036 + 1.3419i</span>이므로 <span class=\"chem\">O</span>로부터의 거리는 <span class=\"chem\">|S_inf| ≈ 1.52</span> m예요.</p>",
    },

    // ── t1-4-q045 · numeric · exam · AHL · AHL 1.13 · 4 marks
    "t1-4-q045": {
      // EN: Three horizontal forces act on a floating buoy. Measured in newtons and drawn on an Argand diagram, they are <span class="chem">F_1 = 10 e^{0.4 i}</span>, <span class="chem">F_2 = 20 e^{1.3 i}</span> and <span class="chem">F_3 = 30 e^{-0.7 i}</span>. Find the magnitude of the resultant force <span class="chem">F_1 + F_2 + F_3</span>, in newtons correct to 3 significant figures.
      stem: "물에 뜬 부표에 세 개의 수평 방향 힘이 작용한다. 뉴턴 단위로 측정해 아르강 평면 위에 나타내면 이 힘들은 <span class=\"chem\">F_1 = 10 e^{0.4 i}</span>, <span class=\"chem\">F_2 = 20 e^{1.3 i}</span>, <span class=\"chem\">F_3 = 30 e^{-0.7 i}</span>이다. 합력 <span class=\"chem\">F_1 + F_2 + F_3</span>의 크기를 뉴턴 단위로 구하고 (Find), 유효숫자 3자리까지 나타내시오.",
      hints: [
        // EN: Decode: complex numbers add like vectors, so the resultant force is the sum of the three numbers, and its magnitude is the modulus of the sum. You cannot add the moduli 10, 20 and 30.
        "해석: 복소수는 벡터처럼 더해지므로 합력은 세 수의 합이고, 그 크기는 합의 절댓값이에요. 절댓값 10, 20, 30을 그냥 더할 수는 없어요.",
        // EN: Convert each force to Cartesian form (radian mode), add the real parts and the imaginary parts, then take the modulus.
        "각 힘을 직교 형식으로 바꾸고 (라디안 모드), 실수부끼리와 허수부끼리 더한 다음 절댓값을 구하세요.",
      ],
      // EN: <p><span class="chem">F_1 ≈ 9.2106 + 3.8942i</span>, <span class="chem">F_2 ≈ 5.3499 + 19.271i</span>, <span class="chem">F_3 ≈ 22.945 - 19.327i</span>. Sum <span class="chem">≈ 37.506 + 3.8388i</span>, so the magnitude is <span class="chem">sqrt(37.506^2 + 3.8388^2) ≈ 37.7</span> N.</p>
      solution: "<p><span class=\"chem\">F_1 ≈ 9.2106 + 3.8942i</span>, <span class=\"chem\">F_2 ≈ 5.3499 + 19.271i</span>, <span class=\"chem\">F_3 ≈ 22.945 - 19.327i</span>. 합은 <span class=\"chem\">≈ 37.506 + 3.8388i</span>이므로 크기는 <span class=\"chem\">sqrt(37.506^2 + 3.8388^2) ≈ 37.7</span> N이에요.</p>",
    },

    // ── t1-4-q046 · short · challenge · AHL · AHL 1.12, 1.13 · 8 marks
    "t1-4-q046": {
      // EN: In alternating-current circuits, engineers describe each component by a complex <em>impedance</em>, measured in ohms. When two components with impedances <span class="chem">Z_1</span> and <span class="chem">Z_2</span> are connected in parallel, the total impedance <span class="chem">Z</span> satisfies <span class="chem">1/Z = 1/Z_1 + 1/Z_2</span>. Let <span class="chem">Z_1 = 30 + 40i</span> and <span class="chem">Z_2 = 50 - 20i</span>.<br>(a) Show that <span class="chem">Z = (Z_1 Z_2) / (Z_1 + Z_2)</span>. [1 mark]<br>(b) Find <span class="chem">Z</span> in the form <span class="chem">a + bi</span>, with <span class="chem">a</span> and <span class="chem">b</span> correct to 3 significant figures. [3 marks]<br>(c) The <em>phase angle</em> of the circuit is <span class="chem">arg(Z)</span>. Find <span class="chem">|Z|</span> and the phase angle, in radians, correct to 3 significant figures. [2 marks]<br>(d) The current is <span class="chem">I = V / Z</span>, where the voltage is the real number <span class="chem">V = 230</span>. Find <span class="chem">|I|</span> and <span class="chem">arg(I)</span>, correct to 3 significant figures. [2 marks]
      stem: "교류 회로에서 기술자들은 각 소자를 복소수 <em>임피던스</em>(단위: 옴)로 나타낸다. 임피던스가 <span class=\"chem\">Z_1</span>과 <span class=\"chem\">Z_2</span>인 두 소자를 병렬로 연결하면 전체 임피던스 <span class=\"chem\">Z</span>은 <span class=\"chem\">1/Z = 1/Z_1 + 1/Z_2</span>를 만족한다. <span class=\"chem\">Z_1 = 30 + 40i</span>, <span class=\"chem\">Z_2 = 50 - 20i</span>이라 하자.<br>(a) <span class=\"chem\">Z = (Z_1 Z_2) / (Z_1 + Z_2)</span>임을 보이시오 (Show that). [1 mark]<br>(b) <span class=\"chem\">Z</span>을 <span class=\"chem\">a + bi</span> 꼴로 구하시오 (Find). 단, <span class=\"chem\">a</span>와 <span class=\"chem\">b</span>는 유효숫자 3자리까지 나타내시오. [3 marks]<br>(c) 회로의 <em>위상각</em>은 <span class=\"chem\">arg(Z)</span>이다. <span class=\"chem\">|Z|</span>와 위상각(라디안)을 구하고, 유효숫자 3자리까지 나타내시오. [2 marks]<br>(d) 전류는 <span class=\"chem\">I = V / Z</span>이고, 전압은 실수 <span class=\"chem\">V = 230</span>이다. <span class=\"chem\">|I|</span>와 <span class=\"chem\">arg(I)</span>를 구하고, 유효숫자 3자리까지 나타내시오. [2 marks]",
      hints: [
        // EN: Decode: the physics is only context. You are asked to combine two complex numbers with a given formula, then find a modulus and an argument. "Phase angle" is just another name for the argument.
        "해석: 물리는 상황 설명일 뿐이에요. 주어진 공식으로 두 복소수를 결합한 뒤 절댓값과 편각을 구하라는 문제예요. \"위상각\"은 편각의 다른 이름일 뿐이에요.",
        // EN: For (a), add the two fractions on the right over the common denominator <span class="chem">Z_1 Z_2</span>, then flip both sides.
        "(a)에서는 우변의 두 분수를 공통분모 <span class=\"chem\">Z_1 Z_2</span>로 통분해 더한 다음, 양변의 역수를 취하세요.",
        // EN: For (d), dividing by <span class="chem">Z</span> divides the modulus by <span class="chem">|Z|</span> and subtracts <span class="chem">arg(Z)</span>; the argument of the positive real number 230 is 0.
        "(d)에서 <span class=\"chem\">Z</span>로 나누면 절댓값은 <span class=\"chem\">|Z|</span>로 나누어지고 편각은 <span class=\"chem\">arg(Z)</span>만큼 빠져요. 양의 실수 230의 편각은 0이에요.",
      ],
      // EN: <p><strong>Decode.</strong> Strip away the context: compute <span class="chem">Z_1 Z_2 / (Z_1 + Z_2)</span>, then its modulus and argument, then divide.<br>(a) <span class="chem">1/Z = (Z_1 + Z_2)/(Z_1 Z_2)</span>, so <span class="chem">Z = Z_1 Z_2 / (Z_1 + Z_2)</span>.<br>(b) <span class="chem">Z_1 Z_2 = 1500 - 600i + 2000i + 800 = 2300 + 1400i</span> and <span class="chem">Z_1 + Z_2 = 80 + 20i</span>. So <span class="chem">Z = (2300 + 1400i)/(80 + 20i) ≈ 31.176 + 9.7059i</span>.<br>(c) <span class="chem">|Z| ≈ 32.7</span> ohms and <span class="chem">arg(Z) = arctan(9.7059/31.176) ≈ 0.302</span> rad.<br>(d) <span class="chem">|I| = 230 / 32.652 ≈ 7.04</span> and <span class="chem">arg(I) = 0 - 0.30181 ≈ -0.302</span> rad.</p>
      solution: "<p><strong>해석.</strong> 상황을 걷어 내면: <span class=\"chem\">Z_1 Z_2 / (Z_1 + Z_2)</span>을 계산하고, 그 절댓값과 편각을 구한 다음 나누면 돼요.<br>(a) <span class=\"chem\">1/Z = (Z_1 + Z_2)/(Z_1 Z_2)</span>이므로 <span class=\"chem\">Z = Z_1 Z_2 / (Z_1 + Z_2)</span>.<br>(b) <span class=\"chem\">Z_1 Z_2 = 1500 - 600i + 2000i + 800 = 2300 + 1400i</span>이고 <span class=\"chem\">Z_1 + Z_2 = 80 + 20i</span>. 따라서 <span class=\"chem\">Z = (2300 + 1400i)/(80 + 20i) ≈ 31.176 + 9.7059i</span>.<br>(c) <span class=\"chem\">|Z| ≈ 32.7</span> 옴이고 <span class=\"chem\">arg(Z) = arctan(9.7059/31.176) ≈ 0.302</span> rad.<br>(d) <span class=\"chem\">|I| = 230 / 32.652 ≈ 7.04</span>이고 <span class=\"chem\">arg(I) = 0 - 0.30181 ≈ -0.302</span> rad.</p>",
      // EN: <p>(a) <span class="chem">1/Z = (Z_2 + Z_1)/(Z_1 Z_2)</span>; take reciprocals.<br>(b) <span class="chem">Z = (2300 + 1400i)/(80 + 20i) ≈ 31.2 + 9.71i</span>.<br>(c) <span class="chem">|Z| ≈ 32.7</span> ohms, <span class="chem">arg(Z) ≈ 0.302</span> rad.<br>(d) <span class="chem">|I| = 230/|Z| ≈ 7.04</span>, <span class="chem">arg(I) = -arg(Z) ≈ -0.302</span> rad.</p>
      answer: "<p>(a) <span class=\"chem\">1/Z = (Z_2 + Z_1)/(Z_1 Z_2)</span>; 역수를 취한다.<br>(b) <span class=\"chem\">Z = (2300 + 1400i)/(80 + 20i) ≈ 31.2 + 9.71i</span>.<br>(c) <span class=\"chem\">|Z| ≈ 32.7</span> 옴, <span class=\"chem\">arg(Z) ≈ 0.302</span> rad.<br>(d) <span class=\"chem\">|I| = 230/|Z| ≈ 7.04</span>, <span class=\"chem\">arg(I) = -arg(Z) ≈ -0.302</span> rad.</p>",
      markscheme: [
        // EN: A1: Combines 1/Z₁ + 1/Z₂ = (Z₁ + Z₂)/(Z₁Z₂) and takes the reciprocal (AG).
        "A1: 1/Z₁ + 1/Z₂ = (Z₁ + Z₂)/(Z₁Z₂)로 합치고 역수를 취함 (AG).",
        // EN: A1: Z₁Z₂ = 2300 + 1400i.
        "A1: Z₁Z₂ = 2300 + 1400i.",
        // EN: A1: Z₁ + Z₂ = 80 + 20i.
        "A1: Z₁ + Z₂ = 80 + 20i.",
        // EN: A1: Z ≈ 31.2 + 9.71i (exactly 530/17 + (165/17)i).
        "A1: Z ≈ 31.2 + 9.71i (정확히는 530/17 + (165/17)i).",
        // EN: A1: |Z| ≈ 32.7.
        "A1: |Z| ≈ 32.7.",
        // EN: A1: arg Z ≈ 0.302.
        "A1: arg Z ≈ 0.302.",
        // EN: A1: |I| = 230/|Z| ≈ 7.04.
        "A1: |I| = 230/|Z| ≈ 7.04.",
        // EN: A1: arg I = arg 230 − arg Z ≈ −0.302.
        "A1: arg I = arg 230 − arg Z ≈ −0.302.",
      ],
    },

    // ── t1-4-q047 · numeric · exam · AHL · AHL 1.14 · 5 marks
    "t1-4-q047": {
      // EN: Exactly one of the four solutions of <span class="chem">z^4 = -5 + 12i</span> lies in the second quadrant of the Argand diagram. Find the real part of this solution, correct to 3 significant figures.
      stem: "<span class=\"chem\">z^4 = -5 + 12i</span>의 네 해 중 정확히 하나가 아르강 평면의 제2사분면에 있다. 이 해의 실수부를 구하고 (Find), 유효숫자 3자리까지 나타내시오.",
      hints: [
        // EN: Write <span class="chem">-5 + 12i</span> in modulus-argument form. It is in Quadrant II, so its argument is <span class="chem">pi - arctan(12/5)</span>.
        "<span class=\"chem\">-5 + 12i</span>을 극형식으로 나타내세요. 제2사분면에 있으므로 편각은 <span class=\"chem\">pi - arctan(12/5)</span>예요.",
        // EN: The solutions have modulus <span class="chem">13^{1/4}</span> and arguments <span class="chem">(1.9656 + 2 pi k)/4</span>. The second-quadrant one has an argument between <span class="chem">pi/2</span> and <span class="chem">pi</span>.
        "해의 절댓값은 <span class=\"chem\">13^{1/4}</span>이고 편각은 <span class=\"chem\">(1.9656 + 2 pi k)/4</span>예요. 제2사분면의 해는 편각이 <span class=\"chem\">pi/2</span>과 <span class=\"chem\">pi</span> 사이에 있어요.",
      ],
      // EN: <p><span class="chem">|-5 + 12i| = 13</span> and <span class="chem">arg(-5 + 12i) = pi - arctan(12/5) ≈ 1.9656</span>. The solutions are <span class="chem">13^{1/4} e^{i(1.9656 + 2 pi k)/4}</span>, with arguments <span class="chem">≈ 0.4914, 2.0622, -2.6502, -1.0794</span>. The second-quadrant solution has argument <span class="chem">2.0622</span>, so its real part is <span class="chem">13^{1/4} cos(2.0622) ≈ -0.896</span>.</p>
      solution: "<p><span class=\"chem\">|-5 + 12i| = 13</span>이고 <span class=\"chem\">arg(-5 + 12i) = pi - arctan(12/5) ≈ 1.9656</span>예요. 해는 <span class=\"chem\">13^{1/4} e^{i(1.9656 + 2 pi k)/4}</span>이고, 편각은 <span class=\"chem\">≈ 0.4914, 2.0622, -2.6502, -1.0794</span>예요. 제2사분면의 해는 편각이 <span class=\"chem\">2.0622</span>이므로 실수부는 <span class=\"chem\">13^{1/4} cos(2.0622) ≈ -0.896</span>이에요.</p>",
    },

    // ── t1-4-q048 · numeric · exam · AHL · AHL 1.13, 1.14 · 5 marks
    "t1-4-q048": {
      // EN: The cubic equation <span class="chem">z^3 + az^2 + bz + c = 0</span>, where <span class="chem">a, b, c ∈ ℝ</span>, has a root <span class="chem">z = 2</span> and a non-real root with modulus 3 and argument <span class="chem">1.1</span>. Find the value of <span class="chem">b</span>, correct to 3 significant figures.
      stem: "삼차방정식 <span class=\"chem\">z^3 + az^2 + bz + c = 0</span> (<span class=\"chem\">a, b, c ∈ ℝ</span>)은 근 <span class=\"chem\">z = 2</span>과, 절댓값이 3이고 편각이 <span class=\"chem\">1.1</span>인 실수가 아닌 근을 가진다. <span class=\"chem\">b</span>의 값을 구하고 (Find), 유효숫자 3자리까지 나타내시오.",
      hints: [
        // EN: Decode: real coefficients mean the third root is the conjugate, with modulus 3 and argument <span class="chem">-1.1</span>. Build the cubic from its three roots and read off the coefficient of <span class="chem">z</span>.
        "해석: 계수가 실수이므로 세 번째 근은 켤레복소수이고, 절댓값이 3, 편각이 <span class=\"chem\">-1.1</span>이에요. 세 근으로 삼차식을 만들고 <span class=\"chem\">z</span>의 계수를 읽으세요.",
        // EN: For the conjugate pair <span class="chem">w = 3 e^{1.1 i}</span> and <span class="chem">w^*</span>: <span class="chem">(z - w)(z - w^*) = z^2 - 2 Re(w) z + |w|^2 = z^2 - 6 cos(1.1) z + 9</span>.
        "켤레 쌍 <span class=\"chem\">w = 3 e^{1.1 i}</span>과 <span class=\"chem\">w^*</span>에 대해: <span class=\"chem\">(z - w)(z - w^*) = z^2 - 2 Re(w) z + |w|^2 = z^2 - 6 cos(1.1) z + 9</span>.",
        // EN: Multiply by <span class="chem">(z - 2)</span> and collect the <span class="chem">z</span> terms.
        "<span class=\"chem\">(z - 2)</span>을 곱하고 <span class=\"chem\">z</span>항을 정리하세요.",
      ],
      // EN: <p><strong>Decode.</strong> Use the conjugate root theorem, then rebuild the polynomial.<br>The roots are <span class="chem">2</span>, <span class="chem">3 e^{1.1 i}</span> and <span class="chem">3 e^{-1.1 i}</span>. The conjugate pair gives <span class="chem">z^2 - 6 cos(1.1) z + 9</span>. Then <span class="chem">(z - 2)(z^2 - 6 cos(1.1) z + 9) = z^3 - (2 + 6 cos 1.1) z^2 + (9 + 12 cos 1.1) z - 18</span>. So <span class="chem">b = 9 + 12 cos(1.1) ≈ 14.4</span>.</p>
      solution: "<p><strong>해석.</strong> 켤레근 정리를 이용한 뒤 다항식을 다시 만들어요.<br>근은 <span class=\"chem\">2</span>, <span class=\"chem\">3 e^{1.1 i}</span>, <span class=\"chem\">3 e^{-1.1 i}</span>이에요. 켤레 쌍에서 <span class=\"chem\">z^2 - 6 cos(1.1) z + 9</span>를 얻어요. 그러면 <span class=\"chem\">(z - 2)(z^2 - 6 cos(1.1) z + 9) = z^3 - (2 + 6 cos 1.1) z^2 + (9 + 12 cos 1.1) z - 18</span>. 따라서 <span class=\"chem\">b = 9 + 12 cos(1.1) ≈ 14.4</span>.</p>",
    },

    // ── t1-4-q049 · numeric · exam · AHL · AHL 1.14 · 5 marks
    "t1-4-q049": {
      // EN: By De Moivre's theorem for rational exponents, <span class="chem">(2 - i)^{2/3}</span> has three values: the three solutions of <span class="chem">z^3 = (2 - i)^2</span>. Find the real part of the value with the greatest real part, correct to 3 significant figures.
      stem: "유리수 지수에 대한 드 무아브르 정리에 의해 <span class=\"chem\">(2 - i)^{2/3}</span>은 세 개의 값을 가진다. 이는 <span class=\"chem\">z^3 = (2 - i)^2</span>의 세 해이다. 실수부가 가장 큰 값의 실수부를 구하고 (Find), 유효숫자 3자리까지 나타내시오.",
      hints: [
        // EN: First find <span class="chem">(2 - i)^2 = 3 - 4i</span>, then write it in the form <span class="chem">r e^{i theta}</span>.
        "먼저 <span class=\"chem\">(2 - i)^2 = 3 - 4i</span>을 구한 다음, 이를 <span class=\"chem\">r e^{i theta}</span> 꼴로 나타내세요.",
        // EN: <span class="chem">r = 5</span> and <span class="chem">theta = -arctan(4/3) ≈ -0.9273</span>. The three cube roots have modulus <span class="chem">5^{1/3}</span> and arguments <span class="chem">(-0.9273 + 2 pi k)/3</span>. The one with argument closest to 0 has the greatest real part.
        "<span class=\"chem\">r = 5</span>이고 <span class=\"chem\">theta = -arctan(4/3) ≈ -0.9273</span>예요. 세 세제곱근의 절댓값은 <span class=\"chem\">5^{1/3}</span>이고 편각은 <span class=\"chem\">(-0.9273 + 2 pi k)/3</span>예요. 편각이 0에 가장 가까운 것의 실수부가 가장 커요.",
      ],
      // EN: <p><span class="chem">(2 - i)^2 = 3 - 4i = 5 e^{-0.92730 i}</span>. The cube roots are <span class="chem">5^{1/3} e^{i(-0.92730 + 2 pi k)/3}</span>, with arguments <span class="chem">≈ -0.30910, 1.7853, -2.4035</span>. The greatest real part comes from the argument <span class="chem">-0.30910</span>: <span class="chem">5^{1/3} cos(-0.30910) ≈ 1.63</span>.</p>
      solution: "<p><span class=\"chem\">(2 - i)^2 = 3 - 4i = 5 e^{-0.92730 i}</span>. 세제곱근은 <span class=\"chem\">5^{1/3} e^{i(-0.92730 + 2 pi k)/3}</span>이고, 편각은 <span class=\"chem\">≈ -0.30910, 1.7853, -2.4035</span>이에요. 실수부가 가장 큰 것은 편각이 <span class=\"chem\">-0.30910</span>일 때예요: <span class=\"chem\">5^{1/3} cos(-0.30910) ≈ 1.63</span>.</p>",
    },

    // ── t1-4-q050 · short · exam · AHL · AHL 1.14 · 7 marks
    "t1-4-q050": {
      // EN: (a) Use De Moivre's theorem to show that <span class="chem">cos(3 theta) = 4 cos^3 theta - 3 cos theta</span>. [3 marks]<br>(b) Show that the substitution <span class="chem">x = cos theta</span> turns the equation <span class="chem">40x^3 - 30x - 3 = 0</span> into <span class="chem">cos(3 theta) = 0.3</span>. [1 mark]<br>(c) Hence find the three solutions of <span class="chem">40x^3 - 30x - 3 = 0</span>, correct to 3 significant figures. [3 marks]
      stem: "(a) 드 무아브르 정리를 이용하여 <span class=\"chem\">cos(3 theta) = 4 cos^3 theta - 3 cos theta</span>임을 보이시오 (Show that). [3 marks]<br>(b) 치환 <span class=\"chem\">x = cos theta</span>에 의해 방정식 <span class=\"chem\">40x^3 - 30x - 3 = 0</span>이 <span class=\"chem\">cos(3 theta) = 0.3</span>로 바뀜을 보이시오. [1 mark]<br>(c) 이를 이용하여 (Hence) <span class=\"chem\">40x^3 - 30x - 3 = 0</span>의 세 해를 구하고, 유효숫자 3자리까지 나타내시오. [3 marks]",
      hints: [
        // EN: For (a), take the real part of the binomial expansion of <span class="chem">(cos theta + i sin theta)^3</span>.
        "(a)에서는 <span class=\"chem\">(cos theta + i sin theta)^3</span>의 이항전개에서 실수부를 취하세요.",
        // EN: For (c), <span class="chem">arccos(0.3) ≈ 1.2661</span>. Three different values of <span class="chem">3 theta</span> (adding <span class="chem">2 pi</span> each time) give three different values of <span class="chem">cos theta</span>. You can check them with the GDC polynomial solver.
        "(c)에서는 <span class=\"chem\">arccos(0.3) ≈ 1.2661</span>이에요. 서로 다른 세 개의 <span class=\"chem\">3 theta</span> 값 (매번 <span class=\"chem\">2 pi</span>을 더함)에서 서로 다른 세 개의 <span class=\"chem\">cos theta</span> 값을 얻어요. GDC의 다항식 풀이 기능으로 확인할 수 있어요.",
      ],
      // EN: <p>(a) <span class="chem">cos(3 theta) = Re(c + is)^3 = c^3 - 3cs^2 = c^3 - 3c(1 - c^2) = 4c^3 - 3c</span>.<br>(b) <span class="chem">40x^3 - 30x - 3 = 0 &lt;=&gt; 4x^3 - 3x = 0.3 &lt;=&gt; cos(3 theta) = 0.3</span>.<br>(c) <span class="chem">3 theta = 1.2661, 1.2661 + 2pi, 1.2661 + 4pi</span>, so <span class="chem">theta ≈ 0.42203, 2.5164, 4.6108</span> and <span class="chem">x = cos theta ≈ 0.912, -0.811, -0.101</span>. These agree with the GDC polynomial solver.</p>
      solution: "<p>(a) <span class=\"chem\">cos(3 theta) = Re(c + is)^3 = c^3 - 3cs^2 = c^3 - 3c(1 - c^2) = 4c^3 - 3c</span>.<br>(b) <span class=\"chem\">40x^3 - 30x - 3 = 0 &lt;=&gt; 4x^3 - 3x = 0.3 &lt;=&gt; cos(3 theta) = 0.3</span>.<br>(c) <span class=\"chem\">3 theta = 1.2661, 1.2661 + 2pi, 1.2661 + 4pi</span>이므로 <span class=\"chem\">theta ≈ 0.42203, 2.5164, 4.6108</span>이고 <span class=\"chem\">x = cos theta ≈ 0.912, -0.811, -0.101</span>예요. 이 값들은 GDC의 다항식 풀이 결과와 일치해요.</p>",
      // EN: <p>(a) <span class="chem">Re(cos theta + i sin theta)^3 = c^3 - 3cs^2 = c^3 - 3c(1 - c^2) = 4c^3 - 3c</span>.<br>(b) Divide by 10: <span class="chem">4x^3 - 3x = 0.3</span>, i.e. <span class="chem">cos(3 theta) = 0.3</span>.<br>(c) <span class="chem">3 theta = arccos(0.3) + 2 pi k</span>, so <span class="chem">x = cos((arccos(0.3) + 2 pi k)/3)</span>: <span class="chem">x ≈ 0.912, -0.811, -0.101</span>.</p>
      answer: "<p>(a) <span class=\"chem\">Re(cos theta + i sin theta)^3 = c^3 - 3cs^2 = c^3 - 3c(1 - c^2) = 4c^3 - 3c</span>.<br>(b) 10으로 나누면: <span class=\"chem\">4x^3 - 3x = 0.3</span>, 즉 <span class=\"chem\">cos(3 theta) = 0.3</span>.<br>(c) <span class=\"chem\">3 theta = arccos(0.3) + 2 pi k</span>이므로 <span class=\"chem\">x = cos((arccos(0.3) + 2 pi k)/3)</span>: <span class=\"chem\">x ≈ 0.912, -0.811, -0.101</span>.</p>",
      markscheme: [
        // EN: M1: cos 3θ = Re[(cos θ + i sin θ)³], expanded binomially.
        "M1: cos 3θ = Re[(cos θ + i sin θ)³]로 놓고 이항전개함.",
        // EN: A1: cos 3θ = cos³θ − 3cos θ sin²θ.
        "A1: cos 3θ = cos³θ − 3cos θ sin²θ.",
        // EN: A1: Replaces sin²θ = 1 − cos²θ to reach 4cos³θ − 3cos θ (AG).
        "A1: sin²θ = 1 − cos²θ로 바꾸어 4cos³θ − 3cos θ를 얻음 (AG).",
        // EN: A1: Divides by 10 and recognises 4x³ − 3x = cos 3θ, so cos 3θ = 0.3 (AG).
        "A1: 10으로 나누고 4x³ − 3x = cos 3θ임을 알아내어 cos 3θ = 0.3 (AG).",
        // EN: M1: 3θ = arccos(0.3) + 2πk, giving θ ≈ 0.42203, 2.5164, 4.6108.
        "M1: 3θ = arccos(0.3) + 2πk에서 θ ≈ 0.42203, 2.5164, 4.6108.",
        // EN: A1: One correct root, e.g. x ≈ 0.912.
        "A1: 올바른 근 하나, 예: x ≈ 0.912.",
        // EN: A1: The other two roots: x ≈ −0.811 and x ≈ −0.101.
        "A1: 나머지 두 근: x ≈ −0.811과 x ≈ −0.101.",
      ],
    },

    // ── t1-4-q051 · short · challenge · AHL · AHL 1.13, 1.14 · 8 marks
    "t1-4-q051": {
      // EN: Let <span class="chem">S = cos(0.3) + cos(0.6) + cos(0.9) + … + cos(6)</span>, the sum of <span class="chem">cos(0.3k)</span> for <span class="chem">k = 1, 2, …, 20</span>.<br>(a) By writing <span class="chem">cos(0.3k) = Re(e^{0.3ki})</span>, show that <span class="chem">S = Re((e^{0.3i}(1 - e^{6i})) / (1 - e^{0.3i}))</span>. [3 marks]<br>(b) Hence find <span class="chem">S</span>, correct to 3 significant figures. [2 marks]<br>(c) By writing <span class="chem">1 - e^{6i} = e^{3i}(e^{-3i} - e^{3i})</span> and treating <span class="chem">1 - e^{0.3i}</span> in the same way, show that <span class="chem">S = (sin(3) cos(3.15)) / sin(0.15)</span>. [3 marks]
      stem: "<span class=\"chem\">S = cos(0.3) + cos(0.6) + cos(0.9) + … + cos(6)</span>, 즉 <span class=\"chem\">k = 1, 2, …, 20</span>에 대한 <span class=\"chem\">cos(0.3k)</span>의 합이라 하자.<br>(a) <span class=\"chem\">cos(0.3k) = Re(e^{0.3ki})</span>로 써서 <span class=\"chem\">S = Re((e^{0.3i}(1 - e^{6i})) / (1 - e^{0.3i}))</span>임을 보이시오 (Show that). [3 marks]<br>(b) 이를 이용하여 (Hence) <span class=\"chem\">S</span>을 구하고, 유효숫자 3자리까지 나타내시오. [2 marks]<br>(c) <span class=\"chem\">1 - e^{6i} = e^{3i}(e^{-3i} - e^{3i})</span>로 쓰고 <span class=\"chem\">1 - e^{0.3i}</span>도 같은 방법으로 다루어, <span class=\"chem\">S = (sin(3) cos(3.15)) / sin(0.15)</span>임을 보이시오. [3 marks]",
      hints: [
        // EN: Decode: a sum of cosines of an arithmetic sequence of angles is hidden as the real part of a geometric series <span class="chem">z + z^2 + … + z^{20}</span> with <span class="chem">z = e^{0.3i}</span>.
        "해석: 등차수열을 이루는 각의 코사인의 합이 등비급수 <span class=\"chem\">z + z^2 + … + z^{20}</span> (<span class=\"chem\">z = e^{0.3i}</span>)의 실수부로 숨어 있어요.",
        // EN: The geometric series formula works for complex ratios too, as long as the ratio is not 1. Note <span class="chem">(e^{0.3i})^{20} = e^{6i}</span>.
        "등비급수의 합 공식은 공비가 1이 아니기만 하면 복소수 공비에도 성립해요. <span class=\"chem\">(e^{0.3i})^{20} = e^{6i}</span>임에 주의하세요.",
        // EN: For (c), <span class="chem">e^{-ix} - e^{ix} = -2i sin x</span>. After cancelling, you should have <span class="chem">(sin 3 / sin 0.15) e^{3.15 i}</span>.
        "(c)에서는 <span class=\"chem\">e^{-ix} - e^{ix} = -2i sin x</span>이에요. 약분하면 <span class=\"chem\">(sin 3 / sin 0.15) e^{3.15 i}</span>가 되어야 해요.",
      ],
      // EN: <p><strong>Decode.</strong> Turn a trig sum into a complex geometric series, sum it, then take the real part.<br>(a) <span class="chem">S = Re(z + z^2 + … + z^{20})</span> with <span class="chem">z = e^{0.3i} != 1</span>. The sum is <span class="chem">z(1 - z^{20})/(1 - z) = e^{0.3i}(1 - e^{6i})/(1 - e^{0.3i})</span>.<br>(b) On the GDC this is <span class="chem">≈ -0.94430 + …i</span>, so <span class="chem">S ≈ -0.944</span> (it agrees with the GDC sum of <span class="chem">cos(0.3k)</span>).<br>(c) <span class="chem">1 - e^{6i} = e^{3i}(-2i sin 3)</span> and <span class="chem">1 - e^{0.3i} = e^{0.15i}(-2i sin 0.15)</span>. So the sum is <span class="chem">e^{0.3i} × (sin 3/sin 0.15) e^{2.85i} = (sin 3/sin 0.15) e^{3.15i}</span>, whose real part is <span class="chem">sin(3) cos(3.15)/sin(0.15)</span>.</p>
      solution: "<p><strong>해석.</strong> 삼각함수의 합을 복소수 등비급수로 바꾸어 합을 구한 다음 실수부를 취해요.<br>(a) <span class=\"chem\">z = e^{0.3i} != 1</span>일 때 <span class=\"chem\">S = Re(z + z^2 + … + z^{20})</span>. 합은 <span class=\"chem\">z(1 - z^{20})/(1 - z) = e^{0.3i}(1 - e^{6i})/(1 - e^{0.3i})</span>이에요.<br>(b) GDC에서 이 값은 <span class=\"chem\">≈ -0.94430 + …i</span>이므로 <span class=\"chem\">S ≈ -0.944</span>예요 (GDC로 <span class=\"chem\">cos(0.3k)</span>의 합을 직접 구한 결과와 일치해요).<br>(c) <span class=\"chem\">1 - e^{6i} = e^{3i}(-2i sin 3)</span>이고 <span class=\"chem\">1 - e^{0.3i} = e^{0.15i}(-2i sin 0.15)</span>. 따라서 합은 <span class=\"chem\">e^{0.3i} × (sin 3/sin 0.15) e^{2.85i} = (sin 3/sin 0.15) e^{3.15i}</span>이고, 그 실수부는 <span class=\"chem\">sin(3) cos(3.15)/sin(0.15)</span>이에요.</p>",
      // EN: <p>(a) <span class="chem">S = Re(Sigma_{k=1}^{20} (e^{0.3i})^k)</span>, a geometric series with first term and ratio <span class="chem">e^{0.3i} != 1</span>, so the sum is <span class="chem">e^{0.3i}(1 - e^{6i})/(1 - e^{0.3i})</span>.<br>(b) <span class="chem">S ≈ -0.944</span>.<br>(c) <span class="chem">(1 - e^{6i})/(1 - e^{0.3i}) = (e^{3i}(-2i sin 3))/(e^{0.15i}(-2i sin 0.15)) = (sin 3 / sin 0.15) e^{2.85i}</span>; multiply by <span class="chem">e^{0.3i}</span> and take the real part.</p>
      answer: "<p>(a) <span class=\"chem\">S = Re(Sigma_{k=1}^{20} (e^{0.3i})^k)</span>. 첫째항과 공비가 모두 <span class=\"chem\">e^{0.3i} != 1</span>인 등비급수이므로 합은 <span class=\"chem\">e^{0.3i}(1 - e^{6i})/(1 - e^{0.3i})</span>.<br>(b) <span class=\"chem\">S ≈ -0.944</span>.<br>(c) <span class=\"chem\">(1 - e^{6i})/(1 - e^{0.3i}) = (e^{3i}(-2i sin 3))/(e^{0.15i}(-2i sin 0.15)) = (sin 3 / sin 0.15) e^{2.85i}</span>; <span class=\"chem\">e^{0.3i}</span>을 곱하고 실수부를 취한다.</p>",
      markscheme: [
        // EN: M1: Writes S as the real part of the sum of (e<sup>0.3i</sup>)<sup>k</sup> for k = 1 to 20.
        "M1: S를 k = 1부터 20까지 (e<sup>0.3i</sup>)<sup>k</sup>의 합의 실수부로 씀.",
        // EN: A1: Recognises a geometric series with first term and ratio e<sup>0.3i</sup>, and that the ratio is not 1.
        "A1: 첫째항과 공비가 모두 e<sup>0.3i</sup>인 등비급수이고, 공비가 1이 아님을 인식함.",
        // EN: A1: Uses S<sub>n</sub> = u₁(1 − r<sup>n</sup>)/(1 − r) with r²⁰ = e<sup>6i</sup> to reach the given form (AG).
        "A1: S<sub>n</sub> = u₁(1 − r<sup>n</sup>)/(1 − r)과 r²⁰ = e<sup>6i</sup>을 이용해 주어진 꼴을 얻음 (AG).",
        // EN: A1: Evaluates the complex expression on the GDC (radian mode).
        "A1: GDC로 복소수 식을 계산함 (라디안 모드).",
        // EN: A1: S ≈ −0.944.
        "A1: S ≈ −0.944.",
        // EN: M1: Uses e<sup>−ix</sup> − e<sup>ix</sup> = −2i sin x for both numerator and denominator.
        "M1: 분자와 분모 모두에 e<sup>−ix</sup> − e<sup>ix</sup> = −2i sin x를 이용함.",
        // EN: A1: Ratio = (sin 3/sin 0.15) e<sup>i(3 − 0.15)</sup>.
        "A1: 비 = (sin 3/sin 0.15) e<sup>i(3 − 0.15)</sup>.",
        // EN: A1: Multiplies by e<sup>0.3i</sup> to get (sin 3/sin 0.15) e<sup>3.15i</sup>; real part gives S = sin 3 cos 3.15/sin 0.15 (AG).
        "A1: e<sup>0.3i</sup>을 곱해 (sin 3/sin 0.15) e<sup>3.15i</sup>를 얻음; 실수부에서 S = sin 3 cos 3.15/sin 0.15 (AG).",
      ],
    },

    // ── t1-4-q052 · numeric · challenge · AHL · AHL 1.13, 1.14 · 5 marks
    "t1-4-q052": {
      // EN: A point starts at <span class="chem">z_0 = 1</span> on the Argand diagram. Every second its position is multiplied by <span class="chem">w = 0.95 e^{i pi/6}</span>, so after <span class="chem">n</span> seconds it is at <span class="chem">z_n = w^n</span>. Between consecutive positions it moves in a straight line. Find the total length of the path it travels as <span class="chem">n -&gt; infty</span>, correct to 3 significant figures.
      stem: "한 점이 아르강 평면 위의 <span class=\"chem\">z_0 = 1</span>에서 출발한다. 1초마다 그 위치에 <span class=\"chem\">w = 0.95 e^{i pi/6}</span>가 곱해지므로, <span class=\"chem\">n</span>초 후에는 <span class=\"chem\">z_n = w^n</span>에 있다. 연속한 위치 사이에서는 직선으로 이동한다. <span class=\"chem\">n -&gt; infty</span>일 때 이 점이 이동한 경로의 전체 길이를 구하고 (Find), 유효숫자 3자리까지 나타내시오.",
      hints: [
        // EN: Decode: the path is made of line segments from <span class="chem">z_n</span> to <span class="chem">z_{n+1}</span>. You need the sum of their lengths, <span class="chem">|z_{n+1} - z_n|</span>, which turns out to be a real geometric series.
        "해석: 경로는 <span class=\"chem\">z_n</span>에서 <span class=\"chem\">z_{n+1}</span>까지의 선분들로 이루어져 있어요. 그 길이 <span class=\"chem\">|z_{n+1} - z_n|</span>의 합이 필요한데, 이는 실수 등비급수가 돼요.",
        // EN: <span class="chem">z_{n+1} - z_n = w^n(w - 1)</span>, so its length is <span class="chem">|w|^n |w - 1| = 0.95^n |w - 1|</span>.
        "<span class=\"chem\">z_{n+1} - z_n = w^n(w - 1)</span>이므로 그 길이는 <span class=\"chem\">|w|^n |w - 1| = 0.95^n |w - 1|</span>예요.",
        // EN: Sum to infinity: <span class="chem">|w - 1| / (1 - 0.95)</span>. Find <span class="chem">|w - 1|</span> on the GDC.
        "무한급수의 합: <span class=\"chem\">|w - 1| / (1 - 0.95)</span>. GDC로 <span class=\"chem\">|w - 1|</span>를 구하세요.",
      ],
      // EN: <p><strong>Decode.</strong> The segment lengths form a geometric sequence, so the total length is a sum to infinity.<br>Segment <span class="chem">n</span> has length <span class="chem">|w^{n+1} - w^n| = |w|^n |w - 1| = 0.95^n |w - 1|</span>. With <span class="chem">|w - 1| ≈ 0.50700</span>, the total length is <span class="chem">0.50700 / (1 - 0.95) ≈ 10.1</span>.</p>
      solution: "<p><strong>해석.</strong> 선분의 길이가 등비수열을 이루므로 전체 길이는 무한급수의 합이에요.<br><span class=\"chem\">n</span>번째 선분의 길이는 <span class=\"chem\">|w^{n+1} - w^n| = |w|^n |w - 1| = 0.95^n |w - 1|</span>예요. <span class=\"chem\">|w - 1| ≈ 0.50700</span>이므로 전체 길이는 <span class=\"chem\">0.50700 / (1 - 0.95) ≈ 10.1</span>예요.</p>",
    },

    // ── t1-4-q053 · numeric · exam · AHL · AHL 1.12, 1.13 · 5 marks
    "t1-4-q053": {
      // EN: The point <span class="chem">Z</span>, representing <span class="chem">z = x + yi</span>, is the same distance from the point representing <span class="chem">2i</span> as from the point representing <span class="chem">6</span>, so <span class="chem">|z - 2i| = |z - 6|</span>. Also <span class="chem">|z| = 5</span>. There are two such points. For the one with positive imaginary part, find <span class="chem">arg(z)</span> in radians, correct to 3 significant figures.
      stem: "<span class=\"chem\">z = x + yi</span>를 나타내는 점 <span class=\"chem\">Z</span>은 <span class=\"chem\">2i</span>을 나타내는 점과 <span class=\"chem\">6</span>를 나타내는 점으로부터 같은 거리에 있으므로 <span class=\"chem\">|z - 2i| = |z - 6|</span>이다. 또 <span class=\"chem\">|z| = 5</span>이다. 이러한 점은 두 개 있다. 허수부가 양수인 점에 대하여 <span class=\"chem\">arg(z)</span>을 라디안으로 구하고 (find), 유효숫자 3자리까지 나타내시오.",
      hints: [
        // EN: Decode: "the same distance from two points" is the perpendicular bisector of the two points, a straight line; <span class="chem">|z| = 5</span> is a circle. Find where they meet.
        "해석: \"두 점으로부터 같은 거리\"는 두 점의 수직이등분선, 즉 직선이에요. <span class=\"chem\">|z| = 5</span>은 원이에요. 두 도형이 만나는 점을 구하세요.",
        // EN: Square both sides of <span class="chem">|z - 2i| = |z - 6|</span>: <span class="chem">x^2 + (y - 2)^2 = (x - 6)^2 + y^2</span>, which simplifies to <span class="chem">y = 3x - 8</span>.
        "<span class=\"chem\">|z - 2i| = |z - 6|</span>의 양변을 제곱하면: <span class=\"chem\">x^2 + (y - 2)^2 = (x - 6)^2 + y^2</span>이고, 정리하면 <span class=\"chem\">y = 3x - 8</span>이에요.",
        // EN: Substitute into <span class="chem">x^2 + y^2 = 25</span> to get <span class="chem">10x^2 - 48x + 39 = 0</span>, and solve on the GDC.
        "<span class=\"chem\">x^2 + y^2 = 25</span>에 대입해 <span class=\"chem\">10x^2 - 48x + 39 = 0</span>를 얻고 GDC로 푸세요.",
      ],
      // EN: <p><span class="chem">x^2 + (y - 2)^2 = (x - 6)^2 + y^2</span> gives <span class="chem">-4y + 4 = -12x + 36</span>, i.e. <span class="chem">y = 3x - 8</span>. With <span class="chem">x^2 + y^2 = 25</span>: <span class="chem">10x^2 - 48x + 39 = 0</span>, so <span class="chem">x ≈ 3.7638</span> or <span class="chem">x ≈ 1.0362</span>. These give <span class="chem">y ≈ 3.2915</span> and <span class="chem">y ≈ -4.8915</span>. The point with <span class="chem">y &gt; 0</span> is <span class="chem">3.7638 + 3.2915i</span>, with <span class="chem">arg(z) = arctan(3.2915/3.7638) ≈ 0.719</span> rad.</p>
      solution: "<p><span class=\"chem\">x^2 + (y - 2)^2 = (x - 6)^2 + y^2</span>에서 <span class=\"chem\">-4y + 4 = -12x + 36</span>, 즉 <span class=\"chem\">y = 3x - 8</span>이에요. <span class=\"chem\">x^2 + y^2 = 25</span>와 함께 쓰면: <span class=\"chem\">10x^2 - 48x + 39 = 0</span>이므로 <span class=\"chem\">x ≈ 3.7638</span> 또는 <span class=\"chem\">x ≈ 1.0362</span>이에요. 이로부터 <span class=\"chem\">y ≈ 3.2915</span>과 <span class=\"chem\">y ≈ -4.8915</span>를 얻어요. <span class=\"chem\">y &gt; 0</span>인 점은 <span class=\"chem\">3.7638 + 3.2915i</span>이고, <span class=\"chem\">arg(z) = arctan(3.2915/3.7638) ≈ 0.719</span> rad예요.</p>",
    },

    // ── t1-4-q054 · numeric · challenge · AHL · AHL 1.14 · 6 marks
    "t1-4-q054": {
      // EN: The six solutions of <span class="chem">z^6 + z^3 + 1 = 0</span> are the vertices of a hexagon on the Argand diagram. Find the area of this hexagon, correct to 3 significant figures.
      stem: "<span class=\"chem\">z^6 + z^3 + 1 = 0</span>의 여섯 해는 아르강 평면 위 육각형의 꼭짓점이다. 이 육각형의 넓이를 구하고 (Find), 유효숫자 3자리까지 나타내시오.",
      hints: [
        // EN: Decode: the equation is a quadratic in disguise. Put <span class="chem">u = z^3</span>, solve <span class="chem">u^2 + u + 1 = 0</span>, then take cube roots. The hexagon is not regular, so check the angles between neighbouring vertices.
        "해석: 이 방정식은 사실 이차방정식이에요. <span class=\"chem\">u = z^3</span>로 놓고 <span class=\"chem\">u^2 + u + 1 = 0</span>를 푼 다음 세제곱근을 구하세요. 육각형은 정육각형이 아니므로 이웃한 꼭짓점 사이의 각을 확인하세요.",
        // EN: <span class="chem">u = e^{+- 2pi i/3}</span>, so every solution has modulus 1. The arguments are <span class="chem">(+- 2pi/3 + 2pi k)/3</span>: in degrees <span class="chem">+- 40°, +- 160°, +- 280°</span>, that is <span class="chem">40°, 80°, 160°, 200°, 280°, 320°</span>.
        "<span class=\"chem\">u = e^{+- 2pi i/3}</span>이므로 모든 해의 절댓값은 1이에요. 편각은 <span class=\"chem\">(+- 2pi/3 + 2pi k)/3</span>이고, 도로 나타내면 <span class=\"chem\">+- 40°, +- 160°, +- 280°</span>, 즉 <span class=\"chem\">40°, 80°, 160°, 200°, 280°, 320°</span>예요.",
        // EN: Split the hexagon into six triangles at the origin. Neighbouring vertices are <span class="chem">40°</span> or <span class="chem">80°</span> apart, alternately, and each triangle has area <span class="chem">(1/2)(1)(1) sin(angle)</span>.
        "육각형을 원점에서 삼각형 여섯 개로 나누세요. 이웃한 꼭짓점은 <span class=\"chem\">40°</span> 또는 <span class=\"chem\">80°</span>씩 번갈아 떨어져 있고, 각 삼각형의 넓이는 <span class=\"chem\">(1/2)(1)(1) sin(angle)</span>이에요.",
      ],
      // EN: <p><strong>Decode.</strong> Treat the sextic as a quadratic in <span class="chem">z^3</span>, then use roots of complex numbers.<br><span class="chem">z^3 = (-1 +- sqrt(3)i)/2 = e^{+- 2 pi i/3}</span>. The solutions lie on the unit circle at <span class="chem">40°, 80°, 160°, 200°, 280°, 320°</span>. The angular gaps are <span class="chem">40°, 80°, 40°, 80°, 40°, 80°</span>, so the area is <span class="chem">3 × (1/2)(sin 40° + sin 80°) ≈ 3 × 0.5 × (0.64279 + 0.98481) ≈ 2.44</span>.</p>
      solution: "<p><strong>해석.</strong> 육차방정식을 <span class=\"chem\">z^3</span>에 대한 이차방정식으로 보고, 복소수의 거듭제곱근을 이용해요.<br><span class=\"chem\">z^3 = (-1 +- sqrt(3)i)/2 = e^{+- 2 pi i/3}</span>. 해는 단위원 위의 <span class=\"chem\">40°, 80°, 160°, 200°, 280°, 320°</span>에 있어요. 각 간격은 <span class=\"chem\">40°, 80°, 40°, 80°, 40°, 80°</span>이므로 넓이는 <span class=\"chem\">3 × (1/2)(sin 40° + sin 80°) ≈ 3 × 0.5 × (0.64279 + 0.98481) ≈ 2.44</span>예요.</p>",
    },

    // ── t1-4-q055 · numeric · exam · AHL · AHL 1.14 · 4 marks
    "t1-4-q055": {
      // EN: The complex number <span class="chem">z</span> has <span class="chem">|z| = 2</span> and <span class="chem">0 &lt; arg(z) &lt; pi/6</span>. Given that <span class="chem">Re(z^3) = 5</span>, find <span class="chem">arg(z)</span>, in radians correct to 3 significant figures.
      stem: "복소수 <span class=\"chem\">z</span>은 <span class=\"chem\">|z| = 2</span>이고 <span class=\"chem\">0 &lt; arg(z) &lt; pi/6</span>이다. <span class=\"chem\">Re(z^3) = 5</span>일 때, <span class=\"chem\">arg(z)</span>를 라디안으로 구하고 (find), 유효숫자 3자리까지 나타내시오.",
      hints: [
        // EN: Write <span class="chem">z = 2 e^{i theta}</span>. By De Moivre, <span class="chem">z^3 = 8 e^{3 i theta}</span>, so <span class="chem">Re(z^3) = 8 cos(3 theta)</span>.
        "<span class=\"chem\">z = 2 e^{i theta}</span>로 쓰세요. 드 무아브르 정리에 의해 <span class=\"chem\">z^3 = 8 e^{3 i theta}</span>이므로 <span class=\"chem\">Re(z^3) = 8 cos(3 theta)</span>이에요.",
        // EN: Solve <span class="chem">cos(3 theta) = 5/8</span> with <span class="chem">0 &lt; 3 theta &lt; pi/2</span>.
        "<span class=\"chem\">0 &lt; 3 theta &lt; pi/2</span>에서 <span class=\"chem\">cos(3 theta) = 5/8</span>을 푸세요.",
      ],
      // EN: <p><span class="chem">z^3 = 8(cos(3 theta) + i sin(3 theta))</span>, so <span class="chem">8 cos(3 theta) = 5</span>. As <span class="chem">0 &lt; 3 theta &lt; pi/2</span>, <span class="chem">3 theta = arccos(0.625) ≈ 0.89566</span>, so <span class="chem">theta ≈ 0.299</span>.</p>
      solution: "<p><span class=\"chem\">z^3 = 8(cos(3 theta) + i sin(3 theta))</span>이므로 <span class=\"chem\">8 cos(3 theta) = 5</span>예요. <span class=\"chem\">0 &lt; 3 theta &lt; pi/2</span>이므로 <span class=\"chem\">3 theta = arccos(0.625) ≈ 0.89566</span>이고, 따라서 <span class=\"chem\">theta ≈ 0.299</span>예요.</p>",
    },

    // ── t1-4-q056 · numeric · challenge · AHL · AHL 1.13 · 5 marks
    "t1-4-q056": {
      // EN: For <span class="chem">0 &lt; theta &lt; pi</span>, let <span class="chem">w = 1 + 2 e^{i theta}</span>. On the Argand diagram, <span class="chem">w</span> is reached by walking 1 unit along the positive real axis and then 2 units at angle <span class="chem">theta</span>. Find the value of <span class="chem">theta</span> for which <span class="chem">arg(w) = 1</span>, correct to 3 significant figures.
      stem: "<span class=\"chem\">0 &lt; theta &lt; pi</span>에 대하여 <span class=\"chem\">w = 1 + 2 e^{i theta}</span>라 하자. 아르강 평면 위에서 <span class=\"chem\">w</span>은 양의 실수축을 따라 1만큼 간 다음 각 <span class=\"chem\">theta</span> 방향으로 2만큼 가서 도달하는 점이다. <span class=\"chem\">arg(w) = 1</span>이 되는 <span class=\"chem\">theta</span>의 값을 구하고 (Find), 유효숫자 3자리까지 나타내시오.",
      hints: [
        // EN: Decode: you need the argument of a <em>sum</em>, which is not the sum of the arguments. Write <span class="chem">w</span> in Cartesian form and set up an equation in <span class="chem">theta</span> that the GDC can solve.
        "해석: <em>합</em>의 편각이 필요한데, 이는 편각의 합이 아니에요. <span class=\"chem\">w</span>을 직교 형식으로 나타내고 GDC로 풀 수 있는 <span class=\"chem\">theta</span>에 대한 방정식을 세우세요.",
        // EN: <span class="chem">w = (1 + 2 cos theta) + 2i sin theta</span>. Since <span class="chem">arg(w) = 1</span> is in Quadrant I, you need <span class="chem">2 sin theta / (1 + 2 cos theta) = tan 1</span> with <span class="chem">1 + 2 cos theta &gt; 0</span>.
        "<span class=\"chem\">w = (1 + 2 cos theta) + 2i sin theta</span>. <span class=\"chem\">arg(w) = 1</span>는 제1사분면에 있으므로 <span class=\"chem\">1 + 2 cos theta &gt; 0</span>이면서 <span class=\"chem\">2 sin theta / (1 + 2 cos theta) = tan 1</span>이어야 해요.",
        // EN: Graph <span class="chem">y = arg(1 + 2e^{ix})</span> (or the tangent equation) for <span class="chem">0 &lt; x &lt; pi</span> and find where it equals 1.
        "<span class=\"chem\">0 &lt; x &lt; pi</span>에서 <span class=\"chem\">y = arg(1 + 2e^{ix})</span> (또는 탄젠트 방정식)의 그래프를 그리고, 값이 1이 되는 곳을 찾으세요.",
      ],
      // EN: <p><strong>Decode.</strong> Sums must be done in Cartesian form; only then can you take an argument.<br><span class="chem">w = (1 + 2 cos theta) + 2i sin theta</span>. <span class="chem">arg(w) = 1</span> needs <span class="chem">1 + 2 cos theta &gt; 0</span> and <span class="chem">2 sin theta = tan(1)(1 + 2 cos theta)</span>. The GDC gives <span class="chem">theta ≈ 1.43</span> (check: <span class="chem">1 + 2 cos(1.4343) ≈ 1.272 &gt; 0</span>). As <span class="chem">theta</span> increases from 0 to <span class="chem">pi</span>, <span class="chem">arg(w)</span> increases from 0 to <span class="chem">pi</span>, so this is the only solution.</p>
      solution: "<p><strong>해석.</strong> 합은 직교 형식으로 계산해야 하고, 편각은 그다음에 구할 수 있어요.<br><span class=\"chem\">w = (1 + 2 cos theta) + 2i sin theta</span>. <span class=\"chem\">arg(w) = 1</span>가 되려면 <span class=\"chem\">1 + 2 cos theta &gt; 0</span>이고 <span class=\"chem\">2 sin theta = tan(1)(1 + 2 cos theta)</span>여야 해요. GDC로 <span class=\"chem\">theta ≈ 1.43</span>를 얻어요 (확인: <span class=\"chem\">1 + 2 cos(1.4343) ≈ 1.272 &gt; 0</span>). <span class=\"chem\">theta</span>가 0에서 <span class=\"chem\">pi</span>까지 증가하면 <span class=\"chem\">arg(w)</span>는 0에서 <span class=\"chem\">pi</span>까지 증가하므로 이것이 유일한 해예요.</p>",
    },

    // ── t1-4-q057 · short · exam · AHL · AHL 1.14 · 17 marks
    "t1-4-q057": {
      // EN: This investigation looks at sums of powers of the <span class="chem">n</span>-th roots of unity. For an integer <span class="chem">n &gt;= 2</span>, let <span class="chem">omega = e^{2 pi i / n}</span> and, for <span class="chem">m ∈ ℤ^+</span>, let <span class="chem">S(n, m) = 1 + omega^m + omega^{2m} + … + omega^{(n-1)m}</span>.<br>(a) For <span class="chem">n = 4</span>, <span class="chem">omega = i</span>. Write down <span class="chem">S(4, m)</span> for <span class="chem">m = 1, 2, 3, 4</span>. [2 marks]<br>(b) Use your GDC to find <span class="chem">S(6, m)</span> for <span class="chem">m = 1, 2, …, 6</span>. [2 marks]<br>(c) Conjecture a formula for <span class="chem">S(n, m)</span> in terms of <span class="chem">n</span> and <span class="chem">m</span>. [2 marks]<br>(d) Prove your conjecture: (i) when <span class="chem">n</span> divides <span class="chem">m</span>; [2 marks] (ii) when <span class="chem">n</span> does not divide <span class="chem">m</span>. [3 marks]<br>(e) By writing <span class="chem">cos^2 x = 1/2 + (1/4)(e^{2ix} + e^{-2ix})</span>, show that <span class="chem">Sigma_{k=0}^{n-1} cos^2(2 pi k / n) = n/2</span> for <span class="chem">n &gt;= 3</span>. [4 marks]<br>(f) Explain why the result of (e) is not true for <span class="chem">n = 2</span>, and find the correct value of the sum when <span class="chem">n = 2</span>. [2 marks]
      stem: "이 탐구에서는 1의 <span class=\"chem\">n</span>제곱근의 거듭제곱의 합을 살펴본다. 정수 <span class=\"chem\">n &gt;= 2</span>에 대하여 <span class=\"chem\">omega = e^{2 pi i / n}</span>이라 하고, <span class=\"chem\">m ∈ ℤ^+</span>에 대하여 <span class=\"chem\">S(n, m) = 1 + omega^m + omega^{2m} + … + omega^{(n-1)m}</span>라 하자.<br>(a) <span class=\"chem\">n = 4</span>일 때 <span class=\"chem\">omega = i</span>이다. <span class=\"chem\">m = 1, 2, 3, 4</span>에 대하여 <span class=\"chem\">S(4, m)</span>을 쓰시오 (Write down). [2 marks]<br>(b) GDC를 이용하여 <span class=\"chem\">m = 1, 2, …, 6</span>에 대하여 <span class=\"chem\">S(6, m)</span>을 구하시오 (Find). [2 marks]<br>(c) <span class=\"chem\">n</span>과 <span class=\"chem\">m</span>로 나타낸 <span class=\"chem\">S(n, m)</span>의 공식을 추측하시오 (Conjecture). [2 marks]<br>(d) 추측을 증명하시오 (Prove): (i) <span class=\"chem\">m</span>이 <span class=\"chem\">n</span>로 나누어떨어질 때; [2 marks] (ii) <span class=\"chem\">m</span>이 <span class=\"chem\">n</span>로 나누어떨어지지 않을 때. [3 marks]<br>(e) <span class=\"chem\">cos^2 x = 1/2 + (1/4)(e^{2ix} + e^{-2ix})</span>로 써서 <span class=\"chem\">n &gt;= 3</span>에 대하여 <span class=\"chem\">Sigma_{k=0}^{n-1} cos^2(2 pi k / n) = n/2</span>임을 보이시오 (Show that). [4 marks]<br>(f) (e)의 결과가 <span class=\"chem\">n = 2</span>에서 성립하지 않는 이유를 설명하고 (Explain), <span class=\"chem\">n = 2</span>일 때 합의 올바른 값을 구하시오. [2 marks]",
      hints: [
        // EN: Decode: this is a guided pattern-to-proof investigation. Each <span class="chem">S(n, m)</span> is a geometric series with ratio <span class="chem">omega^m</span>; the key question is whether that ratio equals 1.
        "해석: 이것은 규칙 발견에서 증명으로 이어지는 안내형 탐구예요. 각 <span class=\"chem\">S(n, m)</span>은 공비가 <span class=\"chem\">omega^m</span>인 등비급수이고, 핵심은 그 공비가 1인지 아닌지예요.",
        // EN: For (b), on the GDC use <span class="mono">sum(e^(2πi·k·m/6), k, 0, 5)</span>. Tiny values such as <span class="chem">2 × 10^{-13}</span> are rounding errors for 0.
        "(b)에서는 GDC에서 <span class=\"mono\">sum(e^(2πi·k·m/6), k, 0, 5)</span>을 이용하세요. <span class=\"chem\">2 × 10^{-13}</span> 같은 아주 작은 값은 0의 반올림 오차예요.",
        // EN: For (d)(ii), the formula <span class="chem">(1 - r^n)/(1 - r)</span> needs <span class="chem">r != 1</span>. Here <span class="chem">r = omega^m</span> and <span class="chem">r^n = (omega^n)^m</span>.
        "(d)(ii)에서 공식 <span class=\"chem\">(1 - r^n)/(1 - r)</span>을 쓰려면 <span class=\"chem\">r != 1</span>여야 해요. 여기서 <span class=\"chem\">r = omega^m</span>이고 <span class=\"chem\">r^n = (omega^n)^m</span>예요.",
        // EN: For (e), the terms with <span class="chem">e^{2ix}</span> give <span class="chem">S(n, 2)</span>; the terms with <span class="chem">e^{-2ix}</span> give its complex conjugate. When is <span class="chem">S(n, 2)</span> zero?
        "(e)에서 <span class=\"chem\">e^{2ix}</span>이 있는 항들은 <span class=\"chem\">S(n, 2)</span>를 주고, <span class=\"chem\">e^{-2ix}</span>이 있는 항들은 그 켤레복소수를 줘요. <span class=\"chem\">S(n, 2)</span>는 언제 0일까요?",
      ],
      // EN: <p><strong>Decode.</strong> Each sum is a finite geometric series with ratio <span class="chem">omega^m</span>; everything depends on whether <span class="chem">omega^m = 1</span>.<br>(a) <span class="chem">S(4, 1) = 1 + i - 1 - i = 0</span>, <span class="chem">S(4, 2) = 1 - 1 + 1 - 1 = 0</span>, <span class="chem">S(4, 3) = 1 - i - 1 + i = 0</span>, <span class="chem">S(4, 4) = 4</span>.<br>(b) The GDC gives <span class="chem">0</span> for <span class="chem">m = 1, …, 5</span> and <span class="chem">6</span> for <span class="chem">m = 6</span>.<br>(c) <span class="chem">S(n, m) = n</span> if <span class="chem">n | m</span>, otherwise <span class="chem">0</span>.<br>(d)(i) <span class="chem">m = qn =&gt; omega^m = e^{2 pi i q} = 1</span>, so all <span class="chem">n</span> terms are 1. (ii) <span class="chem">omega^m = e^{2 pi i m/n} != 1</span> since <span class="chem">m/n ∉ ℤ</span>; then <span class="chem">S = (1 - (omega^m)^n)/(1 - omega^m) = (1 - (omega^n)^m)/(1 - omega^m) = 0</span>.<br>(e) With <span class="chem">x = 2 pi k / n</span>, <span class="chem">e^{2ix} = omega^{2k}</span>. Summing: <span class="chem">n/2 + (1/4)(S(n, 2) + S(n, 2)^*)</span>. For <span class="chem">n &gt;= 3</span>, <span class="chem">n</span> does not divide 2, so <span class="chem">S(n, 2) = 0</span> and the sum is <span class="chem">n/2</span>.<br>(f) For <span class="chem">n = 2</span>, <span class="chem">S(2, 2) = 2</span>, so the sum is <span class="chem">1 + (1/4)(4) = 2</span>, not <span class="chem">n/2 = 1</span>.</p>
      solution: "<p><strong>해석.</strong> 각 합은 공비가 <span class=\"chem\">omega^m</span>인 유한 등비급수이고, 모든 것은 <span class=\"chem\">omega^m = 1</span>인지에 달려 있어요.<br>(a) <span class=\"chem\">S(4, 1) = 1 + i - 1 - i = 0</span>, <span class=\"chem\">S(4, 2) = 1 - 1 + 1 - 1 = 0</span>, <span class=\"chem\">S(4, 3) = 1 - i - 1 + i = 0</span>, <span class=\"chem\">S(4, 4) = 4</span>.<br>(b) GDC로 구하면 <span class=\"chem\">m = 1, …, 5</span>에서는 <span class=\"chem\">0</span>, <span class=\"chem\">m = 6</span>에서는 <span class=\"chem\">6</span>예요.<br>(c) <span class=\"chem\">n | m</span>이면 <span class=\"chem\">S(n, m) = n</span>, 그렇지 않으면 <span class=\"chem\">0</span>.<br>(d)(i) <span class=\"chem\">m = qn =&gt; omega^m = e^{2 pi i q} = 1</span>이므로 <span class=\"chem\">n</span>개의 항이 모두 1이에요. (ii) <span class=\"chem\">m/n ∉ ℤ</span>이므로 <span class=\"chem\">omega^m = e^{2 pi i m/n} != 1</span>이고, 그러면 <span class=\"chem\">S = (1 - (omega^m)^n)/(1 - omega^m) = (1 - (omega^n)^m)/(1 - omega^m) = 0</span>.<br>(e) <span class=\"chem\">x = 2 pi k / n</span>로 놓으면 <span class=\"chem\">e^{2ix} = omega^{2k}</span>이에요. 합하면: <span class=\"chem\">n/2 + (1/4)(S(n, 2) + S(n, 2)^*)</span>. <span class=\"chem\">n &gt;= 3</span>에서는 2가 <span class=\"chem\">n</span>으로 나누어떨어지지 않으므로 <span class=\"chem\">S(n, 2) = 0</span>이고 합은 <span class=\"chem\">n/2</span>예요.<br>(f) <span class=\"chem\">n = 2</span>에서는 <span class=\"chem\">S(2, 2) = 2</span>이므로 합은 <span class=\"chem\">n/2 = 1</span>가 아니라 <span class=\"chem\">1 + (1/4)(4) = 2</span>이에요.</p>",
      // EN: <p>(a) <span class="chem">0, 0, 0, 4</span>.<br>(b) <span class="chem">0, 0, 0, 0, 0, 6</span>.<br>(c) <span class="chem">S(n, m) = n</span> if <span class="chem">n</span> divides <span class="chem">m</span>, and <span class="chem">S(n, m) = 0</span> otherwise.<br>(d)(i) If <span class="chem">m = qn</span> then <span class="chem">omega^m = e^{2 pi i q} = 1</span>, so every term is 1 and <span class="chem">S = n</span>. (ii) Otherwise <span class="chem">omega^m != 1</span>, so <span class="chem">S = (1 - omega^{mn})/(1 - omega^m) = 0</span> because <span class="chem">omega^{mn} = (omega^n)^m = 1</span>.<br>(e) The sum is <span class="chem">n/2 + (1/4)(S(n, 2) + S(n, 2)^*)</span>, and <span class="chem">S(n, 2) = 0</span> for <span class="chem">n &gt;= 3</span>.<br>(f) For <span class="chem">n = 2</span>, <span class="chem">n</span> divides 2, so <span class="chem">S(2, 2) = 2</span> and the sum is <span class="chem">cos^2 0 + cos^2 pi = 2</span>.</p>
      answer: "<p>(a) <span class=\"chem\">0, 0, 0, 4</span>.<br>(b) <span class=\"chem\">0, 0, 0, 0, 0, 6</span>.<br>(c) <span class=\"chem\">m</span>이 <span class=\"chem\">n</span>로 나누어떨어지면 <span class=\"chem\">S(n, m) = n</span>, 그렇지 않으면 <span class=\"chem\">S(n, m) = 0</span>.<br>(d)(i) <span class=\"chem\">m = qn</span>이면 <span class=\"chem\">omega^m = e^{2 pi i q} = 1</span>이므로 모든 항이 1이고 <span class=\"chem\">S = n</span>. (ii) 그렇지 않으면 <span class=\"chem\">omega^m != 1</span>이므로, <span class=\"chem\">omega^{mn} = (omega^n)^m = 1</span>이기 때문에 <span class=\"chem\">S = (1 - omega^{mn})/(1 - omega^m) = 0</span>.<br>(e) 합은 <span class=\"chem\">n/2 + (1/4)(S(n, 2) + S(n, 2)^*)</span>이고, <span class=\"chem\">n &gt;= 3</span>에 대하여 <span class=\"chem\">S(n, 2) = 0</span>.<br>(f) <span class=\"chem\">n = 2</span>에서는 2가 <span class=\"chem\">n</span>로 나누어떨어지므로 <span class=\"chem\">S(2, 2) = 2</span>이고 합은 <span class=\"chem\">cos^2 0 + cos^2 pi = 2</span>.</p>",
      markscheme: [
        // EN: A1: S(4, 1) = S(4, 2) = S(4, 3) = 0.
        "A1: S(4, 1) = S(4, 2) = S(4, 3) = 0.",
        // EN: A1: S(4, 4) = 4.
        "A1: S(4, 4) = 4.",
        // EN: A1: S(6, m) = 0 for m = 1, …, 5 (GDC values like 1e-13 read as 0).
        "A1: m = 1, …, 5에 대하여 S(6, m) = 0 (1e-13 같은 GDC 값은 0으로 읽음).",
        // EN: A1: S(6, 6) = 6.
        "A1: S(6, 6) = 6.",
        // EN: A1: S(n, m) = n when n divides m.
        "A1: m이 n으로 나누어떨어질 때 S(n, m) = n.",
        // EN: A1: S(n, m) = 0 when n does not divide m.
        "A1: m이 n으로 나누어떨어지지 않을 때 S(n, m) = 0.",
        // EN: M1: If m = qn, then ω<sup>m</sup> = e<sup>2πiq</sup> = 1.
        "M1: m = qn이면 ω<sup>m</sup> = e<sup>2πiq</sup> = 1.",
        // EN: A1: Every one of the n terms equals 1, so S(n, m) = n.
        "A1: n개의 항이 모두 1이므로 S(n, m) = n.",
        // EN: M1: If n does not divide m, ω<sup>m</sup> ≠ 1, so the geometric series formula applies with ratio ω<sup>m</sup>.
        "M1: m이 n으로 나누어떨어지지 않으면 ω<sup>m</sup> ≠ 1이므로 공비가 ω<sup>m</sup>인 등비급수 공식을 적용할 수 있음.",
        // EN: A1: S(n, m) = (1 − ω<sup>mn</sup>)/(1 − ω<sup>m</sup>).
        "A1: S(n, m) = (1 − ω<sup>mn</sup>)/(1 − ω<sup>m</sup>).",
        // EN: R1: ω<sup>mn</sup> = (ω<sup>n</sup>)<sup>m</sup> = 1, so S(n, m) = 0.
        "R1: ω<sup>mn</sup> = (ω<sup>n</sup>)<sup>m</sup> = 1이므로 S(n, m) = 0.",
        // EN: M1: Sums the given expression over k: n/2 + ¼ Σ(ω<sup>2k</sup> + ω<sup>−2k</sup>).
        "M1: 주어진 식을 k에 대해 합함: n/2 + ¼ Σ(ω<sup>2k</sup> + ω<sup>−2k</sup>).",
        // EN: A1: Identifies Σω<sup>2k</sup> = S(n, 2) and Σω<sup>−2k</sup> as its conjugate (or S(n, n − 2) with n − 2 ≥ 1, i.e. n ≥ 3).
        "A1: Σω<sup>2k</sup> = S(n, 2)이고 Σω<sup>−2k</sup>가 그 켤레임을 파악함 (또는 S(n, n − 2), 단 n − 2 ≥ 1, 즉 n ≥ 3).",
        // EN: R1: For n ≥ 3, n does not divide 2 (nor n − 2), so both sums are 0.
        "R1: n ≥ 3이면 2는 n으로 나누어떨어지지 않으므로 (n − 2도 마찬가지) 두 합 모두 0.",
        // EN: A1: Total n/2 (AG).
        "A1: 합계 n/2 (AG).",
        // EN: R1: For n = 2, n divides 2, so S(2, 2) = 2 ≠ 0.
        "R1: n = 2이면 2가 n으로 나누어떨어지므로 S(2, 2) = 2 ≠ 0.",
        // EN: A1: The sum is ½ × 2 + ¼(2 + 2) = 2 (check: cos²0 + cos²π = 2).
        "A1: 합은 ½ × 2 + ¼(2 + 2) = 2 (확인: cos²0 + cos²π = 2).",
      ],
    },

    // ── t1-4-q058 · short · challenge · AHL · AHL 1.14 · 18 marks
    "t1-4-q058": {
      // EN: This investigation looks at writing <span class="chem">cos(n theta)</span> as a polynomial in <span class="chem">cos theta</span>. For <span class="chem">n ∈ ℕ</span>, let <span class="chem">T_n</span> be the polynomial with <span class="chem">cos(n theta) = T_n(cos theta)</span> for all <span class="chem">theta</span>.<br>(a) Write down <span class="chem">T_1(x)</span> and <span class="chem">T_2(x)</span>. [2 marks]<br>(b) Use De Moivre's theorem to show that <span class="chem">T_3(x) = 4x^3 - 3x</span>. [3 marks]<br>(c) By considering <span class="chem">e^{i(n+1)theta} + e^{i(n-1)theta}</span>, show that <span class="chem">cos((n + 1)theta) + cos((n - 1)theta) = 2 cos theta cos(n theta)</span>, and deduce that <span class="chem">T_{n+1}(x) = 2x T_n(x) - T_{n-1}(x)</span> for <span class="chem">n &gt;= 1</span>. [3 marks]<br>(d) Hence find <span class="chem">T_4(x)</span> and <span class="chem">T_5(x)</span>. [2 marks]<br>(e) Conjecture the leading coefficient of <span class="chem">T_n(x)</span> for <span class="chem">n &gt;= 1</span>, and explain how the result of (c) supports your conjecture. [2 marks]<br>(f) (i) By putting <span class="chem">x = cos theta</span>, find the five solutions of <span class="chem">32x^5 - 40x^3 + 10x - 1 = 0</span> exactly, in the form <span class="chem">cos(k pi / 15)</span>. [3 marks] (ii) Use your GDC to check your largest solution, correct to 3 significant figures. [1 mark]<br>(g) Hence find the exact value of <span class="chem">cos(pi/15) cos(7pi/15) cos(11pi/15) cos(13pi/15)</span>. [2 marks]
      stem: "이 탐구에서는 <span class=\"chem\">cos(n theta)</span>을 <span class=\"chem\">cos theta</span>에 대한 다항식으로 나타내는 것을 살펴본다. <span class=\"chem\">n ∈ ℕ</span>에 대하여, 모든 <span class=\"chem\">theta</span>에 대해 <span class=\"chem\">cos(n theta) = T_n(cos theta)</span>가 성립하는 다항식을 <span class=\"chem\">T_n</span>라 하자.<br>(a) <span class=\"chem\">T_1(x)</span>과 <span class=\"chem\">T_2(x)</span>을 쓰시오 (Write down). [2 marks]<br>(b) 드 무아브르 정리를 이용하여 <span class=\"chem\">T_3(x) = 4x^3 - 3x</span>임을 보이시오 (Show that). [3 marks]<br>(c) <span class=\"chem\">e^{i(n+1)theta} + e^{i(n-1)theta}</span>을 생각하여 <span class=\"chem\">cos((n + 1)theta) + cos((n - 1)theta) = 2 cos theta cos(n theta)</span>임을 보이고, <span class=\"chem\">n &gt;= 1</span>에 대하여 <span class=\"chem\">T_{n+1}(x) = 2x T_n(x) - T_{n-1}(x)</span>임을 유도하시오 (Deduce). [3 marks]<br>(d) 이를 이용하여 (Hence) <span class=\"chem\">T_4(x)</span>와 <span class=\"chem\">T_5(x)</span>를 구하시오. [2 marks]<br>(e) <span class=\"chem\">n &gt;= 1</span>에 대하여 <span class=\"chem\">T_n(x)</span>의 최고차항의 계수를 추측하고 (Conjecture), (c)의 결과가 추측을 어떻게 뒷받침하는지 설명하시오 (Explain). [2 marks]<br>(f) (i) <span class=\"chem\">x = cos theta</span>로 놓아 <span class=\"chem\">32x^5 - 40x^3 + 10x - 1 = 0</span>의 다섯 해를 <span class=\"chem\">cos(k pi / 15)</span> 꼴의 정확한 값으로 구하시오 (Find). [3 marks] (ii) GDC를 이용하여 가장 큰 해를 확인하고, 유효숫자 3자리까지 나타내시오. [1 mark]<br>(g) 이를 이용하여 (Hence) <span class=\"chem\">cos(pi/15) cos(7pi/15) cos(11pi/15) cos(13pi/15)</span>의 정확한 값을 구하시오. [2 marks]",
      hints: [
        // EN: Decode: the investigation builds a family of multiple-angle identities. Part (c) gives a recurrence, so after <span class="chem">T_3</span> you never need to expand a binomial again. Part (f) is the payoff: an ugly quintic is really <span class="chem">cos(5 theta) = 1/2</span>.
        "해석: 이 탐구는 배각 항등식들의 계열을 만들어요. (c)에서 점화식을 얻으므로 <span class=\"chem\">T_3</span> 이후로는 이항전개를 다시 할 필요가 없어요. (f)가 그 성과예요: 복잡해 보이는 오차방정식이 사실은 <span class=\"chem\">cos(5 theta) = 1/2</span>예요.",
        // EN: For (c), take out the factor <span class="chem">e^{in theta}</span>; what remains is <span class="chem">2 cos theta</span>. Then compare real parts.
        "(c)에서는 인수 <span class=\"chem\">e^{in theta}</span>을 묶어 내세요. 남는 것은 <span class=\"chem\">2 cos theta</span>예요. 그다음 실수부를 비교하세요.",
        // EN: For (f), <span class="chem">32x^5 - 40x^3 + 10x = 2 T_5(x)</span>. For five different values of <span class="chem">x = cos theta</span>, take five different <span class="chem">theta</span> values in <span class="chem">[0, pi]</span>.
        "(f)에서는 <span class=\"chem\">32x^5 - 40x^3 + 10x = 2 T_5(x)</span>이에요. 서로 다른 다섯 개의 <span class=\"chem\">x = cos theta</span> 값을 얻으려면 <span class=\"chem\">[0, pi]</span>에서 서로 다른 다섯 개의 <span class=\"chem\">theta</span> 값을 택하세요.",
        // EN: For (g), the product of the roots of <span class="chem">a x^5 + … + f = 0</span> is <span class="chem">-f/a</span>. One of the five roots is <span class="chem">cos(pi/3)</span>.
        "(g)에서 <span class=\"chem\">a x^5 + … + f = 0</span>의 근의 곱은 <span class=\"chem\">-f/a</span>예요. 다섯 근 중 하나는 <span class=\"chem\">cos(pi/3)</span>이에요.",
      ],
      // EN: <p><strong>Decode.</strong> De Moivre gives a few cases, Euler's form gives a recurrence that produces all of them, and the last part spots a hidden <span class="chem">cos(5 theta)</span>.<br>(a) <span class="chem">T_1 = x</span>, <span class="chem">T_2 = 2x^2 - 1</span>.<br>(b) <span class="chem">(c + is)^3 = c^3 + 3ic^2 s - 3cs^2 - is^3</span>; real part <span class="chem">c^3 - 3c(1 - c^2) = 4c^3 - 3c</span>.<br>(c) <span class="chem">e^{i(n+1)theta} + e^{i(n-1)theta} = e^{in theta}(2 cos theta)</span>. Real parts: <span class="chem">cos((n+1)theta) + cos((n-1)theta) = 2 cos theta cos(n theta)</span>; with <span class="chem">x = cos theta</span> this is <span class="chem">T_{n+1}(x) + T_{n-1}(x) = 2x T_n(x)</span>.<br>(d) <span class="chem">T_4 = 2x(4x^3 - 3x) - (2x^2 - 1) = 8x^4 - 8x^2 + 1</span>; <span class="chem">T_5 = 2x(8x^4 - 8x^2 + 1) - (4x^3 - 3x) = 16x^5 - 20x^3 + 5x</span>.<br>(e) Leading coefficients <span class="chem">1, 2, 4, 8, 16</span>: conjecture <span class="chem">2^{n-1}</span>. The term of highest degree in <span class="chem">T_{n+1}</span> comes only from <span class="chem">2x T_n</span>, which doubles it.<br>(f)(i) <span class="chem">32x^5 - 40x^3 + 10x - 1 = 0 &lt;=&gt; T_5(x) = 1/2 &lt;=&gt; cos(5 theta) = 1/2</span>. For <span class="chem">theta ∈ [0, pi]</span>: <span class="chem">5 theta = pi/3, 5pi/3, 7pi/3, 11pi/3, 13pi/3</span>, giving <span class="chem">x = cos(pi/15), cos(pi/3), cos(7pi/15), cos(11pi/15), cos(13pi/15)</span>, which are five different numbers. (ii) GDC: largest root <span class="chem">≈ 0.978 = cos(pi/15)</span>.<br>(g) The product of all five roots is <span class="chem">-(-1)/32 = 1/32</span>. Dividing by <span class="chem">cos(pi/3) = 1/2</span>: the required product is <span class="chem">1/16</span>.</p>
      solution: "<p><strong>해석.</strong> 드 무아브르 정리로 몇 가지 경우를 얻고, 오일러 형식으로 그 모두를 만드는 점화식을 얻으며, 마지막 문항에서는 숨겨진 <span class=\"chem\">cos(5 theta)</span>을 찾아내요.<br>(a) <span class=\"chem\">T_1 = x</span>, <span class=\"chem\">T_2 = 2x^2 - 1</span>.<br>(b) <span class=\"chem\">(c + is)^3 = c^3 + 3ic^2 s - 3cs^2 - is^3</span>; 실수부 <span class=\"chem\">c^3 - 3c(1 - c^2) = 4c^3 - 3c</span>.<br>(c) <span class=\"chem\">e^{i(n+1)theta} + e^{i(n-1)theta} = e^{in theta}(2 cos theta)</span>. 실수부를 비교하면: <span class=\"chem\">cos((n+1)theta) + cos((n-1)theta) = 2 cos theta cos(n theta)</span>; <span class=\"chem\">x = cos theta</span>로 놓으면 이는 <span class=\"chem\">T_{n+1}(x) + T_{n-1}(x) = 2x T_n(x)</span>예요.<br>(d) <span class=\"chem\">T_4 = 2x(4x^3 - 3x) - (2x^2 - 1) = 8x^4 - 8x^2 + 1</span>; <span class=\"chem\">T_5 = 2x(8x^4 - 8x^2 + 1) - (4x^3 - 3x) = 16x^5 - 20x^3 + 5x</span>.<br>(e) 최고차항의 계수는 <span class=\"chem\">1, 2, 4, 8, 16</span>이므로 <span class=\"chem\">2^{n-1}</span>이라고 추측해요. <span class=\"chem\">T_{n+1}</span>의 최고차항은 <span class=\"chem\">2x T_n</span>에서만 나오고, 이것이 계수를 2배로 만들어요.<br>(f)(i) <span class=\"chem\">32x^5 - 40x^3 + 10x - 1 = 0 &lt;=&gt; T_5(x) = 1/2 &lt;=&gt; cos(5 theta) = 1/2</span>. <span class=\"chem\">theta ∈ [0, pi]</span>에서: <span class=\"chem\">5 theta = pi/3, 5pi/3, 7pi/3, 11pi/3, 13pi/3</span>이므로 <span class=\"chem\">x = cos(pi/15), cos(pi/3), cos(7pi/15), cos(11pi/15), cos(13pi/15)</span>를 얻고, 이는 서로 다른 다섯 개의 수예요. (ii) GDC: 가장 큰 근 <span class=\"chem\">≈ 0.978 = cos(pi/15)</span>.<br>(g) 다섯 근 전체의 곱은 <span class=\"chem\">-(-1)/32 = 1/32</span>이에요. <span class=\"chem\">cos(pi/3) = 1/2</span>로 나누면 구하는 곱은 <span class=\"chem\">1/16</span>이에요.</p>",
      // EN: <p>(a) <span class="chem">T_1(x) = x</span>, <span class="chem">T_2(x) = 2x^2 - 1</span>.<br>(b) <span class="chem">cos(3 theta) = Re(c + is)^3 = c^3 - 3cs^2 = 4c^3 - 3c</span>.<br>(c) <span class="chem">e^{i(n+1)theta} + e^{i(n-1)theta} = e^{in theta}(e^{i theta} + e^{-i theta}) = 2 cos theta e^{in theta}</span>; take real parts.<br>(d) <span class="chem">T_4(x) = 8x^4 - 8x^2 + 1</span>, <span class="chem">T_5(x) = 16x^5 - 20x^3 + 5x</span>.<br>(e) <span class="chem">2^{n-1}</span>: the recurrence doubles the leading coefficient at each step, starting from 1.<br>(f)(i) The equation is <span class="chem">T_5(x) = 1/2</span>, i.e. <span class="chem">cos(5 theta) = 1/2</span>: <span class="chem">x = cos(pi/15), cos(5pi/15), cos(7pi/15), cos(11pi/15), cos(13pi/15)</span>. (ii) <span class="chem">cos(pi/15) ≈ 0.978</span>.<br>(g) The product of the five roots is <span class="chem">1/32</span>; dividing by <span class="chem">cos(pi/3) = 1/2</span> gives <span class="chem">1/16</span>.</p>
      answer: "<p>(a) <span class=\"chem\">T_1(x) = x</span>, <span class=\"chem\">T_2(x) = 2x^2 - 1</span>.<br>(b) <span class=\"chem\">cos(3 theta) = Re(c + is)^3 = c^3 - 3cs^2 = 4c^3 - 3c</span>.<br>(c) <span class=\"chem\">e^{i(n+1)theta} + e^{i(n-1)theta} = e^{in theta}(e^{i theta} + e^{-i theta}) = 2 cos theta e^{in theta}</span>; 실수부를 취한다.<br>(d) <span class=\"chem\">T_4(x) = 8x^4 - 8x^2 + 1</span>, <span class=\"chem\">T_5(x) = 16x^5 - 20x^3 + 5x</span>.<br>(e) <span class=\"chem\">2^{n-1}</span>: 점화식은 각 단계마다 최고차항의 계수를 2배로 하며, 1에서 시작한다.<br>(f)(i) 방정식은 <span class=\"chem\">T_5(x) = 1/2</span>, 즉 <span class=\"chem\">cos(5 theta) = 1/2</span>: <span class=\"chem\">x = cos(pi/15), cos(5pi/15), cos(7pi/15), cos(11pi/15), cos(13pi/15)</span>. (ii) <span class=\"chem\">cos(pi/15) ≈ 0.978</span>.<br>(g) 다섯 근의 곱은 <span class=\"chem\">1/32</span>이고, <span class=\"chem\">cos(pi/3) = 1/2</span>로 나누면 <span class=\"chem\">1/16</span>.</p>",
      markscheme: [
        // EN: A1: T₁(x) = x.
        "A1: T₁(x) = x.",
        // EN: A1: T₂(x) = 2x² − 1 (from cos 2θ = 2cos²θ − 1).
        "A1: T₂(x) = 2x² − 1 (cos 2θ = 2cos²θ − 1로부터).",
        // EN: M1: cos 3θ = Re[(cos θ + i sin θ)³], expanded binomially.
        "M1: cos 3θ = Re[(cos θ + i sin θ)³]로 놓고 이항전개함.",
        // EN: A1: cos 3θ = c³ − 3cs².
        "A1: cos 3θ = c³ − 3cs².",
        // EN: A1: Uses s² = 1 − c² to reach 4c³ − 3c (AG).
        "A1: s² = 1 − c²를 이용해 4c³ − 3c를 얻음 (AG).",
        // EN: M1: Factorises e<sup>i(n+1)θ</sup> + e<sup>i(n−1)θ</sup> = e<sup>inθ</sup>(e<sup>iθ</sup> + e<sup>−iθ</sup>) = 2cos θ e<sup>inθ</sup>.
        "M1: e<sup>i(n+1)θ</sup> + e<sup>i(n−1)θ</sup> = e<sup>inθ</sup>(e<sup>iθ</sup> + e<sup>−iθ</sup>) = 2cos θ e<sup>inθ</sup>로 인수분해함.",
        // EN: A1: Equates real parts: cos(n + 1)θ + cos(n − 1)θ = 2cos θ cos nθ (AG).
        "A1: 실수부를 비교함: cos(n + 1)θ + cos(n − 1)θ = 2cos θ cos nθ (AG).",
        // EN: R1: Writes each cosine as T<sub>k</sub>(cos θ) with x = cos θ, so T<sub>n+1</sub>(x) = 2xT<sub>n</sub>(x) − T<sub>n−1</sub>(x) (AG).
        "R1: x = cos θ로 놓고 각 코사인을 T<sub>k</sub>(cos θ)로 쓰므로 T<sub>n+1</sub>(x) = 2xT<sub>n</sub>(x) − T<sub>n−1</sub>(x) (AG).",
        // EN: A1: T₄(x) = 2x(4x³ − 3x) − (2x² − 1) = 8x⁴ − 8x² + 1.
        "A1: T₄(x) = 2x(4x³ − 3x) − (2x² − 1) = 8x⁴ − 8x² + 1.",
        // EN: A1: T₅(x) = 2x(8x⁴ − 8x² + 1) − (4x³ − 3x) = 16x⁵ − 20x³ + 5x.
        "A1: T₅(x) = 2x(8x⁴ − 8x² + 1) − (4x³ − 3x) = 16x⁵ − 20x³ + 5x.",
        // EN: A1: Conjecture: leading coefficient 2<sup>n−1</sup>.
        "A1: 추측: 최고차항의 계수는 2<sup>n−1</sup>.",
        // EN: R1: In the recurrence only 2xT<sub>n</sub> contributes the degree n + 1 term, so each step doubles the leading coefficient, starting from 1 for T₁.
        "R1: 점화식에서 n + 1차항은 2xT<sub>n</sub>에서만 나오므로, 각 단계마다 최고차항의 계수가 2배가 되며 T₁의 1에서 시작함.",
        // EN: M1: Divides by 2 and recognises T₅(x) = ½, i.e. cos 5θ = ½.
        "M1: 2로 나누고 T₅(x) = ½, 즉 cos 5θ = ½임을 알아냄.",
        // EN: A1: 5θ = π/3, 5π/3, 7π/3, 11π/3, 13π/3 for θ in [0, π].
        "A1: [0, π]의 θ에 대하여 5θ = π/3, 5π/3, 7π/3, 11π/3, 13π/3.",
        // EN: A1: x = cos(π/15), cos(5π/15), cos(7π/15), cos(11π/15), cos(13π/15).
        "A1: x = cos(π/15), cos(5π/15), cos(7π/15), cos(11π/15), cos(13π/15).",
        // EN: A1: The GDC gives the largest root as 0.978 = cos(π/15).
        "A1: GDC로 구한 가장 큰 근은 0.978 = cos(π/15).",
        // EN: M1: Product of the roots of 32x⁵ − 40x³ + 10x − 1 = 0 is −(−1)/32 = 1/32.
        "M1: 32x⁵ − 40x³ + 10x − 1 = 0의 근의 곱은 −(−1)/32 = 1/32.",
        // EN: A1: Divides by cos(5π/15) = ½ to get 1/16.
        "A1: cos(5π/15) = ½로 나누어 1/16을 얻음.",
      ],
    },

    // ── t1-4-q059 · short · challenge · AHL · AHL 1.14 · 17 marks
    "t1-4-q059": {
      // EN: This investigation looks at distances between the vertices of a regular polygon. For <span class="chem">n &gt;= 2</span>, the <span class="chem">n</span>-th roots of unity <span class="chem">1, omega, omega^2, …, omega^{n-1}</span>, where <span class="chem">omega = e^{2 pi i / n}</span>, are the vertices of a regular <span class="chem">n</span>-gon. Let <span class="chem">P_n</span> be the product of the distances from the vertex <span class="chem">1</span> to each of the other <span class="chem">n - 1</span> vertices: <span class="chem">P_n = |1 - omega| × |1 - omega^2| × … × |1 - omega^{n-1}|</span>.<br>(a) Find the exact values of <span class="chem">P_3</span> and <span class="chem">P_4</span>. [3 marks]<br>(b) Use your GDC to find <span class="chem">P_5</span> and <span class="chem">P_6</span>. [2 marks]<br>(c) Write down a conjecture for <span class="chem">P_n</span>. [1 mark]<br>(d) (i) Explain why <span class="chem">z^n - 1 = (z - 1)(z - omega)(z - omega^2) … (z - omega^{n-1})</span>. [1 mark] (ii) Hence show that <span class="chem">1 + z + z^2 + … + z^{n-1} = (z - omega)(z - omega^2) … (z - omega^{n-1})</span>. [2 marks] (iii) Hence prove your conjecture. [2 marks]<br>(e) Show that <span class="chem">|1 - e^{i theta}| = 2 sin(theta/2)</span> for <span class="chem">0 &lt; theta &lt; 2pi</span>. [3 marks]<br>(f) Hence show that <span class="chem">sin(pi/n) sin(2pi/n) … sin((n - 1)pi/n) = n / 2^{n-1}</span>, and find the exact value of <span class="chem">sin(pi/6) sin(2pi/6) sin(3pi/6) sin(4pi/6) sin(5pi/6)</span>. [3 marks]
      stem: "이 탐구에서는 정다각형의 꼭짓점 사이의 거리를 살펴본다. <span class=\"chem\">n &gt;= 2</span>에 대하여, 1의 <span class=\"chem\">n</span>제곱근 <span class=\"chem\">1, omega, omega^2, …, omega^{n-1}</span> (<span class=\"chem\">omega = e^{2 pi i / n}</span>)은 정<span class=\"chem\">n</span>각형의 꼭짓점이다. 꼭짓점 <span class=\"chem\">1</span>에서 나머지 <span class=\"chem\">n - 1</span>개의 꼭짓점 각각까지의 거리의 곱을 <span class=\"chem\">P_n</span>이라 하자: <span class=\"chem\">P_n = |1 - omega| × |1 - omega^2| × … × |1 - omega^{n-1}|</span>.<br>(a) <span class=\"chem\">P_3</span>과 <span class=\"chem\">P_4</span>의 정확한 값을 구하시오 (Find). [3 marks]<br>(b) GDC를 이용하여 <span class=\"chem\">P_5</span>와 <span class=\"chem\">P_6</span>을 구하시오. [2 marks]<br>(c) <span class=\"chem\">P_n</span>에 대한 추측을 쓰시오 (Write down). [1 mark]<br>(d) (i) <span class=\"chem\">z^n - 1 = (z - 1)(z - omega)(z - omega^2) … (z - omega^{n-1})</span>인 이유를 설명하시오 (Explain). [1 mark] (ii) 이를 이용하여 (Hence) <span class=\"chem\">1 + z + z^2 + … + z^{n-1} = (z - omega)(z - omega^2) … (z - omega^{n-1})</span>임을 보이시오. [2 marks] (iii) 이를 이용하여 (Hence) 추측을 증명하시오 (Prove). [2 marks]<br>(e) <span class=\"chem\">0 &lt; theta &lt; 2pi</span>에 대하여 <span class=\"chem\">|1 - e^{i theta}| = 2 sin(theta/2)</span>임을 보이시오 (Show that). [3 marks]<br>(f) 이를 이용하여 (Hence) <span class=\"chem\">sin(pi/n) sin(2pi/n) … sin((n - 1)pi/n) = n / 2^{n-1}</span>임을 보이고, <span class=\"chem\">sin(pi/6) sin(2pi/6) sin(3pi/6) sin(4pi/6) sin(5pi/6)</span>의 정확한 값을 구하시오. [3 marks]",
      hints: [
        // EN: Decode: a product of lengths is the modulus of a product of complex numbers. The real question is: what is <span class="chem">(1 - omega)(1 - omega^2)…(1 - omega^{n-1})</span>? Factorising <span class="chem">z^n - 1</span> answers it.
        "해석: 길이의 곱은 복소수의 곱의 절댓값이에요. 진짜 질문은 \"<span class=\"chem\">(1 - omega)(1 - omega^2)…(1 - omega^{n-1})</span>은 얼마인가?\"예요. <span class=\"chem\">z^n - 1</span>를 인수분해하면 답을 알 수 있어요.",
        // EN: For (b), multiply the moduli <span class="chem">|1 - e^{2 pi i k/n}|</span> for <span class="chem">k = 1, …, n - 1</span> on the GDC, or use <span class="mono">prod(abs(1 − e^(2πik/n)), k, 1, n − 1)</span>.
        "(b)에서는 GDC에서 <span class=\"chem\">k = 1, …, n - 1</span>에 대하여 절댓값 <span class=\"chem\">|1 - e^{2 pi i k/n}|</span>을 곱하거나, <span class=\"mono\">prod(abs(1 − e^(2πik/n)), k, 1, n − 1)</span>을 이용하세요.",
        // EN: For (d)(iii), put <span class="chem">z = 1</span> into the identity of (d)(ii). The left side becomes <span class="chem">1 + 1 + … + 1</span>.
        "(d)(iii)에서는 (d)(ii)의 항등식에 <span class=\"chem\">z = 1</span>을 대입하세요. 좌변은 <span class=\"chem\">1 + 1 + … + 1</span>가 돼요.",
        // EN: For (e), use <span class="chem">1 - cos theta = 2 sin^2(theta/2)</span>. For (f), the angle of <span class="chem">omega^k</span> is <span class="chem">2 pi k / n</span>, so half of it is <span class="chem">k pi / n</span>.
        "(e)에서는 <span class=\"chem\">1 - cos theta = 2 sin^2(theta/2)</span>을 이용하세요. (f)에서 <span class=\"chem\">omega^k</span>의 각은 <span class=\"chem\">2 pi k / n</span>이므로 그 절반은 <span class=\"chem\">k pi / n</span>예요.",
      ],
      // EN: <p><strong>Decode.</strong> Turn the geometry (a product of distances) into algebra (the modulus of a product of linear factors of <span class="chem">z^n - 1</span>).<br>(a) For <span class="chem">n = 3</span>: <span class="chem">|1 - omega| = |3/2 - (sqrt(3)/2)i| = sqrt(3)</span>, and the same for <span class="chem">omega^2</span>, so <span class="chem">P_3 = 3</span>. For <span class="chem">n = 4</span>: <span class="chem">sqrt(2) × 2 × sqrt(2) = 4</span>.<br>(b) GDC: <span class="chem">P_5 = 5</span>, <span class="chem">P_6 = 6</span>. (c) <span class="chem">P_n = n</span>.<br>(d)(i) The <span class="chem">n</span> numbers <span class="chem">omega^k</span> are distinct roots of <span class="chem">z^n - 1</span>, which has degree <span class="chem">n</span> and leading coefficient 1. (ii) <span class="chem">z^n - 1 = (z - 1)(1 + z + … + z^{n-1})</span>; comparing with (i) and cancelling <span class="chem">z - 1</span> gives the result (both sides are polynomials that agree for every <span class="chem">z != 1</span>, so they are identical). (iii) At <span class="chem">z = 1</span>: <span class="chem">n = (1 - omega)…(1 - omega^{n-1})</span>. Taking moduli, <span class="chem">P_n = n</span>.<br>(e) <span class="chem">|1 - e^{i theta}|^2 = 1 - 2 cos theta + cos^2 theta + sin^2 theta = 2 - 2 cos theta = 4 sin^2(theta/2)</span>, and <span class="chem">sin(theta/2) &gt; 0</span> on <span class="chem">(0, 2pi)</span>.<br>(f) <span class="chem">|1 - omega^k| = 2 sin(k pi/n)</span>, so <span class="chem">n = P_n = 2^{n-1} sin(pi/n)…sin((n - 1)pi/n)</span>. For <span class="chem">n = 6</span>: <span class="chem">6/32 = 3/16</span> (check: <span class="chem">(1/2)(sqrt(3)/2)(1)(sqrt(3)/2)(1/2) = 3/16</span>).</p>
      solution: "<p><strong>해석.</strong> 기하(거리의 곱)를 대수(<span class=\"chem\">z^n - 1</span>의 일차 인수들의 곱의 절댓값)로 바꿔요.<br>(a) <span class=\"chem\">n = 3</span>일 때: <span class=\"chem\">|1 - omega| = |3/2 - (sqrt(3)/2)i| = sqrt(3)</span>이고 <span class=\"chem\">omega^2</span>도 같으므로 <span class=\"chem\">P_3 = 3</span>. <span class=\"chem\">n = 4</span>일 때: <span class=\"chem\">sqrt(2) × 2 × sqrt(2) = 4</span>.<br>(b) GDC: <span class=\"chem\">P_5 = 5</span>, <span class=\"chem\">P_6 = 6</span>. (c) <span class=\"chem\">P_n = n</span>.<br>(d)(i) <span class=\"chem\">n</span>개의 수 <span class=\"chem\">omega^k</span>는 <span class=\"chem\">z^n - 1</span>의 서로 다른 근이고, 이 다항식은 차수가 <span class=\"chem\">n</span>이고 최고차항의 계수가 1이에요. (ii) <span class=\"chem\">z^n - 1 = (z - 1)(1 + z + … + z^{n-1})</span>; (i)과 비교하여 <span class=\"chem\">z - 1</span>을 약분하면 결과를 얻어요 (양변은 모든 <span class=\"chem\">z != 1</span>에서 일치하는 다항식이므로 항등적으로 같아요). (iii) <span class=\"chem\">z = 1</span>일 때: <span class=\"chem\">n = (1 - omega)…(1 - omega^{n-1})</span>. 절댓값을 취하면 <span class=\"chem\">P_n = n</span>.<br>(e) <span class=\"chem\">|1 - e^{i theta}|^2 = 1 - 2 cos theta + cos^2 theta + sin^2 theta = 2 - 2 cos theta = 4 sin^2(theta/2)</span>이고, <span class=\"chem\">(0, 2pi)</span>에서 <span class=\"chem\">sin(theta/2) &gt; 0</span>.<br>(f) <span class=\"chem\">|1 - omega^k| = 2 sin(k pi/n)</span>이므로 <span class=\"chem\">n = P_n = 2^{n-1} sin(pi/n)…sin((n - 1)pi/n)</span>. <span class=\"chem\">n = 6</span>일 때: <span class=\"chem\">6/32 = 3/16</span> (확인: <span class=\"chem\">(1/2)(sqrt(3)/2)(1)(sqrt(3)/2)(1/2) = 3/16</span>).</p>",
      // EN: <p>(a) <span class="chem">P_3 = sqrt(3) × sqrt(3) = 3</span>; <span class="chem">P_4 = sqrt(2) × 2 × sqrt(2) = 4</span>.<br>(b) <span class="chem">P_5 = 5</span>, <span class="chem">P_6 = 6</span>.<br>(c) <span class="chem">P_n = n</span>.<br>(d)(i) The <span class="chem">n</span> roots of the degree-<span class="chem">n</span> monic polynomial <span class="chem">z^n - 1</span> are exactly the <span class="chem">n</span> distinct roots of unity. (ii) Also <span class="chem">z^n - 1 = (z - 1)(1 + z + … + z^{n-1})</span>; cancel the factor <span class="chem">z - 1</span>. (iii) Put <span class="chem">z = 1</span>: <span class="chem">n = (1 - omega)…(1 - omega^{n-1})</span>; take moduli.<br>(e) <span class="chem">|1 - e^{i theta}|^2 = (1 - cos theta)^2 + sin^2 theta = 2 - 2 cos theta = 4 sin^2(theta/2)</span>, and <span class="chem">sin(theta/2) &gt; 0</span>.<br>(f) <span class="chem">|1 - omega^k| = 2 sin(k pi / n)</span>, so <span class="chem">2^{n-1} × product = n</span>; for <span class="chem">n = 6</span> the product is <span class="chem">6/32 = 3/16</span>.</p>
      answer: "<p>(a) <span class=\"chem\">P_3 = sqrt(3) × sqrt(3) = 3</span>; <span class=\"chem\">P_4 = sqrt(2) × 2 × sqrt(2) = 4</span>.<br>(b) <span class=\"chem\">P_5 = 5</span>, <span class=\"chem\">P_6 = 6</span>.<br>(c) <span class=\"chem\">P_n = n</span>.<br>(d)(i) 최고차항의 계수가 1인 <span class=\"chem\">n</span>차 다항식 <span class=\"chem\">z^n - 1</span>의 <span class=\"chem\">n</span>개의 근은 정확히 <span class=\"chem\">n</span>개의 서로 다른 1의 거듭제곱근이다. (ii) 또 <span class=\"chem\">z^n - 1 = (z - 1)(1 + z + … + z^{n-1})</span>; 인수 <span class=\"chem\">z - 1</span>을 약분한다. (iii) <span class=\"chem\">z = 1</span>를 대입: <span class=\"chem\">n = (1 - omega)…(1 - omega^{n-1})</span>; 절댓값을 취한다.<br>(e) <span class=\"chem\">|1 - e^{i theta}|^2 = (1 - cos theta)^2 + sin^2 theta = 2 - 2 cos theta = 4 sin^2(theta/2)</span>이고 <span class=\"chem\">sin(theta/2) &gt; 0</span>.<br>(f) <span class=\"chem\">|1 - omega^k| = 2 sin(k pi / n)</span>이므로 <span class=\"chem\">2^{n-1} × product = n</span>; <span class=\"chem\">n = 6</span>일 때 곱은 <span class=\"chem\">6/32 = 3/16</span>.</p>",
      markscheme: [
        // EN: M1: Uses |1 − ω| = |1 − ω²| = √3 for n = 3 (e.g. 1 − (−½ + (√3/2)i) = 3/2 − (√3/2)i).
        "M1: n = 3일 때 |1 − ω| = |1 − ω²| = √3을 이용함 (예: 1 − (−½ + (√3/2)i) = 3/2 − (√3/2)i).",
        // EN: A1: P₃ = 3.
        "A1: P₃ = 3.",
        // EN: A1: P₄ = |1 − i| × |1 + 1| × |1 + i| = √2 × 2 × √2 = 4.
        "A1: P₄ = |1 − i| × |1 + 1| × |1 + i| = √2 × 2 × √2 = 4.",
        // EN: A1: P₅ = 5 (GDC).
        "A1: P₅ = 5 (GDC).",
        // EN: A1: P₆ = 6 (GDC).
        "A1: P₆ = 6 (GDC).",
        // EN: A1: Conjecture P<sub>n</sub> = n.
        "A1: 추측 P<sub>n</sub> = n.",
        // EN: R1: The ω<sup>k</sup>, k = 0, …, n − 1, are n distinct roots of the monic degree-n polynomial z<sup>n</sup> − 1, so it factorises fully over them.
        "R1: ω<sup>k</sup> (k = 0, …, n − 1)은 최고차항의 계수가 1인 n차 다항식 z<sup>n</sup> − 1의 서로 다른 n개의 근이므로, 이 다항식은 이 근들로 완전히 인수분해됨.",
        // EN: M1: Uses z<sup>n</sup> − 1 = (z − 1)(1 + z + … + z<sup>n−1</sup>).
        "M1: z<sup>n</sup> − 1 = (z − 1)(1 + z + … + z<sup>n−1</sup>)를 이용함.",
        // EN: A1: Cancels (z − 1) for z ≠ 1, and the identity of polynomials extends to z = 1 (AG).
        "A1: z ≠ 1에서 (z − 1)을 약분하고, 다항식의 항등식은 z = 1까지 확장됨 (AG).",
        // EN: M1: Substitutes z = 1: (1 − ω)(1 − ω²)…(1 − ω<sup>n−1</sup>) = n.
        "M1: z = 1을 대입함: (1 − ω)(1 − ω²)…(1 − ω<sup>n−1</sup>) = n.",
        // EN: A1: Takes moduli: P<sub>n</sub> = n.
        "A1: 절댓값을 취함: P<sub>n</sub> = n.",
        // EN: M1: |1 − e<sup>iθ</sup>|² = (1 − cos θ)² + sin²θ.
        "M1: |1 − e<sup>iθ</sup>|² = (1 − cos θ)² + sin²θ.",
        // EN: A1: = 2 − 2cos θ = 4sin²(θ/2) (using cos θ = 1 − 2sin²(θ/2)).
        "A1: = 2 − 2cos θ = 4sin²(θ/2) (cos θ = 1 − 2sin²(θ/2) 이용).",
        // EN: R1: sin(θ/2) > 0 for 0 < θ < 2π, so |1 − e<sup>iθ</sup>| = 2sin(θ/2) (AG).
        "R1: sin(θ/2) > 0 (0 < θ < 2π일 때)이므로 |1 − e<sup>iθ</sup>| = 2sin(θ/2) (AG).",
        // EN: M1: |1 − ω<sup>k</sup>| = 2sin(kπ/n), so P<sub>n</sub> = 2<sup>n−1</sup> × Π sin(kπ/n).
        "M1: |1 − ω<sup>k</sup>| = 2sin(kπ/n)이므로 P<sub>n</sub> = 2<sup>n−1</sup> × Π sin(kπ/n).",
        // EN: A1: Π sin(kπ/n) = n/2<sup>n−1</sup> (AG).
        "A1: Π sin(kπ/n) = n/2<sup>n−1</sup> (AG).",
        // EN: A1: For n = 6: 6/2⁵ = 3/16.
        "A1: n = 6일 때: 6/2⁵ = 3/16.",
      ],
    },

    // ── t1-4-q060 · short · challenge · AHL · AHL 1.14, SL 1.9 · 16 marks
    "t1-4-q060": {
      // EN: This investigation uses the cube roots of unity to add every third binomial coefficient. For <span class="chem">n ∈ ℤ^+</span>, let <span class="chem"><i>A</i><sub><i>n</i></sub> = <sup><i>n</i></sup>C<sub>0</sub> + <sup><i>n</i></sup>C<sub>3</sub> + <sup><i>n</i></sup>C<sub>6</sub> + …</span>, the sum of the binomial coefficients <span class="chem"><sup><i>n</i></sup>C<sub><i>r</i></sub></span> for which <span class="chem">r</span> is a multiple of 3.<br>(a) Find <span class="chem">A_n</span> for <span class="chem">n = 1, 2, 3, 4, 5, 6</span>. [2 marks]<br>(b) Compare each value with <span class="chem">2^n / 3</span>, and comment. [1 mark]<br>(c) Let <span class="chem">omega = e^{2 pi i / 3}</span>. Show that <span class="chem">1 + omega + omega^2 = 0</span>, and deduce that <span class="chem">1 + omega^r + omega^{2r}</span> equals 3 when <span class="chem">r</span> is a multiple of 3 and 0 otherwise. [3 marks]<br>(d) By expanding each term with the binomial theorem, show that <span class="chem">(1 + 1)^n + (1 + omega)^n + (1 + omega^2)^n = 3A_n</span>. [3 marks]<br>(e) Show that <span class="chem">1 + omega = e^{i pi/3}</span> and <span class="chem">1 + omega^2 = e^{-i pi/3}</span>. Hence show that <span class="chem">A_n = (2^n + 2 cos(n pi/3)) / 3</span>. [4 marks]<br>(f) Verify the formula for <span class="chem">n = 6</span>. [1 mark]<br>(g) Find <span class="chem">A_10</span>. [2 marks]
      stem: "이 탐구에서는 1의 세제곱근을 이용하여 이항계수를 세 개 걸러 하나씩 더한다. <span class=\"chem\">n ∈ ℤ^+</span>에 대하여 <span class=\"chem\"><i>A</i><sub><i>n</i></sub> = <sup><i>n</i></sup>C<sub>0</sub> + <sup><i>n</i></sup>C<sub>3</sub> + <sup><i>n</i></sup>C<sub>6</sub> + …</span>라 하자. 이는 <span class=\"chem\">r</span>가 3의 배수인 이항계수 <span class=\"chem\"><sup><i>n</i></sup>C<sub><i>r</i></sub></span>의 합이다.<br>(a) <span class=\"chem\">n = 1, 2, 3, 4, 5, 6</span>에 대하여 <span class=\"chem\">A_n</span>를 구하시오 (Find). [2 marks]<br>(b) 각 값을 <span class=\"chem\">2^n / 3</span>과 비교하고, 알게 된 점을 말하시오 (Comment). [1 mark]<br>(c) <span class=\"chem\">omega = e^{2 pi i / 3}</span>이라 하자. <span class=\"chem\">1 + omega + omega^2 = 0</span>임을 보이고 (Show that), <span class=\"chem\">1 + omega^r + omega^{2r}</span>이 <span class=\"chem\">r</span>이 3의 배수일 때 3이고 그렇지 않으면 0임을 유도하시오 (Deduce). [3 marks]<br>(d) 각 항을 이항정리로 전개하여 <span class=\"chem\">(1 + 1)^n + (1 + omega)^n + (1 + omega^2)^n = 3A_n</span>임을 보이시오. [3 marks]<br>(e) <span class=\"chem\">1 + omega = e^{i pi/3}</span>이고 <span class=\"chem\">1 + omega^2 = e^{-i pi/3}</span>임을 보이시오. 이를 이용하여 (Hence) <span class=\"chem\">A_n = (2^n + 2 cos(n pi/3)) / 3</span>임을 보이시오. [4 marks]<br>(f) <span class=\"chem\">n = 6</span>일 때 이 공식이 성립함을 확인하시오 (Verify). [1 mark]<br>(g) <span class=\"chem\">A_10</span>을 구하시오. [2 marks]",
      hints: [
        // EN: Decode: the cube roots of unity act as a "filter". Adding <span class="chem">1 + omega^r + omega^{2r}</span> keeps the terms with <span class="chem">r</span> a multiple of 3 and kills the others, so three binomial expansions added together leave only every third coefficient.
        "해석: 1의 세제곱근은 \"필터\" 역할을 해요. <span class=\"chem\">1 + omega^r + omega^{2r}</span>을 더하면 <span class=\"chem\">r</span>가 3의 배수인 항은 남고 나머지는 사라지므로, 세 이항전개를 더하면 세 개 걸러 하나씩의 계수만 남아요.",
        // EN: For (a), use Pascal's triangle, e.g. <span class="chem"><i>A</i><sub>6</sub> = <sup>6</sup>C<sub>0</sub> + <sup>6</sup>C<sub>3</sub> + <sup>6</sup>C<sub>6</sub> = 1 + 20 + 1</span>.
        "(a)에서는 파스칼의 삼각형을 이용하세요. 예: <span class=\"chem\"><i>A</i><sub>6</sub> = <sup>6</sup>C<sub>0</sub> + <sup>6</sup>C<sub>3</sub> + <sup>6</sup>C<sub>6</sub> = 1 + 20 + 1</span>.",
        // EN: For (d), line up the three expansions <span class="chem">Σ<sub><i>r</i></sub> <sup><i>n</i></sup>C<sub><i>r</i></sub> <i>x</i><sup><i>r</i></sup></span> with <span class="chem">x = 1, omega, omega^2</span> and add coefficient by coefficient.
        "(d)에서는 <span class=\"chem\">x = 1, omega, omega^2</span>일 때의 세 전개식 <span class=\"chem\">Σ<sub><i>r</i></sub> <sup><i>n</i></sup>C<sub><i>r</i></sub> <i>x</i><sup><i>r</i></sup></span>을 나란히 놓고 계수끼리 더하세요.",
        // EN: For (e), <span class="chem">omega = -1/2 + (sqrt(3)/2)i</span>. A number plus its conjugate is twice its real part.
        "(e)에서는 <span class=\"chem\">omega = -1/2 + (sqrt(3)/2)i</span>이에요. 어떤 수와 그 켤레복소수의 합은 실수부의 2배예요.",
      ],
      // EN: <p><strong>Decode.</strong> This is the roots-of-unity filter: the identity in (c) turns a sum over every third coefficient into three ordinary binomial expansions, which De Moivre can evaluate.<br>(a) <span class="chem">A_1 = 1</span>, <span class="chem">A_2 = 1</span>, <span class="chem">A_3 = 1 + 1 = 2</span>, <span class="chem">A_4 = 1 + 4 = 5</span>, <span class="chem">A_5 = 1 + 10 = 11</span>, <span class="chem">A_6 = 1 + 20 + 1 = 22</span>.<br>(b) Each differs from <span class="chem">2^n/3</span> by <span class="chem">1/3</span> or <span class="chem">2/3</span>.<br>(c) <span class="chem">omega != 1</span> and <span class="chem">omega^3 = 1</span>, so <span class="chem">1 + omega + omega^2 = (1 - omega^3)/(1 - omega) = 0</span>. If <span class="chem">r = 3q</span>, every term is 1 (sum 3); otherwise <span class="chem">omega^r</span> and <span class="chem">omega^{2r}</span> are <span class="chem">omega</span> and <span class="chem">omega^2</span> in some order (sum 0).<br>(d) <span class="chem">Σ<sub><i>r</i></sub> <sup><i>n</i></sup>C<sub><i>r</i></sub>(1 + ω<sup><i>r</i></sup> + ω<sup>2<i>r</i></sup>) = 3 × Σ<sub><i>r</i> = 0, 3, 6, …</sub> <sup><i>n</i></sup>C<sub><i>r</i></sub> = 3<i>A</i><sub><i>n</i></sub></span>.<br>(e) <span class="chem">1 + omega = 1/2 + (sqrt(3)/2)i = e^{i pi/3}</span> and <span class="chem">1 + omega^2 = e^{-i pi/3}</span>. By De Moivre, <span class="chem">3A_n = 2^n + e^{in pi/3} + e^{-in pi/3} = 2^n + 2 cos(n pi/3)</span>.<br>(f) <span class="chem">(64 + 2)/3 = 22</span> ✓.<br>(g) <span class="chem">cos(10pi/3) = cos(4pi/3) = -1/2</span>, so <span class="chem">A_10 = (1024 - 1)/3 = 341</span> (check: <span class="chem">1 + 120 + 210 + 10 = 341</span>).</p>
      solution: "<p><strong>해석.</strong> 이것은 1의 거듭제곱근 필터예요: (c)의 항등식이 세 개 걸러 하나씩의 계수의 합을 세 개의 평범한 이항전개로 바꾸고, 이를 드 무아브르 정리로 계산할 수 있어요.<br>(a) <span class=\"chem\">A_1 = 1</span>, <span class=\"chem\">A_2 = 1</span>, <span class=\"chem\">A_3 = 1 + 1 = 2</span>, <span class=\"chem\">A_4 = 1 + 4 = 5</span>, <span class=\"chem\">A_5 = 1 + 10 = 11</span>, <span class=\"chem\">A_6 = 1 + 20 + 1 = 22</span>.<br>(b) 각 값은 <span class=\"chem\">2^n/3</span>과 <span class=\"chem\">1/3</span> 또는 <span class=\"chem\">2/3</span>만큼 차이가 나요.<br>(c) <span class=\"chem\">omega != 1</span>이고 <span class=\"chem\">omega^3 = 1</span>이므로 <span class=\"chem\">1 + omega + omega^2 = (1 - omega^3)/(1 - omega) = 0</span>. <span class=\"chem\">r = 3q</span>이면 모든 항이 1 (합 3); 그렇지 않으면 <span class=\"chem\">omega^r</span>와 <span class=\"chem\">omega^{2r}</span>는 순서와 관계없이 <span class=\"chem\">omega</span>과 <span class=\"chem\">omega^2</span>이에요 (합 0).<br>(d) <span class=\"chem\">Σ<sub><i>r</i></sub> <sup><i>n</i></sup>C<sub><i>r</i></sub>(1 + ω<sup><i>r</i></sup> + ω<sup>2<i>r</i></sup>) = 3 × Σ<sub><i>r</i> = 0, 3, 6, …</sub> <sup><i>n</i></sup>C<sub><i>r</i></sub> = 3<i>A</i><sub><i>n</i></sub></span>.<br>(e) <span class=\"chem\">1 + omega = 1/2 + (sqrt(3)/2)i = e^{i pi/3}</span>이고 <span class=\"chem\">1 + omega^2 = e^{-i pi/3}</span>. 드 무아브르 정리에 의해 <span class=\"chem\">3A_n = 2^n + e^{in pi/3} + e^{-in pi/3} = 2^n + 2 cos(n pi/3)</span>.<br>(f) <span class=\"chem\">(64 + 2)/3 = 22</span> ✓.<br>(g) <span class=\"chem\">cos(10pi/3) = cos(4pi/3) = -1/2</span>이므로 <span class=\"chem\">A_10 = (1024 - 1)/3 = 341</span> (확인: <span class=\"chem\">1 + 120 + 210 + 10 = 341</span>).</p>",
      // EN: <p>(a) <span class="chem">1, 1, 2, 5, 11, 22</span>.<br>(b) <span class="chem">2^n/3 ≈ 0.667, 1.33, 2.67, 5.33, 10.7, 21.3</span>: each <span class="chem">A_n</span> differs from <span class="chem">2^n/3</span> by <span class="chem">1/3</span> or <span class="chem">2/3</span>.<br>(c) <span class="chem">1 + omega + omega^2 = (1 - omega^3)/(1 - omega) = 0</span>; if <span class="chem">3 | r</span> each term is 1, otherwise <span class="chem">omega^r</span> is <span class="chem">omega</span> or <span class="chem">omega^2</span> and the sum is <span class="chem">1 + omega + omega^2 = 0</span>.<br>(d) The sum is <span class="chem">Σ<sub><i>r</i></sub> <sup><i>n</i></sup>C<sub><i>r</i></sub>(1 + ω<sup><i>r</i></sup> + ω<sup>2<i>r</i></sup>) = 3 Σ<sub>3|<i>r</i></sub> <sup><i>n</i></sup>C<sub><i>r</i></sub></span>.<br>(e) <span class="chem">1 + omega = 1/2 + (sqrt(3)/2)i = e^{i pi/3}</span>; then <span class="chem">3A_n = 2^n + e^{in pi/3} + e^{-in pi/3} = 2^n + 2 cos(n pi/3)</span>.<br>(f) <span class="chem">(64 + 2)/3 = 22</span>.<br>(g) <span class="chem">A_10 = (1024 + 2 cos(10pi/3))/3 = (1024 - 1)/3 = 341</span>.</p>
      answer: "<p>(a) <span class=\"chem\">1, 1, 2, 5, 11, 22</span>.<br>(b) <span class=\"chem\">2^n/3 ≈ 0.667, 1.33, 2.67, 5.33, 10.7, 21.3</span>: 각 <span class=\"chem\">A_n</span>은 <span class=\"chem\">2^n/3</span>와 <span class=\"chem\">1/3</span> 또는 <span class=\"chem\">2/3</span>만큼 차이가 난다.<br>(c) <span class=\"chem\">1 + omega + omega^2 = (1 - omega^3)/(1 - omega) = 0</span>; <span class=\"chem\">3 | r</span>이면 각 항이 1이고, 그렇지 않으면 <span class=\"chem\">omega^r</span>는 <span class=\"chem\">omega</span> 또는 <span class=\"chem\">omega^2</span>이므로 합은 <span class=\"chem\">1 + omega + omega^2 = 0</span>.<br>(d) 합은 <span class=\"chem\">Σ<sub><i>r</i></sub> <sup><i>n</i></sup>C<sub><i>r</i></sub>(1 + ω<sup><i>r</i></sup> + ω<sup>2<i>r</i></sup>) = 3 Σ<sub>3|<i>r</i></sub> <sup><i>n</i></sup>C<sub><i>r</i></sub></span>.<br>(e) <span class=\"chem\">1 + omega = 1/2 + (sqrt(3)/2)i = e^{i pi/3}</span>; 그러면 <span class=\"chem\">3A_n = 2^n + e^{in pi/3} + e^{-in pi/3} = 2^n + 2 cos(n pi/3)</span>.<br>(f) <span class=\"chem\">(64 + 2)/3 = 22</span>.<br>(g) <span class=\"chem\">A_10 = (1024 + 2 cos(10pi/3))/3 = (1024 - 1)/3 = 341</span>.</p>",
      markscheme: [
        // EN: A1: A₁ = 1, A₂ = 1, A₃ = 2.
        "A1: A₁ = 1, A₂ = 1, A₃ = 2.",
        // EN: A1: A₄ = 5, A₅ = 11, A₆ = 22.
        "A1: A₄ = 5, A₅ = 11, A₆ = 22.",
        // EN: A1: A<sub>n</sub> is close to 2<sup>n</sup>/3, differing by 1/3 or 2/3.
        "A1: A<sub>n</sub>은 2<sup>n</sup>/3에 가깝고, 차이는 1/3 또는 2/3.",
        // EN: M1: 1 + ω + ω² = (1 − ω³)/(1 − ω) with ω ≠ 1 (or the sum of the roots of z³ − 1 = 0).
        "M1: ω ≠ 1일 때 1 + ω + ω² = (1 − ω³)/(1 − ω) (또는 z³ − 1 = 0의 근의 합).",
        // EN: A1: = 0, since ω³ = 1.
        "A1: ω³ = 1이므로 = 0.",
        // EN: R1: If 3 | r, ω<sup>r</sup> = ω<sup>2r</sup> = 1, so the sum is 3; otherwise {ω<sup>r</sup>, ω<sup>2r</sup>} = {ω, ω²}, so the sum is 0.
        "R1: 3 | r이면 ω<sup>r</sup> = ω<sup>2r</sup> = 1이므로 합은 3; 그렇지 않으면 {ω<sup>r</sup>, ω<sup>2r</sup>} = {ω, ω²}이므로 합은 0.",
        // EN: M1: Expands each power: Σ<sup>n</sup>C<sub>r</sub>·1<sup>r</sup>, Σ<sup>n</sup>C<sub>r</sub>ω<sup>r</sup>, Σ<sup>n</sup>C<sub>r</sub>ω<sup>2r</sup>.
        "M1: 각 거듭제곱을 전개함: Σ<sup>n</sup>C<sub>r</sub>·1<sup>r</sup>, Σ<sup>n</sup>C<sub>r</sub>ω<sup>r</sup>, Σ<sup>n</sup>C<sub>r</sub>ω<sup>2r</sup>.",
        // EN: A1: Adds term by term: Σ<sup>n</sup>C<sub>r</sub>(1 + ω<sup>r</sup> + ω<sup>2r</sup>).
        "A1: 항별로 더함: Σ<sup>n</sup>C<sub>r</sub>(1 + ω<sup>r</sup> + ω<sup>2r</sup>).",
        // EN: R1: Uses (c): only r divisible by 3 survive, each with factor 3, giving 3A<sub>n</sub> (AG).
        "R1: (c)를 이용함: 3으로 나누어떨어지는 r의 항만 각각 인수 3을 가지고 남으므로 3A<sub>n</sub> (AG).",
        // EN: A1: 1 + ω = 1 + (−½ + (√3/2)i) = ½ + (√3/2)i = e<sup>iπ/3</sup>, and 1 + ω² is its conjugate e<sup>−iπ/3</sup>.
        "A1: 1 + ω = 1 + (−½ + (√3/2)i) = ½ + (√3/2)i = e<sup>iπ/3</sup>이고, 1 + ω²는 그 켤레 e<sup>−iπ/3</sup>.",
        // EN: M1: Uses De Moivre: (1 + ω)<sup>n</sup> = e<sup>inπ/3</sup> and (1 + ω²)<sup>n</sup> = e<sup>−inπ/3</sup>.
        "M1: 드 무아브르 정리를 이용함: (1 + ω)<sup>n</sup> = e<sup>inπ/3</sup>, (1 + ω²)<sup>n</sup> = e<sup>−inπ/3</sup>.",
        // EN: A1: e<sup>inπ/3</sup> + e<sup>−inπ/3</sup> = 2cos(nπ/3).
        "A1: e<sup>inπ/3</sup> + e<sup>−inπ/3</sup> = 2cos(nπ/3).",
        // EN: A1: So 3A<sub>n</sub> = 2<sup>n</sup> + 2cos(nπ/3) (AG).
        "A1: 따라서 3A<sub>n</sub> = 2<sup>n</sup> + 2cos(nπ/3) (AG).",
        // EN: A1: n = 6: (64 + 2cos 2π)/3 = 66/3 = 22, matching (a).
        "A1: n = 6: (64 + 2cos 2π)/3 = 66/3 = 22로 (a)와 일치함.",
        // EN: M1: A₁₀ = (2¹⁰ + 2cos(10π/3))/3 with cos(10π/3) = −½.
        "M1: cos(10π/3) = −½이므로 A₁₀ = (2¹⁰ + 2cos(10π/3))/3.",
        // EN: A1: A₁₀ = 341.
        "A1: A₁₀ = 341.",
      ],
    },

  }
});
