/* t1-2.q — zh-Hant question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't1-2.q', {
  questions: {

    // ── t1-2-q001 · numeric · foundation · SL · SL 1.7 · 2 marks
    "t1-2-q001": {
      // EN: <p>Evaluate <span class="chem">27^{-2/3}</span>, giving your answer as an exact fraction.</p>
      stem: "<p>求 (Evaluate) <span class=\"chem\">27^{-2/3}</span> 的值，以準確分數表示。</p>",
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
        // EN: Write the general term <span class="chem">T_{r+1} = ^5C_r (2)^{5-r} x^r</span>.
        "寫出通項 <span class=\"chem\">T_{r+1} = ^5C_r (2)^{5-r} x^r</span>。",
        // EN: Substitute <span class="chem">r = 3</span> and compute <span class="chem">^5C_3 × 2^2</span>.
        "代入 <span class=\"chem\">r = 3</span> 並計算 <span class=\"chem\">^5C_3 × 2^2</span>。",
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

    // ── t1-2-q006 · numeric · foundation · SL · SL 1.7 · 3 marks
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

    // ── t1-2-q007 · numeric · exam · SL · SL 1.7 · 4 marks
    "t1-2-q007": {
      // EN: <p>Solve the equation <span class="chem">3^{2x} - 6(3^x) - 27 = 0</span> for <span class="chem">x</span> ∈ ℝ.</p>
      stem: "<p>解 (Solve) 方程 <span class=\"chem\">3^{2x} - 6(3^x) - 27 = 0</span>，其中 <span class=\"chem\">x</span> ∈ ℝ。</p>",
      hints: [
        // EN: Substitute <span class="chem">u = 3^x</span> (with <span class="chem">u &gt; 0</span>) to get the quadratic <span class="chem">u^2 - 6u - 27 = 0</span>.
        "代換 <span class=\"chem\">u = 3^x</span>（其中 <span class=\"chem\">u &gt; 0</span>），得到二次方程 <span class=\"chem\">u^2 - 6u - 27 = 0</span>。",
        // EN: Factor as <span class="chem">(u - 9)(u + 3) = 0</span>, reject any root with <span class="chem">u &lt;= 0</span>, and solve <span class="chem">3^x = u</span>.
        "因式分解為 <span class=\"chem\">(u - 9)(u + 3) = 0</span>，捨去任何 <span class=\"chem\">u &lt;= 0</span> 的根，再解 <span class=\"chem\">3^x = u</span>。",
      ],
      // EN: <div class="worked__math">Let <i>u</i> = 3<sup><i>x</i></sup> (<i>u</i> &gt; 0): <i>u</i><sup>2</sup> − 6<i>u</i> − 27 = 0 ⇒ (<i>u</i> − 9)(<i>u</i> + 3) = 0 <b>[M1 A1]</b></div><div class="worked__math">Reject <i>u</i> = −3 since 3<sup><i>x</i></sup> &gt; 0 for all <i>x</i> ∈ ℝ. <b>[R1]</b></div><div class="worked__math">3<sup><i>x</i></sup> = 9 = 3<sup>2</sup> ⇒ <b><i>x</i> = 2</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">設 <i>u</i> = 3<sup><i>x</i></sup> (<i>u</i> &gt; 0)：<i>u</i><sup>2</sup> − 6<i>u</i> − 27 = 0 ⇒ (<i>u</i> − 9)(<i>u</i> + 3) = 0 <b>[M1 A1]</b></div><div class=\"worked__math\">捨去 <i>u</i> = −3，因為對所有 <i>x</i> ∈ ℝ 皆有 3<sup><i>x</i></sup> &gt; 0。<b>[R1]</b></div><div class=\"worked__math\">3<sup><i>x</i></sup> = 9 = 3<sup>2</sup> ⇒ <b><i>x</i> = 2</b> <b>[A1]</b></div>",
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

    // ── t1-2-q009 · numeric · exam · SL · SL 1.7 · 5 marks
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
        // EN: Write the general term: <span class="chem">T_{r+1} = ^6C_r (2x^2)^{6-r} (-x^{-1})^r = ^6C_r 2^{6-r} (-1)^r x^{12-3r}</span>.
        "寫出通項：<span class=\"chem\">T_{r+1} = ^6C_r (2x^2)^{6-r} (-x^{-1})^r = ^6C_r 2^{6-r} (-1)^r x^{12-3r}</span>。",
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
        // EN: Write the general term <span class="chem">T_{r+1} = ^6C_r (x^2)^{6-r} (2x^{-1})^r</span>.
        "寫出通項 <span class=\"chem\">T_{r+1} = ^6C_r (x^2)^{6-r} (2x^{-1})^r</span>。",
        // EN: Separate the numerical coefficients and combine the powers of <span class="chem">x</span> to get <span class="chem">^6C_r 2^r x^{12-3r}</span>.
        "分開數字係數並合併 <span class=\"chem\">x</span> 的冪，得到 <span class=\"chem\">^6C_r 2^r x^{12-3r}</span>。",
        // EN: Equate the exponent of <span class="chem">x</span> to the target power: <span class="chem">12 - 3r = 3</span>, which gives <span class="chem">r = 3</span>.
        "令 <span class=\"chem\">x</span> 的指數等於目標次方：<span class=\"chem\">12 - 3r = 3</span>，解得 <span class=\"chem\">r = 3</span>。",
        // EN: Substitute <span class="chem">r = 3</span> to obtain <span class="chem">^6C_3 × 2^3 x^3 = 20 × 8 x^3 = 160x^3</span>.
        "代入 <span class=\"chem\">r = 3</span>，求得 <span class=\"chem\">^6C_3 × 2^3 x^3 = 20 × 8 x^3 = 160x^3</span>。",
      ],
      hints: [
        // EN: Always start from the general term formula <span class="chem">T_{r+1} = ^nC_r a^{n-r} b^r</span>.
        "每次都由通項公式 <span class=\"chem\">T_{r+1} = ^nC_r a^{n-r} b^r</span> 開始。",
        // EN: Simplify the exponent of <span class="chem">x</span> into a single linear expression in <span class="chem">r</span> before solving for <span class=\"chem\">r</span>.
        "先將 <span class=\"chem\">x</span> 的指數化簡為關於 <span class=\"chem\">r</span> 的單一線性表式，再解出 <span class=\"chem\">r</span>。",
      ],
      // EN: <p>Writing the general term, combining exponents into <span class="chem">x^{12-3r}</span>, solving <span class="chem">12 - 3r = 3 =&gt; r = 3</span>, and evaluating <span class="chem">^6C_3 × 2^3 = 160</span> gives <span class="chem">160x^3</span>.</p>
      solution: "<p>寫出通項、將指數合併為 <span class=\"chem\">x^{12-3r}</span>、解出 <span class=\"chem\">12 - 3r = 3 =&gt; r = 3</span>，最後計算 <span class=\"chem\">^6C_3 × 2^3 = 160</span>，得出 <span class=\"chem\">160x^3</span>。</p>",
    },

    // ── t1-2-q013 · numeric · exam · SL · SL 1.9 · 3 marks
    "t1-2-q013": {
      // EN: <p>In the expansion of <span class="chem">(1 + kx)^7</span>, where <span class="chem">k &gt; 0</span>, the coefficient of <span class="chem">x^3</span> is equal to <span class="chem">5/3</span> times the coefficient of <span class="chem">x^2</span>. Find the exact value of <span class="chem">k</span>.</p>
      stem: "<p>在 <span class=\"chem\">(1 + kx)^7</span>（其中 <span class=\"chem\">k &gt; 0</span>）的展開式中，<span class=\"chem\">x^3</span> 的係數等於 <span class=\"chem\">x^2</span> 係數的 <span class=\"chem\">5/3</span> 倍。求 (Find) <span class=\"chem\">k</span> 的準確值。</p>",
      hints: [
        // EN: Write the coefficient of <span class="chem">x^3</span> as <span class="chem">^7C_3 k^3 = 35k^3</span> and the coefficient of <span class="chem">x^2</span> as <span class="chem">^7C_2 k^2 = 21k^2</span>.
        "寫出 <span class=\"chem\">x^3</span> 的係數為 <span class=\"chem\">^7C_3 k^3 = 35k^3</span>，以及 <span class=\"chem\">x^2</span> 的係數為 <span class=\"chem\">^7C_2 k^2 = 21k^2</span>。",
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
        // EN: M1: Substitutes log_2(x) = 3 back into the first equation: 3 + log_2(y) = 4.
        "M1：把 log_2(x) = 3 代回第一條方程：3 + log_2(y) = 4。",
        // EN: A1: Finds log_2(y) = 1 and hence y = 2.
        "A1：求得 log_2(y) = 1，從而得出 y = 2。",
      ],
    },

    // ── t1-2-q015 · numeric · challenge · SL · SL 1.7 · 4 marks
    "t1-2-q015": {
      // EN: <p>The terms <span class="chem">log_2(p)</span>, <span class="chem">log_4(p)</span>, <span class="chem">log_8(p)</span>, ... are evaluated for <span class="chem">p = 64</span>. Calculate the exact value of the sum <span class="chem">log_2(64) + log_4(64) + log_8(64) + log_{16}(64)</span>.</p>
      stem: "<p>當 <span class=\"chem\">p = 64</span> 時，計算各項 <span class=\"chem\">log_2(p)</span>、<span class=\"chem\">log_4(p)</span>、<span class=\"chem\">log_8(p)</span>…… 的值。計算 (Calculate) 總和 <span class=\"chem\">log_2(64) + log_4(64) + log_8(64) + log_{16}(64)</span> 的準確值。</p>",
      hints: [
        // EN: Decode: the four logarithms share the argument 64, and every base is a power of 2. Rewrite each one in base 2 with change of base, then add.
        "解碼：四個對數的真數都是 64，而每個底數都是 2 的乘方。用換底公式把每一個改寫成以 2 為底，再相加。",
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
        // EN: Decode: “the coefficients form an arithmetic sequence” gives one equation: the middle coefficient is the mean of the other two. Write each coefficient in terms of <span class="chem">n</span> and solve for the integer <span class="chem">n &gt;= 3</span>.
        "解碼：「係數組成等差數列」給出一條方程：中間的係數是另外兩個係數的平均值。把每個係數用 <span class=\"chem\">n</span> 表示，再解出整數 <span class=\"chem\">n &gt;= 3</span>。",
        // EN: Write out the three coefficients: <span class="chem">^nC_1 = n</span>, <span class="chem">^nC_2 = n(n-1)/2</span>, and <span class="chem">^nC_3 = n(n-1)(n-2)/6</span>.
        "寫出三個係數：<span class=\"chem\">^nC_1 = n</span>、<span class=\"chem\">^nC_2 = n(n-1)/2</span> 及 <span class=\"chem\">^nC_3 = n(n-1)(n-2)/6</span>。",
        // EN: Use the arithmetic condition <span class="chem">2(^nC_2) = ^nC_1 + ^nC_3</span> and divide through by <span class="chem">n &gt; 0</span>.
        "利用等差數列條件 <span class=\"chem\">2(^nC_2) = ^nC_1 + ^nC_3</span>，並兩邊同除以 <span class=\"chem\">n &gt; 0</span>。",
      ],
      // EN: <div class="worked__math">2 × <span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = <i>n</i> + <span class="frac"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6</span></span> <b>[M1 A1]</b></div><div class="worked__math">Divide by <i>n</i> &gt; 0 and multiply by 6: 6(<i>n</i> − 1) = 6 + (<i>n</i><sup>2</sup> − 3<i>n</i> + 2) <b>[M1 A1]</b></div><div class="worked__math"><i>n</i><sup>2</sup> − 9<i>n</i> + 14 = 0 ⇒ (<i>n</i> − 2)(<i>n</i> − 7) = 0. Since <i>n</i> ≥ 3, <b><i>n</i> = 7</b>. <b>[M1 A1]</b></div>
      solution: "<div class=\"worked__math\">2 × <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = <i>n</i> + <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6</span></span> <b>[M1 A1]</b></div><div class=\"worked__math\">除以 <i>n</i> &gt; 0 並乘以 6：6(<i>n</i> − 1) = 6 + (<i>n</i><sup>2</sup> − 3<i>n</i> + 2) <b>[M1 A1]</b></div><div class=\"worked__math\"><i>n</i><sup>2</sup> − 9<i>n</i> + 14 = 0 ⇒ (<i>n</i> − 2)(<i>n</i> − 7) = 0。因為 <i>n</i> ≥ 3，所以 <b><i>n</i> = 7</b>。<b>[M1 A1]</b></div>",
    },

    // ── t1-2-q017 · short · challenge · SL · SL 1.7 · 7 marks
    "t1-2-q017": {
      // EN: <p>Consider the equation <span class="chem">e^{2x} - 2k e^x + (k + 2) = 0</span>, where <span class="chem">k</span> ∈ ℝ.<br>(a) Find the set of values of <span class="chem">k</span> for which the quadratic in <span class="chem">u = e^x</span> has two distinct real roots. <strong>[3]</strong><br>(b) Hence find the exact set of values of <span class="chem">k</span> for which the original equation has <strong>two distinct real solutions for <span class="chem">x</span></strong>. <strong>[4]</strong></p>
      stem: "<p>考慮方程 <span class=\"chem\">e^{2x} - 2k e^x + (k + 2) = 0</span>，其中 <span class=\"chem\">k</span> ∈ ℝ。<br>(a) 求 (Find) 使關於 <span class=\"chem\">u = e^x</span> 的二次方程有兩個相異實根的 <span class=\"chem\">k</span> 值範圍。<strong>[3]</strong><br>(b) 由此求 (Hence find) 使原方程對於 <span class=\"chem\">x</span> 有<strong>兩個相異實數解</strong>的準確 <span class=\"chem\">k</span> 值範圍。<strong>[4]</strong></p>",
      hints: [
        // EN: Decode: this is a quadratic in <span class="chem">u = e^x</span> in disguise. Part (a) is about the quadratic alone; part (b) asks for real values of <span class="chem">x</span>, and only positive roots <span class="chem">u</span> give one.
        "解碼：這是一條偽裝成指數方程、以 <span class=\"chem\">u = e^x</span> 表示的二次方程。(a) 部只涉及該二次方程；(b) 部問的是 <span class=\"chem\">x</span> 的實數值，而只有正根 <span class=\"chem\">u</span> 才能給出實數解。",
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
        // EN: A1: Rejects k < -1 (there the sum of roots 2k < 0, so a root is not positive).
        "A1：捨去 k < -1（此時根的和 2k < 0，所以有一個根不是正數）。",
        // EN: A1: States the final set k > 2.
        "A1：寫出最終範圍 k > 2。",
      ],
    },

    // ── t1-2-q018 · numeric · foundation · SL · SL 1.5 · 2 marks
    "t1-2-q018": {
      // EN: <p>Use your GDC to solve <span class="chem">7^x = 50</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>用 GDC 解 <span class=\"chem\">7^x = 50</span>。答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Rewrite the equation in logarithmic form: <span class="chem">x = log_7 50</span>.
        "把方程改寫為對數形式：<span class=\"chem\">x = log_7 50</span>。",
        // EN: Evaluate it on the GDC, either with the <span class="mono">log<sub>a</sub></span> template or as <span class="chem">ln 50 / ln 7</span>.
        "用 GDC 計算，可使用 <span class=\"mono\">log<sub>a</sub></span> 模板，或輸入 <span class=\"chem\">ln 50 / ln 7</span>。",
      ],
      // EN: <div class="worked__math"><i>x</i> = log<sub>7</sub> 50 = <span class="frac"><span>ln 50</span><span>ln 7</span></span> ≈ 2.01038   <b>[M1]</b></div><p>To 3 significant figures, <strong><i>x</i> = 2.01</strong>. <b>[A1]</b></p>
      solution: "<div class=\"worked__math\"><i>x</i> = log<sub>7</sub> 50 = <span class=\"frac\"><span>ln 50</span><span>ln 7</span></span> ≈ 2.01038   <b>[M1]</b></div><p>準確至 3 位有效數字，<strong><i>x</i> = 2.01</strong>。<b>[A1]</b></p>",
    },
  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('zh-Hant', 't1-2.q', {
  questions: {

    // ── t1-2-q019 · numeric · foundation · SL · SL 1.5 · 2 marks
    "t1-2-q019": {
      // EN: <p>Solve <span class="chem">10^x = 0.0042</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>解 (Solve) <span class=\"chem\">10^x = 0.0042</span>。答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Rewrite the equation in logarithmic form: <span class="chem">x = log_{10}(0.0042)</span>, written <span class="chem">log 0.0042</span> in IB notation.
        "把方程改寫為對數形式：<span class=\"chem\">x = log_{10}(0.0042)</span>，在 IB 記法中寫作 <span class=\"chem\">log 0.0042</span>。",
        // EN: Evaluate it with the <span class="mono">log</span> key of your GDC. A number between 0 and 1 has a negative logarithm.
        "用 GDC 的 <span class=\"mono\">log</span> 鍵計算。介乎 0 與 1 之間的數，其對數是負數。",
      ],
      // EN: <div class="worked__math"><i>x</i> = log 0.0042 <b>[M1]</b></div><div class="worked__math"><i>x</i> = −2.37675… ≈ <b>−2.38</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>x</i> = log 0.0042   <b>[M1]</b></div><div class=\"worked__math\"><i>x</i> = −2.37675… ≈ <b>−2.38</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q020 · numeric · foundation · SL · SL 1.5 · 2 marks
    "t1-2-q020": {
      // EN: <p>The pH of a solution is defined by <span class="chem">pH = -log[H^+]</span>, where <span class="chem">[H^+]</span> is the hydrogen ion concentration in <span class="unit">mol dm-3</span> and log is to base 10. A sample of sea water has a pH of 8.3. Find <span class="chem">[H^+]</span> for this sample, giving your answer in standard form correct to 3 significant figures.</p>
      stem: "<p>溶液的 pH 值定義為 <span class=\"chem\">pH = -log[H^+]</span>，其中 <span class=\"chem\">[H^+]</span> 是以 <span class=\"unit\">mol dm-3</span> 為單位的氫離子濃度，而 log 以 10 為底。某海水樣本的 pH 值為 8.3。求 (Find) 此樣本的 <span class=\"chem\">[H^+]</span>，答案以科學記數法表示，並準確至 3 位有效數字。</p>",
      hints: [
        // EN: Substitute: <span class="chem">8.3 = -log[H^+]</span>, so <span class="chem">log[H^+] = -8.3</span>.
        "代入：<span class=\"chem\">8.3 = -log[H^+]</span>，故 <span class=\"chem\">log[H^+] = -8.3</span>。",
        // EN: Convert to exponential form, <span class="chem">[H^+] = 10^{-8.3}</span>, and evaluate it on your GDC.
        "轉換為指數形式 <span class=\"chem\">[H^+] = 10^{-8.3}</span>，然後用 GDC 計算。",
      ],
      // EN: <div class="worked__math">log[H<sup>+</sup>] = −8.3 ⇒ [H<sup>+</sup>] = 10<sup>−8.3</sup> <b>[M1]</b></div><div class="worked__math">[H<sup>+</sup>] = <b>5.01 × 10<sup>−9</sup></b> mol dm<sup>−3</sup> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">log[H<sup>+</sup>] = −8.3  ⇒  [H<sup>+</sup>] = 10<sup>−8.3</sup>   <b>[M1]</b></div><div class=\"worked__math\">[H<sup>+</sup>] = <b>5.01 × 10<sup>−9</sup></b> mol dm<sup>−3</sup>   <b>[A1]</b></div>",
    },

    // ── t1-2-q021 · numeric · exam · SL · SL 1.7 · 4 marks
    "t1-2-q021": {
      // EN: <p>Solve the equation <span class="chem">5^{2x-1} = 3^{x+2}</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>解 (Solve) 方程 <span class=\"chem\">5^{2x-1} = 3^{x+2}</span>。答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: The bases 5 and 3 cannot be made equal, so take <span class="chem">ln</span> (or log) of both sides.
        "底 5 和 3 無法化為相同，故在兩邊取 <span class=\"chem\">ln</span>（或 log）。",
        // EN: The power law gives <span class="chem">(2x - 1) ln 5 = (x + 2) ln 3</span>. Expand both sides and collect the <span class="chem">x</span> terms.
        "由冪的對數定律得 <span class=\"chem\">(2x - 1) ln 5 = (x + 2) ln 3</span>。展開兩邊，並把含 <span class=\"chem\">x</span> 的項合併。",
        // EN: You should get <span class="chem">x(2 ln 5 - ln 3) = 2 ln 3 + ln 5</span>.
        "你應得到 <span class=\"chem\">x(2 ln 5 - ln 3) = 2 ln 3 + ln 5</span>。",
      ],
      // EN: <div class="worked__math">(2<i>x</i> − 1) ln 5 = (<i>x</i> + 2) ln 3 <b>[M1 A1]</b></div><div class="worked__math"><i>x</i>(2 ln 5 − ln 3) = 2 ln 3 + ln 5 ⇒ <i>x</i> = <span class="frac"><span>2 ln 3 + ln 5</span><span>2 ln 5 − ln 3</span></span> <b>[M1]</b></div><div class="worked__math"><i>x</i> = 1.79537… ≈ <b>1.80</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">(2<i>x</i> − 1) ln 5 = (<i>x</i> + 2) ln 3   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>x</i>(2 ln 5 − ln 3) = 2 ln 3 + ln 5  ⇒  <i>x</i> = <span class=\"frac\"><span>2 ln 3 + ln 5</span><span>2 ln 5 − ln 3</span></span>   <b>[M1]</b></div><div class=\"worked__math\"><i>x</i> = 1.79537… ≈ <b>1.80</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q022 · numeric · exam · SL · SL 1.7 · 4 marks
    "t1-2-q022": {
      // EN: <p>The number of bacteria in a culture is modelled by <span class="chem">N = 250e^{0.42t}</span>, where <span class="chem">t</span> is the time in hours after the culture was prepared. Find the time it takes for the number of bacteria to increase from 1000 to 4000. Give your answer in hours, correct to 3 significant figures.</p>
      stem: "<p>某培養物中細菌的數目以 <span class=\"chem\">N = 250e^{0.42t}</span> 為模型，其中 <span class=\"chem\">t</span> 是培養物製備後的時間（以小時計）。求 (Find) 細菌數目由 1000 增加至 4000 所需的時間。答案以小時為單位，並準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: the question asks for a length of time, not a moment. Find the time when <span class="chem">N = 1000</span> and the time when <span class="chem">N = 4000</span>, then subtract.
        "解碼：題目問的是一段時間的長度，而不是某個時刻。分別求 <span class=\"chem\">N = 1000</span> 時的時間和 <span class=\"chem\">N = 4000</span> 時的時間，然後相減。",
        // EN: Solve <span class="chem">250e^{0.42t} = 1000</span>: divide by 250 and take <span class="chem">ln</span> of both sides.
        "解 <span class=\"chem\">250e^{0.42t} = 1000</span>：兩邊除以 250，再在兩邊取 <span class=\"chem\">ln</span>。",
        // EN: Do the same for <span class="chem">N = 4000</span>. (Shortcut: the number has to multiply by 4, so the time is <span class="chem">ln 4 / 0.42</span>.)
        "對 <span class=\"chem\">N = 4000</span> 作同樣處理。（捷徑：數目須乘以 4，故所需時間為 <span class=\"chem\">ln 4 / 0.42</span>。）",
      ],
      // EN: <p><strong>Decode:</strong> “the time it takes to increase from 1000 to 4000” is the difference between two times.</p><div class="worked__math">250e<sup>0.42<i>t</i><sub>1</sub></sup> = 1000 ⇒ <i>t</i><sub>1</sub> = <span class="frac"><span>ln 4</span><span>0.42</span></span> = 3.3007… <b>[M1 A1]</b></div><div class="worked__math">250e<sup>0.42<i>t</i><sub>2</sub></sup> = 4000 ⇒ <i>t</i><sub>2</sub> = <span class="frac"><span>ln 16</span><span>0.42</span></span> = 6.6014… <b>[A1]</b></div><div class="worked__math"><i>t</i><sub>2</sub> − <i>t</i><sub>1</sub> = 3.3007… ≈ <b>3.30 hours</b> <b>[A1]</b></div>
      solution: "<p><strong>解碼：</strong>「由 1000 增加至 4000 所需的時間」是兩個時間之差。</p><div class=\"worked__math\">250e<sup>0.42<i>t</i><sub>1</sub></sup> = 1000  ⇒  <i>t</i><sub>1</sub> = <span class=\"frac\"><span>ln 4</span><span>0.42</span></span> = 3.3007…   <b>[M1 A1]</b></div><div class=\"worked__math\">250e<sup>0.42<i>t</i><sub>2</sub></sup> = 4000  ⇒  <i>t</i><sub>2</sub> = <span class=\"frac\"><span>ln 16</span><span>0.42</span></span> = 6.6014…   <b>[A1]</b></div><div class=\"worked__math\"><i>t</i><sub>2</sub> − <i>t</i><sub>1</sub> = 3.3007… ≈ <b>3.30 小時</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q023 · numeric · exam · SL · SL 1.7 · 5 marks
    "t1-2-q023": {
      // EN: <p>Solve the equation <span class="chem">3e^{2x} - 4e^x - 2 = 0</span> for <span class="chem">x</span> ∈ ℝ. Give your answer correct to 3 significant figures.</p>
      stem: "<p>解 (Solve) 方程 <span class=\"chem\">3e^{2x} - 4e^x - 2 = 0</span>，其中 <span class=\"chem\">x</span> ∈ ℝ。答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Let <span class="chem">u = e^x</span>, so <span class="chem">e^{2x} = u^2</span>. This gives the quadratic <span class="chem">3u^2 - 4u - 2 = 0</span>.
        "設 <span class=\"chem\">u = e^x</span>，則 <span class=\"chem\">e^{2x} = u^2</span>。這樣便得到二次方程 <span class=\"chem\">3u^2 - 4u - 2 = 0</span>。",
        // EN: The quadratic does not factorise: use the quadratic formula or the polynomial solver on your GDC.
        "此二次方程不能因式分解：使用二次公式或 GDC 的多項式求解功能。",
        // EN: One value of <span class="chem">u</span> is negative. Since <span class="chem">e^x &gt; 0</span>, reject it, then use <span class="chem">x = ln u</span>.
        "其中一個 <span class=\"chem\">u</span> 值是負數。由於 <span class=\"chem\">e^x &gt; 0</span>，捨去該值，然後利用 <span class=\"chem\">x = ln u</span>。",
      ],
      // EN: <div class="worked__math">Let <i>u</i> = e<sup><i>x</i></sup>: 3<i>u</i><sup>2</sup> − 4<i>u</i> − 2 = 0 <b>[M1]</b></div><div class="worked__math"><i>u</i> = <span class="frac"><span>2 ± √10</span><span>3</span></span>, so <i>u</i> = 1.72076… or <i>u</i> = −0.38743… <b>[A1]</b></div><div class="worked__math">Reject <i>u</i> = −0.387… because e<sup><i>x</i></sup> &gt; 0 for all real <i>x</i>. <b>[R1]</b></div><div class="worked__math"><i>x</i> = ln 1.72076… <b>[M1]</b> = 0.54277… ≈ <b>0.543</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">設 <i>u</i> = e<sup><i>x</i></sup>：  3<i>u</i><sup>2</sup> − 4<i>u</i> − 2 = 0   <b>[M1]</b></div><div class=\"worked__math\"><i>u</i> = <span class=\"frac\"><span>2 ± √10</span><span>3</span></span>，故 <i>u</i> = 1.72076… 或 <i>u</i> = −0.38743…   <b>[A1]</b></div><div class=\"worked__math\">由於對所有實數 <i>x</i>，e<sup><i>x</i></sup> &gt; 0，故捨去 <i>u</i> = −0.387…。   <b>[R1]</b></div><div class=\"worked__math\"><i>x</i> = ln 1.72076…   <b>[M1]</b>   = 0.54277… ≈ <b>0.543</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q024 · numeric · exam · SL · SL 1.7, 2.10 · 4 marks
    "t1-2-q024": {
      // EN: <p>The equation <span class="chem">2^x = x + 5</span> has exactly two real solutions. Verify that <span class="chem">x = 3</span> is one of them, and find the other solution correct to 3 significant figures.</p>
      stem: "<p>方程 <span class=\"chem\">2^x = x + 5</span> 恰有兩個實數解。驗證 (Verify) <span class=\"chem\">x = 3</span> 是其中一個解，並求 (Find) 另一個解，答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Verify by substitution: compare <span class="chem">2^3</span> with <span class="chem">3 + 5</span>.
        "以代入法驗證：比較 <span class=\"chem\">2^3</span> 與 <span class=\"chem\">3 + 5</span>。",
        // EN: The equation mixes an exponential with a linear term, so logarithms alone cannot isolate <span class="chem">x</span>. Graph <span class="chem">y = 2^x</span> and <span class="chem">y = x + 5</span> on your GDC.
        "此方程同時含有指數項和線性項，單靠對數無法把 <span class=\"chem\">x</span> 分離出來。用 GDC 繪畫 <span class=\"chem\">y = 2^x</span> 和 <span class=\"chem\">y = x + 5</span> 的圖像。",
        // EN: The second intersection is far to the left, where <span class="chem">2^x</span> is close to 0, so <span class="chem">x + 5</span> must also be close to 0. Widen your window to see it.
        "第二個交點在很左邊，那裏 <span class=\"chem\">2^x</span> 接近 0，所以 <span class=\"chem\">x + 5</span> 亦必須接近 0。擴大顯示範圍便能看到它。",
      ],
      // EN: <div class="worked__math">2<sup>3</sup> = 8 and 3 + 5 = 8, so <i>x</i> = 3 is a solution. <b>[M1 A1]</b></div><div class="worked__math">Graph <i>y</i> = 2<sup><i>x</i></sup> and <i>y</i> = <i>x</i> + 5 (or find the zeros of <i>y</i> = 2<sup><i>x</i></sup> − <i>x</i> − 5) on the GDC. <b>[M1]</b></div><div class="worked__math">The other intersection is at <i>x</i> = −4.96805… ≈ <b>−4.97</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">2<sup>3</sup> = 8 及 3 + 5 = 8，故 <i>x</i> = 3 是一個解。   <b>[M1 A1]</b></div><div class=\"worked__math\">在 GDC 上繪畫 <i>y</i> = 2<sup><i>x</i></sup> 和 <i>y</i> = <i>x</i> + 5 的圖像（或求 <i>y</i> = 2<sup><i>x</i></sup> − <i>x</i> − 5 的零點）。   <b>[M1]</b></div><div class=\"worked__math\">另一個交點位於 <i>x</i> = −4.96805… ≈ <b>−4.97</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q025 · numeric · exam · SL · SL 1.9 · 4 marks
    "t1-2-q025": {
      // EN: <p>Find the coefficient of <span class="chem">x^5</span> in the expansion of <span class="chem">(1 - 0.15x)^{20}</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>求 (Find) <span class=\"chem\">(1 - 0.15x)^{20}</span> 展開式中 <span class=\"chem\">x^5</span> 的係數。答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: The general term is <span class="chem">^{20}C_r (1)^{20-r} (-0.15x)^r</span>.
        "通項為 <span class=\"chem\">^{20}C_r (1)^{20-r} (-0.15x)^r</span>。",
        // EN: For <span class="chem">x^5</span> take <span class="chem">r = 5</span>. Use the <span class="mono">nCr</span> function of your GDC for <span class="chem">^{20}C_5</span>.
        "對於 <span class=\"chem\">x^5</span>，取 <span class=\"chem\">r = 5</span>。用 GDC 的 <span class=\"mono\">nCr</span> 功能計算 <span class=\"chem\">^{20}C_5</span>。",
        // EN: Keep the sign: <span class="chem">(-0.15)^5</span> is negative.
        "保留符號：<span class=\"chem\">(-0.15)^5</span> 是負數。",
      ],
      // EN: <div class="worked__math">General term <sup>20</sup>C<sub><i>r</i></sub> (−0.15<i>x</i>)<sup><i>r</i></sup>; for <i>x</i><sup>5</sup>, <i>r</i> = 5. <b>[M1 A1]</b></div><div class="worked__math"><sup>20</sup>C<sub>5</sub> = 15504 <b>[A1]</b></div><div class="worked__math">15504 × (−0.15)<sup>5</sup> = −1.177335 ≈ <b>−1.18</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">通項 <sup>20</sup>C<sub><i>r</i></sub> (−0.15<i>x</i>)<sup><i>r</i></sup>；對於 <i>x</i><sup>5</sup>，<i>r</i> = 5。   <b>[M1 A1]</b></div><div class=\"worked__math\"><sup>20</sup>C<sub>5</sub> = 15504   <b>[A1]</b></div><div class=\"worked__math\">15504 × (−0.15)<sup>5</sup> = −1.177335 ≈ <b>−1.18</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q026 · numeric · exam · SL · SL 1.9 · 5 marks
    "t1-2-q026": {
      // EN: <p>Find the exact value of the term independent of <span class="chem">x</span> in the expansion of <span class="chem">(x^2 - 3/(2x))^9</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">(x^2 - 3/(2x))^9</span> 展開式中與 <span class=\"chem\">x</span> 無關的項的準確值。</p>",
      hints: [
        // EN: Write the general term <span class="chem">^9C_r (x^2)^{9-r} (-3/(2x))^r</span> and collect the powers of <span class="chem">x</span>.
        "寫出通項 <span class=\"chem\">^9C_r (x^2)^{9-r} (-3/(2x))^r</span>，並把 <span class=\"chem\">x</span> 的冪合併。",
        // EN: The power of <span class="chem">x</span> is <span class="chem">18 - 2r - r = 18 - 3r</span>. The term independent of <span class="chem">x</span> has power 0.
        "<span class=\"chem\">x</span> 的冪為 <span class=\"chem\">18 - 2r - r = 18 - 3r</span>。與 <span class=\"chem\">x</span> 無關的項，其冪為 0。",
        // EN: With <span class="chem">r = 6</span>, evaluate <span class="chem">^9C_6 × (-3/2)^6</span>. An even power makes the sign positive.
        "取 <span class=\"chem\">r = 6</span>，計算 <span class=\"chem\">^9C_6 × (-3/2)^6</span>。偶數次冪使符號為正。",
      ],
      // EN: <div class="worked__math"><i>T</i><sub><i>r</i>+1</sub> = <sup>9</sup>C<sub><i>r</i></sub> (<i>x</i><sup>2</sup>)<sup>9−<i>r</i></sup> (−<span class="frac"><span>3</span><span>2</span></span>)<sup><i>r</i></sup> <i>x</i><sup>−<i>r</i></sup> = <sup>9</sup>C<sub><i>r</i></sub> (−<span class="frac"><span>3</span><span>2</span></span>)<sup><i>r</i></sup> <i>x</i><sup>18−3<i>r</i></sup> <b>[M1 A1]</b></div><div class="worked__math">18 − 3<i>r</i> = 0 ⇒ <i>r</i> = 6 <b>[A1]</b></div><div class="worked__math"><sup>9</sup>C<sub>6</sub> × (<span class="frac"><span>3</span><span>2</span></span>)<sup>6</sup> = 84 × <span class="frac"><span>729</span><span>64</span></span> <b>[M1]</b> = <b><span class="frac"><span>15309</span><span>16</span></span> = 956.8125</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>T</i><sub><i>r</i>+1</sub> = <sup>9</sup>C<sub><i>r</i></sub> (<i>x</i><sup>2</sup>)<sup>9−<i>r</i></sup> (−<span class=\"frac\"><span>3</span><span>2</span></span>)<sup><i>r</i></sup> <i>x</i><sup>−<i>r</i></sup> = <sup>9</sup>C<sub><i>r</i></sub> (−<span class=\"frac\"><span>3</span><span>2</span></span>)<sup><i>r</i></sup> <i>x</i><sup>18−3<i>r</i></sup>   <b>[M1 A1]</b></div><div class=\"worked__math\">18 − 3<i>r</i> = 0  ⇒  <i>r</i> = 6   <b>[A1]</b></div><div class=\"worked__math\"><sup>9</sup>C<sub>6</sub> × (<span class=\"frac\"><span>3</span><span>2</span></span>)<sup>6</sup> = 84 × <span class=\"frac\"><span>729</span><span>64</span></span>   <b>[M1]</b>   = <b><span class=\"frac\"><span>15309</span><span>16</span></span> = 956.8125</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q027 · numeric · exam · SL · SL 1.9 · 5 marks
    "t1-2-q027": {
      // EN: <p>Consider the expansion of <span class="chem">(1 + x/4)^n</span>, where <span class="chem">n &gt;= 3</span> is an integer. Find the smallest value of <span class="chem">n</span> for which the coefficient of <span class="chem">x^3</span> is greater than 100.</p>
      stem: "<p>考慮 <span class=\"chem\">(1 + x/4)^n</span> 的展開式，其中 <span class=\"chem\">n &gt;= 3</span> 是整數。求 (Find) 使 <span class=\"chem\">x^3</span> 的係數大於 100 的最小 <span class=\"chem\">n</span> 值。</p>",
      hints: [
        // EN: Decode: write the coefficient of <span class="chem">x^3</span> as a function of <span class="chem">n</span>, then search for the first integer <span class="chem">n</span> that makes it exceed 100.
        "解碼：把 <span class=\"chem\">x^3</span> 的係數寫成 <span class=\"chem\">n</span> 的函數，然後尋找第一個使它超過 100 的整數 <span class=\"chem\">n</span>。",
        // EN: The term in <span class="chem">x^3</span> is <span class="chem">^nC_3 (x/4)^3</span>, so the coefficient is <span class="chem">^nC_3 / 64</span>.
        "含 <span class=\"chem\">x^3</span> 的項是 <span class=\"chem\">^nC_3 (x/4)^3</span>，故其係數為 <span class=\"chem\">^nC_3 / 64</span>。",
        // EN: You need <span class="chem">^nC_3 &gt; 6400</span>. Use a table of <span class="mono">nCr(n, 3)</span> on your GDC and check the values either side of the crossing.
        "你需要 <span class=\"chem\">^nC_3 &gt; 6400</span>。在 GDC 上列出 <span class=\"mono\">nCr(n, 3)</span> 的數值表，並檢查越過臨界點前後的數值。",
      ],
      // EN: <p><strong>Decode:</strong> this is a search over integers, not an equation with one exact root.</p><div class="worked__math">Coefficient of <i>x</i><sup>3</sup> = <sup><i>n</i></sup>C<sub>3</sub> × (<span class="frac"><span>1</span><span>4</span></span>)<sup>3</sup> = <span class="frac"><span><sup><i>n</i></sup>C<sub>3</sub></span><span>64</span></span> <b>[M1 A1]</b></div><div class="worked__math"><span class="frac"><span><sup><i>n</i></sup>C<sub>3</sub></span><span>64</span></span> &gt; 100 ⇒ <sup><i>n</i></sup>C<sub>3</sub> &gt; 6400 <b>[M1]</b></div><div class="worked__math">GDC table: <sup>34</sup>C<sub>3</sub> = 5984 (too small), <sup>35</sup>C<sub>3</sub> = 6545 <b>[A1]</b></div><div class="worked__math">Smallest <b><i>n</i> = 35</b> <b>[A1]</b></div>
      solution: "<p><strong>解碼：</strong>這是在整數中搜尋，而不是解一條只有一個準確根的方程。</p><div class=\"worked__math\"><i>x</i><sup>3</sup> 的係數 = <sup><i>n</i></sup>C<sub>3</sub> × (<span class=\"frac\"><span>1</span><span>4</span></span>)<sup>3</sup> = <span class=\"frac\"><span><sup><i>n</i></sup>C<sub>3</sub></span><span>64</span></span>   <b>[M1 A1]</b></div><div class=\"worked__math\"><span class=\"frac\"><span><sup><i>n</i></sup>C<sub>3</sub></span><span>64</span></span> &gt; 100  ⇒  <sup><i>n</i></sup>C<sub>3</sub> &gt; 6400   <b>[M1]</b></div><div class=\"worked__math\">GDC 數值表：<sup>34</sup>C<sub>3</sub> = 5984（太小），<sup>35</sup>C<sub>3</sub> = 6545   <b>[A1]</b></div><div class=\"worked__math\">最小值 <b><i>n</i> = 35</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q028 · numeric · exam · SL · SL 1.5, 1.7 · 4 marks
    "t1-2-q028": {
      // EN: <p>The loudness <span class="chem">L</span> of a sound, in decibels, is given by <span class="chem">L = 10 log(I/I_0)</span>, where <span class="chem">I</span> is the intensity of the sound, <span class="chem">I_0</span> is a fixed reference intensity, and log is to base 10. Traffic on a busy street measures 78 decibels and a rock concert measures 95 decibels. Find how many times more intense the sound of the concert is than the sound of the traffic. Give your answer correct to 3 significant figures.</p>
      stem: "<p>聲音的響度 <span class=\"chem\">L</span>（以分貝計）由 <span class=\"chem\">L = 10 log(I/I_0)</span> 給出，其中 <span class=\"chem\">I</span> 是聲音的強度，<span class=\"chem\">I_0</span> 是一個固定的參考強度，而 log 以 10 為底。繁忙街道的交通噪音量得 78 分貝，而一場搖滾音樂會量得 95 分貝。求 (Find) 音樂會聲音的強度是交通聲音強度的多少倍。答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: “how many times more intense” asks for the ratio <span class="chem">I_{concert} / I_{traffic}</span>. You do not need to know <span class="chem">I_0</span>.
        "解碼：「強度是多少倍」問的是比 <span class=\"chem\">I_{concert} / I_{traffic}</span>。你不需要知道 <span class=\"chem\">I_0</span>。",
        // EN: Write <span class="chem">95 = 10 log(I_c / I_0)</span> and <span class="chem">78 = 10 log(I_t / I_0)</span>, then subtract. The quotient law turns the difference of logs into <span class="chem">log(I_c / I_t)</span>.
        "寫出 <span class=\"chem\">95 = 10 log(I_c / I_0)</span> 和 <span class=\"chem\">78 = 10 log(I_t / I_0)</span>，然後相減。商的對數定律把對數之差化為 <span class=\"chem\">log(I_c / I_t)</span>。",
        // EN: You should get <span class="chem">log(I_c / I_t) = 1.7</span>.
        "你應得到 <span class=\"chem\">log(I_c / I_t) = 1.7</span>。",
      ],
      // EN: <p><strong>Decode:</strong> the answer is a ratio of intensities, so subtract the two decibel equations and the unknown <i>I</i><sub>0</sub> cancels.</p><div class="worked__math">95 − 78 = 10 log(<i>I</i><sub>c</sub>/<i>I</i><sub>0</sub>) − 10 log(<i>I</i><sub>t</sub>/<i>I</i><sub>0</sub>) = 10 log(<i>I</i><sub>c</sub>/<i>I</i><sub>t</sub>) <b>[M1 M1]</b></div><div class="worked__math">log(<i>I</i><sub>c</sub>/<i>I</i><sub>t</sub>) = 1.7 <b>[A1]</b></div><div class="worked__math"><i>I</i><sub>c</sub>/<i>I</i><sub>t</sub> = 10<sup>1.7</sup> = 50.118… ≈ <b>50.1</b> <b>[A1]</b></div>
      solution: "<p><strong>解碼：</strong>答案是強度之比，所以把兩條分貝方程相減，未知的 <i>I</i><sub>0</sub> 便會消去。</p><div class=\"worked__math\">95 − 78 = 10 log(<i>I</i><sub>c</sub>/<i>I</i><sub>0</sub>) − 10 log(<i>I</i><sub>t</sub>/<i>I</i><sub>0</sub>) = 10 log(<i>I</i><sub>c</sub>/<i>I</i><sub>t</sub>)   <b>[M1 M1]</b></div><div class=\"worked__math\">log(<i>I</i><sub>c</sub>/<i>I</i><sub>t</sub>) = 1.7   <b>[A1]</b></div><div class=\"worked__math\"><i>I</i><sub>c</sub>/<i>I</i><sub>t</sub> = 10<sup>1.7</sup> = 50.118… ≈ <b>50.1</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q029 · numeric · exam · SL · SL 1.7 · 5 marks
    "t1-2-q029": {
      // EN: <p>After an injection, the amount of a drug in a patient’s bloodstream is modelled by <span class="chem">A = A_0 e^{-kt}</span>, where <span class="chem">t</span> is the time in hours and <span class="chem">A_0</span> is the initial dose. The amount of drug halves every 5.5 hours. Find the time it takes for the amount to fall to 15% of the initial dose. Give your answer in hours, correct to 3 significant figures.</p>
      stem: "<p>注射後，病人血液中藥物的含量以 <span class=\"chem\">A = A_0 e^{-kt}</span> 為模型，其中 <span class=\"chem\">t</span> 是時間（以小時計），<span class=\"chem\">A_0</span> 是初始劑量。藥物含量每 5.5 小時減半。求 (Find) 藥物含量下降至初始劑量的 15% 所需的時間。答案以小時為單位，並準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: “halves every 5.5 hours” gives you <span class="chem">k</span>; “15% of the initial dose” means <span class="chem">A = 0.15A_0</span>. The value of <span class="chem">A_0</span> cancels.
        "解碼：「每 5.5 小時減半」給出 <span class=\"chem\">k</span>；「初始劑量的 15%」表示 <span class=\"chem\">A = 0.15A_0</span>。<span class=\"chem\">A_0</span> 的值會消去。",
        // EN: From <span class="chem">0.5 = e^{-5.5k}</span>, <span class="chem">k = ln 2 / 5.5</span>.
        "由 <span class=\"chem\">0.5 = e^{-5.5k}</span> 得 <span class=\"chem\">k = ln 2 / 5.5</span>。",
        // EN: Now solve <span class="chem">0.15 = e^{-kt}</span> for <span class="chem">t</span>.
        "現在解 <span class=\"chem\">0.15 = e^{-kt}</span> 求 <span class=\"chem\">t</span>。",
      ],
      // EN: <p><strong>Decode:</strong> the half-life fixes <i>k</i>; then solve for the time at which <i>A</i> = 0.15<i>A</i><sub>0</sub>.</p><div class="worked__math">0.5<i>A</i><sub>0</sub> = <i>A</i><sub>0</sub>e<sup>−5.5<i>k</i></sup> <b>[M1]</b> ⇒ <i>k</i> = <span class="frac"><span>ln 2</span><span>5.5</span></span> = 0.126026… <b>[A1]</b></div><div class="worked__math">0.15 = e<sup>−<i>kt</i></sup> <b>[M1]</b> ⇒ <i>t</i> = <span class="frac"><span>ln(1/0.15)</span><span><i>k</i></span></span> <b>[A1]</b></div><div class="worked__math"><i>t</i> = 15.0533… ≈ <b>15.1 hours</b> <b>[A1]</b></div>
      solution: "<p><strong>解碼：</strong>半衰期確定 <i>k</i>；然後求 <i>A</i> = 0.15<i>A</i><sub>0</sub> 時的時間。</p><div class=\"worked__math\">0.5<i>A</i><sub>0</sub> = <i>A</i><sub>0</sub>e<sup>−5.5<i>k</i></sup>   <b>[M1]</b>  ⇒  <i>k</i> = <span class=\"frac\"><span>ln 2</span><span>5.5</span></span> = 0.126026…   <b>[A1]</b></div><div class=\"worked__math\">0.15 = e<sup>−<i>kt</i></sup>   <b>[M1]</b>  ⇒  <i>t</i> = <span class=\"frac\"><span>ln(1/0.15)</span><span><i>k</i></span></span>   <b>[A1]</b></div><div class=\"worked__math\"><i>t</i> = 15.0533… ≈ <b>15.1 小時</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q030 · short · exam · SL · SL 1.7 · 7 marks
    "t1-2-q030": {
      // EN: <p>A cup of tea is left to cool in a room. Its temperature, <span class="chem">T</span> °C, <span class="chem">t</span> minutes after it was poured, is modelled by <span class="chem">T = 22 + 68e^{-kt}</span>, where <span class="chem">k &gt; 0</span>.<br>(a) Write down the temperature of the tea when it was poured. <strong>[1]</strong><br>(b) After 4 minutes the temperature is 61 °C. Find the value of <span class="chem">k</span>. <strong>[3]</strong><br>(c) Find the time it takes for the tea to cool to 30 °C. <strong>[2]</strong><br>(d) Explain why, according to this model, the tea never cools to 22 °C. <strong>[1]</strong></p>
      stem: "<p>一杯茶放在房間內冷卻。倒茶後 <span class=\"chem\">t</span> 分鐘，茶的溫度 <span class=\"chem\">T</span> °C 以 <span class=\"chem\">T = 22 + 68e^{-kt}</span> 為模型，其中 <span class=\"chem\">k &gt; 0</span>。<br>(a) 寫出 (Write down) 倒茶時茶的溫度。<strong>[1]</strong><br>(b) 4 分鐘後溫度為 61 °C。求 (Find) <span class=\"chem\">k</span> 的值。<strong>[3]</strong><br>(c) 求 (Find) 茶冷卻至 30 °C 所需的時間。<strong>[2]</strong><br>(d) 解釋 (Explain) 為何根據此模型，茶永遠不會冷卻至 22 °C。<strong>[1]</strong></p>",
      hints: [
        // EN: For (a), put <span class="chem">t = 0</span>: <span class="chem">e^0 = 1</span>.
        "在 (a) 部中，代入 <span class=\"chem\">t = 0</span>：<span class=\"chem\">e^0 = 1</span>。",
        // EN: For (b), isolate the exponential first: <span class="chem">e^{-4k} = (61 - 22)/68</span>, then take <span class="chem">ln</span> of both sides.
        "在 (b) 部中，先把指數項分離：<span class=\"chem\">e^{-4k} = (61 - 22)/68</span>，然後在兩邊取 <span class=\"chem\">ln</span>。",
        // EN: For (c), use the unrounded value of <span class="chem">k</span> stored in your GDC to avoid rounding errors.
        "在 (c) 部中，使用儲存在 GDC 中未經捨入的 <span class=\"chem\">k</span> 值，以避免捨入誤差。",
        // EN: For (d), think about the sign of <span class="chem">68e^{-kt}</span>.
        "在 (d) 部中，想想 <span class=\"chem\">68e^{-kt}</span> 的正負號。",
      ],
      // EN: <p>Isolate the exponential, take natural logarithms, and keep <span class="chem">k</span> unrounded in your GDC for part (c). The horizontal asymptote <span class="chem">T = 22</span> is the room temperature.</p>
      solution: "<p>先分離指數項，再取自然對數，並在 (c) 部中於 GDC 保留未經捨入的 <span class=\"chem\">k</span>。水平漸近線 <span class=\"chem\">T = 22</span> 就是室溫。</p>",
      // EN: <div class="worked__math">(a) <i>T</i>(0) = 22 + 68 = <b>90 °C</b>.</div><div class="worked__math">(b) 61 = 22 + 68e<sup>−4<i>k</i></sup> ⇒ e<sup>−4<i>k</i></sup> = <span class="frac"><span>39</span><span>68</span></span> ⇒ <i>k</i> = <span class="frac"><span>1</span><span>4</span></span> ln<span class="frac"><span>68</span><span>39</span></span> = 0.138986… ≈ <b>0.139</b>.</div><div class="worked__math">(c) 30 = 22 + 68e<sup>−<i>kt</i></sup> ⇒ e<sup>−<i>kt</i></sup> = <span class="frac"><span>8</span><span>68</span></span> ⇒ <i>t</i> = <span class="frac"><span>ln(68/8)</span><span><i>k</i></span></span> = 15.397… ≈ <b>15.4 minutes</b>.</div><div class="worked__math">(d) e<sup>−<i>kt</i></sup> &gt; 0 for every <i>t</i>, so <i>T</i> &gt; 22: the temperature approaches the room temperature of 22 °C but never reaches it.</div>
      answer: "<div class=\"worked__math\">(a) <i>T</i>(0) = 22 + 68 = <b>90 °C</b>.</div><div class=\"worked__math\">(b) 61 = 22 + 68e<sup>−4<i>k</i></sup>  ⇒  e<sup>−4<i>k</i></sup> = <span class=\"frac\"><span>39</span><span>68</span></span>  ⇒  <i>k</i> = <span class=\"frac\"><span>1</span><span>4</span></span> ln<span class=\"frac\"><span>68</span><span>39</span></span> = 0.138986… ≈ <b>0.139</b>.</div><div class=\"worked__math\">(c) 30 = 22 + 68e<sup>−<i>kt</i></sup>  ⇒  e<sup>−<i>kt</i></sup> = <span class=\"frac\"><span>8</span><span>68</span></span>  ⇒  <i>t</i> = <span class=\"frac\"><span>ln(68/8)</span><span><i>k</i></span></span> = 15.397… ≈ <b>15.4 分鐘</b>。</div><div class=\"worked__math\">(d) 對每一個 <i>t</i>，e<sup>−<i>kt</i></sup> &gt; 0，故 <i>T</i> &gt; 22：溫度趨近室溫 22 °C，但永遠不會達到。</div>",
      markscheme: [
        // EN: A1: (a) T = 22 + 68 = 90 °C.
        "A1：(a) T = 22 + 68 = 90 °C。",
        // EN: M1: (b) Substitutes t = 4 and T = 61: 61 = 22 + 68e^(−4k).
        "M1：(b) 代入 t = 4 及 T = 61：61 = 22 + 68e^(−4k)。",
        // EN: A1: Obtains e^(−4k) = 39/68 (≈ 0.574).
        "A1：得出 e^(−4k) = 39/68（≈ 0.574）。",
        // EN: A1: k = 0.139 (0.138986…).
        "A1：k = 0.139（0.138986…）。",
        // EN: M1: (c) Sets 30 = 22 + 68e^(−kt), so e^(−kt) = 8/68 (or solves graphically on the GDC).
        "M1：(c) 設 30 = 22 + 68e^(−kt)，故 e^(−kt) = 8/68（或在 GDC 上以圖像法求解）。",
        // EN: A1: t = 15.4 minutes (15.397…).
        "A1：t = 15.4 分鐘（15.397…）。",
        // EN: R1: (d) e^(−kt) > 0 for all t, so T > 22: the temperature approaches 22 °C but never reaches it.
        "R1：(d) 對所有 t，e^(−kt) > 0，故 T > 22：溫度趨近 22 °C，但永遠不會達到。",
      ],
    },

    // ── t1-2-q031 · short · exam · SL · SL 1.9 · 6 marks
    "t1-2-q031": {
      // EN: <p>(a) Find the first three terms, in ascending powers of <span class="chem">x</span>, of the expansion of <span class="chem">(1 - x)^8</span>. <strong>[2]</strong><br>(b) Hence, by choosing a suitable value of <span class="chem">x</span>, find an estimate for <span class="chem">0.98^8</span>. <strong>[2]</strong><br>(c) Use your GDC to find the percentage error in your estimate, correct to 3 significant figures. <strong>[2]</strong></p>
      stem: "<p>(a) 求 (Find) <span class=\"chem\">(1 - x)^8</span> 展開式中按 <span class=\"chem\">x</span> 升冪排列的首三項。<strong>[2]</strong><br>(b) 由此 (Hence)，選取適當的 <span class=\"chem\">x</span> 值，求 <span class=\"chem\">0.98^8</span> 的估計值。<strong>[2]</strong><br>(c) 用 GDC 求你的估計值的百分誤差，答案須準確至 3 位有效數字。<strong>[2]</strong></p>",
      hints: [
        // EN: Use <span class="chem">^8C_0, ^8C_1, ^8C_2</span> with <span class="chem">b = -x</span>.
        "以 <span class=\"chem\">b = -x</span> 使用 <span class=\"chem\">^8C_0, ^8C_1, ^8C_2</span>。",
        // EN: For (b), solve <span class="chem">1 - x = 0.98</span> to choose <span class="chem">x</span>.
        "在 (b) 部中，解 <span class=\"chem\">1 - x = 0.98</span> 以選取 <span class=\"chem\">x</span>。",
        // EN: Percentage error = |approximate − exact| ÷ exact × 100%. Divide by the exact value from the GDC.
        "百分誤差 = |近似值 − 準確值| ÷ 準確值 × 100%。除以 GDC 給出的準確值。",
      ],
      // EN: <p>The terms after <span class="chem">x^2</span> contain <span class="chem">0.02^3</span> and smaller powers, which is why three terms already give an error of about 0.05%.</p>
      solution: "<p><span class=\"chem\">x^2</span> 之後的各項含 <span class=\"chem\">0.02^3</span> 及更小的冪，所以僅取三項，誤差已只約為 0.05%。</p>",
      // EN: <div class="worked__math">(a) (1 − <i>x</i>)<sup>8</sup> = 1 − 8<i>x</i> + 28<i>x</i><sup>2</sup> − …</div><div class="worked__math">(b) With <i>x</i> = 0.02: 1 − 0.16 + 0.0112 = <b>0.8512</b>.</div><div class="worked__math">(c) 0.98<sup>8</sup> = 0.8507630… (GDC). Percentage error = <span class="frac"><span>|0.8512 − 0.8507630…|</span><span>0.8507630…</span></span> × 100% = <b>0.0514%</b>.</div>
      answer: "<div class=\"worked__math\">(a) (1 − <i>x</i>)<sup>8</sup> = 1 − 8<i>x</i> + 28<i>x</i><sup>2</sup> − …</div><div class=\"worked__math\">(b) 取 <i>x</i> = 0.02：1 − 0.16 + 0.0112 = <b>0.8512</b>。</div><div class=\"worked__math\">(c) 0.98<sup>8</sup> = 0.8507630…（GDC）。百分誤差 = <span class=\"frac\"><span>|0.8512 − 0.8507630…|</span><span>0.8507630…</span></span> × 100% = <b>0.0514%</b>。</div>",
      markscheme: [
        // EN: A1: (a) 1 − 8x (first two terms correct).
        "A1：(a) 1 − 8x（首兩項正確）。",
        // EN: A1: + 28x^2 (third term correct, from ⁸C₂ = 28).
        "A1：+ 28x^2（第三項正確，由 ⁸C₂ = 28 得出）。",
        // EN: M1: (b) Substitutes x = 0.02 into the three terms.
        "M1：(b) 把 x = 0.02 代入這三項。",
        // EN: A1: Estimate 0.8512.
        "A1：估計值 0.8512。",
        // EN: M1: (c) Uses |estimate − exact| / exact × 100% with the GDC value 0.850763….
        "M1：(c) 以 GDC 的值 0.850763… 使用 |估計值 − 準確值| / 準確值 × 100%。",
        // EN: A1: Percentage error = 0.0514%.
        "A1：百分誤差 = 0.0514%。",
      ],
    },

    // ── t1-2-q032 · short · exam · SL · SL 1.7, 4.4 · 9 marks
    "t1-2-q032": {
      // EN: <p>The number of followers, <span class="chem">y</span> hundred, of a new online channel, <span class="chem">x</span> weeks after it was launched, is shown in the table.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"><i>x</i> (weeks)</th><th scope="col">1</th><th scope="col">2</th><th scope="col">3</th><th scope="col">4</th><th scope="col">5</th><th scope="col">6</th></tr></thead><tbody><tr><th scope="row"><i>y</i> (hundreds)</th><td>4.6</td><td>6.8</td><td>9.7</td><td>14.2</td><td>20.5</td><td>29.9</td></tr></tbody></table></div><p>The data are modelled by <span class="chem">y = a b^x</span>, where <span class="chem">a, b &gt; 0</span>.<br>(a) Show that <span class="chem">ln y = ln a + x ln b</span>. <strong>[2]</strong><br>(b) Use your GDC to find the equation of the regression line of <span class="chem">ln y</span> on <span class="chem">x</span>. <strong>[2]</strong><br>(c) Hence find the values of <span class="chem">a</span> and <span class="chem">b</span>. <strong>[2]</strong><br>(d) Use the model to estimate the number of followers after 8 weeks, and comment on the reliability of this estimate. <strong>[3]</strong></p>
      stem: "<p>下表顯示一個新網上頻道推出後 <span class=\"chem\">x</span> 星期的追隨者人數 <span class=\"chem\">y</span>（以百人計）。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"><i>x</i>（星期）</th><th scope=\"col\">1</th><th scope=\"col\">2</th><th scope=\"col\">3</th><th scope=\"col\">4</th><th scope=\"col\">5</th><th scope=\"col\">6</th></tr></thead><tbody><tr><th scope=\"row\"><i>y</i>（百人）</th><td>4.6</td><td>6.8</td><td>9.7</td><td>14.2</td><td>20.5</td><td>29.9</td></tr></tbody></table></div><p>這些數據以 <span class=\"chem\">y = a b^x</span> 為模型，其中 <span class=\"chem\">a, b &gt; 0</span>。<br>(a) 證明 (Show that) <span class=\"chem\">ln y = ln a + x ln b</span>。<strong>[2]</strong><br>(b) 用 GDC 求 <span class=\"chem\">ln y</span> 對 <span class=\"chem\">x</span> 的迴歸線方程。<strong>[2]</strong><br>(c) 由此求 (Hence find) <span class=\"chem\">a</span> 和 <span class=\"chem\">b</span> 的值。<strong>[2]</strong><br>(d) 利用此模型估計 (Estimate) 8 星期後的追隨者人數，並評論此估計值的可靠程度。<strong>[3]</strong></p>",
      hints: [
        // EN: For (a), apply <span class="chem">ln</span> to both sides and use <span class="chem">ln(PQ) = ln P + ln Q</span> and <span class="chem">ln(b^x) = x ln b</span>.
        "在 (a) 部中，在兩邊取 <span class=\"chem\">ln</span>，並利用 <span class=\"chem\">ln(PQ) = ln P + ln Q</span> 及 <span class=\"chem\">ln(b^x) = x ln b</span>。",
        // EN: For (b), make a new list of <span class="chem">ln y</span> values on your GDC and run linear regression with <span class="chem">x</span> as the independent variable.
        "在 (b) 部中，在 GDC 上建立一個 <span class=\"chem\">ln y</span> 值的新列表，並以 <span class=\"chem\">x</span> 作為自變數進行線性迴歸。",
        // EN: For (c), compare <span class="chem">ln y = mx + c</span> with part (a): <span class="chem">ln b = m</span> and <span class="chem">ln a = c</span>.
        "在 (c) 部中，把 <span class=\"chem\">ln y = mx + c</span> 與 (a) 部比較：<span class=\"chem\">ln b = m</span> 及 <span class=\"chem\">ln a = c</span>。",
        // EN: For (d), remember that <span class="chem">y</span> is measured in hundreds.
        "在 (d) 部中，緊記 <span class=\"chem\">y</span> 是以百人計算的。",
      ],
      // EN: <p>Taking logarithms turns the exponential model into a straight line in <span class="chem">x</span> and <span class="chem">ln y</span>. The gradient gives <span class="chem">ln b</span> and the intercept gives <span class="chem">ln a</span>.</p>
      solution: "<p>取對數後，指數模型會變成以 <span class=\"chem\">x</span> 和 <span class=\"chem\">ln y</span> 表示的直線。斜率給出 <span class=\"chem\">ln b</span>，截距給出 <span class=\"chem\">ln a</span>。</p>",
      // EN: <div class="worked__math">(a) ln <i>y</i> = ln(<i>a b</i><sup><i>x</i></sup>) = ln <i>a</i> + ln(<i>b</i><sup><i>x</i></sup>) = ln <i>a</i> + <i>x</i> ln <i>b</i>.</div><div class="worked__math">(b) With <i>Y</i> = ln <i>y</i>: <i>Y</i> = 0.373<i>x</i> + 1.16 (gradient 0.372875…, intercept 1.159375…).</div><div class="worked__math">(c) <i>b</i> = e<sup>0.372875…</sup> = <b>1.45</b>, <i>a</i> = e<sup>1.159375…</sup> = <b>3.19</b>.</div><div class="worked__math">(d) <i>y</i> = 3.1879… × 1.4519…<sup>8</sup> = 63.0 hundred, so about <b>6300 followers</b>. This is an extrapolation (outside 1 ≤ <i>x</i> ≤ 6), so it is less reliable, although the fit to the data is very close.</div>
      answer: "<div class=\"worked__math\">(a) ln <i>y</i> = ln(<i>a b</i><sup><i>x</i></sup>) = ln <i>a</i> + ln(<i>b</i><sup><i>x</i></sup>) = ln <i>a</i> + <i>x</i> ln <i>b</i>.</div><div class=\"worked__math\">(b) 設 <i>Y</i> = ln <i>y</i>：<i>Y</i> = 0.373<i>x</i> + 1.16（斜率 0.372875…，截距 1.159375…）。</div><div class=\"worked__math\">(c) <i>b</i> = e<sup>0.372875…</sup> = <b>1.45</b>,  <i>a</i> = e<sup>1.159375…</sup> = <b>3.19</b>.</div><div class=\"worked__math\">(d) <i>y</i> = 3.1879… × 1.4519…<sup>8</sup> = 63.0 百人，即約 <b>6300 名追隨者</b>。這是外推（在 1 ≤ <i>x</i> ≤ 6 以外），所以可靠程度較低，雖然模型與數據非常吻合。</div>",
      markscheme: [
        // EN: M1: (a) Takes ln of both sides: ln y = ln(a b^x).
        "M1：(a) 在兩邊取 ln：ln y = ln(a b^x)。",
        // EN: A1: Uses the product and power laws: ln(a b^x) = ln a + ln(b^x) = ln a + x ln b. AG: ln y = ln a + x ln b; the given line itself earns no mark.
        "A1：利用積和冪的對數定律：ln(a b^x) = ln a + ln(b^x) = ln a + x ln b。AG：ln y = ln a + x ln b；單寫出題目已給出的式子不得分。",
        // EN: A1: (b) Gradient 0.373 (0.372875…).
        "A1：(b) 斜率 0.373（0.372875…）。",
        // EN: A1: Intercept 1.16 (1.159375…), so ln y = 0.373x + 1.16.
        "A1：截距 1.16（1.159375…），故 ln y = 0.373x + 1.16。",
        // EN: A1: (c) b = e^0.372875… = 1.45.
        "A1：(c) b = e^0.372875… = 1.45。",
        // EN: A1: a = e^1.159375… = 3.19.
        "A1：a = e^1.159375… = 3.19。",
        // EN: M1: (d) Substitutes x = 8 into the model.
        "M1：(d) 把 x = 8 代入模型。",
        // EN: A1: y ≈ 63.0 hundred, about 6300 followers (accept 62.3 to 63.1 hundred from rounded values of a and b, or of the gradient and intercept).
        "A1：y ≈ 63.0 百人，即約 6300 名追隨者（若使用 a 和 b、或斜率和截距的捨入值，接受 62.3 至 63.1 百人）。",
        // EN: R1: Not reliable, or less reliable, because x = 8 is outside the data range (extrapolation).
        "R1：不可靠或較不可靠，因為 x = 8 在數據範圍以外（外推）。",
      ],
    },

    // ── t1-2-q033 · numeric · exam · SL · SL 1.9 · 5 marks
    "t1-2-q033": {
      // EN: <p>In the expansion of <span class="chem">(1 + ax)^n</span>, where <span class="chem">n</span> is a positive integer, the coefficient of <span class="chem">x</span> is −6.3 and the coefficient of <span class="chem">x^2</span> is 18.9. Find the value of <span class="chem">a</span>.</p>
      stem: "<p>在 <span class=\"chem\">(1 + ax)^n</span> 的展開式中，其中 <span class=\"chem\">n</span> 是正整數，<span class=\"chem\">x</span> 的係數是 −6.3，而 <span class=\"chem\">x^2</span> 的係數是 18.9。求 (Find) <span class=\"chem\">a</span> 的值。</p>",
      hints: [
        // EN: Write the two coefficients: <span class="chem">na = -6.3</span> and <span class="chem">^nC_2 a^2 = n(n - 1)a^2 / 2 = 18.9</span>.
        "寫出兩個係數：<span class=\"chem\">na = -6.3</span> 及 <span class=\"chem\">^nC_2 a^2 = n(n - 1)a^2 / 2 = 18.9</span>。",
        // EN: Substitute <span class="chem">a = -6.3/n</span> into the second equation, or solve the pair with your GDC.
        "把 <span class=\"chem\">a = -6.3/n</span> 代入第二條方程，或用 GDC 解這對方程。",
        // EN: You should find that <span class="chem">n = 21</span>. Then use <span class="chem">na = -6.3</span>.
        "你應得到 <span class=\"chem\">n = 21</span>。然後利用 <span class=\"chem\">na = -6.3</span>。",
      ],
      // EN: <div class="worked__math"><i>na</i> = −6.3 <b>[A1]</b> and <span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span><i>a</i><sup>2</sup> = 18.9 <b>[A1]</b></div><div class="worked__math">Substitute <i>a</i> = −6.3/<i>n</i>: <span class="frac"><span>(<i>n</i> − 1) × 39.69</span><span>2<i>n</i></span></span> = 18.9 <b>[M1]</b> ⇒ 39.69<i>n</i> − 39.69 = 37.8<i>n</i> ⇒ <i>n</i> = 21 <b>[A1]</b></div><div class="worked__math"><i>a</i> = −6.3 / 21 = <b>−0.3</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>na</i> = −6.3   <b>[A1]</b>   及   <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span><i>a</i><sup>2</sup> = 18.9   <b>[A1]</b></div><div class=\"worked__math\">代入 <i>a</i> = −6.3/<i>n</i>：  <span class=\"frac\"><span>(<i>n</i> − 1) × 39.69</span><span>2<i>n</i></span></span> = 18.9   <b>[M1]</b>  ⇒  39.69<i>n</i> − 39.69 = 37.8<i>n</i>  ⇒  <i>n</i> = 21   <b>[A1]</b></div><div class=\"worked__math\"><i>a</i> = −6.3 / 21 = <b>−0.3</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q044 · numeric · exam · SL · SL 1.9 · 4 marks
    "t1-2-q044": {
      // EN: <p>In the expansion of <span class="chem">(2 + x)^n</span>, where <span class="chem">n &gt;= 3</span> is an integer, the coefficient of <span class="chem">x^3</span> is 15360. Find the value of <span class="chem">n</span>.</p>
      stem: "<p>在 <span class=\"chem\">(2 + x)^n</span> 的展開式中，其中 <span class=\"chem\">n &gt;= 3</span> 是整數，<span class=\"chem\">x^3</span> 的係數是 15360。求 (Find) <span class=\"chem\">n</span> 的值。</p>",
      hints: [
        // EN: The term in <span class="chem">x^3</span> is <span class="chem">^nC_3 2^{n-3} x^3</span>.
        "含 <span class=\"chem\">x^3</span> 的項是 <span class=\"chem\">^nC_3 2^{n-3} x^3</span>。",
        // EN: The equation <span class="chem">^nC_3 × 2^{n-3} = 15360</span> cannot be rearranged for <span class="chem">n</span> by hand. Tabulate <span class="mono">nCr(n, 3) × 2^(n − 3)</span> on your GDC for <span class="chem">n = 3, 4, 5, …</span>.
        "方程 <span class=\"chem\">^nC_3 × 2^{n-3} = 15360</span> 不能以人手變換成以 <span class=\"chem\">n</span> 為主項。在 GDC 上對 <span class=\"chem\">n = 3, 4, 5, …</span> 列出 <span class=\"mono\">nCr(n, 3) × 2^(n − 3)</span> 的數值表。",
      ],
      // EN: <div class="worked__math">Coefficient of <i>x</i><sup>3</sup> = <sup><i>n</i></sup>C<sub>3</sub> × 2<sup><i>n</i>−3</sup> <b>[M1]</b>, so <sup><i>n</i></sup>C<sub>3</sub> × 2<sup><i>n</i>−3</sup> = 15360 <b>[A1]</b></div><div class="worked__math">GDC table: <i>n</i> = 9 gives 5376, <i>n</i> = 10 gives 120 × 128 = 15360 <b>[M1]</b></div><div class="worked__math"><b><i>n</i> = 10</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>x</i><sup>3</sup> 的係數 = <sup><i>n</i></sup>C<sub>3</sub> × 2<sup><i>n</i>−3</sup>   <b>[M1]</b>，故 <sup><i>n</i></sup>C<sub>3</sub> × 2<sup><i>n</i>−3</sup> = 15360   <b>[A1]</b></div><div class=\"worked__math\">GDC 數值表：<i>n</i> = 9 給出 5376，<i>n</i> = 10 給出 120 × 128 = 15360   <b>[M1]</b></div><div class=\"worked__math\"><b><i>n</i> = 10</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q034 · numeric · challenge · SL · SL 1.7 · 6 marks
    "t1-2-q034": {
      // EN: <p>On 1 January 2025 town A had 12 000 residents and town B had 8000 residents. Planners model the populations by <span class="chem">P_A = 12000(1.035)^t</span> and <span class="chem">P_B = 8000(1.062)^t</span>, where <span class="chem">t</span> is the time in years after 1 January 2025 and the models are valid for all <span class="chem">t &gt;= 0</span>. Find the calendar year during which the population of town B first becomes larger than the population of town A.</p>
      stem: "<p>在 2025 年 1 月 1 日，A 鎮有 12 000 名居民，B 鎮有 8000 名居民。規劃人員以 <span class=\"chem\">P_A = 12000(1.035)^t</span> 及 <span class=\"chem\">P_B = 8000(1.062)^t</span> 作為人口模型，其中 <span class=\"chem\">t</span> 是 2025 年 1 月 1 日後的時間（以年計），而模型對所有 <span class=\"chem\">t &gt;= 0</span> 均適用。求 (Find) B 鎮人口首次多於 A 鎮人口是在哪一個年份內。</p>",
      hints: [
        // EN: Decode: you need the moment <span class="chem">P_B = P_A</span>, and then you must turn a value of <span class="chem">t</span> into a calendar year. The answer is a year, not a number of years.
        "解碼：你需要求 <span class=\"chem\">P_B = P_A</span> 的時刻，然後把 <span class=\"chem\">t</span> 的值轉換為年份。答案是一個年份，而不是年數。",
        // EN: Set <span class="chem">8000(1.062)^t = 12000(1.035)^t</span> and divide to get <span class="chem">(1.062/1.035)^t = 1.5</span>.
        "設 <span class=\"chem\">8000(1.062)^t = 12000(1.035)^t</span>，相除後得 <span class=\"chem\">(1.062/1.035)^t = 1.5</span>。",
        // EN: Take logarithms: <span class="chem">t = ln 1.5 / ln(1.062/1.035)</span>. Then decide which year contains the date <span class="chem">t</span> years after 1 January 2025.
        "取對數：<span class=\"chem\">t = ln 1.5 / ln(1.062/1.035)</span>。然後判斷 2025 年 1 月 1 日之後 <span class=\"chem\">t</span> 年的日期落在哪一年。",
      ],
      // EN: <p><strong>Decode:</strong> solve an exponential equation for <i>t</i>, then convert “<i>t</i> years after 1 January 2025” into a calendar year.</p><div class="worked__math">8000(1.062)<sup><i>t</i></sup> = 12000(1.035)<sup><i>t</i></sup> <b>[M1]</b> ⇒ (<span class="frac"><span>1.062</span><span>1.035</span></span>)<sup><i>t</i></sup> = 1.5 <b>[A1]</b></div><div class="worked__math"><i>t</i> ln(<span class="frac"><span>1.062</span><span>1.035</span></span>) = ln 1.5 <b>[M1]</b> ⇒ <i>t</i> = 15.744… <b>[A1]</b></div><div class="worked__math">15 &lt; <i>t</i> &lt; 16, and 1 January 2025 + 15 years = 1 January 2040, so the crossing happens during 2040. <b>[R1]</b></div><div class="worked__math"><b>2040</b> <b>[A1]</b></div>
      solution: "<p><strong>解碼：</strong>解一條指數方程求 <i>t</i>，然後把「2025 年 1 月 1 日之後 <i>t</i> 年」轉換為年份。</p><div class=\"worked__math\">8000(1.062)<sup><i>t</i></sup> = 12000(1.035)<sup><i>t</i></sup>   <b>[M1]</b>  ⇒  (<span class=\"frac\"><span>1.062</span><span>1.035</span></span>)<sup><i>t</i></sup> = 1.5   <b>[A1]</b></div><div class=\"worked__math\"><i>t</i> ln(<span class=\"frac\"><span>1.062</span><span>1.035</span></span>) = ln 1.5   <b>[M1]</b>  ⇒  <i>t</i> = 15.744…   <b>[A1]</b></div><div class=\"worked__math\">15 &lt; <i>t</i> &lt; 16，而 2025 年 1 月 1 日 + 15 年 = 2040 年 1 月 1 日，故人口在 2040 年內超越。   <b>[R1]</b></div><div class=\"worked__math\"><b>2040</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q035 · numeric · challenge · SL · SL 1.7 · 6 marks
    "t1-2-q035": {
      // EN: <p>Solve the equation <span class="chem">log_2 x + log_4(x + 3) = 3</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>解 (Solve) 方程 <span class=\"chem\">log_2 x + log_4(x + 3) = 3</span>。答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: the two logarithms have different bases, so the log laws cannot combine them yet. Change both to base 2; the equation then becomes a polynomial that has no exact root you can find by hand, so finish on the GDC.
        "解碼：兩個對數的底不同，所以暫時不能用對數定律把它們合併。先把兩者都換成以 2 為底；方程隨後會變成一個多項式方程，它沒有可以用人手求得的準確根，所以要用 GDC 完成。",
        // EN: Change of base: <span class="chem">log_4(x + 3) = log_2(x + 3) / log_2 4 = (1/2) log_2(x + 3)</span>.
        "換底公式：<span class=\"chem\">log_4(x + 3) = log_2(x + 3) / log_2 4 = (1/2) log_2(x + 3)</span>。",
        // EN: Multiply by 2 and combine: <span class="chem">log_2(x^2(x + 3)) = 6</span>, so <span class="chem">x^3 + 3x^2 - 64 = 0</span>.
        "乘以 2 後合併：<span class=\"chem\">log_2(x^2(x + 3)) = 6</span>，故 <span class=\"chem\">x^3 + 3x^2 - 64 = 0</span>。",
        // EN: Solve the cubic with your GDC and check which roots satisfy <span class="chem">x &gt; 0</span>.
        "用 GDC 解此三次方程，並檢查哪些根滿足 <span class=\"chem\">x &gt; 0</span>。",
      ],
      // EN: <p><strong>Decode:</strong> make the bases match with change of base, combine the logs, then solve the resulting cubic numerically.</p><div class="worked__math">log<sub>4</sub>(<i>x</i> + 3) = <span class="frac"><span>log<sub>2</sub>(<i>x</i> + 3)</span><span>2</span></span> <b>[M1]</b> ⇒ 2 log<sub>2</sub> <i>x</i> + log<sub>2</sub>(<i>x</i> + 3) = 6 <b>[A1]</b></div><div class="worked__math">log<sub>2</sub>(<i>x</i><sup>2</sup>(<i>x</i> + 3)) = 6 ⇒ <i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup> = 64 <b>[M1 A1]</b></div><div class="worked__math">GDC: the cubic <i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup> − 64 = 0 has one real root, <i>x</i> = 3.21023…, and it satisfies <i>x</i> &gt; 0. <b>[R1]</b></div><div class="worked__math"><b><i>x</i> = 3.21</b> <b>[A1]</b></div>
      solution: "<p><strong>解碼：</strong>用換底公式使底相同，合併對數，然後以數值方法解所得的三次方程。</p><div class=\"worked__math\">log<sub>4</sub>(<i>x</i> + 3) = <span class=\"frac\"><span>log<sub>2</sub>(<i>x</i> + 3)</span><span>2</span></span>   <b>[M1]</b>  ⇒  2 log<sub>2</sub> <i>x</i> + log<sub>2</sub>(<i>x</i> + 3) = 6   <b>[A1]</b></div><div class=\"worked__math\">log<sub>2</sub>(<i>x</i><sup>2</sup>(<i>x</i> + 3)) = 6  ⇒  <i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup> = 64   <b>[M1 A1]</b></div><div class=\"worked__math\">GDC：三次方程 <i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup> − 64 = 0 只有一個實根 <i>x</i> = 3.21023…，而它滿足 <i>x</i> &gt; 0。   <b>[R1]</b></div><div class=\"worked__math\"><b><i>x</i> = 3.21</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q036 · numeric · challenge · SL · SL 1.7 · 5 marks
    "t1-2-q036": {
      // EN: <p>Find the value of <span class="chem">x</span> for which <span class="chem">log_3 x = log_5(x + 10)</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>求 (Find) 使 <span class=\"chem\">log_3 x = log_5(x + 10)</span> 成立的 <span class=\"chem\">x</span> 值。答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: two different bases, and the arguments differ too, so no log law collapses this to a simple equation. Rewrite both sides in a base your GDC knows, then solve numerically.
        "解碼：兩個底不同，真數亦不同，所以沒有任何對數定律能把它化為簡單的方程。把兩邊改寫為 GDC 可處理的底，然後以數值方法求解。",
        // EN: Change of base: <span class="chem">ln x / ln 3 = ln(x + 10) / ln 5</span>.
        "換底公式：<span class=\"chem\">ln x / ln 3 = ln(x + 10) / ln 5</span>。",
        // EN: Graph <span class="chem">y = ln x / ln 3</span> and <span class="chem">y = ln(x + 10) / ln 5</span> for <span class="chem">x &gt; 0</span> and find the intersection.
        "在 <span class=\"chem\">x &gt; 0</span> 的範圍內繪畫 <span class=\"chem\">y = ln x / ln 3</span> 和 <span class=\"chem\">y = ln(x + 10) / ln 5</span> 的圖像，並求交點。",
      ],
      // EN: <p><strong>Decode:</strong> change both logarithms to base e, then use the GDC to solve the equation graphically.</p><div class="worked__math"><span class="frac"><span>ln <i>x</i></span><span>ln 3</span></span> = <span class="frac"><span>ln(<i>x</i> + 10)</span><span>ln 5</span></span> <b>[M1 A1]</b></div><div class="worked__math">Graph both sides (or the difference) for <i>x</i> &gt; 0 and find the intersection. <b>[M1]</b></div><div class="worked__math">The curves meet once, at <i>x</i> = 6.88490…, which lies in the domain <i>x</i> &gt; 0. <b>[R1]</b></div><div class="worked__math"><b><i>x</i> = 6.88</b> <b>[A1]</b></div>
      solution: "<p><strong>解碼：</strong>把兩個對數都換成以 e 為底，然後用 GDC 以圖像法解方程。</p><div class=\"worked__math\"><span class=\"frac\"><span>ln <i>x</i></span><span>ln 3</span></span> = <span class=\"frac\"><span>ln(<i>x</i> + 10)</span><span>ln 5</span></span>   <b>[M1 A1]</b></div><div class=\"worked__math\">在 <i>x</i> &gt; 0 的範圍內繪畫兩邊（或其差）的圖像，並求交點。   <b>[M1]</b></div><div class=\"worked__math\">兩條曲線只相交一次，交點在 <i>x</i> = 6.88490…，位於定義域 <i>x</i> &gt; 0 之內。   <b>[R1]</b></div><div class=\"worked__math\"><b><i>x</i> = 6.88</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q037 · numeric · challenge · SL · SL 1.5 · 4 marks
    "t1-2-q037": {
      // EN: <p>When the number <span class="chem">7^{100}</span> is written out in full in base 10, how many digits does it have?</p>
      stem: "<p>把數 <span class=\"chem\">7^{100}</span> 以十進制（以 10 為底）完整寫出時，它共有多少位數字？</p>",
      hints: [
        // EN: Decode: the number of digits tells you which powers of 10 the number lies between. A whole number with <span class="chem">k</span> digits satisfies <span class="chem">10^{k-1} &lt;= N &lt; 10^k</span>, so this is a base-10 logarithm question.
        "解碼：位數告訴你這個數介乎哪兩個 10 的冪之間。一個 <span class=\"chem\">k</span> 位的整數滿足 <span class=\"chem\">10^{k-1} &lt;= N &lt; 10^k</span>，所以這是一道以 10 為底的對數題。",
        // EN: Find <span class="chem">log(7^{100}) = 100 log 7</span> on your GDC.
        "用 GDC 求 <span class=\"chem\">log(7^{100}) = 100 log 7</span>。",
        // EN: If <span class="chem">log N = 84.5…</span>, then <span class="chem">10^{84} &lt;= N &lt; 10^{85}</span>. How many digits is that?
        "若 <span class=\"chem\">log N = 84.5…</span>，則 <span class=\"chem\">10^{84} &lt;= N &lt; 10^{85}</span>。那是多少位數字？",
      ],
      // EN: <p><strong>Decode:</strong> counting digits means locating the number between consecutive powers of 10, which is what log base 10 measures.</p><div class="worked__math">A whole number <i>N</i> with <i>k</i> digits satisfies 10<sup><i>k</i>−1</sup> ≤ <i>N</i> &lt; 10<sup><i>k</i></sup>. <b>[M1]</b></div><div class="worked__math">log(7<sup>100</sup>) = 100 log 7 = 84.5098… <b>[A1]</b></div><div class="worked__math">So 10<sup>84</sup> ≤ 7<sup>100</sup> &lt; 10<sup>85</sup> (indeed 7<sup>100</sup> ≈ 3.23 × 10<sup>84</sup>). <b>[R1]</b></div><div class="worked__math"><b>85 digits</b> <b>[A1]</b></div>
      solution: "<p><strong>解碼：</strong>數位數就是要找出這個數位於哪兩個相鄰的 10 的冪之間，而這正是以 10 為底的對數所量度的。</p><div class=\"worked__math\">一個 <i>k</i> 位的整數 <i>N</i> 滿足 10<sup><i>k</i>−1</sup> ≤ <i>N</i> &lt; 10<sup><i>k</i></sup>。   <b>[M1]</b></div><div class=\"worked__math\">log(7<sup>100</sup>) = 100 log 7 = 84.5098…   <b>[A1]</b></div><div class=\"worked__math\">故 10<sup>84</sup> ≤ 7<sup>100</sup> &lt; 10<sup>85</sup>（事實上 7<sup>100</sup> ≈ 3.23 × 10<sup>84</sup>）。   <b>[R1]</b></div><div class=\"worked__math\"><b>85 位數字</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q038 · numeric · challenge · SL · SL 1.5, 1.7 · 5 marks
    "t1-2-q038": {
      // EN: <p>A sheet of paper is 0.08 mm thick. Each time it is folded in half, the thickness of the folded stack doubles. Assume, unrealistically, that the paper can be folded as many times as needed. The mean distance from the Earth to the Moon is 384 400 km. Find the minimum number of folds needed for the thickness of the stack to be greater than this distance.</p>
      stem: "<p>一張紙厚 0.08 mm。每對摺一次，摺疊後紙疊的厚度便加倍。假設（雖然不切實際）紙張可以按需要摺疊任意多次。地球與月球之間的平均距離是 384 400 km。求 (Find) 使紙疊厚度大於此距離所需的最少摺疊次數。</p>",
      hints: [
        // EN: Decode: after <span class="chem">n</span> folds the thickness is <span class="chem">0.08 × 2^n</span> mm. You need the smallest whole number <span class="chem">n</span> that beats the distance, and the two lengths are in different units.
        "解碼：摺疊 <span class=\"chem\">n</span> 次後，厚度為 <span class=\"chem\">0.08 × 2^n</span> mm。你需要找出使厚度超過該距離的最小整數 <span class=\"chem\">n</span>，而且兩個長度的單位不同。",
        // EN: Convert: <span class="chem">384400</span> km <span class="chem">= 384400 × 10^6</span> mm <span class="chem">= 3.844 × 10^{11}</span> mm.
        "轉換單位：<span class=\"chem\">384400</span> km <span class=\"chem\">= 384400 × 10^6</span> mm <span class=\"chem\">= 3.844 × 10^{11}</span> mm。",
        // EN: Solve <span class="chem">0.08 × 2^n &gt; 3.844 × 10^{11}</span> with logarithms, then round <strong>up</strong> to the next integer.
        "用對數解 <span class=\"chem\">0.08 × 2^n &gt; 3.844 × 10^{11}</span>，然後<strong>向上</strong>取至下一個整數。",
      ],
      // EN: <p><strong>Decode:</strong> a doubling model with an inequality, a unit conversion and a “whole number of folds” condition.</p><div class="worked__math">384 400 km = 3.844 × 10<sup>11</sup> mm <b>[A1]</b></div><div class="worked__math">0.08 × 2<sup><i>n</i></sup> &gt; 3.844 × 10<sup>11</sup> ⇒ 2<sup><i>n</i></sup> &gt; 4.805 × 10<sup>12</sup> <b>[M1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln(4.805 × 10<sup>12</sup>)</span><span>ln 2</span></span> <b>[M1]</b> = 42.13… <b>[A1]</b></div><div class="worked__math"><i>n</i> must be a whole number, so <b>43 folds</b>. <b>[A1]</b></div>
      solution: "<p><strong>解碼：</strong>這是一個帶不等式的倍增模型，並涉及單位轉換和「摺疊次數須為整數」的條件。</p><div class=\"worked__math\">384 400 km = 3.844 × 10<sup>11</sup> mm   <b>[A1]</b></div><div class=\"worked__math\">0.08 × 2<sup><i>n</i></sup> &gt; 3.844 × 10<sup>11</sup>  ⇒  2<sup><i>n</i></sup> &gt; 4.805 × 10<sup>12</sup>   <b>[M1]</b></div><div class=\"worked__math\"><i>n</i> &gt; <span class=\"frac\"><span>ln(4.805 × 10<sup>12</sup>)</span><span>ln 2</span></span>   <b>[M1]</b>   = 42.13…   <b>[A1]</b></div><div class=\"worked__math\"><i>n</i> 必須是整數，故需 <b>43 次摺疊</b>。   <b>[A1]</b></div>",
    },

    // ── t1-2-q039 · numeric · challenge · SL · SL 1.9 · 5 marks
    "t1-2-q039": {
      // EN: <p>The expansion of <span class="chem">(3 + 2x)^{12}</span> is written in ascending powers of <span class="chem">x</span>. Find the exact value of the greatest coefficient in this expansion.</p>
      stem: "<p>把 <span class=\"chem\">(3 + 2x)^{12}</span> 的展開式按 <span class=\"chem\">x</span> 的升冪排列。求 (Find) 此展開式中最大係數的準確值。</p>",
      hints: [
        // EN: Decode: “the greatest coefficient” is not the first or the last one. Each power <span class="chem">x^r</span> has its own coefficient, and you must compare all thirteen of them.
        "解碼：「最大係數」並不是首項或末項的係數。每個冪 <span class=\"chem\">x^r</span> 都有自己的係數，你必須比較全部十三個係數。",
        // EN: The coefficient of <span class="chem">x^r</span> is <span class="chem">c_r = ^{12}C_r × 3^{12-r} × 2^r</span>.
        "<span class=\"chem\">x^r</span> 的係數是 <span class=\"chem\">c_r = ^{12}C_r × 3^{12-r} × 2^r</span>。",
        // EN: Enter <span class="chem">c_r</span> as a function of <span class="chem">r</span> in the GDC table for <span class="chem">r = 0, 1, …, 12</span> and read off the largest value. Check its neighbours.
        "在 GDC 數值表中把 <span class=\"chem\">c_r</span> 輸入為 <span class=\"chem\">r</span> 的函數，取 <span class=\"chem\">r = 0, 1, …, 12</span>，然後讀出最大值。檢查其前後的數值。",
      ],
      // EN: <p><strong>Decode:</strong> list the coefficient of every power of <i>x</i> and find the largest; a GDC table does the comparison.</p><div class="worked__math">Coefficient of <i>x</i><sup><i>r</i></sup>: <i>c</i><sub><i>r</i></sub> = <sup>12</sup>C<sub><i>r</i></sub> × 3<sup>12−<i>r</i></sup> × 2<sup><i>r</i></sup> <b>[M1 A1]</b></div><div class="worked__math">GDC table for <i>r</i> = 0, …, 12 <b>[M1]</b>: <i>c</i><sub>4</sub> = 51 963 120, <i>c</i><sub>5</sub> = 55 427 328, <i>c</i><sub>6</sub> = 43 110 144, so the maximum is at <i>r</i> = 5 <b>[A1]</b></div><div class="worked__math">Greatest coefficient = <b>55 427 328</b> (the coefficient of <i>x</i><sup>5</sup>) <b>[A1]</b></div>
      solution: "<p><strong>解碼：</strong>列出 <i>x</i> 每個冪的係數並找出最大者；GDC 數值表可以完成比較。</p><div class=\"worked__math\"><i>x</i><sup><i>r</i></sup> 的係數：<i>c</i><sub><i>r</i></sub> = <sup>12</sup>C<sub><i>r</i></sub> × 3<sup>12−<i>r</i></sup> × 2<sup><i>r</i></sup>   <b>[M1 A1]</b></div><div class=\"worked__math\">取 <i>r</i> = 0, …, 12 的 GDC 數值表   <b>[M1]</b>：<i>c</i><sub>4</sub> = 51 963 120，<i>c</i><sub>5</sub> = 55 427 328，<i>c</i><sub>6</sub> = 43 110 144，故最大值出現在 <i>r</i> = 5   <b>[A1]</b></div><div class=\"worked__math\">最大係數 = <b>55 427 328</b>（<i>x</i><sup>5</sup> 的係數）   <b>[A1]</b></div>",
    },

    // ── t1-2-q040 · short · challenge · SL · SL 1.5, 1.7 · 8 marks
    "t1-2-q040": {
      // EN: <p>Astronomers measure the brightness of a star by its apparent magnitude <span class="chem">m</span>. For two stars with magnitudes <span class="chem">m_1</span> and <span class="chem">m_2</span>, and light fluxes <span class="chem">F_1</span> and <span class="chem">F_2</span> reaching the Earth, <span class="chem">m_1 - m_2 = -2.5 log(F_1/F_2)</span>, where log is to base 10. Brighter stars have smaller magnitudes.<br>(a) Star P has magnitude 2.4 and star Q has magnitude 5.9. Find <span class="chem">F_P / F_Q</span>. <strong>[3]</strong><br>(b) The faintest stars visible to the naked eye have magnitude 6.5. A small telescope can show stars that are 600 times fainter than this. Find the magnitude of the faintest stars visible through this telescope. <strong>[2]</strong><br>(c) Two stars, each of magnitude 4.0, are so close together that they appear as a single point of light. The flux from this point is the sum of the two fluxes. Find the magnitude of the point. <strong>[3]</strong></p>
      stem: "<p>天文學家以視星等 <span class=\"chem\">m</span> 量度恆星的亮度。對於星等分別為 <span class=\"chem\">m_1</span> 和 <span class=\"chem\">m_2</span>、到達地球的光通量分別為 <span class=\"chem\">F_1</span> 和 <span class=\"chem\">F_2</span> 的兩顆恆星，<span class=\"chem\">m_1 - m_2 = -2.5 log(F_1/F_2)</span>，其中 log 以 10 為底。愈亮的恆星，星等愈小。<br>(a) 恆星 P 的星等為 2.4，恆星 Q 的星等為 5.9。求 (Find) <span class=\"chem\">F_P / F_Q</span>。<strong>[3]</strong><br>(b) 肉眼可見最暗的恆星星等為 6.5。一台小型望遠鏡能看見比這暗 600 倍的恆星。求 (Find) 通過此望遠鏡可見最暗恆星的星等。<strong>[2]</strong><br>(c) 兩顆星等均為 4.0 的恆星靠得非常近，看起來像單一光點。此光點的光通量是兩者光通量之和。求 (Find) 此光點的星等。<strong>[3]</strong></p>",
      hints: [
        // EN: Decode: this is a logarithmic scale. Differences of magnitudes correspond to ratios of fluxes, and “times fainter” and “sum of fluxes” must be turned into a flux ratio before you use the formula.
        "解碼：這是一個對數標度。星等之差對應光通量之比；在使用公式之前，必須把「暗多少倍」和「光通量之和」轉化為光通量之比。",
        // EN: For (a), substitute <span class="chem">m_1 = 2.4</span> and <span class="chem">m_2 = 5.9</span>, then divide by −2.5 and undo the log.
        "在 (a) 部中，代入 <span class=\"chem\">m_1 = 2.4</span> 及 <span class=\"chem\">m_2 = 5.9</span>，然後除以 −2.5 並消去對數。",
        // EN: For (b), let star 1 be the faintest telescope star and star 2 the faintest naked-eye star. Then <span class="chem">F_1 / F_2 = 1/600</span>.
        "在 (b) 部中，設恆星 1 為望遠鏡可見最暗的恆星，恆星 2 為肉眼可見最暗的恆星。則 <span class=\"chem\">F_1 / F_2 = 1/600</span>。",
        // EN: For (c), compare the point (flux <span class="chem">2F</span>) with one star (flux <span class="chem">F</span>, magnitude 4.0).
        "在 (c) 部中，把光點（光通量 <span class=\"chem\">2F</span>）與單一恆星（光通量 <span class=\"chem\">F</span>，星等 4.0）比較。",
      ],
      // EN: <p><strong>Decode:</strong> on a log scale, multiplying a flux by a factor adds a fixed amount to the magnitude. Every part becomes “find a flux ratio, then substitute”. In (c), doubling the flux lowers the magnitude by <span class="chem">2.5 log 2 ≈ 0.753</span>.</p>
      solution: "<p><strong>解碼：</strong>在對數標度上，光通量乘以某個倍數，相當於星等加上一個固定的量。每一部分都變成「求光通量之比，然後代入」。在 (c) 部中，光通量加倍使星等減少 <span class=\"chem\">2.5 log 2 ≈ 0.753</span>。</p>",
      // EN: <div class="worked__math">(a) 2.4 − 5.9 = −2.5 log(<i>F</i><sub>P</sub>/<i>F</i><sub>Q</sub>) ⇒ log(<i>F</i><sub>P</sub>/<i>F</i><sub>Q</sub>) = 1.4 ⇒ <i>F</i><sub>P</sub>/<i>F</i><sub>Q</sub> = 10<sup>1.4</sup> = <b>25.1</b>.</div><div class="worked__math">(b) “600 times fainter” means <i>F</i><sub>T</sub>/<i>F</i><sub>6.5</sub> = 1/600, so <i>m</i> − 6.5 = −2.5 log(1/600) = 2.5 log 600 ⇒ <i>m</i> = <b>13.4</b> (13.445…).</div><div class="worked__math">(c) Fluxes add, so <i>F</i><sub>point</sub> = 2<i>F</i>, where <i>F</i> is the flux of one star. <i>m</i> − 4.0 = −2.5 log 2 ⇒ <i>m</i> = <b>3.25</b> (3.2474…). The magnitudes do not add: the pair is brighter, so its magnitude is smaller than 4.0.</div>
      answer: "<div class=\"worked__math\">(a) 2.4 − 5.9 = −2.5 log(<i>F</i><sub>P</sub>/<i>F</i><sub>Q</sub>)  ⇒  log(<i>F</i><sub>P</sub>/<i>F</i><sub>Q</sub>) = 1.4  ⇒  <i>F</i><sub>P</sub>/<i>F</i><sub>Q</sub> = 10<sup>1.4</sup> = <b>25.1</b>.</div><div class=\"worked__math\">(b)「暗 600 倍」表示 <i>F</i><sub>T</sub>/<i>F</i><sub>6.5</sub> = 1/600，故 <i>m</i> − 6.5 = −2.5 log(1/600) = 2.5 log 600  ⇒  <i>m</i> = <b>13.4</b>（13.445…）。</div><div class=\"worked__math\">(c) 光通量相加，故 <i>F</i><sub>point</sub> = 2<i>F</i>，其中 <i>F</i> 是單一恆星的光通量。<i>m</i> − 4.0 = −2.5 log 2  ⇒  <i>m</i> = <b>3.25</b>（3.2474…）。星等並不相加：這對恆星較亮，所以其星等小於 4.0。</div>",
      markscheme: [
        // EN: M1: (a) Substitutes: 2.4 − 5.9 = −2.5 log(F_P/F_Q).
        "M1：(a) 代入：2.4 − 5.9 = −2.5 log(F_P/F_Q)。",
        // EN: A1: log(F_P/F_Q) = 1.4.
        "A1：log(F_P/F_Q) = 1.4。",
        // EN: A1: F_P/F_Q = 10^1.4 = 25.1.
        "A1：F_P/F_Q = 10^1.4 = 25.1。",
        // EN: M1: (b) Uses a flux ratio of 1/600 (or 600 the other way round) with the formula: m − 6.5 = −2.5 log(1/600).
        "M1：(b) 在公式中使用光通量之比 1/600（或反過來的 600）：m − 6.5 = −2.5 log(1/600)。",
        // EN: A1: m = 13.4 (13.445…).
        "A1：m = 13.4（13.445…）。",
        // EN: R1: (c) Recognises that the fluxes add (F_point = 2F) and the magnitudes do not (the answer is not 8.0 or 4.0).
        "R1：(c) 認出光通量相加（F_point = 2F）而星等不相加（答案不是 8.0 或 4.0）。",
        // EN: M1: m − 4.0 = −2.5 log(2F/F) = −2.5 log 2.
        "M1：m − 4.0 = −2.5 log(2F/F) = −2.5 log 2。",
        // EN: A1: m = 3.25 (3.2474…).
        "A1：m = 3.25（3.2474…）。",
      ],
    },

    // ── t1-2-q041 · short · challenge · SL · SL 1.9, 4.8 · 7 marks
    "t1-2-q041": {
      // EN: <p>A factory finds that 6% of the microchips it makes are faulty. Chips are packed in boxes of 15. A quality engineer explains that when <span class="chem">(0.94 + 0.06)^{15}</span> is expanded with the binomial theorem, the term <span class="chem">^{15}C_r (0.94)^{15-r} (0.06)^r</span> gives the probability that a box contains exactly <span class="chem">r</span> faulty chips.<br>(a) Write down the value of the sum of all the terms of the expansion, and explain why this value makes sense. <strong>[2]</strong><br>(b) Find the probability that a box contains exactly 2 faulty chips. <strong>[2]</strong><br>(c) A box is rejected if it contains more than 2 faulty chips. Find the probability that a box is rejected. <strong>[3]</strong></p>
      stem: "<p>某工廠發現其生產的微晶片中有 6% 是次品。晶片以每盒 15 片包裝。一位品質工程師解釋：用二項式定理展開 <span class=\"chem\">(0.94 + 0.06)^{15}</span> 時，項 <span class=\"chem\">^{15}C_r (0.94)^{15-r} (0.06)^r</span> 給出一盒恰有 <span class=\"chem\">r</span> 片次品的概率。<br>(a) 寫出 (Write down) 展開式所有項之和的值，並解釋 (Explain) 為何這個值是合理的。<strong>[2]</strong><br>(b) 求 (Find) 一盒恰有 2 片次品的概率。<strong>[2]</strong><br>(c) 若一盒含多於 2 片次品，該盒便會被拒收。求 (Find) 一盒被拒收的概率。<strong>[3]</strong></p>",
      hints: [
        // EN: Decode: this is the binomial theorem in disguise. Each term of the expansion is the probability of a different number of faulty chips, so “more than 2” means adding many terms, or using the total from (a).
        "解碼：這是偽裝了的二項式定理。展開式的每一項都是不同次品數目的概率，所以「多於 2」意味着要把很多項相加，或利用 (a) 部的總和。",
        // EN: For (a), simplify the bracket before you raise it to the power 15.
        "在 (a) 部中，先化簡括號，再把它提升至 15 次冪。",
        // EN: For (b), substitute <span class="chem">r = 2</span>; your GDC gives <span class="chem">^{15}C_2</span>.
        "在 (b) 部中，代入 <span class=\"chem\">r = 2</span>；GDC 可給出 <span class=\"chem\">^{15}C_2</span>。",
        // EN: For (c), it is quicker to subtract the terms for <span class="chem">r = 0, 1, 2</span> from the total than to add thirteen terms.
        "在 (c) 部中，從總和減去 <span class=\"chem\">r = 0, 1, 2</span> 的各項，比把十三項相加更快。",
      ],
      // EN: <p><strong>Decode:</strong> the expansion of <span class="chem">(q + p)^n</span> with <span class="chem">p + q = 1</span> lists the probabilities of 0, 1, 2, … faulty chips. Its total is 1, so “more than 2” is 1 minus the first three terms. (This is the binomial distribution of SL 4.8, here built from the binomial theorem.)</p>
      solution: "<p><strong>解碼：</strong>在 <span class=\"chem\">p + q = 1</span> 的條件下，<span class=\"chem\">(q + p)^n</span> 的展開式列出了 0、1、2、… 片次品的概率。其總和是 1，所以「多於 2」就是 1 減去首三項。（這就是 SL 4.8 的二項分佈，這裏由二項式定理建構出來。）</p>",
      // EN: <div class="worked__math">(a) (0.94 + 0.06)<sup>15</sup> = 1<sup>15</sup> = <b>1</b>. The terms cover every possible number of faulty chips (0 to 15), and the probabilities of all the possible outcomes add up to 1.</div><div class="worked__math">(b) <sup>15</sup>C<sub>2</sub> (0.94)<sup>13</sup>(0.06)<sup>2</sup> = 105 × 0.94<sup>13</sup> × 0.0036 = <b>0.169</b> (0.169104…).</div><div class="worked__math">(c) “More than 2” is everything except <i>r</i> = 0, 1, 2. Sum of the terms for <i>r</i> = 0, 1, 2 = 0.395292… + 0.378471… + 0.169104… = 0.942867…, so P(rejected) = 1 − 0.942867… = <b>0.0571</b>.</div>
      answer: "<div class=\"worked__math\">(a) (0.94 + 0.06)<sup>15</sup> = 1<sup>15</sup> = <b>1</b>。這些項涵蓋所有可能的次品數目（0 至 15），而所有可能結果的概率之和是 1。</div><div class=\"worked__math\">(b) <sup>15</sup>C<sub>2</sub> (0.94)<sup>13</sup>(0.06)<sup>2</sup> = 105 × 0.94<sup>13</sup> × 0.0036 = <b>0.169</b>（0.169104…）。</div><div class=\"worked__math\">(c)「多於 2」是除 <i>r</i> = 0, 1, 2 以外的所有情況。<i>r</i> = 0, 1, 2 各項之和 = 0.395292… + 0.378471… + 0.169104… = 0.942867…，故 P(rejected) = 1 − 0.942867… = <b>0.0571</b>。</div>",
      markscheme: [
        // EN: A1: (a) The sum is (0.94 + 0.06)^15 = 1.
        "A1：(a) 總和為 (0.94 + 0.06)^15 = 1。",
        // EN: R1: The terms give the probabilities of all possible outcomes (r = 0 to 15), which must add up to 1.
        "R1：這些項給出所有可能結果（r = 0 至 15）的概率，其總和必須是 1。",
        // EN: M1: (b) Uses ¹⁵C₂ (0.94)^13 (0.06)^2.
        "M1：(b) 使用 ¹⁵C₂ (0.94)^13 (0.06)^2。",
        // EN: A1: 0.169 (0.169104…).
        "A1：0.169（0.169104…）。",
        // EN: R1: (c) Interprets “more than 2” as 1 − (sum of the terms for r = 0, 1 and 2), or as the sum of the terms for r = 3 to 15.
        "R1：(c) 把「多於 2」理解為 1 −（r = 0、1 及 2 各項之和），或理解為 r = 3 至 15 各項之和。",
        // EN: M1: Evaluates the terms for r = 0, 1, 2 (sum 0.942867…).
        "M1：計算 r = 0, 1, 2 的各項（總和 0.942867…）。",
        // EN: A1: P(rejected) = 0.0571 (0.057133…).
        "A1：P(rejected) = 0.0571（0.057133…）。",
      ],
    },

    // ── t1-2-q042 · short · challenge · SL · SL 1.7 · 8 marks
    "t1-2-q042": {
      // EN: <p>The mass of carbon-14 in a dead piece of wood decreases according to <span class="chem">N = N_0 e^{-lambda t}</span>, where <span class="chem">N_0</span> is the mass at the time the tree died and <span class="chem">t</span> is measured in years. The half-life of carbon-14 is 5730 years.<br>(a) Show that <span class="chem">lambda = ln 2 / 5730</span>, and find <span class="chem">lambda</span> correct to 3 significant figures. <strong>[2]</strong><br>(b) A wooden tool contains 37% of the carbon-14 that it contained when the tree died. Estimate the age of the tool, correct to 3 significant figures. <strong>[3]</strong><br>(c) The laboratory says that the 37% figure could be wrong by up to 2 percentage points in either direction. Find the range of possible ages of the tool, and the width of this range to the nearest 10 years. <strong>[3]</strong></p>
      stem: "<p>一塊枯木中碳-14 的質量按 <span class=\"chem\">N = N_0 e^{-lambda t}</span> 減少，其中 <span class=\"chem\">N_0</span> 是樹木死亡時的質量，<span class=\"chem\">t</span> 以年計。碳-14 的半衰期是 5730 年。<br>(a) 證明 (Show that) <span class=\"chem\">lambda = ln 2 / 5730</span>，並求 (Find) <span class=\"chem\">lambda</span>，答案須準確至 3 位有效數字。<strong>[2]</strong><br>(b) 一件木製工具所含的碳-14 是樹木死亡時的 37%。估計 (Estimate) 該工具的年齡，答案須準確至 3 位有效數字。<strong>[3]</strong><br>(c) 化驗所表示，37% 這個數字可能向上或向下偏差最多 2 個百分點。求 (Find) 該工具可能年齡的範圍，以及此範圍的闊度，答案須準確至最接近的 10 年。<strong>[3]</strong></p>",
      hints: [
        // EN: Decode: “half-life” is a condition that fixes <span class="chem">lambda</span>; “37% of the carbon-14” means <span class="chem">N = 0.37N_0</span>; “±2 percentage points” means 35% and 39%, and you must work out which of these gives the older age.
        "解碼：「半衰期」是確定 <span class=\"chem\">lambda</span> 的條件；「碳-14 的 37%」表示 <span class=\"chem\">N = 0.37N_0</span>；「±2 個百分點」表示 35% 和 39%，你必須判斷哪一個對應較大的年齡。",
        // EN: For (a), put <span class="chem">N = N_0 / 2</span> when <span class="chem">t = 5730</span>.
        "在 (a) 部中，當 <span class=\"chem\">t = 5730</span> 時設 <span class=\"chem\">N = N_0 / 2</span>。",
        // EN: For (b), <span class="chem">N_0</span> cancels: solve <span class="chem">0.37 = e^{-lambda t}</span>.
        "在 (b) 部中，<span class=\"chem\">N_0</span> 會消去：解 <span class=\"chem\">0.37 = e^{-lambda t}</span>。",
        // EN: For (c), repeat (b) with 0.35 and 0.39. Less carbon-14 remaining means more time has passed.
        "在 (c) 部中，以 0.35 和 0.39 重複 (b) 部。剩餘的碳-14 愈少，表示經過的時間愈長。",
      ],
      // EN: <p><strong>Decode:</strong> the half-life gives the decay constant, each percentage gives an equation <span class="chem">p = e^{-lambda t}</span>, and the measurement error becomes a pair of ages. A ±2-point error in the percentage gives an age uncertainty of nearly 900 years.</p>
      solution: "<p><strong>解碼：</strong>半衰期給出衰變常數，每個百分比給出一條方程 <span class=\"chem\">p = e^{-lambda t}</span>，而量度誤差則變成一對年齡。百分比 ±2 個百分點的誤差，會導致接近 900 年的年齡不確定性。</p>",
      // EN: <div class="worked__math">(a) <span class="frac"><span>1</span><span>2</span></span><i>N</i><sub>0</sub> = <i>N</i><sub>0</sub>e<sup>−5730λ</sup> ⇒ −5730λ = ln <span class="frac"><span>1</span><span>2</span></span> = −ln 2 ⇒ λ = <span class="frac"><span>ln 2</span><span>5730</span></span> = <b>1.21 × 10<sup>−4</sup></b>.</div><div class="worked__math">(b) 0.37 = e<sup>−λ<i>t</i></sup> ⇒ <i>t</i> = <span class="frac"><span>ln(1/0.37)</span><span>λ</span></span> = 8219.1… ≈ <b>8220 years</b>.</div><div class="worked__math">(c) More carbon-14 left means a younger tool. 39% gives <i>t</i> = 7783.9…, and 35% gives <i>t</i> = 8678.5…. So 7780 ≲ <i>t</i> ≲ 8680 years, a range of width about <b>890 years</b> (894.6…).</div>
      answer: "<div class=\"worked__math\">(a) <span class=\"frac\"><span>1</span><span>2</span></span><i>N</i><sub>0</sub> = <i>N</i><sub>0</sub>e<sup>−5730λ</sup>  ⇒  −5730λ = ln <span class=\"frac\"><span>1</span><span>2</span></span> = −ln 2  ⇒  λ = <span class=\"frac\"><span>ln 2</span><span>5730</span></span> = <b>1.21 × 10<sup>−4</sup></b>.</div><div class=\"worked__math\">(b) 0.37 = e<sup>−λ<i>t</i></sup>  ⇒  <i>t</i> = <span class=\"frac\"><span>ln(1/0.37)</span><span>λ</span></span> = 8219.1… ≈ <b>8220 年</b>。</div><div class=\"worked__math\">(c) 剩餘的碳-14 愈多，工具愈年輕。39% 給出 <i>t</i> = 7783.9…，35% 給出 <i>t</i> = 8678.5…。故 7780 ≲ <i>t</i> ≲ 8680 年，範圍闊度約為 <b>890 年</b>（894.6…）。</div>",
      markscheme: [
        // EN: M1: (a) Sets N_0/2 = N_0 e^(−5730λ) and takes ln: −5730λ = −ln 2. AG: λ = ln 2 / 5730; the given line itself earns no mark.
        "M1：(a) 設 N_0/2 = N_0 e^(−5730λ) 並取 ln：−5730λ = −ln 2。AG：λ = ln 2 / 5730；單寫出題目已給出的式子不得分。",
        // EN: A1: λ = 1.21 × 10^(−4) (0.000120968…).
        "A1：λ = 1.21 × 10^(−4)（0.000120968…）。",
        // EN: M1: (b) Sets 0.37 = e^(−λt).
        "M1：(b) 設 0.37 = e^(−λt)。",
        // EN: A1: t = ln(1/0.37)/λ (or −ln 0.37/λ).
        "A1：t = ln(1/0.37)/λ（或 −ln 0.37/λ）。",
        // EN: A1: t = 8220 years (8219.1…).
        "A1：t = 8220 年（8219.1…）。",
        // EN: R1: (c) Pairs the larger percentage (39%) with the younger age and the smaller percentage (35%) with the older age.
        "R1：(c) 把較大的百分比（39%）配對較年輕的年齡，把較小的百分比（35%）配對較老的年齡。",
        // EN: A1: Range 7780 to 8680 years (7783.9… to 8678.5…).
        "A1：範圍為 7780 至 8680 年（7783.9… 至 8678.5…）。",
        // EN: A1: Width 890 years (894.6…; accept 895 or 900 from rounded ages).
        "A1：闊度 890 年（894.6…；若由捨入後的年齡計算，接受 895 或 900）。",
      ],
    },

    // ── t1-2-q043 · short · challenge · SL · SL 1.9 · 8 marks
    "t1-2-q043": {
      // EN: <p>A bank pays interest at a nominal annual rate of 100%, compounded <span class="chem">n</span> times per year, so that an investment of $1 is worth <span class="chem">(1 + 1/n)^n</span> dollars after one year.<br>(a) Use the binomial theorem to show that the first four terms of the expansion of <span class="chem">(1 + 1/n)^n</span> are <span class="chem">1 + 1 + (n - 1)/(2n) + ((n - 1)(n - 2))/(6n^2)</span>. <strong>[3]</strong><br>(b) For monthly compounding, <span class="chem">n = 12</span>. Calculate the sum of these four terms, and use your GDC to find the value of <span class="chem">(1 + 1/12)^{12}</span>. Give both answers correct to 4 significant figures. <strong>[3]</strong><br>(c) Explain why the four-term sum is less than <span class="chem">(1 + 1/n)^n</span> for every <span class="chem">n &gt;= 4</span>. <strong>[1]</strong><br>(d) Write down the limit of the four-term sum as <span class="chem">n</span> becomes very large. <strong>[1]</strong></p>
      stem: "<p>某銀行以名義年利率 100% 支付利息，每年計算複利 <span class=\"chem\">n</span> 次，因此投資 $1 一年後的價值為 <span class=\"chem\">(1 + 1/n)^n</span> 元。<br>(a) 利用二項式定理證明 (Show that) <span class=\"chem\">(1 + 1/n)^n</span> 展開式的首四項是 <span class=\"chem\">1 + 1 + (n - 1)/(2n) + ((n - 1)(n - 2))/(6n^2)</span>。<strong>[3]</strong><br>(b) 每月計算複利時，<span class=\"chem\">n = 12</span>。計算 (Calculate) 這四項之和，並用 GDC 求 <span class=\"chem\">(1 + 1/12)^{12}</span> 的值。兩個答案均須準確至 4 位有效數字。<strong>[3]</strong><br>(c) 解釋 (Explain) 為何對每一個 <span class=\"chem\">n &gt;= 4</span>，四項之和都小於 <span class=\"chem\">(1 + 1/n)^n</span>。<strong>[1]</strong><br>(d) 寫出 (Write down) 當 <span class=\"chem\">n</span> 變得非常大時四項之和的極限。<strong>[1]</strong></p>",
      hints: [
        // EN: Decode: compound interest is the hook, but the question is a binomial expansion with <span class="chem">a = 1</span> and <span class="chem">b = 1/n</span>. You only need the terms for <span class="chem">r = 0, 1, 2, 3</span>.
        "解碼：複利息只是引子，題目其實是 <span class=\"chem\">a = 1</span> 及 <span class=\"chem\">b = 1/n</span> 的二項式展開。你只需要 <span class=\"chem\">r = 0, 1, 2, 3</span> 的各項。",
        // EN: For (a), write <span class="chem">^nC_2 = n(n - 1)/2</span> and <span class="chem">^nC_3 = n(n - 1)(n - 2)/6</span>, then cancel one factor of <span class="chem">n</span>.
        "在 (a) 部中，寫出 <span class=\"chem\">^nC_2 = n(n - 1)/2</span> 及 <span class=\"chem\">^nC_3 = n(n - 1)(n - 2)/6</span>，然後約去一個因子 <span class=\"chem\">n</span>。",
        // EN: For (c), what is the sign of each term you left out?
        "在 (c) 部中，你略去的每一項的正負號是甚麼？",
        // EN: For (d), divide the top and bottom of each fraction by the highest power of <span class="chem">n</span>.
        "在 (d) 部中，把每個分數的分子和分母同時除以 <span class=\"chem\">n</span> 的最高次冪。",
      ],
      // EN: <p><strong>Decode:</strong> recognise <span class="chem">(1 + 1/n)^n</span> as a binomial power. Its expansion begins <span class="chem">1 + 1 + 1/2 + 1/6 + …</span> for large <span class="chem">n</span>, which is how the number <span class="chem">e ≈ 2.718</span> arises from continuous compounding.</p>
      solution: "<p><strong>解碼：</strong>把 <span class=\"chem\">(1 + 1/n)^n</span> 看作二項式的冪。當 <span class=\"chem\">n</span> 很大時，其展開式以 <span class=\"chem\">1 + 1 + 1/2 + 1/6 + …</span> 開首，這就是數 <span class=\"chem\">e ≈ 2.718</span> 如何由連續複利產生的。</p>",
      // EN: <div class="worked__math">(a) (1 + 1/<i>n</i>)<sup><i>n</i></sup> = 1 + <sup><i>n</i></sup>C<sub>1</sub>(1/<i>n</i>) + <sup><i>n</i></sup>C<sub>2</sub>(1/<i>n</i>)<sup>2</sup> + <sup><i>n</i></sup>C<sub>3</sub>(1/<i>n</i>)<sup>3</sup> + …, with <i>n</i> × <span class="frac"><span>1</span><span><i>n</i></span></span> = 1, <span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2<i>n</i><sup>2</sup></span></span> = <span class="frac"><span><i>n</i> − 1</span><span>2<i>n</i></span></span> and <span class="frac"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6<i>n</i><sup>3</sup></span></span> = <span class="frac"><span>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6<i>n</i><sup>2</sup></span></span>.</div><div class="worked__math">(b) 1 + 1 + <span class="frac"><span>11</span><span>24</span></span> + <span class="frac"><span>110</span><span>864</span></span> = <b>2.586</b> (2.58564…); (1 + 1/12)<sup>12</sup> = <b>2.613</b> (2.61303…).</div><div class="worked__math">(c) Every term left out, <sup><i>n</i></sup>C<sub><i>r</i></sub>(1/<i>n</i>)<sup><i>r</i></sup> for <i>r</i> ≥ 4, is positive, so the four-term sum is smaller than the full expansion.</div><div class="worked__math">(d) (<i>n</i> − 1)/(2<i>n</i>) → 1/2 and (<i>n</i> − 1)(<i>n</i> − 2)/(6<i>n</i><sup>2</sup>) → 1/6, so the limit is 1 + 1 + 1/2 + 1/6 = <b>8/3</b>.</div>
      answer: "<div class=\"worked__math\">(a) (1 + 1/<i>n</i>)<sup><i>n</i></sup> = 1 + <sup><i>n</i></sup>C<sub>1</sub>(1/<i>n</i>) + <sup><i>n</i></sup>C<sub>2</sub>(1/<i>n</i>)<sup>2</sup> + <sup><i>n</i></sup>C<sub>3</sub>(1/<i>n</i>)<sup>3</sup> + …，其中 <i>n</i> × <span class=\"frac\"><span>1</span><span><i>n</i></span></span> = 1、<span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)</span><span>2<i>n</i><sup>2</sup></span></span> = <span class=\"frac\"><span><i>n</i> − 1</span><span>2<i>n</i></span></span> 及 <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6<i>n</i><sup>3</sup></span></span> = <span class=\"frac\"><span>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6<i>n</i><sup>2</sup></span></span>。</div><div class=\"worked__math\">(b) 1 + 1 + <span class=\"frac\"><span>11</span><span>24</span></span> + <span class=\"frac\"><span>110</span><span>864</span></span> = <b>2.586</b>（2.58564…）；(1 + 1/12)<sup>12</sup> = <b>2.613</b>（2.61303…）。</div><div class=\"worked__math\">(c) 每一個略去的項 <sup><i>n</i></sup>C<sub><i>r</i></sub>(1/<i>n</i>)<sup><i>r</i></sup>（<i>r</i> ≥ 4）都是正數，所以四項之和小於完整的展開式。</div><div class=\"worked__math\">(d) (<i>n</i> − 1)/(2<i>n</i>) → 1/2 及 (<i>n</i> − 1)(<i>n</i> − 2)/(6<i>n</i><sup>2</sup>) → 1/6，故極限為 1 + 1 + 1/2 + 1/6 = <b>8/3</b>。</div>",
      markscheme: [
        // EN: M1: (a) Uses the general term ⁿCᵣ (1/n)^r for r = 0, 1, 2, 3.
        "M1：(a) 對 r = 0, 1, 2, 3 使用通項 ⁿCᵣ (1/n)^r。",
        // EN: A1: ⁿC₂ (1/n)^2 = n(n − 1)/(2n^2) = (n − 1)/(2n).
        "A1：ⁿC₂ (1/n)^2 = n(n − 1)/(2n^2) = (n − 1)/(2n)。",
        // EN: A1: ⁿC₃ (1/n)^3 = n(n − 1)(n − 2)/(6n^3) = (n − 1)(n − 2)/(6n^2). AG: the four terms are as given; the given line itself earns no mark.
        "A1：ⁿC₃ (1/n)^3 = n(n − 1)(n − 2)/(6n^3) = (n − 1)(n − 2)/(6n^2)。AG：四項與題目所給的相同；單寫出題目已給出的式子不得分。",
        // EN: M1: (b) Substitutes n = 12 into the four terms: 1 + 1 + 11/24 + 110/864.
        "M1：(b) 把 n = 12 代入這四項：1 + 1 + 11/24 + 110/864。",
        // EN: A1: Four-term sum = 2.586.
        "A1：四項之和 = 2.586。",
        // EN: A1: (1 + 1/12)^12 = 2.613.
        "A1：(1 + 1/12)^12 = 2.613。",
        // EN: R1: (c) All the omitted terms ⁿCᵣ (1/n)^r (r ≥ 4) are positive, so the full expansion is larger.
        "R1：(c) 所有略去的項 ⁿCᵣ (1/n)^r（r ≥ 4）都是正數，所以完整的展開式較大。",
        // EN: A1: (d) 1 + 1 + 1/2 + 1/6 = 8/3.
        "A1：(d) 1 + 1 + 1/2 + 1/6 = 8/3。",
      ],
    },

    // ── t1-2-q045 · short · foundation · SL · SL 1.5 · 3 marks
    "t1-2-q045": {
      // EN: <p>Simplify <span class="chem">(2a^3 b^{-2})^3 / (4a^{-1} b)^2</span>, where <span class="chem">a, b != 0</span>, giving your answer in the form <span class="chem">k a^p b^q</span>.</p>
      stem: "<p>化簡 (Simplify) <span class=\"chem\">(2a^3 b^{-2})^3 / (4a^{-1} b)^2</span>，其中 <span class=\"chem\">a, b != 0</span>，答案以 <span class=\"chem\">k a^p b^q</span> 的形式表示。</p>",
      hints: [
        // EN: Use <span class="chem">(xy)^n = x^n y^n</span> and <span class="chem">(x^m)^n = x^{mn}</span> on each bracket.
        "對每個括號使用 <span class=\"chem\">(xy)^n = x^n y^n</span> 及 <span class=\"chem\">(x^m)^n = x^{mn}</span>。",
        // EN: Then divide: <span class="chem">x^m / x^n = x^{m-n}</span>. Take care with the negative indices: <span class="chem">9 - (-2) = 11</span>.
        "然後相除：<span class=\"chem\">x^m / x^n = x^{m-n}</span>。小心處理負指數：<span class=\"chem\">9 - (-2) = 11</span>。",
      ],
      // EN: <div class="worked__math">(2<i>a</i><sup>3</sup><i>b</i><sup>−2</sup>)<sup>3</sup> = 8<i>a</i><sup>9</sup><i>b</i><sup>−6</sup>, (4<i>a</i><sup>−1</sup><i>b</i>)<sup>2</sup> = 16<i>a</i><sup>−2</sup><i>b</i><sup>2</sup></div><div class="worked__math">Quotient: <span class="frac"><span>8</span><span>16</span></span> <i>a</i><sup>9−(−2)</sup> <i>b</i><sup>−6−2</sup> = <span class="frac"><span>1</span><span>2</span></span><i>a</i><sup>11</sup><i>b</i><sup>−8</sup></div>
      solution: "<div class=\"worked__math\">(2<i>a</i><sup>3</sup><i>b</i><sup>−2</sup>)<sup>3</sup> = 8<i>a</i><sup>9</sup><i>b</i><sup>−6</sup>,  (4<i>a</i><sup>−1</sup><i>b</i>)<sup>2</sup> = 16<i>a</i><sup>−2</sup><i>b</i><sup>2</sup></div><div class=\"worked__math\">商：<span class=\"frac\"><span>8</span><span>16</span></span> <i>a</i><sup>9−(−2)</sup> <i>b</i><sup>−6−2</sup> = <span class=\"frac\"><span>1</span><span>2</span></span><i>a</i><sup>11</sup><i>b</i><sup>−8</sup></div>",
      // EN: <div class="worked__math"><span class="frac"><span>8<i>a</i><sup>9</sup><i>b</i><sup>−6</sup></span><span>16<i>a</i><sup>−2</sup><i>b</i><sup>2</sup></span></span> = <b><span class="frac"><span>1</span><span>2</span></span><i>a</i><sup>11</sup><i>b</i><sup>−8</sup></b></div>
      answer: "<div class=\"worked__math\"><span class=\"frac\"><span>8<i>a</i><sup>9</sup><i>b</i><sup>−6</sup></span><span>16<i>a</i><sup>−2</sup><i>b</i><sup>2</sup></span></span> = <b><span class=\"frac\"><span>1</span><span>2</span></span><i>a</i><sup>11</sup><i>b</i><sup>−8</sup></b></div>",
      markscheme: [
        // EN: M1: Raises each bracket to its power: 8a^9 b^(−6) and 16a^(−2) b^2.
        "M1：把每個括號提升至其冪：8a^9 b^(−6) 及 16a^(−2) b^2。",
        // EN: A1: k = 1/2.
        "A1：k = 1/2。",
        // EN: A1: a^11 b^(−8) (p = 11, q = −8).
        "A1：a^11 b^(−8)（p = 11，q = −8）。",
      ],
    },

    // ── t1-2-q046 · numeric · exam · SL · SL 1.7 · 4 marks
    "t1-2-q046": {
      // EN: <p>Solve the equation <span class="chem">2^{x+3} = 5^x</span>, giving your answer exactly in the form <span class="chem">ln p / ln q</span>, where <span class="chem">p, q</span> ∈ ℚ.</p>
      stem: "<p>解 (Solve) 方程 <span class=\"chem\">2^{x+3} = 5^x</span>，答案以準確的 <span class=\"chem\">ln p / ln q</span> 形式表示，其中 <span class=\"chem\">p, q</span> ∈ ℚ。</p>",
      hints: [
        // EN: Take <span class="chem">ln</span> of both sides and use the power law: <span class="chem">(x + 3) ln 2 = x ln 5</span>.
        "在兩邊取 <span class=\"chem\">ln</span>，並利用冪的對數定律：<span class=\"chem\">(x + 3) ln 2 = x ln 5</span>。",
        // EN: Collect the <span class="chem">x</span> terms: <span class="chem">x(ln 5 - ln 2) = 3 ln 2</span>.
        "把含 <span class=\"chem\">x</span> 的項合併：<span class=\"chem\">x(ln 5 - ln 2) = 3 ln 2</span>。",
        // EN: Use the log laws to write <span class="chem">3 ln 2</span> and <span class="chem">ln 5 - ln 2</span> each as a single logarithm.
        "利用對數定律，把 <span class=\"chem\">3 ln 2</span> 和 <span class=\"chem\">ln 5 - ln 2</span> 分別寫成單一個對數。",
      ],
      // EN: <div class="worked__math">(<i>x</i> + 3) ln 2 = <i>x</i> ln 5 <b>[M1 A1]</b></div><div class="worked__math"><i>x</i>(ln 5 − ln 2) = 3 ln 2 <b>[M1]</b></div><div class="worked__math"><i>x</i> = <b><span class="frac"><span>ln 8</span><span>ln(5/2)</span></span></b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">(<i>x</i> + 3) ln 2 = <i>x</i> ln 5   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>x</i>(ln 5 − ln 2) = 3 ln 2   <b>[M1]</b></div><div class=\"worked__math\"><i>x</i> = <b><span class=\"frac\"><span>ln 8</span><span>ln(5/2)</span></span></b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q047 · short · exam · SL · SL 1.7 · 6 marks
    "t1-2-q047": {
      // EN: <p>(a) Show that <span class="chem">log_a b × log_b c = log_a c</span> for <span class="chem">a, b, c &gt; 0</span>, <span class="chem">a, b != 1</span>. <strong>[2]</strong><br>(b) Hence find the value of <span class="chem">log_2 3 × log_3 4 × log_4 5 × … × log_{15} 16</span>. <strong>[2]</strong><br>(c) Find the integer <span class="chem">n</span> for which <span class="chem">log_2 3 × log_3 4 × … × log_n(n + 1) = 10</span>. <strong>[2]</strong></p>
      stem: "<p>(a) 證明 (Show that) 對於 <span class=\"chem\">a, b, c &gt; 0</span>、<span class=\"chem\">a, b != 1</span>，<span class=\"chem\">log_a b × log_b c = log_a c</span>。<strong>[2]</strong><br>(b) 由此求 (Hence find) <span class=\"chem\">log_2 3 × log_3 4 × log_4 5 × … × log_{15} 16</span> 的值。<strong>[2]</strong><br>(c) 求 (Find) 使 <span class=\"chem\">log_2 3 × log_3 4 × … × log_n(n + 1) = 10</span> 成立的整數 <span class=\"chem\">n</span>。<strong>[2]</strong></p>",
      hints: [
        // EN: For (a), change both logarithms to base e (or any common base).
        "在 (a) 部中，把兩個對數都換成以 e 為底（或任何共同的底）。",
        // EN: For (b), each new factor “uses up” the previous argument: <span class="chem">log_2 3 × log_3 4 = log_2 4</span>, then <span class="chem">log_2 4 × log_4 5 = log_2 5</span>, and so on.
        "在 (b) 部中，每個新因子都會「用掉」前一個真數：<span class=\"chem\">log_2 3 × log_3 4 = log_2 4</span>，然後 <span class=\"chem\">log_2 4 × log_4 5 = log_2 5</span>，如此類推。",
        // EN: For (c), the chain ends at <span class="chem">log_2(n + 1)</span>.
        "在 (c) 部中，這條鏈最終得到 <span class=\"chem\">log_2(n + 1)</span>。",
      ],
      // EN: <p>The change-of-base result makes the product telescope: every intermediate argument cancels, leaving <span class="chem">log_2</span> of the last argument.</p>
      solution: "<p>換底的結果使乘積逐項相消：所有中間的真數都會消去，只剩下最後一個真數的 <span class=\"chem\">log_2</span>。</p>",
      // EN: <div class="worked__math">(a) log<sub><i>a</i></sub> <i>b</i> × log<sub><i>b</i></sub> <i>c</i> = <span class="frac"><span>ln <i>b</i></span><span>ln <i>a</i></span></span> × <span class="frac"><span>ln <i>c</i></span><span>ln <i>b</i></span></span> = <span class="frac"><span>ln <i>c</i></span><span>ln <i>a</i></span></span> = log<sub><i>a</i></sub> <i>c</i>.</div><div class="worked__math">(b) Applying (a) repeatedly, the product collapses to log<sub>2</sub> 16 = <b>4</b>.</div><div class="worked__math">(c) The product equals log<sub>2</sub>(<i>n</i> + 1) = 10, so <i>n</i> + 1 = 2<sup>10</sup> = 1024 and <b><i>n</i> = 1023</b>.</div>
      answer: "<div class=\"worked__math\">(a) log<sub><i>a</i></sub> <i>b</i> × log<sub><i>b</i></sub> <i>c</i> = <span class=\"frac\"><span>ln <i>b</i></span><span>ln <i>a</i></span></span> × <span class=\"frac\"><span>ln <i>c</i></span><span>ln <i>b</i></span></span> = <span class=\"frac\"><span>ln <i>c</i></span><span>ln <i>a</i></span></span> = log<sub><i>a</i></sub> <i>c</i>.</div><div class=\"worked__math\">(b) 重複應用 (a) 部的結果，乘積化簡為 log<sub>2</sub> 16 = <b>4</b>。</div><div class=\"worked__math\">(c) 乘積等於 log<sub>2</sub>(<i>n</i> + 1) = 10，故 <i>n</i> + 1 = 2<sup>10</sup> = 1024，而 <b><i>n</i> = 1023</b>。</div>",
      markscheme: [
        // EN: M1: (a) Uses change of base on both factors, e.g. log_a b = ln b / ln a and log_b c = ln c / ln b.
        "M1：(a) 對兩個因子都使用換底公式，例如 log_a b = ln b / ln a 及 log_b c = ln c / ln b。",
        // EN: A1: The ln b terms cancel to give ln c / ln a. AG: = log_a c; the given line itself earns no mark.
        "A1：ln b 項約去，得 ln c / ln a。AG：= log_a c；單寫出題目已給出的式子不得分。",
        // EN: M1: (b) Applies the result repeatedly (or cancels in a chain) to obtain log_2 16.
        "M1：(b) 重複應用此結果（或逐項相消）得到 log_2 16。",
        // EN: A1: Value 4.
        "A1：值為 4。",
        // EN: M1: (c) Recognises the product equals log_2(n + 1) and sets log_2(n + 1) = 10.
        "M1：(c) 認出乘積等於 log_2(n + 1)，並設 log_2(n + 1) = 10。",
        // EN: A1: n + 1 = 1024, so n = 1023.
        "A1：n + 1 = 1024，故 n = 1023。",
      ],
    },

    // ── t1-2-q048 · numeric · exam · SL · SL 1.7 · 5 marks
    "t1-2-q048": {
      // EN: <p>Solve the equation <span class="chem">log_3(x + 1) - log_3(2x - 5) = 1</span>, giving the exact value of <span class="chem">x</span>.</p>
      stem: "<p>解 (Solve) 方程 <span class=\"chem\">log_3(x + 1) - log_3(2x - 5) = 1</span>，求 <span class=\"chem\">x</span> 的準確值。</p>",
      hints: [
        // EN: Use the quotient law: <span class="chem">log_3((x + 1)/(2x - 5)) = 1</span>.
        "利用商的對數定律：<span class=\"chem\">log_3((x + 1)/(2x - 5)) = 1</span>。",
        // EN: Rewrite in exponential form: <span class="chem">(x + 1)/(2x - 5) = 3^1</span>, then solve the linear equation.
        "改寫為指數形式：<span class=\"chem\">(x + 1)/(2x - 5) = 3^1</span>，然後解這條線性方程。",
        // EN: Check that your value makes both arguments, <span class="chem">x + 1</span> and <span class="chem">2x - 5</span>, positive.
        "檢查你所得的值能使兩個真數 <span class=\"chem\">x + 1</span> 和 <span class=\"chem\">2x - 5</span> 都是正數。",
      ],
      // EN: <div class="worked__math">log<sub>3</sub><span class="frac"><span><i>x</i> + 1</span><span>2<i>x</i> − 5</span></span> = 1 <b>[M1]</b> ⇒ <span class="frac"><span><i>x</i> + 1</span><span>2<i>x</i> − 5</span></span> = 3 <b>[A1]</b></div><div class="worked__math"><i>x</i> + 1 = 6<i>x</i> − 15 <b>[M1]</b> ⇒ <b><i>x</i> = <span class="frac"><span>16</span><span>5</span></span></b> <b>[A1]</b></div><div class="worked__math">Check: <i>x</i> + 1 = 21/5 &gt; 0 and 2<i>x</i> − 5 = 7/5 &gt; 0, so the solution is valid. <b>[R1]</b></div>
      solution: "<div class=\"worked__math\">log<sub>3</sub><span class=\"frac\"><span><i>x</i> + 1</span><span>2<i>x</i> − 5</span></span> = 1   <b>[M1]</b>  ⇒  <span class=\"frac\"><span><i>x</i> + 1</span><span>2<i>x</i> − 5</span></span> = 3   <b>[A1]</b></div><div class=\"worked__math\"><i>x</i> + 1 = 6<i>x</i> − 15   <b>[M1]</b>  ⇒  <b><i>x</i> = <span class=\"frac\"><span>16</span><span>5</span></span></b>   <b>[A1]</b></div><div class=\"worked__math\">驗算：<i>x</i> + 1 = 21/5 &gt; 0 及 2<i>x</i> − 5 = 7/5 &gt; 0，故此解有效。   <b>[R1]</b></div>",
    },

    // ── t1-2-q049 · numeric · exam · SL · SL 1.7 · 5 marks
    "t1-2-q049": {
      // EN: <p>The equation <span class="chem">4^x - 2^{x+3} + 12 = 0</span> has two solutions, one of which is an integer. Find the exact value of the other solution.</p>
      stem: "<p>方程 <span class=\"chem\">4^x - 2^{x+3} + 12 = 0</span> 有兩個解，其中一個是整數。求 (Find) 另一個解的準確值。</p>",
      hints: [
        // EN: Write everything in terms of <span class="chem">u = 2^x</span>: <span class="chem">4^x = u^2</span> and <span class="chem">2^{x+3} = 8u</span>.
        "把所有項以 <span class=\"chem\">u = 2^x</span> 表示：<span class=\"chem\">4^x = u^2</span> 及 <span class=\"chem\">2^{x+3} = 8u</span>。",
        // EN: Solve <span class="chem">u^2 - 8u + 12 = 0</span> by factorising.
        "用因式分解解 <span class=\"chem\">u^2 - 8u + 12 = 0</span>。",
        // EN: One root gives <span class="chem">x = 1</span>. For the other, <span class="chem">2^x = 6</span>, so take logarithms of both sides.
        "其中一個根給出 <span class=\"chem\">x = 1</span>。至於另一個根，<span class=\"chem\">2^x = 6</span>，故在兩邊取對數。",
      ],
      // EN: <div class="worked__math">Let <i>u</i> = 2<sup><i>x</i></sup>: 4<sup><i>x</i></sup> = <i>u</i><sup>2</sup>, 2<sup><i>x</i>+3</sup> = 8<i>u</i> <b>[M1]</b> ⇒ <i>u</i><sup>2</sup> − 8<i>u</i> + 12 = 0 <b>[A1]</b></div><div class="worked__math">(<i>u</i> − 2)(<i>u</i> − 6) = 0 ⇒ <i>u</i> = 2 or <i>u</i> = 6 <b>[A1]</b></div><div class="worked__math">2<sup><i>x</i></sup> = 2 ⇒ <i>x</i> = 1 (the integer solution) <b>[A1]</b>; 2<sup><i>x</i></sup> = 6 ⇒ <b><i>x</i> = log<sub>2</sub> 6</b> (= 1 + log<sub>2</sub> 3) <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">設 <i>u</i> = 2<sup><i>x</i></sup>：4<sup><i>x</i></sup> = <i>u</i><sup>2</sup>，2<sup><i>x</i>+3</sup> = 8<i>u</i>   <b>[M1]</b>  ⇒  <i>u</i><sup>2</sup> − 8<i>u</i> + 12 = 0   <b>[A1]</b></div><div class=\"worked__math\">(<i>u</i> − 2)(<i>u</i> − 6) = 0  ⇒  <i>u</i> = 2 或 <i>u</i> = 6   <b>[A1]</b></div><div class=\"worked__math\">2<sup><i>x</i></sup> = 2 ⇒ <i>x</i> = 1（整數解）   <b>[A1]</b>；2<sup><i>x</i></sup> = 6 ⇒ <b><i>x</i> = log<sub>2</sub> 6</b>（= 1 + log<sub>2</sub> 3）   <b>[A1]</b></div>",
    },

    // ── t1-2-q050 · numeric · exam · SL · SL 1.9 · 4 marks
    "t1-2-q050": {
      // EN: <p>Find the coefficient of <span class="chem">x^4</span> in the expansion of <span class="chem">(x - 2/x)^{10}</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">(x - 2/x)^{10}</span> 展開式中 <span class=\"chem\">x^4</span> 的係數。</p>",
      hints: [
        // EN: The general term is <span class="chem">^{10}C_r x^{10-r} (-2/x)^r = ^{10}C_r (-2)^r x^{10-2r}</span>.
        "通項為 <span class=\"chem\">^{10}C_r x^{10-r} (-2/x)^r = ^{10}C_r (-2)^r x^{10-2r}</span>。",
        // EN: Solve <span class="chem">10 - 2r = 4</span> for <span class="chem">r</span>, and keep the sign of <span class="chem">(-2)^r</span>.
        "解 <span class=\"chem\">10 - 2r = 4</span> 求 <span class=\"chem\">r</span>，並保留 <span class=\"chem\">(-2)^r</span> 的符號。",
      ],
      // EN: <div class="worked__math"><i>T</i><sub><i>r</i>+1</sub> = <sup>10</sup>C<sub><i>r</i></sub> <i>x</i><sup>10−<i>r</i></sup>(−2<i>x</i><sup>−1</sup>)<sup><i>r</i></sup> <b>[M1]</b> = <sup>10</sup>C<sub><i>r</i></sub>(−2)<sup><i>r</i></sup><i>x</i><sup>10−2<i>r</i></sup> <b>[A1]</b></div><div class="worked__math">10 − 2<i>r</i> = 4 ⇒ <i>r</i> = 3 <b>[A1]</b></div><div class="worked__math"><sup>10</sup>C<sub>3</sub>(−2)<sup>3</sup> = 120 × (−8) = <b>−960</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>T</i><sub><i>r</i>+1</sub> = <sup>10</sup>C<sub><i>r</i></sub> <i>x</i><sup>10−<i>r</i></sup>(−2<i>x</i><sup>−1</sup>)<sup><i>r</i></sup>   <b>[M1]</b>  = <sup>10</sup>C<sub><i>r</i></sub>(−2)<sup><i>r</i></sup><i>x</i><sup>10−2<i>r</i></sup>   <b>[A1]</b></div><div class=\"worked__math\">10 − 2<i>r</i> = 4  ⇒  <i>r</i> = 3   <b>[A1]</b></div><div class=\"worked__math\"><sup>10</sup>C<sub>3</sub>(−2)<sup>3</sup> = 120 × (−8) = <b>−960</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q051 · short · exam · SL · SL 1.9 · 5 marks
    "t1-2-q051": {
      // EN: <p>(a) Expand <span class="chem">(2 - x)^4</span> in full, in ascending powers of <span class="chem">x</span>. <strong>[3]</strong><br>(b) Hence find the exact value of <span class="chem">1.9^4</span>. <strong>[2]</strong></p>
      stem: "<p>(a) 把 <span class=\"chem\">(2 - x)^4</span> 按 <span class=\"chem\">x</span> 的升冪完全展開 (Expand)。<strong>[3]</strong><br>(b) 由此求 (Hence find) <span class=\"chem\">1.9^4</span> 的準確值。<strong>[2]</strong></p>",
      hints: [
        // EN: Row 4 of Pascal’s triangle is 1, 4, 6, 4, 1. Pair it with <span class="chem">2^4, 2^3, 2^2, 2, 1</span> and with powers of <span class="chem">(-x)</span>; the signs alternate.
        "帕斯卡三角形的第 4 行是 1, 4, 6, 4, 1。把它與 <span class=\"chem\">2^4, 2^3, 2^2, 2, 1</span> 及 <span class=\"chem\">(-x)</span> 的冪配對；符號正負交替。",
        // EN: For (b), choose <span class="chem">x</span> so that <span class="chem">2 - x = 1.9</span>.
        "在 (b) 部中，選取 <span class=\"chem\">x</span> 使 <span class=\"chem\">2 - x = 1.9</span>。",
      ],
      // EN: <p>Because the expansion has only five terms, substituting <span class="chem">x = 0.1</span> gives the exact value, not an approximation.</p>
      solution: "<p>由於展開式只有五項，代入 <span class=\"chem\">x = 0.1</span> 得到的是準確值，而不是近似值。</p>",
      // EN: <div class="worked__math">(a) (2 − <i>x</i>)<sup>4</sup> = 16 − 32<i>x</i> + 24<i>x</i><sup>2</sup> − 8<i>x</i><sup>3</sup> + <i>x</i><sup>4</sup>.</div><div class="worked__math">(b) 1.9 = 2 − 0.1, so 1.9<sup>4</sup> = 16 − 3.2 + 0.24 − 0.008 + 0.0001 = <b>13.0321</b>.</div>
      answer: "<div class=\"worked__math\">(a) (2 − <i>x</i>)<sup>4</sup> = 16 − 32<i>x</i> + 24<i>x</i><sup>2</sup> − 8<i>x</i><sup>3</sup> + <i>x</i><sup>4</sup>.</div><div class=\"worked__math\">(b) 1.9 = 2 − 0.1，故 1.9<sup>4</sup> = 16 − 3.2 + 0.24 − 0.008 + 0.0001 = <b>13.0321</b>。</div>",
      markscheme: [
        // EN: M1: (a) Uses the binomial coefficients 1, 4, 6, 4, 1 with powers of 2 and (−x).
        "M1：(a) 使用二項式係數 1, 4, 6, 4, 1 與 2 及 (−x) 的冪。",
        // EN: A1: 16 − 32x + 24x^2.
        "A1：16 − 32x + 24x^2。",
        // EN: A1: − 8x^3 + x^4.
        "A1：− 8x^3 + x^4。",
        // EN: M1: (b) Substitutes x = 0.1.
        "M1：(b) 代入 x = 0.1。",
        // EN: A1: 13.0321.
        "A1：13.0321。",
      ],
    },

    // ── t1-2-q052 · numeric · exam · SL · SL 1.9 · 5 marks
    "t1-2-q052": {
      // EN: <p>In the expansion of <span class="chem">(3 + kx)^6</span>, where <span class="chem">k &lt; 0</span>, the coefficient of <span class="chem">x^2</span> is 540. Find the exact value of <span class="chem">k</span>.</p>
      stem: "<p>在 <span class=\"chem\">(3 + kx)^6</span> 的展開式中，其中 <span class=\"chem\">k &lt; 0</span>，<span class=\"chem\">x^2</span> 的係數是 540。求 (Find) <span class=\"chem\">k</span> 的準確值。</p>",
      hints: [
        // EN: The term in <span class="chem">x^2</span> is <span class="chem">^6C_2 × 3^4 × (kx)^2</span>.
        "含 <span class=\"chem\">x^2</span> 的項是 <span class=\"chem\">^6C_2 × 3^4 × (kx)^2</span>。",
        // EN: This gives <span class="chem">1215k^2 = 540</span>. Solve for <span class="chem">k^2</span>.
        "由此得 <span class=\"chem\">1215k^2 = 540</span>。解出 <span class=\"chem\">k^2</span>。",
        // EN: There are two square roots. Read the stem again to choose one.
        "平方根有兩個。再細閱題目以選取其中一個。",
      ],
      // EN: <div class="worked__math"><sup>6</sup>C<sub>2</sub> × 3<sup>4</sup> × <i>k</i><sup>2</sup> = 540 <b>[M1]</b> ⇒ 15 × 81<i>k</i><sup>2</sup> = 1215<i>k</i><sup>2</sup> = 540 <b>[A1]</b></div><div class="worked__math"><i>k</i><sup>2</sup> = <span class="frac"><span>540</span><span>1215</span></span> = <span class="frac"><span>4</span><span>9</span></span> <b>[A1]</b></div><div class="worked__math"><i>k</i> = ±<span class="frac"><span>2</span><span>3</span></span>, and <i>k</i> &lt; 0 <b>[R1]</b>, so <b><i>k</i> = −<span class="frac"><span>2</span><span>3</span></span></b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><sup>6</sup>C<sub>2</sub> × 3<sup>4</sup> × <i>k</i><sup>2</sup> = 540   <b>[M1]</b>  ⇒  15 × 81<i>k</i><sup>2</sup> = 1215<i>k</i><sup>2</sup> = 540   <b>[A1]</b></div><div class=\"worked__math\"><i>k</i><sup>2</sup> = <span class=\"frac\"><span>540</span><span>1215</span></span> = <span class=\"frac\"><span>4</span><span>9</span></span>   <b>[A1]</b></div><div class=\"worked__math\"><i>k</i> = ±<span class=\"frac\"><span>2</span><span>3</span></span>，而 <i>k</i> &lt; 0   <b>[R1]</b>，故 <b><i>k</i> = −<span class=\"frac\"><span>2</span><span>3</span></span></b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q053 · short · exam · SL · SL 1.5, 1.7 · 6 marks
    "t1-2-q053": {
      // EN: <p>(a) Write <span class="chem">8^{2/3} × 16^{-3/4}</span> as a power of 2, and hence find its exact value. <strong>[2]</strong><br>(b) Solve <span class="chem">x^{2/3} = 16</span> for <span class="chem">x</span> ∈ ℝ, where <span class="chem">x^{2/3}</span> means <span class="chem">(x^{1/3})^2</span> and <span class="chem">x^{1/3}</span> is the real cube root of <span class="chem">x</span>. <strong>[2]</strong><br>(c) Solve <span class="chem">x^{-3/2} = 1/27</span> for <span class="chem">x &gt; 0</span>. <strong>[2]</strong></p>
      stem: "<p>(a) 把 <span class=\"chem\">8^{2/3} × 16^{-3/4}</span> 寫成 2 的冪，並由此求其準確值。<strong>[2]</strong><br>(b) 解 (Solve) <span class=\"chem\">x^{2/3} = 16</span>，其中 <span class=\"chem\">x</span> ∈ ℝ，<span class=\"chem\">x^{2/3}</span> 表示 <span class=\"chem\">(x^{1/3})^2</span>，而 <span class=\"chem\">x^{1/3}</span> 是 <span class=\"chem\">x</span> 的實數立方根。<strong>[2]</strong><br>(c) 解 (Solve) <span class=\"chem\">x^{-3/2} = 1/27</span>，其中 <span class=\"chem\">x &gt; 0</span>。<strong>[2]</strong></p>",
      hints: [
        // EN: For (a), write 8 and 16 as powers of 2 and multiply the indices.
        "在 (a) 部中，把 8 和 16 寫成 2 的冪，並把指數相乘。",
        // EN: For (b), <span class="chem">x^{2/3}</span> is the square of the cube root of <span class="chem">x</span>, and the cube root of a negative number is real. How many cube roots square to 16?
        "在 (b) 部中，<span class=\"chem\">x^{2/3}</span> 是 <span class=\"chem\">x</span> 的立方根的平方，而負數的立方根是實數。有多少個立方根的平方等於 16？",
        // EN: For (c), take reciprocals first: <span class="chem">x^{3/2} = 27</span>.
        "在 (c) 部中，先取倒數：<span class=\"chem\">x^{3/2} = 27</span>。",
      ],
      // EN: <p>In (b), raising both sides to the power <span class="chem">3/2</span> loses the negative solution. Taking the square root of <span class="chem">(x^{1/3})^2</span> keeps both signs.</p>
      solution: "<p>在 (b) 部中，若把兩邊提升至 <span class=\"chem\">3/2</span> 次冪，便會失去負數解。對 <span class=\"chem\">(x^{1/3})^2</span> 取平方根則能保留正負兩個符號。</p>",
      // EN: <div class="worked__math">(a) 8<sup>2/3</sup> = (2<sup>3</sup>)<sup>2/3</sup> = 2<sup>2</sup> and 16<sup>−3/4</sup> = (2<sup>4</sup>)<sup>−3/4</sup> = 2<sup>−3</sup>, so the product is 2<sup>−1</sup> = <b><span class="frac"><span>1</span><span>2</span></span></b>.</div><div class="worked__math">(b) (<i>x</i><sup>1/3</sup>)<sup>2</sup> = 16 ⇒ <i>x</i><sup>1/3</sup> = ±4 ⇒ <b><i>x</i> = 64 or <i>x</i> = −64</b>.</div><div class="worked__math">(c) <i>x</i><sup>3/2</sup> = 27 ⇒ <i>x</i> = 27<sup>2/3</sup> = 3<sup>2</sup> = <b>9</b>.</div>
      answer: "<div class=\"worked__math\">(a) 8<sup>2/3</sup> = (2<sup>3</sup>)<sup>2/3</sup> = 2<sup>2</sup> 及 16<sup>−3/4</sup> = (2<sup>4</sup>)<sup>−3/4</sup> = 2<sup>−3</sup>，故乘積為 2<sup>−1</sup> = <b><span class=\"frac\"><span>1</span><span>2</span></span></b>。</div><div class=\"worked__math\">(b) (<i>x</i><sup>1/3</sup>)<sup>2</sup> = 16  ⇒  <i>x</i><sup>1/3</sup> = ±4  ⇒  <b><i>x</i> = 64 或 <i>x</i> = −64</b>。</div><div class=\"worked__math\">(c) <i>x</i><sup>3/2</sup> = 27  ⇒  <i>x</i> = 27<sup>2/3</sup> = 3<sup>2</sup> = <b>9</b>.</div>",
      markscheme: [
        // EN: M1: (a) Writes 8^(2/3) = 2^2 and 16^(−3/4) = 2^(−3).
        "M1：(a) 寫出 8^(2/3) = 2^2 及 16^(−3/4) = 2^(−3)。",
        // EN: A1: 2^(−1) = 1/2.
        "A1：2^(−1) = 1/2。",
        // EN: M1: (b) Writes x^(2/3) = (x^(1/3))^2 = 16, so x^(1/3) = ±4.
        "M1：(b) 寫出 x^(2/3) = (x^(1/3))^2 = 16，故 x^(1/3) = ±4。",
        // EN: A1: x = 64 or x = −64 (both needed).
        "A1：x = 64 或 x = −64（兩者皆須寫出）。",
        // EN: M1: (c) Inverts to x^(3/2) = 27 (or raises both sides to the power −2/3).
        "M1：(c) 取倒數得 x^(3/2) = 27（或把兩邊提升至 −2/3 次冪）。",
        // EN: A1: x = 9.
        "A1：x = 9。",
      ],
    },

    // ── t1-2-q060 · numeric · foundation · SL · SL 1.9 · 3 marks
    "t1-2-q060": {
      // EN: <p>Use Pascal’s triangle to find the coefficient of <span class="chem">a^2 b^4</span> in the expansion of <span class="chem">(a + 2b)^6</span>.</p>
      stem: "<p>利用帕斯卡三角形求 (Find) <span class=\"chem\">(a + 2b)^6</span> 展開式中 <span class=\"chem\">a^2 b^4</span> 的係數。</p>",
      hints: [
        // EN: Row 6 of Pascal’s triangle is 1, 6, 15, 20, 15, 6, 1.
        "帕斯卡三角形的第 6 行是 1, 6, 15, 20, 15, 6, 1。",
        // EN: The term with <span class="chem">b^4</span> uses the coefficient <span class="chem">^6C_4 = 15</span> and the factor <span class="chem">(2b)^4</span>, not just <span class="chem">b^4</span>.
        "含 <span class=\"chem\">b^4</span> 的項使用係數 <span class=\"chem\">^6C_4 = 15</span> 和因子 <span class=\"chem\">(2b)^4</span>，而不只是 <span class=\"chem\">b^4</span>。",
      ],
      // EN: <div class="worked__math">Row 6: 1, 6, 15, 20, 15, 6, 1 <b>[M1]</b></div><div class="worked__math">Term in <i>a</i><sup>2</sup><i>b</i><sup>4</sup>: 15 × <i>a</i><sup>2</sup> × (2<i>b</i>)<sup>4</sup> <b>[A1]</b> = 15 × 16 <i>a</i><sup>2</sup><i>b</i><sup>4</sup> = <b>240</b><i>a</i><sup>2</sup><i>b</i><sup>4</sup> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">第 6 行：1, 6, 15, 20, 15, 6, 1   <b>[M1]</b></div><div class=\"worked__math\"><i>a</i><sup>2</sup><i>b</i><sup>4</sup> 項：15 × <i>a</i><sup>2</sup> × (2<i>b</i>)<sup>4</sup>   <b>[A1]</b>  = 15 × 16 <i>a</i><sup>2</sup><i>b</i><sup>4</sup> = <b>240</b><i>a</i><sup>2</sup><i>b</i><sup>4</sup>   <b>[A1]</b></div>",
    },

    // ── t1-2-q054 · numeric · challenge · SL · SL 1.7 · 5 marks
    "t1-2-q054": {
      // EN: <p>Solve the equation <span class="chem">log_9 x = log_3(x - 6)</span>.</p>
      stem: "<p>解 (Solve) 方程 <span class=\"chem\">log_9 x = log_3(x - 6)</span>。</p>",
      hints: [
        // EN: Decode: the bases differ (9 and 3), so change base first. The algebra will produce two candidates, and the domain of <span class="chem">log_3(x - 6)</span> decides which one survives.
        "解碼：兩個底不同（9 和 3），所以先換底。代數運算會得出兩個候選答案，而 <span class=\"chem\">log_3(x - 6)</span> 的定義域決定哪一個能保留。",
        // EN: Change of base: <span class="chem">log_9 x = log_3 x / log_3 9 = (1/2) log_3 x = log_3 sqrt(x)</span>.
        "換底公式：<span class=\"chem\">log_9 x = log_3 x / log_3 9 = (1/2) log_3 x = log_3 sqrt(x)</span>。",
        // EN: So <span class="chem">sqrt(x) = x - 6</span>. Square both sides (or let <span class="chem">s = sqrt(x)</span>) and solve the quadratic.
        "故 <span class=\"chem\">sqrt(x) = x - 6</span>。把兩邊平方（或設 <span class=\"chem\">s = sqrt(x)</span>），然後解二次方程。",
        // EN: Check each candidate in <span class="chem">x - 6 &gt; 0</span>.
        "以 <span class=\"chem\">x - 6 &gt; 0</span> 檢查每個候選答案。",
      ],
      // EN: <p><strong>Decode:</strong> match the bases, remove the logs, then use the domain to reject a candidate.</p><div class="worked__math">log<sub>9</sub> <i>x</i> = <span class="frac"><span>log<sub>3</sub> <i>x</i></span><span>2</span></span> = log<sub>3</sub> √<i>x</i> <b>[M1]</b> ⇒ √<i>x</i> = <i>x</i> − 6 <b>[A1]</b></div><div class="worked__math"><i>x</i> = (<i>x</i> − 6)<sup>2</sup> ⇒ <i>x</i><sup>2</sup> − 13<i>x</i> + 36 = 0 ⇒ (<i>x</i> − 4)(<i>x</i> − 9) = 0 <b>[M1]</b></div><div class="worked__math"><i>x</i> = 4 gives <i>x</i> − 6 = −2 &lt; 0, so reject it <b>[R1]</b>; <b><i>x</i> = 9</b> <b>[A1]</b></div>
      solution: "<p><strong>解碼：</strong>使底相同，去掉對數，然後利用定義域捨去一個候選答案。</p><div class=\"worked__math\">log<sub>9</sub> <i>x</i> = <span class=\"frac\"><span>log<sub>3</sub> <i>x</i></span><span>2</span></span> = log<sub>3</sub> √<i>x</i>   <b>[M1]</b>  ⇒  √<i>x</i> = <i>x</i> − 6   <b>[A1]</b></div><div class=\"worked__math\"><i>x</i> = (<i>x</i> − 6)<sup>2</sup>  ⇒  <i>x</i><sup>2</sup> − 13<i>x</i> + 36 = 0  ⇒  (<i>x</i> − 4)(<i>x</i> − 9) = 0   <b>[M1]</b></div><div class=\"worked__math\"><i>x</i> = 4 給出 <i>x</i> − 6 = −2 &lt; 0，故捨去   <b>[R1]</b>；<b><i>x</i> = 9</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q055 · numeric · challenge · SL · SL 1.9 · 6 marks
    "t1-2-q055": {
      // EN: <p>In the expansion of <span class="chem">(x^2 + a/x)^9</span>, where <span class="chem">a &gt; 0</span>, the coefficient of <span class="chem">x^3</span> is six times the coefficient of <span class="chem">x^9</span>. Find the value of <span class="chem">a</span>.</p>
      stem: "<p>在 <span class=\"chem\">(x^2 + a/x)^9</span> 的展開式中，其中 <span class=\"chem\">a &gt; 0</span>，<span class=\"chem\">x^3</span> 的係數是 <span class=\"chem\">x^9</span> 的係數的六倍。求 (Find) <span class=\"chem\">a</span> 的值。</p>",
      hints: [
        // EN: Decode: two different terms of the same expansion are compared. Find which value of <span class="chem">r</span> gives <span class="chem">x^3</span> and which gives <span class="chem">x^9</span>, then write one equation in <span class="chem">a</span>.
        "解碼：題目比較同一展開式中兩個不同的項。找出哪個 <span class=\"chem\">r</span> 值給出 <span class=\"chem\">x^3</span>、哪個給出 <span class=\"chem\">x^9</span>，然後寫出一條關於 <span class=\"chem\">a</span> 的方程。",
        // EN: The general term is <span class="chem">^9C_r (x^2)^{9-r} (a/x)^r = ^9C_r a^r x^{18-3r}</span>.
        "通項為 <span class=\"chem\">^9C_r (x^2)^{9-r} (a/x)^r = ^9C_r a^r x^{18-3r}</span>。",
        // EN: For <span class="chem">x^9</span>, <span class="chem">r = 3</span>; for <span class="chem">x^3</span>, <span class="chem">r = 5</span>. Then <span class="chem">^9C_5 a^5 = 6 × ^9C_3 a^3</span>.
        "對於 <span class=\"chem\">x^9</span>，<span class=\"chem\">r = 3</span>；對於 <span class=\"chem\">x^3</span>，<span class=\"chem\">r = 5</span>。於是 <span class=\"chem\">^9C_5 a^5 = 6 × ^9C_3 a^3</span>。",
      ],
      // EN: <p><strong>Decode:</strong> two target powers mean two values of <i>r</i>; the given ratio links their coefficients.</p><div class="worked__math"><i>T</i><sub><i>r</i>+1</sub> = <sup>9</sup>C<sub><i>r</i></sub> <i>a</i><sup><i>r</i></sup> <i>x</i><sup>18−3<i>r</i></sup> <b>[M1 A1]</b></div><div class="worked__math"><i>x</i><sup>9</sup>: <i>r</i> = 3, coefficient 84<i>a</i><sup>3</sup>; <i>x</i><sup>3</sup>: <i>r</i> = 5, coefficient 126<i>a</i><sup>5</sup> <b>[A1]</b></div><div class="worked__math">126<i>a</i><sup>5</sup> = 6 × 84<i>a</i><sup>3</sup> <b>[M1]</b> ⇒ <i>a</i><sup>2</sup> = <span class="frac"><span>504</span><span>126</span></span> = 4 <b>[A1]</b></div><div class="worked__math"><i>a</i> &gt; 0, so <b><i>a</i> = 2</b> <b>[A1]</b></div>
      solution: "<p><strong>解碼：</strong>兩個目標冪對應兩個 <i>r</i> 值；題目給出的倍數關係把它們的係數聯繫起來。</p><div class=\"worked__math\"><i>T</i><sub><i>r</i>+1</sub> = <sup>9</sup>C<sub><i>r</i></sub> <i>a</i><sup><i>r</i></sup> <i>x</i><sup>18−3<i>r</i></sup>   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>x</i><sup>9</sup>：<i>r</i> = 3，係數 84<i>a</i><sup>3</sup>；<i>x</i><sup>3</sup>：<i>r</i> = 5，係數 126<i>a</i><sup>5</sup>   <b>[A1]</b></div><div class=\"worked__math\">126<i>a</i><sup>5</sup> = 6 × 84<i>a</i><sup>3</sup>   <b>[M1]</b>  ⇒  <i>a</i><sup>2</sup> = <span class=\"frac\"><span>504</span><span>126</span></span> = 4   <b>[A1]</b></div><div class=\"worked__math\"><i>a</i> &gt; 0，故 <b><i>a</i> = 2</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q056 · short · challenge · SL · SL 1.5, 1.7 · 6 marks
    "t1-2-q056": {
      // EN: <p>Find the values of <span class="chem">x</span> and <span class="chem">y</span> that satisfy both <span class="chem">2^x × 3^y = 72</span> and <span class="chem">2^y × 3^x = 108</span>.</p>
      stem: "<p>求 (Find) 同時滿足 <span class=\"chem\">2^x × 3^y = 72</span> 及 <span class=\"chem\">2^y × 3^x = 108</span> 的 <span class=\"chem\">x</span> 和 <span class=\"chem\">y</span> 的值。</p>",
      hints: [
        // EN: Decode: the two equations are symmetric, with the roles of 2 and 3 swapped. Multiplying and dividing them gives equations in <span class="chem">x + y</span> and <span class="chem">x - y</span>, which are easy to solve together.
        "解碼：兩條方程是對稱的，2 和 3 的角色互換。把它們相乘和相除，可得到關於 <span class=\"chem\">x + y</span> 和 <span class=\"chem\">x - y</span> 的方程，聯立求解很容易。",
        // EN: Multiply: <span class="chem">2^{x+y} 3^{x+y} = 6^{x+y}</span>. Is <span class="chem">72 × 108</span> a power of 6?
        "相乘：<span class=\"chem\">2^{x+y} 3^{x+y} = 6^{x+y}</span>。<span class=\"chem\">72 × 108</span> 是 6 的冪嗎？",
        // EN: Divide the first equation by the second: <span class="chem">2^{x-y} 3^{y-x} = (2/3)^{x-y}</span>.
        "把第一條方程除以第二條：<span class=\"chem\">2^{x-y} 3^{y-x} = (2/3)^{x-y}</span>。",
      ],
      // EN: <p><strong>Decode:</strong> spot the symmetry and combine the equations, rather than taking logs of each one separately (which also works, but gives a messier linear system with ln 2 and ln 3 as coefficients).</p>
      solution: "<p><strong>解碼：</strong>留意對稱性並把方程結合，而不是對每條方程分別取對數（這樣做也可以，但會得到以 ln 2 和 ln 3 為係數、較繁複的線性方程組）。</p>",
      // EN: <div class="worked__math">Multiply: 2<sup><i>x</i>+<i>y</i></sup>3<sup><i>x</i>+<i>y</i></sup> = 6<sup><i>x</i>+<i>y</i></sup> = 72 × 108 = 7776 = 6<sup>5</sup>, so <i>x</i> + <i>y</i> = 5.</div><div class="worked__math">Divide: 2<sup><i>x</i>−<i>y</i></sup>3<sup><i>y</i>−<i>x</i></sup> = (2/3)<sup><i>x</i>−<i>y</i></sup> = 72/108 = 2/3, so <i>x</i> − <i>y</i> = 1.</div><div class="worked__math">Hence <b><i>x</i> = 3</b> and <b><i>y</i> = 2</b>.</div>
      answer: "<div class=\"worked__math\">相乘：2<sup><i>x</i>+<i>y</i></sup>3<sup><i>x</i>+<i>y</i></sup> = 6<sup><i>x</i>+<i>y</i></sup> = 72 × 108 = 7776 = 6<sup>5</sup>，故 <i>x</i> + <i>y</i> = 5。</div><div class=\"worked__math\">相除：2<sup><i>x</i>−<i>y</i></sup>3<sup><i>y</i>−<i>x</i></sup> = (2/3)<sup><i>x</i>−<i>y</i></sup> = 72/108 = 2/3，故 <i>x</i> − <i>y</i> = 1。</div><div class=\"worked__math\">因此 <b><i>x</i> = 3</b> 及 <b><i>y</i> = 2</b>。</div>",
      markscheme: [
        // EN: M1: Multiplies the equations (or takes logs of both and adds): 6^(x+y) = 7776.
        "M1：把兩條方程相乘（或對兩者取對數後相加）：6^(x+y) = 7776。",
        // EN: A1: x + y = 5 (7776 = 6^5).
        "A1：x + y = 5（7776 = 6^5）。",
        // EN: M1: Divides the equations (or subtracts the log equations): (2/3)^(x−y) = 72/108.
        "M1：把兩條方程相除（或把兩條對數方程相減）：(2/3)^(x−y) = 72/108。",
        // EN: A1: x − y = 1.
        "A1：x − y = 1。",
        // EN: A1: x = 3.
        "A1：x = 3。",
        // EN: A1: y = 2.
        "A1：y = 2。",
      ],
    },

    // ── t1-2-q057 · short · challenge · SL · SL 1.9 · 6 marks
    "t1-2-q057": {
      // EN: <p>Let <span class="chem">(1 + 3x)^8 = a_0 + a_1 x + a_2 x^2 + … + a_8 x^8</span>.<br>(a) Find the value of <span class="chem">a_0 + a_1 + a_2 + … + a_8</span>. <strong>[2]</strong><br>(b) Find the value of <span class="chem">a_0 - a_1 + a_2 - a_3 + … + a_8</span>. <strong>[2]</strong><br>(c) Hence find the value of <span class="chem">a_0 + a_2 + a_4 + a_6 + a_8</span>. <strong>[2]</strong></p>
      stem: "<p>設 <span class=\"chem\">(1 + 3x)^8 = a_0 + a_1 x + a_2 x^2 + … + a_8 x^8</span>。<br>(a) 求 (Find) <span class=\"chem\">a_0 + a_1 + a_2 + … + a_8</span> 的值。<strong>[2]</strong><br>(b) 求 (Find) <span class=\"chem\">a_0 - a_1 + a_2 - a_3 + … + a_8</span> 的值。<strong>[2]</strong><br>(c) 由此求 (Hence find) <span class=\"chem\">a_0 + a_2 + a_4 + a_6 + a_8</span> 的值。<strong>[2]</strong></p>",
      hints: [
        // EN: Decode: you are not asked to find any single coefficient. A sum of all the coefficients is the value of the polynomial at a well-chosen <span class="chem">x</span>.
        "解碼：題目並不要求你求任何單一係數。所有係數之和就是多項式在一個適當選取的 <span class=\"chem\">x</span> 值的值。",
        // EN: For (a), which value of <span class="chem">x</span> makes every power <span class="chem">x^r</span> equal to 1?
        "在 (a) 部中，哪個 <span class=\"chem\">x</span> 值使每個冪 <span class=\"chem\">x^r</span> 都等於 1？",
        // EN: For (b), which value of <span class="chem">x</span> makes the powers alternate between 1 and −1?
        "在 (b) 部中，哪個 <span class=\"chem\">x</span> 值使各冪在 1 與 −1 之間交替？",
        // EN: For (c), add the two results. What happens to <span class="chem">a_1, a_3, a_5, a_7</span>?
        "在 (c) 部中，把兩個結果相加。<span class=\"chem\">a_1, a_3, a_5, a_7</span> 會怎樣？",
      ],
      // EN: <p><strong>Decode:</strong> sums of coefficients come from substituting <span class="chem">x = 1</span> and <span class="chem">x = -1</span>; there is no need to expand.</p>
      solution: "<p><strong>解碼：</strong>係數之和可透過代入 <span class=\"chem\">x = 1</span> 及 <span class=\"chem\">x = -1</span> 得到；不需要展開。</p>",
      // EN: <div class="worked__math">(a) Put <i>x</i> = 1: 4<sup>8</sup> = <b>65536</b>.</div><div class="worked__math">(b) Put <i>x</i> = −1: (−2)<sup>8</sup> = <b>256</b>.</div><div class="worked__math">(c) Adding (a) and (b) doubles the even-index coefficients and cancels the odd ones: <span class="frac"><span>65536 + 256</span><span>2</span></span> = <b>32896</b>.</div>
      answer: "<div class=\"worked__math\">(a) 代入 <i>x</i> = 1：4<sup>8</sup> = <b>65536</b>。</div><div class=\"worked__math\">(b) 代入 <i>x</i> = −1：(−2)<sup>8</sup> = <b>256</b>。</div><div class=\"worked__math\">(c) 把 (a) 和 (b) 相加，偶數下標的係數加倍，奇數下標的係數消去：<span class=\"frac\"><span>65536 + 256</span><span>2</span></span> = <b>32896</b>。</div>",
      markscheme: [
        // EN: M1: (a) Substitutes x = 1 into both sides.
        "M1：(a) 把 x = 1 代入兩邊。",
        // EN: A1: 4^8 = 65536.
        "A1：4^8 = 65536。",
        // EN: M1: (b) Substitutes x = −1 into both sides.
        "M1：(b) 把 x = −1 代入兩邊。",
        // EN: A1: (−2)^8 = 256.
        "A1：(−2)^8 = 256。",
        // EN: M1: (c) Adds the results of (a) and (b), so that the odd-index terms cancel, and halves.
        "M1：(c) 把 (a) 和 (b) 的結果相加，使奇數下標的項消去，然後取其一半。",
        // EN: A1: 32896.
        "A1：32896。",
      ],
    },

    // ── t1-2-q058 · numeric · challenge · SL · SL 1.7 · 4 marks
    "t1-2-q058": {
      // EN: <p>The real numbers <span class="chem">a</span> and <span class="chem">b</span> satisfy <span class="chem">3^a = 5</span> and <span class="chem">5^b = 9</span>. Find the value of the product <span class="chem">ab</span>.</p>
      stem: "<p>實數 <span class=\"chem\">a</span> 和 <span class=\"chem\">b</span> 滿足 <span class=\"chem\">3^a = 5</span> 及 <span class=\"chem\">5^b = 9</span>。求 (Find) 乘積 <span class=\"chem\">ab</span> 的值。</p>",
      hints: [
        // EN: Decode: neither <span class="chem">a</span> nor <span class="chem">b</span> has a simple exact value, but their product does. Look for a way to combine the two equations rather than solving each one.
        "解碼：<span class=\"chem\">a</span> 和 <span class=\"chem\">b</span> 都沒有簡單的準確值，但它們的乘積有。設法把兩條方程結合，而不是分別解每一條。",
        // EN: Substitute the first equation into the second: <span class="chem">5^b = (3^a)^b</span>.
        "把第一條方程代入第二條：<span class=\"chem\">5^b = (3^a)^b</span>。",
        // EN: So <span class="chem">3^{ab} = 9</span>. (Alternatively, <span class="chem">a = log_3 5</span>, <span class="chem">b = log_5 9</span>, and change of base makes their product collapse.)
        "故 <span class=\"chem\">3^{ab} = 9</span>。（另一方法：<span class=\"chem\">a = log_3 5</span>、<span class=\"chem\">b = log_5 9</span>，利用換底公式可使它們的乘積化簡。）",
      ],
      // EN: <p><strong>Decode:</strong> a product of two exponents suggests the law <span class="chem">(x^a)^b = x^{ab}</span>.</p><div class="worked__math">5 = 3<sup><i>a</i></sup>, so 9 = 5<sup><i>b</i></sup> = (3<sup><i>a</i></sup>)<sup><i>b</i></sup> <b>[M1]</b> = 3<sup><i>ab</i></sup> <b>[A1]</b></div><div class="worked__math">3<sup><i>ab</i></sup> = 3<sup>2</sup> <b>[M1]</b> ⇒ <b><i>ab</i> = 2</b> <b>[A1]</b></div>
      solution: "<p><strong>解碼：</strong>兩個指數的乘積令人想到指數定律 <span class=\"chem\">(x^a)^b = x^{ab}</span>。</p><div class=\"worked__math\">5 = 3<sup><i>a</i></sup>，故 9 = 5<sup><i>b</i></sup> = (3<sup><i>a</i></sup>)<sup><i>b</i></sup>   <b>[M1]</b>  = 3<sup><i>ab</i></sup>   <b>[A1]</b></div><div class=\"worked__math\">3<sup><i>ab</i></sup> = 3<sup>2</sup>   <b>[M1]</b>  ⇒  <b><i>ab</i> = 2</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q059 · short · challenge · SL · SL 1.7 · 8 marks
    "t1-2-q059": {
      // EN: <p>Consider the equation <span class="chem">9^x - 3^{x+1} = k</span>, where <span class="chem">k</span> ∈ ℝ.<br>(a) Show that, with <span class="chem">u = 3^x</span>, the equation becomes <span class="chem">u^2 - 3u - k = 0</span>. <strong>[1]</strong><br>(b) Find the set of values of <span class="chem">k</span> for which the original equation has two distinct real solutions for <span class="chem">x</span>. <strong>[5]</strong><br>(c) Find all the values of <span class="chem">k</span> for which the original equation has exactly one real solution. <strong>[2]</strong></p>
      stem: "<p>考慮方程 <span class=\"chem\">9^x - 3^{x+1} = k</span>，其中 <span class=\"chem\">k</span> ∈ ℝ。<br>(a) 證明 (Show that) 設 <span class=\"chem\">u = 3^x</span> 後，方程變為 <span class=\"chem\">u^2 - 3u - k = 0</span>。<strong>[1]</strong><br>(b) 求 (Find) 使原方程對於 <span class=\"chem\">x</span> 有兩個相異實數解的 <span class=\"chem\">k</span> 值的集合。<strong>[5]</strong><br>(c) 求 (Find) 使原方程恰有一個實數解的所有 <span class=\"chem\">k</span> 值。<strong>[2]</strong></p>",
      hints: [
        // EN: Decode: the question counts solutions for <span class="chem">x</span>, not for <span class="chem">u</span>. Only positive values of <span class="chem">u = 3^x</span> give a real <span class="chem">x</span>, so you are really asking how many positive roots the quadratic has.
        "解碼：題目數的是 <span class=\"chem\">x</span> 的解，而不是 <span class=\"chem\">u</span> 的解。只有正的 <span class=\"chem\">u = 3^x</span> 值才能給出實數 <span class=\"chem\">x</span>，所以你實際上要問的是二次方程有多少個正根。",
        // EN: For (b), you need <span class="chem">Δ &gt; 0</span> and both roots positive: use the sum and product of the roots.
        "在 (b) 部中，你需要 <span class=\"chem\">Δ &gt; 0</span> 且兩個根都是正數：利用根的和與積。",
        // EN: For (c), there are two different ways to get exactly one positive root. Do not forget the boundary case <span class="chem">k = 0</span>, where one root is <span class="chem">u = 0</span>.
        "在 (c) 部中，恰有一個正根有兩種不同的情況。不要忘記邊界情況 <span class=\"chem\">k = 0</span>，此時其中一個根是 <span class=\"chem\">u = 0</span>。",
      ],
      // EN: <p><strong>Decode:</strong> turn the exponential equation into a quadratic in <span class="chem">u = 3^x</span>, then count positive roots. Negative or zero roots give no real <span class="chem">x</span>, so the sign conditions matter as much as the discriminant.</p>
      solution: "<p><strong>解碼：</strong>把指數方程化為以 <span class=\"chem\">u = 3^x</span> 表示的二次方程，然後數正根的數目。負根或零根不會給出實數 <span class=\"chem\">x</span>，所以符號條件與判別式同樣重要。</p>",
      // EN: <div class="worked__math">(a) 9<sup><i>x</i></sup> = (3<sup><i>x</i></sup>)<sup>2</sup> = <i>u</i><sup>2</sup> and 3<sup><i>x</i>+1</sup> = 3 × 3<sup><i>x</i></sup> = 3<i>u</i>, so <i>u</i><sup>2</sup> − 3<i>u</i> − <i>k</i> = 0.</div><div class="worked__math">(b) Each positive root <i>u</i> gives exactly one <i>x</i> = log<sub>3</sub> <i>u</i>, so the quadratic needs two distinct positive roots: Δ = 9 + 4<i>k</i> &gt; 0 gives <i>k</i> &gt; −9/4; the sum of the roots is 3 &gt; 0; the product −<i>k</i> &gt; 0 gives <i>k</i> &lt; 0. So <b>−9/4 &lt; <i>k</i> &lt; 0</b>.</div><div class="worked__math">(c) Exactly one positive root: either a repeated positive root, <i>k</i> = −9/4 (<i>u</i> = 3/2), or roots of opposite sign or one zero root, which happens when −<i>k</i> ≤ 0, i.e. <i>k</i> ≥ 0. So <b><i>k</i> = −9/4 or <i>k</i> ≥ 0</b>.</div>
      answer: "<div class=\"worked__math\">(a) 9<sup><i>x</i></sup> = (3<sup><i>x</i></sup>)<sup>2</sup> = <i>u</i><sup>2</sup> and 3<sup><i>x</i>+1</sup> = 3 × 3<sup><i>x</i></sup> = 3<i>u</i>, so <i>u</i><sup>2</sup> − 3<i>u</i> − <i>k</i> = 0.</div><div class=\"worked__math\">(b) 每個正根 <i>u</i> 恰好給出一個 <i>x</i> = log<sub>3</sub> <i>u</i>，所以二次方程需要兩個相異正根：Δ = 9 + 4<i>k</i> &gt; 0 給出 <i>k</i> &gt; −9/4；根的和是 3 &gt; 0；根的積 −<i>k</i> &gt; 0 給出 <i>k</i> &lt; 0。故 <b>−9/4 &lt; <i>k</i> &lt; 0</b>。</div><div class=\"worked__math\">(c) 恰有一個正根：或是一個重複的正根，<i>k</i> = −9/4（<i>u</i> = 3/2）；或是兩根異號或其中一根為零，這在 −<i>k</i> ≤ 0，即 <i>k</i> ≥ 0 時發生。故 <b><i>k</i> = −9/4 或 <i>k</i> ≥ 0</b>。</div>",
      markscheme: [
        // EN: A1: (a) Writes 9^x = (3^x)^2 = u^2 and 3^(x+1) = 3u. AG: u^2 − 3u − k = 0; the given line itself earns no mark.
        "A1：(a) 寫出 9^x = (3^x)^2 = u^2 及 3^(x+1) = 3u。AG：u^2 − 3u − k = 0；單寫出題目已給出的式子不得分。",
        // EN: R1: (b) States that each positive root u gives one real x (u = 3^x > 0), so two distinct positive roots are needed.
        "R1：(b) 指出每個正根 u 給出一個實數 x（u = 3^x > 0），所以需要兩個相異正根。",
        // EN: M1: Sets Δ = 9 + 4k > 0.
        "M1：設 Δ = 9 + 4k > 0。",
        // EN: A1: k > −9/4.
        "A1：k > −9/4。",
        // EN: M1: Uses the product of the roots −k > 0 (the sum, 3, is already positive), or an equivalent sign argument.
        "M1：利用根的積 −k > 0（根的和 3 已是正數），或等價的符號論證。",
        // EN: A1: −9/4 < k < 0.
        "A1：−9/4 < k < 0。",
        // EN: A1: (c) k = −9/4 (repeated root u = 3/2 > 0).
        "A1：(c) k = −9/4（重根 u = 3/2 > 0）。",
        // EN: A1: k ≥ 0 (one positive root and one root ≤ 0).
        "A1：k ≥ 0（一個正根及一個 ≤ 0 的根）。",
      ],
    },

  }
});
