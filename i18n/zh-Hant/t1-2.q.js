/* t1-2.q — zh-Hant question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't1-2.q', {
  questions: {

    // ── t1-2-q001 · numeric · foundation · SL · SL 1.5 · 2 marks
    "t1-2-q001": {
      // EN: <p>Evaluate <span class="chem">27^{-2/3}</span> as an exact fraction or decimal.</p>
      stem: "<p>求 (Evaluate) <span class=\"chem\">27^{-2/3}</span> 的值，以準確分數或小數表示。</p>",
      hints: [
        // EN: Use <span class="chem">a^{-m/n} = 1 / (a^{1/n})^m</span>: take the cube root of 27 first before squaring.
        "利用 <span class=\"chem\">a^{-m/n} = 1 / (a^{1/n})^m</span>：先取 27 的立方根，再平方。",
        // EN: Since <span class="chem">27^{1/3} = 3</span>, compute <span class="chem">3^{-2}</span>.
        "因為 <span class=\"chem\">27^{1/3} = 3</span>，計算 <span class=\"chem\">3^{-2}</span>。",
      ],
      // EN: <div class="worked__math">27<sup>−2/3</sup> = (27<sup>1/3</sup>)<sup>−2</sup> = 3<sup>−2</sup> = <b><span class="frac"><span>1</span><span>9</span></span></b></div>
      solution: "<div class=\"worked__math\">27<sup>−2/3</sup> = (27<sup>1/3</sup>)<sup>−2</sup> = 3<sup>−2</sup> = <b><span class=\"frac\"><span>1</span><span>9</span></span></b></div>",
    },

    // ── t1-2-q002 · mcq · foundation · SL · SL 1.7 · 3 marks
    "t1-2-q002": {
      // EN: <p>Given that <span class="chem">p = ln a</span> and <span class="chem">q = ln b</span> (where <span class="chem">a, b &gt; 0</span>), express <span class="chem">ln(a^3 / sqrt(b))</span> in terms of <span class="chem">p</span> and <span class="chem">q</span>.</p>
      stem: "<p>已知 <span class=\"chem\">p = ln a</span> 及 <span class=\"chem\">q = ln b</span>（其中 <span class=\"chem\">a, b &gt; 0</span>），試以 <span class=\"chem\">p</span> 和 <span class=\"chem\">q</span> 表示 (express) <span class=\"chem\">ln(a^3 / sqrt(b))</span>。</p>",
      options: [
        // EN: <span class="chem">3p - (1/2)q</span>
        "<span class=\"chem\">3p - (1/2)q</span>",
        // EN: <span class="chem">3p / ((1/2)q)</span>
        "<span class=\"chem\">3p / ((1/2)q)</span>",
        // EN: <span class=\"chem">p^3 - sqrt(q)</span>
        "<span class=\"chem\">p^3 - sqrt(q)</span>",
        // EN: <span class=\"chem">3p + (1/2)q</span>
        "<span class=\"chem\">3p + (1/2)q</span>",
      ],
      hints: [
        // EN: Rewrite <span class="chem">sqrt(b)</span> as <span class="chem">b^{1/2}</span> and apply the quotient rule <span class="chem">ln(X/Y) = ln X - ln Y</span>.
        "把 <span class=\"chem\">sqrt(b)</span> 改寫為 <span class=\"chem\">b^{1/2}</span>，並應用商法則 <span class=\"chem\">ln(X/Y) = ln X - ln Y</span>。",
        // EN: Apply the power rule <span class=\"chem">ln(x^m) = m ln x</span> to each term.
        "對每一項應用冪法則 <span class=\"chem\">ln(x^m) = m ln x</span>。",
      ],
      // EN: <div class="worked__math">ln(<i>a</i><sup>3</sup> / <i>b</i><sup>1/2</sup>) = ln(<i>a</i><sup>3</sup>) − ln(<i>b</i><sup>1/2</sup>) = 3 ln <i>a</i> − <span class="frac"><span>1</span><span>2</span></span> ln <i>b</i> = <b>3<i>p</i> − <span class="frac"><span>1</span><span>2</span></span><i>q</i></b></div>
      solution: "<div class=\"worked__math\">ln(<i>a</i><sup>3</sup> / <i>b</i><sup>1/2</sup>) = ln(<i>a</i><sup>3</sup>) − ln(<i>b</i><sup>1/2</sup>) = 3 ln <i>a</i> − <span class=\"frac\"><span>1</span><span>2</span></span> ln <i>b</i> = <b>3<i>p</i> − <span class=\"frac\"><span>1</span><span>2</span></span><i>q</i></b></div>",
      misconception: {
        // EN (option B): The logarithm of a quotient is the difference of the logarithms (<span class="chem">ln(X/Y) = ln X - ln Y</span>), not the quotient of the logarithms.
        "1": "商的對數等於對數之差（<span class=\"chem\">ln(X/Y) = ln X - ln Y</span>），而不是對數之商。",
        // EN (option C): The power law of logarithms brings exponents to the front as multipliers: <span class="chem">ln(a^3) = 3 ln a = 3p</span>, not <span class="chem">p^3</span>.
        "2": "對數的冪法則會把指數移到前方作乘數：<span class=\"chem\">ln(a^3) = 3 ln a = 3p</span>，而不是 <span class=\"chem\">p^3</span>。",
        // EN (option D): Because <span class="chem">sqrt(b) = b^{1/2}</span> is in the denominator, its logarithm is subtracted, not added.
        "3": "因為 <span class=\"chem\">sqrt(b) = b^{1/2}</span> 在分母中，其對數應被減去，而不是加上。",
      },
    },

    // ── t1-2-q003 · numeric · foundation · SL · SL 1.7 · 3 marks
    "t1-2-q003": {
      // EN: <p>Find the exact value of <span class="chem">log_2(24) - log_2(3) + log_9(3)</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">log_2(24) - log_2(3) + log_9(3)</span> 的準確值。</p>",
      hints: [
        // EN: Combine the base-2 logs using <span class="chem">log_2(24) - log_2(3) = log_2(24/3) = log_2(8)</span>.
        "利用 <span class=\"chem\">log_2(24) - log_2(3) = log_2(24/3) = log_2(8)</span> 合併以 2 為底的對數。",
        // EN: For <span class="chem">log_9(3)</span>, note that <span class="chem">3 = 9^{1/2}</span>.
        "對於 <span class=\"chem\">log_9(3)</span>，留意 <span class=\"chem\">3 = 9^{1/2}</span>。",
      ],
      // EN: <div class="worked__math">log<sub>2</sub>(24 / 3) + log<sub>9</sub>(9<sup>1/2</sup>) = log<sub>2</sub>(8) + <span class="frac"><span>1</span><span>2</span></span> = 3 + 0.5 = <b>3.5</b> (or <b>7/2</b>)</div>
      solution: "<div class=\"worked__math\">log<sub>2</sub>(24 / 3) + log<sub>9</sub>(9<sup>1/2</sup>) = log<sub>2</sub>(8) + <span class=\"frac\"><span>1</span><span>2</span></span> = 3 + 0.5 = <b>3.5</b>（或 <b>7/2</b>）</div>",
      // EN: 7/2 (or 3.5)
      answerDisplay: "7/2（或 3.5）",
    },

    // ── t1-2-q004 · numeric · foundation · SL · SL 1.9 · 3 marks
    "t1-2-q004": {
      // EN: <p>Find the coefficient of <span class="chem">x^3</span> in the binomial expansion of <span class="chem">(2 + x)^5</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">(2 + x)^5</span> 二項式展開式中 <span class=\"chem\">x^3</span> 的係數。</p>",
      hints: [
        // EN: Write the general term <span class="chem">T_{r+1} = 5Cr (2)^{5-r} x^r</span>.
        "寫出通項 <span class=\"chem\">T_{r+1} = 5Cr (2)^{5-r} x^r</span>。",
        // EN: Substitute <span class="chem">r = 3</span> and compute <span class="chem">5C3 × 2^2</span>.
        "代入 <span class=\"chem\">r = 3</span> 並計算 <span class=\"chem\">5C3 × 2^2</span>。",
      ],
      // EN: <div class="worked__math">For <i>x</i><sup>3</sup>, set <i>r</i> = 3: <sup>5</sup>C<sub>3</sub> (2)<sup>5−3</sup> <i>x</i><sup>3</sup> = 10 × 4 <i>x</i><sup>3</sup> = <b>40</b><i>x</i><sup>3</sup></div>
      solution: "<div class=\"worked__math\">對於 <i>x</i><sup>3</sup>，設 <i>r</i> = 3：<sup>5</sup>C<sub>3</sub> (2)<sup>5−3</sup> <i>x</i><sup>3</sup> = 10 × 4 <i>x</i><sup>3</sup> = <b>40</b><i>x</i><sup>3</sup></div>",
    },

    // ── t1-2-q005 · multi · foundation · SL · SL 1.7 · 2 marks
    "t1-2-q005": {
      // EN: <p>Which of the following equations are valid identities for all <span class="chem">x, y &gt; 0</span>? Select all that apply.</p>
      stem: "<p>對於所有 <span class=\"chem\">x, y &gt; 0</span>，下列哪些方程是成立的恒等式？選出所有適用選項。</p>",
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
        "仔細檢查積法則與冪法則：次方是在真數 <span class=\"chem\">x</span> 上，還是在整個對數上？",
        // EN: Use the change of base formula <span class="chem">log_4(x) = log_2(x) / log_2(4)</span> for the third option.
        "對第三個選項使用換底公式 <span class=\"chem\">log_4(x) = log_2(x) / log_2(4)</span>。",
      ],
      // EN: <p>Option A uses the product and power laws (<span class="chem">ln(x^2 y) = ln(x^2) + ln y = 2 ln x + ln y</span>). Option C uses change of base (<span class="chem">log_4 x = log_2 x / log_2 4 = (1/2) log_2 x</span>).</p>
      solution: "<p>選項 A 運用了積法則與冪法則（<span class=\"chem\">ln(x^2 y) = ln(x^2) + ln y = 2 ln x + ln y</span>）。選項 C 運用了換底公式（<span class=\"chem\">log_4 x = log_2 x / log_2 4 = (1/2) log_2 x</span>）。</p>",
      misconception: {
        // EN (option B): There is no logarithm law for a sum <span class="chem">ln(x + y)</span>! Remember <span class="chem">ln x + ln y = ln(xy)</span>.
        "1": "兩數之和的對數 <span class=\"chem\">ln(x + y)</span> 沒有拆開的對數定律！緊記 <span class=\"chem\">ln x + ln y = ln(xy)</span>。",
        // EN (option D): The power rule applies to <span class="chem">ln(x^3) = 3 ln x</span>, where only <span class="chem">x</span> is cubed. <span class="chem">(ln x)^3</span> means <span class="chem">(ln x)(ln x)(ln x)</span>.
        "3": "冪法則適用於 <span class=\"chem\">ln(x^3) = 3 ln x</span>（只有 <span class=\"chem\">x</span> 取立方）。<span class=\"chem\">(ln x)^3</span> 表示 <span class=\"chem\">(ln x)(ln x)(ln x)</span>。",
      },
    },

    // ── t1-2-q006 · numeric · foundation · SL · SL 1.5 · 3 marks
    "t1-2-q006": {
      // EN: <p>Solve the equation <span class="chem">9^{x-1} = (1/27)^{2-x}</span> for <span class="chem">x</span>.</p>
      stem: "<p>解 (Solve) 方程 <span class=\"chem\">9^{x-1} = (1/27)^{2-x}</span> 求 <span class=\"chem\">x</span>。</p>",
      hints: [
        // EN: Express both sides as powers of base 3: <span class="chem">9 = 3^2</span> and <span class="chem">1/27 = 3^{-3}</span>.
        "把兩邊都表示為以 3 為底的冪：<span class=\"chem\">9 = 3^2</span> 及 <span class=\"chem\">1/27 = 3^{-3}</span>。",
        // EN: Equate the exponents of base 3: <span class="chem">2(x - 1) = -3(2 - x)</span>.
        "令以 3 為底的指數相等：<span class=\"chem\">2(x - 1) = -3(2 - x)</span>。",
      ],
      // EN: <div class="worked__math">(3<sup>2</sup>)<sup><i>x</i>−1</sup> = (3<sup>−3</sup>)<sup>2−<i>x</i></sup> ⇒ 3<sup>2<i>x</i>−2</sup> = 3<sup>3<i>x</i>−6</sup></div><div class="worked__math">2<i>x</i> − 2 = 3<i>x</i> − 6 ⇒ <b><i>x</i> = 4</b></div>
      solution: "<div class=\"worked__math\">(3<sup>2</sup>)<sup><i>x</i>−1</sup> = (3<sup>−3</sup>)<sup>2−<i>x</i></sup> ⇒ 3<sup>2<i>x</i>−2</sup> = 3<sup>3<i>x</i>−6</sup></div><div class=\"worked__math\">2<i>x</i> − 2 = 3<i>x</i> − 6 ⇒ <b><i>x</i> = 4</b></div>",
    },

    // ── t1-2-q007 · mcq · exam · SL · SL 1.7 · 5 marks
    "t1-2-q007": {
      // EN: <p>Solve the equation <span class="chem">3^{2x} - 6(3^x) - 27 = 0</span> for <span class="chem">x</span> ∈ ℝ.</p>
      stem: "<p>解 (Solve) 方程 <span class=\"chem\">3^{2x} - 6(3^x) - 27 = 0</span>，其中 <span class=\"chem\">x</span> ∈ ℝ。</p>",
      options: [
        // EN: <span class="chem">x = 2</span> only
        "只有 <span class=\"chem\">x = 2</span>",
        // EN: <span class="chem">x = 2</span> or <span class="chem">x = 1</span>
        "<span class=\"chem\">x = 2</span> 或 <span class=\"chem\">x = 1</span>",
        // EN: <span class="chem">x = 9</span> or <span class="chem">x = -3</span>
        "<span class=\"chem\">x = 9</span> 或 <span class=\"chem\">x = -3</span>",
        // EN: <span class="chem">x = 2</span> or <span class=\"chem">x = -1</span>
        "<span class=\"chem\">x = 2</span> 或 <span class=\"chem\">x = -1</span>",
      ],
      hints: [
        // EN: Substitute <span class="chem">u = 3^x</span> (with <span class="chem">u &gt; 0</span>) to get the quadratic <span class="chem">u^2 - 6u - 27 = 0</span>.
        "代換 <span class=\"chem\">u = 3^x</span>（其中 <span class=\"chem\">u &gt; 0</span>），得到二次方程 <span class=\"chem\">u^2 - 6u - 27 = 0</span>。",
        // EN: Factor as <span class="chem">(u - 9)(u + 3) = 0</span>, reject any root with <span class="chem">u &lt;= 0</span>, and solve <span class="chem">3^x = u</span>.
        "因式分解為 <span class=\"chem\">(u - 9)(u + 3) = 0</span>，捨去任何 <span class=\"chem\">u &lt;= 0</span> 的根，再解 <span class=\"chem\">3^x = u</span>。",
      ],
      // EN: <div class="worked__math">Let <i>u</i> = 3<sup><i>x</i></sup> (<i>u</i> &gt; 0): <i>u</i><sup>2</sup> − 6<i>u</i> − 27 = 0 ⇒ (<i>u</i> − 9)(<i>u</i> + 3) = 0 <b>[M1 A1]</b></div><div class="worked__math">Reject <i>u</i> = −3 since 3<sup><i>x</i></sup> &gt; 0 for all <i>x</i> ∈ ℝ. <b>[R1]</b></div><div class="worked__math">3<sup><i>x</i></sup> = 9 = 3<sup>2</sup> ⇒ <b><i>x</i> = 2</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">設 <i>u</i> = 3<sup><i>x</i></sup> (<i>u</i> &gt; 0)：<i>u</i><sup>2</sup> − 6<i>u</i> − 27 = 0 ⇒ (<i>u</i> − 9)(<i>u</i> + 3) = 0 <b>[M1 A1]</b></div><div class=\"worked__math\">捨去 <i>u</i> = −3，因為對所有 <i>x</i> ∈ ℝ 皆有 3<sup><i>x</i></sup> &gt; 0。<b>[R1]</b></div><div class=\"worked__math\">3<sup><i>x</i></sup> = 9 = 3<sup>2</sup> ⇒ <b><i>x</i> = 2</b> <b>[A1]</b></div>",
      misconception: {
        // EN (option B): The quadratic in <span class="chem">u = 3^x</span> gives <span class="chem">u = 9</span> or <span class="chem">u = -3</span>. Since <span class="chem">3^x &gt; 0</span> for all real <span class="chem">x</span>, <span class="chem">3^x = -3</span> has no real solution.
        "1": "關於 <span class=\"chem\">u = 3^x</span> 的二次方程給出 <span class=\"chem\">u = 9</span> 或 <span class=\"chem\">u = -3</span>。由於對所有實數 <span class=\"chem\">x</span> 皆有 <span class=\"chem\">3^x &gt; 0</span>，<span class=\"chem\">3^x = -3</span> 沒有實數解。",
        // EN (option C): Those are the values of <span class="chem">u = 3^x</span>, not <span class="chem">x</span>! You must still solve <span class="chem">3^x = 9</span>.
        "2": "這些是 <span class=\"chem\">u = 3^x</span> 的值，而不是 <span class=\"chem\">x</span>！你還必須解出 <span class=\"chem\">3^x = 9</span>。",
        // EN (option D): Notice <span class="chem">3^{-1} = 1/3</span>, not <span class="chem">-3</span>. An exponential <span class="chem">a^x</span> with <span class="chem">a &gt; 0</span> is never negative.
        "3": "留意 <span class=\"chem\">3^{-1} = 1/3</span>，而不是 <span class=\"chem\">-3</span>。當 <span class=\"chem\">a &gt; 0</span> 時，指數 <span class=\"chem\">a^x</span> 永不為負數。",
      },
    },

    // ── t1-2-q008 · numeric · exam · SL · SL 1.7 · 5 marks
    "t1-2-q008": {
      // EN: <p>Solve the logarithmic equation <span class="chem">log_2(x - 2) + log_2(x + 2) = 5</span> for <span class="chem">x</span>.</p>
      stem: "<p>解 (Solve) 對數方程 <span class=\"chem\">log_2(x - 2) + log_2(x + 2) = 5</span> 求 <span class=\"chem\">x</span>。</p>",
      hints: [
        // EN: Combine the left side using the product rule: <span class="chem">log_2((x - 2)(x + 2)) = 5</span>.
        "利用積法則合併左方：<span class=\"chem\">log_2((x - 2)(x + 2)) = 5</span>。",
        // EN: Rewrite in exponential form <span class="chem">x^2 - 4 = 2^5 = 32</span> and check the domain condition <span class="chem">x - 2 &gt; 0</span>.
        "改寫為指數形式 <span class=\"chem\">x^2 - 4 = 2^5 = 32</span>，並檢查定義域條件 <span class=\"chem\">x - 2 &gt; 0</span>。",
      ],
      // EN: <div class="worked__math">log<sub>2</sub>((<i>x</i> − 2)(<i>x</i> + 2)) = 5 ⇒ <i>x</i><sup>2</sup> − 4 = 2<sup>5</sup> = 32 <b>[M1 A1]</b></div><div class="worked__math"><i>x</i><sup>2</sup> = 36 ⇒ <i>x</i> = ±6 <b>[A1]</b></div><div class="worked__math">Since log<sub>2</sub>(<i>x</i> − 2) requires <i>x</i> &gt; 2, reject <i>x</i> = −6 and keep <b><i>x</i> = 6</b>. <b>[R1 A1]</b></div>
      solution: "<div class=\"worked__math\">log<sub>2</sub>((<i>x</i> − 2)(<i>x</i> + 2)) = 5 ⇒ <i>x</i><sup>2</sup> − 4 = 2<sup>5</sup> = 32 <b>[M1 A1]</b></div><div class=\"worked__math\"><i>x</i><sup>2</sup> = 36 ⇒ <i>x</i> = ±6 <b>[A1]</b></div><div class=\"worked__math\">由於 log<sub>2</sub>(<i>x</i> − 2) 要求 <i>x</i> &gt; 2，捨去 <i>x</i> = −6 並保留 <b><i>x</i> = 6</b>。<b>[R1 A1]</b></div>",
    },

    // ── t1-2-q009 · numeric · exam · SL · SL 1.7 · 6 marks
    "t1-2-q009": {
      // EN: <p>Given that <span class="chem">log_3(x) + 4 log_x(3) = 5</span>, find the larger of the two possible values of <span class="chem">x</span>.</p>
      stem: "<p>已知 <span class=\"chem\">log_3(x) + 4 log_x(3) = 5</span>，求 (Find) <span class=\"chem\">x</span> 的兩個可能值之中較大的一個。</p>",
      hints: [
        // EN: Use the change of base formula to rewrite <span class="chem">log_x(3) = log_3(3) / log_3(x) = 1 / log_3(x)</span>.
        "使用換底公式改寫 <span class=\"chem\">log_x(3) = log_3(3) / log_3(x) = 1 / log_3(x)</span>。",
        // EN: Let <span class="chem">u = log_3(x)</span> to form <span class="chem">u + 4/u = 5</span>, solve for <span class="chem">u</span>, and then compute <span class="chem">x = 3^u</span>.
        "設 <span class=\"chem\">u = log_3(x)</span> 組成 <span class=\"chem\">u + 4/u = 5</span>，解出 <span class=\"chem\">u</span>，再計算 <span class=\"chem\">x = 3^u</span>。",
      ],
      // EN: <div class="worked__math">Using change of base, log<sub><i>x</i></sub>(3) = <span class="frac"><span>1</span><span>log<sub>3</sub>(<i>x</i>)</span></span>. Let <i>u</i> = log<sub>3</sub>(<i>x</i>): <b>[M1]</b></div><div class="worked__math"><i>u</i> + <span class="frac"><span>4</span><span><i>u</i></span></span> = 5 ⇒ <i>u</i><sup>2</sup> − 5<i>u</i> + 4 = 0 ⇒ (<i>u</i> − 1)(<i>u</i> − 4) = 0 <b>[M1 A1]</b></div><div class="worked__math">log<sub>3</sub>(<i>x</i>) = 1 ⇒ <i>x</i> = 3, or log<sub>3</sub>(<i>x</i>) = 4 ⇒ <i>x</i> = 3<sup>4</sup> = <b>81</b> <b>[A1 A1]</b></div>
      solution: "<div class=\"worked__math\">利用換底公式，log<sub><i>x</i></sub>(3) = <span class=\"frac\"><span>1</span><span>log<sub>3</sub>(<i>x</i>)</span></span>。設 <i>u</i> = log<sub>3</sub>(<i>x</i>)：<b>[M1]</b></div><div class=\"worked__math\"><i>u</i> + <span class=\"frac\"><span>4</span><span><i>u</i></span></span> = 5 ⇒ <i>u</i><sup>2</sup> − 5<i>u</i> + 4 = 0 ⇒ (<i>u</i> − 1)(<i>u</i> − 4) = 0 <b>[M1 A1]</b></div><div class=\"worked__math\">log<sub>3</sub>(<i>x</i>) = 1 ⇒ <i>x</i> = 3，或 log<sub>3</sub>(<i>x</i>) = 4 ⇒ <i>x</i> = 3<sup>4</sup> = <b>81</b> <b>[A1 A1]</b></div>",
    },

    // ── t1-2-q010 · numeric · exam · SL · SL 1.9 · 5 marks
    "t1-2-q010": {
      // EN: <p>Find the constant term (the term independent of <span class="chem">x</span>) in the expansion of <span class="chem">(2x^2 - 1/x)^6</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">(2x^2 - 1/x)^6</span> 展開式中的常數項（即與 <span class=\"chem\">x</span> 無關的項）。</p>",
      hints: [
        // EN: Write the general term: <span class="chem">T_{r+1} = 6Cr (2x^2)^{6-r} (-x^{-1})^r = 6Cr 2^{6-r} (-1)^r x^{12-3r}</span>.
        "寫出通項：<span class=\"chem\">T_{r+1} = 6Cr (2x^2)^{6-r} (-x^{-1})^r = 6Cr 2^{6-r} (-1)^r x^{12-3r}</span>。",
        // EN: Set the power of <span class="chem">x</span> equal to zero (<span class="chem">12 - 3r = 0</span>) to find <span class="chem">r = 4</span>, then substitute <span class="chem">r = 4</span>.
        "令 <span class=\"chem\">x</span> 的次方等於零（<span class=\"chem\">12 - 3r = 0</span>）求得 <span class=\"chem\">r = 4</span>，再代入 <span class=\"chem\">r = 4</span>。",
      ],
      // EN: <div class="worked__math"><i>T</i><sub><i>r</i>+1</sub> = <sup>6</sup>C<sub><i>r</i></sub> (2<i>x</i><sup>2</sup>)<sup>6−<i>r</i></sup> (−<i>x</i><sup>−1</sup>)<sup><i>r</i></sup> = <sup>6</sup>C<sub><i>r</i></sub> 2<sup>6−<i>r</i></sup> (−1)<sup><i>r</i></sup> <i>x</i><sup>12−3<i>r</i></sup> <b>[M1 A1]</b></div><div class="worked__math">Constant term requires 12 − 3<i>r</i> = 0 ⇒ <i>r</i> = 4 <b>[M1 A1]</b></div><div class="worked__math"><sup>6</sup>C<sub>4</sub> × 2<sup>2</sup> × (−1)<sup>4</sup> = 15 × 4 × 1 = <b>60</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>T</i><sub><i>r</i>+1</sub> = <sup>6</sup>C<sub><i>r</i></sub> (2<i>x</i><sup>2</sup>)<sup>6−<i>r</i></sup> (−<i>x</i><sup>−1</sup>)<sup><i>r</i></sup> = <sup>6</sup>C<sub><i>r</i></sub> 2<sup>6−<i>r</i></sup> (−1)<sup><i>r</i></sup> <i>x</i><sup>12−3<i>r</i></sup> <b>[M1 A1]</b></div><div class=\"worked__math\">常數項要求 12 − 3<i>r</i> = 0 ⇒ <i>r</i> = 4 <b>[M1 A1]</b></div><div class=\"worked__math\"><sup>6</sup>C<sub>4</sub> × 2<sup>2</sup> × (−1)<sup>4</sup> = 15 × 4 × 1 = <b>60</b> <b>[A1]</b></div>",
    },

    // ── t1-2-q011 · numeric · exam · SL · SL 1.9 · 5 marks
    "t1-2-q011": {
      // EN: <p>Find the coefficient of <span class="chem">x^2</span> in the expansion of <span class="chem">(1 - 3x)(2 + x)^4</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">(1 - 3x)(2 + x)^4</span> 展開式中 <span class=\"chem\">x^2</span> 的係數。</p>",
      hints: [
        // EN: Find the first three terms (up to <span class="chem">x^2</span>) in the expansion of <span class="chem">(2 + x)^4</span>.
        "先找出 <span class=\"chem\">(2 + x)^4</span> 展開式的首三項（直至 <span class=\"chem\">x^2</span>）。",
        // EN: Multiply <span class="chem">(1 - 3x)(16 + 32x + 24x^2 + ...)</span> and collect the two products that produce <span class="chem">x^2</span>.
        "把 <span class=\"chem\">(1 - 3x)(16 + 32x + 24x^2 + ...)</span> 展開，並合併得出 <span class=\"chem\">x^2</span> 的兩組乘積。",
      ],
      // EN: <div class="worked__math">(2 + <i>x</i>)<sup>4</sup> = 2<sup>4</sup> + <sup>4</sup>C<sub>1</sub>(2<sup>3</sup>)<i>x</i> + <sup>4</sup>C<sub>2</sub>(2<sup>2</sup>)<i>x</i><sup>2</sup> + … = 16 + 32<i>x</i> + 24<i>x</i><sup>2</sup> + … <b>[M1 A1]</b></div><div class="worked__math">Coeff of <i>x</i><sup>2</sup> = (1)(24) + (−3)(32) = 24 − 96 = <b>−72</b> <b>[M1 A2]</b></div>
      solution: "<div class=\"worked__math\">(2 + <i>x</i>)<sup>4</sup> = 2<sup>4</sup> + <sup>4</sup>C<sub>1</sub>(2<sup>3</sup>)<i>x</i> + <sup>4</sup>C<sub>2</sub>(2<sup>2</sup>)<i>x</i><sup>2</sup> + … = 16 + 32<i>x</i> + 24<i>x</i><sup>2</sup> + … <b>[M1 A1]</b></div><div class=\"worked__math\"><i>x</i><sup>2</sup> 的係數 = (1)(24) + (−3)(32) = 24 − 96 = <b>−72</b> <b>[M1 A2]</b></div>",
    },

    // ── t1-2-q012 · order · exam · SL · SL 1.9 · 4 marks
    "t1-2-q012": {
      // EN: <p>Arrange the steps in order to find the term in <span class="chem">x^3</span> in the expansion of <span class="chem">(x^2 + 2/x)^6</span>.</p>
      stem: "<p>把下列步驟按正確順序排列，以求 <span class=\"chem\">(x^2 + 2/x)^6</span> 展開式中的 <span class=\"chem\">x^3</span> 項。</p>",
      options: [
        // EN: Write the general term <span class="chem">T_{r+1} = 6Cr (x^2)^{6-r} (2x^{-1})^r</span>.
        "寫出通項 <span class=\"chem\">T_{r+1} = 6Cr (x^2)^{6-r} (2x^{-1})^r</span>。",
        // EN: Separate the numerical coefficients and combine the powers of <span class="chem">x</span> to get <span class="chem">6Cr 2^r x^{12-3r}</span>.
        "分開數字係數並合併 <span class=\"chem\">x</span> 的冪，得到 <span class=\"chem\">6Cr 2^r x^{12-3r}</span>。",
        // EN: Equate the exponent of <span class="chem">x</span> to the target power: <span class="chem">12 - 3r = 3</span>, which gives <span class="chem">r = 3</span>.
        "令 <span class=\"chem\">x</span> 的指數等於目標次方：<span class=\"chem\">12 - 3r = 3</span>，解得 <span class=\"chem\">r = 3</span>。",
        // EN: Substitute <span class="chem">r = 3</span> to obtain <span class="chem">6C3 × 2^3 x^3 = 20 × 8 x^3 = 160x^3</span>.
        "代入 <span class=\"chem\">r = 3</span>，求得 <span class=\"chem\">6C3 × 2^3 x^3 = 20 × 8 x^3 = 160x^3</span>。",
      ],
      hints: [
        // EN: Always start from the general term formula <span class="chem">T_{r+1} = nCr a^{n-r} b^r</span>.
        "每次都由通項公式 <span class=\"chem\">T_{r+1} = nCr a^{n-r} b^r</span> 開始。",
        // EN: Simplify the exponent of <span class="chem">x</span> into a single linear expression in <span class="chem">r</span> before solving for <span class=\"chem\">r</span>.
        "先將 <span class=\"chem\">x</span> 的指數化簡為關於 <span class=\"chem\">r</span> 的單一線性表式，再解出 <span class=\"chem\">r</span>。",
      ],
      // EN: <p>Writing the general term, combining exponents into <span class="chem">x^{12-3r}</span>, solving <span class="chem">12 - 3r = 3 =&gt; r = 3</span>, and evaluating <span class="chem">6C3 × 2^3 = 160</span> gives <span class="chem">160x^3</span>.</p>
      solution: "<p>寫出通項、將指數合併為 <span class=\"chem\">x^{12-3r}</span>、解出 <span class=\"chem\">12 - 3r = 3 =&gt; r = 3</span>，最後計算 <span class=\"chem\">6C3 × 2^3 = 160</span>，得出 <span class=\"chem\">160x^3</span>。</p>",
    },

    // ── t1-2-q013 · numeric · exam · SL · SL 1.9 · 5 marks
    "t1-2-q013": {
      // EN: <p>In the expansion of <span class="chem">(1 + kx)^7</span>, where <span class="chem">k &gt; 0</span>, the coefficient of <span class="chem">x^3</span> is equal to <span class="chem">5/3</span> times the coefficient of <span class="chem">x^2</span>. Find the exact value of <span class="chem">k</span>.</p>
      stem: "<p>在 <span class=\"chem\">(1 + kx)^7</span>（其中 <span class=\"chem\">k &gt; 0</span>）的展開式中，<span class=\"chem\">x^3</span> 的係數等於 <span class=\"chem\">x^2</span> 係數的 <span class=\"chem\">5/3</span> 倍。求 (Find) <span class=\"chem\">k</span> 的準確值。</p>",
      hints: [
        // EN: Write the coefficient of <span class="chem">x^3</span> as <span class="chem">7C3 k^3 = 35k^3</span> and the coefficient of <span class="chem">x^2</span> as <span class="chem">7C2 k^2 = 21k^2</span>.
        "寫出 <span class=\"chem\">x^3</span> 的係數為 <span class=\"chem\">7C3 k^3 = 35k^3</span>，以及 <span class=\"chem\">x^2</span> 的係數為 <span class=\"chem\">7C2 k^2 = 21k^2</span>。",
        // EN: Solve <span class="chem">35k^3 = (5/3)(21k^2)</span> for <span class="chem">k &gt; 0</span>.
        "解 <span class=\"chem\">35k^3 = (5/3)(21k^2)</span> 求 <span class=\"chem\">k &gt; 0</span>。",
      ],
      // EN: <div class="worked__math"><sup>7</sup>C<sub>3</sub> <i>k</i><sup>3</sup> = <span class="frac"><span>5</span><span>3</span></span> (<sup>7</sup>C<sub>2</sub> <i>k</i><sup>2</sup>) ⇒ 35<i>k</i><sup>3</sup> = <span class="frac"><span>5</span><span>3</span></span>(21<i>k</i><sup>2</sup>) = 35<i>k</i><sup>2</sup> <b>[M1 A1]</b></div><div class="worked__math">Since <i>k</i> &gt; 0, divide by 35<i>k</i><sup>2</sup> to get <b><i>k</i> = 1</b>. <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><sup>7</sup>C<sub>3</sub> <i>k</i><sup>3</sup> = <span class=\"frac\"><span>5</span><span>3</span></span> (<sup>7</sup>C<sub>2</sub> <i>k</i><sup>2</sup>) ⇒ 35<i>k</i><sup>3</sup> = <span class=\"frac\"><span>5</span><span>3</span></span>(21<i>k</i><sup>2</sup>) = 35<i>k</i><sup>2</sup> <b>[M1 A1]</b></div><div class=\"worked__math\">因為 <i>k</i> &gt; 0，兩邊同除以 35<i>k</i><sup>2</sup> 得 <b><i>k</i> = 1</b>。<b>[A1]</b></div>",
    },

    // ── t1-2-q014 · short · exam · SL · SL 1.7 · 6 marks
    "t1-2-q014": {
      // EN: <p>Solve the simultaneous equations for <span class="chem">x &gt; 0</span> and <span class="chem">y &gt; 0</span>:<br><span class="chem">log_2(x) + log_2(y) = 4</span><br><span class="chem">log_2(x^2) - log_2(y) = 5</span></p>
      stem: "<p>解 (Solve) 聯立方程（其中 <span class=\"chem\">x &gt; 0</span> 及 <span class=\"chem\">y &gt; 0</span>）：<br><span class=\"chem\">log_2(x) + log_2(y) = 4</span><br><span class=\"chem\">log_2(x^2) - log_2(y) = 5</span></p>",
      hints: [
        // EN: Use the power law <span class="chem">log_2(x^2) = 2 log_2(x)</span> on the second equation.
        "對第二條方程應用冪法則 <span class=\"chem\">log_2(x^2) = 2 log_2(x)</span>。",
        // EN: Add the two equations together to eliminate <span class="chem">log_2(y)</span> immediately!
        "把兩條方程相加，即可立即消去 <span class=\"chem\">log_2(y)</span>！",
      ],
      // EN: <p>Adding <span class="chem">log_2(x) + log_2(y) = 4</span> and <span class="chem">2 log_2(x) - log_2(y) = 5</span> gives <span class="chem">3 log_2(x) = 9 =&gt; log_2(x) = 3 =&gt; x = 8</span>, and hence <span class="chem">log_2(y) = 1 =&gt; y = 2</span>.</p>
      solution: "<p>把 <span class=\"chem\">log_2(x) + log_2(y) = 4</span> 與 <span class=\"chem\">2 log_2(x) - log_2(y) = 5</span> 相加，得 <span class=\"chem\">3 log_2(x) = 9 =&gt; log_2(x) = 3 =&gt; x = 8</span>，由此得 <span class=\"chem\">log_2(y) = 1 =&gt; y = 2</span>。</p>",
      // EN: <div class="worked__math">Rewrite second equation as 2 log<sub>2</sub>(<i>x</i>) − log<sub>2</sub>(<i>y</i>) = 5.</div><div class="worked__math">Add the two equations: 3 log<sub>2</sub>(<i>x</i>) = 9 ⇒ log<sub>2</sub>(<i>x</i>) = 3 ⇒ <b><i>x</i> = 8</b>.</div><div class="worked__math">Substitute into first: 3 + log<sub>2</sub>(<i>y</i>) = 4 ⇒ log<sub>2</sub>(<i>y</i>) = 1 ⇒ <b><i>y</i> = 2</b>.</div>
      answer: "<div class=\"worked__math\">將第二條方程改寫為 2 log<sub>2</sub>(<i>x</i>) − log<sub>2</sub>(<i>y</i>) = 5。</div><div class=\"worked__math\">兩式相加：3 log<sub>2</sub>(<i>x</i>) = 9 ⇒ log<sub>2</sub>(<i>x</i>) = 3 ⇒ <b><i>x</i> = 8</b>。</div><div class=\"worked__math\">代入第一式：3 + log<sub>2</sub>(<i>y</i>) = 4 ⇒ log<sub>2</sub>(<i>y</i>) = 1 ⇒ <b><i>y</i> = 2</b>。</div>",
      markscheme: [
        // EN: M1: Applies power law log_2(x^2) = 2 log_2(x) (or converts both equations to xy = 16 and x^2/y = 32).
        "M1：應用冪法則 log_2(x^2) = 2 log_2(x)（或把兩式轉化為 xy = 16 與 x^2/y = 32）。",
        // EN: M1: Eliminates log_2(y) by adding the equations to obtain 3 log_2(x) = 9 (or multiplies xy × (x^2/y) = x^3 = 512).
        "M1：將兩式相加消去 log_2(y) 得 3 log_2(x) = 9（或相乘得 xy × (x^2/y) = x^3 = 512）。",
        // EN: A1: Finds log_2(x) = 3.
        "A1：求得 log_2(x) = 3。",
        // EN: A1: Deduces x = 2^3 = 8.
        "A1：推斷 x = 2^3 = 8。",
        // EN: M1 A1: Substitutes back to find log_2(y) = 1 and hence y = 2.
        "M1 A1：代回求得 log_2(y) = 1，從而得出 y = 2。",
      ],
    },

    // ── t1-2-q015 · numeric · challenge · SL · SL 1.7 · 6 marks
    "t1-2-q015": {
      // EN: <p>The terms <span class="chem">log_2(p)</span>, <span class="chem">log_4(p)</span>, <span class="chem">log_8(p)</span>, ... are evaluated for <span class="chem">p = 64</span>. Calculate the exact value of the sum <span class="chem">log_2(64) + log_4(64) + log_8(64) + log_{16}(64)</span>.</p>
      stem: "<p>當 <span class=\"chem\">p = 64</span> 時，計算各項 <span class=\"chem\">log_2(p)</span>、<span class=\"chem\">log_4(p)</span>、<span class=\"chem\">log_8(p)</span>…… 的值。計算 (Calculate) 總和 <span class=\"chem\">log_2(64) + log_4(64) + log_8(64) + log_{16}(64)</span> 的準確值。</p>",
      hints: [
        // EN: Write <span class="chem">64 = 2^6</span> and convert each base to a power of 2: <span class="chem">4 = 2^2, 8 = 2^3, 16 = 2^4</span>.
        "把 <span class=\"chem\">64 = 2^6</span> 寫出，並把每個底數轉化為 2 的冪：<span class=\"chem\">4 = 2^2, 8 = 2^3, 16 = 2^4</span>。",
        // EN: Use <span class="chem">log_{2^k}(2^6) = 6 / k</span> for <span class=\"chem\">k = 1, 2, 3, 4</span>.
        "對 <span class=\"chem\">k = 1, 2, 3, 4</span> 使用 <span class=\"chem\">log_{2^k}(2^6) = 6 / k</span>。",
      ],
      // EN: <div class="worked__math">Since 64 = 2<sup>6</sup> and log<sub>2<sup><i>k</i></sup></sub>(2<sup>6</sup>) = <span class="frac"><span>6</span><span><i>k</i></span></span>: <b>[M1 A1]</b></div><div class="worked__math">Sum = <span class="frac"><span>6</span><span>1</span></span> + <span class="frac"><span>6</span><span>2</span></span> + <span class="frac"><span>6</span><span>3</span></span> + <span class="frac"><span>6</span><span>4</span></span> = 6 + 3 + 2 + 1.5 = <b>12.5</b> (or <b>25/2</b>) <b>[M1 A1]</b></div>
      solution: "<div class=\"worked__math\">因為 64 = 2<sup>6</sup> 且 log<sub>2<sup><i>k</i></sup></sub>(2<sup>6</sup>) = <span class=\"frac\"><span>6</span><span><i>k</i></span></span>：<b>[M1 A1]</b></div><div class=\"worked__math\">總和 = <span class=\"frac\"><span>6</span><span>1</span></span> + <span class=\"frac\"><span>6</span><span>2</span></span> + <span class=\"frac\"><span>6</span><span>3</span></span> + <span class=\"frac\"><span>6</span><span>4</span></span> = 6 + 3 + 2 + 1.5 = <b>12.5</b>（或 <b>25/2</b>）<b>[M1 A1]</b></div>",
      // EN: 25/2 (or 12.5)
      answerDisplay: "25/2（或 12.5）",
    },

    // ── t1-2-q016 · numeric · challenge · SL · SL 1.9 · 6 marks
    "t1-2-q016": {
      // EN: <p>In the expansion of <span class="chem">(1 + x)^n</span>, where <span class="chem">n &gt;= 3</span> is a positive integer, the coefficients of <span class="chem">x</span>, <span class="chem">x^2</span>, and <span class="chem">x^3</span> form an arithmetic sequence. Find the value of <span class="chem">n</span>.</p>
      stem: "<p>在 <span class=\"chem\">(1 + x)^n</span>（其中 <span class=\"chem\">n &gt;= 3</span> 為正整數）的展開式中，<span class=\"chem\">x</span>、<span class=\"chem\">x^2</span> 及 <span class=\"chem\">x^3</span> 的係數構成一個等差數列。求 (Find) <span class=\"chem\">n</span> 的值。</p>",
      hints: [
        // EN: Write out the three coefficients: <span class="chem">nC1 = n</span>, <span class="chem">nC2 = n(n-1)/2</span>, and <span class="chem">nC3 = n(n-1)(n-2)/6</span>.
        "寫出三個係數：<span class=\"chem\">nC1 = n</span>、<span class=\"chem\">nC2 = n(n-1)/2</span> 及 <span class=\"chem\">nC3 = n(n-1)(n-2)/6</span>。",
        // EN: Use the arithmetic condition <span class="chem">2(nC2) = nC1 + nC3</span> and divide through by <span class="chem">n &gt; 0</span>.
        "利用等差數列條件 <span class=\"chem\">2(nC2) = nC1 + nC3</span>，並兩邊同除以 <span class=\"chem\">n &gt; 0</span>。",
      ],
      // EN: <div class="worked__math">2 × <span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = <i>n</i> + <span class="frac"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6</span></span> <b>[M1 A1]</b></div><div class="worked__math">Divide by <i>n</i> &gt; 0 and multiply by 6: 6(<i>n</i> − 1) = 6 + (<i>n</i><sup>2</sup> − 3<i>n</i> + 2) <b>[M1 A1]</b></div><div class="worked__math"><i>n</i><sup>2</sup> − 9<i>n</i> + 14 = 0 ⇒ (<i>n</i> − 2)(<i>n</i> − 7) = 0. Since <i>n</i> ≥ 3, <b><i>n</i> = 7</b>. <b>[M1 A1]</b></div>
      solution: "<div class=\"worked__math\">2 × <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = <i>n</i> + <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6</span></span> <b>[M1 A1]</b></div><div class=\"worked__math\">除以 <i>n</i> &gt; 0 並乘以 6：6(<i>n</i> − 1) = 6 + (<i>n</i><sup>2</sup> − 3<i>n</i> + 2) <b>[M1 A1]</b></div><div class=\"worked__math\"><i>n</i><sup>2</sup> − 9<i>n</i> + 14 = 0 ⇒ (<i>n</i> − 2)(<i>n</i> − 7) = 0。因為 <i>n</i> ≥ 3，所以 <b><i>n</i> = 7</b>。<b>[M1 A1]</b></div>",
    },

    // ── t1-2-q017 · short · challenge · SL · SL 1.7 · 7 marks
    "t1-2-q017": {
      // EN: <p>Consider the equation <span class="chem">e^{2x} - 2k e^x + (k + 2) = 0</span>, where <span class="chem">k</span> ∈ ℝ.<br>(a) Find the set of values of <span class="chem">k</span> for which the quadratic in <span class="chem">u = e^x</span> has two distinct real roots. <strong>[3]</strong><br>(b) Hence find the exact set of values of <span class="chem">k</span> for which the original equation has <strong>two distinct real solutions for <span class="chem">x</span></strong>. <strong>[4]</strong></p>
      stem: "<p>考慮方程 <span class=\"chem\">e^{2x} - 2k e^x + (k + 2) = 0</span>，其中 <span class=\"chem\">k</span> ∈ ℝ。<br>(a) 求 (Find) 使關於 <span class=\"chem\">u = e^x</span> 的二次方程有兩個相異實根的 <span class=\"chem\">k</span> 值範圍。<strong>[3]</strong><br>(b) 由此求 (Hence find) 使原方程對於 <span class=\"chem\">x</span> 有<strong>兩個相異實數解</strong>的準確 <span class=\"chem\">k</span> 值範圍。<strong>[4]</strong></p>",
      hints: [
        // EN: For part (a), set the discriminant <span class="chem">Δ = (-2k)^2 - 4(1)(k+2) &gt; 0</span>.
        "在 (a) 部中，設判別式 <span class=\"chem\">Δ = (-2k)^2 - 4(1)(k+2) &gt; 0</span>。",
        // EN: For part (b), remember that a root <span class="chem">u</span> only produces a real <span class="chem">x = ln u</span> if <span class="chem">u &gt; 0</span>! When are both roots of <span class="chem">u^2 - 2ku + (k+2) = 0</span> positive?
        "在 (b) 部中，緊記只有當 <span class=\"chem\">u &gt; 0</span> 時，根 <span class=\"chem\">u</span> 才會產生實數解 <span class=\"chem\">x = ln u</span>！<span class=\"chem\">u^2 - 2ku + (k+2) = 0</span> 何時兩個根皆為正數？",
      ],
      // EN: <p>When <span class="chem">k &lt; -1</span>, the sum of the two <span class="chem">u</span>-roots is <span class="chem">2k &lt; 0</span>, so at least one root is negative and cannot equal <span class="chem">e^x</span>. Only <span class="chem">k &gt; 2</span> makes <span class="chem">Δ &gt; 0</span>, <span class="chem">u_1 + u_2 = 2k &gt; 0</span>, and <span class="chem">u_1 u_2 = k + 2 &gt; 0</span>.</p>
      solution: "<p>當 <span class=\"chem\">k &lt; -1</span> 時，兩個 <span class=\"chem\">u</span> 根之和為 <span class=\"chem\">2k &lt; 0</span>，故至少有一個根為負數而不能等於 <span class=\"chem\">e^x</span>。只有 <span class=\"chem\">k &gt; 2</span> 才能同時使 <span class=\"chem\">Δ &gt; 0</span>、<span class=\"chem\">u_1 + u_2 = 2k &gt; 0</span> 及 <span class=\"chem\">u_1 u_2 = k + 2 &gt; 0</span>。</p>",
      // EN: <div class="worked__math">(a) Let <i>u</i> = e<sup><i>x</i></sup>: <i>u</i><sup>2</sup> − 2<i>k u</i> + (<i>k</i> + 2) = 0. Δ = 4<i>k</i><sup>2</sup> − 4(<i>k</i> + 2) &gt; 0 ⇒ <i>k</i><sup>2</sup> − <i>k</i> − 2 &gt; 0 ⇒ (<i>k</i> − 2)(<i>k</i> + 1) &gt; 0 ⇒ <b><i>k</i> &lt; −1 or <i>k</i> &gt; 2</b>.</div><div class="worked__math">(b) For two real solutions in <i>x</i>, BOTH roots <i>u</i><sub>1</sub>, <i>u</i><sub>2</sub> must be strictly positive (<i>u</i> = e<sup><i>x</i></sup> &gt; 0).</div><div class="worked__math">Sum of roots 2<i>k</i> &gt; 0 ⇒ <i>k</i> &gt; 0, and product of roots <i>k</i> + 2 &gt; 0 ⇒ <i>k</i> &gt; −2. Intersecting with (a) gives <b><i>k</i> &gt; 2</b>.</div>
      answer: "<div class=\"worked__math\">(a) 設 <i>u</i> = e<sup><i>x</i></sup>：<i>u</i><sup>2</sup> − 2<i>k u</i> + (<i>k</i> + 2) = 0。Δ = 4<i>k</i><sup>2</sup> − 4(<i>k</i> + 2) &gt; 0 ⇒ <i>k</i><sup>2</sup> − <i>k</i> − 2 &gt; 0 ⇒ (<i>k</i> − 2)(<i>k</i> + 1) &gt; 0 ⇒ <b><i>k</i> &lt; −1 或 <i>k</i> &gt; 2</b>。</div><div class=\"worked__math\">(b) 若要 <i>x</i> 有兩個實數解，兩個根 <i>u</i><sub>1</sub>, <i>u</i><sub>2</sub> 必須同時嚴格大於零（<i>u</i> = e<sup><i>x</i></sup> &gt; 0）。</div><div class=\"worked__math\">根的和 2<i>k</i> &gt; 0 ⇒ <i>k</i> &gt; 0，且根的積 <i>k</i> + 2 &gt; 0 ⇒ <i>k</i> &gt; −2。與 (a) 取交集得 <b><i>k</i> &gt; 2</b>。</div>",
      markscheme: [
        // EN: M1: Substitutes u = e^x and sets discriminant Δ = (-2k)^2 - 4(1)(k + 2) > 0.
        "M1：代換 u = e^x 並設判別式 Δ = (-2k)^2 - 4(1)(k + 2) > 0。",
        // EN: A1: Simplifies to k^2 - k - 2 > 0 or (k - 2)(k + 1) > 0.
        "A1：化簡為 k^2 - k - 2 > 0 或 (k - 2)(k + 1) > 0。",
        // EN: A1: Deduces k < -1 or k > 2.
        "A1：推斷 k < -1 或 k > 2。",
        // EN: R1: Recognizes that since u = e^x > 0, both roots u_1 and u_2 must be strictly positive.
        "R1：認出由於 u = e^x > 0，兩個根 u_1 和 u_2 必須同時嚴格大於零。",
        // EN: M1: Requires sum of roots 2k > 0 and product of roots k + 2 > 0 (or tests vertex u = k > 0 and f(0) = k + 2 > 0).
        "M1：要求根的和 2k > 0 及根的積 k + 2 > 0（或檢驗頂點 u = k > 0 及 f(0) = k + 2 > 0）。",
        // EN: A2: Rejects k < -1 and states the final set k > 2.
        "A2：捨去 k < -1，寫出最終範圍 k > 2。",
      ],
    },

  }
});
