/* t1-4 — ko translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't1-4', {
  strings: {

    // page title (browser tab)
    "1.4 Complex numbers and De Moivre's theorem | Analysis Lab": "1.4 복소수와 드 무아브르 정리 | Analysis Lab",

    // Complex numbers and De Moivre's theorem > page header > p
    "Topic 1.4 · AHL 1.12–1.14 · Additional HL": "Topic 1.4 · AHL 1.12–1.14 · 추가 HL",

    // Complex numbers and De Moivre's theorem > page header > h1
    "Complex numbers and De Moivre's theorem": "복소수와 드 무아브르 정리",

    // Complex numbers and De Moivre's theorem > page header > span
    "How does extending the real number line into the two-dimensional Argand plane turn algebraic powers and roots into geometric rotations and regular polygons?": "실수 직선을 2차원 아르강 평면(복소평면)으로 확장하면, 대수적인 거듭제곱과 거듭제곱근이 어떻게 기하학적인 회전과 정다각형으로 바뀔까요?",

    // What you need to be able to do > data-toc attribute
    "Checklist": "학습 체크리스트",

    // What you need to be able to do > h2
    "What you need to be able to do": "할 수 있어야 하는 내용",

    // What you need to be able to do > checklist > Additional HL > span
    "Add, subtract, multiply and divide complex numbers in Cartesian form <span class=\"chem\">z = a + bi</span>, and identify <span class=\"chem\">Re(z) = a</span> and <span class=\"chem\">Im(z) = b</span>.": "직교 형식 <span class=\"chem\">z = a + bi</span>로 나타낸 복소수의 사칙연산을 하고, <span class=\"chem\">Re(z) = a</span>와 <span class=\"chem\">Im(z) = b</span>를 구할 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Use the complex conjugate <span class=\"chem\">z* = a - bi</span> and the property <span class=\"chem\">z z* = |z|^2 = a^2 + b^2</span> to rationalize complex denominators and solve equations.": "켤레복소수 <span class=\"chem\">z* = a - bi</span>와 성질 <span class=\"chem\">z z* = |z|^2 = a^2 + b^2</span>을 이용해 복소수 분모를 실수화하고 방정식을 풀 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Convert between Cartesian form <span class=\"chem\">a + bi</span>, modulus-argument (polar) form <span class=\"chem\">r(cos theta + i sin theta) = r cis theta</span>, and Euler form <span class=\"chem\">r e^{i theta}</span> with correct quadrant adjustment for <span class=\"chem\">arg(z)</span>.": "직교 형식 <span class=\"chem\">a + bi</span>, 극형식 <span class=\"chem\">r(cos theta + i sin theta) = r cis theta</span>, 오일러 형식 <span class=\"chem\">r e^{i theta}</span> 사이를 변환하고 사분면에 맞게 <span class=\"chem\">arg(z)</span>를 구할 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Interpret complex multiplication and division geometrically on the Argand diagram as scaling of moduli and rotation of arguments.": "복소수의 곱셈과 나눗셈을 아르강 평면 위에서 크기(절댓값)의 확대·축소와 편각의 회전으로 기하학적으로 해석할 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Apply De Moivre's theorem <span class=\"chem\">[r(cos theta + i sin theta)]^n = r^n(cos(n theta) + i sin(n theta))</span> to compute powers and derive multiple-angle trigonometric identities.": "드 무아브르 정리 <span class=\"chem\">[r(cos theta + i sin theta)]^n = r^n(cos(n theta) + i sin(n theta))</span>를 적용해 거듭제곱을 계산하고 배각 삼각함수 항등식을 유도할 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Find all <span class=\"chem\">n</span> distinct <span class=\"chem\">n</span>-th roots of a complex number <span class=\"chem\">z^n = w</span> and represent them as the vertices of a regular <span class=\"chem\">n</span>-gon on the Argand diagram.": "복소방정식 <span class=\"chem\">z^n = w</span>의 서로 다른 <span class=\"chem\">n</span>개의 <span class=\"chem\">n</span>제곱근을 모두 구하고 아르강 평면 위에 정<span class=\"chem\">n</span>각형의 꼭짓점으로 나타낼 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Apply the Complex Conjugate Root Theorem to factorize and solve polynomial equations with real coefficients.": "켤레근 정리를 적용하여 실수 계수 다항방정식을 인수분해하고 풀 수 있어요.",

    // Question decoder: Cartesian vs Polar/Euler form > data-toc attribute
    "Question decoder": "문제 디코더",

    // Question decoder: Cartesian vs Polar/Euler form > h2
    "Question decoder: Cartesian vs Polar/Euler form": "문제 디코더: 직교 형식 vs 극형식/오일러 형식",

    // Question decoder: Cartesian vs Polar/Euler form > p
    "Almost every complex number exam problem comes down to one decision: <strong>stay in Cartesian form</strong> (<span class=\"chem\">a + bi</span>) or <strong>switch to polar/Euler form</strong> (<span class=\"chem\">r e^{i theta}</span>). Use this table to pick the fastest path every time.": "거의 모든 복소수 시험 문제는 하나의 선택으로 귀결돼요: <strong>직교 형식</strong>(<span class=\"chem\">a + bi</span>)을 유지할지, <strong>극형식/오일러 형식</strong>(<span class=\"chem\">r e^{i theta}</span>)으로 바꿀지 결정하는 것이에요. 아래 표를 보며 매번 가장 빠른 길을 고르세요.",

    // Question decoder: Cartesian vs Polar/Euler form > table > caption
    "Question decoder — Complex numbers and De Moivre's theorem": "문제 디코더 — 복소수와 드 무아브르 정리",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "What the exam question says": "시험 문제의 표현",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "Which form &amp; formula to use": "사용할 형식과 공식",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "Paper 1 (No GDC) vs Paper 2 / 3 (GDC)": "Paper 1 (계산기 불가) vs Paper 2 / 3 (GDC)",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "“Express <span class=\"chem\">(3 + 4i) / (1 - 2i)</span> in the form <span class=\"chem\">a + bi</span>” or “Solve <span class=\"chem\">(x + yi)(2 - i) = 5</span>”": "“<span class=\"chem\">(3 + 4i) / (1 - 2i)</span>를 <span class=\"chem\">a + bi</span> 꼴로 나타내시오” 또는 “<span class=\"chem\">(x + yi)(2 - i) = 5</span>를 푸시오”",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "<strong>Cartesian form</strong> <span class=\"chem\">z = a + bi</span>. Multiply numerator and denominator by the conjugate <span class=\"chem\">z_2*</span>, or expand and equate real parts and imaginary parts separately.": "<strong>직교 형식</strong> <span class=\"chem\">z = a + bi</span>. 분모·분자에 켤레복소수 <span class=\"chem\">z_2*</span>를 곱하거나, 전개한 뒤 실수부와 허수부를 각각 같다고 놓으세요.",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "<strong>P1</strong>: Use <span class=\"chem\">(c + di)(c - di) = c^2 + d^2</span> (always a positive real number).<br><strong>P2</strong>: Enter <span class=\"chem\">i</span> directly on the GDC to compute or verify in seconds.": "<strong>P1</strong>: <span class=\"chem\">(c + di)(c - di) = c^2 + d^2</span> (항상 양의 실수)을 이용하세요.<br><strong>P2</strong>: GDC에 <span class=\"chem\">i</span>를 직접 입력해 몇 초 만에 계산하거나 검산하세요.",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "“Given that <span class=\"chem\">2 - 3i</span> is a root of <span class=\"chem\">P(z) = 0</span> where all coefficients are real…”": "“모든 계수가 실수인 <span class=\"chem\">P(z) = 0</span>의 한 근이 <span class=\"chem\">2 - 3i</span>일 때…”",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "<strong>Conjugate Root Theorem</strong> (Cartesian). Immediately write down the second root <span class=\"chem\">z_2 = 2 + 3i</span> and form the real quadratic factor <span class=\"chem\">(z - z_1)(z - z_1*) = z^2 - 2Re(z_1)z + |z_1|^2</span>.": "<strong>켤레근 정리</strong> (직교 형식). 바로 다른 한 근 <span class=\"chem\">z_2 = 2 + 3i</span>를 적고, 실수 계수 이차 인수 <span class=\"chem\">(z - z_1)(z - z_1*) = z^2 - 2Re(z_1)z + |z_1|^2</span>을 만드세요.",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "<strong>P1</strong>: Here <span class=\"chem\">z^2 - 4z + 13</span> is a factor of <span class=\"chem\">P(z)</span>; use polynomial division or inspection to find remaining roots.<br><strong>P2</strong>: Use GDC <span class=\"mono\">polyRoots</span> to check all roots.": "<strong>P1</strong>: <span class=\"chem\">z^2 - 4z + 13</span>이 <span class=\"chem\">P(z)</span>의 인수이므로, 다항식의 나눗셈이나 계수 비교로 나머지 근을 구하세요.<br><strong>P2</strong>: GDC의 <span class=\"mono\">polyRoots</span>로 모든 근을 확인하세요.",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "“Calculate <span class=\"chem\">(1 - sqrt(3)i)^{12}</span>” or “Find the least positive integer <span class=\"chem\">n</span> such that <span class=\"chem\">z^n</span> is real / purely imaginary”": "“<span class=\"chem\">(1 - sqrt(3)i)^{12}</span>을 계산하시오” 또는 “<span class=\"chem\">z^n</span>이 실수 / 순허수가 되도록 하는 최소 양의 정수 <span class=\"chem\">n</span>을 구하시오”",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "<strong>Polar / Euler form</strong> + <strong>De Moivre's theorem</strong>: <span class=\"chem\">z^n = r^n(cos(n theta) + i sin(n theta))</span>. Never expand high powers in Cartesian form!": "<strong>극형식 / 오일러 형식</strong> + <strong>드 무아브르 정리</strong>: <span class=\"chem\">z^n = r^n(cos(n theta) + i sin(n theta))</span>. 절대 직교 형식으로 고차 거듭제곱을 전개하지 마세요!",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "Real <span class=\"chem\">&lt;=&gt; sin(n theta) = 0 =&gt; n theta = k pi</span>.<br>Purely imaginary <span class=\"chem\">&lt;=&gt; cos(n theta) = 0 =&gt; n theta = pi/2 + k pi</span>.": "실수 <span class=\"chem\">&lt;=&gt; sin(n theta) = 0 =&gt; n theta = k pi</span>.<br>순허수 <span class=\"chem\">&lt;=&gt; cos(n theta) = 0 =&gt; n theta = pi/2 + k pi</span>.",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "“Find the exact value of <span class=\"chem\">cos(pi/12)</span>” using two complex numbers <span class=\"chem\">z_1, z_2</span>": "두 복소수 <span class=\"chem\">z_1, z_2</span>를 이용하여 “<span class=\"chem\">cos(pi/12)</span>의 정확한 값을 구하시오”",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "<strong>Bridge between both forms</strong>: compute <span class=\"chem\">z_1 z_2</span> (or <span class=\"chem\">z_1 / z_2</span>) in Cartesian form AND in polar form, then equate real and imaginary parts.": "<strong>두 형식 연결하기</strong>: <span class=\"chem\">z_1 z_2</span> (또는 <span class=\"chem\">z_1 / z_2</span>)를 직교 형식과 극형식으로 각각 계산한 뒤, 실수부와 허수부를 같다고 놓으세요.",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "Classic Paper 1 Section B technique using exact triangles (<span class=\"chem\">pi/4</span> and <span class=\"chem\">pi/3</span>, whose difference is <span class=\"chem\">pi/12</span>).": "특수각(<span class=\"chem\">pi/4</span>와 <span class=\"chem\">pi/3</span>의 차가 <span class=\"chem\">pi/12</span>)을 활용하는 전형적인 Paper 1 Section B 기법이에요.",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "“Solve <span class=\"chem\">z^n = w</span>” (e.g. <span class=\"chem\">z^4 = -8 + 8 sqrt(3)i</span>)": "“<span class=\"chem\">z^n = w</span>를 푸시오” (예: <span class=\"chem\">z^4 = -8 + 8 sqrt(3)i</span>)",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "<strong>Polar / Euler form</strong> with general angle <span class=\"chem\">theta + 2 pi k</span>:<br><span class=\"chem\">z_k = r^{1/n} e^{i(theta + 2 pi k)/n}</span> for <span class=\"chem\">k = 0, 1, ..., n - 1</span>.": "일반각 <span class=\"chem\">theta + 2 pi k</span>를 사용한 <strong>극형식 / 오일러 형식</strong>:<br><span class=\"chem\">k = 0, 1, ..., n - 1</span>에 대해 <span class=\"chem\">z_k = r^{1/n} e^{i(theta + 2 pi k)/n}</span>.",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "Sketch the regular <span class=\"chem\">n</span>-gon on a circle of radius <span class=\"chem\">r^{1/n}</span> with angular spacing <span class=\"chem\">2 pi / n</span>. Adjust angles to <span class=\"chem\">(-pi, pi]</span> if required.": "반지름 <span class=\"chem\">r^{1/n}</span>인 원 위에 각도 간격 <span class=\"chem\">2 pi / n</span>으로 정<span class=\"chem\">n</span>각형을 그려 보세요. 필요하면 편각을 <span class=\"chem\">(-pi, pi]</span> 범위로 조정하세요.",

    // Question decoder: Cartesian vs Polar/Euler form > table > th
    "“Show that <span class=\"chem\">cos(4 theta) = 8 cos^4(theta) - 8 cos^2(theta) + 1</span>”": "“<span class=\"chem\">cos(4 theta) = 8 cos^4(theta) - 8 cos^2(theta) + 1</span>임을 보이시오”",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "<strong>De Moivre + Binomial expansion</strong>: equate <span class=\"chem\">cos(n theta) = Re((cos theta + i sin theta)^n)</span> and replace <span class=\"chem\">sin^2 theta = 1 - cos^2 theta</span>.": "<strong>드 무아브르 + 이항전개</strong>: <span class=\"chem\">cos(n theta) = Re((cos theta + i sin theta)^n)</span>으로 놓고 <span class=\"chem\">sin^2 theta = 1 - cos^2 theta</span>를 대입하세요.",

    // Question decoder: Cartesian vs Polar/Euler form > table > td
    "For the reverse problem (expressing <span class=\"chem\">cos^4 theta</span> in terms of <span class=\"chem\">cos(k theta)</span>), use <span class=\"chem\">2 cos theta = z + z^{-1}</span>.": "반대 방향 문제(<span class=\"chem\">cos^4 theta</span>를 <span class=\"chem\">cos(k theta)</span>로 나타내기)에서는 <span class=\"chem\">2 cos theta = z + z^{-1}</span>을 이용하세요.",

    // Cartesian form, conjugates and the Argand diagram > data-toc attribute
    "Cartesian & Argand": "직교 형식과 아르강 평면",

    // Cartesian form, conjugates and the Argand diagram > h2
    "Cartesian form, conjugates and the Argand diagram": "직교 형식, 켤레복소수와 아르강 평면",

    // Cartesian form, conjugates and the Argand diagram > p
    "To solve equations like <span class=\"chem\">x^2 + 1 = 0</span> that have no real solutions, we define the <dfn data-def=\"The fundamental imaginary unit satisfying i² = −1.\">imaginary unit</dfn> <span class=\"chem\">i</span> by the property <span class=\"chem\">i^2 = -1</span>. Every <dfn data-def=\"A number of the form z = a + bi where a and b are real numbers and i² = −1.\">complex number</dfn> <span class=\"chem\">z \\in \\mathbb{C}</span> can be written in <strong>Cartesian form</strong>:": "<span class=\"chem\">x^2 + 1 = 0</span>처럼 실수 해가 없는 방정식을 풀기 위해, <span class=\"chem\">i^2 = -1</span>을 만족하는 <dfn data-def=\"The fundamental imaginary unit satisfying i² = −1.\">허수단위 <span class=\"en-term\">(imaginary unit)</span></dfn> <span class=\"chem\">i</span>를 정의해요. 모든 <dfn data-def=\"A number of the form z = a + bi where a and b are real numbers and i² = −1.\">복소수 <span class=\"en-term\">(complex number)</span></dfn> <span class=\"chem\">z \\in \\mathbb{C}</span>는 <strong>직교 형식</strong>으로 나타낼 수 있어요:",

    // Cartesian form, conjugates and the Argand diagram > data-def attribute
    "The fundamental imaginary unit satisfying i² = −1.": "i² = −1을 만족하는 기본 허수단위.",

    // Cartesian form, conjugates and the Argand diagram > data-def attribute
    "A number of the form z = a + bi where a and b are real numbers and i² = −1.": "a와 b가 실수이고 i² = −1일 때 z = a + bi 꼴로 나타낸 수.",

    // Cartesian form, conjugates and the Argand diagram > equation > dt
    "a = Re(z)": "a = Re(z)",

    // Cartesian form, conjugates and the Argand diagram > equation > dd
    "real part of <i>z</i> (a real number)": "<i>z</i>의 실수부 (실수)",

    // Cartesian form, conjugates and the Argand diagram > equation > dt
    "b = Im(z)": "b = Im(z)",

    // Cartesian form, conjugates and the Argand diagram > equation > dd
    "imaginary part of <i>z</i> (a real number, without <i>i</i>)": "<i>z</i>의 허수부 (<i>i</i>를 제외한 실수)",

    // Cartesian form, conjugates and the Argand diagram > equation > dd
    "complex conjugate of <i>z</i> (reflection of <i>z</i> across the real axis)": "<i>z</i>의 켤레복소수 (<i>z</i>를 실수축에 대해 대칭이동)",

    // Cartesian form, conjugates and the Argand diagram > common mistake > p
    "<strong>Never include <span class=\"chem\">i</span> in <span class=\"chem\">Im(z)</span>!</strong> For <span class=\"chem\">z = 5 - 3i</span>, the imaginary part is the real number <span class=\"chem\">Im(z) = -3</span>, <strong>not</strong> <span class=\"chem\">-3i</span>. Writing <span class=\"chem\">Im(z) = -3i</span> loses the accuracy mark on Paper 1 and Paper 2.": "<strong><span class=\"chem\">Im(z)</span>에 절대 <span class=\"chem\">i</span>를 포함하지 마세요!</strong> <span class=\"chem\">z = 5 - 3i</span>일 때 허수부는 <span class=\"chem\">-3i</span>가 <strong>아니라</strong> 실수 <span class=\"chem\">Im(z) = -3</span>이에요. <span class=\"chem\">Im(z) = -3i</span>라고 쓰면 Paper 1과 Paper 2에서 정확도 점수(A1)를 잃어요.",

    // Cartesian form, conjugates and the Argand diagram > h3
    "Powers of <span class=\"chem\">i</span> and arithmetic in Cartesian form": "<span class=\"chem\">i</span>의 거듭제곱과 직교 형식에서의 사칙연산",

    // Cartesian form, conjugates and the Argand diagram > p
    "Because <span class=\"chem\">i^2 = -1</span>, powers of <span class=\"chem\">i</span> repeat in a cycle of length 4: <span class=\"chem\">i^1 = i</span>, <span class=\"chem\">i^2 = -1</span>, <span class=\"chem\">i^3 = -i</span>, <span class=\"chem\">i^4 = 1</span>. To simplify <span class=\"chem\">i^n</span>, divide the exponent <span class=\"chem\">n</span> by 4 and look only at the remainder.": "<span class=\"chem\">i^2 = -1</span>이므로 <span class=\"chem\">i</span>의 거듭제곱은 4를 주기로 반복돼요: <span class=\"chem\">i^1 = i</span>, <span class=\"chem\">i^2 = -1</span>, <span class=\"chem\">i^3 = -i</span>, <span class=\"chem\">i^4 = 1</span>. <span class=\"chem\">i^n</span>을 간단히 하려면 지수 <span class=\"chem\">n</span>을 4로 나눈 나머지만 확인하면 돼요.",

    // Cartesian form, conjugates and the Argand diagram > li
    "<strong>Addition and subtraction</strong>: Combine real parts and imaginary parts separately: <span class=\"chem\">(a + bi) +- (c + di) = (a +- c) + (b +- d)i</span>.": "<strong>덧셈과 뺄셈</strong>: 실수부는 실수부끼리, 허수부는 허수부끼리 계산하세요: <span class=\"chem\">(a + bi) +- (c + di) = (a +- c) + (b +- d)i</span>.",

    // Cartesian form, conjugates and the Argand diagram > li
    "<strong>Multiplication</strong>: Expand brackets and replace <span class=\"chem\">i^2</span> with <span class=\"chem\">-1</span>: <span class=\"chem\">(a + bi)(c + di) = (ac - bd) + (ad + bc)i</span>.": "<strong>곱셈</strong>: 괄호를 전개하고 <span class=\"chem\">i^2</span>을 <span class=\"chem\">-1</span>로 바꾸세요: <span class=\"chem\">(a + bi)(c + di) = (ac - bd) + (ad + bc)i</span>.",

    // Cartesian form, conjugates and the Argand diagram > li
    "<strong>Division (rationalizing the denominator)</strong>: Multiply both numerator and denominator by the <strong>complex conjugate of the denominator</strong> <span class=\"chem\">c - di</span> so the denominator becomes the real number <span class=\"chem\">c^2 + d^2</span>: <span class=\"chem\">(a + bi) / (c + di) = ((a + bi)(c - di)) / (c^2 + d^2)</span>.": "<strong>나눗셈 (분모의 실수화)</strong>: 분모와 분자에 <strong>분모의 켤레복소수</strong> <span class=\"chem\">c - di</span>를 곱해 분모를 실수 <span class=\"chem\">c^2 + d^2</span>으로 만드세요: <span class=\"chem\">(a + bi) / (c + di) = ((a + bi)(c - di)) / (c^2 + d^2)</span>.",

    // Cartesian form, conjugates and the Argand diagram > li
    "<strong>Equating real and imaginary parts</strong>: Two complex numbers are equal if and only if both their real parts and their imaginary parts match: <span class=\"chem\">a + bi = c + di &lt;=&gt; a = c</span> and <span class=\"chem\">b = d</span> (provided <span class=\"chem\">a, b, c, d \\in \\mathbb{R}</span>).": "<strong>복소수가 서로 같을 조건</strong>: 두 복소수는 실수부와 허수부가 각각 같을 때만 같아요: <span class=\"chem\">a + bi = c + di &lt;=&gt; a = c</span>이고 <span class=\"chem\">b = d</span> (<span class=\"chem\">a, b, c, d \\in \\mathbb{R}</span>일 때).",

    // Cartesian form, conjugates and the Argand diagram > h3
    "The Argand diagram": "아르강 평면 (복소평면)",

    // Cartesian form, conjugates and the Argand diagram > p
    "On the <dfn data-def=\"A 2D coordinate plane where the horizontal axis represents Re(z) and the vertical axis represents Im(z).\">Argand diagram</dfn> (complex plane), <span class=\"chem\">z = a + bi</span> is plotted as the point <span class=\"chem\">(a, b)</span> or position vector <span class=\"chem\">(a, b)^T</span>, with the horizontal axis for <span class=\"chem\">Re(z)</span> and the vertical axis for <span class=\"chem\">Im(z)</span>. Taking the conjugate <span class=\"chem\">z^* = a - bi</span> reflects <span class=\"chem\">z</span> across the horizontal real axis, while addition <span class=\"chem\">z_1 + z_2</span> follows standard head-to-tail vector addition.": "<dfn data-def=\"A 2D coordinate plane where the horizontal axis represents Re(z) and the vertical axis represents Im(z).\">아르강 평면 <span class=\"en-term\">(Argand diagram)</span></dfn>(복소평면)에서는 가로축을 <span class=\"chem\">Re(z)</span>, 세로축을 <span class=\"chem\">Im(z)</span>로 두고 <span class=\"chem\">z = a + bi</span>를 점 <span class=\"chem\">(a, b)</span> 또는 위치벡터 <span class=\"chem\">(a, b)^T</span>로 나타내요. 켤레복소수 <span class=\"chem\">z^* = a - bi</span>는 <span class=\"chem\">z</span>를 가로 실수축에 대해 대칭이동한 것이고, 덧셈 <span class=\"chem\">z_1 + z_2</span>는 벡터의 덧셈과 같아요.",

    // Cartesian form, conjugates and the Argand diagram > data-def attribute
    "A 2D coordinate plane where the horizontal axis represents Re(z) and the vertical axis represents Im(z).": "가로축이 Re(z)이고 세로축이 Im(z)인 2차원 좌표평면 (복소평면).",

    // Cartesian form, conjugates and the Argand diagram > worked example > h3
    "Complex division and equating real and imaginary parts": "복소수의 나눗셈과 실수부·허수부 비교",

    // Cartesian form, conjugates and the Argand diagram > worked example > p
    "Let <span class=\"chem\">z_1 = 2 + 3i</span> and <span class=\"chem\">z_2 = 1 - 2i</span>.": "<span class=\"chem\">z_1 = 2 + 3i</span>, <span class=\"chem\">z_2 = 1 - 2i</span>라 하자.",

    // Cartesian form, conjugates and the Argand diagram > worked example > p
    "(a) Express <span class=\"chem\">w = z_1 / z_2</span> in the form <span class=\"chem\">a + bi</span>, where <span class=\"chem\">a, b \\in \\mathbb{Q}</span>. <strong>[3 marks]</strong>": "(a) <span class=\"chem\">w = z_1 / z_2</span>를 <span class=\"chem\">a + bi</span> (<span class=\"chem\">a, b \\in \\mathbb{Q}</span>) 꼴로 나타내시오. <strong>[3 marks]</strong>",

    // Cartesian form, conjugates and the Argand diagram > worked example > p
    "(b) Find the real numbers <span class=\"chem\">p</span> and <span class=\"chem\">q</span> such that <span class=\"chem\">(p + qi) z_2 = 7 + 4i</span>. <strong>[3 marks]</strong>": "(b) <span class=\"chem\">(p + qi) z_2 = 7 + 4i</span>를 만족하는 실수 <span class=\"chem\">p</span>와 <span class=\"chem\">q</span>를 구하시오 (Find). <strong>[3 marks]</strong>",

    // Cartesian form, conjugates and the Argand diagram > worked example > data-title attribute
    "Multiply numerator and denominator of w by the conjugate of z₂": "w의 분자·분모에 z₂의 켤레복소수 곱하기",

    // Cartesian form, conjugates and the Argand diagram > worked example > p
    "The denominator is z₂ = 1 − 2i, so its conjugate is z₂* = 1 + 2i. Multiplying by (1 + 2i)/(1 + 2i) turns the denominator into 1² + (−2)² = 5.": "분모가 z₂ = 1 − 2i이므로 켤레복소수는 z₂* = 1 + 2i예요. (1 + 2i)/(1 + 2i)를 곱하면 분모가 1² + (−2)² = 5가 돼요.",

    // Cartesian form, conjugates and the Argand diagram > worked example > data-title attribute
    "Expand (p + qi)(1 − 2i) and group real and imaginary parts": "(p + qi)(1 − 2i)를 전개해 실수부와 허수부 묶기",

    // Cartesian form, conjugates and the Argand diagram > worked example > p
    "Since p and q are real numbers, we can expand the left-hand side into (Real) + (Imaginary)i and equate to 7 + 4i.": "p와 q가 실수이므로 좌변을 (실수부) + (허수부)i 꼴로 정리해 7 + 4i와 같다고 놓을 수 있어요.",

    // Cartesian form, conjugates and the Argand diagram > worked example > data-title attribute
    "Equate real and imaginary parts and solve the 2 × 2 system": "실수부와 허수부를 비교해 2 × 2 연립방정식 풀기",

    // Cartesian form, conjugates and the Argand diagram > worked example > p
    "Setting Re(LHS) = 7 and Im(LHS) = 4 gives two linear equations in p and q.": "Re(좌변) = 7과 Im(좌변) = 4로 놓으면 p와 q에 대한 두 일차방정식을 얻어요.",

    // Cartesian form, conjugates and the Argand diagram > worked example > maths line
    "<i>p</i> + 2<i>q</i> = 7 and −2<i>p</i> + <i>q</i> = 4 <b>[M1]</b>": "<i>p</i> + 2<i>q</i> = 7이고 −2<i>p</i> + <i>q</i> = 4 <b>[M1]</b>",

    // Cartesian form, conjugates and the Argand diagram > try it > p
    "Given that <span class=\"chem\">z = (11 + 3i) / (1 - 2i)</span>, express <span class=\"chem\">z</span> in the form <span class=\"chem\">a + bi</span> and enter the value of <span class=\"chem\">a + b</span>.": "<span class=\"chem\">z = (11 + 3i) / (1 - 2i)</span>일 때, <span class=\"chem\">z</span>를 <span class=\"chem\">a + bi</span> 꼴로 나타내고 <span class=\"chem\">a + b</span>의 값을 입력하시오.",

    // Cartesian form, conjugates and the Argand diagram > try it > li
    "Multiply the numerator and denominator by the conjugate <span class=\"chem\">1 + 2i</span>. The denominator becomes <span class=\"chem\">1^2 + (-2)^2 = 5</span>.": "분자·분모에 켤레복소수 <span class=\"chem\">1 + 2i</span>를 곱하세요. 분모는 <span class=\"chem\">1^2 + (-2)^2 = 5</span>가 돼요.",

    // Cartesian form, conjugates and the Argand diagram > try it > li
    "Expand the numerator: <span class=\"chem\">(11 + 3i)(1 + 2i) = 11 + 22i + 3i + 6i^2 = 5 + 25i</span>. Now divide both parts by <span class=\"chem\">5</span>.": "분자를 전개하세요: <span class=\"chem\">(11 + 3i)(1 + 2i) = 11 + 22i + 3i + 6i^2 = 5 + 25i</span>. 이제 실수부와 허수부를 모두 <span class=\"chem\">5</span>로 나누세요.",

    // Modulus-argument (polar) and Euler forms > data-toc attribute
    "Polar & Euler forms": "극형식과 오일러 형식",

    // Modulus-argument (polar) and Euler forms > h2
    "Modulus-argument (polar) and Euler forms": "극형식(절댓값-편각)과 오일러 형식",

    // Modulus-argument (polar) and Euler forms > p
    "Instead of describing a point on the Argand plane by its horizontal and vertical coordinates <span class=\"chem\">(a, b)</span>, we can describe it by its distance from the origin and the angle it makes with the positive real axis:": "아르강 평면 위의 점을 가로·세로 좌표 <span class=\"chem\">(a, b)</span> 대신 원점으로부터의 거리와 양의 실수축과 이루는 각도로 나타낼 수 있어요:",

    // Modulus-argument (polar) and Euler forms > li
    "The <dfn data-def=\"The distance of a complex number z = a + bi from the origin on the Argand plane: |z| = √(a² + b²).\">modulus</dfn> <span class=\"chem\">r = |z| = sqrt(a^2 + b^2) &gt;= 0</span> is the distance from the origin to <span class=\"chem\">z</span>.": "<dfn data-def=\"The distance of a complex number z = a + bi from the origin on the Argand plane: |z| = √(a² + b²).\">절댓값 <span class=\"en-term\">(modulus)</span></dfn> <span class=\"chem\">r = |z| = sqrt(a^2 + b^2) &gt;= 0</span>은 원점에서 <span class=\"chem\">z</span>까지의 거리예요.",

    // Modulus-argument (polar) and Euler forms > data-def attribute
    "The distance of a complex number z = a + bi from the origin on the Argand plane: |z| = √(a² + b²).": "아르강 평면에서 복소수 z = a + bi와 원점 사이의 거리: |z| = √(a² + b²).",

    // Modulus-argument (polar) and Euler forms > li
    "The <dfn data-def=\"The angle θ in radians measured anticlockwise from the positive real axis to the position vector of z, usually chosen in (−π, π].\">argument</dfn> <span class=\"chem\">theta = arg(z)</span> is the directed angle from the positive real axis to <span class=\"chem\">z</span>. Unless a question states otherwise, IB uses the <strong>principal argument</strong> in the interval <span class=\"chem\">-pi &lt; theta &lt;= pi</span>.": "<dfn data-def=\"The angle θ in radians measured anticlockwise from the positive real axis to the position vector of z, usually chosen in (−π, π].\">편각 <span class=\"en-term\">(argument)</span></dfn> <span class=\"chem\">theta = arg(z)</span>는 양의 실수축에서 <span class=\"chem\">z</span>까지 반시계 방향으로 잰 각도예요. 문제에 별도 조건이 없으면 IB에서는 구간 <span class=\"chem\">-pi &lt; theta &lt;= pi</span>의 <strong>주편각(principal argument)</strong>을 사용해요.",

    // Modulus-argument (polar) and Euler forms > data-def attribute
    "The angle θ in radians measured anticlockwise from the positive real axis to the position vector of z, usually chosen in (−π, π].": "양의 실수축에서 z의 위치벡터까지 반시계 방향으로 잰 라디안 각도 θ (보통 (−π, π] 범위에서 선택).",

    // Modulus-argument (polar) and Euler forms > formula booklet note > p
    "<strong>In your Formula Booklet (AHL 1.12–1.13):</strong> Since <span class=\"chem\">a = r cos theta</span> and <span class=\"chem\">b = r sin theta</span>, and by Euler's formula <span class=\"chem\">e^{i theta} = cos theta + i sin theta</span>, every complex number can be written in three equivalent ways:": "<strong>공식집(Formula Booklet, AHL 1.12–1.13):</strong> <span class=\"chem\">a = r cos theta</span>, <span class=\"chem\">b = r sin theta</span>이고 오일러 공식 <span class=\"chem\">e^{i theta} = cos theta + i sin theta</span>이 성립하므로, 모든 복소수는 세 가지 동치 형식으로 쓸 수 있어요:",

    // Modulus-argument (polar) and Euler forms > h3
    "Finding the principal argument <span class=\"chem\">arg(z) \\in (-\\pi, \\pi]</span>": "주편각 <span class=\"chem\">arg(z) \\in (-\\pi, \\pi]</span> 구하기",

    // Modulus-argument (polar) and Euler forms > p
    "First find the acute reference angle <span class=\"chem\">alpha = arctan(|b / a|)</span> in <span class=\"chem\">(0, pi/2)</span>, then plot <span class=\"chem\">(a, b)</span> in its quadrant to assign the correct sign or shift:": "먼저 <span class=\"chem\">(0, pi/2)</span> 범위의 예각 기준각 <span class=\"chem\">alpha = arctan(|b / a|)</span>를 구한 다음, <span class=\"chem\">(a, b)</span>가 놓인 사분면에 따라 부호나 π 보정을 해 주세요:",

    // Modulus-argument (polar) and Euler forms > table > caption
    "Quadrant adjustment for principal argument θ = arg(a + bi) ∈ (−π, π]": "주편각 θ = arg(a + bi) ∈ (−π, π]의 사분면별 보정",

    // Modulus-argument (polar) and Euler forms > table > th
    "Quadrant of <span class=\"chem\">(a, b)</span>": "<span class=\"chem\">(a, b)</span>의 사분면",

    // Modulus-argument (polar) and Euler forms > table > th
    "Signs of <span class=\"chem\">a, b</span>": "<span class=\"chem\">a, b</span>의 부호",

    // Modulus-argument (polar) and Euler forms > table > th
    "Principal argument <span class=\"chem\">theta = arg(z)</span>": "주편각 <span class=\"chem\">theta = arg(z)</span>",

    // Modulus-argument (polar) and Euler forms > table > th
    "Example": "예시",

    // Modulus-argument (polar) and Euler forms > table > th
    "Quadrant I": "제1사분면",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">theta = +alpha</span>": "<span class=\"chem\">theta = +alpha</span>",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">1 + sqrt(3)i =&gt; r = 2, theta = pi/3</span>": "<span class=\"chem\">1 + sqrt(3)i =&gt; r = 2, theta = pi/3</span>",

    // Modulus-argument (polar) and Euler forms > table > th
    "Quadrant II": "제2사분면",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">theta = pi - alpha</span>": "<span class=\"chem\">theta = pi - alpha</span>",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">-1 + i =&gt; r = sqrt(2), theta = 3pi/4</span>": "<span class=\"chem\">-1 + i =&gt; r = sqrt(2), theta = 3pi/4</span>",

    // Modulus-argument (polar) and Euler forms > table > th
    "Quadrant III": "제3사분면",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">theta = -(pi - alpha) = alpha - pi</span>": "<span class=\"chem\">theta = -(pi - alpha) = alpha - pi</span>",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">-sqrt(3) - i =&gt; r = 2, theta = -5pi/6</span>": "<span class=\"chem\">-sqrt(3) - i =&gt; r = 2, theta = -5pi/6</span>",

    // Modulus-argument (polar) and Euler forms > table > th
    "Quadrant IV": "제4사분면",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">theta = -alpha</span>": "<span class=\"chem\">theta = -alpha</span>",

    // Modulus-argument (polar) and Euler forms > table > td
    "<span class=\"chem\">1 - i =&gt; r = sqrt(2), theta = -pi/4</span>": "<span class=\"chem\">1 - i =&gt; r = sqrt(2), theta = -pi/4</span>",

    // Modulus-argument (polar) and Euler forms > common mistake > p
    "<strong>Never trust <span class=\"chem\">arctan(b/a)</span> without sketching the quadrant!</strong> For <span class=\"chem\">z = -1 - i</span> (Quadrant III), <span class=\"chem\">b/a = (-1)/(-1) = 1</span>, so <span class=\"chem\">arctan(1) = pi/4</span> (Quadrant I). The true principal argument is <span class=\"chem\">arg(-1 - i) = -3pi/4</span>.": "<strong>사분면을 확인하지 않고 <span class=\"chem\">arctan(b/a)</span>만 믿지 마세요!</strong> <span class=\"chem\">z = -1 - i</span>(제3사분면)에서 <span class=\"chem\">b/a = (-1)/(-1) = 1</span>이므로 <span class=\"chem\">arctan(1) = pi/4</span>(제1사분면)가 나와요. 실제 주편각은 <span class=\"chem\">arg(-1 - i) = -3pi/4</span>예요.",

    // Modulus-argument (polar) and Euler forms > h3
    "Geometric meaning of complex multiplication and division": "복소수 곱셈과 나눗셈의 기하학적 의미",

    // Modulus-argument (polar) and Euler forms > p
    "Using exponent laws on Euler form <span class=\"chem\">z_1 = r_1 e^{i theta_1}</span> and <span class=\"chem\">z_2 = r_2 e^{i theta_2}</span> immediately shows why polar/Euler form is so powerful:": "오일러 형식 <span class=\"chem\">z_1 = r_1 e^{i theta_1}</span>과 <span class=\"chem\">z_2 = r_2 e^{i theta_2}</span>에 지수법칙을 적용하면 극형식/오일러 형식이 왜 강력한지 바로 알 수 있어요:",

    // Modulus-argument (polar) and Euler forms > equation > maths line
    "<i>z</i><sub>1</sub><i>z</i><sub>2</sub> = <i>r</i><sub>1</sub><i>r</i><sub>2</sub><i>e</i><sup><i>i</i>(<i>θ</i><sub>1</sub> + <i>θ</i><sub>2</sub>)</sup> &nbsp;&nbsp;&nbsp; and &nbsp;&nbsp;&nbsp; <span class=\"frac\"><span><i>z</i><sub>1</sub></span><span><i>z</i><sub>2</sub></span></span> = <span class=\"frac\"><span><i>r</i><sub>1</sub></span><span><i>r</i><sub>2</sub></span></span><i>e</i><sup><i>i</i>(<i>θ</i><sub>1</sub> − <i>θ</i><sub>2</sub>)</sup>": "<i>z</i><sub>1</sub><i>z</i><sub>2</sub> = <i>r</i><sub>1</sub><i>r</i><sub>2</sub><i>e</i><sup><i>i</i>(<i>θ</i><sub>1</sub> + <i>θ</i><sub>2</sub>)</sup> &nbsp;&nbsp;&nbsp; 그리고 &nbsp;&nbsp;&nbsp; <span class=\"frac\"><span><i>z</i><sub>1</sub></span><span><i>z</i><sub>2</sub></span></span> = <span class=\"frac\"><span><i>r</i><sub>1</sub></span><span><i>r</i><sub>2</sub></span></span><i>e</i><sup><i>i</i>(<i>θ</i><sub>1</sub> − <i>θ</i><sub>2</sub>)</sup>",

    // Modulus-argument (polar) and Euler forms > equation > dd
    "moduli multiply (and divide under division)": "곱셈에서는 절댓값끼리 곱하고 (나눗셈에서는 나눔)",

    // Modulus-argument (polar) and Euler forms > equation > dt
    "arg(z<sub>1</sub>z<sub>2</sub>) = θ<sub>1</sub> + θ<sub>2</sub>": "arg(z<sub>1</sub>z<sub>2</sub>) = θ<sub>1</sub> + θ<sub>2</sub>",

    // Modulus-argument (polar) and Euler forms > equation > dd
    "arguments add (modulo 2π) under multiplication and subtract under division": "곱셈에서는 편각끼리 더하고 (2π로 보정), 나눗셈에서는 뺌",

    // Modulus-argument (polar) and Euler forms > p
    "Geometrically, multiplying any complex number <span class=\"chem\">z_1</span> by <span class=\"chem\">z_2 = r_2 e^{i theta_2}</span> stretches its length by a scale factor of <span class=\"chem\">r_2</span> and rotates it anticlockwise about the origin by angle <span class=\"chem\">theta_2</span>. In particular, multiplying by <span class=\"chem\">i = e^{i pi/2}</span> is a pure anticlockwise rotation by <span class=\"chem\">90^\\circ</span> (<span class=\"chem\">pi/2</span> radians).": "기하학적으로 어떤 복소수 <span class=\"chem\">z_1</span>에 <span class=\"chem\">z_2 = r_2 e^{i theta_2}</span>를 곱하면, 길이가 <span class=\"chem\">r_2</span>배 확대되고 원점을 중심으로 반시계 방향으로 <span class=\"chem\">theta_2</span>만큼 회전해요. 특히 <span class=\"chem\">i = e^{i pi/2}</span>를 곱하는 것은 크기 변화 없이 반시계 방향으로 <span class=\"chem\">90^\\circ</span> (<span class=\"chem\">pi/2</span> 라디안) 회전하는 것이에요.",

    // Modulus-argument (polar) and Euler forms > widget > data-title attribute
    "Argand plane multiplication & polar/Euler explorer": "아르강 평면 곱셈 및 극형식/오일러 형식 탐색기",

    // Modulus-argument (polar) and Euler forms > widget > figcaption
    "Adjust the moduli <span class=\"chem\">r_1, r_2</span> and arguments <span class=\"chem\">theta_1, theta_2</span> to see how multiplying <span class=\"chem\">z_1</span> by <span class=\"chem\">z_2</span> multiplies the lengths (<span class=\"chem\">r = r_1 r_2</span>) and adds the angles (<span class=\"chem\">theta = theta_1 + theta_2</span>) on the Argand plane.": "절댓값 <span class=\"chem\">r_1, r_2</span>와 편각 <span class=\"chem\">theta_1, theta_2</span>를 조절하여, 아르강 평면 위에서 <span class=\"chem\">z_1</span>과 <span class=\"chem\">z_2</span>를 곱할 때 길이가 곱해지고(<span class=\"chem\">r = r_1 r_2</span>) 각도가 더해지는(<span class=\"chem\">theta = theta_1 + theta_2</span>) 모습을 확인해 보세요.",

    // Modulus-argument (polar) and Euler forms > worked example > h3
    "Finding exact trigonometric values by comparing Cartesian and Euler forms": "직교 형식과 오일러 형식 비교로 삼각함수의 정확한 값 구하기",

    // Modulus-argument (polar) and Euler forms > worked example > p
    "Let <span class=\"chem\">z_1 = 1 + i</span> and <span class=\"chem\">z_2 = sqrt(3) - i</span>.": "<span class=\"chem\">z_1 = 1 + i</span>, <span class=\"chem\">z_2 = sqrt(3) - i</span>라 하자.",

    // Modulus-argument (polar) and Euler forms > worked example > p
    "(a) Express <span class=\"chem\">z_1</span> and <span class=\"chem\">z_2</span> in Euler form <span class=\"chem\">r e^{i theta}</span>. <strong>[3 marks]</strong>": "(a) <span class=\"chem\">z_1</span>과 <span class=\"chem\">z_2</span>를 오일러 형식 <span class=\"chem\">r e^{i theta}</span>로 나타내시오. <strong>[3 marks]</strong>",

    // Modulus-argument (polar) and Euler forms > worked example > p
    "(b) Hence, by expressing <span class=\"chem\">z_1 z_2</span> in both Cartesian and Euler forms, find the exact value of <span class=\"chem\">cos(pi/12)</span> and <span class=\"chem\">sin(pi/12)</span>. <strong>[4 marks]</strong>": "(b) 이를 이용하여 (Hence) <span class=\"chem\">z_1 z_2</span>를 직교 형식과 오일러 형식으로 각각 나타낸 뒤, <span class=\"chem\">cos(pi/12)</span>와 <span class=\"chem\">sin(pi/12)</span>의 정확한 값을 구하시오 (Find). <strong>[4 marks]</strong>",

    // Modulus-argument (polar) and Euler forms > worked example > data-title attribute
    "Find the modulus and principal argument of z₁ and z₂": "z₁과 z₂의 절댓값과 주편각 구하기",

    // Modulus-argument (polar) and Euler forms > worked example > p
    "z₁ = 1 + i is in Quadrant I with r₁ = √(1² + 1²) = √2 and θ₁ = π/4. z₂ = √3 − i is in Quadrant IV with r₂ = √(3 + 1) = 2 and θ₂ = −π/6.": "z₁ = 1 + i는 제1사분면에 있으므로 r₁ = √(1² + 1²) = √2, θ₁ = π/4예요. z₂ = √3 − i는 제4사분면에 있으므로 r₂ = √(3 + 1) = 2, θ₂ = −π/6이에요.",

    // Modulus-argument (polar) and Euler forms > worked example > data-title attribute
    "Compute the product z₁z₂ in Euler form and in Cartesian form": "곱 z₁z₂를 오일러 형식과 직교 형식으로 각각 계산하기",

    // Modulus-argument (polar) and Euler forms > worked example > p
    "In Euler form, multiply moduli and add arguments: π/4 − π/6 = π/12. In Cartesian form, expand (1 + i)(√3 − i).": "오일러 형식에서는 절댓값을 곱하고 편각을 더해요: π/4 − π/6 = π/12. 직교 형식에서는 (1 + i)(√3 − i)를 전개해요.",

    // Modulus-argument (polar) and Euler forms > worked example > maths line
    "Euler: <i>z</i><sub>1</sub><i>z</i><sub>2</sub> = 2√2 <i>e</i><sup><i>i</i>(<i>π</i>/4 − <i>π</i>/6)</sup> = 2√2 <i>e</i><sup><i>iπ</i>/12</sup> = 2√2 (cos(<i>π</i>/12) + <i>i</i> sin(<i>π</i>/12)) <b>[M1]</b>": "오일러 형식: <i>z</i><sub>1</sub><i>z</i><sub>2</sub> = 2√2 <i>e</i><sup><i>i</i>(<i>π</i>/4 − <i>π</i>/6)</sup> = 2√2 <i>e</i><sup><i>iπ</i>/12</sup> = 2√2 (cos(<i>π</i>/12) + <i>i</i> sin(<i>π</i>/12)) <b>[M1]</b>",

    // Modulus-argument (polar) and Euler forms > worked example > maths line
    "Cartesian: (1 + <i>i</i>)(√3 − <i>i</i>) = (√3 + 1) + (√3 − 1)<i>i</i> <b>[A1]</b>": "직교 형식: (1 + <i>i</i>)(√3 − <i>i</i>) = (√3 + 1) + (√3 − 1)<i>i</i> <b>[A1]</b>",

    // Modulus-argument (polar) and Euler forms > worked example > data-title attribute
    "Equate real and imaginary parts to isolate cos(π/12) and sin(π/12)": "실수부와 허수부를 비교해 cos(π/12)와 sin(π/12) 구하기",

    // Modulus-argument (polar) and Euler forms > worked example > p
    "Both expressions represent the exact same complex number z₁z₂, so their real and imaginary parts must be equal.": "두 식은 똑같은 복소수 z₁z₂를 나타내므로 실수부와 허수부가 각각 같아야 해요.",

    // Modulus-argument (polar) and Euler forms > worked example > p
    "cos(π/12) = (√6 + √2)/4, &nbsp; sin(π/12) = (√6 − √2)/4": "cos(π/12) = (√6 + √2)/4, &nbsp; sin(π/12) = (√6 − √2)/4",

    // Modulus-argument (polar) and Euler forms > try it > p
    "Find the principal argument <span class=\"chem\">arg(z)</span> (in radians) of the complex number <span class=\"chem\">z = -3 sqrt(3) + 3i</span>. You may enter an exact multiple of <span class=\"mono\">pi</span> (such as <span class=\"mono\">5*pi/6</span>) or a 3 s.f. decimal.": "복소수 <span class=\"chem\">z = -3 sqrt(3) + 3i</span>의 주편각 <span class=\"chem\">arg(z)</span> (라디안)을 구하시오 (Find). <span class=\"mono\">pi</span>의 정확한 배수(예: <span class=\"mono\">5*pi/6</span>) 또는 유효숫자 3자리 소수로 입력할 수 있어요.",

    // Modulus-argument (polar) and Euler forms > try it > li
    "Identify the quadrant: <span class=\"chem\">Re(z) = -3 sqrt(3) &lt; 0</span> and <span class=\"chem\">Im(z) = 3 &gt; 0</span>, so <span class=\"chem\">z</span> lies in Quadrant II.": "사분면을 확인하세요: <span class=\"chem\">Re(z) = -3 sqrt(3) &lt; 0</span>이고 <span class=\"chem\">Im(z) = 3 &gt; 0</span>이므로 <span class=\"chem\">z</span>는 제2사분면에 있어요.",

    // Modulus-argument (polar) and Euler forms > try it > li
    "The acute reference angle is <span class=\"chem\">alpha = arctan(3 / (3 sqrt(3))) = arctan(1 / sqrt(3)) = pi/6</span>. In Quadrant II, <span class=\"chem\">theta = pi - pi/6 = 5pi/6</span>.": "예각 기준각은 <span class=\"chem\">alpha = arctan(3 / (3 sqrt(3))) = arctan(1 / sqrt(3)) = pi/6</span>이에요. 제2사분면에서는 <span class=\"chem\">theta = pi - pi/6 = 5pi/6</span>예요.",

    // Modulus-argument (polar) and Euler forms > try it > maths line
    "<i>α</i> = arctan(1 / √3) = <i>π</i> / 6": "<i>α</i> = arctan(1 / √3) = <i>π</i> / 6",

    // Modulus-argument (polar) and Euler forms > try it > maths line
    "Quadrant II: arg(<i>z</i>) = <i>π</i> − <i>π</i> / 6 = <b>5<i>π</i> / 6</b> (≈ 2.62 rad)": "제II사분면: arg(<i>z</i>) = <i>π</i> − <i>π</i> / 6 = <b>5<i>π</i> / 6</b> (≈ 2.62 rad)",

    // De Moivre's theorem, n-th roots and polynomial roots > data-toc attribute
    "De Moivre & roots": "드 무아브르와 거듭제곱근",

    // De Moivre's theorem, n-th roots and polynomial roots > h2
    "De Moivre's theorem, <i>n</i>-th roots and polynomial roots": "드 무아브르 정리, <i>n</i>제곱근과 다항방정식의 근",

    // De Moivre's theorem, n-th roots and polynomial roots > p
    "Repeatedly multiplying <span class=\"chem\">z = r(cos theta + i sin theta)</span> by itself <span class=\"chem\">n</span> times multiplies the modulus to <span class=\"chem\">r^n</span> and adds the angle <span class=\"chem\">n</span> times to <span class=\"chem\">n theta</span>. This result holds for all rational exponents <span class=\"chem\">n \\in \\mathbb{Q}</span> and is known as <dfn data-def=\"For any complex number r(cos θ + i sin θ) and rational number n, [r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ).\">De Moivre's theorem</dfn>:": "<span class=\"chem\">z = r(cos theta + i sin theta)</span>를 <span class=\"chem\">n</span>번 거듭 곱하면 절댓값은 <span class=\"chem\">r^n</span>이 되고 편각은 <span class=\"chem\">n</span>번 더해져 <span class=\"chem\">n theta</span>가 돼요. 이 결과는 모든 유리수 지수 <span class=\"chem\">n \\in \\mathbb{Q}</span>에 대해 성립하며, 이를 <dfn data-def=\"For any complex number r(cos θ + i sin θ) and rational number n, [r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ).\">드 무아브르 정리 <span class=\"en-term\">(De Moivre's theorem)</span></dfn>라고 해요:",

    // De Moivre's theorem, n-th roots and polynomial roots > data-def attribute
    "For any complex number r(cos θ + i sin θ) and rational number n, [r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ).": "임의의 복소수 r(cos θ + i sin θ)와 유리수 n에 대하여 [r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ)이 성립한다는 정리.",

    // De Moivre's theorem, n-th roots and polynomial roots > key idea > p
    "<strong>Euler bridge identities for trigonometric proofs (Paper 3 favourite):</strong> For a complex number on the unit circle <span class=\"chem\">z = cos theta + i sin theta = e^{i theta}</span>, we have <span class=\"chem\">z^{-1} = cos theta - i sin theta = e^{-i theta}</span>. By De Moivre's theorem:": "<strong>삼각함수 증명을 위한 오일러 연결 항등식 (Paper 3 단골 주제):</strong> 단위원 위의 복소수 <span class=\"chem\">z = cos theta + i sin theta = e^{i theta}</span>에 대해 <span class=\"chem\">z^{-1} = cos theta - i sin theta = e^{-i theta}</span>예요. 드 무아브르 정리에 의해:",

    // De Moivre's theorem, n-th roots and polynomial roots > key idea > p
    "<span class=\"chem\">z^n + z^{-n} = 2 cos(n theta)</span> &nbsp;&nbsp;and&nbsp;&nbsp; <span class=\"chem\">z^n - z^{-n} = 2i sin(n theta)</span>.": "<span class=\"chem\">z^n + z^{-n} = 2 cos(n theta)</span> &nbsp;&nbsp;그리고&nbsp;&nbsp; <span class=\"chem\">z^n - z^{-n} = 2i sin(n theta)</span>.",

    // De Moivre's theorem, n-th roots and polynomial roots > key idea > p
    "Expanding <span class=\"chem\">(z + z^{-1})^n = (2 cos theta)^n</span> expresses powers like <span class=\"chem\">cos^4 theta</span> in terms of multiple angles <span class=\"chem\">cos(4 theta)</span> and <span class=\"chem\">cos(2 theta)</span> so they can be integrated directly!": "<span class=\"chem\">(z + z^{-1})^n = (2 cos theta)^n</span>을 전개하면 <span class=\"chem\">cos^4 theta</span> 같은 거듭제곱을 <span class=\"chem\">cos(4 theta)</span>, <span class=\"chem\">cos(2 theta)</span> 등의 배각으로 바꿀 수 있어 바로 적분할 수 있게 돼요!",

    // De Moivre's theorem, n-th roots and polynomial roots > h3
    "Solving <span class=\"chem\">z^n = w</span>: the <span class=\"chem\">n</span>-th roots of a complex number": "<span class=\"chem\">z^n = w</span> 풀기: 복소수의 <span class=\"chem\">n</span>제곱근",

    // De Moivre's theorem, n-th roots and polynomial roots > p
    "Every non-zero complex number <span class=\"chem\">w = r e^{i theta}</span> has <strong><span class=\"chem\">n</span> distinct <span class=\"chem\">n</span>-th roots</strong>. Because adding <span class=\"chem\">2 pi k</span> (<span class=\"chem\">k \\in \\mathbb{Z}</span>) to the argument of <span class=\"chem\">w</span> leaves <span class=\"chem\">w</span> unchanged, writing <span class=\"chem\">w = r e^{i(theta + 2 pi k)}</span> and taking the <span class=\"chem\">(1/n)</span>-th power gives:": "0이 아닌 모든 복소수 <span class=\"chem\">w = r e^{i theta}</span>는 <strong>서로 다른 <span class=\"chem\">n</span>개의 <span class=\"chem\">n</span>제곱근</strong>을 가져요. <span class=\"chem\">w</span>의 편각에 <span class=\"chem\">2 pi k</span> (<span class=\"chem\">k \\in \\mathbb{Z}</span>)를 더해도 <span class=\"chem\">w</span>는 변하지 않으므로, <span class=\"chem\">w = r e^{i(theta + 2 pi k)}</span>로 쓰고 <span class=\"chem\">(1/n)</span>제곱을 취하면:",

    // De Moivre's theorem, n-th roots and polynomial roots > equation > maths line
    "<i>z</i><sub><i>k</i></sub> = <i>r</i><sup>1/<i>n</i></sup> exp<span class=\" brackets\">(<i>i</i> <span class=\"frac\"><span><i>θ</i> + 2<i>πk</i></span><span><i>n</i></span></span>)</span> = <i>r</i><sup>1/<i>n</i></sup> cis<span class=\" brackets\">(<span class=\"frac\"><span><i>θ</i> + 2<i>πk</i></span><span><i>n</i></span></span>)</span>, &nbsp;&nbsp; <i>k</i> = 0, 1, 2, …, <i>n</i> − 1": "<i>z</i><sub><i>k</i></sub> = <i>r</i><sup>1/<i>n</i></sup> exp<span class=\" brackets\">(<i>i</i> <span class=\"frac\"><span><i>θ</i> + 2<i>πk</i></span><span><i>n</i></span></span>)</span> = <i>r</i><sup>1/<i>n</i></sup> cis<span class=\" brackets\">(<span class=\"frac\"><span><i>θ</i> + 2<i>πk</i></span><span><i>n</i></span></span>)</span>, &nbsp;&nbsp; <i>k</i> = 0, 1, 2, …, <i>n</i> − 1",

    // De Moivre's theorem, n-th roots and polynomial roots > li
    "<strong>Regular <span class=\"chem\">n</span>-gon geometry</strong>: All <span class=\"chem\">n</span> roots have the exact same modulus <span class=\"chem\">r^{1/n}</span> and are equally spaced around the circle of radius <span class=\"chem\">r^{1/n}</span> by an angle of <span class=\"chem\">2 pi / n</span> radians. For <span class=\"chem\">n &gt;= 3</span>, they form the vertices of a <strong>regular <span class=\"chem\">n</span>-gon</strong> centered at the origin, so the <strong>sum of all <span class=\"chem\">n</span> roots is always <span class=\"chem\">0</span></strong>.": "<strong>정<span class=\"chem\">n</span>각형 기하학</strong>: <span class=\"chem\">n</span>개의 근은 모두 절댓값이 <span class=\"chem\">r^{1/n}</span>으로 같고, 반지름 <span class=\"chem\">r^{1/n}</span>인 원 둘레 위에 <span class=\"chem\">2 pi / n</span> 라디안 간격으로 일정하게 놓여요. <span class=\"chem\">n &gt;= 3</span>이면 원점이 중심인 <strong>정<span class=\"chem\">n</span>각형</strong>의 꼭짓점을 이루므로, <strong>모든 <span class=\"chem\">n</span>개 근의 합은 항상 <span class=\"chem\">0</span></strong>이에요.",

    // De Moivre's theorem, n-th roots and polynomial roots > li
    "<strong>Roots of unity (<span class=\"chem\">z^n = 1</span>)</strong>: Setting <span class=\"chem\">r = 1, theta = 0</span> gives the <span class=\"chem\">n</span>-th roots of unity <span class=\"chem\">1, omega, omega^2, ..., omega^{n-1}</span> where <span class=\"chem\">omega = e^{2 pi i / n}</span>, which satisfy <span class=\"chem\">1 + omega + omega^2 + ... + omega^{n-1} = 0</span>.": "<strong>1의 n제곱근 (<span class=\"chem\">z^n = 1</span>)</strong>: <span class=\"chem\">r = 1, theta = 0</span>으로 두면 1의 <span class=\"chem\">n</span>제곱근 <span class=\"chem\">1, omega, omega^2, ..., omega^{n-1}</span> (<span class=\"chem\">omega = e^{2 pi i / n}</span>)을 얻으며, <span class=\"chem\">1 + omega + omega^2 + ... + omega^{n-1} = 0</span>을 만족해요.",

    // De Moivre's theorem, n-th roots and polynomial roots > widget > data-title attribute
    "n-th roots of a complex number on the Argand diagram": "아르강 평면 위의 복소수 n제곱근",

    // De Moivre's theorem, n-th roots and polynomial roots > widget > figcaption
    "Choose the degree <span class=\"chem\">n</span> (from 2 to 8) and the modulus <span class=\"chem\">r</span> and argument <span class=\"chem\">theta</span> of <span class=\"chem\">w</span> in <span class=\"chem\">z^n = w</span>. The <span class=\"chem\">n</span> roots lie on the circle of radius <span class=\"chem\">r^{1/n}</span> spaced by <span class=\"chem\">2 pi / n</span> radians, forming a regular polygon whose centre of mass is the origin.": "<span class=\"chem\">z^n = w</span>에서 차수 <span class=\"chem\">n</span>(2부터 8까지)과 <span class=\"chem\">w</span>의 절댓값 <span class=\"chem\">r</span>, 편각 <span class=\"chem\">theta</span>를 선택해 보세요. <span class=\"chem\">n</span>개의 근은 반지름 <span class=\"chem\">r^{1/n}</span>인 원 위에 <span class=\"chem\">2 pi / n</span> 라디안 간격으로 놓이며, 무게중심이 원점인 정다각형을 이뤄요.",

    // De Moivre's theorem, n-th roots and polynomial roots > h3
    "Complex Conjugate Root Theorem for real polynomials": "실수 계수 다항식의 켤레근 정리",

    // De Moivre's theorem, n-th roots and polynomial roots > p
    "If a polynomial <span class=\"chem\">P(z) = a_n z^n + a_{n-1} z^{n-1} + ... + a_1 z + a_0</span> has <strong>real coefficients</strong> (<span class=\"chem\">a_k \\in \\mathbb{R}</span>) and <span class=\"chem\">z_1 = a + bi</span> (<span class=\"chem\">b != 0</span>) is a root of <span class=\"chem\">P(z) = 0</span>, then its complex conjugate <span class=\"chem\">z_1^* = a - bi</span> is also a root. Together, the conjugate pair produces a <strong>real quadratic factor</strong> of <span class=\"chem\">P(z)</span>:": "다항식 <span class=\"chem\">P(z) = a_n z^n + a_{n-1} z^{n-1} + ... + a_1 z + a_0</span>의 모든 계수가 <strong>실수</strong>(<span class=\"chem\">a_k \\in \\mathbb{R}</span>)이고 <span class=\"chem\">z_1 = a + bi</span> (<span class=\"chem\">b != 0</span>)가 <span class=\"chem\">P(z) = 0</span>의 근이면, 그 켤레복소수 <span class=\"chem\">z_1^* = a - bi</span>도 반드시 근이에요. 이 켤레근 쌍은 <span class=\"chem\">P(z)</span>의 <strong>실수 계수 이차 인수</strong>를 만들어요:",

    // De Moivre's theorem, n-th roots and polynomial roots > not needed for IB > p
    "<strong>Not needed for IB Math AA HL:</strong> General complex loci on the Argand plane (such as Apollonius circles <span class=\"chem\">|z - z_1| = k|z - z_2|</span> or half-line/arc loci <span class=\"chem\">arg((z - z_1)/(z - z_2)) = alpha</span>), <span class=\"chem\">2 × 2</span> matrix representations of complex numbers, and complex logarithms or trigonometric functions of complex inputs are <strong>not</strong> in the AA HL syllabus.": "<strong>IB Math AA HL 시험 범위 외 내용:</strong> 아르강 평면 위의 일반 복소수 자취(아폴로니오스의 원 <span class=\"chem\">|z - z_1| = k|z - z_2|</span>이나 반직선/호 자취 <span class=\"chem\">arg((z - z_1)/(z - z_2)) = alpha</span>), 복소수의 <span class=\"chem\">2 × 2</span> 행렬 표현, 복소로그함수 및 복소수 변수 삼각함수는 AA HL 교육과정에 포함되지 <strong>않아요</strong>.",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > h3
    "Finding all cube roots of a complex number and using conjugate pairs": "복소수의 세제곱근 모두 구하기 및 켤레근 활용",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > p
    "(a) Solve the equation <span class=\"chem\">z^3 = -4 sqrt(2) + 4 sqrt(2)i</span>, giving your answers in the form <span class=\"chem\">r e^{i theta}</span> where <span class=\"chem\">r &gt; 0</span> and <span class=\"chem\">-pi &lt; theta &lt;= pi</span>. <strong>[5 marks]</strong>": "(a) 방정식 <span class=\"chem\">z^3 = -4 sqrt(2) + 4 sqrt(2)i</span>를 풀고, 답을 <span class=\"chem\">r e^{i theta}</span> (<span class=\"chem\">r &gt; 0</span>, <span class=\"chem\">-pi &lt; theta &lt;= pi</span>) 꼴로 나타내시오. <strong>[5 marks]</strong>",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > p
    "(b) Given that <span class=\"chem\">z_1 = 2 - i</span> is a root of the real polynomial <span class=\"chem\">P(z) = z^3 - 7z^2 + 17z - 15 = 0</span>, find the other two roots. <strong>[4 marks]</strong>": "(b) <span class=\"chem\">z_1 = 2 - i</span>가 실수 계수 다항방정식 <span class=\"chem\">P(z) = z^3 - 7z^2 + 17z - 15 = 0</span>의 한 근일 때, 나머지 두 근을 구하시오 (Find). <strong>[4 marks]</strong>",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > data-title attribute
    "Convert w = −4√2 + 4√2 i to Euler form with general argument": "w = −4√2 + 4√2 i를 일반편각을 포함한 오일러 형식으로 바꾸기",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > p
    "First compute |w| and locate w in Quadrant II to get its principal argument, then add 2πk for the three roots.": "먼저 |w|를 계산하고 제2사분면에 있는 w의 주편각을 구한 뒤, 3개의 근을 얻기 위해 2πk를 더해요.",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > maths line
    "Quadrant II: arg(<i>w</i>) = <i>π</i> − <span class=\"frac\"><span><i>π</i></span><span>4</span></span> = <span class=\"frac\"><span>3<i>π</i></span><span>4</span></span> ⇒ <i>z</i><sup>3</sup> = 8 <i>e</i><sup><i>i</i>(3<i>π</i>/4 + 2<i>πk</i>)</sup> <b>[A1]</b>": "제II사분면: arg(<i>w</i>) = <i>π</i> − <span class=\"frac\"><span><i>π</i></span><span>4</span></span> = <span class=\"frac\"><span>3<i>π</i></span><span>4</span></span> ⇒ <i>z</i><sup>3</sup> = 8 <i>e</i><sup><i>i</i>(3<i>π</i>/4 + 2<i>πk</i>)</sup> <b>[A1]</b>",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > data-title attribute
    "Take the cube root for k = 0, 1, −1 to stay in (−π, π]": "(−π, π] 범위를 유지하도록 k = 0, 1, −1에서 세제곱근 구하기",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > p
    "Taking the 1/3 power gives modulus 8^(1/3) = 2 and angles (3π/4 + 2πk)/3 = π/4 + 2πk/3.": "1/3제곱을 취하면 절댓값은 8^(1/3) = 2이고, 편각은 (3π/4 + 2πk)/3 = π/4 + 2πk/3이 돼요.",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > data-title attribute
    "Use the Conjugate Root Theorem and factorize P(z)": "켤레근 정리를 이용해 P(z) 인수분해하기",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > p
    "Because all coefficients of P(z) are real, z₂ = z₁* = 2 + i is automatically a root, giving a quadratic factor z² − 4z + 5.": "P(z)의 모든 계수가 실수이므로 z₂ = z₁* = 2 + i도 자동으로 근이 되며, 이차 인수 z² − 4z + 5를 얻어요.",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > maths line
    "Since coefficients are real, <b><i>z</i><sub>2</sub> = 2 + <i>i</i></b> is also a root. <b>[R1]</b>": "계수가 모두 실수이므로 <b><i>z</i><sub>2</sub> = 2 + <i>i</i></b>도 근이에요. <b>[R1]</b>",

    // De Moivre's theorem, n-th roots and polynomial roots > worked example > p
    "(a) 2e^{iπ/4}, 2e^{11πi/12}, 2e^{−5πi/12} &nbsp;&nbsp; (b) 2 + i and 3": "(a) 2e^{iπ/4}, 2e^{11πi/12}, 2e^{−5πi/12} &nbsp;&nbsp; (b) 2 + i와 3",

    // De Moivre's theorem, n-th roots and polynomial roots > try it > p
    "Let <span class=\"chem\">z = sqrt(3) + i</span>. Find the <strong>smallest positive integer <span class=\"chem\">n</span></strong> such that <span class=\"chem\">z^n</span> is a <strong>real number</strong>.": "<span class=\"chem\">z = sqrt(3) + i</span>라 하자. <span class=\"chem\">z^n</span>이 <strong>실수</strong>가 되도록 하는 <strong>가장 작은 양의 정수 <span class=\"chem\">n</span></strong>을 구하시오 (Find).",

    // De Moivre's theorem, n-th roots and polynomial roots > try it > li
    "Convert <span class=\"chem\">z = sqrt(3) + i</span> to polar/Euler form: <span class=\"chem\">r = 2</span> and <span class=\"chem\">theta = arg(z) = pi/6</span>.": "<span class=\"chem\">z = sqrt(3) + i</span>를 극형식/오일러 형식으로 바꾸세요: <span class=\"chem\">r = 2</span>이고 <span class=\"chem\">theta = arg(z) = pi/6</span>이에요.",

    // De Moivre's theorem, n-th roots and polynomial roots > try it > li
    "By De Moivre's theorem, <span class=\"chem\">z^n = 2^n(cos(n pi/6) + i sin(n pi/6))</span>. For <span class=\"chem\">z^n</span> to be real, we need <span class=\"chem\">Im(z^n) = 0 &lt;=&gt; sin(n pi/6) = 0</span>.": "드 무아브르 정리에 의해 <span class=\"chem\">z^n = 2^n(cos(n pi/6) + i sin(n pi/6))</span>이에요. <span class=\"chem\">z^n</span>이 실수가 되려면 <span class=\"chem\">Im(z^n) = 0 &lt;=&gt; sin(n pi/6) = 0</span>이어야 해요.",

    // De Moivre's theorem, n-th roots and polynomial roots > try it > maths line
    "Im(<i>z</i><sup><i>n</i></sup>) = 0 ⇔ sin(<i>nπ</i>/6) = 0 ⇔ <i>nπ</i>/6 = <i>kπ</i> ⇒ least <i>n</i> ∈ ℤ<sup>+</sup> is <b>6</b>": "Im(<i>z</i><sup><i>n</i></sup>) = 0 ⇔ sin(<i>nπ</i>/6) = 0 ⇔ <i>nπ</i>/6 = <i>kπ</i> ⇒ 최소 양의 정수 <i>n</i> ∈ ℤ<sup>+</sup>는 <b>6</b>",

    // Check your understanding > data-toc attribute
    "Practice": "연습 문제",

    // Check your understanding > h2
    "Check your understanding": "이해도 확인하기",

    // Check your understanding > data-title attribute
    "Topic 1.4 practice check": "Topic 1.4 연습 문제",

    // widget string (assets/js/widgets-t1-4.js)
    "Modulus r₁ = |z₁|": "절댓값 r₁ = |z₁|",

    // widget string (assets/js/widgets-t1-4.js)
    "Angle θ₁ (°)": "편각 θ₁ (°)",

    // widget string (assets/js/widgets-t1-4.js)
    "Modulus r₂ = |z₂|": "절댓값 r₂ = |z₂|",

    // widget string (assets/js/widgets-t1-4.js)
    "Angle θ₂ (°)": "편각 θ₂ (°)",

    // widget string (assets/js/widgets-t1-4.js)
    "Preset: × i (90° rotation)": "예시: × i (90° 회전)",

    // widget string (assets/js/widgets-t1-4.js)
    "Preset: z · z* = |z|²": "예시: z · z* = |z|²",

    // widget string (assets/js/widgets-t1-4.js)
    "z₁ (Euler & Cartesian)": "z₁ (오일러 & 직교 형식)",

    // widget string (assets/js/widgets-t1-4.js)
    "z₂ (Euler & Cartesian)": "z₂ (오일러 & 직교 형식)",

    // widget string (assets/js/widgets-t1-4.js)
    "Product z₁z₂ = r₁r₂ e^{i(θ₁+θ₂)}": "곱 z₁z₂ = r₁r₂ e^{i(θ₁+θ₂)}",

    // widget string (assets/js/widgets-t1-4.js)
    "Principal arg(z₁z₂)": "주편각 arg(z₁z₂)",

    // widget string (assets/js/widgets-t1-4.js)
    "Argand diagram showing complex vectors z₁, z₂ and their product z₁z₂": "복소수 벡터 z₁, z₂와 그 곱 z₁z₂를 나타낸 아르강 평면",

    // widget string (assets/js/widgets-t1-4.js)
    "Re(z)": "Re(z)",

    // widget string (assets/js/widgets-t1-4.js)
    "Im(z)": "Im(z)",

    // widget string (assets/js/widgets-t1-4.js)
    "Degree n (number of roots)": "차수 n (근의 개수)",

    // widget string (assets/js/widgets-t1-4.js)
    "Target modulus |w| = r": "목표 절댓값 |w| = r",

    // widget string (assets/js/widgets-t1-4.js)
    "Target angle arg(w) = θ (°)": "목표 편각 arg(w) = θ (°)",

    // widget string (assets/js/widgets-t1-4.js)
    "5th roots of unity (z⁵ = 1)": "1의 5제곱근 (z⁵ = 1)",

    // widget string (assets/js/widgets-t1-4.js)
    "Cube roots of −8 (z³ = −8)": "−8의 세제곱근 (z³ = −8)",

    // widget string (assets/js/widgets-t1-4.js)
    "4th roots of −8 + 8√3 i": "−8 + 8√3 i의 4제곱근",

    // widget string (assets/js/widgets-t1-4.js)
    "Root circle radius r^{1/n}": "근이 놓인 원의 반지름 r^{1/n}",

    // widget string (assets/js/widgets-t1-4.js)
    "Angular spacing 2π/n": "각도 간격 2π/n",

    // widget string (assets/js/widgets-t1-4.js)
    "Principal root z₀ (k = 0)": "주근 z₀ (k = 0)",

    // widget string (assets/js/widgets-t1-4.js)
    "Sum of all n roots": "n개 근의 총합",

    // widget string (assets/js/widgets-t1-4.js)
    "Argand diagram showing the n-th roots of w forming a regular polygon": "정다각형을 이루는 w의 n제곱근을 나타낸 아르강 평면",

    // widget string (assets/js/widgets-t1-4.js)
    "Regular n-gon of roots": "근으로 이루어진 정n각형",

  }
});
