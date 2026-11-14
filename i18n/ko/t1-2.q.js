/* t1-2.q — ko question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't1-2.q', {
  questions: {

    // ── t1-2-q001 · numeric · foundation · SL · SL 1.7 · 2 marks
    "t1-2-q001": {
      // EN: <p>Evaluate <span class="chem">27^{-2/3}</span>, giving your answer as an exact fraction.</p>
      stem: "<p><span class=\"chem\">27^{-2/3}</span>의 값을 정확한 분수로 구하시오.</p>",
      hints: [
        // EN: Use <span class="chem">a^{-m/n} = 1 / (a^{1/n})^m</span>: take the cube root of 27 first before squaring.
        "<span class=\"chem\">a^{-m/n} = 1 / (a^{1/n})^m</span>을 이용하세요: 제곱하기 전에 먼저 27의 세제곱근을 구하세요.",
        // EN: Since <span class="chem">27^{1/3} = 3</span>, compute <span class="chem">3^{-2}</span>.
        "<span class=\"chem\">27^{1/3} = 3</span>이므로 <span class=\"chem\">3^{-2}</span>을 계산하세요.",
      ],
      // EN: <div class="worked__math">27<sup>−2/3</sup> = (27<sup>1/3</sup>)<sup>−2</sup> = 3<sup>−2</sup> = <b><span class="frac"><span>1</span><span>9</span></span></b></div>
      solution: "<div class=\"worked__math\">27<sup>−2/3</sup> = (27<sup>1/3</sup>)<sup>−2</sup> = 3<sup>−2</sup> = <b><span class=\"frac\"><span>1</span><span>9</span></span></b></div>",
    },

    // ── t1-2-q002 · mcq · foundation · SL · SL 1.7 · 3 marks
    "t1-2-q002": {
      // EN: <p>Given that <span class="chem">p = ln a</span> and <span class="chem">q = ln b</span> (where <span class="chem">a, b &gt; 0</span>), express <span class="chem">ln(a^3 / sqrt(b))</span> in terms of <span class="chem">p</span> and <span class="chem">q</span>.</p>
      stem: "<p><span class=\"chem\">p = ln a</span>이고 <span class=\"chem\">q = ln b</span>(<span class=\"chem\">a, b &gt; 0</span>)일 때, <span class=\"chem\">ln(a^3 / sqrt(b))</span>를 <span class=\"chem\">p</span>와 <span class=\"chem\">q</span>로 나타내시오.</p>",
      options: [
        // EN: <span class="chem">3p - (1/2)q</span>
        "<span class=\"chem\">3p - (1/2)q</span>",
        // EN: <span class="chem">3p / ((1/2)q)</span>
        "<span class=\"chem\">3p / ((1/2)q)</span>",
        // EN: <span class="chem">p^3 - sqrt(q)</span>
        "<span class=\"chem\">p^3 - sqrt(q)</span>",
        // EN: <span class="chem">3p + (1/2)q</span>
        "<span class=\"chem\">3p + (1/2)q</span>",
      ],
      hints: [
        // EN: Rewrite <span class="chem">sqrt(b)</span> as <span class="chem">b^{1/2}</span> and apply the quotient rule <span class="chem">ln(X/Y) = ln X - ln Y</span>.
        "<span class=\"chem\">sqrt(b)</span>를 <span class=\"chem\">b^{1/2}</span>으로 고쳐 쓰고 몫의 로그 성질 <span class=\"chem\">ln(X/Y) = ln X - ln Y</span>를 적용하세요.",
        // EN: Apply the power rule <span class=\"chem\">ln(x^m) = m ln x</span> to each term.
        "각 항에 거듭제곱의 로그 성질 <span class=\"chem\">ln(x^m) = m ln x</span>를 적용하세요.",
      ],
      // EN: <div class="worked__math">ln(<i>a</i><sup>3</sup> / <i>b</i><sup>1/2</sup>) = ln(<i>a</i><sup>3</sup>) − ln(<i>b</i><sup>1/2</sup>) = 3 ln <i>a</i> − <span class="frac"><span>1</span><span>2</span></span> ln <i>b</i> = <b>3<i>p</i> − <span class="frac"><span>1</span><span>2</span></span><i>q</i></b></div>
      solution: "<div class=\"worked__math\">ln(<i>a</i><sup>3</sup> / <i>b</i><sup>1/2</sup>) = ln(<i>a</i><sup>3</sup>) − ln(<i>b</i><sup>1/2</sup>) = 3 ln <i>a</i> − <span class=\"frac\"><span>1</span><span>2</span></span> ln <i>b</i> = <b>3<i>p</i> − <span class=\"frac\"><span>1</span><span>2</span></span><i>q</i></b></div>",
      misconception: {
        // EN (option B): The logarithm of a quotient is the difference of the logarithms (<span class="chem">ln(X/Y) = ln X - ln Y</span>), not the quotient of the logarithms.
        "1": "나눗셈(몫)의 로그는 로그의 나눗셈이 아니라 로그의 차(<span class=\"chem\">ln(X/Y) = ln X - ln Y</span>)예요.",
        // EN (option C): The power law of logarithms brings exponents to the front as multipliers: <span class="chem">ln(a^3) = 3 ln a = 3p</span>, not <span class="chem">p^3</span>.
        "2": "로그의 거듭제곱 성질은 지수를 계수로 앞으로 내리는 것이에요: <span class=\"chem\">p^3</span>이 아니라 <span class=\"chem\">ln(a^3) = 3 ln a = 3p</span>예요.",
        // EN (option D): Because <span class="chem">sqrt(b) = b^{1/2}</span> is in the denominator, its logarithm is subtracted, not added.
        "3": "<span class=\"chem\">sqrt(b) = b^{1/2}</span>이 분모에 있으므로 그 로그는 더하는 것이 아니라 빼야 해요.",
      },
    },

    // ── t1-2-q003 · numeric · foundation · SL · SL 1.7 · 3 marks
    "t1-2-q003": {
      // EN: <p>Find the exact value of <span class="chem">log_2(24) - log_2(3) + log_9(3)</span>.</p>
      stem: "<p><span class=\"chem\">log_2(24) - log_2(3) + log_9(3)</span>의 정확한 값(exact value)을 구하시오 (Find).</p>",
      hints: [
        // EN: Combine the base-2 logs using <span class="chem">log_2(24) - log_2(3) = log_2(24/3) = log_2(8)</span>.
        "밑이 2인 로그를 합치세요: <span class=\"chem\">log_2(24) - log_2(3) = log_2(24/3) = log_2(8)</span>.",
        // EN: For <span class="chem">log_9(3)</span>, note that <span class="chem">3 = 9^{1/2}</span>.
        "<span class=\"chem\">log_9(3)</span>에서는 <span class=\"chem\">3 = 9^{1/2}</span>임을 이용하세요.",
      ],
      // EN: <div class="worked__math">log<sub>2</sub>(24 / 3) + log<sub>9</sub>(9<sup>1/2</sup>) = log<sub>2</sub>(8) + <span class="frac"><span>1</span><span>2</span></span> = 3 + 0.5 = <b>3.5</b> (or <b>7/2</b>)</div>
      solution: "<div class=\"worked__math\">log<sub>2</sub>(24 / 3) + log<sub>9</sub>(9<sup>1/2</sup>) = log<sub>2</sub>(8) + <span class=\"frac\"><span>1</span><span>2</span></span> = 3 + 0.5 = <b>3.5</b> (또는 <b>7/2</b>)</div>",
      // EN: 7/2 (or 3.5)
      answerDisplay: "7/2 (또는 3.5)",
    },

    // ── t1-2-q004 · numeric · foundation · SL · SL 1.9 · 3 marks
    "t1-2-q004": {
      // EN: <p>Find the coefficient of <span class="chem">x^3</span> in the binomial expansion of <span class="chem">(2 + x)^5</span>.</p>
      stem: "<p><span class=\"chem\">(2 + x)^5</span>의 이항전개식에서 <span class=\"chem\">x^3</span>의 계수를 구하시오 (Find).</p>",
      hints: [
        // EN: Write the general term <span class="chem">T_{r+1} = ^5C_r (2)^{5-r} x^r</span>.
        "일반항 <span class=\"chem\">T_{r+1} = ^5C_r (2)^{5-r} x^r</span>을 쓰세요.",
        // EN: Substitute <span class="chem">r = 3</span> and compute <span class="chem">^5C_3 × 2^2</span>.
        "<span class=\"chem\">r = 3</span>을 대입해 <span class=\"chem\">^5C_3 × 2^2</span>을 계산하세요.",
      ],
      // EN: <div class="worked__math">For <i>x</i><sup>3</sup>, set <i>r</i> = 3: <sup>5</sup>C<sub>3</sub> (2)<sup>5−3</sup> <i>x</i><sup>3</sup> = 10 × 4 <i>x</i><sup>3</sup> = <b>40</b><i>x</i><sup>3</sup></div>
      solution: "<div class=\"worked__math\"><i>x</i><sup>3</sup> 항이므로 <i>r</i> = 3: <sup>5</sup>C<sub>3</sub> (2)<sup>5−3</sup> <i>x</i><sup>3</sup> = 10 × 4 <i>x</i><sup>3</sup> = <b>40</b><i>x</i><sup>3</sup></div>",
    },

    // ── t1-2-q005 · multi · foundation · SL · SL 1.7 · 2 marks
    "t1-2-q005": {
      // EN: <p>Which of the following equations are valid identities for all <span class="chem">x, y &gt; 0</span>? Select all that apply.</p>
      stem: "<p>모든 <span class=\"chem\">x, y &gt; 0</span>에 대하여 성립하는 항등식을 모두 고르시오.</p>",
      options: [
        // EN: <span class="chem">ln(x^2 y) = 2 ln x + ln y</span>
        "<span class=\"chem\">ln(x^2 y) = 2 ln x + ln y</span>",
        // EN: <span class="chem">ln(x + y) = ln x + ln y</span>
        "<span class=\"chem\">ln(x + y) = ln x + ln y</span>",
        // EN: <span class="chem">log_4(x) = (1/2) log_2(x)</span>
        "<span class=\"chem\">log_4(x) = (1/2) log_2(x)</span>",
        // EN: <span class="chem">(ln x)^3 = 3 ln x</span>
        "<span class=\"chem\">(ln x)^3 = 3 ln x</span>",
      ],
      hints: [
        // EN: Check the product and power rules carefully: is the power on the argument <span class="chem">x</span> or on the entire logarithm?
        "곱과 거듭제곱의 로그 성질을 주의 깊게 확인하세요: 지수가 진수 <span class=\"chem\">x</span>에 붙어 있는지, 로그 전체에 붙어 있는지 보세요.",
        // EN: Use the change of base formula <span class="chem">log_4(x) = log_2(x) / log_2(4)</span> for the third option.
        "3번째 보기에는 밑의 변환 공식 <span class=\"chem\">log_4(x) = log_2(x) / log_2(4)</span>를 적용해 보세요.",
      ],
      // EN: <p>Option A uses the product and power laws (<span class="chem">ln(x^2 y) = ln(x^2) + ln y = 2 ln x + ln y</span>). Option C uses change of base (<span class="chem">log_4 x = log_2 x / log_2 4 = (1/2) log_2 x</span>).</p>
      solution: "<p>첫 번째 보기는 곱과 거듭제곱의 로그 성질(<span class=\"chem\">ln(x^2 y) = ln(x^2) + ln y = 2 ln x + ln y</span>)이 성립하고, 세 번째 보기는 밑의 변환 공식(<span class=\"chem\">log_4 x = log_2 x / log_2 4 = (1/2) log_2 x</span>)이 성립해요.</p>",
      misconception: {
        // EN (option B): There is no logarithm law for a sum <span class="chem">ln(x + y)</span>! Remember <span class="chem">ln x + ln y = ln(xy)</span>.
        "1": "합 <span class=\"chem\">ln(x + y)</span>에 대한 로그 성질은 없어요! <span class=\"chem\">ln x + ln y = ln(xy)</span>임을 기억하세요.",
        // EN (option D): The power rule applies to <span class="chem">ln(x^3) = 3 ln x</span>, where only <span class="chem">x</span> is cubed. <span class="chem">(ln x)^3</span> means <span class="chem">(ln x)(ln x)(ln x)</span>.
        "3": "거듭제곱 성질은 <span class=\"chem\">x</span>만 세제곱된 <span class=\"chem\">ln(x^3) = 3 ln x</span>에 적용돼요. <span class=\"chem\">(ln x)^3</span>은 <span class=\"chem\">(ln x)(ln x)(ln x)</span>을 뜻해요.",
      },
    },

    // ── t1-2-q006 · numeric · foundation · SL · SL 1.7 · 3 marks
    "t1-2-q006": {
      // EN: <p>Solve the equation <span class="chem">9^{x-1} = (1/27)^{2-x}</span> for <span class="chem">x</span>.</p>
      stem: "<p>방정식 <span class=\"chem\">9^{x-1} = (1/27)^{2-x}</span>을 <span class=\"chem\">x</span>에 대하여 푸시오.</p>",
      hints: [
        // EN: Express both sides as powers of base 3: <span class="chem">9 = 3^2</span> and <span class="chem">1/27 = 3^{-3}</span>.
        "양변을 밑이 3인 거듭제곱으로 나타내세요: <span class=\"chem\">9 = 3^2</span>, <span class=\"chem\">1/27 = 3^{-3}</span>.",
        // EN: Equate the exponents of base 3: <span class="chem">2(x - 1) = -3(2 - x)</span>.
        "밑이 3인 지수끼리 같다고 놓으세요: <span class=\"chem\">2(x - 1) = -3(2 - x)</span>.",
      ],
      // EN: <div class="worked__math">(3<sup>2</sup>)<sup><i>x</i>−1</sup> = (3<sup>−3</sup>)<sup>2−<i>x</i></sup> ⇒ 3<sup>2<i>x</i>−2</sup> = 3<sup>3<i>x</i>−6</sup></div><div class="worked__math">2<i>x</i> − 2 = 3<i>x</i> − 6 ⇒ <b><i>x</i> = 4</b></div>
      solution: "<div class=\"worked__math\">(3<sup>2</sup>)<sup><i>x</i>−1</sup> = (3<sup>−3</sup>)<sup>2−<i>x</i></sup> ⇒ 3<sup>2<i>x</i>−2</sup> = 3<sup>3<i>x</i>−6</sup></div><div class=\"worked__math\">2<i>x</i> − 2 = 3<i>x</i> − 6 ⇒ <b><i>x</i> = 4</b></div>",
    },

    // ── t1-2-q007 · numeric · exam · SL · SL 1.7 · 4 marks
    "t1-2-q007": {
      // EN: <p>Solve the equation <span class="chem">3^{2x} - 6(3^x) - 27 = 0</span> for <span class="chem">x</span> ∈ ℝ.</p>
      stem: "<p><span class=\"chem\">x</span> ∈ ℝ일 때, 방정식 <span class=\"chem\">3^{2x} - 6(3^x) - 27 = 0</span>을 푸시오.</p>",
      hints: [
        // EN: Substitute <span class="chem">u = 3^x</span> (with <span class="chem">u &gt; 0</span>) to get the quadratic <span class="chem">u^2 - 6u - 27 = 0</span>.
        "<span class=\"chem\">u = 3^x</span> (<span class=\"chem\">u &gt; 0</span>)로 치환하여 이차방정식 <span class=\"chem\">u^2 - 6u - 27 = 0</span>을 얻으세요.",
        // EN: Factor as <span class="chem">(u - 9)(u + 3) = 0</span>, reject any root with <span class="chem">u &lt;= 0</span>, and solve <span class="chem">3^x = u</span>.
        "<span class=\"chem\">(u - 9)(u + 3) = 0</span>으로 인수분해한 뒤, <span class=\"chem\">u &lt;= 0</span>인 근은 제외하고 <span class=\"chem\">3^x = u</span>를 푸세요.",
      ],
      // EN: <div class="worked__math">Let <i>u</i> = 3<sup><i>x</i></sup> (<i>u</i> &gt; 0): <i>u</i><sup>2</sup> − 6<i>u</i> − 27 = 0 ⇒ (<i>u</i> − 9)(<i>u</i> + 3) = 0 <b>[M1 A1]</b></div><div class="worked__math">Reject <i>u</i> = −3 since 3<sup><i>x</i></sup> &gt; 0 for all <i>x</i> ∈ ℝ. <b>[R1]</b></div><div class="worked__math">3<sup><i>x</i></sup> = 9 = 3<sup>2</sup> ⇒ <b><i>x</i> = 2</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>u</i> = 3<sup><i>x</i></sup> (<i>u</i> &gt; 0)라 하면: <i>u</i><sup>2</sup> − 6<i>u</i> − 27 = 0 ⇒ (<i>u</i> − 9)(<i>u</i> + 3) = 0 <b>[M1 A1]</b></div><div class=\"worked__math\">모든 <i>x</i> ∈ ℝ에 대해 3<sup><i>x</i></sup> &gt; 0이므로 <i>u</i> = −3은 제외해요. <b>[R1]</b></div><div class=\"worked__math\">3<sup><i>x</i></sup> = 9 = 3<sup>2</sup> ⇒ <b><i>x</i> = 2</b> <b>[A1]</b></div>",
    },

    // ── t1-2-q008 · numeric · exam · SL · SL 1.7 · 5 marks
    "t1-2-q008": {
      // EN: <p>Solve the logarithmic equation <span class="chem">log_2(x - 2) + log_2(x + 2) = 5</span> for <span class="chem">x</span>.</p>
      stem: "<p>로그방정식 <span class=\"chem\">log_2(x - 2) + log_2(x + 2) = 5</span>를 <span class=\"chem\">x</span>에 대하여 푸시오.</p>",
      hints: [
        // EN: Combine the left side using the product rule: <span class="chem">log_2((x - 2)(x + 2)) = 5</span>.
        "곱의 로그 성질을 이용해 좌변을 합치세요: <span class=\"chem\">log_2((x - 2)(x + 2)) = 5</span>.",
        // EN: Rewrite in exponential form <span class="chem">x^2 - 4 = 2^5 = 32</span> and check the domain condition <span class="chem">x - 2 &gt; 0</span>.
        "지수 꼴 <span class=\"chem\">x^2 - 4 = 2^5 = 32</span>로 바꾼 뒤 진수 조건 <span class=\"chem\">x - 2 &gt; 0</span>을 확인하세요.",
      ],
      // EN: <div class="worked__math">log<sub>2</sub>((<i>x</i> − 2)(<i>x</i> + 2)) = 5 ⇒ <i>x</i><sup>2</sup> − 4 = 2<sup>5</sup> = 32 <b>[M1 A1]</b></div><div class="worked__math"><i>x</i><sup>2</sup> = 36 ⇒ <i>x</i> = ±6 <b>[A1]</b></div><div class="worked__math">Since log<sub>2</sub>(<i>x</i> − 2) requires <i>x</i> &gt; 2, reject <i>x</i> = −6 and keep <b><i>x</i> = 6</b>. <b>[R1 A1]</b></div>
      solution: "<div class=\"worked__math\">log<sub>2</sub>((<i>x</i> − 2)(<i>x</i> + 2)) = 5 ⇒ <i>x</i><sup>2</sup> − 4 = 2<sup>5</sup> = 32 <b>[M1 A1]</b></div><div class=\"worked__math\"><i>x</i><sup>2</sup> = 36 ⇒ <i>x</i> = ±6 <b>[A1]</b></div><div class=\"worked__math\">log<sub>2</sub>(<i>x</i> − 2)의 진수 조건이 <i>x</i> &gt; 2이므로 <i>x</i> = −6을 제외하고 <b><i>x</i> = 6</b>을 선택해요. <b>[R1 A1]</b></div>",
    },

    // ── t1-2-q009 · numeric · exam · SL · SL 1.7 · 5 marks
    "t1-2-q009": {
      // EN: <p>Given that <span class="chem">log_3(x) + 4 log_x(3) = 5</span>, find the larger of the two possible values of <span class="chem">x</span>.</p>
      stem: "<p><span class=\"chem\">log_3(x) + 4 log_x(3) = 5</span>일 때, 가능한 <span class=\"chem\">x</span>의 두 값 중 더 큰 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Use the change of base formula to rewrite <span class="chem">log_x(3) = log_3(3) / log_3(x) = 1 / log_3(x)</span>.
        "밑의 변환 공식을 이용해 <span class=\"chem\">log_x(3) = log_3(3) / log_3(x) = 1 / log_3(x)</span>로 고쳐 쓰세요.",
        // EN: Let <span class="chem">u = log_3(x)</span> to form <span class="chem">u + 4/u = 5</span>, solve for <span class="chem">u</span>, and then compute <span class="chem">x = 3^u</span>.
        "<span class=\"chem\">u = log_3(x)</span>로 치환해 <span class=\"chem\">u + 4/u = 5</span>를 만들고, <span class=\"chem\">u</span>를 구한 뒤 <span class=\"chem\">x = 3^u</span>를 계산하세요.",
      ],
      // EN: <div class="worked__math">Using change of base, log<sub><i>x</i></sub>(3) = <span class="frac"><span>1</span><span>log<sub>3</sub>(<i>x</i>)</span></span>. Let <i>u</i> = log<sub>3</sub>(<i>x</i>): <b>[M1]</b></div><div class="worked__math"><i>u</i> + <span class="frac"><span>4</span><span><i>u</i></span></span> = 5 ⇒ <i>u</i><sup>2</sup> − 5<i>u</i> + 4 = 0 ⇒ (<i>u</i> − 1)(<i>u</i> − 4) = 0 <b>[M1 A1]</b></div><div class="worked__math">log<sub>3</sub>(<i>x</i>) = 1 ⇒ <i>x</i> = 3, or log<sub>3</sub>(<i>x</i>) = 4 ⇒ <i>x</i> = 3<sup>4</sup> = <b>81</b> <b>[A1 A1]</b></div>
      solution: "<div class=\"worked__math\">밑의 변환 공식으로 log<sub><i>x</i></sub>(3) = <span class=\"frac\"><span>1</span><span>log<sub>3</sub>(<i>x</i>)</span></span>. <i>u</i> = log<sub>3</sub>(<i>x</i>)라 하면: <b>[M1]</b></div><div class=\"worked__math\"><i>u</i> + <span class=\"frac\"><span>4</span><span><i>u</i></span></span> = 5 ⇒ <i>u</i><sup>2</sup> − 5<i>u</i> + 4 = 0 ⇒ (<i>u</i> − 1)(<i>u</i> − 4) = 0 <b>[M1 A1]</b></div><div class=\"worked__math\">log<sub>3</sub>(<i>x</i>) = 1 ⇒ <i>x</i> = 3, 또는 log<sub>3</sub>(<i>x</i>) = 4 ⇒ <i>x</i> = 3<sup>4</sup> = <b>81</b> <b>[A1 A1]</b></div>",
    },

    // ── t1-2-q010 · numeric · exam · SL · SL 1.9 · 5 marks
    "t1-2-q010": {
      // EN: <p>Find the constant term (the term independent of <span class="chem">x</span>) in the expansion of <span class="chem">(2x^2 - 1/x)^6</span>.</p>
      stem: "<p><span class=\"chem\">(2x^2 - 1/x)^6</span>의 전개식에서 상수항(<span class=\"chem\">x</span>를 포함하지 않는 항)을 구하시오 (Find).</p>",
      hints: [
        // EN: Write the general term: <span class="chem">T_{r+1} = ^6C_r (2x^2)^{6-r} (-x^{-1})^r = ^6C_r 2^{6-r} (-1)^r x^{12-3r}</span>.
        "일반항을 쓰세요: <span class=\"chem\">T_{r+1} = ^6C_r (2x^2)^{6-r} (-x^{-1})^r = ^6C_r 2^{6-r} (-1)^r x^{12-3r}</span>.",
        // EN: Set the power of <span class="chem">x</span> equal to zero (<span class="chem">12 - 3r = 0</span>) to find <span class="chem">r = 4</span>, then substitute <span class="chem">r = 4</span>.
        "<span class=\"chem\">x</span>의 지수를 0으로 놓아(<span class=\"chem\">12 - 3r = 0</span>) <span class=\"chem\">r = 4</span>를 구한 뒤 <span class=\"chem\">r = 4</span>를 대입하세요.",
      ],
      // EN: <div class="worked__math"><i>T</i><sub><i>r</i>+1</sub> = <sup>6</sup>C<sub><i>r</i></sub> (2<i>x</i><sup>2</sup>)<sup>6−<i>r</i></sup> (−<i>x</i><sup>−1</sup>)<sup><i>r</i></sup> = <sup>6</sup>C<sub><i>r</i></sub> 2<sup>6−<i>r</i></sup> (−1)<sup><i>r</i></sup> <i>x</i><sup>12−3<i>r</i></sup> <b>[M1 A1]</b></div><div class="worked__math">Constant term requires 12 − 3<i>r</i> = 0 ⇒ <i>r</i> = 4 <b>[M1 A1]</b></div><div class="worked__math"><sup>6</sup>C<sub>4</sub> × 2<sup>2</sup> × (−1)<sup>4</sup> = 15 × 4 × 1 = <b>60</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>T</i><sub><i>r</i>+1</sub> = <sup>6</sup>C<sub><i>r</i></sub> (2<i>x</i><sup>2</sup>)<sup>6−<i>r</i></sup> (−<i>x</i><sup>−1</sup>)<sup><i>r</i></sup> = <sup>6</sup>C<sub><i>r</i></sub> 2<sup>6−<i>r</i></sup> (−1)<sup><i>r</i></sup> <i>x</i><sup>12−3<i>r</i></sup> <b>[M1 A1]</b></div><div class=\"worked__math\">상수항이므로 12 − 3<i>r</i> = 0 ⇒ <i>r</i> = 4 <b>[M1 A1]</b></div><div class=\"worked__math\"><sup>6</sup>C<sub>4</sub> × 2<sup>2</sup> × (−1)<sup>4</sup> = 15 × 4 × 1 = <b>60</b> <b>[A1]</b></div>",
    },

    // ── t1-2-q011 · numeric · exam · SL · SL 1.9 · 5 marks
    "t1-2-q011": {
      // EN: <p>Find the coefficient of <span class="chem">x^2</span> in the expansion of <span class="chem">(1 - 3x)(2 + x)^4</span>.</p>
      stem: "<p><span class=\"chem\">(1 - 3x)(2 + x)^4</span>의 전개식에서 <span class=\"chem\">x^2</span>의 계수를 구하시오 (Find).</p>",
      hints: [
        // EN: Find the first three terms (up to <span class="chem">x^2</span>) in the expansion of <span class="chem">(2 + x)^4</span>.
        "<span class=\"chem\">(2 + x)^4</span>의 전개식에서 처음 세 항(<span class=\"chem\">x^2</span> 항까지)을 구하세요.",
        // EN: Multiply <span class="chem">(1 - 3x)(16 + 32x + 24x^2 + ...)</span> and collect the two products that produce <span class="chem">x^2</span>.
        "<span class=\"chem\">(1 - 3x)(16 + 32x + 24x^2 + ...)</span>을 전개하여 <span class=\"chem\">x^2</span>이 나오는 두 항을 모으세요.",
      ],
      // EN: <div class="worked__math">(2 + <i>x</i>)<sup>4</sup> = 2<sup>4</sup> + <sup>4</sup>C<sub>1</sub>(2<sup>3</sup>)<i>x</i> + <sup>4</sup>C<sub>2</sub>(2<sup>2</sup>)<i>x</i><sup>2</sup> + … = 16 + 32<i>x</i> + 24<i>x</i><sup>2</sup> + … <b>[M1 A1]</b></div><div class="worked__math">Coeff of <i>x</i><sup>2</sup> = (1)(24) + (−3)(32) = 24 − 96 = <b>−72</b> <b>[M1 A2]</b></div>
      solution: "<div class=\"worked__math\">(2 + <i>x</i>)<sup>4</sup> = 2<sup>4</sup> + <sup>4</sup>C<sub>1</sub>(2<sup>3</sup>)<i>x</i> + <sup>4</sup>C<sub>2</sub>(2<sup>2</sup>)<i>x</i><sup>2</sup> + … = 16 + 32<i>x</i> + 24<i>x</i><sup>2</sup> + … <b>[M1 A1]</b></div><div class=\"worked__math\"><i>x</i><sup>2</sup>의 계수 = (1)(24) + (−3)(32) = 24 − 96 = <b>−72</b> <b>[M1 A2]</b></div>",
    },

    // ── t1-2-q012 · order · exam · SL · SL 1.9 · 4 marks
    "t1-2-q012": {
      // EN: <p>Arrange the steps in order to find the term in <span class="chem">x^3</span> in the expansion of <span class="chem">(x^2 + 2/x)^6</span>.</p>
      stem: "<p><span class=\"chem\">(x^2 + 2/x)^6</span>의 전개식에서 <span class=\"chem\">x^3</span> 항을 구하는 단계를 올바른 순서로 배열하시오.</p>",
      options: [
        // EN: Write the general term <span class="chem">T_{r+1} = ^6C_r (x^2)^{6-r} (2x^{-1})^r</span>.
        "일반항 <span class=\"chem\">T_{r+1} = ^6C_r (x^2)^{6-r} (2x^{-1})^r</span>을 적어요.",
        // EN: Separate the numerical coefficients and combine the powers of <span class="chem">x</span> to get <span class="chem">^6C_r 2^r x^{12-3r}</span>.
        "수 계수를 분리하고 <span class=\"chem\">x</span>의 거듭제곱을 합쳐 <span class=\"chem\">^6C_r 2^r x^{12-3r}</span>을 얻어요.",
        // EN: Equate the exponent of <span class="chem">x</span> to the target power: <span class="chem">12 - 3r = 3</span>, which gives <span class=\"chem">r = 3</span>.
        "<span class=\"chem\">x</span>의 지수를 목표 차수와 같다고 놓아 <span class=\"chem\">12 - 3r = 3</span>에서 <span class=\"chem\">r = 3</span>을 구해요.",
        // EN: Substitute <span class="chem">r = 3</span> to obtain <span class="chem">^6C_3 × 2^3 x^3 = 20 × 8 x^3 = 160x^3</span>.
        "<span class=\"chem\">r = 3</span>을 대입해 <span class=\"chem\">^6C_3 × 2^3 x^3 = 20 × 8 x^3 = 160x^3</span>을 얻어요.",
      ],
      hints: [
        // EN: Always start from the general term formula <span class="chem">T_{r+1} = ^nC_r a^{n-r} b^r</span>.
        "항상 일반항 공식 <span class=\"chem\">T_{r+1} = ^nC_r a^{n-r} b^r</span>에서 시작하세요.",
        // EN: Simplify the exponent of <span class="chem">x</span> into a single linear expression in <span class="chem">r</span> before solving for <span class="chem">r</span>.
        "<span class=\"chem\">r</span>을 구하기 전에 먼저 <span class=\"chem\">x</span>의 지수를 <span class=\"chem\">r</span>에 대한 하나의 일차식으로 정리하세요.",
      ],
      // EN: <p>Writing the general term, combining exponents into <span class="chem">x^{12-3r}</span>, solving <span class="chem">12 - 3r = 3 =&gt; r = 3</span>, and evaluating <span class="chem">^6C_3 × 2^3 = 160</span> gives <span class="chem">160x^3</span>.</p>
      solution: "<p>일반항을 쓰고 지수를 <span class=\"chem\">x^{12-3r}</span>로 정리한 뒤, <span class=\"chem\">12 - 3r = 3 =&gt; r = 3</span>을 풀고 <span class=\"chem\">^6C_3 × 2^3 = 160</span>을 계산하면 <span class=\"chem\">160x^3</span>이 돼요.</p>",
    },

    // ── t1-2-q013 · numeric · exam · SL · SL 1.9 · 3 marks
    "t1-2-q013": {
      // EN: <p>In the expansion of <span class="chem">(1 + kx)^7</span>, where <span class="chem">k &gt; 0</span>, the coefficient of <span class="chem">x^3</span> is equal to <span class="chem">5/3</span> times the coefficient of <span class="chem">x^2</span>. Find the exact value of <span class="chem">k</span>.</p>
      stem: "<p><span class=\"chem\">(1 + kx)^7</span> (<span class=\"chem\">k &gt; 0</span>)의 전개식에서 <span class=\"chem\">x^3</span>의 계수가 <span class=\"chem\">x^2</span>의 계수의 <span class=\"chem\">5/3</span>배와 같을 때, <span class=\"chem\">k</span>의 정확한 값(exact value)을 구하시오 (Find).</p>",
      hints: [
        // EN: Write the coefficient of <span class="chem">x^3</span> as <span class="chem">^7C_3 k^3 = 35k^3</span> and the coefficient of <span class="chem">x^2</span> as <span class="chem">^7C_2 k^2 = 21k^2</span>.
        "<span class=\"chem\">x^3</span>의 계수를 <span class=\"chem\">^7C_3 k^3 = 35k^3</span>으로, <span class=\"chem\">x^2</span>의 계수를 <span class=\"chem\">^7C_2 k^2 = 21k^2</span>으로 쓰세요.",
        // EN: Solve <span class="chem">35k^3 = (5/3)(21k^2)</span> for <span class="chem">k &gt; 0</span>.
        "<span class=\"chem\">k &gt; 0</span>일 때 <span class=\"chem\">35k^3 = (5/3)(21k^2)</span>을 푸세요.",
      ],
      // EN: <div class="worked__math"><sup>7</sup>C<sub>3</sub> <i>k</i><sup>3</sup> = <span class="frac"><span>5</span><span>3</span></span> (<sup>7</sup>C<sub>2</sub> <i>k</i><sup>2</sup>) ⇒ 35<i>k</i><sup>3</sup> = <span class="frac"><span>5</span><span>3</span></span>(21<i>k</i><sup>2</sup>) = 35<i>k</i><sup>2</sup> <b>[M1 A1]</b></div><div class="worked__math">Since <i>k</i> &gt; 0, divide by 35<i>k</i><sup>2</sup> to get <b><i>k</i> = 1</b>. <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><sup>7</sup>C<sub>3</sub> <i>k</i><sup>3</sup> = <span class=\"frac\"><span>5</span><span>3</span></span> (<sup>7</sup>C<sub>2</sub> <i>k</i><sup>2</sup>) ⇒ 35<i>k</i><sup>3</sup> = <span class=\"frac\"><span>5</span><span>3</span></span>(21<i>k</i><sup>2</sup>) = 35<i>k</i><sup>2</sup> <b>[M1 A1]</b></div><div class=\"worked__math\"><i>k</i> &gt; 0이므로 양변을 35<i>k</i><sup>2</sup>으로 나누면 <b><i>k</i> = 1</b>이에요. <b>[A1]</b></div>",
    },

    // ── t1-2-q014 · short · exam · SL · SL 1.7 · 6 marks
    "t1-2-q014": {
      // EN: <p>Solve the simultaneous equations for <span class="chem">x &gt; 0</span> and <span class="chem">y &gt; 0</span>:<br><span class="chem">log_2(x) + log_2(y) = 4</span><br><span class="chem">log_2(x^2) - log_2(y) = 5</span></p>
      stem: "<p><span class=\"chem\">x &gt; 0</span>, <span class=\"chem\">y &gt; 0</span>일 때 다음 연립방정식을 푸시오:<br><span class=\"chem\">log_2(x) + log_2(y) = 4</span><br><span class=\"chem\">log_2(x^2) - log_2(y) = 5</span></p>",
      hints: [
        // EN: Use the power law <span class="chem">log_2(x^2) = 2 log_2(x)</span> on the second equation.
        "두 번째 식에 거듭제곱의 로그 성질 <span class=\"chem\">log_2(x^2) = 2 log_2(x)</span>를 적용하세요.",
        // EN: Add the two equations together to eliminate <span class="chem">log_2(y)</span> immediately!
        "두 식을 그대로 더하면 <span class=\"chem\">log_2(y)</span>가 바로 소거돼요!",
      ],
      // EN: <p>Adding <span class="chem">log_2(x) + log_2(y) = 4</span> and <span class="chem">2 log_2(x) - log_2(y) = 5</span> gives <span class="chem">3 log_2(x) = 9 =&gt; log_2(x) = 3 =&gt; x = 8</span>, and hence <span class="chem">log_2(y) = 1 =&gt; y = 2</span>.</p>
      solution: "<p><span class=\"chem\">log_2(x) + log_2(y) = 4</span>와 <span class=\"chem\">2 log_2(x) - log_2(y) = 5</span>를 더하면 <span class=\"chem\">3 log_2(x) = 9 =&gt; log_2(x) = 3 =&gt; x = 8</span>이 되고, 따라서 <span class=\"chem\">log_2(y) = 1 =&gt; y = 2</span>예요.</p>",
      // EN: <div class="worked__math">Rewrite second equation as 2 log<sub>2</sub>(<i>x</i>) − log<sub>2</sub>(<i>y</i>) = 5.</div><div class="worked__math">Add the two equations: 3 log<sub>2</sub>(<i>x</i>) = 9 ⇒ log<sub>2</sub>(<i>x</i>) = 3 ⇒ <b><i>x</i> = 8</b>.</div><div class="worked__math">Substitute into first: 3 + log<sub>2</sub>(<i>y</i>) = 4 ⇒ log<sub>2</sub>(<i>y</i>) = 1 ⇒ <b><i>y</i> = 2</b>.</div>
      answer: "<div class=\"worked__math\">두 번째 식을 2 log<sub>2</sub>(<i>x</i>) − log<sub>2</sub>(<i>y</i>) = 5로 고쳐 써요.</div><div class=\"worked__math\">두 식을 더하면: 3 log<sub>2</sub>(<i>x</i>) = 9 ⇒ log<sub>2</sub>(<i>x</i>) = 3 ⇒ <b><i>x</i> = 8</b>.</div><div class=\"worked__math\">첫 번째 식에 대입하면: 3 + log<sub>2</sub>(<i>y</i>) = 4 ⇒ log<sub>2</sub>(<i>y</i>) = 1 ⇒ <b><i>y</i> = 2</b>.</div>",
      markscheme: [
        // EN: M1: Applies power law log_2(x^2) = 2 log_2(x) (or converts both equations to xy = 16 and x^2/y = 32).
        "M1: 거듭제곱의 로그 성질 log_2(x^2) = 2 log_2(x)를 적용함 (또는 xy = 16과 x^2/y = 32로 변환).",
        // EN: M1: Eliminates log_2(y) by adding the equations to obtain 3 log_2(x) = 9 (or multiplies xy × (x^2/y) = x^3 = 512).
        "M1: 두 식을 더해 log_2(y)를 소거하여 3 log_2(x) = 9를 얻음 (또는 xy × (x^2/y) = x^3 = 512를 얻음).",
        // EN: A1: Finds log_2(x) = 3.
        "A1: log_2(x) = 3을 구함.",
        // EN: A1: Deduces x = 2^3 = 8.
        "A1: x = 2^3 = 8을 추론함.",
        // EN: M1: Substitutes log_2(x) = 3 back into the first equation: 3 + log_2(y) = 4.
        "M1: log_2(x) = 3을 첫 번째 식에 대입함: 3 + log_2(y) = 4.",
        // EN: A1: Finds log_2(y) = 1 and hence y = 2.
        "A1: log_2(y) = 1, 따라서 y = 2를 구함.",
      ],
    },

    // ── t1-2-q015 · numeric · challenge · SL · SL 1.7 · 4 marks
    "t1-2-q015": {
      // EN: <p>The terms <span class="chem">log_2(p)</span>, <span class="chem">log_4(p)</span>, <span class="chem">log_8(p)</span>, ... are evaluated for <span class="chem">p = 64</span>. Calculate the exact value of the sum <span class="chem">log_2(64) + log_4(64) + log_8(64) + log_{16}(64)</span>.</p>
      stem: "<p><span class=\"chem\">log_2(p)</span>, <span class=\"chem\">log_4(p)</span>, <span class=\"chem\">log_8(p)</span>, ...을 <span class=\"chem\">p = 64</span>에서 계산할 때, 합 <span class=\"chem\">log_2(64) + log_4(64) + log_8(64) + log_{16}(64)</span>의 정확한 값을 계산하시오 (Calculate).</p>",
      hints: [
        // EN: Decode: the four logarithms share the argument 64, and every base is a power of 2. Rewrite each one in base 2 with change of base, then add.
        "해석: 네 로그의 진수는 모두 64이고, 밑은 모두 2의 거듭제곱입니다. 밑변환 공식으로 각각을 밑이 2인 로그로 바꾼 뒤 더하세요.",
        // EN: Write <span class="chem">64 = 2^6</span> and convert each base to a power of 2: <span class="chem">4 = 2^2, 8 = 2^3, 16 = 2^4</span>.
        "<span class=\"chem\">64 = 2^6</span>으로 쓰고 각 밑을 2의 거듭제곱으로 바꾸세요: <span class=\"chem\">4 = 2^2, 8 = 2^3, 16 = 2^4</span>.",
        // EN: Use <span class="chem">log_{2^k}(2^6) = 6 / k</span> for <span class="chem">k = 1, 2, 3, 4</span>.
        "<span class=\"chem\">k = 1, 2, 3, 4</span>에 대해 <span class=\"chem\">log_{2^k}(2^6) = 6 / k</span>를 이용하세요.",
      ],
      // EN: <div class="worked__math">Since 64 = 2<sup>6</sup> and log<sub>2<sup><i>k</i></sup></sub>(2<sup>6</sup>) = <span class="frac"><span>6</span><span><i>k</i></span></span>: <b>[M1 A1]</b></div><div class="worked__math">Sum = <span class="frac"><span>6</span><span>1</span></span> + <span class="frac"><span>6</span><span>2</span></span> + <span class="frac"><span>6</span><span>3</span></span> + <span class="frac"><span>6</span><span>4</span></span> = 6 + 3 + 2 + 1.5 = <b>12.5</b> (or <b>25/2</b>) <b>[M1 A1]</b></div>
      solution: "<div class=\"worked__math\">64 = 2<sup>6</sup>이고 log<sub>2<sup><i>k</i></sup></sub>(2<sup>6</sup>) = <span class=\"frac\"><span>6</span><span><i>k</i></span></span>이므로: <b>[M1 A1]</b></div><div class=\"worked__math\">합 = <span class=\"frac\"><span>6</span><span>1</span></span> + <span class=\"frac\"><span>6</span><span>2</span></span> + <span class=\"frac\"><span>6</span><span>3</span></span> + <span class=\"frac\"><span>6</span><span>4</span></span> = 6 + 3 + 2 + 1.5 = <b>12.5</b> (또는 <b>25/2</b>) <b>[M1 A1]</b></div>",
      // EN: 25/2 (or 12.5)
      answerDisplay: "25/2 (또는 12.5)",
    },

    // ── t1-2-q016 · numeric · challenge · SL · SL 1.9 · 6 marks
    "t1-2-q016": {
      // EN: <p>In the expansion of <span class="chem">(1 + x)^n</span>, where <span class="chem">n &gt;= 3</span> is a positive integer, the coefficients of <span class="chem">x</span>, <span class="chem">x^2</span>, and <span class="chem">x^3</span> form an arithmetic sequence. Find the value of <span class="chem">n</span>.</p>
      stem: "<p><span class=\"chem\">n &gt;= 3</span>인 양의 정수에 대하여 <span class=\"chem\">(1 + x)^n</span>의 전개식에서 <span class=\"chem\">x</span>, <span class=\"chem\">x^2</span>, <span class=\"chem\">x^3</span>의 계수가 이 순서대로 등차수열을 이뤄요. <span class=\"chem\">n</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: “the coefficients form an arithmetic sequence” gives one equation: the middle coefficient is the mean of the other two. Write each coefficient in terms of <span class="chem">n</span> and solve for the integer <span class="chem">n &gt;= 3</span>.
        "해석: \"계수가 등차수열을 이룬다\"는 조건에서 방정식 하나가 나옵니다. 가운데 계수는 나머지 두 계수의 평균입니다. 각 계수를 <span class=\"chem\">n</span>으로 나타내고 정수 <span class=\"chem\">n &gt;= 3</span>을 구하세요.",
        // EN: Write out the three coefficients: <span class="chem">^nC_1 = n</span>, <span class="chem">^nC_2 = n(n-1)/2</span>, and <span class="chem">^nC_3 = n(n-1)(n-2)/6</span>.
        "세 계수를 식으로 쓰세요: <span class=\"chem\">^nC_1 = n</span>, <span class=\"chem\">^nC_2 = n(n-1)/2</span>, <span class=\"chem\">^nC_3 = n(n-1)(n-2)/6</span>.",
        // EN: Use the arithmetic condition <span class="chem">2(^nC_2) = ^nC_1 + ^nC_3</span> and divide through by <span class="chem">n &gt; 0</span>.
        "등차중항 조건 <span class=\"chem\">2(^nC_2) = ^nC_1 + ^nC_3</span>을 세우고 양변을 <span class=\"chem\">n &gt; 0</span>으로 나누세요.",
      ],
      // EN: <div class="worked__math">2 × <span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = <i>n</i> + <span class="frac"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6</span></span> <b>[M1 A1]</b></div><div class="worked__math">Divide by <i>n</i> &gt; 0 and multiply by 6: 6(<i>n</i> − 1) = 6 + (<i>n</i><sup>2</sup> − 3<i>n</i> + 2) <b>[M1 A1]</b></div><div class="worked__math"><i>n</i><sup>2</sup> − 9<i>n</i> + 14 = 0 ⇒ (<i>n</i> − 2)(<i>n</i> − 7) = 0. Since <i>n</i> ≥ 3, <b><i>n</i> = 7</b>. <b>[M1 A1]</b></div>
      solution: "<div class=\"worked__math\">2 × <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = <i>n</i> + <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6</span></span> <b>[M1 A1]</b></div><div class=\"worked__math\"><i>n</i> &gt; 0으로 나누고 6을 곱하면: 6(<i>n</i> − 1) = 6 + (<i>n</i><sup>2</sup> − 3<i>n</i> + 2) <b>[M1 A1]</b></div><div class=\"worked__math\"><i>n</i><sup>2</sup> − 9<i>n</i> + 14 = 0 ⇒ (<i>n</i> − 2)(<i>n</i> − 7) = 0. <i>n</i> ≥ 3이므로 <b><i>n</i> = 7</b>이에요. <b>[M1 A1]</b></div>",
    },

    // ── t1-2-q017 · short · challenge · SL · SL 1.7 · 7 marks
    "t1-2-q017": {
      // EN: <p>Consider the equation <span class="chem">e^{2x} - 2k e^x + (k + 2) = 0</span>, where <span class="chem">k</span> ∈ ℝ.<br>(a) Find the set of values of <span class="chem">k</span> for which the quadratic in <span class="chem">u = e^x</span> has two distinct real roots. <strong>[3]</strong><br>(b) Hence find the exact set of values of <span class="chem">k</span> for which the original equation has <strong>two distinct real solutions for <span class="chem">x</span></strong>. <strong>[4]</strong></p>
      stem: "<p><span class=\"chem\">k</span> ∈ ℝ일 때 방정식 <span class=\"chem\">e^{2x} - 2k e^x + (k + 2) = 0</span>을 생각하자.<br>(a) <span class=\"chem\">u = e^x</span>에 대한 이차방정식이 서로 다른 두 실근을 갖도록 하는 <span class=\"chem\">k</span>의 값의 집합을 구하시오 (Find). <strong>[3]</strong><br>(b) 이를 이용하여 (Hence) 원래 방정식이 <strong><span class=\"chem\">x</span>에 대해 서로 다른 두 실근</strong>을 갖도록 하는 <span class=\"chem\">k</span>의 값의 집합을 정확히 구하시오 (Find). <strong>[4]</strong></p>",
      hints: [
        // EN: Decode: this is a quadratic in <span class="chem">u = e^x</span> in disguise. Part (a) is about the quadratic alone; part (b) asks for real values of <span class="chem">x</span>, and only positive roots <span class="chem">u</span> give one.
        "해석: 이것은 <span class=\"chem\">u = e^x</span>에 대한 이차방정식이 모습을 바꾼 것입니다. (a)는 이차방정식만 다루고, (b)는 실수 <span class=\"chem\">x</span>를 묻는데, 실수해를 주는 것은 양수인 근 <span class=\"chem\">u</span>뿐입니다.",
        // EN: For part (a), set the discriminant <span class="chem">Δ = (-2k)^2 - 4(1)(k+2) &gt; 0</span>.
        "(a)에서는 판별식 <span class=\"chem\">Δ = (-2k)^2 - 4(1)(k+2) &gt; 0</span>을 세우세요.",
        // EN: For part (b), remember that a root <span class="chem">u</span> only produces a real <span class="chem">x = ln u</span> if <span class="chem">u &gt; 0</span>! When are both roots of <span class="chem">u^2 - 2ku + (k+2) = 0</span> positive?
        "(b)에서는 근 <span class=\"chem\">u</span>가 <span class=\"chem\">u &gt; 0</span>일 때만 실수 <span class=\"chem\">x = ln u</span>가 존재함을 기억하세요! <span class=\"chem\">u^2 - 2ku + (k+2) = 0</span>의 두 근이 모두 양수가 될 조건은 무엇인가요?",
      ],
      // EN: <p>When <span class="chem">k &lt; -1</span>, the sum of the two <span class="chem">u</span>-roots is <span class="chem">2k &lt; 0</span>, so at least one root is negative and cannot equal <span class="chem">e^x</span>. Only <span class="chem">k &gt; 2</span> makes <span class="chem">Δ &gt; 0</span>, <span class="chem">u_1 + u_2 = 2k &gt; 0</span>, and <span class="chem">u_1 u_2 = k + 2 &gt; 0</span>.</p>
      solution: "<p><span class=\"chem\">k &lt; -1</span>일 때는 <span class=\"chem\">u</span>의 두 근의 합이 <span class=\"chem\">2k &lt; 0</span>이므로 적어도 한 근이 음수가 되어 <span class=\"chem\">e^x</span>와 같을 수 없어요. <span class=\"chem\">k &gt; 2</span>일 때만 <span class=\"chem\">Δ &gt; 0</span>, <span class=\"chem\">u_1 + u_2 = 2k &gt; 0</span>, <span class=\"chem\">u_1 u_2 = k + 2 &gt; 0</span>을 모두 만족해요.</p>",
      // EN: <div class="worked__math">(a) Let <i>u</i> = e<sup><i>x</i></sup>: <i>u</i><sup>2</sup> − 2<i>k u</i> + (<i>k</i> + 2) = 0. Δ = 4<i>k</i><sup>2</sup> − 4(<i>k</i> + 2) &gt; 0 ⇒ <i>k</i><sup>2</sup> − <i>k</i> − 2 &gt; 0 ⇒ (<i>k</i> − 2)(<i>k</i> + 1) &gt; 0 ⇒ <b><i>k</i> &lt; −1 or <i>k</i> &gt; 2</b>.</div><div class="worked__math">(b) For two real solutions in <i>x</i>, BOTH roots <i>u</i><sub>1</sub>, <i>u</i><sub>2</sub> must be strictly positive (<i>u</i> = e<sup><i>x</i></sup> &gt; 0).</div><div class="worked__math">Sum of roots 2<i>k</i> &gt; 0 ⇒ <i>k</i> &gt; 0, and product of roots <i>k</i> + 2 &gt; 0 ⇒ <i>k</i> &gt; −2. Intersecting with (a) gives <b><i>k</i> &gt; 2</b>.</div>
      answer: "<div class=\"worked__math\">(a) <i>u</i> = e<sup><i>x</i></sup>라 하면: <i>u</i><sup>2</sup> − 2<i>k u</i> + (<i>k</i> + 2) = 0. Δ = 4<i>k</i><sup>2</sup> − 4(<i>k</i> + 2) &gt; 0 ⇒ <i>k</i><sup>2</sup> − <i>k</i> − 2 &gt; 0 ⇒ (<i>k</i> − 2)(<i>k</i> + 1) &gt; 0 ⇒ <b><i>k</i> &lt; −1 또는 <i>k</i> &gt; 2</b>.</div><div class=\"worked__math\">(b) <i>x</i>의 실근이 2개이려면 두 근 <i>u</i><sub>1</sub>, <i>u</i><sub>2</sub>가 모두 양수(<i>u</i> = e<sup><i>x</i></sup> &gt; 0)여야 해요.</div><div class=\"worked__math\">두 근의 합 2<i>k</i> &gt; 0 ⇒ <i>k</i> &gt; 0, 두 근의 곱 <i>k</i> + 2 &gt; 0 ⇒ <i>k</i> &gt; −2. (a)와의 공통 범위는 <b><i>k</i> &gt; 2</b>.</div>",
      markscheme: [
        // EN: M1: Substitutes u = e^x and sets discriminant Δ = (-2k)^2 - 4(1)(k + 2) > 0.
        "M1: u = e^x로 치환하고 판별식 Δ = (-2k)^2 - 4(1)(k + 2) > 0을 세움.",
        // EN: A1: Simplifies to k^2 - k - 2 > 0 or (k - 2)(k + 1) > 0.
        "A1: k^2 - k - 2 > 0 또는 (k - 2)(k + 1) > 0으로 정리함.",
        // EN: A1: Deduces k < -1 or k > 2.
        "A1: k < -1 또는 k > 2를 도출함.",
        // EN: R1: Recognizes that since u = e^x > 0, both roots u_1 and u_2 must be strictly positive.
        "R1: u = e^x > 0이므로 두 근 u_1과 u_2가 모두 양수여야 함을 파악함.",
        // EN: M1: Requires sum of roots 2k > 0 and product of roots k + 2 > 0 (or tests vertex u = k > 0 and f(0) = k + 2 > 0).
        "M1: 두 근의 합 2k > 0과 두 근의 곱 k + 2 > 0 조건을 세움 (또는 꼭짓점 u = k > 0과 f(0) = k + 2 > 0 확인).",
        // EN: A1: Rejects k < -1 (there the sum of roots 2k < 0, so a root is not positive).
        "A1: k < -1을 제외함 (이때 두 근의 합 2k < 0이므로 양수가 아닌 근이 있음).",
        // EN: A1: States the final set k > 2.
        "A1: 최종 범위 k > 2를 답함.",
      ],
    },

    // ── t1-2-q018 · numeric · foundation · SL · SL 1.5 · 2 marks
    "t1-2-q018": {
      // EN: <p>Use your GDC to solve <span class="chem">7^x = 50</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>GDC를 사용하여 <span class=\"chem\">7^x = 50</span>을 푸시오. 답은 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: Rewrite the equation in logarithmic form: <span class="chem">x = log_7 50</span>.
        "방정식을 로그 형태로 고쳐 쓰세요: <span class=\"chem\">x = log_7 50</span>.",
        // EN: Evaluate it on the GDC, either with the <span class="mono">log<sub>a</sub></span> template or as <span class="chem">ln 50 / ln 7</span>.
        "GDC의 <span class=\"mono\">log<sub>a</sub></span> 템플릿을 사용하거나 <span class=\"chem\">ln 50 / ln 7</span>로 계산하세요.",
      ],
      // EN: <div class="worked__math"><i>x</i> = log<sub>7</sub> 50 = <span class="frac"><span>ln 50</span><span>ln 7</span></span> ≈ 2.01038   <b>[M1]</b></div><p>To 3 significant figures, <strong><i>x</i> = 2.01</strong>. <b>[A1]</b></p>
      solution: "<div class=\"worked__math\"><i>x</i> = log<sub>7</sub> 50 = <span class=\"frac\"><span>ln 50</span><span>ln 7</span></span> ≈ 2.01038   <b>[M1]</b></div><p>유효숫자 3자리로 나타내면 <strong><i>x</i> = 2.01</strong>이에요. <b>[A1]</b></p>",
    },
  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ko', 't1-2.q', {
  questions: {

    // ── t1-2-q019 · numeric · foundation · SL · SL 1.5 · 2 marks
    "t1-2-q019": {
      // EN: <p>Solve <span class="chem">10^x = 0.0042</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">10^x = 0.0042</span>을 푸시오. 답은 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: Rewrite the equation in logarithmic form: <span class="chem">x = log_{10}(0.0042)</span>, written <span class="chem">log 0.0042</span> in IB notation.
        "방정식을 로그 형태로 고쳐 쓰세요: <span class=\"chem\">x = log_{10}(0.0042)</span>이고, IB 표기로는 <span class=\"chem\">log 0.0042</span>로 써요.",
        // EN: Evaluate it with the <span class="mono">log</span> key of your GDC. A number between 0 and 1 has a negative logarithm.
        "GDC의 <span class=\"mono\">log</span> 키로 계산하세요. 0과 1 사이의 수의 로그는 음수예요.",
      ],
      // EN: <div class="worked__math"><i>x</i> = log 0.0042 <b>[M1]</b></div><div class="worked__math"><i>x</i> = −2.37675… ≈ <b>−2.38</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>x</i> = log 0.0042   <b>[M1]</b></div><div class=\"worked__math\"><i>x</i> = −2.37675… ≈ <b>−2.38</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q020 · numeric · foundation · SL · SL 1.5 · 2 marks
    "t1-2-q020": {
      // EN: <p>The pH of a solution is defined by <span class="chem">pH = -log[H^+]</span>, where <span class="chem">[H^+]</span> is the hydrogen ion concentration in <span class="unit">mol dm-3</span> and log is to base 10. A sample of sea water has a pH of 8.3. Find <span class="chem">[H^+]</span> for this sample, giving your answer in standard form correct to 3 significant figures.</p>
      stem: "<p>용액의 pH는 <span class=\"chem\">pH = -log[H^+]</span>으로 정의되며, 여기서 <span class=\"chem\">[H^+]</span>은 <span class=\"unit\">mol dm-3</span> 단위의 수소 이온 농도이고 log의 밑은 10이다. 어떤 바닷물 시료의 pH가 8.3이다. 이 시료의 <span class=\"chem\">[H^+]</span>을 구하시오 (Find). 답은 과학적 표기법으로, 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: Substitute: <span class="chem">8.3 = -log[H^+]</span>, so <span class="chem">log[H^+] = -8.3</span>.
        "대입하세요: <span class=\"chem\">8.3 = -log[H^+]</span>이므로 <span class=\"chem\">log[H^+] = -8.3</span>이에요.",
        // EN: Convert to exponential form, <span class="chem">[H^+] = 10^{-8.3}</span>, and evaluate it on your GDC.
        "지수 형태 <span class=\"chem\">[H^+] = 10^{-8.3}</span>으로 바꾸고 GDC로 계산하세요.",
      ],
      // EN: <div class="worked__math">log[H<sup>+</sup>] = −8.3 ⇒ [H<sup>+</sup>] = 10<sup>−8.3</sup> <b>[M1]</b></div><div class="worked__math">[H<sup>+</sup>] = <b>5.01 × 10<sup>−9</sup></b> mol dm<sup>−3</sup> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">log[H<sup>+</sup>] = −8.3  ⇒  [H<sup>+</sup>] = 10<sup>−8.3</sup>   <b>[M1]</b></div><div class=\"worked__math\">[H<sup>+</sup>] = <b>5.01 × 10<sup>−9</sup></b> mol dm<sup>−3</sup>   <b>[A1]</b></div>",
    },

    // ── t1-2-q021 · numeric · exam · SL · SL 1.7 · 4 marks
    "t1-2-q021": {
      // EN: <p>Solve the equation <span class="chem">5^{2x-1} = 3^{x+2}</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>방정식 <span class=\"chem\">5^{2x-1} = 3^{x+2}</span>을 푸시오. 답은 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: The bases 5 and 3 cannot be made equal, so take <span class="chem">ln</span> (or log) of both sides.
        "밑 5와 3은 같게 만들 수 없으므로 양변에 <span class=\"chem\">ln</span>(또는 log)을 취하세요.",
        // EN: The power law gives <span class="chem">(2x - 1) ln 5 = (x + 2) ln 3</span>. Expand both sides and collect the <span class="chem">x</span> terms.
        "거듭제곱의 성질에 의해 <span class=\"chem\">(2x - 1) ln 5 = (x + 2) ln 3</span>이 돼요. 양변을 전개하고 <span class=\"chem\">x</span>가 있는 항끼리 모으세요.",
        // EN: You should get <span class="chem">x(2 ln 5 - ln 3) = 2 ln 3 + ln 5</span>.
        "<span class=\"chem\">x(2 ln 5 - ln 3) = 2 ln 3 + ln 5</span>을 얻어야 해요.",
      ],
      // EN: <div class="worked__math">(2<i>x</i> − 1) ln 5 = (<i>x</i> + 2) ln 3 <b>[M1 A1]</b></div><div class="worked__math"><i>x</i>(2 ln 5 − ln 3) = 2 ln 3 + ln 5 ⇒ <i>x</i> = <span class="frac"><span>2 ln 3 + ln 5</span><span>2 ln 5 − ln 3</span></span> <b>[M1]</b></div><div class="worked__math"><i>x</i> = 1.79537… ≈ <b>1.80</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">(2<i>x</i> − 1) ln 5 = (<i>x</i> + 2) ln 3   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>x</i>(2 ln 5 − ln 3) = 2 ln 3 + ln 5  ⇒  <i>x</i> = <span class=\"frac\"><span>2 ln 3 + ln 5</span><span>2 ln 5 − ln 3</span></span>   <b>[M1]</b></div><div class=\"worked__math\"><i>x</i> = 1.79537… ≈ <b>1.80</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q022 · numeric · exam · SL · SL 1.7 · 4 marks
    "t1-2-q022": {
      // EN: <p>The number of bacteria in a culture is modelled by <span class="chem">N = 250e^{0.42t}</span>, where <span class="chem">t</span> is the time in hours after the culture was prepared. Find the time it takes for the number of bacteria to increase from 1000 to 4000. Give your answer in hours, correct to 3 significant figures.</p>
      stem: "<p>어떤 배양액 속 세균의 수는 <span class=\"chem\">N = 250e^{0.42t}</span>으로 모델링되며, 여기서 <span class=\"chem\">t</span>는 배양액을 준비한 후 지난 시간(시간 단위)이다. 세균의 수가 1000에서 4000으로 늘어나는 데 걸리는 시간을 구하시오 (Find). 답은 시간 단위로, 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: Decode: the question asks for a length of time, not a moment. Find the time when <span class="chem">N = 1000</span> and the time when <span class="chem">N = 4000</span>, then subtract.
        "해석: 문제는 어떤 순간이 아니라 시간의 길이를 묻고 있어요. <span class=\"chem\">N = 1000</span>일 때의 시간과 <span class=\"chem\">N = 4000</span>일 때의 시간을 각각 구한 다음 빼세요.",
        // EN: Solve <span class="chem">250e^{0.42t} = 1000</span>: divide by 250 and take <span class="chem">ln</span> of both sides.
        "<span class=\"chem\">250e^{0.42t} = 1000</span>을 푸세요: 양변을 250으로 나누고 양변에 <span class=\"chem\">ln</span>을 취하세요.",
        // EN: Do the same for <span class="chem">N = 4000</span>. (Shortcut: the number has to multiply by 4, so the time is <span class="chem">ln 4 / 0.42</span>.)
        "<span class=\"chem\">N = 4000</span>에 대해서도 같은 방법으로 하세요. (지름길: 수가 4배가 되어야 하므로 걸리는 시간은 <span class=\"chem\">ln 4 / 0.42</span>이에요.)",
      ],
      // EN: <p><strong>Decode:</strong> “the time it takes to increase from 1000 to 4000” is the difference between two times.</p><div class="worked__math">250e<sup>0.42<i>t</i><sub>1</sub></sup> = 1000 ⇒ <i>t</i><sub>1</sub> = <span class="frac"><span>ln 4</span><span>0.42</span></span> = 3.3007… <b>[M1 A1]</b></div><div class="worked__math">250e<sup>0.42<i>t</i><sub>2</sub></sup> = 4000 ⇒ <i>t</i><sub>2</sub> = <span class="frac"><span>ln 16</span><span>0.42</span></span> = 6.6014… <b>[A1]</b></div><div class="worked__math"><i>t</i><sub>2</sub> − <i>t</i><sub>1</sub> = 3.3007… ≈ <b>3.30 hours</b> <b>[A1]</b></div>
      solution: "<p><strong>해석:</strong> \"1000에서 4000으로 늘어나는 데 걸리는 시간\"은 두 시각의 차예요.</p><div class=\"worked__math\">250e<sup>0.42<i>t</i><sub>1</sub></sup> = 1000  ⇒  <i>t</i><sub>1</sub> = <span class=\"frac\"><span>ln 4</span><span>0.42</span></span> = 3.3007…   <b>[M1 A1]</b></div><div class=\"worked__math\">250e<sup>0.42<i>t</i><sub>2</sub></sup> = 4000  ⇒  <i>t</i><sub>2</sub> = <span class=\"frac\"><span>ln 16</span><span>0.42</span></span> = 6.6014…   <b>[A1]</b></div><div class=\"worked__math\"><i>t</i><sub>2</sub> − <i>t</i><sub>1</sub> = 3.3007… ≈ <b>3.30시간</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q023 · numeric · exam · SL · SL 1.7 · 5 marks
    "t1-2-q023": {
      // EN: <p>Solve the equation <span class="chem">3e^{2x} - 4e^x - 2 = 0</span> for <span class="chem">x</span> ∈ ℝ. Give your answer correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">x</span> ∈ ℝ일 때 방정식 <span class=\"chem\">3e^{2x} - 4e^x - 2 = 0</span>을 푸시오. 답은 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: Let <span class="chem">u = e^x</span>, so <span class="chem">e^{2x} = u^2</span>. This gives the quadratic <span class="chem">3u^2 - 4u - 2 = 0</span>.
        "<span class=\"chem\">u = e^x</span>라 하면 <span class=\"chem\">e^{2x} = u^2</span>이에요. 그러면 이차방정식 <span class=\"chem\">3u^2 - 4u - 2 = 0</span>이 돼요.",
        // EN: The quadratic does not factorise: use the quadratic formula or the polynomial solver on your GDC.
        "이 이차방정식은 인수분해되지 않아요: 근의 공식이나 GDC의 다항식 풀이 기능을 사용하세요.",
        // EN: One value of <span class="chem">u</span> is negative. Since <span class="chem">e^x &gt; 0</span>, reject it, then use <span class="chem">x = ln u</span>.
        "<span class=\"chem\">u</span>의 값 중 하나는 음수예요. <span class=\"chem\">e^x &gt; 0</span>이므로 그 값은 버리고 <span class=\"chem\">x = ln u</span>를 이용하세요.",
      ],
      // EN: <div class="worked__math">Let <i>u</i> = e<sup><i>x</i></sup>: 3<i>u</i><sup>2</sup> − 4<i>u</i> − 2 = 0 <b>[M1]</b></div><div class="worked__math"><i>u</i> = <span class="frac"><span>2 ± √10</span><span>3</span></span>, so <i>u</i> = 1.72076… or <i>u</i> = −0.38743… <b>[A1]</b></div><div class="worked__math">Reject <i>u</i> = −0.387… because e<sup><i>x</i></sup> &gt; 0 for all real <i>x</i>. <b>[R1]</b></div><div class="worked__math"><i>x</i> = ln 1.72076… <b>[M1]</b> = 0.54277… ≈ <b>0.543</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>u</i> = e<sup><i>x</i></sup>라 하면:  3<i>u</i><sup>2</sup> − 4<i>u</i> − 2 = 0   <b>[M1]</b></div><div class=\"worked__math\"><i>u</i> = <span class=\"frac\"><span>2 ± √10</span><span>3</span></span>이므로 <i>u</i> = 1.72076… 또는 <i>u</i> = −0.38743…   <b>[A1]</b></div><div class=\"worked__math\">모든 실수 <i>x</i>에 대하여 e<sup><i>x</i></sup> &gt; 0이므로 <i>u</i> = −0.387…은 버려요.   <b>[R1]</b></div><div class=\"worked__math\"><i>x</i> = ln 1.72076…   <b>[M1]</b>   = 0.54277… ≈ <b>0.543</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q024 · numeric · exam · SL · SL 1.7, 2.10 · 4 marks
    "t1-2-q024": {
      // EN: <p>The equation <span class="chem">2^x = x + 5</span> has exactly two real solutions. Verify that <span class="chem">x = 3</span> is one of them, and find the other solution correct to 3 significant figures.</p>
      stem: "<p>방정식 <span class=\"chem\">2^x = x + 5</span>은 정확히 두 개의 실근을 갖는다. <span class=\"chem\">x = 3</span>이 그중 하나임을 확인하고 (Verify), 다른 한 근을 유효숫자 3자리로 구하시오 (Find).</p>",
      hints: [
        // EN: Verify by substitution: compare <span class="chem">2^3</span> with <span class="chem">3 + 5</span>.
        "대입하여 확인하세요: <span class=\"chem\">2^3</span>과 <span class=\"chem\">3 + 5</span>를 비교하세요.",
        // EN: The equation mixes an exponential with a linear term, so logarithms alone cannot isolate <span class="chem">x</span>. Graph <span class="chem">y = 2^x</span> and <span class="chem">y = x + 5</span> on your GDC.
        "이 방정식에는 지수 항과 일차 항이 섞여 있어서 로그만으로는 <span class=\"chem\">x</span>를 따로 떼어낼 수 없어요. GDC로 <span class=\"chem\">y = 2^x</span>와 <span class=\"chem\">y = x + 5</span>의 그래프를 그리세요.",
        // EN: The second intersection is far to the left, where <span class="chem">2^x</span> is close to 0, so <span class="chem">x + 5</span> must also be close to 0. Widen your window to see it.
        "두 번째 교점은 훨씬 왼쪽에 있는데, 그곳에서는 <span class=\"chem\">2^x</span>가 0에 가까우므로 <span class=\"chem\">x + 5</span>도 0에 가까워야 해요. 화면 범위를 넓히면 보여요.",
      ],
      // EN: <div class="worked__math">2<sup>3</sup> = 8 and 3 + 5 = 8, so <i>x</i> = 3 is a solution. <b>[M1 A1]</b></div><div class="worked__math">Graph <i>y</i> = 2<sup><i>x</i></sup> and <i>y</i> = <i>x</i> + 5 (or find the zeros of <i>y</i> = 2<sup><i>x</i></sup> − <i>x</i> − 5) on the GDC. <b>[M1]</b></div><div class="worked__math">The other intersection is at <i>x</i> = −4.96805… ≈ <b>−4.97</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">2<sup>3</sup> = 8이고 3 + 5 = 8이므로 <i>x</i> = 3은 해예요.   <b>[M1 A1]</b></div><div class=\"worked__math\">GDC로 <i>y</i> = 2<sup><i>x</i></sup>와 <i>y</i> = <i>x</i> + 5의 그래프를 그려요(또는 <i>y</i> = 2<sup><i>x</i></sup> − <i>x</i> − 5의 영점을 구해요).   <b>[M1]</b></div><div class=\"worked__math\">다른 교점은 <i>x</i> = −4.96805… ≈ <b>−4.97</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q025 · numeric · exam · SL · SL 1.9 · 4 marks
    "t1-2-q025": {
      // EN: <p>Find the coefficient of <span class="chem">x^5</span> in the expansion of <span class="chem">(1 - 0.15x)^{20}</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">(1 - 0.15x)^{20}</span>의 전개식에서 <span class=\"chem\">x^5</span>의 계수를 구하시오 (Find). 답은 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: The general term is <span class="chem">^{20}C_r (1)^{20-r} (-0.15x)^r</span>.
        "일반항은 <span class=\"chem\">^{20}C_r (1)^{20-r} (-0.15x)^r</span>이에요.",
        // EN: For <span class="chem">x^5</span> take <span class="chem">r = 5</span>. Use the <span class="mono">nCr</span> function of your GDC for <span class="chem">^{20}C_5</span>.
        "<span class=\"chem\">x^5</span>에 대해서는 <span class=\"chem\">r = 5</span>를 택하세요. <span class=\"chem\">^{20}C_5</span>는 GDC의 <span class=\"mono\">nCr</span> 기능으로 구하세요.",
        // EN: Keep the sign: <span class="chem">(-0.15)^5</span> is negative.
        "부호에 주의하세요: <span class=\"chem\">(-0.15)^5</span>는 음수예요.",
      ],
      // EN: <div class="worked__math">General term <sup>20</sup>C<sub><i>r</i></sub> (−0.15<i>x</i>)<sup><i>r</i></sup>; for <i>x</i><sup>5</sup>, <i>r</i> = 5. <b>[M1 A1]</b></div><div class="worked__math"><sup>20</sup>C<sub>5</sub> = 15504 <b>[A1]</b></div><div class="worked__math">15504 × (−0.15)<sup>5</sup> = −1.177335 ≈ <b>−1.18</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">일반항 <sup>20</sup>C<sub><i>r</i></sub> (−0.15<i>x</i>)<sup><i>r</i></sup>; <i>x</i><sup>5</sup>에 대해 <i>r</i> = 5.   <b>[M1 A1]</b></div><div class=\"worked__math\"><sup>20</sup>C<sub>5</sub> = 15504   <b>[A1]</b></div><div class=\"worked__math\">15504 × (−0.15)<sup>5</sup> = −1.177335 ≈ <b>−1.18</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q026 · numeric · exam · SL · SL 1.9 · 5 marks
    "t1-2-q026": {
      // EN: <p>Find the exact value of the term independent of <span class="chem">x</span> in the expansion of <span class="chem">(x^2 - 3/(2x))^9</span>.</p>
      stem: "<p><span class=\"chem\">(x^2 - 3/(2x))^9</span>의 전개식에서 <span class=\"chem\">x</span>를 포함하지 않는 항의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Write the general term <span class="chem">^9C_r (x^2)^{9-r} (-3/(2x))^r</span> and collect the powers of <span class="chem">x</span>.
        "일반항 <span class=\"chem\">^9C_r (x^2)^{9-r} (-3/(2x))^r</span>를 쓰고 <span class=\"chem\">x</span>의 거듭제곱을 모으세요.",
        // EN: The power of <span class="chem">x</span> is <span class="chem">18 - 2r - r = 18 - 3r</span>. The term independent of <span class="chem">x</span> has power 0.
        "<span class=\"chem\">x</span>의 지수는 <span class=\"chem\">18 - 2r - r = 18 - 3r</span>이에요. <span class=\"chem\">x</span>를 포함하지 않는 항은 지수가 0이에요.",
        // EN: With <span class="chem">r = 6</span>, evaluate <span class="chem">^9C_6 × (-3/2)^6</span>. An even power makes the sign positive.
        "<span class=\"chem\">r = 6</span>으로 <span class=\"chem\">^9C_6 × (-3/2)^6</span>을 계산하세요. 짝수 거듭제곱이므로 부호는 양수가 돼요.",
      ],
      // EN: <div class="worked__math"><i>T</i><sub><i>r</i>+1</sub> = <sup>9</sup>C<sub><i>r</i></sub> (<i>x</i><sup>2</sup>)<sup>9−<i>r</i></sup> (−<span class="frac"><span>3</span><span>2</span></span>)<sup><i>r</i></sup> <i>x</i><sup>−<i>r</i></sup> = <sup>9</sup>C<sub><i>r</i></sub> (−<span class="frac"><span>3</span><span>2</span></span>)<sup><i>r</i></sup> <i>x</i><sup>18−3<i>r</i></sup> <b>[M1 A1]</b></div><div class="worked__math">18 − 3<i>r</i> = 0 ⇒ <i>r</i> = 6 <b>[A1]</b></div><div class="worked__math"><sup>9</sup>C<sub>6</sub> × (<span class="frac"><span>3</span><span>2</span></span>)<sup>6</sup> = 84 × <span class="frac"><span>729</span><span>64</span></span> <b>[M1]</b> = <b><span class="frac"><span>15309</span><span>16</span></span> = 956.8125</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>T</i><sub><i>r</i>+1</sub> = <sup>9</sup>C<sub><i>r</i></sub> (<i>x</i><sup>2</sup>)<sup>9−<i>r</i></sup> (−<span class=\"frac\"><span>3</span><span>2</span></span>)<sup><i>r</i></sup> <i>x</i><sup>−<i>r</i></sup> = <sup>9</sup>C<sub><i>r</i></sub> (−<span class=\"frac\"><span>3</span><span>2</span></span>)<sup><i>r</i></sup> <i>x</i><sup>18−3<i>r</i></sup>   <b>[M1 A1]</b></div><div class=\"worked__math\">18 − 3<i>r</i> = 0  ⇒  <i>r</i> = 6   <b>[A1]</b></div><div class=\"worked__math\"><sup>9</sup>C<sub>6</sub> × (<span class=\"frac\"><span>3</span><span>2</span></span>)<sup>6</sup> = 84 × <span class=\"frac\"><span>729</span><span>64</span></span>   <b>[M1]</b>   = <b><span class=\"frac\"><span>15309</span><span>16</span></span> = 956.8125</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q027 · numeric · exam · SL · SL 1.9 · 5 marks
    "t1-2-q027": {
      // EN: <p>Consider the expansion of <span class="chem">(1 + x/4)^n</span>, where <span class="chem">n &gt;= 3</span> is an integer. Find the smallest value of <span class="chem">n</span> for which the coefficient of <span class="chem">x^3</span> is greater than 100.</p>
      stem: "<p><span class=\"chem\">n &gt;= 3</span>이 정수일 때 <span class=\"chem\">(1 + x/4)^n</span>의 전개식을 생각하자. <span class=\"chem\">x^3</span>의 계수가 100보다 크게 되는 <span class=\"chem\">n</span>의 최솟값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: write the coefficient of <span class="chem">x^3</span> as a function of <span class="chem">n</span>, then search for the first integer <span class="chem">n</span> that makes it exceed 100.
        "해석: <span class=\"chem\">x^3</span>의 계수를 <span class=\"chem\">n</span>에 대한 함수로 쓴 다음, 그 값이 100을 넘게 되는 첫 번째 정수 <span class=\"chem\">n</span>을 찾으세요.",
        // EN: The term in <span class="chem">x^3</span> is <span class="chem">^nC_3 (x/4)^3</span>, so the coefficient is <span class="chem">^nC_3 / 64</span>.
        "<span class=\"chem\">x^3</span> 항은 <span class=\"chem\">^nC_3 (x/4)^3</span>이므로 계수는 <span class=\"chem\">^nC_3 / 64</span>예요.",
        // EN: You need <span class="chem">^nC_3 &gt; 6400</span>. Use a table of <span class="mono">nCr(n, 3)</span> on your GDC and check the values either side of the crossing.
        "<span class=\"chem\">^nC_3 &gt; 6400</span>이어야 해요. GDC에서 <span class=\"mono\">nCr(n, 3)</span>의 표를 만들고 경계 양쪽의 값을 확인하세요.",
      ],
      // EN: <p><strong>Decode:</strong> this is a search over integers, not an equation with one exact root.</p><div class="worked__math">Coefficient of <i>x</i><sup>3</sup> = <sup><i>n</i></sup>C<sub>3</sub> × (<span class="frac"><span>1</span><span>4</span></span>)<sup>3</sup> = <span class="frac"><span><sup><i>n</i></sup>C<sub>3</sub></span><span>64</span></span> <b>[M1 A1]</b></div><div class="worked__math"><span class="frac"><span><sup><i>n</i></sup>C<sub>3</sub></span><span>64</span></span> &gt; 100 ⇒ <sup><i>n</i></sup>C<sub>3</sub> &gt; 6400 <b>[M1]</b></div><div class="worked__math">GDC table: <sup>34</sup>C<sub>3</sub> = 5984 (too small), <sup>35</sup>C<sub>3</sub> = 6545 <b>[A1]</b></div><div class="worked__math">Smallest <b><i>n</i> = 35</b> <b>[A1]</b></div>
      solution: "<p><strong>해석:</strong> 이것은 정확한 근이 하나인 방정식이 아니라 정수 중에서 찾는 문제예요.</p><div class=\"worked__math\"><i>x</i><sup>3</sup>의 계수 = <sup><i>n</i></sup>C<sub>3</sub> × (<span class=\"frac\"><span>1</span><span>4</span></span>)<sup>3</sup> = <span class=\"frac\"><span><sup><i>n</i></sup>C<sub>3</sub></span><span>64</span></span>   <b>[M1 A1]</b></div><div class=\"worked__math\"><span class=\"frac\"><span><sup><i>n</i></sup>C<sub>3</sub></span><span>64</span></span> &gt; 100  ⇒  <sup><i>n</i></sup>C<sub>3</sub> &gt; 6400   <b>[M1]</b></div><div class=\"worked__math\">GDC 표: <sup>34</sup>C<sub>3</sub> = 5984 (너무 작음), <sup>35</sup>C<sub>3</sub> = 6545   <b>[A1]</b></div><div class=\"worked__math\">최솟값 <b><i>n</i> = 35</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q028 · numeric · exam · SL · SL 1.5, 1.7 · 4 marks
    "t1-2-q028": {
      // EN: <p>The loudness <span class="chem">L</span> of a sound, in decibels, is given by <span class="chem">L = 10 log(I/I_0)</span>, where <span class="chem">I</span> is the intensity of the sound, <span class="chem">I_0</span> is a fixed reference intensity, and log is to base 10. Traffic on a busy street measures 78 decibels and a rock concert measures 95 decibels. Find how many times more intense the sound of the concert is than the sound of the traffic. Give your answer correct to 3 significant figures.</p>
      stem: "<p>소리의 크기 <span class=\"chem\">L</span>(데시벨)은 <span class=\"chem\">L = 10 log(I/I_0)</span>로 주어지며, 여기서 <span class=\"chem\">I</span>는 소리의 세기, <span class=\"chem\">I_0</span>은 고정된 기준 세기이고 log의 밑은 10이다. 붐비는 거리의 교통 소음은 78데시벨, 록 콘서트는 95데시벨로 측정되었다. 콘서트 소리의 세기가 교통 소리의 세기의 몇 배인지 구하시오 (Find). 답은 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: Decode: “how many times more intense” asks for the ratio <span class="chem">I_{concert} / I_{traffic}</span>. You do not need to know <span class="chem">I_0</span>.
        "해석: \"몇 배 더 센가\"는 비 <span class=\"chem\">I_{concert} / I_{traffic}</span>를 묻는 거예요. <span class=\"chem\">I_0</span>을 알 필요는 없어요.",
        // EN: Write <span class="chem">95 = 10 log(I_c / I_0)</span> and <span class="chem">78 = 10 log(I_t / I_0)</span>, then subtract. The quotient law turns the difference of logs into <span class="chem">log(I_c / I_t)</span>.
        "<span class=\"chem\">95 = 10 log(I_c / I_0)</span>와 <span class=\"chem\">78 = 10 log(I_t / I_0)</span>를 쓴 다음 빼세요. 몫의 성질에 의해 로그의 차는 <span class=\"chem\">log(I_c / I_t)</span>가 돼요.",
        // EN: You should get <span class="chem">log(I_c / I_t) = 1.7</span>.
        "<span class=\"chem\">log(I_c / I_t) = 1.7</span>을 얻어야 해요.",
      ],
      // EN: <p><strong>Decode:</strong> the answer is a ratio of intensities, so subtract the two decibel equations and the unknown <i>I</i><sub>0</sub> cancels.</p><div class="worked__math">95 − 78 = 10 log(<i>I</i><sub>c</sub>/<i>I</i><sub>0</sub>) − 10 log(<i>I</i><sub>t</sub>/<i>I</i><sub>0</sub>) = 10 log(<i>I</i><sub>c</sub>/<i>I</i><sub>t</sub>) <b>[M1 M1]</b></div><div class="worked__math">log(<i>I</i><sub>c</sub>/<i>I</i><sub>t</sub>) = 1.7 <b>[A1]</b></div><div class="worked__math"><i>I</i><sub>c</sub>/<i>I</i><sub>t</sub> = 10<sup>1.7</sup> = 50.118… ≈ <b>50.1</b> <b>[A1]</b></div>
      solution: "<p><strong>해석:</strong> 답은 세기의 비이므로 두 데시벨 식을 빼면 모르는 값 <i>I</i><sub>0</sub>이 소거돼요.</p><div class=\"worked__math\">95 − 78 = 10 log(<i>I</i><sub>c</sub>/<i>I</i><sub>0</sub>) − 10 log(<i>I</i><sub>t</sub>/<i>I</i><sub>0</sub>) = 10 log(<i>I</i><sub>c</sub>/<i>I</i><sub>t</sub>)   <b>[M1 M1]</b></div><div class=\"worked__math\">log(<i>I</i><sub>c</sub>/<i>I</i><sub>t</sub>) = 1.7   <b>[A1]</b></div><div class=\"worked__math\"><i>I</i><sub>c</sub>/<i>I</i><sub>t</sub> = 10<sup>1.7</sup> = 50.118… ≈ <b>50.1</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q029 · numeric · exam · SL · SL 1.7 · 5 marks
    "t1-2-q029": {
      // EN: <p>After an injection, the amount of a drug in a patient’s bloodstream is modelled by <span class="chem">A = A_0 e^{-kt}</span>, where <span class="chem">t</span> is the time in hours and <span class="chem">A_0</span> is the initial dose. The amount of drug halves every 5.5 hours. Find the time it takes for the amount to fall to 15% of the initial dose. Give your answer in hours, correct to 3 significant figures.</p>
      stem: "<p>주사를 맞은 후 환자의 혈액 속 약물의 양은 <span class=\"chem\">A = A_0 e^{-kt}</span>로 모델링되며, 여기서 <span class=\"chem\">t</span>는 시간(시간 단위)이고 <span class=\"chem\">A_0</span>은 처음 투여량이다. 약물의 양은 5.5시간마다 절반이 된다. 약물의 양이 처음 투여량의 15%로 줄어드는 데 걸리는 시간을 구하시오 (Find). 답은 시간 단위로, 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: Decode: “halves every 5.5 hours” gives you <span class="chem">k</span>; “15% of the initial dose” means <span class="chem">A = 0.15A_0</span>. The value of <span class="chem">A_0</span> cancels.
        "해석: \"5.5시간마다 절반이 된다\"에서 <span class=\"chem\">k</span>가 정해지고, \"처음 투여량의 15%\"는 <span class=\"chem\">A = 0.15A_0</span>을 뜻해요. <span class=\"chem\">A_0</span>의 값은 소거돼요.",
        // EN: From <span class="chem">0.5 = e^{-5.5k}</span>, <span class="chem">k = ln 2 / 5.5</span>.
        "<span class=\"chem\">0.5 = e^{-5.5k}</span>에서 <span class=\"chem\">k = ln 2 / 5.5</span>예요.",
        // EN: Now solve <span class="chem">0.15 = e^{-kt}</span> for <span class="chem">t</span>.
        "이제 <span class=\"chem\">0.15 = e^{-kt}</span>를 <span class=\"chem\">t</span>에 대하여 푸세요.",
      ],
      // EN: <p><strong>Decode:</strong> the half-life fixes <i>k</i>; then solve for the time at which <i>A</i> = 0.15<i>A</i><sub>0</sub>.</p><div class="worked__math">0.5<i>A</i><sub>0</sub> = <i>A</i><sub>0</sub>e<sup>−5.5<i>k</i></sup> <b>[M1]</b> ⇒ <i>k</i> = <span class="frac"><span>ln 2</span><span>5.5</span></span> = 0.126026… <b>[A1]</b></div><div class="worked__math">0.15 = e<sup>−<i>kt</i></sup> <b>[M1]</b> ⇒ <i>t</i> = <span class="frac"><span>ln(1/0.15)</span><span><i>k</i></span></span> <b>[A1]</b></div><div class="worked__math"><i>t</i> = 15.0533… ≈ <b>15.1 hours</b> <b>[A1]</b></div>
      solution: "<p><strong>해석:</strong> 반감기로 <i>k</i>가 정해지고, 그다음 <i>A</i> = 0.15<i>A</i><sub>0</sub>이 되는 시간을 구해요.</p><div class=\"worked__math\">0.5<i>A</i><sub>0</sub> = <i>A</i><sub>0</sub>e<sup>−5.5<i>k</i></sup>   <b>[M1]</b>  ⇒  <i>k</i> = <span class=\"frac\"><span>ln 2</span><span>5.5</span></span> = 0.126026…   <b>[A1]</b></div><div class=\"worked__math\">0.15 = e<sup>−<i>kt</i></sup>   <b>[M1]</b>  ⇒  <i>t</i> = <span class=\"frac\"><span>ln(1/0.15)</span><span><i>k</i></span></span>   <b>[A1]</b></div><div class=\"worked__math\"><i>t</i> = 15.0533… ≈ <b>15.1시간</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q030 · short · exam · SL · SL 1.7 · 7 marks
    "t1-2-q030": {
      // EN: <p>A cup of tea is left to cool in a room. Its temperature, <span class="chem">T</span> °C, <span class="chem">t</span> minutes after it was poured, is modelled by <span class="chem">T = 22 + 68e^{-kt}</span>, where <span class="chem">k &gt; 0</span>.<br>(a) Write down the temperature of the tea when it was poured. <strong>[1]</strong><br>(b) After 4 minutes the temperature is 61 °C. Find the value of <span class="chem">k</span>. <strong>[3]</strong><br>(c) Find the time it takes for the tea to cool to 30 °C. <strong>[2]</strong><br>(d) Explain why, according to this model, the tea never cools to 22 °C. <strong>[1]</strong></p>
      stem: "<p>차 한 잔을 방에 두어 식힌다. 차를 따른 지 <span class=\"chem\">t</span>분 후의 온도 <span class=\"chem\">T</span> °C는 <span class=\"chem\">T = 22 + 68e^{-kt}</span>로 모델링되며, 여기서 <span class=\"chem\">k &gt; 0</span>이다.<br>(a) 차를 따랐을 때의 온도를 쓰시오 (Write down). <strong>[1]</strong><br>(b) 4분 후 온도는 61 °C이다. <span class=\"chem\">k</span>의 값을 구하시오 (Find). <strong>[3]</strong><br>(c) 차가 30 °C로 식는 데 걸리는 시간을 구하시오 (Find). <strong>[2]</strong><br>(d) 이 모델에 따르면 차가 결코 22 °C까지 식지 않는 이유를 설명하시오 (Explain). <strong>[1]</strong></p>",
      hints: [
        // EN: For (a), put <span class="chem">t = 0</span>: <span class="chem">e^0 = 1</span>.
        "(a)에서는 <span class=\"chem\">t = 0</span>을 대입하세요: <span class=\"chem\">e^0 = 1</span>이에요.",
        // EN: For (b), isolate the exponential first: <span class="chem">e^{-4k} = (61 - 22)/68</span>, then take <span class="chem">ln</span> of both sides.
        "(b)에서는 먼저 지수 부분을 따로 떼어내세요: <span class=\"chem\">e^{-4k} = (61 - 22)/68</span>. 그런 다음 양변에 <span class=\"chem\">ln</span>을 취하세요.",
        // EN: For (c), use the unrounded value of <span class="chem">k</span> stored in your GDC to avoid rounding errors.
        "(c)에서는 반올림 오차를 피하기 위해 GDC에 저장된 반올림하지 않은 <span class=\"chem\">k</span>의 값을 사용하세요.",
        // EN: For (d), think about the sign of <span class="chem">68e^{-kt}</span>.
        "(d)에서는 <span class=\"chem\">68e^{-kt}</span>의 부호를 생각해 보세요.",
      ],
      // EN: <p>Isolate the exponential, take natural logarithms, and keep <span class="chem">k</span> unrounded in your GDC for part (c). The horizontal asymptote <span class="chem">T = 22</span> is the room temperature.</p>
      solution: "<p>지수 부분을 따로 떼어내고 자연로그를 취한 다음, (c)에서는 GDC에 있는 <span class=\"chem\">k</span>를 반올림하지 않고 사용해요. 수평점근선 <span class=\"chem\">T = 22</span>는 실내 온도예요.</p>",
      // EN: <div class="worked__math">(a) <i>T</i>(0) = 22 + 68 = <b>90 °C</b>.</div><div class="worked__math">(b) 61 = 22 + 68e<sup>−4<i>k</i></sup> ⇒ e<sup>−4<i>k</i></sup> = <span class="frac"><span>39</span><span>68</span></span> ⇒ <i>k</i> = <span class="frac"><span>1</span><span>4</span></span> ln<span class="frac"><span>68</span><span>39</span></span> = 0.138986… ≈ <b>0.139</b>.</div><div class="worked__math">(c) 30 = 22 + 68e<sup>−<i>kt</i></sup> ⇒ e<sup>−<i>kt</i></sup> = <span class="frac"><span>8</span><span>68</span></span> ⇒ <i>t</i> = <span class="frac"><span>ln(68/8)</span><span><i>k</i></span></span> = 15.397… ≈ <b>15.4 minutes</b>.</div><div class="worked__math">(d) e<sup>−<i>kt</i></sup> &gt; 0 for every <i>t</i>, so <i>T</i> &gt; 22: the temperature approaches the room temperature of 22 °C but never reaches it.</div>
      answer: "<div class=\"worked__math\">(a) <i>T</i>(0) = 22 + 68 = <b>90 °C</b>.</div><div class=\"worked__math\">(b) 61 = 22 + 68e<sup>−4<i>k</i></sup>  ⇒  e<sup>−4<i>k</i></sup> = <span class=\"frac\"><span>39</span><span>68</span></span>  ⇒  <i>k</i> = <span class=\"frac\"><span>1</span><span>4</span></span> ln<span class=\"frac\"><span>68</span><span>39</span></span> = 0.138986… ≈ <b>0.139</b>.</div><div class=\"worked__math\">(c) 30 = 22 + 68e<sup>−<i>kt</i></sup>  ⇒  e<sup>−<i>kt</i></sup> = <span class=\"frac\"><span>8</span><span>68</span></span>  ⇒  <i>t</i> = <span class=\"frac\"><span>ln(68/8)</span><span><i>k</i></span></span> = 15.397… ≈ <b>15.4분</b>.</div><div class=\"worked__math\">(d) 모든 <i>t</i>에 대하여 e<sup>−<i>kt</i></sup> &gt; 0이므로 <i>T</i> &gt; 22: 온도는 실내 온도 22 °C에 가까워지지만 결코 도달하지 않아요.</div>",
      markscheme: [
        // EN: A1: (a) T = 22 + 68 = 90 °C.
        "A1: (a) T = 22 + 68 = 90 °C.",
        // EN: M1: (b) Substitutes t = 4 and T = 61: 61 = 22 + 68e^(−4k).
        "M1: (b) t = 4와 T = 61을 대입함: 61 = 22 + 68e^(−4k).",
        // EN: A1: Obtains e^(−4k) = 39/68 (≈ 0.574).
        "A1: e^(−4k) = 39/68 (≈ 0.574)을 얻음.",
        // EN: A1: k = 0.139 (0.138986…).
        "A1: k = 0.139 (0.138986…).",
        // EN: M1: (c) Sets 30 = 22 + 68e^(−kt), so e^(−kt) = 8/68 (or solves graphically on the GDC).
        "M1: (c) 30 = 22 + 68e^(−kt)로 놓아 e^(−kt) = 8/68을 얻음 (또는 GDC에서 그래프로 풂).",
        // EN: A1: t = 15.4 minutes (15.397…).
        "A1: t = 15.4분 (15.397…).",
        // EN: R1: (d) e^(−kt) > 0 for all t, so T > 22: the temperature approaches 22 °C but never reaches it.
        "R1: (d) 모든 t에 대하여 e^(−kt) > 0이므로 T > 22: 온도는 22 °C에 가까워지지만 결코 도달하지 않음.",
      ],
    },

    // ── t1-2-q031 · short · exam · SL · SL 1.9 · 6 marks
    "t1-2-q031": {
      // EN: <p>(a) Find the first three terms, in ascending powers of <span class="chem">x</span>, of the expansion of <span class="chem">(1 - x)^8</span>. <strong>[2]</strong><br>(b) Hence, by choosing a suitable value of <span class="chem">x</span>, find an estimate for <span class="chem">0.98^8</span>. <strong>[2]</strong><br>(c) Use your GDC to find the percentage error in your estimate, correct to 3 significant figures. <strong>[2]</strong></p>
      stem: "<p>(a) <span class=\"chem\">(1 - x)^8</span>의 전개식에서 <span class=\"chem\">x</span>의 오름차순으로 처음 세 항을 구하시오 (Find). <strong>[2]</strong><br>(b) 이를 이용하여 (Hence) 알맞은 <span class=\"chem\">x</span>의 값을 택해 <span class=\"chem\">0.98^8</span>의 어림값을 구하시오. <strong>[2]</strong><br>(c) GDC를 사용하여 어림값의 백분율 오차를 유효숫자 3자리로 구하시오. <strong>[2]</strong></p>",
      hints: [
        // EN: Use <span class="chem">^8C_0, ^8C_1, ^8C_2</span> with <span class="chem">b = -x</span>.
        "<span class=\"chem\">b = -x</span>로 놓고 <span class=\"chem\">^8C_0, ^8C_1, ^8C_2</span>을 사용하세요.",
        // EN: For (b), solve <span class="chem">1 - x = 0.98</span> to choose <span class="chem">x</span>.
        "(b)에서는 <span class=\"chem\">1 - x = 0.98</span>을 풀어서 <span class=\"chem\">x</span>를 택하세요.",
        // EN: Percentage error = |approximate − exact| ÷ exact × 100%. Divide by the exact value from the GDC.
        "백분율 오차 = |어림값 − 정확한 값| ÷ 정확한 값 × 100%. GDC로 구한 정확한 값으로 나누세요.",
      ],
      // EN: <p>The terms after <span class="chem">x^2</span> contain <span class="chem">0.02^3</span> and smaller powers, which is why three terms already give an error of about 0.05%.</p>
      solution: "<p><span class=\"chem\">x^2</span> 다음 항들에는 <span class=\"chem\">0.02^3</span>과 더 작은 거듭제곱이 들어 있어서, 세 항만으로도 오차가 약 0.05%밖에 되지 않아요.</p>",
      // EN: <div class="worked__math">(a) (1 − <i>x</i>)<sup>8</sup> = 1 − 8<i>x</i> + 28<i>x</i><sup>2</sup> − …</div><div class="worked__math">(b) With <i>x</i> = 0.02: 1 − 0.16 + 0.0112 = <b>0.8512</b>.</div><div class="worked__math">(c) 0.98<sup>8</sup> = 0.8507630… (GDC). Percentage error = <span class="frac"><span>|0.8512 − 0.8507630…|</span><span>0.8507630…</span></span> × 100% = <b>0.0514%</b>.</div>
      answer: "<div class=\"worked__math\">(a) (1 − <i>x</i>)<sup>8</sup> = 1 − 8<i>x</i> + 28<i>x</i><sup>2</sup> − …</div><div class=\"worked__math\">(b) <i>x</i> = 0.02로 놓으면: 1 − 0.16 + 0.0112 = <b>0.8512</b>.</div><div class=\"worked__math\">(c) 0.98<sup>8</sup> = 0.8507630… (GDC). 백분율 오차 = <span class=\"frac\"><span>|0.8512 − 0.8507630…|</span><span>0.8507630…</span></span> × 100% = <b>0.0514%</b>.</div>",
      markscheme: [
        // EN: A1: (a) 1 − 8x (first two terms correct).
        "A1: (a) 1 − 8x (처음 두 항이 맞음).",
        // EN: A1: + 28x^2 (third term correct, from ⁸C₂ = 28).
        "A1: + 28x^2 (셋째 항이 맞음, ⁸C₂ = 28에서).",
        // EN: M1: (b) Substitutes x = 0.02 into the three terms.
        "M1: (b) 세 항에 x = 0.02를 대입함.",
        // EN: A1: Estimate 0.8512.
        "A1: 어림값 0.8512.",
        // EN: M1: (c) Uses |estimate − exact| / exact × 100% with the GDC value 0.850763….
        "M1: (c) GDC 값 0.850763…을 이용해 |어림값 − 정확한 값| / 정확한 값 × 100%를 사용함.",
        // EN: A1: Percentage error = 0.0514%.
        "A1: 백분율 오차 = 0.0514%.",
      ],
    },

    // ── t1-2-q032 · short · exam · SL · SL 1.7, 4.4 · 9 marks
    "t1-2-q032": {
      // EN: <p>The number of followers, <span class="chem">y</span> hundred, of a new online channel, <span class="chem">x</span> weeks after it was launched, is shown in the table.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"><i>x</i> (weeks)</th><th scope="col">1</th><th scope="col">2</th><th scope="col">3</th><th scope="col">4</th><th scope="col">5</th><th scope="col">6</th></tr></thead><tbody><tr><th scope="row"><i>y</i> (hundreds)</th><td>4.6</td><td>6.8</td><td>9.7</td><td>14.2</td><td>20.5</td><td>29.9</td></tr></tbody></table></div><p>The data are modelled by <span class="chem">y = a b^x</span>, where <span class="chem">a, b &gt; 0</span>.<br>(a) Show that <span class="chem">ln y = ln a + x ln b</span>. <strong>[2]</strong><br>(b) Use your GDC to find the equation of the regression line of <span class="chem">ln y</span> on <span class="chem">x</span>. <strong>[2]</strong><br>(c) Hence find the values of <span class="chem">a</span> and <span class="chem">b</span>. <strong>[2]</strong><br>(d) Use the model to estimate the number of followers after 8 weeks, and comment on the reliability of this estimate. <strong>[3]</strong></p>
      stem: "<p>새 온라인 채널이 개설된 지 <span class=\"chem\">x</span>주 후의 팔로워 수 <span class=\"chem\">y</span>(백 명 단위)가 표에 나와 있다.</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"><i>x</i> (주)</th><th scope=\"col\">1</th><th scope=\"col\">2</th><th scope=\"col\">3</th><th scope=\"col\">4</th><th scope=\"col\">5</th><th scope=\"col\">6</th></tr></thead><tbody><tr><th scope=\"row\"><i>y</i> (백 명)</th><td>4.6</td><td>6.8</td><td>9.7</td><td>14.2</td><td>20.5</td><td>29.9</td></tr></tbody></table></div><p>이 자료는 <span class=\"chem\">y = a b^x</span> (<span class=\"chem\">a, b &gt; 0</span>)로 모델링된다.<br>(a) <span class=\"chem\">ln y = ln a + x ln b</span>임을 보이시오 (Show that). <strong>[2]</strong><br>(b) GDC를 사용하여 <span class=\"chem\">x</span>에 대한 <span class=\"chem\">ln y</span>의 회귀직선의 방정식을 구하시오 (Find). <strong>[2]</strong><br>(c) 이를 이용하여 (Hence) <span class=\"chem\">a</span>와 <span class=\"chem\">b</span>의 값을 구하시오. <strong>[2]</strong><br>(d) 이 모델을 사용하여 8주 후의 팔로워 수를 추정하고 (Estimate), 이 추정값의 신뢰도에 대해 논하시오. <strong>[3]</strong></p>",
      hints: [
        // EN: For (a), apply <span class="chem">ln</span> to both sides and use <span class="chem">ln(PQ) = ln P + ln Q</span> and <span class="chem">ln(b^x) = x ln b</span>.
        "(a)에서는 양변에 <span class=\"chem\">ln</span>을 취하고 <span class=\"chem\">ln(PQ) = ln P + ln Q</span>와 <span class=\"chem\">ln(b^x) = x ln b</span>를 사용하세요.",
        // EN: For (b), make a new list of <span class="chem">ln y</span> values on your GDC and run linear regression with <span class="chem">x</span> as the independent variable.
        "(b)에서는 GDC에 <span class=\"chem\">ln y</span> 값의 새 목록을 만들고 <span class=\"chem\">x</span>를 독립변수로 하여 선형회귀를 실행하세요.",
        // EN: For (c), compare <span class="chem">ln y = mx + c</span> with part (a): <span class="chem">ln b = m</span> and <span class="chem">ln a = c</span>.
        "(c)에서는 <span class=\"chem\">ln y = mx + c</span>를 (a)와 비교하세요: <span class=\"chem\">ln b = m</span>, <span class=\"chem\">ln a = c</span>.",
        // EN: For (d), remember that <span class="chem">y</span> is measured in hundreds.
        "(d)에서는 <span class=\"chem\">y</span>가 백 명 단위라는 점을 기억하세요.",
      ],
      // EN: <p>Taking logarithms turns the exponential model into a straight line in <span class="chem">x</span> and <span class="chem">ln y</span>. The gradient gives <span class="chem">ln b</span> and the intercept gives <span class="chem">ln a</span>.</p>
      solution: "<p>로그를 취하면 지수 모델이 <span class=\"chem\">x</span>와 <span class=\"chem\">ln y</span>에 대한 직선이 돼요. 기울기에서 <span class=\"chem\">ln b</span>, 절편에서 <span class=\"chem\">ln a</span>를 얻어요.</p>",
      // EN: <div class="worked__math">(a) ln <i>y</i> = ln(<i>a b</i><sup><i>x</i></sup>) = ln <i>a</i> + ln(<i>b</i><sup><i>x</i></sup>) = ln <i>a</i> + <i>x</i> ln <i>b</i>.</div><div class="worked__math">(b) With <i>Y</i> = ln <i>y</i>: <i>Y</i> = 0.373<i>x</i> + 1.16 (gradient 0.372875…, intercept 1.159375…).</div><div class="worked__math">(c) <i>b</i> = e<sup>0.372875…</sup> = <b>1.45</b>, <i>a</i> = e<sup>1.159375…</sup> = <b>3.19</b>.</div><div class="worked__math">(d) <i>y</i> = 3.1879… × 1.4519…<sup>8</sup> = 63.0 hundred, so about <b>6300 followers</b>. This is an extrapolation (outside 1 ≤ <i>x</i> ≤ 6), so it is less reliable, although the fit to the data is very close.</div>
      answer: "<div class=\"worked__math\">(a) ln <i>y</i> = ln(<i>a b</i><sup><i>x</i></sup>) = ln <i>a</i> + ln(<i>b</i><sup><i>x</i></sup>) = ln <i>a</i> + <i>x</i> ln <i>b</i>.</div><div class=\"worked__math\">(b) <i>Y</i> = ln <i>y</i>라 하면: <i>Y</i> = 0.373<i>x</i> + 1.16 (기울기 0.372875…, 절편 1.159375…).</div><div class=\"worked__math\">(c) <i>b</i> = e<sup>0.372875…</sup> = <b>1.45</b>,  <i>a</i> = e<sup>1.159375…</sup> = <b>3.19</b>.</div><div class=\"worked__math\">(d) <i>y</i> = 3.1879… × 1.4519…<sup>8</sup> = 63.0백 명, 즉 약 <b>6300명의 팔로워</b>. 이것은 외삽(1 ≤ <i>x</i> ≤ 6 범위 밖)이므로, 자료에 대한 적합도가 매우 높긴 하지만 신뢰도는 낮아요.</div>",
      markscheme: [
        // EN: M1: (a) Takes ln of both sides: ln y = ln(a b^x).
        "M1: (a) 양변에 ln을 취함: ln y = ln(a b^x).",
        // EN: A1: Uses the product and power laws: ln(a b^x) = ln a + ln(b^x) = ln a + x ln b. AG: ln y = ln a + x ln b; the given line itself earns no mark.
        "A1: 곱과 거듭제곱의 성질을 사용함: ln(a b^x) = ln a + ln(b^x) = ln a + x ln b. AG: ln y = ln a + x ln b; 주어진 식만 쓰면 점수 없음.",
        // EN: A1: (b) Gradient 0.373 (0.372875…).
        "A1: (b) 기울기 0.373 (0.372875…).",
        // EN: A1: Intercept 1.16 (1.159375…), so ln y = 0.373x + 1.16.
        "A1: 절편 1.16 (1.159375…), 따라서 ln y = 0.373x + 1.16.",
        // EN: A1: (c) b = e^0.372875… = 1.45.
        "A1: (c) b = e^0.372875… = 1.45.",
        // EN: A1: a = e^1.159375… = 3.19.
        "A1: a = e^1.159375… = 3.19.",
        // EN: M1: (d) Substitutes x = 8 into the model.
        "M1: (d) 모델에 x = 8을 대입함.",
        // EN: A1: y ≈ 63.0 hundred, about 6300 followers (accept 62.3 to 63.1 hundred from rounded values of a and b, or of the gradient and intercept).
        "A1: y ≈ 63.0백 명, 약 6300명의 팔로워 (a와 b, 또는 기울기와 절편의 반올림한 값에서 나온 62.3~63.1백 명도 인정).",
        // EN: R1: Not reliable, or less reliable, because x = 8 is outside the data range (extrapolation).
        "R1: x = 8은 자료 범위 밖(외삽)이므로 신뢰할 수 없거나 신뢰도가 낮음.",
      ],
    },

    // ── t1-2-q033 · numeric · exam · SL · SL 1.9 · 5 marks
    "t1-2-q033": {
      // EN: <p>In the expansion of <span class="chem">(1 + ax)^n</span>, where <span class="chem">n</span> is a positive integer, the coefficient of <span class="chem">x</span> is −6.3 and the coefficient of <span class="chem">x^2</span> is 18.9. Find the value of <span class="chem">a</span>.</p>
      stem: "<p><span class=\"chem\">n</span>이 양의 정수일 때 <span class=\"chem\">(1 + ax)^n</span>의 전개식에서 <span class=\"chem\">x</span>의 계수는 −6.3이고 <span class=\"chem\">x^2</span>의 계수는 18.9이다. <span class=\"chem\">a</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Write the two coefficients: <span class="chem">na = -6.3</span> and <span class="chem">^nC_2 a^2 = n(n - 1)a^2 / 2 = 18.9</span>.
        "두 계수를 쓰세요: <span class=\"chem\">na = -6.3</span>, <span class=\"chem\">^nC_2 a^2 = n(n - 1)a^2 / 2 = 18.9</span>.",
        // EN: Substitute <span class="chem">a = -6.3/n</span> into the second equation, or solve the pair with your GDC.
        "<span class=\"chem\">a = -6.3/n</span>을 두 번째 식에 대입하거나, GDC로 두 식을 연립하여 푸세요.",
        // EN: You should find that <span class="chem">n = 21</span>. Then use <span class="chem">na = -6.3</span>.
        "<span class=\"chem\">n = 21</span>이 나와야 해요. 그다음 <span class=\"chem\">na = -6.3</span>을 이용하세요.",
      ],
      // EN: <div class="worked__math"><i>na</i> = −6.3 <b>[A1]</b> and <span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span><i>a</i><sup>2</sup> = 18.9 <b>[A1]</b></div><div class="worked__math">Substitute <i>a</i> = −6.3/<i>n</i>: <span class="frac"><span>(<i>n</i> − 1) × 39.69</span><span>2<i>n</i></span></span> = 18.9 <b>[M1]</b> ⇒ 39.69<i>n</i> − 39.69 = 37.8<i>n</i> ⇒ <i>n</i> = 21 <b>[A1]</b></div><div class="worked__math"><i>a</i> = −6.3 / 21 = <b>−0.3</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>na</i> = −6.3   <b>[A1]</b>   그리고   <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span><i>a</i><sup>2</sup> = 18.9   <b>[A1]</b></div><div class=\"worked__math\"><i>a</i> = −6.3/<i>n</i>을 대입:  <span class=\"frac\"><span>(<i>n</i> − 1) × 39.69</span><span>2<i>n</i></span></span> = 18.9   <b>[M1]</b>  ⇒  39.69<i>n</i> − 39.69 = 37.8<i>n</i>  ⇒  <i>n</i> = 21   <b>[A1]</b></div><div class=\"worked__math\"><i>a</i> = −6.3 / 21 = <b>−0.3</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q044 · numeric · exam · SL · SL 1.9 · 4 marks
    "t1-2-q044": {
      // EN: <p>In the expansion of <span class="chem">(2 + x)^n</span>, where <span class="chem">n &gt;= 3</span> is an integer, the coefficient of <span class="chem">x^3</span> is 15360. Find the value of <span class="chem">n</span>.</p>
      stem: "<p><span class=\"chem\">n &gt;= 3</span>이 정수일 때 <span class=\"chem\">(2 + x)^n</span>의 전개식에서 <span class=\"chem\">x^3</span>의 계수는 15360이다. <span class=\"chem\">n</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: The term in <span class="chem">x^3</span> is <span class="chem">^nC_3 2^{n-3} x^3</span>.
        "<span class=\"chem\">x^3</span> 항은 <span class=\"chem\">^nC_3 2^{n-3} x^3</span>이에요.",
        // EN: The equation <span class="chem">^nC_3 × 2^{n-3} = 15360</span> cannot be rearranged for <span class="chem">n</span> by hand. Tabulate <span class="mono">nCr(n, 3) × 2^(n − 3)</span> on your GDC for <span class="chem">n = 3, 4, 5, …</span>.
        "방정식 <span class=\"chem\">^nC_3 × 2^{n-3} = 15360</span>은 손으로 <span class=\"chem\">n</span>에 대해 정리할 수 없어요. GDC에서 <span class=\"chem\">n = 3, 4, 5, …</span>에 대해 <span class=\"mono\">nCr(n, 3) × 2^(n − 3)</span>의 표를 만드세요.",
      ],
      // EN: <div class="worked__math">Coefficient of <i>x</i><sup>3</sup> = <sup><i>n</i></sup>C<sub>3</sub> × 2<sup><i>n</i>−3</sup> <b>[M1]</b>, so <sup><i>n</i></sup>C<sub>3</sub> × 2<sup><i>n</i>−3</sup> = 15360 <b>[A1]</b></div><div class="worked__math">GDC table: <i>n</i> = 9 gives 5376, <i>n</i> = 10 gives 120 × 128 = 15360 <b>[M1]</b></div><div class="worked__math"><b><i>n</i> = 10</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>x</i><sup>3</sup>의 계수 = <sup><i>n</i></sup>C<sub>3</sub> × 2<sup><i>n</i>−3</sup>   <b>[M1]</b>, 따라서 <sup><i>n</i></sup>C<sub>3</sub> × 2<sup><i>n</i>−3</sup> = 15360   <b>[A1]</b></div><div class=\"worked__math\">GDC 표: <i>n</i> = 9이면 5376, <i>n</i> = 10이면 120 × 128 = 15360   <b>[M1]</b></div><div class=\"worked__math\"><b><i>n</i> = 10</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q034 · numeric · challenge · SL · SL 1.7 · 6 marks
    "t1-2-q034": {
      // EN: <p>On 1 January 2025 town A had 12 000 residents and town B had 8000 residents. Planners model the populations by <span class="chem">P_A = 12000(1.035)^t</span> and <span class="chem">P_B = 8000(1.062)^t</span>, where <span class="chem">t</span> is the time in years after 1 January 2025 and the models are valid for all <span class="chem">t &gt;= 0</span>. Find the calendar year during which the population of town B first becomes larger than the population of town A.</p>
      stem: "<p>2025년 1월 1일에 A 마을의 주민은 12 000명, B 마을의 주민은 8000명이었다. 계획 담당자들은 인구를 <span class=\"chem\">P_A = 12000(1.035)^t</span>과 <span class=\"chem\">P_B = 8000(1.062)^t</span>으로 모델링하며, 여기서 <span class=\"chem\">t</span>는 2025년 1월 1일 이후 지난 시간(년 단위)이고 모델은 모든 <span class=\"chem\">t &gt;= 0</span>에 대해 유효하다. B 마을의 인구가 처음으로 A 마을의 인구보다 많아지는 해는 몇 년인지 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: you need the moment <span class="chem">P_B = P_A</span>, and then you must turn a value of <span class="chem">t</span> into a calendar year. The answer is a year, not a number of years.
        "해석: <span class=\"chem\">P_B = P_A</span>이 되는 순간을 구한 다음, <span class=\"chem\">t</span>의 값을 달력상의 연도로 바꿔야 해요. 답은 햇수가 아니라 연도예요.",
        // EN: Set <span class="chem">8000(1.062)^t = 12000(1.035)^t</span> and divide to get <span class="chem">(1.062/1.035)^t = 1.5</span>.
        "<span class=\"chem\">8000(1.062)^t = 12000(1.035)^t</span>으로 놓고 나누면 <span class=\"chem\">(1.062/1.035)^t = 1.5</span>가 돼요.",
        // EN: Take logarithms: <span class="chem">t = ln 1.5 / ln(1.062/1.035)</span>. Then decide which year contains the date <span class="chem">t</span> years after 1 January 2025.
        "로그를 취하세요: <span class=\"chem\">t = ln 1.5 / ln(1.062/1.035)</span>. 그런 다음 2025년 1월 1일로부터 <span class=\"chem\">t</span>년 후의 날짜가 어느 해에 속하는지 판단하세요.",
      ],
      // EN: <p><strong>Decode:</strong> solve an exponential equation for <i>t</i>, then convert “<i>t</i> years after 1 January 2025” into a calendar year.</p><div class="worked__math">8000(1.062)<sup><i>t</i></sup> = 12000(1.035)<sup><i>t</i></sup> <b>[M1]</b> ⇒ (<span class="frac"><span>1.062</span><span>1.035</span></span>)<sup><i>t</i></sup> = 1.5 <b>[A1]</b></div><div class="worked__math"><i>t</i> ln(<span class="frac"><span>1.062</span><span>1.035</span></span>) = ln 1.5 <b>[M1]</b> ⇒ <i>t</i> = 15.744… <b>[A1]</b></div><div class="worked__math">15 &lt; <i>t</i> &lt; 16, and 1 January 2025 + 15 years = 1 January 2040, so the crossing happens during 2040. <b>[R1]</b></div><div class="worked__math"><b>2040</b> <b>[A1]</b></div>
      solution: "<p><strong>해석:</strong> 지수방정식을 <i>t</i>에 대하여 푼 다음, \"2025년 1월 1일로부터 <i>t</i>년 후\"를 달력상의 연도로 바꿔요.</p><div class=\"worked__math\">8000(1.062)<sup><i>t</i></sup> = 12000(1.035)<sup><i>t</i></sup>   <b>[M1]</b>  ⇒  (<span class=\"frac\"><span>1.062</span><span>1.035</span></span>)<sup><i>t</i></sup> = 1.5   <b>[A1]</b></div><div class=\"worked__math\"><i>t</i> ln(<span class=\"frac\"><span>1.062</span><span>1.035</span></span>) = ln 1.5   <b>[M1]</b>  ⇒  <i>t</i> = 15.744…   <b>[A1]</b></div><div class=\"worked__math\">15 &lt; <i>t</i> &lt; 16이고 2025년 1월 1일 + 15년 = 2040년 1월 1일이므로, 역전은 2040년 중에 일어나요.   <b>[R1]</b></div><div class=\"worked__math\"><b>2040</b>년   <b>[A1]</b></div>",
    },

    // ── t1-2-q035 · numeric · challenge · SL · SL 1.7 · 6 marks
    "t1-2-q035": {
      // EN: <p>Solve the equation <span class="chem">log_2 x + log_4(x + 3) = 3</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>방정식 <span class=\"chem\">log_2 x + log_4(x + 3) = 3</span>을 푸시오. 답은 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: Decode: the two logarithms have different bases, so the log laws cannot combine them yet. Change both to base 2; the equation then becomes a polynomial that has no exact root you can find by hand, so finish on the GDC.
        "해석: 두 로그의 밑이 달라서 아직은 로그의 성질로 합칠 수 없어요. 둘 다 밑을 2로 바꾸면 방정식이 손으로는 정확한 근을 구할 수 없는 다항식이 되므로, 마지막은 GDC로 마무리하세요.",
        // EN: Change of base: <span class="chem">log_4(x + 3) = log_2(x + 3) / log_2 4 = (1/2) log_2(x + 3)</span>.
        "밑의 변환: <span class=\"chem\">log_4(x + 3) = log_2(x + 3) / log_2 4 = (1/2) log_2(x + 3)</span>.",
        // EN: Multiply by 2 and combine: <span class="chem">log_2(x^2(x + 3)) = 6</span>, so <span class="chem">x^3 + 3x^2 - 64 = 0</span>.
        "2를 곱하고 합치세요: <span class=\"chem\">log_2(x^2(x + 3)) = 6</span>, 따라서 <span class=\"chem\">x^3 + 3x^2 - 64 = 0</span>이에요.",
        // EN: Solve the cubic with your GDC and check which roots satisfy <span class="chem">x &gt; 0</span>.
        "GDC로 삼차방정식을 풀고 어떤 근이 <span class=\"chem\">x &gt; 0</span>을 만족하는지 확인하세요.",
      ],
      // EN: <p><strong>Decode:</strong> make the bases match with change of base, combine the logs, then solve the resulting cubic numerically.</p><div class="worked__math">log<sub>4</sub>(<i>x</i> + 3) = <span class="frac"><span>log<sub>2</sub>(<i>x</i> + 3)</span><span>2</span></span> <b>[M1]</b> ⇒ 2 log<sub>2</sub> <i>x</i> + log<sub>2</sub>(<i>x</i> + 3) = 6 <b>[A1]</b></div><div class="worked__math">log<sub>2</sub>(<i>x</i><sup>2</sup>(<i>x</i> + 3)) = 6 ⇒ <i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup> = 64 <b>[M1 A1]</b></div><div class="worked__math">GDC: the cubic <i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup> − 64 = 0 has one real root, <i>x</i> = 3.21023…, and it satisfies <i>x</i> &gt; 0. <b>[R1]</b></div><div class="worked__math"><b><i>x</i> = 3.21</b> <b>[A1]</b></div>
      solution: "<p><strong>해석:</strong> 밑의 변환으로 밑을 맞추고 로그를 합친 다음, 나온 삼차방정식을 수치적으로 풀어요.</p><div class=\"worked__math\">log<sub>4</sub>(<i>x</i> + 3) = <span class=\"frac\"><span>log<sub>2</sub>(<i>x</i> + 3)</span><span>2</span></span>   <b>[M1]</b>  ⇒  2 log<sub>2</sub> <i>x</i> + log<sub>2</sub>(<i>x</i> + 3) = 6   <b>[A1]</b></div><div class=\"worked__math\">log<sub>2</sub>(<i>x</i><sup>2</sup>(<i>x</i> + 3)) = 6  ⇒  <i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup> = 64   <b>[M1 A1]</b></div><div class=\"worked__math\">GDC: 삼차방정식 <i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup> − 64 = 0의 실근은 <i>x</i> = 3.21023… 하나뿐이고, <i>x</i> &gt; 0을 만족해요.   <b>[R1]</b></div><div class=\"worked__math\"><b><i>x</i> = 3.21</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q036 · numeric · challenge · SL · SL 1.7 · 5 marks
    "t1-2-q036": {
      // EN: <p>Find the value of <span class="chem">x</span> for which <span class="chem">log_3 x = log_5(x + 10)</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">log_3 x = log_5(x + 10)</span>을 만족하는 <span class=\"chem\">x</span>의 값을 구하시오 (Find). 답은 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: Decode: two different bases, and the arguments differ too, so no log law collapses this to a simple equation. Rewrite both sides in a base your GDC knows, then solve numerically.
        "해석: 밑이 서로 다르고 진수도 달라서 어떤 로그의 성질로도 간단한 방정식으로 만들 수 없어요. 양변을 GDC가 다룰 수 있는 밑으로 고쳐 쓴 다음 수치적으로 푸세요.",
        // EN: Change of base: <span class="chem">ln x / ln 3 = ln(x + 10) / ln 5</span>.
        "밑의 변환: <span class=\"chem\">ln x / ln 3 = ln(x + 10) / ln 5</span>.",
        // EN: Graph <span class="chem">y = ln x / ln 3</span> and <span class="chem">y = ln(x + 10) / ln 5</span> for <span class="chem">x &gt; 0</span> and find the intersection.
        "<span class=\"chem\">x &gt; 0</span>에서 <span class=\"chem\">y = ln x / ln 3</span>와 <span class=\"chem\">y = ln(x + 10) / ln 5</span>의 그래프를 그리고 교점을 구하세요.",
      ],
      // EN: <p><strong>Decode:</strong> change both logarithms to base e, then use the GDC to solve the equation graphically.</p><div class="worked__math"><span class="frac"><span>ln <i>x</i></span><span>ln 3</span></span> = <span class="frac"><span>ln(<i>x</i> + 10)</span><span>ln 5</span></span> <b>[M1 A1]</b></div><div class="worked__math">Graph both sides (or the difference) for <i>x</i> &gt; 0 and find the intersection. <b>[M1]</b></div><div class="worked__math">The curves meet once, at <i>x</i> = 6.88490…, which lies in the domain <i>x</i> &gt; 0. <b>[R1]</b></div><div class="worked__math"><b><i>x</i> = 6.88</b> <b>[A1]</b></div>
      solution: "<p><strong>해석:</strong> 두 로그를 모두 밑이 e인 로그로 바꾼 다음, GDC를 사용해 그래프로 방정식을 풀어요.</p><div class=\"worked__math\"><span class=\"frac\"><span>ln <i>x</i></span><span>ln 3</span></span> = <span class=\"frac\"><span>ln(<i>x</i> + 10)</span><span>ln 5</span></span>   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>x</i> &gt; 0에서 양변(또는 그 차)의 그래프를 그리고 교점을 구해요.   <b>[M1]</b></div><div class=\"worked__math\">두 곡선은 <i>x</i> = 6.88490…에서 한 번 만나고, 이 값은 정의역 <i>x</i> &gt; 0에 속해요.   <b>[R1]</b></div><div class=\"worked__math\"><b><i>x</i> = 6.88</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q037 · numeric · challenge · SL · SL 1.5 · 4 marks
    "t1-2-q037": {
      // EN: <p>When the number <span class="chem">7^{100}</span> is written out in full in base 10, how many digits does it have?</p>
      stem: "<p>수 <span class=\"chem\">7^{100}</span>을 10진법으로 모두 풀어 쓰면 몇 자리 수인가?</p>",
      hints: [
        // EN: Decode: the number of digits tells you which powers of 10 the number lies between. A whole number with <span class="chem">k</span> digits satisfies <span class="chem">10^{k-1} &lt;= N &lt; 10^k</span>, so this is a base-10 logarithm question.
        "해석: 자릿수를 알면 그 수가 10의 어떤 거듭제곱 사이에 있는지 알 수 있어요. <span class=\"chem\">k</span>자리 정수는 <span class=\"chem\">10^{k-1} &lt;= N &lt; 10^k</span>을 만족하므로, 이것은 밑이 10인 로그 문제예요.",
        // EN: Find <span class="chem">log(7^{100}) = 100 log 7</span> on your GDC.
        "GDC로 <span class=\"chem\">log(7^{100}) = 100 log 7</span>를 구하세요.",
        // EN: If <span class="chem">log N = 84.5…</span>, then <span class="chem">10^{84} &lt;= N &lt; 10^{85}</span>. How many digits is that?
        "<span class=\"chem\">log N = 84.5…</span>이면 <span class=\"chem\">10^{84} &lt;= N &lt; 10^{85}</span>이에요. 그러면 몇 자리일까요?",
      ],
      // EN: <p><strong>Decode:</strong> counting digits means locating the number between consecutive powers of 10, which is what log base 10 measures.</p><div class="worked__math">A whole number <i>N</i> with <i>k</i> digits satisfies 10<sup><i>k</i>−1</sup> ≤ <i>N</i> &lt; 10<sup><i>k</i></sup>. <b>[M1]</b></div><div class="worked__math">log(7<sup>100</sup>) = 100 log 7 = 84.5098… <b>[A1]</b></div><div class="worked__math">So 10<sup>84</sup> ≤ 7<sup>100</sup> &lt; 10<sup>85</sup> (indeed 7<sup>100</sup> ≈ 3.23 × 10<sup>84</sup>). <b>[R1]</b></div><div class="worked__math"><b>85 digits</b> <b>[A1]</b></div>
      solution: "<p><strong>해석:</strong> 자릿수를 센다는 것은 그 수가 이웃한 10의 거듭제곱 사이 어디에 있는지 찾는 것이고, 이것이 바로 밑이 10인 로그가 재는 것이에요.</p><div class=\"worked__math\"><i>k</i>자리 정수 <i>N</i>은 10<sup><i>k</i>−1</sup> ≤ <i>N</i> &lt; 10<sup><i>k</i></sup>을 만족해요.   <b>[M1]</b></div><div class=\"worked__math\">log(7<sup>100</sup>) = 100 log 7 = 84.5098…   <b>[A1]</b></div><div class=\"worked__math\">따라서 10<sup>84</sup> ≤ 7<sup>100</sup> &lt; 10<sup>85</sup> (실제로 7<sup>100</sup> ≈ 3.23 × 10<sup>84</sup>).   <b>[R1]</b></div><div class=\"worked__math\"><b>85자리</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q038 · numeric · challenge · SL · SL 1.5, 1.7 · 5 marks
    "t1-2-q038": {
      // EN: <p>A sheet of paper is 0.08 mm thick. Each time it is folded in half, the thickness of the folded stack doubles. Assume, unrealistically, that the paper can be folded as many times as needed. The mean distance from the Earth to the Moon is 384 400 km. Find the minimum number of folds needed for the thickness of the stack to be greater than this distance.</p>
      stem: "<p>종이 한 장의 두께는 0.08 mm이다. 반으로 접을 때마다 접힌 종이 더미의 두께는 두 배가 된다. 비현실적이지만 종이를 필요한 만큼 몇 번이든 접을 수 있다고 가정한다. 지구에서 달까지의 평균 거리는 384 400 km이다. 종이 더미의 두께가 이 거리보다 커지는 데 필요한 최소 접기 횟수를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: after <span class="chem">n</span> folds the thickness is <span class="chem">0.08 × 2^n</span> mm. You need the smallest whole number <span class="chem">n</span> that beats the distance, and the two lengths are in different units.
        "해석: <span class=\"chem\">n</span>번 접은 후의 두께는 <span class=\"chem\">0.08 × 2^n</span> mm예요. 거리를 넘어서는 가장 작은 자연수 <span class=\"chem\">n</span>이 필요하고, 두 길이의 단위가 서로 달라요.",
        // EN: Convert: <span class="chem">384400</span> km <span class="chem">= 384400 × 10^6</span> mm <span class="chem">= 3.844 × 10^{11}</span> mm.
        "단위를 바꾸세요: <span class=\"chem\">384400</span> km <span class=\"chem\">= 384400 × 10^6</span> mm <span class=\"chem\">= 3.844 × 10^{11}</span> mm.",
        // EN: Solve <span class="chem">0.08 × 2^n &gt; 3.844 × 10^{11}</span> with logarithms, then round <strong>up</strong> to the next integer.
        "로그를 이용해 <span class=\"chem\">0.08 × 2^n &gt; 3.844 × 10^{11}</span>을 푼 다음, 다음 정수로 <strong>올림</strong>하세요.",
      ],
      // EN: <p><strong>Decode:</strong> a doubling model with an inequality, a unit conversion and a “whole number of folds” condition.</p><div class="worked__math">384 400 km = 3.844 × 10<sup>11</sup> mm <b>[A1]</b></div><div class="worked__math">0.08 × 2<sup><i>n</i></sup> &gt; 3.844 × 10<sup>11</sup> ⇒ 2<sup><i>n</i></sup> &gt; 4.805 × 10<sup>12</sup> <b>[M1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln(4.805 × 10<sup>12</sup>)</span><span>ln 2</span></span> <b>[M1]</b> = 42.13… <b>[A1]</b></div><div class="worked__math"><i>n</i> must be a whole number, so <b>43 folds</b>. <b>[A1]</b></div>
      solution: "<p><strong>해석:</strong> 부등식이 있는 배가 모델에 단위 변환과 \"접는 횟수는 자연수\"라는 조건이 더해진 문제예요.</p><div class=\"worked__math\">384 400 km = 3.844 × 10<sup>11</sup> mm   <b>[A1]</b></div><div class=\"worked__math\">0.08 × 2<sup><i>n</i></sup> &gt; 3.844 × 10<sup>11</sup>  ⇒  2<sup><i>n</i></sup> &gt; 4.805 × 10<sup>12</sup>   <b>[M1]</b></div><div class=\"worked__math\"><i>n</i> &gt; <span class=\"frac\"><span>ln(4.805 × 10<sup>12</sup>)</span><span>ln 2</span></span>   <b>[M1]</b>   = 42.13…   <b>[A1]</b></div><div class=\"worked__math\"><i>n</i>은 자연수여야 하므로 <b>43번</b>.   <b>[A1]</b></div>",
    },

    // ── t1-2-q039 · numeric · challenge · SL · SL 1.9 · 5 marks
    "t1-2-q039": {
      // EN: <p>The expansion of <span class="chem">(3 + 2x)^{12}</span> is written in ascending powers of <span class="chem">x</span>. Find the exact value of the greatest coefficient in this expansion.</p>
      stem: "<p><span class=\"chem\">(3 + 2x)^{12}</span>의 전개식을 <span class=\"chem\">x</span>의 오름차순으로 쓴다. 이 전개식에서 가장 큰 계수의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: “the greatest coefficient” is not the first or the last one. Each power <span class="chem">x^r</span> has its own coefficient, and you must compare all thirteen of them.
        "해석: \"가장 큰 계수\"는 첫째나 마지막 계수가 아니에요. 각 거듭제곱 <span class=\"chem\">x^r</span>마다 계수가 있으므로 열세 개를 모두 비교해야 해요.",
        // EN: The coefficient of <span class="chem">x^r</span> is <span class="chem">c_r = ^{12}C_r × 3^{12-r} × 2^r</span>.
        "<span class=\"chem\">x^r</span>의 계수는 <span class=\"chem\">c_r = ^{12}C_r × 3^{12-r} × 2^r</span>이에요.",
        // EN: Enter <span class="chem">c_r</span> as a function of <span class="chem">r</span> in the GDC table for <span class="chem">r = 0, 1, …, 12</span> and read off the largest value. Check its neighbours.
        "GDC 표에 <span class=\"chem\">c_r</span>를 <span class=\"chem\">r</span>에 대한 함수로 입력하고 <span class=\"chem\">r = 0, 1, …, 12</span>에서 가장 큰 값을 읽으세요. 그 이웃한 값도 확인하세요.",
      ],
      // EN: <p><strong>Decode:</strong> list the coefficient of every power of <i>x</i> and find the largest; a GDC table does the comparison.</p><div class="worked__math">Coefficient of <i>x</i><sup><i>r</i></sup>: <i>c</i><sub><i>r</i></sub> = <sup>12</sup>C<sub><i>r</i></sub> × 3<sup>12−<i>r</i></sup> × 2<sup><i>r</i></sup> <b>[M1 A1]</b></div><div class="worked__math">GDC table for <i>r</i> = 0, …, 12 <b>[M1]</b>: <i>c</i><sub>4</sub> = 51 963 120, <i>c</i><sub>5</sub> = 55 427 328, <i>c</i><sub>6</sub> = 43 110 144, so the maximum is at <i>r</i> = 5 <b>[A1]</b></div><div class="worked__math">Greatest coefficient = <b>55 427 328</b> (the coefficient of <i>x</i><sup>5</sup>) <b>[A1]</b></div>
      solution: "<p><strong>해석:</strong> <i>x</i>의 모든 거듭제곱의 계수를 나열하고 가장 큰 것을 찾아요. 비교는 GDC 표로 할 수 있어요.</p><div class=\"worked__math\"><i>x</i><sup><i>r</i></sup>의 계수: <i>c</i><sub><i>r</i></sub> = <sup>12</sup>C<sub><i>r</i></sub> × 3<sup>12−<i>r</i></sup> × 2<sup><i>r</i></sup>   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>r</i> = 0, …, 12에 대한 GDC 표   <b>[M1]</b>: <i>c</i><sub>4</sub> = 51 963 120, <i>c</i><sub>5</sub> = 55 427 328, <i>c</i><sub>6</sub> = 43 110 144이므로 최댓값은 <i>r</i> = 5일 때   <b>[A1]</b></div><div class=\"worked__math\">가장 큰 계수 = <b>55 427 328</b> (<i>x</i><sup>5</sup>의 계수)   <b>[A1]</b></div>",
    },

    // ── t1-2-q040 · short · challenge · SL · SL 1.5, 1.7 · 8 marks
    "t1-2-q040": {
      // EN: <p>Astronomers measure the brightness of a star by its apparent magnitude <span class="chem">m</span>. For two stars with magnitudes <span class="chem">m_1</span> and <span class="chem">m_2</span>, and light fluxes <span class="chem">F_1</span> and <span class="chem">F_2</span> reaching the Earth, <span class="chem">m_1 - m_2 = -2.5 log(F_1/F_2)</span>, where log is to base 10. Brighter stars have smaller magnitudes.<br>(a) Star P has magnitude 2.4 and star Q has magnitude 5.9. Find <span class="chem">F_P / F_Q</span>. <strong>[3]</strong><br>(b) The faintest stars visible to the naked eye have magnitude 6.5. A small telescope can show stars that are 600 times fainter than this. Find the magnitude of the faintest stars visible through this telescope. <strong>[2]</strong><br>(c) Two stars, each of magnitude 4.0, are so close together that they appear as a single point of light. The flux from this point is the sum of the two fluxes. Find the magnitude of the point. <strong>[3]</strong></p>
      stem: "<p>천문학자들은 별의 밝기를 겉보기 등급 <span class=\"chem\">m</span>으로 나타낸다. 등급이 <span class=\"chem\">m_1</span>과 <span class=\"chem\">m_2</span>이고 지구에 도달하는 빛의 양(광속)이 <span class=\"chem\">F_1</span>과 <span class=\"chem\">F_2</span>인 두 별에 대하여 <span class=\"chem\">m_1 - m_2 = -2.5 log(F_1/F_2)</span>이며, 여기서 log의 밑은 10이다. 더 밝은 별일수록 등급이 작다.<br>(a) 별 P의 등급은 2.4이고 별 Q의 등급은 5.9이다. <span class=\"chem\">F_P / F_Q</span>를 구하시오 (Find). <strong>[3]</strong><br>(b) 맨눈으로 볼 수 있는 가장 어두운 별의 등급은 6.5이다. 어떤 소형 망원경으로는 이보다 600배 어두운 별까지 볼 수 있다. 이 망원경으로 볼 수 있는 가장 어두운 별의 등급을 구하시오 (Find). <strong>[2]</strong><br>(c) 등급이 각각 4.0인 두 별이 매우 가까이 있어서 하나의 광점으로 보인다. 이 광점의 광속은 두 광속의 합이다. 이 광점의 등급을 구하시오 (Find). <strong>[3]</strong></p>",
      hints: [
        // EN: Decode: this is a logarithmic scale. Differences of magnitudes correspond to ratios of fluxes, and “times fainter” and “sum of fluxes” must be turned into a flux ratio before you use the formula.
        "해석: 이것은 로그 눈금이에요. 등급의 차는 광속의 비에 대응하므로, 공식을 쓰기 전에 \"몇 배 어두운가\"와 \"광속의 합\"을 광속의 비로 바꿔야 해요.",
        // EN: For (a), substitute <span class="chem">m_1 = 2.4</span> and <span class="chem">m_2 = 5.9</span>, then divide by −2.5 and undo the log.
        "(a)에서는 <span class=\"chem\">m_1 = 2.4</span>와 <span class=\"chem\">m_2 = 5.9</span>를 대입한 다음 −2.5로 나누고 로그를 풀어요.",
        // EN: For (b), let star 1 be the faintest telescope star and star 2 the faintest naked-eye star. Then <span class="chem">F_1 / F_2 = 1/600</span>.
        "(b)에서는 별 1을 망원경으로 보이는 가장 어두운 별, 별 2를 맨눈으로 보이는 가장 어두운 별로 놓으세요. 그러면 <span class=\"chem\">F_1 / F_2 = 1/600</span>이에요.",
        // EN: For (c), compare the point (flux <span class="chem">2F</span>) with one star (flux <span class="chem">F</span>, magnitude 4.0).
        "(c)에서는 광점(광속 <span class=\"chem\">2F</span>)과 별 하나(광속 <span class=\"chem\">F</span>, 등급 4.0)를 비교하세요.",
      ],
      // EN: <p><strong>Decode:</strong> on a log scale, multiplying a flux by a factor adds a fixed amount to the magnitude. Every part becomes “find a flux ratio, then substitute”. In (c), doubling the flux lowers the magnitude by <span class="chem">2.5 log 2 ≈ 0.753</span>.</p>
      solution: "<p><strong>해석:</strong> 로그 눈금에서는 광속에 어떤 배수를 곱하면 등급에 일정한 양이 더해져요. 모든 소문항이 \"광속의 비를 구한 다음 대입하기\"가 돼요. (c)에서는 광속이 두 배가 되면 등급이 <span class=\"chem\">2.5 log 2 ≈ 0.753</span>만큼 작아져요.</p>",
      // EN: <div class="worked__math">(a) 2.4 − 5.9 = −2.5 log(<i>F</i><sub>P</sub>/<i>F</i><sub>Q</sub>) ⇒ log(<i>F</i><sub>P</sub>/<i>F</i><sub>Q</sub>) = 1.4 ⇒ <i>F</i><sub>P</sub>/<i>F</i><sub>Q</sub> = 10<sup>1.4</sup> = <b>25.1</b>.</div><div class="worked__math">(b) “600 times fainter” means <i>F</i><sub>T</sub>/<i>F</i><sub>6.5</sub> = 1/600, so <i>m</i> − 6.5 = −2.5 log(1/600) = 2.5 log 600 ⇒ <i>m</i> = <b>13.4</b> (13.445…).</div><div class="worked__math">(c) Fluxes add, so <i>F</i><sub>point</sub> = 2<i>F</i>, where <i>F</i> is the flux of one star. <i>m</i> − 4.0 = −2.5 log 2 ⇒ <i>m</i> = <b>3.25</b> (3.2474…). The magnitudes do not add: the pair is brighter, so its magnitude is smaller than 4.0.</div>
      answer: "<div class=\"worked__math\">(a) 2.4 − 5.9 = −2.5 log(<i>F</i><sub>P</sub>/<i>F</i><sub>Q</sub>)  ⇒  log(<i>F</i><sub>P</sub>/<i>F</i><sub>Q</sub>) = 1.4  ⇒  <i>F</i><sub>P</sub>/<i>F</i><sub>Q</sub> = 10<sup>1.4</sup> = <b>25.1</b>.</div><div class=\"worked__math\">(b) \"600배 어둡다\"는 것은 <i>F</i><sub>T</sub>/<i>F</i><sub>6.5</sub> = 1/600이라는 뜻이므로 <i>m</i> − 6.5 = −2.5 log(1/600) = 2.5 log 600  ⇒  <i>m</i> = <b>13.4</b> (13.445…).</div><div class=\"worked__math\">(c) 광속은 더해지므로 <i>F</i><sub>point</sub> = 2<i>F</i>이고, 여기서 <i>F</i>는 별 하나의 광속이에요. <i>m</i> − 4.0 = −2.5 log 2  ⇒  <i>m</i> = <b>3.25</b> (3.2474…). 등급은 더해지지 않아요: 두 별을 합치면 더 밝으므로 등급은 4.0보다 작아요.</div>",
      markscheme: [
        // EN: M1: (a) Substitutes: 2.4 − 5.9 = −2.5 log(F_P/F_Q).
        "M1: (a) 대입함: 2.4 − 5.9 = −2.5 log(F_P/F_Q).",
        // EN: A1: log(F_P/F_Q) = 1.4.
        "A1: log(F_P/F_Q) = 1.4.",
        // EN: A1: F_P/F_Q = 10^1.4 = 25.1.
        "A1: F_P/F_Q = 10^1.4 = 25.1.",
        // EN: M1: (b) Uses a flux ratio of 1/600 (or 600 the other way round) with the formula: m − 6.5 = −2.5 log(1/600).
        "M1: (b) 광속의 비 1/600 (또는 반대로 600)을 공식에 사용함: m − 6.5 = −2.5 log(1/600).",
        // EN: A1: m = 13.4 (13.445…).
        "A1: m = 13.4 (13.445…).",
        // EN: R1: (c) Recognises that the fluxes add (F_point = 2F) and the magnitudes do not (the answer is not 8.0 or 4.0).
        "R1: (c) 광속은 더해지고(F_point = 2F) 등급은 더해지지 않음(답은 8.0이나 4.0이 아님)을 파악함.",
        // EN: M1: m − 4.0 = −2.5 log(2F/F) = −2.5 log 2.
        "M1: m − 4.0 = −2.5 log(2F/F) = −2.5 log 2.",
        // EN: A1: m = 3.25 (3.2474…).
        "A1: m = 3.25 (3.2474…).",
      ],
    },

    // ── t1-2-q041 · short · challenge · SL · SL 1.9, 4.8 · 7 marks
    "t1-2-q041": {
      // EN: <p>A factory finds that 6% of the microchips it makes are faulty. Chips are packed in boxes of 15. A quality engineer explains that when <span class="chem">(0.94 + 0.06)^{15}</span> is expanded with the binomial theorem, the term <span class="chem">^{15}C_r (0.94)^{15-r} (0.06)^r</span> gives the probability that a box contains exactly <span class="chem">r</span> faulty chips.<br>(a) Write down the value of the sum of all the terms of the expansion, and explain why this value makes sense. <strong>[2]</strong><br>(b) Find the probability that a box contains exactly 2 faulty chips. <strong>[2]</strong><br>(c) A box is rejected if it contains more than 2 faulty chips. Find the probability that a box is rejected. <strong>[3]</strong></p>
      stem: "<p>어떤 공장에서 만드는 마이크로칩의 6%는 불량품이다. 칩은 15개씩 상자에 포장된다. 품질 담당 엔지니어는 <span class=\"chem\">(0.94 + 0.06)^{15}</span>을 이항정리로 전개하면 항 <span class=\"chem\">^{15}C_r (0.94)^{15-r} (0.06)^r</span>이 한 상자에 불량 칩이 정확히 <span class=\"chem\">r</span>개 들어 있을 확률을 나타낸다고 설명한다.<br>(a) 전개식의 모든 항의 합의 값을 쓰고 (Write down), 그 값이 타당한 이유를 설명하시오 (Explain). <strong>[2]</strong><br>(b) 한 상자에 불량 칩이 정확히 2개 들어 있을 확률을 구하시오 (Find). <strong>[2]</strong><br>(c) 불량 칩이 2개보다 많이 들어 있는 상자는 불합격 처리된다. 한 상자가 불합격 처리될 확률을 구하시오 (Find). <strong>[3]</strong></p>",
      hints: [
        // EN: Decode: this is the binomial theorem in disguise. Each term of the expansion is the probability of a different number of faulty chips, so “more than 2” means adding many terms, or using the total from (a).
        "해석: 이것은 모습을 바꾼 이항정리예요. 전개식의 각 항은 서로 다른 불량 칩 개수의 확률이므로, \"2개보다 많다\"는 많은 항을 더하거나 (a)의 합계를 이용한다는 뜻이에요.",
        // EN: For (a), simplify the bracket before you raise it to the power 15.
        "(a)에서는 15제곱하기 전에 괄호 안을 먼저 간단히 하세요.",
        // EN: For (b), substitute <span class="chem">r = 2</span>; your GDC gives <span class="chem">^{15}C_2</span>.
        "(b)에서는 <span class=\"chem\">r = 2</span>를 대입하세요. <span class=\"chem\">^{15}C_2</span>는 GDC로 구할 수 있어요.",
        // EN: For (c), it is quicker to subtract the terms for <span class="chem">r = 0, 1, 2</span> from the total than to add thirteen terms.
        "(c)에서는 열세 개의 항을 더하는 것보다 합계에서 <span class=\"chem\">r = 0, 1, 2</span>인 항들을 빼는 것이 더 빨라요.",
      ],
      // EN: <p><strong>Decode:</strong> the expansion of <span class="chem">(q + p)^n</span> with <span class="chem">p + q = 1</span> lists the probabilities of 0, 1, 2, … faulty chips. Its total is 1, so “more than 2” is 1 minus the first three terms. (This is the binomial distribution of SL 4.8, here built from the binomial theorem.)</p>
      solution: "<p><strong>해석:</strong> <span class=\"chem\">p + q = 1</span>일 때 <span class=\"chem\">(q + p)^n</span>의 전개식은 불량 칩이 0, 1, 2, …개일 확률을 나열해요. 그 합계는 1이므로 \"2개보다 많다\"는 1에서 처음 세 항을 뺀 것이에요. (이것은 SL 4.8의 이항분포를 이항정리로부터 만든 것이에요.)</p>",
      // EN: <div class="worked__math">(a) (0.94 + 0.06)<sup>15</sup> = 1<sup>15</sup> = <b>1</b>. The terms cover every possible number of faulty chips (0 to 15), and the probabilities of all the possible outcomes add up to 1.</div><div class="worked__math">(b) <sup>15</sup>C<sub>2</sub> (0.94)<sup>13</sup>(0.06)<sup>2</sup> = 105 × 0.94<sup>13</sup> × 0.0036 = <b>0.169</b> (0.169104…).</div><div class="worked__math">(c) “More than 2” is everything except <i>r</i> = 0, 1, 2. Sum of the terms for <i>r</i> = 0, 1, 2 = 0.395292… + 0.378471… + 0.169104… = 0.942867…, so P(rejected) = 1 − 0.942867… = <b>0.0571</b>.</div>
      answer: "<div class=\"worked__math\">(a) (0.94 + 0.06)<sup>15</sup> = 1<sup>15</sup> = <b>1</b>. 각 항은 가능한 모든 불량 칩 개수(0부터 15까지)를 다루고, 가능한 모든 결과의 확률의 합은 1이에요.</div><div class=\"worked__math\">(b) <sup>15</sup>C<sub>2</sub> (0.94)<sup>13</sup>(0.06)<sup>2</sup> = 105 × 0.94<sup>13</sup> × 0.0036 = <b>0.169</b> (0.169104…).</div><div class=\"worked__math\">(c) \"2개보다 많다\"는 <i>r</i> = 0, 1, 2를 제외한 모든 경우예요. <i>r</i> = 0, 1, 2인 항의 합 = 0.395292… + 0.378471… + 0.169104… = 0.942867…이므로 P(rejected) = 1 − 0.942867… = <b>0.0571</b>.</div>",
      markscheme: [
        // EN: A1: (a) The sum is (0.94 + 0.06)^15 = 1.
        "A1: (a) 합은 (0.94 + 0.06)^15 = 1.",
        // EN: R1: The terms give the probabilities of all possible outcomes (r = 0 to 15), which must add up to 1.
        "R1: 각 항은 가능한 모든 결과(r = 0부터 15까지)의 확률이므로 그 합은 1이어야 함.",
        // EN: M1: (b) Uses ¹⁵C₂ (0.94)^13 (0.06)^2.
        "M1: (b) ¹⁵C₂ (0.94)^13 (0.06)^2을 사용함.",
        // EN: A1: 0.169 (0.169104…).
        "A1: 0.169 (0.169104…).",
        // EN: R1: (c) Interprets “more than 2” as 1 − (sum of the terms for r = 0, 1 and 2), or as the sum of the terms for r = 3 to 15.
        "R1: (c) \"2개보다 많다\"를 1 − (r = 0, 1, 2인 항의 합), 또는 r = 3부터 15까지인 항의 합으로 해석함.",
        // EN: M1: Evaluates the terms for r = 0, 1, 2 (sum 0.942867…).
        "M1: r = 0, 1, 2인 항을 계산함 (합 0.942867…).",
        // EN: A1: P(rejected) = 0.0571 (0.057133…).
        "A1: P(rejected) = 0.0571 (0.057133…).",
      ],
    },

    // ── t1-2-q042 · short · challenge · SL · SL 1.7 · 8 marks
    "t1-2-q042": {
      // EN: <p>The mass of carbon-14 in a dead piece of wood decreases according to <span class="chem">N = N_0 e^{-lambda t}</span>, where <span class="chem">N_0</span> is the mass at the time the tree died and <span class="chem">t</span> is measured in years. The half-life of carbon-14 is 5730 years.<br>(a) Show that <span class="chem">lambda = ln 2 / 5730</span>, and find <span class="chem">lambda</span> correct to 3 significant figures. <strong>[2]</strong><br>(b) A wooden tool contains 37% of the carbon-14 that it contained when the tree died. Estimate the age of the tool, correct to 3 significant figures. <strong>[3]</strong><br>(c) The laboratory says that the 37% figure could be wrong by up to 2 percentage points in either direction. Find the range of possible ages of the tool, and the width of this range to the nearest 10 years. <strong>[3]</strong></p>
      stem: "<p>죽은 나무 조각 속 탄소-14의 질량은 <span class=\"chem\">N = N_0 e^{-lambda t}</span>에 따라 감소하며, 여기서 <span class=\"chem\">N_0</span>은 나무가 죽었을 때의 질량이고 <span class=\"chem\">t</span>는 년 단위로 잰다. 탄소-14의 반감기는 5730년이다.<br>(a) <span class=\"chem\">lambda = ln 2 / 5730</span>임을 보이고 (Show that), <span class=\"chem\">lambda</span>를 유효숫자 3자리로 구하시오 (Find). <strong>[2]</strong><br>(b) 어떤 나무 도구에는 나무가 죽었을 때의 37%에 해당하는 탄소-14가 들어 있다. 이 도구의 연대를 유효숫자 3자리로 추정하시오 (Estimate). <strong>[3]</strong><br>(c) 연구소에 따르면 37%라는 수치는 위아래로 최대 2퍼센트포인트까지 틀릴 수 있다. 이 도구의 가능한 연대의 범위와, 이 범위의 폭을 10년 단위로 구하시오 (Find). <strong>[3]</strong></p>",
      hints: [
        // EN: Decode: “half-life” is a condition that fixes <span class="chem">lambda</span>; “37% of the carbon-14” means <span class="chem">N = 0.37N_0</span>; “±2 percentage points” means 35% and 39%, and you must work out which of these gives the older age.
        "해석: \"반감기\"는 <span class=\"chem\">lambda</span>를 정하는 조건이고, \"탄소-14의 37%\"는 <span class=\"chem\">N = 0.37N_0</span>을 뜻하며, \"±2퍼센트포인트\"는 35%와 39%를 뜻해요. 이 중 어느 쪽이 더 오래된 연대를 주는지 판단해야 해요.",
        // EN: For (a), put <span class="chem">N = N_0 / 2</span> when <span class="chem">t = 5730</span>.
        "(a)에서는 <span class=\"chem\">t = 5730</span>일 때 <span class=\"chem\">N = N_0 / 2</span>로 놓으세요.",
        // EN: For (b), <span class="chem">N_0</span> cancels: solve <span class="chem">0.37 = e^{-lambda t}</span>.
        "(b)에서는 <span class=\"chem\">N_0</span>이 소거돼요: <span class=\"chem\">0.37 = e^{-lambda t}</span>를 푸세요.",
        // EN: For (c), repeat (b) with 0.35 and 0.39. Less carbon-14 remaining means more time has passed.
        "(c)에서는 0.35와 0.39로 (b)를 반복하세요. 남은 탄소-14가 적을수록 더 많은 시간이 지난 거예요.",
      ],
      // EN: <p><strong>Decode:</strong> the half-life gives the decay constant, each percentage gives an equation <span class="chem">p = e^{-lambda t}</span>, and the measurement error becomes a pair of ages. A ±2-point error in the percentage gives an age uncertainty of nearly 900 years.</p>
      solution: "<p><strong>해석:</strong> 반감기에서 붕괴 상수가 나오고, 각 백분율에서 방정식 <span class=\"chem\">p = e^{-lambda t}</span>가 나오며, 측정 오차는 두 연대의 쌍이 돼요. 백분율의 ±2포인트 오차는 900년에 가까운 연대 불확실성을 만들어요.</p>",
      // EN: <div class="worked__math">(a) <span class="frac"><span>1</span><span>2</span></span><i>N</i><sub>0</sub> = <i>N</i><sub>0</sub>e<sup>−5730λ</sup> ⇒ −5730λ = ln <span class="frac"><span>1</span><span>2</span></span> = −ln 2 ⇒ λ = <span class="frac"><span>ln 2</span><span>5730</span></span> = <b>1.21 × 10<sup>−4</sup></b>.</div><div class="worked__math">(b) 0.37 = e<sup>−λ<i>t</i></sup> ⇒ <i>t</i> = <span class="frac"><span>ln(1/0.37)</span><span>λ</span></span> = 8219.1… ≈ <b>8220 years</b>.</div><div class="worked__math">(c) More carbon-14 left means a younger tool. 39% gives <i>t</i> = 7783.9…, and 35% gives <i>t</i> = 8678.5…. So 7780 ≲ <i>t</i> ≲ 8680 years, a range of width about <b>890 years</b> (894.6…).</div>
      answer: "<div class=\"worked__math\">(a) <span class=\"frac\"><span>1</span><span>2</span></span><i>N</i><sub>0</sub> = <i>N</i><sub>0</sub>e<sup>−5730λ</sup>  ⇒  −5730λ = ln <span class=\"frac\"><span>1</span><span>2</span></span> = −ln 2  ⇒  λ = <span class=\"frac\"><span>ln 2</span><span>5730</span></span> = <b>1.21 × 10<sup>−4</sup></b>.</div><div class=\"worked__math\">(b) 0.37 = e<sup>−λ<i>t</i></sup>  ⇒  <i>t</i> = <span class=\"frac\"><span>ln(1/0.37)</span><span>λ</span></span> = 8219.1… ≈ <b>8220년</b>.</div><div class=\"worked__math\">(c) 탄소-14가 더 많이 남아 있을수록 도구는 더 젊어요. 39%이면 <i>t</i> = 7783.9…, 35%이면 <i>t</i> = 8678.5…. 따라서 7780 ≲ <i>t</i> ≲ 8680년이고, 범위의 폭은 약 <b>890년</b> (894.6…)이에요.</div>",
      markscheme: [
        // EN: M1: (a) Sets N_0/2 = N_0 e^(−5730λ) and takes ln: −5730λ = −ln 2. AG: λ = ln 2 / 5730; the given line itself earns no mark.
        "M1: (a) N_0/2 = N_0 e^(−5730λ)로 놓고 ln을 취함: −5730λ = −ln 2. AG: λ = ln 2 / 5730; 주어진 식만 쓰면 점수 없음.",
        // EN: A1: λ = 1.21 × 10^(−4) (0.000120968…).
        "A1: λ = 1.21 × 10^(−4) (0.000120968…).",
        // EN: M1: (b) Sets 0.37 = e^(−λt).
        "M1: (b) 0.37 = e^(−λt)로 놓음.",
        // EN: A1: t = ln(1/0.37)/λ (or −ln 0.37/λ).
        "A1: t = ln(1/0.37)/λ (또는 −ln 0.37/λ).",
        // EN: A1: t = 8220 years (8219.1…).
        "A1: t = 8220년 (8219.1…).",
        // EN: R1: (c) Pairs the larger percentage (39%) with the younger age and the smaller percentage (35%) with the older age.
        "R1: (c) 더 큰 백분율(39%)을 더 젊은 연대에, 더 작은 백분율(35%)을 더 오래된 연대에 짝지음.",
        // EN: A1: Range 7780 to 8680 years (7783.9… to 8678.5…).
        "A1: 범위 7780~8680년 (7783.9…~8678.5…).",
        // EN: A1: Width 890 years (894.6…; accept 895 or 900 from rounded ages).
        "A1: 폭 890년 (894.6…; 반올림한 연대에서 나온 895나 900도 인정).",
      ],
    },

    // ── t1-2-q043 · short · challenge · SL · SL 1.9 · 8 marks
    "t1-2-q043": {
      // EN: <p>A bank pays interest at a nominal annual rate of 100%, compounded <span class="chem">n</span> times per year, so that an investment of $1 is worth <span class="chem">(1 + 1/n)^n</span> dollars after one year.<br>(a) Use the binomial theorem to show that the first four terms of the expansion of <span class="chem">(1 + 1/n)^n</span> are <span class="chem">1 + 1 + (n - 1)/(2n) + ((n - 1)(n - 2))/(6n^2)</span>. <strong>[3]</strong><br>(b) For monthly compounding, <span class="chem">n = 12</span>. Calculate the sum of these four terms, and use your GDC to find the value of <span class="chem">(1 + 1/12)^{12}</span>. Give both answers correct to 4 significant figures. <strong>[3]</strong><br>(c) Explain why the four-term sum is less than <span class="chem">(1 + 1/n)^n</span> for every <span class="chem">n &gt;= 4</span>. <strong>[1]</strong><br>(d) Write down the limit of the four-term sum as <span class="chem">n</span> becomes very large. <strong>[1]</strong></p>
      stem: "<p>어떤 은행은 명목 연이율 100%로, 1년에 <span class=\"chem\">n</span>번 복리로 이자를 지급하므로 $1를 투자하면 1년 후 <span class=\"chem\">(1 + 1/n)^n</span>달러가 된다.<br>(a) 이항정리를 이용하여 <span class=\"chem\">(1 + 1/n)^n</span>의 전개식의 처음 네 항이 <span class=\"chem\">1 + 1 + (n - 1)/(2n) + ((n - 1)(n - 2))/(6n^2)</span>임을 보이시오 (Show that). <strong>[3]</strong><br>(b) 매월 복리이면 <span class=\"chem\">n = 12</span>이다. 이 네 항의 합을 계산하고 (Calculate), GDC를 사용하여 <span class=\"chem\">(1 + 1/12)^{12}</span>의 값을 구하시오. 두 답 모두 유효숫자 4자리로 나타내시오. <strong>[3]</strong><br>(c) 모든 <span class=\"chem\">n &gt;= 4</span>에 대하여 네 항의 합이 <span class=\"chem\">(1 + 1/n)^n</span>보다 작은 이유를 설명하시오 (Explain). <strong>[1]</strong><br>(d) <span class=\"chem\">n</span>이 매우 커질 때 네 항의 합의 극한을 쓰시오 (Write down). <strong>[1]</strong></p>",
      hints: [
        // EN: Decode: compound interest is the hook, but the question is a binomial expansion with <span class="chem">a = 1</span> and <span class="chem">b = 1/n</span>. You only need the terms for <span class="chem">r = 0, 1, 2, 3</span>.
        "해석: 복리는 도입부일 뿐이고, 문제는 <span class=\"chem\">a = 1</span>, <span class=\"chem\">b = 1/n</span>인 이항전개예요. <span class=\"chem\">r = 0, 1, 2, 3</span>인 항만 있으면 돼요.",
        // EN: For (a), write <span class="chem">^nC_2 = n(n - 1)/2</span> and <span class="chem">^nC_3 = n(n - 1)(n - 2)/6</span>, then cancel one factor of <span class="chem">n</span>.
        "(a)에서는 <span class=\"chem\">^nC_2 = n(n - 1)/2</span>과 <span class=\"chem\">^nC_3 = n(n - 1)(n - 2)/6</span>을 쓴 다음 <span class=\"chem\">n</span> 하나를 약분하세요.",
        // EN: For (c), what is the sign of each term you left out?
        "(c)에서는 생략한 각 항의 부호가 무엇인지 생각해 보세요.",
        // EN: For (d), divide the top and bottom of each fraction by the highest power of <span class="chem">n</span>.
        "(d)에서는 각 분수의 분자와 분모를 <span class=\"chem\">n</span>의 최고차 거듭제곱으로 나누세요.",
      ],
      // EN: <p><strong>Decode:</strong> recognise <span class="chem">(1 + 1/n)^n</span> as a binomial power. Its expansion begins <span class="chem">1 + 1 + 1/2 + 1/6 + …</span> for large <span class="chem">n</span>, which is how the number <span class="chem">e ≈ 2.718</span> arises from continuous compounding.</p>
      solution: "<p><strong>해석:</strong> <span class=\"chem\">(1 + 1/n)^n</span>을 이항식의 거듭제곱으로 보세요. <span class=\"chem\">n</span>이 클 때 그 전개식은 <span class=\"chem\">1 + 1 + 1/2 + 1/6 + …</span>로 시작하는데, 이것이 연속 복리에서 수 <span class=\"chem\">e ≈ 2.718</span>가 나오는 원리예요.</p>",
      // EN: <div class="worked__math">(a) (1 + 1/<i>n</i>)<sup><i>n</i></sup> = 1 + <sup><i>n</i></sup>C<sub>1</sub>(1/<i>n</i>) + <sup><i>n</i></sup>C<sub>2</sub>(1/<i>n</i>)<sup>2</sup> + <sup><i>n</i></sup>C<sub>3</sub>(1/<i>n</i>)<sup>3</sup> + …, with <i>n</i> × <span class="frac"><span>1</span><span><i>n</i></span></span> = 1, <span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2<i>n</i><sup>2</sup></span></span> = <span class="frac"><span><i>n</i> − 1</span><span>2<i>n</i></span></span> and <span class="frac"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6<i>n</i><sup>3</sup></span></span> = <span class="frac"><span>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6<i>n</i><sup>2</sup></span></span>.</div><div class="worked__math">(b) 1 + 1 + <span class="frac"><span>11</span><span>24</span></span> + <span class="frac"><span>110</span><span>864</span></span> = <b>2.586</b> (2.58564…); (1 + 1/12)<sup>12</sup> = <b>2.613</b> (2.61303…).</div><div class="worked__math">(c) Every term left out, <sup><i>n</i></sup>C<sub><i>r</i></sub>(1/<i>n</i>)<sup><i>r</i></sup> for <i>r</i> ≥ 4, is positive, so the four-term sum is smaller than the full expansion.</div><div class="worked__math">(d) (<i>n</i> − 1)/(2<i>n</i>) → 1/2 and (<i>n</i> − 1)(<i>n</i> − 2)/(6<i>n</i><sup>2</sup>) → 1/6, so the limit is 1 + 1 + 1/2 + 1/6 = <b>8/3</b>.</div>
      answer: "<div class=\"worked__math\">(a) (1 + 1/<i>n</i>)<sup><i>n</i></sup> = 1 + <sup><i>n</i></sup>C<sub>1</sub>(1/<i>n</i>) + <sup><i>n</i></sup>C<sub>2</sub>(1/<i>n</i>)<sup>2</sup> + <sup><i>n</i></sup>C<sub>3</sub>(1/<i>n</i>)<sup>3</sup> + …이고, <i>n</i> × <span class=\"frac\"><span>1</span><span><i>n</i></span></span> = 1, <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)</span><span>2<i>n</i><sup>2</sup></span></span> = <span class=\"frac\"><span><i>n</i> − 1</span><span>2<i>n</i></span></span>, <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6<i>n</i><sup>3</sup></span></span> = <span class=\"frac\"><span>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6<i>n</i><sup>2</sup></span></span>.</div><div class=\"worked__math\">(b) 1 + 1 + <span class=\"frac\"><span>11</span><span>24</span></span> + <span class=\"frac\"><span>110</span><span>864</span></span> = <b>2.586</b> (2.58564…);  (1 + 1/12)<sup>12</sup> = <b>2.613</b> (2.61303…).</div><div class=\"worked__math\">(c) 생략한 모든 항 <sup><i>n</i></sup>C<sub><i>r</i></sub>(1/<i>n</i>)<sup><i>r</i></sup> (<i>r</i> ≥ 4)은 양수이므로, 네 항의 합은 전체 전개식보다 작아요.</div><div class=\"worked__math\">(d) (<i>n</i> − 1)/(2<i>n</i>) → 1/2이고 (<i>n</i> − 1)(<i>n</i> − 2)/(6<i>n</i><sup>2</sup>) → 1/6이므로 극한은 1 + 1 + 1/2 + 1/6 = <b>8/3</b>.</div>",
      markscheme: [
        // EN: M1: (a) Uses the general term ⁿCᵣ (1/n)^r for r = 0, 1, 2, 3.
        "M1: (a) r = 0, 1, 2, 3에 대해 일반항 ⁿCᵣ (1/n)^r을 사용함.",
        // EN: A1: ⁿC₂ (1/n)^2 = n(n − 1)/(2n^2) = (n − 1)/(2n).
        "A1: ⁿC₂ (1/n)^2 = n(n − 1)/(2n^2) = (n − 1)/(2n).",
        // EN: A1: ⁿC₃ (1/n)^3 = n(n − 1)(n − 2)/(6n^3) = (n − 1)(n − 2)/(6n^2). AG: the four terms are as given; the given line itself earns no mark.
        "A1: ⁿC₃ (1/n)^3 = n(n − 1)(n − 2)/(6n^3) = (n − 1)(n − 2)/(6n^2). AG: 네 항은 주어진 것과 같음; 주어진 식만 쓰면 점수 없음.",
        // EN: M1: (b) Substitutes n = 12 into the four terms: 1 + 1 + 11/24 + 110/864.
        "M1: (b) 네 항에 n = 12를 대입함: 1 + 1 + 11/24 + 110/864.",
        // EN: A1: Four-term sum = 2.586.
        "A1: 네 항의 합 = 2.586.",
        // EN: A1: (1 + 1/12)^12 = 2.613.
        "A1: (1 + 1/12)^12 = 2.613.",
        // EN: R1: (c) All the omitted terms ⁿCᵣ (1/n)^r (r ≥ 4) are positive, so the full expansion is larger.
        "R1: (c) 생략한 모든 항 ⁿCᵣ (1/n)^r (r ≥ 4)은 양수이므로 전체 전개식이 더 큼.",
        // EN: A1: (d) 1 + 1 + 1/2 + 1/6 = 8/3.
        "A1: (d) 1 + 1 + 1/2 + 1/6 = 8/3.",
      ],
    },

    // ── t1-2-q045 · short · foundation · SL · SL 1.5 · 3 marks
    "t1-2-q045": {
      // EN: <p>Simplify <span class="chem">(2a^3 b^{-2})^3 / (4a^{-1} b)^2</span>, where <span class="chem">a, b != 0</span>, giving your answer in the form <span class="chem">k a^p b^q</span>.</p>
      stem: "<p><span class=\"chem\">a, b != 0</span>일 때 <span class=\"chem\">(2a^3 b^{-2})^3 / (4a^{-1} b)^2</span>을 간단히 하여 (Simplify) <span class=\"chem\">k a^p b^q</span> 꼴로 나타내시오.</p>",
      hints: [
        // EN: Use <span class="chem">(xy)^n = x^n y^n</span> and <span class="chem">(x^m)^n = x^{mn}</span> on each bracket.
        "각 괄호에 <span class=\"chem\">(xy)^n = x^n y^n</span>과 <span class=\"chem\">(x^m)^n = x^{mn}</span>를 사용하세요.",
        // EN: Then divide: <span class="chem">x^m / x^n = x^{m-n}</span>. Take care with the negative indices: <span class="chem">9 - (-2) = 11</span>.
        "그다음 나누세요: <span class=\"chem\">x^m / x^n = x^{m-n}</span>. 음의 지수에 주의하세요: <span class=\"chem\">9 - (-2) = 11</span>.",
      ],
      // EN: <div class="worked__math">(2<i>a</i><sup>3</sup><i>b</i><sup>−2</sup>)<sup>3</sup> = 8<i>a</i><sup>9</sup><i>b</i><sup>−6</sup>, (4<i>a</i><sup>−1</sup><i>b</i>)<sup>2</sup> = 16<i>a</i><sup>−2</sup><i>b</i><sup>2</sup></div><div class="worked__math">Quotient: <span class="frac"><span>8</span><span>16</span></span> <i>a</i><sup>9−(−2)</sup> <i>b</i><sup>−6−2</sup> = <span class="frac"><span>1</span><span>2</span></span><i>a</i><sup>11</sup><i>b</i><sup>−8</sup></div>
      solution: "<div class=\"worked__math\">(2<i>a</i><sup>3</sup><i>b</i><sup>−2</sup>)<sup>3</sup> = 8<i>a</i><sup>9</sup><i>b</i><sup>−6</sup>,  (4<i>a</i><sup>−1</sup><i>b</i>)<sup>2</sup> = 16<i>a</i><sup>−2</sup><i>b</i><sup>2</sup></div><div class=\"worked__math\">몫: <span class=\"frac\"><span>8</span><span>16</span></span> <i>a</i><sup>9−(−2)</sup> <i>b</i><sup>−6−2</sup> = <span class=\"frac\"><span>1</span><span>2</span></span><i>a</i><sup>11</sup><i>b</i><sup>−8</sup></div>",
      // EN: <div class="worked__math"><span class="frac"><span>8<i>a</i><sup>9</sup><i>b</i><sup>−6</sup></span><span>16<i>a</i><sup>−2</sup><i>b</i><sup>2</sup></span></span> = <b><span class="frac"><span>1</span><span>2</span></span><i>a</i><sup>11</sup><i>b</i><sup>−8</sup></b></div>
      answer: "<div class=\"worked__math\"><span class=\"frac\"><span>8<i>a</i><sup>9</sup><i>b</i><sup>−6</sup></span><span>16<i>a</i><sup>−2</sup><i>b</i><sup>2</sup></span></span> = <b><span class=\"frac\"><span>1</span><span>2</span></span><i>a</i><sup>11</sup><i>b</i><sup>−8</sup></b></div>",
      markscheme: [
        // EN: M1: Raises each bracket to its power: 8a^9 b^(−6) and 16a^(−2) b^2.
        "M1: 각 괄호를 거듭제곱함: 8a^9 b^(−6)과 16a^(−2) b^2.",
        // EN: A1: k = 1/2.
        "A1: k = 1/2.",
        // EN: A1: a^11 b^(−8) (p = 11, q = −8).
        "A1: a^11 b^(−8) (p = 11, q = −8).",
      ],
    },

    // ── t1-2-q046 · numeric · exam · SL · SL 1.7 · 4 marks
    "t1-2-q046": {
      // EN: <p>Solve the equation <span class="chem">2^{x+3} = 5^x</span>, giving your answer exactly in the form <span class="chem">ln p / ln q</span>, where <span class="chem">p, q</span> ∈ ℚ.</p>
      stem: "<p>방정식 <span class=\"chem\">2^{x+3} = 5^x</span>을 풀고, <span class=\"chem\">p, q</span> ∈ ℚ일 때 답을 정확히 <span class=\"chem\">ln p / ln q</span> 꼴로 나타내시오.</p>",
      hints: [
        // EN: Take <span class="chem">ln</span> of both sides and use the power law: <span class="chem">(x + 3) ln 2 = x ln 5</span>.
        "양변에 <span class=\"chem\">ln</span>을 취하고 거듭제곱의 성질을 사용하세요: <span class=\"chem\">(x + 3) ln 2 = x ln 5</span>.",
        // EN: Collect the <span class="chem">x</span> terms: <span class="chem">x(ln 5 - ln 2) = 3 ln 2</span>.
        "<span class=\"chem\">x</span>가 있는 항끼리 모으세요: <span class=\"chem\">x(ln 5 - ln 2) = 3 ln 2</span>.",
        // EN: Use the log laws to write <span class="chem">3 ln 2</span> and <span class="chem">ln 5 - ln 2</span> each as a single logarithm.
        "로그의 성질을 이용해 <span class=\"chem\">3 ln 2</span>와 <span class=\"chem\">ln 5 - ln 2</span>를 각각 하나의 로그로 나타내세요.",
      ],
      // EN: <div class="worked__math">(<i>x</i> + 3) ln 2 = <i>x</i> ln 5 <b>[M1 A1]</b></div><div class="worked__math"><i>x</i>(ln 5 − ln 2) = 3 ln 2 <b>[M1]</b></div><div class="worked__math"><i>x</i> = <b><span class="frac"><span>ln 8</span><span>ln(5/2)</span></span></b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">(<i>x</i> + 3) ln 2 = <i>x</i> ln 5   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>x</i>(ln 5 − ln 2) = 3 ln 2   <b>[M1]</b></div><div class=\"worked__math\"><i>x</i> = <b><span class=\"frac\"><span>ln 8</span><span>ln(5/2)</span></span></b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q047 · short · exam · SL · SL 1.7 · 6 marks
    "t1-2-q047": {
      // EN: <p>(a) Show that <span class="chem">log_a b × log_b c = log_a c</span> for <span class="chem">a, b, c &gt; 0</span>, <span class="chem">a, b != 1</span>. <strong>[2]</strong><br>(b) Hence find the value of <span class="chem">log_2 3 × log_3 4 × log_4 5 × … × log_{15} 16</span>. <strong>[2]</strong><br>(c) Find the integer <span class="chem">n</span> for which <span class="chem">log_2 3 × log_3 4 × … × log_n(n + 1) = 10</span>. <strong>[2]</strong></p>
      stem: "<p>(a) <span class=\"chem\">a, b, c &gt; 0</span>, <span class=\"chem\">a, b != 1</span>일 때 <span class=\"chem\">log_a b × log_b c = log_a c</span>임을 보이시오 (Show that). <strong>[2]</strong><br>(b) 이를 이용하여 (Hence) <span class=\"chem\">log_2 3 × log_3 4 × log_4 5 × … × log_{15} 16</span>의 값을 구하시오. <strong>[2]</strong><br>(c) <span class=\"chem\">log_2 3 × log_3 4 × … × log_n(n + 1) = 10</span>을 만족하는 정수 <span class=\"chem\">n</span>을 구하시오 (Find). <strong>[2]</strong></p>",
      hints: [
        // EN: For (a), change both logarithms to base e (or any common base).
        "(a)에서는 두 로그를 모두 밑이 e(또는 아무 공통 밑)인 로그로 바꾸세요.",
        // EN: For (b), each new factor “uses up” the previous argument: <span class="chem">log_2 3 × log_3 4 = log_2 4</span>, then <span class="chem">log_2 4 × log_4 5 = log_2 5</span>, and so on.
        "(b)에서는 새 인수가 앞의 진수를 \"써 버려요\": <span class=\"chem\">log_2 3 × log_3 4 = log_2 4</span>, 그다음 <span class=\"chem\">log_2 4 × log_4 5 = log_2 5</span>, 이런 식으로 계속돼요.",
        // EN: For (c), the chain ends at <span class="chem">log_2(n + 1)</span>.
        "(c)에서는 이 사슬이 <span class=\"chem\">log_2(n + 1)</span>에서 끝나요.",
      ],
      // EN: <p>The change-of-base result makes the product telescope: every intermediate argument cancels, leaving <span class="chem">log_2</span> of the last argument.</p>
      solution: "<p>밑의 변환 결과 때문에 곱이 연쇄적으로 소거돼요: 중간의 진수가 모두 약분되고 마지막 진수의 <span class=\"chem\">log_2</span>만 남아요.</p>",
      // EN: <div class="worked__math">(a) log<sub><i>a</i></sub> <i>b</i> × log<sub><i>b</i></sub> <i>c</i> = <span class="frac"><span>ln <i>b</i></span><span>ln <i>a</i></span></span> × <span class="frac"><span>ln <i>c</i></span><span>ln <i>b</i></span></span> = <span class="frac"><span>ln <i>c</i></span><span>ln <i>a</i></span></span> = log<sub><i>a</i></sub> <i>c</i>.</div><div class="worked__math">(b) Applying (a) repeatedly, the product collapses to log<sub>2</sub> 16 = <b>4</b>.</div><div class="worked__math">(c) The product equals log<sub>2</sub>(<i>n</i> + 1) = 10, so <i>n</i> + 1 = 2<sup>10</sup> = 1024 and <b><i>n</i> = 1023</b>.</div>
      answer: "<div class=\"worked__math\">(a) log<sub><i>a</i></sub> <i>b</i> × log<sub><i>b</i></sub> <i>c</i> = <span class=\"frac\"><span>ln <i>b</i></span><span>ln <i>a</i></span></span> × <span class=\"frac\"><span>ln <i>c</i></span><span>ln <i>b</i></span></span> = <span class=\"frac\"><span>ln <i>c</i></span><span>ln <i>a</i></span></span> = log<sub><i>a</i></sub> <i>c</i>.</div><div class=\"worked__math\">(b) (a)를 반복해서 적용하면 곱은 log<sub>2</sub> 16 = <b>4</b>로 정리돼요.</div><div class=\"worked__math\">(c) 곱은 log<sub>2</sub>(<i>n</i> + 1) = 10과 같으므로 <i>n</i> + 1 = 2<sup>10</sup> = 1024이고 <b><i>n</i> = 1023</b>.</div>",
      markscheme: [
        // EN: M1: (a) Uses change of base on both factors, e.g. log_a b = ln b / ln a and log_b c = ln c / ln b.
        "M1: (a) 두 인수 모두에 밑의 변환을 사용함, 예: log_a b = ln b / ln a, log_b c = ln c / ln b.",
        // EN: A1: The ln b terms cancel to give ln c / ln a. AG: = log_a c; the given line itself earns no mark.
        "A1: ln b 항이 약분되어 ln c / ln a가 됨. AG: = log_a c; 주어진 식만 쓰면 점수 없음.",
        // EN: M1: (b) Applies the result repeatedly (or cancels in a chain) to obtain log_2 16.
        "M1: (b) 결과를 반복 적용하여(또는 연쇄적으로 약분하여) log_2 16을 얻음.",
        // EN: A1: Value 4.
        "A1: 값 4.",
        // EN: M1: (c) Recognises the product equals log_2(n + 1) and sets log_2(n + 1) = 10.
        "M1: (c) 곱이 log_2(n + 1)과 같음을 파악하고 log_2(n + 1) = 10으로 놓음.",
        // EN: A1: n + 1 = 1024, so n = 1023.
        "A1: n + 1 = 1024, 따라서 n = 1023.",
      ],
    },

    // ── t1-2-q048 · numeric · exam · SL · SL 1.7 · 5 marks
    "t1-2-q048": {
      // EN: <p>Solve the equation <span class="chem">log_3(x + 1) - log_3(2x - 5) = 1</span>, giving the exact value of <span class="chem">x</span>.</p>
      stem: "<p>방정식 <span class=\"chem\">log_3(x + 1) - log_3(2x - 5) = 1</span>을 풀어 <span class=\"chem\">x</span>의 정확한 값을 구하시오.</p>",
      hints: [
        // EN: Use the quotient law: <span class="chem">log_3((x + 1)/(2x - 5)) = 1</span>.
        "몫의 성질을 사용하세요: <span class=\"chem\">log_3((x + 1)/(2x - 5)) = 1</span>.",
        // EN: Rewrite in exponential form: <span class="chem">(x + 1)/(2x - 5) = 3^1</span>, then solve the linear equation.
        "지수 형태로 고쳐 쓰세요: <span class=\"chem\">(x + 1)/(2x - 5) = 3^1</span>. 그다음 일차방정식을 푸세요.",
        // EN: Check that your value makes both arguments, <span class="chem">x + 1</span> and <span class="chem">2x - 5</span>, positive.
        "구한 값에서 두 진수 <span class=\"chem\">x + 1</span>과 <span class=\"chem\">2x - 5</span>가 모두 양수인지 확인하세요.",
      ],
      // EN: <div class="worked__math">log<sub>3</sub><span class="frac"><span><i>x</i> + 1</span><span>2<i>x</i> − 5</span></span> = 1 <b>[M1]</b> ⇒ <span class="frac"><span><i>x</i> + 1</span><span>2<i>x</i> − 5</span></span> = 3 <b>[A1]</b></div><div class="worked__math"><i>x</i> + 1 = 6<i>x</i> − 15 <b>[M1]</b> ⇒ <b><i>x</i> = <span class="frac"><span>16</span><span>5</span></span></b> <b>[A1]</b></div><div class="worked__math">Check: <i>x</i> + 1 = 21/5 &gt; 0 and 2<i>x</i> − 5 = 7/5 &gt; 0, so the solution is valid. <b>[R1]</b></div>
      solution: "<div class=\"worked__math\">log<sub>3</sub><span class=\"frac\"><span><i>x</i> + 1</span><span>2<i>x</i> − 5</span></span> = 1   <b>[M1]</b>  ⇒  <span class=\"frac\"><span><i>x</i> + 1</span><span>2<i>x</i> − 5</span></span> = 3   <b>[A1]</b></div><div class=\"worked__math\"><i>x</i> + 1 = 6<i>x</i> − 15   <b>[M1]</b>  ⇒  <b><i>x</i> = <span class=\"frac\"><span>16</span><span>5</span></span></b>   <b>[A1]</b></div><div class=\"worked__math\">확인: <i>x</i> + 1 = 21/5 &gt; 0이고 2<i>x</i> − 5 = 7/5 &gt; 0이므로 이 해는 유효해요.   <b>[R1]</b></div>",
    },

    // ── t1-2-q049 · numeric · exam · SL · SL 1.7 · 5 marks
    "t1-2-q049": {
      // EN: <p>The equation <span class="chem">4^x - 2^{x+3} + 12 = 0</span> has two solutions, one of which is an integer. Find the exact value of the other solution.</p>
      stem: "<p>방정식 <span class=\"chem\">4^x - 2^{x+3} + 12 = 0</span>은 두 개의 해를 가지며, 그중 하나는 정수이다. 다른 한 해의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Write everything in terms of <span class="chem">u = 2^x</span>: <span class="chem">4^x = u^2</span> and <span class="chem">2^{x+3} = 8u</span>.
        "모든 것을 <span class=\"chem\">u = 2^x</span>로 나타내세요: <span class=\"chem\">4^x = u^2</span>, <span class=\"chem\">2^{x+3} = 8u</span>.",
        // EN: Solve <span class="chem">u^2 - 8u + 12 = 0</span> by factorising.
        "<span class=\"chem\">u^2 - 8u + 12 = 0</span>을 인수분해하여 푸세요.",
        // EN: One root gives <span class="chem">x = 1</span>. For the other, <span class="chem">2^x = 6</span>, so take logarithms of both sides.
        "한 근에서 <span class=\"chem\">x = 1</span>이 나와요. 다른 근에서는 <span class=\"chem\">2^x = 6</span>이므로 양변에 로그를 취하세요.",
      ],
      // EN: <div class="worked__math">Let <i>u</i> = 2<sup><i>x</i></sup>: 4<sup><i>x</i></sup> = <i>u</i><sup>2</sup>, 2<sup><i>x</i>+3</sup> = 8<i>u</i> <b>[M1]</b> ⇒ <i>u</i><sup>2</sup> − 8<i>u</i> + 12 = 0 <b>[A1]</b></div><div class="worked__math">(<i>u</i> − 2)(<i>u</i> − 6) = 0 ⇒ <i>u</i> = 2 or <i>u</i> = 6 <b>[A1]</b></div><div class="worked__math">2<sup><i>x</i></sup> = 2 ⇒ <i>x</i> = 1 (the integer solution) <b>[A1]</b>; 2<sup><i>x</i></sup> = 6 ⇒ <b><i>x</i> = log<sub>2</sub> 6</b> (= 1 + log<sub>2</sub> 3) <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>u</i> = 2<sup><i>x</i></sup>라 하면: 4<sup><i>x</i></sup> = <i>u</i><sup>2</sup>, 2<sup><i>x</i>+3</sup> = 8<i>u</i>   <b>[M1]</b>  ⇒  <i>u</i><sup>2</sup> − 8<i>u</i> + 12 = 0   <b>[A1]</b></div><div class=\"worked__math\">(<i>u</i> − 2)(<i>u</i> − 6) = 0  ⇒  <i>u</i> = 2 또는 <i>u</i> = 6   <b>[A1]</b></div><div class=\"worked__math\">2<sup><i>x</i></sup> = 2 ⇒ <i>x</i> = 1 (정수해)   <b>[A1]</b>;  2<sup><i>x</i></sup> = 6 ⇒ <b><i>x</i> = log<sub>2</sub> 6</b> (= 1 + log<sub>2</sub> 3)   <b>[A1]</b></div>",
    },

    // ── t1-2-q050 · numeric · exam · SL · SL 1.9 · 4 marks
    "t1-2-q050": {
      // EN: <p>Find the coefficient of <span class="chem">x^4</span> in the expansion of <span class="chem">(x - 2/x)^{10}</span>.</p>
      stem: "<p><span class=\"chem\">(x - 2/x)^{10}</span>의 전개식에서 <span class=\"chem\">x^4</span>의 계수를 구하시오 (Find).</p>",
      hints: [
        // EN: The general term is <span class="chem">^{10}C_r x^{10-r} (-2/x)^r = ^{10}C_r (-2)^r x^{10-2r}</span>.
        "일반항은 <span class=\"chem\">^{10}C_r x^{10-r} (-2/x)^r = ^{10}C_r (-2)^r x^{10-2r}</span>이에요.",
        // EN: Solve <span class="chem">10 - 2r = 4</span> for <span class="chem">r</span>, and keep the sign of <span class="chem">(-2)^r</span>.
        "<span class=\"chem\">10 - 2r = 4</span>를 <span class=\"chem\">r</span>에 대하여 풀고, <span class=\"chem\">(-2)^r</span>의 부호를 유지하세요.",
      ],
      // EN: <div class="worked__math"><i>T</i><sub><i>r</i>+1</sub> = <sup>10</sup>C<sub><i>r</i></sub> <i>x</i><sup>10−<i>r</i></sup>(−2<i>x</i><sup>−1</sup>)<sup><i>r</i></sup> <b>[M1]</b> = <sup>10</sup>C<sub><i>r</i></sub>(−2)<sup><i>r</i></sup><i>x</i><sup>10−2<i>r</i></sup> <b>[A1]</b></div><div class="worked__math">10 − 2<i>r</i> = 4 ⇒ <i>r</i> = 3 <b>[A1]</b></div><div class="worked__math"><sup>10</sup>C<sub>3</sub>(−2)<sup>3</sup> = 120 × (−8) = <b>−960</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>T</i><sub><i>r</i>+1</sub> = <sup>10</sup>C<sub><i>r</i></sub> <i>x</i><sup>10−<i>r</i></sup>(−2<i>x</i><sup>−1</sup>)<sup><i>r</i></sup>   <b>[M1]</b>  = <sup>10</sup>C<sub><i>r</i></sub>(−2)<sup><i>r</i></sup><i>x</i><sup>10−2<i>r</i></sup>   <b>[A1]</b></div><div class=\"worked__math\">10 − 2<i>r</i> = 4  ⇒  <i>r</i> = 3   <b>[A1]</b></div><div class=\"worked__math\"><sup>10</sup>C<sub>3</sub>(−2)<sup>3</sup> = 120 × (−8) = <b>−960</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q051 · short · exam · SL · SL 1.9 · 5 marks
    "t1-2-q051": {
      // EN: <p>(a) Expand <span class="chem">(2 - x)^4</span> in full, in ascending powers of <span class="chem">x</span>. <strong>[3]</strong><br>(b) Hence find the exact value of <span class="chem">1.9^4</span>. <strong>[2]</strong></p>
      stem: "<p>(a) <span class=\"chem\">(2 - x)^4</span>를 <span class=\"chem\">x</span>의 오름차순으로 완전히 전개하시오 (Expand). <strong>[3]</strong><br>(b) 이를 이용하여 (Hence) <span class=\"chem\">1.9^4</span>의 정확한 값을 구하시오. <strong>[2]</strong></p>",
      hints: [
        // EN: Row 4 of Pascal’s triangle is 1, 4, 6, 4, 1. Pair it with <span class="chem">2^4, 2^3, 2^2, 2, 1</span> and with powers of <span class="chem">(-x)</span>; the signs alternate.
        "파스칼의 삼각형의 4행은 1, 4, 6, 4, 1이에요. 이것을 <span class=\"chem\">2^4, 2^3, 2^2, 2, 1</span> 및 <span class=\"chem\">(-x)</span>의 거듭제곱과 짝지으세요. 부호는 번갈아 바뀌어요.",
        // EN: For (b), choose <span class="chem">x</span> so that <span class="chem">2 - x = 1.9</span>.
        "(b)에서는 <span class=\"chem\">2 - x = 1.9</span>가 되도록 <span class=\"chem\">x</span>를 택하세요.",
      ],
      // EN: <p>Because the expansion has only five terms, substituting <span class="chem">x = 0.1</span> gives the exact value, not an approximation.</p>
      solution: "<p>전개식에 항이 다섯 개뿐이므로 <span class=\"chem\">x = 0.1</span>을 대입하면 어림값이 아니라 정확한 값이 나와요.</p>",
      // EN: <div class="worked__math">(a) (2 − <i>x</i>)<sup>4</sup> = 16 − 32<i>x</i> + 24<i>x</i><sup>2</sup> − 8<i>x</i><sup>3</sup> + <i>x</i><sup>4</sup>.</div><div class="worked__math">(b) 1.9 = 2 − 0.1, so 1.9<sup>4</sup> = 16 − 3.2 + 0.24 − 0.008 + 0.0001 = <b>13.0321</b>.</div>
      answer: "<div class=\"worked__math\">(a) (2 − <i>x</i>)<sup>4</sup> = 16 − 32<i>x</i> + 24<i>x</i><sup>2</sup> − 8<i>x</i><sup>3</sup> + <i>x</i><sup>4</sup>.</div><div class=\"worked__math\">(b) 1.9 = 2 − 0.1이므로 1.9<sup>4</sup> = 16 − 3.2 + 0.24 − 0.008 + 0.0001 = <b>13.0321</b>.</div>",
      markscheme: [
        // EN: M1: (a) Uses the binomial coefficients 1, 4, 6, 4, 1 with powers of 2 and (−x).
        "M1: (a) 이항계수 1, 4, 6, 4, 1을 2와 (−x)의 거듭제곱과 함께 사용함.",
        // EN: A1: 16 − 32x + 24x^2.
        "A1: 16 − 32x + 24x^2.",
        // EN: A1: − 8x^3 + x^4.
        "A1: − 8x^3 + x^4.",
        // EN: M1: (b) Substitutes x = 0.1.
        "M1: (b) x = 0.1을 대입함.",
        // EN: A1: 13.0321.
        "A1: 13.0321.",
      ],
    },

    // ── t1-2-q052 · numeric · exam · SL · SL 1.9 · 5 marks
    "t1-2-q052": {
      // EN: <p>In the expansion of <span class="chem">(3 + kx)^6</span>, where <span class="chem">k &lt; 0</span>, the coefficient of <span class="chem">x^2</span> is 540. Find the exact value of <span class="chem">k</span>.</p>
      stem: "<p><span class=\"chem\">k &lt; 0</span>일 때 <span class=\"chem\">(3 + kx)^6</span>의 전개식에서 <span class=\"chem\">x^2</span>의 계수는 540이다. <span class=\"chem\">k</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: The term in <span class="chem">x^2</span> is <span class="chem">^6C_2 × 3^4 × (kx)^2</span>.
        "<span class=\"chem\">x^2</span> 항은 <span class=\"chem\">^6C_2 × 3^4 × (kx)^2</span>이에요.",
        // EN: This gives <span class="chem">1215k^2 = 540</span>. Solve for <span class="chem">k^2</span>.
        "이로부터 <span class=\"chem\">1215k^2 = 540</span>이 돼요. <span class=\"chem\">k^2</span>의 값을 구하세요.",
        // EN: There are two square roots. Read the stem again to choose one.
        "제곱근은 두 개예요. 문제를 다시 읽고 하나를 고르세요.",
      ],
      // EN: <div class="worked__math"><sup>6</sup>C<sub>2</sub> × 3<sup>4</sup> × <i>k</i><sup>2</sup> = 540 <b>[M1]</b> ⇒ 15 × 81<i>k</i><sup>2</sup> = 1215<i>k</i><sup>2</sup> = 540 <b>[A1]</b></div><div class="worked__math"><i>k</i><sup>2</sup> = <span class="frac"><span>540</span><span>1215</span></span> = <span class="frac"><span>4</span><span>9</span></span> <b>[A1]</b></div><div class="worked__math"><i>k</i> = ±<span class="frac"><span>2</span><span>3</span></span>, and <i>k</i> &lt; 0 <b>[R1]</b>, so <b><i>k</i> = −<span class="frac"><span>2</span><span>3</span></span></b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><sup>6</sup>C<sub>2</sub> × 3<sup>4</sup> × <i>k</i><sup>2</sup> = 540   <b>[M1]</b>  ⇒  15 × 81<i>k</i><sup>2</sup> = 1215<i>k</i><sup>2</sup> = 540   <b>[A1]</b></div><div class=\"worked__math\"><i>k</i><sup>2</sup> = <span class=\"frac\"><span>540</span><span>1215</span></span> = <span class=\"frac\"><span>4</span><span>9</span></span>   <b>[A1]</b></div><div class=\"worked__math\"><i>k</i> = ±<span class=\"frac\"><span>2</span><span>3</span></span>이고 <i>k</i> &lt; 0   <b>[R1]</b>, 따라서 <b><i>k</i> = −<span class=\"frac\"><span>2</span><span>3</span></span></b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q053 · short · exam · SL · SL 1.5, 1.7 · 6 marks
    "t1-2-q053": {
      // EN: <p>(a) Write <span class="chem">8^{2/3} × 16^{-3/4}</span> as a power of 2, and hence find its exact value. <strong>[2]</strong><br>(b) Solve <span class="chem">x^{2/3} = 16</span> for <span class="chem">x</span> ∈ ℝ, where <span class="chem">x^{2/3}</span> means <span class="chem">(x^{1/3})^2</span> and <span class="chem">x^{1/3}</span> is the real cube root of <span class="chem">x</span>. <strong>[2]</strong><br>(c) Solve <span class="chem">x^{-3/2} = 1/27</span> for <span class="chem">x &gt; 0</span>. <strong>[2]</strong></p>
      stem: "<p>(a) <span class=\"chem\">8^{2/3} × 16^{-3/4}</span>을 2의 거듭제곱으로 나타내고, 이를 이용하여 그 정확한 값을 구하시오 (Find). <strong>[2]</strong><br>(b) <span class=\"chem\">x</span> ∈ ℝ일 때 <span class=\"chem\">x^{2/3} = 16</span>을 푸시오. 여기서 <span class=\"chem\">x^{2/3}</span>는 <span class=\"chem\">(x^{1/3})^2</span>를 뜻하고 <span class=\"chem\">x^{1/3}</span>는 <span class=\"chem\">x</span>의 실수 세제곱근이다. <strong>[2]</strong><br>(c) <span class=\"chem\">x &gt; 0</span>일 때 <span class=\"chem\">x^{-3/2} = 1/27</span>을 푸시오. <strong>[2]</strong></p>",
      hints: [
        // EN: For (a), write 8 and 16 as powers of 2 and multiply the indices.
        "(a)에서는 8과 16을 2의 거듭제곱으로 쓰고 지수를 곱하세요.",
        // EN: For (b), <span class="chem">x^{2/3}</span> is the square of the cube root of <span class="chem">x</span>, and the cube root of a negative number is real. How many cube roots square to 16?
        "(b)에서 <span class=\"chem\">x^{2/3}</span>는 <span class=\"chem\">x</span>의 세제곱근의 제곱이고, 음수의 세제곱근은 실수예요. 제곱해서 16이 되는 세제곱근은 몇 개일까요?",
        // EN: For (c), take reciprocals first: <span class="chem">x^{3/2} = 27</span>.
        "(c)에서는 먼저 역수를 취하세요: <span class=\"chem\">x^{3/2} = 27</span>.",
      ],
      // EN: <p>In (b), raising both sides to the power <span class="chem">3/2</span> loses the negative solution. Taking the square root of <span class="chem">(x^{1/3})^2</span> keeps both signs.</p>
      solution: "<p>(b)에서 양변을 <span class=\"chem\">3/2</span>제곱하면 음수인 해를 잃어버려요. <span class=\"chem\">(x^{1/3})^2</span>의 제곱근을 취하면 두 부호가 모두 남아요.</p>",
      // EN: <div class="worked__math">(a) 8<sup>2/3</sup> = (2<sup>3</sup>)<sup>2/3</sup> = 2<sup>2</sup> and 16<sup>−3/4</sup> = (2<sup>4</sup>)<sup>−3/4</sup> = 2<sup>−3</sup>, so the product is 2<sup>−1</sup> = <b><span class="frac"><span>1</span><span>2</span></span></b>.</div><div class="worked__math">(b) (<i>x</i><sup>1/3</sup>)<sup>2</sup> = 16 ⇒ <i>x</i><sup>1/3</sup> = ±4 ⇒ <b><i>x</i> = 64 or <i>x</i> = −64</b>.</div><div class="worked__math">(c) <i>x</i><sup>3/2</sup> = 27 ⇒ <i>x</i> = 27<sup>2/3</sup> = 3<sup>2</sup> = <b>9</b>.</div>
      answer: "<div class=\"worked__math\">(a) 8<sup>2/3</sup> = (2<sup>3</sup>)<sup>2/3</sup> = 2<sup>2</sup>이고 16<sup>−3/4</sup> = (2<sup>4</sup>)<sup>−3/4</sup> = 2<sup>−3</sup>이므로 곱은 2<sup>−1</sup> = <b><span class=\"frac\"><span>1</span><span>2</span></span></b>.</div><div class=\"worked__math\">(b) (<i>x</i><sup>1/3</sup>)<sup>2</sup> = 16  ⇒  <i>x</i><sup>1/3</sup> = ±4  ⇒  <b><i>x</i> = 64 또는 <i>x</i> = −64</b>.</div><div class=\"worked__math\">(c) <i>x</i><sup>3/2</sup> = 27  ⇒  <i>x</i> = 27<sup>2/3</sup> = 3<sup>2</sup> = <b>9</b>.</div>",
      markscheme: [
        // EN: M1: (a) Writes 8^(2/3) = 2^2 and 16^(−3/4) = 2^(−3).
        "M1: (a) 8^(2/3) = 2^2, 16^(−3/4) = 2^(−3)으로 씀.",
        // EN: A1: 2^(−1) = 1/2.
        "A1: 2^(−1) = 1/2.",
        // EN: M1: (b) Writes x^(2/3) = (x^(1/3))^2 = 16, so x^(1/3) = ±4.
        "M1: (b) x^(2/3) = (x^(1/3))^2 = 16으로 써서 x^(1/3) = ±4를 얻음.",
        // EN: A1: x = 64 or x = −64 (both needed).
        "A1: x = 64 또는 x = −64 (둘 다 필요).",
        // EN: M1: (c) Inverts to x^(3/2) = 27 (or raises both sides to the power −2/3).
        "M1: (c) 역수를 취해 x^(3/2) = 27로 놓음 (또는 양변을 −2/3제곱함).",
        // EN: A1: x = 9.
        "A1: x = 9.",
      ],
    },

    // ── t1-2-q060 · numeric · foundation · SL · SL 1.9 · 3 marks
    "t1-2-q060": {
      // EN: <p>Use Pascal’s triangle to find the coefficient of <span class="chem">a^2 b^4</span> in the expansion of <span class="chem">(a + 2b)^6</span>.</p>
      stem: "<p>파스칼의 삼각형을 이용하여 <span class=\"chem\">(a + 2b)^6</span>의 전개식에서 <span class=\"chem\">a^2 b^4</span>의 계수를 구하시오 (Find).</p>",
      hints: [
        // EN: Row 6 of Pascal’s triangle is 1, 6, 15, 20, 15, 6, 1.
        "파스칼의 삼각형의 6행은 1, 6, 15, 20, 15, 6, 1이에요.",
        // EN: The term with <span class="chem">b^4</span> uses the coefficient <span class="chem">^6C_4 = 15</span> and the factor <span class="chem">(2b)^4</span>, not just <span class="chem">b^4</span>.
        "<span class=\"chem\">b^4</span>이 있는 항에는 계수 <span class=\"chem\">^6C_4 = 15</span>와 인수 <span class=\"chem\">(2b)^4</span>가 쓰여요. 단순히 <span class=\"chem\">b^4</span>만이 아니에요.",
      ],
      // EN: <div class="worked__math">Row 6: 1, 6, 15, 20, 15, 6, 1 <b>[M1]</b></div><div class="worked__math">Term in <i>a</i><sup>2</sup><i>b</i><sup>4</sup>: 15 × <i>a</i><sup>2</sup> × (2<i>b</i>)<sup>4</sup> <b>[A1]</b> = 15 × 16 <i>a</i><sup>2</sup><i>b</i><sup>4</sup> = <b>240</b><i>a</i><sup>2</sup><i>b</i><sup>4</sup> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">6행: 1, 6, 15, 20, 15, 6, 1   <b>[M1]</b></div><div class=\"worked__math\"><i>a</i><sup>2</sup><i>b</i><sup>4</sup> 항: 15 × <i>a</i><sup>2</sup> × (2<i>b</i>)<sup>4</sup>   <b>[A1]</b>  = 15 × 16 <i>a</i><sup>2</sup><i>b</i><sup>4</sup> = <b>240</b><i>a</i><sup>2</sup><i>b</i><sup>4</sup>   <b>[A1]</b></div>",
    },

    // ── t1-2-q054 · numeric · challenge · SL · SL 1.7 · 5 marks
    "t1-2-q054": {
      // EN: <p>Solve the equation <span class="chem">log_9 x = log_3(x - 6)</span>.</p>
      stem: "<p>방정식 <span class=\"chem\">log_9 x = log_3(x - 6)</span>을 푸시오.</p>",
      hints: [
        // EN: Decode: the bases differ (9 and 3), so change base first. The algebra will produce two candidates, and the domain of <span class="chem">log_3(x - 6)</span> decides which one survives.
        "해석: 밑이 서로 다르므로(9와 3) 먼저 밑을 바꾸세요. 식을 정리하면 두 후보가 나오고, <span class=\"chem\">log_3(x - 6)</span>의 정의역이 어느 쪽이 남을지 결정해요.",
        // EN: Change of base: <span class="chem">log_9 x = log_3 x / log_3 9 = (1/2) log_3 x = log_3 sqrt(x)</span>.
        "밑의 변환: <span class=\"chem\">log_9 x = log_3 x / log_3 9 = (1/2) log_3 x = log_3 sqrt(x)</span>.",
        // EN: So <span class="chem">sqrt(x) = x - 6</span>. Square both sides (or let <span class="chem">s = sqrt(x)</span>) and solve the quadratic.
        "따라서 <span class=\"chem\">sqrt(x) = x - 6</span>이에요. 양변을 제곱하고(또는 <span class=\"chem\">s = sqrt(x)</span>로 놓고) 이차방정식을 푸세요.",
        // EN: Check each candidate in <span class="chem">x - 6 &gt; 0</span>.
        "각 후보가 <span class=\"chem\">x - 6 &gt; 0</span>을 만족하는지 확인하세요.",
      ],
      // EN: <p><strong>Decode:</strong> match the bases, remove the logs, then use the domain to reject a candidate.</p><div class="worked__math">log<sub>9</sub> <i>x</i> = <span class="frac"><span>log<sub>3</sub> <i>x</i></span><span>2</span></span> = log<sub>3</sub> √<i>x</i> <b>[M1]</b> ⇒ √<i>x</i> = <i>x</i> − 6 <b>[A1]</b></div><div class="worked__math"><i>x</i> = (<i>x</i> − 6)<sup>2</sup> ⇒ <i>x</i><sup>2</sup> − 13<i>x</i> + 36 = 0 ⇒ (<i>x</i> − 4)(<i>x</i> − 9) = 0 <b>[M1]</b></div><div class="worked__math"><i>x</i> = 4 gives <i>x</i> − 6 = −2 &lt; 0, so reject it <b>[R1]</b>; <b><i>x</i> = 9</b> <b>[A1]</b></div>
      solution: "<p><strong>해석:</strong> 밑을 맞추고 로그를 없앤 다음, 정의역을 이용해 후보 하나를 버려요.</p><div class=\"worked__math\">log<sub>9</sub> <i>x</i> = <span class=\"frac\"><span>log<sub>3</sub> <i>x</i></span><span>2</span></span> = log<sub>3</sub> √<i>x</i>   <b>[M1]</b>  ⇒  √<i>x</i> = <i>x</i> − 6   <b>[A1]</b></div><div class=\"worked__math\"><i>x</i> = (<i>x</i> − 6)<sup>2</sup>  ⇒  <i>x</i><sup>2</sup> − 13<i>x</i> + 36 = 0  ⇒  (<i>x</i> − 4)(<i>x</i> − 9) = 0   <b>[M1]</b></div><div class=\"worked__math\"><i>x</i> = 4이면 <i>x</i> − 6 = −2 &lt; 0이므로 버림   <b>[R1]</b>;  <b><i>x</i> = 9</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q055 · numeric · challenge · SL · SL 1.9 · 6 marks
    "t1-2-q055": {
      // EN: <p>In the expansion of <span class="chem">(x^2 + a/x)^9</span>, where <span class="chem">a &gt; 0</span>, the coefficient of <span class="chem">x^3</span> is six times the coefficient of <span class="chem">x^9</span>. Find the value of <span class="chem">a</span>.</p>
      stem: "<p><span class=\"chem\">a &gt; 0</span>일 때 <span class=\"chem\">(x^2 + a/x)^9</span>의 전개식에서 <span class=\"chem\">x^3</span>의 계수는 <span class=\"chem\">x^9</span>의 계수의 여섯 배이다. <span class=\"chem\">a</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: two different terms of the same expansion are compared. Find which value of <span class="chem">r</span> gives <span class="chem">x^3</span> and which gives <span class="chem">x^9</span>, then write one equation in <span class="chem">a</span>.
        "해석: 같은 전개식의 서로 다른 두 항을 비교하고 있어요. 어떤 <span class=\"chem\">r</span> 값에서 <span class=\"chem\">x^3</span>이, 어떤 값에서 <span class=\"chem\">x^9</span>이 나오는지 찾은 다음 <span class=\"chem\">a</span>에 대한 방정식 하나를 세우세요.",
        // EN: The general term is <span class="chem">^9C_r (x^2)^{9-r} (a/x)^r = ^9C_r a^r x^{18-3r}</span>.
        "일반항은 <span class=\"chem\">^9C_r (x^2)^{9-r} (a/x)^r = ^9C_r a^r x^{18-3r}</span>이에요.",
        // EN: For <span class="chem">x^9</span>, <span class="chem">r = 3</span>; for <span class="chem">x^3</span>, <span class="chem">r = 5</span>. Then <span class="chem">^9C_5 a^5 = 6 × ^9C_3 a^3</span>.
        "<span class=\"chem\">x^9</span>에 대해서는 <span class=\"chem\">r = 3</span>, <span class=\"chem\">x^3</span>에 대해서는 <span class=\"chem\">r = 5</span>이에요. 그러면 <span class=\"chem\">^9C_5 a^5 = 6 × ^9C_3 a^3</span>이 돼요.",
      ],
      // EN: <p><strong>Decode:</strong> two target powers mean two values of <i>r</i>; the given ratio links their coefficients.</p><div class="worked__math"><i>T</i><sub><i>r</i>+1</sub> = <sup>9</sup>C<sub><i>r</i></sub> <i>a</i><sup><i>r</i></sup> <i>x</i><sup>18−3<i>r</i></sup> <b>[M1 A1]</b></div><div class="worked__math"><i>x</i><sup>9</sup>: <i>r</i> = 3, coefficient 84<i>a</i><sup>3</sup>; <i>x</i><sup>3</sup>: <i>r</i> = 5, coefficient 126<i>a</i><sup>5</sup> <b>[A1]</b></div><div class="worked__math">126<i>a</i><sup>5</sup> = 6 × 84<i>a</i><sup>3</sup> <b>[M1]</b> ⇒ <i>a</i><sup>2</sup> = <span class="frac"><span>504</span><span>126</span></span> = 4 <b>[A1]</b></div><div class="worked__math"><i>a</i> &gt; 0, so <b><i>a</i> = 2</b> <b>[A1]</b></div>
      solution: "<p><strong>해석:</strong> 목표로 하는 거듭제곱이 두 개이므로 <i>r</i>의 값도 두 개이고, 주어진 비가 두 계수를 연결해요.</p><div class=\"worked__math\"><i>T</i><sub><i>r</i>+1</sub> = <sup>9</sup>C<sub><i>r</i></sub> <i>a</i><sup><i>r</i></sup> <i>x</i><sup>18−3<i>r</i></sup>   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>x</i><sup>9</sup>: <i>r</i> = 3, 계수 84<i>a</i><sup>3</sup>;  <i>x</i><sup>3</sup>: <i>r</i> = 5, 계수 126<i>a</i><sup>5</sup>   <b>[A1]</b></div><div class=\"worked__math\">126<i>a</i><sup>5</sup> = 6 × 84<i>a</i><sup>3</sup>   <b>[M1]</b>  ⇒  <i>a</i><sup>2</sup> = <span class=\"frac\"><span>504</span><span>126</span></span> = 4   <b>[A1]</b></div><div class=\"worked__math\"><i>a</i> &gt; 0이므로 <b><i>a</i> = 2</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q056 · short · challenge · SL · SL 1.5, 1.7 · 6 marks
    "t1-2-q056": {
      // EN: <p>Find the values of <span class="chem">x</span> and <span class="chem">y</span> that satisfy both <span class="chem">2^x × 3^y = 72</span> and <span class="chem">2^y × 3^x = 108</span>.</p>
      stem: "<p><span class=\"chem\">2^x × 3^y = 72</span>와 <span class=\"chem\">2^y × 3^x = 108</span>을 모두 만족하는 <span class=\"chem\">x</span>와 <span class=\"chem\">y</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: the two equations are symmetric, with the roles of 2 and 3 swapped. Multiplying and dividing them gives equations in <span class="chem">x + y</span> and <span class="chem">x - y</span>, which are easy to solve together.
        "해석: 두 방정식은 2와 3의 역할이 서로 바뀐 대칭 꼴이에요. 두 식을 곱하고 나누면 <span class=\"chem\">x + y</span>와 <span class=\"chem\">x - y</span>에 대한 방정식이 나오고, 이를 연립하면 쉽게 풀려요.",
        // EN: Multiply: <span class="chem">2^{x+y} 3^{x+y} = 6^{x+y}</span>. Is <span class="chem">72 × 108</span> a power of 6?
        "곱하세요: <span class=\"chem\">2^{x+y} 3^{x+y} = 6^{x+y}</span>. <span class=\"chem\">72 × 108</span>은 6의 거듭제곱일까요?",
        // EN: Divide the first equation by the second: <span class="chem">2^{x-y} 3^{y-x} = (2/3)^{x-y}</span>.
        "첫 번째 방정식을 두 번째 방정식으로 나누세요: <span class=\"chem\">2^{x-y} 3^{y-x} = (2/3)^{x-y}</span>.",
      ],
      // EN: <p><strong>Decode:</strong> spot the symmetry and combine the equations, rather than taking logs of each one separately (which also works, but gives a messier linear system with ln 2 and ln 3 as coefficients).</p>
      solution: "<p><strong>해석:</strong> 각 방정식에 따로 로그를 취하기보다 대칭성을 알아차리고 두 방정식을 결합해요 (따로 로그를 취해도 풀리지만, ln 2와 ln 3을 계수로 하는 더 복잡한 연립일차방정식이 돼요).</p>",
      // EN: <div class="worked__math">Multiply: 2<sup><i>x</i>+<i>y</i></sup>3<sup><i>x</i>+<i>y</i></sup> = 6<sup><i>x</i>+<i>y</i></sup> = 72 × 108 = 7776 = 6<sup>5</sup>, so <i>x</i> + <i>y</i> = 5.</div><div class="worked__math">Divide: 2<sup><i>x</i>−<i>y</i></sup>3<sup><i>y</i>−<i>x</i></sup> = (2/3)<sup><i>x</i>−<i>y</i></sup> = 72/108 = 2/3, so <i>x</i> − <i>y</i> = 1.</div><div class="worked__math">Hence <b><i>x</i> = 3</b> and <b><i>y</i> = 2</b>.</div>
      answer: "<div class=\"worked__math\">곱하기: 2<sup><i>x</i>+<i>y</i></sup>3<sup><i>x</i>+<i>y</i></sup> = 6<sup><i>x</i>+<i>y</i></sup> = 72 × 108 = 7776 = 6<sup>5</sup>이므로 <i>x</i> + <i>y</i> = 5.</div><div class=\"worked__math\">나누기: 2<sup><i>x</i>−<i>y</i></sup>3<sup><i>y</i>−<i>x</i></sup> = (2/3)<sup><i>x</i>−<i>y</i></sup> = 72/108 = 2/3이므로 <i>x</i> − <i>y</i> = 1.</div><div class=\"worked__math\">따라서 <b><i>x</i> = 3</b>, <b><i>y</i> = 2</b>.</div>",
      markscheme: [
        // EN: M1: Multiplies the equations (or takes logs of both and adds): 6^(x+y) = 7776.
        "M1: 두 방정식을 곱함 (또는 두 식에 로그를 취해 더함): 6^(x+y) = 7776.",
        // EN: A1: x + y = 5 (7776 = 6^5).
        "A1: x + y = 5 (7776 = 6^5).",
        // EN: M1: Divides the equations (or subtracts the log equations): (2/3)^(x−y) = 72/108.
        "M1: 두 방정식을 나눔 (또는 로그 방정식끼리 뺌): (2/3)^(x−y) = 72/108.",
        // EN: A1: x − y = 1.
        "A1: x − y = 1.",
        // EN: A1: x = 3.
        "A1: x = 3.",
        // EN: A1: y = 2.
        "A1: y = 2.",
      ],
    },

    // ── t1-2-q057 · short · challenge · SL · SL 1.9 · 6 marks
    "t1-2-q057": {
      // EN: <p>Let <span class="chem">(1 + 3x)^8 = a_0 + a_1 x + a_2 x^2 + … + a_8 x^8</span>.<br>(a) Find the value of <span class="chem">a_0 + a_1 + a_2 + … + a_8</span>. <strong>[2]</strong><br>(b) Find the value of <span class="chem">a_0 - a_1 + a_2 - a_3 + … + a_8</span>. <strong>[2]</strong><br>(c) Hence find the value of <span class="chem">a_0 + a_2 + a_4 + a_6 + a_8</span>. <strong>[2]</strong></p>
      stem: "<p><span class=\"chem\">(1 + 3x)^8 = a_0 + a_1 x + a_2 x^2 + … + a_8 x^8</span>이라 하자.<br>(a) <span class=\"chem\">a_0 + a_1 + a_2 + … + a_8</span>의 값을 구하시오 (Find). <strong>[2]</strong><br>(b) <span class=\"chem\">a_0 - a_1 + a_2 - a_3 + … + a_8</span>의 값을 구하시오 (Find). <strong>[2]</strong><br>(c) 이를 이용하여 (Hence) <span class=\"chem\">a_0 + a_2 + a_4 + a_6 + a_8</span>의 값을 구하시오. <strong>[2]</strong></p>",
      hints: [
        // EN: Decode: you are not asked to find any single coefficient. A sum of all the coefficients is the value of the polynomial at a well-chosen <span class="chem">x</span>.
        "해석: 계수 하나하나를 구하라는 것이 아니에요. 모든 계수의 합은 잘 고른 <span class=\"chem\">x</span>에서의 다항식의 값이에요.",
        // EN: For (a), which value of <span class="chem">x</span> makes every power <span class="chem">x^r</span> equal to 1?
        "(a)에서는 어떤 <span class=\"chem\">x</span> 값이 모든 거듭제곱 <span class=\"chem\">x^r</span>을 1로 만들까요?",
        // EN: For (b), which value of <span class="chem">x</span> makes the powers alternate between 1 and −1?
        "(b)에서는 어떤 <span class=\"chem\">x</span> 값이 거듭제곱을 1과 −1이 번갈아 나오게 할까요?",
        // EN: For (c), add the two results. What happens to <span class="chem">a_1, a_3, a_5, a_7</span>?
        "(c)에서는 두 결과를 더하세요. <span class=\"chem\">a_1, a_3, a_5, a_7</span>은 어떻게 될까요?",
      ],
      // EN: <p><strong>Decode:</strong> sums of coefficients come from substituting <span class="chem">x = 1</span> and <span class="chem">x = -1</span>; there is no need to expand.</p>
      solution: "<p><strong>해석:</strong> 계수의 합은 <span class=\"chem\">x = 1</span>과 <span class=\"chem\">x = -1</span>을 대입해서 얻어요. 전개할 필요가 없어요.</p>",
      // EN: <div class="worked__math">(a) Put <i>x</i> = 1: 4<sup>8</sup> = <b>65536</b>.</div><div class="worked__math">(b) Put <i>x</i> = −1: (−2)<sup>8</sup> = <b>256</b>.</div><div class="worked__math">(c) Adding (a) and (b) doubles the even-index coefficients and cancels the odd ones: <span class="frac"><span>65536 + 256</span><span>2</span></span> = <b>32896</b>.</div>
      answer: "<div class=\"worked__math\">(a) <i>x</i> = 1을 대입: 4<sup>8</sup> = <b>65536</b>.</div><div class=\"worked__math\">(b) <i>x</i> = −1을 대입: (−2)<sup>8</sup> = <b>256</b>.</div><div class=\"worked__math\">(c) (a)와 (b)를 더하면 첨자가 짝수인 계수는 두 배가 되고 홀수인 계수는 소거돼요: <span class=\"frac\"><span>65536 + 256</span><span>2</span></span> = <b>32896</b>.</div>",
      markscheme: [
        // EN: M1: (a) Substitutes x = 1 into both sides.
        "M1: (a) 양변에 x = 1을 대입함.",
        // EN: A1: 4^8 = 65536.
        "A1: 4^8 = 65536.",
        // EN: M1: (b) Substitutes x = −1 into both sides.
        "M1: (b) 양변에 x = −1을 대입함.",
        // EN: A1: (−2)^8 = 256.
        "A1: (−2)^8 = 256.",
        // EN: M1: (c) Adds the results of (a) and (b), so that the odd-index terms cancel, and halves.
        "M1: (c) (a)와 (b)의 결과를 더해 첨자가 홀수인 항을 소거하고 절반으로 나눔.",
        // EN: A1: 32896.
        "A1: 32896.",
      ],
    },

    // ── t1-2-q058 · numeric · challenge · SL · SL 1.7 · 4 marks
    "t1-2-q058": {
      // EN: <p>The real numbers <span class="chem">a</span> and <span class="chem">b</span> satisfy <span class="chem">3^a = 5</span> and <span class="chem">5^b = 9</span>. Find the value of the product <span class="chem">ab</span>.</p>
      stem: "<p>실수 <span class=\"chem\">a</span>와 <span class=\"chem\">b</span>는 <span class=\"chem\">3^a = 5</span>와 <span class=\"chem\">5^b = 9</span>를 만족한다. 곱 <span class=\"chem\">ab</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: neither <span class="chem">a</span> nor <span class="chem">b</span> has a simple exact value, but their product does. Look for a way to combine the two equations rather than solving each one.
        "해석: <span class=\"chem\">a</span>도 <span class=\"chem\">b</span>도 간단한 정확한 값을 갖지 않지만, 그 곱은 가져요. 각각을 푸는 대신 두 방정식을 결합하는 방법을 찾으세요.",
        // EN: Substitute the first equation into the second: <span class="chem">5^b = (3^a)^b</span>.
        "첫 번째 방정식을 두 번째에 대입하세요: <span class=\"chem\">5^b = (3^a)^b</span>.",
        // EN: So <span class="chem">3^{ab} = 9</span>. (Alternatively, <span class="chem">a = log_3 5</span>, <span class="chem">b = log_5 9</span>, and change of base makes their product collapse.)
        "따라서 <span class=\"chem\">3^{ab} = 9</span>이에요. (다른 방법: <span class=\"chem\">a = log_3 5</span>, <span class=\"chem\">b = log_5 9</span>이고, 밑의 변환을 쓰면 두 값의 곱이 간단해져요.)",
      ],
      // EN: <p><strong>Decode:</strong> a product of two exponents suggests the law <span class="chem">(x^a)^b = x^{ab}</span>.</p><div class="worked__math">5 = 3<sup><i>a</i></sup>, so 9 = 5<sup><i>b</i></sup> = (3<sup><i>a</i></sup>)<sup><i>b</i></sup> <b>[M1]</b> = 3<sup><i>ab</i></sup> <b>[A1]</b></div><div class="worked__math">3<sup><i>ab</i></sup> = 3<sup>2</sup> <b>[M1]</b> ⇒ <b><i>ab</i> = 2</b> <b>[A1]</b></div>
      solution: "<p><strong>해석:</strong> 두 지수의 곱을 보면 지수법칙 <span class=\"chem\">(x^a)^b = x^{ab}</span>가 떠올라요.</p><div class=\"worked__math\">5 = 3<sup><i>a</i></sup>이므로 9 = 5<sup><i>b</i></sup> = (3<sup><i>a</i></sup>)<sup><i>b</i></sup>   <b>[M1]</b>  = 3<sup><i>ab</i></sup>   <b>[A1]</b></div><div class=\"worked__math\">3<sup><i>ab</i></sup> = 3<sup>2</sup>   <b>[M1]</b>  ⇒  <b><i>ab</i> = 2</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q059 · short · challenge · SL · SL 1.7 · 8 marks
    "t1-2-q059": {
      // EN: <p>Consider the equation <span class="chem">9^x - 3^{x+1} = k</span>, where <span class="chem">k</span> ∈ ℝ.<br>(a) Show that, with <span class="chem">u = 3^x</span>, the equation becomes <span class="chem">u^2 - 3u - k = 0</span>. <strong>[1]</strong><br>(b) Find the set of values of <span class="chem">k</span> for which the original equation has two distinct real solutions for <span class="chem">x</span>. <strong>[5]</strong><br>(c) Find all the values of <span class="chem">k</span> for which the original equation has exactly one real solution. <strong>[2]</strong></p>
      stem: "<p><span class=\"chem\">k</span> ∈ ℝ일 때 방정식 <span class=\"chem\">9^x - 3^{x+1} = k</span>을 생각하자.<br>(a) <span class=\"chem\">u = 3^x</span>로 놓으면 방정식이 <span class=\"chem\">u^2 - 3u - k = 0</span>이 됨을 보이시오 (Show that). <strong>[1]</strong><br>(b) 원래 방정식이 <span class=\"chem\">x</span>에 대해 서로 다른 두 실근을 갖도록 하는 <span class=\"chem\">k</span>의 값의 집합을 구하시오 (Find). <strong>[5]</strong><br>(c) 원래 방정식이 정확히 하나의 실근을 갖도록 하는 <span class=\"chem\">k</span>의 값을 모두 구하시오 (Find). <strong>[2]</strong></p>",
      hints: [
        // EN: Decode: the question counts solutions for <span class="chem">x</span>, not for <span class="chem">u</span>. Only positive values of <span class="chem">u = 3^x</span> give a real <span class="chem">x</span>, so you are really asking how many positive roots the quadratic has.
        "해석: 문제는 <span class=\"chem\">u</span>가 아니라 <span class=\"chem\">x</span>에 대한 해의 개수를 세고 있어요. <span class=\"chem\">u = 3^x</span>의 양수 값만 실수 <span class=\"chem\">x</span>를 주므로, 사실은 이차방정식이 양의 근을 몇 개 갖는지 묻는 거예요.",
        // EN: For (b), you need <span class="chem">Δ &gt; 0</span> and both roots positive: use the sum and product of the roots.
        "(b)에서는 <span class=\"chem\">Δ &gt; 0</span>이고 두 근이 모두 양수여야 해요: 두 근의 합과 곱을 이용하세요.",
        // EN: For (c), there are two different ways to get exactly one positive root. Do not forget the boundary case <span class="chem">k = 0</span>, where one root is <span class="chem">u = 0</span>.
        "(c)에서는 양의 근이 정확히 하나가 되는 경우가 두 가지예요. 한 근이 <span class=\"chem\">u = 0</span>이 되는 경계의 경우 <span class=\"chem\">k = 0</span>을 잊지 마세요.",
      ],
      // EN: <p><strong>Decode:</strong> turn the exponential equation into a quadratic in <span class="chem">u = 3^x</span>, then count positive roots. Negative or zero roots give no real <span class="chem">x</span>, so the sign conditions matter as much as the discriminant.</p>
      solution: "<p><strong>해석:</strong> 지수방정식을 <span class=\"chem\">u = 3^x</span>에 대한 이차방정식으로 바꾼 다음 양의 근을 세요. 음의 근이나 0인 근에서는 실수 <span class=\"chem\">x</span>가 나오지 않으므로, 부호 조건이 판별식만큼 중요해요.</p>",
      // EN: <div class="worked__math">(a) 9<sup><i>x</i></sup> = (3<sup><i>x</i></sup>)<sup>2</sup> = <i>u</i><sup>2</sup> and 3<sup><i>x</i>+1</sup> = 3 × 3<sup><i>x</i></sup> = 3<i>u</i>, so <i>u</i><sup>2</sup> − 3<i>u</i> − <i>k</i> = 0.</div><div class="worked__math">(b) Each positive root <i>u</i> gives exactly one <i>x</i> = log<sub>3</sub> <i>u</i>, so the quadratic needs two distinct positive roots: Δ = 9 + 4<i>k</i> &gt; 0 gives <i>k</i> &gt; −9/4; the sum of the roots is 3 &gt; 0; the product −<i>k</i> &gt; 0 gives <i>k</i> &lt; 0. So <b>−9/4 &lt; <i>k</i> &lt; 0</b>.</div><div class="worked__math">(c) Exactly one positive root: either a repeated positive root, <i>k</i> = −9/4 (<i>u</i> = 3/2), or roots of opposite sign or one zero root, which happens when −<i>k</i> ≤ 0, i.e. <i>k</i> ≥ 0. So <b><i>k</i> = −9/4 or <i>k</i> ≥ 0</b>.</div>
      answer: "<div class=\"worked__math\">(a) 9<sup><i>x</i></sup> = (3<sup><i>x</i></sup>)<sup>2</sup> = <i>u</i><sup>2</sup> and 3<sup><i>x</i>+1</sup> = 3 × 3<sup><i>x</i></sup> = 3<i>u</i>, so <i>u</i><sup>2</sup> − 3<i>u</i> − <i>k</i> = 0.</div><div class=\"worked__math\">(b) 양의 근 <i>u</i> 하나마다 <i>x</i> = log<sub>3</sub> <i>u</i>가 정확히 하나 나오므로, 이차방정식은 서로 다른 두 양의 근을 가져야 해요: Δ = 9 + 4<i>k</i> &gt; 0에서 <i>k</i> &gt; −9/4; 두 근의 합은 3 &gt; 0; 두 근의 곱 −<i>k</i> &gt; 0에서 <i>k</i> &lt; 0. 따라서 <b>−9/4 &lt; <i>k</i> &lt; 0</b>.</div><div class=\"worked__math\">(c) 양의 근이 정확히 하나: 양의 중근인 <i>k</i> = −9/4 (<i>u</i> = 3/2)이거나, 두 근의 부호가 다르거나 한 근이 0인 경우로, 이는 −<i>k</i> ≤ 0, 즉 <i>k</i> ≥ 0일 때예요. 따라서 <b><i>k</i> = −9/4 또는 <i>k</i> ≥ 0</b>.</div>",
      markscheme: [
        // EN: A1: (a) Writes 9^x = (3^x)^2 = u^2 and 3^(x+1) = 3u. AG: u^2 − 3u − k = 0; the given line itself earns no mark.
        "A1: (a) 9^x = (3^x)^2 = u^2, 3^(x+1) = 3u로 씀. AG: u^2 − 3u − k = 0; 주어진 식만 쓰면 점수 없음.",
        // EN: R1: (b) States that each positive root u gives one real x (u = 3^x > 0), so two distinct positive roots are needed.
        "R1: (b) 양의 근 u 하나마다 실수 x가 하나 나오므로(u = 3^x > 0) 서로 다른 두 양의 근이 필요하다고 언급함.",
        // EN: M1: Sets Δ = 9 + 4k > 0.
        "M1: Δ = 9 + 4k > 0으로 놓음.",
        // EN: A1: k > −9/4.
        "A1: k > −9/4.",
        // EN: M1: Uses the product of the roots −k > 0 (the sum, 3, is already positive), or an equivalent sign argument.
        "M1: 두 근의 곱 −k > 0을 사용함 (두 근의 합 3은 이미 양수), 또는 동등한 부호 논증.",
        // EN: A1: −9/4 < k < 0.
        "A1: −9/4 < k < 0.",
        // EN: A1: (c) k = −9/4 (repeated root u = 3/2 > 0).
        "A1: (c) k = −9/4 (중근 u = 3/2 > 0).",
        // EN: A1: k ≥ 0 (one positive root and one root ≤ 0).
        "A1: k ≥ 0 (양의 근 하나와 ≤ 0인 근 하나).",
      ],
    },

  }
});
