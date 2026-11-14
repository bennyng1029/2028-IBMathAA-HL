/* t1-3.q — ja question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't1-3.q', {
  questions: {

    // ── t1-3-q001 · numeric · foundation · AHL · AHL 1.10 · 2 marks
    "t1-3-q001": {
      // EN: <p>Evaluate <span class="chem">7P3</span>.</p>
      stem: "<p><span class=\"chem\">7P3</span> を計算しなさい。</p>",
      hints: [
        // EN: Use <span class="chem">nPr = n! / (n - r)!</span>.
        "<span class=\"chem\">nPr = n! / (n - r)!</span> を使います。",
        // EN: Compute <span class="chem">7 × 6 × 5</span>.
        "<span class=\"chem\">7 × 6 × 5</span> を計算します。",
      ],
      // EN: <div class="worked__math"><sup>7</sup>P<sub>3</sub> = <span class="frac"><span>7!</span><span>4!</span></span> = 7 × 6 × 5 = <b>210</b></div>
      solution: "<div class=\"worked__math\"><sup>7</sup>P<sub>3</sub> = <span class=\"frac\"><span>7!</span><span>4!</span></span> = 7 × 6 × 5 = <b>210</b></div>",
    },

    // ── t1-3-q002 · mcq · foundation · AHL · AHL 1.10 · 2 marks
    "t1-3-q002": {
      // EN: <p>A committee of 4 students is to be chosen from 9 volunteers. How many different committees can be formed?</p>
      stem: "<p>9 人の志願者から 4 人の委員を選ぶとき、委員会の作り方は何通りありますか？</p>",
      options: [
        // EN: 126
        "126",
        // EN: 3024
        "3024",
        // EN: 36
        "36",
        // EN: 504
        "504",
      ],
      hints: [
        // EN: Does the order of selection matter for a committee?
        "委員会の選び方では、選ぶ順序を区別しますか？",
        // EN: Compute <span class="chem">9C4 = (9 × 8 × 7 × 6) / (4 × 3 × 2 × 1)</span>.
        "<span class=\"chem\">9C4 = (9 × 8 × 7 × 6) / (4 × 3 × 2 × 1)</span> を計算します。",
      ],
      // EN: <div class="worked__math"><sup>9</sup>C<sub>4</sub> = <span class="frac"><span>9 × 8 × 7 × 6</span><span>24</span></span> = <b>126</b></div>
      solution: "<div class=\"worked__math\"><sup>9</sup>C<sub>4</sub> = <span class=\"frac\"><span>9 × 8 × 7 × 6</span><span>24</span></span> = <b>126</b></div>",
      misconception: {
        // EN (option B): 3024 is <span class="chem">9P4</span>, which counts ordered arrangements. In a committee, order does not matter, so use <span class="chem">9C4</span>.
        "1": "3024 は順序を区別する <span class=\"chem\">9P4</span> の値です。委員会では順序を区別しないので、<span class=\"chem\">9C4</span> を使います。",
        // EN (option C): Multiplying <span class="chem">9 × 4</span> does not count subsets of size 4.
        "2": "<span class=\"chem\">9 × 4</span> を掛けても 4 人の選び方の総数にはなりません。",
        // EN (option D): 504 is <span class="chem">9P3</span>, which neither matches the size nor the unordered nature of the committee.
        "3": "504 は <span class=\"chem\">9P3</span> であり、人数も順序を区別しない点も合っていません。",
      },
    },

    // ── t1-3-q003 · numeric · foundation · AHL · AHL 1.11 · 3 marks
    "t1-3-q003": {
      // EN: <p>Given that <span class="chem">(5x + 4) / ((x - 1)(x + 2)) = A / (x - 1) + B / (x + 2)</span>, find the value of <span class="chem">A</span>.</p>
      stem: "<p><span class=\"chem\">(5x + 4) / ((x - 1)(x + 2)) = A / (x - 1) + B / (x + 2)</span> が成り立つとき、<span class=\"chem\">A</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Multiply both sides by <span class="chem">(x - 1)(x + 2)</span> to get <span class="chem">5x + 4 = A(x + 2) + B(x - 1)</span>.
        "両辺に <span class=\"chem\">(x - 1)(x + 2)</span> を掛けて <span class=\"chem\">5x + 4 = A(x + 2) + B(x - 1)</span> とします。",
        // EN: Substitute <span class="chem">x = 1</span> so the <span class="chem">B</span> term becomes zero.
        "<span class=\"chem\">x = 1</span> を代入して <span class=\"chem\">B</span> の項を 0 にします。",
      ],
      // EN: <div class="worked__math">5<i>x</i> + 4 ≡ <i>A</i>(<i>x</i> + 2) + <i>B</i>(<i>x</i> − 1)</div><div class="worked__math">Set <i>x</i> = 1:  9 = 3<i>A</i>  ⇒  <b><i>A</i> = 3</b></div>
      solution: "<div class=\"worked__math\">5<i>x</i> + 4 ≡ <i>A</i>(<i>x</i> + 2) + <i>B</i>(<i>x</i> − 1)</div><div class=\"worked__math\"><i>x</i> = 1 を代入：9 = 3<i>A</i>  ⇒  <b><i>A</i> = 3</b></div>",
    },

    // ── t1-3-q004 · mcq · foundation · AHL · AHL 1.10 · 2 marks
    "t1-3-q004": {
      // EN: <p>State the set of values of <span class="chem">x</span> for which the binomial expansion of <span class="chem">(3 + 2x)^{-1}</span> is valid.</p>
      stem: "<p><span class=\"chem\">(3 + 2x)^{-1}</span> の二項展開が有効となる <span class=\"chem\">x</span> の値の範囲を述べなさい (State)。</p>",
      options: [
        // EN: <span class="chem">|x| &lt; 3/2</span>
        "<span class=\"chem\">|x| &lt; 3/2</span>",
        // EN: <span class=\"chem">|x| &lt; 1</span>
        "<span class=\"chem\">|x| &lt; 1</span>",
        // EN: <span class=\"chem">|x| &lt; 2/3</span>
        "<span class=\"chem\">|x| &lt; 2/3</span>",
        // EN: <span class="chem">|x| &lt; 3</span>
        "<span class=\"chem\">|x| &lt; 3</span>",
      ],
      hints: [
        // EN: Factor out <span class="chem">3^{-1}</span> to write <span class="chem">(1/3)(1 + (2/3)x)^{-1}</span>.
        "<span class=\"chem\">3^{-1}</span> をくくり出して <span class=\"chem\">(1/3)(1 + (2/3)x)^{-1}</span> と書きます。",
        // EN: Solve <span class="chem">|(2/3)x| &lt; 1</span>.
        "<span class=\"chem\">|(2/3)x| &lt; 1</span> を解きます。",
      ],
      // EN: <div class="worked__math">(3 + 2<i>x</i>)<sup>−1</sup> = <span class="frac"><span>1</span><span>3</span></span>(1 + <span class="frac"><span>2</span><span>3</span></span><i>x</i>)<sup>−1</sup>, valid for |<span class="frac"><span>2</span><span>3</span></span><i>x</i>| &lt; 1 ⇔ <b>|<i>x</i>| &lt; <span class="frac"><span>3</span><span>2</span></span></b></div>
      solution: "<div class=\"worked__math\">(3 + 2<i>x</i>)<sup>−1</sup> = <span class=\"frac\"><span>1</span><span>3</span></span>(1 + <span class=\"frac\"><span>2</span><span>3</span></span><i>x</i>)<sup>−1</sup>、収束範囲：|<span class=\"frac\"><span>2</span><span>3</span></span><i>x</i>| &lt; 1 ⇔ <b>|<i>x</i>| &lt; <span class=\"frac\"><span>3</span><span>2</span></span></b></div>",
      misconception: {
        // EN (option B): <span class="chem">|x| &lt; 1</span> applies to <span class="chem">(1 + x)^n</span>. Here you must first factor out 3 to get <span class="chem">(1 + (2/3)x)^{-1}</span>.
        "1": "<span class=\"chem\">|x| &lt; 1</span> は <span class=\"chem\">(1 + x)^n</span> の場合です。ここではまず 3 をくくり出して <span class=\"chem\">(1 + (2/3)x)^{-1}</span> にする必要があります。",
        // EN (option C): You inverted the fraction! Set <span class="chem">|(2/3)x| &lt; 1</span>, which gives <span class="chem">|x| &lt; 3/2</span>, not <span class="chem">2/3</span>.
        "2": "分数の逆数をとってしまいました。<span class=\"chem\">|(2/3)x| &lt; 1</span> を解くと <span class=\"chem\">2/3</span> ではなく <span class=\"chem\">|x| &lt; 3/2</span> になります。",
        // EN (option D): You forgot the factor of 2 in <span class="chem">2x</span>.
        "3": "<span class=\"chem\">2x</span> の係数 2 を忘れています。",
      },
    },

    // ── t1-3-q005 · multi · foundation · AHL · AHL 1.10 & 1.11 · 3 marks
    "t1-3-q005": {
      // EN: <p>Which of the following statements are true? Select all that apply.</p>
      stem: "<p>次の記述のうち、正しいものをすべて選びなさい。</p>",
      options: [
        // EN: <span class="chem">nCr = nPr / r!</span> for all integers <span class="chem">0 &lt;= r &lt;= n</span>.
        "すべての整数 <span class=\"chem\">0 &lt;= r &lt;= n</span> に対して <span class=\"chem\">nCr = nPr / r!</span> が成り立つ。",
        // EN: The binomial expansion of <span class="chem">(1 - 4x)^{1/2}</span> is valid for <span class="chem">|x| &lt; 4</span>.
        "<span class=\"chem\">(1 - 4x)^{1/2}</span> の二項展開は <span class=\"chem\">|x| &lt; 4</span> で有効である。",
        // EN: <span class="chem">2x / ((x - 1)(x + 1)) = 1 / (x - 1) + 1 / (x + 1)</span>.
        "<span class=\"chem\">2x / ((x - 1)(x + 1)) = 1 / (x - 1) + 1 / (x + 1)</span>。",
        // EN: The number of ways to seat 5 people in a row with 2 specific people separated is <span class="chem">5! - 4!</span>.
        "5 人を 1 列に並べるとき、特定の 2 人が隣り合わない並べ方は <span class=\"chem\">5! - 4!</span> 通りである。",
      ],
      hints: [
        // EN: Check the radius of convergence of <span class="chem">(1 - 4x)^{1/2}</span> using <span class="chem">|u| &lt; 1</span>.
        "<span class=\"chem\">|u| &lt; 1</span> を使って <span class=\"chem\">(1 - 4x)^{1/2}</span> の収束半径を確認します。",
        // EN: Add <span class="chem">1/(x - 1) + 1/(x + 1)</span> over a common denominator to verify option C.
        "選択肢 C を確かめるために <span class=\"chem\">1/(x - 1) + 1/(x + 1)</span> を通分して足してみます。",
      ],
      // EN: <p>Option A is the definition relating combinations and permutations. Option C combines to <span class="chem">((x + 1) + (x - 1)) / ((x - 1)(x + 1)) = 2x / ((x - 1)(x + 1))</span>.</p>
      solution: "<p>選択肢 A は組合せと順列の関係の定義です。選択肢 C は通分すると <span class=\"chem\">((x + 1) + (x - 1)) / ((x - 1)(x + 1)) = 2x / ((x - 1)(x + 1))</span> となります。</p>",
      misconception: {
        // EN (option B): <span class="chem">(1 - 4x)^{1/2}</span> is valid for <span class="chem">|-4x| &lt; 1</span>, which is <span class="chem">|x| &lt; 1/4</span>, not <span class="chem">|x| &lt; 4</span>.
        "1": "<span class=\"chem\">(1 - 4x)^{1/2}</span> が有効なのは <span class=\"chem\">|-4x| &lt; 1</span>、すなわち <span class=\"chem\">|x| &lt; 1/4</span> であり、<span class=\"chem\">|x| &lt; 4</span> ではありません。",
        // EN (option D): When 2 people sit together as a block, they can swap in <span class="chem">2!</span> ways, so the separated count is <span class="chem">5! - 4! × 2!</span>.
        "3": "2 人がひとまとめになるとき内部の並び替えが <span class=\"chem\">2!</span> 通りあるため、離れる並べ方は <span class=\"chem\">5! - 4! × 2!</span> 通りになります。",
      },
    },

    // ── t1-3-q006 · order · foundation · AHL · AHL 1.10 · 3 marks
    "t1-3-q006": {
      // EN: <p>Arrange the steps in the correct logical order to find the first three terms of <span class="chem">(4 + x)^{-1/2}</span>.</p>
      stem: "<p><span class=\"chem\">(4 + x)^{-1/2}</span> の最初の 3 項を求める手順を正しい論理的順序に並べ替えなさい。</p>",
      options: [
        // EN: Factor out <span class="chem">4^{-1/2} = 1/2</span> to write <span class="chem">(1/2)(1 + x/4)^{-1/2}</span>.
        "<span class=\"chem\">4^{-1/2} = 1/2</span> をくくり出して <span class=\"chem\">(1/2)(1 + x/4)^{-1/2}</span> と書く。",
        // EN: Substitute <span class="chem">n = -1/2</span> and <span class="chem">u = x/4</span> into <span class="chem">1 + nu + (n(n - 1)/2!)u^2</span>.
        "<span class=\"chem\">1 + nu + (n(n - 1)/2!)u^2</span> に <span class=\"chem\">n = -1/2</span> と <span class=\"chem\">u = x/4</span> を代入する。",
        // EN: Simplify inside the bracket to get <span class="chem">(1/2)(1 - (1/8)x + (3/128)x^2 - ...)</span>.
        "括弧内を整理して <span class=\"chem\">(1/2)(1 - (1/8)x + (3/128)x^2 - ...)</span> を得る。",
        // EN: Multiply through by <span class="chem">1/2</span> to obtain <span class="chem">1/2 - (1/16)x + (3/256)x^2 - ...</span>, valid for <span class="chem">|x| &lt; 4</span>.
        "全体に <span class=\"chem\">1/2</span> を掛けて <span class=\"chem\">1/2 - (1/16)x + (3/256)x^2 - ...</span>（<span class=\"chem\">|x| &lt; 4</span> で有効）を得る。",
      ],
      hints: [
        // EN: You cannot apply the <span class="chem">(1 + u)^n</span> formula until the constant inside the bracket is 1.
        "括弧内の定数項が 1 になるまで <span class=\"chem\">(1 + u)^n</span> の公式は使えません。",
        // EN: Multiply by the factored-out <span class="chem">4^{-1/2} = 1/2</span> at the end.
        "くくり出しておいた <span class=\"chem\">4^{-1/2} = 1/2</span> を最後に掛けます。",
      ],
      // EN: <p>Factor out <span class="chem">4^{-1/2}</span> first, apply the <span class="chem">(1 + u)^n</span> series, simplify powers of <span class="chem">u</span>, and finally distribute <span class="chem">1/2</span>.</p>
      solution: "<p>まず <span class=\"chem\">4^{-1/2}</span> をくくり出し、<span class=\"chem\">(1 + u)^n</span> の級数公式を適用して <span class=\"chem\">u</span> の累乗を整理し、最後に <span class=\"chem\">1/2</span> を掛けます。</p>",
    },

    // ── t1-3-q007 · numeric · exam · AHL · AHL 1.10 · 5 marks
    "t1-3-q007": {
      // EN: <p>Solve the equation <span class="chem">nP2 + nC2 = 45</span> for the positive integer <span class="chem">n</span>.</p>
      stem: "<p>方程式 <span class=\"chem\">nP2 + nC2 = 45</span> を正の整数 <span class=\"chem\">n</span> について解きなさい。</p>",
      hints: [
        // EN: Write <span class="chem">nP2 = n(n - 1)</span> and <span class="chem">nC2 = n(n - 1) / 2</span>.
        "<span class=\"chem\">nP2 = n(n - 1)</span>、<span class=\"chem\">nC2 = n(n - 1) / 2</span> と書き換えます。",
        // EN: Combine to get <span class="chem">(3/2) n(n - 1) = 45</span>, so <span class="chem">n(n - 1) = 30</span>.
        "まとめると <span class=\"chem\">(3/2) n(n - 1) = 45</span> となり、<span class=\"chem\">n(n - 1) = 30</span> が得られます。",
      ],
      // EN: <div class="worked__math"><i>n</i>(<i>n</i> − 1) + <span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = 45 ⇒ <span class="frac"><span>3</span><span>2</span></span><i>n</i>(<i>n</i> − 1) = 45 ⇒ <i>n</i>(<i>n</i> − 1) = 30</div><div class="worked__math"><i>n</i><sup>2</sup> − <i>n</i> − 30 = 0 ⇒ (<i>n</i> − 6)(<i>n</i> + 5) = 0 ⇒ <b><i>n</i> = 6</b> (since <i>n</i> ≥ 2)</div>
      solution: "<div class=\"worked__math\"><i>n</i>(<i>n</i> − 1) + <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = 45 ⇒ <span class=\"frac\"><span>3</span><span>2</span></span><i>n</i>(<i>n</i> − 1) = 45 ⇒ <i>n</i>(<i>n</i> − 1) = 30</div><div class=\"worked__math\"><i>n</i><sup>2</sup> − <i>n</i> − 30 = 0 ⇒ (<i>n</i> − 6)(<i>n</i> + 5) = 0 ⇒ <b><i>n</i> = 6</b> （<i>n</i> ≥ 2 より）</div>",
    },

    // ── t1-3-q008 · numeric · exam · AHL · AHL 1.10 · 5 marks
    "t1-3-q008": {
      // EN: <p>A 6-member robotics team is selected from 5 engineers and 4 programmers. How many different teams contain <strong>at least 4 engineers</strong>?</p>
      stem: "<p>5 人のエンジニアと 4 人のプログラマーから 6 人のロボットチームを選ぶとき、<strong>少なくとも 4 人のエンジニア</strong>が含まれるチームは何通りありますか？</p>",
      hints: [
        // EN: Split into mutually exclusive cases: 4 engineers + 2 programmers, or 5 engineers + 1 programmer.
        "互いに排反な場合分けをします：エンジニア 4 人 + プログラマー 2 人、またはエンジニア 5 人 + プログラマー 1 人。",
        // EN: Compute <span class="chem">5C4 × 4C2 + 5C5 × 4C1</span>.
        "<span class=\"chem\">5C4 × 4C2 + 5C5 × 4C1</span> を計算します。",
      ],
      // EN: <div class="worked__math"><sup>5</sup>C<sub>4</sub><sup>4</sup>C<sub>2</sub> + <sup>5</sup>C<sub>5</sub><sup>4</sup>C<sub>1</sub> = (5 × 6) + (1 × 4) = 30 + 4 = <b>34</b></div>
      solution: "<div class=\"worked__math\"><sup>5</sup>C<sub>4</sub><sup>4</sup>C<sub>2</sub> + <sup>5</sup>C<sub>5</sub><sup>4</sup>C<sub>1</sub> = (5 × 6) + (1 × 4) = 30 + 4 = <b>34</b></div>",
    },

    // ── t1-3-q009 · numeric · exam · AHL · AHL 1.10 · 5 marks
    "t1-3-q009": {
      // EN: <p>Eight distinct books—5 mathematics books and 3 physics books—are arranged on a shelf. In how many ways can they be arranged if no two physics books are next to each other?</p>
      stem: "<p>異なる 8 冊の本（数学の本 5 冊と物理の本 3 冊）を本棚に 1 列に並べる。どの 2 冊の物理の本も隣り合わない並べ方は何通りありますか？</p>",
      hints: [
        // EN: Use the Gap method: arrange the 5 mathematics books first in <span class="chem">5!</span> ways.
        "間に入れる方法を使います：まず 5 冊の数学の本を <span class=\"chem\">5!</span> 通りで並べます。",
        // EN: There are 6 gaps around the 5 math books. Place the 3 distinct physics books in <span class="chem">^6P_3</span> ways.
        "5 冊の数学の本の周りには 6 個のすき間があります。異なる 3 冊の物理の本を <span class=\"chem\">^6P_3</span> 通りで配置します。",
      ],
      // EN: <div class="worked__math">5! × <sup>6</sup>P<sub>3</sub> = 120 × 120 = <b>14400</b></div>
      solution: "<div class=\"worked__math\">5! × <sup>6</sup>P<sub>3</sub> = 120 × 120 = <b>14400</b></div>",
    },

    // ── t1-3-q010 · numeric · exam · AHL · AHL 1.10 · 5 marks
    "t1-3-q010": {
      // EN: <p>Find the coefficient of <span class="chem">x^2</span> in the binomial expansion of <span class="chem">(1 - 2x)^{-3}</span>.</p>
      stem: "<p><span class=\"chem\">(1 - 2x)^{-3}</span> の二項展開における <span class=\"chem\">x^2</span> の係数を求めなさい (Find)。</p>",
      hints: [
        // EN: Use the <span class="chem">x^2</span> term formula: <span class="chem">(n(n - 1)/2!) u^2</span> with <span class="chem">n = -3</span> and <span class="chem">u = -2x</span>.
        "<span class=\"chem\">x^2</span> の項の公式 <span class=\"chem\">(n(n - 1)/2!) u^2</span> に <span class=\"chem\">n = -3</span>、<span class=\"chem\">u = -2x</span> を代入します。",
        // EN: Remember <span class="chem">(-2x)^2 = +4x^2</span>.
        "<span class=\"chem\">(-2x)^2 = +4x^2</span> になることに注意しましょう。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>(−3)(−4)</span><span>2!</span></span> (−2<i>x</i>)<sup>2</sup> = 6 × 4<i>x</i><sup>2</sup> = <b>24</b><i>x</i><sup>2</sup></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>(−3)(−4)</span><span>2!</span></span> (−2<i>x</i>)<sup>2</sup> = 6 × 4<i>x</i><sup>2</sup> = <b>24</b><i>x</i><sup>2</sup></div>",
    },

    // ── t1-3-q011 · numeric · exam · AHL · AHL 1.11 · 4 marks
    "t1-3-q011": {
      // EN: <p>Given that <span class="chem">(4x + 13) / ((x - 2)(2x + 3)) = A / (x - 2) + B / (2x + 3)</span>, find the value of <span class="chem">B</span>.</p>
      stem: "<p><span class=\"chem\">(4x + 13) / ((x - 2)(2x + 3)) = A / (x - 2) + B / (2x + 3)</span> が成り立つとき、<span class=\"chem\">B</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Clear the denominator: <span class="chem">4x + 13 = A(2x + 3) + B(x - 2)</span>.
        "分母を払います：<span class=\"chem\">4x + 13 = A(2x + 3) + B(x - 2)</span>。",
        // EN: Substitute the root of <span class="chem">2x + 3 = 0</span>, that is <span class="chem">x = -3/2</span>, so the <span class="chem">A</span> term vanishes.
        "<span class=\"chem\">2x + 3 = 0</span> の解 <span class=\"chem\">x = -3/2</span> を代入して <span class=\"chem\">A</span> の項を消します。",
      ],
      // EN: <div class="worked__math">4<i>x</i> + 13 ≡ <i>A</i>(2<i>x</i> + 3) + <i>B</i>(<i>x</i> − 2)   <b>[M1]</b></div><div class="worked__math"><i>x</i> = 2 ⇒ 21 = 7<i>A</i> ⇒ <i>A</i> = 3   <b>[A1]</b></div><div class="worked__math"><i>x</i> = −<span class="frac"><span>3</span><span>2</span></span> ⇒ 7 = −<span class="frac"><span>7</span><span>2</span></span><i>B</i>   <b>[M1]</b>  ⇒  <b><i>B</i> = −2</b>   <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">4<i>x</i> + 13 ≡ <i>A</i>(2<i>x</i> + 3) + <i>B</i>(<i>x</i> − 2)   <b>[M1]</b></div><div class=\"worked__math\"><i>x</i> = 2 ⇒ 21 = 7<i>A</i> ⇒ <i>A</i> = 3   <b>[A1]</b></div><div class=\"worked__math\"><i>x</i> = −<span class=\"frac\"><span>3</span><span>2</span></span> ⇒ 7 = −<span class=\"frac\"><span>7</span><span>2</span></span><i>B</i>   <b>[M1]</b>  ⇒  <b><i>B</i> = −2</b>   <b>[A1]</b></div>",
    },

    // ── t1-3-q012 · numeric · exam · AHL · AHL 1.10 & 1.11 · 5 marks
    "t1-3-q012": {
      // EN: <p>Find the coefficient of <span class="chem">x^2</span> in the expansion of <span class="chem">(2 + x) / ((1 - x)(1 + 2x))</span> in ascending powers of <span class="chem">x</span>.</p>
      stem: "<p><span class=\"chem\">(2 + x) / ((1 - x)(1 + 2x))</span> を <span class=\"chem\">x</span> の昇べきの順に展開したときの <span class=\"chem\">x^2</span> の係数を求めなさい (Find)。</p>",
      hints: [
        // EN: Decompose into partial fractions first: <span class="chem">A / (1 - x) + B / (1 + 2x)</span>.
        "まず部分分数分解します：<span class=\"chem\">A / (1 - x) + B / (1 + 2x)</span>。",
        // EN: You should get <span class="chem">A = 1</span> and <span class="chem">B = 1</span>. Now expand <span class="chem">(1 - x)^{-1} + (1 + 2x)^{-1}</span> up to <span class="chem">x^2</span>.
        "<span class=\"chem\">A = 1</span>、<span class=\"chem\">B = 1</span> になるはずです。次に <span class=\"chem\">(1 - x)^{-1} + (1 + 2x)^{-1}</span> を <span class=\"chem\">x^2</span> の項まで展開します。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>2 + <i>x</i></span><span>(1 − <i>x</i>)(1 + 2<i>x</i>)</span></span> = (1 − <i>x</i>)<sup>−1</sup> + (1 + 2<i>x</i>)<sup>−1</sup> = (1 + <i>x</i> + <i>x</i><sup>2</sup> + …) + (1 − 2<i>x</i> + 4<i>x</i><sup>2</sup> − …) = 2 − <i>x</i> + <b>5</b><i>x</i><sup>2</sup> + …</div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>2 + <i>x</i></span><span>(1 − <i>x</i>)(1 + 2<i>x</i>)</span></span> = (1 − <i>x</i>)<sup>−1</sup> + (1 + 2<i>x</i>)<sup>−1</sup> = (1 + <i>x</i> + <i>x</i><sup>2</sup> + …) + (1 − 2<i>x</i> + 4<i>x</i><sup>2</sup> − …) = 2 − <i>x</i> + <b>5</b><i>x</i><sup>2</sup> + …</div>",
    },

    // ── t1-3-q013 · short · exam · AHL · AHL 1.10 & 1.11 · 6 marks
    "t1-3-q013": {
      // EN: <p>(a) Express <span class="chem">f(x) = (x + 4) / ((1 + x)(2 - x))</span> in partial fractions. <strong>[3 marks]</strong><br>(b) Hence find the first three terms in the expansion of <span class="chem">f(x)</span> in ascending powers of <span class="chem">x</span>, and state the set of values of <span class="chem">x</span> for which the expansion is valid. <strong>[3 marks]</strong></p>
      stem: "<p>(a) <span class=\"chem\">f(x) = (x + 4) / ((1 + x)(2 - x))</span> を部分分数分解しなさい。 <strong>[3 marks]</strong><br>(b) これを用いて (Hence)、<span class=\"chem\">f(x)</span> を <span class=\"chem\">x</span> の昇べきの順に展開した最初の 3 項を求め (Find)、その展開が有効となる <span class=\"chem\">x</span> の値の範囲を述べなさい (State)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Use <span class="chem">x = -1</span> and <span class="chem">x = 2</span> to find <span class="chem">A</span> and <span class="chem">B</span>.
        "<span class=\"chem\">x = -1</span> と <span class=\"chem\">x = 2</span> を代入して <span class=\"chem\">A</span> と <span class=\"chem\">B</span> を求めます。",
        // EN: Factor out <span class="chem">2^{-1} = 1/2</span> from <span class="chem">(2 - x)^{-1}</span> before expanding.
        "展開する前に <span class=\"chem\">(2 - x)^{-1}</span> から <span class=\"chem\">2^{-1} = 1/2</span> をくくり出します。",
      ],
      // EN: <div class="worked__math">(a)  <i>f</i>(<i>x</i>) = <span class="frac"><span>1</span><span>1 + <i>x</i></span></span> + <span class="frac"><span>2</span><span>2 − <i>x</i></span></span></div><div class="worked__math">(b)  <i>f</i>(<i>x</i>) ≈ <b>2 − <span class="frac"><span>1</span><span>2</span></span><i>x</i> + <span class="frac"><span>5</span><span>4</span></span><i>x</i><sup>2</sup></b>, valid for <b>|<i>x</i>| &lt; 1</b></div>
      solution: "<div class=\"worked__math\">(a)  <i>f</i>(<i>x</i>) = <span class=\"frac\"><span>1</span><span>1 + <i>x</i></span></span> + <span class=\"frac\"><span>2</span><span>2 − <i>x</i></span></span></div><div class=\"worked__math\">(b)  <i>f</i>(<i>x</i>) ≈ <b>2 − <span class=\"frac\"><span>1</span><span>2</span></span><i>x</i> + <span class=\"frac\"><span>5</span><span>4</span></span><i>x</i><sup>2</sup></b>、有効範囲は <b>|<i>x</i>| &lt; 1</b></div>",
      markscheme: [
        // EN: M1: Sets <span class="chem">x + 4 = A(2 - x) + B(1 + x)</span>.
        "M1：<span class=\"chem\">x + 4 = A(2 - x) + B(1 + x)</span> とおく。",
        // EN: A1: Obtains <span class="chem">A = 1</span>.
        "A1：<span class=\"chem\">A = 1</span> を求める。",
        // EN: A1: Obtains <span class="chem">B = 2</span>, giving <span class="chem">1/(1 + x) + 2/(2 - x)</span>.
        "A1：<span class=\"chem\">B = 2</span> を求め、<span class=\"chem\">1/(1 + x) + 2/(2 - x)</span> を得る。",
        // EN: M1: Expands <span class="chem">(1 + x)^{-1} = 1 - x + x^2 - ...</span> and <span class="chem">2(2 - x)^{-1} = (1 - x/2)^{-1} = 1 + x/2 + x^2/4 + ...</span>.
        "M1：<span class=\"chem\">(1 + x)^{-1} = 1 - x + x^2 - ...</span> と <span class=\"chem\">2(2 - x)^{-1} = (1 - x/2)^{-1} = 1 + x/2 + x^2/4 + ...</span> を展開する。",
        // EN: A1: Combines like terms to get <span class="chem">2 - (1/2)x + (5/4)x^2</span>.
        "A1：同類項をまとめて <span class=\"chem\">2 - (1/2)x + (5/4)x^2</span> を得る。",
        // EN: A1: States validity <span class="chem">|x| &lt; 1</span> (intersection of <span class="chem">|x| &lt; 1</span> and <span class="chem">|x| &lt; 2</span>).
        "A1：収束範囲 <span class=\"chem\">|x| &lt; 1</span>（<span class=\"chem\">|x| &lt; 1</span> と <span class=\"chem\">|x| &lt; 2</span> の共通部分）を述べる。",
      ],
      // EN: <div class="worked__math">(a)  <i>x</i> + 4 ≡ <i>A</i>(2 − <i>x</i>) + <i>B</i>(1 + <i>x</i>):  <i>x</i> = −1 ⇒ 3 = 3<i>A</i> ⇒ <i>A</i> = 1;  <i>x</i> = 2 ⇒ 6 = 3<i>B</i> ⇒ <i>B</i> = 2</div><div class="worked__math"><i>f</i>(<i>x</i>) = <span class="frac"><span>1</span><span>1 + <i>x</i></span></span> + <span class="frac"><span>2</span><span>2 − <i>x</i></span></span></div><div class="worked__math">(b)  (1 + <i>x</i>)<sup>−1</sup> = 1 − <i>x</i> + <i>x</i><sup>2</sup> − …   and   2(2 − <i>x</i>)<sup>−1</sup> = (1 − <span class="frac"><span><i>x</i></span><span>2</span></span>)<sup>−1</sup> = 1 + <span class="frac"><span><i>x</i></span><span>2</span></span> + <span class="frac"><span><i>x</i><sup>2</sup></span><span>4</span></span> + …</div><div class="worked__math"><i>f</i>(<i>x</i>) ≈ <b>2 − <span class="frac"><span>1</span><span>2</span></span><i>x</i> + <span class="frac"><span>5</span><span>4</span></span><i>x</i><sup>2</sup></b>, valid for <b>|<i>x</i>| &lt; 1</b></div>
      answer: "<div class=\"worked__math\">(a)  <i>x</i> + 4 ≡ <i>A</i>(2 − <i>x</i>) + <i>B</i>(1 + <i>x</i>):  <i>x</i> = −1 ⇒ 3 = 3<i>A</i> ⇒ <i>A</i> = 1;  <i>x</i> = 2 ⇒ 6 = 3<i>B</i> ⇒ <i>B</i> = 2</div><div class=\"worked__math\"><i>f</i>(<i>x</i>) = <span class=\"frac\"><span>1</span><span>1 + <i>x</i></span></span> + <span class=\"frac\"><span>2</span><span>2 − <i>x</i></span></span></div><div class=\"worked__math\">(b)  (1 + <i>x</i>)<sup>−1</sup> = 1 − <i>x</i> + <i>x</i><sup>2</sup> − …   と   2(2 − <i>x</i>)<sup>−1</sup> = (1 − <span class=\"frac\"><span><i>x</i></span><span>2</span></span>)<sup>−1</sup> = 1 + <span class=\"frac\"><span><i>x</i></span><span>2</span></span> + <span class=\"frac\"><span><i>x</i><sup>2</sup></span><span>4</span></span> + …</div><div class=\"worked__math\"><i>f</i>(<i>x</i>) ≈ <b>2 − <span class=\"frac\"><span>1</span><span>2</span></span><i>x</i> + <span class=\"frac\"><span>5</span><span>4</span></span><i>x</i><sup>2</sup></b>、有効範囲は <b>|<i>x</i>| &lt; 1</b></div>",
    },

    // ── t1-3-q014 · numeric · exam · AHL · AHL 1.10 · 5 marks
    "t1-3-q014": {
      // EN: <p>In the binomial expansion of <span class="chem">(1 + kx)^{-2}</span>, the coefficient of <span class="chem">x^2</span> is 48. Given that <span class="chem">k &gt; 0</span>, find the value of <span class="chem">k</span>.</p>
      stem: "<p><span class=\"chem\">(1 + kx)^{-2}</span> の二項展開において、<span class=\"chem\">x^2</span> の係数が 48 である。<span class=\"chem\">k &gt; 0</span> のとき、<span class=\"chem\">k</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Write the <span class="chem">x^2</span> term: <span class="chem">((-2)(-3)/2!)(kx)^2 = 3k^2 x^2</span>.
        "<span class=\"chem\">x^2</span> の項を書きます：<span class=\"chem\">((-2)(-3)/2!)(kx)^2 = 3k^2 x^2</span>。",
        // EN: Solve <span class="chem">3k^2 = 48</span> with <span class="chem">k &gt; 0</span>.
        "<span class=\"chem\">k &gt; 0</span> のもとで <span class=\"chem\">3k^2 = 48</span> を解きます。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>(−2)(−3)</span><span>2!</span></span>(<i>kx</i>)<sup>2</sup> = 3<i>k</i><sup>2</sup><i>x</i><sup>2</sup> ⇒ 3<i>k</i><sup>2</sup> = 48 ⇒ <i>k</i><sup>2</sup> = 16 ⇒ <b><i>k</i> = 4</b></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>(−2)(−3)</span><span>2!</span></span>(<i>kx</i>)<sup>2</sup> = 3<i>k</i><sup>2</sup><i>x</i><sup>2</sup> ⇒ 3<i>k</i><sup>2</sup> = 48 ⇒ <i>k</i><sup>2</sup> = 16 ⇒ <b><i>k</i> = 4</b></div>",
    },

    // ── t1-3-q015 · numeric · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q015": {
      // EN: <p>How many 4-digit even integers greater than 3000 can be formed using the digits <span class="chem">{1, 2, 3, 4, 5, 6}</span> if no digit may be repeated?</p>
      stem: "<p>数字 <span class=\"chem\">{1, 2, 3, 4, 5, 6}</span> を重複なく使って作れる、3000 より大きい 4 桁の偶数は何個ありますか？</p>",
      hints: [
        // EN: Decode: two places are restricted. “Greater than 3000” means the thousands digit is 3, 4, 5 or 6, and “even” means the units digit is 2, 4 or 6. Fill these restricted places first, then the two free middle places.
        "解読：制限のある位が 2 つあります。「3000 より大きい」は千の位が 3、4、5、6 のいずれか、「偶数」は一の位が 2、4、6 のいずれかという意味です。まず制限のある位を決め、そのあと自由な中央の 2 つの位を決めます。",
        // EN: The thousands digit must be in <span class="chem">{3, 4, 5, 6}</span> and the units digit must be in <span class="chem">{2, 4, 6}</span>. Because 4 and 6 appear in both sets, split into two cases!
        "千の位は <span class=\"chem\">{3, 4, 5, 6}</span>、一の位は <span class=\"chem\">{2, 4, 6}</span> でなければなりません。4 と 6 が両方に含まれるため、2 つの場合に分けましょう。",
        // EN: Case 1: thousands digit is odd (<span class="chem">{3, 5}</span>) → <span class="chem">2 × 3 × 4 × 3</span>. Case 2: thousands digit is even (<span class="chem">{4, 6}</span>) → <span class="chem">2 × 2 × 4 × 3</span>.
        "場合 1：千の位が奇数（<span class=\"chem\">{3, 5}</span>）→ <span class=\"chem\">2 × 3 × 4 × 3</span>。場合 2：千の位が偶数（<span class=\"chem\">{4, 6}</span>）→ <span class=\"chem\">2 × 2 × 4 × 3</span>。",
      ],
      // EN: <div class="worked__math">Case 1 (thousands ∈ {3, 5}): 2 × 4 × 3 × 3 = 72</div><div class="worked__math">Case 2 (thousands ∈ {4, 6}): 2 × 4 × 3 × 2 = 48</div><div class="worked__math">Total = 72 + 48 = <b>120</b></div>
      solution: "<div class=\"worked__math\">場合 1 (千の位 ∈ {3, 5}): 2 × 4 × 3 × 3 = 72</div><div class=\"worked__math\">場合 2 (千の位 ∈ {4, 6}): 2 × 4 × 3 × 2 = 48</div><div class=\"worked__math\">合計 = 72 + 48 = <b>120</b></div>",
    },

    // ── t1-3-q016 · numeric · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q016": {
      // EN: <p>Find the coefficient of <span class="chem">x^2</span> in the binomial expansion of <span class="chem">(1 + 2x) / sqrt(1 - 3x)</span>.</p>
      stem: "<p><span class=\"chem\">(1 + 2x) / sqrt(1 - 3x)</span> の二項展開における <span class=\"chem\">x^2</span> の係数を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: a square root in the denominator is a negative fractional power, <span class="chem">1/sqrt(1 - 3x) = (1 - 3x)^{-1/2}</span>, so the expression is a linear factor times an extended binomial series. Only two products of terms give <span class="chem">x^2</span>.
        "解読：分母の平方根は負の分数乗です。<span class=\"chem\">1/sqrt(1 - 3x) = (1 - 3x)^{-1/2}</span> なので、この式は 1 次式と拡張された二項級数の積です。<span class=\"chem\">x^2</span> になる項の積は 2 つだけです。",
        // EN: Rewrite as <span class="chem">(1 + 2x)(1 - 3x)^{-1/2}</span> and expand <span class="chem">(1 - 3x)^{-1/2}</span> up to <span class="chem">x^2</span>.
        "<span class=\"chem\">(1 + 2x)(1 - 3x)^{-1/2}</span> と書き直し、<span class=\"chem\">(1 - 3x)^{-1/2}</span> を <span class=\"chem\">x^2</span> の項まで展開します。",
        // EN: Multiply <span class="chem">(1 + 2x)</span> by <span class="chem">(1 + (3/2)x + (27/8)x^2 + ...)</span> and collect the <span class="chem">x^2</span> terms.
        "<span class=\"chem\">(1 + 2x)</span> に <span class=\"chem\">(1 + (3/2)x + (27/8)x^2 + ...)</span> を掛けて <span class=\"chem\">x^2</span> の項を集めます。",
      ],
      // EN: <div class="worked__math">(1 − 3<i>x</i>)<sup>−1/2</sup> = 1 + <span class="frac"><span>3</span><span>2</span></span><i>x</i> + <span class="frac"><span>27</span><span>8</span></span><i>x</i><sup>2</sup> + …</div><div class="worked__math">Coeff of <i>x</i><sup>2</sup> in (1 + 2<i>x</i>)(1 + <span class="frac"><span>3</span><span>2</span></span><i>x</i> + <span class="frac"><span>27</span><span>8</span></span><i>x</i><sup>2</sup>) = <span class="frac"><span>27</span><span>8</span></span> + 2(<span class="frac"><span>3</span><span>2</span></span>) = <b><span class="frac"><span>51</span><span>8</span></span></b> (6.375)</div>
      solution: "<div class=\"worked__math\">(1 − 3<i>x</i>)<sup>−1/2</sup> = 1 + <span class=\"frac\"><span>3</span><span>2</span></span><i>x</i> + <span class=\"frac\"><span>27</span><span>8</span></span><i>x</i><sup>2</sup> + …</div><div class=\"worked__math\">(1 + 2<i>x</i>)(1 + <span class=\"frac\"><span>3</span><span>2</span></span><i>x</i> + <span class=\"frac\"><span>27</span><span>8</span></span><i>x</i><sup>2</sup>) の <i>x</i><sup>2</sup> の係数 = <span class=\"frac\"><span>27</span><span>8</span></span> + 2(<span class=\"frac\"><span>3</span><span>2</span></span>) = <b><span class=\"frac\"><span>51</span><span>8</span></span></b> (6.375)</div>",
      // EN: 51/8 (or 6.375)
      answerDisplay: "51/8（または 6.375）",
    },

    // ── t1-3-q017 · short · challenge · AHL · AHL 1.11; SL 1.2 · 7 marks
    "t1-3-q017": {
      // EN: <p>Let <span class="chem">S_n = Σ_{r=1}^n 1 / (r(r + 1))</span>.</p><p>(a) Express <span class="chem">1 / (r(r + 1))</span> in partial fractions. <strong>[2 marks]</strong><br>(b) Find <span class="chem">S_1</span>, <span class="chem">S_2</span>, <span class="chem">S_3</span> and <span class="chem">S_4</span>, and hence conjecture a formula for <span class="chem">S_n</span> in terms of <span class="chem">n</span>. <strong>[2 marks]</strong><br>(c) Use your answer to (a) to prove your conjecture. <strong>[2 marks]</strong><br>(d) Find the least value of <span class="chem">n</span> for which <span class="chem">S_n &gt; 0.99</span>. <strong>[1 mark]</strong></p>
      stem: "<p><span class=\"chem\">S_n = Σ_{r=1}^n 1 / (r(r + 1))</span> とします。</p><p>(a) <span class=\"chem\">1 / (r(r + 1))</span> を部分分数分解しなさい (Express)。<strong>[2 marks]</strong><br>(b) <span class=\"chem\">S_1</span>、<span class=\"chem\">S_2</span>、<span class=\"chem\">S_3</span>、<span class=\"chem\">S_4</span> を求め (Find)、これを用いて (hence) <span class=\"chem\">S_n</span> を <span class=\"chem\">n</span> の式で表す公式を予想しなさい。<strong>[2 marks]</strong><br>(c) (a) の結果を用いて、予想が正しいことを証明しなさい (prove)。<strong>[2 marks]</strong><br>(d) <span class=\"chem\">S_n &gt; 0.99</span> となる最小の <span class=\"chem\">n</span> の値を求めなさい (Find)。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: the question builds one argument. Partial fractions turn each term into a difference, the first few sums suggest a pattern, and the same differences then make the whole sum collapse (“telescope”).
        "解読：この問題はひとつの議論を順に組み立てます。部分分数分解で各項を差の形にし、最初のいくつかの和から規則を見つけ、同じ差の形を使って和全体が次々に打ち消し合う（“telescope”）ことを示します。",
        // EN: For (a), put <span class="chem">r = 0</span> and <span class="chem">r = -1</span> into <span class="chem">1 ≡ A(r + 1) + Br</span>.
        "(a) では、<span class=\"chem\">1 ≡ A(r + 1) + Br</span> に <span class=\"chem\">r = 0</span> と <span class=\"chem\">r = -1</span> を代入します。",
        // EN: For (c), write out the first and last few brackets of <span class="chem">Σ(1/r - 1/(r + 1))</span> and see which parts survive.
        "(c) では、<span class=\"chem\">Σ(1/r - 1/(r + 1))</span> の最初と最後のいくつかの括弧を書き出し、どの部分が消えずに残るかを確かめます。",
        // EN: For (d), solve <span class="chem">n/(n + 1) &gt; 0.99</span>; take care with “greater than”.
        "(d) では <span class=\"chem\">n/(n + 1) &gt; 0.99</span> を解きます。「より大きい」は等号を含まないことに注意しましょう。",
      ],
      // EN: <p><b>Decode:</b> partial fractions → pattern → telescoping proof → use the formula.</p><div class="worked__math">(a)  <span class="frac"><span>1</span><span><i>r</i></span></span> − <span class="frac"><span>1</span><span><i>r</i> + 1</span></span>   (b)  <span class="frac"><span>1</span><span>2</span></span>, <span class="frac"><span>2</span><span>3</span></span>, <span class="frac"><span>3</span><span>4</span></span>, <span class="frac"><span>4</span><span>5</span></span> ⇒ <i>S</i><sub><i>n</i></sub> = <span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span></div><div class="worked__math">(c)  ∑ = 1 − <span class="frac"><span>1</span><span><i>n</i> + 1</span></span> = <span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span>   (d)  <i>n</i> &gt; 99 ⇒ <b><i>n</i> = 100</b></div>
      solution: "<p><b>解読：</b>部分分数分解 → 規則の発見 → 打ち消し合いによる証明 → 公式の利用。</p><div class=\"worked__math\">(a)  <span class=\"frac\"><span>1</span><span><i>r</i></span></span> − <span class=\"frac\"><span>1</span><span><i>r</i> + 1</span></span>   (b)  <span class=\"frac\"><span>1</span><span>2</span></span>, <span class=\"frac\"><span>2</span><span>3</span></span>, <span class=\"frac\"><span>3</span><span>4</span></span>, <span class=\"frac\"><span>4</span><span>5</span></span> ⇒ <i>S</i><sub><i>n</i></sub> = <span class=\"frac\"><span><i>n</i></span><span><i>n</i> + 1</span></span></div><div class=\"worked__math\">(c)  ∑ = 1 − <span class=\"frac\"><span>1</span><span><i>n</i> + 1</span></span> = <span class=\"frac\"><span><i>n</i></span><span><i>n</i> + 1</span></span>   (d)  <i>n</i> &gt; 99 ⇒ <b><i>n</i> = 100</b></div>",
      markscheme: [
        // EN: M1: Sets <span class="chem">1 = A(r + 1) + Br</span> (or uses cover-up).
        "M1：<span class=\"chem\">1 = A(r + 1) + Br</span> とおく（または隠蔽法を使う）。",
        // EN: A1: <span class="chem">1/(r(r + 1)) = 1/r - 1/(r + 1)</span>.
        "A1：<span class=\"chem\">1/(r(r + 1)) = 1/r - 1/(r + 1)</span>。",
        // EN: A1: <span class="chem">S_1 = 1/2</span>, <span class="chem">S_2 = 2/3</span>, <span class="chem">S_3 = 3/4</span>, <span class="chem">S_4 = 4/5</span>.
        "A1：<span class=\"chem\">S_1 = 1/2</span>、<span class=\"chem\">S_2 = 2/3</span>、<span class=\"chem\">S_3 = 3/4</span>、<span class=\"chem\">S_4 = 4/5</span>。",
        // EN: A1: Conjecture <span class="chem">S_n = n/(n + 1)</span>.
        "A1：<span class=\"chem\">S_n = n/(n + 1)</span> と予想する。",
        // EN: M1: Writes the sum as <span class="chem">(1 - 1/2) + (1/2 - 1/3) + ... + (1/n - 1/(n + 1))</span>, showing the cancellation.
        "M1：和を <span class=\"chem\">(1 - 1/2) + (1/2 - 1/3) + ... + (1/n - 1/(n + 1))</span> と書き、打ち消し合いを示す。",
        // EN: A1: <span class="chem">1 - 1/(n + 1) = n/(n + 1)</span>, which proves the conjecture.
        "A1：<span class=\"chem\">1 - 1/(n + 1) = n/(n + 1)</span> となり、予想が証明される。",
        // EN: A1: <span class="chem">n = 100</span>.
        "A1：<span class=\"chem\">n = 100</span>。",
      ],
      // EN: <div class="worked__math">(a)  <span class="frac"><span>1</span><span><i>r</i>(<i>r</i> + 1)</span></span> = <span class="frac"><span>1</span><span><i>r</i></span></span> − <span class="frac"><span>1</span><span><i>r</i> + 1</span></span></div><div class="worked__math">(b)  <i>S</i><sub>1</sub> = <span class="frac"><span>1</span><span>2</span></span>, <i>S</i><sub>2</sub> = <span class="frac"><span>2</span><span>3</span></span>, <i>S</i><sub>3</sub> = <span class="frac"><span>3</span><span>4</span></span>, <i>S</i><sub>4</sub> = <span class="frac"><span>4</span><span>5</span></span>;  conjecture <i>S</i><sub><i>n</i></sub> = <span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span></div><div class="worked__math">(c)  <i>S</i><sub><i>n</i></sub> = (1 − <span class="frac"><span>1</span><span>2</span></span>) + (<span class="frac"><span>1</span><span>2</span></span> − <span class="frac"><span>1</span><span>3</span></span>) + … + (<span class="frac"><span>1</span><span><i>n</i></span></span> − <span class="frac"><span>1</span><span><i>n</i> + 1</span></span>) = 1 − <span class="frac"><span>1</span><span><i>n</i> + 1</span></span> = <span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span></div><div class="worked__math">(d)  <span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span> &gt; 0.99 ⇔ <i>n</i> &gt; 99, so <b><i>n</i> = 100</b></div>
      answer: "<div class=\"worked__math\">(a)  <span class=\"frac\"><span>1</span><span><i>r</i>(<i>r</i> + 1)</span></span> = <span class=\"frac\"><span>1</span><span><i>r</i></span></span> − <span class=\"frac\"><span>1</span><span><i>r</i> + 1</span></span></div><div class=\"worked__math\">(b)  <i>S</i><sub>1</sub> = <span class=\"frac\"><span>1</span><span>2</span></span>, <i>S</i><sub>2</sub> = <span class=\"frac\"><span>2</span><span>3</span></span>, <i>S</i><sub>3</sub> = <span class=\"frac\"><span>3</span><span>4</span></span>, <i>S</i><sub>4</sub> = <span class=\"frac\"><span>4</span><span>5</span></span>;  予想 <i>S</i><sub><i>n</i></sub> = <span class=\"frac\"><span><i>n</i></span><span><i>n</i> + 1</span></span></div><div class=\"worked__math\">(c)  <i>S</i><sub><i>n</i></sub> = (1 − <span class=\"frac\"><span>1</span><span>2</span></span>) + (<span class=\"frac\"><span>1</span><span>2</span></span> − <span class=\"frac\"><span>1</span><span>3</span></span>) + … + (<span class=\"frac\"><span>1</span><span><i>n</i></span></span> − <span class=\"frac\"><span>1</span><span><i>n</i> + 1</span></span>) = 1 − <span class=\"frac\"><span>1</span><span><i>n</i> + 1</span></span> = <span class=\"frac\"><span><i>n</i></span><span><i>n</i> + 1</span></span></div><div class=\"worked__math\">(d)  <span class=\"frac\"><span><i>n</i></span><span><i>n</i> + 1</span></span> &gt; 0.99 ⇔ <i>n</i> &gt; 99、よって <b><i>n</i> = 100</b></div>",
    },

    // ── t1-3-q018 · numeric · exam · AHL · AHL 1.10 · 4 marks
    "t1-3-q018": {
      // EN: <p>Four couples (8 people) sit in a row of 8 chairs. In how many ways can they be seated if each couple must sit together?</p>
      stem: "<p>4 組のカップル（計 8 人）が 8 席の横一列の椅子に座る。各カップルが必ず隣り合って座るとき、座り方は何通りありますか？</p>",
      hints: [
        // EN: Glue each of the 4 couples into a single block. How many ways can you arrange the 4 blocks?
        "4 組のカップルをそれぞれ 1 つのブロックにまとめます。4 つのブロックの並べ方は何通りありますか？",
        // EN: Multiply by <span class="chem">2!</span> for each of the 4 couples: <span class="chem">4! × (2!)^4</span>.
        "4 組のカップルそれぞれについて <span class=\"chem\">2!</span> を掛けます：<span class=\"chem\">4! × (2!)^4</span>。",
      ],
      // EN: <div class="worked__math">4! × (2!)<sup>4</sup> = 24 × 16 = <b>384</b></div>
      solution: "<div class=\"worked__math\">4! × (2!)<sup>4</sup> = 24 × 16 = <b>384</b></div>",
    },

  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ja', 't1-3.q', {
  questions: {

    // ── t1-3-q019 · numeric · exam · AHL · AHL 1.10; SL 4.5 · 5 marks
    "t1-3-q019": {
      // EN: <p>In a national lottery, a player chooses 6 different main numbers from 1 to 40 and, separately, one power number from 1 to 15. The draw then selects 6 different main numbers and one power number at random.</p><p>Find the probability that a single ticket matches <strong>exactly 4</strong> of the 6 main numbers <strong>and</strong> the power number. Give your answer to 3 significant figures.</p>
      stem: "<p>ある全国宝くじでは、参加者は 1 から 40 までの数から異なるメイン番号を 6 個選び、それとは別に 1 から 15 までの数からパワー番号を一つ選ぶ。抽選では、異なるメイン番号 6 個とパワー番号一つが無作為に選ばれる。</p><p>一枚のくじが、6 個のメイン番号のうち<strong>ちょうど 4 個</strong>と一致し、<strong>かつ</strong>パワー番号とも一致する確率を求めなさい (Find)。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: this is a counting question in disguise. Probability = (number of draws that give this result) ÷ (number of possible draws), and the order of the main numbers does not matter, so use combinations.
        "解読：これは形を変えた場合の数の問題です。確率 =（この結果になる抽選の数）÷（起こりうる抽選の数）であり、メイン番号の順序は区別しないので、組合せを使います。",
        // EN: The number of possible draws is <span class="chem">40C6 × 15</span>.
        "起こりうる抽選の数は <span class=\"chem\">40C6 × 15</span> です。",
        // EN: A favourable draw contains 4 of your 6 numbers and 2 of the 34 numbers you did not choose, and exactly 1 power number: <span class="chem">6C4 × 34C2 × 1</span>.
        "条件を満たす抽選は、自分が選んだ 6 個の番号のうち 4 個と、選ばなかった 34 個の番号のうち 2 個、そしてちょうど 1 個のパワー番号を含みます：<span class=\"chem\">6C4 × 34C2 × 1</span>。",
      ],
      // EN: <p><b>Decode:</b> count equally likely draws; main numbers form an unordered selection.</p><div class="worked__math">Possible draws = <sup>40</sup>C<sub>6</sub> × 15 = 3 838 380 × 15 = 57 575 700</div><div class="worked__math">Favourable = <sup>6</sup>C<sub>4</sub> × <sup>34</sup>C<sub>2</sub> × 1 = 15 × 561 = 8415</div><div class="worked__math">P = <span class="frac"><span>8415</span><span>57 575 700</span></span> = 1.4616… × 10<sup>−4</sup> ≈ <b>1.46 × 10<sup>−4</sup></b></div>
      solution: "<p><b>解読：</b>同様に確からしい抽選の数を数えます。メイン番号は順序を区別しない選び方です。</p><div class=\"worked__math\">起こりうる抽選 = <sup>40</sup>C<sub>6</sub> × 15 = 3 838 380 × 15 = 57 575 700</div><div class=\"worked__math\">条件を満たす抽選 = <sup>6</sup>C<sub>4</sub> × <sup>34</sup>C<sub>2</sub> × 1 = 15 × 561 = 8415</div><div class=\"worked__math\">P = <span class=\"frac\"><span>8415</span><span>57 575 700</span></span> = 1.4616… × 10<sup>−4</sup> ≈ <b>1.46 × 10<sup>−4</sup></b></div>",
    },

    // ── t1-3-q020 · numeric · exam · AHL · AHL 1.10 · 4 marks
    "t1-3-q020": {
      // EN: <p>A coach chooses 4 players from a squad of <span class="chem">n</span> players to form a relay team; the order in which they are chosen does not matter. There are exactly 27 405 possible teams. Use your GDC to find <span class="chem">n</span>.</p>
      stem: "<p>コーチが <span class=\"chem\">n</span> 人の選手の中から 4 人を選んでリレーチームを作る。選ぶ順序は区別しない。作れるチームはちょうど 27 405 通りある。GDC を使って <span class=\"chem\">n</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: “order does not matter” means combinations, so the condition is <span class="chem">nC4 = 27405</span>, an equation in the positive integer <span class="chem">n</span>.
        "解読：「順序は区別しない」は組合せを意味するので、条件は <span class=\"chem\">nC4 = 27405</span> であり、正の整数 <span class=\"chem\">n</span> についての方程式です。",
        // EN: Enter <span class="chem">y = xC4</span> (nCr on your GDC) as a function and scroll through its table of values, or solve <span class="chem">x(x - 1)(x - 2)(x - 3)/24 = 27405</span> graphically.
        "<span class=\"chem\">y = xC4</span>（GDC の nCr）を関数として入力して数表をスクロールするか、<span class=\"chem\">x(x - 1)(x - 2)(x - 3)/24 = 27405</span> をグラフを使って解きます。",
        // EN: Only a positive integer <span class="chem">n &gt;= 4</span> makes sense.
        "意味があるのは正の整数 <span class=\"chem\">n &gt;= 4</span> だけです。",
      ],
      // EN: <div class="worked__math"><sup><i>n</i></sup>C<sub>4</sub> = <span class="frac"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)(<i>n</i> − 3)</span><span>24</span></span> = 27 405 <b>[M1]</b></div><div class="worked__math">GDC table: <sup>29</sup>C<sub>4</sub> = 23 751, <sup>30</sup>C<sub>4</sub> = 27 405, <sup>31</sup>C<sub>4</sub> = 31 465 <b>[M1 A1]</b></div><div class="worked__math"><b><i>n</i> = 30</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><sup><i>n</i></sup>C<sub>4</sub> = <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)(<i>n</i> − 3)</span><span>24</span></span> = 27 405 <b>[M1]</b></div><div class=\"worked__math\">GDC の数表：<sup>29</sup>C<sub>4</sub> = 23 751, <sup>30</sup>C<sub>4</sub> = 27 405, <sup>31</sup>C<sub>4</sub> = 31 465 <b>[M1 A1]</b></div><div class=\"worked__math\"><b><i>n</i> = 30</b> <b>[A1]</b></div>",
    },

    // ── t1-3-q021 · numeric · challenge · AHL · AHL 1.10 · 5 marks
    "t1-3-q021": {
      // EN: <p>A security firm sends inspection panels of 5 staff to each site. Every different panel that could be formed from its staff must be given its own six-digit code, from 000000 to 999999. As the firm takes on more staff, it will eventually run out of codes.</p><p>Find the least number of staff for which there are more possible panels than codes.</p>
      stem: "<p>ある警備会社は、各現場に職員 5 人からなる点検班を派遣する。職員から作ることのできる異なる班には、それぞれ 000000 から 999999 までの専用の 六桁のコードを割り当てなければならない。会社が職員を増やしていくと、いずれコードが足りなくなる。</p><p>可能な班の数がコードの数より多くなる最小の職員数を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: a panel is an unordered group of 5 people, so with <span class="chem">n</span> staff there are <span class="chem">nC5</span> panels. There are <span class="chem">10^6</span> six-digit codes (000000 counts). You want the least integer <span class="chem">n</span> with <span class="chem">nC5 &gt; 10^6</span>.
        "解読：班は 5 人の順序を区別しない集まりなので、職員が <span class=\"chem\">n</span> 人なら班は <span class=\"chem\">nC5</span> 通りです。六桁のコードは <span class=\"chem\">10^6</span> 個あります（000000 も数えます）。<span class=\"chem\">nC5 &gt; 10^6</span> となる最小の整数 <span class=\"chem\">n</span> を求めます。",
        // EN: Put <span class="chem">y = xC5</span> in your GDC table and look for where it first passes 1 000 000.
        "<span class=\"chem\">y = xC5</span> を GDC の数表に入れ、初めて 1 000 000 を超えるところを探します。",
        // EN: Check the value just below as well as the value just above the cut-off.
        "境目のすぐ上の値だけでなく、すぐ下の値も確認します。",
      ],
      // EN: <p><b>Decode:</b> panels = <sup><i>n</i></sup>C<sub>5</sub>; codes = 10<sup>6</sup>; find the least <i>n</i> with <sup><i>n</i></sup>C<sub>5</sub> &gt; 10<sup>6</sup>.</p><div class="worked__math">GDC table: <sup>43</sup>C<sub>5</sub> = 962 598 &lt; 10<sup>6</sup>, <sup>44</sup>C<sub>5</sub> = 1 086 008 &gt; 10<sup>6</sup></div><div class="worked__math">Least number of staff = <b>44</b></div>
      solution: "<p><b>解読：</b>班の数 = <sup><i>n</i></sup>C<sub>5</sub>、コードの数 = 10<sup>6</sup>。<sup><i>n</i></sup>C<sub>5</sub> &gt; 10<sup>6</sup> となる最小の <i>n</i> を求めます。</p><div class=\"worked__math\">GDC の数表：<sup>43</sup>C<sub>5</sub> = 962 598 &lt; 10<sup>6</sup>, <sup>44</sup>C<sub>5</sub> = 1 086 008 &gt; 10<sup>6</sup></div><div class=\"worked__math\">最小の職員数 = <b>44</b></div>",
    },

    // ── t1-3-q022 · short · exam · AHL · AHL 1.10 · 10 marks
    "t1-3-q022": {
      // EN: <p>A council of 8 members is to be chosen from 12 men and 15 women.</p><p>(a) Find the number of different councils that can be chosen. <strong>[2 marks]</strong><br>(b) Find the number of councils that contain exactly 4 women. <strong>[2 marks]</strong><br>(c) Find the number of councils that contain at least 3 women. <strong>[3 marks]</strong><br>(d) One of the men, Marco, and one of the women, Wen, refuse to serve together. Find the number of councils with exactly 4 men and 4 women that do not contain both Marco and Wen. <strong>[3 marks]</strong></p>
      stem: "<p>男性 12 人と女性 15 人の中から 8 人の委員からなる評議会を選ぶ。</p><p>(a) 選ぶことのできる異なる評議会の数を求めなさい (Find)。<strong>[2 marks]</strong><br>(b) 女性がちょうど 4 人含まれる評議会の数を求めなさい。<strong>[2 marks]</strong><br>(c) 女性が少なくとも 3 人含まれる評議会の数を求めなさい。<strong>[3 marks]</strong><br>(d) 男性の一人 Marco と女性の一人 Wen は、一緒に委員になることを拒んでいる。男性ちょうど 4 人と女性ちょうど 4 人からなり、Marco と Wen の両方を含むことはない評議会の数を求めなさい。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: a council is an unordered selection, so every part is combinations. “At least 3 women” has six cases, but its complement (0, 1 or 2 women) has only three.
        "解読：評議会は順序を区別しない選び方なので、どの小問も組合せです。「女性が少なくとも 3 人」は場合が六つありますが、その余事象（女性が 0、1、2 人）は三つだけです。",
        // EN: In (d), count the 4-men-4-women councils that DO contain both Marco and Wen (fix them, then choose 3 more men from 11 and 3 more women from 14) and subtract from (b).
        "(d) では、Marco と Wen の両方を実際に含む「男性 4 人・女性 4 人」の評議会を数え（二人を固定し、残りの男性 11 人から 3 人、女性 14 人から 3 人を選ぶ）、(b) から引きます。",
        // EN: Your GDC nCr key handles the large numbers; write down each term you use.
        "GDC の nCr キーで大きな数も扱えます。使う各項を書き出しましょう。",
      ],
      // EN: <div class="worked__math">(a) 2 220 075 (b) 675 675 (c) 2 220 075 − 109 395 = 2 110 680 (d) 675 675 − 165 × 364 = 615 615</div>
      solution: "<div class=\"worked__math\">(a) 2 220 075 (b) 675 675 (c) 2 220 075 − 109 395 = 2 110 680 (d) 675 675 − 165 × 364 = 615 615</div>",
      // EN: <div class="worked__math">(a) <sup>27</sup>C<sub>8</sub> = <b>2 220 075</b></div><div class="worked__math">(b) <sup>15</sup>C<sub>4</sub> × <sup>12</sup>C<sub>4</sub> = 1365 × 495 = <b>675 675</b></div><div class="worked__math">(c) 0, 1 or 2 women: <sup>12</sup>C<sub>8</sub> + <sup>15</sup>C<sub>1</sub><sup>12</sup>C<sub>7</sub> + <sup>15</sup>C<sub>2</sub><sup>12</sup>C<sub>6</sub> = 495 + 11 880 + 97 020 = 109 395; 2 220 075 − 109 395 = <b>2 110 680</b></div><div class="worked__math">(d) councils with both: <sup>11</sup>C<sub>3</sub> × <sup>14</sup>C<sub>3</sub> = 165 × 364 = 60 060; 675 675 − 60 060 = <b>615 615</b></div>
      answer: "<div class=\"worked__math\">(a) <sup>27</sup>C<sub>8</sub> = <b>2 220 075</b></div><div class=\"worked__math\">(b) <sup>15</sup>C<sub>4</sub> × <sup>12</sup>C<sub>4</sub> = 1365 × 495 = <b>675 675</b></div><div class=\"worked__math\">(c) 女性 0、1、2 人： <sup>12</sup>C<sub>8</sub> + <sup>15</sup>C<sub>1</sub><sup>12</sup>C<sub>7</sub> + <sup>15</sup>C<sub>2</sub><sup>12</sup>C<sub>6</sub> = 495 + 11 880 + 97 020 = 109 395; 2 220 075 − 109 395 = <b>2 110 680</b></div><div class=\"worked__math\">(d) 二人とも含む評議会： <sup>11</sup>C<sub>3</sub> × <sup>14</sup>C<sub>3</sub> = 165 × 364 = 60 060; 675 675 − 60 060 = <b>615 615</b></div>",
      markscheme: [
        // EN: M1: Uses <span class="chem">27C8</span> (selection from all 27 people, order irrelevant).
        "M1：<span class=\"chem\">27C8</span> を使う（27 人全員からの選び方で、順序は関係ない）。",
        // EN: A1: 2 220 075.
        "A1：2 220 075。",
        // EN: M1: Multiplies <span class="chem">15C4 × 12C4</span>.
        "M1：<span class=\"chem\">15C4 × 12C4</span> を掛け合わせる。",
        // EN: A1: 675 675.
        "A1：675 675。",
        // EN: M1: Uses the complement (or adds the cases with 3, 4, …, 8 women).
        "M1：余事象を使う（または女性 3、4、…、8 人の場合を足し合わせる）。",
        // EN: M1: Correct terms for 0, 1 and 2 women: <span class="chem">12C8 + 15C1 × 12C7 + 15C2 × 12C6 = 109395</span>.
        "M1：女性 0、1、2 人の各項が正しい：<span class=\"chem\">12C8 + 15C1 × 12C7 + 15C2 × 12C6 = 109395</span>。",
        // EN: A1: 2 110 680.
        "A1：2 110 680。",
        // EN: M1: Counts councils containing both Marco and Wen by fixing them: <span class="chem">11C3 × 14C3</span>.
        "M1：Marco と Wen を固定して、二人とも含む評議会を数える：<span class=\"chem\">11C3 × 14C3</span>。",
        // EN: A1: 60 060.
        "A1：60 060。",
        // EN: A1: 675 675 − 60 060 = 615 615.
        "A1：675 675 − 60 060 = 615 615。",
      ],
    },

    // ── t1-3-q023 · numeric · exam · AHL · AHL 1.10 · 4 marks
    "t1-3-q023": {
      // EN: <p>A website password has exactly 8 characters. Each character is one of the 26 lower-case letters or one of the 10 digits 0–9, and no character may be used more than once.</p><p>Find the number of passwords that contain <strong>at least one digit</strong>. Give your answer in the form <span class="chem">a × 10^k</span>, where <span class="chem">1 &lt;= a &lt; 10</span> and <span class="chem">k</span> ∈ ℤ, with <span class="chem">a</span> correct to 3 significant figures.</p>
      stem: "<p>あるウェブサイトのパスワードはちょうど 8 文字である。各文字は 26 個の英小文字または 0–9 の 10 個の数字のいずれかであり、同じ文字を重複して使うことはできない。</p><p><strong>少なくとも一つの数字</strong>を含むパスワードの数を求めなさい (Find)。答えは <span class=\"chem\">a × 10^k</span> の形で表しなさい。ただし <span class=\"chem\">1 &lt;= a &lt; 10</span>、<span class=\"chem\">k</span> ∈ ℤ とし、<span class=\"chem\">a</span> は有効数字 3 桁とする。</p>",
      hints: [
        // EN: Decode: the order of characters matters and there is no repetition, so these are permutations. “At least one digit” is easiest as (all passwords) − (passwords with no digit).
        "解読：文字の順序は区別され、繰り返しもないので、これは順列です。「少なくとも一つの数字」は（すべてのパスワード）−（数字を含まないパスワード）として求めるのが最も簡単です。",
        // EN: All passwords: <span class="chem">36P8</span>. Passwords with letters only: <span class="chem">26P8</span>.
        "すべてのパスワード：<span class=\"chem\">36P8</span>。英字だけのパスワード：<span class=\"chem\">26P8</span>。",
        // EN: Use the nPr key on your GDC and subtract.
        "GDC の nPr キーを使って引き算します。",
      ],
      // EN: <div class="worked__math"><sup>36</sup>P<sub>8</sub> − <sup>26</sup>P<sub>8</sub> = 1 220 096 908 800 − 62 990 928 000 = 1 157 105 980 800 ≈ <b>1.16 × 10<sup>12</sup></b></div>
      solution: "<div class=\"worked__math\"><sup>36</sup>P<sub>8</sub> − <sup>26</sup>P<sub>8</sub> = 1 220 096 908 800 − 62 990 928 000 = 1 157 105 980 800 ≈ <b>1.16 × 10<sup>12</sup></b></div>",
    },

    // ── t1-3-q024 · numeric · challenge · AHL · AHL 1.10; SL 4.5 · 5 marks
    "t1-3-q024": {
      // EN: <p>A librarian puts 10 different novels and 4 different dictionaries back on an empty shelf, placing all 14 books in a random order. The dictionaries are heavy: the shelf bends if any two dictionaries stand side by side.</p><p>Find the probability that the shelf does not bend. Give your answer to 3 significant figures.</p>
      stem: "<p>図書館員が、異なる小説 10 冊と異なる辞書 4 冊を空の棚に戻し、14 冊すべてを無作為な順序で並べる。辞書は重いので、どれか二冊の辞書が隣り合うと棚がたわんでしまう。</p><p>棚がたわまない確率を求めなさい (Find)。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: “the shelf does not bend” means no two dictionaries are adjacent. All 14! orders are equally likely, so P = (orders with no two dictionaries adjacent) ÷ 14!. This is the gap method.
        "解読：「棚がたわまない」は、どの二冊の辞書も隣り合わないことを意味します。14! 通りの並べ方はすべて同様に確からしいので、P =（どの二冊の辞書も隣り合わない並べ方の数）÷ 14! です。これは間に入れる方法です。",
        // EN: Arrange the 10 novels first: <span class="chem">10!</span> ways. They create 11 gaps (including both ends).
        "まず小説 10 冊を並べます：<span class=\"chem\">10!</span> 通り。小説の間と両端に 11 個のすき間ができます。",
        // EN: Place the 4 different dictionaries in 4 different gaps: <span class="chem">11P4</span> ways. Then divide by <span class="chem">14!</span>.
        "異なる辞書 4 冊を異なる 4 個のすき間に入れます：<span class=\"chem\">11P4</span> 通り。そのあと <span class=\"chem\">14!</span> で割ります。",
      ],
      // EN: <p><b>Decode:</b> “does not bend” = no two dictionaries adjacent → gap method, then divide by the total number of orders.</p><div class="worked__math">Favourable = 10! × <sup>11</sup>P<sub>4</sub> = 3 628 800 × 7920 = 28 740 096 000</div><div class="worked__math">P = <span class="frac"><span>28 740 096 000</span><span>14!</span></span> = <span class="frac"><span>30</span><span>91</span></span> ≈ <b>0.330</b></div>
      solution: "<p><b>解読：</b>「たわまない」=どの二冊の辞書も隣り合わない → 間に入れる方法。そのあと並べ方の総数で割ります。</p><div class=\"worked__math\">条件を満たす並べ方 = 10! × <sup>11</sup>P<sub>4</sub> = 3 628 800 × 7920 = 28 740 096 000</div><div class=\"worked__math\">P = <span class=\"frac\"><span>28 740 096 000</span><span>14!</span></span> = <span class=\"frac\"><span>30</span><span>91</span></span> ≈ <b>0.330</b></div>",
    },

    // ── t1-3-q025 · numeric · exam · AHL · AHL 1.10; SL 4.5 · 5 marks
    "t1-3-q025": {
      // EN: <p>A bag holds 60 tiles: 12 red and 48 blue. A player takes 7 tiles at random, without replacement. Using counting methods, find the probability that at least 2 of the 7 tiles are red. Give your answer to 3 significant figures.</p>
      stem: "<p>袋に 60 枚のタイルが入っている：赤が 12 枚、青が 48 枚である。プレイヤーが無作為に 7 枚のタイルを取り出す（取り出したタイルは戻さない）。場合の数を用いて、取り出した 7 枚のうち少なくとも 2 枚が赤である確率を求めなさい (Find)。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: every hand of 7 tiles is equally likely, and there are <span class="chem">60C7</span> of them. “At least 2 red” is quicker by the complement: subtract the hands with 0 or 1 red tile.
        "解読：7 枚のタイルの組はどれも同様に確からしく、全部で <span class=\"chem\">60C7</span> 通りあります。「少なくとも 2 枚が赤」は余事象を使う方が速いです：赤が 0 枚または 1 枚の組を引きます。",
        // EN: Hands with 0 red: <span class="chem">48C7</span>. Hands with exactly 1 red: <span class="chem">12C1 × 48C6</span>.
        "赤が 0 枚：<span class=\"chem\">48C7</span>。赤がちょうど 1 枚：<span class=\"chem\">12C1 × 48C6</span>。",
        // EN: P = 1 − (48C7 + 12 × 48C6) / 60C7.
        "P = 1 − (48C7 + 12 × 48C6) / 60C7。",
      ],
      // EN: <div class="worked__math">P(0 or 1 red) = <span class="frac"><span><sup>48</sup>C<sub>7</sub> + <sup>12</sup>C<sub>1</sub><sup>48</sup>C<sub>6</sub></span><span><sup>60</sup>C<sub>7</sub></span></span> = <span class="frac"><span>73 629 072 + 12 × 12 271 512</span><span>386 206 920</span></span> = 0.57194…</div><div class="worked__math">P(at least 2 red) = 1 − 0.57194… ≈ <b>0.428</b></div>
      solution: "<div class=\"worked__math\">P(赤が 0 枚または 1 枚) = <span class=\"frac\"><span><sup>48</sup>C<sub>7</sub> + <sup>12</sup>C<sub>1</sub><sup>48</sup>C<sub>6</sub></span><span><sup>60</sup>C<sub>7</sub></span></span> = <span class=\"frac\"><span>73 629 072 + 12 × 12 271 512</span><span>386 206 920</span></span> = 0.57194…</div><div class=\"worked__math\">P(赤が少なくとも 2 枚) = 1 − 0.57194… ≈ <b>0.428</b></div>",
    },

    // ── t1-3-q026 · short · exam · AHL · AHL 1.10 · 8 marks
    "t1-3-q026": {
      // EN: <p>(a) Find the first four terms of the expansion of <span class="chem">sqrt(1 + 4x)</span> in ascending powers of <span class="chem">x</span>. <strong>[3 marks]</strong><br>(b) State the set of values of <span class="chem">x</span> for which the expansion is valid. <strong>[1 mark]</strong><br>(c) By writing <span class="chem">26 = 25 × 1.04</span>, use your answer to (a) with a suitable value of <span class="chem">x</span> to estimate <span class="chem">sqrt(26)</span>. <strong>[2 marks]</strong><br>(d) Find the percentage error of your estimate, compared with the value of <span class="chem">sqrt(26)</span> given by your GDC. <strong>[2 marks]</strong></p>
      stem: "<p>(a) <span class=\"chem\">sqrt(1 + 4x)</span> を <span class=\"chem\">x</span> の昇べきの順に展開したときの、最初の四つの項を求めなさい (Find)。<strong>[3 marks]</strong><br>(b) この展開が有効となる <span class=\"chem\">x</span> の値の範囲を述べなさい (State)。<strong>[1 mark]</strong><br>(c) <span class=\"chem\">26 = 25 × 1.04</span> と書き、(a) の答えに適切な <span class=\"chem\">x</span> の値を用いて <span class=\"chem\">sqrt(26)</span> を推定しなさい (Estimate)。<strong>[2 marks]</strong><br>(d) GDC で求めた <span class=\"chem\">sqrt(26)</span> の値と比べて、推定値の百分率誤差を求めなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: In (a) use <span class="chem">n = 1/2</span> and <span class="chem">u = 4x</span>; the <span class="chem">x^3</span> coefficient is <span class="chem">(n(n - 1)(n - 2)/3!) × 4^3</span>.
        "(a) では <span class=\"chem\">n = 1/2</span>、<span class=\"chem\">u = 4x</span> を使います。<span class=\"chem\">x^3</span> の係数は <span class=\"chem\">(n(n - 1)(n - 2)/3!) × 4^3</span> です。",
        // EN: In (c), <span class="chem">sqrt(26) = sqrt(25)sqrt(1.04) = 5sqrt(1 + 4x)</span> with <span class="chem">4x = 0.04</span>.
        "(c) では <span class=\"chem\">sqrt(26) = sqrt(25)sqrt(1.04) = 5sqrt(1 + 4x)</span> であり、<span class=\"chem\">4x = 0.04</span> です。",
        // EN: The estimate is extremely close: keep at least 7 significant figures from your GDC before finding the error.
        "推定値は非常に近い値になります。誤差を求める前に、GDC の値を少なくとも有効数字 7 桁残しておきましょう。",
      ],
      // EN: <div class="worked__math">(a) 1 + 2<i>x</i> − 2<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> (b) |<i>x</i>| &lt; 1/4 (c) 5.09902 (d) ≈ 9.54 × 10<sup>−6</sup> %</div>
      solution: "<div class=\"worked__math\">(a) 1 + 2<i>x</i> − 2<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> (b) |<i>x</i>| &lt; 1/4 (c) 5.09902 (d) ≈ 9.54 × 10<sup>−6</sup> %</div>",
      // EN: <div class="worked__math">(a) (1 + 4<i>x</i>)<sup>1/2</sup> = 1 + 2<i>x</i> − 2<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> − …</div><div class="worked__math">(b) |4<i>x</i>| &lt; 1 ⇔ |<i>x</i>| &lt; <span class="frac"><span>1</span><span>4</span></span></div><div class="worked__math">(c) √26 = 5√1.04, so <i>x</i> = 0.01: 5(1 + 0.02 − 0.0002 + 0.000004) = 5 × 1.019804 = <b>5.09902</b></div><div class="worked__math">(d) GDC: √26 = 5.0990195…; percentage error = <span class="frac"><span>5.09902 − 5.0990195…</span><span>5.0990195…</span></span> × 100% ≈ <b>9.54 × 10<sup>−6</sup> %</b></div>
      answer: "<div class=\"worked__math\">(a) (1 + 4<i>x</i>)<sup>1/2</sup> = 1 + 2<i>x</i> − 2<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> − …</div><div class=\"worked__math\">(b) |4<i>x</i>| &lt; 1 ⇔ |<i>x</i>| &lt; <span class=\"frac\"><span>1</span><span>4</span></span></div><div class=\"worked__math\">(c) √26 = 5√1.04 なので <i>x</i> = 0.01： 5(1 + 0.02 − 0.0002 + 0.000004) = 5 × 1.019804 = <b>5.09902</b></div><div class=\"worked__math\">(d) GDC: √26 = 5.0990195…; 百分率誤差 = <span class=\"frac\"><span>5.09902 − 5.0990195…</span><span>5.0990195…</span></span> × 100% ≈ <b>9.54 × 10<sup>−6</sup> %</b></div>",
      markscheme: [
        // EN: M1: Uses the extended binomial expansion with <span class="chem">n = 1/2</span> and <span class="chem">u = 4x</span>.
        "M1：<span class=\"chem\">n = 1/2</span>、<span class=\"chem\">u = 4x</span> として拡張二項展開を使う。",
        // EN: A1: <span class="chem">1 + 2x - 2x^2</span>.
        "A1：<span class=\"chem\">1 + 2x - 2x^2</span>。",
        // EN: A1: <span class="chem">+ 4x^3</span>.
        "A1：<span class=\"chem\">+ 4x^3</span>。",
        // EN: A1: <span class="chem">|x| &lt; 1/4</span>.
        "A1：<span class=\"chem\">|x| &lt; 1/4</span>。",
        // EN: M1: Uses <span class="chem">sqrt(26) = 5sqrt(1 + 4x)</span> with <span class="chem">x = 0.01</span>.
        "M1：<span class=\"chem\">x = 0.01</span> として <span class=\"chem\">sqrt(26) = 5sqrt(1 + 4x)</span> を使う。",
        // EN: A1: 5.09902.
        "A1：5.09902。",
        // EN: M1: Uses |estimate − GDC value| ÷ GDC value × 100.
        "M1：|推定値 − GDC の値| ÷ GDC の値 × 100 を使う。",
        // EN: A1: <span class="chem">9.54 × 10^{-6}</span> % (accept 0.00000954 %).
        "A1：<span class=\"chem\">9.54 × 10^{-6}</span> %（0.00000954 % も可）。",
      ],
    },

    // ── t1-3-q027 · numeric · exam · AHL · AHL 1.10 · 5 marks
    "t1-3-q027": {
      // EN: <p>The first three terms of the binomial expansion of <span class="chem">(1 + x)^{-1/2}</span> are used to estimate <span class="chem">1 / sqrt(1.3)</span>.</p><p>Find the percentage error of this estimate, compared with the value given by your GDC. Give your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">(1 + x)^{-1/2}</span> の二項展開の最初の三つの項を使って <span class=\"chem\">1 / sqrt(1.3)</span> を推定する。</p><p>GDC で求めた値と比べて、この推定値の百分率誤差を求めなさい (Find)。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: <span class="chem">1/sqrt(1.3) = (1 + 0.3)^{-1/2}</span>, so put <span class="chem">x = 0.3</span> into the first three terms. Then compare with the GDC value.
        "解読：<span class=\"chem\">1/sqrt(1.3) = (1 + 0.3)^{-1/2}</span> なので、最初の三つの項に <span class=\"chem\">x = 0.3</span> を代入します。そのあと GDC の値と比べます。",
        // EN: <span class="chem">(1 + x)^{-1/2} ≈ 1 - (1/2)x + (3/8)x^2</span>.
        "<span class=\"chem\">(1 + x)^{-1/2} ≈ 1 - (1/2)x + (3/8)x^2</span>。",
        // EN: Percentage error = |estimate − exact| ÷ exact × 100.
        "百分率誤差 = |推定値 − 正確な値| ÷ 正確な値 × 100。",
      ],
      // EN: <div class="worked__math">Estimate = 1 − 0.15 + <span class="frac"><span>3</span><span>8</span></span>(0.09) = 0.88375</div><div class="worked__math">GDC: 1/√1.3 = 0.877058…</div><div class="worked__math">Percentage error = <span class="frac"><span>0.88375 − 0.877058…</span><span>0.877058…</span></span> × 100 ≈ <b>0.763 %</b></div>
      solution: "<div class=\"worked__math\">推定値 = 1 − 0.15 + <span class=\"frac\"><span>3</span><span>8</span></span>(0.09) = 0.88375</div><div class=\"worked__math\">GDC: 1/√1.3 = 0.877058…</div><div class=\"worked__math\">百分率誤差 = <span class=\"frac\"><span>0.88375 − 0.877058…</span><span>0.877058…</span></span> × 100 ≈ <b>0.763 %</b></div>",
    },

    // ── t1-3-q028 · numeric · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q028": {
      // EN: <p>A low-power sensor chip cannot calculate square roots, so its firmware replaces <span class="chem">sqrt(1 + x)</span> by the quadratic made from the first three terms of its binomial expansion. A reading is trusted only while the absolute error of this replacement is less than <span class="chem">5 × 10^{-4}</span>.</p><p>Given that <span class="chem">x &gt;= 0</span>, find the largest value of <span class="chem">x</span> for which readings are trusted. Give your answer to 3 significant figures.</p>
      stem: "<p>ある低消費電力センサーチップは平方根を計算できないので、そのファームウェアは <span class=\"chem\">sqrt(1 + x)</span> を、その二項展開の最初の三つの項からなる二次式で置き換える。読み取り値が信頼できるのは、この置き換えの絶対誤差が <span class=\"chem\">5 × 10^{-4}</span> より小さい間だけである。</p><p><span class=\"chem\">x &gt;= 0</span> のとき、読み取り値が信頼できる <span class=\"chem\">x</span> の最大値を求めなさい (Find)。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: first find the quadratic <span class="chem">p(x)</span> (the first three terms of <span class="chem">(1 + x)^{1/2}</span>). Then the question asks where <span class="chem">|sqrt(1 + x) - p(x)| = 5 × 10^{-4}</span> for <span class="chem">x &gt;= 0</span>: an equation you solve on the GDC.
        "解読：まず二次式 <span class=\"chem\">p(x)</span>（<span class=\"chem\">(1 + x)^{1/2}</span> の最初の三つの項）を求めます。すると問題は、<span class=\"chem\">x &gt;= 0</span> において <span class=\"chem\">|sqrt(1 + x) - p(x)| = 5 × 10^{-4}</span> となるところを求めることになります。これは GDC で解く方程式です。",
        // EN: <span class="chem">p(x) = 1 + x/2 - x^2/8</span>.
        "<span class=\"chem\">p(x) = 1 + x/2 - x^2/8</span>。",
        // EN: Graph <span class="chem">y = sqrt(1 + x) - (1 + x/2 - x^2/8)</span> and <span class="chem">y = 0.0005</span> for <span class="chem">x &gt;= 0</span>; the error increases with <span class="chem">x</span>, so the intersection is the boundary.
        "<span class=\"chem\">x &gt;= 0</span> の範囲で <span class=\"chem\">y = sqrt(1 + x) - (1 + x/2 - x^2/8)</span> と <span class=\"chem\">y = 0.0005</span> のグラフをかきます。誤差は <span class=\"chem\">x</span> とともに増加するので、交点が境目です。",
      ],
      // EN: <p><b>Decode:</b> “trusted” means |exact − quadratic| &lt; 5 × 10<sup>−4</sup>; find the boundary of this inequality for <i>x</i> ≥ 0.</p><div class="worked__math"><i>p</i>(<i>x</i>) = 1 + <span class="frac"><span><i>x</i></span><span>2</span></span> − <span class="frac"><span><i>x</i><sup>2</sup></span><span>8</span></span></div><div class="worked__math">GDC: √(1 + <i>x</i>) − <i>p</i>(<i>x</i>) = 0.0005 at <i>x</i> = 0.20821…; the error is increasing for <i>x</i> ≥ 0</div><div class="worked__math">Largest trusted value ≈ <b>0.208</b></div>
      solution: "<p><b>解読：</b>「信頼できる」は |正確な値 − 二次式| &lt; 5 × 10<sup>−4</sup> を意味します。<i>x</i> ≥ 0 におけるこの不等式の境目を求めます。</p><div class=\"worked__math\"><i>p</i>(<i>x</i>) = 1 + <span class=\"frac\"><span><i>x</i></span><span>2</span></span> − <span class=\"frac\"><span><i>x</i><sup>2</sup></span><span>8</span></span></div><div class=\"worked__math\">GDC：<i>x</i> = 0.20821… のとき √(1 + <i>x</i>) − <i>p</i>(<i>x</i>) = 0.0005。<i>x</i> ≥ 0 で誤差は増加</div><div class=\"worked__math\">信頼できる最大の値 ≈ <b>0.208</b></div>",
    },

    // ── t1-3-q029 · numeric · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q029": {
      // EN: <p>In special relativity, an object moving at speed <span class="chem">v</span> has Lorentz factor <span class="chem">gamma = 1 / sqrt(1 - beta^2)</span>, where <span class="chem">beta = v / c</span> and <span class="chem">c</span> is the speed of light. At everyday speeds engineers replace <span class="chem">gamma</span> by the first two terms of its binomial expansion in powers of <span class="chem">beta</span>.</p><p>Find the value of <span class="chem">beta</span>, where <span class="chem">0 &lt; beta &lt; 1</span>, for which this approximation is exactly 1% smaller than the true value of <span class="chem">gamma</span>. Give your answer to 3 significant figures.</p>
      stem: "<p>特殊相対性理論では、速さ <span class=\"chem\">v</span> で運動する物体のローレンツ因子は <span class=\"chem\">gamma = 1 / sqrt(1 - beta^2)</span> である。ただし <span class=\"chem\">beta = v / c</span> であり、<span class=\"chem\">c</span> は光の速さである。日常的な速さでは、技術者は <span class=\"chem\">gamma</span> を <span class=\"chem\">beta</span> のべきで二項展開し、その最初の二つの項で置き換える。</p><p>この近似値が <span class=\"chem\">gamma</span> の真の値よりちょうど 1% 小さくなるような <span class=\"chem\">beta</span> の値を求めなさい (Find)。ただし <span class=\"chem\">0 &lt; beta &lt; 1</span> とする。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: write <span class="chem">gamma = (1 + u)^{-1/2}</span> with <span class="chem">u = -beta^2</span>, find its first two terms, then “1% smaller” means approximation = <span class="chem">0.99 gamma</span>. Solve that equation for <span class="chem">beta</span> on your GDC.
        "解読：<span class=\"chem\">u = -beta^2</span> として <span class=\"chem\">gamma = (1 + u)^{-1/2}</span> と書き、最初の二つの項を求めます。「1% 小さい」は 近似値 = <span class=\"chem\">0.99 gamma</span> を意味します。この方程式を GDC で解いて <span class=\"chem\">beta</span> を求めます。",
        // EN: The first two terms are <span class="chem">1 + beta^2 / 2</span>.
        "最初の二つの項は <span class=\"chem\">1 + beta^2 / 2</span> です。",
        // EN: Solve <span class="chem">1 + beta^2/2 = 0.99 / sqrt(1 - beta^2)</span> for <span class="chem">0 &lt; beta &lt; 1</span>.
        "<span class=\"chem\">0 &lt; beta &lt; 1</span> の範囲で <span class=\"chem\">1 + beta^2/2 = 0.99 / sqrt(1 - beta^2)</span> を解きます。",
      ],
      // EN: <p><b>Decode:</b> binomial with <i>u</i> = −β<sup>2</sup>, then an equation “approximation = 0.99 × exact”.</p><div class="worked__math">γ = (1 − β<sup>2</sup>)<sup>−1/2</sup> = 1 + <span class="frac"><span>1</span><span>2</span></span>β<sup>2</sup> + … (valid for β<sup>2</sup> &lt; 1)</div><div class="worked__math">1 + <span class="frac"><span>β<sup>2</sup></span><span>2</span></span> = <span class="frac"><span>0.99</span><span>√(1 − β<sup>2</sup>)</span></span> ⇒ (GDC) β = 0.39842…</div><div class="worked__math">β ≈ <b>0.398</b></div>
      solution: "<p><b>解読：</b><i>u</i> = −β<sup>2</sup> として二項展開し、方程式「近似値 = 0.99 × 正確な値」を解きます。</p><div class=\"worked__math\">γ = (1 − β<sup>2</sup>)<sup>−1/2</sup> = 1 + <span class=\"frac\"><span>1</span><span>2</span></span>β<sup>2</sup> + … （β<sup>2</sup> &lt; 1 で有効）</div><div class=\"worked__math\">1 + <span class=\"frac\"><span>β<sup>2</sup></span><span>2</span></span> = <span class=\"frac\"><span>0.99</span><span>√(1 − β<sup>2</sup>)</span></span> ⇒ (GDC) β = 0.39842…</div><div class=\"worked__math\">β ≈ <b>0.398</b></div>",
    },

    // ── t1-3-q030 · short · exam · AHL · AHL 1.10 · 8 marks
    "t1-3-q030": {
      // EN: <p>At height <span class="chem">h</span> km above the surface of a planet of radius <span class="chem">R</span> km, the gravitational field strength is <span class="chem">g = g_0 R^2 / (R + h)^2</span>, where <span class="chem">g_0</span> is its value at the surface.</p><p>(a) Show that <span class="chem">g = g_0(1 + h/R)^{-2}</span>. <strong>[1 mark]</strong><br>(b) Hence show that, for small values of <span class="chem">h</span>, <span class="chem">g ≈ g_0(1 - 2h/R + 3h^2/R^2)</span>. <strong>[3 marks]</strong><br>(c) Given that <span class="chem">h &gt;= 0</span>, state the condition on <span class="chem">h</span> for which the full binomial series converges. <strong>[1 mark]</strong><br>(d) For the Earth take <span class="chem">R = 6371</span> and <span class="chem">g_0 = 9.81</span> <span class="unit">m s-2</span>. A satellite orbits at <span class="chem">h = 420</span>. Use the approximation in (b) to estimate <span class="chem">g</span>, and find its percentage error compared with the exact formula. <strong>[3 marks]</strong></p>
      stem: "<p>半径 <span class=\"chem\">R</span> km の惑星の表面から高さ <span class=\"chem\">h</span> km の地点での重力場の強さは <span class=\"chem\">g = g_0 R^2 / (R + h)^2</span> である。ただし <span class=\"chem\">g_0</span> は表面での値である。</p><p>(a) <span class=\"chem\">g = g_0(1 + h/R)^{-2}</span> を示しなさい (Show that)。<strong>[1 mark]</strong><br>(b) これを用いて (Hence)、<span class=\"chem\">h</span> が小さいとき <span class=\"chem\">g ≈ g_0(1 - 2h/R + 3h^2/R^2)</span> となることを示しなさい。<strong>[3 marks]</strong><br>(c) <span class=\"chem\">h &gt;= 0</span> のとき、二項級数全体が収束するための <span class=\"chem\">h</span> の条件を述べなさい (State)。<strong>[1 mark]</strong><br>(d) 地球について <span class=\"chem\">R = 6371</span>、<span class=\"chem\">g_0 = 9.81</span> <span class=\"unit\">m s-2</span> とする。ある人工衛星が <span class=\"chem\">h = 420</span> の高さを周回している。(b) の近似式を使って <span class=\"chem\">g</span> を推定し、正確な式と比べたときの百分率誤差を求めなさい。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: (a) is a rearrangement; (b) is the extended binomial with <span class="chem">n = -2</span>; (c) is the validity condition <span class="chem">|u| &lt; 1</span>; (d) is a GDC comparison.
        "解読：(a) は式変形、(b) は <span class=\"chem\">n = -2</span> とする拡張二項展開、(c) は有効となる条件 <span class=\"chem\">|u| &lt; 1</span>、(d) は GDC による比較です。",
        // EN: Divide the top and bottom of <span class="chem">R^2/(R + h)^2</span> by <span class="chem">R^2</span>.
        "<span class=\"chem\">R^2/(R + h)^2</span> の分子と分母を <span class=\"chem\">R^2</span> で割ります。",
        // EN: Keep full GDC accuracy for both values in (d) before finding the percentage error.
        "(d) で百分率誤差を求める前に、どちらの値も GDC の精度を保ったままにしておきます。",
      ],
      // EN: <div class="worked__math">(b) <i>g</i> ≈ <i>g</i><sub>0</sub>(1 − 2<i>h</i>/<i>R</i> + 3<i>h</i><sup>2</sup>/<i>R</i><sup>2</sup>) (c) <i>h</i> &lt; <i>R</i> (d) 8.64 m s<sup>−2</sup>, error ≈ 0.120 %</div>
      solution: "<div class=\"worked__math\">(b) <i>g</i> ≈ <i>g</i><sub>0</sub>(1 − 2<i>h</i>/<i>R</i> + 3<i>h</i><sup>2</sup>/<i>R</i><sup>2</sup>) (c) <i>h</i> &lt; <i>R</i> (d) 8.64 m s<sup>−2</sup>, 誤差 ≈ 0.120 %</div>",
      // EN: <div class="worked__math">(a) <span class="frac"><span><i>R</i><sup>2</sup></span><span>(<i>R</i> + <i>h</i>)<sup>2</sup></span></span> = <span class="frac"><span>1</span><span>(1 + <i>h</i>/<i>R</i>)<sup>2</sup></span></span>, so <i>g</i> = <i>g</i><sub>0</sub>(1 + <i>h</i>/<i>R</i>)<sup>−2</sup></div><div class="worked__math">(b) (1 + <i>u</i>)<sup>−2</sup> = 1 − 2<i>u</i> + <span class="frac"><span>(−2)(−3)</span><span>2</span></span><i>u</i><sup>2</sup> + … = 1 − 2<i>u</i> + 3<i>u</i><sup>2</sup> + … with <i>u</i> = <i>h</i>/<i>R</i></div><div class="worked__math">(c) |<i>h</i>/<i>R</i>| &lt; 1, i.e. 0 ≤ <i>h</i> &lt; <i>R</i></div><div class="worked__math">(d) <i>u</i> = 420/6371: estimate = 9.81(1 − 2<i>u</i> + 3<i>u</i><sup>2</sup>) ≈ <b>8.64</b> m s<sup>−2</sup> (8.6445…); exact = 9.81/(1 + <i>u</i>)<sup>2</sup> = 8.6341…; percentage error ≈ <b>0.120 %</b></div>
      answer: "<div class=\"worked__math\">(a) <span class=\"frac\"><span><i>R</i><sup>2</sup></span><span>(<i>R</i> + <i>h</i>)<sup>2</sup></span></span> = <span class=\"frac\"><span>1</span><span>(1 + <i>h</i>/<i>R</i>)<sup>2</sup></span></span> なので <i>g</i> = <i>g</i><sub>0</sub>(1 + <i>h</i>/<i>R</i>)<sup>−2</sup></div><div class=\"worked__math\">(b) (1 + <i>u</i>)<sup>−2</sup> = 1 − 2<i>u</i> + <span class=\"frac\"><span>(−2)(−3)</span><span>2</span></span><i>u</i><sup>2</sup> + … = 1 − 2<i>u</i> + 3<i>u</i><sup>2</sup> + …（ただし <i>u</i> = <i>h</i>/<i>R</i>）</div><div class=\"worked__math\">(c) |<i>h</i>/<i>R</i>| &lt; 1、すなわち 0 ≤ <i>h</i> &lt; <i>R</i></div><div class=\"worked__math\">(d) <i>u</i> = 420/6371: 推定値 = 9.81(1 − 2<i>u</i> + 3<i>u</i><sup>2</sup>) ≈ <b>8.64</b> m s<sup>−2</sup> (8.6445…); 正確な値 = 9.81/(1 + <i>u</i>)<sup>2</sup> = 8.6341…; 百分率誤差 ≈ <b>0.120 %</b></div>",
      markscheme: [
        // EN: A1: Divides numerator and denominator by <span class="chem">R^2</span> to obtain <span class="chem">g_0 / (1 + h/R)^2</span>. AG: <span class="chem">g = g_0(1 + h/R)^{-2}</span>; the given line itself earns no mark.
        "A1：分子と分母を <span class=\"chem\">R^2</span> で割って <span class=\"chem\">g_0 / (1 + h/R)^2</span> を得る。AG：<span class=\"chem\">g = g_0(1 + h/R)^{-2}</span>。与えられた結果の行そのものには得点がない。",
        // EN: M1: Uses the extended binomial expansion with <span class="chem">n = -2</span> and <span class="chem">u = h/R</span>.
        "M1：<span class=\"chem\">n = -2</span>、<span class=\"chem\">u = h/R</span> として拡張二項展開を使う。",
        // EN: A1: Linear term <span class="chem">-2h/R</span>.
        "A1：一次の項 <span class=\"chem\">-2h/R</span>。",
        // EN: A1: Quadratic coefficient <span class="chem">(-2)(-3)/2! = 3</span>, giving <span class="chem">3h^2/R^2</span>. AG: the given approximation follows.
        "A1：二次の項の係数 <span class=\"chem\">(-2)(-3)/2! = 3</span> より <span class=\"chem\">3h^2/R^2</span>。AG：与えられた近似式が導かれる。",
        // EN: A1: <span class="chem">h &lt; R</span> (from <span class="chem">|h/R| &lt; 1</span>).
        "A1：<span class=\"chem\">h &lt; R</span>（<span class=\"chem\">|h/R| &lt; 1</span> より）。",
        // EN: M1: Substitutes <span class="chem">h/R = 420/6371</span> into the approximation (and the exact formula).
        "M1：近似式（および正確な式）に <span class=\"chem\">h/R = 420/6371</span> を代入する。",
        // EN: A1: Estimate 8.64 m s⁻² (8.6445…).
        "A1：推定値 8.64 m s⁻²（8.6445…）。",
        // EN: A1: Percentage error 0.120 % (exact value 8.6341…).
        "A1：百分率誤差 0.120 %（正確な値 8.6341…）。",
      ],
    },

    // ── t1-3-q031 · numeric · challenge · AHL · AHL 1.10, 1.11 · 6 marks
    "t1-3-q031": {
      // EN: <p>Let <span class="chem">f(x) = 3 / ((1 - x)(1 + 2x))</span>. A student writes <span class="chem">f(x)</span> in partial fractions, expands each one, and keeps only the terms up to <span class="chem">x^2</span>, obtaining a quadratic <span class="chem">p(x)</span>. She accepts the replacement of <span class="chem">f</span> by <span class="chem">p</span> wherever <span class="chem">|f(x) - p(x)| &lt; 0.02</span>.</p><p>Find the greatest value of <span class="chem">c</span> such that the replacement is accepted for all <span class="chem">0 &lt;= x &lt; c</span>. Give your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">f(x) = 3 / ((1 - x)(1 + 2x))</span> とする。ある生徒が <span class=\"chem\">f(x)</span> を部分分数に分解し、それぞれを展開して <span class=\"chem\">x^2</span> の項までだけを残し、二次式 <span class=\"chem\">p(x)</span> を得た。彼女は <span class=\"chem\">|f(x) - p(x)| &lt; 0.02</span> となるところでは、<span class=\"chem\">f</span> を <span class=\"chem\">p</span> で置き換えてよいとする。</p><p>すべての <span class=\"chem\">0 &lt;= x &lt; c</span> で置き換えが認められるような <span class=\"chem\">c</span> の最大値を求めなさい (Find)。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: two jobs. First build <span class="chem">p(x)</span> by partial fractions and extended binomials. Then solve <span class="chem">|f(x) - p(x)| = 0.02</span> on the GDC for the first positive solution (inside the validity interval).
        "解読：作業は二つです。まず部分分数分解と拡張二項展開で <span class=\"chem\">p(x)</span> を作ります。次に GDC で <span class=\"chem\">|f(x) - p(x)| = 0.02</span> を解き、最初の正の解（有効な区間内）を求めます。",
        // EN: Partial fractions: <span class="chem">f(x) = 1/(1 - x) + 2/(1 + 2x)</span>.
        "部分分数分解：<span class=\"chem\">f(x) = 1/(1 - x) + 2/(1 + 2x)</span>。",
        // EN: Expanding: <span class="chem">p(x) = (1 + x + x^2) + 2(1 - 2x + 4x^2) = 3 - 3x + 9x^2</span>, valid for <span class="chem">|x| &lt; 1/2</span>.
        "展開すると：<span class=\"chem\">p(x) = (1 + x + x^2) + 2(1 - 2x + 4x^2) = 3 - 3x + 9x^2</span>（<span class=\"chem\">|x| &lt; 1/2</span> で有効）。",
        // EN: Graph <span class="chem">y = |f(x) - p(x)|</span> and <span class="chem">y = 0.02</span> on <span class="chem">0 &lt;= x &lt; 0.5</span>.
        "<span class=\"chem\">0 &lt;= x &lt; 0.5</span> で <span class=\"chem\">y = |f(x) - p(x)|</span> と <span class=\"chem\">y = 0.02</span> のグラフをかきます。",
      ],
      // EN: <p><b>Decode:</b> make <i>p</i> from partial fractions, then find where the error first reaches 0.02.</p><div class="worked__math">3 ≡ <i>A</i>(1 + 2<i>x</i>) + <i>B</i>(1 − <i>x</i>): <i>x</i> = 1 ⇒ <i>A</i> = 1; <i>x</i> = −<span class="frac"><span>1</span><span>2</span></span> ⇒ <i>B</i> = 2</div><div class="worked__math"><i>p</i>(<i>x</i>) = 3 − 3<i>x</i> + 9<i>x</i><sup>2</sup> (series valid for |<i>x</i>| &lt; <span class="frac"><span>1</span><span>2</span></span>)</div><div class="worked__math">The error |<i>f</i>(<i>x</i>) − <i>p</i>(<i>x</i>)| increases from 0 on 0 ≤ <i>x</i> &lt; 0.5; GDC: it equals 0.02 at <i>x</i> = 0.11928…</div><div class="worked__math"><i>c</i> ≈ <b>0.119</b></div>
      solution: "<p><b>解読：</b>部分分数分解から <i>p</i> を作り、誤差が初めて 0.02 に達するところを求めます。</p><div class=\"worked__math\">3 ≡ <i>A</i>(1 + 2<i>x</i>) + <i>B</i>(1 − <i>x</i>): <i>x</i> = 1 ⇒ <i>A</i> = 1; <i>x</i> = −<span class=\"frac\"><span>1</span><span>2</span></span> ⇒ <i>B</i> = 2</div><div class=\"worked__math\"><i>p</i>(<i>x</i>) = 3 − 3<i>x</i> + 9<i>x</i><sup>2</sup>（級数は |<i>x</i>| &lt; <span class=\"frac\"><span>1</span><span>2</span></span> で有効）</div><div class=\"worked__math\">誤差 |<i>f</i>(<i>x</i>) − <i>p</i>(<i>x</i>)| は 0 ≤ <i>x</i> &lt; 0.5 で 0 から増加する。GDC：<i>x</i> = 0.11928… で 0.02 に等しくなる</div><div class=\"worked__math\"><i>c</i> ≈ <b>0.119</b></div>",
    },

    // ── t1-3-q032 · numeric · challenge · AHL · AHL 1.11; SL 5.10, 5.11 · 6 marks
    "t1-3-q032": {
      // EN: <p>Let <span class="chem">f(x) = (x + 7) / ((x - 1)(x + 3))</span>, for <span class="chem">x &gt; 1</span>. The region enclosed by the graph of <span class="chem">f</span>, the <span class="chem">x</span>-axis and the lines <span class="chem">x = 2</span> and <span class="chem">x = k</span>, where <span class="chem">k &gt; 2</span>, has area 1.</p><p>Find the value of <span class="chem">k</span>. Give your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">f(x) = (x + 7) / ((x - 1)(x + 3))</span>（<span class=\"chem\">x &gt; 1</span>）とする。<span class=\"chem\">f</span> のグラフ、<span class=\"chem\">x</span> 軸、および直線 <span class=\"chem\">x = 2</span>、<span class=\"chem\">x = k</span>（ただし <span class=\"chem\">k &gt; 2</span>）で囲まれた領域の面積は 1 である。</p><p><span class=\"chem\">k</span> の値を求めなさい (Find)。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: “area of the region” means <span class="chem">int_2^k f(x) dx = 1</span> (here <span class="chem">f(x) &gt; 0</span> for <span class="chem">x &gt; 1</span>). Partial fractions turn <span class="chem">f</span> into two logarithm integrals, giving an equation in <span class="chem">k</span>.
        "解読：「領域の面積」は <span class=\"chem\">int_2^k f(x) dx = 1</span> を意味します（ここでは <span class=\"chem\">x &gt; 1</span> で <span class=\"chem\">f(x) &gt; 0</span>）。部分分数分解によって <span class=\"chem\">f</span> は二つの対数の積分になり、<span class=\"chem\">k</span> についての方程式が得られます。",
        // EN: Partial fractions: <span class="chem">f(x) = 2/(x - 1) - 1/(x + 3)</span>.
        "部分分数分解：<span class=\"chem\">f(x) = 2/(x - 1) - 1/(x + 3)</span>。",
        // EN: So <span class="chem">2ln(k - 1) - ln(k + 3) + ln 5 = 1</span>. Solve this on your GDC (or solve <span class="chem">int_2^k f(x) dx = 1</span> numerically).
        "したがって <span class=\"chem\">2ln(k - 1) - ln(k + 3) + ln 5 = 1</span>。これを GDC で解きます（または <span class=\"chem\">int_2^k f(x) dx = 1</span> を数値的に解きます）。",
      ],
      // EN: <p><b>Decode:</b> area → definite integral; partial fractions make it integrable; GDC solves the resulting equation.</p><div class="worked__math"><i>x</i> + 7 ≡ <i>A</i>(<i>x</i> + 3) + <i>B</i>(<i>x</i> − 1): <i>x</i> = 1 ⇒ <i>A</i> = 2; <i>x</i> = −3 ⇒ <i>B</i> = −1</div><div class="worked__math">∫<sub>2</sub><sup><i>k</i></sup> <i>f</i>(<i>x</i>) d<i>x</i> = [2 ln(<i>x</i> − 1) − ln(<i>x</i> + 3)]<sub>2</sub><sup><i>k</i></sup> = 2 ln(<i>k</i> − 1) − ln(<i>k</i> + 3) + ln 5</div><div class="worked__math">2 ln(<i>k</i> − 1) − ln(<i>k</i> + 3) + ln 5 = 1 ⇒ (GDC) <i>k</i> = 2.7713… ≈ <b>2.77</b></div>
      solution: "<p><b>解読：</b>面積 → 定積分。部分分数分解で積分できる形にし、得られた方程式を GDC で解きます。</p><div class=\"worked__math\"><i>x</i> + 7 ≡ <i>A</i>(<i>x</i> + 3) + <i>B</i>(<i>x</i> − 1): <i>x</i> = 1 ⇒ <i>A</i> = 2; <i>x</i> = −3 ⇒ <i>B</i> = −1</div><div class=\"worked__math\">∫<sub>2</sub><sup><i>k</i></sup> <i>f</i>(<i>x</i>) d<i>x</i> = [2 ln(<i>x</i> − 1) − ln(<i>x</i> + 3)]<sub>2</sub><sup><i>k</i></sup> = 2 ln(<i>k</i> − 1) − ln(<i>k</i> + 3) + ln 5</div><div class=\"worked__math\">2 ln(<i>k</i> − 1) − ln(<i>k</i> + 3) + ln 5 = 1 ⇒ (GDC) <i>k</i> = 2.7713… ≈ <b>2.77</b></div>",
    },

    // ── t1-3-q033 · numeric · exam · AHL · AHL 1.11 · 5 marks
    "t1-3-q033": {
      // EN: <p>The denominator of <span class="chem">f(x) = (2x + 1) / (x^2 - 4x + 1)</span> has two distinct real roots <span class="chem">alpha</span> and <span class="chem">beta</span>, where <span class="chem">alpha &gt; beta</span>. Given that <span class="chem">f(x) = A / (x - alpha) + B / (x - beta)</span>, find the value of <span class="chem">A</span>. Give your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">f(x) = (2x + 1) / (x^2 - 4x + 1)</span> の分母は異なる二つの実数解 <span class=\"chem\">alpha</span>、<span class=\"chem\">beta</span>（ただし <span class=\"chem\">alpha &gt; beta</span>）をもつ。<span class=\"chem\">f(x) = A / (x - alpha) + B / (x - beta)</span> であるとき、<span class=\"chem\">A</span> の値を求めなさい (Find)。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: the method is the usual cover-up, but the roots are not integers. Find <span class="chem">alpha</span> and <span class="chem">beta</span> on the GDC first.
        "解読：方法はいつもの代入法（cover-up）ですが、解が整数ではありません。まず GDC で <span class=\"chem\">alpha</span> と <span class=\"chem\">beta</span> を求めます。",
        // EN: GDC: <span class="chem">alpha ≈ 3.732</span>, <span class="chem">beta ≈ 0.2679</span>. Then <span class="chem">2x + 1 ≡ A(x - beta) + B(x - alpha)</span>.
        "GDC：<span class=\"chem\">alpha ≈ 3.732</span>、<span class=\"chem\">beta ≈ 0.2679</span>。次に <span class=\"chem\">2x + 1 ≡ A(x - beta) + B(x - alpha)</span>。",
        // EN: Substitute <span class="chem">x = alpha</span>: <span class="chem">A = (2alpha + 1)/(alpha - beta)</span>.
        "<span class=\"chem\">x = alpha</span> を代入します：<span class=\"chem\">A = (2alpha + 1)/(alpha - beta)</span>。",
      ],
      // EN: <div class="worked__math"><i>x</i><sup>2</sup> − 4<i>x</i> + 1 = 0 ⇒ α = 3.7320…, β = 0.26794… (α = 2 + √3, β = 2 − √3)</div><div class="worked__math">2<i>x</i> + 1 ≡ <i>A</i>(<i>x</i> − β) + <i>B</i>(<i>x</i> − α); <i>x</i> = α: <i>A</i> = <span class="frac"><span>2α + 1</span><span>α − β</span></span> = <span class="frac"><span>8.4641…</span><span>3.4641…</span></span> ≈ <b>2.44</b></div>
      solution: "<div class=\"worked__math\"><i>x</i><sup>2</sup> − 4<i>x</i> + 1 = 0 ⇒ α = 3.7320…, β = 0.26794… (α = 2 + √3, β = 2 − √3)</div><div class=\"worked__math\">2<i>x</i> + 1 ≡ <i>A</i>(<i>x</i> − β) + <i>B</i>(<i>x</i> − α); <i>x</i> = α: <i>A</i> = <span class=\"frac\"><span>2α + 1</span><span>α − β</span></span> = <span class=\"frac\"><span>8.4641…</span><span>3.4641…</span></span> ≈ <b>2.44</b></div>",
    },

    // ── t1-3-q034 · short · exam · AHL · AHL 1.10, 1.11 · 10 marks
    "t1-3-q034": {
      // EN: <p>Let <span class="chem">f(x) = (x + 5) / ((1 - x)(2 + x))</span>.</p><p>(a) Express <span class="chem">f(x)</span> in partial fractions. <strong>[3 marks]</strong><br>(b) Hence find the expansion of <span class="chem">f(x)</span> in ascending powers of <span class="chem">x</span>, up to and including the term in <span class="chem">x^2</span>. <strong>[3 marks]</strong><br>(c) State the set of values of <span class="chem">x</span> for which the full expansion is valid. <strong>[1 mark]</strong><br>(d) Use your answer to (b) to estimate <span class="chem">f(0.1)</span>, and find the percentage error of this estimate. <strong>[3 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = (x + 5) / ((1 - x)(2 + x))</span> とする。</p><p>(a) <span class=\"chem\">f(x)</span> を部分分数に分解しなさい。<strong>[3 marks]</strong><br>(b) これを用いて (Hence)、<span class=\"chem\">f(x)</span> を <span class=\"chem\">x</span> の昇べきの順に、<span class=\"chem\">x^2</span> の項まで展開しなさい。<strong>[3 marks]</strong><br>(c) 展開全体が有効となる <span class=\"chem\">x</span> の値の範囲を述べなさい (State)。<strong>[1 mark]</strong><br>(d) (b) の答えを使って <span class=\"chem\">f(0.1)</span> を推定し、この推定値の百分率誤差を求めなさい。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Use the roots <span class="chem">x = 1</span> and <span class="chem">x = -2</span> to find the numerators.
        "解 <span class=\"chem\">x = 1</span> と <span class=\"chem\">x = -2</span> を使って分子を求めます。",
        // EN: Before expanding <span class="chem">1/(2 + x)</span>, take out the factor <span class="chem">2^{-1}</span>.
        "<span class=\"chem\">1/(2 + x)</span> を展開する前に、因数 <span class=\"chem\">2^{-1}</span> をくくり出します。",
        // EN: The whole series is valid only where both parts converge.
        "級数全体が有効なのは、両方の部分が収束するところだけです。",
      ],
      // EN: <div class="worked__math">(a) 2/(1 − <i>x</i>) + 1/(2 + <i>x</i>) (b) 5/2 + (7/4)<i>x</i> + (17/8)<i>x</i><sup>2</sup> (c) |<i>x</i>| &lt; 1 (d) 2.69625, ≈ 0.0801 %</div>
      solution: "<div class=\"worked__math\">(a) 2/(1 − <i>x</i>) + 1/(2 + <i>x</i>) (b) 5/2 + (7/4)<i>x</i> + (17/8)<i>x</i><sup>2</sup> (c) |<i>x</i>| &lt; 1 (d) 2.69625, ≈ 0.0801 %</div>",
      // EN: <div class="worked__math">(a) <i>x</i> + 5 ≡ <i>A</i>(2 + <i>x</i>) + <i>B</i>(1 − <i>x</i>): <i>x</i> = 1 ⇒ <i>A</i> = 2; <i>x</i> = −2 ⇒ <i>B</i> = 1; <i>f</i>(<i>x</i>) = <span class="frac"><span>2</span><span>1 − <i>x</i></span></span> + <span class="frac"><span>1</span><span>2 + <i>x</i></span></span></div><div class="worked__math">(b) 2(1 + <i>x</i> + <i>x</i><sup>2</sup>) + <span class="frac"><span>1</span><span>2</span></span>(1 − <span class="frac"><span><i>x</i></span><span>2</span></span> + <span class="frac"><span><i>x</i><sup>2</sup></span><span>4</span></span>) = <b><span class="frac"><span>5</span><span>2</span></span> + <span class="frac"><span>7</span><span>4</span></span><i>x</i> + <span class="frac"><span>17</span><span>8</span></span><i>x</i><sup>2</sup></b></div><div class="worked__math">(c) |<i>x</i>| &lt; 1 (intersection of |<i>x</i>| &lt; 1 and |<i>x</i>| &lt; 2)</div><div class="worked__math">(d) estimate = 2.5 + 0.175 + 0.02125 = <b>2.69625</b>; exact <i>f</i>(0.1) = 5.1/1.89 = 2.69841…; percentage error ≈ <b>0.0801 %</b></div>
      answer: "<div class=\"worked__math\">(a) <i>x</i> + 5 ≡ <i>A</i>(2 + <i>x</i>) + <i>B</i>(1 − <i>x</i>): <i>x</i> = 1 ⇒ <i>A</i> = 2; <i>x</i> = −2 ⇒ <i>B</i> = 1; <i>f</i>(<i>x</i>) = <span class=\"frac\"><span>2</span><span>1 − <i>x</i></span></span> + <span class=\"frac\"><span>1</span><span>2 + <i>x</i></span></span></div><div class=\"worked__math\">(b) 2(1 + <i>x</i> + <i>x</i><sup>2</sup>) + <span class=\"frac\"><span>1</span><span>2</span></span>(1 − <span class=\"frac\"><span><i>x</i></span><span>2</span></span> + <span class=\"frac\"><span><i>x</i><sup>2</sup></span><span>4</span></span>) = <b><span class=\"frac\"><span>5</span><span>2</span></span> + <span class=\"frac\"><span>7</span><span>4</span></span><i>x</i> + <span class=\"frac\"><span>17</span><span>8</span></span><i>x</i><sup>2</sup></b></div><div class=\"worked__math\">(c) |<i>x</i>| &lt; 1 （|<i>x</i>| &lt; 1 と |<i>x</i>| &lt; 2 の共通部分）</div><div class=\"worked__math\">(d) 推定値 = 2.5 + 0.175 + 0.02125 = <b>2.69625</b>; 正確な値 <i>f</i>(0.1) = 5.1/1.89 = 2.69841…; 百分率誤差 ≈ <b>0.0801 %</b></div>",
      markscheme: [
        // EN: M1: Sets <span class="chem">x + 5 = A(2 + x) + B(1 - x)</span> (or cover-up).
        "M1：<span class=\"chem\">x + 5 = A(2 + x) + B(1 - x)</span> とおく（または代入法 (cover-up) を使う）。",
        // EN: A1: <span class="chem">A = 2</span>.
        "A1：<span class=\"chem\">A = 2</span>。",
        // EN: A1: <span class="chem">B = 1</span>.
        "A1：<span class=\"chem\">B = 1</span>。",
        // EN: M1: Writes <span class="chem">1/(2 + x) = (1/2)(1 + x/2)^{-1}</span>.
        "M1：<span class=\"chem\">1/(2 + x) = (1/2)(1 + x/2)^{-1}</span> と書く。",
        // EN: A1: Correct expansions <span class="chem">2(1 + x + x^2)</span> and <span class="chem">(1/2)(1 - x/2 + x^2/4)</span>.
        "A1：正しい展開 <span class=\"chem\">2(1 + x + x^2)</span> と <span class=\"chem\">(1/2)(1 - x/2 + x^2/4)</span>。",
        // EN: A1: <span class="chem">5/2 + (7/4)x + (17/8)x^2</span>.
        "A1：<span class=\"chem\">5/2 + (7/4)x + (17/8)x^2</span>。",
        // EN: A1: <span class="chem">|x| &lt; 1</span>.
        "A1：<span class=\"chem\">|x| &lt; 1</span>。",
        // EN: A1: Estimate 2.69625.
        "A1：推定値 2.69625。",
        // EN: M1: Uses the exact value from the GDC, 2.69841…, in |estimate − exact| ÷ exact × 100.
        "M1：|推定値 − 正確な値| ÷ 正確な値 × 100 に GDC による正確な値 2.69841… を使う。",
        // EN: A1: 0.0801 %.
        "A1：0.0801 %。",
      ],
    },

    // ── t1-3-q035 · numeric · challenge · AHL · AHL 1.10 · 5 marks
    "t1-3-q035": {
      // EN: <p>The <span class="chem">n</span> vertices of a regular polygon are marked on a circle. A designer wants to shade every triangle whose three corners are vertices of the polygon, each triangle in a different colour. Her software offers 10 000 colours.</p><p>Find the greatest value of <span class="chem">n</span> for which she has enough colours.</p>
      stem: "<p>正多角形の <span class=\"chem\">n</span> 個の頂点が円周上にとられている。あるデザイナーは、三つの頂点がすべてこの多角形の頂点である三角形をすべて、それぞれ異なる色で塗りたい。彼女のソフトウェアには 10 000 色がある。</p><p>色が足りるような <span class=\"chem\">n</span> の最大値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: a triangle is fixed by choosing 3 of the <span class="chem">n</span> vertices (order irrelevant), so there are <span class="chem">nC3</span> triangles. “Enough colours” means <span class="chem">nC3 &lt;= 10000</span>; you want the GREATEST such <span class="chem">n</span>.
        "解読：三角形は <span class=\"chem\">n</span> 個の頂点から 3 個を選ぶ（順序は関係ない）と決まるので、三角形は <span class=\"chem\">nC3</span> 個あります。「色が足りる」は <span class=\"chem\">nC3 &lt;= 10000</span> を意味し、そのような <span class=\"chem\">n</span> の「最大」の値を求めます。",
        // EN: No three vertices of a polygon on a circle are collinear, so every choice of 3 vertices really is a triangle.
        "円周上にある多角形のどの三つの頂点も一直線上にないので、3 個の頂点の選び方はどれも本当に三角形になります。",
        // EN: Use the GDC table of <span class="chem">y = xC3</span>.
        "<span class=\"chem\">y = xC3</span> の GDC の数表を使います。",
      ],
      // EN: <p><b>Decode:</b> triangles = <sup><i>n</i></sup>C<sub>3</sub>; need <sup><i>n</i></sup>C<sub>3</sub> ≤ 10 000 and the largest such <i>n</i>.</p><div class="worked__math">GDC: <sup>40</sup>C<sub>3</sub> = 9880 ≤ 10 000, <sup>41</sup>C<sub>3</sub> = 10 660 &gt; 10 000</div><div class="worked__math">Greatest <i>n</i> = <b>40</b></div>
      solution: "<p><b>解読：</b>三角形の数 = <sup><i>n</i></sup>C<sub>3</sub>。<sup><i>n</i></sup>C<sub>3</sub> ≤ 10 000 となる最大の <i>n</i> が必要です。</p><div class=\"worked__math\">GDC: <sup>40</sup>C<sub>3</sub> = 9880 ≤ 10 000, <sup>41</sup>C<sub>3</sub> = 10 660 &gt; 10 000</div><div class=\"worked__math\">最大の <i>n</i> = <b>40</b></div>",
    },

    // ── t1-3-q036 · numeric · exam · AHL · AHL 1.10; SL 4.5 · 4 marks
    "t1-3-q036": {
      // EN: <p>A teacher chooses 5 students at random from a class of 28 to present their projects. Find the probability that two friends, Ana and Ben, are both chosen. Give your answer to 3 significant figures.</p>
      stem: "<p>先生が 28 人のクラスから 5 人の生徒を無作為に選び、課題の発表をさせる。友人どうしの Ana と Ben が 二人とも選ばれる確率を求めなさい (Find)。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: every group of 5 is equally likely; count the groups that contain both Ana and Ben.
        "解読：5 人の組はどれも同様に確からしいです。Ana と Ben の両方を含む組を数えます。",
        // EN: If Ana and Ben are both in, the other 3 come from the remaining 26 students: <span class="chem">26C3</span>.
        "Ana と Ben がともに入るなら、他の 3 人は残りの 26 人の生徒から選びます：<span class=\"chem\">26C3</span>。",
        // EN: Divide by the total number of groups, <span class="chem">28C5</span>.
        "組の総数 <span class=\"chem\">28C5</span> で割ります。",
      ],
      // EN: <div class="worked__math">P = <span class="frac"><span><sup>26</sup>C<sub>3</sub></span><span><sup>28</sup>C<sub>5</sub></span></span> = <span class="frac"><span>2600</span><span>98 280</span></span> ≈ <b>0.0265</b></div>
      solution: "<div class=\"worked__math\">P = <span class=\"frac\"><span><sup>26</sup>C<sub>3</sub></span><span><sup>28</sup>C<sub>5</sub></span></span> = <span class=\"frac\"><span>2600</span><span>98 280</span></span> ≈ <b>0.0265</b></div>",
    },

    // ── t1-3-q037 · short · exam · AHL · AHL 1.10 · 6 marks
    "t1-3-q037": {
      // EN: <p>In the expansion of <span class="chem">(1 + ax)^{1/3}</span> in ascending powers of <span class="chem">x</span>, where <span class="chem">a &gt; 0</span>, the coefficient of <span class="chem">x</span> plus the coefficient of <span class="chem">x^3</span> equals 2.</p><p>(a) Show that <span class="chem">5a^3 + 27a - 162 = 0</span>. <strong>[3 marks]</strong><br>(b) Hence find the value of <span class="chem">a</span>. <strong>[1 mark]</strong><br>(c) Find the set of values of <span class="chem">x</span> for which the expansion is valid. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">(1 + ax)^{1/3}</span>（ただし <span class=\"chem\">a &gt; 0</span>）を <span class=\"chem\">x</span> の昇べきの順に展開したとき、<span class=\"chem\">x</span> の係数と <span class=\"chem\">x^3</span> の係数の和が 2 である。</p><p>(a) <span class=\"chem\">5a^3 + 27a - 162 = 0</span> を示しなさい (Show that)。<strong>[3 marks]</strong><br>(b) これを用いて (Hence)、<span class=\"chem\">a</span> の値を求めなさい。<strong>[1 mark]</strong><br>(c) 展開が有効となる <span class=\"chem\">x</span> の値の範囲を求めなさい (Find)。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Use <span class="chem">n = 1/3</span> and <span class="chem">u = ax</span>; the <span class="chem">x^3</span> term is <span class="chem">(n(n - 1)(n - 2)/3!)(ax)^3</span>.
        "<span class=\"chem\">n = 1/3</span>、<span class=\"chem\">u = ax</span> を使います。<span class=\"chem\">x^3</span> の項は <span class=\"chem\">(n(n - 1)(n - 2)/3!)(ax)^3</span> です。",
        // EN: The cubic in (b) has no rational root: solve it with your GDC polynomial solver.
        "(b) の 三次方程式は有理数の解をもちません。GDC の多項式ソルバーで解きます。",
        // EN: For (c) use <span class="chem">|ax| &lt; 1</span> with your value of <span class="chem">a</span>.
        "(c) では、求めた <span class=\"chem\">a</span> の値とともに <span class=\"chem\">|ax| &lt; 1</span> を使います。",
      ],
      // EN: <div class="worked__math">(a) <i>a</i>/3 + 5<i>a</i><sup>3</sup>/81 = 2 ⇒ 5<i>a</i><sup>3</sup> + 27<i>a</i> − 162 = 0 (b) <i>a</i> ≈ 2.63 (c) |<i>x</i>| &lt; 0.380</div>
      solution: "<div class=\"worked__math\">(a) <i>a</i>/3 + 5<i>a</i><sup>3</sup>/81 = 2 ⇒ 5<i>a</i><sup>3</sup> + 27<i>a</i> − 162 = 0 (b) <i>a</i> ≈ 2.63 (c) |<i>x</i>| &lt; 0.380</div>",
      // EN: <div class="worked__math">(a) coefficient of <i>x</i>: <span class="frac"><span><i>a</i></span><span>3</span></span>; coefficient of <i>x</i><sup>3</sup>: <span class="frac"><span>(1/3)(−2/3)(−5/3)</span><span>3!</span></span><i>a</i><sup>3</sup> = <span class="frac"><span>5<i>a</i><sup>3</sup></span><span>81</span></span>; <span class="frac"><span><i>a</i></span><span>3</span></span> + <span class="frac"><span>5<i>a</i><sup>3</sup></span><span>81</span></span> = 2 ⇒ 27<i>a</i> + 5<i>a</i><sup>3</sup> = 162</div><div class="worked__math">(b) GDC: <b><i>a</i> = 2.63</b> (2.6302…)</div><div class="worked__math">(c) |<i>ax</i>| &lt; 1 ⇔ <b>|<i>x</i>| &lt; 0.380</b> (1/<i>a</i> = 0.38019…)</div>
      answer: "<div class=\"worked__math\">(a) <i>x</i> の係数： <span class=\"frac\"><span><i>a</i></span><span>3</span></span>; <i>x</i><sup>3</sup> の係数： <span class=\"frac\"><span>(1/3)(−2/3)(−5/3)</span><span>3!</span></span><i>a</i><sup>3</sup> = <span class=\"frac\"><span>5<i>a</i><sup>3</sup></span><span>81</span></span>; <span class=\"frac\"><span><i>a</i></span><span>3</span></span> + <span class=\"frac\"><span>5<i>a</i><sup>3</sup></span><span>81</span></span> = 2 ⇒ 27<i>a</i> + 5<i>a</i><sup>3</sup> = 162</div><div class=\"worked__math\">(b) GDC: <b><i>a</i> = 2.63</b> (2.6302…)</div><div class=\"worked__math\">(c) |<i>ax</i>| &lt; 1 ⇔ <b>|<i>x</i>| &lt; 0.380</b> (1/<i>a</i> = 0.38019…)</div>",
      markscheme: [
        // EN: M1: Uses the extended binomial expansion with <span class="chem">n = 1/3</span> and <span class="chem">u = ax</span>, including <span class="chem">n(n - 1)(n - 2)/3!</span> for the <span class="chem">x^3</span> term.
        "M1：<span class=\"chem\">n = 1/3</span>、<span class=\"chem\">u = ax</span> として拡張二項展開を使い、<span class=\"chem\">x^3</span> の項に <span class=\"chem\">n(n - 1)(n - 2)/3!</span> を含める。",
        // EN: A1: Coefficient of <span class="chem">x</span> is <span class="chem">a/3</span>.
        "A1：<span class=\"chem\">x</span> の係数は <span class=\"chem\">a/3</span>。",
        // EN: A1: Coefficient of <span class="chem">x^3</span> is <span class="chem">5a^3/81</span>, and multiplies <span class="chem">a/3 + 5a^3/81 = 2</span> by 81. AG: <span class="chem">5a^3 + 27a - 162 = 0</span>; the given line itself earns no mark.
        "A1：<span class=\"chem\">x^3</span> の係数は <span class=\"chem\">5a^3/81</span> であり、<span class=\"chem\">a/3 + 5a^3/81 = 2</span> の両辺に 81 を掛ける。AG：<span class=\"chem\">5a^3 + 27a - 162 = 0</span>。与えられた結果の行そのものには得点がない。",
        // EN: A1: <span class="chem">a = 2.63</span> (the only real root).
        "A1：<span class=\"chem\">a = 2.63</span>（ただ一つの実数解）。",
        // EN: M1: Uses <span class="chem">|ax| &lt; 1</span>.
        "M1：<span class=\"chem\">|ax| &lt; 1</span> を使う。",
        // EN: A1: <span class="chem">|x| &lt; 0.380</span> (accept <span class="chem">|x| &lt; 1/a</span> with <span class="chem">1/a = 0.380</span>).
        "A1：<span class=\"chem\">|x| &lt; 0.380</span>（<span class=\"chem\">1/a = 0.380</span> として <span class=\"chem\">|x| &lt; 1/a</span> も可）。",
      ],
    },

    // ── t1-3-q038 · short · challenge · AHL · AHL 1.10; SL 1.4 · 9 marks
    "t1-3-q038": {
      // EN: <p>A savings account pays an annual interest rate <span class="chem">r</span> (as a decimal), compounded once a year. A customer wants the equivalent monthly rate <span class="chem">m</span>: the rate that, compounded every month for 12 months, gives the same final amount.</p><p>(a) Show that <span class="chem">m = (1 + r)^{1/12} - 1</span>. <strong>[2 marks]</strong><br>(b) Use the extended binomial theorem to show that <span class="chem">m ≈ r/12 - 11r^2/288</span>. <strong>[3 marks]</strong><br>(c) State the condition on <span class="chem">r</span> for which the full series for <span class="chem">m</span> converges. <strong>[1 mark]</strong><br>(d) For an annual rate of 6%, find the exact value of the approximation in (b) and the value of <span class="chem">m</span> given by your GDC to 4 significant figures, and find the percentage error of the approximation, using the unrounded GDC value of <span class="chem">m</span>. <strong>[3 marks]</strong></p>
      stem: "<p>ある預金口座は年利率 <span class=\"chem\">r</span>（小数で表す）で、年に一度複利で利息がつく。ある顧客は同等の月利率 <span class=\"chem\">m</span>、すなわち毎月複利で 12 か月運用したときに同じ最終金額になる利率を知りたい。</p><p>(a) <span class=\"chem\">m = (1 + r)^{1/12} - 1</span> を示しなさい (Show that)。<strong>[2 marks]</strong><br>(b) 拡張二項定理を用いて <span class=\"chem\">m ≈ r/12 - 11r^2/288</span> を示しなさい。<strong>[3 marks]</strong><br>(c) <span class=\"chem\">m</span> の級数全体が収束するための <span class=\"chem\">r</span> の条件を述べなさい (State)。<strong>[1 mark]</strong><br>(d) 年利率 6% のとき、(b) の近似値の正確な値と、GDC で求めた <span class=\"chem\">m</span> の値（有効数字 4 桁）を求め、丸める前の GDC の <span class=\"chem\">m</span> の値を使って近似の百分率誤差を求めなさい (Find)。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: “equivalent” means equal amounts after one year, so <span class="chem">(1 + m)^{12} = 1 + r</span>. Part (b) is then the extended binomial with the fractional index <span class="chem">1/12</span>.
        "解読：「同等」は 一年後の金額が等しいことを意味するので、<span class=\"chem\">(1 + m)^{12} = 1 + r</span> です。(b) は分数の指数 <span class=\"chem\">1/12</span> による拡張二項展開です。",
        // EN: In (b), <span class="chem">n = 1/12</span>, so <span class="chem">n - 1 = -11/12</span>.
        "(b) では <span class=\"chem\">n = 1/12</span> なので <span class=\"chem\">n - 1 = -11/12</span> です。",
        // EN: In (d) use <span class="chem">r = 0.06</span>, not 6.
        "(d) では 6 ではなく <span class=\"chem\">r = 0.06</span> を使います。",
      ],
      // EN: <p><b>Decode:</b> “equivalent monthly rate” → (1 + <i>m</i>)<sup>12</sup> = 1 + <i>r</i>; then a binomial series with <i>n</i> = 1/12.</p><div class="worked__math">(b) <i>m</i> ≈ <i>r</i>/12 − 11<i>r</i><sup>2</sup>/288 (c) |<i>r</i>| &lt; 1 (d) 0.0048625 vs 0.004868, error ≈ 0.104 %</div>
      solution: "<p><b>解読：</b>「同等の月利率」→ (1 + <i>m</i>)<sup>12</sup> = 1 + <i>r</i>。次に <i>n</i> = 1/12 の二項級数を使います。</p><div class=\"worked__math\">(b) <i>m</i> ≈ <i>r</i>/12 − 11<i>r</i><sup>2</sup>/288 (c) |<i>r</i>| &lt; 1 (d) 0.0048625 と 0.004868, 誤差 ≈ 0.104 %</div>",
      // EN: <div class="worked__math">(a) (1 + <i>m</i>)<sup>12</sup> = 1 + <i>r</i> ⇒ <i>m</i> = (1 + <i>r</i>)<sup>1/12</sup> − 1</div><div class="worked__math">(b) (1 + <i>r</i>)<sup>1/12</sup> = 1 + <span class="frac"><span><i>r</i></span><span>12</span></span> + <span class="frac"><span>(1/12)(−11/12)</span><span>2</span></span><i>r</i><sup>2</sup> + … = 1 + <span class="frac"><span><i>r</i></span><span>12</span></span> − <span class="frac"><span>11<i>r</i><sup>2</sup></span><span>288</span></span> + …</div><div class="worked__math">(c) |<i>r</i>| &lt; 1 (for a positive rate, 0 &lt; <i>r</i> &lt; 1)</div><div class="worked__math">(d) <i>r</i> = 0.06: approximation = 0.005 − 0.0001375 = <b>0.0048625</b>; GDC: <i>m</i> = 1.06<sup>1/12</sup> − 1 = <b>0.004868</b> (0.0048675…); percentage error ≈ <b>0.104 %</b> (an underestimate)</div>
      answer: "<div class=\"worked__math\">(a) (1 + <i>m</i>)<sup>12</sup> = 1 + <i>r</i> ⇒ <i>m</i> = (1 + <i>r</i>)<sup>1/12</sup> − 1</div><div class=\"worked__math\">(b) (1 + <i>r</i>)<sup>1/12</sup> = 1 + <span class=\"frac\"><span><i>r</i></span><span>12</span></span> + <span class=\"frac\"><span>(1/12)(−11/12)</span><span>2</span></span><i>r</i><sup>2</sup> + … = 1 + <span class=\"frac\"><span><i>r</i></span><span>12</span></span> − <span class=\"frac\"><span>11<i>r</i><sup>2</sup></span><span>288</span></span> + …</div><div class=\"worked__math\">(c) |<i>r</i>| &lt; 1 （正の利率では 0 &lt; <i>r</i> &lt; 1）</div><div class=\"worked__math\">(d) <i>r</i> = 0.06: 近似値 = 0.005 − 0.0001375 = <b>0.0048625</b>; GDC: <i>m</i> = 1.06<sup>1/12</sup> − 1 = <b>0.004868</b> (0.0048675…); 百分率誤差 ≈ <b>0.104 %</b> （過小評価）</div>",
      markscheme: [
        // EN: M1: Equates the amounts: <span class="chem">P(1 + m)^{12} = P(1 + r)</span>.
        "M1：金額を等しいとおく：<span class=\"chem\">P(1 + m)^{12} = P(1 + r)</span>。",
        // EN: A1: Takes the 12th root and rearranges. AG: <span class="chem">m = (1 + r)^{1/12} - 1</span>; the given line itself earns no mark.
        "A1：12 乗根をとって変形する。AG：<span class=\"chem\">m = (1 + r)^{1/12} - 1</span>。与えられた結果の行そのものには得点がない。",
        // EN: M1: Uses the extended binomial expansion with <span class="chem">n = 1/12</span> and <span class="chem">u = r</span>.
        "M1：<span class=\"chem\">n = 1/12</span>、<span class=\"chem\">u = r</span> として拡張二項展開を使う。",
        // EN: A1: Linear term <span class="chem">r/12</span>.
        "A1：一次の項 <span class=\"chem\">r/12</span>。",
        // EN: A1: Quadratic coefficient <span class="chem">(1/12)(-11/12)/2 = -11/288</span>, and subtracts 1. AG: <span class="chem">m ≈ r/12 - 11r^2/288</span>.
        "A1：二次の項の係数 <span class=\"chem\">(1/12)(-11/12)/2 = -11/288</span> であり、1 を引く。AG：<span class=\"chem\">m ≈ r/12 - 11r^2/288</span>。",
        // EN: A1: <span class="chem">|r| &lt; 1</span>.
        "A1：<span class=\"chem\">|r| &lt; 1</span>。",
        // EN: A1: Approximation 0.0048625.
        "A1：近似値 0.0048625。",
        // EN: A1: GDC value 0.004868 (0.0048675…).
        "A1：GDC の値 0.004868（0.0048675…）。",
        // EN: A1: Percentage error 0.104 %.
        "A1：百分率誤差 0.104 %。",
      ],
    },

    // ── t1-3-q039 · numeric · exam · AHL · AHL 1.10 · 4 marks
    "t1-3-q039": {
      // EN: <p>A hockey squad has 18 players. For a match, the coach names a captain, a vice-captain and 9 further players, whose roles are not distinguished. Find the number of different ways in which the coach can do this.</p>
      stem: "<p>あるホッケーチームには 18 人の選手がいる。試合のために、コーチはキャプテン、副キャプテン、および役割を区別しない他の 9 人の選手を指名する。コーチがこれを行う方法は何通りあるか求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: two different kinds of choice. Captain and vice-captain are different roles (order matters); the other 9 are just a group (order does not matter).
        "解読：種類の異なる二つの選び方があります。キャプテンと副キャプテンは異なる役割です（順序を区別する）。他の 9 人は単なる集まりです（順序を区別しない）。",
        // EN: Captain then vice-captain: <span class="chem">18P2</span> ways. Then choose 9 of the remaining 16 players.
        "キャプテン、次に副キャプテン：<span class=\"chem\">18P2</span> 通り。そのあと残りの 16 人から 9 人を選びます。",
        // EN: Multiply: <span class="chem">18P2 × 16C9</span>.
        "掛け合わせます：<span class=\"chem\">18P2 × 16C9</span>。",
      ],
      // EN: <div class="worked__math"><sup>18</sup>P<sub>2</sub> × <sup>16</sup>C<sub>9</sub> = 306 × 11 440 = <b>3 500 640</b></div>
      solution: "<div class=\"worked__math\"><sup>18</sup>P<sub>2</sub> × <sup>16</sup>C<sub>9</sub> = 306 × 11 440 = <b>3 500 640</b></div>",
    },

    // ── t1-3-q040 · numeric · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q040": {
      // EN: <p>A city has a rectangular grid of streets. A courier starts at junction P and must reach junction Q, which is 9 blocks east and 7 blocks north of P, by a shortest route (so she only ever travels east or north along the streets). Today the junction that is 4 blocks east and 3 blocks north of P is closed.</p><p>Find the number of shortest routes from P to Q that the courier can still use.</p>
      stem: "<p>ある都市の道路は長方形の碁盤の目になっている。配達員は交差点 P を出発し、P から東へ 9 区画、北へ 7 区画の位置にある交差点 Q まで最短経路で行かなければならない（したがって道路に沿って東か北にしか進まない）。今日は、P から東へ 4 区画、北へ 3 区画の位置にある交差点が閉鎖されている。</p><p>配達員がまだ使える P から Q への最短経路の数を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: every shortest route is a string of 9 E-moves and 7 N-moves in some order, so choosing which 7 of the 16 moves are N fixes the route: <span class="chem">16C7</span> routes. Then remove the routes through the closed junction (complement).
        "解読：最短経路はどれも、9 回の E の移動と 7 回の N の移動をある順に並べた列なので、16 回の移動のうちどの 7 回が N かを選べば経路が決まります：<span class=\"chem\">16C7</span> 通り。そこから閉鎖された交差点を通る経路を引きます（余事象）。",
        // EN: Routes through the closed junction: (routes P → junction) × (routes junction → Q) = <span class="chem">7C3 × 9C4</span>.
        "閉鎖された交差点を通る経路：（P → 交差点の経路数）×（交差点 → Q の経路数）= <span class=\"chem\">7C3 × 9C4</span>。",
        // EN: Subtract from the total.
        "総数から引きます。",
      ],
      // EN: <p><b>Decode:</b> a shortest route = an ordering of 9 E and 7 N moves = a choice of positions for the N moves.</p><div class="worked__math">All routes: <sup>16</sup>C<sub>7</sub> = 11 440</div><div class="worked__math">Through the closed junction (4 E, 3 N, then 5 E, 4 N): <sup>7</sup>C<sub>3</sub> × <sup>9</sup>C<sub>4</sub> = 35 × 126 = 4410</div><div class="worked__math">Available routes = 11 440 − 4410 = <b>7030</b></div>
      solution: "<p><b>解読：</b>最短経路 = 9 回の E と 7 回の N の移動の並べ方 = N の移動の位置の選び方。</p><div class=\"worked__math\">すべての経路：<sup>16</sup>C<sub>7</sub> = 11 440</div><div class=\"worked__math\">閉鎖された交差点を通る（4 E、3 N、次に 5 E、4 N）：<sup>7</sup>C<sub>3</sub> × <sup>9</sup>C<sub>4</sub> = 35 × 126 = 4410</div><div class=\"worked__math\">使える経路 = 11 440 − 4410 = <b>7030</b></div>",
    },

    // ── t1-3-q041 · numeric · foundation · AHL · AHL 1.10 · 2 marks
    "t1-3-q041": {
      // EN: <p>In a chess tournament, every player plays every other player exactly once. A total of 28 games are played. Find the number of players.</p>
      stem: "<p>あるチェスのトーナメントでは、どの選手も他のすべての選手とちょうど一回ずつ対戦する。全部で 28 試合が行われる。選手の人数を求めなさい (Find)。</p>",
      hints: [
        // EN: Each game is fixed by choosing 2 of the <span class="chem">n</span> players, so the number of games is <span class="chem">nC2 = n(n - 1)/2</span>.
        "各試合は <span class=\"chem\">n</span> 人の選手から 2 人を選ぶと決まるので、試合数は <span class=\"chem\">nC2 = n(n - 1)/2</span> です。",
        // EN: Solve <span class="chem">n(n - 1) = 56</span> for a positive integer <span class="chem">n</span>.
        "正の整数 <span class=\"chem\">n</span> について <span class=\"chem\">n(n - 1) = 56</span> を解きます。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = 28 ⇒ <i>n</i><sup>2</sup> − <i>n</i> − 56 = 0 ⇒ (<i>n</i> − 8)(<i>n</i> + 7) = 0 ⇒ <b><i>n</i> = 8</b></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = 28 ⇒ <i>n</i><sup>2</sup> − <i>n</i> − 56 = 0 ⇒ (<i>n</i> − 8)(<i>n</i> + 7) = 0 ⇒ <b><i>n</i> = 8</b></div>",
    },

    // ── t1-3-q042 · numeric · foundation · AHL · AHL 1.10 · 2 marks
    "t1-3-q042": {
      // EN: <p>Find the coefficient of <span class="chem">x^2</span> in the expansion of <span class="chem">(1 - x)^{-2}</span> in ascending powers of <span class="chem">x</span>.</p>
      stem: "<p><span class=\"chem\">(1 - x)^{-2}</span> を <span class=\"chem\">x</span> の昇べきの順に展開したときの <span class=\"chem\">x^2</span> の係数を求めなさい (Find)。</p>",
      hints: [
        // EN: Use <span class="chem">(1 + u)^n = 1 + nu + (n(n - 1)/2!)u^2 + ...</span> with <span class="chem">n = -2</span> and <span class="chem">u = -x</span>.
        "<span class=\"chem\">n = -2</span>、<span class=\"chem\">u = -x</span> として <span class=\"chem\">(1 + u)^n = 1 + nu + (n(n - 1)/2!)u^2 + ...</span> を使います。",
        // EN: <span class="chem">(-x)^2 = x^2</span>, so the sign comes only from <span class="chem">n(n - 1)</span>.
        "<span class=\"chem\">(-x)^2 = x^2</span> なので、符号は <span class=\"chem\">n(n - 1)</span> だけから決まります。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>(−2)(−3)</span><span>2!</span></span>(−<i>x</i>)<sup>2</sup> = 3<i>x</i><sup>2</sup> ⇒ coefficient <b>3</b></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>(−2)(−3)</span><span>2!</span></span>(−<i>x</i>)<sup>2</sup> = 3<i>x</i><sup>2</sup> ⇒ 係数 <b>3</b></div>",
    },

    // ── t1-3-q043 · numeric · foundation · AHL · AHL 1.11 · 3 marks
    "t1-3-q043": {
      // EN: <p>Given that <span class="chem">(x + 8) / ((x + 3)(x - 2)) = A / (x + 3) + B / (x - 2)</span>, find the value of <span class="chem">A</span>.</p>
      stem: "<p><span class=\"chem\">(x + 8) / ((x + 3)(x - 2)) = A / (x + 3) + B / (x - 2)</span> が成り立つとき、<span class=\"chem\">A</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Multiply through by <span class="chem">(x + 3)(x - 2)</span>: <span class="chem">x + 8 ≡ A(x - 2) + B(x + 3)</span>.
        "両辺に <span class=\"chem\">(x + 3)(x - 2)</span> を掛けます：<span class=\"chem\">x + 8 ≡ A(x - 2) + B(x + 3)</span>。",
        // EN: Choose the value of <span class="chem">x</span> that makes the <span class="chem">B</span> term zero.
        "<span class=\"chem\">B</span> の項が消えるような <span class=\"chem\">x</span> の値を選びます。",
      ],
      // EN: <div class="worked__math"><i>x</i> + 8 ≡ <i>A</i>(<i>x</i> − 2) + <i>B</i>(<i>x</i> + 3); <i>x</i> = −3: 5 = −5<i>A</i> ⇒ <b><i>A</i> = −1</b></div>
      solution: "<div class=\"worked__math\"><i>x</i> + 8 ≡ <i>A</i>(<i>x</i> − 2) + <i>B</i>(<i>x</i> + 3); <i>x</i> = −3: 5 = −5<i>A</i> ⇒ <b><i>A</i> = −1</b></div>",
    },

    // ── t1-3-q044 · numeric · exam · AHL · AHL 1.10 · 4 marks
    "t1-3-q044": {
      // EN: <p>Four-digit numbers are formed from the digits 0, 1, 2, 3, 4, 5, 6, with no digit used more than once. A four-digit number cannot start with 0. Find how many of these numbers are odd.</p>
      stem: "<p>数字 0、1、2、3、4、5、6 を使って、同じ数字を重複して使わずに四桁の数を作る。四桁の数の先頭は 0 にできない。これらの数のうち奇数はいくつあるか求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: two restricted positions. The units digit must be odd (1, 3 or 5) and the thousands digit cannot be 0. Fill the most restricted slots first.
        "解読：制限のある位が二つあります。一の位は奇数（1、3、5 のいずれか）でなければならず、千の位は 0 にできません。制限の最も強い位から先に決めます。",
        // EN: Units digit: 3 choices. Thousands digit: not 0 and not the units digit, so 5 choices.
        "一の位：3 通り。千の位：0 でなく、一の位の数字でもないので 5 通り。",
        // EN: The remaining two slots are filled from the 5 digits left, then 4.
        "残りの二つの位は、残った 5 個の数字から、次に 4 個の数字から選びます。",
      ],
      // EN: <div class="worked__math">units (odd): 3; thousands (not 0, not the units digit): 5; hundreds: 5; tens: 4</div><div class="worked__math">3 × 5 × 5 × 4 = <b>300</b></div>
      solution: "<div class=\"worked__math\">一の位（奇数）：3、千の位（0 でなく、一の位の数字でもない）：5、百の位：5、十の位：4</div><div class=\"worked__math\">3 × 5 × 5 × 4 = <b>300</b></div>",
    },

    // ── t1-3-q045 · short · exam · AHL · AHL 1.10 · 6 marks
    "t1-3-q045": {
      // EN: <p>A team of 4 is chosen from 6 boys and 5 girls.</p><p>(a) Write down the number of different teams that can be chosen. <strong>[1 mark]</strong><br>(b) Find the number of teams that contain at least one girl. <strong>[2 marks]</strong><br>(c) The team must contain exactly 2 boys and 2 girls. One of the boys, Raj, and one of the girls, Sofia, cannot both be in the team. Find the number of possible teams. <strong>[3 marks]</strong></p>
      stem: "<p>男子 6 人と女子 5 人から 4 人のチームを選ぶ。</p><p>(a) 選ぶことのできる異なるチームの数を書きなさい (Write down)。<strong>[1 mark]</strong><br>(b) 女子を少なくとも一人含むチームの数を求めなさい (Find)。<strong>[2 marks]</strong><br>(c) チームは男子ちょうど 2 人と女子ちょうど 2 人からなるものとする。男子の一人 Raj と女子の一人 Sofia は、同時にチームに入ることはできない。考えられるチームの数を求めなさい。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: “at least one girl” is best done by the complement (no girls at all).
        "解読：「女子を少なくとも一人」は余事象（女子が一人もいない）で求めるのが最善です。",
        // EN: In (c), first count all 2-boy-2-girl teams, then subtract those that contain both Raj and Sofia (fix them, then choose 1 more boy and 1 more girl).
        "(c) では、まず「男子 2 人・女子 2 人」のチームをすべて数え、そこから Raj と Sofia の両方を含むチーム（二人を固定し、さらに男子 1 人と女子 1 人を選ぶ）を引きます。",
      ],
      // EN: <div class="worked__math">(a) 330 (b) 330 − 15 = 315 (c) 150 − 20 = 130</div>
      solution: "<div class=\"worked__math\">(a) 330 (b) 330 − 15 = 315 (c) 150 − 20 = 130</div>",
      // EN: <div class="worked__math">(a) <sup>11</sup>C<sub>4</sub> = <b>330</b></div><div class="worked__math">(b) 330 − <sup>6</sup>C<sub>4</sub> = 330 − 15 = <b>315</b></div><div class="worked__math">(c) <sup>6</sup>C<sub>2</sub> × <sup>5</sup>C<sub>2</sub> = 15 × 10 = 150; teams with both Raj and Sofia: <sup>5</sup>C<sub>1</sub> × <sup>4</sup>C<sub>1</sub> = 20; 150 − 20 = <b>130</b></div>
      answer: "<div class=\"worked__math\">(a) <sup>11</sup>C<sub>4</sub> = <b>330</b></div><div class=\"worked__math\">(b) 330 − <sup>6</sup>C<sub>4</sub> = 330 − 15 = <b>315</b></div><div class=\"worked__math\">(c) <sup>6</sup>C<sub>2</sub> × <sup>5</sup>C<sub>2</sub> = 15 × 10 = 150; Raj と Sofia の両方を含むチーム：<sup>5</sup>C<sub>1</sub> × <sup>4</sup>C<sub>1</sub> = 20; 150 − 20 = <b>130</b></div>",
      markscheme: [
        // EN: A1: 330.
        "A1：330。",
        // EN: M1: Uses the complement: total minus all-boy teams, <span class="chem">330 - 6C4</span>.
        "M1：余事象を使う：総数から男子だけのチームを引く、<span class=\"chem\">330 - 6C4</span>。",
        // EN: A1: 315.
        "A1：315。",
        // EN: M1: Counts 2 boys and 2 girls: <span class="chem">6C2 × 5C2 = 150</span>.
        "M1：男子 2 人と女子 2 人を数える：<span class=\"chem\">6C2 × 5C2 = 150</span>。",
        // EN: M1: Counts teams containing both Raj and Sofia: <span class="chem">5C1 × 4C1 = 20</span>.
        "M1：Raj と Sofia の両方を含むチームを数える：<span class=\"chem\">5C1 × 4C1 = 20</span>。",
        // EN: A1: 130.
        "A1：130。",
      ],
    },

    // ── t1-3-q046 · numeric · exam · AHL · AHL 1.10 · 5 marks
    "t1-3-q046": {
      // EN: <p>Seven different people, including Ali, Bea and Cal, stand in a row for a photograph. Ali and Bea must stand next to each other, and Cal must not stand at either end of the row. Find the number of possible arrangements.</p>
      stem: "<p>Ali、Bea、Cal を含む異なる七人が、写真撮影のために横一列に並ぶ。Ali と Bea は隣り合わなければならず、Cal は列のどちらの端にも立ってはならない。並び方の総数を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: “next to each other” → glue Ali and Bea into one block; “not at either end” → count the arrangements with Cal at an end and subtract (complement).
        "解読：「隣り合う」→ Ali と Bea をひとまとめのブロックにします。「どちらの端にも立たない」→ Cal が端にいる並び方を数えて引きます（余事象）。",
        // EN: With the block there are 6 units: <span class="chem">6! × 2!</span> arrangements in total.
        "ブロックを含めて 6 個の単位があるので、全部で <span class=\"chem\">6! × 2!</span> 通りの並び方があります。",
        // EN: Cal at an end: 2 choices of end, then arrange the other 5 units (including the block) in <span class="chem">5! × 2!</span> ways.
        "Cal が端にいる場合：端の選び方が 2 通り、そのあと残りの 5 個の単位（ブロックを含む）を <span class=\"chem\">5! × 2!</span> 通りで並べます。",
      ],
      // EN: <div class="worked__math">Ali and Bea together: 6! × 2! = 1440</div><div class="worked__math">…with Cal at an end: 2 × 5! × 2! = 480</div><div class="worked__math">1440 − 480 = <b>960</b></div>
      solution: "<div class=\"worked__math\">Ali と Bea が隣り合う：6! × 2! = 1440</div><div class=\"worked__math\">…そのうち Cal が端にいる：2 × 5! × 2! = 480</div><div class=\"worked__math\">1440 − 480 = <b>960</b></div>",
    },

    // ── t1-3-q047 · numeric · exam · AHL · AHL 1.10 · 4 marks
    "t1-3-q047": {
      // EN: <p>Find the exact value of the coefficient of <span class="chem">x^3</span> in the expansion of <span class="chem">(1 + 3x)^{-1/3}</span> in ascending powers of <span class="chem">x</span>.</p>
      stem: "<p><span class=\"chem\">(1 + 3x)^{-1/3}</span> を <span class=\"chem\">x</span> の昇べきの順に展開したときの <span class=\"chem\">x^3</span> の係数の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: The <span class="chem">x^3</span> term is <span class="chem">(n(n - 1)(n - 2)/3!)u^3</span> with <span class="chem">n = -1/3</span> and <span class="chem">u = 3x</span>.
        "<span class=\"chem\">x^3</span> の項は <span class=\"chem\">(n(n - 1)(n - 2)/3!)u^3</span> で、<span class=\"chem\">n = -1/3</span>、<span class=\"chem\">u = 3x</span> です。",
        // EN: <span class="chem">n - 1 = -4/3</span> and <span class="chem">n - 2 = -7/3</span>; three negative factors give a negative product.
        "<span class=\"chem\">n - 1 = -4/3</span>、<span class=\"chem\">n - 2 = -7/3</span> です。負の因数が三つあるので積は負になります。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>(−1/3)(−4/3)(−7/3)</span><span>3!</span></span>(3<i>x</i>)<sup>3</sup> = <span class="frac"><span>−28/27</span><span>6</span></span> × 27<i>x</i><sup>3</sup> = −<span class="frac"><span>28</span><span>6</span></span><i>x</i><sup>3</sup></div><div class="worked__math">Coefficient = <b>−<span class="frac"><span>14</span><span>3</span></span></b></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>(−1/3)(−4/3)(−7/3)</span><span>3!</span></span>(3<i>x</i>)<sup>3</sup> = <span class=\"frac\"><span>−28/27</span><span>6</span></span> × 27<i>x</i><sup>3</sup> = −<span class=\"frac\"><span>28</span><span>6</span></span><i>x</i><sup>3</sup></div><div class=\"worked__math\">係数 = <b>−<span class=\"frac\"><span>14</span><span>3</span></span></b></div>",
    },

    // ── t1-3-q048 · short · exam · AHL · AHL 1.10 · 7 marks
    "t1-3-q048": {
      // EN: <p>(a) Find the first three terms of the expansion of <span class="chem">(8 - 3x)^{1/3}</span> in ascending powers of <span class="chem">x</span>. <strong>[4 marks]</strong><br>(b) State the set of values of <span class="chem">x</span> for which the expansion is valid. <strong>[1 mark]</strong><br>(c) Hence find an approximation for the cube root of 7.97, giving your answer to 6 decimal places. <strong>[2 marks]</strong></p>
      stem: "<p>(a) <span class=\"chem\">(8 - 3x)^{1/3}</span> を <span class=\"chem\">x</span> の昇べきの順に展開したときの、最初の三つの項を求めなさい (Find)。<strong>[4 marks]</strong><br>(b) この展開が有効となる <span class=\"chem\">x</span> の値の範囲を述べなさい (State)。<strong>[1 mark]</strong><br>(c) これを用いて (Hence)、7.97 の立方根の近似値を求め、小数第 6 位まで答えなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Take out <span class="chem">8^{1/3}</span> first so the bracket starts with 1.
        "括弧の中が 1 から始まるように、まず <span class=\"chem\">8^{1/3}</span> をくくり出します。",
        // EN: For (c), solve <span class="chem">8 - 3x = 7.97</span> to find the value of <span class="chem">x</span> to substitute.
        "(c) では、<span class=\"chem\">8 - 3x = 7.97</span> を解いて代入する <span class=\"chem\">x</span> の値を求めます。",
      ],
      // EN: <div class="worked__math">(a) 2 − <i>x</i>/4 − <i>x</i><sup>2</sup>/32 (b) |<i>x</i>| &lt; 8/3 (c) <i>x</i> = 0.01 ⇒ 1.997497</div>
      solution: "<div class=\"worked__math\">(a) 2 − <i>x</i>/4 − <i>x</i><sup>2</sup>/32 (b) |<i>x</i>| &lt; 8/3 (c) <i>x</i> = 0.01 ⇒ 1.997497</div>",
      // EN: <div class="worked__math">(a) (8 − 3<i>x</i>)<sup>1/3</sup> = 2(1 − <span class="frac"><span>3<i>x</i></span><span>8</span></span>)<sup>1/3</sup> = 2[1 + <span class="frac"><span>1</span><span>3</span></span>(−<span class="frac"><span>3<i>x</i></span><span>8</span></span>) + <span class="frac"><span>(1/3)(−2/3)</span><span>2</span></span>(−<span class="frac"><span>3<i>x</i></span><span>8</span></span>)<sup>2</sup> + …] = <b>2 − <span class="frac"><span><i>x</i></span><span>4</span></span> − <span class="frac"><span><i>x</i><sup>2</sup></span><span>32</span></span></b> + …</div><div class="worked__math">(b) |3<i>x</i>/8| &lt; 1 ⇔ <b>|<i>x</i>| &lt; <span class="frac"><span>8</span><span>3</span></span></b></div><div class="worked__math">(c) 8 − 3<i>x</i> = 7.97 ⇒ <i>x</i> = 0.01: 2 − 0.0025 − 0.000003125 = 1.997496875 ≈ <b>1.997497</b></div>
      answer: "<div class=\"worked__math\">(a) (8 − 3<i>x</i>)<sup>1/3</sup> = 2(1 − <span class=\"frac\"><span>3<i>x</i></span><span>8</span></span>)<sup>1/3</sup> = 2[1 + <span class=\"frac\"><span>1</span><span>3</span></span>(−<span class=\"frac\"><span>3<i>x</i></span><span>8</span></span>) + <span class=\"frac\"><span>(1/3)(−2/3)</span><span>2</span></span>(−<span class=\"frac\"><span>3<i>x</i></span><span>8</span></span>)<sup>2</sup> + …] = <b>2 − <span class=\"frac\"><span><i>x</i></span><span>4</span></span> − <span class=\"frac\"><span><i>x</i><sup>2</sup></span><span>32</span></span></b> + …</div><div class=\"worked__math\">(b) |3<i>x</i>/8| &lt; 1 ⇔ <b>|<i>x</i>| &lt; <span class=\"frac\"><span>8</span><span>3</span></span></b></div><div class=\"worked__math\">(c) 8 − 3<i>x</i> = 7.97 ⇒ <i>x</i> = 0.01: 2 − 0.0025 − 0.000003125 = 1.997496875 ≈ <b>1.997497</b></div>",
      markscheme: [
        // EN: M1: Takes out the factor <span class="chem">8^{1/3} = 2</span>.
        "M1：因数 <span class=\"chem\">8^{1/3} = 2</span> をくくり出す。",
        // EN: M1: Uses <span class="chem">n = 1/3</span> with <span class="chem">u = -3x/8</span>.
        "M1：<span class=\"chem\">u = -3x/8</span> として <span class=\"chem\">n = 1/3</span> を使う。",
        // EN: A1: <span class="chem">2 - x/4</span>.
        "A1：<span class=\"chem\">2 - x/4</span>。",
        // EN: A1: <span class="chem">- x^2/32</span>.
        "A1：<span class=\"chem\">- x^2/32</span>。",
        // EN: A1: <span class="chem">|x| &lt; 8/3</span>.
        "A1：<span class=\"chem\">|x| &lt; 8/3</span>。",
        // EN: M1: Uses <span class="chem">x = 0.01</span> (from <span class="chem">8 - 3x = 7.97</span>).
        "M1：<span class=\"chem\">x = 0.01</span> を使う（<span class=\"chem\">8 - 3x = 7.97</span> より）。",
        // EN: A1: 1.997497.
        "A1：1.997497。",
      ],
    },

    // ── t1-3-q049 · numeric · exam · AHL · AHL 1.10, 1.11 · 6 marks
    "t1-3-q049": {
      // EN: <p>By first expressing <span class="chem">6 / ((1 - x)(2 + x))</span> in partial fractions, find the exact value of the coefficient of <span class="chem">x^3</span> in its expansion in ascending powers of <span class="chem">x</span>.</p>
      stem: "<p>まず <span class=\"chem\">6 / ((1 - x)(2 + x))</span> を部分分数に分解し、それを <span class=\"chem\">x</span> の昇べきの順に展開したときの <span class=\"chem\">x^3</span> の係数の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: <span class="chem">6 ≡ A(2 + x) + B(1 - x)</span>; substitute <span class="chem">x = 1</span> and <span class="chem">x = -2</span>.
        "<span class=\"chem\">6 ≡ A(2 + x) + B(1 - x)</span>。<span class=\"chem\">x = 1</span> と <span class=\"chem\">x = -2</span> を代入します。",
        // EN: You should get <span class="chem">2/(1 - x) + 2/(2 + x)</span>. Write <span class="chem">2/(2 + x) = (1 + x/2)^{-1}</span>.
        "<span class=\"chem\">2/(1 - x) + 2/(2 + x)</span> になるはずです。<span class=\"chem\">2/(2 + x) = (1 + x/2)^{-1}</span> と書きます。",
        // EN: The <span class="chem">x^3</span> coefficients are 2 from <span class="chem">2(1 - x)^{-1}</span> and <span class="chem">(-1/2)^3</span> from <span class="chem">(1 + x/2)^{-1}</span>.
        "<span class=\"chem\">x^3</span> の係数は、<span class=\"chem\">2(1 - x)^{-1}</span> から 2、<span class=\"chem\">(1 + x/2)^{-1}</span> から <span class=\"chem\">(-1/2)^3</span> です。",
      ],
      // EN: <div class="worked__math">6 ≡ <i>A</i>(2 + <i>x</i>) + <i>B</i>(1 − <i>x</i>): <i>x</i> = 1 ⇒ <i>A</i> = 2; <i>x</i> = −2 ⇒ <i>B</i> = 2</div><div class="worked__math"><span class="frac"><span>2</span><span>1 − <i>x</i></span></span> + <span class="frac"><span>2</span><span>2 + <i>x</i></span></span> = 2(1 − <i>x</i>)<sup>−1</sup> + (1 + <span class="frac"><span><i>x</i></span><span>2</span></span>)<sup>−1</sup></div><div class="worked__math">Coefficient of <i>x</i><sup>3</sup> = 2 + (−<span class="frac"><span>1</span><span>2</span></span>)<sup>3</sup> = 2 − <span class="frac"><span>1</span><span>8</span></span> = <b><span class="frac"><span>15</span><span>8</span></span></b></div>
      solution: "<div class=\"worked__math\">6 ≡ <i>A</i>(2 + <i>x</i>) + <i>B</i>(1 − <i>x</i>): <i>x</i> = 1 ⇒ <i>A</i> = 2; <i>x</i> = −2 ⇒ <i>B</i> = 2</div><div class=\"worked__math\"><span class=\"frac\"><span>2</span><span>1 − <i>x</i></span></span> + <span class=\"frac\"><span>2</span><span>2 + <i>x</i></span></span> = 2(1 − <i>x</i>)<sup>−1</sup> + (1 + <span class=\"frac\"><span><i>x</i></span><span>2</span></span>)<sup>−1</sup></div><div class=\"worked__math\"><i>x</i><sup>3</sup> の係数 = 2 + (−<span class=\"frac\"><span>1</span><span>2</span></span>)<sup>3</sup> = 2 − <span class=\"frac\"><span>1</span><span>8</span></span> = <b><span class=\"frac\"><span>15</span><span>8</span></span></b></div>",
    },

    // ── t1-3-q050 · short · exam · AHL · AHL 1.10, 1.11 · 7 marks
    "t1-3-q050": {
      // EN: <p>Let <span class="chem">g(x) = (5 - x) / ((1 + x)(1 - 2x))</span>.</p><p>(a) Express <span class="chem">g(x)</span> in partial fractions. <strong>[3 marks]</strong><br>(b) Hence show that the coefficient of <span class="chem">x^n</span> in the expansion of <span class="chem">g(x)</span> in ascending powers of <span class="chem">x</span> is <span class="chem">2(-1)^n + 3 × 2^n</span>. <strong>[2 marks]</strong><br>(c) State the set of values of <span class="chem">x</span> for which the expansion is valid. <strong>[1 mark]</strong><br>(d) Write down the coefficient of <span class="chem">x^5</span>. <strong>[1 mark]</strong></p>
      stem: "<p><span class=\"chem\">g(x) = (5 - x) / ((1 + x)(1 - 2x))</span> とする。</p><p>(a) <span class=\"chem\">g(x)</span> を部分分数に分解しなさい。<strong>[3 marks]</strong><br>(b) これを用いて (Hence)、<span class=\"chem\">g(x)</span> を <span class=\"chem\">x</span> の昇べきの順に展開したときの <span class=\"chem\">x^n</span> の係数が <span class=\"chem\">2(-1)^n + 3 × 2^n</span> であることを示しなさい。<strong>[2 marks]</strong><br>(c) この展開が有効となる <span class=\"chem\">x</span> の値の範囲を述べなさい (State)。<strong>[1 mark]</strong><br>(d) <span class=\"chem\">x^5</span> の係数を書きなさい (Write down)。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Use <span class="chem">x = -1</span> and <span class="chem">x = 1/2</span> to find <span class="chem">A</span> and <span class="chem">B</span>.
        "<span class=\"chem\">x = -1</span> と <span class=\"chem\">x = 1/2</span> を使って <span class=\"chem\">A</span> と <span class=\"chem\">B</span> を求めます。",
        // EN: <span class="chem">(1 + u)^{-1} = 1 - u + u^2 - u^3 + ...</span>, so the coefficient of <span class="chem">u^n</span> is <span class="chem">(-1)^n</span>.
        "<span class=\"chem\">(1 + u)^{-1} = 1 - u + u^2 - u^3 + ...</span> なので、<span class=\"chem\">u^n</span> の係数は <span class=\"chem\">(-1)^n</span> です。",
        // EN: Validity needs both <span class="chem">|x| &lt; 1</span> and <span class="chem">|2x| &lt; 1</span>.
        "有効となるには <span class=\"chem\">|x| &lt; 1</span> と <span class=\"chem\">|2x| &lt; 1</span> の両方が必要です。",
      ],
      // EN: <div class="worked__math">(a) 2/(1 + <i>x</i>) + 3/(1 − 2<i>x</i>) (c) |<i>x</i>| &lt; 1/2 (d) 2(−1) + 3(32) = 94</div>
      solution: "<div class=\"worked__math\">(a) 2/(1 + <i>x</i>) + 3/(1 − 2<i>x</i>) (c) |<i>x</i>| &lt; 1/2 (d) 2(−1) + 3(32) = 94</div>",
      // EN: <div class="worked__math">(a) 5 − <i>x</i> ≡ <i>A</i>(1 − 2<i>x</i>) + <i>B</i>(1 + <i>x</i>): <i>x</i> = −1 ⇒ 6 = 3<i>A</i> ⇒ <i>A</i> = 2; <i>x</i> = <span class="frac"><span>1</span><span>2</span></span> ⇒ <span class="frac"><span>9</span><span>2</span></span> = <span class="frac"><span>3</span><span>2</span></span><i>B</i> ⇒ <i>B</i> = 3; <i>g</i>(<i>x</i>) = <span class="frac"><span>2</span><span>1 + <i>x</i></span></span> + <span class="frac"><span>3</span><span>1 − 2<i>x</i></span></span></div><div class="worked__math">(b) 2(1 + <i>x</i>)<sup>−1</sup> = 2∑(−1)<sup><i>n</i></sup><i>x</i><sup><i>n</i></sup>, 3(1 − 2<i>x</i>)<sup>−1</sup> = 3∑2<sup><i>n</i></sup><i>x</i><sup><i>n</i></sup>, so the coefficient is 2(−1)<sup><i>n</i></sup> + 3 × 2<sup><i>n</i></sup></div><div class="worked__math">(c) |<i>x</i>| &lt; <span class="frac"><span>1</span><span>2</span></span></div><div class="worked__math">(d) −2 + 96 = <b>94</b></div>
      answer: "<div class=\"worked__math\">(a) 5 − <i>x</i> ≡ <i>A</i>(1 − 2<i>x</i>) + <i>B</i>(1 + <i>x</i>): <i>x</i> = −1 ⇒ 6 = 3<i>A</i> ⇒ <i>A</i> = 2; <i>x</i> = <span class=\"frac\"><span>1</span><span>2</span></span> ⇒ <span class=\"frac\"><span>9</span><span>2</span></span> = <span class=\"frac\"><span>3</span><span>2</span></span><i>B</i> ⇒ <i>B</i> = 3; <i>g</i>(<i>x</i>) = <span class=\"frac\"><span>2</span><span>1 + <i>x</i></span></span> + <span class=\"frac\"><span>3</span><span>1 − 2<i>x</i></span></span></div><div class=\"worked__math\">(b) 2(1 + <i>x</i>)<sup>−1</sup> = 2∑(−1)<sup><i>n</i></sup><i>x</i><sup><i>n</i></sup>, 3(1 − 2<i>x</i>)<sup>−1</sup> = 3∑2<sup><i>n</i></sup><i>x</i><sup><i>n</i></sup> なので係数は 2(−1)<sup><i>n</i></sup> + 3 × 2<sup><i>n</i></sup></div><div class=\"worked__math\">(c) |<i>x</i>| &lt; <span class=\"frac\"><span>1</span><span>2</span></span></div><div class=\"worked__math\">(d) −2 + 96 = <b>94</b></div>",
      markscheme: [
        // EN: M1: Sets <span class="chem">5 - x = A(1 - 2x) + B(1 + x)</span> (or cover-up).
        "M1：<span class=\"chem\">5 - x = A(1 - 2x) + B(1 + x)</span> とおく（または代入法 (cover-up) を使う）。",
        // EN: A1: <span class="chem">A = 2</span>.
        "A1：<span class=\"chem\">A = 2</span>。",
        // EN: A1: <span class="chem">B = 3</span>.
        "A1：<span class=\"chem\">B = 3</span>。",
        // EN: M1: Writes the general terms <span class="chem">(1 + x)^{-1} = Σ(-1)^n x^n</span> and <span class="chem">(1 - 2x)^{-1} = Σ(2x)^n</span>.
        "M1：一般項 <span class=\"chem\">(1 + x)^{-1} = Σ(-1)^n x^n</span> と <span class=\"chem\">(1 - 2x)^{-1} = Σ(2x)^n</span> を書く。",
        // EN: A1: Combines <span class="chem">2(-1)^n + 3(2^n)</span>. AG: the given coefficient; the given line itself earns no mark.
        "A1：まとめて <span class=\"chem\">2(-1)^n + 3(2^n)</span>。AG：与えられた係数。与えられた結果の行そのものには得点がない。",
        // EN: A1: <span class="chem">|x| &lt; 1/2</span>.
        "A1：<span class=\"chem\">|x| &lt; 1/2</span>。",
        // EN: A1: 94.
        "A1：94。",
      ],
    },

    // ── t1-3-q051 · numeric · challenge · AHL · AHL 1.10 · 5 marks
    "t1-3-q051": {
      // EN: <p>A student packing for a revision camp may take exactly 5 of her 9 different revision books: 4 on mathematics, 3 on physics and 2 on chemistry. Her teacher insists that every subject is represented among the books she takes. How many different selections of books can she make?</p>
      stem: "<p>勉強合宿の荷造りをしている生徒が、異なる 9 冊の参考書（数学 4 冊、物理 3 冊、化学 2 冊）のうちちょうど 5 冊を持っていける。先生は、持っていく本にすべての科目が含まれていなければならないと言っている。本の選び方は何通りあるか。</p>",
      hints: [
        // EN: Decode: an unordered selection of 5 from 9 with the hidden condition “at least one book from each subject”. Listing cases is slow; use the complement: total − (selections missing a subject).
        "解読：9 冊から 5 冊を順序を区別せずに選ぶ問題で、「各科目から少なくとも一冊」という隠れた条件があります。場合を書き出すのは時間がかかるので、余事象を使います：総数 −（どれかの科目が欠ける選び方）。",
        // EN: Total: <span class="chem">9C5</span>. With no mathematics book, all 5 come from the other 5 books; with no physics, from 6; with no chemistry, from 7.
        "総数：<span class=\"chem\">9C5</span>。数学の本がなければ 5 冊すべてを他の 5 冊から、物理がなければ 6 冊から、化学がなければ 7 冊から選びます。",
        // EN: A selection of 5 cannot miss two subjects at once (at most 4 books would be left), so nothing is subtracted twice.
        "5 冊の選び方で二つの科目が同時に欠けることはありません（残りは多くても 4 冊になる）ので、二重に引かれるものはありません。",
      ],
      // EN: <p><b>Decode:</b> “every subject represented” = complement of “some subject missing”.</p><div class="worked__math">Total: <sup>9</sup>C<sub>5</sub> = 126</div><div class="worked__math">No maths: <sup>5</sup>C<sub>5</sub> = 1; no physics: <sup>6</sup>C<sub>5</sub> = 6; no chemistry: <sup>7</sup>C<sub>5</sub> = 21</div><div class="worked__math">No selection misses two subjects (that leaves at most 4 books)</div><div class="worked__math">126 − (1 + 6 + 21) = <b>98</b></div>
      solution: "<p><b>解読：</b>「すべての科目が含まれる」=「どれかの科目が欠ける」の余事象。</p><div class=\"worked__math\">総数：<sup>9</sup>C<sub>5</sub> = 126</div><div class=\"worked__math\">数学なし：<sup>5</sup>C<sub>5</sub> = 1、物理なし：<sup>6</sup>C<sub>5</sub> = 6、化学なし：<sup>7</sup>C<sub>5</sub> = 21</div><div class=\"worked__math\">二つの科目が欠ける選び方はない（その場合、残りは多くても 4 冊）</div><div class=\"worked__math\">126 − (1 + 6 + 21) = <b>98</b></div>",
    },

    // ── t1-3-q052 · short · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q052": {
      // EN: <p>Let <span class="chem">n</span> and <span class="chem">r</span> be integers with <span class="chem">1 &lt;= r &lt;= n</span>.</p><p>(a) Prove that <sup><i>n</i>+1</sup>P<sub><i>r</i></sub> = <sup><i>n</i></sup>P<sub><i>r</i></sub> + <i>r</i> × <sup><i>n</i></sup>P<sub><i>r</i>−1</sub>. <strong>[4 marks]</strong><br>(b) By considering arrangements of <span class="chem">r</span> objects chosen from <span class="chem">n + 1</span> different objects, one of which is labelled X, explain why this identity is true. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">n</span>、<span class=\"chem\">r</span> を <span class=\"chem\">1 &lt;= r &lt;= n</span> を満たす整数とする。</p><p>(a) <sup><i>n</i>+1</sup>P<sub><i>r</i></sub> = <sup><i>n</i></sup>P<sub><i>r</i></sub> + <i>r</i> × <sup><i>n</i></sup>P<sub><i>r</i>−1</sub> を証明しなさい (Prove)。<strong>[4 marks]</strong><br>(b) X というラベルのついた一つを含む <span class=\"chem\">n + 1</span> 個の異なるものから <span class=\"chem\">r</span> 個を選んで並べる並べ方を考えることにより、この恒等式が成り立つ理由を説明しなさい (Explain)。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: (a) is pure factorial algebra: write every term as a fraction of factorials and put them over one denominator. (b) asks for a counting argument: split the arrangements into two cases.
        "解読：(a) は純粋な階乗の式変形です。各項を階乗の分数で書き、通分します。(b) は場合の数による説明を求めています。並べ方を二つの場合に分けます。",
        // EN: The common denominator is <span class="chem">(n - r + 1)!</span>, because <span class="chem">(n - r + 1)! = (n - r + 1) × (n - r)!</span>.
        "<span class=\"chem\">(n - r + 1)! = (n - r + 1) × (n - r)!</span> なので、共通の分母は <span class=\"chem\">(n - r + 1)!</span> です。",
        // EN: In (b), the two cases are “X is not used” and “X is used”.
        "(b) では、二つの場合は「X を使わない」と「X を使う」です。",
      ],
      // EN: <p><b>Decode:</b> “Prove” = algebra with factorials; “explain” = a two-case counting argument.</p><div class="worked__math">RHS = <span class="frac"><span><i>n</i>!(<i>n</i> − <i>r</i> + 1 + <i>r</i>)</span><span>(<i>n</i> − <i>r</i> + 1)!</span></span> = <span class="frac"><span>(<i>n</i> + 1)!</span><span>(<i>n</i> + 1 − <i>r</i>)!</span></span> = LHS</div>
      solution: "<p><b>解読：</b>「証明」= 階乗を使った式変形、「説明」= 二つの場合に分けた数え上げの議論。</p><div class=\"worked__math\">右辺 = <span class=\"frac\"><span><i>n</i>!(<i>n</i> − <i>r</i> + 1 + <i>r</i>)</span><span>(<i>n</i> − <i>r</i> + 1)!</span></span> = <span class=\"frac\"><span>(<i>n</i> + 1)!</span><span>(<i>n</i> + 1 − <i>r</i>)!</span></span> = 左辺</div>",
      // EN: <div class="worked__math">(a) RHS = <span class="frac"><span><i>n</i>!</span><span>(<i>n</i> − <i>r</i>)!</span></span> + <i>r</i> <span class="frac"><span><i>n</i>!</span><span>(<i>n</i> − <i>r</i> + 1)!</span></span> = <span class="frac"><span><i>n</i>!(<i>n</i> − <i>r</i> + 1) + <i>r</i> <i>n</i>!</span><span>(<i>n</i> − <i>r</i> + 1)!</span></span> = <span class="frac"><span><i>n</i>!(<i>n</i> + 1)</span><span>(<i>n</i> + 1 − <i>r</i>)!</span></span> = <span class="frac"><span>(<i>n</i> + 1)!</span><span>(<i>n</i> + 1 − <i>r</i>)!</span></span> = <sup><i>n</i>+1</sup>P<sub><i>r</i></sub> = LHS</div><div class="worked__math">(b) Arrangements without X: <sup><i>n</i></sup>P<sub><i>r</i></sub>. Arrangements with X: choose X’s position (<i>r</i> ways), then arrange <i>r</i> − 1 of the other <i>n</i> objects in the remaining places (<sup><i>n</i></sup>P<sub><i>r</i>−1</sub> ways). These two cases cover all <sup><i>n</i>+1</sup>P<sub><i>r</i></sub> arrangements exactly once.</div>
      answer: "<div class=\"worked__math\">(a) 右辺 = <span class=\"frac\"><span><i>n</i>!</span><span>(<i>n</i> − <i>r</i>)!</span></span> + <i>r</i> <span class=\"frac\"><span><i>n</i>!</span><span>(<i>n</i> − <i>r</i> + 1)!</span></span> = <span class=\"frac\"><span><i>n</i>!(<i>n</i> − <i>r</i> + 1) + <i>r</i> <i>n</i>!</span><span>(<i>n</i> − <i>r</i> + 1)!</span></span> = <span class=\"frac\"><span><i>n</i>!(<i>n</i> + 1)</span><span>(<i>n</i> + 1 − <i>r</i>)!</span></span> = <span class=\"frac\"><span>(<i>n</i> + 1)!</span><span>(<i>n</i> + 1 − <i>r</i>)!</span></span> = <sup><i>n</i>+1</sup>P<sub><i>r</i></sub> = 左辺</div><div class=\"worked__math\">(b) X を含まない並べ方：<sup><i>n</i></sup>P<sub><i>r</i></sub>. X を含む並べ方：X の位置を選び（<i>r</i> 通り）、残りの場所に他の <i>n</i> 個のうち <i>r</i> − 1 個を並べる（<sup><i>n</i></sup>P<sub><i>r</i>−1</sub> 通り）。この二つの場合で <sup><i>n</i>+1</sup>P<sub><i>r</i></sub> 通りの並べ方すべてをちょうど一回ずつ数えている。</div>",
      markscheme: [
        // EN: M1: Writes both terms on the right with factorials: <span class="chem">n!/(n - r)! + r × n!/(n - r + 1)!</span>.
        "M1：右辺の二つの項を階乗で書く：<span class=\"chem\">n!/(n - r)! + r × n!/(n - r + 1)!</span>。",
        // EN: M1: Uses the common denominator <span class="chem">(n - r + 1)!</span>, using <span class="chem">(n - r + 1)! = (n - r + 1)(n - r)!</span>.
        "M1：<span class=\"chem\">(n - r + 1)! = (n - r + 1)(n - r)!</span> を使って、共通の分母 <span class=\"chem\">(n - r + 1)!</span> にする。",
        // EN: A1: Simplifies the numerator to <span class="chem">n!(n + 1)</span>.
        "A1：分子を <span class=\"chem\">n!(n + 1)</span> に整理する。",
        // EN: A1: Writes <span class="chem">(n + 1)!/(n + 1 - r)!</span> and identifies it as the left-hand side. AG: the identity; the given line itself earns no mark.
        "A1：<span class=\"chem\">(n + 1)!/(n + 1 - r)!</span> と書き、これが左辺であることを確認する。AG：恒等式。与えられた結果の行そのものには得点がない。",
        // EN: R1: Splits the arrangements into those that do not contain X, counted by <sup><i>n</i></sup>P<sub><i>r</i></sub>.
        "R1：並べ方を分け、X を含まないものは <sup><i>n</i></sup>P<sub><i>r</i></sub> 通りと数える。",
        // EN: R1: Explains that those containing X have <span class="chem">r</span> positions for X and <sup><i>n</i></sup>P<sub><i>r</i>−1</sub> ways to fill the rest.
        "R1：X を含むものは、X の位置が <span class=\"chem\">r</span> 通り、残りの埋め方が <sup><i>n</i></sup>P<sub><i>r</i>−1</sub> 通りであることを説明する。",
      ],
    },

    // ── t1-3-q053 · numeric · challenge · AHL · AHL 1.11 · 5 marks
    "t1-3-q053": {
      // EN: <p>A puzzle setter wants the expression <span class="chem">(ax + 7) / ((x - 1)(x + 2))</span>, where <span class="chem">a</span> is a constant, to split into partial fractions <span class="chem">A / (x - 1) + B / (x + 2)</span> whose two numerators are equal. Find the value of <span class="chem">a</span>.</p>
      stem: "<p>パズル作家は、式 <span class=\"chem\">(ax + 7) / ((x - 1)(x + 2))</span>（<span class=\"chem\">a</span> は定数）が部分分数 <span class=\"chem\">A / (x - 1) + B / (x + 2)</span> に分解され、その二つの分子が等しくなるようにしたい。<span class=\"chem\">a</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: the unknown is <span class="chem">a</span>, not <span class="chem">A</span> or <span class="chem">B</span>. Find <span class="chem">A</span> and <span class="chem">B</span> in terms of <span class="chem">a</span>, then impose the hidden condition <span class="chem">A = B</span>.
        "解読：未知数は <span class=\"chem\">a</span> であり、<span class=\"chem\">A</span> や <span class=\"chem\">B</span> ではありません。<span class=\"chem\">A</span> と <span class=\"chem\">B</span> を <span class=\"chem\">a</span> で表し、隠れた条件 <span class=\"chem\">A = B</span> を課します。",
        // EN: <span class="chem">ax + 7 ≡ A(x + 2) + B(x - 1)</span>. Put <span class="chem">x = 1</span> and <span class="chem">x = -2</span>.
        "<span class=\"chem\">ax + 7 ≡ A(x + 2) + B(x - 1)</span>。<span class=\"chem\">x = 1</span> と <span class=\"chem\">x = -2</span> を代入します。",
        // EN: You should get <span class="chem">3A = a + 7</span> and <span class="chem">3B = 2a - 7</span>.
        "<span class=\"chem\">3A = a + 7</span> と <span class=\"chem\">3B = 2a - 7</span> になるはずです。",
      ],
      // EN: <p><b>Decode:</b> express <i>A</i> and <i>B</i> in terms of <i>a</i>, then set <i>A</i> = <i>B</i>.</p><div class="worked__math"><i>ax</i> + 7 ≡ <i>A</i>(<i>x</i> + 2) + <i>B</i>(<i>x</i> − 1)</div><div class="worked__math"><i>x</i> = 1: 3<i>A</i> = <i>a</i> + 7; <i>x</i> = −2: −3<i>B</i> = −2<i>a</i> + 7 ⇒ 3<i>B</i> = 2<i>a</i> − 7</div><div class="worked__math"><i>A</i> = <i>B</i> ⇒ <i>a</i> + 7 = 2<i>a</i> − 7 ⇒ <b><i>a</i> = 14</b> (then <i>A</i> = <i>B</i> = 7)</div>
      solution: "<p><b>解読：</b><i>A</i> と <i>B</i> を <i>a</i> で表し、<i>A</i> = <i>B</i> とおきます。</p><div class=\"worked__math\"><i>ax</i> + 7 ≡ <i>A</i>(<i>x</i> + 2) + <i>B</i>(<i>x</i> − 1)</div><div class=\"worked__math\"><i>x</i> = 1: 3<i>A</i> = <i>a</i> + 7; <i>x</i> = −2: −3<i>B</i> = −2<i>a</i> + 7 ⇒ 3<i>B</i> = 2<i>a</i> − 7</div><div class=\"worked__math\"><i>A</i> = <i>B</i> ⇒ <i>a</i> + 7 = 2<i>a</i> − 7 ⇒ <b><i>a</i> = 14</b> （このとき <i>A</i> = <i>B</i> = 7）</div>",
    },

    // ── t1-3-q054 · numeric · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q054": {
      // EN: <p>When <span class="chem">(1 + ax)^n</span>, where <span class="chem">a</span> is a constant and <span class="chem">n</span> ∈ ℚ, <span class="chem">n != 0</span>, is expanded in ascending powers of <span class="chem">x</span>, the first three terms are <span class="chem">1 - 6x + 27x^2</span>. Find the coefficient of <span class="chem">x^3</span>.</p>
      stem: "<p><span class=\"chem\">(1 + ax)^n</span>（<span class=\"chem\">a</span> は定数、<span class=\"chem\">n</span> ∈ ℚ、<span class=\"chem\">n != 0</span>）を <span class=\"chem\">x</span> の昇べきの順に展開すると、最初の三つの項は <span class=\"chem\">1 - 6x + 27x^2</span> である。<span class=\"chem\">x^3</span> の係数を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: there are two unknowns, <span class="chem">a</span> and <span class="chem">n</span>, and two pieces of information (the <span class="chem">x</span> and <span class="chem">x^2</span> coefficients). Find both, then build the <span class="chem">x^3</span> term.
        "解読：未知数は <span class=\"chem\">a</span> と <span class=\"chem\">n</span> の二つで、情報も二つ（<span class=\"chem\">x</span> と <span class=\"chem\">x^2</span> の係数）あります。両方を求めてから <span class=\"chem\">x^3</span> の項を作ります。",
        // EN: <span class="chem">na = -6</span> and <span class="chem">n(n - 1)a^2 / 2 = 27</span>. Divide the second by the square of the first to remove <span class="chem">a</span>.
        "<span class=\"chem\">na = -6</span>、<span class=\"chem\">n(n - 1)a^2 / 2 = 27</span>。二つ目の式を一つ目の式の二乗で割って <span class=\"chem\">a</span> を消去します。",
        // EN: <span class="chem">(n - 1)/n = 54/36</span> gives <span class="chem">n = -2</span>, so <span class="chem">a = 3</span>.
        "<span class=\"chem\">(n - 1)/n = 54/36</span> より <span class=\"chem\">n = -2</span>、したがって <span class=\"chem\">a = 3</span>。",
      ],
      // EN: <p><b>Decode:</b> two equations for two unknowns (<i>n</i>, <i>a</i>), then a third coefficient.</p><div class="worked__math"><i>na</i> = −6, <span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span><i>a</i><sup>2</sup> = 27 ⇒ <i>n</i>(<i>n</i> − 1)<i>a</i><sup>2</sup> = 54</div><div class="worked__math">Divide by <i>n</i><sup>2</sup><i>a</i><sup>2</sup> = 36: <span class="frac"><span><i>n</i> − 1</span><span><i>n</i></span></span> = <span class="frac"><span>3</span><span>2</span></span> ⇒ <i>n</i> = −2, <i>a</i> = 3</div><div class="worked__math">Coefficient of <i>x</i><sup>3</sup> = <span class="frac"><span>(−2)(−3)(−4)</span><span>3!</span></span> × 3<sup>3</sup> = −4 × 27 = <b>−108</b></div>
      solution: "<p><b>解読：</b>二つの未知数（<i>n</i>、<i>a</i>）についての二つの方程式、そのあと三つ目の係数。</p><div class=\"worked__math\"><i>na</i> = −6, <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span><i>a</i><sup>2</sup> = 27 ⇒ <i>n</i>(<i>n</i> − 1)<i>a</i><sup>2</sup> = 54</div><div class=\"worked__math\"><i>n</i><sup>2</sup><i>a</i><sup>2</sup> = 36 で割る：<span class=\"frac\"><span><i>n</i> − 1</span><span><i>n</i></span></span> = <span class=\"frac\"><span>3</span><span>2</span></span> ⇒ <i>n</i> = −2, <i>a</i> = 3</div><div class=\"worked__math\"><i>x</i><sup>3</sup> の係数 = <span class=\"frac\"><span>(−2)(−3)(−4)</span><span>3!</span></span> × 3<sup>3</sup> = −4 × 27 = <b>−108</b></div>",
    },

    // ── t1-3-q055 · short · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q055": {
      // EN: <p>(a) Show that <span class="chem">sqrt(2) = (7/5)(1 - 1/50)^{-1/2}</span>. <strong>[2 marks]</strong><br>(b) Hence, using the first three terms of the expansion of <span class="chem">(1 - x)^{-1/2}</span>, find an approximation for <span class="chem">sqrt(2)</span>, giving your answer to 5 decimal places. <strong>[4 marks]</strong></p>
      stem: "<p>(a) <span class=\"chem\">sqrt(2) = (7/5)(1 - 1/50)^{-1/2}</span> を示しなさい (Show that)。<strong>[2 marks]</strong><br>(b) これを用いて (Hence)、<span class=\"chem\">(1 - x)^{-1/2}</span> の展開の最初の三つの項を使って <span class=\"chem\">sqrt(2)</span> の近似値を求め、小数第 5 位まで答えなさい。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: (a) is surd manipulation; (b) asks why the strange-looking 1/50 is used: it is small, so the series with <span class="chem">x = 1/50</span> converges fast and three terms are enough.
        "解読：(a) は根号を含む式の変形です。(b) は、一見奇妙な 1/50 を使う理由を問うています。この数は小さいので、<span class=\"chem\">x = 1/50</span> とした級数は速く収束し、三つの項で十分です。",
        // EN: For (a), <span class="chem">(49/50)^{-1/2} = (50/49)^{1/2} = sqrt(50)/7</span>.
        "(a) では <span class=\"chem\">(49/50)^{-1/2} = (50/49)^{1/2} = sqrt(50)/7</span>。",
        // EN: For (b), <span class="chem">(1 - x)^{-1/2} = 1 + (-1/2)(-x) + ((-1/2)(-3/2)/2!)(-x)^2 + ...</span>
        "(b) では <span class=\"chem\">(1 - x)^{-1/2} = 1 + (-1/2)(-x) + ((-1/2)(-3/2)/2!)(-x)^2 + ...</span>",
      ],
      // EN: <p><b>Decode:</b> rewrite √2 as a constant times (1 + small number)<sup><i>n</i></sup>, then use a short series.</p><div class="worked__math">√2 = (7/5)(1 − 1/50)<sup>−1/2</sup> ≈ 1.4(1 + 0.01 + 0.00015) = 1.4 × 1.01015 = <b>1.41421</b></div>
      solution: "<p><b>解読：</b>√2 を 定数 ×（1 + 小さい数）<sup><i>n</i></sup> の形に書き直し、短い級数を使います。</p><div class=\"worked__math\">√2 = (7/5)(1 − 1/50)<sup>−1/2</sup> ≈ 1.4(1 + 0.01 + 0.00015) = 1.4 × 1.01015 = <b>1.41421</b></div>",
      // EN: <div class="worked__math">(a) (1 − <span class="frac"><span>1</span><span>50</span></span>)<sup>−1/2</sup> = (<span class="frac"><span>49</span><span>50</span></span>)<sup>−1/2</sup> = √(<span class="frac"><span>50</span><span>49</span></span>) = <span class="frac"><span>5√2</span><span>7</span></span>, so <span class="frac"><span>7</span><span>5</span></span>(1 − <span class="frac"><span>1</span><span>50</span></span>)<sup>−1/2</sup> = √2</div><div class="worked__math">(b) (1 − <i>x</i>)<sup>−1/2</sup> ≈ 1 + <span class="frac"><span>1</span><span>2</span></span><i>x</i> + <span class="frac"><span>3</span><span>8</span></span><i>x</i><sup>2</sup>; <i>x</i> = 0.02: 1 + 0.01 + 0.00015 = 1.01015; √2 ≈ 1.4 × 1.01015 = <b>1.41421</b></div>
      answer: "<div class=\"worked__math\">(a) (1 − <span class=\"frac\"><span>1</span><span>50</span></span>)<sup>−1/2</sup> = (<span class=\"frac\"><span>49</span><span>50</span></span>)<sup>−1/2</sup> = √(<span class=\"frac\"><span>50</span><span>49</span></span>) = <span class=\"frac\"><span>5√2</span><span>7</span></span> なので <span class=\"frac\"><span>7</span><span>5</span></span>(1 − <span class=\"frac\"><span>1</span><span>50</span></span>)<sup>−1/2</sup> = √2</div><div class=\"worked__math\">(b) (1 − <i>x</i>)<sup>−1/2</sup> ≈ 1 + <span class=\"frac\"><span>1</span><span>2</span></span><i>x</i> + <span class=\"frac\"><span>3</span><span>8</span></span><i>x</i><sup>2</sup>; <i>x</i> = 0.02: 1 + 0.01 + 0.00015 = 1.01015; √2 ≈ 1.4 × 1.01015 = <b>1.41421</b></div>",
      markscheme: [
        // EN: M1: Writes <span class="chem">1 - 1/50 = 49/50</span> and <span class="chem">(49/50)^{-1/2} = sqrt(50)/7</span>.
        "M1：<span class=\"chem\">1 - 1/50 = 49/50</span> と <span class=\"chem\">(49/50)^{-1/2} = sqrt(50)/7</span> を書く。",
        // EN: A1: <span class="chem">sqrt(50) = 5sqrt(2)</span>, so <span class="chem">(7/5) × 5sqrt(2)/7 = sqrt(2)</span>. AG: the given result; the given line itself earns no mark.
        "A1：<span class=\"chem\">sqrt(50) = 5sqrt(2)</span> なので <span class=\"chem\">(7/5) × 5sqrt(2)/7 = sqrt(2)</span>。AG：与えられた結果。与えられた結果の行そのものには得点がない。",
        // EN: M1: Uses <span class="chem">n = -1/2</span> with <span class="chem">u = -x</span>.
        "M1：<span class=\"chem\">u = -x</span> として <span class=\"chem\">n = -1/2</span> を使う。",
        // EN: A1: <span class="chem">1 + x/2 + 3x^2/8</span>.
        "A1：<span class=\"chem\">1 + x/2 + 3x^2/8</span>。",
        // EN: M1: Substitutes <span class="chem">x = 1/50 = 0.02</span> and multiplies by <span class="chem">7/5</span>.
        "M1：<span class=\"chem\">x = 1/50 = 0.02</span> を代入し、<span class=\"chem\">7/5</span> を掛ける。",
        // EN: A1: 1.41421.
        "A1：1.41421。",
      ],
    },

    // ── t1-3-q056 · short · exam · AHL · AHL 1.10 · 16 marks
    "t1-3-q056": {
      // EN: <p>This question investigates the coefficients in the expansion of <span class="chem">(1 - x)^{-k}</span>, where <span class="chem">k</span> is a positive integer and <span class="chem">|x| &lt; 1</span>.</p><p>(a) Write down the expansion of <span class="chem">(1 - x)^{-1}</span> up to and including the term in <span class="chem">x^4</span>. <strong>[1 mark]</strong><br>(b) Find the expansions of <span class="chem">(1 - x)^{-2}</span> and <span class="chem">(1 - x)^{-3}</span>, each up to and including the term in <span class="chem">x^4</span>. <strong>[4 marks]</strong><br>(c) By comparing your coefficients with the entries of Pascal’s triangle, conjecture an expression, in the form <sup><i>p</i></sup>C<sub><i>q</i></sub>, for the coefficient of <span class="chem">x^r</span> in <span class="chem">(1 - x)^{-3}</span>. <strong>[2 marks]</strong><br>(d) Prove that the coefficient of <span class="chem">x^r</span> in <span class="chem">(1 - x)^{-k}</span> is <sup><i>k</i>+<i>r</i>−1</sup>C<sub><i>r</i></sub>. <strong>[4 marks]</strong><br>(e) Hence find the coefficient of <span class="chem">x^{10}</span> in <span class="chem">(1 - x)^{-4}</span>. <strong>[2 marks]</strong><br>(f) Use your GDC to find the least value of <span class="chem">r</span> for which the coefficient of <span class="chem">x^r</span> in <span class="chem">(1 - x)^{-4}</span> exceeds 10 000. <strong>[3 marks]</strong></p>
      stem: "<p>この問題では、<span class=\"chem\">(1 - x)^{-k}</span> の展開における係数を調べる。ただし <span class=\"chem\">k</span> は正の整数、<span class=\"chem\">|x| &lt; 1</span> とする。</p><p>(a) <span class=\"chem\">(1 - x)^{-1}</span> の展開を <span class=\"chem\">x^4</span> の項まで書きなさい (Write down)。<strong>[1 mark]</strong><br>(b) <span class=\"chem\">(1 - x)^{-2}</span> と <span class=\"chem\">(1 - x)^{-3}</span> の展開を、それぞれ <span class=\"chem\">x^4</span> の項まで求めなさい (Find)。<strong>[4 marks]</strong><br>(c) 求めた係数をパスカルの三角形の数と比べて、<span class=\"chem\">(1 - x)^{-3}</span> における <span class=\"chem\">x^r</span> の係数を表す式を <sup><i>p</i></sup>C<sub><i>q</i></sub> の形で予想しなさい (Conjecture)。<strong>[2 marks]</strong><br>(d) <span class=\"chem\">(1 - x)^{-k}</span> における <span class=\"chem\">x^r</span> の係数が <sup><i>k</i>+<i>r</i>−1</sup>C<sub><i>r</i></sub> であることを証明しなさい (Prove)。<strong>[4 marks]</strong><br>(e) これを用いて (Hence)、<span class=\"chem\">(1 - x)^{-4}</span> における <span class=\"chem\">x^{10}</span> の係数を求めなさい。<strong>[2 marks]</strong><br>(f) GDC を使って、<span class=\"chem\">(1 - x)^{-4}</span> における <span class=\"chem\">x^r</span> の係数が 10 000 を超えるような <span class=\"chem\">r</span> の最小値を求めなさい (Find)。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: In (b), write <span class="chem">(1 - x)^{-2}</span> as <span class="chem">(1 + u)^{-2}</span> with <span class="chem">u = -x</span>. Every term turns out positive.
        "(b) では、<span class=\"chem\">u = -x</span> として <span class=\"chem\">(1 - x)^{-2}</span> を <span class=\"chem\">(1 + u)^{-2}</span> と書きます。すべての項が正になります。",
        // EN: In (c), the numbers 1, 3, 6, 10, 15 are the triangular numbers. Where do they sit in Pascal’s triangle?
        "(c) では、数 1、3、6、10、15 は三角数です。パスカルの三角形のどこにありますか？",
        // EN: In (d), there are <span class="chem">r</span> negative factors in <span class="chem">(-k)(-k - 1)…</span> and another <span class="chem">(-1)^r</span> from <span class="chem">(-x)^r</span>.
        "(d) では、<span class=\"chem\">(-k)(-k - 1)…</span> に負の因数が <span class=\"chem\">r</span> 個あり、さらに <span class=\"chem\">(-x)^r</span> から <span class=\"chem\">(-1)^r</span> が出てきます。",
        // EN: In (f), with <span class="chem">k = 4</span> the coefficient is <span class="chem">(r + 3)C3</span>. Tabulate it on your GDC.
        "(f) では、<span class=\"chem\">k = 4</span> のとき係数は <span class=\"chem\">(r + 3)C3</span> です。GDC で数表を作ります。",
      ],
      // EN: <div class="worked__math">(b) 1 + 2<i>x</i> + 3<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> + 5<i>x</i><sup>4</sup>; 1 + 3<i>x</i> + 6<i>x</i><sup>2</sup> + 10<i>x</i><sup>3</sup> + 15<i>x</i><sup>4</sup> (c) <sup><i>r</i>+2</sup>C<sub><i>r</i></sub> (e) 286 (f) <i>r</i> = 38</div>
      solution: "<div class=\"worked__math\">(b) 1 + 2<i>x</i> + 3<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> + 5<i>x</i><sup>4</sup>; 1 + 3<i>x</i> + 6<i>x</i><sup>2</sup> + 10<i>x</i><sup>3</sup> + 15<i>x</i><sup>4</sup> (c) <sup><i>r</i>+2</sup>C<sub><i>r</i></sub> (e) 286 (f) <i>r</i> = 38</div>",
      // EN: <div class="worked__math">(a) 1 + <i>x</i> + <i>x</i><sup>2</sup> + <i>x</i><sup>3</sup> + <i>x</i><sup>4</sup></div><div class="worked__math">(b) (1 − <i>x</i>)<sup>−2</sup> = 1 + 2<i>x</i> + 3<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> + 5<i>x</i><sup>4</sup>; (1 − <i>x</i>)<sup>−3</sup> = 1 + 3<i>x</i> + 6<i>x</i><sup>2</sup> + 10<i>x</i><sup>3</sup> + 15<i>x</i><sup>4</sup></div><div class="worked__math">(c) 1, 3, 6, 10, 15 are <sup>2</sup>C<sub>0</sub>, <sup>3</sup>C<sub>1</sub>, <sup>4</sup>C<sub>2</sub>, …: coefficient of <i>x</i><sup><i>r</i></sup> = <sup><i>r</i>+2</sup>C<sub><i>r</i></sub> (= <sup><i>r</i>+2</sup>C<sub>2</sub>)</div><div class="worked__math">(d) coefficient = <span class="frac"><span>(−<i>k</i>)(−<i>k</i> − 1)…(−<i>k</i> − <i>r</i> + 1)</span><span><i>r</i>!</span></span>(−1)<sup><i>r</i></sup> = <span class="frac"><span><i>k</i>(<i>k</i> + 1)…(<i>k</i> + <i>r</i> − 1)</span><span><i>r</i>!</span></span> = <span class="frac"><span>(<i>k</i> + <i>r</i> − 1)!</span><span><i>r</i>!(<i>k</i> − 1)!</span></span> = <sup><i>k</i>+<i>r</i>−1</sup>C<sub><i>r</i></sub></div><div class="worked__math">(e) <sup>13</sup>C<sub>10</sub> = <b>286</b></div><div class="worked__math">(f) need <sup><i>r</i>+3</sup>C<sub>3</sub> &gt; 10 000: <sup>40</sup>C<sub>3</sub> = 9880, <sup>41</sup>C<sub>3</sub> = 10 660 ⇒ <i>r</i> + 3 = 41 ⇒ <b><i>r</i> = 38</b></div>
      answer: "<div class=\"worked__math\">(a) 1 + <i>x</i> + <i>x</i><sup>2</sup> + <i>x</i><sup>3</sup> + <i>x</i><sup>4</sup></div><div class=\"worked__math\">(b) (1 − <i>x</i>)<sup>−2</sup> = 1 + 2<i>x</i> + 3<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> + 5<i>x</i><sup>4</sup>; (1 − <i>x</i>)<sup>−3</sup> = 1 + 3<i>x</i> + 6<i>x</i><sup>2</sup> + 10<i>x</i><sup>3</sup> + 15<i>x</i><sup>4</sup></div><div class=\"worked__math\">(c) 1, 3, 6, 10, 15 は <sup>2</sup>C<sub>0</sub>, <sup>3</sup>C<sub>1</sub>, <sup>4</sup>C<sub>2</sub>、… であり、<i>x</i><sup><i>r</i></sup> の係数 = <sup><i>r</i>+2</sup>C<sub><i>r</i></sub> (= <sup><i>r</i>+2</sup>C<sub>2</sub>)</div><div class=\"worked__math\">(d) 係数 = <span class=\"frac\"><span>(−<i>k</i>)(−<i>k</i> − 1)…(−<i>k</i> − <i>r</i> + 1)</span><span><i>r</i>!</span></span>(−1)<sup><i>r</i></sup> = <span class=\"frac\"><span><i>k</i>(<i>k</i> + 1)…(<i>k</i> + <i>r</i> − 1)</span><span><i>r</i>!</span></span> = <span class=\"frac\"><span>(<i>k</i> + <i>r</i> − 1)!</span><span><i>r</i>!(<i>k</i> − 1)!</span></span> = <sup><i>k</i>+<i>r</i>−1</sup>C<sub><i>r</i></sub></div><div class=\"worked__math\">(e) <sup>13</sup>C<sub>10</sub> = <b>286</b></div><div class=\"worked__math\">(f) 必要なのは <sup><i>r</i>+3</sup>C<sub>3</sub> &gt; 10 000: <sup>40</sup>C<sub>3</sub> = 9880, <sup>41</sup>C<sub>3</sub> = 10 660 ⇒ <i>r</i> + 3 = 41 ⇒ <b><i>r</i> = 38</b></div>",
      markscheme: [
        // EN: A1: <span class="chem">1 + x + x^2 + x^3 + x^4</span>.
        "A1：<span class=\"chem\">1 + x + x^2 + x^3 + x^4</span>。",
        // EN: M1: Uses the extended binomial expansion with <span class="chem">n = -2</span> and <span class="chem">u = -x</span>.
        "M1：<span class=\"chem\">n = -2</span>、<span class=\"chem\">u = -x</span> として拡張二項展開を使う。",
        // EN: A1: <span class="chem">1 + 2x + 3x^2 + 4x^3 + 5x^4</span>.
        "A1：<span class=\"chem\">1 + 2x + 3x^2 + 4x^3 + 5x^4</span>。",
        // EN: M1: Uses <span class="chem">n = -3</span> and <span class="chem">u = -x</span>.
        "M1：<span class=\"chem\">n = -3</span> と <span class=\"chem\">u = -x</span> を使う。",
        // EN: A1: <span class="chem">1 + 3x + 6x^2 + 10x^3 + 15x^4</span>.
        "A1：<span class=\"chem\">1 + 3x + 6x^2 + 10x^3 + 15x^4</span>。",
        // EN: R1: Recognises 1, 3, 6, 10, 15 as a diagonal of Pascal’s triangle (<sup>2</sup>C<sub>0</sub>, <sup>3</sup>C<sub>1</sub>, <sup>4</sup>C<sub>2</sub>, …).
        "R1：1、3、6、10、15 がパスカルの三角形の斜めの列（<sup>2</sup>C<sub>0</sub>、<sup>3</sup>C<sub>1</sub>、<sup>4</sup>C<sub>2</sub>、…）であることに気づく。",
        // EN: A1: Conjecture: coefficient of <span class="chem">x^r</span> is <sup><i>r</i>+2</sup>C<sub><i>r</i></sub> (or <sup><i>r</i>+2</sup>C<sub>2</sub>).
        "A1：予想：<span class=\"chem\">x^r</span> の係数は <sup><i>r</i>+2</sup>C<sub><i>r</i></sub>（または <sup><i>r</i>+2</sup>C<sub>2</sub>）。",
        // EN: M1: Writes the general term with <span class="chem">n = -k</span>: <span class="chem">((-k)(-k - 1)...(-k - r + 1)/r!)(-x)^r</span>.
        "M1：<span class=\"chem\">n = -k</span> として一般項を書く：<span class=\"chem\">((-k)(-k - 1)...(-k - r + 1)/r!)(-x)^r</span>。",
        // EN: A1: The <span class="chem">r</span> negative signs cancel with <span class="chem">(-1)^r</span>, giving <span class="chem">k(k + 1)...(k + r - 1)/r!</span>.
        "A1：<span class=\"chem\">r</span> 個の負の符号が <span class=\"chem\">(-1)^r</span> と打ち消し合い、<span class=\"chem\">k(k + 1)...(k + r - 1)/r!</span> を得る。",
        // EN: M1: Multiplies numerator and denominator by <span class="chem">(k - 1)!</span>.
        "M1：分子と分母に <span class=\"chem\">(k - 1)!</span> を掛ける。",
        // EN: A1: Obtains <span class="chem">(k + r - 1)!/(r!(k - 1)!)</span>. AG: <sup><i>k</i>+<i>r</i>−1</sup>C<sub><i>r</i></sub>; the given line itself earns no mark.
        "A1：<span class=\"chem\">(k + r - 1)!/(r!(k - 1)!)</span> を得る。AG：<sup><i>k</i>+<i>r</i>−1</sup>C<sub><i>r</i></sub>。与えられた結果の行そのものには得点がない。",
        // EN: M1: Uses <span class="chem">k = 4</span>, <span class="chem">r = 10</span>: <sup>13</sup>C<sub>10</sub>.
        "M1：<span class=\"chem\">k = 4</span>、<span class=\"chem\">r = 10</span> を使う：<sup>13</sup>C<sub>10</sub>。",
        // EN: A1: 286.
        "A1：286。",
        // EN: M1: Sets up <sup><i>r</i>+3</sup>C<sub><i>r</i></sub> &gt; 10 000 (or <span class="chem">(r + 1)(r + 2)(r + 3)/6 &gt; 10000</span>).
        "M1：<sup><i>r</i>+3</sup>C<sub><i>r</i></sub> &gt; 10 000（または <span class=\"chem\">(r + 1)(r + 2)(r + 3)/6 &gt; 10000</span>）とおく。",
        // EN: A1: GDC values either side: 9880 at <span class="chem">r = 37</span> and 10 660 at <span class="chem">r = 38</span>.
        "A1：境目の両側の GDC の値：<span class=\"chem\">r = 37</span> で 9880、<span class=\"chem\">r = 38</span> で 10 660。",
        // EN: A1: <span class="chem">r = 38</span>.
        "A1：<span class=\"chem\">r = 38</span>。",
      ],
    },

    // ── t1-3-q057 · short · challenge · AHL · AHL 1.11; SL 1.2 · 15 marks
    "t1-3-q057": {
      // EN: <p>This question uses partial fractions to investigate sums of the form <span class="chem">S_n = Σ_{r=1}^n 1/(r(r + k))</span>, where <span class="chem">k</span> is a positive integer. Start with <span class="chem">k = 2</span>.</p><p>(a) Express <span class="chem">1/(r(r + 2))</span> in partial fractions. <strong>[2 marks]</strong><br>(b) Use your GDC to find <span class="chem">S_1</span>, <span class="chem">S_2</span>, <span class="chem">S_3</span> and <span class="chem">S_4</span> for <span class="chem">k = 2</span>, as fractions. <strong>[2 marks]</strong><br>(c) Show that, for <span class="chem">k = 2</span>, <span class="chem">S_n = 3/4 - (2n + 3)/(2(n + 1)(n + 2))</span>. <strong>[4 marks]</strong><br>(d) Hence write down the value of <span class="chem">S_∞</span> for <span class="chem">k = 2</span>. <strong>[1 mark]</strong><br>(e) Find the least value of <span class="chem">n</span> for which <span class="chem">S_n</span> is within 0.001 of <span class="chem">S_∞</span>, for <span class="chem">k = 2</span>. <strong>[3 marks]</strong><br>(f) By considering the partial fractions of <span class="chem">1/(r(r + 3))</span>, find the exact value of <span class="chem">S_∞</span> for <span class="chem">k = 3</span>. <strong>[3 marks]</strong></p>
      stem: "<p>この問題では、部分分数分解を使って <span class=\"chem\">S_n = Σ_{r=1}^n 1/(r(r + k))</span> の形の和を調べる。ただし <span class=\"chem\">k</span> は正の整数である。まず <span class=\"chem\">k = 2</span> から始める。</p><p>(a) <span class=\"chem\">1/(r(r + 2))</span> を部分分数に分解しなさい。<strong>[2 marks]</strong><br>(b) <span class=\"chem\">k = 2</span> のとき、GDC を使って <span class=\"chem\">S_1</span>、<span class=\"chem\">S_2</span>、<span class=\"chem\">S_3</span>、<span class=\"chem\">S_4</span> を分数で求めなさい (Find)。<strong>[2 marks]</strong><br>(c) <span class=\"chem\">k = 2</span> のとき、<span class=\"chem\">S_n = 3/4 - (2n + 3)/(2(n + 1)(n + 2))</span> であることを示しなさい (Show that)。<strong>[4 marks]</strong><br>(d) これを用いて (Hence)、<span class=\"chem\">k = 2</span> のときの <span class=\"chem\">S_∞</span> の値を書きなさい (Write down)。<strong>[1 mark]</strong><br>(e) <span class=\"chem\">k = 2</span> のとき、<span class=\"chem\">S_n</span> と <span class=\"chem\">S_∞</span> の差が 0.001 以内になるような <span class=\"chem\">n</span> の最小値を求めなさい (Find)。<strong>[3 marks]</strong><br>(f) <span class=\"chem\">1/(r(r + 3))</span> の部分分数分解を考えることにより、<span class=\"chem\">k = 3</span> のときの <span class=\"chem\">S_∞</span> の正確な値を求めなさい。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: partial fractions turn each term into a difference, so most terms cancel (the sum “telescopes”). The investigation asks you to see which terms survive, and how that depends on <span class="chem">k</span>.
        "解読：部分分数分解で各項が差の形になるので、ほとんどの項が打ち消し合います（和が次々に打ち消し合う “telescope”）。どの項が残るか、そしてそれが <span class=\"chem\">k</span> にどう依存するかを見抜くことが求められています。",
        // EN: For (a), <span class="chem">1 ≡ A(r + 2) + Br</span>; put <span class="chem">r = 0</span> and <span class="chem">r = -2</span>.
        "(a) では <span class=\"chem\">1 ≡ A(r + 2) + Br</span>。<span class=\"chem\">r = 0</span> と <span class=\"chem\">r = -2</span> を代入します。",
        // EN: For (c), list the brackets <span class="chem">(1 - 1/3), (1/2 - 1/4), (1/3 - 1/5), …</span>; the positive part of each bracket cancels a negative part two brackets earlier.
        "(c) では、括弧 <span class=\"chem\">(1 - 1/3), (1/2 - 1/4), (1/3 - 1/5), …</span> を書き並べます。各括弧の正の部分は、二つ前の括弧の負の部分と打ち消し合います。",
        // EN: For (e), <span class="chem">S_∞ - S_n = (2n + 3)/(2(n + 1)(n + 2))</span>; tabulate it on your GDC near <span class="chem">n = 1000</span>.
        "(e) では <span class=\"chem\">S_∞ - S_n = (2n + 3)/(2(n + 1)(n + 2))</span>。GDC で <span class=\"chem\">n = 1000</span> 付近の数表を作ります。",
      ],
      // EN: <p><b>Decode:</b> each step uses the partial-fraction difference so that a sum of <i>n</i> terms collapses to a few surviving terms.</p><div class="worked__math">(a) ½(1/<i>r</i> − 1/(<i>r</i> + 2)) (b) 1/3, 11/24, 21/40, 17/30 (d) 3/4 (e) <i>n</i> = 999 (f) 11/18</div>
      solution: "<p><b>解読：</b>どの段階でも部分分数分解による差の形を使い、<i>n</i> 個の項の和がわずかな残りの項にまで縮むようにします。</p><div class=\"worked__math\">(a) ½(1/<i>r</i> − 1/(<i>r</i> + 2)) (b) 1/3, 11/24, 21/40, 17/30 (d) 3/4 (e) <i>n</i> = 999 (f) 11/18</div>",
      // EN: <div class="worked__math">(a) <span class="frac"><span>1</span><span><i>r</i>(<i>r</i> + 2)</span></span> = <span class="frac"><span>1</span><span>2</span></span>(<span class="frac"><span>1</span><span><i>r</i></span></span> − <span class="frac"><span>1</span><span><i>r</i> + 2</span></span>)</div><div class="worked__math">(b) <i>S</i><sub>1</sub> = <span class="frac"><span>1</span><span>3</span></span>, <i>S</i><sub>2</sub> = <span class="frac"><span>11</span><span>24</span></span>, <i>S</i><sub>3</sub> = <span class="frac"><span>21</span><span>40</span></span>, <i>S</i><sub>4</sub> = <span class="frac"><span>17</span><span>30</span></span></div><div class="worked__math">(c) the sum telescopes: everything cancels except 1 + <span class="frac"><span>1</span><span>2</span></span> at the start and −<span class="frac"><span>1</span><span><i>n</i> + 1</span></span> − <span class="frac"><span>1</span><span><i>n</i> + 2</span></span> at the end, so <i>S</i><sub><i>n</i></sub> = <span class="frac"><span>1</span><span>2</span></span>(<span class="frac"><span>3</span><span>2</span></span> − <span class="frac"><span>2<i>n</i> + 3</span><span>(<i>n</i> + 1)(<i>n</i> + 2)</span></span>)</div><div class="worked__math">(d) <i>S</i><sub>∞</sub> = <span class="frac"><span>3</span><span>4</span></span></div><div class="worked__math">(e) <span class="frac"><span>2<i>n</i> + 3</span><span>2(<i>n</i> + 1)(<i>n</i> + 2)</span></span> &lt; 0.001; GDC: <i>n</i> = 998 gives 0.0010005…, <i>n</i> = 999 gives 0.00099950… ⇒ <b><i>n</i> = 999</b></div><div class="worked__math">(f) <span class="frac"><span>1</span><span><i>r</i>(<i>r</i> + 3)</span></span> = <span class="frac"><span>1</span><span>3</span></span>(<span class="frac"><span>1</span><span><i>r</i></span></span> − <span class="frac"><span>1</span><span><i>r</i> + 3</span></span>); the terms 1, <span class="frac"><span>1</span><span>2</span></span>, <span class="frac"><span>1</span><span>3</span></span> survive: <i>S</i><sub>∞</sub> = <span class="frac"><span>1</span><span>3</span></span>(1 + <span class="frac"><span>1</span><span>2</span></span> + <span class="frac"><span>1</span><span>3</span></span>) = <b><span class="frac"><span>11</span><span>18</span></span></b></div>
      answer: "<div class=\"worked__math\">(a) <span class=\"frac\"><span>1</span><span><i>r</i>(<i>r</i> + 2)</span></span> = <span class=\"frac\"><span>1</span><span>2</span></span>(<span class=\"frac\"><span>1</span><span><i>r</i></span></span> − <span class=\"frac\"><span>1</span><span><i>r</i> + 2</span></span>)</div><div class=\"worked__math\">(b) <i>S</i><sub>1</sub> = <span class=\"frac\"><span>1</span><span>3</span></span>, <i>S</i><sub>2</sub> = <span class=\"frac\"><span>11</span><span>24</span></span>, <i>S</i><sub>3</sub> = <span class=\"frac\"><span>21</span><span>40</span></span>, <i>S</i><sub>4</sub> = <span class=\"frac\"><span>17</span><span>30</span></span></div><div class=\"worked__math\">(c) 和は次々に打ち消し合い、初めの 1 + <span class=\"frac\"><span>1</span><span>2</span></span> と終わりの −<span class=\"frac\"><span>1</span><span><i>n</i> + 1</span></span> − <span class=\"frac\"><span>1</span><span><i>n</i> + 2</span></span> 以外はすべて消えるので、<i>S</i><sub><i>n</i></sub> = <span class=\"frac\"><span>1</span><span>2</span></span>(<span class=\"frac\"><span>3</span><span>2</span></span> − <span class=\"frac\"><span>2<i>n</i> + 3</span><span>(<i>n</i> + 1)(<i>n</i> + 2)</span></span>)</div><div class=\"worked__math\">(d) <i>S</i><sub>∞</sub> = <span class=\"frac\"><span>3</span><span>4</span></span></div><div class=\"worked__math\">(e) <span class=\"frac\"><span>2<i>n</i> + 3</span><span>2(<i>n</i> + 1)(<i>n</i> + 2)</span></span> &lt; 0.001。GDC：<i>n</i> = 998 で 0.0010005…、<i>n</i> = 999 で 0.00099950… ⇒ <b><i>n</i> = 999</b></div><div class=\"worked__math\">(f) <span class=\"frac\"><span>1</span><span><i>r</i>(<i>r</i> + 3)</span></span> = <span class=\"frac\"><span>1</span><span>3</span></span>(<span class=\"frac\"><span>1</span><span><i>r</i></span></span> − <span class=\"frac\"><span>1</span><span><i>r</i> + 3</span></span>)。項 1、<span class=\"frac\"><span>1</span><span>2</span></span>, <span class=\"frac\"><span>1</span><span>3</span></span> が残る：<i>S</i><sub>∞</sub> = <span class=\"frac\"><span>1</span><span>3</span></span>(1 + <span class=\"frac\"><span>1</span><span>2</span></span> + <span class=\"frac\"><span>1</span><span>3</span></span>) = <b><span class=\"frac\"><span>11</span><span>18</span></span></b></div>",
      markscheme: [
        // EN: M1: Sets <span class="chem">1 = A(r + 2) + Br</span> (or cover-up).
        "M1：<span class=\"chem\">1 = A(r + 2) + Br</span> とおく（または代入法 (cover-up) を使う）。",
        // EN: A1: <span class="chem">1/(2r) - 1/(2(r + 2))</span>.
        "A1：<span class=\"chem\">1/(2r) - 1/(2(r + 2))</span>。",
        // EN: A1: Any two of <span class="chem">1/3, 11/24, 21/40, 17/30</span> correct.
        "A1：<span class=\"chem\">1/3, 11/24, 21/40, 17/30</span> のうちいずれか二つが正しい。",
        // EN: A1: All four correct.
        "A1：四つすべてが正しい。",
        // EN: M1: Writes out the first few and last few terms of <span class="chem">(1/2)Σ(1/r - 1/(r + 2))</span>.
        "M1：<span class=\"chem\">(1/2)Σ(1/r - 1/(r + 2))</span> の最初のいくつかの項と最後のいくつかの項を書き出す。",
        // EN: R1: Identifies the surviving terms <span class="chem">1 + 1/2</span> and <span class="chem">-1/(n + 1) - 1/(n + 2)</span>.
        "R1：残る項 <span class=\"chem\">1 + 1/2</span> と <span class=\"chem\">-1/(n + 1) - 1/(n + 2)</span> を特定する。",
        // EN: M1: Combines <span class="chem">1/(n + 1) + 1/(n + 2) = (2n + 3)/((n + 1)(n + 2))</span>.
        "M1：<span class=\"chem\">1/(n + 1) + 1/(n + 2) = (2n + 3)/((n + 1)(n + 2))</span> とまとめる。",
        // EN: A1: Multiplies by <span class="chem">1/2</span>. AG: <span class="chem">S_n = 3/4 - (2n + 3)/(2(n + 1)(n + 2))</span>; the given line itself earns no mark.
        "A1：<span class=\"chem\">1/2</span> を掛ける。AG：<span class=\"chem\">S_n = 3/4 - (2n + 3)/(2(n + 1)(n + 2))</span>。与えられた結果の行そのものには得点がない。",
        // EN: A1: <span class="chem">S_∞ = 3/4</span>.
        "A1：<span class=\"chem\">S_∞ = 3/4</span>。",
        // EN: M1: Sets up <span class="chem">(2n + 3)/(2(n + 1)(n + 2)) &lt; 0.001</span>.
        "M1：<span class=\"chem\">(2n + 3)/(2(n + 1)(n + 2)) &lt; 0.001</span> とおく。",
        // EN: A1: GDC values either side of 0.001 (at <span class="chem">n = 998</span> and <span class="chem">n = 999</span>).
        "A1：0.001 の両側の GDC の値（<span class=\"chem\">n = 998</span> と <span class=\"chem\">n = 999</span> で）。",
        // EN: A1: <span class="chem">n = 999</span>.
        "A1：<span class=\"chem\">n = 999</span>。",
        // EN: A1: <span class="chem">1/(r(r + 3)) = (1/3)(1/r - 1/(r + 3))</span>.
        "A1：<span class=\"chem\">1/(r(r + 3)) = (1/3)(1/r - 1/(r + 3))</span>。",
        // EN: R1: Explains that the first three positive terms <span class="chem">1, 1/2, 1/3</span> do not cancel and the remaining tail tends to 0.
        "R1：最初の三つの正の項 <span class=\"chem\">1, 1/2, 1/3</span> は打ち消されず、残りの部分は 0 に近づくことを説明する。",
        // EN: A1: <span class="chem">S_∞ = 11/18</span>.
        "A1：<span class=\"chem\">S_∞ = 11/18</span>。",
      ],
    },

    // ── t1-3-q058 · short · challenge · AHL · AHL 1.10 · 14 marks
    "t1-3-q058": {
      // EN: <p>This question investigates how accurately the extended binomial theorem approximates square roots. Let <span class="chem">a</span> be a positive integer and <span class="chem">b</span> a real number.</p><p>(a) Show that <span class="chem">sqrt(a^2 + b) ≈ a + b/(2a) - b^2/(8a^3)</span>, using the first three terms of a binomial expansion. <strong>[3 marks]</strong><br>(b) State the condition on <span class="chem">b</span> for the full expansion to be valid. <strong>[1 mark]</strong><br>(c) Take <span class="chem">b = 1</span>. For <span class="chem">a = 4, 5, 6</span>, use (a) to approximate <span class="chem">sqrt(a^2 + 1)</span>, and use your GDC to find the error <span class="chem">E = sqrt(a^2 + 1) - (a + 1/(2a) - 1/(8a^3))</span> to 3 significant figures. <strong>[3 marks]</strong><br>(d) For each value of <span class="chem">a</span> in (c), calculate <span class="chem">a^5 E</span>. Hence suggest an approximate formula for <span class="chem">E</span> in terms of <span class="chem">a</span>. <strong>[2 marks]</strong><br>(e) By considering the next term of the expansion, justify your formula and generalise it to give an approximation for the error in terms of <span class="chem">a</span> and <span class="chem">b</span>. <strong>[3 marks]</strong><br>(f) Use your GDC to find the least value of <span class="chem">a</span> for which the approximation in (a) of <span class="chem">sqrt(a^2 + 1)</span> has an error less than <span class="chem">10^{-8}</span>. <strong>[2 marks]</strong></p>
      stem: "<p>この問題では、拡張二項定理が平方根をどれほど正確に近似するかを調べる。<span class=\"chem\">a</span> を正の整数、<span class=\"chem\">b</span> を実数とする。</p><p>(a) 二項展開の最初の三つの項を使って、<span class=\"chem\">sqrt(a^2 + b) ≈ a + b/(2a) - b^2/(8a^3)</span> を示しなさい (Show that)。<strong>[3 marks]</strong><br>(b) 展開全体が有効となるための <span class=\"chem\">b</span> の条件を述べなさい (State)。<strong>[1 mark]</strong><br>(c) <span class=\"chem\">b = 1</span> とする。<span class=\"chem\">a = 4, 5, 6</span> について、(a) を使って <span class=\"chem\">sqrt(a^2 + 1)</span> を近似し、GDC を使って誤差 <span class=\"chem\">E = sqrt(a^2 + 1) - (a + 1/(2a) - 1/(8a^3))</span> を有効数字 3 桁で求めなさい。<strong>[3 marks]</strong><br>(d) (c) の各 <span class=\"chem\">a</span> の値について <span class=\"chem\">a^5 E</span> を計算しなさい。これを用いて (Hence)、<span class=\"chem\">E</span> を <span class=\"chem\">a</span> で表す近似式を提案しなさい (Suggest)。<strong>[2 marks]</strong><br>(e) 展開の次の項を考えることにより、あなたの式の理由を示し (Justify)、それを一般化して誤差を <span class=\"chem\">a</span> と <span class=\"chem\">b</span> で表す近似式を求めなさい。<strong>[3 marks]</strong><br>(f) GDC を使って、(a) による <span class=\"chem\">sqrt(a^2 + 1)</span> の近似の誤差が <span class=\"chem\">10^{-8}</span> より小さくなるような <span class=\"chem\">a</span> の最小値を求めなさい (Find)。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: the investigation compares a three-term binomial approximation with the GDC value, looks for a pattern in the errors, and then explains the pattern with the fourth term of the series.
        "解読：この探究では、三つの項による二項近似を GDC の値と比べ、誤差の規則性を見つけ、その規則性を級数の四つ目の項で説明します。",
        // EN: In (a), write <span class="chem">a^2 + b = a^2(1 + b/a^2)</span>.
        "(a) では <span class=\"chem\">a^2 + b = a^2(1 + b/a^2)</span> と書きます。",
        // EN: In (c) and (d), keep full GDC precision: the errors are tiny.
        "(c) と (d) では、GDC の精度を保ったままにしておきます。誤差は非常に小さいからです。",
        // EN: In (e), the <span class="chem">u^3</span> coefficient of <span class="chem">(1 + u)^{1/2}</span> is <span class="chem">(1/2)(-1/2)(-3/2)/3!</span>.
        "(e) では、<span class=\"chem\">(1 + u)^{1/2}</span> の <span class=\"chem\">u^3</span> の係数は <span class=\"chem\">(1/2)(-1/2)(-3/2)/3!</span> です。",
      ],
      // EN: <div class="worked__math">(a) <i>a</i> + <i>b</i>/(2<i>a</i>) − <i>b</i><sup>2</sup>/(8<i>a</i><sup>3</sup>) (b) |<i>b</i>| &lt; <i>a</i><sup>2</sup> (d) <i>E</i> ≈ 1/(16<i>a</i><sup>5</sup>) (e) <i>E</i> ≈ <i>b</i><sup>3</sup>/(16<i>a</i><sup>5</sup>) (f) <i>a</i> = 23</div>
      solution: "<div class=\"worked__math\">(a) <i>a</i> + <i>b</i>/(2<i>a</i>) − <i>b</i><sup>2</sup>/(8<i>a</i><sup>3</sup>) (b) |<i>b</i>| &lt; <i>a</i><sup>2</sup> (d) <i>E</i> ≈ 1/(16<i>a</i><sup>5</sup>) (e) <i>E</i> ≈ <i>b</i><sup>3</sup>/(16<i>a</i><sup>5</sup>) (f) <i>a</i> = 23</div>",
      // EN: <div class="worked__math">(a) √(<i>a</i><sup>2</sup> + <i>b</i>) = <i>a</i>(1 + <span class="frac"><span><i>b</i></span><span><i>a</i><sup>2</sup></span></span>)<sup>1/2</sup> ≈ <i>a</i>(1 + <span class="frac"><span><i>b</i></span><span>2<i>a</i><sup>2</sup></span></span> − <span class="frac"><span><i>b</i><sup>2</sup></span><span>8<i>a</i><sup>4</sup></span></span>) = <i>a</i> + <span class="frac"><span><i>b</i></span><span>2<i>a</i></span></span> − <span class="frac"><span><i>b</i><sup>2</sup></span><span>8<i>a</i><sup>3</sup></span></span></div><div class="worked__math">(b) |<i>b</i>/<i>a</i><sup>2</sup>| &lt; 1 ⇔ |<i>b</i>| &lt; <i>a</i><sup>2</sup></div><div class="worked__math">(c) <i>a</i> = 4: 4.123046875, <i>E</i> = 5.88 × 10<sup>−5</sup>; <i>a</i> = 5: 5.099, <i>E</i> = 1.95 × 10<sup>−5</sup>; <i>a</i> = 6: 6.0827546…, <i>E</i> = 7.90 × 10<sup>−6</sup></div><div class="worked__math">(d) <i>a</i><sup>5</sup><i>E</i> ≈ 0.0602, 0.0610, 0.0614: close to <span class="frac"><span>1</span><span>16</span></span> = 0.0625, so <i>E</i> ≈ <span class="frac"><span>1</span><span>16<i>a</i><sup>5</sup></span></span></div><div class="worked__math">(e) next term: <i>a</i> × <span class="frac"><span>(1/2)(−1/2)(−3/2)</span><span>3!</span></span>(<span class="frac"><span><i>b</i></span><span><i>a</i><sup>2</sup></span></span>)<sup>3</sup> = <span class="frac"><span><i>b</i><sup>3</sup></span><span>16<i>a</i><sup>5</sup></span></span>; the later terms are much smaller, so <i>E</i> ≈ <span class="frac"><span><i>b</i><sup>3</sup></span><span>16<i>a</i><sup>5</sup></span></span></div><div class="worked__math">(f) GDC: <i>a</i> = 22 gives <i>E</i> = 1.21 × 10<sup>−8</sup>, <i>a</i> = 23 gives <i>E</i> = 9.70 × 10<sup>−9</sup> ⇒ <b><i>a</i> = 23</b></div>
      answer: "<div class=\"worked__math\">(a) √(<i>a</i><sup>2</sup> + <i>b</i>) = <i>a</i>(1 + <span class=\"frac\"><span><i>b</i></span><span><i>a</i><sup>2</sup></span></span>)<sup>1/2</sup> ≈ <i>a</i>(1 + <span class=\"frac\"><span><i>b</i></span><span>2<i>a</i><sup>2</sup></span></span> − <span class=\"frac\"><span><i>b</i><sup>2</sup></span><span>8<i>a</i><sup>4</sup></span></span>) = <i>a</i> + <span class=\"frac\"><span><i>b</i></span><span>2<i>a</i></span></span> − <span class=\"frac\"><span><i>b</i><sup>2</sup></span><span>8<i>a</i><sup>3</sup></span></span></div><div class=\"worked__math\">(b) |<i>b</i>/<i>a</i><sup>2</sup>| &lt; 1 ⇔ |<i>b</i>| &lt; <i>a</i><sup>2</sup></div><div class=\"worked__math\">(c) <i>a</i> = 4: 4.123046875, <i>E</i> = 5.88 × 10<sup>−5</sup>; <i>a</i> = 5: 5.099, <i>E</i> = 1.95 × 10<sup>−5</sup>; <i>a</i> = 6: 6.0827546…, <i>E</i> = 7.90 × 10<sup>−6</sup></div><div class=\"worked__math\">(d) <i>a</i><sup>5</sup><i>E</i> ≈ 0.0602, 0.0610, 0.0614：<span class=\"frac\"><span>1</span><span>16</span></span> = 0.0625 に近いので <i>E</i> ≈ <span class=\"frac\"><span>1</span><span>16<i>a</i><sup>5</sup></span></span></div><div class=\"worked__math\">(e) 次の項：<i>a</i> × <span class=\"frac\"><span>(1/2)(−1/2)(−3/2)</span><span>3!</span></span>(<span class=\"frac\"><span><i>b</i></span><span><i>a</i><sup>2</sup></span></span>)<sup>3</sup> = <span class=\"frac\"><span><i>b</i><sup>3</sup></span><span>16<i>a</i><sup>5</sup></span></span>。それ以降の項はずっと小さいので <i>E</i> ≈ <span class=\"frac\"><span><i>b</i><sup>3</sup></span><span>16<i>a</i><sup>5</sup></span></span></div><div class=\"worked__math\">(f) GDC: <i>a</i> = 22 のとき <i>E</i> = 1.21 × 10<sup>−8</sup>, <i>a</i> = 23 のとき <i>E</i> = 9.70 × 10<sup>−9</sup> ⇒ <b><i>a</i> = 23</b></div>",
      markscheme: [
        // EN: M1: Takes out the factor <span class="chem">a</span>: <span class="chem">sqrt(a^2 + b) = a(1 + b/a^2)^{1/2}</span>.
        "M1：因数 <span class=\"chem\">a</span> をくくり出す：<span class=\"chem\">sqrt(a^2 + b) = a(1 + b/a^2)^{1/2}</span>。",
        // EN: M1: Uses <span class="chem">n = 1/2</span> with <span class="chem">u = b/a^2</span>.
        "M1：<span class=\"chem\">u = b/a^2</span> として <span class=\"chem\">n = 1/2</span> を使う。",
        // EN: A1: Expands and multiplies by <span class="chem">a</span>. AG: <span class="chem">a + b/(2a) - b^2/(8a^3)</span>; the given line itself earns no mark.
        "A1：展開して <span class=\"chem\">a</span> を掛ける。AG：<span class=\"chem\">a + b/(2a) - b^2/(8a^3)</span>。与えられた結果の行そのものには得点がない。",
        // EN: A1: <span class="chem">|b| &lt; a^2</span>.
        "A1：<span class=\"chem\">|b| &lt; a^2</span>。",
        // EN: A1: Approximations 4.123046875, 5.099 and 6.0827546…
        "A1：近似値 4.123046875、5.099、6.0827546…",
        // EN: A1: Any two errors correct.
        "A1：誤差のいずれか二つが正しい。",
        // EN: A1: All three errors correct: <span class="chem">5.88 × 10^{-5}</span>, <span class="chem">1.95 × 10^{-5}</span>, <span class="chem">7.90 × 10^{-6}</span>.
        "A1：三つの誤差すべてが正しい：<span class=\"chem\">5.88 × 10^{-5}</span>、<span class=\"chem\">1.95 × 10^{-5}</span>、<span class=\"chem\">7.90 × 10^{-6}</span>。",
        // EN: A1: <span class="chem">a^5 E</span> values 0.0602, 0.0610, 0.0614.
        "A1：<span class=\"chem\">a^5 E</span> の値 0.0602、0.0610、0.0614。",
        // EN: R1: Suggests <span class="chem">E ≈ 1/(16a^5)</span> (or <span class="chem">E ≈ 0.06/a^5</span>).
        "R1：<span class=\"chem\">E ≈ 1/(16a^5)</span>（または <span class=\"chem\">E ≈ 0.06/a^5</span>）を提案する。",
        // EN: M1: Finds the coefficient of the <span class="chem">u^3</span> term: <span class="chem">(1/2)(-1/2)(-3/2)/3! = 1/16</span>.
        "M1：<span class=\"chem\">u^3</span> の項の係数を求める：<span class=\"chem\">(1/2)(-1/2)(-3/2)/3! = 1/16</span>。",
        // EN: A1: Next term <span class="chem">b^3/(16a^5)</span>.
        "A1：次の項 <span class=\"chem\">b^3/(16a^5)</span>。",
        // EN: R1: States that the error is approximately this next term because the later terms are much smaller, so <span class="chem">E ≈ b^3/(16a^5)</span>.
        "R1：それ以降の項はずっと小さいので誤差はほぼこの次の項に等しく、<span class=\"chem\">E ≈ b^3/(16a^5)</span> であると述べる。",
        // EN: M1: Uses the GDC error values (or <span class="chem">1/(16a^5) &lt; 10^{-8}</span>) for consecutive values of <span class="chem">a</span>.
        "M1：連続する <span class=\"chem\">a</span> の値について GDC の誤差の値（または <span class=\"chem\">1/(16a^5) &lt; 10^{-8}</span>）を使う。",
        // EN: A1: <span class="chem">a = 23</span>.
        "A1：<span class=\"chem\">a = 23</span>。",
      ],
    },

    // ── t1-3-q059 · short · exam · AHL · AHL 1.10; SL 4.5 · 14 marks
    "t1-3-q059": {
      // EN: <p>This question investigates the number of ways to choose <span class="chem">k</span> seats from a row of <span class="chem">n</span> seats so that no two chosen seats are next to each other. Call this number <span class="chem">N(n, k)</span>.</p><p>(a) By listing, show that <span class="chem">N(5, 2) = 6</span>. <strong>[2 marks]</strong><br>(b) Find <span class="chem">N(4, 2)</span>, <span class="chem">N(6, 2)</span> and <span class="chem">N(7, 2)</span>, and conjecture a formula for <span class="chem">N(n, 2)</span> in the form <sup><i>p</i></sup>C<sub>2</sub>. <strong>[2 marks]</strong><br>(c) By thinking of the <span class="chem">n - k</span> seats that are <strong>not</strong> chosen, explain why <span class="chem">N(n, k)</span> = <sup><i>n</i>−<i>k</i>+1</sup>C<sub><i>k</i></sub>. <strong>[3 marks]</strong><br>(d) Hence find <span class="chem">N(20, 4)</span>. <strong>[1 mark]</strong><br>(e) Four friends sit down at random in 4 of the 20 seats of an empty row. Find the probability that no two of them sit next to each other. <strong>[3 marks]</strong><br>(f) Four people sit at random in a row of <span class="chem">n</span> empty seats. Use your GDC to find the least value of <span class="chem">n</span> for which the probability that no two of them are next to each other exceeds 0.9. <strong>[3 marks]</strong></p>
      stem: "<p>この問題では、横一列に並んだ <span class=\"chem\">n</span> 個の座席から、選んだどの二つの座席も隣り合わないように <span class=\"chem\">k</span> 個の座席を選ぶ方法の数を調べる。この数を <span class=\"chem\">N(n, k)</span> とする。</p><p>(a) 書き出すことによって <span class=\"chem\">N(5, 2) = 6</span> を示しなさい (Show that)。<strong>[2 marks]</strong><br>(b) <span class=\"chem\">N(4, 2)</span>、<span class=\"chem\">N(6, 2)</span>、<span class=\"chem\">N(7, 2)</span> を求め、<span class=\"chem\">N(n, 2)</span> の式を <sup><i>p</i></sup>C<sub>2</sub> の形で予想しなさい (Conjecture)。<strong>[2 marks]</strong><br>(c) 選ば<strong>ない</strong> <span class=\"chem\">n - k</span> 個の座席を考えることにより、<span class=\"chem\">N(n, k)</span> = <sup><i>n</i>−<i>k</i>+1</sup>C<sub><i>k</i></sub> となる理由を説明しなさい (Explain)。<strong>[3 marks]</strong><br>(d) これを用いて (Hence)、<span class=\"chem\">N(20, 4)</span> を求めなさい。<strong>[1 mark]</strong><br>(e) 四人の友人が、空いている横一列の 20 席のうち 4 席に無作為に座る。どの二人も隣り合わない確率を求めなさい (Find)。<strong>[3 marks]</strong><br>(f) 四人が、空いている横一列の <span class=\"chem\">n</span> 席に無作為に座る。GDC を使って、どの二人も隣り合わない確率が 0.9 を超えるような <span class=\"chem\">n</span> の最小値を求めなさい。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: In (a), list the pairs in order: {1,3}, {1,4}, … and stop when you reach {3,5}.
        "(a) では、組を順に書き出します：{1,3}、{1,4}、… と進め、{3,5} に達したら止めます。",
        // EN: In (c), this is the gap method: draw the unchosen seats as <code>O _ O _ O</code> and place the chosen seats into the gaps.
        "(c) では、これは間に入れる方法です。選ばない座席を <code>O _ O _ O</code> のようにかき、選ぶ座席をすき間に入れます。",
        // EN: In (e), the seats chosen are an unordered set of 4 seats, all <span class="chem">20C4</span> sets equally likely.
        "(e) では、選ばれる座席は 4 席の順序を区別しない集合であり、<span class=\"chem\">20C4</span> 通りの集合はすべて同様に確からしいです。",
        // EN: In (f), tabulate <span class="chem">y = (x - 3)C4 / xC4</span> on your GDC; it increases with <span class="chem">x</span>.
        "(f) では、GDC で <span class=\"chem\">y = (x - 3)C4 / xC4</span> の数表を作ります。この値は <span class=\"chem\">x</span> とともに増加します。",
      ],
      // EN: <div class="worked__math">(b) <i>N</i>(<i>n</i>, 2) = <sup><i>n</i>−1</sup>C<sub>2</sub> (d) 2380 (e) 2380/4845 ≈ 0.491 (f) <i>n</i> = 117</div>
      solution: "<div class=\"worked__math\">(b) <i>N</i>(<i>n</i>, 2) = <sup><i>n</i>−1</sup>C<sub>2</sub> (d) 2380 (e) 2380/4845 ≈ 0.491 (f) <i>n</i> = 117</div>",
      // EN: <div class="worked__math">(a) seats 1–5: {1,3}, {1,4}, {1,5}, {2,4}, {2,5}, {3,5}: 6 ways</div><div class="worked__math">(b) <i>N</i>(4, 2) = 3, <i>N</i>(6, 2) = 10, <i>N</i>(7, 2) = 15: these are <sup>3</sup>C<sub>2</sub>, <sup>5</sup>C<sub>2</sub>, <sup>6</sup>C<sub>2</sub>, so <i>N</i>(<i>n</i>, 2) = <sup><i>n</i>−1</sup>C<sub>2</sub></div><div class="worked__math">(c) the <i>n</i> − <i>k</i> unchosen seats form a row with <i>n</i> − <i>k</i> + 1 gaps (including both ends); putting at most one chosen seat in each gap keeps chosen seats apart, and every valid choice arises once, so <i>N</i>(<i>n</i>, <i>k</i>) = <sup><i>n</i>−<i>k</i>+1</sup>C<sub><i>k</i></sub></div><div class="worked__math">(d) <sup>17</sup>C<sub>4</sub> = <b>2380</b></div><div class="worked__math">(e) P = <span class="frac"><span>2380</span><span><sup>20</sup>C<sub>4</sub></span></span> = <span class="frac"><span>2380</span><span>4845</span></span> ≈ <b>0.491</b> (the order of the friends cancels: 4! × 2380 / <sup>20</sup>P<sub>4</sub>)</div><div class="worked__math">(f) <span class="frac"><span><sup><i>n</i>−3</sup>C<sub>4</sub></span><span><sup><i>n</i></sup>C<sub>4</sub></span></span> &gt; 0.9; GDC: 0.8992… at <i>n</i> = 116, 0.9000… at <i>n</i> = 117 ⇒ <b><i>n</i> = 117</b></div>
      answer: "<div class=\"worked__math\">(a) 座席 1–5：{1,3}, {1,4}, {1,5}, {2,4}, {2,5}, {3,5}：6 通り</div><div class=\"worked__math\">(b) <i>N</i>(4, 2) = 3, <i>N</i>(6, 2) = 10, <i>N</i>(7, 2) = 15：これらは <sup>3</sup>C<sub>2</sub>, <sup>5</sup>C<sub>2</sub>, <sup>6</sup>C<sub>2</sub> なので <i>N</i>(<i>n</i>, 2) = <sup><i>n</i>−1</sup>C<sub>2</sub></div><div class=\"worked__math\">(c) 選ばない <i>n</i> − <i>k</i> 個の座席が一列に並ぶと <i>n</i> − <i>k</i> + 1 個のすき間（両端を含む）ができる。各すき間に選ぶ座席を多くても一つ入れれば選ぶ座席は離れ、条件を満たす選び方はそれぞれちょうど一回ずつ現れるので、<i>N</i>(<i>n</i>, <i>k</i>) = <sup><i>n</i>−<i>k</i>+1</sup>C<sub><i>k</i></sub></div><div class=\"worked__math\">(d) <sup>17</sup>C<sub>4</sub> = <b>2380</b></div><div class=\"worked__math\">(e) P = <span class=\"frac\"><span>2380</span><span><sup>20</sup>C<sub>4</sub></span></span> = <span class=\"frac\"><span>2380</span><span>4845</span></span> ≈ <b>0.491</b>（友人の順序は約分される：4! × 2380 / <sup>20</sup>P<sub>4</sub>）</div><div class=\"worked__math\">(f) <span class=\"frac\"><span><sup><i>n</i>−3</sup>C<sub>4</sub></span><span><sup><i>n</i></sup>C<sub>4</sub></span></span> &gt; 0.9。GDC：<i>n</i> = 116 で 0.8992…、<i>n</i> = 117 で 0.9000… ⇒ <b><i>n</i> = 117</b></div>",
      markscheme: [
        // EN: M1: Systematic list of pairs from seats 1 to 5.
        "M1：座席 1 から 5 までの組を系統的に書き出す。",
        // EN: A1: The six pairs {1,3}, {1,4}, {1,5}, {2,4}, {2,5}, {3,5}. AG: <span class="chem">N(5, 2) = 6</span>.
        "A1：六つの組 {1,3}、{1,4}、{1,5}、{2,4}、{2,5}、{3,5}。AG：<span class=\"chem\">N(5, 2) = 6</span>。",
        // EN: A1: 3, 10, 15.
        "A1：3、10、15。",
        // EN: A1: Conjecture <sup><i>n</i>−1</sup>C<sub>2</sub>.
        "A1：予想 <sup><i>n</i>−1</sup>C<sub>2</sub>。",
        // EN: R1: The <span class="chem">n - k</span> unchosen seats create <span class="chem">n - k + 1</span> gaps, including both ends.
        "R1：選ばない <span class=\"chem\">n - k</span> 個の座席によって、両端を含めて <span class=\"chem\">n - k + 1</span> 個のすき間ができる。",
        // EN: R1: Chosen seats are non-adjacent exactly when each gap holds at most one chosen seat.
        "R1：選ぶ座席どうしが隣り合わないのは、各すき間に選ぶ座席が多くても一つしか入らないときであり、そのときに限る。",
        // EN: R1: So a valid choice corresponds to choosing <span class="chem">k</span> of the <span class="chem">n - k + 1</span> gaps, giving <sup><i>n</i>−<i>k</i>+1</sup>C<sub><i>k</i></sub>.
        "R1：したがって条件を満たす選び方は <span class=\"chem\">n - k + 1</span> 個のすき間から <span class=\"chem\">k</span> 個を選ぶことに対応し、<sup><i>n</i>−<i>k</i>+1</sup>C<sub><i>k</i></sub> となる。",
        // EN: A1: 2380.
        "A1：2380。",
        // EN: M1: Uses <sup>20</sup>C<sub>4</sub> = 4845 as the number of equally likely sets of seats (or <sup>20</sup>P<sub>4</sub> with 4! × 2380).
        "M1：同様に確からしい座席の集合の数として <sup>20</sup>C<sub>4</sub> = 4845 を使う（または <sup>20</sup>P<sub>4</sub> と 4! × 2380 を使う）。",
        // EN: A1: <span class="chem">2380/4845</span>.
        "A1：<span class=\"chem\">2380/4845</span>。",
        // EN: A1: 0.491.
        "A1：0.491。",
        // EN: M1: Sets up <sup><i>n</i>−3</sup>C<sub>4</sub> / <sup><i>n</i></sup>C<sub>4</sub> &gt; 0.9.
        "M1：<sup><i>n</i>−3</sup>C<sub>4</sub> / <sup><i>n</i></sup>C<sub>4</sub> &gt; 0.9 とおく。",
        // EN: A1: GDC values either side of 0.9 (at <span class="chem">n = 116</span> and <span class="chem">n = 117</span>).
        "A1：0.9 の両側の GDC の値（<span class=\"chem\">n = 116</span> と <span class=\"chem\">n = 117</span> で）。",
        // EN: A1: <span class="chem">n = 117</span>.
        "A1：<span class=\"chem\">n = 117</span>。",
      ],
    },

  }
});
