/* t1-2.q — ja question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't1-2.q', {
  questions: {

    // ── t1-2-q001 · numeric · foundation · SL · SL 1.7 · 2 marks
    "t1-2-q001": {
      // EN: <p>Evaluate <span class="chem">27^{-2/3}</span>, giving your answer as an exact fraction.</p>
      stem: "<p><span class=\"chem\">27^{-2/3}</span> を計算し、厳密な分数で答えなさい。</p>",
      hints: [
        // EN: Use <span class="chem">a^{-m/n} = 1 / (a^{1/n})^m</span>: take the cube root of 27 first before squaring.
        "<span class=\"chem\">a^{-m/n} = 1 / (a^{1/n})^m</span> を使います：2 乗する前にまず 27 の立方根をとります。",
        // EN: Since <span class="chem">27^{1/3} = 3</span>, compute <span class="chem">3^{-2}</span>.
        "<span class=\"chem\">27^{1/3} = 3</span> なので、<span class=\"chem\">3^{-2}</span> を計算します。",
      ],
      // EN: <div class="worked__math">27<sup>−2/3</sup> = (27<sup>1/3</sup>)<sup>−2</sup> = 3<sup>−2</sup> = <b><span class="frac"><span>1</span><span>9</span></span></b></div>
      solution: "<div class=\"worked__math\">27<sup>−2/3</sup> = (27<sup>1/3</sup>)<sup>−2</sup> = 3<sup>−2</sup> = <b><span class=\"frac\"><span>1</span><span>9</span></span></b></div>",
    },

    // ── t1-2-q002 · mcq · foundation · SL · SL 1.7 · 3 marks
    "t1-2-q002": {
      // EN: <p>Given that <span class="chem">p = ln a</span> and <span class="chem">q = ln b</span> (where <span class="chem">a, b &gt; 0</span>), express <span class="chem">ln(a^3 / sqrt(b))</span> in terms of <span class="chem">p</span> and <span class="chem">q</span>.</p>
      stem: "<p><span class=\"chem\">p = ln a</span>、<span class=\"chem\">q = ln b</span>（ただし <span class=\"chem\">a, b &gt; 0</span>）とするとき、<span class=\"chem\">ln(a^3 / sqrt(b))</span> を <span class=\"chem\">p</span> と <span class=\"chem\">q</span> を用いて表しなさい。</p>",
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
        "<span class=\"chem\">sqrt(b)</span> を <span class=\"chem\">b^{1/2}</span> と書き直し、商の法則 <span class=\"chem\">ln(X/Y) = ln X - ln Y</span> を適用します。",
        // EN: Apply the power rule <span class="chem">ln(x^m) = m ln x</span> to each term.
        "各項に累乗の法則 <span class=\"chem\">ln(x^m) = m ln x</span> を適用します。",
      ],
      // EN: <div class="worked__math">ln(<i>a</i><sup>3</sup> / <i>b</i><sup>1/2</sup>) = ln(<i>a</i><sup>3</sup>) − ln(<i>b</i><sup>1/2</sup>) = 3 ln <i>a</i> − <span class="frac"><span>1</span><span>2</span></span> ln <i>b</i> = <b>3<i>p</i> − <span class="frac"><span>1</span><span>2</span></span><i>q</i></b></div>
      solution: "<div class=\"worked__math\">ln(<i>a</i><sup>3</sup> / <i>b</i><sup>1/2</sup>) = ln(<i>a</i><sup>3</sup>) − ln(<i>b</i><sup>1/2</sup>) = 3 ln <i>a</i> − <span class=\"frac\"><span>1</span><span>2</span></span> ln <i>b</i> = <b>3<i>p</i> − <span class=\"frac\"><span>1</span><span>2</span></span><i>q</i></b></div>",
      misconception: {
        // EN (option B): The logarithm of a quotient is the difference of the logarithms (<span class="chem">ln(X/Y) = ln X - ln Y</span>), not the quotient of the logarithms.
        "1": "商の対数は対数の商ではなく、対数の差（<span class=\"chem\">ln(X/Y) = ln X - ln Y</span>）になります。",
        // EN (option C): The power law of logarithms brings exponents to the front as multipliers: <span class="chem">ln(a^3) = 3 ln a = 3p</span>, not <span class="chem">p^3</span>.
        "2": "対数の累乗の法則では指数が係数として前に出ます：<span class=\"chem\">ln(a^3) = 3 ln a = 3p</span> であり、<span class=\"chem\">p^3</span> ではありません。",
        // EN (option D): Because <span class="chem">sqrt(b) = b^{1/2}</span> is in the denominator, its logarithm is subtracted, not added.
        "3": "<span class=\"chem\">sqrt(b) = b^{1/2}</span> は分母にあるため、その対数は足すのではなく引きます。",
      },
    },

    // ── t1-2-q003 · numeric · foundation · SL · SL 1.7 · 3 marks
    "t1-2-q003": {
      // EN: <p>Find the exact value of <span class="chem">log_2(24) - log_2(3) + log_9(3)</span>.</p>
      stem: "<p><span class=\"chem\">log_2(24) - log_2(3) + log_9(3)</span> の厳密値（正確な値）を求めなさい (Find)。</p>",
      hints: [
        // EN: Combine the base-2 logs using <span class="chem">log_2(24) - log_2(3) = log_2(24/3) = log_2(8)</span>.
        "底が 2 の対数を <span class=\"chem\">log_2(24) - log_2(3) = log_2(24/3) = log_2(8)</span> としてまとめます。",
        // EN: For <span class="chem">log_9(3)</span>, note that <span class="chem">3 = 9^{1/2}</span>.
        "<span class=\"chem\">log_9(3)</span> については、<span class=\"chem\">3 = 9^{1/2}</span> であることに注目します。",
      ],
      // EN: <div class="worked__math">log<sub>2</sub>(24 / 3) + log<sub>9</sub>(9<sup>1/2</sup>) = log<sub>2</sub>(8) + <span class="frac"><span>1</span><span>2</span></span> = 3 + 0.5 = <b>3.5</b> (or <b>7/2</b>)</div>
      solution: "<div class=\"worked__math\">log<sub>2</sub>(24 / 3) + log<sub>9</sub>(9<sup>1/2</sup>) = log<sub>2</sub>(8) + <span class=\"frac\"><span>1</span><span>2</span></span> = 3 + 0.5 = <b>3.5</b> (または <b>7/2</b>)</div>",
      // EN: 7/2 (or 3.5)
      answerDisplay: "7/2（または 3.5）",
    },

    // ── t1-2-q004 · numeric · foundation · SL · SL 1.9 · 3 marks
    "t1-2-q004": {
      // EN: <p>Find the coefficient of <span class="chem">x^3</span> in the binomial expansion of <span class="chem">(2 + x)^5</span>.</p>
      stem: "<p><span class=\"chem\">(2 + x)^5</span> の二項展開における <span class=\"chem\">x^3</span> の係数を求めなさい (Find)。</p>",
      hints: [
        // EN: Write the general term <span class="chem">T_{r+1} = ^5C_r (2)^{5-r} x^r</span>.
        "一般項 <span class=\"chem\">T_{r+1} = ^5C_r (2)^{5-r} x^r</span> を書きます。",
        // EN: Substitute <span class="chem">r = 3</span> and compute <span class="chem">^5C_3 × 2^2</span>.
        "<span class=\"chem\">r = 3</span> を代入し、<span class=\"chem\">^5C_3 × 2^2</span> を計算します。",
      ],
      // EN: <div class="worked__math">For <i>x</i><sup>3</sup>, set <i>r</i> = 3: <sup>5</sup>C<sub>3</sub> (2)<sup>5−3</sup> <i>x</i><sup>3</sup> = 10 × 4 <i>x</i><sup>3</sup> = <b>40</b><i>x</i><sup>3</sup></div>
      solution: "<div class=\"worked__math\"><i>x</i><sup>3</sup> の項は <i>r</i> = 3 より、<sup>5</sup>C<sub>3</sub> (2)<sup>5−3</sup> <i>x</i><sup>3</sup> = 10 × 4 <i>x</i><sup>3</sup> = <b>40</b><i>x</i><sup>3</sup></div>",
    },

    // ── t1-2-q005 · multi · foundation · SL · SL 1.7 · 2 marks
    "t1-2-q005": {
      // EN: <p>Which of the following equations are valid identities for all <span class="chem">x, y &gt; 0</span>? Select all that apply.</p>
      stem: "<p>すべての <span class=\"chem\">x, y &gt; 0</span> に対して恒等式として成り立つものをすべて選びなさい。</p>",
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
        "積の法則と累乗の法則を丁寧に確認しましょう：指数は真数 <span class=\"chem\">x</span> にかかっていますか、それとも対数全体にかかっていますか？",
        // EN: Use the change of base formula <span class="chem">log_4(x) = log_2(x) / log_2(4)</span> for the third option.
        "3 つ目の選択肢には底の変換公式 <span class=\"chem\">log_4(x) = log_2(x) / log_2(4)</span> を使います。",
      ],
      // EN: <p>Option A uses the product and power laws (<span class="chem">ln(x^2 y) = ln(x^2) + ln y = 2 ln x + ln y</span>). Option C uses change of base (<span class="chem">log_4 x = log_2 x / log_2 4 = (1/2) log_2 x</span>).</p>
      solution: "<p>選択肢 A は積と累乗の法則（<span class=\"chem\">ln(x^2 y) = ln(x^2) + ln y = 2 ln x + ln y</span>）を使っています。選択肢 C は底の変換公式（<span class=\"chem\">log_4 x = log_2 x / log_2 4 = (1/2) log_2 x</span>）を使っています。</p>",
      misconception: {
        // EN (option B): There is no logarithm law for a sum <span class="chem">ln(x + y)</span>! Remember <span class="chem">ln x + ln y = ln(xy)</span>.
        "1": "和の対数 <span class=\"chem\">ln(x + y)</span> を分解する公式はありません。<span class=\"chem\">ln x + ln y = ln(xy)</span> です。",
        // EN (option D): The power rule applies to <span class="chem">ln(x^3) = 3 ln x</span>, where only <span class="chem">x</span> is cubed. <span class="chem">(ln x)^3</span> means <span class="chem">(ln x)(ln x)(ln x)</span>.
        "3": "累乗の法則が使えるのは <span class=\"chem\">x</span> だけが 3 乗されている <span class=\"chem\">ln(x^3) = 3 ln x</span> です。<span class=\"chem\">(ln x)^3</span> は <span class=\"chem\">(ln x)(ln x)(ln x)</span> を意味します。",
      },
    },

    // ── t1-2-q006 · numeric · foundation · SL · SL 1.7 · 3 marks
    "t1-2-q006": {
      // EN: <p>Solve the equation <span class="chem">9^{x-1} = (1/27)^{2-x}</span> for <span class="chem">x</span>.</p>
      stem: "<p>方程式 <span class=\"chem\">9^{x-1} = (1/27)^{2-x}</span> を <span class=\"chem\">x</span> について解きなさい。</p>",
      hints: [
        // EN: Express both sides as powers of base 3: <span class="chem">9 = 3^2</span> and <span class="chem">1/27 = 3^{-3}</span>.
        "両辺を底 3 の累乗で表します：<span class=\"chem\">9 = 3^2</span>、<span class=\"chem\">1/27 = 3^{-3}</span>。",
        // EN: Equate the exponents of base 3: <span class="chem">2(x - 1) = -3(2 - x)</span>.
        "底 3 の指数どうしを等置します：<span class=\"chem\">2(x - 1) = -3(2 - x)</span>。",
      ],
      // EN: <div class="worked__math">(3<sup>2</sup>)<sup><i>x</i>−1</sup> = (3<sup>−3</sup>)<sup>2−<i>x</i></sup> ⇒ 3<sup>2<i>x</i>−2</sup> = 3<sup>3<i>x</i>−6</sup></div><div class="worked__math">2<i>x</i> − 2 = 3<i>x</i> − 6 ⇒ <b><i>x</i> = 4</b></div>
      solution: "<div class=\"worked__math\">(3<sup>2</sup>)<sup><i>x</i>−1</sup> = (3<sup>−3</sup>)<sup>2−<i>x</i></sup> ⇒ 3<sup>2<i>x</i>−2</sup> = 3<sup>3<i>x</i>−6</sup></div><div class=\"worked__math\">2<i>x</i> − 2 = 3<i>x</i> − 6 ⇒ <b><i>x</i> = 4</b></div>",
    },

    // ── t1-2-q007 · mcq · exam · SL · SL 1.7 · 4 marks
    "t1-2-q007": {
      // EN: <p>Solve the equation <span class="chem">3^{2x} - 6(3^x) - 27 = 0</span> for <span class="chem">x</span> ∈ ℝ.</p>
      stem: "<p>方程式 <span class=\"chem\">3^{2x} - 6(3^x) - 27 = 0</span> を <span class=\"chem\">x</span> ∈ ℝ について解きなさい。</p>",
      options: [
        // EN: <span class="chem">x = 2</span> only
        "<span class=\"chem\">x = 2</span> のみ",
        // EN: <span class="chem">x = 2</span> or <span class="chem">x = 1</span>
        "<span class=\"chem\">x = 2</span> または <span class=\"chem\">x = 1</span>",
        // EN: <span class="chem">x = 9</span> or <span class="chem">x = -3</span>
        "<span class=\"chem\">x = 9</span> または <span class=\"chem\">x = -3</span>",
        // EN: <span class="chem">x = 2</span> or <span class=\"chem\">x = -1</span>
        "<span class=\"chem\">x = 2</span> または <span class=\"chem\">x = -1</span>",
      ],
      hints: [
        // EN: Substitute <span class="chem">u = 3^x</span> (with <span class="chem">u &gt; 0</span>) to get the quadratic <span class="chem">u^2 - 6u - 27 = 0</span>.
        "<span class=\"chem\">u = 3^x</span>（<span class=\"chem\">u &gt; 0</span>）とおいて二次方程式 <span class=\"chem\">u^2 - 6u - 27 = 0</span> を作ります。",
        // EN: Factor as <span class="chem">(u - 9)(u + 3) = 0</span>, reject any root with <span class="chem">u &lt;= 0</span>, and solve <span class="chem">3^x = u</span>.
        "<span class=\"chem\">(u - 9)(u + 3) = 0</span> と因数分解し、<span class=\"chem\">u &lt;= 0</span> となる解を除外してから <span class=\"chem\">3^x = u</span> を解きます。",
      ],
      // EN: <div class="worked__math">Let <i>u</i> = 3<sup><i>x</i></sup> (<i>u</i> &gt; 0): <i>u</i><sup>2</sup> − 6<i>u</i> − 27 = 0 ⇒ (<i>u</i> − 9)(<i>u</i> + 3) = 0 <b>[M1 A1]</b></div><div class="worked__math">Reject <i>u</i> = −3 since 3<sup><i>x</i></sup> &gt; 0 for all <i>x</i> ∈ ℝ. <b>[R1]</b></div><div class="worked__math">3<sup><i>x</i></sup> = 9 = 3<sup>2</sup> ⇒ <b><i>x</i> = 2</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>u</i> = 3<sup><i>x</i></sup> (<i>u</i> &gt; 0) とおくと：<i>u</i><sup>2</sup> − 6<i>u</i> − 27 = 0 ⇒ (<i>u</i> − 9)(<i>u</i> + 3) = 0 <b>[M1 A1]</b></div><div class=\"worked__math\">すべての <i>x</i> ∈ ℝ に対して 3<sup><i>x</i></sup> &gt; 0 なので、<i>u</i> = −3 は不適。 <b>[R1]</b></div><div class=\"worked__math\">3<sup><i>x</i></sup> = 9 = 3<sup>2</sup> ⇒ <b><i>x</i> = 2</b> <b>[A1]</b></div>",
      misconception: {
        // EN (option B): <span class="chem">x = 1</span> would need <span class="chem">3^x = 3</span>, but the second root of the quadratic in <span class="chem">u = 3^x</span> is <span class="chem">u = -3</span>, not <span class="chem">3</span>. Since <span class="chem">3^x &gt; 0</span> for all real <span class="chem">x</span>, <span class="chem">3^x = -3</span> has no solution, so <span class="chem">x = 2</span> only.
        "1": "<span class=\"chem\">x = 1</span> となるには <span class=\"chem\">3^x = 3</span> が必要ですが、<span class=\"chem\">u = 3^x</span> に関する二次方程式のもう一方の解は <span class=\"chem\">u = -3</span> であり、<span class=\"chem\">3</span> ではありません。すべての実数 <span class=\"chem\">x</span> で <span class=\"chem\">3^x &gt; 0</span> なので <span class=\"chem\">3^x = -3</span> は解をもたず、答えは <span class=\"chem\">x = 2</span> のみです。",
        // EN (option C): Those are the values of <span class="chem">u = 3^x</span>, not <span class="chem">x</span>! You must still solve <span class="chem">3^x = 9</span>.
        "2": "それらは <span class=\"chem\">x</span> ではなく <span class=\"chem\">u = 3^x</span> の値です。さらに <span class=\"chem\">3^x = 9</span> を解く必要があります。",
        // EN (option D): Notice <span class="chem">3^{-1} = 1/3</span>, not <span class="chem">-3</span>. An exponential <span class="chem">a^x</span> with <span class="chem">a &gt; 0</span> is never negative.
        "3": "<span class=\"chem\">3^{-1} = 1/3</span> であり、<span class=\"chem\">-3</span> ではありません。<span class=\"chem\">a &gt; 0</span> のとき指数関数 <span class=\"chem\">a^x</span> が負になることはありません。",
      },
    },

    // ── t1-2-q008 · numeric · exam · SL · SL 1.7 · 5 marks
    "t1-2-q008": {
      // EN: <p>Solve the logarithmic equation <span class="chem">log_2(x - 2) + log_2(x + 2) = 5</span> for <span class="chem">x</span>.</p>
      stem: "<p>対数方程式 <span class=\"chem\">log_2(x - 2) + log_2(x + 2) = 5</span> を <span class=\"chem\">x</span> について解きなさい。</p>",
      hints: [
        // EN: Combine the left side using the product rule: <span class="chem">log_2((x - 2)(x + 2)) = 5</span>.
        "積の法則を使って左辺をまとめます：<span class=\"chem\">log_2((x - 2)(x + 2)) = 5</span>。",
        // EN: Rewrite in exponential form <span class="chem">x^2 - 4 = 2^5 = 32</span> and check the domain condition <span class="chem">x - 2 &gt; 0</span>.
        "指数の形 <span class=\"chem\">x^2 - 4 = 2^5 = 32</span> に書き換え、真数条件 <span class=\"chem\">x - 2 &gt; 0</span> を確認します。",
      ],
      // EN: <div class="worked__math">log<sub>2</sub>((<i>x</i> − 2)(<i>x</i> + 2)) = 5 ⇒ <i>x</i><sup>2</sup> − 4 = 2<sup>5</sup> = 32 <b>[M1 A1]</b></div><div class="worked__math"><i>x</i><sup>2</sup> = 36 ⇒ <i>x</i> = ±6 <b>[A1]</b></div><div class="worked__math">Since log<sub>2</sub>(<i>x</i> − 2) requires <i>x</i> &gt; 2, reject <i>x</i> = −6 and keep <b><i>x</i> = 6</b>. <b>[R1 A1]</b></div>
      solution: "<div class=\"worked__math\">log<sub>2</sub>((<i>x</i> − 2)(<i>x</i> + 2)) = 5 ⇒ <i>x</i><sup>2</sup> − 4 = 2<sup>5</sup> = 32 <b>[M1 A1]</b></div><div class=\"worked__math\"><i>x</i><sup>2</sup> = 36 ⇒ <i>x</i> = ±6 <b>[A1]</b></div><div class=\"worked__math\">log<sub>2</sub>(<i>x</i> − 2) の真数条件 <i>x</i> &gt; 2 より、<i>x</i> = −6 を除外して <b><i>x</i> = 6</b>。 <b>[R1 A1]</b></div>",
    },

    // ── t1-2-q009 · numeric · exam · SL · SL 1.7 · 5 marks
    "t1-2-q009": {
      // EN: <p>Given that <span class="chem">log_3(x) + 4 log_x(3) = 5</span>, find the larger of the two possible values of <span class="chem">x</span>.</p>
      stem: "<p><span class=\"chem\">log_3(x) + 4 log_x(3) = 5</span> を満たす 2 つの <span class=\"chem\">x</span> の値のうち、大きい方を求めなさい (Find)。</p>",
      hints: [
        // EN: Use the change of base formula to rewrite <span class="chem">log_x(3) = log_3(3) / log_3(x) = 1 / log_3(x)</span>.
        "底の変換公式を使って <span class=\"chem\">log_x(3) = log_3(3) / log_3(x) = 1 / log_3(x)</span> と書き換えます。",
        // EN: Let <span class="chem">u = log_3(x)</span> to form <span class="chem">u + 4/u = 5</span>, solve for <span class="chem">u</span>, and then compute <span class="chem">x = 3^u</span>.
        "<span class=\"chem\">u = log_3(x)</span> とおいて <span class=\"chem\">u + 4/u = 5</span> を <span class=\"chem\">u</span> について解き、次に <span class=\"chem\">x = 3^u</span> を計算します。",
      ],
      // EN: <div class="worked__math">Using change of base, log<sub><i>x</i></sub>(3) = <span class="frac"><span>1</span><span>log<sub>3</sub>(<i>x</i>)</span></span>. Let <i>u</i> = log<sub>3</sub>(<i>x</i>): <b>[M1]</b></div><div class="worked__math"><i>u</i> + <span class="frac"><span>4</span><span><i>u</i></span></span> = 5 ⇒ <i>u</i><sup>2</sup> − 5<i>u</i> + 4 = 0 ⇒ (<i>u</i> − 1)(<i>u</i> − 4) = 0 <b>[M1 A1]</b></div><div class="worked__math">log<sub>3</sub>(<i>x</i>) = 1 ⇒ <i>x</i> = 3, or log<sub>3</sub>(<i>x</i>) = 4 ⇒ <i>x</i> = 3<sup>4</sup> = <b>81</b> <b>[A1 A1]</b></div>
      solution: "<div class=\"worked__math\">底の変換公式より、log<sub><i>x</i></sub>(3) = <span class=\"frac\"><span>1</span><span>log<sub>3</sub>(<i>x</i>)</span></span>。<i>u</i> = log<sub>3</sub>(<i>x</i>) とおくと： <b>[M1]</b></div><div class=\"worked__math\"><i>u</i> + <span class=\"frac\"><span>4</span><span><i>u</i></span></span> = 5 ⇒ <i>u</i><sup>2</sup> − 5<i>u</i> + 4 = 0 ⇒ (<i>u</i> − 1)(<i>u</i> − 4) = 0 <b>[M1 A1]</b></div><div class=\"worked__math\">log<sub>3</sub>(<i>x</i>) = 1 ⇒ <i>x</i> = 3、または log<sub>3</sub>(<i>x</i>) = 4 ⇒ <i>x</i> = 3<sup>4</sup> = <b>81</b> <b>[A1 A1]</b></div>",
    },

    // ── t1-2-q010 · numeric · exam · SL · SL 1.9 · 5 marks
    "t1-2-q010": {
      // EN: <p>Find the constant term (the term independent of <span class="chem">x</span>) in the expansion of <span class="chem">(2x^2 - 1/x)^6</span>.</p>
      stem: "<p><span class=\"chem\">(2x^2 - 1/x)^6</span> の展開式における定数項（<span class=\"chem\">x</span> を含まない項）を求めなさい (Find)。</p>",
      hints: [
        // EN: Write the general term: <span class="chem">T_{r+1} = ^6C_r (2x^2)^{6-r} (-x^{-1})^r = ^6C_r 2^{6-r} (-1)^r x^{12-3r}</span>.
        "一般項を書きます：<span class=\"chem\">T_{r+1} = ^6C_r (2x^2)^{6-r} (-x^{-1})^r = ^6C_r 2^{6-r} (-1)^r x^{12-3r}</span>。",
        // EN: Set the power of <span class="chem">x</span> equal to zero (<span class="chem">12 - 3r = 0</span>) to find <span class="chem">r = 4</span>, then substitute <span class="chem">r = 4</span>.
        "<span class=\"chem\">x</span> の指数を 0 とおいて（<span class=\"chem\">12 - 3r = 0</span>）<span class=\"chem\">r = 4</span> を求め、次に <span class=\"chem\">r = 4</span> を代入します。",
      ],
      // EN: <div class="worked__math"><i>T</i><sub><i>r</i>+1</sub> = <sup>6</sup>C<sub><i>r</i></sub> (2<i>x</i><sup>2</sup>)<sup>6−<i>r</i></sup> (−<i>x</i><sup>−1</sup>)<sup><i>r</i></sup> = <sup>6</sup>C<sub><i>r</i></sub> 2<sup>6−<i>r</i></sup> (−1)<sup><i>r</i></sup> <i>x</i><sup>12−3<i>r</i></sup> <b>[M1 A1]</b></div><div class="worked__math">Constant term requires 12 − 3<i>r</i> = 0 ⇒ <i>r</i> = 4 <b>[M1 A1]</b></div><div class="worked__math"><sup>6</sup>C<sub>4</sub> × 2<sup>2</sup> × (−1)<sup>4</sup> = 15 × 4 × 1 = <b>60</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>T</i><sub><i>r</i>+1</sub> = <sup>6</sup>C<sub><i>r</i></sub> (2<i>x</i><sup>2</sup>)<sup>6−<i>r</i></sup> (−<i>x</i><sup>−1</sup>)<sup><i>r</i></sup> = <sup>6</sup>C<sub><i>r</i></sub> 2<sup>6−<i>r</i></sup> (−1)<sup><i>r</i></sup> <i>x</i><sup>12−3<i>r</i></sup> <b>[M1 A1]</b></div><div class=\"worked__math\">定数項となる条件は 12 − 3<i>r</i> = 0 ⇒ <i>r</i> = 4 <b>[M1 A1]</b></div><div class=\"worked__math\"><sup>6</sup>C<sub>4</sub> × 2<sup>2</sup> × (−1)<sup>4</sup> = 15 × 4 × 1 = <b>60</b> <b>[A1]</b></div>",
    },

    // ── t1-2-q011 · numeric · exam · SL · SL 1.9 · 5 marks
    "t1-2-q011": {
      // EN: <p>Find the coefficient of <span class="chem">x^2</span> in the expansion of <span class="chem">(1 - 3x)(2 + x)^4</span>.</p>
      stem: "<p><span class=\"chem\">(1 - 3x)(2 + x)^4</span> の展開式における <span class=\"chem\">x^2</span> の係数を求めなさい (Find)。</p>",
      hints: [
        // EN: Find the first three terms (up to <span class="chem">x^2</span>) in the expansion of <span class="chem">(2 + x)^4</span>.
        "<span class=\"chem\">(2 + x)^4</span> の展開式の最初の 3 項（<span class=\"chem\">x^2</span> の項まで）を求めます。",
        // EN: Multiply <span class="chem">(1 - 3x)(16 + 32x + 24x^2 + ...)</span> and collect the two products that produce <span class="chem">x^2</span>.
        "<span class=\"chem\">(1 - 3x)(16 + 32x + 24x^2 + ...)</span> を展開し、<span class=\"chem\">x^2</span> を作る 2 つの積を集めます。",
      ],
      // EN: <div class="worked__math">(2 + <i>x</i>)<sup>4</sup> = 2<sup>4</sup> + <sup>4</sup>C<sub>1</sub>(2<sup>3</sup>)<i>x</i> + <sup>4</sup>C<sub>2</sub>(2<sup>2</sup>)<i>x</i><sup>2</sup> + … = 16 + 32<i>x</i> + 24<i>x</i><sup>2</sup> + … <b>[M1 A1]</b></div><div class="worked__math">Coeff of <i>x</i><sup>2</sup> = (1)(24) + (−3)(32) = 24 − 96 = <b>−72</b> <b>[M1 A2]</b></div>
      solution: "<div class=\"worked__math\">(2 + <i>x</i>)<sup>4</sup> = 2<sup>4</sup> + <sup>4</sup>C<sub>1</sub>(2<sup>3</sup>)<i>x</i> + <sup>4</sup>C<sub>2</sub>(2<sup>2</sup>)<i>x</i><sup>2</sup> + … = 16 + 32<i>x</i> + 24<i>x</i><sup>2</sup> + … <b>[M1 A1]</b></div><div class=\"worked__math\"><i>x</i><sup>2</sup> の係数 = (1)(24) + (−3)(32) = 24 − 96 = <b>−72</b> <b>[M1 A2]</b></div>",
    },

    // ── t1-2-q012 · order · exam · SL · SL 1.9 · 4 marks
    "t1-2-q012": {
      // EN: <p>Arrange the steps in order to find the term in <span class="chem">x^3</span> in the expansion of <span class="chem">(x^2 + 2/x)^6</span>.</p>
      stem: "<p><span class=\"chem\">(x^2 + 2/x)^6</span> の展開式における <span class=\"chem\">x^3</span> の項を求める手順を正しい順序に並べ替えなさい。</p>",
      options: [
        // EN: Write the general term <span class="chem">T_{r+1} = ^6C_r (x^2)^{6-r} (2x^{-1})^r</span>.
        "一般項 <span class=\"chem\">T_{r+1} = ^6C_r (x^2)^{6-r} (2x^{-1})^r</span> を書く。",
        // EN: Separate the numerical coefficients and combine the powers of <span class="chem">x</span> to get <span class=\"chem">^6C_r 2^r x^{12-3r}</span>.
        "数の係数と <span class=\"chem\">x</span> の累乗を整理し、<span class=\"chem\">^6C_r 2^r x^{12-3r}</span> を得る。",
        // EN: Equate the exponent of <span class="chem">x</span> to the target power: <span class="chem">12 - 3r = 3</span>, which gives <span class="chem">r = 3</span>.
        "<span class=\"chem\">x</span> の指数を目標の次数と等置する：<span class=\"chem\">12 - 3r = 3</span> より <span class=\"chem\">r = 3</span> を得る。",
        // EN: Substitute <span class="chem">r = 3</span> to obtain <span class="chem">^6C_3 × 2^3 x^3 = 20 × 8 x^3 = 160x^3</span>.
        "<span class=\"chem\">r = 3</span> を代入して <span class=\"chem\">^6C_3 × 2^3 x^3 = 20 × 8 x^3 = 160x^3</span> を得る。",
      ],
      hints: [
        // EN: Always start from the general term formula <span class="chem">T_{r+1} = nCr a^{n-r} b^r</span>.
        "常に一般項の公式 <span class=\"chem\">T_{r+1} = nCr a^{n-r} b^r</span> から始めます。",
        // EN: Simplify the exponent of <span class="chem">x</span> into a single linear expression in <span class="chem">r</span> before solving for <span class="chem">r</span>.
        "<span class=\"chem\">r</span> を求める前に、<span class=\"chem\">x</span> の指数を <span class=\"chem\">r</span> の 1 次式にまとめます。",
      ],
      // EN: <p>Writing the general term, combining exponents into <span class="chem">x^{12-3r}</span>, solving <span class="chem">12 - 3r = 3 =&gt; r = 3</span>, and evaluating <span class="chem">^6C_3 × 2^3 = 160</span> gives <span class="chem">160x^3</span>.</p>
      solution: "<p>一般項を書き、指数を <span class=\"chem\">x^{12-3r}</span> にまとめ、<span class=\"chem\">12 - 3r = 3 =&gt; r = 3</span> を解き、<span class=\"chem\">^6C_3 × 2^3 = 160</span> を計算すると <span class=\"chem\">160x^3</span> が得られます。</p>",
    },

    // ── t1-2-q013 · numeric · exam · SL · SL 1.9 · 3 marks
    "t1-2-q013": {
      // EN: <p>In the expansion of <span class="chem">(1 + kx)^7</span>, where <span class="chem">k &gt; 0</span>, the coefficient of <span class="chem">x^3</span> is equal to <span class="chem">5/3</span> times the coefficient of <span class="chem">x^2</span>. Find the exact value of <span class="chem">k</span>.</p>
      stem: "<p><span class=\"chem\">(1 + kx)^7</span>（<span class=\"chem\">k &gt; 0</span>）の展開式において、<span class=\"chem\">x^3</span> の係数が <span class=\"chem\">x^2</span> の係数の <span class=\"chem\">5/3</span> 倍に等しい。<span class=\"chem\">k</span> の厳密値（正確な値）を求めなさい (Find)。</p>",
      hints: [
        // EN: Write the coefficient of <span class="chem">x^3</span> as <span class="chem">^7C_3 k^3 = 35k^3</span> and the coefficient of <span class="chem">x^2</span> as <span class="chem">^7C_2 k^2 = 21k^2</span>.
        "<span class=\"chem\">x^3</span> の係数を <span class=\"chem\">^7C_3 k^3 = 35k^3</span>、<span class=\"chem\">x^2</span> の係数を <span class=\"chem\">^7C_2 k^2 = 21k^2</span> と表します。",
        // EN: Solve <span class="chem">35k^3 = (5/3)(21k^2)</span> for <span class="chem">k &gt; 0</span>.
        "<span class=\"chem\">35k^3 = (5/3)(21k^2)</span> を <span class=\"chem\">k &gt; 0</span> の条件で解きます。",
      ],
      // EN: <div class="worked__math"><sup>7</sup>C<sub>3</sub> <i>k</i><sup>3</sup> = <span class="frac"><span>5</span><span>3</span></span> (<sup>7</sup>C<sub>2</sub> <i>k</i><sup>2</sup>) ⇒ 35<i>k</i><sup>3</sup> = <span class="frac"><span>5</span><span>3</span></span>(21<i>k</i><sup>2</sup>) = 35<i>k</i><sup>2</sup> <b>[M1 A1]</b></div><div class="worked__math">Since <i>k</i> &gt; 0, divide by 35<i>k</i><sup>2</sup> to get <b><i>k</i> = 1</b>. <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><sup>7</sup>C<sub>3</sub> <i>k</i><sup>3</sup> = <span class=\"frac\"><span>5</span><span>3</span></span> (<sup>7</sup>C<sub>2</sub> <i>k</i><sup>2</sup>) ⇒ 35<i>k</i><sup>3</sup> = <span class=\"frac\"><span>5</span><span>3</span></span>(21<i>k</i><sup>2</sup>) = 35<i>k</i><sup>2</sup> <b>[M1 A1]</b></div><div class=\"worked__math\"><i>k</i> &gt; 0 より両辺を 35<i>k</i><sup>2</sup> で割ると <b><i>k</i> = 1</b>。 <b>[A1]</b></div>",
    },

    // ── t1-2-q014 · short · exam · SL · SL 1.7 · 6 marks
    "t1-2-q014": {
      // EN: <p>Solve the simultaneous equations for <span class="chem">x &gt; 0</span> and <span class="chem">y &gt; 0</span>:<br><span class="chem">log_2(x) + log_2(y) = 4</span><br><span class="chem">log_2(x^2) - log_2(y) = 5</span></p>
      stem: "<p><span class=\"chem\">x &gt; 0</span>、<span class=\"chem\">y &gt; 0</span> に対して次の連立方程式を解きなさい：<br><span class=\"chem\">log_2(x) + log_2(y) = 4</span><br><span class=\"chem\">log_2(x^2) - log_2(y) = 5</span></p>",
      hints: [
        // EN: Use the power law <span class="chem">log_2(x^2) = 2 log_2(x)</span> on the second equation.
        "2 つ目の方程式に累乗の法則 <span class=\"chem\">log_2(x^2) = 2 log_2(x)</span> を使います。",
        // EN: Add the two equations together to eliminate <span class="chem">log_2(y)</span> immediately!
        "2 つの方程式をそのまま足すと、<span class=\"chem\">log_2(y)</span> をすぐに消去できます。",
      ],
      // EN: <p>Adding <span class="chem">log_2(x) + log_2(y) = 4</span> and <span class="chem">2 log_2(x) - log_2(y) = 5</span> gives <span class="chem">3 log_2(x) = 9 =&gt; log_2(x) = 3 =&gt; x = 8</span>, and hence <span class="chem">log_2(y) = 1 =&gt; y = 2</span>.</p>
      solution: "<p><span class=\"chem\">log_2(x) + log_2(y) = 4</span> と <span class=\"chem\">2 log_2(x) - log_2(y) = 5</span> を足すと <span class=\"chem\">3 log_2(x) = 9 =&gt; log_2(x) = 3 =&gt; x = 8</span> となり、よって <span class=\"chem\">log_2(y) = 1 =&gt; y = 2</span> となります。</p>",
      // EN: <div class="worked__math">Rewrite second equation as 2 log<sub>2</sub>(<i>x</i>) − log<sub>2</sub>(<i>y</i>) = 5.</div><div class="worked__math">Add the two equations: 3 log<sub>2</sub>(<i>x</i>) = 9 ⇒ log<sub>2</sub>(<i>x</i>) = 3 ⇒ <b><i>x</i> = 8</b>.</div><div class="worked__math">Substitute into first: 3 + log<sub>2</sub>(<i>y</i>) = 4 ⇒ log<sub>2</sub>(<i>y</i>) = 1 ⇒ <b><i>y</i> = 2</b>.</div>
      answer: "<div class=\"worked__math\">2 つ目の式を 2 log<sub>2</sub>(<i>x</i>) − log<sub>2</sub>(<i>y</i>) = 5 と書き直す。</div><div class=\"worked__math\">2 式を足す：3 log<sub>2</sub>(<i>x</i>) = 9 ⇒ log<sub>2</sub>(<i>x</i>) = 3 ⇒ <b><i>x</i> = 8</b>。</div><div class=\"worked__math\">1 つ目の式に代入：3 + log<sub>2</sub>(<i>y</i>) = 4 ⇒ log<sub>2</sub>(<i>y</i>) = 1 ⇒ <b><i>y</i> = 2</b>。</div>",
      markscheme: [
        // EN: M1: Applies power law log_2(x^2) = 2 log_2(x) (or converts both equations to xy = 16 and x^2/y = 32).
        "M1：累乗の法則 log_2(x^2) = 2 log_2(x) を適用する（または両式を xy = 16、x^2/y = 32 に変換する）。",
        // EN: M1: Eliminates log_2(y) by adding the equations to obtain 3 log_2(x) = 9 (or multiplies xy × (x^2/y) = x^3 = 512).
        "M1：2 式を足して log_2(y) を消去し、3 log_2(x) = 9 を得る（または xy × (x^2/y) = x^3 = 512 を作る）。",
        // EN: A1: Finds log_2(x) = 3.
        "A1：log_2(x) = 3 を求める。",
        // EN: A1: Deduces x = 2^3 = 8.
        "A1：x = 2^3 = 8 を導く。",
        // EN: M1: Substitutes log_2(x) = 3 back into the first equation: 3 + log_2(y) = 4.
        "M1：log_2(x) = 3 を 1 つ目の式に代入する：3 + log_2(y) = 4。",
        // EN: A1: Finds log_2(y) = 1 and hence y = 2.
        "A1：log_2(y) = 1、よって y = 2 を求める。",
      ],
    },

    // ── t1-2-q015 · numeric · challenge · SL · SL 1.7 · 4 marks
    "t1-2-q015": {
      // EN: <p>The terms <span class="chem">log_2(p)</span>, <span class="chem">log_4(p)</span>, <span class="chem">log_8(p)</span>, ... are evaluated for <span class="chem">p = 64</span>. Calculate the exact value of the sum <span class="chem">log_2(64) + log_4(64) + log_8(64) + log_{16}(64)</span>.</p>
      stem: "<p><span class=\"chem\">log_2(p)</span>、<span class=\"chem\">log_4(p)</span>、<span class=\"chem\">log_8(p)</span>, ... を <span class=\"chem\">p = 64</span> に対して計算する。和 <span class=\"chem\">log_2(64) + log_4(64) + log_8(64) + log_{16}(64)</span> の厳密値（正確な値）を計算しなさい (Calculate)。</p>",
      hints: [
        // EN: Write <span class="chem">64 = 2^6</span> and convert each base to a power of 2: <span class="chem">4 = 2^2, 8 = 2^3, 16 = 2^4</span>.
        "<span class=\"chem\">64 = 2^6</span> とし、各底を 2 の累乗で表します：<span class=\"chem\">4 = 2^2, 8 = 2^3, 16 = 2^4</span>。",
        // EN: Use <span class="chem">log_{2^k}(2^6) = 6 / k</span> for <span class="chem">k = 1, 2, 3, 4</span>.
        "<span class=\"chem\">k = 1, 2, 3, 4</span> に対して <span class=\"chem\">log_{2^k}(2^6) = 6 / k</span> を使います。",
      ],
      // EN: <div class="worked__math">Since 64 = 2<sup>6</sup> and log<sub>2<sup><i>k</i></sup></sub>(2<sup>6</sup>) = <span class="frac"><span>6</span><span><i>k</i></span></span>: <b>[M1 A1]</b></div><div class="worked__math">Sum = <span class="frac"><span>6</span><span>1</span></span> + <span class="frac"><span>6</span><span>2</span></span> + <span class="frac"><span>6</span><span>3</span></span> + <span class="frac"><span>6</span><span>4</span></span> = 6 + 3 + 2 + 1.5 = <b>12.5</b> (or <b>25/2</b>) <b>[M1 A1]</b></div>
      solution: "<div class=\"worked__math\">64 = 2<sup>6</sup>、log<sub>2<sup><i>k</i></sup></sub>(2<sup>6</sup>) = <span class=\"frac\"><span>6</span><span><i>k</i></span></span> より： <b>[M1 A1]</b></div><div class=\"worked__math\">和 = <span class=\"frac\"><span>6</span><span>1</span></span> + <span class=\"frac\"><span>6</span><span>2</span></span> + <span class=\"frac\"><span>6</span><span>3</span></span> + <span class=\"frac\"><span>6</span><span>4</span></span> = 6 + 3 + 2 + 1.5 = <b>12.5</b> (または <b>25/2</b>) <b>[M1 A1]</b></div>",
      // EN: 25/2 (or 12.5)
      answerDisplay: "25/2（または 12.5）",
    },

    // ── t1-2-q016 · numeric · challenge · SL · SL 1.9 · 6 marks
    "t1-2-q016": {
      // EN: <p>In the expansion of <span class="chem">(1 + x)^n</span>, where <span class="chem">n &gt;= 3</span> is a positive integer, the coefficients of <span class="chem">x</span>, <span class="chem">x^2</span>, and <span class="chem">x^3</span> form an arithmetic sequence. Find the value of <span class="chem">n</span>.</p>
      stem: "<p><span class=\"chem\">(1 + x)^n</span>（<span class=\"chem\">n &gt;= 3</span> は正の整数）の展開式において、<span class=\"chem\">x</span>、<span class=\"chem\">x^2</span>、<span class=\"chem\">x^3</span> の係数が等差数列をなす。<span class=\"chem\">n</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Write out the three coefficients: <span class="chem">nC1 = n</span>, <span class="chem">nC2 = n(n-1)/2</span>, and <span class="chem">nC3 = n(n-1)(n-2)/6</span>.
        "3 つの係数を書き出します：<span class=\"chem\">nC1 = n</span>、<span class=\"chem\">nC2 = n(n-1)/2</span>、<span class=\"chem\">nC3 = n(n-1)(n-2)/6</span>。",
        // EN: Use the arithmetic condition <span class="chem">2(nC2) = nC1 + nC3</span> and divide through by <span class="chem">n &gt; 0</span>.
        "等差数列の条件 <span class=\"chem\">2(nC2) = nC1 + nC3</span> を使い、両辺を <span class=\"chem\">n &gt; 0</span> で割ります。",
      ],
      // EN: <div class="worked__math">2 × <span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = <i>n</i> + <span class="frac"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6</span></span> <b>[M1 A1]</b></div><div class="worked__math">Divide by <i>n</i> &gt; 0 and multiply by 6: 6(<i>n</i> − 1) = 6 + (<i>n</i><sup>2</sup> − 3<i>n</i> + 2) <b>[M1 A1]</b></div><div class="worked__math"><i>n</i><sup>2</sup> − 9<i>n</i> + 14 = 0 ⇒ (<i>n</i> − 2)(<i>n</i> − 7) = 0. Since <i>n</i> ≥ 3, <b><i>n</i> = 7</b>. <b>[M1 A1]</b></div>
      solution: "<div class=\"worked__math\">2 × <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = <i>n</i> + <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6</span></span> <b>[M1 A1]</b></div><div class=\"worked__math\"><i>n</i> &gt; 0 で割り、6 を掛ける：6(<i>n</i> − 1) = 6 + (<i>n</i><sup>2</sup> − 3<i>n</i> + 2) <b>[M1 A1]</b></div><div class=\"worked__math\"><i>n</i><sup>2</sup> − 9<i>n</i> + 14 = 0 ⇒ (<i>n</i> − 2)(<i>n</i> − 7) = 0。<i>n</i> ≥ 3 より <b><i>n</i> = 7</b>。 <b>[M1 A1]</b></div>",
    },

    // ── t1-2-q017 · short · challenge · SL · SL 1.7 · 7 marks
    "t1-2-q017": {
      // EN: <p>Consider the equation <span class="chem">e^{2x} - 2k e^x + (k + 2) = 0</span>, where <span class="chem">k</span> ∈ ℝ.<br>(a) Find the set of values of <span class="chem">k</span> for which the quadratic in <span class="chem">u = e^x</span> has two distinct real roots. <strong>[3]</strong><br>(b) Hence find the exact set of values of <span class="chem">k</span> for which the original equation has <strong>two distinct real solutions for <span class="chem">x</span></strong>. <strong>[4]</strong></p>
      stem: "<p>方程式 <span class=\"chem\">e^{2x} - 2k e^x + (k + 2) = 0</span>（<span class=\"chem\">k</span> ∈ ℝ）を考える。<br>(a) <span class=\"chem\">u = e^x</span> に関する二次方程式が異なる 2 つの実数解をもつような <span class=\"chem\">k</span> の値の範囲を求めなさい (Find)。 <strong>[3]</strong><br>(b) これを用いて (Hence)、元の方程式が<strong><span class=\"chem\">x</span> について異なる 2 つの実数解</strong>をもつような <span class=\"chem\">k</span> の厳密な範囲を求めなさい (Find)。 <strong>[4]</strong></p>",
      hints: [
        // EN: For part (a), set the discriminant <span class="chem">Δ = (-2k)^2 - 4(1)(k+2) &gt; 0</span>.
        "(a) では、判別式 <span class=\"chem\">Δ = (-2k)^2 - 4(1)(k+2) &gt; 0</span> とおきます。",
        // EN: For part (b), remember that a root <span class="chem">u</span> only produces a real <span class="chem">x = ln u</span> if <span class="chem">u &gt; 0</span>! When are both roots of <span class="chem">u^2 - 2ku + (k+2) = 0</span> positive?
        "(b) では、解 <span class=\"chem\">u</span> が実数 <span class=\"chem\">x = ln u</span> を与えるのは <span class=\"chem\">u &gt; 0</span> のときだけである点に注意しましょう。<span class=\"chem\">u^2 - 2ku + (k+2) = 0</span> の 2 つの解がともに正になるのはいつでしょうか？",
      ],
      // EN: <p>When <span class="chem">k &lt; -1</span>, the sum of the two <span class="chem">u</span>-roots is <span class="chem">2k &lt; 0</span>, so at least one root is negative and cannot equal <span class="chem">e^x</span>. Only <span class="chem">k &gt; 2</span> makes <span class="chem">Δ &gt; 0</span>, <span class="chem">u_1 + u_2 = 2k &gt; 0</span>, and <span class="chem">u_1 u_2 = k + 2 &gt; 0</span>.</p>
      solution: "<p><span class=\"chem\">k &lt; -1</span> のとき、2 つの <span class=\"chem\">u</span> の解の和は <span class=\"chem\">2k &lt; 0</span> なので、少なくとも 1 つの解は負になり <span class=\"chem\">e^x</span> と等しくなれません。<span class=\"chem\">Δ &gt; 0</span>、<span class=\"chem\">u_1 + u_2 = 2k &gt; 0</span>、<span class=\"chem\">u_1 u_2 = k + 2 &gt; 0</span> をすべて満たすのは <span class=\"chem\">k &gt; 2</span> のみです。</p>",
      // EN: <div class="worked__math">(a) Let <i>u</i> = e<sup><i>x</i></sup>: <i>u</i><sup>2</sup> − 2<i>k u</i> + (<i>k</i> + 2) = 0. Δ = 4<i>k</i><sup>2</sup> − 4(<i>k</i> + 2) &gt; 0 ⇒ <i>k</i><sup>2</sup> − <i>k</i> − 2 &gt; 0 ⇒ (<i>k</i> − 2)(<i>k</i> + 1) &gt; 0 ⇒ <b><i>k</i> &lt; −1 or <i>k</i> &gt; 2</b>.</div><div class="worked__math">(b) For two real solutions in <i>x</i>, BOTH roots <i>u</i><sub>1</sub>, <i>u</i><sub>2</sub> must be strictly positive (<i>u</i> = e<sup><i>x</i></sup> &gt; 0).</div><div class="worked__math">Sum of roots 2<i>k</i> &gt; 0 ⇒ <i>k</i> &gt; 0, and product of roots <i>k</i> + 2 &gt; 0 ⇒ <i>k</i> &gt; −2. Intersecting with (a) gives <b><i>k</i> &gt; 2</b>.</div>
      answer: "<div class=\"worked__math\">(a) <i>u</i> = e<sup><i>x</i></sup> とおくと：<i>u</i><sup>2</sup> − 2<i>k u</i> + (<i>k</i> + 2) = 0。Δ = 4<i>k</i><sup>2</sup> − 4(<i>k</i> + 2) &gt; 0 ⇒ <i>k</i><sup>2</sup> − <i>k</i> − 2 &gt; 0 ⇒ (<i>k</i> − 2)(<i>k</i> + 1) &gt; 0 ⇒ <b><i>k</i> &lt; −1 または <i>k</i> &gt; 2</b>。</div><div class=\"worked__math\">(b) <i>x</i> の実数解が 2 つあるためには、2 つの解 <i>u</i><sub>1</sub>, <i>u</i><sub>2</sub> がともに正（<i>u</i> = e<sup><i>x</i></sup> &gt; 0）でなければならない。</div><div class=\"worked__math\">解の和 2<i>k</i> &gt; 0 ⇒ <i>k</i> &gt; 0、解の積 <i>k</i> + 2 &gt; 0 ⇒ <i>k</i> &gt; −2。(a) との共通部分は <b><i>k</i> &gt; 2</b>。</div>",
      markscheme: [
        // EN: M1: Substitutes u = e^x and sets discriminant Δ = (-2k)^2 - 4(1)(k + 2) > 0.
        "M1：u = e^x とおき、判別式 Δ = (-2k)^2 - 4(1)(k + 2) > 0 とする。",
        // EN: A1: Simplifies to k^2 - k - 2 > 0 or (k - 2)(k + 1) > 0.
        "A1：k^2 - k - 2 > 0 または (k - 2)(k + 1) > 0 に整理する。",
        // EN: A1: Deduces k < -1 or k > 2.
        "A1：k < -1 または k > 2 を導く。",
        // EN: R1: Recognizes that since u = e^x > 0, both roots u_1 and u_2 must be strictly positive.
        "R1：u = e^x > 0 であるため、2 つの解 u_1 と u_2 がともに正でなければならないことを見抜く。",
        // EN: M1: Requires sum of roots 2k > 0 and product of roots k + 2 > 0 (or tests vertex u = k > 0 and f(0) = k + 2 > 0).
        "M1：解の和 2k > 0 かつ解の積 k + 2 > 0 を条件とする（または頂点 u = k > 0 かつ f(0) = k + 2 > 0 を調べる）。",
        // EN: A1: Rejects k < -1 (there the sum of roots 2k < 0, so a root is not positive).
        "A1：k < -1 を除外する（このとき解の和 2k < 0 なので、正でない解がある）。",
        // EN: A1: States the final set k > 2.
        "A1：最終的な範囲 k > 2 を述べる。",
      ],
    },

    // ── t1-2-q018 · numeric · foundation · SL · SL 1.5 · 2 marks
    "t1-2-q018": {
      // EN: <p>Use your GDC to solve <span class="chem">7^x = 50</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>GDC を使って <span class=\"chem\">7^x = 50</span> を解きなさい。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Rewrite the equation in logarithmic form: <span class="chem">x = log_7 50</span>.
        "方程式を対数の形に書き直します：<span class=\"chem\">x = log_7 50</span>。",
        // EN: Evaluate it on the GDC, either with the <span class="mono">log<sub>a</sub></span> template or as <span class="chem">ln 50 / ln 7</span>.
        "GDC の <span class=\"mono\">log<sub>a</sub></span> テンプレートを使うか、<span class=\"chem\">ln 50 / ln 7</span> として計算します。",
      ],
      // EN: <div class="worked__math"><i>x</i> = log<sub>7</sub> 50 = <span class="frac"><span>ln 50</span><span>ln 7</span></span> ≈ 2.01038   <b>[M1]</b></div><p>To 3 significant figures, <strong><i>x</i> = 2.01</strong>. <b>[A1]</b></p>
      solution: "<div class=\"worked__math\"><i>x</i> = log<sub>7</sub> 50 = <span class=\"frac\"><span>ln 50</span><span>ln 7</span></span> ≈ 2.01038   <b>[M1]</b></div><p>有効数字 3 桁で <strong><i>x</i> = 2.01</strong> です。<b>[A1]</b></p>",
    },
  }
});
