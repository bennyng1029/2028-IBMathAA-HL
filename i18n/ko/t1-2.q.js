/* t1-2.q — ko question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't1-2.q', {
  questions: {

    // ── t1-2-q001 · numeric · foundation · SL · SL 1.5 · 2 marks
    "t1-2-q001": {
      // EN: <p>Evaluate <span class="chem">27^{-2/3}</span> as an exact fraction or decimal.</p>
      stem: "<p><span class=\"chem\">27^{-2/3}</span>의 값을 정확한 분수 또는 소수로 구하시오.</p>",
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
        // EN: Write the general term <span class="chem">T_{r+1} = 5Cr (2)^{5-r} x^r</span>.
        "일반항 <span class=\"chem\">T_{r+1} = 5Cr (2)^{5-r} x^r</span>을 쓰세요.",
        // EN: Substitute <span class="chem">r = 3</span> and compute <span class="chem">5C3 × 2^2</span>.
        "<span class=\"chem\">r = 3</span>을 대입해 <span class=\"chem\">5C3 × 2^2</span>을 계산하세요.",
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

    // ── t1-2-q006 · numeric · foundation · SL · SL 1.5 · 3 marks
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

    // ── t1-2-q007 · mcq · exam · SL · SL 1.7 · 5 marks
    "t1-2-q007": {
      // EN: <p>Solve the equation <span class="chem">3^{2x} - 6(3^x) - 27 = 0</span> for <span class="chem">x</span> ∈ ℝ.</p>
      stem: "<p><span class=\"chem\">x</span> ∈ ℝ일 때, 방정식 <span class=\"chem\">3^{2x} - 6(3^x) - 27 = 0</span>을 푸시오.</p>",
      options: [
        // EN: <span class="chem">x = 2</span> only
        "<span class=\"chem\">x = 2</span>만",
        // EN: <span class="chem">x = 2</span> or <span class=\"chem">x = 1</span>
        "<span class=\"chem\">x = 2</span> 또는 <span class=\"chem\">x = 1</span>",
        // EN: <span class="chem">x = 9</span> or <span class="chem">x = -3</span>
        "<span class=\"chem\">x = 9</span> 또는 <span class=\"chem\">x = -3</span>",
        // EN: <span class="chem">x = 2</span> or <span class="chem">x = -1</span>
        "<span class=\"chem\">x = 2</span> 또는 <span class=\"chem\">x = -1</span>",
      ],
      hints: [
        // EN: Substitute <span class="chem">u = 3^x</span> (with <span class="chem">u &gt; 0</span>) to get the quadratic <span class="chem">u^2 - 6u - 27 = 0</span>.
        "<span class=\"chem\">u = 3^x</span> (<span class=\"chem\">u &gt; 0</span>)로 치환하여 이차방정식 <span class=\"chem\">u^2 - 6u - 27 = 0</span>을 얻으세요.",
        // EN: Factor as <span class="chem">(u - 9)(u + 3) = 0</span>, reject any root with <span class="chem">u &lt;= 0</span>, and solve <span class="chem">3^x = u</span>.
        "<span class=\"chem\">(u - 9)(u + 3) = 0</span>으로 인수분해한 뒤, <span class=\"chem\">u &lt;= 0</span>인 근은 제외하고 <span class=\"chem\">3^x = u</span>를 푸세요.",
      ],
      // EN: <div class="worked__math">Let <i>u</i> = 3<sup><i>x</i></sup> (<i>u</i> &gt; 0): <i>u</i><sup>2</sup> − 6<i>u</i> − 27 = 0 ⇒ (<i>u</i> − 9)(<i>u</i> + 3) = 0 <b>[M1 A1]</b></div><div class="worked__math">Reject <i>u</i> = −3 since 3<sup><i>x</i></sup> &gt; 0 for all <i>x</i> ∈ ℝ. <b>[R1]</b></div><div class="worked__math">3<sup><i>x</i></sup> = 9 = 3<sup>2</sup> ⇒ <b><i>x</i> = 2</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>u</i> = 3<sup><i>x</i></sup> (<i>u</i> &gt; 0)라 하면: <i>u</i><sup>2</sup> − 6<i>u</i> − 27 = 0 ⇒ (<i>u</i> − 9)(<i>u</i> + 3) = 0 <b>[M1 A1]</b></div><div class=\"worked__math\">모든 <i>x</i> ∈ ℝ에 대해 3<sup><i>x</i></sup> &gt; 0이므로 <i>u</i> = −3은 제외해요. <b>[R1]</b></div><div class=\"worked__math\">3<sup><i>x</i></sup> = 9 = 3<sup>2</sup> ⇒ <b><i>x</i> = 2</b> <b>[A1]</b></div>",
      misconception: {
        // EN (option B): The quadratic in <span class="chem">u = 3^x</span> gives <span class="chem">u = 9</span> or <span class="chem">u = -3</span>. Since <span class="chem">3^x &gt; 0</span> for all real <span class="chem">x</span>, <span class="chem">3^x = -3</span> has no real solution.
        "1": "<span class=\"chem\">u = 3^x</span>에 대한 이차방정식에서 <span class=\"chem\">u = 9</span> 또는 <span class=\"chem\">u = -3</span>이 나와요. 모든 실수 <span class=\"chem\">x</span>에 대해 <span class=\"chem\">3^x &gt; 0</span>이므로 <span class=\"chem\">3^x = -3</span>은 실근이 없어요.",
        // EN (option C): Those are the values of <span class="chem">u = 3^x</span>, not <span class="chem">x</span>! You must still solve <span class="chem">3^x = 9</span>.
        "2": "그것은 <span class=\"chem\">x</span>가 아니라 <span class=\"chem\">u = 3^x</span>의 값이에요! 아직 <span class=\"chem\">3^x = 9</span>를 풀어야 해요.",
        // EN (option D): Notice <span class="chem">3^{-1} = 1/3</span>, not <span class="chem">-3</span>. An exponential <span class="chem">a^x</span> with <span class="chem">a &gt; 0</span> is never negative.
        "3": "<span class=\"chem\">3^{-1} = 1/3</span>이지 <span class=\"chem\">-3</span>이 아니에요. <span class=\"chem\">a &gt; 0</span>일 때 지수 <span class=\"chem\">a^x</span>는 절대 음수가 되지 않아요.",
      },
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

    // ── t1-2-q009 · numeric · exam · SL · SL 1.7 · 6 marks
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
        // EN: Write the general term: <span class="chem">T_{r+1} = 6Cr (2x^2)^{6-r} (-x^{-1})^r = 6Cr 2^{6-r} (-1)^r x^{12-3r}</span>.
        "일반항을 쓰세요: <span class=\"chem\">T_{r+1} = 6Cr (2x^2)^{6-r} (-x^{-1})^r = 6Cr 2^{6-r} (-1)^r x^{12-3r}</span>.",
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
        // EN: Write the general term <span class="chem">T_{r+1} = 6Cr (x^2)^{6-r} (2x^{-1})^r</span>.
        "일반항 <span class=\"chem\">T_{r+1} = 6Cr (x^2)^{6-r} (2x^{-1})^r</span>을 적어요.",
        // EN: Separate the numerical coefficients and combine the powers of <span class="chem">x</span> to get <span class="chem">6Cr 2^r x^{12-3r}</span>.
        "수 계수를 분리하고 <span class=\"chem\">x</span>의 거듭제곱을 합쳐 <span class=\"chem\">6Cr 2^r x^{12-3r}</span>을 얻어요.",
        // EN: Equate the exponent of <span class="chem">x</span> to the target power: <span class="chem">12 - 3r = 3</span>, which gives <span class=\"chem">r = 3</span>.
        "<span class=\"chem\">x</span>의 지수를 목표 차수와 같다고 놓아 <span class=\"chem\">12 - 3r = 3</span>에서 <span class=\"chem\">r = 3</span>을 구해요.",
        // EN: Substitute <span class="chem">r = 3</span> to obtain <span class="chem">6C3 × 2^3 x^3 = 20 × 8 x^3 = 160x^3</span>.
        "<span class=\"chem\">r = 3</span>을 대입해 <span class=\"chem\">6C3 × 2^3 x^3 = 20 × 8 x^3 = 160x^3</span>을 얻어요.",
      ],
      hints: [
        // EN: Always start from the general term formula <span class="chem">T_{r+1} = nCr a^{n-r} b^r</span>.
        "항상 일반항 공식 <span class=\"chem\">T_{r+1} = nCr a^{n-r} b^r</span>에서 시작하세요.",
        // EN: Simplify the exponent of <span class="chem">x</span> into a single linear expression in <span class="chem">r</span> before solving for <span class="chem">r</span>.
        "<span class=\"chem\">r</span>을 구하기 전에 먼저 <span class=\"chem\">x</span>의 지수를 <span class=\"chem\">r</span>에 대한 하나의 일차식으로 정리하세요.",
      ],
      // EN: <p>Writing the general term, combining exponents into <span class="chem">x^{12-3r}</span>, solving <span class="chem">12 - 3r = 3 =&gt; r = 3</span>, and evaluating <span class="chem">6C3 × 2^3 = 160</span> gives <span class="chem">160x^3</span>.</p>
      solution: "<p>일반항을 쓰고 지수를 <span class=\"chem\">x^{12-3r}</span>로 정리한 뒤, <span class=\"chem\">12 - 3r = 3 =&gt; r = 3</span>을 풀고 <span class=\"chem\">6C3 × 2^3 = 160</span>을 계산하면 <span class=\"chem\">160x^3</span>이 돼요.</p>",
    },

    // ── t1-2-q013 · numeric · exam · SL · SL 1.9 · 5 marks
    "t1-2-q013": {
      // EN: <p>In the expansion of <span class="chem">(1 + kx)^7</span>, where <span class="chem">k &gt; 0</span>, the coefficient of <span class="chem">x^3</span> is equal to <span class="chem">5/3</span> times the coefficient of <span class="chem">x^2</span>. Find the exact value of <span class="chem">k</span>.</p>
      stem: "<p><span class=\"chem\">(1 + kx)^7</span> (<span class=\"chem\">k &gt; 0</span>)의 전개식에서 <span class=\"chem\">x^3</span>의 계수가 <span class=\"chem\">x^2</span>의 계수의 <span class=\"chem\">5/3</span>배와 같을 때, <span class=\"chem\">k</span>의 정확한 값(exact value)을 구하시오 (Find).</p>",
      hints: [
        // EN: Write the coefficient of <span class="chem">x^3</span> as <span class="chem">7C3 k^3 = 35k^3</span> and the coefficient of <span class="chem">x^2</span> as <span class="chem">7C2 k^2 = 21k^2</span>.
        "<span class=\"chem\">x^3</span>의 계수를 <span class=\"chem\">7C3 k^3 = 35k^3</span>으로, <span class=\"chem\">x^2</span>의 계수를 <span class=\"chem\">7C2 k^2 = 21k^2</span>으로 쓰세요.",
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
        // EN: M1 A1: Substitutes back to find log_2(y) = 1 and hence y = 2.
        "M1 A1: 대입하여 log_2(y) = 1, 따라서 y = 2를 구함.",
      ],
    },

    // ── t1-2-q015 · numeric · challenge · SL · SL 1.7 · 6 marks
    "t1-2-q015": {
      // EN: <p>The terms <span class="chem">log_2(p)</span>, <span class="chem">log_4(p)</span>, <span class="chem">log_8(p)</span>, ... are evaluated for <span class="chem">p = 64</span>. Calculate the exact value of the sum <span class="chem">log_2(64) + log_4(64) + log_8(64) + log_{16}(64)</span>.</p>
      stem: "<p><span class=\"chem\">log_2(p)</span>, <span class=\"chem\">log_4(p)</span>, <span class=\"chem\">log_8(p)</span>, ...을 <span class=\"chem\">p = 64</span>에서 계산할 때, 합 <span class=\"chem\">log_2(64) + log_4(64) + log_8(64) + log_{16}(64)</span>의 정확한 값을 계산하시오 (Calculate).</p>",
      hints: [
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
        // EN: Write out the three coefficients: <span class="chem">nC1 = n</span>, <span class="chem">nC2 = n(n-1)/2</span>, and <span class="chem">nC3 = n(n-1)(n-2)/6</span>.
        "세 계수를 식으로 쓰세요: <span class=\"chem\">nC1 = n</span>, <span class=\"chem\">nC2 = n(n-1)/2</span>, <span class=\"chem\">nC3 = n(n-1)(n-2)/6</span>.",
        // EN: Use the arithmetic condition <span class="chem">2(nC2) = nC1 + nC3</span> and divide through by <span class="chem">n &gt; 0</span>.
        "등차중항 조건 <span class=\"chem\">2(nC2) = nC1 + nC3</span>을 세우고 양변을 <span class=\"chem\">n &gt; 0</span>으로 나누세요.",
      ],
      // EN: <div class="worked__math">2 × <span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = <i>n</i> + <span class="frac"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6</span></span> <b>[M1 A1]</b></div><div class="worked__math">Divide by <i>n</i> &gt; 0 and multiply by 6: 6(<i>n</i> − 1) = 6 + (<i>n</i><sup>2</sup> − 3<i>n</i> + 2) <b>[M1 A1]</b></div><div class="worked__math"><i>n</i><sup>2</sup> − 9<i>n</i> + 14 = 0 ⇒ (<i>n</i> − 2)(<i>n</i> − 7) = 0. Since <i>n</i> ≥ 3, <b><i>n</i> = 7</b>. <b>[M1 A1]</b></div>
      solution: "<div class=\"worked__math\">2 × <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = <i>n</i> + <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6</span></span> <b>[M1 A1]</b></div><div class=\"worked__math\"><i>n</i> &gt; 0으로 나누고 6을 곱하면: 6(<i>n</i> − 1) = 6 + (<i>n</i><sup>2</sup> − 3<i>n</i> + 2) <b>[M1 A1]</b></div><div class=\"worked__math\"><i>n</i><sup>2</sup> − 9<i>n</i> + 14 = 0 ⇒ (<i>n</i> − 2)(<i>n</i> − 7) = 0. <i>n</i> ≥ 3이므로 <b><i>n</i> = 7</b>이에요. <b>[M1 A1]</b></div>",
    },

    // ── t1-2-q017 · short · challenge · SL · SL 1.7 · 7 marks
    "t1-2-q017": {
      // EN: <p>Consider the equation <span class="chem">e^{2x} - 2k e^x + (k + 2) = 0</span>, where <span class="chem">k</span> ∈ ℝ.<br>(a) Find the set of values of <span class="chem">k</span> for which the quadratic in <span class="chem">u = e^x</span> has two distinct real roots. <strong>[3]</strong><br>(b) Hence find the exact set of values of <span class="chem">k</span> for which the original equation has <strong>two distinct real solutions for <span class="chem">x</span></strong>. <strong>[4]</strong></p>
      stem: "<p><span class=\"chem\">k</span> ∈ ℝ일 때 방정식 <span class=\"chem\">e^{2x} - 2k e^x + (k + 2) = 0</span>을 생각하자.<br>(a) <span class=\"chem\">u = e^x</span>에 대한 이차방정식이 서로 다른 두 실근을 갖도록 하는 <span class=\"chem\">k</span>의 값의 집합을 구하시오 (Find). <strong>[3]</strong><br>(b) 이를 이용하여 (Hence) 원래 방정식이 <strong><span class=\"chem\">x</span>에 대해 서로 다른 두 실근</strong>을 갖도록 하는 <span class=\"chem\">k</span>의 값의 집합을 정확히 구하시오 (Find). <strong>[4]</strong></p>",
      hints: [
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
        // EN: A2: Rejects k < -1 and states the final set k > 2.
        "A2: k < -1을 제외하고 최종 범위 k > 2를 답함.",
      ],
    },

  }
});
