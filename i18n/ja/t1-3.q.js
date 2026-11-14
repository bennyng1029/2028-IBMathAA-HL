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
      // EN: <p>Given that <span class="chem">(7x - 1) / ((x - 1)(x + 2)) = A / (x - 1) + B / (x + 2)</span>, find the value of <span class="chem">A</span>.</p>
      stem: "<p><span class=\"chem\">(7x - 1) / ((x - 1)(x + 2)) = A / (x - 1) + B / (x + 2)</span> が成り立つとき、<span class=\"chem\">A</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Multiply both sides by <span class="chem">(x - 1)(x + 2)</span> to get <span class="chem">7x - 1 = A(x + 2) + B(x - 1)</span>.
        "両辺に <span class=\"chem\">(x - 1)(x + 2)</span> を掛けて <span class=\"chem\">7x - 1 = A(x + 2) + B(x - 1)</span> とします。",
        // EN: Substitute <span class="chem">x = 1</span> so the <span class="chem">B</span> term becomes zero.
        "<span class=\"chem\">x = 1</span> を代入して <span class=\"chem\">B</span> の項を 0 にします。",
      ],
      // EN: <div class="worked__math">7<i>x</i> − 1 ≡ <i>A</i>(<i>x</i> + 2) + <i>B</i>(<i>x</i> − 1)</div><div class="worked__math">Set <i>x</i> = 1: 6 = 3<i>A</i> ⇒ <b><i>A</i> = 2</b></div>
      solution: "<div class=\"worked__math\">7<i>x</i> − 1 ≡ <i>A</i>(<i>x</i> + 2) + <i>B</i>(<i>x</i> − 1)</div><div class=\"worked__math\"><i>x</i> = 1 を代入：6 = 3<i>A</i> ⇒ <b><i>A</i> = 2</b></div>",
    },

    // ── t1-3-q004 · mcq · foundation · AHL · AHL 1.11 · 3 marks
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

    // ── t1-3-q006 · order · foundation · AHL · AHL 1.11 · 3 marks
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

    // ── t1-3-q009 · mcq · exam · AHL · AHL 1.10 · 5 marks
    "t1-3-q009": {
      // EN: <p>Seven distinct books—4 mathematics books and 3 physics books—are arranged on a shelf. In how many ways can they be arranged if no two physics books are next to each other?</p>
      stem: "<p>異なる 7 冊の本（数学の本 4 冊と物理の本 3 冊）を本棚に 1 列に並べる。どの 2 冊の物理の本も隣り合わない並べ方は何通りありますか？</p>",
      options: [
        // EN: 1440
        "1440",
        // EN: 4320
        "4320",
        // EN: 240
        "240",
        // EN: 144
        "144",
      ],
      hints: [
        // EN: Use the Gap method: arrange the 4 mathematics books first in <span class="chem">4!</span> ways.
        "間に入れる方法を使います：まず 4 冊の数学の本を <span class=\"chem\">4!</span> 通りで並べます。",
        // EN: There are 5 gaps around the 4 math books. Place the 3 distinct physics books in <span class="chem">5P3</span> ways.
        "4 冊の数学の本の周りには 5 個のすき間があります。異なる 3 冊の物理の本を <span class=\"chem\">5P3</span> 通りで配置します。",
      ],
      // EN: <div class="worked__math">4! × <sup>5</sup>P<sub>3</sub> = 24 × 60 = <b>1440</b></div>
      solution: "<div class=\"worked__math\">4! × <sup>5</sup>P<sub>3</sub> = 24 × 60 = <b>1440</b></div>",
      misconception: {
        // EN (option B): 4320 comes from <span class="chem">7! - 5!3!</span>, which only subtracts arrangements where all 3 physics books are together, leaving cases where 2 physics books are adjacent.
        "1": "4320 は <span class=\"chem\">7! - 5!3!</span> による値ですが、これは 3 冊すべてが隣り合う場合だけを引いており、2 冊だけが隣り合う場合が残ってしまいます。",
        // EN (option C): 240 uses <span class="chem">4! × 5C3</span> instead of <span class="chem">4! × 5P3</span>; the 3 physics books are distinct so their order in the gaps matters.
        "2": "240 は <span class=\"chem\">4! × 5P3</span> ではなく <span class=\"chem\">4! × 5C3</span> を使った値です。3 冊の物理の本は異なるため、すき間への入れ方にも順序があります。",
        // EN (option D): 144 is <span class="chem">4! × 3!</span>, which forgets to choose 3 gaps out of the 5 available gaps.
        "3": "144 は <span class=\"chem\">4! × 3!</span> であり、5 個のすき間から 3 箇所を選ぶことを忘れています。",
      },
    },

    // ── t1-3-q010 · numeric · exam · AHL · AHL 1.11 · 5 marks
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

    // ── t1-3-q011 · numeric · exam · AHL · AHL 1.11 · 5 marks
    "t1-3-q011": {
      // EN: <p>Given that <span class="chem">(x^2 + 6x - 1) / ((x - 1)(x + 2)) = A + B / (x - 1) + C / (x + 2)</span>, find the value of <span class="chem">A + B + C</span>.</p>
      stem: "<p><span class=\"chem\">(x^2 + 6x - 1) / ((x - 1)(x + 2)) = A + B / (x - 1) + C / (x + 2)</span> が成り立つとき、<span class=\"chem\">A + B + C</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Clear the denominator: <span class="chem">x^2 + 6x - 1 = A(x - 1)(x + 2) + B(x + 2) + C(x - 1)</span>.
        "分母を払います：<span class=\"chem\">x^2 + 6x - 1 = A(x - 1)(x + 2) + B(x + 2) + C(x - 1)</span>。",
        // EN: Match <span class="chem">x^2</span> coefficients for <span class="chem">A</span>, then substitute <span class="chem">x = 1</span> and <span class="chem">x = -2</span> for <span class="chem">B</span> and <span class="chem">C</span>.
        "<span class=\"chem\">x^2</span> の係数を比較して <span class=\"chem\">A</span> を求め、次に <span class=\"chem\">x = 1</span> と <span class=\"chem\">x = -2</span> を代入して <span class=\"chem\">B</span> と <span class=\"chem\">C</span> を求めます。",
      ],
      // EN: <div class="worked__math"><i>A</i> = 1; <i>x</i> = 1 ⇒ 6 = 3<i>B</i> ⇒ <i>B</i> = 2; <i>x</i> = −2 ⇒ −9 = −3<i>C</i> ⇒ <i>C</i> = 3</div><div class="worked__math"><i>A</i> + <i>B</i> + <i>C</i> = 1 + 2 + 3 = <b>6</b></div>
      solution: "<div class=\"worked__math\"><i>A</i> = 1; <i>x</i> = 1 ⇒ 6 = 3<i>B</i> ⇒ <i>B</i> = 2; <i>x</i> = −2 ⇒ −9 = −3<i>C</i> ⇒ <i>C</i> = 3</div><div class=\"worked__math\"><i>A</i> + <i>B</i> + <i>C</i> = 1 + 2 + 3 = <b>6</b></div>",
    },

    // ── t1-3-q012 · mcq · exam · AHL · AHL 1.11 · 5 marks
    "t1-3-q012": {
      // EN: <p>Find the coefficient of <span class="chem">x^2</span> in the expansion of <span class="chem">(2 + x) / ((1 - x)(1 + 2x))</span> in ascending powers of <span class="chem">x</span>.</p>
      stem: "<p><span class=\"chem\">(2 + x) / ((1 - x)(1 + 2x))</span> を <span class=\"chem\">x</span> の昇べきの順に展開したときの <span class=\"chem\">x^2</span> の係数を求めなさい (Find)。</p>",
      options: [
        // EN: 5
        "5",
        // EN: −3
        "−3",
        // EN: 3
        "3",
        // EN: 1
        "1",
      ],
      hints: [
        // EN: Decompose into partial fractions first: <span class="chem">A / (1 - x) + B / (1 + 2x)</span>.
        "まず部分分数分解します：<span class=\"chem\">A / (1 - x) + B / (1 + 2x)</span>。",
        // EN: You should get <span class="chem">A = 1</span> and <span class="chem">B = 1</span>. Now expand <span class="chem">(1 - x)^{-1} + (1 + 2x)^{-1}</span> up to <span class="chem">x^2</span>.
        "<span class=\"chem\">A = 1</span>、<span class=\"chem\">B = 1</span> になるはずです。次に <span class=\"chem\">(1 - x)^{-1} + (1 + 2x)^{-1}</span> を <span class=\"chem\">x^2</span> の項まで展開します。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>2 + <i>x</i></span><span>(1 − <i>x</i>)(1 + 2<i>x</i>)</span></span> = (1 − <i>x</i>)<sup>−1</sup> + (1 + 2<i>x</i>)<sup>−1</sup> = (1 + <i>x</i> + <i>x</i><sup>2</sup> + …) + (1 − 2<i>x</i> + 4<i>x</i><sup>2</sup> − …) = 2 − <i>x</i> + <b>5</b><i>x</i><sup>2</sup> + …</div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>2 + <i>x</i></span><span>(1 − <i>x</i>)(1 + 2<i>x</i>)</span></span> = (1 − <i>x</i>)<sup>−1</sup> + (1 + 2<i>x</i>)<sup>−1</sup> = (1 + <i>x</i> + <i>x</i><sup>2</sup> + …) + (1 − 2<i>x</i> + 4<i>x</i><sup>2</sup> − …) = 2 − <i>x</i> + <b>5</b><i>x</i><sup>2</sup> + …</div>",
      misconception: {
        // EN (option B): −3 comes from writing <span class="chem">(1 + 2x)^{-1} = 1 - 2x - 4x^2 + ...</span> instead of <span class="chem">1 - 2x + 4x^2 - ...</span>.
        "1": "−3 は <span class=\"chem\">1 - 2x + 4x^2 - ...</span> ではなく <span class=\"chem\">(1 + 2x)^{-1} = 1 - 2x - 4x^2 + ...</span> としてしまった結果です。",
        // EN (option C): 3 comes from forgetting to square the 2 in <span class="chem">(-2x)^2</span> or making a sign error on <span class="chem">B</span>.
        "2": "3 は <span class=\"chem\">(-2x)^2</span> で 2 を 2 乗し忘れたか、<span class=\"chem\">B</span> の符号を間違えた結果です。",
        // EN (option D): 1 comes from forgetting the factor of 2 in <span class="chem">2x</span> when expanding <span class="chem">(1 + 2x)^{-1}</span>.
        "3": "1 は <span class=\"chem\">(1 + 2x)^{-1}</span> を展開する際に <span class=\"chem\">2x</span> の係数 2 を忘れた結果です。",
      },
    },

    // ── t1-3-q013 · short · exam · AHL · AHL 1.11 · 6 marks
    "t1-3-q013": {
      // EN: <p>(a) Express <span class="chem">f(x) = (5x + 1) / ((1 - x)(2 + x))</span> in partial fractions. <strong>[3 marks]</strong><br>(b) Hence find the first three terms in the expansion of <span class="chem">f(x)</span> in ascending powers of <span class="chem">x</span>, and state the set of values of <span class="chem">x</span> for which the expansion is valid. <strong>[3 marks]</strong></p>
      stem: "<p>(a) <span class=\"chem\">f(x) = (5x + 1) / ((1 - x)(2 + x))</span> を部分分数分解しなさい。 <strong>[3 marks]</strong><br>(b) これを用いて (Hence)、<span class=\"chem\">f(x)</span> を <span class=\"chem\">x</span> の昇べきの順に展開した最初の 3 項を求め (Find)、その展開が有効となる <span class=\"chem\">x</span> の値の範囲を述べなさい (State)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Use <span class="chem">x = 1</span> and <span class="chem">x = -2</span> to find <span class="chem">A</span> and <span class="chem">B</span>.
        "<span class=\"chem\">x = 1</span> と <span class=\"chem\">x = -2</span> を代入して <span class=\"chem\">A</span> と <span class=\"chem\">B</span> を求めます。",
        // EN: Factor out <span class="chem">2^{-1} = 1/2</span> from <span class="chem">(2 + x)^{-1}</span> before expanding.
        "展開する前に <span class=\"chem\">(2 + x)^{-1}</span> から <span class=\"chem\">2^{-1} = 1/2</span> をくくり出します。",
      ],
      // EN: <div class="worked__math">(a) <i>f</i>(<i>x</i>) = <span class="frac"><span>2</span><span>1 − <i>x</i></span></span> − <span class="frac"><span>3</span><span>2 + <i>x</i></span></span></div><div class="worked__math">(b) <i>f</i>(<i>x</i>) ≈ <b><span class="frac"><span>1</span><span>2</span></span> + <span class="frac"><span>11</span><span>4</span></span><i>x</i> + <span class="frac"><span>13</span><span>8</span></span><i>x</i><sup>2</sup></b>, valid for <b>|<i>x</i>| &lt; 1</b></div>
      solution: "<div class=\"worked__math\">(a) <i>f</i>(<i>x</i>) = <span class=\"frac\"><span>2</span><span>1 − <i>x</i></span></span> − <span class=\"frac\"><span>3</span><span>2 + <i>x</i></span></span></div><div class=\"worked__math\">(b) <i>f</i>(<i>x</i>) ≈ <b><span class=\"frac\"><span>1</span><span>2</span></span> + <span class=\"frac\"><span>11</span><span>4</span></span><i>x</i> + <span class=\"frac\"><span>13</span><span>8</span></span><i>x</i><sup>2</sup></b>、<b>|<i>x</i>| &lt; 1</b> で有効</div>",
      markscheme: [
        // EN: M1: Set <span class="chem">5x + 1 = A(2 + x) + B(1 - x)</span>.
        "M1：<span class=\"chem\">5x + 1 = A(2 + x) + B(1 - x)</span> とおく。",
        // EN: A1: Obtain <span class="chem">A = 2</span> and <span class=\"chem">B = -3</span>, giving <span class="chem">2/(1 - x) - 3/(2 + x)</span>.
        "A1：<span class=\"chem\">A = 2</span> と <span class=\"chem\">B = -3</span> を求め、<span class=\"chem\">2/(1 - x) - 3/(2 + x)</span> を得る。",
        // EN: M1: Expand <span class="chem">2(1 - x)^{-1} = 2 + 2x + 2x^2 + ...</span> and <span class="chem">-(3/2)(1 + x/2)^{-1} = -3/2 + (3/4)x - (3/8)x^2 + ...</span>.
        "M1：<span class=\"chem\">2(1 - x)^{-1} = 2 + 2x + 2x^2 + ...</span> と <span class=\"chem\">-(3/2)(1 + x/2)^{-1} = -3/2 + (3/4)x - (3/8)x^2 + ...</span> を展開する。",
        // EN: A1: Combine like terms to get <span class="chem">1/2 + (11/4)x + (13/8)x^2</span>.
        "A1：同類項をまとめて <span class=\"chem\">1/2 + (11/4)x + (13/8)x^2</span> を得る。",
        // EN: R1: State validity <span class="chem">|x| &lt; 1</span> (intersection of <span class="chem">|x| &lt; 1</span> and <span class="chem">|x| &lt; 2</span>).
        "R1：収束範囲 <span class=\"chem\">|x| &lt; 1</span>（<span class=\"chem\">|x| &lt; 1</span> と <span class=\"chem\">|x| &lt; 2</span> の共通部分）を述べる。",
      ],
    },

    // ── t1-3-q014 · numeric · exam · AHL · AHL 1.11 · 5 marks
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
        // EN: The thousands digit must be in <span class="chem">{3, 4, 5, 6}</span> and the units digit must be in <span class="chem">{2, 4, 6}</span>. Because 4 and 6 appear in both sets, split into two cases!
        "千の位は <span class=\"chem\">{3, 4, 5, 6}</span>、一の位は <span class=\"chem\">{2, 4, 6}</span> でなければなりません。4 と 6 が両方に含まれるため、2 つの場合に分けましょう。",
        // EN: Case 1: thousands digit is odd (<span class="chem">{3, 5}</span>) → <span class="chem">2 × 3 × 4 × 3</span>. Case 2: thousands digit is even (<span class="chem">{4, 6}</span>) → <span class="chem">2 × 2 × 4 × 3</span>.
        "場合 1：千の位が奇数（<span class=\"chem\">{3, 5}</span>）→ <span class=\"chem\">2 × 3 × 4 × 3</span>。場合 2：千の位が偶数（<span class=\"chem\">{4, 6}</span>）→ <span class=\"chem\">2 × 2 × 4 × 3</span>。",
      ],
      // EN: <div class="worked__math">Case 1 (thousands ∈ {3, 5}): 2 × 4 × 3 × 3 = 72</div><div class="worked__math">Case 2 (thousands ∈ {4, 6}): 2 × 4 × 3 × 2 = 48</div><div class="worked__math">Total = 72 + 48 = <b>120</b></div>
      solution: "<div class=\"worked__math\">場合 1 (千の位 ∈ {3, 5}): 2 × 4 × 3 × 3 = 72</div><div class=\"worked__math\">場合 2 (千の位 ∈ {4, 6}): 2 × 4 × 3 × 2 = 48</div><div class=\"worked__math\">合計 = 72 + 48 = <b>120</b></div>",
    },

    // ── t1-3-q016 · numeric · challenge · AHL · AHL 1.11 · 6 marks
    "t1-3-q016": {
      // EN: <p>Find the coefficient of <span class="chem">x^2</span> in the binomial expansion of <span class="chem">(1 + 2x) / sqrt(1 - 3x)</span>.</p>
      stem: "<p><span class=\"chem\">(1 + 2x) / sqrt(1 - 3x)</span> の二項展開における <span class=\"chem\">x^2</span> の係数を求めなさい (Find)。</p>",
      hints: [
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

    // ── t1-3-q017 · short · challenge · AHL · AHL 1.10 & 1.11 · 7 marks
    "t1-3-q017": {
      // EN: <p>(a) Express <span class="chem">1 / (r(r + 1))</span> in partial fractions, and hence find a simplified expression for <span class="chem">sum_{r=1}^n 1 / (r(r + 1))</span>. <strong>[3 marks]</strong><br>(b) Using the first three terms of the binomial expansion of <span class="chem">(1 + x)^{1/2}</span>, estimate <span class="chem">sqrt(0.98)</span> to 5 decimal places. <strong>[4 marks]</strong></p>
      stem: "<p>(a) <span class=\"chem\">1 / (r(r + 1))</span> を部分分数分解し、これを用いて (hence) <span class=\"chem\">sum_{r=1}^n 1 / (r(r + 1))</span> を簡単な式で表しなさい (Find)。 <strong>[3 marks]</strong><br>(b) <span class=\"chem\">(1 + x)^{1/2}</span> の二項展開の最初の 3 項を用いて、<span class=\"chem\">sqrt(0.98)</span> の近似値を小数第 5 位まで求めなさい。 <strong>[4 marks]</strong></p>",
      hints: [
        // EN: In (a), write out the first few terms of <span class="chem">(1/r - 1/(r+1))</span> to see the telescoping cancellation.
        "(a) では、<span class=\"chem\">(1/r - 1/(r+1))</span> の最初の数項を書き出して、途中の項が打ち消し合う様子を確認しましょう。",
        // EN: In (b), write <span class="chem">0.98 = 1 - 0.02</span> so <span class="chem">x = -0.02</span>.
        "(b) では、<span class=\"chem\">0.98 = 1 - 0.02</span> とみて <span class=\"chem\">x = -0.02</span> を代入します。",
      ],
      // EN: <div class="worked__math">(a) <span class="frac"><span>1</span><span><i>r</i></span></span> − <span class="frac"><span>1</span><span><i>r</i> + 1</span></span> ⇒ ∑ = 1 − <span class="frac"><span>1</span><span><i>n</i> + 1</span></span> = <b><span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span></b></div><div class="worked__math">(b) (1 − 0.02)<sup>1/2</sup> ≈ 1 + <span class="frac"><span>1</span><span>2</span></span>(−0.02) − <span class="frac"><span>1</span><span>8</span></span>(−0.02)<sup>2</sup> = 1 − 0.01 − 0.00005 = <b>0.98995</b></div>
      solution: "<div class=\"worked__math\">(a) <span class=\"frac\"><span>1</span><span><i>r</i></span></span> − <span class=\"frac\"><span>1</span><span><i>r</i> + 1</span></span> ⇒ ∑ = 1 − <span class=\"frac\"><span>1</span><span><i>n</i> + 1</span></span> = <b><span class=\"frac\"><span><i>n</i></span><span><i>n</i> + 1</span></span></b></div><div class=\"worked__math\">(b) (1 − 0.02)<sup>1/2</sup> ≈ 1 + <span class=\"frac\"><span>1</span><span>2</span></span>(−0.02) − <span class=\"frac\"><span>1</span><span>8</span></span>(−0.02)<sup>2</sup> = 1 − 0.01 − 0.00005 = <b>0.98995</b></div>",
      markscheme: [
        // EN: M1 A1: <span class="chem">1/(r(r+1)) = 1/r - 1/(r+1)</span>.
        "M1 A1：<span class=\"chem\">1/(r(r+1)) = 1/r - 1/(r+1)</span>。",
        // EN: A1: Telescoping sum collapses to <span class="chem">1 - 1/(n+1) = n / (n + 1)</span>.
        "A1：途中の項が消えて和は <span class=\"chem\">1 - 1/(n+1) = n / (n + 1)</span> になる。",
        // EN: M1 A1: <span class="chem">(1 + x)^{1/2} = 1 + (1/2)x - (1/8)x^2 + ...</span>.
        "M1 A1：<span class=\"chem\">(1 + x)^{1/2} = 1 + (1/2)x - (1/8)x^2 + ...</span>。",
        // EN: M1 A1: Substitute <span class="chem">x = -0.02</span> to get <span class="chem">1 - 0.01 - 0.00005 = 0.98995</span>.
        "M1 A1：<span class=\"chem\">x = -0.02</span> を代入して <span class=\"chem\">1 - 0.01 - 0.00005 = 0.98995</span> を得る。",
      ],
    },

    // ── t1-3-q018 · mcq · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q018": {
      // EN: <p>Four couples (8 people) sit in a row of 8 chairs. In how many ways can they be seated if each couple must sit together?</p>
      stem: "<p>4 組のカップル（計 8 人）が 8 席の横一列の椅子に座る。各カップルが必ず隣り合って座るとき、座り方は何通りありますか？</p>",
      options: [
        // EN: 384
        "384",
        // EN: 48
        "48",
        // EN: 24
        "24",
        // EN: 1152
        "1152",
      ],
      hints: [
        // EN: Glue each of the 4 couples into a single block. How many ways can you arrange the 4 blocks?
        "4 組のカップルをそれぞれ 1 つのブロックにまとめます。4 つのブロックの並べ方は何通りありますか？",
        // EN: Multiply by <span class="chem">2!</span> for each of the 4 couples: <span class="chem">4! × (2!)^4</span>.
        "4 組のカップルそれぞれについて <span class=\"chem\">2!</span> を掛けます：<span class=\"chem\">4! × (2!)^4</span>。",
      ],
      // EN: <div class="worked__math">4! × (2!)<sup>4</sup> = 24 × 16 = <b>384</b></div>
      solution: "<div class=\"worked__math\">4! × (2!)<sup>4</sup> = 24 × 16 = <b>384</b></div>",
      misconception: {
        // EN (option B): 48 is <span class="chem">4! × 2</span>, which only multiplies by 2 once instead of <span class="chem">2!</span> for each of the 4 couples (<span class="chem">2^4</span>).
        "1": "48 は <span class=\"chem\">4! × 2</span> であり、4 組それぞれに <span class=\"chem\">2!</span>（つまり <span class=\"chem\">2^4</span>）を掛けるのではなく 2 を 1 回だけ掛けてしまっています。",
        // EN (option C): 24 is <span class="chem">4!</span>, which arranges the 4 couples but forgets that the two people inside each couple can swap seats.
        "2": "24 は <span class=\"chem\">4!</span> であり、4 組の並べ方だけを数えて各カップル内の 2 人の入れ替えを忘れています。",
        // EN (option D): 1152 is <span class="chem">4! × 4! × 2</span>, mixing up the internal swap factor.
        "3": "1152 は <span class=\"chem\">4! × 4! × 2</span> であり、内部の入れ替えの係数を混同しています。",
      },
    },

  }
});
