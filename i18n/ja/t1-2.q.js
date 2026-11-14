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

    // ── t1-2-q007 · numeric · exam · SL · SL 1.7 · 4 marks
    "t1-2-q007": {
      // EN: <p>Solve the equation <span class="chem">3^{2x} - 6(3^x) - 27 = 0</span> for <span class="chem">x</span> ∈ ℝ.</p>
      stem: "<p>方程式 <span class=\"chem\">3^{2x} - 6(3^x) - 27 = 0</span> を <span class=\"chem\">x</span> ∈ ℝ について解きなさい。</p>",
      hints: [
        // EN: Substitute <span class="chem">u = 3^x</span> (with <span class="chem">u &gt; 0</span>) to get the quadratic <span class="chem">u^2 - 6u - 27 = 0</span>.
        "<span class=\"chem\">u = 3^x</span>（<span class=\"chem\">u &gt; 0</span>）とおいて二次方程式 <span class=\"chem\">u^2 - 6u - 27 = 0</span> を作ります。",
        // EN: Factor as <span class="chem">(u - 9)(u + 3) = 0</span>, reject any root with <span class="chem">u &lt;= 0</span>, and solve <span class="chem">3^x = u</span>.
        "<span class=\"chem\">(u - 9)(u + 3) = 0</span> と因数分解し、<span class=\"chem\">u &lt;= 0</span> となる解を除外してから <span class=\"chem\">3^x = u</span> を解きます。",
      ],
      // EN: <div class="worked__math">Let <i>u</i> = 3<sup><i>x</i></sup> (<i>u</i> &gt; 0): <i>u</i><sup>2</sup> − 6<i>u</i> − 27 = 0 ⇒ (<i>u</i> − 9)(<i>u</i> + 3) = 0 <b>[M1 A1]</b></div><div class="worked__math">Reject <i>u</i> = −3 since 3<sup><i>x</i></sup> &gt; 0 for all <i>x</i> ∈ ℝ. <b>[R1]</b></div><div class="worked__math">3<sup><i>x</i></sup> = 9 = 3<sup>2</sup> ⇒ <b><i>x</i> = 2</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>u</i> = 3<sup><i>x</i></sup> (<i>u</i> &gt; 0) とおくと：<i>u</i><sup>2</sup> − 6<i>u</i> − 27 = 0 ⇒ (<i>u</i> − 9)(<i>u</i> + 3) = 0 <b>[M1 A1]</b></div><div class=\"worked__math\">すべての <i>x</i> ∈ ℝ に対して 3<sup><i>x</i></sup> &gt; 0 なので、<i>u</i> = −3 は不適。 <b>[R1]</b></div><div class=\"worked__math\">3<sup><i>x</i></sup> = 9 = 3<sup>2</sup> ⇒ <b><i>x</i> = 2</b> <b>[A1]</b></div>",
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
        // EN: Always start from the general term formula <span class="chem">T_{r+1} = ^nC_r a^{n-r} b^r</span>.
        "常に一般項の公式 <span class=\"chem\">T_{r+1} = ^nC_r a^{n-r} b^r</span> から始めます。",
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
        // EN: Decode: the four logarithms share the argument 64, and every base is a power of 2. Rewrite each one in base 2 with change of base, then add.
        "解読：4 つの対数は真数がすべて 64 で、底はどれも 2 の累乗です。底の変換公式でそれぞれを底 2 に書き直してから足し合わせます。",
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
        // EN: Decode: “the coefficients form an arithmetic sequence” gives one equation: the middle coefficient is the mean of the other two. Write each coefficient in terms of <span class="chem">n</span> and solve for the integer <span class="chem">n &gt;= 3</span>.
        "解読：「係数が等差数列をなす」から方程式が 1 つ得られます。真ん中の係数は他の 2 つの平均です。各係数を <span class=\"chem\">n</span> で表し、整数 <span class=\"chem\">n &gt;= 3</span> を求めます。",
        // EN: Write out the three coefficients: <span class="chem">^nC_1 = n</span>, <span class="chem">^nC_2 = n(n-1)/2</span>, and <span class="chem">^nC_3 = n(n-1)(n-2)/6</span>.
        "3 つの係数を書き出します：<span class=\"chem\">^nC_1 = n</span>、<span class=\"chem\">^nC_2 = n(n-1)/2</span>、<span class=\"chem\">^nC_3 = n(n-1)(n-2)/6</span>。",
        // EN: Use the arithmetic condition <span class="chem">2(^nC_2) = ^nC_1 + ^nC_3</span> and divide through by <span class="chem">n &gt; 0</span>.
        "等差数列の条件 <span class=\"chem\">2(^nC_2) = ^nC_1 + ^nC_3</span> を使い、両辺を <span class=\"chem\">n &gt; 0</span> で割ります。",
      ],
      // EN: <div class="worked__math">2 × <span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = <i>n</i> + <span class="frac"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6</span></span> <b>[M1 A1]</b></div><div class="worked__math">Divide by <i>n</i> &gt; 0 and multiply by 6: 6(<i>n</i> − 1) = 6 + (<i>n</i><sup>2</sup> − 3<i>n</i> + 2) <b>[M1 A1]</b></div><div class="worked__math"><i>n</i><sup>2</sup> − 9<i>n</i> + 14 = 0 ⇒ (<i>n</i> − 2)(<i>n</i> − 7) = 0. Since <i>n</i> ≥ 3, <b><i>n</i> = 7</b>. <b>[M1 A1]</b></div>
      solution: "<div class=\"worked__math\">2 × <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = <i>n</i> + <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6</span></span> <b>[M1 A1]</b></div><div class=\"worked__math\"><i>n</i> &gt; 0 で割り、6 を掛ける：6(<i>n</i> − 1) = 6 + (<i>n</i><sup>2</sup> − 3<i>n</i> + 2) <b>[M1 A1]</b></div><div class=\"worked__math\"><i>n</i><sup>2</sup> − 9<i>n</i> + 14 = 0 ⇒ (<i>n</i> − 2)(<i>n</i> − 7) = 0。<i>n</i> ≥ 3 より <b><i>n</i> = 7</b>。 <b>[M1 A1]</b></div>",
    },

    // ── t1-2-q017 · short · challenge · SL · SL 1.7 · 7 marks
    "t1-2-q017": {
      // EN: <p>Consider the equation <span class="chem">e^{2x} - 2k e^x + (k + 2) = 0</span>, where <span class="chem">k</span> ∈ ℝ.<br>(a) Find the set of values of <span class="chem">k</span> for which the quadratic in <span class="chem">u = e^x</span> has two distinct real roots. <strong>[3]</strong><br>(b) Hence find the exact set of values of <span class="chem">k</span> for which the original equation has <strong>two distinct real solutions for <span class="chem">x</span></strong>. <strong>[4]</strong></p>
      stem: "<p>方程式 <span class=\"chem\">e^{2x} - 2k e^x + (k + 2) = 0</span>（<span class=\"chem\">k</span> ∈ ℝ）を考える。<br>(a) <span class=\"chem\">u = e^x</span> に関する二次方程式が異なる 2 つの実数解をもつような <span class=\"chem\">k</span> の値の範囲を求めなさい (Find)。 <strong>[3]</strong><br>(b) これを用いて (Hence)、元の方程式が<strong><span class=\"chem\">x</span> について異なる 2 つの実数解</strong>をもつような <span class=\"chem\">k</span> の厳密な範囲を求めなさい (Find)。 <strong>[4]</strong></p>",
      hints: [
        // EN: Decode: this is a quadratic in <span class="chem">u = e^x</span> in disguise. Part (a) is about the quadratic alone; part (b) asks for real values of <span class="chem">x</span>, and only positive roots <span class="chem">u</span> give one.
        "解読：これは <span class=\"chem\">u = e^x</span> についての二次方程式が姿を変えたものです。(a) は二次方程式だけの問題で、(b) は実数 <span class=\"chem\">x</span> を問うており、実数解を与えるのは正の解 <span class=\"chem\">u</span> だけです。",
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

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ja', 't1-2.q', {
  questions: {

    // ── t1-2-q019 · numeric · foundation · SL · SL 1.5 · 2 marks
    "t1-2-q019": {
      // EN: <p>Solve <span class="chem">10^x = 0.0042</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">10^x = 0.0042</span> を解きなさい。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Rewrite the equation in logarithmic form: <span class="chem">x = log_{10}(0.0042)</span>, written <span class="chem">log 0.0042</span> in IB notation.
        "方程式を対数の形に書き直します：<span class=\"chem\">x = log_{10}(0.0042)</span>。IB の表記では <span class=\"chem\">log 0.0042</span> と書きます。",
        // EN: Evaluate it with the <span class="mono">log</span> key of your GDC. A number between 0 and 1 has a negative logarithm.
        "GDC の <span class=\"mono\">log</span> キーで計算します。0 と 1 の間の数の対数は負になります。",
      ],
      // EN: <div class="worked__math"><i>x</i> = log 0.0042 <b>[M1]</b></div><div class="worked__math"><i>x</i> = −2.37675… ≈ <b>−2.38</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>x</i> = log 0.0042   <b>[M1]</b></div><div class=\"worked__math\"><i>x</i> = −2.37675… ≈ <b>−2.38</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q020 · numeric · foundation · SL · SL 1.5 · 2 marks
    "t1-2-q020": {
      // EN: <p>The pH of a solution is defined by <span class="chem">pH = -log[H^+]</span>, where <span class="chem">[H^+]</span> is the hydrogen ion concentration in <span class="unit">mol dm-3</span> and log is to base 10. A sample of sea water has a pH of 8.3. Find <span class="chem">[H^+]</span> for this sample, giving your answer in standard form correct to 3 significant figures.</p>
      stem: "<p>溶液の pH は <span class=\"chem\">pH = -log[H^+]</span> で定義される。ここで <span class=\"chem\">[H^+]</span> は <span class=\"unit\">mol dm-3</span> を単位とする水素イオン濃度であり、log の底は 10 である。ある海水の試料の pH は 8.3 である。この試料の <span class=\"chem\">[H^+]</span> を求め (Find)、指数表記を用いて有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Substitute: <span class="chem">8.3 = -log[H^+]</span>, so <span class="chem">log[H^+] = -8.3</span>.
        "代入します：<span class=\"chem\">8.3 = -log[H^+]</span> なので <span class=\"chem\">log[H^+] = -8.3</span> です。",
        // EN: Convert to exponential form, <span class="chem">[H^+] = 10^{-8.3}</span>, and evaluate it on your GDC.
        "指数の形 <span class=\"chem\">[H^+] = 10^{-8.3}</span> に直し、GDC で計算します。",
      ],
      // EN: <div class="worked__math">log[H<sup>+</sup>] = −8.3 ⇒ [H<sup>+</sup>] = 10<sup>−8.3</sup> <b>[M1]</b></div><div class="worked__math">[H<sup>+</sup>] = <b>5.01 × 10<sup>−9</sup></b> mol dm<sup>−3</sup> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">log[H<sup>+</sup>] = −8.3  ⇒  [H<sup>+</sup>] = 10<sup>−8.3</sup>   <b>[M1]</b></div><div class=\"worked__math\">[H<sup>+</sup>] = <b>5.01 × 10<sup>−9</sup></b> mol dm<sup>−3</sup>   <b>[A1]</b></div>",
    },

    // ── t1-2-q021 · numeric · exam · SL · SL 1.7 · 4 marks
    "t1-2-q021": {
      // EN: <p>Solve the equation <span class="chem">5^{2x-1} = 3^{x+2}</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>方程式 <span class=\"chem\">5^{2x-1} = 3^{x+2}</span> を解きなさい。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: The bases 5 and 3 cannot be made equal, so take <span class="chem">ln</span> (or log) of both sides.
        "底の 5 と 3 はそろえられないので、両辺の <span class=\"chem\">ln</span>（または log）をとります。",
        // EN: The power law gives <span class="chem">(2x - 1) ln 5 = (x + 2) ln 3</span>. Expand both sides and collect the <span class="chem">x</span> terms.
        "累乗の法則から <span class=\"chem\">(2x - 1) ln 5 = (x + 2) ln 3</span> が得られます。両辺を展開し、<span class=\"chem\">x</span> を含む項をまとめます。",
        // EN: You should get <span class="chem">x(2 ln 5 - ln 3) = 2 ln 3 + ln 5</span>.
        "<span class=\"chem\">x(2 ln 5 - ln 3) = 2 ln 3 + ln 5</span> が得られるはずです。",
      ],
      // EN: <div class="worked__math">(2<i>x</i> − 1) ln 5 = (<i>x</i> + 2) ln 3 <b>[M1 A1]</b></div><div class="worked__math"><i>x</i>(2 ln 5 − ln 3) = 2 ln 3 + ln 5 ⇒ <i>x</i> = <span class="frac"><span>2 ln 3 + ln 5</span><span>2 ln 5 − ln 3</span></span> <b>[M1]</b></div><div class="worked__math"><i>x</i> = 1.79537… ≈ <b>1.80</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">(2<i>x</i> − 1) ln 5 = (<i>x</i> + 2) ln 3   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>x</i>(2 ln 5 − ln 3) = 2 ln 3 + ln 5  ⇒  <i>x</i> = <span class=\"frac\"><span>2 ln 3 + ln 5</span><span>2 ln 5 − ln 3</span></span>   <b>[M1]</b></div><div class=\"worked__math\"><i>x</i> = 1.79537… ≈ <b>1.80</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q022 · numeric · exam · SL · SL 1.7 · 4 marks
    "t1-2-q022": {
      // EN: <p>The number of bacteria in a culture is modelled by <span class="chem">N = 250e^{0.42t}</span>, where <span class="chem">t</span> is the time in hours after the culture was prepared. Find the time it takes for the number of bacteria to increase from 1000 to 4000. Give your answer in hours, correct to 3 significant figures.</p>
      stem: "<p>ある培養液中の細菌の数は <span class=\"chem\">N = 250e^{0.42t}</span> でモデル化される。ここで <span class=\"chem\">t</span> は培養液を準備してからの時間（時間単位）である。細菌の数が 1000 から 4000 に増えるまでにかかる時間を求めなさい (Find)。時間単位で、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: the question asks for a length of time, not a moment. Find the time when <span class="chem">N = 1000</span> and the time when <span class="chem">N = 4000</span>, then subtract.
        "解読：問われているのはある時刻ではなく、時間の長さです。<span class=\"chem\">N = 1000</span> となる時刻と <span class=\"chem\">N = 4000</span> となる時刻をそれぞれ求めて、差をとります。",
        // EN: Solve <span class="chem">250e^{0.42t} = 1000</span>: divide by 250 and take <span class="chem">ln</span> of both sides.
        "<span class=\"chem\">250e^{0.42t} = 1000</span> を解きます：両辺を 250 で割り、両辺の <span class=\"chem\">ln</span> をとります。",
        // EN: Do the same for <span class="chem">N = 4000</span>. (Shortcut: the number has to multiply by 4, so the time is <span class="chem">ln 4 / 0.42</span>.)
        "<span class=\"chem\">N = 4000</span> についても同様にします。（近道：数が 4 倍になればよいので、時間は <span class=\"chem\">ln 4 / 0.42</span> です。）",
      ],
      // EN: <p><strong>Decode:</strong> “the time it takes to increase from 1000 to 4000” is the difference between two times.</p><div class="worked__math">250e<sup>0.42<i>t</i><sub>1</sub></sup> = 1000 ⇒ <i>t</i><sub>1</sub> = <span class="frac"><span>ln 4</span><span>0.42</span></span> = 3.3007… <b>[M1 A1]</b></div><div class="worked__math">250e<sup>0.42<i>t</i><sub>2</sub></sup> = 4000 ⇒ <i>t</i><sub>2</sub> = <span class="frac"><span>ln 16</span><span>0.42</span></span> = 6.6014… <b>[A1]</b></div><div class="worked__math"><i>t</i><sub>2</sub> − <i>t</i><sub>1</sub> = 3.3007… ≈ <b>3.30 hours</b> <b>[A1]</b></div>
      solution: "<p><strong>解読：</strong>「1000 から 4000 に増えるまでにかかる時間」は二つの時刻の差です。</p><div class=\"worked__math\">250e<sup>0.42<i>t</i><sub>1</sub></sup> = 1000  ⇒  <i>t</i><sub>1</sub> = <span class=\"frac\"><span>ln 4</span><span>0.42</span></span> = 3.3007…   <b>[M1 A1]</b></div><div class=\"worked__math\">250e<sup>0.42<i>t</i><sub>2</sub></sup> = 4000  ⇒  <i>t</i><sub>2</sub> = <span class=\"frac\"><span>ln 16</span><span>0.42</span></span> = 6.6014…   <b>[A1]</b></div><div class=\"worked__math\"><i>t</i><sub>2</sub> − <i>t</i><sub>1</sub> = 3.3007… ≈ <b>3.30 時間</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q023 · numeric · exam · SL · SL 1.7 · 5 marks
    "t1-2-q023": {
      // EN: <p>Solve the equation <span class="chem">3e^{2x} - 4e^x - 2 = 0</span> for <span class="chem">x</span> ∈ ℝ. Give your answer correct to 3 significant figures.</p>
      stem: "<p>方程式 <span class=\"chem\">3e^{2x} - 4e^x - 2 = 0</span> を <span class=\"chem\">x</span> ∈ ℝ について解きなさい。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Let <span class="chem">u = e^x</span>, so <span class="chem">e^{2x} = u^2</span>. This gives the quadratic <span class="chem">3u^2 - 4u - 2 = 0</span>.
        "<span class=\"chem\">u = e^x</span> とおくと <span class=\"chem\">e^{2x} = u^2</span> です。これで二次方程式 <span class=\"chem\">3u^2 - 4u - 2 = 0</span> が得られます。",
        // EN: The quadratic does not factorise: use the quadratic formula or the polynomial solver on your GDC.
        "この二次方程式は因数分解できません：解の公式か GDC の多項式ソルバーを使います。",
        // EN: One value of <span class="chem">u</span> is negative. Since <span class="chem">e^x &gt; 0</span>, reject it, then use <span class="chem">x = ln u</span>.
        "<span class=\"chem\">u</span> の値の一方は負です。<span class=\"chem\">e^x &gt; 0</span> なのでこれを除外し、<span class=\"chem\">x = ln u</span> を使います。",
      ],
      // EN: <div class="worked__math">Let <i>u</i> = e<sup><i>x</i></sup>: 3<i>u</i><sup>2</sup> − 4<i>u</i> − 2 = 0 <b>[M1]</b></div><div class="worked__math"><i>u</i> = <span class="frac"><span>2 ± √10</span><span>3</span></span>, so <i>u</i> = 1.72076… or <i>u</i> = −0.38743… <b>[A1]</b></div><div class="worked__math">Reject <i>u</i> = −0.387… because e<sup><i>x</i></sup> &gt; 0 for all real <i>x</i>. <b>[R1]</b></div><div class="worked__math"><i>x</i> = ln 1.72076… <b>[M1]</b> = 0.54277… ≈ <b>0.543</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>u</i> = e<sup><i>x</i></sup> とおくと：  3<i>u</i><sup>2</sup> − 4<i>u</i> − 2 = 0   <b>[M1]</b></div><div class=\"worked__math\"><i>u</i> = <span class=\"frac\"><span>2 ± √10</span><span>3</span></span> より <i>u</i> = 1.72076… または <i>u</i> = −0.38743…   <b>[A1]</b></div><div class=\"worked__math\">すべての実数 <i>x</i> で e<sup><i>x</i></sup> &gt; 0 なので、<i>u</i> = −0.387… は除外する。   <b>[R1]</b></div><div class=\"worked__math\"><i>x</i> = ln 1.72076…   <b>[M1]</b>   = 0.54277… ≈ <b>0.543</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q024 · numeric · exam · SL · SL 1.7, 2.10 · 4 marks
    "t1-2-q024": {
      // EN: <p>The equation <span class="chem">2^x = x + 5</span> has exactly two real solutions. Verify that <span class="chem">x = 3</span> is one of them, and find the other solution correct to 3 significant figures.</p>
      stem: "<p>方程式 <span class=\"chem\">2^x = x + 5</span> はちょうど二つの実数解をもつ。<span class=\"chem\">x = 3</span> がその一つであることを確かめ (Verify)、もう一つの解を有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: Verify by substitution: compare <span class="chem">2^3</span> with <span class="chem">3 + 5</span>.
        "代入して確かめます：<span class=\"chem\">2^3</span> と <span class=\"chem\">3 + 5</span> を比べます。",
        // EN: The equation mixes an exponential with a linear term, so logarithms alone cannot isolate <span class="chem">x</span>. Graph <span class="chem">y = 2^x</span> and <span class="chem">y = x + 5</span> on your GDC.
        "この方程式は指数の項と一次の項が混ざっているので、対数だけでは <span class=\"chem\">x</span> を取り出せません。GDC で <span class=\"chem\">y = 2^x</span> と <span class=\"chem\">y = x + 5</span> のグラフをかきます。",
        // EN: The second intersection is far to the left, where <span class="chem">2^x</span> is close to 0, so <span class="chem">x + 5</span> must also be close to 0. Widen your window to see it.
        "二つ目の交点はずっと左にあり、そこでは <span class=\"chem\">2^x</span> が 0 に近いので、<span class=\"chem\">x + 5</span> も 0 に近くなければなりません。表示範囲を広げると見えます。",
      ],
      // EN: <div class="worked__math">2<sup>3</sup> = 8 and 3 + 5 = 8, so <i>x</i> = 3 is a solution. <b>[M1 A1]</b></div><div class="worked__math">Graph <i>y</i> = 2<sup><i>x</i></sup> and <i>y</i> = <i>x</i> + 5 (or find the zeros of <i>y</i> = 2<sup><i>x</i></sup> − <i>x</i> − 5) on the GDC. <b>[M1]</b></div><div class="worked__math">The other intersection is at <i>x</i> = −4.96805… ≈ <b>−4.97</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">2<sup>3</sup> = 8、3 + 5 = 8 なので、<i>x</i> = 3 は解である。   <b>[M1 A1]</b></div><div class=\"worked__math\">GDC で <i>y</i> = 2<sup><i>x</i></sup> と <i>y</i> = <i>x</i> + 5 のグラフをかく（または <i>y</i> = 2<sup><i>x</i></sup> − <i>x</i> − 5 の零点を求める）。   <b>[M1]</b></div><div class=\"worked__math\">もう一つの交点は <i>x</i> = −4.96805… ≈ <b>−4.97</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q025 · numeric · exam · SL · SL 1.9 · 4 marks
    "t1-2-q025": {
      // EN: <p>Find the coefficient of <span class="chem">x^5</span> in the expansion of <span class="chem">(1 - 0.15x)^{20}</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">(1 - 0.15x)^{20}</span> の展開式における <span class=\"chem\">x^5</span> の係数を求めなさい (Find)。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: The general term is <span class="chem">^{20}C_r (1)^{20-r} (-0.15x)^r</span>.
        "一般項は <span class=\"chem\">^{20}C_r (1)^{20-r} (-0.15x)^r</span> です。",
        // EN: For <span class="chem">x^5</span> take <span class="chem">r = 5</span>. Use the <span class="mono">nCr</span> function of your GDC for <span class="chem">^{20}C_5</span>.
        "<span class=\"chem\">x^5</span> には <span class=\"chem\">r = 5</span> をとります。<span class=\"chem\">^{20}C_5</span> は GDC の <span class=\"mono\">nCr</span> 機能で求めます。",
        // EN: Keep the sign: <span class="chem">(-0.15)^5</span> is negative.
        "符号に注意します：<span class=\"chem\">(-0.15)^5</span> は負です。",
      ],
      // EN: <div class="worked__math">General term <sup>20</sup>C<sub><i>r</i></sub> (−0.15<i>x</i>)<sup><i>r</i></sup>; for <i>x</i><sup>5</sup>, <i>r</i> = 5. <b>[M1 A1]</b></div><div class="worked__math"><sup>20</sup>C<sub>5</sub> = 15504 <b>[A1]</b></div><div class="worked__math">15504 × (−0.15)<sup>5</sup> = −1.177335 ≈ <b>−1.18</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">一般項 <sup>20</sup>C<sub><i>r</i></sub> (−0.15<i>x</i>)<sup><i>r</i></sup>。<i>x</i><sup>5</sup> では <i>r</i> = 5。   <b>[M1 A1]</b></div><div class=\"worked__math\"><sup>20</sup>C<sub>5</sub> = 15504   <b>[A1]</b></div><div class=\"worked__math\">15504 × (−0.15)<sup>5</sup> = −1.177335 ≈ <b>−1.18</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q026 · numeric · exam · SL · SL 1.9 · 5 marks
    "t1-2-q026": {
      // EN: <p>Find the exact value of the term independent of <span class="chem">x</span> in the expansion of <span class="chem">(x^2 - 3/(2x))^9</span>.</p>
      stem: "<p><span class=\"chem\">(x^2 - 3/(2x))^9</span> の展開式における <span class=\"chem\">x</span> を含まない項の厳密値を求めなさい (Find)。</p>",
      hints: [
        // EN: Write the general term <span class="chem">^9C_r (x^2)^{9-r} (-3/(2x))^r</span> and collect the powers of <span class="chem">x</span>.
        "一般項 <span class=\"chem\">^9C_r (x^2)^{9-r} (-3/(2x))^r</span> を書き、<span class=\"chem\">x</span> の累乗をまとめます。",
        // EN: The power of <span class="chem">x</span> is <span class="chem">18 - 2r - r = 18 - 3r</span>. The term independent of <span class="chem">x</span> has power 0.
        "<span class=\"chem\">x</span> の指数は <span class=\"chem\">18 - 2r - r = 18 - 3r</span> です。<span class=\"chem\">x</span> を含まない項では指数が 0 です。",
        // EN: With <span class="chem">r = 6</span>, evaluate <span class="chem">^9C_6 × (-3/2)^6</span>. An even power makes the sign positive.
        "<span class=\"chem\">r = 6</span> として <span class=\"chem\">^9C_6 × (-3/2)^6</span> を計算します。偶数乗なので符号は正になります。",
      ],
      // EN: <div class="worked__math"><i>T</i><sub><i>r</i>+1</sub> = <sup>9</sup>C<sub><i>r</i></sub> (<i>x</i><sup>2</sup>)<sup>9−<i>r</i></sup> (−<span class="frac"><span>3</span><span>2</span></span>)<sup><i>r</i></sup> <i>x</i><sup>−<i>r</i></sup> = <sup>9</sup>C<sub><i>r</i></sub> (−<span class="frac"><span>3</span><span>2</span></span>)<sup><i>r</i></sup> <i>x</i><sup>18−3<i>r</i></sup> <b>[M1 A1]</b></div><div class="worked__math">18 − 3<i>r</i> = 0 ⇒ <i>r</i> = 6 <b>[A1]</b></div><div class="worked__math"><sup>9</sup>C<sub>6</sub> × (<span class="frac"><span>3</span><span>2</span></span>)<sup>6</sup> = 84 × <span class="frac"><span>729</span><span>64</span></span> <b>[M1]</b> = <b><span class="frac"><span>15309</span><span>16</span></span> = 956.8125</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>T</i><sub><i>r</i>+1</sub> = <sup>9</sup>C<sub><i>r</i></sub> (<i>x</i><sup>2</sup>)<sup>9−<i>r</i></sup> (−<span class=\"frac\"><span>3</span><span>2</span></span>)<sup><i>r</i></sup> <i>x</i><sup>−<i>r</i></sup> = <sup>9</sup>C<sub><i>r</i></sub> (−<span class=\"frac\"><span>3</span><span>2</span></span>)<sup><i>r</i></sup> <i>x</i><sup>18−3<i>r</i></sup>   <b>[M1 A1]</b></div><div class=\"worked__math\">18 − 3<i>r</i> = 0  ⇒  <i>r</i> = 6   <b>[A1]</b></div><div class=\"worked__math\"><sup>9</sup>C<sub>6</sub> × (<span class=\"frac\"><span>3</span><span>2</span></span>)<sup>6</sup> = 84 × <span class=\"frac\"><span>729</span><span>64</span></span>   <b>[M1]</b>   = <b><span class=\"frac\"><span>15309</span><span>16</span></span> = 956.8125</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q027 · numeric · exam · SL · SL 1.9 · 5 marks
    "t1-2-q027": {
      // EN: <p>Consider the expansion of <span class="chem">(1 + x/4)^n</span>, where <span class="chem">n &gt;= 3</span> is an integer. Find the smallest value of <span class="chem">n</span> for which the coefficient of <span class="chem">x^3</span> is greater than 100.</p>
      stem: "<p><span class=\"chem\">(1 + x/4)^n</span> の展開式を考える。ただし <span class=\"chem\">n &gt;= 3</span> は整数である。<span class=\"chem\">x^3</span> の係数が 100 より大きくなるような <span class=\"chem\">n</span> の最小値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: write the coefficient of <span class="chem">x^3</span> as a function of <span class="chem">n</span>, then search for the first integer <span class="chem">n</span> that makes it exceed 100.
        "解読：<span class=\"chem\">x^3</span> の係数を <span class=\"chem\">n</span> の関数として書き、それが 100 を超える最初の整数 <span class=\"chem\">n</span> を探します。",
        // EN: The term in <span class="chem">x^3</span> is <span class="chem">^nC_3 (x/4)^3</span>, so the coefficient is <span class="chem">^nC_3 / 64</span>.
        "<span class=\"chem\">x^3</span> の項は <span class=\"chem\">^nC_3 (x/4)^3</span> なので、係数は <span class=\"chem\">^nC_3 / 64</span> です。",
        // EN: You need <span class="chem">^nC_3 &gt; 6400</span>. Use a table of <span class="mono">nCr(n, 3)</span> on your GDC and check the values either side of the crossing.
        "<span class=\"chem\">^nC_3 &gt; 6400</span> が必要です。GDC で <span class=\"mono\">nCr(n, 3)</span> の表を作り、境目の前後の値を確認します。",
      ],
      // EN: <p><strong>Decode:</strong> this is a search over integers, not an equation with one exact root.</p><div class="worked__math">Coefficient of <i>x</i><sup>3</sup> = <sup><i>n</i></sup>C<sub>3</sub> × (<span class="frac"><span>1</span><span>4</span></span>)<sup>3</sup> = <span class="frac"><span><sup><i>n</i></sup>C<sub>3</sub></span><span>64</span></span> <b>[M1 A1]</b></div><div class="worked__math"><span class="frac"><span><sup><i>n</i></sup>C<sub>3</sub></span><span>64</span></span> &gt; 100 ⇒ <sup><i>n</i></sup>C<sub>3</sub> &gt; 6400 <b>[M1]</b></div><div class="worked__math">GDC table: <sup>34</sup>C<sub>3</sub> = 5984 (too small), <sup>35</sup>C<sub>3</sub> = 6545 <b>[A1]</b></div><div class="worked__math">Smallest <b><i>n</i> = 35</b> <b>[A1]</b></div>
      solution: "<p><strong>解読：</strong>これは厳密な解が一つの方程式ではなく、整数の中から探す問題です。</p><div class=\"worked__math\"><i>x</i><sup>3</sup> の係数 = <sup><i>n</i></sup>C<sub>3</sub> × (<span class=\"frac\"><span>1</span><span>4</span></span>)<sup>3</sup> = <span class=\"frac\"><span><sup><i>n</i></sup>C<sub>3</sub></span><span>64</span></span>   <b>[M1 A1]</b></div><div class=\"worked__math\"><span class=\"frac\"><span><sup><i>n</i></sup>C<sub>3</sub></span><span>64</span></span> &gt; 100  ⇒  <sup><i>n</i></sup>C<sub>3</sub> &gt; 6400   <b>[M1]</b></div><div class=\"worked__math\">GDC の表：<sup>34</sup>C<sub>3</sub> = 5984（小さすぎる）、<sup>35</sup>C<sub>3</sub> = 6545   <b>[A1]</b></div><div class=\"worked__math\">最小値 <b><i>n</i> = 35</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q028 · numeric · exam · SL · SL 1.5, 1.7 · 4 marks
    "t1-2-q028": {
      // EN: <p>The loudness <span class="chem">L</span> of a sound, in decibels, is given by <span class="chem">L = 10 log(I/I_0)</span>, where <span class="chem">I</span> is the intensity of the sound, <span class="chem">I_0</span> is a fixed reference intensity, and log is to base 10. Traffic on a busy street measures 78 decibels and a rock concert measures 95 decibels. Find how many times more intense the sound of the concert is than the sound of the traffic. Give your answer correct to 3 significant figures.</p>
      stem: "<p>音の大きさ <span class=\"chem\">L</span>（デシベル）は <span class=\"chem\">L = 10 log(I/I_0)</span> で与えられる。ここで <span class=\"chem\">I</span> は音の強さ、<span class=\"chem\">I_0</span> は一定の基準の強さであり、log の底は 10 である。にぎやかな通りの交通の音は 78 デシベル、ロックコンサートの音は 95 デシベルと測定された。コンサートの音の強さは交通の音の強さの何倍か求めなさい (Find)。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: “how many times more intense” asks for the ratio <span class="chem">I_{concert} / I_{traffic}</span>. You do not need to know <span class="chem">I_0</span>.
        "解読：「何倍の強さか」は比 <span class=\"chem\">I_{concert} / I_{traffic}</span> を問うています。<span class=\"chem\">I_0</span> を知る必要はありません。",
        // EN: Write <span class="chem">95 = 10 log(I_c / I_0)</span> and <span class="chem">78 = 10 log(I_t / I_0)</span>, then subtract. The quotient law turns the difference of logs into <span class="chem">log(I_c / I_t)</span>.
        "<span class=\"chem\">95 = 10 log(I_c / I_0)</span> と <span class=\"chem\">78 = 10 log(I_t / I_0)</span> を書いて引き算します。商の法則により、対数の差は <span class=\"chem\">log(I_c / I_t)</span> になります。",
        // EN: You should get <span class="chem">log(I_c / I_t) = 1.7</span>.
        "<span class=\"chem\">log(I_c / I_t) = 1.7</span> が得られるはずです。",
      ],
      // EN: <p><strong>Decode:</strong> the answer is a ratio of intensities, so subtract the two decibel equations and the unknown <i>I</i><sub>0</sub> cancels.</p><div class="worked__math">95 − 78 = 10 log(<i>I</i><sub>c</sub>/<i>I</i><sub>0</sub>) − 10 log(<i>I</i><sub>t</sub>/<i>I</i><sub>0</sub>) = 10 log(<i>I</i><sub>c</sub>/<i>I</i><sub>t</sub>) <b>[M1 M1]</b></div><div class="worked__math">log(<i>I</i><sub>c</sub>/<i>I</i><sub>t</sub>) = 1.7 <b>[A1]</b></div><div class="worked__math"><i>I</i><sub>c</sub>/<i>I</i><sub>t</sub> = 10<sup>1.7</sup> = 50.118… ≈ <b>50.1</b> <b>[A1]</b></div>
      solution: "<p><strong>解読：</strong>答えは強さの比なので、二つのデシベルの式を引き算すると、未知の <i>I</i><sub>0</sub> が消えます。</p><div class=\"worked__math\">95 − 78 = 10 log(<i>I</i><sub>c</sub>/<i>I</i><sub>0</sub>) − 10 log(<i>I</i><sub>t</sub>/<i>I</i><sub>0</sub>) = 10 log(<i>I</i><sub>c</sub>/<i>I</i><sub>t</sub>)   <b>[M1 M1]</b></div><div class=\"worked__math\">log(<i>I</i><sub>c</sub>/<i>I</i><sub>t</sub>) = 1.7   <b>[A1]</b></div><div class=\"worked__math\"><i>I</i><sub>c</sub>/<i>I</i><sub>t</sub> = 10<sup>1.7</sup> = 50.118… ≈ <b>50.1</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q029 · numeric · exam · SL · SL 1.7 · 5 marks
    "t1-2-q029": {
      // EN: <p>After an injection, the amount of a drug in a patient’s bloodstream is modelled by <span class="chem">A = A_0 e^{-kt}</span>, where <span class="chem">t</span> is the time in hours and <span class="chem">A_0</span> is the initial dose. The amount of drug halves every 5.5 hours. Find the time it takes for the amount to fall to 15% of the initial dose. Give your answer in hours, correct to 3 significant figures.</p>
      stem: "<p>注射の後、患者の血液中の薬の量は <span class=\"chem\">A = A_0 e^{-kt}</span> でモデル化される。ここで <span class=\"chem\">t</span> は時間（時間単位）、<span class=\"chem\">A_0</span> は最初の投与量である。薬の量は 5.5 時間ごとに半分になる。薬の量が最初の投与量の 15% まで減るのにかかる時間を求めなさい (Find)。時間単位で、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: “halves every 5.5 hours” gives you <span class="chem">k</span>; “15% of the initial dose” means <span class="chem">A = 0.15A_0</span>. The value of <span class="chem">A_0</span> cancels.
        "解読：「5.5 時間ごとに半分になる」から <span class=\"chem\">k</span> が決まり、「最初の投与量の 15%」は <span class=\"chem\">A = 0.15A_0</span> を意味します。<span class=\"chem\">A_0</span> の値は消えます。",
        // EN: From <span class="chem">0.5 = e^{-5.5k}</span>, <span class="chem">k = ln 2 / 5.5</span>.
        "<span class=\"chem\">0.5 = e^{-5.5k}</span> から <span class=\"chem\">k = ln 2 / 5.5</span> です。",
        // EN: Now solve <span class="chem">0.15 = e^{-kt}</span> for <span class="chem">t</span>.
        "次に <span class=\"chem\">0.15 = e^{-kt}</span> を <span class=\"chem\">t</span> について解きます。",
      ],
      // EN: <p><strong>Decode:</strong> the half-life fixes <i>k</i>; then solve for the time at which <i>A</i> = 0.15<i>A</i><sub>0</sub>.</p><div class="worked__math">0.5<i>A</i><sub>0</sub> = <i>A</i><sub>0</sub>e<sup>−5.5<i>k</i></sup> <b>[M1]</b> ⇒ <i>k</i> = <span class="frac"><span>ln 2</span><span>5.5</span></span> = 0.126026… <b>[A1]</b></div><div class="worked__math">0.15 = e<sup>−<i>kt</i></sup> <b>[M1]</b> ⇒ <i>t</i> = <span class="frac"><span>ln(1/0.15)</span><span><i>k</i></span></span> <b>[A1]</b></div><div class="worked__math"><i>t</i> = 15.0533… ≈ <b>15.1 hours</b> <b>[A1]</b></div>
      solution: "<p><strong>解読：</strong>半減期から <i>k</i> が決まり、次に <i>A</i> = 0.15<i>A</i><sub>0</sub> となる時刻を求めます。</p><div class=\"worked__math\">0.5<i>A</i><sub>0</sub> = <i>A</i><sub>0</sub>e<sup>−5.5<i>k</i></sup>   <b>[M1]</b>  ⇒  <i>k</i> = <span class=\"frac\"><span>ln 2</span><span>5.5</span></span> = 0.126026…   <b>[A1]</b></div><div class=\"worked__math\">0.15 = e<sup>−<i>kt</i></sup>   <b>[M1]</b>  ⇒  <i>t</i> = <span class=\"frac\"><span>ln(1/0.15)</span><span><i>k</i></span></span>   <b>[A1]</b></div><div class=\"worked__math\"><i>t</i> = 15.0533… ≈ <b>15.1 時間</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q030 · short · exam · SL · SL 1.7 · 7 marks
    "t1-2-q030": {
      // EN: <p>A cup of tea is left to cool in a room. Its temperature, <span class="chem">T</span> °C, <span class="chem">t</span> minutes after it was poured, is modelled by <span class="chem">T = 22 + 68e^{-kt}</span>, where <span class="chem">k &gt; 0</span>.<br>(a) Write down the temperature of the tea when it was poured. <strong>[1]</strong><br>(b) After 4 minutes the temperature is 61 °C. Find the value of <span class="chem">k</span>. <strong>[3]</strong><br>(c) Find the time it takes for the tea to cool to 30 °C. <strong>[2]</strong><br>(d) Explain why, according to this model, the tea never cools to 22 °C. <strong>[1]</strong></p>
      stem: "<p>一杯の紅茶を部屋に置いて冷ます。紅茶を注いでから <span class=\"chem\">t</span> 分後の温度 <span class=\"chem\">T</span> °C は <span class=\"chem\">T = 22 + 68e^{-kt}</span> でモデル化される。ただし <span class=\"chem\">k &gt; 0</span> である。<br>(a) 注いだときの紅茶の温度を書きなさい (Write down)。 <strong>[1]</strong><br>(b) 4 分後の温度は 61 °C である。<span class=\"chem\">k</span> の値を求めなさい (Find)。 <strong>[3]</strong><br>(c) 紅茶が 30 °C まで冷めるのにかかる時間を求めなさい (Find)。 <strong>[2]</strong><br>(d) このモデルでは紅茶が決して 22 °C まで冷めない理由を説明しなさい (Explain)。 <strong>[1]</strong></p>",
      hints: [
        // EN: For (a), put <span class="chem">t = 0</span>: <span class="chem">e^0 = 1</span>.
        "(a) では <span class=\"chem\">t = 0</span> とおきます：<span class=\"chem\">e^0 = 1</span> です。",
        // EN: For (b), isolate the exponential first: <span class="chem">e^{-4k} = (61 - 22)/68</span>, then take <span class="chem">ln</span> of both sides.
        "(b) では、まず指数の部分を取り出します：<span class=\"chem\">e^{-4k} = (61 - 22)/68</span>。それから両辺の <span class=\"chem\">ln</span> をとります。",
        // EN: For (c), use the unrounded value of <span class="chem">k</span> stored in your GDC to avoid rounding errors.
        "(c) では、丸め誤差を避けるために、GDC に保存した丸める前の <span class=\"chem\">k</span> の値を使います。",
        // EN: For (d), think about the sign of <span class="chem">68e^{-kt}</span>.
        "(d) では、<span class=\"chem\">68e^{-kt}</span> の符号を考えます。",
      ],
      // EN: <p>Isolate the exponential, take natural logarithms, and keep <span class="chem">k</span> unrounded in your GDC for part (c). The horizontal asymptote <span class="chem">T = 22</span> is the room temperature.</p>
      solution: "<p>指数の部分を取り出して自然対数をとり、(c) では GDC 内の <span class=\"chem\">k</span> を丸めずに使います。水平漸近線 <span class=\"chem\">T = 22</span> が室温です。</p>",
      // EN: <div class="worked__math">(a) <i>T</i>(0) = 22 + 68 = <b>90 °C</b>.</div><div class="worked__math">(b) 61 = 22 + 68e<sup>−4<i>k</i></sup> ⇒ e<sup>−4<i>k</i></sup> = <span class="frac"><span>39</span><span>68</span></span> ⇒ <i>k</i> = <span class="frac"><span>1</span><span>4</span></span> ln<span class="frac"><span>68</span><span>39</span></span> = 0.138986… ≈ <b>0.139</b>.</div><div class="worked__math">(c) 30 = 22 + 68e<sup>−<i>kt</i></sup> ⇒ e<sup>−<i>kt</i></sup> = <span class="frac"><span>8</span><span>68</span></span> ⇒ <i>t</i> = <span class="frac"><span>ln(68/8)</span><span><i>k</i></span></span> = 15.397… ≈ <b>15.4 minutes</b>.</div><div class="worked__math">(d) e<sup>−<i>kt</i></sup> &gt; 0 for every <i>t</i>, so <i>T</i> &gt; 22: the temperature approaches the room temperature of 22 °C but never reaches it.</div>
      answer: "<div class=\"worked__math\">(a) <i>T</i>(0) = 22 + 68 = <b>90 °C</b>.</div><div class=\"worked__math\">(b) 61 = 22 + 68e<sup>−4<i>k</i></sup>  ⇒  e<sup>−4<i>k</i></sup> = <span class=\"frac\"><span>39</span><span>68</span></span>  ⇒  <i>k</i> = <span class=\"frac\"><span>1</span><span>4</span></span> ln<span class=\"frac\"><span>68</span><span>39</span></span> = 0.138986… ≈ <b>0.139</b>.</div><div class=\"worked__math\">(c) 30 = 22 + 68e<sup>−<i>kt</i></sup>  ⇒  e<sup>−<i>kt</i></sup> = <span class=\"frac\"><span>8</span><span>68</span></span>  ⇒  <i>t</i> = <span class=\"frac\"><span>ln(68/8)</span><span><i>k</i></span></span> = 15.397… ≈ <b>15.4 分</b>。</div><div class=\"worked__math\">(d) すべての <i>t</i> で e<sup>−<i>kt</i></sup> &gt; 0 なので <i>T</i> &gt; 22。温度は室温の 22 °C に近づくが、決して到達しない。</div>",
      markscheme: [
        // EN: A1: (a) T = 22 + 68 = 90 °C.
        "A1：(a) T = 22 + 68 = 90 °C。",
        // EN: M1: (b) Substitutes t = 4 and T = 61: 61 = 22 + 68e^(−4k).
        "M1：(b) t = 4、T = 61 を代入する：61 = 22 + 68e^(−4k)。",
        // EN: A1: Obtains e^(−4k) = 39/68 (≈ 0.574).
        "A1：e^(−4k) = 39/68（≈ 0.574）を得る。",
        // EN: A1: k = 0.139 (0.138986…).
        "A1：k = 0.139（0.138986…）。",
        // EN: M1: (c) Sets 30 = 22 + 68e^(−kt), so e^(−kt) = 8/68 (or solves graphically on the GDC).
        "M1：(c) 30 = 22 + 68e^(−kt) とおき、e^(−kt) = 8/68 とする（または GDC でグラフを用いて解く）。",
        // EN: A1: t = 15.4 minutes (15.397…).
        "A1：t = 15.4 分（15.397…）。",
        // EN: R1: (d) e^(−kt) > 0 for all t, so T > 22: the temperature approaches 22 °C but never reaches it.
        "R1：(d) すべての t で e^(−kt) > 0 なので T > 22。温度は 22 °C に近づくが、決して到達しない。",
      ],
    },

    // ── t1-2-q031 · short · exam · SL · SL 1.9 · 6 marks
    "t1-2-q031": {
      // EN: <p>(a) Find the first three terms, in ascending powers of <span class="chem">x</span>, of the expansion of <span class="chem">(1 - x)^8</span>. <strong>[2]</strong><br>(b) Hence, by choosing a suitable value of <span class="chem">x</span>, find an estimate for <span class="chem">0.98^8</span>. <strong>[2]</strong><br>(c) Use your GDC to find the percentage error in your estimate, correct to 3 significant figures. <strong>[2]</strong></p>
      stem: "<p>(a) <span class=\"chem\">(1 - x)^8</span> の展開式の初めの三項を <span class=\"chem\">x</span> の昇べきの順に求めなさい (Find)。 <strong>[2]</strong><br>(b) これを用いて (Hence)、適切な <span class=\"chem\">x</span> の値を選び、<span class=\"chem\">0.98^8</span> の近似値を求めなさい。 <strong>[2]</strong><br>(c) GDC を使って、この近似値の百分率誤差を有効数字 3 桁で求めなさい。 <strong>[2]</strong></p>",
      hints: [
        // EN: Use <span class="chem">^8C_0, ^8C_1, ^8C_2</span> with <span class="chem">b = -x</span>.
        "<span class=\"chem\">b = -x</span> として <span class=\"chem\">^8C_0, ^8C_1, ^8C_2</span> を使います。",
        // EN: For (b), solve <span class="chem">1 - x = 0.98</span> to choose <span class="chem">x</span>.
        "(b) では、<span class=\"chem\">1 - x = 0.98</span> を解いて <span class=\"chem\">x</span> を選びます。",
        // EN: Percentage error = |approximate − exact| ÷ exact × 100%. Divide by the exact value from the GDC.
        "百分率誤差 = |近似値 − 正確な値| ÷ 正確な値 × 100%。GDC で求めた正確な値で割ります。",
      ],
      // EN: <p>The terms after <span class="chem">x^2</span> contain <span class="chem">0.02^3</span> and smaller powers, which is why three terms already give an error of about 0.05%.</p>
      solution: "<p><span class=\"chem\">x^2</span> より後の項には <span class=\"chem\">0.02^3</span> やさらに小さい累乗が含まれるので、三項だけで誤差はすでに約 0.05% になります。</p>",
      // EN: <div class="worked__math">(a) (1 − <i>x</i>)<sup>8</sup> = 1 − 8<i>x</i> + 28<i>x</i><sup>2</sup> − …</div><div class="worked__math">(b) With <i>x</i> = 0.02: 1 − 0.16 + 0.0112 = <b>0.8512</b>.</div><div class="worked__math">(c) 0.98<sup>8</sup> = 0.8507630… (GDC). Percentage error = <span class="frac"><span>|0.8512 − 0.8507630…|</span><span>0.8507630…</span></span> × 100% = <b>0.0514%</b>.</div>
      answer: "<div class=\"worked__math\">(a) (1 − <i>x</i>)<sup>8</sup> = 1 − 8<i>x</i> + 28<i>x</i><sup>2</sup> − …</div><div class=\"worked__math\">(b) <i>x</i> = 0.02 とすると：1 − 0.16 + 0.0112 = <b>0.8512</b>。</div><div class=\"worked__math\">(c) 0.98<sup>8</sup> = 0.8507630…（GDC）。百分率誤差 = <span class=\"frac\"><span>|0.8512 − 0.8507630…|</span><span>0.8507630…</span></span> × 100% = <b>0.0514%</b>。</div>",
      markscheme: [
        // EN: A1: (a) 1 − 8x (first two terms correct).
        "A1：(a) 1 − 8x（初めの二項が正しい）。",
        // EN: A1: + 28x^2 (third term correct, from ⁸C₂ = 28).
        "A1：+ 28x^2（三項目が正しい。⁸C₂ = 28 から）。",
        // EN: M1: (b) Substitutes x = 0.02 into the three terms.
        "M1：(b) 三つの項に x = 0.02 を代入する。",
        // EN: A1: Estimate 0.8512.
        "A1：近似値 0.8512。",
        // EN: M1: (c) Uses |estimate − exact| / exact × 100% with the GDC value 0.850763….
        "M1：(c) GDC の値 0.850763… を用いて |近似値 − 正確な値| / 正確な値 × 100% を使う。",
        // EN: A1: Percentage error = 0.0514%.
        "A1：百分率誤差 = 0.0514%。",
      ],
    },

    // ── t1-2-q032 · short · exam · SL · SL 1.7, 4.4 · 9 marks
    "t1-2-q032": {
      // EN: <p>The number of followers, <span class="chem">y</span> hundred, of a new online channel, <span class="chem">x</span> weeks after it was launched, is shown in the table.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"><i>x</i> (weeks)</th><th scope="col">1</th><th scope="col">2</th><th scope="col">3</th><th scope="col">4</th><th scope="col">5</th><th scope="col">6</th></tr></thead><tbody><tr><th scope="row"><i>y</i> (hundreds)</th><td>4.6</td><td>6.8</td><td>9.7</td><td>14.2</td><td>20.5</td><td>29.9</td></tr></tbody></table></div><p>The data are modelled by <span class="chem">y = a b^x</span>, where <span class="chem">a, b &gt; 0</span>.<br>(a) Show that <span class="chem">ln y = ln a + x ln b</span>. <strong>[2]</strong><br>(b) Use your GDC to find the equation of the regression line of <span class="chem">ln y</span> on <span class="chem">x</span>. <strong>[2]</strong><br>(c) Hence find the values of <span class="chem">a</span> and <span class="chem">b</span>. <strong>[2]</strong><br>(d) Use the model to estimate the number of followers after 8 weeks, and comment on the reliability of this estimate. <strong>[3]</strong></p>
      stem: "<p>新しいオンラインチャンネルの開設から <span class=\"chem\">x</span> 週後のフォロワー数 <span class=\"chem\">y</span>（百人単位）を表に示す。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"><i>x</i>（週）</th><th scope=\"col\">1</th><th scope=\"col\">2</th><th scope=\"col\">3</th><th scope=\"col\">4</th><th scope=\"col\">5</th><th scope=\"col\">6</th></tr></thead><tbody><tr><th scope=\"row\"><i>y</i>（百人）</th><td>4.6</td><td>6.8</td><td>9.7</td><td>14.2</td><td>20.5</td><td>29.9</td></tr></tbody></table></div><p>このデータを <span class=\"chem\">y = a b^x</span>（<span class=\"chem\">a, b &gt; 0</span>）でモデル化する。<br>(a) <span class=\"chem\">ln y = ln a + x ln b</span> を示しなさい (Show that)。 <strong>[2]</strong><br>(b) GDC を使って、<span class=\"chem\">x</span> に対する <span class=\"chem\">ln y</span> の回帰直線の方程式を求めなさい (Find)。 <strong>[2]</strong><br>(c) これを用いて (Hence)、<span class=\"chem\">a</span> と <span class=\"chem\">b</span> の値を求めなさい。 <strong>[2]</strong><br>(d) このモデルを使って 8 週後のフォロワー数を推定し (Estimate)、この推定値の信頼性について論じなさい。 <strong>[3]</strong></p>",
      hints: [
        // EN: For (a), apply <span class="chem">ln</span> to both sides and use <span class="chem">ln(PQ) = ln P + ln Q</span> and <span class="chem">ln(b^x) = x ln b</span>.
        "(a) では、両辺に <span class=\"chem\">ln</span> を適用し、<span class=\"chem\">ln(PQ) = ln P + ln Q</span> と <span class=\"chem\">ln(b^x) = x ln b</span> を使います。",
        // EN: For (b), make a new list of <span class="chem">ln y</span> values on your GDC and run linear regression with <span class="chem">x</span> as the independent variable.
        "(b) では、GDC で <span class=\"chem\">ln y</span> の値の新しいリストを作り、<span class=\"chem\">x</span> を独立変数として線形回帰を行います。",
        // EN: For (c), compare <span class="chem">ln y = mx + c</span> with part (a): <span class="chem">ln b = m</span> and <span class="chem">ln a = c</span>.
        "(c) では、<span class=\"chem\">ln y = mx + c</span> を (a) と比べます：<span class=\"chem\">ln b = m</span>、<span class=\"chem\">ln a = c</span> です。",
        // EN: For (d), remember that <span class="chem">y</span> is measured in hundreds.
        "(d) では、<span class=\"chem\">y</span> の単位が百人であることを忘れないようにします。",
      ],
      // EN: <p>Taking logarithms turns the exponential model into a straight line in <span class="chem">x</span> and <span class="chem">ln y</span>. The gradient gives <span class="chem">ln b</span> and the intercept gives <span class="chem">ln a</span>.</p>
      solution: "<p>対数をとると、指数モデルは <span class=\"chem\">x</span> と <span class=\"chem\">ln y</span> の直線になります。傾きから <span class=\"chem\">ln b</span>、切片から <span class=\"chem\">ln a</span> が得られます。</p>",
      // EN: <div class="worked__math">(a) ln <i>y</i> = ln(<i>a b</i><sup><i>x</i></sup>) = ln <i>a</i> + ln(<i>b</i><sup><i>x</i></sup>) = ln <i>a</i> + <i>x</i> ln <i>b</i>.</div><div class="worked__math">(b) With <i>Y</i> = ln <i>y</i>: <i>Y</i> = 0.373<i>x</i> + 1.16 (gradient 0.372875…, intercept 1.159375…).</div><div class="worked__math">(c) <i>b</i> = e<sup>0.372875…</sup> = <b>1.45</b>, <i>a</i> = e<sup>1.159375…</sup> = <b>3.19</b>.</div><div class="worked__math">(d) <i>y</i> = 3.1879… × 1.4519…<sup>8</sup> = 63.0 hundred, so about <b>6300 followers</b>. This is an extrapolation (outside 1 ≤ <i>x</i> ≤ 6), so it is less reliable, although the fit to the data is very close.</div>
      answer: "<div class=\"worked__math\">(a) ln <i>y</i> = ln(<i>a b</i><sup><i>x</i></sup>) = ln <i>a</i> + ln(<i>b</i><sup><i>x</i></sup>) = ln <i>a</i> + <i>x</i> ln <i>b</i>.</div><div class=\"worked__math\">(b) <i>Y</i> = ln <i>y</i> とすると：<i>Y</i> = 0.373<i>x</i> + 1.16（傾き 0.372875…、切片 1.159375…）。</div><div class=\"worked__math\">(c) <i>b</i> = e<sup>0.372875…</sup> = <b>1.45</b>,  <i>a</i> = e<sup>1.159375…</sup> = <b>3.19</b>.</div><div class=\"worked__math\">(d) <i>y</i> = 3.1879… × 1.4519…<sup>8</sup> = 63.0 百人、つまり約 <b>6300 人のフォロワー</b>。これは外挿（1 ≤ <i>x</i> ≤ 6 の範囲外）なので、データへの当てはまりは非常によいものの、信頼性は低い。</div>",
      markscheme: [
        // EN: M1: (a) Takes ln of both sides: ln y = ln(a b^x).
        "M1：(a) 両辺の ln をとる：ln y = ln(a b^x)。",
        // EN: A1: Uses the product and power laws: ln(a b^x) = ln a + ln(b^x) = ln a + x ln b. AG: ln y = ln a + x ln b; the given line itself earns no mark.
        "A1：積と累乗の法則を使う：ln(a b^x) = ln a + ln(b^x) = ln a + x ln b。AG：ln y = ln a + x ln b。与えられた式を書くだけでは得点にならない。",
        // EN: A1: (b) Gradient 0.373 (0.372875…).
        "A1：(b) 傾き 0.373（0.372875…）。",
        // EN: A1: Intercept 1.16 (1.159375…), so ln y = 0.373x + 1.16.
        "A1：切片 1.16（1.159375…）、よって ln y = 0.373x + 1.16。",
        // EN: A1: (c) b = e^0.372875… = 1.45.
        "A1：(c) b = e^0.372875… = 1.45。",
        // EN: A1: a = e^1.159375… = 3.19.
        "A1：a = e^1.159375… = 3.19。",
        // EN: M1: (d) Substitutes x = 8 into the model.
        "M1：(d) モデルに x = 8 を代入する。",
        // EN: A1: y ≈ 63.0 hundred, about 6300 followers (accept 62.3 to 63.1 hundred from rounded values of a and b, or of the gradient and intercept).
        "A1：y ≈ 63.0 百人、約 6300 人のフォロワー（a と b、または傾きと切片の丸めた値からの 62.3 から 63.1 百人も可）。",
        // EN: R1: Not reliable, or less reliable, because x = 8 is outside the data range (extrapolation).
        "R1：x = 8 がデータの範囲外（外挿）なので、信頼できない、または信頼性が低い。",
      ],
    },

    // ── t1-2-q033 · numeric · exam · SL · SL 1.9 · 5 marks
    "t1-2-q033": {
      // EN: <p>In the expansion of <span class="chem">(1 + ax)^n</span>, where <span class="chem">n</span> is a positive integer, the coefficient of <span class="chem">x</span> is −6.3 and the coefficient of <span class="chem">x^2</span> is 18.9. Find the value of <span class="chem">a</span>.</p>
      stem: "<p><span class=\"chem\">(1 + ax)^n</span>（<span class=\"chem\">n</span> は正の整数）の展開式において、<span class=\"chem\">x</span> の係数は −6.3、<span class=\"chem\">x^2</span> の係数は 18.9 である。<span class=\"chem\">a</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Write the two coefficients: <span class="chem">na = -6.3</span> and <span class="chem">^nC_2 a^2 = n(n - 1)a^2 / 2 = 18.9</span>.
        "二つの係数を書きます：<span class=\"chem\">na = -6.3</span> と <span class=\"chem\">^nC_2 a^2 = n(n - 1)a^2 / 2 = 18.9</span>。",
        // EN: Substitute <span class="chem">a = -6.3/n</span> into the second equation, or solve the pair with your GDC.
        "<span class=\"chem\">a = -6.3/n</span> を二つ目の式に代入するか、GDC で連立して解きます。",
        // EN: You should find that <span class="chem">n = 21</span>. Then use <span class="chem">na = -6.3</span>.
        "<span class=\"chem\">n = 21</span> となるはずです。それから <span class=\"chem\">na = -6.3</span> を使います。",
      ],
      // EN: <div class="worked__math"><i>na</i> = −6.3 <b>[A1]</b> and <span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span><i>a</i><sup>2</sup> = 18.9 <b>[A1]</b></div><div class="worked__math">Substitute <i>a</i> = −6.3/<i>n</i>: <span class="frac"><span>(<i>n</i> − 1) × 39.69</span><span>2<i>n</i></span></span> = 18.9 <b>[M1]</b> ⇒ 39.69<i>n</i> − 39.69 = 37.8<i>n</i> ⇒ <i>n</i> = 21 <b>[A1]</b></div><div class="worked__math"><i>a</i> = −6.3 / 21 = <b>−0.3</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>na</i> = −6.3   <b>[A1]</b>   かつ   <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span><i>a</i><sup>2</sup> = 18.9   <b>[A1]</b></div><div class=\"worked__math\"><i>a</i> = −6.3/<i>n</i> を代入：  <span class=\"frac\"><span>(<i>n</i> − 1) × 39.69</span><span>2<i>n</i></span></span> = 18.9   <b>[M1]</b>  ⇒  39.69<i>n</i> − 39.69 = 37.8<i>n</i>  ⇒  <i>n</i> = 21   <b>[A1]</b></div><div class=\"worked__math\"><i>a</i> = −6.3 / 21 = <b>−0.3</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q044 · numeric · exam · SL · SL 1.9 · 4 marks
    "t1-2-q044": {
      // EN: <p>In the expansion of <span class="chem">(2 + x)^n</span>, where <span class="chem">n &gt;= 3</span> is an integer, the coefficient of <span class="chem">x^3</span> is 15360. Find the value of <span class="chem">n</span>.</p>
      stem: "<p><span class=\"chem\">(2 + x)^n</span>（<span class=\"chem\">n &gt;= 3</span> は整数）の展開式において、<span class=\"chem\">x^3</span> の係数は 15360 である。<span class=\"chem\">n</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: The term in <span class="chem">x^3</span> is <span class="chem">^nC_3 2^{n-3} x^3</span>.
        "<span class=\"chem\">x^3</span> の項は <span class=\"chem\">^nC_3 2^{n-3} x^3</span> です。",
        // EN: The equation <span class="chem">^nC_3 × 2^{n-3} = 15360</span> cannot be rearranged for <span class="chem">n</span> by hand. Tabulate <span class="mono">nCr(n, 3) × 2^(n − 3)</span> on your GDC for <span class="chem">n = 3, 4, 5, …</span>.
        "方程式 <span class=\"chem\">^nC_3 × 2^{n-3} = 15360</span> は手計算で <span class=\"chem\">n</span> について解くことはできません。GDC で <span class=\"chem\">n = 3, 4, 5, …</span> に対する <span class=\"mono\">nCr(n, 3) × 2^(n − 3)</span> の表を作ります。",
      ],
      // EN: <div class="worked__math">Coefficient of <i>x</i><sup>3</sup> = <sup><i>n</i></sup>C<sub>3</sub> × 2<sup><i>n</i>−3</sup> <b>[M1]</b>, so <sup><i>n</i></sup>C<sub>3</sub> × 2<sup><i>n</i>−3</sup> = 15360 <b>[A1]</b></div><div class="worked__math">GDC table: <i>n</i> = 9 gives 5376, <i>n</i> = 10 gives 120 × 128 = 15360 <b>[M1]</b></div><div class="worked__math"><b><i>n</i> = 10</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>x</i><sup>3</sup> の係数 = <sup><i>n</i></sup>C<sub>3</sub> × 2<sup><i>n</i>−3</sup>   <b>[M1]</b>、よって <sup><i>n</i></sup>C<sub>3</sub> × 2<sup><i>n</i>−3</sup> = 15360   <b>[A1]</b></div><div class=\"worked__math\">GDC の表：<i>n</i> = 9 では 5376、<i>n</i> = 10 では 120 × 128 = 15360   <b>[M1]</b></div><div class=\"worked__math\"><b><i>n</i> = 10</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q034 · numeric · challenge · SL · SL 1.7 · 6 marks
    "t1-2-q034": {
      // EN: <p>On 1 January 2025 town A had 12 000 residents and town B had 8000 residents. Planners model the populations by <span class="chem">P_A = 12000(1.035)^t</span> and <span class="chem">P_B = 8000(1.062)^t</span>, where <span class="chem">t</span> is the time in years after 1 January 2025 and the models are valid for all <span class="chem">t &gt;= 0</span>. Find the calendar year during which the population of town B first becomes larger than the population of town A.</p>
      stem: "<p>2025 年 1 月 1 日に、町 A の住民は 12 000 人、町 B の住民は 8000 人であった。計画担当者は人口を <span class=\"chem\">P_A = 12000(1.035)^t</span> と <span class=\"chem\">P_B = 8000(1.062)^t</span> でモデル化する。ここで <span class=\"chem\">t</span> は 2025 年 1 月 1 日からの経過年数であり、モデルはすべての <span class=\"chem\">t &gt;= 0</span> で有効とする。町 B の人口が初めて町 A の人口より多くなるのは何年中か求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: you need the moment <span class="chem">P_B = P_A</span>, and then you must turn a value of <span class="chem">t</span> into a calendar year. The answer is a year, not a number of years.
        "解読：<span class=\"chem\">P_B = P_A</span> となる時点を求め、さらに <span class=\"chem\">t</span> の値を暦の年に直す必要があります。答えは年数ではなく、西暦の年です。",
        // EN: Set <span class="chem">8000(1.062)^t = 12000(1.035)^t</span> and divide to get <span class="chem">(1.062/1.035)^t = 1.5</span>.
        "<span class=\"chem\">8000(1.062)^t = 12000(1.035)^t</span> とおいて割り算すると <span class=\"chem\">(1.062/1.035)^t = 1.5</span> が得られます。",
        // EN: Take logarithms: <span class="chem">t = ln 1.5 / ln(1.062/1.035)</span>. Then decide which year contains the date <span class="chem">t</span> years after 1 January 2025.
        "対数をとります：<span class=\"chem\">t = ln 1.5 / ln(1.062/1.035)</span>。それから、2025 年 1 月 1 日の <span class=\"chem\">t</span> 年後の日付がどの年に含まれるかを判断します。",
      ],
      // EN: <p><strong>Decode:</strong> solve an exponential equation for <i>t</i>, then convert “<i>t</i> years after 1 January 2025” into a calendar year.</p><div class="worked__math">8000(1.062)<sup><i>t</i></sup> = 12000(1.035)<sup><i>t</i></sup> <b>[M1]</b> ⇒ (<span class="frac"><span>1.062</span><span>1.035</span></span>)<sup><i>t</i></sup> = 1.5 <b>[A1]</b></div><div class="worked__math"><i>t</i> ln(<span class="frac"><span>1.062</span><span>1.035</span></span>) = ln 1.5 <b>[M1]</b> ⇒ <i>t</i> = 15.744… <b>[A1]</b></div><div class="worked__math">15 &lt; <i>t</i> &lt; 16, and 1 January 2025 + 15 years = 1 January 2040, so the crossing happens during 2040. <b>[R1]</b></div><div class="worked__math"><b>2040</b> <b>[A1]</b></div>
      solution: "<p><strong>解読：</strong>指数方程式を <i>t</i> について解き、「2025 年 1 月 1 日から <i>t</i> 年後」を西暦の年に直します。</p><div class=\"worked__math\">8000(1.062)<sup><i>t</i></sup> = 12000(1.035)<sup><i>t</i></sup>   <b>[M1]</b>  ⇒  (<span class=\"frac\"><span>1.062</span><span>1.035</span></span>)<sup><i>t</i></sup> = 1.5   <b>[A1]</b></div><div class=\"worked__math\"><i>t</i> ln(<span class=\"frac\"><span>1.062</span><span>1.035</span></span>) = ln 1.5   <b>[M1]</b>  ⇒  <i>t</i> = 15.744…   <b>[A1]</b></div><div class=\"worked__math\">15 &lt; <i>t</i> &lt; 16 であり、2025 年 1 月 1 日 + 15 年 = 2040 年 1 月 1 日なので、逆転は 2040 年中に起こる。   <b>[R1]</b></div><div class=\"worked__math\"><b>2040</b> 年   <b>[A1]</b></div>",
    },

    // ── t1-2-q035 · numeric · challenge · SL · SL 1.7 · 6 marks
    "t1-2-q035": {
      // EN: <p>Solve the equation <span class="chem">log_2 x + log_4(x + 3) = 3</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>方程式 <span class=\"chem\">log_2 x + log_4(x + 3) = 3</span> を解きなさい。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: the two logarithms have different bases, so the log laws cannot combine them yet. Change both to base 2; the equation then becomes a polynomial that has no exact root you can find by hand, so finish on the GDC.
        "解読：二つの対数は底が異なるので、このままでは対数の性質でまとめられません。両方を底 2 に直すと、方程式は手計算では厳密な解が求められない多項式になるので、最後は GDC で解きます。",
        // EN: Change of base: <span class="chem">log_4(x + 3) = log_2(x + 3) / log_2 4 = (1/2) log_2(x + 3)</span>.
        "底の変換：<span class=\"chem\">log_4(x + 3) = log_2(x + 3) / log_2 4 = (1/2) log_2(x + 3)</span>。",
        // EN: Multiply by 2 and combine: <span class="chem">log_2(x^2(x + 3)) = 6</span>, so <span class="chem">x^3 + 3x^2 - 64 = 0</span>.
        "2 を掛けてまとめます：<span class=\"chem\">log_2(x^2(x + 3)) = 6</span>、よって <span class=\"chem\">x^3 + 3x^2 - 64 = 0</span> です。",
        // EN: Solve the cubic with your GDC and check which roots satisfy <span class="chem">x &gt; 0</span>.
        "GDC でこの三次方程式を解き、どの解が <span class=\"chem\">x &gt; 0</span> を満たすか確認します。",
      ],
      // EN: <p><strong>Decode:</strong> make the bases match with change of base, combine the logs, then solve the resulting cubic numerically.</p><div class="worked__math">log<sub>4</sub>(<i>x</i> + 3) = <span class="frac"><span>log<sub>2</sub>(<i>x</i> + 3)</span><span>2</span></span> <b>[M1]</b> ⇒ 2 log<sub>2</sub> <i>x</i> + log<sub>2</sub>(<i>x</i> + 3) = 6 <b>[A1]</b></div><div class="worked__math">log<sub>2</sub>(<i>x</i><sup>2</sup>(<i>x</i> + 3)) = 6 ⇒ <i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup> = 64 <b>[M1 A1]</b></div><div class="worked__math">GDC: the cubic <i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup> − 64 = 0 has one real root, <i>x</i> = 3.21023…, and it satisfies <i>x</i> &gt; 0. <b>[R1]</b></div><div class="worked__math"><b><i>x</i> = 3.21</b> <b>[A1]</b></div>
      solution: "<p><strong>解読：</strong>底の変換公式で底をそろえ、対数をまとめてから、得られた三次方程式を数値的に解きます。</p><div class=\"worked__math\">log<sub>4</sub>(<i>x</i> + 3) = <span class=\"frac\"><span>log<sub>2</sub>(<i>x</i> + 3)</span><span>2</span></span>   <b>[M1]</b>  ⇒  2 log<sub>2</sub> <i>x</i> + log<sub>2</sub>(<i>x</i> + 3) = 6   <b>[A1]</b></div><div class=\"worked__math\">log<sub>2</sub>(<i>x</i><sup>2</sup>(<i>x</i> + 3)) = 6  ⇒  <i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup> = 64   <b>[M1 A1]</b></div><div class=\"worked__math\">GDC：三次方程式 <i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup> − 64 = 0 の実数解は <i>x</i> = 3.21023… の一つだけで、<i>x</i> &gt; 0 を満たす。   <b>[R1]</b></div><div class=\"worked__math\"><b><i>x</i> = 3.21</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q036 · numeric · challenge · SL · SL 1.7 · 5 marks
    "t1-2-q036": {
      // EN: <p>Find the value of <span class="chem">x</span> for which <span class="chem">log_3 x = log_5(x + 10)</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">log_3 x = log_5(x + 10)</span> を満たす <span class=\"chem\">x</span> の値を求めなさい (Find)。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: two different bases, and the arguments differ too, so no log law collapses this to a simple equation. Rewrite both sides in a base your GDC knows, then solve numerically.
        "解読：底が二つとも異なり、真数も異なるので、どの対数の性質を使っても簡単な方程式にはなりません。両辺を GDC が扱える底で書き直し、数値的に解きます。",
        // EN: Change of base: <span class="chem">ln x / ln 3 = ln(x + 10) / ln 5</span>.
        "底の変換：<span class=\"chem\">ln x / ln 3 = ln(x + 10) / ln 5</span>。",
        // EN: Graph <span class="chem">y = ln x / ln 3</span> and <span class="chem">y = ln(x + 10) / ln 5</span> for <span class="chem">x &gt; 0</span> and find the intersection.
        "<span class=\"chem\">x &gt; 0</span> の範囲で <span class=\"chem\">y = ln x / ln 3</span> と <span class=\"chem\">y = ln(x + 10) / ln 5</span> のグラフをかき、交点を求めます。",
      ],
      // EN: <p><strong>Decode:</strong> change both logarithms to base e, then use the GDC to solve the equation graphically.</p><div class="worked__math"><span class="frac"><span>ln <i>x</i></span><span>ln 3</span></span> = <span class="frac"><span>ln(<i>x</i> + 10)</span><span>ln 5</span></span> <b>[M1 A1]</b></div><div class="worked__math">Graph both sides (or the difference) for <i>x</i> &gt; 0 and find the intersection. <b>[M1]</b></div><div class="worked__math">The curves meet once, at <i>x</i> = 6.88490…, which lies in the domain <i>x</i> &gt; 0. <b>[R1]</b></div><div class="worked__math"><b><i>x</i> = 6.88</b> <b>[A1]</b></div>
      solution: "<p><strong>解読：</strong>両方の対数を底 e に直し、GDC を使ってグラフで方程式を解きます。</p><div class=\"worked__math\"><span class=\"frac\"><span>ln <i>x</i></span><span>ln 3</span></span> = <span class=\"frac\"><span>ln(<i>x</i> + 10)</span><span>ln 5</span></span>   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>x</i> &gt; 0 の範囲で両辺（またはその差）のグラフをかき、交点を求める。   <b>[M1]</b></div><div class=\"worked__math\">二つの曲線は <i>x</i> = 6.88490… で一度だけ交わり、これは定義域 <i>x</i> &gt; 0 に含まれる。   <b>[R1]</b></div><div class=\"worked__math\"><b><i>x</i> = 6.88</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q037 · numeric · challenge · SL · SL 1.5 · 4 marks
    "t1-2-q037": {
      // EN: <p>When the number <span class="chem">7^{100}</span> is written out in full in base 10, how many digits does it have?</p>
      stem: "<p>数 <span class=\"chem\">7^{100}</span> を 10 進法ですべて書き表すと、何桁の数になりますか。</p>",
      hints: [
        // EN: Decode: the number of digits tells you which powers of 10 the number lies between. A whole number with <span class="chem">k</span> digits satisfies <span class="chem">10^{k-1} &lt;= N &lt; 10^k</span>, so this is a base-10 logarithm question.
        "解読：桁数から、その数がどの 10 の累乗の間にあるかがわかります。<span class=\"chem\">k</span> 桁の整数は <span class=\"chem\">10^{k-1} &lt;= N &lt; 10^k</span> を満たすので、これは底が 10 の対数の問題です。",
        // EN: Find <span class="chem">log(7^{100}) = 100 log 7</span> on your GDC.
        "GDC で <span class=\"chem\">log(7^{100}) = 100 log 7</span> を求めます。",
        // EN: If <span class="chem">log N = 84.5…</span>, then <span class="chem">10^{84} &lt;= N &lt; 10^{85}</span>. How many digits is that?
        "<span class=\"chem\">log N = 84.5…</span> ならば <span class=\"chem\">10^{84} &lt;= N &lt; 10^{85}</span> です。これは何桁でしょうか？",
      ],
      // EN: <p><strong>Decode:</strong> counting digits means locating the number between consecutive powers of 10, which is what log base 10 measures.</p><div class="worked__math">A whole number <i>N</i> with <i>k</i> digits satisfies 10<sup><i>k</i>−1</sup> ≤ <i>N</i> &lt; 10<sup><i>k</i></sup>. <b>[M1]</b></div><div class="worked__math">log(7<sup>100</sup>) = 100 log 7 = 84.5098… <b>[A1]</b></div><div class="worked__math">So 10<sup>84</sup> ≤ 7<sup>100</sup> &lt; 10<sup>85</sup> (indeed 7<sup>100</sup> ≈ 3.23 × 10<sup>84</sup>). <b>[R1]</b></div><div class="worked__math"><b>85 digits</b> <b>[A1]</b></div>
      solution: "<p><strong>解読：</strong>桁数を数えるとは、その数が隣り合う 10 の累乗のどの間にあるかを調べることで、それはまさに底が 10 の対数が表すものです。</p><div class=\"worked__math\"><i>k</i> 桁の整数 <i>N</i> は 10<sup><i>k</i>−1</sup> ≤ <i>N</i> &lt; 10<sup><i>k</i></sup> を満たす。   <b>[M1]</b></div><div class=\"worked__math\">log(7<sup>100</sup>) = 100 log 7 = 84.5098…   <b>[A1]</b></div><div class=\"worked__math\">よって 10<sup>84</sup> ≤ 7<sup>100</sup> &lt; 10<sup>85</sup>（実際 7<sup>100</sup> ≈ 3.23 × 10<sup>84</sup>）。   <b>[R1]</b></div><div class=\"worked__math\"><b>85 桁</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q038 · numeric · challenge · SL · SL 1.5, 1.7 · 5 marks
    "t1-2-q038": {
      // EN: <p>A sheet of paper is 0.08 mm thick. Each time it is folded in half, the thickness of the folded stack doubles. Assume, unrealistically, that the paper can be folded as many times as needed. The mean distance from the Earth to the Moon is 384 400 km. Find the minimum number of folds needed for the thickness of the stack to be greater than this distance.</p>
      stem: "<p>1 枚の紙の厚さは 0.08 mm である。半分に折るたびに、折り重ねた紙の厚さは 2 倍になる。現実的ではないが、紙は必要なだけ何回でも折れるものとする。地球から月までの平均距離は 384 400 km である。紙の厚さがこの距離より大きくなるのに必要な最小の折る回数を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: after <span class="chem">n</span> folds the thickness is <span class="chem">0.08 × 2^n</span> mm. You need the smallest whole number <span class="chem">n</span> that beats the distance, and the two lengths are in different units.
        "解読：<span class=\"chem\">n</span> 回折った後の厚さは <span class=\"chem\">0.08 × 2^n</span> mm です。距離を超える最小の整数 <span class=\"chem\">n</span> が必要で、しかも二つの長さは単位が異なります。",
        // EN: Convert: <span class="chem">384400</span> km <span class="chem">= 384400 × 10^6</span> mm <span class="chem">= 3.844 × 10^{11}</span> mm.
        "単位を変換します：<span class=\"chem\">384400</span> km <span class=\"chem\">= 384400 × 10^6</span> mm <span class=\"chem\">= 3.844 × 10^{11}</span> mm。",
        // EN: Solve <span class="chem">0.08 × 2^n &gt; 3.844 × 10^{11}</span> with logarithms, then round <strong>up</strong> to the next integer.
        "対数を使って <span class=\"chem\">0.08 × 2^n &gt; 3.844 × 10^{11}</span> を解き、次の整数に<strong>切り上げ</strong>ます。",
      ],
      // EN: <p><strong>Decode:</strong> a doubling model with an inequality, a unit conversion and a “whole number of folds” condition.</p><div class="worked__math">384 400 km = 3.844 × 10<sup>11</sup> mm <b>[A1]</b></div><div class="worked__math">0.08 × 2<sup><i>n</i></sup> &gt; 3.844 × 10<sup>11</sup> ⇒ 2<sup><i>n</i></sup> &gt; 4.805 × 10<sup>12</sup> <b>[M1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln(4.805 × 10<sup>12</sup>)</span><span>ln 2</span></span> <b>[M1]</b> = 42.13… <b>[A1]</b></div><div class="worked__math"><i>n</i> must be a whole number, so <b>43 folds</b>. <b>[A1]</b></div>
      solution: "<p><strong>解読：</strong>不等式を含む倍増モデルに、単位の変換と「折る回数は整数」という条件が加わった問題です。</p><div class=\"worked__math\">384 400 km = 3.844 × 10<sup>11</sup> mm   <b>[A1]</b></div><div class=\"worked__math\">0.08 × 2<sup><i>n</i></sup> &gt; 3.844 × 10<sup>11</sup>  ⇒  2<sup><i>n</i></sup> &gt; 4.805 × 10<sup>12</sup>   <b>[M1]</b></div><div class=\"worked__math\"><i>n</i> &gt; <span class=\"frac\"><span>ln(4.805 × 10<sup>12</sup>)</span><span>ln 2</span></span>   <b>[M1]</b>   = 42.13…   <b>[A1]</b></div><div class=\"worked__math\"><i>n</i> は整数でなければならないので、<b>43 回</b>。   <b>[A1]</b></div>",
    },

    // ── t1-2-q039 · numeric · challenge · SL · SL 1.9 · 5 marks
    "t1-2-q039": {
      // EN: <p>The expansion of <span class="chem">(3 + 2x)^{12}</span> is written in ascending powers of <span class="chem">x</span>. Find the exact value of the greatest coefficient in this expansion.</p>
      stem: "<p><span class=\"chem\">(3 + 2x)^{12}</span> の展開式を <span class=\"chem\">x</span> の昇べきの順に書く。この展開式で最大の係数の厳密値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: “the greatest coefficient” is not the first or the last one. Each power <span class="chem">x^r</span> has its own coefficient, and you must compare all thirteen of them.
        "解読：「最大の係数」は最初や最後の係数とは限りません。各累乗 <span class=\"chem\">x^r</span> にそれぞれの係数があり、十三個すべてを比べる必要があります。",
        // EN: The coefficient of <span class="chem">x^r</span> is <span class="chem">c_r = ^{12}C_r × 3^{12-r} × 2^r</span>.
        "<span class=\"chem\">x^r</span> の係数は <span class=\"chem\">c_r = ^{12}C_r × 3^{12-r} × 2^r</span> です。",
        // EN: Enter <span class="chem">c_r</span> as a function of <span class="chem">r</span> in the GDC table for <span class="chem">r = 0, 1, …, 12</span> and read off the largest value. Check its neighbours.
        "<span class=\"chem\">c_r</span> を <span class=\"chem\">r</span> の関数として GDC の表に入力し、<span class=\"chem\">r = 0, 1, …, 12</span> で最大の値を読み取ります。その前後の値も確認します。",
      ],
      // EN: <p><strong>Decode:</strong> list the coefficient of every power of <i>x</i> and find the largest; a GDC table does the comparison.</p><div class="worked__math">Coefficient of <i>x</i><sup><i>r</i></sup>: <i>c</i><sub><i>r</i></sub> = <sup>12</sup>C<sub><i>r</i></sub> × 3<sup>12−<i>r</i></sup> × 2<sup><i>r</i></sup> <b>[M1 A1]</b></div><div class="worked__math">GDC table for <i>r</i> = 0, …, 12 <b>[M1]</b>: <i>c</i><sub>4</sub> = 51 963 120, <i>c</i><sub>5</sub> = 55 427 328, <i>c</i><sub>6</sub> = 43 110 144, so the maximum is at <i>r</i> = 5 <b>[A1]</b></div><div class="worked__math">Greatest coefficient = <b>55 427 328</b> (the coefficient of <i>x</i><sup>5</sup>) <b>[A1]</b></div>
      solution: "<p><strong>解読：</strong><i>x</i> のすべての累乗の係数を並べて最大のものを探します。比較は GDC の表で行えます。</p><div class=\"worked__math\"><i>x</i><sup><i>r</i></sup> の係数：<i>c</i><sub><i>r</i></sub> = <sup>12</sup>C<sub><i>r</i></sub> × 3<sup>12−<i>r</i></sup> × 2<sup><i>r</i></sup>   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>r</i> = 0, …, 12 の GDC の表   <b>[M1]</b>：<i>c</i><sub>4</sub> = 51 963 120、<i>c</i><sub>5</sub> = 55 427 328、<i>c</i><sub>6</sub> = 43 110 144 なので、最大は <i>r</i> = 5 のとき   <b>[A1]</b></div><div class=\"worked__math\">最大の係数 = <b>55 427 328</b>（<i>x</i><sup>5</sup> の係数）   <b>[A1]</b></div>",
    },

    // ── t1-2-q040 · short · challenge · SL · SL 1.5, 1.7 · 8 marks
    "t1-2-q040": {
      // EN: <p>Astronomers measure the brightness of a star by its apparent magnitude <span class="chem">m</span>. For two stars with magnitudes <span class="chem">m_1</span> and <span class="chem">m_2</span>, and light fluxes <span class="chem">F_1</span> and <span class="chem">F_2</span> reaching the Earth, <span class="chem">m_1 - m_2 = -2.5 log(F_1/F_2)</span>, where log is to base 10. Brighter stars have smaller magnitudes.<br>(a) Star P has magnitude 2.4 and star Q has magnitude 5.9. Find <span class="chem">F_P / F_Q</span>. <strong>[3]</strong><br>(b) The faintest stars visible to the naked eye have magnitude 6.5. A small telescope can show stars that are 600 times fainter than this. Find the magnitude of the faintest stars visible through this telescope. <strong>[2]</strong><br>(c) Two stars, each of magnitude 4.0, are so close together that they appear as a single point of light. The flux from this point is the sum of the two fluxes. Find the magnitude of the point. <strong>[3]</strong></p>
      stem: "<p>天文学者は恒星の明るさを見かけの等級 <span class=\"chem\">m</span> で表す。等級が <span class=\"chem\">m_1</span> と <span class=\"chem\">m_2</span>、地球に届く光の流量（フラックス）が <span class=\"chem\">F_1</span> と <span class=\"chem\">F_2</span> である二つの恒星について、<span class=\"chem\">m_1 - m_2 = -2.5 log(F_1/F_2)</span> が成り立つ。ここで log の底は 10 である。明るい恒星ほど等級は小さい。<br>(a) 恒星 P の等級は 2.4、恒星 Q の等級は 5.9 である。<span class=\"chem\">F_P / F_Q</span> を求めなさい (Find)。 <strong>[3]</strong><br>(b) 肉眼で見える最も暗い恒星の等級は 6.5 である。ある小型望遠鏡では、これより 600 倍暗い恒星まで見える。この望遠鏡で見える最も暗い恒星の等級を求めなさい (Find)。 <strong>[2]</strong><br>(c) 等級がともに 4.0 の二つの恒星が非常に近くにあり、一つの光の点に見える。この点からの流量は二つの流量の和である。この点の等級を求めなさい (Find)。 <strong>[3]</strong></p>",
      hints: [
        // EN: Decode: this is a logarithmic scale. Differences of magnitudes correspond to ratios of fluxes, and “times fainter” and “sum of fluxes” must be turned into a flux ratio before you use the formula.
        "解読：これは対数目盛りです。等級の差は流量の比に対応するので、公式を使う前に「何倍暗いか」や「流量の和」を流量の比に直す必要があります。",
        // EN: For (a), substitute <span class="chem">m_1 = 2.4</span> and <span class="chem">m_2 = 5.9</span>, then divide by −2.5 and undo the log.
        "(a) では、<span class=\"chem\">m_1 = 2.4</span> と <span class=\"chem\">m_2 = 5.9</span> を代入し、−2.5 で割ってから対数を外します。",
        // EN: For (b), let star 1 be the faintest telescope star and star 2 the faintest naked-eye star. Then <span class="chem">F_1 / F_2 = 1/600</span>.
        "(b) では、恒星 1 を望遠鏡で見える最も暗い恒星、恒星 2 を肉眼で見える最も暗い恒星とします。すると <span class=\"chem\">F_1 / F_2 = 1/600</span> です。",
        // EN: For (c), compare the point (flux <span class="chem">2F</span>) with one star (flux <span class="chem">F</span>, magnitude 4.0).
        "(c) では、光の点（流量 <span class=\"chem\">2F</span>）と一つの恒星（流量 <span class=\"chem\">F</span>、等級 4.0）を比べます。",
      ],
      // EN: <p><strong>Decode:</strong> on a log scale, multiplying a flux by a factor adds a fixed amount to the magnitude. Every part becomes “find a flux ratio, then substitute”. In (c), doubling the flux lowers the magnitude by <span class="chem">2.5 log 2 ≈ 0.753</span>.</p>
      solution: "<p><strong>解読：</strong>対数目盛りでは、流量をある倍率で掛けると、等級に一定の量が加わります。どの問いも「流量の比を求めて代入する」形になります。(c) では、流量が 2 倍になると等級は <span class=\"chem\">2.5 log 2 ≈ 0.753</span> だけ小さくなります。</p>",
      // EN: <div class="worked__math">(a) 2.4 − 5.9 = −2.5 log(<i>F</i><sub>P</sub>/<i>F</i><sub>Q</sub>) ⇒ log(<i>F</i><sub>P</sub>/<i>F</i><sub>Q</sub>) = 1.4 ⇒ <i>F</i><sub>P</sub>/<i>F</i><sub>Q</sub> = 10<sup>1.4</sup> = <b>25.1</b>.</div><div class="worked__math">(b) “600 times fainter” means <i>F</i><sub>T</sub>/<i>F</i><sub>6.5</sub> = 1/600, so <i>m</i> − 6.5 = −2.5 log(1/600) = 2.5 log 600 ⇒ <i>m</i> = <b>13.4</b> (13.445…).</div><div class="worked__math">(c) Fluxes add, so <i>F</i><sub>point</sub> = 2<i>F</i>, where <i>F</i> is the flux of one star. <i>m</i> − 4.0 = −2.5 log 2 ⇒ <i>m</i> = <b>3.25</b> (3.2474…). The magnitudes do not add: the pair is brighter, so its magnitude is smaller than 4.0.</div>
      answer: "<div class=\"worked__math\">(a) 2.4 − 5.9 = −2.5 log(<i>F</i><sub>P</sub>/<i>F</i><sub>Q</sub>)  ⇒  log(<i>F</i><sub>P</sub>/<i>F</i><sub>Q</sub>) = 1.4  ⇒  <i>F</i><sub>P</sub>/<i>F</i><sub>Q</sub> = 10<sup>1.4</sup> = <b>25.1</b>.</div><div class=\"worked__math\">(b)「600 倍暗い」とは <i>F</i><sub>T</sub>/<i>F</i><sub>6.5</sub> = 1/600 ということなので、<i>m</i> − 6.5 = −2.5 log(1/600) = 2.5 log 600  ⇒  <i>m</i> = <b>13.4</b>（13.445…）。</div><div class=\"worked__math\">(c) 流量は足し合わされるので、<i>F</i><sub>point</sub> = 2<i>F</i>（<i>F</i> は一つの恒星の流量）。<i>m</i> − 4.0 = −2.5 log 2  ⇒  <i>m</i> = <b>3.25</b>（3.2474…）。等級は足し合わされない。二つ合わせると明るくなるので、等級は 4.0 より小さい。</div>",
      markscheme: [
        // EN: M1: (a) Substitutes: 2.4 − 5.9 = −2.5 log(F_P/F_Q).
        "M1：(a) 代入する：2.4 − 5.9 = −2.5 log(F_P/F_Q)。",
        // EN: A1: log(F_P/F_Q) = 1.4.
        "A1：log(F_P/F_Q) = 1.4。",
        // EN: A1: F_P/F_Q = 10^1.4 = 25.1.
        "A1：F_P/F_Q = 10^1.4 = 25.1。",
        // EN: M1: (b) Uses a flux ratio of 1/600 (or 600 the other way round) with the formula: m − 6.5 = −2.5 log(1/600).
        "M1：(b) 流量の比 1/600（または逆向きに 600）を公式に用いる：m − 6.5 = −2.5 log(1/600)。",
        // EN: A1: m = 13.4 (13.445…).
        "A1：m = 13.4（13.445…）。",
        // EN: R1: (c) Recognises that the fluxes add (F_point = 2F) and the magnitudes do not (the answer is not 8.0 or 4.0).
        "R1：(c) 流量は足し合わされる（F_point = 2F）が、等級は足し合わされない（答えは 8.0 でも 4.0 でもない）ことを見抜く。",
        // EN: M1: m − 4.0 = −2.5 log(2F/F) = −2.5 log 2.
        "M1：m − 4.0 = −2.5 log(2F/F) = −2.5 log 2。",
        // EN: A1: m = 3.25 (3.2474…).
        "A1：m = 3.25（3.2474…）。",
      ],
    },

    // ── t1-2-q041 · short · challenge · SL · SL 1.9, 4.8 · 7 marks
    "t1-2-q041": {
      // EN: <p>A factory finds that 6% of the microchips it makes are faulty. Chips are packed in boxes of 15. A quality engineer explains that when <span class="chem">(0.94 + 0.06)^{15}</span> is expanded with the binomial theorem, the term <span class="chem">^{15}C_r (0.94)^{15-r} (0.06)^r</span> gives the probability that a box contains exactly <span class="chem">r</span> faulty chips.<br>(a) Write down the value of the sum of all the terms of the expansion, and explain why this value makes sense. <strong>[2]</strong><br>(b) Find the probability that a box contains exactly 2 faulty chips. <strong>[2]</strong><br>(c) A box is rejected if it contains more than 2 faulty chips. Find the probability that a box is rejected. <strong>[3]</strong></p>
      stem: "<p>ある工場では、製造するマイクロチップの 6% が不良品である。チップは 15 個ずつ箱に詰められる。品質管理の技術者は、<span class=\"chem\">(0.94 + 0.06)^{15}</span> を二項定理で展開したとき、項 <span class=\"chem\">^{15}C_r (0.94)^{15-r} (0.06)^r</span> が、箱にちょうど <span class=\"chem\">r</span> 個の不良チップが入っている確率を表すと説明している。<br>(a) 展開式のすべての項の和の値を書き (Write down)、その値が妥当である理由を説明しなさい (Explain)。 <strong>[2]</strong><br>(b) 箱にちょうど 2 個の不良チップが入っている確率を求めなさい (Find)。 <strong>[2]</strong><br>(c) 不良チップが 2 個より多く入っている箱は不合格となる。箱が不合格となる確率を求めなさい (Find)。 <strong>[3]</strong></p>",
      hints: [
        // EN: Decode: this is the binomial theorem in disguise. Each term of the expansion is the probability of a different number of faulty chips, so “more than 2” means adding many terms, or using the total from (a).
        "解読：これは姿を変えた二項定理です。展開式の各項はそれぞれ異なる不良チップ数の確率なので、「2 個より多い」は多くの項を足すか、(a) の合計を使うことを意味します。",
        // EN: For (a), simplify the bracket before you raise it to the power 15.
        "(a) では、15 乗する前にかっこの中を簡単にします。",
        // EN: For (b), substitute <span class="chem">r = 2</span>; your GDC gives <span class="chem">^{15}C_2</span>.
        "(b) では <span class=\"chem\">r = 2</span> を代入します。<span class=\"chem\">^{15}C_2</span> は GDC で求められます。",
        // EN: For (c), it is quicker to subtract the terms for <span class="chem">r = 0, 1, 2</span> from the total than to add thirteen terms.
        "(c) では、十三個の項を足すより、合計から <span class=\"chem\">r = 0, 1, 2</span> の項を引くほうが速いです。",
      ],
      // EN: <p><strong>Decode:</strong> the expansion of <span class="chem">(q + p)^n</span> with <span class="chem">p + q = 1</span> lists the probabilities of 0, 1, 2, … faulty chips. Its total is 1, so “more than 2” is 1 minus the first three terms. (This is the binomial distribution of SL 4.8, here built from the binomial theorem.)</p>
      solution: "<p><strong>解読：</strong><span class=\"chem\">p + q = 1</span> のとき、<span class=\"chem\">(q + p)^n</span> の展開式は不良チップが 0、1、2、… 個である確率を並べたものです。その合計は 1 なので、「2 個より多い」は 1 から初めの三項を引いたものです。（これは SL 4.8 の二項分布を、二項定理から組み立てたものです。）</p>",
      // EN: <div class="worked__math">(a) (0.94 + 0.06)<sup>15</sup> = 1<sup>15</sup> = <b>1</b>. The terms cover every possible number of faulty chips (0 to 15), and the probabilities of all the possible outcomes add up to 1.</div><div class="worked__math">(b) <sup>15</sup>C<sub>2</sub> (0.94)<sup>13</sup>(0.06)<sup>2</sup> = 105 × 0.94<sup>13</sup> × 0.0036 = <b>0.169</b> (0.169104…).</div><div class="worked__math">(c) “More than 2” is everything except <i>r</i> = 0, 1, 2. Sum of the terms for <i>r</i> = 0, 1, 2 = 0.395292… + 0.378471… + 0.169104… = 0.942867…, so P(rejected) = 1 − 0.942867… = <b>0.0571</b>.</div>
      answer: "<div class=\"worked__math\">(a) (0.94 + 0.06)<sup>15</sup> = 1<sup>15</sup> = <b>1</b>。各項は考えられるすべての不良チップ数（0 から 15）を網羅しており、起こりうるすべての結果の確率の和は 1 である。</div><div class=\"worked__math\">(b) <sup>15</sup>C<sub>2</sub> (0.94)<sup>13</sup>(0.06)<sup>2</sup> = 105 × 0.94<sup>13</sup> × 0.0036 = <b>0.169</b>（0.169104…）。</div><div class=\"worked__math\">(c)「2 個より多い」は <i>r</i> = 0, 1, 2 以外のすべてである。<i>r</i> = 0, 1, 2 の項の和 = 0.395292… + 0.378471… + 0.169104… = 0.942867… なので、P(rejected) = 1 − 0.942867… = <b>0.0571</b>。</div>",
      markscheme: [
        // EN: A1: (a) The sum is (0.94 + 0.06)^15 = 1.
        "A1：(a) 和は (0.94 + 0.06)^15 = 1。",
        // EN: R1: The terms give the probabilities of all possible outcomes (r = 0 to 15), which must add up to 1.
        "R1：各項は起こりうるすべての結果（r = 0 から 15）の確率を表し、その和は 1 でなければならない。",
        // EN: M1: (b) Uses ¹⁵C₂ (0.94)^13 (0.06)^2.
        "M1：(b) ¹⁵C₂ (0.94)^13 (0.06)^2 を使う。",
        // EN: A1: 0.169 (0.169104…).
        "A1：0.169（0.169104…）。",
        // EN: R1: (c) Interprets “more than 2” as 1 − (sum of the terms for r = 0, 1 and 2), or as the sum of the terms for r = 3 to 15.
        "R1：(c)「2 個より多い」を 1 −（r = 0、1、2 の項の和）、または r = 3 から 15 の項の和と解釈する。",
        // EN: M1: Evaluates the terms for r = 0, 1, 2 (sum 0.942867…).
        "M1：r = 0, 1, 2 の項を計算する（和 0.942867…）。",
        // EN: A1: P(rejected) = 0.0571 (0.057133…).
        "A1：P(rejected) = 0.0571（0.057133…）。",
      ],
    },

    // ── t1-2-q042 · short · challenge · SL · SL 1.7 · 8 marks
    "t1-2-q042": {
      // EN: <p>The mass of carbon-14 in a dead piece of wood decreases according to <span class="chem">N = N_0 e^{-lambda t}</span>, where <span class="chem">N_0</span> is the mass at the time the tree died and <span class="chem">t</span> is measured in years. The half-life of carbon-14 is 5730 years.<br>(a) Show that <span class="chem">lambda = ln 2 / 5730</span>, and find <span class="chem">lambda</span> correct to 3 significant figures. <strong>[2]</strong><br>(b) A wooden tool contains 37% of the carbon-14 that it contained when the tree died. Estimate the age of the tool, correct to 3 significant figures. <strong>[3]</strong><br>(c) The laboratory says that the 37% figure could be wrong by up to 2 percentage points in either direction. Find the range of possible ages of the tool, and the width of this range to the nearest 10 years. <strong>[3]</strong></p>
      stem: "<p>枯れた木片に含まれる炭素 14 の質量は <span class=\"chem\">N = N_0 e^{-lambda t}</span> に従って減少する。ここで <span class=\"chem\">N_0</span> は木が枯れたときの質量であり、<span class=\"chem\">t</span> の単位は年である。炭素 14 の半減期は 5730 年である。<br>(a) <span class=\"chem\">lambda = ln 2 / 5730</span> を示し (Show that)、<span class=\"chem\">lambda</span> を有効数字 3 桁で求めなさい (Find)。 <strong>[2]</strong><br>(b) ある木製の道具には、木が枯れたときの 37% の炭素 14 が含まれている。この道具の年代を有効数字 3 桁で推定しなさい (Estimate)。 <strong>[3]</strong><br>(c) 研究所によると、37% という値は上下どちらにも最大 2 パーセントポイントずれている可能性がある。この道具の年代として考えられる範囲と、その範囲の幅を 10 年単位で求めなさい (Find)。 <strong>[3]</strong></p>",
      hints: [
        // EN: Decode: “half-life” is a condition that fixes <span class="chem">lambda</span>; “37% of the carbon-14” means <span class="chem">N = 0.37N_0</span>; “±2 percentage points” means 35% and 39%, and you must work out which of these gives the older age.
        "解読：「半減期」は <span class=\"chem\">lambda</span> を決める条件です。「炭素 14 の 37%」は <span class=\"chem\">N = 0.37N_0</span> を意味します。「±2 パーセントポイント」は 35% と 39% を意味し、どちらが古い年代になるかを考える必要があります。",
        // EN: For (a), put <span class="chem">N = N_0 / 2</span> when <span class="chem">t = 5730</span>.
        "(a) では、<span class=\"chem\">t = 5730</span> のとき <span class=\"chem\">N = N_0 / 2</span> とおきます。",
        // EN: For (b), <span class="chem">N_0</span> cancels: solve <span class="chem">0.37 = e^{-lambda t}</span>.
        "(b) では <span class=\"chem\">N_0</span> が消えます：<span class=\"chem\">0.37 = e^{-lambda t}</span> を解きます。",
        // EN: For (c), repeat (b) with 0.35 and 0.39. Less carbon-14 remaining means more time has passed.
        "(c) では、0.35 と 0.39 で (b) を繰り返します。残っている炭素 14 が少ないほど、長い時間が経過しています。",
      ],
      // EN: <p><strong>Decode:</strong> the half-life gives the decay constant, each percentage gives an equation <span class="chem">p = e^{-lambda t}</span>, and the measurement error becomes a pair of ages. A ±2-point error in the percentage gives an age uncertainty of nearly 900 years.</p>
      solution: "<p><strong>解読：</strong>半減期から崩壊定数が決まり、各百分率から方程式 <span class=\"chem\">p = e^{-lambda t}</span> が得られ、測定誤差は二つの年代の組になります。百分率の ±2 ポイントの誤差は、900 年近い年代の不確かさにつながります。</p>",
      // EN: <div class="worked__math">(a) <span class="frac"><span>1</span><span>2</span></span><i>N</i><sub>0</sub> = <i>N</i><sub>0</sub>e<sup>−5730λ</sup> ⇒ −5730λ = ln <span class="frac"><span>1</span><span>2</span></span> = −ln 2 ⇒ λ = <span class="frac"><span>ln 2</span><span>5730</span></span> = <b>1.21 × 10<sup>−4</sup></b>.</div><div class="worked__math">(b) 0.37 = e<sup>−λ<i>t</i></sup> ⇒ <i>t</i> = <span class="frac"><span>ln(1/0.37)</span><span>λ</span></span> = 8219.1… ≈ <b>8220 years</b>.</div><div class="worked__math">(c) More carbon-14 left means a younger tool. 39% gives <i>t</i> = 7783.9…, and 35% gives <i>t</i> = 8678.5…. So 7780 ≲ <i>t</i> ≲ 8680 years, a range of width about <b>890 years</b> (894.6…).</div>
      answer: "<div class=\"worked__math\">(a) <span class=\"frac\"><span>1</span><span>2</span></span><i>N</i><sub>0</sub> = <i>N</i><sub>0</sub>e<sup>−5730λ</sup>  ⇒  −5730λ = ln <span class=\"frac\"><span>1</span><span>2</span></span> = −ln 2  ⇒  λ = <span class=\"frac\"><span>ln 2</span><span>5730</span></span> = <b>1.21 × 10<sup>−4</sup></b>.</div><div class=\"worked__math\">(b) 0.37 = e<sup>−λ<i>t</i></sup>  ⇒  <i>t</i> = <span class=\"frac\"><span>ln(1/0.37)</span><span>λ</span></span> = 8219.1… ≈ <b>8220 年</b>。</div><div class=\"worked__math\">(c) 炭素 14 が多く残っているほど道具は新しい。39% では <i>t</i> = 7783.9…、35% では <i>t</i> = 8678.5…。よって 7780 ≲ <i>t</i> ≲ 8680 年で、範囲の幅は約 <b>890 年</b>（894.6…）。</div>",
      markscheme: [
        // EN: M1: (a) Sets N_0/2 = N_0 e^(−5730λ) and takes ln: −5730λ = −ln 2. AG: λ = ln 2 / 5730; the given line itself earns no mark.
        "M1：(a) N_0/2 = N_0 e^(−5730λ) とおき ln をとる：−5730λ = −ln 2。AG：λ = ln 2 / 5730。与えられた式を書くだけでは得点にならない。",
        // EN: A1: λ = 1.21 × 10^(−4) (0.000120968…).
        "A1：λ = 1.21 × 10^(−4)（0.000120968…）。",
        // EN: M1: (b) Sets 0.37 = e^(−λt).
        "M1：(b) 0.37 = e^(−λt) とおく。",
        // EN: A1: t = ln(1/0.37)/λ (or −ln 0.37/λ).
        "A1：t = ln(1/0.37)/λ（または −ln 0.37/λ）。",
        // EN: A1: t = 8220 years (8219.1…).
        "A1：t = 8220 年（8219.1…）。",
        // EN: R1: (c) Pairs the larger percentage (39%) with the younger age and the smaller percentage (35%) with the older age.
        "R1：(c) 大きい方の百分率（39%）を新しい年代に、小さい方の百分率（35%）を古い年代に対応させる。",
        // EN: A1: Range 7780 to 8680 years (7783.9… to 8678.5…).
        "A1：範囲 7780 から 8680 年（7783.9… から 8678.5…）。",
        // EN: A1: Width 890 years (894.6…; accept 895 or 900 from rounded ages).
        "A1：幅 890 年（894.6…。丸めた年代からの 895 または 900 も可）。",
      ],
    },

    // ── t1-2-q043 · short · challenge · SL · SL 1.9 · 8 marks
    "t1-2-q043": {
      // EN: <p>A bank pays interest at a nominal annual rate of 100%, compounded <span class="chem">n</span> times per year, so that an investment of $1 is worth <span class="chem">(1 + 1/n)^n</span> dollars after one year.<br>(a) Use the binomial theorem to show that the first four terms of the expansion of <span class="chem">(1 + 1/n)^n</span> are <span class="chem">1 + 1 + (n - 1)/(2n) + ((n - 1)(n - 2))/(6n^2)</span>. <strong>[3]</strong><br>(b) For monthly compounding, <span class="chem">n = 12</span>. Calculate the sum of these four terms, and use your GDC to find the value of <span class="chem">(1 + 1/12)^{12}</span>. Give both answers correct to 4 significant figures. <strong>[3]</strong><br>(c) Explain why the four-term sum is less than <span class="chem">(1 + 1/n)^n</span> for every <span class="chem">n &gt;= 4</span>. <strong>[1]</strong><br>(d) Write down the limit of the four-term sum as <span class="chem">n</span> becomes very large. <strong>[1]</strong></p>
      stem: "<p>ある銀行は名目年利率 100%、年 <span class=\"chem\">n</span> 回の複利で利息を支払うので、$1 の投資は 1 年後に <span class=\"chem\">(1 + 1/n)^n</span> ドルになる。<br>(a) 二項定理を用いて、<span class=\"chem\">(1 + 1/n)^n</span> の展開式の初めの四項が <span class=\"chem\">1 + 1 + (n - 1)/(2n) + ((n - 1)(n - 2))/(6n^2)</span> であることを示しなさい (Show that)。 <strong>[3]</strong><br>(b) 毎月の複利では <span class=\"chem\">n = 12</span> である。これら四項の和を計算し (Calculate)、GDC を使って <span class=\"chem\">(1 + 1/12)^{12}</span> の値を求めなさい。どちらも有効数字 4 桁で答えなさい。 <strong>[3]</strong><br>(c) すべての <span class=\"chem\">n &gt;= 4</span> について、四項の和が <span class=\"chem\">(1 + 1/n)^n</span> より小さい理由を説明しなさい (Explain)。 <strong>[1]</strong><br>(d) <span class=\"chem\">n</span> が非常に大きくなるときの四項の和の極限を書きなさい (Write down)。 <strong>[1]</strong></p>",
      hints: [
        // EN: Decode: compound interest is the hook, but the question is a binomial expansion with <span class="chem">a = 1</span> and <span class="chem">b = 1/n</span>. You only need the terms for <span class="chem">r = 0, 1, 2, 3</span>.
        "解読：複利は入り口にすぎず、問題は <span class=\"chem\">a = 1</span>、<span class=\"chem\">b = 1/n</span> の二項展開です。必要なのは <span class=\"chem\">r = 0, 1, 2, 3</span> の項だけです。",
        // EN: For (a), write <span class="chem">^nC_2 = n(n - 1)/2</span> and <span class="chem">^nC_3 = n(n - 1)(n - 2)/6</span>, then cancel one factor of <span class="chem">n</span>.
        "(a) では、<span class=\"chem\">^nC_2 = n(n - 1)/2</span> と <span class=\"chem\">^nC_3 = n(n - 1)(n - 2)/6</span> と書き、<span class=\"chem\">n</span> を一つ約分します。",
        // EN: For (c), what is the sign of each term you left out?
        "(c) では、省いた各項の符号は何でしょうか？",
        // EN: For (d), divide the top and bottom of each fraction by the highest power of <span class="chem">n</span>.
        "(d) では、各分数の分子と分母を <span class=\"chem\">n</span> の最高次の累乗で割ります。",
      ],
      // EN: <p><strong>Decode:</strong> recognise <span class="chem">(1 + 1/n)^n</span> as a binomial power. Its expansion begins <span class="chem">1 + 1 + 1/2 + 1/6 + …</span> for large <span class="chem">n</span>, which is how the number <span class="chem">e ≈ 2.718</span> arises from continuous compounding.</p>
      solution: "<p><strong>解読：</strong><span class=\"chem\">(1 + 1/n)^n</span> を二項の累乗とみなします。<span class=\"chem\">n</span> が大きいとき、その展開は <span class=\"chem\">1 + 1 + 1/2 + 1/6 + …</span> で始まり、これが連続複利から数 <span class=\"chem\">e ≈ 2.718</span> が現れるしくみです。</p>",
      // EN: <div class="worked__math">(a) (1 + 1/<i>n</i>)<sup><i>n</i></sup> = 1 + <sup><i>n</i></sup>C<sub>1</sub>(1/<i>n</i>) + <sup><i>n</i></sup>C<sub>2</sub>(1/<i>n</i>)<sup>2</sup> + <sup><i>n</i></sup>C<sub>3</sub>(1/<i>n</i>)<sup>3</sup> + …, with <i>n</i> × <span class="frac"><span>1</span><span><i>n</i></span></span> = 1, <span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2<i>n</i><sup>2</sup></span></span> = <span class="frac"><span><i>n</i> − 1</span><span>2<i>n</i></span></span> and <span class="frac"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6<i>n</i><sup>3</sup></span></span> = <span class="frac"><span>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6<i>n</i><sup>2</sup></span></span>.</div><div class="worked__math">(b) 1 + 1 + <span class="frac"><span>11</span><span>24</span></span> + <span class="frac"><span>110</span><span>864</span></span> = <b>2.586</b> (2.58564…); (1 + 1/12)<sup>12</sup> = <b>2.613</b> (2.61303…).</div><div class="worked__math">(c) Every term left out, <sup><i>n</i></sup>C<sub><i>r</i></sub>(1/<i>n</i>)<sup><i>r</i></sup> for <i>r</i> ≥ 4, is positive, so the four-term sum is smaller than the full expansion.</div><div class="worked__math">(d) (<i>n</i> − 1)/(2<i>n</i>) → 1/2 and (<i>n</i> − 1)(<i>n</i> − 2)/(6<i>n</i><sup>2</sup>) → 1/6, so the limit is 1 + 1 + 1/2 + 1/6 = <b>8/3</b>.</div>
      answer: "<div class=\"worked__math\">(a) (1 + 1/<i>n</i>)<sup><i>n</i></sup> = 1 + <sup><i>n</i></sup>C<sub>1</sub>(1/<i>n</i>) + <sup><i>n</i></sup>C<sub>2</sub>(1/<i>n</i>)<sup>2</sup> + <sup><i>n</i></sup>C<sub>3</sub>(1/<i>n</i>)<sup>3</sup> + …。ここで <i>n</i> × <span class=\"frac\"><span>1</span><span><i>n</i></span></span> = 1、<span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)</span><span>2<i>n</i><sup>2</sup></span></span> = <span class=\"frac\"><span><i>n</i> − 1</span><span>2<i>n</i></span></span>、<span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6<i>n</i><sup>3</sup></span></span> = <span class=\"frac\"><span>(<i>n</i> − 1)(<i>n</i> − 2)</span><span>6<i>n</i><sup>2</sup></span></span>。</div><div class=\"worked__math\">(b) 1 + 1 + <span class=\"frac\"><span>11</span><span>24</span></span> + <span class=\"frac\"><span>110</span><span>864</span></span> = <b>2.586</b>（2.58564…）、(1 + 1/12)<sup>12</sup> = <b>2.613</b>（2.61303…）。</div><div class=\"worked__math\">(c) 省いた項 <sup><i>n</i></sup>C<sub><i>r</i></sub>(1/<i>n</i>)<sup><i>r</i></sup>（<i>r</i> ≥ 4）はすべて正なので、四項の和は展開式全体より小さい。</div><div class=\"worked__math\">(d) (<i>n</i> − 1)/(2<i>n</i>) → 1/2、(<i>n</i> − 1)(<i>n</i> − 2)/(6<i>n</i><sup>2</sup>) → 1/6 なので、極限は 1 + 1 + 1/2 + 1/6 = <b>8/3</b>。</div>",
      markscheme: [
        // EN: M1: (a) Uses the general term ⁿCᵣ (1/n)^r for r = 0, 1, 2, 3.
        "M1：(a) r = 0, 1, 2, 3 について一般項 ⁿCᵣ (1/n)^r を使う。",
        // EN: A1: ⁿC₂ (1/n)^2 = n(n − 1)/(2n^2) = (n − 1)/(2n).
        "A1：ⁿC₂ (1/n)^2 = n(n − 1)/(2n^2) = (n − 1)/(2n)。",
        // EN: A1: ⁿC₃ (1/n)^3 = n(n − 1)(n − 2)/(6n^3) = (n − 1)(n − 2)/(6n^2). AG: the four terms are as given; the given line itself earns no mark.
        "A1：ⁿC₃ (1/n)^3 = n(n − 1)(n − 2)/(6n^3) = (n − 1)(n − 2)/(6n^2)。AG：四項は与えられたとおり。与えられた式を書くだけでは得点にならない。",
        // EN: M1: (b) Substitutes n = 12 into the four terms: 1 + 1 + 11/24 + 110/864.
        "M1：(b) 四つの項に n = 12 を代入する：1 + 1 + 11/24 + 110/864。",
        // EN: A1: Four-term sum = 2.586.
        "A1：四項の和 = 2.586。",
        // EN: A1: (1 + 1/12)^12 = 2.613.
        "A1：(1 + 1/12)^12 = 2.613。",
        // EN: R1: (c) All the omitted terms ⁿCᵣ (1/n)^r (r ≥ 4) are positive, so the full expansion is larger.
        "R1：(c) 省いた項 ⁿCᵣ (1/n)^r（r ≥ 4）はすべて正なので、展開式全体の方が大きい。",
        // EN: A1: (d) 1 + 1 + 1/2 + 1/6 = 8/3.
        "A1：(d) 1 + 1 + 1/2 + 1/6 = 8/3。",
      ],
    },

    // ── t1-2-q045 · short · foundation · SL · SL 1.5 · 3 marks
    "t1-2-q045": {
      // EN: <p>Simplify <span class="chem">(2a^3 b^{-2})^3 / (4a^{-1} b)^2</span>, where <span class="chem">a, b != 0</span>, giving your answer in the form <span class="chem">k a^p b^q</span>.</p>
      stem: "<p><span class=\"chem\">a, b != 0</span> のとき、<span class=\"chem\">(2a^3 b^{-2})^3 / (4a^{-1} b)^2</span> を簡単にし (Simplify)、<span class=\"chem\">k a^p b^q</span> の形で答えなさい。</p>",
      hints: [
        // EN: Use <span class="chem">(xy)^n = x^n y^n</span> and <span class="chem">(x^m)^n = x^{mn}</span> on each bracket.
        "各かっこに <span class=\"chem\">(xy)^n = x^n y^n</span> と <span class=\"chem\">(x^m)^n = x^{mn}</span> を使います。",
        // EN: Then divide: <span class="chem">x^m / x^n = x^{m-n}</span>. Take care with the negative indices: <span class="chem">9 - (-2) = 11</span>.
        "次に割り算をします：<span class=\"chem\">x^m / x^n = x^{m-n}</span>。負の指数に注意します：<span class=\"chem\">9 - (-2) = 11</span>。",
      ],
      // EN: <div class="worked__math">(2<i>a</i><sup>3</sup><i>b</i><sup>−2</sup>)<sup>3</sup> = 8<i>a</i><sup>9</sup><i>b</i><sup>−6</sup>, (4<i>a</i><sup>−1</sup><i>b</i>)<sup>2</sup> = 16<i>a</i><sup>−2</sup><i>b</i><sup>2</sup></div><div class="worked__math">Quotient: <span class="frac"><span>8</span><span>16</span></span> <i>a</i><sup>9−(−2)</sup> <i>b</i><sup>−6−2</sup> = <span class="frac"><span>1</span><span>2</span></span><i>a</i><sup>11</sup><i>b</i><sup>−8</sup></div>
      solution: "<div class=\"worked__math\">(2<i>a</i><sup>3</sup><i>b</i><sup>−2</sup>)<sup>3</sup> = 8<i>a</i><sup>9</sup><i>b</i><sup>−6</sup>,  (4<i>a</i><sup>−1</sup><i>b</i>)<sup>2</sup> = 16<i>a</i><sup>−2</sup><i>b</i><sup>2</sup></div><div class=\"worked__math\">商：<span class=\"frac\"><span>8</span><span>16</span></span> <i>a</i><sup>9−(−2)</sup> <i>b</i><sup>−6−2</sup> = <span class=\"frac\"><span>1</span><span>2</span></span><i>a</i><sup>11</sup><i>b</i><sup>−8</sup></div>",
      // EN: <div class="worked__math"><span class="frac"><span>8<i>a</i><sup>9</sup><i>b</i><sup>−6</sup></span><span>16<i>a</i><sup>−2</sup><i>b</i><sup>2</sup></span></span> = <b><span class="frac"><span>1</span><span>2</span></span><i>a</i><sup>11</sup><i>b</i><sup>−8</sup></b></div>
      answer: "<div class=\"worked__math\"><span class=\"frac\"><span>8<i>a</i><sup>9</sup><i>b</i><sup>−6</sup></span><span>16<i>a</i><sup>−2</sup><i>b</i><sup>2</sup></span></span> = <b><span class=\"frac\"><span>1</span><span>2</span></span><i>a</i><sup>11</sup><i>b</i><sup>−8</sup></b></div>",
      markscheme: [
        // EN: M1: Raises each bracket to its power: 8a^9 b^(−6) and 16a^(−2) b^2.
        "M1：各かっこを累乗する：8a^9 b^(−6) と 16a^(−2) b^2。",
        // EN: A1: k = 1/2.
        "A1：k = 1/2。",
        // EN: A1: a^11 b^(−8) (p = 11, q = −8).
        "A1：a^11 b^(−8)（p = 11、q = −8）。",
      ],
    },

    // ── t1-2-q046 · numeric · exam · SL · SL 1.7 · 4 marks
    "t1-2-q046": {
      // EN: <p>Solve the equation <span class="chem">2^{x+3} = 5^x</span>, giving your answer exactly in the form <span class="chem">ln p / ln q</span>, where <span class="chem">p, q</span> ∈ ℚ.</p>
      stem: "<p>方程式 <span class=\"chem\">2^{x+3} = 5^x</span> を解き、<span class=\"chem\">p, q</span> ∈ ℚ として、厳密に <span class=\"chem\">ln p / ln q</span> の形で答えなさい。</p>",
      hints: [
        // EN: Take <span class="chem">ln</span> of both sides and use the power law: <span class="chem">(x + 3) ln 2 = x ln 5</span>.
        "両辺の <span class=\"chem\">ln</span> をとり、累乗の法則を使います：<span class=\"chem\">(x + 3) ln 2 = x ln 5</span>。",
        // EN: Collect the <span class="chem">x</span> terms: <span class="chem">x(ln 5 - ln 2) = 3 ln 2</span>.
        "<span class=\"chem\">x</span> を含む項をまとめます：<span class=\"chem\">x(ln 5 - ln 2) = 3 ln 2</span>。",
        // EN: Use the log laws to write <span class="chem">3 ln 2</span> and <span class="chem">ln 5 - ln 2</span> each as a single logarithm.
        "対数の性質を使って、<span class=\"chem\">3 ln 2</span> と <span class=\"chem\">ln 5 - ln 2</span> をそれぞれ一つの対数で表します。",
      ],
      // EN: <div class="worked__math">(<i>x</i> + 3) ln 2 = <i>x</i> ln 5 <b>[M1 A1]</b></div><div class="worked__math"><i>x</i>(ln 5 − ln 2) = 3 ln 2 <b>[M1]</b></div><div class="worked__math"><i>x</i> = <b><span class="frac"><span>ln 8</span><span>ln(5/2)</span></span></b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">(<i>x</i> + 3) ln 2 = <i>x</i> ln 5   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>x</i>(ln 5 − ln 2) = 3 ln 2   <b>[M1]</b></div><div class=\"worked__math\"><i>x</i> = <b><span class=\"frac\"><span>ln 8</span><span>ln(5/2)</span></span></b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q047 · short · exam · SL · SL 1.7 · 6 marks
    "t1-2-q047": {
      // EN: <p>(a) Show that <span class="chem">log_a b × log_b c = log_a c</span> for <span class="chem">a, b, c &gt; 0</span>, <span class="chem">a, b != 1</span>. <strong>[2]</strong><br>(b) Hence find the value of <span class="chem">log_2 3 × log_3 4 × log_4 5 × … × log_{15} 16</span>. <strong>[2]</strong><br>(c) Find the integer <span class="chem">n</span> for which <span class="chem">log_2 3 × log_3 4 × … × log_n(n + 1) = 10</span>. <strong>[2]</strong></p>
      stem: "<p>(a) <span class=\"chem\">a, b, c &gt; 0</span>、<span class=\"chem\">a, b != 1</span> のとき、<span class=\"chem\">log_a b × log_b c = log_a c</span> であることを示しなさい (Show that)。 <strong>[2]</strong><br>(b) これを用いて (Hence)、<span class=\"chem\">log_2 3 × log_3 4 × log_4 5 × … × log_{15} 16</span> の値を求めなさい。 <strong>[2]</strong><br>(c) <span class=\"chem\">log_2 3 × log_3 4 × … × log_n(n + 1) = 10</span> となる整数 <span class=\"chem\">n</span> を求めなさい (Find)。 <strong>[2]</strong></p>",
      hints: [
        // EN: For (a), change both logarithms to base e (or any common base).
        "(a) では、両方の対数を底 e（または共通の任意の底）に直します。",
        // EN: For (b), each new factor “uses up” the previous argument: <span class="chem">log_2 3 × log_3 4 = log_2 4</span>, then <span class="chem">log_2 4 × log_4 5 = log_2 5</span>, and so on.
        "(b) では、新しい因数が前の真数を「使い切り」ます：<span class=\"chem\">log_2 3 × log_3 4 = log_2 4</span>、次に <span class=\"chem\">log_2 4 × log_4 5 = log_2 5</span>、以下同様です。",
        // EN: For (c), the chain ends at <span class="chem">log_2(n + 1)</span>.
        "(c) では、この連鎖は <span class=\"chem\">log_2(n + 1)</span> で終わります。",
      ],
      // EN: <p>The change-of-base result makes the product telescope: every intermediate argument cancels, leaving <span class="chem">log_2</span> of the last argument.</p>
      solution: "<p>底の変換の結果により積は次々と打ち消し合います。途中の真数はすべて消え、最後の真数の <span class=\"chem\">log_2</span> だけが残ります。</p>",
      // EN: <div class="worked__math">(a) log<sub><i>a</i></sub> <i>b</i> × log<sub><i>b</i></sub> <i>c</i> = <span class="frac"><span>ln <i>b</i></span><span>ln <i>a</i></span></span> × <span class="frac"><span>ln <i>c</i></span><span>ln <i>b</i></span></span> = <span class="frac"><span>ln <i>c</i></span><span>ln <i>a</i></span></span> = log<sub><i>a</i></sub> <i>c</i>.</div><div class="worked__math">(b) Applying (a) repeatedly, the product collapses to log<sub>2</sub> 16 = <b>4</b>.</div><div class="worked__math">(c) The product equals log<sub>2</sub>(<i>n</i> + 1) = 10, so <i>n</i> + 1 = 2<sup>10</sup> = 1024 and <b><i>n</i> = 1023</b>.</div>
      answer: "<div class=\"worked__math\">(a) log<sub><i>a</i></sub> <i>b</i> × log<sub><i>b</i></sub> <i>c</i> = <span class=\"frac\"><span>ln <i>b</i></span><span>ln <i>a</i></span></span> × <span class=\"frac\"><span>ln <i>c</i></span><span>ln <i>b</i></span></span> = <span class=\"frac\"><span>ln <i>c</i></span><span>ln <i>a</i></span></span> = log<sub><i>a</i></sub> <i>c</i>.</div><div class=\"worked__math\">(b) (a) を繰り返し使うと、積は log<sub>2</sub> 16 = <b>4</b> にまとまる。</div><div class=\"worked__math\">(c) 積は log<sub>2</sub>(<i>n</i> + 1) = 10 に等しいので、<i>n</i> + 1 = 2<sup>10</sup> = 1024、よって <b><i>n</i> = 1023</b>。</div>",
      markscheme: [
        // EN: M1: (a) Uses change of base on both factors, e.g. log_a b = ln b / ln a and log_b c = ln c / ln b.
        "M1：(a) 両方の因数に底の変換を使う。例えば log_a b = ln b / ln a、log_b c = ln c / ln b。",
        // EN: A1: The ln b terms cancel to give ln c / ln a. AG: = log_a c; the given line itself earns no mark.
        "A1：ln b の項が約分されて ln c / ln a になる。AG：= log_a c。与えられた式を書くだけでは得点にならない。",
        // EN: M1: (b) Applies the result repeatedly (or cancels in a chain) to obtain log_2 16.
        "M1：(b) 結果を繰り返し使って（または連鎖的に約分して）log_2 16 を得る。",
        // EN: A1: Value 4.
        "A1：値は 4。",
        // EN: M1: (c) Recognises the product equals log_2(n + 1) and sets log_2(n + 1) = 10.
        "M1：(c) 積が log_2(n + 1) に等しいことに気づき、log_2(n + 1) = 10 とおく。",
        // EN: A1: n + 1 = 1024, so n = 1023.
        "A1：n + 1 = 1024、よって n = 1023。",
      ],
    },

    // ── t1-2-q048 · numeric · exam · SL · SL 1.7 · 5 marks
    "t1-2-q048": {
      // EN: <p>Solve the equation <span class="chem">log_3(x + 1) - log_3(2x - 5) = 1</span>, giving the exact value of <span class="chem">x</span>.</p>
      stem: "<p>方程式 <span class=\"chem\">log_3(x + 1) - log_3(2x - 5) = 1</span> を解き、<span class=\"chem\">x</span> の厳密値を答えなさい。</p>",
      hints: [
        // EN: Use the quotient law: <span class="chem">log_3((x + 1)/(2x - 5)) = 1</span>.
        "商の法則を使います：<span class=\"chem\">log_3((x + 1)/(2x - 5)) = 1</span>。",
        // EN: Rewrite in exponential form: <span class="chem">(x + 1)/(2x - 5) = 3^1</span>, then solve the linear equation.
        "指数の形に書き直します：<span class=\"chem\">(x + 1)/(2x - 5) = 3^1</span>。それから一次方程式を解きます。",
        // EN: Check that your value makes both arguments, <span class="chem">x + 1</span> and <span class="chem">2x - 5</span>, positive.
        "求めた値で、二つの真数 <span class=\"chem\">x + 1</span> と <span class=\"chem\">2x - 5</span> がともに正になることを確認します。",
      ],
      // EN: <div class="worked__math">log<sub>3</sub><span class="frac"><span><i>x</i> + 1</span><span>2<i>x</i> − 5</span></span> = 1 <b>[M1]</b> ⇒ <span class="frac"><span><i>x</i> + 1</span><span>2<i>x</i> − 5</span></span> = 3 <b>[A1]</b></div><div class="worked__math"><i>x</i> + 1 = 6<i>x</i> − 15 <b>[M1]</b> ⇒ <b><i>x</i> = <span class="frac"><span>16</span><span>5</span></span></b> <b>[A1]</b></div><div class="worked__math">Check: <i>x</i> + 1 = 21/5 &gt; 0 and 2<i>x</i> − 5 = 7/5 &gt; 0, so the solution is valid. <b>[R1]</b></div>
      solution: "<div class=\"worked__math\">log<sub>3</sub><span class=\"frac\"><span><i>x</i> + 1</span><span>2<i>x</i> − 5</span></span> = 1   <b>[M1]</b>  ⇒  <span class=\"frac\"><span><i>x</i> + 1</span><span>2<i>x</i> − 5</span></span> = 3   <b>[A1]</b></div><div class=\"worked__math\"><i>x</i> + 1 = 6<i>x</i> − 15   <b>[M1]</b>  ⇒  <b><i>x</i> = <span class=\"frac\"><span>16</span><span>5</span></span></b>   <b>[A1]</b></div><div class=\"worked__math\">確認：<i>x</i> + 1 = 21/5 &gt; 0、2<i>x</i> − 5 = 7/5 &gt; 0 なので、この解は適する。   <b>[R1]</b></div>",
    },

    // ── t1-2-q049 · numeric · exam · SL · SL 1.7 · 5 marks
    "t1-2-q049": {
      // EN: <p>The equation <span class="chem">4^x - 2^{x+3} + 12 = 0</span> has two solutions, one of which is an integer. Find the exact value of the other solution.</p>
      stem: "<p>方程式 <span class=\"chem\">4^x - 2^{x+3} + 12 = 0</span> は二つの解をもち、そのうち一つは整数である。もう一つの解の厳密値を求めなさい (Find)。</p>",
      hints: [
        // EN: Write everything in terms of <span class="chem">u = 2^x</span>: <span class="chem">4^x = u^2</span> and <span class="chem">2^{x+3} = 8u</span>.
        "すべてを <span class=\"chem\">u = 2^x</span> で表します：<span class=\"chem\">4^x = u^2</span>、<span class=\"chem\">2^{x+3} = 8u</span>。",
        // EN: Solve <span class="chem">u^2 - 8u + 12 = 0</span> by factorising.
        "<span class=\"chem\">u^2 - 8u + 12 = 0</span> を因数分解で解きます。",
        // EN: One root gives <span class="chem">x = 1</span>. For the other, <span class="chem">2^x = 6</span>, so take logarithms of both sides.
        "一方の解から <span class=\"chem\">x = 1</span> が得られます。もう一方では <span class=\"chem\">2^x = 6</span> なので、両辺の対数をとります。",
      ],
      // EN: <div class="worked__math">Let <i>u</i> = 2<sup><i>x</i></sup>: 4<sup><i>x</i></sup> = <i>u</i><sup>2</sup>, 2<sup><i>x</i>+3</sup> = 8<i>u</i> <b>[M1]</b> ⇒ <i>u</i><sup>2</sup> − 8<i>u</i> + 12 = 0 <b>[A1]</b></div><div class="worked__math">(<i>u</i> − 2)(<i>u</i> − 6) = 0 ⇒ <i>u</i> = 2 or <i>u</i> = 6 <b>[A1]</b></div><div class="worked__math">2<sup><i>x</i></sup> = 2 ⇒ <i>x</i> = 1 (the integer solution) <b>[A1]</b>; 2<sup><i>x</i></sup> = 6 ⇒ <b><i>x</i> = log<sub>2</sub> 6</b> (= 1 + log<sub>2</sub> 3) <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>u</i> = 2<sup><i>x</i></sup> とおくと：4<sup><i>x</i></sup> = <i>u</i><sup>2</sup>、2<sup><i>x</i>+3</sup> = 8<i>u</i>   <b>[M1]</b>  ⇒  <i>u</i><sup>2</sup> − 8<i>u</i> + 12 = 0   <b>[A1]</b></div><div class=\"worked__math\">(<i>u</i> − 2)(<i>u</i> − 6) = 0  ⇒  <i>u</i> = 2 または <i>u</i> = 6   <b>[A1]</b></div><div class=\"worked__math\">2<sup><i>x</i></sup> = 2 ⇒ <i>x</i> = 1（整数解）   <b>[A1]</b>、2<sup><i>x</i></sup> = 6 ⇒ <b><i>x</i> = log<sub>2</sub> 6</b>（= 1 + log<sub>2</sub> 3）   <b>[A1]</b></div>",
    },

    // ── t1-2-q050 · numeric · exam · SL · SL 1.9 · 4 marks
    "t1-2-q050": {
      // EN: <p>Find the coefficient of <span class="chem">x^4</span> in the expansion of <span class="chem">(x - 2/x)^{10}</span>.</p>
      stem: "<p><span class=\"chem\">(x - 2/x)^{10}</span> の展開式における <span class=\"chem\">x^4</span> の係数を求めなさい (Find)。</p>",
      hints: [
        // EN: The general term is <span class="chem">^{10}C_r x^{10-r} (-2/x)^r = ^{10}C_r (-2)^r x^{10-2r}</span>.
        "一般項は <span class=\"chem\">^{10}C_r x^{10-r} (-2/x)^r = ^{10}C_r (-2)^r x^{10-2r}</span> です。",
        // EN: Solve <span class="chem">10 - 2r = 4</span> for <span class="chem">r</span>, and keep the sign of <span class="chem">(-2)^r</span>.
        "<span class=\"chem\">10 - 2r = 4</span> を <span class=\"chem\">r</span> について解き、<span class=\"chem\">(-2)^r</span> の符号に注意します。",
      ],
      // EN: <div class="worked__math"><i>T</i><sub><i>r</i>+1</sub> = <sup>10</sup>C<sub><i>r</i></sub> <i>x</i><sup>10−<i>r</i></sup>(−2<i>x</i><sup>−1</sup>)<sup><i>r</i></sup> <b>[M1]</b> = <sup>10</sup>C<sub><i>r</i></sub>(−2)<sup><i>r</i></sup><i>x</i><sup>10−2<i>r</i></sup> <b>[A1]</b></div><div class="worked__math">10 − 2<i>r</i> = 4 ⇒ <i>r</i> = 3 <b>[A1]</b></div><div class="worked__math"><sup>10</sup>C<sub>3</sub>(−2)<sup>3</sup> = 120 × (−8) = <b>−960</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>T</i><sub><i>r</i>+1</sub> = <sup>10</sup>C<sub><i>r</i></sub> <i>x</i><sup>10−<i>r</i></sup>(−2<i>x</i><sup>−1</sup>)<sup><i>r</i></sup>   <b>[M1]</b>  = <sup>10</sup>C<sub><i>r</i></sub>(−2)<sup><i>r</i></sup><i>x</i><sup>10−2<i>r</i></sup>   <b>[A1]</b></div><div class=\"worked__math\">10 − 2<i>r</i> = 4  ⇒  <i>r</i> = 3   <b>[A1]</b></div><div class=\"worked__math\"><sup>10</sup>C<sub>3</sub>(−2)<sup>3</sup> = 120 × (−8) = <b>−960</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q051 · short · exam · SL · SL 1.9 · 5 marks
    "t1-2-q051": {
      // EN: <p>(a) Expand <span class="chem">(2 - x)^4</span> in full, in ascending powers of <span class="chem">x</span>. <strong>[3]</strong><br>(b) Hence find the exact value of <span class="chem">1.9^4</span>. <strong>[2]</strong></p>
      stem: "<p>(a) <span class=\"chem\">(2 - x)^4</span> を <span class=\"chem\">x</span> の昇べきの順にすべて展開しなさい (Expand)。 <strong>[3]</strong><br>(b) これを用いて (Hence)、<span class=\"chem\">1.9^4</span> の厳密値を求めなさい。 <strong>[2]</strong></p>",
      hints: [
        // EN: Row 4 of Pascal’s triangle is 1, 4, 6, 4, 1. Pair it with <span class="chem">2^4, 2^3, 2^2, 2, 1</span> and with powers of <span class="chem">(-x)</span>; the signs alternate.
        "パスカルの三角形の 4 段目は 1, 4, 6, 4, 1 です。これを <span class=\"chem\">2^4, 2^3, 2^2, 2, 1</span> および <span class=\"chem\">(-x)</span> の累乗と組み合わせます。符号は交互に変わります。",
        // EN: For (b), choose <span class="chem">x</span> so that <span class="chem">2 - x = 1.9</span>.
        "(b) では、<span class=\"chem\">2 - x = 1.9</span> となるように <span class=\"chem\">x</span> を選びます。",
      ],
      // EN: <p>Because the expansion has only five terms, substituting <span class="chem">x = 0.1</span> gives the exact value, not an approximation.</p>
      solution: "<p>展開式は五項しかないので、<span class=\"chem\">x = 0.1</span> を代入すると近似値ではなく厳密値が得られます。</p>",
      // EN: <div class="worked__math">(a) (2 − <i>x</i>)<sup>4</sup> = 16 − 32<i>x</i> + 24<i>x</i><sup>2</sup> − 8<i>x</i><sup>3</sup> + <i>x</i><sup>4</sup>.</div><div class="worked__math">(b) 1.9 = 2 − 0.1, so 1.9<sup>4</sup> = 16 − 3.2 + 0.24 − 0.008 + 0.0001 = <b>13.0321</b>.</div>
      answer: "<div class=\"worked__math\">(a) (2 − <i>x</i>)<sup>4</sup> = 16 − 32<i>x</i> + 24<i>x</i><sup>2</sup> − 8<i>x</i><sup>3</sup> + <i>x</i><sup>4</sup>.</div><div class=\"worked__math\">(b) 1.9 = 2 − 0.1 なので、1.9<sup>4</sup> = 16 − 3.2 + 0.24 − 0.008 + 0.0001 = <b>13.0321</b>。</div>",
      markscheme: [
        // EN: M1: (a) Uses the binomial coefficients 1, 4, 6, 4, 1 with powers of 2 and (−x).
        "M1：(a) 二項係数 1, 4, 6, 4, 1 を 2 と (−x) の累乗とともに使う。",
        // EN: A1: 16 − 32x + 24x^2.
        "A1：16 − 32x + 24x^2。",
        // EN: A1: − 8x^3 + x^4.
        "A1：− 8x^3 + x^4。",
        // EN: M1: (b) Substitutes x = 0.1.
        "M1：(b) x = 0.1 を代入する。",
        // EN: A1: 13.0321.
        "A1：13.0321。",
      ],
    },

    // ── t1-2-q052 · numeric · exam · SL · SL 1.9 · 5 marks
    "t1-2-q052": {
      // EN: <p>In the expansion of <span class="chem">(3 + kx)^6</span>, where <span class="chem">k &lt; 0</span>, the coefficient of <span class="chem">x^2</span> is 540. Find the exact value of <span class="chem">k</span>.</p>
      stem: "<p><span class=\"chem\">(3 + kx)^6</span>（<span class=\"chem\">k &lt; 0</span>）の展開式において、<span class=\"chem\">x^2</span> の係数は 540 である。<span class=\"chem\">k</span> の厳密値を求めなさい (Find)。</p>",
      hints: [
        // EN: The term in <span class="chem">x^2</span> is <span class="chem">^6C_2 × 3^4 × (kx)^2</span>.
        "<span class=\"chem\">x^2</span> の項は <span class=\"chem\">^6C_2 × 3^4 × (kx)^2</span> です。",
        // EN: This gives <span class="chem">1215k^2 = 540</span>. Solve for <span class="chem">k^2</span>.
        "これより <span class=\"chem\">1215k^2 = 540</span> となります。<span class=\"chem\">k^2</span> を求めます。",
        // EN: There are two square roots. Read the stem again to choose one.
        "平方根は二つあります。問題文を読み直して一方を選びます。",
      ],
      // EN: <div class="worked__math"><sup>6</sup>C<sub>2</sub> × 3<sup>4</sup> × <i>k</i><sup>2</sup> = 540 <b>[M1]</b> ⇒ 15 × 81<i>k</i><sup>2</sup> = 1215<i>k</i><sup>2</sup> = 540 <b>[A1]</b></div><div class="worked__math"><i>k</i><sup>2</sup> = <span class="frac"><span>540</span><span>1215</span></span> = <span class="frac"><span>4</span><span>9</span></span> <b>[A1]</b></div><div class="worked__math"><i>k</i> = ±<span class="frac"><span>2</span><span>3</span></span>, and <i>k</i> &lt; 0 <b>[R1]</b>, so <b><i>k</i> = −<span class="frac"><span>2</span><span>3</span></span></b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><sup>6</sup>C<sub>2</sub> × 3<sup>4</sup> × <i>k</i><sup>2</sup> = 540   <b>[M1]</b>  ⇒  15 × 81<i>k</i><sup>2</sup> = 1215<i>k</i><sup>2</sup> = 540   <b>[A1]</b></div><div class=\"worked__math\"><i>k</i><sup>2</sup> = <span class=\"frac\"><span>540</span><span>1215</span></span> = <span class=\"frac\"><span>4</span><span>9</span></span>   <b>[A1]</b></div><div class=\"worked__math\"><i>k</i> = ±<span class=\"frac\"><span>2</span><span>3</span></span> であり、<i>k</i> &lt; 0   <b>[R1]</b>、よって <b><i>k</i> = −<span class=\"frac\"><span>2</span><span>3</span></span></b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q053 · short · exam · SL · SL 1.5, 1.7 · 6 marks
    "t1-2-q053": {
      // EN: <p>(a) Write <span class="chem">8^{2/3} × 16^{-3/4}</span> as a power of 2, and hence find its exact value. <strong>[2]</strong><br>(b) Solve <span class="chem">x^{2/3} = 16</span> for <span class="chem">x</span> ∈ ℝ, where <span class="chem">x^{2/3}</span> means <span class="chem">(x^{1/3})^2</span> and <span class="chem">x^{1/3}</span> is the real cube root of <span class="chem">x</span>. <strong>[2]</strong><br>(c) Solve <span class="chem">x^{-3/2} = 1/27</span> for <span class="chem">x &gt; 0</span>. <strong>[2]</strong></p>
      stem: "<p>(a) <span class=\"chem\">8^{2/3} × 16^{-3/4}</span> を 2 の累乗で表し、これを用いてその厳密値を求めなさい (Find)。 <strong>[2]</strong><br>(b) <span class=\"chem\">x^{2/3} = 16</span> を <span class=\"chem\">x</span> ∈ ℝ について解きなさい。ここで <span class=\"chem\">x^{2/3}</span> は <span class=\"chem\">(x^{1/3})^2</span> を意味し、<span class=\"chem\">x^{1/3}</span> は <span class=\"chem\">x</span> の実数の立方根である。 <strong>[2]</strong><br>(c) <span class=\"chem\">x^{-3/2} = 1/27</span> を <span class=\"chem\">x &gt; 0</span> の範囲で解きなさい。 <strong>[2]</strong></p>",
      hints: [
        // EN: For (a), write 8 and 16 as powers of 2 and multiply the indices.
        "(a) では、8 と 16 を 2 の累乗で表し、指数を掛けます。",
        // EN: For (b), <span class="chem">x^{2/3}</span> is the square of the cube root of <span class="chem">x</span>, and the cube root of a negative number is real. How many cube roots square to 16?
        "(b) では、<span class=\"chem\">x^{2/3}</span> は <span class=\"chem\">x</span> の立方根の 2 乗であり、負の数の立方根は実数です。2 乗して 16 になる立方根はいくつありますか？",
        // EN: For (c), take reciprocals first: <span class="chem">x^{3/2} = 27</span>.
        "(c) では、まず逆数をとります：<span class=\"chem\">x^{3/2} = 27</span>。",
      ],
      // EN: <p>In (b), raising both sides to the power <span class="chem">3/2</span> loses the negative solution. Taking the square root of <span class="chem">(x^{1/3})^2</span> keeps both signs.</p>
      solution: "<p>(b) では、両辺を <span class=\"chem\">3/2</span> 乗すると負の解が失われます。<span class=\"chem\">(x^{1/3})^2</span> の平方根をとれば、正負両方の符号が残ります。</p>",
      // EN: <div class="worked__math">(a) 8<sup>2/3</sup> = (2<sup>3</sup>)<sup>2/3</sup> = 2<sup>2</sup> and 16<sup>−3/4</sup> = (2<sup>4</sup>)<sup>−3/4</sup> = 2<sup>−3</sup>, so the product is 2<sup>−1</sup> = <b><span class="frac"><span>1</span><span>2</span></span></b>.</div><div class="worked__math">(b) (<i>x</i><sup>1/3</sup>)<sup>2</sup> = 16 ⇒ <i>x</i><sup>1/3</sup> = ±4 ⇒ <b><i>x</i> = 64 or <i>x</i> = −64</b>.</div><div class="worked__math">(c) <i>x</i><sup>3/2</sup> = 27 ⇒ <i>x</i> = 27<sup>2/3</sup> = 3<sup>2</sup> = <b>9</b>.</div>
      answer: "<div class=\"worked__math\">(a) 8<sup>2/3</sup> = (2<sup>3</sup>)<sup>2/3</sup> = 2<sup>2</sup>、16<sup>−3/4</sup> = (2<sup>4</sup>)<sup>−3/4</sup> = 2<sup>−3</sup> なので、積は 2<sup>−1</sup> = <b><span class=\"frac\"><span>1</span><span>2</span></span></b>。</div><div class=\"worked__math\">(b) (<i>x</i><sup>1/3</sup>)<sup>2</sup> = 16  ⇒  <i>x</i><sup>1/3</sup> = ±4  ⇒  <b><i>x</i> = 64 または <i>x</i> = −64</b>。</div><div class=\"worked__math\">(c) <i>x</i><sup>3/2</sup> = 27  ⇒  <i>x</i> = 27<sup>2/3</sup> = 3<sup>2</sup> = <b>9</b>.</div>",
      markscheme: [
        // EN: M1: (a) Writes 8^(2/3) = 2^2 and 16^(−3/4) = 2^(−3).
        "M1：(a) 8^(2/3) = 2^2、16^(−3/4) = 2^(−3) と書く。",
        // EN: A1: 2^(−1) = 1/2.
        "A1：2^(−1) = 1/2。",
        // EN: M1: (b) Writes x^(2/3) = (x^(1/3))^2 = 16, so x^(1/3) = ±4.
        "M1：(b) x^(2/3) = (x^(1/3))^2 = 16 と書き、x^(1/3) = ±4 とする。",
        // EN: A1: x = 64 or x = −64 (both needed).
        "A1：x = 64 または x = −64（両方必要）。",
        // EN: M1: (c) Inverts to x^(3/2) = 27 (or raises both sides to the power −2/3).
        "M1：(c) 逆数をとって x^(3/2) = 27 とする（または両辺を −2/3 乗する）。",
        // EN: A1: x = 9.
        "A1：x = 9。",
      ],
    },

    // ── t1-2-q060 · numeric · foundation · SL · SL 1.9 · 3 marks
    "t1-2-q060": {
      // EN: <p>Use Pascal’s triangle to find the coefficient of <span class="chem">a^2 b^4</span> in the expansion of <span class="chem">(a + 2b)^6</span>.</p>
      stem: "<p>パスカルの三角形を使って、<span class=\"chem\">(a + 2b)^6</span> の展開式における <span class=\"chem\">a^2 b^4</span> の係数を求めなさい (Find)。</p>",
      hints: [
        // EN: Row 6 of Pascal’s triangle is 1, 6, 15, 20, 15, 6, 1.
        "パスカルの三角形の 6 段目は 1, 6, 15, 20, 15, 6, 1 です。",
        // EN: The term with <span class="chem">b^4</span> uses the coefficient <span class="chem">^6C_4 = 15</span> and the factor <span class="chem">(2b)^4</span>, not just <span class="chem">b^4</span>.
        "<span class=\"chem\">b^4</span> を含む項では、係数 <span class=\"chem\">^6C_4 = 15</span> と因数 <span class=\"chem\">(2b)^4</span> を使います。<span class=\"chem\">b^4</span> だけではありません。",
      ],
      // EN: <div class="worked__math">Row 6: 1, 6, 15, 20, 15, 6, 1 <b>[M1]</b></div><div class="worked__math">Term in <i>a</i><sup>2</sup><i>b</i><sup>4</sup>: 15 × <i>a</i><sup>2</sup> × (2<i>b</i>)<sup>4</sup> <b>[A1]</b> = 15 × 16 <i>a</i><sup>2</sup><i>b</i><sup>4</sup> = <b>240</b><i>a</i><sup>2</sup><i>b</i><sup>4</sup> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">6 段目：1, 6, 15, 20, 15, 6, 1   <b>[M1]</b></div><div class=\"worked__math\"><i>a</i><sup>2</sup><i>b</i><sup>4</sup> の項：15 × <i>a</i><sup>2</sup> × (2<i>b</i>)<sup>4</sup>   <b>[A1]</b>  = 15 × 16 <i>a</i><sup>2</sup><i>b</i><sup>4</sup> = <b>240</b><i>a</i><sup>2</sup><i>b</i><sup>4</sup>   <b>[A1]</b></div>",
    },

    // ── t1-2-q054 · numeric · challenge · SL · SL 1.7 · 5 marks
    "t1-2-q054": {
      // EN: <p>Solve the equation <span class="chem">log_9 x = log_3(x - 6)</span>.</p>
      stem: "<p>方程式 <span class=\"chem\">log_9 x = log_3(x - 6)</span> を解きなさい。</p>",
      hints: [
        // EN: Decode: the bases differ (9 and 3), so change base first. The algebra will produce two candidates, and the domain of <span class="chem">log_3(x - 6)</span> decides which one survives.
        "解読：底が異なる（9 と 3）ので、まず底を変換します。式変形で二つの候補が得られ、<span class=\"chem\">log_3(x - 6)</span> の定義域によってどちらが残るかが決まります。",
        // EN: Change of base: <span class="chem">log_9 x = log_3 x / log_3 9 = (1/2) log_3 x = log_3 sqrt(x)</span>.
        "底の変換：<span class=\"chem\">log_9 x = log_3 x / log_3 9 = (1/2) log_3 x = log_3 sqrt(x)</span>。",
        // EN: So <span class="chem">sqrt(x) = x - 6</span>. Square both sides (or let <span class="chem">s = sqrt(x)</span>) and solve the quadratic.
        "よって <span class=\"chem\">sqrt(x) = x - 6</span> です。両辺を 2 乗し（または <span class=\"chem\">s = sqrt(x)</span> とおき）、二次方程式を解きます。",
        // EN: Check each candidate in <span class="chem">x - 6 &gt; 0</span>.
        "各候補が <span class=\"chem\">x - 6 &gt; 0</span> を満たすか確認します。",
      ],
      // EN: <p><strong>Decode:</strong> match the bases, remove the logs, then use the domain to reject a candidate.</p><div class="worked__math">log<sub>9</sub> <i>x</i> = <span class="frac"><span>log<sub>3</sub> <i>x</i></span><span>2</span></span> = log<sub>3</sub> √<i>x</i> <b>[M1]</b> ⇒ √<i>x</i> = <i>x</i> − 6 <b>[A1]</b></div><div class="worked__math"><i>x</i> = (<i>x</i> − 6)<sup>2</sup> ⇒ <i>x</i><sup>2</sup> − 13<i>x</i> + 36 = 0 ⇒ (<i>x</i> − 4)(<i>x</i> − 9) = 0 <b>[M1]</b></div><div class="worked__math"><i>x</i> = 4 gives <i>x</i> − 6 = −2 &lt; 0, so reject it <b>[R1]</b>; <b><i>x</i> = 9</b> <b>[A1]</b></div>
      solution: "<p><strong>解読：</strong>底をそろえて対数を外し、定義域を使って候補を一つ除外します。</p><div class=\"worked__math\">log<sub>9</sub> <i>x</i> = <span class=\"frac\"><span>log<sub>3</sub> <i>x</i></span><span>2</span></span> = log<sub>3</sub> √<i>x</i>   <b>[M1]</b>  ⇒  √<i>x</i> = <i>x</i> − 6   <b>[A1]</b></div><div class=\"worked__math\"><i>x</i> = (<i>x</i> − 6)<sup>2</sup>  ⇒  <i>x</i><sup>2</sup> − 13<i>x</i> + 36 = 0  ⇒  (<i>x</i> − 4)(<i>x</i> − 9) = 0   <b>[M1]</b></div><div class=\"worked__math\"><i>x</i> = 4 では <i>x</i> − 6 = −2 &lt; 0 となるので除外する   <b>[R1]</b>、<b><i>x</i> = 9</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q055 · numeric · challenge · SL · SL 1.9 · 6 marks
    "t1-2-q055": {
      // EN: <p>In the expansion of <span class="chem">(x^2 + a/x)^9</span>, where <span class="chem">a &gt; 0</span>, the coefficient of <span class="chem">x^3</span> is six times the coefficient of <span class="chem">x^9</span>. Find the value of <span class="chem">a</span>.</p>
      stem: "<p><span class=\"chem\">(x^2 + a/x)^9</span>（<span class=\"chem\">a &gt; 0</span>）の展開式において、<span class=\"chem\">x^3</span> の係数は <span class=\"chem\">x^9</span> の係数の六倍である。<span class=\"chem\">a</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: two different terms of the same expansion are compared. Find which value of <span class="chem">r</span> gives <span class="chem">x^3</span> and which gives <span class="chem">x^9</span>, then write one equation in <span class="chem">a</span>.
        "解読：同じ展開式の異なる二つの項を比べています。どの <span class=\"chem\">r</span> の値で <span class=\"chem\">x^3</span>、どの値で <span class=\"chem\">x^9</span> になるかを調べ、<span class=\"chem\">a</span> についての方程式を一つ立てます。",
        // EN: The general term is <span class="chem">^9C_r (x^2)^{9-r} (a/x)^r = ^9C_r a^r x^{18-3r}</span>.
        "一般項は <span class=\"chem\">^9C_r (x^2)^{9-r} (a/x)^r = ^9C_r a^r x^{18-3r}</span> です。",
        // EN: For <span class="chem">x^9</span>, <span class="chem">r = 3</span>; for <span class="chem">x^3</span>, <span class="chem">r = 5</span>. Then <span class="chem">^9C_5 a^5 = 6 × ^9C_3 a^3</span>.
        "<span class=\"chem\">x^9</span> では <span class=\"chem\">r = 3</span>、<span class=\"chem\">x^3</span> では <span class=\"chem\">r = 5</span> です。すると <span class=\"chem\">^9C_5 a^5 = 6 × ^9C_3 a^3</span> となります。",
      ],
      // EN: <p><strong>Decode:</strong> two target powers mean two values of <i>r</i>; the given ratio links their coefficients.</p><div class="worked__math"><i>T</i><sub><i>r</i>+1</sub> = <sup>9</sup>C<sub><i>r</i></sub> <i>a</i><sup><i>r</i></sup> <i>x</i><sup>18−3<i>r</i></sup> <b>[M1 A1]</b></div><div class="worked__math"><i>x</i><sup>9</sup>: <i>r</i> = 3, coefficient 84<i>a</i><sup>3</sup>; <i>x</i><sup>3</sup>: <i>r</i> = 5, coefficient 126<i>a</i><sup>5</sup> <b>[A1]</b></div><div class="worked__math">126<i>a</i><sup>5</sup> = 6 × 84<i>a</i><sup>3</sup> <b>[M1]</b> ⇒ <i>a</i><sup>2</sup> = <span class="frac"><span>504</span><span>126</span></span> = 4 <b>[A1]</b></div><div class="worked__math"><i>a</i> &gt; 0, so <b><i>a</i> = 2</b> <b>[A1]</b></div>
      solution: "<p><strong>解読：</strong>目標の累乗が二つなので <i>r</i> の値も二つあり、与えられた比がそれらの係数を結びつけます。</p><div class=\"worked__math\"><i>T</i><sub><i>r</i>+1</sub> = <sup>9</sup>C<sub><i>r</i></sub> <i>a</i><sup><i>r</i></sup> <i>x</i><sup>18−3<i>r</i></sup>   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>x</i><sup>9</sup>：<i>r</i> = 3、係数 84<i>a</i><sup>3</sup>。<i>x</i><sup>3</sup>：<i>r</i> = 5、係数 126<i>a</i><sup>5</sup>   <b>[A1]</b></div><div class=\"worked__math\">126<i>a</i><sup>5</sup> = 6 × 84<i>a</i><sup>3</sup>   <b>[M1]</b>  ⇒  <i>a</i><sup>2</sup> = <span class=\"frac\"><span>504</span><span>126</span></span> = 4   <b>[A1]</b></div><div class=\"worked__math\"><i>a</i> &gt; 0 なので <b><i>a</i> = 2</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q056 · short · challenge · SL · SL 1.5, 1.7 · 6 marks
    "t1-2-q056": {
      // EN: <p>Find the values of <span class="chem">x</span> and <span class="chem">y</span> that satisfy both <span class="chem">2^x × 3^y = 72</span> and <span class="chem">2^y × 3^x = 108</span>.</p>
      stem: "<p><span class=\"chem\">2^x × 3^y = 72</span> と <span class=\"chem\">2^y × 3^x = 108</span> をともに満たす <span class=\"chem\">x</span> と <span class=\"chem\">y</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: the two equations are symmetric, with the roles of 2 and 3 swapped. Multiplying and dividing them gives equations in <span class="chem">x + y</span> and <span class="chem">x - y</span>, which are easy to solve together.
        "解読：二つの方程式は 2 と 3 の役割を入れ替えた対称な形です。掛け算と割り算をすると <span class=\"chem\">x + y</span> と <span class=\"chem\">x - y</span> についての方程式が得られ、連立して簡単に解けます。",
        // EN: Multiply: <span class="chem">2^{x+y} 3^{x+y} = 6^{x+y}</span>. Is <span class="chem">72 × 108</span> a power of 6?
        "掛け算します：<span class=\"chem\">2^{x+y} 3^{x+y} = 6^{x+y}</span>。<span class=\"chem\">72 × 108</span> は 6 の累乗でしょうか？",
        // EN: Divide the first equation by the second: <span class="chem">2^{x-y} 3^{y-x} = (2/3)^{x-y}</span>.
        "一つ目の方程式を二つ目で割ります：<span class=\"chem\">2^{x-y} 3^{y-x} = (2/3)^{x-y}</span>。",
      ],
      // EN: <p><strong>Decode:</strong> spot the symmetry and combine the equations, rather than taking logs of each one separately (which also works, but gives a messier linear system with ln 2 and ln 3 as coefficients).</p>
      solution: "<p><strong>解読：</strong>それぞれの方程式で別々に対数をとるのではなく、対称性に気づいて方程式を組み合わせます（別々に対数をとっても解けますが、ln 2 と ln 3 を係数とする、より面倒な連立一次方程式になります）。</p>",
      // EN: <div class="worked__math">Multiply: 2<sup><i>x</i>+<i>y</i></sup>3<sup><i>x</i>+<i>y</i></sup> = 6<sup><i>x</i>+<i>y</i></sup> = 72 × 108 = 7776 = 6<sup>5</sup>, so <i>x</i> + <i>y</i> = 5.</div><div class="worked__math">Divide: 2<sup><i>x</i>−<i>y</i></sup>3<sup><i>y</i>−<i>x</i></sup> = (2/3)<sup><i>x</i>−<i>y</i></sup> = 72/108 = 2/3, so <i>x</i> − <i>y</i> = 1.</div><div class="worked__math">Hence <b><i>x</i> = 3</b> and <b><i>y</i> = 2</b>.</div>
      answer: "<div class=\"worked__math\">掛け算：2<sup><i>x</i>+<i>y</i></sup>3<sup><i>x</i>+<i>y</i></sup> = 6<sup><i>x</i>+<i>y</i></sup> = 72 × 108 = 7776 = 6<sup>5</sup>、よって <i>x</i> + <i>y</i> = 5。</div><div class=\"worked__math\">割り算：2<sup><i>x</i>−<i>y</i></sup>3<sup><i>y</i>−<i>x</i></sup> = (2/3)<sup><i>x</i>−<i>y</i></sup> = 72/108 = 2/3、よって <i>x</i> − <i>y</i> = 1。</div><div class=\"worked__math\">したがって <b><i>x</i> = 3</b>、<b><i>y</i> = 2</b>。</div>",
      markscheme: [
        // EN: M1: Multiplies the equations (or takes logs of both and adds): 6^(x+y) = 7776.
        "M1：二つの方程式を掛ける（または両方の対数をとって足す）：6^(x+y) = 7776。",
        // EN: A1: x + y = 5 (7776 = 6^5).
        "A1：x + y = 5（7776 = 6^5）。",
        // EN: M1: Divides the equations (or subtracts the log equations): (2/3)^(x−y) = 72/108.
        "M1：二つの方程式を割る（または対数の方程式を引く）：(2/3)^(x−y) = 72/108。",
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
      stem: "<p><span class=\"chem\">(1 + 3x)^8 = a_0 + a_1 x + a_2 x^2 + … + a_8 x^8</span> とする。<br>(a) <span class=\"chem\">a_0 + a_1 + a_2 + … + a_8</span> の値を求めなさい (Find)。 <strong>[2]</strong><br>(b) <span class=\"chem\">a_0 - a_1 + a_2 - a_3 + … + a_8</span> の値を求めなさい (Find)。 <strong>[2]</strong><br>(c) これを用いて (Hence)、<span class=\"chem\">a_0 + a_2 + a_4 + a_6 + a_8</span> の値を求めなさい。 <strong>[2]</strong></p>",
      hints: [
        // EN: Decode: you are not asked to find any single coefficient. A sum of all the coefficients is the value of the polynomial at a well-chosen <span class="chem">x</span>.
        "解読：個々の係数を求める必要はありません。すべての係数の和は、うまく選んだ <span class=\"chem\">x</span> における多項式の値です。",
        // EN: For (a), which value of <span class="chem">x</span> makes every power <span class="chem">x^r</span> equal to 1?
        "(a) では、どの <span class=\"chem\">x</span> の値ですべての累乗 <span class=\"chem\">x^r</span> が 1 になるでしょうか？",
        // EN: For (b), which value of <span class="chem">x</span> makes the powers alternate between 1 and −1?
        "(b) では、どの <span class=\"chem\">x</span> の値で累乗が 1 と −1 を交互にとるでしょうか？",
        // EN: For (c), add the two results. What happens to <span class="chem">a_1, a_3, a_5, a_7</span>?
        "(c) では、二つの結果を足します。<span class=\"chem\">a_1, a_3, a_5, a_7</span> はどうなるでしょうか？",
      ],
      // EN: <p><strong>Decode:</strong> sums of coefficients come from substituting <span class="chem">x = 1</span> and <span class="chem">x = -1</span>; there is no need to expand.</p>
      solution: "<p><strong>解読：</strong>係数の和は <span class=\"chem\">x = 1</span> と <span class=\"chem\">x = -1</span> を代入すれば得られます。展開する必要はありません。</p>",
      // EN: <div class="worked__math">(a) Put <i>x</i> = 1: 4<sup>8</sup> = <b>65536</b>.</div><div class="worked__math">(b) Put <i>x</i> = −1: (−2)<sup>8</sup> = <b>256</b>.</div><div class="worked__math">(c) Adding (a) and (b) doubles the even-index coefficients and cancels the odd ones: <span class="frac"><span>65536 + 256</span><span>2</span></span> = <b>32896</b>.</div>
      answer: "<div class=\"worked__math\">(a) <i>x</i> = 1 を代入：4<sup>8</sup> = <b>65536</b>。</div><div class=\"worked__math\">(b) <i>x</i> = −1 を代入：(−2)<sup>8</sup> = <b>256</b>。</div><div class=\"worked__math\">(c) (a) と (b) を足すと、添字が偶数の係数は 2 倍になり、奇数の係数は打ち消し合う：<span class=\"frac\"><span>65536 + 256</span><span>2</span></span> = <b>32896</b>。</div>",
      markscheme: [
        // EN: M1: (a) Substitutes x = 1 into both sides.
        "M1：(a) 両辺に x = 1 を代入する。",
        // EN: A1: 4^8 = 65536.
        "A1：4^8 = 65536。",
        // EN: M1: (b) Substitutes x = −1 into both sides.
        "M1：(b) 両辺に x = −1 を代入する。",
        // EN: A1: (−2)^8 = 256.
        "A1：(−2)^8 = 256。",
        // EN: M1: (c) Adds the results of (a) and (b), so that the odd-index terms cancel, and halves.
        "M1：(c) (a) と (b) の結果を足して添字が奇数の項を打ち消し、半分にする。",
        // EN: A1: 32896.
        "A1：32896。",
      ],
    },

    // ── t1-2-q058 · numeric · challenge · SL · SL 1.7 · 4 marks
    "t1-2-q058": {
      // EN: <p>The real numbers <span class="chem">a</span> and <span class="chem">b</span> satisfy <span class="chem">3^a = 5</span> and <span class="chem">5^b = 9</span>. Find the value of the product <span class="chem">ab</span>.</p>
      stem: "<p>実数 <span class=\"chem\">a</span>、<span class=\"chem\">b</span> は <span class=\"chem\">3^a = 5</span> と <span class=\"chem\">5^b = 9</span> を満たす。積 <span class=\"chem\">ab</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: neither <span class="chem">a</span> nor <span class="chem">b</span> has a simple exact value, but their product does. Look for a way to combine the two equations rather than solving each one.
        "解読：<span class=\"chem\">a</span> も <span class=\"chem\">b</span> も簡単な厳密値はもちませんが、その積はもちます。それぞれを解くのではなく、二つの方程式を組み合わせる方法を探します。",
        // EN: Substitute the first equation into the second: <span class="chem">5^b = (3^a)^b</span>.
        "一つ目の方程式を二つ目に代入します：<span class=\"chem\">5^b = (3^a)^b</span>。",
        // EN: So <span class="chem">3^{ab} = 9</span>. (Alternatively, <span class="chem">a = log_3 5</span>, <span class="chem">b = log_5 9</span>, and change of base makes their product collapse.)
        "よって <span class=\"chem\">3^{ab} = 9</span> です。（別解：<span class=\"chem\">a = log_3 5</span>、<span class=\"chem\">b = log_5 9</span> であり、底の変換によりその積は簡単になります。）",
      ],
      // EN: <p><strong>Decode:</strong> a product of two exponents suggests the law <span class="chem">(x^a)^b = x^{ab}</span>.</p><div class="worked__math">5 = 3<sup><i>a</i></sup>, so 9 = 5<sup><i>b</i></sup> = (3<sup><i>a</i></sup>)<sup><i>b</i></sup> <b>[M1]</b> = 3<sup><i>ab</i></sup> <b>[A1]</b></div><div class="worked__math">3<sup><i>ab</i></sup> = 3<sup>2</sup> <b>[M1]</b> ⇒ <b><i>ab</i> = 2</b> <b>[A1]</b></div>
      solution: "<p><strong>解読：</strong>二つの指数の積からは、指数法則 <span class=\"chem\">(x^a)^b = x^{ab}</span> が思い浮かびます。</p><div class=\"worked__math\">5 = 3<sup><i>a</i></sup> なので 9 = 5<sup><i>b</i></sup> = (3<sup><i>a</i></sup>)<sup><i>b</i></sup>   <b>[M1]</b>  = 3<sup><i>ab</i></sup>   <b>[A1]</b></div><div class=\"worked__math\">3<sup><i>ab</i></sup> = 3<sup>2</sup>   <b>[M1]</b>  ⇒  <b><i>ab</i> = 2</b>   <b>[A1]</b></div>",
    },

    // ── t1-2-q059 · short · challenge · SL · SL 1.7 · 8 marks
    "t1-2-q059": {
      // EN: <p>Consider the equation <span class="chem">9^x - 3^{x+1} = k</span>, where <span class="chem">k</span> ∈ ℝ.<br>(a) Show that, with <span class="chem">u = 3^x</span>, the equation becomes <span class="chem">u^2 - 3u - k = 0</span>. <strong>[1]</strong><br>(b) Find the set of values of <span class="chem">k</span> for which the original equation has two distinct real solutions for <span class="chem">x</span>. <strong>[5]</strong><br>(c) Find all the values of <span class="chem">k</span> for which the original equation has exactly one real solution. <strong>[2]</strong></p>
      stem: "<p>方程式 <span class=\"chem\">9^x - 3^{x+1} = k</span>（<span class=\"chem\">k</span> ∈ ℝ）を考える。<br>(a) <span class=\"chem\">u = 3^x</span> とおくと、方程式が <span class=\"chem\">u^2 - 3u - k = 0</span> になることを示しなさい (Show that)。 <strong>[1]</strong><br>(b) 元の方程式が <span class=\"chem\">x</span> について異なる二つの実数解をもつような <span class=\"chem\">k</span> の値の範囲を求めなさい (Find)。 <strong>[5]</strong><br>(c) 元の方程式がちょうど一つの実数解をもつような <span class=\"chem\">k</span> の値をすべて求めなさい (Find)。 <strong>[2]</strong></p>",
      hints: [
        // EN: Decode: the question counts solutions for <span class="chem">x</span>, not for <span class="chem">u</span>. Only positive values of <span class="chem">u = 3^x</span> give a real <span class="chem">x</span>, so you are really asking how many positive roots the quadratic has.
        "解読：問われているのは <span class=\"chem\">u</span> ではなく <span class=\"chem\">x</span> の解の個数です。実数 <span class=\"chem\">x</span> を与えるのは正の <span class=\"chem\">u = 3^x</span> だけなので、実際には二次方程式が正の解をいくつもつかを問うています。",
        // EN: For (b), you need <span class="chem">Δ &gt; 0</span> and both roots positive: use the sum and product of the roots.
        "(b) では、<span class=\"chem\">Δ &gt; 0</span> かつ二つの解がともに正であることが必要です：解の和と積を使います。",
        // EN: For (c), there are two different ways to get exactly one positive root. Do not forget the boundary case <span class="chem">k = 0</span>, where one root is <span class="chem">u = 0</span>.
        "(c) では、正の解がちょうど一つになる場合は二通りあります。一つの解が <span class=\"chem\">u = 0</span> となる境界の場合 <span class=\"chem\">k = 0</span> を忘れないようにします。",
      ],
      // EN: <p><strong>Decode:</strong> turn the exponential equation into a quadratic in <span class="chem">u = 3^x</span>, then count positive roots. Negative or zero roots give no real <span class="chem">x</span>, so the sign conditions matter as much as the discriminant.</p>
      solution: "<p><strong>解読：</strong>指数方程式を <span class=\"chem\">u = 3^x</span> の二次方程式に直し、正の解の個数を数えます。負の解や 0 の解からは実数 <span class=\"chem\">x</span> が得られないので、符号の条件は判別式と同じくらい重要です。</p>",
      // EN: <div class="worked__math">(a) 9<sup><i>x</i></sup> = (3<sup><i>x</i></sup>)<sup>2</sup> = <i>u</i><sup>2</sup> and 3<sup><i>x</i>+1</sup> = 3 × 3<sup><i>x</i></sup> = 3<i>u</i>, so <i>u</i><sup>2</sup> − 3<i>u</i> − <i>k</i> = 0.</div><div class="worked__math">(b) Each positive root <i>u</i> gives exactly one <i>x</i> = log<sub>3</sub> <i>u</i>, so the quadratic needs two distinct positive roots: Δ = 9 + 4<i>k</i> &gt; 0 gives <i>k</i> &gt; −9/4; the sum of the roots is 3 &gt; 0; the product −<i>k</i> &gt; 0 gives <i>k</i> &lt; 0. So <b>−9/4 &lt; <i>k</i> &lt; 0</b>.</div><div class="worked__math">(c) Exactly one positive root: either a repeated positive root, <i>k</i> = −9/4 (<i>u</i> = 3/2), or roots of opposite sign or one zero root, which happens when −<i>k</i> ≤ 0, i.e. <i>k</i> ≥ 0. So <b><i>k</i> = −9/4 or <i>k</i> ≥ 0</b>.</div>
      answer: "<div class=\"worked__math\">(a) 9<sup><i>x</i></sup> = (3<sup><i>x</i></sup>)<sup>2</sup> = <i>u</i><sup>2</sup> and 3<sup><i>x</i>+1</sup> = 3 × 3<sup><i>x</i></sup> = 3<i>u</i>, so <i>u</i><sup>2</sup> − 3<i>u</i> − <i>k</i> = 0.</div><div class=\"worked__math\">(b) 正の解 <i>u</i> 一つにつき <i>x</i> = log<sub>3</sub> <i>u</i> がちょうど一つ得られるので、二次方程式は異なる二つの正の解をもつ必要がある：Δ = 9 + 4<i>k</i> &gt; 0 から <i>k</i> &gt; −9/4、解の和は 3 &gt; 0、解の積 −<i>k</i> &gt; 0 から <i>k</i> &lt; 0。よって <b>−9/4 &lt; <i>k</i> &lt; 0</b>。</div><div class=\"worked__math\">(c) 正の解がちょうど一つ：正の重解をもつ <i>k</i> = −9/4（<i>u</i> = 3/2）か、解が異符号または一方が 0 の場合で、これは −<i>k</i> ≤ 0、すなわち <i>k</i> ≥ 0 のとき。よって <b><i>k</i> = −9/4 または <i>k</i> ≥ 0</b>。</div>",
      markscheme: [
        // EN: A1: (a) Writes 9^x = (3^x)^2 = u^2 and 3^(x+1) = 3u. AG: u^2 − 3u − k = 0; the given line itself earns no mark.
        "A1：(a) 9^x = (3^x)^2 = u^2、3^(x+1) = 3u と書く。AG：u^2 − 3u − k = 0。与えられた式を書くだけでは得点にならない。",
        // EN: R1: (b) States that each positive root u gives one real x (u = 3^x > 0), so two distinct positive roots are needed.
        "R1：(b) 正の解 u 一つにつき実数 x が一つ得られる（u = 3^x > 0）ので、異なる二つの正の解が必要であると述べる。",
        // EN: M1: Sets Δ = 9 + 4k > 0.
        "M1：Δ = 9 + 4k > 0 とおく。",
        // EN: A1: k > −9/4.
        "A1：k > −9/4。",
        // EN: M1: Uses the product of the roots −k > 0 (the sum, 3, is already positive), or an equivalent sign argument.
        "M1：解の積 −k > 0 を使う（解の和 3 はすでに正）、または同等の符号の議論をする。",
        // EN: A1: −9/4 < k < 0.
        "A1：−9/4 < k < 0。",
        // EN: A1: (c) k = −9/4 (repeated root u = 3/2 > 0).
        "A1：(c) k = −9/4（重解 u = 3/2 > 0）。",
        // EN: A1: k ≥ 0 (one positive root and one root ≤ 0).
        "A1：k ≥ 0（正の解が一つと ≤ 0 の解が一つ）。",
      ],
    },

  }
});
